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
					AD_DISPLAY: "fullscreen",
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
	return aL.aM < aN ? (console.log("can't show ad, next ad will be shown in " + ((aN - aL.aM) / 1e3).toFixed(0) + "s"), !1) : (aN = aL.aM + 135e4, !!aO.i() || (m ? (window.webkit.messageHandlers.iosCommandA.postMessage("show ad " + Math.floor(
		135e4)), !0) : 12 <= q && (n.presentAd(Math.floor(135e4)), !0)))
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
var e5, o6, fq, o5, fe = [60, 74, 112, 200, 256, 512];

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
	this.hP = fV.iM(0, 0, 0), this.iN = fV.iO(0, 0, 0, .7), this.iP = fV.iO(0, 0, 0, .5), this.iQ = fV.iO(0, 0, 0, .85), this.iR = fV.iO(0, 0, 0, .75), this.iS = fV.iO(0, 0, 0, .6), this.iT = fV.iO(0, 0, 0, .35), this.dC = fV.iM(255, 255, 255), this
		.iU = fV.iO(255, 255, 255, .3), this.iV = fV.iO(255, 255, 255, .6), this.iW = fV.iO(255, 255, 255, .4), this.iX = fV.iO(255, 255, 255, .25), this.iY = fV.iO(255, 255, 255, .85), this.iZ = fV.iO(255, 255, 255, .75), this.ia = fV.iM(128, 128,
			128), this.ib = fV.iO(64, 64, 64, .75), this.ic = fV.iM(30, 255, 30), this.id = fV.iM(0, 200, 0), this.ie = fV.iM(128, 255, 128), this.ig = fV.iO(10, 65, 10, .75), this.ih = fV.iO(0, 255, 0, .6), this.ii = fV.iO(0, 255, 0, .5), this.ij =
		fV.iO(0, 200, 0, .5), this.ik = fV.iO(0, 100, 0, .75), this.il = fV.iO(0, 60, 0, .8), this.im = fV.iO(0, 255, 0, .3), this.io = fV.iO(0, 180, 0, .6), this.ip = fV.iM(255, 120, 120), this.iq = fV.iM(255, 160, 160), this.ir = fV.iM(255, 70,
		70), this.is = fV.iM(230, 0, 0), this.it = fV.iO(220, 0, 0, .6), this.iu = fV.iO(255, 100, 100, .8), this.iv = fV.iO(100, 0, 0, .85), this.iw = fV.iO(60, 0, 0, .85), this.ix = fV.iO(200, 0, 0, .6), this.iy = fV.iO(0, 60, 60, .85), this.iz =
		fV.iO(10, 60, 60, .9), this.j0 = fV.iO(0, 96, 96, .75), this.j1 = fV.iM(160, 160, 255), this.j2 = fV.iO(0, 40, 90, .75), this.j3 = fV.iO(0, 0, 255, .6), this.j4 = fV.iM(255, 120, 100), this.j5 = fV.iO(255, 255, 0, .5), this.j6 = fV.iO(255,
			255, 150, .2), this.j7 = fV.iM(255, 255, 0), this.j8 = fV.iM(255, 255, 200), this.j9 = fV.iO(200, 200, 0, .6), this.jA = fV.iO(255, 140, 0, .75)
}

function jB() {
	this.cd = new jC, this.cN = new jD, this.jE = new jF, this.jG = new jH, this.fa = new jI
}

function jC() {
	this.jJ = function(dg) {
		fx ? cc.jE.jJ(bN, dg) : jK.jL(dg)
	}, this.ce = function(eA, ed) {
		g7.jM(), fx ? cc.jE.ce(bN, eA, ed) : jK.jN(eA, ed)
	}, this.jO = function(eA, jP) {
		g7.jM(), fx ? cc.jE.jQ(bN, eA, jP) : jK.jR(eA, jP)
	}, this.jS = function(eA, dg) {
		fx ? cc.jE.jS(bN, eA, dg) : eO.jT.jU(bN, dg) && jK.jV(eA, dg)
	}, this.jW = function(jX, dg) {
		fx ? cc.jE.jW(bN, jX, dg) : eO.jT.jY(bN, jX, dg) && jK.jZ(jX, dg)
	}, this.ja = function(ed) {
		fx ? cc.jE.ja(bN, ed) : jK.jb(ed)
	}, this.jc = function(jd) {
		fx ? cc.jE.je(bN, jd) : jK.jf(jd)
	}, this.jg = function(jh) {
		fx ? cc.jE.jg(bN, jh) : jK.ji(jh)
	}, this.jj = function() {
		fx ? cc.jE.jj(bN) : jK.jk()
	}
}

function jI() {
	this.fb = function(player, jP, ee) {
		cM.cN.jl(player, ee, jP) && (bP.jO(player, jP), jP < e5) && em.random() < em.value(10) && (eY[jP] = 0)
	}, this.jm = function(player, jP, ee) {
		cM.cN.jn(ee, jP) && (cM.cN.jo(jP, eU.aX[0]), bR.jp(player, jP), g8.jq(jP, eU.aX[0]))
	}
}

function jD() {
	this.jr = function(jd, player) {
		g7.jc(bN, player, jd), jK.js(jd, player)
	}, this.jt = function(player) {
		g7.ju(player, 0), jK.jv(player)
	}, this.jw = function(jx, player) {
		g7.jy(jx, player), jK.jz(jx, player)
	}, this.k0 = function(k1) {
		fx || cJ || jK.k2(k3(), k1)
	}, this.k4 = function() {
		fx || cJ || jK.k5(k3(), gr[0], gr[1], gr[2])
	}, this.k6 = function() {
		fx || cJ || jK.k7(k3())
	}
}

function jH() {
	this.fF = function(k8) {
		var id, ae, iA;
		for (k9.b(k8), k9.cm += 2, iA = 8 * k9.dF; k9.cm + 8 <= iA;) id = k9.kA(4), ae = k9.kA(9), 0 === id ? this.kB(id, ae, k9.kA(22)) : 1 === id ? this.kB(id, ae, k9.kA(10), k9.kA(10)) : 2 === id ? this.kB(id, ae, k9.kA(10), k9.kA(9)) : 3 ===
			id || 4 === id ? this.kB(id, ae, k9.kA(10), k9.kA(22)) : 5 === id ? this.kB(id, ae, k9.kA(10)) : 6 === id ? this.kB(id, ae, k9.kA(7)) : 7 === id ? this.kB(id, ae, k9.kA(1)) : this.kB(id, ae)
	}, this.kB = function(id, ae, ag, ai) {
		0 === id ? cc.jE.jJ(ae, ag) : 1 === id ? cc.jE.ce(ae, ag, ai) : 2 === id ? cc.jE.jQ(ae, ag, ai) : 3 === id ? cc.jE.jS(ae, ag, ai) : 4 === id ? cc.jE.jW(ae, ag, ai) : 5 === id ? cc.jE.ja(ae, ag) : 6 === id ? cc.jE.je(ae, ag) : 7 === id ?
			cc.jE.jg(ae, ag) : 8 === id ? cc.jE.jj(ae) : cc.jE.kC(ae)
	}
}

function jF() {
	this.jJ = function(player, dg) {
		cM.cN.cO(0) && cM.cN.cP(player) && kD.eI(dg) && (gW.kE.kF(0, player, dg), kG.ea(player, dg))
	}, this.ce = function(player, eA, ed) {
		cM.cN.cO(1) && cM.cN.cP(player) && cM.cN.kH(player, ed) && cM.cN.kI(player, eA, 12, bK) && b5.cQ(player) && cM.cN.kJ(player, ed) && eT(player) && (gW.kE.kF(1, player, eA, eU.ab[0]), cM.cN.kK(player), bR.kL(player, eA), eX(player))
	}, this.jQ = function(player, eA, jP) {
		cM.cN.cO(1) && cM.cN.cP(player) && cS && cM.cN.kH(player, jP) && cM.cN.kM(player, jP) && cM.cN.jl(player, cM.cN.e9(player, eA), jP) && (gW.kE.kF(2, player, eA, jP), bP.jO(player, jP))
	}, this.jS = function(player, eA, dg) {
		cM.cN.cO(1) && cM.cN.cP(player) && kD.eI(dg) && eO.gL.kN !== eO.gL.kO && eO.gL.kP[player] !== eO.gL.kQ && 0 !== bo[player].length && cM.cN.kI(player, eA, 32, 16) && eO.kR.kS(player, dg) && (gW.kE.kF(3, player, eA, dg), cM.cN.kK(player),
			eO.gL.kT(player))
	}, this.jW = function(player, jX, dg) {
		cM.cN.cO(1) && cM.cN.cP(player) && kD.eI(dg) && eO.jT.kU(player, jX) && eO.kR.kV(dg) && (gW.kE.kF(4, player, jX, dg), cM.cN.kW(player, 8), eO.gL.jW())
	}, this.ja = function(player, ed) {
		cM.cN.cO(1) && cM.cN.cP(player) && (ed = Math.min(ed, bZ), b5.es(player, ed)) && (gW.kE.kF(5, player, ed), b5.kX(player, ed))
	}, this.je = function(player, jd) {
		cM.cN.cO(2) && cM.cN.cP(player) && (jd = Math.min(jd, aF.aG - 1), gW.kE.kF(6, player, jd), g8.kY(player, 0, jd))
	}, this.jg = function(player, jh) {
		cM.cN.cO(1) && cM.cN.cP(player) && (gW.kE.kF(7, player, jh), gT.kZ(player, jh))
	}, this.jj = function(player) {
		(cM.cN.cO(0) || cM.cN.cO(1)) && cM.cN.cP(player) && gV.jj(player) && gW.kE.kF(8, player)
	}, this.kC = function(player) {
		gV.kC(player), gW.kE.kF(9, player)
	}
}

function ka(kb, kc, color) {
	var button = document.createElement("button");
	this.b = function(kd) {
		button.style.position = "relative", button.ke = kb, button.kf = kc, button.style.color = dB.dC, button.style.border = "2px solid " + dB.dC, button.style.backgroundColor = color || dB.iT, button.style.cs = "inherit", kd.appendChild(button)
	}, this.kg = function() {
		button.style.width = "100%", button.style.height = "100%"
	}, this.kh = function(ki) {
		button.kj(ki)
	}
}

function kk(kl, km) {
	this.hD = 0, this.hE = 0, this.cu = 0, this.ez = 0, this.resize = function() {
		this.ez = Math.min(cM.iL.kn(.5) * kl[1] * ck, d3 - 2 * ko), this.cu = Math.min(this.ez * (kl[0] / kl[1]), hL - 2 * ko), this.ez = kl[1] * this.cu / kl[0], this.hD = ko + km[0] * (hL - this.cu - 2 * ko), this.hE = ko + km[1] * (d3 - this
			.ez - 2 * ko)
	}, this.kp = function() {
		return this.hD + .5 * this.cu
	}
}

function kq() {
	var kr = document.createElement("div");
	this.b = function(kd) {
		kr.width = "100%", kr.height = "auto", kr.style.display = "grid", kr.style.ks = "auto", kr.style.kt = "16px", kr.style.ku = "100%", this.resize(), kd.appendChild(kr)
	}, this.resize = function() {
		kr.style.kv = "repeat(auto-fit, minmax(clamp(64px, " + 400 * cM.iL.kn(.5) + "px, 100%), auto))", kr.style.kw = "minmax(min-content," + 75 * cM.iL.kn(.5) + "px)"
	}, this.kx = function(ky) {
		ky.b(kr)
	}
}

function kz() {
	var l0, l1, l2;
	this.b = function(title, l3, l4) {
		var l5;
		(l0 = document.createElement("div")).style.position = "absolute", l0.style.top = "0", l0.style.left = "0", l0.style.width = "100vw", l0.style.height = "100vh", l0.style.l7 = "100vh", l0.style.backgroundColor = dB.iP, l0.style.l8 =
			"blur(5px)", (l1 = document.createElement("div")).style.width = "100%", l1.style.display = "flex", l1.style.backgroundColor = dB.iT, l1.style.l9 = "2px solid " + dB.dC, (l5 = document.createElement("h1")).ke = title, l5.style
			.textAlign = "center", l5.style.width = "70%", l5.style.margin = "auto", l5.style.color = dB.dC, (title = document.createElement("div")).style.lA = "0", title.style.width = "30%", title.style.padding = "0.5em", (l2 = document
				.createElement("div")).style.lB = "auto", l2.style.padding = "16px", l2.style.lC = "24px", l1.appendChild(l5), l1.appendChild(title), l0.appendChild(l1), l0.appendChild(l2), l3.b(title), l3.kg();
		for (var aE = 0; aE < l4.length; aE++) l4[aE].b(l2);
		this.resize()
	}, this.resize = function() {
		var lD = cM.iL.kn(.5) * Math.max(.075 * ck, 45);
		l1.style.height = lD + "px", l2.style.l7 = "calc(" + (ck - lD) + "px - 40px)", l0.style.cs = 20 * cM.iL.kn(.5) + "px"
	}, this.show = function() {
		document.body.appendChild(l0)
	}, this.lE = function() {
		document.body.removeChild(l0)
	}
}

function lF() {
	var lG, lH = !0;

	function lS() {
		lG.select(), document.execCommand("copy")
	}
	this.lI = !1, this.b = function() {
		(lG = document.createElement("textarea")).setAttribute("name", "replayData"), lG.setAttribute("id", "replayDataField"), lG.setAttribute("autocomplete", "off"), lG.setAttribute("placeholder", "Insert the replay link here!"), lG.style
			.position = "absolute", lG.style.resize = "none", lG.style.borderRadius = "0", lG.style.color = dB.dC, lG.style.backgroundColor = dB.iN, lG.addEventListener("focus", function() {
				lJ.lI = !0
			}), lG.addEventListener("blur", function() {
				lJ.lI = !1
			})
	}, this.show = function() {
		document.body.appendChild(lG)
	}, this.lE = function() {
		document.body.removeChild(lG)
	}, this.resize = function(hD, hE, cu, ez) {
		cM.iL.lK(lG.style, hD, hE, cu, ez), lG.style.font = cM.iL.lL(Math.max(5, .1 * ez / lM), 0)
	}, this.lN = function(kb) {
		lG.value = kb
	}, this.lO = function() {
		return lG.value
	}, this.lP = function() {
		lG.select()
	}, this.lQ = function() {
		lG.value = ""
	}, this.lR = function() {
		lH && navigator.clipboard ? (lG.select(), navigator.clipboard.writeText(lG.value).catch(function() {
			lH = !1, lS()
		})) : lS()
	}
}

function lT() {
	var lU = new Uint8Array(78);
	this.b = function() {
		var aE;
		for (lU[50] = 37, aE = 0; aE < 10; aE++) lU[aE + 3] = aE + 1;
		for (aE = 0; aE < 26; aE++) lU[aE + 20] = aE + 11, lU[aE + 52] = aE + 38
	}, this.lV = function(v) {
		return v.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "_")
	}, this.lW = function(v, lX) {
		for (var lY = lU, bU = v.length, ad = new Uint8Array(lX || bU), aE = 0; aE < bU; aE++) ad[aE] = lY[v.charCodeAt(aE) - 45];
		return ad
	}, this.lZ = function(la) {
		var aE, bU = la.length,
			cu = lb;
		for (cu.lc(6 * bU), aE = 0; aE < bU; aE++) cu.ld(6, la[aE]);
		k9.b(cu.k8)
	}
}

function le() {
	var cu, ez, lf;

	function m6(m7, be, m4, lk, lz) {
		be = m5(m7, be + 1 + 2 * lk & 3);
		! function(m7, m8) {
			return 1 < Math.abs(m7 % cu - m8 % cu) || 1 < Math.abs(mB(m7) - mB(m8))
		}(m7, be) && 0 === lz[be << 2] && (lz[be << 2] = m4)
	}

	function mB(bc) {
		return Math.floor((bc + .5) / cu) % ez
	}

	function m5(bc, be) {
		return bc + lf[be]
	}
	this.lg = function(v) {
		var aE, lh, bU, li, ll = k9;
		for (lm.lZ(lm.lW(v)), az.b0 = cu = ll.kA(12), az.b1 = ez = ll.kA(12), lf = [-cu, -1, cu, 1], az.lv = document.createElement("canvas"), az.lv.width = az.b0, az.lv.height = az.b1, az.lr = az.lv.getContext("2d", {
				alpha: !1
			}), az.ls = az.lr.getImageData(0, 0, az.b0, az.b1), az.lw = az.ls.data, cM.lx.ly(az.lw), bU = ll.kA(12), lh = ll.kA(5), li = lo(cu * ez - 1), aE = 0; aE < bU; aE++) ! function(ca, bc, lj, lk) {
			var aE, be, ll = k9,
				lz = az.lw,
				m0 = bc,
				m1 = bc,
				m2 = 0,
				m3 = 1 + lj,
				m4 = 2 - lj;
			for (lz[bc << 2] = m3, aE = 0; aE < ca; aE++) be = ll.kA(2), bc = m5(bc, be), lz[bc << 2] === m3 ? m2 % 2 == 1 && m6(m1, m2 + 2 * lk + 3, m4, lk, lz) : lz[bc << 2] = m3, m6(bc, be, m4, lk, lz), m6(m1, be, m4, lk, lz), m1 = bc,
				m2 = be;
			m5(bc, 0) === m0 ? (m6(bc, 0, m4, lk, lz), m6(m0, 0, m4, lk, lz)) : m5(bc, 1) === m0 && (m6(bc, 0, m4, lk, lz), m6(m0, 2, m4, lk, lz));
			0 === ca && (m6(m0, 0, m4, lk, lz), m6(m0, 2, m4, lk, lz))
		}(ll.kA(lh), ll.kA(li), 1 === ll.kA(1), 1 === ll.kA(1));
		var hD, hE, mC, mD, mE, mF, lz = az.lw,
			mG = !0,
			mH = az.ft.mI[az.mJ].mH,
			mK = az.ft.mI[az.mJ].mK;
		for (hE = 0; hE < ez; hE++)
			for (mD = !0, mE = mG, hD = mF = 0; hD < cu; hD++) mC = 4 * hE * cu + 4 * hD, mF <= hD && 0 < lz[mC] && (mE = 2 === lz[mC], mD) && (mD = !1, mE !== mG) ? (mG = mE, mF = hD + 1, hD = -1) : (mE ? (lz[mC] = mK[0], lz[1 + mC] = mK[1], lz[
				2 + mC] = mK[2]) : (lz[mC] = mH[0], lz[1 + mC] = mH[1], lz[2 + mC] = mH[2]), lz[3 + mC] = 255);
		az.lr.putImageData(az.ls, 0, 0), az.lt = !0, az.lu.b(), aL.cx = !0
	}
}

function mL() {
	var hD, hE, cu, ez, mM, mN, mO, mP, player, ad;

	function mX() {
		return function() {
			var aE;
			for (aE = 0; aE < 8; aE++)
				if (hD = bJ(cu * em.random(), em.value(100)), hE = bJ(ez * em.random(), em.value(100)), mf()) return 1;
			return
		}() || function() {
			var dx, e0, ej, mV, cV, mU;
			for (dx = bJ(cu * em.random(), em.value(100)), e0 = bJ(ez * em.random(), em.value(100)), ej = 40; 1 <= ej; ej--)
				for (mV = ez - ej; 0 <= mV; mV -= 40)
					for (hE = (mV + e0) % ez, cV = 40; 1 <= cV; cV--)
						for (mU = cu - cV; 0 <= mU; mU -= 40)
							if (hD = (mU + dx) % cu, mf()) return 1;
			return
		}()
	}

	function mf() {
		for (var bc, mh, kt = bJ(mM - mP, 2), mi = mO + hE * mM + kt, mj = mN + hD * mM + kt, mg = mi + mP - 1; mi <= mg; mg--)
			for (mh = mj + mP - 1; mj <= mh; mh--)
				if (bc = bW.md(mh, mg), !bW.bX(bc) || bW.eg(bc)) return;
		return 1
	}

	function mY(mU, mV) {
		mQ(), mk(mU - 2, mV - 2)
	}

	function mQ() {
		e6[player] = 0, bO[player] = 0, bv[player] = ml[player] = 0, bV[player] = [], bn[player] = [], bo[player] = [], br[player] = [], f3[player] = f6[player] = f2[player] = f5[player] = 0
	}

	function mk(mU, mV) {
		var bc, aE, mn, mo;
		for (e6[player] = 1, bO[player] = player < e5 ? mm : fe[fG.ee[player - e5]], f3[player] = mU + 10, f6[player] = mV + 10, f5[player] = f2[player] = 0, mn = mU; mn < mU + 4; mn++)
			for (mo = mV; mo < mV + 4; mo++)(mU < mn && mn < mU + 3 || mV < mo && mo < mV + 3) && (bc = bW.md(mn, mo), bW.bX(bc)) && (f3[player] = mn < f3[player] ? mn : f3[player], f2[player] = mn > f2[player] ? mn : f2[player], f6[player] = mo <
				f6[player] ? mo : f6[player], f5[player] = mo > f5[player] ? mo : f5[player], ad[bv[player]] = bc, bv[player]++, bW.mp(bc, player));
		for (ml[player] = bv[player], aE = bv[player] - 1; 0 <= aE; aE--) bW.mq(ad[aE], player) ? (bW.bY(ad[aE], player), bn[player].push(ad[aE])) : bW.mr(ad[aE]) ? (bW.bY(ad[aE], player), bo[player].push(ad[aE])) : bW.ms(ad[aE]) && (bW.bY(ad[aE],
			player), br[player].push(ad[aE]))
	}

	function me(mU, mV) {
		for (var bc, mh, mg = mV; mV - 6 < mg; mg--)
			for (mh = mU; mU - 6 < mh; mh--)
				if (bc = bW.md(mh, mg), bW.eg(bc)) return;
		return 1
	}
	this.b = function() {
		var aE, mU, mV;
		if (ad = new Array(12), mP = 6, mM = 10, cu = bJ(az.b0, mM), ez = bJ(az.b1, mM), mN = bJ(az.b0 - mM * cu, 2), mO = bJ(az.b1 - mM * ez, 2), hr)
			for (aE = 0; aE < e5; aE++) player = aE, mQ(), e6[player] = 1;
		if (fr.fs && fr.ft.mR) {
			for (player = 0; player < bZ; player++)
				if (1 !== e6[player]) {
					if (player < mW) {
						if (function() {
								var mU = fr.ft.mR[player] + 1,
									mV = fr.ft.mc[player] + 1;
								if (3 < mU && mU < az.b0 - 5 && 3 < mV && mV < az.b1 - 5 && bW.bX(bW.md(mU, mV)) && me(mU + 3, mV + 3)) return mY(mU + 1, mV + 1), 1;
								return
							}()) continue;
						if (mX()) {
							mU = mN + hD * mM + bJ(mM, 2), mV = mO + hE * mM + bJ(mM, 2), mY(mU, mV);
							continue
						}
					}
					mQ()
				}
		} else ! function() {
			var mU, mV;
			for (player = 0; player < bZ; player++) 1 !== e6[player] && (player < mW && mX() ? (mU = mN + hD * mM + bJ(mM, 2), mV = mO + hE * mM + bJ(mM, 2), mY(mU, mV)) : mQ())
		}();
		bR.bS[7] = bv[bN], bR.bS[8] = bO[bN]
	}, this.mt = function(ed, mu, mv) {
		var aE, mU, mV, bc, hD, hE;
		for (player = ed, aE = 0; aE < 20; aE++)
			for (mU = mu + aE; mu - aE <= mU; mU--)
				for (mV = mv + aE; mv - aE <= mV; mV--)
					if ((mU === mu + aE || mU === mu - aE || mV === mv + aE || mV === mv - aE) && 3 < mU && mU < az.b0 - 5 && 3 < mV && mV < az.b1 - 5 && bW.bX(bW.md(mU, mV)) && me(mU + 3, mV + 3)) {
						if (0 < bv[player]) {
							for (hE = hD = bc = void 0, hD = f2[player]; hD >= f3[player]; hD--)
								for (hE = f5[player]; hE >= f6[player]; hE--) bc = 4 * (hE * az.b0 + hD), bW.mx(player, bc) && (bW.my(bc), bv[player]--);
							mQ()
						}
						return mk(mU - 1, mV - 1), !0
					} return !1
	}, this.mz = function(ed) {
		player = ed, mX() ? mY(mN + hD * mM + bJ(mM, 2), mO + hE * mM + bJ(mM, 2)) : mQ()
	}
}

function n0() {
	n1.n2(), d8.setTransform(eC, 0, 0, eC, 0, 0), d8.imageSmoothingEnabled = eC < 3, d8.drawImage(az.lv, hv.hN(), hv.d6()), gP.n3.d7(), d8.drawImage(n4, hv.hN(), hv.d6()), n1.d7(), d8.imageSmoothingEnabled = !1, d8.setTransform(1, 0, 0, 1, 0, 0), eO
		.n3.d7(), g8.d7(), gK.d7(), (hu ? (gU.d7(), gb) : (d8.imageSmoothingEnabled = !1, g7.d7(), gN.d7(), cf.d7(), gb.d7(), gT.d7(), g9.d7(), hv.d7(), cv.d7(), gU.d7(), gQ.d7(), gR.d7(), cK.d7(), n5.d7(), gZ.d7(), n6.d7(), lJ.d7(), ga)).d7()
}

function n7(n8, cu, ez) {
	n8.clearRect(0, 0, cu, ez), n8.fillStyle = dB.iR, n8.fillRect(0, 0, cu, ez)
}

function n9(n8, cu, ez, nA) {
	n8.fillStyle = dB.dC, n8.fillRect(0, 0, cu, nA), n8.fillRect(0, 0, nA, ez), n8.fillRect(cu - nA, 0, nA, ez), n8.fillRect(0, ez - nA, cu, nA)
}

function nB(n8, hD, hE, dE, nA, bc, nC) {
	n8.fillStyle = dB.dC;
	var bc = Math.floor(dE * bc),
		nE = (bc += (bc - nA) % 2, Math.floor((bc - nA) / 2)),
		dE = Math.floor((dE - bc) / 2);
	n8.fillRect(hD + dE, hE + dE + nE, bc, nA), nC && n8.fillRect(hD + dE + nE, hE + dE, nA, bc)
}

function nG() {
	this.nH = null, this.b = function(nH) {
		this.nH = nH, g7.nI(this.nH)
	}, this.nJ = function(nK) {
		var de = (this.nH[nK].nL - this.nH[1 - nK].nL) / 10,
			de = 8 / (1 + Math.pow(2, de / 32)),
			de = Math.floor(10 * de + .5),
			nN = this.nO(this.nH[nK].nL + de + 1),
			de = this.nO(this.nH[1 - nK].nL - de);
		0 === nK ? g7.nQ(this.nH, nN, de, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : g7.nQ(this.nH, de, nN, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.nO = function(nL) {
		return 16e3 <= (nL = nL < 0 ? 0 : 16e3 < nL ? 16e3 : nL) ? "Unknown" : (nL / 10).toFixed(1)
	}
}

function nR() {
	var nS = new Uint8Array(64);
	this.b = function() {
		var aE;
		for (nS[0] = 45, nS[37] = 95, aE = 0; aE < 10; aE++) nS[aE + 1] = 48 + aE;
		for (aE = 0; aE < 26; aE++) nS[aE + 11] = 65 + aE, nS[aE + 38] = 97 + aE
	}, this.nT = function(nU) {
		for (var ll = k9, la = new Uint8Array(nU), aE = 0; aE < nU; aE++) la[aE] = ll.kA(6);
		return la
	}, this.nV = function(la) {
		for (var bU = la.length, nW = nS, ad = [], aE = 0; aE < bU; aE++) ad.push(String.fromCharCode(nW[la[aE]]));
		return ad.join("")
	}
}

function nX() {
	var nY, nZ, na;
	nY = [32, 65, 191, 913, 931], nZ = [64, 127, 688, 930, 1155], na = new Array(nY.length + 1);
	for (var aE = 0; aE < na.length; aE++) {
		na[aE] = 0;
		for (var ej = aE - 1; 0 <= ej; ej--) na[aE] += nZ[ej] - nY[ej]
	}

	function nh(fV) {
		for (var aE = nY.length - 1; 0 <= aE; aE--)
			if (fV >= nY[aE] && fV < nZ[aE]) return aE;
		return -1
	}
	this.nc = function(v) {
		return 0 !== (v = v.trim()).indexOf("Bot ") && 0 !== v.indexOf("[Bot] ") && function(v, ne, nf) {
			var bU = (v = v.trim()).length;
			if (bU < ne || nf < bU) return !1;
			for (var fV, ng = 0, aE = 0; aE < bU; aE++)
				if (fV = v.charCodeAt(aE), ng += 65 <= fV && fV <= 90 || 1040 <= fV && fV <= 1071 ? 1 : 0, -1 === nh(fV)) return !1;
			if (3 < ng && ng > Math.floor(bU / 2)) return !1;
			return !0
		}(v, 3, 20)
	}, this.ni = function(v) {
		for (var bU = (v = v.trim()).length, ad = [], aE = 0; aE < bU; aE++) {
			var fV, bc = nh(fV = v.charCodeAt(aE));
			ad.push(na[bc] + fV - nY[bc])
		}
		return ad
	}, this.lg = function(ad) {
		for (var fV, cV, v = "", bU = ad.length, aE = 0; aE < bU; aE++)
			for (cV = 1; cV < na.length; cV++)
				if (ad[aE] < na[cV]) {
					fV = nY[cV - 1] + ad[aE] - na[cV - 1], v += String.fromCharCode(fV);
					break
				} return v
	}, this.nj = function(v) {
		for (var ad = this.ni(v), result = "", aE = 0; aE < ad.length; aE++) result = (result += ad[aE] < 10 ? "00" : ad[aE] < 100 ? "0" : "") + ad[aE].toString(10);
		return result
	}, this.nk = function(v) {
		for (var ad = new Array(Math.floor(v.length / 3)), aE = 0; aE < v.length; aE += 3) ad[Math.floor(aE / 3)] = parseInt(v.substring(aE, aE + 3));
		return this.lg(ad)
	}, this.a9 = function(v) {
		for (var aR, ad = [v.length], aE = 0; aE < v.length; aE++) ad[aE] = v.charCodeAt(aE) - 48;
		var result = "";
		for (aE = 0; aE < v.length; aE++) aE === v.length - 1 || 51 < 10 * ad[aE] + ad[aE + 1] ? result += ad[aE].toString() : (aR = 10 * ad[aE] + ad[aE + 1], result += String.fromCharCode(aR + (aR < 26 ? 65 : 71)), aE++);
		return result
	}, this.x = function(v) {
		for (var fV, result = "", aE = 0; aE < v.length; aE++) 48 <= (fV = v.charCodeAt(aE)) && fV < 58 ? result += String.fromCharCode(fV) : 65 <= fV && fV < 75 ? result += "0" + (fV - 65).toString() : 75 <= fV && fV < 91 ? result += (fV - 65)
			.toString() : 97 <= fV && fV < 123 && (result += (fV - 71).toString());
		return result
	}, this.nl = function(v) {
		for (var bU = v.length, ad = [], aE = 0; aE < bU; aE++)(fV = v.charCodeAt(aE)) < 58 ? ad.push(v[aE]) : (fV -= fV < 91 ? 65 : 71, ad.push(String(bJ(fV, 10))), ad.push(String(fV - 10 * bJ(fV, 10))));
		var bU = ad.length - 2,
			fV = 0,
			la = [];
		for (aE = 0; aE < bU; aE += 3) la[fV++] = parseInt(ad[aE] + ad[aE + 1] + ad[aE + 2]);
		return la
	}, this.nm = function() {
		for (var dO, nn = "", aE = 0; aE < 6; aE++) dO = 48 + em.random() % 36, dO += 58 <= dO ? 39 : 0, nn += String.fromCharCode(dO);
		return nn
	}
}

function no() {
	this.np = new nq, this.gD = new nr, this.b = function() {
		this.gD.b()
	}
}

function nq() {
	function nt() {
		if (2 === gg) return 1;
		gT.o4(), gg = 2, o5 = o6
	}

	function nw() {
		g7.o7(!0), gN.gf(!0), g9.gf(!0), gT.gf(), gb.o8(), aL.cx = !0, iI.o9(), aJ(0)
	}
	this.ns = function() {
		nt() || (cc.cN.k4(), g7.nu(247, 0), g7.nv(0, 59), gY.i1(2700), gZ.show(!1, !1, !0), nw())
	}, this.nx = function(ny) {
		var k1 = 0,
			nz = !1;
		nt() || (8 === fv ? ((nz = (k1 = ny < 0 ? bv[0] >= bv[1] ? 0 : 1 : ny) === bN) ? g7.nv(k1, 2) : g7.nv(1 - bN, 3), o0.nJ(k1), cc.cN.k0(k1)) : cS ? (nz = fW.fX[bN] === gU.o1(), 9 === fv ? (cc.cN.k0(nz ? gr[0] : 512), g7.o2(nz)) : gC.gD.fF(
			nz)) : (nz = (k1 = gr[0]) === bN, g7.o3(k1), cc.cN.k0(k1)), gZ.show(nz, !1), nw())
	}
}

function nr() {
	var oA;

	function oU(oC, bd) {
		for (var v = "", aE = bd; aE < oC.length && aE < bd + 4; aE++) v += (aE === bd ? "" : "   ") + "[" + fW.oM[oC[aE].id] + "]: " + oC[aE].oR.toFixed(Math.max(Math.floor(3 - Math.log10(oC[aE].oR)), 0));
		v.length && g7.oT(0, v, 45, 0, cM.iL.iM(225, 240, 255), dB.iR, -1, !1)
	}
	this.oB = 0, this.oC = null, this.b = function() {
		oA = 0, this.oB = 0, this.oC = null
	}, this.fF = function(nz) {
		var oD = fW.oE[gU.oF()];
		this.oB = gU.oG(), this.oC = function(oD, oB) {
				var aE, cV, bU, fX = fW.fX,
					oE = fW.oE,
					oM = fW.oM,
					oN = fW.oN,
					oO = bv,
					oP = e5,
					oQ = [],
					cm = 0;
				for (cV = oM.length - 1; 0 <= cV; cV--)
					if (oE[fX[oN[cV][0]]] === oD) {
						for (oQ.push({
								id: cV,
								oO: 0,
								player: oN[cV][0],
								oR: 0
							}), bU = oN[cV].length, aE = 0; aE < bU; aE++) oQ[cm].oO += oO[oN[cV][aE]];
						for (oQ[cm].oR = (1 + oS) * oP * oQ[cm].oO / oB, aE = 0; aE < cm; aE++)
							if (oQ[cm].oO > oQ[aE].oO) {
								oQ.splice(aE, 0, oQ[cm]), oQ.pop();
								break
							} cm++
					} 8 < oQ.length && (oQ.length = 8);
				for (; 0 < oQ.length && 0 === oQ[oQ.length - 1].oO;) oQ.pop();
				return oQ
			}(oD, this.oB), cv.oI("Team " + fW.cj[oD], 2, 1, 12),
			function(nz, oD) {
				var color;
				nz = nz ? (color = cM.iL.iM(10, 220, 10), "Congratulations! Team " + fW.cj[oD] + " won the game!") : (color = cM.iL.iM(200, 80, 80), "Our alliance was defeated! Team " + fW.cj[oD] + " won the game.");
				g7.oT(0, nz, 40, 0, color, dB.iR, -1, !1)
			}(nz, oD), 0 !== (nz = this.oC).length && (g7.oT(0, "The allied clans of the winning team have earned these glorious points:", 40, 0, dB.dC, dB.iR, -1, !1), oU(nz, 0), oU(nz, 4)), cc.cN.k6(), gY.i1(2700)
	}, this.gE = function() {
		2 === gg && -1 !== oA && (0 === oA ? oA = this.oC && 0 !== this.oC.length ? aL.aM + 8e3 : -1 : aL.aM < oA || (oA = -1, g7.oT(255, "Clan rankings and results can also be accessed under:", 735, 0, dB.dC, dB.iR, -1, !1), g7.oT(255,
			"territorial.io/clans", 736, 0, dB.dC, dB.iR, -1, !1), g7.oT(255, "territorial.io/clan-results", 736, 0, dB.dC, dB.iR, -1, !1)))
	}
}

function oV() {
	var oW, la;

	function oa() {
		var aE, cu = new ob;
		for (cu.lc(800), cu.ld(1, 0), cu.ld(3, 7), cu.ld(3, 1), cu.ld(2, m ? 2 : 12 <= q ? 1 : 0 < q ? 3 : 0), cu.ld(1, oc ? 1 : 0), cu.ld(1, od ? 1 : 0), cu.ld(1, 2 === oe ? 1 : 0), aE = 0; aE < la.length && !(cu.cm + 6 > 8 * cu.dF); aE++) cu.ld(6,
			la[aE]);
		oW.send(cu.k8), oW.onopen = null
	}
	window.addEventListener("error", function error(oX) {
		var oZ;
		0 === oX.lineno && 0 === oX.colno || (window.removeEventListener("error", error), oX = oX.lineno + " " + oX.colno + " " + oX.message, (oZ = new lT).b(), la = oZ.lW(oZ.lV(oX)), (oW = new WebSocket("wss://territorial.io/s52/")).onopen =
			oa, n ? n.showToast(oX) : alert(oX))
	})
}

function og() {
	var oh = -15e3,
		oi = !1;

	function cz(oX) {
		p1() || (oi = !0, p2(oX, 1), gB.p3(gB.p4), p5(Math.floor(lM * oX.clientX), Math.floor(lM * oX.clientY)))
	}

	function oq(oX) {
		oh = aL.aM, p2(oX, 1), gB.p3(gB.p4), 0 < oX.touches.length && (p6 = Math.floor(lM * oX.touches[0].clientX), p7 = Math.floor(lM * oX.touches[0].clientY), p8.oq(oX) || p5(p6, p7))
	}

	function p5(hD, hE) {
		0 === gg ? aT.cz(hD, hE) : gb.p9(hD, hE) || n6.cz(hD, hE) || lJ.cz(hD, hE) || gZ.cz(hD, hE) || n5.pA(hD, hE) || gR.cz(hD, hE) || cK.cz(hD, hE) || pB.pC(hD, hE) || gT.cz(hD, hE) || n5.pD(hD, hE)
	}

	function om(oX) {
		p1() || (oi = !0, p2(oX, 1), pE(Math.floor(lM * oX.clientX), Math.floor(lM * oX.clientY)))
	}

	function or(oX) {
		oh = aL.aM, p2(oX, 1), 0 < oX.touches.length && (p6 = Math.floor(lM * oX.touches[0].clientX), p7 = Math.floor(lM * oX.touches[0].clientY), p8.or(oX) || pE(p6, p7))
	}

	function pE(hD, hE) {
		0 === gg ? aT.om(hD, hE) : n6.om(hD, hE) || (cK.om(hD, hE), n5.pF() ? n5.om(hD, hE) : cf.pG ? cf.om(hD, hE) && (aL.cx = !0) : (gN.om(hD, hE), hv.hw && hv.om(hD, hE) && (aL.cx = !0)))
	}

	function oo(oX) {
		p1() || (p2(oX, 1), 0 === gg ? (aT.click(-1024, -1024), pH.pI()) : (gN.pJ(-1024, -1024), cK.om(-1024, -1024), cf.pK(), hv.hw && (hv.hw = !1)))
	}

	function on(oX) {
		p1() || (p2(oX, 1), pL(Math.floor(lM * oX.clientX), Math.floor(lM * oX.clientY), 2 === oX.button))
	}

	function click(oX) {
		p1() || p2(oX, 1)
	}

	function os(oX) {
		oh = aL.aM, p2(oX, 1), oX && oX.touches && 0 < oX.touches.length && 0 !== gg ? hv.hw = !1 : p8.pM() || pL(p6, p7, !1)
	}

	function ot(oX) {
		oh = aL.aM, p2(oX, 1), pL(p6, p7, !1)
	}

	function ou(oX) {
		pN.ou(oX)
	}

	function ov(oX) {
		pN.ov(oX)
	}

	function ow(oX) {
		p1() || p2(oX, 0)
	}

	function pL(hD, hE, pO) {
		0 === gg ? aT.click(hD, hE) : (gN.pJ(hD, hE), n6.pJ(), cf.pK(), hv.hw = !1, n5.click(hD, hE, pO) && (aL.cx = !0))
	}

	function op(oX) {
		var hD, hE, deltaY;
		p1() || (p2(oX, 1), gB.p3(gB.p4), hD = Math.floor(lM * oX.clientX), hE = Math.floor(lM * oX.clientY), deltaY = oX.deltaY, 1 === oX.deltaMode && (deltaY *= 16), 0 === gg ? aT.op(hD, hE, deltaY) : gN.op(hD, hE, deltaY) || (cf.pP(hD, hE) ? cf
			.op(deltaY) && (aL.cx = !0) : hv.op(hD, hE, +deltaY)))
	}

	function ox(oX) {
		p2(oX, 0)
	}

	function p2(oX, id) {
		0 === id && (pQ.pF || lJ.pF || pR.pF) || 1 === id && (pR.lI || lJ.lI) || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aT.pT() && oX.preventDefault()
	}

	function oy(oX) {
		p1() || aL.aM < 400 || (8 !== aT.pT() && aT.pU(oX) ? aL.cx = !0 : "Escape" === oX.key ? aT.aU() : "ArrowLeft" === oX.key || "a" === oX.key ? hz.pV(3) : "ArrowUp" === oX.key || "w" === oX.key ? hz.pV(0) : "ArrowRight" === oX.key || "d" === oX
			.key ? hz.pV(1) : "ArrowDown" === oX.key || "s" === oX.key ? hz.pV(2) : "h" === oX.key ? 1 <= gg && gb.pW(!hu) : " " === oX.key && gg && (pX.cI(), cK.cL && cK.pY(), cJ) && gb.pZ(!1))
	}

	function oz(oX) {
		p1() || ("ArrowLeft" === oX.key || "a" === oX.key ? hz.pa(3) : "ArrowUp" === oX.key || "w" === oX.key ? hz.pa(0) : "ArrowRight" === oX.key || "d" === oX.key ? hz.pa(1) : "ArrowDown" === oX.key || "s" === oX.key ? hz.pa(2) : "1" === oX.key ?
			cf.pb(.75) : "2" === oX.key ? cf.pb(7 / 8) : "3" === oX.key ? cf.pb(.9375) : "4" === oX.key ? cf.pb(31 / 32) : "5" === oX.key ? cf.pb(32 / 31) : "6" === oX.key ? cf.pb(16 / 15) : "7" === oX.key ? cf.pb(8 / 7) : "8" === oX.key ? cf.pb(
				4 / 3) : "+" === oX.key ? 0 !== gg && hv.op(Math.floor(hL / 2), Math.floor(d3 / 2), -200) : "-" === oX.key ? 0 !== gg && hv.op(Math.floor(hL / 2), Math.floor(d3 / 2), 200) : "c" === oX.key && 0 !== gg && n6.pc())
	}

	function p0() {
		"hidden" === document.visibilityState ? aL.pd() : aL.pe()
	}

	function p1() {
		return oh + 15e3 > aL.aM
	}

	function resize() {
		ph.pi()
	}
	this.oj = 0, this.ok = "", this.b = function() {
		ol.addEventListener("mousedown", cz, {
			passive: !1
		}), ol.addEventListener("mousemove", om, {
			passive: !1
		}), ol.addEventListener("mouseup", on, {
			passive: !1
		}), ol.addEventListener("click", click, {
			passive: !1
		}), ol.addEventListener("mouseleave", oo, {
			passive: !1
		}), ol.addEventListener("wheel", op, {
			passive: !1
		}), ol.addEventListener("touchstart", oq, {
			passive: !1
		}), ol.addEventListener("touchmove", or, {
			passive: !1
		}), ol.addEventListener("touchend", os, {
			passive: !1
		}), ol.addEventListener("touchcancel", ot, {
			passive: !1
		}), ol.addEventListener("dragover", ou), ol.addEventListener("drop", ov), ol.addEventListener("dblclick", ow), document.addEventListener("contextmenu", ox), document.addEventListener("keyup", oy), document.addEventListener("keydown",
			oz), document.addEventListener("visibilitychange", p0), window.addEventListener("resize", resize)
	}, this.pC = function(hD, hE) {
		return !!gb.cz(hD, hE) || !!(gN.cz(hD, hE) || hv.cz(hD, hE) || cf.cz(hD, hE) || g7.cz(hD, hE))
	}, this.pf = p1, this.pg = function() {
		return !oi || 0 < oh
	}
}

function pj() {
	this.iL = new pk, this.lx = new pl, this.cN = new pm
}

function pl() {
	this.ly = function(ad) {
		ad.fill(0)
	}, this.pn = function(ad) {
		for (var bU = ad.length, aE = 0; aE < bU; aE++) ad[aE] = []
	}, this.po = function(dZ, ci) {
		for (var da = eU.aZ, aE = 0; aE < 3; aE++) da[aE] = ci * dZ[aE];
		return da
	}, this.pp = function(dZ, da, pq) {
		for (var de = 0, aE = 0; aE < 3; aE++) de += Math.abs(dZ[aE] - da[aE]);
		return pq <= de
	}, this.pr = function(dZ, ps) {
		for (var aE = 0; aE < 3; aE++) dZ[aE] = cA.pt(dZ[aE] + ps, 0, 255);
		return dZ
	}
}

function pk() {
	this.pu = dD(32, 32, ["a", "b", "m"], 200), this.ln = function(cu, ez) {
		var fV = document.createElement("canvas");
		return fV.width = cu, fV.height = ez, fV
	}, this.getContext = function(dL, alpha) {
		return dL.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(n8, cu, ez) {
		return n8.getImageData(0, 0, cu, ez)
	}, this.iM = function(dO, pv, cV) {
		return "rgb(" + dO + "," + pv + "," + cV + ")"
	}, this.iO = function(dO, pv, cV, ej) {
		return "rgba(" + dO + "," + pv + "," + cV + "," + ej.toFixed(3) + ")"
	}, this.lK = function(pw, hD, hE, cu, ez) {
		var i4 = 1 / lM,
			px = .02 * i4 * ez,
			py = i4 * pz;
		pw.padding = px.toFixed(2) + "px", pw.border = py.toFixed(2) + "px solid " + dB.dC, pw.left = (i4 * hD).toFixed(2) + "px", pw.top = (i4 * hE).toFixed(2) + "px", pw.width = (i4 * cu - 2 * px - 2 * py).toFixed(2) + "px", pw.height = (i4 *
			ez - 2 * px - 2 * py).toFixed(2) + "px"
	}, this.lL = function(dF, type) {
		return dF = dF.toFixed(2), 0 === type ? dF + "px " + settings.fontName : 1 === type ? "bold " + dF + "px " + settings.fontName : 2 === type ? "small-caps " + dF + "px " + settings.fontName : "small-caps bold " + dF + "px " + settings
			.fontName
	}, this.textAlign = function(dM, id) {
		dM.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(dM, id) {
		dM.textBaseline = 1 === id ? "middle" : "bottom"
	}, this.kn = function(aR) {
		return 1 + aR * a0
	}
}

function q0() {
	document.q1[0].q2(".closeIcon {position: absolute; width: 24px; height: 24px; top: calc(50% - 12px);}", 0), document.q1[0].q2(
		".closeIcon:before {content: ' '; position: absolute; left: 50%; top: 0; width: 2px; height: 100%; background-color: #222; transform: translateX(-50%) rotate(45deg);}", 0), document.q1[0].q2(
		".closeIcon:after {content: ' '; position: absolute; left: 50%; top: 0; width: 2px; height: 100%; background-color: #222; transform: translateX(-50%) rotate(-45deg);}", 0), this.q3 = function() {
		var ki = document.createElement("div");
		return ki.q4 = "closeIcon", ki
	}
}

function pm() {
	this.cO = function(j) {
		return 0 === j ? 1 === gg && hr : 1 === j ? 1 === gg && !hr : 1 <= gg && !hr
	}, this.cP = function(player) {
		return 0 !== e6[player] && 2 !== e7[player]
	}, this.kH = function(q5, q6) {
		return q5 !== q6
	}, this.jo = function(player, aR) {
		return aR = this.q7(player, aR), bO[player] += aR, aR
	}, this.q7 = function(player, aR) {
		var q8 = bO[player];
		return aR = Math.min(aR, bv[player] * q9 - q8), aR = Math.min(aR, qA - q8), Math.max(aR, 0)
	}, this.kI = function(player, eA, qB, qC) {
		var q8 = bO[player],
			eA = cA.cB(q8 * (eA + 1), 1024),
			qB = cA.cB(qB * q8, 1024),
			eA = Math.min(eA, q8 - qB);
		return 10 === fv && (eA = gG.qE(player, eA)), eU.aX[0] = eA, eU.aX[1] = qB, qC <= eA
	}, this.jl = function(player, jQ, jP) {
		var player = bO[player],
			qD = cA.cB(64 * player, 1024);
		return jQ = Math.min(jQ, player - qD), qD += player = this.qG(jQ), jQ = this.q7(jP, jQ -= player), eU.aX[0] = jQ, eU.aX[1] = qD, 1 <= jQ
	}, this.jn = function(jQ, jP) {
		var qF = this.qG(jQ);
		return jQ = this.q7(jP, jQ -= qF), eU.aX[0] = jQ, eU.aX[1] = qF, 1 <= jQ
	}, this.e9 = function(player, qH) {
		return cA.cB(bO[player] * (qH + 1), 1024)
	}, this.qG = function(qI) {
		return cA.cB(Math.max(2142 - aL.fU(), 0) * qI, 2142)
	}, this.kW = function(player, qB) {
		bO[player] -= cA.cB(qB * bO[player], 1024)
	}, this.kK = function(player) {
		bO[player] -= eU.aX[0] + eU.aX[1]
	}, this.kJ = function(player, ed) {
		return (ed = Math.min(ed, bZ)) < bZ && 0 === e6[ed] && (ed = bZ), (eU.ab[0] = ed) === bZ || eo(player, ed)
	}, this.kM = function(player, jP) {
		return 0 !== e6[jP] && !eo(player, jP)
	}
}

function qJ() {
	this.ea = function(player, dg) {
		qK.mt(player, kD.dW(dg), kD.dY(dg)) && (aL.cx = !0), fx && this.fF()
	}, this.fF = function() {
		var aE;
		for (hr = !1, aE = 0; aE < e5; aE++) 0 !== e6[aE] && 0 === bv[aE] && qK.mz(aE);
		0 !== e6[bN] ? (bR.bS[7] = bv[bN], bR.bS[8] = bO[bN], cf.l(), g9.qL(), cJ || gY.hq(f3[bN] - 5, f6[bN] - 5, f2[bN] + 5, f5[bN] + 5), ga.b()) : gZ.show(!1, !1, !1, !0), g7.qM(18), g8.qN(), g8.gf(!0), gP.gL.qO(), kG = null, iI.qP = !0, iI
			.qQ(), fx && aJ(1)
	}
}
var fx, cJ, qR, qA, qS, bN, hu, hr, qT, cS, qU, fv, oS, kG, o0, qV, fG, bL, gJ, gK, gY, qK, w, n5, cK, g7, qu, gR, cv, cf, hv, pH, gQ, gN, g9, gZ, qv, qw, aT, qx, pR, qy, fy, qt, cq, bW, r, b5, bP, g8, qj, g1, qh, qz, hz, r0, em, h6, n1, p8, r1, ga,
	jK, ph, r2, r3, gT, gc, gB, gH, hR, r4, gI, gG, gS, pN, fr, r5, cc, gW, lJ, cM, dB, gb, lb, r6, k9, lm, r7, pB, r8, cA, kD, eO, eU, gP, gV, gC, az, pX, r9, aO, bZ = 512,
	mW = 512,
	q9 = 150,
	gg = 0,
	mm = 512,
	bK = 2;

function qW(qX, qY, nH, qZ, qa, qb) {
	hu = !1, cJ = qb, oS = qa, cS = (fv = qZ) < 7 || 9 === fv, o6 = e5 = nH.length, fx = 1 === o6, qU = 9 === (fv = 8 === (fv = 10 === fv && fx ? 7 : fv) && 2 !== e5 ? 7 : fv) ? 2 : fv + 2, qV = e5 <= 2 ? 30 : e5 <= 50 ? 40 : 50, qT = hr = !(fr.fs &&
			!fr.ft.qc) && (cS || e5 < 100), kG = hr ? new qJ : null, mm = 512, mW = bZ, fx && (mW = fy.qd()), fq = mW - e5, o5 = 0, bN = qY, em.qe(qX), g1.b(), qf(nH), fW.b(nH), gg = 1, qA = 15e8, qS = 1e9, bR.b(), qg(), qh.qi(), iI.b(), bP.b(),
	fB(), bW.b(nH), n1.b(), kD.b(), eO.b(), gC.b(), fG.b(), qj.lc(), qj.qk(), qK.b(), ql(), gW.b(qX, nH, qZ, qa), gU.b(), gV.b(), gP.b(), n6.b(), qm.putImageData(qn, 0, 0), gN.b(), hv.b(), cf.b(), gb.b(), gT.b(), gQ.b(), g9.b(), cK.b(), cv.b(), g7
		.b(), gR.b(), n5.b(), gZ.b(), gK.b(), bL.b(), gJ.b(), ay(), b5.b(), g8.b(), pX.b(), gG.b(), gI.b(), gS.b(), gH.b(), aO.k(!1), 8 === fv ? (o0 = new nG).b(nH) : o0 = null, aL.qo(), qp(), ga.b(), aL.cx = !0, cJ || fx && hr || aJ(1)
}

function qp() {
	gY.hp(), 0 === e6[bN] && gZ.show(!1, !0), g8.gf(!0)
}

function qq(qr) {
	lJ.lE(), gB.close(gB.p4, 3246), gg = 0, aL.qs(), aJ(0), aO.k(!0), qt.b(!qr)
}

function rA() {
	cA = new rB, r8 = new rC, fG = new ff, bL = new gi, gJ = new gw, gK = new gz, gY = new hW, qK = new mL, w = new nX, n5 = new rD, cK = new rE, g7 = new rF, qu = new rG, gR = new rH, cv = new rI, cf = new rJ, hv = new rK, pH = new rL, gQ = new rM,
		gN = new rN, g9 = new rO, gZ = new rP, qv = new rQ, qw = new rR, aT = new rS, (qx = new rT).lc(), pR = new rU, qy = new rV, fy = new rW, qt = new rX, cq = new rY, bW = new rZ, r = new ra, b5 = new rb, bP = new rc, g8 = new rd, qj = new re,
		g1 = new rf, qh = new rg, qz = new rh, hz = new ri, r0 = new rj, em = new rk, h6 = new rl, n1 = new rm, p8 = new rn, r1 = new ro, ga = new rp, jK = new rq, ph = new rr, r2 = new rs, r3 = new rt, gT = new ru, gc = new rv, gB = new rw, gH =
		new rx, hR = new ry, r4 = new rz, gI = new s0, gG = new s1, gS = new s2, pN = new s3, fr = new s4, r5 = new s5, cc = new jB, gW = new s6, lJ = new s7, cM = new pj, dB = new iK, gb = new s8, lb = new ob, (r6 = new nR).b(), k9 = new s9, (lm =
			new lT).b(), r7 = new sA, pB = new og, kD = new dP, eO = new sB, eU = new aV, gP = new sC, gV = new sD, gC = new no, (az = new sE).b(), pX = new cF, r9 = new sF, aO = new a
}

function rD() {
	var sG, hD, hE, sH, sI, sJ, aM, player, sK, kt, zoom, jx, sL;

	function sb(player) {
		for (var aE = jx.length - 1; 0 <= aE; aE--)
			if (jx[aE] === player) return 1
	}

	function sZ(sW) {
		var aE, bU;
		if (-1 !== sW)
			for (bU = sG.length, aE = 0; aE < bU; aE++)
				if (sG[aE].pF && sG[aE].hD + 1 === sW % 4 && sG[aE].hE + 1 === sW >> 2) return aE;
		return -1
	}

	function sY(d0, d1) {
		var pv = kt / 2;
		return d0 < hD - sH - 3 * pv || hD + 3 * sH + 5 * pv < d0 || d1 < hE - sH - 3 * pv || hE + 2 * sH + 3 * pv < d1 ? -1 : 4 * (d1 < hE - pv ? 0 : d1 < hE + sH + pv ? 1 : 2) + (d0 < hD - pv ? 0 : d0 < hD + sH + pv ? 1 : d0 < hD + 2 * sH + 3 *
			pv ? 2 : 3)
	}
	this.sM = function() {
		var aE, cV, sP = [dB.io, dB.ix, dB.iS, dB.j9, dB.j3];
		for (sG = new Array(8), aE = 0; aE < 8; aE++) sG[aE] = {
			id: aE,
			pF: !1,
			sQ: 0,
			dL: [],
			hD: 0,
			hE: 0
		};
		for (sG[0].colors = [0, 1, 2, 3], sG[0].hD = 0, sG[0].hE = 0, sG[1].colors = [0, 1, 4], sG[1].hD = 1, sG[1].hE = 0, sG[2].colors = [0, 2], sG[2].hD = -1, sG[2].hE = 0, sG[3].colors = [0], sG[3].hD = 0, sG[3].hE = 0, sG[4].colors = [0, 2],
			sG[4].hD = 1, sG[4].hE = 1, sG[5].colors = [3], sG[5].hD = 0, sG[5].hE = -1, sG[6].id = 20, sG[6].colors = [0], sG[6].hD = 1, sG[6].hE = -1, sG[7].id = 21, sG[7].colors = [0], sG[7].hD = 0, sG[7].hE = 1, aE = 0; aE < 8; aE++)
			for (cV = 0; cV < sG[aE].colors.length; cV++) sG[aE].dL.push(function(id, sR) {
				var dE = cq.get(3).height,
					sS = cM.iL.ln(dE, dE),
					dM = cM.iL.getContext(sS);
				20 === id ? dM.drawImage(cq.get(18), 0, 0) : 21 === id ? dM.drawImage(cq.sT("emojis"), -4 * dE, 0) : (function(cu, n8, sV) {
					n8.fillStyle = sV, n8.beginPath(), n8.arc(Math.floor(cu / 2), Math.floor(cu / 2), Math.floor(.47 * cu), 0, 2 * Math.PI), n8.fill()
				}(dE, dM, sR), dM.drawImage(cq.get(3), -id * dE, 0));
				return sS
			}(sG[aE].id, sP[sG[aE].colors[cV]]))
	}, this.sO = function() {
		return sG
	}, this.b = function() {
		jx = [], hD = hE = aM = 0, sI = sJ = -1e3, this.resize()
	}, this.resize = function() {
		sH = Math.floor((a0 ? .075 : .0468) * ck), zoom = sH / cq.get(3).height, kt = Math.floor(sH / 3)
	}, this.pA = function(d0, d1) {
		return !!this.pF() && (aL.cx = !0, !!aF.cz(d0, d1, player) || (d0 = function(d0, d1) {
			var sW, aE;
			if (sJ = sI = -1e3, sW = sY(d0, d1), -1 === (sW = sZ(sW))) return 0;
			if (1 === sG[sW].colors[sG[sW].sQ]) return 0;
			if (5 === sW) {
				if (! function() {
						var a3 = (new Date).getTime();
						sL + 4e3 < a3 && (jx = []);
						sL = a3
					}(), sb(player)) return 1;
				jx.push(player), 16 < jx.length && jx.shift()
			} else if (6 === sW) {
				for (aE = jx.length - 1; 0 <= aE; aE--) 0 === e6[jx[aE]] && jx.splice(aE, 1);
				0 < jx.length && (gS.sc(1, jx, !0) && cc.cN.jw(jx, player), jx = [])
			} else if (2 === sW) cc.cd.jO(cf.cg(), player);
			else if (3 === sW) hr && cc.cd.jJ(sK);
			else if (0 === sW)
				if (0 === sG[0].sQ) {
					if (qT && g9.sd() < 300) return 1;
					cc.cd.ce(cf.cg(), player)
				} else gH.se(player, cf.cg());
			else if (1 === sW) cc.cd.jS(cf.cg(), sK);
			else {
				if (7 === sW) return aF.show(d0, d1), 2;
				if (4 !== sW) return 0;
				gS.sc(0, [player], !0) && cc.cN.jt(player)
			}
			return 1
		}(d0, d1), this.lE(), 2 === d0 && (aF.pF = !0), 0 < d0))
	}, this.pD = function(d0, d1) {
		this.pF() || (sI = d0, sJ = d1, aM = (new Date).getTime())
	}, this.click = function(d0, d1, pO) {
		var dr = kD.eE(d0),
			ds = kD.eF(d1),
			dg = kD.eH(dr, ds),
			dq = kD.eJ(dg);
		return !(!kD.eG(dr, ds) || (dr = (a0 ? .025 : .0144) * ck, Math.abs(d0 - sI) > dr) || Math.abs(d1 - sJ) > dr || performance.now() > aM + 425) && (pO ? (function(d0, d1, dq) {
			bW.bX(dq) || -1 === (d0 = eO.jT.sw(d0, d1)) ? g7.sv(dq) : g7.sx(d0)
		}(d0, d1, dq), !1) : cK.cL || this.pF() || !kD.e8() || cJ ? (this.lE(), !1) : hr ? !!bW.bX(dq) && (sK = dg, sG[3].pF = !0, this.sh(d0, d1)) : (eO.jT.jW(dg) || eO.jT.si(d0, d1) || (2 === gg ? bW.bf(dq) && 0 < aF.sj && (player = bW
			.bg(dq), bW.sk(player)) && (sG[0].pF = !0, sG[0].sQ = 1, sG[7].pF = !0) : bW.sl(dq) || (sK = dg, eO.jT.jU(bN, dg) && (sG[0].pF = !0, sG[0].sQ = 1, sG[1].pF = !0, sG[1].sQ = eU.aa[2] ? 0 : 2), bW.sm(dq)) || (bW.bh(dq) ?
			(player = bZ, sn(bN) ? (sG[0].pF = !0, sG[0].sQ = 0) : so(bN, player) && (sG[0].pF = !0, sG[0].sQ = 3)) : (player = bW.bg(dq)) === bN ? 0 !== aF.sj && (sG[0].pF = !0, sG[0].sQ = 1, sG[7].pF = !0) : (sG[0].sQ = 1, sG[5]
				.pF = function(player) {
					return bW.sk(player) && !sb(player) && gS.sc(1, [player], !1)
				}(player), sG[7].pF = 1 <= aF.sj && bW.sk(player), eo(player, bN) ? (sG[4].pF = bW.sk(player) && !g8.sq(player) && gS.sc(0, [player], !1), sG[6].pF = function(player) {
					if (0 === jx.length) return !1;
					if ((new Date).getTime() > sL + 4e3) return !(jx = []);
					return !sb(player) && ! function(player) {
						var aE;
						if (cS)
							for (aE = jx.length - 1; 0 <= aE; aE--)
								if (!eo(player, jx[aE])) return 1;
						return
					}(player)
				}(player), ss(bN, player) ? (sG[0].sQ = 0, sG[0].pF = !0) : so(bN, player) && (sG[0].sQ = 3, sG[0].pF = !0), sG[0].pF = this.st()) : (sG[2].pF = !0, sG[0].pF = !0)))), this.sh(d0, d1)))
	}, this.sh = function(d0, d1) {
		return hD = d0 - Math.floor(sH / 2), hE = d1 - Math.floor(sH / 2), !!this.pF()
	}, this.om = function(d0, d1) {
		return !!this.pF() && (aF.pF ? !aF.sz(d0, d1) && (aF.t0(), aF.pF = !1, aL.cx = !0) : function(t2, d0, d1) {
			d0 = sY(d0, d1);
			if (0 <= sZ(d0)) return !1;
			if ((1 === d0 || 6 === d0) && 0 <= sZ(2)) return !1;
			if ((6 === d0 || 9 === d0) && 0 <= sZ(10)) return !1;
			return t2.lE(), aL.cx = !0
		}(this, d0, d1))
	}, this.lE = function() {
		for (var aE = sG.length - 1; 0 <= aE; aE--) sG[aE].pF = !1, sG[aE].sQ = 0;
		aF.pF = !1
	}, this.pF = function() {
		return this.st() || aF.pF
	}, this.st = function() {
		for (var bU = sG.length, aE = 0; aE < bU; aE++)
			if (sG[aE].pF) return !0;
		return !1
	}, this.d7 = function() {
		if (this.pF())
			if (aF.pF) aF.d7();
			else {
				var aE, dM = d8,
					cV = sG,
					bU = cV.length,
					t4 = (sH + kt) / zoom;
				for (dM.imageSmoothingEnabled = !0, dM.setTransform(zoom, 0, 0, zoom, hD, hE), aE = 0; aE < bU; aE++) cV[aE].pF && d8.drawImage(cV[aE].dL[cV[aE].sQ], cV[aE].hD * t4, cV[aE].hE * t4);
				dM.imageSmoothingEnabled = !1, dM.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function rE() {
	var ez, dL, ct, t6, t7, t5 = ["Quit Game", "Surrender", "Statistics", "Replay"];

	function t8() {
		var t9, n8 = dL.getContext("2d", {
			alpha: !0
		});
		n8.clearRect(0, 0, ez, ez), n8.fillStyle = dB.iP, n8.fillRect(0, 0, ez, ez), 0 === t6 && (n8.fillStyle = dB.iU, n8.fillRect(0, 0, ez, ez)), n8.fillStyle = dB.dC, n8.fillRect(0, 0, ez, 1), n8.fillRect(0, 0, 1, ez), n8.fillRect(0, ez - 1, ez,
			1), n8.fillRect(ez - 1, 0, 1, ez), t9 = .9 * ez / cq.get(0).width, n8.imageSmoothingEnabled = !0, n8.setTransform(t9, 0, 0, t9, Math.floor((ez - t9 * cq.get(0).width) / 2), Math.floor((ez - t9 * cq.get(0).height) / 2)), n8.drawImage(
			cq.get(0), 0, 0), n8.setTransform(1, 0, 0, 1, 0, 0)
	}

	function tC(d0, d1) {
		if (!cK.cL) return d0 <= ez + ko && d1 >= cf.hE ? 0 : -1;
		if (d0 <= 4 * ez + ko) {
			if (d1 >= cf.hE) return 0;
			if (d1 >= cf.hE - ez - t7 * ko) return tF(2) ? 2 : -1;
			if (d1 >= cf.hE - 2 * (ez + t7 * ko)) return tF(3) ? 3 : -1;
			if (d1 >= cf.hE - 3 * (ez + t7 * ko)) return tF(4) ? 4 : -1
		} else if (d0 <= 7 * ez + ko && d1 >= cf.hE - ez - t7 * ko) return 1;
		return -1
	}

	function tF(aE) {
		return 2 === aE ? tD(2) || tD(3) || tD(4) : 3 === aE && tD(3) || tD(4)
	}

	function tD(aE) {
		return 2 === aE ? !cJ && cK.tK(bN) : 3 === aE ? 2 <= bR.tL : lJ.tM()
	}

	function tO(aE, sR) {
		d8.setTransform(1, 0, 0, 1, ko, cf.hE - aE * t7 * ko - aE * ez), d8.fillStyle = dB.iP, d8.fillRect(0, 0, 4 * ez, ez), t6 === aE + 1 && sR === dB.dC && (d8.fillStyle = dB.iU, d8.fillRect(0, 0, 4 * ez, ez)), d8.fillStyle = sR, d8.fillRect(0, 0,
			4 * ez, 1), d8.fillRect(0, 0, 1, ez), d8.fillRect(4 * ez, 0, 1, ez), d8.fillRect(0, ez - 1, 4 * ez, 1), d8.fillText(t5[aE], 2 * ez, .54 * ez)
	}
	this.cL = !1, this.b = function() {
		t6 = -1, this.cL = !1, t7 = a0 ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		ez = cf.ez, (dL = document.createElement("canvas")).width = ez, dL.height = ez, ct = cn + Math.floor((a0 ? .5 : .45) * ez) + co, t8()
	}, this.pY = function() {
		this.cL = !this.cL, this.cL ? (gb.pW(!1), cJ && gb.tA && gb.pZ(!0), this.tB()) : (t6 = -1, t8(), fx && 1 === gg && !hr && aJ(1)), aL.cx = !0
	}, this.tB = function() {
		(fx || cJ) && 1 === gg && (gN.gf(!0), hr || setTimeout(function() {
			iI.o9()
		}, 0), aJ(0))
	}, this.cz = function(d0, d1) {
		var sQ = tC(d0, d1);
		if (this.cL) {
			if (hu) return 0 <= sQ && gb.pW(!1), !cJ;
			if (0 === sQ) qq();
			else if (1 === sQ) this.pY();
			else if (2 === sQ) tD(sQ) && (cc.cd.jj(), this.pY());
			else if (3 === sQ) tD(sQ) && (n6.pY(), aL.cx = !0, lJ.pF) && lJ.lE();
			else if (4 === sQ) tD(sQ) && (lJ.pF ? lJ.lE() : lJ.show(), n6.pF) && n6.pY();
			else {
				if (!(fx || 1 !== gg || cJ || n6.pF || lJ.pF) && (cK.pY(), 1)) return !1;
				pB.pC(d0, d1) || n5.pD(d0, d1)
			}
			return !0
		}
		return 0 === sQ && (this.pY(), !0)
	}, this.om = function(d0, d1) {
		d0 = tC(d0, d1);
		d0 !== t6 && (t6 = d0, this.cL || t8(), aL.cx = !0)
	}, this.d7 = function() {
		var cu;
		this.cL ? (cu = Math.floor(5.5 * ez), d8.setTransform(1, 0, 0, 1, ko, cf.hE), d8.fillStyle = dB.iP, d8.fillRect(0, 0, cu, ez), 0 === t6 ? (d8.fillStyle = dB.iU, d8.fillRect(0, 0, 4 * ez, ez)) : 1 === t6 && (d8.fillStyle = dB.iU, d8
				.fillRect(4 * ez, 0, Math.floor(1.5 * ez), ez)), d8.fillStyle = dB.dC, d8.fillRect(0, 0, cu, 1), d8.fillRect(0, 0, 1, ez), d8.fillRect(4 * ez, 0, 1, ez), d8.fillRect(0, ez - 1, cu, 1), d8.fillRect(cu - 1, 0, 1, ez), d8.font =
			ct, d8.textBaseline = d9, d8.textAlign = dA, d8.fillText(t5[0], 2 * ez, .54 * ez), cu = .4 * ez, cK.tN(ko + 4 * ez + (1.5 * ez - cu) / 2, cf.hE + .3 * ez, cu), tF(2) && tO(1, tD(2) ? dB.dC : dB.ia), tF(3) && tO(2, tD(3) ? dB.dC :
				dB.ia), tF(4) && tO(3, dB.dC), d8.setTransform(1, 0, 0, 1, 0, 0)) : d8.drawImage(dL, ko, cf.hE)
	}, this.tK = function(player) {
		return 0 !== e6[player] && 2 !== gg && bW.sk(player)
	}, this.tN = function(hD, hE, bU) {
		d8.setTransform(1, 0, 0, 1, hD, hE), d8.lineWidth = pz, d8.strokeStyle = dB.dC, d8.beginPath(), d8.moveTo(0, 0), d8.lineTo(bU, bU), d8.moveTo(0, bU), d8.lineTo(bU, 0), d8.stroke()
	}
}

function rF() {
	var tP, ez, py, tQ, tR, tS, tT, tU, tV;

	function d6() {
		return cf.tp(g7.tl()) ? gT.pF ? cf.hE - cf.ez - 2 * py : cf.hE - py : gb.tp(g7.to()) ? gT.pF ? gb.d6() - cf.ez - 2 * py : gb.d6() - py : gT.pF ? a2 - cf.ez - (hR.tq() + 1) * py : a2 - hR.tq() * ko
	}

	function td(a3, v, id, bc, tg, th, m8, ti, tj) {
		var aE, n8, tm, sS, tt, tu = void 0 !== tj,
			cu = Math.floor(cv.measureText(v, g7.ct) + 1.5 * tQ + (tu ? ez : 1.5 * tQ));
		if (aL.cx = !0, a1 < cu + py && !tu && 50 !== id && 20 < v.length) tm = Math.floor(.5 * v.length), td(a3, v.substring(0, tm), id, bc, tg, th, m8, ti, tj), td(a3, v.substring(tm), id, bc, tg, th, m8, ti, tj);
		else if (tm = cu + (50 === id ? tR : 0), (sS = document.createElement("canvas")).width = cu, sS.height = ez, (n8 = sS.getContext("2d", {
				alpha: !0
			})).font = g7.ct, n8.textBaseline = d9, n8.textAlign = tv, n8.clearRect(0, 0, cu, ez), n8.fillStyle = th, n8.fillRect(0, 0, cu, ez), n8.fillStyle = tg, n8.fillText(v, Math.floor(1.5 * tQ), Math.floor(ez / 2)), tu && (tu = ez / aF.cu, n8
				.imageSmoothingEnabled = !0, n8.setTransform(tu, 0, 0, tu, cu - ez, 0), n8.drawImage(aF.sS[tj], 0, 0)), 0 === (tt = {
				aM: a3,
				v: v,
				id: id,
				player: bc,
				dL: sS,
				tg: tg,
				th: th,
				cu: cu,
				tm: tm,
				m8: m8,
				ti: ti,
				tj: tj
			}).aM || 0 < tP.length && 0 < tP[0].aM) tP.unshift(tt);
		else {
			for (aE = 1; aE < tP.length; aE++)
				if (0 < tP[aE].aM) return void tP.splice(aE, 0, tt);
			tP.push(tt)
		}
	}

	function te(dO, pv, cV) {
		return "rgb(" + dO + "," + pv + "," + cV + ")"
	}

	function u0(id, uH) {
		for (var bU = tP.length, aE = 0; aE < bU; aE++) tP[aE].id === id && uH-- <= 0 && (tP.splice(aE, 1), aE--, bU--)
	}

	function tw(id, player) {
		for (var uI = !1, aE = tP.length - 1; 0 <= aE; aE--) tP[aE].id !== id || player !== bZ && tP[aE].player !== player || (tP.splice(aE, 1), uI = !0);
		return uI
	}

	function uM(aR) {
		return 1 === aR ? "" : "s"
	}

	function uP(v, ae, ag) {
		ae && (v += gR.hU(ae)), ag && (v += " (" + g9.uQ(100 * ae / ag, 1) + ")"), td(340, v, 6, 0, te(215, 245, 255), dB.iR, -1, !1)
	}

	function uX(player, uY) {
		return (fx || e5 <= player || uY || hR.hS.uZ ? hV : ua)[player]
	}
	this.b = function() {
		tT = a0 ? 7 : 12, tS = {
			nH: [tU = 0, 0, 0],
			tW: [0, 0, 0],
			hn: [220, 180, 180],
			tX: [0, 0, 0],
			fV: [0, 0, 0],
			tY: [" were erased.", " left the game.", " surrendered."],
			tZ: [" was erased by ", " left the game.", " surrendered."]
		}, tP = [], this.resize(), hr && this.nv(0, 18), uP("Map: " + az.ft.mI[az.mJ].name), uP("Dimension: " + (az.b0 - 2) + "x" + (az.b1 - 2)), uP("Overall Pixels: ", qh.uR), qh.uR !== qh.uS && uP("Land: ", qh.uS, qh.uR), 0 < qh.uT && uP(
			"Water: ", qh.uT, qh.uR), 0 < qh.uU && uP("Mountains: ", qh.uU, qh.uR), 10 === fv && td(120, "Full sending against human players is disabled.", 6, 0, te(235, 255, 120), dB.iR, -1, !1), this.tb()
	}, this.tb = function() {
		var aE, bU;
		if (fr.fs)
			for (bU = fr.ft.tc.length, aE = 0; aE < bU; aE++) td(400, fr.ft.tc[aE], 6, 0, te(255, 255, 255), dB.iR, -1, !1)
	}, this.resize = function() {
		var tf, aE;
		if (ez = (ez = Math.floor((a0 ? .031 : .0249) * ck)) < 10 ? 10 : ez, this.cs = Math.floor(2 * ez / 3), this.ct = cn + this.cs + co, py = ko, tQ = Math.floor(ez / 5), 0 < tP.length)
			for (tf = tP, tP = [], aE = tf.length - 1; 0 <= aE; aE--) td(tf[aE].aM, tf[aE].v, tf[aE].id, tf[aE].player, tf[aE].tg, tf[aE].th, tf[aE].m8, tf[aE].ti, tf[aE].tj);
		this.tk()
	}, this.tk = function() {
		tV = document.createElement("canvas");
		var v = "Accept",
			n8 = (tR = cv.measureText(v, this.ct) + 5 * tQ, tV.height = ez, tV.width = tR, tV.getContext("2d", {
				alpha: !0
			}));
		n8.font = this.ct, n8.textBaseline = d9, n8.textAlign = dA, n8.clearRect(0, 0, tR, ez), n8.fillStyle = dB.ik, n8.fillRect(0, 0, tR, ez), n8.fillStyle = dB.dC, n8.fillText(v, Math.floor(tR / 2), Math.floor(ez / 2))
	}, this.tl = function() {
		var bU;
		return gT.pF ? gT.cu : 0 === (bU = tP.length) ? 0 : 1 === bU ? tP[0].tm : tn(tP[0].tm, tP[1].tm)
	}, this.to = function() {
		var bU = tP.length;
		return gT.pF ? bU ? tn(gT.cu, tP[0].tm) : gT.cu : 0 === bU ? 0 : 1 === bU ? tP[0].tm : 2 === bU ? tn(tP[0].tm, tP[1].tm) : tn(tn(tP[0].tm, tP[1].tm), tP[2].tm)
	}, this.cz = function(hD, hE) {
		for (var tr, ts = d6(), aE = tP.length - 1; 0 <= aE; aE--)
			if ((tr = ts - (aE + 1) * ez) <= hE && hE < tr + ez) return 50 === tP[aE].id ? hD >= hL - tR - py - tP[aE].cu && (hL - tR - py <= hD ? cc.cN.jt(tP[aE].player) : gY.hs(tP[aE].player, 800, !1, 0), !0) : hD >= hL - tP[aE].cu - py && (
				736 === tP[aE].id ? window.open("https://" + tP[aE].v, "_blank") : tP[aE].ti && (gY.hs(tP[aE].player, 800, !1, 0), 0 <= tP[aE].m8) && (tr = tP[aE].m8, tP[aE].m8 = tP[aE].player, tP[aE].player = tr), !0);
		return !1
	}, this.oT = function(a3, v, id, bc, tg, th, m8, ti, tj) {
		td(a3, v, id, bc, tg, th, m8, ti, tj)
	}, this.qM = function(id) {
		for (var aE = tP.length - 1; 0 <= aE; aE--) tP[aE].id === id && (tP[aE].aM = 1)
	}, this.nv = function(player, id) {
		0 === id ? (bR.bS[player < e5 ? 4 : 3]++, cv.ea(player, 0), td(a0 ? 100 : 160, "You erased " + hV[player] + ".", 0, player, "rgb(10,220,10)", dB.iR, -1, !1)) : 1 === id ? (tw(50, bZ), cv.ea(player, 1), td(360, "You were erased by " + hV[
				player] + ".", 0, player, "rgb(255,40,40)", dB.iR, -1, !0), gY.hs(player, 2700, !1, 0)) : 2 === id ? (cv.ea(player, 2), td(0, "Congratulations! You won the game.", 0, player, "rgb(10,255,255)", dB.iR, -1, !0), gY.hs(player, 2700,
				!1, 0)) : 3 === id ? (cv.ea(player, 2), td(0, hV[player] + " won the game.", 0, player, dB.dC, dB.iR, -1, !0), gY.hs(player, 2700, !1, 0)) : 4 === id ? (o6--, o5--, this.tx(1, player, player)) : 5 === id ? 2 !== e7[player] && bW
			.sk(bN) && (function(id, gu) {
					var aE, uA = 0,
						bU = tP.length;
					for (aE = 0; aE < bU; aE++)
						if (tP[aE].id === id && gu <= ++uA) return tP.splice(aE, 1)
				}(1, 5), g8.tz(player) ? td(180, hV[player] + " broke the non-aggression pact.", 1, player, te(255, 200, 180), dB.iR, -1, !0) : (u0(573, 0), td(180, hV[player] + " is attacking you!", 573, player, "rgb(255,70,10)", dB.iR, -1, !
				0))) : 18 === id ? td(255, "Choose your start position!", 18, 0, dB.dC, dB.iR, -1, !1) : 21 === id ? td(220, "You surrendered!", id, 0, "rgb(255,40,40)", dB.iR, -1, !1) : 22 === id ? this.tx(2, player, player) : 59 === id && td(0,
				"The game ended in a stalemate!", id, 0, dB.j8, dB.iR, 0, !1)
	}, this.u1 = function(u2) {
		td(200, "Error [" + u2 + "]", 94, 0, dB.dC, dB.iv, -1, !1)
	}, this.o3 = function(ny) {
		if (bN === ny) wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter);
		cv.ea(ny, 2), td(0, e5 < 100 ? hV[ny] + " won the game." : hV[ny] + " was immortalized!", 3, ny, dB.dC, dB.iR, -1, !0), td(0, "Your Current Win Count is Now " + wins_counter, 3, ny, dB.dC, dB.iR, -1, !0), gY.hs(ny, 2700, !1, 0)
	}, this.sv = function(dq) {
		var v, u3 = "(" + kD.dW(dq >> 2) + ", " + kD.dY(dq >> 2) + ")",
			ti = !1,
			player = 0;
		bW.bX(dq) ? bW.bh(dq) ? u3 = "Unclaimed Land " + u3 : (player = bW.bg(dq), v = "Player: " + hV[player], u3 = (v += "   Balance: " + gR.hU(bO[player])) + ("   Territory: " + gR.hU(bv[player])) + ("   Coords: " + u3), ti = !0) : u3 = bW.sl(
			dq) ? "Mountains " + u3 : "Water " + u3, aL.cx = !0, u0(55, 0), td(220, u3, 55, player, dB.dC, dB.iR, -1, ti)
	}, this.sx = function(u4) {
		var ca = eO.gL,
			player = ca.u5[u4],
			ca = "Ship Owner: " + hV[player] + "   Strength: " + gR.hU(ca.u6[u4]);
		aL.cx = !0, u0(55, 0), td(220, ca, 55, player, dB.dC, dB.iR, -1, !0)
	}, this.jc = function(u7, u8, jd) {
		u7 === bN ? td(175, " Message to " + hV[u8] + ": ", 1001, u8, te(200, 255, 210), dB.iR, -1, !0, jd) : this.u9(u7, jd)
	}, this.u9 = function(u7, jd) {
		u0(1e3, 0), td(175, hV[u7] + ": ", 1e3, u7, dB.dC, "rgba(5,60,25,0.9)", -1, !0, jd)
	}, this.o2 = function(nz) {
		var u2;
		nz ? (u2 = "Humanity triumphs! The undead have been beaten back.", cv.oI("The Resistance", 2, 1, 12), td(0, u2, 40, 0, "rgb(10,220,10)", dB.iR, -1, !1)) : (u2 = "Mankind's era ends, overrun by the relentless tide of the undead.", cv.oI(
			"The Virus", 2, 0, 16), td(0, u2, 41, 0, "rgb(200,80,80)", dB.iR, -1, !1)), gY.i1(2700)
	}, this.nI = function(nH) {
		td(300, nH[0].name + " [" + o0.nO(nH[0].nL) + "] vs " + nH[1].name + " [" + o0.nO(nH[1].nL) + "]", 65, 0, dB.hP, "rgba(100,255,255,0.75)", -1, !1)
	}, this.uB = function(u2) {
		td(200, u2, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.uC = function() {
		td(0, "Agreeing to peace concludes the game in a stalemate!", 247, 0, dB.j7, dB.iR, -1, !1)
	}, this.nQ = function(nH, nN, nP, uD) {
		1 === gB.uE() && (td(0, nH[0].name + ": " + o0.nO(nH[0].nL) + " -> " + nN, 66, 0, dB.dC, uD[0], -1, !1), td(0, nH[1].name + ": " + o0.nO(nH[1].nL) + " -> " + nP, 66, 1, dB.dC, uD[1], -1, !1))
	}, this.ju = function(player, id) {
		0 === id ? tw(50, player) ? (td(128, "You signed a non-aggression pact with " + hV[player] + ".", 52, player, te(180, 255, 180), dB.iR, -1, !0), g8.kY(player, 2, 255)) : td(384, "You asked " + hV[player] +
			" to sign a non-aggression pact.", 51, player, te(210, 210, 255), dB.iR, -1, !0) : tw(51, player) ? (td(128, hV[player] + " accepted the non-aggression pact.", 52, player, dB.dC, "rgba(60,120,10,0.9)", -1, !0), g8.kY(player, 2,
			255)) : (td(384, hV[player] + " requested a non-aggression pact.", 50, player, dB.dC, "rgba(90,90,90,0.9)", -1, !0), g8.kY(player, 2, 96))
	}, this.jy = function(nH, target) {
		var v = "You ",
			color = function(nH) {
				var aE;
				for (aE = nH.length - 1; 0 <= aE; aE--)
					if (2 * bv[nH[aE]] > bv[bN]) return;
				return 1
			}(nH) ? (v += "ordered ", te(255, 235, 210)) : (v += "asked ", te(210, 255, 210));
		1 < nH.length ? td(230, v + nH.length + " players to attack " + hV[target] + ".", 66, target, color, dB.iR, -1, !0) : td(230, v + hV[nH[0]] + " to attack " + hV[target] + ".", 66, nH[0], color, dB.iR, target, !0)
	}, this.uG = function(player, target) {
		td(230, hV[player] + " suggested you attack " + hV[target] + ".", 66, player, dB.dC, "rgba(75,65,5,0.9)", target, !0)
	}, this.nu = function(id, player) {
		tw(id, player)
	}, this.jM = function() {
		var cm;
		100 <= bO[bN] || (-1 === (cm = function(id) {
			for (var aE = tP.length - 1; 0 <= aE; aE--)
				if (tP[aE].id === id) return aE;
			return -1
		}(143)) ? td(80, "Your balance is too low!", 143, 0, dB.dC, dB.iR, -1, !1) : tP[cm].aM = 80)
	}, this.jp = function(uK, uL, player) {
		2 !== e7[bN] && (td(200, "You exported " + gR.hU(uK) + " resource" + uM(uK) + " to " + hV[player] + ".", 30, player, "rgb(190,255,190)", dB.iR, -1, !0), uL) && td(30, "A tax of " + gR.hU(uL) + " unit" + uM(uL) + " was deducted.", 30, 0,
			dB.dC, dB.iR, -1, !1)
	}, this.uN = function(uK, player) {
		var a3, uO;
		2 !== e7[bN] && (uO = 2 === e7[player] || e5 <= player, a3 = 200 - 20 * tP.length, u0(31, 0), td(a3 < 80 ? 80 : a3, (uO ? "A bot" : hV[player]) + " supported you with " + gR.hU(uK) + " resource" + uM(uK) + ".", 31, player, dB.hP, uO ?
			"rgba(205,205,205,0.9)" : "rgba(205,255,205,0.9)", -1, !0))
	}, this.o7 = function(uV) {
		for (var fV = aL.fU(), aE = 2; 0 <= aE; aE--) 0 < tS.tX[aE] && (uV || tS.fV[aE] < fV - 220) && this.uW(aE)
	}, this.uW = function(id) {
		var v, bU = tS.tX[id],
			player = tS.nH[id];
		tS.tX[id] = 0, 1 === bU ? (v = uX(player, 0 === id) + tS.tZ[id], 0 === id && (v += uX(tS.tW[id], !0) + "."), u0(7, 0), td(tS.hn[id], v, 7, tS.tW[id], dB.dC, dB.iR, -1, !0)) : 2 <= bU && (v = uX(player, 0 === id) + " and " + (bU - 1) +
			" other player" + uM(bU - 1) + tS.tY[id], u0(7, 0), td(tS.hn[id], v, 7, player, dB.dC, dB.iR, -1, !1))
	}, this.tx = function(id, m7, m8) {
		var fV = aL.fU(),
			bU = tS.tX[id] + 1;
		tS.tX[id]++, tS.nH[id] = m7, tS.tW[id] = m8, 1 === bU && (tS.fV[id] = fV), (1 === bU && (o6 < 32 || 2 === gg) || 1 < bU && (tS.fV[id] < fV - 140 || 2 === gg)) && this.uW(id)
	}, this.fF = function() {
		for (var de = (de = tP.length - tT) <= 1 ? 1 : de * de, aE = tP.length - 1; 0 <= aE; aE--) 0 < tP[aE].aM && (tP[aE].aM -= de, tP[aE].aM <= 0) && (aL.cx = !0, tP.splice(aE, 1));
		! function() {
			var uH, aE;
			if (128 !== tU && !(++tU < 128))
				for (uH = 5, aE = fY - 1; 0 <= aE; aE--) 1 === e7[fZ[aE]] && 0 < uH-- && td(240, hV[fZ[aE]] + " joined the game.", 1, fZ[aE], dB.hP, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.o7(!1)
	}, this.d7 = function() {
		for (var mV, hE = d6(), aE = tP.length - 1; 0 <= aE; aE--) mV = hE - (aE + 1) * ez, 50 === tP[aE].id ? (d8.drawImage(tP[aE].dL, hL - tP[aE].cu - tR - py, mV), d8.drawImage(tV, hL - tR - py, mV)) : d8.drawImage(tP[aE].dL, hL - tP[aE].cu -
			py, mV)
	}
}

function uc() {
	this.cu = 0, this.ez = 0, this.nD = 0, this.ud = 0, this.ue = 0, this.cs = 0, this.cm = -1, this.t5 = ["Accept Cookies", "More Information", "Decline"], this.colors = ["rgba(0,255,0,0.4)", "rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"], this.pF = !1,
		this.b = function() {
			this.resize(), this.pF = q < 5 && !m && 0 === r.aA()
		}, this.resize = function() {
			this.cu = Math.floor(2.8 * Math.floor((a0 ? .09 : .062) * ck)), this.ez = Math.floor(+this.cu), this.nD = Math.floor(.06 * this.cu), this.nE = this.cu - 2 * this.nD, this.ud = this.nD, this.ue = (this.ez - (this.t5.length + 1) * this
				.ud) / this.t5.length, this.cs = Math.floor(.3 * this.ue)
		}, this.cz = function(d0, d1) {
			return !!this.pF && -1 !== (d0 = this.uf(d0, d1)) && (0 === d0 ? (r.ug(2), this.pF = !1) : 1 === d0 ? pQ.b(r8.uh, !0) : 2 === d0 && (r.ug(1), this.pF = !1), aL.cx = !0)
		}, this.om = function(d0, d1) {
			var a3;
			return !!this.pF && (a3 = this.cm, this.cm = this.uf(d0, d1), a3 !== this.cm && (aL.cx = !0), -1 !== this.cm)
		}, this.uf = function(d0, d1) {
			return d0 -= d2, d1 -= Math.floor(d3 - this.ez - d2), d0 < 0 || d1 < 0 || d0 >= this.cu || d1 >= this.ez ? -1 : (d0 = Math.floor((d1 - .5 * this.ud) / ((this.ez - this.ud) / this.t5.length))) < 0 ? 0 : d0 >= this.t5.length ? this.t5
				.length - 1 : d0
		}, this.d7 = function() {
			this.pF && this.ui()
		}, this.ui = function() {
			var hD = d2,
				hE = Math.floor(d3 - this.ez - d2);
			d8.setTransform(1, 0, 0, 1, hD, hE), d8.fillStyle = dB.iR, d8.fillRect(0, 0, this.cu, this.ez), d8.textBaseline = d9, d8.textAlign = dA, d8.strokeStyle = dB.dC, d8.font = cn + this.cs + co, d8.strokeRect(0, 0, this.cu, this.ez);
			for (var aE = this.t5.length - 1; 0 <= aE; aE--) d8.setTransform(1, 0, 0, 1, hD + this.nD, hE + this.ud + aE * (this.ud + this.ue)), d8.fillStyle = this.colors[aE], d8.fillRect(0, 0, this.nE, this.ue), this.cm === aE && (d8.fillStyle = dB
				.iX, d8.fillRect(0, 0, this.nE, this.ue)), d8.fillStyle = dB.dC, d8.fillText(this.t5[aE], this.nE / 2, .54 * this.ue), d8.strokeRect(0, 0, this.nE, this.ue);
			d8.setTransform(1, 0, 0, 1, 0, 0)
		}
}

function rG() {
	var uj, uk, ul, cu, ez, font;

	function up(uq) {
		return uq < 10 ? "0" + uq : String(uq)
	}
	this.b = function() {
		void 0 === cu && this.resize(), this.setTime()
	}, this.resize = function() {
		cu = Math.floor((a0 ? .53 : .36) * ck), ez = Math.floor(.065 * cu), font = cn + Math.floor(.9 * ez) + co, ul--, this.setTime()
	}, this.fF = function() {
		this.setTime() && (aL.cx = !0)
	}, this.setTime = function() {
		var a3 = new Date,
			un = a3.getUTCMinutes(),
			a3 = a3.getUTCSeconds();
		return uk = 3600 - 60 * un - a3, uk %= 900, uj = "Next Contest: " + up(Math.floor(uk / 60)) + ":" + up(uk % 60), ul !== (ul = 60 * un + a3) && (cu = cv.measureText(uj, font), cu += Math.floor(.4 * ez), !0)
	}, this.d7 = function() {
		d8.lineWidth = 1 + Math.floor(ez / 15), 7 === aT.pT() && r2.ur() + 2 * d2 > .5 * (d3 - cu) ? d8.translate(hL - ez, Math.floor(r2.ur() + 2 * d2 + cu)) : d8.translate(hL - ez, Math.floor(.5 * (d3 + cu))), d8.rotate(-Math.PI / 2), d8
			.fillStyle = dB.dC, d8.fillRect(0, 0, cu, ez), d8.strokeStyle = dB.hP, d8.strokeRect(0, 0, cu, ez + 10), d8.fillStyle = dB.hP, d8.font = font, d8.textBaseline = d9, d8.textAlign = dA, d8.fillText(uj, Math.floor(cu / 2), Math.floor(
				.59 * ez)), d8.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function us() {
	this.ut = 10, this.uu = 50, this.uv = 50, this.uw = 8, this.ux = this.uu + this.uv, this.aG = this.uu + this.uv + this.uw, this.cu = 72, this.uy = 0, this.uz = 0, this.sS = new Array(this.aG), this.v0 = 8, this.v1 = new Array(this.uu + this.uv),
		this.v2 = new Array(this.uu + this.uv), this.hK = 0, this.hM = 0, this.zoom = 1, this.v3 = .2, this.sj = 0, this.aH = null, this.v4 = null, this.pF = !1, this.b = function() {
			var aE, v5, v6;
			for (this.aH = new Array(this.aG), this.v4 = new Array(this.aG), v5 = cq.sT("emojis"), this.v7(), aE = this.sj = 0; aE < this.uu; aE++) this.v8(aE, aE, v5);
			for (v6 = cq.sT("flags"), aE = 0; aE < this.uv; aE++) this.v8(aE, this.uu + aE, v6);
			this.v9(), this.sS[26] = this.vA(25, 2), this.vB()
		}, this.v8 = function(aE, ej, fV) {
			this.aH[ej] = !1, this.v4[ej] = 0;
			var dL = document.createElement("canvas"),
				n8 = (dL.width = this.cu, dL.height = this.cu, dL.getContext("2d", {
					alpha: !0
				}));
			n8.clearRect(0, 0, this.cu, this.cu), 23 === ej ? n8.drawImage(n5.sO()[4].dL[1], 0, 0) : 36 === ej ? n8.drawImage(n5.sO()[0].dL[2], 0, 0) : 49 === ej ? n8.drawImage(n5.sO()[2].dL[1], 0, 0) : n8.drawImage(fV, this.cu * aE % (aE === ej ?
				this.ut * this.cu : 4e3), aE === ej ? bJ(aE, this.ut) * this.cu : 0, this.cu, this.cu, 0, 0, this.cu, this.cu), this.sS[ej] = dL
		}, this.v9 = function() {
			this.sS[this.aG - 5] = this.sS[26], this.sS[this.aG - 4] = this.vA(this.aG - 5, 2), this.sS[this.aG - 1] = this.vA(this.aG - 5, 1), this.sS[this.aG - 8] = this.vA(this.aG - 4, 1), this.sS[this.aG - 3] = this.sS[39], this.sS[this.aG - 2] =
				this.vA(this.aG - 3, 1), this.sS[this.aG - 7] = this.vA(this.aG - 2, 1), this.sS[this.aG - 6] = this.vA(this.aG - 7, 1)
		}, this.vA = function(aE, vC) {
			var dL = document.createElement("canvas"),
				n8 = (dL.width = this.cu, dL.height = this.cu, dL.getContext("2d", {
					alpha: !0
				}));
			return n8.clearRect(0, 0, this.cu, this.cu), n8.rotate(vC * Math.PI / 2), n8.drawImage(this.sS[aE], 1 === vC ? 0 : -this.cu, -this.cu), dL
		}, this.vB = function() {
			var aE, aR, dG = a4().split("");
			if (2 * dG.length !== this.aG) this.sj = 0;
			else {
				for (aE = 0; aE < this.aG; aE += 2) aR = parseInt(dG[Math.floor(aE / 2)]), this.aH[aE] = aR % 2 == 1, this.aH[aE + 1] = 1 < aR;
				this.vD()
			}
		}, this.vD = function() {
			for (var aE = this.sj = 0; aE < this.aG; aE++) this.aH[aE] && (this.v4[this.sj++] = aE)
		}, this.t0 = function() {
			8 === this.sj && this.v4[0] === this.ux && this.vD()
		}, this.vE = function() {
			var aE;
			for (this.sj = this.uw, aE = 0; aE < this.uw; aE++) this.v4[aE] = this.ux + aE
		}, this.v7 = function() {
			this.uy = Math.floor((a0 ? .075 : .0468) * ck), this.zoom = this.uy / this.cu, this.uz = (1 + this.v3) * this.uy
		}, this.show = function(d0, d1) {
			var aE, vG, vF, nD, hI, hJ;
			if (this.sj < 1) this.pF = !1;
			else {
				for (vF = (vF = Math.floor(hL / this.uz)) < 3 ? 3 : vF > this.v0 ? this.v0 : vF, vG = this.sj > vF ? vF : this.sj, vF = 1 + bJ(this.sj - 1, vG), nD = Math.floor(vG * this.uz), hI = Math.floor(d0 - nD / 2), hI = (hI = hL < hI + nD ?
						hL - nD : hI) < 0 ? 0 : hI, hJ = Math.floor(d1 - this.uz / 2), d0 = Math.floor(vF * this.uz), hJ = (hJ = d3 < hJ + d0 ? d3 - d0 : hJ) < 0 ? 0 : hJ, this.hK = hI + nD, this.hM = hJ + d0, aE = 0; aE < this.sj; aE++) this.v1[
					aE] = Math.floor(hI + aE % vG * this.uz), this.v2[aE] = Math.floor(hJ + bJ(aE, vG) * this.uz);
				this.pF = !0
			}
		}, this.cz = function(d0, d1, player) {
			return !!this.pF && (this.pF = !1, this.sz(d0, d1) && this.vI(d0, d1, player) && this.pF || (this.t0(), n5.lE()), !0)
		}, this.sz = function(d0, d1) {
			return !(d0 < this.v1[0] || d1 < this.v2[0] || d0 >= this.hK || d1 >= this.hM)
		}, this.vI = function(d0, d1, player) {
			for (var aE = this.sj - 1; 0 <= aE; aE--)
				if (d0 >= this.v1[aE] && d1 >= this.v2[aE] && d0 <= this.v1[aE] + this.uz && d1 <= this.v2[aE] + this.uz) return 39 === this.v4[aE] ? (this.vE(), this.show(d0, d1)) : (player === bN ? cc.cd.jc(this.v4[aE]) : cc.cN.jr(this.v4[aE],
					player), this.vD()), !0;
			return !1
		}, this.vJ = function(aE) {
			return aE < 16 || 40 <= aE && aE < 47
		}, this.vK = function(aE) {
			return aE >= this.uu && aE < this.uu + this.uv
		}, this.d7 = function() {
			d8.imageSmoothingEnabled = !0;
			for (var kt = this.v3 * this.uy / 2, aE = this.sj - 1; 0 <= aE; aE--) d8.setTransform(this.zoom, 0, 0, this.zoom, this.v1[aE] + kt, this.v2[aE] + kt), d8.drawImage(this.sS[this.v4[aE]], 0, 0);
			d8.imageSmoothingEnabled = !1, d8.setTransform(1, 0, 0, 1, 0, 0)
		}, this.vL = function(hD, hE, jd) {
			d8.imageSmoothingEnabled = !0, d8.setTransform(this.zoom, 0, 0, this.zoom, hD, hE), d8.drawImage(this.sS[jd], 0, 0), d8.imageSmoothingEnabled = !1, d8.setTransform(1, 0, 0, 1, 0, 0)
		}
}
var ko, vR, d2, pz, p6, p7, d4, eC, eB, eD, wM, gr, yU, hV, ua, e6, f3, f6, f2, f5, bv, ml, bO, bV, bn, bo, br, e7, fZ, fY, ol, d8, a8R, a8S, a8T, a1, a2, vW, ck, hL, d3, lM, a8U, m, p, n, q, a0, od, oc, i8, iI, aF, bR, n6, a1v, aL, fW, gU, d5, a26,
	pQ, a0W, a8V, a8W, d9 = "middle",
	vM = "bottom",
	dA = "center",
	tv = "left",
	vN = "right",
	cn = "bold ",
	vO = "italic ",
	vP = "normal ",
	co = "px " + settings.fontName,
	vQ = [cn, vO + cn, cn],
	vS = ["wss://", "/s50/", "/s51/", "/s52/"];

function vT() {
	vU(), (d4 = new vV).b()
}

function vU() {
	pz = .0022 * (1 + .5 * a0) * ck, d2 = (d2 = Math.floor((a0 ? .02 : .01152) * ck)) < 2 ? 2 : d2, ko = (ko = Math.floor((a0 ? .0114 : .01296) * ck)) < 2 ? 2 : ko, vR = (vR = Math.floor(.005 * vW)) < 1 ? 1 : vR
}

function vX(n8, cu, ez) {
	n8.fillStyle = dB.dC, n8.fillRect(0, 0, cu, 1), n8.fillRect(0, ez - 1, cu, 1), n8.fillRect(0, 0, 1, ez), n8.fillRect(cu - 1, 0, 1, ez)
}

function rH() {
	var tP, vY, ct, ez, vZ;

	function vf(aE) {
		var cu = tP[aE].dL.width,
			nD = (tP[aE].n8.clearRect(0, 0, cu, ez), tP[aE].n8.fillStyle = 0 !== tP[aE].id ? "rgba(33,33,120,0.83)" : tP[aE].ed === bZ ? "rgba(88,88,88,0.83)" : tP[aE].ed < e5 ? "rgba(100,70,33,0.83)" : "rgba(33,100,80,0.83)", tP[aE].n8.fillRect(0,
				0, cu, ez), vX(tP[aE].n8, cu, ez), vY + 2 * ez < cu && (tP[aE].n8.fillRect(cu - vY - ez, 0, 1, ez), tP[aE].n8.fillText(hV[tP[aE].ed], Math.floor((cu - vY) / 2), Math.floor(.57 * ez))), 0 !== tP[aE].id ? 0 : ez);
		tP[aE].n8.fillText(gR.hU(tP[aE].ee), Math.floor(cu - vY / 2 - nD), Math.floor(.57 * ez)),
			function(aE, cu, nD) {
				tP[aE].n8.fillStyle = dB.iV;
				var vk = Math.floor(vY * tP[aE].ee / tP[aE].vl);
				tP[aE].n8.fillRect(Math.floor(cu - vY - nD), ez - vZ, vk, vZ)
			}(aE, cu, nD), 0 === tP[aE].id ? (vi(aE, cu), function(aE, cu) {
				tP[aE].n8.strokeStyle = dB.ie, tP[aE].n8.fillRect(ez, 0, 1, ez);
				cu -= ez;
				tP[aE].n8.beginPath(), tP[aE].n8.moveTo(Math.floor(.3 * ez + cu), Math.floor(ez / 2)), tP[aE].n8.lineTo(Math.floor(ez - .3 * ez + 0 + cu), Math.floor(ez / 2)), tP[aE].n8.stroke(), tP[aE].n8.beginPath(), tP[aE].n8.moveTo(Math
					.floor(ez / 2 + cu), Math.floor(.3 * ez)), tP[aE].n8.lineTo(Math.floor(ez / 2 + cu), Math.floor(ez - .3 * ez + 0)), tP[aE].n8.stroke()
			}(aE, cu)) : vi(aE, 2 * ez)
	}

	function vi(aE, cu) {
		tP[aE].n8.strokeStyle = tP[aE].vm ? dB.ia : dB.iq, tP[aE].n8.fillStyle = dB.dC, tP[aE].n8.fillRect(cu - ez, 0, 1, ez);
		var vn = Math.floor(ez / 12),
			vn = (tP[aE].n8.lineWidth = vn < 3 ? 3 : vn, tP[aE].n8.lineCap = "round", .35);
		cu = ez + 1, tP[aE].n8.beginPath(), tP[aE].n8.moveTo(Math.floor(cu - vn * ez + 0), Math.floor(vn * ez)), tP[aE].n8.lineTo(Math.floor(cu - ez + vn * ez), Math.floor(ez - vn * ez + 0)), tP[aE].n8.stroke(), tP[aE].n8.beginPath(), tP[aE].n8
			.moveTo(Math.floor(cu - ez + vn * ez), Math.floor(vn * ez)), tP[aE].n8.lineTo(Math.floor(cu - vn * ez + 0), Math.floor(ez - vn * ez + 0)), tP[aE].n8.stroke()
	}

	function w2(bU) {
		for (var ee, aE = bU - 1; 0 <= aE; aE--) ee = b5.bD(bN, aE), tP[aE].ee !== ee && (tP[aE].ee = ee, tP[aE].vl = ee > tP[aE].vl ? ee : tP[aE].vl, tP[aE].vg = !0)
	}

	function ve(w4) {
		w4.dL = document.createElement("canvas"), az.lr.font = ct;
		var cu = vY;
		w4.ed < bZ && 0 === w4.id && (cu += Math.floor(az.lr.measureText(hV[w4.ed] + "000").width)), cu += ez, 0 === w4.id && (cu += ez), w4.dL.width = cu, w4.dL.height = ez, w4.n8 = w4.dL.getContext("2d", {
			alpha: !0
		}), w4.n8.font = ct, w4.n8.textBaseline = d9, w4.n8.textAlign = dA
	}

	function vy(aE) {
		return gQ.w6() ? hL - tP[aE].dL.width - ko : gQ.hD
	}

	function vz(aE) {
		return Math.floor(2 * ko + (gQ.w6() ? g9.ez + ko : 0) + gQ.ez + aE * (1.3 * ez))
	}
	this.b = function() {
		tP = [], this.resize()
	}, this.resize = function() {
		ct = g7.ct, ez = g7.cs + 5, ez = Math.floor(1.25 * ez), a0 && (ez = Math.floor(1.25 * ez)), vZ = Math.floor(.15 * ez), az.lr.font = ct, vY = Math.floor(az.lr.measureText("02 000 000 0000").width);
		for (var aE = tP.length - 1; 0 <= aE; aE--) ve(tP[aE]), vf(aE)
	}, this.gf = function() {
		for (var aE = tP.length - 1; 0 <= aE; aE--) tP[aE].vg && (tP[aE].vg = !1, vf(aE))
	}, this.hU = function(uH) {
		if (uH < 1e3) return uH < 0 ? "-" + this.hU(Math.abs(uH)) : uH.toString();
		for (var vp = Math.floor(Math.log(uH + .5) / Math.log(10)) + 1, vq = Math.floor((vp - 1) / 3), vr = uH.toString(), vs = vr.substring(vp - 3, vp), aE = 1; aE < vq; aE++) vs = vr.substring(vp - 3 * (aE + 1), vp - 3 * aE) + " " + vs;
		return vr.substring(0, vp - 3 * vq) + " " + vs
	}, this.cz = function(d0, hE) {
		if (2 !== gg && 0 !== e6[bN] && !cJ && bW.sk(bN))
			for (var vt, vu, vv, vw = a0 ? ez : 0, vx = a0 ? Math.floor(.15 * ez) : 0, aE = tP.length - 1; 0 <= aE; aE--)
				if (vt = vy(aE), vu = vz(aE), vv = tP[aE].dL.width, vu - vx <= hE && hE <= vu + ez + vx) {
					if (vt - vw <= d0 && d0 <= vt + ez + vw) return tP[aE].vm || (tP[aE].vg = !0, tP[aE].vm = !0, 0 === tP[aE].id && cc.cd.ja(tP[aE].ed)), !0;
					if (0 === tP[aE].id && vt + vv - ez - vw <= d0 && d0 <= vt + vv + vw) return cc.cd.ce(cf.cg(), tP[aE].ed), !0
				} return !1
	}, this.fF = function() {
		var bU;
		2 !== gg && 0 !== e6[bN] && !cJ && bW.sk(bN) && (function(bU) {
			if (tP.length !== bU) return 1;
			for (var aE = bU - 1; 0 <= aE; aE--)
				if (tP[aE].id !== b5.b7(bN, aE) || tP[aE].ed !== b5.bC(bN, aE)) return 1;
			return
		}(bU = b5.b6(bN)) && function(bU) {
			var aE, id, ed, cV, ee, tf = [];
			loop: for (aE = 0; aE < bU; aE++) {
				for (id = b5.b7(bN, aE), ed = b5.bC(bN, aE), cV = 0; cV < tP.length; cV++)
					if (tP[cV].id === id && tP[cV].ed === ed) {
						tf.push(tP.splice(cV, 1)[0]);
						continue loop
					} ee = b5.bD(bN, aE), ve(ee = {
					ed: ed,
					ee: ee,
					vl: ee,
					id: id,
					vg: !0,
					vm: !1,
					dL: null,
					n8: null
				}), tf.push(ee)
			}
			tP = tf
		}(bU), w2(bU))
	}, this.w5 = function(bc) {
		for (var bU = Math.min(tP.length, b5.b6(bN)), aE = 0; aE < bU; aE++)
			if (tP[aE].ed === bc) return void(tP = [])
	}, this.d7 = function() {
		if (0 !== e6[bN] && bW.sk(bN) && !cJ)
			for (var aE = tP.length - 1; 0 <= aE; aE--) d8.drawImage(tP[aE].dL, vy(aE), vz(aE))
	}
}

function rI() {
	var tP, fg, w7, w8, ez, ct, cs, w9, uj, wA, wB, wC, dL, n8, hi, wD;

	function wK() {
		d8.drawImage(dL, ko + (cS ? ko + gU.wL() : 0), wM + 2 * ko)
	}

	function wE() {
		dL.width = tP[0].width + wB, dL.height = ez + wB, (n8 = dL.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, tP[0].width + wB, ez + wB), n8.translate(Math.floor(wB / 2), Math.floor(wB / 2)), n8.lineWidth = wB, n8.fillStyle = 1 === tP[0].wJ ? dB.iY : dB.iR, wN(), n8.fill(), n8.strokeStyle = 1 === tP[0].wJ ? dB.hP : dB.dC,
		wN(), n8.stroke(), n8.textAlign = dA, n8.textBaseline = d9, n8.fillStyle = 1 === tP[0].wJ ? dB.hP : dB.dC, n8.font = ct[0], n8.fillText(uj[tP[0].wI], Math.floor(tP[0].width / 2), Math.floor(.72 * w9[0] * ez)), n8.font = ct[1], n8.fillText(tP[
				0].v, Math.floor(tP[0].width / 2), Math.floor((w9[0] + .48 * w9[1]) * ez))
	}

	function wN() {
		n8.beginPath(), n8.moveTo(wC, 0), n8.lineTo(tP[0].width - wC, 0), n8.lineTo(tP[0].width, wC), n8.lineTo(tP[0].width, ez - wC), n8.lineTo(tP[0].width - wC, ez), n8.lineTo(wC, ez), n8.lineTo(0, ez - wC), n8.lineTo(0, wC), n8.closePath()
	}
	this.b = function() {
		fg = 4, w7 = w8 = hi = 0, tP = [], ct = new Array(2), cs = new Array(2), w9 = new Array(2), uj = ["YOU ERASED", "YOU WERE ERASED BY", "THE GAME WAS WON BY", "MAP:"], w9[0] = .3, w9[1] = .7, wA = new Array(4), dL = document.createElement(
			"canvas"), wD = aL.aM + 2e3, this.resize()
	}, this.resize = function() {
		var aE, cu;
		for (ez = Math.floor((a0 ? .0725 : .058) * ck), cs[0] = Math.floor(.85 * w9[0] * ez), cs[1] = Math.floor(.85 * w9[1] * ez), ct[0] = cn + cs[0] + co, ct[1] = cn + cs[1] + co, aE = wA.length - 1; 0 <= aE; aE--) wA[aE] = this.measureText(uj[
			aE] + "000", ct[0]);
		if (wB = Math.floor(1 + .05 * ez), wC = Math.floor(.2 * ez), 0 < tP.length) {
			for (aE = tP.length - 1; 0 <= aE; aE--) cu = this.measureText(tP[aE].v + "00", ct[1]), tP[aE].width = cu < wA[aE] ? wA[aE] : cu;
			wE()
		}
	}, this.fF = function() {
		0 !== fg && (4 === fg ? aL.aM > wD && (fg = 0, 1 === gg) && cv.oI(az.ft.mI[az.mJ].name, 3, 1, 9) : (1 === fg ? (0 === w7 && (wE(), w7 = 1e-4), 1 <= (w7 += .002 * (aL.aM - hi)) && (w8 = 0, fg = 2, w7 = 1), aL.cx = !0) : 2 === fg ? ((w8 +=
			(aL.aM - hi) / 1e3) > tP[0].hn || 1 < w8 && 1 < tP.length) && (fg = 3) : 3 === fg && ((w7 -= .002 * (aL.aM - hi)) <= 0 && (w7 = 0, tP.shift(), fg = 0 < tP.length ? 1 : 0), aL.cx = !0), hi = aL.aM))
	}, this.measureText = function(v, ct) {
		return d8.font = ct, Math.floor(d8.measureText(v).width)
	}, this.ea = function(wH, aE) {
		this.oI(hV[wH], aE, 1, 0 === aE ? 3 : 7)
	}, this.oI = function(v, wI, wJ, hn) {
		var cu = (cu = this.measureText(v + "00", ct[1])) < wA[wI] ? wA[wI] : cu;
		tP.push({
			v: v,
			width: cu,
			wI: wI,
			wJ: wJ,
			hn: hn
		}), 0 === fg && (w7 = 0, fg = 1, hi = aL.aM)
	}, this.d7 = function() {
		0 !== fg && 0 !== w7 && (w7 < 1 ? (d8.globalAlpha = w7, wK(), d8.globalAlpha = 1) : wK())
	}
}

function ru() {
	var ez, dL, n8, wO, wP, wQ, wR, wS, vg, wT, wU, wV, wW, wX;

	function cp() {
		var cu = gT.cu,
			ca = (vg = !1, n7(n8, cu, ez), Math.floor(cu / 2));
		1 === wP ? (n8.fillStyle = dB.ih, n8.fillRect(ca, 0, ca, ez)) : -1 === wP && (n8.fillStyle = dB.it, n8.fillRect(0, 0, ca, ez)), n9(n8, cu, ez, 2);
		var ca = (ca = Math.floor(.25 * ez)) < 2 ? 2 : ca,
			uR = (n8.fillStyle = dB.iZ, Math.floor((ez - 4) * wQ[1] / wR[1]));
		0 < uR && n8.fillRect(2, ez - 2 - uR, ca, uR), 0 < (uR = Math.floor((ez - 4) * wQ[0] / wR[0])) && n8.fillRect(cu - 2 - ca, ez - 2 - uR, ca, uR);
		ca = (ca = Math.floor(ez / 8)) < 2 ? 2 : ca;
		nB(n8, Math.floor(.4 * ez), 0, ez, ca, .5, !1), nB(n8, Math.floor(cu - 1.4 * ez), 0, ez, ca, .5, !0), n8.drawImage(wO, Math.floor((cu - wO.width) / 2), 3)
	}

	function wZ() {
		vg = !0, wT = 140, wP = 0, wS = [], gT.pF = !1, g7.nu(247, 0), wQ[0] = wQ[1] = 0
	}

	function d6() {
		return cf.tp(g7.tl()) ? cf.hE - ez - ko : gb.tp(g7.to()) ? gb.d6() - ez - ko : a2 - ez - hR.tq() * ko
	}
	this.pF = !1, this.cu = 0, this.b = function() {
		wV = wW = 0, this.pF = !1, vg = wX = !1, wT = 140, wQ = [wP = 0, 0], wR = [1, 1], wS = [], wU = new Uint32Array(10), this.resize()
	}, this.resize = function() {
		ez = cf.ez, this.cu = 4 * ez, this.wY(), (dL = document.createElement("canvas")).width = this.cu, dL.height = ez, n8 = dL.getContext("2d", {
			alpha: !0
		}), cp()
	}, this.gf = function() {
		vg && cp()
	}, this.wY = function() {
		var dM, wB, ca, ud = (ud = ez - 6) < 6 ? 6 : ud;
		void 0 !== wO && wO.width === ud || ((wO = document.createElement("canvas")).width = ud, wO.height = ud, (dM = wO.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, ud, ud), wB = Math.floor(ud / 8), dM.lineWidth = wB = wB < 1 ? 1 : wB, dM.strokeStyle = dB.dC, ca = Math.floor(ud / 2), ud = Math.floor((ud - wB) / 2), dM.beginPath(), dM.arc(ca, ca, ud, 0, 2 * Math.PI), dM
			.moveTo(ca, ca - ud), dM.lineTo(ca, ca + ud), dM.moveTo(ca + Math.cos(.78 * Math.PI) * ud, ca + Math.cos(.28 * Math.PI) * ud), dM.lineTo(ca, ca), dM.lineTo(ca + Math.cos(.22 * Math.PI) * ud, ca + Math.cos(1.72 * Math.PI) * ud), dM
			.stroke())
	}, this.cz = function(hD, hE) {
		var hJ;
		return !(hD < a1 - this.cu - ko || hE < (hJ = d6()) || hJ + ez < hE || (cJ || cc.cd.jg(hD > a1 - ko - this.cu / 2 ? 1 : 0), 0))
	}, this.fF = function() {
		if (0 < wW) 0 === --wW && wZ();
		else if (this.pF) 270 == --wT && 2 <= wV && function() {
			var aE;
			for (aE = fY - 1; 0 <= aE; aE--)
				if (bW.sk(fZ[aE])) return;
			return 1
		}() && (vg = !0, wQ[0] += wR[0]), 180 === wT && 3 * wQ[0] < wR[0] ? wZ() : wQ[0] >= wR[0] ? wX ? gC.np.ns() : gC.np.nx(-1) : wQ[1] >= wR[1] ? wW = 4 : wT <= 0 && wZ();
		else if (function() {
				var aE;
				for (aE = 9; 0 <= aE; aE--) 12 < Math.abs(wU[aE] - bv[gr[aE]]) && (wT = 140), wU[aE] = bv[gr[aE]];
				if (--wT <= 0) return 1;
				return
			}()) {
			(wX = wc()) && g7.uC(), this.pF = !0, wT = 360;
			var aE, a3 = 0;
			for (aE = fY - 1; 0 <= aE; aE--) bW.sk(fZ[aE]) && (a3 += bv[fZ[aE]]);
			wR[0] = tn(bJ(3 * a3, 5), 1), cS && 9 !== fv && (wR[0] = we(tn(bJ(a3 * (100 - bJ(100 * gU.oG(), qR)), 100), 1), wR[0])), wR[1] = tn(a3 - wR[0], 1), wV++
		}
	}, this.o4 = function() {
		this.pF && wQ[0] < wR[0] && wZ()
	}, this.kZ = function(player, wg) {
		var aE, a3;
		if (this.pF) {
			for (aE = wS.length - 1; 0 <= aE; aE--)
				if (wS[aE] === player) return;
			wS.push(player), vg = !0, a3 = fx ? wR[0] : bv[player], wg ? wQ[0] += a3 : wQ[1] += a3, player === bN && (wP = wg ? 1 : -1)
		}
	}, this.d7 = function() {
		var hE;
		this.pF && (hE = d6(), d8.drawImage(dL, a1 - this.cu - ko, hE))
	}
}

function rJ() {
	var cu, hD, wh, dL, n8, pF, eA, wi, ct, vg, wj = 11 / 12;

	function wl() {
		var vk = Math.floor(eA * (cu - 2 * wh)),
			wo = 1 + Math.floor(.0625 * cf.ez),
			wp = 1 + Math.floor(.3 * cf.ez),
			ud = Math.floor(.55 * cf.ez);
		n8.clearRect(0, 0, cu, cf.ez), n8.fillStyle = dB.iQ, n8.fillRect(0, 0, wh, cf.ez), n8.fillRect(wh + vk, 0, cu - wh - vk, cf.ez), n8.fillStyle = eA < 1 / 3 ? "rgba(" + Math.floor(3 * eA * 130) + ",130,0,0.85)" : eA < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (eA - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (eA - 2 / 3) * 130) + ",0.85)", n8.fillRect(wh, 0, vk, cf.ez), n8.fillStyle = dB.dC, n8.fillRect(0, 0, cu, 1), n8.fillRect(0, cf.ez - 1, cu, 1),
			n8.fillRect(0, 0, 1, cf.ez), n8.fillRect(wh, 0, 1, cf.ez), n8.fillRect(wh + vk, 0, 1, cf.ez), n8.fillRect(cu - wh, 0, 1, cf.ez), n8.fillRect(cu - 1, 0, 1, cf.ez), n8.fillRect(Math.floor(.25 * cf.ez) + wp, Math.floor((cf.ez - wo) / 2), cf
				.ez - 2 * wp, wo), n8.fillRect(Math.floor(cu - 1.25 * cf.ez) + wp, Math.floor((cf.ez - wo) / 2), cf.ez - 2 * wp - wp % 2, wo), n8.fillRect(Math.floor(cu - 1.25 * cf.ez) + Math.floor((cf.ez - wo) / 2), wp, wo, cf.ez - 2 * wp - wp % 2),
			wi = cM.cN.e9(bN, cf.cg()), n8.fillText(gR.hU(wi) + " (" + g9.uQ(100 * eA, 0) + ")", Math.floor(.5 * cu), ud)
	}

	function wt(ci) {
		return !(1 < ci && 1 === eA || (1 < ci && ci * eA - eA < 1 / 1024 ? ci = (eA + 1 / 1024) / eA : ci < 1 && eA - ci * eA < 1 / 1024 && (ci = (eA - 1 / 1024) / eA), eA = cA.pt(eA * ci, 1 / 1024, 1), wl(), 0))
	}

	function wu(d0) {
		return eA !== (eA = cA.pt((d0 - hD - wh) / (cu - 2 * wh), 1 / 1024, 1)) && (wl(), !0)
	}
	this.hE = 0, this.pG = !1, this.b = function() {
		pF = !hr && !cJ, vg = !1, eA = .5, wi = 0, this.pG = !1, this.resize()
	}, this.resize = function() {
		a0 && a1 < .8 * a2 ? (this.ez = Math.floor(.0536 * ck), cu = a1 - 4 * ko - this.ez) : (cu = Math.floor((a0 ? .65 : .389) * ck), cu += 12 - cu % 12, this.ez = Math.floor(cu / 12)), wh = Math.floor(3 * this.ez / 2), ct = cn + Math.floor(
			.5 * this.ez) + co, (dL = document.createElement("canvas")).width = cu, dL.height = this.ez, (n8 = dL.getContext("2d", {
			alpha: !0
		})).font = ct, n8.textBaseline = d9, cM.iL.textAlign(n8, 1), this.wk(), wl()
	}, this.wk = function() {
		hD = a0 && a1 < .8 * a2 ? this.ez + 3 * ko : Math.floor((hL - cu) / 2), this.hE = d3 - this.ez - hR.tq() * ko
	}, this.gf = function() {
		vg && (vg = !1, wl())
	}, this.pF = function() {
		return !(!pF || cK.cL && hD < Math.floor(ko + 5.5 * this.ez))
	}, this.tp = function(cw) {
		return !!this.pF() && a1 - cw - ko < hD + cu
	}, this.l = function() {
		pF = !cJ
	}, this.wZ = function() {
		pF = !1
	}, this.cg = function() {
		return cA.pt(Math.floor(1024 * eA + .5) - 1, 0, 1023)
	}, this.pP = function(d0, d1) {
		return this.pF() && hD < d0 && d0 < hD + cu && d1 > this.hE
	}, this.cz = function(d0, d1) {
		return !!this.pF() && !!cf.pP(d0, d1) && (hv.hw = !1, function(t2, d0, d1) {
			if (function(d0, d1) {
					return hD < d0 && d0 < hD + wh && d1 > cf.hE
				}(d0, d1)) return wt(wj);
			if (function(d0, d1) {
					return hD + cu - wh < d0 && d0 < hD + cu && d1 > cf.hE
				}(d0, d1)) return wt(1 / wj);
			return t2.pG = !0, wu(d0)
		}(this, d0, d1) && (aL.cx = !0), !0)
	}, this.pb = function(i4) {
		0 !== gg && this.pF() && wt(i4) && (aL.cx = !0)
	}, this.op = function(deltaY) {
		var i4;
		return !(0 === deltaY || !this.pF()) && wt(i4 = 0 < deltaY ? (i4 = 400 / (400 + deltaY)) < wj ? wj : i4 : 1 / wj < (i4 = (400 - deltaY) / 400) ? 1 / wj : i4)
	}, this.om = function(d0, d1) {
		return !!this.pG && wu(d0)
	}, this.pK = function() {
		this.pG = !1
	}, this.fF = function() {
		this.pF() && wi !== cM.cN.e9(bN, this.cg()) && (vg = !0)
	}, this.d7 = function() {
		this.pF() && d8.drawImage(dL, hD, this.hE)
	}
}

function s8() {
	var dL, n8, wv, font, ww = 0,
		wx = !1,
		wy = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		wz = 5;

	function ui() {
		if (wx) {
			var aE, bU = wy.length,
				ud = Math.floor(.5 * wv.ez),
				ez = bU * ud,
				hD = Math.floor(Math.floor(wv.hD) + .3 * wv.cu - .5),
				hE = Math.floor(Math.floor(wv.hE) - ez),
				cu = Math.floor(.4 * wv.cu + 2.5);
			for (d8.fillStyle = dB.iQ, d8.fillRect(hD, hE, cu, ez), d8.fillStyle = dB.im, d8.fillRect(hD, hE + wz * ud, cu, ud), d8.fillStyle = dB.dC, d8.fillRect(hD, hE, 2, ez), d8.fillRect(hD, hE, cu, 2), d8.fillRect(hD + cu - 2, hE, 2, ez), aE =
				1; aE < bU; aE++) d8.fillRect(hD, hE + aE * ud, cu, 2);
			for (d8.fillStyle = dB.dC, cM.iL.textAlign(d8, 1), cM.iL.textBaseline(d8, 1), d8.font = cM.iL.lL(.6 * ud, 0), hD += .5 * cu, aE = 0; aE < bU; aE++) d8.fillText(xC(aE), hD, hE + (aE + .6) * ud)
		}
		d8.drawImage(dL, Math.floor(wv.hD), Math.floor(wv.hE))
	}

	function cp(t2) {
		var hD, hI, hJ, ud;
		n8.clearRect(0, 0, Math.floor(wv.cu), Math.floor(wv.ez)), n8.fillStyle = dB.iQ, n8.fillRect(0, 0, Math.floor(wv.cu), Math.floor(wv.ez)), hu && (n8.fillStyle = dB.im, n8.fillRect(0, 0, Math.floor(.3 * wv.cu), Math.floor(wv.ez))), n8
			.fillStyle = dB.dC, n8.fillText("Hide UI", .15 * wv.cu, .5 * wv.ez), n8.fillRect(Math.floor(.3 * wv.cu - .5), 0, 2, Math.floor(wv.ez)), hD = .5 * wv.cu, n8.fillText("Replay Speed", hD, .31 * wv.ez), n8.fillText(xC(wz), hD, .69 * wv.ez),
			n8.fillRect(Math.floor(.7 * wv.cu - .5), 0, 2, Math.floor(wv.ez)), t2.tA ? (hD = Math.floor(.02 * wv.cu), t2 = Math.floor(.025 * wv.cu), hI = Math.floor(.85 * wv.cu - hD - .5 * t2), hJ = Math.floor(.25 * wv.ez), ud = Math.floor(wv.ez) -
				2 * hJ, n8.fillRect(hI, hJ, hD, ud), n8.fillRect(hI + hD + t2, hJ, hD, ud)) : function() {
				var cu = Math.floor(.46 * wv.ez),
					ez = Math.floor(.23 * wv.ez),
					hD = Math.floor(.85 * wv.cu - .5 * cu + cu / 12),
					hE = Math.floor(.5 * wv.ez - ez);
				n8.beginPath(), n8.moveTo(hD, hE), n8.lineTo(hD + cu, hE + ez), n8.lineTo(hD, hE + (ez << 1)), n8.fill()
			}(), n8.fillRect(0, 0, Math.floor(wv.cu), 2), n8.fillRect(0, 0, 2, Math.floor(wv.ez)), n8.fillRect(0, Math.floor(wv.ez) - 2, Math.floor(wv.cu), 2), n8.fillRect(Math.floor(wv.cu - 2), 0, 2, Math.floor(wv.ez))
	}

	function xC(aE) {
		return 5 === aE ? "Normal" : "" + wy[aE]
	}
	this.tA = !1, this.b = function() {
		cJ && (wz = 5, this.tA = !1, wx = !1, wv = new kk([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.x0 = function() {
		return wy[wz]
	}, this.d6 = function() {
		return wv.hE
	}, this.tp = function(cw) {
		return !!cJ && wv.hD + wv.cu > a1 - cw - ko
	}, this.resize = function() {
		cJ && (wv.resize(), wv.hE -= (hR.tq() - 1) * ko, font = cM.iL.lL(.3 * wv.ez, 0), (dL = document.createElement("canvas")).width = Math.floor(wv.cu), dL.height = Math.floor(wv.ez), (n8 = dL.getContext("2d", {
			alpha: !0
		})).font = font, cM.iL.textAlign(n8, 1), cM.iL.textBaseline(n8, 1), cp(this))
	}, this.pW = function(x1) {
		x1 !== hu && (hu = x1, gU.resize(), aL.cx = !0, cJ) && (ww = aL.aM + 2e3, cp(this))
	}, this.cz = function(hD, hE) {
		if (!cJ) return !1;
		if (hD < wv.hD || hE < wv.hE || hD > wv.hD + wv.cu) return wx && function(t2, hD, hE) {
			var bU = wy.length,
				ud = Math.floor(.5 * wv.ez),
				ez = bU * ud,
				hI = Math.floor(Math.floor(wv.hD) + .3 * wv.cu - .5),
				ez = Math.floor(Math.floor(wv.hE) - ez),
				cu = Math.floor(.4 * wv.cu + 2.5);
			return wx = !1, aL.cx = !0, hD < hI || hI + cu < hD || hE < ez || (wz = x4(0, Math.floor((hE - ez) / ud), bU - 1), cp(t2)), !0
		}(this, hD, hE);
		if ((hD -= wv.hD) < .3 * wv.cu) wx = !1, this.pW(!hu);
		else {
			if (hD < .7 * wv.cu) return wx = !wx, aL.cx = !0;
			this.pZ(!1)
		}
		return !0
	}, this.pZ = function(x3) {
		2 === gg ? (this.pW(!1), lJ.show()) : (wx = !1, this.tA = !this.tA, this.tA ? cK.cL ? cK.pY() : aJ(1) : x3 || cK.tB(), aL.cx = !0, cp(this))
	}, this.p9 = function(hD, hE) {
		return !!hu && (cK.cz(hD, hE) || (cJ ? ((aL.aM > ww || !this.cz(hD, hE)) && hv.cz(hD, hE), aL.cx = !0, ww = aL.aM + 2e3) : hv.cz(hD, hE)), !0)
	}, this.fF = function() {
		cJ && hu && aL.aM > ww - 1e3 && aL.aM < ww && (aL.cx = !0)
	}, this.o8 = function() {
		cJ && (this.tA = !1, aL.cx = !0, cp(this))
	}, this.d7 = function() {
		if (cJ) {
			if (hu) {
				if (aL.aM > ww) return;
				if (aL.aM > ww - 1e3) return d8.globalAlpha = x4(0, (1e3 - (aL.aM - (ww - 1e3))) / 1e3, 1), ui(), void(d8.globalAlpha = 1)
			}
			ui()
		}
	}
}

function s7() {
	var wv, lG, px, ud;
	this.pF = !1, this.lI = !1, this.tM = function() {
		return !fr.fs && az.mJ !== az.xD() && (cJ || 2 === gg)
	}, this.show = function() {
		this.pF = !0, wv || (wv = new kk([.55, .35], [.5, .5]), (lG = new lF).b()), this.resize(), 0 === gg ? lG.lN("") : (gW.kE.xH.length || (gW.kE.xH = gW.xK.ni()), lG.lN(gW.xL(gW.kE.xH))), lG.show(), aL.cx = !0, pR.l(!1)
	}, this.lE = function() {
		this.pF && (this.pF = !1, this.lI = !1, lG.lE(), aL.cx = !0, 0 === gg && r7.lQ(), 0 === aT.pT()) && pR.l(!0)
	}, this.resize = function() {
		this.pF && (wv.resize(), px = .03 * wv.ez, ud = .2 * wv.ez, lG.resize(wv.hD + px, wv.hE + ud + px, wv.cu - 2 * px, wv.ez - 2 * (ud + px)))
	}, this.cz = function(hD, hE) {
		return !!this.pF && (hD < wv.hD || hE < wv.hE || hD > wv.hD + wv.cu || hE > wv.hE + wv.ez ? 2 !== cK.cz(hD, hE) && this.lE() : hE < wv.hE + wv.ez - ud ? hD > wv.hD + wv.cu - ud && hE < wv.hE + ud && this.lE() : (hD -= wv.hD) < .25 * wv
			.cu ? lG.lP() : hD < .5 * wv.cu ? lG.lR() : hD < .75 * wv.cu ? lG.lQ() : (hE = this, hD = gW.xG(lG.lO()), hE.lE(), (0 < hD.length && hD === gW.kE.xH || gW.xJ.lg(hD)) && gW.xI()), !0)
	}, this.d7 = function() {
		var aE;
		if (this.pF)
			for (cM.iL.textAlign(d8, 1), d8.fillStyle = dB.iw, d8.fillRect(wv.hD, wv.hE, wv.cu, ud), d8.fillStyle = dB.iQ, d8.fillRect(wv.hD, wv.hE + ud, wv.cu, wv.ez - ud), d8.fillStyle = dB.dC, d8.fillRect(wv.hD, wv.hE, 2, wv.ez), d8.fillRect(
					wv.hD, wv.hE, wv.cu, 2), d8.fillRect(wv.hD + wv.cu - 2, wv.hE, 2, wv.ez), d8.fillRect(wv.hD, wv.hE + wv.ez - 2, wv.cu, 2), d8.fillRect(wv.hD + 1, wv.hE + ud, wv.cu - 2, 2), d8.fillRect(wv.hD + 1, wv.hE + wv.ez - ud, wv.cu - 2,
					2), d8.font = cn + Math.floor(.39 * ud) + co, d8.fillText("Replay", wv.hD + .5 * wv.cu, wv.hE + .55 * ud), cK.tN(wv.hD + wv.cu - .725 * ud, wv.hE + .275 * ud, .45 * ud), d8.setTransform(1, 0, 0, 1, 0, 0), d8.font = cM.iL.lL(
					.3 * ud, 0), d8.fillText("Select All", wv.hD + .125 * wv.cu, wv.hE + wv.ez - .48 * ud), d8.fillText("Copy", wv.hD + .375 * wv.cu, wv.hE + wv.ez - .48 * ud), d8.fillText("Clear", wv.hD + .625 * wv.cu, wv.hE + wv.ez - .48 * ud),
				d8.fillText("Launch", wv.hD + .875 * wv.cu, wv.hE + wv.ez - .48 * ud), aE = 1; aE < 4; aE++) d8.fillRect(wv.hD + .25 * aE * wv.cu - 1, wv.hE + wv.ez - ud + 1, 2, ud - 2)
	}
}

function rK() {
	var xN, xO, cu, hD, hE, xP, xQ;
	this.b = function() {
		xN = new Array(2), xO = new Array(2), this.hw = !1, xQ = xP = eD = eB = 0, eC = 1, this.resize()
	}, this.resize = function() {
		cu = (cu = Math.floor((a0 ? .072 : .0502) * ck)) < 8 ? 8 : cu;
		for (var aE = 1; 0 <= aE; aE--) xN[aE] = document.createElement("canvas"), xN[aE].width = cu, xN[aE].height = cu, xO[aE] = xN[aE].getContext("2d", {
			alpha: !0
		});
		this.wk(),
			function() {
				for (var xg = Math.floor(1 + cu / 20), aE = 1; 0 <= aE; aE--) xO[aE].clearRect(0, 0, cu, cu), xO[aE].fillStyle = dB.iN, xO[aE].beginPath(), xO[aE].arc(cu / 2, cu / 2, cu / 2 - xg, 0, 2 * Math.PI), xO[aE].fill(), xO[aE].lineWidth =
					xg, xO[aE].fillStyle = dB.dC, xO[aE].strokeStyle = dB.dC, xO[aE].beginPath(), xO[aE].arc(cu / 2, cu / 2, cu / 2 - xg, 0, 2 * Math.PI), xO[aE].stroke(), nB(xO[aE], 0, 0, cu, xg, .3, 0 === aE)
			}()
	}, this.hN = function() {
		return -eB / eC
	}, this.d6 = function() {
		return -eD / eC
	}, this.i6 = function(xU, du) {
		eB = eC * xU - du
	}, this.i7 = function(xV, dv) {
		eD = eC * xV - dv
	}, this.cz = function(xT, tr) {
		return hu || ! function(xT, tr) {
			return Math.pow(xT - (hD + cu / 2), 2) + Math.pow(tr - (hE + cu / 2), 2) < cu * cu / 4 || Math.pow(xT - (hD + cu / 2), 2) + Math.pow(tr - (hE + 2 * cu), 2) < cu * cu / 4
		}(xT, tr) || hR.hS.xW ? (gY.iA() && (this.hw = !0, xP = xT, xQ = tr), !1) : tr < hE + 1.25 * cu ? this.op(Math.floor(hL / 2), Math.floor(d3 / 2), -200) : this.op(Math.floor(hL / 2), Math.floor(d3 / 2), 200)
	}, this.om = function(xT, tr) {
		var xX, xY, dx, e0;
		return !gY.iA() || (xX = eB, xY = eD, eB += dx = xP - xT, eD += e0 = xQ - tr, g8.om(dx, e0), this.xZ(), xP = xT, xQ = tr, xX !== eB) || xY !== eD
	}, this.op = function(d0, d1, deltaY) {
		var i4;
		if (gY.iA()) {
			if (0 < deltaY) i4 = (i4 = 500 / (500 + deltaY)) < .5 ? .5 : i4;
			else {
				if (!(deltaY < 0)) return !1;
				i4 = 2 < (i4 = (500 - deltaY) / 500) ? 2 : i4
			}
			this.xa(d0, d1, i4), aL.cx = !0
		}
		return !0
	}, this.xa = function(hD, hE, dq) {
		var ci;
		dq = ci = (ci = 1024 < (ci = dq) * eC ? 1024 / eC : ci) * eC < .125 ? .125 / eC : ci, g8.zoom(dq, hD, hE),
			function(ci, d0, d1) {
				eC *= ci, eB = (eB + d0) * ci - d0, eD = (eD + d1) * ci - d1, hv.xZ()
			}(dq, hD, hE)
	}, this.xZ = function() {
		var xd = a1 / 16,
			dV = 0,
			xe = a2 / 16,
			dX = 0;
		eB < xd - a1 && (dV = xd - a1 - eB), eB > eC * az.b0 - xd && (dV = eC * az.b0 - xd - eB), eD < xe - a2 && (dX = xe - a2 - eD), eD > eC * az.b1 - xe && (dX = eC * az.b1 - xe - eD), eB += dV, eD += dX, i8.i9(), g8.xf(dV, dX)
	}, this.wk = function() {
		hD = hL - cu - ko, hE = Math.floor(d3 / 2 - 1.25 * cu)
	}, this.d7 = function() {
		hR.hS.xW || (d8.drawImage(xN[0], hD, hE), d8.drawImage(xN[1], hD, Math.floor(hE + 3 * cu / 2)))
	}
}

function rL() {
	var ad, mN, xh, xi, kt, xj, xk, xl, xm, xn, ct, xo, xp, xq, xr, vk, xs, xt, xu;

	function xy() {
		xi = Math.floor(.2 * (a0 ? .07 : .035) * ck), xi = tn(a0 ? 3 : 1, xi);
		var y3 = a1 / (ad.length + kt);
		xi = xi < y3 ? y3 : xi, vk = Math.floor((1 - kt) * xi), mN = 0, y4()
	}

	function y4() {
		mN = (mN = mN < -20 ? -20 : mN) > (ad.length - 15) * xi ? (ad.length - 15) * xi : mN, xk = Math.floor(mN / xi), xl = (xl = xk + Math.floor(hL / xi)) > ad.length - 1 ? ad.length - 1 : xl, xk = (xk = xl < xk ? xl : xk) < 0 ? 0 : xk;
		var ca = xl;
		xj = xh / ad[ca];
		for (var aE = xl - 1; xk <= aE; aE--) ad[aE] > ad[ca] && (ca = aE, xj = xh / Math.pow(ad[aE], xr))
	}

	function y7(hD) {
		hD = Math.floor((mN + hL - hD - kt * xi) / xi);
		return (hD = hD < -1 ? -1 : -1 === hD ? 0 : hD > ad.length - 1 ? -1 : hD) !== xm && (xm = hD, -1 === xs && 0 === xm && xq && (xs = setInterval(y8, 100)), 1)
	}

	function y9(aE) {
		var vZ = Math.floor(xj * Math.pow(ad[aE], xr));
		d8.fillRect(mN + hL - (aE + 1) * xi, d3 - vZ, vk, vZ)
	}

	function y8() {
		var bc;
		0 !== (xm = 8 === aT.pT() ? -1 : xm) ? (xt = (new Date).getTime(), clearInterval(xs), xs = -1) : (bc = ad[1] / 864e3, -1 !== xt && (bc += ((new Date).getTime() - xt) * ad[1] / 864e5, xt = -1), 0 < bc && (ad[0] += Math.floor(bc), aL.cx = !0))
	}
	this.b = function() {
		xq = !(xt = xs = -1), xm = -(xr = 1), this.xv = !1, xp = 0, xo = new Date, mN = 0, kt = .3, (xu = []).push({
			uH: "Plateau A",
			bU: 0,
			oX: 57
		}), xu.push({
			uH: "Max A",
			bU: 1,
			oX: 1
		}), xu.push({
			uH: "Black Friday",
			bU: 15,
			oX: 15
		}), xu.push({
			uH: "Max B",
			bU: 19,
			oX: 19
		}), xu.push({
			uH: "Max C",
			bU: 44,
			oX: 44
		}), xu.push({
			uH: "First Android Version",
			bU: 58,
			oX: 58
		}), xu.push({
			uH: "Max D",
			bU: 67,
			oX: 67
		}), xu.push({
			uH: "The iFrame Explosion",
			bU: 98,
			oX: 99
		}), xu.push({
			uH: "The 155-Day Uptrend",
			bU: 58,
			oX: 213
		}), xu.push({
			uH: "Max E",
			bU: 213,
			oX: 213
		}), xu.push({
			uH: "Plateau B",
			bU: 214,
			oX: 259
		}), xu.push({
			uH: "Turbulent Times",
			bU: 260,
			oX: 344
		}), xu.push({
			uH: "Max F",
			bU: 262,
			oX: 262
		}), xu.push({
			uH: "Max G",
			bU: 282,
			oX: 282
		}), xu.push({
			uH: "Max H",
			bU: 333,
			oX: 333
		}), xu.push({
			uH: "The 19-Day Downtrend",
			bU: 283,
			oX: 301
		}), xu.push({
			uH: "Plateau C",
			bU: 345,
			oX: 385
		}), xu.push({
			uH: "The Alliance Ascent",
			bU: 386,
			oX: 395
		}), xu.push({
			uH: "Max I",
			bU: 395,
			oX: 395
		}), xu.push({
			uH: "First iOS Version",
			bU: 411,
			oX: 411
		}), xu.push({
			uH: "Plateau D",
			bU: 396,
			oX: 453
		}), xu.push({
			uH: "The TikTok Revolution",
			bU: 454,
			oX: 470
		}), xu.push({
			uH: "Max J",
			bU: 456,
			oX: 456
		}), xu.push({
			uH: "Max K",
			bU: 472,
			oX: 472
		}), xu.push({
			uH: "Max L",
			bU: 478,
			oX: 478
		}), xu.push({
			uH: "YT Drew",
			bU: 471,
			oX: 485
		}), xu.push({
			uH: "Plateau E",
			bU: 485,
			oX: 600
		}), xu.push({
			uH: "Uptrend A",
			bU: 600,
			oX: 613
		}), xu.push({
			uH: "Max M",
			bU: 613,
			oX: 613
		}), xu.push({
			uH: "Downtrend A",
			bU: 614,
			oX: 635
		}), xu.push({
			uH: "Plateau F",
			bU: 636,
			oX: 737
		}), xu.push({
			uH: "End of Record",
			bU: 738,
			oX: 738
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
		], this.resize(), gB.xx(0, 0)
	}, this.resize = function() {
		xh = Math.floor(.15 * a2), xn = Math.floor((a0 ? .018 : .0137) * ck), ct = cn + (xn = xn < 2 ? 2 : xn) + co, xy()
	}, this.xz = function() {
		xq || jK.y0()
	}, this.y1 = function(y2) {
		var aE;
		for (xq = !0, aE = 0; aE < y2.length; aE++) ad.unshift(y2[aE]);
		xy(), aL.cx = !0
	}, this.y5 = function() {
		y4()
	}, this.om = function(hD, hE) {
		d3 - .6 * xh < hE ? this.xv ? hD !== xp && (mN += hD - xp, xp = hD, y4(), y7(hD), this.xv = -1 !== xm, aL.cx = !0) : y7(hD) && (aL.cx = !0) : this.pI()
	}, this.pI = function() {
		-1 !== xm && (this.xv = !1, xm = -1, aL.cx = !0)
	}, this.op = function(hD, deltaY) {
		-1 !== xm && (mN += Math.floor(deltaY), y4(), y7(hD), aL.cx = !0)
	}, this.cz = function(hD, hE) {
		this.om(hD, hE), -1 !== xm && (xp = hD, this.xv = !0)
	}, this.pJ = function() {
		-1 !== xm && (this.xv = !1)
	}, this.d7 = function() {
		d8.fillStyle = dB.iW;
		for (var yB, month, a3, nE, yE, yF, hJ, yG, yH, aE = xl; xk <= aE; aE--) y9(aE);
		xq && 0 === xk && (d8.fillStyle = dB.it, y9(0)), -1 !== xm && (d8.fillStyle = dB.iV, y9(xm)), -1 !== xm && (d8.font = ct, d8.textBaseline = vM, (a3 = new Date).setTime(xo.getTime() - 1e3 * xm * 60 * 60 * 24), month = "month", yB = "day",
			"undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(a3), yB = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(a3)), yB = yB + ", " + a3.getUTCDate() + " " + month + " " + a3.getFullYear(), month = 1 === ad[xm] ? " second played" : " seconds played", month = gR.hU(ad[xm]) + month, a3 = Math.floor(d8.measureText(yB).width), nE =
			Math.floor(d8.measureText(month).width), yE = Math.floor(.5 * (a3 + xn)), yF = (yF = mN + hL - (xm + 1) * xi) < yE ? yE : hL - yE < yF ? hL - yE : yF, hJ = d3 - Math.floor(xj * Math.pow(ad[xm], xr)), yG = Math.floor(1.1 * xn),
			yH = d3 - yG < hJ ? d3 - yG : hJ, d8.fillStyle = dB.iR, d8.fillRect(hL - nE - xn, yH - yG, nE + xn, yG), d8.fillRect(yF - yE, d3 - yG, a3 + xn, yG), d8.fillStyle = dB.dC, d8.textAlign = vN, d8.fillText(month, Math.floor(hL - .5 *
				xn), yH),
			function(hJ, yG) {
				for (var nD, sQ = -1, cm = ad.length - xm - 1, aE = xu.length - 1; 0 <= aE; aE--) cm >= xu[aE].bU && cm <= xu[aE].oX && (-1 === sQ || xu[aE].oX - xu[aE].bU < xu[sQ].oX - xu[sQ].bU) && (sQ = aE); - 1 !== sQ && (nD = Math.floor(
					d8.measureText(xu[sQ].uH).width), d8.fillStyle = dB.iR, d8.fillRect(hL - nD - xn, hJ, nD + xn, yG), d8.fillStyle = dB.dC, d8.fillText(xu[sQ].uH, Math.floor(hL - .5 * xn), hJ + yG))
			}(yH - 2 * yG, yG), d8.textAlign = dA, d8.fillText(yB, yF, d3), d8.strokeStyle = dB.iX, d8.lineWidth = 1, d8.beginPath(), d8.moveTo(0, hJ), d8.lineTo(hL, hJ), d8.closePath(), d8.stroke())
	}
}

function rM() {
	var ct, cu, hE, yJ, yK, dL, n8, vg, q8, yL, yM, yN, yO;
	this.hD = 0, this.ez = 0, this.b = function() {
		yK = mm, yM = "rgba(0,100,0,0.8)", yN = "rgba(150,0,0,0.8)", vg = !(yL = !0), q8 = bO[bN], this.resize()
	}, this.resize = function() {
		cu = Math.floor((a0 ? .305 : .24) * ck), this.ez = Math.floor(.5 + .13 * cu), cu = Math.floor(6 * this.ez), ct = cn + Math.floor(.8 * this.ez) + co, yO = Math.floor(.5 * this.ez), az.lr.font = ct, hE = ko, yJ = Math.floor(1 + .13 * this
			.ez), (dL = document.createElement("canvas")).width = cu, dL.height = this.ez, (n8 = dL.getContext("2d", {
			alpha: !0
		})).font = ct, n8.textBaseline = d9, n8.textAlign = dA, this.yP()
	}, this.w6 = function() {
		return a0 && a1 < 1.2 * a2
	}, this.wk = function() {
		this.w6() ? this.hD = hL - cu - ko : this.hD = Math.floor(gN.yQ() + (hL - gN.yQ() - g9.cu - cu) / 2 - .5 * ko)
	}, this.gf = function() {
		vg && (vg = !1, this.yP())
	}, this.yP = function() {
		n8.clearRect(0, 0, cu, this.ez), n8.fillStyle = yL ? yM : yN, n8.fillRect(0, 0, cu, this.ez), n8.fillStyle = dB.iV, this.yR(), this.yS(), n8.fillStyle = bO[bN] >= bP.fJ(bN) ? dB.iq : dB.dC, n8.fillText(gR.hU(q8), Math.floor(cu / 2), yO),
			n8.fillStyle = dB.dC, n8.fillRect(0, 0, cu, 1), n8.fillRect(0, 0, 1, this.ez), n8.fillRect(0, this.ez - 1, cu, 1), n8.fillRect(cu - 1, 0, 1, this.ez)
	}, this.yR = function() {
		var mV = we(Math.floor((bP.yT() - 1) * this.ez / 9), this.ez - yJ);
		n8.fillRect(0, mV, yJ, this.ez - mV), n8.fillRect(cu - yJ, mV, yJ, this.ez - mV)
	}, this.yS = function() {
		n8.fillRect(yJ, this.ez - yJ, Math.floor((cu - 2 * yJ) * bO[bN] / yK), yJ)
	}, this.fF = function() {
		0 !== e6[bN] && 2 !== e7[bN] && q8 !== bO[bN] && (yK = tn(bO[bN], yK), yL = bO[bN] > q8 && 10 <= bO[bN], q8 = bO[bN], vg = !0)
	}, this.d7 = function() {
		0 === e6[bN] || hr || 2 === e7[bN] || d8.drawImage(dL, this.hD, hE)
	}
}

function rN() {
	var yV, yW, yX, yY, yZ, ya, yb, yc, yd, ye, yf, yg, yh, yi, yj, yk, yl, ym, yn, title, yo, yp, yq, yr, ys, position, yt, yu, yv, yw, yx = 1;

	function z0() {
		yb.clearRect(0, 0, yV, wM), yb.fillStyle = dB.j2, yb.fillRect(0, 0, yV, yg), yb.fillStyle = dB.iQ, yb.fillRect(0, yg, yV, wM - yg), yU[bN] >= position && z3(yU[bN] - position, dB.im), 0 !== yU[bN] && 0 === position && z3(0, dB.j6), -1 !==
			ys && z3(ys, dB.iU), yb.fillStyle = dB.dC, yb.fillRect(0, yg, yV, 1), yb.fillRect(0, 0, yV, vR), yb.fillRect(0, 0, vR, wM), yb.fillRect(yV - vR, 0, vR, wM), yb.fillRect(0, wM - vR, yV, vR), yb.font = yW, yb.textBaseline = d9, yb
			.textAlign = dA, yb.fillText(title, Math.floor(yV / 2), Math.floor(ye + yX / 2));
		var ej, bd = yU[bN] < position + yZ - 1 ? 1 : 2;
		for (yb.font = yY, yb.textAlign = tv, ej = yZ - bd; 0 <= ej; ej--) z4(gr[ej + position]), z5(ej, ej + position, gr[ej + position]);
		for (yb.textAlign = vN, ej = yZ - bd; 0 <= ej; ej--) z4(gr[ej + position]), z6(ej, gr[ej + position]);
		2 == bd && (z4(bN), yb.textAlign = tv, z5(yZ - 1, yU[bN], bN), yb.textAlign = vN, z6(yZ - 1, bN)), 0 === position && (bd = .7 * yh / cq.get(4).height, yb.setTransform(bd, 0, 0, bd, Math.floor(yi + .58 * yh + .5 * bd * cq.get(4).width), Math
			.floor(ye + yX + .4 * yh)), yb.imageSmoothingEnabled = !0, yb.drawImage(cq.get(4), -Math.floor(cq.get(4).width / 2), -Math.floor(cq.get(4).height / 2)), yb.setTransform(1, 0, 0, 1, 0, 0))
	}

	function z4(player) {
		cS && (yb.fillStyle = fW.z8[fW.oE[fW.fX[player]]])
	}

	function z3(aE, sV) {
		yb.fillStyle = sV, aE = yZ - 1 < aE ? yZ - 1 : aE;
		sV = Math.floor((aE === yZ - 1 ? 2 : 0 === aE ? 1.15 : 1) * yh), sV = aE === yZ - 2 ? Math.floor(yg + 9.15 * yh) - Math.floor(yg + 8.15 * yh) : sV;
		yb.fillRect(0, Math.floor(yg + (aE + (0 === aE ? 0 : .15)) * yh), yV, sV)
	}

	function z5(zA, zB, aE) {
		yb.fillText(yo[zB], yi, Math.floor(ye + yX + (zA + .5) * yh)), 1 === e7[aE] && (yb.font = vO + yY);
		zB = Math.floor(ye + yX + (zA + .5) * yh);
		yb.fillText(ym[aE] === aE ? hV[aE] : yl[ym[aE] % bZ], yj, zB), 0 !== e7[aE] && (yb.font = yY), aE < e5 && 2 !== e7[aE] || yb.fillRect(yj, zB + .35 * yx, yn[aE], Math.max(1, .1 * yx))
	}

	function z6(zA, aE) {
		yb.fillText(bv[aE], yk, Math.floor(ye + yX + (zA + .5) * yh))
	}

	function zK(hE) {
		return (hE -= ko + yg) < 0 ? Math.floor(hE / yh) - 1 : hE < (yZ - 1) * yh ? Math.floor(hE / yh) : hE < wM - yg ? yZ - 1 : (hE -= wM - yg, yZ + Math.floor(hE / yh))
	}

	function sz(hD, hE) {
		return ko <= hD && hD < ko + yV && ko <= hE && hE < ko + wM
	}
	this.b = function() {
		var aE, v, ej;
		for (yu = !1, title = "LEADERBOARD", yZ = a0 ? 6 : 10, position = yw = yv = yt = 0, yr = !(ys = -1), yp = new Uint16Array(yZ + 1), yq = new Uint32Array(yZ + 1), yd = bZ, gr = new Uint16Array(yd), yU = new Uint16Array(yd), aE = yd -
			1; 0 <= aE; aE--) gr[aE] = aE, yU[aE] = aE;
		this.resize(!0), yl = [], ym = new Uint16Array(bZ), yn = new Uint16Array(bZ);
		var yy = Math.floor(yV - yj - yi - yc),
			yz = 0;
		for (yo = new Array(bZ), yb.font = yY, aE = bZ - 1; 0 <= aE; aE--)
			if (yo[aE] = aE + 1 + ".", ym[aE] = aE, yn[aE] = Math.floor(yb.measureText(hV[aE]).width), yn[aE] > yy) {
				for (v = hV[aE], ej = hV[aE].length - 1; 1 <= ej && (v = v.substring(0, ej), yn[aE] = Math.floor(yb.measureText(v + "...").width), !(yn[aE] <= yy)); ej--);
				v += "...", yl.push(v), ym[aE] = bZ + yz++
			} z0()
	}, this.resize = function(b) {
		if (wM = a0 ? (yV = Math.floor(.335 * ck), Math.floor(yZ * yV / 8)) : (yV = Math.floor(.27 * ck), Math.floor(yZ * yV / 10)), yV = Math.floor(.97 * yV), (ya = document.createElement("canvas")).width = yV, ya.height = wM, yb = ya
			.getContext("2d", {
				alpha: !0
			}), ye = .025 * yV, yX = .16 * yV, yf = 0 * yV, yg = Math.floor(.45 * ye + yX), yh = (wM - yX - 2 * ye - yf) / yZ, yW = cn + Math.floor(.55 * yX) + co, yx = Math.floor((a0 ? .67 : .72) * yh), yY = yx + co, yb.font = yY, yi = Math
			.floor(.04 * yV), yj = Math.floor((a0 ? .195 : .18) * yV), yc = Math.floor(yb.measureText("00920600").width), yb.font = yW, yk = yV - yi, !b) {
			yb.font = yY;
			for (var aE = bZ - 1; 0 <= aE; aE--) yn[aE] = Math.floor(yb.measureText(ym[aE] === aE ? hV[aE] : yl[ym[aE] % bZ]).width);
			z0()
		}
	}, this.yQ = function() {
		return yV
	}, this.gf = function(uV) {
		yr && (uV || aL.fU() % hR.z1[hR.hS.z2] == 0) && (yr = !1, z0())
	}, this.fF = function() {
		! function() {
			for (var ej = yd - 1; 0 <= ej; ej--) 0 === e6[gr[ej]] && ! function(ej) {
				var zI = gr[ej];
				yd--;
				for (var aE = ej; aE < yd; aE++) gr[aE] = gr[aE + 1], yU[gr[aE]] = aE;
				gr[yd] = zI, yU[gr[yd]] = yd
			}(ej)
		}();
		for (var zG, iA = yd - 1, ej = 0; ej < iA; ej++) bv[gr[ej]] < bv[gr[ej + 1]] && (zG = gr[ej], gr[ej] = gr[ej + 1], gr[ej + 1] = zG, yU[gr[ej]] = ej, yU[gr[ej + 1]] = ej + 1);
		! function() {
			for (var a3 = yr, bd = (yr = !0, yU[bN] >= yZ - 1 ? yZ - 2 : yZ - 1), aE = bd; 0 <= aE; aE--)
				if (yp[aE] !== gr[aE] || yq[aE] !== bv[gr[aE]]) return;
			(bd != yZ - 2 || yp[yZ] === yU[bN] && yq[yZ] === bv[bN]) && (yr = a3)
		}();
		for (var aE = yZ - 1; 0 <= aE; aE--) yp[aE] = gr[aE], yq[aE] = bv[gr[aE]];
		yp[yZ] = yU[bN], yq[yZ] = bv[bN]
	}, this.cz = function(hD, hE) {
		return !!sz(hD, hE) && (yt = aL.aM, yu = !0, yv = yw = zK(hE), pB.pf() && (hD = x4(-1, yw, yZ), ys !== (hD = hD === yZ ? -1 : hD)) && (ys = hD, z0(), aL.cx = !0), !0)
	}, this.om = function(hD, hE) {
		var a3, zJ = zK(hE);
		return yu ? (a3 = position, (position = x4(0, position += yv - zJ, bZ - yZ)) !== a3 && (zJ = (zJ = x4(-1, yv = zJ, yZ)) !== yZ && sz(hD, hE) ? zJ : -1, ys = zJ, z0(), aL.cx = !0), !0) : (zJ = (zJ = x4(-1, zJ, yZ)) === yZ || !sz(hD, hE) ||
			pB.pf() ? -1 : zJ, ys !== zJ && (ys = zJ, z0(), aL.cx = !0))
	}, this.pJ = function(hD, hE) {
		if (!yu) return !1;
		yu = !1;
		var zJ = zK(hE);
		return pB.pf() && -1 !== ys && (ys = -1, z0(), aL.cx = !0), aL.aM - yt < 350 && yw === zJ && -1 !== (zJ = (zJ = x4(-1, zJ, yZ)) !== yZ && sz(hD, hE) ? zJ : -1) && (hD = gr[zJ + position], zJ === yZ - 1 && yU[bN] >= position + yZ - 1 && (
			hD = bN), cS && displayDonationsHistory(hD, hV, fx), 0 !== e6[hD]) && gY.hs(hD, 800, !1, 0), !0
	}, this.op = function(hD, hE, deltaY) {
		var zL;
		return !(yu || hu || (zL = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !sz(hD, hE)) || (hD = (hD = x4(-1, zK(hE), yZ)) === yZ || pB.pf() ? -1 : hD, 0 < deltaY ? position < bZ - yZ && (position += Math.min(bZ - yZ - position, zL), ys =
			hD, z0(), aL.cx = !0) : 0 < position && (position -= Math.min(position, zL), ys = hD, z0(), aL.cx = !0), 0))
	}, this.d7 = function() {
		d8.drawImage(ya, ko, ko)
	}
}

function rO() {
	var dL, n8, hD, hE, vZ, zM, kt, zN, cs, zO, t5, bS, zP, zQ, zR, zS, zT, zU;

	function zX() {
		n8.clearRect(0, 0, g9.cu, g9.ez), n8.fillStyle = dB.iR, n8.fillRect(0, 0, g9.cu, g9.ez), n8.fillStyle = dB.ih, dq = 0 < zR ? zR : Math.sqrt(bS[4] / 1e4), n8.fillRect(0, g9.ez - vZ - 1, Math.floor(dq * g9.cu), vZ), n8.fillStyle = dB.dC, n8
			.fillRect(0, 0, g9.cu, 1), n8.fillRect(0, 0, 1, g9.ez), n8.fillRect(g9.cu - 1, 0, 1, g9.ez), n8.fillRect(0, g9.ez - 1, g9.cu, 1), n8.fillRect(0, g9.ez - vZ - 1, g9.cu, 1);
		for (var dq, zZ, a3 = 0, aE = 0; aE < t5.length; aE++) zP[aE] ? (n8.textAlign = tv, zZ = Math.floor((zM - vZ + 2 * zN) * (aE - a3 + 1) / (t5.length + 1) - .7 * zN), n8.fillText(t5[aE], kt, zZ), n8.textAlign = vN, 5 === aE && 0 !== e6[bN] &&
			bO[bN] >= bP.fJ(bN) ? (n8.fillStyle = dB.j4, n8.fillText(zW(aE), g9.cu - kt, zZ), n8.fillStyle = dB.dC) : n8.fillText(zW(aE), g9.cu - kt, zZ)) : a3++
	}

	function zW(aE) {
		return aE < 3 ? bS[aE].toString() : 3 === aE || 4 === aE || 5 === aE ? g9.uQ(bS[aE] / 100, 2) : aE < 7 ? gR.hU(bS[aE]) : aE === 7 ? g9.yT(bS[7]) : aE === 8 ? utils.getMaxTroops(bv, bN) : utils.getDensity(bO, bv, bN)
	}

	function zV() {
		bv[bN] !== bS[6] && (bS[6] = bv[bN], zO++)
	}
	this.b = function() {
		zR = zS = 0, (t5 = new Array(8))[0] = "Humans", t5[1] = fx ? "Players" : "Bots", t5[2] = "Spectators", t5[3] = "Threshold", t5[4] = "Occupation", t5[5] = "Interest", t5[6] = "Income", t5[7] = "Time", t5.push("Max Troops", "Density"), zU =
			qR - bJ(qR, 100), (bS = new Array(t5.length))[0] = fx ? 0 : e5, bS[1] = fx ? fY : fq, bS[2] = o5, bS[3] = 0, bS[4] = bJ(1e4 * bv[0], qR), bS[5] = 700, bS[6] = 0, zV(), bS[7] = 0, zQ = zW(6), zP = new Array(t5.length);
		for (var aE = t5.length - 1; 0 <= aE; aE--) zP[aE] = !0;
		zT = 0, zT = fx ? (zP[0] = !1, zP[2] = !1, zP[3] = !1, 3) : (zP[3] = !1, 1), zO = 0, this.resize()
	}, this.resize = function() {
		this.cu = Math.floor((a0 ? .1646 : .126) * 1.25 * ck), this.ez = Math.floor(1.18 * this.cu), vZ = Math.floor(.04 * this.cu), kt = Math.floor(.035 * this.cu), zN = .04 * this.cu, zM = this.ez, this.ez -= Math.floor(zT * (this.ez - 2 *
			vZ) / t5.length), cs = Math.floor(.7 * (zM - vZ) / t5.length), cs = cn + cs + co, (dL = document.createElement("canvas")).width = this.cu, dL.height = this.ez, (n8 = dL.getContext("2d", {
			alpha: !0
		})).font = cs, n8.textBaseline = d9, n8.lineWidth = 1, this.qL(), this.wk(), gQ.wk(), zX()
	}, this.wk = function() {
		hD = hL - this.cu - ko
	}, this.zY = function() {
		hE = ko
	}, this.qL = function() {
		hE = ko + (gQ.w6() && 0 !== e6[bN] && !hr ? gQ.ez + ko : 0)
	}, this.gf = function(uV) {
		0 < zO && (uV || 100 <= zO) && (zO = 0, zX())
	}, this.sd = function() {
		return bS[7]
	}, this.yT = function(value) {
		var ca = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * ca) / 1e3);
		return value < 10 ? ca + ":0" + value : ca + ":" + value
	}, this.uQ = function(bc, vp) {
		return bc.toFixed(vp) + "%"
	}, this.fF = function() {
		var zj, per;
		zP[0] && o6 - o5 !== bS[0] && (bS[0] = o6 - o5, zO++), fY - bS[0] !== bS[1] && (bS[1] = fY - bS[0], zO++), this.gA(), (zj = bP.zk(bN)) !== bS[5] && (bS[5] = zj, zO++), zV(), bS[7] += aL.zl, zj = zW(7), zQ !== zj && (zQ = zj, zO += 100),
			zj = cS ? gU.oG() : bv[gr[0]], per = bJ(1e4 * zj, qR), bS[3] = zj, bS[4] !== per && (zO++, bS[4] = per), 8 === fv && function() {
				if (0 === e6[0]) gC.np.nx(1);
				else {
					if (0 !== e6[1]) return;
					gC.np.nx(0)
				}
				return 1
			}() || bS[3] < zU || bS[3] !== qR && ! function() {
				for (var aE = fY - 1; 0 <= aE; aE--)
					if (0 < bV[fZ[aE]].length) return;
				return 1
			}() || gC.np.nx(-1)
	}, this.gA = function() {
		zP[2] && o5 !== bS[2] && (bS[2] = o5, zO++)
	}, this.zm = function(aE) {
		var pv, zn, a3;
		return 2 !== gg && (aE === qV ? (zR = 0, zX(), !1) : (-1 !== aE || 0 !== zS) && (zn = zR, zR = cJ ? aE / qV : (a3 = performance.now(), 0 <= aE && (pv = a3 - 392 * aE, zS = 0 === aE || pv < zS ? pv : zS), 1 < (zR = (a3 - zS) / (392 *
			qV)) ? 1 : zR), zX(), zR !== zn))
	}, this.d7 = function() {
		d8.drawImage(dL, hD, hE)
	}
}

function rP() {
	var pF, zo, cu, ez, ud, zp, zq, w7, dL, hi, zr;

	function d6() {
		return Math.floor((hL - cu) / 2) < cf.ez + 2 * ko ? d3 - ez - 4 * ko - cf.ez : d3 - ez - 2 * ko
	}
	this.zs = -1, this.b = function() {
		zr = pF = !1, ud = .61, zp = .07, zq = .09, hi = w7 = ez = 0, this.zs = -1
	}, this.resize = function() {
		var n8, hI, fV, zx, zy, t9;
		pF && (cu = we(cu = a0 ? Math.floor(.69 * ck) : Math.floor(.5 * ck), tn(a1 - 2 * ko, 10)), cu = we(cu, Math.floor(3.57 * tn(a2 - 2 * ko, 3))), ez = Math.floor(.28 * cu), (dL = document.createElement("canvas")).width = cu, dL.height = ez,
			n8 = dL.getContext("2d", {
				alpha: !0
			}), hI = Math.floor(1 + ez / 40), n8.clearRect(0, 0, cu, ez), n8.fillStyle = dB.iR, n8.fillRect(hI, hI, cu - 2 * hI, ez - 2 * hI), n8.lineJoin = "bevel", n8.lineWidth = 2 * hI, n8.strokeStyle = dB.dC, n8.strokeRect(hI, hI, cu -
				2 * hI, ez - 2 * hI), n8.imageSmoothingEnabled = !0, fV = cq.get(zo), zx = fV.width, zy = fV.height, t9 = (21 === zo ? .666 : 1) * ud * ez / zy, n8.setTransform(t9, 0, 0, t9, Math.floor((cu - t9 * zx) / 2), Math.floor((ez -
				t9 * zy) / 2)), n8.drawImage(fV, 0, 0), n8.setTransform(1, 0, 0, 1, Math.floor(cu - zq * ez - zp * ez - hI), Math.floor(hI + zp * ez)),
			function(n8, bU) {
				n8.lineWidth = Math.floor(1 + ez / 80), n8.strokeStyle = dB.dC, n8.beginPath(), n8.moveTo(0, 0), n8.lineTo(bU, bU), n8.moveTo(0, bU), n8.lineTo(bU, 0), n8.stroke()
			}(n8, Math.floor(zq * ez)), n8.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(aR, zu, zv, zw) {
		pF || zw && zr || (zo = zv ? 21 : aR ? 1 : 2, pF = zr = !0, this.resize(), n5.lE(), cf.wZ(), hi = aL.aM, -1 === this.zs && (this.zs = aL.fU()), w7 = zu ? 1 : 0)
	}, this.fF = function() {
		!pF || 1 <= w7 || (w7 = 1 < (w7 += 5e-4 * (aL.aM - hi)) ? 1 : w7, hi = aL.aM, aL.cx = !0)
	}, this.cz = function(hD, hE) {
		return !(!pF || w7 <= 0 || (hD -= Math.floor((hL - cu) / 2), hE -= d6(), hD < 0) || hE < 0 || cu < hD || ez < hE || (cu - ez / 3 < hD && hE < ez / 3 && (pF = !1, aL.cx = !0), 0))
	}, this.d7 = function() {
		!pF || w7 <= 0 || (d8.globalAlpha = w7, d8.drawImage(dL, Math.floor((hL - cu) / 2), d6()), d8.globalAlpha = 1)
	}
}

function a00() {
	this.a01 = !1, this.iJ = !1, this.qP = !1, this.a02 = [0, 0, 0, 0], this.a03 = function() {
		var hI, hJ, hK, hM;
		this.qP = this.qP || this.iJ, (this.iJ || this.a01 && this.qP) && (hI = i8.a04[0], hJ = i8.a04[1], hK = i8.a04[2], hM = i8.a04[3], hI = hI < this.a02[0] ? this.a02[0] : hI, hJ = hJ < this.a02[1] ? this.a02[1] : hJ, hK = hK > this.a02[2] ?
			this.a02[2] : hK, hM = hM > this.a02[3] ? this.a02[3] : hM, this.iJ = !1, this.a01 = !1, hI === this.a02[0] && hJ === this.a02[1] && hK === this.a02[2] && hM === this.a02[3] ? this.qQ() : hI <= hK && hJ <= hM && qm.putImageData(
				qn, 0, 0, hI, hJ, hK - hI + 1, hM - hJ + 1))
	}, this.qQ = function() {
		this.qP && this.a02[2] >= this.a02[0] && this.a02[3] >= this.a02[1] && qm.putImageData(qn, 0, 0, this.a02[0], this.a02[1], this.a02[2] - this.a02[0] + 1, this.a02[3] - this.a02[1] + 1), this.qP = !1
	}, this.o9 = function() {
		this.a02[2] >= this.a02[0] && this.a02[3] >= this.a02[1] && qm.putImageData(qn, 0, 0, this.a02[0], this.a02[1], this.a02[2] - this.a02[0] + 1, this.a02[3] - this.a02[1] + 1), this.qP = !1
	}, this.b = function() {
		var hD, hE;
		this.a01 = !1, this.iJ = !1, this.qP = !1, this.a02[0] = az.b0, this.a02[1] = az.b1, this.a02[2] = this.a02[3] = 0;
		loop: for (hD = 1; hD < az.b0 - 1; hD++)
			for (hE = az.b1 - 2; 1 < hE; hE--)
				if (1 === a05[bW.md(hD, hE) + 2]) {
					this.a02[0] = hD;
					break loop
				} loop: for (hE = 1; hE < az.b1 - 1; hE++)
			for (hD = az.b0 - 2; 1 < hD; hD--)
				if (1 === a05[bW.md(hD, hE) + 2]) {
					this.a02[1] = hE;
					break loop
				} loop: for (hD = az.b0 - 2; 0 < hD; hD--)
			for (hE = az.b1 - 2; 1 < hE; hE--)
				if (1 === a05[bW.md(hD, hE) + 2]) {
					this.a02[2] = hD;
					break loop
				} loop: for (hE = az.b1 - 2; 0 < hE; hE--)
			for (hD = az.b0 - 2; 1 < hD; hD--)
				if (1 === a05[bW.md(hD, hE) + 2]) {
					this.a02[3] = hE;
					break loop
				}
	}
}

function a06() {
	this.pF = !1, this.tP = null, this.a07 = 0, this.cu = null, this.ez = null, this.a08 = .013, this.a09 = .022, this.a0A = .025;
	this.a0C = 3, this.a0D = 1.2, this.a0E = .2, this.a0F = .235, this.a0G = .9, this.a0H = .08;
	var a0J, a0I = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"],
		a0K = [-1e6, -1e6];
	this.position = [0, 0], this.a0M = [0, 0], this.b = function() {
		this.tP = [null, null], this.pF = !1, this.a07 = 0
	}, this.l = function(id) {
		this.pF = !0, this.resize(), this.a07 = id, this.cp(), pR.l(!1), aL.cx = !0
	}, this.fF = function() {
		this.pF && this.cp()
	}, this.cp = function() {
		aL.aM - 12e4 >= a0K[this.a07] && (a0K[this.a07] = aL.aM, this.a0M = [0, 0], gB.xx(0, 1 + this.a07)) && jK.a0N(0, this.a07)
	}, this.resize = function() {
		if (this.pF) {
			var aE;
			for (this.cu = this.a0O(a0 ? .85 : .66, .75, a1, a2), this.ez = Math.floor(this.cu / .75), aE = 1; 0 <= aE; aE--) this.tP[aE] && (this.tP[aE][4] = cn + Math.floor(this.tP[aE][5] * this.ez / 10) + co);
			a0J = cn + Math.floor(.1 * this.ez) + co
		}
	}, this.a0O = function(ci, dK, cu, ez) {
		return cu < dK * ez ? Math.floor(ci * cu) : Math.floor(dK * ci * ez)
	}, this.a0P = function(cm, a0Q, a0R, vp, a0S, a0T, zA) {
		this.position[cm] = zA;
		for (var w4, dF = a0Q.length, ct = cn + Math.floor(a0S * this.ez / 10) + co, ad = (this.a0U(a0Q, ct, a0T * this.cu), [
				[], dF, -1, vp, ct, a0S, 10 * zA
			]), aE = 0; aE < dF; aE++) w4 = {
			name: a0Q[aE].name,
			value: a0Q[aE].nL / a0R,
			colorIndex: a0Q[aE].colorIndex
		}, ad[0].push(w4);
		this.tP[cm] = ad, this.a0V(cm);
		a0T = this.tP[cm][0][0].name;
		1 === cm && (a0T = "[" + a0T + "]"), 0 === zA && a0W.cl(cm, a0T), aL.cx = !0
	}, this.a0V = function(aE) {
		this.tP[aE][0].sort(function(ej, cV) {
			return cV.value - ej.value
		})
	}, this.a0X = function(cm, name, a0Y, a0Z) {
		if (this.tP && this.tP[cm]) {
			var aE, uI = !1;
			if (0 === cm) {
				for (aE = 0; aE < this.tP[cm][0].length; aE++)
					if (name === this.tP[cm][0][aE].name && a0Y > .99 * this.tP[cm][0][aE].value && a0Y < 1.01 * this.tP[cm][0][aE].value) {
						this.tP[cm][0][aE].value = a0Z, uI = !0;
						break
					} uI || this.tP[cm][0].push({
					name: name,
					value: a0Z
				})
			} else {
				for (aE = 0; aE < this.tP[cm][0].length; aE++)
					if (name === this.tP[cm][0][aE].name) {
						this.tP[cm][0][aE].value += 32 < this.tP[cm][0][aE].value ? (64 - this.tP[cm][0][aE].value) / 256 : .25, this.tP[cm][0][aE].value *= 1 / (383 / 384), uI = !0;
						break
					} for (aE = 0; aE < this.tP[cm][0].length; aE++) this.tP[cm][0][aE].value *= 383 / 384;
				uI || this.tP[cm][0].push({
					name: name,
					value: .25
				})
			}
			this.a0V(cm)
		}
	}, this.a0U = function(a0Q, ct, cw) {
		for (var aE = a0Q.length - 1; 0 <= aE; aE--)
			for (; 3 < a0Q[aE].name.length && cv.measureText(a0Q[aE].name, ct) > cw;) a0Q[aE].name = a0Q[aE].name.substring(0, a0Q[aE].name.length - 4) + "..."
	}, this.cz = function(du, dv) {
		return !!this.pF && (du -= (hL - this.cu) / 2, dv -= (d3 - this.ez) / 2, du < 0 || du > this.cu || dv < 0 || dv > this.ez ? (this.pF = !1, 0 === aT.pT() && pR.l(!0), aL.cx = !0) : (dv = dv < .3 * this.ez ? 1 : dv < .85 * this.ez ? (dv = (
				0 === this.a07 ? 14.1 : 3) * (dv - .3 * this.ez) / (.55 * this.ez), Math.floor(1 + dv * dv)) : 0 === this.a07 ? 200 : 10, du < this.cu / 2 ? this.a0M[this.a07] = -dv : this.a0M[this.a07] = dv, a0K[this.a07] + 50 > aL.aM ||
			(a0K[this.a07] = aL.aM, gB.xx(0, 1 + this.a07) && jK.a0N(0, this.a07)), !0))
	}, this.d7 = function() {
		var hI, hJ, nD, nE, a0a, a0b, px, py;
		this.pF && (hI = (hL - this.cu) / 2, hJ = (d3 - this.ez) / 2, nD = this.a08 * this.cu, nE = this.a0C * nD, a0a = this.a09 * this.cu, a0b = this.a0D * a0a, px = this.a0A * this.cu, py = Math.floor(.25 * this.ez), d8.setTransform(1, 0, 0,
				1, hI, hJ), d8.fillStyle = 0 === this.a07 ? dB.iy : dB.iw, d8.fillRect(0, 0, this.cu, py), d8.fillStyle = dB.iQ, d8.fillRect(0, py, this.cu, this.ez - py), d8.fillStyle = dB.dC, d8.font = a0J, d8.textBaseline = d9, d8
			.textAlign = dA, d8.fillText(a0I[this.a07], Math.floor(this.cu / 2), Math.floor(.135 * this.ez)), d8.font = cn + Math.floor(.025 * this.ez) + co, d8.fillText(a0I[this.a07 + 2], Math.floor(this.cu / 2), Math.floor(.2125 * this
			.ez)), d8.beginPath(), d8.moveTo(this.cu / 4, 0), d8.lineTo(this.cu / 2 - nD, 0), d8.lineTo(this.cu / 2, -nE), d8.lineTo(this.cu / 2 + nD, 0), d8.lineTo(this.cu - a0a, 0), d8.lineTo(this.cu + a0b, -a0b), d8.lineTo(this.cu, a0a),
			d8.lineTo(this.cu, this.ez / 2 - nD), d8.lineTo(this.cu + nE, this.ez / 2), d8.lineTo(this.cu, this.ez / 2 + nD), d8.lineTo(this.cu, this.ez - a0a), d8.lineTo(this.cu + a0b, this.ez + a0b), d8.lineTo(this.cu - a0a, this.ez), d8
			.lineTo(this.cu / 2 + nD, this.ez), d8.lineTo(this.cu / 2, this.ez + nE), d8.lineTo(this.cu / 2 - nD, this.ez), d8.lineTo(a0a, this.ez), d8.lineTo(-a0b, this.ez + a0b), d8.lineTo(0, this.ez - a0a), d8.lineTo(0, this.ez / 2 + nD),
			d8.lineTo(-nE, this.ez / 2), d8.lineTo(0, this.ez / 2 - nD), d8.lineTo(0, a0a), d8.lineTo(-a0b, -a0b), d8.lineTo(a0a, 0), d8.lineTo(this.cu / 4, 0), d8.lineTo(this.cu / 4, px), d8.lineTo(px, px), d8.lineTo(px, this.ez - px), d8
			.lineTo(this.cu - px, this.ez - px), d8.lineTo(this.cu - px, px), d8.lineTo(this.cu / 4, px), d8.fill(), this.tP[this.a07] && this.a0c(py), this.a0d(py), d8.setTransform(1, 0, 0, 1, 0, 0))
	}, this.a0d = function(py) {
		var nD = tn(2, Math.floor(.06 * this.cu)),
			ud = (nD -= nD % 2, tn(2, Math.floor(.01 * this.cu))),
			py = (ud -= ud % 2, Math.floor(.82 * py));
		d8.fillRect(nD, py, nD, ud), d8.fillRect(this.cu - nD - nD, py, nD, ud), d8.fillRect(Math.floor(this.cu - nD - nD + (nD - ud) / 2), Math.floor(py - (nD - ud) / 2), ud, nD)
	}, this.a0c = function(py) {
		var hE;
		d8.font = this.tP[this.a07][4];
		for (var aE = this.tP[this.a07][1] - 1; 0 <= aE; aE--) d8.textAlign = vN, hE = Math.floor(this.a0H * this.ez + py + aE * ((1 - 2 * this.a0H) * this.ez - py) / 9), d8.fillText(this.tP[this.a07][0][aE].value.toFixed(this.tP[this.a07][3]),
			Math.floor(this.a0G * this.cu), hE), d8.fillText(aE + 1 + this.tP[this.a07][6] + ".", Math.floor(this.a0E * this.cu), hE), d8.textAlign = tv, d8.fillText(this.tP[this.a07][0][aE].name, Math.floor(this.a0F * this.cu), hE)
	}
}

function a0e() {
	var hD, hE, ez, a0f, a0g, a0h, a0i, a0j, a0k, cu, a0l, a0m;
	this.pF = !1, this.b = function(v, a0n) {
		if (13 <= q && q < 18) return a0n ? void(a0l = v) : a0l !== v ? void 0 : void n.saveString(200, v);
		a0n && ((d4.tP[1].nz.pF || d4.tP[2].nz.pF) && d4.pU(), pR.l(!1), a0l = v, (a0m = document.createElement("a")).appendChild(document.createTextNode(a0l)), this.pF = !0, a0m.title = a0l, a0m.target = "_blank", a0m.href = a0l, a0m.style
			.textAlign = "center", a0m.style.color = dB.dC, a0m.style.position = "absolute", a0m.style.padding = "0px", a0m.style.margin = "0px", this.resize(), document.body.appendChild(a0m), aL.cx = !0)
	}, this.lE = function() {
		return !(!this.pF || (document.body.removeChild(a0m), this.pF = !1))
	}, this.cz = function(du, dv) {
		return !!this.pF && ((du < hD || dv < hE || hD + cu < du || hE + ez < dv || hD + cu - a0f < du && dv < hE + a0f) && (aL.cx = !0, this.pF = !1, document.body.removeChild(a0m), 0 === aT.pT()) && pR.l(!0), !0)
	}, this.resize = function() {
		var ct, a0o;
		this.pF && (a0j = Math.floor(.8 * (a0 ? a2 < a1 ? .6 : .55 : .4) * ck), a0f = Math.floor(.15 * a0j), a0g = Math.floor(.35 * a0f), a0h = Math.floor(.5 * a0f), a0i = Math.floor(2.5 * a0h), ez = a0f + a0g + 3 * a0h, ct = cn + Math.floor(
			a0g / lM) + co, a0k = Math.floor(lM * cv.measureText(a0l, ct)), a0o = cu = (a0j < a0k ? a0k : a0j) + 2 * a0i, cu = Math.min(cu, a1 - 2 * (a0 ? 2 : 1) * ko), ct = cn + Math.floor(cu / a0o * a0g / lM) + co, a0k = Math.floor(lM *
			cv.measureText(a0l, ct)), hD = Math.floor((hL - cu) / 2), hE = Math.floor((d3 - ez) / 2), a0m.style.font = ct, a0m.style.top = Math.floor((hE + 1.4 * a0h + a0f) / lM) + "px", a0m.style.left = Math.floor((hD + (cu - a0k) / 2) /
			lM) + "px")
	}, this.d7 = function() {
		this.pF && (d8.fillStyle = dB.iR, d8.fillRect(hD, hE + a0f, cu, ez - a0f), d8.fillStyle = dB.jA, d8.fillRect(hD, hE, cu, a0f), d8.fillStyle = dB.dC, d8.lineWidth = pz, d8.strokeStyle = dB.dC, d8.strokeRect(hD, hE, cu, ez), d8.fillRect(hD,
			hE + a0f, cu, pz), d8.font = cn + Math.floor(.48 * a0f) + co, d8.textAlign = dA, d8.textBaseline = d9, d8.fillText("You are leaving Territorial.io!", Math.floor(hD + (cu - .5 * a0f) / 2), Math.floor(hE + .55 * a0f)), cK.tN(
			Math.floor(hD + cu - .8 * a0f), Math.floor(hE + .25 * a0f), Math.floor(.5 * a0f)), d8.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function a0p() {
	var kt, t5, hD = [0, 0, 0, 0, 0],
		hE = [0, 0, 0, 0, 0],
		i4 = [1, 1, 1, 1, 1],
		aR = [!0, !0, !0, !0, !0],
		fV = (this.ai = [!0, !0, !0, !0, !0], null);
	this.a0q = function(sS, a0r) {
		fV = sS, aR = a0r, t5 = [r8.a0s, r8.a0t, r8.a0u, r8.a0v, r8.a0w], this.b()
	}, this.b = function() {
		if (cq.cr()) {
			var aE, nD = Math.floor((a0 ? .261 : .195) * ck),
				nE = Math.floor(.9 * nD),
				ud = Math.floor(.17 * nE);
			if (kt = a0 ? 2 * ko : ko, i4[0] = nD / fV[0].width, i4[1] = nE / fV[1].width, i4[2] = ud / fV[2].height, i4[3] = ud / fV[3].height, i4[4] = ud / fV[4].height, i4[3] *= 1.07, hD[0] = kt, hD[1] = kt, hD[2] = kt, hD[3] = kt, hD[4] =
				Math.floor(2 * kt + i4[3] * fV[3].width), hE[0] = kt, hE[1] = hE[0] + kt + i4[0] * fV[0].height, hE[2] = hE[1] + kt + i4[1] * fV[1].height, hE[3] = hE[2] + kt + i4[2] * fV[2].height, hE[4] = hE[3], !aR[0])
				for (aE = 0; aE < 5; aE++) hE[aE] -= i4[0] * fV[0].height + kt;
			if (!aR[1])
				for (aE = 2; aE < 5; aE++) hE[aE] -= i4[1] * fV[1].height + kt
		}
	}, this.pF = function() {
		return !(7 === aT.pT() && a0)
	}, this.cz = function(du, dv, a0n) {
		if (fV && this.pF())
			for (var aE = aR.length - 1; 0 <= aE; aE--)
				if (aR[aE] && this.ai[aE] && hD[aE] < du && hE[aE] < dv && du < hD[aE] + i4[aE] * fV[aE].width && dv < hE[aE] + i4[aE] * fV[aE].height) return pQ.b(t5[aE], a0n), !0;
		return !1
	}, this.d7 = function() {
		if (fV && this.pF()) {
			var aE;
			for (d8.imageSmoothingEnabled = !0, aE = 0; aE < 5; aE++) aR[aE] && this.ai[aE] && (d8.setTransform(i4[aE], 0, 0, i4[aE], hD[aE], hE[aE]), d8.drawImage(fV[aE], 0, 0));
			d8.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function s5() {
	this.id = 0, this.un = 0;
	var a0x = null,
		a0y = !1;
	this.b = function() {
		var t2, ae, ag;
		n ? this.id = 1 : m ? this.id = 2 : (function() {
			try {
				if (!(a0x = window.localStorage)) return a0x = null;
				a0x.setItem("testLS", "1"), a0x.removeItem("testLS")
			} catch (error) {
				return a0x = null
			}
			a0y = !0
		}(), t2 = this, a0y && (ae = Number(a0x.getItem("zt0")), ag = Number(a0x.getItem("zt1")), ae && ag ? (t2.id = ae, t2.un = Math.floor(Date.now() / 3e5) - ag) : (a0x.setItem("zt0", "" + Math.floor(3 + Math.random() * (Math.pow(2,
			20) - 3))), a0x.setItem("zt1", "" + Math.floor(Date.now() / 3e5)))))
	}
}

function rQ() {
	var a07, a13, a14;

	function a19(aE) {
		var button = qv.sG[aE],
			hD = button.hD,
			hE = button.hE,
			cu = button.cu,
			ez = button.ez;
		d8.fillStyle = button.a17, d8.fillRect(hD, hE, cu, ez), aE === a07 && (d8.fillStyle = a14, d8.fillRect(hD, hE, cu, ez)), d8.lineWidth = pz, d8.strokeStyle = a13, d8.strokeRect(hD, hE, cu, ez),
			function(button) {
				var hD = button.hD,
					hE = button.hE,
					cu = button.cu,
					ez = button.ez;
				d8.textAlign = dA, d8.textBaseline = d9, d8.font = button.font, d8.fillStyle = a13, d8.fillText(button.uj, Math.floor(hD + cu / 2), Math.floor(hE + ez / 2 + .1 * button.cs))
			}(button)
	}
	this.cu = 0, this.ez = 0, this.hE = 0, this.kt = 0, this.b = function() {
		a07 = -1, a13 = dB.dC, a14 = "rgba(255,255,255,0.16)", this.sG = new Array(7), this.ez = Math.floor((a0 ? .123 : .093) * ck), this.cu = Math.floor((a0 ? 3.96 : 4.2) * this.ez), this.kt = Math.floor(.025 * this.cu);
		var a15 = Math.floor(.26 * this.ez),
			a16 = cn + a15 + co;
		this.sG[0] = {
			hD: 0,
			hE: 0,
			cu: Math.floor(.6 * this.cu - this.kt / 2),
			ez: this.ez,
			uj: "Multiplayer",
			font: a16,
			a17: "rgba(22,88,22,0.8)",
			cs: a15
		}, a15 = Math.floor(.18 * this.ez), this.sG[1] = {
			hD: 0,
			hE: 0,
			cu: this.cu - this.sG[0].cu - this.kt,
			ez: this.ez,
			uj: "Single Player",
			font: cn + a15 + co,
			a17: "rgba(22,88,88,0.8)",
			cs: a15
		}, this.sG[2] = {
			hD: 0,
			hE: 0,
			cu: this.cu,
			ez: Math.floor(.3 * this.ez),
			uj: "",
			font: this.sG[1].font,
			a17: "rgba(100,0,0,0.8)",
			cs: this.sG[1].cs
		}, this.sG[3] = {
			hD: 0,
			hE: 0,
			cu: this.cu,
			ez: this.ez,
			uj: "Back",
			font: this.sG[0].font,
			a17: "rgba(0,0,0,0.8)",
			cs: this.sG[0].cs
		}, this.sG[4] = {
			hD: 0,
			hE: 0,
			cu: this.cu,
			ez: Math.floor(.3 * this.ez),
			uj: "The game was updated!",
			font: this.sG[1].font,
			a17: "rgba(100,0,0,0.8)",
			cs: this.sG[1].cs
		}, this.sG[5] = {
			hD: 0,
			hE: 0,
			cu: this.sG[0].cu,
			ez: Math.floor(.8 * this.ez),
			uj: "Reload",
			font: this.sG[0].font,
			a17: "rgba(0,100,0,0.8)",
			cs: this.sG[0].cs
		}, this.sG[6] = {
			hD: 0,
			hE: 0,
			cu: this.sG[1].cu,
			ez: this.sG[5].ez,
			uj: "Back",
			font: this.sG[0].font,
			a17: "rgba(0,0,0,0.8)",
			cs: this.sG[0].cs
		}, this.y5()
	}, this.y5 = function() {
		this.hE = Math.floor(.54 * d3), this.sG[0].hD = Math.floor(.5 * hL - .5 * this.cu), this.sG[1].hD = this.sG[0].hD + this.sG[0].cu + this.kt, this.sG[2].hD = this.sG[3].hD = this.sG[0].hD, this.sG[4].hD = this.sG[5].hD = this.sG[0].hD,
			this.sG[6].hD = this.sG[1].hD, this.sG[0].hE = Math.floor(.54 * d3), this.sG[1].hE = this.sG[0].hE, this.sG[2].hE = Math.floor((d3 - this.sG[2].ez - this.sG[3].ez - this.kt) / 2), this.sG[3].hE = this.sG[2].hE + this.sG[2].ez + this
			.kt, this.sG[4].hE = Math.floor((d3 - this.sG[4].ez - this.sG[5].ez - this.kt) / 2), this.sG[5].hE = this.sG[6].hE = this.sG[4].hE + this.sG[4].ez + this.kt
	}, this.a18 = function() {
		a19(0), a19(1)
	}, this.a1A = function() {
		a19(2), a19(3)
	}, this.a1B = function() {
		a19(4), a19(5), a19(6)
	}, this.om = function(hD, hE, gf) {
		var aE = -1;
		return 0 === aT.pT() ? aE = this.pP(hD, hE, 0, 2) : 3 === aT.pT() ? aE = this.pP(hD, hE, 3, 1) : 5 === aT.pT() && (aE = this.pP(hD, hE, 5, 2)), a07 !== aE && (a07 = aE, gf) && (aL.cx = !0), -1 !== aE && (pH.pI(), !0)
	}, this.pP = function(hD, hE, a1C, dF) {
		for (var aE = a1C; aE < a1C + dF; aE++)
			if (hD >= this.sG[aE].hD && hE >= this.sG[aE].hE && hD <= this.sG[aE].hD + this.sG[aE].cu && hE <= this.sG[aE].hE + this.sG[aE].ez) return aE;
		return -1
	}
}

function a1E() {
	function a1K(sV) {
		return sV < 0 ? 0 : 255 < sV ? 255 : Math.floor(sV)
	}
	this.cu = 0, this.ez = 0, this.pF = !1, this.a1F = 0, this.kt = 0, this.v4 = 0, this.a0f = 0, this.a1G = 0, this.a1H = 0, this.a1I = 0, this.colors = null, this.b = function() {
		this.pF = !0, this.a1F = 0, this.resize()
	}, this.resize = function() {
		this.pF && (a1 < 1.4 * a2 ? this.cu = Math.floor((a0 ? .94 : .43) * a1) : (this.ez = Math.floor((a0 ? .88 : .43) * a2), this.cu = Math.floor(1.4 * this.ez)), this.ez = this.cu / 1.4, this.kt = this.cu / 32, this.a0f = Math.floor(.25 *
			this.ez), this.a1G = (this.ez - this.a0f - 3 * this.kt) / 2, this.a1H = this.cu - 3 * this.kt - this.a1G, this.a1I = (this.ez - this.a0f - 4 * this.kt) / 3)
	}, this.a1J = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var v = a5().split("");
		if (v.length < 6)
			for (var cV = 2; 0 <= cV; cV--) this.colors[0][cV] = a1K(256 * Math.random());
		else
			for (var aE = 2; 0 <= aE; aE--) this.colors[0][aE] = a1K(4 * (10 * parseInt(v[2 * aE]) + parseInt(v[2 * aE + 1])));
		this.a1L()
	}, this.a1M = function() {
		return [bJ(this.colors[0][0], 4), bJ(this.colors[0][1], 4), bJ(this.colors[0][2], 4)]
	}, this.op = function(d0, d1, deltaY) {
		var hI = (hL - this.cu) / 2;
		d1 -= (d3 - this.ez) / 2 + this.a0f, (d0 -= hI) < 0 || d1 < 0 || d0 >= this.cu || d1 >= this.ez - this.a0f || (hI = Math.floor(3 * d1 / (this.ez - this.a0f)), this.colors[this.v4][hI] = a1K(this.colors[this.v4][hI] + (deltaY < 0 ? 1 : -
			1) * Math.max(Math.abs(.05 * deltaY), 1)), aL.cx = !0)
	}, this.cz = function(d0, d1) {
		this.a1F = 0;
		var hI = (hL - this.cu) / 2;
		return d1 -= (d3 - this.ez) / 2, (d0 -= hI) < 0 || d1 < 0 || d0 >= this.cu - 1 || d1 >= this.ez - 1 || d0 > this.cu - (.4 * this.a0f + 3 * this.kt) && d1 < this.a0f ? (this.pF = !1, 0 === aT.pT() && pR.l(!0), !(aL.cx = !0)) : d0 < this
			.kt || d1 < this.kt + this.a0f || d0 >= this.cu || d1 >= this.ez - this.kt || (d0 < this.kt + this.a1G ? (d1 < this.kt + this.a0f + this.a1G && 0 !== this.v4 && (this.v4 = 0, aL.cx = !0), !0) : d0 < this.kt + this.a1G || (d0 -= 2 *
				this.kt + this.a1G, d1 < this.kt + this.a0f + this.a1I ? (this.a1F = 1, this.colors[this.v4][0] = a1K(256 * d0 / this.a1H), aL.cx = !0) : d1 < 2 * this.kt + this.a0f + this.a1I || (d1 < 2 * this.kt + this.a0f + 2 * this.a1I ?
					(this.a1F = 2, this.colors[this.v4][1] = a1K(256 * d0 / this.a1H), aL.cx = !0) : !(d1 >= 3 * this.kt + this.a0f + 2 * this.a1I) || (this.a1F = 3, this.colors[this.v4][2] = a1K(256 * d0 / this.a1H), aL.cx = !0))))
	}, this.a1L = function() {
		for (var cV = 2; 0 <= cV; cV--) this.colors[0][cV] = a1K(this.colors[0][cV])
	}, this.a1N = function() {
		for (var aR, v = "", aE = 0; aE < 3; aE++)(aR = bJ(this.colors[0][aE], 4)) < 10 && (v += "0"), v += aR.toString();
		return v
	}, this.om = function(d0) {
		0 !== this.a1F && (d0 -= 2 * this.kt + this.a1G + (hL - this.cu) / 2, this.colors[this.v4][this.a1F - 1] = a1K(256 * d0 / this.a1H), aL.cx = !0)
	}, this.a1O = function() {
		0 < this.a1F && (this.a1F = 0, this.a1L(), hR.a1P(), aL.cx = !0)
	}, this.d7 = function() {
		var hI = (hL - this.cu) / 2,
			hJ = (d3 - this.ez) / 2;
		d8.setTransform(1, 0, 0, 1, hI, hJ), d8.fillStyle = dB.iR, d8.fillRect(0, this.a0f, this.cu, this.ez - this.a0f), d8.fillStyle = dB.ib, d8.fillRect(0, 0, this.cu, this.a0f), d8.fillStyle = dB.dC, d8.lineWidth = pz, d8.strokeStyle = dB.dC,
			d8.strokeRect(-1, -1, this.cu + 2, this.ez + 2), d8.fillRect(0, this.a0f, this.cu, pz), d8.font = cn + Math.floor(.31 * this.a0f) + co, d8.textBaseline = d9, d8.textAlign = dA, d8.fillText("Choose Your Nation's Color!", Math.floor((
				this.cu - this.kt - .4 * this.a0f) / 2), Math.floor(.55 * this.a0f)), this.a1Q(0), d8.lineWidth = pz, this.a1R(0), this.a1R(1), this.a1R(2), cK.tN(Math.floor(hI + this.cu - .4 * this.a0f - this.kt), Math.floor(hJ + .3 * this.a0f),
				Math.floor(.4 * this.a0f)), d8.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a1Q = function(aE) {
		var dO = this.colors[aE][0],
			pv = this.colors[aE][1],
			aE = this.colors[aE][2];
		d8.fillStyle = "rgb(" + dO + "," + pv + "," + aE + ")", d8.fillRect(this.kt, this.a0f + this.kt, this.a1G, 2 * this.a1G + this.kt), d8.lineWidth = pz, d8.strokeStyle = dB.dC, d8.strokeRect(this.kt, this.a0f + this.kt, this.a1G, 2 * this
			.a1G + this.kt), d8.fillStyle = dO + pv + aE < 306 && pv < 150 ? dB.dC : dB.hP, d8.font = cn + Math.floor(.32 * this.a1I) + co, d8.textAlign = dA, d8.textBaseline = d9, d8.rotate(-Math.PI / 2), d8.fillText("National Color", Math
			.floor(-1.5 * this.kt - this.a0f - this.a1G), Math.floor(this.kt + .5 * this.a1G)), d8.rotate(Math.PI / 2)
	}, this.a1R = function(aE) {
		d8.fillStyle = "rgb(" + (0 === aE ? 150 : 2 === aE ? 30 : 0) + "," + (1 === aE ? 130 : 2 === aE ? 30 : 0) + "," + (2 === aE ? 220 : 0) + ")", d8.fillRect(2 * this.kt + this.a1G, this.a0f + this.kt + aE * (this.kt + this.a1I), Math.floor(
				this.colors[this.v4][aE] * this.a1H / 255), this.a1I), d8.strokeStyle = dB.dC, d8.strokeRect(2 * this.kt + this.a1G, this.a0f + this.kt + aE * (this.kt + this.a1I), this.a1H, this.a1I), d8.fillStyle = dB.dC, d8.font = cn + Math
			.floor(.32 * this.a1I) + co, d8.textBaseline = d9, d8.textAlign = tv, d8.fillText((0 === aE ? "Red: " : 1 === aE ? "Green: " : "Blue: ") + this.colors[0][aE].toString(), 3 * this.kt + this.a1G, Math.floor(this.a0f + this.kt + aE * (
				this.kt + this.a1I) + .53 * this.a1I))
	}
}

function rR() {
	var a1S, a1T, vZ, vk, wh, a1U, a1V, a1W, a1X, ct, cs, hi, a1Y, a1a, a1Z = 0;

	function a1d() {
		return gB.a1e[(a1Y + a1Z) % gB.a1f]
	}

	function a1b() {
		a1Y++, hi = aL.aM, gB.xx(a1d(), 4) && (a1a = !0, jK.a1g(a1d()))
	}

	function a1j() {
		0 === a1Y ? qx.a1l(3249) : (a1Y === gB.a1f - 1 && (a1Y = -1), a1b())
	}

	function a1s(hE, xi, a1r) {
		var hI = Math.floor((hL - vk) / 2) + a1V,
			hK = hI + Math.floor(a1r * (vk - 2 * a1V));
		d8.lineWidth = xi, d8.beginPath(), d8.moveTo(hI, hE), d8.lineTo(hK, hE), d8.lineTo(Math.floor(hI - a1V + a1r * vk), hE + vZ), d8.lineTo(hI - a1V, hE + vZ), d8.closePath()
	}
	this.b = function() {
		aT.setState(6), a1S = 0, a1T = 1, a1W = "rgba(0,220,120,0.4)", a1X = "rgba(0,0,0,0.8)", this.resize(), aL.cx = !0, a1Y = 0, a1a = !1, a1b()
	}, this.resize = function() {
		vk = Math.floor((a0 ? .5 : .25) * ck), wh = vk + 12, vZ = Math.floor(.125 * vk), a1V = 3 * vZ, a1U = Math.floor(.225 * vk), cs = Math.floor(.3 * vZ), ct = vP + cs + co
	}, this.a1c = function(ej) {
		a1Z = ej
	}, this.a1h = function(a1i) {
		a1i === a1d() && (a1a = !1, a1j())
	}, this.xz = function(a1i) {
		6 !== aT.pT() || a1a || (hi = aL.aM, a1a = !0, jK.a1g(a1i))
	}, this.cz = function(hD, hE) {
		var hI = Math.floor((hL - wh) / 2),
			hJ = Math.floor(.5 * (d3 - d2 - vZ - a1U)) + vZ + d2;
		return hI < hD && hD < hI + wh && hJ < hE && hE < hJ + a1U && (this.a1m(), qv.om(hD, hE, !1), !0)
	}, this.a1m = function() {
		gB.a1n(3260), qt.b(), aL.cx = !0
	}, this.fF = function() {
		6 === aT.pT() && (a1a ? aL.aM > hi + 12e3 && qx.a1l(3250) : aL.aM > hi + 12e3 && a1j(), 100 < (a1S += .07 * a1T * (a1S < 16 ? 5 + a1S : 84 < a1S ? 105 - a1S : 17)) ? (a1S = 100, a1T = -1) : a1S < 0 && (a1S = 0, a1T = 1), a1W = "rgba(0," +
			Math.floor(190 - 1.9 * a1S) + "," + Math.floor(120 - 1.2 * a1S) + "," + (.4 + .004 * a1S) + ")", a1X = "rgba(0," + Math.floor(1.9 * a1S) + "," + Math.floor(1.2 * a1S) + "," + (.8 - .004 * a1S) + ")", aL.cx = !0)
	}, this.d7 = function() {
		var hD = Math.floor((hL - wh) / 2),
			hE = Math.floor(.5 * (d3 - d2 - vZ - a1U));
		! function(title, hE, xi, a1r) {
			d8.fillStyle = a1X, a1s(hE, xi, 1), d8.fill(), d8.fillStyle = a1W, a1s(hE, xi, a1r), d8.fill(), d8.strokeStyle = dB.dC, a1s(hE, xi, 1), d8.stroke(),
				function(a1u, hE) {
					d8.textAlign = dA, d8.textBaseline = d9, d8.font = ct, d8.fillStyle = dB.dC, d8.fillText(a1u, Math.floor(.5 * hL), Math.floor(hE + .58 * vZ))
				}(title, hE)
		}("Loading", hE, 3, a1S / 100),
		function(hD, hE, cu, ez, uj) {
			d8.fillStyle = dB.iP, d8.fillRect(hD, hE, cu, ez), d8.lineWidth = 3, d8.strokeStyle = dB.dC, d8.strokeRect(hD, hE, cu, ez);
			var bU = Math.floor(.3 * ez);
			d8.textAlign = dA, d8.textBaseline = d9, d8.font = vP + bU + co, d8.fillStyle = dB.dC, d8.fillText(uj, Math.floor(hD + cu / 2), Math.floor(hE + ez / 2 + .1 * bU))
		}(hD, hE + vZ + d2, wh, a1U, "Back")
	}
}

function rS() {
	var j;
	this.b = function() {
		qv.b(), pR.b(), j = 0, a1v.b(), qt.b()
	}, this.setState = function(a1w) {
		j = a1w
	}, this.pT = function() {
		return j
	}, this.a1x = function() {
		0 === aT.pT() && qt.a1y(), this.setState(8), r2.a1y(), d4.pU(), d5.pF = !1, pQ.cz(-1e3, -1e3)
	}, this.pU = function(oX) {
		if (!az.lt) return !1;
		if (!(aL.aM < 400)) {
			if ("Enter" === oX.key || "Escape" === oX.key) {
				if (this.a1z()) return 0 === j && pR.l(!0), !0;
				if ("Enter" === oX.key) {
					if (0 === j) return qt.a20(), !0;
					if (7 === j) return !0
				}
			}
			return !1
		}
	}, this.a21 = function() {
		return lJ.pF || d5.pF || pQ.pF || d4.a22()
	}, this.a23 = function() {
		d5.resize(), lJ.resize(), pQ.resize(), d4.resize()
	}, this.a1z = function() {
		return !!pQ.lE() || !(!d4.pU() && (d5.pF ? d5.pF = !1 : !lJ.pF || (lJ.lE(), 0)))
	}, this.aU = function() {
		aL.cx = !0, 8 === j ? hu ? gb.pW(!1) : n6.pF ? n6.pY() : lJ.pF ? lJ.lE() : cK.pY() : 7 === j ? r2.a24() : 6 === j ? qw.a1m() : 3 === j ? qx.a25(0, 0) : 2 === j ? fy.a25() : 0 !== j || this.a1z() || aJ(11)
	}, this.cz = function(hD, hE) {
		if (!a1v.cz(hD, hE) && az.lt && !pQ.cz(hD, hE) && !lJ.cz(hD, hE) && !(6 === j && qw.cz(hD, hE) || 2 === j && fy.cz(hD, hE) || hR.cz(hD, hE) || d5.cz(hD, hE) || a26.cz(hD, hE, !0) || d4.cz(hD, hE, !0))) {
			if (pH.cz(hD, hE), 0 === j) qt.cz(hD, hE);
			else if (3 === j) qx.cz(hD, hE);
			else if (5 === j) qy.cz(hD, hE);
			else if (7 === j && r2.cz(hD, hE)) return;
			a0W.cz(hD, hE)
		}
	}, this.om = function(hD, hE) {
		if (hR.om(hD, hE), !pH.xv) {
			if (a1v.om(hD, hE)) return void pH.pI();
			if (0 <= d4.pP(hD, hE)) return void pH.pI();
			if (d4.om(hD, hE)) return void pH.pI();
			if (2 === j && fy.om(hD, hE)) return void pH.pI();
			if (qv.om(hD, hE, !0)) return
		}
		pH.om(hD, hE)
	}, this.click = function(hD, hE) {
		pH.pJ(), d4.a1O() || a26.cz(hD, hE, !1) || d4.cz(hD, hE, !1)
	}, this.op = function(hD, hE, deltaY) {
		d4.tP[1].nz.pF || (d4.tP[2].nz.pF ? d4.tP[2].nz.op(hD, hE, deltaY) : 0 === j && pH.op(hD, deltaY))
	}, this.a27 = function() {
		qv.y5(), d4.y5(), 0 === j ? (pR.resize(), pH.y5()) : 7 === j && r2.resize(), aL.cx = !0
	}, this.d7 = function() {
		var hE, dL, dK, hD;
		8 !== j && 10 !== j && (d8.imageSmoothingEnabled = !0, this.n2(), pH.d7(), qu.d7(), hE = Math.floor(.3 * d3), dL = cq.sT("territorial.io"), dK = (dK = 1.75 * d3 / dL.width) * dL.width < .98 * hL ? .98 * hL / dL.width : dK, d8
			.globalAlpha = .15, hD = Math.floor(.5 * (hL - dK * dL.width)), hD = Math.floor(hD / dK), hE = Math.floor(hE - .5 * dL.height * dK), hE = Math.floor(hE / dK), d8.setTransform(dK, 0, 0, dK, hD, hE), d8.drawImage(dL, hD, hE), d8
			.setTransform(1, 0, 0, 1, 0, 0), d8.globalAlpha = 1, a26.d7(), a0W.d7(), d4.d7(), hR.d7(), 0 === j ? qt.d7() : 2 === j ? fy.d7() : 3 === j ? qx.d7() : 5 === j ? qy.d7() : 6 === j ? qw.d7() : 7 === j && r2.d7(), d4.a29(), a1v.d7(),
			d5.d7(), pQ.d7(), lJ.d7())
	}, this.n2 = function() {
		var a2B, a2A;
		az.lt ? (a2A = a1 / az.b0, a2B = a2 / az.b1, d8.setTransform(a2A = a2B < a2A ? a2A : a2B, 0, 0, a2A, Math.floor((a1 - a2A * az.b0) / 2), Math.floor((a2 - a2A * az.b1) / 2)), d8.drawImage(az.lv, 0, 0), d8.setTransform(1, 0, 0, 1, 0, 0), d8
			.fillStyle = dB.iP) : d8.fillStyle = dB.hP, d8.fillRect(0, 0, a1, a2)
	}
}

function a2C() {
	this.cu = 0, this.ez = 0, this.lD = 0, this.pF = !1, this.ut = 10, this.bc = .12, this.a1F = !1, this.a2D = !1, this.a2E = !1, this.b = function() {
		this.pF = !0, this.resize(), this.a1F = !1
	}, this.resize = function() {
		this.pF && (this.cu = 1.15 * a1 < a2 ? Math.floor((a0 ? .94 : .69) * a1) : Math.floor((a0 ? .94 : .69) * a2 / 1.15), this.cu -= this.cu % this.ut, this.ez = +this.cu, this.lD = Math.floor(.15 * this.cu))
	}, this.cz = function(d0, d1, j) {
		var hI = (hL - this.cu) / 2;
		return d1 -= (d3 - this.ez - this.lD) / 2, (d0 -= hI) < 0 || d1 < 0 || d0 >= this.cu - 1 || d1 >= this.ez + this.lD - 1 || d0 >= this.cu - this.lD && d1 < this.lD ? (0 === j && (this.pF = !1, 0 === aT.pT() && pR.l(!0), aL.cx = !0), !1) :
			(d1 < this.lD || (d0 = (d0 = bJ(d0, hI = Math.floor(this.cu / this.ut)) + this.ut * bJ(d1 - this.lD, hI)) < 0 ? 0 : d0 >= aF.ux ? aF.ux - 1 : d0, (0 === j || 1 === j && !aF.aH[d0] || 2 === j && aF.aH[d0]) && (this.a2D = !aF.aH[d0],
				this.a1F = !0, this.a2E = !0, aF.aH[d0] = !aF.aH[d0], aF.vD(), aL.cx = !0)), !0)
	}, this.om = function(d0, d1) {
		this.a1F && this.cz(d0, d1, this.a2D ? 1 : 2)
	}, this.a1O = function() {
		this.a2E && (aD(), this.a2E = !1), this.a2E = !1, this.a1F = !1
	}, this.d7 = function() {
		d8.imageSmoothingEnabled = !0;
		for (var hI = (hL - this.cu) / 2, hJ = (d3 - this.ez - this.lD) / 2, nD = (d8.setTransform(1, 0, 0, 1, hI, hJ), d8.fillStyle = dB.iR, d8.fillRect(0, this.lD, this.cu, this.ez), d8.fillStyle = dB.ig, d8.fillRect(0, 0, this.cu, this.lD), d8
				.fillStyle = dB.dC, d8.lineWidth = pz, d8.strokeStyle = dB.dC, d8.strokeRect(-1, -1, this.cu + 2, this.ez + this.lD + 2), d8.fillRect(0, this.lD - pz, this.cu, pz), d8.font = cn + Math.floor(.44 * this.lD) + co, d8.textAlign =
				dA, d8.textBaseline = d9, d8.fillText("Select Your Emojis!", Math.floor((this.cu - .725 * this.lD) / 2), Math.floor(.55 * this.lD)), Math.floor(this.cu / this.ut)), zoom = (nD - 2 * this.bc * nD) / aF.cu, aE = aF.ux - 1; 0 <=
			aE; aE--) d8.setTransform(1, 0, 0, 1, Math.floor(hI + aE % this.ut * nD), Math.floor(hJ + this.lD + bJ(aE, this.ut) * nD)), aF.aH[aE] && (d8.fillStyle = dB.ii, d8.fillRect(0, 0, nD, nD)), d8.setTransform(zoom, 0, 0, zoom, Math.floor(
			hI + aE % this.ut * nD + this.bc * nD), Math.floor(hJ + this.lD + bJ(aE, this.ut) * nD + this.bc * nD)), d8.drawImage(aF.sS[aE], 0, 0);
		cK.tN(Math.floor(hI + this.cu - .725 * this.lD), Math.floor(hJ + .275 * this.lD), Math.floor(.45 * this.lD)), d8.setTransform(1, 0, 0, 1, 0, 0), d8.imageSmoothingEnabled = !1
	}
}

function rT() {
	var a2F, ad, a2G;

	function v8() {
		var j;
		0 === (j = aT.pT()) ? qt.a1y() : 6 === j ? gB.a1n(a2F) : 7 === j ? (r2.a1y(), gB.close(gB.a2H, 3240)) : 8 === j && (qq(!0), qt.a1y()), aT.setState(3), qv.y5(), a2K(a2F), aL.cx = !0
	}

	function a2I(oX) {
		for (var aE = ad.length - 1; 0 <= aE; aE--)
			if (oX === ad[aE].code) return ad[aE].v;
		return a2G + oX
	}

	function a2K(oX) {
		qv.sG[2].uj = a2I(oX)
	}
	this.lc = function() {
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
		}), a2G = "Error "
	}, this.b = function(a1i, oX) {
		a2F = oX;
		var j = aT.pT();
		if (6 === j) {
			if (4211 === oX) return void qy.b(0, 0);
			if (4214 !== oX) return void qw.a1h(a1i)
		} else {
			if (7 !== j) return 8 === j ? void(a1i !== gB.p4 || fx || g7.u1(a2I(oX))) : void 0;
			if (a1i !== gB.a2H) return
		}
		v8()
	}, this.a1l = function(oX) {
		a2F = oX, 8 === aT.pT() ? g7.u1(a2I(oX)) : v8()
	}, this.resize = function() {
		a2K(a2F)
	}, this.cz = function(hD, hE) {
		3 === qv.pP(hD, hE, 3, 1) && this.a25(hD, hE)
	}, this.a25 = function(hD, hE) {
		qt.b(), qv.om(hD, hE, !1), aL.cx = !0
	}, this.d7 = function() {
		qv.a1A()
	}
}

function rU() {
	var input, color;
	this.pF = !1, this.lI = !1, this.b = function() {
		color = dB.iR, (input = document.createElement("INPUT")).setAttribute("type", "text"), input.setAttribute("name", "username"), input.setAttribute("id", "usernameField"), input.setAttribute("autocomplete", "username"), input.value = "",
			input.style.textAlign = "center", input.style.backgroundColor = color, input.style.borderRadius = "0", input.style.color = dB.dC, input.style.position = "absolute", input.readOnly = !1, input.addEventListener("input", function() {
				qt.a2L()
			}), input.addEventListener("focus", function() {
				pR.lI = !0
			}), input.addEventListener("blur", function() {
				pR.lI = !1
			})
	}, this.resize = function() {
		var cs, px, py;
		this.pF && (px = .3 * (cs = .22 * qv.ez / lM), py = pz / lM, input.style.border = py.toFixed(2) + "px solid " + dB.dC, input.style.font = cn + cs + co, input.style.padding = px.toFixed(2) + "px", input.style.left = (((hL - qv.cu) / lM -
			py) / 2).toFixed(2) + "px", input.style.width = (qv.cu / lM - 2 * px - py).toFixed(2) + "px", input.style.top = ((qv.hE - .52 * qv.ez) / lM).toFixed(2) + "px")
	}, this.get = function() {
		return input
	}, this.l = function(l) {
		this.pF !== l && ((this.pF = l) ? (this.resize(), document.body.appendChild(input)) : (this.lI = !1, document.body.removeChild(input)))
	}, this.pa = function(a2M) {
		a2M && color === dB.iR || !a2M && color === dB.it || (color = a2M ? dB.iR : dB.it, input.style.backgroundColor = color)
	}
}

function rv() {
	var k8, a2P, a2Q, a2R;
	this.a2N = 0, this.a2O = 0, this.b = function(bc) {
		var i4;
		7 === aT.pT() && (k8 = bc, a2P = 0, a2Q = aL.aM + 4500, a2R = r1.a2S(k8) ? 2 : 0, aT.setState(10), d8.imageSmoothingEnabled = !0, aT.n2(), bc = cq.sT("loading"), i4 = 1, i4 = (a0 ? .396 : .25) * ck / bc.width, d8.setTransform(i4, 0, 0,
			i4, Math.floor((a1 - i4 * bc.width) / 2), Math.floor((a2 - i4 * bc.height) / 2)), d8.drawImage(bc, 0, 0), d8.setTransform(1, 0, 0, 1, 0, 0))
	}, this.gd = function() {
		0 < a2R && aL.aM > a2Q && (a2R--, a2Q += 4500, 0 === aL.a2U) && 0 === aL.fU() && (0 === a2R && gB.p4 < gB.a2V && (gB.p4 += gB.a2W), gB.xx(gB.p4, 5))
	}, this.a2X = function() {
		10 === aT.pT() && 2 <= ++a2P && (r1.a2Y(k8), k8 = null)
	}
}

function rs() {
	var a2a, a2b, a2c, a2d, a2e, a2f, a2g, a2i, a2j, a2l, a2m, a2n, a2q, a2r, a2s, a2t, a2u, a2h = 48,
		a2o = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
		a2p = [0, 0, 0, 0];

	function a2x(aE, sS) {
		var aE = a2g[aE].getContext("2d", {
				alpha: !0
			}),
			zoom = (aE.clearRect(0, 0, a2h, a2h), a2h / sS.width),
			a3 = a2h / sS.height,
			zoom = a3 < zoom ? a3 : zoom;
		aE.imageSmoothingEnabled = !0, aE.setTransform(zoom, 0, 0, zoom, Math.floor((a2h - zoom * sS.width) / 2), Math.floor((a2h - zoom * sS.height) / 2)), aE.drawImage(sS, 0, 0), aE.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a31(fV, dO, a34, dM) {
		dM.beginPath(), dM.moveTo(fV, fV), dM.lineTo(fV + Math.cos(a34) * dO, fV + Math.cos(a34 + 1.5 * Math.PI) * dO), dM.stroke()
	}

	function a3I() {
		if (7 === aT.pT()) {
			for (var dZ, sS, dM, zoom, a3, ej = -1, aE = a2i.length - 1; 0 <= aE; aE--)
				if (null === a2i[aE].dL) {
					ej = aE;
					break
				} - 1 !== ej && (null !== (dZ = a38(a2i[ej].a3C, a2i[ej].a3D)) ? a2i[ej].dL = dZ : (dZ = {
					b0: az.b0,
					b1: az.b1,
					lv: az.lv,
					lr: az.lr,
					ls: az.ls,
					lw: az.lw,
					mJ: az.mJ,
					a39: az.a39
				}, az.lc(a2i[ej].a3C, a2i[ej].a3D), az.lu.a3J(), (sS = document.createElement("canvas")).width = 128, sS.height = 128, dM = sS.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / az.b0) < (a3 = 128 / az.b1) && (zoom = a3), dM.imageSmoothingEnabled = !0, dM.setTransform(zoom, 0, 0, zoom, (128 - zoom * az.b0) / 2, (128 - zoom * az.b1) / 2), dM.drawImage(az.lv, 0, 0), az.b0 = dZ.b0, az
				.b1 = dZ.b1, az.lv = dZ.lv, az.lr = dZ.lr, az.ls = dZ.ls, az.lw = dZ.lw, az.mJ = dZ.mJ, az.a39 = dZ.a39, a2i[ej].dL = sS), aL.cx = !0)
		}
	}

	function a38(a3C, a3D) {
		for (var aE = a2i.length - 1; 0 <= aE; aE--)
			if (null !== a2i[aE].dL && a2i[aE].a3C === a3C && a2i[aE].a3D === a3D) return a2i[aE].dL;
		return null
	}
	this.b = function() {
		var aE;
		for (a2u = 0, a2l = -1, aT.setState(7), a2i = [], this.resize(), a2g = new Array(13), aE = a2g.length; 0 <= aE; aE--) a2g[aE] = document.createElement("canvas"), a2g[aE].width = a2h, a2g[aE].height = a2h;
		for (aE = 0; aE < 7; aE++) ! function(uH) {
			var a2z, dM = a2g[uH - 2].getContext("2d", {
					alpha: !0
				}),
				a2y = 1.5 * Math.PI,
				fV = Math.floor(.5 * a2h),
				dO = Math.floor(.48 * a2h);
			dM.lineWidth = 2, dM.strokeStyle = dB.dC, dM.clearRect(0, 0, a2h, a2h);
			for (var aE = 0; aE < uH; aE++) a2z = a2y + 2 * Math.PI / uH,
				function(aE, fV, dO, a2y, a2z, dM) {
					dM.fillStyle = fW.a33[aE], dM.beginPath(), dM.arc(fV, fV, dO, a2y, a2z), dM.lineTo(fV, fV), dM.fill()
				}(aE + 1, fV, dO, a2y, a2z, dM), 0 !== aE && a31(fV, dO, a2y, dM), a2y = a2z;
			a31(fV, dO, 1.5 * Math.PI, dM),
				function(fV, dO, dM) {
					dM.beginPath(), dM.arc(fV, fV, dO, 0, 2 * Math.PI), dM.stroke()
				}(fV, dO, dM)
		}(aE + 2);
		a2x(7, cq.get(4)), a2x(8, aF.sS[27]), a2x(9, aF.sS[46]), a2x(10, aF.sS[36]), a2x(11, cq.get(19)), a2x(12, cq.get(20)), aL.cx = !0
	}, this.a24 = function() {
		this.a1y(), gB.a1n(3240), qt.b(), aL.cx = !0
	}, this.a1y = function() {
		a2i = [], a2g = []
	}, this.ur = function() {
		return a2n
	}, this.resize = function() {
		var a35, lh, ww, a36;
		for (a2c = [0, 0], a2j = [0, 0, 0, 0], a2t = a0 ? (a2m = Math.floor(.8 * .4 * ck), a2n = Math.floor(.56 * a2m), a2j[0] = d2, a1 < a2 ? (a2j[1] = a2n + 2 * d2, a2j[2] = a1 - 3 * a2j[0], a2j[3] = a0W.d6() - 3 * d2 - a2n, a2r = Math.floor(
				.95 * a2n), a2s = Math.floor((a1 - a2m - d2) / 2), Math.floor(d2 + a2n / 2)) : (a2j[1] = d2, a2j[2] = a1 - 3 * d2 - a2m, a2j[3] = a0W.d6() - 2 * d2, a2r = Math.floor(.8 * a2m), a2j[3] - a2n < a2m && (a2r = Math.floor(.8 * (
				a2j[3] - a2n)), a2r = tn(a2n, a2r)), a2s = Math.floor(a1 - a2m / 2 - d2), tn(a2t = Math.floor(d2 + a2n + (a2j[3] - a2n) / 2), Math.floor(a2n + 2 * d2 + a2r / 2)))) : (a2m = Math.floor(.2016 * ck), a2n = Math.floor(.56 * a2m), a2j[
				2] = Math.floor(.5 * a1), a2j[3] = Math.floor(.5 * a2), a2j[1] = Math.floor(.45 * (a2 - a2j[3])), a2j[0] = Math.floor((a1 - a2j[2]) / 2), a2r = Math.floor(.75 * a2n), a2s = Math.floor(a1 / 2), Math.floor(a2j[1] + a2j[3] + (
				a2 - a2j[3] - a2j[1]) / 2)), a2q = cn + Math.floor(.65 * a2n / 4) + co, a35 = lh = 1; a35 * lh < a2i.length;) a2j[3] / (lh + 1) < a2j[2] / (a35 + 1) ? a35++ : lh++;
		a2a = (ww = (a2j[2] - (a35 - 1) * d2) / a35) < (a36 = (a2j[3] - (lh - 1) * d2) / lh) ? ww : a36, a2b = Math.floor(a2a), a2f = cn + Math.floor(.5 * a2a / 5) + co, a2c[0] = a35, a2c[1] = lh, a2d = a2j[0] + Math.floor((a2j[2] - a2c[0] *
			a2a - (a2c[0] - 1) * d2) / 2), a2e = a2j[1] + Math.floor((a2j[3] - a2c[1] * a2a - (a2c[1] - 1) * d2) / 2)
	}, this.a0X = function(a37, bc) {
		var aE, a3, dL, bU = a2i.length;
		for (a2p = a37, aE = 0; aE < bc.length; aE++) dL = a38(bc[aE].mJ, bc[aE].a39), a2i.push({
			a3A: bc[aE].id,
			qZ: bc[aE].qZ,
			qa: bc[aE].a3B,
			a3C: bc[aE].mJ,
			a3D: bc[aE].a39,
			joined: bc[aE].a3E,
			uo: bc[aE].a1r,
			a3F: bc[aE].a3F,
			dL: dL,
			a3G: bc[aE].a3G,
			oM: bc[aE].oM
		});
		for (aE = bU - 1; 0 <= aE; aE--) a2i.shift();
		if (-1 !== a2l)
			for (a3 = a2l, a2l = -1, aE = a2i.length - 1; 0 <= aE; aE--)
				if (a2i[aE].a3A === a3) {
					a2l = a3;
					break
				}(a2i.length > a2u || a2i.length < a2u) && (a2u = a2i.length, this.resize()), this.a3H(), aL.cx = !0
	}, this.a3H = function() {
		for (var aE = a2i.length - 1; 0 <= aE; aE--) null === a2i[aE].dL && setTimeout(a3I, 0)
	}, this.cz = function(hD, hE) {
		return 4 * ((hD - a2s) * (hD - a2s) + (hE - a2t) * (hE - a2t)) <= a2r * a2r ? (this.a24(), qv.om(hD, hE, !1), !0) : function(hD, hE) {
			var ej, cV, hI, hJ;
			if (0 !== a2i.length) {
				var aE = 0;
				for (hJ = a2e, cV = 0; cV < a2c[1]; cV++) {
					for (hI = a2d, ej = 0; ej < a2c[0]; ej++) {
						if (hI < hD && hD < hI + a2a && hJ < hE && hE < hJ + a2a) return jK.a3L(a2i[aE].a3A), a2l = a2i[aE].a3A !== a2l ? a2i[aE].a3A : -1, aL.cx = !0;
						if (++aE >= a2i.length) return !1;
						hI += a2a + d2
					}
					hJ += a2a + d2
				}
			}
			return !1
		}(hD, hE)
	}, this.d7 = function() {
		var ej, cV, hD, dO, zoom, aE = 0,
			hE = a2e;
		if (d8.imageSmoothingEnabled = !0, d8.lineWidth = 3, dO = Math.floor(.5 * a2r), d8.fillStyle = dB.iP, d8.beginPath(), d8.arc(a2s, a2t, dO, 0, 2 * Math.PI), d8.fill(), d8.strokeStyle = dB.dC, d8.beginPath(), d8.arc(a2s, a2t, dO, 0, 2 *
				Math.PI), d8.stroke(), dO = cq.get(0).height, zoom = .6 * a2r / dO, d8.setTransform(zoom, 0, 0, zoom, Math.floor(a2s - .56 * zoom * cq.get(0).width), Math.floor(a2t - .5 * zoom * dO)), d8.drawImage(cq.get(0), 0, 0), d8
			.setTransform(1, 0, 0, 1, 0, 0),
			function() {
				d8.fillStyle = dB.iP, d8.fillRect(a1 - a2m - d2, d2, a2m, a2n), 0 <= a2l ? (d8.fillStyle = dB.ii, d8.fillRect(a1 - a2m - d2, d2, a2m, Math.floor(.25 * a2n))) : (d8.fillStyle = dB.j5, d8.fillRect(a1 - a2m - d2, d2 + Math.floor(
					.25 * a2n), a2m, Math.floor(.25 * a2n)));
				d8.strokeStyle = dB.dC, d8.strokeRect(a1 - a2m - d2, d2, a2m, a2n), d8.fillStyle = dB.dC, d8.font = a2q, d8.textBaseline = d9;
				for (var hE, px = Math.floor(.04 * a2m), py = Math.floor(.08 * a2n), aE = 3; 0 <= aE; aE--) hE = Math.floor(d2 + (aE + 1) * (a2n + 2 * py) / 5 - py), d8.textAlign = tv, d8.fillText(a2o[aE], a1 - a2m - d2 + px, hE), d8.textAlign =
					vN, d8.fillText(gR.hU(a2p[aE]), a1 - d2 - px, hE)
			}(), 0 !== a2i.length)
			for (cV = 0; cV < a2c[1]; cV++) {
				for (hD = a2d, ej = 0; ej < a2c[0]; ej++) {
					if (! function(aE, hD, hE) {
							var zoom, cV, a3P, a3R, a3S;
							null === a2i[aE].dL ? (d8.fillStyle = dB.iP, d8.fillRect(hD, hE, a2b, a2b)) : (zoom = a2b / 128, d8.setTransform(zoom, 0, 0, zoom, hD, hE), d8.drawImage(a2i[aE].dL, 0, 0), d8.setTransform(1, 0, 0, 1, 0, 0));
							a2l === a2i[aE].a3A ? (function(hD, hE) {
								var nD = Math.floor(.2 * a2b),
									nE = Math.floor(.3 * nD);
								d8.fillStyle = dB.il, d8.fillRect(hD + a2b - nD, hE, nD, nD), d8.fillStyle = dB.hP, d8.fillRect(hD + a2b - nD, hE, 2, nD), d8.fillRect(hD + a2b - nD, hE + nD - 2, nD, 2), cK.tN(hD + a2b - nD + nE, hE + nE,
									nD - 2 * nE), d8.setTransform(1, 0, 0, 1, 0, 0)
							}(hD, hE), d8.lineWidth = 3, d8.fillStyle = dB.il) : d8.fillStyle = dB.iN;
							if (a3R = Math.floor(a2a / 4), d8.fillRect(hD, hE, a3R, a3R), a3S = Math.floor(hE + .8 * a2a), d8.fillRect(hD, a3S, a2b, Math.floor(a2a / 5)), function(aE, hD, hE) {
									var zoom;
									a2i[aE].qa && (aE = cq.get(4), zoom = .5 * a2a / aE.width, d8.setTransform(zoom, 0, 0, zoom, Math.floor(hD + (a2a - zoom * aE.width) / 2), Math.floor(hE + (a2a - zoom * aE.height) / 2)), d8.globalAlpha = .6, d8
										.drawImage(aE, 0, 0), d8.globalAlpha = 1, d8.setTransform(1, 0, 0, 1, 0, 0))
								}(aE, hD, hE), a2i[aE].a3G) {
								for (cV = a3P = 0; cV < a2i[aE].a3G; cV++) a3P = Math.max(a3P, cv.measureText(a2i[aE].oM[cV], a2f));
								a3P += .05 * a2a, cV = 5 === a2i[aE].a3G, a3R = cV ? hE + a3R : Math.max(hE + .8 * a2a - .11 * a2i[aE].a3G * a2a, hE + a3R), a3S = cV ? a3S : Math.min(a3R + .11 * a2i[aE].a3G * a2a + .05 * a2a, a3S), d8.fillRect(
									hD, a3R, a3P, a3S - a3R)
							}
							for (d8.font = a2f, d8.textBaseline = d9, d8.textAlign = tv, d8.fillStyle = dB.j1, d8.fillText(a2i[aE].joined.toString(), Math.floor(hD + .22 * a2a), Math.floor(hE + .9 * a2a)), d8.fillStyle = dB.dC, cV = 0; cV < a2i[
									aE].a3G; cV++) d8.fillText(a2i[aE].oM[a2i[aE].a3G - cV - 1], Math.floor(hD + .03 * a2a), Math.floor(hE + .77 * a2a - .11 * cV * a2a));
							d8.textAlign = vN, d8.fillStyle = dB.ip, d8.fillText(a2i[aE].uo.toString(), Math.floor(hD + .81 * a2a), Math.floor(hE + .9 * a2a)), d8.strokeStyle = a2l === a2i[aE].a3A ? dB.ij : dB.iV, d8.strokeRect(hD, hE, a2b, a2b),
								a3S = Math.floor(.16 * a2a), zoom = a3S / a2h, d8.setTransform(zoom, 0, 0, zoom, Math.floor(hD + .33 * a3S), Math.floor(hE + .33 * a3S)), a2g.length > a2i[aE].qZ && d8.drawImage(a2g[a2i[aE].qZ], 0, 0);
							d8.setTransform(zoom, 0, 0, zoom, Math.floor(hD + .15 * a3S), Math.floor(hE + a2a - 1.08 * a3S)), d8.drawImage(a2g[11], 0, 0), d8.setTransform(zoom, 0, 0, zoom, Math.floor(hD + a2a - 1.05 * a3S), Math.floor(hE + a2a -
								1.15 * a3S)), d8.drawImage(a2g[12], 0, 0), d8.setTransform(1, 0, 0, 1, 0, 0)
						}(aE, Math.floor(hD), Math.floor(hE)), ++aE >= a2i.length) return;
					hD += a2a + d2
				}
				hE += a2a + d2
			}
	}
}

function rV() {
	this.b = function(hD, hE) {
		aT.setState(5), qv.om(hD, hE, !1), aL.cx = !0
	}, this.d7 = function() {
		qv.a1B()
	}, this.cz = function(hD, hE) {
		var aE = qv.pP(hD, hE, 5, 2);
		5 === aE ? aP() : 6 === aE && (qt.b(), qv.om(hD, hE, !1), aL.cx = !0)
	}
}

function rW() {
	var a3V = [0, 0, 0, 0];

	function a0d(hD, hE, dE, a3o) {
		d8.fillStyle = dB.dC;
		var nD = tn(2, Math.floor((a3o ? .5 : .35) * dE)),
			ud = (nD -= nD % 2, tn(2, Math.floor(.1 * dE))),
			dE = (ud -= ud % 2, Math.floor((dE - nD) / 2)),
			hK = Math.floor(dE + (nD - ud) / 2);
		d8.fillRect(hD + dE, hE + hK, nD, ud), a3o && d8.fillRect(hD + hK, hE + dE, ud, nD)
	}

	function a1q(hD, hE, cu, ez, sV, ci, uj, ee, uH) {
		d8.fillStyle = sV, d8.fillRect(hD, hE, cu, ez), 0 <= ee && function(hD, hE, cu, ez, ee) {
			d8.fillStyle = "rgba(" + 22 * ee + "," + (110 - 22 * ee) + ",0,0.75)", d8.fillRect(hD, hE, (1 + ee) * cu / 6, ez)
		}(hD, hE, cu, ez, ee), 0 < uH && function(hD, hE, cu, ez, uH) {
			d8.fillStyle = "rgba(255,255,255,0.3)", d8.fillRect(hD, hE, uH * cu / bZ, ez)
		}(hD, hE, cu, ez, uH), d8.strokeStyle = dB.dC, d8.strokeRect(hD, hE, cu, ez), 0 !== ci && (d8.fillStyle = dB.dC, d8.font = cn + Math.floor(ci * ez) + co, d8.fillText(uj, Math.floor(hD + cu / 2), Math.floor(hE + .52 * ez)))
	}
	this.fz = [{
		be: 0,
		uH: 512
	}], this.b = function() {
		r3.pF = !1, aT.setState(2), this.resize(), aL.cx = !0
	}, this.a1y = function() {}, this.resize = function() {
		a3V[2] = Math.floor((a0 ? .49 : .4) * ck), a3V[1] = Math.floor((a2 - a3V[2] / 6 - this.fz.length * (d2 + a3V[2] / 10)) / 2), a3V[0] = Math.floor((a1 - a3V[2]) / 2), r3.pF && r3.resize()
	}, this.a3W = function(qZ) {
		var aE;
		if (6 < qZ) this.fz = [{
			be: 0,
			uH: 512
		}];
		else {
			for (this.fz = [], aE = 0; aE < qZ + 2; aE++) this.fz.push({
				be: 0,
				uH: 0
			});
			this.a3X()
		}
	}, this.a3Y = function(a3Z, a3a) {
		for (var bU = a3Z.length, aE = 0; aE < bU; aE++) this.fz[aE].be = a3Z[aE], this.fz[aE].uH = a3a[aE]
	}, this.a3b = function(pv) {
		var aE, bU;
		if (1 === pv.nH.length)
			for (bU = this.fz.length, pv.a3Z = new Array(bU), pv.a3a = new Array(bU), aE = 0; aE < bU; aE++) pv.a3Z[aE] = this.fz[aE].be, pv.a3a[aE] = this.fz[aE].uH
	}, this.a25 = function() {
		aL.cx = !0, r3.pF ? r3.pF = !1 : (this.a1y(), qt.b())
	}, this.qd = function() {
		var aE, uH;
		if (fr.fs) return fr.ft.a3c;
		for (uH = 0, aE = this.fz.length - 1; 0 <= aE; aE--) uH += this.fz[aE].uH;
		return uH
	}, this.om = function(hD, hE) {
		return !(!r3.pF || !r3.om(hD, hE)) || -1 !== this.pP(hD, hE)
	}, this.a3d = function() {
		gB.p4 = 0, gB.xx(0, 3) && jK.a3e(0)
	}, this.a3f = function() {
		var ej;
		this.a3d(), aT.a1x(), fr.fs ? fr.a3g() : (ej = (ej = this.fz.length - 2) < 0 ? 7 : ej, qW(Math.floor(16384 * Math.random()), 0, [{
			name: qt.a3h(),
			a3i: d4.tP[2].nz.a1M(),
			a3j: 0
		}], ej, !1, !1))
	}, this.cz = function(hD, hE) {
		if (d5.pF || d4.tP[1].nz.pF || d4.tP[2].nz.pF) return !1;
		if (r3.pF && !fr.fs) return r3.cz(hD, hE);
		var aE, ej, max, nD, hE = this.pP(hD, hE);
		if (-1 === hE) return !1;
		if (0 === hE) this.a25();
		else if (1 === hE) fr.fs ? (fr.pI(), aL.cx = !0) : r3.show();
		else if (100 === hE) pN.a3k();
		else if (2 === hE) this.a1y(), this.a3f();
		else {
			if (fr.fs) return !1;
			if (27 === hE) this.fz.length < 8 && (this.fz.push({
				be: 0,
				uH: bZ
			}), this.a3X(), this.resize(), aL.cx = !0);
			else if (aE = Math.floor((hE - 3) / 3), hE % 3 == 0) 1 < this.fz.length && (this.fz.splice(aE, 1), this.resize(), aL.cx = !0);
			else if (nD = (a3V[2] - a3V[2] / 10 - 2 * d2) / 2, hE % 3 == 1) 0 === aE && 1 === this.fz[aE].uH || (hD < a3V[0] + a3V[2] - 1.5 * nD - d2 ? this.fz[aE].be-- : this.fz[aE].be++, this.fz[aE].be < 0 ? this.fz[aE].be = 5 : 5 < this.fz[aE]
				.be && (this.fz[aE].be = 0), aL.cx = !0);
			else {
				for (aL.cx = !0, hE = (hD - (a3V[0] + a3V[2] - nD)) / nD - .5, hE *= hE < 0 ? -hE : hE, hE = 0 === (hE = Math.floor(hE * bZ)) ? 1 : hE, max = bZ, ej = this.fz.length - 1; 0 <= ej; ej--) aE !== ej && (max -= this.fz[ej].uH);
				if (hE < 0) {
					if (1 === this.fz[aE].uH) return this.fz[aE].uH = max, !0
				} else if (this.fz[aE].uH === max) return this.fz[aE].uH = 1, !0;
				this.fz[aE].uH += hE, this.fz[aE].uH < 1 ? this.fz[aE].uH = 1 : this.fz[aE].uH > max && (this.fz[aE].uH = max)
			}
		}
		return !0
	}, this.a3X = function() {
		for (var uH = Math.floor(bZ / this.fz.length), a3l = bZ % this.fz.length, aE = this.fz.length - 1; 0 <= aE; aE--) this.fz[aE].uH = uH;
		this.fz[0].uH += a3l
	}, this.pP = function(hD, hE) {
		var nD = (a3V[2] - 3 * d2) / 4,
			ud = a3V[2] / 6;
		if (hD < a3V[0] || hE < a3V[1] || a3V[0] + a3V[2] <= hD) return -1;
		if (hE < a3V[1] + ud) return hD < a3V[0] + nD ? 0 : hD < a3V[0] + nD + d2 ? -1 : hD < a3V[0] + 2 * nD + d2 ? 100 : hD < a3V[0] + 2 * (nD + d2) ? -1 : hD < a3V[0] + 3 * nD + 2 * d2 ? 1 : hD < a3V[0] + 3 * (nD + d2) ? -1 : 2;
		for (var hJ, ue = a3V[2] / 10, nD = (a3V[2] - ue - 2 * d2) / 2, aE = 0; aE < this.fz.length; aE++) {
			if (hE < (hJ = a3V[1] + ud + d2 + aE * (ue + d2))) return -1;
			if (!(hJ + ue < hE)) return hD < a3V[0] + ue ? 3 + 3 * aE : hD < a3V[0] + ue + d2 ? -1 : hD < a3V[0] + a3V[2] - nD - d2 ? 4 + 3 * aE : hD < a3V[0] + a3V[2] - nD ? -1 : 5 + 3 * aE
		}
		return !(this.fz.length < 8) || hE < (hJ = a3V[1] + ud + d2 + this.fz.length * (ue + d2)) || hJ + ue < hE || a3V[0] + ue < hD ? -1 : 27
	}, this.d7 = function() {
		d8.lineWidth = pz, d8.textAlign = dA, d8.textBaseline = d9;
		var nD = (a3V[2] - 3 * d2) / 4,
			ud = a3V[2] / 6;
		if (a1q(a3V[0], a3V[1], nD, ud, "rgba(128,0,0,0.75)", .34, "Back", -1, -1), a1q(a3V[0] + nD + d2, a3V[1], nD, ud, "rgba(128,0,128,0.75)", .31, "Custom", -1, -1), a1q(a3V[0] + 2 * (nD + d2), a3V[1], nD, ud, "rgba(" + (fr.fs ? 128 : 0) +
				",128,128,0.75)", .34, fr.fs ? "Reset" : "Maps", -1, -1), a1q(a3V[0] + a3V[2] - nD, a3V[1], nD, ud, "rgba(0,128,0,0.75)", .34, "Start", -1, -1), !fr.fs) {
			for (var hJ, ue = a3V[2] / 10, nD = (a3V[2] - ue - 2 * d2) / 2, aE = 0; aE < this.fz.length; aE++) hJ = a3V[1] + ud + d2 + aE * (ue + d2), a1q(a3V[0], hJ, ue, ue, 1 < this.fz.length ? "rgba(128,0,0,0.75)" : "rgba(90,90,90,0.75)", 0,
				null, -1), 1 < this.fz.length && a0d(a3V[0], hJ, ue, !1), a1q(a3V[0] + ue + d2, hJ, nD, ue, dB.iR, .4, this.a3m(aE), this.fz[aE].be, -1), a1q(a3V[0] + a3V[2] - nD, hJ, nD, ue, dB.iR, .4, this.a3n(aE), -1, this.fz[aE].uH);
			this.fz.length < 8 && (hJ = a3V[1] + ud + d2 + this.fz.length * (ue + d2), a1q(a3V[0], hJ, ue, ue, "rgba(0,128,20,0.75)", 0, null, -1, -1), a0d(a3V[0], hJ, ue, !0)), r3.pF && r3.d7()
		}
	}, this.a3m = function(aE) {
		return 0 === aE && 1 === this.fz[aE].uH ? "You" : fG.fm[this.fz[aE].be]
	}, this.a3n = function(aE) {
		return 1 === this.fz[aE].uH ? "1 Player" : this.fz[aE].uH + " Players"
	}
}

function vV() {
	this.bU = 0, this.cu = 0, this.tP = null, this.b = function() {
		this.tP = [], this.tP.push({
			hD: 0,
			hE: 0,
			sQ: a0,
			nz: null
		}), this.tP.push({
			hD: 0,
			hE: 0,
			sQ: !1,
			nz: new a2C
		}), this.tP.push({
			hD: 0,
			hE: 0,
			sQ: !1,
			nz: new a1E
		}), this.tP[2].nz.a1J(), this.bU = this.tP.length, this.cu = 0
	}, this.y5 = function() {
		this.cu = Math.floor((a0 ? .063 : .04) * ck), this.cu += 4 - this.cu % 4, this.tP[0].hD = d2, this.tP[0].hE = d3 - this.cu - d2;
		for (var aE = 1; aE < this.bU; aE++) this.tP[aE].hD = this.tP[aE - 1].hD + Math.floor(a0 ? 1.5 * d2 : 3.7 * d2) + this.cu, this.tP[aE].hE = this.tP[0].hE
	}, this.pP = function(d0, d1) {
		if (cq.cr())
			for (var aE = this.bU - 1; 0 <= aE; aE--)
				if (d0 >= this.tP[aE].hD && d1 >= this.tP[aE].hE && d0 < this.tP[aE].hD + this.cu && d1 < this.tP[aE].hE + this.cu) return aE;
		return -1
	}, this.a22 = function() {
		for (var aE = 2; 1 <= aE; aE--)
			if (this.tP[aE].nz.pF) return !0;
		return !1
	}, this.resize = function() {
		for (var aE = 2; 1 <= aE; aE--) this.tP[aE].nz.resize()
	}, this.pU = function() {
		return this.tP[1].nz.pF ? (this.tP[1].nz.cz(-5e3, -5e3, 0), !0) : !!this.tP[2].nz.pF && (this.tP[2].nz.cz(-5e3, -5e3), !0)
	}, this.cz = function(d0, d1, a0n) {
		if (a0n) {
			if (this.tP[1].nz.pF) return this.tP[1].nz.cz(d0, d1, 0), !0;
			if (this.tP[2].nz.pF) return this.tP[2].nz.cz(d0, d1), !0
		}
		d0 = this.pP(d0, d1);
		if (a0n) {
			if (0 === d0) return this.tP[d0].sQ = !this.tP[d0].sQ, a0 = this.tP[d0].sQ, ph.a3r(0), aB(this.tP[0].sQ, !1), !0;
			if (1 <= d0 && d0 < 3) return this.tP[d0].nz.b(), pR.l(!1), aL.cx = !0
		}
		return !1
	}, this.om = function(d0, d1) {
		return this.tP[1].nz.pF ? (this.tP[1].nz.om(d0, d1), !0) : !!this.tP[2].nz.pF && (this.tP[2].nz.om(d0), !0)
	}, this.a1O = function() {
		for (var aE = 2; 1 <= aE; aE--)
			if (this.tP[aE].nz.pF) return this.tP[aE].nz.a1O(), !0;
		return !1
	}, this.d7 = function() {
		if (cq.cr()) {
			d8.imageSmoothingEnabled = !0;
			for (var aE = this.bU - 1; 0 <= aE; aE--) d8.fillStyle = this.tP[aE].sQ ? dB.ik : dB.iR, d8.fillRect(this.tP[aE].hD, this.tP[aE].hE, this.cu, this.cu), 0 === aE ? this.a3s(aE, cq.get(15)) : 1 === aE ? this.a3t() : 2 === aE && this
				.a3u(), d8.setTransform(1, 0, 0, 1, 0, 0), d8.lineWidth = pz, d8.strokeStyle = dB.dC, d8.strokeRect(this.tP[aE].hD, this.tP[aE].hE, this.cu, this.cu);
			d8.imageSmoothingEnabled = !1
		}
	}, this.a3s = function(aE, sS) {
		var kt = .08 * this.cu,
			zoom = (this.cu - 2 * kt) / sS.width;
		d8.setTransform(zoom, 0, 0, zoom, this.tP[aE].hD + kt, this.tP[aE].hE + (this.cu - zoom * sS.height) / 2), d8.drawImage(sS, 0, 0)
	}, this.a3t = function() {
		var kt = .06 * this.cu,
			zoom = (this.cu - 2 * kt) / aF.cu;
		d8.setTransform(zoom, 0, 0, zoom, this.tP[1].hD + kt, this.tP[1].hE + kt), d8.drawImage(aF.sS[4], 0, 0)
	}, this.a3u = function() {
		d8.setTransform(1, 0, 0, 1, this.tP[2].hD, this.tP[2].hE);
		for (var be = this.cu / 4, hD = 3; 0 <= hD; hD--)
			for (var hE = 3; 0 <= hE; hE--) {
				var dO = Math.floor(367 * (hD + 1) * (hE + 1) % 256),
					pv = Math.floor(687 * (hD + 1) * (hE + 1) % 256),
					cV = Math.floor(651 * (hD + 1) * (hE + 1) % 256);
				d8.fillStyle = "rgb(" + dO + "," + pv + "," + cV + ")", d8.fillRect(hD * be, hE * be, be, be)
			}
	}, this.a29 = function() {
		for (var aE = 2; 1 <= aE; aE--)
			if (this.tP[aE].nz.pF) return void this.tP[aE].nz.d7()
	}
}

function rX() {
	var username, a3v;

	function a43() {
		var t5;
		return 0 === username.indexOf("vote ") && 2 === (t5 = username.split(" ")).length ? (qt.a3w = t5[1], a47(), gB.xx(0, 7) && jK.a48(0), qx.a1l(3252), 1) : void 0
	}

	function a47() {
		username = o(), pR.get().value = username, pR.pa(!0)
	}

	function a42() {
		var max, a49;
		if (0 === username.indexOf("account ")) return 2 !== (a49 = username.split(" ")).length || (max = Math.floor(Math.pow(2, 48)), (a49 = parseInt(w.x(a49[1]))) <= 0) || max <= a49 ? (a47(), qx.a1l(3266)) : y(a49) ? (a47(), qx.a1l(3231)) : (
		a47(), 5 <= q ? qx.a1l(3232) : (qx.a1l(3265), a1v.pF = !0, a1v.cm = -1)), 1
	}

	function a45() {
		return void 0 !== username && w.nc(username)
	}

	function a40() {
		if (a45()) return pR.pa(!0), 1;
		pR.pa(!1)
	}
	this.a3w = "", this.a3x = -7e3, this.b = function(a3y) {
		q < 5 || (a3v && aL.aM > a3v + 144e5 ? n.setState(14) : a3v = aL.aM), aT.setState(0), qv.y5(), pR.l(!0), qu.b(), d4.y5(), a3y && aK() ? setTimeout(function() {
			0 === aT.pT() && aJ(12)
		}, 15e3) : aJ(12), void 0 === username && (username = o(), pR.get().value = username, a40())
	}, this.a1y = function() {
		aJ(13), pR.l(!1)
	}, this.a41 = function(cm) {
		return 0 === cm ? qv.cu : 1 === cm ? Math.floor(.3 * qv.ez) : 2 === cm ? pR.get().style.font : username
	}, this.a2L = function() {
		var u;
		username = pR.get().value.trim(), a40(), "password" !== username && "account" !== username || (u = w.a9(t().toString()), username = "account " + u, pR.get().value = username)
	}, this.cz = function(hD, hE) {
		aL.pe(), 1 === qv.pP(hD, hE, 1, 1) ? a42() || a43() || (aJ(10), a40() ? (this.a1y(), a6(username), fy.b()) : qx.a1l(4214)) : 0 === qv.pP(hD, hE, 0, 1) && this.a20()
	}, this.a20 = function() {
		a42() || a43() || (aJ(10), a45() && 5 <= username.length && 40 === username.charCodeAt(0) && 40 === username.charCodeAt(1) && 41 === username.charCodeAt(3) && 41 === username.charCodeAt(4) ? qw.a1c(Math.abs(username.charCodeAt(2) + 5)) :
			qw.a1c(hR.a46), a40() ? cq.cr() ? (this.a1y(), a6(username), fr.pI(), qw.b()) : qx.a1l(3228) : qx.a1l(4214))
	}, this.a4A = function() {
		return !d4.a22() && !d5.pF && !pQ.pF
	}, this.d7 = function() {
		var fV, i4;
		this.a4A() && (d8.imageSmoothingEnabled = !0, fV = cq.sT("territorial.io"), i4 = 1.1 * qv.cu / fV.width, d8.setTransform(i4, 0, 0, i4, Math.floor((hL - i4 * fV.width) / 2), qv.hE - i4 * fV.height - .72 * qv.ez), d8.drawImage(fV, 0, 0), d8
			.setTransform(1, 0, 0, 1, 0, 0), qv.a18())
	}, this.a3h = function() {
		return username
	}
}

function rY() {
	var a4C, dL, cj, a4D;

	function a4G(cm, name, a4H, v) {
		cj[cm] = name, dL[cm] = new Image, dL[cm].onload = function() {
			0 < a4H && ! function(cm, a4H) {
				var hD, hE, aE, fV = document.createElement("canvas"),
					cu = dL[cm].width,
					ez = dL[cm].height,
					dM = (fV.width = cu, fV.height = ez, fV.getContext("2d", {
						alpha: !0
					})),
					dI = (dM.drawImage(dL[cm], 0, 0), dM.getImageData(0, 0, cu, ez)),
					lz = dI.data;
				if (a4H < 3) {
					var a4K = 2 === a4H ? 160 : 600;
					for (hD = cu - 1; 0 <= hD; hD--)
						for (hE = ez - 1; 0 <= hE; hE--) lz[aE = 4 * (hD + hE * cu)] + lz[aE + 1] + lz[aE + 2] < a4K && (lz[aE + 3] = Math.floor(255 * (lz[aE] + lz[aE + 1] + lz[aE + 2]) / a4K))
				} else if (3 === a4H)
					for (hD = cu - 1; 0 <= hD; hD--)
						for (hE = ez - 1; 0 <= hE; hE--) 0 === lz[aE = 4 * (hD + hE * cu)] && 200 < lz[aE + 1] && 0 === lz[aE + 2] && (lz[aE + 3] = 0);
				else if (4 === a4H) ! function(lz, cu, ez) {
					var hD, hE, aE;
					for (hD = cu - 1; 0 <= hD; hD--)
						for (hE = ez - 1; 0 <= hE; hE--) lz[1 + (aE = 4 * (hD + hE * cu))] > lz[aE] + 20 && lz[1 + aE] > lz[2 + aE] + 20 && lz[aE] + lz[2] < 40 && (lz[3 + aE] = 255 - lz[1 + aE], lz[aE] = lz[1 + aE] = lz[2 + aE] = lz[aE])
				}(lz, cu, ez);
				else if (5 === a4H) ! function(lz, cu, ez, id) {
					var hD, hE, aE;
					for (hD = cu - 1; 0 <= hD; hD--)
						for (hE = ez - 1; 0 <= hE; hE--) 200 < lz[1 + (aE = 4 * (hD + hE * cu))] && lz[1 + aE] - 20 > lz[aE] && lz[1 + aE] - 20 > lz[2 + aE] ? lz[aE] + lz[2 + aE] < 40 ? lz[3 + aE] = 0 : (lz[3 + aE] = lz[aE], lz[aE] = 255,
							lz[1 + aE] = 255, lz[2 + aE] = 255) : lz[aE] < 50 && lz[1 + aE] < 50 && lz[2 + aE] < 50 && (lz[aE] + lz[1 + aE] + lz[2 + aE] < 50 ? (lz[1 + aE] = 0 === id ? lz[1 + aE] : 160, lz[3 + aE] = 180) : (lz[1 +
							aE] = 0 === id ? lz[1 + aE] : 160, lz[3 + aE] = 180 + Math.floor(75 * (lz[aE] + lz[1 + aE] + lz[2 + aE] - 50) / 100)))
				}(lz, cu, ez, 0);
				else if (6 === a4H)
					for (hD = cu - 1; 0 <= hD; hD--)
						for (hE = ez - 1; 0 <= hE; hE--) lz[(aE = 4 * (hD + hE * cu)) + 3] = Math.floor(255 * (lz[aE] + lz[aE + 1] + lz[aE + 2]) / 765), lz[aE] = lz[aE + 1] = lz[aE + 2] = 255;
				else if (7 === a4H)
					for (hD = cu - 1; 0 <= hD; hD--)
						for (hE = ez - 1; 0 <= hE; hE--) lz[(aE = 4 * (hD + hE * cu)) + 1] > lz[aE + 2] + 10 && (lz[aE + 3] = lz[aE], lz[aE + 1] = lz[aE + 2]);
				dM.putImageData(dI, 0, 0), dL[cm] = fV
			}(cm, a4H), a4C--, cq.cr() && (a0W.cp(), n5.sM(), aF.b(), a26.a0q([dL[8], dL[16], dL[7], dL[9], dL[10]], [!m, 0 === q, !0, !0, !0]), aL.cx = !0, dL[7] = a4D, dL[8] = a4D, dL[9] = a4D, dL[10] = a4D)
		}, dL[cm].src = "data:image/png;base64," + v
	}
	this.b = function() {
		if (void 0 === dL) {
			a4C = 22, dL = new Array(a4C), cj = new Array(a4C), (a4D = document.createElement("canvas")).width = 1, a4D.height = 1;
			for (var aE = a4C - 1; 0 <= aE; aE--) dL[aE] = a4D;
			a4G(0, "exit", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
				), a4G(1, "victory", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg=="
				), a4G(2, "defeat", 6,
				"iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC"
				), a4G(3, "orders", 6,
				"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"
				), a4G(4, "crown", 4,
				"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3MC1hYTQzNmJhMTIyNWQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NmYxZWQyOC05MTFlLWJiNDItYjZjOC05N2EyYmU1ZmEzNzkiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NmYxZWQyOC05MTFlLWJiNDItYjZjOC05N2EyYmU1ZmEzNzkiIHN0RXZ0OndoZW49IjIwMjItMTItMjNUMTQ6MDQ6NDcrMDM6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWZhZDQxNzQtNzljYi01MDQ4LWFiMjItODU4ZjBhMTg1M2UxIiBzdEV2dDp3aGVuPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jNxzTQAAIABJREFUeF7snXecE0X4/5/ZknbJ3SXXC/2O3qWXoyO9VykCgkgHURRE6dKUjiKC0qX3Lr33zgHXe02vm0125/fH5nK5gALq78v39yPvV+CVnZmd5LKffWbmmWdmEWDw4eN/GMo7wYeP//v4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92/5APR8Kf64D3/X7/COTbeucf0PhbqHYbNCwc/BMw6Z3r47X47ta3pu7PEPswoEuH0lcfFcQeyE/o413AxxuAfa+3e43pp8y5NWLjzLLZtz/Ztapxv3beBXyv17581u7taPcZzJ/zuS7/AQAAJpo2rpVXYMyd8fTy994lffwNPtm9BRItSOOBDmwKefcAAAMvC/lwQA/bmckJAA7v0j7+Gp/s3hR5DsT1gZVLP+I5pjgVEaSy/bZ10uoX1mW2LE728ff4ZPdGBKRBpQ6wecdgOvQjryyCFHHydnXG/ur/Kfd0kFemj1fjk90bUakD3Ly0Um8vy3NWgpKVzEQAePm8XotXHyctlkeflsz08Sp8sns9wU9h4sjqOqY04L/swNGyUl+O7/HlnO0+2b0JPtm9njrDofXGgYA57wwPEKJoiixXKghA453n4yV8sns9HAekKMA79SV4jId/1Go57PXO8PESPtm9BtoCNaspxfJY3mnyznsJjL1TfLwSn+xeg1QDcj8pwBsJCiHkneTjVfhk9xowgjfRksOWBwDYZ+7eDJ/sXoM5EtIyXzNKQAT9hubQh4BPdq8Bk5CXb7dq70r8KwK8wu4hgrKobwnvJWK6ZKaPV+OT3evRdQRku0cGN+RYvVcWQoRV+5C1ZAAAgdB3C3dCK68iPl6BT3avptIuIFmIHwIAkNseHj0zViVPy0MaYcx7FsMcyxifI0QBgERK2z2yavwGTz72BYG+Gp/sStBmLCjiiw+rbAJ9JTj7E/zy3ZX1y0pzTgtBSt25CJBV91DQHAAsWXUopzVuOxYCXgDHAQBU2AIAQFFwfAdYQ93n+fDJrgjCCX07E1/N+L5ixWruRJPJkJmRurLzfAbb7j5KjylzTFW2n8dJyGHLEd5JJeKEZE1ENjSp12TIT2MCApTuUa1OpzN1/VgShg8dLj7zPce3lgIAoNZG2Bj7ffkyFb0zikhMfjF7xjefDG1St0YZVfkh6sRfL569/2G3NqydFQpM/HrrwqXLIiNKEQRFkFKbIR4hCghSLC+PeQfmWQDYsvmnyd+dK1Hv+4rP2gEA+K+EMgfKe6d6ULFC5fYd437bfqn+D6+QplQqqlmrQaVK1S0Wxlx4lTEkkLRCCN825ZyhpKGqMv2crHb4iAlXO53bc9z79PcQn+ygW3foObwnSf3dT4EBT54y5/HD/nceJLUtK/LKTUrOnf7ddwZtrjH7CCKlJC0vcuMhgpbzTmv+s+UB0Z2xODQ3w+vU95S/+63fBxAP4eKgHr0HF3XFEO+0WgqvFk1NEIrwVoAIwLxOp1m/cXuXju3i2pbQToC/rP/IrTt/VSKEkMeAwxNSpDQXXON5+4bf17S6NT63gXeB9433XXaxe6FuvcaC5hCijLlnOFYHiHAX0GXsB8DK0r0AwGQyliqlYq3Z7lwAeJ6QVb6sFHmcwjAMy7p8KRjjgIBA4T1BiKOUuuBL4JPd+y67skeg12whFB0b885xDgMggiAIwMDxHEEQACQAaFO3B8eM5DnbrLnLOMM5glIIp0vF9KzFxz7qU8ddocGg9wwIQAgZDHqlMojnOQDQFiardgOMcOe/p7zvsnNDiUM4VgcADgdrNpsRQgghiqIVCgXP8wSlKEz8NTh2pEols7JSo8kqnGVhWIcT+nRrotYYAcDhcLwchIIQslotEokEADiOQwVe+e8jPtm5yI9fSomD9DotIgiSdM0tcJxTr9fxPK9UqkjaX5e2KzC6+5gvNq/78WMAIAg0Y962jm0qCJozm008X2IOww3L2kUiEUEUN8TvOe+77FCR2xIRIrudQa9SBkEQLMvSNA2A9NlHU1IZEe363TgORg5tazRaESI4jnObOoSQVxCUcEhRJI70TH5Ped9lp64BKckJlavWIyi502oREkmSsFjthWqTQi4JDfG3s06LxaxUqjDGmHcIE19uWNYJAFarRdAcRRE2xrlx24Wh/ZsG+MscjhKlZVIxM8wz4T3lfZfd/amwYeDyZSv/gKKQdAKhKTMP5o2BJ6MAAPq1hzLRQYP6NDWbjHKFPwD5ycjOdx4kAwDH8f4KCcOwAGC3MwRBEATx/aqDR34CUzdYB6c6NYNflw8uLDS6Py4xOSepqvvo/eV9lx1PQUG+PiX5hT8CjnMCQF6hwdoTnhQNNnefhvYNNSMHiyxWRmgoK1YIf/r8xisddNduJe44WnxY0BvmLj04ZlhrjLHQsbtyM1HTq7jAe8v7LjsAuPQbLJ08f95XHSiScnJOACBc41QXdzZDwpW8UpEqjuNIkrQZE0mSgJJNLUEQykDZketPPROfDYBWT6QAwPMcQRAkgW7cee5Z4L3FJzvQx8DNT9VWxiFXKHR6Hc9j1r9EAW1lWNz/yh+/fKTWmAIDlSXyipCI6Wlz9hw75Z0uoFIFA+CfN53ed9Y76/3EJzsAgKRuMLPjro2LR3Ocf0GhQfLS2oncObD7wK12rap7pfv5SYQ3O/Zd37PQe/126/HgFykiSVIiphetOvhc/FK97ys+2bk4eAKM9X/ZunZ4VLhS8at3bnIPOL0wqVvH4tkIAMgv0JctHSK8N1uZQH/QemYDODXw0fjGkRER3y7845lMc3pdyez3GJ/sikmfC8Mn/P7FuHa1q0cXLM26/WWJXIkYNDpTWGjxWCK3QB8e5mpzHz3V6l6KnCofodAb2S9mry5sA9e/8859n/HJrpjkjpDcEZ6f/bNhEpRNBi/Z5XYCnd4a5hGbXlhoKB0dJLynRYBLeprLnYACtaln0OHsiyXSfYBPdi+T0QYy2gBlA1k+WMMAACgbBD8GWQHcyk4hCFFOnlarM1NOG2tUSyW04BA2tYXwO4D44ugSXSzs+bO4Wh+e+ILaXwPioXd7kMlkAIAx5jgeEQgVLZjFGLtnvQCA5/k/9jOcdxioD2981u7vCH4MdUfCngs3DBo1AGDhHnVNtrrvVyFZ+IfJfuNeNMi9MaMo08er8Mnu71AlAEWCJWObttDglpdLfIBL6A+70jWFuYy86Hwff4FPdn9HQm+QGeCTiT+tX/aZd96rsLMOKgIeTPRO9+GFr2/3euIWg/SA6z3LuiLeXXEDBPAcYAxiMQAAQnDyuqukj78F/3/ymjJnyqxZs2w2W0pKyqJFi8YvG085Kc8CcpO80eVGU+dNlZvkL5/+V6/AROjaDfq1VZmS5rarD9a8Y9vn+mXe/CTt6tD0ax8fXlHGnHsc267eOth1dL+grm0h5CGQdu9K/uolN8knLJzwyq+k1CoXLFnw5MkTnU537dq1Lxd8KWWkL9fw/+jr/41GVmqTBmmCnLQzLyzPOw8AAKYsnrLsu2XC+4CAgOHDhz9+/Fg1VzV3zlwhceKkiVWqVBk0aJCovqjW7lpPnjxZNXcVI/Z4wsRLEE5o2wQqV42pHRfbooHq7u1rrB14HlO0H0GQDp5FCDieZ+0WNt9qMtu/Gt9REaBasOLk4wcJj3pA4ev8w9OmTytXptxnX39mMBhK/1Y6Ly/v16m/qoPUABCkCVp0YNHIL0cKJStUqNCP7ldqfakpfadw4d5TcAAQrA6WMBIAyIrO8s77X8pLSvxf9RqxeMSmTZsEPwXGeN++fZMmTfIqM3PmTHcBjLHValWr1dnZ2c+fP++zrQ9gmDp1qmcBtVp9//79y5cvk07y5U+M3Q/dmsMH5eDnpZ8mX+ybcnlI6pWhCef6fTk86NHlH3Tp+y5ubZRyeXDK5SEpl4ckXxx0aWcnTequptUg6Xyv7FujUi4PfX6qHbYdWLe4b/t6ELvfu37hNWHCBK+vdO/evXPnzpVNLwsYEhISPHMNBkN+fv7t27ePHDniVU/jm40XLVrkLrlt27aJEye+/HH/217/q61dgCFg1bhVfn5+wmFBQUGbNm2qVauWczpnT/s97mKlS5d2vwcAu90OAE6n02w2t9S33At7f/jhB88CAKBUKp1O56Rpk5b96LKRABBzGOqsBkSgrxesqV1JlPBgHyJCJBLZi/j7YRExF69ovv6uDCJo4BiF1Mk6CRHNWyzOnOSr9dt+xTkgW+2fcXFbu27DMQ5LvXuwfVNZr76Hdm5bfXThGfVguOcxzvho/UerVq0qPgbgeV74K1pvap3ePD22VaxnLkJICNerUqVK86vNLze9LKR3OdWle2b3kV+5jCIANGvWrF69eiHzQ76d+a078X8h/3tlF5kXufD0Qr+hLs0JOJ1OjPGnxKeibaLtg7cDwLDNw9q0aeNVxr2moUWLFjO+mQELPPMBAJRKZW5ubqVKlQJ1gUa5vvUkYC/D8lVL6+yrn/boN4AbaQkgVYTfvXG+XuspDTr0/fPk7v4D2tO0yM4yhuAl9vCqoaGhyclJSXmZdw2xXe25nbvWs2NllxE7bKbCm8enBQZFVKlR35y9t0vLsF4dxugcFW8tu3Tk0IHcjlDQWtkvzHP/HgAAgiAwxhzHdarW6crhK1wc515GBAAsy/I8jxDS6/UNDzZ0y24yNbnNyBJ/u0KhMBqN3bt3Z+ex876d55n1v4p3JrvPVnxW3lE+PDw8MzPTjMxHuxx9XOOxZ4Fea3sNnTfUM0UAYxwcHBxzNcZ9SNO0Wq1WqVQAoNVqBdug0+k8T3ELEWMMAAaDgabppk2bfrZ8VNqtFdVr1Jp6bk7uiz9SH94TNg4ryM0syM9t3WclRZO807p18+bRY8YRBLdgze3lPy4RqgoPjwgODilbOvLrJVtWzF7cvk2bVWvKlilbrvOwbZh3XDr4RbXajQiSYu1mOXrQo3uXXn0/Hj9mWLUXMaoRKpZlRSLXbIbJZAIAQVhVq1Y9deqUTqcTiURyudzhcJjNZvfXBijelTsqJ8rrfgMAjDFBEAzDNG3Q1CsLACYvmBwpioyMjMzJyclz5q34agVPvHqp2/9t3o3svpz25YIFC2iaBoCCggKJRNL0ctMh0UN0ymKtlA0sa7VahVkpAGAYRjAAwqIsZVG4JUJIWLIl6Ey4KizLOp1OABD+12q1AQEBAGA0GoXrx7IsAPA8T2HRhs1H7JbC3Oc7ABEkKdYU5mamJcbU7FGpYTOWtY0YOhAQqAugXbc+P6w8t3RxCctJkiTGeOxnIwhxVlSUbNa3kwgC/bx+t0gsjuu57Mbx2ZhnqtRsyPOcIfcC5h2rVq958NwKACaTyd/fXzBgwnc2Go1Q9P0RQg6Hw/POyc7OBiieiwMAZEdGo9HfvzgkVVjey3EcAAjLct1E5kYO/HGgu7NhNBqzsrLEM8V7h+9NjE30LPk/wzuQ3aiVo5YscRkMAJDJZHa7vVy5cquPrz4oObi3t+txIn5+fjabzWw20zTtdDqFzo1YLNbr9TRNlytXTii26eNNZWaXmTlz5qVLlzZt2qRQKPr16xca6goUOX36NKNiAMBgMAgpAECSpHCYmJjYo3FWQeJ2ACBISl2Yl5rwuPOwrWVqqoPKVTu4bcv2HUviP4Hng2HW5Or79z8YN/5ziirenVi4xiqVKi8vb8fuh5UqVrmecff5EPzRgr78fZj0+cTG7WfIAyIeXP7Jpk8sU6EqELQh+xSyUKy4IkLIU2c2m03Q3+PHj3FzHBgYqNfr/fz8Ll++bDKZDh8+HBcXFx4eHhMTc+yTY8KnR2dEO/wdhYWFgi0Xfh+WZe12u9eC3DKpZXYV7Gr4Q0N3ilwuDwkJ6d69e7PEZtMt0x/VfuRR/H+C/2nZlUkv01zV3DNF+N1DQ0Pr169/c81N6O1KT0lJUSgUJpOJ53nhd6Rp+vnz58I659u3b0M3V0lNsGbkyJHz58/fsmWLw+HYuXPngQMHJkyY4HQ691X7LYqtLhhIoTBN08+ePaMoCgBy8zQ1qmMAIAgiIf6hKqJWlxEzOIdRq1F361g9qBkcOQ4AEH0bqlapw9iteXl5brlD0R4Awve/didnzaIlXXu1SeoKSV1BqobAgavMJl2/gSNianQ3aFPP7fu6Wt1WoeHRH8Rahi86sGd7c8GYkSRptVpzcnIEW25j+A1DNjTb3LRly1abN29u0qRJ27Zte/XqxTDMli1bTp8+/WzFM+HTUyumisViYfzkJi8vT/itPK3dsN3DGn5VrDkBsViMMS5Tpky3nd3+/5ddveP1+g7v65lis9mEK2cymVq3bv30/NNzrc4BwPbJ26v9Ua1Lly5CsZycHJvNJjRqDofDEOqyXqM3jRvfbnyl8ZWEQ5IkO3XqVL169Rs3brx48WJ+zS4H9m1d83hthw4fugsImisoKGhU7raIIhLi76vzUnqOOWozF146d2DFjytubgatx1KbUj9Av22fzVlwpGe/8MLCQqFPxrIsQRAEQWRmZgoVshazSiwDsAKALRj2/Amnn23d23MrQsG//r6+5+i9BEmf2zOhYbMOqyerv/5mYZ+e7QCAIAiEkKA5u91+6cTiY/T4nzeMe/Z8yqKF893fwWKx9OzZs2HDhpqpmm0/bgMATajmxvkbderUAQChhrS0NPe2BMePH4cipYl5setdETqdTujhMAwTGOjaGeh/kv8rsuuzu0/FvIr+Nn+McR7k/TL5F0bicsyWSihF07Rerxc6W8IIAACysrKEAizt2h8zJzLnlv5WE20Ti8WCMeZ5Xrg2BEHsP3F49czVtBnKHyc+rTWmUiWX5oRchJBIJKpVq5Zax6xZOVKp8uvdocytp/E1alSnKEpoktLTs27dutW7fsq9Gy8adfxOHhCFnabPRo22kpoTN9yVAQAgDNIXoM3OiS0flpGRERwcLPQXBaOSk5MjaI7jMY/x198s3AKT3OcaqsDesxBzWD129NBvvp0fXapMq94rzu+dWKpc1bFdqL2XZXHNmwpfCWOs1Wrv3L62cN60oYOHtew0ctinJWZ2EUI0TTMM065Wu4zVp68PLwDkPHThQOnSpaxWG8/zHCdsFAQkSZ4/f/6Hr4p9Rs2bN9doNGKxWHBFCVbWaDQKyqtevXiBCO2gh24YGuWIktlkGGMNrVkzfs3fO9X/Gf+97L76+qtFixYJ700mk06na3a02dOnT2fPmg0At7rcysnJkclkWm3xwgOTySR4PUiSNMmLH+3106SfnH+I2tKtAgMkUVHRWq2W5/HG9cuiFQkzxlVFCAWW7lu3X/FWwwCg1+sxxiqVKicnp3aNmJG99rMOnnMYWlY4mpx6OylHgTF2cmTHugkG8kh47MpydUL85IqE5y++/XHiwdOeNbkofR4aNK6MEPqoR+z4mRuXLJrNsqxEImFZNjU1VZAgQmjc4Eo2xlm2bEylyfBiRYkakrpBUjfz9YWTqx6FVWt/btl7uZ9/5Pm9EztV0xHW5xeuKzGAUsHGVcup1bsVLZLt2Ll9zopbYZ5xzABCT4Mkyfr169/fMOwibjdj2iSCuLBh1XMjV7VP7+4REREEQTx4GH/FcO3XcasdouJnkF67dq1q1ap2u92zRc7OzhZumKdPn8KHAABSq/RG0o2aY2oKBcxms9PprL6z+lcdvsoPy3ef+J/wX8pO5BCNnTZ20XKX5gBAKpUCQGRkZNmyZWfDbADQlNLcv3+/aVPX8B5jrNPp9Ho9QRASieTevXsPuz50nx4UDycVK/QrV5ABjSSB9ds0KxOskm3+7XNtTr5gI7+Yf95ztAsAwuAjMzOTJMnw8PCE9Jwopc5SeBUIeYUIU4UIEwCwrD3+0f3OI7YRiFAGhXw5+ZOMzKSDf7HWsNosmLp5NgBcPLq2epT/0aPHSJI4ceIExpiiqPbt29eoUcNms+pStpQuPZ3n+drx8MK7DgCA1OmQOh1sdcecvX5Zk53Z8MNvLuz/nEBPOjVswTmdAGB3iOwF10haIQ9tShCg1+vdzZ/QD0EIcRxnsVjKlyudl6/98qu5ACCV+kn8YPfBp7v3HiUISpO87uEQS/RZSO1Y/NFWwoZK7smCEBI0R9O01epaFdzr0141t7k0BwAkSdrt9mrVqn287OMli4uHgP8J/6XsAMOYMWO80ux2e1hYmE6n+2bmNwvmL3hR8cWuU7tq1qxJUZTgEzGZTELrYDabzjc5LbISlXfwsX9AYQFQNIwaPdjRHYaMmwLGHL3BjjHocgsEzQkQBFFYWCiRSBBCVqtVaIiF/wHAmHMq0OkE5DrEGBsN2qRn97uO3GM15t29c3nFspUp4+CZ95PYXVA28JOI5HJ/O+vAvL1WmbRzCfGNGjfbsGEDAHAcd+HChRUrVsSUlkRyT+tSYpYxZGVB5A3IaeRdlcC5e1C3TPOxkz/+5JOPOwz+LeXJscf3jtdr3MpqEWw85hxGXfo+RFQlCEKj0UilUpZlBZ+I3W53dRI84oZsNovNBu2aRffrXAFj/sZNeXp6sjnftGXaIaUS0oYCAGxpvbblwxZRUVFSqZRhGADQaDQURfE8n5eXd632NaGqNWvWuCr1QCwWd+/eXfeb7tcRLy2n+xf8l7KbtWZW9GfRnilGo1G4RxFCbpu0Y8KOmotrtm3b1rMkwzDff9Xpp6VzzVc7NOgfx/dxGgzFj7zRZ2UhRFrUd3hO6Gcgp13Dc7bmdaIzMzNVKpXghyNJEiGUnJws6Pjp06dx5ewmKw0ACCG9Tv3s0Y0PWo5r02+EWE4P6DHy2Xj9i6vuD3kFDefDiJGf2WxWqTwkL/Oe3X9gv/6DY2MrCLkmk+mDDz7w9/c3m4zMs/3a/GfygKglP3477eS8v5IdANxPhxmPN+9pu3nX3n0R5RqXrtTm7vnlTkYdU7mmMCAgKFmo0smyLELIZrMJZ1kslsLCQgBQKBSJKbmOgrMWJyHyKw1Fj2dBRGsAqFylZuUqNQCgd58hfn5ymhapC/NTUxNXrB1ZqlK/UaNGCJ4jiqL8/f03bdp0ocuFa42vAUCFFxUUMa69IgUEK4gxVigUqgSVZ9a/57+UnYgU2Ww2m82mVCrtdrvwvWma1mq1NE17jphmTvx6/WW627GRZcqW5TjOxrBjB1fbtv03AABAWnUOBrBpHzjtakFnFEmYbehpup9KwUaoeH+Zk6apjHzbhZObsg2R48eOstvtCCGdTmc0GgXNSaXSC5fu1gmlAQDz/P07F2s2GdVxyCjMcynJCbO/6nPsvPdar5eJvks0Gt0CY/z8zjaRLNomb+HWnADHcZGRkXl5RIYtNv7mpkYdZjVu2tpv1mLqa9ZZwl9bgsIacPoWDBjem3gGew4crtHkUwB87dh3Eok0tkotnuf6xWVt/G3z8GFDAAAhlJGR4T73zNlLWLNr/PTEhd/2l0rVOhPJc47nWYrK2j0ERUlFLABGBA0Y46iOGDtpsX9sxaprVy4mScTYHxw8l0BRFALYa/v29lcOu7/LbPI8r9frAUCpVDIMIxhFKDKxsbEl5oj/Pf+l7FiOFfoQnu71nJwcYcSk17sSVc+g7hCoV7/C7LldbTar0F5gAIKUOpg8J6u3ae9D0RoZhEipiNtzJapOg659hjdhGGbfvn0PHj5+cX2Jwl+19udfr93NX/rDjwP69xP6y0L7K5FIfl6//eMPCwCAJKnbN051GradsWgokszKzVqwfMbRI0L1r8HO8ARBcBxnKEzJsn7Qu08zz1zPyd8H+c3bitYBQnqdZvSYIUnnNqZ08iz7Ck79DvIc6NCu29mrf1r0hubdl9w8NS854XHFKrUdDlYpLUhOTqZp2rNHIZVKGtakP+q8kCSp3t17RFdp26RFvw8//LBzs5CMjPSzZ892rHELCCyYQEP2cQDA2Okf3paWhvG8g6bwyH6VAAHGkDgj1q/dU5kMLv0EmipAUSKJRMIwjOe1AwCCICiKSkz8j2cy/kvZ3Ym44+fnJ8whCpAk6e6xmkXWSgdAMRWGDm834c4iXXqKkEWQYs5hdjD55vxLBCUDQG7N8TwOD0ZzNkW2ahXXrFlTocIOHTrUqFFjl1g+d0o9k9nauG4oSUk3bzvQtVOLkJAQAEhMTLx4+XqfOIPSz87amTtXT/Qac4ixaJRhEd9/N/PmjfOHL7m+3mtZteY3juMwxnlpl7TMKJVKZbfbxWIxePiKXe0g5ihaZLcZaJGsVJny1WbBa2UHAOZIMI+Flo3anTl/hGGYhh/OvHpkxvOn9ypWrd3hg5ztZ/bUrd82NCxCIpE4nc7EpNTLly7MndrMyWGOc87+YUdQRJ3KlSsDAMY4JCSkT58+q9eqJ3RLQwRtsbrMFUKUKf8C7zSL/StS4iBpYE3eaQJAc+bPCgqN2L97c8D0nefGmhlJMo4oHnMIJCUlURRlt9tTq6d6Zf1L/klQe7f13co/K2/zt6U1TjvVoXgEKHKIps6a+sUXX6jVagAQ2lYAwBhLJJIJg2qcv3NNk5lBkBQAIIImKKkh87jDni/MvmOMVYFygiTW/X6GIPDR04kIQbPuS2Z+PVG40gKFhYVCL2fh4tU/Tq9hKbwGiEAIWAeRkicHgIaV1HqLSCyW3L99OTC0Uq1mY+w249rV6y5eOHfxBrzVakK7+pTFYpLIVIc3DDD5D+vR/0uEkHvWBAAQQqmpqQCweev+7tX2ckRg/bbT/BT+4z4dvmFvdom6/pYPm0Cnjm0nTvlWW5jnFxC576cuDeO6IESqFPakHIXaKJaJnZVLGS0MxbFaWVB9v+AmuebSlT0clhqNBiGkVqsPHjpxYd9rT6guAAAgAElEQVRkhoWWzUrL/SRNGlSuWjFao3O7pRDvMEkCqvqFNsKcy58SGKj8fePPDzKrjvvsI+FeUqvVglccIbRr1y6vkayYFXf7qVtEagRJkk+aP/mz51uvB3472Q3ZNqROYZ0pU6YAAMMwiYmJew/snfvdXM8y02dM79u3r9tdjjHOzc099eelNQs66Vy+OsyYkllTkpPVC0+OE9EULaJWrz/+8Gm23Q7PloDdH7SVwSmF+/fv1q5Tt7h2gMLCQoIgUlNTzWZTaXIDKhqlesJj/sWTewpl2VrNx3FOxmoxjfpp+IlXDNT+jlq/wKXOBziOsxiy85KPPMyp07zdyKAg1zYAIEypJSQInojrF7b2bKZ7eO9+406zMMZbNv30+XfnX9t39KTjYHC+gJ27dyOCsFnUV4/NaRzX2eEoMfflRmdg63be6Zmi0WgAIC0tzWKxtIhrAQCh9wEB1J8ITgfUrRURWz6yc/s6ZktRhYiQ+FeSKWvxnA0ACIJ0OCyPUsOVKpX72gFAQkLC1JZTcyNy3SmjfhlVy1lr3LhxAOBwOLRa7YoVKxYtLPaavQlvIbvBWwYvabckIiJCONTr9RzHxcfHHz19dMm84ruB4Il5i+aVK1cuJiZGJBKdPHW6agVxi4bRHIcBEbzDaC64yjutgoniODzz+4MAViPLX9wOAGBxVe/Cxtg8pxetVqvNZuN5PiMjw8/PT2WZa7F59xM4p/PpwxtB4VVrNR/jdDA8zw0b1v/oRa9Sr6fTUNg2by8A6AsTSWeClGJ+2Fd5xteThIE5QRDJycmCMwwhBAU/qxTs/ZvnW/ZeDgDKiKig1MbaYmP0RkTegMGbKs3/frXZZOQ49sqh6WERZSJKlfV0uQnsulj662/muw8xxoL7PS0tjabpPXv2zJ9XnOuXB4Ch5XjgC6BMhGLE4Dahwf48jwHzGHOkKNA/sj1gHmM4cSE9PYetVKli6dKlxGLxqVOn9rTcc7v+bXdVJE/qLDqFwjXm5Xleq9Xm5OTsPLRz4bcL3cVey1vITq1Re97rBoPB6XQmJycHBgZ2ha4JFRM8ykLdZdD4TvSPK3+x2WwYAyJEDkuWWX0dAHge6w2W/EL9hq3nTVXgzE+e55UgWEvnBdj0er1CoUAIGQwGoX+dmZnJcZxUKg1l5gn+EQGMsbYw32x11mkxieedfoqAmV+NecwlnRSGyG+DRAc1G8LJP/fSYvmRjf0bt+yOMaYpfuPpyjzniIqKEvyOer2+atWqT+KTB8U9BEAZKc8/+HCegzEBho/69zl507va16J6Di2/gC0bjjgdDkokv3bsu8KcZ01b9/C0QABw6Ga5IcMmChOMGGMhmIWmaaHvf/zc4e++LNEEedFuHDSCqK4f1i9fJtRgtCKEeM6qLNMXIRIhhAClpiZMmzL99h7Qlxi4w5KlS778ssTeMGq1WvBazDw3c/fo3Z5Zf4O3qfgrehzqEdS9WHMAIPgwAcBkMvXY3cPd/AelQe1esP/wfq43b7VaSTpQm76Ld1oRIktHBx04/mDRigvEp3D7i9c8FaRHS1AFSpMWJwUHBwuBkAghjLEw/wgANE0zxuIWViyRPrp7XeIXXKv5WIw5iUzaskm76/9088wKJ2HK1CEA2G7Th0fHCPZGJuYKCvVrV7umO/V6vcPhUKvVN+8k8xgRCEeXi715Yl7dVpMBQc3aMSchqUSlb4C2Muw/CmS7riGhkfMWrKjX5gu/gMiD6zo3ad3bUfRkHwDQmbBwH7pTRCKR4GeRyWQWDRtXEx7vA91f+D3+XAt/QvaxVdnlV0H5MqHfftG3QI0NWccQIQ4s3Z3n7GXKxh45deLu3Rs/jpyz/3zxiYMHDy4+KPLLYowNBkNHccfd8F/LjjNyGo3Gbe3UarXQ9xQOhf4NAMTNhNj4wA33LmpSXxAECUAUPF9NigIRIpWBfk07rVA1gac3gPlb72OFw1BlCXw+/ZvmzVsvWndi/NiRgnOEIAi73Z6eni4469PTUipIXb0ngiTv37pEUZI6LSdj3qlWF3w6YsyTt+7pFhM4HwY8/dyQmXF21wj/wEgAENH8ot2V166e5VmMJEmSJEcO7xFivqUxiSmSZiwakVjO2s216jRAXNI/e3r2nj+h2racu3eu1q3bxGLIadVn9aWDXzdu2cnOuLzHYzomicVit3eNoqinT5/SNI0xvn792hej6wbPu9mkZsPUbZD3QXG1XtybCPcmQvljBbcGrf1kcP1GH1Qkwa5J+l0SUEUeFme1mipWrPrpmMl+nVdsPQYA0OBW/cAaxc5Xd2yfID5hevoNeVPZiSVihJAQCezprxKmoYRHmfduA/7+IRu27dOlJxIEYSm8xloySFEAz/Nhof59h/+UvAtu1vCs9dXEfg8LflhSqlR5nU4nF1mSk5NoWgQAdrvd6XQKEpfJZGvX7/1uKAAAQkTiswe0SNGs+yK7Vbdjx69HD526cxRMJWZM3oKgeIiKlnJGHee0E5Rf9bqN7YwtVytpGecdKY4x9vPzy83Nzc0OigwyY8wZddlimZK1m3v1GoTJHV7l35yng2FFk5VjJ3KtWnYAwLG1e9y4dLhKzQYSiRQAGCd5bNeuxo1ckyEmk0lwGgQGBt69H9+nfVNdTubF66ebNWhfqxWc+sWzYm9SOoMlHA5Ou/3kWeGY4XFA+bGWTG3y5qCYkcBqGjZqbjQZ7W1/uzQXWGTBGBcWForFYofDgYv2ATebze7ZyDfkTft2nY512tVil2cIA8Y4LS1NsHl7du9Jvbd807YDNpsVEGHTPmCMiYigCIK4fD1+95HbKcPh6cce1b2KqT9MDeFCJBKZyWxGmB09qJqIprRpO689i0otDO3cyRUwBwDnzl8indm9mmVzPAkY7t44pwqLqR03DjCs+3nZ0tHXX97h8K3o3hO6Ne/Rs/dgm0Xz8OLyyjXqA8Cfd5Vd+33tHlFBkclnGCYvL2/z1v3TB6YxDlKv03AoqEKN7gihgV/1PvlHcbX/gDJnofYC2L//jMGgF4kVJ7d9XLZCzaDQcIyxjaUuvGjSoH4td8Cz0+nMe/FbrQqMLLQVRfst2/CQpMQymdTpsFv9rQsGL+D9/27lBGKhazuoVinikyFtiCKzoizdC2OOpkUH9v2x49AfK9Y+Dw4OLj4FoaysLIfDQVHU2bNnp34+1Z3197yptTve+XhuYq7gj0UIaTQad6gcSZJZL7Zv33XUaDQQpMSquWM3pyKCEovoq7dfbI2/ffqCV2WvYNLsST/MdvWZtFptQUHB+j8OhCp0beqImlQpbFKlYN1uVxwej+GT9iliEefkCHVBTlrSozpxY4Mja/I8J/X3v5b5bzUHGExpMGLn17q8rEdXfilToSoASERceh4ZGBioVquVSiUAaDQakiQJgsjOzva81yUS6f0b+2s0GWkzqxVqBG94W/8F6W0gvQ30aNZ26x/7Wbup08c7jm8ehAGHhEVKRc6ONS7tPJWuM4sIBBiDSsH2izM7ncAWnvjxULnvv18gVKLVai0Wi3St9Hr160e6/uX8DBbB4Yug+yb3wbRtP84fIKIpgkC69L3Ksv0dDrZr9z6NmzbfvGPP55PHCbaGYZiMjAzB4CGEUmwp3jX+NW8qOwD4/fffBwwYwDAMxpiiKEFzBEGcOXtl6+aNOp2BICXq5M2CKy4wwG/YuHWalnB1o3c9LzNp7qQVs4uD1HieDwoK6tat6959hwP9MvQWEQCa0tMVzI0QWBgKY6AoOjXhbqu+ayhKxPMc67B3j/vwyhN3Nf+QwBQICVE6GCsAmA05UmlVALCzRKkwTlhvJsxdClJjWdarffEPVHEc6AuTRJIAiwVHX4SsFp75/4S7g+Deveu1azdgrNp6bb64fWaJ0+EIiywFAANbpMskTsHBYrVTAAAYbzhdqW/fopB/AISQTCbr3Lmz7LzsCPyl7AQuLwDEg7TtziWzB4lFIjvr0KfvlYe3JilZUFBog5p8VlamzebSgKA5kUh05MiRX798ixCVN21k3bQ93naIeojQf0xKKxjSLSo0SEpLAtQJvyJSAgChwYHdBq/O/fwvo4m8GLVk1PJxy91rsAGgsLCQJMnU1FSM8W+b9876OMPKlLg9EEGkJjwtzEtu238dIsjAQFXblq3v7/7Lgdtb0aUpbNi0XSQSA8C1o99Uq91QGMaGBTIT1pRds3yO0Wg8f/68EPpWs2ZNmUzmcDik+rVSsatPnZ+TmfTsaudhf2i1mkmLRh/b5Vn9P6djYxj4Ud9OXfoQBEnR0gv7JtVr0oaxueYeBTCG47ejB4+Y5hl4IXiSrVZrQUHBzp07f1jqvVj9lRAO6DgK2kZV6t6xAQDwnFWiqCgLqisRi9Zvux4YUonjeADgOG5d/XX3at/zPv9vebW1G/H7iPCkcJ7nEUL5sfm/DS92fJ3pdOZZTjzrMHWcoho5rHd4SCwAVif8ikgpABaLqBETf715xNvr+zeodFGemoOieHGMMULIPyCIQMXxFwJpifFadXabfj8hggwIVH3YtvXjbf+N5gDA4YSwsEidTiOSBlSu/oGgOQDI00na1XceOnQ4MzOjf//+crk8Ozv7+PHjNputXbt2oVKHk3f1h8rGVEl8eh0BKlW6LJdaXPO/5MR1kLTaU7N2/VKlyjkdtrJVO928dLhe07aejhWFzJGSSwrRtZ4ghITYsNjYWHmhyBzi6rH8DTwNxzaBtO2LAT2b2RiWIGWsNUuqrMnY0ZiPm/cbMPbFZC1TJyQzMp0jirdlGbp1aGR8JAC8rBxPXiG7ycsnzxo+S7hdTCZTfHx88IzgEx+deFz9sVAgOzKnVyv4dNqUatVqY0A23SNBcxqdae6Sg4nj30JzygRABGW1WlmWFZyfQgSE+2LHlI8o0MfLxMV/GElSWnVO826LCJJSBCo7tGl9dxtoK7vz/y1VqpTS6TQAgAARHg0oQtCiRv6Pex78sNTljkcIjRo1KiUlZdPW/VP7FseJsHYmLKoSLZHb7Uxcq8ZZm64/GebO/FccPAeO5tNmfje3UuVq0TFxL+7+8fDWpVr1mzkcrhB2BIAxYlnWZrMJv6cQmUEQRGFhIU3THMd1mOq3d8vrZSew9wxwrTY2qhczsFdTJ8frsw4py/S3WG2jRvZYv3Tl4UvFKxAAYM7cOWPHjg0eEgwAFovlyZMnMQtjvvn6G+x+jmUR3rLreLxj65jWbhONEIqOjh42ZBjajB4vcsmOtEOL1m1r1frA4XCw5jS7KRFjZLbYvl928Mjl4qrehMbDwNHcgRDiOM5zdYUQPwcAeQUGVXWWYYXLjylSdPvan826fU+L/DDG7Vu2efjHf6k5KNpCBQCeXN8QFirhi7ziBMI7L5SZN7d4bxH3iGrcZ0P8bXONRfMlHOeUyeX6wiSZIqxV6w93J153n/IvwQiOXgG63XdfTp1VuUqN5t2XXD40Lf7RndgqtTyLvfx7uj0sBEFEU+Gd++vevOk/chycQ5L4vWho/+Z2Fow5JwOiOjdtGpebk0a0PHTwgqvYgB0Dpk+fLnwKAFit1piYGIlE8uy3Z1s/2eoqVEQJ2bU833J28OwGDRq4U4T9EPR6ff/+/S9dunQ97joAdGmnGLRplMPhYM3pVt1DjsN7Dl29fT/1gIc7+01oNQ6OXXuy/fdDGelpwSGuFStuv4xw6LQmuSckTUZDauLTinX60CI/mUy2cvmy8/ddWf8hS5dtZFm7TBGW9OhgSKvitZXXnoeOGP21Z/slXN3Q0NC8vLxLj1V1Yo0Yu752udhqWYkXKtbtX7ZcTPgsgPHuk/4DDvwJKevnbBDNq1ChSrdPDx5e31OrDlMFhwOAyUZHh/J2hoGiHxBjnJWVJczr8Dx/617qz4uXbtyw9hic8Kzzb3BK4cheuPY08djAxH2bRlqsVk3K5uCYkb37DOnUqZe9w8cnTkKrS63m1Jvj1hwACL49nueHlRtm/8O+e2CJCYwSsmt4u2GDacWagyLXlEwmYxim+/Xu1+OuN1sAB8+c1uVmsZZMi/YuQmSp6OB7j99aczU2gew+pN/4qUtdzfqTEf16thaWk5AkKWhOaGf7tjDZHSQAECSZEP9A4R9Srnon7LStWb34VvxFrzr/Pd27gXOtAwAQIiiqONoKA7B2XqvVBAQUb/4gLJUV3p+5p2xURc843I0yzk27WbFu//DwqKKZhf+Sh5/Ct42/PXH5li47o+vIfcd+HwiAVMFhAPBJ+6R5i38cN2aUTCYTHLnuacyAgIAv+hdmPN00eGDvIx+fOLG5RJ1/j6YaPN8Oq9Ye/2RwG4KUWdQ3pYHVpTL54O4Db9//o/yx8hUXV/QszxRtHhIZGRl2MAwGemaWlJ2clRsMBqFPIIAQoihKGFrStAjxIN4PmoEZtERpKdyDSLEyUP7x2I373/TOKab0Fjh64lTqk+1qo1iKE0+edNStW8d9FQFALBav37jvq/6MgyMA4M7Vs4qA0LgeSxmrdvOmtTdvXNz3qvWFLg5Go7MRYKPgrASKgkaLISTQqRAA8Ori2AoBa9Gs3dObm0m6WGFSmkvMxP0jIkwmkxB/Iaw8QkV7r5BEie6LnWE4jkeIcHJccIgI4K/7UvdV6LeS8+1FvPz1PLl0ECZ/0mPhkvVWUz4tlmWkvogqVd5ms+jMos4N9VeuXqtcqaKnc8ff33/t+j1f9rGzDmlhxhnjHQh+BOrilWKvR10DnqXl+CukRpPNpn8i8a+ICLpzl767J/6hrBjpcDg8rZ37oy0WS9OmTTdZNpn8ijuCJWSHAfM8L4y33aSnpwtVIICxQ6PnH1gFSKRJ2YJIsVQqmvTNz7tOeRZ/IwZ8SC9ZMCgzfiuJgKKgS4MsgKzUjPs3ngeJxVK73VY+wtywovbzPiBoTq8tbNRxukweYmf0v/y8bP6ka5ZZHtUZaLgciibXAwAUNhkIGQAG7AQAiPIo5sl9AADUnAYA4IzA2bB2G/azBIUeE6wsSYlCI4on1xgHWb6UKCMjIygoyP37EASRnp4u2BIxzXvqDiGkCFABQiaj/qPBQ/fZf8NWCg1vBM/8ActBHIP8WwOSACKLvioC7ABWCx4OLdSAAgDgTNh0HDgj1NbjDbdA6VKwNQxWbcpJatPl2+lzmnX93mrKv/7nojoNWmPMlwu3lEenE1Ov3UpQymQyO8MEyJh2HxRM7I55HigSA0nt/n3EipXH9vTPT2vv/sDXs/8kOLutr1e2zOB+cYbsEwhRgaW6rf1+85rtOQghT+UghHJycnieF8yW2a845hy8ZGcmzBRFCSNtAafTKYySMMaFGsN3sxZizFs1VwEQQuiLWZu3ezy19w2pcBRmTO5YoCe3nQkLDwspKChoU0dfq4KlbJilXLjrsem4aBd+ABBLpKlJT8vWGol5npKKzp69ZnHHFD4NQCPqgZoGuhyKGAqYB8CAi1cmvwahJCEFVo8CB2BQUegYxlgsVT6/vS2mWol9Q7o3ypz7y/bv504T1nQhhBISEty+nh7NdEJnwA1CgHkOAMLDI5W16+pwXSSpCKFNi9Z6YQDeve4LAAOiQBwKrBp41rXCUrhzCCkK6ANAQEomNIzGlbJhxw1QOAAAI0iYALNmztq5Z59MEVa90QiT/r5c4Q+AMIaYKHNsdNHFxkCRvMEm+fFgSGiwHAB6NExcMrfXjU4/Z7YArrg38XoOHwauafr4UTK9wYqxw2EvlMlU1/9cap1WYq1qdna2ezlfWk6ax/UE8JLdkhlLAhcGjho1iqZph8MhOBiFnlZQUFCU332JtA6Pkd2YgkhRanq+xfwWQQduqi6Bnc2q1G/QePmP3QGAZdm7d+8u3n3y20EJZluxlRZAgB7fu0ZRIgBQlatWp2y1BHfLcywKTWmD/D+EoEAQKwEXO1neDuwERABgdw0IAcbYZDQqVcVL8w0Wum6s9ezZs5GRkYKFE4ISMMYSsbhUpMlqLyG78OjyPO8kCKpx287+4VK9ozkAvP5LioKBoMGWWbJvgAE4oCJR4EDISII6AQAETjoMAIk9IegJEATJcc6yVT7ct+7nuLY93IEq7tGYiOYPXvan/OuuXTUSABwOx5kzp5d+d6Pbh1H5h7MTSmxK83rOHYJDG282b1yNIAhzwbXA6C7fz/r06PGLnTrEEQRht9tZlnUbr/j4+NODvPtD3g6U6xWv175dW6lUEgTh7t0rFIqde44O6daZ4xyY5xApClIpZn6/xz14fnOir4BKFb3g++IYaJ1OV7169c8CAlb+sX9Sj3hzyWhhWiwxGrTlqrbjOO74jlXKfmANAbgdhAY2ASRCyr7AW0Gk9DAbb49d7Rr34eK7nuOcCv8Se9IgBO3q5P6w9/7woeVYllUEhBr1+QRBiEX098t3LRhRQnMEQfDua+50Al9iLuE18A6QRIHDAJzZu2OKnUhUFiQTsO02Ks/glNMAcONb+GXmj6M+nWzSZcoVSqNeK5aUcBdTJD58NaBT78/LlXN1IkmSrFq1+qTPQo+cUNVa92VC39fdDCWxBcPPmx50bPuB1cZi3gGIbNKu24aRy6pWLs0wjKAcoaRCobj99Pbjfi7Xmxtv2R3pfeSk4+T85fPr1q0bHh5OkuSxY0dzMx+f2791dL89gCh91n6EqMUr91+f8E92ZGmzslLvT5Z5psjlcoZh7HZ7716djl0vjKuhKxr7AwDcvXEWAVflg4F+/vJVS3+5sFeBYlshv9YQVAl4KxAkiEv9K80hwn1lq8tWVqpeEwB43snzWCz1QyX3cLA7iIk9kg+c2Kq1RWXdX1S+/tdWc17fFoXzh5cYMSCE9HotEp5f8c/AHFByoAOAY4AtAFTyMvFmJK4CktqoalXsl4b3nbn88PJoYirGWB4Q/ezxnboNW3hGI/95N7hLv6mloou7qgRBCNvoDh7QeTtmAM94edz19zy+DN3jNp7c9ZnOYDHlnQXccu3ST3re/arlw1a1atUqVaqUwWC4f/9+ujX9hzmvmIvzlh0AOGjH/LHzRYxoxE8jbje+fXfMvQaDjMtWf4EQYTe8QIhSBsofvcjz3GXjDQl6ApLAmu3atfZMtFgsJEn6+/vbbLYnmdHdGhcYLMVNrZ2xVf5goIO1Xjl/2RQUDu1qItUAQGLgrYB5oAL+leYAwJ7vtigqMqlx0/YAYChMFkn8AMBmswrxbW4whr5xuTfvXIw35hU8mf7N531sLy2yYVk7AMIYm/U5/qrS3tlvDuaAoEESBazG1c8rkWsHeRvEmaGl9cFPZ1ctnzdu4nSpIsSoTbMzNlpUbLkN9lBPzQEUTwKZTCZlgCziFuR673/3GmzBIOkOj56ml4oOdtjyAIC12/hvTy84f01sFw/6bdDuwbudlZ3C8w5e5hWyAwCT3ARyWPrdUgCQZ4P1BbTq1FuXm8MY4gHg0rUnd99uoZCL2J0QEFrT00sCRSNtk8nEcVyDD6rm6Z5JRa6fWCyRiUQSf2U0xvyy7xfc0M1DwTVdFwDzII0s7rz8MxAJmHPLDgOKjCoFAIxVR5KuTezEYonQ03BjNLMLV9765rPqW44+yc43qQJL7OHA87zVahVOUec8EmQnAiMGAsE/vUNEwcAWuga8nmAWCBEK+ixnHDwq/6efXFG7+djDz3qkJDypXKOeW1s2lrJYLJ4T3zqdzh0Q3qJF3J/L31p2AHB5HvzY5sTqxcMApATlxzst5SoEXbVqNGHmVdNK7EP/Mq+WnSe12sOVZ8906U9NeecwYJqm1uy5nPupd7E3ocYTkaUsR5Kk50gbY8wWbTVMUiKZ2BXGAwC5WamR5RoHhMQAzxvFFcGvMmAnYA4kUQDuJ839C+x53hcSAAB43un28ptMRp7nAwICBSUF+PslJGXt3DDo8rnra5eOJAC6DNyw+ee+MomEIAiGsTEM45apOvdx+epdAEBG5mKO/OeyAwwiIbiSAIcWOBuUaMExrxrz0Bq9dtX8YSMmRcbEFWY/8OwbYIzsdrs7Al4gOztbcLM5nRydDpV3wvMBnvmvh6fg8EVQdtsxa1r/whdrQitPXrTkF93gfnv+fP2f+XrZNWpc2pqXDIAdTAFBSvUGi7q7d5k3RCKT1KmQkZyc7LkCzeFwZGVlkSQpkUiOnjjY+jNWbxEBAEXTSc8fVf6gN+acJEldNc8GIAA7QfrvOnNuEOFp6gSKLHEJQRMEYTDoJRJpqeiwrgPXbFg5yG2wrTbm+K5P2vXeeHDbxzqdK+7VDUm41oLb+HAEb9dt/wt4oAOB8gN7iQ4fAj7PWXvv7t+GjZhUt8WEE1uGFOZnh4S5nJZi0uzVSSUIQtjMAGN87ty5oT3KLo9Pc+e+FQUMy2NM0oGMKVHiFyGRiMsftaW4tmD9S0rIbsDOAcJihZ0DXEt/xQaIjChrtzME5UeQUgKhJ88y7k/yPOlNkWhhypiOeoN25+5jE8cPFxKNRmNeXp7Qzlos5pa1LTqzGCEMAJzTSdOiSnX72sxqp9PB8EEEyQAd+t9oDgA4m5fmEODMjNTQ0AixVMlzJZx/BEEEyEW9hq6ZPKY5SUp4vnjCy2Jz7PltQG5urkxawv2FEAoIiRHeMzjwX5i6l0A0SEqDPdvz+xu5GkopAIDDbqFoqU5T4JZd3Qr5V65cbd68mXDI83x2dragQn9/f63BgYNRyBVXPW/L3SWgIuR6o8WmfUBLQpcs29B/4yC37Hrv742sSHCJuEUFbtnVfFiz867OU6dO9fPzS09Pj5waaY2xrhuzzmmEz79dosvNsmrvAwBNU5t33PDYJvUtqLYZnLU5iuTC5Onp6emCXwcVbdtLkuTW7YdmfJRvKYroNJuMVNFkC8Y8QQHQIf+Z5gCBa8+yYtRclUsXjn9Qr0lgSAWWcTmuBVSBfsMnbR87onnt6uUVkW31GYeEdJPJGBAQSFHU3B9Oz5zaXuFXvJIcY4gq30R4/9bBtK+HA1EosIwfML8AACAASURBVIXuY4SM2X7dAYDjWLFUyTLF27RViLSsO3qrbNkydrtdUJtgrSmKOnr0eIPQ3QoxVRQ59dYYysLPc04N7N3MadcAgFQiDbgKANDhRIf61+uPHj06JCQkMzNTJpOVmlZq6ZKlwlkUxVGfz/h88eLFUBQ7ExQUNGHCBIvFEjhDGf9wIbtZT1Byq+YeQckKNAa6jKvY2xJ+FqyVWADUqGLqzYu/5xoiW8Y1VKlUer0+/llCQV7a5N7pbs0BAEEQjFXLWDQAMOubsUAd+u80B4BZ4L2tXbxtZN2E1gBA0VKKIrWFuf6BQQAg95P0G/nH6b3j1Fojx7EASFgpByD4SnQqVdDWn0cNGfPr52PiwkJc3r6UFw+iq5ScAP9vQQSIw4CzgsMAiEDgVHOVKZp2OhwYc04PHfE8jO6UlpO6Zuf5kN492qlUKozx8ZMXnfb8fk3uJSdyDMt3bhlxFIp3nHhz7IGgN5oBgKBkCJFisdjOQIhacaLjCSjydZQrV06j0YwbN040U7Rg/gIAoGrdrdW5c2ePeiAwMFAkEuXn5w8ZPPiLcwstFjNBKYTujkQievMQTi9EHuajYUwqRaZcf6yx2+0isahShLlzDaMw/SqAEJGXnQYYC3enV5/pTUEkYAyuBhFBUU8L4BUtLAAAUey4wZgvzE33DwwS0eThUw8WzmxfoDEQCIlkpRCiwaPFRAgZDAaOkx8+vL99u14//dDT4eDEUhlJUsKPxtis/1HH7lWQMiAkwBYAoCx7e4VKosvPrdV87PXjcz1LYYBwpW3B8MSdl5ysnQGADjXVwJntTonDzgACwCDRAeN6xszb8eCxy+hyDoMdBQwa0qvM5zrYUlyAIAiMsb+/f5cuXdS/qH8Z/Qs14s6IuLFxxUUAtFqtSCQiSdJms9Vv9wUAWDS3CFpOIPhu4c5z3vMcb4rcjyRJiuNczhGF3K9d3Xy3V9NTcwCAEDIadMKcJklRtpIrBv4ORIJDD8CB01LCyyqJ8nB9kcC9FI1E0ED5M06KIAjGqqvWaHjq02NisXjzrgsyiaRM6TDOYQwoPxgBIgix1xyX8EeZLfZDR/d/Mqzv6kWDL58/LRFLSUqCee7k4d2pztkESvU85b8EESCJAocO/g9t3xkYVdG2fc2csi2bnpDQe28qCKiASLMgzU6TpgKKgCJWRH1UBBFFQZCmqIiigKKIdAQEBEVQegnpPbvZvufsOTPfj7PZbJYg+jzvd/GHzM7p19xzz92GycbqXjLZqCCIoqRp1TKPEJS7Tf06Fxp/UqiOSkaIyJhOBaFl4/gmPxadGRnp/i8gm2E2S8FgiGkBJsa1ad/NI9Zw8CiKYqhSZrO5o94xpSJFNMJQbTabsT9GeXm5IAiiKOq6LooiEewAiCE2CDHJIvDfagFRIITMeXtTTr7SsU29Z6YOUNUrbKEAgDqNugGwmC0V5f+AdkSAWg6mhMVYNOcIqWFu5VeEIXEGKZnC42IZRkPrLiNOHV79xVfbyipCL0wfqKvO9DZP6qobAGraHVEljF0FWxIbDBsy7L6lKzbe0C6dcY0zPT4+Ye3nG4CXYg65OhgCBaBmELHaniinAAScxyyxq8F1iPEQ6wEFRgOp2pcnBrIsigKdt2jzX2fLPl40wlHpM67yvxijflsEu9kSDIa8ZYcSGw412zLS0yy6Ht6tz+FwRBRKXdebNm06bsU4EQDn3OPxGHVGjHstKioKJ99bRBDKND8AxrjP9z9xzut2WGzhIDbG0LUB6Xxz7yef+3jU/bd0bt/0yndqtiYCACF6rKGjNgSNcUwAAqYwfwmNbwymA4Bc7dEHALWs5uk4zGHVIZcPEwSBMeZzFTZs1fe7fd8t+M84VdVSW07SVdff3ASllDEWdJ8fMeqR66/7sm+P+qlNhgGgVFDKHdSWF3vAVUEhp0DzgKvV7yNoaF0EIDDVfJZo/K3uK4qCJIpTZq3UNCx4b9kjEycBKCnIprSGN/m/Aav5NjlIVRgiqsYkISQvL8/4DydcNCrqR7vwBEEwaisRQnRdp1RWvZcN++S/ipC5Eh6XM0I7TVOHTZzR4ca+w+8f9+jDo1Z+duDVZ4c3aZTicoc35QFwJRGvilBV3gBnzFsA6DS+aZhztZykJnuiKuSd1x6c99ZjTz39Cuesw02PsOXfaxoDGAHhV+dcBIr7vK5d361LyomzjntvbA7g6JEDNDURV0zpfwfBaqwSopqiXohSDDEOgi32KQwYqnDNn8xmucLhfen1r0wWccE7y1LTM/74ZWvAD0GU/D7Pf6k318Qvv51v0SQ8UTRtYP9xX3afPtWnpZSWlpYqiiKK4qFDh5bOWiqelk4bEbNGRF4gEDBKhwKQZXnK6HYglOl+KsYBUGv4ga4Cj4QTiQBwyY7TiaRC5ulBdKoUSHZ0L8549773vPvC6LFPzX9v8ZKEhKTJj9732zHHorlD6mZUh/WGO8f8HQOmgIUAgAjMkw2AxjerVr/EuEjH2iGnR12BVlaUGOOQVamhuuY3ag9eE4wFfT7PwNsHX/pzkz2pASXs2w3rTqvjYvtdE+Z0KDEiOQICzQfNA7lOTWoCgKOsiKBGo9VimjxzJWN4aNToQXffr6qKyWz94cuPABBA1zTDSkUIrkjv+qfQTbicUxKhndls+uuPA4Q8zDk33mRpaamRwKYoSkAOKCZFXPnEyvK15U83eppSatRqFUWRc56env7h0mUzxrc3W8O+cF3/2/v6uBl5rRHieoFYiLVG/U0CYDd8tv4et7NuoxZaSAXAODyVZR27dQt43Za4eJfL+dbbH8XZE06fPD7uiVnrVo4Pj9trIlQBFuYHc10Alai9UTXnzHWuxdkaIND/ykvdv2/Hzbf0ZUwTBALAHBeOF/obqKoiihIhIhFMANLqddRCgUAwcDzLe1EbSUisjfBaEGCuV6U2RINUjRAaVhUs9cJDDgAgCpKu60ZMZSikv/fR9zt2VJ7O+9VZmAdAVZWk1LovTrhtyIh+P7+0s7wkP2IZPZ3lOv1m5DRVWNISVcm/mHquxk9RKG8PfBv5iysqa5X+V3Z2tiHeIiom53zjxo3z35oPw1y89d6tdB0doAy48cYbGWOyLB89evT8+fPz3pr31MXq0jG//n6+NiUVAEi7uwnthPReYG6AQHfH9gACRtXgmvNn3xEvLXhi2JOvLff7vVwPej3uho2azp791JARC3t1t9+XkWX0JfwqDGRB6CoIBaHMdRFUIlJctYpDxH/AuVh96ARe/OLzaQPuutfnciYnxgH8mtK2GhzG1ZmQBODJSaNPs5f/PecAAFwHaMztcc0HwRRVN5fDnwNTnYieEJ+a7iwpAkDABw77ePFHry76bJAz5zIAEEqpvPqdqfUaJapqSJZRWpxbdR4IlKDYSua3AYBvUwAdoMTWHTScWMPf/QlgGOriC3+PHFUbiKqqHa+/dfmPH3Wr171Hjx4+n48QYrfbDx8+PO+teUYnEYBiUjaO3bgRG7v+2rXrL13Xj1lfPr6WeJXDv52rhXZ76pAJHUjaFDAfmOcq7AAAQqkoSqUFOclpmahaDrrys+xxvl9+eLlJs4bGpCaaUm7oeuuOXZvi4+PvHDhgpulQjx6962RaUVLzdAZUB4gAEObNA5XANGJKDhNFjIdgje1/JWrMsABQyVpmqzeuXDLvoVGPVrp8APmbh4oBh8ZZCEBKajohxMcS8tSe+K9VdlM6NDf06lU8Ea08WMFCHiInEFMSgPD6nYiQUwCAUL/fP27MmNvv6HP02Hu6HnLlFThzN4IzgMQnJv555PeRj97ldns4B6WCQWuTRPf8UoQta4mUCHCkhK4cjSRlMsBxwEzabOOhXH5uM4SrjUYuCOJHLy39CMtTK1KH7Rx2vvX5U41OlY+uJlWUlQE42u3o0W6x2UpcV8zxrVR/wZUXIR3ugjSMpCSB+UDEqiiJ2rEj9PVTcc+4XQ7ZbLHHJ4U/JZEGDLrtm7XfySZT3XoZAPSQuzJvM8Adurp23Sd7f95318DBnTrVtnwjojHKueIAZ2A6jasf5pAUD/oPOAdcSSkK9VBwceqmZqPHPh4IagAU32VbWrcre0ZDEEQAVLBwzk0mc0gLzX39mR3atwiVQYgtDfGPwSHaQURo1bMHMaeAUB7ycNVF7U3Cz8s1KCWAfFfvHsMfuGfjd9+6y45XZH9j3DMhAogQnxC38M0VL7052ef1u1w1piNFZTIBle1VQWUagCsVR4CAK4i7lQDo3An+o/zSNVIGy1PKVzyxIrb1n0SgcK5TKR4oYKzGYo50uQOsFRGSwHWY0kGkGLERgxBPXLfl8l296xfmXGjVIZyNy3mIs9CEKaPffHnJ40+PNnICDBMGEUzuwh03tE34cMV7z82YXlNRBoAqMUB4yAeAmOzVboZ/yjlAKYG5bsydU1J4KW7i/HmvG+t7KlgFKVEPVVdsvRKCIDCmx6XdnJScMv+tpcuWv7N40UpmJoQIUEpgqhN7wD+HYEHIhaj1JjElgYCrXua6SBObR2xuDeSvn33+pUYp5aUX1xEqA5QzhVATZwqIdPL4GUEwuys9uQUFMavXgKIXoBOkqmxNQgECpQI8gFreOwAQcwdO40kzXJN5teLatIugQd3k3MKqUXIgDQ6FpNwEAHI6SNgRFAah0IM1nFGADquxpYzZYqNClZqpK1Syu1xuixlWmzU3J8eohGqxWC0WC2OMhyoldc+DD/X/4SuhhouJUCjloAIECVwHodXX/1ffuJYxDYCcVhd3OWaOT4mTJSGoMNWXI0jxV+kMAIYFikp2Yo27fBltb3pYSl1BXGHbFagUrfj/a8jJCFWdCgBA5GSueiHIzJVFTInElMS4van5SIeGzSrdGqEywEVTmmxtxKGDCKJ2Zs2KvVNmDDKZZfWK4mjbDxbI0Y9mKMdyIkgKQs5aPDoAQInciFu6kOaSkUwEIDwACAlFJR/WimvQLtrSPW5E331vrTL+T0Z3IOnPgPlhzoy1UhIBShG4DlMN9y2BmpMbtA+Q3N5QUU4WrXrOlCYjSs8unjrr0W3f7+7W83pjE0tFCfr9Prs9XhRFUY7v2SWh2Yb1WdpQVCtKHJQA4J4cgw3EWhfMCDAnfy93AY4aMyYz/mTcAhgG6gpK9p8Vbpp9X+dFy795dMwAZ+43ddrO1NXqsI5oGFZ4zjRKpaN7t77w0m0bVz29K7iM80rOUgEBAQ81m69xUwZUBwiFnFLD/0ZlcD3avghwItu56gEVechLzMlx9FKifqDS3RAAZ5oc10yQ4hgLAuBczc8vat8pNaNe+umz5w3ORWVSQ/WHtgeOUHq2usmA4fwgEkLOmlc3QImlCw+elKuyIiVrJjgS4hPWfLrm7+uhX4N2Lzw7ed6C5eb4Fn7HH0EFNmPILWtBMl+GIIPba3KOIFQOFkKMGk4EBIuIKf249NZPB964qXN6MOjVNVZUVJCWVkdTKlKajHDkfvPHbxfi4m0t2zUzoicEQfD7faIo2Ww2TedtQu8qQmYBC4cSQfOE5T8RAA2chTnH2bU4h+iQIQapv2mimRfaqUfnqFOvHhFoSV4eBQKcdOg0Yc2aZd9v+23w7V3LLyxPqD+ECrEWc8653R4PIL7uQJNJfuXlOVsO5vdsU//+emu4CXKctVmz1ieOHTMJAFDBmm9TvqekRhp2DcgpCDkRLAQYOIE5M9zTXA9qcY0ZRU7kQSeoCIB4Lw5q8NzSdx5zVnolSz1BNtZVYbhLf/902Xcvz5vqrKiMyJEEOwwVghCU6o0oPVNzKEZBsEC0IZBfG/M0kvSQ8OmxMff3Li6ttCS2BRgRqMtRu7czAtGeh9vHgxB4vLBZ4W6Gwy+AcXgbA4Ae3mrSDq4TQmw22VSmqfObo64YK+RgpMNECxICPQDNBcDQuvK1e4tznytpYK+TYmnTPGnZh2/PnrMAAAdPrD/kudfin3rso/lLupSVlladAZoWqqx0JiYmrVr8yCOPzcqT8inJZjwhnp3snfCi7q+ABACU4Ff2uo9lBoRmV3l5USACuM6QeF/cgDr1M954aylQvd9BBIIg/PbbYa+H/fzL2UfG9C8prXQX/pjYcHhMN0mSjW/pK9n91PQvKcX6lS9t/ukbSgUWdpNUg1I6940hl06e/xE/BhFrFQcAcEiJCBaBUBBAKQY1MbFxCv21b8IEj7dax/sTz+fbByBwGiw0MG32vFdGOSu9srUhleKjOUeouOajr6c/P9bldJ+/eCmSQtGuebzXH+IcP+7L26nsjvSvHZxBSoBWI7M/DGIauC6n4obqQhNHDu9PrQcAtiIIKlqtR6NtCAQBwGrByXE4MwKipwF2L0Kn0fj+iyeWfbK90uW7aQH9+WAeBRISUKJUcs4BRqjMGH9u2vA/52w9Ed8nco2aCM9WACDGI+QAq5rjBRsASgoPalOtZ1befoulTdOE3y9Uy1oimLwe/5hHbvpp854bureLtAMghDDGRFFw+pCYvKuSdX3A0tbpRtvmXd946yujT1lZycqPFm7f+ntJ+szzoXsp/n60cSY172ebOPPZ11q36RgJiomBruvXXdf1i6++uXfYvR+v3XFn/64AdeZsSGk6KrqbzWYzJtnLuWVef+iZZ59r1/46KphDwQpViZqUOY9Laqlr/meeff34iV/dr9+53XyU4oq0MwNSHAw/OAQrigexQa27dDRbuj//ykI96AcAzp9/dkrumbkb6baQ+2y8STHUKsGUzKuM5wa0kOFPZ5Vud4RzokgVVQeQkmgqKFH/l/QiznSfH6GQDkCQkwk0znlRN/TtAkLQukViUqJNbi9OHN0vNTm++7fvGjVeRQAVbXFkM26/c/FnH03RAoVEMI15QAaQlGjbsuNYty73PT1z1KRJt10+uT85Ma7VGdefSYOqfaARxDhzqAytagRwHYIFnAH0ovZIC+due5wu+MmxYxdZZNs4rpviGrTvJJ88cZHUDPwH4PG4CSFPTO4xZb1/FG376YbdlZUOAO6qrY5Nsunxqc9PeYLHx9vHDO++TjtFUUMHrwl2j9Rjziuv1G/Q4mqci8aufT8PvK13uzYNG9RNj3GcJyQkGouJQFB9672fxo0f2aJZg6xjH4gmO42K3jNQlrtbDVQ06jCuyw29tu6886GhXddrJylq0xcFO/SgBZ4xqWNUa+NFH2w2grGdJdV+i+dfnJuUWW/EkMFaskuWRHBwpsRwjlBTHL00acbDqqo6HNUvhACD+zT0B7XVm87vUlcR6Z9wrrZZRDBDTOvaLhOApvp37/z+nfkrundLeX3gwIa3pVFKAEiSpKpqSAsOH7Pq9/3h48L099bD8S2wa/0FyawpFUwLuPI3O52sR5eWWze2+OKbPf36fb5myThdZxUeMEGNfaWExior0c9Pxcgin8B9KPhmXtETSfHyrd1TUpq0dOZcNH6yJl/nyF5/55BbU9JSCvLzr3RR6zq70zq598AhBueuBCHE4/E+PGWasKLd5/7TlNTejfH0+s2atGhzfcBboxjl1eCsKOvZq/OcudvXfDiGc27sB2kgEkLx0psbx44fdfONLUqytsiWKkvEFZAtKQXnvhEla+OOjzZv17LbmelH1VdiO4XBu5rnt+p2x7SZzzvLq7WOaDiLCr7YuGn8iHsa1JU4QGPN45yrhUuXfj5i7H1Z2TkRUUcIcvKdCbKaX+xjHi2gt6ISif18MSACQs7YLHHBBCnRgqI7+9+QkZ745nu/Korz1Rf6t2vTMBhUZUkqKCrmnFe6XMlJttff2Z0ztvrQGlH+U0fXfeOtDzVNAzgVzJricBduByGyLKmqNnnmZ0vmjyp3uLu/9iK11jQHEAGB/Gr7AmegUpQzPgFCdZIBIA0l3cY/2BzAhbIGD497PNxMSLDybMh3oay0XJKFGIEXH5/w6+/nP1z+674/DjmLwlFlVwxBDkCS5PfeefXrY61OhiZf0QEA7CTv4meCUIs1pJazGUhq1KxP5+tat7K/MOOexMZjS88u2rfnxMC7b1OC4VnysRmfrVgy01l29h8VAyCEELFpx4cfGzn4y9CB2F8BgLCgc2q7qfMWfBj018jquBI2W9yPG97o1K4xleJla8NIO6GmyqK9b7/27fP/GZmTl1fdTsi7y36ePqbVknUXj+qvFQbaAgLkqw4VwPi+eTWWFIIZYhIHv0Get2dJg7FPLGvZPO3JR+4KBFVCiD8QyMsvMIhuMolr1h36dVDgr6i1bQ3+nrEWvjrnqZdefptzMF2hoi2p0b2chSrzvuOcv/fGgzNe+rx7lyad4/7zpz7rb4xYIEYuYAQxIynkktvkF1fWTbd+smbP+Eem60YQLOeW5E5+x9E1y394+qWHK2tu42ygXgNBj3wGQn2l+zUj9BIgVLJn9qVUDoXUB0dMOH98yp/8HUouRY6NoBd7SKQbatKa6CFf4cVvI+5OKkh1WwwHwmLAkX3x+y3fDR86RFFD3tJfog4EgLTU+LEPXV9Zfi6WcwRM5wAICQd2h9s55zzkq7x8c/87vthAqIVHLhQ+TCm1C4Wv/WfBNTkHQBAEsaYdzoAWLPj917MPjrkpryA/un3XvjOZ6fKZrEqbIOUrD1GcAFeMZVZ0txrQ/TU4x3WIiQADaB22fcRj6nPTBjWqn+IPKHn5BaqmEVTvB/bX6UKntwbnEEO7nR/h4vasyhlT5r39vlEtmnMdhCY2HEapyZHz1aI3RweC6sXTX52omEBMKWETBgAwEBHXVks544lA0qnQo5ZfZg++hTw7qdGCeW/MnvO61+sGwPWgvU6frt1P/bhpx4BBvb3e2JeeWa+hFgqBUMWT5Xf8Hj3fcaa68jYDoERPzuj7+HNvHHvzpTOhcdUHG91Am7fIiOIc8VVeLMvdQwUZAIdmaJZMV3JPfaprgczmg63xTZgeDGmhocPvePnNL956ZZKxFYIBUaQr1uzpf2tLo2C+AUppSVlFjJ7AGMtIT43My8XZuwb2Su+6bfbv/scBVFsGCOEQbpae5vzzcAs4oeaQPw8gnIfM8a30UA31IK+gvH2bajkHgBDxwqlf/QFvq/Y9LlysHnsbfvhdVdTuHdMOHC78KbghVdhVHmxLaTHUckhXyaQgApQKRJRaakHVYrmjtMRMgisXT3Z7Apeyc42adJEdfACoIW2denb/FYkQNWdrIHsA1nUsmV3uslnjDT+jAcaU5CYjKy6uMpsssj3V7nB4FQZTWph5nMOcgWABYucpAIBaDlsTxqRbTRPjg388NGYUJUKnznNFUdy3b3e7duYpj01YuGixEfgvWTJ79e2x5J3PPG4/Y5pQNWgMJCenaLpembsJQDTnopGVU8gurzGbpY7KrjM0lnYA0aryNggRsk4sFQQzFWS/P+D2+QkIIdAZS4yPi7NaIVpKs3cQKjVo8xCAUaMf3bVjh655oy/t8wXXbjh9W8/mkRYARSXlQpUnJgJKaXFpeZ20FIP0lNKS4nyNV3lsoyQlZ8n1UsNGAKYHHZfXiabqSdBXfpTp/tTmE5kWHpYOZ6xpg4UKV3+4b9VXs8pLwgUYGOOMaXFWU0r91Aofhg/vdl3urKCiAThxIudn7zPFuEraveaq5hzXUVXklIUSO9vW3tr3eofTm1tVHjkaWdllW3ed2b8nphm4knYA/Bl4eOCjq9Z8lJSYHD1emeZLbPyAK2/z268+kDNtwTbnO0QpqXZFcB1EqqVCDAAqQ3V0s7772ow7ew5c5ijIiUxGQ4c9IIjitm2b5s99/iljC1RCdV0dOKjn3u377xjaP1iz8i8BBeeMqbSm5y0auq4TQiRRUHSAsiiRHEZE0LnK/zLOE9I0f1CJTFWUUp8/6PL4MtJSAHCuhZRKSU7Qdb1vv75VRwMA59zrU+7sF45wNFpKy51Xcs4ApVRRVVmSAJSUVdisscZnAz3t027uNQQAFa2VeZuiOWeACtaKi6uTGz9ohNaxGqVEAc4DnuLe/RrmZueXVtX98PmVJauOvPXy7ZWucEhL+zb1jP8kJVqDW9/+FhMIaok8QhW5AcDSIDwXc6Wp+L49ObH/rZ38gWB0dLqBpETrT3vOXa2idS20A/DzcTzV+7G589/LjCqkCoCA2FJuLK84cn2zytxTn50J3k9CjmoXspwCPRAdLhEB08ROqb+17/CYszAvRgHSNe2ddz8pKsxb8dG7k6bM1HVdNKW3amfd8cP+P4+dbt66UbSDzuOpVN2nIpzLKyhkjGmaJgiUUKFZo4YcMIaKxxu8qU+TjfvrUlIcOTwGzoJDRJCclW7DKh4DURBKK5zpKUngvOjid6kN+ljjG40aM5m7tkWki8UsPz3n2y+XjyotcwMghJQ7Kq/GOQMutzcjLYVxfuVSPQKJ+Pr0u0tXK5053xAqESC/qIgxFgpplFJBEARK62VmOLLXpTSfACA+vkaQi+a/sPTdtVOfedjpcvl9flkWP1l3KBAMvf5C/wjnotGscdrzsxrISzp97d8V+5seqQeqw1K/inNaM6xvGlrxynOPuj3+S1nZ0VWLDcye+9OPsTpwNWqnHQi+3wNy2/Q1n2+KMbWb7I19Fb8++cidp2asOo+hjInQ3BCrDO6CBeBhi52cZuRvAugRN+c/byypPgtAqMQ0X8TOVLdeoz/+OLlg/pwXZ7+FjD7OnK8feHjQ6qU/tO3YMjrrLqiEtGAxAIHScxcvGYwkhDDGwbTT5y8kxleb/jnnUaKtujliGmVMFQSpVs4ZoISUOyptVovFbCrL3V2v5T1yXOqilT89dM8tRofi0sqMVOr3h9ez/2RPVca4KAp5hSXRw+lKEEI9xTsJlQAUlpQoStWcyxhjLATkFxbVq5vhrzgWZ+1mtZiqn5SIXq/bbKacMVUNEUJWfv6LxSSOGNkjEAhvi4qaZeYBuD3BgFOBidZU0Ak0Dzgg2iDGh7VPzqGW3Ri/Yvzj/d0eP2PsSs4lJ9r+dqPp+AAAIABJREFUWBjTVgNXoR3ABeTfC7PZ7K+5mGK6As78AbXnTS1CRyb95FkJPQApEZxxCByEivZwBgqhkNOhlHBCTMRji4uLFBaloq0iay0Bjyg0nGkfLnxs0tQPnnx87Nz5HxIiZjbIpJTXrZeRfTkn8oI8bj/X3IIgnLtw8crPJgqCx+uNSBEqUIP0MRCj1mSaVmNQWcwypcTvV2w2EwCvTwHg8fpsFjMDzTu7rmnnxyMlAQDIkli/bqLRDQjnxxuIs5n8AdVilgF4fdVloAgh5U6XcfOUEJEyUAl6MMbjqYd8xrJaFEWfz3/lwyqqCsDv/IM06pmUYKtiHVc85zeu+75F66aiKDocjqTEOFVVn5821Gq1cF5dYhTApcvZ0RK3522NNx9IpaTKRkgolDJwzs0NOVDt+FFLOE9KSItr06J+UAkFahaSAkAp2bLzz6L3Yppr4Kq0A/D7VNx7yx2frv0mpt2e0ddTsvfeu286cWIN94AAzOfJtP+VTM4ICHrRIEseCrWUAiAUpjo8QDPYycgGRQApPbdYlJOjOUGoWFlRtPL98dNe+DTObmcZvd1Fe+4b2be4qFSS5IgvweEoE0Xx/OkzV34GA5H3aI8z79ubBVrLjH/ubPW06/FVD6rSMteGH04gAFGApqHMj9kzexm2D39QMZtkQTB7yk863V5JEgBQSj5YscVsDo91SiljzBC9Vov86us77FboGnRg5MguddLsakg3joqIrvNZJce0lZBUyCJCDnAO3QeAEk137RclE4DikqvKxZzc/KZNGjtyvkxOtnOAcEYFq93GHOXBEeNucjgr01MT3lm6+6OFkx1O75XqV5uWLU6fC1f9BqCqeg1Rp7mYntTCvk3CTpm43bxxvnabxiiH3M3+9pJ3Hrt8uVgUhOKScHVrA5xzURQO/xYxrNaOv6MdgB8OYNO7nw0ZOiLaKSTICYKUoIdcc18dV/jMjERL4IFBbe/s36G0TAUoIYV10tbu+eXs+i93rPFepKQYlnohzZjyAMBfcVS8inGy3OGePXPo6Afv6tr9luED6mbWz3jzpbVPPjuU0PCDuVyMUso5J4S4vYEvvj560P8qSKiP7fWevVo3bZwWWb1fzikXTQL1XgZnkTRYAATsiGlVUmqas7xMNCXCH9a4kxOtDy4f5WDtQDk4IAB2/YNlvZ+eemtIYy6311YnVWfMUXh4/y8VrzwTLlFY4fTNnX2/zxcE4HC6CCH2OPOCJfvO60P+suwDp0ag1s6vvL1Dtz/7VB9VrRauoZC+86c/OQKAAK6FFRUpAcBO9Zt5797w4qzRkiRWOJySJImUzn9/b6H1oTK90/XywpCndOYTvRnn5RWOBmYpNdnOuWayt6Tq8ddnrx4/ZTjA9/5y4sixktWLJhWW1GIBBaCGQq2aN7uQddn4s33ruhm//1TKugDcDO+ojDsmTRzeuGF6pSsASLJckmD/bsTYJZ64Dv07uy9fThdF8cy5cBhVBKXlni+OHd9yILqtFlyDdgA+XvXd+KkvOAvyohupaNNDLlXVZDW3XftGXTo3LC0LB99yzotLK1s3z+javV3FgR4/KpuiDwRArr4INfDBW2OnvrBa4q0G396lV9+mZ/86f0OPzoQQs0nWGaggUEpNJmnt6oMblJOUZYGF1jp3erb0mzWzbjAYlotuT+Csdh8AEIpQJaTq8gjl2g33D7n+yw07S62p8ZrirHQD+OXIJZUn1NQFhT/FF77a9N7wu7tUtxESs2o0pmlKqapplJAtO/4q0rqe8E6kpmoR5WUt7FbUdLvg+21/5vP2qC3VgkIpctfIs3xv2d690ha/mkoR+t4/MEE6vWvf9L692tQUhHzfrt+ogJTUJErw9easr1dPKCiuUQs6BjpjsiypagjA+axSJ28JwEKct4UGvzHnUbc3UOkKzwaqqpVVuN9bMOqZOZ8//shkh8NbXu6IEcOE4Ktvj/94ldVrNK5Nu5wluPWG7nuPHoxyScFep3fF5U8lydy6ZerE0X1iNCQAhGDYoG7H/1wnlCUwuEOWBFmWI7pdBJUul8NpBLnAarVkpKdTSn0B5ZVZ9z/5/Jcj7rnlzqEDX5y29OY+3TVNS09LUEPhibms3OMhjSmphJQKpZAS1x/CzHnvvzPt0Z4AzCZp89YzPn9niBRgYAq4HgmBpsQrQF63dvmdgx7M/nOpITsDwZCb3RCz7M3Wh5aUvpmTV9GoQYo/qJhkCcDffEVJFC6cK/vF/SWl5VA8kNNAKMABTggUVYsIY0kUiks9u9U1tPbUbU5FyR5nCSohzrlZFn1iy6CaSGHYY30u1jivwAGgtKy8UYOwLCdE+vP4uRFjB6mqmpVdsn71eH9ANZSEsvIKt8djzLOCIDSoV+/K5TZjTGEtQLy38VuWvT/e4w1c+aCEkOQk2wfLfxzzQB+nqzJmMb5h8+/+DuCxJ64F16ZdXm/Qd/jrzz8zZeq0yGWY7ren3TT58Sc/fHuir2odFwNFCb3+0gg2s8NqxXlZH+5yOS0WGwjhVbY9fyDgcFaiSiELBIKXc3JVVW3dsoXZJM2bM/zukSu+XDHm9iGd1676+oGHh7VpWd/QxASBfvX1ke2uLdTCQQBTBpSSvOCwrvICADab/NbCneeVB7KDN4JdognNwXWo5eAa5DRQE8C/CvxBvrtxxKiJ5riGqaS4tMJpjzMlCIc9rHHV7QMAhbpJPRzc1H3aEz2j22sFAc5cLF7nPERpLgCAQy0FABaCOZNzmGTRCBCqkxb/7Ks//Eh/vQrnAPAfgtvHP971s48mpyQn/Xzo9F51dbUkVssp170+JklCRGOmgiUUKOlxS8eUtOQzF/KXf7J74eujCYEkiueqvBTGe2aMZefmNm3SOJoynPNDe3OoqXSgNGjOU8MU9aoh+G++NHLo6OWDbw8LiwjqpMWfbuTbOz+67aq4Nu0A5PTD4S8OPJ/wittdHaUj2xpIkhC9RrsS/oAqpac1Kpn3lzrtlwOL+vW/C1ERHAWFRTGaAQBZljUtJIpSRnpC186pVot8U+8bD+w5rqohURCMJyWEGBVaECwGESDGQbQZ23pxzt98Z+eF0F3nfd0AAioybw611WfcTokTIScEK0Q7IRXrvBfKb8rYfnj/8Z/nZ6SmpCfH0Z0KEGte5oSW2+9IT4FS24eo9rIyRgg5dPgMpdkxZwCVMvSvPIGwmExMsL7+3o6grTsNqIhaVDGeSEn166VQysz9pr205oXpwxrWTaHQdJgAgGtgIRC6M7DsRfNGvz+8kCREtpqcGfXqiqLw8dp9qxY95vL4NV2/cCnrypdMCLGYTEFFAWBUrkhMsOqJbTOVo4LiTE9LuHL6ikBR1AF9GjC9hqwxyeIb724/VF2u8xr4R7QDcGQ69u/b3vm68A7mAABOqHQl5wghhrk/pGkAnp7c3//iW59h0ndff9Kv/10ADFuUzlj067DHmSklHm+QMX45N791i+aKoi34z8jnX/vs6ceHJCSJilItGPx+BRwACU9hmgdcB1I4w9mLxcW861n37Yjk+3AOQrpa3j7qfY8KZ6H7wXVIiZRcPJ684o5ePZcvneioKPX4lKHihI+V2HApArVA63n81Lo2LWtYzgFwxhlDeFsjSgBU+qRYzgEAGpt+GDG0k6rqVqs8Z/5PQcvNu/0roi/EQYZZu34b2BkdEXQ4+L6VTHx1/ldvvXwPvjGEHYdaZlidTMRdc75n2Vl59RrU37rjt8yMOI8vCEIuX84WRJEQEh9nBoHPr0b4VFBcnJKUJAqCPxgUKM0vdP6qPNZZenfRG6MjfSRJAufGd4wgpOk3Xt8i2gENoKDIGQiqSrX+fA38U9qVdcSCyfO//Pq7KDtILQhpWmlZmc8fIEDjBg0kWUpJtis2MS241avJ8fGJbnelLa170H0+cgjn/PBvWUf/KOAh1G1g79erZVKi7cz5C21atsgvqNh30HH/0PKHHx0R4/Jz6XaQKHc4EerJ35js2LYv72jFUyA1xiLz5PjM6c2tC7OUOwACpkCtgKlOBWt9JG7VpCcnNG+R/uQjtzp1xNGTfl43+lgA+dqQ0vLlbVrGNIMDggBuxJiAnDlfpCE6visC3hQHM9N7CyJd+dmB49qHBY42VLgEOQVVBm0bKboyvpcSx+7AijrKyUenPyBKI0Iag+aNWDoBHDmW1bRRimHAE4XQ1m8PTp814pvNf7zznwc455ezcwyP9obv/yjIc4MjNdMycdQtPp8CgEXxxmyWPvn0UBlblqJNo0IvzrgoCHmFhW63h1BaPzPDav27BFDOsXbDiS27Y9v/Bv+UdgC2/IJ7xg/pLLV87oUrq2UAQElpmc/vB2BIu7zCQgAtmjb9aOEjYx6Z/H1gw33Dhw6/9667Bz/I9aAoWhhjlNI9B84vP/O6g7WBAF5Il6+r81BCyynjbr1wKctqsez+dvKoScvnzr5nz7a9D0+4L3ItDjGmVkxhqNt6x0bmuRzDOQAA6UDWtuzcYvnv9cu0DgAB1xAsAFCJxJ/IJlxO+fAl3t90aAAZuymwi4ABPDIDUuI6vC/77gHXGYHgEXDORYFELLCnzuZtL32FsTwARI4nslHGQbzeutInZfZ/7wkOamxoTIkDLFI+DAC93XKvRMEVBzF0BUEG4+AhipIySNvxDdM5hT+ac2DBkMbMZvOyj7ePH9n31IlzCcmm7rcv2fPtI16fcjHrsiyLu/adv3iuYJ1royFEWY7VsfCOp568TVG0upkZoVAov7DIYpY/XLbry8BxjvRxE/uD43JOrjGnGe6H4tIyi9mSmVGdIR+9HCGELF657/t9Nb7FNfEvaAdg+2oI3c/HJya7q+J7jWWg8X9/IDwPmkyiJAqG7b6wpDg5uXlIBwfZ7ltMPhublt60Vf0Urvsy6tQpLStT1JAZZZw1J+AEALtUHOzwwcrd0yf183r9bq9y14B2L7yxvoEZ9uSE5CRk55VxwEqd4GaQatH792WpfX4MHj4k98yra8p+oKaavOQMahnjbFtgIYOZCqUgMkABBt1nqG9EMnI3dQCEwDD8AtVRdGaTWO4I8qpVHFfdIJTISeDqb94nj9VmtY7ARvyzX531wfsL4ah6BD16yc8BQiM6AyFgjLMg0yubN0lLTEjQdd1kkn749uCb702v0/iw2xvMyc0HyPa957OyXOscB6lQxW9ub9EyUdMY5zwUCpnNZl1XP1y9/8vAn5R6O+GxRvXTjAUvIUSWBFkWPV6FEHi8noZSPWOiM8nSxu+PPDqmR/icwKXRf/fma8W/ox2AbQfwzaoVA26/B4CiBG02c8QjadwugKUfH/RWBl+cNcDjDTqdlZVuf4cOqT+dkAKwbmefJK0a+/6KZcXZ+xPi7QWFhaPv6375zRc2KjtI1bfZ45nTL/6pxSt2TRjV0+P13j2wy469pxo1Tdnx475BA5rn5pcScIkAXIrSyKsQFUBfDS5qDF26dwuZEk3smKo1IeIVswahAChUMKA6A4gY+lO5pf3RPy63b1MfACFhtRUApcS4miDQYBAas0VGAlcqeaCcWNMJD0BMAABevYljBJzL18e9nJkxPqa9FlARTGP+Emh+EAEyMtMSDJsI56xu/ThZwHUdm5tkWVXVhHjL5ayydWUHqZATOUGSeKpZ4wxdZzpjnHN/oHLRiv0lWmfKS+B3MKspNcV+8nSx8RHXrP+9stg9aVJPQ+pHnByCQM9edHt8CgBCyXtLf/5rf+QK/xT/mnZMxEfZ6+5JmOBxVS7+8HN38VaxpgUoKcFqQvCL0i+tix/s0qVJ+zZ1Q2qIEAoQQPBz+6qK77wT7vMH1M+WTWrfpvWJU2caN0u6p+D2Ta71xhkI2E73u3WlXx2L5z4xoUfrVk2XLhivhvSZk1cPHnsLISTebr1iJRMGoSZ+ReV/cNOAO28svJi19sul5X0f2u5dxFFOLHWMomD/BJWhZqqWk5RoY4yrIdSpm2IxiclJcYQgMd7KOF+99uczyn0gNUMBqMiDDgBcMSYHXlXpsRoZ8mWbcCoUCg0Zdn/2iok7S2fFdAiDoDqVocp7q4TURg3raTpb8cFnM56fNPXZtS9Mv/Ps+QuXcyv27jv7tWt9NOdksDtMjzVv0jMlJTnebp+7aLOrwrXB/SMhPsANKrbm36jqxKCi2Kzmxav2f5vzdlBLfsjzfmK8RRAEh7MyId4OICevVJKgacxskua+t+vUy5Er/Av8a9oBOPgcXps9/dnn5+q6tnzNjinjB0b/yhjjDKD+9QULVH1W5/YN3G5Pr+5t3//TqXIrAArtK8eWDPnA/eNebdY05cUZg9PTEhd/9FP0SQj0AvWWNNt9ASXb7fJKgmQym5JSsH/34cFDevEYR8G1QTRNJwRFObktWyZvP0YBzv0lXJCprd6VEuhKZKv9tv40dd2G4wCaNkLfu+aZzVi58bw9DhNnrANgs6Ik2BJ/O9EDxMimjkbPzC9GPng/IaRNqxac7Luyw9WQIBZLkpiYYDt8tPjm1uTCpYIz58sclZVmk7Rzz9ldgXej/R+M2/omjG7YNL1tm1aapr2z5IcLFc32ut6ntDiy9A4GoaohSunJs4UuJTUIPaI967qempxkyHhK6PUdUzjHwaOXzGZk1/j4/xT/9CGjoSTg1KmTZ8/+1aZNx/IKt9Vi8gcUVCk6Hp/i8QEAg3So8pGbT23v1yvlxi4t2Lu5MDcDFQFKibs4dEPvRGzJm5g/a15qAhjoTbY3D/pejHw5SoLHfRPWfn77jGl9kpISX3z989EP37ppw94PVuxdMn+kziDRkhAssSmxRjRHTSSYzk8YO0pRVYDMmf3SJ/eWevUUEAIWYu4sUJHICUSyAfQqvCG3sanvv/82oYixkUbjiSdmbS57K8RqXcxeBXq80+G+e9AdJSWlnHORxHpxrgIKsOvi1lJ6N+eMCuh1W/d3P/zh7oHNtFDwzUW7DmsL3HrD6u6cpWlbLShzueRHZ6zUuXzMO6GYjKdCrjGBRuBye9SQtmvvma0Fn0ComUlZNb/MfX/zhJHdrRZp9/7snw7V6PLP8d/QDsDO1eBjX/jy6215BTxYFU8hy7KiKIxFIoN4ke/GHbs/GnJH1/2HznA0Zf5iAOCMxtUzCz4QJAt//eDfBD9pZ/6iielXxu2UVGvflPjO0PHvLlk9/z8PnTjle/s/HTZ+vlfVmNksd+vWrOTga0GecDYwspI1IFXkI+ZkXjPPAIBI1Dh7nLc4V/U745Mb90l95/uSN8JvnFBwxhUnV5wAiBx/pdrH9LQKjuSUxIqK2jMgDTRoVAdlVyVlbeBUdEwcf1dpmUNTPUlJKcliKaJW0LVCpr4Wtn0laisO1ElPO3jknNWCxs0auTxHxo3o++rb62VziqOyLSUBACAC9KAYzLo+bX2A1111aqrKbOB0eP1pm5wPxJ4acHs8G384lhXoEeYcF43nSYiPD+dJUMJ0xNvNs9/adXJF9KH/Dn+//rsGhvTGtz+XNEmsc3DnhGBQpZSev3iJUnrg1wtL9w8vUVoAaGT7ddKt+xWFvrLj2ZoLT21G9wXlJf5PyzdTXr3hYg1QtOcbbkj9IqsQyUkYdGe/QEAb+dAwu90OguLiEkppYVHx3Dff3VD0HrEkEnMqWIh5qhUaAIBwT+a0RQtfKc75JTMzpaiorM119zw1adLn2fN8Udtl/y30m1M/U0uOe70QRKSlwOUJG6rtNpQ7QAiCAXS9Hl9cXgkam9ZQO5j5oXqThtx7V7tm1lBIIYSnNbjJ5XL3eVwrDdW9KvO01O2vb2vbui2l1CTLCQkJlNI9e/dlZWcfPnz0wCFP9444ERh2wj2YB8qjd3eJAhuS+ewjD9/36uqS3/1TqpsJbcE/3rU47olZX3xb8gGIDsK6Jn25cHqcz6d0aNvasA6u//bggD4tn355656/L+l5LfyX0s7Adz9j1sRu778/rqCwIiXZDsBmtQaCwVCItbTvMWgXJ5QDwok/c0CiVShyS9pKxsiQYf23LPrOQVoTUxIEU82kbok5g60afXHvQ6P73taTMeZ0VhJCAsGgEVpIKRUF4bfff5clgAhcqeSBUmJKqT4DALDW8dsmT3rYWXqqbmbarUM/37b+wfycP+8bOz537rPblfk6j4rLvQpkAnfO8aOHlsuyNe/cD9Nf/vK5SU18AZ1QrP4md9qk7p3a1mvSfuiw4WN61Zm/r2xSRFuqHURHsMWgJlMeGHnfTT1uKsjaU1xamZhgcZedada6Z/ekJzfnfwE5ZuREQHftPtDzpluclZWKqpaWlQFo06ZVmzatHrjvHrPZ9NO2naGvN1hYziHl4dqfS20QL4Wuv74TX7UTVATTAc5Dbh6osCU7l6z+7bBnMggDALVeS+mIqvayWi0G5xhjPx+8FB8vxTeLOem/xv9EOwCnTmePGH/9m3NmLZk/yusLJiYmBIqD9w6+4eTJH8Mdyief/Wu4zQzUtMIn0JyuXfsOv2/45+tnbMp9g4fyAQ7RVv2yNH9m3Ok5Lz2XlJRoFFKIGAgtFrMsm/7zxjx/IFCUV/x14epwOCeVY2bY9vE7Wpi2tm+/sChr954DRa1bYP4HWx4d07tpo3ZLVrwybeosr9x0T/FzoLVkGAAAl29Lf9uqXN60e0V5hbfw0kZBMg3tm1lSoRj3MmZo/aUfH3704e7W1LLPP1myfNUay/5l24pmgqixq1oDXOiXtry+9XTfO+/ufmPX/IvbMjLSZs7ZfHvfpgNulSsqnEPv7pmya9jHl1ZBiFUVAEAsLc29/MT0mampKTd1797rlh6arhvTn9fr9Xq9XW647o6B/e6+dyIwtlba9ar3QmJ6hiAImeIvrOheyBoIha6AisfKH2904UFPKNU4sFHCVkcQnCM9LTyS69VNGXX/jeu/PfLd3uhT/jf4X2m3dT/Um6YOv7P947M+njfnIbvNls9YhcPboKEd5RJICDRIKbYVPxpzoKaz/n37XPjrl05tU49WHM4PdAR4jdUAEYo8t77++php06es+ewLh6MyGOQWMwJBWK30+ScHDRnQvEHz2z5Z85k/NL6cX/9rxaMABzRABNGa2H5pY/ryP3OeyszoWXR595E/sjdtPfXy4ze4verCpdueny6rqrZi5dtqSD99av+mbzd4vX6Hp3pqEwmvm2Gd9uR0q22CxWz+67dNZpP82ddHKl3uvj3SNS3Uuk3HC+dPBRWMu6fez/uPX9e+YYlPuf/eux96QLZalAmPPW+zBEqd1SNNIDwjzaSq0quvvGCPs+Rn7S0vPJhf5Hlx7k+TRzbYc7jgvY+KnnlCuqlrwyGD3w8+OdWvaltLXlX1RICDaOCihfoH133Rq8V/+MYrhArZZ7ffP3JaZjp1uhkBTCZQSpd88M4DIx474p0RM8jD0BMy5dxXZs8LBHzU7wfsYFFlLqgrToaihzeBSJGzht3VhnMuSzKAOKu5z+D3+/TM/H5H9RH/Nf5X2nEBZxaiY2HDH3ecFASq6XqdtNTyCkfD+inica/GTSCKQFDs7QkxWoGjItUAOEtPvPziM0cGj8v31aYViRVHKu+dOXd/psn54QdzKwqPfr/99+Qk++nzBQs+3Pb6C8NEyTRh/NhJj4nz3l6UenKSxYpz/n6NyE5NR7Pm9aY+8ZLNIhXnHkiIj9u8/dSrT3ZxeRRKSXycuOLTnyeM7FmUvQ+ct2nV6brX5goCifaKEoKQBjXo0hRnQeFZs9k8ZdbGxvXFAbfU0XVus8Vxjri4BJ/Po+n8xo7JE2esf/XZ/tbKE4Kpoa4nLXn/P4RCqAqKBkAATYcSrCzJ3eWSrBaz6ctNv/72Z97Y4fUDQb3HdSk7D5YsWPLTtEf7513a/f6iecs+Wqb88jwlEKzWi77bmpIfZAv6Dbht0J13KEFfWeFRjzdos5L772j42eacN1+4N6lur4KC/GFjFxaE7nEoTWuqNGG0TVo385lJFaUXLNZUxgBe8+vTACBpegJoAOCN6b7rOw10VvoBWC2mj9f9PHNKj9XrDrFaNcZ/if9pSRHBzR2xfOGDp8/l3dCpqc/vLyktkyWh98vdOM0AOPQkCI4aGg+XJrad/sbr84uy96bW677vwMHNG7//svDdWlRpLf2+JhPbt2t81611QUzjpm1Zs+ROl8v/w/Y/Dx5xfLRgkCmufnxSc0rFtLTE9V9vys3Le/KJSZTA7dMrCn7z+0pTkuJGTln33os3VlSGRakaUncdyj9ywjt7Rq/2bRqUOzy6FqSCmJDSJnJZxrTKslOiZE5LTdh/6NIHqw6Pu7eOxSQyxpVg8PouPQIBPyHk3NmTRi5WmVPZc7iCEixbMMrhdAeDQbMlxWKvjirggLPkhCBaEuOtF7NLP/1qf1qydPN1qf5gmB+yTPf+WtatS+tePVo7HOV1m96ekpwgW8zLlq5yezxPTX9cVUP+AKso/t3nLkpNiX9kxpeTRjTw+fWcQt+gO24FeHrDXl98OHPmlm9gzbviTTLCzXdap3z17epzJ9ZLkm3hkr3b8ocWBTtEd2pj33HGfSdICLp9dIsnJo2/ORBQGzdqeCm7cPGKfYvfHn193McVNarA/Zf4v6Fd8ll0HAFJwqSxN9/QucXFS1kA3ll+8KeS6ZzGxgsBuDPjlamPDO7UoX3W2Z1mmdVtOjAlOWH0A49eYjdd9nVz+G8AiMV0sa1tv+TYuXXre4oCR9G+ByZufOe1noSAEMI5r5MWP3bqlv690x5+sCc4DwS8hAi2hEbeyixwmCxxkig888o39TItIwa1DQRDhJCU9Lo6Y2dO/0kIEQRSUh48drry/GXdLOP22xob92a1SP5ACIDPr+z4ueiuPgmpSaY4qxjxi7Ru06E6BY7SkuJCr9dt2PPibeKpS+7NOyslCYMHNNV0JgiUAJrOAJQ7PEeOVWSmo22LxBvaJVS6w+t6i9lsLJI4hyCQRWsK7rmr2ajC8XeUAAAgAElEQVR7exSXlHDO4xIaMRYKeIs4R0ZG+povj27Ycn5QH3uLxuHZkHOs31q4ZN5D5eUOc2Kn2XPmB0haRbDlkbLJRocb0z9obf01JCV8/vG7fxxem5Kc6qz0nM4mazae2lH4PGhtoaZ64luD53Tp3CgjPY1xunjFzpdfuGfExJX7jsV2/O/wf0M7ALc+hc/uHzdx+scj7umSniZLorhg2/59R27rW/dAZqLi9eCL/MVVWjYfUW/GwkULygqO7Nh7rGnD9MYNUwXRnF6/m65refmFxgfmHGmpyRaLxePM8nsKpr/0/cszb9V1Rgiat+594cxeQgilRNN0pyvw+frfZRPq1kngHITg4mVXUMGT4ztnJotef4gAnPOktIz0OvVKK1xrvtjmD6jg4X8AZJkCCIVYpUczLp2UIEoiVdVYDYkQIslX5IJwqGqN8AJBIKJASh1hdtqtgsUicA5d57oeLnhPCOEcLRon3tA20+Gq1Koiuzjj3oB27rL3zEV/q+aJxuZHLo+/rDzUrJGpa4dkSaA1Eg8Bk0w//y7/tl4t7ho4wJbUJD7OevrsucivddLTEhISXM6SiqLf9v+atfvA+dlP3dWp6/B+t084henlamOjW6u4gz3S17sDqNCa/lz45ltDn+3SuVGr5s3mzFu/eN74/vd88NsBKEZUzf+M/zPaARg/zLzgtYf7Df/o0yXDikrKP1ixP85qnffWS2azmVKSOSygMivAqZ70yZSv+ve7tST3wIQZ3ycnYuwDN3Ru30DTeWJaB0E0C6IZYEwPAbQ0b7/ZbNq6+2Tn9nV1nRMCzli76+4O+itzsw5GAoFUVXN7AgBUTf/muz8IgdlEQhpnOoIKQJCYaDHIRwgRRarrpFXLJrf27l0nPfVvHA//n6Co6p9//rVz917OwTnXGTckqc/vV4IQBMgSCAHnUENo2yKuYaYVgMUkSFJ1XRvOYLdZgmrICECXRPrFD/mvzrpbEMTE9A6UyoJoAgjnuqYFnMUnBMrMZnnG7K87t7WXOzFnzms7d27f/N2u9fkfGlr13bbpqz9fGAqFcvPyP1y6tFnj9Ju7Nd+668xjY/v/djzrHXr496nhS//v+F+XFNEorwgWFjvnPNNr5pxNjRsmr1m9KBhUjC/tcDo5twGE6nEPNRo7dOiS7DO77HZr57b/r73zjo+qShv/c85t0zIlbdJJAiShBUjoGKpiQ+yI2FDsrr2uu6trL6y9rbuurq4VVFRABUF6J4SEIpCQHpKZJDOZfus57x93MhkCImqyn/f3+b3fD38Md+7cOzn3mec85zlP4a+YM/SHTUfe+7T87pum8vxPLIMVRWEYjDFmWdbVEXz21W8LB5rGlwwABJqmKTSrsamZEPLmvzd6OqM9JVkGhg/L1nXA+XPOOvfsM3sJ0wnz9f/7AqdjNpumTS2bPm1Kr+MYYxyXi8UyzLoNm35cu7W6BRBAm8vtbo+qT6MRBmabRhQgjFBYUpIdAgAsvDjn4aeXzZ0zcmBeMD3VTilRFI1lGYSQu6Nr8Vfbm1vD18/NDoe1iv1HPa0VZ545a9uO8jz/2rrgOADKMcAyjKIoOdlZzz/7zNp1G9967xuEACh89MO28uWx79UH9KW2K/wIit+DadPKLp97sShJCKEEi+WpZ/9WWVVrTwCPnCq73XOvnHnmGVO6XDt4jv/s611zpqV7ukQAQAhqGrva2kMCx2zd4xb46B5garJle3lQU2He3NFGgwEACIVbbrxOfzzu9vaYM+8UwZjVo+oBgGhSJOTW2zXFIEQRw245crLmJ6eC0ZwimFJ6HwVgWINgTMFMz4KQaDI9hXCEeKzWBIEXWIPh7bfe1tMNNU37dMkOCjB6BNfpVXRxESUwm1FOmsloZEYV2QMhVR+tYFidM3tWV4DYU0eu37Dhw/dWmHjYHrpvhOVvJSWDJ4wfO3P6VK+3CwBSkpP++JfHd0Pjj+8c+w1+H30pdgsvsr72yvNdXT5KaXJy0quv/ePtf+38+IM7DxyoNxgAIZh76YUut7+9ebOmiqs37N20vfbW+cUMRhYzDwDfrq9DCEIReecePyUwaFDCrNNnKArMveQ8jFFHp+f4vPbjQQj3quGvyP6QL5rkixCSIh5ZjKUrY4bpFvD/FpTq9kPP32IwO1kumu/NMILFkRffzE5Te0c2nBCEUGpKEmaYJZ9/RQglRPvHO8sBgFKYUGoGgNNKkhWNSpKiaojn8dc/uJ579FKX252UNjo7d4jP5/9h9VoAsNtt23ZUbt5S+e4/njabTaIomc3mz7/86jXT6j1xe2m/k74Uuz/fNvjWm6/nOPb9Dz9Z8+Oue26ZNjg/JRhhk9PHAkDI3xQJtkoRL2aElT9W7d7b+Jdbx/9z8b6IrNU3hcUIFBXar5w/V5a10yaNAwBZkUOhn9k8AACAWE1qWewK+ur110STpR6pAtAF8cS7k/87oURToisdAISwwZQMgAAgwTGQ4/XVKyXHlsY+IQ67HQAIJTt3VXyzbEX5nhYEMCDHaDEQjJE/qAZCzBvPz21r8wpGBwWanD6GUuJxVRLFq1F0y31fFw9PfPXF5zs6O/fu239/6IOq63vf4jfTl2KXWgGlj4BrMux+CMYsgJF+Y0dnZOqkQZPGDQYKLItfe+cHQjR3u5aWZiybPHFK2WkUaFJiIqX02MwgpE+dlBJCVIRwl3uvpkkAiBAlViQqTiX0ASefrHUrMN4W1JfMMRCKfuefpU8NSX1SRoAxG91TZliDPWU4pQR3p/PFlwiKIfA8Bejs9LS5XG+9/R+jEbvcoSQHm5frPGdGMQDUN3esWFXp9ck2G7fqaSWQDdOuBs8Y2PFo70v9HvpS7OIZ/yzcwhQv+aoqGIKyyYM1ot171x8wZsRjCwQhxCDMUKJKES8gIKrsde/FDPs7RQpjHBMCopFeVYmC4YjP19t0Qyi++GnfQyntJXgWs1mP142BMTaZDN1n0V5Jgb+WqEYkWmJGKQCwrJHlLZSSXk0EAIBlWZ7nXnn1LUmWq/YeCYUgK5Pr8CqbPoVAdq9z+4a+FztjB0w5FyQJLrxgYpoz9eKLznO5OuI1AWYEhHAk1KopkiR2RgKtCGG9dPBvAGPEMAxQoBR8fj+hBAACgVAwHJ2gMULH5yefnF/UXKcKhV4OtpNDKY1573iOS0qM5p1aEywswwIAofT4Wq2nCCUaIYpgcJisWZRSiz2XaNLxGjHR4RCMhpdfecPlbt+8udbphM9X9zqlD+h7sZsxBd57+cnMzAxXTwkqxHAGoskBzxGEcMjXoGmSLny9PvuL6O4AAOjo8OjlECVJ8QcDCBAg4I4tdKxjEFi9LpgOpVD1U6vPdyLXfDeKqvUuy/pb4Tg2bmO2NxSgaFBKujOaiaMfEiVVOTYpX1U1XVPyPGdNiJbkSXLYWY4FAEXprb1OBVUJma3ZDGsEoLbkoQghvV9PDJ7nHXbbp4u/vGHu8rAz/p0+oC/FzuCFqWfDv/+1CAAHvXWy1EUpkSMeABTvLzgVdP8IobS1Ndo1W8/AjZ89MUYMxgDg6QpvK28A3cYBcLlD4QjoWoYC8BzMmJiR4jACACHg9mtDCtI7PYEOb3jUoASB75bU49USQieVmZMhqwSg+wvFgwAAVJUc7RRlDTtTHa1tng6vmG6P3mf1lsZ2jxLTaCYjpKaYcPf8bzLz0ycOopQCivZbAoh2S8MY6w4ma4LZak2gtCfX69RARJM4gw1jjlItOWM8pSolGkLoD3c+8MWa3mf/TvpS7Ma+ADMPps6/eLKmygjrqWK/TEyMNEIQQKfHE4lIsqoABQDEMFh/8rKiUQoIo58Ouw8dcQOAomiKQhkGEAKM8ekTc5LsRgAABGYjx3E9qlRVKSEkKIJI2LIJxVv228YXdfEcrFm/OyORpRQQBnuiU++JAAAIIULoui0H122pPV4aTwWHlZl7/hiTie9lz1E5AlT1BrVUZ0ZOTsbaPUkzRnWwWNtVXmkWEACwbI+JSQgNBGX9At6AuGpjA0KgakQjoChgs7L6Qu3M6YUsgxECnmeBUkKjRiHPc0DBZDI6HHb99wlwqgsbSjRAwHJm3uBobpMf2/3ehmd7n/N76Euxu+ES823Xzex99FgQQhhjWVYUVSEaaXW54/3yRgMHAI3NXRijtVtrvF6NUmBZyM0yswy+9KwCWSFmIxsW1UBITnIYAwGREN0NFr26NSlH11sMw6empTKM/gxpQ3Or1Sz8uG/ovKvuyMjIEEXxzTffuHLqgWUrt44dXRD/MBIshuvuXJyVYV306HntnUFBOMXA9ygIgSwrmqYZDdztf/zizhsn8jwbbyp2eAJDB+cs3110y20P2e12AHjooQfvu6x12fe7spI5AEAIhcPRGE+eM8RKSmKMdbNEtzwRAoyR0cAiBGFRXbbmiKSoza1hSQFNA4GHC88uUjWSYBEcNmNEjA6RrgLTnKkCzxsEnnYry5NgNPAPPLZ09WdaqKce/e/lBMbQb4ZhgP5MAXKOYyMRUZQkRVbcHR6WZXRpYxjGYuLdncFWV4Bl0LIf6iMinDbGxjA4O9U6Z3pKTrqVUgiGZTHsMxiYHVXuj5Y1zZjsNBr4j77Y/+ozZWkpmXlDTlcVCQAoUEXqLgqLGDlYE+vcsH3X/puvnrWmZnBGRgYAiKJ4xhmz6ur3mU3GWFY5ACCErrtj8c0LSocVZbvafTWu+h/K9xmDwMfNVyQaSnri0PWQGUqKsgY4cpKTk+64YfITf9v8yP2Teb7HuAyHFc7ozMkfF3vezz773LZlCw0GQ0+5oO6JQlZ6IgwopQhAlFVBoJUHfZt3+0ePSBN4dsmy5jcfG3FmWS5C2GzidEWyfG1tTa0LALbs9mIE583KpZSqKowZmUEIdbd3UEo1TSOEZmWmE0ISHXZK6Qm3EENh6fbry+qWr/tf6rebeTsMdln+dPecLn8EI+RubyeAOjo8CCPd2EcIWcw8Qmjl2mpJljmW04iWYEBJiaYEszBsUJKikmBI0lQFM0x6Vh7CxoxB0xDCCODZ558LBTsXzCszm4z6PEQo3V7e+Pf3d5VNTD5/1qDkjPHO9AJJ7IkVVaV2VYyahnsPHAkz4wcWzysqGqL/Nvbt27fki+UXjd1qNlv0iZxS+v7izXfccIbfH5FE6R/rV7766tjgz/QI5QC1gtIAMn+cLcEAjtjl6rt8U8dOJBq96f5lLz05U+zWN5qG26WS1LyzxowZo6qqyWSSJKl85T3u1kqnlVCqa7veEa8aoRxLfqr1vbPY+/Ado8omFMTq0SIE73+2Zd/B1msvzMMYmc0JvWZSnmOMBpZSuqm8lWdoi0cOhURVoxYzP3JoRrozQZJV/WqKotqtCZjBiQ67wPOaphFKOZZ5+KmlX6+Pv+TvpS+13ZrXgL0xeNtDny68fJSsqnoBHp7nEAKeY9dsrA5HlLrGkKLCzLKsc2aVMYgm2k3bK2ojoWBKAqhgNNksyelmkzkBAFRVYTi7IoUQQh9+/Nk50wflD5i0ecehZeL8dkOJBtwk8e/zS7OnTR5YXdv26KL1BfkHr7+iOCVrGi9EN5riOVLXtPCKwi93twweXEApra+vt9ls86a1HanuGlIQXRtazIbaOk/AHzGZTP9a+93Lr/fIHIFA4p/vg0BIOdIYWr4RgCpAk4FNB247hHoVxdCAcF1s/qsW+A8AhtsXjjra2pXoiH6rpqOu6VOCh4J8dXV1QUGBKIpWq9VhY9pbT7QEAUAIQhFp0+72g7XSmGLnj1/M9/vFir21P9pfwZSGVHS6788L5k2ub2p/9Pn1T91VcPw6QlY0WaWIN40ZmXPkaOCKGUUZTnNji3d3ZfW7n+xnGEhLYew209kzijiOCUUiANDlD1BKDQbBZOBfeGvzhiW9r/k76Uttp1O4BEreZc6YMthuM5RXNh91+VWVBEOq3crNnj6QwSjFYbSk5KzbXxiSzCGRnTGyJSfJs3PPwaGFORzLGY09nT0Yzo749PsfeiYrnb/w3NKjNeXv5e4cl5X7+T4RAFQQpoefm4Y/HpiXabMlBELifY8sT0tlb1k4c2DhdMywSqQtpu0am9sMAlvRMGTYmIusCRZKacWeqrOHrV75Y8Xo4oG6evh2daUsqRecW9rY2MT/s23U7jQEQCCS8uKjjMMK4QggBAzWFKn9jj9hEm2AwQE6XvJ09v/JNXVSWWqKdemKHYWDopaRxxssHJS9Zm/B9FnzVVVNSEj48suvr5pe9eOGinRHdE6IajuEQpEIg9HXa1oWzJvmTLWyLFNRWV2TcHmb8xqJTQMABPDkGXjpS+NLC5MsZuHJF74+d3p+eoqltwMIM5zR9lN1S9agOYebTX7RxOHgrec1LltZnp8mtHsjBgP7z8/2IQR2q6Ao9OLzhgEFnmP+9fGuFUv7LMwuRt+LnU7pK5D5NTx+73nLf6hcta7xmQcnhAIhYFiOQXtr/ZJ57u13PSIIgtvtdrlcn3yy+KoZB2RZ5TheFzuMkSSr1/7h47tvHlc0OCMYirxu+p5X6R8nown/DKcn9DxjCkgDfqr06qXMC0La8CSb8c331lUd8N576zigZPCgvASzWffButu9gVBoyODspVuyB2aIg9Na1m+uHF9aGNsM+OTLbbOmDU9OSlj65rJ7lpdEQKOgOd/6a2/fCqXhNduDX/Z4Ub2gNesFwo5l4/xDly+8VBTFm+795qUnTw9HoucEQ2JSYqLVnrdxv330oGCK2b1l597MRFa/D8uy/oD3qDv4+cr2IYMT584pSUm21h/eXy/lbR7yHa/SXlrx0TJ8zscRASILvOfOLE1v7/QvemPNuJHJ08ZlxypTIcy4utRLZpdubb26qGhIWloaANxxzxOPX1O7etNem4EApRQxX3x3kOOZe24++/G/rWjJDh6ZA3W/qdbEL9KXk2w85XdC5pdgtPDnnDHSbOIeeWnbH++YCkARy5QUO9dVp+orRIRQOBxOTnUKwhGte4zsNvO3P+z++IsdtywYPbwou7rOdVgazucSACD02KJ2AAgoC9Jm4abPmLvuaL52qr/itoXTHXbzG+9s+HFTw8Ir5eFFzoz0LEVRU5LtJpOwZkNFVsKhfeXNYl52vMwBQJu7CwB8Pp9FNmLdfwOM6/bHnZ+/BkfjMqwG5Qbveiw2dBTghKoOAMYtyaubUZ+e3nsFaDEbOjs9lXsPDx6Yu2N7g9NhzHSwlAKDsSiJnd72D79pzc5I+OD1+R5vOCJp6zdVbJxQK6iE192Bx3LL9ySsAOKMi5K2Dj+S6xxU8sZzl73z4foPvvrplvnFnq6I7j3geGHF9sSiMU4A6OzsTEpKOv/cifsbO3y+sMOWAoAsZoFj+dsXzghGxAvOGnHhrb+10sQp0F9iBwDz/KMqZlYFS4RZr40cmOfkOKx7OJuaXS1HXX6/X5IkhJDBYAgERI5BGqVUI3l5qbMueuGdly4fVugEQKv2oQ3FG21hElLgiBcKE8EbQFkpxvML4dwCAIDXl9WsqWyaP4IblIgh5Yabv2v6a+dfRowYesmckRfNLs7PTZl347v33za1cGC+rKoWs2nmlLEHDtc67AkWs4HjmHix0/fQKKUGQNsgPAqMGlCkIvcFd2jgYSCJG5AuNuxjIDk2bhigFVQXKCeUu0BiZFDqCULuOI5RNE0wcK2tzUVZZoyBAlBKW1yu+pbQ2m3+txZdLIqKLyDu3rXzwcYXLp+YO0bZBwDbW2iICIuuLBBY0Ai8sB0iMvhF0tBFnWZIMkUWMPWlh7+9lt57xcWTUpItDz/5dV2T74EbigHA3e45a1SEsGxDQ8OQIUPcbrcvIOckSvv0BgcIbn1g1UdvXVT5YgP63s9xHPRdmNPx9KPYXXLQskETUyvUo2u78kucf31+6c0LpmgaCYuRghyQZamrq6uzs9Plah2TX7urqiY/Jy3daR8x6YUVH8/zdoU4jv1+1epLnvRfosILW7WQRM7MRbUhfrb4+Yav3U/L8KRMAUCwGEwC+15r9KYqjZMkBJ98uQ0h0DRNJQQAjAZh+cpNE0qLxozI9YdCq9btHTe6pzZsutMGAElJSS3OcDEw2yE0AcwqUABgIBGAKg1HGUiE7lA5FtBhEINATihzAFA5u7XYaJQkKX6WlhXtUE3LaRNGZacnEEK27q4Xg16bCWGMKSGEgtkMZpMgigpQoJRJ5IMfbI1aqACgEjpkbQVQAASCQAvSEzKswnWmsDvMbD+sfvvY+QnGc3Z+/EZ5Vc2IIbn3/+GMNrfP13FUwGxOVoosti1ZvPziC2YdOnQoOyuzeu+3wye352QlAYDVajx7ZqZ7j9+wKmAmGEvaeW+kLrstTsf3Kf1l22UfMhwYWbJd8gBAVyrKfDrnH8vWXTV3AiEUY9zY1DFxfMlPTdaqWvv86fXle37Ky3HyPGsyGZd8vbOppf36q6aYjULV/trvtWsrDfOCOIWjIgA0+Gj73WzG1e/2vh+AShlM8d8nLBo6tBAhtO+n5q++233TNWUmo8mZmgIAgsDtqjg4fOjgBnXh2DGjA4HAd0tfnDKseXfV4cKBWQBwtNX778+2PnzXOS6Xu/adQ4Vb0ghQEnXRIRaQFbAG4AONAihA8M/MrToYUOXDrdMnT7EmGFeu3TM43wkAGCOM2LZI8d66xIcevAshePKZ1x689NCmLbsFFgEAxtjd4V6/syMYoffdehZCiGHZHRU1d9c8w56ozEDEL91/bsZry/fq/+WwOimp8uLc7QUDMwHhbbtqtuyovvGyEYS1YJb1eEMTxw7xBbkvt2TNm9rQ0NgSDAUsZoMgsIte2/DK0xdvn1GRrGAAEIHkZNiKW3Yec7O+o7+03TVPZAjdO/3JbrJvUdMNT03v8vl5niWEZGcl7tpdKUpyJg/bd/Gjhufrm9+Kos2/5LQj9a6X/76aUHXh/KkPpq/fe+B9vy/8hOMnCw0PsKHMV1VJ0YS43X0AUClzpnPLRfm7hxQWdnWFF725OjXZetdN0zIzcnTlhxDaUX5gZlnhn9/NeuWFMgAQRZEKRV3hrmBIZBlG1bT8vFRFJRih7OysnePKW71e5092DEAACFAVqBgXEnxymaMA2y6vOW/KbErJlyt2T5s8UO+oGRGVIUVFa1Y577pzodlsRgg98+Qf335xoUGFzESgFAghKUkpU8YhVSH3/XXZ84/MFngYNyr/GeVPd9a9aGP80bQzAABQFG3Nk6dPuvldR5LZr5hzzO5nSv8zfEguzxceOHz0o8+3lI3JvGFusUYIxgyl4LCbN23bH4pIGey2LdvZAdlJFrMBAFxuv0o0yagmUia2XvlZHd4X9JfYycaeJ6QCEsKQaDd9tnTLnLNHU0opBWeqjWEwpaAqpK6xjePY7IwU3cTJH5D67KPzfb7wB4vXO5PNI4cPGDu60LnZ9obxg73C+RkJ0oxZQz/48VBsN8SvmM/L2HDLhAa7LafV3fXSmxumTc44beKo3IEjxWCzfo5B4I/UNQ8uKL1x4TUA0VbHY8eO/eyz+jOGR01+UVQmlA5oaO7MynBcftHcT+Vvsn5KQoDkn/EYnxAWGAHYliG+tCFpqqpazMKSr6tLR2bq77Z3+JUaduL4YlVVFUXheR4Adh9JnTXUSGlPUKDFYIhg9fLZzpf//m12VuqCy8vKxuYtM11yU/UbYWIg3RWSU03Ce19v523Jw20H7i36WOGdKUkph2vdz762dXKp7Q9XjpZkTY+84ji2yx+WZQVj5EyxWROMsqyq3QuU2sb2Qbm2zoogq0YDofpnCuyhv8Tu+X/WP/NhNgWqd9vIaiKirOyu8i+Yb+70RF3wgWBkeGHWyl2JDFKSEq3VdbvsNktWhgEhJMuq0cjfeNXUnMGz1q7fcN2d719/1Zi3xy5uOvoPb+1WZcRTb2OnFJFBNT035smSPCYzK4Njk5566dthhenPP7UwK2eULIdVqT36bRDwgoEQcCRIayv3OlMdLMt2dnaaTCZRYbzegNXEiZEwpXRySdbL72wUBNPLT116zjnTmkY0hbTI/rZD+l9xKgx25rOSYUrZtPYOz4pVeyqqmt58epqnKwSAADM8hwlgVVWampqMRmMgEHA4HIGQihBC6BhHjZFnTULC7OkGA0+vvGXJ4ncuUwsnf1P4yapdbQ/UvwQAEFGWPyBs/uYPK2ajYcOKOr1j/v3pphRb09lT85+4qxghiNWVD0lUwdr000YuWcNoamRGKVO1v552R0cjgLUbG954bu53t+wt7L57NmPE0SzKfqG/bDsAIAlTvg+28d1bl/jZTL8tVF5ZN3VyIQDIsjo4P33lwfNvu/kqn8+nadozz7+28PTyo65I3oB0/SOUyEZHif5aUZR/vvuf7TsOjS9Jm3/xpHBE4nmWwVgjhOfY1/+1mlBYeMUkMaRSSqSITwx3IcToibQIEMOyERnSs/LqO/MHjrpS0zSj0fifj7+6bfbh9Zsr0uzH7K8aDexTb+22GOHRBy5ko8EEvwKTUXjxrZX7D3luvKzAZjXE71EjBCNLRn20OmXMpAsMBgOl9IOPlv/pioZNm3fYzD2xYUjf/dM0ChQARSS5pqFj7TbP+WcNnTi2QC+toqgaz3N2q+GJF1a62jsuOD07NdEoSurxm2MpmXnf7S6YPvOC4SOKLRYLADz858dGO5fpGycIocVf7brz7jMPXnjQ6iYAoAEtM6Vc8OrBVQtP1MO9L+hHsVtWOGpqo2mHGK2A6SrljQtN23bVnD1zuEZIS6unZPT44ae/AwC6M2Xrth1mZX3Vzs8uOHea/qgokU2JYzRNoUQDhFTRf6hqVW2jZ3NF62njCyaU5nMcs2xl5aYdtQsuG5doY9VI763MeBACV5c6amTR0q2FZrPV7ZFvPe/IjxsqMhJ7DwIFMApMu0f8+Juffn0oKlAKwwYljhmRZhBOMJkcaZXOP3v8zoMJNe4sSSFXTEfT5m4AAAkNSURBVKs+cLCOVb29fNK90DS13eNdsa51+mlDJ48vQAgIgRf//v3RVvHe60doqqgoFAAoJceLXdbA0d9XjTr7rLMSExNTU1MBoKGxbcW/Ths2JEdVNYQQg7nUAdb2yfv1RoIa0FlCpqlzfcT8C8Epv5kTjEtfsXNkYHZDIuo2FBSfNmHYgKde2nbpBQafP8JznCgDpZQQojvwjAbe4+ERRp6ONk97rNPhAYgbRYTQwBxbQa79kxUHyyuqEUKyQu+8eiSlonqyeGFgWcxglJPCVB8+ctkUTlE0k1HYvK0qN5UFAEnWZEUT5W7TBkBPtZg3Ozbt/DoogChpotTz2FgWcywWeGZkvnnDlsqcrIxBxS6Gwes37U+1cTzPUEpVjfbe1OqGYdi0lJTr56a89+Wh8sojAIgQcsOlxRFRIYSyrDEWWN1L5gCAYXCaMy0YDGZmZuphLzyPKQVASP9ns5rcO/3RTHeAVCwctof6T+agX8Xu8cVH7LPZ0u+wSigFcNaoCAHCQEKdJCypilo0QG1qrHckJoui2NbWtmTp2ldvr/vsqBAncwDQPeUAUAoCzxgEhlK4/tIR+jvtnnB1vTeWsoAA9lZ3HKyJhMMQnwFj4IHjQP8N5OUdyRuQJwgcxnxz1DOFAX5d/PPvg212ucOiIolibV3t0aMqxqBqICsQH81uEMBhh2EF9uy0nkyf0ydm5GfbjYZo1z+LiQOAYFj5OXkFAIElVQeaSkpG79u3b/jw4RzHLXrhtdEpnOzvAIBDdd7TJo+mWC/hCQRgqNl6/rMHj71GH9OPYgcAf/mo5uiAsvKA6/hUljQH+8lXO46KL5WOn1VUVFRdXX3jnMDSVbVpSQYA4FhsMnIAgBGqb/EdrPNiBAyD6pp8NY2iLEEgAABAAQQesjJh8sSxyUnRopMTkmHevOyS0SN/rlNWOBwJBk82Hf/XwBgnWCwGg3C8yCCAmtq6PXv2xufahSPh9xdvCARBj1dnGHA4ABBMGJloNLAAwHPMpNEZLItBD04OyQCwZuOuu+aoi96D6WVDt2/fvnX73jPH+KArmjNV3+I7rfv6IVDPS8h85IyW7xf0l1Wn09us6XMW/DHz2s/TSU2gZggz8+0Rc2/47I2/jvUFJAAIimTEsPy69lRFkRMsZndLOVXFLbsaOBa6AtLBI6JeRYnngOfhvruvjqU5ZWSkFxUWxL65qqmhUOgkvShPEYQwIIQQ/pkIzl8LoZSA7i7qo1HGGNvtttiyOiJGdpVXxFKMI2Hxzbc/D0WAUqAAKUkwdJANAGw2U+nowtEjCqpqKKVkcDbeu3+/AEH9KgdqOqdOKUUI2i6rSXSYnniocdmt/bU5EaPfxU6n9EV4fcBZXl/o359suee60a9/WMFgUFQiyTQj3TZwQLItMXf0qBKGwWazyWG3AwJFUU8Y7ArQM+3GoJTG595RSsL+ZjHcfmxyGiWaSqh6fCucKAgBIIQQnLK75KToAgfw82KHMKvXZYo/iBFrTS46NukJxYf+6xxvw/XCYDDo12052qqqxOEwr9+4oaqy0uMNd3rCdhtDCeU49rJzihyp2WYTf+tflq7b1usa/UW/i13p65D0AQBAcXG23w9vvf64x+PVtGgGHhw7fBj3BHMQTVVkf/SRUOJxVcZO6zvJ6AFjXc/1C7Sb3m/8DuJ/ZgZjksmWo79mGJ7l4wJdKZBjawtB3M+WYRiE0HOLXvL5A4kO+56qeosZ+jxP7Hj6Xeyml8CP25ZK7e2dnV6AnkwLzPD6YxZD7ZomAiCgxN95SOvOx0EI/9o0x15gjOOVBEIgibIoS8f3jtIICYXCQb0lfF9DKVjMJo5nTYaeCNYYvMAbDb0VXvzP8tdCqUa0nlmCYXlrUhEAIEBGSzrCGCCaqh07BwA4jpMkOTkp8Z333l+7bnN/S17/ip2lCbbVPpiYmMJwvH4jv+ew/lbY36wqIYBokYC4D50qGOP4xqaaRrq6fLGlC6U0FA7HeprrxzDD4H4uOvFrIYT0KjqBECQ67Me2FjcbDMcksMUStn8Vmirq0z0nWI2WdKCUNziMFielFBBoSgQAWJa98pp7a1+AmrLeH+9D+lHs+CBcs8By09WTGMwh/OvKQQDo+XkAAIqiujuiVd7DkYjWvZOI8Qksnv9P0DSiix1CYDIZ9XGgAFnp0fx9Qn71nE40Wa80ZUlIu+dP76/Y3PuEPqQfHShnXAtDCtNZ9mSt3/Q5Vx8hBNDR6RGlaIqeLCuxgYuJFwLEsr8gwQhBnPUShVJKCFC9U/JxeLrCra5ge0cw2N0bt29hMLbbjXarITXZkuQ4sVsHRTnmIKUnXjrEq3mpu+cbAByuqdNfsCwbOyczIx0AgNLYDU54zVgZGjHSdfHskSugx5juc/pR7LAbzr2lOJYY3DOolMqKAgCiJHd0egB6yibEj/oJHgIAAMQXNAEAopGwqChKzzzV0uY7Ut8ZCB4jQIQQQiA62ggiyUCOlV6EAGGAaBJZ39MsRaAdaJxrAgGwYeC7O/thrC9rev5kSiHDmTCk0GkUemxco4E1GrhjpIZCrGZK7PdJ9D8YAADq6hv1F7EhtdusFrMJEOK56JUp7dGOlFKH3WSrB1+ufqDv6Uex41hYs2F3SpJF79xwEnieNQgsQqjN7W9pDegjX7G/xePR9NdmE9Sd2322CJEUODgPyC9c9f9FqG57xeHr3qg7ASlVkHOs7Z/5FcgyIARUg/FjnRaTAAAYw6hhmbqm9wUkhMDb5fN2neCyuqGJEHy0dK8v2l6gX+hH2w4AZpfBgrnFCONoIZNujAaOZTHD4FXralgW2jtDtfUhhEAQQOCh8iYAAMJBzfnxH/o/fh0Fn0dfjHwb/AEABITA5HFpmkaAwtRJ+QhBICj3mnDbO0PffH9458vgGhN/uI/pX7EDgLMmwqC8xEtmF4mSunlHvT73HXX5giEAgMA0qDkvembrhJ5P/R/9QXq3N7jgczBvBU2DwfkJLIM1AmXjc60Jwq7K5vKqoxtfgY5jmvP0Pf0udowEM+4FQxUgBDwHDWfBoUsAAPy5vU78P/7bsBEwuQAAzrwBZAUIAYGDz/vZY6fzP2eprGibBueQAAAAAElFTkSuQmCC"
				), a4G(5, "arena", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC"
				), a4G(6, "territorial.io", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAjIAAABBCAIAAABEh9lIAAAACXBIWXMAAFxGAABcRgEUlENBAAAJJWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNTo1OSswMzozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMTItMjNUMTM6MjY6MDUrMDM6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY4ZGZmYjhkLWEyNDEtMTg0Mi1hNGYxLTk2ODMyZGFjYThjYSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE4YTU4YWFiLWE4ODYtNWI0Ni04OTk1LTI3MTdiYWZmOWMzYSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjNhNTMxM2RiLWY0ZGItN2Q0Mi1hZDc1LTEyMTJiNGE0NThjZSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2E1MzEzZGItZjRkYi03ZDQyLWFkNzUtMTIxMmI0YTQ1OGNlIiBzdEV2dDp3aGVuPSIyMDIyLTEyLTIzVDEzOjI1OjU5KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4NjhhNzU5LWRjNDctNGM0My1iYzA1LTllM2ZjOGMwZjY0YSIgc3RFdnQ6d2hlbj0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmOGRmZmI4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"
				), a4G(7, "youtube", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC"
				), a4G(8, "googleplay", 3,
				"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"
				), a4G(9, "discord", 7,
				"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
				), a4G(10, "insta", 3,
				"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"
				), a4G(11, "emojis", 4,
				"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"
				), a4G(12, "flags", 3,
				"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"
				), a4G(13, "bestTeam", 5,
				"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"
				), a4G(14, "bestPlayer", 5,
				"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"
				), a4G(15, "zoom", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
				), a4G(16, "apple", 3,
				"iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII="
				), a4G(17, "loading", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAZEAAABGBAMAAAD/Q7RHAAAAGFBMVEUAAAAnKSZKTElucG2Fh4SoqqfLzcr///+y5yZlAAAEnUlEQVRo3u3aS3PaMBAAYGNsuHoy0+TKTJv6SjNNfeWSciVNJlydF7qGl/n7JTGSd1e7wgaFaWfMKfFD1qeXV5KD8cb8kuC//rWSVtJKWkkraSWtpJW0klbSSlpJK2klraSV/KuSbw9qe8HsfnCyfHVuZu95Kmb3iUdJ+KAvKf7gM119vDoUb8Bv9gLsu2PD97+n4O/tr1/+OzHXXiqTRjHyJukqkLcndKqnDw94yTYfty7JoyD5jtIYeZJ0FEr2Fp670EcnkgScYiRrXkJLI/EjyUjOhtzduSwpBrJEJ4YloSJJPHqRRDRnK3DSPHIpS8w5TjLnJJlVGIkPydjKWdVsw+pZDokueE5SMJKunULuQcIky5a/S7KQJbtiQZLUTmHlQcIkW13YYyqKkRQOycKWKNcjD5dwyebMYJA7JLscspLCknAJgLHxUEnEJbtkmAuXZC5LysqEEq4V1OkoeySm/bxenf22ujd41NolWTskCyoxxfNydXajrL55qCSDXe4LeaNHdl8wkiLofP2NxwNeUhBJiKKJiBbUwRKFBtIxbrVlha3wCzMGGYzROMxLPhIDkhjn/aOtFa93x0o6uHJ1Cb3Bce1NoZYMJabN5w7JEkv6uLSibQT+w0PcFZGhQyFYmZ18CnVY0q0hKbAks6JrL1F9j4S6Gar50jVK0csLSTR97pC85x9IprW7+CESU0B9psCTHroGS8ZgwJAkSyRRqAF7k/TJyIFkWhCjesOSC5CAJNk+GEjqvwobSVIS9sRwVO3vzoXo2TEXGhZOSQ4knUazq/qSDMXe1QgAbp3rBpFzkl4dyQpIurBnqibhilsyJo2WeU6us7U8WLIZ2JLgkyUhkFSNKoN5x5K4liSvJNEnSaZE0gG5ic1dfThFaSTRQ9vpJbBOqsE3hp20kUS/r9JPl0itKzGjwbrqPXlzia5jdXIJ7I+qCsrhFKVRjyeLD6DHJ54lrlEYVIQC789mkliSDD1LUhIEgTdjJEzXm0nw7Bq840eeJY5opSesBrHv+LUoyQTJ5BgJM113RJCpMNnGknSfJKYSGEH6l3BR/dS+4c2WwBidlaDmxUX1oR+JMNNa8MtHK0vSgUZekhIJnWl5kpDZb7fKGLM2iebuBZqp5bIk3rBTepN1TxJT8gO00jJhO3x5FZSYDYuJLKGdgaxI6P9BwxuZgyt4cI8kYxrOR4770kphJTm7VmhZSZCk+H68ShRcbjxJ4MrdNWxFY2mlMJaanSSJyAClwCN/Pmx8SaJ9zc46wUkWLglISl5NPV4irXCH7B1F0xVuvMXnWOH2IBF2HWLcLUE81mjXgWzRTODI7VvSdfafBZmBjRruBKHXp667jKvt5GiJsDuXkXBfmXbXaHeuPHGOJVzfHAXHS/gdU0W2Naam9BvtmJIdwIn0jnsKPEj4XWy6KlVFio12sXE5aElX2GY8VkJ2xx9hRSV2kByLW8WypEcilHNuI+l4Cf7a45ldLzZ5GVrfN4yC/ZKQhu6/ECTxJQnCKoK/s6cdqDfl5AscuIMjS/S/7Bc4z3SlR5DU+5VfRRWvp/sqKiy/iqr/IdZfF1HJgRmsN+0AAAAASUVORK5CYII="
				), a4G(18, "target", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEXUAADUISLWQkLMTQDZZmXAdwC0lADgiIioqQCWvgCE0QAA/wDnra1i6ADw0tL////afMd+AAAC6klEQVRIx42WTWgTURCApzFNY2lLBKEX0dy8iA0UxB8CKgUv0gaKBS2B3HOJnkUDQrENQi6KEITcgydR0l0CUYReJBZCi3YpaC+9FANS6GXZ5+6+eT+z+1adS/ImX97Mzs4f2ET2916vPV9/61At6Ifeq2UIZWXDSYK+IxLIlY4Z+ga6jL8xQbsFoFQrDtF7QqoThaxSDIKsE4HqYJAyhXZNDJxq6VCvZIQgq0NDSJCGgnqFJCiroB2lHTvjS06dWxJSHl0cjBjztm5JxXUBdaXqro8E4j2UD+gg1BamFpkQ75GgVjkkn/8SU+LVUHmaQx/wmB5pEHNzyh4oa08ZkU+oroZQhR8mKMO8PNdPBpBlvoixA67PBBC6lI4yzJVOgb3Nv1+OQawm3h9gJo19jUPHHLrhQ4UEazIKkzZYHJoRvxwuLAzE95voOWzyO5dQ/zkw/QQPfe65DfhwGO2T8JBCB39zqAM8l1Ij3QBMkSC0YFsP94nIB/4fj3vegLb+175IkCX94io0w8/zXJkX0IwezjLUNciTKZrWoSJCF4hLvlCookHHChppPhaB5+7c36BpvOm/oH+Y0x13VSFTx5vGEEzQOPGInyO5KPOUR3yVvrsDIFWBBVOFoR5hlwYczTfgPUmVj1y9SJKiBdhSMM3c0ItZzMwfWFMifeeYomZHpKb89MVWOCWr++hXpNCzfkmViFO6oEvTPtROaAWM/RRtDOx3QO0pyYveCjZ6HreH1saDhiGaeKxj9GUrBzl70iNj54FiCA3BeFVNtXsfEq2Odh/xrjPYxyuG9nuU00YC6DPqrKTcvD6nAshSNclbk3coR1BGDqCmpFJ3Hg++bN2OTNgQ6uojTh9kfP7g5KwnDcWiNl67CQy/SEzzhKvKZORvGqdwxqHLw47JWCOyYfSexaEHsYUmvj9cM6xG1jJlrjqmJcsiFu875nWt91I+4/yLxMXP3lu753PzK+tO8nYY3LbvS2SDtP8A+ntynBIvYeAAAAAASUVORK5CYII="
				), a4G(19, "members", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
				), a4G(20, "hourglass", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
				), a4G(21, "stalemate", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAeoAAABABAMAAAAnsyk1AAAAElBMVEUAAAA8PjxeYF2Rk5C6vLn////ACCfyAAAFMklEQVRo3uXby3qjIBQAYBEfwO+buM9c3Ntp2ZOZ8ADx8v6vMp2qybmBCK6SbNomEc4vcAS0RbG+1Iebvl5/vxev8lIf0+M1nl8DXboJvd5eET1N3QuoGfoVOvlp4q/+6fv3JL2evY83orp/uVH9NbLrp0braXrBLt541LenVpsH9Ao7+/DUc1E0kuF85ZkHdokHMriMPfNEpbo39fx3e1fbV1D3NKVb8KEn1TkpCShvbxET50gvnzdaDG4A520mfhHSvg+oWsHaN9QlCf0Ydc+vqFYqfUk8SeqGNpcDtW+oKzEJ5KqHghYO1ZrOKPLUa842oPYNdbPRGmnqka+JrDAi13eT1Cd6jj9LuV7ff/+g51tQG3FOk6sWei5Qt3Qo5I1raVG9oXbinCZb3dFTCtWszlz1ZwRve9Qli/0YtfW8QzP73CmS1OQD7A6r0aHn49QXxrPyWqlLVrM9BegOqxt5iZat7tleh5UjsslqYXk91HFqIy/RstWDzOOjuE9XC0eNXZQana/hOPUYUBtWZ5q6CmwpBNWlEHykug9v6NQUY8VkNu/3RKlH/1KTs4NqciLPx6k72qjWs/HTJavlw/C1Wwz35Nlxyldb6Q2pGay0OyJNX8fIneFhM9ylmhFeb45RX2gPtKSFRmGXa6e6+LW5WyiGuwTaO3KactTj+nGJdJbQBsebZq9a3hseNsJdcdaRgnPUw1q1FtVq+drNcMxudSmyz+Fw1xK7luyzZandEuM8gP8SyFqnbXkNu9Uy+xIOd00s54YMiZ3X65qrP9+bv/pOIGudXcWFJrwYl4auxB7C6jWx1DSCLLVZDpx//iRFrwXUmqezBHVRfPji8anvw1mTz7LUzRL4/Pc3ArkP55K3TJI6eOteUKv7O4qMnSz13HHsnLZGjSHqkbodG69p6qL45nxzAEEN+pjDfSNLPRfbl/CveyTlIwrDqkhV0/a+hdRgNBtcXJYacXuiBnW2jJCuxjOWPqRu+YajPUA9HzwuHZ2oG77ddztEDWe6Q0htHkFXvh31BPXySyuqQbeuWIz71OWP948rOLyNUsMUpvH389Rz8MsFjKgduA3Jph971C2bvegoNZSWGJCnhivAGquhVLE68tTKxagraVOlO0ANd6oLrEYTA0dH6R51w0OMUouLcps/D8d5BavFk3ZJmYdXPLWZGLXxP7eUpy5hcVhtgkvDNPWlEG7v+cJVgcVpnlrBZtTe+wJ8v26PmucuFTNL0YGntfLUwGaxWt7zua8W9qgVu3rrmBlpFXhaK1NtQGlIrcNPiO1aXzva2CZm9eF5XMseoG5BKyL1Sa7zkqIGKeIPKTuw0jSBmwPK+1GU+gQiRWpPnX2KGp7B8ffPa9SugpzMlkMi1LyLOv6kwEDUnjrHvdfr/6H4HqhE+xRU7UksczrLVGtQF1QrX5x1gtp3CtHahKq990TO+WolNIkNPO+6xrlP7btjMgbSUOOLwOar781gsfoUqnO3Wm93cKY25MxoeFCu2vD7VBa0zkhv2fQpal9urANq55vZDAeowV63Fm58DXR6OCSpq+AFQVKXrD84aRGYqG74yt2CUns206hT1GI+w/8KQNTV5Ln/9NVAuepKVGt2pg1OZ3vVenNziagb9q12ElolUa0fVQE1P9PNJK/IItVCerwEp5KGTTkbUGKuuuSZFmyKPs505QkqVs3Yf8ITaMeGAZxQ5aqX3y1WO5ZlNZ5E7lfjjfCxK4Lqkl/S4YT3IHWH1IrXWeIclKD+LGP9T+Tr8/9r6j/yRPVUqj3rEAAAAABJRU5ErkJggg=="
				)
		}
	}, this.get = function(cm) {
		return dL[cm]
	}, this.sT = function(name) {
		for (var aE = cj.length - 1; 0 <= aE; aE--)
			if (cj[aE] === name) return dL[aE];
		return a4D
	}, this.cr = function() {
		return 0 === a4C
	}
}

function rZ() {
	var a4R, a4S, a4T, a4U, a4V, a4W, a4X, a4Y, a4Z, a4a, a4b, a4O = [224, 224, 224],
		a4P = [
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
		a4Q = [
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

	function a4y(bc, a50) {
		a05[bc] = 0, a05[bc + 1] = 0, a05[bc + 2] = a50, a05[bc + 3] = 0, a51(bc)
	}

	function a51(bc) {
		var hD;
		iI.iJ || (hD = bW.hN(bc), bc = bW.d6(bc), iI.iJ = hD >= i8.a04[0] && hD <= i8.a04[2] && bc >= i8.a04[1] && bc <= i8.a04[3])
	}
	this.b = function(nH) {
		if (a4R = new Uint8Array(bZ), a4S = new Uint8Array(bZ), a4T = new Uint8Array(bZ), a4U = new Uint8Array(bZ), a4V = new Uint8Array(bZ), a4W = new Uint8Array(bZ), a4X = new Uint8Array(bZ), a4Y = new Uint8Array(bZ), a4Z = new Uint8Array(bZ),
			a4a = new Uint8Array(bZ), this.wn = new Uint8Array(bZ), (a4b = new Int32Array(4))[0] = -4 * az.b0, a4b[1] = 4, a4b[2] = -a4b[0], a4b[3] = -a4b[1], cS)
			for (var ca, fV, aE = bZ - 1; 0 <= aE; aE--) fV = fW.oE[fW.fX[aE]], ca = bJ((a4Q[fV][3] + 1) * em.random(), em.value(100)), a4R[aE] = a4P[fV][0] + ca * a4Q[fV][0], a4S[aE] = a4P[fV][1] + ca * a4Q[fV][1], a4T[aE] = a4P[fV][2] + ca *
				a4Q[fV][2];
		else fr.fs && fr.ft.a4i ? function(ad) {
			var aE;
			for (aE = mW - 1; 0 <= aE; aE--) a4R[aE] = 4 * ad[aE][0], a4S[aE] = 4 * ad[aE][1], a4T[aE] = 4 * ad[aE][2]
		}(fr.ft.a4i) : (function() {
			for (var aE = bZ - 1; e5 <= aE; aE--) a4R[aE] = 4 * bJ(64 * em.random(), em.value(100)), a4S[aE] = 4 * bJ(64 * em.random(), em.value(100)), a4T[aE] = 4 * bJ(64 * em.random(), em.value(100))
		}(), function(nH) {
			for (var aE = e5 - 1; 0 <= aE; aE--) a4R[aE] = 4 * nH[aE].a3i[0], a4S[aE] = 4 * nH[aE].a3i[1], a4T[aE] = 4 * nH[aE].a3i[2]
		}(nH));
		! function() {
			var aE, be;
			for (aE = bZ - 1; 0 <= aE; aE--) be = bJ(a4R[aE] + a4S[aE] + a4T[aE], 3), a4R[aE] += a4s(be - a4R[aE], 2), a4S[aE] += a4s(be - a4S[aE], 2), a4T[aE] += a4s(be - a4T[aE], 2), a4R[aE] -= a4R[aE] % 4, a4S[aE] -= a4S[aE] % 4, a4T[aE] -=
				a4T[aE] % 4
		}(),
		function() {
			for (var aE = bZ - 1; 0 <= aE; aE--) a4R[aE] += bJ(aE, 128), a4S[aE] += bJ(aE % 128, 32), a4T[aE] += bJ(aE % 32, 8), a4U[aE] = aE % 8
		}(), this.a4o(),
			function() {
				for (var aE = bZ - 1; 0 <= aE; aE--) a4V[aE] = a4R[aE] < 32 ? a4R[aE] + 32 : a4R[aE] - 32, a4W[aE] = a4S[aE] < 32 ? a4S[aE] + 32 : a4S[aE] - 32, a4X[aE] = a4T[aE] < 32 ? a4T[aE] + 32 : a4T[aE] - 32
			}(),
			function() {
				for (var aE = bZ - 1; 0 <= aE; aE--) a4Y[aE] = 235 < a4R[aE] ? a4R[aE] - 20 : a4R[aE] + 20, a4Z[aE] = 235 < a4S[aE] ? a4S[aE] - 20 : a4S[aE] + 20, a4a[aE] = 235 < a4T[aE] ? a4T[aE] - 20 : a4T[aE] + 20
			}()
	}, this.a4r = function(player) {
		var ad = eU.aY;
		return ad[0] = a4R[player], ad[1] = a4S[player], ad[2] = a4T[player], ad
	}, this.a4o = function() {
		for (var aE = bZ - 1; 0 <= aE; aE--) this.wn[aE] = a4R[aE] + a4S[aE] + a4T[aE] < 280 ? 0 : 1
	}, this.hN = function(bc) {
		return bJ(bc, 4) % az.b0
	}, this.d6 = function(bc) {
		return bJ(bc, 4 * az.b0)
	}, this.md = function(hD, hE) {
		return Math.floor(4 * (hE * az.b0 + hD))
	}, this.ms = function(bc) {
		return this.m9(bc + a4b[0]) || this.m9(bc + a4b[1]) || this.m9(bc + a4b[2]) || this.m9(bc + a4b[3])
	}, this.mq = function(bc, player) {
		return this.a4t(bc + a4b[0], player) || this.a4t(bc + a4b[1], player) || this.a4t(bc + a4b[2], player) || this.a4t(bc + a4b[3], player)
	}, this.sk = function(player) {
		return player < e5 && 2 !== e7[player]
	}, this.bf = function(bc) {
		return 208 <= a05[bc + 3]
	}, this.mx = function(player, bc) {
		return this.bf(bc) && this.a4u(player, bc)
	}, this.a4u = function(player, bc) {
		return player === this.bg(bc)
	}, this.a4v = function(bc) {
		return 208 <= a05[bc + 3] && a05[bc + 3] < 224
	}, this.eg = function(bc) {
		return 224 <= a05[bc + 3] && a05[bc + 3] < 248
	}, this.mr = function(bc) {
		for (var aE = 3; 0 <= aE; aE--)
			if (this.sm(bc + a4b[aE])) return !0;
		return !1
	}, this.a4w = function(bc) {
		return 192 <= a05[bc + 3] && a05[bc + 3] < 208
	}, this.a4x = function(bc, player) {
		return this.a4w(bc) && player === this.bg(bc)
	}, this.bX = function(bc) {
		return this.bf(bc) || this.bh(bc)
	}, this.sm = function(bc) {
		return 0 === a05[bc + 3] && 2 === a05[bc + 2]
	}, this.bh = function(bc) {
		return 0 === a05[bc + 3] && 1 === a05[bc + 2]
	}, this.m9 = function(bc) {
		return 0 === a05[bc + 3] && 3 === a05[bc + 2]
	}, this.sl = function(bc) {
		return this.m9(bc)
	}, this.a4t = function(bc, player) {
		return this.bh(bc) || this.bf(bc) && player !== this.bg(bc)
	}, this.bg = function(bc) {
		return a05[bc] % 4 * 128 + a05[bc + 1] % 4 * 32 + a05[bc + 2] % 4 * 8 + a05[bc + 3] % 8
	}, this.my = function(bc) {
		a4y(bc, 1)
	}, this.a4z = function(bc) {
		a4y(bc, 2)
	}, this.mp = function(bc, player) {
		a05[bc] = a4R[player], a05[bc + 1] = a4S[player], a05[bc + 2] = a4T[player], a05[bc + 3] = 208 + a4U[player], a51(bc)
	}, this.bY = function(bc, player) {
		a05[bc] = a4V[player], a05[bc + 1] = a4W[player], a05[bc + 2] = a4X[player], a05[bc + 3] = 224 + a4U[player], a51(bc)
	}, this.eh = function(bc, player) {
		a05[bc] = a4Y[player], a05[bc + 1] = a4Z[player], a05[bc + 2] = a4a[player], a05[bc + 3] = 248 + a4U[player], a51(bc)
	}, this.a52 = function(bc, player) {
		a05[bc] = a4O[0] + a4R[player] % 4, a05[bc + 1] = a4O[1] + a4S[player] % 4, a05[bc + 2] = a4O[2] + a4T[player] % 4, a05[bc + 3] = 192 + a4U[player], a51(bc)
	}
}

function ra() {
	var cj, bS, bU, aA, a53;

	function a58() {
		for (var a5D = 0, aE = 1; aE < 5; aE++) a5D += bS[aE] % 1024;
		return a5D
	}

	function a57() {
		for (var aE = 1; aE < bU - a53; aE++) bS[aE] = parseInt(bS[aE])
	}

	function a59() {
		bS[0] = "Player " + Math.floor(1e3 * Math.random()), bS[1] = a1 < a2 ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, bS[2] = 1, bS[3] = 1, bS[4] = a1 < a2 ? 0 : 1, bS[5] = 0, bS[6] = "000", bS[7] = "0", bS[8] = "0", bS[9] = "0",
			r.a8()
	}

	function a56() {
		for (var aE = bU - a53 - 1; 0 <= aE; aE--) bS[aE] = w.x(bS[aE]);
		bS[0] = w.nk(bS[0])
	}

	function a5G(name, value, a5H) {
		var a5I = new Date,
			a5H = (a5I.setTime(a5I.getTime() + Math.floor(31536e6 * a5H)), name + "=" + value + ";expires=" + a5I.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = a5H
	}
	this.b = function() {
		if (!(5 <= q || m)) {
			a53 = 4, cj = [], bU = 10;
			for (var aE = aA = 0; aE < bU; aE++) cj.push("u" + aE);
			bS = new Array(bU), ! function(a5E) {
				for (var ej, bc, a5F = a5E.split(";"), aE = a5F.length - 1; 0 <= aE; aE--) {
					for (a5F[aE] = a5F[aE].trim(), ej = 2; 0 <= ej; ej--) a5F[aE] = a5F[aE].replace(" ", "");
					3 < a5F[aE].length && (ej = cj.indexOf(a5F[aE].substring(0, 2)), bc = a5F[aE].indexOf("="), 0 <= ej && 2 === bc ? bS[ej] = a5F[aE].substring(bc + 1, a5F[aE].length) : 0 < bc && a5G(a5F[aE].substring(0, bc), "0", 0))
				}
			}(document.cookie), bS[9] || (bS[9] = "0"), (! function() {
				for (var aE = bU - 1; 0 <= aE; aE--)
					if (void 0 === bS[aE]) return;
				return 1
			}() || (aA = 2, a56(), a57(), a58() !== bS[5])) && a59()
		}
	}, this.a8 = function() {
		if (2 === aA) {
			bS[1] = 0 === bS[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : bS[1], bS[5] = a58(), ! function() {
				for (var aE = 1; aE < bU - a53; aE++) bS[aE] = bS[aE].toString()
			}(), ! function() {
				bS[0] = w.nj(bS[0]);
				for (var aE = bU - a53 - 1; 0 <= aE; aE--) bS[aE] = w.a9(bS[aE])
			}();
			for (var aE = bU - 1; 0 <= aE; aE--) a5G(cj[aE], bS[aE], 1);
			a56(), a57()
		}
	}, this.aA = function() {
		return aA
	}, this.ug = function(ej) {
		aA = ej, this.a8()
	}, this.a7 = function(aE, value) {
		5 <= q || m || (bS[aE] = value)
	}, this.s = function(aE) {
		return 5 <= q || m ? 0 : bS[aE]
	}
}

function rx() {
	var cm = 0,
		a5J = new Uint16Array(32);

	function remove(sW) {
		var aE;
		for (cm -= 2, aE = sW; aE < cm; aE += 2) a5J[aE] = a5J[aE + 2], a5J[aE + 1] = a5J[aE + 3]
	}
	this.b = function() {
		cm = 0
	}, this.fF = function() {
		var aE, ed, eA;
		if (0 !== cm)
			if (0 === e6[bN] || b5.a5K(bN) === b5.b6(bN)) cm = 0;
			else
				for (aE = cm - 2; 0 <= aE; aE -= 2)(ed = a5J[aE]) < bZ && 0 === e6[ed] ? remove(aE) : (eA = a5J[aE + 1], (bZ <= ed && sn(bN) || ed < bZ && ss(bN, ed)) && (cc.cd.ce(eA, ed), remove(aE)))
	}, this.se = function(ed, eA) {
		! function(ed, eA) {
			var aE;
			for (aE = 0; aE < cm; aE += 2)
				if (a5J[aE] === ed) return a5J[aE + 1] = Math.min(a5J[aE + 1] + eA, 1023), 1;
			return
		}(ed, eA) && 32 !== cm && (a5J[cm] = ed, a5J[cm + 1] = eA, cm += 2)
	}
}

function a5M(player) {
	a5N(player), a5O(player), a5P(player), bL.bM(player), gK.h8(player), b5.lQ(player), eO.a5Q.a5R(player)
}

function a5N(player) {
	bW.sk(player) && o5++;
	var a5S = b5.a5T(player);
	0 === a5S.length ? player === bN && a5U() : (a5V(player, a5S), a5W(player, a5S))
}

function a5U() {
	bR.bS[17] += bO[bN] + b5.a5X(bN), gZ.show(!1, !1, !1, !0), g9.zY()
}

function a5V(player, a5S) {
	for (var aE = a5S.length - 1; 0 <= aE; aE--) b5.a5Y(a5S[aE], player)
}

function a5Z(a5S) {
	for (var cm = 0, aE = a5S.length - 1; 1 <= aE; aE--) bv[a5S[aE]] > bv[a5S[cm]] && (cm = aE);
	return cm
}

function a5W(player, a5S) {
	var aE, uI, a5a = a5S[a5Z(a5S)];
	if (9 === fv && 1 === fW.fX[player] && em.fP(8) && g1.a5b(a5a), player === bN) 2 !== e7[player] && g7.nv(a5a, 1), a5U();
	else {
		for (uI = !1, aE = a5S.length - 1; 0 <= aE; aE--)
			if (a5S[aE] === bN) return uI = !0, void g7.nv(player, 0);
		!uI && player < e5 && 2 !== e7[player] && g7.tx(0, player, a5a)
	}
}

function a5P(player) {
	e6[player] = bO[player] = 0, bV[player] = null, bn[player] = null, bo[player] = null, br[player] = null, gI.a5c(player)
}

function a5O(player) {
	for (var bc, hE, hD = f2[player]; hD >= f3[player]; hD--)
		for (hE = f5[player]; hE >= f6[player]; hE--) bc = 4 * (hE * az.b0 + hD), bW.mx(player, bc) && (bW.my(bc), bv[player]--)
}

function s3() {
	var input;

	function a5d(oX) {
		a5f(oX.target.files)
	}

	function a5f(files) {
		files && 0 < files.length && pN.a5g(files[0])
	}

	function a5l(oX) {
		var fV = new Image;
		fV.onload = a5m, fV.src = oX.target.result
	}

	function a5m(oX) {
		var a5n, oX = oX.target,
			cu = oX.width,
			ez = oX.height;
		4096 < cu || 4096 < ez || cu < 10 || ez < 10 ? (a5n = "Image w & h must be between 10 and 4096.", n ? n.showToast(a5n) : alert(a5n)) : (fr.pI(), az.mJ = az.xD(), az.a39 = 0, az.b0 = cu, az.b1 = ez, az.lv.width = az.b0, az.lv.height = az.b1,
			az.lr.drawImage(oX, 0, 0), a5n = az.lr.getImageData(0, 0, az.b0, az.b1), az.lw = a5n.data)
	}

	function a5o(oX) {
		oX.stopPropagation(), oX.preventDefault()
	}

	function a5p() {
		return 0 === aT.pT() || 2 === aT.pT()
	}
	this.b = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = a5d
	}, this.a3k = function() {
		input.click()
	}, this.a5e = function(oX) {
		a5d(oX)
	}, this.a5g = function(a5h) {
		var ad = a5h.name.split("."),
			a5i = ad[ad.length - 1].toLowerCase();
		"json" === a5i ? fr.a5k(a5h) : "gif" !== a5i && "jpg" !== a5i && "jpeg" !== a5i && "png" !== a5i || (az.ft.mI[az.xD()].name = ad[0], (a5i = new FileReader).onload = a5l, a5i.readAsDataURL(a5h))
	}, this.ou = function(oX) {
		a5p() && (a5o(oX), oX.dataTransfer.dropEffect = "copy")
	}, this.ov = function(oX) {
		a5p() && (a5o(oX), a5f(oX.dataTransfer.files))
	}
}

function s1() {
	this.a5q = null, this.b = function() {
		this.a5q = 10 !== fv ? null : new Uint32Array(bZ)
	}, this.fF = function() {
		10 === fv && this.cU()
	}, this.cU = function() {
		for (var bc, target, zj, a5q = this.a5q, nH = fZ, q8 = bO, aE = fY - 1; 0 <= aE; aE--) bc = nH[aE], e5 <= bc || (target = Math.max(bJ(q8[bc], 4), 2048), zj = Math.max(bP.zk(bc), 100), a5q[bc] += bJ(zj * target, 1e4), a5q[bc] > target && (
			a5q[bc] = target))
	}, this.qE = function(player, ee) {
		return ee > this.a5q[player] ? (ee = this.a5q[player], this.a5q[player] = 0) : this.a5q[player] -= ee, ee
	}
}

function s4() {
	function a5l(oX) {
		fr.fs = !0, fr.a5w(JSON.parse(oX.target.result)), fr.vI()
	}

	function a62(v, min, max, a6B) {
		return "string" != typeof v || v.length < min ? a6B : v.length > max ? v.substring(0, max) : v
	}

	function a5x(aR, min, max) {
		return aR = "number" == typeof aR ? Math.floor(aR) : min, Math.min(Math.max(aR, min), max)
	}

	function a60(aR, a6D) {
		return "boolean" == typeof aR ? aR : a6D
	}

	function a64(aR, bU, max, a6E) {
		var aE, ad, ca;
		if (!Array.isArray(aR) || aR.length < 1) return null;
		for (ad = new(8 === a6E ? Uint8Array : Uint16Array)(bU), ca = aR.length, aE = 0; aE < bU; aE++) ad[aE] = a5x(aR[aE % ca], 0, max);
		return ad
	}
	this.fs = !1, this.ft = null, this.pI = function() {
		this.fs = !1, this.ft = null
	}, this.a3g = function() {
		this.ft.a4i && this.ft.a5r && (this.ft.a4i[0] = d4.tP[2].nz.a1M()), qW(this.ft.a5s, 0, this.a5t(), this.ft.qZ, !1, !1)
	}, this.a5t = function() {
		return [{
			name: this.ft.a5u ? qt.a3h() : this.ft.a5v[0],
			a3i: [0, 0, 0],
			a3j: 0
		}]
	}, this.a5k = function(a5h) {
		var a5j = new FileReader;
		a5j.onload = a5l, a5j.readAsText(a5h)
	}, this.a5w = function(tt) {
		this.ft = {}, this.ft.a3c = a5x(tt.numberPlayers, 1, 512), this.ft.a5y = a5x(tt.modeID, 0, 1), this.ft.mJ = a5x(tt["gMap.mapID"], 0, az.a5z - 1), this.ft.a3D = a5x(tt.seedMap, 0, 16383), this.ft.a5s = a5x(tt.seedSpawn, 0, 16383), this.ft
			.qc = a60(tt.selectableSpawn, !1), this.ft.a5u = a60(tt.selectableName, !1), this.ft.a5r = a60(tt.selectableColor, !1), az.ft.mI[az.xD()].name = this.ft.a61 = a62(tt.mapName, 1, 25, "Custom Map"), this.ft.tc = function(aR) {
				var aE, bU;
				if (!Array.isArray(aR) || aR.length < 1) return [];
				for (bU = aR.length, aE = 0; aE < bU; aE++) aR[aE] = a62(aR[aE], 0, 100, "");
				return aR
			}(tt.description), this.ft.mR = a64(tt.playerX, this.ft.a3c, 4096, 16), this.ft.mc = a64(tt.playerY, this.ft.a3c, 4096, 16), this.ft.a65 = a64(tt.playerTeam, this.ft.a3c, 8, 8), this.ft.fu = a64(tt.playerStrength, this.ft.a3c, 5, 8),
			this.ft.a4i = function(aR, bU) {
				var aE, ad, ca;
				if (!Array.isArray(aR) || aR.length < 1) return null;
				for (ad = new Array(bU), ca = aR.length, aE = 0; aE < bU; aE++) ad[aE] = a64(aR[aE % ca], 3, 63, 8);
				return ad
			}(tt.playerColor, this.ft.a3c), this.ft.a5v = function(aR, bU) {
				var aE, ad, ca;
				if (!Array.isArray(aR) || aR.length < 1) return null;
				for (ad = new Array(bU), ca = aR.length, aE = 0; aE < bU; aE++) ad[aE] = a62(aR[aE % ca], 3, 26, "Bot");
				return ad
			}(tt.playerName, this.ft.a3c), this.ft.a68 = "string" == typeof tt.mapBase64 ? tt.mapBase64 : "", this.ft.a5u = this.ft.a5u || !this.ft.a5v, this.ft.qZ = 0 === this.ft.a5y ? 7 : 2 === this.ft.a5y ? 9 : 6, this.ft.mR = this.ft.mc ?
			this.ft.mR : null
	}, this.vI = function() {
		! function(v) {
			var dL, dI, a6A = "data:image/png;base64,";
			if (v.length <= a6A.length) return;
			fr.ft.mJ = 0, fr.ft.a3D = 0, az.lc(0, 0), v.substring(0, a6A.length) !== a6A && (v = a6A + v);
			return (dL = new Image).onload = function() {
				az.b0 = dL.width, az.b1 = dL.height, 4096 < az.b0 || 4096 < az.b1 || az.b0 < 10 || az.b1 < 10 ? (az.lc(0, 0), alert("Image w & h must be between 10 and 4096.")) : (az.mJ = az.xD(), az.a39 = 0, az.lv.width = az.b0, az.lv
					.height = az.b1, az.lr.drawImage(dL, 0, 0), dI = az.lr.getImageData(0, 0, az.b0, az.b1), az.lw = dI.data)
			}, dL.src = v, fr.ft.a68 = "", 1
		}(this.ft.a68) && az.lc(this.ft.mJ, this.ft.a3D)
	}, this.a6F = function() {
		for (var max = 0, bU = this.ft.a3c, aE = 0; aE < bU; aE++) this.ft.a65[aE] > max && (max = this.ft.a65[aE]);
		return Math.max(0, max - 1)
	}
}

function rb() {
	var a6G, a6H, dF, ed, ee, id;

	function a6I(player) {
		return player < e5 ? a6G * player : a6G * e5 + a6H * (player - e5)
	}
	this.b = function() {
		a6G = e5 < 16 ? 12 : 8, a6H = 4;
		var bU = a6I(bZ);
		dF = new Uint8Array(bZ), ed = new Uint16Array(bU), ee = new Uint32Array(bU), id = new Uint16Array(bU)
	}, this.kX = function(wH, a6J) {
		var a6K = this.c9(wH, a6J);
		this.c8(wH, a6J, 0), a6K = cM.cN.jo(wH, a6K), wH === bN && (bR.bS[13] -= a6K)
	}, this.lQ = function(player) {
		dF[player] = 0
	}, this.a5Y = function(player, a6J) {
		var fd, a6J = function(player, a6J) {
			var aE, ca = a6I(player);
			for (aE = dF[player] - 1; 0 <= aE; aE--)
				if (0 === id[ca + aE] && ed[ca + aE] === a6J) return aE;
			return dF[player]
		}(player, a6J);
		a6J !== dF[player] && (fd = ee[a6I(player) + a6J], this.bT(player, a6J), this.ea(player, fd, bZ))
	}, this.es = function(player, a6J) {
		for (var ca = a6I(player), aE = dF[player] - 1; 0 <= aE; aE--)
			if (0 === id[ca + aE] && ed[ca + aE] === a6J) return !0;
		return !1
	}, this.cQ = function(player) {
		return player < e5 ? dF[player] < a6G : dF[player] < a6H
	}, this.b6 = function(player) {
		return dF[player]
	}, this.bC = function(player, aE) {
		return ed[a6I(player) + aE]
	}, this.b7 = function(player, aE) {
		return id[a6I(player) + aE]
	}, this.hQ = function(player, a6M) {
		for (var ca = a6I(player), aE = dF[player] - 1; 0 <= aE; aE--)
			if (id[ca + aE] === a6M) return aE;
		return -1
	}, this.bD = function(player, aE) {
		return ee[a6I(player) + aE]
	}, this.c9 = function(player, a6J) {
		for (var ca = a6I(player), aE = dF[player] - 1; 0 <= aE; aE--)
			if (0 === id[ca + aE] && ed[ca + aE] === a6J) return ee[ca + aE];
		return 0
	}, this.a5X = function(player) {
		for (var ca = a6I(player), aR = 0, aE = dF[player] - 1; 0 <= aE; aE--) aR += ee[ca + aE];
		return aR
	}, this.a6N = function(player) {
		for (var ca = a6I(player), aR = 0, aE = dF[player] - 1; 0 <= aE; aE--) 0 === id[ca + aE] && (aR += ee[ca + aE]);
		return aR
	}, this.a5K = function(player) {
		for (var ca = a6I(player), uH = 0, aE = dF[player] - 1; 0 <= aE; aE--) 0 < id[ca + aE] && uH++;
		return uH
	}, this.c8 = function(player, a6J, fd) {
		for (var ca = a6I(player), aE = dF[player] - 1; 0 <= aE; aE--) 0 === id[ca + aE] && ed[ca + aE] === a6J && (ee[ca + aE] = fd)
	}, this.bu = function(player, aE, fd) {
		ee[a6I(player) + aE] = fd
	}, this.ea = function(player, fd, a6J) {
		var aE, ca = a6I(player);
		for (a6J === bN && bR.bS[player < e5 ? 6 : 5]++, aE = dF[player] - 1; 0 <= aE; aE--)
			if (0 === id[ca + aE] && ed[ca + aE] === a6J) return ee[ca + aE] += fd, void(ee[ca + aE] = ee[ca + aE] > qA ? qA : ee[ca + aE]);
		ed[ca + dF[player]] = a6J, ee[ca + dF[player]] = fd, id[ca + dF[player]] = 0, dF[player]++, player < e5 && (a6J === bN ? g7.nv(player, 5) : player === bN && g8.tz(a6J))
	}, this.a6O = function(player, fd, a6M) {
		var ca = a6I(player);
		e6[player] = 2, ed[ca + dF[player]] = 0, ee[ca + dF[player]] = fd, id[ca + dF[player]] = a6M, dF[player]++
	}, this.bT = function(player, cm) {
		var ej, ca;
		if (0 !== dF[player])
			for (ca = a6I(player), dF[player]--, ej = cm; ej < dF[player]; ej++) ed[ca + ej] = ed[ca + ej + 1], ee[ca + ej] = ee[ca + ej + 1], id[ca + ej] = id[ca + ej + 1]
	}, this.a5T = function(player) {
		for (var ej, ca, a5S = [], aE = fY - 1; 0 <= aE; aE--)
			for (ca = a6I(fZ[aE]), ej = dF[fZ[aE]] - 1; 0 <= ej; ej--)
				if (0 === id[ca + ej] && ed[ca + ej] === player) {
					a5S.push(fZ[aE]);
					break
				} return a5S
	}
}

function rc() {
	var a6P, a6Q, a6R, a6S, a6T, a6U;
	this.b = function() {
		a6R = a6P = 10, a6S = a6Q = 10
	}, this.a6V = function() {
		a6U = 512, a6T = new Uint16Array(a6U);
		for (var aE = 0; aE < a6U; aE++) a6T[aE] = 100 + cD(bJ(25600 * aE, a6U - 4), 9)
	}, this.yT = function() {
		return a6S
	}, this.fF = function() {
		if (--a6R <= 0 && (a6R = a6P, function() {
				var aE, a6a, a3 = bO[bN];
				for (fx && !cS && 0 !== e6[0] && 0 === fy.fz[0].be && (bO[0] += bJ(bv[0], 6)), aE = fY - 1; 0 <= aE; aE--) a6a = bJ(bP.zk(fZ[aE]) * bO[fZ[aE]], 1e4), bO[fZ[aE]] += a6a < 1 ? 1 : a6a, bP.bQ(fZ[aE]);
				bR.bS[9] += bO[bN] - a3
			}(), --a6S <= 0)) {
			a6S = a6Q;
			for (var a3 = bO[bN], aE = fY - 1; 0 <= aE; aE--) bO[fZ[aE]] += bv[fZ[aE]], bP.bQ(fZ[aE]);
			bR.bS[8] += bO[bN] - a3
		}
	}, this.zk = function(player) {
		var dO = a6T[bJ((a6U - 1) * bv[player], qR)],
			a6Z = (aL.fU() < 1920 && (dO = dO < (a6Z = bJ(100 * (13440 - 6 * aL.fU()), 1920)) ? a6Z : dO), this.fJ(player));
		return bO[player] > a6Z && (dO -= bJ(2 * dO * (bO[player] - a6Z), a6Z)), dO < 0 ? 0 : 700 < dO ? 700 : dO
	}, this.fJ = function(player) {
		player = 100 * bv[player];
		return qS < player ? qS : player
	}, this.bQ = function(player) {
		var aR = bv[player] * q9;
		bO[player] = Math.min(Math.min(bO[player], qA), aR)
	}, this.jO = function(player, jP) {
		cM.cN.jo(jP, eU.aX[0]), bR.jp(player, jP), g8.a6c(player, eU.aX[0] + eU.aX[1]), g8.jq(jP, eU.aX[0]), cM.cN.kK(player)
	}
}

function rd() {
	var a6d, a6e, a6f, a6g, a6h, a6i, a6j, a6k, a6l, a6m, a6n, a6o, a6p, a6q, a6r, a6s, a6t, a6u, a6w, a6x, a6y, a6z, a70, a76, a77, a6v = null,
		a72 = 0,
		a73 = new Float32Array(4),
		a74 = 0,
		a75 = !0;

	function a79() {
		a6v.width = hL, a6v.height = d3, (a6w = a6v.getContext("2d", {
			alpha: !0
		})).textAlign = dA, a6w.textBaseline = d9, a6w.imageSmoothingEnabled = !0
	}

	function a7A() {
		var aE, a7E;
		for (d8.font = cn + Math.floor(100 * a6n) + co, a7E = 80 / Math.floor(d8.measureText(gR.hU(qA)).width), d8.font = cn + 100 + co, aE = bZ - 1; 0 <= aE; aE--) a6k[aE] = 100 / Math.floor(d8.measureText(hV[aE]).width), a6j[aE] = Math.min(a7E,
			a6k[aE])
	}

	function a7F(aE) {
		return !hR.hS.hT || bO[aE] < 1e6 ? 1 : bO[aE] < 1e7 ? a73[0] : a73[Math.min(Math.floor(Math.log10(bO[aE])) - 6, 3)]
	}

	function a7D(dM) {
		a6u = !1, a6t = 1, a6r = a6s = 0, a75 ? (dM.textAlign = dA, dM.textBaseline = d9) : dM.clearRect(0, 0, hL, d3);
		var hF, hG, aE, cs, hH, hI = eB / eC,
			hJ = eD / eC,
			hK = (hL + eB) / eC,
			hM = (d3 + eD) / eC,
			a7J = 0 !== e6[bN] && bW.sk(bN);
		dM.imageSmoothingEnabled = !0;
		for (var ej = fY - 1; 0 <= ej; ej--) aE = fZ[ej], (cs = a6q * eC * a7F(aE) * a6j[aE] * a6h[aE]) < a6p || a6l <= cs || a6f[aE] + a6h[aE] > hI && a6f[aE] < hK && a6g[aE] + a6i[aE] > hJ && a6g[aE] < hM && (hF = hL * (a6f[aE] + a6h[aE] / 2 -
			hI) / (hK - hI), hG = d3 * (a6g[aE] + a6i[aE] / 2 - hJ) / (hM - hJ) - .1 * cs, dM.font = vQ[e7[aE]] + cs + co, dM.fillStyle = function(cs, aE) {
				if (a6m <= cs && cs < a6l) return fW.a7W[bW.wn[aE]] + a7S(cs).toFixed(3) + ")";
				return fW.a7X[bW.wn[aE]]
			}(cs, aE), hR.hS.hT ? dM.fillText(gR.hU(bO[aE]), hF, hG) : a7L(aE, cs, hF, hG, dM), a6u = !0, 0 < a6y[aE] ? function(hF, hG, cs, aE, dM) {
				0 === yU[aE] ? aF.vK(a6x[aE]) ? (function(hF, hG, cs, player, jd, dM) {
					for (var t9 = .9 * cs / aF.cu, mV = hG - .5 * t9 * aF.cu - .05 * cs, dK = (dM.globalAlpha = a7S(cs), a7F(player) * (hR.hS.hT ? a74 : a6k[player])), mU = hF - .5 * cs / dK - .4 * cs - t9 * aF.cu, cV = 0; cV < 2; cV++)
						dM.setTransform(t9, 0, 0, t9, mU, mV), dM.drawImage(aF.sS[jd], 0, 0), mU = hF + .5 * cs / dK + .4 * cs;
					dM.globalAlpha = 1, dM.setTransform(1, 0, 0, 1, 0, 0)
				}(hF, hG, cs, aE, a6x[aE], dM), a7N(hF, hG, cs, 0, 0, dM)) : aF.vJ(a6x[aE]) ? (a7V(hF, hG, cs, a6x[aE], 0, dM), a7N(hF, hG, cs, 0, 1, dM)) : (a7V(hF, hG, cs, a6x[aE], 1, dM), a7N(hF, hG, cs, 1, 0, dM)) : a7V(hF, hG, cs, a6x[
					aE], 0, dM)
			}(hF, hG, cs, aE, dM) : 0 === yU[aE] && a7N(hF, hG, cs, 0, 0, dM), a7J && (0 < a6y[aE + bZ] || 0 < a6y[aE + 2 * bZ] || 0 < a6y[aE + 3 * bZ] || 0 < a6y[aE + 4 * bZ]) && function(hF, hG, cs, aE, dM) {
				var fV, uH = -1;
				for (fV = 4; 1 <= fV; fV--) 0 < a6y[aE + fV * bZ] && uH++;
				for (fV = 1; fV < 5; fV++) 0 < a6y[aE + fV * bZ] && (! function(hF, hG, cs, fV, aE, a7Q, a3, dM) {
					var t9 = .8 * cs / aF.cu,
						hF = hF - .5 * t9 * aF.cu - .534 * a7Q * cs,
						a7Q = hG + 1.4 * t9 * aF.cu;
					dM.setTransform(t9, 0, 0, t9, hF, a7Q), dM.globalAlpha = a7S(cs), hG = 1 === fV ? aF.sS[a6x[aE + bZ]] : 2 === fV ? n5.sO()[4].dL[a3 < 255 ? 1 : 0] : (3 === fV ? n5.sO()[5] : n5.sO()[6]).dL[0];
					dM.drawImage(hG, 0, 0), dM.globalAlpha = 1, dM.setTransform(1, 0, 0, 1, 0, 0)
				}(hF, hG, cs, fV, aE, uH, a6y[aE + fV * bZ], dM), uH -= 2)
			}(hF, hG, cs, aE, dM), (hH = a6n * cs) < a6p || (dM.font = cn + hH + co, hR.hS.hT ? a7L(aE, hH, hF, hG + .78 * cs, dM) : dM.fillText(gR.hU(bO[aE]), hF, hG + .78 * cs)));
		dM.imageSmoothingEnabled = !1
	}

	function a7L(aE, cs, hD, hE, dM) {
		dM.fillText(hV[aE], hD, hE), aE < e5 && 2 !== e7[aE] || (aE = cs / a6k[aE], dM.fillRect(hD - .5 * aE, hE + cM.iL.pu * cs, aE, Math.max(1, .1 * cs)))
	}

	function a7N(hF, hG, cs, a7Q, a7R, dM) {
		var t9 = .95 * cs / a70,
			hF = hF - .5 * t9 * a6z + .8 * a7Q * cs,
			a7Q = hG - 1.76 * t9 * a70 - .82 * a7R * cs;
		dM.setTransform(t9, 0, 0, t9, hF, a7Q), dM.globalAlpha = a7S(cs), dM.drawImage(cq.get(4), 0, 0), dM.globalAlpha = 1, dM.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a7V(hF, hG, cs, jd, a7Q, dM) {
		var t9 = 1.2 * cs / aF.cu,
			hF = hF - .5 * t9 * aF.cu - .8 * a7Q * cs,
			a7Q = hG - 1.5 * t9 * aF.cu;
		dM.setTransform(t9, 0, 0, t9, hF, a7Q), dM.globalAlpha = a7S(cs), dM.drawImage(aF.sS[jd], 0, 0), dM.globalAlpha = 1, dM.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a7S(cs) {
		return a6m <= cs && cs < a6l ? 1 - (cs - a6m) / (a6l - a6m) : 1
	}

	function a7g(dK, cu) {
		return 1 + Math.floor(a6o * dK * cu)
	}

	function a7d(aE) {
		for (var left = a6f[aE], ej = a6f[aE] - f3[aE] - 1; 0 <= ej; ej--)
			if (!a7i(aE, --left, a6g[aE], a6i[aE])) {
				left++;
				break
			} var lA = a6f[aE];
		for (ej = f2[aE] - a6f[aE] - a6h[aE]; 0 <= ej; ej--)
			if (!a7i(aE, ++lA + a6h[aE] - 1, a6g[aE], a6i[aE])) {
				lA--;
				break
			} var hD = Math.floor((left + lA) / 2),
			top = a6g[aE];
		for (ej = a6g[aE] - f6[aE] - 1; 0 <= ej; ej--)
			if (!a7j(aE, hD, --top, a6h[aE])) {
				top++;
				break
			} var bottom = a6g[aE];
		for (ej = f5[aE] - a6g[aE] - a6i[aE]; 0 <= ej; ej--)
			if (!a7j(aE, hD, ++bottom + a6i[aE] - 1, a6h[aE])) {
				bottom--;
				break
			} var hE = Math.floor((top + bottom) / 2);
		a7a(aE, hD, hE, a6h[aE], a6i[aE]) && (a6f[aE] = hD, a6g[aE] = hE)
	}

	function a7a(player, hD, hE, cu, ez) {
		be = Math.floor(.2 * cu);
		for (var be, fV = hD + cu - 1; hD <= fV; fV--)
			if (!a7i(player, fV, hE, ez)) return;
		for (fV = hE + ez - 1 - (be = (be = Math.floor(.25 * ez)) < 1 ? 1 : be); hE + be <= fV; fV--)
			if (!a7j(player, hD, fV, cu)) return;
		return 1
	}

	function a7i(player, hD, hE, ez) {
		return bW.mx(player, 4 * (hE * az.b0 + hD)) && bW.mx(player, 4 * ((hE + ez - 1) * az.b0 + hD))
	}

	function a7j(player, hD, hE, cu) {
		return bW.mx(player, 4 * (hE * az.b0 + hD)) && bW.mx(player, 4 * (hE * az.b0 + hD + cu - 1))
	}
	this.b = function() {
		if (a6u = !1, a6q = .88, a6n = .5, a6o = 1.8, a6l = Math.floor(.5 * vW), a6m = Math.floor(.2 * a6l), a6p = hR.hS.a78 < 4 ? 1 + hR.hS.a78 : 2 * (hR.hS.a78 - 1), a6e = a6d = 0, a6f = new Uint16Array(bZ), a6g = new Uint16Array(bZ), a6h =
			new Uint16Array(bZ), a6i = new Uint16Array(bZ), a6j = new Float32Array(bZ), a6k = new Float32Array(bZ), a6x = new Uint8Array(2 * bZ), a6y = new Uint8Array(5 * bZ), a76 = new Uint8Array(bZ), a77 = new Uint8Array(bZ), a75 || (a6v =
				a6v || document.createElement("canvas"), a79()), a6s = a6r = 0, a6t = 1, hR.hS.hT) {
			var aE, a7E;
			for (a7A(), d8.font = cn + Math.floor(100) + co, a7E = 100 / Math.floor(d8.measureText("900 000").width), aE = bZ - 1; 0 <= aE; aE--) a6j[aE] = Math.min(a7E, 2 * a6k[aE]);
			a74 = a7E, a73[0] = 100 / (a7E * Math.floor(d8.measureText("5 000 000").width)), a73[1] = 100 / (a7E * Math.floor(d8.measureText("50 000 000").width)), a73[2] = 100 / (a7E * Math.floor(d8.measureText("500 000 000").width)), a73[3] =
				100 / (a7E * Math.floor(d8.measureText("1 000 000 000").width))
		} else a7A();
		! function() {
			var aE;
			for (aE = bZ - 1; 0 <= aE; aE--) bv[aE] < 12 ? (a6f[aE] = f3[aE] + 1, a6g[aE] = f6[aE] + 1, a6h[aE] = 1, a6i[aE] = 1) : (a6f[aE] = f3[aE], a6g[aE] = f6[aE] + 1, a6h[aE] = 4, a6i[aE] = 2);
			if (hr)
				for (aE = 0; aE < e5; aE++) a6h[aE] = 0;
			a6z = cq.get(4).width, a70 = cq.get(4).height
		}()
	}, this.a6c = function(bc, uK) {
		uK > 18 * bv[bc] ? (a77[bc] = 6, bW.wn[bc] = 2 + bW.wn[bc] % 2) : (a76[bc] = 4, (bW.wn[bc] < 2 || 3 < bW.wn[bc]) && (bW.wn[bc] = 6 + bW.wn[bc] % 2))
	}, this.jq = function(bc, uK) {
		uK > 6 * bv[bc] ? (a77[bc] = 6, bW.wn[bc] = 4 + bW.wn[bc] % 2) : (a76[bc] = 4, (bW.wn[bc] < 4 || 5 < bW.wn[bc]) && (bW.wn[bc] = 8 + bW.wn[bc] % 2))
	}, this.resize = function() {
		a75 || (a79(), a7D(a6w))
	}, this.qN = function() {
		for (var aE = 0; aE < e5; aE++) f2[aE] - f3[aE] != 3 || f5[aE] - f6[aE] != 3 ? (a6f[aE] = f3[aE] + (f2[aE] !== f3[aE] ? 1 : 0), a6g[aE] = f6[aE], a6h[aE] = 1, a6i[aE] = 1) : (a6f[aE] = f3[aE], a6g[aE] = f6[aE] + 1, a6h[aE] = 4, a6i[aE] =
			2)
	}, this.kY = function(player, cm, a7G) {
		player += cm * bZ;
		if (0 === cm) return a6x[player] === a7G && 0 < a6y[player] ? void(a6y[player] = 0) : (a6x[player] = a7G, void(a6y[player] = aF.vK(a7G) ? 255 : 64));
		1 === cm ? (a6y[player] = 64, a6x[player] = a7G) : a6y[player] = a7G
	}, this.d7 = function() {
		a75 ? a7D(d8) : a6u && (1 !== a6t ? (d8.imageSmoothingEnabled = !0, d8.setTransform(a6t, 0, 0, a6t, 0, 0), d8.drawImage(a6v, -a6r / a6t, -a6s / a6t), d8.setTransform(1, 0, 0, 1, 0, 0)) : (d8.imageSmoothingEnabled = !1, d8.drawImage(a6v, -
			a6r, -a6s)))
	}, this.xf = function(dx, e0) {
		a6r += dx, a6s += e0
	}, this.om = function(dx, e0) {
		g8.xf(dx, e0)
	}, this.zoom = function(ci, d0, d1) {
		a6t *= ci, a6r = (a6r + d0) * ci - d0, a6s = (a6s + d1) * ci - d1
	}, this.gf = function(uV) {
		return !a75 && (uV ? ++a72 % hR.z1[hR.hS.a7H] == 0 : aL.fU() % hR.z1[hR.hS.a7H] == 0) && (a72 = 0, a7D(a6w), !0)
	}, this.hO = function(aE) {
		return a7F(aE) * a6j[aE]
	}, this.a7I = function(player) {
		return a6j[player]
	}, this.fF = function() {
		4 <= ++a6e && ! function() {
			var aE, ej, cV;
			for (a6e = 0, cV = 4; 1 <= cV; cV--)
				for (ej = fY - 1; 0 <= ej; ej--) aE = fZ[ej] + cV * bZ, 0 < a6y[aE] && a6y[aE] < 255 && a6y[aE]--;
			if (2 !== gg)
				for (ej = fY - 1; 0 <= ej; ej--) aE = fZ[ej], 0 < a6y[aE] && a6y[aE] < 255 && a6y[aE]--
		}();
		for (var bU = Math.floor(.1 * fY), aE = a6d + (bU = fY < (bU = bU < 8 ? 8 : bU) ? fY : bU) - 1; a6d <= aE; aE--) ! function(aE) {
			var dK = a7F(aE) * a6j[aE];
			0 < a6h[aE] && a7a(aE, a6f[aE], a6g[aE], a6h[aE], a6i[aE]) ? ! function(aE) {
				for (var hD, hE, cu, ez, dq = !1, cV = 0; cV < 8; cV++) {
					if (cu = a6h[aE] + 2, ez = a6i[aE] + 2, cu > f2[aE] - f3[aE] + 1 || ez > f5[aE] - f6[aE] + 1) return dq;
					if (hD = a6f[aE] - 1, hE = a6g[aE] - 1, !a7a(aE, hD, hE, cu, ez)) return dq;
					a6f[aE] = hD, a6g[aE] = hE, a6h[aE] = cu, a6i[aE] = ez, dq = !0
				}
				return dq
			}(aE) && function(aE, dK) {
				for (var hD, hE, cu, ez, dq = !1, a0o = a6h[aE], i4 = 1 + Math.floor(.02 * a0o), cV = 1; cV < 5; cV++) {
					if ((cu = a0o + cV * i4) > f2[aE] - f3[aE] + 1) return dq;
					if ((ez = a7g(dK, cu)) > f5[aE] - f6[aE] + 1) return dq;
					hD = f3[aE] + Math.floor(Math.random() * (f2[aE] - f3[aE] + 2 - cu)), hE = f6[aE] + Math.floor(Math.random() * (f5[aE] - f6[aE] + 2 - ez)), a7a(aE, hD, hE, cu, ez) && (a6f[aE] = hD, a6g[aE] = hE, a6h[aE] = cu, a6i[
						aE] = ez, dq = !0)
				}
				return dq
			}(aE, dK) && a7d(aE) : ! function(aE, dK) {
				var ez, hD = a6f[aE] + 1,
					hE = a6g[aE] + 1,
					cu = a6h[aE] - 2;
				for (;;) {
					if (cu < 1) {
						a6h[aE] = 0;
						break
					}
					if (ez = a7g(dK, cu), a7a(aE, hD, hE, cu, ez)) return a6f[aE] = hD, a6g[aE] = hE, a6h[aE] = cu, a6i[aE] = ez, 1;
					hD++, hE++, cu -= 2
				}
				return
			}(aE, dK) ? function(aE, dK) {
				var hD, hE, cu, ez, cV, iA, el = f2[aE] - f3[aE] + 1,
					a7h = Math.floor(.02 * el);
				for (iA = -6 * (a7h = a7h < 1 ? 1 : a7h), cV = el; iA <= cV; cV -= a7h)
					if (ez = a7g(dK, cu = 0 < cV ? cV : 1), hD = f3[aE] + Math.floor(Math.random() * (f2[aE] - f3[aE] + 2 - cu)), hE = f6[aE] + Math.floor(Math.random() * (f5[aE] - f6[aE] + 2 - ez)), a7a(aE, hD, hE, cu, ez)) return a6f[
						aE] = hD, a6g[aE] = hE, a6h[aE] = cu, a6i[aE] = ez
			}(aE, dK) : a7d(aE)
		}(fZ[aE % fY]);
		a6d = (a6d + bU) % fY
	}, this.gO = function() {
		var aE, bc, dZ, da;
		if (aL.fU() % 4 == 1)
			for (aE = fY - 1; 0 <= aE; aE--) bc = fZ[aE], bW.wn[bc] < 2 || ((dZ = Math.max(a76[bc] - 1, 0)) === (da = Math.max(a77[bc] - 1, 0)) ? 0 === dZ && (bW.wn[bc] %= 2) : 0 === da && bW.wn[bc] < 6 && (bW.wn[bc] += 4), a76[bc] = dZ, a77[
				bc] = da)
	}, this.tz = function(player) {
		var aE = player + 2 * bZ,
			a3 = a6y[aE];
		return 0 < a3 && (g7.nu(50, player), a6y[aE] = 0, 255 === a3)
	}, this.sq = function(player) {
		return 255 === a6y[player + 2 * bZ]
	}
}

function re() {
	var cj, a7k;
	this.b = function() {
		cj = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var aE, ej, a7l = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			a7m = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (a7k =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), aE = cj.length - 1; 0 <= aE; aE--)
			for (ej = a7l.length - 1; 0 <= ej; ej--) cj[aE] = cj[aE].replace(a7l[ej], a7m[ej]);
		if (settings.realisticNames) cj = realisticNames;
	}, this.lc = function() {
		var aE;
		if (fr.fs && fr.ft.a5v)
			for (aE = e5; aE < bZ; aE++) hV[aE] = fr.ft.a5v[aE % mW];
		else(9 === fv ? function() {
			var aE, dO = em.random(),
				bU = cj.length,
				ca = e5 + g1.a7s;
			for (aE = ca - 1; e5 <= aE; aE--) hV[aE] = cj[(aE + dO) % bU];
			for (bU = a7k.length, aE = ca; aE < bZ; aE++) hV[aE] = a7k[aE % bU]
		} : fx ? function() {
			var aE, dO = em.random();
			for (aE = e5; aE < bZ; aE++) hV[aE] = cj[(aE + dO) % bZ]
		} : function() {
			var aE, bU = cj.length,
				dO = em.random();
			for (aE = e5; aE < bZ; aE++) hV[aE] = cj[(aE + dO) % bU]
		})()
	}, this.qk = function() {
		var aE, bU, ca, dO;
		if (!fx) {
			for (ua = new Array(e5), bU = e5, aE = 0; aE < bU; aE++) ua[aE] = hV[aE];
			if (hR.hS.uZ) {
				for (ca = cj.length, dO = em.a7r(), aE = 0; aE < bU; aE++) hV[aE] = cj[(aE + dO) % ca];
				hV[bN] = ua[bN]
			}
		}
	}
}

function s2() {
	this.a7t = [], this.a7u = [], this.b = function() {
		this.a7t = [], this.a7u = []
	}, this.fF = function() {
		0 <= this.a7t.length && this.a7v(this.a7t), 0 <= this.a7u.length && this.a7v(this.a7u)
	}, this.a7v = function(ad) {
		for (var cV = -1, aE = ad.length - 1; 0 <= aE; aE--)
			if (ad[aE].aM--, ad[aE].aM <= 0) {
				cV = aE;
				break
			} for (aE = cV; 0 <= aE; aE--) ad.shift()
	}, this.sc = function(id, nH, a7w) {
		return this.a7x(this.a7t, id, nH, a7w)
	}, this.a7y = function(id, nH, a7w) {
		return this.a7x(this.a7u, id, nH, a7w)
	}, this.a7x = function(ad, id, nH, a7w) {
		return ! function(ad, id, nH) {
			var aE, mC;
			for (aE = nH.length - 1; 0 <= aE; aE--)
				for (mC = ad.length - 1; 0 <= mC; mC--)
					if (ad[mC].player === nH[aE] && id === ad[mC].id) return 1;
			return
		}(ad, id, nH) && (a7w && function(ad, id, nH) {
			var aE;
			for (aE = nH.length - 1; 0 <= aE; aE--) ad.push({
				player: nH[aE],
				id: id,
				aM: 384
			})
		}(ad, id, nH), !0)
	}
}

function qf(nH) {
	var aE;
	for (hV = new Array(bZ), ua = hV, e6 = new Uint8Array(bZ), f3 = new Uint16Array(bZ), f6 = new Uint16Array(bZ), f2 = new Uint16Array(bZ), f5 = new Uint16Array(bZ), bv = new Uint32Array(bZ), ml = new Uint32Array(bZ), bO = new Uint32Array(bZ),
		donationsTracker.reset(), bV = new Array(bZ), bn = new Array(bZ), bo = new Array(bZ), br = new Array(bZ), e7 = new Uint8Array(bZ), aE = nH.length - 1; 0 <= aE; aE--) hV[aE] = nH[aE].name, e7[aE] = nH[aE].a3j
}

function s0() {
	this.uk = 0, this.nH = null, this.b = function() {
		this.uk = 0, this.nH = []
	}, this.a81 = function(player) {
		this.nH.push(player), o5++, e7[player] = 2, player === bN && (gZ.show(!1, !1), g9.zY()), g8.tz(player)
	}, this.a5c = function(player) {
		var aE, nH;
		if (2 !== e7[player])
			for (aE = (nH = this.nH).length - 1; 0 <= aE; aE--)
				if (nH[aE] === player) return void nH.splice(aE, 1)
	}, this.fF = function() {
		fx || (30 === this.uk && 2140 <= aL.fU() && this.a82(), this.uk = (this.uk + 1) % 60)
	}, this.a82 = function() {
		for (var nH = this.nH, aE = nH.length - 1; 0 <= aE; aE--) ! function(player, eA) {
			!b5.cQ(player) || (eA = Math.max(Math.min(100, bO[player]), bJ(eA * bO[player], 100))) < 100 || (0 === bn[player].length ? !eO.fE.fF(player) && cS && fI(player, eA, 0, 0) : (cS ? fT : fc)(player, eA))
		}(nH[aE], 12)
	}
}

function rw() {
	var a84, a86;
	this.a2V = 5, this.a2W = this.a2V - 1, this.a1f = this.a2V + this.a2W, this.a1e = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.a85 = null;

	function a8E(aE) {
		return a86[aE].a89 && a84[aE].a8E()
	}

	function a8G(a1i) {
		a86[a1i].aM = aL.aM, a86[a1i].a8A = !1
	}
	this.p4 = 0, this.a2H = 0, this.b = function() {
		this.a85 = new Array(this.a2V);
		this.a85[0] = "territorial.io";
		var aE, a88 = em.a7r(0);
		for (em.qe(0), aE = 1; aE < this.a2V; aE++) this.a85[aE] = w.nm() + ".territorial.io";
		for (em.qe(a88), a84 = new Array(this.a1f), a86 = new Array(this.a1f), aE = this.a1f - 1; 0 <= aE; aE--) a86[aE] = {
			a89: !1,
			aM: 0,
			a8A: !1
		}
	}, this.uE = function() {
		return this.a2H < this.a2V ? this.a2H : this.a2H - this.a2W
	}, this.fF = function() {
		for (var aE = this.a1f - 1; 0 <= aE; aE--) this.a1a(aE) && aL.aM > a86[aE].aM + 15e3 && jK.a8B(aE, a86[aE].a8A)
	}, this.xx = function(a1i, a8C) {
		if (a86[a1i].a89) {
			if (a84[a1i].a8E()) return a84[a1i].a8F(a8C), a84[a1i].a1a();
			a84[a1i].lE()
		}
		return this.a8D(a1i, a8C), !1
	}, this.a8D = function(a1i, a8C) {
		a86[a1i].a89 = !0, a8G(a1i), a84[a1i] = new a8H, a84[a1i].b(a1i, a8C)
	}, this.a8F = function(a1i, a8C) {
		a8E(a1i) && a84[a1i].a8F(a8C)
	}, this.a8I = function(a1i, a8C) {
		0 === a8C ? pH.xz() : a8C < 3 ? jK.a0N(a1i, a8C - 1) : 3 === a8C ? jK.a3e(a1i) : 4 === a8C ? qw.xz(a1i) : 5 === a8C ? a1i === this.p4 && jK.a8J() : 6 !== a8C && 7 === a8C && jK.a48(a1i)
	}, this.a1a = function(aE) {
		return a86[aE].a89 && a84[aE].a1a()
	}, this.send = function(a1i, k8) {
		a8G(a1i), a84[a1i].send(k8)
	}, this.p3 = function(a1i) {
		a86[a1i].a8A = !0
	}, this.close = function(a1i, a8K) {
		a8E(a1i) && a84[a1i].close(a8K)
	}, this.a8L = function(a1i, a8K) {
		qx.a1l(a8K), a8E(a1i) && a84[a1i].close(a8K)
	}, this.a1n = function(a8K) {
		for (var aE = this.a1f - 1; 0 <= aE; aE--) this.close(aE, a8K)
	}, this.a8M = function(a1i, a8K) {
		for (var aE = this.a1f - 1; 0 <= aE; aE--) aE !== a1i && this.close(aE, a8K)
	}, this.a8N = function(a1i, oX) {
		a84[a1i].lE(), qx.b(a1i, oX.code)
	}
}

function ql() {
	for (fY = 0, aE = bZ - 1; 0 <= aE; aE--) 0 !== e6[aE] && fY++;
	fZ = new Uint16Array(fY);
	for (var bU = 0, aE = 0; aE < bZ; aE++) 0 !== e6[aE] && (fZ[bU++] = aE)
}

function gM() {
	a8O(), a8P()
}

function a8P() {
	for (var aE = fY - 1; 0 <= aE; aE--) 0 === e6[fZ[aE]] && a8Q(aE)
}

function a8Q(aE) {
	fY--;
	for (var ej = aE; ej < fY; ej++) fZ[ej] = fZ[ej + 1]
}

function a8O() {
	for (var de, aE = fY - 1; 0 <= aE; aE--) bv[fZ[aE]] <= bJ(ml[fZ[aE]], 4) ? bv[fZ[aE]] <= 1e3 && (2 !== e6[fZ[aE]] || 0 === bv[fZ[aE]]) && a5M(fZ[aE]) : bv[fZ[aE]] >= ml[fZ[aE]] ? ml[fZ[aE]] = bv[fZ[aE]] : (de = bJ(ml[fZ[aE]] - bv[fZ[aE]], 1e3),
		ml[fZ[aE]] -= de < 1 ? 1 : de)
}

function k3() {
	for (var a5D = 0, aE = fY - 1; 0 <= aE; aE--) a5D += bO[fZ[aE]];
	return a5D % 4096
}
var n4, a05, qm, qn, aN = 0,
	oe = 0;

function a8X() {
	a8W = 2, a8T = 2173, a8S = 10, a8R = "1.90.8   7 Feb 2024", a8Y(), rA(), fA();
	var a8Z = document.getElementById("usernameField");
	a8Z && document.body.removeChild(a8Z), n = "undefined" != typeof Android ? Android : null, 12 <= (q = n ? n.getVersion() : 0) && n.prepareAd("1688441405"), m = !1, window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers
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
		}), n || m || (r8.a8a += "_browser"), a8V = (new Date).getTime() % 1024, od = a8b(), r.b(), a26 = new a0p, hR.b(), ph.b(), z(), aQ(), a8c(), i8 = new a8d, iI = new a00, aF = new us, bR = new a8e, n6 = new a8f, a1v = new uc, (aL = new a8g)
	.b(), fW = new a8h, gU = new a8i, (a0W = new ch).b(), (d5 = new a06).b(), pQ = new a0e, vT(), em.b(), bP.a6V(), qh.b(), aT.b(), pN.b(), gB.b(), pH.b(), qj.b(), pB.b(), cq.b(), r5.b(), aO.b(), r7.a2T(), aL.cx = !0, setTimeout(function() {
			az.lc(2, 14071)
		}, 0), oe = 2
}

function aS() {
	oe || (oe = 1, oV(), a8X())
}

function a8b() {
	try {
		return window.self !== window.top
	} catch (oX) {
		return !0
	}
}

function a8c() {
	a8U = window.location.hostname, oc = 0 <= a8U.toLowerCase().indexOf("territorial.io")
}

function rf() {
	var a8j;
	this.g2 = null, this.b = function() {
		a8j = [], 9 === fv && this.a8k()
	}, this.a8k = function() {
		var aE, a8l = [45, 70, 95, 150, 190, 333];
		if (this.a7s = 0, this.g2 = [0, 0, 0, 0, 0, 0], e5 <= a8l[0]) this.g2[0] = Math.max(cA.cB(e5 * (512 - e5), a8l[0]), 16), fq = this.g2[0];
		else
			for (fq = bZ - e5, aE = 1; aE < 6; aE++)
				if (e5 <= a8l[aE]) {
					this.g2[aE - 1] = 512 - a8l[aE - 1] - bJ((512 - a8l[aE - 1]) * (e5 - a8l[aE - 1]), a8l[aE] - a8l[aE - 1]), this.g2[aE] = 512 - e5 - this.g2[aE - 1];
					break
				} mW = e5 + fq
	}, this.a5b = function(player) {
		a8j.push({
			player: player,
			uH: 14 + em.en(20)
		})
	}, this.fF = function() {
		var aE;
		if (9 === fv)
			for (aE = a8j.length - 1; 0 <= aE; aE--) --a8j[aE].uH <= 0 && (g8.kY(a8j[aE].player, 0, 46), a8j.splice(aE))
	}
}

function sE() {
	function a8q(aE) {
		return !(1 === aE || aE >= az.a8w())
	}
	this.b0 = 0, this.b1 = 0, this.lv = null, this.lr = null, this.ls = null, this.lw = null, this.mJ = 0, this.a39 = 0, this.lt = !1, this.a5z = 19, this.lu = new a8n, this.ft = new a8o, this.b = function() {
		this.ft.b()
	}, this.lc = function(a8p, a3D) {
		((a8p %= this.a5z) !== this.mJ || a8q(this.mJ) && a3D !== this.a39) && (this.lt = !1, this.lu.a3J(), em.qe(a8p), this.mJ = a8p, this.a39 = a3D, a8q(a8p) && (az.ft.mI[a8p].a88 = a3D), this.mJ >= az.a8w() ? a8s() : (a8p = az.ft.mI[this.mJ],
			this.b0 = a8p.cu, this.b1 = a8p.ez, em.qe(a8p.a88), qz.lc([this.b0, this.b1, a8p.ha, a8p.hX]), a8t(), qh.a8u(), qz.a8v()))
	}, this.a8w = function() {
		return 10
	}, this.a8x = function(aE) {
		return 3 === aE || 7 === aE || 9 === aE || aE === az.a5z
	}, this.a8y = function(aE) {
		return 2 === aE || 7 === aE || 9 === aE
	}, this.a8z = function(aE) {
		return 1 === aE
	}, this.xD = function() {
		return 19
	}
}

function a8n() {
	function a99() {
		az.lu.fF()
	}

	function a9E(bc, a9D) {
		0 < a9D && (az.lw[bc] += a9D, az.lw[bc + 1] += a9D, az.lw[bc + 2] += a9D)
	}

	function sm(bc) {
		return az.lw[bc + 2] > az.lw[bc] && az.lw[bc + 2] > az.lw[bc + 1]
	}
	this.xs = -1, this.j = 0, this.a90 = 0, this.a91 = 8, this.a92 = 32, this.a93 = 8, this.a94 = 32, this.a95 = [0, 0], this.wn = [0, 0, 0, 0], this.eP = null, this.a96 = !0, this.a97 = !1, this.a3J = function() {
		-1 !== this.xs && clearTimeout(this.xs), this.xs = -1, this.eP = null, qz.a8v()
	}, this.b = function() {
		7 === aT.pT() || this.a97 || (this.a96 = !0, this.j = 0, this.a90 = 1, this.a95 = [az.ft.mI[az.mJ].mH[0], az.ft.mI[az.mJ].mK[0]], this.wn = [az.ft.mI[az.mJ].a98[3], az.ft.mI[az.mJ].a98[4], az.ft.mI[az.mJ].a98[5], az.ft.mI[az.mJ].a98[6]],
			this.a91 = az.ft.mI[az.mJ].a98[7], this.a92 = az.ft.mI[az.mJ].a98[8], this.a93 = az.ft.mI[az.mJ].a98[9], this.a94 = az.ft.mI[az.mJ].a98[10], this.a96 ? this.xs = setTimeout(a99, 16) : this.fF())
	}, this.fF = function() {
		if (8 === aT.pT() && gY.ho()) this.xs = setTimeout(a99, 16);
		else {
			if (0 === this.j) {
				var a88 = em.a7r();
				if (em.qe(az.ft.mI[az.mJ].a98[2]), qz.lc([az.b0, az.b1, az.ft.mI[az.mJ].a98[0], az.ft.mI[az.mJ].a98[1]]), em.qe(a88), this.eP = qz.a9A(), this.j++, this.a96) return void(this.xs = setTimeout(a99, 16))
			}
			for (var bc, dg, a88 = this.a96 ? 10 : 1e6, a88 = az.b1 - this.a90 - 1 < a88 ? az.b1 - this.a90 - 1 : a88, mi = this.a90 + a88, hE = this.a90; hE < mi; hE++)
				for (var hD = 1; hD < az.b0 - 1; hD++) sm(bc = 4 * (dg = hD + hE * az.b0)) ? this.a9B(bc, dg, 1) : (this.a9B(bc, dg, 0), function(hD, hE, bc) {
					return 1 < hD && sm(bc - 4) || hD < az.b0 - 2 && sm(bc + 4) || 1 < hE && sm(bc - 4 * az.b0) || hE < az.b1 - 2 && sm(bc + 4 * az.b0)
				}(hD, hE, bc) && this.a9C(hD, hE));
			this.a90 = mi, this.a90 >= az.b1 - 1 ? (az.lr.putImageData(az.ls, 0, 0, 1, 1, az.b0 - 2, az.b1 - 2), aL.cx = !0, this.a3J()) : this.a96 && (this.xs = setTimeout(a99, 16))
		}
	}, this.a9B = function(bc, dg, cm) {
		a9E(bc, Math.floor(this.a95[cm] + this.wn[cm] * this.eP[dg] / 1e4) - az.lw[bc])
	}, this.a9F = function(bc, dO, a9G, cm, wn) {
		a9E(bc, Math.floor(this.a95[cm] + (1 - dO / a9G) * wn) - az.lw[bc])
	}, this.a9C = function(d0, d1) {
		for (var bc, dO, a9G, mN = d0 - this.a92, mO = d1 - this.a92, mj = d0 + this.a92, mi = d1 + this.a92, mN = mN < 1 ? 1 : mN, mj = mj > az.b0 - 2 ? az.b0 - 2 : mj, mi = mi > az.b1 - 2 ? az.b1 - 2 : mi, hE = mO < 1 ? 1 : mO; hE <= mi; hE++)
			for (var hD = mN; hD <= mj; hD++) sm(bc = 4 * (hD + hE * az.b0)) ? (a9G = this.a91 + (this.a92 - this.a91) * this.eP[hD + az.b0 * hE] / 1e4, Math.abs(d0 - hD) > a9G || Math.abs(d1 - hE) > a9G || a9G <= (dO = Math.sqrt((d0 - hD) * (
				d0 - hD) + (d1 - hE) * (d1 - hE))) || this.a9F(bc, dO, a9G, 1, this.wn[3])) : (a9G = this.a93 + (this.a94 - this.a93) * this.eP[hD + az.b0 * hE] / 1e4, Math.abs(d0 - hD) > a9G || Math.abs(d1 - hE) > a9G || a9G <= (dO = Math
				.sqrt((d0 - hD) * (d0 - hD) + (d1 - hE) * (d1 - hE))) || this.a9F(bc, dO, a9G, 0, this.wn[2]))
	}
}

function a8t() {
	2 === az.mJ ? a9H([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === az.mJ ? a9H([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === az.mJ ? a9H([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === az.mJ && a9H([
		512
	], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function a9H(a9I, a9J, a9K, a9L, a9M) {
	for (var hD, hE, a9O, a9P, ci, a9Q, dw = a9I.length - 1, a9N = az.b0 + az.b1, bU = (a9N *= a9N, a9K.length), aE = bU - 1; 0 <= aE; aE--) a9K[aE] *= a9K[aE];
	var a9R = new Array(bU),
		a9S = new Array(bU),
		a9T = new Array(bU),
		aR = qz.a9A();
	if (void 0 === a9M)
		for (a9M = new Array(bU), aE = bU - 1; 0 <= aE; aE--) a9M[aE] = 0;
	for (aE = 1; aE < bU; aE++) a9R[aE] = a9K[aE] - a9K[aE - 1], a9S[aE] = a9L[aE] - a9L[aE - 1], a9T[aE] = a9M[aE] - a9M[aE - 1];
	for (hD = az.b0 - 1; 0 <= hD; hD--)
		for (hE = az.b1 - 1; 0 <= hE; hE--) {
			for (a9O = a9N, aE = dw; 0 <= aE; aE--) a9O = (a9P = (hD - a9I[aE]) * (hD - a9I[aE]) + (hE - a9J[aE]) * (hE - a9J[aE])) < a9O ? a9P : a9O;
			for (ci = a9L[bU - 1], a9Q = a9M[bU - 1], aE = 1; aE < bU; aE++)
				if (a9O < a9K[aE]) {
					ci = a9L[aE - 1] + a4s((a9O - a9K[aE - 1]) * a9S[aE], a9R[aE]), a9Q = a9M[aE - 1] + a4s((a9O - a9K[aE - 1]) * a9T[aE], a9R[aE]);
					break
				} a9U(az.b0 * hE + hD, ci, a9Q, aR)
		}
}

function a9U(cm, ci, a9Q, aR) {
	ci < 500 ? aR[cm] = bJ(aR[cm] * ci * 2, 1e3) : 500 < ci && (aR[cm] += bJ(2 * (1e4 - aR[cm]) * (ci - 500), 1e3)), aR[cm] += bJ(a9Q * (10 * ci - aR[cm]), 1e3)
}

function rg() {
	var a9V;
	this.uR = 0, this.uS = 0, this.uT = 0, this.uU = 0, this.b = function() {
		(a9V = new Array(az.a8w()))[0] = {
			cu: [0, 5e3, 8e3, 1e4],
			dO: [220, 250, 255, 220],
			pv: [190, 220, 0, 0],
			cV: [170, 200, 0, 0]
		}, a9V[1] = {
			cu: [0, 4e3, 5e3, 6e3, 1e4],
			dO: [25, 0, 100, 0, 25],
			pv: [25, 0, 0, 0, 25],
			cV: [25, 0, 0, 0, 25]
		}, a9V[2] = {
			cu: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			dO: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			pv: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			cV: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, a9V[3] = {
			cu: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			dO: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			pv: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			cV: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, a9V[4] = {
			cu: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			dO: [10, 10, 20, 10, 10, 170, 212],
			pv: [20, 20, 60, 100, 100, 110, 170],
			cV: [70, 70, 160, 30, 30, 60, 120]
		}, a9V[5] = {
			cu: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			dO: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			pv: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			cV: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, a9V[6] = {
			cu: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			dO: [10, 10, 60, 255, 255, 200, 200],
			pv: [10, 10, 60, 255, 255, 200, 200],
			cV: [80, 80, 255, 255, 255, 200, 200]
		}, a9V[7] = {
			cu: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			dO: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			pv: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			cV: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, a9V[8] = {
			cu: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			dO: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			pv: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			cV: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, a9V[9] = {
			cu: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			dO: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			pv: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			cV: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}
	}, this.a8u = function() {
		var aE, ej, ae, dI = function() {
				var dI;
				return az.lv = document.createElement("canvas"), az.lv.width = az.b0, az.lv.height = az.b1, az.lr = az.lv.getContext("2d", {
					alpha: !1
				}), dI = az.lr.getImageData(0, 0, az.b0, az.b1), az.lw = dI.data, dI
			}(),
			cu = a9V[az.mJ].cu,
			dO = a9V[az.mJ].dO,
			pv = a9V[az.mJ].pv,
			cV = a9V[az.mJ].cV,
			aR = qz.a9A(),
			bU = cu.length - 2,
			a9Z = new Array(1 + bU),
			a9a = new Array(1 + bU),
			a9b = new Array(1 + bU),
			a9c = new Array(1 + bU);
		for (ej = bU; 0 <= ej; ej--) a9Z[ej] = cu[ej + 1] - cu[ej], a9a[ej] = dO[ej + 1] - dO[ej], a9b[ej] = pv[ej + 1] - pv[ej], a9c[ej] = cV[ej + 1] - cV[ej];
		for (aE = az.b0 * az.b1 - 1; 0 <= aE; aE--)
			for (ej = bU; 0 <= ej; ej--)
				if (aR[aE] >= cu[ej]) {
					ae = aR[aE] - cu[ej], az.lw[4 * aE] = dO[ej] + a4s(a9a[ej] * ae, a9Z[ej]), az.lw[4 * aE + 1] = pv[ej] + a4s(a9b[ej] * ae, a9Z[ej]), az.lw[4 * aE + 2] = cV[ej] + a4s(a9c[ej] * ae, a9Z[ej]), az.lw[4 * aE + 3] = 255;
					break
				} az.lr.putImageData(dI, 0, 0), az.a8z(az.mJ) && cq.cr() && az.a8z(az.mJ) && (dI = cq.sT("arena"), az.lr.save(), az.lr.globalAlpha = 1 === az.mJ ? .1 : 1, az.lr.imageSmoothingEnabled = !0, az.lr.scale(2.8, 2.8), az.lr.drawImage(
				dI, Math.floor((az.b0 / 2.8 - dI.width) / 2), Math.floor(.5 * az.b1 / 2.8 - dI.height / 2)), az.lr.restore(), dI = cq.sT("territorial.io"), az.lr.save(), az.lr.globalAlpha = 1 === az.mJ ? .1 : 1, az.lr
			.imageSmoothingEnabled = !0, az.lr.scale(.87, .87), az.lr.drawImage(dI, Math.floor(.745 * (az.b0 / .87 - dI.width)), Math.floor(.422 * az.b1 / .87 - dI.height / 2)), az.lr.restore()), az.lt = !0, aL.cx = !0
	}, this.qi = function() {
		for (var bc, hD, hE, a9f, a9g, ag, uS = 0, cu = az.b0, ez = az.b1, ae = cu * ez * 4, a9h = a05, a9i = az.lw, aE = cu - 1; 0 <= aE; aE--) a9h[(bc = aE << 2) + 2] = a9h[ae - bc - 2] = 3;
		for (ae = 4 * cu, aE = ez - 1; 0 <= aE; aE--) a9h[(bc = aE * ae) + 2] = a9h[bc + ae - 2] = 3;
		for (a9f = cu - 1, a9g = ez - 1, hE = 1; hE < a9g; hE++)
			for (ae = hE * cu, hD = 1; hD < a9f; hD++) ag = 1 - (a9i[(bc = ae + hD << 2) + 2] > a9i[bc + 1] && a9i[bc + 2] > a9i[bc]), a9h[bc + 2] = 2 - ag, uS += ag;
		this.uR = (cu - 2) * (ez - 2), this.uU = 0, az.a8x(az.mJ) && function() {
			var bc, hD, hE, ae, a9h = a05,
				a9i = az.lw,
				cu = az.b0,
				a9f = cu - 1,
				a9g = az.b1 - 1,
				uH = 0;
			for (hE = 1; hE < a9g; hE++)
				for (ae = hE * cu, hD = 1; hD < a9f; hD++) a9i[bc = ae + hD << 2] === a9i[1 + bc] && a9i[bc] === a9i[2 + bc] && (uH++, a9h[2 + bc] = 3);
			qh.uU = uH
		}(), this.uS = qR = uS - this.uU, this.uT = this.uR - this.uS - this.uU
	}
}

function a8s() {
	var v, a9k = az.a8w();
	az.mJ === a9k ? v =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		az.mJ === a9k + 1 ? v =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		az.mJ === a9k + 2 ? v =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		az.mJ === a9k + 3 ? v =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		az.mJ === a9k + 4 ? v =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		az.mJ === a9k + 5 ? v =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		az.mJ === a9k + 6 ? v =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		az.mJ === a9k + 7 ? v =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		az.mJ === a9k + 8 && (v =
			"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-"
			), (new le).lg(v)
}

function a8o() {
	this.mI = null, this.a9l = null, this.b = function() {
		var aE, a9m = [120, 105, 92],
			cos = [12, 12, 60],
			a9n = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			a9o = [140, 130, 120],
			a9p = [12, 12, 76],
			a9q = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			a9r = [130, 117, 106],
			a9s = [12, 12, 68],
			a9t = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		for (this.mI = new Array(az.a5z + 1), this.mI[0] = {
				name: "White Arena",
				cu: 230,
				ez: 230,
				ha: 1e3,
				hX: 2e3,
				a88: 173
			}, this.mI[1] = {
				name: "Black Arena",
				cu: 800,
				ez: 800,
				ha: 100,
				hX: 50,
				a88: 43
			}, this.mI[2] = {
				name: "Island",
				cu: 512,
				ez: 512,
				ha: 128,
				hX: 32,
				a88: 0
			}, this.mI[3] = {
				name: "Mountains",
				cu: 960,
				ez: 960,
				ha: 60,
				hX: 8,
				a88: 0
			}, this.mI[4] = {
				name: "Desert",
				cu: 900,
				ez: 900,
				ha: 100,
				hX: 5,
				a88: 0
			}, this.mI[5] = {
				name: "Swamp",
				cu: 1e3,
				ez: 1e3,
				ha: 100,
				hX: 40,
				a88: 0
			}, this.mI[6] = {
				name: "Snow",
				cu: 1e3,
				ez: 1e3,
				ha: 100,
				hX: 20,
				a88: 0
			}, this.mI[7] = {
				name: "Cliffs",
				cu: 1024,
				ez: 1024,
				ha: 128,
				hX: 32,
				a88: 0
			}, this.mI[8] = {
				name: "Pond",
				cu: 820,
				ez: 820,
				ha: 200,
				hX: 100,
				a88: 0
			}, this.mI[9] = {
				name: "Halo",
				cu: 1024,
				ez: 1024,
				ha: 128,
				hX: 32,
				a88: 0
			}, this.mI[10] = {
				name: "Europe",
				mH: a9o,
				mK: a9p,
				a98: a9q
			}, this.mI[11] = {
				name: "World",
				mH: a9r,
				mK: a9s,
				a98: a9t
			}, this.mI[12] = {
				name: "Caucasia",
				mH: a9r,
				mK: a9s,
				a98: a9t
			}, this.mI[13] = {
				name: "Africa",
				mH: a9m,
				mK: cos,
				a98: a9n
			}, this.mI[14] = {
				name: "Middle East",
				mH: a9m,
				mK: cos,
				a98: a9n
			}, this.mI[15] = {
				name: "Scandinavia",
				mH: a9o,
				mK: a9p,
				a98: a9q
			}, this.mI[16] = {
				name: "North America",
				mH: a9o,
				mK: a9p,
				a98: a9q
			}, this.mI[17] = {
				name: "South America",
				mH: a9m,
				mK: cos,
				a98: a9n
			}, this.mI[18] = {
				name: "Asia",
				mH: a9r,
				mK: a9s,
				a98: a9t
			}, this.mI[19] = {}, this.a9l = new Uint8Array(az.a5z), aE = 0; aE < az.a5z; aE++) this.a9l[aE] = aE
	}
}

function qg() {
	(n4 = void 0 === n4 ? document.createElement("canvas") : n4).width = az.b0, n4.height = az.b1, qm = n4.getContext("2d", {
		alpha: !0
	}), qn = qm.getImageData(0, 0, az.b0, az.b1), a05 = qn.data, cM.lx.ly(a05)
}

function rh() {
	var aR, cu, ez, max, a9u, hX, a9w, a9x, a9y, a9z, aA0, aA1, aA2, aA3, a9v = 1e4;

	function aAB(aAA, ha, bU) {
		var aE;
		for (a9w[0] = aAA, aE = 1; aE < bU; aE++) a9w[aE] = a9w[aE - 1] + ha, ha = a9w[aE] >= a9v ? (a9w[aE] = a9v - 1, -ha) : a9w[aE] < 0 ? (a9w[aE] = 0, -ha) : (ha += 16384 <= em.random() ? hX : -hX) < -a9u ? -a9u : a9u < ha ? a9u : ha
	}

	function aAD(hD, hE, aAE, bU) {
		(aAE ? function(hD, hE, bU) {
			var aE;
			for (aE = 0; aE < bU; aE++) aR[hE * cu + hD + aE] = a9w[aE]
		} : function(hD, hE, bU) {
			var aE;
			for (aE = 0; aE < bU; aE++) aR[hE * cu + hD + aE * cu] = a9w[aE]
		})(hD, hE, bU)
	}

	function aAH(value, bU) {
		var aE, a7h, dq, de = value - a9w[bU - 1];
		if (0 != de) {
			for (a7h = 1 + bJ(Math.abs(de), bU - 1), a7h = de < 0 ? -a7h : a7h, a9w[bU - 1] = value, dq = (dq = bU - 1 - bJ(Math.abs(de), Math.abs(a7h))) < 1 ? 1 : bU - 2 < dq ? bU - 2 : dq, aE = bU - 2; dq <= aE; aE--) a9w[aE] += de - (bU - 1 -
				aE) * a7h;
			(de < 0 ? function(bU) {
				var aE;
				for (aE = bU - 2; 1 <= aE; aE--) a9w[aE] < 0 && (a9w[aE] = -a9w[aE] - 1)
			} : function(bU) {
				var aE;
				for (aE = bU - 2; 1 <= aE; aE--) a9w[aE] >= a9v && (a9w[aE] = 2 * a9v - a9w[aE] - 1)
			})(bU)
		}
	}

	function aAK(aAL, aAM, bU) {
		for (var aE = 0; aE < bU; aE++) aAL[aE] = aAM[aE]
	}

	function aAN(ad) {
		for (var aE = 0; aE < ad.length - 1; aE++) ad[aE] = ad[aE + 1] - ad[aE];
		ad[ad.length - 1] = ad[ad.length - 3]
	}

	function aAO(sW, kt, dd) {
		a9x.push(sW), a9y.push(kt), a9z.push(dd)
	}
	this.lc = function(aA4) {
		! function(aA4) {
			var aE;
			for (cu = aA4[0], ez = aA4[1], a9u = aA4[2], hX = aA4[3], aR = new Int16Array(cu * ez), max = ez < cu ? cu : ez, a9w = new Int16Array(max), a9x = [], a9y = [], a9z = [], aA0 = new Array(cu), aA1 = new Array(ez), aE = cu - 1; 0 <=
				aE; aE--) aA0[aE] = !1;
			for (aE = ez - 1; 0 <= aE; aE--) aA1[aE] = !1;
			aA2 = new Int16Array(cu), aA3 = new Int16Array(ez)
		}(aA4),
		function(bU) {
			var aAA = em.random() % a9v,
				ha = em.random() % (2 * a9u + 1) - a9u;
			aAB(aAA, ha, bU)
		}(max), aAK(aA3, a9w, ez), aAD(0, 0, !0, cu);
		var hD, hE, aA4 = aR[0],
			bU = max,
			ha = em.random() % (2 * a9u + 1) - a9u;
		for (aAB(aA4, ha, bU), aAK(aA2, a9w, cu), aAD(0, 0, !1, ez), aAN(aA2), aAN(aA3), aAB(aR[cu - 1], aA2[cu - 1], ez), aAD(cu - 1, 0, !1, ez), aAB(aR[cu * (ez - 1)], aA3[ez - 1], cu), aAH(aR[cu * ez - 1], cu), aAD(0, ez - 1, !0, cu), aA0[cu -
				1] = aA0[0] = !0, aA1[ez - 1] = aA1[0] = !0, aAO(0, cu, !0), aAO(0, ez, !1), ! function() {
				var aAQ, sW;
				for (;;) {
					if (aAQ = function() {
							var aE, aAQ = a9x.length - 1;
							for (aE = aAQ - 1; 0 <= aE; aE--) a9y[aE] > a9y[aAQ] && (aAQ = aE);
							return aAQ
						}(), a9y[aAQ] < 5) return;
					sW = a9x[aAQ] + bJ(a9y[aAQ], 2), (a9z[aAQ] ? function(hD) {
						var bU, aAT, aE, a1C = 0,
							aAU = 0;
						for (; aAU < ez - 1;) {
							for (aE = a1C + 1; aE < ez; aE++)
								if (aA1[aE]) {
									aAU = aE;
									break
								} bU = aAU - a1C + 1, aAB(aR[hD + cu * a1C], 0 === a1C ? aA2[hD] : a9w[aAT - 1] - a9w[aAT - 2], bU), aAH(aR[aAU * cu + hD], bU), aAD(hD, a1C, !1, bU), aAT = bU, a1C = aAU
						}
						aA0[hD] = !0
					} : function(hE) {
						var bU, aAT, aE, a1C = 0,
							aAU = 0;
						for (; aAU < cu - 1;) {
							for (aE = a1C + 1; aE < cu; aE++)
								if (aA0[aE]) {
									aAU = aE;
									break
								} bU = aAU - a1C + 1, aAB(aR[hE * cu + a1C], 0 === a1C ? aA3[hE] : a9w[aAT - 1] - a9w[aAT - 2], bU), aAH(aR[hE * cu + aAU], bU), aAD(a1C, hE, !0, bU), aAT = bU, a1C = aAU
						}
						aA1[hE] = !0
					})(sW), aAO(sW, a9x[aAQ] + a9y[aAQ] - sW, a9z[aAQ]), a9y[aAQ] = sW - a9x[aAQ] + 1
				}
			}(), hD = 0; hD < cu; hD++)
			if (!aA0[hD])
				for (hE = 0; hE < ez; hE++) aA1[hE] || ! function(hD, hE) {
					var value = aR[hE * cu + hD - 1] + aR[(hE - 1) * cu + hD],
						uq = 2;
					aA0[hD + 1] && (uq++, value += aR[hE * cu + hD + 1]);
					aA1[hE + 1] && (uq++, value += aR[(hE + 1) * cu + hD]);
					aR[hE * cu + hD] = bJ(value, uq)
				}(hD, hE)
	}, this.a9A = function() {
		return aR
	}, this.a8v = function() {
		aR = null
	}
}

function bJ(ej, cV) {
	return Math.floor(ej / cV + 1 / (2 * cV))
}

function a4s(ej, cV) {
	return 0 <= ej ? bJ(ej, cV) : -bJ(-ej, cV)
}

function f8(aR) {
	return aR * aR
}

function tn(ej, cV) {
	return cV < ej ? ej : cV
}

function we(ej, cV) {
	return ej < cV ? ej : cV
}

function x4(ej, aR, cV) {
	return aR < ej ? ej : cV < aR ? cV : aR
}

function aAW(aR, bU) {
	for (var fV = bJ(aR + 1, 2), aE = 0; aE < bU; aE++) fV = bJ(fV + bJ(aR, fV), 2);
	return fV
}

function cD(aR, bU) {
	return aR < 1 ? 0 : aAW(aR, bU)
}

function aAX(hI, hJ, nD, ud, hK, hM, nE, ue) {
	return !(hI + nD <= hK || hJ + ud <= hM || hK + nE <= hI || hM + ue <= hJ)
}

function aAY(hI, hJ, nD, ud, hK, hM, nE, ue) {
	return hI <= hK && hJ <= hM && hK + nE <= hI + nD && hM + ue <= hJ + ud
}

function lo(aR) {
	return Math.floor(!!aR * (1 + Math.log2(aR + .5)))
}

function rB() {
	this.cB = function(ej, cV) {
		return Math.floor((ej + .5) / cV)
	}, this.aAZ = function(ej, cV) {
		return Math.floor(ej * (cV + .5))
	}, this.sqrt = function(aR) {
		return ~~Math.sqrt(aR + .5)
	}, this.pow = function(oX) {
		return Math.floor(Math.pow(2, oX) + .5)
	}, this.pt = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aAa = function(ae, ag, ai) {
		return Math.max(Math.min(ae, ag), ai)
	}, this.aAb = function(aAc, aAd, hD, hE) {
		hD -= aAc, aAc = hE - aAd, hE = 0;
		return 0 == hD ? hE = 0 <= aAc ? Math.PI : 0 : (hE = Math.aAe(aAc / hD), hE += 0 < hD ? .5 * Math.PI : 1.5 * Math.PI), hE
	}, this.log2 = function(aR) {
		return Math.floor(!!aR * (1 + Math.log2(aR + .5)))
	}
}

function sF() {
	this.aAf = new aAg, this.b = function() {
		this.aAf.b()
	}, this.resize = function() {
		this.aAf.resize()
	}
}

function aAg() {
	var aAh = new kz,
		aAi = new ka("Close", aAh.lE, dB.iv),
		kr = new kq;
	this.b = function() {
		var aE;
		for (kr.kx(new ka("Account", () => {
				console.log("Account")
			})), kr.kx(new ka("Settings", () => {
				console.log("Settings")
			})), kr.kx(new ka("Links", () => {
				console.log("Links")
			})), kr.kx(new ka("Replay", () => {
				console.log("Replay")
			})), kr.kx(new ka("Game Version", () => {
				console.log("Game Version")
			})), aE = 0; aE < 8; aE++) kr.kx(new ka("Sample " + aE, () => {
			console.log("Sample Button")
		}));
		kr.kx(new ka("Sample mmmmmmmmmmmmmmmm", () => {
			console.log("Sample Button")
		})), aAh.b("Menu", aAi, [kr]), aAi.kh(cM.aAj.q3())
	}, this.show = function() {
		aAh.show()
	}, this.resize = function() {
		aAh.resize(), kr.resize()
	}
}

function a8Y() {
	"function" != typeof Math.log2 && (Math.log2 = function(hD) {
		return Math.log(hD) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(hD) {
		return Math.log(hD) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(hD) {
		return 0 < hD ? 1 : hD < 0 ? -1 : 0
	})
}

function ry() {
	this.a46 = 0;
	var a07 = -1,
		aAk = !1,
		w4 = [],
		aAl = 0;

	function pP(hD, hE, aAu, aE) {
		return 0 === aE ? hD >= aAu.hI && (0 === aE || hE >= aAu.hJ) && hE <= aAu.hJ + aAu.ud : (hE -= aE * (aAu.ud - pz), hD >= aAu.hK && hE >= aAu.hJ && hE <= aAu.hJ + aAu.ud)
	}

	function aAv() {
		var nD = Math.floor((a0 ? .145 : .09) * ck),
			nE = Math.floor(2.25 * nD),
			kt = Math.floor(.065 * (a0 ? .53 : .36) * ck),
			hK = a1 - nE - kt;
		return {
			hI: a1 - nD - kt,
			hJ: d2,
			nD: nD,
			ud: Math.floor(.35 * (1 + .35 * a0) * nD),
			hK: hK,
			nE: nE,
			xd: kt
		}
	}

	function a1Q(hD, hE, cu, ez, dO, pv, cV, aB3, v) {
		var cs = (v === w4[0][0].name ? .65 : .5) * ez,
			font = cM.iL.lL(cs, 1),
			font = cv.measureText(v, font);
		.92 * cu < font && (cs *= .92 * cu / font), d8.font = cM.iL.lL(cs, 1), aB3 && (dO += 80, pv += 80, cV += 80), d8.fillStyle = "rgba(" + dO + "," + pv + "," + cV + ",0.6)", d8.fillRect(hD, hE, cu, ez), d8.fillStyle = dB.dC, d8.fillRect(hD, hE,
			cu, pz), d8.fillRect(hD, hE + ez - pz, cu, pz), d8.fillRect(hD, hE, pz, ez), d8.fillRect(hD + cu - pz, hE, pz, ez), d8.fillText(v, Math.floor(hD + cu / 2), Math.floor(hE + ez / 2 + .1 * cs))
	}
	this.hS = null, this.z1 = new Uint8Array(4), this.tq = function() {
		return m ? 4 : a0 ? 2 : 1
	}, this.b = function() {
		var aAn;
		this.aAm(), w4 = [new Array(6), new Array(10), new Array(7)], this.z1[0] = 10, this.z1[1] = 5, this.z1[2] = 2, this.z1[3] = 1, w4[0][0] = {
			name: "More",
			id: 0,
			dO: 140,
			pv: 120,
			cV: 0
		}, w4[0][1] = {
			name: "Lobby 1",
			id: 1,
			dO: 0,
			pv: 0,
			cV: 0
		}, w4[0][2] = {
			name: "Settings",
			id: 2,
			dO: 0,
			pv: 0,
			cV: 0
		}, w4[0][3] = {
			name: "More Information",
			id: 3,
			dO: 0,
			pv: 0,
			cV: 0
		}, w4[0][4] = {
			name: "Replay",
			id: 4,
			dO: 0,
			pv: 0,
			cV: 0
		}, w4[0][5] = {
			name: a8R,
			id: 5,
			dO: 90,
			pv: 0,
			cV: 0
		}, w4[0].push({
			name: "FX Client v" + fx_version + " " + fx_update,
			id: 20,
			dO: 0,
			pv: 0,
			cV: 70
		}), w4[1][0] = w4[0][0], w4[1][1] = {
			name: "Hide Usernames",
			id: 1,
			dO: 0,
			pv: 0,
			cV: 0
		}, w4[1][2] = {
			name: "Hide Links",
			id: 2,
			dO: 0,
			pv: 0,
			cV: 0
		}, w4[1][3] = {
			name: "Hide Zoom Buttons",
			id: 3,
			dO: 0,
			pv: 0,
			cV: 0
		}, w4[1][4] = {
			name: "Reverse Name/Balance",
			id: 4,
			dO: 0,
			pv: 0,
			cV: 0
		}, w4[1][5] = {
			name: "Resolution",
			id: 5,
			dO: 0,
			pv: 0,
			cV: 0
		}, w4[1][6] = {
			name: "Country Minimum Font Size",
			id: 6,
			dO: 0,
			pv: 0,
			cV: 0
		}, w4[1][7] = {
			name: "Leaderboard Refresh Rate",
			id: 7,
			dO: 0,
			pv: 0,
			cV: 0
		}, w4[1][8] = {
			name: "Reset Settings",
			id: 8,
			dO: 0,
			pv: 0,
			cV: 0
		}, w4[1][9] = {
			name: "Back",
			id: 9,
			dO: 0,
			pv: 0,
			cV: 0
		}, w4[2][0] = w4[0][0], w4[2][1] = {
			name: "Tutorial",
			id: 1,
			dO: 0,
			pv: 0,
			cV: 0
		}, w4[2][2] = {
			name: "Player List",
			id: 2,
			dO: 0,
			pv: 0,
			cV: 0
		}, w4[2][3] = {
			name: "Clan List",
			id: 3,
			dO: 0,
			pv: 0,
			cV: 0
		}, w4[2][4] = {
			name: "Privacy Policy",
			id: 4,
			dO: 0,
			pv: 0,
			cV: 0
		}, w4[2][5] = {
			name: "Changelog",
			id: 13,
			dO: 0,
			pv: 0,
			cV: 0
		}, w4[2][6] = {
			name: "Terms of Service",
			id: 14,
			dO: 0,
			pv: 0,
			cV: 0
		}, !m && q < 5 && w4[2].push({
			name: "Cookie Policy",
			id: 5,
			dO: 0,
			pv: 0,
			cV: 0
		}), (m || 5 <= q) && (m ? !p.mustShowConsentButton || "0" !== p.mustShowConsentButton && "1" !== p.mustShowConsentButton || w4[2].push({
			name: "Consent Form",
			id: 7,
			dO: 0,
			pv: 0,
			cV: 0
		}) : "" !== (aAn = n.loadString(187)) && "1" !== aAn || w4[2].push({
			name: "Consent Form",
			id: 7,
			dO: 0,
			pv: 0,
			cV: 0
		})), 5 <= q && w4[2].push({
			name: "Force Restart Game",
			id: 12,
			dO: 0,
			pv: 0,
			cV: 0
		}), w4[2].push({
			name: "Back",
			id: 6,
			dO: 0,
			pv: 0,
			cV: 0
		}), this.aAo(), this.aAp()
	}, this.aAm = function() {
		this.hS = {
			uZ: 0,
			aAq: 0,
			xW: 0,
			hT: 1,
			aAr: 2,
			a78: 4,
			z2: 2,
			a7H: 2
		}
	}, this.aAp = function() {
		if (settings.hideAllLinks) a26.ai[0] = a26.ai[1] = !this.hS.aAq;
		else a26.ai[0] = a26.ai[1] = true;
		a26.ai[2] = a26.ai[3] = a26.ai[4] = !this.hS.aAq, w4[1][1].pv = this.hS.uZ ? 130 : 0, w4[1][2].pv = this.hS.aAq ? 130 : 0, w4[1][3].pv = this.hS.xW ? 130 : 0, w4[1][4].pv = this.hS.hT ? 130 : 0, this.aAs(5), this.aAs(6), this.aAs(7)
	}, this.aAo = function() {
		var t5 = a5().split("");
		t5.length < 14 ? this.aAm() : (this.hS.uZ = parseInt(t5[6]), this.hS.aAq = parseInt(t5[7]), this.hS.xW = parseInt(t5[8]), this.hS.hT = parseInt(t5[9]), this.hS.aAr = parseInt(t5[10]), this.hS.a78 = parseInt(t5[11]), this.hS.z2 = parseInt(
			t5[12]))
	}, this.a1P = function() {
		var v = d4.tP[2].nz.a1N();
		aI((v += ~~this.hS.uZ) + ~~this.hS.aAq + ~~this.hS.xW + ~~this.hS.hT + ~~this.hS.aAr + ~~this.hS.a78 + ~~this.hS.z2 + "0")
	}, this.aAs = function(aE) {
		5 === aE ? w4[1][aE].name = "Resolution: " + g9.uQ(100 * ph.aAt(), 1) : 6 === aE ? w4[1][aE].name = "Country Minimum Font Size: " + (this.hS.a78 < 4 ? 1 + this.hS.a78 : 2 * (this.hS.a78 - 1)) : 7 === aE && (w4[1][aE].name =
			"Leaderboard Refresh Rate: " + g9.uQ(100 / this.z1[this.hS.z2], 1))
	}, this.cz = function(hD, hE) {
		var aE, aAu, aAx;
		if (!(7 <= aT.pT())) {
			aAu = aAv();
			var gearIconX = aAu.hI - aAu.nD / 2;
			if (hD > gearIconX && hD < (gearIconX + aAu.ud) && hE > aAu.hJ && hE < (aAu.hJ + aAu.ud)) return WindowManager.openWindow("settings");
			if (aAk) {
				for (aE = 1; aE < w4[aAl].length; aE++)
					if (pP(hD, hE, aAu, aE)) return aAx = w4[aAl][aE], 0 === aAl ? 1 === aAx.id ? (hR.a46 = (hR.a46 + 1) % 4, aAx.name = (hR.a46 % 2 ? "Proxy " : "Lobby ") + (1 + (hR.a46 >> 1)), aL.cx = !0) : 2 === aAx.id ? (aAl = 1, aL.cx = !
						0) : 3 === aAx.id ? (aAl = 2, aL.cx = !0) : 4 === aAx.id ? lJ.show() : 5 === aAx.id && (console.log("try showing ad:"), aO.i()) : 1 === aAl ? 1 === aAx.id ? (hR.hS.uZ = !hR.hS.uZ, aAx.pv = hR.hS.uZ ? 130 : 0, hR.a1P(),
							aL.cx = !0) : 2 === aAx.id ? (hR.hS.aAq = !hR.hS.aAq, hR.aAp(), hR.a1P(), aL.cx = !0) : 3 === aAx.id ? (hR.hS.xW = !hR.hS.xW, aAx.pv = hR.hS.xW ? 130 : 0, hR.a1P(), aL.cx = !0) : 4 === aAx.id ? (hR.hS.hT = !hR.hS
							.hT, aAx.pv = hR.hS.hT ? 130 : 0, hR.a1P(), aL.cx = !0) : 5 === aAx.id ? (hR.hS.aAr++, hR.hS.aAr %= 8, hR.aAs(aAx.id), hR.a1P(), ph.a3r(1), aL.cx = !0) : 6 === aAx.id ? (hR.hS.a78++, hR.hS.a78 %= 10, hR.aAs(aAx
							.id), hR.a1P(), aL.cx = !0) : 7 === aAx.id ? (hR.hS.z2++, hR.hS.z2 %= 4, hR.aAs(aAx.id), hR.a1P(), aL.cx = !0) : 8 === aAx.id ? (hR.aAm(), hR.aAp(), hR.a1P(), ph.a3r(1), aL.cx = !0) : 9 === aAx.id && (aAl = 0, aL
							.cx = !0) : 1 === aAx.id ? (pQ.b(r8.aAy, !0), pQ.b(r8.aAy, !1)) : 2 === aAx.id ? (pQ.b(r8.aAz, !0), pQ.b(r8.aAz, !1)) : 3 === aAx.id ? (pQ.b(r8.aB0, !0), pQ.b(r8.aB0, !1)) : 4 === aAx.id ? (pQ.b(r8.a8a, !0), pQ.b(
							r8.a8a, !1)) : 5 === aAx.id ? (pQ.b(r8.uh, !0), pQ.b(r8.uh, !1)) : 13 === aAx.id ? (pQ.b(r8.aB1, !0), pQ.b(r8.aB1, !1)) : 14 === aAx.id ? (pQ.b(r8.aB2, !0), pQ.b(r8.aB2, !1)) : 6 === aAx.id ? (aAl = 0, aL.cx = !
						0) : 7 === aAx.id ? m ? window.webkit.messageHandlers.iosCommandA.postMessage("showConsentForm") : n.setState(7) : 12 === aAx.id && n.setState(14), !0;
				return aAk = !1, !(aL.cx = !0)
			}
			return !!pP(hD, hE, aAu, 0) && (aAk = !(aAl = 0), aL.cx = !0)
		}
	}, this.om = function(hD, hE) {
		var aE, aAu, pw, iA;
		if (!(7 <= aT.pT())) {
			for (aAu = aAv(), pw = a07, iA = aAk ? 0 === aAl ? w4[aAl].length - 2 : w4[aAl].length : 1, a07 = -1, aE = 0; aE < iA; aE++)
				if (pP(hD, hE, aAu, aE)) {
					a07 = aE;
					break
				} pw !== a07 && (aL.cx = !0)
		}
	}, this.d7 = function() {
		var aE, iA, aAu;
		if (!(7 <= aT.pT()) && (aAu = aAv(), d8.textAlign = dA, d8.textBaseline = d9, a1Q(aAu.hI, aAu.hJ, aAu.nD, aAu.ud, w4[aAl][0].dO, w4[aAl][0].pv, w4[aAl][0].cV, 0 === a07, w4[aAl][0].name), d8.imageSmoothingEnabled = true, d8.drawImage(
				settingsGearIcon, aAu.hI - aAu.nD / 2, aAu.hJ, aAu.ud, aAu.ud), d8.imageSmoothingEnabled = false, d8.font = "bold " + Math.floor(aAu.ud * 0.4) + "px " + settings.fontName, (!aAk && d8.fillText("Win count: " + wins_counter,
				Math.floor(aAu.hI + aAu.nD / 2), Math.floor((aAu.hJ + aAu.ud / 2) * 2.1))), aAk))
			for (iA = w4[aAl].length, aE = 1; aE < iA; aE++) a1Q(aAu.hK, aAu.hJ + aE * aAu.ud - aE * pz, aAu.nE, aAu.ud, w4[aAl][aE].dO, w4[aAl][aE].pv, w4[aAl][aE].cV, a07 === aE, w4[aAl][aE].name)
	}
}

function ri() {
	var xs, aB5, aB6, aB7, a89 = !1;

	function aB8() {
		a89 = !0, xs = -1, aB5 = new Array(4);
		for (var aE = 3; 0 <= aE; aE--) aB5[aE] = !1;
		var aB9 = Math.floor(1 + .02 * vW);
		aB6 = new Array(4), (aB7 = new Array(4))[1] = aB7[3] = aB6[0] = aB6[2] = 0, aB7[0] = aB6[3] = -aB9, aB6[1] = aB7[2] = aB9
	}

	function aBA() {
		if (-1 !== xs)
			if (0 !== gg && gY.iA()) {
				for (var aBB = !1, aE = 3; 0 <= aE; aE--) aB5[aE] && (aBB = !0, eB += aB6[aE], eD += aB7[aE], g8.om(aB6[aE], aB7[aE]), hv.xZ());
				aBB ? aL.cx = !0 : hz.i0()
			} else hz.i0()
	}
	this.pa = function(cm) {
		0 !== gg && gY.iA() && (a89 || aB8(), aB5[cm] = !0, -1 === xs) && (xs = setInterval(aBA, 20), aBA())
	}, this.pV = function(cm) {
		if (0 !== gg && (a89 || aB8(), aB5[cm] = !1, -1 !== xs)) {
			for (var aBB = !1, aE = 3; 0 <= aE; aE--) aBB = aBB || aB5[aE];
			aBB || this.i0()
		}
	}, this.i0 = function() {
		if (a89 && -1 !== xs) {
			for (var aE = 3; 0 <= aE; aE--) aB5[aE] = !1;
			clearInterval(xs), xs = -1
		}
	}
}

function rj() {
	var aBD;

	function aBJ(hI, hJ, hK, hM) {
		return Math.abs(hK - hI) + Math.abs(hM - hJ)
	}
	this.aBE = function() {
		return aBD
	}, this.es = function(player, aBF) {
		var aE;
		if (0 !== bo[player].length && bW.bX(aBF) && (bW.bh(aBF) || bW.bg(aBF) !== player))
			for (aE = 21; 0 <= aE; aE--)
				if (function(aBD, aBF) {
						var aBI, aE, mN = bW.hN(aBD),
							mO = bW.d6(aBD),
							mj = bW.hN(aBF),
							mi = bW.d6(aBF),
							aB9 = aBJ(mN, mO, mj, mi);
						if (!(aB9 < 2))
							for (aBI = aBD, aE = 0; aE < aB9; aE++)
								if (Math.abs(mj - bW.hN(aBI)) >= Math.abs(mi - bW.d6(aBI)) ? aBI += av[mN < mj ? 1 : 3] : aBI += av[mO < mi ? 2 : 0], !bW.sm(aBI)) return !!bW.bX(aBI) && !(0 === aE || aE + 20 < aB9);
						return
					}(aBD = 21 === aE ? function(border, aBF) {
						for (var aB9, mj = bW.hN(aBF), mi = bW.d6(aBF), cm = 0, min = aBJ(mj, mi, bW.hN(border[0]), bW.d6(border[0])), aE = border.length - 1; 1 <= aE; aE--)(aB9 = aBJ(mj, mi, bW.hN(border[aE]), bW.d6(border[aE]))) < min && (
							min = aB9, cm = aE);
						return border[cm]
					}(bo[player], aBF) : bo[player][bJ(aE * bo[player].length, 21)], aBF)) return !0;
		return !1
	}
}

function a8i() {
	var aBK = !1,
		uk = 0,
		cu = 0,
		nD = 0,
		kt = 0,
		dL = null,
		n8 = null,
		aBL = null;

	function aBN() {
		for (var a2z, aBQ = 0, bU = 0, fV = Math.floor(cu / 2), dO = Math.floor(nD / 2), a2y = 1.5 * Math.PI, aE = qU; 0 <= aE; aE--) bU += aBL[aE], 0 === aBL[aE] && aBQ++;
		if (aBK = !1, n8.clearRect(0, 0, cu, cu), n8.fillStyle = dB.iR, n8.fillRect(0, 0, cu, cu), n8.fillStyle = dB.dC, n8.fillRect(0, 0, cu, kt), n8.fillRect(0, 0, kt, cu), n8.fillRect(cu - kt, 0, kt, cu), n8.fillRect(0, cu - kt, cu, kt), 0 < bU)
			if (aBQ === qU) {
				for (aE = qU; 0 <= aE; aE--)
					if (0 < aBL[aE]) {
						! function(aE, fV, dO) {
							n8.fillStyle = fW.a33[fW.oE[aE]], n8.beginPath(), n8.arc(fV, fV, dO, 0, 2 * Math.PI), n8.fill()
						}(aE, fV, dO);
						break
					}!
				function(fV) {
					var cs = fV / 3;
					n8.font = cM.iL.lL(cs, 1), n8.fillStyle = dB.dC, n8.fillText("100%", fV, fV + .1 * cs)
				}(fV)
			} else {
				for (aE = 0; aE <= qU; aE++) 0 < aBL[aE] && (! function(aE, fV, dO, a2y, a2z) {
					n8.fillStyle = fW.a33[fW.oE[aE]], n8.beginPath(), n8.arc(fV, fV, dO, a2y, a2z), n8.lineTo(fV, fV), n8.fill()
				}(aE, fV, dO, a2y, a2z = a2y + 2 * Math.PI * aBL[aE] / bU), function(fV, dO, a2y, a2z) {
					var aR = (a2z - a2y) / (2 * Math.PI),
						cs = +dO * Math.min(aR, .37);
					cs < 8 || (a2y = (a2y + a2z) / 2, a2z = Math.floor(100 * aR + .5) + "%", dO *= .525 - Math.max(.6 * (aR - .7), 0), n8.font = cM.iL.lL(cs, 1), n8.fillStyle = dB.dC, n8.fillText(a2z, fV + Math.cos(a2y) * dO, fV + Math.cos(
						a2y + 1.5 * Math.PI) * dO))
				}(fV, dO, a2y, a2z), 0 !== aE && a31(fV, dO, a2y), a2y = a2z);
				a31(fV, dO, 1.5 * Math.PI)
			}!
		function(fV, dO) {
			n8.beginPath(), n8.arc(fV, fV, dO, 0, 2 * Math.PI), n8.stroke()
		}(fV, dO)
	}

	function a31(fV, dO, a34) {
		n8.beginPath(), n8.moveTo(fV, fV), n8.lineTo(fV + Math.cos(a34) * dO, fV + Math.cos(a34 + 1.5 * Math.PI) * dO), n8.stroke()
	}
	this.b = function() {
		if (cS) {
			var aE;
			for (uk = 0, aBL = new Uint32Array(qU + 1), aE = qU; 0 <= aE; aE--) aBL[aE] = 0;
			for (aE = fY - 1; 0 <= aE; aE--) aBL[fW.fX[fZ[aE]]] += 1;
			this.resize()
		} else aBL = n8 = dL = null
	}, this.wL = function() {
		return cu
	}, this.resize = function() {
		cS && (cu = Math.floor(a0 && !hu ? .18 * vW : .13 * ck), cu = (cu *= 1 + (.5 + .2 * a0) * hu) + cu % 2, nD = Math.floor(7 * cu / 8), (dL = dL || document.createElement("canvas")).width = cu, dL.height = cu, n8 = dL.getContext("2d", {
			alpha: !0
		}), kt = Math.max(1, .015 * cu), n8.lineWidth = kt, n8.strokeStyle = dB.dC, cM.iL.textAlign(n8, 1), cM.iL.textBaseline(n8, 1), aBN())
	}, this.oG = function() {
		return aBL[this.oF()]
	}, this.o1 = function() {
		return uk = 31, this.fF(), this.oF()
	}, this.oF = function() {
		for (var aBO = 0, aE = qU; 0 < aE; aE--) aBL[aE] > aBL[aBO] && (aBO = aE);
		return aBO
	}, this.fF = function() {
		if (cS && 32 <= ++uk) {
			var aE;
			for (uk = 0, aE = qU; 0 <= aE; aE--) aBL[aE] = 0;
			for (aE = fY - 1; 0 <= aE; aE--) aBL[fW.fX[fZ[aE]]] += bv[fZ[aE]];
			aBK = !0
		}
	}, this.cp = function() {
		cS && aBK && aBN()
	}, this.d7 = function() {
		cS && (hu ? d8.drawImage(dL, ko, ko) : d8.drawImage(dL, ko, wM + 2 * ko))
	}
}

function sA() {
	this.a2T = function() {
		n || m || function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var aBV = window.location.search,
				aBV = new URLSearchParams(aBV).get(key);
			if ("string" != typeof aBV || aBV.length < 1) return null;
			return aBV
		}("replay") && lJ.show()
	}, this.lQ = function() {
		var aBU;
		n || m || ((aBU = new URL(window.location.href)).search = "", history.replaceState(null, "", aBU.toString()))
	}
}

function rk() {
	var aBX, ad;
	this.b = function() {
		for (var aE = (ad = new Uint16Array(101)).length - 1; 0 <= aE; aE--) ad[aE] = bJ(32768 * aE, 100);
		this.qe(0)
	}, this.value = function(bc) {
		return ad[bc]
	}, this.a7r = function() {
		return bJ(aBX - 1, 2)
	}, this.qe = function(a88) {
		aBX = 2 * a88 % 32768 + 1
	}, this.random = function() {
		return aBX = 167 * aBX % 32768
	}, this.en = function(gu) {
		return bJ(gu * this.random(), 32768)
	}, this.fP = function(bc) {
		return 0 !== bc && this.random() < this.value(bc)
	}
}

function s6() {
	this.kE = new aBY, this.xK = new aBZ, this.xJ = new aBa, this.b = function(qX, nH, qZ, qa) {
		var aBb;
		cJ || ((aBb = {}).qY = bN, aBb.qX = qX, aBb.nH = nH, aBb.qZ = qZ, aBb.qa = qa, aBb.a3C = az.mJ, aBb.a3D = az.a39, fy.a3b(aBb), this.kE.b(aBb))
	}, this.fF = function() {
		cJ || this.kE.fF()
	}, this.xI = function() {
		var pv = this.kE.aBb;
		0 === gg && aT.a1x(), az.lc(pv.a3C, pv.a3D), 1 === pv.nH.length && (fy.a3W(pv.qZ), fy.a3Y(pv.a3Z, pv.a3a)), gB.close(gB.p4, 3246), fy.a3d(), qW(pv.qX, pv.qY, pv.nH, pv.qZ, pv.qa, !0)
	}, this.xG = function(v) {
		var aE = v.indexOf("=");
		return 0 <= aE ? v.substring(aE + 1) : v
	}, this.xL = function(v) {
		return "https://territorial.io/?replay=" + v
	}
}

function aBY() {
	this.aBc = null, this.aBd = null, this.aBe = null, this.aBf = null, this.aBg = null, this.aBh = null;
	var aBi = 0;
	this.aBb = null, this.xH = "", this.b = function(aBb) {
		this.aBc = [], this.aBd = [], this.aBe = [], this.aBf = [], this.aBg = [0], this.aBh = [0], aBi = 0, this.aBb = aBb, this.xH = ""
	}, this.kF = function(id, ae, ag, ai) {
		cJ || 2 === gg || (0 === this.aBg[aBi] && (this.aBh[aBi] ? (this.aBg.push(1), this.aBh.push(0), aBi++) : this.aBg[aBi] = 1), this.aBc.push(id), this.aBd.push(ae), this.aBe.push(void 0 === ag ? 0 : ag), this.aBf.push(void 0 === ai ? 0 :
			ai), this.aBh[aBi]++)
	}, this.fF = function() {
		0 === this.aBg[aBi] ? this.aBh[aBi]++ : (this.aBg.push(0), this.aBh.push(0), aBi++)
	}
}

function aBa() {
	function aBo(v) {
		0 === gg ? qx.a1l(3605) : g7.u1(v)
	}
	this.lg = function(v) {
		if (lm.lZ(lm.lW(lm.lV(v))), ! function() {
				if (k9.dF < 10) aBo("File Too Small");
				else if (k9.kA(9) !== a8S) aBo("Game Version Error");
				else if (k9.kA(31) !== k9.dF) aBo("Size Error");
				else {
					if (function(ez) {
							var aE, bc = k9.k8,
								bU = k9.dF,
								a5D = 0;
							for (aE = 7; aE < bU; aE++) a5D = a5D + bc[aE] & 65535;
							return a5D === ez
						}(k9.kA(16))) return 1;
					aBo("Hash Error")
				}
				return
			}()) return !1;
		(aBb = {}).qY = k9.kA(9), aBb.qX = k9.kA(14), aBb.qZ = k9.kA(4), aBb.qa = 1 === k9.kA(1), aBb.a3C = k9.kA(6), aBb.a3D = k9.kA(14), aBb.aBq = k9.kA(10), gW.kE.aBb = aBb,
			function() {
				var aE, a3j, a3i, name, bU = gW.kE.aBb.aBq,
					nH = [];
				for (aE = 0; aE < bU; aE++) a3j = k9.kA(1), a3i = [k9.kA(6), k9.kA(6), k9.kA(6)], name = k9.aBr(k9.kA(5)), nH.push({
					name: name,
					a3i: a3i,
					a3j: a3j
				});
				if (gW.kE.aBb.nH = nH, 8 === gW.kE.aBb.qZ)
					for (aE = 0; aE < bU; aE++) nH[aE].nL = k9.kA(14)
			}(),
			function() {
				var aE, bU, aBs = gW.kE.aBb;
				if (1 === aBs.nH.length)
					for (bU = 6 < aBs.qZ ? 1 : aBs.qZ + 2, aBs.a3Z = new Array(bU), aBs.a3a = new Array(bU), aE = 0; aE < bU; aE++) aBs.a3Z[aE] = k9.kA(3), aBs.a3a[aE] = k9.kA(9) + 1
			}(), aBb = k9.kA(5), aBt = k9.kA(30), aBu = k9.kA(30);
		var aBb, aBt, aBu, aE, id, bU = aBt,
			aBx = new Uint8Array(bU),
			aBy = new Uint16Array(bU),
			aBz = new Uint32Array(bU),
			aC0 = new Uint32Array(bU);
		for (gW.kE.aBc = aBx, gW.kE.aBd = aBy, gW.kE.aBe = aBz, gW.kE.aBf = aC0, aE = 0; aE < bU; aE++) aBx[aE] = id = k9.kA(4), aBy[aE] = k9.kA(9), 0 === id ? aBz[aE] = k9.kA(22) : 1 === id ? (aBz[aE] = k9.kA(10), aC0[aE] = k9.kA(10)) : 2 ===
			id ? (aBz[aE] = k9.kA(10), aC0[aE] = k9.kA(9)) : 3 === id || 4 === id ? (aBz[aE] = k9.kA(10), aC0[aE] = k9.kA(22)) : 5 === id ? aBz[aE] = k9.kA(10) : 6 === id ? aBz[aE] = k9.kA(7) : 7 === id && (aBz[aE] = k9.kA(1));
		return function(bU, lh) {
			var aE, aBg = new Uint8Array(bU),
				aBh = new Array(bU);
			for (aBh.fill(0), gW.kE.aBg = aBg, gW.kE.aBh = aBh, aE = 0; aE < bU; aE++) aBg[aE] = k9.kA(1), aBh[aE] = k9.kA(lh)
		}(aBu, aBb), k9.cm < 8 * k9.dF - 13 || k9.cm > 8 * k9.dF ? (aBo("Out Of Bounds Error: " + k9.cm + " " + 8 * k9.dF), !1) : (gW.kE.xH = v, !0)
	}
}

function aBZ() {
	this.ni = function() {
		var aBs, lh = function() {
				var aE, aBh = gW.kE.aBh,
					bU = aBh.length,
					max = 0;
				for (aE = 0; aE < bU; aE++) max = Math.max(max, aBh[aE]);
				return lo(Math.max(max, 1))
			}(),
			aC2 = function(lh) {
				return 179 + function() {
					var aE, nH = gW.kE.aBb.nH,
						bU = nH.length,
						aC2 = 24 * bU;
					for (aE = 0; aE < bU; aE++) aC2 += 10 * w.ni(nH[aE].name).length;
					8 === gW.kE.aBb.qZ && (aC2 += 14 * bU);
					return aC2
				}() + (1 === gW.kE.aBb.nH.length ? 12 * gW.kE.aBb.a3Z.length : 0) + function() {
					var aE, aBc = gW.kE.aBc,
						bU = aBc.length,
						aC2 = 13 * bU,
						aCG = [22, 20, 19, 32, 32, 10, 7, 1, 0, 0];
					for (aE = 0; aE < bU; aE++) aC2 += aCG[aBc[aE]];
					return aC2
				}() + function(lh) {
					return gW.kE.aBh.length * (1 + lh)
				}(lh)
			}(lh);
		lb.lc(aC2 + (6 - aC2 % 6) % 6), aBs = gW.kE.aBb, lb.ld(9, a8S), lb.ld(31, lb.dF), lb.cm += 16, lb.ld(9, aBs.qY), lb.ld(14, aBs.qX), lb.ld(4, aBs.qZ), lb.ld(1, aBs.qa), lb.ld(6, aBs.a3C), lb.ld(14, aBs.a3D), lb.ld(10, aBs.nH.length);
		var aE, cV, aCA, aCB, nH = gW.kE.aBb.nH,
			bU = nH.length;
		for (aE = 0; aE < bU; aE++)
			for (lb.ld(1, nH[aE].a3j), lb.ld(18, (nH[aE].a3i[0] << 12) + (nH[aE].a3i[1] << 6) + nH[aE].a3i[2]), aCA = w.ni(nH[aE].name), aCB = aCA.length, lb.ld(5, aCB), cV = 0; cV < aCB; cV++) lb.ld(10, aCA[cV]);
		if (8 === gW.kE.aBb.qZ)
			for (aE = 0; aE < bU; aE++) lb.ld(14, nH[aE].nL);
		return function() {
				var aE, aBs = gW.kE.aBb;
				if (1 === aBs.nH.length)
					for (aE = 0; aE < aBs.a3Z.length; aE++) lb.ld(3, aBs.a3Z[aE]), lb.ld(9, aBs.a3a[aE] - 1)
			}(),
			function(lh) {
				var aE, aBc = gW.kE.aBc,
					ae = gW.kE.aBd,
					ag = gW.kE.aBe,
					ai = gW.kE.aBf,
					bU = aBc.length;
				for (lb.ld(5, lh), lb.ld(30, bU), lb.ld(30, gW.kE.aBh.length), aE = 0; aE < bU; aE++) lb.ld(4, aBc[aE]), lb.ld(9, ae[aE]), 0 === aBc[aE] ? lb.ld(22, ag[aE]) : 1 === aBc[aE] ? (lb.ld(10, ag[aE]), lb.ld(10, ai[aE])) : 2 === aBc[
					aE] ? (lb.ld(10, ag[aE]), lb.ld(9, ai[aE])) : 3 === aBc[aE] || 4 === aBc[aE] ? (lb.ld(10, ag[aE]), lb.ld(22, ai[aE])) : 5 === aBc[aE] ? lb.ld(10, ag[aE]) : 6 === aBc[aE] ? lb.ld(7, ag[aE]) : 7 === aBc[aE] && lb.ld(1, ag[aE])
			}(lh),
			function(lh) {
				var aE, aBg = gW.kE.aBg,
					aBh = gW.kE.aBh,
					bU = aBg.length;
				for (aE = 0; aE < bU; aE++) lb.ld(1, aBg[aE]), lb.ld(lh, aBh[aE])
			}(lh), lb.cm !== aC2 && g7.u1("Encoder Index Error: " + lb.cm + " " + aC2), lb.cm = 40, lb.ld(16, function() {
				var aE, bc = lb.k8,
					bU = lb.dF,
					a5D = 0;
				for (aE = 7; aE < bU; aE++) a5D = a5D + bc[aE] & 65535;
				return a5D
			}()), k9.b(lb.k8), r6.nV(r6.nT(bJ(aC2 - 1, 6) + 1))
	}
}

function rr() {
	var fV, uV = !1,
		aCH = !1,
		aCI = -1e4;

	function resize(de) {
		fV = 0, cq.cr() && (aCJ(de) || uV) && (uV = !1, vU(), a0W.b(), qv.b(), pR.resize(), a26.b(), qw.resize(), pH.resize(), qu.resize(), a1v.resize(), d5.resize(), aF.b(), 1 <= gg ? (gN.resize(!1), gQ.resize(), g9.resize(), hv.resize(), cf
		.resize(), g7.resize(), cK.resize(), lJ.resize(), gb.resize(), gT.resize(), gR.resize(), cv.resize(), n5.resize(), n6.resize(), g8.resize(), gZ.resize(), gU.resize(), hv.xZ()) : (2 === aT.pT() ? fy.resize() : 3 === aT.pT() && qx
			.resize(), aT.a23(), aT.a27()), aL.cx = !0)
	}

	function aCK(aR) {
		return aR && 128 < aR ? Math.floor(aR) : 128
	}

	function aCJ(de) {
		var nD, ud, ue;
		return ph.aAt(), nD = aCK(document.documentElement.clientWidth), ud = window.visualViewport ? aCK(window.visualViewport.height) : aCK(document.documentElement.clientHeight), de && !aCH ? (aCH = !0, document.body.removeChild(ol)) : aCH && (
			aCH = !1, document.body.appendChild(ol)), de = Math.floor(.5 + lM * nD), ue = Math.floor(.5 + lM * ud), !(de === hL && ue === d3 || pB.pg() && (pR.lI || lJ.lI)) && (hL = a1 = de, d3 = a2 = ue, vW = we(a1, a2), ck = bJ(a2 + a1, 2), ol
			.width = de, ol.height = ue, ol.style.width = nD + "px", ol.style.height = ud + "px", 1)
	}
	this.b = function() {
		a1 = a2 = vW = hL = d3 = ck = 0, lM = fV = 1, ol = document.getElementById("canvasA"), (d8 = ol.getContext("2d", {
			alpha: !1
		})).imageSmoothingEnabled = !1, aCJ(0)
	}, this.fF = function() {
		r4.fF(), 50 <= ++fV && resize(0)
	}, this.a3r = function(de) {
		uV = !0, resize(de)
	}, this.pi = function() {
		aCI + 1e3 > aL.aM || (aCI = aL.aM, resize(0))
	}, this.aAt = function() {
		var aCL = window.devicePixelRatio || 1,
			aE = hR.hS.aAr;
		return (lM = aE < 3 ? .5 + .25 * aE : (.5 + .125 * (aE - 3)) * aCL) / aCL
	}
}

function rl() {
	var player, ee, m7, m1, hI, hJ, hK, hM, cm, aCM, id;

	function aCS() {
		var ed;
		if (bW.bh(m7)) ed = bZ;
		else {
			if ((ed = bW.bg(m7)) === player) return void aCU(!0);
			if (!eo(player, ed)) return function(ed) {
				var max = bv[ed] * q9 - bO[ed];
				max <= 0 || (ee -= max = max < ee ? max : ee, player === bN && (g7.jp(max, 0, ed), bR.bS[16] += max), ed === bN && (g7.uN(max, player), bR.bS[10] += max), bO[ed] += max, g8.jq(ed, max))
			}(ed), void aCU(!0)
		}
		player === bN && (bR.bS[13] += ee), gK.bM(player, id), b5.bT(player, aCM), bV[player].push(m1), b5.ea(player, ee, ed), bL.eb(player, !0)
	}

	function aCU(aCX) {
		gK.bM(player, id), b5.bT(player, aCM), aCX && (bO[player] += ee)
	}

	function aCO() {
		bW.a4x(m7, player) && bW.a4z(m7)
	}

	function aCN(aE, a6M, wH, el, iA) {
		if (cm = aE, id = a6M, player = wH, hI = bW.hN(el), hJ = bW.d6(el), hK = bW.hN(iA), hM = bW.d6(iA), m1 = m7 = bW.md(hI, hJ), -1 !== (aCM = b5.hQ(player, id))) return ee = b5.bD(player, aCM), 1;
		aCO(), gK.bM(player, id)
	}
	this.fF = function(aE, id, wH, el, iA) {
		aCN(aE, id, wH, el, iA) && (aCO(), function() {
			var aCY = bJ(ee, 128);
			ee -= aCY = aCY < 1 ? 1 : aCY, player === bN && (bR.bS[15] += aCY);
			if (ee <= bK) return player === bN && (bR.bS[15] += ee), void aCU(!1);
			return b5.bu(player, aCM, ee), 1
		}()) && (aE = bW.md(hI, hJ), m7 = Math.abs(hK - hI) >= Math.abs(hM - hJ) ? aE + av[hI < hK ? 1 : 3] : aE + av[hJ < hM ? 2 : 0], hI = bW.hN(m7), hJ = bW.d6(m7), gK.h5(cm, m7), ! function() {
			if (bW.bX(m7)) return;
			return 1
		}() ? aCS() : bW.sm(m7) && bW.a52(m7, player))
	}, this.h9 = function(wH, el) {
		player = wH, m7 = bW.md(bW.hN(el), bW.d6(el)), aCO()
	}
}

function rm() {
	var aCZ, aCa, sm, aCb;
	this.b = function() {
		var aE, hD, hE, a3i, aCc, cu, ez, n8, dI, lz, aR, bc, f7, ej, aCf;
		if (function() {
				if (sm = !0, aCb = "rgb(" + az.lw[0] + "," + az.lw[1] + "," + az.lw[2] + ")", az.a8y(az.mJ)) return 1;
				return sm = !1, 0
			}()) aCa = null;
		else {
			for (aCZ = bJ(96, 4), aCc = 1 === az.mJ ? (a3i = 0, 160) : (a3i = 128, 32), aCb = "rgb(" + a3i + "," + a3i + "," + a3i + ")", aCa = new Array(4), aE = 3; 0 <= aE; aE--) {
				if (aCa[aE] = document.createElement("canvas"), cu = aE % 2 == 0 ? az.b0 : aCZ, ez = aE % 2 == 0 ? aCZ : az.b1 + 2 * aCZ, aCa[aE].width = cu, aCa[aE].height = ez, lz = (dI = (n8 = aCa[aE].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, cu, ez)).data, aE % 2 == 0)
					for (hE = aCZ - 1; 0 <= hE; hE--)
						for (aR = aCc + Math.floor((hE + 1) * (a3i - aCc) / (aCZ + 1)), hD = cu - 1; 0 <= hD; hD--) lz[bc = 4 * ((0 === aE ? aCZ - hE - 1 : hE) * cu + hD)] = aR, lz[bc + 1] = aR, lz[bc + 2] = aR, lz[bc + 3] = 255;
				else {
					for (hD = aCZ - 1; 0 <= hD; hD--)
						for (aR = aCc + Math.floor((hD + 1) * (a3i - aCc) / (aCZ + 1)), hE = ez - 1 - aCZ; aCZ <= hE; hE--) lz[bc = 4 * (hE * cu + (3 === aE ? aCZ - hD - 1 : hD))] = aR, lz[bc + 1] = aR, lz[bc + 2] = aR, lz[bc + 3] = 255;
					for (ej = 1; 0 <= ej; ej--)
						for (hD = aCZ - 1; 0 <= hD; hD--)
							for (hE = aCZ - 1; 0 <= hE; hE--) f7 = (Math.pow(hD * hD + hE * hE, .5) + 1) / (aCZ + 1), aR = aCc + Math.floor((1 < f7 ? 1 : f7) * (a3i - aCc)), lz[bc = 4 * ((0 === ej ? aCZ - hE - 1 : hE + ej * (ez - aCZ)) * cu + (
								1 === aE ? hD : aCZ - hD - 1))] = aR, lz[bc + 1] = aR, lz[bc + 2] = aR, lz[bc + 3] = 255
				}
				n8.putImageData(dI, 0, 0)
			}
			aCf = aCc, az.lr.fillStyle = "rgb(" + aCf + "," + aCf + "," + aCf + ")", az.lr.fillRect(0, 0, az.b0, 1), az.lr.fillRect(0, az.b1 - 1, az.b0, 1), az.lr.fillRect(0, 0, 1, az.b1), az.lr.fillRect(az.b0 - 1, 0, 1, az.b1)
		}
	}, this.n2 = function() {
		var ej = sm ? 0 : -aCZ;
		aAY(ej, ej, az.b0 - 2 * ej, az.b1 - 2 * ej, i8.aCg, i8.aCh, i8.aCi, i8.aCj) || (d8.fillStyle = aCb, d8.fillRect(0, 0, hL, d3))
	}, this.d7 = function() {
		sm || (aAX(0, -aCZ, az.b0, aCZ, i8.aCg, i8.aCh, i8.aCi, i8.aCj) && d8.drawImage(aCa[0], i8.aCk, i8.aCl - aCZ), aAX(az.b0, -aCZ, aCZ, az.b1 + 2 * aCZ, i8.aCg, i8.aCh, i8.aCi, i8.aCj) && d8.drawImage(aCa[1], i8.aCk + az.b0, i8.aCl - aCZ),
			aAX(0, az.b1, az.b0, aCZ, i8.aCg, i8.aCh, i8.aCi, i8.aCj) && d8.drawImage(aCa[2], i8.aCk, i8.aCl + az.b1), aAX(-aCZ, -aCZ, aCZ, az.b1 + 2 * aCZ, i8.aCg, i8.aCh, i8.aCi, i8.aCj) && d8.drawImage(aCa[3], i8.aCk - aCZ, i8.aCl - aCZ))
	}
}

function sB() {
	this.jT = new aCm, this.a5Q = new aCn, this.n3 = new aCo, this.gL = new aCp, this.eP = new aCq, this.aCf = new aCr, this.aCs = new aCt, this.fE = new aCu, this.kR = new aCv, this.b = function() {
		this.n3.b(), this.gL.b(), this.eP.b(), this.aCf.b()
	}
}

function aCu() {
	function aD1(player, el, aD3, aD4) {
		for (var hI, hJ, cu, ez, dO, aD5, hK, hM, bU = el + aD4, aE = el; aE < bU; aE += aD3)
			if (hI = (hI = f3[player] - aE) < 1 ? 1 : hI, hJ = f6[player] - aE, hK = (hK = f2[player] + aE) >= az.b0 - 1 ? az.b0 - 2 : hK, ez = (hM = (hM = f5[player] + aE) >= az.b1 - 1 ? az.b1 - 2 : hM) - (hJ = hJ < 1 ? 1 : hJ), hK = (dO = bJ(em
					.random() * (2 * (hK - hI + hM - hJ)), em.value(100))) <= (cu = hK - hI) ? (aD5 = hI + dO, hJ) : dO <= cu + ez ? (aD5 = hK, hJ + dO - cu) : dO <= 2 * cu + ez ? (aD5 = hI + dO - cu - ez, hM) : (aD5 = hI, hJ + dO - 2 * cu - ez),
				aD2(player, hM = bW.md(aD5, hK))) return hM;
		return -1
	}

	function aD2(q5, bd) {
		return bW.bX(bd) && (bW.bh(bd) || q5 !== (bd = bW.bg(bd)) && eo(q5, bd) && 0 < bo[bd].length)
	}
	this.fF = function(player) {
		return !(0 === bo[player].length || bO[player] < 100) && eO.gL.kN !== eO.gL.kO && (eO.gL.kP[player] !== eO.gL.kQ && cM.cN.kI(player, 203, 32, 16) ? !! function(player) {
			var bd = function(player) {
				var aE, mh, mg, hI = f3[player],
					hJ = f6[player],
					dx = f2[player] - hI + 1,
					e0 = f5[player] - hJ + 1,
					aR = em.value(100);
				for (aE = 0; aE < 32; aE++)
					if (mh = hI + cA.cB(em.random() * dx, aR), mg = hJ + cA.cB(em.random() * e0, aR), mh = bW.md(mh, mg), aD2(player, mh)) return mh;
				return -1
			}(player);
			if (0 <= bd) return eO.kR.kS(player, bd >> 2);
			if (0 <= (bd = aD1(player, 1, 4, 40))) return eO.kR.kS(player, bd >> 2);
			if (0 <= (bd = aD1(player, 40, 8, 200))) return eO.kR.kS(player, bd >> 2);
			return
		}(player) && !! function(q5) {
			if (0 === eU.aa[2]) return void console.log("error 325234");
			var aCz = eU.aa[1] + kD.dQ[eU.aa[2] - 1] << 2;
			if (bW.bh(aCz)) return 1;
			return aCz = bW.bg(aCz), q5 !== aCz && !!eo(q5, aCz)
		}(player) && function(player) {
			return cM.cN.kK(player), eO.gL.kT(player), !0
		}(player) : void 0)
	}
}

function aCm() {
	function aD8(aD7) {
		var aDL = 4 + .03 * (1 + 1.5 * a0) * ck / eC;
		return kD.e3(aD7, eU.aa[1]) < aDL
	}
	this.jU = function(player, aD7) {
		return !!kD.eI(aD7) && eO.gL.kN !== eO.gL.kO && eO.gL.kP[player] !== eO.gL.kQ && 0 !== bo[player].length && !!eO.kR.kS(player, aD7) && !!aD8(aD7)
	}, this.jY = function(player, jX, aD7) {
		return !!(kD.eI(aD7) && this.kU(player, jX) && eO.kR.kV(aD7) && aD8(aD7))
	}, this.kU = function(player, id) {
		for (var aD9, aDA = player << 3, aDB = aDA + eO.gL.kP[player], aDC = eO.gL.aDC, aDD = eO.gL.aDD, aE = aDA; aE < aDB; aE++)
			if (id === aDD[aD9 = aDC[aE]]) return eU.aa[3] = aD9, !0;
		return !1
	}, this.jW = function(dg) {
		var aDE = eO.aCf.aDE;
		return eO.aCf.aDE = -1, !!this.kU(bN, aDE) && (cc.cd.jW(aDE, dg), !0)
	}, this.si = function(d0, d1) {
		var aE, aDB, aDF, aDC, aDG, aDH, aDI, f7, u6, aDJ, player = bN,
			bU = eO.gL.kP[player];
		if (0 === bU) return !1;
		for (aDC = eO.gL.aDC, aDH = eO.gL.aDH, u6 = eO.gL.u6, aDB = (player = player << 3) + bU, aDG = .4 * cM.iL.kn(.5) * ck / eC, aDF = -1, aE = player; aE < aDB; aE++) aDJ = aDC[aE], aDI = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(u6[aDJ]))), (
			f7 = kD.dt(d0, d1, aDH[aDJ])) - aDI < aDG && (aDG = f7, aDF = aDJ);
		return !(aDF < 0 || (eO.aCf.aDE = eO.gL.aDD[aDF], 0))
	}, this.sw = function(d0, d1) {
		var aE, aDF, aDG, aDH, aDI, f7, u6, bU = eO.gL.kN;
		if (bU < 1) return -1;
		for (aDH = eO.gL.aDH, u6 = eO.gL.u6, aDG = 1e3, aDF = -1, aE = 0; aE < bU; aE++) aDI = 16 * cM.iL.kn(.5) * (.625 + .125 * Math.sqrt(Math.sqrt(u6[aE]))), (f7 = kD.dt(d0, d1, aDH[aE])) < aDG && f7 < aDI && (aDG = f7, aDF = aE);
		return aDF
	}, this.aDK = function(d0, d1) {
		var aE, aDB, aDF, aDC, aDG, aDH, aDI, f7, u6, aDJ, player = bN,
			bU = eO.gL.kP[player];
		if (0 === bU) return -1;
		for (aDC = eO.gL.aDC, aDH = eO.gL.aDH, u6 = eO.gL.u6, aDB = (player = player << 3) + bU, aDG = .4 * cM.iL.kn(.5) * ck / eC, aDF = -1, aE = player; aE < aDB; aE++) aDJ = aDC[aE], aDI = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(u6[aDJ]))), (
			f7 = kD.dt(d0, d1, aDH[aDJ])) - aDI < aDG && (aDG = f7, aDF = aDJ);
		return aDF < 0 ? -1 : eO.gL.aDD[aDF]
	}
}

function aCn() {
	this.a5R = function(player) {
		for (var aDC = eO.gL.aDC, aDA = player << 3, aE = aDA + eO.gL.kP[player] - 1; aDA <= aE; aE--) this.aDM(aDC[aE])
	}, this.aDM = function(aDN) {
		var gL = eO.gL,
			aDO = gL.kN - 1,
			aDP = gL.u5[aDN],
			aDQ = gL.aDR[aDN],
			aDS = gL.aDH[aDN];
		gL.kN = aDO, gL.u5[aDN] = gL.u5[aDO], gL.aDT[aDN] = gL.aDT[aDO], gL.aDU[aDN] = gL.aDU[aDO], gL.aDH[aDN] = gL.aDH[aDO], gL.aDV[aDN] = gL.aDV[aDO], gL.u6[aDN] = gL.u6[aDO], gL.aDR[aDN] = gL.aDR[aDO], gL.aDD[aDN] = gL.aDD[aDO], gL.aDW[aDN] =
			gL.aDW[aDO], gL.aDC[gL.u5[aDN]] = aDN,
			function(a34) {
				var player = a34 >> 3,
					gL = eO.gL,
					bU = gL.kP[player] - 1,
					aDZ = (player << 3) + bU;
				gL.kP[player] = bU, aDZ !== a34 && (gL.aDC[a34] = gL.aDC[aDZ], gL.u5[gL.aDC[a34]] = a34)
			}(aDP), eO.eP.eP[kD.eN(gL.aDH[aDN])][gL.aDR[aDN]] = aDN, aDO = kD.eN(aDS), aDP = aDQ, aDO = eO.eP.eP[aDO], gL = aDO.pop(), aDP !== aDO.length && (aDO[aDP] = gL, eO.gL.aDR[gL] = aDP)
	}
}

function aCo() {
	var aDc, aDd = 8,
		aDe = new Array(2);

	function aDf(cm) {
		var dE = aDd + 4,
			sS = cM.iL.ln(dE, dE),
			dM = cM.iL.getContext(sS, !0),
			dI = cM.iL.getImageData(dM, dE, dE),
			lz = dI.data;
		return aDg(lz, dE + 1, cm), aDg(lz, dE + 2, cm), aDg(lz, 2 * dE + 1, cm), aDg(lz, 2 * dE - 3, cm), aDg(lz, 2 * dE - 2, cm), aDg(lz, 3 * dE - 2, cm), aDg(lz, dE * (dE - 3) + 1, cm), aDg(lz, dE * (dE - 2) + 1, cm), aDg(lz, dE * (dE - 2) + 2,
			cm), aDg(lz, dE * (dE - 2) - 2, cm), aDg(lz, dE * (dE - 1) - 3, cm), aDg(lz, dE * (dE - 1) - 2, cm), dM.putImageData(dI, 0, 0), sS
	}

	function aDg(lz, dg, cm) {
		dg *= 4;
		lz[dg] = 255, lz[1 + dg] = 255, lz[2 + dg] = cm, lz[3 + dg] = 255
	}

	function ln(player) {
		var aDh = aDd >> 1,
			sS = cM.iL.ln(aDd, aDd);
		return function(dM, player, hD, hE) {
			var dx, dg, aDj, a35, dE = aDd,
				dI = cM.iL.getImageData(dM, dE, dE),
				lz = dI.data,
				ca = (dE >> 1) - .5,
				aCb = bW.a4r(player),
				aDl = cM.lx.po(aCb, .5);
			cM.lx.pp(aCb, aDl, 300) || cM.lx.pr(aCb, 100);
			for (hE = 0; hE < dE; hE++)
				for (hD = 0; hD < dE; hD++) a35 = (dE - 1.5) * (dE - 1.5) / 4, aDj = (dx = (dx = hD - ca) * dx + (dx = hE - ca) * dx) <= (dE - 4.5) * (dE - 4.5) / 4 ? aDl : aCb, lz[dg = 4 * (hE * dE + hD)] = aDj[0], lz[1 + dg] = aDj[1], lz[2 +
					dg] = aDj[2], lz[3 + dg] = a35 < dx ? 0 : 255;
			dM.putImageData(dI, 0, 0)
		}(cM.iL.getContext(sS, !0), player, aDh, aDh), sS
	}
	this.b = function() {
		aDc = new Array(bZ), aDe[0] = aDf(255), aDe[1] = aDf(0)
	}, this.d7 = function() {
		var aE, player, aDm, ee, aDn, dw, aDr, aDt, aDu, aDH = eO.gL.aDH,
			u5 = eO.gL.u5,
			u6 = eO.gL.u6,
			aDv = aDc,
			aDw = bN,
			aDx = -1,
			bU = eO.gL.kN,
			aDy = hL,
			aDz = d3,
			aE0 = az.b0 << 4,
			aE1 = eC,
			dq = aE1 / aDd,
			hI = eB / aE1,
			hJ = eD / aE1,
			dx = (aDy + eB) / aE1 - hI,
			e0 = (aDz + eD) / aE1 - hJ,
			dM = d8;
		for (eO.jT.kU(bN, eO.aCf.aDE) && (aDx = eU.aa[3]), dM.fillStyle = dB.dC, aE = 0; aE < bU; aE++) player = u5[aE] >> 3, ee = u6[aE], aDm = .625 + .125 * Math.sqrt(Math.sqrt(ee)), aDn = (dw = aDH[aE]) % aE0 / 16 - aDm, dw = aDz * (Math
			.floor(dw / aE0) / 16 - aDm - hJ) / e0, aDr = -2 * (aDu = aE1 * aDm) * (1 + (aDt = +(player === aDw)) / 8), aDt = aDt * aDu / 4, (aDu = aDy * (aDn - hI) / dx) < aDr || dw < aDr || aDy + aDt < aDu || aDz + aDt < dw || (aDn = aDm *
			aE1, dM.imageSmoothingEnabled = (aDr = 2 * aDm * dq) < 3, void 0 === (aDt = aDv[player]) && (aDv[player] = aDt = ln(player)), player === aDw && (dM.setTransform(aDr, 0, 0, aDr, aDu - 2 * aDr, dw - 2 * aDr), dM.drawImage(aDe[+(
				aE === aDx)], 0, 0)), dM.setTransform(aDr, 0, 0, aDr, aDu, dw), dM.drawImage(aDt, 0, 0), (aDm = Math.floor(function(ee) {
				if (ee < 1e3) return .42;
				if (ee < 1e4) return .34;
				if (ee < 1e6) return .26;
				if (ee < 1e8) return .19;
				return .15
			}(ee) * aDn)) < 6) || (dM.setTransform(1, 0, 0, 1, 0, 0), 20 <= aDm ? (dM.font = cM.iL.lL(.85 * aDm, 1), dM.fillText(gR.hU(ee), aDu + aDn, dw + .93 * aDn + .085 * aDm), (aDm *= g8.a7I(player)) < 6 || (dM.font = cM.iL.lL(aDm, 1),
			dM.fillText(hV[player], aDu + aDn, dw + 1.16 * aDn + .1 * aDm))) : (dM.font = cM.iL.lL(aDm, 1), dM.fillText(gR.hU(ee), aDu + aDn, dw + aDn + .1 * aDm)));
		dM.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aCt() {
	this.fF = function() {
		for (var aE3, aCs, aDW = eO.gL.aDW, aDH = eO.gL.aDH, aDU = eO.gL.aDU, aE = eO.gL.kN - 1; 0 <= aE; aE--) aE3 = aDH[aE], 0 !== (aCs = aDW[aE]) && aE3 === aDU[aE] && (! function(aE, aE5, dd) {
			var ed, player = eO.gL.u5[aE] >> 3,
				dd = aE5 + kD.dQ[dd] << 2,
				aE = eO.gL.u6[aE];
			if (bW.bh(dd)) ed = bZ;
			else {
				if ((ed = bW.bg(dd)) === player) return cM.cN.jo(player, aE);
				if (!eo(player, ed)) return cc.fa.jm(player, ed, aE)
			}
			player === bN && (bR.bS[13] += aE);
			bV[player].push(aE5 << 2), b5.ea(player, aE, ed), bL.eb(player, !0)
		}(aE, kD.eM(aE3), aCs - 1), eO.a5Q.aDM(aE))
	}
}

function aCp() {
	this.aE6 = null, this.kO = 512, this.kQ = 8, this.kN = 0, this.h0 = 0, this.u5 = new Uint16Array(this.kO), this.aDT = new Uint32Array(this.kO), this.aDU = new Uint32Array(this.kO), this.aDH = new Uint32Array(this.kO), this.aDV = new Uint16Array(
			this.kO), this.u6 = new Uint32Array(this.kO), this.aDR = new Uint16Array(this.kO), this.aDD = new Uint16Array(this.kO), this.aDW = new Uint8Array(this.kO), this.kP = new Uint8Array(bZ), this.aDC = new Uint16Array(this.kQ * bZ), this.b =
		function() {
			this.h0 = 0, this.kN = 0, this.aE6 = new Uint8Array(az.b0 + az.b1), this.kP.fill(0)
		}, this.kT = function(player) {
			var bU = this.kN,
				aE7 = kD.eL(eU.aa[0]),
				aCB = this.kP[player],
				aE8 = (player << 3) + aCB;
			e6[player] = 2, this.u5[bU] = aE8, this.aDT[bU] = aE7, this.aDH[bU] = aE7, this.aDU[bU] = kD.eL(eU.aa[1]), this.aDV[bU] = 0, this.u6[bU] = eU.aX[0], this.aDR[bU] = eO.eP.kT(bU, kD.eN(aE7)), this.aDD[bU] = this.h0, this.aDW[bU] = eU.aa[2],
				this.h0 = this.h0 + 1 & 1023, this.aDC[aE8] = bU, this.kP[player] = aCB + 1, this.kN++
		}, this.jW = function() {
			var aD9 = eU.aa[3];
			this.aDT[aD9] = this.aDH[aD9], this.aDU[aD9] = kD.eL(eU.aa[1]), this.aDV[aD9] = 0, this.aDW[aD9] = eU.aa[2]
		}, this.fF = function() {
			if (aL.fU() % 5 == 3) {
				eO.aCs.fF(), ! function(t2) {
					var aE, aEC, aED, aEE, aEF, aE7, aEJ, aEK, be, bd, aDT = t2.aDT,
						aDU = t2.aDU,
						aDH = t2.aDH,
						u6 = t2.u6,
						aDV = t2.aDV,
						aDR = t2.aDR,
						t2 = t2.kN,
						aE0 = az.b0 << 4;
					for (aE = t2 - 1; 0 <= aE; aE--) aED = aDH[aE], aEC = aDU[aE], aED !== aEC && (aE7 = aDT[aE], aEJ = aEC % aE0 - (aEF = aE7 % aE0), aEK = ~~((aEC + .5) / aE0) - (aE7 = ~~((aE7 + .5) / aE0)), be = ~~Math.sqrt(aEJ * aEJ + aEK *
						aEK + .5), bd = 4e5 + 2e4 * ~~Math.sqrt(.5 + (Math.sqrt(u6[aE] + .5) << 4)), 65535 <= (bd = aDV[aE] + Math.max(~~((.5 + bd) / be), 1)) ? aDH[aE] = aEE = aEC : (aDV[aE] = bd, aDH[aE] = aEE = aEF + cA.cB(bd * aEJ,
						65536) + aE0 * (aE7 + cA.cB(bd * aEK, 65536))), aDR[aE] = eO.eP.aEM(aDR[aE], aED, aEE))
				}(this), ! function(t2) {
					var aE, mC, ca, cV, fV, aEN, aEO, aEP, m7, dV, hI, hJ, aEQ, aDG, aER, m8, aE7, aEU, bU = t2.kN,
						aDH = t2.aDH,
						u5 = t2.u5,
						u6 = t2.u6,
						eP = eO.eP.eP,
						aEV = eP.length,
						aEW = eO.eP.aEW,
						aE0 = az.b0 << 4,
						aEX = cS,
						aEY = fW.fX,
						bd = (bU - 1) * (aL.fU() % 2);
					for (aE = 0; aE < bU; aE++) {
						for (mC = Math.abs(aE - bd), aE7 = aDH[mC], ca = kD.eN(aE7), m7 = u5[mC] >> 3, hI = aE7 % aE0, hJ = ~~((aE7 + .5) / aE0), aE7 = u6[mC], aEU = 80 + ~~Math.sqrt(.5 + (Math.sqrt(aE7 + .5) << 8)), aDG = Math.min(aEU * aEU,
								262144), aER = -1, cV = 0; cV < 9; cV++)
							if (!((aEN = ca + aEW[cV]) < 0 || aEV <= aEN))
								for (aEP = eP[aEN], aEO = aEP.length, fV = 0; fV < aEO; fV++) aEQ = aEP[fV], m8 = u5[aEQ] >> 3, m7 == m8 || aEX && aEY[m7] === aEY[m8] || (m8 = aDH[aEQ], (m8 = (dV = hI - m8 % aE0) * dV + (dV = hJ - ~~((m8 + .5) /
									aE0)) * dV) < aDG && (aER = aEQ, aDG = m8)); - 1 !== aER && (aE7 = Math.min(Math.max(1, cA.cB(aE7 * (aEU - Math.floor(Math.sqrt(aDG + .5))), 5 * aEU)), u6[aER]), u6[mC] -= aE7 >> 4, u6[aER] -= aE7)
					}
				}(this);
				var aE, ee, u6 = (t2 = this).u6,
					t2 = t2.kN;
				for (aE = t2 - 1; 0 <= aE; aE--) ee = u6[aE], 0 < (ee -= Math.max(1, ee >> 7)) ? u6[aE] = ee : eO.a5Q.aDM(aE)
			}
		}
}

function aCq() {
	this.aEZ = 32, this.hD = 0, this.hE = 0, this.eQ = 0, this.aEa = 0, this.aEb = 4, this.eP = null, this.aEW = new Int16Array(9), this.b = function() {
		this.eQ = 1 + cA.cB(az.b0 - 1, this.aEZ), this.aEa = 1 + cA.cB(az.b1 - 1, this.aEZ), this.eP = new Array(this.eQ * this.aEa), cM.lx.pn(this.eP);
		var hD, hE, aEW = this.aEW,
			cu = this.eQ;
		for (hD = -1; hD <= 1; hD++)
			for (hE = -1; hE <= 1; hE++) aEW[3 * (1 + hE) + 1 + hD] = hE * cu + hD
	}, this.kT = function(aEd, aE) {
		return this.eP[aE].push(aEd), this.eP[aE].length - 1
	}, this.aEM = function(aEe, aE7, aEC) {
		var aEf, aEg, aE7 = kD.eN(aE7),
			aEC = kD.eN(aEC);
		return aE7 === aEC ? aEe : (aEf = this.eP[aE7].pop(), this.eP[aE7].length === aEe ? this.kT(aEf, aEC) : (aEg = this.eP[aE7][aEe], this.eP[aE7][aEe] = aEf, eO.gL.aDR[aEf] = aEe, this.kT(aEg, aEC)))
	}
}

function aCv() {
	function cU(aEC, aEh) {
		if (! function(aEC, aD7) {
				var dU = kD.eM(aEC),
					aEk = Math.abs(kD.dW(aD7) - kD.dW(dU)),
					dU = Math.abs(kD.dY(aD7) - kD.dY(dU));
				0 !== Math.max(aEk, dU) && ! function(aE7, aEC, aEk, aEl) {
					var aEn = kD.dz(aE7),
						aE7 = kD.e2(aE7),
						aEp = kD.dz(aEC),
						aEC = kD.e2(aEC),
						aEp = aEp - aEn,
						aEC = aEC - aE7,
						aEt = Math.abs(aEp),
						aEu = Math.abs(aEC),
						aEp = 0 < aEp ? 1 : 3,
						aEC = 0 < aEC ? 2 : 0;
					aEu < aEt ? aEx(aEn, aE7, aEn + aEt, aE7 + aEu, aEp, aEC, aEk) : aEx(aE7, aEn, aE7 + aEu, aEn + aEt, aEC, aEp, aEl)
				}(aEC, kD.eL(aD7), aEk, dU)
			}(aEC, aEh), 0 === eU.aW[0]) return !!bW.sm(aEh << 2);
		if (function(aD7) {
				if (bW.sm(aD7 << 2)) return 1;
				return function(aD7) {
					var aE, dd, aE6 = eO.gL.aE6,
						aF1 = kD,
						bU = eU.aW[0],
						aF2 = 4 * aD7;
					for (aE = bU - 1; 0 <= aE; aE--)
						if (dd = aE6[aE], aF2 = aF1.eS(aF2, dd + 2 & 3), bW.sm(aF2)) return eU.aW[0] = aE, eU.aa[1] = aF2 >> 2, eU.aa[2] = 1 + dd, 1;
					return
				}(aD7)
			}(aEh)) {
			var aE, aEh = kD.eM(aEC),
				lz = a05,
				aE6 = eO.gL.aE6,
				bU = eU.aW[0] - 1,
				aF2 = 4 * aEh,
				dR = kD.dR;
			for (aE = 0; aE < bU; aE++)
				if (aF2 += dR[aE6[aE]], 0 !== lz[aF2 + 3] || 2 !== lz[aF2 + 2]) return !!void 0;
			return !!1
		}
		return !1
	}

	function aEx(aEn, aEo, aEp, aEq, aEv, aEw, aEk) {
		for (var hE, aE6 = eO.gL.aE6, bd = 0, aEy = 0, ez = aEq - aEo, cu = aEp - aEn, aEz = aEn % 16, aE = 1; aE <= aEk; aE++) aE6[bd++] = aEv, aE6[bd] = aEw, bd += (hE = (ez * (aEz + (aE << 4)) + .5) / cu >> 4) - aEy, aEy = hE;
		eU.ac(eU.aW, bd)
	}
	this.kS = function(player, aEh) {
		var dd, dU, dT = kD.df(player, aEh);
		return dT !== aEh && (dd = kD.dS(dT, aEh), dU = kD.eR(dT, dd), !(!bW.sm(dU << 2) && (dd = kD.dc(dT, aEh, dd), dU = kD.eR(dT, dd), bW.m9(dU << 2) || !bW.sm(dU << 2)) || (eU.aa[0] = dU, eU.aa[1] = aEh, eU.aa[2] = 0, !cU(kD.eL(dU), aEh)) ||
			0 !== eU.aa[2] && kD.dp(player, eU.aa[1] + kD.dQ[eU.aa[2] - 1] << 2)))
	}, this.kV = function(aEh) {
		var aE7 = eO.gL.aDH[eU.aa[3]];
		return eU.aa[1] = aEh, eU.aa[2] = 0, cU(aE7, aEh)
	}
}

function aCr() {
	var aDd = 32,
		aF4 = new Array(2);

	function ln(fV) {
		var hD, hE, dg, e0, dx, dE = aDd,
			sS = cM.iL.ln(dE, dE),
			dM = cM.iL.getContext(sS, !0),
			dI = cM.iL.getImageData(dM, dE, dE),
			lz = dI.data,
			ca = (dE >> 1) - .5,
			aF5 = Math.sqrt(ca * ca);
		for (lz.fill(255), hE = 0; hE < dE; hE++)
			for (hD = 0; hD < dE; hD++) dx = hD - ca, e0 = hE - ca, dg = 4 * (hE * dE + hD), dx = 714 * (aF5 - Math.sqrt(dx * dx + e0 * e0)) / aF5, lz[2 + dg] = fV, lz[3 + dg] = 255 < dx ? 0 : dx;
		return dM.putImageData(dI, 0, 0), sS
	}
	this.aDE = -1, this.b = function() {
		this.aDE = -1, aF4[0] || (aF4[0] = ln(255), aF4[1] = ln(0))
	}, this.aF6 = function(dM, dq, hD, hE, dO, aE) {
		kD.e8() && (dM.setTransform(dq *= 4 / 3 * .625, 0, 0, dq, hD - (dO *= 4 / 3), hE - dO), dM.drawImage(aF4[+(eO.gL.aDD[aE] === this.aDE)], 0, 0))
	}
}

function a8H() {
	var a1i, a8C, oW;

	function aFA() {}

	function a8I() {
		gB.a8I(a1i, a8C)
	}

	function aFC(oX) {
		r1.aFE(a1i, new Uint8Array(oX.data))
	}

	function aFD() {}

	function a8N(oX) {
		gB.a8N(a1i, oX)
	}
	this.b = function(cm, aF7) {
		a1i = cm, a8C = aF7, 0;
		cm = vS[0];
		a1i < gB.a2V ? cm += gB.a85[a1i] + vS[1 + a8W] : cm += gB.a85[0] + "/i" + (1 + a8W) + (a1i - gB.a2W) + "/", (oW = new WebSocket(cm)).binaryType = "arraybuffer", oW.onopen = a8I, oW.onmessage = aFC, oW.onclose = a8N, oW.onerror = aFD
	}, this.aF9 = function() {
		return oW.readyState === oW.CONNECTING
	}, this.a1a = function() {
		return oW.readyState === oW.OPEN
	}, this.a8E = function() {
		return this.aF9() || this.a1a()
	}, this.a8F = function(aF7) {
		a8C = aF7
	}, this.send = function(k8) {
		this.a1a() && oW.send(k8)
	}, this.close = function(a8K) {
		this.a8E() && (oW.close(a8K), this.lE())
	}, this.lE = function() {
		oW.onopen = aFA, oW.onmessage = aFA, oW.onclose = aFA, oW.onerror = aFA
	}
}

function wc() {
	if (fY < 3) return !1;
	if (cA.cB(3 * bv[gr[2]], 2) < bv[gr[0]]) return !1;
	if (bv[gr[0]] + bv[gr[1]] + bv[gr[2]] < qR - cA.cB(qR, 10)) return !1;
	if (8 * Math.min(Math.min(bO[gr[0]], bO[gr[1]]), bO[gr[2]]) < 5 * Math.max(Math.max(bO[gr[0]], bO[gr[1]]), bO[gr[2]])) return !1;
	if (cS) {
		if (fW.fX[gr[0]] === fW.fX[gr[1]]) return !1;
		if (fW.fX[gr[0]] === fW.fX[gr[2]]) return !1;
		if (fW.fX[gr[1]] === fW.fX[gr[2]]) return !1
	}
	return !0
}

function a8e() {
	this.dF = 501, this.oO = new Uint32Array(this.dF), this.q8 = new Uint32Array(this.dF), this.zj = new Uint16Array(this.dF), this.tL = 0, this.aFH = 1, this.fV = 0, this.max = [0, 0, 0], this.bS = 0, this.aFI = ["Avg. Attack Strength",
		"Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs",
		"Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses"
	], this.b = function() {
		this.tL = 0, this.aFH = 1, this.fV = 0, this.aFJ(), this.aFK()
	}, this.kL = function(player, eA) {
		player === bN && (this.bS[0] += eA, this.bS[1]++, this.bS[12] += eU.aX[1], this.bS[13] += eU.aX[0])
	}, this.jp = function(player, jP) {
		donationsTracker.logDonation(player, jP, eU.aX[0]);
		player === bN && (g7.jp(eU.aX[0], eU.aX[1], jP), this.bS[12] += eU.aX[1], this.bS[16] += eU.aX[0]), jP === bN && (g7.uN(eU.aX[0], player), this.bS[10] += eU.aX[0])
	}, this.fF = function() {
		0 < this.fV-- || this.aFL()
	}, this.aFL = function() {
		0 !== e6[bN] && (this.oO[this.tL] = bv[bN], this.q8[this.tL] = bO[bN], this.zj[this.tL] = bP.zk(bN), this.aFM(this.tL), this.tL++, this.tL === this.dF && this.aFN(), this.fV = this.aFH - 1, n6.cp())
	}, this.aFN = function() {
		this.aFJ(), this.aFM(0), this.tL = 1 + bJ(this.dF, 2);
		for (var aE = 1; aE < this.tL; aE++) this.oO[aE] = this.oO[2 * aE], this.q8[aE] = this.q8[2 * aE], this.zj[aE] = this.zj[2 * aE], this.aFM(aE);
		this.aFH *= 2
	}, this.aFJ = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.aFK = function() {
		this.bS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.aFM = function(aE) {
		this.max[0] = this.oO[aE] > this.max[0] ? this.oO[aE] : this.max[0], this.max[1] = this.q8[aE] > this.max[1] ? this.q8[aE] : this.max[1], this.max[2] = this.zj[aE] > this.max[2] ? this.zj[aE] : this.max[2]
	}
}

function a8f() {
	this.cu = 0, this.ez = 0, this.nD = 0, this.nE = 0, this.a0a = 0, this.a0b = 0, this.ud = 0, this.ue = 0, this.a3U = 0, this.lD = 0, this.aFO = 0, this.aFP = 0, this.wB = 0, this.cm = 0, this.t5 = ["Territory", "Balance", "Interest", "Numbers"],
		this.pF = !1, this.aFQ = -1, this.aFR = !1, this.aFS = [0, 0], this.b = function() {
			this.pF = !1, this.aFQ = -1, this.aFR = !1, this.resize()
		}, this.resize = function() {
			this.cu = a1 < 1.369 * a2 ? a1 : 1.369 * a2;
			var be = a0 && a1 < a2 ? 1 : a0 ? .8 : a1 < a2 ? .65 : .59;
			this.cu = Math.floor(be * this.cu), this.cu -= a0 && a1 < a2 ? 2 * ko + 2 : 0, this.ez = Math.floor(this.cu / 1.369), this.wB = Math.floor(this.ez / 150), this.wB = Math.max(this.wB, 1.5), this.nD = Math.floor(1 + .02 * this.cu), this
				.nE = Math.floor(1 + .04 * this.cu), this.ud = this.nE, this.ue = Math.floor(1 + .075 * this.cu), this.lD = Math.floor(1 + .1125 * this.cu), this.aFO = Math.floor(this.cu * (a0 ? .03 : .029)), this.aFO = Math.max(this.aFO, 4), this
				.aFP = Math.floor(.035 * this.cu), this.aFP = Math.max(this.aFP, 4), this.a3U = this.ez - 2 * this.ud - this.ue - this.lD, this.pF && this.aFT()
		}, this.cz = function(d0, d1) {
			var mV, mU;
			return !!this.pF && (mU = d0, mV = d1, d0 -= bJ(hL - this.cu, 2), d1 -= bJ(d3 - this.ez, 2), d0 < 0 || d1 < 0 || d0 >= this.cu || d1 >= this.ez || d0 >= this.cu - this.lD && d1 < this.lD ? 1 < cK.cz(mU, mV) || this.lE() : d1 < this.lD ||
				(d1 < this.ez - this.ue ? (this.aFR = !0, this.aFQ = (d0 - 2 * this.nD - this.a0a) / this.a0b, 3 !== this.cm && (aL.cx = !0)) : (mU = (mU = Math.floor(d0 / (this.cu / this.t5.length))) < 0 ? 0 : mU >= this.t5.length ? this.t5
					.length - 1 : mU) !== this.cm && (this.cm = mU, this.aFT(), aL.cx = !0)), !0)
		}, this.pc = function() {
			var aFU = Math.floor((this.aFS[0] + eB) / eC),
				aFV = Math.floor((this.aFS[1] + eD) / eC);
			aFU < 1 || aFV < 1 || aFU >= az.b0 - 1 || aFV >= az.b1 - 1 || console.log(aFU + " " + aFV)
		}, this.om = function(d0, d1) {
			return this.aFS[0] = d0, this.aFS[1] = d1, !(!this.pF || !this.aFR || (d0 -= bJ(hL - this.cu, 2), d1 = this.aFQ, this.aFQ = (d0 - 2 * this.nD - this.a0a) / this.a0b, (0 <= this.aFQ && this.aFQ <= 1 || 0 <= d1 && d1 <= 1) && (aL.cx = !0),
				0))
		}, this.pJ = function() {
			this.aFR && (this.aFR = !1)
		}, this.pY = function() {
			this.pF ? this.lE() : this.show()
		}, this.show = function() {
			bR.tL < 2 || (this.pF = !0, this.aFT())
		}, this.lE = function() {
			this.pF = !1, this.aFQ = -1, aL.cx = !0
		}, this.aFT = function() {
			this.cm < 2 ? this.a0a = cv.measureText(gR.hU(bR.max[this.cm]), this.aFO + co) : 2 === this.cm && (this.a0a = cv.measureText(g9.uQ(6, 2), this.aFO + co)), this.a0b = this.cu - 2 * this.nD - this.a0a - this.nE
		}, this.cp = function() {
			this.pF && this.aFT()
		}, this.d7 = function() {
			this.pF && this.ui()
		}, this.ui = function() {
			var hD = bJ(hL - this.cu, 2),
				hE = bJ(d3 - this.ez, 2);
			d8.setTransform(1, 0, 0, 1, hD, hE), d8.fillStyle = dB.iR, d8.fillRect(0, this.lD, this.cu, this.ez - this.lD), this.aFW(), this.aFX(), d8.strokeRect(0, 0, this.cu, this.ez), d8.textAlign = vN, d8.font = this.aFO + co, 0 === this.cm ?
				this.aFY(bR.oO, hD, hE) : 1 === this.cm ? this.aFY(bR.q8, hD, hE) : 2 === this.cm ? this.aFZ(hD, hE) : 3 === this.cm && (this.aFa(hD, hE), this.aFb(hD, hE)), cK.tN(Math.floor(hD + this.cu - .725 * this.lD), Math.floor(hE + .275 * this
					.lD), Math.floor(.45 * this.lD)), d8.setTransform(1, 0, 0, 1, 0, 0)
		}, this.aFW = function() {
			var aE, a3;
			for (d8.lineWidth = this.wB, d8.textBaseline = d9, d8.textAlign = dA, d8.strokeStyle = dB.dC, d8.font = cn + this.aFP + co, a3 = this.cu / this.t5.length, d8.fillStyle = dB.ij, d8.fillRect(this.cm * a3, this.ez - this.ue, a3, this.ue), d8
				.fillStyle = dB.dC, d8.fillRect(0, this.ez - this.ue - .5 * this.wB, this.cu, this.wB), aE = 1; aE <= 3; aE++) d8.fillRect(aE * a3, this.ez - this.ue, this.wB, this.ue);
			for (aE = this.t5.length - 1; 0 <= aE; aE--) d8.fillText(this.t5[aE], (aE + .5) * a3, this.ez - .46 * this.ue)
		}, this.aFX = function() {
			d8.fillStyle = dB.iz, d8.fillRect(0, 0, this.cu, this.lD), d8.fillStyle = dB.dC, d8.fillRect(0, this.lD - .5 * this.wB, this.cu, this.wB), d8.font = cn + Math.floor(.39 * this.lD) + co, d8.fillText("Statistics", Math.floor(this.cu / 2),
				Math.floor(.55 * this.lD))
		}, this.aFY = function(ad, hD, hE) {
			var ca = bR.max[this.cm],
				ci = (d8.setTransform(1, 0, 0, 1, hD + 2 * this.nD + this.a0a, hE + this.ud + this.lD), d8.lineWidth = 2, this.a3U / Math.sqrt(ca));
			d8.beginPath(), d8.moveTo(this.a0b, this.a3U - ci * Math.sqrt(ad[bR.tL - 1]));
			for (var aE = bR.tL - 2; 0 <= aE; aE--) d8.lineTo(aE * this.a0b / (bR.tL - 1), this.a3U - ci * Math.sqrt(ad[aE]));
			d8.stroke();
			hD = this.tN(ad, ci, .5);
			hD < .95 && d8.fillText(gR.hU(ca), -this.nD, 0), .05 < Math.abs(hD - .5) && d8.fillText(gR.hU(Math.floor(ca / 4)), -this.nD, Math.floor(this.a3U / 2)), .05 < hD && d8.fillText("0", -this.nD, this.a3U)
		}, this.aFZ = function(hD, hE) {
			d8.setTransform(1, 0, 0, 1, hD + 2 * this.nD + this.a0a, hE + this.ud + this.lD), d8.lineWidth = 2;
			var ci = this.a3U / Math.max(bR.max[this.cm], 1);
			d8.beginPath(), d8.moveTo(this.a0b, this.a3U - ci * bR.zj[bR.tL - 1]);
			for (var aE = bR.tL - 2; 0 <= aE; aE--) d8.lineTo(aE * this.a0b / (bR.tL - 1), this.a3U - ci * bR.zj[aE]);
			d8.stroke();
			hD = this.tN(bR.zj, ci, 1), hE = bR.max[this.cm] / 100;
			hD < .95 && d8.fillText(g9.uQ(hE, 2), -this.nD, 0), .05 < Math.abs(hD - .5) && d8.fillText(g9.uQ(hE / 2, 2), -this.nD, Math.floor(this.a3U / 2)), .05 < hD && d8.fillText(g9.uQ(0, 2), -this.nD, this.a3U)
		}, this.aFa = function(hD, hE) {
			d8.setTransform(1, 0, 0, 1, hD + .34 * this.cu, hE + 2 * this.ud + this.lD), d8.textAlign = vN;
			for (var z9 = this.ez - 4 * this.ud - this.ue - this.lD, aE = 7; 0 <= aE; aE--) d8.fillText(bR.aFI[aE], 0, aE * z9 / 7);
			d8.setTransform(1, 0, 0, 1, hD + .39 * this.cu, hE + 2 * this.ud + this.lD), d8.textAlign = tv;
			hD = bR.bS[1];
			for (d8.fillText(g9.uQ(bR.bS[0] / (10 * (hD < 1 ? 1 : hD)), 1), 0, 0), aE = 6; 1 <= aE; aE--) d8.fillText(bR.bS[aE].toString(), 0, aE * z9 / 7);
			d8.fillText(g9.uQ(100 * (1 - bv[bN] / bR.bS[7]), 0), 0, z9)
		}, this.aFb = function(hD, hE) {
			d8.setTransform(1, 0, 0, 1, hD + .79 * this.cu, hE + 2 * this.ud + this.lD), d8.textAlign = vN;
			var aE, z9 = this.ez - 4 * this.ud - this.ue - this.lD;
			for (d8.fillStyle = dB.id, aE = 2; 0 <= aE; aE--) d8.fillText(bR.aFI[aE + 8], 0, aE * z9 / 9);
			for (d8.fillStyle = dB.ic, d8.fillText(bR.aFI[11], 0, 3 * z9 / 9), d8.fillStyle = dB.is, aE = 8; 4 <= aE; aE--) d8.fillText(bR.aFI[aE + 8], 0, aE * z9 / 9);
			d8.fillStyle = dB.ir, d8.fillText(bR.aFI[17], 0, 9 * z9 / 9), d8.fillStyle = dB.id;
			var u3 = gR.hU(bR.bS[8] + bR.bS[9] + bR.bS[10] + bR.bS[11]),
				aFc = d8.measureText(u3).width,
				hD = (d8.setTransform(1, 0, 0, 1, hD + .83 * this.cu + aFc, hE + 2 * this.ud + this.lD), d8.fillText(gR.hU(bR.bS[8]), 0, 0), d8.fillText(gR.hU(bR.bS[9]), 0, z9 / 9), d8.fillText(gR.hU(bR.bS[10]), 0, 2 * z9 / 9), d8.fillStyle = dB.ic,
					d8.fillText(u3, 0, 3 * z9 / 9), d8.fillStyle = dB.is, bR.bS[13] - b5.a6N(bN)),
				aFc = (d8.fillText(gR.hU(bR.bS[12]), 0, 4 * z9 / 9), d8.fillText(gR.hU(hD), 0, 5 * z9 / 9), d8.fillText(gR.hU(bR.bS[14]), 0, 6 * z9 / 9), d8.fillText(gR.hU(bR.bS[15]), 0, 7 * z9 / 9), d8.fillText(gR.hU(bR.bS[16]), 0, 8 * z9 / 9), bR
					.bS[12] + hD + bR.bS[14] + bR.bS[15] + bR.bS[16] + bR.bS[17]);
			d8.fillStyle = dB.ir, d8.fillText(gR.hU(aFc), 0, z9), d8.fillStyle = dB.dC
		}, this.tN = function(ad, ci, xr) {
			var aE, oX, ae;
			return this.aFQ < 0 || 1 < this.aFQ ? .25 : (aE = this.aFQ * (bR.tL - 1), ae = ad[oX = Math.floor(aE)], ae += (aE - oX) * (ad[oX < bR.tL - 1 ? oX + 1 : oX] - ae), d8.strokeStyle = dB.iW, .04 < this.aFQ && this.aFf(0, this.a3U - ci * Math
					.pow(ae, xr), aE * this.a0b / (bR.tL - 1), this.a3U - ci * Math.pow(ae, xr)), .04 < ae / bR.max[this.cm] && this.aFf(aE * this.a0b / (bR.tL - 1), this.a3U, aE * this.a0b / (bR.tL - 1), this.a3U - ci * Math.pow(ae, xr)), d8
				.fillStyle = dB.iu, d8.beginPath(), d8.arc(aE * this.a0b / (bR.tL - 1), this.a3U - ci * Math.pow(ae, xr), Math.max(2, .014 * this.ez), 0, 2 * Math.PI), d8.fill(), ad = this.aFQ * aL.zl, ad = 0 === e6[bN] ? Math.floor(ad * gZ.zs) :
				Math.floor(ad * aL.fU()), d8.fillStyle = dB.dC, d8.fillText(1 === xr ? g9.uQ(ae / 100, 2) : gR.hU(Math.floor(ae)), -this.nD, this.a3U - ci * Math.pow(ae, xr)), d8.textAlign = dA, d8.fillText(g9.yT(ad), aE * this.a0b / (bR.tL - 1),
					this.a3U + this.aFO - (a0 ? 2 : 0) - this.wB), d8.textAlign = vN, ci * Math.pow(ae, xr) / this.a3U)
		}, this.aFf = function(hI, hJ, hK, hM) {
			d8.beginPath(), d8.moveTo(hI, hJ), d8.lineTo(hK, hM), d8.stroke()
		}
}

function rC() {
	this.aFg = "https://", this.aFh = this.aFg + "territorial.io/", this.aB1 = this.aFh + "changelog", this.aB2 = this.aFh + "terms", this.uh = this.aFh + "cookie_policy", this.a8a = this.aFh + "privacy_policy", this.aAy = this.aFh + "tutorial", this
		.aAz = this.aFh + "players", this.aB0 = this.aFh + "clans", this.a0s = this.aFg + "play.google.com/store/apps/details?id=territorial.io", this.a0t = this.aFg + "apps.apple.com/app/id1581110913", this.a0u = this.aFg +
		"www.youtube.com/watch?v=toZTQ8aRdFc", this.a0v = this.aFg + "discord.gg/pthqvpTXmh", this.a0w = this.aFg + "www.instagram.com/davidtschacher/"
}

function sC() {
	this.gL = new aFi, this.n3 = new aFj, this.b = function() {
		this.gL.b()
	}, this.fF = function() {
		0 !== this.gL.uk && this.gL.uk--
	}
}

function aFj() {
	this.d7 = function() {
		if (0 !== gP.gL.uk && (d8.globalAlpha = Math.min(gP.gL.uk / 580, 1), d8.drawImage(gP.gL.aFm, 1 + hv.hN(), 1 + hv.d6()), d8.globalAlpha = 1, hr)) {
			var aE, hI = eB / eC,
				hJ = eD / eC,
				hK = (hL + eB) / eC,
				hM = (d3 + eD) / eC,
				bd = gP.gL.aFn * eC,
				aFo = gP.gL.aFo;
			for (aE = e5 - 1; 0 <= aE; aE--) ! function(aE, bd, hI, hJ, hK, hM, aFo) {
				0 === e6[aE] || 0 === bv[aE] || (hK = hL * ((f3[aE] + f2[aE] + 1) / 2 - hI) / (hK - hI) - .5 * bd, hI = d3 * ((f6[aE] + f5[aE] + 1) / 2 - hJ) / (hM - hJ) - .5 * bd, hL < hK) || d3 < hI || hK < -bd || hI < -bd || (d8
					.setTransform(eC, 0, 0, eC, hK, hI), d8.drawImage(aFo[cS ? fW.fX[aE] : 1], 0, 0))
			}(aE, bd, hI, hJ, hK, hM, aFo);
			d8.setTransform(eC, 0, 0, eC, 0, 0)
		}
	}
}

function aFi() {
	this.aFn = 28, this.uk = 0, this.aFm = null;
	var aFq = this.aFo = null;

	function aFt(dE, aFv) {
		var hD, hE, dg, dx, sS = cM.iL.ln(dE, dE),
			dM = cM.iL.getContext(sS, !0),
			dI = cM.iL.getImageData(dM, dE, dE),
			lz = dI.data,
			ca = (dE >> 1) - .5,
			aFw = .5 + ca;
		for (aFw *= aFw, hE = 0; hE < dE; hE++)
			for (hD = 0; hD < dE; hD++) dx = (dx = hD - ca) * dx + (dx = hE - ca) * dx, lz[dg = 4 * (hE * dE + hD)] = aFv[0], lz[1 + dg] = aFv[1], lz[2 + dg] = aFv[2], lz[3 + dg] = (aFw - dx) * aFv[3] / aFw;
		return dM.putImageData(dI, 0, 0), sS
	}

	function aF6(aE, dM, sS, dE) {
		var hD;
		0 !== e6[aE] && 0 !== bv[aE] && (hD = f3[aE] + f2[aE] + 1 - dE - 2 >> 1, dE = f6[aE] + f5[aE] + 1 - dE - 2 >> 1, dM.drawImage(sS[cS ? fW.fX[aE] : aE < e5 ? 1 : 0], hD, dE))
	}
	this.b = function() {
		var t2;
		this.uk = 700,
			function(t2) {
				var aE, dE = t2.aFn;
				if (t2.aFo = [], aFq = [], cS)
					for (aE = 0; aE <= qU; aE++) t2.aFo.push(aFt(dE, fW.aFu[fW.oE[aE]])), aFq.push(aFt(dE >> 1, fW.aFu[fW.oE[aE]]));
				else t2.aFo.push(aFt(dE, fW.aFu[0])), t2.aFo.push(aFt(dE, fW.aFu[4])), aFq.push(aFt(dE >> 1, fW.aFu[0]))
			}(this),
			function(t2, aFx) {
				var aE, aFm = t2.aFm,
					dM = cM.iL.getContext(aFm, !0),
					bU = bZ,
					dE = t2.aFn >> 1;
				dM.imageSmoothingEnabled = !1, dM.setTransform(1, 0, 0, 1, 0, 0), aFx && dM.clearRect(0, 0, aFm.width, aFm.height);
				for (aE = e5; aE < bU; aE++) aF6(aE, dM, aFq, dE)
			}(this, null !== (t2 = this).aFm && t2.aFm.width === az.b0 - 2 && t2.aFm.height === az.b1 - 2 || (t2.aFm = cM.iL.ln(az.b0 - 2, az.b1 - 2), !1))
	}, this.qO = function() {
		for (var bU = e5, dE = this.aFn, aFo = this.aFo, dM = cM.iL.getContext(this.aFm, !0), aE = 0; aE < bU; aE++) aF6(aE, dM, aFo, dE)
	}
}

function sD() {
	this.aFy = -1, this.b = function() {
		this.aFy = -1
	}, this.fF = function() {
		-1 !== this.aFy && gC.np.nx(this.aFy)
	}, this.jj = function(player) {
		return !!cK.tK(player) && (1 === fY ? (this.aFy = player, fx && hr && kG.fF()) : (g7.nv(player, player === bN ? 21 : 22), 8 === fv ? this.aFy = 1 - player : fx ? (a5M(player), a8P(), hr && kG.fF()) : this.aFz(player)), !0)
	}, this.kC = function(player) {
		1 === gg && 0 !== e6[player] && 2 !== e7[player] && (8 === fv ? this.aFy = 1 - player : this.aFz(player)), g7.nv(player, 4)
	}, this.aFz = function(player) {
		hr ? (a5M(player), a8P()) : gI.a81(player)
	}
}

function a8h() {
	this.a33 = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.z8 = [dB
		.dC, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", dB.dC, "rgb(170,170,170)"
	], this.aG0 = [dB.dC, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", dB.dC, dB.hP], this.aG1 = [dB.hP, dB.dC, dB.dC, dB.dC, dB.hP, dB.hP, dB.hP, dB.hP, dB.dC];
	var aG2 = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aG3 = (this.a7W = ["rgba(" + aG2[0] + ",", "rgba(" + aG2[1] + ",", "rgba(" + aG2[2] + ",", "rgba(" + aG2[3] + ",", "rgba(" + aG2[4] + ",", "rgba(" + aG2[5] + ",", "rgba(" + aG2[6] + ",", "rgba(" + aG2[7] + ",", "rgba(" + aG2[8] + ",",
			"rgba(" + aG2[9] + ","
		], this.a7X = ["rgb(" + aG2[0] + ")", "rgb(" + aG2[1] + ")", "rgb(" + aG2[2] + ")", "rgb(" + aG2[3] + ")", "rgb(" + aG2[4] + ")", "rgb(" + aG2[5] + ")", "rgb(" + aG2[6] + ")", "rgb(" + aG2[7] + ")", "rgb(" + aG2[8] + ")", "rgb(" + aG2[
			9] + ")"
		], this.cj = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.aFu = [
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
		aG4 = (this.oE = [0, 1, 2, 3, 4, 5, 6, 7, 8], 7),
		lh = "[",
		li = "]";
	this.fX = new Uint8Array(bZ), this.oM = null, this.oN = null, this.b = function(nH) {
		this.fX.fill(0), this.aG5(), cS && (fr.fs && fr.ft.a65 ? this.a4j() : 9 === fv ? this.aG6() : this.fF(nH))
	}, this.a4j = function() {
		var aE, bU = mW;
		for (this.oE = [0, 1, 2, 3, 4, 5, 6, 7, 8], aE = 0; aE < bU; aE++) this.fX[aE] = fr.ft.a65[aE]
	}, this.aG5 = function() {
		for (var aE = this.oE.length - 1; 0 <= aE; aE--) this.oE[aE] = aE;
		this.oM = [], this.oN = []
	}, this.aG6 = function() {
		for (var aE = e5 + g1.a7s - 1; 0 <= aE; aE--) this.fX[aE] = 1;
		for (aE = e5 + g1.a7s; aE < bZ; aE++) this.fX[aE] = 2;
		this.oE[1] = 7, this.oE[2] = 8
	}, this.fF = function(nH) {
		var dZ = new Uint8Array(e5),
			da = new Uint8Array(e5),
			aG7 = new Uint16Array(8),
			aG8 = new Uint16Array(this.oE.length);
		this.aG9(nH, dZ, da, aG7), this.a4h(aG7), fx || this.aGA(aG8, dZ, da), this.aGB(dZ, da, aG8), fx ? this.aGC() : this.aGD()
	}, this.aG9 = function(nH, dZ, da, aGE) {
		for (var cV, oX, aGF, bU = this.oE.length - 1, ad = new Uint16Array(bU), aE = e5 - 1; 0 <= aE; aE--) {
			for (cV = bU; 1 <= cV; cV--) ad[cV - 1] = Math.abs(4 * nH[aE].a3i[0] - aG3[cV][0]) + Math.abs(4 * nH[aE].a3i[1] - aG3[cV][1]) + Math.abs(4 * nH[aE].a3i[2] - aG3[cV][2]);
			for (aGF = 768, cV = bU - 1; 0 <= cV; cV--) ad[oX = (cV + aE) % bU] < aGF && (aGF = ad[oX], dZ[aE] = oX);
			for (aGE[dZ[aE]] += 4, aGF = 768, cV = bU - 1; 0 <= cV; cV--) ad[oX = (cV + aE) % bU] < aGF && oX !== dZ[aE] && (aGF = ad[oX], da[aE] = oX);
			aGE[da[aE]]++
		}
	}, this.a4h = function(aGE) {
		for (var cV, sQ, bU = this.oE.length - 1, aE = bU; 0 <= aE; aE--) this.oE[aE] = aE;
		for (aE = bU - 1; 0 <= aE; aE--) aGE[aE]++;
		for (aE = 1; aE <= bU; aE++) {
			for (sQ = 0, cV = 1; cV < bU; cV++) aGE[cV] > aGE[sQ] && (sQ = cV);
			aGE[sQ] = 0, this.oE[aE] = sQ + 1
		}
	}, this.aGA = function(aG8, dZ, da) {
		var aE, cV, aGG, fV, be, oX, i4, pv, aGH = this.oE.length - 1,
			aGI = new Uint16Array(aGH),
			aGJ = [];
		loop: for (aE = e5 - 1; 0 <= aE; aE--)
			if (null !== (aGG = function(aE) {
					var aE1, aDp;
					return (aE1 = ua[aE].indexOf(lh)) < 0 || !(1 < (aDp = ua[aE].indexOf(li)) - aE1 && aDp - aE1 <= aG4 + 1) ? null : ua[aE].substring(aE1 + 1, aDp).toUpperCase().trim()
				}(aE))) {
				for (cV = this.oM.length - 1; 0 <= cV; cV--)
					if (aGG === this.oM[cV]) {
						this.oN[cV].push(aE);
						continue loop
					} this.oM.push(aGG), aGJ.push(!1), this.oN.push([]), this.oN[this.oM.length - 1].push(aE)
			}
		for (cV = this.oM.length - 1; 0 <= cV; cV--) {
			for (be = -1, fV = this.oM.length - 1; 0 <= fV; fV--) !aGJ[fV] && (-1 === be || this.oN[fV].length > this.oN[be].length) && (be = fV);
			for (fV = aGH - 1; 0 <= fV; fV--) aGI[fV] = 1;
			for (fV = this.oN[be].length - 1; 0 <= fV; fV--) aGI[dZ[this.oN[be][fV]]] += 3, aGI[da[this.oN[be][fV]]]++;
			for (aE = aGH - 1; 0 <= aE; aE--) {
				for (oX = be % aGH, fV = aGH - 1; 0 <= fV; fV--) aGI[fV] > aGI[oX] && (oX = fV);
				for (i4 = -1, fV = qU; 0 < fV; fV--)
					if (this.oE[fV] === oX + 1) {
						i4 = fV;
						break
					} if (aGI[oX] = 0, -1 !== i4) {
					for (pv = 0, fV = qU; 0 < fV; fV--) aG8[i4] > aG8[fV] && pv++;
					if (pv !== qU - 1) {
						for (fV = this.oN[be].length - 1; 0 <= fV; fV--) aG8[i4]++, this.fX[this.oN[be][fV]] = i4;
						break
					}
				}
			}
			aGJ[be] = !0
		}
	}, this.aGB = function(dZ, da, aG8) {
		for (var aE, dw, bU = this.oE.length - 1, border = bJ(e5, qU), aGL = (0 < e5 % qU && border++, new Uint8Array(1 + bU)), cV = bU; 1 <= cV; cV--) aGL[this.oE[cV]] = cV;
		for (aE = 0; aE < e5; aE++) dw = aGL[dZ[aE] + 1], 0 === this.fX[aE] && dw <= qU && aG8[dw] < border && (aG8[dw]++, this.fX[aE] = dw);
		for (aE = 0; aE < e5; aE++) dw = aGL[da[aE] + 1], 0 === this.fX[aE] && dw <= qU && aG8[dw] < border && (aG8[dw]++, this.fX[aE] = dw);
		for (cV = qU; 1 <= cV; cV--)
			for (aE = e5 - 1; 0 <= aE && !(aG8[cV] >= border); aE--) 0 === this.fX[aE] && (aG8[cV]++, this.fX[aE] = cV)
	}, this.aGC = function() {
		var aE, ej, aGE = new Uint16Array(qU);
		for (aGE[qU - 1] = bZ, aE = qU - 2; 0 <= aE; aE--) aGE[aE] = fy.fz[aE].uH;
		for (aGE[0]--, ej = 0 === aGE[0] ? 1 : 0, aE = e5; aE < bZ; aE++) this.fX[aE] = ej + 1, aGE[ej]--, aGE[ej] <= 0 && ej++
	}, this.aGD = function() {
		for (var aE = e5; aE < bZ; aE++) this.fX[aE] = 1 + aE % qU
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
	var be, bc, aGM, aGN, bU = bn[am].length;
	loop: for (var aE = bU - 1; 0 <= aE; aE--) {
		for (aGM = aGN = !1, be = 3; 0 <= be; be--) {
			if (bc = bn[am][aE] + av[be], bW.a4t(bc, am)) continue loop;
			aGM = aGM || bW.sm(bc), aGN = aGN || bW.m9(bc)
		}
		aGM ? bo[am].push(bn[am][aE]) : aGN ? br[am].push(bn[am][aE]) : bW.mp(bn[am][aE], am), bn[am][aE] = bn[am][bU - 1], bn[am].pop(), bU--
	}
}

function bl() {
	bv[ap] -= aq
}

function bm(border) {
	for (var bU = border.length, aE = bU - 1; 0 <= aE; aE--) bW.mx(ap, border[aE]) || (border[aE] = border[bU - 1], border.pop(), bU--)
}

function bp(border) {
	for (var bU = border.length, aE = bU - 1; 0 <= aE; aE--) !bW.mx(ap, border[aE]) && bW.bX(border[aE]) && (border[aE] = border[bU - 1], border.pop(), bU--)
}

function bq(border) {
	for (var be, bc, bU = border.length, aE = bU - 1; 0 <= aE; aE--)
		for (be = 3; 0 <= be; be--)
			if (bc = border[aE] + av[be], bW.a4t(bc, ap)) {
				bn[ap].push(border[aE]), border[aE] = border[bU - 1], border.pop(), bU--;
				break
			}
}

function bs() {
	for (var be, bc, aE = aq - 1; 0 <= aE; aE--)
		for (be = 3; 0 <= be; be--) bc = as[aE] + av[be], bW.a4u(ap, bc) && bW.a4v(bc) && (bn[ap].push(bc), bW.bY(bc, ap))
}

function bt() {
	var hD, hE;
	loop: for (; f6[ap] < f5[ap];) {
		for (hD = f2[ap]; hD >= f3[ap]; hD--)
			if (bW.mx(ap, 4 * (f6[ap] * az.b0 + hD))) break loop;
		f6[ap]++
	}
	loop: for (; f6[ap] < f5[ap];) {
		for (hD = f2[ap]; hD >= f3[ap]; hD--)
			if (bW.mx(ap, 4 * (f5[ap] * az.b0 + hD))) break loop;
		f5[ap]--
	}
	loop: for (; f3[ap] < f2[ap];) {
		for (hE = f5[ap]; hE >= f6[ap]; hE--)
			if (bW.mx(ap, 4 * (hE * az.b0 + f3[ap]))) break loop;
		f3[ap]++
	}
	loop: for (; f3[ap] < f2[ap];) {
		for (hE = f5[ap]; hE >= f6[ap]; hE--)
			if (bW.mx(ap, 4 * (hE * az.b0 + f2[ap]))) break loop;
		f2[ap]--
	}
}

function eo(player, ed) {
	return 0 === fW.fX[player] || fW.fX[player] !== fW.fX[ed]
}

function so(player, ed) {
	for (var oX, aGO = b5.b6(player), aE = 0; aE < aGO; aE++)
		if (0 === b5.b7(player, aE))
			if ((oX = b5.bC(player, aE)) === bZ) {
				if (ed === bZ) return !1;
				if (sn(ed)) return !0
			} else if (ed === bZ) {
		if (sn(oX)) return !0
	} else if (ss(ed, oX)) return !0;
	return !1
}

function sn(player) {
	for (var aE, bd, bU = bn[player].length, be = 3; 0 <= be; be--)
		for (bd = av[be], aE = 0; aE < bU; aE++)
			if (bW.bh(bn[player][aE] + bd)) return !0;
	return !1
}

function ss(q5, q6) {
	var aE, a3, be, bd, bc, aCB = bn[q5].length,
		aE8 = bn[q6].length;
	for (aE8 < aCB && (a3 = q5, q5 = q6, q6 = a3, a3 = aCB, aCB = aE8, 0), be = 3; 0 <= be; be--)
		for (bd = av[be], aE = 0; aE < aCB; aE++)
			if (bc = bn[q5][aE] + bd, bW.bf(bc) && bW.bg(bc) === q6) return !0;
	return !1
}

function aGP() {
	this.fF = function() {
		qu.fF(), qw.fF(), ph.fF(), gB.fF(), gc.a2X(), d5.fF(), aL.cx && (aL.cx = !1, aT.d7())
	}
}

function aGQ() {
	this.aM = aL.aM, this.cm = 0, this.aGR = 0, this.a2U = 0, this.aGS = null, this.aGT = 7, this.ul = 0, this.b = function() {
		this.a2U = 0, this.aGS = [], this.cm = 0, this.aGR = 0
	}, this.aGU = function(k8) {
		var aE;
		if (hr) this.zm(k8);
		else if (this.aGS.push(k8), 2 === gg) {
			for (aE = 0; aE < this.aGS.length; aE++) cc.jG.fF(this.aGS[aE]);
			this.aGS = []
		}
	}, this.zm = function(k8) {
		cc.jG.fF(k8), gW.fF(), g9.zm(this.a2U), this.a2U === qV ? (kG.fF(), this.a2U = 0, this.cm = 0, this.aGR = 0, this.aM = aL.aM) : (this.a2U++, g8.qN(), g8.gf(!0), iI.a03())
	}, this.fF = function() {
		ph.fF(), hr ? (aL.cx = g9.zm(-1) || aL.cx, gh()) : (0 !== this.cm || aL.aM >= this.aM && (this.aM += aL.zl * Math.floor(1 + (aL.aM - this.aM) / aL.zl), 2 === gg ? g6() : this.aGV(), this.cm++, 27 < aL.aM - this.ul)) && this.aGW(), gX(),
			aL.cx && (aL.cx = !1, n0()), this.ul = aL.aM
	}, this.aGW = function() {
		aL.cx = !0, ge(), this.cm = 0
	}, this.aGV = function() {
		var aGX, aE;
		if (this.aGR !== 7 * this.a2U) gF(), iI.a03();
		else {
			for (aGX = !1; this.aGY() && (aGX = !0, gF(), 0 < this.aGS.length);)
				for (aE = this.aGT - 2; 0 <= aE; aE--) gF();
			aGX ? iI.a03() : (g6(), iI.qQ())
		}
	}, this.aGY = function() {
		return 0 < this.aGS.length && (this.a2U++, cc.jG.fF(this.aGS[0]), this.aGS.shift(), !0)
	}
}

function aGZ() {
	var aGa, aGb, aGc, a2U, aGd, cm = 0,
		aM = aL.aM;

	function aGg() {
		! function() {
			if (!hr) return;
			if (fx) return;
			return aGd % 7 != 0 ? aGd++ : a2U === qV ? (aGj(), g9.zm(a2U), kG.fF()) : (aGj(), aGd++, a2U++, g8.qN(), g8.gf(!0)), 1
		}() && (aGj(), gF())
	}

	function aGh() {
		cm = 0, (hr ? (aL.cx = g9.zm(a2U - (aGd % 7 == 0 ? 0 : 1) + aGd % 7 / 7) || aL.cx, gh) : cK.cL || !gb.tA ? gh : (aL.cx = !0, ge))()
	}

	function aGj() {
		var aE, bU, aGk = gW.kE.aBc,
			ae = gW.kE.aBd,
			ag = gW.kE.aBe,
			ai = gW.kE.aBf,
			aGl = gW.kE.aBg,
			aGm = gW.kE.aBh;
		if (aGa >= aGm.length) g7.u1("Replay Error"), gC.np.nx(-1);
		else if (aGm = aGm[aGa], aGl[aGa]) {
			for (bU = aGb + aGm, aE = aGb; aE < bU; aE++) cc.jG.kB(aGk[aE], ae[aE], ag[aE], ai[aE]);
			aGb += aGm, aGa++
		} else ++aGc >= aGm && (aGa++, aGc = 0)
	}
	this.aGR = 0, this.b = function() {
		aGd = a2U = aGc = aGb = aGa = 0
	}, this.fF = function() {
		var aEV;
		ph.fF(), gb.x0() < 1.7 ? 0 === cm ? aL.aM >= aM && (aEV = aL.zl / gb.x0(), aM += aEV * Math.floor(1 + (aL.aM - aM) / aEV), 2 === gg || cK.cL || !gb.tA ? g6() : (aGg(), iI.a03()), cm++) : aGh() : function() {
			var aEV;
			if (aL.aM >= aM)
				if (2 === gg || cK.cL || !gb.tA) g6(), aM = aL.aM;
				else {
					for (aEV = aL.zl / gb.x0(), 16 < (aL.aM - aM) / aEV && (aM = aL.aM - 16 * aEV); aL.aM >= aM && 2 !== gg;) aM += aEV, aGg();
					iI.a03()
				} aGh()
		}(), gX(), aL.cx && (aL.cx = !1, n0())
	}
}

function aGn() {
	var cm = 0,
		aM = aL.aM;
	this.aGR = 0, this.fF = function() {
		ph.fF(), hr ? gh() : 0 === cm ? aL.aM >= aM && (aM += aL.zl * Math.floor(1 + (aL.aM - aM) / aL.zl), 2 === gg || cK.cL ? g6() : (gF(), iI.a03()), cm++) : ((cK.cL ? gh : (aL.cx = !0, ge))(), cm = 0), gX(), aL.cx && (aL.cx = !1, n0())
	}
}

function a8g() {
	function aGq() {
		aL.aM = performance.now(), aL.aGo.fF(), window.requestAnimationFrame(aGq)
	}

	function aGr() {
		var a3 = performance.now();
		aL.aM + 1500 < a3 && (aL.aM = a3, aL.aGo.fF())
	}
	this.aGo = null, this.cx = !1, this.aM = 0, this.aGp = -1, this.zl = 56, this.b = function() {
		this.qs(), window.requestAnimationFrame(aGq), this.aM = performance.now()
	}, this.qo = function() {
		cJ ? (this.aGo = new aGZ, this.aGo.b()) : fx ? this.aGo = new aGn : (this.aGo = new aGQ, this.aGo.b())
	}, this.qs = function() {
		this.aGo = new aGP, this.cx = !0
	}, this.pd = function() {
		1 !== gg || !fx || cK.cL || hr || cK.pY(), -1 === this.aGp && (this.aGp = setInterval(aGr, 2e3))
	}, this.pe = function() {
		this.cx = !0, -1 !== this.aGp && (clearInterval(this.aGp), this.aGp = -1)
	}, this.fF = function() {
		this.aGo.aGR++
	}, this.fU = function() {
		return this.aGo.aGR
	}
}

function rz() {
	var hi = 0,
		aGs = !0;

	function aGu(v) {
		8 !== aT.pT() || 2 !== e7[bN] && (0 !== e6[bN] || hr) || g7.uB(v)
	}
	this.fF = function() {
		var a3, uo;
		aL.aM > hi && (hi = aL.aM + 2500, a3 = new Date, uo = a3.getUTCSeconds(), aGs ? uo < 45 && (aGs = !1) : uo < 45 || -1 !== aL.aGp || (aGs = !0, (uo = a3.getUTCMinutes() + 1) % 15 == 0 && aGu(30 === uo ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function rn() {
	var hI, hJ, hK, hM, aGv = 0,
		aGw = 0;

	function aGy() {
		return Math.pow(Math.pow(hK - hI, 2) + Math.pow(hM - hJ, 2), .5)
	}

	function aGx(oX) {
		hI = lM * oX.touches[0].clientX, hJ = lM * oX.touches[0].clientY, hK = lM * oX.touches[1].clientX, hM = lM * oX.touches[1].clientY
	}
	this.oq = function(oX) {
		return 1 < oX.touches.length ? (aGw = aL.aM, aGv = 3, aGx(oX), n5.lE(), !0) : (aGv = 0, !1)
	}, this.or = function(oX) {
		var a9O, du, dv;
		return 0 !== gg && 1 < oX.touches.length && (aGv = Math.max(aGv - 1, 0), gY.iA() && (a9O = aGy(), aGx(oX), oX = aGy(), du = Math.floor((hI + hK) / 2), dv = Math.floor((hJ + hM) / 2), hv.xa(du, dv, Math.max(.125, oX) / Math.max(.125,
			a9O)), aL.cx = !0), !0)
	}, this.pM = function() {
		var hD, hE;
		return !!(aGv && (aGv = 0, aL.aM < aGw + 500)) && (hD = (hI + hK) / 2, hE = (hJ + hM) / 2, n5.pD(hD, hE), n5.click(hD, hE, !0) && (aL.cx = !0), !0)
	}
}

function ro() {
	var dF, el;

	function aH7(aHP, k8) {
		for (var ad = new Array(aHP), aE = 0; aE < aHP; aE++) ad[aE] = aH0(k8, 10);
		return w.lg(ad)
	}

	function aH0(lx, bU) {
		for (var uq = 0, aE = el; aE < el + bU; aE++) uq |= (lx[bJ(aE, 8)] >> 7 - aE % 8 & 1) << el + bU - aE - 1;
		return el += bU, uq
	}
	this.aFE = function(a1i, k8) {
		var aGz;
		(el = 0) === (dF = k8.length) ? gB.a8L(a1i, 3205): 0 === (aGz = aH0(k8, 1)) ? function(a1i, k8) {
			var aH3 = aH0(k8, 2);
			0 === aH3 ? (0 === aH0(k8, 1) ? function(a1i, k8) {
				var aE;
				if (0 === a1i && 8 !== aT.pT() && !(dF < 4)) {
					a0W.cl(0, aH7(aH0(k8, 5), k8)), a0W.cl(1, "[" + aH7(aH0(k8, 3), k8) + "]");
					var aH8 = aH0(k8, 12),
						aH9 = aH0(k8, 6),
						ad = new Array(aH8);
					for (aE = 0; aE < aH8; aE++) ad[aE] = aH0(k8, aH9);
					pH.y1(ad)
				}
			} : function(a1i, k8) {
				var aE;
				if (8 !== aT.pT())
					if (dF < 3) gB.a8L(a1i, 3208);
					else {
						var aHA, nL, a1i = aH0(k8, 1),
							position = aH0(k8, 16),
							uq = aH0(k8, 4),
							ad = [];
						for (aE = 0; aE < uq; aE++) nL = aH0(k8, 14), aHA = aH0(k8, 5), aHA = aH7(aHA, k8), ad.push({
							name: aHA,
							nL: nL
						});
						0 === a1i ? d5.a0P(0, ad, 10, 1, .36, .55, position) : d5.a0P(1, ad, 100, 2, .47, .5, position)
					}
			})(a1i, k8) : 1 === aH3 ? function(a1i, k8) {
				var aE, ej, a3G, oM, aHB, aHC;
				if (a1i !== gB.a2H) gB.close(a1i, 3239);
				else if (6 === aT.pT() && r2.b(), 7 !== aT.pT()) gB.close(a1i, 3251);
				else {
					var a2p = [0, 0, 0, 0],
						aHD = aH0(k8, 6);
					for (aE = 0; aE < 4; aE++) a2p[aE] = aH0(k8, aHD);
					var aHE = aH0(k8, 4),
						aHF = [];
					for (aE = 0; aE < aHE; aE++) {
						for (aHF.push({
								id: aH0(k8, 5),
								qZ: aH0(k8, 4),
								a3B: 1 === aH0(k8, 1),
								mJ: aH0(k8, 6),
								a39: aH0(k8, 14),
								a3E: aH0(k8, aHD),
								a3F: aH0(k8, 9) + 1,
								a1r: aH0(k8, 10)
							}), a3G = aH0(k8, 3), oM = new Array(a3G), ej = 0; ej < a3G; ej++) aHB = aH0(k8, 9) + 1, aHC = aH7(aH0(k8, 3), k8), oM[ej] = ("" === aHC ? "other: " : "[" + aHC + "]: ") + aHB;
						aHF[aE].a3G = a3G, aHF[aE].oM = oM
					}
					r2.a0X(a2p, aHF)
				}
			}(a1i, k8) : 2 !== aH3 && 3 !== aH3 || gc.b(k8)
		}(a1i, k8) : 1 === aGz && function(a1i, k8) {
			var pw = aT.pT();
			8 !== pw ? 10 === pw && gB.a8L(a1i, 3243) : a1i !== gB.p4 ? gB.a8L(a1i, 3244) : 0 === aH0(k8, 1) ? aL.aGo.aGU(k8) : function(k8) {
				var aHL = aH0(k8, 2);
				(0 === aHL ? function(k8) {
					var u7;
					3 !== dF ? gB.a8L(gB.p4, 3230) : (u7 = aH0(k8, 9), k8 = aH0(k8, 7), 0 !== e6[u7] && 0 !== e6[bN] && (k8 %= aF.aG, g7.jc(u7, bN, k8), g8.kY(u7, 1, k8)))
				} : 1 === aHL ? function(k8) {
					2 !== dF ? gB.a8L(gB.p4, 3235) : (k8 = aH0(k8, 9), 0 !== e6[k8] && 0 !== e6[bN] && gS.a7y(0, [k8], !0) && g7.ju(k8, 1))
				} : function(k8) {
					var u7;
					3 !== dF ? gB.a8L(gB.p4, 3236) : (u7 = aH0(k8, 9), k8 = aH0(k8, 9), 0 !== e6[u7] && 0 !== e6[k8] && 0 !== e6[bN] && gS.a7y(1, [u7], !0) && (g8.kY(u7, 3, 96), g8.kY(k8, 4, 96), g7.uG(u7, k8)))
				})(k8)
			}(k8)
		}(a1i, k8)
	}, this.a2Y = function(k8) {
		el = 1, dF = k8.length, (2 === aH0(k8, 2) ? function(k8) {
			el += 20;
			for (var a3j, a3i, name, a2O = aH0(k8, 9), qX = aH0(k8, 14), qZ = aH0(k8, 4), a3B = 1 === aH0(k8, 1), a3C = aH0(k8, 6), a3D = aH0(k8, 14), aHJ = aH0(k8, 9) + 1, nH = [], aE = 0; aE < aHJ; aE++) a3j = aH0(k8, 1), a3i = [aH0(k8,
				6), aH0(k8, 6), aH0(k8, 6)], name = aH7(aH0(k8, 5), k8), nH.push({
				name: name,
				a3i: a3i,
				a3j: a3j
			});
			aT.a1x(), az.lc(a3C, a3D), 1 === nH.length && fy.a3W(qZ);
			qW(qX, a2O, nH, qZ, a3B, !1)
		} : function(k8) {
			el += 20;
			for (var a3j, a3i, nL, name, a2O = aH0(k8, 1), qX = aH0(k8, 14), qZ = aH0(k8, 4), a3B = 1 === aH0(k8, 1), a3C = aH0(k8, 6), a3D = aH0(k8, 14), nH = [], aE = 0; aE < 2; aE++) a3j = aH0(k8, 1), a3i = [aH0(k8, 6), aH0(k8, 6),
				aH0(k8, 6)
			], nL = aH0(k8, 14), name = aH7(aH0(k8, 5), k8), nH.push({
				name: name,
				a3i: a3i,
				nL: nL,
				a3j: a3j
			});
			aT.a1x(), az.lc(a3C, a3D), qW(qX, a2O, nH, qZ, a3B, !1)
		})(k8)
	}, this.a2S = function(k8) {
		el = 1, dF = k8.length;
		var aH3 = aH0(k8, 2),
			aHI = aH0(k8, 10);
		return gB.a2H > gB.a2W && (aHI += gB.a2W), gB.a2H === aHI ? (gB.p4 = aHI, !1) : (gB.close(gB.a2H, 3247), gB.p4 = aHI, gc.a2N = aH0(k8, 10), gc.a2O = aH0(k8, 2 === aH3 ? 9 : 1), gB.xx(aHI, 5) && jK.a8J(), !0)
	}
}

function s9() {
	this.dF = 0, this.cm = 0, this.k8 = null, this.b = function(k8) {
		this.cm = 0, this.k8 = k8, this.dF = k8.length
	}, this.a1y = function() {
		this.k8 = null
	}, this.kA = function(dF) {
		for (var aR = 0, k8 = this.k8, iA = this.cm + dF - 1, aE = this.cm; aE <= iA; aE++) aR |= (k8[aE >> 3] >> 7 - (7 & aE) & 1) << iA - aE;
		return this.cm += dF, this.cm > 8 * this.dF && console.log("error unwrapper"), aR
	}, this.aBr = function(dF) {
		for (var ad = new Array(dF), aE = 0; aE < dF; aE++) ad[aE] = this.kA(10);
		return w.lg(ad)
	}, this.aHQ = function(aC2) {
		return this.dF === lb.aHR(aC2)
	}
}

function a8d() {
	this.aCk = 0, this.aCl = 0, this.aCg = 0, this.aCh = 0, this.aCi = 0, this.aCj = 0, this.a04 = [0, 0, 0, 0], this.i9 = function() {
		this.aCk = hv.hN(), this.aCl = hv.d6(), this.aCg = -this.aCk, this.aCh = -this.aCl, this.aCi = hL / eC, this.aCj = d3 / eC, this.a04[0] = Math.floor(this.aCg), this.a04[1] = Math.floor(this.aCh), this.a04[2] = Math.floor(this.a04[0] +
			this.aCi + 1), this.a04[3] = Math.floor(this.a04[1] + this.aCj + 1), iI.a01 = !0
	}
}

function rp() {
	var w7, hi;
	this.b = function() {
		w7 = 1, hi = 0
	}, this.fF = function() {
		0 < w7 && (hi = 0 === hi ? aL.aM + 16 : hi, w7 = (w7 -= .001 * (aL.aM - hi)) < 0 ? 0 : w7, hi = aL.aM, aL.cx = !0)
	}, this.d7 = function() {
		0 < w7 && (d8.fillStyle = "rgba(0,0,0," + w7 + ")", d8.fillRect(0, 0, hL, d3))
	}
}

function rt() {
	function aHV(a8p, hD, hE, cu, ez) {
		a8p >= az.a5z || (az.mJ === a8p && (d8.fillStyle = dB.j0, d8.fillRect(hD, hE, cu, ez), d8.fillStyle = dB.dC), d8.strokeRect(hD, hE, cu, ez), d8.fillText(az.ft.mI[a8p].name, Math.floor(hD + .5 * cu), Math.floor(hE + .55 * ez)))
	}
	this.pF = !1, this.a3V = [0, 0, 0, 0], this.show = function() {
		this.pF = !0, this.resize(), aL.cx = !0
	}, this.resize = function() {
		var aCB = bJ(az.a5z + az.a5z % 2, 2),
			aCB = a2 - aCB * d2;
		this.a3V[2] = a0 ? Math.floor(.75 * vW) : Math.floor(.5 * vW), this.a3V[3] = Math.floor(1.25 * this.a3V[2]), this.a3V[3] > aCB && (this.a3V[3] = aCB, this.a3V[2] = Math.floor(aCB / 1.2)), this.a3V[0] = Math.floor((a1 - this.a3V[2]) / 2),
			this.a3V[1] = Math.floor((a2 - this.a3V[3]) / 2)
	}, this.om = function(hD, hE) {
		return !(hD < this.a3V[0] || hE < this.a3V[1] || hD > this.a3V[0] + this.a3V[2] || hE > this.a3V[1] + this.a3V[3])
	}, this.cz = function(hD, hE) {
		var ud, aCB = bJ(az.a5z + az.a5z % 2, 2);
		return aL.cx = !0, hD < this.a3V[0] || hE < this.a3V[1] || hD > this.a3V[0] + this.a3V[2] || hE > this.a3V[1] + this.a3V[3] ? !(this.pF = !1) : (ud = Math.floor(.17 * this.a3V[3]), hE < this.a3V[1] + ud ? hD > this.a3V[0] + this.a3V[2] -
			ud && (this.pF = !1) : (hE = (hE = Math.floor(aCB * (hE - this.a3V[1] - ud - .00576 * ck) / (this.a3V[3] - ud - .01152 * ck))) < 0 ? 0 : aCB - 1 < hE ? aCB - 1 : hE, hD > this.a3V[0] + this.a3V[2] / 2 && (hE += aCB), hE >= az
				.a5z || az.lc(hE, Math.floor(16384 * Math.random()))), !0)
	}, this.d7 = function() {
		var aE, hJ, ud = Math.floor(.17 * this.a3V[3]),
			aCB = bJ(az.a5z + az.a5z % 2, 2),
			kt = .6 * .01152 * ck,
			ue = (this.a3V[3] - ud - (aCB + 1) * kt) / aCB,
			nD = Math.floor((this.a3V[2] - 3 * kt) / 2);
		for (d8.lineWidth = pz, d8.textAlign = dA, d8.textBaseline = d9, d8.fillStyle = dB.iR, d8.fillRect(this.a3V[0], this.a3V[1] + ud, this.a3V[2], this.a3V[3] - ud), d8.fillStyle = dB.j0, d8.fillRect(this.a3V[0], this.a3V[1], this.a3V[2],
			ud), d8.strokeStyle = dB.dC, d8.strokeRect(this.a3V[0], this.a3V[1], this.a3V[2], this.a3V[3]), d8.fillStyle = dB.dC, d8.fillRect(this.a3V[0], this.a3V[1] + ud, this.a3V[2], 2), d8.font = cn + Math.floor(.48 * ud) + co, d8.fillText(
				"Maps", Math.floor(this.a3V[0] + this.a3V[2] / 2), Math.floor(this.a3V[1] + .55 * ud)), d8.font = cn + Math.floor(.48 * ue) + co, aE = aCB - 1; 0 <= aE; aE--) hJ = Math.floor(this.a3V[1] + ud + kt + aE * (ue + kt)), aHV(aE, this
			.a3V[0] + kt, hJ, nD, ue), aHV(aE + aCB, this.a3V[0] + nD + 2 * kt, hJ, nD, ue);
		cK.tN(Math.floor(this.a3V[0] + this.a3V[2] - .7 * ud), Math.floor(this.a3V[1] + .3 * ud), Math.floor(.4 * ud)), d8.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function rq() {
	var el;

	function aHY(k8) {
		var u = t(),
			aHa = Math.floor(u / 16777216);
		aHW(k8, 24, aHa), aHW(k8, 24, u - 16777216 * aHa)
	}

	function aHZ(k8) {
		aHW(k8, 14, a8T), aHW(k8, 4, m ? 2 : 12 <= q ? 1 : 0 < q ? 3 : 0), aHW(k8, 1, oc ? 1 : 0), aHW(k8, 1, od ? 1 : 0), aHW(k8, 5, (new Date).getHours() % 24)
	}

	function aHW(lx, bU, uq) {
		for (var cV, aE = el; aE < el + bU; aE++) lx[cV = bJ(aE, 8)] = (uq >> bU - (aE - el + 1) & 1) << 7 - aE % 8 | lx[cV];
		el += bU
	}
	this.y0 = function() {
		var k8 = new Uint8Array(3);
		aHW(k8, 1, el = 0), aHW(k8, 3, 0), aHW(k8, 14, a8T), gB.send(0, k8)
	}, this.a1g = function(a1i) {
		var ad = w.ni(qt.a3h()),
			uH = ad.length,
			k8 = new Uint8Array(bJ(aC2 = 135 + 10 * uH, 8) + (0 < aC2 % 8 ? 1 : 0)),
			aC2 = (aHW(k8, 1, el = 0), aHW(k8, 3, 1), aHW(k8, 10, a8V), aHW(k8, 20, r5.id), aHW(k8, 10, Math.min(r5.un, 1023)), d4.tP[2].nz.a1M());
		aHW(k8, 6, aC2[0]), aHW(k8, 6, aC2[1]), aHW(k8, 6, aC2[2]), aHY(k8), aHZ(k8);
		for (var aE = 0; aE < uH; aE++) aHW(k8, 10, ad[aE]);
		gB.a2H = a1i, gB.send(a1i, k8)
	}, this.a0N = function(a1i, id) {
		var k8 = new Uint8Array(5);
		aHW(k8, 1, el = 0), aHW(k8, 3, 7), aHW(k8, 3, 0), aHW(k8, 14, a8T), aHW(k8, 1, id), aHW(k8, 16, Math.abs(4096 + d5.position[id] + d5.a0M[id]) % 65536), gB.send(a1i, k8)
	}, this.a48 = function(a1i) {
		var aE, oX;
		if (!(qt.a3x + 7e3 > aL.aM)) {
			qt.a3x = aL.aM;
			var k8 = new Uint8Array(17);
			for (aHW(k8, 1, el = 0), aHW(k8, 3, 7), aHW(k8, 3, 2), aHY(k8), oX = tn(qt.a3w.length - 20, 0), aE = qt.a3w.length - 1; oX <= aE; aE--) aHW(k8, 4, Math.abs(qt.a3w.charCodeAt(aE) - 48) % 10);
			gB.send(a1i, k8)
		}
	}, this.a8B = function(a1i, a8A) {
		var k8 = new Uint8Array(1);
		aHW(k8, 1, el = 0), aHW(k8, 3, 5), aHW(k8, 1, a8A ? 1 : 0), gB.send(a1i, k8)
	}, this.a3L = function(a3A) {
		var k8 = new Uint8Array(1);
		aHW(k8, 1, el = 0), aHW(k8, 3, 2), aHW(k8, 4, a3A), gB.send(gB.a2H, k8)
	}, this.a8J = function() {
		var k8 = new Uint8Array(7);
		aHW(k8, 1, el = 0), aHW(k8, 3, 6), aHW(k8, 8, gB.uE()), aHW(k8, 10, gc.a2N), aHW(k8, 9, gc.a2O), aHW(k8, 10, a8V), aHW(k8, 14, a8T), gB.send(gB.p4, k8)
	}, this.jL = function(dg) {
		lb.lc(27), lb.ld(1, 1), lb.ld(4, 0), lb.ld(22, dg), gB.send(gB.p4, lb.k8)
	}, this.jN = function(eA, ed) {
		lb.lc(25), lb.ld(1, 1), lb.ld(4, 1), lb.ld(10, eA), lb.ld(10, ed), gB.send(gB.p4, lb.k8)
	}, this.jR = function(eA, jP) {
		lb.lc(24), lb.ld(1, 1), lb.ld(4, 2), lb.ld(10, eA), lb.ld(9, jP), gB.send(gB.p4, lb.k8)
	}, this.jV = function(eA, dg) {
		lb.lc(37), lb.ld(1, 1), lb.ld(4, 3), lb.ld(10, eA), lb.ld(22, dg), gB.send(gB.p4, lb.k8)
	}, this.jZ = function(jX, dg) {
		lb.lc(37), lb.ld(1, 1), lb.ld(4, 4), lb.ld(10, jX), lb.ld(22, dg), gB.send(gB.p4, lb.k8)
	}, this.jb = function(ed) {
		lb.lc(15), lb.ld(1, 1), lb.ld(4, 5), lb.ld(10, ed), gB.send(gB.p4, lb.k8)
	}, this.jf = function(cm) {
		lb.lc(12), lb.ld(1, 1), lb.ld(4, 6), lb.ld(7, cm), gB.send(gB.p4, lb.k8)
	}, this.ji = function(jh) {
		lb.lc(6), lb.ld(1, 1), lb.ld(4, 7), lb.ld(1, jh), gB.send(gB.p4, lb.k8)
	}, this.jk = function() {
		lb.lc(5), lb.ld(1, 1), lb.ld(4, 8), gB.send(gB.p4, lb.k8)
	}, this.k2 = function(a5D, k1) {
		lb.lc(29), lb.ld(1, 1), lb.ld(4, 10), lb.ld(12, a5D), lb.ld(2, 0), lb.ld(10, k1), gB.send(gB.p4, lb.k8)
	}, this.k5 = function(a5D, m7, m8, aHb) {
		lb.lc(46), lb.ld(1, 1), lb.ld(4, 10), lb.ld(12, a5D), lb.ld(2, 1), lb.ld(9, m7), lb.ld(9, m8), lb.ld(9, aHb), gB.send(gB.p4, lb.k8)
	}, this.k7 = function(a5D) {
		var aE, oC = gC.gD.oC;
		for (lb.lc(47 + 33 * oC.length), lb.ld(1, 1), lb.ld(4, 10), lb.ld(12, a5D), lb.ld(2, 2), lb.ld(24, gC.gD.oB), lb.ld(4, oC.length), aE = 0; aE < oC.length; aE++) lb.ld(9, oC[aE].player), lb.ld(24, oC[aE].oO);
		gB.send(gB.p4, lb.k8)
	}, this.js = function(aHc, aHd) {
		lb.lc(21), lb.ld(1, 1), lb.ld(4, 15), lb.ld(9, aHd), lb.ld(7, aHc), gB.send(gB.p4, lb.k8)
	}, this.jv = function(u8) {
		lb.lc(14), lb.ld(1, 1), lb.ld(4, 14), lb.ld(9, u8), gB.send(gB.p4, lb.k8)
	}, this.jz = function(aHe, target) {
		var aE, bU = aHe.length;
		for (lb.lc(14 + 9 * bU), lb.ld(1, 1), lb.ld(4, 13), lb.ld(9, target), aE = 0; aE < bU; aE++) lb.ld(9, aHe[aE]);
		gB.send(gB.p4, lb.k8)
	}, this.a3e = function(a1i) {
		var k8 = new Uint8Array(4);
		aHW(k8, 1, el = 0), aHW(k8, 3, 3), aHZ(k8), gB.send(a1i, k8)
	}
}

function ob() {
	this.dF = 0, this.cm = 0, this.k8 = null, this.b = function(k8) {
		this.cm = 0, this.k8 = k8, this.dF = k8.length
	}, this.lc = function(aC2) {
		return this.b(new Uint8Array(this.aHR(aC2))), this.k8
	}, this.a1y = function() {
		this.k8 = null
	}, this.ld = function(dF, uq) {
		for (var k8 = this.k8, iA = this.cm + dF - 1, aE = this.cm; aE <= iA; aE++) k8[aE >> 3] |= (uq >> iA - aE & 1) << 7 - (7 & aE);
		this.cm += dF, this.cm > 8 * this.dF && console.log("error wrapper")
	}, this.aHf = function(dF) {
		for (var k8 = this.k8, iA = this.cm + dF, aE = this.cm; aE < iA; aE++) k8[aE >> 3] &= 255 ^ 128 >>> (7 & aE)
	}, this.aHR = function(aC2) {
		return aC2 + 7 >> 3
	}, this.aHg = function(ad, el, iA, aHh) {
		for (var aE = el; aE < iA; aE++) this.ld(aHh, ad[aE])
	}
}
setTimeout(aS, 25);