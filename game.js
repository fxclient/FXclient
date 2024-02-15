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
				aE))) < 6 || (h8 = Math.floor(hG * (h8 + .5 - hD) / (hF - hD)), h9 = Math.floor(cu * (h9 + .48 - hE) / (hH - hE)), cz.font = ce + cj + cf, cz.fillStyle = d2.hK, eV = b5.bD(aE, b5.hL(aE, gx[eb])), cz.fillText(hM.hN.hO ? cK
				.hP.hQ(eV) : hR[aE], h8, h9), (hC = Math.floor(.5 * cj)) < 6) || (cz.font = ce + hC + cf, cz.fillText(hM.hN.hO ? hR[aE] : cK.hP.hQ(eV), h8, h9 + Math.floor(.82 * cj))))
		}
	}
}

function hS() {
	var hT, hU, hV, hW, hX, hY, hZ, ha, hb, hc, hd, he, hf, hg = !1,
		hh = !1;

	function hi(hj) {
		he = aL.aM, hV = hW = hU = 0, hX = (hf = 33) / hj, hT = 1 / (hj / hf / 4), hY = (hG / 2 + e1) / e2, hZ = (cu / 2 + e3) / e2, ha = e2
	}

	function hz(i1) {
		Math.abs(Math.log(hd / ha)) < .125 && (hd = i1 * ha)
	}

	function hy(hD, hE, hF, hH) {
		hb = (hD + hF + 1) / 2, hc = (hE + hH + 1) / 2;
		hF = hG / (hF - hD + 1), hD = cu / (hH - hE + 1);
		hd = .9 * (hF < hD ? hF : hD)
	}
	this.hk = function() {
		return hg
	}, this.hl = function() {
		hi(1), this.hm(0, 0, az.b0 - 1, az.b1 - 1), hn || cH || this.ho(bN, 3e3, !0, .3)
	}, this.ho = function(player, hj, hp, zoom) {
		hq || hg && !hp && hh || 0 === bv[player] || (hr.hs = !1, hh = hp, hi(hj), function(player) {
			hb = (ey[player] + ex[player] + 1) / 2, hc = (f1[player] + f0[player] + 1) / 2
		}(player), function(zoom, player) {
			var dm = ex[player] - ey[player] + 1,
				player = f0[player] - f1[player] + 1,
				eb = hG / dm,
				em = cu / player,
				eb = (hd = eb < em ? eb : em, 0 !== zoom ? zoom : dm < 20 && player < 20 ? .5 : .9);
			hd *= eb, hz(7 / 8)
		}(zoom, player), hg = !0, hv.hw())
	}, this.hx = function(hj) {
		cH || hq || (hr.hs = !1, hh = !1, hi(hj), hy(0, 0, az.b0 - 1, az.b1 - 1), hz(7 / 8), hg = !0, hv.hw())
	}, this.hm = function(hD, hE, hF, hH) {
		hy(hD, hE, hF, hH), e2 = hd, hr.i2(hb, hG / 2), hr.i3(hc, cu / 2), i4.i5()
	}, this.i6 = function() {
		return !(hg && hh || (hg = !1))
	}, this.fA = function() {
		var i9, iA, be, iD;
		hg && (hU < .5 ? hW < hX && (hW += hX * hT, hV = hU) : 1 - hV < hU && (hW = (hW -= hX * hT) < hX * hT ? hX * hT : hW), he = he >= aL.aM ? aL.aM - 1 : he, be = aL.aM - he, hU = 1e3 < be || 1 < (hU += hW * be / hf) ? 1 : hU, he = aL.aM,
			be = e2, i9 = e1, iA = e3, be = (e2 = ha * Math.pow(hd / ha, hU)) / be, iD = 1 - (ha * Math.pow(hd / ha, 1 - hU) - ha) / (hd - ha), hr.i2(hY + iD * (hb - hY), hG / 2), hr.i3(hZ + iD * (hc - hZ), cu / 2), g3.zoom(be, (i9 * be -
				e1) / (1 - be), (iA * be - e3) / (1 - be)), i4.i5(), 1 <= hU && (hg = !1, iE.iF = !0), aL.co = !0)
	}
}

function iG() {
	var fQ = cK.iH;
	this.hK = fQ.iI(0, 0, 0), this.iJ = fQ.iK(0, 0, 0, .7), this.iL = fQ.iK(0, 0, 0, .5), this.iM = fQ.iK(0, 0, 0, .85), this.iN = fQ.iK(0, 0, 0, .75), this.iO = fQ.iK(0, 0, 0, .6), this.iP = fQ.iK(0, 0, 0, .35), this.d3 = fQ.iI(255, 255, 255), this
		.iQ = fQ.iK(255, 255, 255, .3), this.iR = fQ.iK(255, 255, 255, .6), this.iS = fQ.iK(255, 255, 255, .4), this.iT = fQ.iK(255, 255, 255, .25), this.iU = fQ.iK(255, 255, 255, .85), this.iV = fQ.iK(255, 255, 255, .75), this.iW = fQ.iI(128, 128,
			128), this.iX = fQ.iK(64, 64, 64, .75), this.iY = fQ.iI(30, 255, 30), this.iZ = fQ.iI(0, 200, 0), this.ia = fQ.iI(128, 255, 128), this.ib = fQ.iK(10, 65, 10, .75), this.ic = fQ.iK(0, 255, 0, .6), this.id = fQ.iK(0, 255, 0, .5), this.ie =
		fQ.iK(0, 200, 0, .5), this.ig = fQ.iK(0, 100, 0, .75), this.ih = fQ.iK(0, 60, 0, .8), this.ii = fQ.iK(0, 255, 0, .3), this.ij = fQ.iK(0, 180, 0, .6), this.ik = fQ.iI(255, 120, 120), this.il = fQ.iI(255, 160, 160), this.im = fQ.iI(255, 70,
		70), this.io = fQ.iI(230, 0, 0), this.ip = fQ.iK(220, 0, 0, .6), this.iq = fQ.iK(255, 100, 100, .8), this.ir = fQ.iK(100, 0, 0, .85), this.is = fQ.iK(60, 0, 0, .85), this.it = fQ.iK(200, 0, 0, .6), this.iu = fQ.iK(0, 60, 60, .85), this.iv =
		fQ.iK(10, 60, 60, .9), this.iw = fQ.iK(0, 96, 96, .75), this.ix = fQ.iI(160, 160, 255), this.iy = fQ.iK(0, 40, 90, .75), this.iz = fQ.iK(0, 0, 255, .6), this.j0 = fQ.iI(255, 120, 100), this.j1 = fQ.iK(255, 255, 0, .5), this.j2 = fQ.iK(255,
			255, 150, .2), this.j3 = fQ.iI(255, 255, 0), this.j4 = fQ.iI(255, 255, 200), this.j5 = fQ.iK(200, 200, 0, .6), this.j6 = fQ.iK(255, 140, 0, .75)
}

function j7() {
	this.cS = new j8, this.cL = new j9, this.jA = new jB, this.jC = new jD, this.fV = new jE
}

function j8() {
	this.jF = function(dW) {
		fs ? cR.jA.jF(bN, dW) : jG.jH(dW)
	}, this.cT = function(e0, eU) {
		g2.jI(), fs ? cR.jA.cT(bN, e0, eU) : jG.jJ(e0, eU)
	}, this.jK = function(e0, jL) {
		g2.jI(), fs ? cR.jA.jM(bN, e0, jL) : jG.jN(e0, jL)
	}, this.jO = function(e0, dW) {
		fs ? cR.jA.jO(bN, e0, dW) : eE.jP.jQ(bN, dW) && jG.jR(e0, dW)
	}, this.jS = function(jT, dW) {
		fs ? cR.jA.jS(bN, jT, dW) : eE.jP.jU(bN, jT, dW) && jG.jV(jT, dW)
	}, this.jW = function(eU) {
		fs ? cR.jA.jW(bN, eU) : jG.jX(eU)
	}, this.jY = function(jZ) {
		fs ? cR.jA.ja(bN, jZ) : jG.jb(jZ)
	}, this.jc = function(jd) {
		fs ? cR.jA.jc(bN, jd) : jG.je(jd)
	}, this.jf = function() {
		fs ? cR.jA.jf(bN) : jG.jg()
	}
}

function jE() {
	this.fW = function(player, jL, eV) {
		cK.cL.jh(player, eV, jL) && (bP.jK(player, jL), jL < dv) && ee.random() < ee.value(10) && (eP[jL] = 0)
	}, this.ji = function(player, jL, eV) {
		cK.cL.jj(eV, jL) && (cK.cL.jk(jL, eK.aX[0]), bR.jl(player, jL), g3.jm(jL, eK.aX[0]))
	}
}

function j9() {
	this.jn = function(jZ, player) {
		g2.jY(bN, player, jZ), jG.jo(jZ, player)
	}, this.jp = function(player) {
		g2.jq(player, 0), jG.jr(player)
	}, this.js = function(jt, player) {
		g2.ju(jt, player), jG.jv(jt, player)
	}, this.jw = function(jx) {
		fs || cH || jG.jy(jz(), jx)
	}, this.k0 = function() {
		fs || cH || jG.k1(jz(), gm[0], gm[1], gm[2])
	}, this.k2 = function() {
		fs || cH || jG.k3(jz())
	}
}

function jD() {
	this.fA = function(k4) {
		var id, ae, i6;
		for (k5.b(k4), k5.cd += 2, i6 = 8 * k5.d6; k5.cd + 8 <= i6;) id = k5.k6(4), ae = k5.k6(9), 0 === id ? this.k7(id, ae, k5.k6(22)) : 1 === id ? this.k7(id, ae, k5.k6(10), k5.k6(10)) : 2 === id ? this.k7(id, ae, k5.k6(10), k5.k6(9)) : 3 ===
			id || 4 === id ? this.k7(id, ae, k5.k6(10), k5.k6(22)) : 5 === id ? this.k7(id, ae, k5.k6(10)) : 6 === id ? this.k7(id, ae, k5.k6(7)) : 7 === id ? this.k7(id, ae, k5.k6(1)) : this.k7(id, ae)
	}, this.k7 = function(id, ae, ag, ai) {
		0 === id ? cR.jA.jF(ae, ag) : 1 === id ? cR.jA.cT(ae, ag, ai) : 2 === id ? cR.jA.jM(ae, ag, ai) : 3 === id ? cR.jA.jO(ae, ag, ai) : 4 === id ? cR.jA.jS(ae, ag, ai) : 5 === id ? cR.jA.jW(ae, ag) : 6 === id ? cR.jA.ja(ae, ag) : 7 === id ?
			cR.jA.jc(ae, ag) : 8 === id ? cR.jA.jf(ae) : cR.jA.k8(ae)
	}
}

function jB() {
	this.jF = function(player, dW) {
		cK.cL.cM(0) && cK.cL.cN(player) && k9.e8(dW) && (gR.kA.kB(0, player, dW), kC.eR(player, dW))
	}, this.cT = function(player, e0, eU) {
		cK.cL.cM(1) && cK.cL.cN(player) && cK.cL.kD(player, eU) && cK.cL.kE(player, e0, 12, bK) && b5.cO(player) && cK.cL.kF(player, eU) && eJ(player) && (gR.kA.kB(1, player, e0, eK.ab[0]), cK.cL.kG(player), bR.kH(player, e0), eN(player))
	}, this.jM = function(player, e0, jL) {
		cK.cL.cM(1) && cK.cL.cN(player) && eO && cK.cL.kD(player, jL) && cK.cL.kI(player, jL) && cK.cL.jh(player, cK.cL.dz(player, e0), jL) && (gR.kA.kB(2, player, e0, jL), bP.jK(player, jL))
	}, this.jO = function(player, e0, dW) {
		cK.cL.cM(1) && cK.cL.cN(player) && k9.e8(dW) && eE.gG.kJ !== eE.gG.kK && eE.gG.kL[player] !== eE.gG.kM && 0 !== bo[player].length && cK.cL.kE(player, e0, 32, 16) && eE.kN.kO(player, dW) && (gR.kA.kB(3, player, e0, dW), cK.cL.kG(player),
			eE.gG.kP(player))
	}, this.jS = function(player, jT, dW) {
		cK.cL.cM(1) && cK.cL.cN(player) && k9.e8(dW) && eE.jP.kQ(player, jT) && eE.kN.kR(dW) && (gR.kA.kB(4, player, jT, dW), cK.cL.kS(player, 8), eE.gG.jS())
	}, this.jW = function(player, eU) {
		cK.cL.cM(1) && cK.cL.cN(player) && (eU = Math.min(eU, bZ), b5.cP(player, eU)) && (gR.kA.kB(5, player, eU), b5.kT(player, eU))
	}, this.ja = function(player, jZ) {
		cK.cL.cM(2) && cK.cL.cN(player) && (jZ = Math.min(jZ, aF.aG - 1), gR.kA.kB(6, player, jZ), g3.kU(player, 0, jZ))
	}, this.jc = function(player, jd) {
		cK.cL.cM(1) && cK.cL.cN(player) && (gR.kA.kB(7, player, jd), gO.kV(player, jd))
	}, this.jf = function(player) {
		(cK.cL.cM(0) || cK.cL.cM(1)) && cK.cL.cN(player) && gQ.jf(player) && gR.kA.kB(8, player)
	}, this.k8 = function(player) {
		gQ.k8(player), gR.kA.kB(9, player)
	}
}

function kW(kX, kY, color) {
	var button = document.createElement("button");
	this.b = function(kZ) {
		button.style.position = "relative", button.ka = kX, button.style.color = d2.d3, button.style.border = "2px solid " + d2.d3, button.style.backgroundColor = color || d2.iP, button.style.cj = "inherit", button.style.kb = "break-word", button
			.kc = () => button.style.kd = "invert(0.15)", button.ke = () => button.style.kd = "invert(0)", button.kf = () => button.style.kd = "invert(0.2)", button.kg = () => button.style.kd = "invert(0.15)", button.kh = () => {
				button.style.kd = "invert(0)", kY()
			}, kZ.appendChild(button)
	}, this.ki = function() {
		button.style.width = "100%", button.style.height = "100%"
	}, this.kj = function(kk) {
		button.kl(kk)
	}
}

function km(kn, ko) {
	this.h8 = 0, this.h9 = 0, this.cl = 0, this.eu = 0, this.resize = function() {
		this.eu = Math.min(cK.iH.kp(.5) * kn[1] * cb, cu - 2 * kq), this.cl = Math.min(this.eu * (kn[0] / kn[1]), hG - 2 * kq), this.eu = kn[1] * this.cl / kn[0], this.h8 = kq + ko[0] * (hG - this.cl - 2 * kq), this.h9 = kq + ko[1] * (cu - this
			.eu - 2 * kq)
	}, this.kr = function() {
		return this.h8 + .5 * this.cl
	}
}

function ks(kX, kt, kY) {
	var ku = document.createElement("input");
	this.b = function(kZ) {
		var kw, kv = document.createElement("label");
		kv.ka = kX, kv.style.color = d2.d3, kv.style.kx = "1em", ku.type = "checkbox", ku.style.ky = "1em", ku.style.kz = "middle", ku.style.position = "relative", ku.style.bottom = "0.2em", ku.onchange = kY, kw = new l0(ku.title = kt), this
			.resize(), kv.kl(ku), kw.b(kv), kZ.appendChild(kv)
	}, this.setState = function(j) {
		ku.l1 = j
	}, this.resize = function() {
		ku.style.width = cK.iH.kp(.5) * cb * .015 + "px", ku.style.height = cK.iH.kp(.5) * cb * .015 + "px"
	}
}

function l2() {
	var l3 = document.createElement("div");
	this.b = function(kZ) {
		l3.width = "100%", l3.height = "auto", l3.style.display = "grid", l3.style.l4 = "auto", l3.style.l5 = "16px", l3.style.l6 = "100%", this.resize(), kZ.appendChild(l3)
	}, this.resize = function() {
		l3.style.l7 = "repeat(auto-fit, minmax(clamp(64px, " + 400 * cK.iH.kp(.5) + "px, 100%), auto))", l3.style.l8 = "minmax(min-content," + cK.iH.kp(.5) * cb * .045 + "px)"
	}, this.l9 = function(lA) {
		lA.b(l3)
	}
}

function lB() {
	var lC, lD, lE;
	this.b = function(title, lF, lG) {
		var lH;
		(lC = document.createElement("div")).style.position = "absolute", lC.style.top = "0", lC.style.left = "0", lC.style.width = "100vw", lC.style.height = "100vh", lC.style.lJ = "100vh", lC.style.backgroundColor = d2.iL, lC.style.lK =
			"blur(5px)", (lD = document.createElement("div")).style.width = "100%", lD.style.display = "flex", lD.style.backgroundColor = d2.iP, lD.style.lL = "2px solid " + d2.d3, (lH = document.createElement("h1")).ka = title, lH.style
			.textAlign = "center", lH.style.width = "70%", lH.style.margin = "auto", lH.style.color = d2.d3, (title = document.createElement("div")).style.right = "0", title.style.width = "30%", title.style.padding = "16px", (lE = document
				.createElement("div")).style.lM = "auto", lE.style.padding = "16px", lE.style.lN = "24px", lE.style.position = "absolute", lE.style.left = "0", lE.style.right = "0", lE.style.bottom = "0", lD.appendChild(lH), lD.appendChild(
			title), lC.appendChild(lD), lC.appendChild(lE), lF.b(title), lF.ki();
		for (var aE = 0; aE < lG.length; aE++) lG[aE].b(lE);
		this.resize()
	}, this.resize = function() {
		var lO = cK.iH.kp(.5) * cb * .045 + 32;
		lD.style.height = lO + "px", lE.style.top = 2 + lO + "px", lC.style.cj = 20 * cK.iH.kp(.5) + "px"
	}, this.show = function() {
		document.body.appendChild(lC)
	}, this.lP = function() {
		document.body.removeChild(lC)
	}
}

function lQ() {
	var lR, lS = !0;

	function ld() {
		lR.select(), document.execCommand("copy")
	}
	this.lT = !1, this.b = function() {
		(lR = document.createElement("textarea")).setAttribute("name", "replayData"), lR.setAttribute("id", "replayDataField"), lR.setAttribute("autocomplete", "off"), lR.setAttribute("placeholder", "Insert the replay link here!"), lR.style
			.position = "absolute", lR.style.resize = "none", lR.style.borderRadius = "0", lR.style.color = d2.d3, lR.style.backgroundColor = d2.iJ, lR.addEventListener("focus", function() {
				lU.lT = !0
			}), lR.addEventListener("blur", function() {
				lU.lT = !1
			})
	}, this.show = function() {
		document.body.appendChild(lR)
	}, this.lP = function() {
		document.body.removeChild(lR)
	}, this.resize = function(h8, h9, cl, eu) {
		cK.iH.lV(lR.style, h8, h9, cl, eu), lR.style.font = cK.iH.lW(Math.max(5, .1 * eu / lX), 0)
	}, this.lY = function(kX) {
		lR.value = kX
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

function l0(kX) {
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
	this.b = function(kZ) {
		le.style.position = "absolute", le.style.li = "100", le.style.backgroundColor = d2.iP, le.style.color = d2.d3, le.style.padding = "8px", le.style.borderRadius = "8px", le.style.border = "2px solid " + d2.d3, le.style.cj = "inherit", le
			.style.kb = "break-word", le.ka = kX, lf.style.kx = "1em", lf.style.ky = "1.5em", lf.style.border = "2px solid " + d2.d3, lf.style.borderRadius = "20px", lf.style.padding = "0.3em", lf.ka = "?", lf.lj = 0, lf.kc = show, lf.ke = lP, lf
			.kh = lk => {
				((lg = !lg) ? lP : show)(), lf.ll(), lk.preventDefault()
			}, lf.lm = () => {
				lg = !1, lP()
			}, kZ.appendChild(lf)
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
		k5.b(cl.k4)
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
		var aE, m1, bU, m3, m6 = k5;
		for (m7.lt(m7.lq(v)), az.b0 = cl = m6.k6(12), az.b1 = eu = m6.k6(12), lz = [-cl, -1, cl, 1], az.mG = document.createElement("canvas"), az.mG.width = az.b0, az.mG.height = az.b1, az.mC = az.mG.getContext("2d", {
				alpha: !1
			}), az.mD = az.mC.getImageData(0, 0, az.b0, az.b1), az.mH = az.mD.data, cK.mI.mJ(az.mH), bU = m6.k6(12), m1 = m6.k6(5), m3 = m9(cl * eu - 1), aE = 0; aE < bU; aE++) ! function(m2, bc, m4, m5) {
			var aE, be, m6 = k5,
				mK = az.mH,
				mL = bc,
				mM = bc,
				mN = 0,
				mO = 1 + m4,
				mP = 2 - m4;
			for (mK[bc << 2] = mO, aE = 0; aE < m2; aE++) be = m6.k6(2), bc = mQ(bc, be), mK[bc << 2] === mO ? mN % 2 == 1 && mR(mM, mN + 2 * m5 + 3, mP, m5, mK) : mK[bc << 2] = mO, mR(bc, be, mP, m5, mK), mR(mM, be, mP, m5, mK), mM = bc,
				mN = be;
			mQ(bc, 0) === mL ? (mR(bc, 0, mP, m5, mK), mR(mL, 0, mP, m5, mK)) : mQ(bc, 1) === mL && (mR(bc, 0, mP, m5, mK), mR(mL, 2, mP, m5, mK));
			0 === m2 && (mR(mL, 0, mP, m5, mK), mR(mL, 2, mP, m5, mK))
		}(m6.k6(m1), m6.k6(m3), 1 === m6.k6(1), 1 === m6.k6(1));
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
		for (var bc, n2, l5 = bJ(mh - mk, 2), n3 = mj + h9 * mh + l5, n4 = mi + h8 * mh + l5, n1 = n3 + mk - 1; n3 <= n1; n1--)
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
		if (ad = new Array(12), mk = 6, mh = 10, cl = bJ(az.b0, mh), eu = bJ(az.b1, mh), mi = bJ(az.b0 - mh * cl, 2), mj = bJ(az.b1 - mh * eu, 2), hn)
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
	nM.nN(), cz.setTransform(e2, 0, 0, e2, 0, 0), cz.imageSmoothingEnabled = e2 < 3, cz.drawImage(az.mG, hr.hI(), hr.cx()), gK.nO.cy(), cz.drawImage(nP, hr.hI(), hr.cx()), nM.cy(), cz.imageSmoothingEnabled = !1, cz.setTransform(1, 0, 0, 1, 0, 0), eE
		.nO.cy(), g3.cy(), gF.cy(), (hq ? (gP.cy(), gW) : (cz.imageSmoothingEnabled = !1, g2.cy(), gI.cy(), cU.cy(), gW.cy(), gO.cy(), g4.cy(), hr.cy(), cm.cy(), gP.cy(), gL.cy(), gM.cy(), cI.cy(), nQ.cy(), gU.cy(), nR.cy(), lU.cy(), gV)).cy()
}

function nS(nT, cl, eu) {
	nT.clearRect(0, 0, cl, eu), nT.fillStyle = d2.iN, nT.fillRect(0, 0, cl, eu)
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
		for (var m6 = k5, lu = new Uint8Array(np), aE = 0; aE < np; aE++) lu[aE] = m6.k6(6);
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
		g2.oS(!0), gI.ga(!0), g4.ga(!0), gO.ga(), gW.oT(), cH && aL.oU.oV(), aL.co = !0, iE.oW(), aJ(0)
	}
	this.oD = function() {
		oE() || (cR.cL.k0(), g2.oF(247, 0), g2.oG(0, 59), gT.hx(2700), gU.show(!1, !1, !0), oH())
	}, this.oI = function(oJ) {
		var jx = 0,
			oK = !1;
		oE() || (8 === fq ? ((oK = (jx = oJ < 0 ? bv[0] >= bv[1] ? 0 : 1 : oJ) === bN) ? g2.oG(jx, 2) : g2.oG(1 - bN, 3), oL.ne(jx), cR.cL.jw(jx)) : eO ? (oK = fR.fS[bN] === gP.oM(), 9 === fq ? (cR.cL.jw(oK ? gm[0] : 512), g2.oN(oK)) : g7.g8.fA(
			oK)) : (oK = (jx = gm[0]) === bN, g2.oO(jx), cR.cL.jw(jx)), gU.show(oK, !1), oH())
	}
}

function oC() {
	var oX;

	function os(oZ, bd) {
		for (var v = "", aE = bd; aE < oZ.length && aE < bd + 4; aE++) v += (aE === bd ? "" : "   ") + "[" + fR.ok[oZ[aE].id] + "]: " + oZ[aE].op.toFixed(Math.max(Math.floor(3 - Math.log10(oZ[aE].op)), 0));
		v.length && g2.or(0, v, 45, 0, cK.iH.iI(225, 240, 255), d2.iN, -1, !1)
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
				oK = oK ? (color = cK.iH.iI(10, 220, 10), "Congratulations! Team " + fR.ca[oa] + " won the game!") : (color = cK.iH.iI(200, 80, 80), "Our alliance was defeated! Team " + fR.ca[oa] + " won the game.");
				g2.or(0, oK, 40, 0, color, d2.iN, -1, !1)
			}(oK, oa), 0 !== (oK = this.oZ).length && (g2.or(0, "The allied clans of the winning team have earned these glorious points:", 40, 0, d2.d3, d2.iN, -1, !1), os(oK, 0), os(oK, 4)), cR.cL.k2(), gT.hx(2700)
	}, this.g9 = function() {
		2 === gb && -1 !== oX && (0 === oX ? oX = this.oZ && 0 !== this.oZ.length ? aL.aM + 8e3 : -1 : aL.aM < oX || (oX = -1, g2.or(255, "Clan rankings and results can also be accessed under:", 735, 0, d2.d3, d2.iN, -1, !1), g2.or(255,
			"territorial.io/clans", 736, 0, d2.d3, d2.iN, -1, !1), g2.or(255, "territorial.io/clan-results", 736, 0, d2.d3, d2.iN, -1, !1)))
	}
}

function ot() {
	var ou, lu;

	function ox() {
		var aE, cl = new oy;
		for (cl.lw(800), cl.lx(1, 0), cl.lx(3, 7), cl.lx(3, 1), cl.lx(2, m ? 2 : 12 <= q ? 1 : 0 < q ? 3 : 0), cl.lx(1, oz ? 1 : 0), cl.lx(1, p0 ? 1 : 0), cl.lx(1, 2 === p1 ? 1 : 0), aE = 0; aE < lu.length && !(cl.cd + 6 > 8 * cl.d6); aE++) cl.lx(6,
			lu[aE]);
		ou.send(cl.k4), ou.onopen = null
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
		0 === gb ? aT.p8(h8, h9) : nR.p8(h8, h9) || (cI.p8(h8, h9), nQ.pb() ? nQ.p8(h8, h9) : cU.pc ? cU.p8(h8, h9) && (aL.co = !0) : (gI.p8(h8, h9), hr.hs && hr.p8(h8, h9) && (aL.co = !0)))
	}

	function pA(lk) {
		pN() || (pO(lk, 1), 0 === gb ? (aT.click(-1024, -1024), pd.pe()) : (gI.pf(-1024, -1024), cI.p8(-1024, -1024), cU.pg(), hr.hs && (hr.hs = !1)))
	}

	function p9(lk) {
		pN() || (pO(lk, 1), ph(Math.floor(lX * lk.clientX), Math.floor(lX * lk.clientY), 2 === lk.button))
	}

	function click(lk) {
		pN() || pO(lk, 1)
	}

	function pE(lk) {
		p3 = aL.aM, pO(lk, 1), lk && lk.touches && 0 < lk.touches.length && 0 !== gb ? hr.hs = !1 : pU.pi() || ph(pS, pT, !1)
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
		0 === gb ? aT.click(h8, h9) : (gI.pf(h8, h9), nR.pf(), cU.pg(), hr.hs = !1, nQ.click(h8, h9, pk) && (aL.co = !0))
	}

	function pB(lk) {
		var h8, h9, deltaY;
		pN() || (pO(lk, 1), g6.pP(g6.pQ), h8 = Math.floor(lX * lk.clientX), h9 = Math.floor(lX * lk.clientY), deltaY = lk.deltaY, 1 === lk.deltaMode && (deltaY *= 16), 0 === gb ? aT.pB(h8, h9, deltaY) : gI.pB(h8, h9, deltaY) || (cU.pl(h8, h9) ? cU
			.pB(deltaY) && (aL.co = !0) : hr.pB(h8, h9, +deltaY)))
	}

	function pJ(lk) {
		pO(lk, 0)
	}

	function pO(lk, id) {
		0 === id && (pm.pb || lU.pb || pn.pb) || 1 === id && (pn.lT || lU.lT) || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aT.pp() && lk.preventDefault()
	}

	function pK(lk) {
		pN() || aL.aM < 400 || (8 !== aT.pp() && aT.pq(lk) ? aL.co = !0 : "Escape" === lk.key ? aT.aU() : "ArrowLeft" === lk.key || "a" === lk.key ? hv.pr(3) : "ArrowUp" === lk.key || "w" === lk.key ? hv.pr(0) : "ArrowRight" === lk.key || "d" === lk
			.key ? hv.pr(1) : "ArrowDown" === lk.key || "s" === lk.key ? hv.pr(2) : "h" === lk.key ? 1 <= gb && gW.ps(!hq) : " " === lk.key && gb && (pt.cG(), cI.cJ && cI.pu(), cH) && gW.pv(!1))
	}

	function pL(lk) {
		pN() || ("ArrowLeft" === lk.key || "a" === lk.key ? hv.pw(3) : "ArrowUp" === lk.key || "w" === lk.key ? hv.pw(0) : "ArrowRight" === lk.key || "d" === lk.key ? hv.pw(1) : "ArrowDown" === lk.key || "s" === lk.key ? hv.pw(2) : "1" === lk.key ?
			cU.px(.75) : "2" === lk.key ? cU.px(7 / 8) : "3" === lk.key ? cU.px(.9375) : "4" === lk.key ? cU.px(31 / 32) : "5" === lk.key ? cU.px(32 / 31) : "6" === lk.key ? cU.px(16 / 15) : "7" === lk.key ? cU.px(8 / 7) : "8" === lk.key ? cU.px(
				4 / 3) : "+" === lk.key ? 0 !== gb && hr.pB(Math.floor(hG / 2), Math.floor(cu / 2), -200) : "-" === lk.key ? 0 !== gb && hr.pB(Math.floor(hG / 2), Math.floor(cu / 2), 200) : "c" === lk.key && 0 !== gb && nR.py())
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
		return !!gW.cq(h8, h9) || !!(gI.cq(h8, h9) || hr.cq(h8, h9) || cU.cq(h8, h9) || g2.cq(h8, h9))
	}, this.q1 = pN, this.q2 = function() {
		return !p4 || 0 < p3
	}
}

function q5() {
	this.iH = new q6, this.mI = new q7, this.cL = new q8, this.hP = new q9
}

function q7() {
	this.mJ = function(ad) {
		ad.fill(0)
	}, this.qA = function(ad) {
		for (var bU = ad.length, aE = 0; aE < bU; aE++) ad[aE] = []
	}, this.qB = function(dQ, cZ) {
		for (var dR = eK.aZ, aE = 0; aE < 3; aE++) dR[aE] = cZ * dQ[aE];
		return dR
	}, this.qC = function(dQ, dR, qD) {
		for (var dU = 0, aE = 0; aE < 3; aE++) dU += Math.abs(dQ[aE] - dR[aE]);
		return qD <= dU
	}, this.qE = function(dQ, qF) {
		for (var aE = 0; aE < 3; aE++) dQ[aE] = cA.qG(dQ[aE] + qF, 0, 255);
		return dQ
	}, this.qH = function(ad, qI = 0, qJ = ad.length - 1) {
		for (var qK = 0, aE = qI; aE <= qJ; aE++) qK += ad[aE];
		return qK
	}, this.qL = function(ad, qM) {
		for (var aE, qN, bU = ad.length, qO = [], eb = bU - 1; 0 <= eb; eb--) {
			for (aE = qN = 0; aE < bU; aE++) qM(ad[aE]) < qM(ad[qN]) && (qN = aE);
			bU--, qO.push(ad[qN]), ad[qN] = ad[bU], ad.pop()
		}
		return qO
	}
}

function q6() {
	this.qP = d4(32, 32, ["a", "b", "m"], 200), this.m8 = function(cl, eu) {
		var fQ = document.createElement("canvas");
		return fQ.width = cl, fQ.height = eu, fQ
	}, this.getContext = function(dC, alpha) {
		return dC.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(nT, cl, eu) {
		return nT.getImageData(0, 0, cl, eu)
	}, this.iI = function(dF, qQ, em) {
		return "rgb(" + dF + "," + qQ + "," + em + ")"
	}, this.iK = function(dF, qQ, em, eb) {
		return "rgba(" + dF + "," + qQ + "," + em + "," + eb.toFixed(3) + ")"
	}, this.lV = function(qR, h8, h9, cl, eu) {
		var i0 = 1 / lX,
			qS = .02 * i0 * eu,
			qT = i0 * qU;
		qR.padding = qS.toFixed(2) + "px", qR.border = qT.toFixed(2) + "px solid " + d2.d3, qR.left = (i0 * h8).toFixed(2) + "px", qR.top = (i0 * h9).toFixed(2) + "px", qR.width = (i0 * cl - 2 * qS - 2 * qT).toFixed(2) + "px", qR.height = (i0 *
			eu - 2 * qS - 2 * qT).toFixed(2) + "px"
	}, this.lW = function(d6, type) {
		return d6 = d6.toFixed(2), 0 === type ? d6 + "px " + settings.fontName : 1 === type ? "bold " + d6 + "px " + settings.fontName : 2 === type ? "small-caps " + d6 + "px " + settings.fontName : "small-caps bold " + d6 + "px " + settings
			.fontName
	}, this.textAlign = function(dD, id) {
		dD.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(dD, id) {
		dD.textBaseline = 1 === id ? "middle" : "bottom"
	}, this.kp = function(aR) {
		return 1 + aR * a0
	}
}

function qV() {
	document.qW[0].qX(".closeIcon {position: absolute; width: 24px; height: 24px; top: calc(50% - 12px);}", 0), document.qW[0].qX(
		".closeIcon:before {content: ' '; position: absolute; left: 50%; top: 0; width: 2px; height: 100%; background-color: #222; transform: translateX(-50%) rotate(45deg);}", 0), document.qW[0].qX(
		".closeIcon:after {content: ' '; position: absolute; left: 50%; top: 0; width: 2px; height: 100%; background-color: #222; transform: translateX(-50%) rotate(-45deg);}", 0), this.qY = function() {
		var kk = document.createElement("div");
		return kk.qZ = "closeIcon", kk
	}
}

function q8() {
	this.cM = function(j) {
		return 0 === j ? 1 === gb && hn : 1 === j ? 1 === gb && !hn : 1 <= gb && !hn
	}, this.cN = function(player) {
		return 0 !== dw[player] && 2 !== dx[player]
	}, this.kD = function(qa, qb) {
		return qa !== qb
	}, this.jk = function(player, aR) {
		return aR = this.qc(player, aR), bO[player] += aR, aR
	}, this.qc = function(player, aR) {
		var qd = bO[player];
		return aR = Math.min(aR, bv[player] * qe - qd), aR = Math.min(aR, qf - qd), Math.max(aR, 0)
	}, this.kE = function(player, e0, qg, qh) {
		var qd = bO[player],
			e0 = cA.cB(qd * (e0 + 1), 1024),
			qg = cA.cB(qg * qd, 1024),
			e0 = Math.min(e0, qd - qg);
		return 10 === fq && (e0 = gD.qj(player, e0)), eK.aX[0] = e0, eK.aX[1] = qg, qh <= e0
	}, this.jh = function(player, jM, jL) {
		var player = bO[player],
			qi = cA.cB(64 * player, 1024);
		return jM = Math.min(jM, player - qi), qi += player = this.ql(jM), jM = this.qc(jL, jM -= player), eK.aX[0] = jM, eK.aX[1] = qi, 1 <= jM
	}, this.jj = function(jM, jL) {
		var qk = this.ql(jM);
		return jM = this.qc(jL, jM -= qk), eK.aX[0] = jM, eK.aX[1] = qk, 1 <= jM
	}, this.dz = function(player, qm) {
		return cA.cB(bO[player] * (qm + 1), 1024)
	}, this.ql = function(qn) {
		return cA.cB(Math.max(2142 - aL.fP(), 0) * qn, 2142)
	}, this.kS = function(player, qg) {
		bO[player] -= cA.cB(qg * bO[player], 1024)
	}, this.kG = function(player) {
		bO[player] -= eK.aX[0] + eK.aX[1]
	}, this.kF = function(player, eU) {
		return (eU = Math.min(eU, bZ)) < bZ && 0 === dw[eU] && (eU = bZ), (eK.ab[0] = eU) === bZ || eh(player, eU)
	}, this.kI = function(player, jL) {
		return 0 !== dw[jL] && !eh(player, jL)
	}
}

function q9() {
	this.hQ = function(aR) {
		var aE, qo, qp, qq, qr;
		if (aR < 0) return "-" + this.hQ(Math.abs(aR));
		if (aR < 1e3) return aR.toString();
		for (qo = Math.floor(Math.log(aR + .5) / Math.log(10)) + 1, qp = Math.floor((qo - 1) / 3), qr = (qq = aR.toString()).substring(qo - 3, qo), aE = 1; aE < qp; aE++) qr = qq.substring(qo - 3 * (aE + 1), qo - 3 * aE) + " " + qr;
		return qq.substring(0, qo - 3 * qp) + " " + qr
	}, this.qs = function(bc, qo) {
		return bc.toFixed(qo) + "%"
	}, this.qt = function(aR, qu = 3) {
		return aR.toFixed(Math.max(Math.floor(qu - Math.log10(aR)), 0))
	}, this.qv = function(username) {
		var qx, qw = username.indexOf("[");
		return !(qw < 0) && 1 < (qx = username.indexOf("]")) - qw && qx - qw <= 8 ? username.substring(qw + 1, qx).toUpperCase().trim() : null
	}
}

function qy() {
	this.eR = function(player, dW) {
		qz.nE(player, k9.dN(dW), k9.dP(dW)) && (aL.co = !0), fs && this.fA()
	}, this.fA = function() {
		var aE;
		for (hn = !1, aE = 0; aE < dv; aE++) 0 !== dw[aE] && 0 === bv[aE] && qz.nK(aE);
		0 !== dw[bN] ? (bR.bS[7] = bv[bN], bR.bS[8] = bO[bN], cU.l(), g4.r0(), cH || gT.hm(ey[bN] - 5, f1[bN] - 5, ex[bN] + 5, f0[bN] + 5), gV.b()) : gU.show(!1, !1, !1, !0), g2.r1(18), g3.r2(), g3.ga(!0), gK.gG.r3(), kC = null, iE.r4 = !0, iE
			.r5(), fs && aJ(1)
	}
}
var fs, cH, r6, qf, r7, bN, hq, hn, r8, eO, r9, fq, oq, kC, oL, rA, fB, bL, gC, gF, gT, qz, w, nQ, cI, g2, rZ, gM, cm, cU, hr, pd, gL, gI, g4, gU, ra, rb, aT, rc, pn, rd, ft, rY, ch, bW, r, b5, bP, g3, rO, fw, rM, re, hv, rf, jG, rg, ee, h1, nM, pU,
	gV, q3, rh, ri, gO, gX, g6, gB, hM, rj, gE, gD, gN, pj, fm, rk, rl, cR, gR, lU, cK, d2, gW, lv, rm, k5, m7, rn, pX, ro, cA, k9, eE, eK, gK, gQ, g7, az, pt, rp, aO, bZ = 512,
	mr = 512,
	qe = 150,
	gb = 0,
	n7 = 512,
	bK = 2;

function rB(rC, rD, nc, rE, rF, rG) {
	hq = !1, cH = rG, oq = rF, eO = (fq = rE) < 7 || 9 === fq, oR = dv = nc.length, fs = 1 === oR, r9 = 9 === (fq = 8 === (fq = 10 === fq && fs ? 7 : fq) && 2 !== dv ? 7 : fq) ? 2 : fq + 2, rA = dv <= 2 ? 30 : dv <= 50 ? 40 : 50, r8 = hn = !(fm.fn &&
			!fm.fo.rH) && (eO || dv < 100), kC = hn ? new qy : null, n7 = 512, mr = bZ, fs && (mr = ft.rI()), fl = mr - dv, oQ = 0, bN = rD, ee.rJ(rC), fw.b(), rK(nc), fR.b(nc), gb = 1, qf = 15e8, r7 = 1e9, bR.b(), rL(), rM.rN(), iE.b(), bP.b(),
	f6(), bW.b(nc), nM.b(), k9.b(), eE.b(), g7.b(), fB.b(), rO.lw(), rO.rP(), qz.b(), rQ(), gR.b(rC, nc, rE, rF), gP.b(), gQ.b(), gK.b(), nR.b(), rR.putImageData(rS, 0, 0), gI.b(), hr.b(), cU.b(), gW.b(), gO.b(), gL.b(), g4.b(), cI.b(), cm.b(), g2
		.b(), gM.b(), nQ.b(), gU.b(), gF.b(), bL.b(), gC.b(), ay(), b5.b(), g3.b(), gD.b(), gE.b(), gN.b(), gB.b(), aO.k(!1), 8 === fq ? (oL = new nb).b(nc) : oL = null, aL.rT(), rU(), gV.b(), aL.co = !0, cH || fs && hn || aJ(1)
}

function rU() {
	gT.hl(), 0 === dw[bN] && gU.show(!1, !0), g3.ga(!0)
}

function rV(rW) {
	lU.lP(), g6.close(g6.pQ, 3246), gb = 0, aL.rX(), aJ(0), aO.k(!0), rY.b(!rW)
}

function rq() {
	cA = new rr, ro = new rs, fB = new fa, bL = new gd, gC = new gr, gF = new gu, gT = new hS, qz = new mg, w = new ns, nQ = new rt, cI = new ru, g2 = new rv, rZ = new rw, gM = new rx, cm = new ry, cU = new rz, hr = new s0, pd = new s1, gL = new s2,
		gI = new s3, g4 = new s4, gU = new s5, ra = new s6, rb = new s7, aT = new s8, (rc = new s9).lw(), pn = new sA, rd = new sB, ft = new sC, rY = new sD, ch = new sE, bW = new sF, r = new sG, b5 = new sH, bP = new sI, g3 = new sJ, rO = new sK,
		fw = new sL, rM = new sM, re = new sN, hv = new sO, rf = new sP, jG = new sQ, rg = new sR, ee = new sS, h1 = new sT, nM = new sU, pU = new sV, gV = new sW, q3 = new sX, rh = new sY, ri = new sZ, gO = new sa, gX = new sb, g6 = new sc, gB =
		new sd, hM = new se, rj = new sf, gE = new sg, gD = new sh, gN = new si, pj = new sj, fm = new sk, rl = new sl, cR = new j7, gR = new sm, lU = new sn, cK = new q5, d2 = new iG, gW = new so, lv = new oy, (rm = new nm).b(), k5 = new sp, (m7 =
			new ln).b(), rn = new sq, pX = new p2, k9 = new dG, eE = new sr, eK = new aV, gK = new ss, gQ = new st, g7 = new o9, (az = new su).b(), pt = new cF, rp = new sv, aO = new a, rk = new sw
}

function rt() {
	var sx, h8, h9, sy, sz, t0, aM, player, t1, l5, zoom, jt, t2;

	function tI(player) {
		for (var aE = jt.length - 1; 0 <= aE; aE--)
			if (jt[aE] === player) return 1
	}

	function tG(tD) {
		var aE, bU;
		if (-1 !== tD)
			for (bU = sx.length, aE = 0; aE < bU; aE++)
				if (sx[aE].pb && sx[aE].h8 + 1 === tD % 4 && sx[aE].h9 + 1 === tD >> 2) return aE;
		return -1
	}

	function tF(cr, cs) {
		var qQ = l5 / 2;
		return cr < h8 - sy - 3 * qQ || h8 + 3 * sy + 5 * qQ < cr || cs < h9 - sy - 3 * qQ || h9 + 2 * sy + 3 * qQ < cs ? -1 : 4 * (cs < h9 - qQ ? 0 : cs < h9 + sy + qQ ? 1 : 2) + (cr < h8 - qQ ? 0 : cr < h8 + sy + qQ ? 1 : cr < h8 + 2 * sy + 3 *
			qQ ? 2 : 3)
	}
	this.t3 = function() {
		var aE, em, t6 = [d2.ij, d2.it, d2.iO, d2.j5, d2.iz];
		for (sx = new Array(8), aE = 0; aE < 8; aE++) sx[aE] = {
			id: aE,
			pb: !1,
			t7: 0,
			dC: [],
			h8: 0,
			h9: 0
		};
		for (sx[0].colors = [0, 1, 2, 3], sx[0].h8 = 0, sx[0].h9 = 0, sx[1].colors = [0, 1, 4], sx[1].h8 = 1, sx[1].h9 = 0, sx[2].colors = [0, 2], sx[2].h8 = -1, sx[2].h9 = 0, sx[3].colors = [0], sx[3].h8 = 0, sx[3].h9 = 0, sx[4].colors = [0, 2],
			sx[4].h8 = 1, sx[4].h9 = 1, sx[5].colors = [3], sx[5].h8 = 0, sx[5].h9 = -1, sx[6].id = 20, sx[6].colors = [0], sx[6].h8 = 1, sx[6].h9 = -1, sx[7].id = 21, sx[7].colors = [0], sx[7].h8 = 0, sx[7].h9 = 1, aE = 0; aE < 8; aE++)
			for (em = 0; em < sx[aE].colors.length; em++) sx[aE].dC.push(function(id, t8) {
				var d5 = ch.get(3).height,
					t9 = cK.iH.m8(d5, d5),
					dD = cK.iH.getContext(t9);
				20 === id ? dD.drawImage(ch.get(18), 0, 0) : 21 === id ? dD.drawImage(ch.tA("emojis"), -4 * d5, 0) : (function(cl, nT, tC) {
					nT.fillStyle = tC, nT.beginPath(), nT.arc(Math.floor(cl / 2), Math.floor(cl / 2), Math.floor(.47 * cl), 0, 2 * Math.PI), nT.fill()
				}(d5, dD, t8), dD.drawImage(ch.get(3), -id * d5, 0));
				return t9
			}(sx[aE].id, t6[sx[aE].colors[em]]))
	}, this.t5 = function() {
		return sx
	}, this.b = function() {
		jt = [], h8 = h9 = aM = 0, sz = t0 = -1e3, this.resize()
	}, this.resize = function() {
		sy = Math.floor((a0 ? .075 : .0468) * cb), zoom = sy / ch.get(3).height, l5 = Math.floor(sy / 3)
	}, this.pW = function(cr, cs) {
		return !!this.pb() && (aL.co = !0, !!aF.cq(cr, cs, player) || (cr = function(cr, cs) {
			var tD, aE;
			if (t0 = sz = -1e3, tD = tF(cr, cs), -1 === (tD = tG(tD))) return 0;
			if (1 === sx[tD].colors[sx[tD].t7]) return 0;
			if (5 === tD) {
				if (! function() {
						var a3 = (new Date).getTime();
						t2 + 4e3 < a3 && (jt = []);
						t2 = a3
					}(), tI(player)) return 1;
				jt.push(player), 16 < jt.length && jt.shift()
			} else if (6 === tD) {
				for (aE = jt.length - 1; 0 <= aE; aE--) 0 === dw[jt[aE]] && jt.splice(aE, 1);
				0 < jt.length && (gN.tJ(1, jt, !0) && cR.cL.js(jt, player), jt = [])
			} else if (2 === tD) cR.cS.jK(cU.cV(), player);
			else if (3 === tD) hn && cR.cS.jF(t1);
			else if (0 === tD)
				if (0 === sx[0].t7) {
					if (r8 && g4.tK() < 300) return 1;
					cR.cS.cT(cU.cV(), player)
				} else gB.tL(player, cU.cV());
			else if (1 === tD) cR.cS.jO(cU.cV(), t1);
			else {
				if (7 === tD) return aF.show(cr, cs), 2;
				if (4 !== tD) return 0;
				gN.tJ(0, [player], !0) && cR.cL.jp(player)
			}
			return 1
		}(cr, cs), this.lP(), 2 === cr && (aF.pb = !0), 0 < cr))
	}, this.pZ = function(cr, cs) {
		this.pb() || (sz = cr, t0 = cs, aM = (new Date).getTime())
	}, this.click = function(cr, cs, pk) {
		var dg = k9.e4(cr),
			dh = k9.e5(cs),
			dW = k9.e7(dg, dh),
			df = k9.e9(dW);
		return !(!k9.e6(dg, dh) || (dg = (a0 ? .025 : .0144) * cb, Math.abs(cr - sz) > dg) || Math.abs(cs - t0) > dg || performance.now() > aM + 425) && (pk ? (function(cr, cs, df) {
			bW.bX(df) || -1 === (cr = eE.jP.td(cr, cs)) ? g2.tc(df) : g2.te(cr)
		}(cr, cs, df), !1) : cI.cJ || this.pb() || !k9.dy() || cH ? (this.lP(), !1) : hn ? !!bW.bX(df) && (t1 = dW, sx[3].pb = !0, this.tO(cr, cs)) : (eE.jP.jS(dW) || eE.jP.tP(cr, cs) || (2 === gb ? bW.bf(df) && 0 < aF.tQ && (player = bW
			.bg(df), bW.tR(player)) && (sx[0].pb = !0, sx[0].t7 = 1, sx[7].pb = !0) : bW.tS(df) || (t1 = dW, eE.jP.jQ(bN, dW) && (sx[0].pb = !0, sx[0].t7 = 1, sx[1].pb = !0, sx[1].t7 = eK.aa[2] ? 0 : 2), bW.tT(df)) || (bW.bh(df) ?
			(player = bZ, tU(bN) ? (sx[0].pb = !0, sx[0].t7 = 0) : tV(bN, player) && (sx[0].pb = !0, sx[0].t7 = 3)) : (player = bW.bg(df)) === bN ? 0 !== aF.tQ && (sx[0].pb = !0, sx[0].t7 = 1, sx[7].pb = !0) : (sx[0].t7 = 1, sx[5]
				.pb = function(player) {
					return bW.tR(player) && !tI(player) && gN.tJ(1, [player], !1)
				}(player), sx[7].pb = 1 <= aF.tQ && bW.tR(player), eh(player, bN) ? (sx[4].pb = bW.tR(player) && !g3.tX(player) && gN.tJ(0, [player], !1), sx[6].pb = function(player) {
					if (0 === jt.length) return !1;
					if ((new Date).getTime() > t2 + 4e3) return !(jt = []);
					return !tI(player) && ! function(player) {
						var aE;
						if (eO)
							for (aE = jt.length - 1; 0 <= aE; aE--)
								if (!eh(player, jt[aE])) return 1;
						return
					}(player)
				}(player), tZ(bN, player) ? (sx[0].t7 = 0, sx[0].pb = !0) : tV(bN, player) && (sx[0].t7 = 3, sx[0].pb = !0), sx[0].pb = this.ta()) : (sx[2].pb = !0, sx[0].pb = !0)))), this.tO(cr, cs)))
	}, this.tO = function(cr, cs) {
		return h8 = cr - Math.floor(sy / 2), h9 = cs - Math.floor(sy / 2), !!this.pb()
	}, this.p8 = function(cr, cs) {
		return !!this.pb() && (aF.pb ? !aF.tg(cr, cs) && (aF.th(), aF.pb = !1, aL.co = !0) : function(tj, cr, cs) {
			cr = tF(cr, cs);
			if (0 <= tG(cr)) return !1;
			if ((1 === cr || 6 === cr) && 0 <= tG(2)) return !1;
			if ((6 === cr || 9 === cr) && 0 <= tG(10)) return !1;
			return tj.lP(), aL.co = !0
		}(this, cr, cs))
	}, this.lP = function() {
		for (var aE = sx.length - 1; 0 <= aE; aE--) sx[aE].pb = !1, sx[aE].t7 = 0;
		aF.pb = !1
	}, this.pb = function() {
		return this.ta() || aF.pb
	}, this.ta = function() {
		for (var bU = sx.length, aE = 0; aE < bU; aE++)
			if (sx[aE].pb) return !0;
		return !1
	}, this.cy = function() {
		if (this.pb())
			if (aF.pb) aF.cy();
			else {
				var aE, dD = cz,
					em = sx,
					bU = em.length,
					tl = (sy + l5) / zoom;
				for (dD.imageSmoothingEnabled = !0, dD.setTransform(zoom, 0, 0, zoom, h8, h9), aE = 0; aE < bU; aE++) em[aE].pb && cz.drawImage(em[aE].dC[em[aE].t7], em[aE].h8 * tl, em[aE].h9 * tl);
				dD.imageSmoothingEnabled = !1, dD.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function ru() {
	var eu, dC, ck, tn, to, tm = ["Quit Game", "Surrender", "Statistics", "Replay"];

	function tp() {
		var tq, nT = dC.getContext("2d", {
			alpha: !0
		});
		nT.clearRect(0, 0, eu, eu), nT.fillStyle = d2.iL, nT.fillRect(0, 0, eu, eu), 0 === tn && (nT.fillStyle = d2.iQ, nT.fillRect(0, 0, eu, eu)), nT.fillStyle = d2.d3, nT.fillRect(0, 0, eu, 1), nT.fillRect(0, 0, 1, eu), nT.fillRect(0, eu - 1, eu,
			1), nT.fillRect(eu - 1, 0, 1, eu), tq = .9 * eu / ch.get(0).width, nT.imageSmoothingEnabled = !0, nT.setTransform(tq, 0, 0, tq, Math.floor((eu - tq * ch.get(0).width) / 2), Math.floor((eu - tq * ch.get(0).height) / 2)), nT.drawImage(
			ch.get(0), 0, 0), nT.setTransform(1, 0, 0, 1, 0, 0)
	}

	function tt(cr, cs) {
		if (!cI.cJ) return cr <= eu + kq && cs >= cU.h9 ? 0 : -1;
		if (cr <= 4 * eu + kq) {
			if (cs >= cU.h9) return 0;
			if (cs >= cU.h9 - eu - to * kq) return tw(2) ? 2 : -1;
			if (cs >= cU.h9 - 2 * (eu + to * kq)) return tw(3) ? 3 : -1;
			if (cs >= cU.h9 - 3 * (eu + to * kq)) return tw(4) ? 4 : -1
		} else if (cr <= 7 * eu + kq && cs >= cU.h9 - eu - to * kq) return 1;
		return -1
	}

	function tw(aE) {
		return 2 === aE ? tu(2) || tu(3) || tu(4) : 3 === aE && tu(3) || tu(4)
	}

	function tu(aE) {
		return 2 === aE ? !cH && cI.u1(bN) : 3 === aE ? 2 <= bR.u2 : lU.u3()
	}

	function u5(aE, t8) {
		cz.setTransform(1, 0, 0, 1, kq, cU.h9 - aE * to * kq - aE * eu), cz.fillStyle = d2.iL, cz.fillRect(0, 0, 4 * eu, eu), tn === aE + 1 && t8 === d2.d3 && (cz.fillStyle = d2.iQ, cz.fillRect(0, 0, 4 * eu, eu)), cz.fillStyle = t8, cz.fillRect(0, 0,
			4 * eu, 1), cz.fillRect(0, 0, 1, eu), cz.fillRect(4 * eu, 0, 1, eu), cz.fillRect(0, eu - 1, 4 * eu, 1), cz.fillText(tm[aE], 2 * eu, .54 * eu)
	}
	this.cJ = !1, this.b = function() {
		tn = -1, this.cJ = !1, to = a0 ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		eu = cU.eu, (dC = document.createElement("canvas")).width = eu, dC.height = eu, ck = ce + Math.floor((a0 ? .5 : .45) * eu) + cf, tp()
	}, this.pu = function() {
		this.cJ = !this.cJ, this.cJ ? (gW.ps(!1), cH && gW.tr && gW.pv(!0), this.ts()) : (tn = -1, tp(), fs && 1 === gb && !hn && aJ(1)), aL.co = !0
	}, this.ts = function() {
		(fs || cH) && 1 === gb && (gI.ga(!0), hn || setTimeout(function() {
			iE.oW()
		}, 0), aJ(0))
	}, this.cq = function(cr, cs) {
		var t7 = tt(cr, cs);
		if (this.cJ) {
			if (hq) return 0 <= t7 && gW.ps(!1), !cH;
			if (0 === t7) rV();
			else if (1 === t7) this.pu();
			else if (2 === t7) tu(t7) && (cR.cS.jf(), this.pu());
			else if (3 === t7) tu(t7) && (nR.pu(), aL.co = !0, lU.pb) && lU.lP();
			else if (4 === t7) tu(t7) && (lU.pb ? lU.lP() : lU.show(), nR.pb) && nR.pu();
			else {
				if (!(fs || 1 !== gb || cH || nR.pb || lU.pb) && (cI.pu(), 1)) return !1;
				pX.pY(cr, cs) || nQ.pZ(cr, cs)
			}
			return !0
		}
		return 0 === t7 && (this.pu(), !0)
	}, this.p8 = function(cr, cs) {
		cr = tt(cr, cs);
		cr !== tn && (tn = cr, this.cJ || tp(), aL.co = !0)
	}, this.cy = function() {
		var cl;
		this.cJ ? (cl = Math.floor(5.5 * eu), cz.setTransform(1, 0, 0, 1, kq, cU.h9), cz.fillStyle = d2.iL, cz.fillRect(0, 0, cl, eu), 0 === tn ? (cz.fillStyle = d2.iQ, cz.fillRect(0, 0, 4 * eu, eu)) : 1 === tn && (cz.fillStyle = d2.iQ, cz
				.fillRect(4 * eu, 0, Math.floor(1.5 * eu), eu)), cz.fillStyle = d2.d3, cz.fillRect(0, 0, cl, 1), cz.fillRect(0, 0, 1, eu), cz.fillRect(4 * eu, 0, 1, eu), cz.fillRect(0, eu - 1, cl, 1), cz.fillRect(cl - 1, 0, 1, eu), cz.font =
			ck, cz.textBaseline = d0, cz.textAlign = d1, cz.fillText(tm[0], 2 * eu, .54 * eu), cl = .4 * eu, cI.u4(kq + 4 * eu + (1.5 * eu - cl) / 2, cU.h9 + .3 * eu, cl), tw(2) && u5(1, tu(2) ? d2.d3 : d2.iW), tw(3) && u5(2, tu(3) ? d2.d3 :
				d2.iW), tw(4) && u5(3, d2.d3), cz.setTransform(1, 0, 0, 1, 0, 0)) : cz.drawImage(dC, kq, cU.h9)
	}, this.u1 = function(player) {
		return 0 !== dw[player] && 2 !== gb && bW.tR(player)
	}, this.u4 = function(h8, h9, bU) {
		cz.setTransform(1, 0, 0, 1, h8, h9), cz.lineWidth = qU, cz.strokeStyle = d2.d3, cz.beginPath(), cz.moveTo(0, 0), cz.lineTo(bU, bU), cz.moveTo(0, bU), cz.lineTo(bU, 0), cz.stroke()
	}
}

function rv() {
	var u6, eu, qT, u7, u8, u9, uA, uB, uC;

	function cx() {
		return cU.uV(g2.uR()) ? gO.pb ? cU.h9 - cU.eu - 2 * qT : cU.h9 - qT : gW.uV(g2.uU()) ? gO.pb ? gW.cx() - cU.eu - 2 * qT : gW.cx() - qT : gO.pb ? a2 - cU.eu - (hM.uW() + 1) * qT : a2 - hM.uW() * kq
	}

	function uI(a3, v, id, bc, uL, uM, mT, uN, uO) {
		var aE, nT, uS, t9, uZ, ua = void 0 !== uO,
			cl = Math.floor(cm.measureText(v, g2.ck) + 1.5 * u7 + (ua ? eu : 1.5 * u7));
		if (aL.co = !0, a1 < cl + qT && !ua && 50 !== id && 20 < v.length) uS = Math.floor(.5 * v.length), uI(a3, v.substring(0, uS), id, bc, uL, uM, mT, uN, uO), uI(a3, v.substring(uS), id, bc, uL, uM, mT, uN, uO);
		else if (uS = cl + (50 === id ? u8 : 0), (t9 = document.createElement("canvas")).width = cl, t9.height = eu, (nT = t9.getContext("2d", {
				alpha: !0
			})).font = g2.ck, nT.textBaseline = d0, nT.textAlign = ub, nT.clearRect(0, 0, cl, eu), nT.fillStyle = uM, nT.fillRect(0, 0, cl, eu), nT.fillStyle = uL, nT.fillText(v, Math.floor(1.5 * u7), Math.floor(eu / 2)), ua && (ua = eu / aF.cl, nT
				.imageSmoothingEnabled = !0, nT.setTransform(ua, 0, 0, ua, cl - eu, 0), nT.drawImage(aF.t9[uO], 0, 0)), 0 === (uZ = {
				aM: a3,
				v: v,
				id: id,
				player: bc,
				dC: t9,
				uL: uL,
				uM: uM,
				cl: cl,
				uS: uS,
				mT: mT,
				uN: uN,
				uO: uO
			}).aM || 0 < u6.length && 0 < u6[0].aM) u6.unshift(uZ);
		else {
			for (aE = 1; aE < u6.length; aE++)
				if (0 < u6[aE].aM) return void u6.splice(aE, 0, uZ);
			u6.push(uZ)
		}
	}

	function uJ(dF, qQ, em) {
		return "rgb(" + dF + "," + qQ + "," + em + ")"
	}

	function uc(id, ux) {
		for (var bU = u6.length, aE = 0; aE < bU; aE++) u6[aE].id === id && ux-- <= 0 && (u6.splice(aE, 1), aE--, bU--)
	}

	function ud(id, player) {
		for (var uy = !1, aE = u6.length - 1; 0 <= aE; aE--) u6[aE].id !== id || player !== bZ && u6[aE].player !== player || (u6.splice(aE, 1), uy = !0);
		return uy
	}

	function v3(v) {
		uI(340, v, 6, 0, uJ(215, 245, 255), d2.iN, -1, !1)
	}

	function vB(player, vC) {
		return (fs || dv <= player || vC || hM.hN.vD ? hR : vE)[player]
	}
	this.b = function() {
		uA = a0 ? 7 : 12, u9 = {
			nc: [uB = 0, 0, 0],
			uD: [0, 0, 0],
			hj: [220, 180, 180],
			uE: [0, 0, 0],
			fQ: [0, 0, 0]
		}, u6 = [], this.resize(), hn && this.oG(0, 18), v3(rk.uQ(37, [az.fo.md[az.me].name])), v3(rk.uQ(38, [az.b0 - 2, az.b1 - 2])), v3(rk.uQ(39, [rM.v4], {
			un: [0]
		})), rM.v4 !== rM.v5 && v3(rk.uQ(40, [rM.v5, rM.v5 / rM.v4], {
			un: [0],
			v6: [1]
		})), 0 < rM.v7 && v3(rk.uQ(41, [rM.v7, rM.v7 / rM.v4], {
			un: [0],
			v6: [1]
		})), 0 < rM.v8 && v3(rk.uQ(42, [rM.v8, rM.v8 / rM.v4], {
			un: [0],
			v6: [1]
		})), 10 === fq && uI(120, rk.uQ(43), 6, 0, uJ(235, 255, 120), d2.iN, -1, !1), this.uG()
	}, this.uG = function() {
		var aE, bU;
		if (fm.fn)
			for (bU = fm.fo.uH.length, aE = 0; aE < bU; aE++) uI(400, fm.fo.uH[aE], 6, 0, uJ(255, 255, 255), d2.iN, -1, !1)
	}, this.resize = function() {
		var uK, aE;
		if (eu = (eu = Math.floor((a0 ? .031 : .0249) * cb)) < 10 ? 10 : eu, this.cj = Math.floor(2 * eu / 3), this.ck = ce + this.cj + cf, qT = kq, u7 = Math.floor(eu / 5), 0 < u6.length)
			for (uK = u6, u6 = [], aE = uK.length - 1; 0 <= aE; aE--) uI(uK[aE].aM, uK[aE].v, uK[aE].id, uK[aE].player, uK[aE].uL, uK[aE].uM, uK[aE].mT, uK[aE].uN, uK[aE].uO);
		this.uP()
	}, this.uP = function() {
		uC = document.createElement("canvas");
		var v = rk.uQ(0),
			nT = (u8 = cm.measureText(v, this.ck) + 5 * u7, uC.height = eu, uC.width = u8, uC.getContext("2d", {
				alpha: !0
			}));
		nT.font = this.ck, nT.textBaseline = d0, nT.textAlign = d1, nT.clearRect(0, 0, u8, eu), nT.fillStyle = d2.ig, nT.fillRect(0, 0, u8, eu), nT.fillStyle = d2.d3, nT.fillText(v, Math.floor(u8 / 2), Math.floor(eu / 2))
	}, this.uR = function() {
		var bU;
		return gO.pb ? gO.cl : 0 === (bU = u6.length) ? 0 : 1 === bU ? u6[0].uS : uT(u6[0].uS, u6[1].uS)
	}, this.uU = function() {
		var bU = u6.length;
		return gO.pb ? bU ? uT(gO.cl, u6[0].uS) : gO.cl : 0 === bU ? 0 : 1 === bU ? u6[0].uS : 2 === bU ? uT(u6[0].uS, u6[1].uS) : uT(uT(u6[0].uS, u6[1].uS), u6[2].uS)
	}, this.cq = function(h8, h9) {
		for (var uX, uY = cx(), aE = u6.length - 1; 0 <= aE; aE--)
			if ((uX = uY - (aE + 1) * eu) <= h9 && h9 < uX + eu) return 50 === u6[aE].id ? h8 >= hG - u8 - qT - u6[aE].cl && (hG - u8 - qT <= h8 ? cR.cL.jp(u6[aE].player) : gT.ho(u6[aE].player, 800, !1, 0), !0) : h8 >= hG - u6[aE].cl - qT && (
				736 === u6[aE].id ? window.open("https://" + u6[aE].v, "_blank") : u6[aE].uN && (gT.ho(u6[aE].player, 800, !1, 0), 0 <= u6[aE].mT) && (uX = u6[aE].mT, u6[aE].mT = u6[aE].player, u6[aE].player = uX), !0);
		return !1
	}, this.or = function(a3, v, id, bc, uL, uM, mT, uN, uO) {
		uI(a3, v, id, bc, uL, uM, mT, uN, uO)
	}, this.r1 = function(id) {
		for (var aE = u6.length - 1; 0 <= aE; aE--) u6[aE].id === id && (u6[aE].aM = 1)
	}, this.oG = function(player, id) {
		0 === id ? (bR.bS[player < dv ? 4 : 3]++, cm.eR(player, 0), uc(423, 0), uI(160, rk.uQ(1, [hR[player]]), 423, player, "rgb(10,220,10)", d2.iN, -1, !1)) : 1 === id ? (ud(50, bZ), cm.eR(player, 1), uI(360, rk.uQ(2, [hR[player]]), 0, player,
			"rgb(255,40,40)", d2.iN, -1, !0), gT.ho(player, 2700, !1, 0)) : 2 === id ? (cm.eR(player, 2), uI(0, rk.uQ(3), 0, player, "rgb(10,255,255)", d2.iN, -1, !0), gT.ho(player, 2700, !1, 0)) : 3 === id ? (cm.eR(player, 2), uI(0, rk.uQ(4,
			[hR[player]]), 0, player, d2.d3, d2.iN, -1, !0), gT.ho(player, 2700, !1, 0)) : 4 === id ? (oR--, oQ--, this.ue(1, player, player)) : 5 === id ? 2 !== dx[player] && bW.tR(bN) && (function(id, gp) {
			var aE, ur = 0,
				bU = u6.length;
			for (aE = 0; aE < bU; aE++)
				if (u6[aE].id === id && gp <= ++ur) return u6.splice(aE, 1)
		}(1, 5), g3.ug(player) ? uI(180, rk.uQ(5, [hR[player]]), 1, player, uJ(255, 200, 180), d2.iN, -1, !0) : (uc(573, 0), uI(180, rk.uQ(6, [hR[player]]), 573, player, "rgb(255,70,10)", d2.iN, -1, !0))) : 18 === id ? uI(255, rk.uQ(7), 18,
			0, d2.d3, d2.iN, -1, !1) : 21 === id ? uI(220, rk.uQ(8), id, 0, "rgb(255,40,40)", d2.iN, -1, !1) : 22 === id ? this.ue(2, player, player) : 59 === id && uI(0, rk.uQ(9), id, 0, d2.j4, d2.iN, 0, !1)
	}, this.uh = function(ui) {
		uI(200, rk.uQ(10, [ui]), 94, 0, d2.d3, d2.ir, -1, !1)
	}, this.oO = function(oJ) {
		if (bN === oJ) wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter);
		cm.eR(oJ, 2), uI(0, dv < 100 ? rk.uQ(11, [hR[oJ]]) : rk.uQ(12, [hR[oJ]]), 3, oJ, d2.d3, d2.iN, -1, !0), uI(0, "Your Current Win Count is Now " + wins_counter, 3, oJ, d2.d3, d2.iN, -1, !0), gT.ho(oJ, 2700, !1, 0)
	}, this.tc = function(df) {
		var uj = "(" + k9.dN(df >> 2) + ", " + k9.dP(df >> 2) + ")",
			uN = !1,
			player = 0;
		bW.bX(df) ? bW.bh(df) ? uj = rk.uQ(13, [uj]) : (player = bW.bg(df), uj = rk.uQ(14, [hR[player], cK.hP.hQ(bO[player]), cK.hP.hQ(bv[player]), uj]), uN = !0) : uj = bW.tS(df) ? rk.uQ(15, [uj]) : rk.uQ(16, [uj]), aL.co = !0, uc(55, 0), uI(
			220, uj, 55, player, d2.d3, d2.iN, -1, uN)
	}, this.te = function(uk) {
		var m2 = eE.gG,
			player = m2.ul[uk];
		aL.co = !0, uc(55, 0), uI(220, rk.uQ(17, [hR[player], m2.um[uk]], {
			un: [1]
		}), 55, player, d2.d3, d2.iN, -1, !0)
	}, this.jY = function(uo, up, jZ) {
		uo === bN ? uI(175, rk.uQ(18, [hR[up]]), 1001, up, uJ(200, 255, 210), d2.iN, -1, !0, jZ) : this.uq(uo, jZ)
	}, this.uq = function(uo, jZ) {
		uc(1e3, 0), uI(175, rk.uQ(19, [hR[uo]]), 1e3, uo, d2.d3, "rgba(5,60,25,0.9)", -1, !0, jZ)
	}, this.oN = function(oK) {
		var ui;
		oK ? (ui = rk.uQ(20), cm.og(rk.uQ(21), 2, 1, 12), uI(0, ui, 40, 0, "rgb(10,220,10)", d2.iN, -1, !1)) : (ui = rk.uQ(22), cm.og(rk.uQ(23), 2, 0, 16), uI(0, ui, 41, 0, "rgb(200,80,80)", d2.iN, -1, !1)), gT.hx(2700)
	}, this.nd = function(nc) {
		uI(300, nc[0].name + " [" + oL.nj(nc[0].ng) + "] vs " + nc[1].name + " [" + oL.nj(nc[1].ng) + "]", 65, 0, d2.hK, "rgba(100,255,255,0.75)", -1, !1)
	}, this.us = function(ui) {
		uI(200, ui, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.ut = function() {
		uI(0, rk.uQ(24), 247, 0, d2.j3, d2.iN, -1, !1)
	}, this.nl = function(nc, ni, nk, uu) {
		1 === g6.uv() && (uI(0, nc[0].name + ": " + oL.nj(nc[0].ng) + " -> " + ni, 66, 0, d2.d3, uu[0], -1, !1), uI(0, nc[1].name + ": " + oL.nj(nc[1].ng) + " -> " + nk, 66, 1, d2.d3, uu[1], -1, !1))
	}, this.jq = function(player, id) {
		0 === id ? ud(50, player) ? (uI(128, rk.uQ(25, [hR[player]]), 52, player, uJ(180, 255, 180), d2.iN, -1, !0), g3.kU(player, 2, 255)) : uI(384, rk.uQ(26, [hR[player]]), 51, player, uJ(210, 210, 255), d2.iN, -1, !0) : ud(51, player) ? (uI(
			128, rk.uQ(27, [hR[player]]), 52, player, d2.d3, "rgba(60,120,10,0.9)", -1, !0), g3.kU(player, 2, 255)) : (uI(384, rk.uQ(28, [hR[player]]), 50, player, d2.d3, "rgba(90,90,90,0.9)", -1, !0), g3.kU(player, 2, 96))
	}, this.ju = function(nc, target) {
		var color = uJ(210, 255, 210);
		1 < nc.length ? uI(230, rk.uQ(29, [nc.length, hR[target]]), 66, target, color, d2.iN, -1, !0) : uI(230, rk.uQ(30, [hR[nc[0]], hR[target]]), 66, nc[0], color, d2.iN, target, !0)
	}, this.uw = function(player, target) {
		uI(230, rk.uQ(31, [hR[player], hR[target]]), 66, player, d2.d3, "rgba(75,65,5,0.9)", target, !0)
	}, this.oF = function(id, player) {
		ud(id, player)
	}, this.jI = function() {
		var cd;
		100 <= bO[bN] || (-1 === (cd = function(id) {
			for (var aE = u6.length - 1; 0 <= aE; aE--)
				if (u6[aE].id === id) return aE;
			return -1
		}(143)) ? uI(80, rk.uQ(32), 143, 0, d2.d3, d2.iN, -1, !1) : u6[cd].aM = 80)
	}, this.jl = function(v0, v1, player) {
		2 !== dx[bN] && (uI(200, rk.uQ(33, [v0, hR[player]], {
			un: [0]
		}), 30, player, "rgb(190,255,190)", d2.iN, -1, !0), v1) && uI(30, rk.uQ(34, [v1], {
			un: [0]
		}), 30, 0, d2.d3, d2.iN, -1, !1)
	}, this.v2 = function(v0, player) {
		2 !== dx[bN] && (uc(31, 0), 2 === dx[player] || dv <= player ? uI(150, rk.uQ(36, [hR[player], v0], {
			un: [1]
		}), 31, player, d2.hK, "rgba(205,205,205,0.9)", -1, !0) : uI(150, rk.uQ(35, [hR[player], v0], {
			un: [1]
		}), 31, player, d2.hK, "rgba(205,255,205,0.9)", -1, !0))
	}, this.oS = function(v9) {
		for (var fQ = aL.fP(), aE = 2; 0 <= aE; aE--) 0 < u9.uE[aE] && (v9 || u9.fQ[aE] < fQ - 220) && this.vA(aE)
	}, this.vA = function(id) {
		var v, bU = u9.uE[id],
			player = u9.nc[id];
		u9.uE[id] = 0, 1 === bU ? (v = 0 === id ? rk.uQ(47, [vB(player, !0), vB(u9.uD[0], !0)]) : rk.uQ(47 + id, [vB(player, !1)]), uc(7, 0), uI(u9.hj[id], v, 7, u9.uD[id], d2.d3, d2.iN, -1, !0)) : 2 <= bU && (v = rk.uQ(44 + id, [vB(player, 0 ===
			id), bU - 1]), uc(7, 0), uI(u9.hj[id], v, 7, player, d2.d3, d2.iN, -1, !1))
	}, this.ue = function(id, mS, mT) {
		var fQ = aL.fP(),
			bU = u9.uE[id] + 1;
		u9.uE[id]++, u9.nc[id] = mS, u9.uD[id] = mT, 1 === bU && (u9.fQ[id] = fQ), (1 === bU && (oR < 32 || 2 === gb) || 1 < bU && (u9.fQ[id] < fQ - 140 || 2 === gb)) && this.vA(id)
	}, this.fA = function() {
		for (var dU = (dU = u6.length - uA) <= 1 ? 1 : dU * dU, aE = u6.length - 1; 0 <= aE; aE--) 0 < u6[aE].aM && (u6[aE].aM -= dU, u6[aE].aM <= 0) && (aL.co = !0, u6.splice(aE, 1));
		! function() {
			var ux, aE;
			if (128 !== uB && !(++uB < 128))
				for (ux = 5, aE = fT - 1; 0 <= aE; aE--) 1 === dx[fU[aE]] && 0 < ux-- && uI(240, rk.uQ(50, [hR[fU[aE]]]), 1, fU[aE], d2.hK, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.oS(!1)
	}, this.cy = function() {
		for (var mq, h9 = cx(), aE = u6.length - 1; 0 <= aE; aE--) mq = h9 - (aE + 1) * eu, 50 === u6[aE].id ? (cz.drawImage(u6[aE].dC, hG - u6[aE].cl - u8 - qT, mq), cz.drawImage(uC, hG - u8 - qT, mq)) : cz.drawImage(u6[aE].dC, hG - u6[aE].cl -
			qT, mq)
	}
}

function vG() {
	this.cl = 0, this.eu = 0, this.nY = 0, this.vH = 0, this.vI = 0, this.cj = 0, this.cd = -1, this.tm = ["Accept Cookies", "More Information", "Decline"], this.colors = ["rgba(0,255,0,0.4)", "rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"], this.pb = !1,
		this.b = function() {
			this.resize(), this.pb = q < 5 && !m && 0 === r.aA()
		}, this.resize = function() {
			this.cl = Math.floor(2.8 * Math.floor((a0 ? .09 : .062) * cb)), this.eu = Math.floor(+this.cl), this.nY = Math.floor(.06 * this.cl), this.nZ = this.cl - 2 * this.nY, this.vH = this.nY, this.vI = (this.eu - (this.tm.length + 1) * this
				.vH) / this.tm.length, this.cj = Math.floor(.3 * this.vI)
		}, this.cq = function(cr, cs) {
			return !!this.pb && -1 !== (cr = this.vJ(cr, cs)) && (0 === cr ? (r.vK(2), this.pb = !1) : 1 === cr ? pm.b(ro.vL, !0) : 2 === cr && (r.vK(1), this.pb = !1), aL.co = !0)
		}, this.p8 = function(cr, cs) {
			var a3;
			return !!this.pb && (a3 = this.cd, this.cd = this.vJ(cr, cs), a3 !== this.cd && (aL.co = !0), -1 !== this.cd)
		}, this.vJ = function(cr, cs) {
			return cr -= ct, cs -= Math.floor(cu - this.eu - ct), cr < 0 || cs < 0 || cr >= this.cl || cs >= this.eu ? -1 : (cr = Math.floor((cs - .5 * this.vH) / ((this.eu - this.vH) / this.tm.length))) < 0 ? 0 : cr >= this.tm.length ? this.tm
				.length - 1 : cr
		}, this.cy = function() {
			this.pb && this.vM()
		}, this.vM = function() {
			var h8 = ct,
				h9 = Math.floor(cu - this.eu - ct);
			cz.setTransform(1, 0, 0, 1, h8, h9), cz.fillStyle = d2.iN, cz.fillRect(0, 0, this.cl, this.eu), cz.textBaseline = d0, cz.textAlign = d1, cz.strokeStyle = d2.d3, cz.font = ce + this.cj + cf, cz.strokeRect(0, 0, this.cl, this.eu);
			for (var aE = this.tm.length - 1; 0 <= aE; aE--) cz.setTransform(1, 0, 0, 1, h8 + this.nY, h9 + this.vH + aE * (this.vH + this.vI)), cz.fillStyle = this.colors[aE], cz.fillRect(0, 0, this.nZ, this.vI), this.cd === aE && (cz.fillStyle = d2
				.iT, cz.fillRect(0, 0, this.nZ, this.vI)), cz.fillStyle = d2.d3, cz.fillText(this.tm[aE], this.nZ / 2, .54 * this.vI), cz.strokeRect(0, 0, this.nZ, this.vI);
			cz.setTransform(1, 0, 0, 1, 0, 0)
		}
}

function rw() {
	var vN, vO, vP, cl, eu, font;

	function vT(vU) {
		return vU < 10 ? "0" + vU : String(vU)
	}
	this.b = function() {
		void 0 === cl && this.resize(), this.setTime()
	}, this.resize = function() {
		cl = Math.floor((a0 ? .53 : .36) * cb), eu = Math.floor(.065 * cl), font = ce + Math.floor(.9 * eu) + cf, vP--, this.setTime()
	}, this.fA = function() {
		this.setTime() && (aL.co = !0)
	}, this.setTime = function() {
		var a3 = new Date,
			vR = a3.getUTCMinutes(),
			a3 = a3.getUTCSeconds();
		return vO = 3600 - 60 * vR - a3, vO %= 900, vN = "Next Contest: " + vT(Math.floor(vO / 60)) + ":" + vT(vO % 60), vP !== (vP = 60 * vR + a3) && (cl = cm.measureText(vN, font), cl += Math.floor(.4 * eu), !0)
	}, this.cy = function() {
		cz.lineWidth = 1 + Math.floor(eu / 15), 7 === aT.pp() && rh.vV() + 2 * ct > .5 * (cu - cl) ? cz.translate(hG - eu, Math.floor(rh.vV() + 2 * ct + cl)) : cz.translate(hG - eu, Math.floor(.5 * (cu + cl))), cz.rotate(-Math.PI / 2), cz
			.fillStyle = d2.d3, cz.fillRect(0, 0, cl, eu), cz.strokeStyle = d2.hK, cz.strokeRect(0, 0, cl, eu + 10), cz.fillStyle = d2.hK, cz.font = font, cz.textBaseline = d0, cz.textAlign = d1, cz.fillText(vN, Math.floor(cl / 2), Math.floor(
				.59 * eu)), cz.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function vW() {
	this.vX = 10, this.vY = 50, this.vZ = 50, this.va = 8, this.vb = this.vY + this.vZ, this.aG = this.vY + this.vZ + this.va, this.cl = 72, this.vc = 0, this.vd = 0, this.t9 = new Array(this.aG), this.ve = 8, this.vf = new Array(this.vY + this.vZ),
		this.vg = new Array(this.vY + this.vZ), this.hF = 0, this.hH = 0, this.zoom = 1, this.vh = .2, this.tQ = 0, this.aH = null, this.vi = null, this.pb = !1, this.b = function() {
			var aE, vj, vk;
			for (this.aH = new Array(this.aG), this.vi = new Array(this.aG), vj = ch.tA("emojis"), this.vl(), aE = this.tQ = 0; aE < this.vY; aE++) this.vm(aE, aE, vj);
			for (vk = ch.tA("flags"), aE = 0; aE < this.vZ; aE++) this.vm(aE, this.vY + aE, vk);
			this.vn(), this.t9[26] = this.vo(25, 2), this.vp()
		}, this.vm = function(aE, eb, fQ) {
			this.aH[eb] = !1, this.vi[eb] = 0;
			var dC = document.createElement("canvas"),
				nT = (dC.width = this.cl, dC.height = this.cl, dC.getContext("2d", {
					alpha: !0
				}));
			nT.clearRect(0, 0, this.cl, this.cl), 23 === eb ? nT.drawImage(nQ.t5()[4].dC[1], 0, 0) : 36 === eb ? nT.drawImage(nQ.t5()[0].dC[2], 0, 0) : 49 === eb ? nT.drawImage(nQ.t5()[2].dC[1], 0, 0) : nT.drawImage(fQ, this.cl * aE % (aE === eb ?
				this.vX * this.cl : 4e3), aE === eb ? bJ(aE, this.vX) * this.cl : 0, this.cl, this.cl, 0, 0, this.cl, this.cl), this.t9[eb] = dC
		}, this.vn = function() {
			this.t9[this.aG - 5] = this.t9[26], this.t9[this.aG - 4] = this.vo(this.aG - 5, 2), this.t9[this.aG - 1] = this.vo(this.aG - 5, 1), this.t9[this.aG - 8] = this.vo(this.aG - 4, 1), this.t9[this.aG - 3] = this.t9[39], this.t9[this.aG - 2] =
				this.vo(this.aG - 3, 1), this.t9[this.aG - 7] = this.vo(this.aG - 2, 1), this.t9[this.aG - 6] = this.vo(this.aG - 7, 1)
		}, this.vo = function(aE, vq) {
			var dC = document.createElement("canvas"),
				nT = (dC.width = this.cl, dC.height = this.cl, dC.getContext("2d", {
					alpha: !0
				}));
			return nT.clearRect(0, 0, this.cl, this.cl), nT.rotate(vq * Math.PI / 2), nT.drawImage(this.t9[aE], 1 === vq ? 0 : -this.cl, -this.cl), dC
		}, this.vp = function() {
			var aE, aR, d7 = a4().split("");
			if (2 * d7.length !== this.aG) this.tQ = 0;
			else {
				for (aE = 0; aE < this.aG; aE += 2) aR = parseInt(d7[Math.floor(aE / 2)]), this.aH[aE] = aR % 2 == 1, this.aH[aE + 1] = 1 < aR;
				this.vr()
			}
		}, this.vr = function() {
			for (var aE = this.tQ = 0; aE < this.aG; aE++) this.aH[aE] && (this.vi[this.tQ++] = aE)
		}, this.th = function() {
			8 === this.tQ && this.vi[0] === this.vb && this.vr()
		}, this.vs = function() {
			var aE;
			for (this.tQ = this.va, aE = 0; aE < this.va; aE++) this.vi[aE] = this.vb + aE
		}, this.vl = function() {
			this.vc = Math.floor((a0 ? .075 : .0468) * cb), this.zoom = this.vc / this.cl, this.vd = (1 + this.vh) * this.vc
		}, this.show = function(cr, cs) {
			var aE, vu, vt, nY, hD, hE;
			if (this.tQ < 1) this.pb = !1;
			else {
				for (vt = (vt = Math.floor(hG / this.vd)) < 3 ? 3 : vt > this.ve ? this.ve : vt, vu = this.tQ > vt ? vt : this.tQ, vt = 1 + bJ(this.tQ - 1, vu), nY = Math.floor(vu * this.vd), hD = Math.floor(cr - nY / 2), hD = (hD = hG < hD + nY ?
						hG - nY : hD) < 0 ? 0 : hD, hE = Math.floor(cs - this.vd / 2), cr = Math.floor(vt * this.vd), hE = (hE = cu < hE + cr ? cu - cr : hE) < 0 ? 0 : hE, this.hF = hD + nY, this.hH = hE + cr, aE = 0; aE < this.tQ; aE++) this.vf[
					aE] = Math.floor(hD + aE % vu * this.vd), this.vg[aE] = Math.floor(hE + bJ(aE, vu) * this.vd);
				this.pb = !0
			}
		}, this.cq = function(cr, cs, player) {
			return !!this.pb && (this.pb = !1, this.tg(cr, cs) && this.vw(cr, cs, player) && this.pb || (this.th(), nQ.lP()), !0)
		}, this.tg = function(cr, cs) {
			return !(cr < this.vf[0] || cs < this.vg[0] || cr >= this.hF || cs >= this.hH)
		}, this.vw = function(cr, cs, player) {
			for (var aE = this.tQ - 1; 0 <= aE; aE--)
				if (cr >= this.vf[aE] && cs >= this.vg[aE] && cr <= this.vf[aE] + this.vd && cs <= this.vg[aE] + this.vd) return 39 === this.vi[aE] ? (this.vs(), this.show(cr, cs)) : (player === bN ? cR.cS.jY(this.vi[aE]) : cR.cL.jn(this.vi[aE],
					player), this.vr()), !0;
			return !1
		}, this.vx = function(aE) {
			return aE < 16 || 40 <= aE && aE < 47
		}, this.vy = function(aE) {
			return aE >= this.vY && aE < this.vY + this.vZ
		}, this.cy = function() {
			cz.imageSmoothingEnabled = !0;
			for (var l5 = this.vh * this.vc / 2, aE = this.tQ - 1; 0 <= aE; aE--) cz.setTransform(this.zoom, 0, 0, this.zoom, this.vf[aE] + l5, this.vg[aE] + l5), cz.drawImage(this.t9[this.vi[aE]], 0, 0);
			cz.imageSmoothingEnabled = !1, cz.setTransform(1, 0, 0, 1, 0, 0)
		}, this.vz = function(h8, h9, jZ) {
			cz.imageSmoothingEnabled = !0, cz.setTransform(this.zoom, 0, 0, this.zoom, h8, h9), cz.drawImage(this.t9[jZ], 0, 0), cz.imageSmoothingEnabled = !1, cz.setTransform(1, 0, 0, 1, 0, 0)
		}
}
var kq, w5, ct, qU, pS, pT, cv, e2, e1, e3, ww, gm, z4, hR, vE, dw, ey, f1, ex, f0, bv, n6, bO, bV, bn, bo, br, dx, fU, fT, p7, cz, a97, a98, a99, a1, a2, wA, cb, hG, cu, lX, a9A, m, p, n, q, a0, p0, oz, i4, iE, aF, bR, nR, a2a, aL, fR, gP, cw, a2l,
	pm, a1B, a9B, a9C, d0 = "middle",
	w0 = "bottom",
	d1 = "center",
	ub = "left",
	w1 = "right",
	ce = "bold ",
	w2 = "italic ",
	w3 = "normal ",
	cf = "px " + settings.fontName,
	w4 = [ce, w2 + ce, ce],
	w6 = ["wss://", "/s50/", "/s51/", "/s52/"];

function w7() {
	w8(), (cv = new w9).b()
}

function w8() {
	qU = .0022 * (1 + .5 * a0) * cb, ct = (ct = Math.floor((a0 ? .02 : .01152) * cb)) < 2 ? 2 : ct, kq = (kq = Math.floor((a0 ? .0114 : .01296) * cb)) < 2 ? 2 : kq, w5 = (w5 = Math.floor(.005 * wA)) < 1 ? 1 : w5
}

function wB(nT, cl, eu) {
	nT.fillStyle = d2.d3, nT.fillRect(0, 0, cl, 1), nT.fillRect(0, eu - 1, cl, 1), nT.fillRect(0, 0, 1, eu), nT.fillRect(cl - 1, 0, 1, eu)
}

function rx() {
	var u6, wC, ck, eu, wD;

	function wJ(aE) {
		var cl = u6[aE].dC.width,
			nY = (u6[aE].nT.clearRect(0, 0, cl, eu), u6[aE].nT.fillStyle = 0 !== u6[aE].id ? "rgba(33,33,120,0.83)" : u6[aE].eU === bZ ? "rgba(88,88,88,0.83)" : u6[aE].eU < dv ? "rgba(100,70,33,0.83)" : "rgba(33,100,80,0.83)", u6[aE].nT.fillRect(0,
				0, cl, eu), wB(u6[aE].nT, cl, eu), wC + 2 * eu < cl && (u6[aE].nT.fillRect(cl - wC - eu, 0, 1, eu), u6[aE].nT.fillText(hR[u6[aE].eU], Math.floor((cl - wC) / 2), Math.floor(.57 * eu))), 0 !== u6[aE].id ? 0 : eu);
		u6[aE].nT.fillText(cK.hP.hQ(u6[aE].eV), Math.floor(cl - wC / 2 - nY), Math.floor(.57 * eu)),
			function(aE, cl, nY) {
				u6[aE].nT.fillStyle = d2.iR;
				var wO = Math.floor(wC * u6[aE].eV / u6[aE].wP);
				u6[aE].nT.fillRect(Math.floor(cl - wC - nY), eu - wD, wO, wD)
			}(aE, cl, nY), 0 === u6[aE].id ? (wM(aE, cl), function(aE, cl) {
				u6[aE].nT.strokeStyle = d2.ia, u6[aE].nT.fillRect(eu, 0, 1, eu);
				cl -= eu;
				u6[aE].nT.beginPath(), u6[aE].nT.moveTo(Math.floor(.3 * eu + cl), Math.floor(eu / 2)), u6[aE].nT.lineTo(Math.floor(eu - .3 * eu + 0 + cl), Math.floor(eu / 2)), u6[aE].nT.stroke(), u6[aE].nT.beginPath(), u6[aE].nT.moveTo(Math
					.floor(eu / 2 + cl), Math.floor(.3 * eu)), u6[aE].nT.lineTo(Math.floor(eu / 2 + cl), Math.floor(eu - .3 * eu + 0)), u6[aE].nT.stroke()
			}(aE, cl)) : wM(aE, 2 * eu)
	}

	function wM(aE, cl) {
		u6[aE].nT.strokeStyle = u6[aE].wQ ? d2.iW : d2.il, u6[aE].nT.fillStyle = d2.d3, u6[aE].nT.fillRect(cl - eu, 0, 1, eu);
		var wR = Math.floor(eu / 12),
			wR = (u6[aE].nT.lineWidth = wR < 3 ? 3 : wR, u6[aE].nT.lineCap = "round", .35);
		cl = eu + 1, u6[aE].nT.beginPath(), u6[aE].nT.moveTo(Math.floor(cl - wR * eu + 0), Math.floor(wR * eu)), u6[aE].nT.lineTo(Math.floor(cl - eu + wR * eu), Math.floor(eu - wR * eu + 0)), u6[aE].nT.stroke(), u6[aE].nT.beginPath(), u6[aE].nT
			.moveTo(Math.floor(cl - eu + wR * eu), Math.floor(wR * eu)), u6[aE].nT.lineTo(Math.floor(cl - wR * eu + 0), Math.floor(eu - wR * eu + 0)), u6[aE].nT.stroke()
	}

	function wc(bU) {
		for (var eV, aE = bU - 1; 0 <= aE; aE--) eV = b5.bD(bN, aE), u6[aE].eV !== eV && (u6[aE].eV = eV, u6[aE].wP = eV > u6[aE].wP ? eV : u6[aE].wP, u6[aE].wK = !0)
	}

	function wI(we) {
		we.dC = document.createElement("canvas"), az.mC.font = ck;
		var cl = wC;
		we.eU < bZ && 0 === we.id && (cl += Math.floor(az.mC.measureText(hR[we.eU] + "000").width)), cl += eu, 0 === we.id && (cl += eu), we.dC.width = cl, we.dC.height = eu, we.nT = we.dC.getContext("2d", {
			alpha: !0
		}), we.nT.font = ck, we.nT.textBaseline = d0, we.nT.textAlign = d1
	}

	function wY(aE) {
		return gL.wg() ? hG - u6[aE].dC.width - kq : gL.h8
	}

	function wZ(aE) {
		return Math.floor(2 * kq + (gL.wg() ? g4.eu + kq : 0) + gL.eu + aE * (1.3 * eu))
	}
	this.b = function() {
		u6 = [], this.resize()
	}, this.resize = function() {
		ck = g2.ck, eu = g2.cj + 5, eu = Math.floor(1.25 * eu), a0 && (eu = Math.floor(1.25 * eu)), wD = Math.floor(.15 * eu), az.mC.font = ck, wC = Math.floor(az.mC.measureText("02 000 000 0000").width);
		for (var aE = u6.length - 1; 0 <= aE; aE--) wI(u6[aE]), wJ(aE)
	}, this.ga = function() {
		for (var aE = u6.length - 1; 0 <= aE; aE--) u6[aE].wK && (u6[aE].wK = !1, wJ(aE))
	}, this.cq = function(cr, h9) {
		if (2 !== gb && 0 !== dw[bN] && !cH && bW.tR(bN))
			for (var wT, wU, wV, wW = a0 ? eu : 0, wX = a0 ? Math.floor(.15 * eu) : 0, aE = u6.length - 1; 0 <= aE; aE--)
				if (wT = wY(aE), wU = wZ(aE), wV = u6[aE].dC.width, wU - wX <= h9 && h9 <= wU + eu + wX) {
					if (wT - wW <= cr && cr <= wT + eu + wW) return u6[aE].wQ || (u6[aE].wK = !0, u6[aE].wQ = !0, 0 === u6[aE].id && cR.cS.jW(u6[aE].eU)), !0;
					if (0 === u6[aE].id && wT + wV - eu - wW <= cr && cr <= wT + wV + wW) return cR.cS.cT(cU.cV(), u6[aE].eU), !0
				} return !1
	}, this.fA = function() {
		var bU;
		2 !== gb && 0 !== dw[bN] && !cH && bW.tR(bN) && (function(bU) {
			if (u6.length !== bU) return 1;
			for (var aE = bU - 1; 0 <= aE; aE--)
				if (u6[aE].id !== b5.b7(bN, aE) || u6[aE].eU !== b5.bC(bN, aE)) return 1;
			return
		}(bU = b5.b6(bN)) && function(bU) {
			var aE, id, eU, em, eV, uK = [];
			loop: for (aE = 0; aE < bU; aE++) {
				for (id = b5.b7(bN, aE), eU = b5.bC(bN, aE), em = 0; em < u6.length; em++)
					if (u6[em].id === id && u6[em].eU === eU) {
						uK.push(u6.splice(em, 1)[0]);
						continue loop
					} eV = b5.bD(bN, aE), wI(eV = {
					eU: eU,
					eV: eV,
					wP: eV,
					id: id,
					wK: !0,
					wQ: !1,
					dC: null,
					nT: null
				}), uK.push(eV)
			}
			u6 = uK
		}(bU), wc(bU))
	}, this.wf = function(bc) {
		for (var bU = Math.min(u6.length, b5.b6(bN)), aE = 0; aE < bU; aE++)
			if (u6[aE].eU === bc) return void(u6 = [])
	}, this.cy = function() {
		if (0 !== dw[bN] && bW.tR(bN) && !cH)
			for (var aE = u6.length - 1; 0 <= aE; aE--) cz.drawImage(u6[aE].dC, wY(aE), wZ(aE))
	}
}

function ry() {
	var u6, fb, wh, wi, eu, ck, cj, wj, vN, wk, wl, wm, dC, nT, he, wn;

	function wu() {
		cz.drawImage(dC, kq + (eO ? kq + gP.wv() : 0), ww + 2 * kq)
	}

	function wo() {
		dC.width = u6[0].width + wl, dC.height = eu + wl, (nT = dC.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, u6[0].width + wl, eu + wl), nT.translate(Math.floor(wl / 2), Math.floor(wl / 2)), nT.lineWidth = wl, nT.fillStyle = 1 === u6[0].wt ? d2.iU : d2.iN, wx(), nT.fill(), nT.strokeStyle = 1 === u6[0].wt ? d2.hK : d2.d3,
		wx(), nT.stroke(), nT.textAlign = d1, nT.textBaseline = d0, nT.fillStyle = 1 === u6[0].wt ? d2.hK : d2.d3, nT.font = ck[0], nT.fillText(vN[u6[0].ws], Math.floor(u6[0].width / 2), Math.floor(.72 * wj[0] * eu)), nT.font = ck[1], nT.fillText(u6[
				0].v, Math.floor(u6[0].width / 2), Math.floor((wj[0] + .48 * wj[1]) * eu))
	}

	function wx() {
		nT.beginPath(), nT.moveTo(wm, 0), nT.lineTo(u6[0].width - wm, 0), nT.lineTo(u6[0].width, wm), nT.lineTo(u6[0].width, eu - wm), nT.lineTo(u6[0].width - wm, eu), nT.lineTo(wm, eu), nT.lineTo(0, eu - wm), nT.lineTo(0, wm), nT.closePath()
	}
	this.b = function() {
		fb = 4, wh = wi = he = 0, u6 = [], ck = new Array(2), cj = new Array(2), wj = new Array(2), vN = ["YOU ERASED", "YOU WERE ERASED BY", "THE GAME WAS WON BY", "MAP:"], wj[0] = .3, wj[1] = .7, wk = new Array(4), dC = document.createElement(
			"canvas"), wn = aL.aM + 2e3, this.resize()
	}, this.resize = function() {
		var aE, cl;
		for (eu = Math.floor((a0 ? .0725 : .058) * cb), cj[0] = Math.floor(.85 * wj[0] * eu), cj[1] = Math.floor(.85 * wj[1] * eu), ck[0] = ce + cj[0] + cf, ck[1] = ce + cj[1] + cf, aE = wk.length - 1; 0 <= aE; aE--) wk[aE] = this.measureText(vN[
			aE] + "000", ck[0]);
		if (wl = Math.floor(1 + .05 * eu), wm = Math.floor(.2 * eu), 0 < u6.length) {
			for (aE = u6.length - 1; 0 <= aE; aE--) cl = this.measureText(u6[aE].v + "00", ck[1]), u6[aE].width = cl < wk[aE] ? wk[aE] : cl;
			wo()
		}
	}, this.fA = function() {
		0 !== fb && (4 === fb ? aL.aM > wn && (fb = 0, 1 === gb) && cm.og(az.fo.md[az.me].name, 3, 1, 9) : (1 === fb ? (0 === wh && (wo(), wh = 1e-4), 1 <= (wh += .002 * (aL.aM - he)) && (wi = 0, fb = 2, wh = 1), aL.co = !0) : 2 === fb ? ((wi +=
			(aL.aM - he) / 1e3) > u6[0].hj || 1 < wi && 1 < u6.length) && (fb = 3) : 3 === fb && ((wh -= .002 * (aL.aM - he)) <= 0 && (wh = 0, u6.shift(), fb = 0 < u6.length ? 1 : 0), aL.co = !0), he = aL.aM))
	}, this.measureText = function(v, ck) {
		return cz.font = ck, Math.floor(cz.measureText(v).width)
	}, this.eR = function(wr, aE) {
		this.og(hR[wr], aE, 1, 0 === aE ? 3 : 7)
	}, this.og = function(v, ws, wt, hj) {
		var cl = (cl = this.measureText(v + "00", ck[1])) < wk[ws] ? wk[ws] : cl;
		u6.push({
			v: v,
			width: cl,
			ws: ws,
			wt: wt,
			hj: hj
		}), 0 === fb && (wh = 0, fb = 1, he = aL.aM)
	}, this.cy = function() {
		0 !== fb && 0 !== wh && (wh < 1 ? (cz.globalAlpha = wh, wu(), cz.globalAlpha = 1) : wu())
	}
}

function sa() {
	var eu, dC, nT, wy, wz, x0, x1, x2, wK, x3, x4, x5, x6, x7;

	function cg() {
		var cl = gO.cl,
			m2 = (wK = !1, nS(nT, cl, eu), Math.floor(cl / 2));
		1 === wz ? (nT.fillStyle = d2.ic, nT.fillRect(m2, 0, m2, eu)) : -1 === wz && (nT.fillStyle = d2.ip, nT.fillRect(0, 0, m2, eu)), nU(nT, cl, eu, 2);
		var m2 = (m2 = Math.floor(.25 * eu)) < 2 ? 2 : m2,
			v4 = (nT.fillStyle = d2.iV, Math.floor((eu - 4) * x0[1] / x1[1]));
		0 < v4 && nT.fillRect(2, eu - 2 - v4, m2, v4), 0 < (v4 = Math.floor((eu - 4) * x0[0] / x1[0])) && nT.fillRect(cl - 2 - m2, eu - 2 - v4, m2, v4);
		m2 = (m2 = Math.floor(eu / 8)) < 2 ? 2 : m2;
		nW(nT, Math.floor(.4 * eu), 0, eu, m2, .5, !1), nW(nT, Math.floor(cl - 1.4 * eu), 0, eu, m2, .5, !0), nT.drawImage(wy, Math.floor((cl - wy.width) / 2), 3)
	}

	function x9() {
		wK = !0, x3 = 140, wz = 0, x2 = [], gO.pb = !1, g2.oF(247, 0), x0[0] = x0[1] = 0
	}

	function cx() {
		return cU.uV(g2.uR()) ? cU.h9 - eu - kq : gW.uV(g2.uU()) ? gW.cx() - eu - kq : a2 - eu - hM.uW() * kq
	}
	this.pb = !1, this.cl = 0, this.b = function() {
		x5 = x6 = 0, this.pb = !1, wK = x7 = !1, x3 = 140, x0 = [wz = 0, 0], x1 = [1, 1], x2 = [], x4 = new Uint32Array(10), this.resize()
	}, this.resize = function() {
		eu = cU.eu, this.cl = 4 * eu, this.x8(), (dC = document.createElement("canvas")).width = this.cl, dC.height = eu, nT = dC.getContext("2d", {
			alpha: !0
		}), cg()
	}, this.ga = function() {
		wK && cg()
	}, this.x8 = function() {
		var dD, wl, m2, vH = (vH = eu - 6) < 6 ? 6 : vH;
		void 0 !== wy && wy.width === vH || ((wy = document.createElement("canvas")).width = vH, wy.height = vH, (dD = wy.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, vH, vH), wl = Math.floor(vH / 8), dD.lineWidth = wl = wl < 1 ? 1 : wl, dD.strokeStyle = d2.d3, m2 = Math.floor(vH / 2), vH = Math.floor((vH - wl) / 2), dD.beginPath(), dD.arc(m2, m2, vH, 0, 2 * Math.PI), dD
			.moveTo(m2, m2 - vH), dD.lineTo(m2, m2 + vH), dD.moveTo(m2 + Math.cos(.78 * Math.PI) * vH, m2 + Math.cos(.28 * Math.PI) * vH), dD.lineTo(m2, m2), dD.lineTo(m2 + Math.cos(.22 * Math.PI) * vH, m2 + Math.cos(1.72 * Math.PI) * vH), dD
			.stroke())
	}, this.cq = function(h8, h9) {
		var hE;
		return !(h8 < a1 - this.cl - kq || h9 < (hE = cx()) || hE + eu < h9 || (cH || cR.cS.jc(h8 > a1 - kq - this.cl / 2 ? 1 : 0), 0))
	}, this.fA = function() {
		if (0 < x6) 0 === --x6 && x9();
		else if (this.pb) 270 == --x3 && 2 <= x5 && function() {
			var aE;
			for (aE = fT - 1; 0 <= aE; aE--)
				if (bW.tR(fU[aE])) return;
			return 1
		}() && (wK = !0, x0[0] += x1[0]), 180 === x3 && 3 * x0[0] < x1[0] ? x9() : x0[0] >= x1[0] ? x7 ? g7.oA.oD() : g7.oA.oI(-1) : x0[1] >= x1[1] ? x6 = 4 : x3 <= 0 && x9();
		else if (function() {
				var aE;
				for (aE = 9; 0 <= aE; aE--) 12 < Math.abs(x4[aE] - bv[gm[aE]]) && (x3 = 140), x4[aE] = bv[gm[aE]];
				if (--x3 <= 0) return 1;
				return
			}()) {
			(x7 = xC()) && g2.ut(), this.pb = !0, x3 = 360;
			var aE, a3 = 0;
			for (aE = fT - 1; 0 <= aE; aE--) bW.tR(fU[aE]) && (a3 += bv[fU[aE]]);
			x1[0] = uT(bJ(3 * a3, 5), 1), eO && 9 !== fq && (x1[0] = xE(uT(bJ(a3 * (100 - bJ(100 * gP.od(), r6)), 100), 1), x1[0])), x1[1] = uT(a3 - x1[0], 1), x5++
		}
	}, this.oP = function() {
		this.pb && x0[0] < x1[0] && x9()
	}, this.kV = function(player, xG) {
		var aE, a3;
		if (this.pb) {
			for (aE = x2.length - 1; 0 <= aE; aE--)
				if (x2[aE] === player) return;
			x2.push(player), wK = !0, a3 = fs ? x1[0] : bv[player], xG ? x0[0] += a3 : x0[1] += a3, player === bN && (wz = xG ? 1 : -1)
		}
	}, this.cy = function() {
		var h9;
		this.pb && (h9 = cx(), cz.drawImage(dC, a1 - this.cl - kq, h9))
	}
}

function rz() {
	var cl, h8, xH, dC, nT, pb, e0, xI, ck, wK, xJ = 11 / 12;

	function xL() {
		var wO = Math.floor(e0 * (cl - 2 * xH)),
			xO = 1 + Math.floor(.0625 * cU.eu),
			xP = 1 + Math.floor(.3 * cU.eu),
			vH = Math.floor(.55 * cU.eu);
		nT.clearRect(0, 0, cl, cU.eu), nT.fillStyle = d2.iM, nT.fillRect(0, 0, xH, cU.eu), nT.fillRect(xH + wO, 0, cl - xH - wO, cU.eu), nT.fillStyle = e0 < 1 / 3 ? "rgba(" + Math.floor(3 * e0 * 130) + ",130,0,0.85)" : e0 < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (e0 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (e0 - 2 / 3) * 130) + ",0.85)", nT.fillRect(xH, 0, wO, cU.eu), nT.fillStyle = d2.d3, nT.fillRect(0, 0, cl, 1), nT.fillRect(0, cU.eu - 1, cl, 1),
			nT.fillRect(0, 0, 1, cU.eu), nT.fillRect(xH, 0, 1, cU.eu), nT.fillRect(xH + wO, 0, 1, cU.eu), nT.fillRect(cl - xH, 0, 1, cU.eu), nT.fillRect(cl - 1, 0, 1, cU.eu), nT.fillRect(Math.floor(.25 * cU.eu) + xP, Math.floor((cU.eu - xO) / 2), cU
				.eu - 2 * xP, xO), nT.fillRect(Math.floor(cl - 1.25 * cU.eu) + xP, Math.floor((cU.eu - xO) / 2), cU.eu - 2 * xP - xP % 2, xO), nT.fillRect(Math.floor(cl - 1.25 * cU.eu) + Math.floor((cU.eu - xO) / 2), xP, xO, cU.eu - 2 * xP - xP % 2),
			xI = cK.cL.dz(bN, cU.cV()), nT.fillText(cK.hP.hQ(xI) + " (" + cK.hP.qs(100 * e0, 0) + ")", Math.floor(.5 * cl), vH)
	}

	function xT(cZ) {
		return !(1 < cZ && 1 === e0 || (1 < cZ && cZ * e0 - e0 < 1 / 1024 ? cZ = (e0 + 1 / 1024) / e0 : cZ < 1 && e0 - cZ * e0 < 1 / 1024 && (cZ = (e0 - 1 / 1024) / e0), e0 = cA.qG(e0 * cZ, 1 / 1024, 1), xL(), 0))
	}

	function xU(cr) {
		return e0 !== (e0 = cA.qG((cr - h8 - xH) / (cl - 2 * xH), 1 / 1024, 1)) && (xL(), !0)
	}
	this.h9 = 0, this.pc = !1, this.b = function() {
		pb = !hn && !cH, wK = !1, e0 = .5, xI = 0, this.pc = !1, this.resize()
	}, this.resize = function() {
		a0 && a1 < .8 * a2 ? (this.eu = Math.floor(.0536 * cb), cl = a1 - 4 * kq - this.eu) : (cl = Math.floor((a0 ? .65 : .389) * cb), cl += 12 - cl % 12, this.eu = Math.floor(cl / 12)), xH = Math.floor(3 * this.eu / 2), ck = ce + Math.floor(
			.5 * this.eu) + cf, (dC = document.createElement("canvas")).width = cl, dC.height = this.eu, (nT = dC.getContext("2d", {
			alpha: !0
		})).font = ck, nT.textBaseline = d0, cK.iH.textAlign(nT, 1), this.xK(), xL()
	}, this.xK = function() {
		h8 = a0 && a1 < .8 * a2 ? this.eu + 3 * kq : Math.floor((hG - cl) / 2), this.h9 = cu - this.eu - hM.uW() * kq
	}, this.ga = function() {
		wK && (wK = !1, xL())
	}, this.pb = function() {
		return !(!pb || cI.cJ && h8 < Math.floor(kq + 5.5 * this.eu))
	}, this.uV = function(cn) {
		return !!this.pb() && a1 - cn - kq < h8 + cl
	}, this.l = function() {
		pb = !cH
	}, this.x9 = function() {
		pb = !1
	}, this.cV = function() {
		return cA.qG(Math.floor(1024 * e0 + .5) - 1, 0, 1023)
	}, this.pl = function(cr, cs) {
		return this.pb() && h8 < cr && cr < h8 + cl && cs > this.h9
	}, this.cq = function(cr, cs) {
		return !!this.pb() && !!cU.pl(cr, cs) && (hr.hs = !1, function(tj, cr, cs) {
			if (function(cr, cs) {
					return h8 < cr && cr < h8 + xH && cs > cU.h9
				}(cr, cs)) return xT(xJ);
			if (function(cr, cs) {
					return h8 + cl - xH < cr && cr < h8 + cl && cs > cU.h9
				}(cr, cs)) return xT(1 / xJ);
			return tj.pc = !0, xU(cr)
		}(this, cr, cs) && (aL.co = !0), !0)
	}, this.px = function(i0) {
		0 !== gb && this.pb() && xT(i0) && (aL.co = !0)
	}, this.pB = function(deltaY) {
		var i0;
		return !(0 === deltaY || !this.pb()) && xT(i0 = 0 < deltaY ? (i0 = 400 / (400 + deltaY)) < xJ ? xJ : i0 : 1 / xJ < (i0 = (400 - deltaY) / 400) ? 1 / xJ : i0)
	}, this.p8 = function(cr, cs) {
		return !!this.pc && xU(cr)
	}, this.pg = function() {
		this.pc = !1
	}, this.fA = function() {
		this.pb() && xI !== cK.cL.dz(bN, this.cV()) && (wK = !0)
	}, this.cy = function() {
		this.pb() && cz.drawImage(dC, h8, this.h9)
	}
}

function so() {
	var dC, nT, xV, font, xW = 0,
		xX = !1,
		xY = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		xZ = 5;

	function vM() {
		if (xX) {
			var aE, bU = xY.length,
				vH = Math.floor(.5 * xV.eu),
				eu = bU * vH,
				h8 = Math.floor(Math.floor(xV.h8) + .3 * xV.cl - .5),
				h9 = Math.floor(Math.floor(xV.h9) - eu),
				cl = Math.floor(.4 * xV.cl + 2.5);
			for (cz.fillStyle = d2.iM, cz.fillRect(h8, h9, cl, eu), cz.fillStyle = d2.ii, cz.fillRect(h8, h9 + xZ * vH, cl, vH), cz.fillStyle = d2.d3, cz.fillRect(h8, h9, 2, eu), cz.fillRect(h8, h9, cl, 2), cz.fillRect(h8 + cl - 2, h9, 2, eu), aE =
				1; aE < bU; aE++) cz.fillRect(h8, h9 + aE * vH, cl, 2);
			for (cz.fillStyle = d2.d3, cK.iH.textAlign(cz, 1), cK.iH.textBaseline(cz, 1), cz.font = cK.iH.lW(.6 * vH, 0), h8 += .5 * cl, aE = 0; aE < bU; aE++) cz.fillText(xm(aE), h8, h9 + (aE + .6) * vH)
		}
		cz.drawImage(dC, Math.floor(xV.h8), Math.floor(xV.h9))
	}

	function cg(tj) {
		var h8, hD, hE, vH;
		nT.clearRect(0, 0, Math.floor(xV.cl), Math.floor(xV.eu)), nT.fillStyle = d2.iM, nT.fillRect(0, 0, Math.floor(xV.cl), Math.floor(xV.eu)), hq && (nT.fillStyle = d2.ii, nT.fillRect(0, 0, Math.floor(.3 * xV.cl), Math.floor(xV.eu))), nT
			.fillStyle = d2.d3, nT.fillText("Hide UI", .15 * xV.cl, .5 * xV.eu), nT.fillRect(Math.floor(.3 * xV.cl - .5), 0, 2, Math.floor(xV.eu)), h8 = .5 * xV.cl, nT.fillText("Replay Speed", h8, .31 * xV.eu), nT.fillText(xm(xZ), h8, .69 * xV.eu),
			nT.fillRect(Math.floor(.7 * xV.cl - .5), 0, 2, Math.floor(xV.eu)), tj.tr ? (h8 = Math.floor(.02 * xV.cl), tj = Math.floor(.025 * xV.cl), hD = Math.floor(.85 * xV.cl - h8 - .5 * tj), hE = Math.floor(.25 * xV.eu), vH = Math.floor(xV.eu) -
				2 * hE, nT.fillRect(hD, hE, h8, vH), nT.fillRect(hD + h8 + tj, hE, h8, vH)) : function() {
				var cl = Math.floor(.46 * xV.eu),
					eu = Math.floor(.23 * xV.eu),
					h8 = Math.floor(.85 * xV.cl - .5 * cl + cl / 12),
					h9 = Math.floor(.5 * xV.eu - eu);
				nT.beginPath(), nT.moveTo(h8, h9), nT.lineTo(h8 + cl, h9 + eu), nT.lineTo(h8, h9 + (eu << 1)), nT.fill()
			}(), nT.fillRect(0, 0, Math.floor(xV.cl), 2), nT.fillRect(0, 0, 2, Math.floor(xV.eu)), nT.fillRect(0, Math.floor(xV.eu) - 2, Math.floor(xV.cl), 2), nT.fillRect(Math.floor(xV.cl - 2), 0, 2, Math.floor(xV.eu))
	}

	function xm(aE) {
		return 5 === aE ? "Normal" : "" + xY[aE]
	}
	this.tr = !1, this.b = function() {
		cH && (xZ = 5, this.tr = !1, xX = !1, xV = new km([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.xa = function() {
		return xY[xZ]
	}, this.cx = function() {
		return xV.h9
	}, this.uV = function(cn) {
		return !!cH && xV.h8 + xV.cl > a1 - cn - kq
	}, this.resize = function() {
		cH && (xV.resize(), xV.h9 -= (hM.uW() - 1) * kq, font = cK.iH.lW(.3 * xV.eu, 0), (dC = document.createElement("canvas")).width = Math.floor(xV.cl), dC.height = Math.floor(xV.eu), (nT = dC.getContext("2d", {
			alpha: !0
		})).font = font, cK.iH.textAlign(nT, 1), cK.iH.textBaseline(nT, 1), cg(this))
	}, this.ps = function(xb) {
		xb !== hq && (hq = xb, gP.resize(), aL.co = !0, cH) && (xW = aL.aM + 2e3, cg(this))
	}, this.cq = function(h8, h9) {
		if (!cH) return !1;
		if (h8 < xV.h8 || h9 < xV.h9 || h8 > xV.h8 + xV.cl) return xX && function(tj, h8, h9) {
			var bU = xY.length,
				vH = Math.floor(.5 * xV.eu),
				eu = bU * vH,
				hD = Math.floor(Math.floor(xV.h8) + .3 * xV.cl - .5),
				eu = Math.floor(Math.floor(xV.h9) - eu),
				cl = Math.floor(.4 * xV.cl + 2.5);
			return xX = !1, aL.co = !0, h8 < hD || hD + cl < h8 || h9 < eu || (xZ = xe(0, Math.floor((h9 - eu) / vH), bU - 1), cg(tj)), !0
		}(this, h8, h9);
		if ((h8 -= xV.h8) < .3 * xV.cl) xX = !1, this.ps(!hq);
		else {
			if (h8 < .7 * xV.cl) return xX = !xX, aL.co = !0;
			this.pv(!1)
		}
		return !0
	}, this.pv = function(xd) {
		2 === gb ? (this.ps(!1), lU.show()) : (xX = !1, this.tr = !this.tr, this.tr ? cI.cJ ? cI.pu() : aJ(1) : xd || cI.ts(), aL.co = !0, cg(this))
	}, this.pV = function(h8, h9) {
		return !!hq && (cI.cq(h8, h9) || (cH ? ((aL.aM > xW || !this.cq(h8, h9)) && hr.cq(h8, h9), aL.co = !0, xW = aL.aM + 2e3) : hr.cq(h8, h9)), !0)
	}, this.fA = function() {
		cH && hq && aL.aM > xW - 1e3 && aL.aM < xW && (aL.co = !0)
	}, this.oT = function() {
		cH && (this.tr = !1, aL.co = !0, cg(this))
	}, this.cy = function() {
		if (cH) {
			if (hq) {
				if (aL.aM > xW) return;
				if (aL.aM > xW - 1e3) return cz.globalAlpha = xe(0, (1e3 - (aL.aM - (xW - 1e3))) / 1e3, 1), vM(), void(cz.globalAlpha = 1)
			}
			vM()
		}
	}
}

function sn() {
	var xV, lR, qS, vH;
	this.pb = !1, this.lT = !1, this.u3 = function() {
		return !fm.fn && az.me !== az.xn() && (cH || 2 === gb)
	}, this.show = function() {
		this.pb = !0, xV || (xV = new km([.55, .35], [.5, .5]), (lR = new lQ).b()), this.resize(), 0 === gb ? lR.lY("") : (gR.kA.xr.length || (gR.kA.xr = gR.xu.o3()), lR.lY(gR.xv(gR.kA.xr))), lR.show(), aL.co = !0, pn.l(!1)
	}, this.lP = function() {
		this.pb && (this.pb = !1, this.lT = !1, lR.lP(), aL.co = !0, 0 === gb && rn.lb(), 0 === aT.pp()) && pn.l(!0)
	}, this.resize = function() {
		this.pb && (xV.resize(), qS = .03 * xV.eu, vH = .2 * xV.eu, lR.resize(xV.h8 + qS, xV.h9 + vH + qS, xV.cl - 2 * qS, xV.eu - 2 * (vH + qS)))
	}, this.cq = function(h8, h9) {
		return !!this.pb && (h8 < xV.h8 || h9 < xV.h9 || h8 > xV.h8 + xV.cl || h9 > xV.h9 + xV.eu ? 2 !== cI.cq(h8, h9) && this.lP() : h9 < xV.h9 + xV.eu - vH ? h8 > xV.h8 + xV.cl - vH && h9 < xV.h9 + vH && this.lP() : (h8 -= xV.h8) < .25 * xV
			.cl ? lR.la() : h8 < .5 * xV.cl ? lR.lc() : h8 < .75 * xV.cl ? lR.lb() : (h9 = this, h8 = gR.xq(lR.lZ()), h9.lP(), (0 < h8.length && h8 === gR.kA.xr || gR.xt.m0(h8)) && gR.xs()), !0)
	}, this.cy = function() {
		var aE;
		if (this.pb)
			for (cK.iH.textAlign(cz, 1), cz.fillStyle = d2.is, cz.fillRect(xV.h8, xV.h9, xV.cl, vH), cz.fillStyle = d2.iM, cz.fillRect(xV.h8, xV.h9 + vH, xV.cl, xV.eu - vH), cz.fillStyle = d2.d3, cz.fillRect(xV.h8, xV.h9, 2, xV.eu), cz.fillRect(
					xV.h8, xV.h9, xV.cl, 2), cz.fillRect(xV.h8 + xV.cl - 2, xV.h9, 2, xV.eu), cz.fillRect(xV.h8, xV.h9 + xV.eu - 2, xV.cl, 2), cz.fillRect(xV.h8 + 1, xV.h9 + vH, xV.cl - 2, 2), cz.fillRect(xV.h8 + 1, xV.h9 + xV.eu - vH, xV.cl - 2,
					2), cz.font = ce + Math.floor(.39 * vH) + cf, cz.fillText("Replay", xV.h8 + .5 * xV.cl, xV.h9 + .55 * vH), cI.u4(xV.h8 + xV.cl - .725 * vH, xV.h9 + .275 * vH, .45 * vH), cz.setTransform(1, 0, 0, 1, 0, 0), cz.font = cK.iH.lW(
					.3 * vH, 0), cz.fillText("Select All", xV.h8 + .125 * xV.cl, xV.h9 + xV.eu - .48 * vH), cz.fillText("Copy", xV.h8 + .375 * xV.cl, xV.h9 + xV.eu - .48 * vH), cz.fillText("Clear", xV.h8 + .625 * xV.cl, xV.h9 + xV.eu - .48 * vH),
				cz.fillText("Launch", xV.h8 + .875 * xV.cl, xV.h9 + xV.eu - .48 * vH), aE = 1; aE < 4; aE++) cz.fillRect(xV.h8 + .25 * aE * xV.cl - 1, xV.h9 + xV.eu - vH + 1, 2, vH - 2)
	}
}

function s0() {
	var xx, xy, cl, h8, h9, xz, y0;
	this.b = function() {
		xx = new Array(2), xy = new Array(2), this.hs = !1, y0 = xz = e3 = e1 = 0, e2 = 1, this.resize()
	}, this.resize = function() {
		cl = (cl = Math.floor((a0 ? .072 : .0502) * cb)) < 8 ? 8 : cl;
		for (var aE = 1; 0 <= aE; aE--) xx[aE] = document.createElement("canvas"), xx[aE].width = cl, xx[aE].height = cl, xy[aE] = xx[aE].getContext("2d", {
			alpha: !0
		});
		this.xK(),
			function() {
				for (var yG = Math.floor(1 + cl / 20), aE = 1; 0 <= aE; aE--) xy[aE].clearRect(0, 0, cl, cl), xy[aE].fillStyle = d2.iJ, xy[aE].beginPath(), xy[aE].arc(cl / 2, cl / 2, cl / 2 - yG, 0, 2 * Math.PI), xy[aE].fill(), xy[aE].lineWidth =
					yG, xy[aE].fillStyle = d2.d3, xy[aE].strokeStyle = d2.d3, xy[aE].beginPath(), xy[aE].arc(cl / 2, cl / 2, cl / 2 - yG, 0, 2 * Math.PI), xy[aE].stroke(), nW(xy[aE], 0, 0, cl, yG, .3, 0 === aE)
			}()
	}, this.hI = function() {
		return -e1 / e2
	}, this.cx = function() {
		return -e3 / e2
	}, this.i2 = function(y4, dj) {
		e1 = e2 * y4 - dj
	}, this.i3 = function(y5, dk) {
		e3 = e2 * y5 - dk
	}, this.cq = function(y3, uX) {
		return hq || ! function(y3, uX) {
			return Math.pow(y3 - (h8 + cl / 2), 2) + Math.pow(uX - (h9 + cl / 2), 2) < cl * cl / 4 || Math.pow(y3 - (h8 + cl / 2), 2) + Math.pow(uX - (h9 + 2 * cl), 2) < cl * cl / 4
		}(y3, uX) || hM.hN.y6 ? (gT.i6() && (this.hs = !0, xz = y3, y0 = uX), !1) : uX < h9 + 1.25 * cl ? this.pB(Math.floor(hG / 2), Math.floor(cu / 2), -200) : this.pB(Math.floor(hG / 2), Math.floor(cu / 2), 200)
	}, this.p8 = function(y3, uX) {
		var y7, y8, dm, dq;
		return !gT.i6() || (y7 = e1, y8 = e3, e1 += dm = xz - y3, e3 += dq = y0 - uX, g3.p8(dm, dq), this.y9(), xz = y3, y0 = uX, y7 !== e1) || y8 !== e3
	}, this.pB = function(cr, cs, deltaY) {
		var i0;
		if (gT.i6()) {
			if (0 < deltaY) i0 = (i0 = 500 / (500 + deltaY)) < .5 ? .5 : i0;
			else {
				if (!(deltaY < 0)) return !1;
				i0 = 2 < (i0 = (500 - deltaY) / 500) ? 2 : i0
			}
			this.yA(cr, cs, i0), aL.co = !0
		}
		return !0
	}, this.yA = function(h8, h9, df) {
		var cZ;
		df = cZ = (cZ = 1024 < (cZ = df) * e2 ? 1024 / e2 : cZ) * e2 < .125 ? .125 / e2 : cZ, g3.zoom(df, h8, h9),
			function(cZ, cr, cs) {
				e2 *= cZ, e1 = (e1 + cr) * cZ - cr, e3 = (e3 + cs) * cZ - cs, hr.y9()
			}(df, h8, h9)
	}, this.y9 = function() {
		var yD = a1 / 16,
			dM = 0,
			yE = a2 / 16,
			dO = 0;
		e1 < yD - a1 && (dM = yD - a1 - e1), e1 > e2 * az.b0 - yD && (dM = e2 * az.b0 - yD - e1), e3 < yE - a2 && (dO = yE - a2 - e3), e3 > e2 * az.b1 - yE && (dO = e2 * az.b1 - yE - e3), e1 += dM, e3 += dO, i4.i5(), g3.yF(dM, dO)
	}, this.xK = function() {
		h8 = hG - cl - kq, h9 = Math.floor(cu / 2 - 1.25 * cl)
	}, this.cy = function() {
		hM.hN.y6 || (cz.drawImage(xx[0], h8, h9), cz.drawImage(xx[1], h8, Math.floor(h9 + 3 * cl / 2)))
	}
}

function s1() {
	var ad, mi, yH, yI, l5, yJ, yK, yL, yM, yN, ck, yO, yP, yQ, yR, wO, yS, yT, yU;

	function yY() {
		yI = Math.floor(.2 * (a0 ? .07 : .035) * cb), yI = uT(a0 ? 3 : 1, yI);
		var yd = a1 / (ad.length + l5);
		yI = yI < yd ? yd : yI, wO = Math.floor((1 - l5) * yI), mi = 0, ye()
	}

	function ye() {
		mi = (mi = mi < -20 ? -20 : mi) > (ad.length - 15) * yI ? (ad.length - 15) * yI : mi, yK = Math.floor(mi / yI), yL = (yL = yK + Math.floor(hG / yI)) > ad.length - 1 ? ad.length - 1 : yL, yK = (yK = yL < yK ? yL : yK) < 0 ? 0 : yK;
		var m2 = yL;
		yJ = yH / ad[m2];
		for (var aE = yL - 1; yK <= aE; aE--) ad[aE] > ad[m2] && (m2 = aE, yJ = yH / Math.pow(ad[aE], yR))
	}

	function yh(h8) {
		h8 = Math.floor((mi + hG - h8 - l5 * yI) / yI);
		return (h8 = h8 < -1 ? -1 : -1 === h8 ? 0 : h8 > ad.length - 1 ? -1 : h8) !== yM && (yM = h8, -1 === yS && 0 === yM && yQ && (yS = setInterval(yi, 100)), 1)
	}

	function yj(aE) {
		var wD = Math.floor(yJ * Math.pow(ad[aE], yR));
		cz.fillRect(mi + hG - (aE + 1) * yI, cu - wD, wO, wD)
	}

	function yi() {
		var bc;
		0 !== (yM = 8 === aT.pp() ? -1 : yM) ? (yT = (new Date).getTime(), clearInterval(yS), yS = -1) : (bc = ad[1] / 864e3, -1 !== yT && (bc += ((new Date).getTime() - yT) * ad[1] / 864e5, yT = -1), 0 < bc && (ad[0] += Math.floor(bc), aL.co = !0))
	}
	this.b = function() {
		yQ = !(yT = yS = -1), yM = -(yR = 1), this.yV = !1, yP = 0, yO = new Date, mi = 0, l5 = .3, (yU = []).push({
			ux: "Plateau A",
			bU: 0,
			lk: 57
		}), yU.push({
			ux: "Max A",
			bU: 1,
			lk: 1
		}), yU.push({
			ux: "Black Friday",
			bU: 15,
			lk: 15
		}), yU.push({
			ux: "Max B",
			bU: 19,
			lk: 19
		}), yU.push({
			ux: "Max C",
			bU: 44,
			lk: 44
		}), yU.push({
			ux: "First Android Version",
			bU: 58,
			lk: 58
		}), yU.push({
			ux: "Max D",
			bU: 67,
			lk: 67
		}), yU.push({
			ux: "The iFrame Explosion",
			bU: 98,
			lk: 99
		}), yU.push({
			ux: "The 155-Day Uptrend",
			bU: 58,
			lk: 213
		}), yU.push({
			ux: "Max E",
			bU: 213,
			lk: 213
		}), yU.push({
			ux: "Plateau B",
			bU: 214,
			lk: 259
		}), yU.push({
			ux: "Turbulent Times",
			bU: 260,
			lk: 344
		}), yU.push({
			ux: "Max F",
			bU: 262,
			lk: 262
		}), yU.push({
			ux: "Max G",
			bU: 282,
			lk: 282
		}), yU.push({
			ux: "Max H",
			bU: 333,
			lk: 333
		}), yU.push({
			ux: "The 19-Day Downtrend",
			bU: 283,
			lk: 301
		}), yU.push({
			ux: "Plateau C",
			bU: 345,
			lk: 385
		}), yU.push({
			ux: "The Alliance Ascent",
			bU: 386,
			lk: 395
		}), yU.push({
			ux: "Max I",
			bU: 395,
			lk: 395
		}), yU.push({
			ux: "First iOS Version",
			bU: 411,
			lk: 411
		}), yU.push({
			ux: "Plateau D",
			bU: 396,
			lk: 453
		}), yU.push({
			ux: "The TikTok Revolution",
			bU: 454,
			lk: 470
		}), yU.push({
			ux: "Max J",
			bU: 456,
			lk: 456
		}), yU.push({
			ux: "Max K",
			bU: 472,
			lk: 472
		}), yU.push({
			ux: "Max L",
			bU: 478,
			lk: 478
		}), yU.push({
			ux: "YT Drew",
			bU: 471,
			lk: 485
		}), yU.push({
			ux: "Plateau E",
			bU: 485,
			lk: 600
		}), yU.push({
			ux: "Uptrend A",
			bU: 600,
			lk: 613
		}), yU.push({
			ux: "Max M",
			bU: 613,
			lk: 613
		}), yU.push({
			ux: "Downtrend A",
			bU: 614,
			lk: 635
		}), yU.push({
			ux: "Plateau F",
			bU: 636,
			lk: 737
		}), yU.push({
			ux: "End of Record",
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
		], this.resize(), g6.yX(0, 0)
	}, this.resize = function() {
		yH = Math.floor(.15 * a2), yN = Math.floor((a0 ? .018 : .0137) * cb), ck = ce + (yN = yN < 2 ? 2 : yN) + cf, yY()
	}, this.yZ = function() {
		yQ || jG.ya()
	}, this.yb = function(yc) {
		var aE;
		for (yQ = !0, aE = 0; aE < yc.length; aE++) ad.unshift(yc[aE]);
		yY(), aL.co = !0
	}, this.yf = function() {
		ye()
	}, this.p8 = function(h8, h9) {
		cu - .6 * yH < h9 ? this.yV ? h8 !== yP && (mi += h8 - yP, yP = h8, ye(), yh(h8), this.yV = -1 !== yM, aL.co = !0) : yh(h8) && (aL.co = !0) : this.pe()
	}, this.pe = function() {
		-1 !== yM && (this.yV = !1, yM = -1, aL.co = !0)
	}, this.pB = function(h8, deltaY) {
		-1 !== yM && (mi += Math.floor(deltaY), ye(), yh(h8), aL.co = !0)
	}, this.cq = function(h8, h9) {
		this.p8(h8, h9), -1 !== yM && (yP = h8, this.yV = !0)
	}, this.pf = function() {
		-1 !== yM && (this.yV = !1)
	}, this.cy = function() {
		cz.fillStyle = d2.iS;
		for (var yl, month, a3, nZ, yo, yp, hE, yq, yr, aE = yL; yK <= aE; aE--) yj(aE);
		yQ && 0 === yK && (cz.fillStyle = d2.ip, yj(0)), -1 !== yM && (cz.fillStyle = d2.iR, yj(yM)), -1 !== yM && (cz.font = ck, cz.textBaseline = w0, (a3 = new Date).setTime(yO.getTime() - 1e3 * yM * 60 * 60 * 24), month = "month", yl = "day",
			"undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(a3), yl = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(a3)), yl = yl + ", " + a3.getUTCDate() + " " + month + " " + a3.getFullYear(), month = 1 === ad[yM] ? " second played" : " seconds played", month = cK.hP.hQ(ad[yM]) + month, a3 = Math.floor(cz.measureText(yl).width),
			nZ = Math.floor(cz.measureText(month).width), yo = Math.floor(.5 * (a3 + yN)), yp = (yp = mi + hG - (yM + 1) * yI) < yo ? yo : hG - yo < yp ? hG - yo : yp, hE = cu - Math.floor(yJ * Math.pow(ad[yM], yR)), yq = Math.floor(1.1 *
			yN), yr = cu - yq < hE ? cu - yq : hE, cz.fillStyle = d2.iN, cz.fillRect(hG - nZ - yN, yr - yq, nZ + yN, yq), cz.fillRect(yp - yo, cu - yq, a3 + yN, yq), cz.fillStyle = d2.d3, cz.textAlign = w1, cz.fillText(month, Math.floor(hG -
				.5 * yN), yr),
			function(hE, yq) {
				for (var nY, t7 = -1, cd = ad.length - yM - 1, aE = yU.length - 1; 0 <= aE; aE--) cd >= yU[aE].bU && cd <= yU[aE].lk && (-1 === t7 || yU[aE].lk - yU[aE].bU < yU[t7].lk - yU[t7].bU) && (t7 = aE); - 1 !== t7 && (nY = Math.floor(
					cz.measureText(yU[t7].ux).width), cz.fillStyle = d2.iN, cz.fillRect(hG - nY - yN, hE, nY + yN, yq), cz.fillStyle = d2.d3, cz.fillText(yU[t7].ux, Math.floor(hG - .5 * yN), hE + yq))
			}(yr - 2 * yq, yq), cz.textAlign = d1, cz.fillText(yl, yp, cu), cz.strokeStyle = d2.iT, cz.lineWidth = 1, cz.beginPath(), cz.moveTo(0, hE), cz.lineTo(hG, hE), cz.closePath(), cz.stroke())
	}
}

function s2() {
	var ck, cl, h9, yt, yu, dC, nT, wK, qd, yv, yw, yx, yy;
	this.h8 = 0, this.eu = 0, this.b = function() {
		yu = n7, yw = "rgba(0,100,0,0.8)", yx = "rgba(150,0,0,0.8)", wK = !(yv = !0), qd = bO[bN], this.resize()
	}, this.resize = function() {
		cl = Math.floor((a0 ? .305 : .24) * cb), this.eu = Math.floor(.5 + .13 * cl), cl = Math.floor(6 * this.eu), ck = ce + Math.floor(.8 * this.eu) + cf, yy = Math.floor(.5 * this.eu), az.mC.font = ck, h9 = kq, yt = Math.floor(1 + .13 * this
			.eu), (dC = document.createElement("canvas")).width = cl, dC.height = this.eu, (nT = dC.getContext("2d", {
			alpha: !0
		})).font = ck, nT.textBaseline = d0, nT.textAlign = d1, this.yz()
	}, this.wg = function() {
		return a0 && a1 < 1.2 * a2
	}, this.xK = function() {
		this.wg() ? this.h8 = hG - cl - kq : this.h8 = Math.floor(gI.z0() + (hG - gI.z0() - g4.cl - cl) / 2 - .5 * kq)
	}, this.ga = function() {
		wK && (wK = !1, this.yz())
	}, this.yz = function() {
		nT.clearRect(0, 0, cl, this.eu), nT.fillStyle = yv ? yw : yx, nT.fillRect(0, 0, cl, this.eu), nT.fillStyle = d2.iR, this.z1(), this.z2(), nT.fillStyle = bO[bN] >= bP.fE(bN) ? d2.il : d2.d3, nT.fillText(cK.hP.hQ(qd), Math.floor(cl / 2),
			yy), nT.fillStyle = d2.d3, nT.fillRect(0, 0, cl, 1), nT.fillRect(0, 0, 1, this.eu), nT.fillRect(0, this.eu - 1, cl, 1), nT.fillRect(cl - 1, 0, 1, this.eu)
	}, this.z1 = function() {
		var mq = xE(Math.floor((bP.z3() - 1) * this.eu / 9), this.eu - yt);
		nT.fillRect(0, mq, yt, this.eu - mq), nT.fillRect(cl - yt, mq, yt, this.eu - mq)
	}, this.z2 = function() {
		nT.fillRect(yt, this.eu - yt, Math.floor((cl - 2 * yt) * bO[bN] / yu), yt)
	}, this.fA = function() {
		0 !== dw[bN] && 2 !== dx[bN] && qd !== bO[bN] && (yu = uT(bO[bN], yu), yv = bO[bN] > qd && 10 <= bO[bN], qd = bO[bN], wK = !0)
	}, this.cy = function() {
		0 === dw[bN] || hn || 2 === dx[bN] || cz.drawImage(dC, this.h8, h9)
	}
}

function s3() {
	var z5, z6, z7, z8, z9, zA, zB, zC, zD, zE, zF, zG, zH, zI, zJ, zK, zL, zM, zN, title, zO, zP, zQ, zR, zS, position, zT, zU, zV, zW, zX = 1;

	function za() {
		zB.clearRect(0, 0, z5, ww), zB.fillStyle = d2.iy, zB.fillRect(0, 0, z5, zG), zB.fillStyle = d2.iM, zB.fillRect(0, zG, z5, ww - zG), z4[bN] >= position && zd(z4[bN] - position, d2.ii), 0 !== z4[bN] && 0 === position && zd(0, d2.j2), -1 !==
			zS && zd(zS, d2.iQ), zB.fillStyle = d2.d3, zB.fillRect(0, zG, z5, 1), zB.fillRect(0, 0, z5, w5), zB.fillRect(0, 0, w5, ww), zB.fillRect(z5 - w5, 0, w5, ww), zB.fillRect(0, ww - w5, z5, w5), zB.font = z6, zB.textBaseline = d0, zB
			.textAlign = d1, zB.fillText(title, Math.floor(z5 / 2), Math.floor(zE + z7 / 2));
		var eb, bd = z4[bN] < position + z9 - 1 ? 1 : 2;
		for (zB.font = z8, zB.textAlign = ub, eb = z9 - bd; 0 <= eb; eb--) ze(gm[eb + position]), zf(eb, eb + position, gm[eb + position]);
		for (zB.textAlign = w1, eb = z9 - bd; 0 <= eb; eb--) ze(gm[eb + position]), zg(eb, gm[eb + position]);
		2 == bd && (ze(bN), zB.textAlign = ub, zf(z9 - 1, z4[bN], bN), zB.textAlign = w1, zg(z9 - 1, bN)), 0 === position && (bd = .7 * zH / ch.get(4).height, zB.setTransform(bd, 0, 0, bd, Math.floor(zI + .58 * zH + .5 * bd * ch.get(4).width), Math
			.floor(zE + z7 + .4 * zH)), zB.imageSmoothingEnabled = !0, zB.drawImage(ch.get(4), -Math.floor(ch.get(4).width / 2), -Math.floor(ch.get(4).height / 2)), zB.setTransform(1, 0, 0, 1, 0, 0))
	}

	function ze(player) {
		eO && (zB.fillStyle = fR.zi[fR.ob[fR.fS[player]]])
	}

	function zd(aE, tC) {
		zB.fillStyle = tC, aE = z9 - 1 < aE ? z9 - 1 : aE;
		tC = Math.floor((aE === z9 - 1 ? 2 : 0 === aE ? 1.15 : 1) * zH), tC = aE === z9 - 2 ? Math.floor(zG + 9.15 * zH) - Math.floor(zG + 8.15 * zH) : tC;
		zB.fillRect(0, Math.floor(zG + (aE + (0 === aE ? 0 : .15)) * zH), z5, tC)
	}

	function zf(zk, zl, aE) {
		zB.fillText(zO[zl], zI, Math.floor(zE + z7 + (zk + .5) * zH)), 1 === dx[aE] && (zB.font = w2 + z8);
		zl = Math.floor(zE + z7 + (zk + .5) * zH);
		zB.fillText(zM[aE] === aE ? hR[aE] : zL[zM[aE] % bZ], zJ, zl), 0 !== dx[aE] && (zB.font = z8), aE < dv && 2 !== dx[aE] || zB.fillRect(zJ, zl + .35 * zX, zN[aE], Math.max(1, .1 * zX))
	}

	function zg(zk, aE) {
		zB.fillText(bv[aE], zK, Math.floor(zE + z7 + (zk + .5) * zH))
	}

	function zu(h9) {
		return (h9 -= kq + zG) < 0 ? Math.floor(h9 / zH) - 1 : h9 < (z9 - 1) * zH ? Math.floor(h9 / zH) : h9 < ww - zG ? z9 - 1 : (h9 -= ww - zG, z9 + Math.floor(h9 / zH))
	}

	function tg(h8, h9) {
		return kq <= h8 && h8 < kq + z5 && kq <= h9 && h9 < kq + ww
	}
	this.b = function() {
		var aE, v, eb;
		for (zU = !1, title = "LEADERBOARD", z9 = a0 ? 6 : 10, position = zW = zV = zT = 0, zR = !(zS = -1), zP = new Uint16Array(z9 + 1), zQ = new Uint32Array(z9 + 1), zD = bZ, gm = new Uint16Array(zD), z4 = new Uint16Array(zD), aE = zD -
			1; 0 <= aE; aE--) gm[aE] = aE, z4[aE] = aE;
		this.resize(!0), zL = [], zM = new Uint16Array(bZ), zN = new Uint16Array(bZ);
		var zY = Math.floor(z5 - zJ - zI - zC),
			zZ = 0;
		for (zO = new Array(bZ), zB.font = z8, aE = bZ - 1; 0 <= aE; aE--)
			if (zO[aE] = aE + 1 + ".", zM[aE] = aE, zN[aE] = Math.floor(zB.measureText(hR[aE]).width), zN[aE] > zY) {
				for (v = hR[aE], eb = hR[aE].length - 1; 1 <= eb && (v = v.substring(0, eb), zN[aE] = Math.floor(zB.measureText(v + "...").width), !(zN[aE] <= zY)); eb--);
				v += "...", zL.push(v), zM[aE] = bZ + zZ++
			} za()
	}, this.resize = function(b) {
		if (ww = a0 ? (z5 = Math.floor(.335 * cb), Math.floor(z9 * z5 / 8)) : (z5 = Math.floor(.27 * cb), Math.floor(z9 * z5 / 10)), z5 = Math.floor(.97 * z5), (zA = document.createElement("canvas")).width = z5, zA.height = ww, zB = zA
			.getContext("2d", {
				alpha: !0
			}), zE = .025 * z5, z7 = .16 * z5, zF = 0 * z5, zG = Math.floor(.45 * zE + z7), zH = (ww - z7 - 2 * zE - zF) / z9, z6 = ce + Math.floor(.55 * z7) + cf, zX = Math.floor((a0 ? .67 : .72) * zH), z8 = zX + cf, zB.font = z8, zI = Math
			.floor(.04 * z5), zJ = Math.floor((a0 ? .195 : .18) * z5), zC = Math.floor(zB.measureText("00920600").width), zB.font = z6, zK = z5 - zI, !b) {
			zB.font = z8;
			for (var aE = bZ - 1; 0 <= aE; aE--) zN[aE] = Math.floor(zB.measureText(zM[aE] === aE ? hR[aE] : zL[zM[aE] % bZ]).width);
			za()
		}
	}, this.z0 = function() {
		return z5
	}, this.ga = function(v9) {
		zR && (v9 || aL.fP() % hM.zb[hM.hN.zc] == 0) && (zR = !1, za())
	}, this.fA = function() {
		! function() {
			for (var eb = zD - 1; 0 <= eb; eb--) 0 === dw[gm[eb]] && ! function(eb) {
				var zs = gm[eb];
				zD--;
				for (var aE = eb; aE < zD; aE++) gm[aE] = gm[aE + 1], z4[gm[aE]] = aE;
				gm[zD] = zs, z4[gm[zD]] = zD
			}(eb)
		}();
		for (var zq, i6 = zD - 1, eb = 0; eb < i6; eb++) bv[gm[eb]] < bv[gm[eb + 1]] && (zq = gm[eb], gm[eb] = gm[eb + 1], gm[eb + 1] = zq, z4[gm[eb]] = eb, z4[gm[eb + 1]] = eb + 1);
		! function() {
			for (var a3 = zR, bd = (zR = !0, z4[bN] >= z9 - 1 ? z9 - 2 : z9 - 1), aE = bd; 0 <= aE; aE--)
				if (zP[aE] !== gm[aE] || zQ[aE] !== bv[gm[aE]]) return;
			(bd != z9 - 2 || zP[z9] === z4[bN] && zQ[z9] === bv[bN]) && (zR = a3)
		}();
		for (var aE = z9 - 1; 0 <= aE; aE--) zP[aE] = gm[aE], zQ[aE] = bv[gm[aE]];
		zP[z9] = z4[bN], zQ[z9] = bv[bN]
	}, this.cq = function(h8, h9) {
		return !!tg(h8, h9) && (zT = aL.aM, zU = !0, zV = zW = zu(h9), pX.q1() && (h8 = xe(-1, zW, z9), zS !== (h8 = h8 === z9 ? -1 : h8)) && (zS = h8, za(), aL.co = !0), !0)
	}, this.p8 = function(h8, h9) {
		var a3, zt = zu(h9);
		return zU ? (a3 = position, (position = xe(0, position += zV - zt, bZ - z9)) !== a3 && (zt = (zt = xe(-1, zV = zt, z9)) !== z9 && tg(h8, h9) ? zt : -1, zS = zt, za(), aL.co = !0), !0) : (zt = (zt = xe(-1, zt, z9)) === z9 || !tg(h8, h9) ||
			pX.q1() ? -1 : zt, zS !== zt && (zS = zt, za(), aL.co = !0))
	}, this.pf = function(h8, h9) {
		if (!zU) return !1;
		zU = !1;
		var zt = zu(h9);
		return pX.q1() && -1 !== zS && (zS = -1, za(), aL.co = !0), aL.aM - zT < 350 && zW === zt && -1 !== (zt = (zt = xe(-1, zt, z9)) !== z9 && tg(h8, h9) ? zt : -1) && (h8 = gm[zt + position], zt === z9 - 1 && z4[bN] >= position + z9 - 1 && (
			h8 = bN), eO && displayDonationsHistory(h8, hR, fs), 0 !== dw[h8]) && gT.ho(h8, 800, !1, 0), !0
	}, this.pB = function(h8, h9, deltaY) {
		var zv;
		return !(zU || hq || (zv = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !tg(h8, h9)) || (h8 = (h8 = xe(-1, zu(h9), z9)) === z9 || pX.q1() ? -1 : h8, 0 < deltaY ? position < bZ - z9 && (position += Math.min(bZ - z9 - position, zv), zS =
			h8, za(), aL.co = !0) : 0 < position && (position -= Math.min(position, zv), zS = h8, za(), aL.co = !0), 0))
	}, this.cy = function() {
		cz.drawImage(zA, kq, kq)
	}
}

function s4() {
	var dC, nT, h8, h9, wD, zw, l5, zx, cj, zy, tm, bS, zz, a00, a01, a02, a03, a04;

	function a07() {
		nT.clearRect(0, 0, g4.cl, g4.eu), nT.fillStyle = d2.iN, nT.fillRect(0, 0, g4.cl, g4.eu), nT.fillStyle = d2.ic, df = 0 < a01 ? a01 : Math.sqrt(bS[4] / 1e4), nT.fillRect(0, g4.eu - wD - 1, Math.floor(df * g4.cl), wD), nT.fillStyle = d2.d3, nT
			.fillRect(0, 0, g4.cl, 1), nT.fillRect(0, 0, 1, g4.eu), nT.fillRect(g4.cl - 1, 0, 1, g4.eu), nT.fillRect(0, g4.eu - 1, g4.cl, 1), nT.fillRect(0, g4.eu - wD - 1, g4.cl, 1);
		for (var df, a09, a3 = 0, aE = 0; aE < tm.length; aE++) zz[aE] ? (nT.textAlign = ub, a09 = Math.floor((zw - wD + 2 * zx) * (aE - a3 + 1) / (tm.length + 1) - .7 * zx), nT.fillText(tm[aE], l5, a09), nT.textAlign = w1, 5 === aE && 0 !== dw[
			bN] && bO[bN] >= bP.fE(bN) ? (nT.fillStyle = d2.j0, nT.fillText(a06(aE), g4.cl - l5, a09), nT.fillStyle = d2.d3) : nT.fillText(a06(aE), g4.cl - l5, a09)) : a3++
	}

	function a06(aE) {
		return aE < 3 ? bS[aE].toString() : 3 === aE || 4 === aE || 5 === aE ? cK.hP.qs(bS[aE] / 100, 2) : aE < 7 ? cK.hP.hQ(bS[aE]) : aE === 7 ? g4.z3(bS[7]) : aE === 8 ? utils.getMaxTroops(bv, bN) : utils.getDensity(bO, bv, bN)
	}

	function a05() {
		bv[bN] !== bS[6] && (bS[6] = bv[bN], zy++)
	}
	this.b = function() {
		a01 = a02 = 0, (tm = new Array(8))[0] = "Humans", tm[1] = fs ? "Players" : "Bots", tm[2] = "Spectators", tm[3] = "Threshold", tm[4] = "Occupation", tm[5] = "Interest", tm[6] = "Income", tm[7] = "Time", tm.push("Max Troops", "Density"),
			a04 = r6 - bJ(r6, 100), (bS = new Array(tm.length))[0] = fs ? 0 : dv, bS[1] = fs ? fT : fl, bS[2] = oQ, bS[3] = 0, bS[4] = bJ(1e4 * bv[0], r6), bS[5] = 700, bS[6] = 0, a05(), bS[7] = 0, a00 = a06(6), zz = new Array(tm.length);
		for (var aE = tm.length - 1; 0 <= aE; aE--) zz[aE] = !0;
		a03 = 0, a03 = fs ? (zz[0] = !1, zz[2] = !1, zz[3] = !1, 3) : (zz[3] = !1, 1), zy = 0, this.resize()
	}, this.resize = function() {
		this.cl = Math.floor((a0 ? .1646 : .126) * 1.25 * cb), this.eu = Math.floor(1.18 * this.cl), wD = Math.floor(.04 * this.cl), l5 = Math.floor(.035 * this.cl), zx = .04 * this.cl, zw = this.eu, this.eu -= Math.floor(a03 * (this.eu - 2 *
			wD) / tm.length), cj = Math.floor(.7 * (zw - wD) / tm.length), cj = ce + cj + cf, (dC = document.createElement("canvas")).width = this.cl, dC.height = this.eu, (nT = dC.getContext("2d", {
			alpha: !0
		})).font = cj, nT.textBaseline = d0, nT.lineWidth = 1, this.r0(), this.xK(), gL.xK(), a07()
	}, this.xK = function() {
		h8 = hG - this.cl - kq
	}, this.a08 = function() {
		h9 = kq
	}, this.r0 = function() {
		h9 = kq + (gL.wg() && 0 !== dw[bN] && !hn ? gL.eu + kq : 0)
	}, this.ga = function(v9) {
		0 < zy && (v9 || 100 <= zy) && (zy = 0, a07())
	}, this.tK = function() {
		return bS[7]
	}, this.z3 = function(value) {
		var m2 = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * m2) / 1e3);
		return value < 10 ? m2 + ":0" + value : m2 + ":" + value
	}, this.fA = function() {
		var a0J, per;
		zz[0] && oR - oQ !== bS[0] && (bS[0] = oR - oQ, zy++), fT - bS[0] !== bS[1] && (bS[1] = fT - bS[0], zy++), this.g5(), (a0J = bP.a0K(bN)) !== bS[5] && (bS[5] = a0J, zy++), a05(), bS[7] += aL.a0L, a0J = a06(7), a00 !== a0J && (a00 = a0J,
			zy += 100), a0J = eO ? gP.od() : bv[gm[0]], per = bJ(1e4 * a0J, r6), bS[3] = a0J, bS[4] !== per && (zy++, bS[4] = per), 8 === fq && function() {
			if (0 === dw[0]) g7.oA.oI(1);
			else {
				if (0 !== dw[1]) return;
				g7.oA.oI(0)
			}
			return 1
		}() || bS[3] < a04 || bS[3] !== r6 && ! function() {
			for (var aE = fT - 1; 0 <= aE; aE--)
				if (0 < bV[fU[aE]].length) return;
			return 1
		}() || g7.oA.oI(-1)
	}, this.g5 = function() {
		zz[2] && oQ !== bS[2] && (bS[2] = oQ, zy++)
	}, this.a0M = function(aE) {
		var qQ, a0N, a3;
		return 2 !== gb && (aE === rA ? (a01 = 0, a07(), !1) : (-1 !== aE || 0 !== a02) && (a0N = a01, a01 = cH ? aE / rA : (a3 = performance.now(), 0 <= aE && (qQ = a3 - 392 * aE, a02 = 0 === aE || qQ < a02 ? qQ : a02), 1 < (a01 = (a3 - a02) / (
			392 * rA)) ? 1 : a01), a07(), a01 !== a0N))
	}, this.cy = function() {
		cz.drawImage(dC, h8, h9)
	}
}

function s5() {
	var pb, a0O, cl, eu, vH, a0P, a0Q, wh, dC, he, a0R;

	function cx() {
		return Math.floor((hG - cl) / 2) < cU.eu + 2 * kq ? cu - eu - 4 * kq - cU.eu : cu - eu - 2 * kq
	}
	this.a0S = -1, this.b = function() {
		a0R = pb = !1, vH = .61, a0P = .07, a0Q = .09, he = wh = eu = 0, this.a0S = -1
	}, this.resize = function() {
		var nT, hD, fQ, a0X, a0Y, tq;
		pb && (cl = xE(cl = a0 ? Math.floor(.69 * cb) : Math.floor(.5 * cb), uT(a1 - 2 * kq, 10)), cl = xE(cl, Math.floor(3.57 * uT(a2 - 2 * kq, 3))), eu = Math.floor(.28 * cl), (dC = document.createElement("canvas")).width = cl, dC.height = eu,
			nT = dC.getContext("2d", {
				alpha: !0
			}), hD = Math.floor(1 + eu / 40), nT.clearRect(0, 0, cl, eu), nT.fillStyle = d2.iN, nT.fillRect(hD, hD, cl - 2 * hD, eu - 2 * hD), nT.lineJoin = "bevel", nT.lineWidth = 2 * hD, nT.strokeStyle = d2.d3, nT.strokeRect(hD, hD, cl -
				2 * hD, eu - 2 * hD), nT.imageSmoothingEnabled = !0, fQ = ch.get(a0O), a0X = fQ.width, a0Y = fQ.height, tq = (21 === a0O ? .666 : 1) * vH * eu / a0Y, nT.setTransform(tq, 0, 0, tq, Math.floor((cl - tq * a0X) / 2), Math.floor((
				eu - tq * a0Y) / 2)), nT.drawImage(fQ, 0, 0), nT.setTransform(1, 0, 0, 1, Math.floor(cl - a0Q * eu - a0P * eu - hD), Math.floor(hD + a0P * eu)),
			function(nT, bU) {
				nT.lineWidth = Math.floor(1 + eu / 80), nT.strokeStyle = d2.d3, nT.beginPath(), nT.moveTo(0, 0), nT.lineTo(bU, bU), nT.moveTo(0, bU), nT.lineTo(bU, 0), nT.stroke()
			}(nT, Math.floor(a0Q * eu)), nT.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(aR, a0U, a0V, a0W) {
		pb || a0W && a0R || (a0O = a0V ? 21 : aR ? 1 : 2, pb = a0R = !0, this.resize(), nQ.lP(), cU.x9(), he = aL.aM, -1 === this.a0S && (this.a0S = aL.fP()), wh = a0U ? 1 : 0)
	}, this.fA = function() {
		!pb || 1 <= wh || (wh = 1 < (wh += 5e-4 * (aL.aM - he)) ? 1 : wh, he = aL.aM, aL.co = !0)
	}, this.cq = function(h8, h9) {
		return !(!pb || wh <= 0 || (h8 -= Math.floor((hG - cl) / 2), h9 -= cx(), h8 < 0) || h9 < 0 || cl < h8 || eu < h9 || (cl - eu / 3 < h8 && h9 < eu / 3 && (pb = !1, aL.co = !0), 0))
	}, this.cy = function() {
		!pb || wh <= 0 || (cz.globalAlpha = wh, cz.drawImage(dC, Math.floor((hG - cl) / 2), cx()), cz.globalAlpha = 1)
	}
}

function a0a() {
	this.a0b = !1, this.iF = !1, this.r4 = !1, this.a0c = [0, 0, 0, 0], this.a0d = function() {
		var hD, hE, hF, hH;
		this.r4 = this.r4 || this.iF, (this.iF || this.a0b && this.r4) && (hD = i4.a0e[0], hE = i4.a0e[1], hF = i4.a0e[2], hH = i4.a0e[3], hD = hD < this.a0c[0] ? this.a0c[0] : hD, hE = hE < this.a0c[1] ? this.a0c[1] : hE, hF = hF > this.a0c[2] ?
			this.a0c[2] : hF, hH = hH > this.a0c[3] ? this.a0c[3] : hH, this.iF = !1, this.a0b = !1, hD === this.a0c[0] && hE === this.a0c[1] && hF === this.a0c[2] && hH === this.a0c[3] ? this.r5() : hD <= hF && hE <= hH && rR.putImageData(
				rS, 0, 0, hD, hE, hF - hD + 1, hH - hE + 1))
	}, this.r5 = function() {
		this.r4 && this.a0c[2] >= this.a0c[0] && this.a0c[3] >= this.a0c[1] && rR.putImageData(rS, 0, 0, this.a0c[0], this.a0c[1], this.a0c[2] - this.a0c[0] + 1, this.a0c[3] - this.a0c[1] + 1), this.r4 = !1
	}, this.oW = function() {
		this.a0c[2] >= this.a0c[0] && this.a0c[3] >= this.a0c[1] && rR.putImageData(rS, 0, 0, this.a0c[0], this.a0c[1], this.a0c[2] - this.a0c[0] + 1, this.a0c[3] - this.a0c[1] + 1), this.r4 = !1
	}, this.b = function() {
		var h8, h9;
		this.a0b = !1, this.iF = !1, this.r4 = !1, this.a0c[0] = az.b0, this.a0c[1] = az.b1, this.a0c[2] = this.a0c[3] = 0;
		loop: for (h8 = 1; h8 < az.b0 - 1; h8++)
			for (h9 = az.b1 - 2; 1 < h9; h9--)
				if (1 === a0f[bW.my(h8, h9) + 2]) {
					this.a0c[0] = h8;
					break loop
				} loop: for (h9 = 1; h9 < az.b1 - 1; h9++)
			for (h8 = az.b0 - 2; 1 < h8; h8--)
				if (1 === a0f[bW.my(h8, h9) + 2]) {
					this.a0c[1] = h9;
					break loop
				} loop: for (h8 = az.b0 - 2; 0 < h8; h8--)
			for (h9 = az.b1 - 2; 1 < h9; h9--)
				if (1 === a0f[bW.my(h8, h9) + 2]) {
					this.a0c[2] = h8;
					break loop
				} loop: for (h9 = az.b1 - 2; 0 < h9; h9--)
			for (h8 = az.b0 - 2; 1 < h8; h8--)
				if (1 === a0f[bW.my(h8, h9) + 2]) {
					this.a0c[3] = h9;
					break loop
				}
	}
}

function sw() {
	var a0g = new a0h;
	this.uQ = function(cd, a0i, a0j) {
		return a0g.uQ(cd, a0i, a0j)
	}
}

function a0h() {
	var ad = ["Accept", "You erased {0}.", "You were erased by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} is attacking you!", "Choose your start position!", "You surrendered!",
		"The game ended in a stalemate!", "Error: {0}", "{0} won the game.", "{0} was immortalized!", "Unclaimed Land {0}", "Player: {0}   Balance: {1}   Territory: {2}   Coords: {3}", "Mountains {0}", "Water {0}",
		"Ship Owner: {0}   Strength: {1}", " Message to {0}: ", "{0}: ", "Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"Agreeing to peace concludes the game in a stalemate!", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requested a non-aggression pact.",
		"You asked {0} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggested you attack {1}.", "Your balance is too low!", "You exported {0} resource{20} to {1}.", "A tax of {0} unit{20} was deducted.",
		"{0} supported you with {1} resource{21}.", "A bot ({0}) supported you with {1} resource{21}.", "Map: {0}", "Dimension: {0}x{1}", "Overall Pixels: {0}", "Land: {0} ({1})", "Water: {0} ({1})", "Mountains: {0} ({1})",
		"Full sending against human players is disabled.", "{0} and {1} other player{21} were erased.", "{0} and {1} other player{21} left the game.", "{0} and {1} other player{21} surrendered.", "{0} was erased by {1}.", "{0} left the game.",
		"{0} surrendered.", "{0} joined the game."
	];
	this.uQ = function(cd, a0i, a0j) {
		var aE, bU, v;
		if (!a0i) return ad[cd];
		for (bU = a0i.length, v = ad[cd], aE = 0; aE < bU; aE++) Number.isInteger(a0i[aE]) && 1 !== a0i[aE] && (v = v.replace("{" + (20 + aE) + "}", "s"));
		if (a0j) {
			if (a0j.un)
				for (aE = 0; aE < a0j.un.length; aE++) a0i[a0j.un[aE]] = cK.hP.hQ(a0i[a0j.un[aE]]);
			if (a0j.v6)
				for (aE = 0; aE < a0j.v6.length; aE++) a0i[a0j.v6[aE]] = cK.hP.qs(100 * a0i[a0j.v6[aE]], 1)
		}
		for (aE = 0; aE < bU; aE++) v = v.replace("{" + aE + "}", a0i[aE]);
		return v
	}
}

function a0k() {}

function a0l() {
	this.pb = !1, this.u6 = null, this.a0m = 0, this.cl = null, this.eu = null, this.a0n = .013, this.a0o = .022, this.a0p = .025;
	this.a0r = 3, this.a0s = 1.2, this.a0t = .2, this.a0u = .235, this.a0v = .9, this.a0w = .08;
	var a0y, a0x = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"],
		a0z = [-1e6, -1e6];
	this.position = [0, 0], this.a11 = [0, 0], this.b = function() {
		this.u6 = [null, null], this.pb = !1, this.a0m = 0
	}, this.l = function(id) {
		this.pb = !0, this.resize(), this.a0m = id, this.cg(), pn.l(!1), aL.co = !0
	}, this.fA = function() {
		this.pb && this.cg()
	}, this.cg = function() {
		aL.aM - 12e4 >= a0z[this.a0m] && (a0z[this.a0m] = aL.aM, this.a11 = [0, 0], g6.yX(0, 1 + this.a0m)) && jG.a12(0, this.a0m)
	}, this.resize = function() {
		if (this.pb) {
			var aE;
			for (this.cl = this.a13(a0 ? .85 : .66, .75, a1, a2), this.eu = Math.floor(this.cl / .75), aE = 1; 0 <= aE; aE--) this.u6[aE] && (this.u6[aE][4] = ce + Math.floor(this.u6[aE][5] * this.eu / 10) + cf);
			a0y = ce + Math.floor(.1 * this.eu) + cf
		}
	}, this.a13 = function(cZ, dB, cl, eu) {
		return cl < dB * eu ? Math.floor(cZ * cl) : Math.floor(dB * cZ * eu)
	}, this.a14 = function(cd, a15, a16, qo, a17, a18, zk) {
		this.position[cd] = zk;
		for (var we, d6 = a15.length, ck = ce + Math.floor(a17 * this.eu / 10) + cf, ad = (this.a19(a15, ck, a18 * this.cl), [
				[], d6, -1, qo, ck, a17, 10 * zk
			]), aE = 0; aE < d6; aE++) we = {
			name: a15[aE].name,
			value: a15[aE].ng / a16,
			colorIndex: a15[aE].colorIndex
		}, ad[0].push(we);
		this.u6[cd] = ad, this.a1A(cd);
		a18 = this.u6[cd][0][0].name;
		1 === cd && (a18 = "[" + a18 + "]"), 0 === zk && a1B.cc(cd, a18), aL.co = !0
	}, this.a1A = function(aE) {
		this.u6[aE][0].sort(function(eb, em) {
			return em.value - eb.value
		})
	}, this.a1C = function(cd, name, a1D, a1E) {
		if (this.u6 && this.u6[cd]) {
			var aE, uy = !1;
			if (0 === cd) {
				for (aE = 0; aE < this.u6[cd][0].length; aE++)
					if (name === this.u6[cd][0][aE].name && a1D > .99 * this.u6[cd][0][aE].value && a1D < 1.01 * this.u6[cd][0][aE].value) {
						this.u6[cd][0][aE].value = a1E, uy = !0;
						break
					} uy || this.u6[cd][0].push({
					name: name,
					value: a1E
				})
			} else {
				for (aE = 0; aE < this.u6[cd][0].length; aE++)
					if (name === this.u6[cd][0][aE].name) {
						this.u6[cd][0][aE].value += 32 < this.u6[cd][0][aE].value ? (64 - this.u6[cd][0][aE].value) / 256 : .25, this.u6[cd][0][aE].value *= 1 / (383 / 384), uy = !0;
						break
					} for (aE = 0; aE < this.u6[cd][0].length; aE++) this.u6[cd][0][aE].value *= 383 / 384;
				uy || this.u6[cd][0].push({
					name: name,
					value: .25
				})
			}
			this.a1A(cd)
		}
	}, this.a19 = function(a15, ck, cn) {
		for (var aE = a15.length - 1; 0 <= aE; aE--)
			for (; 3 < a15[aE].name.length && cm.measureText(a15[aE].name, ck) > cn;) a15[aE].name = a15[aE].name.substring(0, a15[aE].name.length - 4) + "..."
	}, this.cq = function(dj, dk) {
		return !!this.pb && (dj -= (hG - this.cl) / 2, dk -= (cu - this.eu) / 2, dj < 0 || dj > this.cl || dk < 0 || dk > this.eu ? (this.pb = !1, 0 === aT.pp() && pn.l(!0), aL.co = !0) : (dk = dk < .3 * this.eu ? 1 : dk < .85 * this.eu ? (dk = (
				0 === this.a0m ? 14.1 : 3) * (dk - .3 * this.eu) / (.55 * this.eu), Math.floor(1 + dk * dk)) : 0 === this.a0m ? 200 : 10, dj < this.cl / 2 ? this.a11[this.a0m] = -dk : this.a11[this.a0m] = dk, a0z[this.a0m] + 50 > aL.aM ||
			(a0z[this.a0m] = aL.aM, g6.yX(0, 1 + this.a0m) && jG.a12(0, this.a0m)), !0))
	}, this.cy = function() {
		var hD, hE, nY, nZ, a1F, a1G, qS, qT;
		this.pb && (hD = (hG - this.cl) / 2, hE = (cu - this.eu) / 2, nY = this.a0n * this.cl, nZ = this.a0r * nY, a1F = this.a0o * this.cl, a1G = this.a0s * a1F, qS = this.a0p * this.cl, qT = Math.floor(.25 * this.eu), cz.setTransform(1, 0, 0,
				1, hD, hE), cz.fillStyle = 0 === this.a0m ? d2.iu : d2.is, cz.fillRect(0, 0, this.cl, qT), cz.fillStyle = d2.iM, cz.fillRect(0, qT, this.cl, this.eu - qT), cz.fillStyle = d2.d3, cz.font = a0y, cz.textBaseline = d0, cz
			.textAlign = d1, cz.fillText(a0x[this.a0m], Math.floor(this.cl / 2), Math.floor(.135 * this.eu)), cz.font = ce + Math.floor(.025 * this.eu) + cf, cz.fillText(a0x[this.a0m + 2], Math.floor(this.cl / 2), Math.floor(.2125 * this
			.eu)), cz.beginPath(), cz.moveTo(this.cl / 4, 0), cz.lineTo(this.cl / 2 - nY, 0), cz.lineTo(this.cl / 2, -nZ), cz.lineTo(this.cl / 2 + nY, 0), cz.lineTo(this.cl - a1F, 0), cz.lineTo(this.cl + a1G, -a1G), cz.lineTo(this.cl, a1F),
			cz.lineTo(this.cl, this.eu / 2 - nY), cz.lineTo(this.cl + nZ, this.eu / 2), cz.lineTo(this.cl, this.eu / 2 + nY), cz.lineTo(this.cl, this.eu - a1F), cz.lineTo(this.cl + a1G, this.eu + a1G), cz.lineTo(this.cl - a1F, this.eu), cz
			.lineTo(this.cl / 2 + nY, this.eu), cz.lineTo(this.cl / 2, this.eu + nZ), cz.lineTo(this.cl / 2 - nY, this.eu), cz.lineTo(a1F, this.eu), cz.lineTo(-a1G, this.eu + a1G), cz.lineTo(0, this.eu - a1F), cz.lineTo(0, this.eu / 2 + nY),
			cz.lineTo(-nZ, this.eu / 2), cz.lineTo(0, this.eu / 2 - nY), cz.lineTo(0, a1F), cz.lineTo(-a1G, -a1G), cz.lineTo(a1F, 0), cz.lineTo(this.cl / 4, 0), cz.lineTo(this.cl / 4, qS), cz.lineTo(qS, qS), cz.lineTo(qS, this.eu - qS), cz
			.lineTo(this.cl - qS, this.eu - qS), cz.lineTo(this.cl - qS, qS), cz.lineTo(this.cl / 4, qS), cz.fill(), this.u6[this.a0m] && this.a1H(qT), this.a1I(qT), cz.setTransform(1, 0, 0, 1, 0, 0))
	}, this.a1I = function(qT) {
		var nY = uT(2, Math.floor(.06 * this.cl)),
			vH = (nY -= nY % 2, uT(2, Math.floor(.01 * this.cl))),
			qT = (vH -= vH % 2, Math.floor(.82 * qT));
		cz.fillRect(nY, qT, nY, vH), cz.fillRect(this.cl - nY - nY, qT, nY, vH), cz.fillRect(Math.floor(this.cl - nY - nY + (nY - vH) / 2), Math.floor(qT - (nY - vH) / 2), vH, nY)
	}, this.a1H = function(qT) {
		var h9;
		cz.font = this.u6[this.a0m][4];
		for (var aE = this.u6[this.a0m][1] - 1; 0 <= aE; aE--) cz.textAlign = w1, h9 = Math.floor(this.a0w * this.eu + qT + aE * ((1 - 2 * this.a0w) * this.eu - qT) / 9), cz.fillText(this.u6[this.a0m][0][aE].value.toFixed(this.u6[this.a0m][3]),
			Math.floor(this.a0v * this.cl), h9), cz.fillText(aE + 1 + this.u6[this.a0m][6] + ".", Math.floor(this.a0t * this.cl), h9), cz.textAlign = ub, cz.fillText(this.u6[this.a0m][0][aE].name, Math.floor(this.a0u * this.cl), h9)
	}
}

function a1J() {
	var h8, h9, eu, a1K, a1L, a1M, a1N, a1O, a1P, cl, a1Q, a1R;
	this.pb = !1, this.b = function(v, a1S) {
		if (13 <= q && q < 18) return a1S ? void(a1Q = v) : a1Q !== v ? void 0 : void n.saveString(200, v);
		a1S && ((cv.u6[1].oK.pb || cv.u6[2].oK.pb) && cv.pq(), pn.l(!1), a1Q = v, (a1R = document.createElement("a")).appendChild(document.createTextNode(a1Q)), this.pb = !0, a1R.title = a1Q, a1R.target = "_blank", a1R.href = a1Q, a1R.style
			.textAlign = "center", a1R.style.color = d2.d3, a1R.style.position = "absolute", a1R.style.padding = "0px", a1R.style.margin = "0px", this.resize(), document.body.appendChild(a1R), aL.co = !0)
	}, this.lP = function() {
		return !(!this.pb || (document.body.removeChild(a1R), this.pb = !1))
	}, this.cq = function(dj, dk) {
		return !!this.pb && ((dj < h8 || dk < h9 || h8 + cl < dj || h9 + eu < dk || h8 + cl - a1K < dj && dk < h9 + a1K) && (aL.co = !0, this.pb = !1, document.body.removeChild(a1R), 0 === aT.pp()) && pn.l(!0), !0)
	}, this.resize = function() {
		var ck, a1T;
		this.pb && (a1O = Math.floor(.8 * (a0 ? a2 < a1 ? .6 : .55 : .4) * cb), a1K = Math.floor(.15 * a1O), a1L = Math.floor(.35 * a1K), a1M = Math.floor(.5 * a1K), a1N = Math.floor(2.5 * a1M), eu = a1K + a1L + 3 * a1M, ck = ce + Math.floor(
			a1L / lX) + cf, a1P = Math.floor(lX * cm.measureText(a1Q, ck)), a1T = cl = (a1O < a1P ? a1P : a1O) + 2 * a1N, cl = Math.min(cl, a1 - 2 * (a0 ? 2 : 1) * kq), ck = ce + Math.floor(cl / a1T * a1L / lX) + cf, a1P = Math.floor(lX *
			cm.measureText(a1Q, ck)), h8 = Math.floor((hG - cl) / 2), h9 = Math.floor((cu - eu) / 2), a1R.style.font = ck, a1R.style.top = Math.floor((h9 + 1.4 * a1M + a1K) / lX) + "px", a1R.style.left = Math.floor((h8 + (cl - a1P) / 2) /
			lX) + "px")
	}, this.cy = function() {
		this.pb && (cz.fillStyle = d2.iN, cz.fillRect(h8, h9 + a1K, cl, eu - a1K), cz.fillStyle = d2.j6, cz.fillRect(h8, h9, cl, a1K), cz.fillStyle = d2.d3, cz.lineWidth = qU, cz.strokeStyle = d2.d3, cz.strokeRect(h8, h9, cl, eu), cz.fillRect(h8,
			h9 + a1K, cl, qU), cz.font = ce + Math.floor(.48 * a1K) + cf, cz.textAlign = d1, cz.textBaseline = d0, cz.fillText("You are leaving Territorial.io!", Math.floor(h8 + (cl - .5 * a1K) / 2), Math.floor(h9 + .55 * a1K)), cI.u4(
			Math.floor(h8 + cl - .8 * a1K), Math.floor(h9 + .25 * a1K), Math.floor(.5 * a1K)), cz.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function a1U() {
	var l5, tm, h8 = [0, 0, 0, 0, 0],
		h9 = [0, 0, 0, 0, 0],
		i0 = [1, 1, 1, 1, 1],
		aR = [!0, !0, !0, !0, !0],
		fQ = (this.ai = [!0, !0, !0, !0, !0], null);
	this.a1V = function(t9, a1W) {
		fQ = t9, aR = a1W, tm = [ro.a1X, ro.a1Y, ro.a1Z, ro.a1a, ro.a1b], this.b()
	}, this.b = function() {
		if (ch.ci()) {
			var aE, nY = Math.floor((a0 ? .261 : .195) * cb),
				nZ = Math.floor(.9 * nY),
				vH = Math.floor(.17 * nZ);
			if (l5 = a0 ? 2 * kq : kq, i0[0] = nY / fQ[0].width, i0[1] = nZ / fQ[1].width, i0[2] = vH / fQ[2].height, i0[3] = vH / fQ[3].height, i0[4] = vH / fQ[4].height, i0[3] *= 1.07, h8[0] = l5, h8[1] = l5, h8[2] = l5, h8[3] = l5, h8[4] =
				Math.floor(2 * l5 + i0[3] * fQ[3].width), h9[0] = l5, h9[1] = h9[0] + l5 + i0[0] * fQ[0].height, h9[2] = h9[1] + l5 + i0[1] * fQ[1].height, h9[3] = h9[2] + l5 + i0[2] * fQ[2].height, h9[4] = h9[3], !aR[0])
				for (aE = 0; aE < 5; aE++) h9[aE] -= i0[0] * fQ[0].height + l5;
			if (!aR[1])
				for (aE = 2; aE < 5; aE++) h9[aE] -= i0[1] * fQ[1].height + l5
		}
	}, this.pb = function() {
		return !(7 === aT.pp() && a0)
	}, this.cq = function(dj, dk, a1S) {
		if (fQ && this.pb())
			for (var aE = aR.length - 1; 0 <= aE; aE--)
				if (aR[aE] && this.ai[aE] && h8[aE] < dj && h9[aE] < dk && dj < h8[aE] + i0[aE] * fQ[aE].width && dk < h9[aE] + i0[aE] * fQ[aE].height) return pm.b(tm[aE], a1S), !0;
		return !1
	}, this.cy = function() {
		if (fQ && this.pb()) {
			var aE;
			for (cz.imageSmoothingEnabled = !0, aE = 0; aE < 5; aE++) aR[aE] && this.ai[aE] && (cz.setTransform(i0[aE], 0, 0, i0[aE], h8[aE], h9[aE]), cz.drawImage(fQ[aE], 0, 0));
			cz.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function sl() {
	this.id = 0, this.vR = 0;
	var a1c = null,
		a1d = !1;
	this.b = function() {
		var tj, ae, ag;
		n ? this.id = 1 : m ? this.id = 2 : (function() {
			try {
				if (!(a1c = window.localStorage)) return a1c = null;
				a1c.setItem("testLS", "1"), a1c.removeItem("testLS")
			} catch (error) {
				return a1c = null
			}
			a1d = !0
		}(), tj = this, a1d && (ae = Number(a1c.getItem("zt0")), ag = Number(a1c.getItem("zt1")), ae && ag ? (tj.id = ae, tj.vR = Math.floor(Date.now() / 3e5) - ag) : (a1c.setItem("zt0", "" + Math.floor(3 + Math.random() * (Math.pow(2,
			20) - 3))), a1c.setItem("zt1", "" + Math.floor(Date.now() / 3e5)))))
	}
}

function s6() {
	var a0m, a1i, a1j;

	function a1o(aE) {
		var button = ra.sx[aE],
			h8 = button.h8,
			h9 = button.h9,
			cl = button.cl,
			eu = button.eu;
		cz.fillStyle = button.a1m, cz.fillRect(h8, h9, cl, eu), aE === a0m && (cz.fillStyle = a1j, cz.fillRect(h8, h9, cl, eu)), cz.lineWidth = qU, cz.strokeStyle = a1i, cz.strokeRect(h8, h9, cl, eu),
			function(button) {
				var h8 = button.h8,
					h9 = button.h9,
					cl = button.cl,
					eu = button.eu;
				cz.textAlign = d1, cz.textBaseline = d0, cz.font = button.font, cz.fillStyle = a1i, cz.fillText(button.vN, Math.floor(h8 + cl / 2), Math.floor(h9 + eu / 2 + .1 * button.cj))
			}(button)
	}
	this.cl = 0, this.eu = 0, this.h9 = 0, this.l5 = 0, this.b = function() {
		a0m = -1, a1i = d2.d3, a1j = "rgba(255,255,255,0.16)", this.sx = new Array(7), this.eu = Math.floor((a0 ? .123 : .093) * cb), this.cl = Math.floor((a0 ? 3.96 : 4.2) * this.eu), this.l5 = Math.floor(.025 * this.cl);
		var a1k = Math.floor(.26 * this.eu),
			a1l = ce + a1k + cf;
		this.sx[0] = {
			h8: 0,
			h9: 0,
			cl: Math.floor(.6 * this.cl - this.l5 / 2),
			eu: this.eu,
			vN: "Multiplayer",
			font: a1l,
			a1m: "rgba(22,88,22,0.8)",
			cj: a1k
		}, a1k = Math.floor(.18 * this.eu), this.sx[1] = {
			h8: 0,
			h9: 0,
			cl: this.cl - this.sx[0].cl - this.l5,
			eu: this.eu,
			vN: "Single Player",
			font: ce + a1k + cf,
			a1m: "rgba(22,88,88,0.8)",
			cj: a1k
		}, this.sx[2] = {
			h8: 0,
			h9: 0,
			cl: this.cl,
			eu: Math.floor(.3 * this.eu),
			vN: "",
			font: this.sx[1].font,
			a1m: "rgba(100,0,0,0.8)",
			cj: this.sx[1].cj
		}, this.sx[3] = {
			h8: 0,
			h9: 0,
			cl: this.cl,
			eu: this.eu,
			vN: "Back",
			font: this.sx[0].font,
			a1m: "rgba(0,0,0,0.8)",
			cj: this.sx[0].cj
		}, this.sx[4] = {
			h8: 0,
			h9: 0,
			cl: this.cl,
			eu: Math.floor(.3 * this.eu),
			vN: "The game was updated!",
			font: this.sx[1].font,
			a1m: "rgba(100,0,0,0.8)",
			cj: this.sx[1].cj
		}, this.sx[5] = {
			h8: 0,
			h9: 0,
			cl: this.sx[0].cl,
			eu: Math.floor(.8 * this.eu),
			vN: "Reload",
			font: this.sx[0].font,
			a1m: "rgba(0,100,0,0.8)",
			cj: this.sx[0].cj
		}, this.sx[6] = {
			h8: 0,
			h9: 0,
			cl: this.sx[1].cl,
			eu: this.sx[5].eu,
			vN: "Back",
			font: this.sx[0].font,
			a1m: "rgba(0,0,0,0.8)",
			cj: this.sx[0].cj
		}, this.yf()
	}, this.yf = function() {
		this.h9 = Math.floor(.54 * cu), this.sx[0].h8 = Math.floor(.5 * hG - .5 * this.cl), this.sx[1].h8 = this.sx[0].h8 + this.sx[0].cl + this.l5, this.sx[2].h8 = this.sx[3].h8 = this.sx[0].h8, this.sx[4].h8 = this.sx[5].h8 = this.sx[0].h8,
			this.sx[6].h8 = this.sx[1].h8, this.sx[0].h9 = Math.floor(.54 * cu), this.sx[1].h9 = this.sx[0].h9, this.sx[2].h9 = Math.floor((cu - this.sx[2].eu - this.sx[3].eu - this.l5) / 2), this.sx[3].h9 = this.sx[2].h9 + this.sx[2].eu + this
			.l5, this.sx[4].h9 = Math.floor((cu - this.sx[4].eu - this.sx[5].eu - this.l5) / 2), this.sx[5].h9 = this.sx[6].h9 = this.sx[4].h9 + this.sx[4].eu + this.l5
	}, this.a1n = function() {
		a1o(0), a1o(1)
	}, this.a1p = function() {
		a1o(2), a1o(3)
	}, this.a1q = function() {
		a1o(4), a1o(5), a1o(6)
	}, this.p8 = function(h8, h9, ga) {
		var aE = -1;
		return 0 === aT.pp() ? aE = this.pl(h8, h9, 0, 2) : 3 === aT.pp() ? aE = this.pl(h8, h9, 3, 1) : 5 === aT.pp() && (aE = this.pl(h8, h9, 5, 2)), a0m !== aE && (a0m = aE, ga) && (aL.co = !0), -1 !== aE && (pd.pe(), !0)
	}, this.pl = function(h8, h9, a1r, d6) {
		for (var aE = a1r; aE < a1r + d6; aE++)
			if (h8 >= this.sx[aE].h8 && h9 >= this.sx[aE].h9 && h8 <= this.sx[aE].h8 + this.sx[aE].cl && h9 <= this.sx[aE].h9 + this.sx[aE].eu) return aE;
		return -1
	}
}

function a1t() {
	function a1z(tC) {
		return tC < 0 ? 0 : 255 < tC ? 255 : Math.floor(tC)
	}
	this.cl = 0, this.eu = 0, this.pb = !1, this.a1u = 0, this.l5 = 0, this.vi = 0, this.a1K = 0, this.a1v = 0, this.a1w = 0, this.a1x = 0, this.colors = null, this.b = function() {
		this.pb = !0, this.a1u = 0, this.resize()
	}, this.resize = function() {
		this.pb && (a1 < 1.4 * a2 ? this.cl = Math.floor((a0 ? .94 : .43) * a1) : (this.eu = Math.floor((a0 ? .88 : .43) * a2), this.cl = Math.floor(1.4 * this.eu)), this.eu = this.cl / 1.4, this.l5 = this.cl / 32, this.a1K = Math.floor(.25 *
			this.eu), this.a1v = (this.eu - this.a1K - 3 * this.l5) / 2, this.a1w = this.cl - 3 * this.l5 - this.a1v, this.a1x = (this.eu - this.a1K - 4 * this.l5) / 3)
	}, this.a1y = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var v = a5().split("");
		if (v.length < 6)
			for (var em = 2; 0 <= em; em--) this.colors[0][em] = a1z(256 * Math.random());
		else
			for (var aE = 2; 0 <= aE; aE--) this.colors[0][aE] = a1z(4 * (10 * parseInt(v[2 * aE]) + parseInt(v[2 * aE + 1])));
		this.a20()
	}, this.a21 = function() {
		return [bJ(this.colors[0][0], 4), bJ(this.colors[0][1], 4), bJ(this.colors[0][2], 4)]
	}, this.pB = function(cr, cs, deltaY) {
		var hD = (hG - this.cl) / 2;
		cs -= (cu - this.eu) / 2 + this.a1K, (cr -= hD) < 0 || cs < 0 || cr >= this.cl || cs >= this.eu - this.a1K || (hD = Math.floor(3 * cs / (this.eu - this.a1K)), this.colors[this.vi][hD] = a1z(this.colors[this.vi][hD] + (deltaY < 0 ? 1 : -
			1) * Math.max(Math.abs(.05 * deltaY), 1)), aL.co = !0)
	}, this.cq = function(cr, cs) {
		this.a1u = 0;
		var hD = (hG - this.cl) / 2;
		return cs -= (cu - this.eu) / 2, (cr -= hD) < 0 || cs < 0 || cr >= this.cl - 1 || cs >= this.eu - 1 || cr > this.cl - (.4 * this.a1K + 3 * this.l5) && cs < this.a1K ? (this.pb = !1, 0 === aT.pp() && pn.l(!0), !(aL.co = !0)) : cr < this
			.l5 || cs < this.l5 + this.a1K || cr >= this.cl || cs >= this.eu - this.l5 || (cr < this.l5 + this.a1v ? (cs < this.l5 + this.a1K + this.a1v && 0 !== this.vi && (this.vi = 0, aL.co = !0), !0) : cr < this.l5 + this.a1v || (cr -= 2 *
				this.l5 + this.a1v, cs < this.l5 + this.a1K + this.a1x ? (this.a1u = 1, this.colors[this.vi][0] = a1z(256 * cr / this.a1w), aL.co = !0) : cs < 2 * this.l5 + this.a1K + this.a1x || (cs < 2 * this.l5 + this.a1K + 2 * this.a1x ?
					(this.a1u = 2, this.colors[this.vi][1] = a1z(256 * cr / this.a1w), aL.co = !0) : !(cs >= 3 * this.l5 + this.a1K + 2 * this.a1x) || (this.a1u = 3, this.colors[this.vi][2] = a1z(256 * cr / this.a1w), aL.co = !0))))
	}, this.a20 = function() {
		for (var em = 2; 0 <= em; em--) this.colors[0][em] = a1z(this.colors[0][em])
	}, this.a22 = function() {
		for (var aR, v = "", aE = 0; aE < 3; aE++)(aR = bJ(this.colors[0][aE], 4)) < 10 && (v += "0"), v += aR.toString();
		return v
	}, this.p8 = function(cr) {
		0 !== this.a1u && (cr -= 2 * this.l5 + this.a1v + (hG - this.cl) / 2, this.colors[this.vi][this.a1u - 1] = a1z(256 * cr / this.a1w), aL.co = !0)
	}, this.a23 = function() {
		0 < this.a1u && (this.a1u = 0, this.a20(), hM.a24(), aL.co = !0)
	}, this.cy = function() {
		var hD = (hG - this.cl) / 2,
			hE = (cu - this.eu) / 2;
		cz.setTransform(1, 0, 0, 1, hD, hE), cz.fillStyle = d2.iN, cz.fillRect(0, this.a1K, this.cl, this.eu - this.a1K), cz.fillStyle = d2.iX, cz.fillRect(0, 0, this.cl, this.a1K), cz.fillStyle = d2.d3, cz.lineWidth = qU, cz.strokeStyle = d2.d3,
			cz.strokeRect(-1, -1, this.cl + 2, this.eu + 2), cz.fillRect(0, this.a1K, this.cl, qU), cz.font = ce + Math.floor(.31 * this.a1K) + cf, cz.textBaseline = d0, cz.textAlign = d1, cz.fillText("Choose Your Nation's Color!", Math.floor((
				this.cl - this.l5 - .4 * this.a1K) / 2), Math.floor(.55 * this.a1K)), this.a25(0), cz.lineWidth = qU, this.a26(0), this.a26(1), this.a26(2), cI.u4(Math.floor(hD + this.cl - .4 * this.a1K - this.l5), Math.floor(hE + .3 * this.a1K),
				Math.floor(.4 * this.a1K)), cz.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a25 = function(aE) {
		var dF = this.colors[aE][0],
			qQ = this.colors[aE][1],
			aE = this.colors[aE][2];
		cz.fillStyle = "rgb(" + dF + "," + qQ + "," + aE + ")", cz.fillRect(this.l5, this.a1K + this.l5, this.a1v, 2 * this.a1v + this.l5), cz.lineWidth = qU, cz.strokeStyle = d2.d3, cz.strokeRect(this.l5, this.a1K + this.l5, this.a1v, 2 * this
			.a1v + this.l5), cz.fillStyle = dF + qQ + aE < 306 && qQ < 150 ? d2.d3 : d2.hK, cz.font = ce + Math.floor(.32 * this.a1x) + cf, cz.textAlign = d1, cz.textBaseline = d0, cz.rotate(-Math.PI / 2), cz.fillText("National Color", Math
			.floor(-1.5 * this.l5 - this.a1K - this.a1v), Math.floor(this.l5 + .5 * this.a1v)), cz.rotate(Math.PI / 2)
	}, this.a26 = function(aE) {
		cz.fillStyle = "rgb(" + (0 === aE ? 150 : 2 === aE ? 30 : 0) + "," + (1 === aE ? 130 : 2 === aE ? 30 : 0) + "," + (2 === aE ? 220 : 0) + ")", cz.fillRect(2 * this.l5 + this.a1v, this.a1K + this.l5 + aE * (this.l5 + this.a1x), Math.floor(
				this.colors[this.vi][aE] * this.a1w / 255), this.a1x), cz.strokeStyle = d2.d3, cz.strokeRect(2 * this.l5 + this.a1v, this.a1K + this.l5 + aE * (this.l5 + this.a1x), this.a1w, this.a1x), cz.fillStyle = d2.d3, cz.font = ce + Math
			.floor(.32 * this.a1x) + cf, cz.textBaseline = d0, cz.textAlign = ub, cz.fillText((0 === aE ? "Red: " : 1 === aE ? "Green: " : "Blue: ") + this.colors[0][aE].toString(), 3 * this.l5 + this.a1v, Math.floor(this.a1K + this.l5 + aE * (
				this.l5 + this.a1x) + .53 * this.a1x))
	}
}

function s7() {
	var a27, a28, wD, wO, xH, a29, a2A, a2B, a2C, ck, cj, he, a2D, a2F, a2E = 0;

	function a2I() {
		return g6.a2J[(a2D + a2E) % g6.a2K]
	}

	function a2G() {
		a2D++, he = aL.aM, g6.yX(a2I(), 4) && (a2F = !0, jG.a2L(a2I()))
	}

	function a2O() {
		0 === a2D ? rc.a2Q(3249) : (a2D === g6.a2K - 1 && (a2D = -1), a2G())
	}

	function a2X(h9, yI, a2W) {
		var hD = Math.floor((hG - wO) / 2) + a2A,
			hF = hD + Math.floor(a2W * (wO - 2 * a2A));
		cz.lineWidth = yI, cz.beginPath(), cz.moveTo(hD, h9), cz.lineTo(hF, h9), cz.lineTo(Math.floor(hD - a2A + a2W * wO), h9 + wD), cz.lineTo(hD - a2A, h9 + wD), cz.closePath()
	}
	this.b = function() {
		aT.setState(6), a27 = 0, a28 = 1, a2B = "rgba(0,220,120,0.4)", a2C = "rgba(0,0,0,0.8)", this.resize(), aL.co = !0, a2D = 0, a2F = !1, a2G()
	}, this.resize = function() {
		wO = Math.floor((a0 ? .5 : .25) * cb), xH = wO + 12, wD = Math.floor(.125 * wO), a2A = 3 * wD, a29 = Math.floor(.225 * wO), cj = Math.floor(.3 * wD), ck = w3 + cj + cf
	}, this.a2H = function(eb) {
		a2E = eb
	}, this.a2M = function(a2N) {
		a2N === a2I() && (a2F = !1, a2O())
	}, this.yZ = function(a2N) {
		6 !== aT.pp() || a2F || (he = aL.aM, a2F = !0, jG.a2L(a2N))
	}, this.cq = function(h8, h9) {
		var hD = Math.floor((hG - xH) / 2),
			hE = Math.floor(.5 * (cu - ct - wD - a29)) + wD + ct;
		return hD < h8 && h8 < hD + xH && hE < h9 && h9 < hE + a29 && (this.a2R(), ra.p8(h8, h9, !1), !0)
	}, this.a2R = function() {
		g6.a2S(3260), rY.b(), aL.co = !0
	}, this.fA = function() {
		6 === aT.pp() && (a2F ? aL.aM > he + 12e3 && rc.a2Q(3250) : aL.aM > he + 12e3 && a2O(), 100 < (a27 += .07 * a28 * (a27 < 16 ? 5 + a27 : 84 < a27 ? 105 - a27 : 17)) ? (a27 = 100, a28 = -1) : a27 < 0 && (a27 = 0, a28 = 1), a2B = "rgba(0," +
			Math.floor(190 - 1.9 * a27) + "," + Math.floor(120 - 1.2 * a27) + "," + (.4 + .004 * a27) + ")", a2C = "rgba(0," + Math.floor(1.9 * a27) + "," + Math.floor(1.2 * a27) + "," + (.8 - .004 * a27) + ")", aL.co = !0)
	}, this.cy = function() {
		var h8 = Math.floor((hG - xH) / 2),
			h9 = Math.floor(.5 * (cu - ct - wD - a29));
		! function(title, h9, yI, a2W) {
			cz.fillStyle = a2C, a2X(h9, yI, 1), cz.fill(), cz.fillStyle = a2B, a2X(h9, yI, a2W), cz.fill(), cz.strokeStyle = d2.d3, a2X(h9, yI, 1), cz.stroke(),
				function(a2Z, h9) {
					cz.textAlign = d1, cz.textBaseline = d0, cz.font = ck, cz.fillStyle = d2.d3, cz.fillText(a2Z, Math.floor(.5 * hG), Math.floor(h9 + .58 * wD))
				}(title, h9)
		}("Loading", h9, 3, a27 / 100),
		function(h8, h9, cl, eu, vN) {
			cz.fillStyle = d2.iL, cz.fillRect(h8, h9, cl, eu), cz.lineWidth = 3, cz.strokeStyle = d2.d3, cz.strokeRect(h8, h9, cl, eu);
			var bU = Math.floor(.3 * eu);
			cz.textAlign = d1, cz.textBaseline = d0, cz.font = w3 + bU + cf, cz.fillStyle = d2.d3, cz.fillText(vN, Math.floor(h8 + cl / 2), Math.floor(h9 + eu / 2 + .1 * bU))
		}(h8, h9 + wD + ct, xH, a29, "Back")
	}
}

function s8() {
	var j;
	this.b = function() {
		ra.b(), pn.b(), j = 0, a2a.b(), rY.b()
	}, this.setState = function(a2b) {
		j = a2b
	}, this.pp = function() {
		return j
	}, this.a2c = function() {
		0 === aT.pp() && rY.a2d(), this.setState(8), rh.a2d(), cv.pq(), cw.pb = !1, pm.cq(-1e3, -1e3)
	}, this.pq = function(lk) {
		if (!az.mE) return !1;
		if (!(aL.aM < 400)) {
			if ("Enter" === lk.key || "Escape" === lk.key) {
				if (this.a2e()) return 0 === j && pn.l(!0), !0;
				if ("Enter" === lk.key) {
					if (0 === j) return rY.a2f(), !0;
					if (7 === j) return !0
				}
			}
			return !1
		}
	}, this.a2g = function() {
		return lU.pb || cw.pb || pm.pb || cv.a2h()
	}, this.a2i = function() {
		cw.resize(), lU.resize(), pm.resize(), cv.resize()
	}, this.a2e = function() {
		return !!pm.lP() || !(!cv.pq() && (cw.pb ? cw.pb = !1 : !lU.pb || (lU.lP(), 0)))
	}, this.aU = function() {
		aL.co = !0, 8 === j ? hq ? gW.ps(!1) : nR.pb ? nR.pu() : lU.pb ? lU.lP() : cI.pu() : 7 === j ? rh.a2j() : 6 === j ? rb.a2R() : 3 === j ? rc.a2k(0, 0) : 2 === j ? ft.a2k() : 0 !== j || this.a2e() || aJ(11)
	}, this.cq = function(h8, h9) {
		if (!a2a.cq(h8, h9) && az.mE && !pm.cq(h8, h9) && !lU.cq(h8, h9) && !(6 === j && rb.cq(h8, h9) || 2 === j && ft.cq(h8, h9) || hM.cq(h8, h9) || cw.cq(h8, h9) || a2l.cq(h8, h9, !0) || cv.cq(h8, h9, !0))) {
			if (pd.cq(h8, h9), 0 === j) rY.cq(h8, h9);
			else if (3 === j) rc.cq(h8, h9);
			else if (5 === j) rd.cq(h8, h9);
			else if (7 === j && rh.cq(h8, h9)) return;
			a1B.cq(h8, h9)
		}
	}, this.p8 = function(h8, h9) {
		if (hM.p8(h8, h9), !pd.yV) {
			if (a2a.p8(h8, h9)) return void pd.pe();
			if (0 <= cv.pl(h8, h9)) return void pd.pe();
			if (cv.p8(h8, h9)) return void pd.pe();
			if (2 === j && ft.p8(h8, h9)) return void pd.pe();
			if (ra.p8(h8, h9, !0)) return
		}
		pd.p8(h8, h9)
	}, this.click = function(h8, h9) {
		pd.pf(), cv.a23() || a2l.cq(h8, h9, !1) || cv.cq(h8, h9, !1)
	}, this.pB = function(h8, h9, deltaY) {
		cv.u6[1].oK.pb || (cv.u6[2].oK.pb ? cv.u6[2].oK.pB(h8, h9, deltaY) : 0 === j && pd.pB(h8, deltaY))
	}, this.a2m = function() {
		ra.yf(), cv.yf(), 0 === j ? (pn.resize(), pd.yf()) : 7 === j && rh.resize(), aL.co = !0
	}, this.cy = function() {
		var h9, dC, dB, h8;
		8 !== j && 10 !== j && (cz.imageSmoothingEnabled = !0, this.nN(), pd.cy(), rZ.cy(), h9 = Math.floor(.3 * cu), dC = ch.tA("territorial.io"), dB = (dB = 1.75 * cu / dC.width) * dC.width < .98 * hG ? .98 * hG / dC.width : dB, cz
			.globalAlpha = .15, h8 = Math.floor(.5 * (hG - dB * dC.width)), h8 = Math.floor(h8 / dB), h9 = Math.floor(h9 - .5 * dC.height * dB), h9 = Math.floor(h9 / dB), cz.setTransform(dB, 0, 0, dB, h8, h9), cz.drawImage(dC, h8, h9), cz
			.setTransform(1, 0, 0, 1, 0, 0), cz.globalAlpha = 1, a2l.cy(), a1B.cy(), cv.cy(), hM.cy(), 0 === j ? rY.cy() : 2 === j ? ft.cy() : 3 === j ? rc.cy() : 5 === j ? rd.cy() : 6 === j ? rb.cy() : 7 === j && rh.cy(), cv.a2o(), a2a.cy(),
			cw.cy(), pm.cy(), lU.cy())
	}, this.nN = function() {
		var a2q, a2p;
		az.mE ? (a2p = a1 / az.b0, a2q = a2 / az.b1, cz.setTransform(a2p = a2q < a2p ? a2p : a2q, 0, 0, a2p, Math.floor((a1 - a2p * az.b0) / 2), Math.floor((a2 - a2p * az.b1) / 2)), cz.drawImage(az.mG, 0, 0), cz.setTransform(1, 0, 0, 1, 0, 0), cz
			.fillStyle = d2.iL) : cz.fillStyle = d2.hK, cz.fillRect(0, 0, a1, a2)
	}
}

function a2r() {
	this.cl = 0, this.eu = 0, this.lO = 0, this.pb = !1, this.vX = 10, this.bc = .12, this.a1u = !1, this.a2s = !1, this.a2t = !1, this.b = function() {
		this.pb = !0, this.resize(), this.a1u = !1
	}, this.resize = function() {
		this.pb && (this.cl = 1.15 * a1 < a2 ? Math.floor((a0 ? .94 : .69) * a1) : Math.floor((a0 ? .94 : .69) * a2 / 1.15), this.cl -= this.cl % this.vX, this.eu = +this.cl, this.lO = Math.floor(.15 * this.cl))
	}, this.cq = function(cr, cs, j) {
		var hD = (hG - this.cl) / 2;
		return cs -= (cu - this.eu - this.lO) / 2, (cr -= hD) < 0 || cs < 0 || cr >= this.cl - 1 || cs >= this.eu + this.lO - 1 || cr >= this.cl - this.lO && cs < this.lO ? (0 === j && (this.pb = !1, 0 === aT.pp() && pn.l(!0), aL.co = !0), !1) :
			(cs < this.lO || (cr = (cr = bJ(cr, hD = Math.floor(this.cl / this.vX)) + this.vX * bJ(cs - this.lO, hD)) < 0 ? 0 : cr >= aF.vb ? aF.vb - 1 : cr, (0 === j || 1 === j && !aF.aH[cr] || 2 === j && aF.aH[cr]) && (this.a2s = !aF.aH[cr],
				this.a1u = !0, this.a2t = !0, aF.aH[cr] = !aF.aH[cr], aF.vr(), aL.co = !0)), !0)
	}, this.p8 = function(cr, cs) {
		this.a1u && this.cq(cr, cs, this.a2s ? 1 : 2)
	}, this.a23 = function() {
		this.a2t && (aD(), this.a2t = !1), this.a2t = !1, this.a1u = !1
	}, this.cy = function() {
		cz.imageSmoothingEnabled = !0;
		for (var hD = (hG - this.cl) / 2, hE = (cu - this.eu - this.lO) / 2, nY = (cz.setTransform(1, 0, 0, 1, hD, hE), cz.fillStyle = d2.iN, cz.fillRect(0, this.lO, this.cl, this.eu), cz.fillStyle = d2.ib, cz.fillRect(0, 0, this.cl, this.lO), cz
				.fillStyle = d2.d3, cz.lineWidth = qU, cz.strokeStyle = d2.d3, cz.strokeRect(-1, -1, this.cl + 2, this.eu + this.lO + 2), cz.fillRect(0, this.lO - qU, this.cl, qU), cz.font = ce + Math.floor(.44 * this.lO) + cf, cz.textAlign =
				d1, cz.textBaseline = d0, cz.fillText("Select Your Emojis!", Math.floor((this.cl - .725 * this.lO) / 2), Math.floor(.55 * this.lO)), Math.floor(this.cl / this.vX)), zoom = (nY - 2 * this.bc * nY) / aF.cl, aE = aF.vb - 1; 0 <=
			aE; aE--) cz.setTransform(1, 0, 0, 1, Math.floor(hD + aE % this.vX * nY), Math.floor(hE + this.lO + bJ(aE, this.vX) * nY)), aF.aH[aE] && (cz.fillStyle = d2.id, cz.fillRect(0, 0, nY, nY)), cz.setTransform(zoom, 0, 0, zoom, Math.floor(
			hD + aE % this.vX * nY + this.bc * nY), Math.floor(hE + this.lO + bJ(aE, this.vX) * nY + this.bc * nY)), cz.drawImage(aF.t9[aE], 0, 0);
		cI.u4(Math.floor(hD + this.cl - .725 * this.lO), Math.floor(hE + .275 * this.lO), Math.floor(.45 * this.lO)), cz.setTransform(1, 0, 0, 1, 0, 0), cz.imageSmoothingEnabled = !1
	}
}

function s9() {
	var a2u, ad, a2v;

	function vm() {
		var j;
		0 === (j = aT.pp()) ? rY.a2d() : 6 === j ? g6.a2S(a2u) : 7 === j ? (rh.a2d(), g6.close(g6.a2w, 3240)) : 8 === j && (rV(!0), rY.a2d()), aT.setState(3), ra.yf(), a2z(a2u), aL.co = !0
	}

	function a2x(lk) {
		for (var aE = ad.length - 1; 0 <= aE; aE--)
			if (lk === ad[aE].code) return ad[aE].v;
		return a2v + lk
	}

	function a2z(lk) {
		ra.sx[2].vN = a2x(lk)
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
		}), a2v = "Error "
	}, this.b = function(a2N, lk) {
		a2u = lk;
		var j = aT.pp();
		if (6 === j) {
			if (4211 === lk) return void rd.b(0, 0);
			if (4214 !== lk) return void rb.a2M(a2N)
		} else {
			if (7 !== j) return 8 === j ? void(a2N !== g6.pQ || fs || g2.uh(a2x(lk))) : void 0;
			if (a2N !== g6.a2w) return
		}
		vm()
	}, this.a2Q = function(lk) {
		a2u = lk, 8 === aT.pp() ? g2.uh(a2x(lk)) : vm()
	}, this.resize = function() {
		a2z(a2u)
	}, this.cq = function(h8, h9) {
		3 === ra.pl(h8, h9, 3, 1) && this.a2k(h8, h9)
	}, this.a2k = function(h8, h9) {
		rY.b(), ra.p8(h8, h9, !1), aL.co = !0
	}, this.cy = function() {
		ra.a1p()
	}
}

function sA() {
	var input, color;
	this.pb = !1, this.lT = !1, this.b = function() {
		color = d2.iN, (input = document.createElement("INPUT")).setAttribute("type", "text"), input.setAttribute("name", "username"), input.setAttribute("id", "usernameField"), input.setAttribute("autocomplete", "username"), input.value = "",
			input.style.textAlign = "center", input.style.backgroundColor = color, input.style.borderRadius = "0", input.style.color = d2.d3, input.style.position = "absolute", input.readOnly = !1, input.addEventListener("input", function() {
				rY.a30()
			}), input.addEventListener("focus", function() {
				pn.lT = !0
			}), input.addEventListener("blur", function() {
				pn.lT = !1
			})
	}, this.resize = function() {
		var cj, qS, qT;
		this.pb && (qS = .3 * (cj = .22 * ra.eu / lX), qT = qU / lX, input.style.border = qT.toFixed(2) + "px solid " + d2.d3, input.style.font = ce + cj + cf, input.style.padding = qS.toFixed(2) + "px", input.style.left = (((hG - ra.cl) / lX -
			qT) / 2).toFixed(2) + "px", input.style.width = (ra.cl / lX - 2 * qS - qT).toFixed(2) + "px", input.style.top = ((ra.h9 - .52 * ra.eu) / lX).toFixed(2) + "px")
	}, this.get = function() {
		return input
	}, this.l = function(l) {
		this.pb !== l && ((this.pb = l) ? (this.resize(), document.body.appendChild(input)) : (this.lT = !1, document.body.removeChild(input)))
	}, this.pw = function(a31) {
		a31 && color === d2.iN || !a31 && color === d2.ip || (color = a31 ? d2.iN : d2.ip, input.style.backgroundColor = color)
	}
}

function sb() {
	var k4, a34, a35, a36;
	this.a32 = 0, this.a33 = 0, this.b = function(bc) {
		var i0;
		7 === aT.pp() && (k4 = bc, a34 = 0, a35 = aL.aM + 4500, a36 = rf.a37(k4) ? 2 : 0, aT.setState(10), cz.imageSmoothingEnabled = !0, aT.nN(), bc = ch.tA("loading"), i0 = 1, i0 = (a0 ? .396 : .25) * cb / bc.width, cz.setTransform(i0, 0, 0,
			i0, Math.floor((a1 - i0 * bc.width) / 2), Math.floor((a2 - i0 * bc.height) / 2)), cz.drawImage(bc, 0, 0), cz.setTransform(1, 0, 0, 1, 0, 0))
	}, this.gY = function() {
		0 < a36 && aL.aM > a35 && (a36--, a35 += 4500, 0 === aL.a39) && 0 === aL.fP() && (0 === a36 && g6.pQ < g6.a3A && (g6.pQ += g6.a3B), g6.yX(g6.pQ, 5))
	}, this.a3C = function() {
		10 === aT.pp() && 2 <= ++a34 && (rf.a3D(k4), k4 = null)
	}
}

function sY() {
	var a3F, a3G, a3H, a3I, a3J, a3K, a3L, a3N, a3O, a3Q, a3R, a3S, a3V, a3W, a3X, a3Y, a3Z, a3M = 48,
		a3T = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
		a3U = [0, 0, 0, 0];

	function a3c(aE, t9) {
		var aE = a3L[aE].getContext("2d", {
				alpha: !0
			}),
			zoom = (aE.clearRect(0, 0, a3M, a3M), a3M / t9.width),
			a3 = a3M / t9.height,
			zoom = a3 < zoom ? a3 : zoom;
		aE.imageSmoothingEnabled = !0, aE.setTransform(zoom, 0, 0, zoom, Math.floor((a3M - zoom * t9.width) / 2), Math.floor((a3M - zoom * t9.height) / 2)), aE.drawImage(t9, 0, 0), aE.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a3g(fQ, dF, a3j, dD) {
		dD.beginPath(), dD.moveTo(fQ, fQ), dD.lineTo(fQ + Math.cos(a3j) * dF, fQ + Math.cos(a3j + 1.5 * Math.PI) * dF), dD.stroke()
	}

	function a3x() {
		if (7 === aT.pp()) {
			for (var dQ, t9, dD, zoom, a3, eb = -1, aE = a3N.length - 1; 0 <= aE; aE--)
				if (null === a3N[aE].dC) {
					eb = aE;
					break
				} - 1 !== eb && (null !== (dQ = a3n(a3N[eb].a3r, a3N[eb].a3s)) ? a3N[eb].dC = dQ : (dQ = {
					b0: az.b0,
					b1: az.b1,
					mG: az.mG,
					mC: az.mC,
					mD: az.mD,
					mH: az.mH,
					me: az.me,
					a3o: az.a3o
				}, az.lw(a3N[eb].a3r, a3N[eb].a3s), az.mF.a3y(), (t9 = document.createElement("canvas")).width = 128, t9.height = 128, dD = t9.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / az.b0) < (a3 = 128 / az.b1) && (zoom = a3), dD.imageSmoothingEnabled = !0, dD.setTransform(zoom, 0, 0, zoom, (128 - zoom * az.b0) / 2, (128 - zoom * az.b1) / 2), dD.drawImage(az.mG, 0, 0), az.b0 = dQ.b0, az
				.b1 = dQ.b1, az.mG = dQ.mG, az.mC = dQ.mC, az.mD = dQ.mD, az.mH = dQ.mH, az.me = dQ.me, az.a3o = dQ.a3o, a3N[eb].dC = t9), aL.co = !0)
		}
	}

	function a3n(a3r, a3s) {
		for (var aE = a3N.length - 1; 0 <= aE; aE--)
			if (null !== a3N[aE].dC && a3N[aE].a3r === a3r && a3N[aE].a3s === a3s) return a3N[aE].dC;
		return null
	}
	this.b = function() {
		var aE;
		for (a3Z = 0, a3Q = -1, aT.setState(7), a3N = [], this.resize(), a3L = new Array(13), aE = a3L.length; 0 <= aE; aE--) a3L[aE] = document.createElement("canvas"), a3L[aE].width = a3M, a3L[aE].height = a3M;
		for (aE = 0; aE < 7; aE++) ! function(ux) {
			var a3e, dD = a3L[ux - 2].getContext("2d", {
					alpha: !0
				}),
				a3d = 1.5 * Math.PI,
				fQ = Math.floor(.5 * a3M),
				dF = Math.floor(.48 * a3M);
			dD.lineWidth = 2, dD.strokeStyle = d2.d3, dD.clearRect(0, 0, a3M, a3M);
			for (var aE = 0; aE < ux; aE++) a3e = a3d + 2 * Math.PI / ux,
				function(aE, fQ, dF, a3d, a3e, dD) {
					dD.fillStyle = fR.a3i[aE], dD.beginPath(), dD.arc(fQ, fQ, dF, a3d, a3e), dD.lineTo(fQ, fQ), dD.fill()
				}(aE + 1, fQ, dF, a3d, a3e, dD), 0 !== aE && a3g(fQ, dF, a3d, dD), a3d = a3e;
			a3g(fQ, dF, 1.5 * Math.PI, dD),
				function(fQ, dF, dD) {
					dD.beginPath(), dD.arc(fQ, fQ, dF, 0, 2 * Math.PI), dD.stroke()
				}(fQ, dF, dD)
		}(aE + 2);
		a3c(7, ch.get(4)), a3c(8, aF.t9[27]), a3c(9, aF.t9[46]), a3c(10, aF.t9[36]), a3c(11, ch.get(19)), a3c(12, ch.get(20)), aL.co = !0
	}, this.a2j = function() {
		this.a2d(), g6.a2S(3240), rY.b(), aL.co = !0
	}, this.a2d = function() {
		a3N = [], a3L = []
	}, this.vV = function() {
		return a3S
	}, this.resize = function() {
		var a3k, m1, xW, a3l;
		for (a3H = [0, 0], a3O = [0, 0, 0, 0], a3Y = a0 ? (a3R = Math.floor(.8 * .4 * cb), a3S = Math.floor(.56 * a3R), a3O[0] = ct, a1 < a2 ? (a3O[1] = a3S + 2 * ct, a3O[2] = a1 - 3 * a3O[0], a3O[3] = a1B.cx() - 3 * ct - a3S, a3W = Math.floor(
				.95 * a3S), a3X = Math.floor((a1 - a3R - ct) / 2), Math.floor(ct + a3S / 2)) : (a3O[1] = ct, a3O[2] = a1 - 3 * ct - a3R, a3O[3] = a1B.cx() - 2 * ct, a3W = Math.floor(.8 * a3R), a3O[3] - a3S < a3R && (a3W = Math.floor(.8 * (
				a3O[3] - a3S)), a3W = uT(a3S, a3W)), a3X = Math.floor(a1 - a3R / 2 - ct), uT(a3Y = Math.floor(ct + a3S + (a3O[3] - a3S) / 2), Math.floor(a3S + 2 * ct + a3W / 2)))) : (a3R = Math.floor(.2016 * cb), a3S = Math.floor(.56 * a3R), a3O[
				2] = Math.floor(.5 * a1), a3O[3] = Math.floor(.5 * a2), a3O[1] = Math.floor(.45 * (a2 - a3O[3])), a3O[0] = Math.floor((a1 - a3O[2]) / 2), a3W = Math.floor(.75 * a3S), a3X = Math.floor(a1 / 2), Math.floor(a3O[1] + a3O[3] + (
				a2 - a3O[3] - a3O[1]) / 2)), a3V = ce + Math.floor(.65 * a3S / 4) + cf, a3k = m1 = 1; a3k * m1 < a3N.length;) a3O[3] / (m1 + 1) < a3O[2] / (a3k + 1) ? a3k++ : m1++;
		a3F = (xW = (a3O[2] - (a3k - 1) * ct) / a3k) < (a3l = (a3O[3] - (m1 - 1) * ct) / m1) ? xW : a3l, a3G = Math.floor(a3F), a3K = ce + Math.floor(.5 * a3F / 5) + cf, a3H[0] = a3k, a3H[1] = m1, a3I = a3O[0] + Math.floor((a3O[2] - a3H[0] *
			a3F - (a3H[0] - 1) * ct) / 2), a3J = a3O[1] + Math.floor((a3O[3] - a3H[1] * a3F - (a3H[1] - 1) * ct) / 2)
	}, this.a1C = function(a3m, bc) {
		var aE, a3, dC, bU = a3N.length;
		for (a3U = a3m, aE = 0; aE < bc.length; aE++) dC = a3n(bc[aE].me, bc[aE].a3o), a3N.push({
			a3p: bc[aE].id,
			rE: bc[aE].rE,
			rF: bc[aE].a3q,
			a3r: bc[aE].me,
			a3s: bc[aE].a3o,
			joined: bc[aE].a3t,
			vS: bc[aE].a2W,
			a3u: bc[aE].a3u,
			dC: dC,
			a3v: bc[aE].a3v,
			ok: bc[aE].ok
		});
		for (aE = bU - 1; 0 <= aE; aE--) a3N.shift();
		if (-1 !== a3Q)
			for (a3 = a3Q, a3Q = -1, aE = a3N.length - 1; 0 <= aE; aE--)
				if (a3N[aE].a3p === a3) {
					a3Q = a3;
					break
				}(a3N.length > a3Z || a3N.length < a3Z) && (a3Z = a3N.length, this.resize()), this.a3w(), aL.co = !0
	}, this.a3w = function() {
		for (var aE = a3N.length - 1; 0 <= aE; aE--) null === a3N[aE].dC && setTimeout(a3x, 0)
	}, this.cq = function(h8, h9) {
		return 4 * ((h8 - a3X) * (h8 - a3X) + (h9 - a3Y) * (h9 - a3Y)) <= a3W * a3W ? (this.a2j(), ra.p8(h8, h9, !1), !0) : function(h8, h9) {
			var eb, em, hD, hE;
			if (0 !== a3N.length) {
				var aE = 0;
				for (hE = a3J, em = 0; em < a3H[1]; em++) {
					for (hD = a3I, eb = 0; eb < a3H[0]; eb++) {
						if (hD < h8 && h8 < hD + a3F && hE < h9 && h9 < hE + a3F) return jG.a40(a3N[aE].a3p), a3Q = a3N[aE].a3p !== a3Q ? a3N[aE].a3p : -1, aL.co = !0;
						if (++aE >= a3N.length) return !1;
						hD += a3F + ct
					}
					hE += a3F + ct
				}
			}
			return !1
		}(h8, h9)
	}, this.cy = function() {
		var eb, em, h8, dF, zoom, aE = 0,
			h9 = a3J;
		if (cz.imageSmoothingEnabled = !0, cz.lineWidth = 3, dF = Math.floor(.5 * a3W), cz.fillStyle = d2.iL, cz.beginPath(), cz.arc(a3X, a3Y, dF, 0, 2 * Math.PI), cz.fill(), cz.strokeStyle = d2.d3, cz.beginPath(), cz.arc(a3X, a3Y, dF, 0, 2 *
				Math.PI), cz.stroke(), dF = ch.get(0).height, zoom = .6 * a3W / dF, cz.setTransform(zoom, 0, 0, zoom, Math.floor(a3X - .56 * zoom * ch.get(0).width), Math.floor(a3Y - .5 * zoom * dF)), cz.drawImage(ch.get(0), 0, 0), cz
			.setTransform(1, 0, 0, 1, 0, 0),
			function() {
				cz.fillStyle = d2.iL, cz.fillRect(a1 - a3R - ct, ct, a3R, a3S), 0 <= a3Q ? (cz.fillStyle = d2.id, cz.fillRect(a1 - a3R - ct, ct, a3R, Math.floor(.25 * a3S))) : (cz.fillStyle = d2.j1, cz.fillRect(a1 - a3R - ct, ct + Math.floor(
					.25 * a3S), a3R, Math.floor(.25 * a3S)));
				cz.strokeStyle = d2.d3, cz.strokeRect(a1 - a3R - ct, ct, a3R, a3S), cz.fillStyle = d2.d3, cz.font = a3V, cz.textBaseline = d0;
				for (var h9, qS = Math.floor(.04 * a3R), qT = Math.floor(.08 * a3S), aE = 3; 0 <= aE; aE--) h9 = Math.floor(ct + (aE + 1) * (a3S + 2 * qT) / 5 - qT), cz.textAlign = ub, cz.fillText(a3T[aE], a1 - a3R - ct + qS, h9), cz.textAlign =
					w1, cz.fillText(cK.hP.hQ(a3U[aE]), a1 - ct - qS, h9)
			}(), 0 !== a3N.length)
			for (em = 0; em < a3H[1]; em++) {
				for (h8 = a3I, eb = 0; eb < a3H[0]; eb++) {
					if (! function(aE, h8, h9) {
							var zoom, em, a44, a46, a47;
							null === a3N[aE].dC ? (cz.fillStyle = d2.iL, cz.fillRect(h8, h9, a3G, a3G)) : (zoom = a3G / 128, cz.setTransform(zoom, 0, 0, zoom, h8, h9), cz.drawImage(a3N[aE].dC, 0, 0), cz.setTransform(1, 0, 0, 1, 0, 0));
							a3Q === a3N[aE].a3p ? (function(h8, h9) {
								var nY = Math.floor(.2 * a3G),
									nZ = Math.floor(.3 * nY);
								cz.fillStyle = d2.ih, cz.fillRect(h8 + a3G - nY, h9, nY, nY), cz.fillStyle = d2.hK, cz.fillRect(h8 + a3G - nY, h9, 2, nY), cz.fillRect(h8 + a3G - nY, h9 + nY - 2, nY, 2), cI.u4(h8 + a3G - nY + nZ, h9 + nZ,
									nY - 2 * nZ), cz.setTransform(1, 0, 0, 1, 0, 0)
							}(h8, h9), cz.lineWidth = 3, cz.fillStyle = d2.ih) : cz.fillStyle = d2.iJ;
							if (a46 = Math.floor(a3F / 4), cz.fillRect(h8, h9, a46, a46), a47 = Math.floor(h9 + .8 * a3F), cz.fillRect(h8, a47, a3G, Math.floor(a3F / 5)), function(aE, h8, h9) {
									var zoom;
									a3N[aE].rF && (aE = ch.get(4), zoom = .5 * a3F / aE.width, cz.setTransform(zoom, 0, 0, zoom, Math.floor(h8 + (a3F - zoom * aE.width) / 2), Math.floor(h9 + (a3F - zoom * aE.height) / 2)), cz.globalAlpha = .6, cz
										.drawImage(aE, 0, 0), cz.globalAlpha = 1, cz.setTransform(1, 0, 0, 1, 0, 0))
								}(aE, h8, h9), a3N[aE].a3v) {
								for (em = a44 = 0; em < a3N[aE].a3v; em++) a44 = Math.max(a44, cm.measureText(a3N[aE].ok[em], a3K));
								a44 += .05 * a3F, em = 5 === a3N[aE].a3v, a46 = em ? h9 + a46 : Math.max(h9 + .8 * a3F - .11 * a3N[aE].a3v * a3F, h9 + a46), a47 = em ? a47 : Math.min(a46 + .11 * a3N[aE].a3v * a3F + .05 * a3F, a47), cz.fillRect(
									h8, a46, a44, a47 - a46)
							}
							for (cz.font = a3K, cz.textBaseline = d0, cz.textAlign = ub, cz.fillStyle = d2.ix, cz.fillText(a3N[aE].joined.toString(), Math.floor(h8 + .22 * a3F), Math.floor(h9 + .9 * a3F)), cz.fillStyle = d2.d3, em = 0; em < a3N[
									aE].a3v; em++) cz.fillText(a3N[aE].ok[a3N[aE].a3v - em - 1], Math.floor(h8 + .03 * a3F), Math.floor(h9 + .77 * a3F - .11 * em * a3F));
							cz.textAlign = w1, cz.fillStyle = d2.ik, cz.fillText(a3N[aE].vS.toString(), Math.floor(h8 + .81 * a3F), Math.floor(h9 + .9 * a3F)), cz.strokeStyle = a3Q === a3N[aE].a3p ? d2.ie : d2.iR, cz.strokeRect(h8, h9, a3G, a3G),
								a47 = Math.floor(.16 * a3F), zoom = a47 / a3M, cz.setTransform(zoom, 0, 0, zoom, Math.floor(h8 + .33 * a47), Math.floor(h9 + .33 * a47)), a3L.length > a3N[aE].rE && cz.drawImage(a3L[a3N[aE].rE], 0, 0);
							cz.setTransform(zoom, 0, 0, zoom, Math.floor(h8 + .15 * a47), Math.floor(h9 + a3F - 1.08 * a47)), cz.drawImage(a3L[11], 0, 0), cz.setTransform(zoom, 0, 0, zoom, Math.floor(h8 + a3F - 1.05 * a47), Math.floor(h9 + a3F -
								1.15 * a47)), cz.drawImage(a3L[12], 0, 0), cz.setTransform(1, 0, 0, 1, 0, 0)
						}(aE, Math.floor(h8), Math.floor(h9)), ++aE >= a3N.length) return;
					h8 += a3F + ct
				}
				h9 += a3F + ct
			}
	}
}

function sB() {
	this.b = function(h8, h9) {
		aT.setState(5), ra.p8(h8, h9, !1), aL.co = !0
	}, this.cy = function() {
		ra.a1q()
	}, this.cq = function(h8, h9) {
		var aE = ra.pl(h8, h9, 5, 2);
		5 === aE ? aP() : 6 === aE && (rY.b(), ra.p8(h8, h9, !1), aL.co = !0)
	}
}

function sC() {
	var a4A = [0, 0, 0, 0];

	function a1I(h8, h9, d5, a4S) {
		cz.fillStyle = d2.d3;
		var nY = uT(2, Math.floor((a4S ? .5 : .35) * d5)),
			vH = (nY -= nY % 2, uT(2, Math.floor(.1 * d5))),
			d5 = (vH -= vH % 2, Math.floor((d5 - nY) / 2)),
			hF = Math.floor(d5 + (nY - vH) / 2);
		cz.fillRect(h8 + d5, h9 + hF, nY, vH), a4S && cz.fillRect(h8 + hF, h9 + d5, vH, nY)
	}

	function a2V(h8, h9, cl, eu, tC, cZ, vN, eV, ux) {
		cz.fillStyle = tC, cz.fillRect(h8, h9, cl, eu), 0 <= eV && function(h8, h9, cl, eu, eV) {
			cz.fillStyle = "rgba(" + 22 * eV + "," + (110 - 22 * eV) + ",0,0.75)", cz.fillRect(h8, h9, (1 + eV) * cl / 6, eu)
		}(h8, h9, cl, eu, eV), 0 < ux && function(h8, h9, cl, eu, ux) {
			cz.fillStyle = "rgba(255,255,255,0.3)", cz.fillRect(h8, h9, ux * cl / bZ, eu)
		}(h8, h9, cl, eu, ux), cz.strokeStyle = d2.d3, cz.strokeRect(h8, h9, cl, eu), 0 !== cZ && (cz.fillStyle = d2.d3, cz.font = ce + Math.floor(cZ * eu) + cf, cz.fillText(vN, Math.floor(h8 + cl / 2), Math.floor(h9 + .52 * eu)))
	}
	this.fu = [{
		be: 0,
		ux: 512
	}], this.b = function() {
		ri.pb = !1, aT.setState(2), this.resize(), aL.co = !0
	}, this.a2d = function() {}, this.resize = function() {
		a4A[2] = Math.floor((a0 ? .49 : .4) * cb), a4A[1] = Math.floor((a2 - a4A[2] / 6 - this.fu.length * (ct + a4A[2] / 10)) / 2), a4A[0] = Math.floor((a1 - a4A[2]) / 2), ri.pb && ri.resize()
	}, this.a4B = function(rE) {
		var aE;
		if (6 < rE) this.fu = [{
			be: 0,
			ux: 512
		}];
		else {
			for (this.fu = [], aE = 0; aE < rE + 2; aE++) this.fu.push({
				be: 0,
				ux: 0
			});
			this.a4C()
		}
	}, this.a4D = function(a4E, a4F) {
		for (var bU = a4E.length, aE = 0; aE < bU; aE++) this.fu[aE].be = a4E[aE], this.fu[aE].ux = a4F[aE]
	}, this.a4G = function(qQ) {
		var aE, bU;
		if (1 === qQ.nc.length)
			for (bU = this.fu.length, qQ.a4E = new Array(bU), qQ.a4F = new Array(bU), aE = 0; aE < bU; aE++) qQ.a4E[aE] = this.fu[aE].be, qQ.a4F[aE] = this.fu[aE].ux
	}, this.a2k = function() {
		aL.co = !0, ri.pb ? ri.pb = !1 : (this.a2d(), rY.b())
	}, this.rI = function() {
		var aE, ux;
		if (fm.fn) return fm.fo.a4H;
		for (ux = 0, aE = this.fu.length - 1; 0 <= aE; aE--) ux += this.fu[aE].ux;
		return ux
	}, this.p8 = function(h8, h9) {
		return !(!ri.pb || !ri.p8(h8, h9)) || -1 !== this.pl(h8, h9)
	}, this.a4I = function() {
		g6.pQ = 0, g6.yX(0, 3) && jG.a4J(0)
	}, this.a4K = function() {
		var eb;
		this.a4I(), aT.a2c(), fm.fn ? fm.a4L() : (eb = (eb = this.fu.length - 2) < 0 ? 7 : eb, rB(Math.floor(16384 * Math.random()), 0, [{
			name: rY.a4M(),
			a4N: cv.u6[2].oK.a21(),
			a4O: 0
		}], eb, !1, !1))
	}, this.cq = function(h8, h9) {
		if (cw.pb || cv.u6[1].oK.pb || cv.u6[2].oK.pb) return !1;
		if (ri.pb && !fm.fn) return ri.cq(h8, h9);
		var aE, eb, max, nY, h9 = this.pl(h8, h9);
		if (-1 === h9) return !1;
		if (0 === h9) this.a2k();
		else if (1 === h9) fm.fn ? (fm.pe(), aL.co = !0) : ri.show();
		else if (100 === h9) pj.a4P();
		else if (2 === h9) this.a2d(), this.a4K();
		else {
			if (fm.fn) return !1;
			if (27 === h9) this.fu.length < 8 && (this.fu.push({
				be: 0,
				ux: bZ
			}), this.a4C(), this.resize(), aL.co = !0);
			else if (aE = Math.floor((h9 - 3) / 3), h9 % 3 == 0) 1 < this.fu.length && (this.fu.splice(aE, 1), this.resize(), aL.co = !0);
			else if (nY = (a4A[2] - a4A[2] / 10 - 2 * ct) / 2, h9 % 3 == 1) 0 === aE && 1 === this.fu[aE].ux || (h8 < a4A[0] + a4A[2] - 1.5 * nY - ct ? this.fu[aE].be-- : this.fu[aE].be++, this.fu[aE].be < 0 ? this.fu[aE].be = 5 : 5 < this.fu[aE]
				.be && (this.fu[aE].be = 0), aL.co = !0);
			else {
				for (aL.co = !0, h9 = (h8 - (a4A[0] + a4A[2] - nY)) / nY - .5, h9 *= h9 < 0 ? -h9 : h9, h9 = 0 === (h9 = Math.floor(h9 * bZ)) ? 1 : h9, max = bZ, eb = this.fu.length - 1; 0 <= eb; eb--) aE !== eb && (max -= this.fu[eb].ux);
				if (h9 < 0) {
					if (1 === this.fu[aE].ux) return this.fu[aE].ux = max, !0
				} else if (this.fu[aE].ux === max) return this.fu[aE].ux = 1, !0;
				this.fu[aE].ux += h9, this.fu[aE].ux < 1 ? this.fu[aE].ux = 1 : this.fu[aE].ux > max && (this.fu[aE].ux = max)
			}
		}
		return !0
	}, this.a4C = function() {
		for (var ux = Math.floor(bZ / this.fu.length), a4Q = bZ % this.fu.length, aE = this.fu.length - 1; 0 <= aE; aE--) this.fu[aE].ux = ux;
		this.fu[0].ux += a4Q
	}, this.pl = function(h8, h9) {
		var nY = (a4A[2] - 3 * ct) / 4,
			vH = a4A[2] / 6;
		if (h8 < a4A[0] || h9 < a4A[1] || a4A[0] + a4A[2] <= h8) return -1;
		if (h9 < a4A[1] + vH) return h8 < a4A[0] + nY ? 0 : h8 < a4A[0] + nY + ct ? -1 : h8 < a4A[0] + 2 * nY + ct ? 100 : h8 < a4A[0] + 2 * (nY + ct) ? -1 : h8 < a4A[0] + 3 * nY + 2 * ct ? 1 : h8 < a4A[0] + 3 * (nY + ct) ? -1 : 2;
		for (var hE, vI = a4A[2] / 10, nY = (a4A[2] - vI - 2 * ct) / 2, aE = 0; aE < this.fu.length; aE++) {
			if (h9 < (hE = a4A[1] + vH + ct + aE * (vI + ct))) return -1;
			if (!(hE + vI < h9)) return h8 < a4A[0] + vI ? 3 + 3 * aE : h8 < a4A[0] + vI + ct ? -1 : h8 < a4A[0] + a4A[2] - nY - ct ? 4 + 3 * aE : h8 < a4A[0] + a4A[2] - nY ? -1 : 5 + 3 * aE
		}
		return !(this.fu.length < 8) || h9 < (hE = a4A[1] + vH + ct + this.fu.length * (vI + ct)) || hE + vI < h9 || a4A[0] + vI < h8 ? -1 : 27
	}, this.cy = function() {
		cz.lineWidth = qU, cz.textAlign = d1, cz.textBaseline = d0;
		var nY = (a4A[2] - 3 * ct) / 4,
			vH = a4A[2] / 6;
		if (a2V(a4A[0], a4A[1], nY, vH, "rgba(128,0,0,0.75)", .34, "Back", -1, -1), a2V(a4A[0] + nY + ct, a4A[1], nY, vH, "rgba(128,0,128,0.75)", .31, "Custom", -1, -1), a2V(a4A[0] + 2 * (nY + ct), a4A[1], nY, vH, "rgba(" + (fm.fn ? 128 : 0) +
				",128,128,0.75)", .34, fm.fn ? "Reset" : "Maps", -1, -1), a2V(a4A[0] + a4A[2] - nY, a4A[1], nY, vH, "rgba(0,128,0,0.75)", .34, "Start", -1, -1), !fm.fn) {
			for (var hE, vI = a4A[2] / 10, nY = (a4A[2] - vI - 2 * ct) / 2, aE = 0; aE < this.fu.length; aE++) hE = a4A[1] + vH + ct + aE * (vI + ct), a2V(a4A[0], hE, vI, vI, 1 < this.fu.length ? "rgba(128,0,0,0.75)" : "rgba(90,90,90,0.75)", 0,
				null, -1), 1 < this.fu.length && a1I(a4A[0], hE, vI, !1), a2V(a4A[0] + vI + ct, hE, nY, vI, d2.iN, .4, this.a4R(aE), this.fu[aE].be, -1), a2V(a4A[0] + a4A[2] - nY, hE, nY, vI, d2.iN, .4, this.un(aE), -1, this.fu[aE].ux);
			this.fu.length < 8 && (hE = a4A[1] + vH + ct + this.fu.length * (vI + ct), a2V(a4A[0], hE, vI, vI, "rgba(0,128,20,0.75)", 0, null, -1, -1), a1I(a4A[0], hE, vI, !0)), ri.pb && ri.cy()
		}
	}, this.a4R = function(aE) {
		return 0 === aE && 1 === this.fu[aE].ux ? "You" : fB.fh[this.fu[aE].be]
	}, this.un = function(aE) {
		return 1 === this.fu[aE].ux ? "1 Player" : this.fu[aE].ux + " Players"
	}
}

function w9() {
	this.bU = 0, this.cl = 0, this.u6 = null, this.b = function() {
		this.u6 = [], this.u6.push({
			h8: 0,
			h9: 0,
			t7: a0,
			oK: null
		}), this.u6.push({
			h8: 0,
			h9: 0,
			t7: !1,
			oK: new a2r
		}), this.u6.push({
			h8: 0,
			h9: 0,
			t7: !1,
			oK: new a1t
		}), this.u6[2].oK.a1y(), this.bU = this.u6.length, this.cl = 0
	}, this.yf = function() {
		this.cl = Math.floor((a0 ? .063 : .04) * cb), this.cl += 4 - this.cl % 4, this.u6[0].h8 = ct, this.u6[0].h9 = cu - this.cl - ct;
		for (var aE = 1; aE < this.bU; aE++) this.u6[aE].h8 = this.u6[aE - 1].h8 + Math.floor(a0 ? 1.5 * ct : 3.7 * ct) + this.cl, this.u6[aE].h9 = this.u6[0].h9
	}, this.pl = function(cr, cs) {
		if (ch.ci())
			for (var aE = this.bU - 1; 0 <= aE; aE--)
				if (cr >= this.u6[aE].h8 && cs >= this.u6[aE].h9 && cr < this.u6[aE].h8 + this.cl && cs < this.u6[aE].h9 + this.cl) return aE;
		return -1
	}, this.a2h = function() {
		for (var aE = 2; 1 <= aE; aE--)
			if (this.u6[aE].oK.pb) return !0;
		return !1
	}, this.resize = function() {
		for (var aE = 2; 1 <= aE; aE--) this.u6[aE].oK.resize()
	}, this.pq = function() {
		return this.u6[1].oK.pb ? (this.u6[1].oK.cq(-5e3, -5e3, 0), !0) : !!this.u6[2].oK.pb && (this.u6[2].oK.cq(-5e3, -5e3), !0)
	}, this.cq = function(cr, cs, a1S) {
		if (a1S) {
			if (this.u6[1].oK.pb) return this.u6[1].oK.cq(cr, cs, 0), !0;
			if (this.u6[2].oK.pb) return this.u6[2].oK.cq(cr, cs), !0
		}
		cr = this.pl(cr, cs);
		if (a1S) {
			if (0 === cr) return this.u6[cr].t7 = !this.u6[cr].t7, a0 = this.u6[cr].t7, q3.a4V(0), aB(this.u6[0].t7, !1), !0;
			if (1 <= cr && cr < 3) return this.u6[cr].oK.b(), pn.l(!1), aL.co = !0
		}
		return !1
	}, this.p8 = function(cr, cs) {
		return this.u6[1].oK.pb ? (this.u6[1].oK.p8(cr, cs), !0) : !!this.u6[2].oK.pb && (this.u6[2].oK.p8(cr), !0)
	}, this.a23 = function() {
		for (var aE = 2; 1 <= aE; aE--)
			if (this.u6[aE].oK.pb) return this.u6[aE].oK.a23(), !0;
		return !1
	}, this.cy = function() {
		if (ch.ci()) {
			cz.imageSmoothingEnabled = !0;
			for (var aE = this.bU - 1; 0 <= aE; aE--) cz.fillStyle = this.u6[aE].t7 ? d2.ig : d2.iN, cz.fillRect(this.u6[aE].h8, this.u6[aE].h9, this.cl, this.cl), 0 === aE ? this.a4W(aE, ch.get(15)) : 1 === aE ? this.a4X() : 2 === aE && this
				.a4Y(), cz.setTransform(1, 0, 0, 1, 0, 0), cz.lineWidth = qU, cz.strokeStyle = d2.d3, cz.strokeRect(this.u6[aE].h8, this.u6[aE].h9, this.cl, this.cl);
			cz.imageSmoothingEnabled = !1
		}
	}, this.a4W = function(aE, t9) {
		var l5 = .08 * this.cl,
			zoom = (this.cl - 2 * l5) / t9.width;
		cz.setTransform(zoom, 0, 0, zoom, this.u6[aE].h8 + l5, this.u6[aE].h9 + (this.cl - zoom * t9.height) / 2), cz.drawImage(t9, 0, 0)
	}, this.a4X = function() {
		var l5 = .06 * this.cl,
			zoom = (this.cl - 2 * l5) / aF.cl;
		cz.setTransform(zoom, 0, 0, zoom, this.u6[1].h8 + l5, this.u6[1].h9 + l5), cz.drawImage(aF.t9[4], 0, 0)
	}, this.a4Y = function() {
		cz.setTransform(1, 0, 0, 1, this.u6[2].h8, this.u6[2].h9);
		for (var be = this.cl / 4, h8 = 3; 0 <= h8; h8--)
			for (var h9 = 3; 0 <= h9; h9--) {
				var dF = Math.floor(367 * (h8 + 1) * (h9 + 1) % 256),
					qQ = Math.floor(687 * (h8 + 1) * (h9 + 1) % 256),
					em = Math.floor(651 * (h8 + 1) * (h9 + 1) % 256);
				cz.fillStyle = "rgb(" + dF + "," + qQ + "," + em + ")", cz.fillRect(h8 * be, h9 * be, be, be)
			}
	}, this.a2o = function() {
		for (var aE = 2; 1 <= aE; aE--)
			if (this.u6[aE].oK.pb) return void this.u6[aE].oK.cy()
	}
}

function sD() {
	var username, a4Z;

	function a4h() {
		var tm;
		return 0 === username.indexOf("vote ") && 2 === (tm = username.split(" ")).length ? (rY.a4a = tm[1], a4l(), g6.yX(0, 7) && jG.a4m(0), rc.a2Q(3252), 1) : void 0
	}

	function a4l() {
		username = o(), pn.get().value = username, pn.pw(!0)
	}

	function a4g() {
		var max, a4n;
		if (0 === username.indexOf("account ")) return 2 !== (a4n = username.split(" ")).length || (max = Math.floor(Math.pow(2, 48)), (a4n = parseInt(w.x(a4n[1]))) <= 0) || max <= a4n ? (a4l(), rc.a2Q(3266)) : y(a4n) ? (a4l(), rc.a2Q(3231)) : (
		a4l(), 5 <= q ? rc.a2Q(3232) : (rc.a2Q(3265), a2a.pb = !0, a2a.cd = -1)), 1
	}

	function a4j() {
		return void 0 !== username && w.nx(username)
	}

	function a4e() {
		if (a4j()) return pn.pw(!0), 1;
		pn.pw(!1)
	}
	this.a4a = "", this.a4b = -7e3, this.b = function(a4c) {
		q < 5 || (a4Z && aL.aM > a4Z + 144e5 ? n.setState(14) : a4Z = aL.aM), aT.setState(0), ra.yf(), pn.l(!0), rZ.b(), cv.yf(), a4c && aK() ? setTimeout(function() {
			0 === aT.pp() && aJ(12)
		}, 15e3) : aJ(12), void 0 === username && (username = o(), pn.get().value = username, a4e())
	}, this.a2d = function() {
		aJ(13), pn.l(!1)
	}, this.a4f = function(cd) {
		return 0 === cd ? ra.cl : 1 === cd ? Math.floor(.3 * ra.eu) : 2 === cd ? pn.get().style.font : username
	}, this.a30 = function() {
		var u;
		username = pn.get().value.trim(), a4e(), "password" !== username && "account" !== username || (u = w.a9(t().toString()), username = "account " + u, pn.get().value = username)
	}, this.cq = function(h8, h9) {
		aL.q0(), 1 === ra.pl(h8, h9, 1, 1) ? a4g() || a4h() || (aJ(10), a4e() ? (this.a2d(), a6(username), ft.b()) : rc.a2Q(4214)) : 0 === ra.pl(h8, h9, 0, 1) && this.a2f()
	}, this.a2f = function() {
		a4g() || a4h() || (aJ(10), a4j() && 5 <= username.length && 40 === username.charCodeAt(0) && 40 === username.charCodeAt(1) && 41 === username.charCodeAt(3) && 41 === username.charCodeAt(4) ? rb.a2H(Math.abs(username.charCodeAt(2) + 5)) :
			rb.a2H(hM.a4k), a4e() ? ch.ci() ? (this.a2d(), a6(username), fm.pe(), rb.b()) : rc.a2Q(3228) : rc.a2Q(4214))
	}, this.a4o = function() {
		return !cv.a2h() && !cw.pb && !pm.pb
	}, this.cy = function() {
		var fQ, i0;
		this.a4o() && (cz.imageSmoothingEnabled = !0, fQ = ch.tA("territorial.io"), i0 = 1.1 * ra.cl / fQ.width, cz.setTransform(i0, 0, 0, i0, Math.floor((hG - i0 * fQ.width) / 2), ra.h9 - i0 * fQ.height - .72 * ra.eu), cz.drawImage(fQ, 0, 0), cz
			.setTransform(1, 0, 0, 1, 0, 0), ra.a1n())
	}, this.a4M = function() {
		return username
	}
}

function sE() {
	var a4q, dC, ca, a4r;

	function a4u(cd, name, a4v, v) {
		ca[cd] = name, dC[cd] = new Image, dC[cd].onload = function() {
			0 < a4v && ! function(cd, a4v) {
				var h8, h9, aE, fQ = document.createElement("canvas"),
					cl = dC[cd].width,
					eu = dC[cd].height,
					dD = (fQ.width = cl, fQ.height = eu, fQ.getContext("2d", {
						alpha: !0
					})),
					d9 = (dD.drawImage(dC[cd], 0, 0), dD.getImageData(0, 0, cl, eu)),
					mK = d9.data;
				if (a4v < 3) {
					var a4y = 2 === a4v ? 160 : 600;
					for (h8 = cl - 1; 0 <= h8; h8--)
						for (h9 = eu - 1; 0 <= h9; h9--) mK[aE = 4 * (h8 + h9 * cl)] + mK[aE + 1] + mK[aE + 2] < a4y && (mK[aE + 3] = Math.floor(255 * (mK[aE] + mK[aE + 1] + mK[aE + 2]) / a4y))
				} else if (3 === a4v)
					for (h8 = cl - 1; 0 <= h8; h8--)
						for (h9 = eu - 1; 0 <= h9; h9--) 0 === mK[aE = 4 * (h8 + h9 * cl)] && 200 < mK[aE + 1] && 0 === mK[aE + 2] && (mK[aE + 3] = 0);
				else if (4 === a4v) ! function(mK, cl, eu) {
					var h8, h9, aE;
					for (h8 = cl - 1; 0 <= h8; h8--)
						for (h9 = eu - 1; 0 <= h9; h9--) mK[1 + (aE = 4 * (h8 + h9 * cl))] > mK[aE] + 20 && mK[1 + aE] > mK[2 + aE] + 20 && mK[aE] + mK[2] < 40 && (mK[3 + aE] = 255 - mK[1 + aE], mK[aE] = mK[1 + aE] = mK[2 + aE] = mK[aE])
				}(mK, cl, eu);
				else if (5 === a4v) ! function(mK, cl, eu, id) {
					var h8, h9, aE;
					for (h8 = cl - 1; 0 <= h8; h8--)
						for (h9 = eu - 1; 0 <= h9; h9--) 200 < mK[1 + (aE = 4 * (h8 + h9 * cl))] && mK[1 + aE] - 20 > mK[aE] && mK[1 + aE] - 20 > mK[2 + aE] ? mK[aE] + mK[2 + aE] < 40 ? mK[3 + aE] = 0 : (mK[3 + aE] = mK[aE], mK[aE] = 255,
							mK[1 + aE] = 255, mK[2 + aE] = 255) : mK[aE] < 50 && mK[1 + aE] < 50 && mK[2 + aE] < 50 && (mK[aE] + mK[1 + aE] + mK[2 + aE] < 50 ? (mK[1 + aE] = 0 === id ? mK[1 + aE] : 160, mK[3 + aE] = 180) : (mK[1 +
							aE] = 0 === id ? mK[1 + aE] : 160, mK[3 + aE] = 180 + Math.floor(75 * (mK[aE] + mK[1 + aE] + mK[2 + aE] - 50) / 100)))
				}(mK, cl, eu, 0);
				else if (6 === a4v)
					for (h8 = cl - 1; 0 <= h8; h8--)
						for (h9 = eu - 1; 0 <= h9; h9--) mK[(aE = 4 * (h8 + h9 * cl)) + 3] = Math.floor(255 * (mK[aE] + mK[aE + 1] + mK[aE + 2]) / 765), mK[aE] = mK[aE + 1] = mK[aE + 2] = 255;
				else if (7 === a4v)
					for (h8 = cl - 1; 0 <= h8; h8--)
						for (h9 = eu - 1; 0 <= h9; h9--) mK[(aE = 4 * (h8 + h9 * cl)) + 1] > mK[aE + 2] + 10 && (mK[aE + 3] = mK[aE], mK[aE + 1] = mK[aE + 2]);
				dD.putImageData(d9, 0, 0), dC[cd] = fQ
			}(cd, a4v), a4x()
		}, dC[cd].onerror = function(lk) {
			console.error("Error loading image at index", cd, "Error:", lk), a4x()
		}, dC[cd].src = "data:image/png;base64," + v
	}

	function a4x() {
		ch.ci() || (a4q--, ch.ci() && (a1B.cg(), nQ.t3(), aF.b(), a2l.a1V([dC[8], dC[16], dC[7], dC[9], dC[10]], [!m, 0 === q, !0, !0, !0]), aL.co = !0, dC[7] = a4r, dC[8] = a4r, dC[9] = a4r, dC[10] = a4r))
	}
	this.b = function() {
		if (void 0 === dC) {
			a4q = 22, dC = new Array(a4q), ca = new Array(a4q), (a4r = document.createElement("canvas")).width = 1, a4r.height = 1;
			for (var aE = a4q - 1; 0 <= aE; aE--) dC[aE] = a4r;
			a4u(0, "exit", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
				), a4u(1, "victory", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg=="
				), a4u(2, "defeat", 6,
				"iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC"
				), a4u(3, "orders", 6,
				"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"
				), a4u(4, "crown", 4,
				"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
				), a4u(5, "arena", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC"
				), a4u(6, "territorial.io", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAjIAAABBCAIAAABEh9lIAAAACXBIWXMAAFxGAABcRgEUlENBAAAJJWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNTo1OSswMzozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMTItMjNUMTM6MjY6MDUrMDM6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY4ZGZmYjhkLWEyNDEtMTg0Mi1hNGYxLTk2ODMyZGFjYThjYSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE4YTU4YWFiLWE4ODYtNWI0Ni04OTk1LTI3MTdiYWZmOWMzYSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjNhNTMxM2RiLWY0ZGItN2Q0Mi1hZDc1LTEyMTJiNGE0NThjZSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2E1MzEzZGItZjRkYi03ZDQyLWFkNzUtMTIxMmI0YTQ1OGNlIiBzdEV2dDp3aGVuPSIyMDIyLTEyLTIzVDEzOjI1OjU5KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4NjhhNzU5LWRjNDctNGM0My1iYzA1LTllM2ZjOGMwZjY0YSIgc3RFdnQ6d2hlbj0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmOGRmZmI4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"
				), a4u(7, "youtube", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC"
				), a4u(8, "googleplay", 3,
				"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"
				), a4u(9, "discord", 7,
				"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
				), a4u(10, "insta", 3,
				"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"
				), a4u(11, "emojis", 4,
				"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"
				), a4u(12, "flags", 3,
				"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"
				), a4u(13, "bestTeam", 5,
				"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"
				), a4u(14, "bestPlayer", 5,
				"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"
				), a4u(15, "zoom", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
				), a4u(16, "apple", 3,
				"iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII="
				), a4u(17, "loading", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAZEAAABGBAMAAAD/Q7RHAAAAGFBMVEUAAAAnKSZKTElucG2Fh4SoqqfLzcr///+y5yZlAAAEnUlEQVRo3u3aS3PaMBAAYGNsuHoy0+TKTJv6SjNNfeWSciVNJlydF7qGl/n7JTGSd1e7wgaFaWfMKfFD1qeXV5KD8cb8kuC//rWSVtJKWkkraSWtpJW0klbSSlpJK2klraSV/KuSbw9qe8HsfnCyfHVuZu95Kmb3iUdJ+KAvKf7gM119vDoUb8Bv9gLsu2PD97+n4O/tr1/+OzHXXiqTRjHyJukqkLcndKqnDw94yTYfty7JoyD5jtIYeZJ0FEr2Fp670EcnkgScYiRrXkJLI/EjyUjOhtzduSwpBrJEJ4YloSJJPHqRRDRnK3DSPHIpS8w5TjLnJJlVGIkPydjKWdVsw+pZDokueE5SMJKunULuQcIky5a/S7KQJbtiQZLUTmHlQcIkW13YYyqKkRQOycKWKNcjD5dwyebMYJA7JLscspLCknAJgLHxUEnEJbtkmAuXZC5LysqEEq4V1OkoeySm/bxenf22ujd41NolWTskCyoxxfNydXajrL55qCSDXe4LeaNHdl8wkiLofP2NxwNeUhBJiKKJiBbUwRKFBtIxbrVlha3wCzMGGYzROMxLPhIDkhjn/aOtFa93x0o6uHJ1Cb3Bce1NoZYMJabN5w7JEkv6uLSibQT+w0PcFZGhQyFYmZ18CnVY0q0hKbAks6JrL1F9j4S6Gar50jVK0csLSTR97pC85x9IprW7+CESU0B9psCTHroGS8ZgwJAkSyRRqAF7k/TJyIFkWhCjesOSC5CAJNk+GEjqvwobSVIS9sRwVO3vzoXo2TEXGhZOSQ4knUazq/qSDMXe1QgAbp3rBpFzkl4dyQpIurBnqibhilsyJo2WeU6us7U8WLIZ2JLgkyUhkFSNKoN5x5K4liSvJNEnSaZE0gG5ic1dfThFaSTRQ9vpJbBOqsE3hp20kUS/r9JPl0itKzGjwbrqPXlzia5jdXIJ7I+qCsrhFKVRjyeLD6DHJ54lrlEYVIQC789mkliSDD1LUhIEgTdjJEzXm0nw7Bq840eeJY5opSesBrHv+LUoyQTJ5BgJM113RJCpMNnGknSfJKYSGEH6l3BR/dS+4c2WwBidlaDmxUX1oR+JMNNa8MtHK0vSgUZekhIJnWl5kpDZb7fKGLM2iebuBZqp5bIk3rBTepN1TxJT8gO00jJhO3x5FZSYDYuJLKGdgaxI6P9BwxuZgyt4cI8kYxrOR4770kphJTm7VmhZSZCk+H68ShRcbjxJ4MrdNWxFY2mlMJaanSSJyAClwCN/Pmx8SaJ9zc46wUkWLglISl5NPV4irXCH7B1F0xVuvMXnWOH2IBF2HWLcLUE81mjXgWzRTODI7VvSdfafBZmBjRruBKHXp667jKvt5GiJsDuXkXBfmXbXaHeuPHGOJVzfHAXHS/gdU0W2Naam9BvtmJIdwIn0jnsKPEj4XWy6KlVFio12sXE5aElX2GY8VkJ2xx9hRSV2kByLW8WypEcilHNuI+l4Cf7a45ldLzZ5GVrfN4yC/ZKQhu6/ECTxJQnCKoK/s6cdqDfl5AscuIMjS/S/7Bc4z3SlR5DU+5VfRRWvp/sqKiy/iqr/IdZfF1HJgRmsN+0AAAAASUVORK5CYII="
				), a4u(18, "target", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEXUAADUISLWQkLMTQDZZmXAdwC0lADgiIioqQCWvgCE0QAA/wDnra1i6ADw0tL////afMd+AAAC6klEQVRIx42WTWgTURCApzFNY2lLBKEX0dy8iA0UxB8CKgUv0gaKBS2B3HOJnkUDQrENQi6KEITcgydR0l0CUYReJBZCi3YpaC+9FANS6GXZ5+6+eT+z+1adS/ImX97Mzs4f2ET2916vPV9/61At6Ifeq2UIZWXDSYK+IxLIlY4Z+ga6jL8xQbsFoFQrDtF7QqoThaxSDIKsE4HqYJAyhXZNDJxq6VCvZIQgq0NDSJCGgnqFJCiroB2lHTvjS06dWxJSHl0cjBjztm5JxXUBdaXqro8E4j2UD+gg1BamFpkQ75GgVjkkn/8SU+LVUHmaQx/wmB5pEHNzyh4oa08ZkU+oroZQhR8mKMO8PNdPBpBlvoixA67PBBC6lI4yzJVOgb3Nv1+OQawm3h9gJo19jUPHHLrhQ4UEazIKkzZYHJoRvxwuLAzE95voOWzyO5dQ/zkw/QQPfe65DfhwGO2T8JBCB39zqAM8l1Ij3QBMkSC0YFsP94nIB/4fj3vegLb+175IkCX94io0w8/zXJkX0IwezjLUNciTKZrWoSJCF4hLvlCookHHChppPhaB5+7c36BpvOm/oH+Y0x13VSFTx5vGEEzQOPGInyO5KPOUR3yVvrsDIFWBBVOFoR5hlwYczTfgPUmVj1y9SJKiBdhSMM3c0ItZzMwfWFMifeeYomZHpKb89MVWOCWr++hXpNCzfkmViFO6oEvTPtROaAWM/RRtDOx3QO0pyYveCjZ6HreH1saDhiGaeKxj9GUrBzl70iNj54FiCA3BeFVNtXsfEq2Odh/xrjPYxyuG9nuU00YC6DPqrKTcvD6nAshSNclbk3coR1BGDqCmpFJ3Hg++bN2OTNgQ6uojTh9kfP7g5KwnDcWiNl67CQy/SEzzhKvKZORvGqdwxqHLw47JWCOyYfSexaEHsYUmvj9cM6xG1jJlrjqmJcsiFu875nWt91I+4/yLxMXP3lu753PzK+tO8nYY3LbvS2SDtP8A+ntynBIvYeAAAAAASUVORK5CYII="
				), a4u(19, "members", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
				), a4u(20, "hourglass", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
				), a4u(21, "stalemate", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAeoAAABABAMAAAAnsyk1AAAAElBMVEUAAAA8PjxeYF2Rk5C6vLn////ACCfyAAAFMklEQVRo3uXby3qjIBQAYBEfwO+buM9c3Ntp2ZOZ8ADx8v6vMp2qybmBCK6SbNomEc4vcAS0RbG+1Iebvl5/vxev8lIf0+M1nl8DXboJvd5eET1N3QuoGfoVOvlp4q/+6fv3JL2evY83orp/uVH9NbLrp0braXrBLt541LenVpsH9Ao7+/DUc1E0kuF85ZkHdokHMriMPfNEpbo39fx3e1fbV1D3NKVb8KEn1TkpCShvbxET50gvnzdaDG4A520mfhHSvg+oWsHaN9QlCf0Ydc+vqFYqfUk8SeqGNpcDtW+oKzEJ5KqHghYO1ZrOKPLUa842oPYNdbPRGmnqka+JrDAi13eT1Cd6jj9LuV7ff/+g51tQG3FOk6sWei5Qt3Qo5I1raVG9oXbinCZb3dFTCtWszlz1ZwRve9Qli/0YtfW8QzP73CmS1OQD7A6r0aHn49QXxrPyWqlLVrM9BegOqxt5iZat7tleh5UjsslqYXk91HFqIy/RstWDzOOjuE9XC0eNXZQana/hOPUYUBtWZ5q6CmwpBNWlEHykug9v6NQUY8VkNu/3RKlH/1KTs4NqciLPx6k72qjWs/HTJavlw/C1Wwz35Nlxyldb6Q2pGay0OyJNX8fIneFhM9ylmhFeb45RX2gPtKSFRmGXa6e6+LW5WyiGuwTaO3KactTj+nGJdJbQBsebZq9a3hseNsJdcdaRgnPUw1q1FtVq+drNcMxudSmyz+Fw1xK7luyzZandEuM8gP8SyFqnbXkNu9Uy+xIOd00s54YMiZ3X65qrP9+bv/pOIGudXcWFJrwYl4auxB7C6jWx1DSCLLVZDpx//iRFrwXUmqezBHVRfPji8anvw1mTz7LUzRL4/Pc3ArkP55K3TJI6eOteUKv7O4qMnSz13HHsnLZGjSHqkbodG69p6qL45nxzAEEN+pjDfSNLPRfbl/CveyTlIwrDqkhV0/a+hdRgNBtcXJYacXuiBnW2jJCuxjOWPqRu+YajPUA9HzwuHZ2oG77ddztEDWe6Q0htHkFXvh31BPXySyuqQbeuWIz71OWP948rOLyNUsMUpvH389Rz8MsFjKgduA3Jph971C2bvegoNZSWGJCnhivAGquhVLE68tTKxagraVOlO0ANd6oLrEYTA0dH6R51w0OMUouLcps/D8d5BavFk3ZJmYdXPLWZGLXxP7eUpy5hcVhtgkvDNPWlEG7v+cJVgcVpnlrBZtTe+wJ8v26PmucuFTNL0YGntfLUwGaxWt7zua8W9qgVu3rrmBlpFXhaK1NtQGlIrcNPiO1aXzva2CZm9eF5XMseoG5BKyL1Sa7zkqIGKeIPKTuw0jSBmwPK+1GU+gQiRWpPnX2KGp7B8ffPa9SugpzMlkMi1LyLOv6kwEDUnjrHvdfr/6H4HqhE+xRU7UksczrLVGtQF1QrX5x1gtp3CtHahKq990TO+WolNIkNPO+6xrlP7btjMgbSUOOLwOar781gsfoUqnO3Wm93cKY25MxoeFCu2vD7VBa0zkhv2fQpal9urANq55vZDAeowV63Fm58DXR6OCSpq+AFQVKXrD84aRGYqG74yt2CUns206hT1GI+w/8KQNTV5Ln/9NVAuepKVGt2pg1OZ3vVenNziagb9q12ElolUa0fVQE1P9PNJK/IItVCerwEp5KGTTkbUGKuuuSZFmyKPs505QkqVs3Yf8ITaMeGAZxQ5aqX3y1WO5ZlNZ5E7lfjjfCxK4Lqkl/S4YT3IHWH1IrXWeIclKD+LGP9T+Tr8/9r6j/yRPVUqj3rEAAAAABJRU5ErkJggg=="
				)
		}
	}, this.get = function(cd) {
		return dC[cd]
	}, this.tA = function(name) {
		for (var aE = ca.length - 1; 0 <= aE; aE--)
			if (ca[aE] === name) return dC[aE];
		return a4r
	}, this.ci = function() {
		return 0 === a4q
	}
}

function sF() {
	var a56, a57, a58, a59, a5A, a5B, a5C, a5D, a5E, a5F, a5G, a53 = [224, 224, 224],
		a54 = [
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
		a55 = [
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

	function a5d(bc, a5f) {
		a0f[bc] = 0, a0f[bc + 1] = 0, a0f[bc + 2] = a5f, a0f[bc + 3] = 0, a5g(bc)
	}

	function a5g(bc) {
		var h8;
		iE.iF || (h8 = bW.hI(bc), bc = bW.cx(bc), iE.iF = h8 >= i4.a0e[0] && h8 <= i4.a0e[2] && bc >= i4.a0e[1] && bc <= i4.a0e[3])
	}
	this.b = function(nc) {
		if (a56 = new Uint8Array(bZ), a57 = new Uint8Array(bZ), a58 = new Uint8Array(bZ), a59 = new Uint8Array(bZ), a5A = new Uint8Array(bZ), a5B = new Uint8Array(bZ), a5C = new Uint8Array(bZ), a5D = new Uint8Array(bZ), a5E = new Uint8Array(bZ),
			a5F = new Uint8Array(bZ), this.xN = new Uint8Array(bZ), (a5G = new Int32Array(4))[0] = -4 * az.b0, a5G[1] = 4, a5G[2] = -a5G[0], a5G[3] = -a5G[1], eO)
			for (var m2, fQ, aE = bZ - 1; 0 <= aE; aE--) fQ = fR.ob[fR.fS[aE]], m2 = bJ((a55[fQ][3] + 1) * ee.random(), ee.value(100)), a56[aE] = a54[fQ][0] + m2 * a55[fQ][0], a57[aE] = a54[fQ][1] + m2 * a55[fQ][1], a58[aE] = a54[fQ][2] + m2 *
				a55[fQ][2];
		else fm.fn && fm.fo.a5N ? function(ad) {
			var aE;
			for (aE = mr - 1; 0 <= aE; aE--) a56[aE] = 4 * ad[aE][0], a57[aE] = 4 * ad[aE][1], a58[aE] = 4 * ad[aE][2]
		}(fm.fo.a5N) : (function() {
			for (var aE = bZ - 1; dv <= aE; aE--) a56[aE] = 4 * bJ(64 * ee.random(), ee.value(100)), a57[aE] = 4 * bJ(64 * ee.random(), ee.value(100)), a58[aE] = 4 * bJ(64 * ee.random(), ee.value(100))
		}(), function(nc) {
			for (var aE = dv - 1; 0 <= aE; aE--) a56[aE] = 4 * nc[aE].a4N[0], a57[aE] = 4 * nc[aE].a4N[1], a58[aE] = 4 * nc[aE].a4N[2]
		}(nc));
		! function() {
			var aE, be;
			for (aE = bZ - 1; 0 <= aE; aE--) be = bJ(a56[aE] + a57[aE] + a58[aE], 3), a56[aE] += a5X(be - a56[aE], 2), a57[aE] += a5X(be - a57[aE], 2), a58[aE] += a5X(be - a58[aE], 2), a56[aE] -= a56[aE] % 4, a57[aE] -= a57[aE] % 4, a58[aE] -=
				a58[aE] % 4
		}(),
		function() {
			for (var aE = bZ - 1; 0 <= aE; aE--) a56[aE] += bJ(aE, 128), a57[aE] += bJ(aE % 128, 32), a58[aE] += bJ(aE % 32, 8), a59[aE] = aE % 8
		}(), this.a5T(),
			function() {
				for (var aE = bZ - 1; 0 <= aE; aE--) a5A[aE] = a56[aE] < 32 ? a56[aE] + 32 : a56[aE] - 32, a5B[aE] = a57[aE] < 32 ? a57[aE] + 32 : a57[aE] - 32, a5C[aE] = a58[aE] < 32 ? a58[aE] + 32 : a58[aE] - 32
			}(),
			function() {
				for (var aE = bZ - 1; 0 <= aE; aE--) a5D[aE] = 235 < a56[aE] ? a56[aE] - 20 : a56[aE] + 20, a5E[aE] = 235 < a57[aE] ? a57[aE] - 20 : a57[aE] + 20, a5F[aE] = 235 < a58[aE] ? a58[aE] - 20 : a58[aE] + 20
			}()
	}, this.a5W = function(player) {
		var ad = eK.aY;
		return ad[0] = a56[player], ad[1] = a57[player], ad[2] = a58[player], ad
	}, this.a5T = function() {
		for (var aE = bZ - 1; 0 <= aE; aE--) this.xN[aE] = a56[aE] + a57[aE] + a58[aE] < 280 ? 0 : 1
	}, this.hI = function(bc) {
		return bJ(bc, 4) % az.b0
	}, this.cx = function(bc) {
		return bJ(bc, 4 * az.b0)
	}, this.my = function(h8, h9) {
		return Math.floor(4 * (h9 * az.b0 + h8))
	}, this.nD = function(bc) {
		return this.mU(bc + a5G[0]) || this.mU(bc + a5G[1]) || this.mU(bc + a5G[2]) || this.mU(bc + a5G[3])
	}, this.nB = function(bc, player) {
		return this.a5Y(bc + a5G[0], player) || this.a5Y(bc + a5G[1], player) || this.a5Y(bc + a5G[2], player) || this.a5Y(bc + a5G[3], player)
	}, this.tR = function(player) {
		return player < dv && 2 !== dx[player]
	}, this.bf = function(bc) {
		return 208 <= a0f[bc + 3]
	}, this.nI = function(player, bc) {
		return this.bf(bc) && this.a5Z(player, bc)
	}, this.a5Z = function(player, bc) {
		return player === this.bg(bc)
	}, this.a5a = function(bc) {
		return 208 <= a0f[bc + 3] && a0f[bc + 3] < 224
	}, this.eX = function(bc) {
		return 224 <= a0f[bc + 3] && a0f[bc + 3] < 248
	}, this.nC = function(bc) {
		for (var aE = 3; 0 <= aE; aE--)
			if (this.tT(bc + a5G[aE])) return !0;
		return !1
	}, this.a5b = function(bc) {
		return 192 <= a0f[bc + 3] && a0f[bc + 3] < 208
	}, this.a5c = function(bc, player) {
		return this.a5b(bc) && player === this.bg(bc)
	}, this.bX = function(bc) {
		return this.bf(bc) || this.bh(bc)
	}, this.tT = function(bc) {
		return 0 === a0f[bc + 3] && 2 === a0f[bc + 2]
	}, this.bh = function(bc) {
		return 0 === a0f[bc + 3] && 1 === a0f[bc + 2]
	}, this.mU = function(bc) {
		return 0 === a0f[bc + 3] && 3 === a0f[bc + 2]
	}, this.tS = function(bc) {
		return this.mU(bc)
	}, this.a5Y = function(bc, player) {
		return this.bh(bc) || this.bf(bc) && player !== this.bg(bc)
	}, this.bg = function(bc) {
		return a0f[bc] % 4 * 128 + a0f[bc + 1] % 4 * 32 + a0f[bc + 2] % 4 * 8 + a0f[bc + 3] % 8
	}, this.nJ = function(bc) {
		a5d(bc, 1)
	}, this.a5e = function(bc) {
		a5d(bc, 2)
	}, this.nA = function(bc, player) {
		a0f[bc] = a56[player], a0f[bc + 1] = a57[player], a0f[bc + 2] = a58[player], a0f[bc + 3] = 208 + a59[player], a5g(bc)
	}, this.bY = function(bc, player) {
		a0f[bc] = a5A[player], a0f[bc + 1] = a5B[player], a0f[bc + 2] = a5C[player], a0f[bc + 3] = 224 + a59[player], a5g(bc)
	}, this.eY = function(bc, player) {
		a0f[bc] = a5D[player], a0f[bc + 1] = a5E[player], a0f[bc + 2] = a5F[player], a0f[bc + 3] = 248 + a59[player], a5g(bc)
	}, this.a5h = function(bc, player) {
		a0f[bc] = a53[0] + a56[player] % 4, a0f[bc + 1] = a53[1] + a57[player] % 4, a0f[bc + 2] = a53[2] + a58[player] % 4, a0f[bc + 3] = 192 + a59[player], a5g(bc)
	}
}

function sG() {
	var ca, bS, bU, aA, a5i;

	function a5n() {
		for (var a5s = 0, aE = 1; aE < 5; aE++) a5s += bS[aE] % 1024;
		return a5s
	}

	function a5m() {
		for (var aE = 1; aE < bU - a5i; aE++) bS[aE] = parseInt(bS[aE])
	}

	function a5o() {
		bS[0] = "Player " + Math.floor(1e3 * Math.random()), bS[1] = a1 < a2 ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, bS[2] = 1, bS[3] = 1, bS[4] = a1 < a2 ? 0 : 1, bS[5] = 0, bS[6] = "000", bS[7] = "0", bS[8] = "0", bS[9] = "0",
			r.a8()
	}

	function a5l() {
		for (var aE = bU - a5i - 1; 0 <= aE; aE--) bS[aE] = w.x(bS[aE]);
		bS[0] = w.o5(bS[0])
	}

	function a5v(name, value, a5w) {
		var a5x = new Date,
			a5w = (a5x.setTime(a5x.getTime() + Math.floor(31536e6 * a5w)), name + "=" + value + ";expires=" + a5x.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = a5w
	}
	this.b = function() {
		if (!(5 <= q || m)) {
			a5i = 4, ca = [], bU = 10;
			for (var aE = aA = 0; aE < bU; aE++) ca.push("u" + aE);
			bS = new Array(bU), ! function(a5t) {
				for (var eb, bc, a5u = a5t.split(";"), aE = a5u.length - 1; 0 <= aE; aE--) {
					for (a5u[aE] = a5u[aE].trim(), eb = 2; 0 <= eb; eb--) a5u[aE] = a5u[aE].replace(" ", "");
					3 < a5u[aE].length && (eb = ca.indexOf(a5u[aE].substring(0, 2)), bc = a5u[aE].indexOf("="), 0 <= eb && 2 === bc ? bS[eb] = a5u[aE].substring(bc + 1, a5u[aE].length) : 0 < bc && a5v(a5u[aE].substring(0, bc), "0", 0))
				}
			}(document.cookie), bS[9] || (bS[9] = "0"), (! function() {
				for (var aE = bU - 1; 0 <= aE; aE--)
					if (void 0 === bS[aE]) return;
				return 1
			}() || (aA = 2, a5l(), a5m(), a5n() !== bS[5])) && a5o()
		}
	}, this.a8 = function() {
		if (2 === aA) {
			bS[1] = 0 === bS[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : bS[1], bS[5] = a5n(), ! function() {
				for (var aE = 1; aE < bU - a5i; aE++) bS[aE] = bS[aE].toString()
			}(), ! function() {
				bS[0] = w.o4(bS[0]);
				for (var aE = bU - a5i - 1; 0 <= aE; aE--) bS[aE] = w.a9(bS[aE])
			}();
			for (var aE = bU - 1; 0 <= aE; aE--) a5v(ca[aE], bS[aE], 1);
			a5l(), a5m()
		}
	}, this.aA = function() {
		return aA
	}, this.vK = function(eb) {
		aA = eb, this.a8()
	}, this.a7 = function(aE, value) {
		5 <= q || m || (bS[aE] = value)
	}, this.s = function(aE) {
		return 5 <= q || m ? 0 : bS[aE]
	}
}

function sd() {
	var cd = 0,
		a5y = new Uint16Array(32);

	function remove(tD) {
		var aE;
		for (cd -= 2, aE = tD; aE < cd; aE += 2) a5y[aE] = a5y[aE + 2], a5y[aE + 1] = a5y[aE + 3]
	}
	this.b = function() {
		cd = 0
	}, this.fA = function() {
		var aE, eU, e0;
		if (0 !== cd)
			if (0 === dw[bN] || b5.a5z(bN) === b5.b6(bN)) cd = 0;
			else
				for (aE = cd - 2; 0 <= aE; aE -= 2)(eU = a5y[aE]) < bZ && 0 === dw[eU] ? remove(aE) : (e0 = a5y[aE + 1], (bZ <= eU && tU(bN) || eU < bZ && tZ(bN, eU)) && (cR.cS.cT(e0, eU), remove(aE)))
	}, this.tL = function(eU, e0) {
		! function(eU, e0) {
			var aE;
			for (aE = 0; aE < cd; aE += 2)
				if (a5y[aE] === eU) return a5y[aE + 1] = Math.min(a5y[aE + 1] + e0, 1023), 1;
			return
		}(eU, e0) && 32 !== cd && (a5y[cd] = eU, a5y[cd + 1] = e0, cd += 2)
	}
}

function a61(player) {
	a62(player), a63(player), a64(player), bL.bM(player), gF.h3(player), b5.lb(player), eE.a65.a66(player)
}

function a62(player) {
	bW.tR(player) && oQ++;
	var a67 = b5.a68(player);
	0 === a67.length ? player === bN && a69() : (a6A(player, a67), a6B(player, a67))
}

function a69() {
	bR.bS[17] += bO[bN] + b5.a6C(bN), gU.show(!1, !1, !1, !0), g4.a08()
}

function a6A(player, a67) {
	for (var aE = a67.length - 1; 0 <= aE; aE--) b5.a6D(a67[aE], player)
}

function a6E(a67) {
	for (var cd = 0, aE = a67.length - 1; 1 <= aE; aE--) bv[a67[aE]] > bv[a67[cd]] && (cd = aE);
	return cd
}

function a6B(player, a67) {
	var aE, uy, a6F = a67[a6E(a67)];
	if (9 === fq && 1 === fR.fS[player] && ee.fK(8) && fw.a6G(a6F), player === bN) 2 !== dx[player] && g2.oG(a6F, 1), a69();
	else {
		for (uy = !1, aE = a67.length - 1; 0 <= aE; aE--)
			if (a67[aE] === bN) return uy = !0, void g2.oG(player, 0);
		!uy && player < dv && 2 !== dx[player] && g2.ue(0, player, a6F)
	}
}

function a64(player) {
	dw[player] = bO[player] = 0, bV[player] = null, bn[player] = null, bo[player] = null, br[player] = null, gE.a6H(player)
}

function a63(player) {
	for (var bc, h9, h8 = ex[player]; h8 >= ey[player]; h8--)
		for (h9 = f0[player]; h9 >= f1[player]; h9--) bc = 4 * (h9 * az.b0 + h8), bW.nI(player, bc) && (bW.nJ(bc), bv[player]--)
}

function sj() {
	var input;

	function a6I(lk) {
		a6K(lk.target.files)
	}

	function a6K(files) {
		files && 0 < files.length && pj.a6L(files[0])
	}

	function a6Q(lk) {
		var fQ = new Image;
		fQ.onload = a6R, fQ.src = lk.target.result
	}

	function a6R(lk) {
		var a6S, lk = lk.target,
			cl = lk.width,
			eu = lk.height;
		4096 < cl || 4096 < eu || cl < 10 || eu < 10 ? (a6S = "Image w & h must be between 10 and 4096.", n ? n.showToast(a6S) : alert(a6S)) : (fm.pe(), az.me = az.xn(), az.a3o = 0, az.b0 = cl, az.b1 = eu, az.mG.width = az.b0, az.mG.height = az.b1,
			az.mC.drawImage(lk, 0, 0), a6S = az.mC.getImageData(0, 0, az.b0, az.b1), az.mH = a6S.data)
	}

	function a6T(lk) {
		lk.stopPropagation(), lk.preventDefault()
	}

	function a6U() {
		return 0 === aT.pp() || 2 === aT.pp()
	}
	this.b = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = a6I
	}, this.a4P = function() {
		input.click()
	}, this.a6J = function(lk) {
		a6I(lk)
	}, this.a6L = function(a6M) {
		var ad = a6M.name.split("."),
			a6N = ad[ad.length - 1].toLowerCase();
		"json" === a6N ? fm.a6P(a6M) : "gif" !== a6N && "jpg" !== a6N && "jpeg" !== a6N && "png" !== a6N || (az.fo.md[az.xn()].name = ad[0], (a6N = new FileReader).onload = a6Q, a6N.readAsDataURL(a6M))
	}, this.pG = function(lk) {
		a6U() && (a6T(lk), lk.dataTransfer.dropEffect = "copy")
	}, this.pH = function(lk) {
		a6U() && (a6T(lk), a6K(lk.dataTransfer.files))
	}
}

function sh() {
	this.a6V = null, this.b = function() {
		this.a6V = 10 !== fq ? null : new Uint32Array(bZ)
	}, this.fA = function() {
		10 === fq && this.a6W()
	}, this.a6W = function() {
		for (var bc, target, a0J, a6V = this.a6V, nc = fU, qd = bO, aE = fT - 1; 0 <= aE; aE--) bc = nc[aE], dv <= bc || (target = Math.max(bJ(qd[bc], 4), 2048), a0J = Math.max(bP.a0K(bc), 100), a6V[bc] += bJ(a0J * target, 1e4), a6V[bc] >
			target && (a6V[bc] = target))
	}, this.qj = function(player, eV) {
		return eV > this.a6V[player] ? (eV = this.a6V[player], this.a6V[player] = 0) : this.a6V[player] -= eV, eV
	}
}

function sk() {
	function a6Q(lk) {
		fm.fn = !0, fm.a6c(JSON.parse(lk.target.result)), fm.vw()
	}

	function a6i(v, min, max, a6r) {
		return "string" != typeof v || v.length < min ? a6r : v.length > max ? v.substring(0, max) : v
	}

	function a6d(aR, min, max) {
		return aR = "number" == typeof aR ? Math.floor(aR) : min, Math.min(Math.max(aR, min), max)
	}

	function a6g(aR, a6t) {
		return "boolean" == typeof aR ? aR : a6t
	}

	function a6k(aR, bU, max, a6u) {
		var aE, ad, m2;
		if (!Array.isArray(aR) || aR.length < 1) return null;
		for (ad = new(8 === a6u ? Uint8Array : Uint16Array)(bU), m2 = aR.length, aE = 0; aE < bU; aE++) ad[aE] = a6d(aR[aE % m2], 0, max);
		return ad
	}
	this.fn = !1, this.fo = null, this.pe = function() {
		this.fn = !1, this.fo = null
	}, this.a4L = function() {
		this.fo.a5N && this.fo.a6X && (this.fo.a5N[0] = cv.u6[2].oK.a21()), rB(this.fo.a6Y, 0, this.a6Z(), this.fo.rE, !1, !1)
	}, this.a6Z = function() {
		return [{
			name: this.fo.a6a ? rY.a4M() : this.fo.a6b[0],
			a4N: [0, 0, 0],
			a4O: 0
		}]
	}, this.a6P = function(a6M) {
		var a6O = new FileReader;
		a6O.onload = a6Q, a6O.readAsText(a6M)
	}, this.a6c = function(uZ) {
		this.fo = {}, this.fo.a4H = a6d(uZ.numberPlayers, 1, 512), this.fo.a6e = a6d(uZ.modeID, 0, 1), this.fo.me = a6d(uZ["gMap.mapID"], 0, az.a6f - 1), this.fo.a3s = a6d(uZ.seedMap, 0, 16383), this.fo.a6Y = a6d(uZ.seedSpawn, 0, 16383), this.fo
			.rH = a6g(uZ.selectableSpawn, !1), this.fo.a6a = a6g(uZ.selectableName, !1), this.fo.a6X = a6g(uZ.selectableColor, !1), az.fo.md[az.xn()].name = this.fo.a6h = a6i(uZ.mapName, 1, 25, "Custom Map"), this.fo.uH = function(aR) {
				var aE, bU;
				if (!Array.isArray(aR) || aR.length < 1) return [];
				for (bU = aR.length, aE = 0; aE < bU; aE++) aR[aE] = a6i(aR[aE], 0, 100, "");
				return aR
			}(uZ.description), this.fo.mm = a6k(uZ.playerX, this.fo.a4H, 4096, 16), this.fo.mx = a6k(uZ.playerY, this.fo.a4H, 4096, 16), this.fo.a6l = a6k(uZ.playerTeam, this.fo.a4H, 8, 8), this.fo.fp = a6k(uZ.playerStrength, this.fo.a4H, 5, 8),
			this.fo.a5N = function(aR, bU) {
				var aE, ad, m2;
				if (!Array.isArray(aR) || aR.length < 1) return null;
				for (ad = new Array(bU), m2 = aR.length, aE = 0; aE < bU; aE++) ad[aE] = a6k(aR[aE % m2], 3, 63, 8);
				return ad
			}(uZ.playerColor, this.fo.a4H), this.fo.a6b = function(aR, bU) {
				var aE, ad, m2;
				if (!Array.isArray(aR) || aR.length < 1) return null;
				for (ad = new Array(bU), m2 = aR.length, aE = 0; aE < bU; aE++) ad[aE] = a6i(aR[aE % m2], 3, 26, "Bot");
				return ad
			}(uZ.playerName, this.fo.a4H), this.fo.a6o = "string" == typeof uZ.mapBase64 ? uZ.mapBase64 : "", this.fo.a6a = this.fo.a6a || !this.fo.a6b, this.fo.rE = 0 === this.fo.a6e ? 7 : 2 === this.fo.a6e ? 9 : 6, this.fo.mm = this.fo.mx ?
			this.fo.mm : null
	}, this.vw = function() {
		! function(v) {
			var dC, d9, a6q = "data:image/png;base64,";
			if (v.length <= a6q.length) return;
			fm.fo.me = 0, fm.fo.a3s = 0, az.lw(0, 0), v.substring(0, a6q.length) !== a6q && (v = a6q + v);
			return (dC = new Image).onload = function() {
				az.b0 = dC.width, az.b1 = dC.height, 4096 < az.b0 || 4096 < az.b1 || az.b0 < 10 || az.b1 < 10 ? (az.lw(0, 0), alert("Image w & h must be between 10 and 4096.")) : (az.me = az.xn(), az.a3o = 0, az.mG.width = az.b0, az.mG
					.height = az.b1, az.mC.drawImage(dC, 0, 0), d9 = az.mC.getImageData(0, 0, az.b0, az.b1), az.mH = d9.data)
			}, dC.src = v, fm.fo.a6o = "", 1
		}(this.fo.a6o) && az.lw(this.fo.me, this.fo.a3s)
	}, this.a6v = function() {
		for (var max = 0, bU = this.fo.a4H, aE = 0; aE < bU; aE++) this.fo.a6l[aE] > max && (max = this.fo.a6l[aE]);
		return Math.max(0, max - 1)
	}
}

function sH() {
	var a6w, a6x, d6, eU, eV, id;

	function a6y(player) {
		return player < dv ? a6w * player : a6w * dv + a6x * (player - dv)
	}
	this.b = function() {
		a6w = dv < 16 ? 12 : 8, a6x = 4;
		var bU = a6y(bZ);
		d6 = new Uint8Array(bZ), eU = new Uint16Array(bU), eV = new Uint32Array(bU), id = new Uint16Array(bU)
	}, this.kT = function(wr, a6z) {
		var a70 = this.c9(wr, a6z);
		this.c8(wr, a6z, 0), a70 = cK.cL.jk(wr, a70), wr === bN && (bR.bS[13] -= a70)
	}, this.lb = function(player) {
		d6[player] = 0
	}, this.a6D = function(player, a6z) {
		var fY, a6z = function(player, a6z) {
			var aE, m2 = a6y(player);
			for (aE = d6[player] - 1; 0 <= aE; aE--)
				if (0 === id[m2 + aE] && eU[m2 + aE] === a6z) return aE;
			return d6[player]
		}(player, a6z);
		a6z !== d6[player] && (fY = eV[a6y(player) + a6z], this.bT(player, a6z), this.eR(player, fY, bZ))
	}, this.cP = function(player, a6z) {
		for (var m2 = a6y(player), aE = d6[player] - 1; 0 <= aE; aE--)
			if (0 === id[m2 + aE] && eU[m2 + aE] === a6z) return !0;
		return !1
	}, this.cO = function(player) {
		return player < dv ? d6[player] < a6w : d6[player] < a6x
	}, this.b6 = function(player) {
		return d6[player]
	}, this.bC = function(player, aE) {
		return eU[a6y(player) + aE]
	}, this.b7 = function(player, aE) {
		return id[a6y(player) + aE]
	}, this.hL = function(player, a72) {
		for (var m2 = a6y(player), aE = d6[player] - 1; 0 <= aE; aE--)
			if (id[m2 + aE] === a72) return aE;
		return -1
	}, this.bD = function(player, aE) {
		return eV[a6y(player) + aE]
	}, this.c9 = function(player, a6z) {
		for (var m2 = a6y(player), aE = d6[player] - 1; 0 <= aE; aE--)
			if (0 === id[m2 + aE] && eU[m2 + aE] === a6z) return eV[m2 + aE];
		return 0
	}, this.a6C = function(player) {
		for (var m2 = a6y(player), aR = 0, aE = d6[player] - 1; 0 <= aE; aE--) aR += eV[m2 + aE];
		return aR
	}, this.a73 = function(player) {
		for (var m2 = a6y(player), aR = 0, aE = d6[player] - 1; 0 <= aE; aE--) 0 === id[m2 + aE] && (aR += eV[m2 + aE]);
		return aR
	}, this.a5z = function(player) {
		for (var m2 = a6y(player), ux = 0, aE = d6[player] - 1; 0 <= aE; aE--) 0 < id[m2 + aE] && ux++;
		return ux
	}, this.c8 = function(player, a6z, fY) {
		for (var m2 = a6y(player), aE = d6[player] - 1; 0 <= aE; aE--) 0 === id[m2 + aE] && eU[m2 + aE] === a6z && (eV[m2 + aE] = fY)
	}, this.bu = function(player, aE, fY) {
		eV[a6y(player) + aE] = fY
	}, this.eR = function(player, fY, a6z) {
		var aE, m2 = a6y(player);
		for (a6z === bN && bR.bS[player < dv ? 6 : 5]++, aE = d6[player] - 1; 0 <= aE; aE--)
			if (0 === id[m2 + aE] && eU[m2 + aE] === a6z) return eV[m2 + aE] += fY, void(eV[m2 + aE] = eV[m2 + aE] > qf ? qf : eV[m2 + aE]);
		eU[m2 + d6[player]] = a6z, eV[m2 + d6[player]] = fY, id[m2 + d6[player]] = 0, d6[player]++, player < dv && (a6z === bN ? g2.oG(player, 5) : player === bN && g3.ug(a6z))
	}, this.a74 = function(player, fY, a72) {
		var m2 = a6y(player);
		dw[player] = 2, eU[m2 + d6[player]] = 0, eV[m2 + d6[player]] = fY, id[m2 + d6[player]] = a72, d6[player]++
	}, this.bT = function(player, cd) {
		var eb, m2;
		if (0 !== d6[player])
			for (m2 = a6y(player), d6[player]--, eb = cd; eb < d6[player]; eb++) eU[m2 + eb] = eU[m2 + eb + 1], eV[m2 + eb] = eV[m2 + eb + 1], id[m2 + eb] = id[m2 + eb + 1]
	}, this.a68 = function(player) {
		for (var eb, m2, a67 = [], aE = fT - 1; 0 <= aE; aE--)
			for (m2 = a6y(fU[aE]), eb = d6[fU[aE]] - 1; 0 <= eb; eb--)
				if (0 === id[m2 + eb] && eU[m2 + eb] === player) {
					a67.push(fU[aE]);
					break
				} return a67
	}
}

function sI() {
	var a75, a76, a77, a78, a79, a7A;
	this.b = function() {
		a77 = a75 = 10, a78 = a76 = 10
	}, this.a7B = function() {
		a7A = 512, a79 = new Uint16Array(a7A);
		for (var aE = 0; aE < a7A; aE++) a79[aE] = 100 + cD(bJ(25600 * aE, a7A - 4), 9)
	}, this.z3 = function() {
		return a78
	}, this.fA = function() {
		if (--a77 <= 0 && (a77 = a75, function() {
				var aE, a7G, a3 = bO[bN];
				for (fs && !eO && 0 !== dw[0] && 0 === ft.fu[0].be && (bO[0] += bJ(bv[0], 6)), aE = fT - 1; 0 <= aE; aE--) a7G = bJ(bP.a0K(fU[aE]) * bO[fU[aE]], 1e4), bO[fU[aE]] += a7G < 1 ? 1 : a7G, bP.bQ(fU[aE]);
				bR.bS[9] += bO[bN] - a3
			}(), --a78 <= 0)) {
			a78 = a76;
			for (var a3 = bO[bN], aE = fT - 1; 0 <= aE; aE--) bO[fU[aE]] += bv[fU[aE]], bP.bQ(fU[aE]);
			bR.bS[8] += bO[bN] - a3
		}
	}, this.a0K = function(player) {
		var dF = a79[bJ((a7A - 1) * bv[player], r6)],
			a7F = (aL.fP() < 1920 && (dF = dF < (a7F = bJ(100 * (13440 - 6 * aL.fP()), 1920)) ? a7F : dF), this.fE(player));
		return bO[player] > a7F && (dF -= bJ(2 * dF * (bO[player] - a7F), a7F)), dF < 0 ? 0 : 700 < dF ? 700 : dF
	}, this.fE = function(player) {
		player = 100 * bv[player];
		return r7 < player ? r7 : player
	}, this.bQ = function(player) {
		var aR = bv[player] * qe;
		bO[player] = Math.min(Math.min(bO[player], qf), aR)
	}, this.jK = function(player, jL) {
		cK.cL.jk(jL, eK.aX[0]), bR.jl(player, jL), g3.a7I(player, eK.aX[0] + eK.aX[1]), g3.jm(jL, eK.aX[0]), cK.cL.kG(player)
	}
}

function sJ() {
	var a7J, a7K, a7L, a7M, a7N, a7O, a7P, a7Q, a7R, a7S, a7T, a7U, a7V, a7W, a7X, a7Y, a7Z, a7a, a7c, a7d, a7e, a7f, a7g, a7m, a7n, a7b = null,
		a7i = 0,
		a7j = new Float32Array(4),
		a7k = 0,
		a7l = !0;

	function a7p() {
		a7b.width = hG, a7b.height = cu, (a7c = a7b.getContext("2d", {
			alpha: !0
		})).textAlign = d1, a7c.textBaseline = d0, a7c.imageSmoothingEnabled = !0
	}

	function a7q() {
		var aE, a7u;
		for (cz.font = ce + Math.floor(100 * a7T) + cf, a7u = 80 / Math.floor(cz.measureText(cK.hP.hQ(qf)).width), cz.font = ce + 100 + cf, aE = bZ - 1; 0 <= aE; aE--) a7Q[aE] = 100 / Math.floor(cz.measureText(hR[aE]).width), a7P[aE] = Math.min(a7u,
			a7Q[aE])
	}

	function a7v(aE) {
		return !hM.hN.hO || bO[aE] < 1e6 ? 1 : bO[aE] < 1e7 ? a7j[0] : a7j[Math.min(Math.floor(Math.log10(bO[aE])) - 6, 3)]
	}

	function a7t(dD) {
		a7a = !1, a7Z = 1, a7X = a7Y = 0, a7l ? (dD.textAlign = d1, dD.textBaseline = d0) : dD.clearRect(0, 0, hG, cu);
		var hA, hB, aE, cj, hC, hD = e1 / e2,
			hE = e3 / e2,
			hF = (hG + e1) / e2,
			hH = (cu + e3) / e2,
			a7z = 0 !== dw[bN] && bW.tR(bN);
		dD.imageSmoothingEnabled = !0;
		for (var eb = fT - 1; 0 <= eb; eb--) aE = fU[eb], (cj = a7W * e2 * a7v(aE) * a7P[aE] * a7N[aE]) < a7V || a7R <= cj || a7L[aE] + a7N[aE] > hD && a7L[aE] < hF && a7M[aE] + a7O[aE] > hE && a7M[aE] < hH && (hA = hG * (a7L[aE] + a7N[aE] / 2 -
			hD) / (hF - hD), hB = cu * (a7M[aE] + a7O[aE] / 2 - hE) / (hH - hE) - .1 * cj, dD.font = w4[dx[aE]] + cj + cf, dD.fillStyle = function(cj, aE) {
				if (a7S <= cj && cj < a7R) return fR.a8C[bW.xN[aE]] + a88(cj).toFixed(3) + ")";
				return fR.a8D[bW.xN[aE]]
			}(cj, aE), hM.hN.hO ? dD.fillText(cK.hP.hQ(bO[aE]), hA, hB) : a81(aE, cj, hA, hB, dD), a7a = !0, 0 < a7e[aE] ? function(hA, hB, cj, aE, dD) {
				0 === z4[aE] ? aF.vy(a7d[aE]) ? (function(hA, hB, cj, player, jZ, dD) {
					for (var tq = .9 * cj / aF.cl, mq = hB - .5 * tq * aF.cl - .05 * cj, dB = (dD.globalAlpha = a88(cj), a7v(player) * (hM.hN.hO ? a7k : a7Q[player])), mp = hA - .5 * cj / dB - .4 * cj - tq * aF.cl, em = 0; em < 2; em++)
						dD.setTransform(tq, 0, 0, tq, mp, mq), dD.drawImage(aF.t9[jZ], 0, 0), mp = hA + .5 * cj / dB + .4 * cj;
					dD.globalAlpha = 1, dD.setTransform(1, 0, 0, 1, 0, 0)
				}(hA, hB, cj, aE, a7d[aE], dD), a83(hA, hB, cj, 0, 0, dD)) : aF.vx(a7d[aE]) ? (a8B(hA, hB, cj, a7d[aE], 0, dD), a83(hA, hB, cj, 0, 1, dD)) : (a8B(hA, hB, cj, a7d[aE], 1, dD), a83(hA, hB, cj, 1, 0, dD)) : a8B(hA, hB, cj, a7d[
					aE], 0, dD)
			}(hA, hB, cj, aE, dD) : 0 === z4[aE] && a83(hA, hB, cj, 0, 0, dD), a7z && (0 < a7e[aE + bZ] || 0 < a7e[aE + 2 * bZ] || 0 < a7e[aE + 3 * bZ] || 0 < a7e[aE + 4 * bZ]) && function(hA, hB, cj, aE, dD) {
				var fQ, ux = -1;
				for (fQ = 4; 1 <= fQ; fQ--) 0 < a7e[aE + fQ * bZ] && ux++;
				for (fQ = 1; fQ < 5; fQ++) 0 < a7e[aE + fQ * bZ] && (! function(hA, hB, cj, fQ, aE, a86, a3, dD) {
					var tq = .8 * cj / aF.cl,
						hA = hA - .5 * tq * aF.cl - .534 * a86 * cj,
						a86 = hB + 1.4 * tq * aF.cl;
					dD.setTransform(tq, 0, 0, tq, hA, a86), dD.globalAlpha = a88(cj), hB = 1 === fQ ? aF.t9[a7d[aE + bZ]] : 2 === fQ ? nQ.t5()[4].dC[a3 < 255 ? 1 : 0] : (3 === fQ ? nQ.t5()[5] : nQ.t5()[6]).dC[0];
					dD.drawImage(hB, 0, 0), dD.globalAlpha = 1, dD.setTransform(1, 0, 0, 1, 0, 0)
				}(hA, hB, cj, fQ, aE, ux, a7e[aE + fQ * bZ], dD), ux -= 2)
			}(hA, hB, cj, aE, dD), (hC = a7T * cj) < a7V || (dD.font = ce + hC + cf, hM.hN.hO ? a81(aE, hC, hA, hB + .78 * cj, dD) : dD.fillText(cK.hP.hQ(bO[aE]), hA, hB + .78 * cj)));
		dD.imageSmoothingEnabled = !1
	}

	function a81(aE, cj, h8, h9, dD) {
		dD.fillText(hR[aE], h8, h9), aE < dv && 2 !== dx[aE] || (aE = cj / a7Q[aE], dD.fillRect(h8 - .5 * aE, h9 + cK.iH.qP * cj, aE, Math.max(1, .1 * cj)))
	}

	function a83(hA, hB, cj, a86, a87, dD) {
		var tq = .95 * cj / a7g,
			hA = hA - .5 * tq * a7f + .8 * a86 * cj,
			a86 = hB - 1.76 * tq * a7g - .82 * a87 * cj;
		dD.setTransform(tq, 0, 0, tq, hA, a86), dD.globalAlpha = a88(cj), dD.drawImage(ch.get(4), 0, 0), dD.globalAlpha = 1, dD.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a8B(hA, hB, cj, jZ, a86, dD) {
		var tq = 1.2 * cj / aF.cl,
			hA = hA - .5 * tq * aF.cl - .8 * a86 * cj,
			a86 = hB - 1.5 * tq * aF.cl;
		dD.setTransform(tq, 0, 0, tq, hA, a86), dD.globalAlpha = a88(cj), dD.drawImage(aF.t9[jZ], 0, 0), dD.globalAlpha = 1, dD.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a88(cj) {
		return a7S <= cj && cj < a7R ? 1 - (cj - a7S) / (a7R - a7S) : 1
	}

	function a8M(dB, cl) {
		return 1 + Math.floor(a7U * dB * cl)
	}

	function a8J(aE) {
		for (var left = a7L[aE], eb = a7L[aE] - ey[aE] - 1; 0 <= eb; eb--)
			if (!a8O(aE, --left, a7M[aE], a7O[aE])) {
				left++;
				break
			} var right = a7L[aE];
		for (eb = ex[aE] - a7L[aE] - a7N[aE]; 0 <= eb; eb--)
			if (!a8O(aE, ++right + a7N[aE] - 1, a7M[aE], a7O[aE])) {
				right--;
				break
			} var h8 = Math.floor((left + right) / 2),
			top = a7M[aE];
		for (eb = a7M[aE] - f1[aE] - 1; 0 <= eb; eb--)
			if (!a8P(aE, h8, --top, a7N[aE])) {
				top++;
				break
			} var bottom = a7M[aE];
		for (eb = f0[aE] - a7M[aE] - a7O[aE]; 0 <= eb; eb--)
			if (!a8P(aE, h8, ++bottom + a7O[aE] - 1, a7N[aE])) {
				bottom--;
				break
			} var h9 = Math.floor((top + bottom) / 2);
		a8G(aE, h8, h9, a7N[aE], a7O[aE]) && (a7L[aE] = h8, a7M[aE] = h9)
	}

	function a8G(player, h8, h9, cl, eu) {
		be = Math.floor(.2 * cl);
		for (var be, fQ = h8 + cl - 1; h8 <= fQ; fQ--)
			if (!a8O(player, fQ, h9, eu)) return;
		for (fQ = h9 + eu - 1 - (be = (be = Math.floor(.25 * eu)) < 1 ? 1 : be); h9 + be <= fQ; fQ--)
			if (!a8P(player, h8, fQ, cl)) return;
		return 1
	}

	function a8O(player, h8, h9, eu) {
		return bW.nI(player, 4 * (h9 * az.b0 + h8)) && bW.nI(player, 4 * ((h9 + eu - 1) * az.b0 + h8))
	}

	function a8P(player, h8, h9, cl) {
		return bW.nI(player, 4 * (h9 * az.b0 + h8)) && bW.nI(player, 4 * (h9 * az.b0 + h8 + cl - 1))
	}
	this.b = function() {
		if (a7a = !1, a7W = .88, a7T = .5, a7U = 1.8, a7R = Math.floor(.5 * wA), a7S = Math.floor(.2 * a7R), a7V = hM.hN.a7o < 4 ? 1 + hM.hN.a7o : 2 * (hM.hN.a7o - 1), a7K = a7J = 0, a7L = new Uint16Array(bZ), a7M = new Uint16Array(bZ), a7N =
			new Uint16Array(bZ), a7O = new Uint16Array(bZ), a7P = new Float32Array(bZ), a7Q = new Float32Array(bZ), a7d = new Uint8Array(2 * bZ), a7e = new Uint8Array(5 * bZ), a7m = new Uint8Array(bZ), a7n = new Uint8Array(bZ), a7l || (a7b =
				a7b || document.createElement("canvas"), a7p()), a7Y = a7X = 0, a7Z = 1, hM.hN.hO) {
			var aE, a7u;
			for (a7q(), cz.font = ce + Math.floor(100) + cf, a7u = 100 / Math.floor(cz.measureText("900 000").width), aE = bZ - 1; 0 <= aE; aE--) a7P[aE] = Math.min(a7u, 2 * a7Q[aE]);
			a7k = a7u, a7j[0] = 100 / (a7u * Math.floor(cz.measureText("5 000 000").width)), a7j[1] = 100 / (a7u * Math.floor(cz.measureText("50 000 000").width)), a7j[2] = 100 / (a7u * Math.floor(cz.measureText("500 000 000").width)), a7j[3] =
				100 / (a7u * Math.floor(cz.measureText("1 000 000 000").width))
		} else a7q();
		! function() {
			var aE;
			for (aE = bZ - 1; 0 <= aE; aE--) bv[aE] < 12 ? (a7L[aE] = ey[aE] + 1, a7M[aE] = f1[aE] + 1, a7N[aE] = 1, a7O[aE] = 1) : (a7L[aE] = ey[aE], a7M[aE] = f1[aE] + 1, a7N[aE] = 4, a7O[aE] = 2);
			if (hn)
				for (aE = 0; aE < dv; aE++) a7N[aE] = 0;
			a7f = ch.get(4).width, a7g = ch.get(4).height
		}()
	}, this.a7I = function(bc, v0) {
		v0 > 18 * bv[bc] ? (a7n[bc] = 6, bW.xN[bc] = 2 + bW.xN[bc] % 2) : (a7m[bc] = 4, (bW.xN[bc] < 2 || 3 < bW.xN[bc]) && (bW.xN[bc] = 6 + bW.xN[bc] % 2))
	}, this.jm = function(bc, v0) {
		v0 > 6 * bv[bc] ? (a7n[bc] = 6, bW.xN[bc] = 4 + bW.xN[bc] % 2) : (a7m[bc] = 4, (bW.xN[bc] < 4 || 5 < bW.xN[bc]) && (bW.xN[bc] = 8 + bW.xN[bc] % 2))
	}, this.resize = function() {
		a7l || (a7p(), a7t(a7c))
	}, this.r2 = function() {
		for (var aE = 0; aE < dv; aE++) ex[aE] - ey[aE] != 3 || f0[aE] - f1[aE] != 3 ? (a7L[aE] = ey[aE] + (ex[aE] !== ey[aE] ? 1 : 0), a7M[aE] = f1[aE], a7N[aE] = 1, a7O[aE] = 1) : (a7L[aE] = ey[aE], a7M[aE] = f1[aE] + 1, a7N[aE] = 4, a7O[aE] =
			2)
	}, this.kU = function(player, cd, a7w) {
		player += cd * bZ;
		if (0 === cd) return a7d[player] === a7w && 0 < a7e[player] ? void(a7e[player] = 0) : (a7d[player] = a7w, void(a7e[player] = aF.vy(a7w) ? 255 : 64));
		1 === cd ? (a7e[player] = 64, a7d[player] = a7w) : a7e[player] = a7w
	}, this.cy = function() {
		a7l ? a7t(cz) : a7a && (1 !== a7Z ? (cz.imageSmoothingEnabled = !0, cz.setTransform(a7Z, 0, 0, a7Z, 0, 0), cz.drawImage(a7b, -a7X / a7Z, -a7Y / a7Z), cz.setTransform(1, 0, 0, 1, 0, 0)) : (cz.imageSmoothingEnabled = !1, cz.drawImage(a7b, -
			a7X, -a7Y)))
	}, this.yF = function(dm, dq) {
		a7X += dm, a7Y += dq
	}, this.p8 = function(dm, dq) {
		g3.yF(dm, dq)
	}, this.zoom = function(cZ, cr, cs) {
		a7Z *= cZ, a7X = (a7X + cr) * cZ - cr, a7Y = (a7Y + cs) * cZ - cs
	}, this.ga = function(v9) {
		return !a7l && (v9 ? ++a7i % hM.zb[hM.hN.a7x] == 0 : aL.fP() % hM.zb[hM.hN.a7x] == 0) && (a7i = 0, a7t(a7c), !0)
	}, this.hJ = function(aE) {
		return a7v(aE) * a7P[aE]
	}, this.a7y = function(player) {
		return a7P[player]
	}, this.fA = function() {
		4 <= ++a7K && ! function() {
			var aE, eb, em;
			for (a7K = 0, em = 4; 1 <= em; em--)
				for (eb = fT - 1; 0 <= eb; eb--) aE = fU[eb] + em * bZ, 0 < a7e[aE] && a7e[aE] < 255 && a7e[aE]--;
			if (2 !== gb)
				for (eb = fT - 1; 0 <= eb; eb--) aE = fU[eb], 0 < a7e[aE] && a7e[aE] < 255 && a7e[aE]--
		}();
		for (var bU = Math.floor(.1 * fT), aE = a7J + (bU = fT < (bU = bU < 8 ? 8 : bU) ? fT : bU) - 1; a7J <= aE; aE--) ! function(aE) {
			var dB = a7v(aE) * a7P[aE];
			0 < a7N[aE] && a8G(aE, a7L[aE], a7M[aE], a7N[aE], a7O[aE]) ? ! function(aE) {
				for (var h8, h9, cl, eu, df = !1, em = 0; em < 8; em++) {
					if (cl = a7N[aE] + 2, eu = a7O[aE] + 2, cl > ex[aE] - ey[aE] + 1 || eu > f0[aE] - f1[aE] + 1) return df;
					if (h8 = a7L[aE] - 1, h9 = a7M[aE] - 1, !a8G(aE, h8, h9, cl, eu)) return df;
					a7L[aE] = h8, a7M[aE] = h9, a7N[aE] = cl, a7O[aE] = eu, df = !0
				}
				return df
			}(aE) && function(aE, dB) {
				for (var h8, h9, cl, eu, df = !1, a1T = a7N[aE], i0 = 1 + Math.floor(.02 * a1T), em = 1; em < 5; em++) {
					if ((cl = a1T + em * i0) > ex[aE] - ey[aE] + 1) return df;
					if ((eu = a8M(dB, cl)) > f0[aE] - f1[aE] + 1) return df;
					h8 = ey[aE] + Math.floor(Math.random() * (ex[aE] - ey[aE] + 2 - cl)), h9 = f1[aE] + Math.floor(Math.random() * (f0[aE] - f1[aE] + 2 - eu)), a8G(aE, h8, h9, cl, eu) && (a7L[aE] = h8, a7M[aE] = h9, a7N[aE] = cl, a7O[
						aE] = eu, df = !0)
				}
				return df
			}(aE, dB) && a8J(aE) : ! function(aE, dB) {
				var eu, h8 = a7L[aE] + 1,
					h9 = a7M[aE] + 1,
					cl = a7N[aE] - 2;
				for (;;) {
					if (cl < 1) {
						a7N[aE] = 0;
						break
					}
					if (eu = a8M(dB, cl), a8G(aE, h8, h9, cl, eu)) return a7L[aE] = h8, a7M[aE] = h9, a7N[aE] = cl, a7O[aE] = eu, 1;
					h8++, h9++, cl -= 2
				}
				return
			}(aE, dB) ? function(aE, dB) {
				var h8, h9, cl, eu, em, i6, ed = ex[aE] - ey[aE] + 1,
					a8N = Math.floor(.02 * ed);
				for (i6 = -6 * (a8N = a8N < 1 ? 1 : a8N), em = ed; i6 <= em; em -= a8N)
					if (eu = a8M(dB, cl = 0 < em ? em : 1), h8 = ey[aE] + Math.floor(Math.random() * (ex[aE] - ey[aE] + 2 - cl)), h9 = f1[aE] + Math.floor(Math.random() * (f0[aE] - f1[aE] + 2 - eu)), a8G(aE, h8, h9, cl, eu)) return a7L[
						aE] = h8, a7M[aE] = h9, a7N[aE] = cl, a7O[aE] = eu
			}(aE, dB) : a8J(aE)
		}(fU[aE % fT]);
		a7J = (a7J + bU) % fT
	}, this.gJ = function() {
		var aE, bc, dQ, dR;
		if (aL.fP() % 4 == 1)
			for (aE = fT - 1; 0 <= aE; aE--) bc = fU[aE], bW.xN[bc] < 2 || ((dQ = Math.max(a7m[bc] - 1, 0)) === (dR = Math.max(a7n[bc] - 1, 0)) ? 0 === dQ && (bW.xN[bc] %= 2) : 0 === dR && bW.xN[bc] < 6 && (bW.xN[bc] += 4), a7m[bc] = dQ, a7n[
				bc] = dR)
	}, this.ug = function(player) {
		var aE = player + 2 * bZ,
			a3 = a7e[aE];
		return 0 < a3 && (g2.oF(50, player), a7e[aE] = 0, 255 === a3)
	}, this.tX = function(player) {
		return 255 === a7e[player + 2 * bZ]
	}
}

function sK() {
	var ca, a8Q;
	this.b = function() {
		ca = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var aE, eb, a8R = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			a8S = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (a8Q =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), aE = ca.length - 1; 0 <= aE; aE--)
			for (eb = a8R.length - 1; 0 <= eb; eb--) ca[aE] = ca[aE].replace(a8R[eb], a8S[eb]);
		if (settings.realisticNames) ca = realisticNames;
	}, this.lw = function() {
		var aE;
		if (fm.fn && fm.fo.a6b)
			for (aE = dv; aE < bZ; aE++) hR[aE] = fm.fo.a6b[aE % mr];
		else(9 === fq ? function() {
			var aE, dF = ee.random(),
				bU = ca.length,
				m2 = dv + fw.a8Y;
			for (aE = m2 - 1; dv <= aE; aE--) hR[aE] = ca[(aE + dF) % bU];
			for (bU = a8Q.length, aE = m2; aE < bZ; aE++) hR[aE] = a8Q[aE % bU]
		} : fs ? function() {
			var aE, dF = ee.random();
			for (aE = dv; aE < bZ; aE++) hR[aE] = ca[(aE + dF) % bZ]
		} : function() {
			var aE, bU = ca.length,
				dF = ee.random();
			for (aE = dv; aE < bZ; aE++) hR[aE] = ca[(aE + dF) % bU]
		})()
	}, this.rP = function() {
		var aE, bU, m2, dF;
		if (!fs) {
			for (vE = new Array(dv), bU = dv, aE = 0; aE < bU; aE++) vE[aE] = hR[aE];
			if (hM.hN.vD) {
				for (m2 = ca.length, dF = ee.a8X(), aE = 0; aE < bU; aE++) hR[aE] = ca[(aE + dF) % m2];
				hR[bN] = vE[bN]
			}
		}
	}
}

function si() {
	this.a8Z = [], this.a8a = [], this.b = function() {
		this.a8Z = [], this.a8a = []
	}, this.fA = function() {
		0 <= this.a8Z.length && this.a8b(this.a8Z), 0 <= this.a8a.length && this.a8b(this.a8a)
	}, this.a8b = function(ad) {
		for (var em = -1, aE = ad.length - 1; 0 <= aE; aE--)
			if (ad[aE].aM--, ad[aE].aM <= 0) {
				em = aE;
				break
			} for (aE = em; 0 <= aE; aE--) ad.shift()
	}, this.tJ = function(id, nc, a8c) {
		return this.a8d(this.a8Z, id, nc, a8c)
	}, this.a8e = function(id, nc, a8c) {
		return this.a8d(this.a8a, id, nc, a8c)
	}, this.a8d = function(ad, id, nc, a8c) {
		return ! function(ad, id, nc) {
			var aE, mX;
			for (aE = nc.length - 1; 0 <= aE; aE--)
				for (mX = ad.length - 1; 0 <= mX; mX--)
					if (ad[mX].player === nc[aE] && id === ad[mX].id) return 1;
			return
		}(ad, id, nc) && (a8c && function(ad, id, nc) {
			var aE;
			for (aE = nc.length - 1; 0 <= aE; aE--) ad.push({
				player: nc[aE],
				id: id,
				aM: 384
			})
		}(ad, id, nc), !0)
	}
}

function rK(nc) {
	var aE;
	for (hR = new Array(bZ), vE = hR, dw = new Uint8Array(bZ), ey = new Uint16Array(bZ), f1 = new Uint16Array(bZ), ex = new Uint16Array(bZ), f0 = new Uint16Array(bZ), bv = new Uint32Array(bZ), n6 = new Uint32Array(bZ), bO = new Uint32Array(bZ),
		donationsTracker.reset(), bV = new Array(bZ), bn = new Array(bZ), bo = new Array(bZ), br = new Array(bZ), dx = new Uint8Array(bZ), aE = nc.length - 1; 0 <= aE; aE--) hR[aE] = nc[aE].name, dx[aE] = nc[aE].a4O
}

function sg() {
	this.vO = 0, this.nc = null, this.b = function() {
		this.vO = 0, this.nc = []
	}, this.a8h = function(player) {
		this.nc.push(player), oQ++, dx[player] = 2, player === bN && (gU.show(!1, !1), g4.a08()), g3.ug(player)
	}, this.a6H = function(player) {
		var aE, nc;
		if (2 !== dx[player])
			for (aE = (nc = this.nc).length - 1; 0 <= aE; aE--)
				if (nc[aE] === player) return void nc.splice(aE, 1)
	}, this.fA = function() {
		fs || (30 === this.vO && 2140 <= aL.fP() && this.a8i(), this.vO = (this.vO + 1) % 60)
	}, this.a8i = function() {
		for (var nc = this.nc, aE = nc.length - 1; 0 <= aE; aE--) ! function(player, e0) {
			!b5.cO(player) || (e0 = Math.max(Math.min(100, bO[player]), bJ(e0 * bO[player], 100))) < 100 || (0 === bn[player].length ? !eE.f9.fA(player) && eO && fD(player, e0, 0, 0) : (eO ? fO : fX)(player, e0))
		}(nc[aE], 12)
	}
}

function sc() {
	var a8k, a8m;
	this.a3A = 5, this.a3B = this.a3A - 1, this.a2K = this.a3A + this.a3B, this.a2J = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.a8l = null;

	function a8u(aE) {
		return a8m[aE].a8p && a8k[aE].a8u()
	}

	function a8w(a2N) {
		a8m[a2N].aM = aL.aM, a8m[a2N].a8q = !1
	}
	this.pQ = 0, this.a2w = 0, this.b = function() {
		this.a8l = new Array(this.a3A);
		this.a8l[0] = "territorial.io";
		var aE, a8o = ee.a8X(0);
		for (ee.rJ(0), aE = 1; aE < this.a3A; aE++) this.a8l[aE] = w.o7() + ".territorial.io";
		for (ee.rJ(a8o), a8k = new Array(this.a2K), a8m = new Array(this.a2K), aE = this.a2K - 1; 0 <= aE; aE--) a8m[aE] = {
			a8p: !1,
			aM: 0,
			a8q: !1
		}
	}, this.uv = function() {
		return this.a2w < this.a3A ? this.a2w : this.a2w - this.a3B
	}, this.fA = function() {
		for (var aE = this.a2K - 1; 0 <= aE; aE--) this.a2F(aE) && aL.aM > a8m[aE].aM + 15e3 && jG.a8r(aE, a8m[aE].a8q)
	}, this.yX = function(a2N, a8s) {
		if (a8m[a2N].a8p) {
			if (a8k[a2N].a8u()) return a8k[a2N].a8v(a8s), a8k[a2N].a2F();
			a8k[a2N].lP()
		}
		return this.a8t(a2N, a8s), !1
	}, this.a8t = function(a2N, a8s) {
		a8m[a2N].a8p = !0, a8w(a2N), a8k[a2N] = new a8x, a8k[a2N].b(a2N, a8s)
	}, this.a8v = function(a2N, a8s) {
		a8u(a2N) && a8k[a2N].a8v(a8s)
	}, this.a8y = function(a2N, a8s) {
		0 === a8s ? pd.yZ() : a8s < 3 ? jG.a12(a2N, a8s - 1) : 3 === a8s ? jG.a4J(a2N) : 4 === a8s ? rb.yZ(a2N) : 5 === a8s ? a2N === this.pQ && jG.a8z() : 6 !== a8s && 7 === a8s && jG.a4m(a2N)
	}, this.a2F = function(aE) {
		return a8m[aE].a8p && a8k[aE].a2F()
	}, this.send = function(a2N, k4) {
		a8w(a2N), a8k[a2N].send(k4)
	}, this.pP = function(a2N) {
		a8m[a2N].a8q = !0
	}, this.close = function(a2N, a90) {
		a8u(a2N) && a8k[a2N].close(a90)
	}, this.a91 = function(a2N, a90) {
		rc.a2Q(a90), a8u(a2N) && a8k[a2N].close(a90)
	}, this.a2S = function(a90) {
		for (var aE = this.a2K - 1; 0 <= aE; aE--) this.close(aE, a90)
	}, this.a92 = function(a2N, a90) {
		for (var aE = this.a2K - 1; 0 <= aE; aE--) aE !== a2N && this.close(aE, a90)
	}, this.a93 = function(a2N, lk) {
		a8k[a2N].lP(), rc.b(a2N, lk.code)
	}
}

function rQ() {
	for (fT = 0, aE = bZ - 1; 0 <= aE; aE--) 0 !== dw[aE] && fT++;
	fU = new Uint16Array(fT);
	for (var bU = 0, aE = 0; aE < bZ; aE++) 0 !== dw[aE] && (fU[bU++] = aE)
}

function gH() {
	a94(), a95()
}

function a95() {
	for (var aE = fT - 1; 0 <= aE; aE--) 0 === dw[fU[aE]] && a96(aE)
}

function a96(aE) {
	fT--;
	for (var eb = aE; eb < fT; eb++) fU[eb] = fU[eb + 1]
}

function a94() {
	for (var dU, aE = fT - 1; 0 <= aE; aE--) bv[fU[aE]] <= bJ(n6[fU[aE]], 4) ? bv[fU[aE]] <= 1e3 && (2 !== dw[fU[aE]] || 0 === bv[fU[aE]]) && a61(fU[aE]) : bv[fU[aE]] >= n6[fU[aE]] ? n6[fU[aE]] = bv[fU[aE]] : (dU = bJ(n6[fU[aE]] - bv[fU[aE]], 1e3),
		n6[fU[aE]] -= dU < 1 ? 1 : dU)
}

function jz() {
	for (var a5s = 0, aE = fT - 1; 0 <= aE; aE--) a5s += bO[fU[aE]];
	return a5s % 4096
}
var nP, a0f, rR, rS, aN = 0,
	p1 = 0;

function a9D() {
	a9C = 2, a99 = 2176, a98 = 12, a97 = "1.91.3   15 Feb 2024", a9E(), rq(), f5();
	var a9F = document.getElementById("usernameField");
	a9F && document.body.removeChild(a9F), n = "undefined" != typeof Android ? Android : null, 12 <= (q = n ? n.getVersion() : 0) && n.prepareAd("1688441405"), m = !1, window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers
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
		}), n || m || (ro.a9G += "_browser"), a9B = (new Date).getTime() % 1024, p0 = a9H(), r.b(), a2l = new a1U, hM.b(), q3.b(), z(), aQ(), a9I(), i4 = new a9J, iE = new a0a, aF = new vW, bR = new a9K, nR = new a9L, a2a = new vG, (aL = new a9M)
	.b(), fR = new a9N, gP = new a9O, (a1B = new cY).b(), (cw = new a0l).b(), pm = new a1J, w7(), ee.b(), bP.a7B(), rM.b(), aT.b(), pj.b(), g6.b(), pd.b(), rO.b(), pX.b(), ch.b(), rl.b(), aO.b(), rn.a38(), aL.co = !0, setTimeout(function() {
			az.lw(2, 14071)
		}, 0), p1 = 2
}

function aS() {
	p1 || (p1 = 1, ot(), a9D())
}

function a9H() {
	try {
		return window.self !== window.top
	} catch (lk) {
		return !0
	}
}

function a9I() {
	a9A = window.location.hostname, oz = 0 <= a9A.toLowerCase().indexOf("territorial.io")
}

function sL() {
	var a9P;
	this.fx = null, this.b = function() {
		a9P = [], 9 === fq && this.a9Q()
	}, this.a9Q = function() {
		var aE, a9R = [50, 74, 95, 150, 190, 333];
		if (this.a8Y = 0, this.fx = [0, 0, 0, 0, 0, 0], dv <= a9R[0]) this.fx[0] = Math.max(cA.cB(dv * (512 - dv), a9R[0]), 13), fl = this.fx[0];
		else
			for (fl = bZ - dv, aE = 1; aE < 6; aE++)
				if (dv <= a9R[aE]) {
					this.fx[aE - 1] = 512 - a9R[aE - 1] - bJ((512 - a9R[aE - 1]) * (dv - a9R[aE - 1]), a9R[aE] - a9R[aE - 1]), this.fx[aE] = 512 - dv - this.fx[aE - 1];
					break
				} mr = dv + fl
	}, this.a6G = function(player) {
		a9P.push({
			player: player,
			ux: 14 + ee.ef(20)
		})
	}, this.fA = function() {
		var aE;
		if (9 === fq)
			for (aE = a9P.length - 1; 0 <= aE; aE--) --a9P[aE].ux <= 0 && (g3.kU(a9P[aE].player, 0, 46), a9P.splice(aE))
	}
}

function su() {
	function a9X(aE) {
		return aE >= az.a9c() && aE !== az.xn()
	}

	function a9W(aE) {
		return 1 !== aE && !a9X(aE) && aE !== az.xn()
	}
	this.b0 = 0, this.b1 = 0, this.mG = null, this.mC = null, this.mD = null, this.mH = null, this.me = 0, this.a3o = 0, this.mE = !1, this.a6f = 20, this.mF = new a9T, this.fo = new a9U, this.b = function() {
		this.fo.b()
	}, this.lw = function(a9V, a3s) {
		((a9V %= this.a6f) !== this.me || a9W(this.me) && a3s !== this.a3o) && (this.mE = !1, this.mF.a3y(), ee.rJ(a9V), this.me = a9V, this.a3o = a3s, a9W(a9V) && (az.fo.md[a9V].a8o = a3s), a9X(this.me) ? a9Y() : (a9V = az.fo.md[this.me], this
			.b0 = a9V.cl, this.b1 = a9V.eu, ee.rJ(a9V.a8o), re.lw([this.b0, this.b1, a9V.hW, a9V.hT]), a9Z(), rM.a9a(), re.a9b()))
	}, this.a9c = function() {
		return 10
	}, this.a9d = function(aE) {
		return 3 === aE || 7 === aE || 9 === aE || aE === this.xn()
	}, this.a9e = function(aE) {
		return 2 === aE || 7 === aE || 9 === aE
	}, this.a9f = function(aE) {
		return 1 === aE
	}, this.xn = function() {
		return this.a6f
	}
}

function a9T() {
	function a9p() {
		az.mF.fA()
	}

	function a9u(bc, a9t) {
		0 < a9t && (az.mH[bc] += a9t, az.mH[bc + 1] += a9t, az.mH[bc + 2] += a9t)
	}

	function tT(bc) {
		return az.mH[bc + 2] > az.mH[bc] && az.mH[bc + 2] > az.mH[bc + 1]
	}
	this.yS = -1, this.j = 0, this.a9g = 0, this.a9h = 8, this.a9i = 32, this.a9j = 8, this.a9k = 32, this.a9l = [0, 0], this.xN = [0, 0, 0, 0], this.eF = null, this.a9m = !0, this.a9n = !1, this.a3y = function() {
		-1 !== this.yS && clearTimeout(this.yS), this.yS = -1, this.eF = null, re.a9b()
	}, this.b = function() {
		7 === aT.pp() || this.a9n || (this.a9m = !0, this.j = 0, this.a9g = 1, this.a9l = [az.fo.md[az.me].mc[0], az.fo.md[az.me].mf[0]], this.xN = [az.fo.md[az.me].a9o[3], az.fo.md[az.me].a9o[4], az.fo.md[az.me].a9o[5], az.fo.md[az.me].a9o[6]],
			this.a9h = az.fo.md[az.me].a9o[7], this.a9i = az.fo.md[az.me].a9o[8], this.a9j = az.fo.md[az.me].a9o[9], this.a9k = az.fo.md[az.me].a9o[10], this.a9m ? this.yS = setTimeout(a9p, 16) : this.fA())
	}, this.fA = function() {
		if (8 === aT.pp() && gT.hk()) this.yS = setTimeout(a9p, 16);
		else {
			if (0 === this.j) {
				var a8o = ee.a8X();
				if (ee.rJ(az.fo.md[az.me].a9o[2]), re.lw([az.b0, az.b1, az.fo.md[az.me].a9o[0], az.fo.md[az.me].a9o[1]]), ee.rJ(a8o), this.eF = re.a9q(), this.j++, this.a9m) return void(this.yS = setTimeout(a9p, 16))
			}
			for (var bc, dW, a8o = this.a9m ? 10 : 1e6, a8o = az.b1 - this.a9g - 1 < a8o ? az.b1 - this.a9g - 1 : a8o, n3 = this.a9g + a8o, h9 = this.a9g; h9 < n3; h9++)
				for (var h8 = 1; h8 < az.b0 - 1; h8++) tT(bc = 4 * (dW = h8 + h9 * az.b0)) ? this.a9r(bc, dW, 1) : (this.a9r(bc, dW, 0), function(h8, h9, bc) {
					return 1 < h8 && tT(bc - 4) || h8 < az.b0 - 2 && tT(bc + 4) || 1 < h9 && tT(bc - 4 * az.b0) || h9 < az.b1 - 2 && tT(bc + 4 * az.b0)
				}(h8, h9, bc) && this.a9s(h8, h9));
			this.a9g = n3, this.a9g >= az.b1 - 1 ? (az.mC.putImageData(az.mD, 0, 0, 1, 1, az.b0 - 2, az.b1 - 2), aL.co = !0, this.a3y()) : this.a9m && (this.yS = setTimeout(a9p, 16))
		}
	}, this.a9r = function(bc, dW, cd) {
		a9u(bc, Math.floor(this.a9l[cd] + this.xN[cd] * this.eF[dW] / 1e4) - az.mH[bc])
	}, this.a9v = function(bc, dF, a9w, cd, xN) {
		a9u(bc, Math.floor(this.a9l[cd] + (1 - dF / a9w) * xN) - az.mH[bc])
	}, this.a9s = function(cr, cs) {
		for (var bc, dF, a9w, mi = cr - this.a9i, mj = cs - this.a9i, n4 = cr + this.a9i, n3 = cs + this.a9i, mi = mi < 1 ? 1 : mi, n4 = n4 > az.b0 - 2 ? az.b0 - 2 : n4, n3 = n3 > az.b1 - 2 ? az.b1 - 2 : n3, h9 = mj < 1 ? 1 : mj; h9 <= n3; h9++)
			for (var h8 = mi; h8 <= n4; h8++) tT(bc = 4 * (h8 + h9 * az.b0)) ? (a9w = this.a9h + (this.a9i - this.a9h) * this.eF[h8 + az.b0 * h9] / 1e4, Math.abs(cr - h8) > a9w || Math.abs(cs - h9) > a9w || a9w <= (dF = Math.sqrt((cr - h8) * (
				cr - h8) + (cs - h9) * (cs - h9))) || this.a9v(bc, dF, a9w, 1, this.xN[3])) : (a9w = this.a9j + (this.a9k - this.a9j) * this.eF[h8 + az.b0 * h9] / 1e4, Math.abs(cr - h8) > a9w || Math.abs(cs - h9) > a9w || a9w <= (dF = Math
				.sqrt((cr - h8) * (cr - h8) + (cs - h9) * (cs - h9))) || this.a9v(bc, dF, a9w, 0, this.xN[2]))
	}
}

function a9Z() {
	2 === az.me ? a9x([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === az.me ? a9x([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === az.me ? a9x([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === az.me && a9x([
		512
	], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function a9x(a9y, a9z, aA0, aA1, aA2) {
	for (var h8, h9, aA4, aA5, cZ, aA6, dl = a9y.length - 1, aA3 = az.b0 + az.b1, bU = (aA3 *= aA3, aA0.length), aE = bU - 1; 0 <= aE; aE--) aA0[aE] *= aA0[aE];
	var aA7 = new Array(bU),
		aA8 = new Array(bU),
		aA9 = new Array(bU),
		aR = re.a9q();
	if (void 0 === aA2)
		for (aA2 = new Array(bU), aE = bU - 1; 0 <= aE; aE--) aA2[aE] = 0;
	for (aE = 1; aE < bU; aE++) aA7[aE] = aA0[aE] - aA0[aE - 1], aA8[aE] = aA1[aE] - aA1[aE - 1], aA9[aE] = aA2[aE] - aA2[aE - 1];
	for (h8 = az.b0 - 1; 0 <= h8; h8--)
		for (h9 = az.b1 - 1; 0 <= h9; h9--) {
			for (aA4 = aA3, aE = dl; 0 <= aE; aE--) aA4 = (aA5 = (h8 - a9y[aE]) * (h8 - a9y[aE]) + (h9 - a9z[aE]) * (h9 - a9z[aE])) < aA4 ? aA5 : aA4;
			for (cZ = aA1[bU - 1], aA6 = aA2[bU - 1], aE = 1; aE < bU; aE++)
				if (aA4 < aA0[aE]) {
					cZ = aA1[aE - 1] + a5X((aA4 - aA0[aE - 1]) * aA8[aE], aA7[aE]), aA6 = aA2[aE - 1] + a5X((aA4 - aA0[aE - 1]) * aA9[aE], aA7[aE]);
					break
				} aAA(az.b0 * h9 + h8, cZ, aA6, aR)
		}
}

function aAA(cd, cZ, aA6, aR) {
	cZ < 500 ? aR[cd] = bJ(aR[cd] * cZ * 2, 1e3) : 500 < cZ && (aR[cd] += bJ(2 * (1e4 - aR[cd]) * (cZ - 500), 1e3)), aR[cd] += bJ(aA6 * (10 * cZ - aR[cd]), 1e3)
}

function sM() {
	var aAB;
	this.v4 = 0, this.v5 = 0, this.v7 = 0, this.v8 = 0, this.b = function() {
		(aAB = new Array(az.a9c()))[0] = {
			cl: [0, 5e3, 8e3, 1e4],
			dF: [220, 250, 255, 220],
			qQ: [190, 220, 0, 0],
			em: [170, 200, 0, 0]
		}, aAB[1] = {
			cl: [0, 4e3, 5e3, 6e3, 1e4],
			dF: [25, 0, 100, 0, 25],
			qQ: [25, 0, 0, 0, 25],
			em: [25, 0, 0, 0, 25]
		}, aAB[2] = {
			cl: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			dF: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			qQ: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			em: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aAB[3] = {
			cl: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			dF: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			qQ: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			em: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, aAB[4] = {
			cl: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			dF: [10, 10, 20, 10, 10, 170, 212],
			qQ: [20, 20, 60, 100, 100, 110, 170],
			em: [70, 70, 160, 30, 30, 60, 120]
		}, aAB[5] = {
			cl: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			dF: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			qQ: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			em: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aAB[6] = {
			cl: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			dF: [10, 10, 60, 255, 255, 200, 200],
			qQ: [10, 10, 60, 255, 255, 200, 200],
			em: [80, 80, 255, 255, 255, 200, 200]
		}, aAB[7] = {
			cl: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			dF: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			qQ: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			em: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aAB[8] = {
			cl: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			dF: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			qQ: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			em: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aAB[9] = {
			cl: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			dF: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			qQ: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			em: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}
	}, this.a9a = function() {
		var aE, eb, ae, d9 = function() {
				var d9;
				return az.mG = document.createElement("canvas"), az.mG.width = az.b0, az.mG.height = az.b1, az.mC = az.mG.getContext("2d", {
					alpha: !1
				}), d9 = az.mC.getImageData(0, 0, az.b0, az.b1), az.mH = d9.data, d9
			}(),
			cl = aAB[az.me].cl,
			dF = aAB[az.me].dF,
			qQ = aAB[az.me].qQ,
			em = aAB[az.me].em,
			aR = re.a9q(),
			bU = cl.length - 2,
			aAF = new Array(1 + bU),
			aAG = new Array(1 + bU),
			aAH = new Array(1 + bU),
			aAI = new Array(1 + bU);
		for (eb = bU; 0 <= eb; eb--) aAF[eb] = cl[eb + 1] - cl[eb], aAG[eb] = dF[eb + 1] - dF[eb], aAH[eb] = qQ[eb + 1] - qQ[eb], aAI[eb] = em[eb + 1] - em[eb];
		for (aE = az.b0 * az.b1 - 1; 0 <= aE; aE--)
			for (eb = bU; 0 <= eb; eb--)
				if (aR[aE] >= cl[eb]) {
					ae = aR[aE] - cl[eb], az.mH[4 * aE] = dF[eb] + a5X(aAG[eb] * ae, aAF[eb]), az.mH[4 * aE + 1] = qQ[eb] + a5X(aAH[eb] * ae, aAF[eb]), az.mH[4 * aE + 2] = em[eb] + a5X(aAI[eb] * ae, aAF[eb]), az.mH[4 * aE + 3] = 255;
					break
				} az.mC.putImageData(d9, 0, 0), az.a9f(az.me) && ch.ci() && az.a9f(az.me) && (d9 = ch.tA("arena"), az.mC.save(), az.mC.globalAlpha = 1 === az.me ? .1 : 1, az.mC.imageSmoothingEnabled = !0, az.mC.scale(2.8, 2.8), az.mC.drawImage(
				d9, Math.floor((az.b0 / 2.8 - d9.width) / 2), Math.floor(.5 * az.b1 / 2.8 - d9.height / 2)), az.mC.restore(), d9 = ch.tA("territorial.io"), az.mC.save(), az.mC.globalAlpha = 1 === az.me ? .1 : 1, az.mC
			.imageSmoothingEnabled = !0, az.mC.scale(.87, .87), az.mC.drawImage(d9, Math.floor(.745 * (az.b0 / .87 - d9.width)), Math.floor(.422 * az.b1 / .87 - d9.height / 2)), az.mC.restore()), az.mE = !0, aL.co = !0
	}, this.rN = function() {
		for (var bc, h8, h9, aAL, aAM, ag, v5 = 0, cl = az.b0, eu = az.b1, ae = cl * eu * 4, aAN = a0f, aAO = az.mH, aE = cl - 1; 0 <= aE; aE--) aAN[(bc = aE << 2) + 2] = aAN[ae - bc - 2] = 3;
		for (ae = 4 * cl, aE = eu - 1; 0 <= aE; aE--) aAN[(bc = aE * ae) + 2] = aAN[bc + ae - 2] = 3;
		for (aAL = cl - 1, aAM = eu - 1, h9 = 1; h9 < aAM; h9++)
			for (ae = h9 * cl, h8 = 1; h8 < aAL; h8++) ag = 1 - (aAO[(bc = ae + h8 << 2) + 2] > aAO[bc + 1] && aAO[bc + 2] > aAO[bc]), aAN[bc + 2] = 2 - ag, v5 += ag;
		this.v4 = (cl - 2) * (eu - 2), this.v8 = 0, az.a9d(az.me) && function() {
			var bc, h8, h9, ae, aAN = a0f,
				aAO = az.mH,
				cl = az.b0,
				aAL = cl - 1,
				aAM = az.b1 - 1,
				ux = 0;
			for (h9 = 1; h9 < aAM; h9++)
				for (ae = h9 * cl, h8 = 1; h8 < aAL; h8++) aAO[bc = ae + h8 << 2] === aAO[1 + bc] && aAO[bc] === aAO[2 + bc] && (ux++, aAN[2 + bc] = 3);
			rM.v8 = ux
		}(), this.v5 = r6 = v5 - this.v8, this.v7 = this.v4 - this.v5 - this.v8
	}
}

function a9Y() {
	var v, aAQ = az.a9c();
	az.me === aAQ ? v =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		az.me === aAQ + 1 ? v =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		az.me === aAQ + 2 ? v =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		az.me === aAQ + 3 ? v =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		az.me === aAQ + 4 ? v =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		az.me === aAQ + 5 ? v =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		az.me === aAQ + 6 ? v =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		az.me === aAQ + 7 ? v =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		az.me === aAQ + 8 ? v =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		az.me === aAQ + 9 && (v =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new ly).m0(v)
}

function a9U() {
	this.md = null, this.b = function() {
		var aAR = [120, 105, 92],
			cos = [12, 12, 60],
			aAS = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aAT = [140, 130, 120],
			aAU = [12, 12, 76],
			aAV = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aAW = [130, 117, 106],
			aAX = [12, 12, 68],
			aAY = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.md = new Array(az.a6f + 1), this.md[0] = {
			name: "White Arena",
			cl: 230,
			eu: 230,
			hW: 1e3,
			hT: 2e3,
			a8o: 173
		}, this.md[1] = {
			name: "Black Arena",
			cl: 800,
			eu: 800,
			hW: 100,
			hT: 50,
			a8o: 43
		}, this.md[2] = {
			name: "Island",
			cl: 512,
			eu: 512,
			hW: 128,
			hT: 32,
			a8o: 0
		}, this.md[3] = {
			name: "Mountains",
			cl: 960,
			eu: 960,
			hW: 60,
			hT: 8,
			a8o: 0
		}, this.md[4] = {
			name: "Desert",
			cl: 900,
			eu: 900,
			hW: 100,
			hT: 5,
			a8o: 0
		}, this.md[5] = {
			name: "Swamp",
			cl: 1e3,
			eu: 1e3,
			hW: 100,
			hT: 40,
			a8o: 0
		}, this.md[6] = {
			name: "Snow",
			cl: 1e3,
			eu: 1e3,
			hW: 100,
			hT: 20,
			a8o: 0
		}, this.md[7] = {
			name: "Cliffs",
			cl: 1024,
			eu: 1024,
			hW: 128,
			hT: 32,
			a8o: 0
		}, this.md[8] = {
			name: "Pond",
			cl: 820,
			eu: 820,
			hW: 200,
			hT: 100,
			a8o: 0
		}, this.md[9] = {
			name: "Halo",
			cl: 1024,
			eu: 1024,
			hW: 128,
			hT: 32,
			a8o: 0
		}, this.md[10] = {
			name: "Europe",
			mc: aAT,
			mf: aAU,
			a9o: aAV
		}, this.md[11] = {
			name: "World",
			mc: aAW,
			mf: aAX,
			a9o: aAY
		}, this.md[12] = {
			name: "Caucasia",
			mc: aAW,
			mf: aAX,
			a9o: aAY
		}, this.md[13] = {
			name: "Africa",
			mc: aAR,
			mf: cos,
			a9o: aAS
		}, this.md[14] = {
			name: "Middle East",
			mc: aAR,
			mf: cos,
			a9o: aAS
		}, this.md[15] = {
			name: "Scandinavia",
			mc: aAT,
			mf: aAU,
			a9o: aAV
		}, this.md[16] = {
			name: "North America",
			mc: aAT,
			mf: aAU,
			a9o: aAV
		}, this.md[17] = {
			name: "South America",
			mc: aAR,
			mf: cos,
			a9o: aAS
		}, this.md[18] = {
			name: "Asia",
			mc: aAW,
			mf: aAX,
			a9o: aAY
		}, this.md[19] = {
			name: "Australia",
			mc: aAR,
			mf: cos,
			a9o: aAS
		}, this.md[20] = {}
	}
}

function rL() {
	(nP = void 0 === nP ? document.createElement("canvas") : nP).width = az.b0, nP.height = az.b1, rR = nP.getContext("2d", {
		alpha: !0
	}), rS = rR.getImageData(0, 0, az.b0, az.b1), a0f = rS.data, cK.mI.mJ(a0f)
}

function sN() {
	var aR, cl, eu, max, aAZ, hT, aAb, aAc, aAd, aAe, aAf, aAg, aAh, aAi, aAa = 1e4;

	function aAq(aAp, hW, bU) {
		var aE;
		for (aAb[0] = aAp, aE = 1; aE < bU; aE++) aAb[aE] = aAb[aE - 1] + hW, hW = aAb[aE] >= aAa ? (aAb[aE] = aAa - 1, -hW) : aAb[aE] < 0 ? (aAb[aE] = 0, -hW) : (hW += 16384 <= ee.random() ? hT : -hT) < -aAZ ? -aAZ : aAZ < hW ? aAZ : hW
	}

	function aAs(h8, h9, aAt, bU) {
		(aAt ? function(h8, h9, bU) {
			var aE;
			for (aE = 0; aE < bU; aE++) aR[h9 * cl + h8 + aE] = aAb[aE]
		} : function(h8, h9, bU) {
			var aE;
			for (aE = 0; aE < bU; aE++) aR[h9 * cl + h8 + aE * cl] = aAb[aE]
		})(h8, h9, bU)
	}

	function aAw(value, bU) {
		var aE, a8N, df, dU = value - aAb[bU - 1];
		if (0 != dU) {
			for (a8N = 1 + bJ(Math.abs(dU), bU - 1), a8N = dU < 0 ? -a8N : a8N, aAb[bU - 1] = value, df = (df = bU - 1 - bJ(Math.abs(dU), Math.abs(a8N))) < 1 ? 1 : bU - 2 < df ? bU - 2 : df, aE = bU - 2; df <= aE; aE--) aAb[aE] += dU - (bU - 1 -
				aE) * a8N;
			(dU < 0 ? function(bU) {
				var aE;
				for (aE = bU - 2; 1 <= aE; aE--) aAb[aE] < 0 && (aAb[aE] = -aAb[aE] - 1)
			} : function(bU) {
				var aE;
				for (aE = bU - 2; 1 <= aE; aE--) aAb[aE] >= aAa && (aAb[aE] = 2 * aAa - aAb[aE] - 1)
			})(bU)
		}
	}

	function aAz(aB0, aB1, bU) {
		for (var aE = 0; aE < bU; aE++) aB0[aE] = aB1[aE]
	}

	function aB2(ad) {
		for (var aE = 0; aE < ad.length - 1; aE++) ad[aE] = ad[aE + 1] - ad[aE];
		ad[ad.length - 1] = ad[ad.length - 3]
	}

	function aB3(tD, l5, cW) {
		aAc.push(tD), aAd.push(l5), aAe.push(cW)
	}
	this.lw = function(aAj) {
		! function(aAj) {
			var aE;
			for (cl = aAj[0], eu = aAj[1], aAZ = aAj[2], hT = aAj[3], aR = new Int16Array(cl * eu), max = eu < cl ? cl : eu, aAb = new Int16Array(max), aAc = [], aAd = [], aAe = [], aAf = new Array(cl), aAg = new Array(eu), aE = cl - 1; 0 <=
				aE; aE--) aAf[aE] = !1;
			for (aE = eu - 1; 0 <= aE; aE--) aAg[aE] = !1;
			aAh = new Int16Array(cl), aAi = new Int16Array(eu)
		}(aAj),
		function(bU) {
			var aAp = ee.random() % aAa,
				hW = ee.random() % (2 * aAZ + 1) - aAZ;
			aAq(aAp, hW, bU)
		}(max), aAz(aAi, aAb, eu), aAs(0, 0, !0, cl);
		var h8, h9, aAj = aR[0],
			bU = max,
			hW = ee.random() % (2 * aAZ + 1) - aAZ;
		for (aAq(aAj, hW, bU), aAz(aAh, aAb, cl), aAs(0, 0, !1, eu), aB2(aAh), aB2(aAi), aAq(aR[cl - 1], aAh[cl - 1], eu), aAs(cl - 1, 0, !1, eu), aAq(aR[cl * (eu - 1)], aAi[eu - 1], cl), aAw(aR[cl * eu - 1], cl), aAs(0, eu - 1, !0, cl), aAf[cl -
				1] = aAf[0] = !0, aAg[eu - 1] = aAg[0] = !0, aB3(0, cl, !0), aB3(0, eu, !1), ! function() {
				var aB5, tD;
				for (;;) {
					if (aB5 = function() {
							var aE, aB5 = aAc.length - 1;
							for (aE = aB5 - 1; 0 <= aE; aE--) aAd[aE] > aAd[aB5] && (aB5 = aE);
							return aB5
						}(), aAd[aB5] < 5) return;
					tD = aAc[aB5] + bJ(aAd[aB5], 2), (aAe[aB5] ? function(h8) {
						var bU, aB8, aE, a1r = 0,
							aB9 = 0;
						for (; aB9 < eu - 1;) {
							for (aE = a1r + 1; aE < eu; aE++)
								if (aAg[aE]) {
									aB9 = aE;
									break
								} bU = aB9 - a1r + 1, aAq(aR[h8 + cl * a1r], 0 === a1r ? aAh[h8] : aAb[aB8 - 1] - aAb[aB8 - 2], bU), aAw(aR[aB9 * cl + h8], bU), aAs(h8, a1r, !1, bU), aB8 = bU, a1r = aB9
						}
						aAf[h8] = !0
					} : function(h9) {
						var bU, aB8, aE, a1r = 0,
							aB9 = 0;
						for (; aB9 < cl - 1;) {
							for (aE = a1r + 1; aE < cl; aE++)
								if (aAf[aE]) {
									aB9 = aE;
									break
								} bU = aB9 - a1r + 1, aAq(aR[h9 * cl + a1r], 0 === a1r ? aAi[h9] : aAb[aB8 - 1] - aAb[aB8 - 2], bU), aAw(aR[h9 * cl + aB9], bU), aAs(a1r, h9, !0, bU), aB8 = bU, a1r = aB9
						}
						aAg[h9] = !0
					})(tD), aB3(tD, aAc[aB5] + aAd[aB5] - tD, aAe[aB5]), aAd[aB5] = tD - aAc[aB5] + 1
				}
			}(), h8 = 0; h8 < cl; h8++)
			if (!aAf[h8])
				for (h9 = 0; h9 < eu; h9++) aAg[h9] || ! function(h8, h9) {
					var value = aR[h9 * cl + h8 - 1] + aR[(h9 - 1) * cl + h8],
						vU = 2;
					aAf[h8 + 1] && (vU++, value += aR[h9 * cl + h8 + 1]);
					aAg[h9 + 1] && (vU++, value += aR[(h9 + 1) * cl + h8]);
					aR[h9 * cl + h8] = bJ(value, vU)
				}(h8, h9)
	}, this.a9q = function() {
		return aR
	}, this.a9b = function() {
		aR = null
	}
}

function bJ(eb, em) {
	return Math.floor(eb / em + 1 / (2 * em))
}

function a5X(eb, em) {
	return 0 <= eb ? bJ(eb, em) : -bJ(-eb, em)
}

function f3(aR) {
	return aR * aR
}

function uT(eb, em) {
	return em < eb ? eb : em
}

function xE(eb, em) {
	return eb < em ? eb : em
}

function xe(eb, aR, em) {
	return aR < eb ? eb : em < aR ? em : aR
}

function aBB(aR, bU) {
	for (var fQ = bJ(aR + 1, 2), aE = 0; aE < bU; aE++) fQ = bJ(fQ + bJ(aR, fQ), 2);
	return fQ
}

function cD(aR, bU) {
	return aR < 1 ? 0 : aBB(aR, bU)
}

function aBC(hD, hE, nY, vH, hF, hH, nZ, vI) {
	return !(hD + nY <= hF || hE + vH <= hH || hF + nZ <= hD || hH + vI <= hE)
}

function aBD(hD, hE, nY, vH, hF, hH, nZ, vI) {
	return hD <= hF && hE <= hH && hF + nZ <= hD + nY && hH + vI <= hE + vH
}

function m9(aR) {
	return Math.floor(!!aR * (1 + Math.log2(aR + .5)))
}

function rr() {
	this.cB = function(eb, em) {
		return Math.floor((eb + .5) / em)
	}, this.aBE = function(eb, em) {
		return Math.floor(eb * (em + .5))
	}, this.sqrt = function(aR) {
		return ~~Math.sqrt(aR + .5)
	}, this.pow = function(lk) {
		return Math.floor(Math.pow(2, lk) + .5)
	}, this.qG = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aBF = function(ae, ag, ai) {
		return Math.max(Math.min(ae, ag), ai)
	}, this.aBG = function(aBH, aBI, h8, h9) {
		h8 -= aBH, aBH = h9 - aBI, h9 = 0;
		return 0 == h8 ? h9 = 0 <= aBH ? Math.PI : 0 : (h9 = Math.aBJ(aBH / h8), h9 += 0 < h8 ? .5 * Math.PI : 1.5 * Math.PI), h9
	}, this.log2 = function(aR) {
		return Math.floor(!!aR * (1 + Math.log2(aR + .5)))
	}
}

function sv() {
	this.aBK = new aBL, this.hN = new aBM, this.aBN = new aBO, this.resize = function() {
		this.aBK.resize(), this.hN.resize(), this.aBN.resize()
	}
}

function aBO() {
	var aBP, aBQ;

	function aBR() {
		a0 = !a0, cv.u6[0].t7 = a0, q3.a4V(0), aB(a0, !1)
	}
	this.show = function() {
		aBP || (aBQ = new ks("Mobile Friendly", "Increase size of user interface to better support mobile devices", aBR), (aBP = new lB).b("Accessibility", new kW("Back", () => {
			aBP.lP(), rp.hN.show()
		}, d2.ir), [aBQ])), aBQ.setState(a0), aBP.show()
	}, this.resize = function() {
		aBP && (aBP.resize(), aBQ.resize())
	}
}

function aBL() {
	var aBP, l3;
	this.show = function() {
		var aBS;
		aBP || ((l3 = new l2).l9(new kW("Account", () => {
			console.log("Account")
		})), l3.l9(new kW("Settings", () => {
			aBP.lP(), rp.hN.show()
		})), l3.l9(new kW("Links", () => {
			console.log("Links")
		})), l3.l9(new kW("Replay", () => {
			console.log("Replay")
		})), l3.l9(new kW("Game Version", () => {
			console.log("Game Version")
		})), aBS = new kW("Close", (aBP = new lB).lP, d2.ir), aBP.b("Menu", aBS, [l3])), aBP.show()
	}, this.resize = function() {
		aBP && (aBP.resize(), l3.resize())
	}
}

function aBM() {
	var aBP, l3;
	this.show = function() {
		aBP || ((l3 = new l2).l9(new kW("Graphics", () => {
			console.log("Graphics")
		})), l3.l9(new kW("Controls", () => {
			console.log("Controls")
		})), l3.l9(new kW("Gameplay", () => {
			console.log("Gameplay")
		})), l3.l9(new kW("Accessibility", () => {
			aBP.lP(), rp.aBN.show()
		})), l3.l9(new kW("Language", () => {
			console.log("Language")
		})), (aBP = new lB).b("Settings", new kW("Back", () => {
			aBP.lP(), rp.aBK.show()
		}, d2.ir), [l3])), aBP.show()
	}, this.resize = function() {
		aBP && (aBP.resize(), l3.resize())
	}
}

function a9E() {
	"function" != typeof Math.log2 && (Math.log2 = function(h8) {
		return Math.log(h8) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(h8) {
		return Math.log(h8) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(h8) {
		return 0 < h8 ? 1 : h8 < 0 ? -1 : 0
	})
}

function se() {
	this.a4k = 0;
	var a0m = -1,
		aBT = !1,
		we = [],
		aBU = 0;

	function pl(h8, h9, aBd, aE) {
		return 0 === aE ? h8 >= aBd.hD && (0 === aE || h9 >= aBd.hE) && h9 <= aBd.hE + aBd.vH : (h9 -= aE * (aBd.vH - qU), h8 >= aBd.hF && h9 >= aBd.hE && h9 <= aBd.hE + aBd.vH)
	}

	function aBe() {
		var nY = Math.floor((a0 ? .145 : .09) * cb),
			nZ = Math.floor(2.25 * nY),
			l5 = Math.floor(.065 * (a0 ? .53 : .36) * cb),
			hF = a1 - nZ - l5;
		return {
			hD: a1 - nY - l5,
			hE: ct,
			nY: nY,
			vH: Math.floor(.35 * (1 + .35 * a0) * nY),
			hF: hF,
			nZ: nZ,
			yD: l5
		}
	}

	function a25(h8, h9, cl, eu, dF, qQ, em, aBm, v) {
		var cj = (v === we[0][0].name ? .65 : .5) * eu,
			font = cK.iH.lW(cj, 1),
			font = cm.measureText(v, font);
		.92 * cl < font && (cj *= .92 * cl / font), cz.font = cK.iH.lW(cj, 1), aBm && (dF += 80, qQ += 80, em += 80), cz.fillStyle = "rgba(" + dF + "," + qQ + "," + em + ",0.6)", cz.fillRect(h8, h9, cl, eu), cz.fillStyle = d2.d3, cz.fillRect(h8, h9,
			cl, qU), cz.fillRect(h8, h9 + eu - qU, cl, qU), cz.fillRect(h8, h9, qU, eu), cz.fillRect(h8 + cl - qU, h9, qU, eu), cz.fillText(v, Math.floor(h8 + cl / 2), Math.floor(h9 + eu / 2 + .1 * cj))
	}
	this.hN = null, this.zb = new Uint8Array(4), this.uW = function() {
		return m ? 4 : a0 ? 2 : 1
	}, this.b = function() {
		var aBW;
		this.aBV(), we = [new Array(6), new Array(10), new Array(7)], this.zb[0] = 10, this.zb[1] = 5, this.zb[2] = 2, this.zb[3] = 1, we[0][0] = {
			name: "More",
			id: 0,
			dF: 140,
			qQ: 120,
			em: 0
		}, we[0][1] = {
			name: "Lobby 1",
			id: 1,
			dF: 0,
			qQ: 0,
			em: 0
		}, we[0][2] = {
			name: "Settings",
			id: 2,
			dF: 0,
			qQ: 0,
			em: 0
		}, we[0][3] = {
			name: "More Information",
			id: 3,
			dF: 0,
			qQ: 0,
			em: 0
		}, we[0][4] = {
			name: "Replay",
			id: 4,
			dF: 0,
			qQ: 0,
			em: 0
		}, we[0][5] = {
			name: a97,
			id: 5,
			dF: 90,
			qQ: 0,
			em: 0
		}, we[0].push({
			name: "FX Client v" + fx_version + " " + fx_update,
			id: 20,
			dF: 0,
			qQ: 0,
			em: 70
		}), we[1][0] = we[0][0], we[1][1] = {
			name: "Hide Usernames",
			id: 1,
			dF: 0,
			qQ: 0,
			em: 0
		}, we[1][2] = {
			name: "Hide Links",
			id: 2,
			dF: 0,
			qQ: 0,
			em: 0
		}, we[1][3] = {
			name: "Hide Zoom Buttons",
			id: 3,
			dF: 0,
			qQ: 0,
			em: 0
		}, we[1][4] = {
			name: "Reverse Name/Balance",
			id: 4,
			dF: 0,
			qQ: 0,
			em: 0
		}, we[1][5] = {
			name: "Resolution",
			id: 5,
			dF: 0,
			qQ: 0,
			em: 0
		}, we[1][6] = {
			name: "Country Minimum Font Size",
			id: 6,
			dF: 0,
			qQ: 0,
			em: 0
		}, we[1][7] = {
			name: "Leaderboard Refresh Rate",
			id: 7,
			dF: 0,
			qQ: 0,
			em: 0
		}, we[1][8] = {
			name: "Reset Settings",
			id: 8,
			dF: 0,
			qQ: 0,
			em: 0
		}, we[1][9] = {
			name: "Back",
			id: 9,
			dF: 0,
			qQ: 0,
			em: 0
		}, we[2][0] = we[0][0], we[2][1] = {
			name: "Tutorial",
			id: 1,
			dF: 0,
			qQ: 0,
			em: 0
		}, we[2][2] = {
			name: "Player List",
			id: 2,
			dF: 0,
			qQ: 0,
			em: 0
		}, we[2][3] = {
			name: "Clan List",
			id: 3,
			dF: 0,
			qQ: 0,
			em: 0
		}, we[2][4] = {
			name: "Privacy Policy",
			id: 4,
			dF: 0,
			qQ: 0,
			em: 0
		}, we[2][5] = {
			name: "Changelog",
			id: 13,
			dF: 0,
			qQ: 0,
			em: 0
		}, we[2][6] = {
			name: "Terms of Service",
			id: 14,
			dF: 0,
			qQ: 0,
			em: 0
		}, !m && q < 5 && we[2].push({
			name: "Cookie Policy",
			id: 5,
			dF: 0,
			qQ: 0,
			em: 0
		}), (m || 5 <= q) && (m ? !p.mustShowConsentButton || "0" !== p.mustShowConsentButton && "1" !== p.mustShowConsentButton || we[2].push({
			name: "Consent Form",
			id: 7,
			dF: 0,
			qQ: 0,
			em: 0
		}) : "" !== (aBW = n.loadString(187)) && "1" !== aBW || we[2].push({
			name: "Consent Form",
			id: 7,
			dF: 0,
			qQ: 0,
			em: 0
		})), 5 <= q && we[2].push({
			name: "Force Restart Game",
			id: 12,
			dF: 0,
			qQ: 0,
			em: 0
		}), we[2].push({
			name: "Back",
			id: 6,
			dF: 0,
			qQ: 0,
			em: 0
		}), this.aBX(), this.aBY()
	}, this.aBV = function() {
		this.hN = {
			vD: 0,
			aBZ: 0,
			y6: 0,
			hO: 1,
			aBa: 2,
			a7o: 4,
			zc: 2,
			a7x: 2
		}
	}, this.aBY = function() {
		if (settings.hideAllLinks) a2l.ai[0] = a2l.ai[1] = !this.hN.aBZ;
		else a2l.ai[0] = a2l.ai[1] = true;
		a2l.ai[2] = a2l.ai[3] = a2l.ai[4] = !this.hN.aBZ, we[1][1].qQ = this.hN.vD ? 130 : 0, we[1][2].qQ = this.hN.aBZ ? 130 : 0, we[1][3].qQ = this.hN.y6 ? 130 : 0, we[1][4].qQ = this.hN.hO ? 130 : 0, this.aBb(5), this.aBb(6), this.aBb(7)
	}, this.aBX = function() {
		var tm = a5().split("");
		tm.length < 14 ? this.aBV() : (this.hN.vD = parseInt(tm[6]), this.hN.aBZ = parseInt(tm[7]), this.hN.y6 = parseInt(tm[8]), this.hN.hO = parseInt(tm[9]), this.hN.aBa = parseInt(tm[10]), this.hN.a7o = parseInt(tm[11]), this.hN.zc = parseInt(
			tm[12]))
	}, this.a24 = function() {
		var v = cv.u6[2].oK.a22();
		aI((v += ~~this.hN.vD) + ~~this.hN.aBZ + ~~this.hN.y6 + ~~this.hN.hO + ~~this.hN.aBa + ~~this.hN.a7o + ~~this.hN.zc + "0")
	}, this.aBb = function(aE) {
		5 === aE ? we[1][aE].name = "Resolution: " + cK.hP.qs(100 * q3.aBc(), 1) : 6 === aE ? we[1][aE].name = "Country Minimum Font Size: " + (this.hN.a7o < 4 ? 1 + this.hN.a7o : 2 * (this.hN.a7o - 1)) : 7 === aE && (we[1][aE].name =
			"Leaderboard Refresh Rate: " + cK.hP.qs(100 / this.zb[this.hN.zc], 1))
	}, this.cq = function(h8, h9) {
		var aE, aBd, aBg;
		if (!(7 <= aT.pp())) {
			aBd = aBe();
			var gearIconX = aBd.hD - aBd.nY / 2;
			if (h8 > gearIconX && h8 < (gearIconX + aBd.vH) && h9 > aBd.hE && h9 < (aBd.hE + aBd.vH)) return WindowManager.openWindow("settings");
			if (aBT) {
				for (aE = 1; aE < we[aBU].length; aE++)
					if (pl(h8, h9, aBd, aE)) return aBg = we[aBU][aE], 0 === aBU ? 1 === aBg.id ? (hM.a4k = (hM.a4k + 1) % 4, aBg.name = (hM.a4k % 2 ? "Proxy " : "Lobby ") + (1 + (hM.a4k >> 1)), aL.co = !0) : 2 === aBg.id ? (aBU = 1, aL.co = !
						0) : 3 === aBg.id ? (aBU = 2, aL.co = !0) : 4 === aBg.id ? lU.show() : 5 === aBg.id && (console.log("try showing ad:"), aO.i()) : 1 === aBU ? 1 === aBg.id ? (hM.hN.vD = !hM.hN.vD, aBg.qQ = hM.hN.vD ? 130 : 0, hM.a24(),
							aL.co = !0) : 2 === aBg.id ? (hM.hN.aBZ = !hM.hN.aBZ, hM.aBY(), hM.a24(), aL.co = !0) : 3 === aBg.id ? (hM.hN.y6 = !hM.hN.y6, aBg.qQ = hM.hN.y6 ? 130 : 0, hM.a24(), aL.co = !0) : 4 === aBg.id ? (hM.hN.hO = !hM.hN
							.hO, aBg.qQ = hM.hN.hO ? 130 : 0, hM.a24(), aL.co = !0) : 5 === aBg.id ? (hM.hN.aBa++, hM.hN.aBa %= 8, hM.aBb(aBg.id), hM.a24(), q3.a4V(1), aL.co = !0) : 6 === aBg.id ? (hM.hN.a7o++, hM.hN.a7o %= 10, hM.aBb(aBg
							.id), hM.a24(), aL.co = !0) : 7 === aBg.id ? (hM.hN.zc++, hM.hN.zc %= 4, hM.aBb(aBg.id), hM.a24(), aL.co = !0) : 8 === aBg.id ? (hM.aBV(), hM.aBY(), hM.a24(), q3.a4V(1), aL.co = !0) : 9 === aBg.id && (aBU = 0, aL
							.co = !0) : 1 === aBg.id ? (pm.b(ro.aBh, !0), pm.b(ro.aBh, !1)) : 2 === aBg.id ? (pm.b(ro.aBi, !0), pm.b(ro.aBi, !1)) : 3 === aBg.id ? (pm.b(ro.aBj, !0), pm.b(ro.aBj, !1)) : 4 === aBg.id ? (pm.b(ro.a9G, !0), pm.b(
							ro.a9G, !1)) : 5 === aBg.id ? (pm.b(ro.vL, !0), pm.b(ro.vL, !1)) : 13 === aBg.id ? (pm.b(ro.aBk, !0), pm.b(ro.aBk, !1)) : 14 === aBg.id ? (pm.b(ro.aBl, !0), pm.b(ro.aBl, !1)) : 6 === aBg.id ? (aBU = 0, aL.co = !
						0) : 7 === aBg.id ? m ? window.webkit.messageHandlers.iosCommandA.postMessage("showConsentForm") : n.setState(7) : 12 === aBg.id && n.setState(14), !0;
				return aBT = !1, !(aL.co = !0)
			}
			return !!pl(h8, h9, aBd, 0) && (aBT = !(aBU = 0), aL.co = !0)
		}
	}, this.p8 = function(h8, h9) {
		var aE, aBd, qR, i6;
		if (!(7 <= aT.pp())) {
			for (aBd = aBe(), qR = a0m, i6 = aBT ? 0 === aBU ? we[aBU].length - 2 : we[aBU].length : 1, a0m = -1, aE = 0; aE < i6; aE++)
				if (pl(h8, h9, aBd, aE)) {
					a0m = aE;
					break
				} qR !== a0m && (aL.co = !0)
		}
	}, this.cy = function() {
		var aE, i6, aBd;
		if (!(7 <= aT.pp()) && (aBd = aBe(), cz.textAlign = d1, cz.textBaseline = d0, a25(aBd.hD, aBd.hE, aBd.nY, aBd.vH, we[aBU][0].dF, we[aBU][0].qQ, we[aBU][0].em, 0 === a0m, we[aBU][0].name), cz.imageSmoothingEnabled = true, cz.drawImage(
				settingsGearIcon, aBd.hD - aBd.nY / 2, aBd.hE, aBd.vH, aBd.vH), cz.imageSmoothingEnabled = false, cz.font = "bold " + Math.floor(aBd.vH * 0.4) + "px " + settings.fontName, (!aBT && cz.fillText("Win count: " + wins_counter,
				Math.floor(aBd.hD + aBd.nY / 2), Math.floor((aBd.hE + aBd.vH / 2) * 2.1))), aBT))
			for (i6 = we[aBU].length, aE = 1; aE < i6; aE++) a25(aBd.hF, aBd.hE + aE * aBd.vH - aE * qU, aBd.nZ, aBd.vH, we[aBU][aE].dF, we[aBU][aE].qQ, we[aBU][aE].em, a0m === aE, we[aBU][aE].name)
	}
}

function sO() {
	var yS, aBo, aBp, aBq, a8p = !1;

	function aBr() {
		a8p = !0, yS = -1, aBo = new Array(4);
		for (var aE = 3; 0 <= aE; aE--) aBo[aE] = !1;
		var aBs = Math.floor(1 + .02 * wA);
		aBp = new Array(4), (aBq = new Array(4))[1] = aBq[3] = aBp[0] = aBp[2] = 0, aBq[0] = aBp[3] = -aBs, aBp[1] = aBq[2] = aBs
	}

	function aBt() {
		if (-1 !== yS)
			if (0 !== gb && gT.i6()) {
				for (var aBu = !1, aE = 3; 0 <= aE; aE--) aBo[aE] && (aBu = !0, e1 += aBp[aE], e3 += aBq[aE], g3.p8(aBp[aE], aBq[aE]), hr.y9());
				aBu ? aL.co = !0 : hv.hw()
			} else hv.hw()
	}
	this.pw = function(cd) {
		0 !== gb && gT.i6() && (a8p || aBr(), aBo[cd] = !0, -1 === yS) && (yS = setInterval(aBt, 20), aBt())
	}, this.pr = function(cd) {
		if (0 !== gb && (a8p || aBr(), aBo[cd] = !1, -1 !== yS)) {
			for (var aBu = !1, aE = 3; 0 <= aE; aE--) aBu = aBu || aBo[aE];
			aBu || this.hw()
		}
	}, this.hw = function() {
		if (a8p && -1 !== yS) {
			for (var aE = 3; 0 <= aE; aE--) aBo[aE] = !1;
			clearInterval(yS), yS = -1
		}
	}
}

function sP() {
	var d6, ed;

	function aC4(aCN, k4) {
		for (var ad = new Array(aCN), aE = 0; aE < aCN; aE++) ad[aE] = aBx(k4, 10);
		return w.m0(ad)
	}

	function aBx(mI, bU) {
		for (var vU = 0, aE = ed; aE < ed + bU; aE++) vU |= (mI[bJ(aE, 8)] >> 7 - aE % 8 & 1) << ed + bU - aE - 1;
		return ed += bU, vU
	}
	this.aBv = function(a2N, k4) {
		var aBw;
		(ed = 0) === (d6 = k4.length) ? g6.a91(a2N, 3205): 0 === (aBw = aBx(k4, 1)) ? function(a2N, k4) {
			var aC0 = aBx(k4, 2);
			0 === aC0 ? (0 === aBx(k4, 1) ? function(a2N, k4) {
				var aE;
				if (0 === a2N && 8 !== aT.pp() && !(d6 < 4)) {
					a1B.cc(0, aC4(aBx(k4, 5), k4)), a1B.cc(1, "[" + aC4(aBx(k4, 3), k4) + "]");
					var aC5 = aBx(k4, 12),
						aC6 = aBx(k4, 6),
						ad = new Array(aC5);
					for (aE = 0; aE < aC5; aE++) ad[aE] = aBx(k4, aC6);
					pd.yb(ad)
				}
			} : function(a2N, k4) {
				var aE;
				if (8 !== aT.pp())
					if (d6 < 3) g6.a91(a2N, 3208);
					else {
						var aC7, ng, a2N = aBx(k4, 1),
							position = aBx(k4, 16),
							vU = aBx(k4, 4),
							ad = [];
						for (aE = 0; aE < vU; aE++) ng = aBx(k4, 14), aC7 = aBx(k4, 5), aC7 = aC4(aC7, k4), ad.push({
							name: aC7,
							ng: ng
						});
						0 === a2N ? cw.a14(0, ad, 10, 1, .36, .55, position) : cw.a14(1, ad, 100, 2, .47, .5, position)
					}
			})(a2N, k4) : 1 === aC0 ? function(a2N, k4) {
				var aE, eb, a3v, ok, aC8, aC9;
				if (a2N !== g6.a2w) g6.close(a2N, 3239);
				else if (6 === aT.pp() && rh.b(), 7 !== aT.pp()) g6.close(a2N, 3251);
				else {
					var a3U = [0, 0, 0, 0],
						aCA = aBx(k4, 6);
					for (aE = 0; aE < 4; aE++) a3U[aE] = aBx(k4, aCA);
					var aCB = aBx(k4, 4),
						aCC = [];
					for (aE = 0; aE < aCB; aE++) {
						for (aCC.push({
								id: aBx(k4, 5),
								rE: aBx(k4, 4),
								a3q: 1 === aBx(k4, 1),
								me: aBx(k4, 6),
								a3o: aBx(k4, 14),
								a3t: aBx(k4, aCA),
								a3u: aBx(k4, 9) + 1,
								a2W: aBx(k4, 10)
							}), a3v = aBx(k4, 3), ok = new Array(a3v), eb = 0; eb < a3v; eb++) aC8 = aBx(k4, 9) + 1, aC9 = aC4(aBx(k4, 3), k4), ok[eb] = ("" === aC9 ? "other: " : "[" + aC9 + "]: ") + aC8;
						aCC[aE].a3v = a3v, aCC[aE].ok = ok
					}
					rh.a1C(a3U, aCC)
				}
			}(a2N, k4) : 2 !== aC0 && 3 !== aC0 || gX.b(k4)
		}(a2N, k4) : 1 === aBw && function(a2N, k4) {
			var qR = aT.pp();
			8 !== qR ? 10 === qR && g6.a91(a2N, 3243) : a2N !== g6.pQ ? g6.a91(a2N, 3244) : 0 === aBx(k4, 1) ? aL.oU.aCH(k4) : function(k4) {
				var aCJ = aBx(k4, 2);
				(0 === aCJ ? function(k4) {
					var uo;
					3 !== d6 ? g6.a91(g6.pQ, 3230) : (uo = aBx(k4, 9), k4 = aBx(k4, 7), 0 !== dw[uo] && 0 !== dw[bN] && (k4 %= aF.aG, g2.jY(uo, bN, k4), g3.kU(uo, 1, k4)))
				} : 1 === aCJ ? function(k4) {
					2 !== d6 ? g6.a91(g6.pQ, 3235) : (k4 = aBx(k4, 9), 0 !== dw[k4] && 0 !== dw[bN] && gN.a8e(0, [k4], !0) && g2.jq(k4, 1))
				} : function(k4) {
					var uo;
					3 !== d6 ? g6.a91(g6.pQ, 3236) : (uo = aBx(k4, 9), k4 = aBx(k4, 9), 0 !== dw[uo] && 0 !== dw[k4] && 0 !== dw[bN] && gN.a8e(1, [uo], !0) && (g3.kU(uo, 3, 96), g3.kU(k4, 4, 96), g2.uw(uo, k4)))
				})(k4)
			}(k4)
		}(a2N, k4)
	}, this.a3D = function(k4) {
		ed = 1, d6 = k4.length, (2 === aBx(k4, 2) ? function(k4) {
			ed += 20;
			for (var a4O, a4N, name, a33 = aBx(k4, 9), rC = aBx(k4, 14), rE = aBx(k4, 4), a3q = 1 === aBx(k4, 1), a3r = aBx(k4, 6), a3s = aBx(k4, 14), aCG = aBx(k4, 9) + 1, nc = [], aE = 0; aE < aCG; aE++) a4O = aBx(k4, 1), a4N = [aBx(k4,
				6), aBx(k4, 6), aBx(k4, 6)], name = aC4(aBx(k4, 5), k4), nc.push({
				name: name,
				a4N: a4N,
				a4O: a4O
			});
			aT.a2c(), az.lw(a3r, a3s), 1 === nc.length && ft.a4B(rE);
			rB(rC, a33, nc, rE, a3q, !1)
		} : function(k4) {
			ed += 20;
			for (var a4O, a4N, ng, name, a33 = aBx(k4, 1), rC = aBx(k4, 14), rE = aBx(k4, 4), a3q = 1 === aBx(k4, 1), a3r = aBx(k4, 6), a3s = aBx(k4, 14), nc = [], aE = 0; aE < 2; aE++) a4O = aBx(k4, 1), a4N = [aBx(k4, 6), aBx(k4, 6),
				aBx(k4, 6)
			], ng = aBx(k4, 14), name = aC4(aBx(k4, 5), k4), nc.push({
				name: name,
				a4N: a4N,
				ng: ng,
				a4O: a4O
			});
			aT.a2c(), az.lw(a3r, a3s), rB(rC, a33, nc, rE, a3q, !1)
		})(k4)
	}, this.a37 = function(k4) {
		ed = 1, d6 = k4.length;
		var aC0 = aBx(k4, 2),
			aCF = aBx(k4, 10);
		return g6.a2w > g6.a3B && (aCF += g6.a3B), g6.a2w === aCF ? (g6.pQ = aCF, !1) : (g6.close(g6.a2w, 3247), g6.pQ = aCF, gX.a32 = aBx(k4, 10), gX.a33 = aBx(k4, 2 === aC0 ? 9 : 1), g6.yX(aCF, 5) && jG.a8z(), !0)
	}
}

function sQ() {
	function aCO() {
		var u = t(),
			aCQ = Math.floor(u / 16777216);
		lv.lx(24, aCQ), lv.lx(24, u - 16777216 * aCQ)
	}

	function aCP() {
		lv.lx(14, a99), lv.lx(4, m ? 2 : 12 <= q ? 1 : 0 < q ? 3 : 0), lv.lx(1, oz ? 1 : 0), lv.lx(1, p0 ? 1 : 0), lv.lx(5, (new Date).getHours() % 24)
	}
	this.ya = function() {
		lv.lw(18), lv.lx(1, 0), lv.lx(3, 0), lv.lx(14, a99), g6.send(0, lv.k4)
	}, this.a2L = function(a2N) {
		var ad = w.o3(rY.a4M()),
			ux = ad.length,
			a4N = (lv.lw(135 + 10 * ux), lv.lx(1, 0), lv.lx(3, 1), lv.lx(10, a9B), lv.lx(20, rl.id), lv.lx(10, Math.min(rl.vR, 1023)), cv.u6[2].oK.a21());
		lv.lx(6, a4N[0]), lv.lx(6, a4N[1]), lv.lx(6, a4N[2]), aCO(), aCP();
		for (var aE = 0; aE < ux; aE++) lv.lx(10, ad[aE]);
		g6.a2w = a2N, g6.send(a2N, lv.k4)
	}, this.a12 = function(a2N, id) {
		lv.lw(38), lv.lx(1, 0), lv.lx(3, 7), lv.lx(3, 0), lv.lx(14, a99), lv.lx(1, id), lv.lx(16, Math.abs(4096 + cw.position[id] + cw.a11[id]) % 65536), g6.send(a2N, lv.k4)
	}, this.a4m = function(a2N) {
		var aE, lk;
		if (!(rY.a4b + 7e3 > aL.aM)) {
			for (rY.a4b = aL.aM, lv.lw(136), lv.lx(1, 0), lv.lx(3, 7), lv.lx(3, 2), aCO(), lk = uT(rY.a4a.length - 20, 0), aE = rY.a4a.length - 1; lk <= aE; aE--) lv.lx(4, Math.abs(rY.a4a.charCodeAt(aE) - 48) % 10);
			g6.send(a2N, lv.k4)
		}
	}, this.a8r = function(a2N, a8q) {
		lv.lw(5), lv.lx(1, 0), lv.lx(3, 5), lv.lx(1, a8q ? 1 : 0), g6.send(a2N, lv.k4)
	}, this.a40 = function(a3p) {
		lv.lw(8), lv.lx(1, 0), lv.lx(3, 2), lv.lx(4, a3p), g6.send(g6.a2w, lv.k4)
	}, this.a8z = function() {
		lv.lw(55), lv.lx(1, 0), lv.lx(3, 6), lv.lx(8, g6.uv()), lv.lx(10, gX.a32), lv.lx(9, gX.a33), lv.lx(10, a9B), lv.lx(14, a99), g6.send(g6.pQ, lv.k4)
	}, this.jH = function(dW) {
		lv.lw(27), lv.lx(1, 1), lv.lx(4, 0), lv.lx(22, dW), g6.send(g6.pQ, lv.k4)
	}, this.jJ = function(e0, eU) {
		lv.lw(25), lv.lx(1, 1), lv.lx(4, 1), lv.lx(10, e0), lv.lx(10, eU), g6.send(g6.pQ, lv.k4)
	}, this.jN = function(e0, jL) {
		lv.lw(24), lv.lx(1, 1), lv.lx(4, 2), lv.lx(10, e0), lv.lx(9, jL), g6.send(g6.pQ, lv.k4)
	}, this.jR = function(e0, dW) {
		lv.lw(37), lv.lx(1, 1), lv.lx(4, 3), lv.lx(10, e0), lv.lx(22, dW), g6.send(g6.pQ, lv.k4)
	}, this.jV = function(jT, dW) {
		lv.lw(37), lv.lx(1, 1), lv.lx(4, 4), lv.lx(10, jT), lv.lx(22, dW), g6.send(g6.pQ, lv.k4)
	}, this.jX = function(eU) {
		lv.lw(15), lv.lx(1, 1), lv.lx(4, 5), lv.lx(10, eU), g6.send(g6.pQ, lv.k4)
	}, this.jb = function(cd) {
		lv.lw(12), lv.lx(1, 1), lv.lx(4, 6), lv.lx(7, cd), g6.send(g6.pQ, lv.k4)
	}, this.je = function(jd) {
		lv.lw(6), lv.lx(1, 1), lv.lx(4, 7), lv.lx(1, jd), g6.send(g6.pQ, lv.k4)
	}, this.jg = function() {
		lv.lw(5), lv.lx(1, 1), lv.lx(4, 8), g6.send(g6.pQ, lv.k4)
	}, this.jy = function(a5s, jx) {
		lv.lw(29), lv.lx(1, 1), lv.lx(4, 10), lv.lx(12, a5s), lv.lx(2, 0), lv.lx(10, jx), g6.send(g6.pQ, lv.k4)
	}, this.k1 = function(a5s, mS, mT, aCR) {
		lv.lw(46), lv.lx(1, 1), lv.lx(4, 10), lv.lx(12, a5s), lv.lx(2, 1), lv.lx(9, mS), lv.lx(9, mT), lv.lx(9, aCR), g6.send(g6.pQ, lv.k4)
	}, this.k3 = function(a5s) {
		var aE, oZ = g7.g8.oZ;
		for (lv.lw(47 + 33 * oZ.length), lv.lx(1, 1), lv.lx(4, 10), lv.lx(12, a5s), lv.lx(2, 2), lv.lx(24, g7.g8.oY), lv.lx(4, oZ.length), aE = 0; aE < oZ.length; aE++) lv.lx(9, oZ[aE].player), lv.lx(24, oZ[aE].om);
		g6.send(g6.pQ, lv.k4)
	}, this.jo = function(aCS, aCT) {
		lv.lw(21), lv.lx(1, 1), lv.lx(4, 15), lv.lx(9, aCT), lv.lx(7, aCS), g6.send(g6.pQ, lv.k4)
	}, this.jr = function(up) {
		lv.lw(14), lv.lx(1, 1), lv.lx(4, 14), lv.lx(9, up), g6.send(g6.pQ, lv.k4)
	}, this.jv = function(aCU, target) {
		var aE, bU = aCU.length;
		for (lv.lw(14 + 9 * bU), lv.lx(1, 1), lv.lx(4, 13), lv.lx(9, target), aE = 0; aE < bU; aE++) lv.lx(9, aCU[aE]);
		g6.send(g6.pQ, lv.k4)
	}, this.a4J = function(a2N) {
		lv.lw(29), lv.lx(1, 0), lv.lx(3, 3), aCP(), g6.send(a2N, lv.k4)
	}
}

function sR() {
	var aCW;

	function aCc(hD, hE, hF, hH) {
		return Math.abs(hF - hD) + Math.abs(hH - hE)
	}
	this.aCX = function() {
		return aCW
	}, this.cP = function(player, aCY) {
		var aE;
		if (0 !== bo[player].length && bW.bX(aCY) && (bW.bh(aCY) || bW.bg(aCY) !== player))
			for (aE = 21; 0 <= aE; aE--)
				if (function(aCW, aCY) {
						var aCb, aE, mi = bW.hI(aCW),
							mj = bW.cx(aCW),
							n4 = bW.hI(aCY),
							n3 = bW.cx(aCY),
							aBs = aCc(mi, mj, n4, n3);
						if (!(aBs < 2))
							for (aCb = aCW, aE = 0; aE < aBs; aE++)
								if (Math.abs(n4 - bW.hI(aCb)) >= Math.abs(n3 - bW.cx(aCb)) ? aCb += av[mi < n4 ? 1 : 3] : aCb += av[mj < n3 ? 2 : 0], !bW.tT(aCb)) return !!bW.bX(aCb) && !(0 === aE || aE + 20 < aBs);
						return
					}(aCW = 21 === aE ? function(border, aCY) {
						for (var aBs, n4 = bW.hI(aCY), n3 = bW.cx(aCY), cd = 0, min = aCc(n4, n3, bW.hI(border[0]), bW.cx(border[0])), aE = border.length - 1; 1 <= aE; aE--)(aBs = aCc(n4, n3, bW.hI(border[aE]), bW.cx(border[aE]))) < min && (
							min = aBs, cd = aE);
						return border[cd]
					}(bo[player], aCY) : bo[player][bJ(aE * bo[player].length, 21)], aCY)) return !0;
		return !1
	}
}

function a9O() {
	var aCd = !1,
		vO = 0,
		cl = 0,
		nY = 0,
		l5 = 0,
		dC = null,
		nT = null,
		qK = null;

	function aCf() {
		for (var a3e, aCi = 0, bU = 0, fQ = Math.floor(cl / 2), dF = Math.floor(nY / 2), a3d = 1.5 * Math.PI, aE = r9; 0 <= aE; aE--) bU += qK[aE], 0 === qK[aE] && aCi++;
		if (aCd = !1, nT.clearRect(0, 0, cl, cl), nT.fillStyle = d2.iN, nT.fillRect(0, 0, cl, cl), nT.fillStyle = d2.d3, nT.fillRect(0, 0, cl, l5), nT.fillRect(0, 0, l5, cl), nT.fillRect(cl - l5, 0, l5, cl), nT.fillRect(0, cl - l5, cl, l5), 0 < bU)
			if (aCi === r9) {
				for (aE = r9; 0 <= aE; aE--)
					if (0 < qK[aE]) {
						! function(aE, fQ, dF) {
							nT.fillStyle = fR.a3i[fR.ob[aE]], nT.beginPath(), nT.arc(fQ, fQ, dF, 0, 2 * Math.PI), nT.fill()
						}(aE, fQ, dF);
						break
					}!
				function(fQ) {
					var cj = fQ / 3;
					nT.font = cK.iH.lW(cj, 1), nT.fillStyle = d2.d3, nT.fillText("100%", fQ, fQ + .1 * cj)
				}(fQ)
			} else {
				for (aE = 0; aE <= r9; aE++) 0 < qK[aE] && (! function(aE, fQ, dF, a3d, a3e) {
					nT.fillStyle = fR.a3i[fR.ob[aE]], nT.beginPath(), nT.arc(fQ, fQ, dF, a3d, a3e), nT.lineTo(fQ, fQ), nT.fill()
				}(aE, fQ, dF, a3d, a3e = a3d + 2 * Math.PI * qK[aE] / bU), function(fQ, dF, a3d, a3e) {
					var aR = (a3e - a3d) / (2 * Math.PI),
						cj = +dF * Math.min(aR, .37);
					cj < 8 || (a3d = (a3d + a3e) / 2, a3e = Math.floor(100 * aR + .5) + "%", dF *= .525 - Math.max(.6 * (aR - .7), 0), nT.font = cK.iH.lW(cj, 1), nT.fillStyle = d2.d3, nT.fillText(a3e, fQ + Math.cos(a3d) * dF, fQ + Math.cos(
						a3d + 1.5 * Math.PI) * dF))
				}(fQ, dF, a3d, a3e), 0 !== aE && a3g(fQ, dF, a3d), a3d = a3e);
				a3g(fQ, dF, 1.5 * Math.PI)
			}!
		function(fQ, dF) {
			nT.beginPath(), nT.arc(fQ, fQ, dF, 0, 2 * Math.PI), nT.stroke()
		}(fQ, dF)
	}

	function a3g(fQ, dF, a3j) {
		nT.beginPath(), nT.moveTo(fQ, fQ), nT.lineTo(fQ + Math.cos(a3j) * dF, fQ + Math.cos(a3j + 1.5 * Math.PI) * dF), nT.stroke()
	}
	this.b = function() {
		if (eO) {
			var aE;
			for (vO = 0, qK = new Uint32Array(r9 + 1), aE = r9; 0 <= aE; aE--) qK[aE] = 0;
			for (aE = fT - 1; 0 <= aE; aE--) qK[fR.fS[fU[aE]]] += 1;
			this.resize()
		} else qK = nT = dC = null
	}, this.wv = function() {
		return cl
	}, this.resize = function() {
		eO && (cl = Math.floor(a0 && !hq ? .18 * wA : .13 * cb), cl = (cl *= 1 + (.5 + .2 * a0) * hq) + cl % 2, nY = Math.floor(7 * cl / 8), (dC = dC || document.createElement("canvas")).width = cl, dC.height = cl, nT = dC.getContext("2d", {
			alpha: !0
		}), l5 = Math.max(1, .015 * cl), nT.lineWidth = l5, nT.strokeStyle = d2.d3, cK.iH.textAlign(nT, 1), cK.iH.textBaseline(nT, 1), aCf())
	}, this.od = function() {
		return qK[this.oc()]
	}, this.oM = function() {
		return vO = 31, this.fA(), this.oc()
	}, this.oc = function() {
		for (var aCg = 0, aE = r9; 0 < aE; aE--) qK[aE] > qK[aCg] && (aCg = aE);
		return aCg
	}, this.fA = function() {
		if (eO && 32 <= ++vO) {
			var aE;
			for (vO = 0, aE = r9; 0 <= aE; aE--) qK[aE] = 0;
			for (aE = fT - 1; 0 <= aE; aE--) qK[fR.fS[fU[aE]]] += bv[fU[aE]];
			aCd = !0
		}
	}, this.cg = function() {
		eO && aCd && aCf()
	}, this.cy = function() {
		eO && (hq ? cz.drawImage(dC, kq, kq) : cz.drawImage(dC, kq, ww + 2 * kq))
	}
}

function sq() {
	this.a38 = function() {
		n || m || function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var aCn = window.location.search,
				aCn = new URLSearchParams(aCn).get(key);
			if ("string" != typeof aCn || aCn.length < 1) return null;
			return aCn
		}("replay") && lU.show()
	}, this.lb = function() {
		var aCm;
		n || m || ((aCm = new URL(window.location.href)).search = "", history.replaceState(null, "", aCm.toString()))
	}
}

function sS() {
	var aCp, ad;
	this.b = function() {
		for (var aE = (ad = new Uint16Array(101)).length - 1; 0 <= aE; aE--) ad[aE] = bJ(32768 * aE, 100);
		this.rJ(0)
	}, this.value = function(bc) {
		return ad[bc]
	}, this.a8X = function() {
		return bJ(aCp - 1, 2)
	}, this.rJ = function(a8o) {
		aCp = 2 * a8o % 32768 + 1
	}, this.random = function() {
		return aCp = 167 * aCp % 32768
	}, this.ef = function(gp) {
		return bJ(gp * this.random(), 32768)
	}, this.fK = function(bc) {
		return 0 !== bc && this.random() < this.value(bc)
	}
}

function sm() {
	this.kA = new aCq, this.xu = new aCr, this.xt = new aCs, this.b = function(rC, nc, rE, rF) {
		var aCt;
		cH || ((aCt = {}).rD = bN, aCt.rC = rC, aCt.nc = nc, aCt.rE = rE, aCt.rF = rF, aCt.a3r = az.me, aCt.a3s = az.a3o, ft.a4G(aCt), this.kA.b(aCt))
	}, this.fA = function() {
		cH || this.kA.fA()
	}, this.xs = function() {
		var qQ = this.kA.aCt;
		0 === gb && aT.a2c(), az.lw(qQ.a3r, qQ.a3s), 1 === qQ.nc.length && (ft.a4B(qQ.rE), ft.a4D(qQ.a4E, qQ.a4F)), g6.close(g6.pQ, 3246), ft.a4I(), rB(qQ.rC, qQ.rD, qQ.nc, qQ.rE, qQ.rF, !0)
	}, this.xq = function(v) {
		var aE = v.indexOf("=");
		return 0 <= aE ? v.substring(aE + 1) : v
	}, this.xv = function(v) {
		return "https://territorial.io/?replay=" + v
	}
}

function aCq() {
	this.aCu = null, this.aCv = null, this.aCw = null, this.aCx = null, this.aCy = null, this.aCz = null;
	var aD0 = 0;
	this.aCt = null, this.xr = "", this.b = function(aCt) {
		this.aCu = [], this.aCv = [], this.aCw = [], this.aCx = [], this.aCy = [0], this.aCz = [0], aD0 = 0, this.aCt = aCt, this.xr = ""
	}, this.kB = function(id, ae, ag, ai) {
		cH || 2 === gb || (0 === this.aCy[aD0] && (this.aCz[aD0] ? (this.aCy.push(1), this.aCz.push(0), aD0++) : this.aCy[aD0] = 1), this.aCu.push(id), this.aCv.push(ae), this.aCw.push(void 0 === ag ? 0 : ag), this.aCx.push(void 0 === ai ? 0 :
			ai), this.aCz[aD0]++)
	}, this.fA = function() {
		0 === this.aCy[aD0] ? this.aCz[aD0]++ : (this.aCy.push(0), this.aCz.push(0), aD0++)
	}
}

function aCs() {
	function aD6(v) {
		0 === gb ? rc.a2Q(3605) : g2.uh(v)
	}
	this.m0 = function(v) {
		if (m7.lt(m7.lq(m7.lp(v))), ! function() {
				if (k5.d6 < 10) aD6("File Too Small");
				else if (k5.k6(9) !== a98) aD6("Game Version Error");
				else if (k5.k6(31) !== k5.d6) aD6("Size Error");
				else {
					if (function(eu) {
							var aE, bc = k5.k4,
								bU = k5.d6,
								a5s = 0;
							for (aE = 7; aE < bU; aE++) a5s = a5s + bc[aE] & 65535;
							return a5s === eu
						}(k5.k6(16))) return 1;
					aD6("Hash Error")
				}
				return
			}()) return !1;
		(aCt = {}).rD = k5.k6(9), aCt.rC = k5.k6(14), aCt.rE = k5.k6(4), aCt.rF = 1 === k5.k6(1), aCt.a3r = k5.k6(6), aCt.a3s = k5.k6(14), aCt.aD8 = k5.k6(10), gR.kA.aCt = aCt,
			function() {
				var aE, a4O, a4N, name, bU = gR.kA.aCt.aD8,
					nc = [];
				for (aE = 0; aE < bU; aE++) a4O = k5.k6(1), a4N = [k5.k6(6), k5.k6(6), k5.k6(6)], name = k5.aD9(k5.k6(5)), nc.push({
					name: name,
					a4N: a4N,
					a4O: a4O
				});
				if (gR.kA.aCt.nc = nc, 8 === gR.kA.aCt.rE)
					for (aE = 0; aE < bU; aE++) nc[aE].ng = k5.k6(14)
			}(),
			function() {
				var aE, bU, aDA = gR.kA.aCt;
				if (1 === aDA.nc.length)
					for (bU = 6 < aDA.rE ? 1 : aDA.rE + 2, aDA.a4E = new Array(bU), aDA.a4F = new Array(bU), aE = 0; aE < bU; aE++) aDA.a4E[aE] = k5.k6(3), aDA.a4F[aE] = k5.k6(9) + 1
			}(), aCt = k5.k6(5), aDB = k5.k6(30), aDC = k5.k6(30);
		var aCt, aDB, aDC, aE, id, bU = aDB,
			aDF = new Uint8Array(bU),
			aDG = new Uint16Array(bU),
			aDH = new Uint32Array(bU),
			aDI = new Uint32Array(bU);
		for (gR.kA.aCu = aDF, gR.kA.aCv = aDG, gR.kA.aCw = aDH, gR.kA.aCx = aDI, aE = 0; aE < bU; aE++) aDF[aE] = id = k5.k6(4), aDG[aE] = k5.k6(9), 0 === id ? aDH[aE] = k5.k6(22) : 1 === id ? (aDH[aE] = k5.k6(10), aDI[aE] = k5.k6(10)) : 2 ===
			id ? (aDH[aE] = k5.k6(10), aDI[aE] = k5.k6(9)) : 3 === id || 4 === id ? (aDH[aE] = k5.k6(10), aDI[aE] = k5.k6(22)) : 5 === id ? aDH[aE] = k5.k6(10) : 6 === id ? aDH[aE] = k5.k6(7) : 7 === id && (aDH[aE] = k5.k6(1));
		return function(bU, m1) {
			var aE, aCy = new Uint8Array(bU),
				aCz = new Array(bU);
			for (aCz.fill(0), gR.kA.aCy = aCy, gR.kA.aCz = aCz, aE = 0; aE < bU; aE++) aCy[aE] = k5.k6(1), aCz[aE] = k5.k6(m1)
		}(aDC, aCt), k5.cd < 8 * k5.d6 - 13 || k5.cd > 8 * k5.d6 ? (aD6("Out Of Bounds Error: " + k5.cd + " " + 8 * k5.d6), !1) : (gR.kA.xr = v, !0)
	}
}

function aCr() {
	this.o3 = function() {
		var aDA, m1 = function() {
				var aE, aCz = gR.kA.aCz,
					bU = aCz.length,
					max = 0;
				for (aE = 0; aE < bU; aE++) max = Math.max(max, aCz[aE]);
				return m9(Math.max(max, 1))
			}(),
			aDK = function(m1) {
				return 179 + function() {
					var aE, nc = gR.kA.aCt.nc,
						bU = nc.length,
						aDK = 24 * bU;
					for (aE = 0; aE < bU; aE++) aDK += 10 * w.o3(nc[aE].name).length;
					8 === gR.kA.aCt.rE && (aDK += 14 * bU);
					return aDK
				}() + (1 === gR.kA.aCt.nc.length ? 12 * gR.kA.aCt.a4E.length : 0) + function() {
					var aE, aCu = gR.kA.aCu,
						bU = aCu.length,
						aDK = 13 * bU,
						aDY = [22, 20, 19, 32, 32, 10, 7, 1, 0, 0];
					for (aE = 0; aE < bU; aE++) aDK += aDY[aCu[aE]];
					return aDK
				}() + function(m1) {
					return gR.kA.aCz.length * (1 + m1)
				}(m1)
			}(m1);
		lv.lw(aDK + (6 - aDK % 6) % 6), aDA = gR.kA.aCt, lv.lx(9, a98), lv.lx(31, lv.d6), lv.cd += 16, lv.lx(9, aDA.rD), lv.lx(14, aDA.rC), lv.lx(4, aDA.rE), lv.lx(1, aDA.rF), lv.lx(6, aDA.a3r), lv.lx(14, aDA.a3s), lv.lx(10, aDA.nc.length);
		var aE, em, aDS, aDT, nc = gR.kA.aCt.nc,
			bU = nc.length;
		for (aE = 0; aE < bU; aE++)
			for (lv.lx(1, nc[aE].a4O), lv.lx(18, (nc[aE].a4N[0] << 12) + (nc[aE].a4N[1] << 6) + nc[aE].a4N[2]), aDS = w.o3(nc[aE].name), aDT = aDS.length, lv.lx(5, aDT), em = 0; em < aDT; em++) lv.lx(10, aDS[em]);
		if (8 === gR.kA.aCt.rE)
			for (aE = 0; aE < bU; aE++) lv.lx(14, nc[aE].ng);
		return function() {
				var aE, aDA = gR.kA.aCt;
				if (1 === aDA.nc.length)
					for (aE = 0; aE < aDA.a4E.length; aE++) lv.lx(3, aDA.a4E[aE]), lv.lx(9, aDA.a4F[aE] - 1)
			}(),
			function(m1) {
				var aE, aCu = gR.kA.aCu,
					ae = gR.kA.aCv,
					ag = gR.kA.aCw,
					ai = gR.kA.aCx,
					bU = aCu.length;
				for (lv.lx(5, m1), lv.lx(30, bU), lv.lx(30, gR.kA.aCz.length), aE = 0; aE < bU; aE++) lv.lx(4, aCu[aE]), lv.lx(9, ae[aE]), 0 === aCu[aE] ? lv.lx(22, ag[aE]) : 1 === aCu[aE] ? (lv.lx(10, ag[aE]), lv.lx(10, ai[aE])) : 2 === aCu[
					aE] ? (lv.lx(10, ag[aE]), lv.lx(9, ai[aE])) : 3 === aCu[aE] || 4 === aCu[aE] ? (lv.lx(10, ag[aE]), lv.lx(22, ai[aE])) : 5 === aCu[aE] ? lv.lx(10, ag[aE]) : 6 === aCu[aE] ? lv.lx(7, ag[aE]) : 7 === aCu[aE] && lv.lx(1, ag[aE])
			}(m1),
			function(m1) {
				var aE, aCy = gR.kA.aCy,
					aCz = gR.kA.aCz,
					bU = aCy.length;
				for (aE = 0; aE < bU; aE++) lv.lx(1, aCy[aE]), lv.lx(m1, aCz[aE])
			}(m1), lv.cd !== aDK && g2.uh("Encoder Index Error: " + lv.cd + " " + aDK), lv.cd = 40, lv.lx(16, function() {
				var aE, bc = lv.k4,
					bU = lv.d6,
					a5s = 0;
				for (aE = 7; aE < bU; aE++) a5s = a5s + bc[aE] & 65535;
				return a5s
			}()), k5.b(lv.k4), rm.nq(rm.no(bJ(aDK - 1, 6) + 1))
	}
}

function sX() {
	var fQ, v9 = !1,
		aDZ = !1,
		aDa = -1e4;

	function resize(dU) {
		fQ = 0, ch.ci() && (aDb(dU) || v9) && (v9 = !1, w8(), a1B.b(), ra.b(), pn.resize(), a2l.b(), rb.resize(), pd.resize(), rZ.resize(), a2a.resize(), cw.resize(), aF.b(), rp.resize(), 1 <= gb ? (gI.resize(!1), gL.resize(), g4.resize(), hr
		.resize(), cU.resize(), g2.resize(), cI.resize(), lU.resize(), gW.resize(), gO.resize(), gM.resize(), cm.resize(), nQ.resize(), nR.resize(), g3.resize(), gU.resize(), gP.resize(), hr.y9()) : (2 === aT.pp() ? ft.resize() : 3 === aT
		.pp() && rc.resize(), aT.a2i(), aT.a2m()), aL.co = !0)
	}

	function aDc(aR) {
		return aR && 128 < aR ? Math.floor(aR) : 128
	}

	function aDb(dU) {
		var nY, vH, vI;
		return q3.aBc(), nY = aDc(document.documentElement.clientWidth), vH = window.visualViewport ? aDc(window.visualViewport.height) : aDc(document.documentElement.clientHeight), dU && !aDZ ? (aDZ = !0, document.body.removeChild(p7)) : aDZ && (
			aDZ = !1, document.body.appendChild(p7)), dU = Math.floor(.5 + lX * nY), vI = Math.floor(.5 + lX * vH), !(dU === hG && vI === cu || pX.q2() && (pn.lT || lU.lT)) && (hG = a1 = dU, cu = a2 = vI, wA = xE(a1, a2), cb = bJ(a2 + a1, 2), p7
			.width = dU, p7.height = vI, p7.style.width = nY + "px", p7.style.height = vH + "px", 1)
	}
	this.b = function() {
		a1 = a2 = wA = hG = cu = cb = 0, lX = fQ = 1, p7 = document.getElementById("canvasA"), (cz = p7.getContext("2d", {
			alpha: !1
		})).imageSmoothingEnabled = !1, aDb(0)
	}, this.fA = function() {
		rj.fA(), 50 <= ++fQ && resize(0)
	}, this.a4V = function(dU) {
		v9 = !0, resize(dU)
	}, this.q4 = function() {
		aDa + 1e3 > aL.aM || (aDa = aL.aM, resize(0))
	}, this.aBc = function() {
		var aDd = window.devicePixelRatio || 1,
			aE = hM.hN.aBa;
		return (lX = aE < 3 ? .5 + .25 * aE : (.5 + .125 * (aE - 3)) * aDd) / aDd
	}
}

function sT() {
	var player, eV, mS, mM, hD, hE, hF, hH, cd, aDe, id;

	function aDk() {
		var eU;
		if (bW.bh(mS)) eU = bZ;
		else {
			if ((eU = bW.bg(mS)) === player) return void aDm(!0);
			if (!eh(player, eU)) return function(eU) {
				var max = bv[eU] * qe - bO[eU];
				max <= 0 || (eV -= max = max < eV ? max : eV, player === bN && (g2.jl(max, 0, eU), bR.bS[16] += max), eU === bN && (g2.v2(max, player), bR.bS[10] += max), bO[eU] += max, g3.jm(eU, max))
			}(eU), void aDm(!0)
		}
		player === bN && (bR.bS[13] += eV), gF.bM(player, id), b5.bT(player, aDe), bV[player].push(mM), b5.eR(player, eV, eU), bL.eS(player, !0)
	}

	function aDm(aDp) {
		gF.bM(player, id), b5.bT(player, aDe), aDp && (bO[player] += eV)
	}

	function aDg() {
		bW.a5c(mS, player) && bW.a5e(mS)
	}

	function aDf(aE, a72, wr, ed, i6) {
		if (cd = aE, id = a72, player = wr, hD = bW.hI(ed), hE = bW.cx(ed), hF = bW.hI(i6), hH = bW.cx(i6), mM = mS = bW.my(hD, hE), -1 !== (aDe = b5.hL(player, id))) return eV = b5.bD(player, aDe), 1;
		aDg(), gF.bM(player, id)
	}
	this.fA = function(aE, id, wr, ed, i6) {
		aDf(aE, id, wr, ed, i6) && (aDg(), function() {
			var aDq = bJ(eV, 128);
			eV -= aDq = aDq < 1 ? 1 : aDq, player === bN && (bR.bS[15] += aDq);
			if (eV <= bK) return player === bN && (bR.bS[15] += eV), void aDm(!1);
			return b5.bu(player, aDe, eV), 1
		}()) && (aE = bW.my(hD, hE), mS = Math.abs(hF - hD) >= Math.abs(hH - hE) ? aE + av[hD < hF ? 1 : 3] : aE + av[hE < hH ? 2 : 0], hD = bW.hI(mS), hE = bW.cx(mS), gF.h0(cd, mS), ! function() {
			if (bW.bX(mS)) return;
			return 1
		}() ? aDk() : bW.tT(mS) && bW.a5h(mS, player))
	}, this.h4 = function(wr, ed) {
		player = wr, mS = bW.my(bW.hI(ed), bW.cx(ed)), aDg()
	}
}

function sU() {
	var aDr, aDs, tT, aDt;
	this.b = function() {
		var aE, h8, h9, a4N, aDu, cl, eu, nT, d9, mK, aR, bc, f2, eb, aDx;
		if (function() {
				if (tT = !0, aDt = "rgb(" + az.mH[0] + "," + az.mH[1] + "," + az.mH[2] + ")", az.a9e(az.me)) return 1;
				return tT = !1, 0
			}()) aDs = null;
		else {
			for (aDr = bJ(96, 4), aDu = 1 === az.me ? (a4N = 0, 160) : (a4N = 128, 32), aDt = "rgb(" + a4N + "," + a4N + "," + a4N + ")", aDs = new Array(4), aE = 3; 0 <= aE; aE--) {
				if (aDs[aE] = document.createElement("canvas"), cl = aE % 2 == 0 ? az.b0 : aDr, eu = aE % 2 == 0 ? aDr : az.b1 + 2 * aDr, aDs[aE].width = cl, aDs[aE].height = eu, mK = (d9 = (nT = aDs[aE].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, cl, eu)).data, aE % 2 == 0)
					for (h9 = aDr - 1; 0 <= h9; h9--)
						for (aR = aDu + Math.floor((h9 + 1) * (a4N - aDu) / (aDr + 1)), h8 = cl - 1; 0 <= h8; h8--) mK[bc = 4 * ((0 === aE ? aDr - h9 - 1 : h9) * cl + h8)] = aR, mK[bc + 1] = aR, mK[bc + 2] = aR, mK[bc + 3] = 255;
				else {
					for (h8 = aDr - 1; 0 <= h8; h8--)
						for (aR = aDu + Math.floor((h8 + 1) * (a4N - aDu) / (aDr + 1)), h9 = eu - 1 - aDr; aDr <= h9; h9--) mK[bc = 4 * (h9 * cl + (3 === aE ? aDr - h8 - 1 : h8))] = aR, mK[bc + 1] = aR, mK[bc + 2] = aR, mK[bc + 3] = 255;
					for (eb = 1; 0 <= eb; eb--)
						for (h8 = aDr - 1; 0 <= h8; h8--)
							for (h9 = aDr - 1; 0 <= h9; h9--) f2 = (Math.pow(h8 * h8 + h9 * h9, .5) + 1) / (aDr + 1), aR = aDu + Math.floor((1 < f2 ? 1 : f2) * (a4N - aDu)), mK[bc = 4 * ((0 === eb ? aDr - h9 - 1 : h9 + eb * (eu - aDr)) * cl + (
								1 === aE ? h8 : aDr - h8 - 1))] = aR, mK[bc + 1] = aR, mK[bc + 2] = aR, mK[bc + 3] = 255
				}
				nT.putImageData(d9, 0, 0)
			}
			aDx = aDu, az.mC.fillStyle = "rgb(" + aDx + "," + aDx + "," + aDx + ")", az.mC.fillRect(0, 0, az.b0, 1), az.mC.fillRect(0, az.b1 - 1, az.b0, 1), az.mC.fillRect(0, 0, 1, az.b1), az.mC.fillRect(az.b0 - 1, 0, 1, az.b1)
		}
	}, this.nN = function() {
		var eb = tT ? 0 : -aDr;
		aBD(eb, eb, az.b0 - 2 * eb, az.b1 - 2 * eb, i4.aDy, i4.aDz, i4.aE0, i4.aE1) || (cz.fillStyle = aDt, cz.fillRect(0, 0, hG, cu))
	}, this.cy = function() {
		tT || (aBC(0, -aDr, az.b0, aDr, i4.aDy, i4.aDz, i4.aE0, i4.aE1) && cz.drawImage(aDs[0], i4.aE2, i4.aE3 - aDr), aBC(az.b0, -aDr, aDr, az.b1 + 2 * aDr, i4.aDy, i4.aDz, i4.aE0, i4.aE1) && cz.drawImage(aDs[1], i4.aE2 + az.b0, i4.aE3 - aDr),
			aBC(0, az.b1, az.b0, aDr, i4.aDy, i4.aDz, i4.aE0, i4.aE1) && cz.drawImage(aDs[2], i4.aE2, i4.aE3 + az.b1), aBC(-aDr, -aDr, aDr, az.b1 + 2 * aDr, i4.aDy, i4.aDz, i4.aE0, i4.aE1) && cz.drawImage(aDs[3], i4.aE2 - aDr, i4.aE3 - aDr))
	}
}

function sr() {
	this.jP = new aE4, this.a65 = new aE5, this.nO = new aE6, this.gG = new aE7, this.eF = new aE8, this.aDx = new aE9, this.aEA = new aEB, this.f9 = new aEC, this.kN = new aED, this.b = function() {
		this.nO.b(), this.gG.b(), this.eF.b(), this.aDx.b()
	}
}

function aEC() {
	function aEJ(player, ed, aEL, aEM) {
		for (var hD, hE, cl, eu, dF, aEN, hF, hH, bU = ed + aEM, aE = ed; aE < bU; aE += aEL)
			if (hD = (hD = ey[player] - aE) < 1 ? 1 : hD, hE = f1[player] - aE, hF = (hF = ex[player] + aE) >= az.b0 - 1 ? az.b0 - 2 : hF, eu = (hH = (hH = f0[player] + aE) >= az.b1 - 1 ? az.b1 - 2 : hH) - (hE = hE < 1 ? 1 : hE), hF = (dF = bJ(ee
					.random() * (2 * (hF - hD + hH - hE)), ee.value(100))) <= (cl = hF - hD) ? (aEN = hD + dF, hE) : dF <= cl + eu ? (aEN = hF, hE + dF - cl) : dF <= 2 * cl + eu ? (aEN = hD + dF - cl - eu, hH) : (aEN = hD, hE + dF - 2 * cl - eu),
				aEK(player, hH = bW.my(aEN, hF))) return hH;
		return -1
	}

	function aEK(qa, bd) {
		return bW.bX(bd) && (bW.bh(bd) || qa !== (bd = bW.bg(bd)) && eh(qa, bd) && 0 < bo[bd].length)
	}
	this.fA = function(player) {
		return !(0 === bo[player].length || bO[player] < 100) && eE.gG.kJ !== eE.gG.kK && (eE.gG.kL[player] !== eE.gG.kM && cK.cL.kE(player, 203, 32, 16) ? !! function(player) {
			var bd = function(player) {
				var aE, n2, n1, hD = ey[player],
					hE = f1[player],
					dm = ex[player] - hD + 1,
					dq = f0[player] - hE + 1,
					aR = ee.value(100);
				for (aE = 0; aE < 32; aE++)
					if (n2 = hD + cA.cB(ee.random() * dm, aR), n1 = hE + cA.cB(ee.random() * dq, aR), n2 = bW.my(n2, n1), aEK(player, n2)) return n2;
				return -1
			}(player);
			if (0 <= bd) return eE.kN.kO(player, bd >> 2);
			if (0 <= (bd = aEJ(player, 1, 4, 40))) return eE.kN.kO(player, bd >> 2);
			if (0 <= (bd = aEJ(player, 40, 8, 200))) return eE.kN.kO(player, bd >> 2);
			return
		}(player) && !! function(qa) {
			if (0 === eK.aa[2]) return void console.log("error 325234");
			var aEH = eK.aa[1] + k9.dH[eK.aa[2] - 1] << 2;
			if (bW.bh(aEH)) return 1;
			return aEH = bW.bg(aEH), qa !== aEH && !!eh(qa, aEH)
		}(player) && function(player) {
			return cK.cL.kG(player), eE.gG.kP(player), !0
		}(player) : void 0)
	}
}

function aE4() {
	function aEQ(aEP) {
		var aEa = 4 + .03 * (1 + 1.5 * a0) * cb / e2;
		return k9.dt(aEP, eK.aa[1]) < aEa
	}
	this.jQ = function(player, aEP) {
		return !!k9.e8(aEP) && eE.gG.kJ !== eE.gG.kK && eE.gG.kL[player] !== eE.gG.kM && 0 !== bo[player].length && !!eE.kN.kO(player, aEP) && !!aEQ(aEP)
	}, this.jU = function(player, jT, aEP) {
		return !!(k9.e8(aEP) && this.kQ(player, jT) && eE.kN.kR(aEP) && aEQ(aEP))
	}, this.kQ = function(player, id) {
		for (var aER, qI = player << 3, qJ = qI + eE.gG.kL[player], aES = eE.gG.aES, aET = eE.gG.aET, aE = qI; aE < qJ; aE++)
			if (id === aET[aER = aES[aE]]) return eK.aa[3] = aER, !0;
		return !1
	}, this.jS = function(dW) {
		var aEU = eE.aDx.aEU;
		return eE.aDx.aEU = -1, !!this.kQ(bN, aEU) && (cR.cS.jS(aEU, dW), !0)
	}, this.tP = function(cr, cs) {
		var aE, qJ, aEV, aES, aEW, aEX, aEY, f2, um, aEZ, player = bN,
			bU = eE.gG.kL[player];
		if (0 === bU) return !1;
		for (aES = eE.gG.aES, aEX = eE.gG.aEX, um = eE.gG.um, qJ = (player = player << 3) + bU, aEW = .4 * cK.iH.kp(.5) * cb / e2, aEV = -1, aE = player; aE < qJ; aE++) aEZ = aES[aE], aEY = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(um[aEZ]))), (
			f2 = k9.di(cr, cs, aEX[aEZ])) - aEY < aEW && (aEW = f2, aEV = aEZ);
		return !(aEV < 0 || (eE.aDx.aEU = eE.gG.aET[aEV], 0))
	}, this.td = function(cr, cs) {
		var aE, aEV, aEW, aEX, aEY, f2, um, bU = eE.gG.kJ;
		if (bU < 1) return -1;
		for (aEX = eE.gG.aEX, um = eE.gG.um, aEW = 1e3, aEV = -1, aE = 0; aE < bU; aE++) aEY = 16 * cK.iH.kp(.5) * (.625 + .125 * Math.sqrt(Math.sqrt(um[aE]))), (f2 = k9.di(cr, cs, aEX[aE])) < aEW && f2 < aEY && (aEW = f2, aEV = aE);
		return aEV
	}
}

function aE5() {
	this.a66 = function(player) {
		for (var aES = eE.gG.aES, qI = player << 3, aE = qI + eE.gG.kL[player] - 1; qI <= aE; aE--) this.aEb(aES[aE])
	}, this.aEb = function(aEc) {
		var gG = eE.gG,
			aEd = gG.kJ - 1,
			aEe = gG.ul[aEc],
			aEf = gG.aEg[aEc],
			aEh = gG.aEX[aEc];
		gG.kJ = aEd, gG.ul[aEc] = gG.ul[aEd], gG.aEi[aEc] = gG.aEi[aEd], gG.aEj[aEc] = gG.aEj[aEd], gG.aEX[aEc] = gG.aEX[aEd], gG.aEk[aEc] = gG.aEk[aEd], gG.um[aEc] = gG.um[aEd], gG.aEg[aEc] = gG.aEg[aEd], gG.aET[aEc] = gG.aET[aEd], gG.aEl[aEc] =
			gG.aEl[aEd], gG.aES[gG.ul[aEc]] = aEc,
			function(a3j) {
				var player = a3j >> 3,
					gG = eE.gG,
					bU = gG.kL[player] - 1,
					aEo = (player << 3) + bU;
				gG.kL[player] = bU, aEo !== a3j && (gG.aES[a3j] = gG.aES[aEo], gG.ul[gG.aES[a3j]] = a3j)
			}(aEe), eE.eF.eF[k9.eD(gG.aEX[aEc])][gG.aEg[aEc]] = aEc, aEd = k9.eD(aEh), aEe = aEf, aEd = eE.eF.eF[aEd], gG = aEd.pop(), aEe !== aEd.length && (aEd[aEe] = gG, eE.gG.aEg[gG] = aEe)
	}
}

function aE6() {
	var aEr, aEs = 8,
		aEt = new Array(2);

	function aEu(cd) {
		var d5 = aEs + 4,
			t9 = cK.iH.m8(d5, d5),
			dD = cK.iH.getContext(t9, !0),
			d9 = cK.iH.getImageData(dD, d5, d5),
			mK = d9.data;
		return aEv(mK, d5 + 1, cd), aEv(mK, d5 + 2, cd), aEv(mK, 2 * d5 + 1, cd), aEv(mK, 2 * d5 - 3, cd), aEv(mK, 2 * d5 - 2, cd), aEv(mK, 3 * d5 - 2, cd), aEv(mK, d5 * (d5 - 3) + 1, cd), aEv(mK, d5 * (d5 - 2) + 1, cd), aEv(mK, d5 * (d5 - 2) + 2,
			cd), aEv(mK, d5 * (d5 - 2) - 2, cd), aEv(mK, d5 * (d5 - 1) - 3, cd), aEv(mK, d5 * (d5 - 1) - 2, cd), dD.putImageData(d9, 0, 0), t9
	}

	function aEv(mK, dW, cd) {
		dW *= 4;
		mK[dW] = 255, mK[1 + dW] = 255, mK[2 + dW] = cd, mK[3 + dW] = 255
	}

	function m8(player) {
		var aEw = aEs >> 1,
			t9 = cK.iH.m8(aEs, aEs);
		return function(dD, player, h8, h9) {
			var dm, dW, aEy, a3k, d5 = aEs,
				d9 = cK.iH.getImageData(dD, d5, d5),
				mK = d9.data,
				m2 = (d5 >> 1) - .5,
				aDt = bW.a5W(player),
				aF0 = cK.mI.qB(aDt, .5);
			cK.mI.qC(aDt, aF0, 300) || cK.mI.qE(aDt, 100);
			for (h9 = 0; h9 < d5; h9++)
				for (h8 = 0; h8 < d5; h8++) a3k = (d5 - 1.5) * (d5 - 1.5) / 4, aEy = (dm = (dm = h8 - m2) * dm + (dm = h9 - m2) * dm) <= (d5 - 4.5) * (d5 - 4.5) / 4 ? aF0 : aDt, mK[dW = 4 * (h9 * d5 + h8)] = aEy[0], mK[1 + dW] = aEy[1], mK[2 +
					dW] = aEy[2], mK[3 + dW] = a3k < dm ? 0 : 255;
			dD.putImageData(d9, 0, 0)
		}(cK.iH.getContext(t9, !0), player, aEw, aEw), t9
	}
	this.b = function() {
		aEr = new Array(bZ), aEt[0] = aEu(255), aEt[1] = aEu(0)
	}, this.cy = function() {
		var aE, player, aF1, eV, aF2, dl, aF5, aF7, aF8, aEX = eE.gG.aEX,
			ul = eE.gG.ul,
			um = eE.gG.um,
			aF9 = aEr,
			aFA = bN,
			aFB = -1,
			bU = eE.gG.kJ,
			aFC = hG,
			aFD = cu,
			aFE = az.b0 << 4,
			qw = e2,
			df = qw / aEs,
			hD = e1 / qw,
			hE = e3 / qw,
			dm = (aFC + e1) / qw - hD,
			dq = (aFD + e3) / qw - hE,
			dD = cz;
		for (eE.jP.kQ(bN, eE.aDx.aEU) && (aFB = eK.aa[3]), dD.fillStyle = d2.d3, aE = 0; aE < bU; aE++) player = ul[aE] >> 3, eV = um[aE], aF1 = .625 + .125 * Math.sqrt(Math.sqrt(eV)), aF2 = (dl = aEX[aE]) % aFE / 16 - aF1, dl = aFD * (Math
			.floor(dl / aFE) / 16 - aF1 - hE) / dq, aF5 = -2 * (aF8 = qw * aF1) * (1 + (aF7 = +(player === aFA)) / 8), aF7 = aF7 * aF8 / 4, (aF8 = aFC * (aF2 - hD) / dm) < aF5 || dl < aF5 || aFC + aF7 < aF8 || aFD + aF7 < dl || (aF2 = aF1 *
			qw, dD.imageSmoothingEnabled = (aF5 = 2 * aF1 * df) < 3, void 0 === (aF7 = aF9[player]) && (aF9[player] = aF7 = m8(player)), player === aFA && (dD.setTransform(aF5, 0, 0, aF5, aF8 - 2 * aF5, dl - 2 * aF5), dD.drawImage(aEt[+(
				aE === aFB)], 0, 0)), dD.setTransform(aF5, 0, 0, aF5, aF8, dl), dD.drawImage(aF7, 0, 0), (aF1 = Math.floor(function(eV) {
				if (eV < 1e3) return .42;
				if (eV < 1e4) return .34;
				if (eV < 1e6) return .26;
				if (eV < 1e8) return .19;
				return .15
			}(eV) * aF2)) < 6) || (dD.setTransform(1, 0, 0, 1, 0, 0), 20 <= aF1 ? (dD.font = cK.iH.lW(.85 * aF1, 1), dD.fillText(cK.hP.hQ(eV), aF8 + aF2, dl + .93 * aF2 + .085 * aF1), (aF1 *= g3.a7y(player)) < 6 || (dD.font = cK.iH.lW(aF1,
			1), dD.fillText(hR[player], aF8 + aF2, dl + 1.16 * aF2 + .1 * aF1))) : (dD.font = cK.iH.lW(aF1, 1), dD.fillText(cK.hP.hQ(eV), aF8 + aF2, dl + aF2 + .1 * aF1)));
		dD.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aEB() {
	this.fA = function() {
		for (var aFG, aEA, aEl = eE.gG.aEl, aEX = eE.gG.aEX, aEj = eE.gG.aEj, aE = eE.gG.kJ - 1; 0 <= aE; aE--) aFG = aEX[aE], 0 !== (aEA = aEl[aE]) && aFG === aEj[aE] && (! function(aE, aFI, cW) {
			var eU, player = eE.gG.ul[aE] >> 3,
				cW = aFI + k9.dH[cW] << 2,
				aE = eE.gG.um[aE];
			if (bW.bh(cW)) eU = bZ;
			else {
				if ((eU = bW.bg(cW)) === player) return cK.cL.jk(player, aE);
				if (!eh(player, eU)) return cR.fV.ji(player, eU, aE)
			}
			player === bN && (bR.bS[13] += aE);
			bV[player].push(aFI << 2), b5.eR(player, aE, eU), bL.eS(player, !0)
		}(aE, k9.eC(aFG), aEA - 1), eE.a65.aEb(aE))
	}
}

function aE7() {
	this.aFJ = null, this.kK = 512, this.kM = 8, this.kJ = 0, this.gv = 0, this.ul = new Uint16Array(this.kK), this.aEi = new Uint32Array(this.kK), this.aEj = new Uint32Array(this.kK), this.aEX = new Uint32Array(this.kK), this.aEk = new Uint16Array(
			this.kK), this.um = new Uint32Array(this.kK), this.aEg = new Uint16Array(this.kK), this.aET = new Uint16Array(this.kK), this.aEl = new Uint8Array(this.kK), this.kL = new Uint8Array(bZ), this.aES = new Uint16Array(this.kM * bZ), this.b =
		function() {
			this.gv = 0, this.kJ = 0, this.aFJ = new Uint8Array(az.b0 + az.b1), this.kL.fill(0)
		}, this.kP = function(player) {
			var bU = this.kJ,
				aFK = k9.eB(eK.aa[0]),
				aDT = this.kL[player],
				aFL = (player << 3) + aDT;
			dw[player] = 2, this.ul[bU] = aFL, this.aEi[bU] = aFK, this.aEX[bU] = aFK, this.aEj[bU] = k9.eB(eK.aa[1]), this.aEk[bU] = 0, this.um[bU] = eK.aX[0], this.aEg[bU] = eE.eF.kP(bU, k9.eD(aFK)), this.aET[bU] = this.gv, this.aEl[bU] = eK.aa[2],
				this.gv = this.gv + 1 & 1023, this.aES[aFL] = bU, this.kL[player] = aDT + 1, this.kJ++
		}, this.jS = function() {
			var aER = eK.aa[3];
			this.aEi[aER] = this.aEX[aER], this.aEj[aER] = k9.eB(eK.aa[1]), this.aEk[aER] = 0, this.aEl[aER] = eK.aa[2]
		}, this.fA = function() {
			if (aL.fP() % 5 == 3) {
				eE.aEA.fA(), ! function(tj) {
					var aE, aFP, aFQ, aFR, aFS, aFK, aFW, aFX, be, bd, aEi = tj.aEi,
						aEj = tj.aEj,
						aEX = tj.aEX,
						um = tj.um,
						aEk = tj.aEk,
						aEg = tj.aEg,
						tj = tj.kJ,
						aFE = az.b0 << 4;
					for (aE = tj - 1; 0 <= aE; aE--) aFQ = aEX[aE], aFP = aEj[aE], aFQ !== aFP && (aFK = aEi[aE], aFW = aFP % aFE - (aFS = aFK % aFE), aFX = ~~((aFP + .5) / aFE) - (aFK = ~~((aFK + .5) / aFE)), be = ~~Math.sqrt(aFW * aFW + aFX *
						aFX + .5), bd = 4e5 + 2e4 * ~~Math.sqrt(.5 + (Math.sqrt(um[aE] + .5) << 4)), 65535 <= (bd = aEk[aE] + Math.max(~~((.5 + bd) / be), 1)) ? aEX[aE] = aFR = aFP : (aEk[aE] = bd, aEX[aE] = aFR = aFS + cA.cB(bd * aFW,
						65536) + aFE * (aFK + cA.cB(bd * aFX, 65536))), aEg[aE] = eE.eF.aFZ(aEg[aE], aFQ, aFR))
				}(this), ! function(tj) {
					var aE, mX, m2, em, fQ, aFa, aFb, aFc, mS, dM, hD, hE, aFd, aEW, aFe, mT, aFK, aFh, bU = tj.kJ,
						aEX = tj.aEX,
						ul = tj.ul,
						um = tj.um,
						eF = eE.eF.eF,
						aFi = eF.length,
						aFj = eE.eF.aFj,
						aFE = az.b0 << 4,
						aFk = eO,
						aFl = fR.fS,
						bd = (bU - 1) * (aL.fP() % 2);
					for (aE = 0; aE < bU; aE++) {
						for (mX = Math.abs(aE - bd), aFK = aEX[mX], m2 = k9.eD(aFK), mS = ul[mX] >> 3, hD = aFK % aFE, hE = ~~((aFK + .5) / aFE), aFK = um[mX], aFh = 80 + ~~Math.sqrt(.5 + (Math.sqrt(aFK + .5) << 8)), aEW = Math.min(aFh * aFh,
								262144), aFe = -1, em = 0; em < 9; em++)
							if (!((aFa = m2 + aFj[em]) < 0 || aFi <= aFa))
								for (aFc = eF[aFa], aFb = aFc.length, fQ = 0; fQ < aFb; fQ++) aFd = aFc[fQ], mT = ul[aFd] >> 3, mS == mT || aFk && aFl[mS] === aFl[mT] || (mT = aEX[aFd], (mT = (dM = hD - mT % aFE) * dM + (dM = hE - ~~((mT + .5) /
									aFE)) * dM) < aEW && (aFe = aFd, aEW = mT)); - 1 !== aFe && (aFK = Math.min(Math.max(1, cA.cB(aFK * (aFh - Math.floor(Math.sqrt(aEW + .5))), 5 * aFh)), um[aFe]), um[mX] -= aFK >> 4, um[aFe] -= aFK)
					}
				}(this);
				var aE, eV, um = (tj = this).um,
					tj = tj.kJ;
				for (aE = tj - 1; 0 <= aE; aE--) eV = um[aE], 0 < (eV -= Math.max(1, eV >> 7)) ? um[aE] = eV : eE.a65.aEb(aE)
			}
		}
}

function aE8() {
	this.aFm = 32, this.h8 = 0, this.h9 = 0, this.eG = 0, this.aFn = 0, this.aFo = 4, this.eF = null, this.aFj = new Int16Array(9), this.b = function() {
		this.eG = 1 + cA.cB(az.b0 - 1, this.aFm), this.aFn = 1 + cA.cB(az.b1 - 1, this.aFm), this.eF = new Array(this.eG * this.aFn), cK.mI.qA(this.eF);
		var h8, h9, aFj = this.aFj,
			cl = this.eG;
		for (h8 = -1; h8 <= 1; h8++)
			for (h9 = -1; h9 <= 1; h9++) aFj[3 * (1 + h9) + 1 + h8] = h9 * cl + h8
	}, this.kP = function(aFq, aE) {
		return this.eF[aE].push(aFq), this.eF[aE].length - 1
	}, this.aFZ = function(aFr, aFK, aFP) {
		var aFs, aFt, aFK = k9.eD(aFK),
			aFP = k9.eD(aFP);
		return aFK === aFP ? aFr : (aFs = this.eF[aFK].pop(), this.eF[aFK].length === aFr ? this.kP(aFs, aFP) : (aFt = this.eF[aFK][aFr], this.eF[aFK][aFr] = aFs, eE.gG.aEg[aFs] = aFr, this.kP(aFt, aFP)))
	}
}

function aED() {
	function a6W(aFP, aFu) {
		if (! function(aFP, aEP) {
				var dL = k9.eC(aFP),
					aFx = Math.abs(k9.dN(aEP) - k9.dN(dL)),
					dL = Math.abs(k9.dP(aEP) - k9.dP(dL));
				0 !== Math.max(aFx, dL) && ! function(aFK, aFP, aFx, aFy) {
					var aG0 = k9.dp(aFK),
						aFK = k9.ds(aFK),
						aG2 = k9.dp(aFP),
						aFP = k9.ds(aFP),
						aG2 = aG2 - aG0,
						aFP = aFP - aFK,
						aG6 = Math.abs(aG2),
						aG7 = Math.abs(aFP),
						aG2 = 0 < aG2 ? 1 : 3,
						aFP = 0 < aFP ? 2 : 0;
					aG7 < aG6 ? aGA(aG0, aFK, aG0 + aG6, aFK + aG7, aG2, aFP, aFx) : aGA(aFK, aG0, aFK + aG7, aG0 + aG6, aFP, aG2, aFy)
				}(aFP, k9.eB(aEP), aFx, dL)
			}(aFP, aFu), 0 === eK.aW[0]) return !!bW.tT(aFu << 2);
		if (function(aEP) {
				if (bW.tT(aEP << 2)) return 1;
				return function(aEP) {
					var aE, cW, aFJ = eE.gG.aFJ,
						aGE = k9,
						bU = eK.aW[0],
						aGF = 4 * aEP;
					for (aE = bU - 1; 0 <= aE; aE--)
						if (cW = aFJ[aE], aGF = aGE.eI(aGF, cW + 2 & 3), bW.tT(aGF)) return eK.aW[0] = aE, eK.aa[1] = aGF >> 2, eK.aa[2] = 1 + cW, 1;
					return
				}(aEP)
			}(aFu)) {
			var aE, aFu = k9.eC(aFP),
				mK = a0f,
				aFJ = eE.gG.aFJ,
				bU = eK.aW[0] - 1,
				aGF = 4 * aFu,
				dI = k9.dI;
			for (aE = 0; aE < bU; aE++)
				if (aGF += dI[aFJ[aE]], 0 !== mK[aGF + 3] || 2 !== mK[aGF + 2]) return !!void 0;
			return !!1
		}
		return !1
	}

	function aGA(aG0, aG1, aG2, aG3, aG8, aG9, aFx) {
		for (var h9, aFJ = eE.gG.aFJ, bd = 0, aGB = 0, eu = aG3 - aG1, cl = aG2 - aG0, aGC = aG0 % 16, aE = 1; aE <= aFx; aE++) aFJ[bd++] = aG8, aFJ[bd] = aG9, bd += (h9 = (eu * (aGC + (aE << 4)) + .5) / cl >> 4) - aGB, aGB = h9;
		eK.ac(eK.aW, bd)
	}
	this.kO = function(player, aFu) {
		var cW, dL, dK = k9.dV(player, aFu);
		return dK !== aFu && (cW = k9.dJ(dK, aFu), dL = k9.eH(dK, cW), !(!bW.tT(dL << 2) && (cW = k9.dT(dK, aFu, cW), dL = k9.eH(dK, cW), bW.mU(dL << 2) || !bW.tT(dL << 2)) || (eK.aa[0] = dL, eK.aa[1] = aFu, eK.aa[2] = 0, !a6W(k9.eB(dL), aFu)) ||
			0 !== eK.aa[2] && k9.de(player, eK.aa[1] + k9.dH[eK.aa[2] - 1] << 2)))
	}, this.kR = function(aFu) {
		var aFK = eE.gG.aEX[eK.aa[3]];
		return eK.aa[1] = aFu, eK.aa[2] = 0, a6W(aFK, aFu)
	}
}

function aE9() {
	var aEs = 32,
		aGH = new Array(2);

	function m8(fQ) {
		var h8, h9, dW, dq, dm, d5 = aEs,
			t9 = cK.iH.m8(d5, d5),
			dD = cK.iH.getContext(t9, !0),
			d9 = cK.iH.getImageData(dD, d5, d5),
			mK = d9.data,
			m2 = (d5 >> 1) - .5,
			aGI = Math.sqrt(m2 * m2);
		for (mK.fill(255), h9 = 0; h9 < d5; h9++)
			for (h8 = 0; h8 < d5; h8++) dm = h8 - m2, dq = h9 - m2, dW = 4 * (h9 * d5 + h8), dm = 714 * (aGI - Math.sqrt(dm * dm + dq * dq)) / aGI, mK[2 + dW] = fQ, mK[3 + dW] = 255 < dm ? 0 : dm;
		return dD.putImageData(d9, 0, 0), t9
	}
	this.aEU = -1, this.b = function() {
		this.aEU = -1, aGH[0] || (aGH[0] = m8(255), aGH[1] = m8(0))
	}, this.aGJ = function(dD, df, h8, h9, dF, aE) {
		k9.dy() && (dD.setTransform(df *= 4 / 3 * .625, 0, 0, df, h8 - (dF *= 4 / 3), h9 - dF), dD.drawImage(aGH[+(eE.gG.aET[aE] === this.aEU)], 0, 0))
	}
}

function a8x() {
	var a2N, a8s, ou;

	function aGN() {}

	function a8y() {
		g6.a8y(a2N, a8s)
	}

	function aGP(lk) {
		rf.aBv(a2N, new Uint8Array(lk.data))
	}

	function aGQ() {}

	function a93(lk) {
		g6.a93(a2N, lk)
	}
	this.b = function(cd, aGK) {
		a2N = cd, a8s = aGK, 0;
		cd = w6[0];
		a2N < g6.a3A ? cd += g6.a8l[a2N] + w6[1 + a9C] : cd += g6.a8l[0] + "/i" + (1 + a9C) + (a2N - g6.a3B) + "/", (ou = new WebSocket(cd)).binaryType = "arraybuffer", ou.onopen = a8y, ou.onmessage = aGP, ou.onclose = a93, ou.onerror = aGQ
	}, this.aGM = function() {
		return ou.readyState === ou.CONNECTING
	}, this.a2F = function() {
		return ou.readyState === ou.OPEN
	}, this.a8u = function() {
		return this.aGM() || this.a2F()
	}, this.a8v = function(aGK) {
		a8s = aGK
	}, this.send = function(k4) {
		this.a2F() && ou.send(k4)
	}, this.close = function(a90) {
		this.a8u() && (ou.close(a90), this.lP())
	}, this.lP = function() {
		ou.onopen = aGN, ou.onmessage = aGN, ou.onclose = aGN, ou.onerror = aGN
	}
}

function xC() {
	if (fT < 3) return !1;
	if (cA.cB(3 * bv[gm[2]], 2) < bv[gm[0]]) return !1;
	if (bv[gm[0]] + bv[gm[1]] + bv[gm[2]] < r6 - cA.cB(r6, 10)) return !1;
	if (8 * Math.min(Math.min(bO[gm[0]], bO[gm[1]]), bO[gm[2]]) < 5 * Math.max(Math.max(bO[gm[0]], bO[gm[1]]), bO[gm[2]])) return !1;
	if (eO) {
		if (fR.fS[gm[0]] === fR.fS[gm[1]]) return !1;
		if (fR.fS[gm[0]] === fR.fS[gm[2]]) return !1;
		if (fR.fS[gm[1]] === fR.fS[gm[2]]) return !1
	}
	return !0
}

function a9K() {
	this.d6 = 501, this.om = new Uint32Array(this.d6), this.qd = new Uint32Array(this.d6), this.a0J = new Uint16Array(this.d6), this.u2 = 0, this.aGT = 1, this.fQ = 0, this.max = [0, 0, 0], this.bS = 0, this.aGU = ["Avg. Attack Strength",
		"Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs",
		"Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses"
	], this.b = function() {
		this.u2 = 0, this.aGT = 1, this.fQ = 0, this.aGV(), this.aGW()
	}, this.kH = function(player, e0) {
		player === bN && (this.bS[0] += e0, this.bS[1]++, this.bS[12] += eK.aX[1], this.bS[13] += eK.aX[0])
	}, this.jl = function(player, jL) {
		donationsTracker.logDonation(player, jL, eK.aX[0]);
		player === bN && (g2.jl(eK.aX[0], eK.aX[1], jL), this.bS[12] += eK.aX[1], this.bS[16] += eK.aX[0]), jL === bN && (g2.v2(eK.aX[0], player), this.bS[10] += eK.aX[0])
	}, this.fA = function() {
		0 < this.fQ-- || this.aGX()
	}, this.aGX = function() {
		0 !== dw[bN] && (this.om[this.u2] = bv[bN], this.qd[this.u2] = bO[bN], this.a0J[this.u2] = bP.a0K(bN), this.aGY(this.u2), this.u2++, this.u2 === this.d6 && this.aGZ(), this.fQ = this.aGT - 1, nR.cg())
	}, this.aGZ = function() {
		this.aGV(), this.aGY(0), this.u2 = 1 + bJ(this.d6, 2);
		for (var aE = 1; aE < this.u2; aE++) this.om[aE] = this.om[2 * aE], this.qd[aE] = this.qd[2 * aE], this.a0J[aE] = this.a0J[2 * aE], this.aGY(aE);
		this.aGT *= 2
	}, this.aGV = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.aGW = function() {
		this.bS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.aGY = function(aE) {
		this.max[0] = this.om[aE] > this.max[0] ? this.om[aE] : this.max[0], this.max[1] = this.qd[aE] > this.max[1] ? this.qd[aE] : this.max[1], this.max[2] = this.a0J[aE] > this.max[2] ? this.a0J[aE] : this.max[2]
	}
}

function a9L() {
	this.cl = 0, this.eu = 0, this.nY = 0, this.nZ = 0, this.a1F = 0, this.a1G = 0, this.vH = 0, this.vI = 0, this.a49 = 0, this.lO = 0, this.aGa = 0, this.aGb = 0, this.wl = 0, this.cd = 0, this.tm = ["Territory", "Balance", "Interest", "Numbers"],
		this.pb = !1, this.aGc = -1, this.aGd = !1, this.aGe = [0, 0], this.b = function() {
			this.pb = !1, this.aGc = -1, this.aGd = !1, this.resize()
		}, this.resize = function() {
			this.cl = a1 < 1.369 * a2 ? a1 : 1.369 * a2;
			var be = a0 && a1 < a2 ? 1 : a0 ? .8 : a1 < a2 ? .65 : .59;
			this.cl = Math.floor(be * this.cl), this.cl -= a0 && a1 < a2 ? 2 * kq + 2 : 0, this.eu = Math.floor(this.cl / 1.369), this.wl = Math.floor(this.eu / 150), this.wl = Math.max(this.wl, 1.5), this.nY = Math.floor(1 + .02 * this.cl), this
				.nZ = Math.floor(1 + .04 * this.cl), this.vH = this.nZ, this.vI = Math.floor(1 + .075 * this.cl), this.lO = Math.floor(1 + .1125 * this.cl), this.aGa = Math.floor(this.cl * (a0 ? .03 : .029)), this.aGa = Math.max(this.aGa, 4), this
				.aGb = Math.floor(.035 * this.cl), this.aGb = Math.max(this.aGb, 4), this.a49 = this.eu - 2 * this.vH - this.vI - this.lO, this.pb && this.aGf()
		}, this.cq = function(cr, cs) {
			var mq, mp;
			return !!this.pb && (mp = cr, mq = cs, cr -= bJ(hG - this.cl, 2), cs -= bJ(cu - this.eu, 2), cr < 0 || cs < 0 || cr >= this.cl || cs >= this.eu || cr >= this.cl - this.lO && cs < this.lO ? 1 < cI.cq(mp, mq) || this.lP() : cs < this.lO ||
				(cs < this.eu - this.vI ? (this.aGd = !0, this.aGc = (cr - 2 * this.nY - this.a1F) / this.a1G, 3 !== this.cd && (aL.co = !0)) : (mp = (mp = Math.floor(cr / (this.cl / this.tm.length))) < 0 ? 0 : mp >= this.tm.length ? this.tm
					.length - 1 : mp) !== this.cd && (this.cd = mp, this.aGf(), aL.co = !0)), !0)
		}, this.py = function() {
			var aGg = Math.floor((this.aGe[0] + e1) / e2),
				aGh = Math.floor((this.aGe[1] + e3) / e2);
			aGg < 1 || aGh < 1 || aGg >= az.b0 - 1 || aGh >= az.b1 - 1 || console.log(aGg + " " + aGh)
		}, this.p8 = function(cr, cs) {
			return this.aGe[0] = cr, this.aGe[1] = cs, !(!this.pb || !this.aGd || (cr -= bJ(hG - this.cl, 2), cs = this.aGc, this.aGc = (cr - 2 * this.nY - this.a1F) / this.a1G, (0 <= this.aGc && this.aGc <= 1 || 0 <= cs && cs <= 1) && (aL.co = !0),
				0))
		}, this.pf = function() {
			this.aGd && (this.aGd = !1)
		}, this.pu = function() {
			this.pb ? this.lP() : this.show()
		}, this.show = function() {
			bR.u2 < 2 || (this.pb = !0, this.aGf())
		}, this.lP = function() {
			this.pb = !1, this.aGc = -1, aL.co = !0
		}, this.aGf = function() {
			this.cd < 2 ? this.a1F = cm.measureText(cK.hP.hQ(bR.max[this.cd]), this.aGa + cf) : 2 === this.cd && (this.a1F = cm.measureText(cK.hP.qs(6, 2), this.aGa + cf)), this.a1G = this.cl - 2 * this.nY - this.a1F - this.nZ
		}, this.cg = function() {
			this.pb && this.aGf()
		}, this.cy = function() {
			this.pb && this.vM()
		}, this.vM = function() {
			var h8 = bJ(hG - this.cl, 2),
				h9 = bJ(cu - this.eu, 2);
			cz.setTransform(1, 0, 0, 1, h8, h9), cz.fillStyle = d2.iN, cz.fillRect(0, this.lO, this.cl, this.eu - this.lO), this.aGi(), this.aGj(), cz.strokeRect(0, 0, this.cl, this.eu), cz.textAlign = w1, cz.font = this.aGa + cf, 0 === this.cd ?
				this.aGk(bR.om, h8, h9) : 1 === this.cd ? this.aGk(bR.qd, h8, h9) : 2 === this.cd ? this.aGl(h8, h9) : 3 === this.cd && (this.aGm(h8, h9), this.aGn(h8, h9)), cI.u4(Math.floor(h8 + this.cl - .725 * this.lO), Math.floor(h9 + .275 * this
					.lO), Math.floor(.45 * this.lO)), cz.setTransform(1, 0, 0, 1, 0, 0)
		}, this.aGi = function() {
			var aE, a3;
			for (cz.lineWidth = this.wl, cz.textBaseline = d0, cz.textAlign = d1, cz.strokeStyle = d2.d3, cz.font = ce + this.aGb + cf, a3 = this.cl / this.tm.length, cz.fillStyle = d2.ie, cz.fillRect(this.cd * a3, this.eu - this.vI, a3, this.vI), cz
				.fillStyle = d2.d3, cz.fillRect(0, this.eu - this.vI - .5 * this.wl, this.cl, this.wl), aE = 1; aE <= 3; aE++) cz.fillRect(aE * a3, this.eu - this.vI, this.wl, this.vI);
			for (aE = this.tm.length - 1; 0 <= aE; aE--) cz.fillText(this.tm[aE], (aE + .5) * a3, this.eu - .46 * this.vI)
		}, this.aGj = function() {
			cz.fillStyle = d2.iv, cz.fillRect(0, 0, this.cl, this.lO), cz.fillStyle = d2.d3, cz.fillRect(0, this.lO - .5 * this.wl, this.cl, this.wl), cz.font = ce + Math.floor(.39 * this.lO) + cf, cz.fillText("Statistics", Math.floor(this.cl / 2),
				Math.floor(.55 * this.lO))
		}, this.aGk = function(ad, h8, h9) {
			var m2 = bR.max[this.cd],
				cZ = (cz.setTransform(1, 0, 0, 1, h8 + 2 * this.nY + this.a1F, h9 + this.vH + this.lO), cz.lineWidth = 2, this.a49 / Math.sqrt(m2));
			cz.beginPath(), cz.moveTo(this.a1G, this.a49 - cZ * Math.sqrt(ad[bR.u2 - 1]));
			for (var aE = bR.u2 - 2; 0 <= aE; aE--) cz.lineTo(aE * this.a1G / (bR.u2 - 1), this.a49 - cZ * Math.sqrt(ad[aE]));
			cz.stroke();
			h8 = this.u4(ad, cZ, .5);
			h8 < .95 && cz.fillText(cK.hP.hQ(m2), -this.nY, 0), .05 < Math.abs(h8 - .5) && cz.fillText(cK.hP.hQ(Math.floor(m2 / 4)), -this.nY, Math.floor(this.a49 / 2)), .05 < h8 && cz.fillText("0", -this.nY, this.a49)
		}, this.aGl = function(h8, h9) {
			cz.setTransform(1, 0, 0, 1, h8 + 2 * this.nY + this.a1F, h9 + this.vH + this.lO), cz.lineWidth = 2;
			var cZ = this.a49 / Math.max(bR.max[this.cd], 1);
			cz.beginPath(), cz.moveTo(this.a1G, this.a49 - cZ * bR.a0J[bR.u2 - 1]);
			for (var aE = bR.u2 - 2; 0 <= aE; aE--) cz.lineTo(aE * this.a1G / (bR.u2 - 1), this.a49 - cZ * bR.a0J[aE]);
			cz.stroke();
			h8 = this.u4(bR.a0J, cZ, 1), h9 = bR.max[this.cd] / 100;
			h8 < .95 && cz.fillText(cK.hP.qs(h9, 2), -this.nY, 0), .05 < Math.abs(h8 - .5) && cz.fillText(cK.hP.qs(h9 / 2, 2), -this.nY, Math.floor(this.a49 / 2)), .05 < h8 && cz.fillText(cK.hP.qs(0, 2), -this.nY, this.a49)
		}, this.aGm = function(h8, h9) {
			cz.setTransform(1, 0, 0, 1, h8 + .34 * this.cl, h9 + 2 * this.vH + this.lO), cz.textAlign = w1;
			for (var zj = this.eu - 4 * this.vH - this.vI - this.lO, aE = 7; 0 <= aE; aE--) cz.fillText(bR.aGU[aE], 0, aE * zj / 7);
			cz.setTransform(1, 0, 0, 1, h8 + .39 * this.cl, h9 + 2 * this.vH + this.lO), cz.textAlign = ub;
			h8 = bR.bS[1];
			for (cz.fillText(cK.hP.qs(bR.bS[0] / (10 * (h8 < 1 ? 1 : h8)), 1), 0, 0), aE = 6; 1 <= aE; aE--) cz.fillText(bR.bS[aE].toString(), 0, aE * zj / 7);
			cz.fillText(cK.hP.qs(100 * (1 - bv[bN] / bR.bS[7]), 0), 0, zj)
		}, this.aGn = function(h8, h9) {
			cz.setTransform(1, 0, 0, 1, h8 + .79 * this.cl, h9 + 2 * this.vH + this.lO), cz.textAlign = w1;
			var aE, zj = this.eu - 4 * this.vH - this.vI - this.lO;
			for (cz.fillStyle = d2.iZ, aE = 2; 0 <= aE; aE--) cz.fillText(bR.aGU[aE + 8], 0, aE * zj / 9);
			for (cz.fillStyle = d2.iY, cz.fillText(bR.aGU[11], 0, 3 * zj / 9), cz.fillStyle = d2.io, aE = 8; 4 <= aE; aE--) cz.fillText(bR.aGU[aE + 8], 0, aE * zj / 9);
			cz.fillStyle = d2.im, cz.fillText(bR.aGU[17], 0, 9 * zj / 9), cz.fillStyle = d2.iZ;
			var uj = cK.hP.hQ(bR.bS[8] + bR.bS[9] + bR.bS[10] + bR.bS[11]),
				aGo = cz.measureText(uj).width,
				h8 = (cz.setTransform(1, 0, 0, 1, h8 + .83 * this.cl + aGo, h9 + 2 * this.vH + this.lO), cz.fillText(cK.hP.hQ(bR.bS[8]), 0, 0), cz.fillText(cK.hP.hQ(bR.bS[9]), 0, zj / 9), cz.fillText(cK.hP.hQ(bR.bS[10]), 0, 2 * zj / 9), cz
					.fillStyle = d2.iY, cz.fillText(uj, 0, 3 * zj / 9), cz.fillStyle = d2.io, bR.bS[13] - b5.a73(bN)),
				aGo = (cz.fillText(cK.hP.hQ(bR.bS[12]), 0, 4 * zj / 9), cz.fillText(cK.hP.hQ(h8), 0, 5 * zj / 9), cz.fillText(cK.hP.hQ(bR.bS[14]), 0, 6 * zj / 9), cz.fillText(cK.hP.hQ(bR.bS[15]), 0, 7 * zj / 9), cz.fillText(cK.hP.hQ(bR.bS[16]), 0,
					8 * zj / 9), bR.bS[12] + h8 + bR.bS[14] + bR.bS[15] + bR.bS[16] + bR.bS[17]);
			cz.fillStyle = d2.im, cz.fillText(cK.hP.hQ(aGo), 0, zj), cz.fillStyle = d2.d3
		}, this.u4 = function(ad, cZ, yR) {
			var aE, lk, ae;
			return this.aGc < 0 || 1 < this.aGc ? .25 : (aE = this.aGc * (bR.u2 - 1), ae = ad[lk = Math.floor(aE)], ae += (aE - lk) * (ad[lk < bR.u2 - 1 ? lk + 1 : lk] - ae), cz.strokeStyle = d2.iS, .04 < this.aGc && this.aGr(0, this.a49 - cZ * Math
					.pow(ae, yR), aE * this.a1G / (bR.u2 - 1), this.a49 - cZ * Math.pow(ae, yR)), .04 < ae / bR.max[this.cd] && this.aGr(aE * this.a1G / (bR.u2 - 1), this.a49, aE * this.a1G / (bR.u2 - 1), this.a49 - cZ * Math.pow(ae, yR)), cz
				.fillStyle = d2.iq, cz.beginPath(), cz.arc(aE * this.a1G / (bR.u2 - 1), this.a49 - cZ * Math.pow(ae, yR), Math.max(2, .014 * this.eu), 0, 2 * Math.PI), cz.fill(), ad = this.aGc * aL.a0L, ad = 0 === dw[bN] ? Math.floor(ad * gU
				.a0S) : Math.floor(ad * aL.fP()), cz.fillStyle = d2.d3, cz.fillText(1 === yR ? cK.hP.qs(ae / 100, 2) : cK.hP.hQ(Math.floor(ae)), -this.nY, this.a49 - cZ * Math.pow(ae, yR)), cz.textAlign = d1, cz.fillText(g4.z3(ad), aE * this
					.a1G / (bR.u2 - 1), this.a49 + this.aGa - (a0 ? 2 : 0) - this.wl), cz.textAlign = w1, cZ * Math.pow(ae, yR) / this.a49)
		}, this.aGr = function(hD, hE, hF, hH) {
			cz.beginPath(), cz.moveTo(hD, hE), cz.lineTo(hF, hH), cz.stroke()
		}
}

function rs() {
	this.aGs = "https://", this.aGt = this.aGs + "territorial.io/", this.aBk = this.aGt + "changelog", this.aBl = this.aGt + "terms", this.vL = this.aGt + "cookie_policy", this.a9G = this.aGt + "privacy_policy", this.aBh = this.aGt + "tutorial", this
		.aBi = this.aGt + "players", this.aBj = this.aGt + "clans", this.a1X = this.aGs + "play.google.com/store/apps/details?id=territorial.io", this.a1Y = this.aGs + "apps.apple.com/app/id1581110913", this.a1Z = this.aGs +
		"www.youtube.com/watch?v=toZTQ8aRdFc", this.a1a = this.aGs + "discord.gg/pthqvpTXmh", this.a1b = this.aGs + "www.instagram.com/davidtschacher/"
}

function ss() {
	this.gG = new aGu, this.nO = new aGv, this.b = function() {
		this.gG.b()
	}, this.fA = function() {
		0 !== this.gG.vO && this.gG.vO--
	}
}

function aGv() {
	this.cy = function() {
		if (0 !== gK.gG.vO && (cz.globalAlpha = Math.min(gK.gG.vO / 580, 1), cz.drawImage(gK.gG.aGy, 1 + hr.hI(), 1 + hr.cx()), cz.globalAlpha = 1, hn)) {
			var aE, hD = e1 / e2,
				hE = e3 / e2,
				hF = (hG + e1) / e2,
				hH = (cu + e3) / e2,
				bd = gK.gG.aGz * e2,
				aH0 = gK.gG.aH0;
			for (aE = dv - 1; 0 <= aE; aE--) ! function(aE, bd, hD, hE, hF, hH, aH0) {
				0 === dw[aE] || 0 === bv[aE] || (hF = hG * ((ey[aE] + ex[aE] + 1) / 2 - hD) / (hF - hD) - .5 * bd, hD = cu * ((f1[aE] + f0[aE] + 1) / 2 - hE) / (hH - hE) - .5 * bd, hG < hF) || cu < hD || hF < -bd || hD < -bd || (cz
					.setTransform(e2, 0, 0, e2, hF, hD), cz.drawImage(aH0[eO ? fR.fS[aE] : 1], 0, 0))
			}(aE, bd, hD, hE, hF, hH, aH0);
			cz.setTransform(e2, 0, 0, e2, 0, 0)
		}
	}
}

function aGu() {
	this.aGz = 28, this.vO = 0, this.aGy = null;
	var aH2 = this.aH0 = null;

	function aH5(d5, aH7) {
		var h8, h9, dW, dm, t9 = cK.iH.m8(d5, d5),
			dD = cK.iH.getContext(t9, !0),
			d9 = cK.iH.getImageData(dD, d5, d5),
			mK = d9.data,
			m2 = (d5 >> 1) - .5,
			aH8 = .5 + m2;
		for (aH8 *= aH8, h9 = 0; h9 < d5; h9++)
			for (h8 = 0; h8 < d5; h8++) dm = (dm = h8 - m2) * dm + (dm = h9 - m2) * dm, mK[dW = 4 * (h9 * d5 + h8)] = aH7[0], mK[1 + dW] = aH7[1], mK[2 + dW] = aH7[2], mK[3 + dW] = (aH8 - dm) * aH7[3] / aH8;
		return dD.putImageData(d9, 0, 0), t9
	}

	function aGJ(aE, dD, t9, d5) {
		var h8;
		0 !== dw[aE] && 0 !== bv[aE] && (h8 = ey[aE] + ex[aE] + 1 - d5 - 2 >> 1, d5 = f1[aE] + f0[aE] + 1 - d5 - 2 >> 1, dD.drawImage(t9[eO ? fR.fS[aE] : aE < dv ? 1 : 0], h8, d5))
	}
	this.b = function() {
		var tj;
		this.vO = 700,
			function(tj) {
				var aE, d5 = tj.aGz;
				if (tj.aH0 = [], aH2 = [], eO)
					for (aE = 0; aE <= r9; aE++) tj.aH0.push(aH5(d5, fR.aH6[fR.ob[aE]])), aH2.push(aH5(d5 >> 1, fR.aH6[fR.ob[aE]]));
				else tj.aH0.push(aH5(d5, fR.aH6[0])), tj.aH0.push(aH5(d5, fR.aH6[4])), aH2.push(aH5(d5 >> 1, fR.aH6[0]))
			}(this),
			function(tj, aH9) {
				var aE, aGy = tj.aGy,
					dD = cK.iH.getContext(aGy, !0),
					bU = bZ,
					d5 = tj.aGz >> 1;
				dD.imageSmoothingEnabled = !1, dD.setTransform(1, 0, 0, 1, 0, 0), aH9 && dD.clearRect(0, 0, aGy.width, aGy.height);
				for (aE = dv; aE < bU; aE++) aGJ(aE, dD, aH2, d5)
			}(this, null !== (tj = this).aGy && tj.aGy.width === az.b0 - 2 && tj.aGy.height === az.b1 - 2 || (tj.aGy = cK.iH.m8(az.b0 - 2, az.b1 - 2), !1))
	}, this.r3 = function() {
		for (var bU = dv, d5 = this.aGz, aH0 = this.aH0, dD = cK.iH.getContext(this.aGy, !0), aE = 0; aE < bU; aE++) aGJ(aE, dD, aH0, d5)
	}
}

function st() {
	this.aHA = -1, this.b = function() {
		this.aHA = -1
	}, this.fA = function() {
		-1 !== this.aHA && g7.oA.oI(this.aHA)
	}, this.jf = function(player) {
		return !!cI.u1(player) && (1 === fT ? (this.aHA = player, fs && hn && kC.fA()) : (g2.oG(player, player === bN ? 21 : 22), 8 === fq ? this.aHA = 1 - player : fs ? (a61(player), a95(), hn && kC.fA()) : this.aHB(player)), !0)
	}, this.k8 = function(player) {
		1 === gb && 0 !== dw[player] && 2 !== dx[player] && (8 === fq ? this.aHA = 1 - player : this.aHB(player)), g2.oG(player, 4)
	}, this.aHB = function(player) {
		hn ? (a61(player), a95()) : gE.a8h(player)
	}
}

function a9N() {
	this.a3i = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.zi = [d2
		.d3, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", d2.d3, "rgb(170,170,170)"
	], this.aHC = [d2.d3, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", d2.d3, d2.hK], this.aHD = [d2.hK, d2.d3, d2.d3, d2.d3, d2.hK, d2.hK, d2.hK, d2.hK, d2.d3];
	var aHE = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aHF = (this.a8C = ["rgba(" + aHE[0] + ",", "rgba(" + aHE[1] + ",", "rgba(" + aHE[2] + ",", "rgba(" + aHE[3] + ",", "rgba(" + aHE[4] + ",", "rgba(" + aHE[5] + ",", "rgba(" + aHE[6] + ",", "rgba(" + aHE[7] + ",", "rgba(" + aHE[8] + ",",
			"rgba(" + aHE[9] + ","
		], this.a8D = ["rgb(" + aHE[0] + ")", "rgb(" + aHE[1] + ")", "rgb(" + aHE[2] + ")", "rgb(" + aHE[3] + ")", "rgb(" + aHE[4] + ")", "rgb(" + aHE[5] + ")", "rgb(" + aHE[6] + ")", "rgb(" + aHE[7] + ")", "rgb(" + aHE[8] + ")", "rgb(" + aHE[
			9] + ")"
		], this.ca = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.aH6 = [
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
	this.ob = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.fS = new Uint8Array(bZ), this.ok = null, this.ol = null, this.b = function(nc) {
		this.fS.fill(0), this.aHG(), eO && (fm.fn && fm.fo.a6l ? this.a5O() : 9 === fq ? this.aHH() : this.fA(nc))
	}, this.a5O = function() {
		var aE, bU = mr;
		for (this.ob = [0, 1, 2, 3, 4, 5, 6, 7, 8], aE = 0; aE < bU; aE++) this.fS[aE] = fm.fo.a6l[aE]
	}, this.aHG = function() {
		for (var aE = this.ob.length - 1; 0 <= aE; aE--) this.ob[aE] = aE;
		this.ok = [], this.ol = []
	}, this.aHH = function() {
		for (var aE = dv + fw.a8Y - 1; 0 <= aE; aE--) this.fS[aE] = 1;
		for (aE = dv + fw.a8Y; aE < bZ; aE++) this.fS[aE] = 2;
		this.ob[1] = 7, this.ob[2] = 8
	}, this.fA = function(nc) {
		var dQ = new Uint8Array(dv),
			dR = new Uint8Array(dv),
			aHI = new Uint16Array(8),
			aHJ = new Uint16Array(this.ob.length);
		this.aHK(nc, dQ, dR, aHI), this.a5M(aHI), fs || this.aHL(aHJ, dQ, dR), this.aHM(dQ, dR, aHJ), fs ? this.aHN() : this.aHO()
	}, this.aHK = function(nc, dQ, dR, aHP) {
		for (var em, lk, aHQ, bU = this.ob.length - 1, ad = new Uint16Array(bU), aE = dv - 1; 0 <= aE; aE--) {
			for (em = bU; 1 <= em; em--) ad[em - 1] = Math.abs(4 * nc[aE].a4N[0] - aHF[em][0]) + Math.abs(4 * nc[aE].a4N[1] - aHF[em][1]) + Math.abs(4 * nc[aE].a4N[2] - aHF[em][2]);
			for (aHQ = 768, em = bU - 1; 0 <= em; em--) ad[lk = (em + aE) % bU] < aHQ && (aHQ = ad[lk], dQ[aE] = lk);
			for (aHP[dQ[aE]] += 4, aHQ = 768, em = bU - 1; 0 <= em; em--) ad[lk = (em + aE) % bU] < aHQ && lk !== dQ[aE] && (aHQ = ad[lk], dR[aE] = lk);
			aHP[dR[aE]]++
		}
	}, this.a5M = function(aHP) {
		for (var em, t7, bU = this.ob.length - 1, aE = bU; 0 <= aE; aE--) this.ob[aE] = aE;
		for (aE = bU - 1; 0 <= aE; aE--) aHP[aE]++;
		for (aE = 1; aE <= bU; aE++) {
			for (t7 = 0, em = 1; em < bU; em++) aHP[em] > aHP[t7] && (t7 = em);
			aHP[t7] = 0, this.ob[aE] = t7 + 1
		}
	}, this.aHL = function(aHJ, dQ, dR) {
		var aE, em, aHR, fQ, be, lk, i0, qQ, aHS = this.ob.length - 1,
			aHT = new Uint16Array(aHS),
			aHU = [];
		loop: for (aE = dv - 1; 0 <= aE; aE--)
			if (null !== (aHR = cK.hP.qv(vE[aE]))) {
				for (em = this.ok.length - 1; 0 <= em; em--)
					if (aHR === this.ok[em]) {
						this.ol[em].push(aE);
						continue loop
					} this.ok.push(aHR), aHU.push(!1), this.ol.push([]), this.ol[this.ok.length - 1].push(aE)
			}
		for (em = this.ok.length - 1; 0 <= em; em--) {
			for (be = -1, fQ = this.ok.length - 1; 0 <= fQ; fQ--) !aHU[fQ] && (-1 === be || this.ol[fQ].length > this.ol[be].length) && (be = fQ);
			for (fQ = aHS - 1; 0 <= fQ; fQ--) aHT[fQ] = 1;
			for (fQ = this.ol[be].length - 1; 0 <= fQ; fQ--) aHT[dQ[this.ol[be][fQ]]] += 3, aHT[dR[this.ol[be][fQ]]]++;
			for (aE = aHS - 1; 0 <= aE; aE--) {
				for (lk = be % aHS, fQ = aHS - 1; 0 <= fQ; fQ--) aHT[fQ] > aHT[lk] && (lk = fQ);
				for (i0 = -1, fQ = r9; 0 < fQ; fQ--)
					if (this.ob[fQ] === lk + 1) {
						i0 = fQ;
						break
					} if (aHT[lk] = 0, -1 !== i0) {
					for (qQ = 0, fQ = r9; 0 < fQ; fQ--) aHJ[i0] > aHJ[fQ] && qQ++;
					if (qQ !== r9 - 1) {
						for (fQ = this.ol[be].length - 1; 0 <= fQ; fQ--) aHJ[i0]++, this.fS[this.ol[be][fQ]] = i0;
						break
					}
				}
			}
			aHU[be] = !0
		}
	}, this.aHM = function(dQ, dR, aHJ) {
		for (var aE, dl, bU = this.ob.length - 1, border = bJ(dv, r9), aHV = (0 < dv % r9 && border++, new Uint8Array(1 + bU)), em = bU; 1 <= em; em--) aHV[this.ob[em]] = em;
		for (aE = 0; aE < dv; aE++) dl = aHV[dQ[aE] + 1], 0 === this.fS[aE] && dl <= r9 && aHJ[dl] < border && (aHJ[dl]++, this.fS[aE] = dl);
		for (aE = 0; aE < dv; aE++) dl = aHV[dR[aE] + 1], 0 === this.fS[aE] && dl <= r9 && aHJ[dl] < border && (aHJ[dl]++, this.fS[aE] = dl);
		for (em = r9; 1 <= em; em--)
			for (aE = dv - 1; 0 <= aE && !(aHJ[em] >= border); aE--) 0 === this.fS[aE] && (aHJ[em]++, this.fS[aE] = em)
	}, this.aHN = function() {
		var aE, eb, aHP = new Uint16Array(r9);
		for (aHP[r9 - 1] = bZ, aE = r9 - 2; 0 <= aE; aE--) aHP[aE] = ft.fu[aE].ux;
		for (aHP[0]--, eb = 0 === aHP[0] ? 1 : 0, aE = dv; aE < bZ; aE++) this.fS[aE] = eb + 1, aHP[eb]--, aHP[eb] <= 0 && eb++
	}, this.aHO = function() {
		for (var aE = dv; aE < bZ; aE++) this.fS[aE] = 1 + aE % r9
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
	var be, bc, aHW, aHX, bU = bn[am].length;
	loop: for (var aE = bU - 1; 0 <= aE; aE--) {
		for (aHW = aHX = !1, be = 3; 0 <= be; be--) {
			if (bc = bn[am][aE] + av[be], bW.a5Y(bc, am)) continue loop;
			aHW = aHW || bW.tT(bc), aHX = aHX || bW.mU(bc)
		}
		aHW ? bo[am].push(bn[am][aE]) : aHX ? br[am].push(bn[am][aE]) : bW.nA(bn[am][aE], am), bn[am][aE] = bn[am][bU - 1], bn[am].pop(), bU--
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
			if (bc = border[aE] + av[be], bW.a5Y(bc, ap)) {
				bn[ap].push(border[aE]), border[aE] = border[bU - 1], border.pop(), bU--;
				break
			}
}

function bs() {
	for (var be, bc, aE = aq - 1; 0 <= aE; aE--)
		for (be = 3; 0 <= be; be--) bc = as[aE] + av[be], bW.a5Z(ap, bc) && bW.a5a(bc) && (bn[ap].push(bc), bW.bY(bc, ap))
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

function tV(player, eU) {
	for (var lk, aHY = b5.b6(player), aE = 0; aE < aHY; aE++)
		if (0 === b5.b7(player, aE))
			if ((lk = b5.bC(player, aE)) === bZ) {
				if (eU === bZ) return !1;
				if (tU(eU)) return !0
			} else if (eU === bZ) {
		if (tU(lk)) return !0
	} else if (tZ(eU, lk)) return !0;
	return !1
}

function tU(player) {
	for (var aE, bd, bU = bn[player].length, be = 3; 0 <= be; be--)
		for (bd = av[be], aE = 0; aE < bU; aE++)
			if (bW.bh(bn[player][aE] + bd)) return !0;
	return !1
}

function tZ(qa, qb) {
	var aE, a3, be, bd, bc, aDT = bn[qa].length,
		aFL = bn[qb].length;
	for (aFL < aDT && (a3 = qa, qa = qb, qb = a3, a3 = aDT, aDT = aFL, 0), be = 3; 0 <= be; be--)
		for (bd = av[be], aE = 0; aE < aDT; aE++)
			if (bc = bn[qa][aE] + bd, bW.bf(bc) && bW.bg(bc) === qb) return !0;
	return !1
}

function aHZ() {
	this.fA = function() {
		rZ.fA(), rb.fA(), q3.fA(), g6.fA(), gX.a3C(), cw.fA(), aL.co && (aL.co = !1, aT.cy())
	}
}

function aHa() {
	this.aM = aL.aM, this.cd = 0, this.aHb = 0, this.a39 = 0, this.aHc = null, this.aHd = 7, this.vP = 0, this.b = function() {
		this.a39 = 0, this.aHc = [], this.cd = 0, this.aHb = 0
	}, this.aCH = function(k4) {
		var aE;
		if (hn) this.a0M(k4);
		else if (this.aHc.push(k4), 2 === gb) {
			for (aE = 0; aE < this.aHc.length; aE++) cR.jC.fA(this.aHc[aE]);
			this.aHc = []
		}
	}, this.a0M = function(k4) {
		cR.jC.fA(k4), gR.fA(), g4.a0M(this.a39), this.a39 === rA ? (kC.fA(), this.a39 = 0, this.cd = 0, this.aHb = 0, this.aM = aL.aM) : (this.a39++, g3.r2(), g3.ga(!0), iE.a0d())
	}, this.fA = function() {
		q3.fA(), hn ? (aL.co = g4.a0M(-1) || aL.co, gc()) : (0 !== this.cd || aL.aM >= this.aM && (this.aM += aL.a0L * Math.floor(1 + (aL.aM - this.aM) / aL.a0L), 2 === gb ? g1() : this.aHe(), this.cd++, 27 < aL.aM - this.vP)) && this.aHf(),
		gS(), aL.co && (aL.co = !1, nL()), this.vP = aL.aM
	}, this.aHf = function() {
		aL.co = !0, gZ(), this.cd = 0
	}, this.aHe = function() {
		var aHg, aE;
		if (this.aHb !== 7 * this.a39) gA(), iE.a0d();
		else {
			for (aHg = !1; this.aHh() && (aHg = !0, gA(), 0 < this.aHc.length);)
				for (aE = this.aHd - 2; 0 <= aE; aE--) gA();
			aHg ? iE.a0d() : (g1(), iE.r5())
		}
	}, this.aHh = function() {
		return 0 < this.aHc.length && (this.a39++, cR.jC.fA(this.aHc[0]), this.aHc.shift(), !0)
	}
}

function aHi() {
	var aHj, aHk, aHl, a39, aHm, cd = 0,
		aM = aL.aM;

	function aHp() {
		! function() {
			if (!hn) return;
			if (fs) return;
			return aHm % 7 != 0 ? aHm++ : a39 === rA ? (aHs(), g4.a0M(a39), kC.fA()) : (aHs(), aHm++, a39++, g3.r2(), g3.ga(!0)), 1
		}() && (aHs(), gA())
	}

	function aHq() {
		cd = 0, (hn ? (aL.co = g4.a0M(a39 - (aHm % 7 == 0 ? 0 : 1) + aHm % 7 / 7) || aL.co, gc) : cI.cJ || !gW.tr ? gc : (aL.co = !0, gZ))()
	}

	function aHs() {
		var aE, bU, aHt = gR.kA.aCu,
			ae = gR.kA.aCv,
			ag = gR.kA.aCw,
			ai = gR.kA.aCx,
			aHu = gR.kA.aCy,
			aHv = gR.kA.aCz;
		if (aHj >= aHv.length) g2.uh("Error: Replay file smaller than expected."), g7.oA.oI(-1);
		else if (aHv = aHv[aHj], aHu[aHj]) {
			for (bU = aHk + aHv, aE = aHk; aE < bU; aE++) cR.jC.k7(aHt[aE], ae[aE], ag[aE], ai[aE]);
			aHk += aHv, aHj++
		} else ++aHl >= aHv && (aHj++, aHl = 0)
	}
	this.aHb = 0, this.b = function() {
		aHm = a39 = aHl = aHk = aHj = 0
	}, this.fA = function() {
		var aFi;
		q3.fA(), gW.xa() < 1.7 ? 0 === cd ? aL.aM >= aM && (aFi = aL.a0L / gW.xa(), aM += aFi * Math.floor(1 + (aL.aM - aM) / aFi), 2 === gb || cI.cJ || !gW.tr ? g1() : (aHp(), iE.a0d()), cd++) : aHq() : function() {
			var aFi;
			if (aL.aM >= aM)
				if (2 === gb || cI.cJ || !gW.tr) g1(), aM = aL.aM;
				else {
					for (aFi = aL.a0L / gW.xa(), 16 < (aL.aM - aM) / aFi && (aM = aL.aM - 16 * aFi); aL.aM >= aM && 2 !== gb;) aM += aFi, aHp();
					iE.a0d()
				} aHq()
		}(), gS(), aL.co && (aL.co = !1, nL())
	}, this.oV = function() {
		aHj !== gR.kA.aCz.length && g2.uh("Error: Replay file larger than expected.")
	}
}

function aHw() {
	var cd = 0,
		aM = aL.aM;
	this.aHb = 0, this.fA = function() {
		q3.fA(), hn ? gc() : 0 === cd ? aL.aM >= aM && (aM += aL.a0L * Math.floor(1 + (aL.aM - aM) / aL.a0L), 2 === gb || cI.cJ ? g1() : (gA(), iE.a0d()), cd++) : ((cI.cJ ? gc : (aL.co = !0, gZ))(), cd = 0), gS(), aL.co && (aL.co = !1, nL())
	}
}

function a9M() {
	function aHy() {
		aL.aM = performance.now(), aL.oU.fA(), window.requestAnimationFrame(aHy)
	}

	function aHz() {
		var a3 = performance.now();
		aL.aM + 1500 < a3 && (aL.aM = a3, aL.oU.fA())
	}
	this.oU = null, this.co = !1, this.aM = 0, this.aHx = -1, this.a0L = 56, this.b = function() {
		this.rX(), window.requestAnimationFrame(aHy), this.aM = performance.now()
	}, this.rT = function() {
		cH ? (this.oU = new aHi, this.oU.b()) : fs ? this.oU = new aHw : (this.oU = new aHa, this.oU.b())
	}, this.rX = function() {
		this.oU = new aHZ, this.co = !0
	}, this.pz = function() {
		1 !== gb || !fs || cI.cJ || hn || cI.pu(), -1 === this.aHx && (this.aHx = setInterval(aHz, 2e3))
	}, this.q0 = function() {
		this.co = !0, -1 !== this.aHx && (clearInterval(this.aHx), this.aHx = -1)
	}, this.fA = function() {
		this.oU.aHb++
	}, this.fP = function() {
		return this.oU.aHb
	}
}

function sf() {
	var he = 0,
		aI0 = !0;

	function aI2(v) {
		8 !== aT.pp() || 2 !== dx[bN] && (0 !== dw[bN] || hn) || g2.us(v)
	}
	this.fA = function() {
		var a3, vS;
		aL.aM > he && (he = aL.aM + 2500, a3 = new Date, vS = a3.getUTCSeconds(), aI0 ? vS < 45 && (aI0 = !1) : vS < 45 || -1 !== aL.aHx || (aI0 = !0, (vS = a3.getUTCMinutes() + 1) % 15 == 0 && aI2(30 === vS ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function sV() {
	var hD, hE, hF, hH, aI3 = 0,
		aI4 = 0;

	function aI6() {
		return Math.pow(Math.pow(hF - hD, 2) + Math.pow(hH - hE, 2), .5)
	}

	function aI5(lk) {
		hD = lX * lk.touches[0].clientX, hE = lX * lk.touches[0].clientY, hF = lX * lk.touches[1].clientX, hH = lX * lk.touches[1].clientY
	}
	this.pC = function(lk) {
		return 1 < lk.touches.length ? (aI4 = aL.aM, aI3 = 3, aI5(lk), nQ.lP(), !0) : (aI3 = 0, !1)
	}, this.pD = function(lk) {
		var aA4, dj, dk;
		return 0 !== gb && 1 < lk.touches.length && (aI3 = Math.max(aI3 - 1, 0), gT.i6() && (aA4 = aI6(), aI5(lk), lk = aI6(), dj = Math.floor((hD + hF) / 2), dk = Math.floor((hE + hH) / 2), hr.yA(dj, dk, Math.max(.125, lk) / Math.max(.125,
			aA4)), aL.co = !0), !0)
	}, this.pi = function() {
		var h8, h9;
		return !!(aI3 && (aI3 = 0, aL.aM < aI4 + 500)) && (h8 = (hD + hF) / 2, h9 = (hE + hH) / 2, nQ.pZ(h8, h9), nQ.click(h8, h9, !0) && (aL.co = !0), !0)
	}
}

function sp() {
	this.d6 = 0, this.cd = 0, this.k4 = null, this.b = function(k4) {
		this.cd = 0, this.k4 = k4, this.d6 = k4.length
	}, this.a2d = function() {
		this.k4 = null
	}, this.k6 = function(d6) {
		for (var aR = 0, k4 = this.k4, i6 = this.cd + d6 - 1, aE = this.cd; aE <= i6; aE++) aR |= (k4[aE >> 3] >> 7 - (7 & aE) & 1) << i6 - aE;
		return this.cd += d6, this.cd > 8 * this.d6 && console.log("error unwrapper"), aR
	}, this.aD9 = function(d6) {
		for (var ad = new Array(d6), aE = 0; aE < d6; aE++) ad[aE] = this.k6(10);
		return w.m0(ad)
	}, this.aI7 = function(aDK) {
		return this.d6 === lv.aI8(aDK)
	}
}

function a9J() {
	this.aE2 = 0, this.aE3 = 0, this.aDy = 0, this.aDz = 0, this.aE0 = 0, this.aE1 = 0, this.a0e = [0, 0, 0, 0], this.i5 = function() {
		this.aE2 = hr.hI(), this.aE3 = hr.cx(), this.aDy = -this.aE2, this.aDz = -this.aE3, this.aE0 = hG / e2, this.aE1 = cu / e2, this.a0e[0] = Math.floor(this.aDy), this.a0e[1] = Math.floor(this.aDz), this.a0e[2] = Math.floor(this.a0e[0] +
			this.aE0 + 1), this.a0e[3] = Math.floor(this.a0e[1] + this.aE1 + 1), iE.a0b = !0
	}
}

function sW() {
	var wh, he;
	this.b = function() {
		wh = 1, he = 0
	}, this.fA = function() {
		0 < wh && (he = 0 === he ? aL.aM + 16 : he, wh = (wh -= .001 * (aL.aM - he)) < 0 ? 0 : wh, he = aL.aM, aL.co = !0)
	}, this.cy = function() {
		0 < wh && (cz.fillStyle = "rgba(0,0,0," + wh + ")", cz.fillRect(0, 0, hG, cu))
	}
}

function sZ() {
	function aIC(a9V, h8, h9, cl, eu) {
		a9V >= az.a6f || (az.me === a9V && (cz.fillStyle = d2.iw, cz.fillRect(h8, h9, cl, eu), cz.fillStyle = d2.d3), cz.strokeRect(h8, h9, cl, eu), cz.fillText(az.fo.md[a9V].name, Math.floor(h8 + .5 * cl), Math.floor(h9 + .55 * eu)))
	}
	this.pb = !1, this.a4A = [0, 0, 0, 0], this.show = function() {
		this.pb = !0, this.resize(), aL.co = !0
	}, this.resize = function() {
		var aDT = bJ(az.a6f + az.a6f % 2, 2),
			aDT = a2 - aDT * ct;
		this.a4A[2] = a0 ? Math.floor(.75 * wA) : Math.floor(.5 * wA), this.a4A[3] = Math.floor(1.25 * this.a4A[2]), this.a4A[3] > aDT && (this.a4A[3] = aDT, this.a4A[2] = Math.floor(aDT / 1.2)), this.a4A[0] = Math.floor((a1 - this.a4A[2]) / 2),
			this.a4A[1] = Math.floor((a2 - this.a4A[3]) / 2)
	}, this.p8 = function(h8, h9) {
		return !(h8 < this.a4A[0] || h9 < this.a4A[1] || h8 > this.a4A[0] + this.a4A[2] || h9 > this.a4A[1] + this.a4A[3])
	}, this.cq = function(h8, h9) {
		var vH, aDT = bJ(az.a6f + az.a6f % 2, 2);
		return aL.co = !0, h8 < this.a4A[0] || h9 < this.a4A[1] || h8 > this.a4A[0] + this.a4A[2] || h9 > this.a4A[1] + this.a4A[3] ? !(this.pb = !1) : (vH = Math.floor(.17 * this.a4A[3]), h9 < this.a4A[1] + vH ? h8 > this.a4A[0] + this.a4A[2] -
			vH && (this.pb = !1) : (h9 = (h9 = Math.floor(aDT * (h9 - this.a4A[1] - vH - .00576 * cb) / (this.a4A[3] - vH - .01152 * cb))) < 0 ? 0 : aDT - 1 < h9 ? aDT - 1 : h9, h8 > this.a4A[0] + this.a4A[2] / 2 && (h9 += aDT), h9 >= az
				.a6f || az.lw(h9, Math.floor(16384 * Math.random()))), !0)
	}, this.cy = function() {
		var aE, hE, vH = Math.floor(.17 * this.a4A[3]),
			aDT = bJ(az.a6f + az.a6f % 2, 2),
			l5 = .6 * .01152 * cb,
			vI = (this.a4A[3] - vH - (aDT + 1) * l5) / aDT,
			nY = Math.floor((this.a4A[2] - 3 * l5) / 2);
		for (cz.lineWidth = qU, cz.textAlign = d1, cz.textBaseline = d0, cz.fillStyle = d2.iN, cz.fillRect(this.a4A[0], this.a4A[1] + vH, this.a4A[2], this.a4A[3] - vH), cz.fillStyle = d2.iw, cz.fillRect(this.a4A[0], this.a4A[1], this.a4A[2],
			vH), cz.strokeStyle = d2.d3, cz.strokeRect(this.a4A[0], this.a4A[1], this.a4A[2], this.a4A[3]), cz.fillStyle = d2.d3, cz.fillRect(this.a4A[0], this.a4A[1] + vH, this.a4A[2], 2), cz.font = ce + Math.floor(.48 * vH) + cf, cz.fillText(
				"Maps", Math.floor(this.a4A[0] + this.a4A[2] / 2), Math.floor(this.a4A[1] + .55 * vH)), cz.font = ce + Math.floor(.48 * vI) + cf, aE = aDT - 1; 0 <= aE; aE--) hE = Math.floor(this.a4A[1] + vH + l5 + aE * (vI + l5)), aIC(aE, this
			.a4A[0] + l5, hE, nY, vI), aIC(aE + aDT, this.a4A[0] + nY + 2 * l5, hE, nY, vI);
		cI.u4(Math.floor(this.a4A[0] + this.a4A[2] - .7 * vH), Math.floor(this.a4A[1] + .3 * vH), Math.floor(.4 * vH)), cz.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function oy() {
	this.d6 = 0, this.cd = 0, this.k4 = null, this.b = function(k4) {
		this.cd = 0, this.k4 = k4, this.d6 = k4.length
	}, this.lw = function(aDK) {
		return this.b(new Uint8Array(this.aI8(aDK))), this.k4
	}, this.a2d = function() {
		this.k4 = null
	}, this.lx = function(d6, vU) {
		for (var k4 = this.k4, i6 = this.cd + d6 - 1, aE = this.cd; aE <= i6; aE++) k4[aE >> 3] |= (vU >> i6 - aE & 1) << 7 - (7 & aE);
		this.cd += d6, this.cd > 8 * this.d6 && console.log("error wrapper")
	}, this.aID = function(d6) {
		for (var k4 = this.k4, i6 = this.cd + d6, aE = this.cd; aE < i6; aE++) k4[aE >> 3] &= 255 ^ 128 >>> (7 & aE)
	}, this.aI8 = function(aDK) {
		return aDK + 7 >> 3
	}, this.aIE = function(ad, ed, i6, aIF) {
		for (var aE = ed; aE < i6; aE++) this.lx(aIF, ad[aE])
	}
}
setTimeout(aS, 25);