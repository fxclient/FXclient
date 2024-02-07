function a() {
	function d(j) {
		console.log("Video Ad Completed: " + j)
	}

	function c() {
		return m || n
	}
	this.b = function() {
		var g;
		c() || (window.aiptag = window.aiptag || {
				cmd: []
			}, aiptag.cmd.display = aiptag.cmd.display || [], aiptag.cmd.player = aiptag.cmd.player || [], aiptag.cmp = {
				show: !0,
				position: "centered",
				button: !0,
				buttonText: "Privacy settings",
				buttonPosition: "bottom-right"
			}, aiptag.cmd.player.push(function() {
				aiptag.adplayer = new aipPlayer({
					AD_WIDTH: 960,
					AD_HEIGHT: 540,
					AD_DISPLAY: "default",
					LOADING_TEXT: "loading advertisement",
					PREROLL_ELEM: function() {
						return document.getElementById("videoad")
					},
					AIP_COMPLETE: d
				})
			}), (g = document.createElement("div")).id = "videoad", document.body.appendChild(g), (g = document.createElement("script")).async = !0, g.src = "//api.adinplay.com/libs/aiptag/pub/TRT/territorial.io/tag.min.js", document.head
			.appendChild(g))
	}, this.i = function() {
		if (console.log("showVideo"), c()) console.log("error 0");
		else {
			if (void 0 !== aiptag.adplayer) return console.log("Success: Ad will be shown!"), aiptag.cmd.player.push(function() {
				aiptag.adplayer.startVideoAd()
			}), !0;
			console.log("error: aiptag.adplayer is undefined")
		}
		return !1
	}, this.k = function(l) {
		c() || "undefined" != typeof aipAPItag && (l ? aipAPItag.showCMPButton() : aipAPItag.hideCMPButton())
	}
}

function o() {
	var username;
	return m ? p.username : (12 <= q ? "" === (username = n.loadString(20)) && (username = "Android User " + Math.floor(1e3 * Math.random()), n.saveString(20, username)) : 5 <= q ? "" === (username = n.loadString(0)) && (username = "Player " + Math
		.floor(1e3 * Math.random()), n.saveString(0, username)) : username = r.s(0), username)
}

function t() {
	var v, max;
	if (m) v = p.password;
	else if (12 <= q) v = n.loadString(22);
	else {
		if (5 <= q) return 0;
		v = r.s(9)
	}
	return max = Math.floor(Math.pow(2, 48)), 0 < (v = Math.floor(parseInt(w.x(v)))) && v < max || y(v = Math.floor(1 + (max - 1) * Math.random())) ? v : 0
}

function z() {
	var a3;
	m ? a0 = p.zoom || a1 < a2 : 12 <= q ? -1 === (a3 = n.loadNumber(21)) ? (a0 = n.getNumber(0) <= 100 || a1 < a2, n.saveNumber(21, a0 ? 1 : 0)) : a0 = 1 === a3 || a1 < a2 : 5 <= q ? 2 === (a3 = n.loadNumber(1)) ? (a0 = !0, n.saveNumber(1, a0 ? 1 :
		0)) : a0 = 1 === a3 : a0 = 0 === r.s(4) || a1 < a2
}

function a4() {
	return m ? p.emojis : 5 <= q ? n.loadString(1) : r.s(7)
}

function a5() {
	return m ? p.colors : 12 <= q ? n.loadString(21) : 5 <= q ? n.loadString(2) : r.s(8)
}

function a6(username) {
	m ? window.webkit.messageHandlers.iosCommandA.postMessage("username " + username) : 12 <= q ? (n.saveString(20, username), n.setState(10)) : 5 <= q ? n.saveString(0, username) : ((username.length < 3 || 0 <= username.indexOf(";")) && (username =
		"Player 666"), r.a7(0, username), r.a8())
}

function y(u) {
	u = w.a9(u.toString());
	return m ? (p.password = u, window.webkit.messageHandlers.iosCommandA.postMessage("password " + u), !0) : 12 <= q ? (n.saveString(22, u), !0) : !(5 <= q || 2 !== r.aA() || (r.a7(9, u), r.a8(), 0))
}

function aB(zoom, aC) {
	m ? (window.webkit.messageHandlers.iosCommandA.postMessage("zoom " + (zoom ? 1 : 0)), window.webkit.messageHandlers.iosCommandA.postMessage("sound " + (aC ? 1 : 0))) : 12 <= q ? (n.saveNumber(22, aC ? 1 : 0), n.saveNumber(21, zoom ? 1 : 0)) :
		5 <= q ? (n.saveNumber(1, zoom ? 1 : 0), n.saveNumber(11, aC ? 1 : 0)) : (r.a7(2, aC ? 1 : 0), r.a7(4, zoom ? 0 : 1), r.a8())
}

function aD() {
	for (var v = "", aE = 0; aE < aF.aG; aE += 2) v += aF.aH[aE] || aF.aH[aE + 1] ? aF.aH[aE] && !aF.aH[aE + 1] ? "1" : !aF.aH[aE] && aF.aH[aE + 1] ? "2" : "3" : "0";
	m ? window.webkit.messageHandlers.iosCommandA.postMessage("emojis " + v) : 5 <= q ? n.saveString(1, v) : (r.a7(7, v), r.a8())
}

function aI(v) {
	if (m) window.webkit.messageHandlers.iosCommandA.postMessage("colors " + v);
	else {
		if (12 <= q) n.saveString(21, v);
		else if (5 <= q) return void n.saveString(2, v);
		r.a7(8, v), r.a8()
	}
}

function aJ(j) {
	m || 5 <= q && n.setState(j)
}

function aK() {
	return aL.aM < aN ? (console.log("can't show ad, next ad will be shown in " + ((aN - aL.aM) / 1e3).toFixed(0) + "s"), !1) : (aN = aL.aM + 135e4, !!aO.i() || (m ? (window.webkit.messageHandlers.iosCommandA.postMessage("show ad " + 135e4), !0) :
		12 <= q && (n.presentAd(135e4), !0)))
}

function aP() {
	!m && 7 <= q ? n.setState(5) : location.reload()
}

function aQ() {
	q < 17 || n.saveString(23, document.documentElement.outerHTML)
}

function aV() {
	this.aW = new Uint16Array(2), this.aX = new Uint32Array(2), this.aY = new Uint8Array(4), this.aZ = new Uint8Array(4), this.aa = new Uint32Array(5), this.ab = new Uint32Array(8), this.ac = function(ad, ae) {
		return ad[0] = ae, ad
	}, this.af = function(ad, ae, ag) {
		return ad[0] = ae, ad[1] = ag, ad
	}, this.ah = function(ad, ae, ag, ai) {
		return ad[0] = ae, ad[1] = ag, ad[2] = ai, ad
	}, this.aj = function(ad, ae, ag, ai, ak) {
		return ad[0] = ae, ad[1] = ag, ad[2] = ai, ad[3] = ak, ad
	}
}
var al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ep, cb, cZ, eY;

function ay() {
	aq = 0, ar = 2048, as = new Uint32Array(4 * ar), at = 0, au = new Uint32Array(ar), (av = new Int32Array(4))[0] = -4 * az.b0, av[1] = 4, av[2] = -av[0], av[3] = -av[1], aw = new Uint8Array(az.b0 * az.b1)
}

function b2(player) {
	am = player, ax = !1, b3(), b4();
	for (var aE = b5.b6(am) - 1; 0 <= aE; aE--) 0 === b5.b7(am, aE) && (al = aE, b8());
	ax && b9()
}

function b9() {
	bA(), bB()
}

function b8() {
	ap = b5.bC(am, al), an = b5.bD(am, al), bE(), (0 !== aq && (bG(), bH()) ? bI : bF)()
}

function bH() {
	return ao = bJ(an, aq), bK < ao
}

function bG() {
	for (var aE = aq - 1; 0 <= aE; aE--) aw[bJ(as[aE], 4)] = 0
}

function bF() {
	var a3;
	1 === b5.b6(am) && bL.bM(am), am !== bN ? (bO[am] += an, bP.bQ(am)) : (a3 = bO[am], bO[am] += an, bP.bQ(am), bR.bS[13] -= bO[am] - a3), b5.bT(am, al)
}

function b3() {
	var aE, bU = bV[am].length;
	for (at = 0, aE = (ar < bU ? ar : bU) - 1; 0 <= aE; aE--) au[at++] = bV[am][aE]
}

function b4() {
	for (var aE = bV[am].length - 1; 0 <= aE; aE--) bW.bX(bV[am][aE]) && bW.bY(bV[am][aE], am);
	bV[am] = []
}

function bE() {
	aq = 0, (ap === bZ ? ba : bb)()
}

function bb() {
	for (var bc, bd, aE, be = 3; 0 <= be; be--)
		for (aE = at - 1; 0 <= aE; aE--) bd = bJ(bc = au[aE] + av[be], 4), 0 === aw[bd] && bW.bf(bc) && bW.bg(bc) === ap && (aw[bd] = 1, as[aq++] = bc)
}

function ba() {
	for (var bc, bd, aE, be = 3; 0 <= be; be--)
		for (aE = at - 1; 0 <= aE; aE--) bd = bJ(bc = au[aE] + av[be], 4), 0 === aw[bd] && bW.bh(bc) && (aw[bd] = 1, as[aq++] = bc)
}

function bI() {
	bi() ? (bj(), ap !== bZ && bk()) : bF()
}

function bk() {
	bl(), bm(bn[ap]), bm(bo[ap]), bp(bV[ap]), bq(bo[ap]), bq(br[ap]), bs(), bt()
}

function bj() {
	ax = !0, b5.bu(am, al, an), bv[am] += aq, bw(), bx()
}

function bi() {
	return (ap === bZ ? by : bz)()
}

function bz() {
	var c0 = aq * bK,
		c1 = c2(),
		c3 = c4(),
		c1 = c0 + 2 * c1 + c3,
		c6 = ao * aq;
	return c1 < c6 ? (an -= c1, c7(c1 - c0, c3), !0) : (an -= c6, c7(c6 - c0, c3), !1)
}

function c7(c6, c3) {
	if (0 < c3) {
		if (!(c3 <= c6)) return b5.c8(ap, am, c3 - c6), void(c6 = 0);
		b5.c8(ap, am, 0), c6 -= c3
	}
	c6 = bJ(c6, 2), bO[ap] >= c6 ? bO[ap] -= c6 : bO[ap] = 0
}

function c4() {
	return b5.c9(ap, am)
}

function c2() {
	return cA.cB(aq * bO[ap], 1 + cA.cB(10 * bv[ap], 16))
}

function cC() {
	return Math.floor(2 + cD(bJ(bv[ap], 100), 8))
}

function cE() {
	return bn[ap].length + bJ(bo[ap].length + br[ap].length, 50)
}

function by() {
	return an -= aq * bK, !0
}

function bx() {
	for (var aE = aq - 1; 0 <= aE; aE--) bV[am].push(as[aE]), bn[am].push(as[aE]), bW.bY(as[aE], am)
}

function cF() {
	var cG = null,
		cH = null;
	this.b = function() {
		cG = [], cH = []
	}, this.cI = function() {
		if (!cJ && !cK.cL && cM.cN.cO(1) && cM.cN.cP(bN) && b5.cQ(bN) && (cR(bN, !cS) || cT(bN, !cS))) {
			var aE, cV, cW = [],
				cX = cG,
				cY = cZ,
				ca = cX.length;
			for (aE = 0; aE < ca && !(cH[aE] + 2e3 > aL.aM); aE++) cH.shift(), cX.shift();
			ca = cX.length;
			loop: for (aE = cb - 1; 0 <= aE; aE--) {
				for (cV = 0; cV < ca; cV++)
					if (cX[cV] === cY[aE]) continue loop;
				cW.push(cY[aE])
			}
			0 === (ca = cW.length) && (cW = cY, ca = cb, cG = [], cH = []), cV = cW[Math.floor(ca * Math.random())], cG.push(cV), cH.push(aL.aM), cc.cd.ce(cf.cg(), cV)
		}
	}
}

function ch() {
	var ci = 1,
		cj = [null, null];
	this.b = function() {
		ci = .72 * (a0 ? .0011 : .001) * ck;
		for (var aE = 1; 0 <= aE; aE--) cj[aE] && this.cl(aE, cj[aE].v)
	}, this.cl = function(cm, v) {
		cj[cm] = {
			v: v,
			font: cn + 10 + co
		}, this.cp(cm)
	}, this.cp = function(cm) {
		var v, cs, ct, cu, cw;
		cq.cr() && cj[cm] && (v = cj[cm].v, cs = Math.floor(.15 * ci * cq.get(13).height), cu = cv.measureText(v, ct = cn + cs + co), (cw = .8 * ci * cq.get(13).width) < cu && (cs = Math.floor(cs * cw / cu), ct = cn + cs + co), cj[cm] = {
			v: v,
			font: ct
		}, aL.cx = !0)
	}, this.cy = function() {
		return Math.floor(ci * cq.get(13).height)
	}, this.cz = function(d0, d1) {
		return !!cq.cr() && !(d0 < d2 || d1 < d3 - d4.cu - ci * cq.get(13).height - 2 * d2 || d1 > d3 - d4.cu - 2 * d2 || (d0 < d2 + ci * cq.get(13).width ? (d5.l(0), 0) : d0 < 2 * d2 + ci * cq.get(13).width || !(d0 < 2 * d2 + 2 * ci * cq.get(13)
			.width) || (d5.l(1), 0)))
	}, this.d6 = function() {
		return Math.floor(d3 - d4.cu - ci * cq.get(13).height - 2 * d2)
	}, this.d7 = function() {
		if (cq.cr()) {
			d8.imageSmoothingEnabled = !0, d8.setTransform(ci, 0, 0, ci, d2, this.d6()), d8.drawImage(cq.get(14), 0, 0), d8.setTransform(ci, 0, 0, ci, 2 * d2 + ci * cq.get(13).width, this.d6()), d8.drawImage(cq.get(13), 0, 0);
			for (var aE = 1; 0 <= aE; aE--) cj[aE] && (d8.setTransform(1, 0, 0, 1, (1 + aE) * d2 + aE * ci * cq.get(13).width, this.d6()), d8.font = cj[aE].font, d8.textBaseline = d9, d8.textAlign = dA, d8.fillStyle = dB.dC, d8.fillText(cj[aE].v,
				.5 * ci * cq.get(13).width, .86 * ci * cq.get(13).height));
			d8.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dD(dE, dF, dG, dH) {
	var aE, dK = .2,
		dL = document.createElement("canvas"),
		dM = dL.getContext("2d", {
			alpha: !1
		});
	for (dL.width = dE, dL.height = dE, dM.font = dF + "px " + settings.fontName, dM.textAlign = "center", dM.textBaseline = "middle", dM.fillStyle = "red", aE = 0; aE < dG.length; aE++) dM.fillText(dG[aE], .5 * dE, .5 * dE);
	return -1 < (dL = function(dI) {
		var aE, dO;
		for (aE = dI.data.length - 4; 0 <= aE; aE -= 4)
			if (dO = dI.data[aE], dH <= dO) return Math.floor(aE / (4 * dE));
		return -1
	}(dM.getImageData(0, 0, dE, dE))) && (dK = (dL - .5 * dE + .1 * dF) / dF), Math.max(dK, 0)
}

function dP() {
	this.dQ = new Int16Array(4), this.dR = new Int16Array(4), this.b = function() {
		var aE;
		for (this.dQ[0] = -az.b0, this.dQ[1] = 1, this.dQ[2] = az.b0, this.dQ[3] = -1, aE = 0; aE < 4; aE++) this.dR[aE] = 4 * this.dQ[aE]
	}, this.dS = function(dT, dU) {
		var dV = this.dW(dU) - this.dW(dT),
			dU = this.dY(dU) - this.dY(dT),
			dT = dV >>> 31 << 1;
		return 5 + dT + (1 - dT) * (1 - (dU >>> 31 << 1)) * (Math.abs(dV) - Math.abs(dU) >>> 31) & 3
	}, this.dc = function(dT, dU, dd) {
		return dd % 2 == 0 ? dd + (1 - dd) * (1 - (this.dW(dU) - this.dW(dT) >>> 31 << 1)) + 4 & 3 : dd + (2 - dd) * (1 - (this.dY(dU) - this.dY(dT) >>> 31 << 1)) + 4 & 3
	}, this.df = function(bc, dg) {
		for (var dU, dh, dj = bo[bc], bU = dj.length, cu = az.b0, dk = this.dW(dg), dl = this.dY(dg), dm = dj[0] >> 2, min = this.dn(dk, dl, dm), aE = 1; aE < bU; aE++)(dh = (dh = dk - (dU = dj[aE] >> 2) % cu) * dh + (dh = dl - ~~((.5 + dU) /
			cu)) * dh) < min && (min = dh, dm = dU);
		return dm
	}, this.dp = function(player, dq) {
		return !bW.bh(dq) && player === bW.bg(dq)
	}, this.dn = function(dr, ds, dg) {
		return (dr -= this.dW(dg)) * dr + (ds -= this.dY(dg)) * ds
	}, this.dt = function(du, dv, dw) {
		du = this.dy(du) - this.dz(dw), dv = this.e1(dv) - this.e2(dw);
		return Math.sqrt(du * du + dv * dv)
	}, this.e3 = function(dT, dU) {
		var dx = this.dW(dT) - this.dW(dU),
			dT = this.dY(dT) - this.dY(dU);
		return Math.sqrt(dx * dx + dT * dT)
	}, this.e4 = function(bc) {
		return bc < e5 && 0 !== e6[bc] && 2 !== e7[bc]
	}, this.e8 = function() {
		return 0 !== e6[bN] && 2 !== e7[bN]
	}, this.e9 = function(bc, eA) {
		return cA.cB(eA * bO[bc], 1e3)
	}, this.dy = function(du) {
		return 16 * (du + eB) / eC
	}, this.e1 = function(dv) {
		return 16 * (dv + eD) / eC
	}, this.eE = function(du) {
		return Math.floor((du + eB) / eC)
	}, this.eF = function(dv) {
		return Math.floor((dv + eD) / eC)
	}, this.eG = function(dr, ds) {
		return 1 <= dr && 1 <= ds && dr < az.b0 - 1 && ds < az.b1 - 1
	}, this.dW = function(dg) {
		return dg % az.b0
	}, this.dY = function(dg) {
		return cA.cB(dg, az.b0)
	}, this.eH = function(dr, ds) {
		return ds * az.b0 + dr
	}, this.eI = function(dg) {
		var dr = this.dW(dg),
			dg = this.dY(dg);
		return 0 < dr && dr < az.b0 - 1 && 0 < dg && dg < az.b1 - 1
	}, this.eJ = function(dg) {
		return dg << 2
	}, this.eK = function(dg) {
		return az.b0 * this.dY(dg) * 256 + (this.dW(dg) << 4)
	}, this.eL = function(dg) {
		return this.eK(dg) + 8 + (az.b0 << 7)
	}, this.eM = function(dw) {
		return az.b0 * (this.e2(dw) >> 4) + (this.dz(dw) >> 4)
	}, this.eN = function(dw) {
		dw = this.eM(dw);
		return (this.dW(dw) >> 5) + eO.eP.eQ * (this.dY(dw) >> 5)
	}, this.dz = function(dw) {
		return dw % (az.b0 << 4)
	}, this.e2 = function(dw) {
		return cA.cB(dw, az.b0 << 4)
	}, this.eR = function(dg, dd) {
		return dg + this.dQ[dd]
	}, this.eS = function(dq, dd) {
		return dq + this.dR[dd]
	}
}

function eT(player) {
	return eU.ab[1] = bV[player].length, eU.ab[0] === bZ ? eV(player) : eW(player, eU.ab[0]), 0 !== eU.ab[1] || 0 !== bV[player].length
}

function eX(player) {
	cS && (eY[player] = 1), eZ(eU.ab[1], player), b5.ea(player, eU.aX[0], eU.ab[0]), bL.eb(player, !1)
}

function ec(player, ed, bU, ee) {
	var ef = bJ(3 * bO[player], 256);
	ee -= ee >= bJ(bO[player], 2) ? ef : 0, eZ(bU, player), b5.ea(player, ee, ed), bO[player] -= ee + ef, bL.eb(player, !1)
}

function eW(player, ed) {
	for (var dd, aE = bn[player].length - 1; 0 <= aE; aE--)
		if (bW.eg(bn[player][aE]))
			for (dd = 3; 0 <= dd; dd--)
				if (bW.bf(bn[player][aE] + av[dd]) && bW.bg(bn[player][aE] + av[dd]) === ed) {
					bV[player].push(bn[player][aE]);
					break
				}
}

function eZ(dF, player) {
	for (var aE = bV[player].length - 1; dF <= aE; aE--) bW.eh(bV[player][aE], player)
}

function eV(player) {
	for (var dd, aE = bn[player].length - 1; 0 <= aE; aE--)
		if (bW.eg(bn[player][aE]))
			for (dd = 3; 0 <= dd; dd--)
				if (bW.bh(bn[player][aE] + av[dd])) {
					bV[player].push(bn[player][aE]);
					break
				}
}

function cR(player, ei) {
	var aE, ej, dd, ek, bU = bn[player].length,
		de = 256 <= bU ? 12 : 32 <= bU ? 6 : 1,
		el = bU - 1 - em.en(de);
	cb = 0;
	loop: for (aE = el; 0 <= aE; aE -= de)
		for (dd = 3; 0 <= dd; dd--)
			if ((ek = bW.bh(bn[player][aE] + av[dd]) ? bZ : bW.bg(bn[player][aE] + av[dd])) === bZ || bW.bf(bn[player][aE] + av[dd]) && ek !== player && (ei || eo(player, ek))) {
				for (ej = cb - 1; 0 <= ej; ej--)
					if (cZ[ej] === ek) continue loop;
				if (cZ[cb] = ek, ++cb >= ep) return !0
			}
	return 0 < cb
}

function cT(player, ei) {
	var aE, dd, ek;
	for (cb = 0, aE = bn[player].length - 1; 0 <= aE; aE--)
		for (dd = 3; 0 <= dd; dd--)
			if ((ek = bW.bh(bn[player][aE] + av[dd]) ? bZ : bW.bg(bn[player][aE] + av[dd])) === bZ || bW.bf(bn[player][aE] + av[dd]) && ek !== player && (ei || eo(player, ek))) return cZ[cb++] = ek, !0;
	return !1
}

function eq() {
	for (var cV, aE = cb - 1; 0 <= aE; aE--)
		if (cZ[aE] === bZ) {
			for (cb--, cV = aE; cV < cb; cV++) cZ[cV] = cZ[cV + 1];
			return !0
		} return !1
}

function er(player) {
	for (var cV, aE = cb - 1; 0 <= aE; aE--)
		if (b5.es(player, cZ[aE]))
			for (cb--, cV = aE; cV < cb; cV++) cZ[cV] = cZ[cV + 1];
	return 0 === cb
}

function et() {
	for (var aE = cb - 1; 0 <= aE; aE--)
		if (cZ[aE] >= e5) return !0;
	return !1
}

function eu() {
	for (var aE = cb - 1; 0 <= aE; aE--) cZ[aE] < e5 && (cZ[aE] = cZ[--cb]);
	return 0 < cb
}

function ev(player) {
	for (var cV, ew = cZ[0], ex = bO[ew] + b5.c9(ew, player), aE = cb - 1; 1 <= aE; aE--)(cV = bO[cZ[aE]] + b5.c9(cZ[aE], player)) < ex && (ew = cZ[aE], ex = cV);
	return ew
}

function ey(player) {
	var ez, f0 = cZ[0];
	if (1 !== cb)
		for (var f1 = bJ(f2[player] + f3[player], 2), f4 = bJ(f5[player] + f6[player], 2), f7 = f8(f1 - bJ(f2[f0] + f3[f0], 2)) + f8(f4 - bJ(f5[f0] + f6[f0], 2)), aE = cb - 1; 1 <= aE; aE--)(ez = f8(f1 - bJ(f2[cZ[aE]] + f3[cZ[aE]], 2)) + f8(f4 - bJ(
			f5[cZ[aE]] + f6[cZ[aE]], 2))) < f7 && (f7 = ez, f0 = cZ[aE]);
	return f0
}

function f9() {
	return cZ[em.en(cb)]
}

function fA() {
	ep = 8, cb = 0, cZ = new Uint16Array(ep)
}

function fB() {
	eY = cS ? new Uint8Array(bZ) : null
}

function fC(player, ee) {
	var fD;
	cS && (eY[player] = 0), !b5.cQ(player) || ee < 60 || (0 === bn[player].length ? eO.fE.fF(player) || (fG.fH(player - e5, 200), fI(player, ee, fG.ee[player - e5], bP.fJ(player))) : 0 < bo[player].length && em.random() < em.value(bo[player].length >
		bn[player].length ? 7 : 3) && eO.fE.fF(player) || (fD = bP.fJ(player), bO[player] > fD && ee < bO[player] - fD && (ee = bO[player] - fD), cS ? fK(player, ee, fG.ee[player - e5], fD) : fL(player, ee, fG.ee[player - e5])))
}

function fK(player, ee, fM, fD) {
	var ed;
	cR(player, !1) || cT(player, !1) ? (eY[player] = 1, er(player) || (eq() ? (fN(player, ee), fO(player, bZ, fM)) : (em.fP(fG.fQ[fM]) ? fR(player, ee, ed = ev(player)) : (et() && em.fP(fG.fS[fM]) && eu(), fR(player, ee, ed = ey(player))), fO(player,
		ed, fM)))) : 0 < bo[player].length && em.random() < em.value(60) && eO.fE.fF(player) || (fG.fH(player - e5, 200), fI(player, ee, fM, fD))
}

function fT(player, ee) {
	cR(player, !1) || cT(player, !1) ? (eY[player] = 1, eq() ? fN(player, ee) : fR(player, ee, f9())) : fI(player, ee, 0, 0)
}

function fO(player, ed, fM) {
	3 <= fM && 2142 < aL.fU() && (ed === bZ || bO[ed] < bJ(bO[player], 20)) && fG.fH(player - e5, 25)
}

function fI(player, ee, fM, fD) {
	var aE, cV, fV;
	if (0 !== fW.fX[player] && !(5 === fM && bO[player] < fD || 4 === fM && bO[player] < bJ(fD, 2)))
		for (aE = em.en(fY), cV = 0; cV < fY; cV++)
			if (fV = fZ[(cV + aE) % fY], fW.fX[fV] === fW.fX[player] && 1 === eY[fV]) return void cc.fa.fb(player, fV, ee)
}

function fL(player, ee, fM) {
	!cR(player, !0) && !cT(player, !0) || er(player) || (eq() ? fN(player, ee) : em.fP(fG.fQ[fM]) ? fR(player, ee, ev(player)) : (et() && em.fP(fG.fS[fM]) && eu(), fR(player, ee, ey(player))))
}

function fc(player, ee) {
	(cR(player, !0) || cT(player, !0)) && (eq() ? fN(player, ee) : fR(player, ee, f9()))
}

function fR(player, ee, ed) {
	bJ(bO[player], 8) > bO[ed] && (ee = (fd = bJ(11 * bO[ed], 5)) < ee ? ee : fd);
	var fd = bV[player].length;
	eW(player, ed), ec(player, ed, fd, ee)
}

function fN(player, ee) {
	var ed = bZ,
		bU = bV[player].length;
	return eV(player), bV[player].length !== bU && (ec(player, ed, bU, ee), !0)
}
self.aiCommand746 = function(aR) {
	0 === aR ? aS() : 1 !== aR || q < 14 || aT.aU()
};
var e5, nY, fq, nX, fe = [60, 74, 112, 200, 256, 512];

function ff() {
	var fg, fh, fi, fj, fk, fl;

	function g0(aE) {
		fg[aE] = 1 + bJ(fk[aE] * em.random(), 10 * em.value(100))
	}
	this.fm = ["Very Easy", "Easy", "Normal", "Hard", "Harder", "Very Hard"], this.fn = [97, 95, 93, 90, 87, 84], this.fS = [98, 95, 70, 40, 20, 0], this.fo = [85, 70, 50, 30, 7, 3], this.fQ = [0, 0, 5, 25, 50, 90], this.ee = null, this.b =
	function() {
		var aE, fp;
		if (fg = new Uint8Array(fq), fh = new Uint16Array(fq), fi = new Uint16Array(fq), fj = new Uint8Array(fq), this.ee = new Uint8Array(fq), fk = new Uint16Array(fq), fl = new Uint16Array(fq), fr.fs) {
			if (fr.ft.fu)
				for (aE = fq - 1; 0 <= aE; aE--) this.ee[aE] = fr.ft.fu[aE + 1]
		} else if (9 === fv) this.fw();
		else if (fx)
			if (cS)
				for (aE = fq - 1; 0 <= aE; aE--) this.ee[aE] = fy.fz[fW.fX[aE + e5] - 1].be;
			else
				for (aE = fq - 1; 0 <= aE; aE--) this.ee[aE] = fy.fz[0].be;
		else
			for (fp = 8 === fv ? 1 : 0, aE = fq - 1; 0 <= aE; aE--) this.ee[aE] = fp;
		for (aE = fq - 1; 0 <= aE; aE--) this.ee[aE] <= 2 ? (fj[aE] = 5, fk[aE] = fl[aE] = 1040, 0 === this.ee[aE] ? (fh[aE] = 1e3, fi[aE] = 1e3) : 1 === this.ee[aE] ? (fh[aE] = 1e3, fi[aE] = 920, fk[aE] = fl[aE] = 1100) : (fh[aE] = 825, fi[aE] =
			750)) : this.ee[aE] <= 4 ? (fj[aE] = 1 + em.en(20), 3 === this.ee[aE] ? (fh[aE] = fi[aE] = 500, fk[aE] = fl[aE] = 1e3) : (fl[aE] = 250 + em.en(1501), fk[aE] = 500 + em.en(501), fh[aE] = 300 + em.en(201), fi[aE] = 100 + em.en(
			201))) : (fk[aE] = 1e3, fl[aE] = 1e3, fj[aE] = 35 + em.en(16), fh[aE] = 300 + em.en(201), fi[aE] = 50 + em.en(101)), g0(aE)
	}, this.fw = function() {
		for (var aE, dq = 0, cV = 0; cV < 6; cV++) {
			for (aE = dq + g1.g2[cV] - 1; dq <= aE; aE--) this.ee[aE] = cV;
			dq += g1.g2[cV]
		}
	}, this.fH = function(g3, value) {
		0 <= g3 && (fg[g3] = value)
	}, this.fF = function(g3) {
		0 == --fg[g3] && ! function(g3) {
			! function(g3) {
				fk[g3] !== fl[g3] && (fk[g3] += fk[g3] < fl[g3] ? 3 : -3);
				fh[g3] !== fi[g3] && (fh[g3] += fh[g3] < fi[g3] ? fj[g3] : -fj[g3], fh[g3] = (Math.abs(fh[g3] - fi[g3]) <= fj[g3] ? fi : fh)[g3]);
				fg[g3] = bJ(fk[g3], 10)
			}(g3);
			var player = g3 + e5;
			fC(player, bJ(fh[g3] * bO[player], 1e3))
		}(g3)
	}
}

function g6() {
	g7.fF(), g8.fF(), g9.gA(), gB.fF(), gC.gD.gE()
}

function gF() {
	bP.fF(), gG.fF(), gH.fF(), gI.fF(), gJ.fF(), bL.fF(), gK.fF(), eO.gL.fF(), gM(), gN.fF(), g1.fF(), g8.fF(), g8.gO(), g9.fF(), gP.fF(), gQ.fF(), gR.fF(), g7.fF(), gS.fF(), cf.fF(), gT.fF(), bR.fF(), gU.fF(), gV.fF(), gB.fF(), gW.fF(), aL.fF()
}

function gX() {
	gY.fF(), gZ.fF(), cv.fF(), ga.fF(), gb.fF(), gc.gd()
}

function ge() {
	gN.gf(!1), gR.gf(), g9.gf(!1), gQ.gf(), cf.gf(), gT.gf(), g8.gf(2 === gg), gU.cp()
}

function gh() {
	g8.gf(!0) && (aL.cx = !0), gB.fF()
}

function gi() {
	var gj, gk, gl, gm, gn, go;

	function gs(gu) {
		for (var aE = gk - 1; 0 <= aE; aE--) 0 === gm[gl[aE]] && bv[gl[aE]] >= gu && b2(gl[aE])
	}

	function gq(player) {
		10 === gm[player] ? gm[player] = gj : bv[player] < 1e3 ? gm[player] = 3 : bv[player] < 1e4 ? gm[player] = 2 : bv[player] < 6e4 ? gm[player] = 1 : gm[player] = 0
	}
	this.b = function() {
		gn = go = 0, gj = 6, gk = 0, gl = new Uint16Array(bZ), gm = new Uint8Array(bZ)
	}, this.fF = function() {
		var aE;
		for (gn = bR.bS[13], go = bO[bN], aE = gk - 1; 0 <= aE; aE--) 10 === gm[gl[aE]] ? gq(gl[aE]) : 0 == gm[gl[aE]]-- && (gq(gl[aE]), b2(gl[aE]));
		16e4 <= bv[gr[0]] && (gs(16e4), 3e5 <= bv[gr[0]]) && gs(3e5), bv[bN] > bR.bS[7] && (bR.bS[7] = bv[bN]), bR.bS[14] += go - bO[bN] + gn - bR.bS[13]
	}, this.bM = function(player) {
		for (var ej, aE = gk - 1; 0 <= aE; aE--)
			if (player === gl[aE]) {
				for (gk--, ej = aE; ej < gk; ej++) gl[ej] = gl[ej + 1];
				return
			}
	}, this.eb = function(player, gv) {
		for (var aE = gk - 1; 0 <= aE; aE--)
			if (player === gl[aE]) return;
		gl[gk++] = player, gm[player] = gv ? 2 : 10
	}
}

function gw() {
	var dF, fE;
	this.b = function() {
		dF = fq, fE = new Uint16Array(fq);
		for (var aE = fq - 1; 0 <= aE; aE--) fE[aE] = aE
	}, this.fF = function() {
		for (var aE = dF - 1; 0 <= aE; aE--) 0 === e6[fE[aE] + e5] ? function(ej) {
			dF--;
			for (var aE = ej; aE < dF; aE++) fE[aE] = fE[aE + 1]
		}(aE) : fG.fF(fE[aE])
	}
}

function gz() {
	var h0, h1, gk, gl, gm, h2, h3, h4;

	function h7(aE) {
		var ej;
		for (gk--, ej = aE; ej < gk; ej++) gl[ej] = gl[ej + 1], gm[ej] = gm[ej + 1], h2[ej] = h2[ej + 1], h3[ej] = h3[ej + 1], h4[ej] = h4[ej + 1]
	}
	this.b = function() {
		h0 = 1, gk = 0, h1 = 2 * bZ, gl = new Uint16Array(h1), gm = new Uint8Array(h1), h2 = new Uint16Array(h1), h3 = new Uint32Array(h1), h4 = new Uint32Array(h1)
	}, this.h5 = function(cm, position) {
		h3[cm] = position
	}, this.fF = function() {
		for (var aE = gk - 1; 0 <= aE; aE--) 0 == gm[aE]-- && (gm[aE] = 2, h6.fF(aE, h2[aE], gl[aE], h3[aE], h4[aE]))
	}, this.bM = function(player, id) {
		for (var aE = gk - 1; 0 <= aE; aE--)
			if (player === gl[aE] && id === h2[aE]) return void h7(aE)
	}, this.h8 = function(player) {
		for (var aE = gk - 1; 0 <= aE; aE--) player === gl[aE] && (h6.h9(player, h3[aE]), h7(aE))
	}, this.eb = function(player, el, hA) {
		if (h1 <= gk) return 0;
		gl[gk] = player, gm[gk] = 0, h2[gk] = h0, h3[gk] = el, h4[gk] = hA;
		player = h0;
		return gk++, h0 = 2 * h1 < ++h0 ? 1 : h0, player
	}, this.d7 = function() {
		if (!(eC < 40 || 0 === gk)) {
			var ej, hD, hE, aE, cs, hH, ee, hI = eB / eC,
				hJ = eD / eC,
				hK = (hL + eB) / eC,
				hM = (d3 + eD) / eC;
			for (d8.textAlign = dA, d8.textBaseline = d9, ej = gk - 1; 0 <= ej; ej--) hD = bW.hN(h3[ej]), hE = bW.d6(h3[ej]), aE = gl[ej], hI - 1 < hD && hD < hK && hJ - 1 < hE && hE < hM && 0 !== e6[aE] && ((cs = Math.floor(.94 * eC * g8.hO(
				aE))) < 6 || (hD = Math.floor(hL * (hD + .5 - hI) / (hK - hI)), hE = Math.floor(d3 * (hE + .48 - hJ) / (hM - hJ)), d8.font = cn + cs + co, d8.fillStyle = dB.hP, ee = b5.bD(aE, b5.hQ(aE, h2[ej])), d8.fillText(hR.hS.hT ? gR
				.hU(ee) : hV[aE], hD, hE), (hH = Math.floor(.5 * cs)) < 6) || (d8.font = cn + hH + co, d8.fillText(hR.hS.hT ? hV[aE] : gR.hU(ee), hD, hE + Math.floor(.82 * cs))))
		}
	}
}

function hW() {
	var hX, hY, hZ, ha, hb, hc, hd, he, hf, hg, hh, hi, hj, hk = !1,
		hl = !1;

	function hm(hn) {
		hi = aL.aM, hZ = ha = hY = 0, hb = (hj = 33) / hn, hX = 1 / (hn / hj / 4), hc = (hL / 2 + eB) / eC, hd = (d3 / 2 + eD) / eC, he = eC
	}

	function i3(i5) {
		Math.abs(Math.log(hh / he)) < .125 && (hh = i5 * he)
	}

	function i2(hI, hJ, hK, hM) {
		hf = (hI + hK + 1) / 2, hg = (hJ + hM + 1) / 2;
		hK = hL / (hK - hI + 1), hI = d3 / (hM - hJ + 1);
		hh = .9 * (hK < hI ? hK : hI)
	}
	this.ho = function() {
		return hk
	}, this.hp = function() {
		hm(1), this.hq(0, 0, az.b0 - 1, az.b1 - 1), hr || cJ || this.hs(bN, 3e3, !0, .3)
	}, this.hs = function(player, hn, ht, zoom) {
		hu || hk && !ht && hl || 0 === bv[player] || (hv.hw = !1, hl = ht, hm(hn), function(player) {
			hf = (f3[player] + f2[player] + 1) / 2, hg = (f6[player] + f5[player] + 1) / 2
		}(player), function(zoom, player) {
			var dx = f2[player] - f3[player] + 1,
				player = f5[player] - f6[player] + 1,
				ej = hL / dx,
				cV = d3 / player,
				ej = (hh = ej < cV ? ej : cV, 0 !== zoom ? zoom : dx < 20 && player < 20 ? .5 : .9);
			hh *= ej, i3(7 / 8)
		}(zoom, player), hk = !0, hz.i0())
	}, this.i1 = function(hn) {
		cJ || hu || (hv.hw = !1, hl = !1, hm(hn), i2(0, 0, az.b0 - 1, az.b1 - 1), i3(7 / 8), hk = !0, hz.i0())
	}, this.hq = function(hI, hJ, hK, hM) {
		i2(hI, hJ, hK, hM), eC = hh, hv.i6(hf, hL / 2), hv.i7(hg, d3 / 2), i8.i9()
	}, this.iA = function() {
		return !(hk && hl || (hk = !1))
	}, this.fF = function() {
		var iD, iE, be, iH;
		hk && (hY < .5 ? ha < hb && (ha += hb * hX, hZ = hY) : 1 - hZ < hY && (ha = (ha -= hb * hX) < hb * hX ? hb * hX : ha), hi = hi >= aL.aM ? aL.aM - 1 : hi, be = aL.aM - hi, hY = 1e3 < be || 1 < (hY += ha * be / hj) ? 1 : hY, hi = aL.aM,
			be = eC, iD = eB, iE = eD, be = (eC = he * Math.pow(hh / he, hY)) / be, iH = 1 - (he * Math.pow(hh / he, 1 - hY) - he) / (hh - he), hv.i6(hc + iH * (hf - hc), hL / 2), hv.i7(hd + iH * (hg - hd), d3 / 2), g8.zoom(be, (iD * be -
				eB) / (1 - be), (iE * be - eD) / (1 - be)), i8.i9(), 1 <= hY && (hk = !1, iI.iJ = !0), aL.cx = !0)
	}
}

function iK() {
	var fV = cM.iL;
	this.hP = fV.iM(0, 0, 0), this.iN = fV.iO(0, 0, 0, .7), this.iP = fV.iO(0, 0, 0, .5), this.iQ = fV.iO(0, 0, 0, .85), this.iR = fV.iO(0, 0, 0, .75), this.iS = fV.iO(0, 0, 0, .6), this.dC = fV.iM(255, 255, 255), this.iT = fV.iO(255, 255, 255, .3),
		this.iU = fV.iO(255, 255, 255, .6), this.iV = fV.iO(255, 255, 255, .4), this.iW = fV.iO(255, 255, 255, .25), this.iX = fV.iO(255, 255, 255, .85), this.iY = fV.iO(255, 255, 255, .75), this.iZ = fV.iM(128, 128, 128), this.ia = fV.iO(64, 64, 64,
			.75), this.ib = fV.iM(30, 255, 30), this.ic = fV.iM(0, 200, 0), this.id = fV.iM(128, 255, 128), this.ie = fV.iO(10, 65, 10, .75), this.ig = fV.iO(0, 255, 0, .6), this.ih = fV.iO(0, 255, 0, .5), this.ii = fV.iO(0, 200, 0, .5), this.ij = fV
		.iO(0, 100, 0, .75), this.ik = fV.iO(0, 60, 0, .8), this.il = fV.iO(0, 255, 0, .3), this.im = fV.iO(0, 180, 0, .6), this.io = fV.iM(255, 120, 120), this.ip = fV.iM(255, 160, 160), this.iq = fV.iM(255, 70, 70), this.ir = fV.iM(230, 0, 0), this
		.is = fV.iO(220, 0, 0, .6), this.it = fV.iO(255, 100, 100, .8), this.iu = fV.iO(100, 0, 0, .85), this.iv = fV.iO(60, 0, 0, .85), this.iw = fV.iO(200, 0, 0, .6), this.ix = fV.iO(0, 60, 60, .85), this.iy = fV.iO(10, 60, 60, .9), this.iz = fV
		.iO(0, 96, 96, .75), this.j0 = fV.iM(160, 160, 255), this.j1 = fV.iO(0, 40, 90, .75), this.j2 = fV.iO(0, 0, 255, .6), this.j3 = fV.iM(255, 120, 100), this.j4 = fV.iO(255, 255, 0, .5), this.j5 = fV.iO(255, 255, 150, .2), this.j6 = fV.iM(255,
			255, 0), this.j7 = fV.iM(255, 255, 200), this.j8 = fV.iO(200, 200, 0, .6), this.j9 = fV.iO(255, 140, 0, .75)
}

function jA() {
	this.cd = new jB, this.cN = new jC, this.jD = new jE, this.jF = new jG, this.fa = new jH
}

function jB() {
	this.jI = function(dg) {
		fx ? cc.jD.jI(bN, dg) : jJ.jK(dg)
	}, this.ce = function(eA, ed) {
		g7.jL(), fx ? cc.jD.ce(bN, eA, ed) : jJ.jM(eA, ed)
	}, this.jN = function(eA, jO) {
		g7.jL(), fx ? cc.jD.jP(bN, eA, jO) : jJ.jQ(eA, jO)
	}, this.jR = function(eA, dg) {
		fx ? cc.jD.jR(bN, eA, dg) : eO.jS.jT(bN, dg) && jJ.jU(eA, dg)
	}, this.jV = function(jW, dg) {
		fx ? cc.jD.jV(bN, jW, dg) : eO.jS.jX(bN, jW, dg) && jJ.jY(jW, dg)
	}, this.jZ = function(ed) {
		fx ? cc.jD.jZ(bN, ed) : jJ.ja(ed)
	}, this.jb = function(jc) {
		fx ? cc.jD.jd(bN, jc) : jJ.je(jc)
	}, this.jf = function(jg) {
		fx ? cc.jD.jf(bN, jg) : jJ.jh(jg)
	}, this.ji = function() {
		fx ? cc.jD.ji(bN) : jJ.jj()
	}
}

function jH() {
	this.fb = function(player, jO, ee) {
		cM.cN.jk(player, ee, jO) && (bP.jN(player, jO), jO < e5) && em.random() < em.value(10) && (eY[jO] = 0)
	}, this.jl = function(player, jO, ee) {
		cM.cN.jm(ee, jO) && (cM.cN.jn(jO, eU.aX[0]), bR.jo(player, jO), g8.jp(jO, eU.aX[0]))
	}
}

function jC() {
	this.jq = function(jc, player) {
		g7.jb(bN, player, jc), jJ.jr(jc, player)
	}, this.js = function(player) {
		g7.jt(player, 0), jJ.ju(player)
	}, this.jv = function(jw, player) {
		g7.jx(jw, player), jJ.jy(jw, player)
	}, this.jz = function(k0) {
		fx || cJ || jJ.k1(k2(), k0)
	}, this.k3 = function() {
		fx || cJ || jJ.k4(k2(), gr[0], gr[1], gr[2])
	}, this.k5 = function() {
		fx || cJ || jJ.k6(k2())
	}
}

function jG() {
	this.fF = function(k7) {
		var id, ae, iA;
		for (k8.b(k7), k8.cm += 2, iA = 8 * k8.dF; k8.cm + 8 <= iA;) id = k8.k9(4), ae = k8.k9(9), 0 === id ? this.kA(id, ae, k8.k9(22)) : 1 === id ? this.kA(id, ae, k8.k9(10), k8.k9(10)) : 2 === id ? this.kA(id, ae, k8.k9(10), k8.k9(9)) : 3 ===
			id || 4 === id ? this.kA(id, ae, k8.k9(10), k8.k9(22)) : 5 === id ? this.kA(id, ae, k8.k9(10)) : 6 === id ? this.kA(id, ae, k8.k9(7)) : 7 === id ? this.kA(id, ae, k8.k9(1)) : this.kA(id, ae)
	}, this.kA = function(id, ae, ag, ai) {
		0 === id ? cc.jD.jI(ae, ag) : 1 === id ? cc.jD.ce(ae, ag, ai) : 2 === id ? cc.jD.jP(ae, ag, ai) : 3 === id ? cc.jD.jR(ae, ag, ai) : 4 === id ? cc.jD.jV(ae, ag, ai) : 5 === id ? cc.jD.jZ(ae, ag) : 6 === id ? cc.jD.jd(ae, ag) : 7 === id ?
			cc.jD.jf(ae, ag) : 8 === id ? cc.jD.ji(ae) : cc.jD.kB(ae)
	}
}

function jE() {
	this.jI = function(player, dg) {
		cM.cN.cO(0) && cM.cN.cP(player) && kC.eI(dg) && (gW.kD.kE(0, player, dg), kF.ea(player, dg))
	}, this.ce = function(player, eA, ed) {
		cM.cN.cO(1) && cM.cN.cP(player) && cM.cN.kG(player, ed) && cM.cN.kH(player, eA, 12, bK) && b5.cQ(player) && cM.cN.kI(player, ed) && eT(player) && (gW.kD.kE(1, player, eA, eU.ab[0]), cM.cN.kJ(player), bR.kK(player, eA), eX(player))
	}, this.jP = function(player, eA, jO) {
		cM.cN.cO(1) && cM.cN.cP(player) && cS && cM.cN.kG(player, jO) && cM.cN.kL(player, jO) && cM.cN.jk(player, cM.cN.e9(player, eA), jO) && (gW.kD.kE(2, player, eA, jO), bP.jN(player, jO))
	}, this.jR = function(player, eA, dg) {
		cM.cN.cO(1) && cM.cN.cP(player) && kC.eI(dg) && eO.gL.kM !== eO.gL.kN && eO.gL.kO[player] !== eO.gL.kP && 0 !== bo[player].length && cM.cN.kH(player, eA, 32, 16) && eO.kQ.kR(player, dg) && (gW.kD.kE(3, player, eA, dg), cM.cN.kJ(player),
			eO.gL.kS(player))
	}, this.jV = function(player, jW, dg) {
		cM.cN.cO(1) && cM.cN.cP(player) && kC.eI(dg) && eO.jS.kT(player, jW) && eO.kQ.kU(dg) && (gW.kD.kE(4, player, jW, dg), cM.cN.kV(player, 8), eO.gL.jV())
	}, this.jZ = function(player, ed) {
		cM.cN.cO(1) && cM.cN.cP(player) && (ed = Math.min(ed, bZ), b5.es(player, ed)) && (gW.kD.kE(5, player, ed), b5.kW(player, ed))
	}, this.jd = function(player, jc) {
		cM.cN.cO(2) && cM.cN.cP(player) && (jc = Math.min(jc, aF.aG - 1), gW.kD.kE(6, player, jc), g8.kX(player, 0, jc))
	}, this.jf = function(player, jg) {
		cM.cN.cO(1) && cM.cN.cP(player) && (gW.kD.kE(7, player, jg), gT.kY(player, jg))
	}, this.ji = function(player) {
		(cM.cN.cO(0) || cM.cN.cO(1)) && cM.cN.cP(player) && gV.ji(player) && gW.kD.kE(8, player)
	}, this.kB = function(player) {
		gV.kB(player), gW.kD.kE(9, player)
	}
}

function kZ(ka, kb) {
	this.hD = 0, this.hE = 0, this.cu = 0, this.ez = 0, this.resize = function() {
		this.ez = Math.min(cM.iL.kc() * ka[1] * ck, d3 - 2 * kd), this.cu = Math.min(this.ez * (ka[0] / ka[1]), hL - 2 * kd), this.ez = ka[1] * this.cu / ka[0], this.hD = kd + kb[0] * (hL - this.cu - 2 * kd), this.hE = kd + kb[1] * (d3 - this
			.ez - 2 * kd)
	}, this.ke = function() {
		return this.hD + .5 * this.cu
	}
}

function kf() {
	var kg, kh = !0;

	function ku() {
		kg.select(), document.execCommand("copy")
	}
	this.ki = !1, this.b = function() {
		(kg = document.createElement("textarea")).setAttribute("name", "replayData"), kg.setAttribute("id", "replayDataField"), kg.setAttribute("autocomplete", "off"), kg.setAttribute("placeholder", "Insert the replay link here!"), kg.style
			.position = "absolute", kg.style.resize = "none", kg.style.borderRadius = "0", kg.style.color = dB.dC, kg.style.backgroundColor = dB.iN, kg.addEventListener("focus", function() {
				kj.ki = !0
			}), kg.addEventListener("blur", function() {
				kj.ki = !1
			})
	}, this.show = function() {
		document.body.appendChild(kg)
	}, this.kk = function() {
		document.body.removeChild(kg)
	}, this.resize = function(hD, hE, cu, ez) {
		cM.iL.kl(kg.style, hD, hE, cu, ez), kg.style.font = cM.iL.km(Math.max(5, .1 * ez / kn), 0)
	}, this.ko = function(kp) {
		kg.value = kp
	}, this.kq = function() {
		return kg.value
	}, this.kr = function() {
		kg.select()
	}, this.ks = function() {
		kg.value = ""
	}, this.kt = function() {
		kh && navigator.clipboard ? (kg.select(), navigator.clipboard.writeText(kg.value).catch(function() {
			kh = !1, ku()
		})) : ku()
	}
}

function kv() {
	var kw = new Uint8Array(78);
	this.b = function() {
		var aE;
		for (kw[50] = 37, aE = 0; aE < 10; aE++) kw[aE + 3] = aE + 1;
		for (aE = 0; aE < 26; aE++) kw[aE + 20] = aE + 11, kw[aE + 52] = aE + 38
	}, this.kx = function(v) {
		return v.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "_")
	}, this.ky = function(v, kz) {
		for (var l0 = kw, bU = v.length, ad = new Uint8Array(kz || bU), aE = 0; aE < bU; aE++) ad[aE] = l0[v.charCodeAt(aE) - 45];
		return ad
	}, this.l1 = function(l2) {
		var aE, bU = l2.length,
			cu = l3;
		for (cu.l4(6 * bU), aE = 0; aE < bU; aE++) cu.l5(6, l2[aE]);
		k8.b(cu.k7)
	}
}

function l6() {
	var cu, ez, l7;

	function lY(lZ, be, lW, lC, lR) {
		be = lX(lZ, be + 1 + 2 * lC & 3);
		! function(lZ, la) {
			return 1 < Math.abs(lZ % cu - la % cu) || 1 < Math.abs(ld(lZ) - ld(la))
		}(lZ, be) && 0 === lR[be << 2] && (lR[be << 2] = lW)
	}

	function ld(bc) {
		return Math.floor((bc + .5) / cu) % ez
	}

	function lX(bc, be) {
		return bc + l7[be]
	}
	this.l8 = function(v) {
		var aE, l9, bU, lA, lD = k8;
		for (lE.l1(lE.ky(v)), az.b0 = cu = lD.k9(12), az.b1 = ez = lD.k9(12), l7 = [-cu, -1, cu, 1], az.lN = document.createElement("canvas"), az.lN.width = az.b0, az.lN.height = az.b1, az.lJ = az.lN.getContext("2d", {
				alpha: !1
			}), az.lK = az.lJ.getImageData(0, 0, az.b0, az.b1), az.lO = az.lK.data, cM.lP.lQ(az.lO), bU = lD.k9(12), l9 = lD.k9(5), lA = lG(cu * ez - 1), aE = 0; aE < bU; aE++) ! function(ca, bc, lB, lC) {
			var aE, be, lD = k8,
				lR = az.lO,
				lS = bc,
				lT = bc,
				lU = 0,
				lV = 1 + lB,
				lW = 2 - lB;
			for (lR[bc << 2] = lV, aE = 0; aE < ca; aE++) be = lD.k9(2), bc = lX(bc, be), lR[bc << 2] === lV ? lU % 2 == 1 && lY(lT, lU + 2 * lC + 3, lW, lC, lR) : lR[bc << 2] = lV, lY(bc, be, lW, lC, lR), lY(lT, be, lW, lC, lR), lT = bc,
				lU = be;
			lX(bc, 0) === lS ? (lY(bc, 0, lW, lC, lR), lY(lS, 0, lW, lC, lR)) : lX(bc, 1) === lS && (lY(bc, 0, lW, lC, lR), lY(lS, 2, lW, lC, lR));
			0 === ca && (lY(lS, 0, lW, lC, lR), lY(lS, 2, lW, lC, lR))
		}(lD.k9(l9), lD.k9(lA), 1 === lD.k9(1), 1 === lD.k9(1));
		var hD, hE, le, lf, lg, lh, lR = az.lO,
			li = !0,
			lj = az.ft.lk[az.ll].lj,
			lm = az.ft.lk[az.ll].lm;
		for (hE = 0; hE < ez; hE++)
			for (lf = !0, lg = li, hD = lh = 0; hD < cu; hD++) le = 4 * hE * cu + 4 * hD, lh <= hD && 0 < lR[le] && (lg = 2 === lR[le], lf) && (lf = !1, lg !== li) ? (li = lg, lh = hD + 1, hD = -1) : (lg ? (lR[le] = lm[0], lR[1 + le] = lm[1], lR[
				2 + le] = lm[2]) : (lR[le] = lj[0], lR[1 + le] = lj[1], lR[2 + le] = lj[2]), lR[3 + le] = 255);
		az.lJ.putImageData(az.lK, 0, 0), az.lL = !0, az.lM.b(), aL.cx = !0
	}
}

function ln() {
	var hD, hE, cu, ez, lo, lp, lq, lr, player, ad;

	function lz() {
		return function() {
			var aE;
			for (aE = 0; aE < 8; aE++)
				if (hD = bJ(cu * em.random(), em.value(100)), hE = bJ(ez * em.random(), em.value(100)), m7()) return 1;
			return
		}() || function() {
			var dx, e0, ej, lx, cV, lw;
			for (dx = bJ(cu * em.random(), em.value(100)), e0 = bJ(ez * em.random(), em.value(100)), ej = 40; 1 <= ej; ej--)
				for (lx = ez - ej; 0 <= lx; lx -= 40)
					for (hE = (lx + e0) % ez, cV = 40; 1 <= cV; cV--)
						for (lw = cu - cV; 0 <= lw; lw -= 40)
							if (hD = (lw + dx) % cu, m7()) return 1;
			return
		}()
	}

	function m7() {
		for (var bc, m9, mA = bJ(lo - lr, 2), mB = lq + hE * lo + mA, mC = lp + hD * lo + mA, m8 = mB + lr - 1; mB <= m8; m8--)
			for (m9 = mC + lr - 1; mC <= m9; m9--)
				if (bc = bW.m5(m9, m8), !bW.bX(bc) || bW.eg(bc)) return;
		return 1
	}

	function m0(lw, lx) {
		ls(), mD(lw - 2, lx - 2)
	}

	function ls() {
		e6[player] = 0, bO[player] = 0, bv[player] = mE[player] = 0, bV[player] = [], bn[player] = [], bo[player] = [], br[player] = [], f3[player] = f6[player] = f2[player] = f5[player] = 0
	}

	function mD(lw, lx) {
		var bc, aE, mG, mH;
		for (e6[player] = 1, bO[player] = player < e5 ? mF : fe[fG.ee[player - e5]], f3[player] = lw + 10, f6[player] = lx + 10, f5[player] = f2[player] = 0, mG = lw; mG < lw + 4; mG++)
			for (mH = lx; mH < lx + 4; mH++)(lw < mG && mG < lw + 3 || lx < mH && mH < lx + 3) && (bc = bW.m5(mG, mH), bW.bX(bc)) && (f3[player] = mG < f3[player] ? mG : f3[player], f2[player] = mG > f2[player] ? mG : f2[player], f6[player] = mH <
				f6[player] ? mH : f6[player], f5[player] = mH > f5[player] ? mH : f5[player], ad[bv[player]] = bc, bv[player]++, bW.mI(bc, player));
		for (mE[player] = bv[player], aE = bv[player] - 1; 0 <= aE; aE--) bW.mJ(ad[aE], player) ? (bW.bY(ad[aE], player), bn[player].push(ad[aE])) : bW.mK(ad[aE]) ? (bW.bY(ad[aE], player), bo[player].push(ad[aE])) : bW.mL(ad[aE]) && (bW.bY(ad[aE],
			player), br[player].push(ad[aE]))
	}

	function m6(lw, lx) {
		for (var bc, m9, m8 = lx; lx - 6 < m8; m8--)
			for (m9 = lw; lw - 6 < m9; m9--)
				if (bc = bW.m5(m9, m8), bW.eg(bc)) return;
		return 1
	}
	this.b = function() {
		var aE, lw, lx;
		if (ad = new Array(12), lr = 6, lo = 10, cu = bJ(az.b0, lo), ez = bJ(az.b1, lo), lp = bJ(az.b0 - lo * cu, 2), lq = bJ(az.b1 - lo * ez, 2), hr)
			for (aE = 0; aE < e5; aE++) player = aE, ls(), e6[player] = 1;
		if (fr.fs && fr.ft.lt) {
			for (player = 0; player < bZ; player++)
				if (1 !== e6[player]) {
					if (player < ly) {
						if (function() {
								var lw = fr.ft.lt[player] + 1,
									lx = fr.ft.m4[player] + 1;
								if (3 < lw && lw < az.b0 - 5 && 3 < lx && lx < az.b1 - 5 && bW.bX(bW.m5(lw, lx)) && m6(lw + 3, lx + 3)) return m0(lw + 1, lx + 1), 1;
								return
							}()) continue;
						if (lz()) {
							lw = lp + hD * lo + bJ(lo, 2), lx = lq + hE * lo + bJ(lo, 2), m0(lw, lx);
							continue
						}
					}
					ls()
				}
		} else ! function() {
			var lw, lx;
			for (player = 0; player < bZ; player++) 1 !== e6[player] && (player < ly && lz() ? (lw = lp + hD * lo + bJ(lo, 2), lx = lq + hE * lo + bJ(lo, 2), m0(lw, lx)) : ls())
		}();
		bR.bS[7] = bv[bN], bR.bS[8] = bO[bN]
	}, this.mM = function(ed, mN, mO) {
		var aE, lw, lx, bc, hD, hE;
		for (player = ed, aE = 0; aE < 20; aE++)
			for (lw = mN + aE; mN - aE <= lw; lw--)
				for (lx = mO + aE; mO - aE <= lx; lx--)
					if ((lw === mN + aE || lw === mN - aE || lx === mO + aE || lx === mO - aE) && 3 < lw && lw < az.b0 - 5 && 3 < lx && lx < az.b1 - 5 && bW.bX(bW.m5(lw, lx)) && m6(lw + 3, lx + 3)) {
						if (0 < bv[player]) {
							for (hE = hD = bc = void 0, hD = f2[player]; hD >= f3[player]; hD--)
								for (hE = f5[player]; hE >= f6[player]; hE--) bc = 4 * (hE * az.b0 + hD), bW.mQ(player, bc) && (bW.mR(bc), bv[player]--);
							ls()
						}
						return mD(lw - 1, lx - 1), !0
					} return !1
	}, this.mS = function(ed) {
		player = ed, lz() ? m0(lp + hD * lo + bJ(lo, 2), lq + hE * lo + bJ(lo, 2)) : ls()
	}
}

function mT() {
	mU.mV(), d8.setTransform(eC, 0, 0, eC, 0, 0), d8.imageSmoothingEnabled = eC < 3, d8.drawImage(az.lN, hv.hN(), hv.d6()), gP.mW.d7(), d8.drawImage(mX, hv.hN(), hv.d6()), mU.d7(), d8.imageSmoothingEnabled = !1, d8.setTransform(1, 0, 0, 1, 0, 0), eO
		.mW.d7(), g8.d7(), gK.d7(), (hu ? (gU.d7(), gb) : (d8.imageSmoothingEnabled = !1, g7.d7(), gN.d7(), cf.d7(), gb.d7(), gT.d7(), g9.d7(), hv.d7(), cv.d7(), gU.d7(), gQ.d7(), gR.d7(), cK.d7(), mY.d7(), gZ.d7(), mZ.d7(), kj.d7(), ga)).d7()
}

function ma(iL, cu, ez) {
	iL.clearRect(0, 0, cu, ez), iL.fillStyle = dB.iR, iL.fillRect(0, 0, cu, ez)
}

function mb(iL, cu, ez, mc) {
	iL.fillStyle = dB.dC, iL.fillRect(0, 0, cu, mc), iL.fillRect(0, 0, mc, ez), iL.fillRect(cu - mc, 0, mc, ez), iL.fillRect(0, ez - mc, cu, mc)
}

function md(iL, hD, hE, dE, mc, bc, me) {
	iL.fillStyle = dB.dC;
	var bc = Math.floor(dE * bc),
		mg = (bc += (bc - mc) % 2, Math.floor((bc - mc) / 2)),
		dE = Math.floor((dE - bc) / 2);
	iL.fillRect(hD + dE, hE + dE + mg, bc, mc), me && iL.fillRect(hD + dE + mg, hE + dE, mc, bc)
}

function mi() {
	this.mj = null, this.b = function(mj) {
		this.mj = mj, g7.mk(this.mj)
	}, this.ml = function(mm) {
		var de = (this.mj[mm].mn - this.mj[1 - mm].mn) / 10,
			de = 8 / (1 + Math.pow(2, de / 32)),
			de = Math.floor(10 * de + .5),
			mp = this.mq(this.mj[mm].mn + de + 1),
			de = this.mq(this.mj[1 - mm].mn - de);
		0 === mm ? g7.ms(this.mj, mp, de, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : g7.ms(this.mj, de, mp, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.mq = function(mn) {
		return 16e3 <= (mn = mn < 0 ? 0 : 16e3 < mn ? 16e3 : mn) ? "Unknown" : (mn / 10).toFixed(1)
	}
}

function mt() {
	var mu = new Uint8Array(64);
	this.b = function() {
		var aE;
		for (mu[0] = 45, mu[37] = 95, aE = 0; aE < 10; aE++) mu[aE + 1] = 48 + aE;
		for (aE = 0; aE < 26; aE++) mu[aE + 11] = 65 + aE, mu[aE + 38] = 97 + aE
	}, this.mv = function(mw) {
		for (var lD = k8, l2 = new Uint8Array(mw), aE = 0; aE < mw; aE++) l2[aE] = lD.k9(6);
		return l2
	}, this.mx = function(l2) {
		for (var bU = l2.length, my = mu, ad = [], aE = 0; aE < bU; aE++) ad.push(String.fromCharCode(my[l2[aE]]));
		return ad.join("")
	}
}

function mz() {
	var n0, n1, n2;
	n0 = [32, 65, 191, 913, 931], n1 = [64, 127, 688, 930, 1155], n2 = new Array(n0.length + 1);
	for (var aE = 0; aE < n2.length; aE++) {
		n2[aE] = 0;
		for (var ej = aE - 1; 0 <= ej; ej--) n2[aE] += n1[ej] - n0[ej]
	}

	function n9(fV) {
		for (var aE = n0.length - 1; 0 <= aE; aE--)
			if (fV >= n0[aE] && fV < n1[aE]) return aE;
		return -1
	}
	this.n4 = function(v) {
		return 0 !== (v = v.trim()).indexOf("Bot ") && 0 !== v.indexOf("[Bot] ") && function(v, n6, n7) {
			var bU = (v = v.trim()).length;
			if (bU < n6 || n7 < bU) return !1;
			for (var fV, n8 = 0, aE = 0; aE < bU; aE++)
				if (fV = v.charCodeAt(aE), n8 += 65 <= fV && fV <= 90 || 1040 <= fV && fV <= 1071 ? 1 : 0, -1 === n9(fV)) return !1;
			if (3 < n8 && n8 > Math.floor(bU / 2)) return !1;
			return !0
		}(v, 3, 20)
	}, this.nA = function(v) {
		for (var bU = (v = v.trim()).length, ad = [], aE = 0; aE < bU; aE++) {
			var fV, bc = n9(fV = v.charCodeAt(aE));
			ad.push(n2[bc] + fV - n0[bc])
		}
		return ad
	}, this.l8 = function(ad) {
		for (var fV, cV, v = "", bU = ad.length, aE = 0; aE < bU; aE++)
			for (cV = 1; cV < n2.length; cV++)
				if (ad[aE] < n2[cV]) {
					fV = n0[cV - 1] + ad[aE] - n2[cV - 1], v += String.fromCharCode(fV);
					break
				} return v
	}, this.nB = function(v) {
		for (var ad = this.nA(v), result = "", aE = 0; aE < ad.length; aE++) result = (result += ad[aE] < 10 ? "00" : ad[aE] < 100 ? "0" : "") + ad[aE].toString(10);
		return result
	}, this.nC = function(v) {
		for (var ad = new Array(Math.floor(v.length / 3)), aE = 0; aE < v.length; aE += 3) ad[Math.floor(aE / 3)] = parseInt(v.substring(aE, aE + 3));
		return this.l8(ad)
	}, this.a9 = function(v) {
		for (var aR, ad = [v.length], aE = 0; aE < v.length; aE++) ad[aE] = v.charCodeAt(aE) - 48;
		var result = "";
		for (aE = 0; aE < v.length; aE++) aE === v.length - 1 || 51 < 10 * ad[aE] + ad[aE + 1] ? result += ad[aE].toString() : (aR = 10 * ad[aE] + ad[aE + 1], result += String.fromCharCode(aR + (aR < 26 ? 65 : 71)), aE++);
		return result
	}, this.x = function(v) {
		for (var fV, result = "", aE = 0; aE < v.length; aE++) 48 <= (fV = v.charCodeAt(aE)) && fV < 58 ? result += String.fromCharCode(fV) : 65 <= fV && fV < 75 ? result += "0" + (fV - 65).toString() : 75 <= fV && fV < 91 ? result += (fV - 65)
			.toString() : 97 <= fV && fV < 123 && (result += (fV - 71).toString());
		return result
	}, this.nD = function(v) {
		for (var bU = v.length, ad = [], aE = 0; aE < bU; aE++)(fV = v.charCodeAt(aE)) < 58 ? ad.push(v[aE]) : (fV -= fV < 91 ? 65 : 71, ad.push(String(bJ(fV, 10))), ad.push(String(fV - 10 * bJ(fV, 10))));
		var bU = ad.length - 2,
			fV = 0,
			l2 = [];
		for (aE = 0; aE < bU; aE += 3) l2[fV++] = parseInt(ad[aE] + ad[aE + 1] + ad[aE + 2]);
		return l2
	}, this.nE = function() {
		for (var dO, nF = "", aE = 0; aE < 6; aE++) dO = 48 + em.random() % 36, dO += 58 <= dO ? 39 : 0, nF += String.fromCharCode(dO);
		return nF
	}
}

function nG() {
	this.nH = new nI, this.gD = new nJ, this.b = function() {
		this.gD.b()
	}
}

function nI() {
	function nL() {
		if (2 === gg) return 1;
		gT.nW(), gg = 2, nX = nY
	}

	function nO() {
		g7.nZ(!0), gN.gf(!0), g9.gf(!0), gT.gf(), gb.na(), aL.cx = !0, iI.nb(), aJ(0)
	}
	this.nK = function() {
		nL() || (cc.cN.k3(), g7.nM(247, 0), g7.nN(0, 59), gY.i1(2700), gZ.show(!1, !1, !0), nO())
	}, this.nP = function(nQ) {
		var k0 = 0,
			nR = !1;
		nL() || (8 === fv ? ((nR = (k0 = nQ < 0 ? bv[0] >= bv[1] ? 0 : 1 : nQ) === bN) ? g7.nN(k0, 2) : g7.nN(1 - bN, 3), nS.ml(k0), cc.cN.jz(k0)) : cS ? (nR = fW.fX[bN] === gU.nT(), 9 === fv ? (cc.cN.jz(nR ? gr[0] : 512), g7.nU(nR)) : gC.gD.fF(
			nR)) : (nR = (k0 = gr[0]) === bN, g7.nV(k0), cc.cN.jz(k0)), gZ.show(nR, !1), nO())
	}
}

function nJ() {
	var nc;

	function nw(ne, bd) {
		for (var v = "", aE = bd; aE < ne.length && aE < bd + 4; aE++) v += (aE === bd ? "" : "   ") + "[" + fW.no[ne[aE].id] + "]: " + ne[aE].nt.toFixed(Math.max(Math.floor(3 - Math.log10(ne[aE].nt)), 0));
		v.length && g7.nv(0, v, 45, 0, cM.iL.iM(225, 240, 255), dB.iR, -1, !1)
	}
	this.nd = 0, this.ne = null, this.b = function() {
		nc = 0, this.nd = 0, this.ne = null
	}, this.fF = function(nR) {
		var nf = fW.ng[gU.nh()];
		this.nd = gU.ni(), this.ne = function(nf, nd) {
				var aE, cV, bU, fX = fW.fX,
					ng = fW.ng,
					no = fW.no,
					np = fW.np,
					nq = bv,
					nr = e5,
					ns = [],
					cm = 0;
				for (cV = no.length - 1; 0 <= cV; cV--)
					if (ng[fX[np[cV][0]]] === nf) {
						for (ns.push({
								id: cV,
								nq: 0,
								player: np[cV][0],
								nt: 0
							}), bU = np[cV].length, aE = 0; aE < bU; aE++) ns[cm].nq += nq[np[cV][aE]];
						for (ns[cm].nt = (1 + nu) * nr * ns[cm].nq / nd, aE = 0; aE < cm; aE++)
							if (ns[cm].nq > ns[aE].nq) {
								ns.splice(aE, 0, ns[cm]), ns.pop();
								break
							} cm++
					} 8 < ns.length && (ns.length = 8);
				for (; 0 < ns.length && 0 === ns[ns.length - 1].nq;) ns.pop();
				return ns
			}(nf, this.nd), cv.nk("Team " + fW.cj[nf], 2, 1, 12),
			function(nR, nf) {
				var color;
				nR = nR ? (color = cM.iL.iM(10, 220, 10), "Congratulations! Team " + fW.cj[nf] + " won the game!") : (color = cM.iL.iM(200, 80, 80), "Our alliance was defeated! Team " + fW.cj[nf] + " won the game.");
				g7.nv(0, nR, 40, 0, color, dB.iR, -1, !1)
			}(nR, nf), 0 !== (nR = this.ne).length && (g7.nv(0, "The allied clans of the winning team have earned these glorious points:", 40, 0, dB.dC, dB.iR, -1, !1), nw(nR, 0), nw(nR, 4)), cc.cN.k5(), gY.i1(2700)
	}, this.gE = function() {
		2 === gg && -1 !== nc && (0 === nc ? nc = this.ne && 0 !== this.ne.length ? aL.aM + 8e3 : -1 : aL.aM < nc || (nc = -1, g7.nv(255, "Clan rankings and results can also be accessed under:", 735, 0, dB.dC, dB.iR, -1, !1), g7.nv(255,
			"territorial.io/clans", 736, 0, dB.dC, dB.iR, -1, !1), g7.nv(255, "territorial.io/clan-results", 736, 0, dB.dC, dB.iR, -1, !1)))
	}
}

function nx() {
	var ny, l2;

	function o2() {
		var aE, cu = new o3;
		for (cu.l4(800), cu.l5(1, 0), cu.l5(3, 7), cu.l5(3, 1), cu.l5(2, m ? 2 : 12 <= q ? 1 : 0 < q ? 3 : 0), cu.l5(1, o4 ? 1 : 0), cu.l5(1, o5 ? 1 : 0), cu.l5(1, 2 === o6 ? 1 : 0), aE = 0; aE < l2.length && !(cu.cm + 6 > 8 * cu.dF); aE++) cu.l5(6,
			l2[aE]);
		ny.send(cu.k7), ny.onopen = null
	}
	window.addEventListener("error", function error(nz) {
		var o1;
		0 === nz.lineno && 0 === nz.colno || (window.removeEventListener("error", error), nz = nz.lineno + " " + nz.colno + " " + nz.message, (o1 = new kv).b(), l2 = o1.ky(o1.kx(nz)), (ny = new WebSocket("wss://territorial.io/s52/")).onopen =
			o2, n ? n.showToast(nz) : alert(nz))
	})
}

function o7() {
	var o8 = -15e3,
		o9 = !1;

	function cz(nz) {
		oS() || (o9 = !0, oT(nz, 1), gB.oU(gB.oV), oW(Math.floor(kn * nz.clientX), Math.floor(kn * nz.clientY)))
	}

	function oH(nz) {
		o8 = aL.aM, oT(nz, 1), gB.oU(gB.oV), 0 < nz.touches.length && (oX = Math.floor(kn * nz.touches[0].clientX), oY = Math.floor(kn * nz.touches[0].clientY), oZ.oH(nz) || oW(oX, oY))
	}

	function oW(hD, hE) {
		0 === gg ? aT.cz(hD, hE) : gb.oa(hD, hE) || mZ.cz(hD, hE) || kj.cz(hD, hE) || gZ.cz(hD, hE) || mY.ob(hD, hE) || gR.cz(hD, hE) || cK.cz(hD, hE) || oc.od(hD, hE) || gT.cz(hD, hE) || mY.oe(hD, hE)
	}

	function oD(nz) {
		oS() || (o9 = !0, oT(nz, 1), og(Math.floor(kn * nz.clientX), Math.floor(kn * nz.clientY)))
	}

	function oI(nz) {
		o8 = aL.aM, oT(nz, 1), 0 < nz.touches.length && (oX = Math.floor(kn * nz.touches[0].clientX), oY = Math.floor(kn * nz.touches[0].clientY), oZ.oI(nz) || og(oX, oY))
	}

	function og(hD, hE) {
		0 === gg ? aT.oD(hD, hE) : mZ.oD(hD, hE) || (cK.oD(hD, hE), mY.oh() ? mY.oD(hD, hE) : cf.oi ? cf.oD(hD, hE) && (aL.cx = !0) : (gN.oD(hD, hE), hv.hw && hv.oD(hD, hE) && (aL.cx = !0)))
	}

	function oF(nz) {
		oS() || (oT(nz, 1), 0 === gg ? (aT.click(-1024, -1024), oj.ok()) : (gN.ol(-1024, -1024), cK.oD(-1024, -1024), cf.om(), hv.hw && (hv.hw = !1)))
	}

	function oE(nz) {
		oS() || (oT(nz, 1), on(Math.floor(kn * nz.clientX), Math.floor(kn * nz.clientY), 2 === nz.button))
	}

	function click(nz) {
		oS() || oT(nz, 1)
	}

	function oJ(nz) {
		o8 = aL.aM, oT(nz, 1), nz && nz.touches && 0 < nz.touches.length && 0 !== gg ? hv.hw = !1 : oZ.oo() || on(oX, oY, !1)
	}

	function oK(nz) {
		o8 = aL.aM, oT(nz, 1), on(oX, oY, !1)
	}

	function oL(nz) {
		op.oL(nz)
	}

	function oM(nz) {
		op.oM(nz)
	}

	function oN(nz) {
		oS() || oT(nz, 0)
	}

	function on(hD, hE, oq) {
		0 === gg ? aT.click(hD, hE) : (gN.ol(hD, hE), mZ.ol(), cf.om(), hv.hw = !1, mY.click(hD, hE, oq) && (aL.cx = !0))
	}

	function oG(nz) {
		var hD, hE, deltaY;
		oS() || (oT(nz, 1), gB.oU(gB.oV), hD = Math.floor(kn * nz.clientX), hE = Math.floor(kn * nz.clientY), deltaY = nz.deltaY, 1 === nz.deltaMode && (deltaY *= 16), 0 === gg ? aT.oG(hD, hE, deltaY) : gN.oG(hD, hE, deltaY) || (cf.or(hD, hE) ? cf
			.oG(deltaY) && (aL.cx = !0) : hv.oG(hD, hE, +deltaY)))
	}

	function oO(nz) {
		oT(nz, 0)
	}

	function oT(nz, id) {
		0 === id && (os.oh || kj.oh || ot.oh) || 1 === id && (ot.ki || kj.ki) || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aT.ov() && nz.preventDefault()
	}

	function oP(nz) {
		oS() || aL.aM < 400 || (8 !== aT.ov() && aT.ow(nz) ? aL.cx = !0 : "Escape" === nz.key ? aT.aU() : "ArrowLeft" === nz.key || "a" === nz.key ? hz.ox(3) : "ArrowUp" === nz.key || "w" === nz.key ? hz.ox(0) : "ArrowRight" === nz.key || "d" === nz
			.key ? hz.ox(1) : "ArrowDown" === nz.key || "s" === nz.key ? hz.ox(2) : "h" === nz.key ? 1 <= gg && gb.oy(!hu) : " " === nz.key && gg && (oz.cI(), cK.cL && cK.p0(), cJ) && gb.p1(!1))
	}

	function oQ(nz) {
		oS() || ("ArrowLeft" === nz.key || "a" === nz.key ? hz.p2(3) : "ArrowUp" === nz.key || "w" === nz.key ? hz.p2(0) : "ArrowRight" === nz.key || "d" === nz.key ? hz.p2(1) : "ArrowDown" === nz.key || "s" === nz.key ? hz.p2(2) : "1" === nz.key ?
			cf.p3(.75) : "2" === nz.key ? cf.p3(7 / 8) : "3" === nz.key ? cf.p3(.9375) : "4" === nz.key ? cf.p3(31 / 32) : "5" === nz.key ? cf.p3(32 / 31) : "6" === nz.key ? cf.p3(16 / 15) : "7" === nz.key ? cf.p3(8 / 7) : "8" === nz.key ? cf.p3(
				4 / 3) : "+" === nz.key ? 0 !== gg && hv.oG(Math.floor(hL / 2), Math.floor(d3 / 2), -200) : "-" === nz.key ? 0 !== gg && hv.oG(Math.floor(hL / 2), Math.floor(d3 / 2), 200) : "c" === nz.key && 0 !== gg && mZ.p4())
	}

	function oR() {
		"hidden" === document.visibilityState ? aL.p5() : aL.p6()
	}

	function oS() {
		return o8 + 15e3 > aL.aM
	}

	function resize() {
		p9.pA()
	}
	this.oA = 0, this.oB = "", this.b = function() {
		oC.addEventListener("mousedown", cz, {
			passive: !1
		}), oC.addEventListener("mousemove", oD, {
			passive: !1
		}), oC.addEventListener("mouseup", oE, {
			passive: !1
		}), oC.addEventListener("click", click, {
			passive: !1
		}), oC.addEventListener("mouseleave", oF, {
			passive: !1
		}), oC.addEventListener("wheel", oG, {
			passive: !1
		}), oC.addEventListener("touchstart", oH, {
			passive: !1
		}), oC.addEventListener("touchmove", oI, {
			passive: !1
		}), oC.addEventListener("touchend", oJ, {
			passive: !1
		}), oC.addEventListener("touchcancel", oK, {
			passive: !1
		}), oC.addEventListener("dragover", oL), oC.addEventListener("drop", oM), oC.addEventListener("dblclick", oN), document.addEventListener("contextmenu", oO), document.addEventListener("keyup", oP), document.addEventListener("keydown",
			oQ), document.addEventListener("visibilitychange", oR), window.addEventListener("resize", resize)
	}, this.od = function(hD, hE) {
		return !!gb.cz(hD, hE) || !!(gN.cz(hD, hE) || hv.cz(hD, hE) || cf.cz(hD, hE) || g7.cz(hD, hE))
	}, this.p7 = oS, this.p8 = function() {
		return !o9 || 0 < o8
	}
}

function pB() {
	this.iL = new pC, this.lP = new pD, this.cN = new pE
}

function pD() {
	this.lQ = function(ad) {
		ad.fill(0)
	}, this.pF = function(ad) {
		for (var bU = ad.length, aE = 0; aE < bU; aE++) ad[aE] = []
	}, this.pG = function(dZ, ci) {
		for (var da = eU.aZ, aE = 0; aE < 3; aE++) da[aE] = ci * dZ[aE];
		return da
	}, this.pH = function(dZ, da, pI) {
		for (var de = 0, aE = 0; aE < 3; aE++) de += Math.abs(dZ[aE] - da[aE]);
		return pI <= de
	}, this.pJ = function(dZ, pK) {
		for (var aE = 0; aE < 3; aE++) dZ[aE] = cA.pL(dZ[aE] + pK, 0, 255);
		return dZ
	}
}

function pC() {
	this.pM = dD(32, 32, ["a", "b", "m"], 200), this.lF = function(cu, ez) {
		var fV = document.createElement("canvas");
		return fV.width = cu, fV.height = ez, fV
	}, this.getContext = function(dL, alpha) {
		return dL.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(iL, cu, ez) {
		return iL.getImageData(0, 0, cu, ez)
	}, this.iM = function(dO, pN, cV) {
		return "rgb(" + dO + "," + pN + "," + cV + ")"
	}, this.iO = function(dO, pN, cV, ej) {
		return "rgba(" + dO + "," + pN + "," + cV + "," + ej.toFixed(3) + ")"
	}, this.kl = function(pO, hD, hE, cu, ez) {
		var i4 = 1 / kn,
			pP = .02 * i4 * ez,
			pQ = i4 * pR;
		pO.padding = pP.toFixed(2) + "px", pO.border = pQ.toFixed(2) + "px solid " + dB.dC, pO.left = (i4 * hD).toFixed(2) + "px", pO.top = (i4 * hE).toFixed(2) + "px", pO.width = (i4 * cu - 2 * pP - 2 * pQ).toFixed(2) + "px", pO.height = (i4 *
			ez - 2 * pP - 2 * pQ).toFixed(2) + "px"
	}, this.km = function(dF, type) {
		return dF = dF.toFixed(2), 0 === type ? dF + "px " + settings.fontName : 1 === type ? "bold " + dF + "px " + settings.fontName : 2 === type ? "small-caps " + dF + "px " + settings.fontName : "small-caps bold " + dF + "px " + settings
			.fontName
	}, this.textAlign = function(dM, id) {
		dM.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(dM, id) {
		dM.textBaseline = 1 === id ? "middle" : "bottom"
	}, this.kc = function() {
		return 1 + .5 * a0
	}
}

function pE() {
	this.cO = function(j) {
		return 0 === j ? 1 === gg && hr : 1 === j ? 1 === gg && !hr : 1 <= gg && !hr
	}, this.cP = function(player) {
		return 0 !== e6[player] && 2 !== e7[player]
	}, this.kG = function(pS, pT) {
		return pS !== pT
	}, this.jn = function(player, aR) {
		return aR = this.pU(player, aR), bO[player] += aR, aR
	}, this.pU = function(player, aR) {
		var pV = bO[player];
		return aR = Math.min(aR, bv[player] * pW - pV), aR = Math.min(aR, pX - pV), Math.max(aR, 0)
	}, this.kH = function(player, eA, pY, pZ) {
		var pV = bO[player],
			eA = cA.cB(pV * (eA + 1), 1024),
			pY = cA.cB(pY * pV, 1024),
			eA = Math.min(eA, pV - pY);
		return 10 === fv && (eA = gG.pb(player, eA)), eU.aX[0] = eA, eU.aX[1] = pY, pZ <= eA
	}, this.jk = function(player, jP, jO) {
		var player = bO[player],
			pa = cA.cB(64 * player, 1024);
		return jP = Math.min(jP, player - pa), pa += player = this.pd(jP), jP = this.pU(jO, jP -= player), eU.aX[0] = jP, eU.aX[1] = pa, 1 <= jP
	}, this.jm = function(jP, jO) {
		var pc = this.pd(jP);
		return jP = this.pU(jO, jP -= pc), eU.aX[0] = jP, eU.aX[1] = pc, 1 <= jP
	}, this.e9 = function(player, pe) {
		return cA.cB(bO[player] * (pe + 1), 1024)
	}, this.pd = function(pf) {
		return cA.cB(Math.max(2142 - aL.fU(), 0) * pf, 2142)
	}, this.kV = function(player, pY) {
		bO[player] -= cA.cB(pY * bO[player], 1024)
	}, this.kJ = function(player) {
		bO[player] -= eU.aX[0] + eU.aX[1]
	}, this.kI = function(player, ed) {
		return (ed = Math.min(ed, bZ)) < bZ && 0 === e6[ed] && (ed = bZ), (eU.ab[0] = ed) === bZ || eo(player, ed)
	}, this.kL = function(player, jO) {
		return 0 !== e6[jO] && !eo(player, jO)
	}
}

function pg() {
	this.ea = function(player, dg) {
		ph.mM(player, kC.dW(dg), kC.dY(dg)) && (aL.cx = !0), fx && this.fF()
	}, this.fF = function() {
		var aE;
		for (hr = !1, aE = 0; aE < e5; aE++) 0 !== e6[aE] && 0 === bv[aE] && ph.mS(aE);
		0 !== e6[bN] ? (bR.bS[7] = bv[bN], bR.bS[8] = bO[bN], cf.l(), g9.pi(), cJ || gY.hq(f3[bN] - 5, f6[bN] - 5, f2[bN] + 5, f5[bN] + 5), ga.b()) : gZ.show(!1, !1, !1, !0), g7.pj(18), g8.pk(), g8.gf(!0), gP.gL.pl(), kF = null, iI.pm = !0, iI
			.pn(), fx && aJ(1)
	}
}
var fx, cJ, po, pX, pp, bN, hu, hr, pq, cS, pr, fv, nu, kF, nS, ps, fG, bL, gJ, gK, gY, ph, w, mY, cK, g7, qH, gR, cv, cf, hv, oj, gQ, gN, g9, gZ, qI, qJ, aT, qK, ot, qL, fy, qG, cq, bW, r, b5, bP, g8, q6, g1, q4, qM, hz, qN, em, h6, mU, oZ, qO, ga,
	jJ, p9, qP, qQ, gT, gc, gB, gH, hR, qR, gI, gG, gS, op, fr, qS, cc, gW, kj, cM, dB, gb, l3, qT, k8, lE, qU, oc, qV, cA, kC, eO, eU, gP, gV, gC, az, oz, aO, bZ = 512,
	ly = 512,
	pW = 150,
	gg = 0,
	mF = 512,
	bK = 2;

function pt(pu, pv, mj, pw, px, py) {
	hu = !1, cJ = py, nu = px, cS = (fv = pw) < 7 || 9 === fv, nY = e5 = mj.length, fx = 1 === nY, pr = 9 === (fv = 8 === (fv = 10 === fv && fx ? 7 : fv) && 2 !== e5 ? 7 : fv) ? 2 : fv + 2, ps = e5 <= 2 ? 30 : e5 <= 50 ? 40 : 50, pq = hr = !(fr.fs &&
			!fr.ft.pz) && (cS || e5 < 100), kF = hr ? new pg : null, mF = 512, ly = bZ, fx && (ly = fy.q0()), fq = ly - e5, nX = 0, bN = pv, em.q1(pu), g1.b(), q2(mj), fW.b(mj), gg = 1, pX = 15e8, pp = 1e9, bR.b(), q3(), q4.q5(), iI.b(), bP.b(),
	fB(), bW.b(mj), mU.b(), kC.b(), eO.b(), gC.b(), fG.b(), q6.l4(), q6.q7(), ph.b(), q8(), gW.b(pu, mj, pw, px), gU.b(), gV.b(), gP.b(), mZ.b(), q9.putImageData(qA, 0, 0), gN.b(), hv.b(), cf.b(), gb.b(), gT.b(), gQ.b(), g9.b(), cK.b(), cv.b(), g7
		.b(), gR.b(), mY.b(), gZ.b(), gK.b(), bL.b(), gJ.b(), ay(), b5.b(), g8.b(), oz.b(), gG.b(), gI.b(), gS.b(), gH.b(), aO.k(!1), 8 === fv ? (nS = new mi).b(mj) : nS = null, aL.qB(), qC(), ga.b(), aL.cx = !0, cJ || fx && hr || aJ(1)
}

function qC() {
	gY.hp(), 0 === e6[bN] && gZ.show(!1, !0), g8.gf(!0)
}

function qD(qE) {
	kj.kk(), gB.close(gB.oV, 3246), gg = 0, aL.qF(), aJ(0), aO.k(!0), qG.b(!qE)
}

function qW() {
	cA = new qX, qV = new qY, fG = new ff, bL = new gi, gJ = new gw, gK = new gz, gY = new hW, ph = new ln, w = new mz, mY = new qZ, cK = new qa, g7 = new qb, qH = new qc, gR = new qd, cv = new qe, cf = new qf, hv = new qg, oj = new qh, gQ = new qi,
		gN = new qj, g9 = new qk, gZ = new ql, qI = new qm, qJ = new qn, aT = new qo, (qK = new qp).l4(), ot = new qq, qL = new qr, fy = new qs, qG = new qt, cq = new qu, bW = new qv, r = new qw, b5 = new qx, bP = new qy, g8 = new qz, q6 = new r0,
		g1 = new r1, q4 = new r2, qM = new r3, hz = new r4, qN = new r5, em = new r6, h6 = new r7, mU = new r8, oZ = new r9, qO = new rA, ga = new rB, jJ = new rC, p9 = new rD, qP = new rE, qQ = new rF, gT = new rG, gc = new rH, gB = new rI, gH =
		new rJ, hR = new rK, qR = new rL, gI = new rM, gG = new rN, gS = new rO, op = new rP, fr = new rQ, qS = new rR, cc = new jA, gW = new rS, kj = new rT, cM = new pB, dB = new iK, gb = new rU, l3 = new o3, (qT = new mt).b(), k8 = new rV, (lE =
			new kv).b(), qU = new rW, oc = new o7, kC = new dP, eO = new rX, eU = new aV, gP = new rY, gV = new rZ, gC = new nG, (az = new ra).b(), oz = new cF, aO = new a
}

function qZ() {
	var rb, hD, hE, rc, rd, re, aM, player, rf, mA, zoom, jw, rg;

	function rw(player) {
		for (var aE = jw.length - 1; 0 <= aE; aE--)
			if (jw[aE] === player) return 1
	}

	function ru(rr) {
		var aE, bU;
		if (-1 !== rr)
			for (bU = rb.length, aE = 0; aE < bU; aE++)
				if (rb[aE].oh && rb[aE].hD + 1 === rr % 4 && rb[aE].hE + 1 === rr >> 2) return aE;
		return -1
	}

	function rt(d0, d1) {
		var pN = mA / 2;
		return d0 < hD - rc - 3 * pN || hD + 3 * rc + 5 * pN < d0 || d1 < hE - rc - 3 * pN || hE + 2 * rc + 3 * pN < d1 ? -1 : 4 * (d1 < hE - pN ? 0 : d1 < hE + rc + pN ? 1 : 2) + (d0 < hD - pN ? 0 : d0 < hD + rc + pN ? 1 : d0 < hD + 2 * rc + 3 *
			pN ? 2 : 3)
	}
	this.rh = function() {
		var aE, cV, rk = [dB.im, dB.iw, dB.iS, dB.j8, dB.j2];
		for (rb = new Array(8), aE = 0; aE < 8; aE++) rb[aE] = {
			id: aE,
			oh: !1,
			rl: 0,
			dL: [],
			hD: 0,
			hE: 0
		};
		for (rb[0].colors = [0, 1, 2, 3], rb[0].hD = 0, rb[0].hE = 0, rb[1].colors = [0, 1, 4], rb[1].hD = 1, rb[1].hE = 0, rb[2].colors = [0, 2], rb[2].hD = -1, rb[2].hE = 0, rb[3].colors = [0], rb[3].hD = 0, rb[3].hE = 0, rb[4].colors = [0, 2],
			rb[4].hD = 1, rb[4].hE = 1, rb[5].colors = [3], rb[5].hD = 0, rb[5].hE = -1, rb[6].id = 20, rb[6].colors = [0], rb[6].hD = 1, rb[6].hE = -1, rb[7].id = 21, rb[7].colors = [0], rb[7].hD = 0, rb[7].hE = 1, aE = 0; aE < 8; aE++)
			for (cV = 0; cV < rb[aE].colors.length; cV++) rb[aE].dL.push(function(id, rm) {
				var dE = cq.get(3).height,
					rn = cM.iL.lF(dE, dE),
					dM = cM.iL.getContext(rn);
				20 === id ? dM.drawImage(cq.get(18), 0, 0) : 21 === id ? dM.drawImage(cq.ro("emojis"), -4 * dE, 0) : (function(cu, iL, rq) {
					iL.fillStyle = rq, iL.beginPath(), iL.arc(Math.floor(cu / 2), Math.floor(cu / 2), Math.floor(.47 * cu), 0, 2 * Math.PI), iL.fill()
				}(dE, dM, rm), dM.drawImage(cq.get(3), -id * dE, 0));
				return rn
			}(rb[aE].id, rk[rb[aE].colors[cV]]))
	}, this.rj = function() {
		return rb
	}, this.b = function() {
		jw = [], hD = hE = aM = 0, rd = re = -1e3, this.resize()
	}, this.resize = function() {
		rc = Math.floor((a0 ? .075 : .0468) * ck), zoom = rc / cq.get(3).height, mA = Math.floor(rc / 3)
	}, this.ob = function(d0, d1) {
		return !!this.oh() && (aL.cx = !0, !!aF.cz(d0, d1, player) || (d0 = function(d0, d1) {
			var rr, aE;
			if (re = rd = -1e3, rr = rt(d0, d1), -1 === (rr = ru(rr))) return 0;
			if (1 === rb[rr].colors[rb[rr].rl]) return 0;
			if (5 === rr) {
				if (! function() {
						var a3 = (new Date).getTime();
						rg + 4e3 < a3 && (jw = []);
						rg = a3
					}(), rw(player)) return 1;
				jw.push(player), 16 < jw.length && jw.shift()
			} else if (6 === rr) {
				for (aE = jw.length - 1; 0 <= aE; aE--) 0 === e6[jw[aE]] && jw.splice(aE, 1);
				0 < jw.length && (gS.rx(1, jw, !0) && cc.cN.jv(jw, player), jw = [])
			} else if (2 === rr) cc.cd.jN(cf.cg(), player);
			else if (3 === rr) hr && cc.cd.jI(rf);
			else if (0 === rr)
				if (0 === rb[0].rl) {
					if (pq && g9.ry() < 300) return 1;
					cc.cd.ce(cf.cg(), player)
				} else gH.rz(player, cf.cg());
			else if (1 === rr) cc.cd.jR(cf.cg(), rf);
			else {
				if (7 === rr) return aF.show(d0, d1), 2;
				if (4 !== rr) return 0;
				gS.rx(0, [player], !0) && cc.cN.js(player)
			}
			return 1
		}(d0, d1), this.kk(), 2 === d0 && (aF.oh = !0), 0 < d0))
	}, this.oe = function(d0, d1) {
		this.oh() || (rd = d0, re = d1, aM = (new Date).getTime())
	}, this.click = function(d0, d1, oq) {
		var dr = kC.eE(d0),
			ds = kC.eF(d1),
			dg = kC.eH(dr, ds),
			dq = kC.eJ(dg);
		return !(!kC.eG(dr, ds) || (dr = (a0 ? .025 : .0144) * ck, Math.abs(d0 - rd) > dr) || Math.abs(d1 - re) > dr || performance.now() > aM + 425) && (oq ? (function(d0, d1, dq) {
			bW.bX(dq) || -1 === (d0 = eO.jS.sH(d0, d1)) ? g7.sG(dq) : g7.sI(d0)
		}(d0, d1, dq), !1) : cK.cL || this.oh() || !kC.e8() || cJ ? (this.kk(), !1) : hr ? !!bW.bX(dq) && (rf = dg, rb[3].oh = !0, this.s2(d0, d1)) : (eO.jS.jV(dg) || eO.jS.s3(d0, d1) || (2 === gg ? bW.bf(dq) && 0 < aF.s4 && (player = bW
			.bg(dq), bW.s5(player)) && (rb[0].oh = !0, rb[0].rl = 1, rb[7].oh = !0) : bW.s6(dq) || (rf = dg, eO.jS.jT(bN, dg) && (rb[0].oh = !0, rb[0].rl = 1, rb[1].oh = !0, rb[1].rl = eU.aa[2] ? 0 : 2), bW.s7(dq)) || (bW.bh(dq) ?
			(player = bZ, s8(bN) ? (rb[0].oh = !0, rb[0].rl = 0) : s9(bN, player) && (rb[0].oh = !0, rb[0].rl = 3)) : (player = bW.bg(dq)) === bN ? 0 !== aF.s4 && (rb[0].oh = !0, rb[0].rl = 1, rb[7].oh = !0) : (rb[0].rl = 1, rb[5]
				.oh = function(player) {
					return bW.s5(player) && !rw(player) && gS.rx(1, [player], !1)
				}(player), rb[7].oh = 1 <= aF.s4 && bW.s5(player), eo(player, bN) ? (rb[4].oh = bW.s5(player) && !g8.sB(player) && gS.rx(0, [player], !1), rb[6].oh = function(player) {
					if (0 === jw.length) return !1;
					if ((new Date).getTime() > rg + 4e3) return !(jw = []);
					return !rw(player) && ! function(player) {
						var aE;
						if (cS)
							for (aE = jw.length - 1; 0 <= aE; aE--)
								if (!eo(player, jw[aE])) return 1;
						return
					}(player)
				}(player), sD(bN, player) ? (rb[0].rl = 0, rb[0].oh = !0) : s9(bN, player) && (rb[0].rl = 3, rb[0].oh = !0), rb[0].oh = this.sE()) : (rb[2].oh = !0, rb[0].oh = !0)))), this.s2(d0, d1)))
	}, this.s2 = function(d0, d1) {
		return hD = d0 - Math.floor(rc / 2), hE = d1 - Math.floor(rc / 2), !!this.oh()
	}, this.oD = function(d0, d1) {
		return !!this.oh() && (aF.oh ? !aF.sK(d0, d1) && (aF.sL(), aF.oh = !1, aL.cx = !0) : function(sN, d0, d1) {
			d0 = rt(d0, d1);
			if (0 <= ru(d0)) return !1;
			if ((1 === d0 || 6 === d0) && 0 <= ru(2)) return !1;
			if ((6 === d0 || 9 === d0) && 0 <= ru(10)) return !1;
			return sN.kk(), aL.cx = !0
		}(this, d0, d1))
	}, this.kk = function() {
		for (var aE = rb.length - 1; 0 <= aE; aE--) rb[aE].oh = !1, rb[aE].rl = 0;
		aF.oh = !1
	}, this.oh = function() {
		return this.sE() || aF.oh
	}, this.sE = function() {
		for (var bU = rb.length, aE = 0; aE < bU; aE++)
			if (rb[aE].oh) return !0;
		return !1
	}, this.d7 = function() {
		if (this.oh())
			if (aF.oh) aF.d7();
			else {
				var aE, dM = d8,
					cV = rb,
					bU = cV.length,
					sP = (rc + mA) / zoom;
				for (dM.imageSmoothingEnabled = !0, dM.setTransform(zoom, 0, 0, zoom, hD, hE), aE = 0; aE < bU; aE++) cV[aE].oh && d8.drawImage(cV[aE].dL[cV[aE].rl], cV[aE].hD * sP, cV[aE].hE * sP);
				dM.imageSmoothingEnabled = !1, dM.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function qa() {
	var ez, dL, ct, sR, sS, sQ = ["Quit Game", "Surrender", "Statistics", "Replay"];

	function sT() {
		var sU, iL = dL.getContext("2d", {
			alpha: !0
		});
		iL.clearRect(0, 0, ez, ez), iL.fillStyle = dB.iP, iL.fillRect(0, 0, ez, ez), 0 === sR && (iL.fillStyle = dB.iT, iL.fillRect(0, 0, ez, ez)), iL.fillStyle = dB.dC, iL.fillRect(0, 0, ez, 1), iL.fillRect(0, 0, 1, ez), iL.fillRect(0, ez - 1, ez,
			1), iL.fillRect(ez - 1, 0, 1, ez), sU = .9 * ez / cq.get(0).width, iL.imageSmoothingEnabled = !0, iL.setTransform(sU, 0, 0, sU, Math.floor((ez - sU * cq.get(0).width) / 2), Math.floor((ez - sU * cq.get(0).height) / 2)), iL.drawImage(
			cq.get(0), 0, 0), iL.setTransform(1, 0, 0, 1, 0, 0)
	}

	function sX(d0, d1) {
		if (!cK.cL) return d0 <= ez + kd && d1 >= cf.hE ? 0 : -1;
		if (d0 <= 4 * ez + kd) {
			if (d1 >= cf.hE) return 0;
			if (d1 >= cf.hE - ez - sS * kd) return sa(2) ? 2 : -1;
			if (d1 >= cf.hE - 2 * (ez + sS * kd)) return sa(3) ? 3 : -1;
			if (d1 >= cf.hE - 3 * (ez + sS * kd)) return sa(4) ? 4 : -1
		} else if (d0 <= 7 * ez + kd && d1 >= cf.hE - ez - sS * kd) return 1;
		return -1
	}

	function sa(aE) {
		return 2 === aE ? sY(2) || sY(3) || sY(4) : 3 === aE && sY(3) || sY(4)
	}

	function sY(aE) {
		return 2 === aE ? !cJ && cK.sf(bN) : 3 === aE ? 2 <= bR.sg : kj.sh()
	}

	function sj(aE, rm) {
		d8.setTransform(1, 0, 0, 1, kd, cf.hE - aE * sS * kd - aE * ez), d8.fillStyle = dB.iP, d8.fillRect(0, 0, 4 * ez, ez), sR === aE + 1 && rm === dB.dC && (d8.fillStyle = dB.iT, d8.fillRect(0, 0, 4 * ez, ez)), d8.fillStyle = rm, d8.fillRect(0, 0,
			4 * ez, 1), d8.fillRect(0, 0, 1, ez), d8.fillRect(4 * ez, 0, 1, ez), d8.fillRect(0, ez - 1, 4 * ez, 1), d8.fillText(sQ[aE], 2 * ez, .54 * ez)
	}
	this.cL = !1, this.b = function() {
		sR = -1, this.cL = !1, sS = a0 ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		ez = cf.ez, (dL = document.createElement("canvas")).width = ez, dL.height = ez, ct = cn + Math.floor((a0 ? .5 : .45) * ez) + co, sT()
	}, this.p0 = function() {
		this.cL = !this.cL, this.cL ? (gb.oy(!1), cJ && gb.sV && gb.p1(!0), this.sW()) : (sR = -1, sT(), fx && 1 === gg && !hr && aJ(1)), aL.cx = !0
	}, this.sW = function() {
		(fx || cJ) && 1 === gg && (gN.gf(!0), hr || setTimeout(function() {
			iI.nb()
		}, 0), aJ(0))
	}, this.cz = function(d0, d1) {
		var rl = sX(d0, d1);
		if (this.cL) {
			if (hu) return 0 <= rl && gb.oy(!1), !cJ;
			if (0 === rl) qD();
			else if (1 === rl) this.p0();
			else if (2 === rl) sY(rl) && (cc.cd.ji(), this.p0());
			else if (3 === rl) sY(rl) && (mZ.p0(), aL.cx = !0, kj.oh) && kj.kk();
			else if (4 === rl) sY(rl) && (kj.oh ? kj.kk() : kj.show(), mZ.oh) && mZ.p0();
			else {
				if (!(fx || 1 !== gg || cJ || mZ.oh || kj.oh) && (cK.p0(), 1)) return !1;
				oc.od(d0, d1) || mY.oe(d0, d1)
			}
			return !0
		}
		return 0 === rl && (this.p0(), !0)
	}, this.oD = function(d0, d1) {
		d0 = sX(d0, d1);
		d0 !== sR && (sR = d0, this.cL || sT(), aL.cx = !0)
	}, this.d7 = function() {
		var cu;
		this.cL ? (cu = Math.floor(5.5 * ez), d8.setTransform(1, 0, 0, 1, kd, cf.hE), d8.fillStyle = dB.iP, d8.fillRect(0, 0, cu, ez), 0 === sR ? (d8.fillStyle = dB.iT, d8.fillRect(0, 0, 4 * ez, ez)) : 1 === sR && (d8.fillStyle = dB.iT, d8
				.fillRect(4 * ez, 0, Math.floor(1.5 * ez), ez)), d8.fillStyle = dB.dC, d8.fillRect(0, 0, cu, 1), d8.fillRect(0, 0, 1, ez), d8.fillRect(4 * ez, 0, 1, ez), d8.fillRect(0, ez - 1, cu, 1), d8.fillRect(cu - 1, 0, 1, ez), d8.font =
			ct, d8.textBaseline = d9, d8.textAlign = dA, d8.fillText(sQ[0], 2 * ez, .54 * ez), cu = .4 * ez, cK.si(kd + 4 * ez + (1.5 * ez - cu) / 2, cf.hE + .3 * ez, cu), sa(2) && sj(1, sY(2) ? dB.dC : dB.iZ), sa(3) && sj(2, sY(3) ? dB.dC :
				dB.iZ), sa(4) && sj(3, dB.dC), d8.setTransform(1, 0, 0, 1, 0, 0)) : d8.drawImage(dL, kd, cf.hE)
	}, this.sf = function(player) {
		return 0 !== e6[player] && 2 !== gg && bW.s5(player)
	}, this.si = function(hD, hE, bU) {
		d8.setTransform(1, 0, 0, 1, hD, hE), d8.lineWidth = pR, d8.strokeStyle = dB.dC, d8.beginPath(), d8.moveTo(0, 0), d8.lineTo(bU, bU), d8.moveTo(0, bU), d8.lineTo(bU, 0), d8.stroke()
	}
}

function qb() {
	var sk, ez, pQ, sl, sm, sn, so, sp, sq;

	function d6() {
		return cf.tA(g7.t6()) ? gT.oh ? cf.hE - cf.ez - 2 * pQ : cf.hE - pQ : gb.tA(g7.t9()) ? gT.oh ? gb.d6() - cf.ez - 2 * pQ : gb.d6() - pQ : gT.oh ? a2 - cf.ez - (hR.tB() + 1) * pQ : a2 - hR.tB() * kd
	}

	function sy(a3, v, id, bc, t1, t2, la, t3, t4) {
		var aE, iL, t7, rn, tE, tF = void 0 !== t4,
			cu = Math.floor(cv.measureText(v, g7.ct) + 1.5 * sl + (tF ? ez : 1.5 * sl));
		if (aL.cx = !0, a1 < cu + pQ && !tF && 50 !== id && 20 < v.length) t7 = Math.floor(.5 * v.length), sy(a3, v.substring(0, t7), id, bc, t1, t2, la, t3, t4), sy(a3, v.substring(t7), id, bc, t1, t2, la, t3, t4);
		else if (t7 = cu + (50 === id ? sm : 0), (rn = document.createElement("canvas")).width = cu, rn.height = ez, (iL = rn.getContext("2d", {
				alpha: !0
			})).font = g7.ct, iL.textBaseline = d9, iL.textAlign = tG, iL.clearRect(0, 0, cu, ez), iL.fillStyle = t2, iL.fillRect(0, 0, cu, ez), iL.fillStyle = t1, iL.fillText(v, Math.floor(1.5 * sl), Math.floor(ez / 2)), tF && (tF = ez / aF.cu, iL
				.imageSmoothingEnabled = !0, iL.setTransform(tF, 0, 0, tF, cu - ez, 0), iL.drawImage(aF.rn[t4], 0, 0)), 0 === (tE = {
				aM: a3,
				v: v,
				id: id,
				player: bc,
				dL: rn,
				t1: t1,
				t2: t2,
				cu: cu,
				t7: t7,
				la: la,
				t3: t3,
				t4: t4
			}).aM || 0 < sk.length && 0 < sk[0].aM) sk.unshift(tE);
		else {
			for (aE = 1; aE < sk.length; aE++)
				if (0 < sk[aE].aM) return void sk.splice(aE, 0, tE);
			sk.push(tE)
		}
	}

	function sz(dO, pN, cV) {
		return "rgb(" + dO + "," + pN + "," + cV + ")"
	}

	function tL(id, tc) {
		for (var bU = sk.length, aE = 0; aE < bU; aE++) sk[aE].id === id && tc-- <= 0 && (sk.splice(aE, 1), aE--, bU--)
	}

	function tH(id, player) {
		for (var td = !1, aE = sk.length - 1; 0 <= aE; aE--) sk[aE].id !== id || player !== bZ && sk[aE].player !== player || (sk.splice(aE, 1), td = !0);
		return td
	}

	function th(aR) {
		return 1 === aR ? "" : "s"
	}

	function tk(v, ae, ag) {
		ae && (v += gR.hU(ae)), ag && (v += " (" + g9.tl(100 * ae / ag, 1) + ")"), sy(340, v, 6, 0, sz(215, 245, 255), dB.iR, -1, !1)
	}

	function ts(player, tt) {
		return (fx || e5 <= player || tt || hR.hS.tu ? hV : tv)[player]
	}
	this.b = function() {
		so = a0 ? 7 : 12, sn = {
			mj: [sp = 0, 0, 0],
			sr: [0, 0, 0],
			hn: [220, 180, 180],
			ss: [0, 0, 0],
			fV: [0, 0, 0],
			st: [" were erased.", " left the game.", " surrendered."],
			su: [" was erased by ", " left the game.", " surrendered."]
		}, sk = [], this.resize(), hr && this.nN(0, 18), tk("Map: " + az.ft.lk[az.ll].name), tk("Dimension: " + (az.b0 - 2) + "x" + (az.b1 - 2)), tk("Overall Pixels: ", q4.tm), q4.tm !== q4.tn && tk("Land: ", q4.tn, q4.tm), 0 < q4.to && tk(
			"Water: ", q4.to, q4.tm), 0 < q4.tp && tk("Mountains: ", q4.tp, q4.tm), 10 === fv && sy(120, "Full sending against human players is disabled.", 6, 0, sz(235, 255, 120), dB.iR, -1, !1), this.sw()
	}, this.sw = function() {
		var aE, bU;
		if (fr.fs)
			for (bU = fr.ft.sx.length, aE = 0; aE < bU; aE++) sy(400, fr.ft.sx[aE], 6, 0, sz(255, 255, 255), dB.iR, -1, !1)
	}, this.resize = function() {
		var t0, aE;
		if (ez = (ez = Math.floor((a0 ? .031 : .0249) * ck)) < 10 ? 10 : ez, this.cs = Math.floor(2 * ez / 3), this.ct = cn + this.cs + co, pQ = kd, sl = Math.floor(ez / 5), 0 < sk.length)
			for (t0 = sk, sk = [], aE = t0.length - 1; 0 <= aE; aE--) sy(t0[aE].aM, t0[aE].v, t0[aE].id, t0[aE].player, t0[aE].t1, t0[aE].t2, t0[aE].la, t0[aE].t3, t0[aE].t4);
		this.t5()
	}, this.t5 = function() {
		sq = document.createElement("canvas");
		var v = "Accept",
			iL = (sm = cv.measureText(v, this.ct) + 5 * sl, sq.height = ez, sq.width = sm, sq.getContext("2d", {
				alpha: !0
			}));
		iL.font = this.ct, iL.textBaseline = d9, iL.textAlign = dA, iL.clearRect(0, 0, sm, ez), iL.fillStyle = dB.ij, iL.fillRect(0, 0, sm, ez), iL.fillStyle = dB.dC, iL.fillText(v, Math.floor(sm / 2), Math.floor(ez / 2))
	}, this.t6 = function() {
		var bU;
		return gT.oh ? gT.cu : 0 === (bU = sk.length) ? 0 : 1 === bU ? sk[0].t7 : t8(sk[0].t7, sk[1].t7)
	}, this.t9 = function() {
		var bU = sk.length;
		return gT.oh ? bU ? t8(gT.cu, sk[0].t7) : gT.cu : 0 === bU ? 0 : 1 === bU ? sk[0].t7 : 2 === bU ? t8(sk[0].t7, sk[1].t7) : t8(t8(sk[0].t7, sk[1].t7), sk[2].t7)
	}, this.cz = function(hD, hE) {
		for (var tC, tD = d6(), aE = sk.length - 1; 0 <= aE; aE--)
			if ((tC = tD - (aE + 1) * ez) <= hE && hE < tC + ez) return 50 === sk[aE].id ? hD >= hL - sm - pQ - sk[aE].cu && (hL - sm - pQ <= hD ? cc.cN.js(sk[aE].player) : gY.hs(sk[aE].player, 800, !1, 0), !0) : hD >= hL - sk[aE].cu - pQ && (
				736 === sk[aE].id ? window.open("https://" + sk[aE].v, "_blank") : sk[aE].t3 && (gY.hs(sk[aE].player, 800, !1, 0), 0 <= sk[aE].la) && (tC = sk[aE].la, sk[aE].la = sk[aE].player, sk[aE].player = tC), !0);
		return !1
	}, this.nv = function(a3, v, id, bc, t1, t2, la, t3, t4) {
		sy(a3, v, id, bc, t1, t2, la, t3, t4)
	}, this.pj = function(id) {
		for (var aE = sk.length - 1; 0 <= aE; aE--) sk[aE].id === id && (sk[aE].aM = 1)
	}, this.nN = function(player, id) {
		0 === id ? (bR.bS[player < e5 ? 4 : 3]++, cv.ea(player, 0), sy(a0 ? 100 : 160, "You erased " + hV[player] + ".", 0, player, "rgb(10,220,10)", dB.iR, -1, !1)) : 1 === id ? (tH(50, bZ), cv.ea(player, 1), sy(360, "You were erased by " + hV[
				player] + ".", 0, player, "rgb(255,40,40)", dB.iR, -1, !0), gY.hs(player, 2700, !1, 0)) : 2 === id ? (cv.ea(player, 2), sy(0, "Congratulations! You won the game.", 0, player, "rgb(10,255,255)", dB.iR, -1, !0), gY.hs(player, 2700,
				!1, 0)) : 3 === id ? (cv.ea(player, 2), sy(0, hV[player] + " won the game.", 0, player, dB.dC, dB.iR, -1, !0), gY.hs(player, 2700, !1, 0)) : 4 === id ? (nY--, nX--, this.tI(1, player, player)) : 5 === id ? 2 !== e7[player] && bW
			.s5(bN) && (function(id, gu) {
					var aE, tV = 0,
						bU = sk.length;
					for (aE = 0; aE < bU; aE++)
						if (sk[aE].id === id && gu <= ++tV) return sk.splice(aE, 1)
				}(1, 5), g8.tK(player) ? sy(180, hV[player] + " broke the non-aggression pact.", 1, player, sz(255, 200, 180), dB.iR, -1, !0) : (tL(573, 0), sy(180, hV[player] + " is attacking you!", 573, player, "rgb(255,70,10)", dB.iR, -1, !
				0))) : 18 === id ? sy(255, "Choose your start position!", 18, 0, dB.dC, dB.iR, -1, !1) : 21 === id ? sy(220, "You surrendered!", id, 0, "rgb(255,40,40)", dB.iR, -1, !1) : 22 === id ? this.tI(2, player, player) : 59 === id && sy(0,
				"The game ended in a stalemate!", id, 0, dB.j7, dB.iR, 0, !1)
	}, this.tM = function(tN) {
		sy(200, "Error [" + tN + "]", 94, 0, dB.dC, dB.iu, -1, !1)
	}, this.nV = function(nQ) {
		if (bN === nQ) wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter);
		cv.ea(nQ, 2), sy(0, e5 < 100 ? hV[nQ] + " won the game." : hV[nQ] + " was immortalized!", 3, nQ, dB.dC, dB.iR, -1, !0), sy(0, "Your Current Win Count is Now " + wins_counter, 3, nQ, dB.dC, dB.iR, -1, !0), gY.hs(nQ, 2700, !1, 0)
	}, this.sG = function(dq) {
		var v, tO = "(" + kC.dW(dq >> 2) + ", " + kC.dY(dq >> 2) + ")",
			t3 = !1,
			player = 0;
		bW.bX(dq) ? bW.bh(dq) ? tO = "Unclaimed Land " + tO : (player = bW.bg(dq), v = "Player: " + hV[player], tO = (v += "   Balance: " + gR.hU(bO[player])) + ("   Territory: " + gR.hU(bv[player])) + ("   Coords: " + tO), t3 = !0) : tO = bW.s6(
			dq) ? "Mountains " + tO : "Water " + tO, aL.cx = !0, tL(55, 0), sy(220, tO, 55, player, dB.dC, dB.iR, -1, t3)
	}, this.sI = function(tP) {
		var ca = eO.gL,
			player = ca.tQ[tP],
			ca = "Ship Owner: " + hV[player] + "   Strength: " + gR.hU(ca.tR[tP]);
		aL.cx = !0, tL(55, 0), sy(220, ca, 55, player, dB.dC, dB.iR, -1, !0)
	}, this.jb = function(tS, tT, jc) {
		tS === bN ? sy(175, " Message to " + hV[tT] + ": ", 1001, tT, sz(200, 255, 210), dB.iR, -1, !0, jc) : this.tU(tS, jc)
	}, this.tU = function(tS, jc) {
		tL(1e3, 0), sy(175, hV[tS] + ": ", 1e3, tS, dB.dC, "rgba(5,60,25,0.9)", -1, !0, jc)
	}, this.nU = function(nR) {
		var tN;
		nR ? (tN = "Humanity triumphs! The undead have been beaten back.", cv.nk("The Resistance", 2, 1, 12), sy(0, tN, 40, 0, "rgb(10,220,10)", dB.iR, -1, !1)) : (tN = "Mankind's era ends, overrun by the relentless tide of the undead.", cv.nk(
			"The Virus", 2, 0, 16), sy(0, tN, 41, 0, "rgb(200,80,80)", dB.iR, -1, !1)), gY.i1(2700)
	}, this.mk = function(mj) {
		sy(300, mj[0].name + " [" + nS.mq(mj[0].mn) + "] vs " + mj[1].name + " [" + nS.mq(mj[1].mn) + "]", 65, 0, dB.hP, "rgba(100,255,255,0.75)", -1, !1)
	}, this.tW = function(tN) {
		sy(200, tN, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.tX = function() {
		sy(0, "Agreeing to peace concludes the game in a stalemate!", 247, 0, dB.j6, dB.iR, -1, !1)
	}, this.ms = function(mj, mp, mr, tY) {
		1 === gB.tZ() && (sy(0, mj[0].name + ": " + nS.mq(mj[0].mn) + " -> " + mp, 66, 0, dB.dC, tY[0], -1, !1), sy(0, mj[1].name + ": " + nS.mq(mj[1].mn) + " -> " + mr, 66, 1, dB.dC, tY[1], -1, !1))
	}, this.jt = function(player, id) {
		0 === id ? tH(50, player) ? (sy(128, "You signed a non-aggression pact with " + hV[player] + ".", 52, player, sz(180, 255, 180), dB.iR, -1, !0), g8.kX(player, 2, 255)) : sy(384, "You asked " + hV[player] +
			" to sign a non-aggression pact.", 51, player, sz(210, 210, 255), dB.iR, -1, !0) : tH(51, player) ? (sy(128, hV[player] + " accepted the non-aggression pact.", 52, player, dB.dC, "rgba(60,120,10,0.9)", -1, !0), g8.kX(player, 2,
			255)) : (sy(384, hV[player] + " requested a non-aggression pact.", 50, player, dB.dC, "rgba(90,90,90,0.9)", -1, !0), g8.kX(player, 2, 96))
	}, this.jx = function(mj, target) {
		var v = "You ",
			color = function(mj) {
				var aE;
				for (aE = mj.length - 1; 0 <= aE; aE--)
					if (2 * bv[mj[aE]] > bv[bN]) return;
				return 1
			}(mj) ? (v += "ordered ", sz(255, 235, 210)) : (v += "asked ", sz(210, 255, 210));
		1 < mj.length ? sy(230, v + mj.length + " players to attack " + hV[target] + ".", 66, target, color, dB.iR, -1, !0) : sy(230, v + hV[mj[0]] + " to attack " + hV[target] + ".", 66, mj[0], color, dB.iR, target, !0)
	}, this.tb = function(player, target) {
		sy(230, hV[player] + " suggested you attack " + hV[target] + ".", 66, player, dB.dC, "rgba(75,65,5,0.9)", target, !0)
	}, this.nM = function(id, player) {
		tH(id, player)
	}, this.jL = function() {
		var cm;
		100 <= bO[bN] || (-1 === (cm = function(id) {
			for (var aE = sk.length - 1; 0 <= aE; aE--)
				if (sk[aE].id === id) return aE;
			return -1
		}(143)) ? sy(80, "Your balance is too low!", 143, 0, dB.dC, dB.iR, -1, !1) : sk[cm].aM = 80)
	}, this.jo = function(tf, tg, player) {
		2 !== e7[bN] && (sy(200, "You exported " + gR.hU(tf) + " resource" + th(tf) + " to " + hV[player] + ".", 30, player, "rgb(190,255,190)", dB.iR, -1, !0), tg) && sy(30, "A tax of " + gR.hU(tg) + " unit" + th(tg) + " was deducted.", 30, 0,
			dB.dC, dB.iR, -1, !1)
	}, this.ti = function(tf, player) {
		var a3, tj;
		2 !== e7[bN] && (tj = 2 === e7[player] || e5 <= player, a3 = 200 - 20 * sk.length, tL(31, 0), sy(a3 < 80 ? 80 : a3, (tj ? "A bot" : hV[player]) + " supported you with " + gR.hU(tf) + " resource" + th(tf) + ".", 31, player, dB.hP, tj ?
			"rgba(205,205,205,0.9)" : "rgba(205,255,205,0.9)", -1, !0))
	}, this.nZ = function(tq) {
		for (var fV = aL.fU(), aE = 2; 0 <= aE; aE--) 0 < sn.ss[aE] && (tq || sn.fV[aE] < fV - 220) && this.tr(aE)
	}, this.tr = function(id) {
		var v, bU = sn.ss[id],
			player = sn.mj[id];
		sn.ss[id] = 0, 1 === bU ? (v = ts(player, 0 === id) + sn.su[id], 0 === id && (v += ts(sn.sr[id], !0) + "."), tL(7, 0), sy(sn.hn[id], v, 7, sn.sr[id], dB.dC, dB.iR, -1, !0)) : 2 <= bU && (v = ts(player, 0 === id) + " and " + (bU - 1) +
			" other player" + th(bU - 1) + sn.st[id], tL(7, 0), sy(sn.hn[id], v, 7, player, dB.dC, dB.iR, -1, !1))
	}, this.tI = function(id, lZ, la) {
		var fV = aL.fU(),
			bU = sn.ss[id] + 1;
		sn.ss[id]++, sn.mj[id] = lZ, sn.sr[id] = la, 1 === bU && (sn.fV[id] = fV), (1 === bU && (nY < 32 || 2 === gg) || 1 < bU && (sn.fV[id] < fV - 140 || 2 === gg)) && this.tr(id)
	}, this.fF = function() {
		for (var de = (de = sk.length - so) <= 1 ? 1 : de * de, aE = sk.length - 1; 0 <= aE; aE--) 0 < sk[aE].aM && (sk[aE].aM -= de, sk[aE].aM <= 0) && (aL.cx = !0, sk.splice(aE, 1));
		! function() {
			var tc, aE;
			if (128 !== sp && !(++sp < 128))
				for (tc = 5, aE = fY - 1; 0 <= aE; aE--) 1 === e7[fZ[aE]] && 0 < tc-- && sy(240, hV[fZ[aE]] + " joined the game.", 1, fZ[aE], dB.hP, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.nZ(!1)
	}, this.d7 = function() {
		for (var lx, hE = d6(), aE = sk.length - 1; 0 <= aE; aE--) lx = hE - (aE + 1) * ez, 50 === sk[aE].id ? (d8.drawImage(sk[aE].dL, hL - sk[aE].cu - sm - pQ, lx), d8.drawImage(sq, hL - sm - pQ, lx)) : d8.drawImage(sk[aE].dL, hL - sk[aE].cu -
			pQ, lx)
	}
}

function tx() {
	this.cu = 0, this.ez = 0, this.mf = 0, this.ty = 0, this.tz = 0, this.cs = 0, this.cm = -1, this.sQ = ["Accept Cookies", "More Information", "Decline"], this.colors = ["rgba(0,255,0,0.4)", "rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"], this.oh = !1,
		this.b = function() {
			this.resize(), this.oh = q < 5 && !m && 0 === r.aA()
		}, this.resize = function() {
			this.cu = Math.floor(2.8 * Math.floor((a0 ? .09 : .062) * ck)), this.ez = Math.floor(+this.cu), this.mf = Math.floor(.06 * this.cu), this.mg = this.cu - 2 * this.mf, this.ty = this.mf, this.tz = (this.ez - (this.sQ.length + 1) * this
				.ty) / this.sQ.length, this.cs = Math.floor(.3 * this.tz)
		}, this.cz = function(d0, d1) {
			return !!this.oh && -1 !== (d0 = this.u0(d0, d1)) && (0 === d0 ? (r.u1(2), this.oh = !1) : 1 === d0 ? os.b(qV.u2, !0) : 2 === d0 && (r.u1(1), this.oh = !1), aL.cx = !0)
		}, this.oD = function(d0, d1) {
			var a3;
			return !!this.oh && (a3 = this.cm, this.cm = this.u0(d0, d1), a3 !== this.cm && (aL.cx = !0), -1 !== this.cm)
		}, this.u0 = function(d0, d1) {
			return d0 -= d2, d1 -= Math.floor(d3 - this.ez - d2), d0 < 0 || d1 < 0 || d0 >= this.cu || d1 >= this.ez ? -1 : (d0 = Math.floor((d1 - .5 * this.ty) / ((this.ez - this.ty) / this.sQ.length))) < 0 ? 0 : d0 >= this.sQ.length ? this.sQ
				.length - 1 : d0
		}, this.d7 = function() {
			this.oh && this.u3()
		}, this.u3 = function() {
			var hD = d2,
				hE = Math.floor(d3 - this.ez - d2);
			d8.setTransform(1, 0, 0, 1, hD, hE), d8.fillStyle = dB.iR, d8.fillRect(0, 0, this.cu, this.ez), d8.textBaseline = d9, d8.textAlign = dA, d8.strokeStyle = dB.dC, d8.font = cn + this.cs + co, d8.strokeRect(0, 0, this.cu, this.ez);
			for (var aE = this.sQ.length - 1; 0 <= aE; aE--) d8.setTransform(1, 0, 0, 1, hD + this.mf, hE + this.ty + aE * (this.ty + this.tz)), d8.fillStyle = this.colors[aE], d8.fillRect(0, 0, this.mg, this.tz), this.cm === aE && (d8.fillStyle = dB
				.iW, d8.fillRect(0, 0, this.mg, this.tz)), d8.fillStyle = dB.dC, d8.fillText(this.sQ[aE], this.mg / 2, .54 * this.tz), d8.strokeRect(0, 0, this.mg, this.tz);
			d8.setTransform(1, 0, 0, 1, 0, 0)
		}
}

function qc() {
	var u4, u5, u6, cu, ez, font;

	function uA(uB) {
		return uB < 10 ? "0" + uB : String(uB)
	}
	this.b = function() {
		void 0 === cu && this.resize(), this.setTime()
	}, this.resize = function() {
		cu = Math.floor((a0 ? .53 : .36) * ck), ez = Math.floor(.065 * cu), font = cn + Math.floor(.9 * ez) + co, u6--, this.setTime()
	}, this.fF = function() {
		this.setTime() && (aL.cx = !0)
	}, this.setTime = function() {
		var a3 = new Date,
			u8 = a3.getUTCMinutes(),
			a3 = a3.getUTCSeconds();
		return u5 = 3600 - 60 * u8 - a3, u5 %= 900, u4 = "Next Contest: " + uA(Math.floor(u5 / 60)) + ":" + uA(u5 % 60), u6 !== (u6 = 60 * u8 + a3) && (cu = cv.measureText(u4, font), cu += Math.floor(.4 * ez), !0)
	}, this.d7 = function() {
		d8.lineWidth = 1 + Math.floor(ez / 15), 7 === aT.ov() && qP.uC() + 2 * d2 > .5 * (d3 - cu) ? d8.translate(hL - ez, Math.floor(qP.uC() + 2 * d2 + cu)) : d8.translate(hL - ez, Math.floor(.5 * (d3 + cu))), d8.rotate(-Math.PI / 2), d8
			.fillStyle = dB.dC, d8.fillRect(0, 0, cu, ez), d8.strokeStyle = dB.hP, d8.strokeRect(0, 0, cu, ez + 10), d8.fillStyle = dB.hP, d8.font = font, d8.textBaseline = d9, d8.textAlign = dA, d8.fillText(u4, Math.floor(cu / 2), Math.floor(
				.59 * ez)), d8.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function uD() {
	this.uE = 10, this.uF = 50, this.uG = 50, this.uH = 8, this.uI = this.uF + this.uG, this.aG = this.uF + this.uG + this.uH, this.cu = 72, this.uJ = 0, this.uK = 0, this.rn = new Array(this.aG), this.uL = 8, this.uM = new Array(this.uF + this.uG),
		this.uN = new Array(this.uF + this.uG), this.hK = 0, this.hM = 0, this.zoom = 1, this.uO = .2, this.s4 = 0, this.aH = null, this.uP = null, this.oh = !1, this.b = function() {
			var aE, uQ, uR;
			for (this.aH = new Array(this.aG), this.uP = new Array(this.aG), uQ = cq.ro("emojis"), this.uS(), aE = this.s4 = 0; aE < this.uF; aE++) this.uT(aE, aE, uQ);
			for (uR = cq.ro("flags"), aE = 0; aE < this.uG; aE++) this.uT(aE, this.uF + aE, uR);
			this.uU(), this.rn[26] = this.uV(25, 2), this.uW()
		}, this.uT = function(aE, ej, fV) {
			this.aH[ej] = !1, this.uP[ej] = 0;
			var dL = document.createElement("canvas"),
				iL = (dL.width = this.cu, dL.height = this.cu, dL.getContext("2d", {
					alpha: !0
				}));
			iL.clearRect(0, 0, this.cu, this.cu), 23 === ej ? iL.drawImage(mY.rj()[4].dL[1], 0, 0) : 36 === ej ? iL.drawImage(mY.rj()[0].dL[2], 0, 0) : 49 === ej ? iL.drawImage(mY.rj()[2].dL[1], 0, 0) : iL.drawImage(fV, this.cu * aE % (aE === ej ?
				this.uE * this.cu : 4e3), aE === ej ? bJ(aE, this.uE) * this.cu : 0, this.cu, this.cu, 0, 0, this.cu, this.cu), this.rn[ej] = dL
		}, this.uU = function() {
			this.rn[this.aG - 5] = this.rn[26], this.rn[this.aG - 4] = this.uV(this.aG - 5, 2), this.rn[this.aG - 1] = this.uV(this.aG - 5, 1), this.rn[this.aG - 8] = this.uV(this.aG - 4, 1), this.rn[this.aG - 3] = this.rn[39], this.rn[this.aG - 2] =
				this.uV(this.aG - 3, 1), this.rn[this.aG - 7] = this.uV(this.aG - 2, 1), this.rn[this.aG - 6] = this.uV(this.aG - 7, 1)
		}, this.uV = function(aE, uX) {
			var dL = document.createElement("canvas"),
				iL = (dL.width = this.cu, dL.height = this.cu, dL.getContext("2d", {
					alpha: !0
				}));
			return iL.clearRect(0, 0, this.cu, this.cu), iL.rotate(uX * Math.PI / 2), iL.drawImage(this.rn[aE], 1 === uX ? 0 : -this.cu, -this.cu), dL
		}, this.uW = function() {
			var aE, aR, dG = a4().split("");
			if (2 * dG.length !== this.aG) this.s4 = 0;
			else {
				for (aE = 0; aE < this.aG; aE += 2) aR = parseInt(dG[Math.floor(aE / 2)]), this.aH[aE] = aR % 2 == 1, this.aH[aE + 1] = 1 < aR;
				this.uY()
			}
		}, this.uY = function() {
			for (var aE = this.s4 = 0; aE < this.aG; aE++) this.aH[aE] && (this.uP[this.s4++] = aE)
		}, this.sL = function() {
			8 === this.s4 && this.uP[0] === this.uI && this.uY()
		}, this.uZ = function() {
			var aE;
			for (this.s4 = this.uH, aE = 0; aE < this.uH; aE++) this.uP[aE] = this.uI + aE
		}, this.uS = function() {
			this.uJ = Math.floor((a0 ? .075 : .0468) * ck), this.zoom = this.uJ / this.cu, this.uK = (1 + this.uO) * this.uJ
		}, this.show = function(d0, d1) {
			var aE, ub, ua, mf, hI, hJ;
			if (this.s4 < 1) this.oh = !1;
			else {
				for (ua = (ua = Math.floor(hL / this.uK)) < 3 ? 3 : ua > this.uL ? this.uL : ua, ub = this.s4 > ua ? ua : this.s4, ua = 1 + bJ(this.s4 - 1, ub), mf = Math.floor(ub * this.uK), hI = Math.floor(d0 - mf / 2), hI = (hI = hL < hI + mf ?
						hL - mf : hI) < 0 ? 0 : hI, hJ = Math.floor(d1 - this.uK / 2), d0 = Math.floor(ua * this.uK), hJ = (hJ = d3 < hJ + d0 ? d3 - d0 : hJ) < 0 ? 0 : hJ, this.hK = hI + mf, this.hM = hJ + d0, aE = 0; aE < this.s4; aE++) this.uM[
					aE] = Math.floor(hI + aE % ub * this.uK), this.uN[aE] = Math.floor(hJ + bJ(aE, ub) * this.uK);
				this.oh = !0
			}
		}, this.cz = function(d0, d1, player) {
			return !!this.oh && (this.oh = !1, this.sK(d0, d1) && this.ud(d0, d1, player) && this.oh || (this.sL(), mY.kk()), !0)
		}, this.sK = function(d0, d1) {
			return !(d0 < this.uM[0] || d1 < this.uN[0] || d0 >= this.hK || d1 >= this.hM)
		}, this.ud = function(d0, d1, player) {
			for (var aE = this.s4 - 1; 0 <= aE; aE--)
				if (d0 >= this.uM[aE] && d1 >= this.uN[aE] && d0 <= this.uM[aE] + this.uK && d1 <= this.uN[aE] + this.uK) return 39 === this.uP[aE] ? (this.uZ(), this.show(d0, d1)) : (player === bN ? cc.cd.jb(this.uP[aE]) : cc.cN.jq(this.uP[aE],
					player), this.uY()), !0;
			return !1
		}, this.ue = function(aE) {
			return aE < 16 || 40 <= aE && aE < 47
		}, this.uf = function(aE) {
			return aE >= this.uF && aE < this.uF + this.uG
		}, this.d7 = function() {
			d8.imageSmoothingEnabled = !0;
			for (var mA = this.uO * this.uJ / 2, aE = this.s4 - 1; 0 <= aE; aE--) d8.setTransform(this.zoom, 0, 0, this.zoom, this.uM[aE] + mA, this.uN[aE] + mA), d8.drawImage(this.rn[this.uP[aE]], 0, 0);
			d8.imageSmoothingEnabled = !1, d8.setTransform(1, 0, 0, 1, 0, 0)
		}, this.ug = function(hD, hE, jc) {
			d8.imageSmoothingEnabled = !0, d8.setTransform(this.zoom, 0, 0, this.zoom, hD, hE), d8.drawImage(this.rn[jc], 0, 0), d8.imageSmoothingEnabled = !1, d8.setTransform(1, 0, 0, 1, 0, 0)
		}
}
var kd, um, d2, pR, oX, oY, d4, eC, eB, eD, vh, gr, xp, hV, tv, e6, f3, f6, f2, f5, bv, mE, bO, bV, bn, bo, br, e7, fZ, fY, oC, d8, a7o, a7p, a7q, a1, a2, ur, ck, hL, d3, kn, a7r, m, p, n, q, a0, o5, o4, i8, iI, aF, bR, mZ, a1G, aL, fW, gU, d5, a1R,
	os, zr, a7s, a7t, d9 = "middle",
	uh = "bottom",
	dA = "center",
	tG = "left",
	ui = "right",
	cn = "bold ",
	uj = "italic ",
	uk = "normal ",
	co = "px " + settings.fontName,
	ul = [cn, uj + cn, cn],
	un = ["wss://", "/s50/", "/s51/", "/s52/"];

function uo() {
	up(), (d4 = new uq).b()
}

function up() {
	pR = .0022 * (1 + .5 * a0) * ck, d2 = (d2 = Math.floor((a0 ? .02 : .01152) * ck)) < 2 ? 2 : d2, kd = (kd = Math.floor((a0 ? .0114 : .01296) * ck)) < 2 ? 2 : kd, um = (um = Math.floor(.005 * ur)) < 1 ? 1 : um
}

function us(iL, cu, ez) {
	iL.fillStyle = dB.dC, iL.fillRect(0, 0, cu, 1), iL.fillRect(0, ez - 1, cu, 1), iL.fillRect(0, 0, 1, ez), iL.fillRect(cu - 1, 0, 1, ez)
}

function qd() {
	var sk, ut, ct, ez, uu;

	function v0(aE) {
		var cu = sk[aE].dL.width,
			mf = (sk[aE].iL.clearRect(0, 0, cu, ez), sk[aE].iL.fillStyle = 0 !== sk[aE].id ? "rgba(33,33,120,0.83)" : sk[aE].ed === bZ ? "rgba(88,88,88,0.83)" : sk[aE].ed < e5 ? "rgba(100,70,33,0.83)" : "rgba(33,100,80,0.83)", sk[aE].iL.fillRect(0,
				0, cu, ez), us(sk[aE].iL, cu, ez), ut + 2 * ez < cu && (sk[aE].iL.fillRect(cu - ut - ez, 0, 1, ez), sk[aE].iL.fillText(hV[sk[aE].ed], Math.floor((cu - ut) / 2), Math.floor(.57 * ez))), 0 !== sk[aE].id ? 0 : ez);
		sk[aE].iL.fillText(gR.hU(sk[aE].ee), Math.floor(cu - ut / 2 - mf), Math.floor(.57 * ez)),
			function(aE, cu, mf) {
				sk[aE].iL.fillStyle = dB.iU;
				var v5 = Math.floor(ut * sk[aE].ee / sk[aE].v6);
				sk[aE].iL.fillRect(Math.floor(cu - ut - mf), ez - uu, v5, uu)
			}(aE, cu, mf), 0 === sk[aE].id ? (v3(aE, cu), function(aE, cu) {
				sk[aE].iL.strokeStyle = dB.id, sk[aE].iL.fillRect(ez, 0, 1, ez);
				cu -= ez;
				sk[aE].iL.beginPath(), sk[aE].iL.moveTo(Math.floor(.3 * ez + cu), Math.floor(ez / 2)), sk[aE].iL.lineTo(Math.floor(ez - .3 * ez + 0 + cu), Math.floor(ez / 2)), sk[aE].iL.stroke(), sk[aE].iL.beginPath(), sk[aE].iL.moveTo(Math
					.floor(ez / 2 + cu), Math.floor(.3 * ez)), sk[aE].iL.lineTo(Math.floor(ez / 2 + cu), Math.floor(ez - .3 * ez + 0)), sk[aE].iL.stroke()
			}(aE, cu)) : v3(aE, 2 * ez)
	}

	function v3(aE, cu) {
		sk[aE].iL.strokeStyle = sk[aE].v7 ? dB.iZ : dB.ip, sk[aE].iL.fillStyle = dB.dC, sk[aE].iL.fillRect(cu - ez, 0, 1, ez);
		var v8 = Math.floor(ez / 12),
			v8 = (sk[aE].iL.lineWidth = v8 < 3 ? 3 : v8, sk[aE].iL.lineCap = "round", .35);
		cu = ez + 1, sk[aE].iL.beginPath(), sk[aE].iL.moveTo(Math.floor(cu - v8 * ez + 0), Math.floor(v8 * ez)), sk[aE].iL.lineTo(Math.floor(cu - ez + v8 * ez), Math.floor(ez - v8 * ez + 0)), sk[aE].iL.stroke(), sk[aE].iL.beginPath(), sk[aE].iL
			.moveTo(Math.floor(cu - ez + v8 * ez), Math.floor(v8 * ez)), sk[aE].iL.lineTo(Math.floor(cu - v8 * ez + 0), Math.floor(ez - v8 * ez + 0)), sk[aE].iL.stroke()
	}

	function vN(bU) {
		for (var ee, aE = bU - 1; 0 <= aE; aE--) ee = b5.bD(bN, aE), sk[aE].ee !== ee && (sk[aE].ee = ee, sk[aE].v6 = ee > sk[aE].v6 ? ee : sk[aE].v6, sk[aE].v1 = !0)
	}

	function uz(vP) {
		vP.dL = document.createElement("canvas"), az.lJ.font = ct;
		var cu = ut;
		vP.ed < bZ && 0 === vP.id && (cu += Math.floor(az.lJ.measureText(hV[vP.ed] + "000").width)), cu += ez, 0 === vP.id && (cu += ez), vP.dL.width = cu, vP.dL.height = ez, vP.iL = vP.dL.getContext("2d", {
			alpha: !0
		}), vP.iL.font = ct, vP.iL.textBaseline = d9, vP.iL.textAlign = dA
	}

	function vJ(aE) {
		return gQ.vR() ? hL - sk[aE].dL.width - kd : gQ.hD
	}

	function vK(aE) {
		return Math.floor(2 * kd + (gQ.vR() ? g9.ez + kd : 0) + gQ.ez + aE * (1.3 * ez))
	}
	this.b = function() {
		sk = [], this.resize()
	}, this.resize = function() {
		ct = g7.ct, ez = g7.cs + 5, ez = Math.floor(1.25 * ez), a0 && (ez = Math.floor(1.25 * ez)), uu = Math.floor(.15 * ez), az.lJ.font = ct, ut = Math.floor(az.lJ.measureText("02 000 000 0000").width);
		for (var aE = sk.length - 1; 0 <= aE; aE--) uz(sk[aE]), v0(aE)
	}, this.gf = function() {
		for (var aE = sk.length - 1; 0 <= aE; aE--) sk[aE].v1 && (sk[aE].v1 = !1, v0(aE))
	}, this.hU = function(tc) {
		if (tc < 1e3) return tc < 0 ? "-" + this.hU(Math.abs(tc)) : tc.toString();
		for (var vA = Math.floor(Math.log(tc + .5) / Math.log(10)) + 1, vB = Math.floor((vA - 1) / 3), vC = tc.toString(), vD = vC.substring(vA - 3, vA), aE = 1; aE < vB; aE++) vD = vC.substring(vA - 3 * (aE + 1), vA - 3 * aE) + " " + vD;
		return vC.substring(0, vA - 3 * vB) + " " + vD
	}, this.cz = function(d0, hE) {
		if (2 !== gg && 0 !== e6[bN] && !cJ && bW.s5(bN))
			for (var vE, vF, vG, vH = a0 ? ez : 0, vI = a0 ? Math.floor(.15 * ez) : 0, aE = sk.length - 1; 0 <= aE; aE--)
				if (vE = vJ(aE), vF = vK(aE), vG = sk[aE].dL.width, vF - vI <= hE && hE <= vF + ez + vI) {
					if (vE - vH <= d0 && d0 <= vE + ez + vH) return sk[aE].v7 || (sk[aE].v1 = !0, sk[aE].v7 = !0, 0 === sk[aE].id && cc.cd.jZ(sk[aE].ed)), !0;
					if (0 === sk[aE].id && vE + vG - ez - vH <= d0 && d0 <= vE + vG + vH) return cc.cd.ce(cf.cg(), sk[aE].ed), !0
				} return !1
	}, this.fF = function() {
		var bU;
		2 !== gg && 0 !== e6[bN] && !cJ && bW.s5(bN) && (function(bU) {
			if (sk.length !== bU) return 1;
			for (var aE = bU - 1; 0 <= aE; aE--)
				if (sk[aE].id !== b5.b7(bN, aE) || sk[aE].ed !== b5.bC(bN, aE)) return 1;
			return
		}(bU = b5.b6(bN)) && function(bU) {
			var aE, id, ed, cV, ee, t0 = [];
			loop: for (aE = 0; aE < bU; aE++) {
				for (id = b5.b7(bN, aE), ed = b5.bC(bN, aE), cV = 0; cV < sk.length; cV++)
					if (sk[cV].id === id && sk[cV].ed === ed) {
						t0.push(sk.splice(cV, 1)[0]);
						continue loop
					} ee = b5.bD(bN, aE), uz(ee = {
					ed: ed,
					ee: ee,
					v6: ee,
					id: id,
					v1: !0,
					v7: !1,
					dL: null,
					iL: null
				}), t0.push(ee)
			}
			sk = t0
		}(bU), vN(bU))
	}, this.vQ = function(bc) {
		for (var bU = Math.min(sk.length, b5.b6(bN)), aE = 0; aE < bU; aE++)
			if (sk[aE].ed === bc) return void(sk = [])
	}, this.d7 = function() {
		if (0 !== e6[bN] && bW.s5(bN) && !cJ)
			for (var aE = sk.length - 1; 0 <= aE; aE--) d8.drawImage(sk[aE].dL, vJ(aE), vK(aE))
	}
}

function qe() {
	var sk, fg, vS, vT, ez, ct, cs, vU, u4, vV, vW, vX, dL, iL, hi, vY;

	function vf() {
		d8.drawImage(dL, kd + (cS ? kd + gU.vg() : 0), vh + 2 * kd)
	}

	function vZ() {
		dL.width = sk[0].width + vW, dL.height = ez + vW, (iL = dL.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, sk[0].width + vW, ez + vW), iL.translate(Math.floor(vW / 2), Math.floor(vW / 2)), iL.lineWidth = vW, iL.fillStyle = 1 === sk[0].ve ? dB.iX : dB.iR, vi(), iL.fill(), iL.strokeStyle = 1 === sk[0].ve ? dB.hP : dB.dC,
		vi(), iL.stroke(), iL.textAlign = dA, iL.textBaseline = d9, iL.fillStyle = 1 === sk[0].ve ? dB.hP : dB.dC, iL.font = ct[0], iL.fillText(u4[sk[0].vd], Math.floor(sk[0].width / 2), Math.floor(.72 * vU[0] * ez)), iL.font = ct[1], iL.fillText(sk[
				0].v, Math.floor(sk[0].width / 2), Math.floor((vU[0] + .48 * vU[1]) * ez))
	}

	function vi() {
		iL.beginPath(), iL.moveTo(vX, 0), iL.lineTo(sk[0].width - vX, 0), iL.lineTo(sk[0].width, vX), iL.lineTo(sk[0].width, ez - vX), iL.lineTo(sk[0].width - vX, ez), iL.lineTo(vX, ez), iL.lineTo(0, ez - vX), iL.lineTo(0, vX), iL.closePath()
	}
	this.b = function() {
		fg = 4, vS = vT = hi = 0, sk = [], ct = new Array(2), cs = new Array(2), vU = new Array(2), u4 = ["YOU ERASED", "YOU WERE ERASED BY", "THE GAME WAS WON BY", "MAP:"], vU[0] = .3, vU[1] = .7, vV = new Array(4), dL = document.createElement(
			"canvas"), vY = aL.aM + 2e3, this.resize()
	}, this.resize = function() {
		var aE, cu;
		for (ez = Math.floor((a0 ? .0725 : .058) * ck), cs[0] = Math.floor(.85 * vU[0] * ez), cs[1] = Math.floor(.85 * vU[1] * ez), ct[0] = cn + cs[0] + co, ct[1] = cn + cs[1] + co, aE = vV.length - 1; 0 <= aE; aE--) vV[aE] = this.measureText(u4[
			aE] + "000", ct[0]);
		if (vW = Math.floor(1 + .05 * ez), vX = Math.floor(.2 * ez), 0 < sk.length) {
			for (aE = sk.length - 1; 0 <= aE; aE--) cu = this.measureText(sk[aE].v + "00", ct[1]), sk[aE].width = cu < vV[aE] ? vV[aE] : cu;
			vZ()
		}
	}, this.fF = function() {
		0 !== fg && (4 === fg ? aL.aM > vY && (fg = 0, 1 === gg) && cv.nk(az.ft.lk[az.ll].name, 3, 1, 9) : (1 === fg ? (0 === vS && (vZ(), vS = 1e-4), 1 <= (vS += .002 * (aL.aM - hi)) && (vT = 0, fg = 2, vS = 1), aL.cx = !0) : 2 === fg ? ((vT +=
			(aL.aM - hi) / 1e3) > sk[0].hn || 1 < vT && 1 < sk.length) && (fg = 3) : 3 === fg && ((vS -= .002 * (aL.aM - hi)) <= 0 && (vS = 0, sk.shift(), fg = 0 < sk.length ? 1 : 0), aL.cx = !0), hi = aL.aM))
	}, this.measureText = function(v, ct) {
		return d8.font = ct, Math.floor(d8.measureText(v).width)
	}, this.ea = function(vc, aE) {
		this.nk(hV[vc], aE, 1, 0 === aE ? 3 : 7)
	}, this.nk = function(v, vd, ve, hn) {
		var cu = (cu = this.measureText(v + "00", ct[1])) < vV[vd] ? vV[vd] : cu;
		sk.push({
			v: v,
			width: cu,
			vd: vd,
			ve: ve,
			hn: hn
		}), 0 === fg && (vS = 0, fg = 1, hi = aL.aM)
	}, this.d7 = function() {
		0 !== fg && 0 !== vS && (vS < 1 ? (d8.globalAlpha = vS, vf(), d8.globalAlpha = 1) : vf())
	}
}

function rG() {
	var ez, dL, iL, vj, vk, vl, vm, vn, v1, vo, vp, vq, vr, vs;

	function cp() {
		var cu = gT.cu,
			ca = (v1 = !1, ma(iL, cu, ez), Math.floor(cu / 2));
		1 === vk ? (iL.fillStyle = dB.ig, iL.fillRect(ca, 0, ca, ez)) : -1 === vk && (iL.fillStyle = dB.is, iL.fillRect(0, 0, ca, ez)), mb(iL, cu, ez, 2);
		var ca = (ca = Math.floor(.25 * ez)) < 2 ? 2 : ca,
			tm = (iL.fillStyle = dB.iY, Math.floor((ez - 4) * vl[1] / vm[1]));
		0 < tm && iL.fillRect(2, ez - 2 - tm, ca, tm), 0 < (tm = Math.floor((ez - 4) * vl[0] / vm[0])) && iL.fillRect(cu - 2 - ca, ez - 2 - tm, ca, tm);
		ca = (ca = Math.floor(ez / 8)) < 2 ? 2 : ca;
		md(iL, Math.floor(.4 * ez), 0, ez, ca, .5, !1), md(iL, Math.floor(cu - 1.4 * ez), 0, ez, ca, .5, !0), iL.drawImage(vj, Math.floor((cu - vj.width) / 2), 3)
	}

	function vu() {
		v1 = !0, vo = 140, vk = 0, vn = [], gT.oh = !1, g7.nM(247, 0), vl[0] = vl[1] = 0
	}

	function d6() {
		return cf.tA(g7.t6()) ? cf.hE - ez - kd : gb.tA(g7.t9()) ? gb.d6() - ez - kd : a2 - ez - hR.tB() * kd
	}
	this.oh = !1, this.cu = 0, this.b = function() {
		vq = vr = 0, this.oh = !1, v1 = vs = !1, vo = 140, vl = [vk = 0, 0], vm = [1, 1], vn = [], vp = new Uint32Array(10), this.resize()
	}, this.resize = function() {
		ez = cf.ez, this.cu = 4 * ez, this.vt(), (dL = document.createElement("canvas")).width = this.cu, dL.height = ez, iL = dL.getContext("2d", {
			alpha: !0
		}), cp()
	}, this.gf = function() {
		v1 && cp()
	}, this.vt = function() {
		var dM, vW, ca, ty = (ty = ez - 6) < 6 ? 6 : ty;
		void 0 !== vj && vj.width === ty || ((vj = document.createElement("canvas")).width = ty, vj.height = ty, (dM = vj.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, ty, ty), vW = Math.floor(ty / 8), dM.lineWidth = vW = vW < 1 ? 1 : vW, dM.strokeStyle = dB.dC, ca = Math.floor(ty / 2), ty = Math.floor((ty - vW) / 2), dM.beginPath(), dM.arc(ca, ca, ty, 0, 2 * Math.PI), dM
			.moveTo(ca, ca - ty), dM.lineTo(ca, ca + ty), dM.moveTo(ca + Math.cos(.78 * Math.PI) * ty, ca + Math.cos(.28 * Math.PI) * ty), dM.lineTo(ca, ca), dM.lineTo(ca + Math.cos(.22 * Math.PI) * ty, ca + Math.cos(1.72 * Math.PI) * ty), dM
			.stroke())
	}, this.cz = function(hD, hE) {
		var hJ;
		return !(hD < a1 - this.cu - kd || hE < (hJ = d6()) || hJ + ez < hE || (cJ || cc.cd.jf(hD > a1 - kd - this.cu / 2 ? 1 : 0), 0))
	}, this.fF = function() {
		if (0 < vr) 0 === --vr && vu();
		else if (this.oh) 270 == --vo && 2 <= vq && function() {
			var aE;
			for (aE = fY - 1; 0 <= aE; aE--)
				if (bW.s5(fZ[aE])) return;
			return 1
		}() && (v1 = !0, vl[0] += vm[0]), 180 === vo && 3 * vl[0] < vm[0] ? vu() : vl[0] >= vm[0] ? vs ? gC.nH.nK() : gC.nH.nP(-1) : vl[1] >= vm[1] ? vr = 4 : vo <= 0 && vu();
		else if (function() {
				var aE;
				for (aE = 9; 0 <= aE; aE--) 12 < Math.abs(vp[aE] - bv[gr[aE]]) && (vo = 140), vp[aE] = bv[gr[aE]];
				if (--vo <= 0) return 1;
				return
			}()) {
			(vs = vx()) && g7.tX(), this.oh = !0, vo = 360;
			var aE, a3 = 0;
			for (aE = fY - 1; 0 <= aE; aE--) bW.s5(fZ[aE]) && (a3 += bv[fZ[aE]]);
			vm[0] = t8(bJ(3 * a3, 5), 1), cS && 9 !== fv && (vm[0] = vz(t8(bJ(a3 * (100 - bJ(100 * gU.ni(), po)), 100), 1), vm[0])), vm[1] = t8(a3 - vm[0], 1), vq++
		}
	}, this.nW = function() {
		this.oh && vl[0] < vm[0] && vu()
	}, this.kY = function(player, w1) {
		var aE, a3;
		if (this.oh) {
			for (aE = vn.length - 1; 0 <= aE; aE--)
				if (vn[aE] === player) return;
			vn.push(player), v1 = !0, a3 = fx ? vm[0] : bv[player], w1 ? vl[0] += a3 : vl[1] += a3, player === bN && (vk = w1 ? 1 : -1)
		}
	}, this.d7 = function() {
		var hE;
		this.oh && (hE = d6(), d8.drawImage(dL, a1 - this.cu - kd, hE))
	}
}

function qf() {
	var cu, hD, w2, dL, iL, oh, eA, w3, ct, v1, w4 = 11 / 12;

	function w6() {
		var v5 = Math.floor(eA * (cu - 2 * w2)),
			w9 = 1 + Math.floor(.0625 * cf.ez),
			wA = 1 + Math.floor(.3 * cf.ez),
			ty = Math.floor(.55 * cf.ez);
		iL.clearRect(0, 0, cu, cf.ez), iL.fillStyle = dB.iQ, iL.fillRect(0, 0, w2, cf.ez), iL.fillRect(w2 + v5, 0, cu - w2 - v5, cf.ez), iL.fillStyle = eA < 1 / 3 ? "rgba(" + Math.floor(3 * eA * 130) + ",130,0,0.85)" : eA < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (eA - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (eA - 2 / 3) * 130) + ",0.85)", iL.fillRect(w2, 0, v5, cf.ez), iL.fillStyle = dB.dC, iL.fillRect(0, 0, cu, 1), iL.fillRect(0, cf.ez - 1, cu, 1),
			iL.fillRect(0, 0, 1, cf.ez), iL.fillRect(w2, 0, 1, cf.ez), iL.fillRect(w2 + v5, 0, 1, cf.ez), iL.fillRect(cu - w2, 0, 1, cf.ez), iL.fillRect(cu - 1, 0, 1, cf.ez), iL.fillRect(Math.floor(.25 * cf.ez) + wA, Math.floor((cf.ez - w9) / 2), cf
				.ez - 2 * wA, w9), iL.fillRect(Math.floor(cu - 1.25 * cf.ez) + wA, Math.floor((cf.ez - w9) / 2), cf.ez - 2 * wA - wA % 2, w9), iL.fillRect(Math.floor(cu - 1.25 * cf.ez) + Math.floor((cf.ez - w9) / 2), wA, w9, cf.ez - 2 * wA - wA % 2),
			w3 = cM.cN.e9(bN, cf.cg()), iL.fillText(gR.hU(w3) + " (" + g9.tl(100 * eA, 0) + ")", Math.floor(.5 * cu), ty)
	}

	function wE(ci) {
		return !(1 < ci && 1 === eA || (1 < ci && ci * eA - eA < 1 / 1024 ? ci = (eA + 1 / 1024) / eA : ci < 1 && eA - ci * eA < 1 / 1024 && (ci = (eA - 1 / 1024) / eA), eA = cA.pL(eA * ci, 1 / 1024, 1), w6(), 0))
	}

	function wF(d0) {
		return eA !== (eA = cA.pL((d0 - hD - w2) / (cu - 2 * w2), 1 / 1024, 1)) && (w6(), !0)
	}
	this.hE = 0, this.oi = !1, this.b = function() {
		oh = !hr && !cJ, v1 = !1, eA = .5, w3 = 0, this.oi = !1, this.resize()
	}, this.resize = function() {
		a0 && a1 < .8 * a2 ? (this.ez = Math.floor(.0536 * ck), cu = a1 - 4 * kd - this.ez) : (cu = Math.floor((a0 ? .65 : .389) * ck), cu += 12 - cu % 12, this.ez = Math.floor(cu / 12)), w2 = Math.floor(3 * this.ez / 2), ct = cn + Math.floor(
			.5 * this.ez) + co, (dL = document.createElement("canvas")).width = cu, dL.height = this.ez, (iL = dL.getContext("2d", {
			alpha: !0
		})).font = ct, iL.textBaseline = d9, cM.iL.textAlign(iL, 1), this.w5(), w6()
	}, this.w5 = function() {
		hD = a0 && a1 < .8 * a2 ? this.ez + 3 * kd : Math.floor((hL - cu) / 2), this.hE = d3 - this.ez - hR.tB() * kd
	}, this.gf = function() {
		v1 && (v1 = !1, w6())
	}, this.oh = function() {
		return !(!oh || cK.cL && hD < Math.floor(kd + 5.5 * this.ez))
	}, this.tA = function(cw) {
		return !!this.oh() && a1 - cw - kd < hD + cu
	}, this.l = function() {
		oh = !cJ
	}, this.vu = function() {
		oh = !1
	}, this.cg = function() {
		return cA.pL(Math.floor(1024 * eA + .5) - 1, 0, 1023)
	}, this.or = function(d0, d1) {
		return this.oh() && hD < d0 && d0 < hD + cu && d1 > this.hE
	}, this.cz = function(d0, d1) {
		return !!this.oh() && !!cf.or(d0, d1) && (hv.hw = !1, function(sN, d0, d1) {
			if (function(d0, d1) {
					return hD < d0 && d0 < hD + w2 && d1 > cf.hE
				}(d0, d1)) return wE(w4);
			if (function(d0, d1) {
					return hD + cu - w2 < d0 && d0 < hD + cu && d1 > cf.hE
				}(d0, d1)) return wE(1 / w4);
			return sN.oi = !0, wF(d0)
		}(this, d0, d1) && (aL.cx = !0), !0)
	}, this.p3 = function(i4) {
		0 !== gg && this.oh() && wE(i4) && (aL.cx = !0)
	}, this.oG = function(deltaY) {
		var i4;
		return !(0 === deltaY || !this.oh()) && wE(i4 = 0 < deltaY ? (i4 = 400 / (400 + deltaY)) < w4 ? w4 : i4 : 1 / w4 < (i4 = (400 - deltaY) / 400) ? 1 / w4 : i4)
	}, this.oD = function(d0, d1) {
		return !!this.oi && wF(d0)
	}, this.om = function() {
		this.oi = !1
	}, this.fF = function() {
		this.oh() && w3 !== cM.cN.e9(bN, this.cg()) && (v1 = !0)
	}, this.d7 = function() {
		this.oh() && d8.drawImage(dL, hD, this.hE)
	}
}

function rU() {
	var dL, iL, wG, font, wH = 0,
		wI = !1,
		wJ = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		wK = 5;

	function u3() {
		if (wI) {
			var aE, bU = wJ.length,
				ty = Math.floor(.5 * wG.ez),
				ez = bU * ty,
				hD = Math.floor(Math.floor(wG.hD) + .3 * wG.cu - .5),
				hE = Math.floor(Math.floor(wG.hE) - ez),
				cu = Math.floor(.4 * wG.cu + 2.5);
			for (d8.fillStyle = dB.iQ, d8.fillRect(hD, hE, cu, ez), d8.fillStyle = dB.il, d8.fillRect(hD, hE + wK * ty, cu, ty), d8.fillStyle = dB.dC, d8.fillRect(hD, hE, 2, ez), d8.fillRect(hD, hE, cu, 2), d8.fillRect(hD + cu - 2, hE, 2, ez), aE =
				1; aE < bU; aE++) d8.fillRect(hD, hE + aE * ty, cu, 2);
			for (d8.fillStyle = dB.dC, cM.iL.textAlign(d8, 1), cM.iL.textBaseline(d8, 1), d8.font = cM.iL.km(.6 * ty, 0), hD += .5 * cu, aE = 0; aE < bU; aE++) d8.fillText(wX(aE), hD, hE + (aE + .6) * ty)
		}
		d8.drawImage(dL, Math.floor(wG.hD), Math.floor(wG.hE))
	}

	function cp(sN) {
		var hD, hI, hJ, ty;
		iL.clearRect(0, 0, Math.floor(wG.cu), Math.floor(wG.ez)), iL.fillStyle = dB.iQ, iL.fillRect(0, 0, Math.floor(wG.cu), Math.floor(wG.ez)), hu && (iL.fillStyle = dB.il, iL.fillRect(0, 0, Math.floor(.3 * wG.cu), Math.floor(wG.ez))), iL
			.fillStyle = dB.dC, iL.fillText("Hide UI", .15 * wG.cu, .5 * wG.ez), iL.fillRect(Math.floor(.3 * wG.cu - .5), 0, 2, Math.floor(wG.ez)), hD = .5 * wG.cu, iL.fillText("Replay Speed", hD, .31 * wG.ez), iL.fillText(wX(wK), hD, .69 * wG.ez),
			iL.fillRect(Math.floor(.7 * wG.cu - .5), 0, 2, Math.floor(wG.ez)), sN.sV ? (hD = Math.floor(.02 * wG.cu), sN = Math.floor(.025 * wG.cu), hI = Math.floor(.85 * wG.cu - hD - .5 * sN), hJ = Math.floor(.25 * wG.ez), ty = Math.floor(wG.ez) -
				2 * hJ, iL.fillRect(hI, hJ, hD, ty), iL.fillRect(hI + hD + sN, hJ, hD, ty)) : function() {
				var cu = Math.floor(.46 * wG.ez),
					ez = Math.floor(.23 * wG.ez),
					hD = Math.floor(.85 * wG.cu - .5 * cu + cu / 12),
					hE = Math.floor(.5 * wG.ez - ez);
				iL.beginPath(), iL.moveTo(hD, hE), iL.lineTo(hD + cu, hE + ez), iL.lineTo(hD, hE + (ez << 1)), iL.fill()
			}(), iL.fillRect(0, 0, Math.floor(wG.cu), 2), iL.fillRect(0, 0, 2, Math.floor(wG.ez)), iL.fillRect(0, Math.floor(wG.ez) - 2, Math.floor(wG.cu), 2), iL.fillRect(Math.floor(wG.cu - 2), 0, 2, Math.floor(wG.ez))
	}

	function wX(aE) {
		return 5 === aE ? "Normal" : "" + wJ[aE]
	}
	this.sV = !1, this.b = function() {
		cJ && (wK = 5, this.sV = !1, wI = !1, wG = new kZ([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.wL = function() {
		return wJ[wK]
	}, this.d6 = function() {
		return wG.hE
	}, this.tA = function(cw) {
		return !!cJ && wG.hD + wG.cu > a1 - cw - kd
	}, this.resize = function() {
		cJ && (wG.resize(), wG.hE -= (hR.tB() - 1) * kd, font = cM.iL.km(.3 * wG.ez, 0), (dL = document.createElement("canvas")).width = Math.floor(wG.cu), dL.height = Math.floor(wG.ez), (iL = dL.getContext("2d", {
			alpha: !0
		})).font = font, cM.iL.textAlign(iL, 1), cM.iL.textBaseline(iL, 1), cp(this))
	}, this.oy = function(wM) {
		wM !== hu && (hu = wM, gU.resize(), aL.cx = !0, cJ) && (wH = aL.aM + 2e3, cp(this))
	}, this.cz = function(hD, hE) {
		if (!cJ) return !1;
		if (hD < wG.hD || hE < wG.hE || hD > wG.hD + wG.cu) return wI && function(sN, hD, hE) {
			var bU = wJ.length,
				ty = Math.floor(.5 * wG.ez),
				ez = bU * ty,
				hI = Math.floor(Math.floor(wG.hD) + .3 * wG.cu - .5),
				ez = Math.floor(Math.floor(wG.hE) - ez),
				cu = Math.floor(.4 * wG.cu + 2.5);
			return wI = !1, aL.cx = !0, hD < hI || hI + cu < hD || hE < ez || (wK = wP(0, Math.floor((hE - ez) / ty), bU - 1), cp(sN)), !0
		}(this, hD, hE);
		if ((hD -= wG.hD) < .3 * wG.cu) wI = !1, this.oy(!hu);
		else {
			if (hD < .7 * wG.cu) return wI = !wI, aL.cx = !0;
			this.p1(!1)
		}
		return !0
	}, this.p1 = function(wO) {
		2 === gg ? (this.oy(!1), kj.show()) : (wI = !1, this.sV = !this.sV, this.sV ? cK.cL ? cK.p0() : aJ(1) : wO || cK.sW(), aL.cx = !0, cp(this))
	}, this.oa = function(hD, hE) {
		return !!hu && (cK.cz(hD, hE) || (cJ ? ((aL.aM > wH || !this.cz(hD, hE)) && hv.cz(hD, hE), aL.cx = !0, wH = aL.aM + 2e3) : hv.cz(hD, hE)), !0)
	}, this.fF = function() {
		cJ && hu && aL.aM > wH - 1e3 && aL.aM < wH && (aL.cx = !0)
	}, this.na = function() {
		cJ && (this.sV = !1, aL.cx = !0, cp(this))
	}, this.d7 = function() {
		if (cJ) {
			if (hu) {
				if (aL.aM > wH) return;
				if (aL.aM > wH - 1e3) return d8.globalAlpha = wP(0, (1e3 - (aL.aM - (wH - 1e3))) / 1e3, 1), u3(), void(d8.globalAlpha = 1)
			}
			u3()
		}
	}
}

function rT() {
	var wG, kg, pP, ty;
	this.oh = !1, this.ki = !1, this.sh = function() {
		return !fr.fs && az.ll !== az.wY() && (cJ || 2 === gg)
	}, this.show = function() {
		this.oh = !0, wG || (wG = new kZ([.55, .35], [.5, .5]), (kg = new kf).b()), this.resize(), 0 === gg ? kg.ko("") : (gW.kD.wc.length || (gW.kD.wc = gW.wf.nA()), kg.ko(gW.wg(gW.kD.wc))), kg.show(), aL.cx = !0, ot.l(!1)
	}, this.kk = function() {
		this.oh && (this.oh = !1, this.ki = !1, kg.kk(), aL.cx = !0, 0 === gg && qU.ks(), 0 === aT.ov()) && ot.l(!0)
	}, this.resize = function() {
		this.oh && (wG.resize(), pP = .03 * wG.ez, ty = .2 * wG.ez, kg.resize(wG.hD + pP, wG.hE + ty + pP, wG.cu - 2 * pP, wG.ez - 2 * (ty + pP)))
	}, this.cz = function(hD, hE) {
		return !!this.oh && (hD < wG.hD || hE < wG.hE || hD > wG.hD + wG.cu || hE > wG.hE + wG.ez ? 2 !== cK.cz(hD, hE) && this.kk() : hE < wG.hE + wG.ez - ty ? hD > wG.hD + wG.cu - ty && hE < wG.hE + ty && this.kk() : (hD -= wG.hD) < .25 * wG
			.cu ? kg.kr() : hD < .5 * wG.cu ? kg.kt() : hD < .75 * wG.cu ? kg.ks() : (hE = this, hD = gW.wb(kg.kq()), hE.kk(), (0 < hD.length && hD === gW.kD.wc || gW.we.l8(hD)) && gW.wd()), !0)
	}, this.d7 = function() {
		var aE;
		if (this.oh)
			for (cM.iL.textAlign(d8, 1), d8.fillStyle = dB.iv, d8.fillRect(wG.hD, wG.hE, wG.cu, ty), d8.fillStyle = dB.iQ, d8.fillRect(wG.hD, wG.hE + ty, wG.cu, wG.ez - ty), d8.fillStyle = dB.dC, d8.fillRect(wG.hD, wG.hE, 2, wG.ez), d8.fillRect(
					wG.hD, wG.hE, wG.cu, 2), d8.fillRect(wG.hD + wG.cu - 2, wG.hE, 2, wG.ez), d8.fillRect(wG.hD, wG.hE + wG.ez - 2, wG.cu, 2), d8.fillRect(wG.hD + 1, wG.hE + ty, wG.cu - 2, 2), d8.fillRect(wG.hD + 1, wG.hE + wG.ez - ty, wG.cu - 2,
					2), d8.font = cn + Math.floor(.39 * ty) + co, d8.fillText("Replay", wG.hD + .5 * wG.cu, wG.hE + .55 * ty), cK.si(wG.hD + wG.cu - .725 * ty, wG.hE + .275 * ty, .45 * ty), d8.setTransform(1, 0, 0, 1, 0, 0), d8.font = cM.iL.km(
					.3 * ty, 0), d8.fillText("Select All", wG.hD + .125 * wG.cu, wG.hE + wG.ez - .48 * ty), d8.fillText("Copy", wG.hD + .375 * wG.cu, wG.hE + wG.ez - .48 * ty), d8.fillText("Clear", wG.hD + .625 * wG.cu, wG.hE + wG.ez - .48 * ty),
				d8.fillText("Launch", wG.hD + .875 * wG.cu, wG.hE + wG.ez - .48 * ty), aE = 1; aE < 4; aE++) d8.fillRect(wG.hD + .25 * aE * wG.cu - 1, wG.hE + wG.ez - ty + 1, 2, ty - 2)
	}
}

function qg() {
	var wi, wj, cu, hD, hE, wk, wl;
	this.b = function() {
		wi = new Array(2), wj = new Array(2), this.hw = !1, wl = wk = eD = eB = 0, eC = 1, this.resize()
	}, this.resize = function() {
		cu = (cu = Math.floor((a0 ? .072 : .0502) * ck)) < 8 ? 8 : cu;
		for (var aE = 1; 0 <= aE; aE--) wi[aE] = document.createElement("canvas"), wi[aE].width = cu, wi[aE].height = cu, wj[aE] = wi[aE].getContext("2d", {
			alpha: !0
		});
		this.w5(),
			function() {
				for (var x1 = Math.floor(1 + cu / 20), aE = 1; 0 <= aE; aE--) wj[aE].clearRect(0, 0, cu, cu), wj[aE].fillStyle = dB.iN, wj[aE].beginPath(), wj[aE].arc(cu / 2, cu / 2, cu / 2 - x1, 0, 2 * Math.PI), wj[aE].fill(), wj[aE].lineWidth =
					x1, wj[aE].fillStyle = dB.dC, wj[aE].strokeStyle = dB.dC, wj[aE].beginPath(), wj[aE].arc(cu / 2, cu / 2, cu / 2 - x1, 0, 2 * Math.PI), wj[aE].stroke(), md(wj[aE], 0, 0, cu, x1, .3, 0 === aE)
			}()
	}, this.hN = function() {
		return -eB / eC
	}, this.d6 = function() {
		return -eD / eC
	}, this.i6 = function(wp, du) {
		eB = eC * wp - du
	}, this.i7 = function(wq, dv) {
		eD = eC * wq - dv
	}, this.cz = function(wo, tC) {
		return hu || ! function(wo, tC) {
			return Math.pow(wo - (hD + cu / 2), 2) + Math.pow(tC - (hE + cu / 2), 2) < cu * cu / 4 || Math.pow(wo - (hD + cu / 2), 2) + Math.pow(tC - (hE + 2 * cu), 2) < cu * cu / 4
		}(wo, tC) || hR.hS.wr ? (gY.iA() && (this.hw = !0, wk = wo, wl = tC), !1) : tC < hE + 1.25 * cu ? this.oG(Math.floor(hL / 2), Math.floor(d3 / 2), -200) : this.oG(Math.floor(hL / 2), Math.floor(d3 / 2), 200)
	}, this.oD = function(wo, tC) {
		var ws, wt, dx, e0;
		return !gY.iA() || (ws = eB, wt = eD, eB += dx = wk - wo, eD += e0 = wl - tC, g8.oD(dx, e0), this.wu(), wk = wo, wl = tC, ws !== eB) || wt !== eD
	}, this.oG = function(d0, d1, deltaY) {
		var i4;
		if (gY.iA()) {
			if (0 < deltaY) i4 = (i4 = 500 / (500 + deltaY)) < .5 ? .5 : i4;
			else {
				if (!(deltaY < 0)) return !1;
				i4 = 2 < (i4 = (500 - deltaY) / 500) ? 2 : i4
			}
			this.wv(d0, d1, i4), aL.cx = !0
		}
		return !0
	}, this.wv = function(hD, hE, dq) {
		var ci;
		dq = ci = (ci = 1024 < (ci = dq) * eC ? 1024 / eC : ci) * eC < .125 ? .125 / eC : ci, g8.zoom(dq, hD, hE),
			function(ci, d0, d1) {
				eC *= ci, eB = (eB + d0) * ci - d0, eD = (eD + d1) * ci - d1, hv.wu()
			}(dq, hD, hE)
	}, this.wu = function() {
		var wy = a1 / 16,
			dV = 0,
			wz = a2 / 16,
			dX = 0;
		eB < wy - a1 && (dV = wy - a1 - eB), eB > eC * az.b0 - wy && (dV = eC * az.b0 - wy - eB), eD < wz - a2 && (dX = wz - a2 - eD), eD > eC * az.b1 - wz && (dX = eC * az.b1 - wz - eD), eB += dV, eD += dX, i8.i9(), g8.x0(dV, dX)
	}, this.w5 = function() {
		hD = hL - cu - kd, hE = Math.floor(d3 / 2 - 1.25 * cu)
	}, this.d7 = function() {
		hR.hS.wr || (d8.drawImage(wi[0], hD, hE), d8.drawImage(wi[1], hD, Math.floor(hE + 3 * cu / 2)))
	}
}

function qh() {
	var ad, lp, x2, x3, mA, x4, x5, x6, x7, x8, ct, x9, xA, xB, xC, v5, xD, xE, xF;

	function xJ() {
		x3 = Math.floor(.2 * (a0 ? .07 : .035) * ck), x3 = t8(a0 ? 3 : 1, x3);
		var xO = a1 / (ad.length + mA);
		x3 = x3 < xO ? xO : x3, v5 = Math.floor((1 - mA) * x3), lp = 0, xP()
	}

	function xP() {
		lp = (lp = lp < -20 ? -20 : lp) > (ad.length - 15) * x3 ? (ad.length - 15) * x3 : lp, x5 = Math.floor(lp / x3), x6 = (x6 = x5 + Math.floor(hL / x3)) > ad.length - 1 ? ad.length - 1 : x6, x5 = (x5 = x6 < x5 ? x6 : x5) < 0 ? 0 : x5;
		var ca = x6;
		x4 = x2 / ad[ca];
		for (var aE = x6 - 1; x5 <= aE; aE--) ad[aE] > ad[ca] && (ca = aE, x4 = x2 / Math.pow(ad[aE], xC))
	}

	function xS(hD) {
		hD = Math.floor((lp + hL - hD - mA * x3) / x3);
		return (hD = hD < -1 ? -1 : -1 === hD ? 0 : hD > ad.length - 1 ? -1 : hD) !== x7 && (x7 = hD, -1 === xD && 0 === x7 && xB && (xD = setInterval(xT, 100)), 1)
	}

	function xU(aE) {
		var uu = Math.floor(x4 * Math.pow(ad[aE], xC));
		d8.fillRect(lp + hL - (aE + 1) * x3, d3 - uu, v5, uu)
	}

	function xT() {
		var bc;
		0 !== (x7 = 8 === aT.ov() ? -1 : x7) ? (xE = (new Date).getTime(), clearInterval(xD), xD = -1) : (bc = ad[1] / 864e3, -1 !== xE && (bc += ((new Date).getTime() - xE) * ad[1] / 864e5, xE = -1), 0 < bc && (ad[0] += Math.floor(bc), aL.cx = !0))
	}
	this.b = function() {
		xB = !(xE = xD = -1), x7 = -(xC = 1), this.xG = !1, xA = 0, x9 = new Date, lp = 0, mA = .3, (xF = []).push({
			tc: "Plateau A",
			bU: 0,
			nz: 57
		}), xF.push({
			tc: "Max A",
			bU: 1,
			nz: 1
		}), xF.push({
			tc: "Black Friday",
			bU: 15,
			nz: 15
		}), xF.push({
			tc: "Max B",
			bU: 19,
			nz: 19
		}), xF.push({
			tc: "Max C",
			bU: 44,
			nz: 44
		}), xF.push({
			tc: "First Android Version",
			bU: 58,
			nz: 58
		}), xF.push({
			tc: "Max D",
			bU: 67,
			nz: 67
		}), xF.push({
			tc: "The iFrame Explosion",
			bU: 98,
			nz: 99
		}), xF.push({
			tc: "The 155-Day Uptrend",
			bU: 58,
			nz: 213
		}), xF.push({
			tc: "Max E",
			bU: 213,
			nz: 213
		}), xF.push({
			tc: "Plateau B",
			bU: 214,
			nz: 259
		}), xF.push({
			tc: "Turbulent Times",
			bU: 260,
			nz: 344
		}), xF.push({
			tc: "Max F",
			bU: 262,
			nz: 262
		}), xF.push({
			tc: "Max G",
			bU: 282,
			nz: 282
		}), xF.push({
			tc: "Max H",
			bU: 333,
			nz: 333
		}), xF.push({
			tc: "The 19-Day Downtrend",
			bU: 283,
			nz: 301
		}), xF.push({
			tc: "Plateau C",
			bU: 345,
			nz: 385
		}), xF.push({
			tc: "The Alliance Ascent",
			bU: 386,
			nz: 395
		}), xF.push({
			tc: "Max I",
			bU: 395,
			nz: 395
		}), xF.push({
			tc: "First iOS Version",
			bU: 411,
			nz: 411
		}), xF.push({
			tc: "Plateau D",
			bU: 396,
			nz: 453
		}), xF.push({
			tc: "The TikTok Revolution",
			bU: 454,
			nz: 470
		}), xF.push({
			tc: "Max J",
			bU: 456,
			nz: 456
		}), xF.push({
			tc: "Max K",
			bU: 472,
			nz: 472
		}), xF.push({
			tc: "Max L",
			bU: 478,
			nz: 478
		}), xF.push({
			tc: "YT Drew",
			bU: 471,
			nz: 485
		}), xF.push({
			tc: "Plateau E",
			bU: 485,
			nz: 600
		}), xF.push({
			tc: "Uptrend A",
			bU: 600,
			nz: 613
		}), xF.push({
			tc: "Max M",
			bU: 613,
			nz: 613
		}), xF.push({
			tc: "Downtrend A",
			bU: 614,
			nz: 635
		}), xF.push({
			tc: "Plateau F",
			bU: 636,
			nz: 737
		}), xF.push({
			tc: "End of Record",
			bU: 738,
			nz: 738
		}), ad = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
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
		], this.resize(), gB.xI(0, 0)
	}, this.resize = function() {
		x2 = Math.floor(.15 * a2), x8 = Math.floor((a0 ? .018 : .0137) * ck), ct = cn + (x8 = x8 < 2 ? 2 : x8) + co, xJ()
	}, this.xK = function() {
		xB || jJ.xL()
	}, this.xM = function(xN) {
		var aE;
		for (xB = !0, aE = 0; aE < xN.length; aE++) ad.unshift(xN[aE]);
		xJ(), aL.cx = !0
	}, this.xQ = function() {
		xP()
	}, this.oD = function(hD, hE) {
		d3 - .6 * x2 < hE ? this.xG ? hD !== xA && (lp += hD - xA, xA = hD, xP(), xS(hD), this.xG = -1 !== x7, aL.cx = !0) : xS(hD) && (aL.cx = !0) : this.ok()
	}, this.ok = function() {
		-1 !== x7 && (this.xG = !1, x7 = -1, aL.cx = !0)
	}, this.oG = function(hD, deltaY) {
		-1 !== x7 && (lp += Math.floor(deltaY), xP(), xS(hD), aL.cx = !0)
	}, this.cz = function(hD, hE) {
		this.oD(hD, hE), -1 !== x7 && (xA = hD, this.xG = !0)
	}, this.ol = function() {
		-1 !== x7 && (this.xG = !1)
	}, this.d7 = function() {
		d8.fillStyle = dB.iV;
		for (var xW, month, a3, mg, xZ, xa, hJ, xb, xc, aE = x6; x5 <= aE; aE--) xU(aE);
		xB && 0 === x5 && (d8.fillStyle = dB.is, xU(0)), -1 !== x7 && (d8.fillStyle = dB.iU, xU(x7)), -1 !== x7 && (d8.font = ct, d8.textBaseline = uh, (a3 = new Date).setTime(x9.getTime() - 1e3 * x7 * 60 * 60 * 24), month = "month", xW = "day",
			"undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(a3), xW = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(a3)), xW = xW + ", " + a3.getUTCDate() + " " + month + " " + a3.getFullYear(), month = 1 === ad[x7] ? " second played" : " seconds played", month = gR.hU(ad[x7]) + month, a3 = Math.floor(d8.measureText(xW).width), mg =
			Math.floor(d8.measureText(month).width), xZ = Math.floor(.5 * (a3 + x8)), xa = (xa = lp + hL - (x7 + 1) * x3) < xZ ? xZ : hL - xZ < xa ? hL - xZ : xa, hJ = d3 - Math.floor(x4 * Math.pow(ad[x7], xC)), xb = Math.floor(1.1 * x8),
			xc = d3 - xb < hJ ? d3 - xb : hJ, d8.fillStyle = dB.iR, d8.fillRect(hL - mg - x8, xc - xb, mg + x8, xb), d8.fillRect(xa - xZ, d3 - xb, a3 + x8, xb), d8.fillStyle = dB.dC, d8.textAlign = ui, d8.fillText(month, Math.floor(hL - .5 *
				x8), xc),
			function(hJ, xb) {
				for (var mf, rl = -1, cm = ad.length - x7 - 1, aE = xF.length - 1; 0 <= aE; aE--) cm >= xF[aE].bU && cm <= xF[aE].nz && (-1 === rl || xF[aE].nz - xF[aE].bU < xF[rl].nz - xF[rl].bU) && (rl = aE); - 1 !== rl && (mf = Math.floor(
					d8.measureText(xF[rl].tc).width), d8.fillStyle = dB.iR, d8.fillRect(hL - mf - x8, hJ, mf + x8, xb), d8.fillStyle = dB.dC, d8.fillText(xF[rl].tc, Math.floor(hL - .5 * x8), hJ + xb))
			}(xc - 2 * xb, xb), d8.textAlign = dA, d8.fillText(xW, xa, d3), d8.strokeStyle = dB.iW, d8.lineWidth = 1, d8.beginPath(), d8.moveTo(0, hJ), d8.lineTo(hL, hJ), d8.closePath(), d8.stroke())
	}
}

function qi() {
	var ct, cu, hE, xe, xf, dL, iL, v1, pV, xg, xh, xi, xj;
	this.hD = 0, this.ez = 0, this.b = function() {
		xf = mF, xh = "rgba(0,100,0,0.8)", xi = "rgba(150,0,0,0.8)", v1 = !(xg = !0), pV = bO[bN], this.resize()
	}, this.resize = function() {
		cu = Math.floor((a0 ? .305 : .24) * ck), this.ez = Math.floor(.5 + .13 * cu), cu = Math.floor(6 * this.ez), ct = cn + Math.floor(.8 * this.ez) + co, xj = Math.floor(.5 * this.ez), az.lJ.font = ct, hE = kd, xe = Math.floor(1 + .13 * this
			.ez), (dL = document.createElement("canvas")).width = cu, dL.height = this.ez, (iL = dL.getContext("2d", {
			alpha: !0
		})).font = ct, iL.textBaseline = d9, iL.textAlign = dA, this.xk()
	}, this.vR = function() {
		return a0 && a1 < 1.2 * a2
	}, this.w5 = function() {
		this.vR() ? this.hD = hL - cu - kd : this.hD = Math.floor(gN.xl() + (hL - gN.xl() - g9.cu - cu) / 2 - .5 * kd)
	}, this.gf = function() {
		v1 && (v1 = !1, this.xk())
	}, this.xk = function() {
		iL.clearRect(0, 0, cu, this.ez), iL.fillStyle = xg ? xh : xi, iL.fillRect(0, 0, cu, this.ez), iL.fillStyle = dB.iU, this.xm(), this.xn(), iL.fillStyle = bO[bN] >= bP.fJ(bN) ? dB.ip : dB.dC, iL.fillText(gR.hU(pV), Math.floor(cu / 2), xj),
			iL.fillStyle = dB.dC, iL.fillRect(0, 0, cu, 1), iL.fillRect(0, 0, 1, this.ez), iL.fillRect(0, this.ez - 1, cu, 1), iL.fillRect(cu - 1, 0, 1, this.ez)
	}, this.xm = function() {
		var lx = vz(Math.floor((bP.xo() - 1) * this.ez / 9), this.ez - xe);
		iL.fillRect(0, lx, xe, this.ez - lx), iL.fillRect(cu - xe, lx, xe, this.ez - lx)
	}, this.xn = function() {
		iL.fillRect(xe, this.ez - xe, Math.floor((cu - 2 * xe) * bO[bN] / xf), xe)
	}, this.fF = function() {
		0 !== e6[bN] && 2 !== e7[bN] && pV !== bO[bN] && (xf = t8(bO[bN], xf), xg = bO[bN] > pV && 10 <= bO[bN], pV = bO[bN], v1 = !0)
	}, this.d7 = function() {
		0 === e6[bN] || hr || 2 === e7[bN] || d8.drawImage(dL, this.hD, hE)
	}
}

function qj() {
	var xq, xr, xs, xt, xu, xv, xw, xx, xy, xz, y0, y1, y2, y3, y4, y5, y6, y7, y8, title, y9, yA, yB, yC, yD, position, yE, yF, yG, yH, yI = 1;

	function yL() {
		xw.clearRect(0, 0, xq, vh), xw.fillStyle = dB.j1, xw.fillRect(0, 0, xq, y1), xw.fillStyle = dB.iQ, xw.fillRect(0, y1, xq, vh - y1), xp[bN] >= position && yO(xp[bN] - position, dB.il), 0 !== xp[bN] && 0 === position && yO(0, dB.j5), -1 !==
			yD && yO(yD, dB.iT), xw.fillStyle = dB.dC, xw.fillRect(0, y1, xq, 1), xw.fillRect(0, 0, xq, um), xw.fillRect(0, 0, um, vh), xw.fillRect(xq - um, 0, um, vh), xw.fillRect(0, vh - um, xq, um), xw.font = xr, xw.textBaseline = d9, xw
			.textAlign = dA, xw.fillText(title, Math.floor(xq / 2), Math.floor(xz + xs / 2));
		var ej, bd = xp[bN] < position + xu - 1 ? 1 : 2;
		for (xw.font = xt, xw.textAlign = tG, ej = xu - bd; 0 <= ej; ej--) yP(gr[ej + position]), yQ(ej, ej + position, gr[ej + position]);
		for (xw.textAlign = ui, ej = xu - bd; 0 <= ej; ej--) yP(gr[ej + position]), yR(ej, gr[ej + position]);
		2 == bd && (yP(bN), xw.textAlign = tG, yQ(xu - 1, xp[bN], bN), xw.textAlign = ui, yR(xu - 1, bN)), 0 === position && (bd = .7 * y2 / cq.get(4).height, xw.setTransform(bd, 0, 0, bd, Math.floor(y3 + .58 * y2 + .5 * bd * cq.get(4).width), Math
			.floor(xz + xs + .4 * y2)), xw.imageSmoothingEnabled = !0, xw.drawImage(cq.get(4), -Math.floor(cq.get(4).width / 2), -Math.floor(cq.get(4).height / 2)), xw.setTransform(1, 0, 0, 1, 0, 0))
	}

	function yP(player) {
		cS && (xw.fillStyle = fW.yT[fW.ng[fW.fX[player]]])
	}

	function yO(aE, rq) {
		xw.fillStyle = rq, aE = xu - 1 < aE ? xu - 1 : aE;
		rq = Math.floor((aE === xu - 1 ? 2 : 0 === aE ? 1.15 : 1) * y2), rq = aE === xu - 2 ? Math.floor(y1 + 9.15 * y2) - Math.floor(y1 + 8.15 * y2) : rq;
		xw.fillRect(0, Math.floor(y1 + (aE + (0 === aE ? 0 : .15)) * y2), xq, rq)
	}

	function yQ(yV, yW, aE) {
		xw.fillText(y9[yW], y3, Math.floor(xz + xs + (yV + .5) * y2)), 1 === e7[aE] && (xw.font = uj + xt);
		yW = Math.floor(xz + xs + (yV + .5) * y2);
		xw.fillText(y7[aE] === aE ? hV[aE] : y6[y7[aE] % bZ], y4, yW), 0 !== e7[aE] && (xw.font = xt), aE < e5 && 2 !== e7[aE] || xw.fillRect(y4, yW + .35 * yI, y8[aE], Math.max(1, .1 * yI))
	}

	function yR(yV, aE) {
		xw.fillText(bv[aE], y5, Math.floor(xz + xs + (yV + .5) * y2))
	}

	function yf(hE) {
		return (hE -= kd + y1) < 0 ? Math.floor(hE / y2) - 1 : hE < (xu - 1) * y2 ? Math.floor(hE / y2) : hE < vh - y1 ? xu - 1 : (hE -= vh - y1, xu + Math.floor(hE / y2))
	}

	function sK(hD, hE) {
		return kd <= hD && hD < kd + xq && kd <= hE && hE < kd + vh
	}
	this.b = function() {
		var aE, v, ej;
		for (yF = !1, title = "LEADERBOARD", xu = a0 ? 6 : 10, position = yH = yG = yE = 0, yC = !(yD = -1), yA = new Uint16Array(xu + 1), yB = new Uint32Array(xu + 1), xy = bZ, gr = new Uint16Array(xy), xp = new Uint16Array(xy), aE = xy -
			1; 0 <= aE; aE--) gr[aE] = aE, xp[aE] = aE;
		this.resize(!0), y6 = [], y7 = new Uint16Array(bZ), y8 = new Uint16Array(bZ);
		var yJ = Math.floor(xq - y4 - y3 - xx),
			yK = 0;
		for (y9 = new Array(bZ), xw.font = xt, aE = bZ - 1; 0 <= aE; aE--)
			if (y9[aE] = aE + 1 + ".", y7[aE] = aE, y8[aE] = Math.floor(xw.measureText(hV[aE]).width), y8[aE] > yJ) {
				for (v = hV[aE], ej = hV[aE].length - 1; 1 <= ej && (v = v.substring(0, ej), y8[aE] = Math.floor(xw.measureText(v + "...").width), !(y8[aE] <= yJ)); ej--);
				v += "...", y6.push(v), y7[aE] = bZ + yK++
			} yL()
	}, this.resize = function(b) {
		if (vh = a0 ? (xq = Math.floor(.335 * ck), Math.floor(xu * xq / 8)) : (xq = Math.floor(.27 * ck), Math.floor(xu * xq / 10)), xq = Math.floor(.97 * xq), (xv = document.createElement("canvas")).width = xq, xv.height = vh, xw = xv
			.getContext("2d", {
				alpha: !0
			}), xz = .025 * xq, xs = .16 * xq, y0 = 0 * xq, y1 = Math.floor(.45 * xz + xs), y2 = (vh - xs - 2 * xz - y0) / xu, xr = cn + Math.floor(.55 * xs) + co, yI = Math.floor((a0 ? .67 : .72) * y2), xt = yI + co, xw.font = xt, y3 = Math
			.floor(.04 * xq), y4 = Math.floor((a0 ? .195 : .18) * xq), xx = Math.floor(xw.measureText("00920600").width), xw.font = xr, y5 = xq - y3, !b) {
			xw.font = xt;
			for (var aE = bZ - 1; 0 <= aE; aE--) y8[aE] = Math.floor(xw.measureText(y7[aE] === aE ? hV[aE] : y6[y7[aE] % bZ]).width);
			yL()
		}
	}, this.xl = function() {
		return xq
	}, this.gf = function(tq) {
		yC && (tq || aL.fU() % hR.yM[hR.hS.yN] == 0) && (yC = !1, yL())
	}, this.fF = function() {
		! function() {
			for (var ej = xy - 1; 0 <= ej; ej--) 0 === e6[gr[ej]] && ! function(ej) {
				var yd = gr[ej];
				xy--;
				for (var aE = ej; aE < xy; aE++) gr[aE] = gr[aE + 1], xp[gr[aE]] = aE;
				gr[xy] = yd, xp[gr[xy]] = xy
			}(ej)
		}();
		for (var yb, iA = xy - 1, ej = 0; ej < iA; ej++) bv[gr[ej]] < bv[gr[ej + 1]] && (yb = gr[ej], gr[ej] = gr[ej + 1], gr[ej + 1] = yb, xp[gr[ej]] = ej, xp[gr[ej + 1]] = ej + 1);
		! function() {
			for (var a3 = yC, bd = (yC = !0, xp[bN] >= xu - 1 ? xu - 2 : xu - 1), aE = bd; 0 <= aE; aE--)
				if (yA[aE] !== gr[aE] || yB[aE] !== bv[gr[aE]]) return;
			(bd != xu - 2 || yA[xu] === xp[bN] && yB[xu] === bv[bN]) && (yC = a3)
		}();
		for (var aE = xu - 1; 0 <= aE; aE--) yA[aE] = gr[aE], yB[aE] = bv[gr[aE]];
		yA[xu] = xp[bN], yB[xu] = bv[bN]
	}, this.cz = function(hD, hE) {
		return !!sK(hD, hE) && (yE = aL.aM, yF = !0, yG = yH = yf(hE), oc.p7() && (hD = wP(-1, yH, xu), yD !== (hD = hD === xu ? -1 : hD)) && (yD = hD, yL(), aL.cx = !0), !0)
	}, this.oD = function(hD, hE) {
		var a3, ye = yf(hE);
		return yF ? (a3 = position, (position = wP(0, position += yG - ye, bZ - xu)) !== a3 && (ye = (ye = wP(-1, yG = ye, xu)) !== xu && sK(hD, hE) ? ye : -1, yD = ye, yL(), aL.cx = !0), !0) : (ye = (ye = wP(-1, ye, xu)) === xu || !sK(hD, hE) ||
			oc.p7() ? -1 : ye, yD !== ye && (yD = ye, yL(), aL.cx = !0))
	}, this.ol = function(hD, hE) {
		if (!yF) return !1;
		yF = !1;
		var ye = yf(hE);
		return oc.p7() && -1 !== yD && (yD = -1, yL(), aL.cx = !0), aL.aM - yE < 350 && yH === ye && -1 !== (ye = (ye = wP(-1, ye, xu)) !== xu && sK(hD, hE) ? ye : -1) && (hD = gr[ye + position], ye === xu - 1 && xp[bN] >= position + xu - 1 && (
			hD = bN), cS && displayDonationsHistory(hD, hV, fx), 0 !== e6[hD]) && gY.hs(hD, 800, !1, 0), !0
	}, this.oG = function(hD, hE, deltaY) {
		var yg;
		return !(yF || hu || (yg = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !sK(hD, hE)) || (hD = (hD = wP(-1, yf(hE), xu)) === xu || oc.p7() ? -1 : hD, 0 < deltaY ? position < bZ - xu && (position += Math.min(bZ - xu - position, yg), yD =
			hD, yL(), aL.cx = !0) : 0 < position && (position -= Math.min(position, yg), yD = hD, yL(), aL.cx = !0), 0))
	}, this.d7 = function() {
		d8.drawImage(xv, kd, kd)
	}
}

function qk() {
	var dL, iL, hD, hE, uu, yh, mA, yi, cs, yj, sQ, bS, yk, yl, ym, yn, yo, yp;

	function ys() {
		iL.clearRect(0, 0, g9.cu, g9.ez), iL.fillStyle = dB.iR, iL.fillRect(0, 0, g9.cu, g9.ez), iL.fillStyle = dB.ig, dq = 0 < ym ? ym : Math.sqrt(bS[4] / 1e4), iL.fillRect(0, g9.ez - uu - 1, Math.floor(dq * g9.cu), uu), iL.fillStyle = dB.dC, iL
			.fillRect(0, 0, g9.cu, 1), iL.fillRect(0, 0, 1, g9.ez), iL.fillRect(g9.cu - 1, 0, 1, g9.ez), iL.fillRect(0, g9.ez - 1, g9.cu, 1), iL.fillRect(0, g9.ez - uu - 1, g9.cu, 1);
		for (var dq, yu, a3 = 0, aE = 0; aE < sQ.length; aE++) yk[aE] ? (iL.textAlign = tG, yu = Math.floor((yh - uu + 2 * yi) * (aE - a3 + 1) / (sQ.length + 1) - .7 * yi), iL.fillText(sQ[aE], mA, yu), iL.textAlign = ui, 5 === aE && 0 !== e6[bN] &&
			bO[bN] >= bP.fJ(bN) ? (iL.fillStyle = dB.j3, iL.fillText(yr(aE), g9.cu - mA, yu), iL.fillStyle = dB.dC) : iL.fillText(yr(aE), g9.cu - mA, yu)) : a3++
	}

	function yr(aE) {
		return aE < 3 ? bS[aE].toString() : 3 === aE || 4 === aE || 5 === aE ? g9.tl(bS[aE] / 100, 2) : aE < 7 ? gR.hU(bS[aE]) : aE === 7 ? g9.xo(bS[7]) : aE === 8 ? utils.getMaxTroops(bv, bN) : utils.getDensity(bO, bv, bN)
	}

	function yq() {
		bv[bN] !== bS[6] && (bS[6] = bv[bN], yj++)
	}
	this.b = function() {
		ym = yn = 0, (sQ = new Array(8))[0] = "Humans", sQ[1] = fx ? "Players" : "Bots", sQ[2] = "Spectators", sQ[3] = "Threshold", sQ[4] = "Occupation", sQ[5] = "Interest", sQ[6] = "Income", sQ[7] = "Time", sQ.push("Max Troops", "Density"), yp =
			po - bJ(po, 100), (bS = new Array(sQ.length))[0] = fx ? 0 : e5, bS[1] = fx ? fY : fq, bS[2] = nX, bS[3] = 0, bS[4] = bJ(1e4 * bv[0], po), bS[5] = 700, bS[6] = 0, yq(), bS[7] = 0, yl = yr(6), yk = new Array(sQ.length);
		for (var aE = sQ.length - 1; 0 <= aE; aE--) yk[aE] = !0;
		yo = 0, yo = fx ? (yk[0] = !1, yk[2] = !1, yk[3] = !1, 3) : (yk[3] = !1, 1), yj = 0, this.resize()
	}, this.resize = function() {
		this.cu = Math.floor((a0 ? .1646 : .126) * 1.25 * ck), this.ez = Math.floor(1.18 * this.cu), uu = Math.floor(.04 * this.cu), mA = Math.floor(.035 * this.cu), yi = .04 * this.cu, yh = this.ez, this.ez -= Math.floor(yo * (this.ez - 2 *
			uu) / sQ.length), cs = Math.floor(.7 * (yh - uu) / sQ.length), cs = cn + cs + co, (dL = document.createElement("canvas")).width = this.cu, dL.height = this.ez, (iL = dL.getContext("2d", {
			alpha: !0
		})).font = cs, iL.textBaseline = d9, iL.lineWidth = 1, this.pi(), this.w5(), gQ.w5(), ys()
	}, this.w5 = function() {
		hD = hL - this.cu - kd
	}, this.yt = function() {
		hE = kd
	}, this.pi = function() {
		hE = kd + (gQ.vR() && 0 !== e6[bN] && !hr ? gQ.ez + kd : 0)
	}, this.gf = function(tq) {
		0 < yj && (tq || 100 <= yj) && (yj = 0, ys())
	}, this.ry = function() {
		return bS[7]
	}, this.xo = function(value) {
		var ca = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * ca) / 1e3);
		return value < 10 ? ca + ":0" + value : ca + ":" + value
	}, this.tl = function(bc, vA) {
		return bc.toFixed(vA) + "%"
	}, this.fF = function() {
		var z4, per;
		yk[0] && nY - nX !== bS[0] && (bS[0] = nY - nX, yj++), fY - bS[0] !== bS[1] && (bS[1] = fY - bS[0], yj++), this.gA(), (z4 = bP.z5(bN)) !== bS[5] && (bS[5] = z4, yj++), yq(), bS[7] += aL.z6, z4 = yr(7), yl !== z4 && (yl = z4, yj += 100),
			z4 = cS ? gU.ni() : bv[gr[0]], per = bJ(1e4 * z4, po), bS[3] = z4, bS[4] !== per && (yj++, bS[4] = per), 8 === fv && function() {
				if (0 === e6[0]) gC.nH.nP(1);
				else {
					if (0 !== e6[1]) return;
					gC.nH.nP(0)
				}
				return 1
			}() || bS[3] < yp || bS[3] !== po && ! function() {
				for (var aE = fY - 1; 0 <= aE; aE--)
					if (0 < bV[fZ[aE]].length) return;
				return 1
			}() || gC.nH.nP(-1)
	}, this.gA = function() {
		yk[2] && nX !== bS[2] && (bS[2] = nX, yj++)
	}, this.z7 = function(aE) {
		var pN, z8, a3;
		return 2 !== gg && (aE === ps ? (ym = 0, ys(), !1) : (-1 !== aE || 0 !== yn) && (z8 = ym, ym = cJ ? aE / ps : (a3 = performance.now(), 0 <= aE && (pN = a3 - 392 * aE, yn = 0 === aE || pN < yn ? pN : yn), 1 < (ym = (a3 - yn) / (392 *
			ps)) ? 1 : ym), ys(), ym !== z8))
	}, this.d7 = function() {
		d8.drawImage(dL, hD, hE)
	}
}

function ql() {
	var oh, z9, cu, ez, ty, zA, zB, vS, dL, hi, zC;

	function d6() {
		return Math.floor((hL - cu) / 2) < cf.ez + 2 * kd ? d3 - ez - 4 * kd - cf.ez : d3 - ez - 2 * kd
	}
	this.zD = -1, this.b = function() {
		zC = oh = !1, ty = .61, zA = .07, zB = .09, hi = vS = ez = 0, this.zD = -1
	}, this.resize = function() {
		var iL, hI, fV, zI, zJ, sU;
		oh && (cu = vz(cu = a0 ? Math.floor(.69 * ck) : Math.floor(.5 * ck), t8(a1 - 2 * kd, 10)), cu = vz(cu, Math.floor(3.57 * t8(a2 - 2 * kd, 3))), ez = Math.floor(.28 * cu), (dL = document.createElement("canvas")).width = cu, dL.height = ez,
			iL = dL.getContext("2d", {
				alpha: !0
			}), hI = Math.floor(1 + ez / 40), iL.clearRect(0, 0, cu, ez), iL.fillStyle = dB.iR, iL.fillRect(hI, hI, cu - 2 * hI, ez - 2 * hI), iL.lineJoin = "bevel", iL.lineWidth = 2 * hI, iL.strokeStyle = dB.dC, iL.strokeRect(hI, hI, cu -
				2 * hI, ez - 2 * hI), iL.imageSmoothingEnabled = !0, fV = cq.get(z9), zI = fV.width, zJ = fV.height, sU = (21 === z9 ? .666 : 1) * ty * ez / zJ, iL.setTransform(sU, 0, 0, sU, Math.floor((cu - sU * zI) / 2), Math.floor((ez -
				sU * zJ) / 2)), iL.drawImage(fV, 0, 0), iL.setTransform(1, 0, 0, 1, Math.floor(cu - zB * ez - zA * ez - hI), Math.floor(hI + zA * ez)),
			function(iL, bU) {
				iL.lineWidth = Math.floor(1 + ez / 80), iL.strokeStyle = dB.dC, iL.beginPath(), iL.moveTo(0, 0), iL.lineTo(bU, bU), iL.moveTo(0, bU), iL.lineTo(bU, 0), iL.stroke()
			}(iL, Math.floor(zB * ez)), iL.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(aR, zF, zG, zH) {
		oh || zH && zC || (z9 = zG ? 21 : aR ? 1 : 2, oh = zC = !0, this.resize(), mY.kk(), cf.vu(), hi = aL.aM, -1 === this.zD && (this.zD = aL.fU()), vS = zF ? 1 : 0)
	}, this.fF = function() {
		!oh || 1 <= vS || (vS = 1 < (vS += 5e-4 * (aL.aM - hi)) ? 1 : vS, hi = aL.aM, aL.cx = !0)
	}, this.cz = function(hD, hE) {
		return !(!oh || vS <= 0 || (hD -= Math.floor((hL - cu) / 2), hE -= d6(), hD < 0) || hE < 0 || cu < hD || ez < hE || (cu - ez / 3 < hD && hE < ez / 3 && (oh = !1, aL.cx = !0), 0))
	}, this.d7 = function() {
		!oh || vS <= 0 || (d8.globalAlpha = vS, d8.drawImage(dL, Math.floor((hL - cu) / 2), d6()), d8.globalAlpha = 1)
	}
}

function zL() {
	this.zM = !1, this.iJ = !1, this.pm = !1, this.zN = [0, 0, 0, 0], this.zO = function() {
		var hI, hJ, hK, hM;
		this.pm = this.pm || this.iJ, (this.iJ || this.zM && this.pm) && (hI = i8.zP[0], hJ = i8.zP[1], hK = i8.zP[2], hM = i8.zP[3], hI = hI < this.zN[0] ? this.zN[0] : hI, hJ = hJ < this.zN[1] ? this.zN[1] : hJ, hK = hK > this.zN[2] ? this.zN[
			2] : hK, hM = hM > this.zN[3] ? this.zN[3] : hM, this.iJ = !1, this.zM = !1, hI === this.zN[0] && hJ === this.zN[1] && hK === this.zN[2] && hM === this.zN[3] ? this.pn() : hI <= hK && hJ <= hM && q9.putImageData(qA, 0, 0, hI,
			hJ, hK - hI + 1, hM - hJ + 1))
	}, this.pn = function() {
		this.pm && this.zN[2] >= this.zN[0] && this.zN[3] >= this.zN[1] && q9.putImageData(qA, 0, 0, this.zN[0], this.zN[1], this.zN[2] - this.zN[0] + 1, this.zN[3] - this.zN[1] + 1), this.pm = !1
	}, this.nb = function() {
		this.zN[2] >= this.zN[0] && this.zN[3] >= this.zN[1] && q9.putImageData(qA, 0, 0, this.zN[0], this.zN[1], this.zN[2] - this.zN[0] + 1, this.zN[3] - this.zN[1] + 1), this.pm = !1
	}, this.b = function() {
		var hD, hE;
		this.zM = !1, this.iJ = !1, this.pm = !1, this.zN[0] = az.b0, this.zN[1] = az.b1, this.zN[2] = this.zN[3] = 0;
		loop: for (hD = 1; hD < az.b0 - 1; hD++)
			for (hE = az.b1 - 2; 1 < hE; hE--)
				if (1 === zQ[bW.m5(hD, hE) + 2]) {
					this.zN[0] = hD;
					break loop
				} loop: for (hE = 1; hE < az.b1 - 1; hE++)
			for (hD = az.b0 - 2; 1 < hD; hD--)
				if (1 === zQ[bW.m5(hD, hE) + 2]) {
					this.zN[1] = hE;
					break loop
				} loop: for (hD = az.b0 - 2; 0 < hD; hD--)
			for (hE = az.b1 - 2; 1 < hE; hE--)
				if (1 === zQ[bW.m5(hD, hE) + 2]) {
					this.zN[2] = hD;
					break loop
				} loop: for (hE = az.b1 - 2; 0 < hE; hE--)
			for (hD = az.b0 - 2; 1 < hD; hD--)
				if (1 === zQ[bW.m5(hD, hE) + 2]) {
					this.zN[3] = hE;
					break loop
				}
	}
}

function zR() {
	this.oh = !1, this.sk = null, this.zS = 0, this.cu = null, this.ez = null, this.zT = .013, this.zU = .022, this.zV = .025;
	this.zX = 3, this.zY = 1.2, this.zZ = .2, this.za = .235, this.zb = .9, this.zc = .08;
	var ze, zd = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"],
		zf = [-1e6, -1e6];
	this.position = [0, 0], this.zh = [0, 0], this.b = function() {
		this.sk = [null, null], this.oh = !1, this.zS = 0
	}, this.l = function(id) {
		this.oh = !0, this.resize(), this.zS = id, this.cp(), ot.l(!1), aL.cx = !0
	}, this.fF = function() {
		this.oh && this.cp()
	}, this.cp = function() {
		aL.aM - 12e4 >= zf[this.zS] && (zf[this.zS] = aL.aM, this.zh = [0, 0], gB.xI(0, 1 + this.zS)) && jJ.zi(0, this.zS)
	}, this.resize = function() {
		if (this.oh) {
			var aE;
			for (this.cu = this.zj(a0 ? .85 : .66, .75, a1, a2), this.ez = Math.floor(this.cu / .75), aE = 1; 0 <= aE; aE--) this.sk[aE] && (this.sk[aE][4] = cn + Math.floor(this.sk[aE][5] * this.ez / 10) + co);
			ze = cn + Math.floor(.1 * this.ez) + co
		}
	}, this.zj = function(ci, dK, cu, ez) {
		return cu < dK * ez ? Math.floor(ci * cu) : Math.floor(dK * ci * ez)
	}, this.zk = function(cm, zl, zm, vA, zn, zo, yV) {
		this.position[cm] = yV;
		for (var vP, dF = zl.length, ct = cn + Math.floor(zn * this.ez / 10) + co, ad = (this.zp(zl, ct, zo * this.cu), [
				[], dF, -1, vA, ct, zn, 10 * yV
			]), aE = 0; aE < dF; aE++) vP = {
			name: zl[aE].name,
			value: zl[aE].mn / zm,
			colorIndex: zl[aE].colorIndex
		}, ad[0].push(vP);
		this.sk[cm] = ad, this.zq(cm);
		zo = this.sk[cm][0][0].name;
		1 === cm && (zo = "[" + zo + "]"), 0 === yV && zr.cl(cm, zo), aL.cx = !0
	}, this.zq = function(aE) {
		this.sk[aE][0].sort(function(ej, cV) {
			return cV.value - ej.value
		})
	}, this.zs = function(cm, name, zt, zu) {
		if (this.sk && this.sk[cm]) {
			var aE, td = !1;
			if (0 === cm) {
				for (aE = 0; aE < this.sk[cm][0].length; aE++)
					if (name === this.sk[cm][0][aE].name && zt > .99 * this.sk[cm][0][aE].value && zt < 1.01 * this.sk[cm][0][aE].value) {
						this.sk[cm][0][aE].value = zu, td = !0;
						break
					} td || this.sk[cm][0].push({
					name: name,
					value: zu
				})
			} else {
				for (aE = 0; aE < this.sk[cm][0].length; aE++)
					if (name === this.sk[cm][0][aE].name) {
						this.sk[cm][0][aE].value += 32 < this.sk[cm][0][aE].value ? (64 - this.sk[cm][0][aE].value) / 256 : .25, this.sk[cm][0][aE].value *= 1 / (383 / 384), td = !0;
						break
					} for (aE = 0; aE < this.sk[cm][0].length; aE++) this.sk[cm][0][aE].value *= 383 / 384;
				td || this.sk[cm][0].push({
					name: name,
					value: .25
				})
			}
			this.zq(cm)
		}
	}, this.zp = function(zl, ct, cw) {
		for (var aE = zl.length - 1; 0 <= aE; aE--)
			for (; 3 < zl[aE].name.length && cv.measureText(zl[aE].name, ct) > cw;) zl[aE].name = zl[aE].name.substring(0, zl[aE].name.length - 4) + "..."
	}, this.cz = function(du, dv) {
		return !!this.oh && (du -= (hL - this.cu) / 2, dv -= (d3 - this.ez) / 2, du < 0 || du > this.cu || dv < 0 || dv > this.ez ? (this.oh = !1, 0 === aT.ov() && ot.l(!0), aL.cx = !0) : (dv = dv < .3 * this.ez ? 1 : dv < .85 * this.ez ? (dv = (
			0 === this.zS ? 14.1 : 3) * (dv - .3 * this.ez) / (.55 * this.ez), Math.floor(1 + dv * dv)) : 0 === this.zS ? 200 : 10, du < this.cu / 2 ? this.zh[this.zS] = -dv : this.zh[this.zS] = dv, zf[this.zS] + 50 > aL.aM || (zf[
			this.zS] = aL.aM, gB.xI(0, 1 + this.zS) && jJ.zi(0, this.zS)), !0))
	}, this.d7 = function() {
		var hI, hJ, mf, mg, zv, zw, pP, pQ;
		this.oh && (hI = (hL - this.cu) / 2, hJ = (d3 - this.ez) / 2, mf = this.zT * this.cu, mg = this.zX * mf, zv = this.zU * this.cu, zw = this.zY * zv, pP = this.zV * this.cu, pQ = Math.floor(.25 * this.ez), d8.setTransform(1, 0, 0, 1, hI,
				hJ), d8.fillStyle = 0 === this.zS ? dB.ix : dB.iv, d8.fillRect(0, 0, this.cu, pQ), d8.fillStyle = dB.iQ, d8.fillRect(0, pQ, this.cu, this.ez - pQ), d8.fillStyle = dB.dC, d8.font = ze, d8.textBaseline = d9, d8.textAlign = dA,
			d8.fillText(zd[this.zS], Math.floor(this.cu / 2), Math.floor(.135 * this.ez)), d8.font = cn + Math.floor(.025 * this.ez) + co, d8.fillText(zd[this.zS + 2], Math.floor(this.cu / 2), Math.floor(.2125 * this.ez)), d8.beginPath(), d8
			.moveTo(this.cu / 4, 0), d8.lineTo(this.cu / 2 - mf, 0), d8.lineTo(this.cu / 2, -mg), d8.lineTo(this.cu / 2 + mf, 0), d8.lineTo(this.cu - zv, 0), d8.lineTo(this.cu + zw, -zw), d8.lineTo(this.cu, zv), d8.lineTo(this.cu, this.ez /
				2 - mf), d8.lineTo(this.cu + mg, this.ez / 2), d8.lineTo(this.cu, this.ez / 2 + mf), d8.lineTo(this.cu, this.ez - zv), d8.lineTo(this.cu + zw, this.ez + zw), d8.lineTo(this.cu - zv, this.ez), d8.lineTo(this.cu / 2 + mf, this
				.ez), d8.lineTo(this.cu / 2, this.ez + mg), d8.lineTo(this.cu / 2 - mf, this.ez), d8.lineTo(zv, this.ez), d8.lineTo(-zw, this.ez + zw), d8.lineTo(0, this.ez - zv), d8.lineTo(0, this.ez / 2 + mf), d8.lineTo(-mg, this.ez / 2),
			d8.lineTo(0, this.ez / 2 - mf), d8.lineTo(0, zv), d8.lineTo(-zw, -zw), d8.lineTo(zv, 0), d8.lineTo(this.cu / 4, 0), d8.lineTo(this.cu / 4, pP), d8.lineTo(pP, pP), d8.lineTo(pP, this.ez - pP), d8.lineTo(this.cu - pP, this.ez - pP),
			d8.lineTo(this.cu - pP, pP), d8.lineTo(this.cu / 4, pP), d8.fill(), this.sk[this.zS] && this.zx(pQ), this.zy(pQ), d8.setTransform(1, 0, 0, 1, 0, 0))
	}, this.zy = function(pQ) {
		var mf = t8(2, Math.floor(.06 * this.cu)),
			ty = (mf -= mf % 2, t8(2, Math.floor(.01 * this.cu))),
			pQ = (ty -= ty % 2, Math.floor(.82 * pQ));
		d8.fillRect(mf, pQ, mf, ty), d8.fillRect(this.cu - mf - mf, pQ, mf, ty), d8.fillRect(Math.floor(this.cu - mf - mf + (mf - ty) / 2), Math.floor(pQ - (mf - ty) / 2), ty, mf)
	}, this.zx = function(pQ) {
		var hE;
		d8.font = this.sk[this.zS][4];
		for (var aE = this.sk[this.zS][1] - 1; 0 <= aE; aE--) d8.textAlign = ui, hE = Math.floor(this.zc * this.ez + pQ + aE * ((1 - 2 * this.zc) * this.ez - pQ) / 9), d8.fillText(this.sk[this.zS][0][aE].value.toFixed(this.sk[this.zS][3]), Math
			.floor(this.zb * this.cu), hE), d8.fillText(aE + 1 + this.sk[this.zS][6] + ".", Math.floor(this.zZ * this.cu), hE), d8.textAlign = tG, d8.fillText(this.sk[this.zS][0][aE].name, Math.floor(this.za * this.cu), hE)
	}
}

function zz() {
	var hD, hE, ez, a00, a01, a02, a03, a04, a05, cu, a06, a07;
	this.oh = !1, this.b = function(v, a08) {
		if (13 <= q && q < 18) return a08 ? void(a06 = v) : a06 !== v ? void 0 : void n.saveString(200, v);
		a08 && ((d4.sk[1].nR.oh || d4.sk[2].nR.oh) && d4.ow(), ot.l(!1), a06 = v, (a07 = document.createElement("a")).appendChild(document.createTextNode(a06)), this.oh = !0, a07.title = a06, a07.target = "_blank", a07.href = a06, a07.style
			.textAlign = "center", a07.style.color = dB.dC, a07.style.position = "absolute", a07.style.padding = "0px", a07.style.margin = "0px", this.resize(), document.body.appendChild(a07), aL.cx = !0)
	}, this.kk = function() {
		return !(!this.oh || (document.body.removeChild(a07), this.oh = !1))
	}, this.cz = function(du, dv) {
		return !!this.oh && ((du < hD || dv < hE || hD + cu < du || hE + ez < dv || hD + cu - a00 < du && dv < hE + a00) && (aL.cx = !0, this.oh = !1, document.body.removeChild(a07), 0 === aT.ov()) && ot.l(!0), !0)
	}, this.resize = function() {
		var ct, a09;
		this.oh && (a04 = Math.floor(.8 * (a0 ? a2 < a1 ? .6 : .55 : .4) * ck), a00 = Math.floor(.15 * a04), a01 = Math.floor(.35 * a00), a02 = Math.floor(.5 * a00), a03 = Math.floor(2.5 * a02), ez = a00 + a01 + 3 * a02, ct = cn + Math.floor(
			a01 / kn) + co, a05 = Math.floor(kn * cv.measureText(a06, ct)), a09 = cu = (a04 < a05 ? a05 : a04) + 2 * a03, cu = Math.min(cu, a1 - 2 * (a0 ? 2 : 1) * kd), ct = cn + Math.floor(cu / a09 * a01 / kn) + co, a05 = Math.floor(kn *
			cv.measureText(a06, ct)), hD = Math.floor((hL - cu) / 2), hE = Math.floor((d3 - ez) / 2), a07.style.font = ct, a07.style.top = Math.floor((hE + 1.4 * a02 + a00) / kn) + "px", a07.style.left = Math.floor((hD + (cu - a05) / 2) /
			kn) + "px")
	}, this.d7 = function() {
		this.oh && (d8.fillStyle = dB.iR, d8.fillRect(hD, hE + a00, cu, ez - a00), d8.fillStyle = dB.j9, d8.fillRect(hD, hE, cu, a00), d8.fillStyle = dB.dC, d8.lineWidth = pR, d8.strokeStyle = dB.dC, d8.strokeRect(hD, hE, cu, ez), d8.fillRect(hD,
			hE + a00, cu, pR), d8.font = cn + Math.floor(.48 * a00) + co, d8.textAlign = dA, d8.textBaseline = d9, d8.fillText("You are leaving Territorial.io!", Math.floor(hD + (cu - .5 * a00) / 2), Math.floor(hE + .55 * a00)), cK.si(
			Math.floor(hD + cu - .8 * a00), Math.floor(hE + .25 * a00), Math.floor(.5 * a00)), d8.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function a0A() {
	var mA, sQ, hD = [0, 0, 0, 0, 0],
		hE = [0, 0, 0, 0, 0],
		i4 = [1, 1, 1, 1, 1],
		aR = [!0, !0, !0, !0, !0],
		fV = (this.ai = [!0, !0, !0, !0, !0], null);
	this.a0B = function(rn, a0C) {
		fV = rn, aR = a0C, sQ = [qV.a0D, qV.a0E, qV.a0F, qV.a0G, qV.a0H], this.b()
	}, this.b = function() {
		if (cq.cr()) {
			var aE, mf = Math.floor((a0 ? .261 : .195) * ck),
				mg = Math.floor(.9 * mf),
				ty = Math.floor(.17 * mg);
			if (mA = a0 ? 2 * kd : kd, i4[0] = mf / fV[0].width, i4[1] = mg / fV[1].width, i4[2] = ty / fV[2].height, i4[3] = ty / fV[3].height, i4[4] = ty / fV[4].height, i4[3] *= 1.07, hD[0] = mA, hD[1] = mA, hD[2] = mA, hD[3] = mA, hD[4] =
				Math.floor(2 * mA + i4[3] * fV[3].width), hE[0] = mA, hE[1] = hE[0] + mA + i4[0] * fV[0].height, hE[2] = hE[1] + mA + i4[1] * fV[1].height, hE[3] = hE[2] + mA + i4[2] * fV[2].height, hE[4] = hE[3], !aR[0])
				for (aE = 0; aE < 5; aE++) hE[aE] -= i4[0] * fV[0].height + mA;
			if (!aR[1])
				for (aE = 2; aE < 5; aE++) hE[aE] -= i4[1] * fV[1].height + mA
		}
	}, this.oh = function() {
		return !(7 === aT.ov() && a0)
	}, this.cz = function(du, dv, a08) {
		if (fV && this.oh())
			for (var aE = aR.length - 1; 0 <= aE; aE--)
				if (aR[aE] && this.ai[aE] && hD[aE] < du && hE[aE] < dv && du < hD[aE] + i4[aE] * fV[aE].width && dv < hE[aE] + i4[aE] * fV[aE].height) return os.b(sQ[aE], a08), !0;
		return !1
	}, this.d7 = function() {
		if (fV && this.oh()) {
			var aE;
			for (d8.imageSmoothingEnabled = !0, aE = 0; aE < 5; aE++) aR[aE] && this.ai[aE] && (d8.setTransform(i4[aE], 0, 0, i4[aE], hD[aE], hE[aE]), d8.drawImage(fV[aE], 0, 0));
			d8.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function rR() {
	this.id = 0, this.u8 = 0;
	var a0I = null,
		a0J = !1;
	this.b = function() {
		var sN, ae, ag;
		n ? this.id = 1 : m ? this.id = 2 : (function() {
			try {
				if (!(a0I = window.localStorage)) return a0I = null;
				a0I.setItem("testLS", "1"), a0I.removeItem("testLS")
			} catch (error) {
				return a0I = null
			}
			a0J = !0
		}(), sN = this, a0J && (ae = Number(a0I.getItem("zt0")), ag = Number(a0I.getItem("zt1")), ae && ag ? (sN.id = ae, sN.u8 = Math.floor(Date.now() / 3e5) - ag) : (a0I.setItem("zt0", "" + Math.floor(3 + Math.random() * (Math.pow(2,
			20) - 3))), a0I.setItem("zt1", "" + Math.floor(Date.now() / 3e5)))))
	}
}

function qm() {
	var zS, a0O, a0P;

	function a0U(aE) {
		var button = qI.rb[aE],
			hD = button.hD,
			hE = button.hE,
			cu = button.cu,
			ez = button.ez;
		d8.fillStyle = button.a0S, d8.fillRect(hD, hE, cu, ez), aE === zS && (d8.fillStyle = a0P, d8.fillRect(hD, hE, cu, ez)), d8.lineWidth = pR, d8.strokeStyle = a0O, d8.strokeRect(hD, hE, cu, ez),
			function(button) {
				var hD = button.hD,
					hE = button.hE,
					cu = button.cu,
					ez = button.ez;
				d8.textAlign = dA, d8.textBaseline = d9, d8.font = button.font, d8.fillStyle = a0O, d8.fillText(button.u4, Math.floor(hD + cu / 2), Math.floor(hE + ez / 2 + .1 * button.cs))
			}(button)
	}
	this.cu = 0, this.ez = 0, this.hE = 0, this.mA = 0, this.b = function() {
		zS = -1, a0O = dB.dC, a0P = "rgba(255,255,255,0.16)", this.rb = new Array(7), this.ez = Math.floor((a0 ? .123 : .093) * ck), this.cu = Math.floor((a0 ? 3.96 : 4.2) * this.ez), this.mA = Math.floor(.025 * this.cu);
		var a0Q = Math.floor(.26 * this.ez),
			a0R = cn + a0Q + co;
		this.rb[0] = {
			hD: 0,
			hE: 0,
			cu: Math.floor(.6 * this.cu - this.mA / 2),
			ez: this.ez,
			u4: "Multiplayer",
			font: a0R,
			a0S: "rgba(22,88,22,0.8)",
			cs: a0Q
		}, a0Q = Math.floor(.18 * this.ez), this.rb[1] = {
			hD: 0,
			hE: 0,
			cu: this.cu - this.rb[0].cu - this.mA,
			ez: this.ez,
			u4: "Single Player",
			font: cn + a0Q + co,
			a0S: "rgba(22,88,88,0.8)",
			cs: a0Q
		}, this.rb[2] = {
			hD: 0,
			hE: 0,
			cu: this.cu,
			ez: Math.floor(.3 * this.ez),
			u4: "",
			font: this.rb[1].font,
			a0S: "rgba(100,0,0,0.8)",
			cs: this.rb[1].cs
		}, this.rb[3] = {
			hD: 0,
			hE: 0,
			cu: this.cu,
			ez: this.ez,
			u4: "Back",
			font: this.rb[0].font,
			a0S: "rgba(0,0,0,0.8)",
			cs: this.rb[0].cs
		}, this.rb[4] = {
			hD: 0,
			hE: 0,
			cu: this.cu,
			ez: Math.floor(.3 * this.ez),
			u4: "The game was updated!",
			font: this.rb[1].font,
			a0S: "rgba(100,0,0,0.8)",
			cs: this.rb[1].cs
		}, this.rb[5] = {
			hD: 0,
			hE: 0,
			cu: this.rb[0].cu,
			ez: Math.floor(.8 * this.ez),
			u4: "Reload",
			font: this.rb[0].font,
			a0S: "rgba(0,100,0,0.8)",
			cs: this.rb[0].cs
		}, this.rb[6] = {
			hD: 0,
			hE: 0,
			cu: this.rb[1].cu,
			ez: this.rb[5].ez,
			u4: "Back",
			font: this.rb[0].font,
			a0S: "rgba(0,0,0,0.8)",
			cs: this.rb[0].cs
		}, this.xQ()
	}, this.xQ = function() {
		this.hE = Math.floor(.54 * d3), this.rb[0].hD = Math.floor(.5 * hL - .5 * this.cu), this.rb[1].hD = this.rb[0].hD + this.rb[0].cu + this.mA, this.rb[2].hD = this.rb[3].hD = this.rb[0].hD, this.rb[4].hD = this.rb[5].hD = this.rb[0].hD,
			this.rb[6].hD = this.rb[1].hD, this.rb[0].hE = Math.floor(.54 * d3), this.rb[1].hE = this.rb[0].hE, this.rb[2].hE = Math.floor((d3 - this.rb[2].ez - this.rb[3].ez - this.mA) / 2), this.rb[3].hE = this.rb[2].hE + this.rb[2].ez + this
			.mA, this.rb[4].hE = Math.floor((d3 - this.rb[4].ez - this.rb[5].ez - this.mA) / 2), this.rb[5].hE = this.rb[6].hE = this.rb[4].hE + this.rb[4].ez + this.mA
	}, this.a0T = function() {
		a0U(0), a0U(1)
	}, this.a0V = function() {
		a0U(2), a0U(3)
	}, this.a0W = function() {
		a0U(4), a0U(5), a0U(6)
	}, this.oD = function(hD, hE, gf) {
		var aE = -1;
		return 0 === aT.ov() ? aE = this.or(hD, hE, 0, 2) : 3 === aT.ov() ? aE = this.or(hD, hE, 3, 1) : 5 === aT.ov() && (aE = this.or(hD, hE, 5, 2)), zS !== aE && (zS = aE, gf) && (aL.cx = !0), -1 !== aE && (oj.ok(), !0)
	}, this.or = function(hD, hE, a0X, dF) {
		for (var aE = a0X; aE < a0X + dF; aE++)
			if (hD >= this.rb[aE].hD && hE >= this.rb[aE].hE && hD <= this.rb[aE].hD + this.rb[aE].cu && hE <= this.rb[aE].hE + this.rb[aE].ez) return aE;
		return -1
	}
}

function a0Z() {
	function a0f(rq) {
		return rq < 0 ? 0 : 255 < rq ? 255 : Math.floor(rq)
	}
	this.cu = 0, this.ez = 0, this.oh = !1, this.a0a = 0, this.mA = 0, this.uP = 0, this.a00 = 0, this.a0b = 0, this.a0c = 0, this.a0d = 0, this.colors = null, this.b = function() {
		this.oh = !0, this.a0a = 0, this.resize()
	}, this.resize = function() {
		this.oh && (a1 < 1.4 * a2 ? this.cu = Math.floor((a0 ? .94 : .43) * a1) : (this.ez = Math.floor((a0 ? .88 : .43) * a2), this.cu = Math.floor(1.4 * this.ez)), this.ez = this.cu / 1.4, this.mA = this.cu / 32, this.a00 = Math.floor(.25 *
			this.ez), this.a0b = (this.ez - this.a00 - 3 * this.mA) / 2, this.a0c = this.cu - 3 * this.mA - this.a0b, this.a0d = (this.ez - this.a00 - 4 * this.mA) / 3)
	}, this.a0e = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var v = a5().split("");
		if (v.length < 6)
			for (var cV = 2; 0 <= cV; cV--) this.colors[0][cV] = a0f(256 * Math.random());
		else
			for (var aE = 2; 0 <= aE; aE--) this.colors[0][aE] = a0f(4 * (10 * parseInt(v[2 * aE]) + parseInt(v[2 * aE + 1])));
		this.a0g()
	}, this.a0h = function() {
		return [bJ(this.colors[0][0], 4), bJ(this.colors[0][1], 4), bJ(this.colors[0][2], 4)]
	}, this.oG = function(d0, d1, deltaY) {
		var hI = (hL - this.cu) / 2;
		d1 -= (d3 - this.ez) / 2 + this.a00, (d0 -= hI) < 0 || d1 < 0 || d0 >= this.cu || d1 >= this.ez - this.a00 || (hI = Math.floor(3 * d1 / (this.ez - this.a00)), this.colors[this.uP][hI] = a0f(this.colors[this.uP][hI] + (deltaY < 0 ? 1 : -
			1) * Math.max(Math.abs(.05 * deltaY), 1)), aL.cx = !0)
	}, this.cz = function(d0, d1) {
		this.a0a = 0;
		var hI = (hL - this.cu) / 2;
		return d1 -= (d3 - this.ez) / 2, (d0 -= hI) < 0 || d1 < 0 || d0 >= this.cu - 1 || d1 >= this.ez - 1 || d0 > this.cu - (.4 * this.a00 + 3 * this.mA) && d1 < this.a00 ? (this.oh = !1, 0 === aT.ov() && ot.l(!0), !(aL.cx = !0)) : d0 < this
			.mA || d1 < this.mA + this.a00 || d0 >= this.cu || d1 >= this.ez - this.mA || (d0 < this.mA + this.a0b ? (d1 < this.mA + this.a00 + this.a0b && 0 !== this.uP && (this.uP = 0, aL.cx = !0), !0) : d0 < this.mA + this.a0b || (d0 -= 2 *
				this.mA + this.a0b, d1 < this.mA + this.a00 + this.a0d ? (this.a0a = 1, this.colors[this.uP][0] = a0f(256 * d0 / this.a0c), aL.cx = !0) : d1 < 2 * this.mA + this.a00 + this.a0d || (d1 < 2 * this.mA + this.a00 + 2 * this.a0d ?
					(this.a0a = 2, this.colors[this.uP][1] = a0f(256 * d0 / this.a0c), aL.cx = !0) : !(d1 >= 3 * this.mA + this.a00 + 2 * this.a0d) || (this.a0a = 3, this.colors[this.uP][2] = a0f(256 * d0 / this.a0c), aL.cx = !0))))
	}, this.a0g = function() {
		for (var cV = 2; 0 <= cV; cV--) this.colors[0][cV] = a0f(this.colors[0][cV])
	}, this.a0i = function() {
		for (var aR, v = "", aE = 0; aE < 3; aE++)(aR = bJ(this.colors[0][aE], 4)) < 10 && (v += "0"), v += aR.toString();
		return v
	}, this.oD = function(d0) {
		0 !== this.a0a && (d0 -= 2 * this.mA + this.a0b + (hL - this.cu) / 2, this.colors[this.uP][this.a0a - 1] = a0f(256 * d0 / this.a0c), aL.cx = !0)
	}, this.a0j = function() {
		0 < this.a0a && (this.a0a = 0, this.a0g(), hR.a0k(), aL.cx = !0)
	}, this.d7 = function() {
		var hI = (hL - this.cu) / 2,
			hJ = (d3 - this.ez) / 2;
		d8.setTransform(1, 0, 0, 1, hI, hJ), d8.fillStyle = dB.iR, d8.fillRect(0, this.a00, this.cu, this.ez - this.a00), d8.fillStyle = dB.ia, d8.fillRect(0, 0, this.cu, this.a00), d8.fillStyle = dB.dC, d8.lineWidth = pR, d8.strokeStyle = dB.dC,
			d8.strokeRect(-1, -1, this.cu + 2, this.ez + 2), d8.fillRect(0, this.a00, this.cu, pR), d8.font = cn + Math.floor(.31 * this.a00) + co, d8.textBaseline = d9, d8.textAlign = dA, d8.fillText("Choose Your Nation's Color!", Math.floor((
				this.cu - this.mA - .4 * this.a00) / 2), Math.floor(.55 * this.a00)), this.a0l(0), d8.lineWidth = pR, this.a0m(0), this.a0m(1), this.a0m(2), cK.si(Math.floor(hI + this.cu - .4 * this.a00 - this.mA), Math.floor(hJ + .3 * this.a00),
				Math.floor(.4 * this.a00)), d8.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a0l = function(aE) {
		var dO = this.colors[aE][0],
			pN = this.colors[aE][1],
			aE = this.colors[aE][2];
		d8.fillStyle = "rgb(" + dO + "," + pN + "," + aE + ")", d8.fillRect(this.mA, this.a00 + this.mA, this.a0b, 2 * this.a0b + this.mA), d8.lineWidth = pR, d8.strokeStyle = dB.dC, d8.strokeRect(this.mA, this.a00 + this.mA, this.a0b, 2 * this
			.a0b + this.mA), d8.fillStyle = dO + pN + aE < 306 && pN < 150 ? dB.dC : dB.hP, d8.font = cn + Math.floor(.32 * this.a0d) + co, d8.textAlign = dA, d8.textBaseline = d9, d8.rotate(-Math.PI / 2), d8.fillText("National Color", Math
			.floor(-1.5 * this.mA - this.a00 - this.a0b), Math.floor(this.mA + .5 * this.a0b)), d8.rotate(Math.PI / 2)
	}, this.a0m = function(aE) {
		d8.fillStyle = "rgb(" + (0 === aE ? 150 : 2 === aE ? 30 : 0) + "," + (1 === aE ? 130 : 2 === aE ? 30 : 0) + "," + (2 === aE ? 220 : 0) + ")", d8.fillRect(2 * this.mA + this.a0b, this.a00 + this.mA + aE * (this.mA + this.a0d), Math.floor(
				this.colors[this.uP][aE] * this.a0c / 255), this.a0d), d8.strokeStyle = dB.dC, d8.strokeRect(2 * this.mA + this.a0b, this.a00 + this.mA + aE * (this.mA + this.a0d), this.a0c, this.a0d), d8.fillStyle = dB.dC, d8.font = cn + Math
			.floor(.32 * this.a0d) + co, d8.textBaseline = d9, d8.textAlign = tG, d8.fillText((0 === aE ? "Red: " : 1 === aE ? "Green: " : "Blue: ") + this.colors[0][aE].toString(), 3 * this.mA + this.a0b, Math.floor(this.a00 + this.mA + aE * (
				this.mA + this.a0d) + .53 * this.a0d))
	}
}

function qn() {
	var a0n, a0o, uu, v5, w2, a0p, a0q, a0r, a0s, ct, cs, hi, a0t, a0v, a0u = 0;

	function a0y() {
		return gB.a0z[(a0t + a0u) % gB.a10]
	}

	function a0w() {
		a0t++, hi = aL.aM, gB.xI(a0y(), 4) && (a0v = !0, jJ.a11(a0y()))
	}

	function a14() {
		0 === a0t ? qK.a16(3249) : (a0t === gB.a10 - 1 && (a0t = -1), a0w())
	}

	function a1D(hE, x3, a1C) {
		var hI = Math.floor((hL - v5) / 2) + a0q,
			hK = hI + Math.floor(a1C * (v5 - 2 * a0q));
		d8.lineWidth = x3, d8.beginPath(), d8.moveTo(hI, hE), d8.lineTo(hK, hE), d8.lineTo(Math.floor(hI - a0q + a1C * v5), hE + uu), d8.lineTo(hI - a0q, hE + uu), d8.closePath()
	}
	this.b = function() {
		aT.setState(6), a0n = 0, a0o = 1, a0r = "rgba(0,220,120,0.4)", a0s = "rgba(0,0,0,0.8)", this.resize(), aL.cx = !0, a0t = 0, a0v = !1, a0w()
	}, this.resize = function() {
		v5 = Math.floor((a0 ? .5 : .25) * ck), w2 = v5 + 12, uu = Math.floor(.125 * v5), a0q = 3 * uu, a0p = Math.floor(.225 * v5), cs = Math.floor(.3 * uu), ct = uk + cs + co
	}, this.a0x = function(ej) {
		a0u = ej
	}, this.a12 = function(a13) {
		a13 === a0y() && (a0v = !1, a14())
	}, this.xK = function(a13) {
		6 !== aT.ov() || a0v || (hi = aL.aM, a0v = !0, jJ.a11(a13))
	}, this.cz = function(hD, hE) {
		var hI = Math.floor((hL - w2) / 2),
			hJ = Math.floor(.5 * (d3 - d2 - uu - a0p)) + uu + d2;
		return hI < hD && hD < hI + w2 && hJ < hE && hE < hJ + a0p && (this.a17(), qI.oD(hD, hE, !1), !0)
	}, this.a17 = function() {
		gB.a18(3260), qG.b(), aL.cx = !0
	}, this.fF = function() {
		6 === aT.ov() && (a0v ? aL.aM > hi + 12e3 && qK.a16(3250) : aL.aM > hi + 12e3 && a14(), 100 < (a0n += .07 * a0o * (a0n < 16 ? 5 + a0n : 84 < a0n ? 105 - a0n : 17)) ? (a0n = 100, a0o = -1) : a0n < 0 && (a0n = 0, a0o = 1), a0r = "rgba(0," +
			Math.floor(190 - 1.9 * a0n) + "," + Math.floor(120 - 1.2 * a0n) + "," + (.4 + .004 * a0n) + ")", a0s = "rgba(0," + Math.floor(1.9 * a0n) + "," + Math.floor(1.2 * a0n) + "," + (.8 - .004 * a0n) + ")", aL.cx = !0)
	}, this.d7 = function() {
		var hD = Math.floor((hL - w2) / 2),
			hE = Math.floor(.5 * (d3 - d2 - uu - a0p));
		! function(title, hE, x3, a1C) {
			d8.fillStyle = a0s, a1D(hE, x3, 1), d8.fill(), d8.fillStyle = a0r, a1D(hE, x3, a1C), d8.fill(), d8.strokeStyle = dB.dC, a1D(hE, x3, 1), d8.stroke(),
				function(a1F, hE) {
					d8.textAlign = dA, d8.textBaseline = d9, d8.font = ct, d8.fillStyle = dB.dC, d8.fillText(a1F, Math.floor(.5 * hL), Math.floor(hE + .58 * uu))
				}(title, hE)
		}("Loading", hE, 3, a0n / 100),
		function(hD, hE, cu, ez, u4) {
			d8.fillStyle = dB.iP, d8.fillRect(hD, hE, cu, ez), d8.lineWidth = 3, d8.strokeStyle = dB.dC, d8.strokeRect(hD, hE, cu, ez);
			var bU = Math.floor(.3 * ez);
			d8.textAlign = dA, d8.textBaseline = d9, d8.font = uk + bU + co, d8.fillStyle = dB.dC, d8.fillText(u4, Math.floor(hD + cu / 2), Math.floor(hE + ez / 2 + .1 * bU))
		}(hD, hE + uu + d2, w2, a0p, "Back")
	}
}

function qo() {
	var j;
	this.b = function() {
		qI.b(), ot.b(), j = 0, a1G.b(), qG.b()
	}, this.setState = function(a1H) {
		j = a1H
	}, this.ov = function() {
		return j
	}, this.a1I = function() {
		0 === aT.ov() && qG.a1J(), this.setState(8), qP.a1J(), d4.ow(), d5.oh = !1, os.cz(-1e3, -1e3)
	}, this.ow = function(nz) {
		if (!az.lL) return !1;
		if (!(aL.aM < 400)) {
			if ("Enter" === nz.key || "Escape" === nz.key) {
				if (this.a1K()) return 0 === j && ot.l(!0), !0;
				if ("Enter" === nz.key) {
					if (0 === j) return qG.a1L(), !0;
					if (7 === j) return !0
				}
			}
			return !1
		}
	}, this.a1M = function() {
		return kj.oh || d5.oh || os.oh || d4.a1N()
	}, this.a1O = function() {
		d5.resize(), kj.resize(), os.resize(), d4.resize()
	}, this.a1K = function() {
		return !!os.kk() || !(!d4.ow() && (d5.oh ? d5.oh = !1 : !kj.oh || (kj.kk(), 0)))
	}, this.aU = function() {
		aL.cx = !0, 8 === j ? hu ? gb.oy(!1) : mZ.oh ? mZ.p0() : kj.oh ? kj.kk() : cK.p0() : 7 === j ? qP.a1P() : 6 === j ? qJ.a17() : 3 === j ? qK.a1Q(0, 0) : 2 === j ? fy.a1Q() : 0 !== j || this.a1K() || aJ(11)
	}, this.cz = function(hD, hE) {
		if (!a1G.cz(hD, hE) && az.lL && !os.cz(hD, hE) && !kj.cz(hD, hE) && !(6 === j && qJ.cz(hD, hE) || 2 === j && fy.cz(hD, hE) || hR.cz(hD, hE) || d5.cz(hD, hE) || a1R.cz(hD, hE, !0) || d4.cz(hD, hE, !0))) {
			if (oj.cz(hD, hE), 0 === j) qG.cz(hD, hE);
			else if (3 === j) qK.cz(hD, hE);
			else if (5 === j) qL.cz(hD, hE);
			else if (7 === j && qP.cz(hD, hE)) return;
			zr.cz(hD, hE)
		}
	}, this.oD = function(hD, hE) {
		if (hR.oD(hD, hE), !oj.xG) {
			if (a1G.oD(hD, hE)) return void oj.ok();
			if (0 <= d4.or(hD, hE)) return void oj.ok();
			if (d4.oD(hD, hE)) return void oj.ok();
			if (2 === j && fy.oD(hD, hE)) return void oj.ok();
			if (qI.oD(hD, hE, !0)) return
		}
		oj.oD(hD, hE)
	}, this.click = function(hD, hE) {
		oj.ol(), d4.a0j() || a1R.cz(hD, hE, !1) || d4.cz(hD, hE, !1)
	}, this.oG = function(hD, hE, deltaY) {
		d4.sk[1].nR.oh || (d4.sk[2].nR.oh ? d4.sk[2].nR.oG(hD, hE, deltaY) : 0 === j && oj.oG(hD, deltaY))
	}, this.a1S = function() {
		qI.xQ(), d4.xQ(), 0 === j ? (ot.resize(), oj.xQ()) : 7 === j && qP.resize(), aL.cx = !0
	}, this.d7 = function() {
		var hE, dL, dK, hD;
		8 !== j && 10 !== j && (d8.imageSmoothingEnabled = !0, this.mV(), oj.d7(), qH.d7(), hE = Math.floor(.3 * d3), dL = cq.ro("territorial.io"), dK = (dK = 1.75 * d3 / dL.width) * dL.width < .98 * hL ? .98 * hL / dL.width : dK, d8
			.globalAlpha = .15, hD = Math.floor(.5 * (hL - dK * dL.width)), hD = Math.floor(hD / dK), hE = Math.floor(hE - .5 * dL.height * dK), hE = Math.floor(hE / dK), d8.setTransform(dK, 0, 0, dK, hD, hE), d8.drawImage(dL, hD, hE), d8
			.setTransform(1, 0, 0, 1, 0, 0), d8.globalAlpha = 1, a1R.d7(), zr.d7(), d4.d7(), hR.d7(), 0 === j ? qG.d7() : 2 === j ? fy.d7() : 3 === j ? qK.d7() : 5 === j ? qL.d7() : 6 === j ? qJ.d7() : 7 === j && qP.d7(), d4.a1U(), a1G.d7(),
			d5.d7(), os.d7(), kj.d7())
	}, this.mV = function() {
		var a1W, a1V;
		az.lL ? (a1V = a1 / az.b0, a1W = a2 / az.b1, d8.setTransform(a1V = a1W < a1V ? a1V : a1W, 0, 0, a1V, Math.floor((a1 - a1V * az.b0) / 2), Math.floor((a2 - a1V * az.b1) / 2)), d8.drawImage(az.lN, 0, 0), d8.setTransform(1, 0, 0, 1, 0, 0), d8
			.fillStyle = dB.iP) : d8.fillStyle = dB.hP, d8.fillRect(0, 0, a1, a2)
	}
}

function a1X() {
	this.cu = 0, this.ez = 0, this.a1Y = 0, this.oh = !1, this.uE = 10, this.bc = .12, this.a0a = !1, this.a1Z = !1, this.a1a = !1, this.b = function() {
		this.oh = !0, this.resize(), this.a0a = !1
	}, this.resize = function() {
		this.oh && (this.cu = 1.15 * a1 < a2 ? Math.floor((a0 ? .94 : .69) * a1) : Math.floor((a0 ? .94 : .69) * a2 / 1.15), this.cu -= this.cu % this.uE, this.ez = +this.cu, this.a1Y = Math.floor(.15 * this.cu))
	}, this.cz = function(d0, d1, j) {
		var hI = (hL - this.cu) / 2;
		return d1 -= (d3 - this.ez - this.a1Y) / 2, (d0 -= hI) < 0 || d1 < 0 || d0 >= this.cu - 1 || d1 >= this.ez + this.a1Y - 1 || d0 >= this.cu - this.a1Y && d1 < this.a1Y ? (0 === j && (this.oh = !1, 0 === aT.ov() && ot.l(!0), aL.cx = !0), !
			1) : (d1 < this.a1Y || (d0 = (d0 = bJ(d0, hI = Math.floor(this.cu / this.uE)) + this.uE * bJ(d1 - this.a1Y, hI)) < 0 ? 0 : d0 >= aF.uI ? aF.uI - 1 : d0, (0 === j || 1 === j && !aF.aH[d0] || 2 === j && aF.aH[d0]) && (this.a1Z = !aF
			.aH[d0], this.a0a = !0, this.a1a = !0, aF.aH[d0] = !aF.aH[d0], aF.uY(), aL.cx = !0)), !0)
	}, this.oD = function(d0, d1) {
		this.a0a && this.cz(d0, d1, this.a1Z ? 1 : 2)
	}, this.a0j = function() {
		this.a1a && (aD(), this.a1a = !1), this.a1a = !1, this.a0a = !1
	}, this.d7 = function() {
		d8.imageSmoothingEnabled = !0;
		for (var hI = (hL - this.cu) / 2, hJ = (d3 - this.ez - this.a1Y) / 2, mf = (d8.setTransform(1, 0, 0, 1, hI, hJ), d8.fillStyle = dB.iR, d8.fillRect(0, this.a1Y, this.cu, this.ez), d8.fillStyle = dB.ie, d8.fillRect(0, 0, this.cu, this.a1Y),
					d8.fillStyle = dB.dC, d8.lineWidth = pR, d8.strokeStyle = dB.dC, d8.strokeRect(-1, -1, this.cu + 2, this.ez + this.a1Y + 2), d8.fillRect(0, this.a1Y - pR, this.cu, pR), d8.font = cn + Math.floor(.44 * this.a1Y) + co, d8
					.textAlign = dA, d8.textBaseline = d9, d8.fillText("Select Your Emojis!", Math.floor((this.cu - .725 * this.a1Y) / 2), Math.floor(.55 * this.a1Y)), Math.floor(this.cu / this.uE)), zoom = (mf - 2 * this.bc * mf) / aF.cu, aE =
				aF.uI - 1; 0 <= aE; aE--) d8.setTransform(1, 0, 0, 1, Math.floor(hI + aE % this.uE * mf), Math.floor(hJ + this.a1Y + bJ(aE, this.uE) * mf)), aF.aH[aE] && (d8.fillStyle = dB.ih, d8.fillRect(0, 0, mf, mf)), d8.setTransform(zoom, 0,
			0, zoom, Math.floor(hI + aE % this.uE * mf + this.bc * mf), Math.floor(hJ + this.a1Y + bJ(aE, this.uE) * mf + this.bc * mf)), d8.drawImage(aF.rn[aE], 0, 0);
		cK.si(Math.floor(hI + this.cu - .725 * this.a1Y), Math.floor(hJ + .275 * this.a1Y), Math.floor(.45 * this.a1Y)), d8.setTransform(1, 0, 0, 1, 0, 0), d8.imageSmoothingEnabled = !1
	}
}

function qp() {
	var a1b, ad, a1c;

	function uT() {
		var j;
		0 === (j = aT.ov()) ? qG.a1J() : 6 === j ? gB.a18(a1b) : 7 === j ? (qP.a1J(), gB.close(gB.a1d, 3240)) : 8 === j && (qD(!0), qG.a1J()), aT.setState(3), qI.xQ(), a1g(a1b), aL.cx = !0
	}

	function a1e(nz) {
		for (var aE = ad.length - 1; 0 <= aE; aE--)
			if (nz === ad[aE].code) return ad[aE].v;
		return a1c + nz
	}

	function a1g(nz) {
		qI.rb[2].u4 = a1e(nz)
	}
	this.l4 = function() {
		(ad = []).push({
			v: "No Server Response",
			code: 1006
		}), ad.push({
			v: "Account successfully saved!",
			code: 3231
		}), ad.push({
			v: "Account Error",
			code: 3232
		}), ad.push({
			v: "No Servers Found",
			code: 3249
		}), ad.push({
			v: "Thanks for the vote.",
			code: 3252
		}), ad.push({
			v: "Please accept Cookies",
			code: 3265
		}), ad.push({
			v: "Invalid Password Format",
			code: 3266
		}), ad.push({
			v: "Invalid Replay Format",
			code: 3605
		}), ad.push({
			v: "Lobby Timeout",
			code: 4207
		}), ad.push({
			v: "Invalid Username",
			code: 4214
		}), ad.push({
			v: "User already exists.",
			code: 4224
		}), ad.push({
			v: "No Client Response Error",
			code: 4229
		}), a1c = "Error "
	}, this.b = function(a13, nz) {
		a1b = nz;
		var j = aT.ov();
		if (6 === j) {
			if (4211 === nz) return void qL.b(0, 0);
			if (4214 !== nz) return void qJ.a12(a13)
		} else {
			if (7 !== j) return 8 === j ? void(a13 !== gB.oV || fx || g7.tM(a1e(nz))) : void 0;
			if (a13 !== gB.a1d) return
		}
		uT()
	}, this.a16 = function(nz) {
		a1b = nz, 8 === aT.ov() ? g7.tM(a1e(nz)) : uT()
	}, this.resize = function() {
		a1g(a1b)
	}, this.cz = function(hD, hE) {
		3 === qI.or(hD, hE, 3, 1) && this.a1Q(hD, hE)
	}, this.a1Q = function(hD, hE) {
		qG.b(), qI.oD(hD, hE, !1), aL.cx = !0
	}, this.d7 = function() {
		qI.a0V()
	}
}

function qq() {
	var input, color;
	this.oh = !1, this.ki = !1, this.b = function() {
		color = dB.iR, (input = document.createElement("INPUT")).setAttribute("type", "text"), input.setAttribute("name", "username"), input.setAttribute("id", "usernameField"), input.setAttribute("autocomplete", "username"), input.value = "",
			input.style.textAlign = "center", input.style.backgroundColor = color, input.style.borderRadius = "0", input.style.color = dB.dC, input.style.position = "absolute", input.readOnly = !1, input.addEventListener("input", function() {
				qG.a1h()
			}), input.addEventListener("focus", function() {
				ot.ki = !0
			}), input.addEventListener("blur", function() {
				ot.ki = !1
			})
	}, this.resize = function() {
		var cs, pP, pQ;
		this.oh && (pP = .3 * (cs = .22 * qI.ez / kn), pQ = pR / kn, input.style.border = pQ.toFixed(2) + "px solid " + dB.dC, input.style.font = cn + cs + co, input.style.padding = pP.toFixed(2) + "px", input.style.left = (((hL - qI.cu) / kn -
			pQ) / 2).toFixed(2) + "px", input.style.width = (qI.cu / kn - 2 * pP - pQ).toFixed(2) + "px", input.style.top = ((qI.hE - .52 * qI.ez) / kn).toFixed(2) + "px")
	}, this.get = function() {
		return input
	}, this.l = function(l) {
		this.oh !== l && ((this.oh = l) ? (this.resize(), document.body.appendChild(input)) : (this.ki = !1, document.body.removeChild(input)))
	}, this.p2 = function(a1i) {
		a1i && color === dB.iR || !a1i && color === dB.is || (color = a1i ? dB.iR : dB.is, input.style.backgroundColor = color)
	}
}

function rH() {
	var k7, a1l, a1m, a1n;
	this.a1j = 0, this.a1k = 0, this.b = function(bc) {
		var i4;
		7 === aT.ov() && (k7 = bc, a1l = 0, a1m = aL.aM + 4500, a1n = qO.a1o(k7) ? 2 : 0, aT.setState(10), d8.imageSmoothingEnabled = !0, aT.mV(), bc = cq.ro("loading"), i4 = 1, i4 = (a0 ? .396 : .25) * ck / bc.width, d8.setTransform(i4, 0, 0,
			i4, Math.floor((a1 - i4 * bc.width) / 2), Math.floor((a2 - i4 * bc.height) / 2)), d8.drawImage(bc, 0, 0), d8.setTransform(1, 0, 0, 1, 0, 0))
	}, this.gd = function() {
		0 < a1n && aL.aM > a1m && (a1n--, a1m += 4500, 0 === aL.a1q) && 0 === aL.fU() && (0 === a1n && gB.oV < gB.a1r && (gB.oV += gB.a1s), gB.xI(gB.oV, 5))
	}, this.a1t = function() {
		10 === aT.ov() && 2 <= ++a1l && (qO.a1u(k7), k7 = null)
	}
}

function rE() {
	var a1w, a1x, a1y, a1z, a20, a21, a22, a24, a25, a27, a28, a29, a2C, a2D, a2E, a2F, a2G, a23 = 48,
		a2A = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
		a2B = [0, 0, 0, 0];

	function a2J(aE, rn) {
		var aE = a22[aE].getContext("2d", {
				alpha: !0
			}),
			zoom = (aE.clearRect(0, 0, a23, a23), a23 / rn.width),
			a3 = a23 / rn.height,
			zoom = a3 < zoom ? a3 : zoom;
		aE.imageSmoothingEnabled = !0, aE.setTransform(zoom, 0, 0, zoom, Math.floor((a23 - zoom * rn.width) / 2), Math.floor((a23 - zoom * rn.height) / 2)), aE.drawImage(rn, 0, 0), aE.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a2N(fV, dO, a2Q, dM) {
		dM.beginPath(), dM.moveTo(fV, fV), dM.lineTo(fV + Math.cos(a2Q) * dO, fV + Math.cos(a2Q + 1.5 * Math.PI) * dO), dM.stroke()
	}

	function a2e() {
		if (7 === aT.ov()) {
			for (var dZ, rn, dM, zoom, a3, ej = -1, aE = a24.length - 1; 0 <= aE; aE--)
				if (null === a24[aE].dL) {
					ej = aE;
					break
				} - 1 !== ej && (null !== (dZ = a2U(a24[ej].a2Y, a24[ej].a2Z)) ? a24[ej].dL = dZ : (dZ = {
					b0: az.b0,
					b1: az.b1,
					lN: az.lN,
					lJ: az.lJ,
					lK: az.lK,
					lO: az.lO,
					ll: az.ll,
					a2V: az.a2V
				}, az.l4(a24[ej].a2Y, a24[ej].a2Z), az.lM.a2f(), (rn = document.createElement("canvas")).width = 128, rn.height = 128, dM = rn.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / az.b0) < (a3 = 128 / az.b1) && (zoom = a3), dM.imageSmoothingEnabled = !0, dM.setTransform(zoom, 0, 0, zoom, (128 - zoom * az.b0) / 2, (128 - zoom * az.b1) / 2), dM.drawImage(az.lN, 0, 0), az.b0 = dZ.b0, az
				.b1 = dZ.b1, az.lN = dZ.lN, az.lJ = dZ.lJ, az.lK = dZ.lK, az.lO = dZ.lO, az.ll = dZ.ll, az.a2V = dZ.a2V, a24[ej].dL = rn), aL.cx = !0)
		}
	}

	function a2U(a2Y, a2Z) {
		for (var aE = a24.length - 1; 0 <= aE; aE--)
			if (null !== a24[aE].dL && a24[aE].a2Y === a2Y && a24[aE].a2Z === a2Z) return a24[aE].dL;
		return null
	}
	this.b = function() {
		var aE;
		for (a2G = 0, a27 = -1, aT.setState(7), a24 = [], this.resize(), a22 = new Array(13), aE = a22.length; 0 <= aE; aE--) a22[aE] = document.createElement("canvas"), a22[aE].width = a23, a22[aE].height = a23;
		for (aE = 0; aE < 7; aE++) ! function(tc) {
			var a2L, dM = a22[tc - 2].getContext("2d", {
					alpha: !0
				}),
				a2K = 1.5 * Math.PI,
				fV = Math.floor(.5 * a23),
				dO = Math.floor(.48 * a23);
			dM.lineWidth = 2, dM.strokeStyle = dB.dC, dM.clearRect(0, 0, a23, a23);
			for (var aE = 0; aE < tc; aE++) a2L = a2K + 2 * Math.PI / tc,
				function(aE, fV, dO, a2K, a2L, dM) {
					dM.fillStyle = fW.a2P[aE], dM.beginPath(), dM.arc(fV, fV, dO, a2K, a2L), dM.lineTo(fV, fV), dM.fill()
				}(aE + 1, fV, dO, a2K, a2L, dM), 0 !== aE && a2N(fV, dO, a2K, dM), a2K = a2L;
			a2N(fV, dO, 1.5 * Math.PI, dM),
				function(fV, dO, dM) {
					dM.beginPath(), dM.arc(fV, fV, dO, 0, 2 * Math.PI), dM.stroke()
				}(fV, dO, dM)
		}(aE + 2);
		a2J(7, cq.get(4)), a2J(8, aF.rn[27]), a2J(9, aF.rn[46]), a2J(10, aF.rn[36]), a2J(11, cq.get(19)), a2J(12, cq.get(20)), aL.cx = !0
	}, this.a1P = function() {
		this.a1J(), gB.a18(3240), qG.b(), aL.cx = !0
	}, this.a1J = function() {
		a24 = [], a22 = []
	}, this.uC = function() {
		return a29
	}, this.resize = function() {
		var a2R, l9, wH, a2S;
		for (a1y = [0, 0], a25 = [0, 0, 0, 0], a2F = a0 ? (a28 = Math.floor(.8 * .4 * ck), a29 = Math.floor(.56 * a28), a25[0] = d2, a1 < a2 ? (a25[1] = a29 + 2 * d2, a25[2] = a1 - 3 * a25[0], a25[3] = zr.d6() - 3 * d2 - a29, a2D = Math.floor(
				.95 * a29), a2E = Math.floor((a1 - a28 - d2) / 2), Math.floor(d2 + a29 / 2)) : (a25[1] = d2, a25[2] = a1 - 3 * d2 - a28, a25[3] = zr.d6() - 2 * d2, a2D = Math.floor(.8 * a28), a25[3] - a29 < a28 && (a2D = Math.floor(.8 * (a25[
				3] - a29)), a2D = t8(a29, a2D)), a2E = Math.floor(a1 - a28 / 2 - d2), t8(a2F = Math.floor(d2 + a29 + (a25[3] - a29) / 2), Math.floor(a29 + 2 * d2 + a2D / 2)))) : (a28 = Math.floor(.2016 * ck), a29 = Math.floor(.56 * a28), a25[2] =
				Math.floor(.5 * a1), a25[3] = Math.floor(.5 * a2), a25[1] = Math.floor(.45 * (a2 - a25[3])), a25[0] = Math.floor((a1 - a25[2]) / 2), a2D = Math.floor(.75 * a29), a2E = Math.floor(a1 / 2), Math.floor(a25[1] + a25[3] + (a2 - a25[
					3] - a25[1]) / 2)), a2C = cn + Math.floor(.65 * a29 / 4) + co, a2R = l9 = 1; a2R * l9 < a24.length;) a25[3] / (l9 + 1) < a25[2] / (a2R + 1) ? a2R++ : l9++;
		a1w = (wH = (a25[2] - (a2R - 1) * d2) / a2R) < (a2S = (a25[3] - (l9 - 1) * d2) / l9) ? wH : a2S, a1x = Math.floor(a1w), a21 = cn + Math.floor(.5 * a1w / 5) + co, a1y[0] = a2R, a1y[1] = l9, a1z = a25[0] + Math.floor((a25[2] - a1y[0] *
			a1w - (a1y[0] - 1) * d2) / 2), a20 = a25[1] + Math.floor((a25[3] - a1y[1] * a1w - (a1y[1] - 1) * d2) / 2)
	}, this.zs = function(a2T, bc) {
		var aE, a3, dL, bU = a24.length;
		for (a2B = a2T, aE = 0; aE < bc.length; aE++) dL = a2U(bc[aE].ll, bc[aE].a2V), a24.push({
			a2W: bc[aE].id,
			pw: bc[aE].pw,
			px: bc[aE].a2X,
			a2Y: bc[aE].ll,
			a2Z: bc[aE].a2V,
			joined: bc[aE].a2a,
			u9: bc[aE].a1C,
			a2b: bc[aE].a2b,
			dL: dL,
			a2c: bc[aE].a2c,
			no: bc[aE].no
		});
		for (aE = bU - 1; 0 <= aE; aE--) a24.shift();
		if (-1 !== a27)
			for (a3 = a27, a27 = -1, aE = a24.length - 1; 0 <= aE; aE--)
				if (a24[aE].a2W === a3) {
					a27 = a3;
					break
				}(a24.length > a2G || a24.length < a2G) && (a2G = a24.length, this.resize()), this.a2d(), aL.cx = !0
	}, this.a2d = function() {
		for (var aE = a24.length - 1; 0 <= aE; aE--) null === a24[aE].dL && setTimeout(a2e, 0)
	}, this.cz = function(hD, hE) {
		return 4 * ((hD - a2E) * (hD - a2E) + (hE - a2F) * (hE - a2F)) <= a2D * a2D ? (this.a1P(), qI.oD(hD, hE, !1), !0) : function(hD, hE) {
			var ej, cV, hI, hJ;
			if (0 !== a24.length) {
				var aE = 0;
				for (hJ = a20, cV = 0; cV < a1y[1]; cV++) {
					for (hI = a1z, ej = 0; ej < a1y[0]; ej++) {
						if (hI < hD && hD < hI + a1w && hJ < hE && hE < hJ + a1w) return jJ.a2h(a24[aE].a2W), a27 = a24[aE].a2W !== a27 ? a24[aE].a2W : -1, aL.cx = !0;
						if (++aE >= a24.length) return !1;
						hI += a1w + d2
					}
					hJ += a1w + d2
				}
			}
			return !1
		}(hD, hE)
	}, this.d7 = function() {
		var ej, cV, hD, dO, zoom, aE = 0,
			hE = a20;
		if (d8.imageSmoothingEnabled = !0, d8.lineWidth = 3, dO = Math.floor(.5 * a2D), d8.fillStyle = dB.iP, d8.beginPath(), d8.arc(a2E, a2F, dO, 0, 2 * Math.PI), d8.fill(), d8.strokeStyle = dB.dC, d8.beginPath(), d8.arc(a2E, a2F, dO, 0, 2 *
				Math.PI), d8.stroke(), dO = cq.get(0).height, zoom = .6 * a2D / dO, d8.setTransform(zoom, 0, 0, zoom, Math.floor(a2E - .56 * zoom * cq.get(0).width), Math.floor(a2F - .5 * zoom * dO)), d8.drawImage(cq.get(0), 0, 0), d8
			.setTransform(1, 0, 0, 1, 0, 0),
			function() {
				d8.fillStyle = dB.iP, d8.fillRect(a1 - a28 - d2, d2, a28, a29), 0 <= a27 ? (d8.fillStyle = dB.ih, d8.fillRect(a1 - a28 - d2, d2, a28, Math.floor(.25 * a29))) : (d8.fillStyle = dB.j4, d8.fillRect(a1 - a28 - d2, d2 + Math.floor(
					.25 * a29), a28, Math.floor(.25 * a29)));
				d8.strokeStyle = dB.dC, d8.strokeRect(a1 - a28 - d2, d2, a28, a29), d8.fillStyle = dB.dC, d8.font = a2C, d8.textBaseline = d9;
				for (var hE, pP = Math.floor(.04 * a28), pQ = Math.floor(.08 * a29), aE = 3; 0 <= aE; aE--) hE = Math.floor(d2 + (aE + 1) * (a29 + 2 * pQ) / 5 - pQ), d8.textAlign = tG, d8.fillText(a2A[aE], a1 - a28 - d2 + pP, hE), d8.textAlign =
					ui, d8.fillText(gR.hU(a2B[aE]), a1 - d2 - pP, hE)
			}(), 0 !== a24.length)
			for (cV = 0; cV < a1y[1]; cV++) {
				for (hD = a1z, ej = 0; ej < a1y[0]; ej++) {
					if (! function(aE, hD, hE) {
							var zoom, cV, a2l, a2n, a2o;
							null === a24[aE].dL ? (d8.fillStyle = dB.iP, d8.fillRect(hD, hE, a1x, a1x)) : (zoom = a1x / 128, d8.setTransform(zoom, 0, 0, zoom, hD, hE), d8.drawImage(a24[aE].dL, 0, 0), d8.setTransform(1, 0, 0, 1, 0, 0));
							a27 === a24[aE].a2W ? (function(hD, hE) {
								var mf = Math.floor(.2 * a1x),
									mg = Math.floor(.3 * mf);
								d8.fillStyle = dB.ik, d8.fillRect(hD + a1x - mf, hE, mf, mf), d8.fillStyle = dB.hP, d8.fillRect(hD + a1x - mf, hE, 2, mf), d8.fillRect(hD + a1x - mf, hE + mf - 2, mf, 2), cK.si(hD + a1x - mf + mg, hE + mg,
									mf - 2 * mg), d8.setTransform(1, 0, 0, 1, 0, 0)
							}(hD, hE), d8.lineWidth = 3, d8.fillStyle = dB.ik) : d8.fillStyle = dB.iN;
							if (a2n = Math.floor(a1w / 4), d8.fillRect(hD, hE, a2n, a2n), a2o = Math.floor(hE + .8 * a1w), d8.fillRect(hD, a2o, a1x, Math.floor(a1w / 5)), function(aE, hD, hE) {
									var zoom;
									a24[aE].px && (aE = cq.get(4), zoom = .5 * a1w / aE.width, d8.setTransform(zoom, 0, 0, zoom, Math.floor(hD + (a1w - zoom * aE.width) / 2), Math.floor(hE + (a1w - zoom * aE.height) / 2)), d8.globalAlpha = .6, d8
										.drawImage(aE, 0, 0), d8.globalAlpha = 1, d8.setTransform(1, 0, 0, 1, 0, 0))
								}(aE, hD, hE), a24[aE].a2c) {
								for (cV = a2l = 0; cV < a24[aE].a2c; cV++) a2l = Math.max(a2l, cv.measureText(a24[aE].no[cV], a21));
								a2l += .05 * a1w, cV = 5 === a24[aE].a2c, a2n = cV ? hE + a2n : Math.max(hE + .8 * a1w - .11 * a24[aE].a2c * a1w, hE + a2n), a2o = cV ? a2o : Math.min(a2n + .11 * a24[aE].a2c * a1w + .05 * a1w, a2o), d8.fillRect(
									hD, a2n, a2l, a2o - a2n)
							}
							for (d8.font = a21, d8.textBaseline = d9, d8.textAlign = tG, d8.fillStyle = dB.j0, d8.fillText(a24[aE].joined.toString(), Math.floor(hD + .22 * a1w), Math.floor(hE + .9 * a1w)), d8.fillStyle = dB.dC, cV = 0; cV < a24[
									aE].a2c; cV++) d8.fillText(a24[aE].no[a24[aE].a2c - cV - 1], Math.floor(hD + .03 * a1w), Math.floor(hE + .77 * a1w - .11 * cV * a1w));
							d8.textAlign = ui, d8.fillStyle = dB.io, d8.fillText(a24[aE].u9.toString(), Math.floor(hD + .81 * a1w), Math.floor(hE + .9 * a1w)), d8.strokeStyle = a27 === a24[aE].a2W ? dB.ii : dB.iU, d8.strokeRect(hD, hE, a1x, a1x),
								a2o = Math.floor(.16 * a1w), zoom = a2o / a23, d8.setTransform(zoom, 0, 0, zoom, Math.floor(hD + .33 * a2o), Math.floor(hE + .33 * a2o)), a22.length > a24[aE].pw && d8.drawImage(a22[a24[aE].pw], 0, 0);
							d8.setTransform(zoom, 0, 0, zoom, Math.floor(hD + .15 * a2o), Math.floor(hE + a1w - 1.08 * a2o)), d8.drawImage(a22[11], 0, 0), d8.setTransform(zoom, 0, 0, zoom, Math.floor(hD + a1w - 1.05 * a2o), Math.floor(hE + a1w -
								1.15 * a2o)), d8.drawImage(a22[12], 0, 0), d8.setTransform(1, 0, 0, 1, 0, 0)
						}(aE, Math.floor(hD), Math.floor(hE)), ++aE >= a24.length) return;
					hD += a1w + d2
				}
				hE += a1w + d2
			}
	}
}

function qr() {
	this.b = function(hD, hE) {
		aT.setState(5), qI.oD(hD, hE, !1), aL.cx = !0
	}, this.d7 = function() {
		qI.a0W()
	}, this.cz = function(hD, hE) {
		var aE = qI.or(hD, hE, 5, 2);
		5 === aE ? aP() : 6 === aE && (qG.b(), qI.oD(hD, hE, !1), aL.cx = !0)
	}
}

function qs() {
	var a2r = [0, 0, 0, 0];

	function zy(hD, hE, dE, a3A) {
		d8.fillStyle = dB.dC;
		var mf = t8(2, Math.floor((a3A ? .5 : .35) * dE)),
			ty = (mf -= mf % 2, t8(2, Math.floor(.1 * dE))),
			dE = (ty -= ty % 2, Math.floor((dE - mf) / 2)),
			hK = Math.floor(dE + (mf - ty) / 2);
		d8.fillRect(hD + dE, hE + hK, mf, ty), a3A && d8.fillRect(hD + hK, hE + dE, ty, mf)
	}

	function a1B(hD, hE, cu, ez, rq, ci, u4, ee, tc) {
		d8.fillStyle = rq, d8.fillRect(hD, hE, cu, ez), 0 <= ee && function(hD, hE, cu, ez, ee) {
			d8.fillStyle = "rgba(" + 22 * ee + "," + (110 - 22 * ee) + ",0,0.75)", d8.fillRect(hD, hE, (1 + ee) * cu / 6, ez)
		}(hD, hE, cu, ez, ee), 0 < tc && function(hD, hE, cu, ez, tc) {
			d8.fillStyle = "rgba(255,255,255,0.3)", d8.fillRect(hD, hE, tc * cu / bZ, ez)
		}(hD, hE, cu, ez, tc), d8.strokeStyle = dB.dC, d8.strokeRect(hD, hE, cu, ez), 0 !== ci && (d8.fillStyle = dB.dC, d8.font = cn + Math.floor(ci * ez) + co, d8.fillText(u4, Math.floor(hD + cu / 2), Math.floor(hE + .52 * ez)))
	}
	this.fz = [{
		be: 0,
		tc: 512
	}], this.b = function() {
		qQ.oh = !1, aT.setState(2), this.resize(), aL.cx = !0
	}, this.a1J = function() {}, this.resize = function() {
		a2r[2] = Math.floor((a0 ? .49 : .4) * ck), a2r[1] = Math.floor((a2 - a2r[2] / 6 - this.fz.length * (d2 + a2r[2] / 10)) / 2), a2r[0] = Math.floor((a1 - a2r[2]) / 2), qQ.oh && qQ.resize()
	}, this.a2s = function(pw) {
		var aE;
		if (6 < pw) this.fz = [{
			be: 0,
			tc: 512
		}];
		else {
			for (this.fz = [], aE = 0; aE < pw + 2; aE++) this.fz.push({
				be: 0,
				tc: 0
			});
			this.a2t()
		}
	}, this.a2u = function(a2v, a2w) {
		for (var bU = a2v.length, aE = 0; aE < bU; aE++) this.fz[aE].be = a2v[aE], this.fz[aE].tc = a2w[aE]
	}, this.a2x = function(pN) {
		var aE, bU;
		if (1 === pN.mj.length)
			for (bU = this.fz.length, pN.a2v = new Array(bU), pN.a2w = new Array(bU), aE = 0; aE < bU; aE++) pN.a2v[aE] = this.fz[aE].be, pN.a2w[aE] = this.fz[aE].tc
	}, this.a1Q = function() {
		aL.cx = !0, qQ.oh ? qQ.oh = !1 : (this.a1J(), qG.b())
	}, this.q0 = function() {
		var aE, tc;
		if (fr.fs) return fr.ft.a2y;
		for (tc = 0, aE = this.fz.length - 1; 0 <= aE; aE--) tc += this.fz[aE].tc;
		return tc
	}, this.oD = function(hD, hE) {
		return !(!qQ.oh || !qQ.oD(hD, hE)) || -1 !== this.or(hD, hE)
	}, this.a2z = function() {
		gB.oV = 0, gB.xI(0, 3) && jJ.a30(0)
	}, this.a31 = function() {
		var ej;
		this.a2z(), aT.a1I(), fr.fs ? fr.a32() : (ej = (ej = this.fz.length - 2) < 0 ? 7 : ej, pt(Math.floor(16384 * Math.random()), 0, [{
			name: qG.a33(),
			a34: d4.sk[2].nR.a0h(),
			a35: 0
		}], ej, !1, !1))
	}, this.cz = function(hD, hE) {
		if (d5.oh || d4.sk[1].nR.oh || d4.sk[2].nR.oh) return !1;
		if (qQ.oh && !fr.fs) return qQ.cz(hD, hE);
		var aE, ej, max, mf, hE = this.or(hD, hE);
		if (-1 === hE) return !1;
		if (0 === hE) this.a1Q();
		else if (1 === hE) fr.fs ? (fr.ok(), aL.cx = !0) : qQ.show();
		else if (100 === hE) op.a36();
		else if (2 === hE) this.a1J(), this.a31();
		else {
			if (fr.fs) return !1;
			if (27 === hE) this.fz.length < 8 && (this.fz.push({
				be: 0,
				tc: bZ
			}), this.a2t(), this.resize(), aL.cx = !0);
			else if (aE = Math.floor((hE - 3) / 3), hE % 3 == 0) 1 < this.fz.length && (this.fz.splice(aE, 1), this.resize(), aL.cx = !0);
			else if (mf = (a2r[2] - a2r[2] / 10 - 2 * d2) / 2, hE % 3 == 1) 0 === aE && 1 === this.fz[aE].tc || (hD < a2r[0] + a2r[2] - 1.5 * mf - d2 ? this.fz[aE].be-- : this.fz[aE].be++, this.fz[aE].be < 0 ? this.fz[aE].be = 5 : 5 < this.fz[aE]
				.be && (this.fz[aE].be = 0), aL.cx = !0);
			else {
				for (aL.cx = !0, hE = (hD - (a2r[0] + a2r[2] - mf)) / mf - .5, hE *= hE < 0 ? -hE : hE, hE = 0 === (hE = Math.floor(hE * bZ)) ? 1 : hE, max = bZ, ej = this.fz.length - 1; 0 <= ej; ej--) aE !== ej && (max -= this.fz[ej].tc);
				if (hE < 0) {
					if (1 === this.fz[aE].tc) return this.fz[aE].tc = max, !0
				} else if (this.fz[aE].tc === max) return this.fz[aE].tc = 1, !0;
				this.fz[aE].tc += hE, this.fz[aE].tc < 1 ? this.fz[aE].tc = 1 : this.fz[aE].tc > max && (this.fz[aE].tc = max)
			}
		}
		return !0
	}, this.a2t = function() {
		for (var tc = Math.floor(bZ / this.fz.length), a37 = bZ % this.fz.length, aE = this.fz.length - 1; 0 <= aE; aE--) this.fz[aE].tc = tc;
		this.fz[0].tc += a37
	}, this.or = function(hD, hE) {
		var mf = (a2r[2] - 3 * d2) / 4,
			ty = a2r[2] / 6;
		if (hD < a2r[0] || hE < a2r[1] || a2r[0] + a2r[2] <= hD) return -1;
		if (hE < a2r[1] + ty) return hD < a2r[0] + mf ? 0 : hD < a2r[0] + mf + d2 ? -1 : hD < a2r[0] + 2 * mf + d2 ? 100 : hD < a2r[0] + 2 * (mf + d2) ? -1 : hD < a2r[0] + 3 * mf + 2 * d2 ? 1 : hD < a2r[0] + 3 * (mf + d2) ? -1 : 2;
		for (var hJ, tz = a2r[2] / 10, mf = (a2r[2] - tz - 2 * d2) / 2, aE = 0; aE < this.fz.length; aE++) {
			if (hE < (hJ = a2r[1] + ty + d2 + aE * (tz + d2))) return -1;
			if (!(hJ + tz < hE)) return hD < a2r[0] + tz ? 3 + 3 * aE : hD < a2r[0] + tz + d2 ? -1 : hD < a2r[0] + a2r[2] - mf - d2 ? 4 + 3 * aE : hD < a2r[0] + a2r[2] - mf ? -1 : 5 + 3 * aE
		}
		return !(this.fz.length < 8) || hE < (hJ = a2r[1] + ty + d2 + this.fz.length * (tz + d2)) || hJ + tz < hE || a2r[0] + tz < hD ? -1 : 27
	}, this.d7 = function() {
		d8.lineWidth = pR, d8.textAlign = dA, d8.textBaseline = d9;
		var mf = (a2r[2] - 3 * d2) / 4,
			ty = a2r[2] / 6;
		if (a1B(a2r[0], a2r[1], mf, ty, "rgba(128,0,0,0.75)", .34, "Back", -1, -1), a1B(a2r[0] + mf + d2, a2r[1], mf, ty, "rgba(128,0,128,0.75)", .31, "Custom", -1, -1), a1B(a2r[0] + 2 * (mf + d2), a2r[1], mf, ty, "rgba(" + (fr.fs ? 128 : 0) +
				",128,128,0.75)", .34, fr.fs ? "Reset" : "Maps", -1, -1), a1B(a2r[0] + a2r[2] - mf, a2r[1], mf, ty, "rgba(0,128,0,0.75)", .34, "Start", -1, -1), !fr.fs) {
			for (var hJ, tz = a2r[2] / 10, mf = (a2r[2] - tz - 2 * d2) / 2, aE = 0; aE < this.fz.length; aE++) hJ = a2r[1] + ty + d2 + aE * (tz + d2), a1B(a2r[0], hJ, tz, tz, 1 < this.fz.length ? "rgba(128,0,0,0.75)" : "rgba(90,90,90,0.75)", 0,
				null, -1), 1 < this.fz.length && zy(a2r[0], hJ, tz, !1), a1B(a2r[0] + tz + d2, hJ, mf, tz, dB.iR, .4, this.a38(aE), this.fz[aE].be, -1), a1B(a2r[0] + a2r[2] - mf, hJ, mf, tz, dB.iR, .4, this.a39(aE), -1, this.fz[aE].tc);
			this.fz.length < 8 && (hJ = a2r[1] + ty + d2 + this.fz.length * (tz + d2), a1B(a2r[0], hJ, tz, tz, "rgba(0,128,20,0.75)", 0, null, -1, -1), zy(a2r[0], hJ, tz, !0)), qQ.oh && qQ.d7()
		}
	}, this.a38 = function(aE) {
		return 0 === aE && 1 === this.fz[aE].tc ? "You" : fG.fm[this.fz[aE].be]
	}, this.a39 = function(aE) {
		return 1 === this.fz[aE].tc ? "1 Player" : this.fz[aE].tc + " Players"
	}
}

function uq() {
	this.bU = 0, this.cu = 0, this.sk = null, this.b = function() {
		this.sk = [], this.sk.push({
			hD: 0,
			hE: 0,
			rl: a0,
			nR: null
		}), this.sk.push({
			hD: 0,
			hE: 0,
			rl: !1,
			nR: new a1X
		}), this.sk.push({
			hD: 0,
			hE: 0,
			rl: !1,
			nR: new a0Z
		}), this.sk[2].nR.a0e(), this.bU = this.sk.length, this.cu = 0
	}, this.xQ = function() {
		this.cu = Math.floor((a0 ? .063 : .04) * ck), this.cu += 4 - this.cu % 4, this.sk[0].hD = d2, this.sk[0].hE = d3 - this.cu - d2;
		for (var aE = 1; aE < this.bU; aE++) this.sk[aE].hD = this.sk[aE - 1].hD + Math.floor(a0 ? 1.5 * d2 : 3.7 * d2) + this.cu, this.sk[aE].hE = this.sk[0].hE
	}, this.or = function(d0, d1) {
		if (cq.cr())
			for (var aE = this.bU - 1; 0 <= aE; aE--)
				if (d0 >= this.sk[aE].hD && d1 >= this.sk[aE].hE && d0 < this.sk[aE].hD + this.cu && d1 < this.sk[aE].hE + this.cu) return aE;
		return -1
	}, this.a1N = function() {
		for (var aE = 2; 1 <= aE; aE--)
			if (this.sk[aE].nR.oh) return !0;
		return !1
	}, this.resize = function() {
		for (var aE = 2; 1 <= aE; aE--) this.sk[aE].nR.resize()
	}, this.ow = function() {
		return this.sk[1].nR.oh ? (this.sk[1].nR.cz(-5e3, -5e3, 0), !0) : !!this.sk[2].nR.oh && (this.sk[2].nR.cz(-5e3, -5e3), !0)
	}, this.cz = function(d0, d1, a08) {
		if (a08) {
			if (this.sk[1].nR.oh) return this.sk[1].nR.cz(d0, d1, 0), !0;
			if (this.sk[2].nR.oh) return this.sk[2].nR.cz(d0, d1), !0
		}
		d0 = this.or(d0, d1);
		if (a08) {
			if (0 === d0) return this.sk[d0].rl = !this.sk[d0].rl, a0 = this.sk[d0].rl, p9.a3D(0), aB(this.sk[0].rl, !1), !0;
			if (1 <= d0 && d0 < 3) return this.sk[d0].nR.b(), ot.l(!1), aL.cx = !0
		}
		return !1
	}, this.oD = function(d0, d1) {
		return this.sk[1].nR.oh ? (this.sk[1].nR.oD(d0, d1), !0) : !!this.sk[2].nR.oh && (this.sk[2].nR.oD(d0), !0)
	}, this.a0j = function() {
		for (var aE = 2; 1 <= aE; aE--)
			if (this.sk[aE].nR.oh) return this.sk[aE].nR.a0j(), !0;
		return !1
	}, this.d7 = function() {
		if (cq.cr()) {
			d8.imageSmoothingEnabled = !0;
			for (var aE = this.bU - 1; 0 <= aE; aE--) d8.fillStyle = this.sk[aE].rl ? dB.ij : dB.iR, d8.fillRect(this.sk[aE].hD, this.sk[aE].hE, this.cu, this.cu), 0 === aE ? this.a3E(aE, cq.get(15)) : 1 === aE ? this.a3F() : 2 === aE && this
				.a3G(), d8.setTransform(1, 0, 0, 1, 0, 0), d8.lineWidth = pR, d8.strokeStyle = dB.dC, d8.strokeRect(this.sk[aE].hD, this.sk[aE].hE, this.cu, this.cu);
			d8.imageSmoothingEnabled = !1
		}
	}, this.a3E = function(aE, rn) {
		var mA = .08 * this.cu,
			zoom = (this.cu - 2 * mA) / rn.width;
		d8.setTransform(zoom, 0, 0, zoom, this.sk[aE].hD + mA, this.sk[aE].hE + (this.cu - zoom * rn.height) / 2), d8.drawImage(rn, 0, 0)
	}, this.a3F = function() {
		var mA = .06 * this.cu,
			zoom = (this.cu - 2 * mA) / aF.cu;
		d8.setTransform(zoom, 0, 0, zoom, this.sk[1].hD + mA, this.sk[1].hE + mA), d8.drawImage(aF.rn[4], 0, 0)
	}, this.a3G = function() {
		d8.setTransform(1, 0, 0, 1, this.sk[2].hD, this.sk[2].hE);
		for (var be = this.cu / 4, hD = 3; 0 <= hD; hD--)
			for (var hE = 3; 0 <= hE; hE--) {
				var dO = Math.floor(367 * (hD + 1) * (hE + 1) % 256),
					pN = Math.floor(687 * (hD + 1) * (hE + 1) % 256),
					cV = Math.floor(651 * (hD + 1) * (hE + 1) % 256);
				d8.fillStyle = "rgb(" + dO + "," + pN + "," + cV + ")", d8.fillRect(hD * be, hE * be, be, be)
			}
	}, this.a1U = function() {
		for (var aE = 2; 1 <= aE; aE--)
			if (this.sk[aE].nR.oh) return void this.sk[aE].nR.d7()
	}
}

function qt() {
	var username, a3H;

	function a3P() {
		var sQ;
		return 0 === username.indexOf("vote ") && 2 === (sQ = username.split(" ")).length ? (qG.a3I = sQ[1], a3T(), gB.xI(0, 7) && jJ.a3U(0), qK.a16(3252), 1) : void 0
	}

	function a3T() {
		username = o(), ot.get().value = username, ot.p2(!0)
	}

	function a3O() {
		var max, a3V;
		if (0 === username.indexOf("account ")) return 2 !== (a3V = username.split(" ")).length || (max = Math.floor(Math.pow(2, 48)), (a3V = parseInt(w.x(a3V[1]))) <= 0) || max <= a3V ? (a3T(), qK.a16(3266)) : y(a3V) ? (a3T(), qK.a16(3231)) : (
		a3T(), 5 <= q ? qK.a16(3232) : (qK.a16(3265), a1G.oh = !0, a1G.cm = -1)), 1
	}

	function a3R() {
		return void 0 !== username && w.n4(username)
	}

	function a3M() {
		if (a3R()) return ot.p2(!0), 1;
		ot.p2(!1)
	}
	this.a3I = "", this.a3J = -7e3, this.b = function(a3K) {
		q < 5 || (a3H && aL.aM > a3H + 144e5 ? n.setState(14) : a3H = aL.aM), aT.setState(0), qI.xQ(), ot.l(!0), qH.b(), d4.xQ(), a3K && aK() ? setTimeout(function() {
			0 === aT.ov() && aJ(12)
		}, 15e3) : aJ(12), void 0 === username && (username = o(), ot.get().value = username, a3M())
	}, this.a1J = function() {
		aJ(13), ot.l(!1)
	}, this.a3N = function(cm) {
		return 0 === cm ? qI.cu : 1 === cm ? Math.floor(.3 * qI.ez) : 2 === cm ? ot.get().style.font : username
	}, this.a1h = function() {
		var u;
		username = ot.get().value.trim(), a3M(), "password" !== username && "account" !== username || (u = w.a9(t().toString()), username = "account " + u, ot.get().value = username)
	}, this.cz = function(hD, hE) {
		aL.p6(), 1 === qI.or(hD, hE, 1, 1) ? a3O() || a3P() || (aJ(10), a3M() ? (this.a1J(), a6(username), fy.b()) : qK.a16(4214)) : 0 === qI.or(hD, hE, 0, 1) && this.a1L()
	}, this.a1L = function() {
		a3O() || a3P() || (aJ(10), a3R() && 5 <= username.length && 40 === username.charCodeAt(0) && 40 === username.charCodeAt(1) && 41 === username.charCodeAt(3) && 41 === username.charCodeAt(4) ? qJ.a0x(Math.abs(username.charCodeAt(2) + 5)) :
			qJ.a0x(hR.a3S), a3M() ? cq.cr() ? (this.a1J(), a6(username), fr.ok(), qJ.b()) : qK.a16(3228) : qK.a16(4214))
	}, this.a3W = function() {
		return !d4.a1N() && !d5.oh && !os.oh
	}, this.d7 = function() {
		var fV, i4;
		this.a3W() && (d8.imageSmoothingEnabled = !0, fV = cq.ro("territorial.io"), i4 = 1.1 * qI.cu / fV.width, d8.setTransform(i4, 0, 0, i4, Math.floor((hL - i4 * fV.width) / 2), qI.hE - i4 * fV.height - .72 * qI.ez), d8.drawImage(fV, 0, 0), d8
			.setTransform(1, 0, 0, 1, 0, 0), qI.a0T())
	}, this.a33 = function() {
		return username
	}
}

function qu() {
	var a3Y, dL, cj, a3Z;

	function a3c(cm, name, a3d, v) {
		cj[cm] = name, dL[cm] = new Image, dL[cm].onload = function() {
			0 < a3d && ! function(cm, a3d) {
				var hD, hE, aE, fV = document.createElement("canvas"),
					cu = dL[cm].width,
					ez = dL[cm].height,
					dM = (fV.width = cu, fV.height = ez, fV.getContext("2d", {
						alpha: !0
					})),
					dI = (dM.drawImage(dL[cm], 0, 0), dM.getImageData(0, 0, cu, ez)),
					lR = dI.data;
				if (a3d < 3) {
					var a3g = 2 === a3d ? 160 : 600;
					for (hD = cu - 1; 0 <= hD; hD--)
						for (hE = ez - 1; 0 <= hE; hE--) lR[aE = 4 * (hD + hE * cu)] + lR[aE + 1] + lR[aE + 2] < a3g && (lR[aE + 3] = Math.floor(255 * (lR[aE] + lR[aE + 1] + lR[aE + 2]) / a3g))
				} else if (3 === a3d)
					for (hD = cu - 1; 0 <= hD; hD--)
						for (hE = ez - 1; 0 <= hE; hE--) 0 === lR[aE = 4 * (hD + hE * cu)] && 200 < lR[aE + 1] && 0 === lR[aE + 2] && (lR[aE + 3] = 0);
				else if (4 === a3d) ! function(lR, cu, ez) {
					var hD, hE, aE;
					for (hD = cu - 1; 0 <= hD; hD--)
						for (hE = ez - 1; 0 <= hE; hE--) lR[1 + (aE = 4 * (hD + hE * cu))] > lR[aE] + 20 && lR[1 + aE] > lR[2 + aE] + 20 && lR[aE] + lR[2] < 40 && (lR[3 + aE] = 255 - lR[1 + aE], lR[aE] = lR[1 + aE] = lR[2 + aE] = lR[aE])
				}(lR, cu, ez);
				else if (5 === a3d) ! function(lR, cu, ez, id) {
					var hD, hE, aE;
					for (hD = cu - 1; 0 <= hD; hD--)
						for (hE = ez - 1; 0 <= hE; hE--) 200 < lR[1 + (aE = 4 * (hD + hE * cu))] && lR[1 + aE] - 20 > lR[aE] && lR[1 + aE] - 20 > lR[2 + aE] ? lR[aE] + lR[2 + aE] < 40 ? lR[3 + aE] = 0 : (lR[3 + aE] = lR[aE], lR[aE] = 255,
							lR[1 + aE] = 255, lR[2 + aE] = 255) : lR[aE] < 50 && lR[1 + aE] < 50 && lR[2 + aE] < 50 && (lR[aE] + lR[1 + aE] + lR[2 + aE] < 50 ? (lR[1 + aE] = 0 === id ? lR[1 + aE] : 160, lR[3 + aE] = 180) : (lR[1 +
							aE] = 0 === id ? lR[1 + aE] : 160, lR[3 + aE] = 180 + Math.floor(75 * (lR[aE] + lR[1 + aE] + lR[2 + aE] - 50) / 100)))
				}(lR, cu, ez, 0);
				else if (6 === a3d)
					for (hD = cu - 1; 0 <= hD; hD--)
						for (hE = ez - 1; 0 <= hE; hE--) lR[(aE = 4 * (hD + hE * cu)) + 3] = Math.floor(255 * (lR[aE] + lR[aE + 1] + lR[aE + 2]) / 765), lR[aE] = lR[aE + 1] = lR[aE + 2] = 255;
				else if (7 === a3d)
					for (hD = cu - 1; 0 <= hD; hD--)
						for (hE = ez - 1; 0 <= hE; hE--) lR[(aE = 4 * (hD + hE * cu)) + 1] > lR[aE + 2] + 10 && (lR[aE + 3] = lR[aE], lR[aE + 1] = lR[aE + 2]);
				dM.putImageData(dI, 0, 0), dL[cm] = fV
			}(cm, a3d), a3Y--, cq.cr() && (zr.cp(), mY.rh(), aF.b(), a1R.a0B([dL[8], dL[16], dL[7], dL[9], dL[10]], [!m, 0 === q, !0, !0, !0]), aL.cx = !0, dL[7] = a3Z, dL[8] = a3Z, dL[9] = a3Z, dL[10] = a3Z)
		}, dL[cm].src = "data:image/png;base64," + v
	}
	this.b = function() {
		if (void 0 === dL) {
			a3Y = 22, dL = new Array(a3Y), cj = new Array(a3Y), (a3Z = document.createElement("canvas")).width = 1, a3Z.height = 1;
			for (var aE = a3Y - 1; 0 <= aE; aE--) dL[aE] = a3Z;
			a3c(0, "exit", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
				), a3c(1, "victory", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg=="
				), a3c(2, "defeat", 6,
				"iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC"
				), a3c(3, "orders", 6,
				"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"
				), a3c(4, "crown", 4,
				"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
				), a3c(5, "arena", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC"
				), a3c(6, "territorial.io", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAjIAAABBCAIAAABEh9lIAAAACXBIWXMAAFxGAABcRgEUlENBAAAJJWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNTo1OSswMzozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMTItMjNUMTM6MjY6MDUrMDM6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY4ZGZmYjhkLWEyNDEtMTg0Mi1hNGYxLTk2ODMyZGFjYThjYSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE4YTU4YWFiLWE4ODYtNWI0Ni04OTk1LTI3MTdiYWZmOWMzYSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjNhNTMxM2RiLWY0ZGItN2Q0Mi1hZDc1LTEyMTJiNGE0NThjZSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2E1MzEzZGItZjRkYi03ZDQyLWFkNzUtMTIxMmI0YTQ1OGNlIiBzdEV2dDp3aGVuPSIyMDIyLTEyLTIzVDEzOjI1OjU5KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4NjhhNzU5LWRjNDctNGM0My1iYzA1LTllM2ZjOGMwZjY0YSIgc3RFdnQ6d2hlbj0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmOGRmZmI4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"
				), a3c(7, "youtube", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC"
				), a3c(8, "googleplay", 3,
				"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"
				), a3c(9, "discord", 7,
				"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
				), a3c(10, "insta", 3,
				"iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABgFBMVEV0ObxpQMSOOaSGPKuNOMfOKJe6LpyaOKHiJnC4MJW1L6ycNrbCLKOoM7mXOL6rM7GxM5vSKpCBQLe7MpJxRcK5ManHLp3ULIjmKWrEMYvAMo6KP7yfO5/HMYTZLH6oOZrcLXTYLYOFQcjbLnp4R7/BN4LRM37gM2xjUsrlM2RvUcNzUMvoNmG/QXZhWMvqN1xZW87ZPHfiPmVPY9S6SZroQlvSSHGQV7TNSpLSTGrsRlPZSYDlTFXXUWHvTE3xTUPdVVnsUk7gV1bWV4rtV0q0YrLyWUPjYE/1XzfDZ6vsZkjwaT/oaXb2ajmieb/fbJPua2n4by63e7b3dC3wdEvzez73fjH8gynShbflh6j5jTjZjbX8kTD5kE3Dl8fwlW/llK3fl7fxnIP5nlPaob79oj79o0nuo53ipbnnpqoA/wD+sk36sWz3tpT/uV39vFXyxcL/yWTiyN/7zZz/0nLvz9zzz9D92H/63MX339b14+v869/87/D98vr/+vj8//t610aAAAAEu0lEQVRIx3XWCVsaVxQG4KuUKMZGQSOgsigFxaqIRYISExXEBXELYIKKVrGusQ3pKCoMfz3fOXeGgS7fwxNw5rx3OTNkEDdafmvNzMz09PT4+MTEr0h/f//o6KheKf4DzFA9lU/8ImOzjY7+hDQRo3RGlk/IcpsNL9vQ0NAbio6IUN04Ms1rkaPbZFD+WuaNjCTjTZFroWKTUW2EDZE2bA/F+FerN8p7XvfINBSRNk6/BDbT9vZ2sSn7+6sdPXp+pjSIaMPw2+Wayqk3Qn/VyqtN6kZwPedduam0NWrZ09WlK0HjC4ENbNeMcdUaRzXmrK12UXoAMTpv2PSuxqMV91c9SK8eT2SjWKZTtcjbt1IJrjeZ2ss4rKwaxZbe3ld6IgpmKnd3SyQYmNq3cVAZ1oDFYunjWGReWRSsYIMMlGDQTpOoqy3lgxS8l2vPnwcicppuUoJBeweWW/bogKudTryczkMUP/eZMeTzAJtuQaKjY1itq0U5PlfHDkulw5jTabWWaOuDZki1TxpBYtizgSOfuZ5HVrixqnJot8eq6OPgIBVsDCBMOoaHPfs4EuHxna6Y0rikqhKzx0qA1hiNaWYjsChchyITv9PlcsWeuRgXko3fzpHETEiwsBRxloHLpdDiS4lAIFGiS6gEAgEQF8ihmY2AwLZLOOJ3ueyBAHco4Q64kQQmVL+MjIwwqR9ayZgFzdE3WKJZXBgwgElqCZ+WBOZR3G6gAD79brVqBH3yg9Ti8XA4nMBoV2Gv1+vDy+e7wlAJMkzsbISnL+L3+3GqFg2PjY2dYoVRvHd2eilx/PnF53O7JWEjCMSnaLT5WeS6Xq/Su8MBBoPKqyZCRkxNxaPReVSqi3MIkbm5EFAQqrMTlae0QiYjZIhE5+cXiSy9Ry7xYWthASo0Gww6orQw2lWYCRtBYHGJyMoysovtXy9QoCaDtOA4LdAnyQgRAksrRNaSlCesbDe5/IFQaIua3EmtAFFP3TyNILCyRuvZTFHwqf60m0omgbb4UjocMGHMfupmI5aW1tbWNpmk0+n19fUKTlYvd5PJ3esq3TCTQTJh2pRGVgA2N89wJJvhZJ/4tqxW+X5WZkNsmPjYCBLZNJNPlEwmVzH+A3t4vzDHJt5ECKQzJzh9wuTT3t7e2ZP8ij1dJj9SFyYdjh2QHRA3kWwuk8tlUfM1n8/rKnt2eXmWXU+lPn4gE3ScUrd9bEQ2R8m/1OuVfP7ggF5yqr0MetEwuMGfvRphkM9j/erxgRYNZTKamQvN0wWiG0cj+XyhcIKVVQq6KdASm80DRtzxejVCoHB0RG2qnB/J4AhQw2w9ULs7DcLi6PyFelT5fvcHUmCTQ8c30YgH6l81jntAEhKFo4uLi7uXludQI/JQdSvooGmIkLjg3Ffq//tIelicDI7p5EYDt7e3f95VXv75IMMs6stf+AaF5Cw+N56Ver3Mt8fH7418Rc5OsqkUbuvQrLYweoiTkOUy0t7echtyOXQtlUKfJx1jRPi5z+BbS+4Rw6RTqWVczlmD3PxL6EozaXzhsBkQn0//2XPPRX83p2GOcc9uppLLkjT9uOL6Rz0SSXPORpKW32M3NwbQEU90fn58LMmcXvkDXWCtCs7c/y4AAAAASUVORK5CYII="
				), a3c(11, "emojis", 4,
				"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"
				), a3c(12, "flags", 3,
				"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"
				), a3c(13, "bestTeam", 5,
				"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"
				), a3c(14, "bestPlayer", 5,
				"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"
				), a3c(15, "zoom", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
				), a3c(16, "apple", 3,
				"iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII="
				), a3c(17, "loading", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAZEAAABGBAMAAAD/Q7RHAAAAGFBMVEUAAAAnKSZKTElucG2Fh4SoqqfLzcr///+y5yZlAAAEnUlEQVRo3u3aS3PaMBAAYGNsuHoy0+TKTJv6SjNNfeWSciVNJlydF7qGl/n7JTGSd1e7wgaFaWfMKfFD1qeXV5KD8cb8kuC//rWSVtJKWkkraSWtpJW0klbSSlpJK2klraSV/KuSbw9qe8HsfnCyfHVuZu95Kmb3iUdJ+KAvKf7gM119vDoUb8Bv9gLsu2PD97+n4O/tr1/+OzHXXiqTRjHyJukqkLcndKqnDw94yTYfty7JoyD5jtIYeZJ0FEr2Fp670EcnkgScYiRrXkJLI/EjyUjOhtzduSwpBrJEJ4YloSJJPHqRRDRnK3DSPHIpS8w5TjLnJJlVGIkPydjKWdVsw+pZDokueE5SMJKunULuQcIky5a/S7KQJbtiQZLUTmHlQcIkW13YYyqKkRQOycKWKNcjD5dwyebMYJA7JLscspLCknAJgLHxUEnEJbtkmAuXZC5LysqEEq4V1OkoeySm/bxenf22ujd41NolWTskCyoxxfNydXajrL55qCSDXe4LeaNHdl8wkiLofP2NxwNeUhBJiKKJiBbUwRKFBtIxbrVlha3wCzMGGYzROMxLPhIDkhjn/aOtFa93x0o6uHJ1Cb3Bce1NoZYMJabN5w7JEkv6uLSibQT+w0PcFZGhQyFYmZ18CnVY0q0hKbAks6JrL1F9j4S6Gar50jVK0csLSTR97pC85x9IprW7+CESU0B9psCTHroGS8ZgwJAkSyRRqAF7k/TJyIFkWhCjesOSC5CAJNk+GEjqvwobSVIS9sRwVO3vzoXo2TEXGhZOSQ4knUazq/qSDMXe1QgAbp3rBpFzkl4dyQpIurBnqibhilsyJo2WeU6us7U8WLIZ2JLgkyUhkFSNKoN5x5K4liSvJNEnSaZE0gG5ic1dfThFaSTRQ9vpJbBOqsE3hp20kUS/r9JPl0itKzGjwbrqPXlzia5jdXIJ7I+qCsrhFKVRjyeLD6DHJ54lrlEYVIQC789mkliSDD1LUhIEgTdjJEzXm0nw7Bq840eeJY5opSesBrHv+LUoyQTJ5BgJM113RJCpMNnGknSfJKYSGEH6l3BR/dS+4c2WwBidlaDmxUX1oR+JMNNa8MtHK0vSgUZekhIJnWl5kpDZb7fKGLM2iebuBZqp5bIk3rBTepN1TxJT8gO00jJhO3x5FZSYDYuJLKGdgaxI6P9BwxuZgyt4cI8kYxrOR4770kphJTm7VmhZSZCk+H68ShRcbjxJ4MrdNWxFY2mlMJaanSSJyAClwCN/Pmx8SaJ9zc46wUkWLglISl5NPV4irXCH7B1F0xVuvMXnWOH2IBF2HWLcLUE81mjXgWzRTODI7VvSdfafBZmBjRruBKHXp667jKvt5GiJsDuXkXBfmXbXaHeuPHGOJVzfHAXHS/gdU0W2Naam9BvtmJIdwIn0jnsKPEj4XWy6KlVFio12sXE5aElX2GY8VkJ2xx9hRSV2kByLW8WypEcilHNuI+l4Cf7a45ldLzZ5GVrfN4yC/ZKQhu6/ECTxJQnCKoK/s6cdqDfl5AscuIMjS/S/7Bc4z3SlR5DU+5VfRRWvp/sqKiy/iqr/IdZfF1HJgRmsN+0AAAAASUVORK5CYII="
				), a3c(18, "target", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEXUAADUISLWQkLMTQDZZmXAdwC0lADgiIioqQCWvgCE0QAA/wDnra1i6ADw0tL////afMd+AAAC6klEQVRIx42WTWgTURCApzFNY2lLBKEX0dy8iA0UxB8CKgUv0gaKBS2B3HOJnkUDQrENQi6KEITcgydR0l0CUYReJBZCi3YpaC+9FANS6GXZ5+6+eT+z+1adS/ImX97Mzs4f2ET2916vPV9/61At6Ifeq2UIZWXDSYK+IxLIlY4Z+ga6jL8xQbsFoFQrDtF7QqoThaxSDIKsE4HqYJAyhXZNDJxq6VCvZIQgq0NDSJCGgnqFJCiroB2lHTvjS06dWxJSHl0cjBjztm5JxXUBdaXqro8E4j2UD+gg1BamFpkQ75GgVjkkn/8SU+LVUHmaQx/wmB5pEHNzyh4oa08ZkU+oroZQhR8mKMO8PNdPBpBlvoixA67PBBC6lI4yzJVOgb3Nv1+OQawm3h9gJo19jUPHHLrhQ4UEazIKkzZYHJoRvxwuLAzE95voOWzyO5dQ/zkw/QQPfe65DfhwGO2T8JBCB39zqAM8l1Ij3QBMkSC0YFsP94nIB/4fj3vegLb+175IkCX94io0w8/zXJkX0IwezjLUNciTKZrWoSJCF4hLvlCookHHChppPhaB5+7c36BpvOm/oH+Y0x13VSFTx5vGEEzQOPGInyO5KPOUR3yVvrsDIFWBBVOFoR5hlwYczTfgPUmVj1y9SJKiBdhSMM3c0ItZzMwfWFMifeeYomZHpKb89MVWOCWr++hXpNCzfkmViFO6oEvTPtROaAWM/RRtDOx3QO0pyYveCjZ6HreH1saDhiGaeKxj9GUrBzl70iNj54FiCA3BeFVNtXsfEq2Odh/xrjPYxyuG9nuU00YC6DPqrKTcvD6nAshSNclbk3coR1BGDqCmpFJ3Hg++bN2OTNgQ6uojTh9kfP7g5KwnDcWiNl67CQy/SEzzhKvKZORvGqdwxqHLw47JWCOyYfSexaEHsYUmvj9cM6xG1jJlrjqmJcsiFu875nWt91I+4/yLxMXP3lu753PzK+tO8nYY3LbvS2SDtP8A+ntynBIvYeAAAAAASUVORK5CYII="
				), a3c(19, "members", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
				), a3c(20, "hourglass", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
				), a3c(21, "stalemate", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAeoAAABABAMAAAAnsyk1AAAAElBMVEUAAAA8PjxeYF2Rk5C6vLn////ACCfyAAAFMklEQVRo3uXby3qjIBQAYBEfwO+buM9c3Ntp2ZOZ8ADx8v6vMp2qybmBCK6SbNomEc4vcAS0RbG+1Iebvl5/vxev8lIf0+M1nl8DXboJvd5eET1N3QuoGfoVOvlp4q/+6fv3JL2evY83orp/uVH9NbLrp0braXrBLt541LenVpsH9Ao7+/DUc1E0kuF85ZkHdokHMriMPfNEpbo39fx3e1fbV1D3NKVb8KEn1TkpCShvbxET50gvnzdaDG4A520mfhHSvg+oWsHaN9QlCf0Ydc+vqFYqfUk8SeqGNpcDtW+oKzEJ5KqHghYO1ZrOKPLUa842oPYNdbPRGmnqka+JrDAi13eT1Cd6jj9LuV7ff/+g51tQG3FOk6sWei5Qt3Qo5I1raVG9oXbinCZb3dFTCtWszlz1ZwRve9Qli/0YtfW8QzP73CmS1OQD7A6r0aHn49QXxrPyWqlLVrM9BegOqxt5iZat7tleh5UjsslqYXk91HFqIy/RstWDzOOjuE9XC0eNXZQana/hOPUYUBtWZ5q6CmwpBNWlEHykug9v6NQUY8VkNu/3RKlH/1KTs4NqciLPx6k72qjWs/HTJavlw/C1Wwz35Nlxyldb6Q2pGay0OyJNX8fIneFhM9ylmhFeb45RX2gPtKSFRmGXa6e6+LW5WyiGuwTaO3KactTj+nGJdJbQBsebZq9a3hseNsJdcdaRgnPUw1q1FtVq+drNcMxudSmyz+Fw1xK7luyzZandEuM8gP8SyFqnbXkNu9Uy+xIOd00s54YMiZ3X65qrP9+bv/pOIGudXcWFJrwYl4auxB7C6jWx1DSCLLVZDpx//iRFrwXUmqezBHVRfPji8anvw1mTz7LUzRL4/Pc3ArkP55K3TJI6eOteUKv7O4qMnSz13HHsnLZGjSHqkbodG69p6qL45nxzAEEN+pjDfSNLPRfbl/CveyTlIwrDqkhV0/a+hdRgNBtcXJYacXuiBnW2jJCuxjOWPqRu+YajPUA9HzwuHZ2oG77ddztEDWe6Q0htHkFXvh31BPXySyuqQbeuWIz71OWP948rOLyNUsMUpvH389Rz8MsFjKgduA3Jph971C2bvegoNZSWGJCnhivAGquhVLE68tTKxagraVOlO0ANd6oLrEYTA0dH6R51w0OMUouLcps/D8d5BavFk3ZJmYdXPLWZGLXxP7eUpy5hcVhtgkvDNPWlEG7v+cJVgcVpnlrBZtTe+wJ8v26PmucuFTNL0YGntfLUwGaxWt7zua8W9qgVu3rrmBlpFXhaK1NtQGlIrcNPiO1aXzva2CZm9eF5XMseoG5BKyL1Sa7zkqIGKeIPKTuw0jSBmwPK+1GU+gQiRWpPnX2KGp7B8ffPa9SugpzMlkMi1LyLOv6kwEDUnjrHvdfr/6H4HqhE+xRU7UksczrLVGtQF1QrX5x1gtp3CtHahKq990TO+WolNIkNPO+6xrlP7btjMgbSUOOLwOar781gsfoUqnO3Wm93cKY25MxoeFCu2vD7VBa0zkhv2fQpal9urANq55vZDAeowV63Fm58DXR6OCSpq+AFQVKXrD84aRGYqG74yt2CUns206hT1GI+w/8KQNTV5Ln/9NVAuepKVGt2pg1OZ3vVenNziagb9q12ElolUa0fVQE1P9PNJK/IItVCerwEp5KGTTkbUGKuuuSZFmyKPs505QkqVs3Yf8ITaMeGAZxQ5aqX3y1WO5ZlNZ5E7lfjjfCxK4Lqkl/S4YT3IHWH1IrXWeIclKD+LGP9T+Tr8/9r6j/yRPVUqj3rEAAAAABJRU5ErkJggg=="
				)
		}
	}, this.get = function(cm) {
		return dL[cm]
	}, this.ro = function(name) {
		for (var aE = cj.length - 1; 0 <= aE; aE--)
			if (cj[aE] === name) return dL[aE];
		return a3Z
	}, this.cr = function() {
		return 0 === a3Y
	}
}

function qv() {
	var a3n, a3o, a3p, a3q, a3r, a3s, a3t, a3u, a3v, a3w, a3x, a3k = [224, 224, 224],
		a3l = [
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
		a3m = [
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

	function a4K(bc, a4M) {
		zQ[bc] = 0, zQ[bc + 1] = 0, zQ[bc + 2] = a4M, zQ[bc + 3] = 0, a4N(bc)
	}

	function a4N(bc) {
		var hD;
		iI.iJ || (hD = bW.hN(bc), bc = bW.d6(bc), iI.iJ = hD >= i8.zP[0] && hD <= i8.zP[2] && bc >= i8.zP[1] && bc <= i8.zP[3])
	}
	this.b = function(mj) {
		if (a3n = new Uint8Array(bZ), a3o = new Uint8Array(bZ), a3p = new Uint8Array(bZ), a3q = new Uint8Array(bZ), a3r = new Uint8Array(bZ), a3s = new Uint8Array(bZ), a3t = new Uint8Array(bZ), a3u = new Uint8Array(bZ), a3v = new Uint8Array(bZ),
			a3w = new Uint8Array(bZ), this.w8 = new Uint8Array(bZ), (a3x = new Int32Array(4))[0] = -4 * az.b0, a3x[1] = 4, a3x[2] = -a3x[0], a3x[3] = -a3x[1], cS)
			for (var ca, fV, aE = bZ - 1; 0 <= aE; aE--) fV = fW.ng[fW.fX[aE]], ca = bJ((a3m[fV][3] + 1) * em.random(), em.value(100)), a3n[aE] = a3l[fV][0] + ca * a3m[fV][0], a3o[aE] = a3l[fV][1] + ca * a3m[fV][1], a3p[aE] = a3l[fV][2] + ca *
				a3m[fV][2];
		else fr.fs && fr.ft.a44 ? function(ad) {
			var aE;
			for (aE = ly - 1; 0 <= aE; aE--) a3n[aE] = 4 * ad[aE][0], a3o[aE] = 4 * ad[aE][1], a3p[aE] = 4 * ad[aE][2]
		}(fr.ft.a44) : (function() {
			for (var aE = bZ - 1; e5 <= aE; aE--) a3n[aE] = 4 * bJ(64 * em.random(), em.value(100)), a3o[aE] = 4 * bJ(64 * em.random(), em.value(100)), a3p[aE] = 4 * bJ(64 * em.random(), em.value(100))
		}(), function(mj) {
			for (var aE = e5 - 1; 0 <= aE; aE--) a3n[aE] = 4 * mj[aE].a34[0], a3o[aE] = 4 * mj[aE].a34[1], a3p[aE] = 4 * mj[aE].a34[2]
		}(mj));
		! function() {
			var aE, be;
			for (aE = bZ - 1; 0 <= aE; aE--) be = bJ(a3n[aE] + a3o[aE] + a3p[aE], 3), a3n[aE] += a4E(be - a3n[aE], 2), a3o[aE] += a4E(be - a3o[aE], 2), a3p[aE] += a4E(be - a3p[aE], 2), a3n[aE] -= a3n[aE] % 4, a3o[aE] -= a3o[aE] % 4, a3p[aE] -=
				a3p[aE] % 4
		}(),
		function() {
			for (var aE = bZ - 1; 0 <= aE; aE--) a3n[aE] += bJ(aE, 128), a3o[aE] += bJ(aE % 128, 32), a3p[aE] += bJ(aE % 32, 8), a3q[aE] = aE % 8
		}(), this.a4A(),
			function() {
				for (var aE = bZ - 1; 0 <= aE; aE--) a3r[aE] = a3n[aE] < 32 ? a3n[aE] + 32 : a3n[aE] - 32, a3s[aE] = a3o[aE] < 32 ? a3o[aE] + 32 : a3o[aE] - 32, a3t[aE] = a3p[aE] < 32 ? a3p[aE] + 32 : a3p[aE] - 32
			}(),
			function() {
				for (var aE = bZ - 1; 0 <= aE; aE--) a3u[aE] = 235 < a3n[aE] ? a3n[aE] - 20 : a3n[aE] + 20, a3v[aE] = 235 < a3o[aE] ? a3o[aE] - 20 : a3o[aE] + 20, a3w[aE] = 235 < a3p[aE] ? a3p[aE] - 20 : a3p[aE] + 20
			}()
	}, this.a4D = function(player) {
		var ad = eU.aY;
		return ad[0] = a3n[player], ad[1] = a3o[player], ad[2] = a3p[player], ad
	}, this.a4A = function() {
		for (var aE = bZ - 1; 0 <= aE; aE--) this.w8[aE] = a3n[aE] + a3o[aE] + a3p[aE] < 280 ? 0 : 1
	}, this.hN = function(bc) {
		return bJ(bc, 4) % az.b0
	}, this.d6 = function(bc) {
		return bJ(bc, 4 * az.b0)
	}, this.m5 = function(hD, hE) {
		return Math.floor(4 * (hE * az.b0 + hD))
	}, this.mL = function(bc) {
		return this.lb(bc + a3x[0]) || this.lb(bc + a3x[1]) || this.lb(bc + a3x[2]) || this.lb(bc + a3x[3])
	}, this.mJ = function(bc, player) {
		return this.a4F(bc + a3x[0], player) || this.a4F(bc + a3x[1], player) || this.a4F(bc + a3x[2], player) || this.a4F(bc + a3x[3], player)
	}, this.s5 = function(player) {
		return player < e5 && 2 !== e7[player]
	}, this.bf = function(bc) {
		return 208 <= zQ[bc + 3]
	}, this.mQ = function(player, bc) {
		return this.bf(bc) && this.a4G(player, bc)
	}, this.a4G = function(player, bc) {
		return player === this.bg(bc)
	}, this.a4H = function(bc) {
		return 208 <= zQ[bc + 3] && zQ[bc + 3] < 224
	}, this.eg = function(bc) {
		return 224 <= zQ[bc + 3] && zQ[bc + 3] < 248
	}, this.mK = function(bc) {
		for (var aE = 3; 0 <= aE; aE--)
			if (this.s7(bc + a3x[aE])) return !0;
		return !1
	}, this.a4I = function(bc) {
		return 192 <= zQ[bc + 3] && zQ[bc + 3] < 208
	}, this.a4J = function(bc, player) {
		return this.a4I(bc) && player === this.bg(bc)
	}, this.bX = function(bc) {
		return this.bf(bc) || this.bh(bc)
	}, this.s7 = function(bc) {
		return 0 === zQ[bc + 3] && 2 === zQ[bc + 2]
	}, this.bh = function(bc) {
		return 0 === zQ[bc + 3] && 1 === zQ[bc + 2]
	}, this.lb = function(bc) {
		return 0 === zQ[bc + 3] && 3 === zQ[bc + 2]
	}, this.s6 = function(bc) {
		return this.lb(bc)
	}, this.a4F = function(bc, player) {
		return this.bh(bc) || this.bf(bc) && player !== this.bg(bc)
	}, this.bg = function(bc) {
		return zQ[bc] % 4 * 128 + zQ[bc + 1] % 4 * 32 + zQ[bc + 2] % 4 * 8 + zQ[bc + 3] % 8
	}, this.mR = function(bc) {
		a4K(bc, 1)
	}, this.a4L = function(bc) {
		a4K(bc, 2)
	}, this.mI = function(bc, player) {
		zQ[bc] = a3n[player], zQ[bc + 1] = a3o[player], zQ[bc + 2] = a3p[player], zQ[bc + 3] = 208 + a3q[player], a4N(bc)
	}, this.bY = function(bc, player) {
		zQ[bc] = a3r[player], zQ[bc + 1] = a3s[player], zQ[bc + 2] = a3t[player], zQ[bc + 3] = 224 + a3q[player], a4N(bc)
	}, this.eh = function(bc, player) {
		zQ[bc] = a3u[player], zQ[bc + 1] = a3v[player], zQ[bc + 2] = a3w[player], zQ[bc + 3] = 248 + a3q[player], a4N(bc)
	}, this.a4O = function(bc, player) {
		zQ[bc] = a3k[0] + a3n[player] % 4, zQ[bc + 1] = a3k[1] + a3o[player] % 4, zQ[bc + 2] = a3k[2] + a3p[player] % 4, zQ[bc + 3] = 192 + a3q[player], a4N(bc)
	}
}

function qw() {
	var cj, bS, bU, aA, a4P;

	function a4U() {
		for (var a4Z = 0, aE = 1; aE < 5; aE++) a4Z += bS[aE] % 1024;
		return a4Z
	}

	function a4T() {
		for (var aE = 1; aE < bU - a4P; aE++) bS[aE] = parseInt(bS[aE])
	}

	function a4V() {
		bS[0] = "Player " + Math.floor(1e3 * Math.random()), bS[1] = a1 < a2 ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, bS[2] = 1, bS[3] = 1, bS[4] = a1 < a2 ? 0 : 1, bS[5] = 0, bS[6] = "000", bS[7] = "0", bS[8] = "0", bS[9] = "0",
			r.a8()
	}

	function a4S() {
		for (var aE = bU - a4P - 1; 0 <= aE; aE--) bS[aE] = w.x(bS[aE]);
		bS[0] = w.nC(bS[0])
	}

	function a4c(name, value, a4d) {
		var a4e = new Date,
			a4d = (a4e.setTime(a4e.getTime() + Math.floor(31536e6 * a4d)), name + "=" + value + ";expires=" + a4e.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = a4d
	}
	this.b = function() {
		if (!(5 <= q || m)) {
			a4P = 4, cj = [], bU = 10;
			for (var aE = aA = 0; aE < bU; aE++) cj.push("u" + aE);
			bS = new Array(bU), ! function(a4a) {
				for (var ej, bc, a4b = a4a.split(";"), aE = a4b.length - 1; 0 <= aE; aE--) {
					for (a4b[aE] = a4b[aE].trim(), ej = 2; 0 <= ej; ej--) a4b[aE] = a4b[aE].replace(" ", "");
					3 < a4b[aE].length && (ej = cj.indexOf(a4b[aE].substring(0, 2)), bc = a4b[aE].indexOf("="), 0 <= ej && 2 === bc ? bS[ej] = a4b[aE].substring(bc + 1, a4b[aE].length) : 0 < bc && a4c(a4b[aE].substring(0, bc), "0", 0))
				}
			}(document.cookie), bS[9] || (bS[9] = "0"), (! function() {
				for (var aE = bU - 1; 0 <= aE; aE--)
					if (void 0 === bS[aE]) return;
				return 1
			}() || (aA = 2, a4S(), a4T(), a4U() !== bS[5])) && a4V()
		}
	}, this.a8 = function() {
		if (2 === aA) {
			bS[1] = 0 === bS[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : bS[1], bS[5] = a4U(), ! function() {
				for (var aE = 1; aE < bU - a4P; aE++) bS[aE] = bS[aE].toString()
			}(), ! function() {
				bS[0] = w.nB(bS[0]);
				for (var aE = bU - a4P - 1; 0 <= aE; aE--) bS[aE] = w.a9(bS[aE])
			}();
			for (var aE = bU - 1; 0 <= aE; aE--) a4c(cj[aE], bS[aE], 1);
			a4S(), a4T()
		}
	}, this.aA = function() {
		return aA
	}, this.u1 = function(ej) {
		aA = ej, this.a8()
	}, this.a7 = function(aE, value) {
		5 <= q || m || (bS[aE] = value)
	}, this.s = function(aE) {
		return 5 <= q || m ? 0 : bS[aE]
	}
}

function rJ() {
	var cm = 0,
		a4f = new Uint16Array(32);

	function remove(rr) {
		var aE;
		for (cm -= 2, aE = rr; aE < cm; aE += 2) a4f[aE] = a4f[aE + 2], a4f[aE + 1] = a4f[aE + 3]
	}
	this.b = function() {
		cm = 0
	}, this.fF = function() {
		var aE, ed, eA;
		if (0 !== cm)
			if (0 === e6[bN] || b5.a4g(bN) === b5.b6(bN)) cm = 0;
			else
				for (aE = cm - 2; 0 <= aE; aE -= 2)(ed = a4f[aE]) < bZ && 0 === e6[ed] ? remove(aE) : (eA = a4f[aE + 1], (bZ <= ed && s8(bN) || ed < bZ && sD(bN, ed)) && (cc.cd.ce(eA, ed), remove(aE)))
	}, this.rz = function(ed, eA) {
		! function(ed, eA) {
			var aE;
			for (aE = 0; aE < cm; aE += 2)
				if (a4f[aE] === ed) return a4f[aE + 1] = Math.min(a4f[aE + 1] + eA, 1023), 1;
			return
		}(ed, eA) && 32 !== cm && (a4f[cm] = ed, a4f[cm + 1] = eA, cm += 2)
	}
}

function a4i(player) {
	a4j(player), a4k(player), a4l(player), bL.bM(player), gK.h8(player), b5.ks(player), eO.a4m.a4n(player)
}

function a4j(player) {
	bW.s5(player) && nX++;
	var a4o = b5.a4p(player);
	0 === a4o.length ? player === bN && a4q() : (a4r(player, a4o), a4s(player, a4o))
}

function a4q() {
	bR.bS[17] += bO[bN] + b5.a4t(bN), gZ.show(!1, !1, !1, !0), g9.yt()
}

function a4r(player, a4o) {
	for (var aE = a4o.length - 1; 0 <= aE; aE--) b5.a4u(a4o[aE], player)
}

function a4v(a4o) {
	for (var cm = 0, aE = a4o.length - 1; 1 <= aE; aE--) bv[a4o[aE]] > bv[a4o[cm]] && (cm = aE);
	return cm
}

function a4s(player, a4o) {
	var aE, td, a4w = a4o[a4v(a4o)];
	if (9 === fv && 1 === fW.fX[player] && em.fP(8) && g1.a4x(a4w), player === bN) 2 !== e7[player] && g7.nN(a4w, 1), a4q();
	else {
		for (td = !1, aE = a4o.length - 1; 0 <= aE; aE--)
			if (a4o[aE] === bN) return td = !0, void g7.nN(player, 0);
		!td && player < e5 && 2 !== e7[player] && g7.tI(0, player, a4w)
	}
}

function a4l(player) {
	e6[player] = bO[player] = 0, bV[player] = null, bn[player] = null, bo[player] = null, br[player] = null, gI.a4y(player)
}

function a4k(player) {
	for (var bc, hE, hD = f2[player]; hD >= f3[player]; hD--)
		for (hE = f5[player]; hE >= f6[player]; hE--) bc = 4 * (hE * az.b0 + hD), bW.mQ(player, bc) && (bW.mR(bc), bv[player]--)
}

function rP() {
	var input;

	function a4z(nz) {
		a51(nz.target.files)
	}

	function a51(files) {
		files && 0 < files.length && op.a52(files[0])
	}

	function a57(nz) {
		var fV = new Image;
		fV.onload = a58, fV.src = nz.target.result
	}

	function a58(nz) {
		var a59, nz = nz.target,
			cu = nz.width,
			ez = nz.height;
		4096 < cu || 4096 < ez || cu < 10 || ez < 10 ? (a59 = "Image w & h must be between 10 and 4096.", n ? n.showToast(a59) : alert(a59)) : (fr.ok(), az.ll = az.wY(), az.a2V = 0, az.b0 = cu, az.b1 = ez, az.lN.width = az.b0, az.lN.height = az.b1,
			az.lJ.drawImage(nz, 0, 0), a59 = az.lJ.getImageData(0, 0, az.b0, az.b1), az.lO = a59.data)
	}

	function a5A(nz) {
		nz.stopPropagation(), nz.preventDefault()
	}

	function a5B() {
		return 0 === aT.ov() || 2 === aT.ov()
	}
	this.b = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = a4z
	}, this.a36 = function() {
		input.click()
	}, this.a50 = function(nz) {
		a4z(nz)
	}, this.a52 = function(a53) {
		var ad = a53.name.split("."),
			a54 = ad[ad.length - 1].toLowerCase();
		"json" === a54 ? fr.a56(a53) : "gif" !== a54 && "jpg" !== a54 && "jpeg" !== a54 && "png" !== a54 || (az.ft.lk[az.wY()].name = ad[0], (a54 = new FileReader).onload = a57, a54.readAsDataURL(a53))
	}, this.oL = function(nz) {
		a5B() && (a5A(nz), nz.dataTransfer.dropEffect = "copy")
	}, this.oM = function(nz) {
		a5B() && (a5A(nz), a51(nz.dataTransfer.files))
	}
}

function rN() {
	this.a5C = null, this.b = function() {
		this.a5C = 10 !== fv ? null : new Uint32Array(bZ)
	}, this.fF = function() {
		10 === fv && this.cU()
	}, this.cU = function() {
		for (var bc, target, z4, a5C = this.a5C, mj = fZ, pV = bO, aE = fY - 1; 0 <= aE; aE--) bc = mj[aE], e5 <= bc || (target = Math.max(bJ(pV[bc], 4), 2048), z4 = Math.max(bP.z5(bc), 100), a5C[bc] += bJ(z4 * target, 1e4), a5C[bc] > target && (
			a5C[bc] = target))
	}, this.pb = function(player, ee) {
		return ee > this.a5C[player] ? (ee = this.a5C[player], this.a5C[player] = 0) : this.a5C[player] -= ee, ee
	}
}

function rQ() {
	function a57(nz) {
		fr.fs = !0, fr.a5I(JSON.parse(nz.target.result)), fr.ud()
	}

	function a5O(v, min, max, a5X) {
		return "string" != typeof v || v.length < min ? a5X : v.length > max ? v.substring(0, max) : v
	}

	function a5J(aR, min, max) {
		return aR = "number" == typeof aR ? Math.floor(aR) : min, Math.min(Math.max(aR, min), max)
	}

	function a5M(aR, a5Z) {
		return "boolean" == typeof aR ? aR : a5Z
	}

	function a5Q(aR, bU, max, a5a) {
		var aE, ad, ca;
		if (!Array.isArray(aR) || aR.length < 1) return null;
		for (ad = new(8 === a5a ? Uint8Array : Uint16Array)(bU), ca = aR.length, aE = 0; aE < bU; aE++) ad[aE] = a5J(aR[aE % ca], 0, max);
		return ad
	}
	this.fs = !1, this.ft = null, this.ok = function() {
		this.fs = !1, this.ft = null
	}, this.a32 = function() {
		this.ft.a44 && this.ft.a5D && (this.ft.a44[0] = d4.sk[2].nR.a0h()), pt(this.ft.a5E, 0, this.a5F(), this.ft.pw, !1, !1)
	}, this.a5F = function() {
		return [{
			name: this.ft.a5G ? qG.a33() : this.ft.a5H[0],
			a34: [0, 0, 0],
			a35: 0
		}]
	}, this.a56 = function(a53) {
		var a55 = new FileReader;
		a55.onload = a57, a55.readAsText(a53)
	}, this.a5I = function(tE) {
		this.ft = {}, this.ft.a2y = a5J(tE.numberPlayers, 1, 512), this.ft.a5K = a5J(tE.modeID, 0, 1), this.ft.ll = a5J(tE["gMap.mapID"], 0, az.a5L - 1), this.ft.a2Z = a5J(tE.seedMap, 0, 16383), this.ft.a5E = a5J(tE.seedSpawn, 0, 16383), this.ft
			.pz = a5M(tE.selectableSpawn, !1), this.ft.a5G = a5M(tE.selectableName, !1), this.ft.a5D = a5M(tE.selectableColor, !1), az.ft.lk[az.wY()].name = this.ft.a5N = a5O(tE.mapName, 1, 25, "Custom Map"), this.ft.sx = function(aR) {
				var aE, bU;
				if (!Array.isArray(aR) || aR.length < 1) return [];
				for (bU = aR.length, aE = 0; aE < bU; aE++) aR[aE] = a5O(aR[aE], 0, 100, "");
				return aR
			}(tE.description), this.ft.lt = a5Q(tE.playerX, this.ft.a2y, 4096, 16), this.ft.m4 = a5Q(tE.playerY, this.ft.a2y, 4096, 16), this.ft.a5R = a5Q(tE.playerTeam, this.ft.a2y, 8, 8), this.ft.fu = a5Q(tE.playerStrength, this.ft.a2y, 5, 8),
			this.ft.a44 = function(aR, bU) {
				var aE, ad, ca;
				if (!Array.isArray(aR) || aR.length < 1) return null;
				for (ad = new Array(bU), ca = aR.length, aE = 0; aE < bU; aE++) ad[aE] = a5Q(aR[aE % ca], 3, 63, 8);
				return ad
			}(tE.playerColor, this.ft.a2y), this.ft.a5H = function(aR, bU) {
				var aE, ad, ca;
				if (!Array.isArray(aR) || aR.length < 1) return null;
				for (ad = new Array(bU), ca = aR.length, aE = 0; aE < bU; aE++) ad[aE] = a5O(aR[aE % ca], 3, 26, "Bot");
				return ad
			}(tE.playerName, this.ft.a2y), this.ft.a5U = "string" == typeof tE.mapBase64 ? tE.mapBase64 : "", this.ft.a5G = this.ft.a5G || !this.ft.a5H, this.ft.pw = 0 === this.ft.a5K ? 7 : 2 === this.ft.a5K ? 9 : 6, this.ft.lt = this.ft.m4 ?
			this.ft.lt : null
	}, this.ud = function() {
		! function(v) {
			var dL, dI, a5W = "data:image/png;base64,";
			if (v.length <= a5W.length) return;
			fr.ft.ll = 0, fr.ft.a2Z = 0, az.l4(0, 0), v.substring(0, a5W.length) !== a5W && (v = a5W + v);
			return (dL = new Image).onload = function() {
				az.b0 = dL.width, az.b1 = dL.height, 4096 < az.b0 || 4096 < az.b1 || az.b0 < 10 || az.b1 < 10 ? (az.l4(0, 0), alert("Image w & h must be between 10 and 4096.")) : (az.ll = az.wY(), az.a2V = 0, az.lN.width = az.b0, az.lN
					.height = az.b1, az.lJ.drawImage(dL, 0, 0), dI = az.lJ.getImageData(0, 0, az.b0, az.b1), az.lO = dI.data)
			}, dL.src = v, fr.ft.a5U = "", 1
		}(this.ft.a5U) && az.l4(this.ft.ll, this.ft.a2Z)
	}, this.a5b = function() {
		for (var max = 0, bU = this.ft.a2y, aE = 0; aE < bU; aE++) this.ft.a5R[aE] > max && (max = this.ft.a5R[aE]);
		return Math.max(0, max - 1)
	}
}

function qx() {
	var a5c, a5d, dF, ed, ee, id;

	function a5e(player) {
		return player < e5 ? a5c * player : a5c * e5 + a5d * (player - e5)
	}
	this.b = function() {
		a5c = e5 < 16 ? 12 : 8, a5d = 4;
		var bU = a5e(bZ);
		dF = new Uint8Array(bZ), ed = new Uint16Array(bU), ee = new Uint32Array(bU), id = new Uint16Array(bU)
	}, this.kW = function(vc, a5f) {
		var a5g = this.c9(vc, a5f);
		this.c8(vc, a5f, 0), a5g = cM.cN.jn(vc, a5g), vc === bN && (bR.bS[13] -= a5g)
	}, this.ks = function(player) {
		dF[player] = 0
	}, this.a4u = function(player, a5f) {
		var fd, a5f = function(player, a5f) {
			var aE, ca = a5e(player);
			for (aE = dF[player] - 1; 0 <= aE; aE--)
				if (0 === id[ca + aE] && ed[ca + aE] === a5f) return aE;
			return dF[player]
		}(player, a5f);
		a5f !== dF[player] && (fd = ee[a5e(player) + a5f], this.bT(player, a5f), this.ea(player, fd, bZ))
	}, this.es = function(player, a5f) {
		for (var ca = a5e(player), aE = dF[player] - 1; 0 <= aE; aE--)
			if (0 === id[ca + aE] && ed[ca + aE] === a5f) return !0;
		return !1
	}, this.cQ = function(player) {
		return player < e5 ? dF[player] < a5c : dF[player] < a5d
	}, this.b6 = function(player) {
		return dF[player]
	}, this.bC = function(player, aE) {
		return ed[a5e(player) + aE]
	}, this.b7 = function(player, aE) {
		return id[a5e(player) + aE]
	}, this.hQ = function(player, a5i) {
		for (var ca = a5e(player), aE = dF[player] - 1; 0 <= aE; aE--)
			if (id[ca + aE] === a5i) return aE;
		return -1
	}, this.bD = function(player, aE) {
		return ee[a5e(player) + aE]
	}, this.c9 = function(player, a5f) {
		for (var ca = a5e(player), aE = dF[player] - 1; 0 <= aE; aE--)
			if (0 === id[ca + aE] && ed[ca + aE] === a5f) return ee[ca + aE];
		return 0
	}, this.a4t = function(player) {
		for (var ca = a5e(player), aR = 0, aE = dF[player] - 1; 0 <= aE; aE--) aR += ee[ca + aE];
		return aR
	}, this.a5j = function(player) {
		for (var ca = a5e(player), aR = 0, aE = dF[player] - 1; 0 <= aE; aE--) 0 === id[ca + aE] && (aR += ee[ca + aE]);
		return aR
	}, this.a4g = function(player) {
		for (var ca = a5e(player), tc = 0, aE = dF[player] - 1; 0 <= aE; aE--) 0 < id[ca + aE] && tc++;
		return tc
	}, this.c8 = function(player, a5f, fd) {
		for (var ca = a5e(player), aE = dF[player] - 1; 0 <= aE; aE--) 0 === id[ca + aE] && ed[ca + aE] === a5f && (ee[ca + aE] = fd)
	}, this.bu = function(player, aE, fd) {
		ee[a5e(player) + aE] = fd
	}, this.ea = function(player, fd, a5f) {
		var aE, ca = a5e(player);
		for (a5f === bN && bR.bS[player < e5 ? 6 : 5]++, aE = dF[player] - 1; 0 <= aE; aE--)
			if (0 === id[ca + aE] && ed[ca + aE] === a5f) return ee[ca + aE] += fd, void(ee[ca + aE] = ee[ca + aE] > pX ? pX : ee[ca + aE]);
		ed[ca + dF[player]] = a5f, ee[ca + dF[player]] = fd, id[ca + dF[player]] = 0, dF[player]++, player < e5 && (a5f === bN ? g7.nN(player, 5) : player === bN && g8.tK(a5f))
	}, this.a5k = function(player, fd, a5i) {
		var ca = a5e(player);
		e6[player] = 2, ed[ca + dF[player]] = 0, ee[ca + dF[player]] = fd, id[ca + dF[player]] = a5i, dF[player]++
	}, this.bT = function(player, cm) {
		var ej, ca;
		if (0 !== dF[player])
			for (ca = a5e(player), dF[player]--, ej = cm; ej < dF[player]; ej++) ed[ca + ej] = ed[ca + ej + 1], ee[ca + ej] = ee[ca + ej + 1], id[ca + ej] = id[ca + ej + 1]
	}, this.a4p = function(player) {
		for (var ej, ca, a4o = [], aE = fY - 1; 0 <= aE; aE--)
			for (ca = a5e(fZ[aE]), ej = dF[fZ[aE]] - 1; 0 <= ej; ej--)
				if (0 === id[ca + ej] && ed[ca + ej] === player) {
					a4o.push(fZ[aE]);
					break
				} return a4o
	}
}

function qy() {
	var a5l, a5m, a5n, a5o, a5p, a5q;
	this.b = function() {
		a5n = a5l = 10, a5o = a5m = 10
	}, this.a5r = function() {
		a5q = 512, a5p = new Uint16Array(a5q);
		for (var aE = 0; aE < a5q; aE++) a5p[aE] = 100 + cD(bJ(25600 * aE, a5q - 4), 9)
	}, this.xo = function() {
		return a5o
	}, this.fF = function() {
		if (--a5n <= 0 && (a5n = a5l, function() {
				var aE, a5w, a3 = bO[bN];
				for (fx && !cS && 0 !== e6[0] && 0 === fy.fz[0].be && (bO[0] += bJ(bv[0], 6)), aE = fY - 1; 0 <= aE; aE--) a5w = bJ(bP.z5(fZ[aE]) * bO[fZ[aE]], 1e4), bO[fZ[aE]] += a5w < 1 ? 1 : a5w, bP.bQ(fZ[aE]);
				bR.bS[9] += bO[bN] - a3
			}(), --a5o <= 0)) {
			a5o = a5m;
			for (var a3 = bO[bN], aE = fY - 1; 0 <= aE; aE--) bO[fZ[aE]] += bv[fZ[aE]], bP.bQ(fZ[aE]);
			bR.bS[8] += bO[bN] - a3
		}
	}, this.z5 = function(player) {
		var dO = a5p[bJ((a5q - 1) * bv[player], po)],
			a5v = (aL.fU() < 1920 && (dO = dO < (a5v = bJ(100 * (13440 - 6 * aL.fU()), 1920)) ? a5v : dO), this.fJ(player));
		return bO[player] > a5v && (dO -= bJ(2 * dO * (bO[player] - a5v), a5v)), dO < 0 ? 0 : 700 < dO ? 700 : dO
	}, this.fJ = function(player) {
		player = 100 * bv[player];
		return pp < player ? pp : player
	}, this.bQ = function(player) {
		var aR = bv[player] * pW;
		bO[player] = Math.min(Math.min(bO[player], pX), aR)
	}, this.jN = function(player, jO) {
		cM.cN.jn(jO, eU.aX[0]), bR.jo(player, jO), g8.a5y(player, eU.aX[0] + eU.aX[1]), g8.jp(jO, eU.aX[0]), cM.cN.kJ(player)
	}
}

function qz() {
	var a5z, a60, a61, a62, a63, a64, a65, a66, a67, a68, a69, a6A, a6B, a6C, a6D, a6E, a6F, a6G, a6I, a6J, a6K, a6L, a6M, a6S, a6T, a6H = null,
		a6O = 0,
		a6P = new Float32Array(4),
		a6Q = 0,
		a6R = !0;

	function a6V() {
		a6H.width = hL, a6H.height = d3, (a6I = a6H.getContext("2d", {
			alpha: !0
		})).textAlign = dA, a6I.textBaseline = d9, a6I.imageSmoothingEnabled = !0
	}

	function a6W() {
		var aE, a6a;
		for (d8.font = cn + Math.floor(100 * a69) + co, a6a = 80 / Math.floor(d8.measureText(gR.hU(pX)).width), d8.font = cn + 100 + co, aE = bZ - 1; 0 <= aE; aE--) a66[aE] = 100 / Math.floor(d8.measureText(hV[aE]).width), a65[aE] = Math.min(a6a,
			a66[aE])
	}

	function a6b(aE) {
		return !hR.hS.hT || bO[aE] < 1e6 ? 1 : bO[aE] < 1e7 ? a6P[0] : a6P[Math.min(Math.floor(Math.log10(bO[aE])) - 6, 3)]
	}

	function a6Z(dM) {
		a6G = !1, a6F = 1, a6D = a6E = 0, a6R ? (dM.textAlign = dA, dM.textBaseline = d9) : dM.clearRect(0, 0, hL, d3);
		var hF, hG, aE, cs, hH, hI = eB / eC,
			hJ = eD / eC,
			hK = (hL + eB) / eC,
			hM = (d3 + eD) / eC,
			a6f = 0 !== e6[bN] && bW.s5(bN);
		dM.imageSmoothingEnabled = !0;
		for (var ej = fY - 1; 0 <= ej; ej--) aE = fZ[ej], (cs = a6C * eC * a6b(aE) * a65[aE] * a63[aE]) < a6B || a67 <= cs || a61[aE] + a63[aE] > hI && a61[aE] < hK && a62[aE] + a64[aE] > hJ && a62[aE] < hM && (hF = hL * (a61[aE] + a63[aE] / 2 -
			hI) / (hK - hI), hG = d3 * (a62[aE] + a64[aE] / 2 - hJ) / (hM - hJ) - .1 * cs, dM.font = ul[e7[aE]] + cs + co, dM.fillStyle = function(cs, aE) {
				if (a68 <= cs && cs < a67) return fW.a6s[bW.w8[aE]] + a6o(cs).toFixed(3) + ")";
				return fW.a6t[bW.w8[aE]]
			}(cs, aE), hR.hS.hT ? dM.fillText(gR.hU(bO[aE]), hF, hG) : a6h(aE, cs, hF, hG, dM), a6G = !0, 0 < a6K[aE] ? function(hF, hG, cs, aE, dM) {
				0 === xp[aE] ? aF.uf(a6J[aE]) ? (function(hF, hG, cs, player, jc, dM) {
					for (var sU = .9 * cs / aF.cu, lx = hG - .5 * sU * aF.cu - .05 * cs, dK = (dM.globalAlpha = a6o(cs), a6b(player) * (hR.hS.hT ? a6Q : a66[player])), lw = hF - .5 * cs / dK - .4 * cs - sU * aF.cu, cV = 0; cV < 2; cV++)
						dM.setTransform(sU, 0, 0, sU, lw, lx), dM.drawImage(aF.rn[jc], 0, 0), lw = hF + .5 * cs / dK + .4 * cs;
					dM.globalAlpha = 1, dM.setTransform(1, 0, 0, 1, 0, 0)
				}(hF, hG, cs, aE, a6J[aE], dM), a6j(hF, hG, cs, 0, 0, dM)) : aF.ue(a6J[aE]) ? (a6r(hF, hG, cs, a6J[aE], 0, dM), a6j(hF, hG, cs, 0, 1, dM)) : (a6r(hF, hG, cs, a6J[aE], 1, dM), a6j(hF, hG, cs, 1, 0, dM)) : a6r(hF, hG, cs, a6J[
					aE], 0, dM)
			}(hF, hG, cs, aE, dM) : 0 === xp[aE] && a6j(hF, hG, cs, 0, 0, dM), a6f && (0 < a6K[aE + bZ] || 0 < a6K[aE + 2 * bZ] || 0 < a6K[aE + 3 * bZ] || 0 < a6K[aE + 4 * bZ]) && function(hF, hG, cs, aE, dM) {
				var fV, tc = -1;
				for (fV = 4; 1 <= fV; fV--) 0 < a6K[aE + fV * bZ] && tc++;
				for (fV = 1; fV < 5; fV++) 0 < a6K[aE + fV * bZ] && (! function(hF, hG, cs, fV, aE, a6m, a3, dM) {
					var sU = .8 * cs / aF.cu,
						hF = hF - .5 * sU * aF.cu - .534 * a6m * cs,
						a6m = hG + 1.4 * sU * aF.cu;
					dM.setTransform(sU, 0, 0, sU, hF, a6m), dM.globalAlpha = a6o(cs), hG = 1 === fV ? aF.rn[a6J[aE + bZ]] : 2 === fV ? mY.rj()[4].dL[a3 < 255 ? 1 : 0] : (3 === fV ? mY.rj()[5] : mY.rj()[6]).dL[0];
					dM.drawImage(hG, 0, 0), dM.globalAlpha = 1, dM.setTransform(1, 0, 0, 1, 0, 0)
				}(hF, hG, cs, fV, aE, tc, a6K[aE + fV * bZ], dM), tc -= 2)
			}(hF, hG, cs, aE, dM), (hH = a69 * cs) < a6B || (dM.font = cn + hH + co, hR.hS.hT ? a6h(aE, hH, hF, hG + .78 * cs, dM) : dM.fillText(gR.hU(bO[aE]), hF, hG + .78 * cs)));
		dM.imageSmoothingEnabled = !1
	}

	function a6h(aE, cs, hD, hE, dM) {
		dM.fillText(hV[aE], hD, hE), aE < e5 && 2 !== e7[aE] || (aE = cs / a66[aE], dM.fillRect(hD - .5 * aE, hE + cM.iL.pM * cs, aE, Math.max(1, .1 * cs)))
	}

	function a6j(hF, hG, cs, a6m, a6n, dM) {
		var sU = .95 * cs / a6M,
			hF = hF - .5 * sU * a6L + .8 * a6m * cs,
			a6m = hG - 1.76 * sU * a6M - .82 * a6n * cs;
		dM.setTransform(sU, 0, 0, sU, hF, a6m), dM.globalAlpha = a6o(cs), dM.drawImage(cq.get(4), 0, 0), dM.globalAlpha = 1, dM.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6r(hF, hG, cs, jc, a6m, dM) {
		var sU = 1.2 * cs / aF.cu,
			hF = hF - .5 * sU * aF.cu - .8 * a6m * cs,
			a6m = hG - 1.5 * sU * aF.cu;
		dM.setTransform(sU, 0, 0, sU, hF, a6m), dM.globalAlpha = a6o(cs), dM.drawImage(aF.rn[jc], 0, 0), dM.globalAlpha = 1, dM.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6o(cs) {
		return a68 <= cs && cs < a67 ? 1 - (cs - a68) / (a67 - a68) : 1
	}

	function a72(dK, cu) {
		return 1 + Math.floor(a6A * dK * cu)
	}

	function a6z(aE) {
		for (var left = a61[aE], ej = a61[aE] - f3[aE] - 1; 0 <= ej; ej--)
			if (!a74(aE, --left, a62[aE], a64[aE])) {
				left++;
				break
			} var a75 = a61[aE];
		for (ej = f2[aE] - a61[aE] - a63[aE]; 0 <= ej; ej--)
			if (!a74(aE, ++a75 + a63[aE] - 1, a62[aE], a64[aE])) {
				a75--;
				break
			} var hD = Math.floor((left + a75) / 2),
			top = a62[aE];
		for (ej = a62[aE] - f6[aE] - 1; 0 <= ej; ej--)
			if (!a76(aE, hD, --top, a63[aE])) {
				top++;
				break
			} var bottom = a62[aE];
		for (ej = f5[aE] - a62[aE] - a64[aE]; 0 <= ej; ej--)
			if (!a76(aE, hD, ++bottom + a64[aE] - 1, a63[aE])) {
				bottom--;
				break
			} var hE = Math.floor((top + bottom) / 2);
		a6w(aE, hD, hE, a63[aE], a64[aE]) && (a61[aE] = hD, a62[aE] = hE)
	}

	function a6w(player, hD, hE, cu, ez) {
		be = Math.floor(.2 * cu);
		for (var be, fV = hD + cu - 1; hD <= fV; fV--)
			if (!a74(player, fV, hE, ez)) return;
		for (fV = hE + ez - 1 - (be = (be = Math.floor(.25 * ez)) < 1 ? 1 : be); hE + be <= fV; fV--)
			if (!a76(player, hD, fV, cu)) return;
		return 1
	}

	function a74(player, hD, hE, ez) {
		return bW.mQ(player, 4 * (hE * az.b0 + hD)) && bW.mQ(player, 4 * ((hE + ez - 1) * az.b0 + hD))
	}

	function a76(player, hD, hE, cu) {
		return bW.mQ(player, 4 * (hE * az.b0 + hD)) && bW.mQ(player, 4 * (hE * az.b0 + hD + cu - 1))
	}
	this.b = function() {
		if (a6G = !1, a6C = .88, a69 = .5, a6A = 1.8, a67 = Math.floor(.5 * ur), a68 = Math.floor(.2 * a67), a6B = hR.hS.a6U < 4 ? 1 + hR.hS.a6U : 2 * (hR.hS.a6U - 1), a60 = a5z = 0, a61 = new Uint16Array(bZ), a62 = new Uint16Array(bZ), a63 =
			new Uint16Array(bZ), a64 = new Uint16Array(bZ), a65 = new Float32Array(bZ), a66 = new Float32Array(bZ), a6J = new Uint8Array(2 * bZ), a6K = new Uint8Array(5 * bZ), a6S = new Uint8Array(bZ), a6T = new Uint8Array(bZ), a6R || (a6H =
				a6H || document.createElement("canvas"), a6V()), a6E = a6D = 0, a6F = 1, hR.hS.hT) {
			var aE, a6a;
			for (a6W(), d8.font = cn + Math.floor(100) + co, a6a = 100 / Math.floor(d8.measureText("900 000").width), aE = bZ - 1; 0 <= aE; aE--) a65[aE] = Math.min(a6a, 2 * a66[aE]);
			a6Q = a6a, a6P[0] = 100 / (a6a * Math.floor(d8.measureText("5 000 000").width)), a6P[1] = 100 / (a6a * Math.floor(d8.measureText("50 000 000").width)), a6P[2] = 100 / (a6a * Math.floor(d8.measureText("500 000 000").width)), a6P[3] =
				100 / (a6a * Math.floor(d8.measureText("1 000 000 000").width))
		} else a6W();
		! function() {
			var aE;
			for (aE = bZ - 1; 0 <= aE; aE--) bv[aE] < 12 ? (a61[aE] = f3[aE] + 1, a62[aE] = f6[aE] + 1, a63[aE] = 1, a64[aE] = 1) : (a61[aE] = f3[aE], a62[aE] = f6[aE] + 1, a63[aE] = 4, a64[aE] = 2);
			if (hr)
				for (aE = 0; aE < e5; aE++) a63[aE] = 0;
			a6L = cq.get(4).width, a6M = cq.get(4).height
		}()
	}, this.a5y = function(bc, tf) {
		tf > 18 * bv[bc] ? (a6T[bc] = 6, bW.w8[bc] = 2 + bW.w8[bc] % 2) : (a6S[bc] = 4, (bW.w8[bc] < 2 || 3 < bW.w8[bc]) && (bW.w8[bc] = 6 + bW.w8[bc] % 2))
	}, this.jp = function(bc, tf) {
		tf > 6 * bv[bc] ? (a6T[bc] = 6, bW.w8[bc] = 4 + bW.w8[bc] % 2) : (a6S[bc] = 4, (bW.w8[bc] < 4 || 5 < bW.w8[bc]) && (bW.w8[bc] = 8 + bW.w8[bc] % 2))
	}, this.resize = function() {
		a6R || (a6V(), a6Z(a6I))
	}, this.pk = function() {
		for (var aE = 0; aE < e5; aE++) f2[aE] - f3[aE] != 3 || f5[aE] - f6[aE] != 3 ? (a61[aE] = f3[aE] + (f2[aE] !== f3[aE] ? 1 : 0), a62[aE] = f6[aE], a63[aE] = 1, a64[aE] = 1) : (a61[aE] = f3[aE], a62[aE] = f6[aE] + 1, a63[aE] = 4, a64[aE] =
			2)
	}, this.kX = function(player, cm, a6c) {
		player += cm * bZ;
		if (0 === cm) return a6J[player] === a6c && 0 < a6K[player] ? void(a6K[player] = 0) : (a6J[player] = a6c, void(a6K[player] = aF.uf(a6c) ? 255 : 64));
		1 === cm ? (a6K[player] = 64, a6J[player] = a6c) : a6K[player] = a6c
	}, this.d7 = function() {
		a6R ? a6Z(d8) : a6G && (1 !== a6F ? (d8.imageSmoothingEnabled = !0, d8.setTransform(a6F, 0, 0, a6F, 0, 0), d8.drawImage(a6H, -a6D / a6F, -a6E / a6F), d8.setTransform(1, 0, 0, 1, 0, 0)) : (d8.imageSmoothingEnabled = !1, d8.drawImage(a6H, -
			a6D, -a6E)))
	}, this.x0 = function(dx, e0) {
		a6D += dx, a6E += e0
	}, this.oD = function(dx, e0) {
		g8.x0(dx, e0)
	}, this.zoom = function(ci, d0, d1) {
		a6F *= ci, a6D = (a6D + d0) * ci - d0, a6E = (a6E + d1) * ci - d1
	}, this.gf = function(tq) {
		return !a6R && (tq ? ++a6O % hR.yM[hR.hS.a6d] == 0 : aL.fU() % hR.yM[hR.hS.a6d] == 0) && (a6O = 0, a6Z(a6I), !0)
	}, this.hO = function(aE) {
		return a6b(aE) * a65[aE]
	}, this.a6e = function(player) {
		return a65[player]
	}, this.fF = function() {
		4 <= ++a60 && ! function() {
			var aE, ej, cV;
			for (a60 = 0, cV = 4; 1 <= cV; cV--)
				for (ej = fY - 1; 0 <= ej; ej--) aE = fZ[ej] + cV * bZ, 0 < a6K[aE] && a6K[aE] < 255 && a6K[aE]--;
			if (2 !== gg)
				for (ej = fY - 1; 0 <= ej; ej--) aE = fZ[ej], 0 < a6K[aE] && a6K[aE] < 255 && a6K[aE]--
		}();
		for (var bU = Math.floor(.1 * fY), aE = a5z + (bU = fY < (bU = bU < 8 ? 8 : bU) ? fY : bU) - 1; a5z <= aE; aE--) ! function(aE) {
			var dK = a6b(aE) * a65[aE];
			0 < a63[aE] && a6w(aE, a61[aE], a62[aE], a63[aE], a64[aE]) ? ! function(aE) {
				for (var hD, hE, cu, ez, dq = !1, cV = 0; cV < 8; cV++) {
					if (cu = a63[aE] + 2, ez = a64[aE] + 2, cu > f2[aE] - f3[aE] + 1 || ez > f5[aE] - f6[aE] + 1) return dq;
					if (hD = a61[aE] - 1, hE = a62[aE] - 1, !a6w(aE, hD, hE, cu, ez)) return dq;
					a61[aE] = hD, a62[aE] = hE, a63[aE] = cu, a64[aE] = ez, dq = !0
				}
				return dq
			}(aE) && function(aE, dK) {
				for (var hD, hE, cu, ez, dq = !1, a09 = a63[aE], i4 = 1 + Math.floor(.02 * a09), cV = 1; cV < 5; cV++) {
					if ((cu = a09 + cV * i4) > f2[aE] - f3[aE] + 1) return dq;
					if ((ez = a72(dK, cu)) > f5[aE] - f6[aE] + 1) return dq;
					hD = f3[aE] + Math.floor(Math.random() * (f2[aE] - f3[aE] + 2 - cu)), hE = f6[aE] + Math.floor(Math.random() * (f5[aE] - f6[aE] + 2 - ez)), a6w(aE, hD, hE, cu, ez) && (a61[aE] = hD, a62[aE] = hE, a63[aE] = cu, a64[
						aE] = ez, dq = !0)
				}
				return dq
			}(aE, dK) && a6z(aE) : ! function(aE, dK) {
				var ez, hD = a61[aE] + 1,
					hE = a62[aE] + 1,
					cu = a63[aE] - 2;
				for (;;) {
					if (cu < 1) {
						a63[aE] = 0;
						break
					}
					if (ez = a72(dK, cu), a6w(aE, hD, hE, cu, ez)) return a61[aE] = hD, a62[aE] = hE, a63[aE] = cu, a64[aE] = ez, 1;
					hD++, hE++, cu -= 2
				}
				return
			}(aE, dK) ? function(aE, dK) {
				var hD, hE, cu, ez, cV, iA, el = f2[aE] - f3[aE] + 1,
					a73 = Math.floor(.02 * el);
				for (iA = -6 * (a73 = a73 < 1 ? 1 : a73), cV = el; iA <= cV; cV -= a73)
					if (ez = a72(dK, cu = 0 < cV ? cV : 1), hD = f3[aE] + Math.floor(Math.random() * (f2[aE] - f3[aE] + 2 - cu)), hE = f6[aE] + Math.floor(Math.random() * (f5[aE] - f6[aE] + 2 - ez)), a6w(aE, hD, hE, cu, ez)) return a61[
						aE] = hD, a62[aE] = hE, a63[aE] = cu, a64[aE] = ez
			}(aE, dK) : a6z(aE)
		}(fZ[aE % fY]);
		a5z = (a5z + bU) % fY
	}, this.gO = function() {
		var aE, bc, dZ, da;
		if (aL.fU() % 4 == 1)
			for (aE = fY - 1; 0 <= aE; aE--) bc = fZ[aE], bW.w8[bc] < 2 || ((dZ = Math.max(a6S[bc] - 1, 0)) === (da = Math.max(a6T[bc] - 1, 0)) ? 0 === dZ && (bW.w8[bc] %= 2) : 0 === da && bW.w8[bc] < 6 && (bW.w8[bc] += 4), a6S[bc] = dZ, a6T[
				bc] = da)
	}, this.tK = function(player) {
		var aE = player + 2 * bZ,
			a3 = a6K[aE];
		return 0 < a3 && (g7.nM(50, player), a6K[aE] = 0, 255 === a3)
	}, this.sB = function(player) {
		return 255 === a6K[player + 2 * bZ]
	}
}

function r0() {
	var cj, a77;
	this.b = function() {
		cj = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var aE, ej, a78 = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			a79 = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (a77 =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), aE = cj.length - 1; 0 <= aE; aE--)
			for (ej = a78.length - 1; 0 <= ej; ej--) cj[aE] = cj[aE].replace(a78[ej], a79[ej]);
		if (settings.realisticNames) cj = realisticNames;
	}, this.l4 = function() {
		var aE;
		if (fr.fs && fr.ft.a5H)
			for (aE = e5; aE < bZ; aE++) hV[aE] = fr.ft.a5H[aE % ly];
		else(9 === fv ? function() {
			var aE, dO = em.random(),
				bU = cj.length,
				ca = e5 + g1.a7F;
			for (aE = ca - 1; e5 <= aE; aE--) hV[aE] = cj[(aE + dO) % bU];
			for (bU = a77.length, aE = ca; aE < bZ; aE++) hV[aE] = a77[aE % bU]
		} : fx ? function() {
			var aE, dO = em.random();
			for (aE = e5; aE < bZ; aE++) hV[aE] = cj[(aE + dO) % bZ]
		} : function() {
			var aE, bU = cj.length,
				dO = em.random();
			for (aE = e5; aE < bZ; aE++) hV[aE] = cj[(aE + dO) % bU]
		})()
	}, this.q7 = function() {
		var aE, bU, ca, dO;
		if (!fx) {
			for (tv = new Array(e5), bU = e5, aE = 0; aE < bU; aE++) tv[aE] = hV[aE];
			if (hR.hS.tu) {
				for (ca = cj.length, dO = em.a7E(), aE = 0; aE < bU; aE++) hV[aE] = cj[(aE + dO) % ca];
				hV[bN] = tv[bN]
			}
		}
	}
}

function rO() {
	this.a7G = [], this.a7H = [], this.b = function() {
		this.a7G = [], this.a7H = []
	}, this.fF = function() {
		0 <= this.a7G.length && this.a7I(this.a7G), 0 <= this.a7H.length && this.a7I(this.a7H)
	}, this.a7I = function(ad) {
		for (var cV = -1, aE = ad.length - 1; 0 <= aE; aE--)
			if (ad[aE].aM--, ad[aE].aM <= 0) {
				cV = aE;
				break
			} for (aE = cV; 0 <= aE; aE--) ad.shift()
	}, this.rx = function(id, mj, a7J) {
		return this.a7K(this.a7G, id, mj, a7J)
	}, this.a7L = function(id, mj, a7J) {
		return this.a7K(this.a7H, id, mj, a7J)
	}, this.a7K = function(ad, id, mj, a7J) {
		return ! function(ad, id, mj) {
			var aE, le;
			for (aE = mj.length - 1; 0 <= aE; aE--)
				for (le = ad.length - 1; 0 <= le; le--)
					if (ad[le].player === mj[aE] && id === ad[le].id) return 1;
			return
		}(ad, id, mj) && (a7J && function(ad, id, mj) {
			var aE;
			for (aE = mj.length - 1; 0 <= aE; aE--) ad.push({
				player: mj[aE],
				id: id,
				aM: 384
			})
		}(ad, id, mj), !0)
	}
}

function q2(mj) {
	var aE;
	for (hV = new Array(bZ), tv = hV, e6 = new Uint8Array(bZ), f3 = new Uint16Array(bZ), f6 = new Uint16Array(bZ), f2 = new Uint16Array(bZ), f5 = new Uint16Array(bZ), bv = new Uint32Array(bZ), mE = new Uint32Array(bZ), bO = new Uint32Array(bZ),
		donationsTracker.reset(), bV = new Array(bZ), bn = new Array(bZ), bo = new Array(bZ), br = new Array(bZ), e7 = new Uint8Array(bZ), aE = mj.length - 1; 0 <= aE; aE--) hV[aE] = mj[aE].name, e7[aE] = mj[aE].a35
}

function rM() {
	this.u5 = 0, this.mj = null, this.b = function() {
		this.u5 = 0, this.mj = []
	}, this.a7O = function(player) {
		this.mj.push(player), nX++, e7[player] = 2, player === bN && (gZ.show(!1, !1), g9.yt()), g8.tK(player)
	}, this.a4y = function(player) {
		var aE, mj;
		if (2 !== e7[player])
			for (aE = (mj = this.mj).length - 1; 0 <= aE; aE--)
				if (mj[aE] === player) return void mj.splice(aE, 1)
	}, this.fF = function() {
		fx || (30 === this.u5 && 2140 <= aL.fU() && this.a7P(), this.u5 = (this.u5 + 1) % 60)
	}, this.a7P = function() {
		for (var mj = this.mj, aE = mj.length - 1; 0 <= aE; aE--) ! function(player, eA) {
			!b5.cQ(player) || (eA = Math.max(Math.min(100, bO[player]), bJ(eA * bO[player], 100))) < 100 || (0 === bn[player].length ? !eO.fE.fF(player) && cS && fI(player, eA, 0, 0) : (cS ? fT : fc)(player, eA))
		}(mj[aE], 12)
	}
}

function rI() {
	var a7R, a7T;
	this.a1r = 5, this.a1s = this.a1r - 1, this.a10 = this.a1r + this.a1s, this.a0z = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.a7S = null;

	function a7b(aE) {
		return a7T[aE].a7W && a7R[aE].a7b()
	}

	function a7d(a13) {
		a7T[a13].aM = aL.aM, a7T[a13].a7X = !1
	}
	this.oV = 0, this.a1d = 0, this.b = function() {
		this.a7S = new Array(this.a1r);
		this.a7S[0] = "territorial.io";
		var aE, a7V = em.a7E(0);
		for (em.q1(0), aE = 1; aE < this.a1r; aE++) this.a7S[aE] = w.nE() + ".territorial.io";
		for (em.q1(a7V), a7R = new Array(this.a10), a7T = new Array(this.a10), aE = this.a10 - 1; 0 <= aE; aE--) a7T[aE] = {
			a7W: !1,
			aM: 0,
			a7X: !1
		}
	}, this.tZ = function() {
		return this.a1d < this.a1r ? this.a1d : this.a1d - this.a1s
	}, this.fF = function() {
		for (var aE = this.a10 - 1; 0 <= aE; aE--) this.a0v(aE) && aL.aM > a7T[aE].aM + 15e3 && jJ.a7Y(aE, a7T[aE].a7X)
	}, this.xI = function(a13, a7Z) {
		if (a7T[a13].a7W) {
			if (a7R[a13].a7b()) return a7R[a13].a7c(a7Z), a7R[a13].a0v();
			a7R[a13].kk()
		}
		return this.a7a(a13, a7Z), !1
	}, this.a7a = function(a13, a7Z) {
		a7T[a13].a7W = !0, a7d(a13), a7R[a13] = new a7e, a7R[a13].b(a13, a7Z)
	}, this.a7c = function(a13, a7Z) {
		a7b(a13) && a7R[a13].a7c(a7Z)
	}, this.a7f = function(a13, a7Z) {
		0 === a7Z ? oj.xK() : a7Z < 3 ? jJ.zi(a13, a7Z - 1) : 3 === a7Z ? jJ.a30(a13) : 4 === a7Z ? qJ.xK(a13) : 5 === a7Z ? a13 === this.oV && jJ.a7g() : 6 !== a7Z && 7 === a7Z && jJ.a3U(a13)
	}, this.a0v = function(aE) {
		return a7T[aE].a7W && a7R[aE].a0v()
	}, this.send = function(a13, k7) {
		a7d(a13), a7R[a13].send(k7)
	}, this.oU = function(a13) {
		a7T[a13].a7X = !0
	}, this.close = function(a13, a7h) {
		a7b(a13) && a7R[a13].close(a7h)
	}, this.a7i = function(a13, a7h) {
		qK.a16(a7h), a7b(a13) && a7R[a13].close(a7h)
	}, this.a18 = function(a7h) {
		for (var aE = this.a10 - 1; 0 <= aE; aE--) this.close(aE, a7h)
	}, this.a7j = function(a13, a7h) {
		for (var aE = this.a10 - 1; 0 <= aE; aE--) aE !== a13 && this.close(aE, a7h)
	}, this.a7k = function(a13, nz) {
		a7R[a13].kk(), qK.b(a13, nz.code)
	}
}

function q8() {
	for (fY = 0, aE = bZ - 1; 0 <= aE; aE--) 0 !== e6[aE] && fY++;
	fZ = new Uint16Array(fY);
	for (var bU = 0, aE = 0; aE < bZ; aE++) 0 !== e6[aE] && (fZ[bU++] = aE)
}

function gM() {
	a7l(), a7m()
}

function a7m() {
	for (var aE = fY - 1; 0 <= aE; aE--) 0 === e6[fZ[aE]] && a7n(aE)
}

function a7n(aE) {
	fY--;
	for (var ej = aE; ej < fY; ej++) fZ[ej] = fZ[ej + 1]
}

function a7l() {
	for (var de, aE = fY - 1; 0 <= aE; aE--) bv[fZ[aE]] <= bJ(mE[fZ[aE]], 4) ? bv[fZ[aE]] <= 1e3 && (2 !== e6[fZ[aE]] || 0 === bv[fZ[aE]]) && a4i(fZ[aE]) : bv[fZ[aE]] >= mE[fZ[aE]] ? mE[fZ[aE]] = bv[fZ[aE]] : (de = bJ(mE[fZ[aE]] - bv[fZ[aE]], 1e3),
		mE[fZ[aE]] -= de < 1 ? 1 : de)
}

function k2() {
	for (var a4Z = 0, aE = fY - 1; 0 <= aE; aE--) a4Z += bO[fZ[aE]];
	return a4Z % 4096
}
var mX, zQ, q9, qA, aN = 0,
	o6 = 0;

function a7u() {
	a7t = 2, a7q = 2173, a7p = 10, a7o = "1.90.4   7 Feb 2024", a7v(), qW(), fA();
	var a7w = document.getElementById("usernameField");
	a7w && document.body.removeChild(a7w), n = "undefined" != typeof Android ? Android : null, 12 <= (q = n ? n.getVersion() : 0) && n.prepareAd("6685097465"), m = !1, window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers
		.iosCommandA && (m = !0, window.webkit.messageHandlers.iosCommandA.postMessage("prepare ad 4500876070"), p = "undefined" != typeof mwIOSdataX ? mwIOSdataX : {
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
		}), n || m || (qV.a7x += "_browser"), a7s = (new Date).getTime() % 1024, o5 = a7y(), r.b(), a1R = new a0A, hR.b(), p9.b(), z(), aQ(), a7z(), i8 = new a80, iI = new zL, aF = new uD, bR = new a81, mZ = new a82, a1G = new tx, (aL = new a83).b(),
		fW = new a84, gU = new a85, (zr = new ch).b(), (d5 = new zR).b(), os = new zz, uo(), em.b(), bP.a5r(), q4.b(), aT.b(), op.b(), gB.b(), oj.b(), q6.b(), oc.b(), cq.b(), qS.b(), aO.b(), qU.a1p(), aL.cx = !0, setTimeout(function() {
			az.l4(2, 14071)
		}, 0), o6 = 2
}

function aS() {
	o6 || (o6 = 1, nx(), a7u())
}

function a7y() {
	try {
		return window.self !== window.top
	} catch (nz) {
		return !0
	}
}

function a7z() {
	a7r = window.location.hostname, o4 = 0 <= a7r.toLowerCase().indexOf("territorial.io")
}

function r1() {
	var a86;
	this.g2 = null, this.b = function() {
		a86 = [], 9 === fv && this.a87()
	}, this.a87 = function() {
		var aE, a88 = [45, 70, 95, 150, 190, 333];
		if (this.a7F = 0, this.g2 = [0, 0, 0, 0, 0, 0], e5 <= a88[0]) this.g2[0] = Math.max(cA.cB(e5 * (512 - e5), a88[0]), 16), fq = this.g2[0];
		else
			for (fq = bZ - e5, aE = 1; aE < 6; aE++)
				if (e5 <= a88[aE]) {
					this.g2[aE - 1] = 512 - a88[aE - 1] - bJ((512 - a88[aE - 1]) * (e5 - a88[aE - 1]), a88[aE] - a88[aE - 1]), this.g2[aE] = 512 - e5 - this.g2[aE - 1];
					break
				} ly = e5 + fq
	}, this.a4x = function(player) {
		a86.push({
			player: player,
			tc: 14 + em.en(20)
		})
	}, this.fF = function() {
		var aE;
		if (9 === fv)
			for (aE = a86.length - 1; 0 <= aE; aE--) --a86[aE].tc <= 0 && (g8.kX(a86[aE].player, 0, 46), a86.splice(aE))
	}
}

function ra() {
	function a8D(aE) {
		return !(1 === aE || aE >= az.a8J())
	}
	this.b0 = 0, this.b1 = 0, this.lN = null, this.lJ = null, this.lK = null, this.lO = null, this.ll = 0, this.a2V = 0, this.lL = !1, this.a5L = 19, this.lM = new a8A, this.ft = new a8B, this.b = function() {
		this.ft.b()
	}, this.l4 = function(a8C, a2Z) {
		((a8C %= this.a5L) !== this.ll || a8D(this.ll) && a2Z !== this.a2V) && (this.lL = !1, this.lM.a2f(), em.q1(a8C), this.ll = a8C, this.a2V = a2Z, a8D(a8C) && (az.ft.lk[a8C].a7V = a2Z), this.ll >= az.a8J() ? a8F() : (a8C = az.ft.lk[this.ll],
			this.b0 = a8C.cu, this.b1 = a8C.ez, em.q1(a8C.a7V), qM.l4([this.b0, this.b1, a8C.ha, a8C.hX]), a8G(), q4.a8H(), qM.a8I()))
	}, this.a8J = function() {
		return 10
	}, this.a8K = function(aE) {
		return 3 === aE || 7 === aE || 9 === aE || aE === az.a5L
	}, this.a8L = function(aE) {
		return 2 === aE || 7 === aE || 9 === aE
	}, this.a8M = function(aE) {
		return 1 === aE
	}, this.wY = function() {
		return 19
	}
}

function a8A() {
	function a8W() {
		az.lM.fF()
	}

	function a8b(bc, a8a) {
		0 < a8a && (az.lO[bc] += a8a, az.lO[bc + 1] += a8a, az.lO[bc + 2] += a8a)
	}

	function s7(bc) {
		return az.lO[bc + 2] > az.lO[bc] && az.lO[bc + 2] > az.lO[bc + 1]
	}
	this.xD = -1, this.j = 0, this.a8N = 0, this.a8O = 8, this.a8P = 32, this.a8Q = 8, this.a8R = 32, this.a8S = [0, 0], this.w8 = [0, 0, 0, 0], this.eP = null, this.a8T = !0, this.a8U = !1, this.a2f = function() {
		-1 !== this.xD && clearTimeout(this.xD), this.xD = -1, this.eP = null, qM.a8I()
	}, this.b = function() {
		7 === aT.ov() || this.a8U || (this.a8T = !0, this.j = 0, this.a8N = 1, this.a8S = [az.ft.lk[az.ll].lj[0], az.ft.lk[az.ll].lm[0]], this.w8 = [az.ft.lk[az.ll].a8V[3], az.ft.lk[az.ll].a8V[4], az.ft.lk[az.ll].a8V[5], az.ft.lk[az.ll].a8V[6]],
			this.a8O = az.ft.lk[az.ll].a8V[7], this.a8P = az.ft.lk[az.ll].a8V[8], this.a8Q = az.ft.lk[az.ll].a8V[9], this.a8R = az.ft.lk[az.ll].a8V[10], this.a8T ? this.xD = setTimeout(a8W, 16) : this.fF())
	}, this.fF = function() {
		if (8 === aT.ov() && gY.ho()) this.xD = setTimeout(a8W, 16);
		else {
			if (0 === this.j) {
				var a7V = em.a7E();
				if (em.q1(az.ft.lk[az.ll].a8V[2]), qM.l4([az.b0, az.b1, az.ft.lk[az.ll].a8V[0], az.ft.lk[az.ll].a8V[1]]), em.q1(a7V), this.eP = qM.a8X(), this.j++, this.a8T) return void(this.xD = setTimeout(a8W, 16))
			}
			for (var bc, dg, a7V = this.a8T ? 10 : 1e6, a7V = az.b1 - this.a8N - 1 < a7V ? az.b1 - this.a8N - 1 : a7V, mB = this.a8N + a7V, hE = this.a8N; hE < mB; hE++)
				for (var hD = 1; hD < az.b0 - 1; hD++) s7(bc = 4 * (dg = hD + hE * az.b0)) ? this.a8Y(bc, dg, 1) : (this.a8Y(bc, dg, 0), function(hD, hE, bc) {
					return 1 < hD && s7(bc - 4) || hD < az.b0 - 2 && s7(bc + 4) || 1 < hE && s7(bc - 4 * az.b0) || hE < az.b1 - 2 && s7(bc + 4 * az.b0)
				}(hD, hE, bc) && this.a8Z(hD, hE));
			this.a8N = mB, this.a8N >= az.b1 - 1 ? (az.lJ.putImageData(az.lK, 0, 0, 1, 1, az.b0 - 2, az.b1 - 2), aL.cx = !0, this.a2f()) : this.a8T && (this.xD = setTimeout(a8W, 16))
		}
	}, this.a8Y = function(bc, dg, cm) {
		a8b(bc, Math.floor(this.a8S[cm] + this.w8[cm] * this.eP[dg] / 1e4) - az.lO[bc])
	}, this.a8c = function(bc, dO, a8d, cm, w8) {
		a8b(bc, Math.floor(this.a8S[cm] + (1 - dO / a8d) * w8) - az.lO[bc])
	}, this.a8Z = function(d0, d1) {
		for (var bc, dO, a8d, lp = d0 - this.a8P, lq = d1 - this.a8P, mC = d0 + this.a8P, mB = d1 + this.a8P, lp = lp < 1 ? 1 : lp, mC = mC > az.b0 - 2 ? az.b0 - 2 : mC, mB = mB > az.b1 - 2 ? az.b1 - 2 : mB, hE = lq < 1 ? 1 : lq; hE <= mB; hE++)
			for (var hD = lp; hD <= mC; hD++) s7(bc = 4 * (hD + hE * az.b0)) ? (a8d = this.a8O + (this.a8P - this.a8O) * this.eP[hD + az.b0 * hE] / 1e4, Math.abs(d0 - hD) > a8d || Math.abs(d1 - hE) > a8d || a8d <= (dO = Math.sqrt((d0 - hD) * (
				d0 - hD) + (d1 - hE) * (d1 - hE))) || this.a8c(bc, dO, a8d, 1, this.w8[3])) : (a8d = this.a8Q + (this.a8R - this.a8Q) * this.eP[hD + az.b0 * hE] / 1e4, Math.abs(d0 - hD) > a8d || Math.abs(d1 - hE) > a8d || a8d <= (dO = Math
				.sqrt((d0 - hD) * (d0 - hD) + (d1 - hE) * (d1 - hE))) || this.a8c(bc, dO, a8d, 0, this.w8[2]))
	}
}

function a8G() {
	2 === az.ll ? a8e([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === az.ll ? a8e([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === az.ll ? a8e([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === az.ll && a8e([
		512
	], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function a8e(a8f, a8g, a8h, a8i, a8j) {
	for (var hD, hE, a8l, a8m, ci, a8n, dw = a8f.length - 1, a8k = az.b0 + az.b1, bU = (a8k *= a8k, a8h.length), aE = bU - 1; 0 <= aE; aE--) a8h[aE] *= a8h[aE];
	var a8o = new Array(bU),
		a8p = new Array(bU),
		a8q = new Array(bU),
		aR = qM.a8X();
	if (void 0 === a8j)
		for (a8j = new Array(bU), aE = bU - 1; 0 <= aE; aE--) a8j[aE] = 0;
	for (aE = 1; aE < bU; aE++) a8o[aE] = a8h[aE] - a8h[aE - 1], a8p[aE] = a8i[aE] - a8i[aE - 1], a8q[aE] = a8j[aE] - a8j[aE - 1];
	for (hD = az.b0 - 1; 0 <= hD; hD--)
		for (hE = az.b1 - 1; 0 <= hE; hE--) {
			for (a8l = a8k, aE = dw; 0 <= aE; aE--) a8l = (a8m = (hD - a8f[aE]) * (hD - a8f[aE]) + (hE - a8g[aE]) * (hE - a8g[aE])) < a8l ? a8m : a8l;
			for (ci = a8i[bU - 1], a8n = a8j[bU - 1], aE = 1; aE < bU; aE++)
				if (a8l < a8h[aE]) {
					ci = a8i[aE - 1] + a4E((a8l - a8h[aE - 1]) * a8p[aE], a8o[aE]), a8n = a8j[aE - 1] + a4E((a8l - a8h[aE - 1]) * a8q[aE], a8o[aE]);
					break
				} a8r(az.b0 * hE + hD, ci, a8n, aR)
		}
}

function a8r(cm, ci, a8n, aR) {
	ci < 500 ? aR[cm] = bJ(aR[cm] * ci * 2, 1e3) : 500 < ci && (aR[cm] += bJ(2 * (1e4 - aR[cm]) * (ci - 500), 1e3)), aR[cm] += bJ(a8n * (10 * ci - aR[cm]), 1e3)
}

function r2() {
	var a8s;
	this.tm = 0, this.tn = 0, this.to = 0, this.tp = 0, this.b = function() {
		(a8s = new Array(az.a8J()))[0] = {
			cu: [0, 5e3, 8e3, 1e4],
			dO: [220, 250, 255, 220],
			pN: [190, 220, 0, 0],
			cV: [170, 200, 0, 0]
		}, a8s[1] = {
			cu: [0, 4e3, 5e3, 6e3, 1e4],
			dO: [25, 0, 100, 0, 25],
			pN: [25, 0, 0, 0, 25],
			cV: [25, 0, 0, 0, 25]
		}, a8s[2] = {
			cu: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			dO: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			pN: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			cV: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, a8s[3] = {
			cu: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			dO: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			pN: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			cV: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, a8s[4] = {
			cu: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			dO: [10, 10, 20, 10, 10, 170, 212],
			pN: [20, 20, 60, 100, 100, 110, 170],
			cV: [70, 70, 160, 30, 30, 60, 120]
		}, a8s[5] = {
			cu: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			dO: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			pN: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			cV: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, a8s[6] = {
			cu: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			dO: [10, 10, 60, 255, 255, 200, 200],
			pN: [10, 10, 60, 255, 255, 200, 200],
			cV: [80, 80, 255, 255, 255, 200, 200]
		}, a8s[7] = {
			cu: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			dO: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			pN: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			cV: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, a8s[8] = {
			cu: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			dO: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			pN: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			cV: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, a8s[9] = {
			cu: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			dO: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			pN: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			cV: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}
	}, this.a8H = function() {
		var aE, ej, ae, dI = function() {
				var dI;
				return az.lN = document.createElement("canvas"), az.lN.width = az.b0, az.lN.height = az.b1, az.lJ = az.lN.getContext("2d", {
					alpha: !1
				}), dI = az.lJ.getImageData(0, 0, az.b0, az.b1), az.lO = dI.data, dI
			}(),
			cu = a8s[az.ll].cu,
			dO = a8s[az.ll].dO,
			pN = a8s[az.ll].pN,
			cV = a8s[az.ll].cV,
			aR = qM.a8X(),
			bU = cu.length - 2,
			a8w = new Array(1 + bU),
			a8x = new Array(1 + bU),
			a8y = new Array(1 + bU),
			a8z = new Array(1 + bU);
		for (ej = bU; 0 <= ej; ej--) a8w[ej] = cu[ej + 1] - cu[ej], a8x[ej] = dO[ej + 1] - dO[ej], a8y[ej] = pN[ej + 1] - pN[ej], a8z[ej] = cV[ej + 1] - cV[ej];
		for (aE = az.b0 * az.b1 - 1; 0 <= aE; aE--)
			for (ej = bU; 0 <= ej; ej--)
				if (aR[aE] >= cu[ej]) {
					ae = aR[aE] - cu[ej], az.lO[4 * aE] = dO[ej] + a4E(a8x[ej] * ae, a8w[ej]), az.lO[4 * aE + 1] = pN[ej] + a4E(a8y[ej] * ae, a8w[ej]), az.lO[4 * aE + 2] = cV[ej] + a4E(a8z[ej] * ae, a8w[ej]), az.lO[4 * aE + 3] = 255;
					break
				} az.lJ.putImageData(dI, 0, 0), az.a8M(az.ll) && cq.cr() && az.a8M(az.ll) && (dI = cq.ro("arena"), az.lJ.save(), az.lJ.globalAlpha = 1 === az.ll ? .1 : 1, az.lJ.imageSmoothingEnabled = !0, az.lJ.scale(2.8, 2.8), az.lJ.drawImage(
				dI, Math.floor((az.b0 / 2.8 - dI.width) / 2), Math.floor(.5 * az.b1 / 2.8 - dI.height / 2)), az.lJ.restore(), dI = cq.ro("territorial.io"), az.lJ.save(), az.lJ.globalAlpha = 1 === az.ll ? .1 : 1, az.lJ
			.imageSmoothingEnabled = !0, az.lJ.scale(.87, .87), az.lJ.drawImage(dI, Math.floor(.745 * (az.b0 / .87 - dI.width)), Math.floor(.422 * az.b1 / .87 - dI.height / 2)), az.lJ.restore()), az.lL = !0, aL.cx = !0
	}, this.q5 = function() {
		for (var bc, hD, hE, a92, a93, ag, tn = 0, cu = az.b0, ez = az.b1, ae = cu * ez * 4, a94 = zQ, a95 = az.lO, aE = cu - 1; 0 <= aE; aE--) a94[(bc = aE << 2) + 2] = a94[ae - bc - 2] = 3;
		for (ae = 4 * cu, aE = ez - 1; 0 <= aE; aE--) a94[(bc = aE * ae) + 2] = a94[bc + ae - 2] = 3;
		for (a92 = cu - 1, a93 = ez - 1, hE = 1; hE < a93; hE++)
			for (ae = hE * cu, hD = 1; hD < a92; hD++) ag = 1 - (a95[(bc = ae + hD << 2) + 2] > a95[bc + 1] && a95[bc + 2] > a95[bc]), a94[bc + 2] = 2 - ag, tn += ag;
		this.tm = (cu - 2) * (ez - 2), this.tp = 0, az.a8K(az.ll) && function() {
			var bc, hD, hE, ae, a94 = zQ,
				a95 = az.lO,
				cu = az.b0,
				a92 = cu - 1,
				a93 = az.b1 - 1,
				tc = 0;
			for (hE = 1; hE < a93; hE++)
				for (ae = hE * cu, hD = 1; hD < a92; hD++) a95[bc = ae + hD << 2] === a95[1 + bc] && a95[bc] === a95[2 + bc] && (tc++, a94[2 + bc] = 3);
			q4.tp = tc
		}(), this.tn = po = tn - this.tp, this.to = this.tm - this.tn - this.tp
	}
}

function a8F() {
	var v, a97 = az.a8J();
	az.ll === a97 ? v =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		az.ll === a97 + 1 ? v =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		az.ll === a97 + 2 ? v =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		az.ll === a97 + 3 ? v =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		az.ll === a97 + 4 ? v =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		az.ll === a97 + 5 ? v =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		az.ll === a97 + 6 ? v =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		az.ll === a97 + 7 ? v =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		az.ll === a97 + 8 && (v =
			"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-"
			), (new l6).l8(v)
}

function a8B() {
	this.lk = null, this.a98 = null, this.b = function() {
		var aE, a99 = [120, 105, 92],
			cos = [12, 12, 60],
			a9A = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			a9B = [140, 130, 120],
			a9C = [12, 12, 76],
			a9D = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			a9E = [130, 117, 106],
			a9F = [12, 12, 68],
			a9G = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		for (this.lk = new Array(az.a5L + 1), this.lk[0] = {
				name: "White Arena",
				cu: 230,
				ez: 230,
				ha: 1e3,
				hX: 2e3,
				a7V: 173
			}, this.lk[1] = {
				name: "Black Arena",
				cu: 800,
				ez: 800,
				ha: 100,
				hX: 50,
				a7V: 43
			}, this.lk[2] = {
				name: "Island",
				cu: 512,
				ez: 512,
				ha: 128,
				hX: 32,
				a7V: 0
			}, this.lk[3] = {
				name: "Mountains",
				cu: 960,
				ez: 960,
				ha: 60,
				hX: 8,
				a7V: 0
			}, this.lk[4] = {
				name: "Desert",
				cu: 900,
				ez: 900,
				ha: 100,
				hX: 5,
				a7V: 0
			}, this.lk[5] = {
				name: "Swamp",
				cu: 1e3,
				ez: 1e3,
				ha: 100,
				hX: 40,
				a7V: 0
			}, this.lk[6] = {
				name: "Snow",
				cu: 1e3,
				ez: 1e3,
				ha: 100,
				hX: 20,
				a7V: 0
			}, this.lk[7] = {
				name: "Cliffs",
				cu: 1024,
				ez: 1024,
				ha: 128,
				hX: 32,
				a7V: 0
			}, this.lk[8] = {
				name: "Pond",
				cu: 820,
				ez: 820,
				ha: 200,
				hX: 100,
				a7V: 0
			}, this.lk[9] = {
				name: "Halo",
				cu: 1024,
				ez: 1024,
				ha: 128,
				hX: 32,
				a7V: 0
			}, this.lk[10] = {
				name: "Europe",
				lj: a9B,
				lm: a9C,
				a8V: a9D
			}, this.lk[11] = {
				name: "World",
				lj: a9E,
				lm: a9F,
				a8V: a9G
			}, this.lk[12] = {
				name: "Caucasia",
				lj: a9E,
				lm: a9F,
				a8V: a9G
			}, this.lk[13] = {
				name: "Africa",
				lj: a99,
				lm: cos,
				a8V: a9A
			}, this.lk[14] = {
				name: "Middle East",
				lj: a99,
				lm: cos,
				a8V: a9A
			}, this.lk[15] = {
				name: "Scandinavia",
				lj: a9B,
				lm: a9C,
				a8V: a9D
			}, this.lk[16] = {
				name: "North America",
				lj: a9B,
				lm: a9C,
				a8V: a9D
			}, this.lk[17] = {
				name: "South America",
				lj: a99,
				lm: cos,
				a8V: a9A
			}, this.lk[18] = {
				name: "Asia",
				lj: a9E,
				lm: a9F,
				a8V: a9G
			}, this.lk[19] = {}, this.a98 = new Uint8Array(az.a5L), aE = 0; aE < az.a5L; aE++) this.a98[aE] = aE
	}
}

function q3() {
	(mX = void 0 === mX ? document.createElement("canvas") : mX).width = az.b0, mX.height = az.b1, q9 = mX.getContext("2d", {
		alpha: !0
	}), qA = q9.getImageData(0, 0, az.b0, az.b1), zQ = qA.data, cM.lP.lQ(zQ)
}

function r3() {
	var aR, cu, ez, max, a9H, hX, a9J, a9K, a9L, a9M, a9N, a9O, a9P, a9Q, a9I = 1e4;

	function a9Y(a9X, ha, bU) {
		var aE;
		for (a9J[0] = a9X, aE = 1; aE < bU; aE++) a9J[aE] = a9J[aE - 1] + ha, ha = a9J[aE] >= a9I ? (a9J[aE] = a9I - 1, -ha) : a9J[aE] < 0 ? (a9J[aE] = 0, -ha) : (ha += 16384 <= em.random() ? hX : -hX) < -a9H ? -a9H : a9H < ha ? a9H : ha
	}

	function a9a(hD, hE, a9b, bU) {
		(a9b ? function(hD, hE, bU) {
			var aE;
			for (aE = 0; aE < bU; aE++) aR[hE * cu + hD + aE] = a9J[aE]
		} : function(hD, hE, bU) {
			var aE;
			for (aE = 0; aE < bU; aE++) aR[hE * cu + hD + aE * cu] = a9J[aE]
		})(hD, hE, bU)
	}

	function a9e(value, bU) {
		var aE, a73, dq, de = value - a9J[bU - 1];
		if (0 != de) {
			for (a73 = 1 + bJ(Math.abs(de), bU - 1), a73 = de < 0 ? -a73 : a73, a9J[bU - 1] = value, dq = (dq = bU - 1 - bJ(Math.abs(de), Math.abs(a73))) < 1 ? 1 : bU - 2 < dq ? bU - 2 : dq, aE = bU - 2; dq <= aE; aE--) a9J[aE] += de - (bU - 1 -
				aE) * a73;
			(de < 0 ? function(bU) {
				var aE;
				for (aE = bU - 2; 1 <= aE; aE--) a9J[aE] < 0 && (a9J[aE] = -a9J[aE] - 1)
			} : function(bU) {
				var aE;
				for (aE = bU - 2; 1 <= aE; aE--) a9J[aE] >= a9I && (a9J[aE] = 2 * a9I - a9J[aE] - 1)
			})(bU)
		}
	}

	function a9h(a9i, a9j, bU) {
		for (var aE = 0; aE < bU; aE++) a9i[aE] = a9j[aE]
	}

	function a9k(ad) {
		for (var aE = 0; aE < ad.length - 1; aE++) ad[aE] = ad[aE + 1] - ad[aE];
		ad[ad.length - 1] = ad[ad.length - 3]
	}

	function a9l(rr, mA, dd) {
		a9K.push(rr), a9L.push(mA), a9M.push(dd)
	}
	this.l4 = function(a9R) {
		! function(a9R) {
			var aE;
			for (cu = a9R[0], ez = a9R[1], a9H = a9R[2], hX = a9R[3], aR = new Int16Array(cu * ez), max = ez < cu ? cu : ez, a9J = new Int16Array(max), a9K = [], a9L = [], a9M = [], a9N = new Array(cu), a9O = new Array(ez), aE = cu - 1; 0 <=
				aE; aE--) a9N[aE] = !1;
			for (aE = ez - 1; 0 <= aE; aE--) a9O[aE] = !1;
			a9P = new Int16Array(cu), a9Q = new Int16Array(ez)
		}(a9R),
		function(bU) {
			var a9X = em.random() % a9I,
				ha = em.random() % (2 * a9H + 1) - a9H;
			a9Y(a9X, ha, bU)
		}(max), a9h(a9Q, a9J, ez), a9a(0, 0, !0, cu);
		var hD, hE, a9R = aR[0],
			bU = max,
			ha = em.random() % (2 * a9H + 1) - a9H;
		for (a9Y(a9R, ha, bU), a9h(a9P, a9J, cu), a9a(0, 0, !1, ez), a9k(a9P), a9k(a9Q), a9Y(aR[cu - 1], a9P[cu - 1], ez), a9a(cu - 1, 0, !1, ez), a9Y(aR[cu * (ez - 1)], a9Q[ez - 1], cu), a9e(aR[cu * ez - 1], cu), a9a(0, ez - 1, !0, cu), a9N[cu -
				1] = a9N[0] = !0, a9O[ez - 1] = a9O[0] = !0, a9l(0, cu, !0), a9l(0, ez, !1), ! function() {
				var a9n, rr;
				for (;;) {
					if (a9n = function() {
							var aE, a9n = a9K.length - 1;
							for (aE = a9n - 1; 0 <= aE; aE--) a9L[aE] > a9L[a9n] && (a9n = aE);
							return a9n
						}(), a9L[a9n] < 5) return;
					rr = a9K[a9n] + bJ(a9L[a9n], 2), (a9M[a9n] ? function(hD) {
						var bU, a9q, aE, a0X = 0,
							a9r = 0;
						for (; a9r < ez - 1;) {
							for (aE = a0X + 1; aE < ez; aE++)
								if (a9O[aE]) {
									a9r = aE;
									break
								} bU = a9r - a0X + 1, a9Y(aR[hD + cu * a0X], 0 === a0X ? a9P[hD] : a9J[a9q - 1] - a9J[a9q - 2], bU), a9e(aR[a9r * cu + hD], bU), a9a(hD, a0X, !1, bU), a9q = bU, a0X = a9r
						}
						a9N[hD] = !0
					} : function(hE) {
						var bU, a9q, aE, a0X = 0,
							a9r = 0;
						for (; a9r < cu - 1;) {
							for (aE = a0X + 1; aE < cu; aE++)
								if (a9N[aE]) {
									a9r = aE;
									break
								} bU = a9r - a0X + 1, a9Y(aR[hE * cu + a0X], 0 === a0X ? a9Q[hE] : a9J[a9q - 1] - a9J[a9q - 2], bU), a9e(aR[hE * cu + a9r], bU), a9a(a0X, hE, !0, bU), a9q = bU, a0X = a9r
						}
						a9O[hE] = !0
					})(rr), a9l(rr, a9K[a9n] + a9L[a9n] - rr, a9M[a9n]), a9L[a9n] = rr - a9K[a9n] + 1
				}
			}(), hD = 0; hD < cu; hD++)
			if (!a9N[hD])
				for (hE = 0; hE < ez; hE++) a9O[hE] || ! function(hD, hE) {
					var value = aR[hE * cu + hD - 1] + aR[(hE - 1) * cu + hD],
						uB = 2;
					a9N[hD + 1] && (uB++, value += aR[hE * cu + hD + 1]);
					a9O[hE + 1] && (uB++, value += aR[(hE + 1) * cu + hD]);
					aR[hE * cu + hD] = bJ(value, uB)
				}(hD, hE)
	}, this.a8X = function() {
		return aR
	}, this.a8I = function() {
		aR = null
	}
}

function bJ(ej, cV) {
	return Math.floor(ej / cV + 1 / (2 * cV))
}

function a4E(ej, cV) {
	return 0 <= ej ? bJ(ej, cV) : -bJ(-ej, cV)
}

function f8(aR) {
	return aR * aR
}

function t8(ej, cV) {
	return cV < ej ? ej : cV
}

function vz(ej, cV) {
	return ej < cV ? ej : cV
}

function wP(ej, aR, cV) {
	return aR < ej ? ej : cV < aR ? cV : aR
}

function a9t(aR, bU) {
	for (var fV = bJ(aR + 1, 2), aE = 0; aE < bU; aE++) fV = bJ(fV + bJ(aR, fV), 2);
	return fV
}

function cD(aR, bU) {
	return aR < 1 ? 0 : a9t(aR, bU)
}

function a9u(hI, hJ, mf, ty, hK, hM, mg, tz) {
	return !(hI + mf <= hK || hJ + ty <= hM || hK + mg <= hI || hM + tz <= hJ)
}

function a9v(hI, hJ, mf, ty, hK, hM, mg, tz) {
	return hI <= hK && hJ <= hM && hK + mg <= hI + mf && hM + tz <= hJ + ty
}

function lG(aR) {
	return Math.floor(!!aR * (1 + Math.log2(aR + .5)))
}

function qX() {
	this.cB = function(ej, cV) {
		return Math.floor((ej + .5) / cV)
	}, this.a9w = function(ej, cV) {
		return Math.floor(ej * (cV + .5))
	}, this.sqrt = function(aR) {
		return ~~Math.sqrt(aR + .5)
	}, this.pow = function(nz) {
		return Math.floor(Math.pow(2, nz) + .5)
	}, this.pL = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.a9x = function(ae, ag, ai) {
		return Math.max(Math.min(ae, ag), ai)
	}, this.a9y = function(a9z, aA0, hD, hE) {
		hD -= a9z, a9z = hE - aA0, hE = 0;
		return 0 == hD ? hE = 0 <= a9z ? Math.PI : 0 : (hE = Math.aA1(a9z / hD), hE += 0 < hD ? .5 * Math.PI : 1.5 * Math.PI), hE
	}, this.log2 = function(aR) {
		return Math.floor(!!aR * (1 + Math.log2(aR + .5)))
	}
}

function a7v() {
	"function" != typeof Math.log2 && (Math.log2 = function(hD) {
		return Math.log(hD) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(hD) {
		return Math.log(hD) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(hD) {
		return 0 < hD ? 1 : hD < 0 ? -1 : 0
	})
}

function rK() {
	this.a3S = 0;
	var zS = -1,
		aA2 = !1,
		vP = [],
		aA3 = 0;

	function or(hD, hE, aAC, aE) {
		return 0 === aE ? hD >= aAC.hI && (0 === aE || hE >= aAC.hJ) && hE <= aAC.hJ + aAC.ty : (hE -= aE * (aAC.ty - pR), hD >= aAC.hK && hE >= aAC.hJ && hE <= aAC.hJ + aAC.ty)
	}

	function aAD() {
		var mf = Math.floor((a0 ? .145 : .09) * ck),
			mg = Math.floor(2.25 * mf),
			mA = Math.floor(.065 * (a0 ? .53 : .36) * ck),
			hK = a1 - mg - mA;
		return {
			hI: a1 - mf - mA,
			hJ: d2,
			mf: mf,
			ty: Math.floor(.35 * (1 + .35 * a0) * mf),
			hK: hK,
			mg: mg,
			wy: mA
		}
	}

	function a0l(hD, hE, cu, ez, dO, pN, cV, aAL, v) {
		var cs = (v === vP[0][0].name ? .65 : .5) * ez,
			font = cM.iL.km(cs, 1),
			font = cv.measureText(v, font);
		.92 * cu < font && (cs *= .92 * cu / font), d8.font = cM.iL.km(cs, 1), aAL && (dO += 80, pN += 80, cV += 80), d8.fillStyle = "rgba(" + dO + "," + pN + "," + cV + ",0.6)", d8.fillRect(hD, hE, cu, ez), d8.fillStyle = dB.dC, d8.fillRect(hD, hE,
			cu, pR), d8.fillRect(hD, hE + ez - pR, cu, pR), d8.fillRect(hD, hE, pR, ez), d8.fillRect(hD + cu - pR, hE, pR, ez), d8.fillText(v, Math.floor(hD + cu / 2), Math.floor(hE + ez / 2 + .1 * cs))
	}
	this.hS = null, this.yM = new Uint8Array(4), this.tB = function() {
		return m ? 4 : a0 ? 2 : 1
	}, this.b = function() {
		var aA5;
		this.aA4(), vP = [new Array(6), new Array(10), new Array(7)], this.yM[0] = 10, this.yM[1] = 5, this.yM[2] = 2, this.yM[3] = 1, vP[0][0] = {
			name: "More",
			id: 0,
			dO: 140,
			pN: 120,
			cV: 0
		}, vP[0][1] = {
			name: "Lobby 1",
			id: 1,
			dO: 0,
			pN: 0,
			cV: 0
		}, vP[0][2] = {
			name: "Settings",
			id: 2,
			dO: 0,
			pN: 0,
			cV: 0
		}, vP[0][3] = {
			name: "More Information",
			id: 3,
			dO: 0,
			pN: 0,
			cV: 0
		}, vP[0][4] = {
			name: "Replay",
			id: 4,
			dO: 0,
			pN: 0,
			cV: 0
		}, vP[0][5] = {
			name: a7o,
			id: 5,
			dO: 90,
			pN: 0,
			cV: 0
		}, vP[0].push({
			name: "FX Client v" + fx_version + " " + fx_update,
			id: 20,
			dO: 0,
			pN: 0,
			cV: 70
		}), vP[1][0] = vP[0][0], vP[1][1] = {
			name: "Hide Usernames",
			id: 1,
			dO: 0,
			pN: 0,
			cV: 0
		}, vP[1][2] = {
			name: "Hide Links",
			id: 2,
			dO: 0,
			pN: 0,
			cV: 0
		}, vP[1][3] = {
			name: "Hide Zoom Buttons",
			id: 3,
			dO: 0,
			pN: 0,
			cV: 0
		}, vP[1][4] = {
			name: "Reverse Name/Balance",
			id: 4,
			dO: 0,
			pN: 0,
			cV: 0
		}, vP[1][5] = {
			name: "Resolution",
			id: 5,
			dO: 0,
			pN: 0,
			cV: 0
		}, vP[1][6] = {
			name: "Country Minimum Font Size",
			id: 6,
			dO: 0,
			pN: 0,
			cV: 0
		}, vP[1][7] = {
			name: "Leaderboard Refresh Rate",
			id: 7,
			dO: 0,
			pN: 0,
			cV: 0
		}, vP[1][8] = {
			name: "Reset Settings",
			id: 8,
			dO: 0,
			pN: 0,
			cV: 0
		}, vP[1][9] = {
			name: "Back",
			id: 9,
			dO: 0,
			pN: 0,
			cV: 0
		}, vP[2][0] = vP[0][0], vP[2][1] = {
			name: "Tutorial",
			id: 1,
			dO: 0,
			pN: 0,
			cV: 0
		}, vP[2][2] = {
			name: "Player List",
			id: 2,
			dO: 0,
			pN: 0,
			cV: 0
		}, vP[2][3] = {
			name: "Clan List",
			id: 3,
			dO: 0,
			pN: 0,
			cV: 0
		}, vP[2][4] = {
			name: "Privacy Policy",
			id: 4,
			dO: 0,
			pN: 0,
			cV: 0
		}, vP[2][5] = {
			name: "Changelog",
			id: 13,
			dO: 0,
			pN: 0,
			cV: 0
		}, vP[2][6] = {
			name: "Terms of Service",
			id: 14,
			dO: 0,
			pN: 0,
			cV: 0
		}, !m && q < 5 && vP[2].push({
			name: "Cookie Policy",
			id: 5,
			dO: 0,
			pN: 0,
			cV: 0
		}), (m || 5 <= q) && (m ? !p.mustShowConsentButton || "0" !== p.mustShowConsentButton && "1" !== p.mustShowConsentButton || vP[2].push({
			name: "Consent Form",
			id: 7,
			dO: 0,
			pN: 0,
			cV: 0
		}) : "" !== (aA5 = n.loadString(187)) && "1" !== aA5 || vP[2].push({
			name: "Consent Form",
			id: 7,
			dO: 0,
			pN: 0,
			cV: 0
		})), 5 <= q && vP[2].push({
			name: "Force Restart Game",
			id: 12,
			dO: 0,
			pN: 0,
			cV: 0
		}), vP[2].push({
			name: "Back",
			id: 6,
			dO: 0,
			pN: 0,
			cV: 0
		}), this.aA6(), this.aA7()
	}, this.aA4 = function() {
		this.hS = {
			tu: 0,
			aA8: 0,
			wr: 0,
			hT: 1,
			aA9: 2,
			a6U: 4,
			yN: 2,
			a6d: 2
		}
	}, this.aA7 = function() {
		if (settings.hideAllLinks) a1R.ai[0] = a1R.ai[1] = !this.hS.aA8;
		else a1R.ai[0] = a1R.ai[1] = true;
		a1R.ai[2] = a1R.ai[3] = a1R.ai[4] = !this.hS.aA8, vP[1][1].pN = this.hS.tu ? 130 : 0, vP[1][2].pN = this.hS.aA8 ? 130 : 0, vP[1][3].pN = this.hS.wr ? 130 : 0, vP[1][4].pN = this.hS.hT ? 130 : 0, this.aAA(5), this.aAA(6), this.aAA(7)
	}, this.aA6 = function() {
		var sQ = a5().split("");
		sQ.length < 14 ? this.aA4() : (this.hS.tu = parseInt(sQ[6]), this.hS.aA8 = parseInt(sQ[7]), this.hS.wr = parseInt(sQ[8]), this.hS.hT = parseInt(sQ[9]), this.hS.aA9 = parseInt(sQ[10]), this.hS.a6U = parseInt(sQ[11]), this.hS.yN = parseInt(
			sQ[12]))
	}, this.a0k = function() {
		var v = d4.sk[2].nR.a0i();
		aI((v += ~~this.hS.tu) + ~~this.hS.aA8 + ~~this.hS.wr + ~~this.hS.hT + ~~this.hS.aA9 + ~~this.hS.a6U + ~~this.hS.yN + "0")
	}, this.aAA = function(aE) {
		5 === aE ? vP[1][aE].name = "Resolution: " + g9.tl(100 * p9.aAB(), 1) : 6 === aE ? vP[1][aE].name = "Country Minimum Font Size: " + (this.hS.a6U < 4 ? 1 + this.hS.a6U : 2 * (this.hS.a6U - 1)) : 7 === aE && (vP[1][aE].name =
			"Leaderboard Refresh Rate: " + g9.tl(100 / this.yM[this.hS.yN], 1))
	}, this.cz = function(hD, hE) {
		var aE, aAC, aAF;
		if (!(7 <= aT.ov())) {
			aAC = aAD();
			var gearIconX = aAC.hI - aAC.mf / 2;
			if (hD > gearIconX && hD < (gearIconX + aAC.ty) && hE > aAC.hJ && hE < (aAC.hJ + aAC.ty)) return WindowManager.openWindow("settings");
			if (aA2) {
				for (aE = 1; aE < vP[aA3].length; aE++)
					if (or(hD, hE, aAC, aE)) return aAF = vP[aA3][aE], 0 === aA3 ? 1 === aAF.id ? (hR.a3S = (hR.a3S + 1) % 4, aAF.name = (hR.a3S % 2 ? "Proxy " : "Lobby ") + (1 + (hR.a3S >> 1)), aL.cx = !0) : 2 === aAF.id ? (aA3 = 1, aL.cx = !
						0) : 3 === aAF.id ? (aA3 = 2, aL.cx = !0) : 4 === aAF.id ? kj.show() : 5 === aAF.id && (console.log("try showing ad:"), aO.i()) : 1 === aA3 ? 1 === aAF.id ? (hR.hS.tu = !hR.hS.tu, aAF.pN = hR.hS.tu ? 130 : 0, hR.a0k(),
							aL.cx = !0) : 2 === aAF.id ? (hR.hS.aA8 = !hR.hS.aA8, hR.aA7(), hR.a0k(), aL.cx = !0) : 3 === aAF.id ? (hR.hS.wr = !hR.hS.wr, aAF.pN = hR.hS.wr ? 130 : 0, hR.a0k(), aL.cx = !0) : 4 === aAF.id ? (hR.hS.hT = !hR.hS
							.hT, aAF.pN = hR.hS.hT ? 130 : 0, hR.a0k(), aL.cx = !0) : 5 === aAF.id ? (hR.hS.aA9++, hR.hS.aA9 %= 8, hR.aAA(aAF.id), hR.a0k(), p9.a3D(1), aL.cx = !0) : 6 === aAF.id ? (hR.hS.a6U++, hR.hS.a6U %= 10, hR.aAA(aAF
							.id), hR.a0k(), aL.cx = !0) : 7 === aAF.id ? (hR.hS.yN++, hR.hS.yN %= 4, hR.aAA(aAF.id), hR.a0k(), aL.cx = !0) : 8 === aAF.id ? (hR.aA4(), hR.aA7(), hR.a0k(), p9.a3D(1), aL.cx = !0) : 9 === aAF.id && (aA3 = 0, aL
							.cx = !0) : 1 === aAF.id ? (os.b(qV.aAG, !0), os.b(qV.aAG, !1)) : 2 === aAF.id ? (os.b(qV.aAH, !0), os.b(qV.aAH, !1)) : 3 === aAF.id ? (os.b(qV.aAI, !0), os.b(qV.aAI, !1)) : 4 === aAF.id ? (os.b(qV.a7x, !0), os.b(
							qV.a7x, !1)) : 5 === aAF.id ? (os.b(qV.u2, !0), os.b(qV.u2, !1)) : 13 === aAF.id ? (os.b(qV.aAJ, !0), os.b(qV.aAJ, !1)) : 14 === aAF.id ? (os.b(qV.aAK, !0), os.b(qV.aAK, !1)) : 6 === aAF.id ? (aA3 = 0, aL.cx = !
						0) : 7 === aAF.id ? m ? window.webkit.messageHandlers.iosCommandA.postMessage("showConsentForm") : n.setState(7) : 12 === aAF.id && n.setState(14), !0;
				return aA2 = !1, !(aL.cx = !0)
			}
			return !!or(hD, hE, aAC, 0) && (aA2 = !(aA3 = 0), aL.cx = !0)
		}
	}, this.oD = function(hD, hE) {
		var aE, aAC, pO, iA;
		if (!(7 <= aT.ov())) {
			for (aAC = aAD(), pO = zS, iA = aA2 ? 0 === aA3 ? vP[aA3].length - 2 : vP[aA3].length : 1, zS = -1, aE = 0; aE < iA; aE++)
				if (or(hD, hE, aAC, aE)) {
					zS = aE;
					break
				} pO !== zS && (aL.cx = !0)
		}
	}, this.d7 = function() {
		var aE, iA, aAC;
		if (!(7 <= aT.ov()) && (aAC = aAD(), d8.textAlign = dA, d8.textBaseline = d9, a0l(aAC.hI, aAC.hJ, aAC.mf, aAC.ty, vP[aA3][0].dO, vP[aA3][0].pN, vP[aA3][0].cV, 0 === zS, vP[aA3][0].name), d8.imageSmoothingEnabled = true, d8.drawImage(
				settingsGearIcon, aAC.hI - aAC.mf / 2, aAC.hJ, aAC.ty, aAC.ty), d8.imageSmoothingEnabled = false, d8.font = "bold " + Math.floor(aAC.ty * 0.4) + "px " + settings.fontName, (!aA2 && d8.fillText("Win count: " + wins_counter,
				Math.floor(aAC.hI + aAC.mf / 2), Math.floor((aAC.hJ + aAC.ty / 2) * 2.1))), aA2))
			for (iA = vP[aA3].length, aE = 1; aE < iA; aE++) a0l(aAC.hK, aAC.hJ + aE * aAC.ty - aE * pR, aAC.mg, aAC.ty, vP[aA3][aE].dO, vP[aA3][aE].pN, vP[aA3][aE].cV, zS === aE, vP[aA3][aE].name)
	}
}

function r4() {
	var xD, aAN, aAO, aAP, a7W = !1;

	function aAQ() {
		a7W = !0, xD = -1, aAN = new Array(4);
		for (var aE = 3; 0 <= aE; aE--) aAN[aE] = !1;
		var aAR = Math.floor(1 + .02 * ur);
		aAO = new Array(4), (aAP = new Array(4))[1] = aAP[3] = aAO[0] = aAO[2] = 0, aAP[0] = aAO[3] = -aAR, aAO[1] = aAP[2] = aAR
	}

	function aAS() {
		if (-1 !== xD)
			if (0 !== gg && gY.iA()) {
				for (var aAT = !1, aE = 3; 0 <= aE; aE--) aAN[aE] && (aAT = !0, eB += aAO[aE], eD += aAP[aE], g8.oD(aAO[aE], aAP[aE]), hv.wu());
				aAT ? aL.cx = !0 : hz.i0()
			} else hz.i0()
	}
	this.p2 = function(cm) {
		0 !== gg && gY.iA() && (a7W || aAQ(), aAN[cm] = !0, -1 === xD) && (xD = setInterval(aAS, 20), aAS())
	}, this.ox = function(cm) {
		if (0 !== gg && (a7W || aAQ(), aAN[cm] = !1, -1 !== xD)) {
			for (var aAT = !1, aE = 3; 0 <= aE; aE--) aAT = aAT || aAN[aE];
			aAT || this.i0()
		}
	}, this.i0 = function() {
		if (a7W && -1 !== xD) {
			for (var aE = 3; 0 <= aE; aE--) aAN[aE] = !1;
			clearInterval(xD), xD = -1
		}
	}
}

function r5() {
	var aAV;

	function aAb(hI, hJ, hK, hM) {
		return Math.abs(hK - hI) + Math.abs(hM - hJ)
	}
	this.aAW = function() {
		return aAV
	}, this.es = function(player, aAX) {
		var aE;
		if (0 !== bo[player].length && bW.bX(aAX) && (bW.bh(aAX) || bW.bg(aAX) !== player))
			for (aE = 21; 0 <= aE; aE--)
				if (function(aAV, aAX) {
						var aAa, aE, lp = bW.hN(aAV),
							lq = bW.d6(aAV),
							mC = bW.hN(aAX),
							mB = bW.d6(aAX),
							aAR = aAb(lp, lq, mC, mB);
						if (!(aAR < 2))
							for (aAa = aAV, aE = 0; aE < aAR; aE++)
								if (Math.abs(mC - bW.hN(aAa)) >= Math.abs(mB - bW.d6(aAa)) ? aAa += av[lp < mC ? 1 : 3] : aAa += av[lq < mB ? 2 : 0], !bW.s7(aAa)) return !!bW.bX(aAa) && !(0 === aE || aE + 20 < aAR);
						return
					}(aAV = 21 === aE ? function(border, aAX) {
						for (var aAR, mC = bW.hN(aAX), mB = bW.d6(aAX), cm = 0, min = aAb(mC, mB, bW.hN(border[0]), bW.d6(border[0])), aE = border.length - 1; 1 <= aE; aE--)(aAR = aAb(mC, mB, bW.hN(border[aE]), bW.d6(border[aE]))) < min && (
							min = aAR, cm = aE);
						return border[cm]
					}(bo[player], aAX) : bo[player][bJ(aE * bo[player].length, 21)], aAX)) return !0;
		return !1
	}
}

function a85() {
	var aAc = !1,
		u5 = 0,
		cu = 0,
		mf = 0,
		mA = 0,
		dL = null,
		iL = null,
		aAd = null;

	function aAf() {
		for (var a2L, aAi = 0, bU = 0, fV = Math.floor(cu / 2), dO = Math.floor(mf / 2), a2K = 1.5 * Math.PI, aE = pr; 0 <= aE; aE--) bU += aAd[aE], 0 === aAd[aE] && aAi++;
		if (aAc = !1, iL.clearRect(0, 0, cu, cu), iL.fillStyle = dB.iR, iL.fillRect(0, 0, cu, cu), iL.fillStyle = dB.dC, iL.fillRect(0, 0, cu, mA), iL.fillRect(0, 0, mA, cu), iL.fillRect(cu - mA, 0, mA, cu), iL.fillRect(0, cu - mA, cu, mA), 0 < bU)
			if (aAi === pr) {
				for (aE = pr; 0 <= aE; aE--)
					if (0 < aAd[aE]) {
						! function(aE, fV, dO) {
							iL.fillStyle = fW.a2P[fW.ng[aE]], iL.beginPath(), iL.arc(fV, fV, dO, 0, 2 * Math.PI), iL.fill()
						}(aE, fV, dO);
						break
					}!
				function(fV) {
					var cs = fV / 3;
					iL.font = cM.iL.km(cs, 1), iL.fillStyle = dB.dC, iL.fillText("100%", fV, fV + .1 * cs)
				}(fV)
			} else {
				for (aE = 0; aE <= pr; aE++) 0 < aAd[aE] && (! function(aE, fV, dO, a2K, a2L) {
					iL.fillStyle = fW.a2P[fW.ng[aE]], iL.beginPath(), iL.arc(fV, fV, dO, a2K, a2L), iL.lineTo(fV, fV), iL.fill()
				}(aE, fV, dO, a2K, a2L = a2K + 2 * Math.PI * aAd[aE] / bU), function(fV, dO, a2K, a2L) {
					var aR = (a2L - a2K) / (2 * Math.PI),
						cs = +dO * Math.min(aR, .37);
					cs < 8 || (a2K = (a2K + a2L) / 2, a2L = Math.floor(100 * aR + .5) + "%", dO *= .525 - Math.max(.6 * (aR - .7), 0), iL.font = cM.iL.km(cs, 1), iL.fillStyle = dB.dC, iL.fillText(a2L, fV + Math.cos(a2K) * dO, fV + Math.cos(
						a2K + 1.5 * Math.PI) * dO))
				}(fV, dO, a2K, a2L), 0 !== aE && a2N(fV, dO, a2K), a2K = a2L);
				a2N(fV, dO, 1.5 * Math.PI)
			}!
		function(fV, dO) {
			iL.beginPath(), iL.arc(fV, fV, dO, 0, 2 * Math.PI), iL.stroke()
		}(fV, dO)
	}

	function a2N(fV, dO, a2Q) {
		iL.beginPath(), iL.moveTo(fV, fV), iL.lineTo(fV + Math.cos(a2Q) * dO, fV + Math.cos(a2Q + 1.5 * Math.PI) * dO), iL.stroke()
	}
	this.b = function() {
		if (cS) {
			var aE;
			for (u5 = 0, aAd = new Uint32Array(pr + 1), aE = pr; 0 <= aE; aE--) aAd[aE] = 0;
			for (aE = fY - 1; 0 <= aE; aE--) aAd[fW.fX[fZ[aE]]] += 1;
			this.resize()
		} else aAd = iL = dL = null
	}, this.vg = function() {
		return cu
	}, this.resize = function() {
		cS && (cu = Math.floor(a0 && !hu ? .18 * ur : .13 * ck), cu = (cu *= 1 + (.5 + .2 * a0) * hu) + cu % 2, mf = Math.floor(7 * cu / 8), (dL = dL || document.createElement("canvas")).width = cu, dL.height = cu, iL = dL.getContext("2d", {
			alpha: !0
		}), mA = Math.max(1, .015 * cu), iL.lineWidth = mA, iL.strokeStyle = dB.dC, cM.iL.textAlign(iL, 1), cM.iL.textBaseline(iL, 1), aAf())
	}, this.ni = function() {
		return aAd[this.nh()]
	}, this.nT = function() {
		return u5 = 31, this.fF(), this.nh()
	}, this.nh = function() {
		for (var aAg = 0, aE = pr; 0 < aE; aE--) aAd[aE] > aAd[aAg] && (aAg = aE);
		return aAg
	}, this.fF = function() {
		if (cS && 32 <= ++u5) {
			var aE;
			for (u5 = 0, aE = pr; 0 <= aE; aE--) aAd[aE] = 0;
			for (aE = fY - 1; 0 <= aE; aE--) aAd[fW.fX[fZ[aE]]] += bv[fZ[aE]];
			aAc = !0
		}
	}, this.cp = function() {
		cS && aAc && aAf()
	}, this.d7 = function() {
		cS && (hu ? d8.drawImage(dL, kd, kd) : d8.drawImage(dL, kd, vh + 2 * kd))
	}
}

function rW() {
	this.a1p = function() {
		n || m || function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var aAn = window.location.search,
				aAn = new URLSearchParams(aAn).get(key);
			if ("string" != typeof aAn || aAn.length < 1) return null;
			return aAn
		}("replay") && kj.show()
	}, this.ks = function() {
		var aAm;
		n || m || ((aAm = new URL(window.location.href)).search = "", history.replaceState(null, "", aAm.toString()))
	}
}

function r6() {
	var aAp, ad;
	this.b = function() {
		for (var aE = (ad = new Uint16Array(101)).length - 1; 0 <= aE; aE--) ad[aE] = bJ(32768 * aE, 100);
		this.q1(0)
	}, this.value = function(bc) {
		return ad[bc]
	}, this.a7E = function() {
		return bJ(aAp - 1, 2)
	}, this.q1 = function(a7V) {
		aAp = 2 * a7V % 32768 + 1
	}, this.random = function() {
		return aAp = 167 * aAp % 32768
	}, this.en = function(gu) {
		return bJ(gu * this.random(), 32768)
	}, this.fP = function(bc) {
		return 0 !== bc && this.random() < this.value(bc)
	}
}

function rS() {
	this.kD = new aAq, this.wf = new aAr, this.we = new aAs, this.b = function(pu, mj, pw, px) {
		var aAt;
		cJ || ((aAt = {}).pv = bN, aAt.pu = pu, aAt.mj = mj, aAt.pw = pw, aAt.px = px, aAt.a2Y = az.ll, aAt.a2Z = az.a2V, fy.a2x(aAt), this.kD.b(aAt))
	}, this.fF = function() {
		cJ || this.kD.fF()
	}, this.wd = function() {
		var pN = this.kD.aAt;
		0 === gg && aT.a1I(), az.l4(pN.a2Y, pN.a2Z), 1 === pN.mj.length && (fy.a2s(pN.pw), fy.a2u(pN.a2v, pN.a2w)), gB.close(gB.oV, 3246), fy.a2z(), pt(pN.pu, pN.pv, pN.mj, pN.pw, pN.px, !0)
	}, this.wb = function(v) {
		var aE = v.indexOf("=");
		return 0 <= aE ? v.substring(aE + 1) : v
	}, this.wg = function(v) {
		return "https://territorial.io/?replay=" + v
	}
}

function aAq() {
	this.aAu = null, this.aAv = null, this.aAw = null, this.aAx = null, this.aAy = null, this.aAz = null;
	var aB0 = 0;
	this.aAt = null, this.wc = "", this.b = function(aAt) {
		this.aAu = [], this.aAv = [], this.aAw = [], this.aAx = [], this.aAy = [0], this.aAz = [0], aB0 = 0, this.aAt = aAt, this.wc = ""
	}, this.kE = function(id, ae, ag, ai) {
		cJ || 2 === gg || (0 === this.aAy[aB0] && (this.aAz[aB0] ? (this.aAy.push(1), this.aAz.push(0), aB0++) : this.aAy[aB0] = 1), this.aAu.push(id), this.aAv.push(ae), this.aAw.push(void 0 === ag ? 0 : ag), this.aAx.push(void 0 === ai ? 0 :
			ai), this.aAz[aB0]++)
	}, this.fF = function() {
		0 === this.aAy[aB0] ? this.aAz[aB0]++ : (this.aAy.push(0), this.aAz.push(0), aB0++)
	}
}

function aAs() {
	function aB6(v) {
		0 === gg ? qK.a16(3605) : g7.tM(v)
	}
	this.l8 = function(v) {
		if (lE.l1(lE.ky(lE.kx(v))), ! function() {
				if (k8.dF < 10) aB6("File Too Small");
				else if (k8.k9(9) !== a7p) aB6("Game Version Error");
				else if (k8.k9(31) !== k8.dF) aB6("Size Error");
				else {
					if (function(ez) {
							var aE, bc = k8.k7,
								bU = k8.dF,
								a4Z = 0;
							for (aE = 7; aE < bU; aE++) a4Z = a4Z + bc[aE] & 65535;
							return a4Z === ez
						}(k8.k9(16))) return 1;
					aB6("Hash Error")
				}
				return
			}()) return !1;
		(aAt = {}).pv = k8.k9(9), aAt.pu = k8.k9(14), aAt.pw = k8.k9(4), aAt.px = 1 === k8.k9(1), aAt.a2Y = k8.k9(6), aAt.a2Z = k8.k9(14), aAt.aB8 = k8.k9(10), gW.kD.aAt = aAt,
			function() {
				var aE, a35, a34, name, bU = gW.kD.aAt.aB8,
					mj = [];
				for (aE = 0; aE < bU; aE++) a35 = k8.k9(1), a34 = [k8.k9(6), k8.k9(6), k8.k9(6)], name = k8.aB9(k8.k9(5)), mj.push({
					name: name,
					a34: a34,
					a35: a35
				});
				if (gW.kD.aAt.mj = mj, 8 === gW.kD.aAt.pw)
					for (aE = 0; aE < bU; aE++) mj[aE].mn = k8.k9(14)
			}(),
			function() {
				var aE, bU, aBA = gW.kD.aAt;
				if (1 === aBA.mj.length)
					for (bU = 6 < aBA.pw ? 1 : aBA.pw + 2, aBA.a2v = new Array(bU), aBA.a2w = new Array(bU), aE = 0; aE < bU; aE++) aBA.a2v[aE] = k8.k9(3), aBA.a2w[aE] = k8.k9(9) + 1
			}(), aAt = k8.k9(5), aBB = k8.k9(30), aBC = k8.k9(30);
		var aAt, aBB, aBC, aE, id, bU = aBB,
			aBF = new Uint8Array(bU),
			aBG = new Uint16Array(bU),
			aBH = new Uint32Array(bU),
			aBI = new Uint32Array(bU);
		for (gW.kD.aAu = aBF, gW.kD.aAv = aBG, gW.kD.aAw = aBH, gW.kD.aAx = aBI, aE = 0; aE < bU; aE++) aBF[aE] = id = k8.k9(4), aBG[aE] = k8.k9(9), 0 === id ? aBH[aE] = k8.k9(22) : 1 === id ? (aBH[aE] = k8.k9(10), aBI[aE] = k8.k9(10)) : 2 ===
			id ? (aBH[aE] = k8.k9(10), aBI[aE] = k8.k9(9)) : 3 === id || 4 === id ? (aBH[aE] = k8.k9(10), aBI[aE] = k8.k9(22)) : 5 === id ? aBH[aE] = k8.k9(10) : 6 === id ? aBH[aE] = k8.k9(7) : 7 === id && (aBH[aE] = k8.k9(1));
		return function(bU, l9) {
			var aE, aAy = new Uint8Array(bU),
				aAz = new Array(bU);
			for (aAz.fill(0), gW.kD.aAy = aAy, gW.kD.aAz = aAz, aE = 0; aE < bU; aE++) aAy[aE] = k8.k9(1), aAz[aE] = k8.k9(l9)
		}(aBC, aAt), k8.cm < 8 * k8.dF - 13 || k8.cm > 8 * k8.dF ? (aB6("Out Of Bounds Error: " + k8.cm + " " + 8 * k8.dF), !1) : (gW.kD.wc = v, !0)
	}
}

function aAr() {
	this.nA = function() {
		var aBA, l9 = function() {
				var aE, aAz = gW.kD.aAz,
					bU = aAz.length,
					max = 0;
				for (aE = 0; aE < bU; aE++) max = Math.max(max, aAz[aE]);
				return lG(Math.max(max, 1))
			}(),
			aBK = function(l9) {
				return 179 + function() {
					var aE, mj = gW.kD.aAt.mj,
						bU = mj.length,
						aBK = 24 * bU;
					for (aE = 0; aE < bU; aE++) aBK += 10 * w.nA(mj[aE].name).length;
					8 === gW.kD.aAt.pw && (aBK += 14 * bU);
					return aBK
				}() + (1 === gW.kD.aAt.mj.length ? 12 * gW.kD.aAt.a2v.length : 0) + function() {
					var aE, aAu = gW.kD.aAu,
						bU = aAu.length,
						aBK = 13 * bU,
						aBY = [22, 20, 19, 32, 32, 10, 7, 1, 0, 0];
					for (aE = 0; aE < bU; aE++) aBK += aBY[aAu[aE]];
					return aBK
				}() + function(l9) {
					return gW.kD.aAz.length * (1 + l9)
				}(l9)
			}(l9);
		l3.l4(aBK + (6 - aBK % 6) % 6), aBA = gW.kD.aAt, l3.l5(9, a7p), l3.l5(31, l3.dF), l3.cm += 16, l3.l5(9, aBA.pv), l3.l5(14, aBA.pu), l3.l5(4, aBA.pw), l3.l5(1, aBA.px), l3.l5(6, aBA.a2Y), l3.l5(14, aBA.a2Z), l3.l5(10, aBA.mj.length);
		var aE, cV, aBS, aBT, mj = gW.kD.aAt.mj,
			bU = mj.length;
		for (aE = 0; aE < bU; aE++)
			for (l3.l5(1, mj[aE].a35), l3.l5(18, (mj[aE].a34[0] << 12) + (mj[aE].a34[1] << 6) + mj[aE].a34[2]), aBS = w.nA(mj[aE].name), aBT = aBS.length, l3.l5(5, aBT), cV = 0; cV < aBT; cV++) l3.l5(10, aBS[cV]);
		if (8 === gW.kD.aAt.pw)
			for (aE = 0; aE < bU; aE++) l3.l5(14, mj[aE].mn);
		return function() {
				var aE, aBA = gW.kD.aAt;
				if (1 === aBA.mj.length)
					for (aE = 0; aE < aBA.a2v.length; aE++) l3.l5(3, aBA.a2v[aE]), l3.l5(9, aBA.a2w[aE] - 1)
			}(),
			function(l9) {
				var aE, aAu = gW.kD.aAu,
					ae = gW.kD.aAv,
					ag = gW.kD.aAw,
					ai = gW.kD.aAx,
					bU = aAu.length;
				for (l3.l5(5, l9), l3.l5(30, bU), l3.l5(30, gW.kD.aAz.length), aE = 0; aE < bU; aE++) l3.l5(4, aAu[aE]), l3.l5(9, ae[aE]), 0 === aAu[aE] ? l3.l5(22, ag[aE]) : 1 === aAu[aE] ? (l3.l5(10, ag[aE]), l3.l5(10, ai[aE])) : 2 === aAu[
					aE] ? (l3.l5(10, ag[aE]), l3.l5(9, ai[aE])) : 3 === aAu[aE] || 4 === aAu[aE] ? (l3.l5(10, ag[aE]), l3.l5(22, ai[aE])) : 5 === aAu[aE] ? l3.l5(10, ag[aE]) : 6 === aAu[aE] ? l3.l5(7, ag[aE]) : 7 === aAu[aE] && l3.l5(1, ag[aE])
			}(l9),
			function(l9) {
				var aE, aAy = gW.kD.aAy,
					aAz = gW.kD.aAz,
					bU = aAy.length;
				for (aE = 0; aE < bU; aE++) l3.l5(1, aAy[aE]), l3.l5(l9, aAz[aE])
			}(l9), l3.cm !== aBK && g7.tM("Encoder Index Error: " + l3.cm + " " + aBK), l3.cm = 40, l3.l5(16, function() {
				var aE, bc = l3.k7,
					bU = l3.dF,
					a4Z = 0;
				for (aE = 7; aE < bU; aE++) a4Z = a4Z + bc[aE] & 65535;
				return a4Z
			}()), k8.b(l3.k7), qT.mx(qT.mv(bJ(aBK - 1, 6) + 1))
	}
}

function rD() {
	var fV, tq = !1,
		aBZ = !1,
		aBa = -1e4;

	function resize(de) {
		fV = 0, cq.cr() && (aBb(de) || tq) && (tq = !1, up(), zr.b(), qI.b(), ot.resize(), a1R.b(), qJ.resize(), oj.resize(), qH.resize(), a1G.resize(), d5.resize(), aF.b(), 1 <= gg ? (gN.resize(!1), gQ.resize(), g9.resize(), hv.resize(), cf
		.resize(), g7.resize(), cK.resize(), kj.resize(), gb.resize(), gT.resize(), gR.resize(), cv.resize(), mY.resize(), mZ.resize(), g8.resize(), gZ.resize(), gU.resize(), hv.wu()) : (2 === aT.ov() ? fy.resize() : 3 === aT.ov() && qK
			.resize(), aT.a1O(), aT.a1S()), aL.cx = !0)
	}

	function aBc(aR) {
		return aR && 128 < aR ? Math.floor(aR) : 128
	}

	function aBb(de) {
		var mf, ty, tz;
		return p9.aAB(), mf = aBc(document.documentElement.clientWidth), ty = window.visualViewport ? aBc(window.visualViewport.height) : aBc(document.documentElement.clientHeight), de && !aBZ ? (aBZ = !0, document.body.removeChild(oC)) : aBZ && (
			aBZ = !1, document.body.appendChild(oC)), de = Math.floor(.5 + kn * mf), tz = Math.floor(.5 + kn * ty), !(de === hL && tz === d3 || oc.p8() && (ot.ki || kj.ki)) && (hL = a1 = de, d3 = a2 = tz, ur = vz(a1, a2), ck = bJ(a2 + a1, 2), oC
			.width = de, oC.height = tz, oC.style.width = mf + "px", oC.style.height = ty + "px", 1)
	}
	this.b = function() {
		a1 = a2 = ur = hL = d3 = ck = 0, kn = fV = 1, oC = document.getElementById("canvasA"), (d8 = oC.getContext("2d", {
			alpha: !1
		})).imageSmoothingEnabled = !1, aBb(0)
	}, this.fF = function() {
		qR.fF(), 50 <= ++fV && resize(0)
	}, this.a3D = function(de) {
		tq = !0, resize(de)
	}, this.pA = function() {
		aBa + 1e3 > aL.aM || (aBa = aL.aM, resize(0))
	}, this.aAB = function() {
		var aBd = window.devicePixelRatio || 1,
			aE = hR.hS.aA9;
		return (kn = aE < 3 ? .5 + .25 * aE : (.5 + .125 * (aE - 3)) * aBd) / aBd
	}
}

function r7() {
	var player, ee, lZ, lT, hI, hJ, hK, hM, cm, aBe, id;

	function aBk() {
		var ed;
		if (bW.bh(lZ)) ed = bZ;
		else {
			if ((ed = bW.bg(lZ)) === player) return void aBm(!0);
			if (!eo(player, ed)) return function(ed) {
				var max = bv[ed] * pW - bO[ed];
				max <= 0 || (ee -= max = max < ee ? max : ee, player === bN && (g7.jo(max, 0, ed), bR.bS[16] += max), ed === bN && (g7.ti(max, player), bR.bS[10] += max), bO[ed] += max, g8.jp(ed, max))
			}(ed), void aBm(!0)
		}
		player === bN && (bR.bS[13] += ee), gK.bM(player, id), b5.bT(player, aBe), bV[player].push(lT), b5.ea(player, ee, ed), bL.eb(player, !0)
	}

	function aBm(aBp) {
		gK.bM(player, id), b5.bT(player, aBe), aBp && (bO[player] += ee)
	}

	function aBg() {
		bW.a4J(lZ, player) && bW.a4L(lZ)
	}

	function aBf(aE, a5i, vc, el, iA) {
		if (cm = aE, id = a5i, player = vc, hI = bW.hN(el), hJ = bW.d6(el), hK = bW.hN(iA), hM = bW.d6(iA), lT = lZ = bW.m5(hI, hJ), -1 !== (aBe = b5.hQ(player, id))) return ee = b5.bD(player, aBe), 1;
		aBg(), gK.bM(player, id)
	}
	this.fF = function(aE, id, vc, el, iA) {
		aBf(aE, id, vc, el, iA) && (aBg(), function() {
			var aBq = bJ(ee, 128);
			ee -= aBq = aBq < 1 ? 1 : aBq, player === bN && (bR.bS[15] += aBq);
			if (ee <= bK) return player === bN && (bR.bS[15] += ee), void aBm(!1);
			return b5.bu(player, aBe, ee), 1
		}()) && (aE = bW.m5(hI, hJ), lZ = Math.abs(hK - hI) >= Math.abs(hM - hJ) ? aE + av[hI < hK ? 1 : 3] : aE + av[hJ < hM ? 2 : 0], hI = bW.hN(lZ), hJ = bW.d6(lZ), gK.h5(cm, lZ), ! function() {
			if (bW.bX(lZ)) return;
			return 1
		}() ? aBk() : bW.s7(lZ) && bW.a4O(lZ, player))
	}, this.h9 = function(vc, el) {
		player = vc, lZ = bW.m5(bW.hN(el), bW.d6(el)), aBg()
	}
}

function r8() {
	var aBr, aBs, s7, aBt;
	this.b = function() {
		var aE, hD, hE, a34, aBu, cu, ez, iL, dI, lR, aR, bc, f7, ej, aBx;
		if (function() {
				if (s7 = !0, aBt = "rgb(" + az.lO[0] + "," + az.lO[1] + "," + az.lO[2] + ")", az.a8L(az.ll)) return 1;
				return s7 = !1, 0
			}()) aBs = null;
		else {
			for (aBr = bJ(96, 4), aBu = 1 === az.ll ? (a34 = 0, 160) : (a34 = 128, 32), aBt = "rgb(" + a34 + "," + a34 + "," + a34 + ")", aBs = new Array(4), aE = 3; 0 <= aE; aE--) {
				if (aBs[aE] = document.createElement("canvas"), cu = aE % 2 == 0 ? az.b0 : aBr, ez = aE % 2 == 0 ? aBr : az.b1 + 2 * aBr, aBs[aE].width = cu, aBs[aE].height = ez, lR = (dI = (iL = aBs[aE].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, cu, ez)).data, aE % 2 == 0)
					for (hE = aBr - 1; 0 <= hE; hE--)
						for (aR = aBu + Math.floor((hE + 1) * (a34 - aBu) / (aBr + 1)), hD = cu - 1; 0 <= hD; hD--) lR[bc = 4 * ((0 === aE ? aBr - hE - 1 : hE) * cu + hD)] = aR, lR[bc + 1] = aR, lR[bc + 2] = aR, lR[bc + 3] = 255;
				else {
					for (hD = aBr - 1; 0 <= hD; hD--)
						for (aR = aBu + Math.floor((hD + 1) * (a34 - aBu) / (aBr + 1)), hE = ez - 1 - aBr; aBr <= hE; hE--) lR[bc = 4 * (hE * cu + (3 === aE ? aBr - hD - 1 : hD))] = aR, lR[bc + 1] = aR, lR[bc + 2] = aR, lR[bc + 3] = 255;
					for (ej = 1; 0 <= ej; ej--)
						for (hD = aBr - 1; 0 <= hD; hD--)
							for (hE = aBr - 1; 0 <= hE; hE--) f7 = (Math.pow(hD * hD + hE * hE, .5) + 1) / (aBr + 1), aR = aBu + Math.floor((1 < f7 ? 1 : f7) * (a34 - aBu)), lR[bc = 4 * ((0 === ej ? aBr - hE - 1 : hE + ej * (ez - aBr)) * cu + (
								1 === aE ? hD : aBr - hD - 1))] = aR, lR[bc + 1] = aR, lR[bc + 2] = aR, lR[bc + 3] = 255
				}
				iL.putImageData(dI, 0, 0)
			}
			aBx = aBu, az.lJ.fillStyle = "rgb(" + aBx + "," + aBx + "," + aBx + ")", az.lJ.fillRect(0, 0, az.b0, 1), az.lJ.fillRect(0, az.b1 - 1, az.b0, 1), az.lJ.fillRect(0, 0, 1, az.b1), az.lJ.fillRect(az.b0 - 1, 0, 1, az.b1)
		}
	}, this.mV = function() {
		var ej = s7 ? 0 : -aBr;
		a9v(ej, ej, az.b0 - 2 * ej, az.b1 - 2 * ej, i8.aBy, i8.aBz, i8.aC0, i8.aC1) || (d8.fillStyle = aBt, d8.fillRect(0, 0, hL, d3))
	}, this.d7 = function() {
		s7 || (a9u(0, -aBr, az.b0, aBr, i8.aBy, i8.aBz, i8.aC0, i8.aC1) && d8.drawImage(aBs[0], i8.aC2, i8.aC3 - aBr), a9u(az.b0, -aBr, aBr, az.b1 + 2 * aBr, i8.aBy, i8.aBz, i8.aC0, i8.aC1) && d8.drawImage(aBs[1], i8.aC2 + az.b0, i8.aC3 - aBr),
			a9u(0, az.b1, az.b0, aBr, i8.aBy, i8.aBz, i8.aC0, i8.aC1) && d8.drawImage(aBs[2], i8.aC2, i8.aC3 + az.b1), a9u(-aBr, -aBr, aBr, az.b1 + 2 * aBr, i8.aBy, i8.aBz, i8.aC0, i8.aC1) && d8.drawImage(aBs[3], i8.aC2 - aBr, i8.aC3 - aBr))
	}
}

function rX() {
	this.jS = new aC4, this.a4m = new aC5, this.mW = new aC6, this.gL = new aC7, this.eP = new aC8, this.aBx = new aC9, this.aCA = new aCB, this.fE = new aCC, this.kQ = new aCD, this.b = function() {
		this.mW.b(), this.gL.b(), this.eP.b(), this.aBx.b()
	}
}

function aCC() {
	function aCJ(player, el, aCL, aCM) {
		for (var hI, hJ, cu, ez, dO, aCN, hK, hM, bU = el + aCM, aE = el; aE < bU; aE += aCL)
			if (hI = (hI = f3[player] - aE) < 1 ? 1 : hI, hJ = f6[player] - aE, hK = (hK = f2[player] + aE) >= az.b0 - 1 ? az.b0 - 2 : hK, ez = (hM = (hM = f5[player] + aE) >= az.b1 - 1 ? az.b1 - 2 : hM) - (hJ = hJ < 1 ? 1 : hJ), hK = (dO = bJ(em
					.random() * (2 * (hK - hI + hM - hJ)), em.value(100))) <= (cu = hK - hI) ? (aCN = hI + dO, hJ) : dO <= cu + ez ? (aCN = hK, hJ + dO - cu) : dO <= 2 * cu + ez ? (aCN = hI + dO - cu - ez, hM) : (aCN = hI, hJ + dO - 2 * cu - ez),
				aCK(player, hM = bW.m5(aCN, hK))) return hM;
		return -1
	}

	function aCK(pS, bd) {
		return bW.bX(bd) && (bW.bh(bd) || pS !== (bd = bW.bg(bd)) && eo(pS, bd) && 0 < bo[bd].length)
	}
	this.fF = function(player) {
		return !(0 === bo[player].length || bO[player] < 100) && eO.gL.kM !== eO.gL.kN && (eO.gL.kO[player] !== eO.gL.kP && cM.cN.kH(player, 203, 32, 16) ? !! function(player) {
			var bd = function(player) {
				var aE, m9, m8, hI = f3[player],
					hJ = f6[player],
					dx = f2[player] - hI + 1,
					e0 = f5[player] - hJ + 1,
					aR = em.value(100);
				for (aE = 0; aE < 32; aE++)
					if (m9 = hI + cA.cB(em.random() * dx, aR), m8 = hJ + cA.cB(em.random() * e0, aR), m9 = bW.m5(m9, m8), aCK(player, m9)) return m9;
				return -1
			}(player);
			if (0 <= bd) return eO.kQ.kR(player, bd >> 2);
			if (0 <= (bd = aCJ(player, 1, 4, 40))) return eO.kQ.kR(player, bd >> 2);
			if (0 <= (bd = aCJ(player, 40, 8, 200))) return eO.kQ.kR(player, bd >> 2);
			return
		}(player) && !! function(pS) {
			if (0 === eU.aa[2]) return void console.log("error 325234");
			var aCH = eU.aa[1] + kC.dQ[eU.aa[2] - 1] << 2;
			if (bW.bh(aCH)) return 1;
			return aCH = bW.bg(aCH), pS !== aCH && !!eo(pS, aCH)
		}(player) && function(player) {
			return cM.cN.kJ(player), eO.gL.kS(player), !0
		}(player) : void 0)
	}
}

function aC4() {
	function aCQ(aCP) {
		var aCd = 4 + .03 * (1 + 1.5 * a0) * ck / eC;
		return kC.e3(aCP, eU.aa[1]) < aCd
	}
	this.jT = function(player, aCP) {
		return !!kC.eI(aCP) && eO.gL.kM !== eO.gL.kN && eO.gL.kO[player] !== eO.gL.kP && 0 !== bo[player].length && !!eO.kQ.kR(player, aCP) && !!aCQ(aCP)
	}, this.jX = function(player, jW, aCP) {
		return !!(kC.eI(aCP) && this.kT(player, jW) && eO.kQ.kU(aCP) && aCQ(aCP))
	}, this.kT = function(player, id) {
		for (var aCR, aCS = player << 3, aCT = aCS + eO.gL.kO[player], aCU = eO.gL.aCU, aCV = eO.gL.aCV, aE = aCS; aE < aCT; aE++)
			if (id === aCV[aCR = aCU[aE]]) return eU.aa[3] = aCR, !0;
		return !1
	}, this.jV = function(dg) {
		var aCW = eO.aBx.aCW;
		return eO.aBx.aCW = -1, !!this.kT(bN, aCW) && (cc.cd.jV(aCW, dg), !0)
	}, this.s3 = function(d0, d1) {
		var aE, aCT, aCX, aCU, aCY, aCZ, aCa, f7, tR, aCb, player = bN,
			bU = eO.gL.kO[player];
		if (0 === bU) return !1;
		for (aCU = eO.gL.aCU, aCZ = eO.gL.aCZ, tR = eO.gL.tR, aCT = (player = player << 3) + bU, aCY = .4 * cM.iL.kc() * ck / eC, aCX = -1, aE = player; aE < aCT; aE++) aCb = aCU[aE], aCa = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(tR[aCb]))), (
			f7 = kC.dt(d0, d1, aCZ[aCb])) - aCa < aCY && (aCY = f7, aCX = aCb);
		return !(aCX < 0 || (eO.aBx.aCW = eO.gL.aCV[aCX], 0))
	}, this.sH = function(d0, d1) {
		var aE, aCX, aCY, aCZ, aCa, f7, tR, bU = eO.gL.kM;
		if (bU < 1) return -1;
		for (aCZ = eO.gL.aCZ, tR = eO.gL.tR, aCY = 1e3, aCX = -1, aE = 0; aE < bU; aE++) aCa = 16 * cM.iL.kc() * (.625 + .125 * Math.sqrt(Math.sqrt(tR[aE]))), (f7 = kC.dt(d0, d1, aCZ[aE])) < aCY && f7 < aCa && (aCY = f7, aCX = aE);
		return aCX
	}, this.aCc = function(d0, d1) {
		var aE, aCT, aCX, aCU, aCY, aCZ, aCa, f7, tR, aCb, player = bN,
			bU = eO.gL.kO[player];
		if (0 === bU) return -1;
		for (aCU = eO.gL.aCU, aCZ = eO.gL.aCZ, tR = eO.gL.tR, aCT = (player = player << 3) + bU, aCY = .4 * cM.iL.kc() * ck / eC, aCX = -1, aE = player; aE < aCT; aE++) aCb = aCU[aE], aCa = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(tR[aCb]))), (
			f7 = kC.dt(d0, d1, aCZ[aCb])) - aCa < aCY && (aCY = f7, aCX = aCb);
		return aCX < 0 ? -1 : eO.gL.aCV[aCX]
	}
}

function aC5() {
	this.a4n = function(player) {
		for (var aCU = eO.gL.aCU, aCS = player << 3, aE = aCS + eO.gL.kO[player] - 1; aCS <= aE; aE--) this.aCe(aCU[aE])
	}, this.aCe = function(aCf) {
		var gL = eO.gL,
			aCg = gL.kM - 1,
			aCh = gL.tQ[aCf],
			aCi = gL.aCj[aCf],
			aCk = gL.aCZ[aCf];
		gL.kM = aCg, gL.tQ[aCf] = gL.tQ[aCg], gL.aCl[aCf] = gL.aCl[aCg], gL.aCm[aCf] = gL.aCm[aCg], gL.aCZ[aCf] = gL.aCZ[aCg], gL.aCn[aCf] = gL.aCn[aCg], gL.tR[aCf] = gL.tR[aCg], gL.aCj[aCf] = gL.aCj[aCg], gL.aCV[aCf] = gL.aCV[aCg], gL.aCo[aCf] =
			gL.aCo[aCg], gL.aCU[gL.tQ[aCf]] = aCf,
			function(a2Q) {
				var player = a2Q >> 3,
					gL = eO.gL,
					bU = gL.kO[player] - 1,
					aCr = (player << 3) + bU;
				gL.kO[player] = bU, aCr !== a2Q && (gL.aCU[a2Q] = gL.aCU[aCr], gL.tQ[gL.aCU[a2Q]] = a2Q)
			}(aCh), eO.eP.eP[kC.eN(gL.aCZ[aCf])][gL.aCj[aCf]] = aCf, aCg = kC.eN(aCk), aCh = aCi, aCg = eO.eP.eP[aCg], gL = aCg.pop(), aCh !== aCg.length && (aCg[aCh] = gL, eO.gL.aCj[gL] = aCh)
	}
}

function aC6() {
	var aCu, aCv = 8,
		aCw = new Array(2);

	function aCx(cm) {
		var dE = aCv + 4,
			rn = cM.iL.lF(dE, dE),
			dM = cM.iL.getContext(rn, !0),
			dI = cM.iL.getImageData(dM, dE, dE),
			lR = dI.data;
		return aCy(lR, dE + 1, cm), aCy(lR, dE + 2, cm), aCy(lR, 2 * dE + 1, cm), aCy(lR, 2 * dE - 3, cm), aCy(lR, 2 * dE - 2, cm), aCy(lR, 3 * dE - 2, cm), aCy(lR, dE * (dE - 3) + 1, cm), aCy(lR, dE * (dE - 2) + 1, cm), aCy(lR, dE * (dE - 2) + 2,
			cm), aCy(lR, dE * (dE - 2) - 2, cm), aCy(lR, dE * (dE - 1) - 3, cm), aCy(lR, dE * (dE - 1) - 2, cm), dM.putImageData(dI, 0, 0), rn
	}

	function aCy(lR, dg, cm) {
		dg *= 4;
		lR[dg] = 255, lR[1 + dg] = 255, lR[2 + dg] = cm, lR[3 + dg] = 255
	}

	function lF(player) {
		var aCz = aCv >> 1,
			rn = cM.iL.lF(aCv, aCv);
		return function(dM, player, hD, hE) {
			var dx, dg, aD1, a2R, dE = aCv,
				dI = cM.iL.getImageData(dM, dE, dE),
				lR = dI.data,
				ca = (dE >> 1) - .5,
				aBt = bW.a4D(player),
				aD3 = cM.lP.pG(aBt, .5);
			cM.lP.pH(aBt, aD3, 300) || cM.lP.pJ(aBt, 100);
			for (hE = 0; hE < dE; hE++)
				for (hD = 0; hD < dE; hD++) a2R = (dE - 1.5) * (dE - 1.5) / 4, aD1 = (dx = (dx = hD - ca) * dx + (dx = hE - ca) * dx) <= (dE - 4.5) * (dE - 4.5) / 4 ? aD3 : aBt, lR[dg = 4 * (hE * dE + hD)] = aD1[0], lR[1 + dg] = aD1[1], lR[2 +
					dg] = aD1[2], lR[3 + dg] = a2R < dx ? 0 : 255;
			dM.putImageData(dI, 0, 0)
		}(cM.iL.getContext(rn, !0), player, aCz, aCz), rn
	}
	this.b = function() {
		aCu = new Array(bZ), aCw[0] = aCx(255), aCw[1] = aCx(0)
	}, this.d7 = function() {
		var aE, player, aD4, ee, aD5, dw, aD9, aDB, aDC, aCZ = eO.gL.aCZ,
			tQ = eO.gL.tQ,
			tR = eO.gL.tR,
			aDD = aCu,
			aDE = bN,
			aDF = -1,
			bU = eO.gL.kM,
			aDG = hL,
			aDH = d3,
			aDI = az.b0 << 4,
			aDJ = eC,
			dq = aDJ / aCv,
			hI = eB / aDJ,
			hJ = eD / aDJ,
			dx = (aDG + eB) / aDJ - hI,
			e0 = (aDH + eD) / aDJ - hJ,
			dM = d8;
		for (eO.jS.kT(bN, eO.aBx.aCW) && (aDF = eU.aa[3]), dM.fillStyle = dB.dC, aE = 0; aE < bU; aE++) player = tQ[aE] >> 3, ee = tR[aE], aD4 = .625 + .125 * Math.sqrt(Math.sqrt(ee)), aD5 = (dw = aCZ[aE]) % aDI / 16 - aD4, dw = aDH * (Math
			.floor(dw / aDI) / 16 - aD4 - hJ) / e0, aD9 = -2 * (aDC = aDJ * aD4) * (1 + (aDB = +(player === aDE)) / 8), aDB = aDB * aDC / 4, (aDC = aDG * (aD5 - hI) / dx) < aD9 || dw < aD9 || aDG + aDB < aDC || aDH + aDB < dw || (aD5 = aD4 *
			aDJ, dM.imageSmoothingEnabled = (aD9 = 2 * aD4 * dq) < 3, void 0 === (aDB = aDD[player]) && (aDD[player] = aDB = lF(player)), player === aDE && (dM.setTransform(aD9, 0, 0, aD9, aDC - 2 * aD9, dw - 2 * aD9), dM.drawImage(aCw[+(
				aE === aDF)], 0, 0)), dM.setTransform(aD9, 0, 0, aD9, aDC, dw), dM.drawImage(aDB, 0, 0), (aD4 = Math.floor(function(ee) {
				if (ee < 1e3) return .42;
				if (ee < 1e4) return .34;
				if (ee < 1e6) return .26;
				if (ee < 1e8) return .19;
				return .15
			}(ee) * aD5)) < 6) || (dM.setTransform(1, 0, 0, 1, 0, 0), 20 <= aD4 ? (dM.font = cM.iL.km(.85 * aD4, 1), dM.fillText(gR.hU(ee), aDC + aD5, dw + .93 * aD5 + .085 * aD4), (aD4 *= g8.a6e(player)) < 6 || (dM.font = cM.iL.km(aD4, 1),
			dM.fillText(hV[player], aDC + aD5, dw + 1.16 * aD5 + .1 * aD4))) : (dM.font = cM.iL.km(aD4, 1), dM.fillText(gR.hU(ee), aDC + aD5, dw + aD5 + .1 * aD4)));
		dM.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aCB() {
	this.fF = function() {
		for (var aDL, aCA, aCo = eO.gL.aCo, aCZ = eO.gL.aCZ, aCm = eO.gL.aCm, aE = eO.gL.kM - 1; 0 <= aE; aE--) aDL = aCZ[aE], 0 !== (aCA = aCo[aE]) && aDL === aCm[aE] && (! function(aE, aDN, dd) {
			var ed, player = eO.gL.tQ[aE] >> 3,
				dd = aDN + kC.dQ[dd] << 2,
				aE = eO.gL.tR[aE];
			if (bW.bh(dd)) ed = bZ;
			else {
				if ((ed = bW.bg(dd)) === player) return cM.cN.jn(player, aE);
				if (!eo(player, ed)) return cc.fa.jl(player, ed, aE)
			}
			player === bN && (bR.bS[13] += aE);
			bV[player].push(aDN << 2), b5.ea(player, aE, ed), bL.eb(player, !0)
		}(aE, kC.eM(aDL), aCA - 1), eO.a4m.aCe(aE))
	}
}

function aC7() {
	this.aDO = null, this.kN = 512, this.kP = 8, this.kM = 0, this.h0 = 0, this.tQ = new Uint16Array(this.kN), this.aCl = new Uint32Array(this.kN), this.aCm = new Uint32Array(this.kN), this.aCZ = new Uint32Array(this.kN), this.aCn = new Uint16Array(
			this.kN), this.tR = new Uint32Array(this.kN), this.aCj = new Uint16Array(this.kN), this.aCV = new Uint16Array(this.kN), this.aCo = new Uint8Array(this.kN), this.kO = new Uint8Array(bZ), this.aCU = new Uint16Array(this.kP * bZ), this.b =
		function() {
			this.h0 = 0, this.kM = 0, this.aDO = new Uint8Array(az.b0 + az.b1), this.kO.fill(0)
		}, this.kS = function(player) {
			var bU = this.kM,
				aDP = kC.eL(eU.aa[0]),
				aBT = this.kO[player],
				aDQ = (player << 3) + aBT;
			e6[player] = 2, this.tQ[bU] = aDQ, this.aCl[bU] = aDP, this.aCZ[bU] = aDP, this.aCm[bU] = kC.eL(eU.aa[1]), this.aCn[bU] = 0, this.tR[bU] = eU.aX[0], this.aCj[bU] = eO.eP.kS(bU, kC.eN(aDP)), this.aCV[bU] = this.h0, this.aCo[bU] = eU.aa[2],
				this.h0 = this.h0 + 1 & 1023, this.aCU[aDQ] = bU, this.kO[player] = aBT + 1, this.kM++
		}, this.jV = function() {
			var aCR = eU.aa[3];
			this.aCl[aCR] = this.aCZ[aCR], this.aCm[aCR] = kC.eL(eU.aa[1]), this.aCn[aCR] = 0, this.aCo[aCR] = eU.aa[2]
		}, this.fF = function() {
			if (aL.fU() % 5 == 3) {
				eO.aCA.fF(), ! function(sN) {
					var aE, aDU, aDV, aDW, aDX, aDP, aDb, aDc, be, bd, aCl = sN.aCl,
						aCm = sN.aCm,
						aCZ = sN.aCZ,
						tR = sN.tR,
						aCn = sN.aCn,
						aCj = sN.aCj,
						sN = sN.kM,
						aDI = az.b0 << 4;
					for (aE = sN - 1; 0 <= aE; aE--) aDV = aCZ[aE], aDU = aCm[aE], aDV !== aDU && (aDP = aCl[aE], aDb = aDU % aDI - (aDX = aDP % aDI), aDc = ~~((aDU + .5) / aDI) - (aDP = ~~((aDP + .5) / aDI)), be = ~~Math.sqrt(aDb * aDb + aDc *
						aDc + .5), bd = 4e5 + 2e4 * ~~Math.sqrt(.5 + (Math.sqrt(tR[aE] + .5) << 4)), 65535 <= (bd = aCn[aE] + Math.max(~~((.5 + bd) / be), 1)) ? aCZ[aE] = aDW = aDU : (aCn[aE] = bd, aCZ[aE] = aDW = aDX + cA.cB(bd * aDb,
						65536) + aDI * (aDP + cA.cB(bd * aDc, 65536))), aCj[aE] = eO.eP.aDe(aCj[aE], aDV, aDW))
				}(this), ! function(sN) {
					var aE, le, ca, cV, fV, aDf, aDg, aDh, lZ, dV, hI, hJ, aDi, aCY, aDj, la, aDP, aDm, bU = sN.kM,
						aCZ = sN.aCZ,
						tQ = sN.tQ,
						tR = sN.tR,
						eP = eO.eP.eP,
						aDn = eP.length,
						aDo = eO.eP.aDo,
						aDI = az.b0 << 4,
						aDp = cS,
						aDq = fW.fX,
						bd = (bU - 1) * (aL.fU() % 2);
					for (aE = 0; aE < bU; aE++) {
						for (le = Math.abs(aE - bd), aDP = aCZ[le], ca = kC.eN(aDP), lZ = tQ[le] >> 3, hI = aDP % aDI, hJ = ~~((aDP + .5) / aDI), aDP = tR[le], aDm = 80 + ~~Math.sqrt(.5 + (Math.sqrt(aDP + .5) << 8)), aCY = Math.min(aDm * aDm,
								262144), aDj = -1, cV = 0; cV < 9; cV++)
							if (!((aDf = ca + aDo[cV]) < 0 || aDn <= aDf))
								for (aDh = eP[aDf], aDg = aDh.length, fV = 0; fV < aDg; fV++) aDi = aDh[fV], la = tQ[aDi] >> 3, lZ == la || aDp && aDq[lZ] === aDq[la] || (la = aCZ[aDi], (la = (dV = hI - la % aDI) * dV + (dV = hJ - ~~((la + .5) /
									aDI)) * dV) < aCY && (aDj = aDi, aCY = la)); - 1 !== aDj && (aDP = Math.min(Math.max(1, cA.cB(aDP * (aDm - Math.floor(Math.sqrt(aCY + .5))), 5 * aDm)), tR[aDj]), tR[le] -= aDP >> 4, tR[aDj] -= aDP)
					}
				}(this);
				var aE, ee, tR = (sN = this).tR,
					sN = sN.kM;
				for (aE = sN - 1; 0 <= aE; aE--) ee = tR[aE], 0 < (ee -= Math.max(1, ee >> 7)) ? tR[aE] = ee : eO.a4m.aCe(aE)
			}
		}
}

function aC8() {
	this.aDr = 32, this.hD = 0, this.hE = 0, this.eQ = 0, this.aDs = 0, this.aDt = 4, this.eP = null, this.aDo = new Int16Array(9), this.b = function() {
		this.eQ = 1 + cA.cB(az.b0 - 1, this.aDr), this.aDs = 1 + cA.cB(az.b1 - 1, this.aDr), this.eP = new Array(this.eQ * this.aDs), cM.lP.pF(this.eP);
		var hD, hE, aDo = this.aDo,
			cu = this.eQ;
		for (hD = -1; hD <= 1; hD++)
			for (hE = -1; hE <= 1; hE++) aDo[3 * (1 + hE) + 1 + hD] = hE * cu + hD
	}, this.kS = function(aDv, aE) {
		return this.eP[aE].push(aDv), this.eP[aE].length - 1
	}, this.aDe = function(aDw, aDP, aDU) {
		var aDx, aDy, aDP = kC.eN(aDP),
			aDU = kC.eN(aDU);
		return aDP === aDU ? aDw : (aDx = this.eP[aDP].pop(), this.eP[aDP].length === aDw ? this.kS(aDx, aDU) : (aDy = this.eP[aDP][aDw], this.eP[aDP][aDw] = aDx, eO.gL.aCj[aDx] = aDw, this.kS(aDy, aDU)))
	}
}

function aCD() {
	function cU(aDU, aDz) {
		if (! function(aDU, aCP) {
				var dU = kC.eM(aDU),
					aE2 = Math.abs(kC.dW(aCP) - kC.dW(dU)),
					dU = Math.abs(kC.dY(aCP) - kC.dY(dU));
				0 !== Math.max(aE2, dU) && ! function(aDP, aDU, aE2, aE3) {
					var aE5 = kC.dz(aDP),
						aDP = kC.e2(aDP),
						aE7 = kC.dz(aDU),
						aDU = kC.e2(aDU),
						aE7 = aE7 - aE5,
						aDU = aDU - aDP,
						aEB = Math.abs(aE7),
						aEC = Math.abs(aDU),
						aE7 = 0 < aE7 ? 1 : 3,
						aDU = 0 < aDU ? 2 : 0;
					aEC < aEB ? aEF(aE5, aDP, aE5 + aEB, aDP + aEC, aE7, aDU, aE2) : aEF(aDP, aE5, aDP + aEC, aE5 + aEB, aDU, aE7, aE3)
				}(aDU, kC.eL(aCP), aE2, dU)
			}(aDU, aDz), 0 === eU.aW[0]) return !!bW.s7(aDz << 2);
		if (function(aCP) {
				if (bW.s7(aCP << 2)) return 1;
				return function(aCP) {
					var aE, dd, aDO = eO.gL.aDO,
						aEJ = kC,
						bU = eU.aW[0],
						aEK = 4 * aCP;
					for (aE = bU - 1; 0 <= aE; aE--)
						if (dd = aDO[aE], aEK = aEJ.eS(aEK, dd + 2 & 3), bW.s7(aEK)) return eU.aW[0] = aE, eU.aa[1] = aEK >> 2, eU.aa[2] = 1 + dd, 1;
					return
				}(aCP)
			}(aDz)) {
			var aE, aDz = kC.eM(aDU),
				lR = zQ,
				aDO = eO.gL.aDO,
				bU = eU.aW[0] - 1,
				aEK = 4 * aDz,
				dR = kC.dR;
			for (aE = 0; aE < bU; aE++)
				if (aEK += dR[aDO[aE]], 0 !== lR[aEK + 3] || 2 !== lR[aEK + 2]) return !!void 0;
			return !!1
		}
		return !1
	}

	function aEF(aE5, aE6, aE7, aE8, aED, aEE, aE2) {
		for (var hE, aDO = eO.gL.aDO, bd = 0, aEG = 0, ez = aE8 - aE6, cu = aE7 - aE5, aEH = aE5 % 16, aE = 1; aE <= aE2; aE++) aDO[bd++] = aED, aDO[bd] = aEE, bd += (hE = (ez * (aEH + (aE << 4)) + .5) / cu >> 4) - aEG, aEG = hE;
		eU.ac(eU.aW, bd)
	}
	this.kR = function(player, aDz) {
		var dd, dU, dT = kC.df(player, aDz);
		return dT !== aDz && (dd = kC.dS(dT, aDz), dU = kC.eR(dT, dd), !(!bW.s7(dU << 2) && (dd = kC.dc(dT, aDz, dd), dU = kC.eR(dT, dd), bW.lb(dU << 2) || !bW.s7(dU << 2)) || (eU.aa[0] = dU, eU.aa[1] = aDz, eU.aa[2] = 0, !cU(kC.eL(dU), aDz)) ||
			0 !== eU.aa[2] && kC.dp(player, eU.aa[1] + kC.dQ[eU.aa[2] - 1] << 2)))
	}, this.kU = function(aDz) {
		var aDP = eO.gL.aCZ[eU.aa[3]];
		return eU.aa[1] = aDz, eU.aa[2] = 0, cU(aDP, aDz)
	}
}

function aC9() {
	var aCv = 32,
		aEM = new Array(2);

	function lF(fV) {
		var hD, hE, dg, e0, dx, dE = aCv,
			rn = cM.iL.lF(dE, dE),
			dM = cM.iL.getContext(rn, !0),
			dI = cM.iL.getImageData(dM, dE, dE),
			lR = dI.data,
			ca = (dE >> 1) - .5,
			aEN = Math.sqrt(ca * ca);
		for (lR.fill(255), hE = 0; hE < dE; hE++)
			for (hD = 0; hD < dE; hD++) dx = hD - ca, e0 = hE - ca, dg = 4 * (hE * dE + hD), dx = 714 * (aEN - Math.sqrt(dx * dx + e0 * e0)) / aEN, lR[2 + dg] = fV, lR[3 + dg] = 255 < dx ? 0 : dx;
		return dM.putImageData(dI, 0, 0), rn
	}
	this.aCW = -1, this.b = function() {
		this.aCW = -1, aEM[0] || (aEM[0] = lF(255), aEM[1] = lF(0))
	}, this.aEO = function(dM, dq, hD, hE, dO, aE) {
		kC.e8() && (dM.setTransform(dq *= 4 / 3 * .625, 0, 0, dq, hD - (dO *= 4 / 3), hE - dO), dM.drawImage(aEM[+(eO.gL.aCV[aE] === this.aCW)], 0, 0))
	}
}

function a7e() {
	var a13, a7Z, ny;

	function aES() {}

	function a7f() {
		gB.a7f(a13, a7Z)
	}

	function aEU(nz) {
		qO.aEW(a13, new Uint8Array(nz.data))
	}

	function aEV() {}

	function a7k(nz) {
		gB.a7k(a13, nz)
	}
	this.b = function(cm, aEP) {
		a13 = cm, a7Z = aEP, 0;
		cm = un[0];
		a13 < gB.a1r ? cm += gB.a7S[a13] + un[1 + a7t] : cm += gB.a7S[0] + "/i" + (1 + a7t) + (a13 - gB.a1s) + "/", (ny = new WebSocket(cm)).binaryType = "arraybuffer", ny.onopen = a7f, ny.onmessage = aEU, ny.onclose = a7k, ny.onerror = aEV
	}, this.aER = function() {
		return ny.readyState === ny.CONNECTING
	}, this.a0v = function() {
		return ny.readyState === ny.OPEN
	}, this.a7b = function() {
		return this.aER() || this.a0v()
	}, this.a7c = function(aEP) {
		a7Z = aEP
	}, this.send = function(k7) {
		this.a0v() && ny.send(k7)
	}, this.close = function(a7h) {
		this.a7b() && (ny.close(a7h), this.kk())
	}, this.kk = function() {
		ny.onopen = aES, ny.onmessage = aES, ny.onclose = aES, ny.onerror = aES
	}
}

function vx() {
	if (fY < 3) return !1;
	if (cA.cB(3 * bv[gr[2]], 2) < bv[gr[0]]) return !1;
	if (bv[gr[0]] + bv[gr[1]] + bv[gr[2]] < po - cA.cB(po, 10)) return !1;
	if (8 * Math.min(Math.min(bO[gr[0]], bO[gr[1]]), bO[gr[2]]) < 5 * Math.max(Math.max(bO[gr[0]], bO[gr[1]]), bO[gr[2]])) return !1;
	if (cS) {
		if (fW.fX[gr[0]] === fW.fX[gr[1]]) return !1;
		if (fW.fX[gr[0]] === fW.fX[gr[2]]) return !1;
		if (fW.fX[gr[1]] === fW.fX[gr[2]]) return !1
	}
	return !0
}

function a81() {
	this.dF = 501, this.nq = new Uint32Array(this.dF), this.pV = new Uint32Array(this.dF), this.z4 = new Uint16Array(this.dF), this.sg = 0, this.aEZ = 1, this.fV = 0, this.max = [0, 0, 0], this.bS = 0, this.aEa = ["Avg. Attack Strength",
		"Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs",
		"Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses"
	], this.b = function() {
		this.sg = 0, this.aEZ = 1, this.fV = 0, this.aEb(), this.aEc()
	}, this.kK = function(player, eA) {
		player === bN && (this.bS[0] += eA, this.bS[1]++, this.bS[12] += eU.aX[1], this.bS[13] += eU.aX[0])
	}, this.jo = function(player, jO) {
		donationsTracker.logDonation(player, jO, eU.aX[0]);
		player === bN && (g7.jo(eU.aX[0], eU.aX[1], jO), this.bS[12] += eU.aX[1], this.bS[16] += eU.aX[0]), jO === bN && (g7.ti(eU.aX[0], player), this.bS[10] += eU.aX[0])
	}, this.fF = function() {
		0 < this.fV-- || this.aEd()
	}, this.aEd = function() {
		0 !== e6[bN] && (this.nq[this.sg] = bv[bN], this.pV[this.sg] = bO[bN], this.z4[this.sg] = bP.z5(bN), this.aEe(this.sg), this.sg++, this.sg === this.dF && this.aEf(), this.fV = this.aEZ - 1, mZ.cp())
	}, this.aEf = function() {
		this.aEb(), this.aEe(0), this.sg = 1 + bJ(this.dF, 2);
		for (var aE = 1; aE < this.sg; aE++) this.nq[aE] = this.nq[2 * aE], this.pV[aE] = this.pV[2 * aE], this.z4[aE] = this.z4[2 * aE], this.aEe(aE);
		this.aEZ *= 2
	}, this.aEb = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.aEc = function() {
		this.bS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.aEe = function(aE) {
		this.max[0] = this.nq[aE] > this.max[0] ? this.nq[aE] : this.max[0], this.max[1] = this.pV[aE] > this.max[1] ? this.pV[aE] : this.max[1], this.max[2] = this.z4[aE] > this.max[2] ? this.z4[aE] : this.max[2]
	}
}

function a82() {
	this.cu = 0, this.ez = 0, this.mf = 0, this.mg = 0, this.zv = 0, this.zw = 0, this.ty = 0, this.tz = 0, this.a2q = 0, this.a1Y = 0, this.aEg = 0, this.aEh = 0, this.vW = 0, this.cm = 0, this.sQ = ["Territory", "Balance", "Interest", "Numbers"],
		this.oh = !1, this.aEi = -1, this.aEj = !1, this.aEk = [0, 0], this.b = function() {
			this.oh = !1, this.aEi = -1, this.aEj = !1, this.resize()
		}, this.resize = function() {
			this.cu = a1 < 1.369 * a2 ? a1 : 1.369 * a2;
			var be = a0 && a1 < a2 ? 1 : a0 ? .8 : a1 < a2 ? .65 : .59;
			this.cu = Math.floor(be * this.cu), this.cu -= a0 && a1 < a2 ? 2 * kd + 2 : 0, this.ez = Math.floor(this.cu / 1.369), this.vW = Math.floor(this.ez / 150), this.vW = Math.max(this.vW, 1.5), this.mf = Math.floor(1 + .02 * this.cu), this
				.mg = Math.floor(1 + .04 * this.cu), this.ty = this.mg, this.tz = Math.floor(1 + .075 * this.cu), this.a1Y = Math.floor(1 + .1125 * this.cu), this.aEg = Math.floor(this.cu * (a0 ? .03 : .029)), this.aEg = Math.max(this.aEg, 4), this
				.aEh = Math.floor(.035 * this.cu), this.aEh = Math.max(this.aEh, 4), this.a2q = this.ez - 2 * this.ty - this.tz - this.a1Y, this.oh && this.aEl()
		}, this.cz = function(d0, d1) {
			var lx, lw;
			return !!this.oh && (lw = d0, lx = d1, d0 -= bJ(hL - this.cu, 2), d1 -= bJ(d3 - this.ez, 2), d0 < 0 || d1 < 0 || d0 >= this.cu || d1 >= this.ez || d0 >= this.cu - this.a1Y && d1 < this.a1Y ? 1 < cK.cz(lw, lx) || this.kk() : d1 < this
				.a1Y || (d1 < this.ez - this.tz ? (this.aEj = !0, this.aEi = (d0 - 2 * this.mf - this.zv) / this.zw, 3 !== this.cm && (aL.cx = !0)) : (lw = (lw = Math.floor(d0 / (this.cu / this.sQ.length))) < 0 ? 0 : lw >= this.sQ.length ? this
					.sQ.length - 1 : lw) !== this.cm && (this.cm = lw, this.aEl(), aL.cx = !0)), !0)
		}, this.p4 = function() {
			var aEm = Math.floor((this.aEk[0] + eB) / eC),
				aEn = Math.floor((this.aEk[1] + eD) / eC);
			aEm < 1 || aEn < 1 || aEm >= az.b0 - 1 || aEn >= az.b1 - 1 || console.log(aEm + " " + aEn)
		}, this.oD = function(d0, d1) {
			return this.aEk[0] = d0, this.aEk[1] = d1, !(!this.oh || !this.aEj || (d0 -= bJ(hL - this.cu, 2), d1 = this.aEi, this.aEi = (d0 - 2 * this.mf - this.zv) / this.zw, (0 <= this.aEi && this.aEi <= 1 || 0 <= d1 && d1 <= 1) && (aL.cx = !0),
				0))
		}, this.ol = function() {
			this.aEj && (this.aEj = !1)
		}, this.p0 = function() {
			this.oh ? this.kk() : this.show()
		}, this.show = function() {
			bR.sg < 2 || (this.oh = !0, this.aEl())
		}, this.kk = function() {
			this.oh = !1, this.aEi = -1, aL.cx = !0
		}, this.aEl = function() {
			this.cm < 2 ? this.zv = cv.measureText(gR.hU(bR.max[this.cm]), this.aEg + co) : 2 === this.cm && (this.zv = cv.measureText(g9.tl(6, 2), this.aEg + co)), this.zw = this.cu - 2 * this.mf - this.zv - this.mg
		}, this.cp = function() {
			this.oh && this.aEl()
		}, this.d7 = function() {
			this.oh && this.u3()
		}, this.u3 = function() {
			var hD = bJ(hL - this.cu, 2),
				hE = bJ(d3 - this.ez, 2);
			d8.setTransform(1, 0, 0, 1, hD, hE), d8.fillStyle = dB.iR, d8.fillRect(0, this.a1Y, this.cu, this.ez - this.a1Y), this.aEo(), this.aEp(), d8.strokeRect(0, 0, this.cu, this.ez), d8.textAlign = ui, d8.font = this.aEg + co, 0 === this.cm ?
				this.aEq(bR.nq, hD, hE) : 1 === this.cm ? this.aEq(bR.pV, hD, hE) : 2 === this.cm ? this.aEr(hD, hE) : 3 === this.cm && (this.aEs(hD, hE), this.aEt(hD, hE)), cK.si(Math.floor(hD + this.cu - .725 * this.a1Y), Math.floor(hE + .275 *
					this.a1Y), Math.floor(.45 * this.a1Y)), d8.setTransform(1, 0, 0, 1, 0, 0)
		}, this.aEo = function() {
			var aE, a3;
			for (d8.lineWidth = this.vW, d8.textBaseline = d9, d8.textAlign = dA, d8.strokeStyle = dB.dC, d8.font = cn + this.aEh + co, a3 = this.cu / this.sQ.length, d8.fillStyle = dB.ii, d8.fillRect(this.cm * a3, this.ez - this.tz, a3, this.tz), d8
				.fillStyle = dB.dC, d8.fillRect(0, this.ez - this.tz - .5 * this.vW, this.cu, this.vW), aE = 1; aE <= 3; aE++) d8.fillRect(aE * a3, this.ez - this.tz, this.vW, this.tz);
			for (aE = this.sQ.length - 1; 0 <= aE; aE--) d8.fillText(this.sQ[aE], (aE + .5) * a3, this.ez - .46 * this.tz)
		}, this.aEp = function() {
			d8.fillStyle = dB.iy, d8.fillRect(0, 0, this.cu, this.a1Y), d8.fillStyle = dB.dC, d8.fillRect(0, this.a1Y - .5 * this.vW, this.cu, this.vW), d8.font = cn + Math.floor(.39 * this.a1Y) + co, d8.fillText("Statistics", Math.floor(this.cu /
				2), Math.floor(.55 * this.a1Y))
		}, this.aEq = function(ad, hD, hE) {
			var ca = bR.max[this.cm],
				ci = (d8.setTransform(1, 0, 0, 1, hD + 2 * this.mf + this.zv, hE + this.ty + this.a1Y), d8.lineWidth = 2, this.a2q / Math.sqrt(ca));
			d8.beginPath(), d8.moveTo(this.zw, this.a2q - ci * Math.sqrt(ad[bR.sg - 1]));
			for (var aE = bR.sg - 2; 0 <= aE; aE--) d8.lineTo(aE * this.zw / (bR.sg - 1), this.a2q - ci * Math.sqrt(ad[aE]));
			d8.stroke();
			hD = this.si(ad, ci, .5);
			hD < .95 && d8.fillText(gR.hU(ca), -this.mf, 0), .05 < Math.abs(hD - .5) && d8.fillText(gR.hU(Math.floor(ca / 4)), -this.mf, Math.floor(this.a2q / 2)), .05 < hD && d8.fillText("0", -this.mf, this.a2q)
		}, this.aEr = function(hD, hE) {
			d8.setTransform(1, 0, 0, 1, hD + 2 * this.mf + this.zv, hE + this.ty + this.a1Y), d8.lineWidth = 2;
			var ci = this.a2q / Math.max(bR.max[this.cm], 1);
			d8.beginPath(), d8.moveTo(this.zw, this.a2q - ci * bR.z4[bR.sg - 1]);
			for (var aE = bR.sg - 2; 0 <= aE; aE--) d8.lineTo(aE * this.zw / (bR.sg - 1), this.a2q - ci * bR.z4[aE]);
			d8.stroke();
			hD = this.si(bR.z4, ci, 1), hE = bR.max[this.cm] / 100;
			hD < .95 && d8.fillText(g9.tl(hE, 2), -this.mf, 0), .05 < Math.abs(hD - .5) && d8.fillText(g9.tl(hE / 2, 2), -this.mf, Math.floor(this.a2q / 2)), .05 < hD && d8.fillText(g9.tl(0, 2), -this.mf, this.a2q)
		}, this.aEs = function(hD, hE) {
			d8.setTransform(1, 0, 0, 1, hD + .34 * this.cu, hE + 2 * this.ty + this.a1Y), d8.textAlign = ui;
			for (var yU = this.ez - 4 * this.ty - this.tz - this.a1Y, aE = 7; 0 <= aE; aE--) d8.fillText(bR.aEa[aE], 0, aE * yU / 7);
			d8.setTransform(1, 0, 0, 1, hD + .39 * this.cu, hE + 2 * this.ty + this.a1Y), d8.textAlign = tG;
			hD = bR.bS[1];
			for (d8.fillText(g9.tl(bR.bS[0] / (10 * (hD < 1 ? 1 : hD)), 1), 0, 0), aE = 6; 1 <= aE; aE--) d8.fillText(bR.bS[aE].toString(), 0, aE * yU / 7);
			d8.fillText(g9.tl(100 * (1 - bv[bN] / bR.bS[7]), 0), 0, yU)
		}, this.aEt = function(hD, hE) {
			d8.setTransform(1, 0, 0, 1, hD + .79 * this.cu, hE + 2 * this.ty + this.a1Y), d8.textAlign = ui;
			var aE, yU = this.ez - 4 * this.ty - this.tz - this.a1Y;
			for (d8.fillStyle = dB.ic, aE = 2; 0 <= aE; aE--) d8.fillText(bR.aEa[aE + 8], 0, aE * yU / 9);
			for (d8.fillStyle = dB.ib, d8.fillText(bR.aEa[11], 0, 3 * yU / 9), d8.fillStyle = dB.ir, aE = 8; 4 <= aE; aE--) d8.fillText(bR.aEa[aE + 8], 0, aE * yU / 9);
			d8.fillStyle = dB.iq, d8.fillText(bR.aEa[17], 0, 9 * yU / 9), d8.fillStyle = dB.ic;
			var tO = gR.hU(bR.bS[8] + bR.bS[9] + bR.bS[10] + bR.bS[11]),
				aEu = d8.measureText(tO).width,
				hD = (d8.setTransform(1, 0, 0, 1, hD + .83 * this.cu + aEu, hE + 2 * this.ty + this.a1Y), d8.fillText(gR.hU(bR.bS[8]), 0, 0), d8.fillText(gR.hU(bR.bS[9]), 0, yU / 9), d8.fillText(gR.hU(bR.bS[10]), 0, 2 * yU / 9), d8.fillStyle = dB.ib,
					d8.fillText(tO, 0, 3 * yU / 9), d8.fillStyle = dB.ir, bR.bS[13] - b5.a5j(bN)),
				aEu = (d8.fillText(gR.hU(bR.bS[12]), 0, 4 * yU / 9), d8.fillText(gR.hU(hD), 0, 5 * yU / 9), d8.fillText(gR.hU(bR.bS[14]), 0, 6 * yU / 9), d8.fillText(gR.hU(bR.bS[15]), 0, 7 * yU / 9), d8.fillText(gR.hU(bR.bS[16]), 0, 8 * yU / 9), bR
					.bS[12] + hD + bR.bS[14] + bR.bS[15] + bR.bS[16] + bR.bS[17]);
			d8.fillStyle = dB.iq, d8.fillText(gR.hU(aEu), 0, yU), d8.fillStyle = dB.dC
		}, this.si = function(ad, ci, xC) {
			var aE, nz, ae;
			return this.aEi < 0 || 1 < this.aEi ? .25 : (aE = this.aEi * (bR.sg - 1), ae = ad[nz = Math.floor(aE)], ae += (aE - nz) * (ad[nz < bR.sg - 1 ? nz + 1 : nz] - ae), d8.strokeStyle = dB.iV, .04 < this.aEi && this.aEx(0, this.a2q - ci * Math
					.pow(ae, xC), aE * this.zw / (bR.sg - 1), this.a2q - ci * Math.pow(ae, xC)), .04 < ae / bR.max[this.cm] && this.aEx(aE * this.zw / (bR.sg - 1), this.a2q, aE * this.zw / (bR.sg - 1), this.a2q - ci * Math.pow(ae, xC)), d8
				.fillStyle = dB.it, d8.beginPath(), d8.arc(aE * this.zw / (bR.sg - 1), this.a2q - ci * Math.pow(ae, xC), Math.max(2, .014 * this.ez), 0, 2 * Math.PI), d8.fill(), ad = this.aEi * aL.z6, ad = 0 === e6[bN] ? Math.floor(ad * gZ.zD) :
				Math.floor(ad * aL.fU()), d8.fillStyle = dB.dC, d8.fillText(1 === xC ? g9.tl(ae / 100, 2) : gR.hU(Math.floor(ae)), -this.mf, this.a2q - ci * Math.pow(ae, xC)), d8.textAlign = dA, d8.fillText(g9.xo(ad), aE * this.zw / (bR.sg - 1),
					this.a2q + this.aEg - (a0 ? 2 : 0) - this.vW), d8.textAlign = ui, ci * Math.pow(ae, xC) / this.a2q)
		}, this.aEx = function(hI, hJ, hK, hM) {
			d8.beginPath(), d8.moveTo(hI, hJ), d8.lineTo(hK, hM), d8.stroke()
		}
}

function qY() {
	this.aEy = "https://", this.aEz = this.aEy + "territorial.io/", this.aAJ = this.aEz + "changelog", this.aAK = this.aEz + "terms", this.u2 = this.aEz + "cookie_policy", this.a7x = this.aEz + "privacy_policy", this.aAG = this.aEz + "tutorial", this
		.aAH = this.aEz + "players", this.aAI = this.aEz + "clans", this.a0D = this.aEy + "play.google.com/store/apps/details?id=territorial.io", this.a0E = this.aEy + "apps.apple.com/app/id1581110913", this.a0F = this.aEy +
		"www.youtube.com/watch?v=toZTQ8aRdFc", this.a0G = this.aEy + "discord.gg/pthqvpTXmh", this.a0H = this.aEy + "www.instagram.com/davidtschacher/"
}

function rY() {
	this.gL = new aF0, this.mW = new aF1, this.b = function() {
		this.gL.b()
	}, this.fF = function() {
		0 !== this.gL.u5 && this.gL.u5--
	}
}

function aF1() {
	this.d7 = function() {
		if (0 !== gP.gL.u5 && (d8.globalAlpha = Math.min(gP.gL.u5 / 580, 1), d8.drawImage(gP.gL.aF4, 1 + hv.hN(), 1 + hv.d6()), d8.globalAlpha = 1, hr)) {
			var aE, hI = eB / eC,
				hJ = eD / eC,
				hK = (hL + eB) / eC,
				hM = (d3 + eD) / eC,
				bd = gP.gL.aF5 * eC,
				aF6 = gP.gL.aF6;
			for (aE = e5 - 1; 0 <= aE; aE--) ! function(aE, bd, hI, hJ, hK, hM, aF6) {
				0 === e6[aE] || 0 === bv[aE] || (hK = hL * ((f3[aE] + f2[aE] + 1) / 2 - hI) / (hK - hI) - .5 * bd, hI = d3 * ((f6[aE] + f5[aE] + 1) / 2 - hJ) / (hM - hJ) - .5 * bd, hL < hK) || d3 < hI || hK < -bd || hI < -bd || (d8
					.setTransform(eC, 0, 0, eC, hK, hI), d8.drawImage(aF6[cS ? fW.fX[aE] : 1], 0, 0))
			}(aE, bd, hI, hJ, hK, hM, aF6);
			d8.setTransform(eC, 0, 0, eC, 0, 0)
		}
	}
}

function aF0() {
	this.aF5 = 28, this.u5 = 0, this.aF4 = null;
	var aF8 = this.aF6 = null;

	function aFB(dE, aFD) {
		var hD, hE, dg, dx, rn = cM.iL.lF(dE, dE),
			dM = cM.iL.getContext(rn, !0),
			dI = cM.iL.getImageData(dM, dE, dE),
			lR = dI.data,
			ca = (dE >> 1) - .5,
			aFE = .5 + ca;
		for (aFE *= aFE, hE = 0; hE < dE; hE++)
			for (hD = 0; hD < dE; hD++) dx = (dx = hD - ca) * dx + (dx = hE - ca) * dx, lR[dg = 4 * (hE * dE + hD)] = aFD[0], lR[1 + dg] = aFD[1], lR[2 + dg] = aFD[2], lR[3 + dg] = (aFE - dx) * aFD[3] / aFE;
		return dM.putImageData(dI, 0, 0), rn
	}

	function aEO(aE, dM, rn, dE) {
		var hD;
		0 !== e6[aE] && 0 !== bv[aE] && (hD = f3[aE] + f2[aE] + 1 - dE - 2 >> 1, dE = f6[aE] + f5[aE] + 1 - dE - 2 >> 1, dM.drawImage(rn[cS ? fW.fX[aE] : aE < e5 ? 1 : 0], hD, dE))
	}
	this.b = function() {
		var sN;
		this.u5 = 700,
			function(sN) {
				var aE, dE = sN.aF5;
				if (sN.aF6 = [], aF8 = [], cS)
					for (aE = 0; aE <= pr; aE++) sN.aF6.push(aFB(dE, fW.aFC[fW.ng[aE]])), aF8.push(aFB(dE >> 1, fW.aFC[fW.ng[aE]]));
				else sN.aF6.push(aFB(dE, fW.aFC[0])), sN.aF6.push(aFB(dE, fW.aFC[4])), aF8.push(aFB(dE >> 1, fW.aFC[0]))
			}(this),
			function(sN, aFF) {
				var aE, aF4 = sN.aF4,
					dM = cM.iL.getContext(aF4, !0),
					bU = bZ,
					dE = sN.aF5 >> 1;
				dM.imageSmoothingEnabled = !1, dM.setTransform(1, 0, 0, 1, 0, 0), aFF && dM.clearRect(0, 0, aF4.width, aF4.height);
				for (aE = e5; aE < bU; aE++) aEO(aE, dM, aF8, dE)
			}(this, null !== (sN = this).aF4 && sN.aF4.width === az.b0 - 2 && sN.aF4.height === az.b1 - 2 || (sN.aF4 = cM.iL.lF(az.b0 - 2, az.b1 - 2), !1))
	}, this.pl = function() {
		for (var bU = e5, dE = this.aF5, aF6 = this.aF6, dM = cM.iL.getContext(this.aF4, !0), aE = 0; aE < bU; aE++) aEO(aE, dM, aF6, dE)
	}
}

function rZ() {
	this.aFG = -1, this.b = function() {
		this.aFG = -1
	}, this.fF = function() {
		-1 !== this.aFG && gC.nH.nP(this.aFG)
	}, this.ji = function(player) {
		return !!cK.sf(player) && (1 === fY ? (this.aFG = player, fx && hr && kF.fF()) : (g7.nN(player, player === bN ? 21 : 22), 8 === fv ? this.aFG = 1 - player : fx ? (a4i(player), a7m(), hr && kF.fF()) : this.aFH(player)), !0)
	}, this.kB = function(player) {
		1 === gg && 0 !== e6[player] && 2 !== e7[player] && (8 === fv ? this.aFG = 1 - player : this.aFH(player)), g7.nN(player, 4)
	}, this.aFH = function(player) {
		hr ? (a4i(player), a7m()) : gI.a7O(player)
	}
}

function a84() {
	this.a2P = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.yT = [dB
		.dC, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", dB.dC, "rgb(170,170,170)"
	], this.aFI = [dB.dC, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", dB.dC, dB.hP], this.aFJ = [dB.hP, dB.dC, dB.dC, dB.dC, dB.hP, dB.hP, dB.hP, dB.hP, dB.dC];
	var aFK = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aFL = (this.a6s = ["rgba(" + aFK[0] + ",", "rgba(" + aFK[1] + ",", "rgba(" + aFK[2] + ",", "rgba(" + aFK[3] + ",", "rgba(" + aFK[4] + ",", "rgba(" + aFK[5] + ",", "rgba(" + aFK[6] + ",", "rgba(" + aFK[7] + ",", "rgba(" + aFK[8] + ",",
			"rgba(" + aFK[9] + ","
		], this.a6t = ["rgb(" + aFK[0] + ")", "rgb(" + aFK[1] + ")", "rgb(" + aFK[2] + ")", "rgb(" + aFK[3] + ")", "rgb(" + aFK[4] + ")", "rgb(" + aFK[5] + ")", "rgb(" + aFK[6] + ")", "rgb(" + aFK[7] + ")", "rgb(" + aFK[8] + ")", "rgb(" + aFK[
			9] + ")"
		], this.cj = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.aFC = [
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
		]),
		aFM = (this.ng = [0, 1, 2, 3, 4, 5, 6, 7, 8], 7),
		l9 = "[",
		lA = "]";
	this.fX = new Uint8Array(bZ), this.no = null, this.np = null, this.b = function(mj) {
		this.fX.fill(0), this.aFN(), cS && (fr.fs && fr.ft.a5R ? this.a45() : 9 === fv ? this.aFO() : this.fF(mj))
	}, this.a45 = function() {
		var aE, bU = ly;
		for (this.ng = [0, 1, 2, 3, 4, 5, 6, 7, 8], aE = 0; aE < bU; aE++) this.fX[aE] = fr.ft.a5R[aE]
	}, this.aFN = function() {
		for (var aE = this.ng.length - 1; 0 <= aE; aE--) this.ng[aE] = aE;
		this.no = [], this.np = []
	}, this.aFO = function() {
		for (var aE = e5 + g1.a7F - 1; 0 <= aE; aE--) this.fX[aE] = 1;
		for (aE = e5 + g1.a7F; aE < bZ; aE++) this.fX[aE] = 2;
		this.ng[1] = 7, this.ng[2] = 8
	}, this.fF = function(mj) {
		var dZ = new Uint8Array(e5),
			da = new Uint8Array(e5),
			aFP = new Uint16Array(8),
			aFQ = new Uint16Array(this.ng.length);
		this.aFR(mj, dZ, da, aFP), this.a43(aFP), fx || this.aFS(aFQ, dZ, da), this.aFT(dZ, da, aFQ), fx ? this.aFU() : this.aFV()
	}, this.aFR = function(mj, dZ, da, aFW) {
		for (var cV, nz, aFX, bU = this.ng.length - 1, ad = new Uint16Array(bU), aE = e5 - 1; 0 <= aE; aE--) {
			for (cV = bU; 1 <= cV; cV--) ad[cV - 1] = Math.abs(4 * mj[aE].a34[0] - aFL[cV][0]) + Math.abs(4 * mj[aE].a34[1] - aFL[cV][1]) + Math.abs(4 * mj[aE].a34[2] - aFL[cV][2]);
			for (aFX = 768, cV = bU - 1; 0 <= cV; cV--) ad[nz = (cV + aE) % bU] < aFX && (aFX = ad[nz], dZ[aE] = nz);
			for (aFW[dZ[aE]] += 4, aFX = 768, cV = bU - 1; 0 <= cV; cV--) ad[nz = (cV + aE) % bU] < aFX && nz !== dZ[aE] && (aFX = ad[nz], da[aE] = nz);
			aFW[da[aE]]++
		}
	}, this.a43 = function(aFW) {
		for (var cV, rl, bU = this.ng.length - 1, aE = bU; 0 <= aE; aE--) this.ng[aE] = aE;
		for (aE = bU - 1; 0 <= aE; aE--) aFW[aE]++;
		for (aE = 1; aE <= bU; aE++) {
			for (rl = 0, cV = 1; cV < bU; cV++) aFW[cV] > aFW[rl] && (rl = cV);
			aFW[rl] = 0, this.ng[aE] = rl + 1
		}
	}, this.aFS = function(aFQ, dZ, da) {
		var aE, cV, aFY, fV, be, nz, i4, pN, aFZ = this.ng.length - 1,
			aFa = new Uint16Array(aFZ),
			aFb = [];
		loop: for (aE = e5 - 1; 0 <= aE; aE--)
			if (null !== (aFY = function(aE) {
					var aDJ, aD7;
					return (aDJ = tv[aE].indexOf(l9)) < 0 || !(1 < (aD7 = tv[aE].indexOf(lA)) - aDJ && aD7 - aDJ <= aFM + 1) ? null : tv[aE].substring(aDJ + 1, aD7).toUpperCase().trim()
				}(aE))) {
				for (cV = this.no.length - 1; 0 <= cV; cV--)
					if (aFY === this.no[cV]) {
						this.np[cV].push(aE);
						continue loop
					} this.no.push(aFY), aFb.push(!1), this.np.push([]), this.np[this.no.length - 1].push(aE)
			}
		for (cV = this.no.length - 1; 0 <= cV; cV--) {
			for (be = -1, fV = this.no.length - 1; 0 <= fV; fV--) !aFb[fV] && (-1 === be || this.np[fV].length > this.np[be].length) && (be = fV);
			for (fV = aFZ - 1; 0 <= fV; fV--) aFa[fV] = 1;
			for (fV = this.np[be].length - 1; 0 <= fV; fV--) aFa[dZ[this.np[be][fV]]] += 3, aFa[da[this.np[be][fV]]]++;
			for (aE = aFZ - 1; 0 <= aE; aE--) {
				for (nz = be % aFZ, fV = aFZ - 1; 0 <= fV; fV--) aFa[fV] > aFa[nz] && (nz = fV);
				for (i4 = -1, fV = pr; 0 < fV; fV--)
					if (this.ng[fV] === nz + 1) {
						i4 = fV;
						break
					} if (aFa[nz] = 0, -1 !== i4) {
					for (pN = 0, fV = pr; 0 < fV; fV--) aFQ[i4] > aFQ[fV] && pN++;
					if (pN !== pr - 1) {
						for (fV = this.np[be].length - 1; 0 <= fV; fV--) aFQ[i4]++, this.fX[this.np[be][fV]] = i4;
						break
					}
				}
			}
			aFb[be] = !0
		}
	}, this.aFT = function(dZ, da, aFQ) {
		for (var aE, dw, bU = this.ng.length - 1, border = bJ(e5, pr), aFd = (0 < e5 % pr && border++, new Uint8Array(1 + bU)), cV = bU; 1 <= cV; cV--) aFd[this.ng[cV]] = cV;
		for (aE = 0; aE < e5; aE++) dw = aFd[dZ[aE] + 1], 0 === this.fX[aE] && dw <= pr && aFQ[dw] < border && (aFQ[dw]++, this.fX[aE] = dw);
		for (aE = 0; aE < e5; aE++) dw = aFd[da[aE] + 1], 0 === this.fX[aE] && dw <= pr && aFQ[dw] < border && (aFQ[dw]++, this.fX[aE] = dw);
		for (cV = pr; 1 <= cV; cV--)
			for (aE = e5 - 1; 0 <= aE && !(aFQ[cV] >= border); aE--) 0 === this.fX[aE] && (aFQ[cV]++, this.fX[aE] = cV)
	}, this.aFU = function() {
		var aE, ej, aFW = new Uint16Array(pr);
		for (aFW[pr - 1] = bZ, aE = pr - 2; 0 <= aE; aE--) aFW[aE] = fy.fz[aE].tc;
		for (aFW[0]--, ej = 0 === aFW[0] ? 1 : 0, aE = e5; aE < bZ; aE++) this.fX[aE] = ej + 1, aFW[ej]--, aFW[ej] <= 0 && ej++
	}, this.aFV = function() {
		for (var aE = e5; aE < bZ; aE++) this.fX[aE] = 1 + aE % pr
	}
}

function bw() {
	for (var hD, hE, aE = aq - 1; 0 <= aE; aE--) hD = bJ(as[aE], 4) % az.b0, hE = bJ(as[aE], 4 * az.b0), f3[am] = f3[am] > hD ? hD : f3[am], f6[am] = f6[am] > hE ? hE : f6[am], f2[am] = f2[am] < hD ? hD : f2[am], f5[am] = f5[am] < hE ? hE : f5[am]
}

function bA() {
	var be, bc, aE, bU = bV[am].length;
	loop: for (aE = bU - 1; 0 <= aE; aE--) {
		for (be = 3; 0 <= be; be--)
			if (bc = bV[am][aE] + av[be], bW.bh(bc) || bW.bf(bc) && bW.bg(bc) !== am) {
				bW.eh(bV[am][aE], am);
				continue loop
			} bV[am][aE] = bV[am][bU - 1], bV[am].pop(), bU--
	}
}

function bB() {
	var be, bc, aFe, aFf, bU = bn[am].length;
	loop: for (var aE = bU - 1; 0 <= aE; aE--) {
		for (aFe = aFf = !1, be = 3; 0 <= be; be--) {
			if (bc = bn[am][aE] + av[be], bW.a4F(bc, am)) continue loop;
			aFe = aFe || bW.s7(bc), aFf = aFf || bW.lb(bc)
		}
		aFe ? bo[am].push(bn[am][aE]) : aFf ? br[am].push(bn[am][aE]) : bW.mI(bn[am][aE], am), bn[am][aE] = bn[am][bU - 1], bn[am].pop(), bU--
	}
}

function bl() {
	bv[ap] -= aq
}

function bm(border) {
	for (var bU = border.length, aE = bU - 1; 0 <= aE; aE--) bW.mQ(ap, border[aE]) || (border[aE] = border[bU - 1], border.pop(), bU--)
}

function bp(border) {
	for (var bU = border.length, aE = bU - 1; 0 <= aE; aE--) !bW.mQ(ap, border[aE]) && bW.bX(border[aE]) && (border[aE] = border[bU - 1], border.pop(), bU--)
}

function bq(border) {
	for (var be, bc, bU = border.length, aE = bU - 1; 0 <= aE; aE--)
		for (be = 3; 0 <= be; be--)
			if (bc = border[aE] + av[be], bW.a4F(bc, ap)) {
				bn[ap].push(border[aE]), border[aE] = border[bU - 1], border.pop(), bU--;
				break
			}
}

function bs() {
	for (var be, bc, aE = aq - 1; 0 <= aE; aE--)
		for (be = 3; 0 <= be; be--) bc = as[aE] + av[be], bW.a4G(ap, bc) && bW.a4H(bc) && (bn[ap].push(bc), bW.bY(bc, ap))
}

function bt() {
	var hD, hE;
	loop: for (; f6[ap] < f5[ap];) {
		for (hD = f2[ap]; hD >= f3[ap]; hD--)
			if (bW.mQ(ap, 4 * (f6[ap] * az.b0 + hD))) break loop;
		f6[ap]++
	}
	loop: for (; f6[ap] < f5[ap];) {
		for (hD = f2[ap]; hD >= f3[ap]; hD--)
			if (bW.mQ(ap, 4 * (f5[ap] * az.b0 + hD))) break loop;
		f5[ap]--
	}
	loop: for (; f3[ap] < f2[ap];) {
		for (hE = f5[ap]; hE >= f6[ap]; hE--)
			if (bW.mQ(ap, 4 * (hE * az.b0 + f3[ap]))) break loop;
		f3[ap]++
	}
	loop: for (; f3[ap] < f2[ap];) {
		for (hE = f5[ap]; hE >= f6[ap]; hE--)
			if (bW.mQ(ap, 4 * (hE * az.b0 + f2[ap]))) break loop;
		f2[ap]--
	}
}

function eo(player, ed) {
	return 0 === fW.fX[player] || fW.fX[player] !== fW.fX[ed]
}

function s9(player, ed) {
	for (var nz, aFg = b5.b6(player), aE = 0; aE < aFg; aE++)
		if (0 === b5.b7(player, aE))
			if ((nz = b5.bC(player, aE)) === bZ) {
				if (ed === bZ) return !1;
				if (s8(ed)) return !0
			} else if (ed === bZ) {
		if (s8(nz)) return !0
	} else if (sD(ed, nz)) return !0;
	return !1
}

function s8(player) {
	for (var aE, bd, bU = bn[player].length, be = 3; 0 <= be; be--)
		for (bd = av[be], aE = 0; aE < bU; aE++)
			if (bW.bh(bn[player][aE] + bd)) return !0;
	return !1
}

function sD(pS, pT) {
	var aE, a3, be, bd, bc, aBT = bn[pS].length,
		aDQ = bn[pT].length;
	for (aDQ < aBT && (a3 = pS, pS = pT, pT = a3, a3 = aBT, aBT = aDQ, 0), be = 3; 0 <= be; be--)
		for (bd = av[be], aE = 0; aE < aBT; aE++)
			if (bc = bn[pS][aE] + bd, bW.bf(bc) && bW.bg(bc) === pT) return !0;
	return !1
}

function aFh() {
	this.fF = function() {
		qH.fF(), qJ.fF(), p9.fF(), gB.fF(), gc.a1t(), d5.fF(), aL.cx && (aL.cx = !1, aT.d7())
	}
}

function aFi() {
	this.aM = aL.aM, this.cm = 0, this.aFj = 0, this.a1q = 0, this.aFk = null, this.aFl = 7, this.u6 = 0, this.b = function() {
		this.a1q = 0, this.aFk = [], this.cm = 0, this.aFj = 0
	}, this.aFm = function(k7) {
		var aE;
		if (hr) this.z7(k7);
		else if (this.aFk.push(k7), 2 === gg) {
			for (aE = 0; aE < this.aFk.length; aE++) cc.jF.fF(this.aFk[aE]);
			this.aFk = []
		}
	}, this.z7 = function(k7) {
		cc.jF.fF(k7), gW.fF(), g9.z7(this.a1q), this.a1q === ps ? (kF.fF(), this.a1q = 0, this.cm = 0, this.aFj = 0, this.aM = aL.aM) : (this.a1q++, g8.pk(), g8.gf(!0), iI.zO())
	}, this.fF = function() {
		p9.fF(), hr ? (aL.cx = g9.z7(-1) || aL.cx, gh()) : (0 !== this.cm || aL.aM >= this.aM && (this.aM += aL.z6 * Math.floor(1 + (aL.aM - this.aM) / aL.z6), 2 === gg ? g6() : this.aFn(), this.cm++, 27 < aL.aM - this.u6)) && this.aFo(), gX(),
			aL.cx && (aL.cx = !1, mT()), this.u6 = aL.aM
	}, this.aFo = function() {
		aL.cx = !0, ge(), this.cm = 0
	}, this.aFn = function() {
		var aFp, aE;
		if (this.aFj !== 7 * this.a1q) gF(), iI.zO();
		else {
			for (aFp = !1; this.aFq() && (aFp = !0, gF(), 0 < this.aFk.length);)
				for (aE = this.aFl - 2; 0 <= aE; aE--) gF();
			aFp ? iI.zO() : (g6(), iI.pn())
		}
	}, this.aFq = function() {
		return 0 < this.aFk.length && (this.a1q++, cc.jF.fF(this.aFk[0]), this.aFk.shift(), !0)
	}
}

function aFr() {
	var aFs, aFt, aFu, a1q, aFv, cm = 0,
		aM = aL.aM;

	function aFy() {
		! function() {
			if (!hr) return;
			if (fx) return;
			return aFv % 7 != 0 ? aFv++ : a1q === ps ? (aG1(), g9.z7(a1q), kF.fF()) : (aG1(), aFv++, a1q++, g8.pk(), g8.gf(!0)), 1
		}() && (aG1(), gF())
	}

	function aFz() {
		cm = 0, (hr ? (aL.cx = g9.z7(a1q - (aFv % 7 == 0 ? 0 : 1) + aFv % 7 / 7) || aL.cx, gh) : cK.cL || !gb.sV ? gh : (aL.cx = !0, ge))()
	}

	function aG1() {
		var aE, bU, aG2 = gW.kD.aAu,
			ae = gW.kD.aAv,
			ag = gW.kD.aAw,
			ai = gW.kD.aAx,
			aG3 = gW.kD.aAy,
			aG4 = gW.kD.aAz;
		if (aFs >= aG4.length) g7.tM("Replay Error"), gC.nH.nP(-1);
		else if (aG4 = aG4[aFs], aG3[aFs]) {
			for (bU = aFt + aG4, aE = aFt; aE < bU; aE++) cc.jF.kA(aG2[aE], ae[aE], ag[aE], ai[aE]);
			aFt += aG4, aFs++
		} else ++aFu >= aG4 && (aFs++, aFu = 0)
	}
	this.aFj = 0, this.b = function() {
		aFv = a1q = aFu = aFt = aFs = 0
	}, this.fF = function() {
		var aDn;
		p9.fF(), gb.wL() < 1.7 ? 0 === cm ? aL.aM >= aM && (aDn = aL.z6 / gb.wL(), aM += aDn * Math.floor(1 + (aL.aM - aM) / aDn), 2 === gg || cK.cL || !gb.sV ? g6() : (aFy(), iI.zO()), cm++) : aFz() : function() {
			var aDn;
			if (aL.aM >= aM)
				if (2 === gg || cK.cL || !gb.sV) g6(), aM = aL.aM;
				else {
					for (aDn = aL.z6 / gb.wL(), 16 < (aL.aM - aM) / aDn && (aM = aL.aM - 16 * aDn); aL.aM >= aM && 2 !== gg;) aM += aDn, aFy();
					iI.zO()
				} aFz()
		}(), gX(), aL.cx && (aL.cx = !1, mT())
	}
}

function aG5() {
	var cm = 0,
		aM = aL.aM;
	this.aFj = 0, this.fF = function() {
		p9.fF(), hr ? gh() : 0 === cm ? aL.aM >= aM && (aM += aL.z6 * Math.floor(1 + (aL.aM - aM) / aL.z6), 2 === gg || cK.cL ? g6() : (gF(), iI.zO()), cm++) : ((cK.cL ? gh : (aL.cx = !0, ge))(), cm = 0), gX(), aL.cx && (aL.cx = !1, mT())
	}
}

function a83() {
	function aG8() {
		aL.aM = performance.now(), aL.aG6.fF(), window.requestAnimationFrame(aG8)
	}

	function aG9() {
		var a3 = performance.now();
		aL.aM + 1500 < a3 && (aL.aM = a3, aL.aG6.fF())
	}
	this.aG6 = null, this.cx = !1, this.aM = 0, this.aG7 = -1, this.z6 = 56, this.b = function() {
		this.qF(), window.requestAnimationFrame(aG8), this.aM = performance.now()
	}, this.qB = function() {
		cJ ? (this.aG6 = new aFr, this.aG6.b()) : fx ? this.aG6 = new aG5 : (this.aG6 = new aFi, this.aG6.b())
	}, this.qF = function() {
		this.aG6 = new aFh, this.cx = !0
	}, this.p5 = function() {
		1 !== gg || !fx || cK.cL || hr || cK.p0(), -1 === this.aG7 && (this.aG7 = setInterval(aG9, 2e3))
	}, this.p6 = function() {
		this.cx = !0, -1 !== this.aG7 && (clearInterval(this.aG7), this.aG7 = -1)
	}, this.fF = function() {
		this.aG6.aFj++
	}, this.fU = function() {
		return this.aG6.aFj
	}
}

function rL() {
	var hi = 0,
		aGA = !0;

	function aGC(v) {
		8 !== aT.ov() || 2 !== e7[bN] && (0 !== e6[bN] || hr) || g7.tW(v)
	}
	this.fF = function() {
		var a3, u9;
		aL.aM > hi && (hi = aL.aM + 2500, a3 = new Date, u9 = a3.getUTCSeconds(), aGA ? u9 < 45 && (aGA = !1) : u9 < 45 || -1 !== aL.aG7 || (aGA = !0, (u9 = a3.getUTCMinutes() + 1) % 15 == 0 && aGC(30 === u9 ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function r9() {
	var hI, hJ, hK, hM, aGD = 0,
		aGE = 0;

	function aGG() {
		return Math.pow(Math.pow(hK - hI, 2) + Math.pow(hM - hJ, 2), .5)
	}

	function aGF(nz) {
		hI = kn * nz.touches[0].clientX, hJ = kn * nz.touches[0].clientY, hK = kn * nz.touches[1].clientX, hM = kn * nz.touches[1].clientY
	}
	this.oH = function(nz) {
		return 1 < nz.touches.length ? (aGE = aL.aM, aGD = 3, aGF(nz), mY.kk(), !0) : (aGD = 0, !1)
	}, this.oI = function(nz) {
		var a8l, du, dv;
		return 0 !== gg && 1 < nz.touches.length && (aGD = Math.max(aGD - 1, 0), gY.iA() && (a8l = aGG(), aGF(nz), nz = aGG(), du = Math.floor((hI + hK) / 2), dv = Math.floor((hJ + hM) / 2), hv.wv(du, dv, Math.max(.125, nz) / Math.max(.125,
			a8l)), aL.cx = !0), !0)
	}, this.oo = function() {
		var hD, hE;
		return !!(aGD && (aGD = 0, aL.aM < aGE + 500)) && (hD = (hI + hK) / 2, hE = (hJ + hM) / 2, mY.oe(hD, hE), mY.click(hD, hE, !0) && (aL.cx = !0), !0)
	}
}

function rA() {
	var dF, el;

	function aGP(aGh, k7) {
		for (var ad = new Array(aGh), aE = 0; aE < aGh; aE++) ad[aE] = aGI(k7, 10);
		return w.l8(ad)
	}

	function aGI(lP, bU) {
		for (var uB = 0, aE = el; aE < el + bU; aE++) uB |= (lP[bJ(aE, 8)] >> 7 - aE % 8 & 1) << el + bU - aE - 1;
		return el += bU, uB
	}
	this.aEW = function(a13, k7) {
		var aGH;
		(el = 0) === (dF = k7.length) ? gB.a7i(a13, 3205): 0 === (aGH = aGI(k7, 1)) ? function(a13, k7) {
			var aGL = aGI(k7, 2);
			0 === aGL ? (0 === aGI(k7, 1) ? function(a13, k7) {
				var aE;
				if (0 === a13 && 8 !== aT.ov() && !(dF < 4)) {
					zr.cl(0, aGP(aGI(k7, 5), k7)), zr.cl(1, "[" + aGP(aGI(k7, 3), k7) + "]");
					var aGQ = aGI(k7, 12),
						aGR = aGI(k7, 6),
						ad = new Array(aGQ);
					for (aE = 0; aE < aGQ; aE++) ad[aE] = aGI(k7, aGR);
					oj.xM(ad)
				}
			} : function(a13, k7) {
				var aE;
				if (8 !== aT.ov())
					if (dF < 3) gB.a7i(a13, 3208);
					else {
						var aGS, mn, a13 = aGI(k7, 1),
							position = aGI(k7, 16),
							uB = aGI(k7, 4),
							ad = [];
						for (aE = 0; aE < uB; aE++) mn = aGI(k7, 14), aGS = aGI(k7, 5), aGS = aGP(aGS, k7), ad.push({
							name: aGS,
							mn: mn
						});
						0 === a13 ? d5.zk(0, ad, 10, 1, .36, .55, position) : d5.zk(1, ad, 100, 2, .47, .5, position)
					}
			})(a13, k7) : 1 === aGL ? function(a13, k7) {
				var aE, ej, a2c, no, aGT, aGU;
				if (a13 !== gB.a1d) gB.close(a13, 3239);
				else if (6 === aT.ov() && qP.b(), 7 !== aT.ov()) gB.close(a13, 3251);
				else {
					var a2B = [0, 0, 0, 0],
						aGV = aGI(k7, 6);
					for (aE = 0; aE < 4; aE++) a2B[aE] = aGI(k7, aGV);
					var aGW = aGI(k7, 4),
						aGX = [];
					for (aE = 0; aE < aGW; aE++) {
						for (aGX.push({
								id: aGI(k7, 5),
								pw: aGI(k7, 4),
								a2X: 1 === aGI(k7, 1),
								ll: aGI(k7, 6),
								a2V: aGI(k7, 14),
								a2a: aGI(k7, aGV),
								a2b: aGI(k7, 9) + 1,
								a1C: aGI(k7, 10)
							}), a2c = aGI(k7, 3), no = new Array(a2c), ej = 0; ej < a2c; ej++) aGT = aGI(k7, 9) + 1, aGU = aGP(aGI(k7, 3), k7), no[ej] = ("" === aGU ? "other: " : "[" + aGU + "]: ") + aGT;
						aGX[aE].a2c = a2c, aGX[aE].no = no
					}
					qP.zs(a2B, aGX)
				}
			}(a13, k7) : 2 !== aGL && 3 !== aGL || gc.b(k7)
		}(a13, k7) : 1 === aGH && function(a13, k7) {
			var pO = aT.ov();
			8 !== pO ? 10 === pO && gB.a7i(a13, 3243) : a13 !== gB.oV ? gB.a7i(a13, 3244) : 0 === aGI(k7, 1) ? aL.aG6.aFm(k7) : function(k7) {
				var aGd = aGI(k7, 2);
				(0 === aGd ? function(k7) {
					var tS;
					3 !== dF ? gB.a7i(gB.oV, 3230) : (tS = aGI(k7, 9), k7 = aGI(k7, 7), 0 !== e6[tS] && 0 !== e6[bN] && (k7 %= aF.aG, g7.jb(tS, bN, k7), g8.kX(tS, 1, k7)))
				} : 1 === aGd ? function(k7) {
					2 !== dF ? gB.a7i(gB.oV, 3235) : (k7 = aGI(k7, 9), 0 !== e6[k7] && 0 !== e6[bN] && gS.a7L(0, [k7], !0) && g7.jt(k7, 1))
				} : function(k7) {
					var tS;
					3 !== dF ? gB.a7i(gB.oV, 3236) : (tS = aGI(k7, 9), k7 = aGI(k7, 9), 0 !== e6[tS] && 0 !== e6[k7] && 0 !== e6[bN] && gS.a7L(1, [tS], !0) && (g8.kX(tS, 3, 96), g8.kX(k7, 4, 96), g7.tb(tS, k7)))
				})(k7)
			}(k7)
		}(a13, k7)
	}, this.a1u = function(k7) {
		el = 1, dF = k7.length, (2 === aGI(k7, 2) ? function(k7) {
			el += 20;
			for (var a35, a34, name, a1k = aGI(k7, 9), pu = aGI(k7, 14), pw = aGI(k7, 4), a2X = 1 === aGI(k7, 1), a2Y = aGI(k7, 6), a2Z = aGI(k7, 14), aGb = aGI(k7, 9) + 1, mj = [], aE = 0; aE < aGb; aE++) a35 = aGI(k7, 1), a34 = [aGI(k7,
				6), aGI(k7, 6), aGI(k7, 6)], name = aGP(aGI(k7, 5), k7), mj.push({
				name: name,
				a34: a34,
				a35: a35
			});
			aT.a1I(), az.l4(a2Y, a2Z), 1 === mj.length && fy.a2s(pw);
			pt(pu, a1k, mj, pw, a2X, !1)
		} : function(k7) {
			el += 20;
			for (var a35, a34, mn, name, a1k = aGI(k7, 1), pu = aGI(k7, 14), pw = aGI(k7, 4), a2X = 1 === aGI(k7, 1), a2Y = aGI(k7, 6), a2Z = aGI(k7, 14), mj = [], aE = 0; aE < 2; aE++) a35 = aGI(k7, 1), a34 = [aGI(k7, 6), aGI(k7, 6),
				aGI(k7, 6)
			], mn = aGI(k7, 14), name = aGP(aGI(k7, 5), k7), mj.push({
				name: name,
				a34: a34,
				mn: mn,
				a35: a35
			});
			aT.a1I(), az.l4(a2Y, a2Z), pt(pu, a1k, mj, pw, a2X, !1)
		})(k7)
	}, this.a1o = function(k7) {
		el = 1, dF = k7.length;
		var aGL = aGI(k7, 2),
			aGa = aGI(k7, 10);
		return gB.a1d > gB.a1s && (aGa += gB.a1s), gB.a1d === aGa ? (gB.oV = aGa, !1) : (gB.close(gB.a1d, 3247), gB.oV = aGa, gc.a1j = aGI(k7, 10), gc.a1k = aGI(k7, 2 === aGL ? 9 : 1), gB.xI(aGa, 5) && jJ.a7g(), !0)
	}
}

function rV() {
	this.dF = 0, this.cm = 0, this.k7 = null, this.b = function(k7) {
		this.cm = 0, this.k7 = k7, this.dF = k7.length
	}, this.a1J = function() {
		this.k7 = null
	}, this.k9 = function(dF) {
		for (var aR = 0, k7 = this.k7, iA = this.cm + dF - 1, aE = this.cm; aE <= iA; aE++) aR |= (k7[aE >> 3] >> 7 - (7 & aE) & 1) << iA - aE;
		return this.cm += dF, this.cm > 8 * this.dF && console.log("error unwrapper"), aR
	}, this.aB9 = function(dF) {
		for (var ad = new Array(dF), aE = 0; aE < dF; aE++) ad[aE] = this.k9(10);
		return w.l8(ad)
	}, this.aGi = function(aBK) {
		return this.dF === l3.aGj(aBK)
	}
}

function a80() {
	this.aC2 = 0, this.aC3 = 0, this.aBy = 0, this.aBz = 0, this.aC0 = 0, this.aC1 = 0, this.zP = [0, 0, 0, 0], this.i9 = function() {
		this.aC2 = hv.hN(), this.aC3 = hv.d6(), this.aBy = -this.aC2, this.aBz = -this.aC3, this.aC0 = hL / eC, this.aC1 = d3 / eC, this.zP[0] = Math.floor(this.aBy), this.zP[1] = Math.floor(this.aBz), this.zP[2] = Math.floor(this.zP[0] + this
			.aC0 + 1), this.zP[3] = Math.floor(this.zP[1] + this.aC1 + 1), iI.zM = !0
	}
}

function rB() {
	var vS, hi;
	this.b = function() {
		vS = 1, hi = 0
	}, this.fF = function() {
		0 < vS && (hi = 0 === hi ? aL.aM + 16 : hi, vS = (vS -= .001 * (aL.aM - hi)) < 0 ? 0 : vS, hi = aL.aM, aL.cx = !0)
	}, this.d7 = function() {
		0 < vS && (d8.fillStyle = "rgba(0,0,0," + vS + ")", d8.fillRect(0, 0, hL, d3))
	}
}

function rF() {
	function aGn(a8C, hD, hE, cu, ez) {
		a8C >= az.a5L || (az.ll === a8C && (d8.fillStyle = dB.iz, d8.fillRect(hD, hE, cu, ez), d8.fillStyle = dB.dC), d8.strokeRect(hD, hE, cu, ez), d8.fillText(az.ft.lk[a8C].name, Math.floor(hD + .5 * cu), Math.floor(hE + .55 * ez)))
	}
	this.oh = !1, this.a2r = [0, 0, 0, 0], this.show = function() {
		this.oh = !0, this.resize(), aL.cx = !0
	}, this.resize = function() {
		var aBT = bJ(az.a5L + az.a5L % 2, 2),
			aBT = a2 - aBT * d2;
		this.a2r[2] = a0 ? Math.floor(.75 * ur) : Math.floor(.5 * ur), this.a2r[3] = Math.floor(1.25 * this.a2r[2]), this.a2r[3] > aBT && (this.a2r[3] = aBT, this.a2r[2] = Math.floor(aBT / 1.2)), this.a2r[0] = Math.floor((a1 - this.a2r[2]) / 2),
			this.a2r[1] = Math.floor((a2 - this.a2r[3]) / 2)
	}, this.oD = function(hD, hE) {
		return !(hD < this.a2r[0] || hE < this.a2r[1] || hD > this.a2r[0] + this.a2r[2] || hE > this.a2r[1] + this.a2r[3])
	}, this.cz = function(hD, hE) {
		var ty, aBT = bJ(az.a5L + az.a5L % 2, 2);
		return aL.cx = !0, hD < this.a2r[0] || hE < this.a2r[1] || hD > this.a2r[0] + this.a2r[2] || hE > this.a2r[1] + this.a2r[3] ? !(this.oh = !1) : (ty = Math.floor(.17 * this.a2r[3]), hE < this.a2r[1] + ty ? hD > this.a2r[0] + this.a2r[2] -
			ty && (this.oh = !1) : (hE = (hE = Math.floor(aBT * (hE - this.a2r[1] - ty - .00576 * ck) / (this.a2r[3] - ty - .01152 * ck))) < 0 ? 0 : aBT - 1 < hE ? aBT - 1 : hE, hD > this.a2r[0] + this.a2r[2] / 2 && (hE += aBT), hE >= az
				.a5L || az.l4(hE, Math.floor(16384 * Math.random()))), !0)
	}, this.d7 = function() {
		var aE, hJ, ty = Math.floor(.17 * this.a2r[3]),
			aBT = bJ(az.a5L + az.a5L % 2, 2),
			mA = .6 * .01152 * ck,
			tz = (this.a2r[3] - ty - (aBT + 1) * mA) / aBT,
			mf = Math.floor((this.a2r[2] - 3 * mA) / 2);
		for (d8.lineWidth = pR, d8.textAlign = dA, d8.textBaseline = d9, d8.fillStyle = dB.iR, d8.fillRect(this.a2r[0], this.a2r[1] + ty, this.a2r[2], this.a2r[3] - ty), d8.fillStyle = dB.iz, d8.fillRect(this.a2r[0], this.a2r[1], this.a2r[2],
			ty), d8.strokeStyle = dB.dC, d8.strokeRect(this.a2r[0], this.a2r[1], this.a2r[2], this.a2r[3]), d8.fillStyle = dB.dC, d8.fillRect(this.a2r[0], this.a2r[1] + ty, this.a2r[2], 2), d8.font = cn + Math.floor(.48 * ty) + co, d8.fillText(
				"Maps", Math.floor(this.a2r[0] + this.a2r[2] / 2), Math.floor(this.a2r[1] + .55 * ty)), d8.font = cn + Math.floor(.48 * tz) + co, aE = aBT - 1; 0 <= aE; aE--) hJ = Math.floor(this.a2r[1] + ty + mA + aE * (tz + mA)), aGn(aE, this
			.a2r[0] + mA, hJ, mf, tz), aGn(aE + aBT, this.a2r[0] + mf + 2 * mA, hJ, mf, tz);
		cK.si(Math.floor(this.a2r[0] + this.a2r[2] - .7 * ty), Math.floor(this.a2r[1] + .3 * ty), Math.floor(.4 * ty)), d8.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function rC() {
	var el;

	function aGq(k7) {
		var u = t(),
			aGs = Math.floor(u / 16777216);
		aGo(k7, 24, aGs), aGo(k7, 24, u - 16777216 * aGs)
	}

	function aGr(k7) {
		aGo(k7, 14, a7q), aGo(k7, 4, m ? 2 : 12 <= q ? 1 : 0 < q ? 3 : 0), aGo(k7, 1, o4 ? 1 : 0), aGo(k7, 1, o5 ? 1 : 0), aGo(k7, 5, (new Date).getHours() % 24)
	}

	function aGo(lP, bU, uB) {
		for (var cV, aE = el; aE < el + bU; aE++) lP[cV = bJ(aE, 8)] = (uB >> bU - (aE - el + 1) & 1) << 7 - aE % 8 | lP[cV];
		el += bU
	}
	this.xL = function() {
		var k7 = new Uint8Array(3);
		aGo(k7, 1, el = 0), aGo(k7, 3, 0), aGo(k7, 14, a7q), gB.send(0, k7)
	}, this.a11 = function(a13) {
		var ad = w.nA(qG.a33()),
			tc = ad.length,
			k7 = new Uint8Array(bJ(aBK = 135 + 10 * tc, 8) + (0 < aBK % 8 ? 1 : 0)),
			aBK = (aGo(k7, 1, el = 0), aGo(k7, 3, 1), aGo(k7, 10, a7s), aGo(k7, 20, qS.id), aGo(k7, 10, Math.min(qS.u8, 1023)), d4.sk[2].nR.a0h());
		aGo(k7, 6, aBK[0]), aGo(k7, 6, aBK[1]), aGo(k7, 6, aBK[2]), aGq(k7), aGr(k7);
		for (var aE = 0; aE < tc; aE++) aGo(k7, 10, ad[aE]);
		gB.a1d = a13, gB.send(a13, k7)
	}, this.zi = function(a13, id) {
		var k7 = new Uint8Array(5);
		aGo(k7, 1, el = 0), aGo(k7, 3, 7), aGo(k7, 3, 0), aGo(k7, 14, a7q), aGo(k7, 1, id), aGo(k7, 16, Math.abs(4096 + d5.position[id] + d5.zh[id]) % 65536), gB.send(a13, k7)
	}, this.a3U = function(a13) {
		var aE, nz;
		if (!(qG.a3J + 7e3 > aL.aM)) {
			qG.a3J = aL.aM;
			var k7 = new Uint8Array(17);
			for (aGo(k7, 1, el = 0), aGo(k7, 3, 7), aGo(k7, 3, 2), aGq(k7), nz = t8(qG.a3I.length - 20, 0), aE = qG.a3I.length - 1; nz <= aE; aE--) aGo(k7, 4, Math.abs(qG.a3I.charCodeAt(aE) - 48) % 10);
			gB.send(a13, k7)
		}
	}, this.a7Y = function(a13, a7X) {
		var k7 = new Uint8Array(1);
		aGo(k7, 1, el = 0), aGo(k7, 3, 5), aGo(k7, 1, a7X ? 1 : 0), gB.send(a13, k7)
	}, this.a2h = function(a2W) {
		var k7 = new Uint8Array(1);
		aGo(k7, 1, el = 0), aGo(k7, 3, 2), aGo(k7, 4, a2W), gB.send(gB.a1d, k7)
	}, this.a7g = function() {
		var k7 = new Uint8Array(7);
		aGo(k7, 1, el = 0), aGo(k7, 3, 6), aGo(k7, 8, gB.tZ()), aGo(k7, 10, gc.a1j), aGo(k7, 9, gc.a1k), aGo(k7, 10, a7s), aGo(k7, 14, a7q), gB.send(gB.oV, k7)
	}, this.jK = function(dg) {
		l3.l4(27), l3.l5(1, 1), l3.l5(4, 0), l3.l5(22, dg), gB.send(gB.oV, l3.k7)
	}, this.jM = function(eA, ed) {
		l3.l4(25), l3.l5(1, 1), l3.l5(4, 1), l3.l5(10, eA), l3.l5(10, ed), gB.send(gB.oV, l3.k7)
	}, this.jQ = function(eA, jO) {
		l3.l4(24), l3.l5(1, 1), l3.l5(4, 2), l3.l5(10, eA), l3.l5(9, jO), gB.send(gB.oV, l3.k7)
	}, this.jU = function(eA, dg) {
		l3.l4(37), l3.l5(1, 1), l3.l5(4, 3), l3.l5(10, eA), l3.l5(22, dg), gB.send(gB.oV, l3.k7)
	}, this.jY = function(jW, dg) {
		l3.l4(37), l3.l5(1, 1), l3.l5(4, 4), l3.l5(10, jW), l3.l5(22, dg), gB.send(gB.oV, l3.k7)
	}, this.ja = function(ed) {
		l3.l4(15), l3.l5(1, 1), l3.l5(4, 5), l3.l5(10, ed), gB.send(gB.oV, l3.k7)
	}, this.je = function(cm) {
		l3.l4(12), l3.l5(1, 1), l3.l5(4, 6), l3.l5(7, cm), gB.send(gB.oV, l3.k7)
	}, this.jh = function(jg) {
		l3.l4(6), l3.l5(1, 1), l3.l5(4, 7), l3.l5(1, jg), gB.send(gB.oV, l3.k7)
	}, this.jj = function() {
		l3.l4(5), l3.l5(1, 1), l3.l5(4, 8), gB.send(gB.oV, l3.k7)
	}, this.k1 = function(a4Z, k0) {
		l3.l4(29), l3.l5(1, 1), l3.l5(4, 10), l3.l5(12, a4Z), l3.l5(2, 0), l3.l5(10, k0), gB.send(gB.oV, l3.k7)
	}, this.k4 = function(a4Z, lZ, la, aGt) {
		l3.l4(46), l3.l5(1, 1), l3.l5(4, 10), l3.l5(12, a4Z), l3.l5(2, 1), l3.l5(9, lZ), l3.l5(9, la), l3.l5(9, aGt), gB.send(gB.oV, l3.k7)
	}, this.k6 = function(a4Z) {
		var aE, ne = gC.gD.ne;
		for (l3.l4(47 + 33 * ne.length), l3.l5(1, 1), l3.l5(4, 10), l3.l5(12, a4Z), l3.l5(2, 2), l3.l5(24, gC.gD.nd), l3.l5(4, ne.length), aE = 0; aE < ne.length; aE++) l3.l5(9, ne[aE].player), l3.l5(24, ne[aE].nq);
		gB.send(gB.oV, l3.k7)
	}, this.jr = function(aGu, aGv) {
		l3.l4(21), l3.l5(1, 1), l3.l5(4, 15), l3.l5(9, aGv), l3.l5(7, aGu), gB.send(gB.oV, l3.k7)
	}, this.ju = function(tT) {
		l3.l4(14), l3.l5(1, 1), l3.l5(4, 14), l3.l5(9, tT), gB.send(gB.oV, l3.k7)
	}, this.jy = function(aGw, target) {
		var aE, bU = aGw.length;
		for (l3.l4(14 + 9 * bU), l3.l5(1, 1), l3.l5(4, 13), l3.l5(9, target), aE = 0; aE < bU; aE++) l3.l5(9, aGw[aE]);
		gB.send(gB.oV, l3.k7)
	}, this.a30 = function(a13) {
		var k7 = new Uint8Array(4);
		aGo(k7, 1, el = 0), aGo(k7, 3, 3), aGr(k7), gB.send(a13, k7)
	}
}

function o3() {
	this.dF = 0, this.cm = 0, this.k7 = null, this.b = function(k7) {
		this.cm = 0, this.k7 = k7, this.dF = k7.length
	}, this.l4 = function(aBK) {
		return this.b(new Uint8Array(this.aGj(aBK))), this.k7
	}, this.a1J = function() {
		this.k7 = null
	}, this.l5 = function(dF, uB) {
		for (var k7 = this.k7, iA = this.cm + dF - 1, aE = this.cm; aE <= iA; aE++) k7[aE >> 3] |= (uB >> iA - aE & 1) << 7 - (7 & aE);
		this.cm += dF, this.cm > 8 * this.dF && console.log("error wrapper")
	}, this.aGx = function(dF) {
		for (var k7 = this.k7, iA = this.cm + dF, aE = this.cm; aE < iA; aE++) k7[aE >> 3] &= 255 ^ 128 >>> (7 & aE)
	}, this.aGj = function(aBK) {
		return aBK + 7 >> 3
	}, this.aGy = function(ad, el, iA, aGz) {
		for (var aE = el; aE < iA; aE++) this.l5(aGz, ad[aE])
	}
}
setTimeout(aS, 25);