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
var al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ej, eg, ei, eP;

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
	this.cG = function() {
		cH || cI.cJ || cK.cL.cM(1) && cK.cL.cN(bN) && b5.cO(bN) && (b5.cP(bN, bZ) || function(player) {
			var aE, cW, cX = bn[player],
				bU = cX.length;
			for (cW = 0; cW < 4; cW++)
				for (aE = 0; aE < bU; aE++)
					if (bW.bh(cX[aE] + av[cW])) return 1;
			return
		}(bN)) && cR.cS.cT(cU.cV(), bZ)
	}
}

function cY() {
	var cZ = 1,
		ca = [null, null];
	this.b = function() {
		cZ = .72 * (a0 ? .0011 : .001) * cb;
		for (var aE = 1; 0 <= aE; aE--) ca[aE] && this.cc(aE, ca[aE].v)
	}, this.cc = function(cd, v) {
		ca[cd] = {
			v: v,
			font: ce + 10 + cf
		}, this.cg(cd)
	}, this.cg = function(cd) {
		var v, cj, ck, cl, cn;
		ch.ci() && ca[cd] && (v = ca[cd].v, cj = Math.floor(.15 * cZ * ch.get(13).height), cl = cm.measureText(v, ck = ce + cj + cf), (cn = .8 * cZ * ch.get(13).width) < cl && (cj = Math.floor(cj * cn / cl), ck = ce + cj + cf), ca[cd] = {
			v: v,
			font: ck
		}, aL.co = !0)
	}, this.cp = function() {
		return Math.floor(cZ * ch.get(13).height)
	}, this.cq = function(cr, cs) {
		return !!ch.ci() && !(cr < ct || cs < cu - cv.cl - cZ * ch.get(13).height - 2 * ct || cs > cu - cv.cl - 2 * ct || (cr < ct + cZ * ch.get(13).width ? (cw.l(0), 0) : cr < 2 * ct + cZ * ch.get(13).width || !(cr < 2 * ct + 2 * cZ * ch.get(13)
			.width) || (cw.l(1), 0)))
	}, this.cx = function() {
		return Math.floor(cu - cv.cl - cZ * ch.get(13).height - 2 * ct)
	}, this.cy = function() {
		if (ch.ci()) {
			cz.imageSmoothingEnabled = !0, cz.setTransform(cZ, 0, 0, cZ, ct, this.cx()), cz.drawImage(ch.get(14), 0, 0), cz.setTransform(cZ, 0, 0, cZ, 2 * ct + cZ * ch.get(13).width, this.cx()), cz.drawImage(ch.get(13), 0, 0);
			for (var aE = 1; 0 <= aE; aE--) ca[aE] && (cz.setTransform(1, 0, 0, 1, (1 + aE) * ct + aE * cZ * ch.get(13).width, this.cx()), cz.font = ca[aE].font, cz.textBaseline = d0, cz.textAlign = d1, cz.fillStyle = d2.d3, cz.fillText(ca[aE].v,
				.5 * cZ * ch.get(13).width, .86 * cZ * ch.get(13).height));
			cz.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function d4(d5, d6, d7, d8) {
	var aE, dB = .2,
		dC = document.createElement("canvas"),
		dD = dC.getContext("2d", {
			alpha: !1
		});
	for (dC.width = d5, dC.height = d5, dD.font = d6 + "px " + settings.fontName, dD.textAlign = "center", dD.textBaseline = "middle", dD.fillStyle = "red", aE = 0; aE < d7.length; aE++) dD.fillText(d7[aE], .5 * d5, .5 * d5);
	return -1 < (dC = function(d9) {
		var aE, dF;
		for (aE = d9.data.length - 4; 0 <= aE; aE -= 4)
			if (dF = d9.data[aE], d8 <= dF) return Math.floor(aE / (4 * d5));
		return -1
	}(dD.getImageData(0, 0, d5, d5))) && (dB = (dC - .5 * d5 + .1 * d6) / d6), Math.max(dB, 0)
}

function dG() {
	this.dH = new Int16Array(4), this.dI = new Int16Array(4), this.b = function() {
		var aE;
		for (this.dH[0] = -az.b0, this.dH[1] = 1, this.dH[2] = az.b0, this.dH[3] = -1, aE = 0; aE < 4; aE++) this.dI[aE] = 4 * this.dH[aE]
	}, this.dJ = function(dK, dL) {
		var dM = this.dN(dL) - this.dN(dK),
			dL = this.dP(dL) - this.dP(dK),
			dK = dM >>> 31 << 1;
		return 5 + dK + (1 - dK) * (1 - (dL >>> 31 << 1)) * (Math.abs(dM) - Math.abs(dL) >>> 31) & 3
	}, this.dT = function(dK, dL, cW) {
		return cW % 2 == 0 ? cW + (1 - cW) * (1 - (this.dN(dL) - this.dN(dK) >>> 31 << 1)) + 4 & 3 : cW + (2 - cW) * (1 - (this.dP(dL) - this.dP(dK) >>> 31 << 1)) + 4 & 3
	}, this.dV = function(bc, dW) {
		for (var dL, dX, dZ = bo[bc], bU = dZ.length, cl = az.b0, da = this.dN(dW), db = this.dP(dW), dc = dZ[0] >> 2, min = this.dd(da, db, dc), aE = 1; aE < bU; aE++)(dX = (dX = da - (dL = dZ[aE] >> 2) % cl) * dX + (dX = db - ~~((.5 + dL) /
			cl)) * dX) < min && (min = dX, dc = dL);
		return dc
	}, this.de = function(player, df) {
		return !bW.bh(df) && player === bW.bg(df)
	}, this.dd = function(dg, dh, dW) {
		return (dg -= this.dN(dW)) * dg + (dh -= this.dP(dW)) * dh
	}, this.di = function(dj, dk, dl) {
		dj = this.dn(dj) - this.dp(dl), dk = this.dr(dk) - this.ds(dl);
		return Math.sqrt(dj * dj + dk * dk)
	}, this.dt = function(dK, dL) {
		var dm = this.dN(dK) - this.dN(dL),
			dK = this.dP(dK) - this.dP(dL);
		return Math.sqrt(dm * dm + dK * dK)
	}, this.du = function(bc) {
		return bc < dv && 0 !== dw[bc] && 2 !== dx[bc]
	}, this.dy = function() {
		return 0 !== dw[bN] && 2 !== dx[bN]
	}, this.dz = function(bc, e0) {
		return cA.cB(e0 * bO[bc], 1e3)
	}, this.dn = function(dj) {
		return 16 * (dj + e1) / e2
	}, this.dr = function(dk) {
		return 16 * (dk + e3) / e2
	}, this.e4 = function(dj) {
		return Math.floor((dj + e1) / e2)
	}, this.e5 = function(dk) {
		return Math.floor((dk + e3) / e2)
	}, this.e6 = function(dg, dh) {
		return 1 <= dg && 1 <= dh && dg < az.b0 - 1 && dh < az.b1 - 1
	}, this.dN = function(dW) {
		return dW % az.b0
	}, this.dP = function(dW) {
		return cA.cB(dW, az.b0)
	}, this.e7 = function(dg, dh) {
		return dh * az.b0 + dg
	}, this.e8 = function(dW) {
		var dg = this.dN(dW),
			dW = this.dP(dW);
		return 0 < dg && dg < az.b0 - 1 && 0 < dW && dW < az.b1 - 1
	}, this.e9 = function(dW) {
		return dW << 2
	}, this.eA = function(dW) {
		return az.b0 * this.dP(dW) * 256 + (this.dN(dW) << 4)
	}, this.eB = function(dW) {
		return this.eA(dW) + 8 + (az.b0 << 7)
	}, this.eC = function(dl) {
		return az.b0 * (this.ds(dl) >> 4) + (this.dp(dl) >> 4)
	}, this.eD = function(dl) {
		dl = this.eC(dl);
		return (this.dN(dl) >> 5) + eE.eF.eG * (this.dP(dl) >> 5)
	}, this.dp = function(dl) {
		return dl % (az.b0 << 4)
	}, this.ds = function(dl) {
		return cA.cB(dl, az.b0 << 4)
	}, this.eH = function(dW, cW) {
		return dW + this.dH[cW]
	}, this.eI = function(df, cW) {
		return df + this.dI[cW]
	}
}

function eJ(player) {
	return eK.ab[1] = bV[player].length, eK.ab[0] === bZ ? eL(player) : eM(player, eK.ab[0]), 0 !== eK.ab[1] || 0 !== bV[player].length
}

function eN(player) {
	eO && (eP[player] = 1), eQ(eK.ab[1], player), b5.eR(player, eK.aX[0], eK.ab[0]), bL.eS(player, !1)
}

function eT(player, eU, bU, eV) {
	var eW = bJ(3 * bO[player], 256);
	eV -= eV >= bJ(bO[player], 2) ? eW : 0, eQ(bU, player), b5.eR(player, eV, eU), bO[player] -= eV + eW, bL.eS(player, !1)
}

function eM(player, eU) {
	for (var cW, aE = bn[player].length - 1; 0 <= aE; aE--)
		if (bW.eX(bn[player][aE]))
			for (cW = 3; 0 <= cW; cW--)
				if (bW.bf(bn[player][aE] + av[cW]) && bW.bg(bn[player][aE] + av[cW]) === eU) {
					bV[player].push(bn[player][aE]);
					break
				}
}

function eQ(d6, player) {
	for (var aE = bV[player].length - 1; d6 <= aE; aE--) bW.eY(bV[player][aE], player)
}

function eL(player) {
	for (var cW, aE = bn[player].length - 1; 0 <= aE; aE--)
		if (bW.eX(bn[player][aE]))
			for (cW = 3; 0 <= cW; cW--)
				if (bW.bh(bn[player][aE] + av[cW])) {
					bV[player].push(bn[player][aE]);
					break
				}
}

function eZ(player, ea) {
	var aE, eb, cW, ec, bU = bn[player].length,
		dU = 256 <= bU ? 12 : 32 <= bU ? 6 : 1,
		ed = bU - 1 - ee.ef(dU);
	eg = 0;
	loop: for (aE = ed; 0 <= aE; aE -= dU)
		for (cW = 3; 0 <= cW; cW--)
			if ((ec = bW.bh(bn[player][aE] + av[cW]) ? bZ : bW.bg(bn[player][aE] + av[cW])) === bZ || bW.bf(bn[player][aE] + av[cW]) && ec !== player && (ea || eh(player, ec))) {
				for (eb = eg - 1; 0 <= eb; eb--)
					if (ei[eb] === ec) continue loop;
				if (ei[eg] = ec, ++eg >= ej) return !0
			}
	return 0 < eg
}

function ek(player, ea) {
	var aE, cW, ec;
	for (eg = 0, aE = bn[player].length - 1; 0 <= aE; aE--)
		for (cW = 3; 0 <= cW; cW--)
			if ((ec = bW.bh(bn[player][aE] + av[cW]) ? bZ : bW.bg(bn[player][aE] + av[cW])) === bZ || bW.bf(bn[player][aE] + av[cW]) && ec !== player && (ea || eh(player, ec))) return ei[eg++] = ec, !0;
	return !1
}

function el() {
	for (var em, aE = eg - 1; 0 <= aE; aE--)
		if (ei[aE] === bZ) {
			for (eg--, em = aE; em < eg; em++) ei[em] = ei[em + 1];
			return !0
		} return !1
}

function en(player) {
	for (var em, aE = eg - 1; 0 <= aE; aE--)
		if (b5.cP(player, ei[aE]))
			for (eg--, em = aE; em < eg; em++) ei[em] = ei[em + 1];
	return 0 === eg
}

function eo() {
	for (var aE = eg - 1; 0 <= aE; aE--)
		if (ei[aE] >= dv) return !0;
	return !1
}

function ep() {
	for (var aE = eg - 1; 0 <= aE; aE--) ei[aE] < dv && (ei[aE] = ei[--eg]);
	return 0 < eg
}

function eq(player) {
	for (var em, er = ei[0], es = bO[er] + b5.c9(er, player), aE = eg - 1; 1 <= aE; aE--)(em = bO[ei[aE]] + b5.c9(ei[aE], player)) < es && (er = ei[aE], es = em);
	return er
}

function et(player) {
	var eu, ev = ei[0];
	if (1 !== eg)
		for (var ew = bJ(ex[player] + ey[player], 2), ez = bJ(f0[player] + f1[player], 2), f2 = f3(ew - bJ(ex[ev] + ey[ev], 2)) + f3(ez - bJ(f0[ev] + f1[ev], 2)), aE = eg - 1; 1 <= aE; aE--)(eu = f3(ew - bJ(ex[ei[aE]] + ey[ei[aE]], 2)) + f3(ez - bJ(
			f0[ei[aE]] + f1[ei[aE]], 2))) < f2 && (f2 = eu, ev = ei[aE]);
	return ev
}

function f4() {
	return ei[ee.ef(eg)]
}

function f5() {
	ej = 8, eg = 0, ei = new Uint16Array(ej)
}

function f6() {
	eP = eO ? new Uint8Array(bZ) : null
}

function f7(player, eV) {
	var f8;
	eO && (eP[player] = 0), !b5.cO(player) || eV < 60 || (0 === bn[player].length ? eE.f9.fA(player) || (fB.fC(player - dv, 200), fD(player, eV, fB.eV[player - dv], bP.fE(player))) : 0 < bo[player].length && ee.random() < ee.value(bo[player].length >
		bn[player].length ? 7 : 3) && eE.f9.fA(player) || (f8 = bP.fE(player), bO[player] > f8 && eV < bO[player] - f8 && (eV = bO[player] - f8), eO ? fF(player, eV, fB.eV[player - dv], f8) : fG(player, eV, fB.eV[player - dv])))
}

function fF(player, eV, fH, f8) {
	var eU;
	eZ(player, !1) || ek(player, !1) ? (eP[player] = 1, en(player) || (el() ? (fI(player, eV), fJ(player, bZ, fH)) : (ee.fK(fB.fL[fH]) ? fM(player, eV, eU = eq(player)) : (eo() && ee.fK(fB.fN[fH]) && ep(), fM(player, eV, eU = et(player))), fJ(player,
		eU, fH)))) : 0 < bo[player].length && ee.random() < ee.value(60) && eE.f9.fA(player) || (fB.fC(player - dv, 200), fD(player, eV, fH, f8))
}

function fO(player, eV) {
	eZ(player, !1) || ek(player, !1) ? (eP[player] = 1, el() ? fI(player, eV) : fM(player, eV, f4())) : fD(player, eV, 0, 0)
}

function fJ(player, eU, fH) {
	3 <= fH && 2142 < aL.fP() && (eU === bZ || bO[eU] < bJ(bO[player], 20)) && fB.fC(player - dv, 25)
}

function fD(player, eV, fH, f8) {
	var aE, em, fQ;
	if (0 !== fR.fS[player] && !(5 === fH && bO[player] < f8 || 4 === fH && bO[player] < bJ(f8, 2)))
		for (aE = ee.ef(fT), em = 0; em < fT; em++)
			if (fQ = fU[(em + aE) % fT], fR.fS[fQ] === fR.fS[player] && 1 === eP[fQ]) return void cR.fV.fW(player, fQ, eV)
}

function fG(player, eV, fH) {
	!eZ(player, !0) && !ek(player, !0) || en(player) || (el() ? fI(player, eV) : ee.fK(fB.fL[fH]) ? fM(player, eV, eq(player)) : (eo() && ee.fK(fB.fN[fH]) && ep(), fM(player, eV, et(player))))
}

function fX(player, eV) {
	(eZ(player, !0) || ek(player, !0)) && (el() ? fI(player, eV) : fM(player, eV, f4()))
}

function fM(player, eV, eU) {
	bJ(bO[player], 8) > bO[eU] && (eV = (fY = bJ(11 * bO[eU], 5)) < eV ? eV : fY);
	var fY = bV[player].length;
	eM(player, eU), eT(player, eU, fY, eV)
}

function fI(player, eV) {
	var eU = bZ,
		bU = bV[player].length;
	return eL(player), bV[player].length !== bU && (eT(player, eU, bU, eV), !0)
}
self.aiCommand746 = function(aR) {
	0 === aR ? aS() : 1 !== aR || q < 14 || aT.aU()
};
var dv, oR, fl, oQ, fZ = [60, 74, 112, 200, 256, 512];

function fa() {
	var fb, fc, fd, fe, ff, fg;

	function fv(aE) {
		fb[aE] = 1 + bJ(ff[aE] * ee.random(), 10 * ee.value(100))
	}
	this.fh = ["Very Easy", "Easy", "Normal", "Hard", "Harder", "Very Hard"], this.fi = [97, 95, 93, 90, 87, 84], this.fN = [98, 95, 70, 40, 20, 0], this.fj = [85, 70, 50, 30, 7, 3], this.fL = [0, 0, 5, 25, 50, 90], this.eV = null, this.b =
	function() {
		var aE, fk;
		if (fb = new Uint8Array(fl), fc = new Uint16Array(fl), fd = new Uint16Array(fl), fe = new Uint8Array(fl), this.eV = new Uint8Array(fl), ff = new Uint16Array(fl), fg = new Uint16Array(fl), fm.fn) {
			if (fm.fo.fp)
				for (aE = fl - 1; 0 <= aE; aE--) this.eV[aE] = fm.fo.fp[aE + 1]
		} else if (9 === fq) this.fr();
		else if (fs)
			if (eO)
				for (aE = fl - 1; 0 <= aE; aE--) this.eV[aE] = ft.fu[fR.fS[aE + dv] - 1].be;
			else
				for (aE = fl - 1; 0 <= aE; aE--) this.eV[aE] = ft.fu[0].be;
		else
			for (fk = 8 === fq ? 1 : 0, aE = fl - 1; 0 <= aE; aE--) this.eV[aE] = fk;
		for (aE = fl - 1; 0 <= aE; aE--) this.eV[aE] <= 2 ? (fe[aE] = 5, ff[aE] = fg[aE] = 1040, 0 === this.eV[aE] ? (fc[aE] = 1e3, fd[aE] = 1e3) : 1 === this.eV[aE] ? (fc[aE] = 1e3, fd[aE] = 920, ff[aE] = fg[aE] = 1100) : (fc[aE] = 825, fd[aE] =
			750)) : this.eV[aE] <= 4 ? (fe[aE] = 1 + ee.ef(20), 3 === this.eV[aE] ? (fc[aE] = fd[aE] = 500, ff[aE] = fg[aE] = 1e3) : (fg[aE] = 250 + ee.ef(1501), ff[aE] = 500 + ee.ef(501), fc[aE] = 300 + ee.ef(201), fd[aE] = 100 + ee.ef(
			201))) : (ff[aE] = 1e3, fg[aE] = 1e3, fe[aE] = 35 + ee.ef(16), fc[aE] = 300 + ee.ef(201), fd[aE] = 50 + ee.ef(101)), fv(aE)
	}, this.fr = function() {
		for (var aE, df = 0, em = 0; em < 6; em++) {
			for (aE = df + fw.fx[em] - 1; df <= aE; aE--) this.eV[aE] = em;
			df += fw.fx[em]
		}
	}, this.fC = function(fy, value) {
		0 <= fy && (fb[fy] = value)
	}, this.fA = function(fy) {
		0 == --fb[fy] && ! function(fy) {
			! function(fy) {
				ff[fy] !== fg[fy] && (ff[fy] += ff[fy] < fg[fy] ? 3 : -3);
				fc[fy] !== fd[fy] && (fc[fy] += fc[fy] < fd[fy] ? fe[fy] : -fe[fy], fc[fy] = (Math.abs(fc[fy] - fd[fy]) <= fe[fy] ? fd : fc)[fy]);
				fb[fy] = bJ(ff[fy], 10)
			}(fy);
			var player = fy + dv;
			f7(player, bJ(fc[fy] * bO[player], 1e3))
		}(fy)
	}
}

function g1() {
	g2.fA(), g3.fA(), g4.g5(), g6.fA(), g7.g8.g9()
}

function gA() {
	gB.fA(), gC.fA(), bP.fA(), gD.fA(), gE.fA(), bL.fA(), gF.fA(), eE.gG.fA(), gH(), gI.fA(), fw.fA(), g3.fA(), g3.gJ(), g4.fA(), gK.fA(), gL.fA(), gM.fA(), g2.fA(), gN.fA(), cU.fA(), gO.fA(), bR.fA(), gP.fA(), gQ.fA(), g6.fA(), gR.fA(), aL.fA()
}

function gS() {
	gT.fA(), gU.fA(), cm.fA(), gV.fA(), gW.fA(), gX.gY()
}

function gZ() {
	gI.ga(!1), gM.ga(), g4.ga(!1), gL.ga(), cU.ga(), gO.ga(), g3.ga(2 === gb), gP.cg()
}

function gc() {
	g3.ga(!0) && (aL.co = !0), g6.fA()
}

function gd() {
	var ge, gf, gg, gh, gi, gj;

	function gn(gp) {
		for (var aE = gf - 1; 0 <= aE; aE--) 0 === gh[gg[aE]] && bv[gg[aE]] >= gp && b2(gg[aE])
	}

	function gl(player) {
		10 === gh[player] ? gh[player] = ge : bv[player] < 1e3 ? gh[player] = 3 : bv[player] < 1e4 ? gh[player] = 2 : bv[player] < 6e4 ? gh[player] = 1 : gh[player] = 0
	}
	this.b = function() {
		gi = gj = 0, ge = 6, gf = 0, gg = new Uint16Array(bZ), gh = new Uint8Array(bZ)
	}, this.fA = function() {
		var aE;
		for (gi = bR.bS[13], gj = bO[bN], aE = gf - 1; 0 <= aE; aE--) 10 === gh[gg[aE]] ? gl(gg[aE]) : 0 == gh[gg[aE]]-- && (gl(gg[aE]), b2(gg[aE]));
		16e4 <= bv[gm[0]] && (gn(16e4), 3e5 <= bv[gm[0]]) && gn(3e5), bv[bN] > bR.bS[7] && (bR.bS[7] = bv[bN]), bR.bS[14] += gj - bO[bN] + gi - bR.bS[13]
	}, this.bM = function(player) {
		for (var eb, aE = gf - 1; 0 <= aE; aE--)
			if (player === gg[aE]) {
				for (gf--, eb = aE; eb < gf; eb++) gg[eb] = gg[eb + 1];
				return
			}
	}, this.eS = function(player, gq) {
		for (var aE = gf - 1; 0 <= aE; aE--)
			if (player === gg[aE]) return;
		gg[gf++] = player, gh[player] = gq ? 2 : 10
	}
}

function gr() {
	var d6, f9;
	this.b = function() {
		d6 = fl, f9 = new Uint16Array(fl);
		for (var aE = fl - 1; 0 <= aE; aE--) f9[aE] = aE
	}, this.fA = function() {
		for (var aE = d6 - 1; 0 <= aE; aE--) 0 === dw[f9[aE] + dv] ? function(eb) {
			d6--;
			for (var aE = eb; aE < d6; aE++) f9[aE] = f9[aE + 1]
		}(aE) : fB.fA(f9[aE])
	}
}

function gu() {
	var gv, gw, gf, gg, gh, gx, gy, gz;

	function h2(aE) {
		var eb;
		for (gf--, eb = aE; eb < gf; eb++) gg[eb] = gg[eb + 1], gh[eb] = gh[eb + 1], gx[eb] = gx[eb + 1], gy[eb] = gy[eb + 1], gz[eb] = gz[eb + 1]
	}
	this.b = function() {
		gv = 1, gf = 0, gw = 2 * bZ, gg = new Uint16Array(gw), gh = new Uint8Array(gw), gx = new Uint16Array(gw), gy = new Uint32Array(gw), gz = new Uint32Array(gw)
	}, this.h0 = function(cd, position) {
		gy[cd] = position
	}, this.fA = function() {
		for (var aE = gf - 1; 0 <= aE; aE--) 0 == gh[aE]-- && (gh[aE] = 2, h1.fA(aE, gx[aE], gg[aE], gy[aE], gz[aE]))
	}, this.bM = function(player, id) {
		for (var aE = gf - 1; 0 <= aE; aE--)
			if (player === gg[aE] && id === gx[aE]) return void h2(aE)
	}, this.h3 = function(player) {
		for (var aE = gf - 1; 0 <= aE; aE--) player === gg[aE] && (h1.h4(player, gy[aE]), h2(aE))
	}, this.eS = function(player, ed, h5) {
		if (gw <= gf) return 0;
		gg[gf] = player, gh[gf] = 0, gx[gf] = gv, gy[gf] = ed, gz[gf] = h5;
		player = gv;
		return gf++, gv = 2 * gw < ++gv ? 1 : gv, player
	}, this.cy = function() {
		if (!(e2 < 40 || 0 === gf)) {
			var eb, h8, h9, aE, cj, hC, eV, hD = e1 / e2,
				hE = e3 / e2,
				hF = (hG + e1) / e2,
				hH = (cu + e3) / e2;
			for (cz.textAlign = d1, cz.textBaseline = d0, eb = gf - 1; 0 <= eb; eb--) h8 = bW.hI(gy[eb]), h9 = bW.cx(gy[eb]), aE = gg[eb], hD - 1 < h8 && h8 < hF && hE - 1 < h9 && h9 < hH && 0 !== dw[aE] && ((cj = Math.floor(.94 * e2 * g3.hJ(
				aE))) < 6 || (h8 = Math.floor(hG * (h8 + .5 - hD) / (hF - hD)), h9 = Math.floor(cu * (h9 + .48 - hE) / (hH - hE)), cz.font = ce + cj + cf, cz.fillStyle = d2.hK, eV = b5.bD(aE, b5.hL(aE, gx[eb])), cz.fillText(hM.hN.hO ? gM
				.hP(eV) : hQ[aE], h8, h9), (hC = Math.floor(.5 * cj)) < 6) || (cz.font = ce + hC + cf, cz.fillText(hM.hN.hO ? hQ[aE] : gM.hP(eV), h8, h9 + Math.floor(.82 * cj))))
		}
	}
}

function hR() {
	var hS, hT, hU, hV, hW, hX, hY, hZ, ha, hb, hc, hd, he, hf = !1,
		hg = !1;

	function hh(hi) {
		hd = aL.aM, hU = hV = hT = 0, hW = (he = 33) / hi, hS = 1 / (hi / he / 4), hX = (hG / 2 + e1) / e2, hY = (cu / 2 + e3) / e2, hZ = e2
	}

	function hy(i0) {
		Math.abs(Math.log(hc / hZ)) < .125 && (hc = i0 * hZ)
	}

	function hx(hD, hE, hF, hH) {
		ha = (hD + hF + 1) / 2, hb = (hE + hH + 1) / 2;
		hF = hG / (hF - hD + 1), hD = cu / (hH - hE + 1);
		hc = .9 * (hF < hD ? hF : hD)
	}
	this.hj = function() {
		return hf
	}, this.hk = function() {
		hh(1), this.hl(0, 0, az.b0 - 1, az.b1 - 1), hm || cH || this.hn(bN, 3e3, !0, .3)
	}, this.hn = function(player, hi, ho, zoom) {
		hp || hf && !ho && hg || 0 === bv[player] || (hq.hr = !1, hg = ho, hh(hi), function(player) {
			ha = (ey[player] + ex[player] + 1) / 2, hb = (f1[player] + f0[player] + 1) / 2
		}(player), function(zoom, player) {
			var dm = ex[player] - ey[player] + 1,
				player = f0[player] - f1[player] + 1,
				eb = hG / dm,
				em = cu / player,
				eb = (hc = eb < em ? eb : em, 0 !== zoom ? zoom : dm < 20 && player < 20 ? .5 : .9);
			hc *= eb, hy(7 / 8)
		}(zoom, player), hf = !0, hu.hv())
	}, this.hw = function(hi) {
		cH || hp || (hq.hr = !1, hg = !1, hh(hi), hx(0, 0, az.b0 - 1, az.b1 - 1), hy(7 / 8), hf = !0, hu.hv())
	}, this.hl = function(hD, hE, hF, hH) {
		hx(hD, hE, hF, hH), e2 = hc, hq.i1(ha, hG / 2), hq.i2(hb, cu / 2), i3.i4()
	}, this.i5 = function() {
		return !(hf && hg || (hf = !1))
	}, this.fA = function() {
		var i8, i9, be, iC;
		hf && (hT < .5 ? hV < hW && (hV += hW * hS, hU = hT) : 1 - hU < hT && (hV = (hV -= hW * hS) < hW * hS ? hW * hS : hV), hd = hd >= aL.aM ? aL.aM - 1 : hd, be = aL.aM - hd, hT = 1e3 < be || 1 < (hT += hV * be / he) ? 1 : hT, hd = aL.aM,
			be = e2, i8 = e1, i9 = e3, be = (e2 = hZ * Math.pow(hc / hZ, hT)) / be, iC = 1 - (hZ * Math.pow(hc / hZ, 1 - hT) - hZ) / (hc - hZ), hq.i1(hX + iC * (ha - hX), hG / 2), hq.i2(hY + iC * (hb - hY), cu / 2), g3.zoom(be, (i8 * be -
				e1) / (1 - be), (i9 * be - e3) / (1 - be)), i3.i4(), 1 <= hT && (hf = !1, iD.iE = !0), aL.co = !0)
	}
}

function iF() {
	var fQ = cK.iG;
	this.hK = fQ.iH(0, 0, 0), this.iI = fQ.iJ(0, 0, 0, .7), this.iK = fQ.iJ(0, 0, 0, .5), this.iL = fQ.iJ(0, 0, 0, .85), this.iM = fQ.iJ(0, 0, 0, .75), this.iN = fQ.iJ(0, 0, 0, .6), this.iO = fQ.iJ(0, 0, 0, .35), this.d3 = fQ.iH(255, 255, 255), this
		.iP = fQ.iJ(255, 255, 255, .3), this.iQ = fQ.iJ(255, 255, 255, .6), this.iR = fQ.iJ(255, 255, 255, .4), this.iS = fQ.iJ(255, 255, 255, .25), this.iT = fQ.iJ(255, 255, 255, .85), this.iU = fQ.iJ(255, 255, 255, .75), this.iV = fQ.iH(128, 128,
			128), this.iW = fQ.iJ(64, 64, 64, .75), this.iX = fQ.iH(30, 255, 30), this.iY = fQ.iH(0, 200, 0), this.iZ = fQ.iH(128, 255, 128), this.ia = fQ.iJ(10, 65, 10, .75), this.ib = fQ.iJ(0, 255, 0, .6), this.ic = fQ.iJ(0, 255, 0, .5), this.id =
		fQ.iJ(0, 200, 0, .5), this.ie = fQ.iJ(0, 100, 0, .75), this.ig = fQ.iJ(0, 60, 0, .8), this.ih = fQ.iJ(0, 255, 0, .3), this.ii = fQ.iJ(0, 180, 0, .6), this.ij = fQ.iH(255, 120, 120), this.ik = fQ.iH(255, 160, 160), this.il = fQ.iH(255, 70,
		70), this.im = fQ.iH(230, 0, 0), this.io = fQ.iJ(220, 0, 0, .6), this.ip = fQ.iJ(255, 100, 100, .8), this.iq = fQ.iJ(100, 0, 0, .85), this.ir = fQ.iJ(60, 0, 0, .85), this.is = fQ.iJ(200, 0, 0, .6), this.it = fQ.iJ(0, 60, 60, .85), this.iu =
		fQ.iJ(10, 60, 60, .9), this.iv = fQ.iJ(0, 96, 96, .75), this.iw = fQ.iH(160, 160, 255), this.ix = fQ.iJ(0, 40, 90, .75), this.iy = fQ.iJ(0, 0, 255, .6), this.iz = fQ.iH(255, 120, 100), this.j0 = fQ.iJ(255, 255, 0, .5), this.j1 = fQ.iJ(255,
			255, 150, .2), this.j2 = fQ.iH(255, 255, 0), this.j3 = fQ.iH(255, 255, 200), this.j4 = fQ.iJ(200, 200, 0, .6), this.j5 = fQ.iJ(255, 140, 0, .75)
}

function j6() {
	this.cS = new j7, this.cL = new j8, this.j9 = new jA, this.jB = new jC, this.fV = new jD
}

function j7() {
	this.jE = function(dW) {
		fs ? cR.j9.jE(bN, dW) : jF.jG(dW)
	}, this.cT = function(e0, eU) {
		g2.jH(), fs ? cR.j9.cT(bN, e0, eU) : jF.jI(e0, eU)
	}, this.jJ = function(e0, jK) {
		g2.jH(), fs ? cR.j9.jL(bN, e0, jK) : jF.jM(e0, jK)
	}, this.jN = function(e0, dW) {
		fs ? cR.j9.jN(bN, e0, dW) : eE.jO.jP(bN, dW) && jF.jQ(e0, dW)
	}, this.jR = function(jS, dW) {
		fs ? cR.j9.jR(bN, jS, dW) : eE.jO.jT(bN, jS, dW) && jF.jU(jS, dW)
	}, this.jV = function(eU) {
		fs ? cR.j9.jV(bN, eU) : jF.jW(eU)
	}, this.jX = function(jY) {
		fs ? cR.j9.jZ(bN, jY) : jF.ja(jY)
	}, this.jb = function(jc) {
		fs ? cR.j9.jb(bN, jc) : jF.jd(jc)
	}, this.je = function() {
		fs ? cR.j9.je(bN) : jF.jf()
	}
}

function jD() {
	this.fW = function(player, jK, eV) {
		cK.cL.jg(player, eV, jK) && (bP.jJ(player, jK), jK < dv) && ee.random() < ee.value(10) && (eP[jK] = 0)
	}, this.jh = function(player, jK, eV) {
		cK.cL.ji(eV, jK) && (cK.cL.jj(jK, eK.aX[0]), bR.jk(player, jK), g3.jl(jK, eK.aX[0]))
	}
}

function j8() {
	this.jm = function(jY, player) {
		g2.jX(bN, player, jY), jF.jn(jY, player)
	}, this.jo = function(player) {
		g2.jp(player, 0), jF.jq(player)
	}, this.jr = function(js, player) {
		g2.jt(js, player), jF.ju(js, player)
	}, this.jv = function(jw) {
		fs || cH || jF.jx(jy(), jw)
	}, this.jz = function() {
		fs || cH || jF.k0(jy(), gm[0], gm[1], gm[2])
	}, this.k1 = function() {
		fs || cH || jF.k2(jy())
	}
}

function jC() {
	this.fA = function(k3) {
		var id, ae, i5;
		for (k4.b(k3), k4.cd += 2, i5 = 8 * k4.d6; k4.cd + 8 <= i5;) id = k4.k5(4), ae = k4.k5(9), 0 === id ? this.k6(id, ae, k4.k5(22)) : 1 === id ? this.k6(id, ae, k4.k5(10), k4.k5(10)) : 2 === id ? this.k6(id, ae, k4.k5(10), k4.k5(9)) : 3 ===
			id || 4 === id ? this.k6(id, ae, k4.k5(10), k4.k5(22)) : 5 === id ? this.k6(id, ae, k4.k5(10)) : 6 === id ? this.k6(id, ae, k4.k5(7)) : 7 === id ? this.k6(id, ae, k4.k5(1)) : this.k6(id, ae)
	}, this.k6 = function(id, ae, ag, ai) {
		0 === id ? cR.j9.jE(ae, ag) : 1 === id ? cR.j9.cT(ae, ag, ai) : 2 === id ? cR.j9.jL(ae, ag, ai) : 3 === id ? cR.j9.jN(ae, ag, ai) : 4 === id ? cR.j9.jR(ae, ag, ai) : 5 === id ? cR.j9.jV(ae, ag) : 6 === id ? cR.j9.jZ(ae, ag) : 7 === id ?
			cR.j9.jb(ae, ag) : 8 === id ? cR.j9.je(ae) : cR.j9.k7(ae)
	}
}

function jA() {
	this.jE = function(player, dW) {
		cK.cL.cM(0) && cK.cL.cN(player) && k8.e8(dW) && (gR.k9.kA(0, player, dW), kB.eR(player, dW))
	}, this.cT = function(player, e0, eU) {
		cK.cL.cM(1) && cK.cL.cN(player) && cK.cL.kC(player, eU) && cK.cL.kD(player, e0, 12, bK) && b5.cO(player) && cK.cL.kE(player, eU) && eJ(player) && (gR.k9.kA(1, player, e0, eK.ab[0]), cK.cL.kF(player), bR.kG(player, e0), eN(player))
	}, this.jL = function(player, e0, jK) {
		cK.cL.cM(1) && cK.cL.cN(player) && eO && cK.cL.kC(player, jK) && cK.cL.kH(player, jK) && cK.cL.jg(player, cK.cL.dz(player, e0), jK) && (gR.k9.kA(2, player, e0, jK), bP.jJ(player, jK))
	}, this.jN = function(player, e0, dW) {
		cK.cL.cM(1) && cK.cL.cN(player) && k8.e8(dW) && eE.gG.kI !== eE.gG.kJ && eE.gG.kK[player] !== eE.gG.kL && 0 !== bo[player].length && cK.cL.kD(player, e0, 32, 16) && eE.kM.kN(player, dW) && (gR.k9.kA(3, player, e0, dW), cK.cL.kF(player),
			eE.gG.kO(player))
	}, this.jR = function(player, jS, dW) {
		cK.cL.cM(1) && cK.cL.cN(player) && k8.e8(dW) && eE.jO.kP(player, jS) && eE.kM.kQ(dW) && (gR.k9.kA(4, player, jS, dW), cK.cL.kR(player, 8), eE.gG.jR())
	}, this.jV = function(player, eU) {
		cK.cL.cM(1) && cK.cL.cN(player) && (eU = Math.min(eU, bZ), b5.cP(player, eU)) && (gR.k9.kA(5, player, eU), b5.kS(player, eU))
	}, this.jZ = function(player, jY) {
		cK.cL.cM(2) && cK.cL.cN(player) && (jY = Math.min(jY, aF.aG - 1), gR.k9.kA(6, player, jY), g3.kT(player, 0, jY))
	}, this.jb = function(player, jc) {
		cK.cL.cM(1) && cK.cL.cN(player) && (gR.k9.kA(7, player, jc), gO.kU(player, jc))
	}, this.je = function(player) {
		(cK.cL.cM(0) || cK.cL.cM(1)) && cK.cL.cN(player) && gQ.je(player) && gR.k9.kA(8, player)
	}, this.k7 = function(player) {
		gQ.k7(player), gR.k9.kA(9, player)
	}
}

function kV(kW, kX, color) {
	var button = document.createElement("button");
	this.b = function(kY) {
		button.style.position = "relative", button.kZ = kW, button.style.color = d2.d3, button.style.border = "2px solid " + d2.d3, button.style.backgroundColor = color || d2.iO, button.style.cj = "inherit", button.style.ka = "break-word", button
			.kb = () => button.style.kc = "invert(0.15)", button.kd = () => button.style.kc = "invert(0)", button.ke = () => button.style.kc = "invert(0.2)", button.kf = () => button.style.kc = "invert(0.15)", button.kg = () => {
				button.style.kc = "invert(0)", kX()
			}, kY.appendChild(button)
	}, this.kh = function() {
		button.style.width = "100%", button.style.height = "100%"
	}, this.ki = function(kj) {
		button.kk(kj)
	}
}

function kl(km, kn) {
	this.h8 = 0, this.h9 = 0, this.cl = 0, this.eu = 0, this.resize = function() {
		this.eu = Math.min(cK.iG.ko(.5) * km[1] * cb, cu - 2 * kp), this.cl = Math.min(this.eu * (km[0] / km[1]), hG - 2 * kp), this.eu = km[1] * this.cl / km[0], this.h8 = kp + kn[0] * (hG - this.cl - 2 * kp), this.h9 = kp + kn[1] * (cu - this
			.eu - 2 * kp)
	}, this.kq = function() {
		return this.h8 + .5 * this.cl
	}
}

function kr(kW, ks, kX) {
	var kt = document.createElement("input");
	this.b = function(kY) {
		var kv, ku = document.createElement("label");
		ku.kZ = kW, ku.style.color = d2.d3, ku.style.kw = "1em", kt.type = "checkbox", kt.style.kx = "1em", kt.style.ky = "middle", kt.style.position = "relative", kt.style.bottom = "0.2em", kt.onchange = kX, kv = new kz(kt.title = ks), this
			.resize(), ku.kk(kt), kv.b(ku), kY.appendChild(ku)
	}, this.setState = function(j) {
		kt.l0 = j
	}, this.resize = function() {
		kt.style.width = cK.iG.ko(.5) * cb * .015 + "px", kt.style.height = cK.iG.ko(.5) * cb * .015 + "px"
	}
}

function l1() {
	var l2 = document.createElement("div");
	this.b = function(kY) {
		l2.width = "100%", l2.height = "auto", l2.style.display = "grid", l2.style.l3 = "auto", l2.style.l4 = "16px", l2.style.l5 = "100%", this.resize(), kY.appendChild(l2)
	}, this.resize = function() {
		l2.style.l6 = "repeat(auto-fit, minmax(clamp(64px, " + 400 * cK.iG.ko(.5) + "px, 100%), auto))", l2.style.l7 = "minmax(min-content," + cK.iG.ko(.5) * cb * .045 + "px)"
	}, this.l8 = function(l9) {
		l9.b(l2)
	}
}

function lA() {
	var lB, lC, lD;
	this.b = function(title, lE, lF) {
		var lG;
		(lB = document.createElement("div")).style.position = "absolute", lB.style.top = "0", lB.style.left = "0", lB.style.width = "100vw", lB.style.height = "100vh", lB.style.lI = "100vh", lB.style.backgroundColor = d2.iK, lB.style.lJ =
			"blur(5px)", (lC = document.createElement("div")).style.width = "100%", lC.style.display = "flex", lC.style.backgroundColor = d2.iO, lC.style.lK = "2px solid " + d2.d3, (lG = document.createElement("h1")).kZ = title, lG.style
			.textAlign = "center", lG.style.width = "70%", lG.style.margin = "auto", lG.style.color = d2.d3, (title = document.createElement("div")).style.lL = "0", title.style.width = "30%", title.style.padding = "16px", (lD = document
				.createElement("div")).style.lM = "auto", lD.style.padding = "16px", lD.style.lN = "24px", lD.style.position = "absolute", lD.style.left = "0", lD.style.lL = "0", lD.style.bottom = "0", lC.appendChild(lG), lC.appendChild(title),
			lB.appendChild(lC), lB.appendChild(lD), lE.b(title), lE.kh();
		for (var aE = 0; aE < lF.length; aE++) lF[aE].b(lD);
		this.resize()
	}, this.resize = function() {
		var lO = cK.iG.ko(.5) * cb * .045 + 32;
		lC.style.height = lO + "px", lD.style.top = 2 + lO + "px", lB.style.cj = 20 * cK.iG.ko(.5) + "px"
	}, this.show = function() {
		document.body.appendChild(lB)
	}, this.lP = function() {
		document.body.removeChild(lB)
	}
}

function lQ() {
	var lR, lS = !0;

	function ld() {
		lR.select(), document.execCommand("copy")
	}
	this.lT = !1, this.b = function() {
		(lR = document.createElement("textarea")).setAttribute("name", "replayData"), lR.setAttribute("id", "replayDataField"), lR.setAttribute("autocomplete", "off"), lR.setAttribute("placeholder", "Insert the replay link here!"), lR.style
			.position = "absolute", lR.style.resize = "none", lR.style.borderRadius = "0", lR.style.color = d2.d3, lR.style.backgroundColor = d2.iI, lR.addEventListener("focus", function() {
				lU.lT = !0
			}), lR.addEventListener("blur", function() {
				lU.lT = !1
			})
	}, this.show = function() {
		document.body.appendChild(lR)
	}, this.lP = function() {
		document.body.removeChild(lR)
	}, this.resize = function(h8, h9, cl, eu) {
		cK.iG.lV(lR.style, h8, h9, cl, eu), lR.style.font = cK.iG.lW(Math.max(5, .1 * eu / lX), 0)
	}, this.lY = function(kW) {
		lR.value = kW
	}, this.lZ = function() {
		return lR.value
	}, this.la = function() {
		lR.select()
	}, this.lb = function() {
		lR.value = ""
	}, this.lc = function() {
		lS && navigator.clipboard ? (lR.select(), navigator.clipboard.writeText(lR.value).catch(function() {
			lS = !1, ld()
		})) : ld()
	}
}

function kz(kW) {
	var le = document.createElement("div"),
		lf = document.createElement("span"),
		lg = !1,
		lh = !1;

	function show() {
		lh || (lf.appendChild(le), lh = !0)
	}

	function lP() {
		lh && !lg && (lf.removeChild(le), lh = !1)
	}
	this.b = function(kY) {
		le.style.position = "absolute", le.style.li = "100", le.style.backgroundColor = d2.iO, le.style.color = d2.d3, le.style.padding = "8px", le.style.borderRadius = "8px", le.style.border = "2px solid " + d2.d3, le.style.cj = "inherit", le
			.style.ka = "break-word", le.kZ = kW, lf.style.kw = "1em", lf.style.kx = "1.5em", lf.style.border = "2px solid " + d2.d3, lf.style.borderRadius = "20px", lf.style.padding = "0.3em", lf.kZ = "?", lf.lj = 0, lf.kb = show, lf.kd = lP, lf
			.kg = lk => {
				((lg = !lg) ? lP : show)(), lf.ll(), lk.preventDefault()
			}, lf.lm = () => {
				lg = !1, lP()
			}, kY.appendChild(lf)
	}
}

function ln() {
	var lo = new Uint8Array(78);
	this.b = function() {
		var aE;
		for (lo[50] = 37, aE = 0; aE < 10; aE++) lo[aE + 3] = aE + 1;
		for (aE = 0; aE < 26; aE++) lo[aE + 20] = aE + 11, lo[aE + 52] = aE + 38
	}, this.lp = function(v) {
		return v.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "_")
	}, this.lq = function(v, lr) {
		for (var ls = lo, bU = v.length, ad = new Uint8Array(lr || bU), aE = 0; aE < bU; aE++) ad[aE] = ls[v.charCodeAt(aE) - 45];
		return ad
	}, this.lt = function(lu) {
		var aE, bU = lu.length,
			cl = lv;
		for (cl.lw(6 * bU), aE = 0; aE < bU; aE++) cl.lx(6, lu[aE]);
		k4.b(cl.k3)
	}
}

function ly() {
	var cl, eu, lz;

	function mR(mS, be, mP, m5, mK) {
		be = mQ(mS, be + 1 + 2 * m5 & 3);
		! function(mS, mT) {
			return 1 < Math.abs(mS % cl - mT % cl) || 1 < Math.abs(mW(mS) - mW(mT))
		}(mS, be) && 0 === mK[be << 2] && (mK[be << 2] = mP)
	}

	function mW(bc) {
		return Math.floor((bc + .5) / cl) % eu
	}

	function mQ(bc, be) {
		return bc + lz[be]
	}
	this.m0 = function(v) {
		var aE, m1, bU, m3, m6 = k4;
		for (m7.lt(m7.lq(v)), az.b0 = cl = m6.k5(12), az.b1 = eu = m6.k5(12), lz = [-cl, -1, cl, 1], az.mG = document.createElement("canvas"), az.mG.width = az.b0, az.mG.height = az.b1, az.mC = az.mG.getContext("2d", {
				alpha: !1
			}), az.mD = az.mC.getImageData(0, 0, az.b0, az.b1), az.mH = az.mD.data, cK.mI.mJ(az.mH), bU = m6.k5(12), m1 = m6.k5(5), m3 = m9(cl * eu - 1), aE = 0; aE < bU; aE++) ! function(m2, bc, m4, m5) {
			var aE, be, m6 = k4,
				mK = az.mH,
				mL = bc,
				mM = bc,
				mN = 0,
				mO = 1 + m4,
				mP = 2 - m4;
			for (mK[bc << 2] = mO, aE = 0; aE < m2; aE++) be = m6.k5(2), bc = mQ(bc, be), mK[bc << 2] === mO ? mN % 2 == 1 && mR(mM, mN + 2 * m5 + 3, mP, m5, mK) : mK[bc << 2] = mO, mR(bc, be, mP, m5, mK), mR(mM, be, mP, m5, mK), mM = bc,
				mN = be;
			mQ(bc, 0) === mL ? (mR(bc, 0, mP, m5, mK), mR(mL, 0, mP, m5, mK)) : mQ(bc, 1) === mL && (mR(bc, 0, mP, m5, mK), mR(mL, 2, mP, m5, mK));
			0 === m2 && (mR(mL, 0, mP, m5, mK), mR(mL, 2, mP, m5, mK))
		}(m6.k5(m1), m6.k5(m3), 1 === m6.k5(1), 1 === m6.k5(1));
		var h8, h9, mX, mY, mZ, ma, mK = az.mH,
			mb = !0,
			mc = az.fo.md[az.me].mc,
			mf = az.fo.md[az.me].mf;
		for (h9 = 0; h9 < eu; h9++)
			for (mY = !0, mZ = mb, h8 = ma = 0; h8 < cl; h8++) mX = 4 * h9 * cl + 4 * h8, ma <= h8 && 0 < mK[mX] && (mZ = 2 === mK[mX], mY) && (mY = !1, mZ !== mb) ? (mb = mZ, ma = h8 + 1, h8 = -1) : (mZ ? (mK[mX] = mf[0], mK[1 + mX] = mf[1], mK[
				2 + mX] = mf[2]) : (mK[mX] = mc[0], mK[1 + mX] = mc[1], mK[2 + mX] = mc[2]), mK[3 + mX] = 255);
		az.mC.putImageData(az.mD, 0, 0), az.mE = !0, az.mF.b(), aL.co = !0
	}
}

function mg() {
	var h8, h9, cl, eu, mh, mi, mj, mk, player, ad;

	function ms() {
		return function() {
			var aE;
			for (aE = 0; aE < 8; aE++)
				if (h8 = bJ(cl * ee.random(), ee.value(100)), h9 = bJ(eu * ee.random(), ee.value(100)), n0()) return 1;
			return
		}() || function() {
			var dm, dq, eb, mq, em, mp;
			for (dm = bJ(cl * ee.random(), ee.value(100)), dq = bJ(eu * ee.random(), ee.value(100)), eb = 40; 1 <= eb; eb--)
				for (mq = eu - eb; 0 <= mq; mq -= 40)
					for (h9 = (mq + dq) % eu, em = 40; 1 <= em; em--)
						for (mp = cl - em; 0 <= mp; mp -= 40)
							if (h8 = (mp + dm) % cl, n0()) return 1;
			return
		}()
	}

	function n0() {
		for (var bc, n2, l4 = bJ(mh - mk, 2), n3 = mj + h9 * mh + l4, n4 = mi + h8 * mh + l4, n1 = n3 + mk - 1; n3 <= n1; n1--)
			for (n2 = n4 + mk - 1; n4 <= n2; n2--)
				if (bc = bW.my(n2, n1), !bW.bX(bc) || bW.eX(bc)) return;
		return 1
	}

	function mt(mp, mq) {
		ml(), n5(mp - 2, mq - 2)
	}

	function ml() {
		dw[player] = 0, bO[player] = 0, bv[player] = n6[player] = 0, bV[player] = [], bn[player] = [], bo[player] = [], br[player] = [], ey[player] = f1[player] = ex[player] = f0[player] = 0
	}

	function n5(mp, mq) {
		var bc, aE, n8, n9;
		for (dw[player] = 1, bO[player] = player < dv ? n7 : fZ[fB.eV[player - dv]], ey[player] = mp + 10, f1[player] = mq + 10, f0[player] = ex[player] = 0, n8 = mp; n8 < mp + 4; n8++)
			for (n9 = mq; n9 < mq + 4; n9++)(mp < n8 && n8 < mp + 3 || mq < n9 && n9 < mq + 3) && (bc = bW.my(n8, n9), bW.bX(bc)) && (ey[player] = n8 < ey[player] ? n8 : ey[player], ex[player] = n8 > ex[player] ? n8 : ex[player], f1[player] = n9 <
				f1[player] ? n9 : f1[player], f0[player] = n9 > f0[player] ? n9 : f0[player], ad[bv[player]] = bc, bv[player]++, bW.nA(bc, player));
		for (n6[player] = bv[player], aE = bv[player] - 1; 0 <= aE; aE--) bW.nB(ad[aE], player) ? (bW.bY(ad[aE], player), bn[player].push(ad[aE])) : bW.nC(ad[aE]) ? (bW.bY(ad[aE], player), bo[player].push(ad[aE])) : bW.nD(ad[aE]) && (bW.bY(ad[aE],
			player), br[player].push(ad[aE]))
	}

	function mz(mp, mq) {
		for (var bc, n2, n1 = mq; mq - 6 < n1; n1--)
			for (n2 = mp; mp - 6 < n2; n2--)
				if (bc = bW.my(n2, n1), bW.eX(bc)) return;
		return 1
	}
	this.b = function() {
		var aE, mp, mq;
		if (ad = new Array(12), mk = 6, mh = 10, cl = bJ(az.b0, mh), eu = bJ(az.b1, mh), mi = bJ(az.b0 - mh * cl, 2), mj = bJ(az.b1 - mh * eu, 2), hm)
			for (aE = 0; aE < dv; aE++) player = aE, ml(), dw[player] = 1;
		if (fm.fn && fm.fo.mm) {
			for (player = 0; player < bZ; player++)
				if (1 !== dw[player]) {
					if (player < mr) {
						if (function() {
								var mp = fm.fo.mm[player] + 1,
									mq = fm.fo.mx[player] + 1;
								if (3 < mp && mp < az.b0 - 5 && 3 < mq && mq < az.b1 - 5 && bW.bX(bW.my(mp, mq)) && mz(mp + 3, mq + 3)) return mt(mp + 1, mq + 1), 1;
								return
							}()) continue;
						if (ms()) {
							mp = mi + h8 * mh + bJ(mh, 2), mq = mj + h9 * mh + bJ(mh, 2), mt(mp, mq);
							continue
						}
					}
					ml()
				}
		} else ! function() {
			var mp, mq;
			for (player = 0; player < bZ; player++) 1 !== dw[player] && (player < mr && ms() ? (mp = mi + h8 * mh + bJ(mh, 2), mq = mj + h9 * mh + bJ(mh, 2), mt(mp, mq)) : ml())
		}();
		bR.bS[7] = bv[bN], bR.bS[8] = bO[bN]
	}, this.nE = function(eU, nF, nG) {
		var aE, mp, mq, bc, h8, h9;
		for (player = eU, aE = 0; aE < 20; aE++)
			for (mp = nF + aE; nF - aE <= mp; mp--)
				for (mq = nG + aE; nG - aE <= mq; mq--)
					if ((mp === nF + aE || mp === nF - aE || mq === nG + aE || mq === nG - aE) && 3 < mp && mp < az.b0 - 5 && 3 < mq && mq < az.b1 - 5 && bW.bX(bW.my(mp, mq)) && mz(mp + 3, mq + 3)) {
						if (0 < bv[player]) {
							for (h9 = h8 = bc = void 0, h8 = ex[player]; h8 >= ey[player]; h8--)
								for (h9 = f0[player]; h9 >= f1[player]; h9--) bc = 4 * (h9 * az.b0 + h8), bW.nI(player, bc) && (bW.nJ(bc), bv[player]--);
							ml()
						}
						return n5(mp - 1, mq - 1), !0
					} return !1
	}, this.nK = function(eU) {
		player = eU, ms() ? mt(mi + h8 * mh + bJ(mh, 2), mj + h9 * mh + bJ(mh, 2)) : ml()
	}
}

function nL() {
	nM.nN(), cz.setTransform(e2, 0, 0, e2, 0, 0), cz.imageSmoothingEnabled = e2 < 3, cz.drawImage(az.mG, hq.hI(), hq.cx()), gK.nO.cy(), cz.drawImage(nP, hq.hI(), hq.cx()), nM.cy(), cz.imageSmoothingEnabled = !1, cz.setTransform(1, 0, 0, 1, 0, 0), eE
		.nO.cy(), g3.cy(), gF.cy(), (hp ? (gP.cy(), gW) : (cz.imageSmoothingEnabled = !1, g2.cy(), gI.cy(), cU.cy(), gW.cy(), gO.cy(), g4.cy(), hq.cy(), cm.cy(), gP.cy(), gL.cy(), gM.cy(), cI.cy(), nQ.cy(), gU.cy(), nR.cy(), lU.cy(), gV)).cy()
}

function nS(nT, cl, eu) {
	nT.clearRect(0, 0, cl, eu), nT.fillStyle = d2.iM, nT.fillRect(0, 0, cl, eu)
}

function nU(nT, cl, eu, nV) {
	nT.fillStyle = d2.d3, nT.fillRect(0, 0, cl, nV), nT.fillRect(0, 0, nV, eu), nT.fillRect(cl - nV, 0, nV, eu), nT.fillRect(0, eu - nV, cl, nV)
}

function nW(nT, h8, h9, d5, nV, bc, nX) {
	nT.fillStyle = d2.d3;
	var bc = Math.floor(d5 * bc),
		nZ = (bc += (bc - nV) % 2, Math.floor((bc - nV) / 2)),
		d5 = Math.floor((d5 - bc) / 2);
	nT.fillRect(h8 + d5, h9 + d5 + nZ, bc, nV), nX && nT.fillRect(h8 + d5 + nZ, h9 + d5, nV, bc)
}

function nb() {
	this.nc = null, this.b = function(nc) {
		this.nc = nc, g2.nd(this.nc)
	}, this.ne = function(nf) {
		var dU = (this.nc[nf].ng - this.nc[1 - nf].ng) / 10,
			dU = 8 / (1 + Math.pow(2, dU / 32)),
			dU = Math.floor(10 * dU + .5),
			ni = this.nj(this.nc[nf].ng + dU + 1),
			dU = this.nj(this.nc[1 - nf].ng - dU);
		0 === nf ? g2.nl(this.nc, ni, dU, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : g2.nl(this.nc, dU, ni, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.nj = function(ng) {
		return 16e3 <= (ng = ng < 0 ? 0 : 16e3 < ng ? 16e3 : ng) ? "Unknown" : (ng / 10).toFixed(1)
	}
}

function nm() {
	var nn = new Uint8Array(64);
	this.b = function() {
		var aE;
		for (nn[0] = 45, nn[37] = 95, aE = 0; aE < 10; aE++) nn[aE + 1] = 48 + aE;
		for (aE = 0; aE < 26; aE++) nn[aE + 11] = 65 + aE, nn[aE + 38] = 97 + aE
	}, this.no = function(np) {
		for (var m6 = k4, lu = new Uint8Array(np), aE = 0; aE < np; aE++) lu[aE] = m6.k5(6);
		return lu
	}, this.nq = function(lu) {
		for (var bU = lu.length, nr = nn, ad = [], aE = 0; aE < bU; aE++) ad.push(String.fromCharCode(nr[lu[aE]]));
		return ad.join("")
	}
}

function ns() {
	var nt, nu, nv;
	nt = [32, 65, 191, 913, 931], nu = [64, 127, 688, 930, 1155], nv = new Array(nt.length + 1);
	for (var aE = 0; aE < nv.length; aE++) {
		nv[aE] = 0;
		for (var eb = aE - 1; 0 <= eb; eb--) nv[aE] += nu[eb] - nt[eb]
	}

	function o2(fQ) {
		for (var aE = nt.length - 1; 0 <= aE; aE--)
			if (fQ >= nt[aE] && fQ < nu[aE]) return aE;
		return -1
	}
	this.nx = function(v) {
		return 0 !== (v = v.trim()).indexOf("Bot ") && 0 !== v.indexOf("[Bot] ") && function(v, nz, o0) {
			var bU = (v = v.trim()).length;
			if (bU < nz || o0 < bU) return !1;
			for (var fQ, o1 = 0, aE = 0; aE < bU; aE++)
				if (fQ = v.charCodeAt(aE), o1 += 65 <= fQ && fQ <= 90 || 1040 <= fQ && fQ <= 1071 ? 1 : 0, -1 === o2(fQ)) return !1;
			if (3 < o1 && o1 > Math.floor(bU / 2)) return !1;
			return !0
		}(v, 3, 20)
	}, this.o3 = function(v) {
		for (var bU = (v = v.trim()).length, ad = [], aE = 0; aE < bU; aE++) {
			var fQ, bc = o2(fQ = v.charCodeAt(aE));
			ad.push(nv[bc] + fQ - nt[bc])
		}
		return ad
	}, this.m0 = function(ad) {
		for (var fQ, em, v = "", bU = ad.length, aE = 0; aE < bU; aE++)
			for (em = 1; em < nv.length; em++)
				if (ad[aE] < nv[em]) {
					fQ = nt[em - 1] + ad[aE] - nv[em - 1], v += String.fromCharCode(fQ);
					break
				} return v
	}, this.o4 = function(v) {
		for (var ad = this.o3(v), result = "", aE = 0; aE < ad.length; aE++) result = (result += ad[aE] < 10 ? "00" : ad[aE] < 100 ? "0" : "") + ad[aE].toString(10);
		return result
	}, this.o5 = function(v) {
		for (var ad = new Array(Math.floor(v.length / 3)), aE = 0; aE < v.length; aE += 3) ad[Math.floor(aE / 3)] = parseInt(v.substring(aE, aE + 3));
		return this.m0(ad)
	}, this.a9 = function(v) {
		for (var aR, ad = [v.length], aE = 0; aE < v.length; aE++) ad[aE] = v.charCodeAt(aE) - 48;
		var result = "";
		for (aE = 0; aE < v.length; aE++) aE === v.length - 1 || 51 < 10 * ad[aE] + ad[aE + 1] ? result += ad[aE].toString() : (aR = 10 * ad[aE] + ad[aE + 1], result += String.fromCharCode(aR + (aR < 26 ? 65 : 71)), aE++);
		return result
	}, this.x = function(v) {
		for (var fQ, result = "", aE = 0; aE < v.length; aE++) 48 <= (fQ = v.charCodeAt(aE)) && fQ < 58 ? result += String.fromCharCode(fQ) : 65 <= fQ && fQ < 75 ? result += "0" + (fQ - 65).toString() : 75 <= fQ && fQ < 91 ? result += (fQ - 65)
			.toString() : 97 <= fQ && fQ < 123 && (result += (fQ - 71).toString());
		return result
	}, this.o6 = function(v) {
		for (var bU = v.length, ad = [], aE = 0; aE < bU; aE++)(fQ = v.charCodeAt(aE)) < 58 ? ad.push(v[aE]) : (fQ -= fQ < 91 ? 65 : 71, ad.push(String(bJ(fQ, 10))), ad.push(String(fQ - 10 * bJ(fQ, 10))));
		var bU = ad.length - 2,
			fQ = 0,
			lu = [];
		for (aE = 0; aE < bU; aE += 3) lu[fQ++] = parseInt(ad[aE] + ad[aE + 1] + ad[aE + 2]);
		return lu
	}, this.o7 = function() {
		for (var dF, o8 = "", aE = 0; aE < 6; aE++) dF = 48 + ee.random() % 36, dF += 58 <= dF ? 39 : 0, o8 += String.fromCharCode(dF);
		return o8
	}
}

function o9() {
	this.oA = new oB, this.g8 = new oC, this.b = function() {
		this.g8.b()
	}
}

function oB() {
	function oE() {
		if (2 === gb) return 1;
		gO.oP(), gb = 2, oQ = oR
	}

	function oH() {
		g2.oS(!0), gI.ga(!0), g4.ga(!0), gO.ga(), gW.oT(), cH && aL.oU.oV(), aL.co = !0, iD.oW(), aJ(0)
	}
	this.oD = function() {
		oE() || (cR.cL.jz(), g2.oF(247, 0), g2.oG(0, 59), gT.hw(2700), gU.show(!1, !1, !0), oH())
	}, this.oI = function(oJ) {
		var jw = 0,
			oK = !1;
		oE() || (8 === fq ? ((oK = (jw = oJ < 0 ? bv[0] >= bv[1] ? 0 : 1 : oJ) === bN) ? g2.oG(jw, 2) : g2.oG(1 - bN, 3), oL.ne(jw), cR.cL.jv(jw)) : eO ? (oK = fR.fS[bN] === gP.oM(), 9 === fq ? (cR.cL.jv(oK ? gm[0] : 512), g2.oN(oK)) : g7.g8.fA(
			oK)) : (oK = (jw = gm[0]) === bN, g2.oO(jw), cR.cL.jv(jw)), gU.show(oK, !1), oH())
	}
}

function oC() {
	var oX;

	function os(oZ, bd) {
		for (var v = "", aE = bd; aE < oZ.length && aE < bd + 4; aE++) v += (aE === bd ? "" : "   ") + "[" + fR.ok[oZ[aE].id] + "]: " + oZ[aE].op.toFixed(Math.max(Math.floor(3 - Math.log10(oZ[aE].op)), 0));
		v.length && g2.or(0, v, 45, 0, cK.iG.iH(225, 240, 255), d2.iM, -1, !1)
	}
	this.oY = 0, this.oZ = null, this.b = function() {
		oX = 0, this.oY = 0, this.oZ = null
	}, this.fA = function(oK) {
		var oa = fR.ob[gP.oc()];
		this.oY = gP.od(), this.oZ = function(oa, oY) {
				var aE, em, bU, fS = fR.fS,
					ob = fR.ob,
					ok = fR.ok,
					ol = fR.ol,
					om = bv,
					on = dv,
					oo = [],
					cd = 0;
				for (em = ok.length - 1; 0 <= em; em--)
					if (ob[fS[ol[em][0]]] === oa) {
						for (oo.push({
								id: em,
								om: 0,
								player: ol[em][0],
								op: 0
							}), bU = ol[em].length, aE = 0; aE < bU; aE++) oo[cd].om += om[ol[em][aE]];
						for (oo[cd].op = (1 + oq) * on * oo[cd].om / oY, aE = 0; aE < cd; aE++)
							if (oo[cd].om > oo[aE].om) {
								oo.splice(aE, 0, oo[cd]), oo.pop();
								break
							} cd++
					} 8 < oo.length && (oo.length = 8);
				for (; 0 < oo.length && 0 === oo[oo.length - 1].om;) oo.pop();
				return oo
			}(oa, this.oY), cm.og("Team " + fR.ca[oa], 2, 1, 12),
			function(oK, oa) {
				var color;
				oK = oK ? (color = cK.iG.iH(10, 220, 10), "Congratulations! Team " + fR.ca[oa] + " won the game!") : (color = cK.iG.iH(200, 80, 80), "Our alliance was defeated! Team " + fR.ca[oa] + " won the game.");
				g2.or(0, oK, 40, 0, color, d2.iM, -1, !1)
			}(oK, oa), 0 !== (oK = this.oZ).length && (g2.or(0, "The allied clans of the winning team have earned these glorious points:", 40, 0, d2.d3, d2.iM, -1, !1), os(oK, 0), os(oK, 4)), cR.cL.k1(), gT.hw(2700)
	}, this.g9 = function() {
		2 === gb && -1 !== oX && (0 === oX ? oX = this.oZ && 0 !== this.oZ.length ? aL.aM + 8e3 : -1 : aL.aM < oX || (oX = -1, g2.or(255, "Clan rankings and results can also be accessed under:", 735, 0, d2.d3, d2.iM, -1, !1), g2.or(255,
			"territorial.io/clans", 736, 0, d2.d3, d2.iM, -1, !1), g2.or(255, "territorial.io/clan-results", 736, 0, d2.d3, d2.iM, -1, !1)))
	}
}

function ot() {
	var ou, lu;

	function ox() {
		var aE, cl = new oy;
		for (cl.lw(800), cl.lx(1, 0), cl.lx(3, 7), cl.lx(3, 1), cl.lx(2, m ? 2 : 12 <= q ? 1 : 0 < q ? 3 : 0), cl.lx(1, oz ? 1 : 0), cl.lx(1, p0 ? 1 : 0), cl.lx(1, 2 === p1 ? 1 : 0), aE = 0; aE < lu.length && !(cl.cd + 6 > 8 * cl.d6); aE++) cl.lx(6,
			lu[aE]);
		ou.send(cl.k3), ou.onopen = null
	}
	window.addEventListener("error", function error(lk) {
		var ow;
		0 === lk.lineno && 0 === lk.colno || (window.removeEventListener("error", error), lk = lk.lineno + " " + lk.colno + " " + lk.message, (ow = new ln).b(), lu = ow.lq(ow.lp(lk)), (ou = new WebSocket("wss://territorial.io/s52/")).onopen =
			ox, n ? n.showToast(lk) : alert(lk))
	})
}

function p2() {
	var p3 = -15e3,
		p4 = !1;

	function cq(lk) {
		pN() || (p4 = !0, pO(lk, 1), g6.pP(g6.pQ), pR(Math.floor(lX * lk.clientX), Math.floor(lX * lk.clientY)))
	}

	function pC(lk) {
		p3 = aL.aM, pO(lk, 1), g6.pP(g6.pQ), 0 < lk.touches.length && (pS = Math.floor(lX * lk.touches[0].clientX), pT = Math.floor(lX * lk.touches[0].clientY), pU.pC(lk) || pR(pS, pT))
	}

	function pR(h8, h9) {
		0 === gb ? aT.cq(h8, h9) : gW.pV(h8, h9) || nR.cq(h8, h9) || lU.cq(h8, h9) || gU.cq(h8, h9) || nQ.pW(h8, h9) || gM.cq(h8, h9) || cI.cq(h8, h9) || pX.pY(h8, h9) || gO.cq(h8, h9) || nQ.pZ(h8, h9)
	}

	function p8(lk) {
		pN() || (p4 = !0, pO(lk, 1), pa(Math.floor(lX * lk.clientX), Math.floor(lX * lk.clientY)))
	}

	function pD(lk) {
		p3 = aL.aM, pO(lk, 1), 0 < lk.touches.length && (pS = Math.floor(lX * lk.touches[0].clientX), pT = Math.floor(lX * lk.touches[0].clientY), pU.pD(lk) || pa(pS, pT))
	}

	function pa(h8, h9) {
		0 === gb ? aT.p8(h8, h9) : nR.p8(h8, h9) || (cI.p8(h8, h9), nQ.pb() ? nQ.p8(h8, h9) : cU.pc ? cU.p8(h8, h9) && (aL.co = !0) : (gI.p8(h8, h9), hq.hr && hq.p8(h8, h9) && (aL.co = !0)))
	}

	function pA(lk) {
		pN() || (pO(lk, 1), 0 === gb ? (aT.click(-1024, -1024), pd.pe()) : (gI.pf(-1024, -1024), cI.p8(-1024, -1024), cU.pg(), hq.hr && (hq.hr = !1)))
	}

	function p9(lk) {
		pN() || (pO(lk, 1), ph(Math.floor(lX * lk.clientX), Math.floor(lX * lk.clientY), 2 === lk.button))
	}

	function click(lk) {
		pN() || pO(lk, 1)
	}

	function pE(lk) {
		p3 = aL.aM, pO(lk, 1), lk && lk.touches && 0 < lk.touches.length && 0 !== gb ? hq.hr = !1 : pU.pi() || ph(pS, pT, !1)
	}

	function pF(lk) {
		p3 = aL.aM, pO(lk, 1), ph(pS, pT, !1)
	}

	function pG(lk) {
		pj.pG(lk)
	}

	function pH(lk) {
		pj.pH(lk)
	}

	function pI(lk) {
		pN() || pO(lk, 0)
	}

	function ph(h8, h9, pk) {
		0 === gb ? aT.click(h8, h9) : (gI.pf(h8, h9), nR.pf(), cU.pg(), hq.hr = !1, nQ.click(h8, h9, pk) && (aL.co = !0))
	}

	function pB(lk) {
		var h8, h9, deltaY;
		pN() || (pO(lk, 1), g6.pP(g6.pQ), h8 = Math.floor(lX * lk.clientX), h9 = Math.floor(lX * lk.clientY), deltaY = lk.deltaY, 1 === lk.deltaMode && (deltaY *= 16), 0 === gb ? aT.pB(h8, h9, deltaY) : gI.pB(h8, h9, deltaY) || (cU.pl(h8, h9) ? cU
			.pB(deltaY) && (aL.co = !0) : hq.pB(h8, h9, +deltaY)))
	}

	function pJ(lk) {
		pO(lk, 0)
	}

	function pO(lk, id) {
		0 === id && (pm.pb || lU.pb || pn.pb) || 1 === id && (pn.lT || lU.lT) || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aT.pp() && lk.preventDefault()
	}

	function pK(lk) {
		pN() || aL.aM < 400 || (8 !== aT.pp() && aT.pq(lk) ? aL.co = !0 : "Escape" === lk.key ? aT.aU() : "ArrowLeft" === lk.key || "a" === lk.key ? hu.pr(3) : "ArrowUp" === lk.key || "w" === lk.key ? hu.pr(0) : "ArrowRight" === lk.key || "d" === lk
			.key ? hu.pr(1) : "ArrowDown" === lk.key || "s" === lk.key ? hu.pr(2) : "h" === lk.key ? 1 <= gb && gW.ps(!hp) : " " === lk.key && gb && (pt.cG(), cI.cJ && cI.pu(), cH) && gW.pv(!1))
	}

	function pL(lk) {
		pN() || ("ArrowLeft" === lk.key || "a" === lk.key ? hu.pw(3) : "ArrowUp" === lk.key || "w" === lk.key ? hu.pw(0) : "ArrowRight" === lk.key || "d" === lk.key ? hu.pw(1) : "ArrowDown" === lk.key || "s" === lk.key ? hu.pw(2) : "1" === lk.key ?
			cU.px(.75) : "2" === lk.key ? cU.px(7 / 8) : "3" === lk.key ? cU.px(.9375) : "4" === lk.key ? cU.px(31 / 32) : "5" === lk.key ? cU.px(32 / 31) : "6" === lk.key ? cU.px(16 / 15) : "7" === lk.key ? cU.px(8 / 7) : "8" === lk.key ? cU.px(
				4 / 3) : "+" === lk.key ? 0 !== gb && hq.pB(Math.floor(hG / 2), Math.floor(cu / 2), -200) : "-" === lk.key ? 0 !== gb && hq.pB(Math.floor(hG / 2), Math.floor(cu / 2), 200) : "c" === lk.key && 0 !== gb && nR.py())
	}

	function pM() {
		"hidden" === document.visibilityState ? aL.pz() : aL.q0()
	}

	function pN() {
		return p3 + 15e3 > aL.aM
	}

	function resize() {
		q3.q4()
	}
	this.p5 = 0, this.p6 = "", this.b = function() {
		p7.addEventListener("mousedown", cq, {
			passive: !1
		}), p7.addEventListener("mousemove", p8, {
			passive: !1
		}), p7.addEventListener("mouseup", p9, {
			passive: !1
		}), p7.addEventListener("click", click, {
			passive: !1
		}), p7.addEventListener("mouseleave", pA, {
			passive: !1
		}), p7.addEventListener("wheel", pB, {
			passive: !1
		}), p7.addEventListener("touchstart", pC, {
			passive: !1
		}), p7.addEventListener("touchmove", pD, {
			passive: !1
		}), p7.addEventListener("touchend", pE, {
			passive: !1
		}), p7.addEventListener("touchcancel", pF, {
			passive: !1
		}), p7.addEventListener("dragover", pG), p7.addEventListener("drop", pH), p7.addEventListener("dblclick", pI), document.addEventListener("contextmenu", pJ), document.addEventListener("keyup", pK), document.addEventListener("keydown",
			pL), document.addEventListener("visibilitychange", pM), window.addEventListener("resize", resize)
	}, this.pY = function(h8, h9) {
		return !!gW.cq(h8, h9) || !!(gI.cq(h8, h9) || hq.cq(h8, h9) || cU.cq(h8, h9) || g2.cq(h8, h9))
	}, this.q1 = pN, this.q2 = function() {
		return !p4 || 0 < p3
	}
}

function q5() {
	this.iG = new q6, this.mI = new q7, this.cL = new q8
}

function q7() {
	this.mJ = function(ad) {
		ad.fill(0)
	}, this.q9 = function(ad) {
		for (var bU = ad.length, aE = 0; aE < bU; aE++) ad[aE] = []
	}, this.qA = function(dQ, cZ) {
		for (var dR = eK.aZ, aE = 0; aE < 3; aE++) dR[aE] = cZ * dQ[aE];
		return dR
	}, this.qB = function(dQ, dR, qC) {
		for (var dU = 0, aE = 0; aE < 3; aE++) dU += Math.abs(dQ[aE] - dR[aE]);
		return qC <= dU
	}, this.qD = function(dQ, qE) {
		for (var aE = 0; aE < 3; aE++) dQ[aE] = cA.qF(dQ[aE] + qE, 0, 255);
		return dQ
	}
}

function q6() {
	this.qG = d4(32, 32, ["a", "b", "m"], 200), this.m8 = function(cl, eu) {
		var fQ = document.createElement("canvas");
		return fQ.width = cl, fQ.height = eu, fQ
	}, this.getContext = function(dC, alpha) {
		return dC.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(nT, cl, eu) {
		return nT.getImageData(0, 0, cl, eu)
	}, this.iH = function(dF, qH, em) {
		return "rgb(" + dF + "," + qH + "," + em + ")"
	}, this.iJ = function(dF, qH, em, eb) {
		return "rgba(" + dF + "," + qH + "," + em + "," + eb.toFixed(3) + ")"
	}, this.lV = function(qI, h8, h9, cl, eu) {
		var hz = 1 / lX,
			qJ = .02 * hz * eu,
			qK = hz * qL;
		qI.padding = qJ.toFixed(2) + "px", qI.border = qK.toFixed(2) + "px solid " + d2.d3, qI.left = (hz * h8).toFixed(2) + "px", qI.top = (hz * h9).toFixed(2) + "px", qI.width = (hz * cl - 2 * qJ - 2 * qK).toFixed(2) + "px", qI.height = (hz *
			eu - 2 * qJ - 2 * qK).toFixed(2) + "px"
	}, this.lW = function(d6, type) {
		return d6 = d6.toFixed(2), 0 === type ? d6 + "px " + settings.fontName : 1 === type ? "bold " + d6 + "px " + settings.fontName : 2 === type ? "small-caps " + d6 + "px " + settings.fontName : "small-caps bold " + d6 + "px " + settings
			.fontName
	}, this.textAlign = function(dD, id) {
		dD.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(dD, id) {
		dD.textBaseline = 1 === id ? "middle" : "bottom"
	}, this.ko = function(aR) {
		return 1 + aR * a0
	}
}

function qM() {
	document.qN[0].qO(".closeIcon {position: absolute; width: 24px; height: 24px; top: calc(50% - 12px);}", 0), document.qN[0].qO(
		".closeIcon:before {content: ' '; position: absolute; left: 50%; top: 0; width: 2px; height: 100%; background-color: #222; transform: translateX(-50%) rotate(45deg);}", 0), document.qN[0].qO(
		".closeIcon:after {content: ' '; position: absolute; left: 50%; top: 0; width: 2px; height: 100%; background-color: #222; transform: translateX(-50%) rotate(-45deg);}", 0), this.qP = function() {
		var kj = document.createElement("div");
		return kj.qQ = "closeIcon", kj
	}
}

function q8() {
	this.cM = function(j) {
		return 0 === j ? 1 === gb && hm : 1 === j ? 1 === gb && !hm : 1 <= gb && !hm
	}, this.cN = function(player) {
		return 0 !== dw[player] && 2 !== dx[player]
	}, this.kC = function(qR, qS) {
		return qR !== qS
	}, this.jj = function(player, aR) {
		return aR = this.qT(player, aR), bO[player] += aR, aR
	}, this.qT = function(player, aR) {
		var qU = bO[player];
		return aR = Math.min(aR, bv[player] * qV - qU), aR = Math.min(aR, qW - qU), Math.max(aR, 0)
	}, this.kD = function(player, e0, qX, qY) {
		var qU = bO[player],
			e0 = cA.cB(qU * (e0 + 1), 1024),
			qX = cA.cB(qX * qU, 1024),
			e0 = Math.min(e0, qU - qX);
		return 10 === fq && (e0 = gD.qa(player, e0)), eK.aX[0] = e0, eK.aX[1] = qX, qY <= e0
	}, this.jg = function(player, jL, jK) {
		var player = bO[player],
			qZ = cA.cB(64 * player, 1024);
		return jL = Math.min(jL, player - qZ), qZ += player = this.qc(jL), jL = this.qT(jK, jL -= player), eK.aX[0] = jL, eK.aX[1] = qZ, 1 <= jL
	}, this.ji = function(jL, jK) {
		var qb = this.qc(jL);
		return jL = this.qT(jK, jL -= qb), eK.aX[0] = jL, eK.aX[1] = qb, 1 <= jL
	}, this.dz = function(player, qd) {
		return cA.cB(bO[player] * (qd + 1), 1024)
	}, this.qc = function(qe) {
		return cA.cB(Math.max(2142 - aL.fP(), 0) * qe, 2142)
	}, this.kR = function(player, qX) {
		bO[player] -= cA.cB(qX * bO[player], 1024)
	}, this.kF = function(player) {
		bO[player] -= eK.aX[0] + eK.aX[1]
	}, this.kE = function(player, eU) {
		return (eU = Math.min(eU, bZ)) < bZ && 0 === dw[eU] && (eU = bZ), (eK.ab[0] = eU) === bZ || eh(player, eU)
	}, this.kH = function(player, jK) {
		return 0 !== dw[jK] && !eh(player, jK)
	}
}

function qf() {
	this.eR = function(player, dW) {
		qg.nE(player, k8.dN(dW), k8.dP(dW)) && (aL.co = !0), fs && this.fA()
	}, this.fA = function() {
		var aE;
		for (hm = !1, aE = 0; aE < dv; aE++) 0 !== dw[aE] && 0 === bv[aE] && qg.nK(aE);
		0 !== dw[bN] ? (bR.bS[7] = bv[bN], bR.bS[8] = bO[bN], cU.l(), g4.qh(), cH || gT.hl(ey[bN] - 5, f1[bN] - 5, ex[bN] + 5, f0[bN] + 5), gV.b()) : gU.show(!1, !1, !1, !0), g2.qi(18), g3.qj(), g3.ga(!0), gK.gG.qk(), kB = null, iD.ql = !0, iD
			.qm(), fs && aJ(1)
	}
}
var fs, cH, qn, qW, qo, bN, hp, hm, qp, eO, qq, fq, oq, kB, oL, qr, fB, bL, gC, gF, gT, qg, w, nQ, cI, g2, rG, gM, cm, cU, hq, pd, gL, gI, g4, gU, rH, rI, aT, rJ, pn, rK, ft, rF, ch, bW, r, b5, bP, g3, r5, fw, r3, rL, hu, rM, ee, h1, nM, pU, rN, gV,
	jF, q3, rO, rP, gO, gX, g6, gB, hM, rQ, gE, gD, gN, pj, fm, rR, cR, gR, lU, cK, d2, gW, lv, rS, k4, m7, rT, pX, rU, cA, k8, eE, eK, gK, gQ, g7, az, pt, rV, aO, bZ = 512,
	mr = 512,
	qV = 150,
	gb = 0,
	n7 = 512,
	bK = 2;

function qs(qt, qu, nc, qv, qw, qx) {
	hp = !1, cH = qx, oq = qw, eO = (fq = qv) < 7 || 9 === fq, oR = dv = nc.length, fs = 1 === oR, qq = 9 === (fq = 8 === (fq = 10 === fq && fs ? 7 : fq) && 2 !== dv ? 7 : fq) ? 2 : fq + 2, qr = dv <= 2 ? 30 : dv <= 50 ? 40 : 50, qp = hm = !(fm.fn &&
			!fm.fo.qy) && (eO || dv < 100), kB = hm ? new qf : null, n7 = 512, mr = bZ, fs && (mr = ft.qz()), fl = mr - dv, oQ = 0, bN = qu, ee.r0(qt), fw.b(), r1(nc), fR.b(nc), gb = 1, qW = 15e8, qo = 1e9, bR.b(), r2(), r3.r4(), iD.b(), bP.b(),
	f6(), bW.b(nc), nM.b(), k8.b(), eE.b(), g7.b(), fB.b(), r5.lw(), r5.r6(), qg.b(), r7(), gR.b(qt, nc, qv, qw), gP.b(), gQ.b(), gK.b(), nR.b(), r8.putImageData(r9, 0, 0), gI.b(), hq.b(), cU.b(), gW.b(), gO.b(), gL.b(), g4.b(), cI.b(), cm.b(), g2
		.b(), gM.b(), nQ.b(), gU.b(), gF.b(), bL.b(), gC.b(), ay(), b5.b(), g3.b(), gD.b(), gE.b(), gN.b(), gB.b(), aO.k(!1), 8 === fq ? (oL = new nb).b(nc) : oL = null, aL.rA(), rB(), gV.b(), aL.co = !0, cH || fs && hm || aJ(1)
}

function rB() {
	gT.hk(), 0 === dw[bN] && gU.show(!1, !0), g3.ga(!0)
}

function rC(rD) {
	lU.lP(), g6.close(g6.pQ, 3246), gb = 0, aL.rE(), aJ(0), aO.k(!0), rF.b(!rD)
}

function rW() {
	cA = new rX, rU = new rY, fB = new fa, bL = new gd, gC = new gr, gF = new gu, gT = new hR, qg = new mg, w = new ns, nQ = new rZ, cI = new ra, g2 = new rb, rG = new rc, gM = new rd, cm = new re, cU = new rf, hq = new rg, pd = new rh, gL = new ri,
		gI = new rj, g4 = new rk, gU = new rl, rH = new rm, rI = new rn, aT = new ro, (rJ = new rp).lw(), pn = new rq, rK = new rr, ft = new rs, rF = new rt, ch = new ru, bW = new rv, r = new rw, b5 = new rx, bP = new ry, g3 = new rz, r5 = new s0,
		fw = new s1, r3 = new s2, rL = new s3, hu = new s4, rM = new s5, ee = new s6, h1 = new s7, nM = new s8, pU = new s9, rN = new sA, gV = new sB, jF = new sC, q3 = new sD, rO = new sE, rP = new sF, gO = new sG, gX = new sH, g6 = new sI, gB =
		new sJ, hM = new sK, rQ = new sL, gE = new sM, gD = new sN, gN = new sO, pj = new sP, fm = new sQ, rR = new sR, cR = new j6, gR = new sS, lU = new sT, cK = new q5, d2 = new iF, gW = new sU, lv = new oy, (rS = new nm).b(), k4 = new sV, (m7 =
			new ln).b(), rT = new sW, pX = new p2, k8 = new dG, eE = new sX, eK = new aV, gK = new sY, gQ = new sZ, g7 = new o9, (az = new sa).b(), pt = new cF, rV = new sb, aO = new a
}

function rZ() {
	var sc, h8, h9, sd, se, sf, aM, player, sg, l4, zoom, js, sh;

	function sx(player) {
		for (var aE = js.length - 1; 0 <= aE; aE--)
			if (js[aE] === player) return 1
	}

	function sv(ss) {
		var aE, bU;
		if (-1 !== ss)
			for (bU = sc.length, aE = 0; aE < bU; aE++)
				if (sc[aE].pb && sc[aE].h8 + 1 === ss % 4 && sc[aE].h9 + 1 === ss >> 2) return aE;
		return -1
	}

	function su(cr, cs) {
		var qH = l4 / 2;
		return cr < h8 - sd - 3 * qH || h8 + 3 * sd + 5 * qH < cr || cs < h9 - sd - 3 * qH || h9 + 2 * sd + 3 * qH < cs ? -1 : 4 * (cs < h9 - qH ? 0 : cs < h9 + sd + qH ? 1 : 2) + (cr < h8 - qH ? 0 : cr < h8 + sd + qH ? 1 : cr < h8 + 2 * sd + 3 *
			qH ? 2 : 3)
	}
	this.si = function() {
		var aE, em, sl = [d2.ii, d2.is, d2.iN, d2.j4, d2.iy];
		for (sc = new Array(8), aE = 0; aE < 8; aE++) sc[aE] = {
			id: aE,
			pb: !1,
			sm: 0,
			dC: [],
			h8: 0,
			h9: 0
		};
		for (sc[0].colors = [0, 1, 2, 3], sc[0].h8 = 0, sc[0].h9 = 0, sc[1].colors = [0, 1, 4], sc[1].h8 = 1, sc[1].h9 = 0, sc[2].colors = [0, 2], sc[2].h8 = -1, sc[2].h9 = 0, sc[3].colors = [0], sc[3].h8 = 0, sc[3].h9 = 0, sc[4].colors = [0, 2],
			sc[4].h8 = 1, sc[4].h9 = 1, sc[5].colors = [3], sc[5].h8 = 0, sc[5].h9 = -1, sc[6].id = 20, sc[6].colors = [0], sc[6].h8 = 1, sc[6].h9 = -1, sc[7].id = 21, sc[7].colors = [0], sc[7].h8 = 0, sc[7].h9 = 1, aE = 0; aE < 8; aE++)
			for (em = 0; em < sc[aE].colors.length; em++) sc[aE].dC.push(function(id, sn) {
				var d5 = ch.get(3).height,
					so = cK.iG.m8(d5, d5),
					dD = cK.iG.getContext(so);
				20 === id ? dD.drawImage(ch.get(18), 0, 0) : 21 === id ? dD.drawImage(ch.sp("emojis"), -4 * d5, 0) : (function(cl, nT, sr) {
					nT.fillStyle = sr, nT.beginPath(), nT.arc(Math.floor(cl / 2), Math.floor(cl / 2), Math.floor(.47 * cl), 0, 2 * Math.PI), nT.fill()
				}(d5, dD, sn), dD.drawImage(ch.get(3), -id * d5, 0));
				return so
			}(sc[aE].id, sl[sc[aE].colors[em]]))
	}, this.sk = function() {
		return sc
	}, this.b = function() {
		js = [], h8 = h9 = aM = 0, se = sf = -1e3, this.resize()
	}, this.resize = function() {
		sd = Math.floor((a0 ? .075 : .0468) * cb), zoom = sd / ch.get(3).height, l4 = Math.floor(sd / 3)
	}, this.pW = function(cr, cs) {
		return !!this.pb() && (aL.co = !0, !!aF.cq(cr, cs, player) || (cr = function(cr, cs) {
			var ss, aE;
			if (sf = se = -1e3, ss = su(cr, cs), -1 === (ss = sv(ss))) return 0;
			if (1 === sc[ss].colors[sc[ss].sm]) return 0;
			if (5 === ss) {
				if (! function() {
						var a3 = (new Date).getTime();
						sh + 4e3 < a3 && (js = []);
						sh = a3
					}(), sx(player)) return 1;
				js.push(player), 16 < js.length && js.shift()
			} else if (6 === ss) {
				for (aE = js.length - 1; 0 <= aE; aE--) 0 === dw[js[aE]] && js.splice(aE, 1);
				0 < js.length && (gN.sy(1, js, !0) && cR.cL.jr(js, player), js = [])
			} else if (2 === ss) cR.cS.jJ(cU.cV(), player);
			else if (3 === ss) hm && cR.cS.jE(sg);
			else if (0 === ss)
				if (0 === sc[0].sm) {
					if (qp && g4.sz() < 300) return 1;
					cR.cS.cT(cU.cV(), player)
				} else gB.t0(player, cU.cV());
			else if (1 === ss) cR.cS.jN(cU.cV(), sg);
			else {
				if (7 === ss) return aF.show(cr, cs), 2;
				if (4 !== ss) return 0;
				gN.sy(0, [player], !0) && cR.cL.jo(player)
			}
			return 1
		}(cr, cs), this.lP(), 2 === cr && (aF.pb = !0), 0 < cr))
	}, this.pZ = function(cr, cs) {
		this.pb() || (se = cr, sf = cs, aM = (new Date).getTime())
	}, this.click = function(cr, cs, pk) {
		var dg = k8.e4(cr),
			dh = k8.e5(cs),
			dW = k8.e7(dg, dh),
			df = k8.e9(dW);
		return !(!k8.e6(dg, dh) || (dg = (a0 ? .025 : .0144) * cb, Math.abs(cr - se) > dg) || Math.abs(cs - sf) > dg || performance.now() > aM + 425) && (pk ? (function(cr, cs, df) {
			bW.bX(df) || -1 === (cr = eE.jO.tI(cr, cs)) ? g2.tH(df) : g2.tJ(cr)
		}(cr, cs, df), !1) : cI.cJ || this.pb() || !k8.dy() || cH ? (this.lP(), !1) : hm ? !!bW.bX(df) && (sg = dW, sc[3].pb = !0, this.t3(cr, cs)) : (eE.jO.jR(dW) || eE.jO.t4(cr, cs) || (2 === gb ? bW.bf(df) && 0 < aF.t5 && (player = bW
			.bg(df), bW.t6(player)) && (sc[0].pb = !0, sc[0].sm = 1, sc[7].pb = !0) : bW.t7(df) || (sg = dW, eE.jO.jP(bN, dW) && (sc[0].pb = !0, sc[0].sm = 1, sc[1].pb = !0, sc[1].sm = eK.aa[2] ? 0 : 2), bW.t8(df)) || (bW.bh(df) ?
			(player = bZ, t9(bN) ? (sc[0].pb = !0, sc[0].sm = 0) : tA(bN, player) && (sc[0].pb = !0, sc[0].sm = 3)) : (player = bW.bg(df)) === bN ? 0 !== aF.t5 && (sc[0].pb = !0, sc[0].sm = 1, sc[7].pb = !0) : (sc[0].sm = 1, sc[5]
				.pb = function(player) {
					return bW.t6(player) && !sx(player) && gN.sy(1, [player], !1)
				}(player), sc[7].pb = 1 <= aF.t5 && bW.t6(player), eh(player, bN) ? (sc[4].pb = bW.t6(player) && !g3.tC(player) && gN.sy(0, [player], !1), sc[6].pb = function(player) {
					if (0 === js.length) return !1;
					if ((new Date).getTime() > sh + 4e3) return !(js = []);
					return !sx(player) && ! function(player) {
						var aE;
						if (eO)
							for (aE = js.length - 1; 0 <= aE; aE--)
								if (!eh(player, js[aE])) return 1;
						return
					}(player)
				}(player), tE(bN, player) ? (sc[0].sm = 0, sc[0].pb = !0) : tA(bN, player) && (sc[0].sm = 3, sc[0].pb = !0), sc[0].pb = this.tF()) : (sc[2].pb = !0, sc[0].pb = !0)))), this.t3(cr, cs)))
	}, this.t3 = function(cr, cs) {
		return h8 = cr - Math.floor(sd / 2), h9 = cs - Math.floor(sd / 2), !!this.pb()
	}, this.p8 = function(cr, cs) {
		return !!this.pb() && (aF.pb ? !aF.tL(cr, cs) && (aF.tM(), aF.pb = !1, aL.co = !0) : function(tO, cr, cs) {
			cr = su(cr, cs);
			if (0 <= sv(cr)) return !1;
			if ((1 === cr || 6 === cr) && 0 <= sv(2)) return !1;
			if ((6 === cr || 9 === cr) && 0 <= sv(10)) return !1;
			return tO.lP(), aL.co = !0
		}(this, cr, cs))
	}, this.lP = function() {
		for (var aE = sc.length - 1; 0 <= aE; aE--) sc[aE].pb = !1, sc[aE].sm = 0;
		aF.pb = !1
	}, this.pb = function() {
		return this.tF() || aF.pb
	}, this.tF = function() {
		for (var bU = sc.length, aE = 0; aE < bU; aE++)
			if (sc[aE].pb) return !0;
		return !1
	}, this.cy = function() {
		if (this.pb())
			if (aF.pb) aF.cy();
			else {
				var aE, dD = cz,
					em = sc,
					bU = em.length,
					tQ = (sd + l4) / zoom;
				for (dD.imageSmoothingEnabled = !0, dD.setTransform(zoom, 0, 0, zoom, h8, h9), aE = 0; aE < bU; aE++) em[aE].pb && cz.drawImage(em[aE].dC[em[aE].sm], em[aE].h8 * tQ, em[aE].h9 * tQ);
				dD.imageSmoothingEnabled = !1, dD.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function ra() {
	var eu, dC, ck, tS, tT, tR = ["Quit Game", "Surrender", "Statistics", "Replay"];

	function tU() {
		var tV, nT = dC.getContext("2d", {
			alpha: !0
		});
		nT.clearRect(0, 0, eu, eu), nT.fillStyle = d2.iK, nT.fillRect(0, 0, eu, eu), 0 === tS && (nT.fillStyle = d2.iP, nT.fillRect(0, 0, eu, eu)), nT.fillStyle = d2.d3, nT.fillRect(0, 0, eu, 1), nT.fillRect(0, 0, 1, eu), nT.fillRect(0, eu - 1, eu,
			1), nT.fillRect(eu - 1, 0, 1, eu), tV = .9 * eu / ch.get(0).width, nT.imageSmoothingEnabled = !0, nT.setTransform(tV, 0, 0, tV, Math.floor((eu - tV * ch.get(0).width) / 2), Math.floor((eu - tV * ch.get(0).height) / 2)), nT.drawImage(
			ch.get(0), 0, 0), nT.setTransform(1, 0, 0, 1, 0, 0)
	}

	function tY(cr, cs) {
		if (!cI.cJ) return cr <= eu + kp && cs >= cU.h9 ? 0 : -1;
		if (cr <= 4 * eu + kp) {
			if (cs >= cU.h9) return 0;
			if (cs >= cU.h9 - eu - tT * kp) return tb(2) ? 2 : -1;
			if (cs >= cU.h9 - 2 * (eu + tT * kp)) return tb(3) ? 3 : -1;
			if (cs >= cU.h9 - 3 * (eu + tT * kp)) return tb(4) ? 4 : -1
		} else if (cr <= 7 * eu + kp && cs >= cU.h9 - eu - tT * kp) return 1;
		return -1
	}

	function tb(aE) {
		return 2 === aE ? tZ(2) || tZ(3) || tZ(4) : 3 === aE && tZ(3) || tZ(4)
	}

	function tZ(aE) {
		return 2 === aE ? !cH && cI.tg(bN) : 3 === aE ? 2 <= bR.th : lU.ti()
	}

	function tk(aE, sn) {
		cz.setTransform(1, 0, 0, 1, kp, cU.h9 - aE * tT * kp - aE * eu), cz.fillStyle = d2.iK, cz.fillRect(0, 0, 4 * eu, eu), tS === aE + 1 && sn === d2.d3 && (cz.fillStyle = d2.iP, cz.fillRect(0, 0, 4 * eu, eu)), cz.fillStyle = sn, cz.fillRect(0, 0,
			4 * eu, 1), cz.fillRect(0, 0, 1, eu), cz.fillRect(4 * eu, 0, 1, eu), cz.fillRect(0, eu - 1, 4 * eu, 1), cz.fillText(tR[aE], 2 * eu, .54 * eu)
	}
	this.cJ = !1, this.b = function() {
		tS = -1, this.cJ = !1, tT = a0 ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		eu = cU.eu, (dC = document.createElement("canvas")).width = eu, dC.height = eu, ck = ce + Math.floor((a0 ? .5 : .45) * eu) + cf, tU()
	}, this.pu = function() {
		this.cJ = !this.cJ, this.cJ ? (gW.ps(!1), cH && gW.tW && gW.pv(!0), this.tX()) : (tS = -1, tU(), fs && 1 === gb && !hm && aJ(1)), aL.co = !0
	}, this.tX = function() {
		(fs || cH) && 1 === gb && (gI.ga(!0), hm || setTimeout(function() {
			iD.oW()
		}, 0), aJ(0))
	}, this.cq = function(cr, cs) {
		var sm = tY(cr, cs);
		if (this.cJ) {
			if (hp) return 0 <= sm && gW.ps(!1), !cH;
			if (0 === sm) rC();
			else if (1 === sm) this.pu();
			else if (2 === sm) tZ(sm) && (cR.cS.je(), this.pu());
			else if (3 === sm) tZ(sm) && (nR.pu(), aL.co = !0, lU.pb) && lU.lP();
			else if (4 === sm) tZ(sm) && (lU.pb ? lU.lP() : lU.show(), nR.pb) && nR.pu();
			else {
				if (!(fs || 1 !== gb || cH || nR.pb || lU.pb) && (cI.pu(), 1)) return !1;
				pX.pY(cr, cs) || nQ.pZ(cr, cs)
			}
			return !0
		}
		return 0 === sm && (this.pu(), !0)
	}, this.p8 = function(cr, cs) {
		cr = tY(cr, cs);
		cr !== tS && (tS = cr, this.cJ || tU(), aL.co = !0)
	}, this.cy = function() {
		var cl;
		this.cJ ? (cl = Math.floor(5.5 * eu), cz.setTransform(1, 0, 0, 1, kp, cU.h9), cz.fillStyle = d2.iK, cz.fillRect(0, 0, cl, eu), 0 === tS ? (cz.fillStyle = d2.iP, cz.fillRect(0, 0, 4 * eu, eu)) : 1 === tS && (cz.fillStyle = d2.iP, cz
				.fillRect(4 * eu, 0, Math.floor(1.5 * eu), eu)), cz.fillStyle = d2.d3, cz.fillRect(0, 0, cl, 1), cz.fillRect(0, 0, 1, eu), cz.fillRect(4 * eu, 0, 1, eu), cz.fillRect(0, eu - 1, cl, 1), cz.fillRect(cl - 1, 0, 1, eu), cz.font =
			ck, cz.textBaseline = d0, cz.textAlign = d1, cz.fillText(tR[0], 2 * eu, .54 * eu), cl = .4 * eu, cI.tj(kp + 4 * eu + (1.5 * eu - cl) / 2, cU.h9 + .3 * eu, cl), tb(2) && tk(1, tZ(2) ? d2.d3 : d2.iV), tb(3) && tk(2, tZ(3) ? d2.d3 :
				d2.iV), tb(4) && tk(3, d2.d3), cz.setTransform(1, 0, 0, 1, 0, 0)) : cz.drawImage(dC, kp, cU.h9)
	}, this.tg = function(player) {
		return 0 !== dw[player] && 2 !== gb && bW.t6(player)
	}, this.tj = function(h8, h9, bU) {
		cz.setTransform(1, 0, 0, 1, h8, h9), cz.lineWidth = qL, cz.strokeStyle = d2.d3, cz.beginPath(), cz.moveTo(0, 0), cz.lineTo(bU, bU), cz.moveTo(0, bU), cz.lineTo(bU, 0), cz.stroke()
	}
}

function rb() {
	var tl, eu, qK, tm, tn, to, tp, tq, tr;

	function cx() {
		return cU.uB(g2.u7()) ? gO.pb ? cU.h9 - cU.eu - 2 * qK : cU.h9 - qK : gW.uB(g2.uA()) ? gO.pb ? gW.cx() - cU.eu - 2 * qK : gW.cx() - qK : gO.pb ? a2 - cU.eu - (hM.uC() + 1) * qK : a2 - hM.uC() * kp
	}

	function tz(a3, v, id, bc, u2, u3, mT, u4, u5) {
		var aE, nT, u8, so, uF, uG = void 0 !== u5,
			cl = Math.floor(cm.measureText(v, g2.ck) + 1.5 * tm + (uG ? eu : 1.5 * tm));
		if (aL.co = !0, a1 < cl + qK && !uG && 50 !== id && 20 < v.length) u8 = Math.floor(.5 * v.length), tz(a3, v.substring(0, u8), id, bc, u2, u3, mT, u4, u5), tz(a3, v.substring(u8), id, bc, u2, u3, mT, u4, u5);
		else if (u8 = cl + (50 === id ? tn : 0), (so = document.createElement("canvas")).width = cl, so.height = eu, (nT = so.getContext("2d", {
				alpha: !0
			})).font = g2.ck, nT.textBaseline = d0, nT.textAlign = uH, nT.clearRect(0, 0, cl, eu), nT.fillStyle = u3, nT.fillRect(0, 0, cl, eu), nT.fillStyle = u2, nT.fillText(v, Math.floor(1.5 * tm), Math.floor(eu / 2)), uG && (uG = eu / aF.cl, nT
				.imageSmoothingEnabled = !0, nT.setTransform(uG, 0, 0, uG, cl - eu, 0), nT.drawImage(aF.so[u5], 0, 0)), 0 === (uF = {
				aM: a3,
				v: v,
				id: id,
				player: bc,
				dC: so,
				u2: u2,
				u3: u3,
				cl: cl,
				u8: u8,
				mT: mT,
				u4: u4,
				u5: u5
			}).aM || 0 < tl.length && 0 < tl[0].aM) tl.unshift(uF);
		else {
			for (aE = 1; aE < tl.length; aE++)
				if (0 < tl[aE].aM) return void tl.splice(aE, 0, uF);
			tl.push(uF)
		}
	}

	function u0(dF, qH, em) {
		return "rgb(" + dF + "," + qH + "," + em + ")"
	}

	function uM(id, ud) {
		for (var bU = tl.length, aE = 0; aE < bU; aE++) tl[aE].id === id && ud-- <= 0 && (tl.splice(aE, 1), aE--, bU--)
	}

	function uI(id, player) {
		for (var ue = !1, aE = tl.length - 1; 0 <= aE; aE--) tl[aE].id !== id || player !== bZ && tl[aE].player !== player || (tl.splice(aE, 1), ue = !0);
		return ue
	}

	function ui(aR) {
		return 1 === aR ? "" : "s"
	}

	function ul(v, ae, ag) {
		ae && (v += gM.hP(ae)), ag && (v += " (" + g4.um(100 * ae / ag, 1) + ")"), tz(340, v, 6, 0, u0(215, 245, 255), d2.iM, -1, !1)
	}

	function ut(player, uu) {
		return (fs || dv <= player || uu || hM.hN.uv ? hQ : uw)[player]
	}
	this.b = function() {
		tp = a0 ? 7 : 12, to = {
			nc: [tq = 0, 0, 0],
			ts: [0, 0, 0],
			hi: [220, 180, 180],
			tt: [0, 0, 0],
			fQ: [0, 0, 0],
			tu: [" were erased.", " left the game.", " surrendered."],
			tv: [" was erased by ", " left the game.", " surrendered."]
		}, tl = [], this.resize(), hm && this.oG(0, 18), ul("Map: " + az.fo.md[az.me].name), ul("Dimension: " + (az.b0 - 2) + "x" + (az.b1 - 2)), ul("Overall Pixels: ", r3.un), r3.un !== r3.uo && ul("Land: ", r3.uo, r3.un), 0 < r3.up && ul(
			"Water: ", r3.up, r3.un), 0 < r3.uq && ul("Mountains: ", r3.uq, r3.un), 10 === fq && tz(120, "Full sending against human players is disabled.", 6, 0, u0(235, 255, 120), d2.iM, -1, !1), this.tx()
	}, this.tx = function() {
		var aE, bU;
		if (fm.fn)
			for (bU = fm.fo.ty.length, aE = 0; aE < bU; aE++) tz(400, fm.fo.ty[aE], 6, 0, u0(255, 255, 255), d2.iM, -1, !1)
	}, this.resize = function() {
		var u1, aE;
		if (eu = (eu = Math.floor((a0 ? .031 : .0249) * cb)) < 10 ? 10 : eu, this.cj = Math.floor(2 * eu / 3), this.ck = ce + this.cj + cf, qK = kp, tm = Math.floor(eu / 5), 0 < tl.length)
			for (u1 = tl, tl = [], aE = u1.length - 1; 0 <= aE; aE--) tz(u1[aE].aM, u1[aE].v, u1[aE].id, u1[aE].player, u1[aE].u2, u1[aE].u3, u1[aE].mT, u1[aE].u4, u1[aE].u5);
		this.u6()
	}, this.u6 = function() {
		tr = document.createElement("canvas");
		var v = "Accept",
			nT = (tn = cm.measureText(v, this.ck) + 5 * tm, tr.height = eu, tr.width = tn, tr.getContext("2d", {
				alpha: !0
			}));
		nT.font = this.ck, nT.textBaseline = d0, nT.textAlign = d1, nT.clearRect(0, 0, tn, eu), nT.fillStyle = d2.ie, nT.fillRect(0, 0, tn, eu), nT.fillStyle = d2.d3, nT.fillText(v, Math.floor(tn / 2), Math.floor(eu / 2))
	}, this.u7 = function() {
		var bU;
		return gO.pb ? gO.cl : 0 === (bU = tl.length) ? 0 : 1 === bU ? tl[0].u8 : u9(tl[0].u8, tl[1].u8)
	}, this.uA = function() {
		var bU = tl.length;
		return gO.pb ? bU ? u9(gO.cl, tl[0].u8) : gO.cl : 0 === bU ? 0 : 1 === bU ? tl[0].u8 : 2 === bU ? u9(tl[0].u8, tl[1].u8) : u9(u9(tl[0].u8, tl[1].u8), tl[2].u8)
	}, this.cq = function(h8, h9) {
		for (var uD, uE = cx(), aE = tl.length - 1; 0 <= aE; aE--)
			if ((uD = uE - (aE + 1) * eu) <= h9 && h9 < uD + eu) return 50 === tl[aE].id ? h8 >= hG - tn - qK - tl[aE].cl && (hG - tn - qK <= h8 ? cR.cL.jo(tl[aE].player) : gT.hn(tl[aE].player, 800, !1, 0), !0) : h8 >= hG - tl[aE].cl - qK && (
				736 === tl[aE].id ? window.open("https://" + tl[aE].v, "_blank") : tl[aE].u4 && (gT.hn(tl[aE].player, 800, !1, 0), 0 <= tl[aE].mT) && (uD = tl[aE].mT, tl[aE].mT = tl[aE].player, tl[aE].player = uD), !0);
		return !1
	}, this.or = function(a3, v, id, bc, u2, u3, mT, u4, u5) {
		tz(a3, v, id, bc, u2, u3, mT, u4, u5)
	}, this.qi = function(id) {
		for (var aE = tl.length - 1; 0 <= aE; aE--) tl[aE].id === id && (tl[aE].aM = 1)
	}, this.oG = function(player, id) {
		0 === id ? (bR.bS[player < dv ? 4 : 3]++, cm.eR(player, 0), tz(a0 ? 100 : 160, "You erased " + hQ[player] + ".", 0, player, "rgb(10,220,10)", d2.iM, -1, !1)) : 1 === id ? (uI(50, bZ), cm.eR(player, 1), tz(360, "You were erased by " + hQ[
				player] + ".", 0, player, "rgb(255,40,40)", d2.iM, -1, !0), gT.hn(player, 2700, !1, 0)) : 2 === id ? (cm.eR(player, 2), tz(0, "Congratulations! You won the game.", 0, player, "rgb(10,255,255)", d2.iM, -1, !0), gT.hn(player, 2700,
				!1, 0)) : 3 === id ? (cm.eR(player, 2), tz(0, hQ[player] + " won the game.", 0, player, d2.d3, d2.iM, -1, !0), gT.hn(player, 2700, !1, 0)) : 4 === id ? (oR--, oQ--, this.uJ(1, player, player)) : 5 === id ? 2 !== dx[player] && bW
			.t6(bN) && (function(id, gp) {
					var aE, uW = 0,
						bU = tl.length;
					for (aE = 0; aE < bU; aE++)
						if (tl[aE].id === id && gp <= ++uW) return tl.splice(aE, 1)
				}(1, 5), g3.uL(player) ? tz(180, hQ[player] + " broke the non-aggression pact.", 1, player, u0(255, 200, 180), d2.iM, -1, !0) : (uM(573, 0), tz(180, hQ[player] + " is attacking you!", 573, player, "rgb(255,70,10)", d2.iM, -1, !
				0))) : 18 === id ? tz(255, "Choose your start position!", 18, 0, d2.d3, d2.iM, -1, !1) : 21 === id ? tz(220, "You surrendered!", id, 0, "rgb(255,40,40)", d2.iM, -1, !1) : 22 === id ? this.uJ(2, player, player) : 59 === id && tz(0,
				"The game ended in a stalemate!", id, 0, d2.j3, d2.iM, 0, !1)
	}, this.uN = function(uO) {
		tz(200, "Error [" + uO + "]", 94, 0, d2.d3, d2.iq, -1, !1)
	}, this.oO = function(oJ) {
		if (bN === oJ) wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter);
		cm.eR(oJ, 2), tz(0, dv < 100 ? hQ[oJ] + " won the game." : hQ[oJ] + " was immortalized!", 3, oJ, d2.d3, d2.iM, -1, !0), tz(0, "Your Current Win Count is Now " + wins_counter, 3, oJ, d2.d3, d2.iM, -1, !0), gT.hn(oJ, 2700, !1, 0)
	}, this.tH = function(df) {
		var v, uP = "(" + k8.dN(df >> 2) + ", " + k8.dP(df >> 2) + ")",
			u4 = !1,
			player = 0;
		bW.bX(df) ? bW.bh(df) ? uP = "Unclaimed Land " + uP : (player = bW.bg(df), v = "Player: " + hQ[player], uP = (v += "   Balance: " + gM.hP(bO[player])) + ("   Territory: " + gM.hP(bv[player])) + ("   Coords: " + uP), u4 = !0) : uP = bW.t7(
			df) ? "Mountains " + uP : "Water " + uP, aL.co = !0, uM(55, 0), tz(220, uP, 55, player, d2.d3, d2.iM, -1, u4)
	}, this.tJ = function(uQ) {
		var m2 = eE.gG,
			player = m2.uR[uQ],
			m2 = "Ship Owner: " + hQ[player] + "   Strength: " + gM.hP(m2.uS[uQ]);
		aL.co = !0, uM(55, 0), tz(220, m2, 55, player, d2.d3, d2.iM, -1, !0)
	}, this.jX = function(uT, uU, jY) {
		uT === bN ? tz(175, " Message to " + hQ[uU] + ": ", 1001, uU, u0(200, 255, 210), d2.iM, -1, !0, jY) : this.uV(uT, jY)
	}, this.uV = function(uT, jY) {
		uM(1e3, 0), tz(175, hQ[uT] + ": ", 1e3, uT, d2.d3, "rgba(5,60,25,0.9)", -1, !0, jY)
	}, this.oN = function(oK) {
		var uO;
		oK ? (uO = "Humanity triumphs! The undead have been beaten back.", cm.og("The Resistance", 2, 1, 12), tz(0, uO, 40, 0, "rgb(10,220,10)", d2.iM, -1, !1)) : (uO = "Mankind's era ends, overrun by the relentless tide of the undead.", cm.og(
			"The Virus", 2, 0, 16), tz(0, uO, 41, 0, "rgb(200,80,80)", d2.iM, -1, !1)), gT.hw(2700)
	}, this.nd = function(nc) {
		tz(300, nc[0].name + " [" + oL.nj(nc[0].ng) + "] vs " + nc[1].name + " [" + oL.nj(nc[1].ng) + "]", 65, 0, d2.hK, "rgba(100,255,255,0.75)", -1, !1)
	}, this.uX = function(uO) {
		tz(200, uO, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.uY = function() {
		tz(0, "Agreeing to peace concludes the game in a stalemate!", 247, 0, d2.j2, d2.iM, -1, !1)
	}, this.nl = function(nc, ni, nk, uZ) {
		1 === g6.ua() && (tz(0, nc[0].name + ": " + oL.nj(nc[0].ng) + " -> " + ni, 66, 0, d2.d3, uZ[0], -1, !1), tz(0, nc[1].name + ": " + oL.nj(nc[1].ng) + " -> " + nk, 66, 1, d2.d3, uZ[1], -1, !1))
	}, this.jp = function(player, id) {
		0 === id ? uI(50, player) ? (tz(128, "You signed a non-aggression pact with " + hQ[player] + ".", 52, player, u0(180, 255, 180), d2.iM, -1, !0), g3.kT(player, 2, 255)) : tz(384, "You asked " + hQ[player] +
			" to sign a non-aggression pact.", 51, player, u0(210, 210, 255), d2.iM, -1, !0) : uI(51, player) ? (tz(128, hQ[player] + " accepted the non-aggression pact.", 52, player, d2.d3, "rgba(60,120,10,0.9)", -1, !0), g3.kT(player, 2,
			255)) : (tz(384, hQ[player] + " requested a non-aggression pact.", 50, player, d2.d3, "rgba(90,90,90,0.9)", -1, !0), g3.kT(player, 2, 96))
	}, this.jt = function(nc, target) {
		var v = "You ",
			color = function(nc) {
				var aE;
				for (aE = nc.length - 1; 0 <= aE; aE--)
					if (2 * bv[nc[aE]] > bv[bN]) return;
				return 1
			}(nc) ? (v += "ordered ", u0(255, 235, 210)) : (v += "asked ", u0(210, 255, 210));
		1 < nc.length ? tz(230, v + nc.length + " players to attack " + hQ[target] + ".", 66, target, color, d2.iM, -1, !0) : tz(230, v + hQ[nc[0]] + " to attack " + hQ[target] + ".", 66, nc[0], color, d2.iM, target, !0)
	}, this.uc = function(player, target) {
		tz(230, hQ[player] + " suggested you attack " + hQ[target] + ".", 66, player, d2.d3, "rgba(75,65,5,0.9)", target, !0)
	}, this.oF = function(id, player) {
		uI(id, player)
	}, this.jH = function() {
		var cd;
		100 <= bO[bN] || (-1 === (cd = function(id) {
			for (var aE = tl.length - 1; 0 <= aE; aE--)
				if (tl[aE].id === id) return aE;
			return -1
		}(143)) ? tz(80, "Your balance is too low!", 143, 0, d2.d3, d2.iM, -1, !1) : tl[cd].aM = 80)
	}, this.jk = function(ug, uh, player) {
		2 !== dx[bN] && (tz(200, "You exported " + gM.hP(ug) + " resource" + ui(ug) + " to " + hQ[player] + ".", 30, player, "rgb(190,255,190)", d2.iM, -1, !0), uh) && tz(30, "A tax of " + gM.hP(uh) + " unit" + ui(uh) + " was deducted.", 30, 0,
			d2.d3, d2.iM, -1, !1)
	}, this.uj = function(ug, player) {
		var a3, uk;
		2 !== dx[bN] && (uk = 2 === dx[player] || dv <= player, a3 = 200 - 20 * tl.length, uM(31, 0), tz(a3 < 80 ? 80 : a3, (uk ? "A bot" : hQ[player]) + " supported you with " + gM.hP(ug) + " resource" + ui(ug) + ".", 31, player, d2.hK, uk ?
			"rgba(205,205,205,0.9)" : "rgba(205,255,205,0.9)", -1, !0))
	}, this.oS = function(ur) {
		for (var fQ = aL.fP(), aE = 2; 0 <= aE; aE--) 0 < to.tt[aE] && (ur || to.fQ[aE] < fQ - 220) && this.us(aE)
	}, this.us = function(id) {
		var v, bU = to.tt[id],
			player = to.nc[id];
		to.tt[id] = 0, 1 === bU ? (v = ut(player, 0 === id) + to.tv[id], 0 === id && (v += ut(to.ts[id], !0) + "."), uM(7, 0), tz(to.hi[id], v, 7, to.ts[id], d2.d3, d2.iM, -1, !0)) : 2 <= bU && (v = ut(player, 0 === id) + " and " + (bU - 1) +
			" other player" + ui(bU - 1) + to.tu[id], uM(7, 0), tz(to.hi[id], v, 7, player, d2.d3, d2.iM, -1, !1))
	}, this.uJ = function(id, mS, mT) {
		var fQ = aL.fP(),
			bU = to.tt[id] + 1;
		to.tt[id]++, to.nc[id] = mS, to.ts[id] = mT, 1 === bU && (to.fQ[id] = fQ), (1 === bU && (oR < 32 || 2 === gb) || 1 < bU && (to.fQ[id] < fQ - 140 || 2 === gb)) && this.us(id)
	}, this.fA = function() {
		for (var dU = (dU = tl.length - tp) <= 1 ? 1 : dU * dU, aE = tl.length - 1; 0 <= aE; aE--) 0 < tl[aE].aM && (tl[aE].aM -= dU, tl[aE].aM <= 0) && (aL.co = !0, tl.splice(aE, 1));
		! function() {
			var ud, aE;
			if (128 !== tq && !(++tq < 128))
				for (ud = 5, aE = fT - 1; 0 <= aE; aE--) 1 === dx[fU[aE]] && 0 < ud-- && tz(240, hQ[fU[aE]] + " joined the game.", 1, fU[aE], d2.hK, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.oS(!1)
	}, this.cy = function() {
		for (var mq, h9 = cx(), aE = tl.length - 1; 0 <= aE; aE--) mq = h9 - (aE + 1) * eu, 50 === tl[aE].id ? (cz.drawImage(tl[aE].dC, hG - tl[aE].cl - tn - qK, mq), cz.drawImage(tr, hG - tn - qK, mq)) : cz.drawImage(tl[aE].dC, hG - tl[aE].cl -
			qK, mq)
	}
}

function uy() {
	this.cl = 0, this.eu = 0, this.nY = 0, this.uz = 0, this.v0 = 0, this.cj = 0, this.cd = -1, this.tR = ["Accept Cookies", "More Information", "Decline"], this.colors = ["rgba(0,255,0,0.4)", "rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"], this.pb = !1,
		this.b = function() {
			this.resize(), this.pb = q < 5 && !m && 0 === r.aA()
		}, this.resize = function() {
			this.cl = Math.floor(2.8 * Math.floor((a0 ? .09 : .062) * cb)), this.eu = Math.floor(+this.cl), this.nY = Math.floor(.06 * this.cl), this.nZ = this.cl - 2 * this.nY, this.uz = this.nY, this.v0 = (this.eu - (this.tR.length + 1) * this
				.uz) / this.tR.length, this.cj = Math.floor(.3 * this.v0)
		}, this.cq = function(cr, cs) {
			return !!this.pb && -1 !== (cr = this.v1(cr, cs)) && (0 === cr ? (r.v2(2), this.pb = !1) : 1 === cr ? pm.b(rU.v3, !0) : 2 === cr && (r.v2(1), this.pb = !1), aL.co = !0)
		}, this.p8 = function(cr, cs) {
			var a3;
			return !!this.pb && (a3 = this.cd, this.cd = this.v1(cr, cs), a3 !== this.cd && (aL.co = !0), -1 !== this.cd)
		}, this.v1 = function(cr, cs) {
			return cr -= ct, cs -= Math.floor(cu - this.eu - ct), cr < 0 || cs < 0 || cr >= this.cl || cs >= this.eu ? -1 : (cr = Math.floor((cs - .5 * this.uz) / ((this.eu - this.uz) / this.tR.length))) < 0 ? 0 : cr >= this.tR.length ? this.tR
				.length - 1 : cr
		}, this.cy = function() {
			this.pb && this.v4()
		}, this.v4 = function() {
			var h8 = ct,
				h9 = Math.floor(cu - this.eu - ct);
			cz.setTransform(1, 0, 0, 1, h8, h9), cz.fillStyle = d2.iM, cz.fillRect(0, 0, this.cl, this.eu), cz.textBaseline = d0, cz.textAlign = d1, cz.strokeStyle = d2.d3, cz.font = ce + this.cj + cf, cz.strokeRect(0, 0, this.cl, this.eu);
			for (var aE = this.tR.length - 1; 0 <= aE; aE--) cz.setTransform(1, 0, 0, 1, h8 + this.nY, h9 + this.uz + aE * (this.uz + this.v0)), cz.fillStyle = this.colors[aE], cz.fillRect(0, 0, this.nZ, this.v0), this.cd === aE && (cz.fillStyle = d2
				.iS, cz.fillRect(0, 0, this.nZ, this.v0)), cz.fillStyle = d2.d3, cz.fillText(this.tR[aE], this.nZ / 2, .54 * this.v0), cz.strokeRect(0, 0, this.nZ, this.v0);
			cz.setTransform(1, 0, 0, 1, 0, 0)
		}
}

function rc() {
	var v5, v6, v7, cl, eu, font;

	function vB(vC) {
		return vC < 10 ? "0" + vC : String(vC)
	}
	this.b = function() {
		void 0 === cl && this.resize(), this.setTime()
	}, this.resize = function() {
		cl = Math.floor((a0 ? .53 : .36) * cb), eu = Math.floor(.065 * cl), font = ce + Math.floor(.9 * eu) + cf, v7--, this.setTime()
	}, this.fA = function() {
		this.setTime() && (aL.co = !0)
	}, this.setTime = function() {
		var a3 = new Date,
			v9 = a3.getUTCMinutes(),
			a3 = a3.getUTCSeconds();
		return v6 = 3600 - 60 * v9 - a3, v6 %= 900, v5 = "Next Contest: " + vB(Math.floor(v6 / 60)) + ":" + vB(v6 % 60), v7 !== (v7 = 60 * v9 + a3) && (cl = cm.measureText(v5, font), cl += Math.floor(.4 * eu), !0)
	}, this.cy = function() {
		cz.lineWidth = 1 + Math.floor(eu / 15), 7 === aT.pp() && rO.vD() + 2 * ct > .5 * (cu - cl) ? cz.translate(hG - eu, Math.floor(rO.vD() + 2 * ct + cl)) : cz.translate(hG - eu, Math.floor(.5 * (cu + cl))), cz.rotate(-Math.PI / 2), cz
			.fillStyle = d2.d3, cz.fillRect(0, 0, cl, eu), cz.strokeStyle = d2.hK, cz.strokeRect(0, 0, cl, eu + 10), cz.fillStyle = d2.hK, cz.font = font, cz.textBaseline = d0, cz.textAlign = d1, cz.fillText(v5, Math.floor(cl / 2), Math.floor(
				.59 * eu)), cz.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function vE() {
	this.vF = 10, this.vG = 50, this.vH = 50, this.vI = 8, this.vJ = this.vG + this.vH, this.aG = this.vG + this.vH + this.vI, this.cl = 72, this.vK = 0, this.vL = 0, this.so = new Array(this.aG), this.vM = 8, this.vN = new Array(this.vG + this.vH),
		this.vO = new Array(this.vG + this.vH), this.hF = 0, this.hH = 0, this.zoom = 1, this.vP = .2, this.t5 = 0, this.aH = null, this.vQ = null, this.pb = !1, this.b = function() {
			var aE, vR, vS;
			for (this.aH = new Array(this.aG), this.vQ = new Array(this.aG), vR = ch.sp("emojis"), this.vT(), aE = this.t5 = 0; aE < this.vG; aE++) this.vU(aE, aE, vR);
			for (vS = ch.sp("flags"), aE = 0; aE < this.vH; aE++) this.vU(aE, this.vG + aE, vS);
			this.vV(), this.so[26] = this.vW(25, 2), this.vX()
		}, this.vU = function(aE, eb, fQ) {
			this.aH[eb] = !1, this.vQ[eb] = 0;
			var dC = document.createElement("canvas"),
				nT = (dC.width = this.cl, dC.height = this.cl, dC.getContext("2d", {
					alpha: !0
				}));
			nT.clearRect(0, 0, this.cl, this.cl), 23 === eb ? nT.drawImage(nQ.sk()[4].dC[1], 0, 0) : 36 === eb ? nT.drawImage(nQ.sk()[0].dC[2], 0, 0) : 49 === eb ? nT.drawImage(nQ.sk()[2].dC[1], 0, 0) : nT.drawImage(fQ, this.cl * aE % (aE === eb ?
				this.vF * this.cl : 4e3), aE === eb ? bJ(aE, this.vF) * this.cl : 0, this.cl, this.cl, 0, 0, this.cl, this.cl), this.so[eb] = dC
		}, this.vV = function() {
			this.so[this.aG - 5] = this.so[26], this.so[this.aG - 4] = this.vW(this.aG - 5, 2), this.so[this.aG - 1] = this.vW(this.aG - 5, 1), this.so[this.aG - 8] = this.vW(this.aG - 4, 1), this.so[this.aG - 3] = this.so[39], this.so[this.aG - 2] =
				this.vW(this.aG - 3, 1), this.so[this.aG - 7] = this.vW(this.aG - 2, 1), this.so[this.aG - 6] = this.vW(this.aG - 7, 1)
		}, this.vW = function(aE, vY) {
			var dC = document.createElement("canvas"),
				nT = (dC.width = this.cl, dC.height = this.cl, dC.getContext("2d", {
					alpha: !0
				}));
			return nT.clearRect(0, 0, this.cl, this.cl), nT.rotate(vY * Math.PI / 2), nT.drawImage(this.so[aE], 1 === vY ? 0 : -this.cl, -this.cl), dC
		}, this.vX = function() {
			var aE, aR, d7 = a4().split("");
			if (2 * d7.length !== this.aG) this.t5 = 0;
			else {
				for (aE = 0; aE < this.aG; aE += 2) aR = parseInt(d7[Math.floor(aE / 2)]), this.aH[aE] = aR % 2 == 1, this.aH[aE + 1] = 1 < aR;
				this.vZ()
			}
		}, this.vZ = function() {
			for (var aE = this.t5 = 0; aE < this.aG; aE++) this.aH[aE] && (this.vQ[this.t5++] = aE)
		}, this.tM = function() {
			8 === this.t5 && this.vQ[0] === this.vJ && this.vZ()
		}, this.va = function() {
			var aE;
			for (this.t5 = this.vI, aE = 0; aE < this.vI; aE++) this.vQ[aE] = this.vJ + aE
		}, this.vT = function() {
			this.vK = Math.floor((a0 ? .075 : .0468) * cb), this.zoom = this.vK / this.cl, this.vL = (1 + this.vP) * this.vK
		}, this.show = function(cr, cs) {
			var aE, vc, vb, nY, hD, hE;
			if (this.t5 < 1) this.pb = !1;
			else {
				for (vb = (vb = Math.floor(hG / this.vL)) < 3 ? 3 : vb > this.vM ? this.vM : vb, vc = this.t5 > vb ? vb : this.t5, vb = 1 + bJ(this.t5 - 1, vc), nY = Math.floor(vc * this.vL), hD = Math.floor(cr - nY / 2), hD = (hD = hG < hD + nY ?
						hG - nY : hD) < 0 ? 0 : hD, hE = Math.floor(cs - this.vL / 2), cr = Math.floor(vb * this.vL), hE = (hE = cu < hE + cr ? cu - cr : hE) < 0 ? 0 : hE, this.hF = hD + nY, this.hH = hE + cr, aE = 0; aE < this.t5; aE++) this.vN[
					aE] = Math.floor(hD + aE % vc * this.vL), this.vO[aE] = Math.floor(hE + bJ(aE, vc) * this.vL);
				this.pb = !0
			}
		}, this.cq = function(cr, cs, player) {
			return !!this.pb && (this.pb = !1, this.tL(cr, cs) && this.ve(cr, cs, player) && this.pb || (this.tM(), nQ.lP()), !0)
		}, this.tL = function(cr, cs) {
			return !(cr < this.vN[0] || cs < this.vO[0] || cr >= this.hF || cs >= this.hH)
		}, this.ve = function(cr, cs, player) {
			for (var aE = this.t5 - 1; 0 <= aE; aE--)
				if (cr >= this.vN[aE] && cs >= this.vO[aE] && cr <= this.vN[aE] + this.vL && cs <= this.vO[aE] + this.vL) return 39 === this.vQ[aE] ? (this.va(), this.show(cr, cs)) : (player === bN ? cR.cS.jX(this.vQ[aE]) : cR.cL.jm(this.vQ[aE],
					player), this.vZ()), !0;
			return !1
		}, this.vf = function(aE) {
			return aE < 16 || 40 <= aE && aE < 47
		}, this.vg = function(aE) {
			return aE >= this.vG && aE < this.vG + this.vH
		}, this.cy = function() {
			cz.imageSmoothingEnabled = !0;
			for (var l4 = this.vP * this.vK / 2, aE = this.t5 - 1; 0 <= aE; aE--) cz.setTransform(this.zoom, 0, 0, this.zoom, this.vN[aE] + l4, this.vO[aE] + l4), cz.drawImage(this.so[this.vQ[aE]], 0, 0);
			cz.imageSmoothingEnabled = !1, cz.setTransform(1, 0, 0, 1, 0, 0)
		}, this.vh = function(h8, h9, jY) {
			cz.imageSmoothingEnabled = !0, cz.setTransform(this.zoom, 0, 0, this.zoom, h8, h9), cz.drawImage(this.so[jY], 0, 0), cz.imageSmoothingEnabled = !1, cz.setTransform(1, 0, 0, 1, 0, 0)
		}
}
var kp, vn, ct, qL, pS, pT, cv, e2, e1, e3, wi, gm, yq, hQ, uw, dw, ey, f1, ex, f0, bv, n6, bO, bV, bn, bo, br, dx, fU, fT, p7, cz, a8p, a8q, a8r, a1, a2, vs, cb, hG, cu, lX, a8s, m, p, n, q, a0, p0, oz, i3, iD, aF, bR, nR, a2H, aL, fR, gP, cw, a2S,
	pm, a0s, a8t, a8u, d0 = "middle",
	vi = "bottom",
	d1 = "center",
	uH = "left",
	vj = "right",
	ce = "bold ",
	vk = "italic ",
	vl = "normal ",
	cf = "px " + settings.fontName,
	vm = [ce, vk + ce, ce],
	vo = ["wss://", "/s50/", "/s51/", "/s52/"];

function vp() {
	vq(), (cv = new vr).b()
}

function vq() {
	qL = .0022 * (1 + .5 * a0) * cb, ct = (ct = Math.floor((a0 ? .02 : .01152) * cb)) < 2 ? 2 : ct, kp = (kp = Math.floor((a0 ? .0114 : .01296) * cb)) < 2 ? 2 : kp, vn = (vn = Math.floor(.005 * vs)) < 1 ? 1 : vn
}

function vt(nT, cl, eu) {
	nT.fillStyle = d2.d3, nT.fillRect(0, 0, cl, 1), nT.fillRect(0, eu - 1, cl, 1), nT.fillRect(0, 0, 1, eu), nT.fillRect(cl - 1, 0, 1, eu)
}

function rd() {
	var tl, vu, ck, eu, vv;

	function w1(aE) {
		var cl = tl[aE].dC.width,
			nY = (tl[aE].nT.clearRect(0, 0, cl, eu), tl[aE].nT.fillStyle = 0 !== tl[aE].id ? "rgba(33,33,120,0.83)" : tl[aE].eU === bZ ? "rgba(88,88,88,0.83)" : tl[aE].eU < dv ? "rgba(100,70,33,0.83)" : "rgba(33,100,80,0.83)", tl[aE].nT.fillRect(0,
				0, cl, eu), vt(tl[aE].nT, cl, eu), vu + 2 * eu < cl && (tl[aE].nT.fillRect(cl - vu - eu, 0, 1, eu), tl[aE].nT.fillText(hQ[tl[aE].eU], Math.floor((cl - vu) / 2), Math.floor(.57 * eu))), 0 !== tl[aE].id ? 0 : eu);
		tl[aE].nT.fillText(gM.hP(tl[aE].eV), Math.floor(cl - vu / 2 - nY), Math.floor(.57 * eu)),
			function(aE, cl, nY) {
				tl[aE].nT.fillStyle = d2.iQ;
				var w6 = Math.floor(vu * tl[aE].eV / tl[aE].w7);
				tl[aE].nT.fillRect(Math.floor(cl - vu - nY), eu - vv, w6, vv)
			}(aE, cl, nY), 0 === tl[aE].id ? (w4(aE, cl), function(aE, cl) {
				tl[aE].nT.strokeStyle = d2.iZ, tl[aE].nT.fillRect(eu, 0, 1, eu);
				cl -= eu;
				tl[aE].nT.beginPath(), tl[aE].nT.moveTo(Math.floor(.3 * eu + cl), Math.floor(eu / 2)), tl[aE].nT.lineTo(Math.floor(eu - .3 * eu + 0 + cl), Math.floor(eu / 2)), tl[aE].nT.stroke(), tl[aE].nT.beginPath(), tl[aE].nT.moveTo(Math
					.floor(eu / 2 + cl), Math.floor(.3 * eu)), tl[aE].nT.lineTo(Math.floor(eu / 2 + cl), Math.floor(eu - .3 * eu + 0)), tl[aE].nT.stroke()
			}(aE, cl)) : w4(aE, 2 * eu)
	}

	function w4(aE, cl) {
		tl[aE].nT.strokeStyle = tl[aE].w8 ? d2.iV : d2.ik, tl[aE].nT.fillStyle = d2.d3, tl[aE].nT.fillRect(cl - eu, 0, 1, eu);
		var w9 = Math.floor(eu / 12),
			w9 = (tl[aE].nT.lineWidth = w9 < 3 ? 3 : w9, tl[aE].nT.lineCap = "round", .35);
		cl = eu + 1, tl[aE].nT.beginPath(), tl[aE].nT.moveTo(Math.floor(cl - w9 * eu + 0), Math.floor(w9 * eu)), tl[aE].nT.lineTo(Math.floor(cl - eu + w9 * eu), Math.floor(eu - w9 * eu + 0)), tl[aE].nT.stroke(), tl[aE].nT.beginPath(), tl[aE].nT
			.moveTo(Math.floor(cl - eu + w9 * eu), Math.floor(w9 * eu)), tl[aE].nT.lineTo(Math.floor(cl - w9 * eu + 0), Math.floor(eu - w9 * eu + 0)), tl[aE].nT.stroke()
	}

	function wO(bU) {
		for (var eV, aE = bU - 1; 0 <= aE; aE--) eV = b5.bD(bN, aE), tl[aE].eV !== eV && (tl[aE].eV = eV, tl[aE].w7 = eV > tl[aE].w7 ? eV : tl[aE].w7, tl[aE].w2 = !0)
	}

	function w0(wQ) {
		wQ.dC = document.createElement("canvas"), az.mC.font = ck;
		var cl = vu;
		wQ.eU < bZ && 0 === wQ.id && (cl += Math.floor(az.mC.measureText(hQ[wQ.eU] + "000").width)), cl += eu, 0 === wQ.id && (cl += eu), wQ.dC.width = cl, wQ.dC.height = eu, wQ.nT = wQ.dC.getContext("2d", {
			alpha: !0
		}), wQ.nT.font = ck, wQ.nT.textBaseline = d0, wQ.nT.textAlign = d1
	}

	function wK(aE) {
		return gL.wS() ? hG - tl[aE].dC.width - kp : gL.h8
	}

	function wL(aE) {
		return Math.floor(2 * kp + (gL.wS() ? g4.eu + kp : 0) + gL.eu + aE * (1.3 * eu))
	}
	this.b = function() {
		tl = [], this.resize()
	}, this.resize = function() {
		ck = g2.ck, eu = g2.cj + 5, eu = Math.floor(1.25 * eu), a0 && (eu = Math.floor(1.25 * eu)), vv = Math.floor(.15 * eu), az.mC.font = ck, vu = Math.floor(az.mC.measureText("02 000 000 0000").width);
		for (var aE = tl.length - 1; 0 <= aE; aE--) w0(tl[aE]), w1(aE)
	}, this.ga = function() {
		for (var aE = tl.length - 1; 0 <= aE; aE--) tl[aE].w2 && (tl[aE].w2 = !1, w1(aE))
	}, this.hP = function(ud) {
		if (ud < 1e3) return ud < 0 ? "-" + this.hP(Math.abs(ud)) : ud.toString();
		for (var wB = Math.floor(Math.log(ud + .5) / Math.log(10)) + 1, wC = Math.floor((wB - 1) / 3), wD = ud.toString(), wE = wD.substring(wB - 3, wB), aE = 1; aE < wC; aE++) wE = wD.substring(wB - 3 * (aE + 1), wB - 3 * aE) + " " + wE;
		return wD.substring(0, wB - 3 * wC) + " " + wE
	}, this.cq = function(cr, h9) {
		if (2 !== gb && 0 !== dw[bN] && !cH && bW.t6(bN))
			for (var wF, wG, wH, wI = a0 ? eu : 0, wJ = a0 ? Math.floor(.15 * eu) : 0, aE = tl.length - 1; 0 <= aE; aE--)
				if (wF = wK(aE), wG = wL(aE), wH = tl[aE].dC.width, wG - wJ <= h9 && h9 <= wG + eu + wJ) {
					if (wF - wI <= cr && cr <= wF + eu + wI) return tl[aE].w8 || (tl[aE].w2 = !0, tl[aE].w8 = !0, 0 === tl[aE].id && cR.cS.jV(tl[aE].eU)), !0;
					if (0 === tl[aE].id && wF + wH - eu - wI <= cr && cr <= wF + wH + wI) return cR.cS.cT(cU.cV(), tl[aE].eU), !0
				} return !1
	}, this.fA = function() {
		var bU;
		2 !== gb && 0 !== dw[bN] && !cH && bW.t6(bN) && (function(bU) {
			if (tl.length !== bU) return 1;
			for (var aE = bU - 1; 0 <= aE; aE--)
				if (tl[aE].id !== b5.b7(bN, aE) || tl[aE].eU !== b5.bC(bN, aE)) return 1;
			return
		}(bU = b5.b6(bN)) && function(bU) {
			var aE, id, eU, em, eV, u1 = [];
			loop: for (aE = 0; aE < bU; aE++) {
				for (id = b5.b7(bN, aE), eU = b5.bC(bN, aE), em = 0; em < tl.length; em++)
					if (tl[em].id === id && tl[em].eU === eU) {
						u1.push(tl.splice(em, 1)[0]);
						continue loop
					} eV = b5.bD(bN, aE), w0(eV = {
					eU: eU,
					eV: eV,
					w7: eV,
					id: id,
					w2: !0,
					w8: !1,
					dC: null,
					nT: null
				}), u1.push(eV)
			}
			tl = u1
		}(bU), wO(bU))
	}, this.wR = function(bc) {
		for (var bU = Math.min(tl.length, b5.b6(bN)), aE = 0; aE < bU; aE++)
			if (tl[aE].eU === bc) return void(tl = [])
	}, this.cy = function() {
		if (0 !== dw[bN] && bW.t6(bN) && !cH)
			for (var aE = tl.length - 1; 0 <= aE; aE--) cz.drawImage(tl[aE].dC, wK(aE), wL(aE))
	}
}

function re() {
	var tl, fb, wT, wU, eu, ck, cj, wV, v5, wW, wX, wY, dC, nT, hd, wZ;

	function wg() {
		cz.drawImage(dC, kp + (eO ? kp + gP.wh() : 0), wi + 2 * kp)
	}

	function wa() {
		dC.width = tl[0].width + wX, dC.height = eu + wX, (nT = dC.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, tl[0].width + wX, eu + wX), nT.translate(Math.floor(wX / 2), Math.floor(wX / 2)), nT.lineWidth = wX, nT.fillStyle = 1 === tl[0].wf ? d2.iT : d2.iM, wj(), nT.fill(), nT.strokeStyle = 1 === tl[0].wf ? d2.hK : d2.d3,
		wj(), nT.stroke(), nT.textAlign = d1, nT.textBaseline = d0, nT.fillStyle = 1 === tl[0].wf ? d2.hK : d2.d3, nT.font = ck[0], nT.fillText(v5[tl[0].we], Math.floor(tl[0].width / 2), Math.floor(.72 * wV[0] * eu)), nT.font = ck[1], nT.fillText(tl[
				0].v, Math.floor(tl[0].width / 2), Math.floor((wV[0] + .48 * wV[1]) * eu))
	}

	function wj() {
		nT.beginPath(), nT.moveTo(wY, 0), nT.lineTo(tl[0].width - wY, 0), nT.lineTo(tl[0].width, wY), nT.lineTo(tl[0].width, eu - wY), nT.lineTo(tl[0].width - wY, eu), nT.lineTo(wY, eu), nT.lineTo(0, eu - wY), nT.lineTo(0, wY), nT.closePath()
	}
	this.b = function() {
		fb = 4, wT = wU = hd = 0, tl = [], ck = new Array(2), cj = new Array(2), wV = new Array(2), v5 = ["YOU ERASED", "YOU WERE ERASED BY", "THE GAME WAS WON BY", "MAP:"], wV[0] = .3, wV[1] = .7, wW = new Array(4), dC = document.createElement(
			"canvas"), wZ = aL.aM + 2e3, this.resize()
	}, this.resize = function() {
		var aE, cl;
		for (eu = Math.floor((a0 ? .0725 : .058) * cb), cj[0] = Math.floor(.85 * wV[0] * eu), cj[1] = Math.floor(.85 * wV[1] * eu), ck[0] = ce + cj[0] + cf, ck[1] = ce + cj[1] + cf, aE = wW.length - 1; 0 <= aE; aE--) wW[aE] = this.measureText(v5[
			aE] + "000", ck[0]);
		if (wX = Math.floor(1 + .05 * eu), wY = Math.floor(.2 * eu), 0 < tl.length) {
			for (aE = tl.length - 1; 0 <= aE; aE--) cl = this.measureText(tl[aE].v + "00", ck[1]), tl[aE].width = cl < wW[aE] ? wW[aE] : cl;
			wa()
		}
	}, this.fA = function() {
		0 !== fb && (4 === fb ? aL.aM > wZ && (fb = 0, 1 === gb) && cm.og(az.fo.md[az.me].name, 3, 1, 9) : (1 === fb ? (0 === wT && (wa(), wT = 1e-4), 1 <= (wT += .002 * (aL.aM - hd)) && (wU = 0, fb = 2, wT = 1), aL.co = !0) : 2 === fb ? ((wU +=
			(aL.aM - hd) / 1e3) > tl[0].hi || 1 < wU && 1 < tl.length) && (fb = 3) : 3 === fb && ((wT -= .002 * (aL.aM - hd)) <= 0 && (wT = 0, tl.shift(), fb = 0 < tl.length ? 1 : 0), aL.co = !0), hd = aL.aM))
	}, this.measureText = function(v, ck) {
		return cz.font = ck, Math.floor(cz.measureText(v).width)
	}, this.eR = function(wd, aE) {
		this.og(hQ[wd], aE, 1, 0 === aE ? 3 : 7)
	}, this.og = function(v, we, wf, hi) {
		var cl = (cl = this.measureText(v + "00", ck[1])) < wW[we] ? wW[we] : cl;
		tl.push({
			v: v,
			width: cl,
			we: we,
			wf: wf,
			hi: hi
		}), 0 === fb && (wT = 0, fb = 1, hd = aL.aM)
	}, this.cy = function() {
		0 !== fb && 0 !== wT && (wT < 1 ? (cz.globalAlpha = wT, wg(), cz.globalAlpha = 1) : wg())
	}
}

function sG() {
	var eu, dC, nT, wk, wl, wm, wn, wo, w2, wp, wq, wr, ws, wt;

	function cg() {
		var cl = gO.cl,
			m2 = (w2 = !1, nS(nT, cl, eu), Math.floor(cl / 2));
		1 === wl ? (nT.fillStyle = d2.ib, nT.fillRect(m2, 0, m2, eu)) : -1 === wl && (nT.fillStyle = d2.io, nT.fillRect(0, 0, m2, eu)), nU(nT, cl, eu, 2);
		var m2 = (m2 = Math.floor(.25 * eu)) < 2 ? 2 : m2,
			un = (nT.fillStyle = d2.iU, Math.floor((eu - 4) * wm[1] / wn[1]));
		0 < un && nT.fillRect(2, eu - 2 - un, m2, un), 0 < (un = Math.floor((eu - 4) * wm[0] / wn[0])) && nT.fillRect(cl - 2 - m2, eu - 2 - un, m2, un);
		m2 = (m2 = Math.floor(eu / 8)) < 2 ? 2 : m2;
		nW(nT, Math.floor(.4 * eu), 0, eu, m2, .5, !1), nW(nT, Math.floor(cl - 1.4 * eu), 0, eu, m2, .5, !0), nT.drawImage(wk, Math.floor((cl - wk.width) / 2), 3)
	}

	function wv() {
		w2 = !0, wp = 140, wl = 0, wo = [], gO.pb = !1, g2.oF(247, 0), wm[0] = wm[1] = 0
	}

	function cx() {
		return cU.uB(g2.u7()) ? cU.h9 - eu - kp : gW.uB(g2.uA()) ? gW.cx() - eu - kp : a2 - eu - hM.uC() * kp
	}
	this.pb = !1, this.cl = 0, this.b = function() {
		wr = ws = 0, this.pb = !1, w2 = wt = !1, wp = 140, wm = [wl = 0, 0], wn = [1, 1], wo = [], wq = new Uint32Array(10), this.resize()
	}, this.resize = function() {
		eu = cU.eu, this.cl = 4 * eu, this.wu(), (dC = document.createElement("canvas")).width = this.cl, dC.height = eu, nT = dC.getContext("2d", {
			alpha: !0
		}), cg()
	}, this.ga = function() {
		w2 && cg()
	}, this.wu = function() {
		var dD, wX, m2, uz = (uz = eu - 6) < 6 ? 6 : uz;
		void 0 !== wk && wk.width === uz || ((wk = document.createElement("canvas")).width = uz, wk.height = uz, (dD = wk.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, uz, uz), wX = Math.floor(uz / 8), dD.lineWidth = wX = wX < 1 ? 1 : wX, dD.strokeStyle = d2.d3, m2 = Math.floor(uz / 2), uz = Math.floor((uz - wX) / 2), dD.beginPath(), dD.arc(m2, m2, uz, 0, 2 * Math.PI), dD
			.moveTo(m2, m2 - uz), dD.lineTo(m2, m2 + uz), dD.moveTo(m2 + Math.cos(.78 * Math.PI) * uz, m2 + Math.cos(.28 * Math.PI) * uz), dD.lineTo(m2, m2), dD.lineTo(m2 + Math.cos(.22 * Math.PI) * uz, m2 + Math.cos(1.72 * Math.PI) * uz), dD
			.stroke())
	}, this.cq = function(h8, h9) {
		var hE;
		return !(h8 < a1 - this.cl - kp || h9 < (hE = cx()) || hE + eu < h9 || (cH || cR.cS.jb(h8 > a1 - kp - this.cl / 2 ? 1 : 0), 0))
	}, this.fA = function() {
		if (0 < ws) 0 === --ws && wv();
		else if (this.pb) 270 == --wp && 2 <= wr && function() {
			var aE;
			for (aE = fT - 1; 0 <= aE; aE--)
				if (bW.t6(fU[aE])) return;
			return 1
		}() && (w2 = !0, wm[0] += wn[0]), 180 === wp && 3 * wm[0] < wn[0] ? wv() : wm[0] >= wn[0] ? wt ? g7.oA.oD() : g7.oA.oI(-1) : wm[1] >= wn[1] ? ws = 4 : wp <= 0 && wv();
		else if (function() {
				var aE;
				for (aE = 9; 0 <= aE; aE--) 12 < Math.abs(wq[aE] - bv[gm[aE]]) && (wp = 140), wq[aE] = bv[gm[aE]];
				if (--wp <= 0) return 1;
				return
			}()) {
			(wt = wy()) && g2.uY(), this.pb = !0, wp = 360;
			var aE, a3 = 0;
			for (aE = fT - 1; 0 <= aE; aE--) bW.t6(fU[aE]) && (a3 += bv[fU[aE]]);
			wn[0] = u9(bJ(3 * a3, 5), 1), eO && 9 !== fq && (wn[0] = x0(u9(bJ(a3 * (100 - bJ(100 * gP.od(), qn)), 100), 1), wn[0])), wn[1] = u9(a3 - wn[0], 1), wr++
		}
	}, this.oP = function() {
		this.pb && wm[0] < wn[0] && wv()
	}, this.kU = function(player, x2) {
		var aE, a3;
		if (this.pb) {
			for (aE = wo.length - 1; 0 <= aE; aE--)
				if (wo[aE] === player) return;
			wo.push(player), w2 = !0, a3 = fs ? wn[0] : bv[player], x2 ? wm[0] += a3 : wm[1] += a3, player === bN && (wl = x2 ? 1 : -1)
		}
	}, this.cy = function() {
		var h9;
		this.pb && (h9 = cx(), cz.drawImage(dC, a1 - this.cl - kp, h9))
	}
}

function rf() {
	var cl, h8, x3, dC, nT, pb, e0, x4, ck, w2, x5 = 11 / 12;

	function x7() {
		var w6 = Math.floor(e0 * (cl - 2 * x3)),
			xA = 1 + Math.floor(.0625 * cU.eu),
			xB = 1 + Math.floor(.3 * cU.eu),
			uz = Math.floor(.55 * cU.eu);
		nT.clearRect(0, 0, cl, cU.eu), nT.fillStyle = d2.iL, nT.fillRect(0, 0, x3, cU.eu), nT.fillRect(x3 + w6, 0, cl - x3 - w6, cU.eu), nT.fillStyle = e0 < 1 / 3 ? "rgba(" + Math.floor(3 * e0 * 130) + ",130,0,0.85)" : e0 < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (e0 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (e0 - 2 / 3) * 130) + ",0.85)", nT.fillRect(x3, 0, w6, cU.eu), nT.fillStyle = d2.d3, nT.fillRect(0, 0, cl, 1), nT.fillRect(0, cU.eu - 1, cl, 1),
			nT.fillRect(0, 0, 1, cU.eu), nT.fillRect(x3, 0, 1, cU.eu), nT.fillRect(x3 + w6, 0, 1, cU.eu), nT.fillRect(cl - x3, 0, 1, cU.eu), nT.fillRect(cl - 1, 0, 1, cU.eu), nT.fillRect(Math.floor(.25 * cU.eu) + xB, Math.floor((cU.eu - xA) / 2), cU
				.eu - 2 * xB, xA), nT.fillRect(Math.floor(cl - 1.25 * cU.eu) + xB, Math.floor((cU.eu - xA) / 2), cU.eu - 2 * xB - xB % 2, xA), nT.fillRect(Math.floor(cl - 1.25 * cU.eu) + Math.floor((cU.eu - xA) / 2), xB, xA, cU.eu - 2 * xB - xB % 2),
			x4 = cK.cL.dz(bN, cU.cV()), nT.fillText(gM.hP(x4) + " (" + g4.um(100 * e0, 0) + ")", Math.floor(.5 * cl), uz)
	}

	function xF(cZ) {
		return !(1 < cZ && 1 === e0 || (1 < cZ && cZ * e0 - e0 < 1 / 1024 ? cZ = (e0 + 1 / 1024) / e0 : cZ < 1 && e0 - cZ * e0 < 1 / 1024 && (cZ = (e0 - 1 / 1024) / e0), e0 = cA.qF(e0 * cZ, 1 / 1024, 1), x7(), 0))
	}

	function xG(cr) {
		return e0 !== (e0 = cA.qF((cr - h8 - x3) / (cl - 2 * x3), 1 / 1024, 1)) && (x7(), !0)
	}
	this.h9 = 0, this.pc = !1, this.b = function() {
		pb = !hm && !cH, w2 = !1, e0 = .5, x4 = 0, this.pc = !1, this.resize()
	}, this.resize = function() {
		a0 && a1 < .8 * a2 ? (this.eu = Math.floor(.0536 * cb), cl = a1 - 4 * kp - this.eu) : (cl = Math.floor((a0 ? .65 : .389) * cb), cl += 12 - cl % 12, this.eu = Math.floor(cl / 12)), x3 = Math.floor(3 * this.eu / 2), ck = ce + Math.floor(
			.5 * this.eu) + cf, (dC = document.createElement("canvas")).width = cl, dC.height = this.eu, (nT = dC.getContext("2d", {
			alpha: !0
		})).font = ck, nT.textBaseline = d0, cK.iG.textAlign(nT, 1), this.x6(), x7()
	}, this.x6 = function() {
		h8 = a0 && a1 < .8 * a2 ? this.eu + 3 * kp : Math.floor((hG - cl) / 2), this.h9 = cu - this.eu - hM.uC() * kp
	}, this.ga = function() {
		w2 && (w2 = !1, x7())
	}, this.pb = function() {
		return !(!pb || cI.cJ && h8 < Math.floor(kp + 5.5 * this.eu))
	}, this.uB = function(cn) {
		return !!this.pb() && a1 - cn - kp < h8 + cl
	}, this.l = function() {
		pb = !cH
	}, this.wv = function() {
		pb = !1
	}, this.cV = function() {
		return cA.qF(Math.floor(1024 * e0 + .5) - 1, 0, 1023)
	}, this.pl = function(cr, cs) {
		return this.pb() && h8 < cr && cr < h8 + cl && cs > this.h9
	}, this.cq = function(cr, cs) {
		return !!this.pb() && !!cU.pl(cr, cs) && (hq.hr = !1, function(tO, cr, cs) {
			if (function(cr, cs) {
					return h8 < cr && cr < h8 + x3 && cs > cU.h9
				}(cr, cs)) return xF(x5);
			if (function(cr, cs) {
					return h8 + cl - x3 < cr && cr < h8 + cl && cs > cU.h9
				}(cr, cs)) return xF(1 / x5);
			return tO.pc = !0, xG(cr)
		}(this, cr, cs) && (aL.co = !0), !0)
	}, this.px = function(hz) {
		0 !== gb && this.pb() && xF(hz) && (aL.co = !0)
	}, this.pB = function(deltaY) {
		var hz;
		return !(0 === deltaY || !this.pb()) && xF(hz = 0 < deltaY ? (hz = 400 / (400 + deltaY)) < x5 ? x5 : hz : 1 / x5 < (hz = (400 - deltaY) / 400) ? 1 / x5 : hz)
	}, this.p8 = function(cr, cs) {
		return !!this.pc && xG(cr)
	}, this.pg = function() {
		this.pc = !1
	}, this.fA = function() {
		this.pb() && x4 !== cK.cL.dz(bN, this.cV()) && (w2 = !0)
	}, this.cy = function() {
		this.pb() && cz.drawImage(dC, h8, this.h9)
	}
}

function sU() {
	var dC, nT, xH, font, xI = 0,
		xJ = !1,
		xK = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		xL = 5;

	function v4() {
		if (xJ) {
			var aE, bU = xK.length,
				uz = Math.floor(.5 * xH.eu),
				eu = bU * uz,
				h8 = Math.floor(Math.floor(xH.h8) + .3 * xH.cl - .5),
				h9 = Math.floor(Math.floor(xH.h9) - eu),
				cl = Math.floor(.4 * xH.cl + 2.5);
			for (cz.fillStyle = d2.iL, cz.fillRect(h8, h9, cl, eu), cz.fillStyle = d2.ih, cz.fillRect(h8, h9 + xL * uz, cl, uz), cz.fillStyle = d2.d3, cz.fillRect(h8, h9, 2, eu), cz.fillRect(h8, h9, cl, 2), cz.fillRect(h8 + cl - 2, h9, 2, eu), aE =
				1; aE < bU; aE++) cz.fillRect(h8, h9 + aE * uz, cl, 2);
			for (cz.fillStyle = d2.d3, cK.iG.textAlign(cz, 1), cK.iG.textBaseline(cz, 1), cz.font = cK.iG.lW(.6 * uz, 0), h8 += .5 * cl, aE = 0; aE < bU; aE++) cz.fillText(xY(aE), h8, h9 + (aE + .6) * uz)
		}
		cz.drawImage(dC, Math.floor(xH.h8), Math.floor(xH.h9))
	}

	function cg(tO) {
		var h8, hD, hE, uz;
		nT.clearRect(0, 0, Math.floor(xH.cl), Math.floor(xH.eu)), nT.fillStyle = d2.iL, nT.fillRect(0, 0, Math.floor(xH.cl), Math.floor(xH.eu)), hp && (nT.fillStyle = d2.ih, nT.fillRect(0, 0, Math.floor(.3 * xH.cl), Math.floor(xH.eu))), nT
			.fillStyle = d2.d3, nT.fillText("Hide UI", .15 * xH.cl, .5 * xH.eu), nT.fillRect(Math.floor(.3 * xH.cl - .5), 0, 2, Math.floor(xH.eu)), h8 = .5 * xH.cl, nT.fillText("Replay Speed", h8, .31 * xH.eu), nT.fillText(xY(xL), h8, .69 * xH.eu),
			nT.fillRect(Math.floor(.7 * xH.cl - .5), 0, 2, Math.floor(xH.eu)), tO.tW ? (h8 = Math.floor(.02 * xH.cl), tO = Math.floor(.025 * xH.cl), hD = Math.floor(.85 * xH.cl - h8 - .5 * tO), hE = Math.floor(.25 * xH.eu), uz = Math.floor(xH.eu) -
				2 * hE, nT.fillRect(hD, hE, h8, uz), nT.fillRect(hD + h8 + tO, hE, h8, uz)) : function() {
				var cl = Math.floor(.46 * xH.eu),
					eu = Math.floor(.23 * xH.eu),
					h8 = Math.floor(.85 * xH.cl - .5 * cl + cl / 12),
					h9 = Math.floor(.5 * xH.eu - eu);
				nT.beginPath(), nT.moveTo(h8, h9), nT.lineTo(h8 + cl, h9 + eu), nT.lineTo(h8, h9 + (eu << 1)), nT.fill()
			}(), nT.fillRect(0, 0, Math.floor(xH.cl), 2), nT.fillRect(0, 0, 2, Math.floor(xH.eu)), nT.fillRect(0, Math.floor(xH.eu) - 2, Math.floor(xH.cl), 2), nT.fillRect(Math.floor(xH.cl - 2), 0, 2, Math.floor(xH.eu))
	}

	function xY(aE) {
		return 5 === aE ? "Normal" : "" + xK[aE]
	}
	this.tW = !1, this.b = function() {
		cH && (xL = 5, this.tW = !1, xJ = !1, xH = new kl([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.xM = function() {
		return xK[xL]
	}, this.cx = function() {
		return xH.h9
	}, this.uB = function(cn) {
		return !!cH && xH.h8 + xH.cl > a1 - cn - kp
	}, this.resize = function() {
		cH && (xH.resize(), xH.h9 -= (hM.uC() - 1) * kp, font = cK.iG.lW(.3 * xH.eu, 0), (dC = document.createElement("canvas")).width = Math.floor(xH.cl), dC.height = Math.floor(xH.eu), (nT = dC.getContext("2d", {
			alpha: !0
		})).font = font, cK.iG.textAlign(nT, 1), cK.iG.textBaseline(nT, 1), cg(this))
	}, this.ps = function(xN) {
		xN !== hp && (hp = xN, gP.resize(), aL.co = !0, cH) && (xI = aL.aM + 2e3, cg(this))
	}, this.cq = function(h8, h9) {
		if (!cH) return !1;
		if (h8 < xH.h8 || h9 < xH.h9 || h8 > xH.h8 + xH.cl) return xJ && function(tO, h8, h9) {
			var bU = xK.length,
				uz = Math.floor(.5 * xH.eu),
				eu = bU * uz,
				hD = Math.floor(Math.floor(xH.h8) + .3 * xH.cl - .5),
				eu = Math.floor(Math.floor(xH.h9) - eu),
				cl = Math.floor(.4 * xH.cl + 2.5);
			return xJ = !1, aL.co = !0, h8 < hD || hD + cl < h8 || h9 < eu || (xL = xQ(0, Math.floor((h9 - eu) / uz), bU - 1), cg(tO)), !0
		}(this, h8, h9);
		if ((h8 -= xH.h8) < .3 * xH.cl) xJ = !1, this.ps(!hp);
		else {
			if (h8 < .7 * xH.cl) return xJ = !xJ, aL.co = !0;
			this.pv(!1)
		}
		return !0
	}, this.pv = function(xP) {
		2 === gb ? (this.ps(!1), lU.show()) : (xJ = !1, this.tW = !this.tW, this.tW ? cI.cJ ? cI.pu() : aJ(1) : xP || cI.tX(), aL.co = !0, cg(this))
	}, this.pV = function(h8, h9) {
		return !!hp && (cI.cq(h8, h9) || (cH ? ((aL.aM > xI || !this.cq(h8, h9)) && hq.cq(h8, h9), aL.co = !0, xI = aL.aM + 2e3) : hq.cq(h8, h9)), !0)
	}, this.fA = function() {
		cH && hp && aL.aM > xI - 1e3 && aL.aM < xI && (aL.co = !0)
	}, this.oT = function() {
		cH && (this.tW = !1, aL.co = !0, cg(this))
	}, this.cy = function() {
		if (cH) {
			if (hp) {
				if (aL.aM > xI) return;
				if (aL.aM > xI - 1e3) return cz.globalAlpha = xQ(0, (1e3 - (aL.aM - (xI - 1e3))) / 1e3, 1), v4(), void(cz.globalAlpha = 1)
			}
			v4()
		}
	}
}

function sT() {
	var xH, lR, qJ, uz;
	this.pb = !1, this.lT = !1, this.ti = function() {
		return !fm.fn && az.me !== az.xZ() && (cH || 2 === gb)
	}, this.show = function() {
		this.pb = !0, xH || (xH = new kl([.55, .35], [.5, .5]), (lR = new lQ).b()), this.resize(), 0 === gb ? lR.lY("") : (gR.k9.xd.length || (gR.k9.xd = gR.xg.o3()), lR.lY(gR.xh(gR.k9.xd))), lR.show(), aL.co = !0, pn.l(!1)
	}, this.lP = function() {
		this.pb && (this.pb = !1, this.lT = !1, lR.lP(), aL.co = !0, 0 === gb && rT.lb(), 0 === aT.pp()) && pn.l(!0)
	}, this.resize = function() {
		this.pb && (xH.resize(), qJ = .03 * xH.eu, uz = .2 * xH.eu, lR.resize(xH.h8 + qJ, xH.h9 + uz + qJ, xH.cl - 2 * qJ, xH.eu - 2 * (uz + qJ)))
	}, this.cq = function(h8, h9) {
		return !!this.pb && (h8 < xH.h8 || h9 < xH.h9 || h8 > xH.h8 + xH.cl || h9 > xH.h9 + xH.eu ? 2 !== cI.cq(h8, h9) && this.lP() : h9 < xH.h9 + xH.eu - uz ? h8 > xH.h8 + xH.cl - uz && h9 < xH.h9 + uz && this.lP() : (h8 -= xH.h8) < .25 * xH
			.cl ? lR.la() : h8 < .5 * xH.cl ? lR.lc() : h8 < .75 * xH.cl ? lR.lb() : (h9 = this, h8 = gR.xc(lR.lZ()), h9.lP(), (0 < h8.length && h8 === gR.k9.xd || gR.xf.m0(h8)) && gR.xe()), !0)
	}, this.cy = function() {
		var aE;
		if (this.pb)
			for (cK.iG.textAlign(cz, 1), cz.fillStyle = d2.ir, cz.fillRect(xH.h8, xH.h9, xH.cl, uz), cz.fillStyle = d2.iL, cz.fillRect(xH.h8, xH.h9 + uz, xH.cl, xH.eu - uz), cz.fillStyle = d2.d3, cz.fillRect(xH.h8, xH.h9, 2, xH.eu), cz.fillRect(
					xH.h8, xH.h9, xH.cl, 2), cz.fillRect(xH.h8 + xH.cl - 2, xH.h9, 2, xH.eu), cz.fillRect(xH.h8, xH.h9 + xH.eu - 2, xH.cl, 2), cz.fillRect(xH.h8 + 1, xH.h9 + uz, xH.cl - 2, 2), cz.fillRect(xH.h8 + 1, xH.h9 + xH.eu - uz, xH.cl - 2,
					2), cz.font = ce + Math.floor(.39 * uz) + cf, cz.fillText("Replay", xH.h8 + .5 * xH.cl, xH.h9 + .55 * uz), cI.tj(xH.h8 + xH.cl - .725 * uz, xH.h9 + .275 * uz, .45 * uz), cz.setTransform(1, 0, 0, 1, 0, 0), cz.font = cK.iG.lW(
					.3 * uz, 0), cz.fillText("Select All", xH.h8 + .125 * xH.cl, xH.h9 + xH.eu - .48 * uz), cz.fillText("Copy", xH.h8 + .375 * xH.cl, xH.h9 + xH.eu - .48 * uz), cz.fillText("Clear", xH.h8 + .625 * xH.cl, xH.h9 + xH.eu - .48 * uz),
				cz.fillText("Launch", xH.h8 + .875 * xH.cl, xH.h9 + xH.eu - .48 * uz), aE = 1; aE < 4; aE++) cz.fillRect(xH.h8 + .25 * aE * xH.cl - 1, xH.h9 + xH.eu - uz + 1, 2, uz - 2)
	}
}

function rg() {
	var xj, xk, cl, h8, h9, xl, xm;
	this.b = function() {
		xj = new Array(2), xk = new Array(2), this.hr = !1, xm = xl = e3 = e1 = 0, e2 = 1, this.resize()
	}, this.resize = function() {
		cl = (cl = Math.floor((a0 ? .072 : .0502) * cb)) < 8 ? 8 : cl;
		for (var aE = 1; 0 <= aE; aE--) xj[aE] = document.createElement("canvas"), xj[aE].width = cl, xj[aE].height = cl, xk[aE] = xj[aE].getContext("2d", {
			alpha: !0
		});
		this.x6(),
			function() {
				for (var y2 = Math.floor(1 + cl / 20), aE = 1; 0 <= aE; aE--) xk[aE].clearRect(0, 0, cl, cl), xk[aE].fillStyle = d2.iI, xk[aE].beginPath(), xk[aE].arc(cl / 2, cl / 2, cl / 2 - y2, 0, 2 * Math.PI), xk[aE].fill(), xk[aE].lineWidth =
					y2, xk[aE].fillStyle = d2.d3, xk[aE].strokeStyle = d2.d3, xk[aE].beginPath(), xk[aE].arc(cl / 2, cl / 2, cl / 2 - y2, 0, 2 * Math.PI), xk[aE].stroke(), nW(xk[aE], 0, 0, cl, y2, .3, 0 === aE)
			}()
	}, this.hI = function() {
		return -e1 / e2
	}, this.cx = function() {
		return -e3 / e2
	}, this.i1 = function(xq, dj) {
		e1 = e2 * xq - dj
	}, this.i2 = function(xr, dk) {
		e3 = e2 * xr - dk
	}, this.cq = function(xp, uD) {
		return hp || ! function(xp, uD) {
			return Math.pow(xp - (h8 + cl / 2), 2) + Math.pow(uD - (h9 + cl / 2), 2) < cl * cl / 4 || Math.pow(xp - (h8 + cl / 2), 2) + Math.pow(uD - (h9 + 2 * cl), 2) < cl * cl / 4
		}(xp, uD) || hM.hN.xs ? (gT.i5() && (this.hr = !0, xl = xp, xm = uD), !1) : uD < h9 + 1.25 * cl ? this.pB(Math.floor(hG / 2), Math.floor(cu / 2), -200) : this.pB(Math.floor(hG / 2), Math.floor(cu / 2), 200)
	}, this.p8 = function(xp, uD) {
		var xt, xu, dm, dq;
		return !gT.i5() || (xt = e1, xu = e3, e1 += dm = xl - xp, e3 += dq = xm - uD, g3.p8(dm, dq), this.xv(), xl = xp, xm = uD, xt !== e1) || xu !== e3
	}, this.pB = function(cr, cs, deltaY) {
		var hz;
		if (gT.i5()) {
			if (0 < deltaY) hz = (hz = 500 / (500 + deltaY)) < .5 ? .5 : hz;
			else {
				if (!(deltaY < 0)) return !1;
				hz = 2 < (hz = (500 - deltaY) / 500) ? 2 : hz
			}
			this.xw(cr, cs, hz), aL.co = !0
		}
		return !0
	}, this.xw = function(h8, h9, df) {
		var cZ;
		df = cZ = (cZ = 1024 < (cZ = df) * e2 ? 1024 / e2 : cZ) * e2 < .125 ? .125 / e2 : cZ, g3.zoom(df, h8, h9),
			function(cZ, cr, cs) {
				e2 *= cZ, e1 = (e1 + cr) * cZ - cr, e3 = (e3 + cs) * cZ - cs, hq.xv()
			}(df, h8, h9)
	}, this.xv = function() {
		var xz = a1 / 16,
			dM = 0,
			y0 = a2 / 16,
			dO = 0;
		e1 < xz - a1 && (dM = xz - a1 - e1), e1 > e2 * az.b0 - xz && (dM = e2 * az.b0 - xz - e1), e3 < y0 - a2 && (dO = y0 - a2 - e3), e3 > e2 * az.b1 - y0 && (dO = e2 * az.b1 - y0 - e3), e1 += dM, e3 += dO, i3.i4(), g3.y1(dM, dO)
	}, this.x6 = function() {
		h8 = hG - cl - kp, h9 = Math.floor(cu / 2 - 1.25 * cl)
	}, this.cy = function() {
		hM.hN.xs || (cz.drawImage(xj[0], h8, h9), cz.drawImage(xj[1], h8, Math.floor(h9 + 3 * cl / 2)))
	}
}

function rh() {
	var ad, mi, y3, y4, l4, y5, y6, y7, y8, y9, ck, yA, yB, yC, yD, w6, yE, yF, yG;

	function yK() {
		y4 = Math.floor(.2 * (a0 ? .07 : .035) * cb), y4 = u9(a0 ? 3 : 1, y4);
		var yP = a1 / (ad.length + l4);
		y4 = y4 < yP ? yP : y4, w6 = Math.floor((1 - l4) * y4), mi = 0, yQ()
	}

	function yQ() {
		mi = (mi = mi < -20 ? -20 : mi) > (ad.length - 15) * y4 ? (ad.length - 15) * y4 : mi, y6 = Math.floor(mi / y4), y7 = (y7 = y6 + Math.floor(hG / y4)) > ad.length - 1 ? ad.length - 1 : y7, y6 = (y6 = y7 < y6 ? y7 : y6) < 0 ? 0 : y6;
		var m2 = y7;
		y5 = y3 / ad[m2];
		for (var aE = y7 - 1; y6 <= aE; aE--) ad[aE] > ad[m2] && (m2 = aE, y5 = y3 / Math.pow(ad[aE], yD))
	}

	function yT(h8) {
		h8 = Math.floor((mi + hG - h8 - l4 * y4) / y4);
		return (h8 = h8 < -1 ? -1 : -1 === h8 ? 0 : h8 > ad.length - 1 ? -1 : h8) !== y8 && (y8 = h8, -1 === yE && 0 === y8 && yC && (yE = setInterval(yU, 100)), 1)
	}

	function yV(aE) {
		var vv = Math.floor(y5 * Math.pow(ad[aE], yD));
		cz.fillRect(mi + hG - (aE + 1) * y4, cu - vv, w6, vv)
	}

	function yU() {
		var bc;
		0 !== (y8 = 8 === aT.pp() ? -1 : y8) ? (yF = (new Date).getTime(), clearInterval(yE), yE = -1) : (bc = ad[1] / 864e3, -1 !== yF && (bc += ((new Date).getTime() - yF) * ad[1] / 864e5, yF = -1), 0 < bc && (ad[0] += Math.floor(bc), aL.co = !0))
	}
	this.b = function() {
		yC = !(yF = yE = -1), y8 = -(yD = 1), this.yH = !1, yB = 0, yA = new Date, mi = 0, l4 = .3, (yG = []).push({
			ud: "Plateau A",
			bU: 0,
			lk: 57
		}), yG.push({
			ud: "Max A",
			bU: 1,
			lk: 1
		}), yG.push({
			ud: "Black Friday",
			bU: 15,
			lk: 15
		}), yG.push({
			ud: "Max B",
			bU: 19,
			lk: 19
		}), yG.push({
			ud: "Max C",
			bU: 44,
			lk: 44
		}), yG.push({
			ud: "First Android Version",
			bU: 58,
			lk: 58
		}), yG.push({
			ud: "Max D",
			bU: 67,
			lk: 67
		}), yG.push({
			ud: "The iFrame Explosion",
			bU: 98,
			lk: 99
		}), yG.push({
			ud: "The 155-Day Uptrend",
			bU: 58,
			lk: 213
		}), yG.push({
			ud: "Max E",
			bU: 213,
			lk: 213
		}), yG.push({
			ud: "Plateau B",
			bU: 214,
			lk: 259
		}), yG.push({
			ud: "Turbulent Times",
			bU: 260,
			lk: 344
		}), yG.push({
			ud: "Max F",
			bU: 262,
			lk: 262
		}), yG.push({
			ud: "Max G",
			bU: 282,
			lk: 282
		}), yG.push({
			ud: "Max H",
			bU: 333,
			lk: 333
		}), yG.push({
			ud: "The 19-Day Downtrend",
			bU: 283,
			lk: 301
		}), yG.push({
			ud: "Plateau C",
			bU: 345,
			lk: 385
		}), yG.push({
			ud: "The Alliance Ascent",
			bU: 386,
			lk: 395
		}), yG.push({
			ud: "Max I",
			bU: 395,
			lk: 395
		}), yG.push({
			ud: "First iOS Version",
			bU: 411,
			lk: 411
		}), yG.push({
			ud: "Plateau D",
			bU: 396,
			lk: 453
		}), yG.push({
			ud: "The TikTok Revolution",
			bU: 454,
			lk: 470
		}), yG.push({
			ud: "Max J",
			bU: 456,
			lk: 456
		}), yG.push({
			ud: "Max K",
			bU: 472,
			lk: 472
		}), yG.push({
			ud: "Max L",
			bU: 478,
			lk: 478
		}), yG.push({
			ud: "YT Drew",
			bU: 471,
			lk: 485
		}), yG.push({
			ud: "Plateau E",
			bU: 485,
			lk: 600
		}), yG.push({
			ud: "Uptrend A",
			bU: 600,
			lk: 613
		}), yG.push({
			ud: "Max M",
			bU: 613,
			lk: 613
		}), yG.push({
			ud: "Downtrend A",
			bU: 614,
			lk: 635
		}), yG.push({
			ud: "Plateau F",
			bU: 636,
			lk: 737
		}), yG.push({
			ud: "End of Record",
			bU: 738,
			lk: 738
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
		], this.resize(), g6.yJ(0, 0)
	}, this.resize = function() {
		y3 = Math.floor(.15 * a2), y9 = Math.floor((a0 ? .018 : .0137) * cb), ck = ce + (y9 = y9 < 2 ? 2 : y9) + cf, yK()
	}, this.yL = function() {
		yC || jF.yM()
	}, this.yN = function(yO) {
		var aE;
		for (yC = !0, aE = 0; aE < yO.length; aE++) ad.unshift(yO[aE]);
		yK(), aL.co = !0
	}, this.yR = function() {
		yQ()
	}, this.p8 = function(h8, h9) {
		cu - .6 * y3 < h9 ? this.yH ? h8 !== yB && (mi += h8 - yB, yB = h8, yQ(), yT(h8), this.yH = -1 !== y8, aL.co = !0) : yT(h8) && (aL.co = !0) : this.pe()
	}, this.pe = function() {
		-1 !== y8 && (this.yH = !1, y8 = -1, aL.co = !0)
	}, this.pB = function(h8, deltaY) {
		-1 !== y8 && (mi += Math.floor(deltaY), yQ(), yT(h8), aL.co = !0)
	}, this.cq = function(h8, h9) {
		this.p8(h8, h9), -1 !== y8 && (yB = h8, this.yH = !0)
	}, this.pf = function() {
		-1 !== y8 && (this.yH = !1)
	}, this.cy = function() {
		cz.fillStyle = d2.iR;
		for (var yX, month, a3, nZ, ya, yb, hE, yc, yd, aE = y7; y6 <= aE; aE--) yV(aE);
		yC && 0 === y6 && (cz.fillStyle = d2.io, yV(0)), -1 !== y8 && (cz.fillStyle = d2.iQ, yV(y8)), -1 !== y8 && (cz.font = ck, cz.textBaseline = vi, (a3 = new Date).setTime(yA.getTime() - 1e3 * y8 * 60 * 60 * 24), month = "month", yX = "day",
			"undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(a3), yX = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(a3)), yX = yX + ", " + a3.getUTCDate() + " " + month + " " + a3.getFullYear(), month = 1 === ad[y8] ? " second played" : " seconds played", month = gM.hP(ad[y8]) + month, a3 = Math.floor(cz.measureText(yX).width), nZ =
			Math.floor(cz.measureText(month).width), ya = Math.floor(.5 * (a3 + y9)), yb = (yb = mi + hG - (y8 + 1) * y4) < ya ? ya : hG - ya < yb ? hG - ya : yb, hE = cu - Math.floor(y5 * Math.pow(ad[y8], yD)), yc = Math.floor(1.1 * y9),
			yd = cu - yc < hE ? cu - yc : hE, cz.fillStyle = d2.iM, cz.fillRect(hG - nZ - y9, yd - yc, nZ + y9, yc), cz.fillRect(yb - ya, cu - yc, a3 + y9, yc), cz.fillStyle = d2.d3, cz.textAlign = vj, cz.fillText(month, Math.floor(hG - .5 *
				y9), yd),
			function(hE, yc) {
				for (var nY, sm = -1, cd = ad.length - y8 - 1, aE = yG.length - 1; 0 <= aE; aE--) cd >= yG[aE].bU && cd <= yG[aE].lk && (-1 === sm || yG[aE].lk - yG[aE].bU < yG[sm].lk - yG[sm].bU) && (sm = aE); - 1 !== sm && (nY = Math.floor(
					cz.measureText(yG[sm].ud).width), cz.fillStyle = d2.iM, cz.fillRect(hG - nY - y9, hE, nY + y9, yc), cz.fillStyle = d2.d3, cz.fillText(yG[sm].ud, Math.floor(hG - .5 * y9), hE + yc))
			}(yd - 2 * yc, yc), cz.textAlign = d1, cz.fillText(yX, yb, cu), cz.strokeStyle = d2.iS, cz.lineWidth = 1, cz.beginPath(), cz.moveTo(0, hE), cz.lineTo(hG, hE), cz.closePath(), cz.stroke())
	}
}

function ri() {
	var ck, cl, h9, yf, yg, dC, nT, w2, qU, yh, yi, yj, yk;
	this.h8 = 0, this.eu = 0, this.b = function() {
		yg = n7, yi = "rgba(0,100,0,0.8)", yj = "rgba(150,0,0,0.8)", w2 = !(yh = !0), qU = bO[bN], this.resize()
	}, this.resize = function() {
		cl = Math.floor((a0 ? .305 : .24) * cb), this.eu = Math.floor(.5 + .13 * cl), cl = Math.floor(6 * this.eu), ck = ce + Math.floor(.8 * this.eu) + cf, yk = Math.floor(.5 * this.eu), az.mC.font = ck, h9 = kp, yf = Math.floor(1 + .13 * this
			.eu), (dC = document.createElement("canvas")).width = cl, dC.height = this.eu, (nT = dC.getContext("2d", {
			alpha: !0
		})).font = ck, nT.textBaseline = d0, nT.textAlign = d1, this.yl()
	}, this.wS = function() {
		return a0 && a1 < 1.2 * a2
	}, this.x6 = function() {
		this.wS() ? this.h8 = hG - cl - kp : this.h8 = Math.floor(gI.ym() + (hG - gI.ym() - g4.cl - cl) / 2 - .5 * kp)
	}, this.ga = function() {
		w2 && (w2 = !1, this.yl())
	}, this.yl = function() {
		nT.clearRect(0, 0, cl, this.eu), nT.fillStyle = yh ? yi : yj, nT.fillRect(0, 0, cl, this.eu), nT.fillStyle = d2.iQ, this.yn(), this.yo(), nT.fillStyle = bO[bN] >= bP.fE(bN) ? d2.ik : d2.d3, nT.fillText(gM.hP(qU), Math.floor(cl / 2), yk),
			nT.fillStyle = d2.d3, nT.fillRect(0, 0, cl, 1), nT.fillRect(0, 0, 1, this.eu), nT.fillRect(0, this.eu - 1, cl, 1), nT.fillRect(cl - 1, 0, 1, this.eu)
	}, this.yn = function() {
		var mq = x0(Math.floor((bP.yp() - 1) * this.eu / 9), this.eu - yf);
		nT.fillRect(0, mq, yf, this.eu - mq), nT.fillRect(cl - yf, mq, yf, this.eu - mq)
	}, this.yo = function() {
		nT.fillRect(yf, this.eu - yf, Math.floor((cl - 2 * yf) * bO[bN] / yg), yf)
	}, this.fA = function() {
		0 !== dw[bN] && 2 !== dx[bN] && qU !== bO[bN] && (yg = u9(bO[bN], yg), yh = bO[bN] > qU && 10 <= bO[bN], qU = bO[bN], w2 = !0)
	}, this.cy = function() {
		0 === dw[bN] || hm || 2 === dx[bN] || cz.drawImage(dC, this.h8, h9)
	}
}

function rj() {
	var yr, ys, yt, yu, yv, yw, yx, yy, yz, z0, z1, z2, z3, z4, z5, z6, z7, z8, z9, title, zA, zB, zC, zD, zE, position, zF, zG, zH, zI, zJ = 1;

	function zM() {
		yx.clearRect(0, 0, yr, wi), yx.fillStyle = d2.ix, yx.fillRect(0, 0, yr, z2), yx.fillStyle = d2.iL, yx.fillRect(0, z2, yr, wi - z2), yq[bN] >= position && zP(yq[bN] - position, d2.ih), 0 !== yq[bN] && 0 === position && zP(0, d2.j1), -1 !==
			zE && zP(zE, d2.iP), yx.fillStyle = d2.d3, yx.fillRect(0, z2, yr, 1), yx.fillRect(0, 0, yr, vn), yx.fillRect(0, 0, vn, wi), yx.fillRect(yr - vn, 0, vn, wi), yx.fillRect(0, wi - vn, yr, vn), yx.font = ys, yx.textBaseline = d0, yx
			.textAlign = d1, yx.fillText(title, Math.floor(yr / 2), Math.floor(z0 + yt / 2));
		var eb, bd = yq[bN] < position + yv - 1 ? 1 : 2;
		for (yx.font = yu, yx.textAlign = uH, eb = yv - bd; 0 <= eb; eb--) zQ(gm[eb + position]), zR(eb, eb + position, gm[eb + position]);
		for (yx.textAlign = vj, eb = yv - bd; 0 <= eb; eb--) zQ(gm[eb + position]), zS(eb, gm[eb + position]);
		2 == bd && (zQ(bN), yx.textAlign = uH, zR(yv - 1, yq[bN], bN), yx.textAlign = vj, zS(yv - 1, bN)), 0 === position && (bd = .7 * z3 / ch.get(4).height, yx.setTransform(bd, 0, 0, bd, Math.floor(z4 + .58 * z3 + .5 * bd * ch.get(4).width), Math
			.floor(z0 + yt + .4 * z3)), yx.imageSmoothingEnabled = !0, yx.drawImage(ch.get(4), -Math.floor(ch.get(4).width / 2), -Math.floor(ch.get(4).height / 2)), yx.setTransform(1, 0, 0, 1, 0, 0))
	}

	function zQ(player) {
		eO && (yx.fillStyle = fR.zU[fR.ob[fR.fS[player]]])
	}

	function zP(aE, sr) {
		yx.fillStyle = sr, aE = yv - 1 < aE ? yv - 1 : aE;
		sr = Math.floor((aE === yv - 1 ? 2 : 0 === aE ? 1.15 : 1) * z3), sr = aE === yv - 2 ? Math.floor(z2 + 9.15 * z3) - Math.floor(z2 + 8.15 * z3) : sr;
		yx.fillRect(0, Math.floor(z2 + (aE + (0 === aE ? 0 : .15)) * z3), yr, sr)
	}

	function zR(zW, zX, aE) {
		yx.fillText(zA[zX], z4, Math.floor(z0 + yt + (zW + .5) * z3)), 1 === dx[aE] && (yx.font = vk + yu);
		zX = Math.floor(z0 + yt + (zW + .5) * z3);
		yx.fillText(z8[aE] === aE ? hQ[aE] : z7[z8[aE] % bZ], z5, zX), 0 !== dx[aE] && (yx.font = yu), aE < dv && 2 !== dx[aE] || yx.fillRect(z5, zX + .35 * zJ, z9[aE], Math.max(1, .1 * zJ))
	}

	function zS(zW, aE) {
		yx.fillText(bv[aE], z6, Math.floor(z0 + yt + (zW + .5) * z3))
	}

	function zg(h9) {
		return (h9 -= kp + z2) < 0 ? Math.floor(h9 / z3) - 1 : h9 < (yv - 1) * z3 ? Math.floor(h9 / z3) : h9 < wi - z2 ? yv - 1 : (h9 -= wi - z2, yv + Math.floor(h9 / z3))
	}

	function tL(h8, h9) {
		return kp <= h8 && h8 < kp + yr && kp <= h9 && h9 < kp + wi
	}
	this.b = function() {
		var aE, v, eb;
		for (zG = !1, title = "LEADERBOARD", yv = a0 ? 6 : 10, position = zI = zH = zF = 0, zD = !(zE = -1), zB = new Uint16Array(yv + 1), zC = new Uint32Array(yv + 1), yz = bZ, gm = new Uint16Array(yz), yq = new Uint16Array(yz), aE = yz -
			1; 0 <= aE; aE--) gm[aE] = aE, yq[aE] = aE;
		this.resize(!0), z7 = [], z8 = new Uint16Array(bZ), z9 = new Uint16Array(bZ);
		var zK = Math.floor(yr - z5 - z4 - yy),
			zL = 0;
		for (zA = new Array(bZ), yx.font = yu, aE = bZ - 1; 0 <= aE; aE--)
			if (zA[aE] = aE + 1 + ".", z8[aE] = aE, z9[aE] = Math.floor(yx.measureText(hQ[aE]).width), z9[aE] > zK) {
				for (v = hQ[aE], eb = hQ[aE].length - 1; 1 <= eb && (v = v.substring(0, eb), z9[aE] = Math.floor(yx.measureText(v + "...").width), !(z9[aE] <= zK)); eb--);
				v += "...", z7.push(v), z8[aE] = bZ + zL++
			} zM()
	}, this.resize = function(b) {
		if (wi = a0 ? (yr = Math.floor(.335 * cb), Math.floor(yv * yr / 8)) : (yr = Math.floor(.27 * cb), Math.floor(yv * yr / 10)), yr = Math.floor(.97 * yr), (yw = document.createElement("canvas")).width = yr, yw.height = wi, yx = yw
			.getContext("2d", {
				alpha: !0
			}), z0 = .025 * yr, yt = .16 * yr, z1 = 0 * yr, z2 = Math.floor(.45 * z0 + yt), z3 = (wi - yt - 2 * z0 - z1) / yv, ys = ce + Math.floor(.55 * yt) + cf, zJ = Math.floor((a0 ? .67 : .72) * z3), yu = zJ + cf, yx.font = yu, z4 = Math
			.floor(.04 * yr), z5 = Math.floor((a0 ? .195 : .18) * yr), yy = Math.floor(yx.measureText("00920600").width), yx.font = ys, z6 = yr - z4, !b) {
			yx.font = yu;
			for (var aE = bZ - 1; 0 <= aE; aE--) z9[aE] = Math.floor(yx.measureText(z8[aE] === aE ? hQ[aE] : z7[z8[aE] % bZ]).width);
			zM()
		}
	}, this.ym = function() {
		return yr
	}, this.ga = function(ur) {
		zD && (ur || aL.fP() % hM.zN[hM.hN.zO] == 0) && (zD = !1, zM())
	}, this.fA = function() {
		! function() {
			for (var eb = yz - 1; 0 <= eb; eb--) 0 === dw[gm[eb]] && ! function(eb) {
				var ze = gm[eb];
				yz--;
				for (var aE = eb; aE < yz; aE++) gm[aE] = gm[aE + 1], yq[gm[aE]] = aE;
				gm[yz] = ze, yq[gm[yz]] = yz
			}(eb)
		}();
		for (var zc, i5 = yz - 1, eb = 0; eb < i5; eb++) bv[gm[eb]] < bv[gm[eb + 1]] && (zc = gm[eb], gm[eb] = gm[eb + 1], gm[eb + 1] = zc, yq[gm[eb]] = eb, yq[gm[eb + 1]] = eb + 1);
		! function() {
			for (var a3 = zD, bd = (zD = !0, yq[bN] >= yv - 1 ? yv - 2 : yv - 1), aE = bd; 0 <= aE; aE--)
				if (zB[aE] !== gm[aE] || zC[aE] !== bv[gm[aE]]) return;
			(bd != yv - 2 || zB[yv] === yq[bN] && zC[yv] === bv[bN]) && (zD = a3)
		}();
		for (var aE = yv - 1; 0 <= aE; aE--) zB[aE] = gm[aE], zC[aE] = bv[gm[aE]];
		zB[yv] = yq[bN], zC[yv] = bv[bN]
	}, this.cq = function(h8, h9) {
		return !!tL(h8, h9) && (zF = aL.aM, zG = !0, zH = zI = zg(h9), pX.q1() && (h8 = xQ(-1, zI, yv), zE !== (h8 = h8 === yv ? -1 : h8)) && (zE = h8, zM(), aL.co = !0), !0)
	}, this.p8 = function(h8, h9) {
		var a3, zf = zg(h9);
		return zG ? (a3 = position, (position = xQ(0, position += zH - zf, bZ - yv)) !== a3 && (zf = (zf = xQ(-1, zH = zf, yv)) !== yv && tL(h8, h9) ? zf : -1, zE = zf, zM(), aL.co = !0), !0) : (zf = (zf = xQ(-1, zf, yv)) === yv || !tL(h8, h9) ||
			pX.q1() ? -1 : zf, zE !== zf && (zE = zf, zM(), aL.co = !0))
	}, this.pf = function(h8, h9) {
		if (!zG) return !1;
		zG = !1;
		var zf = zg(h9);
		return pX.q1() && -1 !== zE && (zE = -1, zM(), aL.co = !0), aL.aM - zF < 350 && zI === zf && -1 !== (zf = (zf = xQ(-1, zf, yv)) !== yv && tL(h8, h9) ? zf : -1) && (h8 = gm[zf + position], zf === yv - 1 && yq[bN] >= position + yv - 1 && (
			h8 = bN), eO && displayDonationsHistory(h8, hQ, fs), 0 !== dw[h8]) && gT.hn(h8, 800, !1, 0), !0
	}, this.pB = function(h8, h9, deltaY) {
		var zh;
		return !(zG || hp || (zh = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !tL(h8, h9)) || (h8 = (h8 = xQ(-1, zg(h9), yv)) === yv || pX.q1() ? -1 : h8, 0 < deltaY ? position < bZ - yv && (position += Math.min(bZ - yv - position, zh), zE =
			h8, zM(), aL.co = !0) : 0 < position && (position -= Math.min(position, zh), zE = h8, zM(), aL.co = !0), 0))
	}, this.cy = function() {
		cz.drawImage(yw, kp, kp)
	}
}

function rk() {
	var dC, nT, h8, h9, vv, zi, l4, zj, cj, zk, tR, bS, zl, zm, zn, zo, zp, zq;

	function zt() {
		nT.clearRect(0, 0, g4.cl, g4.eu), nT.fillStyle = d2.iM, nT.fillRect(0, 0, g4.cl, g4.eu), nT.fillStyle = d2.ib, df = 0 < zn ? zn : Math.sqrt(bS[4] / 1e4), nT.fillRect(0, g4.eu - vv - 1, Math.floor(df * g4.cl), vv), nT.fillStyle = d2.d3, nT
			.fillRect(0, 0, g4.cl, 1), nT.fillRect(0, 0, 1, g4.eu), nT.fillRect(g4.cl - 1, 0, 1, g4.eu), nT.fillRect(0, g4.eu - 1, g4.cl, 1), nT.fillRect(0, g4.eu - vv - 1, g4.cl, 1);
		for (var df, zv, a3 = 0, aE = 0; aE < tR.length; aE++) zl[aE] ? (nT.textAlign = uH, zv = Math.floor((zi - vv + 2 * zj) * (aE - a3 + 1) / (tR.length + 1) - .7 * zj), nT.fillText(tR[aE], l4, zv), nT.textAlign = vj, 5 === aE && 0 !== dw[bN] &&
			bO[bN] >= bP.fE(bN) ? (nT.fillStyle = d2.iz, nT.fillText(zs(aE), g4.cl - l4, zv), nT.fillStyle = d2.d3) : nT.fillText(zs(aE), g4.cl - l4, zv)) : a3++
	}

	function zs(aE) {
		return aE < 3 ? bS[aE].toString() : 3 === aE || 4 === aE || 5 === aE ? g4.um(bS[aE] / 100, 2) : aE < 7 ? gM.hP(bS[aE]) : aE === 7 ? g4.yp(bS[7]) : aE === 8 ? utils.getMaxTroops(bv, bN) : utils.getDensity(bO, bv, bN)
	}

	function zr() {
		bv[bN] !== bS[6] && (bS[6] = bv[bN], zk++)
	}
	this.b = function() {
		zn = zo = 0, (tR = new Array(8))[0] = "Humans", tR[1] = fs ? "Players" : "Bots", tR[2] = "Spectators", tR[3] = "Threshold", tR[4] = "Occupation", tR[5] = "Interest", tR[6] = "Income", tR[7] = "Time", tR.push("Max Troops", "Density"), zq =
			qn - bJ(qn, 100), (bS = new Array(tR.length))[0] = fs ? 0 : dv, bS[1] = fs ? fT : fl, bS[2] = oQ, bS[3] = 0, bS[4] = bJ(1e4 * bv[0], qn), bS[5] = 700, bS[6] = 0, zr(), bS[7] = 0, zm = zs(6), zl = new Array(tR.length);
		for (var aE = tR.length - 1; 0 <= aE; aE--) zl[aE] = !0;
		zp = 0, zp = fs ? (zl[0] = !1, zl[2] = !1, zl[3] = !1, 3) : (zl[3] = !1, 1), zk = 0, this.resize()
	}, this.resize = function() {
		this.cl = Math.floor((a0 ? .1646 : .126) * 1.25 * cb), this.eu = Math.floor(1.18 * this.cl), vv = Math.floor(.04 * this.cl), l4 = Math.floor(.035 * this.cl), zj = .04 * this.cl, zi = this.eu, this.eu -= Math.floor(zp * (this.eu - 2 *
			vv) / tR.length), cj = Math.floor(.7 * (zi - vv) / tR.length), cj = ce + cj + cf, (dC = document.createElement("canvas")).width = this.cl, dC.height = this.eu, (nT = dC.getContext("2d", {
			alpha: !0
		})).font = cj, nT.textBaseline = d0, nT.lineWidth = 1, this.qh(), this.x6(), gL.x6(), zt()
	}, this.x6 = function() {
		h8 = hG - this.cl - kp
	}, this.zu = function() {
		h9 = kp
	}, this.qh = function() {
		h9 = kp + (gL.wS() && 0 !== dw[bN] && !hm ? gL.eu + kp : 0)
	}, this.ga = function(ur) {
		0 < zk && (ur || 100 <= zk) && (zk = 0, zt())
	}, this.sz = function() {
		return bS[7]
	}, this.yp = function(value) {
		var m2 = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * m2) / 1e3);
		return value < 10 ? m2 + ":0" + value : m2 + ":" + value
	}, this.um = function(bc, wB) {
		return bc.toFixed(wB) + "%"
	}, this.fA = function() {
		var a05, per;
		zl[0] && oR - oQ !== bS[0] && (bS[0] = oR - oQ, zk++), fT - bS[0] !== bS[1] && (bS[1] = fT - bS[0], zk++), this.g5(), (a05 = bP.a06(bN)) !== bS[5] && (bS[5] = a05, zk++), zr(), bS[7] += aL.a07, a05 = zs(7), zm !== a05 && (zm = a05, zk +=
			100), a05 = eO ? gP.od() : bv[gm[0]], per = bJ(1e4 * a05, qn), bS[3] = a05, bS[4] !== per && (zk++, bS[4] = per), 8 === fq && function() {
			if (0 === dw[0]) g7.oA.oI(1);
			else {
				if (0 !== dw[1]) return;
				g7.oA.oI(0)
			}
			return 1
		}() || bS[3] < zq || bS[3] !== qn && ! function() {
			for (var aE = fT - 1; 0 <= aE; aE--)
				if (0 < bV[fU[aE]].length) return;
			return 1
		}() || g7.oA.oI(-1)
	}, this.g5 = function() {
		zl[2] && oQ !== bS[2] && (bS[2] = oQ, zk++)
	}, this.a08 = function(aE) {
		var qH, a09, a3;
		return 2 !== gb && (aE === qr ? (zn = 0, zt(), !1) : (-1 !== aE || 0 !== zo) && (a09 = zn, zn = cH ? aE / qr : (a3 = performance.now(), 0 <= aE && (qH = a3 - 392 * aE, zo = 0 === aE || qH < zo ? qH : zo), 1 < (zn = (a3 - zo) / (392 *
			qr)) ? 1 : zn), zt(), zn !== a09))
	}, this.cy = function() {
		cz.drawImage(dC, h8, h9)
	}
}

function rl() {
	var pb, a0A, cl, eu, uz, a0B, a0C, wT, dC, hd, a0D;

	function cx() {
		return Math.floor((hG - cl) / 2) < cU.eu + 2 * kp ? cu - eu - 4 * kp - cU.eu : cu - eu - 2 * kp
	}
	this.a0E = -1, this.b = function() {
		a0D = pb = !1, uz = .61, a0B = .07, a0C = .09, hd = wT = eu = 0, this.a0E = -1
	}, this.resize = function() {
		var nT, hD, fQ, a0J, a0K, tV;
		pb && (cl = x0(cl = a0 ? Math.floor(.69 * cb) : Math.floor(.5 * cb), u9(a1 - 2 * kp, 10)), cl = x0(cl, Math.floor(3.57 * u9(a2 - 2 * kp, 3))), eu = Math.floor(.28 * cl), (dC = document.createElement("canvas")).width = cl, dC.height = eu,
			nT = dC.getContext("2d", {
				alpha: !0
			}), hD = Math.floor(1 + eu / 40), nT.clearRect(0, 0, cl, eu), nT.fillStyle = d2.iM, nT.fillRect(hD, hD, cl - 2 * hD, eu - 2 * hD), nT.lineJoin = "bevel", nT.lineWidth = 2 * hD, nT.strokeStyle = d2.d3, nT.strokeRect(hD, hD, cl -
				2 * hD, eu - 2 * hD), nT.imageSmoothingEnabled = !0, fQ = ch.get(a0A), a0J = fQ.width, a0K = fQ.height, tV = (21 === a0A ? .666 : 1) * uz * eu / a0K, nT.setTransform(tV, 0, 0, tV, Math.floor((cl - tV * a0J) / 2), Math.floor((
				eu - tV * a0K) / 2)), nT.drawImage(fQ, 0, 0), nT.setTransform(1, 0, 0, 1, Math.floor(cl - a0C * eu - a0B * eu - hD), Math.floor(hD + a0B * eu)),
			function(nT, bU) {
				nT.lineWidth = Math.floor(1 + eu / 80), nT.strokeStyle = d2.d3, nT.beginPath(), nT.moveTo(0, 0), nT.lineTo(bU, bU), nT.moveTo(0, bU), nT.lineTo(bU, 0), nT.stroke()
			}(nT, Math.floor(a0C * eu)), nT.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(aR, a0G, a0H, a0I) {
		pb || a0I && a0D || (a0A = a0H ? 21 : aR ? 1 : 2, pb = a0D = !0, this.resize(), nQ.lP(), cU.wv(), hd = aL.aM, -1 === this.a0E && (this.a0E = aL.fP()), wT = a0G ? 1 : 0)
	}, this.fA = function() {
		!pb || 1 <= wT || (wT = 1 < (wT += 5e-4 * (aL.aM - hd)) ? 1 : wT, hd = aL.aM, aL.co = !0)
	}, this.cq = function(h8, h9) {
		return !(!pb || wT <= 0 || (h8 -= Math.floor((hG - cl) / 2), h9 -= cx(), h8 < 0) || h9 < 0 || cl < h8 || eu < h9 || (cl - eu / 3 < h8 && h9 < eu / 3 && (pb = !1, aL.co = !0), 0))
	}, this.cy = function() {
		!pb || wT <= 0 || (cz.globalAlpha = wT, cz.drawImage(dC, Math.floor((hG - cl) / 2), cx()), cz.globalAlpha = 1)
	}
}

function a0M() {
	this.a0N = !1, this.iE = !1, this.ql = !1, this.a0O = [0, 0, 0, 0], this.a0P = function() {
		var hD, hE, hF, hH;
		this.ql = this.ql || this.iE, (this.iE || this.a0N && this.ql) && (hD = i3.a0Q[0], hE = i3.a0Q[1], hF = i3.a0Q[2], hH = i3.a0Q[3], hD = hD < this.a0O[0] ? this.a0O[0] : hD, hE = hE < this.a0O[1] ? this.a0O[1] : hE, hF = hF > this.a0O[2] ?
			this.a0O[2] : hF, hH = hH > this.a0O[3] ? this.a0O[3] : hH, this.iE = !1, this.a0N = !1, hD === this.a0O[0] && hE === this.a0O[1] && hF === this.a0O[2] && hH === this.a0O[3] ? this.qm() : hD <= hF && hE <= hH && r8.putImageData(
				r9, 0, 0, hD, hE, hF - hD + 1, hH - hE + 1))
	}, this.qm = function() {
		this.ql && this.a0O[2] >= this.a0O[0] && this.a0O[3] >= this.a0O[1] && r8.putImageData(r9, 0, 0, this.a0O[0], this.a0O[1], this.a0O[2] - this.a0O[0] + 1, this.a0O[3] - this.a0O[1] + 1), this.ql = !1
	}, this.oW = function() {
		this.a0O[2] >= this.a0O[0] && this.a0O[3] >= this.a0O[1] && r8.putImageData(r9, 0, 0, this.a0O[0], this.a0O[1], this.a0O[2] - this.a0O[0] + 1, this.a0O[3] - this.a0O[1] + 1), this.ql = !1
	}, this.b = function() {
		var h8, h9;
		this.a0N = !1, this.iE = !1, this.ql = !1, this.a0O[0] = az.b0, this.a0O[1] = az.b1, this.a0O[2] = this.a0O[3] = 0;
		loop: for (h8 = 1; h8 < az.b0 - 1; h8++)
			for (h9 = az.b1 - 2; 1 < h9; h9--)
				if (1 === a0R[bW.my(h8, h9) + 2]) {
					this.a0O[0] = h8;
					break loop
				} loop: for (h9 = 1; h9 < az.b1 - 1; h9++)
			for (h8 = az.b0 - 2; 1 < h8; h8--)
				if (1 === a0R[bW.my(h8, h9) + 2]) {
					this.a0O[1] = h9;
					break loop
				} loop: for (h8 = az.b0 - 2; 0 < h8; h8--)
			for (h9 = az.b1 - 2; 1 < h9; h9--)
				if (1 === a0R[bW.my(h8, h9) + 2]) {
					this.a0O[2] = h8;
					break loop
				} loop: for (h9 = az.b1 - 2; 0 < h9; h9--)
			for (h8 = az.b0 - 2; 1 < h8; h8--)
				if (1 === a0R[bW.my(h8, h9) + 2]) {
					this.a0O[3] = h9;
					break loop
				}
	}
}

function a0S() {
	this.pb = !1, this.tl = null, this.a0T = 0, this.cl = null, this.eu = null, this.a0U = .013, this.a0V = .022, this.a0W = .025;
	this.a0Y = 3, this.a0Z = 1.2, this.a0a = .2, this.a0b = .235, this.a0c = .9, this.a0d = .08;
	var a0f, a0e = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"],
		a0g = [-1e6, -1e6];
	this.position = [0, 0], this.a0i = [0, 0], this.b = function() {
		this.tl = [null, null], this.pb = !1, this.a0T = 0
	}, this.l = function(id) {
		this.pb = !0, this.resize(), this.a0T = id, this.cg(), pn.l(!1), aL.co = !0
	}, this.fA = function() {
		this.pb && this.cg()
	}, this.cg = function() {
		aL.aM - 12e4 >= a0g[this.a0T] && (a0g[this.a0T] = aL.aM, this.a0i = [0, 0], g6.yJ(0, 1 + this.a0T)) && jF.a0j(0, this.a0T)
	}, this.resize = function() {
		if (this.pb) {
			var aE;
			for (this.cl = this.a0k(a0 ? .85 : .66, .75, a1, a2), this.eu = Math.floor(this.cl / .75), aE = 1; 0 <= aE; aE--) this.tl[aE] && (this.tl[aE][4] = ce + Math.floor(this.tl[aE][5] * this.eu / 10) + cf);
			a0f = ce + Math.floor(.1 * this.eu) + cf
		}
	}, this.a0k = function(cZ, dB, cl, eu) {
		return cl < dB * eu ? Math.floor(cZ * cl) : Math.floor(dB * cZ * eu)
	}, this.a0l = function(cd, a0m, a0n, wB, a0o, a0p, zW) {
		this.position[cd] = zW;
		for (var wQ, d6 = a0m.length, ck = ce + Math.floor(a0o * this.eu / 10) + cf, ad = (this.a0q(a0m, ck, a0p * this.cl), [
				[], d6, -1, wB, ck, a0o, 10 * zW
			]), aE = 0; aE < d6; aE++) wQ = {
			name: a0m[aE].name,
			value: a0m[aE].ng / a0n,
			colorIndex: a0m[aE].colorIndex
		}, ad[0].push(wQ);
		this.tl[cd] = ad, this.a0r(cd);
		a0p = this.tl[cd][0][0].name;
		1 === cd && (a0p = "[" + a0p + "]"), 0 === zW && a0s.cc(cd, a0p), aL.co = !0
	}, this.a0r = function(aE) {
		this.tl[aE][0].sort(function(eb, em) {
			return em.value - eb.value
		})
	}, this.a0t = function(cd, name, a0u, a0v) {
		if (this.tl && this.tl[cd]) {
			var aE, ue = !1;
			if (0 === cd) {
				for (aE = 0; aE < this.tl[cd][0].length; aE++)
					if (name === this.tl[cd][0][aE].name && a0u > .99 * this.tl[cd][0][aE].value && a0u < 1.01 * this.tl[cd][0][aE].value) {
						this.tl[cd][0][aE].value = a0v, ue = !0;
						break
					} ue || this.tl[cd][0].push({
					name: name,
					value: a0v
				})
			} else {
				for (aE = 0; aE < this.tl[cd][0].length; aE++)
					if (name === this.tl[cd][0][aE].name) {
						this.tl[cd][0][aE].value += 32 < this.tl[cd][0][aE].value ? (64 - this.tl[cd][0][aE].value) / 256 : .25, this.tl[cd][0][aE].value *= 1 / (383 / 384), ue = !0;
						break
					} for (aE = 0; aE < this.tl[cd][0].length; aE++) this.tl[cd][0][aE].value *= 383 / 384;
				ue || this.tl[cd][0].push({
					name: name,
					value: .25
				})
			}
			this.a0r(cd)
		}
	}, this.a0q = function(a0m, ck, cn) {
		for (var aE = a0m.length - 1; 0 <= aE; aE--)
			for (; 3 < a0m[aE].name.length && cm.measureText(a0m[aE].name, ck) > cn;) a0m[aE].name = a0m[aE].name.substring(0, a0m[aE].name.length - 4) + "..."
	}, this.cq = function(dj, dk) {
		return !!this.pb && (dj -= (hG - this.cl) / 2, dk -= (cu - this.eu) / 2, dj < 0 || dj > this.cl || dk < 0 || dk > this.eu ? (this.pb = !1, 0 === aT.pp() && pn.l(!0), aL.co = !0) : (dk = dk < .3 * this.eu ? 1 : dk < .85 * this.eu ? (dk = (
				0 === this.a0T ? 14.1 : 3) * (dk - .3 * this.eu) / (.55 * this.eu), Math.floor(1 + dk * dk)) : 0 === this.a0T ? 200 : 10, dj < this.cl / 2 ? this.a0i[this.a0T] = -dk : this.a0i[this.a0T] = dk, a0g[this.a0T] + 50 > aL.aM ||
			(a0g[this.a0T] = aL.aM, g6.yJ(0, 1 + this.a0T) && jF.a0j(0, this.a0T)), !0))
	}, this.cy = function() {
		var hD, hE, nY, nZ, a0w, a0x, qJ, qK;
		this.pb && (hD = (hG - this.cl) / 2, hE = (cu - this.eu) / 2, nY = this.a0U * this.cl, nZ = this.a0Y * nY, a0w = this.a0V * this.cl, a0x = this.a0Z * a0w, qJ = this.a0W * this.cl, qK = Math.floor(.25 * this.eu), cz.setTransform(1, 0, 0,
				1, hD, hE), cz.fillStyle = 0 === this.a0T ? d2.it : d2.ir, cz.fillRect(0, 0, this.cl, qK), cz.fillStyle = d2.iL, cz.fillRect(0, qK, this.cl, this.eu - qK), cz.fillStyle = d2.d3, cz.font = a0f, cz.textBaseline = d0, cz
			.textAlign = d1, cz.fillText(a0e[this.a0T], Math.floor(this.cl / 2), Math.floor(.135 * this.eu)), cz.font = ce + Math.floor(.025 * this.eu) + cf, cz.fillText(a0e[this.a0T + 2], Math.floor(this.cl / 2), Math.floor(.2125 * this
			.eu)), cz.beginPath(), cz.moveTo(this.cl / 4, 0), cz.lineTo(this.cl / 2 - nY, 0), cz.lineTo(this.cl / 2, -nZ), cz.lineTo(this.cl / 2 + nY, 0), cz.lineTo(this.cl - a0w, 0), cz.lineTo(this.cl + a0x, -a0x), cz.lineTo(this.cl, a0w),
			cz.lineTo(this.cl, this.eu / 2 - nY), cz.lineTo(this.cl + nZ, this.eu / 2), cz.lineTo(this.cl, this.eu / 2 + nY), cz.lineTo(this.cl, this.eu - a0w), cz.lineTo(this.cl + a0x, this.eu + a0x), cz.lineTo(this.cl - a0w, this.eu), cz
			.lineTo(this.cl / 2 + nY, this.eu), cz.lineTo(this.cl / 2, this.eu + nZ), cz.lineTo(this.cl / 2 - nY, this.eu), cz.lineTo(a0w, this.eu), cz.lineTo(-a0x, this.eu + a0x), cz.lineTo(0, this.eu - a0w), cz.lineTo(0, this.eu / 2 + nY),
			cz.lineTo(-nZ, this.eu / 2), cz.lineTo(0, this.eu / 2 - nY), cz.lineTo(0, a0w), cz.lineTo(-a0x, -a0x), cz.lineTo(a0w, 0), cz.lineTo(this.cl / 4, 0), cz.lineTo(this.cl / 4, qJ), cz.lineTo(qJ, qJ), cz.lineTo(qJ, this.eu - qJ), cz
			.lineTo(this.cl - qJ, this.eu - qJ), cz.lineTo(this.cl - qJ, qJ), cz.lineTo(this.cl / 4, qJ), cz.fill(), this.tl[this.a0T] && this.a0y(qK), this.a0z(qK), cz.setTransform(1, 0, 0, 1, 0, 0))
	}, this.a0z = function(qK) {
		var nY = u9(2, Math.floor(.06 * this.cl)),
			uz = (nY -= nY % 2, u9(2, Math.floor(.01 * this.cl))),
			qK = (uz -= uz % 2, Math.floor(.82 * qK));
		cz.fillRect(nY, qK, nY, uz), cz.fillRect(this.cl - nY - nY, qK, nY, uz), cz.fillRect(Math.floor(this.cl - nY - nY + (nY - uz) / 2), Math.floor(qK - (nY - uz) / 2), uz, nY)
	}, this.a0y = function(qK) {
		var h9;
		cz.font = this.tl[this.a0T][4];
		for (var aE = this.tl[this.a0T][1] - 1; 0 <= aE; aE--) cz.textAlign = vj, h9 = Math.floor(this.a0d * this.eu + qK + aE * ((1 - 2 * this.a0d) * this.eu - qK) / 9), cz.fillText(this.tl[this.a0T][0][aE].value.toFixed(this.tl[this.a0T][3]),
			Math.floor(this.a0c * this.cl), h9), cz.fillText(aE + 1 + this.tl[this.a0T][6] + ".", Math.floor(this.a0a * this.cl), h9), cz.textAlign = uH, cz.fillText(this.tl[this.a0T][0][aE].name, Math.floor(this.a0b * this.cl), h9)
	}
}

function a10() {
	var h8, h9, eu, a11, a12, a13, a14, a15, a16, cl, a17, a18;
	this.pb = !1, this.b = function(v, a19) {
		if (13 <= q && q < 18) return a19 ? void(a17 = v) : a17 !== v ? void 0 : void n.saveString(200, v);
		a19 && ((cv.tl[1].oK.pb || cv.tl[2].oK.pb) && cv.pq(), pn.l(!1), a17 = v, (a18 = document.createElement("a")).appendChild(document.createTextNode(a17)), this.pb = !0, a18.title = a17, a18.target = "_blank", a18.href = a17, a18.style
			.textAlign = "center", a18.style.color = d2.d3, a18.style.position = "absolute", a18.style.padding = "0px", a18.style.margin = "0px", this.resize(), document.body.appendChild(a18), aL.co = !0)
	}, this.lP = function() {
		return !(!this.pb || (document.body.removeChild(a18), this.pb = !1))
	}, this.cq = function(dj, dk) {
		return !!this.pb && ((dj < h8 || dk < h9 || h8 + cl < dj || h9 + eu < dk || h8 + cl - a11 < dj && dk < h9 + a11) && (aL.co = !0, this.pb = !1, document.body.removeChild(a18), 0 === aT.pp()) && pn.l(!0), !0)
	}, this.resize = function() {
		var ck, a1A;
		this.pb && (a15 = Math.floor(.8 * (a0 ? a2 < a1 ? .6 : .55 : .4) * cb), a11 = Math.floor(.15 * a15), a12 = Math.floor(.35 * a11), a13 = Math.floor(.5 * a11), a14 = Math.floor(2.5 * a13), eu = a11 + a12 + 3 * a13, ck = ce + Math.floor(
			a12 / lX) + cf, a16 = Math.floor(lX * cm.measureText(a17, ck)), a1A = cl = (a15 < a16 ? a16 : a15) + 2 * a14, cl = Math.min(cl, a1 - 2 * (a0 ? 2 : 1) * kp), ck = ce + Math.floor(cl / a1A * a12 / lX) + cf, a16 = Math.floor(lX *
			cm.measureText(a17, ck)), h8 = Math.floor((hG - cl) / 2), h9 = Math.floor((cu - eu) / 2), a18.style.font = ck, a18.style.top = Math.floor((h9 + 1.4 * a13 + a11) / lX) + "px", a18.style.left = Math.floor((h8 + (cl - a16) / 2) /
			lX) + "px")
	}, this.cy = function() {
		this.pb && (cz.fillStyle = d2.iM, cz.fillRect(h8, h9 + a11, cl, eu - a11), cz.fillStyle = d2.j5, cz.fillRect(h8, h9, cl, a11), cz.fillStyle = d2.d3, cz.lineWidth = qL, cz.strokeStyle = d2.d3, cz.strokeRect(h8, h9, cl, eu), cz.fillRect(h8,
			h9 + a11, cl, qL), cz.font = ce + Math.floor(.48 * a11) + cf, cz.textAlign = d1, cz.textBaseline = d0, cz.fillText("You are leaving Territorial.io!", Math.floor(h8 + (cl - .5 * a11) / 2), Math.floor(h9 + .55 * a11)), cI.tj(
			Math.floor(h8 + cl - .8 * a11), Math.floor(h9 + .25 * a11), Math.floor(.5 * a11)), cz.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function a1B() {
	var l4, tR, h8 = [0, 0, 0, 0, 0],
		h9 = [0, 0, 0, 0, 0],
		hz = [1, 1, 1, 1, 1],
		aR = [!0, !0, !0, !0, !0],
		fQ = (this.ai = [!0, !0, !0, !0, !0], null);
	this.a1C = function(so, a1D) {
		fQ = so, aR = a1D, tR = [rU.a1E, rU.a1F, rU.a1G, rU.a1H, rU.a1I], this.b()
	}, this.b = function() {
		if (ch.ci()) {
			var aE, nY = Math.floor((a0 ? .261 : .195) * cb),
				nZ = Math.floor(.9 * nY),
				uz = Math.floor(.17 * nZ);
			if (l4 = a0 ? 2 * kp : kp, hz[0] = nY / fQ[0].width, hz[1] = nZ / fQ[1].width, hz[2] = uz / fQ[2].height, hz[3] = uz / fQ[3].height, hz[4] = uz / fQ[4].height, hz[3] *= 1.07, h8[0] = l4, h8[1] = l4, h8[2] = l4, h8[3] = l4, h8[4] =
				Math.floor(2 * l4 + hz[3] * fQ[3].width), h9[0] = l4, h9[1] = h9[0] + l4 + hz[0] * fQ[0].height, h9[2] = h9[1] + l4 + hz[1] * fQ[1].height, h9[3] = h9[2] + l4 + hz[2] * fQ[2].height, h9[4] = h9[3], !aR[0])
				for (aE = 0; aE < 5; aE++) h9[aE] -= hz[0] * fQ[0].height + l4;
			if (!aR[1])
				for (aE = 2; aE < 5; aE++) h9[aE] -= hz[1] * fQ[1].height + l4
		}
	}, this.pb = function() {
		return !(7 === aT.pp() && a0)
	}, this.cq = function(dj, dk, a19) {
		if (fQ && this.pb())
			for (var aE = aR.length - 1; 0 <= aE; aE--)
				if (aR[aE] && this.ai[aE] && h8[aE] < dj && h9[aE] < dk && dj < h8[aE] + hz[aE] * fQ[aE].width && dk < h9[aE] + hz[aE] * fQ[aE].height) return pm.b(tR[aE], a19), !0;
		return !1
	}, this.cy = function() {
		if (fQ && this.pb()) {
			var aE;
			for (cz.imageSmoothingEnabled = !0, aE = 0; aE < 5; aE++) aR[aE] && this.ai[aE] && (cz.setTransform(hz[aE], 0, 0, hz[aE], h8[aE], h9[aE]), cz.drawImage(fQ[aE], 0, 0));
			cz.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function sR() {
	this.id = 0, this.v9 = 0;
	var a1J = null,
		a1K = !1;
	this.b = function() {
		var tO, ae, ag;
		n ? this.id = 1 : m ? this.id = 2 : (function() {
			try {
				if (!(a1J = window.localStorage)) return a1J = null;
				a1J.setItem("testLS", "1"), a1J.removeItem("testLS")
			} catch (error) {
				return a1J = null
			}
			a1K = !0
		}(), tO = this, a1K && (ae = Number(a1J.getItem("zt0")), ag = Number(a1J.getItem("zt1")), ae && ag ? (tO.id = ae, tO.v9 = Math.floor(Date.now() / 3e5) - ag) : (a1J.setItem("zt0", "" + Math.floor(3 + Math.random() * (Math.pow(2,
			20) - 3))), a1J.setItem("zt1", "" + Math.floor(Date.now() / 3e5)))))
	}
}

function rm() {
	var a0T, a1P, a1Q;

	function a1V(aE) {
		var button = rH.sc[aE],
			h8 = button.h8,
			h9 = button.h9,
			cl = button.cl,
			eu = button.eu;
		cz.fillStyle = button.a1T, cz.fillRect(h8, h9, cl, eu), aE === a0T && (cz.fillStyle = a1Q, cz.fillRect(h8, h9, cl, eu)), cz.lineWidth = qL, cz.strokeStyle = a1P, cz.strokeRect(h8, h9, cl, eu),
			function(button) {
				var h8 = button.h8,
					h9 = button.h9,
					cl = button.cl,
					eu = button.eu;
				cz.textAlign = d1, cz.textBaseline = d0, cz.font = button.font, cz.fillStyle = a1P, cz.fillText(button.v5, Math.floor(h8 + cl / 2), Math.floor(h9 + eu / 2 + .1 * button.cj))
			}(button)
	}
	this.cl = 0, this.eu = 0, this.h9 = 0, this.l4 = 0, this.b = function() {
		a0T = -1, a1P = d2.d3, a1Q = "rgba(255,255,255,0.16)", this.sc = new Array(7), this.eu = Math.floor((a0 ? .123 : .093) * cb), this.cl = Math.floor((a0 ? 3.96 : 4.2) * this.eu), this.l4 = Math.floor(.025 * this.cl);
		var a1R = Math.floor(.26 * this.eu),
			a1S = ce + a1R + cf;
		this.sc[0] = {
			h8: 0,
			h9: 0,
			cl: Math.floor(.6 * this.cl - this.l4 / 2),
			eu: this.eu,
			v5: "Multiplayer",
			font: a1S,
			a1T: "rgba(22,88,22,0.8)",
			cj: a1R
		}, a1R = Math.floor(.18 * this.eu), this.sc[1] = {
			h8: 0,
			h9: 0,
			cl: this.cl - this.sc[0].cl - this.l4,
			eu: this.eu,
			v5: "Single Player",
			font: ce + a1R + cf,
			a1T: "rgba(22,88,88,0.8)",
			cj: a1R
		}, this.sc[2] = {
			h8: 0,
			h9: 0,
			cl: this.cl,
			eu: Math.floor(.3 * this.eu),
			v5: "",
			font: this.sc[1].font,
			a1T: "rgba(100,0,0,0.8)",
			cj: this.sc[1].cj
		}, this.sc[3] = {
			h8: 0,
			h9: 0,
			cl: this.cl,
			eu: this.eu,
			v5: "Back",
			font: this.sc[0].font,
			a1T: "rgba(0,0,0,0.8)",
			cj: this.sc[0].cj
		}, this.sc[4] = {
			h8: 0,
			h9: 0,
			cl: this.cl,
			eu: Math.floor(.3 * this.eu),
			v5: "The game was updated!",
			font: this.sc[1].font,
			a1T: "rgba(100,0,0,0.8)",
			cj: this.sc[1].cj
		}, this.sc[5] = {
			h8: 0,
			h9: 0,
			cl: this.sc[0].cl,
			eu: Math.floor(.8 * this.eu),
			v5: "Reload",
			font: this.sc[0].font,
			a1T: "rgba(0,100,0,0.8)",
			cj: this.sc[0].cj
		}, this.sc[6] = {
			h8: 0,
			h9: 0,
			cl: this.sc[1].cl,
			eu: this.sc[5].eu,
			v5: "Back",
			font: this.sc[0].font,
			a1T: "rgba(0,0,0,0.8)",
			cj: this.sc[0].cj
		}, this.yR()
	}, this.yR = function() {
		this.h9 = Math.floor(.54 * cu), this.sc[0].h8 = Math.floor(.5 * hG - .5 * this.cl), this.sc[1].h8 = this.sc[0].h8 + this.sc[0].cl + this.l4, this.sc[2].h8 = this.sc[3].h8 = this.sc[0].h8, this.sc[4].h8 = this.sc[5].h8 = this.sc[0].h8,
			this.sc[6].h8 = this.sc[1].h8, this.sc[0].h9 = Math.floor(.54 * cu), this.sc[1].h9 = this.sc[0].h9, this.sc[2].h9 = Math.floor((cu - this.sc[2].eu - this.sc[3].eu - this.l4) / 2), this.sc[3].h9 = this.sc[2].h9 + this.sc[2].eu + this
			.l4, this.sc[4].h9 = Math.floor((cu - this.sc[4].eu - this.sc[5].eu - this.l4) / 2), this.sc[5].h9 = this.sc[6].h9 = this.sc[4].h9 + this.sc[4].eu + this.l4
	}, this.a1U = function() {
		a1V(0), a1V(1)
	}, this.a1W = function() {
		a1V(2), a1V(3)
	}, this.a1X = function() {
		a1V(4), a1V(5), a1V(6)
	}, this.p8 = function(h8, h9, ga) {
		var aE = -1;
		return 0 === aT.pp() ? aE = this.pl(h8, h9, 0, 2) : 3 === aT.pp() ? aE = this.pl(h8, h9, 3, 1) : 5 === aT.pp() && (aE = this.pl(h8, h9, 5, 2)), a0T !== aE && (a0T = aE, ga) && (aL.co = !0), -1 !== aE && (pd.pe(), !0)
	}, this.pl = function(h8, h9, a1Y, d6) {
		for (var aE = a1Y; aE < a1Y + d6; aE++)
			if (h8 >= this.sc[aE].h8 && h9 >= this.sc[aE].h9 && h8 <= this.sc[aE].h8 + this.sc[aE].cl && h9 <= this.sc[aE].h9 + this.sc[aE].eu) return aE;
		return -1
	}
}

function a1a() {
	function a1g(sr) {
		return sr < 0 ? 0 : 255 < sr ? 255 : Math.floor(sr)
	}
	this.cl = 0, this.eu = 0, this.pb = !1, this.a1b = 0, this.l4 = 0, this.vQ = 0, this.a11 = 0, this.a1c = 0, this.a1d = 0, this.a1e = 0, this.colors = null, this.b = function() {
		this.pb = !0, this.a1b = 0, this.resize()
	}, this.resize = function() {
		this.pb && (a1 < 1.4 * a2 ? this.cl = Math.floor((a0 ? .94 : .43) * a1) : (this.eu = Math.floor((a0 ? .88 : .43) * a2), this.cl = Math.floor(1.4 * this.eu)), this.eu = this.cl / 1.4, this.l4 = this.cl / 32, this.a11 = Math.floor(.25 *
			this.eu), this.a1c = (this.eu - this.a11 - 3 * this.l4) / 2, this.a1d = this.cl - 3 * this.l4 - this.a1c, this.a1e = (this.eu - this.a11 - 4 * this.l4) / 3)
	}, this.a1f = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var v = a5().split("");
		if (v.length < 6)
			for (var em = 2; 0 <= em; em--) this.colors[0][em] = a1g(256 * Math.random());
		else
			for (var aE = 2; 0 <= aE; aE--) this.colors[0][aE] = a1g(4 * (10 * parseInt(v[2 * aE]) + parseInt(v[2 * aE + 1])));
		this.a1h()
	}, this.a1i = function() {
		return [bJ(this.colors[0][0], 4), bJ(this.colors[0][1], 4), bJ(this.colors[0][2], 4)]
	}, this.pB = function(cr, cs, deltaY) {
		var hD = (hG - this.cl) / 2;
		cs -= (cu - this.eu) / 2 + this.a11, (cr -= hD) < 0 || cs < 0 || cr >= this.cl || cs >= this.eu - this.a11 || (hD = Math.floor(3 * cs / (this.eu - this.a11)), this.colors[this.vQ][hD] = a1g(this.colors[this.vQ][hD] + (deltaY < 0 ? 1 : -
			1) * Math.max(Math.abs(.05 * deltaY), 1)), aL.co = !0)
	}, this.cq = function(cr, cs) {
		this.a1b = 0;
		var hD = (hG - this.cl) / 2;
		return cs -= (cu - this.eu) / 2, (cr -= hD) < 0 || cs < 0 || cr >= this.cl - 1 || cs >= this.eu - 1 || cr > this.cl - (.4 * this.a11 + 3 * this.l4) && cs < this.a11 ? (this.pb = !1, 0 === aT.pp() && pn.l(!0), !(aL.co = !0)) : cr < this
			.l4 || cs < this.l4 + this.a11 || cr >= this.cl || cs >= this.eu - this.l4 || (cr < this.l4 + this.a1c ? (cs < this.l4 + this.a11 + this.a1c && 0 !== this.vQ && (this.vQ = 0, aL.co = !0), !0) : cr < this.l4 + this.a1c || (cr -= 2 *
				this.l4 + this.a1c, cs < this.l4 + this.a11 + this.a1e ? (this.a1b = 1, this.colors[this.vQ][0] = a1g(256 * cr / this.a1d), aL.co = !0) : cs < 2 * this.l4 + this.a11 + this.a1e || (cs < 2 * this.l4 + this.a11 + 2 * this.a1e ?
					(this.a1b = 2, this.colors[this.vQ][1] = a1g(256 * cr / this.a1d), aL.co = !0) : !(cs >= 3 * this.l4 + this.a11 + 2 * this.a1e) || (this.a1b = 3, this.colors[this.vQ][2] = a1g(256 * cr / this.a1d), aL.co = !0))))
	}, this.a1h = function() {
		for (var em = 2; 0 <= em; em--) this.colors[0][em] = a1g(this.colors[0][em])
	}, this.a1j = function() {
		for (var aR, v = "", aE = 0; aE < 3; aE++)(aR = bJ(this.colors[0][aE], 4)) < 10 && (v += "0"), v += aR.toString();
		return v
	}, this.p8 = function(cr) {
		0 !== this.a1b && (cr -= 2 * this.l4 + this.a1c + (hG - this.cl) / 2, this.colors[this.vQ][this.a1b - 1] = a1g(256 * cr / this.a1d), aL.co = !0)
	}, this.a1k = function() {
		0 < this.a1b && (this.a1b = 0, this.a1h(), hM.a1l(), aL.co = !0)
	}, this.cy = function() {
		var hD = (hG - this.cl) / 2,
			hE = (cu - this.eu) / 2;
		cz.setTransform(1, 0, 0, 1, hD, hE), cz.fillStyle = d2.iM, cz.fillRect(0, this.a11, this.cl, this.eu - this.a11), cz.fillStyle = d2.iW, cz.fillRect(0, 0, this.cl, this.a11), cz.fillStyle = d2.d3, cz.lineWidth = qL, cz.strokeStyle = d2.d3,
			cz.strokeRect(-1, -1, this.cl + 2, this.eu + 2), cz.fillRect(0, this.a11, this.cl, qL), cz.font = ce + Math.floor(.31 * this.a11) + cf, cz.textBaseline = d0, cz.textAlign = d1, cz.fillText("Choose Your Nation's Color!", Math.floor((
				this.cl - this.l4 - .4 * this.a11) / 2), Math.floor(.55 * this.a11)), this.a1m(0), cz.lineWidth = qL, this.a1n(0), this.a1n(1), this.a1n(2), cI.tj(Math.floor(hD + this.cl - .4 * this.a11 - this.l4), Math.floor(hE + .3 * this.a11),
				Math.floor(.4 * this.a11)), cz.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a1m = function(aE) {
		var dF = this.colors[aE][0],
			qH = this.colors[aE][1],
			aE = this.colors[aE][2];
		cz.fillStyle = "rgb(" + dF + "," + qH + "," + aE + ")", cz.fillRect(this.l4, this.a11 + this.l4, this.a1c, 2 * this.a1c + this.l4), cz.lineWidth = qL, cz.strokeStyle = d2.d3, cz.strokeRect(this.l4, this.a11 + this.l4, this.a1c, 2 * this
			.a1c + this.l4), cz.fillStyle = dF + qH + aE < 306 && qH < 150 ? d2.d3 : d2.hK, cz.font = ce + Math.floor(.32 * this.a1e) + cf, cz.textAlign = d1, cz.textBaseline = d0, cz.rotate(-Math.PI / 2), cz.fillText("National Color", Math
			.floor(-1.5 * this.l4 - this.a11 - this.a1c), Math.floor(this.l4 + .5 * this.a1c)), cz.rotate(Math.PI / 2)
	}, this.a1n = function(aE) {
		cz.fillStyle = "rgb(" + (0 === aE ? 150 : 2 === aE ? 30 : 0) + "," + (1 === aE ? 130 : 2 === aE ? 30 : 0) + "," + (2 === aE ? 220 : 0) + ")", cz.fillRect(2 * this.l4 + this.a1c, this.a11 + this.l4 + aE * (this.l4 + this.a1e), Math.floor(
				this.colors[this.vQ][aE] * this.a1d / 255), this.a1e), cz.strokeStyle = d2.d3, cz.strokeRect(2 * this.l4 + this.a1c, this.a11 + this.l4 + aE * (this.l4 + this.a1e), this.a1d, this.a1e), cz.fillStyle = d2.d3, cz.font = ce + Math
			.floor(.32 * this.a1e) + cf, cz.textBaseline = d0, cz.textAlign = uH, cz.fillText((0 === aE ? "Red: " : 1 === aE ? "Green: " : "Blue: ") + this.colors[0][aE].toString(), 3 * this.l4 + this.a1c, Math.floor(this.a11 + this.l4 + aE * (
				this.l4 + this.a1e) + .53 * this.a1e))
	}
}

function rn() {
	var a1o, a1p, vv, w6, x3, a1q, a1r, a1s, a1t, ck, cj, hd, a1u, a1w, a1v = 0;

	function a1z() {
		return g6.a20[(a1u + a1v) % g6.a21]
	}

	function a1x() {
		a1u++, hd = aL.aM, g6.yJ(a1z(), 4) && (a1w = !0, jF.a22(a1z()))
	}

	function a25() {
		0 === a1u ? rJ.a27(3249) : (a1u === g6.a21 - 1 && (a1u = -1), a1x())
	}

	function a2E(h9, y4, a2D) {
		var hD = Math.floor((hG - w6) / 2) + a1r,
			hF = hD + Math.floor(a2D * (w6 - 2 * a1r));
		cz.lineWidth = y4, cz.beginPath(), cz.moveTo(hD, h9), cz.lineTo(hF, h9), cz.lineTo(Math.floor(hD - a1r + a2D * w6), h9 + vv), cz.lineTo(hD - a1r, h9 + vv), cz.closePath()
	}
	this.b = function() {
		aT.setState(6), a1o = 0, a1p = 1, a1s = "rgba(0,220,120,0.4)", a1t = "rgba(0,0,0,0.8)", this.resize(), aL.co = !0, a1u = 0, a1w = !1, a1x()
	}, this.resize = function() {
		w6 = Math.floor((a0 ? .5 : .25) * cb), x3 = w6 + 12, vv = Math.floor(.125 * w6), a1r = 3 * vv, a1q = Math.floor(.225 * w6), cj = Math.floor(.3 * vv), ck = vl + cj + cf
	}, this.a1y = function(eb) {
		a1v = eb
	}, this.a23 = function(a24) {
		a24 === a1z() && (a1w = !1, a25())
	}, this.yL = function(a24) {
		6 !== aT.pp() || a1w || (hd = aL.aM, a1w = !0, jF.a22(a24))
	}, this.cq = function(h8, h9) {
		var hD = Math.floor((hG - x3) / 2),
			hE = Math.floor(.5 * (cu - ct - vv - a1q)) + vv + ct;
		return hD < h8 && h8 < hD + x3 && hE < h9 && h9 < hE + a1q && (this.a28(), rH.p8(h8, h9, !1), !0)
	}, this.a28 = function() {
		g6.a29(3260), rF.b(), aL.co = !0
	}, this.fA = function() {
		6 === aT.pp() && (a1w ? aL.aM > hd + 12e3 && rJ.a27(3250) : aL.aM > hd + 12e3 && a25(), 100 < (a1o += .07 * a1p * (a1o < 16 ? 5 + a1o : 84 < a1o ? 105 - a1o : 17)) ? (a1o = 100, a1p = -1) : a1o < 0 && (a1o = 0, a1p = 1), a1s = "rgba(0," +
			Math.floor(190 - 1.9 * a1o) + "," + Math.floor(120 - 1.2 * a1o) + "," + (.4 + .004 * a1o) + ")", a1t = "rgba(0," + Math.floor(1.9 * a1o) + "," + Math.floor(1.2 * a1o) + "," + (.8 - .004 * a1o) + ")", aL.co = !0)
	}, this.cy = function() {
		var h8 = Math.floor((hG - x3) / 2),
			h9 = Math.floor(.5 * (cu - ct - vv - a1q));
		! function(title, h9, y4, a2D) {
			cz.fillStyle = a1t, a2E(h9, y4, 1), cz.fill(), cz.fillStyle = a1s, a2E(h9, y4, a2D), cz.fill(), cz.strokeStyle = d2.d3, a2E(h9, y4, 1), cz.stroke(),
				function(a2G, h9) {
					cz.textAlign = d1, cz.textBaseline = d0, cz.font = ck, cz.fillStyle = d2.d3, cz.fillText(a2G, Math.floor(.5 * hG), Math.floor(h9 + .58 * vv))
				}(title, h9)
		}("Loading", h9, 3, a1o / 100),
		function(h8, h9, cl, eu, v5) {
			cz.fillStyle = d2.iK, cz.fillRect(h8, h9, cl, eu), cz.lineWidth = 3, cz.strokeStyle = d2.d3, cz.strokeRect(h8, h9, cl, eu);
			var bU = Math.floor(.3 * eu);
			cz.textAlign = d1, cz.textBaseline = d0, cz.font = vl + bU + cf, cz.fillStyle = d2.d3, cz.fillText(v5, Math.floor(h8 + cl / 2), Math.floor(h9 + eu / 2 + .1 * bU))
		}(h8, h9 + vv + ct, x3, a1q, "Back")
	}
}

function ro() {
	var j;
	this.b = function() {
		rH.b(), pn.b(), j = 0, a2H.b(), rF.b()
	}, this.setState = function(a2I) {
		j = a2I
	}, this.pp = function() {
		return j
	}, this.a2J = function() {
		0 === aT.pp() && rF.a2K(), this.setState(8), rO.a2K(), cv.pq(), cw.pb = !1, pm.cq(-1e3, -1e3)
	}, this.pq = function(lk) {
		if (!az.mE) return !1;
		if (!(aL.aM < 400)) {
			if ("Enter" === lk.key || "Escape" === lk.key) {
				if (this.a2L()) return 0 === j && pn.l(!0), !0;
				if ("Enter" === lk.key) {
					if (0 === j) return rF.a2M(), !0;
					if (7 === j) return !0
				}
			}
			return !1
		}
	}, this.a2N = function() {
		return lU.pb || cw.pb || pm.pb || cv.a2O()
	}, this.a2P = function() {
		cw.resize(), lU.resize(), pm.resize(), cv.resize()
	}, this.a2L = function() {
		return !!pm.lP() || !(!cv.pq() && (cw.pb ? cw.pb = !1 : !lU.pb || (lU.lP(), 0)))
	}, this.aU = function() {
		aL.co = !0, 8 === j ? hp ? gW.ps(!1) : nR.pb ? nR.pu() : lU.pb ? lU.lP() : cI.pu() : 7 === j ? rO.a2Q() : 6 === j ? rI.a28() : 3 === j ? rJ.a2R(0, 0) : 2 === j ? ft.a2R() : 0 !== j || this.a2L() || aJ(11)
	}, this.cq = function(h8, h9) {
		if (!a2H.cq(h8, h9) && az.mE && !pm.cq(h8, h9) && !lU.cq(h8, h9) && !(6 === j && rI.cq(h8, h9) || 2 === j && ft.cq(h8, h9) || hM.cq(h8, h9) || cw.cq(h8, h9) || a2S.cq(h8, h9, !0) || cv.cq(h8, h9, !0))) {
			if (pd.cq(h8, h9), 0 === j) rF.cq(h8, h9);
			else if (3 === j) rJ.cq(h8, h9);
			else if (5 === j) rK.cq(h8, h9);
			else if (7 === j && rO.cq(h8, h9)) return;
			a0s.cq(h8, h9)
		}
	}, this.p8 = function(h8, h9) {
		if (hM.p8(h8, h9), !pd.yH) {
			if (a2H.p8(h8, h9)) return void pd.pe();
			if (0 <= cv.pl(h8, h9)) return void pd.pe();
			if (cv.p8(h8, h9)) return void pd.pe();
			if (2 === j && ft.p8(h8, h9)) return void pd.pe();
			if (rH.p8(h8, h9, !0)) return
		}
		pd.p8(h8, h9)
	}, this.click = function(h8, h9) {
		pd.pf(), cv.a1k() || a2S.cq(h8, h9, !1) || cv.cq(h8, h9, !1)
	}, this.pB = function(h8, h9, deltaY) {
		cv.tl[1].oK.pb || (cv.tl[2].oK.pb ? cv.tl[2].oK.pB(h8, h9, deltaY) : 0 === j && pd.pB(h8, deltaY))
	}, this.a2T = function() {
		rH.yR(), cv.yR(), 0 === j ? (pn.resize(), pd.yR()) : 7 === j && rO.resize(), aL.co = !0
	}, this.cy = function() {
		var h9, dC, dB, h8;
		8 !== j && 10 !== j && (cz.imageSmoothingEnabled = !0, this.nN(), pd.cy(), rG.cy(), h9 = Math.floor(.3 * cu), dC = ch.sp("territorial.io"), dB = (dB = 1.75 * cu / dC.width) * dC.width < .98 * hG ? .98 * hG / dC.width : dB, cz
			.globalAlpha = .15, h8 = Math.floor(.5 * (hG - dB * dC.width)), h8 = Math.floor(h8 / dB), h9 = Math.floor(h9 - .5 * dC.height * dB), h9 = Math.floor(h9 / dB), cz.setTransform(dB, 0, 0, dB, h8, h9), cz.drawImage(dC, h8, h9), cz
			.setTransform(1, 0, 0, 1, 0, 0), cz.globalAlpha = 1, a2S.cy(), a0s.cy(), cv.cy(), hM.cy(), 0 === j ? rF.cy() : 2 === j ? ft.cy() : 3 === j ? rJ.cy() : 5 === j ? rK.cy() : 6 === j ? rI.cy() : 7 === j && rO.cy(), cv.a2V(), a2H.cy(),
			cw.cy(), pm.cy(), lU.cy())
	}, this.nN = function() {
		var a2X, a2W;
		az.mE ? (a2W = a1 / az.b0, a2X = a2 / az.b1, cz.setTransform(a2W = a2X < a2W ? a2W : a2X, 0, 0, a2W, Math.floor((a1 - a2W * az.b0) / 2), Math.floor((a2 - a2W * az.b1) / 2)), cz.drawImage(az.mG, 0, 0), cz.setTransform(1, 0, 0, 1, 0, 0), cz
			.fillStyle = d2.iK) : cz.fillStyle = d2.hK, cz.fillRect(0, 0, a1, a2)
	}
}

function a2Y() {
	this.cl = 0, this.eu = 0, this.lO = 0, this.pb = !1, this.vF = 10, this.bc = .12, this.a1b = !1, this.a2Z = !1, this.a2a = !1, this.b = function() {
		this.pb = !0, this.resize(), this.a1b = !1
	}, this.resize = function() {
		this.pb && (this.cl = 1.15 * a1 < a2 ? Math.floor((a0 ? .94 : .69) * a1) : Math.floor((a0 ? .94 : .69) * a2 / 1.15), this.cl -= this.cl % this.vF, this.eu = +this.cl, this.lO = Math.floor(.15 * this.cl))
	}, this.cq = function(cr, cs, j) {
		var hD = (hG - this.cl) / 2;
		return cs -= (cu - this.eu - this.lO) / 2, (cr -= hD) < 0 || cs < 0 || cr >= this.cl - 1 || cs >= this.eu + this.lO - 1 || cr >= this.cl - this.lO && cs < this.lO ? (0 === j && (this.pb = !1, 0 === aT.pp() && pn.l(!0), aL.co = !0), !1) :
			(cs < this.lO || (cr = (cr = bJ(cr, hD = Math.floor(this.cl / this.vF)) + this.vF * bJ(cs - this.lO, hD)) < 0 ? 0 : cr >= aF.vJ ? aF.vJ - 1 : cr, (0 === j || 1 === j && !aF.aH[cr] || 2 === j && aF.aH[cr]) && (this.a2Z = !aF.aH[cr],
				this.a1b = !0, this.a2a = !0, aF.aH[cr] = !aF.aH[cr], aF.vZ(), aL.co = !0)), !0)
	}, this.p8 = function(cr, cs) {
		this.a1b && this.cq(cr, cs, this.a2Z ? 1 : 2)
	}, this.a1k = function() {
		this.a2a && (aD(), this.a2a = !1), this.a2a = !1, this.a1b = !1
	}, this.cy = function() {
		cz.imageSmoothingEnabled = !0;
		for (var hD = (hG - this.cl) / 2, hE = (cu - this.eu - this.lO) / 2, nY = (cz.setTransform(1, 0, 0, 1, hD, hE), cz.fillStyle = d2.iM, cz.fillRect(0, this.lO, this.cl, this.eu), cz.fillStyle = d2.ia, cz.fillRect(0, 0, this.cl, this.lO), cz
				.fillStyle = d2.d3, cz.lineWidth = qL, cz.strokeStyle = d2.d3, cz.strokeRect(-1, -1, this.cl + 2, this.eu + this.lO + 2), cz.fillRect(0, this.lO - qL, this.cl, qL), cz.font = ce + Math.floor(.44 * this.lO) + cf, cz.textAlign =
				d1, cz.textBaseline = d0, cz.fillText("Select Your Emojis!", Math.floor((this.cl - .725 * this.lO) / 2), Math.floor(.55 * this.lO)), Math.floor(this.cl / this.vF)), zoom = (nY - 2 * this.bc * nY) / aF.cl, aE = aF.vJ - 1; 0 <=
			aE; aE--) cz.setTransform(1, 0, 0, 1, Math.floor(hD + aE % this.vF * nY), Math.floor(hE + this.lO + bJ(aE, this.vF) * nY)), aF.aH[aE] && (cz.fillStyle = d2.ic, cz.fillRect(0, 0, nY, nY)), cz.setTransform(zoom, 0, 0, zoom, Math.floor(
			hD + aE % this.vF * nY + this.bc * nY), Math.floor(hE + this.lO + bJ(aE, this.vF) * nY + this.bc * nY)), cz.drawImage(aF.so[aE], 0, 0);
		cI.tj(Math.floor(hD + this.cl - .725 * this.lO), Math.floor(hE + .275 * this.lO), Math.floor(.45 * this.lO)), cz.setTransform(1, 0, 0, 1, 0, 0), cz.imageSmoothingEnabled = !1
	}
}

function rp() {
	var a2b, ad, a2c;

	function vU() {
		var j;
		0 === (j = aT.pp()) ? rF.a2K() : 6 === j ? g6.a29(a2b) : 7 === j ? (rO.a2K(), g6.close(g6.a2d, 3240)) : 8 === j && (rC(!0), rF.a2K()), aT.setState(3), rH.yR(), a2g(a2b), aL.co = !0
	}

	function a2e(lk) {
		for (var aE = ad.length - 1; 0 <= aE; aE--)
			if (lk === ad[aE].code) return ad[aE].v;
		return a2c + lk
	}

	function a2g(lk) {
		rH.sc[2].v5 = a2e(lk)
	}
	this.lw = function() {
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
		}), a2c = "Error "
	}, this.b = function(a24, lk) {
		a2b = lk;
		var j = aT.pp();
		if (6 === j) {
			if (4211 === lk) return void rK.b(0, 0);
			if (4214 !== lk) return void rI.a23(a24)
		} else {
			if (7 !== j) return 8 === j ? void(a24 !== g6.pQ || fs || g2.uN(a2e(lk))) : void 0;
			if (a24 !== g6.a2d) return
		}
		vU()
	}, this.a27 = function(lk) {
		a2b = lk, 8 === aT.pp() ? g2.uN(a2e(lk)) : vU()
	}, this.resize = function() {
		a2g(a2b)
	}, this.cq = function(h8, h9) {
		3 === rH.pl(h8, h9, 3, 1) && this.a2R(h8, h9)
	}, this.a2R = function(h8, h9) {
		rF.b(), rH.p8(h8, h9, !1), aL.co = !0
	}, this.cy = function() {
		rH.a1W()
	}
}

function rq() {
	var input, color;
	this.pb = !1, this.lT = !1, this.b = function() {
		color = d2.iM, (input = document.createElement("INPUT")).setAttribute("type", "text"), input.setAttribute("name", "username"), input.setAttribute("id", "usernameField"), input.setAttribute("autocomplete", "username"), input.value = "",
			input.style.textAlign = "center", input.style.backgroundColor = color, input.style.borderRadius = "0", input.style.color = d2.d3, input.style.position = "absolute", input.readOnly = !1, input.addEventListener("input", function() {
				rF.a2h()
			}), input.addEventListener("focus", function() {
				pn.lT = !0
			}), input.addEventListener("blur", function() {
				pn.lT = !1
			})
	}, this.resize = function() {
		var cj, qJ, qK;
		this.pb && (qJ = .3 * (cj = .22 * rH.eu / lX), qK = qL / lX, input.style.border = qK.toFixed(2) + "px solid " + d2.d3, input.style.font = ce + cj + cf, input.style.padding = qJ.toFixed(2) + "px", input.style.left = (((hG - rH.cl) / lX -
			qK) / 2).toFixed(2) + "px", input.style.width = (rH.cl / lX - 2 * qJ - qK).toFixed(2) + "px", input.style.top = ((rH.h9 - .52 * rH.eu) / lX).toFixed(2) + "px")
	}, this.get = function() {
		return input
	}, this.l = function(l) {
		this.pb !== l && ((this.pb = l) ? (this.resize(), document.body.appendChild(input)) : (this.lT = !1, document.body.removeChild(input)))
	}, this.pw = function(a2i) {
		a2i && color === d2.iM || !a2i && color === d2.io || (color = a2i ? d2.iM : d2.io, input.style.backgroundColor = color)
	}
}

function sH() {
	var k3, a2l, a2m, a2n;
	this.a2j = 0, this.a2k = 0, this.b = function(bc) {
		var hz;
		7 === aT.pp() && (k3 = bc, a2l = 0, a2m = aL.aM + 4500, a2n = rN.a2o(k3) ? 2 : 0, aT.setState(10), cz.imageSmoothingEnabled = !0, aT.nN(), bc = ch.sp("loading"), hz = 1, hz = (a0 ? .396 : .25) * cb / bc.width, cz.setTransform(hz, 0, 0,
			hz, Math.floor((a1 - hz * bc.width) / 2), Math.floor((a2 - hz * bc.height) / 2)), cz.drawImage(bc, 0, 0), cz.setTransform(1, 0, 0, 1, 0, 0))
	}, this.gY = function() {
		0 < a2n && aL.aM > a2m && (a2n--, a2m += 4500, 0 === aL.a2q) && 0 === aL.fP() && (0 === a2n && g6.pQ < g6.a2r && (g6.pQ += g6.a2s), g6.yJ(g6.pQ, 5))
	}, this.a2t = function() {
		10 === aT.pp() && 2 <= ++a2l && (rN.a2u(k3), k3 = null)
	}
}

function sE() {
	var a2w, a2x, a2y, a2z, a30, a31, a32, a34, a35, a37, a38, a39, a3C, a3D, a3E, a3F, a3G, a33 = 48,
		a3A = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
		a3B = [0, 0, 0, 0];

	function a3J(aE, so) {
		var aE = a32[aE].getContext("2d", {
				alpha: !0
			}),
			zoom = (aE.clearRect(0, 0, a33, a33), a33 / so.width),
			a3 = a33 / so.height,
			zoom = a3 < zoom ? a3 : zoom;
		aE.imageSmoothingEnabled = !0, aE.setTransform(zoom, 0, 0, zoom, Math.floor((a33 - zoom * so.width) / 2), Math.floor((a33 - zoom * so.height) / 2)), aE.drawImage(so, 0, 0), aE.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a3N(fQ, dF, a3Q, dD) {
		dD.beginPath(), dD.moveTo(fQ, fQ), dD.lineTo(fQ + Math.cos(a3Q) * dF, fQ + Math.cos(a3Q + 1.5 * Math.PI) * dF), dD.stroke()
	}

	function a3e() {
		if (7 === aT.pp()) {
			for (var dQ, so, dD, zoom, a3, eb = -1, aE = a34.length - 1; 0 <= aE; aE--)
				if (null === a34[aE].dC) {
					eb = aE;
					break
				} - 1 !== eb && (null !== (dQ = a3U(a34[eb].a3Y, a34[eb].a3Z)) ? a34[eb].dC = dQ : (dQ = {
					b0: az.b0,
					b1: az.b1,
					mG: az.mG,
					mC: az.mC,
					mD: az.mD,
					mH: az.mH,
					me: az.me,
					a3V: az.a3V
				}, az.lw(a34[eb].a3Y, a34[eb].a3Z), az.mF.a3f(), (so = document.createElement("canvas")).width = 128, so.height = 128, dD = so.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / az.b0) < (a3 = 128 / az.b1) && (zoom = a3), dD.imageSmoothingEnabled = !0, dD.setTransform(zoom, 0, 0, zoom, (128 - zoom * az.b0) / 2, (128 - zoom * az.b1) / 2), dD.drawImage(az.mG, 0, 0), az.b0 = dQ.b0, az
				.b1 = dQ.b1, az.mG = dQ.mG, az.mC = dQ.mC, az.mD = dQ.mD, az.mH = dQ.mH, az.me = dQ.me, az.a3V = dQ.a3V, a34[eb].dC = so), aL.co = !0)
		}
	}

	function a3U(a3Y, a3Z) {
		for (var aE = a34.length - 1; 0 <= aE; aE--)
			if (null !== a34[aE].dC && a34[aE].a3Y === a3Y && a34[aE].a3Z === a3Z) return a34[aE].dC;
		return null
	}
	this.b = function() {
		var aE;
		for (a3G = 0, a37 = -1, aT.setState(7), a34 = [], this.resize(), a32 = new Array(13), aE = a32.length; 0 <= aE; aE--) a32[aE] = document.createElement("canvas"), a32[aE].width = a33, a32[aE].height = a33;
		for (aE = 0; aE < 7; aE++) ! function(ud) {
			var a3L, dD = a32[ud - 2].getContext("2d", {
					alpha: !0
				}),
				a3K = 1.5 * Math.PI,
				fQ = Math.floor(.5 * a33),
				dF = Math.floor(.48 * a33);
			dD.lineWidth = 2, dD.strokeStyle = d2.d3, dD.clearRect(0, 0, a33, a33);
			for (var aE = 0; aE < ud; aE++) a3L = a3K + 2 * Math.PI / ud,
				function(aE, fQ, dF, a3K, a3L, dD) {
					dD.fillStyle = fR.a3P[aE], dD.beginPath(), dD.arc(fQ, fQ, dF, a3K, a3L), dD.lineTo(fQ, fQ), dD.fill()
				}(aE + 1, fQ, dF, a3K, a3L, dD), 0 !== aE && a3N(fQ, dF, a3K, dD), a3K = a3L;
			a3N(fQ, dF, 1.5 * Math.PI, dD),
				function(fQ, dF, dD) {
					dD.beginPath(), dD.arc(fQ, fQ, dF, 0, 2 * Math.PI), dD.stroke()
				}(fQ, dF, dD)
		}(aE + 2);
		a3J(7, ch.get(4)), a3J(8, aF.so[27]), a3J(9, aF.so[46]), a3J(10, aF.so[36]), a3J(11, ch.get(19)), a3J(12, ch.get(20)), aL.co = !0
	}, this.a2Q = function() {
		this.a2K(), g6.a29(3240), rF.b(), aL.co = !0
	}, this.a2K = function() {
		a34 = [], a32 = []
	}, this.vD = function() {
		return a39
	}, this.resize = function() {
		var a3R, m1, xI, a3S;
		for (a2y = [0, 0], a35 = [0, 0, 0, 0], a3F = a0 ? (a38 = Math.floor(.8 * .4 * cb), a39 = Math.floor(.56 * a38), a35[0] = ct, a1 < a2 ? (a35[1] = a39 + 2 * ct, a35[2] = a1 - 3 * a35[0], a35[3] = a0s.cx() - 3 * ct - a39, a3D = Math.floor(
				.95 * a39), a3E = Math.floor((a1 - a38 - ct) / 2), Math.floor(ct + a39 / 2)) : (a35[1] = ct, a35[2] = a1 - 3 * ct - a38, a35[3] = a0s.cx() - 2 * ct, a3D = Math.floor(.8 * a38), a35[3] - a39 < a38 && (a3D = Math.floor(.8 * (
				a35[3] - a39)), a3D = u9(a39, a3D)), a3E = Math.floor(a1 - a38 / 2 - ct), u9(a3F = Math.floor(ct + a39 + (a35[3] - a39) / 2), Math.floor(a39 + 2 * ct + a3D / 2)))) : (a38 = Math.floor(.2016 * cb), a39 = Math.floor(.56 * a38), a35[
				2] = Math.floor(.5 * a1), a35[3] = Math.floor(.5 * a2), a35[1] = Math.floor(.45 * (a2 - a35[3])), a35[0] = Math.floor((a1 - a35[2]) / 2), a3D = Math.floor(.75 * a39), a3E = Math.floor(a1 / 2), Math.floor(a35[1] + a35[3] + (
				a2 - a35[3] - a35[1]) / 2)), a3C = ce + Math.floor(.65 * a39 / 4) + cf, a3R = m1 = 1; a3R * m1 < a34.length;) a35[3] / (m1 + 1) < a35[2] / (a3R + 1) ? a3R++ : m1++;
		a2w = (xI = (a35[2] - (a3R - 1) * ct) / a3R) < (a3S = (a35[3] - (m1 - 1) * ct) / m1) ? xI : a3S, a2x = Math.floor(a2w), a31 = ce + Math.floor(.5 * a2w / 5) + cf, a2y[0] = a3R, a2y[1] = m1, a2z = a35[0] + Math.floor((a35[2] - a2y[0] *
			a2w - (a2y[0] - 1) * ct) / 2), a30 = a35[1] + Math.floor((a35[3] - a2y[1] * a2w - (a2y[1] - 1) * ct) / 2)
	}, this.a0t = function(a3T, bc) {
		var aE, a3, dC, bU = a34.length;
		for (a3B = a3T, aE = 0; aE < bc.length; aE++) dC = a3U(bc[aE].me, bc[aE].a3V), a34.push({
			a3W: bc[aE].id,
			qv: bc[aE].qv,
			qw: bc[aE].a3X,
			a3Y: bc[aE].me,
			a3Z: bc[aE].a3V,
			joined: bc[aE].a3a,
			vA: bc[aE].a2D,
			a3b: bc[aE].a3b,
			dC: dC,
			a3c: bc[aE].a3c,
			ok: bc[aE].ok
		});
		for (aE = bU - 1; 0 <= aE; aE--) a34.shift();
		if (-1 !== a37)
			for (a3 = a37, a37 = -1, aE = a34.length - 1; 0 <= aE; aE--)
				if (a34[aE].a3W === a3) {
					a37 = a3;
					break
				}(a34.length > a3G || a34.length < a3G) && (a3G = a34.length, this.resize()), this.a3d(), aL.co = !0
	}, this.a3d = function() {
		for (var aE = a34.length - 1; 0 <= aE; aE--) null === a34[aE].dC && setTimeout(a3e, 0)
	}, this.cq = function(h8, h9) {
		return 4 * ((h8 - a3E) * (h8 - a3E) + (h9 - a3F) * (h9 - a3F)) <= a3D * a3D ? (this.a2Q(), rH.p8(h8, h9, !1), !0) : function(h8, h9) {
			var eb, em, hD, hE;
			if (0 !== a34.length) {
				var aE = 0;
				for (hE = a30, em = 0; em < a2y[1]; em++) {
					for (hD = a2z, eb = 0; eb < a2y[0]; eb++) {
						if (hD < h8 && h8 < hD + a2w && hE < h9 && h9 < hE + a2w) return jF.a3h(a34[aE].a3W), a37 = a34[aE].a3W !== a37 ? a34[aE].a3W : -1, aL.co = !0;
						if (++aE >= a34.length) return !1;
						hD += a2w + ct
					}
					hE += a2w + ct
				}
			}
			return !1
		}(h8, h9)
	}, this.cy = function() {
		var eb, em, h8, dF, zoom, aE = 0,
			h9 = a30;
		if (cz.imageSmoothingEnabled = !0, cz.lineWidth = 3, dF = Math.floor(.5 * a3D), cz.fillStyle = d2.iK, cz.beginPath(), cz.arc(a3E, a3F, dF, 0, 2 * Math.PI), cz.fill(), cz.strokeStyle = d2.d3, cz.beginPath(), cz.arc(a3E, a3F, dF, 0, 2 *
				Math.PI), cz.stroke(), dF = ch.get(0).height, zoom = .6 * a3D / dF, cz.setTransform(zoom, 0, 0, zoom, Math.floor(a3E - .56 * zoom * ch.get(0).width), Math.floor(a3F - .5 * zoom * dF)), cz.drawImage(ch.get(0), 0, 0), cz
			.setTransform(1, 0, 0, 1, 0, 0),
			function() {
				cz.fillStyle = d2.iK, cz.fillRect(a1 - a38 - ct, ct, a38, a39), 0 <= a37 ? (cz.fillStyle = d2.ic, cz.fillRect(a1 - a38 - ct, ct, a38, Math.floor(.25 * a39))) : (cz.fillStyle = d2.j0, cz.fillRect(a1 - a38 - ct, ct + Math.floor(
					.25 * a39), a38, Math.floor(.25 * a39)));
				cz.strokeStyle = d2.d3, cz.strokeRect(a1 - a38 - ct, ct, a38, a39), cz.fillStyle = d2.d3, cz.font = a3C, cz.textBaseline = d0;
				for (var h9, qJ = Math.floor(.04 * a38), qK = Math.floor(.08 * a39), aE = 3; 0 <= aE; aE--) h9 = Math.floor(ct + (aE + 1) * (a39 + 2 * qK) / 5 - qK), cz.textAlign = uH, cz.fillText(a3A[aE], a1 - a38 - ct + qJ, h9), cz.textAlign =
					vj, cz.fillText(gM.hP(a3B[aE]), a1 - ct - qJ, h9)
			}(), 0 !== a34.length)
			for (em = 0; em < a2y[1]; em++) {
				for (h8 = a2z, eb = 0; eb < a2y[0]; eb++) {
					if (! function(aE, h8, h9) {
							var zoom, em, a3l, a3n, a3o;
							null === a34[aE].dC ? (cz.fillStyle = d2.iK, cz.fillRect(h8, h9, a2x, a2x)) : (zoom = a2x / 128, cz.setTransform(zoom, 0, 0, zoom, h8, h9), cz.drawImage(a34[aE].dC, 0, 0), cz.setTransform(1, 0, 0, 1, 0, 0));
							a37 === a34[aE].a3W ? (function(h8, h9) {
								var nY = Math.floor(.2 * a2x),
									nZ = Math.floor(.3 * nY);
								cz.fillStyle = d2.ig, cz.fillRect(h8 + a2x - nY, h9, nY, nY), cz.fillStyle = d2.hK, cz.fillRect(h8 + a2x - nY, h9, 2, nY), cz.fillRect(h8 + a2x - nY, h9 + nY - 2, nY, 2), cI.tj(h8 + a2x - nY + nZ, h9 + nZ,
									nY - 2 * nZ), cz.setTransform(1, 0, 0, 1, 0, 0)
							}(h8, h9), cz.lineWidth = 3, cz.fillStyle = d2.ig) : cz.fillStyle = d2.iI;
							if (a3n = Math.floor(a2w / 4), cz.fillRect(h8, h9, a3n, a3n), a3o = Math.floor(h9 + .8 * a2w), cz.fillRect(h8, a3o, a2x, Math.floor(a2w / 5)), function(aE, h8, h9) {
									var zoom;
									a34[aE].qw && (aE = ch.get(4), zoom = .5 * a2w / aE.width, cz.setTransform(zoom, 0, 0, zoom, Math.floor(h8 + (a2w - zoom * aE.width) / 2), Math.floor(h9 + (a2w - zoom * aE.height) / 2)), cz.globalAlpha = .6, cz
										.drawImage(aE, 0, 0), cz.globalAlpha = 1, cz.setTransform(1, 0, 0, 1, 0, 0))
								}(aE, h8, h9), a34[aE].a3c) {
								for (em = a3l = 0; em < a34[aE].a3c; em++) a3l = Math.max(a3l, cm.measureText(a34[aE].ok[em], a31));
								a3l += .05 * a2w, em = 5 === a34[aE].a3c, a3n = em ? h9 + a3n : Math.max(h9 + .8 * a2w - .11 * a34[aE].a3c * a2w, h9 + a3n), a3o = em ? a3o : Math.min(a3n + .11 * a34[aE].a3c * a2w + .05 * a2w, a3o), cz.fillRect(
									h8, a3n, a3l, a3o - a3n)
							}
							for (cz.font = a31, cz.textBaseline = d0, cz.textAlign = uH, cz.fillStyle = d2.iw, cz.fillText(a34[aE].joined.toString(), Math.floor(h8 + .22 * a2w), Math.floor(h9 + .9 * a2w)), cz.fillStyle = d2.d3, em = 0; em < a34[
									aE].a3c; em++) cz.fillText(a34[aE].ok[a34[aE].a3c - em - 1], Math.floor(h8 + .03 * a2w), Math.floor(h9 + .77 * a2w - .11 * em * a2w));
							cz.textAlign = vj, cz.fillStyle = d2.ij, cz.fillText(a34[aE].vA.toString(), Math.floor(h8 + .81 * a2w), Math.floor(h9 + .9 * a2w)), cz.strokeStyle = a37 === a34[aE].a3W ? d2.id : d2.iQ, cz.strokeRect(h8, h9, a2x, a2x),
								a3o = Math.floor(.16 * a2w), zoom = a3o / a33, cz.setTransform(zoom, 0, 0, zoom, Math.floor(h8 + .33 * a3o), Math.floor(h9 + .33 * a3o)), a32.length > a34[aE].qv && cz.drawImage(a32[a34[aE].qv], 0, 0);
							cz.setTransform(zoom, 0, 0, zoom, Math.floor(h8 + .15 * a3o), Math.floor(h9 + a2w - 1.08 * a3o)), cz.drawImage(a32[11], 0, 0), cz.setTransform(zoom, 0, 0, zoom, Math.floor(h8 + a2w - 1.05 * a3o), Math.floor(h9 + a2w -
								1.15 * a3o)), cz.drawImage(a32[12], 0, 0), cz.setTransform(1, 0, 0, 1, 0, 0)
						}(aE, Math.floor(h8), Math.floor(h9)), ++aE >= a34.length) return;
					h8 += a2w + ct
				}
				h9 += a2w + ct
			}
	}
}

function rr() {
	this.b = function(h8, h9) {
		aT.setState(5), rH.p8(h8, h9, !1), aL.co = !0
	}, this.cy = function() {
		rH.a1X()
	}, this.cq = function(h8, h9) {
		var aE = rH.pl(h8, h9, 5, 2);
		5 === aE ? aP() : 6 === aE && (rF.b(), rH.p8(h8, h9, !1), aL.co = !0)
	}
}

function rs() {
	var a3r = [0, 0, 0, 0];

	function a0z(h8, h9, d5, a4A) {
		cz.fillStyle = d2.d3;
		var nY = u9(2, Math.floor((a4A ? .5 : .35) * d5)),
			uz = (nY -= nY % 2, u9(2, Math.floor(.1 * d5))),
			d5 = (uz -= uz % 2, Math.floor((d5 - nY) / 2)),
			hF = Math.floor(d5 + (nY - uz) / 2);
		cz.fillRect(h8 + d5, h9 + hF, nY, uz), a4A && cz.fillRect(h8 + hF, h9 + d5, uz, nY)
	}

	function a2C(h8, h9, cl, eu, sr, cZ, v5, eV, ud) {
		cz.fillStyle = sr, cz.fillRect(h8, h9, cl, eu), 0 <= eV && function(h8, h9, cl, eu, eV) {
			cz.fillStyle = "rgba(" + 22 * eV + "," + (110 - 22 * eV) + ",0,0.75)", cz.fillRect(h8, h9, (1 + eV) * cl / 6, eu)
		}(h8, h9, cl, eu, eV), 0 < ud && function(h8, h9, cl, eu, ud) {
			cz.fillStyle = "rgba(255,255,255,0.3)", cz.fillRect(h8, h9, ud * cl / bZ, eu)
		}(h8, h9, cl, eu, ud), cz.strokeStyle = d2.d3, cz.strokeRect(h8, h9, cl, eu), 0 !== cZ && (cz.fillStyle = d2.d3, cz.font = ce + Math.floor(cZ * eu) + cf, cz.fillText(v5, Math.floor(h8 + cl / 2), Math.floor(h9 + .52 * eu)))
	}
	this.fu = [{
		be: 0,
		ud: 512
	}], this.b = function() {
		rP.pb = !1, aT.setState(2), this.resize(), aL.co = !0
	}, this.a2K = function() {}, this.resize = function() {
		a3r[2] = Math.floor((a0 ? .49 : .4) * cb), a3r[1] = Math.floor((a2 - a3r[2] / 6 - this.fu.length * (ct + a3r[2] / 10)) / 2), a3r[0] = Math.floor((a1 - a3r[2]) / 2), rP.pb && rP.resize()
	}, this.a3s = function(qv) {
		var aE;
		if (6 < qv) this.fu = [{
			be: 0,
			ud: 512
		}];
		else {
			for (this.fu = [], aE = 0; aE < qv + 2; aE++) this.fu.push({
				be: 0,
				ud: 0
			});
			this.a3t()
		}
	}, this.a3u = function(a3v, a3w) {
		for (var bU = a3v.length, aE = 0; aE < bU; aE++) this.fu[aE].be = a3v[aE], this.fu[aE].ud = a3w[aE]
	}, this.a3x = function(qH) {
		var aE, bU;
		if (1 === qH.nc.length)
			for (bU = this.fu.length, qH.a3v = new Array(bU), qH.a3w = new Array(bU), aE = 0; aE < bU; aE++) qH.a3v[aE] = this.fu[aE].be, qH.a3w[aE] = this.fu[aE].ud
	}, this.a2R = function() {
		aL.co = !0, rP.pb ? rP.pb = !1 : (this.a2K(), rF.b())
	}, this.qz = function() {
		var aE, ud;
		if (fm.fn) return fm.fo.a3y;
		for (ud = 0, aE = this.fu.length - 1; 0 <= aE; aE--) ud += this.fu[aE].ud;
		return ud
	}, this.p8 = function(h8, h9) {
		return !(!rP.pb || !rP.p8(h8, h9)) || -1 !== this.pl(h8, h9)
	}, this.a3z = function() {
		g6.pQ = 0, g6.yJ(0, 3) && jF.a40(0)
	}, this.a41 = function() {
		var eb;
		this.a3z(), aT.a2J(), fm.fn ? fm.a42() : (eb = (eb = this.fu.length - 2) < 0 ? 7 : eb, qs(Math.floor(16384 * Math.random()), 0, [{
			name: rF.a43(),
			a44: cv.tl[2].oK.a1i(),
			a45: 0
		}], eb, !1, !1))
	}, this.cq = function(h8, h9) {
		if (cw.pb || cv.tl[1].oK.pb || cv.tl[2].oK.pb) return !1;
		if (rP.pb && !fm.fn) return rP.cq(h8, h9);
		var aE, eb, max, nY, h9 = this.pl(h8, h9);
		if (-1 === h9) return !1;
		if (0 === h9) this.a2R();
		else if (1 === h9) fm.fn ? (fm.pe(), aL.co = !0) : rP.show();
		else if (100 === h9) pj.a46();
		else if (2 === h9) this.a2K(), this.a41();
		else {
			if (fm.fn) return !1;
			if (27 === h9) this.fu.length < 8 && (this.fu.push({
				be: 0,
				ud: bZ
			}), this.a3t(), this.resize(), aL.co = !0);
			else if (aE = Math.floor((h9 - 3) / 3), h9 % 3 == 0) 1 < this.fu.length && (this.fu.splice(aE, 1), this.resize(), aL.co = !0);
			else if (nY = (a3r[2] - a3r[2] / 10 - 2 * ct) / 2, h9 % 3 == 1) 0 === aE && 1 === this.fu[aE].ud || (h8 < a3r[0] + a3r[2] - 1.5 * nY - ct ? this.fu[aE].be-- : this.fu[aE].be++, this.fu[aE].be < 0 ? this.fu[aE].be = 5 : 5 < this.fu[aE]
				.be && (this.fu[aE].be = 0), aL.co = !0);
			else {
				for (aL.co = !0, h9 = (h8 - (a3r[0] + a3r[2] - nY)) / nY - .5, h9 *= h9 < 0 ? -h9 : h9, h9 = 0 === (h9 = Math.floor(h9 * bZ)) ? 1 : h9, max = bZ, eb = this.fu.length - 1; 0 <= eb; eb--) aE !== eb && (max -= this.fu[eb].ud);
				if (h9 < 0) {
					if (1 === this.fu[aE].ud) return this.fu[aE].ud = max, !0
				} else if (this.fu[aE].ud === max) return this.fu[aE].ud = 1, !0;
				this.fu[aE].ud += h9, this.fu[aE].ud < 1 ? this.fu[aE].ud = 1 : this.fu[aE].ud > max && (this.fu[aE].ud = max)
			}
		}
		return !0
	}, this.a3t = function() {
		for (var ud = Math.floor(bZ / this.fu.length), a47 = bZ % this.fu.length, aE = this.fu.length - 1; 0 <= aE; aE--) this.fu[aE].ud = ud;
		this.fu[0].ud += a47
	}, this.pl = function(h8, h9) {
		var nY = (a3r[2] - 3 * ct) / 4,
			uz = a3r[2] / 6;
		if (h8 < a3r[0] || h9 < a3r[1] || a3r[0] + a3r[2] <= h8) return -1;
		if (h9 < a3r[1] + uz) return h8 < a3r[0] + nY ? 0 : h8 < a3r[0] + nY + ct ? -1 : h8 < a3r[0] + 2 * nY + ct ? 100 : h8 < a3r[0] + 2 * (nY + ct) ? -1 : h8 < a3r[0] + 3 * nY + 2 * ct ? 1 : h8 < a3r[0] + 3 * (nY + ct) ? -1 : 2;
		for (var hE, v0 = a3r[2] / 10, nY = (a3r[2] - v0 - 2 * ct) / 2, aE = 0; aE < this.fu.length; aE++) {
			if (h9 < (hE = a3r[1] + uz + ct + aE * (v0 + ct))) return -1;
			if (!(hE + v0 < h9)) return h8 < a3r[0] + v0 ? 3 + 3 * aE : h8 < a3r[0] + v0 + ct ? -1 : h8 < a3r[0] + a3r[2] - nY - ct ? 4 + 3 * aE : h8 < a3r[0] + a3r[2] - nY ? -1 : 5 + 3 * aE
		}
		return !(this.fu.length < 8) || h9 < (hE = a3r[1] + uz + ct + this.fu.length * (v0 + ct)) || hE + v0 < h9 || a3r[0] + v0 < h8 ? -1 : 27
	}, this.cy = function() {
		cz.lineWidth = qL, cz.textAlign = d1, cz.textBaseline = d0;
		var nY = (a3r[2] - 3 * ct) / 4,
			uz = a3r[2] / 6;
		if (a2C(a3r[0], a3r[1], nY, uz, "rgba(128,0,0,0.75)", .34, "Back", -1, -1), a2C(a3r[0] + nY + ct, a3r[1], nY, uz, "rgba(128,0,128,0.75)", .31, "Custom", -1, -1), a2C(a3r[0] + 2 * (nY + ct), a3r[1], nY, uz, "rgba(" + (fm.fn ? 128 : 0) +
				",128,128,0.75)", .34, fm.fn ? "Reset" : "Maps", -1, -1), a2C(a3r[0] + a3r[2] - nY, a3r[1], nY, uz, "rgba(0,128,0,0.75)", .34, "Start", -1, -1), !fm.fn) {
			for (var hE, v0 = a3r[2] / 10, nY = (a3r[2] - v0 - 2 * ct) / 2, aE = 0; aE < this.fu.length; aE++) hE = a3r[1] + uz + ct + aE * (v0 + ct), a2C(a3r[0], hE, v0, v0, 1 < this.fu.length ? "rgba(128,0,0,0.75)" : "rgba(90,90,90,0.75)", 0,
				null, -1), 1 < this.fu.length && a0z(a3r[0], hE, v0, !1), a2C(a3r[0] + v0 + ct, hE, nY, v0, d2.iM, .4, this.a48(aE), this.fu[aE].be, -1), a2C(a3r[0] + a3r[2] - nY, hE, nY, v0, d2.iM, .4, this.a49(aE), -1, this.fu[aE].ud);
			this.fu.length < 8 && (hE = a3r[1] + uz + ct + this.fu.length * (v0 + ct), a2C(a3r[0], hE, v0, v0, "rgba(0,128,20,0.75)", 0, null, -1, -1), a0z(a3r[0], hE, v0, !0)), rP.pb && rP.cy()
		}
	}, this.a48 = function(aE) {
		return 0 === aE && 1 === this.fu[aE].ud ? "You" : fB.fh[this.fu[aE].be]
	}, this.a49 = function(aE) {
		return 1 === this.fu[aE].ud ? "1 Player" : this.fu[aE].ud + " Players"
	}
}

function vr() {
	this.bU = 0, this.cl = 0, this.tl = null, this.b = function() {
		this.tl = [], this.tl.push({
			h8: 0,
			h9: 0,
			sm: a0,
			oK: null
		}), this.tl.push({
			h8: 0,
			h9: 0,
			sm: !1,
			oK: new a2Y
		}), this.tl.push({
			h8: 0,
			h9: 0,
			sm: !1,
			oK: new a1a
		}), this.tl[2].oK.a1f(), this.bU = this.tl.length, this.cl = 0
	}, this.yR = function() {
		this.cl = Math.floor((a0 ? .063 : .04) * cb), this.cl += 4 - this.cl % 4, this.tl[0].h8 = ct, this.tl[0].h9 = cu - this.cl - ct;
		for (var aE = 1; aE < this.bU; aE++) this.tl[aE].h8 = this.tl[aE - 1].h8 + Math.floor(a0 ? 1.5 * ct : 3.7 * ct) + this.cl, this.tl[aE].h9 = this.tl[0].h9
	}, this.pl = function(cr, cs) {
		if (ch.ci())
			for (var aE = this.bU - 1; 0 <= aE; aE--)
				if (cr >= this.tl[aE].h8 && cs >= this.tl[aE].h9 && cr < this.tl[aE].h8 + this.cl && cs < this.tl[aE].h9 + this.cl) return aE;
		return -1
	}, this.a2O = function() {
		for (var aE = 2; 1 <= aE; aE--)
			if (this.tl[aE].oK.pb) return !0;
		return !1
	}, this.resize = function() {
		for (var aE = 2; 1 <= aE; aE--) this.tl[aE].oK.resize()
	}, this.pq = function() {
		return this.tl[1].oK.pb ? (this.tl[1].oK.cq(-5e3, -5e3, 0), !0) : !!this.tl[2].oK.pb && (this.tl[2].oK.cq(-5e3, -5e3), !0)
	}, this.cq = function(cr, cs, a19) {
		if (a19) {
			if (this.tl[1].oK.pb) return this.tl[1].oK.cq(cr, cs, 0), !0;
			if (this.tl[2].oK.pb) return this.tl[2].oK.cq(cr, cs), !0
		}
		cr = this.pl(cr, cs);
		if (a19) {
			if (0 === cr) return this.tl[cr].sm = !this.tl[cr].sm, a0 = this.tl[cr].sm, q3.a4D(0), aB(this.tl[0].sm, !1), !0;
			if (1 <= cr && cr < 3) return this.tl[cr].oK.b(), pn.l(!1), aL.co = !0
		}
		return !1
	}, this.p8 = function(cr, cs) {
		return this.tl[1].oK.pb ? (this.tl[1].oK.p8(cr, cs), !0) : !!this.tl[2].oK.pb && (this.tl[2].oK.p8(cr), !0)
	}, this.a1k = function() {
		for (var aE = 2; 1 <= aE; aE--)
			if (this.tl[aE].oK.pb) return this.tl[aE].oK.a1k(), !0;
		return !1
	}, this.cy = function() {
		if (ch.ci()) {
			cz.imageSmoothingEnabled = !0;
			for (var aE = this.bU - 1; 0 <= aE; aE--) cz.fillStyle = this.tl[aE].sm ? d2.ie : d2.iM, cz.fillRect(this.tl[aE].h8, this.tl[aE].h9, this.cl, this.cl), 0 === aE ? this.a4E(aE, ch.get(15)) : 1 === aE ? this.a4F() : 2 === aE && this
				.a4G(), cz.setTransform(1, 0, 0, 1, 0, 0), cz.lineWidth = qL, cz.strokeStyle = d2.d3, cz.strokeRect(this.tl[aE].h8, this.tl[aE].h9, this.cl, this.cl);
			cz.imageSmoothingEnabled = !1
		}
	}, this.a4E = function(aE, so) {
		var l4 = .08 * this.cl,
			zoom = (this.cl - 2 * l4) / so.width;
		cz.setTransform(zoom, 0, 0, zoom, this.tl[aE].h8 + l4, this.tl[aE].h9 + (this.cl - zoom * so.height) / 2), cz.drawImage(so, 0, 0)
	}, this.a4F = function() {
		var l4 = .06 * this.cl,
			zoom = (this.cl - 2 * l4) / aF.cl;
		cz.setTransform(zoom, 0, 0, zoom, this.tl[1].h8 + l4, this.tl[1].h9 + l4), cz.drawImage(aF.so[4], 0, 0)
	}, this.a4G = function() {
		cz.setTransform(1, 0, 0, 1, this.tl[2].h8, this.tl[2].h9);
		for (var be = this.cl / 4, h8 = 3; 0 <= h8; h8--)
			for (var h9 = 3; 0 <= h9; h9--) {
				var dF = Math.floor(367 * (h8 + 1) * (h9 + 1) % 256),
					qH = Math.floor(687 * (h8 + 1) * (h9 + 1) % 256),
					em = Math.floor(651 * (h8 + 1) * (h9 + 1) % 256);
				cz.fillStyle = "rgb(" + dF + "," + qH + "," + em + ")", cz.fillRect(h8 * be, h9 * be, be, be)
			}
	}, this.a2V = function() {
		for (var aE = 2; 1 <= aE; aE--)
			if (this.tl[aE].oK.pb) return void this.tl[aE].oK.cy()
	}
}

function rt() {
	var username, a4H;

	function a4P() {
		var tR;
		return 0 === username.indexOf("vote ") && 2 === (tR = username.split(" ")).length ? (rF.a4I = tR[1], a4T(), g6.yJ(0, 7) && jF.a4U(0), rJ.a27(3252), 1) : void 0
	}

	function a4T() {
		username = o(), pn.get().value = username, pn.pw(!0)
	}

	function a4O() {
		var max, a4V;
		if (0 === username.indexOf("account ")) return 2 !== (a4V = username.split(" ")).length || (max = Math.floor(Math.pow(2, 48)), (a4V = parseInt(w.x(a4V[1]))) <= 0) || max <= a4V ? (a4T(), rJ.a27(3266)) : y(a4V) ? (a4T(), rJ.a27(3231)) : (
		a4T(), 5 <= q ? rJ.a27(3232) : (rJ.a27(3265), a2H.pb = !0, a2H.cd = -1)), 1
	}

	function a4R() {
		return void 0 !== username && w.nx(username)
	}

	function a4M() {
		if (a4R()) return pn.pw(!0), 1;
		pn.pw(!1)
	}
	this.a4I = "", this.a4J = -7e3, this.b = function(a4K) {
		q < 5 || (a4H && aL.aM > a4H + 144e5 ? n.setState(14) : a4H = aL.aM), aT.setState(0), rH.yR(), pn.l(!0), rG.b(), cv.yR(), a4K && aK() ? setTimeout(function() {
			0 === aT.pp() && aJ(12)
		}, 15e3) : aJ(12), void 0 === username && (username = o(), pn.get().value = username, a4M())
	}, this.a2K = function() {
		aJ(13), pn.l(!1)
	}, this.a4N = function(cd) {
		return 0 === cd ? rH.cl : 1 === cd ? Math.floor(.3 * rH.eu) : 2 === cd ? pn.get().style.font : username
	}, this.a2h = function() {
		var u;
		username = pn.get().value.trim(), a4M(), "password" !== username && "account" !== username || (u = w.a9(t().toString()), username = "account " + u, pn.get().value = username)
	}, this.cq = function(h8, h9) {
		aL.q0(), 1 === rH.pl(h8, h9, 1, 1) ? a4O() || a4P() || (aJ(10), a4M() ? (this.a2K(), a6(username), ft.b()) : rJ.a27(4214)) : 0 === rH.pl(h8, h9, 0, 1) && this.a2M()
	}, this.a2M = function() {
		a4O() || a4P() || (aJ(10), a4R() && 5 <= username.length && 40 === username.charCodeAt(0) && 40 === username.charCodeAt(1) && 41 === username.charCodeAt(3) && 41 === username.charCodeAt(4) ? rI.a1y(Math.abs(username.charCodeAt(2) + 5)) :
			rI.a1y(hM.a4S), a4M() ? ch.ci() ? (this.a2K(), a6(username), fm.pe(), rI.b()) : rJ.a27(3228) : rJ.a27(4214))
	}, this.a4W = function() {
		return !cv.a2O() && !cw.pb && !pm.pb
	}, this.cy = function() {
		var fQ, hz;
		this.a4W() && (cz.imageSmoothingEnabled = !0, fQ = ch.sp("territorial.io"), hz = 1.1 * rH.cl / fQ.width, cz.setTransform(hz, 0, 0, hz, Math.floor((hG - hz * fQ.width) / 2), rH.h9 - hz * fQ.height - .72 * rH.eu), cz.drawImage(fQ, 0, 0), cz
			.setTransform(1, 0, 0, 1, 0, 0), rH.a1U())
	}, this.a43 = function() {
		return username
	}
}

function ru() {
	var a4Y, dC, ca, a4Z;

	function a4c(cd, name, a4d, v) {
		ca[cd] = name, dC[cd] = new Image, dC[cd].onload = function() {
			0 < a4d && ! function(cd, a4d) {
				var h8, h9, aE, fQ = document.createElement("canvas"),
					cl = dC[cd].width,
					eu = dC[cd].height,
					dD = (fQ.width = cl, fQ.height = eu, fQ.getContext("2d", {
						alpha: !0
					})),
					d9 = (dD.drawImage(dC[cd], 0, 0), dD.getImageData(0, 0, cl, eu)),
					mK = d9.data;
				if (a4d < 3) {
					var a4g = 2 === a4d ? 160 : 600;
					for (h8 = cl - 1; 0 <= h8; h8--)
						for (h9 = eu - 1; 0 <= h9; h9--) mK[aE = 4 * (h8 + h9 * cl)] + mK[aE + 1] + mK[aE + 2] < a4g && (mK[aE + 3] = Math.floor(255 * (mK[aE] + mK[aE + 1] + mK[aE + 2]) / a4g))
				} else if (3 === a4d)
					for (h8 = cl - 1; 0 <= h8; h8--)
						for (h9 = eu - 1; 0 <= h9; h9--) 0 === mK[aE = 4 * (h8 + h9 * cl)] && 200 < mK[aE + 1] && 0 === mK[aE + 2] && (mK[aE + 3] = 0);
				else if (4 === a4d) ! function(mK, cl, eu) {
					var h8, h9, aE;
					for (h8 = cl - 1; 0 <= h8; h8--)
						for (h9 = eu - 1; 0 <= h9; h9--) mK[1 + (aE = 4 * (h8 + h9 * cl))] > mK[aE] + 20 && mK[1 + aE] > mK[2 + aE] + 20 && mK[aE] + mK[2] < 40 && (mK[3 + aE] = 255 - mK[1 + aE], mK[aE] = mK[1 + aE] = mK[2 + aE] = mK[aE])
				}(mK, cl, eu);
				else if (5 === a4d) ! function(mK, cl, eu, id) {
					var h8, h9, aE;
					for (h8 = cl - 1; 0 <= h8; h8--)
						for (h9 = eu - 1; 0 <= h9; h9--) 200 < mK[1 + (aE = 4 * (h8 + h9 * cl))] && mK[1 + aE] - 20 > mK[aE] && mK[1 + aE] - 20 > mK[2 + aE] ? mK[aE] + mK[2 + aE] < 40 ? mK[3 + aE] = 0 : (mK[3 + aE] = mK[aE], mK[aE] = 255,
							mK[1 + aE] = 255, mK[2 + aE] = 255) : mK[aE] < 50 && mK[1 + aE] < 50 && mK[2 + aE] < 50 && (mK[aE] + mK[1 + aE] + mK[2 + aE] < 50 ? (mK[1 + aE] = 0 === id ? mK[1 + aE] : 160, mK[3 + aE] = 180) : (mK[1 +
							aE] = 0 === id ? mK[1 + aE] : 160, mK[3 + aE] = 180 + Math.floor(75 * (mK[aE] + mK[1 + aE] + mK[2 + aE] - 50) / 100)))
				}(mK, cl, eu, 0);
				else if (6 === a4d)
					for (h8 = cl - 1; 0 <= h8; h8--)
						for (h9 = eu - 1; 0 <= h9; h9--) mK[(aE = 4 * (h8 + h9 * cl)) + 3] = Math.floor(255 * (mK[aE] + mK[aE + 1] + mK[aE + 2]) / 765), mK[aE] = mK[aE + 1] = mK[aE + 2] = 255;
				else if (7 === a4d)
					for (h8 = cl - 1; 0 <= h8; h8--)
						for (h9 = eu - 1; 0 <= h9; h9--) mK[(aE = 4 * (h8 + h9 * cl)) + 1] > mK[aE + 2] + 10 && (mK[aE + 3] = mK[aE], mK[aE + 1] = mK[aE + 2]);
				dD.putImageData(d9, 0, 0), dC[cd] = fQ
			}(cd, a4d), a4f()
		}, dC[cd].onerror = function(lk) {
			console.error("Error loading image at index", cd, "Error:", lk), a4f()
		}, dC[cd].src = "data:image/png;base64," + v
	}

	function a4f() {
		ch.ci() || (a4Y--, ch.ci() && (a0s.cg(), nQ.si(), aF.b(), a2S.a1C([dC[8], dC[16], dC[7], dC[9], dC[10]], [!m, 0 === q, !0, !0, !0]), aL.co = !0, dC[7] = a4Z, dC[8] = a4Z, dC[9] = a4Z, dC[10] = a4Z))
	}
	this.b = function() {
		if (void 0 === dC) {
			a4Y = 22, dC = new Array(a4Y), ca = new Array(a4Y), (a4Z = document.createElement("canvas")).width = 1, a4Z.height = 1;
			for (var aE = a4Y - 1; 0 <= aE; aE--) dC[aE] = a4Z;
			a4c(0, "exit", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
				), a4c(1, "victory", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg=="
				), a4c(2, "defeat", 6,
				"iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC"
				), a4c(3, "orders", 6,
				"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"
				), a4c(4, "crown", 4,
				"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
				), a4c(5, "arena", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC"
				), a4c(6, "territorial.io", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAjIAAABBCAIAAABEh9lIAAAACXBIWXMAAFxGAABcRgEUlENBAAAJJWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNTo1OSswMzozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMTItMjNUMTM6MjY6MDUrMDM6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY4ZGZmYjhkLWEyNDEtMTg0Mi1hNGYxLTk2ODMyZGFjYThjYSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE4YTU4YWFiLWE4ODYtNWI0Ni04OTk1LTI3MTdiYWZmOWMzYSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjNhNTMxM2RiLWY0ZGItN2Q0Mi1hZDc1LTEyMTJiNGE0NThjZSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2E1MzEzZGItZjRkYi03ZDQyLWFkNzUtMTIxMmI0YTQ1OGNlIiBzdEV2dDp3aGVuPSIyMDIyLTEyLTIzVDEzOjI1OjU5KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4NjhhNzU5LWRjNDctNGM0My1iYzA1LTllM2ZjOGMwZjY0YSIgc3RFdnQ6d2hlbj0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmOGRmZmI4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"
				), a4c(7, "youtube", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC"
				), a4c(8, "googleplay", 3,
				"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"
				), a4c(9, "discord", 7,
				"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
				), a4c(10, "insta", 3,
				"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"
				), a4c(11, "emojis", 4,
				"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"
				), a4c(12, "flags", 3,
				"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"
				), a4c(13, "bestTeam", 5,
				"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"
				), a4c(14, "bestPlayer", 5,
				"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"
				), a4c(15, "zoom", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
				), a4c(16, "apple", 3,
				"iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII="
				), a4c(17, "loading", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAZEAAABGBAMAAAD/Q7RHAAAAGFBMVEUAAAAnKSZKTElucG2Fh4SoqqfLzcr///+y5yZlAAAEnUlEQVRo3u3aS3PaMBAAYGNsuHoy0+TKTJv6SjNNfeWSciVNJlydF7qGl/n7JTGSd1e7wgaFaWfMKfFD1qeXV5KD8cb8kuC//rWSVtJKWkkraSWtpJW0klbSSlpJK2klraSV/KuSbw9qe8HsfnCyfHVuZu95Kmb3iUdJ+KAvKf7gM119vDoUb8Bv9gLsu2PD97+n4O/tr1/+OzHXXiqTRjHyJukqkLcndKqnDw94yTYfty7JoyD5jtIYeZJ0FEr2Fp670EcnkgScYiRrXkJLI/EjyUjOhtzduSwpBrJEJ4YloSJJPHqRRDRnK3DSPHIpS8w5TjLnJJlVGIkPydjKWdVsw+pZDokueE5SMJKunULuQcIky5a/S7KQJbtiQZLUTmHlQcIkW13YYyqKkRQOycKWKNcjD5dwyebMYJA7JLscspLCknAJgLHxUEnEJbtkmAuXZC5LysqEEq4V1OkoeySm/bxenf22ujd41NolWTskCyoxxfNydXajrL55qCSDXe4LeaNHdl8wkiLofP2NxwNeUhBJiKKJiBbUwRKFBtIxbrVlha3wCzMGGYzROMxLPhIDkhjn/aOtFa93x0o6uHJ1Cb3Bce1NoZYMJabN5w7JEkv6uLSibQT+w0PcFZGhQyFYmZ18CnVY0q0hKbAks6JrL1F9j4S6Gar50jVK0csLSTR97pC85x9IprW7+CESU0B9psCTHroGS8ZgwJAkSyRRqAF7k/TJyIFkWhCjesOSC5CAJNk+GEjqvwobSVIS9sRwVO3vzoXo2TEXGhZOSQ4knUazq/qSDMXe1QgAbp3rBpFzkl4dyQpIurBnqibhilsyJo2WeU6us7U8WLIZ2JLgkyUhkFSNKoN5x5K4liSvJNEnSaZE0gG5ic1dfThFaSTRQ9vpJbBOqsE3hp20kUS/r9JPl0itKzGjwbrqPXlzia5jdXIJ7I+qCsrhFKVRjyeLD6DHJ54lrlEYVIQC789mkliSDD1LUhIEgTdjJEzXm0nw7Bq840eeJY5opSesBrHv+LUoyQTJ5BgJM113RJCpMNnGknSfJKYSGEH6l3BR/dS+4c2WwBidlaDmxUX1oR+JMNNa8MtHK0vSgUZekhIJnWl5kpDZb7fKGLM2iebuBZqp5bIk3rBTepN1TxJT8gO00jJhO3x5FZSYDYuJLKGdgaxI6P9BwxuZgyt4cI8kYxrOR4770kphJTm7VmhZSZCk+H68ShRcbjxJ4MrdNWxFY2mlMJaanSSJyAClwCN/Pmx8SaJ9zc46wUkWLglISl5NPV4irXCH7B1F0xVuvMXnWOH2IBF2HWLcLUE81mjXgWzRTODI7VvSdfafBZmBjRruBKHXp667jKvt5GiJsDuXkXBfmXbXaHeuPHGOJVzfHAXHS/gdU0W2Naam9BvtmJIdwIn0jnsKPEj4XWy6KlVFio12sXE5aElX2GY8VkJ2xx9hRSV2kByLW8WypEcilHNuI+l4Cf7a45ldLzZ5GVrfN4yC/ZKQhu6/ECTxJQnCKoK/s6cdqDfl5AscuIMjS/S/7Bc4z3SlR5DU+5VfRRWvp/sqKiy/iqr/IdZfF1HJgRmsN+0AAAAASUVORK5CYII="
				), a4c(18, "target", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEXUAADUISLWQkLMTQDZZmXAdwC0lADgiIioqQCWvgCE0QAA/wDnra1i6ADw0tL////afMd+AAAC6klEQVRIx42WTWgTURCApzFNY2lLBKEX0dy8iA0UxB8CKgUv0gaKBS2B3HOJnkUDQrENQi6KEITcgydR0l0CUYReJBZCi3YpaC+9FANS6GXZ5+6+eT+z+1adS/ImX97Mzs4f2ET2916vPV9/61At6Ifeq2UIZWXDSYK+IxLIlY4Z+ga6jL8xQbsFoFQrDtF7QqoThaxSDIKsE4HqYJAyhXZNDJxq6VCvZIQgq0NDSJCGgnqFJCiroB2lHTvjS06dWxJSHl0cjBjztm5JxXUBdaXqro8E4j2UD+gg1BamFpkQ75GgVjkkn/8SU+LVUHmaQx/wmB5pEHNzyh4oa08ZkU+oroZQhR8mKMO8PNdPBpBlvoixA67PBBC6lI4yzJVOgb3Nv1+OQawm3h9gJo19jUPHHLrhQ4UEazIKkzZYHJoRvxwuLAzE95voOWzyO5dQ/zkw/QQPfe65DfhwGO2T8JBCB39zqAM8l1Ij3QBMkSC0YFsP94nIB/4fj3vegLb+175IkCX94io0w8/zXJkX0IwezjLUNciTKZrWoSJCF4hLvlCookHHChppPhaB5+7c36BpvOm/oH+Y0x13VSFTx5vGEEzQOPGInyO5KPOUR3yVvrsDIFWBBVOFoR5hlwYczTfgPUmVj1y9SJKiBdhSMM3c0ItZzMwfWFMifeeYomZHpKb89MVWOCWr++hXpNCzfkmViFO6oEvTPtROaAWM/RRtDOx3QO0pyYveCjZ6HreH1saDhiGaeKxj9GUrBzl70iNj54FiCA3BeFVNtXsfEq2Odh/xrjPYxyuG9nuU00YC6DPqrKTcvD6nAshSNclbk3coR1BGDqCmpFJ3Hg++bN2OTNgQ6uojTh9kfP7g5KwnDcWiNl67CQy/SEzzhKvKZORvGqdwxqHLw47JWCOyYfSexaEHsYUmvj9cM6xG1jJlrjqmJcsiFu875nWt91I+4/yLxMXP3lu753PzK+tO8nYY3LbvS2SDtP8A+ntynBIvYeAAAAAASUVORK5CYII="
				), a4c(19, "members", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
				), a4c(20, "hourglass", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
				), a4c(21, "stalemate", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAeoAAABABAMAAAAnsyk1AAAAElBMVEUAAAA8PjxeYF2Rk5C6vLn////ACCfyAAAFMklEQVRo3uXby3qjIBQAYBEfwO+buM9c3Ntp2ZOZ8ADx8v6vMp2qybmBCK6SbNomEc4vcAS0RbG+1Iebvl5/vxev8lIf0+M1nl8DXboJvd5eET1N3QuoGfoVOvlp4q/+6fv3JL2evY83orp/uVH9NbLrp0braXrBLt541LenVpsH9Ao7+/DUc1E0kuF85ZkHdokHMriMPfNEpbo39fx3e1fbV1D3NKVb8KEn1TkpCShvbxET50gvnzdaDG4A520mfhHSvg+oWsHaN9QlCf0Ydc+vqFYqfUk8SeqGNpcDtW+oKzEJ5KqHghYO1ZrOKPLUa842oPYNdbPRGmnqka+JrDAi13eT1Cd6jj9LuV7ff/+g51tQG3FOk6sWei5Qt3Qo5I1raVG9oXbinCZb3dFTCtWszlz1ZwRve9Qli/0YtfW8QzP73CmS1OQD7A6r0aHn49QXxrPyWqlLVrM9BegOqxt5iZat7tleh5UjsslqYXk91HFqIy/RstWDzOOjuE9XC0eNXZQana/hOPUYUBtWZ5q6CmwpBNWlEHykug9v6NQUY8VkNu/3RKlH/1KTs4NqciLPx6k72qjWs/HTJavlw/C1Wwz35Nlxyldb6Q2pGay0OyJNX8fIneFhM9ylmhFeb45RX2gPtKSFRmGXa6e6+LW5WyiGuwTaO3KactTj+nGJdJbQBsebZq9a3hseNsJdcdaRgnPUw1q1FtVq+drNcMxudSmyz+Fw1xK7luyzZandEuM8gP8SyFqnbXkNu9Uy+xIOd00s54YMiZ3X65qrP9+bv/pOIGudXcWFJrwYl4auxB7C6jWx1DSCLLVZDpx//iRFrwXUmqezBHVRfPji8anvw1mTz7LUzRL4/Pc3ArkP55K3TJI6eOteUKv7O4qMnSz13HHsnLZGjSHqkbodG69p6qL45nxzAEEN+pjDfSNLPRfbl/CveyTlIwrDqkhV0/a+hdRgNBtcXJYacXuiBnW2jJCuxjOWPqRu+YajPUA9HzwuHZ2oG77ddztEDWe6Q0htHkFXvh31BPXySyuqQbeuWIz71OWP948rOLyNUsMUpvH389Rz8MsFjKgduA3Jph971C2bvegoNZSWGJCnhivAGquhVLE68tTKxagraVOlO0ANd6oLrEYTA0dH6R51w0OMUouLcps/D8d5BavFk3ZJmYdXPLWZGLXxP7eUpy5hcVhtgkvDNPWlEG7v+cJVgcVpnlrBZtTe+wJ8v26PmucuFTNL0YGntfLUwGaxWt7zua8W9qgVu3rrmBlpFXhaK1NtQGlIrcNPiO1aXzva2CZm9eF5XMseoG5BKyL1Sa7zkqIGKeIPKTuw0jSBmwPK+1GU+gQiRWpPnX2KGp7B8ffPa9SugpzMlkMi1LyLOv6kwEDUnjrHvdfr/6H4HqhE+xRU7UksczrLVGtQF1QrX5x1gtp3CtHahKq990TO+WolNIkNPO+6xrlP7btjMgbSUOOLwOar781gsfoUqnO3Wm93cKY25MxoeFCu2vD7VBa0zkhv2fQpal9urANq55vZDAeowV63Fm58DXR6OCSpq+AFQVKXrD84aRGYqG74yt2CUns206hT1GI+w/8KQNTV5Ln/9NVAuepKVGt2pg1OZ3vVenNziagb9q12ElolUa0fVQE1P9PNJK/IItVCerwEp5KGTTkbUGKuuuSZFmyKPs505QkqVs3Yf8ITaMeGAZxQ5aqX3y1WO5ZlNZ5E7lfjjfCxK4Lqkl/S4YT3IHWH1IrXWeIclKD+LGP9T+Tr8/9r6j/yRPVUqj3rEAAAAABJRU5ErkJggg=="
				)
		}
	}, this.get = function(cd) {
		return dC[cd]
	}, this.sp = function(name) {
		for (var aE = ca.length - 1; 0 <= aE; aE--)
			if (ca[aE] === name) return dC[aE];
		return a4Z
	}, this.ci = function() {
		return 0 === a4Y
	}
}

function rv() {
	var a4o, a4p, a4q, a4r, a4s, a4t, a4u, a4v, a4w, a4x, a4y, a4l = [224, 224, 224],
		a4m = [
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
		a4n = [
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

	function a5L(bc, a5N) {
		a0R[bc] = 0, a0R[bc + 1] = 0, a0R[bc + 2] = a5N, a0R[bc + 3] = 0, a5O(bc)
	}

	function a5O(bc) {
		var h8;
		iD.iE || (h8 = bW.hI(bc), bc = bW.cx(bc), iD.iE = h8 >= i3.a0Q[0] && h8 <= i3.a0Q[2] && bc >= i3.a0Q[1] && bc <= i3.a0Q[3])
	}
	this.b = function(nc) {
		if (a4o = new Uint8Array(bZ), a4p = new Uint8Array(bZ), a4q = new Uint8Array(bZ), a4r = new Uint8Array(bZ), a4s = new Uint8Array(bZ), a4t = new Uint8Array(bZ), a4u = new Uint8Array(bZ), a4v = new Uint8Array(bZ), a4w = new Uint8Array(bZ),
			a4x = new Uint8Array(bZ), this.x9 = new Uint8Array(bZ), (a4y = new Int32Array(4))[0] = -4 * az.b0, a4y[1] = 4, a4y[2] = -a4y[0], a4y[3] = -a4y[1], eO)
			for (var m2, fQ, aE = bZ - 1; 0 <= aE; aE--) fQ = fR.ob[fR.fS[aE]], m2 = bJ((a4n[fQ][3] + 1) * ee.random(), ee.value(100)), a4o[aE] = a4m[fQ][0] + m2 * a4n[fQ][0], a4p[aE] = a4m[fQ][1] + m2 * a4n[fQ][1], a4q[aE] = a4m[fQ][2] + m2 *
				a4n[fQ][2];
		else fm.fn && fm.fo.a55 ? function(ad) {
			var aE;
			for (aE = mr - 1; 0 <= aE; aE--) a4o[aE] = 4 * ad[aE][0], a4p[aE] = 4 * ad[aE][1], a4q[aE] = 4 * ad[aE][2]
		}(fm.fo.a55) : (function() {
			for (var aE = bZ - 1; dv <= aE; aE--) a4o[aE] = 4 * bJ(64 * ee.random(), ee.value(100)), a4p[aE] = 4 * bJ(64 * ee.random(), ee.value(100)), a4q[aE] = 4 * bJ(64 * ee.random(), ee.value(100))
		}(), function(nc) {
			for (var aE = dv - 1; 0 <= aE; aE--) a4o[aE] = 4 * nc[aE].a44[0], a4p[aE] = 4 * nc[aE].a44[1], a4q[aE] = 4 * nc[aE].a44[2]
		}(nc));
		! function() {
			var aE, be;
			for (aE = bZ - 1; 0 <= aE; aE--) be = bJ(a4o[aE] + a4p[aE] + a4q[aE], 3), a4o[aE] += a5F(be - a4o[aE], 2), a4p[aE] += a5F(be - a4p[aE], 2), a4q[aE] += a5F(be - a4q[aE], 2), a4o[aE] -= a4o[aE] % 4, a4p[aE] -= a4p[aE] % 4, a4q[aE] -=
				a4q[aE] % 4
		}(),
		function() {
			for (var aE = bZ - 1; 0 <= aE; aE--) a4o[aE] += bJ(aE, 128), a4p[aE] += bJ(aE % 128, 32), a4q[aE] += bJ(aE % 32, 8), a4r[aE] = aE % 8
		}(), this.a5B(),
			function() {
				for (var aE = bZ - 1; 0 <= aE; aE--) a4s[aE] = a4o[aE] < 32 ? a4o[aE] + 32 : a4o[aE] - 32, a4t[aE] = a4p[aE] < 32 ? a4p[aE] + 32 : a4p[aE] - 32, a4u[aE] = a4q[aE] < 32 ? a4q[aE] + 32 : a4q[aE] - 32
			}(),
			function() {
				for (var aE = bZ - 1; 0 <= aE; aE--) a4v[aE] = 235 < a4o[aE] ? a4o[aE] - 20 : a4o[aE] + 20, a4w[aE] = 235 < a4p[aE] ? a4p[aE] - 20 : a4p[aE] + 20, a4x[aE] = 235 < a4q[aE] ? a4q[aE] - 20 : a4q[aE] + 20
			}()
	}, this.a5E = function(player) {
		var ad = eK.aY;
		return ad[0] = a4o[player], ad[1] = a4p[player], ad[2] = a4q[player], ad
	}, this.a5B = function() {
		for (var aE = bZ - 1; 0 <= aE; aE--) this.x9[aE] = a4o[aE] + a4p[aE] + a4q[aE] < 280 ? 0 : 1
	}, this.hI = function(bc) {
		return bJ(bc, 4) % az.b0
	}, this.cx = function(bc) {
		return bJ(bc, 4 * az.b0)
	}, this.my = function(h8, h9) {
		return Math.floor(4 * (h9 * az.b0 + h8))
	}, this.nD = function(bc) {
		return this.mU(bc + a4y[0]) || this.mU(bc + a4y[1]) || this.mU(bc + a4y[2]) || this.mU(bc + a4y[3])
	}, this.nB = function(bc, player) {
		return this.a5G(bc + a4y[0], player) || this.a5G(bc + a4y[1], player) || this.a5G(bc + a4y[2], player) || this.a5G(bc + a4y[3], player)
	}, this.t6 = function(player) {
		return player < dv && 2 !== dx[player]
	}, this.bf = function(bc) {
		return 208 <= a0R[bc + 3]
	}, this.nI = function(player, bc) {
		return this.bf(bc) && this.a5H(player, bc)
	}, this.a5H = function(player, bc) {
		return player === this.bg(bc)
	}, this.a5I = function(bc) {
		return 208 <= a0R[bc + 3] && a0R[bc + 3] < 224
	}, this.eX = function(bc) {
		return 224 <= a0R[bc + 3] && a0R[bc + 3] < 248
	}, this.nC = function(bc) {
		for (var aE = 3; 0 <= aE; aE--)
			if (this.t8(bc + a4y[aE])) return !0;
		return !1
	}, this.a5J = function(bc) {
		return 192 <= a0R[bc + 3] && a0R[bc + 3] < 208
	}, this.a5K = function(bc, player) {
		return this.a5J(bc) && player === this.bg(bc)
	}, this.bX = function(bc) {
		return this.bf(bc) || this.bh(bc)
	}, this.t8 = function(bc) {
		return 0 === a0R[bc + 3] && 2 === a0R[bc + 2]
	}, this.bh = function(bc) {
		return 0 === a0R[bc + 3] && 1 === a0R[bc + 2]
	}, this.mU = function(bc) {
		return 0 === a0R[bc + 3] && 3 === a0R[bc + 2]
	}, this.t7 = function(bc) {
		return this.mU(bc)
	}, this.a5G = function(bc, player) {
		return this.bh(bc) || this.bf(bc) && player !== this.bg(bc)
	}, this.bg = function(bc) {
		return a0R[bc] % 4 * 128 + a0R[bc + 1] % 4 * 32 + a0R[bc + 2] % 4 * 8 + a0R[bc + 3] % 8
	}, this.nJ = function(bc) {
		a5L(bc, 1)
	}, this.a5M = function(bc) {
		a5L(bc, 2)
	}, this.nA = function(bc, player) {
		a0R[bc] = a4o[player], a0R[bc + 1] = a4p[player], a0R[bc + 2] = a4q[player], a0R[bc + 3] = 208 + a4r[player], a5O(bc)
	}, this.bY = function(bc, player) {
		a0R[bc] = a4s[player], a0R[bc + 1] = a4t[player], a0R[bc + 2] = a4u[player], a0R[bc + 3] = 224 + a4r[player], a5O(bc)
	}, this.eY = function(bc, player) {
		a0R[bc] = a4v[player], a0R[bc + 1] = a4w[player], a0R[bc + 2] = a4x[player], a0R[bc + 3] = 248 + a4r[player], a5O(bc)
	}, this.a5P = function(bc, player) {
		a0R[bc] = a4l[0] + a4o[player] % 4, a0R[bc + 1] = a4l[1] + a4p[player] % 4, a0R[bc + 2] = a4l[2] + a4q[player] % 4, a0R[bc + 3] = 192 + a4r[player], a5O(bc)
	}
}

function rw() {
	var ca, bS, bU, aA, a5Q;

	function a5V() {
		for (var a5a = 0, aE = 1; aE < 5; aE++) a5a += bS[aE] % 1024;
		return a5a
	}

	function a5U() {
		for (var aE = 1; aE < bU - a5Q; aE++) bS[aE] = parseInt(bS[aE])
	}

	function a5W() {
		bS[0] = "Player " + Math.floor(1e3 * Math.random()), bS[1] = a1 < a2 ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, bS[2] = 1, bS[3] = 1, bS[4] = a1 < a2 ? 0 : 1, bS[5] = 0, bS[6] = "000", bS[7] = "0", bS[8] = "0", bS[9] = "0",
			r.a8()
	}

	function a5T() {
		for (var aE = bU - a5Q - 1; 0 <= aE; aE--) bS[aE] = w.x(bS[aE]);
		bS[0] = w.o5(bS[0])
	}

	function a5d(name, value, a5e) {
		var a5f = new Date,
			a5e = (a5f.setTime(a5f.getTime() + Math.floor(31536e6 * a5e)), name + "=" + value + ";expires=" + a5f.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = a5e
	}
	this.b = function() {
		if (!(5 <= q || m)) {
			a5Q = 4, ca = [], bU = 10;
			for (var aE = aA = 0; aE < bU; aE++) ca.push("u" + aE);
			bS = new Array(bU), ! function(a5b) {
				for (var eb, bc, a5c = a5b.split(";"), aE = a5c.length - 1; 0 <= aE; aE--) {
					for (a5c[aE] = a5c[aE].trim(), eb = 2; 0 <= eb; eb--) a5c[aE] = a5c[aE].replace(" ", "");
					3 < a5c[aE].length && (eb = ca.indexOf(a5c[aE].substring(0, 2)), bc = a5c[aE].indexOf("="), 0 <= eb && 2 === bc ? bS[eb] = a5c[aE].substring(bc + 1, a5c[aE].length) : 0 < bc && a5d(a5c[aE].substring(0, bc), "0", 0))
				}
			}(document.cookie), bS[9] || (bS[9] = "0"), (! function() {
				for (var aE = bU - 1; 0 <= aE; aE--)
					if (void 0 === bS[aE]) return;
				return 1
			}() || (aA = 2, a5T(), a5U(), a5V() !== bS[5])) && a5W()
		}
	}, this.a8 = function() {
		if (2 === aA) {
			bS[1] = 0 === bS[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : bS[1], bS[5] = a5V(), ! function() {
				for (var aE = 1; aE < bU - a5Q; aE++) bS[aE] = bS[aE].toString()
			}(), ! function() {
				bS[0] = w.o4(bS[0]);
				for (var aE = bU - a5Q - 1; 0 <= aE; aE--) bS[aE] = w.a9(bS[aE])
			}();
			for (var aE = bU - 1; 0 <= aE; aE--) a5d(ca[aE], bS[aE], 1);
			a5T(), a5U()
		}
	}, this.aA = function() {
		return aA
	}, this.v2 = function(eb) {
		aA = eb, this.a8()
	}, this.a7 = function(aE, value) {
		5 <= q || m || (bS[aE] = value)
	}, this.s = function(aE) {
		return 5 <= q || m ? 0 : bS[aE]
	}
}

function sJ() {
	var cd = 0,
		a5g = new Uint16Array(32);

	function remove(ss) {
		var aE;
		for (cd -= 2, aE = ss; aE < cd; aE += 2) a5g[aE] = a5g[aE + 2], a5g[aE + 1] = a5g[aE + 3]
	}
	this.b = function() {
		cd = 0
	}, this.fA = function() {
		var aE, eU, e0;
		if (0 !== cd)
			if (0 === dw[bN] || b5.a5h(bN) === b5.b6(bN)) cd = 0;
			else
				for (aE = cd - 2; 0 <= aE; aE -= 2)(eU = a5g[aE]) < bZ && 0 === dw[eU] ? remove(aE) : (e0 = a5g[aE + 1], (bZ <= eU && t9(bN) || eU < bZ && tE(bN, eU)) && (cR.cS.cT(e0, eU), remove(aE)))
	}, this.t0 = function(eU, e0) {
		! function(eU, e0) {
			var aE;
			for (aE = 0; aE < cd; aE += 2)
				if (a5g[aE] === eU) return a5g[aE + 1] = Math.min(a5g[aE + 1] + e0, 1023), 1;
			return
		}(eU, e0) && 32 !== cd && (a5g[cd] = eU, a5g[cd + 1] = e0, cd += 2)
	}
}

function a5j(player) {
	a5k(player), a5l(player), a5m(player), bL.bM(player), gF.h3(player), b5.lb(player), eE.a5n.a5o(player)
}

function a5k(player) {
	bW.t6(player) && oQ++;
	var a5p = b5.a5q(player);
	0 === a5p.length ? player === bN && a5r() : (a5s(player, a5p), a5t(player, a5p))
}

function a5r() {
	bR.bS[17] += bO[bN] + b5.a5u(bN), gU.show(!1, !1, !1, !0), g4.zu()
}

function a5s(player, a5p) {
	for (var aE = a5p.length - 1; 0 <= aE; aE--) b5.a5v(a5p[aE], player)
}

function a5w(a5p) {
	for (var cd = 0, aE = a5p.length - 1; 1 <= aE; aE--) bv[a5p[aE]] > bv[a5p[cd]] && (cd = aE);
	return cd
}

function a5t(player, a5p) {
	var aE, ue, a5x = a5p[a5w(a5p)];
	if (9 === fq && 1 === fR.fS[player] && ee.fK(8) && fw.a5y(a5x), player === bN) 2 !== dx[player] && g2.oG(a5x, 1), a5r();
	else {
		for (ue = !1, aE = a5p.length - 1; 0 <= aE; aE--)
			if (a5p[aE] === bN) return ue = !0, void g2.oG(player, 0);
		!ue && player < dv && 2 !== dx[player] && g2.uJ(0, player, a5x)
	}
}

function a5m(player) {
	dw[player] = bO[player] = 0, bV[player] = null, bn[player] = null, bo[player] = null, br[player] = null, gE.a5z(player)
}

function a5l(player) {
	for (var bc, h9, h8 = ex[player]; h8 >= ey[player]; h8--)
		for (h9 = f0[player]; h9 >= f1[player]; h9--) bc = 4 * (h9 * az.b0 + h8), bW.nI(player, bc) && (bW.nJ(bc), bv[player]--)
}

function sP() {
	var input;

	function a60(lk) {
		a62(lk.target.files)
	}

	function a62(files) {
		files && 0 < files.length && pj.a63(files[0])
	}

	function a68(lk) {
		var fQ = new Image;
		fQ.onload = a69, fQ.src = lk.target.result
	}

	function a69(lk) {
		var a6A, lk = lk.target,
			cl = lk.width,
			eu = lk.height;
		4096 < cl || 4096 < eu || cl < 10 || eu < 10 ? (a6A = "Image w & h must be between 10 and 4096.", n ? n.showToast(a6A) : alert(a6A)) : (fm.pe(), az.me = az.xZ(), az.a3V = 0, az.b0 = cl, az.b1 = eu, az.mG.width = az.b0, az.mG.height = az.b1,
			az.mC.drawImage(lk, 0, 0), a6A = az.mC.getImageData(0, 0, az.b0, az.b1), az.mH = a6A.data)
	}

	function a6B(lk) {
		lk.stopPropagation(), lk.preventDefault()
	}

	function a6C() {
		return 0 === aT.pp() || 2 === aT.pp()
	}
	this.b = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = a60
	}, this.a46 = function() {
		input.click()
	}, this.a61 = function(lk) {
		a60(lk)
	}, this.a63 = function(a64) {
		var ad = a64.name.split("."),
			a65 = ad[ad.length - 1].toLowerCase();
		"json" === a65 ? fm.a67(a64) : "gif" !== a65 && "jpg" !== a65 && "jpeg" !== a65 && "png" !== a65 || (az.fo.md[az.xZ()].name = ad[0], (a65 = new FileReader).onload = a68, a65.readAsDataURL(a64))
	}, this.pG = function(lk) {
		a6C() && (a6B(lk), lk.dataTransfer.dropEffect = "copy")
	}, this.pH = function(lk) {
		a6C() && (a6B(lk), a62(lk.dataTransfer.files))
	}
}

function sN() {
	this.a6D = null, this.b = function() {
		this.a6D = 10 !== fq ? null : new Uint32Array(bZ)
	}, this.fA = function() {
		10 === fq && this.a6E()
	}, this.a6E = function() {
		for (var bc, target, a05, a6D = this.a6D, nc = fU, qU = bO, aE = fT - 1; 0 <= aE; aE--) bc = nc[aE], dv <= bc || (target = Math.max(bJ(qU[bc], 4), 2048), a05 = Math.max(bP.a06(bc), 100), a6D[bc] += bJ(a05 * target, 1e4), a6D[bc] >
			target && (a6D[bc] = target))
	}, this.qa = function(player, eV) {
		return eV > this.a6D[player] ? (eV = this.a6D[player], this.a6D[player] = 0) : this.a6D[player] -= eV, eV
	}
}

function sQ() {
	function a68(lk) {
		fm.fn = !0, fm.a6K(JSON.parse(lk.target.result)), fm.ve()
	}

	function a6Q(v, min, max, a6Z) {
		return "string" != typeof v || v.length < min ? a6Z : v.length > max ? v.substring(0, max) : v
	}

	function a6L(aR, min, max) {
		return aR = "number" == typeof aR ? Math.floor(aR) : min, Math.min(Math.max(aR, min), max)
	}

	function a6O(aR, a6b) {
		return "boolean" == typeof aR ? aR : a6b
	}

	function a6S(aR, bU, max, a6c) {
		var aE, ad, m2;
		if (!Array.isArray(aR) || aR.length < 1) return null;
		for (ad = new(8 === a6c ? Uint8Array : Uint16Array)(bU), m2 = aR.length, aE = 0; aE < bU; aE++) ad[aE] = a6L(aR[aE % m2], 0, max);
		return ad
	}
	this.fn = !1, this.fo = null, this.pe = function() {
		this.fn = !1, this.fo = null
	}, this.a42 = function() {
		this.fo.a55 && this.fo.a6F && (this.fo.a55[0] = cv.tl[2].oK.a1i()), qs(this.fo.a6G, 0, this.a6H(), this.fo.qv, !1, !1)
	}, this.a6H = function() {
		return [{
			name: this.fo.a6I ? rF.a43() : this.fo.a6J[0],
			a44: [0, 0, 0],
			a45: 0
		}]
	}, this.a67 = function(a64) {
		var a66 = new FileReader;
		a66.onload = a68, a66.readAsText(a64)
	}, this.a6K = function(uF) {
		this.fo = {}, this.fo.a3y = a6L(uF.numberPlayers, 1, 512), this.fo.a6M = a6L(uF.modeID, 0, 1), this.fo.me = a6L(uF["gMap.mapID"], 0, az.a6N - 1), this.fo.a3Z = a6L(uF.seedMap, 0, 16383), this.fo.a6G = a6L(uF.seedSpawn, 0, 16383), this.fo
			.qy = a6O(uF.selectableSpawn, !1), this.fo.a6I = a6O(uF.selectableName, !1), this.fo.a6F = a6O(uF.selectableColor, !1), az.fo.md[az.xZ()].name = this.fo.a6P = a6Q(uF.mapName, 1, 25, "Custom Map"), this.fo.ty = function(aR) {
				var aE, bU;
				if (!Array.isArray(aR) || aR.length < 1) return [];
				for (bU = aR.length, aE = 0; aE < bU; aE++) aR[aE] = a6Q(aR[aE], 0, 100, "");
				return aR
			}(uF.description), this.fo.mm = a6S(uF.playerX, this.fo.a3y, 4096, 16), this.fo.mx = a6S(uF.playerY, this.fo.a3y, 4096, 16), this.fo.a6T = a6S(uF.playerTeam, this.fo.a3y, 8, 8), this.fo.fp = a6S(uF.playerStrength, this.fo.a3y, 5, 8),
			this.fo.a55 = function(aR, bU) {
				var aE, ad, m2;
				if (!Array.isArray(aR) || aR.length < 1) return null;
				for (ad = new Array(bU), m2 = aR.length, aE = 0; aE < bU; aE++) ad[aE] = a6S(aR[aE % m2], 3, 63, 8);
				return ad
			}(uF.playerColor, this.fo.a3y), this.fo.a6J = function(aR, bU) {
				var aE, ad, m2;
				if (!Array.isArray(aR) || aR.length < 1) return null;
				for (ad = new Array(bU), m2 = aR.length, aE = 0; aE < bU; aE++) ad[aE] = a6Q(aR[aE % m2], 3, 26, "Bot");
				return ad
			}(uF.playerName, this.fo.a3y), this.fo.a6W = "string" == typeof uF.mapBase64 ? uF.mapBase64 : "", this.fo.a6I = this.fo.a6I || !this.fo.a6J, this.fo.qv = 0 === this.fo.a6M ? 7 : 2 === this.fo.a6M ? 9 : 6, this.fo.mm = this.fo.mx ?
			this.fo.mm : null
	}, this.ve = function() {
		! function(v) {
			var dC, d9, a6Y = "data:image/png;base64,";
			if (v.length <= a6Y.length) return;
			fm.fo.me = 0, fm.fo.a3Z = 0, az.lw(0, 0), v.substring(0, a6Y.length) !== a6Y && (v = a6Y + v);
			return (dC = new Image).onload = function() {
				az.b0 = dC.width, az.b1 = dC.height, 4096 < az.b0 || 4096 < az.b1 || az.b0 < 10 || az.b1 < 10 ? (az.lw(0, 0), alert("Image w & h must be between 10 and 4096.")) : (az.me = az.xZ(), az.a3V = 0, az.mG.width = az.b0, az.mG
					.height = az.b1, az.mC.drawImage(dC, 0, 0), d9 = az.mC.getImageData(0, 0, az.b0, az.b1), az.mH = d9.data)
			}, dC.src = v, fm.fo.a6W = "", 1
		}(this.fo.a6W) && az.lw(this.fo.me, this.fo.a3Z)
	}, this.a6d = function() {
		for (var max = 0, bU = this.fo.a3y, aE = 0; aE < bU; aE++) this.fo.a6T[aE] > max && (max = this.fo.a6T[aE]);
		return Math.max(0, max - 1)
	}
}

function rx() {
	var a6e, a6f, d6, eU, eV, id;

	function a6g(player) {
		return player < dv ? a6e * player : a6e * dv + a6f * (player - dv)
	}
	this.b = function() {
		a6e = dv < 16 ? 12 : 8, a6f = 4;
		var bU = a6g(bZ);
		d6 = new Uint8Array(bZ), eU = new Uint16Array(bU), eV = new Uint32Array(bU), id = new Uint16Array(bU)
	}, this.kS = function(wd, a6h) {
		var a6i = this.c9(wd, a6h);
		this.c8(wd, a6h, 0), a6i = cK.cL.jj(wd, a6i), wd === bN && (bR.bS[13] -= a6i)
	}, this.lb = function(player) {
		d6[player] = 0
	}, this.a5v = function(player, a6h) {
		var fY, a6h = function(player, a6h) {
			var aE, m2 = a6g(player);
			for (aE = d6[player] - 1; 0 <= aE; aE--)
				if (0 === id[m2 + aE] && eU[m2 + aE] === a6h) return aE;
			return d6[player]
		}(player, a6h);
		a6h !== d6[player] && (fY = eV[a6g(player) + a6h], this.bT(player, a6h), this.eR(player, fY, bZ))
	}, this.cP = function(player, a6h) {
		for (var m2 = a6g(player), aE = d6[player] - 1; 0 <= aE; aE--)
			if (0 === id[m2 + aE] && eU[m2 + aE] === a6h) return !0;
		return !1
	}, this.cO = function(player) {
		return player < dv ? d6[player] < a6e : d6[player] < a6f
	}, this.b6 = function(player) {
		return d6[player]
	}, this.bC = function(player, aE) {
		return eU[a6g(player) + aE]
	}, this.b7 = function(player, aE) {
		return id[a6g(player) + aE]
	}, this.hL = function(player, a6k) {
		for (var m2 = a6g(player), aE = d6[player] - 1; 0 <= aE; aE--)
			if (id[m2 + aE] === a6k) return aE;
		return -1
	}, this.bD = function(player, aE) {
		return eV[a6g(player) + aE]
	}, this.c9 = function(player, a6h) {
		for (var m2 = a6g(player), aE = d6[player] - 1; 0 <= aE; aE--)
			if (0 === id[m2 + aE] && eU[m2 + aE] === a6h) return eV[m2 + aE];
		return 0
	}, this.a5u = function(player) {
		for (var m2 = a6g(player), aR = 0, aE = d6[player] - 1; 0 <= aE; aE--) aR += eV[m2 + aE];
		return aR
	}, this.a6l = function(player) {
		for (var m2 = a6g(player), aR = 0, aE = d6[player] - 1; 0 <= aE; aE--) 0 === id[m2 + aE] && (aR += eV[m2 + aE]);
		return aR
	}, this.a5h = function(player) {
		for (var m2 = a6g(player), ud = 0, aE = d6[player] - 1; 0 <= aE; aE--) 0 < id[m2 + aE] && ud++;
		return ud
	}, this.c8 = function(player, a6h, fY) {
		for (var m2 = a6g(player), aE = d6[player] - 1; 0 <= aE; aE--) 0 === id[m2 + aE] && eU[m2 + aE] === a6h && (eV[m2 + aE] = fY)
	}, this.bu = function(player, aE, fY) {
		eV[a6g(player) + aE] = fY
	}, this.eR = function(player, fY, a6h) {
		var aE, m2 = a6g(player);
		for (a6h === bN && bR.bS[player < dv ? 6 : 5]++, aE = d6[player] - 1; 0 <= aE; aE--)
			if (0 === id[m2 + aE] && eU[m2 + aE] === a6h) return eV[m2 + aE] += fY, void(eV[m2 + aE] = eV[m2 + aE] > qW ? qW : eV[m2 + aE]);
		eU[m2 + d6[player]] = a6h, eV[m2 + d6[player]] = fY, id[m2 + d6[player]] = 0, d6[player]++, player < dv && (a6h === bN ? g2.oG(player, 5) : player === bN && g3.uL(a6h))
	}, this.a6m = function(player, fY, a6k) {
		var m2 = a6g(player);
		dw[player] = 2, eU[m2 + d6[player]] = 0, eV[m2 + d6[player]] = fY, id[m2 + d6[player]] = a6k, d6[player]++
	}, this.bT = function(player, cd) {
		var eb, m2;
		if (0 !== d6[player])
			for (m2 = a6g(player), d6[player]--, eb = cd; eb < d6[player]; eb++) eU[m2 + eb] = eU[m2 + eb + 1], eV[m2 + eb] = eV[m2 + eb + 1], id[m2 + eb] = id[m2 + eb + 1]
	}, this.a5q = function(player) {
		for (var eb, m2, a5p = [], aE = fT - 1; 0 <= aE; aE--)
			for (m2 = a6g(fU[aE]), eb = d6[fU[aE]] - 1; 0 <= eb; eb--)
				if (0 === id[m2 + eb] && eU[m2 + eb] === player) {
					a5p.push(fU[aE]);
					break
				} return a5p
	}
}

function ry() {
	var a6n, a6o, a6p, a6q, a6r, a6s;
	this.b = function() {
		a6p = a6n = 10, a6q = a6o = 10
	}, this.a6t = function() {
		a6s = 512, a6r = new Uint16Array(a6s);
		for (var aE = 0; aE < a6s; aE++) a6r[aE] = 100 + cD(bJ(25600 * aE, a6s - 4), 9)
	}, this.yp = function() {
		return a6q
	}, this.fA = function() {
		if (--a6p <= 0 && (a6p = a6n, function() {
				var aE, a6y, a3 = bO[bN];
				for (fs && !eO && 0 !== dw[0] && 0 === ft.fu[0].be && (bO[0] += bJ(bv[0], 6)), aE = fT - 1; 0 <= aE; aE--) a6y = bJ(bP.a06(fU[aE]) * bO[fU[aE]], 1e4), bO[fU[aE]] += a6y < 1 ? 1 : a6y, bP.bQ(fU[aE]);
				bR.bS[9] += bO[bN] - a3
			}(), --a6q <= 0)) {
			a6q = a6o;
			for (var a3 = bO[bN], aE = fT - 1; 0 <= aE; aE--) bO[fU[aE]] += bv[fU[aE]], bP.bQ(fU[aE]);
			bR.bS[8] += bO[bN] - a3
		}
	}, this.a06 = function(player) {
		var dF = a6r[bJ((a6s - 1) * bv[player], qn)],
			a6x = (aL.fP() < 1920 && (dF = dF < (a6x = bJ(100 * (13440 - 6 * aL.fP()), 1920)) ? a6x : dF), this.fE(player));
		return bO[player] > a6x && (dF -= bJ(2 * dF * (bO[player] - a6x), a6x)), dF < 0 ? 0 : 700 < dF ? 700 : dF
	}, this.fE = function(player) {
		player = 100 * bv[player];
		return qo < player ? qo : player
	}, this.bQ = function(player) {
		var aR = bv[player] * qV;
		bO[player] = Math.min(Math.min(bO[player], qW), aR)
	}, this.jJ = function(player, jK) {
		cK.cL.jj(jK, eK.aX[0]), bR.jk(player, jK), g3.a70(player, eK.aX[0] + eK.aX[1]), g3.jl(jK, eK.aX[0]), cK.cL.kF(player)
	}
}

function rz() {
	var a71, a72, a73, a74, a75, a76, a77, a78, a79, a7A, a7B, a7C, a7D, a7E, a7F, a7G, a7H, a7I, a7K, a7L, a7M, a7N, a7O, a7U, a7V, a7J = null,
		a7Q = 0,
		a7R = new Float32Array(4),
		a7S = 0,
		a7T = !0;

	function a7X() {
		a7J.width = hG, a7J.height = cu, (a7K = a7J.getContext("2d", {
			alpha: !0
		})).textAlign = d1, a7K.textBaseline = d0, a7K.imageSmoothingEnabled = !0
	}

	function a7Y() {
		var aE, a7c;
		for (cz.font = ce + Math.floor(100 * a7B) + cf, a7c = 80 / Math.floor(cz.measureText(gM.hP(qW)).width), cz.font = ce + 100 + cf, aE = bZ - 1; 0 <= aE; aE--) a78[aE] = 100 / Math.floor(cz.measureText(hQ[aE]).width), a77[aE] = Math.min(a7c,
			a78[aE])
	}

	function a7d(aE) {
		return !hM.hN.hO || bO[aE] < 1e6 ? 1 : bO[aE] < 1e7 ? a7R[0] : a7R[Math.min(Math.floor(Math.log10(bO[aE])) - 6, 3)]
	}

	function a7b(dD) {
		a7I = !1, a7H = 1, a7F = a7G = 0, a7T ? (dD.textAlign = d1, dD.textBaseline = d0) : dD.clearRect(0, 0, hG, cu);
		var hA, hB, aE, cj, hC, hD = e1 / e2,
			hE = e3 / e2,
			hF = (hG + e1) / e2,
			hH = (cu + e3) / e2,
			a7h = 0 !== dw[bN] && bW.t6(bN);
		dD.imageSmoothingEnabled = !0;
		for (var eb = fT - 1; 0 <= eb; eb--) aE = fU[eb], (cj = a7E * e2 * a7d(aE) * a77[aE] * a75[aE]) < a7D || a79 <= cj || a73[aE] + a75[aE] > hD && a73[aE] < hF && a74[aE] + a76[aE] > hE && a74[aE] < hH && (hA = hG * (a73[aE] + a75[aE] / 2 -
			hD) / (hF - hD), hB = cu * (a74[aE] + a76[aE] / 2 - hE) / (hH - hE) - .1 * cj, dD.font = vm[dx[aE]] + cj + cf, dD.fillStyle = function(cj, aE) {
				if (a7A <= cj && cj < a79) return fR.a7u[bW.x9[aE]] + a7q(cj).toFixed(3) + ")";
				return fR.a7v[bW.x9[aE]]
			}(cj, aE), hM.hN.hO ? dD.fillText(gM.hP(bO[aE]), hA, hB) : a7j(aE, cj, hA, hB, dD), a7I = !0, 0 < a7M[aE] ? function(hA, hB, cj, aE, dD) {
				0 === yq[aE] ? aF.vg(a7L[aE]) ? (function(hA, hB, cj, player, jY, dD) {
					for (var tV = .9 * cj / aF.cl, mq = hB - .5 * tV * aF.cl - .05 * cj, dB = (dD.globalAlpha = a7q(cj), a7d(player) * (hM.hN.hO ? a7S : a78[player])), mp = hA - .5 * cj / dB - .4 * cj - tV * aF.cl, em = 0; em < 2; em++)
						dD.setTransform(tV, 0, 0, tV, mp, mq), dD.drawImage(aF.so[jY], 0, 0), mp = hA + .5 * cj / dB + .4 * cj;
					dD.globalAlpha = 1, dD.setTransform(1, 0, 0, 1, 0, 0)
				}(hA, hB, cj, aE, a7L[aE], dD), a7l(hA, hB, cj, 0, 0, dD)) : aF.vf(a7L[aE]) ? (a7t(hA, hB, cj, a7L[aE], 0, dD), a7l(hA, hB, cj, 0, 1, dD)) : (a7t(hA, hB, cj, a7L[aE], 1, dD), a7l(hA, hB, cj, 1, 0, dD)) : a7t(hA, hB, cj, a7L[
					aE], 0, dD)
			}(hA, hB, cj, aE, dD) : 0 === yq[aE] && a7l(hA, hB, cj, 0, 0, dD), a7h && (0 < a7M[aE + bZ] || 0 < a7M[aE + 2 * bZ] || 0 < a7M[aE + 3 * bZ] || 0 < a7M[aE + 4 * bZ]) && function(hA, hB, cj, aE, dD) {
				var fQ, ud = -1;
				for (fQ = 4; 1 <= fQ; fQ--) 0 < a7M[aE + fQ * bZ] && ud++;
				for (fQ = 1; fQ < 5; fQ++) 0 < a7M[aE + fQ * bZ] && (! function(hA, hB, cj, fQ, aE, a7o, a3, dD) {
					var tV = .8 * cj / aF.cl,
						hA = hA - .5 * tV * aF.cl - .534 * a7o * cj,
						a7o = hB + 1.4 * tV * aF.cl;
					dD.setTransform(tV, 0, 0, tV, hA, a7o), dD.globalAlpha = a7q(cj), hB = 1 === fQ ? aF.so[a7L[aE + bZ]] : 2 === fQ ? nQ.sk()[4].dC[a3 < 255 ? 1 : 0] : (3 === fQ ? nQ.sk()[5] : nQ.sk()[6]).dC[0];
					dD.drawImage(hB, 0, 0), dD.globalAlpha = 1, dD.setTransform(1, 0, 0, 1, 0, 0)
				}(hA, hB, cj, fQ, aE, ud, a7M[aE + fQ * bZ], dD), ud -= 2)
			}(hA, hB, cj, aE, dD), (hC = a7B * cj) < a7D || (dD.font = ce + hC + cf, hM.hN.hO ? a7j(aE, hC, hA, hB + .78 * cj, dD) : dD.fillText(gM.hP(bO[aE]), hA, hB + .78 * cj)));
		dD.imageSmoothingEnabled = !1
	}

	function a7j(aE, cj, h8, h9, dD) {
		dD.fillText(hQ[aE], h8, h9), aE < dv && 2 !== dx[aE] || (aE = cj / a78[aE], dD.fillRect(h8 - .5 * aE, h9 + cK.iG.qG * cj, aE, Math.max(1, .1 * cj)))
	}

	function a7l(hA, hB, cj, a7o, a7p, dD) {
		var tV = .95 * cj / a7O,
			hA = hA - .5 * tV * a7N + .8 * a7o * cj,
			a7o = hB - 1.76 * tV * a7O - .82 * a7p * cj;
		dD.setTransform(tV, 0, 0, tV, hA, a7o), dD.globalAlpha = a7q(cj), dD.drawImage(ch.get(4), 0, 0), dD.globalAlpha = 1, dD.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a7t(hA, hB, cj, jY, a7o, dD) {
		var tV = 1.2 * cj / aF.cl,
			hA = hA - .5 * tV * aF.cl - .8 * a7o * cj,
			a7o = hB - 1.5 * tV * aF.cl;
		dD.setTransform(tV, 0, 0, tV, hA, a7o), dD.globalAlpha = a7q(cj), dD.drawImage(aF.so[jY], 0, 0), dD.globalAlpha = 1, dD.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a7q(cj) {
		return a7A <= cj && cj < a79 ? 1 - (cj - a7A) / (a79 - a7A) : 1
	}

	function a84(dB, cl) {
		return 1 + Math.floor(a7C * dB * cl)
	}

	function a81(aE) {
		for (var left = a73[aE], eb = a73[aE] - ey[aE] - 1; 0 <= eb; eb--)
			if (!a86(aE, --left, a74[aE], a76[aE])) {
				left++;
				break
			} var lL = a73[aE];
		for (eb = ex[aE] - a73[aE] - a75[aE]; 0 <= eb; eb--)
			if (!a86(aE, ++lL + a75[aE] - 1, a74[aE], a76[aE])) {
				lL--;
				break
			} var h8 = Math.floor((left + lL) / 2),
			top = a74[aE];
		for (eb = a74[aE] - f1[aE] - 1; 0 <= eb; eb--)
			if (!a87(aE, h8, --top, a75[aE])) {
				top++;
				break
			} var bottom = a74[aE];
		for (eb = f0[aE] - a74[aE] - a76[aE]; 0 <= eb; eb--)
			if (!a87(aE, h8, ++bottom + a76[aE] - 1, a75[aE])) {
				bottom--;
				break
			} var h9 = Math.floor((top + bottom) / 2);
		a7y(aE, h8, h9, a75[aE], a76[aE]) && (a73[aE] = h8, a74[aE] = h9)
	}

	function a7y(player, h8, h9, cl, eu) {
		be = Math.floor(.2 * cl);
		for (var be, fQ = h8 + cl - 1; h8 <= fQ; fQ--)
			if (!a86(player, fQ, h9, eu)) return;
		for (fQ = h9 + eu - 1 - (be = (be = Math.floor(.25 * eu)) < 1 ? 1 : be); h9 + be <= fQ; fQ--)
			if (!a87(player, h8, fQ, cl)) return;
		return 1
	}

	function a86(player, h8, h9, eu) {
		return bW.nI(player, 4 * (h9 * az.b0 + h8)) && bW.nI(player, 4 * ((h9 + eu - 1) * az.b0 + h8))
	}

	function a87(player, h8, h9, cl) {
		return bW.nI(player, 4 * (h9 * az.b0 + h8)) && bW.nI(player, 4 * (h9 * az.b0 + h8 + cl - 1))
	}
	this.b = function() {
		if (a7I = !1, a7E = .88, a7B = .5, a7C = 1.8, a79 = Math.floor(.5 * vs), a7A = Math.floor(.2 * a79), a7D = hM.hN.a7W < 4 ? 1 + hM.hN.a7W : 2 * (hM.hN.a7W - 1), a72 = a71 = 0, a73 = new Uint16Array(bZ), a74 = new Uint16Array(bZ), a75 =
			new Uint16Array(bZ), a76 = new Uint16Array(bZ), a77 = new Float32Array(bZ), a78 = new Float32Array(bZ), a7L = new Uint8Array(2 * bZ), a7M = new Uint8Array(5 * bZ), a7U = new Uint8Array(bZ), a7V = new Uint8Array(bZ), a7T || (a7J =
				a7J || document.createElement("canvas"), a7X()), a7G = a7F = 0, a7H = 1, hM.hN.hO) {
			var aE, a7c;
			for (a7Y(), cz.font = ce + Math.floor(100) + cf, a7c = 100 / Math.floor(cz.measureText("900 000").width), aE = bZ - 1; 0 <= aE; aE--) a77[aE] = Math.min(a7c, 2 * a78[aE]);
			a7S = a7c, a7R[0] = 100 / (a7c * Math.floor(cz.measureText("5 000 000").width)), a7R[1] = 100 / (a7c * Math.floor(cz.measureText("50 000 000").width)), a7R[2] = 100 / (a7c * Math.floor(cz.measureText("500 000 000").width)), a7R[3] =
				100 / (a7c * Math.floor(cz.measureText("1 000 000 000").width))
		} else a7Y();
		! function() {
			var aE;
			for (aE = bZ - 1; 0 <= aE; aE--) bv[aE] < 12 ? (a73[aE] = ey[aE] + 1, a74[aE] = f1[aE] + 1, a75[aE] = 1, a76[aE] = 1) : (a73[aE] = ey[aE], a74[aE] = f1[aE] + 1, a75[aE] = 4, a76[aE] = 2);
			if (hm)
				for (aE = 0; aE < dv; aE++) a75[aE] = 0;
			a7N = ch.get(4).width, a7O = ch.get(4).height
		}()
	}, this.a70 = function(bc, ug) {
		ug > 18 * bv[bc] ? (a7V[bc] = 6, bW.x9[bc] = 2 + bW.x9[bc] % 2) : (a7U[bc] = 4, (bW.x9[bc] < 2 || 3 < bW.x9[bc]) && (bW.x9[bc] = 6 + bW.x9[bc] % 2))
	}, this.jl = function(bc, ug) {
		ug > 6 * bv[bc] ? (a7V[bc] = 6, bW.x9[bc] = 4 + bW.x9[bc] % 2) : (a7U[bc] = 4, (bW.x9[bc] < 4 || 5 < bW.x9[bc]) && (bW.x9[bc] = 8 + bW.x9[bc] % 2))
	}, this.resize = function() {
		a7T || (a7X(), a7b(a7K))
	}, this.qj = function() {
		for (var aE = 0; aE < dv; aE++) ex[aE] - ey[aE] != 3 || f0[aE] - f1[aE] != 3 ? (a73[aE] = ey[aE] + (ex[aE] !== ey[aE] ? 1 : 0), a74[aE] = f1[aE], a75[aE] = 1, a76[aE] = 1) : (a73[aE] = ey[aE], a74[aE] = f1[aE] + 1, a75[aE] = 4, a76[aE] =
			2)
	}, this.kT = function(player, cd, a7e) {
		player += cd * bZ;
		if (0 === cd) return a7L[player] === a7e && 0 < a7M[player] ? void(a7M[player] = 0) : (a7L[player] = a7e, void(a7M[player] = aF.vg(a7e) ? 255 : 64));
		1 === cd ? (a7M[player] = 64, a7L[player] = a7e) : a7M[player] = a7e
	}, this.cy = function() {
		a7T ? a7b(cz) : a7I && (1 !== a7H ? (cz.imageSmoothingEnabled = !0, cz.setTransform(a7H, 0, 0, a7H, 0, 0), cz.drawImage(a7J, -a7F / a7H, -a7G / a7H), cz.setTransform(1, 0, 0, 1, 0, 0)) : (cz.imageSmoothingEnabled = !1, cz.drawImage(a7J, -
			a7F, -a7G)))
	}, this.y1 = function(dm, dq) {
		a7F += dm, a7G += dq
	}, this.p8 = function(dm, dq) {
		g3.y1(dm, dq)
	}, this.zoom = function(cZ, cr, cs) {
		a7H *= cZ, a7F = (a7F + cr) * cZ - cr, a7G = (a7G + cs) * cZ - cs
	}, this.ga = function(ur) {
		return !a7T && (ur ? ++a7Q % hM.zN[hM.hN.a7f] == 0 : aL.fP() % hM.zN[hM.hN.a7f] == 0) && (a7Q = 0, a7b(a7K), !0)
	}, this.hJ = function(aE) {
		return a7d(aE) * a77[aE]
	}, this.a7g = function(player) {
		return a77[player]
	}, this.fA = function() {
		4 <= ++a72 && ! function() {
			var aE, eb, em;
			for (a72 = 0, em = 4; 1 <= em; em--)
				for (eb = fT - 1; 0 <= eb; eb--) aE = fU[eb] + em * bZ, 0 < a7M[aE] && a7M[aE] < 255 && a7M[aE]--;
			if (2 !== gb)
				for (eb = fT - 1; 0 <= eb; eb--) aE = fU[eb], 0 < a7M[aE] && a7M[aE] < 255 && a7M[aE]--
		}();
		for (var bU = Math.floor(.1 * fT), aE = a71 + (bU = fT < (bU = bU < 8 ? 8 : bU) ? fT : bU) - 1; a71 <= aE; aE--) ! function(aE) {
			var dB = a7d(aE) * a77[aE];
			0 < a75[aE] && a7y(aE, a73[aE], a74[aE], a75[aE], a76[aE]) ? ! function(aE) {
				for (var h8, h9, cl, eu, df = !1, em = 0; em < 8; em++) {
					if (cl = a75[aE] + 2, eu = a76[aE] + 2, cl > ex[aE] - ey[aE] + 1 || eu > f0[aE] - f1[aE] + 1) return df;
					if (h8 = a73[aE] - 1, h9 = a74[aE] - 1, !a7y(aE, h8, h9, cl, eu)) return df;
					a73[aE] = h8, a74[aE] = h9, a75[aE] = cl, a76[aE] = eu, df = !0
				}
				return df
			}(aE) && function(aE, dB) {
				for (var h8, h9, cl, eu, df = !1, a1A = a75[aE], hz = 1 + Math.floor(.02 * a1A), em = 1; em < 5; em++) {
					if ((cl = a1A + em * hz) > ex[aE] - ey[aE] + 1) return df;
					if ((eu = a84(dB, cl)) > f0[aE] - f1[aE] + 1) return df;
					h8 = ey[aE] + Math.floor(Math.random() * (ex[aE] - ey[aE] + 2 - cl)), h9 = f1[aE] + Math.floor(Math.random() * (f0[aE] - f1[aE] + 2 - eu)), a7y(aE, h8, h9, cl, eu) && (a73[aE] = h8, a74[aE] = h9, a75[aE] = cl, a76[
						aE] = eu, df = !0)
				}
				return df
			}(aE, dB) && a81(aE) : ! function(aE, dB) {
				var eu, h8 = a73[aE] + 1,
					h9 = a74[aE] + 1,
					cl = a75[aE] - 2;
				for (;;) {
					if (cl < 1) {
						a75[aE] = 0;
						break
					}
					if (eu = a84(dB, cl), a7y(aE, h8, h9, cl, eu)) return a73[aE] = h8, a74[aE] = h9, a75[aE] = cl, a76[aE] = eu, 1;
					h8++, h9++, cl -= 2
				}
				return
			}(aE, dB) ? function(aE, dB) {
				var h8, h9, cl, eu, em, i5, ed = ex[aE] - ey[aE] + 1,
					a85 = Math.floor(.02 * ed);
				for (i5 = -6 * (a85 = a85 < 1 ? 1 : a85), em = ed; i5 <= em; em -= a85)
					if (eu = a84(dB, cl = 0 < em ? em : 1), h8 = ey[aE] + Math.floor(Math.random() * (ex[aE] - ey[aE] + 2 - cl)), h9 = f1[aE] + Math.floor(Math.random() * (f0[aE] - f1[aE] + 2 - eu)), a7y(aE, h8, h9, cl, eu)) return a73[
						aE] = h8, a74[aE] = h9, a75[aE] = cl, a76[aE] = eu
			}(aE, dB) : a81(aE)
		}(fU[aE % fT]);
		a71 = (a71 + bU) % fT
	}, this.gJ = function() {
		var aE, bc, dQ, dR;
		if (aL.fP() % 4 == 1)
			for (aE = fT - 1; 0 <= aE; aE--) bc = fU[aE], bW.x9[bc] < 2 || ((dQ = Math.max(a7U[bc] - 1, 0)) === (dR = Math.max(a7V[bc] - 1, 0)) ? 0 === dQ && (bW.x9[bc] %= 2) : 0 === dR && bW.x9[bc] < 6 && (bW.x9[bc] += 4), a7U[bc] = dQ, a7V[
				bc] = dR)
	}, this.uL = function(player) {
		var aE = player + 2 * bZ,
			a3 = a7M[aE];
		return 0 < a3 && (g2.oF(50, player), a7M[aE] = 0, 255 === a3)
	}, this.tC = function(player) {
		return 255 === a7M[player + 2 * bZ]
	}
}

function s0() {
	var ca, a88;
	this.b = function() {
		ca = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var aE, eb, a89 = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			a8A = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (a88 =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), aE = ca.length - 1; 0 <= aE; aE--)
			for (eb = a89.length - 1; 0 <= eb; eb--) ca[aE] = ca[aE].replace(a89[eb], a8A[eb]);
		if (settings.realisticNames) ca = realisticNames;
	}, this.lw = function() {
		var aE;
		if (fm.fn && fm.fo.a6J)
			for (aE = dv; aE < bZ; aE++) hQ[aE] = fm.fo.a6J[aE % mr];
		else(9 === fq ? function() {
			var aE, dF = ee.random(),
				bU = ca.length,
				m2 = dv + fw.a8G;
			for (aE = m2 - 1; dv <= aE; aE--) hQ[aE] = ca[(aE + dF) % bU];
			for (bU = a88.length, aE = m2; aE < bZ; aE++) hQ[aE] = a88[aE % bU]
		} : fs ? function() {
			var aE, dF = ee.random();
			for (aE = dv; aE < bZ; aE++) hQ[aE] = ca[(aE + dF) % bZ]
		} : function() {
			var aE, bU = ca.length,
				dF = ee.random();
			for (aE = dv; aE < bZ; aE++) hQ[aE] = ca[(aE + dF) % bU]
		})()
	}, this.r6 = function() {
		var aE, bU, m2, dF;
		if (!fs) {
			for (uw = new Array(dv), bU = dv, aE = 0; aE < bU; aE++) uw[aE] = hQ[aE];
			if (hM.hN.uv) {
				for (m2 = ca.length, dF = ee.a8F(), aE = 0; aE < bU; aE++) hQ[aE] = ca[(aE + dF) % m2];
				hQ[bN] = uw[bN]
			}
		}
	}
}

function sO() {
	this.a8H = [], this.a8I = [], this.b = function() {
		this.a8H = [], this.a8I = []
	}, this.fA = function() {
		0 <= this.a8H.length && this.a8J(this.a8H), 0 <= this.a8I.length && this.a8J(this.a8I)
	}, this.a8J = function(ad) {
		for (var em = -1, aE = ad.length - 1; 0 <= aE; aE--)
			if (ad[aE].aM--, ad[aE].aM <= 0) {
				em = aE;
				break
			} for (aE = em; 0 <= aE; aE--) ad.shift()
	}, this.sy = function(id, nc, a8K) {
		return this.a8L(this.a8H, id, nc, a8K)
	}, this.a8M = function(id, nc, a8K) {
		return this.a8L(this.a8I, id, nc, a8K)
	}, this.a8L = function(ad, id, nc, a8K) {
		return ! function(ad, id, nc) {
			var aE, mX;
			for (aE = nc.length - 1; 0 <= aE; aE--)
				for (mX = ad.length - 1; 0 <= mX; mX--)
					if (ad[mX].player === nc[aE] && id === ad[mX].id) return 1;
			return
		}(ad, id, nc) && (a8K && function(ad, id, nc) {
			var aE;
			for (aE = nc.length - 1; 0 <= aE; aE--) ad.push({
				player: nc[aE],
				id: id,
				aM: 384
			})
		}(ad, id, nc), !0)
	}
}

function r1(nc) {
	var aE;
	for (hQ = new Array(bZ), uw = hQ, dw = new Uint8Array(bZ), ey = new Uint16Array(bZ), f1 = new Uint16Array(bZ), ex = new Uint16Array(bZ), f0 = new Uint16Array(bZ), bv = new Uint32Array(bZ), n6 = new Uint32Array(bZ), bO = new Uint32Array(bZ),
		donationsTracker.reset(), bV = new Array(bZ), bn = new Array(bZ), bo = new Array(bZ), br = new Array(bZ), dx = new Uint8Array(bZ), aE = nc.length - 1; 0 <= aE; aE--) hQ[aE] = nc[aE].name, dx[aE] = nc[aE].a45
}

function sM() {
	this.v6 = 0, this.nc = null, this.b = function() {
		this.v6 = 0, this.nc = []
	}, this.a8P = function(player) {
		this.nc.push(player), oQ++, dx[player] = 2, player === bN && (gU.show(!1, !1), g4.zu()), g3.uL(player)
	}, this.a5z = function(player) {
		var aE, nc;
		if (2 !== dx[player])
			for (aE = (nc = this.nc).length - 1; 0 <= aE; aE--)
				if (nc[aE] === player) return void nc.splice(aE, 1)
	}, this.fA = function() {
		fs || (30 === this.v6 && 2140 <= aL.fP() && this.a8Q(), this.v6 = (this.v6 + 1) % 60)
	}, this.a8Q = function() {
		for (var nc = this.nc, aE = nc.length - 1; 0 <= aE; aE--) ! function(player, e0) {
			!b5.cO(player) || (e0 = Math.max(Math.min(100, bO[player]), bJ(e0 * bO[player], 100))) < 100 || (0 === bn[player].length ? !eE.f9.fA(player) && eO && fD(player, e0, 0, 0) : (eO ? fO : fX)(player, e0))
		}(nc[aE], 12)
	}
}

function sI() {
	var a8S, a8U;
	this.a2r = 5, this.a2s = this.a2r - 1, this.a21 = this.a2r + this.a2s, this.a20 = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.a8T = null;

	function a8c(aE) {
		return a8U[aE].a8X && a8S[aE].a8c()
	}

	function a8e(a24) {
		a8U[a24].aM = aL.aM, a8U[a24].a8Y = !1
	}
	this.pQ = 0, this.a2d = 0, this.b = function() {
		this.a8T = new Array(this.a2r);
		this.a8T[0] = "territorial.io";
		var aE, a8W = ee.a8F(0);
		for (ee.r0(0), aE = 1; aE < this.a2r; aE++) this.a8T[aE] = w.o7() + ".territorial.io";
		for (ee.r0(a8W), a8S = new Array(this.a21), a8U = new Array(this.a21), aE = this.a21 - 1; 0 <= aE; aE--) a8U[aE] = {
			a8X: !1,
			aM: 0,
			a8Y: !1
		}
	}, this.ua = function() {
		return this.a2d < this.a2r ? this.a2d : this.a2d - this.a2s
	}, this.fA = function() {
		for (var aE = this.a21 - 1; 0 <= aE; aE--) this.a1w(aE) && aL.aM > a8U[aE].aM + 15e3 && jF.a8Z(aE, a8U[aE].a8Y)
	}, this.yJ = function(a24, a8a) {
		if (a8U[a24].a8X) {
			if (a8S[a24].a8c()) return a8S[a24].a8d(a8a), a8S[a24].a1w();
			a8S[a24].lP()
		}
		return this.a8b(a24, a8a), !1
	}, this.a8b = function(a24, a8a) {
		a8U[a24].a8X = !0, a8e(a24), a8S[a24] = new a8f, a8S[a24].b(a24, a8a)
	}, this.a8d = function(a24, a8a) {
		a8c(a24) && a8S[a24].a8d(a8a)
	}, this.a8g = function(a24, a8a) {
		0 === a8a ? pd.yL() : a8a < 3 ? jF.a0j(a24, a8a - 1) : 3 === a8a ? jF.a40(a24) : 4 === a8a ? rI.yL(a24) : 5 === a8a ? a24 === this.pQ && jF.a8h() : 6 !== a8a && 7 === a8a && jF.a4U(a24)
	}, this.a1w = function(aE) {
		return a8U[aE].a8X && a8S[aE].a1w()
	}, this.send = function(a24, k3) {
		a8e(a24), a8S[a24].send(k3)
	}, this.pP = function(a24) {
		a8U[a24].a8Y = !0
	}, this.close = function(a24, a8i) {
		a8c(a24) && a8S[a24].close(a8i)
	}, this.a8j = function(a24, a8i) {
		rJ.a27(a8i), a8c(a24) && a8S[a24].close(a8i)
	}, this.a29 = function(a8i) {
		for (var aE = this.a21 - 1; 0 <= aE; aE--) this.close(aE, a8i)
	}, this.a8k = function(a24, a8i) {
		for (var aE = this.a21 - 1; 0 <= aE; aE--) aE !== a24 && this.close(aE, a8i)
	}, this.a8l = function(a24, lk) {
		a8S[a24].lP(), rJ.b(a24, lk.code)
	}
}

function r7() {
	for (fT = 0, aE = bZ - 1; 0 <= aE; aE--) 0 !== dw[aE] && fT++;
	fU = new Uint16Array(fT);
	for (var bU = 0, aE = 0; aE < bZ; aE++) 0 !== dw[aE] && (fU[bU++] = aE)
}

function gH() {
	a8m(), a8n()
}

function a8n() {
	for (var aE = fT - 1; 0 <= aE; aE--) 0 === dw[fU[aE]] && a8o(aE)
}

function a8o(aE) {
	fT--;
	for (var eb = aE; eb < fT; eb++) fU[eb] = fU[eb + 1]
}

function a8m() {
	for (var dU, aE = fT - 1; 0 <= aE; aE--) bv[fU[aE]] <= bJ(n6[fU[aE]], 4) ? bv[fU[aE]] <= 1e3 && (2 !== dw[fU[aE]] || 0 === bv[fU[aE]]) && a5j(fU[aE]) : bv[fU[aE]] >= n6[fU[aE]] ? n6[fU[aE]] = bv[fU[aE]] : (dU = bJ(n6[fU[aE]] - bv[fU[aE]], 1e3),
		n6[fU[aE]] -= dU < 1 ? 1 : dU)
}

function jy() {
	for (var a5a = 0, aE = fT - 1; 0 <= aE; aE--) a5a += bO[fU[aE]];
	return a5a % 4096
}
var nP, a0R, r8, r9, aN = 0,
	p1 = 0;

function a8v() {
	a8u = 2, a8r = 2175, a8q = 11, a8p = "1.91.1   10 Feb 2024", a8w(), rW(), f5();
	var a8x = document.getElementById("usernameField");
	a8x && document.body.removeChild(a8x), n = "undefined" != typeof Android ? Android : null, 12 <= (q = n ? n.getVersion() : 0) && n.prepareAd("1688441405"), m = !1, window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers
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
		}), n || m || (rU.a8y += "_browser"), a8t = (new Date).getTime() % 1024, p0 = a8z(), r.b(), a2S = new a1B, hM.b(), q3.b(), z(), aQ(), a90(), i3 = new a91, iD = new a0M, aF = new vE, bR = new a92, nR = new a93, a2H = new uy, (aL = new a94)
	.b(), fR = new a95, gP = new a96, (a0s = new cY).b(), (cw = new a0S).b(), pm = new a10, vp(), ee.b(), bP.a6t(), r3.b(), aT.b(), pj.b(), g6.b(), pd.b(), r5.b(), pX.b(), ch.b(), rR.b(), aO.b(), rT.a2p(), aL.co = !0, setTimeout(function() {
			az.lw(2, 14071)
		}, 0), p1 = 2
}

function aS() {
	p1 || (p1 = 1, ot(), a8v())
}

function a8z() {
	try {
		return window.self !== window.top
	} catch (lk) {
		return !0
	}
}

function a90() {
	a8s = window.location.hostname, oz = 0 <= a8s.toLowerCase().indexOf("territorial.io")
}

function s1() {
	var a97;
	this.fx = null, this.b = function() {
		a97 = [], 9 === fq && this.a98()
	}, this.a98 = function() {
		var aE, a99 = [45, 70, 95, 150, 190, 333];
		if (this.a8G = 0, this.fx = [0, 0, 0, 0, 0, 0], dv <= a99[0]) this.fx[0] = Math.max(cA.cB(dv * (512 - dv), a99[0]), 16), fl = this.fx[0];
		else
			for (fl = bZ - dv, aE = 1; aE < 6; aE++)
				if (dv <= a99[aE]) {
					this.fx[aE - 1] = 512 - a99[aE - 1] - bJ((512 - a99[aE - 1]) * (dv - a99[aE - 1]), a99[aE] - a99[aE - 1]), this.fx[aE] = 512 - dv - this.fx[aE - 1];
					break
				} mr = dv + fl
	}, this.a5y = function(player) {
		a97.push({
			player: player,
			ud: 14 + ee.ef(20)
		})
	}, this.fA = function() {
		var aE;
		if (9 === fq)
			for (aE = a97.length - 1; 0 <= aE; aE--) --a97[aE].ud <= 0 && (g3.kT(a97[aE].player, 0, 46), a97.splice(aE))
	}
}

function sa() {
	function a9E(aE) {
		return !(1 === aE || aE >= az.a9K())
	}
	this.b0 = 0, this.b1 = 0, this.mG = null, this.mC = null, this.mD = null, this.mH = null, this.me = 0, this.a3V = 0, this.mE = !1, this.a6N = 19, this.mF = new a9B, this.fo = new a9C, this.b = function() {
		this.fo.b()
	}, this.lw = function(a9D, a3Z) {
		((a9D %= this.a6N) !== this.me || a9E(this.me) && a3Z !== this.a3V) && (this.mE = !1, this.mF.a3f(), ee.r0(a9D), this.me = a9D, this.a3V = a3Z, a9E(a9D) && (az.fo.md[a9D].a8W = a3Z), this.me >= az.a9K() ? a9G() : (a9D = az.fo.md[this.me],
			this.b0 = a9D.cl, this.b1 = a9D.eu, ee.r0(a9D.a8W), rL.lw([this.b0, this.b1, a9D.hV, a9D.hS]), a9H(), r3.a9I(), rL.a9J()))
	}, this.a9K = function() {
		return 10
	}, this.a9L = function(aE) {
		return 3 === aE || 7 === aE || 9 === aE || aE === az.a6N
	}, this.a9M = function(aE) {
		return 2 === aE || 7 === aE || 9 === aE
	}, this.a9N = function(aE) {
		return 1 === aE
	}, this.xZ = function() {
		return 19
	}
}

function a9B() {
	function a9X() {
		az.mF.fA()
	}

	function a9c(bc, a9b) {
		0 < a9b && (az.mH[bc] += a9b, az.mH[bc + 1] += a9b, az.mH[bc + 2] += a9b)
	}

	function t8(bc) {
		return az.mH[bc + 2] > az.mH[bc] && az.mH[bc + 2] > az.mH[bc + 1]
	}
	this.yE = -1, this.j = 0, this.a9O = 0, this.a9P = 8, this.a9Q = 32, this.a9R = 8, this.a9S = 32, this.a9T = [0, 0], this.x9 = [0, 0, 0, 0], this.eF = null, this.a9U = !0, this.a9V = !1, this.a3f = function() {
		-1 !== this.yE && clearTimeout(this.yE), this.yE = -1, this.eF = null, rL.a9J()
	}, this.b = function() {
		7 === aT.pp() || this.a9V || (this.a9U = !0, this.j = 0, this.a9O = 1, this.a9T = [az.fo.md[az.me].mc[0], az.fo.md[az.me].mf[0]], this.x9 = [az.fo.md[az.me].a9W[3], az.fo.md[az.me].a9W[4], az.fo.md[az.me].a9W[5], az.fo.md[az.me].a9W[6]],
			this.a9P = az.fo.md[az.me].a9W[7], this.a9Q = az.fo.md[az.me].a9W[8], this.a9R = az.fo.md[az.me].a9W[9], this.a9S = az.fo.md[az.me].a9W[10], this.a9U ? this.yE = setTimeout(a9X, 16) : this.fA())
	}, this.fA = function() {
		if (8 === aT.pp() && gT.hj()) this.yE = setTimeout(a9X, 16);
		else {
			if (0 === this.j) {
				var a8W = ee.a8F();
				if (ee.r0(az.fo.md[az.me].a9W[2]), rL.lw([az.b0, az.b1, az.fo.md[az.me].a9W[0], az.fo.md[az.me].a9W[1]]), ee.r0(a8W), this.eF = rL.a9Y(), this.j++, this.a9U) return void(this.yE = setTimeout(a9X, 16))
			}
			for (var bc, dW, a8W = this.a9U ? 10 : 1e6, a8W = az.b1 - this.a9O - 1 < a8W ? az.b1 - this.a9O - 1 : a8W, n3 = this.a9O + a8W, h9 = this.a9O; h9 < n3; h9++)
				for (var h8 = 1; h8 < az.b0 - 1; h8++) t8(bc = 4 * (dW = h8 + h9 * az.b0)) ? this.a9Z(bc, dW, 1) : (this.a9Z(bc, dW, 0), function(h8, h9, bc) {
					return 1 < h8 && t8(bc - 4) || h8 < az.b0 - 2 && t8(bc + 4) || 1 < h9 && t8(bc - 4 * az.b0) || h9 < az.b1 - 2 && t8(bc + 4 * az.b0)
				}(h8, h9, bc) && this.a9a(h8, h9));
			this.a9O = n3, this.a9O >= az.b1 - 1 ? (az.mC.putImageData(az.mD, 0, 0, 1, 1, az.b0 - 2, az.b1 - 2), aL.co = !0, this.a3f()) : this.a9U && (this.yE = setTimeout(a9X, 16))
		}
	}, this.a9Z = function(bc, dW, cd) {
		a9c(bc, Math.floor(this.a9T[cd] + this.x9[cd] * this.eF[dW] / 1e4) - az.mH[bc])
	}, this.a9d = function(bc, dF, a9e, cd, x9) {
		a9c(bc, Math.floor(this.a9T[cd] + (1 - dF / a9e) * x9) - az.mH[bc])
	}, this.a9a = function(cr, cs) {
		for (var bc, dF, a9e, mi = cr - this.a9Q, mj = cs - this.a9Q, n4 = cr + this.a9Q, n3 = cs + this.a9Q, mi = mi < 1 ? 1 : mi, n4 = n4 > az.b0 - 2 ? az.b0 - 2 : n4, n3 = n3 > az.b1 - 2 ? az.b1 - 2 : n3, h9 = mj < 1 ? 1 : mj; h9 <= n3; h9++)
			for (var h8 = mi; h8 <= n4; h8++) t8(bc = 4 * (h8 + h9 * az.b0)) ? (a9e = this.a9P + (this.a9Q - this.a9P) * this.eF[h8 + az.b0 * h9] / 1e4, Math.abs(cr - h8) > a9e || Math.abs(cs - h9) > a9e || a9e <= (dF = Math.sqrt((cr - h8) * (
				cr - h8) + (cs - h9) * (cs - h9))) || this.a9d(bc, dF, a9e, 1, this.x9[3])) : (a9e = this.a9R + (this.a9S - this.a9R) * this.eF[h8 + az.b0 * h9] / 1e4, Math.abs(cr - h8) > a9e || Math.abs(cs - h9) > a9e || a9e <= (dF = Math
				.sqrt((cr - h8) * (cr - h8) + (cs - h9) * (cs - h9))) || this.a9d(bc, dF, a9e, 0, this.x9[2]))
	}
}

function a9H() {
	2 === az.me ? a9f([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === az.me ? a9f([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === az.me ? a9f([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === az.me && a9f([
		512
	], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function a9f(a9g, a9h, a9i, a9j, a9k) {
	for (var h8, h9, a9m, a9n, cZ, a9o, dl = a9g.length - 1, a9l = az.b0 + az.b1, bU = (a9l *= a9l, a9i.length), aE = bU - 1; 0 <= aE; aE--) a9i[aE] *= a9i[aE];
	var a9p = new Array(bU),
		a9q = new Array(bU),
		a9r = new Array(bU),
		aR = rL.a9Y();
	if (void 0 === a9k)
		for (a9k = new Array(bU), aE = bU - 1; 0 <= aE; aE--) a9k[aE] = 0;
	for (aE = 1; aE < bU; aE++) a9p[aE] = a9i[aE] - a9i[aE - 1], a9q[aE] = a9j[aE] - a9j[aE - 1], a9r[aE] = a9k[aE] - a9k[aE - 1];
	for (h8 = az.b0 - 1; 0 <= h8; h8--)
		for (h9 = az.b1 - 1; 0 <= h9; h9--) {
			for (a9m = a9l, aE = dl; 0 <= aE; aE--) a9m = (a9n = (h8 - a9g[aE]) * (h8 - a9g[aE]) + (h9 - a9h[aE]) * (h9 - a9h[aE])) < a9m ? a9n : a9m;
			for (cZ = a9j[bU - 1], a9o = a9k[bU - 1], aE = 1; aE < bU; aE++)
				if (a9m < a9i[aE]) {
					cZ = a9j[aE - 1] + a5F((a9m - a9i[aE - 1]) * a9q[aE], a9p[aE]), a9o = a9k[aE - 1] + a5F((a9m - a9i[aE - 1]) * a9r[aE], a9p[aE]);
					break
				} a9s(az.b0 * h9 + h8, cZ, a9o, aR)
		}
}

function a9s(cd, cZ, a9o, aR) {
	cZ < 500 ? aR[cd] = bJ(aR[cd] * cZ * 2, 1e3) : 500 < cZ && (aR[cd] += bJ(2 * (1e4 - aR[cd]) * (cZ - 500), 1e3)), aR[cd] += bJ(a9o * (10 * cZ - aR[cd]), 1e3)
}

function s2() {
	var a9t;
	this.un = 0, this.uo = 0, this.up = 0, this.uq = 0, this.b = function() {
		(a9t = new Array(az.a9K()))[0] = {
			cl: [0, 5e3, 8e3, 1e4],
			dF: [220, 250, 255, 220],
			qH: [190, 220, 0, 0],
			em: [170, 200, 0, 0]
		}, a9t[1] = {
			cl: [0, 4e3, 5e3, 6e3, 1e4],
			dF: [25, 0, 100, 0, 25],
			qH: [25, 0, 0, 0, 25],
			em: [25, 0, 0, 0, 25]
		}, a9t[2] = {
			cl: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			dF: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			qH: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			em: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, a9t[3] = {
			cl: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			dF: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			qH: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			em: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, a9t[4] = {
			cl: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			dF: [10, 10, 20, 10, 10, 170, 212],
			qH: [20, 20, 60, 100, 100, 110, 170],
			em: [70, 70, 160, 30, 30, 60, 120]
		}, a9t[5] = {
			cl: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			dF: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			qH: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			em: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, a9t[6] = {
			cl: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			dF: [10, 10, 60, 255, 255, 200, 200],
			qH: [10, 10, 60, 255, 255, 200, 200],
			em: [80, 80, 255, 255, 255, 200, 200]
		}, a9t[7] = {
			cl: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			dF: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			qH: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			em: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, a9t[8] = {
			cl: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			dF: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			qH: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			em: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, a9t[9] = {
			cl: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			dF: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			qH: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			em: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}
	}, this.a9I = function() {
		var aE, eb, ae, d9 = function() {
				var d9;
				return az.mG = document.createElement("canvas"), az.mG.width = az.b0, az.mG.height = az.b1, az.mC = az.mG.getContext("2d", {
					alpha: !1
				}), d9 = az.mC.getImageData(0, 0, az.b0, az.b1), az.mH = d9.data, d9
			}(),
			cl = a9t[az.me].cl,
			dF = a9t[az.me].dF,
			qH = a9t[az.me].qH,
			em = a9t[az.me].em,
			aR = rL.a9Y(),
			bU = cl.length - 2,
			a9x = new Array(1 + bU),
			a9y = new Array(1 + bU),
			a9z = new Array(1 + bU),
			aA0 = new Array(1 + bU);
		for (eb = bU; 0 <= eb; eb--) a9x[eb] = cl[eb + 1] - cl[eb], a9y[eb] = dF[eb + 1] - dF[eb], a9z[eb] = qH[eb + 1] - qH[eb], aA0[eb] = em[eb + 1] - em[eb];
		for (aE = az.b0 * az.b1 - 1; 0 <= aE; aE--)
			for (eb = bU; 0 <= eb; eb--)
				if (aR[aE] >= cl[eb]) {
					ae = aR[aE] - cl[eb], az.mH[4 * aE] = dF[eb] + a5F(a9y[eb] * ae, a9x[eb]), az.mH[4 * aE + 1] = qH[eb] + a5F(a9z[eb] * ae, a9x[eb]), az.mH[4 * aE + 2] = em[eb] + a5F(aA0[eb] * ae, a9x[eb]), az.mH[4 * aE + 3] = 255;
					break
				} az.mC.putImageData(d9, 0, 0), az.a9N(az.me) && ch.ci() && az.a9N(az.me) && (d9 = ch.sp("arena"), az.mC.save(), az.mC.globalAlpha = 1 === az.me ? .1 : 1, az.mC.imageSmoothingEnabled = !0, az.mC.scale(2.8, 2.8), az.mC.drawImage(
				d9, Math.floor((az.b0 / 2.8 - d9.width) / 2), Math.floor(.5 * az.b1 / 2.8 - d9.height / 2)), az.mC.restore(), d9 = ch.sp("territorial.io"), az.mC.save(), az.mC.globalAlpha = 1 === az.me ? .1 : 1, az.mC
			.imageSmoothingEnabled = !0, az.mC.scale(.87, .87), az.mC.drawImage(d9, Math.floor(.745 * (az.b0 / .87 - d9.width)), Math.floor(.422 * az.b1 / .87 - d9.height / 2)), az.mC.restore()), az.mE = !0, aL.co = !0
	}, this.r4 = function() {
		for (var bc, h8, h9, aA3, aA4, ag, uo = 0, cl = az.b0, eu = az.b1, ae = cl * eu * 4, aA5 = a0R, aA6 = az.mH, aE = cl - 1; 0 <= aE; aE--) aA5[(bc = aE << 2) + 2] = aA5[ae - bc - 2] = 3;
		for (ae = 4 * cl, aE = eu - 1; 0 <= aE; aE--) aA5[(bc = aE * ae) + 2] = aA5[bc + ae - 2] = 3;
		for (aA3 = cl - 1, aA4 = eu - 1, h9 = 1; h9 < aA4; h9++)
			for (ae = h9 * cl, h8 = 1; h8 < aA3; h8++) ag = 1 - (aA6[(bc = ae + h8 << 2) + 2] > aA6[bc + 1] && aA6[bc + 2] > aA6[bc]), aA5[bc + 2] = 2 - ag, uo += ag;
		this.un = (cl - 2) * (eu - 2), this.uq = 0, az.a9L(az.me) && function() {
			var bc, h8, h9, ae, aA5 = a0R,
				aA6 = az.mH,
				cl = az.b0,
				aA3 = cl - 1,
				aA4 = az.b1 - 1,
				ud = 0;
			for (h9 = 1; h9 < aA4; h9++)
				for (ae = h9 * cl, h8 = 1; h8 < aA3; h8++) aA6[bc = ae + h8 << 2] === aA6[1 + bc] && aA6[bc] === aA6[2 + bc] && (ud++, aA5[2 + bc] = 3);
			r3.uq = ud
		}(), this.uo = qn = uo - this.uq, this.up = this.un - this.uo - this.uq
	}
}

function a9G() {
	var v, aA8 = az.a9K();
	az.me === aA8 ? v =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		az.me === aA8 + 1 ? v =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		az.me === aA8 + 2 ? v =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		az.me === aA8 + 3 ? v =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		az.me === aA8 + 4 ? v =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		az.me === aA8 + 5 ? v =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		az.me === aA8 + 6 ? v =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		az.me === aA8 + 7 ? v =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		az.me === aA8 + 8 && (v =
			"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-"
			), (new ly).m0(v)
}

function a9C() {
	this.md = null, this.aA9 = null, this.b = function() {
		var aE, aAA = [120, 105, 92],
			cos = [12, 12, 60],
			aAB = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aAC = [140, 130, 120],
			aAD = [12, 12, 76],
			aAE = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aAF = [130, 117, 106],
			aAG = [12, 12, 68],
			aAH = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		for (this.md = new Array(az.a6N + 1), this.md[0] = {
				name: "White Arena",
				cl: 230,
				eu: 230,
				hV: 1e3,
				hS: 2e3,
				a8W: 173
			}, this.md[1] = {
				name: "Black Arena",
				cl: 800,
				eu: 800,
				hV: 100,
				hS: 50,
				a8W: 43
			}, this.md[2] = {
				name: "Island",
				cl: 512,
				eu: 512,
				hV: 128,
				hS: 32,
				a8W: 0
			}, this.md[3] = {
				name: "Mountains",
				cl: 960,
				eu: 960,
				hV: 60,
				hS: 8,
				a8W: 0
			}, this.md[4] = {
				name: "Desert",
				cl: 900,
				eu: 900,
				hV: 100,
				hS: 5,
				a8W: 0
			}, this.md[5] = {
				name: "Swamp",
				cl: 1e3,
				eu: 1e3,
				hV: 100,
				hS: 40,
				a8W: 0
			}, this.md[6] = {
				name: "Snow",
				cl: 1e3,
				eu: 1e3,
				hV: 100,
				hS: 20,
				a8W: 0
			}, this.md[7] = {
				name: "Cliffs",
				cl: 1024,
				eu: 1024,
				hV: 128,
				hS: 32,
				a8W: 0
			}, this.md[8] = {
				name: "Pond",
				cl: 820,
				eu: 820,
				hV: 200,
				hS: 100,
				a8W: 0
			}, this.md[9] = {
				name: "Halo",
				cl: 1024,
				eu: 1024,
				hV: 128,
				hS: 32,
				a8W: 0
			}, this.md[10] = {
				name: "Europe",
				mc: aAC,
				mf: aAD,
				a9W: aAE
			}, this.md[11] = {
				name: "World",
				mc: aAF,
				mf: aAG,
				a9W: aAH
			}, this.md[12] = {
				name: "Caucasia",
				mc: aAF,
				mf: aAG,
				a9W: aAH
			}, this.md[13] = {
				name: "Africa",
				mc: aAA,
				mf: cos,
				a9W: aAB
			}, this.md[14] = {
				name: "Middle East",
				mc: aAA,
				mf: cos,
				a9W: aAB
			}, this.md[15] = {
				name: "Scandinavia",
				mc: aAC,
				mf: aAD,
				a9W: aAE
			}, this.md[16] = {
				name: "North America",
				mc: aAC,
				mf: aAD,
				a9W: aAE
			}, this.md[17] = {
				name: "South America",
				mc: aAA,
				mf: cos,
				a9W: aAB
			}, this.md[18] = {
				name: "Asia",
				mc: aAF,
				mf: aAG,
				a9W: aAH
			}, this.md[19] = {}, this.aA9 = new Uint8Array(az.a6N), aE = 0; aE < az.a6N; aE++) this.aA9[aE] = aE
	}
}

function r2() {
	(nP = void 0 === nP ? document.createElement("canvas") : nP).width = az.b0, nP.height = az.b1, r8 = nP.getContext("2d", {
		alpha: !0
	}), r9 = r8.getImageData(0, 0, az.b0, az.b1), a0R = r9.data, cK.mI.mJ(a0R)
}

function s3() {
	var aR, cl, eu, max, aAI, hS, aAK, aAL, aAM, aAN, aAO, aAP, aAQ, aAR, aAJ = 1e4;

	function aAZ(aAY, hV, bU) {
		var aE;
		for (aAK[0] = aAY, aE = 1; aE < bU; aE++) aAK[aE] = aAK[aE - 1] + hV, hV = aAK[aE] >= aAJ ? (aAK[aE] = aAJ - 1, -hV) : aAK[aE] < 0 ? (aAK[aE] = 0, -hV) : (hV += 16384 <= ee.random() ? hS : -hS) < -aAI ? -aAI : aAI < hV ? aAI : hV
	}

	function aAb(h8, h9, aAc, bU) {
		(aAc ? function(h8, h9, bU) {
			var aE;
			for (aE = 0; aE < bU; aE++) aR[h9 * cl + h8 + aE] = aAK[aE]
		} : function(h8, h9, bU) {
			var aE;
			for (aE = 0; aE < bU; aE++) aR[h9 * cl + h8 + aE * cl] = aAK[aE]
		})(h8, h9, bU)
	}

	function aAf(value, bU) {
		var aE, a85, df, dU = value - aAK[bU - 1];
		if (0 != dU) {
			for (a85 = 1 + bJ(Math.abs(dU), bU - 1), a85 = dU < 0 ? -a85 : a85, aAK[bU - 1] = value, df = (df = bU - 1 - bJ(Math.abs(dU), Math.abs(a85))) < 1 ? 1 : bU - 2 < df ? bU - 2 : df, aE = bU - 2; df <= aE; aE--) aAK[aE] += dU - (bU - 1 -
				aE) * a85;
			(dU < 0 ? function(bU) {
				var aE;
				for (aE = bU - 2; 1 <= aE; aE--) aAK[aE] < 0 && (aAK[aE] = -aAK[aE] - 1)
			} : function(bU) {
				var aE;
				for (aE = bU - 2; 1 <= aE; aE--) aAK[aE] >= aAJ && (aAK[aE] = 2 * aAJ - aAK[aE] - 1)
			})(bU)
		}
	}

	function aAi(aAj, aAk, bU) {
		for (var aE = 0; aE < bU; aE++) aAj[aE] = aAk[aE]
	}

	function aAl(ad) {
		for (var aE = 0; aE < ad.length - 1; aE++) ad[aE] = ad[aE + 1] - ad[aE];
		ad[ad.length - 1] = ad[ad.length - 3]
	}

	function aAm(ss, l4, cW) {
		aAL.push(ss), aAM.push(l4), aAN.push(cW)
	}
	this.lw = function(aAS) {
		! function(aAS) {
			var aE;
			for (cl = aAS[0], eu = aAS[1], aAI = aAS[2], hS = aAS[3], aR = new Int16Array(cl * eu), max = eu < cl ? cl : eu, aAK = new Int16Array(max), aAL = [], aAM = [], aAN = [], aAO = new Array(cl), aAP = new Array(eu), aE = cl - 1; 0 <=
				aE; aE--) aAO[aE] = !1;
			for (aE = eu - 1; 0 <= aE; aE--) aAP[aE] = !1;
			aAQ = new Int16Array(cl), aAR = new Int16Array(eu)
		}(aAS),
		function(bU) {
			var aAY = ee.random() % aAJ,
				hV = ee.random() % (2 * aAI + 1) - aAI;
			aAZ(aAY, hV, bU)
		}(max), aAi(aAR, aAK, eu), aAb(0, 0, !0, cl);
		var h8, h9, aAS = aR[0],
			bU = max,
			hV = ee.random() % (2 * aAI + 1) - aAI;
		for (aAZ(aAS, hV, bU), aAi(aAQ, aAK, cl), aAb(0, 0, !1, eu), aAl(aAQ), aAl(aAR), aAZ(aR[cl - 1], aAQ[cl - 1], eu), aAb(cl - 1, 0, !1, eu), aAZ(aR[cl * (eu - 1)], aAR[eu - 1], cl), aAf(aR[cl * eu - 1], cl), aAb(0, eu - 1, !0, cl), aAO[cl -
				1] = aAO[0] = !0, aAP[eu - 1] = aAP[0] = !0, aAm(0, cl, !0), aAm(0, eu, !1), ! function() {
				var aAo, ss;
				for (;;) {
					if (aAo = function() {
							var aE, aAo = aAL.length - 1;
							for (aE = aAo - 1; 0 <= aE; aE--) aAM[aE] > aAM[aAo] && (aAo = aE);
							return aAo
						}(), aAM[aAo] < 5) return;
					ss = aAL[aAo] + bJ(aAM[aAo], 2), (aAN[aAo] ? function(h8) {
						var bU, aAr, aE, a1Y = 0,
							aAs = 0;
						for (; aAs < eu - 1;) {
							for (aE = a1Y + 1; aE < eu; aE++)
								if (aAP[aE]) {
									aAs = aE;
									break
								} bU = aAs - a1Y + 1, aAZ(aR[h8 + cl * a1Y], 0 === a1Y ? aAQ[h8] : aAK[aAr - 1] - aAK[aAr - 2], bU), aAf(aR[aAs * cl + h8], bU), aAb(h8, a1Y, !1, bU), aAr = bU, a1Y = aAs
						}
						aAO[h8] = !0
					} : function(h9) {
						var bU, aAr, aE, a1Y = 0,
							aAs = 0;
						for (; aAs < cl - 1;) {
							for (aE = a1Y + 1; aE < cl; aE++)
								if (aAO[aE]) {
									aAs = aE;
									break
								} bU = aAs - a1Y + 1, aAZ(aR[h9 * cl + a1Y], 0 === a1Y ? aAR[h9] : aAK[aAr - 1] - aAK[aAr - 2], bU), aAf(aR[h9 * cl + aAs], bU), aAb(a1Y, h9, !0, bU), aAr = bU, a1Y = aAs
						}
						aAP[h9] = !0
					})(ss), aAm(ss, aAL[aAo] + aAM[aAo] - ss, aAN[aAo]), aAM[aAo] = ss - aAL[aAo] + 1
				}
			}(), h8 = 0; h8 < cl; h8++)
			if (!aAO[h8])
				for (h9 = 0; h9 < eu; h9++) aAP[h9] || ! function(h8, h9) {
					var value = aR[h9 * cl + h8 - 1] + aR[(h9 - 1) * cl + h8],
						vC = 2;
					aAO[h8 + 1] && (vC++, value += aR[h9 * cl + h8 + 1]);
					aAP[h9 + 1] && (vC++, value += aR[(h9 + 1) * cl + h8]);
					aR[h9 * cl + h8] = bJ(value, vC)
				}(h8, h9)
	}, this.a9Y = function() {
		return aR
	}, this.a9J = function() {
		aR = null
	}
}

function bJ(eb, em) {
	return Math.floor(eb / em + 1 / (2 * em))
}

function a5F(eb, em) {
	return 0 <= eb ? bJ(eb, em) : -bJ(-eb, em)
}

function f3(aR) {
	return aR * aR
}

function u9(eb, em) {
	return em < eb ? eb : em
}

function x0(eb, em) {
	return eb < em ? eb : em
}

function xQ(eb, aR, em) {
	return aR < eb ? eb : em < aR ? em : aR
}

function aAu(aR, bU) {
	for (var fQ = bJ(aR + 1, 2), aE = 0; aE < bU; aE++) fQ = bJ(fQ + bJ(aR, fQ), 2);
	return fQ
}

function cD(aR, bU) {
	return aR < 1 ? 0 : aAu(aR, bU)
}

function aAv(hD, hE, nY, uz, hF, hH, nZ, v0) {
	return !(hD + nY <= hF || hE + uz <= hH || hF + nZ <= hD || hH + v0 <= hE)
}

function aAw(hD, hE, nY, uz, hF, hH, nZ, v0) {
	return hD <= hF && hE <= hH && hF + nZ <= hD + nY && hH + v0 <= hE + uz
}

function m9(aR) {
	return Math.floor(!!aR * (1 + Math.log2(aR + .5)))
}

function rX() {
	this.cB = function(eb, em) {
		return Math.floor((eb + .5) / em)
	}, this.aAx = function(eb, em) {
		return Math.floor(eb * (em + .5))
	}, this.sqrt = function(aR) {
		return ~~Math.sqrt(aR + .5)
	}, this.pow = function(lk) {
		return Math.floor(Math.pow(2, lk) + .5)
	}, this.qF = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aAy = function(ae, ag, ai) {
		return Math.max(Math.min(ae, ag), ai)
	}, this.aAz = function(aB0, aB1, h8, h9) {
		h8 -= aB0, aB0 = h9 - aB1, h9 = 0;
		return 0 == h8 ? h9 = 0 <= aB0 ? Math.PI : 0 : (h9 = Math.aB2(aB0 / h8), h9 += 0 < h8 ? .5 * Math.PI : 1.5 * Math.PI), h9
	}, this.log2 = function(aR) {
		return Math.floor(!!aR * (1 + Math.log2(aR + .5)))
	}
}

function sb() {
	this.aB3 = new aB4, this.hN = new aB5, this.aB6 = new aB7, this.resize = function() {
		this.aB3.resize(), this.hN.resize(), this.aB6.resize()
	}
}

function aB7() {
	var aB8, aB9;

	function aBA() {
		a0 = !a0, cv.tl[0].sm = a0, q3.a4D(0), aB(a0, !1)
	}
	this.show = function() {
		aB8 || (aB9 = new kr("Mobile Friendly", "Increase size of user interface to better support mobile devices", aBA), (aB8 = new lA).b("Accessibility", new kV("Back", () => {
			aB8.lP(), rV.hN.show()
		}, d2.iq), [aB9])), aB9.setState(a0), aB8.show()
	}, this.resize = function() {
		aB8 && (aB8.resize(), aB9.resize())
	}
}

function aB4() {
	var aB8, l2;
	this.show = function() {
		var aBB;
		aB8 || ((l2 = new l1).l8(new kV("Account", () => {
			console.log("Account")
		})), l2.l8(new kV("Settings", () => {
			aB8.lP(), rV.hN.show()
		})), l2.l8(new kV("Links", () => {
			console.log("Links")
		})), l2.l8(new kV("Replay", () => {
			console.log("Replay")
		})), l2.l8(new kV("Game Version", () => {
			console.log("Game Version")
		})), aBB = new kV("Close", (aB8 = new lA).lP, d2.iq), aB8.b("Menu", aBB, [l2])), aB8.show()
	}, this.resize = function() {
		aB8 && (aB8.resize(), l2.resize())
	}
}

function aB5() {
	var aB8, l2;
	this.show = function() {
		aB8 || ((l2 = new l1).l8(new kV("Graphics", () => {
			console.log("Graphics")
		})), l2.l8(new kV("Controls", () => {
			console.log("Controls")
		})), l2.l8(new kV("Gameplay", () => {
			console.log("Gameplay")
		})), l2.l8(new kV("Accessibility", () => {
			aB8.lP(), rV.aB6.show()
		})), l2.l8(new kV("Language", () => {
			console.log("Language")
		})), (aB8 = new lA).b("Settings", new kV("Back", () => {
			aB8.lP(), rV.aB3.show()
		}, d2.iq), [l2])), aB8.show()
	}, this.resize = function() {
		aB8 && (aB8.resize(), l2.resize())
	}
}

function a8w() {
	"function" != typeof Math.log2 && (Math.log2 = function(h8) {
		return Math.log(h8) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(h8) {
		return Math.log(h8) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(h8) {
		return 0 < h8 ? 1 : h8 < 0 ? -1 : 0
	})
}

function sK() {
	this.a4S = 0;
	var a0T = -1,
		aBC = !1,
		wQ = [],
		aBD = 0;

	function pl(h8, h9, aBM, aE) {
		return 0 === aE ? h8 >= aBM.hD && (0 === aE || h9 >= aBM.hE) && h9 <= aBM.hE + aBM.uz : (h9 -= aE * (aBM.uz - qL), h8 >= aBM.hF && h9 >= aBM.hE && h9 <= aBM.hE + aBM.uz)
	}

	function aBN() {
		var nY = Math.floor((a0 ? .145 : .09) * cb),
			nZ = Math.floor(2.25 * nY),
			l4 = Math.floor(.065 * (a0 ? .53 : .36) * cb),
			hF = a1 - nZ - l4;
		return {
			hD: a1 - nY - l4,
			hE: ct,
			nY: nY,
			uz: Math.floor(.35 * (1 + .35 * a0) * nY),
			hF: hF,
			nZ: nZ,
			xz: l4
		}
	}

	function a1m(h8, h9, cl, eu, dF, qH, em, aBV, v) {
		var cj = (v === wQ[0][0].name ? .65 : .5) * eu,
			font = cK.iG.lW(cj, 1),
			font = cm.measureText(v, font);
		.92 * cl < font && (cj *= .92 * cl / font), cz.font = cK.iG.lW(cj, 1), aBV && (dF += 80, qH += 80, em += 80), cz.fillStyle = "rgba(" + dF + "," + qH + "," + em + ",0.6)", cz.fillRect(h8, h9, cl, eu), cz.fillStyle = d2.d3, cz.fillRect(h8, h9,
			cl, qL), cz.fillRect(h8, h9 + eu - qL, cl, qL), cz.fillRect(h8, h9, qL, eu), cz.fillRect(h8 + cl - qL, h9, qL, eu), cz.fillText(v, Math.floor(h8 + cl / 2), Math.floor(h9 + eu / 2 + .1 * cj))
	}
	this.hN = null, this.zN = new Uint8Array(4), this.uC = function() {
		return m ? 4 : a0 ? 2 : 1
	}, this.b = function() {
		var aBF;
		this.aBE(), wQ = [new Array(6), new Array(10), new Array(7)], this.zN[0] = 10, this.zN[1] = 5, this.zN[2] = 2, this.zN[3] = 1, wQ[0][0] = {
			name: "More",
			id: 0,
			dF: 140,
			qH: 120,
			em: 0
		}, wQ[0][1] = {
			name: "Lobby 1",
			id: 1,
			dF: 0,
			qH: 0,
			em: 0
		}, wQ[0][2] = {
			name: "Settings",
			id: 2,
			dF: 0,
			qH: 0,
			em: 0
		}, wQ[0][3] = {
			name: "More Information",
			id: 3,
			dF: 0,
			qH: 0,
			em: 0
		}, wQ[0][4] = {
			name: "Replay",
			id: 4,
			dF: 0,
			qH: 0,
			em: 0
		}, wQ[0][5] = {
			name: a8p,
			id: 5,
			dF: 90,
			qH: 0,
			em: 0
		}, wQ[0].push({
			name: "FX Client v" + fx_version + " " + fx_update,
			id: 20,
			dF: 0,
			qH: 0,
			em: 70
		}), wQ[1][0] = wQ[0][0], wQ[1][1] = {
			name: "Hide Usernames",
			id: 1,
			dF: 0,
			qH: 0,
			em: 0
		}, wQ[1][2] = {
			name: "Hide Links",
			id: 2,
			dF: 0,
			qH: 0,
			em: 0
		}, wQ[1][3] = {
			name: "Hide Zoom Buttons",
			id: 3,
			dF: 0,
			qH: 0,
			em: 0
		}, wQ[1][4] = {
			name: "Reverse Name/Balance",
			id: 4,
			dF: 0,
			qH: 0,
			em: 0
		}, wQ[1][5] = {
			name: "Resolution",
			id: 5,
			dF: 0,
			qH: 0,
			em: 0
		}, wQ[1][6] = {
			name: "Country Minimum Font Size",
			id: 6,
			dF: 0,
			qH: 0,
			em: 0
		}, wQ[1][7] = {
			name: "Leaderboard Refresh Rate",
			id: 7,
			dF: 0,
			qH: 0,
			em: 0
		}, wQ[1][8] = {
			name: "Reset Settings",
			id: 8,
			dF: 0,
			qH: 0,
			em: 0
		}, wQ[1][9] = {
			name: "Back",
			id: 9,
			dF: 0,
			qH: 0,
			em: 0
		}, wQ[2][0] = wQ[0][0], wQ[2][1] = {
			name: "Tutorial",
			id: 1,
			dF: 0,
			qH: 0,
			em: 0
		}, wQ[2][2] = {
			name: "Player List",
			id: 2,
			dF: 0,
			qH: 0,
			em: 0
		}, wQ[2][3] = {
			name: "Clan List",
			id: 3,
			dF: 0,
			qH: 0,
			em: 0
		}, wQ[2][4] = {
			name: "Privacy Policy",
			id: 4,
			dF: 0,
			qH: 0,
			em: 0
		}, wQ[2][5] = {
			name: "Changelog",
			id: 13,
			dF: 0,
			qH: 0,
			em: 0
		}, wQ[2][6] = {
			name: "Terms of Service",
			id: 14,
			dF: 0,
			qH: 0,
			em: 0
		}, !m && q < 5 && wQ[2].push({
			name: "Cookie Policy",
			id: 5,
			dF: 0,
			qH: 0,
			em: 0
		}), (m || 5 <= q) && (m ? !p.mustShowConsentButton || "0" !== p.mustShowConsentButton && "1" !== p.mustShowConsentButton || wQ[2].push({
			name: "Consent Form",
			id: 7,
			dF: 0,
			qH: 0,
			em: 0
		}) : "" !== (aBF = n.loadString(187)) && "1" !== aBF || wQ[2].push({
			name: "Consent Form",
			id: 7,
			dF: 0,
			qH: 0,
			em: 0
		})), 5 <= q && wQ[2].push({
			name: "Force Restart Game",
			id: 12,
			dF: 0,
			qH: 0,
			em: 0
		}), wQ[2].push({
			name: "Back",
			id: 6,
			dF: 0,
			qH: 0,
			em: 0
		}), this.aBG(), this.aBH()
	}, this.aBE = function() {
		this.hN = {
			uv: 0,
			aBI: 0,
			xs: 0,
			hO: 1,
			aBJ: 2,
			a7W: 4,
			zO: 2,
			a7f: 2
		}
	}, this.aBH = function() {
		if (settings.hideAllLinks) a2S.ai[0] = a2S.ai[1] = !this.hN.aBI;
		else a2S.ai[0] = a2S.ai[1] = true;
		a2S.ai[2] = a2S.ai[3] = a2S.ai[4] = !this.hN.aBI, wQ[1][1].qH = this.hN.uv ? 130 : 0, wQ[1][2].qH = this.hN.aBI ? 130 : 0, wQ[1][3].qH = this.hN.xs ? 130 : 0, wQ[1][4].qH = this.hN.hO ? 130 : 0, this.aBK(5), this.aBK(6), this.aBK(7)
	}, this.aBG = function() {
		var tR = a5().split("");
		tR.length < 14 ? this.aBE() : (this.hN.uv = parseInt(tR[6]), this.hN.aBI = parseInt(tR[7]), this.hN.xs = parseInt(tR[8]), this.hN.hO = parseInt(tR[9]), this.hN.aBJ = parseInt(tR[10]), this.hN.a7W = parseInt(tR[11]), this.hN.zO = parseInt(
			tR[12]))
	}, this.a1l = function() {
		var v = cv.tl[2].oK.a1j();
		aI((v += ~~this.hN.uv) + ~~this.hN.aBI + ~~this.hN.xs + ~~this.hN.hO + ~~this.hN.aBJ + ~~this.hN.a7W + ~~this.hN.zO + "0")
	}, this.aBK = function(aE) {
		5 === aE ? wQ[1][aE].name = "Resolution: " + g4.um(100 * q3.aBL(), 1) : 6 === aE ? wQ[1][aE].name = "Country Minimum Font Size: " + (this.hN.a7W < 4 ? 1 + this.hN.a7W : 2 * (this.hN.a7W - 1)) : 7 === aE && (wQ[1][aE].name =
			"Leaderboard Refresh Rate: " + g4.um(100 / this.zN[this.hN.zO], 1))
	}, this.cq = function(h8, h9) {
		var aE, aBM, aBP;
		if (!(7 <= aT.pp())) {
			aBM = aBN();
			var gearIconX = aBM.hD - aBM.nY / 2;
			if (h8 > gearIconX && h8 < (gearIconX + aBM.uz) && h9 > aBM.hE && h9 < (aBM.hE + aBM.uz)) return WindowManager.openWindow("settings");
			if (aBC) {
				for (aE = 1; aE < wQ[aBD].length; aE++)
					if (pl(h8, h9, aBM, aE)) return aBP = wQ[aBD][aE], 0 === aBD ? 1 === aBP.id ? (hM.a4S = (hM.a4S + 1) % 4, aBP.name = (hM.a4S % 2 ? "Proxy " : "Lobby ") + (1 + (hM.a4S >> 1)), aL.co = !0) : 2 === aBP.id ? (aBD = 1, aL.co = !
						0) : 3 === aBP.id ? (aBD = 2, aL.co = !0) : 4 === aBP.id ? lU.show() : 5 === aBP.id && (console.log("try showing ad:"), aO.i()) : 1 === aBD ? 1 === aBP.id ? (hM.hN.uv = !hM.hN.uv, aBP.qH = hM.hN.uv ? 130 : 0, hM.a1l(),
							aL.co = !0) : 2 === aBP.id ? (hM.hN.aBI = !hM.hN.aBI, hM.aBH(), hM.a1l(), aL.co = !0) : 3 === aBP.id ? (hM.hN.xs = !hM.hN.xs, aBP.qH = hM.hN.xs ? 130 : 0, hM.a1l(), aL.co = !0) : 4 === aBP.id ? (hM.hN.hO = !hM.hN
							.hO, aBP.qH = hM.hN.hO ? 130 : 0, hM.a1l(), aL.co = !0) : 5 === aBP.id ? (hM.hN.aBJ++, hM.hN.aBJ %= 8, hM.aBK(aBP.id), hM.a1l(), q3.a4D(1), aL.co = !0) : 6 === aBP.id ? (hM.hN.a7W++, hM.hN.a7W %= 10, hM.aBK(aBP
							.id), hM.a1l(), aL.co = !0) : 7 === aBP.id ? (hM.hN.zO++, hM.hN.zO %= 4, hM.aBK(aBP.id), hM.a1l(), aL.co = !0) : 8 === aBP.id ? (hM.aBE(), hM.aBH(), hM.a1l(), q3.a4D(1), aL.co = !0) : 9 === aBP.id && (aBD = 0, aL
							.co = !0) : 1 === aBP.id ? (pm.b(rU.aBQ, !0), pm.b(rU.aBQ, !1)) : 2 === aBP.id ? (pm.b(rU.aBR, !0), pm.b(rU.aBR, !1)) : 3 === aBP.id ? (pm.b(rU.aBS, !0), pm.b(rU.aBS, !1)) : 4 === aBP.id ? (pm.b(rU.a8y, !0), pm.b(
							rU.a8y, !1)) : 5 === aBP.id ? (pm.b(rU.v3, !0), pm.b(rU.v3, !1)) : 13 === aBP.id ? (pm.b(rU.aBT, !0), pm.b(rU.aBT, !1)) : 14 === aBP.id ? (pm.b(rU.aBU, !0), pm.b(rU.aBU, !1)) : 6 === aBP.id ? (aBD = 0, aL.co = !
						0) : 7 === aBP.id ? m ? window.webkit.messageHandlers.iosCommandA.postMessage("showConsentForm") : n.setState(7) : 12 === aBP.id && n.setState(14), !0;
				return aBC = !1, !(aL.co = !0)
			}
			return !!pl(h8, h9, aBM, 0) && (aBC = !(aBD = 0), aL.co = !0)
		}
	}, this.p8 = function(h8, h9) {
		var aE, aBM, qI, i5;
		if (!(7 <= aT.pp())) {
			for (aBM = aBN(), qI = a0T, i5 = aBC ? 0 === aBD ? wQ[aBD].length - 2 : wQ[aBD].length : 1, a0T = -1, aE = 0; aE < i5; aE++)
				if (pl(h8, h9, aBM, aE)) {
					a0T = aE;
					break
				} qI !== a0T && (aL.co = !0)
		}
	}, this.cy = function() {
		var aE, i5, aBM;
		if (!(7 <= aT.pp()) && (aBM = aBN(), cz.textAlign = d1, cz.textBaseline = d0, a1m(aBM.hD, aBM.hE, aBM.nY, aBM.uz, wQ[aBD][0].dF, wQ[aBD][0].qH, wQ[aBD][0].em, 0 === a0T, wQ[aBD][0].name), cz.imageSmoothingEnabled = true, cz.drawImage(
				settingsGearIcon, aBM.hD - aBM.nY / 2, aBM.hE, aBM.uz, aBM.uz), cz.imageSmoothingEnabled = false, cz.font = "bold " + Math.floor(aBM.uz * 0.4) + "px " + settings.fontName, (!aBC && cz.fillText("Win count: " + wins_counter,
				Math.floor(aBM.hD + aBM.nY / 2), Math.floor((aBM.hE + aBM.uz / 2) * 2.1))), aBC))
			for (i5 = wQ[aBD].length, aE = 1; aE < i5; aE++) a1m(aBM.hF, aBM.hE + aE * aBM.uz - aE * qL, aBM.nZ, aBM.uz, wQ[aBD][aE].dF, wQ[aBD][aE].qH, wQ[aBD][aE].em, a0T === aE, wQ[aBD][aE].name)
	}
}

function s4() {
	var yE, aBX, aBY, aBZ, a8X = !1;

	function aBa() {
		a8X = !0, yE = -1, aBX = new Array(4);
		for (var aE = 3; 0 <= aE; aE--) aBX[aE] = !1;
		var aBb = Math.floor(1 + .02 * vs);
		aBY = new Array(4), (aBZ = new Array(4))[1] = aBZ[3] = aBY[0] = aBY[2] = 0, aBZ[0] = aBY[3] = -aBb, aBY[1] = aBZ[2] = aBb
	}

	function aBc() {
		if (-1 !== yE)
			if (0 !== gb && gT.i5()) {
				for (var aBd = !1, aE = 3; 0 <= aE; aE--) aBX[aE] && (aBd = !0, e1 += aBY[aE], e3 += aBZ[aE], g3.p8(aBY[aE], aBZ[aE]), hq.xv());
				aBd ? aL.co = !0 : hu.hv()
			} else hu.hv()
	}
	this.pw = function(cd) {
		0 !== gb && gT.i5() && (a8X || aBa(), aBX[cd] = !0, -1 === yE) && (yE = setInterval(aBc, 20), aBc())
	}, this.pr = function(cd) {
		if (0 !== gb && (a8X || aBa(), aBX[cd] = !1, -1 !== yE)) {
			for (var aBd = !1, aE = 3; 0 <= aE; aE--) aBd = aBd || aBX[aE];
			aBd || this.hv()
		}
	}, this.hv = function() {
		if (a8X && -1 !== yE) {
			for (var aE = 3; 0 <= aE; aE--) aBX[aE] = !1;
			clearInterval(yE), yE = -1
		}
	}
}

function s5() {
	var aBf;

	function aBl(hD, hE, hF, hH) {
		return Math.abs(hF - hD) + Math.abs(hH - hE)
	}
	this.aBg = function() {
		return aBf
	}, this.cP = function(player, aBh) {
		var aE;
		if (0 !== bo[player].length && bW.bX(aBh) && (bW.bh(aBh) || bW.bg(aBh) !== player))
			for (aE = 21; 0 <= aE; aE--)
				if (function(aBf, aBh) {
						var aBk, aE, mi = bW.hI(aBf),
							mj = bW.cx(aBf),
							n4 = bW.hI(aBh),
							n3 = bW.cx(aBh),
							aBb = aBl(mi, mj, n4, n3);
						if (!(aBb < 2))
							for (aBk = aBf, aE = 0; aE < aBb; aE++)
								if (Math.abs(n4 - bW.hI(aBk)) >= Math.abs(n3 - bW.cx(aBk)) ? aBk += av[mi < n4 ? 1 : 3] : aBk += av[mj < n3 ? 2 : 0], !bW.t8(aBk)) return !!bW.bX(aBk) && !(0 === aE || aE + 20 < aBb);
						return
					}(aBf = 21 === aE ? function(border, aBh) {
						for (var aBb, n4 = bW.hI(aBh), n3 = bW.cx(aBh), cd = 0, min = aBl(n4, n3, bW.hI(border[0]), bW.cx(border[0])), aE = border.length - 1; 1 <= aE; aE--)(aBb = aBl(n4, n3, bW.hI(border[aE]), bW.cx(border[aE]))) < min && (
							min = aBb, cd = aE);
						return border[cd]
					}(bo[player], aBh) : bo[player][bJ(aE * bo[player].length, 21)], aBh)) return !0;
		return !1
	}
}

function a96() {
	var aBm = !1,
		v6 = 0,
		cl = 0,
		nY = 0,
		l4 = 0,
		dC = null,
		nT = null,
		aBn = null;

	function aBp() {
		for (var a3L, aBs = 0, bU = 0, fQ = Math.floor(cl / 2), dF = Math.floor(nY / 2), a3K = 1.5 * Math.PI, aE = qq; 0 <= aE; aE--) bU += aBn[aE], 0 === aBn[aE] && aBs++;
		if (aBm = !1, nT.clearRect(0, 0, cl, cl), nT.fillStyle = d2.iM, nT.fillRect(0, 0, cl, cl), nT.fillStyle = d2.d3, nT.fillRect(0, 0, cl, l4), nT.fillRect(0, 0, l4, cl), nT.fillRect(cl - l4, 0, l4, cl), nT.fillRect(0, cl - l4, cl, l4), 0 < bU)
			if (aBs === qq) {
				for (aE = qq; 0 <= aE; aE--)
					if (0 < aBn[aE]) {
						! function(aE, fQ, dF) {
							nT.fillStyle = fR.a3P[fR.ob[aE]], nT.beginPath(), nT.arc(fQ, fQ, dF, 0, 2 * Math.PI), nT.fill()
						}(aE, fQ, dF);
						break
					}!
				function(fQ) {
					var cj = fQ / 3;
					nT.font = cK.iG.lW(cj, 1), nT.fillStyle = d2.d3, nT.fillText("100%", fQ, fQ + .1 * cj)
				}(fQ)
			} else {
				for (aE = 0; aE <= qq; aE++) 0 < aBn[aE] && (! function(aE, fQ, dF, a3K, a3L) {
					nT.fillStyle = fR.a3P[fR.ob[aE]], nT.beginPath(), nT.arc(fQ, fQ, dF, a3K, a3L), nT.lineTo(fQ, fQ), nT.fill()
				}(aE, fQ, dF, a3K, a3L = a3K + 2 * Math.PI * aBn[aE] / bU), function(fQ, dF, a3K, a3L) {
					var aR = (a3L - a3K) / (2 * Math.PI),
						cj = +dF * Math.min(aR, .37);
					cj < 8 || (a3K = (a3K + a3L) / 2, a3L = Math.floor(100 * aR + .5) + "%", dF *= .525 - Math.max(.6 * (aR - .7), 0), nT.font = cK.iG.lW(cj, 1), nT.fillStyle = d2.d3, nT.fillText(a3L, fQ + Math.cos(a3K) * dF, fQ + Math.cos(
						a3K + 1.5 * Math.PI) * dF))
				}(fQ, dF, a3K, a3L), 0 !== aE && a3N(fQ, dF, a3K), a3K = a3L);
				a3N(fQ, dF, 1.5 * Math.PI)
			}!
		function(fQ, dF) {
			nT.beginPath(), nT.arc(fQ, fQ, dF, 0, 2 * Math.PI), nT.stroke()
		}(fQ, dF)
	}

	function a3N(fQ, dF, a3Q) {
		nT.beginPath(), nT.moveTo(fQ, fQ), nT.lineTo(fQ + Math.cos(a3Q) * dF, fQ + Math.cos(a3Q + 1.5 * Math.PI) * dF), nT.stroke()
	}
	this.b = function() {
		if (eO) {
			var aE;
			for (v6 = 0, aBn = new Uint32Array(qq + 1), aE = qq; 0 <= aE; aE--) aBn[aE] = 0;
			for (aE = fT - 1; 0 <= aE; aE--) aBn[fR.fS[fU[aE]]] += 1;
			this.resize()
		} else aBn = nT = dC = null
	}, this.wh = function() {
		return cl
	}, this.resize = function() {
		eO && (cl = Math.floor(a0 && !hp ? .18 * vs : .13 * cb), cl = (cl *= 1 + (.5 + .2 * a0) * hp) + cl % 2, nY = Math.floor(7 * cl / 8), (dC = dC || document.createElement("canvas")).width = cl, dC.height = cl, nT = dC.getContext("2d", {
			alpha: !0
		}), l4 = Math.max(1, .015 * cl), nT.lineWidth = l4, nT.strokeStyle = d2.d3, cK.iG.textAlign(nT, 1), cK.iG.textBaseline(nT, 1), aBp())
	}, this.od = function() {
		return aBn[this.oc()]
	}, this.oM = function() {
		return v6 = 31, this.fA(), this.oc()
	}, this.oc = function() {
		for (var aBq = 0, aE = qq; 0 < aE; aE--) aBn[aE] > aBn[aBq] && (aBq = aE);
		return aBq
	}, this.fA = function() {
		if (eO && 32 <= ++v6) {
			var aE;
			for (v6 = 0, aE = qq; 0 <= aE; aE--) aBn[aE] = 0;
			for (aE = fT - 1; 0 <= aE; aE--) aBn[fR.fS[fU[aE]]] += bv[fU[aE]];
			aBm = !0
		}
	}, this.cg = function() {
		eO && aBm && aBp()
	}, this.cy = function() {
		eO && (hp ? cz.drawImage(dC, kp, kp) : cz.drawImage(dC, kp, wi + 2 * kp))
	}
}

function sW() {
	this.a2p = function() {
		n || m || function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var aBx = window.location.search,
				aBx = new URLSearchParams(aBx).get(key);
			if ("string" != typeof aBx || aBx.length < 1) return null;
			return aBx
		}("replay") && lU.show()
	}, this.lb = function() {
		var aBw;
		n || m || ((aBw = new URL(window.location.href)).search = "", history.replaceState(null, "", aBw.toString()))
	}
}

function s6() {
	var aBz, ad;
	this.b = function() {
		for (var aE = (ad = new Uint16Array(101)).length - 1; 0 <= aE; aE--) ad[aE] = bJ(32768 * aE, 100);
		this.r0(0)
	}, this.value = function(bc) {
		return ad[bc]
	}, this.a8F = function() {
		return bJ(aBz - 1, 2)
	}, this.r0 = function(a8W) {
		aBz = 2 * a8W % 32768 + 1
	}, this.random = function() {
		return aBz = 167 * aBz % 32768
	}, this.ef = function(gp) {
		return bJ(gp * this.random(), 32768)
	}, this.fK = function(bc) {
		return 0 !== bc && this.random() < this.value(bc)
	}
}

function sS() {
	this.k9 = new aC0, this.xg = new aC1, this.xf = new aC2, this.b = function(qt, nc, qv, qw) {
		var aC3;
		cH || ((aC3 = {}).qu = bN, aC3.qt = qt, aC3.nc = nc, aC3.qv = qv, aC3.qw = qw, aC3.a3Y = az.me, aC3.a3Z = az.a3V, ft.a3x(aC3), this.k9.b(aC3))
	}, this.fA = function() {
		cH || this.k9.fA()
	}, this.xe = function() {
		var qH = this.k9.aC3;
		0 === gb && aT.a2J(), az.lw(qH.a3Y, qH.a3Z), 1 === qH.nc.length && (ft.a3s(qH.qv), ft.a3u(qH.a3v, qH.a3w)), g6.close(g6.pQ, 3246), ft.a3z(), qs(qH.qt, qH.qu, qH.nc, qH.qv, qH.qw, !0)
	}, this.xc = function(v) {
		var aE = v.indexOf("=");
		return 0 <= aE ? v.substring(aE + 1) : v
	}, this.xh = function(v) {
		return "https://territorial.io/?replay=" + v
	}
}

function aC0() {
	this.aC4 = null, this.aC5 = null, this.aC6 = null, this.aC7 = null, this.aC8 = null, this.aC9 = null;
	var aCA = 0;
	this.aC3 = null, this.xd = "", this.b = function(aC3) {
		this.aC4 = [], this.aC5 = [], this.aC6 = [], this.aC7 = [], this.aC8 = [0], this.aC9 = [0], aCA = 0, this.aC3 = aC3, this.xd = ""
	}, this.kA = function(id, ae, ag, ai) {
		cH || 2 === gb || (0 === this.aC8[aCA] && (this.aC9[aCA] ? (this.aC8.push(1), this.aC9.push(0), aCA++) : this.aC8[aCA] = 1), this.aC4.push(id), this.aC5.push(ae), this.aC6.push(void 0 === ag ? 0 : ag), this.aC7.push(void 0 === ai ? 0 :
			ai), this.aC9[aCA]++)
	}, this.fA = function() {
		0 === this.aC8[aCA] ? this.aC9[aCA]++ : (this.aC8.push(0), this.aC9.push(0), aCA++)
	}
}

function aC2() {
	function aCG(v) {
		0 === gb ? rJ.a27(3605) : g2.uN(v)
	}
	this.m0 = function(v) {
		if (m7.lt(m7.lq(m7.lp(v))), ! function() {
				if (k4.d6 < 10) aCG("File Too Small");
				else if (k4.k5(9) !== a8q) aCG("Game Version Error");
				else if (k4.k5(31) !== k4.d6) aCG("Size Error");
				else {
					if (function(eu) {
							var aE, bc = k4.k3,
								bU = k4.d6,
								a5a = 0;
							for (aE = 7; aE < bU; aE++) a5a = a5a + bc[aE] & 65535;
							return a5a === eu
						}(k4.k5(16))) return 1;
					aCG("Hash Error")
				}
				return
			}()) return !1;
		(aC3 = {}).qu = k4.k5(9), aC3.qt = k4.k5(14), aC3.qv = k4.k5(4), aC3.qw = 1 === k4.k5(1), aC3.a3Y = k4.k5(6), aC3.a3Z = k4.k5(14), aC3.aCI = k4.k5(10), gR.k9.aC3 = aC3,
			function() {
				var aE, a45, a44, name, bU = gR.k9.aC3.aCI,
					nc = [];
				for (aE = 0; aE < bU; aE++) a45 = k4.k5(1), a44 = [k4.k5(6), k4.k5(6), k4.k5(6)], name = k4.aCJ(k4.k5(5)), nc.push({
					name: name,
					a44: a44,
					a45: a45
				});
				if (gR.k9.aC3.nc = nc, 8 === gR.k9.aC3.qv)
					for (aE = 0; aE < bU; aE++) nc[aE].ng = k4.k5(14)
			}(),
			function() {
				var aE, bU, aCK = gR.k9.aC3;
				if (1 === aCK.nc.length)
					for (bU = 6 < aCK.qv ? 1 : aCK.qv + 2, aCK.a3v = new Array(bU), aCK.a3w = new Array(bU), aE = 0; aE < bU; aE++) aCK.a3v[aE] = k4.k5(3), aCK.a3w[aE] = k4.k5(9) + 1
			}(), aC3 = k4.k5(5), aCL = k4.k5(30), aCM = k4.k5(30);
		var aC3, aCL, aCM, aE, id, bU = aCL,
			aCP = new Uint8Array(bU),
			aCQ = new Uint16Array(bU),
			aCR = new Uint32Array(bU),
			aCS = new Uint32Array(bU);
		for (gR.k9.aC4 = aCP, gR.k9.aC5 = aCQ, gR.k9.aC6 = aCR, gR.k9.aC7 = aCS, aE = 0; aE < bU; aE++) aCP[aE] = id = k4.k5(4), aCQ[aE] = k4.k5(9), 0 === id ? aCR[aE] = k4.k5(22) : 1 === id ? (aCR[aE] = k4.k5(10), aCS[aE] = k4.k5(10)) : 2 ===
			id ? (aCR[aE] = k4.k5(10), aCS[aE] = k4.k5(9)) : 3 === id || 4 === id ? (aCR[aE] = k4.k5(10), aCS[aE] = k4.k5(22)) : 5 === id ? aCR[aE] = k4.k5(10) : 6 === id ? aCR[aE] = k4.k5(7) : 7 === id && (aCR[aE] = k4.k5(1));
		return function(bU, m1) {
			var aE, aC8 = new Uint8Array(bU),
				aC9 = new Array(bU);
			for (aC9.fill(0), gR.k9.aC8 = aC8, gR.k9.aC9 = aC9, aE = 0; aE < bU; aE++) aC8[aE] = k4.k5(1), aC9[aE] = k4.k5(m1)
		}(aCM, aC3), k4.cd < 8 * k4.d6 - 13 || k4.cd > 8 * k4.d6 ? (aCG("Out Of Bounds Error: " + k4.cd + " " + 8 * k4.d6), !1) : (gR.k9.xd = v, !0)
	}
}

function aC1() {
	this.o3 = function() {
		var aCK, m1 = function() {
				var aE, aC9 = gR.k9.aC9,
					bU = aC9.length,
					max = 0;
				for (aE = 0; aE < bU; aE++) max = Math.max(max, aC9[aE]);
				return m9(Math.max(max, 1))
			}(),
			aCU = function(m1) {
				return 179 + function() {
					var aE, nc = gR.k9.aC3.nc,
						bU = nc.length,
						aCU = 24 * bU;
					for (aE = 0; aE < bU; aE++) aCU += 10 * w.o3(nc[aE].name).length;
					8 === gR.k9.aC3.qv && (aCU += 14 * bU);
					return aCU
				}() + (1 === gR.k9.aC3.nc.length ? 12 * gR.k9.aC3.a3v.length : 0) + function() {
					var aE, aC4 = gR.k9.aC4,
						bU = aC4.length,
						aCU = 13 * bU,
						aCi = [22, 20, 19, 32, 32, 10, 7, 1, 0, 0];
					for (aE = 0; aE < bU; aE++) aCU += aCi[aC4[aE]];
					return aCU
				}() + function(m1) {
					return gR.k9.aC9.length * (1 + m1)
				}(m1)
			}(m1);
		lv.lw(aCU + (6 - aCU % 6) % 6), aCK = gR.k9.aC3, lv.lx(9, a8q), lv.lx(31, lv.d6), lv.cd += 16, lv.lx(9, aCK.qu), lv.lx(14, aCK.qt), lv.lx(4, aCK.qv), lv.lx(1, aCK.qw), lv.lx(6, aCK.a3Y), lv.lx(14, aCK.a3Z), lv.lx(10, aCK.nc.length);
		var aE, em, aCc, aCd, nc = gR.k9.aC3.nc,
			bU = nc.length;
		for (aE = 0; aE < bU; aE++)
			for (lv.lx(1, nc[aE].a45), lv.lx(18, (nc[aE].a44[0] << 12) + (nc[aE].a44[1] << 6) + nc[aE].a44[2]), aCc = w.o3(nc[aE].name), aCd = aCc.length, lv.lx(5, aCd), em = 0; em < aCd; em++) lv.lx(10, aCc[em]);
		if (8 === gR.k9.aC3.qv)
			for (aE = 0; aE < bU; aE++) lv.lx(14, nc[aE].ng);
		return function() {
				var aE, aCK = gR.k9.aC3;
				if (1 === aCK.nc.length)
					for (aE = 0; aE < aCK.a3v.length; aE++) lv.lx(3, aCK.a3v[aE]), lv.lx(9, aCK.a3w[aE] - 1)
			}(),
			function(m1) {
				var aE, aC4 = gR.k9.aC4,
					ae = gR.k9.aC5,
					ag = gR.k9.aC6,
					ai = gR.k9.aC7,
					bU = aC4.length;
				for (lv.lx(5, m1), lv.lx(30, bU), lv.lx(30, gR.k9.aC9.length), aE = 0; aE < bU; aE++) lv.lx(4, aC4[aE]), lv.lx(9, ae[aE]), 0 === aC4[aE] ? lv.lx(22, ag[aE]) : 1 === aC4[aE] ? (lv.lx(10, ag[aE]), lv.lx(10, ai[aE])) : 2 === aC4[
					aE] ? (lv.lx(10, ag[aE]), lv.lx(9, ai[aE])) : 3 === aC4[aE] || 4 === aC4[aE] ? (lv.lx(10, ag[aE]), lv.lx(22, ai[aE])) : 5 === aC4[aE] ? lv.lx(10, ag[aE]) : 6 === aC4[aE] ? lv.lx(7, ag[aE]) : 7 === aC4[aE] && lv.lx(1, ag[aE])
			}(m1),
			function(m1) {
				var aE, aC8 = gR.k9.aC8,
					aC9 = gR.k9.aC9,
					bU = aC8.length;
				for (aE = 0; aE < bU; aE++) lv.lx(1, aC8[aE]), lv.lx(m1, aC9[aE])
			}(m1), lv.cd !== aCU && g2.uN("Encoder Index Error: " + lv.cd + " " + aCU), lv.cd = 40, lv.lx(16, function() {
				var aE, bc = lv.k3,
					bU = lv.d6,
					a5a = 0;
				for (aE = 7; aE < bU; aE++) a5a = a5a + bc[aE] & 65535;
				return a5a
			}()), k4.b(lv.k3), rS.nq(rS.no(bJ(aCU - 1, 6) + 1))
	}
}

function sD() {
	var fQ, ur = !1,
		aCj = !1,
		aCk = -1e4;

	function resize(dU) {
		fQ = 0, ch.ci() && (aCl(dU) || ur) && (ur = !1, vq(), a0s.b(), rH.b(), pn.resize(), a2S.b(), rI.resize(), pd.resize(), rG.resize(), a2H.resize(), cw.resize(), aF.b(), rV.resize(), 1 <= gb ? (gI.resize(!1), gL.resize(), g4.resize(), hq
		.resize(), cU.resize(), g2.resize(), cI.resize(), lU.resize(), gW.resize(), gO.resize(), gM.resize(), cm.resize(), nQ.resize(), nR.resize(), g3.resize(), gU.resize(), gP.resize(), hq.xv()) : (2 === aT.pp() ? ft.resize() : 3 === aT
		.pp() && rJ.resize(), aT.a2P(), aT.a2T()), aL.co = !0)
	}

	function aCm(aR) {
		return aR && 128 < aR ? Math.floor(aR) : 128
	}

	function aCl(dU) {
		var nY, uz, v0;
		return q3.aBL(), nY = aCm(document.documentElement.clientWidth), uz = window.visualViewport ? aCm(window.visualViewport.height) : aCm(document.documentElement.clientHeight), dU && !aCj ? (aCj = !0, document.body.removeChild(p7)) : aCj && (
			aCj = !1, document.body.appendChild(p7)), dU = Math.floor(.5 + lX * nY), v0 = Math.floor(.5 + lX * uz), !(dU === hG && v0 === cu || pX.q2() && (pn.lT || lU.lT)) && (hG = a1 = dU, cu = a2 = v0, vs = x0(a1, a2), cb = bJ(a2 + a1, 2), p7
			.width = dU, p7.height = v0, p7.style.width = nY + "px", p7.style.height = uz + "px", 1)
	}
	this.b = function() {
		a1 = a2 = vs = hG = cu = cb = 0, lX = fQ = 1, p7 = document.getElementById("canvasA"), (cz = p7.getContext("2d", {
			alpha: !1
		})).imageSmoothingEnabled = !1, aCl(0)
	}, this.fA = function() {
		rQ.fA(), 50 <= ++fQ && resize(0)
	}, this.a4D = function(dU) {
		ur = !0, resize(dU)
	}, this.q4 = function() {
		aCk + 1e3 > aL.aM || (aCk = aL.aM, resize(0))
	}, this.aBL = function() {
		var aCn = window.devicePixelRatio || 1,
			aE = hM.hN.aBJ;
		return (lX = aE < 3 ? .5 + .25 * aE : (.5 + .125 * (aE - 3)) * aCn) / aCn
	}
}

function s7() {
	var player, eV, mS, mM, hD, hE, hF, hH, cd, aCo, id;

	function aCu() {
		var eU;
		if (bW.bh(mS)) eU = bZ;
		else {
			if ((eU = bW.bg(mS)) === player) return void aCw(!0);
			if (!eh(player, eU)) return function(eU) {
				var max = bv[eU] * qV - bO[eU];
				max <= 0 || (eV -= max = max < eV ? max : eV, player === bN && (g2.jk(max, 0, eU), bR.bS[16] += max), eU === bN && (g2.uj(max, player), bR.bS[10] += max), bO[eU] += max, g3.jl(eU, max))
			}(eU), void aCw(!0)
		}
		player === bN && (bR.bS[13] += eV), gF.bM(player, id), b5.bT(player, aCo), bV[player].push(mM), b5.eR(player, eV, eU), bL.eS(player, !0)
	}

	function aCw(aCz) {
		gF.bM(player, id), b5.bT(player, aCo), aCz && (bO[player] += eV)
	}

	function aCq() {
		bW.a5K(mS, player) && bW.a5M(mS)
	}

	function aCp(aE, a6k, wd, ed, i5) {
		if (cd = aE, id = a6k, player = wd, hD = bW.hI(ed), hE = bW.cx(ed), hF = bW.hI(i5), hH = bW.cx(i5), mM = mS = bW.my(hD, hE), -1 !== (aCo = b5.hL(player, id))) return eV = b5.bD(player, aCo), 1;
		aCq(), gF.bM(player, id)
	}
	this.fA = function(aE, id, wd, ed, i5) {
		aCp(aE, id, wd, ed, i5) && (aCq(), function() {
			var aD0 = bJ(eV, 128);
			eV -= aD0 = aD0 < 1 ? 1 : aD0, player === bN && (bR.bS[15] += aD0);
			if (eV <= bK) return player === bN && (bR.bS[15] += eV), void aCw(!1);
			return b5.bu(player, aCo, eV), 1
		}()) && (aE = bW.my(hD, hE), mS = Math.abs(hF - hD) >= Math.abs(hH - hE) ? aE + av[hD < hF ? 1 : 3] : aE + av[hE < hH ? 2 : 0], hD = bW.hI(mS), hE = bW.cx(mS), gF.h0(cd, mS), ! function() {
			if (bW.bX(mS)) return;
			return 1
		}() ? aCu() : bW.t8(mS) && bW.a5P(mS, player))
	}, this.h4 = function(wd, ed) {
		player = wd, mS = bW.my(bW.hI(ed), bW.cx(ed)), aCq()
	}
}

function s8() {
	var aD1, aD2, t8, aD3;
	this.b = function() {
		var aE, h8, h9, a44, aD4, cl, eu, nT, d9, mK, aR, bc, f2, eb, aD7;
		if (function() {
				if (t8 = !0, aD3 = "rgb(" + az.mH[0] + "," + az.mH[1] + "," + az.mH[2] + ")", az.a9M(az.me)) return 1;
				return t8 = !1, 0
			}()) aD2 = null;
		else {
			for (aD1 = bJ(96, 4), aD4 = 1 === az.me ? (a44 = 0, 160) : (a44 = 128, 32), aD3 = "rgb(" + a44 + "," + a44 + "," + a44 + ")", aD2 = new Array(4), aE = 3; 0 <= aE; aE--) {
				if (aD2[aE] = document.createElement("canvas"), cl = aE % 2 == 0 ? az.b0 : aD1, eu = aE % 2 == 0 ? aD1 : az.b1 + 2 * aD1, aD2[aE].width = cl, aD2[aE].height = eu, mK = (d9 = (nT = aD2[aE].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, cl, eu)).data, aE % 2 == 0)
					for (h9 = aD1 - 1; 0 <= h9; h9--)
						for (aR = aD4 + Math.floor((h9 + 1) * (a44 - aD4) / (aD1 + 1)), h8 = cl - 1; 0 <= h8; h8--) mK[bc = 4 * ((0 === aE ? aD1 - h9 - 1 : h9) * cl + h8)] = aR, mK[bc + 1] = aR, mK[bc + 2] = aR, mK[bc + 3] = 255;
				else {
					for (h8 = aD1 - 1; 0 <= h8; h8--)
						for (aR = aD4 + Math.floor((h8 + 1) * (a44 - aD4) / (aD1 + 1)), h9 = eu - 1 - aD1; aD1 <= h9; h9--) mK[bc = 4 * (h9 * cl + (3 === aE ? aD1 - h8 - 1 : h8))] = aR, mK[bc + 1] = aR, mK[bc + 2] = aR, mK[bc + 3] = 255;
					for (eb = 1; 0 <= eb; eb--)
						for (h8 = aD1 - 1; 0 <= h8; h8--)
							for (h9 = aD1 - 1; 0 <= h9; h9--) f2 = (Math.pow(h8 * h8 + h9 * h9, .5) + 1) / (aD1 + 1), aR = aD4 + Math.floor((1 < f2 ? 1 : f2) * (a44 - aD4)), mK[bc = 4 * ((0 === eb ? aD1 - h9 - 1 : h9 + eb * (eu - aD1)) * cl + (
								1 === aE ? h8 : aD1 - h8 - 1))] = aR, mK[bc + 1] = aR, mK[bc + 2] = aR, mK[bc + 3] = 255
				}
				nT.putImageData(d9, 0, 0)
			}
			aD7 = aD4, az.mC.fillStyle = "rgb(" + aD7 + "," + aD7 + "," + aD7 + ")", az.mC.fillRect(0, 0, az.b0, 1), az.mC.fillRect(0, az.b1 - 1, az.b0, 1), az.mC.fillRect(0, 0, 1, az.b1), az.mC.fillRect(az.b0 - 1, 0, 1, az.b1)
		}
	}, this.nN = function() {
		var eb = t8 ? 0 : -aD1;
		aAw(eb, eb, az.b0 - 2 * eb, az.b1 - 2 * eb, i3.aD8, i3.aD9, i3.aDA, i3.aDB) || (cz.fillStyle = aD3, cz.fillRect(0, 0, hG, cu))
	}, this.cy = function() {
		t8 || (aAv(0, -aD1, az.b0, aD1, i3.aD8, i3.aD9, i3.aDA, i3.aDB) && cz.drawImage(aD2[0], i3.aDC, i3.aDD - aD1), aAv(az.b0, -aD1, aD1, az.b1 + 2 * aD1, i3.aD8, i3.aD9, i3.aDA, i3.aDB) && cz.drawImage(aD2[1], i3.aDC + az.b0, i3.aDD - aD1),
			aAv(0, az.b1, az.b0, aD1, i3.aD8, i3.aD9, i3.aDA, i3.aDB) && cz.drawImage(aD2[2], i3.aDC, i3.aDD + az.b1), aAv(-aD1, -aD1, aD1, az.b1 + 2 * aD1, i3.aD8, i3.aD9, i3.aDA, i3.aDB) && cz.drawImage(aD2[3], i3.aDC - aD1, i3.aDD - aD1))
	}
}

function sX() {
	this.jO = new aDE, this.a5n = new aDF, this.nO = new aDG, this.gG = new aDH, this.eF = new aDI, this.aD7 = new aDJ, this.aDK = new aDL, this.f9 = new aDM, this.kM = new aDN, this.b = function() {
		this.nO.b(), this.gG.b(), this.eF.b(), this.aD7.b()
	}
}

function aDM() {
	function aDT(player, ed, aDV, aDW) {
		for (var hD, hE, cl, eu, dF, aDX, hF, hH, bU = ed + aDW, aE = ed; aE < bU; aE += aDV)
			if (hD = (hD = ey[player] - aE) < 1 ? 1 : hD, hE = f1[player] - aE, hF = (hF = ex[player] + aE) >= az.b0 - 1 ? az.b0 - 2 : hF, eu = (hH = (hH = f0[player] + aE) >= az.b1 - 1 ? az.b1 - 2 : hH) - (hE = hE < 1 ? 1 : hE), hF = (dF = bJ(ee
					.random() * (2 * (hF - hD + hH - hE)), ee.value(100))) <= (cl = hF - hD) ? (aDX = hD + dF, hE) : dF <= cl + eu ? (aDX = hF, hE + dF - cl) : dF <= 2 * cl + eu ? (aDX = hD + dF - cl - eu, hH) : (aDX = hD, hE + dF - 2 * cl - eu),
				aDU(player, hH = bW.my(aDX, hF))) return hH;
		return -1
	}

	function aDU(qR, bd) {
		return bW.bX(bd) && (bW.bh(bd) || qR !== (bd = bW.bg(bd)) && eh(qR, bd) && 0 < bo[bd].length)
	}
	this.fA = function(player) {
		return !(0 === bo[player].length || bO[player] < 100) && eE.gG.kI !== eE.gG.kJ && (eE.gG.kK[player] !== eE.gG.kL && cK.cL.kD(player, 203, 32, 16) ? !! function(player) {
			var bd = function(player) {
				var aE, n2, n1, hD = ey[player],
					hE = f1[player],
					dm = ex[player] - hD + 1,
					dq = f0[player] - hE + 1,
					aR = ee.value(100);
				for (aE = 0; aE < 32; aE++)
					if (n2 = hD + cA.cB(ee.random() * dm, aR), n1 = hE + cA.cB(ee.random() * dq, aR), n2 = bW.my(n2, n1), aDU(player, n2)) return n2;
				return -1
			}(player);
			if (0 <= bd) return eE.kM.kN(player, bd >> 2);
			if (0 <= (bd = aDT(player, 1, 4, 40))) return eE.kM.kN(player, bd >> 2);
			if (0 <= (bd = aDT(player, 40, 8, 200))) return eE.kM.kN(player, bd >> 2);
			return
		}(player) && !! function(qR) {
			if (0 === eK.aa[2]) return void console.log("error 325234");
			var aDR = eK.aa[1] + k8.dH[eK.aa[2] - 1] << 2;
			if (bW.bh(aDR)) return 1;
			return aDR = bW.bg(aDR), qR !== aDR && !!eh(qR, aDR)
		}(player) && function(player) {
			return cK.cL.kF(player), eE.gG.kO(player), !0
		}(player) : void 0)
	}
}

function aDE() {
	function aDa(aDZ) {
		var aDm = 4 + .03 * (1 + 1.5 * a0) * cb / e2;
		return k8.dt(aDZ, eK.aa[1]) < aDm
	}
	this.jP = function(player, aDZ) {
		return !!k8.e8(aDZ) && eE.gG.kI !== eE.gG.kJ && eE.gG.kK[player] !== eE.gG.kL && 0 !== bo[player].length && !!eE.kM.kN(player, aDZ) && !!aDa(aDZ)
	}, this.jT = function(player, jS, aDZ) {
		return !!(k8.e8(aDZ) && this.kP(player, jS) && eE.kM.kQ(aDZ) && aDa(aDZ))
	}, this.kP = function(player, id) {
		for (var aDb, aDc = player << 3, aDd = aDc + eE.gG.kK[player], aDe = eE.gG.aDe, aDf = eE.gG.aDf, aE = aDc; aE < aDd; aE++)
			if (id === aDf[aDb = aDe[aE]]) return eK.aa[3] = aDb, !0;
		return !1
	}, this.jR = function(dW) {
		var aDg = eE.aD7.aDg;
		return eE.aD7.aDg = -1, !!this.kP(bN, aDg) && (cR.cS.jR(aDg, dW), !0)
	}, this.t4 = function(cr, cs) {
		var aE, aDd, aDh, aDe, aDi, aDj, aDk, f2, uS, aDl, player = bN,
			bU = eE.gG.kK[player];
		if (0 === bU) return !1;
		for (aDe = eE.gG.aDe, aDj = eE.gG.aDj, uS = eE.gG.uS, aDd = (player = player << 3) + bU, aDi = .4 * cK.iG.ko(.5) * cb / e2, aDh = -1, aE = player; aE < aDd; aE++) aDl = aDe[aE], aDk = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(uS[aDl]))), (
			f2 = k8.di(cr, cs, aDj[aDl])) - aDk < aDi && (aDi = f2, aDh = aDl);
		return !(aDh < 0 || (eE.aD7.aDg = eE.gG.aDf[aDh], 0))
	}, this.tI = function(cr, cs) {
		var aE, aDh, aDi, aDj, aDk, f2, uS, bU = eE.gG.kI;
		if (bU < 1) return -1;
		for (aDj = eE.gG.aDj, uS = eE.gG.uS, aDi = 1e3, aDh = -1, aE = 0; aE < bU; aE++) aDk = 16 * cK.iG.ko(.5) * (.625 + .125 * Math.sqrt(Math.sqrt(uS[aE]))), (f2 = k8.di(cr, cs, aDj[aE])) < aDi && f2 < aDk && (aDi = f2, aDh = aE);
		return aDh
	}
}

function aDF() {
	this.a5o = function(player) {
		for (var aDe = eE.gG.aDe, aDc = player << 3, aE = aDc + eE.gG.kK[player] - 1; aDc <= aE; aE--) this.aDn(aDe[aE])
	}, this.aDn = function(aDo) {
		var gG = eE.gG,
			aDp = gG.kI - 1,
			aDq = gG.uR[aDo],
			aDr = gG.aDs[aDo],
			aDt = gG.aDj[aDo];
		gG.kI = aDp, gG.uR[aDo] = gG.uR[aDp], gG.aDu[aDo] = gG.aDu[aDp], gG.aDv[aDo] = gG.aDv[aDp], gG.aDj[aDo] = gG.aDj[aDp], gG.aDw[aDo] = gG.aDw[aDp], gG.uS[aDo] = gG.uS[aDp], gG.aDs[aDo] = gG.aDs[aDp], gG.aDf[aDo] = gG.aDf[aDp], gG.aDx[aDo] =
			gG.aDx[aDp], gG.aDe[gG.uR[aDo]] = aDo,
			function(a3Q) {
				var player = a3Q >> 3,
					gG = eE.gG,
					bU = gG.kK[player] - 1,
					aE0 = (player << 3) + bU;
				gG.kK[player] = bU, aE0 !== a3Q && (gG.aDe[a3Q] = gG.aDe[aE0], gG.uR[gG.aDe[a3Q]] = a3Q)
			}(aDq), eE.eF.eF[k8.eD(gG.aDj[aDo])][gG.aDs[aDo]] = aDo, aDp = k8.eD(aDt), aDq = aDr, aDp = eE.eF.eF[aDp], gG = aDp.pop(), aDq !== aDp.length && (aDp[aDq] = gG, eE.gG.aDs[gG] = aDq)
	}
}

function aDG() {
	var aE3, aE4 = 8,
		aE5 = new Array(2);

	function aE6(cd) {
		var d5 = aE4 + 4,
			so = cK.iG.m8(d5, d5),
			dD = cK.iG.getContext(so, !0),
			d9 = cK.iG.getImageData(dD, d5, d5),
			mK = d9.data;
		return aE7(mK, d5 + 1, cd), aE7(mK, d5 + 2, cd), aE7(mK, 2 * d5 + 1, cd), aE7(mK, 2 * d5 - 3, cd), aE7(mK, 2 * d5 - 2, cd), aE7(mK, 3 * d5 - 2, cd), aE7(mK, d5 * (d5 - 3) + 1, cd), aE7(mK, d5 * (d5 - 2) + 1, cd), aE7(mK, d5 * (d5 - 2) + 2,
			cd), aE7(mK, d5 * (d5 - 2) - 2, cd), aE7(mK, d5 * (d5 - 1) - 3, cd), aE7(mK, d5 * (d5 - 1) - 2, cd), dD.putImageData(d9, 0, 0), so
	}

	function aE7(mK, dW, cd) {
		dW *= 4;
		mK[dW] = 255, mK[1 + dW] = 255, mK[2 + dW] = cd, mK[3 + dW] = 255
	}

	function m8(player) {
		var aE8 = aE4 >> 1,
			so = cK.iG.m8(aE4, aE4);
		return function(dD, player, h8, h9) {
			var dm, dW, aEA, a3R, d5 = aE4,
				d9 = cK.iG.getImageData(dD, d5, d5),
				mK = d9.data,
				m2 = (d5 >> 1) - .5,
				aD3 = bW.a5E(player),
				aEC = cK.mI.qA(aD3, .5);
			cK.mI.qB(aD3, aEC, 300) || cK.mI.qD(aD3, 100);
			for (h9 = 0; h9 < d5; h9++)
				for (h8 = 0; h8 < d5; h8++) a3R = (d5 - 1.5) * (d5 - 1.5) / 4, aEA = (dm = (dm = h8 - m2) * dm + (dm = h9 - m2) * dm) <= (d5 - 4.5) * (d5 - 4.5) / 4 ? aEC : aD3, mK[dW = 4 * (h9 * d5 + h8)] = aEA[0], mK[1 + dW] = aEA[1], mK[2 +
					dW] = aEA[2], mK[3 + dW] = a3R < dm ? 0 : 255;
			dD.putImageData(d9, 0, 0)
		}(cK.iG.getContext(so, !0), player, aE8, aE8), so
	}
	this.b = function() {
		aE3 = new Array(bZ), aE5[0] = aE6(255), aE5[1] = aE6(0)
	}, this.cy = function() {
		var aE, player, aED, eV, aEE, dl, aEI, aEK, aEL, aDj = eE.gG.aDj,
			uR = eE.gG.uR,
			uS = eE.gG.uS,
			aEM = aE3,
			aEN = bN,
			aEO = -1,
			bU = eE.gG.kI,
			aEP = hG,
			aEQ = cu,
			aER = az.b0 << 4,
			aES = e2,
			df = aES / aE4,
			hD = e1 / aES,
			hE = e3 / aES,
			dm = (aEP + e1) / aES - hD,
			dq = (aEQ + e3) / aES - hE,
			dD = cz;
		for (eE.jO.kP(bN, eE.aD7.aDg) && (aEO = eK.aa[3]), dD.fillStyle = d2.d3, aE = 0; aE < bU; aE++) player = uR[aE] >> 3, eV = uS[aE], aED = .625 + .125 * Math.sqrt(Math.sqrt(eV)), aEE = (dl = aDj[aE]) % aER / 16 - aED, dl = aEQ * (Math
			.floor(dl / aER) / 16 - aED - hE) / dq, aEI = -2 * (aEL = aES * aED) * (1 + (aEK = +(player === aEN)) / 8), aEK = aEK * aEL / 4, (aEL = aEP * (aEE - hD) / dm) < aEI || dl < aEI || aEP + aEK < aEL || aEQ + aEK < dl || (aEE = aED *
			aES, dD.imageSmoothingEnabled = (aEI = 2 * aED * df) < 3, void 0 === (aEK = aEM[player]) && (aEM[player] = aEK = m8(player)), player === aEN && (dD.setTransform(aEI, 0, 0, aEI, aEL - 2 * aEI, dl - 2 * aEI), dD.drawImage(aE5[+(
				aE === aEO)], 0, 0)), dD.setTransform(aEI, 0, 0, aEI, aEL, dl), dD.drawImage(aEK, 0, 0), (aED = Math.floor(function(eV) {
				if (eV < 1e3) return .42;
				if (eV < 1e4) return .34;
				if (eV < 1e6) return .26;
				if (eV < 1e8) return .19;
				return .15
			}(eV) * aEE)) < 6) || (dD.setTransform(1, 0, 0, 1, 0, 0), 20 <= aED ? (dD.font = cK.iG.lW(.85 * aED, 1), dD.fillText(gM.hP(eV), aEL + aEE, dl + .93 * aEE + .085 * aED), (aED *= g3.a7g(player)) < 6 || (dD.font = cK.iG.lW(aED, 1),
			dD.fillText(hQ[player], aEL + aEE, dl + 1.16 * aEE + .1 * aED))) : (dD.font = cK.iG.lW(aED, 1), dD.fillText(gM.hP(eV), aEL + aEE, dl + aEE + .1 * aED)));
		dD.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aDL() {
	this.fA = function() {
		for (var aEU, aDK, aDx = eE.gG.aDx, aDj = eE.gG.aDj, aDv = eE.gG.aDv, aE = eE.gG.kI - 1; 0 <= aE; aE--) aEU = aDj[aE], 0 !== (aDK = aDx[aE]) && aEU === aDv[aE] && (! function(aE, aEW, cW) {
			var eU, player = eE.gG.uR[aE] >> 3,
				cW = aEW + k8.dH[cW] << 2,
				aE = eE.gG.uS[aE];
			if (bW.bh(cW)) eU = bZ;
			else {
				if ((eU = bW.bg(cW)) === player) return cK.cL.jj(player, aE);
				if (!eh(player, eU)) return cR.fV.jh(player, eU, aE)
			}
			player === bN && (bR.bS[13] += aE);
			bV[player].push(aEW << 2), b5.eR(player, aE, eU), bL.eS(player, !0)
		}(aE, k8.eC(aEU), aDK - 1), eE.a5n.aDn(aE))
	}
}

function aDH() {
	this.aEX = null, this.kJ = 512, this.kL = 8, this.kI = 0, this.gv = 0, this.uR = new Uint16Array(this.kJ), this.aDu = new Uint32Array(this.kJ), this.aDv = new Uint32Array(this.kJ), this.aDj = new Uint32Array(this.kJ), this.aDw = new Uint16Array(
			this.kJ), this.uS = new Uint32Array(this.kJ), this.aDs = new Uint16Array(this.kJ), this.aDf = new Uint16Array(this.kJ), this.aDx = new Uint8Array(this.kJ), this.kK = new Uint8Array(bZ), this.aDe = new Uint16Array(this.kL * bZ), this.b =
		function() {
			this.gv = 0, this.kI = 0, this.aEX = new Uint8Array(az.b0 + az.b1), this.kK.fill(0)
		}, this.kO = function(player) {
			var bU = this.kI,
				aEY = k8.eB(eK.aa[0]),
				aCd = this.kK[player],
				aEZ = (player << 3) + aCd;
			dw[player] = 2, this.uR[bU] = aEZ, this.aDu[bU] = aEY, this.aDj[bU] = aEY, this.aDv[bU] = k8.eB(eK.aa[1]), this.aDw[bU] = 0, this.uS[bU] = eK.aX[0], this.aDs[bU] = eE.eF.kO(bU, k8.eD(aEY)), this.aDf[bU] = this.gv, this.aDx[bU] = eK.aa[2],
				this.gv = this.gv + 1 & 1023, this.aDe[aEZ] = bU, this.kK[player] = aCd + 1, this.kI++
		}, this.jR = function() {
			var aDb = eK.aa[3];
			this.aDu[aDb] = this.aDj[aDb], this.aDv[aDb] = k8.eB(eK.aa[1]), this.aDw[aDb] = 0, this.aDx[aDb] = eK.aa[2]
		}, this.fA = function() {
			if (aL.fP() % 5 == 3) {
				eE.aDK.fA(), ! function(tO) {
					var aE, aEd, aEe, aEf, aEg, aEY, aEk, aEl, be, bd, aDu = tO.aDu,
						aDv = tO.aDv,
						aDj = tO.aDj,
						uS = tO.uS,
						aDw = tO.aDw,
						aDs = tO.aDs,
						tO = tO.kI,
						aER = az.b0 << 4;
					for (aE = tO - 1; 0 <= aE; aE--) aEe = aDj[aE], aEd = aDv[aE], aEe !== aEd && (aEY = aDu[aE], aEk = aEd % aER - (aEg = aEY % aER), aEl = ~~((aEd + .5) / aER) - (aEY = ~~((aEY + .5) / aER)), be = ~~Math.sqrt(aEk * aEk + aEl *
						aEl + .5), bd = 4e5 + 2e4 * ~~Math.sqrt(.5 + (Math.sqrt(uS[aE] + .5) << 4)), 65535 <= (bd = aDw[aE] + Math.max(~~((.5 + bd) / be), 1)) ? aDj[aE] = aEf = aEd : (aDw[aE] = bd, aDj[aE] = aEf = aEg + cA.cB(bd * aEk,
						65536) + aER * (aEY + cA.cB(bd * aEl, 65536))), aDs[aE] = eE.eF.aEn(aDs[aE], aEe, aEf))
				}(this), ! function(tO) {
					var aE, mX, m2, em, fQ, aEo, aEp, aEq, mS, dM, hD, hE, aEr, aDi, aEs, mT, aEY, aEv, bU = tO.kI,
						aDj = tO.aDj,
						uR = tO.uR,
						uS = tO.uS,
						eF = eE.eF.eF,
						aEw = eF.length,
						aEx = eE.eF.aEx,
						aER = az.b0 << 4,
						aEy = eO,
						aEz = fR.fS,
						bd = (bU - 1) * (aL.fP() % 2);
					for (aE = 0; aE < bU; aE++) {
						for (mX = Math.abs(aE - bd), aEY = aDj[mX], m2 = k8.eD(aEY), mS = uR[mX] >> 3, hD = aEY % aER, hE = ~~((aEY + .5) / aER), aEY = uS[mX], aEv = 80 + ~~Math.sqrt(.5 + (Math.sqrt(aEY + .5) << 8)), aDi = Math.min(aEv * aEv,
								262144), aEs = -1, em = 0; em < 9; em++)
							if (!((aEo = m2 + aEx[em]) < 0 || aEw <= aEo))
								for (aEq = eF[aEo], aEp = aEq.length, fQ = 0; fQ < aEp; fQ++) aEr = aEq[fQ], mT = uR[aEr] >> 3, mS == mT || aEy && aEz[mS] === aEz[mT] || (mT = aDj[aEr], (mT = (dM = hD - mT % aER) * dM + (dM = hE - ~~((mT + .5) /
									aER)) * dM) < aDi && (aEs = aEr, aDi = mT)); - 1 !== aEs && (aEY = Math.min(Math.max(1, cA.cB(aEY * (aEv - Math.floor(Math.sqrt(aDi + .5))), 5 * aEv)), uS[aEs]), uS[mX] -= aEY >> 4, uS[aEs] -= aEY)
					}
				}(this);
				var aE, eV, uS = (tO = this).uS,
					tO = tO.kI;
				for (aE = tO - 1; 0 <= aE; aE--) eV = uS[aE], 0 < (eV -= Math.max(1, eV >> 7)) ? uS[aE] = eV : eE.a5n.aDn(aE)
			}
		}
}

function aDI() {
	this.aF0 = 32, this.h8 = 0, this.h9 = 0, this.eG = 0, this.aF1 = 0, this.aF2 = 4, this.eF = null, this.aEx = new Int16Array(9), this.b = function() {
		this.eG = 1 + cA.cB(az.b0 - 1, this.aF0), this.aF1 = 1 + cA.cB(az.b1 - 1, this.aF0), this.eF = new Array(this.eG * this.aF1), cK.mI.q9(this.eF);
		var h8, h9, aEx = this.aEx,
			cl = this.eG;
		for (h8 = -1; h8 <= 1; h8++)
			for (h9 = -1; h9 <= 1; h9++) aEx[3 * (1 + h9) + 1 + h8] = h9 * cl + h8
	}, this.kO = function(aF4, aE) {
		return this.eF[aE].push(aF4), this.eF[aE].length - 1
	}, this.aEn = function(aF5, aEY, aEd) {
		var aF6, aF7, aEY = k8.eD(aEY),
			aEd = k8.eD(aEd);
		return aEY === aEd ? aF5 : (aF6 = this.eF[aEY].pop(), this.eF[aEY].length === aF5 ? this.kO(aF6, aEd) : (aF7 = this.eF[aEY][aF5], this.eF[aEY][aF5] = aF6, eE.gG.aDs[aF6] = aF5, this.kO(aF7, aEd)))
	}
}

function aDN() {
	function a6E(aEd, aF8) {
		if (! function(aEd, aDZ) {
				var dL = k8.eC(aEd),
					aFB = Math.abs(k8.dN(aDZ) - k8.dN(dL)),
					dL = Math.abs(k8.dP(aDZ) - k8.dP(dL));
				0 !== Math.max(aFB, dL) && ! function(aEY, aEd, aFB, aFC) {
					var aFE = k8.dp(aEY),
						aEY = k8.ds(aEY),
						aFG = k8.dp(aEd),
						aEd = k8.ds(aEd),
						aFG = aFG - aFE,
						aEd = aEd - aEY,
						aFK = Math.abs(aFG),
						aFL = Math.abs(aEd),
						aFG = 0 < aFG ? 1 : 3,
						aEd = 0 < aEd ? 2 : 0;
					aFL < aFK ? aFO(aFE, aEY, aFE + aFK, aEY + aFL, aFG, aEd, aFB) : aFO(aEY, aFE, aEY + aFL, aFE + aFK, aEd, aFG, aFC)
				}(aEd, k8.eB(aDZ), aFB, dL)
			}(aEd, aF8), 0 === eK.aW[0]) return !!bW.t8(aF8 << 2);
		if (function(aDZ) {
				if (bW.t8(aDZ << 2)) return 1;
				return function(aDZ) {
					var aE, cW, aEX = eE.gG.aEX,
						aFS = k8,
						bU = eK.aW[0],
						aFT = 4 * aDZ;
					for (aE = bU - 1; 0 <= aE; aE--)
						if (cW = aEX[aE], aFT = aFS.eI(aFT, cW + 2 & 3), bW.t8(aFT)) return eK.aW[0] = aE, eK.aa[1] = aFT >> 2, eK.aa[2] = 1 + cW, 1;
					return
				}(aDZ)
			}(aF8)) {
			var aE, aF8 = k8.eC(aEd),
				mK = a0R,
				aEX = eE.gG.aEX,
				bU = eK.aW[0] - 1,
				aFT = 4 * aF8,
				dI = k8.dI;
			for (aE = 0; aE < bU; aE++)
				if (aFT += dI[aEX[aE]], 0 !== mK[aFT + 3] || 2 !== mK[aFT + 2]) return !!void 0;
			return !!1
		}
		return !1
	}

	function aFO(aFE, aFF, aFG, aFH, aFM, aFN, aFB) {
		for (var h9, aEX = eE.gG.aEX, bd = 0, aFP = 0, eu = aFH - aFF, cl = aFG - aFE, aFQ = aFE % 16, aE = 1; aE <= aFB; aE++) aEX[bd++] = aFM, aEX[bd] = aFN, bd += (h9 = (eu * (aFQ + (aE << 4)) + .5) / cl >> 4) - aFP, aFP = h9;
		eK.ac(eK.aW, bd)
	}
	this.kN = function(player, aF8) {
		var cW, dL, dK = k8.dV(player, aF8);
		return dK !== aF8 && (cW = k8.dJ(dK, aF8), dL = k8.eH(dK, cW), !(!bW.t8(dL << 2) && (cW = k8.dT(dK, aF8, cW), dL = k8.eH(dK, cW), bW.mU(dL << 2) || !bW.t8(dL << 2)) || (eK.aa[0] = dL, eK.aa[1] = aF8, eK.aa[2] = 0, !a6E(k8.eB(dL), aF8)) ||
			0 !== eK.aa[2] && k8.de(player, eK.aa[1] + k8.dH[eK.aa[2] - 1] << 2)))
	}, this.kQ = function(aF8) {
		var aEY = eE.gG.aDj[eK.aa[3]];
		return eK.aa[1] = aF8, eK.aa[2] = 0, a6E(aEY, aF8)
	}
}

function aDJ() {
	var aE4 = 32,
		aFV = new Array(2);

	function m8(fQ) {
		var h8, h9, dW, dq, dm, d5 = aE4,
			so = cK.iG.m8(d5, d5),
			dD = cK.iG.getContext(so, !0),
			d9 = cK.iG.getImageData(dD, d5, d5),
			mK = d9.data,
			m2 = (d5 >> 1) - .5,
			aFW = Math.sqrt(m2 * m2);
		for (mK.fill(255), h9 = 0; h9 < d5; h9++)
			for (h8 = 0; h8 < d5; h8++) dm = h8 - m2, dq = h9 - m2, dW = 4 * (h9 * d5 + h8), dm = 714 * (aFW - Math.sqrt(dm * dm + dq * dq)) / aFW, mK[2 + dW] = fQ, mK[3 + dW] = 255 < dm ? 0 : dm;
		return dD.putImageData(d9, 0, 0), so
	}
	this.aDg = -1, this.b = function() {
		this.aDg = -1, aFV[0] || (aFV[0] = m8(255), aFV[1] = m8(0))
	}, this.aFX = function(dD, df, h8, h9, dF, aE) {
		k8.dy() && (dD.setTransform(df *= 4 / 3 * .625, 0, 0, df, h8 - (dF *= 4 / 3), h9 - dF), dD.drawImage(aFV[+(eE.gG.aDf[aE] === this.aDg)], 0, 0))
	}
}

function a8f() {
	var a24, a8a, ou;

	function aFb() {}

	function a8g() {
		g6.a8g(a24, a8a)
	}

	function aFd(lk) {
		rN.aFf(a24, new Uint8Array(lk.data))
	}

	function aFe() {}

	function a8l(lk) {
		g6.a8l(a24, lk)
	}
	this.b = function(cd, aFY) {
		a24 = cd, a8a = aFY, 0;
		cd = vo[0];
		a24 < g6.a2r ? cd += g6.a8T[a24] + vo[1 + a8u] : cd += g6.a8T[0] + "/i" + (1 + a8u) + (a24 - g6.a2s) + "/", (ou = new WebSocket(cd)).binaryType = "arraybuffer", ou.onopen = a8g, ou.onmessage = aFd, ou.onclose = a8l, ou.onerror = aFe
	}, this.aFa = function() {
		return ou.readyState === ou.CONNECTING
	}, this.a1w = function() {
		return ou.readyState === ou.OPEN
	}, this.a8c = function() {
		return this.aFa() || this.a1w()
	}, this.a8d = function(aFY) {
		a8a = aFY
	}, this.send = function(k3) {
		this.a1w() && ou.send(k3)
	}, this.close = function(a8i) {
		this.a8c() && (ou.close(a8i), this.lP())
	}, this.lP = function() {
		ou.onopen = aFb, ou.onmessage = aFb, ou.onclose = aFb, ou.onerror = aFb
	}
}

function wy() {
	if (fT < 3) return !1;
	if (cA.cB(3 * bv[gm[2]], 2) < bv[gm[0]]) return !1;
	if (bv[gm[0]] + bv[gm[1]] + bv[gm[2]] < qn - cA.cB(qn, 10)) return !1;
	if (8 * Math.min(Math.min(bO[gm[0]], bO[gm[1]]), bO[gm[2]]) < 5 * Math.max(Math.max(bO[gm[0]], bO[gm[1]]), bO[gm[2]])) return !1;
	if (eO) {
		if (fR.fS[gm[0]] === fR.fS[gm[1]]) return !1;
		if (fR.fS[gm[0]] === fR.fS[gm[2]]) return !1;
		if (fR.fS[gm[1]] === fR.fS[gm[2]]) return !1
	}
	return !0
}

function a92() {
	this.d6 = 501, this.om = new Uint32Array(this.d6), this.qU = new Uint32Array(this.d6), this.a05 = new Uint16Array(this.d6), this.th = 0, this.aFi = 1, this.fQ = 0, this.max = [0, 0, 0], this.bS = 0, this.aFj = ["Avg. Attack Strength",
		"Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs",
		"Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses"
	], this.b = function() {
		this.th = 0, this.aFi = 1, this.fQ = 0, this.aFk(), this.aFl()
	}, this.kG = function(player, e0) {
		player === bN && (this.bS[0] += e0, this.bS[1]++, this.bS[12] += eK.aX[1], this.bS[13] += eK.aX[0])
	}, this.jk = function(player, jK) {
		donationsTracker.logDonation(player, jK, eK.aX[0]);
		player === bN && (g2.jk(eK.aX[0], eK.aX[1], jK), this.bS[12] += eK.aX[1], this.bS[16] += eK.aX[0]), jK === bN && (g2.uj(eK.aX[0], player), this.bS[10] += eK.aX[0])
	}, this.fA = function() {
		0 < this.fQ-- || this.aFm()
	}, this.aFm = function() {
		0 !== dw[bN] && (this.om[this.th] = bv[bN], this.qU[this.th] = bO[bN], this.a05[this.th] = bP.a06(bN), this.aFn(this.th), this.th++, this.th === this.d6 && this.aFo(), this.fQ = this.aFi - 1, nR.cg())
	}, this.aFo = function() {
		this.aFk(), this.aFn(0), this.th = 1 + bJ(this.d6, 2);
		for (var aE = 1; aE < this.th; aE++) this.om[aE] = this.om[2 * aE], this.qU[aE] = this.qU[2 * aE], this.a05[aE] = this.a05[2 * aE], this.aFn(aE);
		this.aFi *= 2
	}, this.aFk = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.aFl = function() {
		this.bS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.aFn = function(aE) {
		this.max[0] = this.om[aE] > this.max[0] ? this.om[aE] : this.max[0], this.max[1] = this.qU[aE] > this.max[1] ? this.qU[aE] : this.max[1], this.max[2] = this.a05[aE] > this.max[2] ? this.a05[aE] : this.max[2]
	}
}

function a93() {
	this.cl = 0, this.eu = 0, this.nY = 0, this.nZ = 0, this.a0w = 0, this.a0x = 0, this.uz = 0, this.v0 = 0, this.a3q = 0, this.lO = 0, this.aFp = 0, this.aFq = 0, this.wX = 0, this.cd = 0, this.tR = ["Territory", "Balance", "Interest", "Numbers"],
		this.pb = !1, this.aFr = -1, this.aFs = !1, this.aFt = [0, 0], this.b = function() {
			this.pb = !1, this.aFr = -1, this.aFs = !1, this.resize()
		}, this.resize = function() {
			this.cl = a1 < 1.369 * a2 ? a1 : 1.369 * a2;
			var be = a0 && a1 < a2 ? 1 : a0 ? .8 : a1 < a2 ? .65 : .59;
			this.cl = Math.floor(be * this.cl), this.cl -= a0 && a1 < a2 ? 2 * kp + 2 : 0, this.eu = Math.floor(this.cl / 1.369), this.wX = Math.floor(this.eu / 150), this.wX = Math.max(this.wX, 1.5), this.nY = Math.floor(1 + .02 * this.cl), this
				.nZ = Math.floor(1 + .04 * this.cl), this.uz = this.nZ, this.v0 = Math.floor(1 + .075 * this.cl), this.lO = Math.floor(1 + .1125 * this.cl), this.aFp = Math.floor(this.cl * (a0 ? .03 : .029)), this.aFp = Math.max(this.aFp, 4), this
				.aFq = Math.floor(.035 * this.cl), this.aFq = Math.max(this.aFq, 4), this.a3q = this.eu - 2 * this.uz - this.v0 - this.lO, this.pb && this.aFu()
		}, this.cq = function(cr, cs) {
			var mq, mp;
			return !!this.pb && (mp = cr, mq = cs, cr -= bJ(hG - this.cl, 2), cs -= bJ(cu - this.eu, 2), cr < 0 || cs < 0 || cr >= this.cl || cs >= this.eu || cr >= this.cl - this.lO && cs < this.lO ? 1 < cI.cq(mp, mq) || this.lP() : cs < this.lO ||
				(cs < this.eu - this.v0 ? (this.aFs = !0, this.aFr = (cr - 2 * this.nY - this.a0w) / this.a0x, 3 !== this.cd && (aL.co = !0)) : (mp = (mp = Math.floor(cr / (this.cl / this.tR.length))) < 0 ? 0 : mp >= this.tR.length ? this.tR
					.length - 1 : mp) !== this.cd && (this.cd = mp, this.aFu(), aL.co = !0)), !0)
		}, this.py = function() {
			var aFv = Math.floor((this.aFt[0] + e1) / e2),
				aFw = Math.floor((this.aFt[1] + e3) / e2);
			aFv < 1 || aFw < 1 || aFv >= az.b0 - 1 || aFw >= az.b1 - 1 || console.log(aFv + " " + aFw)
		}, this.p8 = function(cr, cs) {
			return this.aFt[0] = cr, this.aFt[1] = cs, !(!this.pb || !this.aFs || (cr -= bJ(hG - this.cl, 2), cs = this.aFr, this.aFr = (cr - 2 * this.nY - this.a0w) / this.a0x, (0 <= this.aFr && this.aFr <= 1 || 0 <= cs && cs <= 1) && (aL.co = !0),
				0))
		}, this.pf = function() {
			this.aFs && (this.aFs = !1)
		}, this.pu = function() {
			this.pb ? this.lP() : this.show()
		}, this.show = function() {
			bR.th < 2 || (this.pb = !0, this.aFu())
		}, this.lP = function() {
			this.pb = !1, this.aFr = -1, aL.co = !0
		}, this.aFu = function() {
			this.cd < 2 ? this.a0w = cm.measureText(gM.hP(bR.max[this.cd]), this.aFp + cf) : 2 === this.cd && (this.a0w = cm.measureText(g4.um(6, 2), this.aFp + cf)), this.a0x = this.cl - 2 * this.nY - this.a0w - this.nZ
		}, this.cg = function() {
			this.pb && this.aFu()
		}, this.cy = function() {
			this.pb && this.v4()
		}, this.v4 = function() {
			var h8 = bJ(hG - this.cl, 2),
				h9 = bJ(cu - this.eu, 2);
			cz.setTransform(1, 0, 0, 1, h8, h9), cz.fillStyle = d2.iM, cz.fillRect(0, this.lO, this.cl, this.eu - this.lO), this.aFx(), this.aFy(), cz.strokeRect(0, 0, this.cl, this.eu), cz.textAlign = vj, cz.font = this.aFp + cf, 0 === this.cd ?
				this.aFz(bR.om, h8, h9) : 1 === this.cd ? this.aFz(bR.qU, h8, h9) : 2 === this.cd ? this.aG0(h8, h9) : 3 === this.cd && (this.aG1(h8, h9), this.aG2(h8, h9)), cI.tj(Math.floor(h8 + this.cl - .725 * this.lO), Math.floor(h9 + .275 * this
					.lO), Math.floor(.45 * this.lO)), cz.setTransform(1, 0, 0, 1, 0, 0)
		}, this.aFx = function() {
			var aE, a3;
			for (cz.lineWidth = this.wX, cz.textBaseline = d0, cz.textAlign = d1, cz.strokeStyle = d2.d3, cz.font = ce + this.aFq + cf, a3 = this.cl / this.tR.length, cz.fillStyle = d2.id, cz.fillRect(this.cd * a3, this.eu - this.v0, a3, this.v0), cz
				.fillStyle = d2.d3, cz.fillRect(0, this.eu - this.v0 - .5 * this.wX, this.cl, this.wX), aE = 1; aE <= 3; aE++) cz.fillRect(aE * a3, this.eu - this.v0, this.wX, this.v0);
			for (aE = this.tR.length - 1; 0 <= aE; aE--) cz.fillText(this.tR[aE], (aE + .5) * a3, this.eu - .46 * this.v0)
		}, this.aFy = function() {
			cz.fillStyle = d2.iu, cz.fillRect(0, 0, this.cl, this.lO), cz.fillStyle = d2.d3, cz.fillRect(0, this.lO - .5 * this.wX, this.cl, this.wX), cz.font = ce + Math.floor(.39 * this.lO) + cf, cz.fillText("Statistics", Math.floor(this.cl / 2),
				Math.floor(.55 * this.lO))
		}, this.aFz = function(ad, h8, h9) {
			var m2 = bR.max[this.cd],
				cZ = (cz.setTransform(1, 0, 0, 1, h8 + 2 * this.nY + this.a0w, h9 + this.uz + this.lO), cz.lineWidth = 2, this.a3q / Math.sqrt(m2));
			cz.beginPath(), cz.moveTo(this.a0x, this.a3q - cZ * Math.sqrt(ad[bR.th - 1]));
			for (var aE = bR.th - 2; 0 <= aE; aE--) cz.lineTo(aE * this.a0x / (bR.th - 1), this.a3q - cZ * Math.sqrt(ad[aE]));
			cz.stroke();
			h8 = this.tj(ad, cZ, .5);
			h8 < .95 && cz.fillText(gM.hP(m2), -this.nY, 0), .05 < Math.abs(h8 - .5) && cz.fillText(gM.hP(Math.floor(m2 / 4)), -this.nY, Math.floor(this.a3q / 2)), .05 < h8 && cz.fillText("0", -this.nY, this.a3q)
		}, this.aG0 = function(h8, h9) {
			cz.setTransform(1, 0, 0, 1, h8 + 2 * this.nY + this.a0w, h9 + this.uz + this.lO), cz.lineWidth = 2;
			var cZ = this.a3q / Math.max(bR.max[this.cd], 1);
			cz.beginPath(), cz.moveTo(this.a0x, this.a3q - cZ * bR.a05[bR.th - 1]);
			for (var aE = bR.th - 2; 0 <= aE; aE--) cz.lineTo(aE * this.a0x / (bR.th - 1), this.a3q - cZ * bR.a05[aE]);
			cz.stroke();
			h8 = this.tj(bR.a05, cZ, 1), h9 = bR.max[this.cd] / 100;
			h8 < .95 && cz.fillText(g4.um(h9, 2), -this.nY, 0), .05 < Math.abs(h8 - .5) && cz.fillText(g4.um(h9 / 2, 2), -this.nY, Math.floor(this.a3q / 2)), .05 < h8 && cz.fillText(g4.um(0, 2), -this.nY, this.a3q)
		}, this.aG1 = function(h8, h9) {
			cz.setTransform(1, 0, 0, 1, h8 + .34 * this.cl, h9 + 2 * this.uz + this.lO), cz.textAlign = vj;
			for (var zV = this.eu - 4 * this.uz - this.v0 - this.lO, aE = 7; 0 <= aE; aE--) cz.fillText(bR.aFj[aE], 0, aE * zV / 7);
			cz.setTransform(1, 0, 0, 1, h8 + .39 * this.cl, h9 + 2 * this.uz + this.lO), cz.textAlign = uH;
			h8 = bR.bS[1];
			for (cz.fillText(g4.um(bR.bS[0] / (10 * (h8 < 1 ? 1 : h8)), 1), 0, 0), aE = 6; 1 <= aE; aE--) cz.fillText(bR.bS[aE].toString(), 0, aE * zV / 7);
			cz.fillText(g4.um(100 * (1 - bv[bN] / bR.bS[7]), 0), 0, zV)
		}, this.aG2 = function(h8, h9) {
			cz.setTransform(1, 0, 0, 1, h8 + .79 * this.cl, h9 + 2 * this.uz + this.lO), cz.textAlign = vj;
			var aE, zV = this.eu - 4 * this.uz - this.v0 - this.lO;
			for (cz.fillStyle = d2.iY, aE = 2; 0 <= aE; aE--) cz.fillText(bR.aFj[aE + 8], 0, aE * zV / 9);
			for (cz.fillStyle = d2.iX, cz.fillText(bR.aFj[11], 0, 3 * zV / 9), cz.fillStyle = d2.im, aE = 8; 4 <= aE; aE--) cz.fillText(bR.aFj[aE + 8], 0, aE * zV / 9);
			cz.fillStyle = d2.il, cz.fillText(bR.aFj[17], 0, 9 * zV / 9), cz.fillStyle = d2.iY;
			var uP = gM.hP(bR.bS[8] + bR.bS[9] + bR.bS[10] + bR.bS[11]),
				aG3 = cz.measureText(uP).width,
				h8 = (cz.setTransform(1, 0, 0, 1, h8 + .83 * this.cl + aG3, h9 + 2 * this.uz + this.lO), cz.fillText(gM.hP(bR.bS[8]), 0, 0), cz.fillText(gM.hP(bR.bS[9]), 0, zV / 9), cz.fillText(gM.hP(bR.bS[10]), 0, 2 * zV / 9), cz.fillStyle = d2.iX,
					cz.fillText(uP, 0, 3 * zV / 9), cz.fillStyle = d2.im, bR.bS[13] - b5.a6l(bN)),
				aG3 = (cz.fillText(gM.hP(bR.bS[12]), 0, 4 * zV / 9), cz.fillText(gM.hP(h8), 0, 5 * zV / 9), cz.fillText(gM.hP(bR.bS[14]), 0, 6 * zV / 9), cz.fillText(gM.hP(bR.bS[15]), 0, 7 * zV / 9), cz.fillText(gM.hP(bR.bS[16]), 0, 8 * zV / 9), bR
					.bS[12] + h8 + bR.bS[14] + bR.bS[15] + bR.bS[16] + bR.bS[17]);
			cz.fillStyle = d2.il, cz.fillText(gM.hP(aG3), 0, zV), cz.fillStyle = d2.d3
		}, this.tj = function(ad, cZ, yD) {
			var aE, lk, ae;
			return this.aFr < 0 || 1 < this.aFr ? .25 : (aE = this.aFr * (bR.th - 1), ae = ad[lk = Math.floor(aE)], ae += (aE - lk) * (ad[lk < bR.th - 1 ? lk + 1 : lk] - ae), cz.strokeStyle = d2.iR, .04 < this.aFr && this.aG6(0, this.a3q - cZ * Math
					.pow(ae, yD), aE * this.a0x / (bR.th - 1), this.a3q - cZ * Math.pow(ae, yD)), .04 < ae / bR.max[this.cd] && this.aG6(aE * this.a0x / (bR.th - 1), this.a3q, aE * this.a0x / (bR.th - 1), this.a3q - cZ * Math.pow(ae, yD)), cz
				.fillStyle = d2.ip, cz.beginPath(), cz.arc(aE * this.a0x / (bR.th - 1), this.a3q - cZ * Math.pow(ae, yD), Math.max(2, .014 * this.eu), 0, 2 * Math.PI), cz.fill(), ad = this.aFr * aL.a07, ad = 0 === dw[bN] ? Math.floor(ad * gU
				.a0E) : Math.floor(ad * aL.fP()), cz.fillStyle = d2.d3, cz.fillText(1 === yD ? g4.um(ae / 100, 2) : gM.hP(Math.floor(ae)), -this.nY, this.a3q - cZ * Math.pow(ae, yD)), cz.textAlign = d1, cz.fillText(g4.yp(ad), aE * this.a0x / (bR
					.th - 1), this.a3q + this.aFp - (a0 ? 2 : 0) - this.wX), cz.textAlign = vj, cZ * Math.pow(ae, yD) / this.a3q)
		}, this.aG6 = function(hD, hE, hF, hH) {
			cz.beginPath(), cz.moveTo(hD, hE), cz.lineTo(hF, hH), cz.stroke()
		}
}

function rY() {
	this.aG7 = "https://", this.aG8 = this.aG7 + "territorial.io/", this.aBT = this.aG8 + "changelog", this.aBU = this.aG8 + "terms", this.v3 = this.aG8 + "cookie_policy", this.a8y = this.aG8 + "privacy_policy", this.aBQ = this.aG8 + "tutorial", this
		.aBR = this.aG8 + "players", this.aBS = this.aG8 + "clans", this.a1E = this.aG7 + "play.google.com/store/apps/details?id=territorial.io", this.a1F = this.aG7 + "apps.apple.com/app/id1581110913", this.a1G = this.aG7 +
		"www.youtube.com/watch?v=toZTQ8aRdFc", this.a1H = this.aG7 + "discord.gg/pthqvpTXmh", this.a1I = this.aG7 + "www.instagram.com/davidtschacher/"
}

function sY() {
	this.gG = new aG9, this.nO = new aGA, this.b = function() {
		this.gG.b()
	}, this.fA = function() {
		0 !== this.gG.v6 && this.gG.v6--
	}
}

function aGA() {
	this.cy = function() {
		if (0 !== gK.gG.v6 && (cz.globalAlpha = Math.min(gK.gG.v6 / 580, 1), cz.drawImage(gK.gG.aGD, 1 + hq.hI(), 1 + hq.cx()), cz.globalAlpha = 1, hm)) {
			var aE, hD = e1 / e2,
				hE = e3 / e2,
				hF = (hG + e1) / e2,
				hH = (cu + e3) / e2,
				bd = gK.gG.aGE * e2,
				aGF = gK.gG.aGF;
			for (aE = dv - 1; 0 <= aE; aE--) ! function(aE, bd, hD, hE, hF, hH, aGF) {
				0 === dw[aE] || 0 === bv[aE] || (hF = hG * ((ey[aE] + ex[aE] + 1) / 2 - hD) / (hF - hD) - .5 * bd, hD = cu * ((f1[aE] + f0[aE] + 1) / 2 - hE) / (hH - hE) - .5 * bd, hG < hF) || cu < hD || hF < -bd || hD < -bd || (cz
					.setTransform(e2, 0, 0, e2, hF, hD), cz.drawImage(aGF[eO ? fR.fS[aE] : 1], 0, 0))
			}(aE, bd, hD, hE, hF, hH, aGF);
			cz.setTransform(e2, 0, 0, e2, 0, 0)
		}
	}
}

function aG9() {
	this.aGE = 28, this.v6 = 0, this.aGD = null;
	var aGH = this.aGF = null;

	function aGK(d5, aGM) {
		var h8, h9, dW, dm, so = cK.iG.m8(d5, d5),
			dD = cK.iG.getContext(so, !0),
			d9 = cK.iG.getImageData(dD, d5, d5),
			mK = d9.data,
			m2 = (d5 >> 1) - .5,
			aGN = .5 + m2;
		for (aGN *= aGN, h9 = 0; h9 < d5; h9++)
			for (h8 = 0; h8 < d5; h8++) dm = (dm = h8 - m2) * dm + (dm = h9 - m2) * dm, mK[dW = 4 * (h9 * d5 + h8)] = aGM[0], mK[1 + dW] = aGM[1], mK[2 + dW] = aGM[2], mK[3 + dW] = (aGN - dm) * aGM[3] / aGN;
		return dD.putImageData(d9, 0, 0), so
	}

	function aFX(aE, dD, so, d5) {
		var h8;
		0 !== dw[aE] && 0 !== bv[aE] && (h8 = ey[aE] + ex[aE] + 1 - d5 - 2 >> 1, d5 = f1[aE] + f0[aE] + 1 - d5 - 2 >> 1, dD.drawImage(so[eO ? fR.fS[aE] : aE < dv ? 1 : 0], h8, d5))
	}
	this.b = function() {
		var tO;
		this.v6 = 700,
			function(tO) {
				var aE, d5 = tO.aGE;
				if (tO.aGF = [], aGH = [], eO)
					for (aE = 0; aE <= qq; aE++) tO.aGF.push(aGK(d5, fR.aGL[fR.ob[aE]])), aGH.push(aGK(d5 >> 1, fR.aGL[fR.ob[aE]]));
				else tO.aGF.push(aGK(d5, fR.aGL[0])), tO.aGF.push(aGK(d5, fR.aGL[4])), aGH.push(aGK(d5 >> 1, fR.aGL[0]))
			}(this),
			function(tO, aGO) {
				var aE, aGD = tO.aGD,
					dD = cK.iG.getContext(aGD, !0),
					bU = bZ,
					d5 = tO.aGE >> 1;
				dD.imageSmoothingEnabled = !1, dD.setTransform(1, 0, 0, 1, 0, 0), aGO && dD.clearRect(0, 0, aGD.width, aGD.height);
				for (aE = dv; aE < bU; aE++) aFX(aE, dD, aGH, d5)
			}(this, null !== (tO = this).aGD && tO.aGD.width === az.b0 - 2 && tO.aGD.height === az.b1 - 2 || (tO.aGD = cK.iG.m8(az.b0 - 2, az.b1 - 2), !1))
	}, this.qk = function() {
		for (var bU = dv, d5 = this.aGE, aGF = this.aGF, dD = cK.iG.getContext(this.aGD, !0), aE = 0; aE < bU; aE++) aFX(aE, dD, aGF, d5)
	}
}

function sZ() {
	this.aGP = -1, this.b = function() {
		this.aGP = -1
	}, this.fA = function() {
		-1 !== this.aGP && g7.oA.oI(this.aGP)
	}, this.je = function(player) {
		return !!cI.tg(player) && (1 === fT ? (this.aGP = player, fs && hm && kB.fA()) : (g2.oG(player, player === bN ? 21 : 22), 8 === fq ? this.aGP = 1 - player : fs ? (a5j(player), a8n(), hm && kB.fA()) : this.aGQ(player)), !0)
	}, this.k7 = function(player) {
		1 === gb && 0 !== dw[player] && 2 !== dx[player] && (8 === fq ? this.aGP = 1 - player : this.aGQ(player)), g2.oG(player, 4)
	}, this.aGQ = function(player) {
		hm ? (a5j(player), a8n()) : gE.a8P(player)
	}
}

function a95() {
	this.a3P = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.zU = [d2
		.d3, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", d2.d3, "rgb(170,170,170)"
	], this.aGR = [d2.d3, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", d2.d3, d2.hK], this.aGS = [d2.hK, d2.d3, d2.d3, d2.d3, d2.hK, d2.hK, d2.hK, d2.hK, d2.d3];
	var aGT = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aGU = (this.a7u = ["rgba(" + aGT[0] + ",", "rgba(" + aGT[1] + ",", "rgba(" + aGT[2] + ",", "rgba(" + aGT[3] + ",", "rgba(" + aGT[4] + ",", "rgba(" + aGT[5] + ",", "rgba(" + aGT[6] + ",", "rgba(" + aGT[7] + ",", "rgba(" + aGT[8] + ",",
			"rgba(" + aGT[9] + ","
		], this.a7v = ["rgb(" + aGT[0] + ")", "rgb(" + aGT[1] + ")", "rgb(" + aGT[2] + ")", "rgb(" + aGT[3] + ")", "rgb(" + aGT[4] + ")", "rgb(" + aGT[5] + ")", "rgb(" + aGT[6] + ")", "rgb(" + aGT[7] + ")", "rgb(" + aGT[8] + ")", "rgb(" + aGT[
			9] + ")"
		], this.ca = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.aGL = [
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
		aGV = (this.ob = [0, 1, 2, 3, 4, 5, 6, 7, 8], 7),
		m1 = "[",
		m3 = "]";
	this.fS = new Uint8Array(bZ), this.ok = null, this.ol = null, this.b = function(nc) {
		this.fS.fill(0), this.aGW(), eO && (fm.fn && fm.fo.a6T ? this.a56() : 9 === fq ? this.aGX() : this.fA(nc))
	}, this.a56 = function() {
		var aE, bU = mr;
		for (this.ob = [0, 1, 2, 3, 4, 5, 6, 7, 8], aE = 0; aE < bU; aE++) this.fS[aE] = fm.fo.a6T[aE]
	}, this.aGW = function() {
		for (var aE = this.ob.length - 1; 0 <= aE; aE--) this.ob[aE] = aE;
		this.ok = [], this.ol = []
	}, this.aGX = function() {
		for (var aE = dv + fw.a8G - 1; 0 <= aE; aE--) this.fS[aE] = 1;
		for (aE = dv + fw.a8G; aE < bZ; aE++) this.fS[aE] = 2;
		this.ob[1] = 7, this.ob[2] = 8
	}, this.fA = function(nc) {
		var dQ = new Uint8Array(dv),
			dR = new Uint8Array(dv),
			aGY = new Uint16Array(8),
			aGZ = new Uint16Array(this.ob.length);
		this.aGa(nc, dQ, dR, aGY), this.a54(aGY), fs || this.aGb(aGZ, dQ, dR), this.aGc(dQ, dR, aGZ), fs ? this.aGd() : this.aGe()
	}, this.aGa = function(nc, dQ, dR, aGf) {
		for (var em, lk, aGg, bU = this.ob.length - 1, ad = new Uint16Array(bU), aE = dv - 1; 0 <= aE; aE--) {
			for (em = bU; 1 <= em; em--) ad[em - 1] = Math.abs(4 * nc[aE].a44[0] - aGU[em][0]) + Math.abs(4 * nc[aE].a44[1] - aGU[em][1]) + Math.abs(4 * nc[aE].a44[2] - aGU[em][2]);
			for (aGg = 768, em = bU - 1; 0 <= em; em--) ad[lk = (em + aE) % bU] < aGg && (aGg = ad[lk], dQ[aE] = lk);
			for (aGf[dQ[aE]] += 4, aGg = 768, em = bU - 1; 0 <= em; em--) ad[lk = (em + aE) % bU] < aGg && lk !== dQ[aE] && (aGg = ad[lk], dR[aE] = lk);
			aGf[dR[aE]]++
		}
	}, this.a54 = function(aGf) {
		for (var em, sm, bU = this.ob.length - 1, aE = bU; 0 <= aE; aE--) this.ob[aE] = aE;
		for (aE = bU - 1; 0 <= aE; aE--) aGf[aE]++;
		for (aE = 1; aE <= bU; aE++) {
			for (sm = 0, em = 1; em < bU; em++) aGf[em] > aGf[sm] && (sm = em);
			aGf[sm] = 0, this.ob[aE] = sm + 1
		}
	}, this.aGb = function(aGZ, dQ, dR) {
		var aE, em, aGh, fQ, be, lk, hz, qH, aGi = this.ob.length - 1,
			aGj = new Uint16Array(aGi),
			aGk = [];
		loop: for (aE = dv - 1; 0 <= aE; aE--)
			if (null !== (aGh = function(aE) {
					var aES, aEG;
					return (aES = uw[aE].indexOf(m1)) < 0 || !(1 < (aEG = uw[aE].indexOf(m3)) - aES && aEG - aES <= aGV + 1) ? null : uw[aE].substring(aES + 1, aEG).toUpperCase().trim()
				}(aE))) {
				for (em = this.ok.length - 1; 0 <= em; em--)
					if (aGh === this.ok[em]) {
						this.ol[em].push(aE);
						continue loop
					} this.ok.push(aGh), aGk.push(!1), this.ol.push([]), this.ol[this.ok.length - 1].push(aE)
			}
		for (em = this.ok.length - 1; 0 <= em; em--) {
			for (be = -1, fQ = this.ok.length - 1; 0 <= fQ; fQ--) !aGk[fQ] && (-1 === be || this.ol[fQ].length > this.ol[be].length) && (be = fQ);
			for (fQ = aGi - 1; 0 <= fQ; fQ--) aGj[fQ] = 1;
			for (fQ = this.ol[be].length - 1; 0 <= fQ; fQ--) aGj[dQ[this.ol[be][fQ]]] += 3, aGj[dR[this.ol[be][fQ]]]++;
			for (aE = aGi - 1; 0 <= aE; aE--) {
				for (lk = be % aGi, fQ = aGi - 1; 0 <= fQ; fQ--) aGj[fQ] > aGj[lk] && (lk = fQ);
				for (hz = -1, fQ = qq; 0 < fQ; fQ--)
					if (this.ob[fQ] === lk + 1) {
						hz = fQ;
						break
					} if (aGj[lk] = 0, -1 !== hz) {
					for (qH = 0, fQ = qq; 0 < fQ; fQ--) aGZ[hz] > aGZ[fQ] && qH++;
					if (qH !== qq - 1) {
						for (fQ = this.ol[be].length - 1; 0 <= fQ; fQ--) aGZ[hz]++, this.fS[this.ol[be][fQ]] = hz;
						break
					}
				}
			}
			aGk[be] = !0
		}
	}, this.aGc = function(dQ, dR, aGZ) {
		for (var aE, dl, bU = this.ob.length - 1, border = bJ(dv, qq), aGm = (0 < dv % qq && border++, new Uint8Array(1 + bU)), em = bU; 1 <= em; em--) aGm[this.ob[em]] = em;
		for (aE = 0; aE < dv; aE++) dl = aGm[dQ[aE] + 1], 0 === this.fS[aE] && dl <= qq && aGZ[dl] < border && (aGZ[dl]++, this.fS[aE] = dl);
		for (aE = 0; aE < dv; aE++) dl = aGm[dR[aE] + 1], 0 === this.fS[aE] && dl <= qq && aGZ[dl] < border && (aGZ[dl]++, this.fS[aE] = dl);
		for (em = qq; 1 <= em; em--)
			for (aE = dv - 1; 0 <= aE && !(aGZ[em] >= border); aE--) 0 === this.fS[aE] && (aGZ[em]++, this.fS[aE] = em)
	}, this.aGd = function() {
		var aE, eb, aGf = new Uint16Array(qq);
		for (aGf[qq - 1] = bZ, aE = qq - 2; 0 <= aE; aE--) aGf[aE] = ft.fu[aE].ud;
		for (aGf[0]--, eb = 0 === aGf[0] ? 1 : 0, aE = dv; aE < bZ; aE++) this.fS[aE] = eb + 1, aGf[eb]--, aGf[eb] <= 0 && eb++
	}, this.aGe = function() {
		for (var aE = dv; aE < bZ; aE++) this.fS[aE] = 1 + aE % qq
	}
}

function bw() {
	for (var h8, h9, aE = aq - 1; 0 <= aE; aE--) h8 = bJ(as[aE], 4) % az.b0, h9 = bJ(as[aE], 4 * az.b0), ey[am] = ey[am] > h8 ? h8 : ey[am], f1[am] = f1[am] > h9 ? h9 : f1[am], ex[am] = ex[am] < h8 ? h8 : ex[am], f0[am] = f0[am] < h9 ? h9 : f0[am]
}

function bA() {
	var be, bc, aE, bU = bV[am].length;
	loop: for (aE = bU - 1; 0 <= aE; aE--) {
		for (be = 3; 0 <= be; be--)
			if (bc = bV[am][aE] + av[be], bW.bh(bc) || bW.bf(bc) && bW.bg(bc) !== am) {
				bW.eY(bV[am][aE], am);
				continue loop
			} bV[am][aE] = bV[am][bU - 1], bV[am].pop(), bU--
	}
}

function bB() {
	var be, bc, aGn, aGo, bU = bn[am].length;
	loop: for (var aE = bU - 1; 0 <= aE; aE--) {
		for (aGn = aGo = !1, be = 3; 0 <= be; be--) {
			if (bc = bn[am][aE] + av[be], bW.a5G(bc, am)) continue loop;
			aGn = aGn || bW.t8(bc), aGo = aGo || bW.mU(bc)
		}
		aGn ? bo[am].push(bn[am][aE]) : aGo ? br[am].push(bn[am][aE]) : bW.nA(bn[am][aE], am), bn[am][aE] = bn[am][bU - 1], bn[am].pop(), bU--
	}
}

function bl() {
	bv[ap] -= aq
}

function bm(border) {
	for (var bU = border.length, aE = bU - 1; 0 <= aE; aE--) bW.nI(ap, border[aE]) || (border[aE] = border[bU - 1], border.pop(), bU--)
}

function bp(border) {
	for (var bU = border.length, aE = bU - 1; 0 <= aE; aE--) !bW.nI(ap, border[aE]) && bW.bX(border[aE]) && (border[aE] = border[bU - 1], border.pop(), bU--)
}

function bq(border) {
	for (var be, bc, bU = border.length, aE = bU - 1; 0 <= aE; aE--)
		for (be = 3; 0 <= be; be--)
			if (bc = border[aE] + av[be], bW.a5G(bc, ap)) {
				bn[ap].push(border[aE]), border[aE] = border[bU - 1], border.pop(), bU--;
				break
			}
}

function bs() {
	for (var be, bc, aE = aq - 1; 0 <= aE; aE--)
		for (be = 3; 0 <= be; be--) bc = as[aE] + av[be], bW.a5H(ap, bc) && bW.a5I(bc) && (bn[ap].push(bc), bW.bY(bc, ap))
}

function bt() {
	var h8, h9;
	loop: for (; f1[ap] < f0[ap];) {
		for (h8 = ex[ap]; h8 >= ey[ap]; h8--)
			if (bW.nI(ap, 4 * (f1[ap] * az.b0 + h8))) break loop;
		f1[ap]++
	}
	loop: for (; f1[ap] < f0[ap];) {
		for (h8 = ex[ap]; h8 >= ey[ap]; h8--)
			if (bW.nI(ap, 4 * (f0[ap] * az.b0 + h8))) break loop;
		f0[ap]--
	}
	loop: for (; ey[ap] < ex[ap];) {
		for (h9 = f0[ap]; h9 >= f1[ap]; h9--)
			if (bW.nI(ap, 4 * (h9 * az.b0 + ey[ap]))) break loop;
		ey[ap]++
	}
	loop: for (; ey[ap] < ex[ap];) {
		for (h9 = f0[ap]; h9 >= f1[ap]; h9--)
			if (bW.nI(ap, 4 * (h9 * az.b0 + ex[ap]))) break loop;
		ex[ap]--
	}
}

function eh(player, eU) {
	return 0 === fR.fS[player] || fR.fS[player] !== fR.fS[eU]
}

function tA(player, eU) {
	for (var lk, aGp = b5.b6(player), aE = 0; aE < aGp; aE++)
		if (0 === b5.b7(player, aE))
			if ((lk = b5.bC(player, aE)) === bZ) {
				if (eU === bZ) return !1;
				if (t9(eU)) return !0
			} else if (eU === bZ) {
		if (t9(lk)) return !0
	} else if (tE(eU, lk)) return !0;
	return !1
}

function t9(player) {
	for (var aE, bd, bU = bn[player].length, be = 3; 0 <= be; be--)
		for (bd = av[be], aE = 0; aE < bU; aE++)
			if (bW.bh(bn[player][aE] + bd)) return !0;
	return !1
}

function tE(qR, qS) {
	var aE, a3, be, bd, bc, aCd = bn[qR].length,
		aEZ = bn[qS].length;
	for (aEZ < aCd && (a3 = qR, qR = qS, qS = a3, a3 = aCd, aCd = aEZ, 0), be = 3; 0 <= be; be--)
		for (bd = av[be], aE = 0; aE < aCd; aE++)
			if (bc = bn[qR][aE] + bd, bW.bf(bc) && bW.bg(bc) === qS) return !0;
	return !1
}

function aGq() {
	this.fA = function() {
		rG.fA(), rI.fA(), q3.fA(), g6.fA(), gX.a2t(), cw.fA(), aL.co && (aL.co = !1, aT.cy())
	}
}

function aGr() {
	this.aM = aL.aM, this.cd = 0, this.aGs = 0, this.a2q = 0, this.aGt = null, this.aGu = 7, this.v7 = 0, this.b = function() {
		this.a2q = 0, this.aGt = [], this.cd = 0, this.aGs = 0
	}, this.aGv = function(k3) {
		var aE;
		if (hm) this.a08(k3);
		else if (this.aGt.push(k3), 2 === gb) {
			for (aE = 0; aE < this.aGt.length; aE++) cR.jB.fA(this.aGt[aE]);
			this.aGt = []
		}
	}, this.a08 = function(k3) {
		cR.jB.fA(k3), gR.fA(), g4.a08(this.a2q), this.a2q === qr ? (kB.fA(), this.a2q = 0, this.cd = 0, this.aGs = 0, this.aM = aL.aM) : (this.a2q++, g3.qj(), g3.ga(!0), iD.a0P())
	}, this.fA = function() {
		q3.fA(), hm ? (aL.co = g4.a08(-1) || aL.co, gc()) : (0 !== this.cd || aL.aM >= this.aM && (this.aM += aL.a07 * Math.floor(1 + (aL.aM - this.aM) / aL.a07), 2 === gb ? g1() : this.aGw(), this.cd++, 27 < aL.aM - this.v7)) && this.aGx(),
		gS(), aL.co && (aL.co = !1, nL()), this.v7 = aL.aM
	}, this.aGx = function() {
		aL.co = !0, gZ(), this.cd = 0
	}, this.aGw = function() {
		var aGy, aE;
		if (this.aGs !== 7 * this.a2q) gA(), iD.a0P();
		else {
			for (aGy = !1; this.aGz() && (aGy = !0, gA(), 0 < this.aGt.length);)
				for (aE = this.aGu - 2; 0 <= aE; aE--) gA();
			aGy ? iD.a0P() : (g1(), iD.qm())
		}
	}, this.aGz = function() {
		return 0 < this.aGt.length && (this.a2q++, cR.jB.fA(this.aGt[0]), this.aGt.shift(), !0)
	}
}

function aH0() {
	var aH1, aH2, aH3, a2q, aH4, cd = 0,
		aM = aL.aM;

	function aH7() {
		! function() {
			if (!hm) return;
			if (fs) return;
			return aH4 % 7 != 0 ? aH4++ : a2q === qr ? (aHA(), g4.a08(a2q), kB.fA()) : (aHA(), aH4++, a2q++, g3.qj(), g3.ga(!0)), 1
		}() && (aHA(), gA())
	}

	function aH8() {
		cd = 0, (hm ? (aL.co = g4.a08(a2q - (aH4 % 7 == 0 ? 0 : 1) + aH4 % 7 / 7) || aL.co, gc) : cI.cJ || !gW.tW ? gc : (aL.co = !0, gZ))()
	}

	function aHA() {
		var aE, bU, aHB = gR.k9.aC4,
			ae = gR.k9.aC5,
			ag = gR.k9.aC6,
			ai = gR.k9.aC7,
			aHC = gR.k9.aC8,
			aHD = gR.k9.aC9;
		if (aH1 >= aHD.length) g2.uN("Error: Replay file smaller than expected."), g7.oA.oI(-1);
		else if (aHD = aHD[aH1], aHC[aH1]) {
			for (bU = aH2 + aHD, aE = aH2; aE < bU; aE++) cR.jB.k6(aHB[aE], ae[aE], ag[aE], ai[aE]);
			aH2 += aHD, aH1++
		} else ++aH3 >= aHD && (aH1++, aH3 = 0)
	}
	this.aGs = 0, this.b = function() {
		aH4 = a2q = aH3 = aH2 = aH1 = 0
	}, this.fA = function() {
		var aEw;
		q3.fA(), gW.xM() < 1.7 ? 0 === cd ? aL.aM >= aM && (aEw = aL.a07 / gW.xM(), aM += aEw * Math.floor(1 + (aL.aM - aM) / aEw), 2 === gb || cI.cJ || !gW.tW ? g1() : (aH7(), iD.a0P()), cd++) : aH8() : function() {
			var aEw;
			if (aL.aM >= aM)
				if (2 === gb || cI.cJ || !gW.tW) g1(), aM = aL.aM;
				else {
					for (aEw = aL.a07 / gW.xM(), 16 < (aL.aM - aM) / aEw && (aM = aL.aM - 16 * aEw); aL.aM >= aM && 2 !== gb;) aM += aEw, aH7();
					iD.a0P()
				} aH8()
		}(), gS(), aL.co && (aL.co = !1, nL())
	}, this.oV = function() {
		aH1 !== gR.k9.aC9.length && g2.uN("Error: Replay file larger than expected.")
	}
}

function aHE() {
	var cd = 0,
		aM = aL.aM;
	this.aGs = 0, this.fA = function() {
		q3.fA(), hm ? gc() : 0 === cd ? aL.aM >= aM && (aM += aL.a07 * Math.floor(1 + (aL.aM - aM) / aL.a07), 2 === gb || cI.cJ ? g1() : (gA(), iD.a0P()), cd++) : ((cI.cJ ? gc : (aL.co = !0, gZ))(), cd = 0), gS(), aL.co && (aL.co = !1, nL())
	}
}

function a94() {
	function aHG() {
		aL.aM = performance.now(), aL.oU.fA(), window.requestAnimationFrame(aHG)
	}

	function aHH() {
		var a3 = performance.now();
		aL.aM + 1500 < a3 && (aL.aM = a3, aL.oU.fA())
	}
	this.oU = null, this.co = !1, this.aM = 0, this.aHF = -1, this.a07 = 56, this.b = function() {
		this.rE(), window.requestAnimationFrame(aHG), this.aM = performance.now()
	}, this.rA = function() {
		cH ? (this.oU = new aH0, this.oU.b()) : fs ? this.oU = new aHE : (this.oU = new aGr, this.oU.b())
	}, this.rE = function() {
		this.oU = new aGq, this.co = !0
	}, this.pz = function() {
		1 !== gb || !fs || cI.cJ || hm || cI.pu(), -1 === this.aHF && (this.aHF = setInterval(aHH, 2e3))
	}, this.q0 = function() {
		this.co = !0, -1 !== this.aHF && (clearInterval(this.aHF), this.aHF = -1)
	}, this.fA = function() {
		this.oU.aGs++
	}, this.fP = function() {
		return this.oU.aGs
	}
}

function sL() {
	var hd = 0,
		aHI = !0;

	function aHK(v) {
		8 !== aT.pp() || 2 !== dx[bN] && (0 !== dw[bN] || hm) || g2.uX(v)
	}
	this.fA = function() {
		var a3, vA;
		aL.aM > hd && (hd = aL.aM + 2500, a3 = new Date, vA = a3.getUTCSeconds(), aHI ? vA < 45 && (aHI = !1) : vA < 45 || -1 !== aL.aHF || (aHI = !0, (vA = a3.getUTCMinutes() + 1) % 15 == 0 && aHK(30 === vA ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function s9() {
	var hD, hE, hF, hH, aHL = 0,
		aHM = 0;

	function aHO() {
		return Math.pow(Math.pow(hF - hD, 2) + Math.pow(hH - hE, 2), .5)
	}

	function aHN(lk) {
		hD = lX * lk.touches[0].clientX, hE = lX * lk.touches[0].clientY, hF = lX * lk.touches[1].clientX, hH = lX * lk.touches[1].clientY
	}
	this.pC = function(lk) {
		return 1 < lk.touches.length ? (aHM = aL.aM, aHL = 3, aHN(lk), nQ.lP(), !0) : (aHL = 0, !1)
	}, this.pD = function(lk) {
		var a9m, dj, dk;
		return 0 !== gb && 1 < lk.touches.length && (aHL = Math.max(aHL - 1, 0), gT.i5() && (a9m = aHO(), aHN(lk), lk = aHO(), dj = Math.floor((hD + hF) / 2), dk = Math.floor((hE + hH) / 2), hq.xw(dj, dk, Math.max(.125, lk) / Math.max(.125,
			a9m)), aL.co = !0), !0)
	}, this.pi = function() {
		var h8, h9;
		return !!(aHL && (aHL = 0, aL.aM < aHM + 500)) && (h8 = (hD + hF) / 2, h9 = (hE + hH) / 2, nQ.pZ(h8, h9), nQ.click(h8, h9, !0) && (aL.co = !0), !0)
	}
}

function sA() {
	var d6, ed;

	function aHX(aHp, k3) {
		for (var ad = new Array(aHp), aE = 0; aE < aHp; aE++) ad[aE] = aHQ(k3, 10);
		return w.m0(ad)
	}

	function aHQ(mI, bU) {
		for (var vC = 0, aE = ed; aE < ed + bU; aE++) vC |= (mI[bJ(aE, 8)] >> 7 - aE % 8 & 1) << ed + bU - aE - 1;
		return ed += bU, vC
	}
	this.aFf = function(a24, k3) {
		var aHP;
		(ed = 0) === (d6 = k3.length) ? g6.a8j(a24, 3205): 0 === (aHP = aHQ(k3, 1)) ? function(a24, k3) {
			var aHT = aHQ(k3, 2);
			0 === aHT ? (0 === aHQ(k3, 1) ? function(a24, k3) {
				var aE;
				if (0 === a24 && 8 !== aT.pp() && !(d6 < 4)) {
					a0s.cc(0, aHX(aHQ(k3, 5), k3)), a0s.cc(1, "[" + aHX(aHQ(k3, 3), k3) + "]");
					var aHY = aHQ(k3, 12),
						aHZ = aHQ(k3, 6),
						ad = new Array(aHY);
					for (aE = 0; aE < aHY; aE++) ad[aE] = aHQ(k3, aHZ);
					pd.yN(ad)
				}
			} : function(a24, k3) {
				var aE;
				if (8 !== aT.pp())
					if (d6 < 3) g6.a8j(a24, 3208);
					else {
						var aHa, ng, a24 = aHQ(k3, 1),
							position = aHQ(k3, 16),
							vC = aHQ(k3, 4),
							ad = [];
						for (aE = 0; aE < vC; aE++) ng = aHQ(k3, 14), aHa = aHQ(k3, 5), aHa = aHX(aHa, k3), ad.push({
							name: aHa,
							ng: ng
						});
						0 === a24 ? cw.a0l(0, ad, 10, 1, .36, .55, position) : cw.a0l(1, ad, 100, 2, .47, .5, position)
					}
			})(a24, k3) : 1 === aHT ? function(a24, k3) {
				var aE, eb, a3c, ok, aHb, aHc;
				if (a24 !== g6.a2d) g6.close(a24, 3239);
				else if (6 === aT.pp() && rO.b(), 7 !== aT.pp()) g6.close(a24, 3251);
				else {
					var a3B = [0, 0, 0, 0],
						aHd = aHQ(k3, 6);
					for (aE = 0; aE < 4; aE++) a3B[aE] = aHQ(k3, aHd);
					var aHe = aHQ(k3, 4),
						aHf = [];
					for (aE = 0; aE < aHe; aE++) {
						for (aHf.push({
								id: aHQ(k3, 5),
								qv: aHQ(k3, 4),
								a3X: 1 === aHQ(k3, 1),
								me: aHQ(k3, 6),
								a3V: aHQ(k3, 14),
								a3a: aHQ(k3, aHd),
								a3b: aHQ(k3, 9) + 1,
								a2D: aHQ(k3, 10)
							}), a3c = aHQ(k3, 3), ok = new Array(a3c), eb = 0; eb < a3c; eb++) aHb = aHQ(k3, 9) + 1, aHc = aHX(aHQ(k3, 3), k3), ok[eb] = ("" === aHc ? "other: " : "[" + aHc + "]: ") + aHb;
						aHf[aE].a3c = a3c, aHf[aE].ok = ok
					}
					rO.a0t(a3B, aHf)
				}
			}(a24, k3) : 2 !== aHT && 3 !== aHT || gX.b(k3)
		}(a24, k3) : 1 === aHP && function(a24, k3) {
			var qI = aT.pp();
			8 !== qI ? 10 === qI && g6.a8j(a24, 3243) : a24 !== g6.pQ ? g6.a8j(a24, 3244) : 0 === aHQ(k3, 1) ? aL.oU.aGv(k3) : function(k3) {
				var aHl = aHQ(k3, 2);
				(0 === aHl ? function(k3) {
					var uT;
					3 !== d6 ? g6.a8j(g6.pQ, 3230) : (uT = aHQ(k3, 9), k3 = aHQ(k3, 7), 0 !== dw[uT] && 0 !== dw[bN] && (k3 %= aF.aG, g2.jX(uT, bN, k3), g3.kT(uT, 1, k3)))
				} : 1 === aHl ? function(k3) {
					2 !== d6 ? g6.a8j(g6.pQ, 3235) : (k3 = aHQ(k3, 9), 0 !== dw[k3] && 0 !== dw[bN] && gN.a8M(0, [k3], !0) && g2.jp(k3, 1))
				} : function(k3) {
					var uT;
					3 !== d6 ? g6.a8j(g6.pQ, 3236) : (uT = aHQ(k3, 9), k3 = aHQ(k3, 9), 0 !== dw[uT] && 0 !== dw[k3] && 0 !== dw[bN] && gN.a8M(1, [uT], !0) && (g3.kT(uT, 3, 96), g3.kT(k3, 4, 96), g2.uc(uT, k3)))
				})(k3)
			}(k3)
		}(a24, k3)
	}, this.a2u = function(k3) {
		ed = 1, d6 = k3.length, (2 === aHQ(k3, 2) ? function(k3) {
			ed += 20;
			for (var a45, a44, name, a2k = aHQ(k3, 9), qt = aHQ(k3, 14), qv = aHQ(k3, 4), a3X = 1 === aHQ(k3, 1), a3Y = aHQ(k3, 6), a3Z = aHQ(k3, 14), aHj = aHQ(k3, 9) + 1, nc = [], aE = 0; aE < aHj; aE++) a45 = aHQ(k3, 1), a44 = [aHQ(k3,
				6), aHQ(k3, 6), aHQ(k3, 6)], name = aHX(aHQ(k3, 5), k3), nc.push({
				name: name,
				a44: a44,
				a45: a45
			});
			aT.a2J(), az.lw(a3Y, a3Z), 1 === nc.length && ft.a3s(qv);
			qs(qt, a2k, nc, qv, a3X, !1)
		} : function(k3) {
			ed += 20;
			for (var a45, a44, ng, name, a2k = aHQ(k3, 1), qt = aHQ(k3, 14), qv = aHQ(k3, 4), a3X = 1 === aHQ(k3, 1), a3Y = aHQ(k3, 6), a3Z = aHQ(k3, 14), nc = [], aE = 0; aE < 2; aE++) a45 = aHQ(k3, 1), a44 = [aHQ(k3, 6), aHQ(k3, 6),
				aHQ(k3, 6)
			], ng = aHQ(k3, 14), name = aHX(aHQ(k3, 5), k3), nc.push({
				name: name,
				a44: a44,
				ng: ng,
				a45: a45
			});
			aT.a2J(), az.lw(a3Y, a3Z), qs(qt, a2k, nc, qv, a3X, !1)
		})(k3)
	}, this.a2o = function(k3) {
		ed = 1, d6 = k3.length;
		var aHT = aHQ(k3, 2),
			aHi = aHQ(k3, 10);
		return g6.a2d > g6.a2s && (aHi += g6.a2s), g6.a2d === aHi ? (g6.pQ = aHi, !1) : (g6.close(g6.a2d, 3247), g6.pQ = aHi, gX.a2j = aHQ(k3, 10), gX.a2k = aHQ(k3, 2 === aHT ? 9 : 1), g6.yJ(aHi, 5) && jF.a8h(), !0)
	}
}

function sV() {
	this.d6 = 0, this.cd = 0, this.k3 = null, this.b = function(k3) {
		this.cd = 0, this.k3 = k3, this.d6 = k3.length
	}, this.a2K = function() {
		this.k3 = null
	}, this.k5 = function(d6) {
		for (var aR = 0, k3 = this.k3, i5 = this.cd + d6 - 1, aE = this.cd; aE <= i5; aE++) aR |= (k3[aE >> 3] >> 7 - (7 & aE) & 1) << i5 - aE;
		return this.cd += d6, this.cd > 8 * this.d6 && console.log("error unwrapper"), aR
	}, this.aCJ = function(d6) {
		for (var ad = new Array(d6), aE = 0; aE < d6; aE++) ad[aE] = this.k5(10);
		return w.m0(ad)
	}, this.aHq = function(aCU) {
		return this.d6 === lv.aHr(aCU)
	}
}

function a91() {
	this.aDC = 0, this.aDD = 0, this.aD8 = 0, this.aD9 = 0, this.aDA = 0, this.aDB = 0, this.a0Q = [0, 0, 0, 0], this.i4 = function() {
		this.aDC = hq.hI(), this.aDD = hq.cx(), this.aD8 = -this.aDC, this.aD9 = -this.aDD, this.aDA = hG / e2, this.aDB = cu / e2, this.a0Q[0] = Math.floor(this.aD8), this.a0Q[1] = Math.floor(this.aD9), this.a0Q[2] = Math.floor(this.a0Q[0] +
			this.aDA + 1), this.a0Q[3] = Math.floor(this.a0Q[1] + this.aDB + 1), iD.a0N = !0
	}
}

function sB() {
	var wT, hd;
	this.b = function() {
		wT = 1, hd = 0
	}, this.fA = function() {
		0 < wT && (hd = 0 === hd ? aL.aM + 16 : hd, wT = (wT -= .001 * (aL.aM - hd)) < 0 ? 0 : wT, hd = aL.aM, aL.co = !0)
	}, this.cy = function() {
		0 < wT && (cz.fillStyle = "rgba(0,0,0," + wT + ")", cz.fillRect(0, 0, hG, cu))
	}
}

function sF() {
	function aHv(a9D, h8, h9, cl, eu) {
		a9D >= az.a6N || (az.me === a9D && (cz.fillStyle = d2.iv, cz.fillRect(h8, h9, cl, eu), cz.fillStyle = d2.d3), cz.strokeRect(h8, h9, cl, eu), cz.fillText(az.fo.md[a9D].name, Math.floor(h8 + .5 * cl), Math.floor(h9 + .55 * eu)))
	}
	this.pb = !1, this.a3r = [0, 0, 0, 0], this.show = function() {
		this.pb = !0, this.resize(), aL.co = !0
	}, this.resize = function() {
		var aCd = bJ(az.a6N + az.a6N % 2, 2),
			aCd = a2 - aCd * ct;
		this.a3r[2] = a0 ? Math.floor(.75 * vs) : Math.floor(.5 * vs), this.a3r[3] = Math.floor(1.25 * this.a3r[2]), this.a3r[3] > aCd && (this.a3r[3] = aCd, this.a3r[2] = Math.floor(aCd / 1.2)), this.a3r[0] = Math.floor((a1 - this.a3r[2]) / 2),
			this.a3r[1] = Math.floor((a2 - this.a3r[3]) / 2)
	}, this.p8 = function(h8, h9) {
		return !(h8 < this.a3r[0] || h9 < this.a3r[1] || h8 > this.a3r[0] + this.a3r[2] || h9 > this.a3r[1] + this.a3r[3])
	}, this.cq = function(h8, h9) {
		var uz, aCd = bJ(az.a6N + az.a6N % 2, 2);
		return aL.co = !0, h8 < this.a3r[0] || h9 < this.a3r[1] || h8 > this.a3r[0] + this.a3r[2] || h9 > this.a3r[1] + this.a3r[3] ? !(this.pb = !1) : (uz = Math.floor(.17 * this.a3r[3]), h9 < this.a3r[1] + uz ? h8 > this.a3r[0] + this.a3r[2] -
			uz && (this.pb = !1) : (h9 = (h9 = Math.floor(aCd * (h9 - this.a3r[1] - uz - .00576 * cb) / (this.a3r[3] - uz - .01152 * cb))) < 0 ? 0 : aCd - 1 < h9 ? aCd - 1 : h9, h8 > this.a3r[0] + this.a3r[2] / 2 && (h9 += aCd), h9 >= az
				.a6N || az.lw(h9, Math.floor(16384 * Math.random()))), !0)
	}, this.cy = function() {
		var aE, hE, uz = Math.floor(.17 * this.a3r[3]),
			aCd = bJ(az.a6N + az.a6N % 2, 2),
			l4 = .6 * .01152 * cb,
			v0 = (this.a3r[3] - uz - (aCd + 1) * l4) / aCd,
			nY = Math.floor((this.a3r[2] - 3 * l4) / 2);
		for (cz.lineWidth = qL, cz.textAlign = d1, cz.textBaseline = d0, cz.fillStyle = d2.iM, cz.fillRect(this.a3r[0], this.a3r[1] + uz, this.a3r[2], this.a3r[3] - uz), cz.fillStyle = d2.iv, cz.fillRect(this.a3r[0], this.a3r[1], this.a3r[2],
			uz), cz.strokeStyle = d2.d3, cz.strokeRect(this.a3r[0], this.a3r[1], this.a3r[2], this.a3r[3]), cz.fillStyle = d2.d3, cz.fillRect(this.a3r[0], this.a3r[1] + uz, this.a3r[2], 2), cz.font = ce + Math.floor(.48 * uz) + cf, cz.fillText(
				"Maps", Math.floor(this.a3r[0] + this.a3r[2] / 2), Math.floor(this.a3r[1] + .55 * uz)), cz.font = ce + Math.floor(.48 * v0) + cf, aE = aCd - 1; 0 <= aE; aE--) hE = Math.floor(this.a3r[1] + uz + l4 + aE * (v0 + l4)), aHv(aE, this
			.a3r[0] + l4, hE, nY, v0), aHv(aE + aCd, this.a3r[0] + nY + 2 * l4, hE, nY, v0);
		cI.tj(Math.floor(this.a3r[0] + this.a3r[2] - .7 * uz), Math.floor(this.a3r[1] + .3 * uz), Math.floor(.4 * uz)), cz.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function sC() {
	var ed;

	function aHy(k3) {
		var u = t(),
			aI0 = Math.floor(u / 16777216);
		aHw(k3, 24, aI0), aHw(k3, 24, u - 16777216 * aI0)
	}

	function aHz(k3) {
		aHw(k3, 14, a8r), aHw(k3, 4, m ? 2 : 12 <= q ? 1 : 0 < q ? 3 : 0), aHw(k3, 1, oz ? 1 : 0), aHw(k3, 1, p0 ? 1 : 0), aHw(k3, 5, (new Date).getHours() % 24)
	}

	function aHw(mI, bU, vC) {
		for (var em, aE = ed; aE < ed + bU; aE++) mI[em = bJ(aE, 8)] = (vC >> bU - (aE - ed + 1) & 1) << 7 - aE % 8 | mI[em];
		ed += bU
	}
	this.yM = function() {
		var k3 = new Uint8Array(3);
		aHw(k3, 1, ed = 0), aHw(k3, 3, 0), aHw(k3, 14, a8r), g6.send(0, k3)
	}, this.a22 = function(a24) {
		var ad = w.o3(rF.a43()),
			ud = ad.length,
			k3 = new Uint8Array(bJ(aCU = 135 + 10 * ud, 8) + (0 < aCU % 8 ? 1 : 0)),
			aCU = (aHw(k3, 1, ed = 0), aHw(k3, 3, 1), aHw(k3, 10, a8t), aHw(k3, 20, rR.id), aHw(k3, 10, Math.min(rR.v9, 1023)), cv.tl[2].oK.a1i());
		aHw(k3, 6, aCU[0]), aHw(k3, 6, aCU[1]), aHw(k3, 6, aCU[2]), aHy(k3), aHz(k3);
		for (var aE = 0; aE < ud; aE++) aHw(k3, 10, ad[aE]);
		g6.a2d = a24, g6.send(a24, k3)
	}, this.a0j = function(a24, id) {
		var k3 = new Uint8Array(5);
		aHw(k3, 1, ed = 0), aHw(k3, 3, 7), aHw(k3, 3, 0), aHw(k3, 14, a8r), aHw(k3, 1, id), aHw(k3, 16, Math.abs(4096 + cw.position[id] + cw.a0i[id]) % 65536), g6.send(a24, k3)
	}, this.a4U = function(a24) {
		var aE, lk;
		if (!(rF.a4J + 7e3 > aL.aM)) {
			rF.a4J = aL.aM;
			var k3 = new Uint8Array(17);
			for (aHw(k3, 1, ed = 0), aHw(k3, 3, 7), aHw(k3, 3, 2), aHy(k3), lk = u9(rF.a4I.length - 20, 0), aE = rF.a4I.length - 1; lk <= aE; aE--) aHw(k3, 4, Math.abs(rF.a4I.charCodeAt(aE) - 48) % 10);
			g6.send(a24, k3)
		}
	}, this.a8Z = function(a24, a8Y) {
		var k3 = new Uint8Array(1);
		aHw(k3, 1, ed = 0), aHw(k3, 3, 5), aHw(k3, 1, a8Y ? 1 : 0), g6.send(a24, k3)
	}, this.a3h = function(a3W) {
		var k3 = new Uint8Array(1);
		aHw(k3, 1, ed = 0), aHw(k3, 3, 2), aHw(k3, 4, a3W), g6.send(g6.a2d, k3)
	}, this.a8h = function() {
		var k3 = new Uint8Array(7);
		aHw(k3, 1, ed = 0), aHw(k3, 3, 6), aHw(k3, 8, g6.ua()), aHw(k3, 10, gX.a2j), aHw(k3, 9, gX.a2k), aHw(k3, 10, a8t), aHw(k3, 14, a8r), g6.send(g6.pQ, k3)
	}, this.jG = function(dW) {
		lv.lw(27), lv.lx(1, 1), lv.lx(4, 0), lv.lx(22, dW), g6.send(g6.pQ, lv.k3)
	}, this.jI = function(e0, eU) {
		lv.lw(25), lv.lx(1, 1), lv.lx(4, 1), lv.lx(10, e0), lv.lx(10, eU), g6.send(g6.pQ, lv.k3)
	}, this.jM = function(e0, jK) {
		lv.lw(24), lv.lx(1, 1), lv.lx(4, 2), lv.lx(10, e0), lv.lx(9, jK), g6.send(g6.pQ, lv.k3)
	}, this.jQ = function(e0, dW) {
		lv.lw(37), lv.lx(1, 1), lv.lx(4, 3), lv.lx(10, e0), lv.lx(22, dW), g6.send(g6.pQ, lv.k3)
	}, this.jU = function(jS, dW) {
		lv.lw(37), lv.lx(1, 1), lv.lx(4, 4), lv.lx(10, jS), lv.lx(22, dW), g6.send(g6.pQ, lv.k3)
	}, this.jW = function(eU) {
		lv.lw(15), lv.lx(1, 1), lv.lx(4, 5), lv.lx(10, eU), g6.send(g6.pQ, lv.k3)
	}, this.ja = function(cd) {
		lv.lw(12), lv.lx(1, 1), lv.lx(4, 6), lv.lx(7, cd), g6.send(g6.pQ, lv.k3)
	}, this.jd = function(jc) {
		lv.lw(6), lv.lx(1, 1), lv.lx(4, 7), lv.lx(1, jc), g6.send(g6.pQ, lv.k3)
	}, this.jf = function() {
		lv.lw(5), lv.lx(1, 1), lv.lx(4, 8), g6.send(g6.pQ, lv.k3)
	}, this.jx = function(a5a, jw) {
		lv.lw(29), lv.lx(1, 1), lv.lx(4, 10), lv.lx(12, a5a), lv.lx(2, 0), lv.lx(10, jw), g6.send(g6.pQ, lv.k3)
	}, this.k0 = function(a5a, mS, mT, aI1) {
		lv.lw(46), lv.lx(1, 1), lv.lx(4, 10), lv.lx(12, a5a), lv.lx(2, 1), lv.lx(9, mS), lv.lx(9, mT), lv.lx(9, aI1), g6.send(g6.pQ, lv.k3)
	}, this.k2 = function(a5a) {
		var aE, oZ = g7.g8.oZ;
		for (lv.lw(47 + 33 * oZ.length), lv.lx(1, 1), lv.lx(4, 10), lv.lx(12, a5a), lv.lx(2, 2), lv.lx(24, g7.g8.oY), lv.lx(4, oZ.length), aE = 0; aE < oZ.length; aE++) lv.lx(9, oZ[aE].player), lv.lx(24, oZ[aE].om);
		g6.send(g6.pQ, lv.k3)
	}, this.jn = function(aI2, aI3) {
		lv.lw(21), lv.lx(1, 1), lv.lx(4, 15), lv.lx(9, aI3), lv.lx(7, aI2), g6.send(g6.pQ, lv.k3)
	}, this.jq = function(uU) {
		lv.lw(14), lv.lx(1, 1), lv.lx(4, 14), lv.lx(9, uU), g6.send(g6.pQ, lv.k3)
	}, this.ju = function(aI4, target) {
		var aE, bU = aI4.length;
		for (lv.lw(14 + 9 * bU), lv.lx(1, 1), lv.lx(4, 13), lv.lx(9, target), aE = 0; aE < bU; aE++) lv.lx(9, aI4[aE]);
		g6.send(g6.pQ, lv.k3)
	}, this.a40 = function(a24) {
		var k3 = new Uint8Array(4);
		aHw(k3, 1, ed = 0), aHw(k3, 3, 3), aHz(k3), g6.send(a24, k3)
	}
}

function oy() {
	this.d6 = 0, this.cd = 0, this.k3 = null, this.b = function(k3) {
		this.cd = 0, this.k3 = k3, this.d6 = k3.length
	}, this.lw = function(aCU) {
		return this.b(new Uint8Array(this.aHr(aCU))), this.k3
	}, this.a2K = function() {
		this.k3 = null
	}, this.lx = function(d6, vC) {
		for (var k3 = this.k3, i5 = this.cd + d6 - 1, aE = this.cd; aE <= i5; aE++) k3[aE >> 3] |= (vC >> i5 - aE & 1) << 7 - (7 & aE);
		this.cd += d6, this.cd > 8 * this.d6 && console.log("error wrapper")
	}, this.aI5 = function(d6) {
		for (var k3 = this.k3, i5 = this.cd + d6, aE = this.cd; aE < i5; aE++) k3[aE >> 3] &= 255 ^ 128 >>> (7 & aE)
	}, this.aHr = function(aCU) {
		return aCU + 7 >> 3
	}, this.aI6 = function(ad, ed, i5, aI7) {
		for (var aE = ed; aE < i5; aE++) this.lx(aI7, ad[aE])
	}
}
setTimeout(aS, 25);