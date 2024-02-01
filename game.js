function a() {
	var username;
	return b ? c.username : (12 <= d ? "" === (username = e.loadString(20)) && (username = "Android User " + Math.floor(1e3 * Math.random()), e.saveString(20, username)) : 5 <= d ? "" === (username = e.loadString(0)) && (username = "Player " + Math
		.floor(1e3 * Math.random()), e.saveString(0, username)) : username = f.g(0), username)
}

function h() {
	var j, max;
	if (b) j = c.password;
	else if (12 <= d) j = e.loadString(22);
	else {
		if (5 <= d) return 0;
		j = f.g(9)
	}
	return max = Math.floor(Math.pow(2, 48)), 0 < (j = Math.floor(parseInt(k.l(j)))) && j < max || m(j = Math.floor(1 + (max - 1) * Math.random())) ? j : 0
}

function n() {
	var r;
	b ? o = c.zoom || p < q : 12 <= d ? -1 === (r = e.loadNumber(21)) ? (o = e.getNumber(0) <= 100 || p < q, e.saveNumber(21, o ? 1 : 0)) : o = 1 === r || p < q : 5 <= d ? 2 === (r = e.loadNumber(1)) ? (o = !0, e.saveNumber(1, o ? 1 : 0)) : o = 1 ===
		r : o = 0 === f.g(4) || p < q
}

function s() {
	return b ? c.emojis : 5 <= d ? e.loadString(1) : f.g(7)
}

function t() {
	return b ? c.colors : 12 <= d ? e.loadString(21) : 5 <= d ? e.loadString(2) : f.g(8)
}

function u(username) {
	b ? window.webkit.messageHandlers.iosCommandA.postMessage("username " + username) : 12 <= d ? (e.saveString(20, username), e.setState(10)) : 5 <= d ? e.saveString(0, username) : ((username.length < 3 || 0 <= username.indexOf(";")) && (username =
		"Player 666"), f.v(0, username), f.w())
}

function m(i) {
	i = k.x(i.toString());
	return b ? (c.password = i, window.webkit.messageHandlers.iosCommandA.postMessage("password " + i), !0) : 12 <= d ? (e.saveString(22, i), !0) : !(5 <= d || 2 !== f.y() || (f.v(9, i), f.w(), 0))
}

function z(zoom, a0) {
	b ? (window.webkit.messageHandlers.iosCommandA.postMessage("zoom " + (zoom ? 1 : 0)), window.webkit.messageHandlers.iosCommandA.postMessage("sound " + (a0 ? 1 : 0))) : 12 <= d ? (e.saveNumber(22, a0 ? 1 : 0), e.saveNumber(21, zoom ? 1 : 0)) :
		5 <= d ? (e.saveNumber(1, zoom ? 1 : 0), e.saveNumber(11, a0 ? 1 : 0)) : (f.v(2, a0 ? 1 : 0), f.v(4, zoom ? 0 : 1), f.w())
}

function a1() {
	for (var j = "", a2 = 0; a2 < a3.a4; a2 += 2) j += a3.a5[a2] || a3.a5[a2 + 1] ? a3.a5[a2] && !a3.a5[a2 + 1] ? "1" : !a3.a5[a2] && a3.a5[a2 + 1] ? "2" : "3" : "0";
	b ? window.webkit.messageHandlers.iosCommandA.postMessage("emojis " + j) : 5 <= d ? e.saveString(1, j) : (f.v(7, j), f.w())
}

function a6(j) {
	if (b) window.webkit.messageHandlers.iosCommandA.postMessage("colors " + j);
	else {
		if (12 <= d) e.saveString(21, j);
		else if (5 <= d) return void e.saveString(2, j);
		f.v(8, j), f.w()
	}
}

function a7(a8) {
	b || 5 <= d && e.setState(a8)
}

function a9() {
	var r;
	return !(aA.aB < aC) && (aC = aA.aB + (r = 135e4), b ? (window.webkit.messageHandlers.iosCommandA.postMessage("show ad " + r), !0) : 12 <= d && (e.presentAd(r), !0))
}

function aD() {
	!b && 7 <= d ? e.setState(5) : location.reload()
}

function aE() {
	d < 17 || e.saveString(23, document.documentElement.outerHTML)
}

function aJ() {
	this.aK = new Uint16Array(2), this.aL = new Uint32Array(2), this.aM = new Uint8Array(4), this.aN = new Uint8Array(4), this.aO = new Uint32Array(5), this.aP = new Uint32Array(8), this.aQ = function(aR, aS) {
		return aR[0] = aS, aR
	}, this.aT = function(aR, aS, aU) {
		return aR[0] = aS, aR[1] = aU, aR
	}, this.aV = function(aR, aS, aU, aW) {
		return aR[0] = aS, aR[1] = aU, aR[2] = aW, aR
	}, this.aX = function(aR, aS, aU, aW, aY) {
		return aR[0] = aS, aR[1] = aU, aR[2] = aW, aR[3] = aY, aR
	}
}
var aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, e5, e2, e4, dj;

function am() {
	ae = 0, af = 2048, ag = new Uint32Array(4 * af), ah = 0, ai = new Uint32Array(af), (aj = new Int32Array(4))[0] = -4 * an, aj[1] = 4, aj[2] = -aj[0], aj[3] = -aj[1], ak = new Uint8Array(an * ao)
}

function ap(player) {
	aa = player, al = !1, aq(), ar();
	for (var a2 = as.at(aa) - 1; 0 <= a2; a2--) 0 === as.au(aa, a2) && (aZ = a2, av());
	al && aw()
}

function aw() {
	ax(), ay()
}

function av() {
	ad = as.az(aa, aZ), ab = as.b0(aa, aZ), b1(), (0 !== ae && (b3(), b4()) ? b5 : b2)()
}

function b4() {
	return ac = b6(ab, ae), b7 < ac
}

function b3() {
	for (var a2 = ae - 1; 0 <= a2; a2--) ak[b6(ag[a2], 4)] = 0
}

function b2() {
	var r;
	1 === as.at(aa) && b8.b9(aa), aa !== bA ? (bB[aa] += ab, bC.bD(aa)) : (r = bB[aa], bB[aa] += ab, bC.bD(aa), bE.bF[13] -= bB[aa] - r), as.bG(aa, aZ)
}

function aq() {
	var a2, bH = bI[aa].length;
	for (ah = 0, a2 = (af < bH ? af : bH) - 1; 0 <= a2; a2--) ai[ah++] = bI[aa][a2]
}

function ar() {
	for (var a2 = bI[aa].length - 1; 0 <= a2; a2--) bJ.bK(bI[aa][a2]) && bJ.bL(bI[aa][a2], aa);
	bI[aa] = []
}

function b1() {
	ae = 0, (ad === bM ? bN : bO)()
}

function bO() {
	for (var bP, bQ, a2, bR = 3; 0 <= bR; bR--)
		for (a2 = ah - 1; 0 <= a2; a2--) bQ = b6(bP = ai[a2] + aj[bR], 4), 0 === ak[bQ] && bJ.bS(bP) && bJ.bT(bP) === ad && (ak[bQ] = 1, ag[ae++] = bP)
}

function bN() {
	for (var bP, bQ, a2, bR = 3; 0 <= bR; bR--)
		for (a2 = ah - 1; 0 <= a2; a2--) bQ = b6(bP = ai[a2] + aj[bR], 4), 0 === ak[bQ] && bJ.bU(bP) && (ak[bQ] = 1, ag[ae++] = bP)
}

function b5() {
	bV() ? (bW(), ad !== bM && bX()) : b2()
}

function bX() {
	bY(), bZ(ba[ad]), bZ(bb[ad]), bc(bI[ad]), bd(bb[ad]), bd(be[ad]), bf(), bg()
}

function bW() {
	al = !0, as.bh(aa, aZ, ab), bi[aa] += ae, bj(), bk()
}

function bV() {
	return (ad === bM ? bl : bm)()
}

function bm() {
	var bn = ae * b7,
		bo = bp(),
		bq = br(),
		bo = bn + 2 * bo + bq,
		bt = ac * ae;
	return bo < bt ? (ab -= bo, bu(bo - bn, bq), !0) : (ab -= bt, bu(bt - bn, bq), !1)
}

function bu(bt, bq) {
	if (0 < bq) {
		if (!(bq <= bt)) return as.bv(ad, aa, bq - bt), void(bt = 0);
		as.bv(ad, aa, 0), bt -= bq
	}
	bt = b6(bt, 2), bB[ad] >= bt ? bB[ad] -= bt : bB[ad] = 0
}

function br() {
	return as.bw(ad, aa)
}

function bp() {
	return bx.by(ae * bB[ad], 1 + bx.by(10 * bi[ad], 16))
}

function bz() {
	return Math.floor(2 + c0(b6(bi[ad], 100), 8))
}

function c1() {
	return ba[ad].length + b6(bb[ad].length + be[ad].length, 50)
}

function bl() {
	return ab -= ae * b7, !0
}

function bk() {
	for (var a2 = ae - 1; 0 <= a2; a2--) bI[aa].push(ag[a2]), ba[aa].push(ag[a2]), bJ.bL(ag[a2], aa)
}

function c2() {
	var c3 = 1,
		c4 = [null, null];
	this.c5 = function() {
		c3 = .72 * (o ? .0011 : .001) * c6;
		for (var a2 = 1; 0 <= a2; a2--) c4[a2] && this.c7(a2, c4[a2].j)
	}, this.c7 = function(c8, j) {
		c4[c8] = {
			j: j,
			font: c9 + 10 + cA
		}, this.cB(c8)
	}, this.cB = function(c8) {
		var j, cE, cF, cG, cI;
		cC.cD() && c4[c8] && (j = c4[c8].j, cE = Math.floor(.15 * c3 * cC.get(13).height), cG = cH.measureText(j, cF = c9 + cE + cA), (cI = .8 * c3 * cC.get(13).width) < cG && (cE = Math.floor(cE * cI / cG), cF = c9 + cE + cA), c4[c8] = {
			j: j,
			font: cF
		}, aA.cJ = !0)
	}, this.cK = function() {
		return Math.floor(c3 * cC.get(13).height)
	}, this.cL = function(cM, cN) {
		return !!cC.cD() && !(cM < cO || cN < cP - cQ.cG - c3 * cC.get(13).height - 2 * cO || cN > cP - cQ.cG - 2 * cO || (cM < cO + c3 * cC.get(13).width ? (cR.cS(0), 0) : cM < 2 * cO + c3 * cC.get(13).width || !(cM < 2 * cO + 2 * c3 * cC.get(
			13).width) || (cR.cS(1), 0)))
	}, this.cT = function() {
		return Math.floor(cP - cQ.cG - c3 * cC.get(13).height - 2 * cO)
	}, this.cU = function() {
		if (cC.cD()) {
			cV.imageSmoothingEnabled = !0, cV.setTransform(c3, 0, 0, c3, cO, this.cT()), cV.drawImage(cC.get(14), 0, 0), cV.setTransform(c3, 0, 0, c3, 2 * cO + c3 * cC.get(13).width, this.cT()), cV.drawImage(cC.get(13), 0, 0);
			for (var a2 = 1; 0 <= a2; a2--) c4[a2] && (cV.setTransform(1, 0, 0, 1, (1 + a2) * cO + a2 * c3 * cC.get(13).width, this.cT()), cV.font = c4[a2].font, cV.textBaseline = cW, cV.textAlign = cX, cV.fillStyle = cY.cZ, cV.fillText(c4[a2].j,
				.5 * c3 * cC.get(13).width, .86 * c3 * cC.get(13).height));
			cV.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function ca() {
	this.cb = new Int16Array(4), this.cc = new Int16Array(4), this.c5 = function() {
		var a2;
		for (this.cb[0] = -an, this.cb[1] = 1, this.cb[2] = an, this.cb[3] = -1, a2 = 0; a2 < 4; a2++) this.cc[a2] = 4 * this.cb[a2]
	}, this.cd = function(ce, cf) {
		var cg = this.ch(cf) - this.ch(ce),
			cf = this.cj(cf) - this.cj(ce),
			ce = cg >>> 31 << 1;
		return 5 + ce + (1 - ce) * (1 - (cf >>> 31 << 1)) * (Math.abs(cg) - Math.abs(cf) >>> 31) & 3
	}, this.cn = function(ce, cf, co) {
		return co % 2 == 0 ? co + (1 - co) * (1 - (this.ch(cf) - this.ch(ce) >>> 31 << 1)) + 4 & 3 : co + (2 - co) * (1 - (this.cj(cf) - this.cj(ce) >>> 31 << 1)) + 4 & 3
	}, this.cq = function(bP, cr) {
		for (var cf, cs, cu = bb[bP], bH = cu.length, cG = an, cv = this.ch(cr), cw = this.cj(cr), cx = cu[0] >> 2, min = this.cy(cv, cw, cx), a2 = 1; a2 < bH; a2++)(cs = (cs = cv - (cf = cu[a2] >> 2) % cG) * cs + (cs = cw - ~~((.5 + cf) / cG)) *
			cs) < min && (min = cs, cx = cf);
		return cx
	}, this.cz = function(player, d0) {
		return !bJ.bU(d0) && player === bJ.bT(d0)
	}, this.cy = function(d1, d2, cr) {
		return (d1 -= this.ch(cr)) * d1 + (d2 -= this.cj(cr)) * d2
	}, this.d3 = function(d4, d5, d6) {
		d4 = this.d8(d4) - this.d9(d6), d5 = this.dB(d5) - this.dC(d6);
		return Math.sqrt(d4 * d4 + d5 * d5)
	}, this.dD = function(ce, cf) {
		var d7 = this.ch(ce) - this.ch(cf),
			ce = this.cj(ce) - this.cj(cf);
		return Math.sqrt(d7 * d7 + ce * ce)
	}, this.dE = function(bP) {
		return bP < dF && 0 !== dG[bP] && 2 !== dH[bP]
	}, this.dI = function() {
		return 0 !== dG[bA] && 2 !== dH[bA]
	}, this.dJ = function(bP, dK) {
		return bx.by(dK * bB[bP], 1e3)
	}, this.d8 = function(d4) {
		return 16 * (d4 + dL) / dM
	}, this.dB = function(d5) {
		return 16 * (d5 + dN) / dM
	}, this.dO = function(d4) {
		return Math.floor((d4 + dL) / dM)
	}, this.dP = function(d5) {
		return Math.floor((d5 + dN) / dM)
	}, this.dQ = function(d1, d2) {
		return 1 <= d1 && 1 <= d2 && d1 < an - 1 && d2 < ao - 1
	}, this.ch = function(cr) {
		return cr % an
	}, this.cj = function(cr) {
		return bx.by(cr, an)
	}, this.dR = function(d1, d2) {
		return d2 * an + d1
	}, this.dS = function(cr) {
		var d1 = this.ch(cr),
			cr = this.cj(cr);
		return 0 < d1 && d1 < an - 1 && 0 < cr && cr < ao - 1
	}, this.dT = function(cr) {
		return cr << 2
	}, this.dU = function(cr) {
		return an * this.cj(cr) * 256 + (this.ch(cr) << 4)
	}, this.dV = function(cr) {
		return this.dU(cr) + 8 + (an << 7)
	}, this.dW = function(d6) {
		return an * (this.dC(d6) >> 4) + (this.d9(d6) >> 4)
	}, this.dX = function(d6) {
		d6 = this.dW(d6);
		return (this.ch(d6) >> 5) + dY.dZ.da * (this.cj(d6) >> 5)
	}, this.d9 = function(d6) {
		return d6 % (an << 4)
	}, this.dC = function(d6) {
		return bx.by(d6, an << 4)
	}, this.db = function(cr, co) {
		return cr + this.cb[co]
	}, this.dc = function(d0, co) {
		return d0 + this.cc[co]
	}
}

function dd(player) {
	return de.aP[1] = bI[player].length, de.aP[0] === bM ? df(player) : dg(player, de.aP[0]), 0 !== de.aP[1] || 0 !== bI[player].length
}

function dh(player) {
	di && (dj[player] = 1), dk(de.aP[1], player), as.dl(player, de.aL[0], de.aP[0]), b8.dm(player, !1)
}

function dn(player, dp, bH, dq) {
	var dr = b6(3 * bB[player], 256);
	dq -= dq >= b6(bB[player], 2) ? dr : 0, dk(bH, player), as.dl(player, dq, dp), bB[player] -= dq + dr, b8.dm(player, !1)
}

function dg(player, dp) {
	for (var co, a2 = ba[player].length - 1; 0 <= a2; a2--)
		if (bJ.ds(ba[player][a2]))
			for (co = 3; 0 <= co; co--)
				if (bJ.bS(ba[player][a2] + aj[co]) && bJ.bT(ba[player][a2] + aj[co]) === dp) {
					bI[player].push(ba[player][a2]);
					break
				}
}

function dk(dt, player) {
	for (var a2 = bI[player].length - 1; dt <= a2; a2--) bJ.du(bI[player][a2], player)
}

function df(player) {
	for (var co, a2 = ba[player].length - 1; 0 <= a2; a2--)
		if (bJ.ds(ba[player][a2]))
			for (co = 3; 0 <= co; co--)
				if (bJ.bU(ba[player][a2] + aj[co])) {
					bI[player].push(ba[player][a2]);
					break
				}
}

function dv(player, dw) {
	var a2, dx, co, dy, bH = ba[player].length,
		cp = 256 <= bH ? 12 : 32 <= bH ? 6 : 1,
		dz = bH - 1 - e0.e1(cp);
	e2 = 0;
	loop: for (a2 = dz; 0 <= a2; a2 -= cp)
		for (co = 3; 0 <= co; co--)
			if ((dy = bJ.bU(ba[player][a2] + aj[co]) ? bM : bJ.bT(ba[player][a2] + aj[co])) === bM || bJ.bS(ba[player][a2] + aj[co]) && dy !== player && (dw || e3(player, dy))) {
				for (dx = e2 - 1; 0 <= dx; dx--)
					if (e4[dx] === dy) continue loop;
				if (e4[e2] = dy, ++e2 >= e5) return !0
			}
	return 0 < e2
}

function e6(player, dw) {
	var a2, co, dy;
	for (e2 = 0, a2 = ba[player].length - 1; 0 <= a2; a2--)
		for (co = 3; 0 <= co; co--)
			if ((dy = bJ.bU(ba[player][a2] + aj[co]) ? bM : bJ.bT(ba[player][a2] + aj[co])) === bM || bJ.bS(ba[player][a2] + aj[co]) && dy !== player && (dw || e3(player, dy))) return e4[e2++] = dy, !0;
	return !1
}

function e7() {
	for (var e8, a2 = e2 - 1; 0 <= a2; a2--)
		if (e4[a2] === bM) {
			for (e2--, e8 = a2; e8 < e2; e8++) e4[e8] = e4[e8 + 1];
			return !0
		} return !1
}

function e9(player) {
	for (var e8, a2 = e2 - 1; 0 <= a2; a2--)
		if (as.eA(player, e4[a2]))
			for (e2--, e8 = a2; e8 < e2; e8++) e4[e8] = e4[e8 + 1];
	return 0 === e2
}

function eB() {
	for (var a2 = e2 - 1; 0 <= a2; a2--)
		if (e4[a2] >= dF) return !0;
	return !1
}

function eC() {
	for (var a2 = e2 - 1; 0 <= a2; a2--) e4[a2] < dF && (e4[a2] = e4[--e2]);
	return 0 < e2
}

function eD(player) {
	for (var e8, eE = e4[0], eF = bB[eE] + as.bw(eE, player), a2 = e2 - 1; 1 <= a2; a2--)(e8 = bB[e4[a2]] + as.bw(e4[a2], player)) < eF && (eE = e4[a2], eF = e8);
	return eE
}

function eG(player) {
	var eH, eI = e4[0];
	if (1 !== e2)
		for (var eJ = b6(eK[player] + eL[player], 2), eM = b6(eN[player] + eO[player], 2), eP = eQ(eJ - b6(eK[eI] + eL[eI], 2)) + eQ(eM - b6(eN[eI] + eO[eI], 2)), a2 = e2 - 1; 1 <= a2; a2--)(eH = eQ(eJ - b6(eK[e4[a2]] + eL[e4[a2]], 2)) + eQ(eM - b6(
			eN[e4[a2]] + eO[e4[a2]], 2))) < eP && (eP = eH, eI = e4[a2]);
	return eI
}

function eR() {
	return e4[e0.e1(e2)]
}

function eS() {
	e5 = 8, e2 = 0, e4 = new Uint16Array(e5)
}

function eT() {
	dj = di ? new Uint8Array(bM) : null
}

function eU(player, dq) {
	var eV;
	di && (dj[player] = 0), !as.eW(player) || dq < 60 || (0 === ba[player].length ? dY.eX.eY(player) || (eZ.ea(player - dF, 200), eb(player, dq, eZ.dq[player - dF], bC.ec(player))) : 0 < bb[player].length && e0.random() < e0.value(bb[player].length >
		ba[player].length ? 7 : 3) && dY.eX.eY(player) || (eV = bC.ec(player), bB[player] > eV && dq < bB[player] - eV && (dq = bB[player] - eV), di ? ed(player, dq, eZ.dq[player - dF], eV) : ee(player, dq, eZ.dq[player - dF])))
}

function ed(player, dq, ef, eV) {
	var dp;
	dv(player, !1) || e6(player, !1) ? (dj[player] = 1, e9(player) || (e7() ? (eg(player, dq), eh(player, bM, ef)) : (e0.ei(eZ.ej[ef]) ? ek(player, dq, dp = eD(player)) : (eB() && e0.ei(eZ.el[ef]) && eC(), ek(player, dq, dp = eG(player))), eh(player,
		dp, ef)))) : 0 < bb[player].length && e0.random() < e0.value(60) && dY.eX.eY(player) || (eZ.ea(player - dF, 200), eb(player, dq, ef, eV))
}

function em(player, dq) {
	dv(player, !1) || e6(player, !1) ? (dj[player] = 1, e7() ? eg(player, dq) : ek(player, dq, eR())) : eb(player, dq, 0, 0)
}

function eh(player, dp, ef) {
	3 <= ef && 2142 < aA.en() && (dp === bM || bB[dp] < b6(bB[player], 20)) && eZ.ea(player - dF, 25)
}

function eb(player, dq, ef, eV) {
	var a2, e8, eo;
	if (0 !== ep.eq[player] && !(5 === ef && bB[player] < eV || 4 === ef && bB[player] < b6(eV, 2)))
		for (a2 = e0.e1(er), e8 = 0; e8 < er; e8++)
			if (eo = es[(e8 + a2) % er], ep.eq[eo] === ep.eq[player] && 1 === dj[eo]) return void et.eu.ev(player, eo, dq)
}

function ee(player, dq, ef) {
	!dv(player, !0) && !e6(player, !0) || e9(player) || (e7() ? eg(player, dq) : e0.ei(eZ.ej[ef]) ? ek(player, dq, eD(player)) : (eB() && e0.ei(eZ.el[ef]) && eC(), ek(player, dq, eG(player))))
}

function ew(player, dq) {
	(dv(player, !0) || e6(player, !0)) && (e7() ? eg(player, dq) : ek(player, dq, eR()))
}

function ek(player, dq, dp) {
	b6(bB[player], 8) > bB[dp] && (dq = (ex = b6(11 * bB[dp], 5)) < dq ? dq : ex);
	var ex = bI[player].length;
	dg(player, dp), dn(player, dp, ex, dq)
}

function eg(player, dq) {
	var dp = bM,
		bH = bI[player].length;
	return df(player), bI[player].length !== bH && (dn(player, dp, bH, dq), !0)
}
self.aiCommand746 = function(aF) {
	0 === aF ? aG() : 1 !== aF || d < 14 || aH.aI()
};
var dF, n3, fA, n2, ey = [60, 74, 112, 200, 256, 512];

function ez() {
	var f0, f1, f2, f3, f4, f5;

	function fK(a2) {
		f0[a2] = 1 + b6(f4[a2] * e0.random(), 10 * e0.value(100))
	}
	this.f6 = ["Very Easy", "Easy", "Normal", "Hard", "Harder", "Very Hard"], this.f7 = [97, 95, 93, 90, 87, 84], this.el = [98, 95, 70, 40, 20, 0], this.f8 = [85, 70, 50, 30, 7, 3], this.ej = [0, 0, 5, 25, 50, 90], this.dq = null, this.c5 =
		function() {
			var a2, f9;
			if (f0 = new Uint8Array(fA), f1 = new Uint16Array(fA), f2 = new Uint16Array(fA), f3 = new Uint8Array(fA), this.dq = new Uint8Array(fA), f4 = new Uint16Array(fA), f5 = new Uint16Array(fA), fB.fC) {
				if (fB.fD.fE)
					for (a2 = fA - 1; 0 <= a2; a2--) this.dq[a2] = fB.fD.fE[a2 + 1]
			} else if (9 === fF) this.fG();
			else if (fH)
				if (di)
					for (a2 = fA - 1; 0 <= a2; a2--) this.dq[a2] = fI.fJ[ep.eq[a2 + dF] - 1].bR;
				else
					for (a2 = fA - 1; 0 <= a2; a2--) this.dq[a2] = fI.fJ[0].bR;
			else
				for (f9 = 8 === fF ? 1 : 0, a2 = fA - 1; 0 <= a2; a2--) this.dq[a2] = f9;
			for (a2 = fA - 1; 0 <= a2; a2--) this.dq[a2] <= 2 ? (f3[a2] = 5, f4[a2] = f5[a2] = 1040, 0 === this.dq[a2] ? (f1[a2] = 1e3, f2[a2] = 1e3) : 1 === this.dq[a2] ? (f1[a2] = 1e3, f2[a2] = 920, f4[a2] = f5[a2] = 1100) : (f1[a2] = 825, f2[a2] =
				750)) : this.dq[a2] <= 4 ? (f3[a2] = 1 + e0.e1(20), 3 === this.dq[a2] ? (f1[a2] = f2[a2] = 500, f4[a2] = f5[a2] = 1e3) : (f5[a2] = 250 + e0.e1(1501), f4[a2] = 500 + e0.e1(501), f1[a2] = 300 + e0.e1(201), f2[a2] = 100 + e0.e1(
				201))) : (f4[a2] = 1e3, f5[a2] = 1e3, f3[a2] = 35 + e0.e1(16), f1[a2] = 300 + e0.e1(201), f2[a2] = 50 + e0.e1(101)), fK(a2)
		}, this.fG = function() {
			for (var a2, d0 = 0, e8 = 0; e8 < 6; e8++) {
				for (a2 = d0 + fL.fM[e8] - 1; d0 <= a2; a2--) this.dq[a2] = e8;
				d0 += fL.fM[e8]
			}
		}, this.ea = function(fN, value) {
			0 <= fN && (f0[fN] = value)
		}, this.eY = function(fN) {
			0 == --f0[fN] && ! function(fN) {
				! function(fN) {
					f4[fN] !== f5[fN] && (f4[fN] += f4[fN] < f5[fN] ? 3 : -3);
					f1[fN] !== f2[fN] && (f1[fN] += f1[fN] < f2[fN] ? f3[fN] : -f3[fN], f1[fN] = (Math.abs(f1[fN] - f2[fN]) <= f3[fN] ? f2 : f1)[fN]);
					f0[fN] = b6(f4[fN], 10)
				}(fN);
				var player = fN + dF;
				eU(player, b6(f1[fN] * bB[player], 1e3))
			}(fN)
		}
}

function fQ() {
	fR.eY(), fS.eY(), fT.fU(), fV.eY(), fW.fX.fY()
}

function fZ() {
	bC.eY(), fa.eY(), fb.eY(), fc.eY(), fd.eY(), b8.eY(), fe.eY(), dY.ff.eY(), fg(), fh.eY(), fL.eY(), fS.eY(), fS.fi(), fT.eY(), fj.eY(), fk.eY(), fl.eY(), fR.eY(), fm.eY(), fn.eY(), fo.eY(), bE.eY(), fp.eY(), fq.eY(), fV.eY(), fr.eY(), aA.eY()
}

function fs() {
	ft.eY(), fu.eY(), cH.eY(), fv.eY(), fw.eY(), fx.fy()
}

function fz() {
	fh.g0(!1), fl.g0(), fT.g0(!1), fk.g0(), fn.g0(), fo.g0(), fS.g0(2 === g1), fp.cB()
}

function g2() {
	fS.g0(!0) && (aA.cJ = !0), fV.eY()
}

function g3() {
	var g4, g5, g6, g7, g8, g9;

	function gD(gF) {
		for (var a2 = g5 - 1; 0 <= a2; a2--) 0 === g7[g6[a2]] && bi[g6[a2]] >= gF && ap(g6[a2])
	}

	function gB(player) {
		10 === g7[player] ? g7[player] = g4 : bi[player] < 1e3 ? g7[player] = 3 : bi[player] < 1e4 ? g7[player] = 2 : bi[player] < 6e4 ? g7[player] = 1 : g7[player] = 0
	}
	this.c5 = function() {
		g8 = g9 = 0, g4 = 6, g5 = 0, g6 = new Uint16Array(bM), g7 = new Uint8Array(bM)
	}, this.eY = function() {
		var a2;
		for (g8 = bE.bF[13], g9 = bB[bA], a2 = g5 - 1; 0 <= a2; a2--) 10 === g7[g6[a2]] ? gB(g6[a2]) : 0 == g7[g6[a2]]-- && (gB(g6[a2]), ap(g6[a2]));
		16e4 <= bi[gC[0]] && (gD(16e4), 3e5 <= bi[gC[0]]) && gD(3e5), bi[bA] > bE.bF[7] && (bE.bF[7] = bi[bA]), bE.bF[14] += g9 - bB[bA] + g8 - bE.bF[13]
	}, this.b9 = function(player) {
		for (var dx, a2 = g5 - 1; 0 <= a2; a2--)
			if (player === g6[a2]) {
				for (g5--, dx = a2; dx < g5; dx++) g6[dx] = g6[dx + 1];
				return
			}
	}, this.dm = function(player, gG) {
		for (var a2 = g5 - 1; 0 <= a2; a2--)
			if (player === g6[a2]) return;
		g6[g5++] = player, g7[player] = gG ? 2 : 10
	}
}

function gH() {
	var dt, eX;
	this.c5 = function() {
		dt = fA, eX = new Uint16Array(fA);
		for (var a2 = fA - 1; 0 <= a2; a2--) eX[a2] = a2
	}, this.eY = function() {
		for (var a2 = dt - 1; 0 <= a2; a2--) 0 === dG[eX[a2] + dF] ? function(dx) {
			dt--;
			for (var a2 = dx; a2 < dt; a2++) eX[a2] = eX[a2 + 1]
		}(a2) : eZ.eY(eX[a2])
	}
}

function gK() {
	var gL, gM, g5, g6, g7, gN, gO, gP;

	function gS(a2) {
		var dx;
		for (g5--, dx = a2; dx < g5; dx++) g6[dx] = g6[dx + 1], g7[dx] = g7[dx + 1], gN[dx] = gN[dx + 1], gO[dx] = gO[dx + 1], gP[dx] = gP[dx + 1]
	}
	this.c5 = function() {
		gL = 1, g5 = 0, gM = 2 * bM, g6 = new Uint16Array(gM), g7 = new Uint8Array(gM), gN = new Uint16Array(gM), gO = new Uint32Array(gM), gP = new Uint32Array(gM)
	}, this.gQ = function(c8, position) {
		gO[c8] = position
	}, this.eY = function() {
		for (var a2 = g5 - 1; 0 <= a2; a2--) 0 == g7[a2]-- && (g7[a2] = 2, gR.eY(a2, gN[a2], g6[a2], gO[a2], gP[a2]))
	}, this.b9 = function(player, id) {
		for (var a2 = g5 - 1; 0 <= a2; a2--)
			if (player === g6[a2] && id === gN[a2]) return void gS(a2)
	}, this.gT = function(player) {
		for (var a2 = g5 - 1; 0 <= a2; a2--) player === g6[a2] && (gR.gU(player, gO[a2]), gS(a2))
	}, this.dm = function(player, dz, gV) {
		if (gM <= g5) return 0;
		g6[g5] = player, g7[g5] = 0, gN[g5] = gL, gO[g5] = dz, gP[g5] = gV;
		player = gL;
		return g5++, gL = 2 * gM < ++gL ? 1 : gL, player
	}, this.cU = function() {
		if (!(dM < 40 || 0 === g5)) {
			var dx, gY, gZ, a2, cE, gc, dq, gd = dL / dM,
				ge = dN / dM,
				gf = (gg + dL) / dM,
				gh = (cP + dN) / dM;
			for (cV.textAlign = cX, cV.textBaseline = cW, dx = g5 - 1; 0 <= dx; dx--) gY = bJ.gi(gO[dx]), gZ = bJ.cT(gO[dx]), a2 = g6[dx], gd - 1 < gY && gY < gf && ge - 1 < gZ && gZ < gh && 0 !== dG[a2] && ((cE = Math.floor(.94 * dM * fS.gj(
				a2))) < 6 || (gY = Math.floor(gg * (gY + .5 - gd) / (gf - gd)), gZ = Math.floor(cP * (gZ + .48 - ge) / (gh - ge)), cV.font = c9 + cE + cA, cV.fillStyle = cY.gk, dq = as.b0(a2, as.gl(a2, gN[dx])), cV.fillText(gm.gn.go ? fl
				.gp(dq) : gq[a2], gY, gZ), (gc = Math.floor(.5 * cE)) < 6) || (cV.font = c9 + gc + cA, cV.fillText(gm.gn.go ? gq[a2] : fl.gp(dq), gY, gZ + Math.floor(.82 * cE))))
		}
	}
}

function gr() {
	var gs, gt, gu, gv, gw, gx, gy, gz, h0, h1, h2, h3, h4, h5 = !1,
		h6 = !1;

	function h7(h8) {
		h3 = aA.aB, gu = gv = gt = 0, gw = (h4 = 33) / h8, gs = 1 / (h8 / h4 / 4), gx = (gg / 2 + dL) / dM, gy = (cP / 2 + dN) / dM, gz = dM
	}

	function hP(hR) {
		Math.abs(Math.log(h2 / gz)) < .125 && (h2 = hR * gz)
	}

	function hO(gd, ge, gf, gh) {
		h0 = (gd + gf + 1) / 2, h1 = (ge + gh + 1) / 2;
		gf = gg / (gf - gd + 1), gd = cP / (gh - ge + 1);
		h2 = .9 * (gf < gd ? gf : gd)
	}
	this.h9 = function() {
		return h5
	}, this.hA = function() {
		h7(1), this.hB(0, 0, an - 1, ao - 1), hC || hD || this.hE(bA, 3e3, !0, .3)
	}, this.hE = function(player, h8, hF, zoom) {
		hG || h5 && !hF && h6 || 0 === bi[player] || (hH.hI = !1, h6 = hF, h7(h8), function(player) {
			h0 = (eL[player] + eK[player] + 1) / 2, h1 = (eO[player] + eN[player] + 1) / 2
		}(player), function(zoom, player) {
			var d7 = eK[player] - eL[player] + 1,
				player = eN[player] - eO[player] + 1,
				dx = gg / d7,
				e8 = cP / player,
				dx = (h2 = dx < e8 ? dx : e8, 0 !== zoom ? zoom : d7 < 20 && player < 20 ? .5 : .9);
			h2 *= dx, hP(7 / 8)
		}(zoom, player), h5 = !0, hL.hM())
	}, this.hN = function(h8) {
		hD || hG || (hH.hI = !1, h6 = !0, h7(h8), hO(0, 0, an - 1, ao - 1), hP(7 / 8), h5 = !0, hL.hM())
	}, this.hB = function(gd, ge, gf, gh) {
		hO(gd, ge, gf, gh), dM = h2, hH.hS(h0, gg / 2), hH.hT(h1, cP / 2), hU.hV()
	}, this.hW = function() {
		return !(h5 && h6 || (h5 = !1))
	}, this.eY = function() {
		var hZ, ha, bR, hd;
		h5 && (gt < .5 ? gv < gw && (gv += gw * gs, gu = gt) : 1 - gu < gt && (gv = (gv -= gw * gs) < gw * gs ? gw * gs : gv), h3 = h3 >= aA.aB ? aA.aB - 1 : h3, bR = aA.aB - h3, gt = 1e3 < bR || 1 < (gt += gv * bR / h4) ? 1 : gt, h3 = aA.aB,
			bR = dM, hZ = dL, ha = dN, bR = (dM = gz * Math.pow(h2 / gz, gt)) / bR, hd = 1 - (gz * Math.pow(h2 / gz, 1 - gt) - gz) / (h2 - gz), hH.hS(gx + hd * (h0 - gx), gg / 2), hH.hT(gy + hd * (h1 - gy), cP / 2), fS.zoom(bR, (hZ * bR -
				dL) / (1 - bR), (ha * bR - dN) / (1 - bR)), hU.hV(), 1 <= gt && (h5 = !1, he.hf = !0), aA.cJ = !0)
	}
}

function hg() {
	var eo = hh.hi;
	this.gk = eo.hj(0, 0, 0), this.hk = eo.hl(0, 0, 0, .7), this.hm = eo.hl(0, 0, 0, .5), this.hn = eo.hl(0, 0, 0, .85), this.ho = eo.hl(0, 0, 0, .75), this.hp = eo.hl(0, 0, 0, .6), this.cZ = eo.hj(255, 255, 255), this.hq = eo.hl(255, 255, 255, .3),
		this.hr = eo.hl(255, 255, 255, .6), this.hs = eo.hl(255, 255, 255, .4), this.ht = eo.hl(255, 255, 255, .25), this.hu = eo.hl(255, 255, 255, .85), this.hv = eo.hl(255, 255, 255, .75), this.hw = eo.hj(128, 128, 128), this.hx = eo.hl(64, 64, 64,
			.75), this.hy = eo.hj(30, 255, 30), this.hz = eo.hj(0, 200, 0), this.i0 = eo.hj(128, 255, 128), this.i1 = eo.hl(10, 65, 10, .75), this.i2 = eo.hl(0, 255, 0, .6), this.i3 = eo.hl(0, 255, 0, .5), this.i4 = eo.hl(0, 200, 0, .5), this.i5 = eo
		.hl(0, 100, 0, .75), this.i6 = eo.hl(0, 60, 0, .8), this.i7 = eo.hl(0, 255, 0, .3), this.i8 = eo.hl(0, 180, 0, .6), this.i9 = eo.hj(255, 120, 120), this.iA = eo.hj(255, 160, 160), this.iB = eo.hj(255, 70, 70), this.iC = eo.hj(230, 0, 0), this
		.iD = eo.hl(220, 0, 0, .6), this.iE = eo.hl(255, 100, 100, .8), this.iF = eo.hl(100, 0, 0, .85), this.iG = eo.hl(60, 0, 0, .85), this.iH = eo.hl(200, 0, 0, .6), this.iI = eo.hl(0, 60, 60, .85), this.iJ = eo.hl(10, 60, 60, .9), this.iK = eo
		.hl(0, 96, 96, .75), this.iL = eo.hj(160, 160, 255), this.iM = eo.hl(0, 40, 90, .75), this.iN = eo.hl(0, 0, 255, .6), this.iO = eo.hj(255, 120, 100), this.iP = eo.hl(255, 255, 0, .5), this.iQ = eo.hl(255, 255, 150, .2), this.iR = eo.hj(255,
			255, 0), this.iS = eo.hj(255, 255, 200), this.iT = eo.hl(200, 200, 0, .6), this.iU = eo.hl(255, 140, 0, .75)
}

function iV() {
	this.iW = new iX, this.iY = new iZ, this.ia = new ib, this.ic = new id, this.eu = new ie
}

function iX() {
	this.ig = function(cr) {
		fH ? et.ia.ig(bA, cr) : ih.ii(cr)
	}, this.ij = function(dK, dp) {
		fH ? et.ia.ij(bA, dK, dp) : ih.ik(dK, dp)
	}, this.il = function(dK, im) {
		fH ? et.ia.io(bA, dK, im) : ih.ip(dK, im)
	}, this.iq = function(dK, cr) {
		fH ? et.ia.iq(bA, dK, cr) : dY.ir.is(bA, cr) && ih.it(dK, cr)
	}, this.iu = function(iv, cr) {
		fH ? et.ia.iu(bA, iv, cr) : dY.ir.iw(bA, iv, cr) && ih.ix(iv, cr)
	}, this.iy = function(dp) {
		fH ? et.ia.iy(bA, dp) : ih.iz(dp)
	}, this.j0 = function(j1) {
		fH ? et.ia.j2(bA, j1) : ih.j3(j1)
	}, this.j4 = function(j5) {
		fH ? et.ia.j4(bA, j5) : ih.j6(j5)
	}, this.j7 = function() {
		fH ? et.ia.j7(bA) : ih.j8()
	}
}

function ie() {
	this.ev = function(player, im, dq) {
		hh.iY.j9(player, dq, im) && (bC.il(player, im), im < dF) && e0.random() < e0.value(10) && (dj[im] = 0)
	}, this.jA = function(player, im, dq) {
		hh.iY.jB(dq, im) && (hh.iY.jC(im, de.aL[0]), bE.jD(player, im), fS.jE(im, de.aL[0]))
	}
}

function iZ() {
	this.jF = function(j1, player) {
		fR.j0(bA, player, j1), ih.jG(j1, player)
	}, this.jH = function(player) {
		fR.jI(player, 0), ih.jJ(player)
	}, this.jK = function(jL, player) {
		fR.jM(jL, player), ih.jN(jL, player)
	}, this.jO = function(jP) {
		fH || hD || ih.jQ(jR(), jP)
	}, this.jS = function() {
		fH || hD || ih.jT(jR(), gC[0], gC[1], gC[2])
	}, this.jU = function() {
		fH || hD || ih.jV(jR())
	}
}

function id() {
	this.eY = function(jW) {
		var id, aS, hW;
		for (jX.c5(jW), jX.c8 += 2, hW = 8 * jX.dt; jX.c8 + 8 <= hW;) id = jX.jY(4), aS = jX.jY(9), 0 === id ? this.jZ(id, aS, jX.jY(22)) : 1 === id ? this.jZ(id, aS, jX.jY(10), jX.jY(10)) : 2 === id ? this.jZ(id, aS, jX.jY(10), jX.jY(9)) : 3 ===
			id || 4 === id ? this.jZ(id, aS, jX.jY(10), jX.jY(22)) : 5 === id ? this.jZ(id, aS, jX.jY(10)) : 6 === id ? this.jZ(id, aS, jX.jY(7)) : 7 === id ? this.jZ(id, aS, jX.jY(1)) : this.jZ(id, aS)
	}, this.jZ = function(id, aS, aU, aW) {
		0 === id ? et.ia.ig(aS, aU) : 1 === id ? et.ia.ij(aS, aU, aW) : 2 === id ? et.ia.io(aS, aU, aW) : 3 === id ? et.ia.iq(aS, aU, aW) : 4 === id ? et.ia.iu(aS, aU, aW) : 5 === id ? et.ia.iy(aS, aU) : 6 === id ? et.ia.j2(aS, aU) : 7 === id ?
			et.ia.j4(aS, aU) : 8 === id ? et.ia.j7(aS) : et.ia.ja(aS)
	}
}

function ib() {
	this.ig = function(player, cr) {
		hh.iY.jb(0) && hh.iY.jc(player) && jd.dS(cr) && (fr.je.jf(0, player, cr), jg.dl(player, cr))
	}, this.ij = function(player, dK, dp) {
		hh.iY.jb(1) && hh.iY.jc(player) && hh.iY.jh(player, dp) && hh.iY.ji(player, dK, 12, b7) && as.eW(player) && hh.iY.jj(player, dp) && dd(player) && (fr.je.jf(1, player, dK, de.aP[0]), hh.iY.jk(player), bE.jl(player, dK), dh(player))
	}, this.io = function(player, dK, im) {
		hh.iY.jb(1) && hh.iY.jc(player) && di && hh.iY.jh(player, im) && hh.iY.jm(player, im) && hh.iY.j9(player, hh.iY.dJ(player, dK), im) && (fr.je.jf(2, player, dK, im), bC.il(player, im))
	}, this.iq = function(player, dK, cr) {
		hh.iY.jb(1) && hh.iY.jc(player) && jd.dS(cr) && dY.ff.jn !== dY.ff.jo && dY.ff.jp[player] !== dY.ff.jq && 0 !== bb[player].length && hh.iY.ji(player, dK, 32, 16) && dY.jr.js(player, cr) && (fr.je.jf(3, player, dK, cr), hh.iY.jk(player),
			dY.ff.jt(player))
	}, this.iu = function(player, iv, cr) {
		hh.iY.jb(1) && hh.iY.jc(player) && jd.dS(cr) && dY.ir.ju(player, iv) && dY.jr.jv(cr) && (fr.je.jf(4, player, iv, cr), hh.iY.jw(player, 8), dY.ff.iu())
	}, this.iy = function(player, dp) {
		hh.iY.jb(1) && hh.iY.jc(player) && (dp = Math.min(dp, bM), as.eA(player, dp)) && (fr.je.jf(5, player, dp), as.jx(player, dp))
	}, this.j2 = function(player, j1) {
		hh.iY.jb(2) && hh.iY.jc(player) && (j1 = Math.min(j1, a3.a4 - 1), fr.je.jf(6, player, j1), fS.jy(player, 0, j1))
	}, this.j4 = function(player, j5) {
		hh.iY.jb(1) && hh.iY.jc(player) && (fr.je.jf(7, player, j5), fo.jz(player, j5))
	}, this.j7 = function(player) {
		(hh.iY.jb(0) || hh.iY.jb(1)) && hh.iY.jc(player) && fq.j7(player) && fr.je.jf(8, player)
	}, this.ja = function(player) {
		fq.ja(player), fr.je.jf(9, player)
	}
}

function k0(k1, k2) {
	this.gY = 0, this.gZ = 0, this.cG = 0, this.eH = 0, this.resize = function() {
		this.eH = Math.min(hh.hi.k3() * k1[1] * c6, cP - 2 * k4), this.cG = Math.min(this.eH * (k1[0] / k1[1]), gg - 2 * k4), this.eH = k1[1] * this.cG / k1[0], this.gY = k4 + k2[0] * (gg - this.cG - 2 * k4), this.gZ = k4 + k2[1] * (cP - this
			.eH - 2 * k4)
	}, this.k5 = function() {
		return this.gY + .5 * this.cG
	}
}

function k6() {
	var k7, k8 = !0;

	function kL() {
		k7.select(), document.execCommand("copy")
	}
	this.k9 = !1, this.c5 = function() {
		(k7 = document.createElement("textarea")).setAttribute("name", "replayData"), k7.setAttribute("id", "replayDataField"), k7.setAttribute("autocomplete", "off"), k7.setAttribute("placeholder", "Insert the replay link here!"), k7.style
			.position = "absolute", k7.style.resize = "none", k7.style.borderRadius = "0", k7.style.color = cY.cZ, k7.style.backgroundColor = cY.hk, k7.addEventListener("focus", function() {
				kA.k9 = !0
			}), k7.addEventListener("blur", function() {
				kA.k9 = !1
			})
	}, this.show = function() {
		document.body.appendChild(k7)
	}, this.kB = function() {
		document.body.removeChild(k7)
	}, this.resize = function(gY, gZ, cG, eH) {
		hh.hi.kC(k7.style, gY, gZ, cG, eH), k7.style.font = hh.hi.kD(Math.max(5, .1 * eH / kE), 0)
	}, this.kF = function(kG) {
		k7.value = kG
	}, this.kH = function() {
		return k7.value
	}, this.kI = function() {
		k7.select()
	}, this.kJ = function() {
		k7.value = ""
	}, this.kK = function() {
		k8 && navigator.clipboard ? (k7.select(), navigator.clipboard.writeText(k7.value).catch(function() {
			k8 = !1, kL()
		})) : kL()
	}
}

function kM() {
	var kN = new Uint8Array(78);
	this.c5 = function() {
		var a2;
		for (kN[50] = 37, a2 = 0; a2 < 10; a2++) kN[a2 + 3] = a2 + 1;
		for (a2 = 0; a2 < 26; a2++) kN[a2 + 20] = a2 + 11, kN[a2 + 52] = a2 + 38
	}, this.kO = function(j) {
		return j.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "_")
	}, this.kP = function(j, kQ) {
		for (var kR = kN, bH = j.length, aR = new Uint8Array(kQ || bH), a2 = 0; a2 < bH; a2++) aR[a2] = kR[j.charCodeAt(a2) - 45];
		return aR
	}, this.kS = function(kT) {
		var a2, bH = kT.length,
			cG = kU;
		for (cG.kV(6 * bH), a2 = 0; a2 < bH; a2++) cG.kW(6, kT[a2]);
		jX.c5(cG.jW)
	}
}

function kX() {
	var cG, eH, kY;

	function l0(l1, bR, ky, ke, kt) {
		bR = kz(l1, bR + 1 + 2 * ke & 3);
		! function(l1, l2) {
			return 1 < Math.abs(l1 % cG - l2 % cG) || 1 < Math.abs(l5(l1) - l5(l2))
		}(l1, bR) && 0 === kt[bR << 2] && (kt[bR << 2] = ky)
	}

	function l5(bP) {
		return Math.floor((bP + .5) / cG) % eH
	}

	function kz(bP, bR) {
		return bP + kY[bR]
	}
	this.kZ = function(j) {
		var a2, ka, bH, kc, kf = jX;
		for (kg.kS(kg.kP(j)), an = cG = kf.jY(12), ao = eH = kf.jY(12), kY = [-cG, -1, cG, 1], (kp = document.createElement("canvas")).width = an, kp.height = ao, kl = kp.getContext("2d", {
				alpha: !1
			}), km = kl.getImageData(0, 0, an, ao), kq = km.data, hh.kr.ks(kq), bH = kf.jY(12), ka = kf.jY(5), kc = ki(cG * eH - 1), a2 = 0; a2 < bH; a2++) ! function(kb, bP, kd, ke) {
			var a2, bR, kf = jX,
				kt = kq,
				ku = bP,
				kv = bP,
				kw = 0,
				kx = 1 + kd,
				ky = 2 - kd;
			for (kt[bP << 2] = kx, a2 = 0; a2 < kb; a2++) bR = kf.jY(2), bP = kz(bP, bR), kt[bP << 2] === kx ? kw % 2 == 1 && l0(kv, kw + 2 * ke + 3, ky, ke, kt) : kt[bP << 2] = kx, l0(bP, bR, ky, ke, kt), l0(kv, bR, ky, ke, kt), kv = bP,
				kw = bR;
			kz(bP, 0) === ku ? (l0(bP, 0, ky, ke, kt), l0(ku, 0, ky, ke, kt)) : kz(bP, 1) === ku && (l0(bP, 0, ky, ke, kt), l0(ku, 2, ky, ke, kt));
			0 === kb && (l0(ku, 0, ky, ke, kt), l0(ku, 2, ky, ke, kt))
		}(kf.jY(ka), kf.jY(kc), 1 === kf.jY(1), 1 === kf.jY(1));
		var gY, gZ, l6, l7, l8, l9, kt = kq,
			lA = !0,
			lB = lC.get(lD).lB,
			lE = lC.get(lD).lE;
		for (gZ = 0; gZ < eH; gZ++)
			for (l7 = !0, l8 = lA, gY = l9 = 0; gY < cG; gY++) l6 = 4 * gZ * cG + 4 * gY, l9 <= gY && 0 < kt[l6] && (l8 = 2 === kt[l6], l7) && (l7 = !1, l8 !== lA) ? (lA = l8, l9 = gY + 1, gY = -1) : (l8 ? (kt[l6] = lE[0], kt[1 + l6] = lE[1], kt[
				2 + l6] = lE[2]) : (kt[l6] = lB[0], kt[1 + l6] = lB[1], kt[2 + l6] = lB[2]), kt[3 + l6] = 255);
		kl.putImageData(km, 0, 0), kn = !0, ko.c5(), aA.cJ = !0
	}
}

function lF() {
	var gY, gZ, cG, eH, lG, lH, lI, lJ, player, aR;

	function lR() {
		return function() {
			var a2;
			for (a2 = 0; a2 < 8; a2++)
				if (gY = b6(cG * e0.random(), e0.value(100)), gZ = b6(eH * e0.random(), e0.value(100)), lZ()) return 1;
			return
		}() || function() {
			var d7, dA, dx, lP, e8, lO;
			for (d7 = b6(cG * e0.random(), e0.value(100)), dA = b6(eH * e0.random(), e0.value(100)), dx = 40; 1 <= dx; dx--)
				for (lP = eH - dx; 0 <= lP; lP -= 40)
					for (gZ = (lP + dA) % eH, e8 = 40; 1 <= e8; e8--)
						for (lO = cG - e8; 0 <= lO; lO -= 40)
							if (gY = (lO + d7) % cG, lZ()) return 1;
			return
		}()
	}

	function lZ() {
		for (var bP, lb, lc = b6(lG - lJ, 2), ld = lI + gZ * lG + lc, le = lH + gY * lG + lc, la = ld + lJ - 1; ld <= la; la--)
			for (lb = le + lJ - 1; le <= lb; lb--)
				if (bP = bJ.lX(lb, la), !bJ.bK(bP) || bJ.ds(bP)) return;
		return 1
	}

	function lS(lO, lP) {
		lK(), lf(lO - 2, lP - 2)
	}

	function lK() {
		dG[player] = 0, bB[player] = 0, bi[player] = lg[player] = 0, bI[player] = [], ba[player] = [], bb[player] = [], be[player] = [], eL[player] = eO[player] = eK[player] = eN[player] = 0
	}

	function lf(lO, lP) {
		var bP, a2, li, lj;
		for (dG[player] = 1, bB[player] = player < dF ? lh : ey[eZ.dq[player - dF]], eL[player] = lO + 10, eO[player] = lP + 10, eN[player] = eK[player] = 0, li = lO; li < lO + 4; li++)
			for (lj = lP; lj < lP + 4; lj++)(lO < li && li < lO + 3 || lP < lj && lj < lP + 3) && (bP = bJ.lX(li, lj), bJ.bK(bP)) && (eL[player] = li < eL[player] ? li : eL[player], eK[player] = li > eK[player] ? li : eK[player], eO[player] = lj <
				eO[player] ? lj : eO[player], eN[player] = lj > eN[player] ? lj : eN[player], aR[bi[player]] = bP, bi[player]++, bJ.lk(bP, player));
		for (lg[player] = bi[player], a2 = bi[player] - 1; 0 <= a2; a2--) bJ.ll(aR[a2], player) ? (bJ.bL(aR[a2], player), ba[player].push(aR[a2])) : bJ.lm(aR[a2]) ? (bJ.bL(aR[a2], player), bb[player].push(aR[a2])) : bJ.ln(aR[a2]) && (bJ.bL(aR[a2],
			player), be[player].push(aR[a2]))
	}

	function lY(lO, lP) {
		for (var bP, lb, la = lP; lP - 6 < la; la--)
			for (lb = lO; lO - 6 < lb; lb--)
				if (bP = bJ.lX(lb, la), bJ.ds(bP)) return;
		return 1
	}
	this.c5 = function() {
		var a2, lO, lP;
		if (aR = new Array(12), lJ = 6, cG = b6(an, lG = 10), eH = b6(ao, lG), lH = b6(an - lG * cG, 2), lI = b6(ao - lG * eH, 2), hC)
			for (a2 = 0; a2 < dF; a2++) player = a2, lK(), dG[player] = 1;
		if (fB.fC && fB.fD.lL) {
			for (player = 0; player < bM; player++)
				if (1 !== dG[player]) {
					if (player < lQ) {
						if (function() {
								var lO = fB.fD.lL[player] + 1,
									lP = fB.fD.lW[player] + 1;
								if (3 < lO && lO < an - 5 && 3 < lP && lP < ao - 5 && bJ.bK(bJ.lX(lO, lP)) && lY(lO + 3, lP + 3)) return lS(lO + 1, lP + 1), 1;
								return
							}()) continue;
						if (lR()) {
							lO = lH + gY * lG + b6(lG, 2), lP = lI + gZ * lG + b6(lG, 2), lS(lO, lP);
							continue
						}
					}
					lK()
				}
		} else ! function() {
			var lO, lP;
			for (player = 0; player < bM; player++) 1 !== dG[player] && (player < lQ && lR() ? (lO = lH + gY * lG + b6(lG, 2), lP = lI + gZ * lG + b6(lG, 2), lS(lO, lP)) : lK())
		}();
		bE.bF[7] = bi[bA], bE.bF[8] = bB[bA]
	}, this.lo = function(dp, lp, lq) {
		var a2, lO, lP, bP, gY, gZ;
		for (player = dp, a2 = 0; a2 < 20; a2++)
			for (lO = lp + a2; lp - a2 <= lO; lO--)
				for (lP = lq + a2; lq - a2 <= lP; lP--)
					if ((lO === lp + a2 || lO === lp - a2 || lP === lq + a2 || lP === lq - a2) && 3 < lO && lO < an - 5 && 3 < lP && lP < ao - 5 && bJ.bK(bJ.lX(lO, lP)) && lY(lO + 3, lP + 3)) {
						if (0 < bi[player]) {
							for (gZ = gY = bP = void 0, gY = eK[player]; gY >= eL[player]; gY--)
								for (gZ = eN[player]; gZ >= eO[player]; gZ--) bP = 4 * (gZ * an + gY), bJ.ls(player, bP) && (bJ.lt(bP), bi[player]--);
							lK()
						}
						return lf(lO - 1, lP - 1), !0
					} return !1
	}, this.lu = function(dp) {
		player = dp, lR() ? lS(lH + gY * lG + b6(lG, 2), lI + gZ * lG + b6(lG, 2)) : lK()
	}
}

function lv() {
	lw.lx(), cV.setTransform(dM, 0, 0, dM, 0, 0), cV.imageSmoothingEnabled = dM < 3, cV.drawImage(kp, hH.gi(), hH.cT()), fj.ly.cU(), cV.drawImage(lz, hH.gi(), hH.cT()), lw.cU(), cV.imageSmoothingEnabled = !1, cV.setTransform(1, 0, 0, 1, 0, 0), dY.ly
		.cU(), fS.cU(), fe.cU(), (hG ? (fp.cU(), fw) : (cV.imageSmoothingEnabled = !1, fR.cU(), fh.cU(), fn.cU(), fw.cU(), fo.cU(), fT.cU(), hH.cU(), cH.cU(), fp.cU(), fk.cU(), fl.cU(), m0.cU(), m1.cU(), fu.cU(), m2.cU(), kA.cU(), fv)).cU()
}

function m3(hi, cG, eH) {
	hi.clearRect(0, 0, cG, eH), hi.fillStyle = cY.ho, hi.fillRect(0, 0, cG, eH)
}

function m4(hi, cG, eH, m5) {
	hi.fillStyle = cY.cZ, hi.fillRect(0, 0, cG, m5), hi.fillRect(0, 0, m5, eH), hi.fillRect(cG - m5, 0, m5, eH), hi.fillRect(0, eH - m5, cG, m5)
}

function m6(hi, gY, gZ, m7, m5, bP, m8) {
	hi.fillStyle = cY.cZ;
	var bP = Math.floor(m7 * bP),
		mA = (bP += (bP - m5) % 2, Math.floor((bP - m5) / 2)),
		m7 = Math.floor((m7 - bP) / 2);
	hi.fillRect(gY + m7, gZ + m7 + mA, bP, m5), m8 && hi.fillRect(gY + m7 + mA, gZ + m7, m5, bP)
}

function mC() {
	this.mD = null, this.c5 = function(mD) {
		this.mD = mD, fR.mE(this.mD)
	}, this.mF = function(mG) {
		var cp = (this.mD[mG].mH - this.mD[1 - mG].mH) / 10,
			cp = 8 / (1 + Math.pow(2, cp / 32)),
			cp = Math.floor(10 * cp + .5),
			mJ = this.mK(this.mD[mG].mH + cp + 1),
			cp = this.mK(this.mD[1 - mG].mH - cp);
		0 === mG ? fR.mM(this.mD, mJ, cp, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : fR.mM(this.mD, cp, mJ, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.mK = function(mH) {
		return 16e3 <= (mH = mH < 0 ? 0 : 16e3 < mH ? 16e3 : mH) ? "Unknown" : (mH / 10).toFixed(1)
	}
}

function mN() {
	var mO = new Uint8Array(64);
	this.c5 = function() {
		var a2;
		for (mO[0] = 45, mO[37] = 95, a2 = 0; a2 < 10; a2++) mO[a2 + 1] = 48 + a2;
		for (a2 = 0; a2 < 26; a2++) mO[a2 + 11] = 65 + a2, mO[a2 + 38] = 97 + a2
	}, this.mP = function(mQ) {
		for (var kf = jX, kT = new Uint8Array(mQ), a2 = 0; a2 < mQ; a2++) kT[a2] = kf.jY(6);
		return kT
	}, this.mR = function(kT) {
		for (var bH = kT.length, mS = mO, aR = [], a2 = 0; a2 < bH; a2++) aR.push(String.fromCharCode(mS[kT[a2]]));
		return aR.join("")
	}
}

function mT() {
	var mU, mV, mW;
	mU = [32, 65, 191, 913, 931], mV = [64, 127, 688, 930, 1155], mW = new Array(mU.length + 1);
	for (var a2 = 0; a2 < mW.length; a2++) {
		mW[a2] = 0;
		for (var dx = a2 - 1; 0 <= dx; dx--) mW[a2] += mV[dx] - mU[dx]
	}

	function md(eo) {
		for (var a2 = mU.length - 1; 0 <= a2; a2--)
			if (eo >= mU[a2] && eo < mV[a2]) return a2;
		return -1
	}
	this.mY = function(j) {
		return 0 !== (j = j.trim()).indexOf("Bot ") && 0 !== j.indexOf("[Bot] ") && function(j, ma, mb) {
			var bH = (j = j.trim()).length;
			if (bH < ma || mb < bH) return !1;
			for (var eo, mc = 0, a2 = 0; a2 < bH; a2++)
				if (eo = j.charCodeAt(a2), mc += 65 <= eo && eo <= 90 || 1040 <= eo && eo <= 1071 ? 1 : 0, -1 === md(eo)) return !1;
			if (3 < mc && mc > Math.floor(bH / 2)) return !1;
			return !0
		}(j, 3, 20)
	}, this.me = function(j) {
		for (var bH = (j = j.trim()).length, aR = [], a2 = 0; a2 < bH; a2++) {
			var eo, bP = md(eo = j.charCodeAt(a2));
			aR.push(mW[bP] + eo - mU[bP])
		}
		return aR
	}, this.kZ = function(aR) {
		for (var eo, e8, j = "", bH = aR.length, a2 = 0; a2 < bH; a2++)
			for (e8 = 1; e8 < mW.length; e8++)
				if (aR[a2] < mW[e8]) {
					eo = mU[e8 - 1] + aR[a2] - mW[e8 - 1], j += String.fromCharCode(eo);
					break
				} return j
	}, this.mf = function(j) {
		for (var aR = this.me(j), result = "", a2 = 0; a2 < aR.length; a2++) result = (result += aR[a2] < 10 ? "00" : aR[a2] < 100 ? "0" : "") + aR[a2].toString(10);
		return result
	}, this.mg = function(j) {
		for (var aR = new Array(Math.floor(j.length / 3)), a2 = 0; a2 < j.length; a2 += 3) aR[Math.floor(a2 / 3)] = parseInt(j.substring(a2, a2 + 3));
		return this.kZ(aR)
	}, this.x = function(j) {
		for (var aF, aR = [j.length], a2 = 0; a2 < j.length; a2++) aR[a2] = j.charCodeAt(a2) - 48;
		var result = "";
		for (a2 = 0; a2 < j.length; a2++) a2 === j.length - 1 || 51 < 10 * aR[a2] + aR[a2 + 1] ? result += aR[a2].toString() : (aF = 10 * aR[a2] + aR[a2 + 1], result += String.fromCharCode(aF + (aF < 26 ? 65 : 71)), a2++);
		return result
	}, this.l = function(j) {
		for (var eo, result = "", a2 = 0; a2 < j.length; a2++) 48 <= (eo = j.charCodeAt(a2)) && eo < 58 ? result += String.fromCharCode(eo) : 65 <= eo && eo < 75 ? result += "0" + (eo - 65).toString() : 75 <= eo && eo < 91 ? result += (eo - 65)
			.toString() : 97 <= eo && eo < 123 && (result += (eo - 71).toString());
		return result
	}, this.mh = function(j) {
		for (var bH = j.length, aR = [], a2 = 0; a2 < bH; a2++)(eo = j.charCodeAt(a2)) < 58 ? aR.push(j[a2]) : (eo -= eo < 91 ? 65 : 71, aR.push(String(b6(eo, 10))), aR.push(String(eo - 10 * b6(eo, 10))));
		var bH = aR.length - 2,
			eo = 0,
			kT = [];
		for (a2 = 0; a2 < bH; a2 += 3) kT[eo++] = parseInt(aR[a2] + aR[a2 + 1] + aR[a2 + 2]);
		return kT
	}, this.mi = function() {
		for (var mj, mk = "", a2 = 0; a2 < 6; a2++) mj = 48 + e0.random() % 36, mj += 58 <= mj ? 39 : 0, mk += String.fromCharCode(mj);
		return mk
	}
}

function ml() {
	this.mm = new mn, this.fX = new mo, this.c5 = function() {
		this.fX.c5()
	}
}

function mn() {
	function mq() {
		if (2 === g1) return 1;
		fo.n1(), g1 = 2, n2 = n3
	}

	function mt() {
		fR.n4(!0), fh.g0(!0), fT.g0(!0), fo.g0(), fw.n5(), aA.cJ = !0, he.n6(), a7(0)
	}
	this.mp = function() {
		mq() || (et.iY.jS(), fR.mr(247, 0), fR.ms(0, 59), ft.hN(2700), fu.show(!1, !1, !0), mt())
	}, this.mu = function(mv) {
		var jP = 0,
			mw = !1;
		mq() || (8 === fF ? ((mw = (jP = mv < 0 ? bi[0] >= bi[1] ? 0 : 1 : mv) === bA) ? fR.ms(jP, 2) : fR.ms(1 - bA, 3), mx.mF(jP), et.iY.jO(jP)) : di ? (mw = ep.eq[bA] === fp.my(), 9 === fF ? (et.iY.jO(mw ? gC[0] : 512), fR.mz(mw)) : fW.fX.eY(
			mw)) : (mw = (jP = gC[0]) === bA, fR.n0(jP), et.iY.jO(jP)), fu.show(mw, !1), mt())
	}
}

function mo() {
	var n7;

	function nR(n9, bQ) {
		for (var j = "", a2 = bQ; a2 < n9.length && a2 < bQ + 4; a2++) j += (a2 === bQ ? "" : "   ") + "[" + ep.nJ[n9[a2].id] + "]: " + n9[a2].nO.toFixed(Math.max(Math.floor(3 - Math.log10(n9[a2].nO)), 0));
		j.length && fR.nQ(0, j, 45, 0, hh.hi.hj(225, 240, 255), cY.ho, -1, !1)
	}
	this.n8 = 0, this.n9 = null, this.c5 = function() {
		n7 = 0, this.n8 = 0, this.n9 = null
	}, this.eY = function(mw) {
		var nA = ep.nB[fp.nC()];
		this.n8 = fp.nD(), this.n9 = function(nA, n8) {
				var a2, e8, bH, eq = ep.eq,
					nB = ep.nB,
					nJ = ep.nJ,
					nK = ep.nK,
					nL = bi,
					nM = dF,
					nN = [],
					c8 = 0;
				for (e8 = nJ.length - 1; 0 <= e8; e8--)
					if (nB[eq[nK[e8][0]]] === nA) {
						for (nN.push({
								id: e8,
								nL: 0,
								player: nK[e8][0],
								nO: 0
							}), bH = nK[e8].length, a2 = 0; a2 < bH; a2++) nN[c8].nL += nL[nK[e8][a2]];
						for (nN[c8].nO = (1 + nP) * nM * nN[c8].nL / n8, a2 = 0; a2 < c8; a2++)
							if (nN[c8].nL > nN[a2].nL) {
								nN.splice(a2, 0, nN[c8]), nN.pop();
								break
							} c8++
					} 8 < nN.length && (nN.length = 8);
				for (; 0 < nN.length && 0 === nN[nN.length - 1].nL;) nN.pop();
				return nN
			}(nA, this.n8), cH.nF("Team " + ep.c4[nA], 2, 1, 12),
			function(mw, nA) {
				var color;
				mw = mw ? (color = hh.hi.hj(10, 220, 10), "Congratulations! Team " + ep.c4[nA] + " won the game!") : (color = hh.hi.hj(200, 80, 80), "Our alliance was defeated! Team " + ep.c4[nA] + " won the game.");
				fR.nQ(0, mw, 40, 0, color, cY.ho, -1, !1)
			}(mw, nA), 0 !== (mw = this.n9).length && (fR.nQ(0, "The allied clans of the winning team have earned these glorious points:", 40, 0, cY.cZ, cY.ho, -1, !1), nR(mw, 0), nR(mw, 4)), et.iY.jU(), ft.hN(2700)
	}, this.fY = function() {
		2 === g1 && -1 !== n7 && (0 === n7 ? n7 = this.n9 && 0 !== this.n9.length ? aA.aB + 3e4 : -1 : aA.aB < n7 || (n7 = -1, fR.nQ(300, "Clan rankings and results can also be accessed under:", 735, 0, cY.cZ, cY.ho, -1, !1), fR.nQ(300,
			"territorial.io/clans", 736, 0, cY.cZ, cY.ho, -1, !1), fR.nQ(300, "territorial.io/clan-results", 736, 0, cY.cZ, cY.ho, -1, !1)))
	}
}

function nS() {
	var nT, kT;

	function nX() {
		var a2, cG = new nY;
		for (cG.kV(800), cG.kW(1, 0), cG.kW(3, 7), cG.kW(3, 1), cG.kW(2, b ? 2 : 12 <= d ? 1 : 0 < d ? 3 : 0), cG.kW(1, nZ ? 1 : 0), cG.kW(1, na ? 1 : 0), cG.kW(1, 2 === nb ? 1 : 0), a2 = 0; a2 < kT.length && !(cG.c8 + 6 > 8 * cG.dt); a2++) cG.kW(6,
			kT[a2]);
		nT.send(cG.jW), nT.onopen = null
	}
	window.addEventListener("error", function error(nU) {
		var nW;
		window.removeEventListener("error", error), nU = nU.lineno + " " + nU.colno + " " + nU.message, (nW = new kM).c5(), kT = nW.kP(nW.kO(nU)), (nT = new WebSocket("wss://territorial.io/s52/")).onopen = nX, e ? e.showToast(nU) : alert(nU)
	})
}

function nc() {
	var nd = -15e3,
		ne = !1;

	function cL(nU) {
		nx() || (ne = !0, ny(nU, 1), fV.nz(fV.o0), o1(Math.floor(kE * nU.clientX), Math.floor(kE * nU.clientY)))
	}

	function nm(nU) {
		nd = aA.aB, ny(nU, 1), fV.nz(fV.o0), 0 < nU.touches.length && (o2 = Math.floor(kE * nU.touches[0].clientX), o3 = Math.floor(kE * nU.touches[0].clientY), o4.nm(nU) || o1(o2, o3))
	}

	function o1(gY, gZ) {
		0 === g1 ? aH.cL(gY, gZ) : fw.o5(gY, gZ) || m2.cL(gY, gZ) || kA.cL(gY, gZ) || fu.cL(gY, gZ) || m1.o6(gY, gZ) || fl.cL(gY, gZ) || m0.cL(gY, gZ) || o7.o8(gY, gZ) || fo.cL(gY, gZ) || m1.o9(gY, gZ)
	}

	function ni(nU) {
		nx() || (ne = !0, ny(nU, 1), oA(Math.floor(kE * nU.clientX), Math.floor(kE * nU.clientY)))
	}

	function nn(nU) {
		nd = aA.aB, ny(nU, 1), 0 < nU.touches.length && (o2 = Math.floor(kE * nU.touches[0].clientX), o3 = Math.floor(kE * nU.touches[0].clientY), o4.nn(nU) || oA(o2, o3))
	}

	function oA(gY, gZ) {
		0 === g1 ? aH.ni(gY, gZ) : m2.ni(gY, gZ) || (m0.ni(gY, gZ), m1.oB() ? m1.ni(gY, gZ) : fn.oC ? fn.ni(gY, gZ) && (aA.cJ = !0) : (fh.ni(gY, gZ), hH.hI && hH.ni(gY, gZ) && (aA.cJ = !0)))
	}

	function nk(nU) {
		nx() || (ny(nU, 1), 0 === g1 ? (aH.click(-1024, -1024), oD.oE()) : (fh.oF(-1024, -1024), m0.ni(-1024, -1024), fn.oG(), hH.hI && (hH.hI = !1)))
	}

	function nj(nU) {
		nx() || (ny(nU, 1), oH(Math.floor(kE * nU.clientX), Math.floor(kE * nU.clientY), 2 === nU.button))
	}

	function click(nU) {
		nx() || ny(nU, 1)
	}

	function no(nU) {
		nd = aA.aB, ny(nU, 1), nU && nU.touches && 0 < nU.touches.length && 0 !== g1 ? hH.hI = !1 : o4.oI() || oH(o2, o3, !1)
	}

	function np(nU) {
		nd = aA.aB, ny(nU, 1), oH(o2, o3, !1)
	}

	function nq(nU) {
		oJ.nq(nU)
	}

	function nr(nU) {
		oJ.nr(nU)
	}

	function ns(nU) {
		nx() || ny(nU, 0)
	}

	function oH(gY, gZ, oK) {
		0 === g1 ? aH.click(gY, gZ) : (fh.oF(gY, gZ), m2.oF(), fn.oG(), hH.hI = !1, m1.click(gY, gZ, oK) && (aA.cJ = !0))
	}

	function nl(nU) {
		var gY, gZ, deltaY;
		nx() || (ny(nU, 1), fV.nz(fV.o0), gY = Math.floor(kE * nU.clientX), gZ = Math.floor(kE * nU.clientY), deltaY = nU.deltaY, 1 === nU.deltaMode && (deltaY *= 16), 0 === g1 ? aH.nl(gY, gZ, deltaY) : fh.nl(gY, gZ, deltaY) || (fn.oL(gY, gZ) ? fn
			.nl(deltaY) && (aA.cJ = !0) : hH.nl(gY, gZ, +deltaY)))
	}

	function nt(nU) {
		ny(nU, 0)
	}

	function ny(nU, id) {
		0 === id && (oM.oB || kA.oB || oN.oB) || 1 === id && (oN.k9 || kA.k9) || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aH.oP() && nU.preventDefault()
	}

	function nu(nU) {
		nx() || aA.aB < 400 || (8 !== aH.oP() && aH.oQ(nU) ? aA.cJ = !0 : "Escape" === nU.key ? aH.aI() : "ArrowLeft" === nU.key || "a" === nU.key ? hL.oR(3) : "ArrowUp" === nU.key || "w" === nU.key ? hL.oR(0) : "ArrowRight" === nU.key || "d" === nU
			.key ? hL.oR(1) : "ArrowDown" === nU.key || "s" === nU.key ? hL.oR(2) : "h" === nU.key ? 1 <= g1 && fw.oS(!hG) : " " === nU.key && g1 && (m0.oT && m0.oU(), hD) && fw.oV(!1))
	}

	function nv(nU) {
		nx() || ("ArrowLeft" === nU.key || "a" === nU.key ? hL.oW(3) : "ArrowUp" === nU.key || "w" === nU.key ? hL.oW(0) : "ArrowRight" === nU.key || "d" === nU.key ? hL.oW(1) : "ArrowDown" === nU.key || "s" === nU.key ? hL.oW(2) : "1" === nU.key ?
			fn.oX(.75) : "2" === nU.key ? fn.oX(7 / 8) : "3" === nU.key ? fn.oX(.9375) : "4" === nU.key ? fn.oX(31 / 32) : "5" === nU.key ? fn.oX(32 / 31) : "6" === nU.key ? fn.oX(16 / 15) : "7" === nU.key ? fn.oX(8 / 7) : "8" === nU.key ? fn.oX(
				4 / 3) : "+" === nU.key ? 0 !== g1 && hH.nl(Math.floor(gg / 2), Math.floor(cP / 2), -200) : "-" === nU.key ? 0 !== g1 && hH.nl(Math.floor(gg / 2), Math.floor(cP / 2), 200) : "c" === nU.key && 0 !== g1 && m2.oY())
	}

	function nw() {
		"hidden" === document.visibilityState ? aA.oZ() : aA.oa()
	}

	function nx() {
		return nd + 15e3 > aA.aB
	}

	function resize() {
		od.oe()
	}
	this.nf = 0, this.ng = "", this.c5 = function() {
		nh.addEventListener("mousedown", cL, {
			passive: !1
		}), nh.addEventListener("mousemove", ni, {
			passive: !1
		}), nh.addEventListener("mouseup", nj, {
			passive: !1
		}), nh.addEventListener("click", click, {
			passive: !1
		}), nh.addEventListener("mouseleave", nk, {
			passive: !1
		}), nh.addEventListener("wheel", nl, {
			passive: !1
		}), nh.addEventListener("touchstart", nm, {
			passive: !1
		}), nh.addEventListener("touchmove", nn, {
			passive: !1
		}), nh.addEventListener("touchend", no, {
			passive: !1
		}), nh.addEventListener("touchcancel", np, {
			passive: !1
		}), nh.addEventListener("dragover", nq), nh.addEventListener("drop", nr), nh.addEventListener("dblclick", ns), document.addEventListener("contextmenu", nt), document.addEventListener("keyup", nu), document.addEventListener("keydown",
			nv), document.addEventListener("visibilitychange", nw), window.addEventListener("resize", resize)
	}, this.o8 = function(gY, gZ) {
		return !!fw.cL(gY, gZ) || !!(fh.cL(gY, gZ) || hH.cL(gY, gZ) || fn.cL(gY, gZ) || fR.cL(gY, gZ))
	}, this.ob = nx, this.oc = function() {
		return !ne || 0 < nd
	}
}

function og() {
	this.hi = new oh, this.kr = new oi, this.iY = new oj
}

function oi() {
	this.ks = function(aR) {
		aR.fill(0)
	}, this.ok = function(aR) {
		for (var bH = aR.length, a2 = 0; a2 < bH; a2++) aR[a2] = []
	}, this.ol = function(ck, c3) {
		for (var cl = de.aN, a2 = 0; a2 < 3; a2++) cl[a2] = c3 * ck[a2];
		return cl
	}, this.om = function(ck, cl, on) {
		for (var cp = 0, a2 = 0; a2 < 3; a2++) cp += Math.abs(ck[a2] - cl[a2]);
		return on <= cp
	}, this.oo = function(ck, op) {
		for (var a2 = 0; a2 < 3; a2++) ck[a2] = bx.oq(ck[a2] + op, 0, 255);
		return ck
	}
}

function oh() {
	this.kh = function(cG, eH) {
		var eo = document.createElement("canvas");
		return eo.width = cG, eo.height = eH, eo
	}, this.getContext = function(or, alpha) {
		return or.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(hi, cG, eH) {
		return hi.getImageData(0, 0, cG, eH)
	}, this.hj = function(mj, os, e8) {
		return "rgb(" + mj + "," + os + "," + e8 + ")"
	}, this.hl = function(mj, os, e8, dx) {
		return "rgba(" + mj + "," + os + "," + e8 + "," + dx.toFixed(3) + ")"
	}, this.kC = function(ot, gY, gZ, cG, eH) {
		var hQ = 1 / kE,
			ou = .02 * hQ * eH,
			ov = hQ * ow;
		ot.padding = ou.toFixed(2) + "px", ot.border = ov.toFixed(2) + "px solid " + cY.cZ, ot.left = (hQ * gY).toFixed(2) + "px", ot.top = (hQ * gZ).toFixed(2) + "px", ot.width = (hQ * cG - 2 * ou - 2 * ov).toFixed(2) + "px", ot.height = (hQ *
			eH - 2 * ou - 2 * ov).toFixed(2) + "px"
	}, this.kD = function(dt, type) {
		return dt = dt.toFixed(2), 0 === type ? dt + "px " + settings.fontName : 1 === type ? "bold " + dt + "px " + settings.fontName : 2 === type ? "small-caps " + dt + "px " + settings.fontName : "small-caps bold " + dt + "px " + settings
			.fontName
	}, this.textAlign = function(ox, id) {
		ox.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(ox, id) {
		ox.textBaseline = 1 === id ? "middle" : "bottom"
	}, this.k3 = function() {
		return 1 + .5 * o
	}
}

function oj() {
	this.jb = function(a8) {
		return 0 === a8 ? 1 === g1 && hC : 1 === a8 ? 1 === g1 && !hC : 1 <= g1 && !hC
	}, this.jc = function(player) {
		return 0 !== dG[player] && 2 !== dH[player]
	}, this.jh = function(oy, oz) {
		return oy !== oz
	}, this.jC = function(player, aF) {
		return aF = this.p0(player, aF), bB[player] += aF, aF
	}, this.p0 = function(player, aF) {
		var p1 = bB[player];
		return aF = Math.min(aF, bi[player] * p2 - p1), aF = Math.min(aF, p3 - p1), Math.max(aF, 0)
	}, this.ji = function(player, dK, p4, p5) {
		var p1 = bB[player],
			dK = bx.by(p1 * (dK + 1), 1024),
			p4 = bx.by(p4 * p1, 1024),
			dK = Math.min(dK, p1 - p4);
		return 10 === fF && (dK = fa.p7(player, dK)), de.aL[0] = dK, de.aL[1] = p4, p5 <= dK
	}, this.j9 = function(player, io, im) {
		var player = bB[player],
			p6 = bx.by(64 * player, 1024);
		return io = Math.min(io, player - p6), p6 += player = this.p9(io), io = this.p0(im, io -= player), de.aL[0] = io, de.aL[1] = p6, 1 <= io
	}, this.jB = function(io, im) {
		var p8 = this.p9(io);
		return io = this.p0(im, io -= p8), de.aL[0] = io, de.aL[1] = p8, 1 <= io
	}, this.dJ = function(player, pA) {
		return bx.by(bB[player] * (pA + 1), 1024)
	}, this.p9 = function(pB) {
		return bx.by(Math.max(2142 - aA.en(), 0) * pB, 2142)
	}, this.jw = function(player, p4) {
		bB[player] -= bx.by(p4 * bB[player], 1024)
	}, this.jk = function(player) {
		bB[player] -= de.aL[0] + de.aL[1]
	}, this.jj = function(player, dp) {
		return (dp = Math.min(dp, bM)) < bM && 0 === dG[dp] && (dp = bM), (de.aP[0] = dp) === bM || e3(player, dp)
	}, this.jm = function(player, im) {
		return 0 !== dG[im] && !e3(player, im)
	}
}

function pC() {
	this.dl = function(player, cr) {
		pD.lo(player, jd.ch(cr), jd.cj(cr)) && (aA.cJ = !0), fH && this.eY()
	}, this.eY = function() {
		var a2;
		for (hC = !1, a2 = 0; a2 < dF; a2++) 0 !== dG[a2] && 0 === bi[a2] && pD.lu(a2);
		0 !== dG[bA] ? (bE.bF[7] = bi[bA], bE.bF[8] = bB[bA], fn.cS(), fT.pE(), hD || ft.hB(eL[bA] - 5, eO[bA] - 5, eK[bA] + 5, eN[bA] + 5), fv.c5()) : fu.show(!1, !1), fR.pF(18), fS.pG(), fS.g0(!0), fj.ff.pH(), jg = null, he.pI = !0, he.pJ(),
			fH && a7(1)
	}
}
var fH, hD, pK, p3, pL, bA, hG, hC, pM, di, pN, fF, nP, jg, mx, pO, eZ, b8, fd, fe, ft, pD, k, m1, m0, fR, pn, fl, cH, fn, hH, oD, fk, fh, fT, fu, po, pp, aH, pq, oN, pr, fI, pm, cC, bJ, f, as, bC, fS, pc, fL, pa, lC, ps, hL, pt, e0, gR, lw, o4, pu,
	fv, ih, od, pv, pw, fo, fx, fV, fb, gm, px, fc, fa, fm, oJ, fB, py, et, fr, kA, hh, cY, fw, kU, pz, jX, kg, q0, o7, q1, bx, jd, dY, de, fj, fq, fW, bM = 512,
	lQ = 512,
	p2 = 150,
	g1 = 0,
	lh = 512,
	b7 = 2;

function pP(pQ, pR, mD, pS, pT, pU) {
	hG = !1, hD = pU, nP = pT, di = (fF = pS) < 7 || 9 === fF, n3 = dF = mD.length, fH = 1 === n3, pN = 9 === (fF = 8 === (fF = 10 === fF && fH ? 7 : fF) && 2 !== dF ? 7 : fF) ? 2 : fF + 2, pO = dF <= 2 ? 30 : dF <= 50 ? 40 : 50, pM = hC = !(fB.fC &&
			!fB.fD.pV) && (di || dF < 100), jg = hC ? new pC : null, lh = 512, lQ = bM, fH && (lQ = fI.pW()), fA = lQ - dF, n2 = 0, bA = pR, e0.pX(pQ), fL.c5(), pY(mD), ep.c5(mD), g1 = 1, p3 = 15e8, pL = 1e9, bE.c5(), pZ(), pa.pb(), he.c5(), bC.c5(),
		eT(), bJ.c5(mD), lw.c5(), jd.c5(), dY.c5(), fW.c5(), eZ.c5(), pc.kV(), pc.pd(), pD.c5(), pe(), fr.c5(pQ, mD, pS, pT), fp.c5(), fq.c5(), fj.c5(), m2.c5(), pf.putImageData(pg, 0, 0), fh.c5(), hH.c5(), fn.c5(), fw.c5(), fo.c5(), fk.c5(), fT
	.c5(), m0.c5(), cH.c5(), fR.c5(), fl.c5(), m1.c5(), fu.c5(), fe.c5(), b8.c5(), fd.c5(), am(), as.c5(), fS.c5(), fa.c5(), fc.c5(), fm.c5(), fb.c5(), 8 === fF ? (mx = new mC).c5(mD) : mx = null, aA.ph(), pi(), fv.c5(), aA.cJ = !0, hD || fH && hC ||
		a7(1)
}

function pi() {
	ft.hA(), 0 === dG[bA] && fu.show(!1, !0), fS.g0(!0)
}

function pj(pk) {
	kA.kB(), fV.close(fV.o0, 3246), g1 = 0, aA.pl(), a7(0), pm.c5(!pk)
}

function q2() {
	bx = new q3, q1 = new q4, eZ = new ez, b8 = new g3, fd = new gH, fe = new gK, ft = new gr, pD = new lF, k = new mT, m1 = new q5, m0 = new q6, fR = new q7, pn = new q8, fl = new q9, cH = new qA, fn = new qB, hH = new qC, oD = new qD, fk = new qE,
		fh = new qF, fT = new qG, fu = new qH, po = new qI, pp = new qJ, aH = new qK, (pq = new qL).kV(), oN = new qM, pr = new qN, fI = new qO, pm = new qP, cC = new qQ, bJ = new qR, f = new qS, as = new qT, bC = new qU, fS = new qV, pc = new qW,
		fL = new qX, pa = new qY, lC = new qZ, ps = new qa, hL = new qb, pt = new qc, e0 = new qd, gR = new qe, lw = new qf, o4 = new qg, pu = new qh, fv = new qi, ih = new qj, od = new qk, pv = new ql, pw = new qm, fo = new qn, fx = new qo, fV =
		new qp, fb = new qq, gm = new qr, px = new qs, fc = new qt, fa = new qu, fm = new qv, oJ = new qw, fB = new qx, py = new qy, et = new iV, fr = new qz, kA = new r0, hh = new og, cY = new hg, fw = new r1, kU = new nY, (pz = new mN).c5(), jX =
		new r2, (kg = new kM).c5(), q0 = new r3, o7 = new nc, jd = new ca, dY = new r4, de = new aJ, fj = new r5, fq = new r6, fW = new ml
}

function q5() {
	var r7, gY, gZ, r8, r9, rA, aB, player, rB, lc, zoom, jL, rC;

	function rS(player) {
		for (var a2 = jL.length - 1; 0 <= a2; a2--)
			if (jL[a2] === player) return 1
	}

	function rQ(rN) {
		var a2, bH;
		if (-1 !== rN)
			for (bH = r7.length, a2 = 0; a2 < bH; a2++)
				if (r7[a2].oB && r7[a2].gY + 1 === rN % 4 && r7[a2].gZ + 1 === rN >> 2) return a2;
		return -1
	}

	function rP(cM, cN) {
		var os = lc / 2;
		return cM < gY - r8 - 3 * os || gY + 3 * r8 + 5 * os < cM || cN < gZ - r8 - 3 * os || gZ + 2 * r8 + 3 * os < cN ? -1 : 4 * (cN < gZ - os ? 0 : cN < gZ + r8 + os ? 1 : 2) + (cM < gY - os ? 0 : cM < gY + r8 + os ? 1 : cM < gY + 2 * r8 + 3 *
			os ? 2 : 3)
	}
	this.rD = function() {
		var a2, e8, rG = [cY.i8, cY.iH, cY.hp, cY.iT, cY.iN];
		for (r7 = new Array(8), a2 = 0; a2 < 8; a2++) r7[a2] = {
			id: a2,
			oB: !1,
			rH: 0,
			or: [],
			gY: 0,
			gZ: 0
		};
		for (r7[0].colors = [0, 1, 2, 3], r7[0].gY = 0, r7[0].gZ = 0, r7[1].colors = [0, 1, 4], r7[1].gY = 1, r7[1].gZ = 0, r7[2].colors = [0, 2], r7[2].gY = -1, r7[2].gZ = 0, r7[3].colors = [0], r7[3].gY = 0, r7[3].gZ = 0, r7[4].colors = [0, 2],
			r7[4].gY = 1, r7[4].gZ = 1, r7[5].colors = [3], r7[5].gY = 0, r7[5].gZ = -1, r7[6].id = 20, r7[6].colors = [0], r7[6].gY = 1, r7[6].gZ = -1, r7[7].id = 21, r7[7].colors = [0], r7[7].gY = 0, r7[7].gZ = 1, a2 = 0; a2 < 8; a2++)
			for (e8 = 0; e8 < r7[a2].colors.length; e8++) r7[a2].or.push(function(id, rI) {
				var m7 = cC.get(3).height,
					rJ = hh.hi.kh(m7, m7),
					ox = hh.hi.getContext(rJ);
				20 === id ? ox.drawImage(cC.get(18), 0, 0) : 21 === id ? ox.drawImage(cC.rK("emojis"), -4 * m7, 0) : (function(cG, hi, rM) {
					hi.fillStyle = rM, hi.beginPath(), hi.arc(Math.floor(cG / 2), Math.floor(cG / 2), Math.floor(.47 * cG), 0, 2 * Math.PI), hi.fill()
				}(m7, ox, rI), ox.drawImage(cC.get(3), -id * m7, 0));
				return rJ
			}(r7[a2].id, rG[r7[a2].colors[e8]]))
	}, this.rF = function() {
		return r7
	}, this.c5 = function() {
		jL = [], gY = gZ = aB = 0, r9 = rA = -1e3, this.resize()
	}, this.resize = function() {
		r8 = Math.floor((o ? .075 : .0468) * c6), zoom = r8 / cC.get(3).height, lc = Math.floor(r8 / 3)
	}, this.o6 = function(cM, cN) {
		return !!this.oB() && (aA.cJ = !0, !!a3.cL(cM, cN, player) || (cM = function(cM, cN) {
			var rN, a2;
			if (rA = r9 = -1e3, rN = rP(cM, cN), -1 === (rN = rQ(rN))) return 0;
			if (1 === r7[rN].colors[r7[rN].rH]) return 0;
			if (5 === rN) {
				if (! function() {
						var r = (new Date).getTime();
						rC + 4e3 < r && (jL = []);
						rC = r
					}(), rS(player)) return 1;
				jL.push(player), 16 < jL.length && jL.shift()
			} else if (6 === rN) {
				for (a2 = jL.length - 1; 0 <= a2; a2--) 0 === dG[jL[a2]] && jL.splice(a2, 1);
				0 < jL.length && (fm.rT(1, jL, !0) && et.iY.jK(jL, player), jL = [])
			} else if (2 === rN) fR.rU(), et.iW.il(fn.rV(), player);
			else if (3 === rN) hC && et.iW.ig(rB);
			else if (0 === rN)
				if (0 === r7[0].rH) {
					if (pM && fT.rW() < 300) return 1;
					fR.rU(), et.iW.ij(fn.rV(), player)
				} else fb.rX(player, fn.rV());
			else if (1 === rN) et.iW.iq(fn.rV(), rB);
			else {
				if (7 === rN) return a3.show(cM, cN), 2;
				if (4 !== rN) return 0;
				fm.rT(0, [player], !0) && et.iY.jH(player)
			}
			return 1
		}(cM, cN), this.kB(), 2 === cM && (a3.oB = !0), 0 < cM))
	}, this.o9 = function(cM, cN) {
		this.oB() || (r9 = cM, rA = cN, aB = (new Date).getTime())
	}, this.click = function(cM, cN, oK) {
		var d1 = jd.dO(cM),
			d2 = jd.dP(cN),
			cr = jd.dR(d1, d2),
			d0 = jd.dT(cr);
		return !(!jd.dQ(d1, d2) || (d1 = (o ? .025 : .0144) * c6, Math.abs(cM - r9) > d1) || Math.abs(cN - rA) > d1 || performance.now() > aB + 425) && (oK ? (function(cM, cN, d0) {
			bJ.bK(d0) || -1 === (cM = dY.ir.rp(cM, cN)) ? fR.ro(d0) : fR.rq(cM)
		}(cM, cN, d0), !1) : m0.oT || this.oB() || !jd.dI() || hD ? (this.kB(), !1) : hC ? !!bJ.bK(d0) && (rB = cr, r7[3].oB = !0, this.ra(cM, cN)) : (dY.ir.iu(cr) || dY.ir.rb(cM, cN) || (2 === g1 ? bJ.bS(d0) && 0 < a3.rc && (player = bJ
			.bT(d0), bJ.rd(player)) && (r7[0].oB = !0, r7[0].rH = 1, r7[7].oB = !0) : bJ.re(d0) || (rB = cr, dY.ir.is(bA, cr) && (r7[0].oB = !0, r7[0].rH = 1, r7[1].oB = !0, r7[1].rH = de.aO[2] ? 0 : 2), bJ.rf(d0)) || (bJ.bU(d0) ?
			(player = bM, rg(bA) ? (r7[0].oB = !0, r7[0].rH = 0) : rh(bA, player) && (r7[0].oB = !0, r7[0].rH = 3)) : (player = bJ.bT(d0)) === bA ? 0 !== a3.rc && (r7[0].oB = !0, r7[0].rH = 1, r7[7].oB = !0) : (r7[0].rH = 1, r7[5]
				.oB = function(player) {
					return bJ.rd(player) && !rS(player) && fm.rT(1, [player], !1)
				}(player), r7[7].oB = 1 <= a3.rc && bJ.rd(player), e3(player, bA) ? (r7[4].oB = bJ.rd(player) && !fS.rj(player) && fm.rT(0, [player], !1), r7[6].oB = function(player) {
					if (0 === jL.length) return !1;
					if ((new Date).getTime() > rC + 4e3) return !(jL = []);
					return !rS(player) && ! function(player) {
						var a2;
						if (di)
							for (a2 = jL.length - 1; 0 <= a2; a2--)
								if (!e3(player, jL[a2])) return 1;
						return
					}(player)
				}(player), rl(bA, player) ? (r7[0].rH = 0, r7[0].oB = !0) : rh(bA, player) && (r7[0].rH = 3, r7[0].oB = !0), r7[0].oB = this.rm()) : (r7[2].oB = !0, r7[0].oB = !0)))), this.ra(cM, cN)))
	}, this.ra = function(cM, cN) {
		return gY = cM - Math.floor(r8 / 2), gZ = cN - Math.floor(r8 / 2), !!this.oB()
	}, this.ni = function(cM, cN) {
		return !!this.oB() && (a3.oB ? !a3.rs(cM, cN) && (a3.rt(), a3.oB = !1, aA.cJ = !0) : function(rv, cM, cN) {
			cM = rP(cM, cN);
			if (0 <= rQ(cM)) return !1;
			if ((1 === cM || 6 === cM) && 0 <= rQ(2)) return !1;
			if ((6 === cM || 9 === cM) && 0 <= rQ(10)) return !1;
			return rv.kB(), aA.cJ = !0
		}(this, cM, cN))
	}, this.kB = function() {
		for (var a2 = r7.length - 1; 0 <= a2; a2--) r7[a2].oB = !1, r7[a2].rH = 0;
		a3.oB = !1
	}, this.oB = function() {
		return this.rm() || a3.oB
	}, this.rm = function() {
		for (var bH = r7.length, a2 = 0; a2 < bH; a2++)
			if (r7[a2].oB) return !0;
		return !1
	}, this.cU = function() {
		if (this.oB())
			if (a3.oB) a3.cU();
			else {
				var a2, ox = cV,
					e8 = r7,
					bH = e8.length,
					rx = (r8 + lc) / zoom;
				for (ox.imageSmoothingEnabled = !0, ox.setTransform(zoom, 0, 0, zoom, gY, gZ), a2 = 0; a2 < bH; a2++) e8[a2].oB && cV.drawImage(e8[a2].or[e8[a2].rH], e8[a2].gY * rx, e8[a2].gZ * rx);
				ox.imageSmoothingEnabled = !1, ox.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function q6() {
	var eH, or, cF, rz, s0, ry = ["Quit Game", "Surrender", "Statistics", "Replay"];

	function s1() {
		var s2, hi = or.getContext("2d", {
			alpha: !0
		});
		hi.clearRect(0, 0, eH, eH), hi.fillStyle = cY.hm, hi.fillRect(0, 0, eH, eH), 0 === rz && (hi.fillStyle = cY.hq, hi.fillRect(0, 0, eH, eH)), hi.fillStyle = cY.cZ, hi.fillRect(0, 0, eH, 1), hi.fillRect(0, 0, 1, eH), hi.fillRect(0, eH - 1, eH,
			1), hi.fillRect(eH - 1, 0, 1, eH), s2 = .9 * eH / cC.get(0).width, hi.imageSmoothingEnabled = !0, hi.setTransform(s2, 0, 0, s2, Math.floor((eH - s2 * cC.get(0).width) / 2), Math.floor((eH - s2 * cC.get(0).height) / 2)), hi.drawImage(
			cC.get(0), 0, 0), hi.setTransform(1, 0, 0, 1, 0, 0)
	}

	function s5(cM, cN) {
		if (!m0.oT) return cM <= eH + k4 && cN >= fn.gZ ? 0 : -1;
		if (cM <= 4 * eH + k4) {
			if (cN >= fn.gZ) return 0;
			if (cN >= fn.gZ - eH - s0 * k4) return s8(2) ? 2 : -1;
			if (cN >= fn.gZ - 2 * (eH + s0 * k4)) return s8(3) ? 3 : -1;
			if (cN >= fn.gZ - 3 * (eH + s0 * k4)) return s8(4) ? 4 : -1
		} else if (cM <= 7 * eH + k4 && cN >= fn.gZ - eH - s0 * k4) return 1;
		return -1
	}

	function s8(a2) {
		return 2 === a2 ? s6(2) || s6(3) || s6(4) : 3 === a2 && s6(3) || s6(4)
	}

	function s6(a2) {
		return 2 === a2 ? !hD && m0.sD(bA) : 3 === a2 ? 2 <= bE.sE : kA.sF()
	}

	function sH(a2, rI) {
		cV.setTransform(1, 0, 0, 1, k4, fn.gZ - a2 * s0 * k4 - a2 * eH), cV.fillStyle = cY.hm, cV.fillRect(0, 0, 4 * eH, eH), rz === a2 + 1 && rI === cY.cZ && (cV.fillStyle = cY.hq, cV.fillRect(0, 0, 4 * eH, eH)), cV.fillStyle = rI, cV.fillRect(0, 0,
			4 * eH, 1), cV.fillRect(0, 0, 1, eH), cV.fillRect(4 * eH, 0, 1, eH), cV.fillRect(0, eH - 1, 4 * eH, 1), cV.fillText(ry[a2], 2 * eH, .54 * eH)
	}
	this.oT = !1, this.c5 = function() {
		rz = -1, this.oT = !1, s0 = o ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		eH = fn.eH, (or = document.createElement("canvas")).width = eH, or.height = eH, cF = c9 + Math.floor((o ? .5 : .45) * eH) + cA, s1()
	}, this.oU = function() {
		this.oT = !this.oT, this.oT ? (fw.oS(!1), hD && fw.s3 && fw.oV(!0), this.s4()) : (rz = -1, s1(), fH && 1 === g1 && !hC && a7(1)), aA.cJ = !0
	}, this.s4 = function() {
		(fH || hD) && 1 === g1 && (fh.g0(!0), hC || setTimeout(function() {
			he.n6()
		}, 0), a7(0))
	}, this.cL = function(cM, cN) {
		var rH = s5(cM, cN);
		if (this.oT) {
			if (hG) return 0 <= rH && fw.oS(!1), !hD;
			if (0 === rH) pj();
			else if (1 === rH) this.oU();
			else if (2 === rH) s6(rH) && (et.iW.j7(), this.oU());
			else if (3 === rH) s6(rH) && (m2.oU(), aA.cJ = !0, kA.oB) && kA.kB();
			else if (4 === rH) s6(rH) && (kA.oB ? kA.kB() : kA.show(), m2.oB) && m2.oU();
			else {
				if (!(fH || 1 !== g1 || hD || m2.oB || kA.oB) && (m0.oU(), 1)) return !1;
				o7.o8(cM, cN) || m1.o9(cM, cN)
			}
			return !0
		}
		return 0 === rH && (this.oU(), !0)
	}, this.ni = function(cM, cN) {
		cM = s5(cM, cN);
		cM !== rz && (rz = cM, this.oT || s1(), aA.cJ = !0)
	}, this.cU = function() {
		var cG;
		this.oT ? (cG = Math.floor(5.5 * eH), cV.setTransform(1, 0, 0, 1, k4, fn.gZ), cV.fillStyle = cY.hm, cV.fillRect(0, 0, cG, eH), 0 === rz ? (cV.fillStyle = cY.hq, cV.fillRect(0, 0, 4 * eH, eH)) : 1 === rz && (cV.fillStyle = cY.hq, cV
				.fillRect(4 * eH, 0, Math.floor(1.5 * eH), eH)), cV.fillStyle = cY.cZ, cV.fillRect(0, 0, cG, 1), cV.fillRect(0, 0, 1, eH), cV.fillRect(4 * eH, 0, 1, eH), cV.fillRect(0, eH - 1, cG, 1), cV.fillRect(cG - 1, 0, 1, eH), cV.font =
			cF, cV.textBaseline = cW, cV.textAlign = cX, cV.fillText(ry[0], 2 * eH, .54 * eH), cG = .4 * eH, m0.sG(k4 + 4 * eH + (1.5 * eH - cG) / 2, fn.gZ + .3 * eH, cG), s8(2) && sH(1, s6(2) ? cY.cZ : cY.hw), s8(3) && sH(2, s6(3) ? cY.cZ :
				cY.hw), s8(4) && sH(3, cY.cZ), cV.setTransform(1, 0, 0, 1, 0, 0)) : cV.drawImage(or, k4, fn.gZ)
	}, this.sD = function(player) {
		return 0 !== dG[player] && 2 !== g1 && bJ.rd(player)
	}, this.sG = function(gY, gZ, bH) {
		cV.setTransform(1, 0, 0, 1, gY, gZ), cV.lineWidth = ow, cV.strokeStyle = cY.cZ, cV.beginPath(), cV.moveTo(0, 0), cV.lineTo(bH, bH), cV.moveTo(0, bH), cV.lineTo(bH, 0), cV.stroke()
	}
}

function q7() {
	var sI, eH, ov, sJ, sK, sL, sM, sN, sO;

	function cT() {
		return fn.si(fR.se()) ? fo.oB ? fn.gZ - fn.eH - 2 * ov : fn.gZ - ov : fw.si(fR.sh()) ? fo.oB ? fw.cT() - fn.eH - 2 * ov : fw.cT() - ov : fo.oB ? q - fn.eH - (gm.sj() + 1) * ov : q - gm.sj() * k4
	}

	function sW(r, j, id, bP, sZ, sa, l2, sb, sc) {
		var a2, hi, sf, rJ, sm, sn = void 0 !== sc,
			cG = Math.floor(cH.measureText(j, fR.cF) + 1.5 * sJ + (sn ? eH : 1.5 * sJ));
		if (p < cG + ov && !sn && 50 !== id && 20 < j.length) sf = Math.floor(.5 * j.length), sW(r, j.substring(0, sf), id, bP, sZ, sa, l2, sb, sc), sW(r, j.substring(sf), id, bP, sZ, sa, l2, sb, sc);
		else if (sf = cG + (50 === id ? sK : 0), (rJ = document.createElement("canvas")).width = cG, rJ.height = eH, (hi = rJ.getContext("2d", {
				alpha: !0
			})).font = fR.cF, hi.textBaseline = cW, hi.textAlign = so, hi.clearRect(0, 0, cG, eH), hi.fillStyle = sa, hi.fillRect(0, 0, cG, eH), hi.fillStyle = sZ, hi.fillText(j, Math.floor(1.5 * sJ), Math.floor(eH / 2)), sn && (sn = eH / a3.cG, hi
				.imageSmoothingEnabled = !0, hi.setTransform(sn, 0, 0, sn, cG - eH, 0), hi.drawImage(a3.rJ[sc], 0, 0)), 0 === (sm = {
				aB: r,
				j: j,
				id: id,
				player: bP,
				or: rJ,
				sZ: sZ,
				sa: sa,
				cG: cG,
				sf: sf,
				l2: l2,
				sb: sb,
				sc: sc
			}).aB || 0 < sI.length && 0 < sI[0].aB) sI.unshift(sm);
		else {
			for (a2 = 1; a2 < sI.length; a2++)
				if (0 < sI[a2].aB) return void sI.splice(a2, 0, sm);
			sI.push(sm)
		}
	}

	function sr(id, gF) {
		for (var t3 = 0, bH = sI.length, a2 = 0; a2 < bH; a2++)
			if (sI[a2].id === id && gF <= ++t3) return void sI.splice(a2, 1)
	}

	function sX(mj, os, e8) {
		return "rgb(" + mj + "," + os + "," + e8 + ")"
	}

	function sw(id, tA) {
		for (var bH = sI.length, a2 = 0; a2 < bH; a2++) sI[a2].id === id && tA-- <= 0 && (sI.splice(a2, 1), a2--, bH--)
	}

	function sp(id, player) {
		for (var tB = !1, a2 = sI.length - 1; 0 <= a2; a2--) sI[a2].id !== id || player !== bM && sI[a2].player !== player || (sI.splice(a2, 1), tB = !0);
		return tB
	}

	function tF(aF) {
		return 1 === aF ? "" : "s"
	}

	function tI(j, aS, aU) {
		aS && (j += fl.gp(aS)), aU && (j += " (" + fT.tJ(100 * aS / aU, 1) + ")"), sW(340, j, 6, 0, sX(215, 245, 255), cY.ho, -1, !1)
	}

	function tR(player, tS) {
		return (fH || dF <= player || tS || gm.gn.tT ? gq : tU)[player]
	}
	this.c5 = function() {
		sM = o ? 7 : 12, sL = {
			mD: [sN = 0, 0, 0],
			sP: [0, 0, 0],
			h8: [220, 180, 180],
			sQ: [0, 0, 0],
			eo: [0, 0, 0],
			sR: [" were erased.", " left the game.", " surrendered."],
			sS: [" was erased by ", " left the game.", " surrendered."]
		}, sI = [], this.resize(), hC && this.ms(0, 18), tI("Map: " + lC.tK()), tI("Dimension: " + (an - 2) + "x" + (ao - 2)), tI("Overall Pixels: ", pa.tL), pa.tL !== pa.tM && tI("Land: ", pa.tM, pa.tL), 0 < pa.tN && tI("Water: ", pa.tN, pa
			.tL), 0 < pa.tO && tI("Mountains: ", pa.tO, pa.tL), 10 === fF && sW(120, "Full sending against human players is disabled.", 6, 0, sX(235, 255, 120), cY.ho, -1, !1), this.sU()
	}, this.sU = function() {
		var a2, bH;
		if (fB.fC)
			for (bH = fB.fD.sV.length, a2 = 0; a2 < bH; a2++) sW(400, fB.fD.sV[a2], 6, 0, sX(255, 255, 255), cY.ho, -1, !1)
	}, this.resize = function() {
		var sY, a2;
		if (eH = (eH = Math.floor((o ? .031 : .0249) * c6)) < 10 ? 10 : eH, this.cE = Math.floor(2 * eH / 3), this.cF = c9 + this.cE + cA, ov = k4, sJ = Math.floor(eH / 5), 0 < sI.length)
			for (sY = sI, sI = [], a2 = sY.length - 1; 0 <= a2; a2--) sW(sY[a2].aB, sY[a2].j, sY[a2].id, sY[a2].player, sY[a2].sZ, sY[a2].sa, sY[a2].l2, sY[a2].sb, sY[a2].sc);
		this.sd()
	}, this.sd = function() {
		sO = document.createElement("canvas");
		var j = "Accept",
			hi = (sK = cH.measureText(j, this.cF) + 5 * sJ, sO.height = eH, sO.width = sK, sO.getContext("2d", {
				alpha: !0
			}));
		hi.font = this.cF, hi.textBaseline = cW, hi.textAlign = cX, hi.clearRect(0, 0, sK, eH), hi.fillStyle = cY.i5, hi.fillRect(0, 0, sK, eH), hi.fillStyle = cY.cZ, hi.fillText(j, Math.floor(sK / 2), Math.floor(eH / 2))
	}, this.se = function() {
		var bH;
		return fo.oB ? fo.cG : 0 === (bH = sI.length) ? 0 : 1 === bH ? sI[0].sf : sg(sI[0].sf, sI[1].sf)
	}, this.sh = function() {
		var bH = sI.length;
		return fo.oB ? bH ? sg(fo.cG, sI[0].sf) : fo.cG : 0 === bH ? 0 : 1 === bH ? sI[0].sf : 2 === bH ? sg(sI[0].sf, sI[1].sf) : sg(sg(sI[0].sf, sI[1].sf), sI[2].sf)
	}, this.cL = function(gY, gZ) {
		for (var sk, sl = cT(), a2 = sI.length - 1; 0 <= a2; a2--)
			if ((sk = sl - (a2 + 1) * eH) <= gZ && gZ < sk + eH) return 50 === sI[a2].id ? gY >= gg - sK - ov - sI[a2].cG && (gg - sK - ov <= gY ? et.iY.jH(sI[a2].player) : ft.hE(sI[a2].player, 800, !1, 0), !0) : gY >= gg - sI[a2].cG - ov && (
				736 === sI[a2].id ? window.open("https://" + sI[a2].j, "_blank") : sI[a2].sb && (ft.hE(sI[a2].player, 800, !1, 0), 0 <= sI[a2].l2) && (sk = sI[a2].l2, sI[a2].l2 = sI[a2].player, sI[a2].player = sk), !0);
		return !1
	}, this.nQ = function(r, j, id, bP, sZ, sa, l2, sb, sc) {
		sW(r, j, id, bP, sZ, sa, l2, sb, sc)
	}, this.pF = function(id) {
		for (var a2 = sI.length - 1; 0 <= a2; a2--) sI[a2].id === id && (sI[a2].aB = 1)
	}, this.ms = function(player, id) {
		0 === id ? (bE.bF[player < dF ? 4 : 3]++, cH.dl(player, 0), sW(o ? 100 : 160, "You erased " + gq[player] + ".", 0, player, "rgb(10,220,10)", cY.ho, -1, !1)) : 1 === id ? (sp(50, bM), cH.dl(player, 1), sW(360, "You were erased by " + gq[
				player] + ".", 0, player, "rgb(255,40,40)", cY.ho, -1, !0), ft.hE(player, 2700, !1, 0)) : 2 === id ? (cH.dl(player, 2), sW(0, "Congratulations! You won the game.", 0, player, "rgb(10,255,255)", cY.ho, -1, !0), ft.hE(player, 2700,
				!1, 0)) : 3 === id ? (cH.dl(player, 2), sW(0, gq[player] + " won the game.", 0, player, cY.cZ, cY.ho, -1, !0), ft.hE(player, 2700, !1, 0)) : 4 === id ? (n3--, n2--, this.sq(1, player, player)) : 5 === id ? 2 !== dH[player] && bJ
			.rd(bA) && (sr(1, 5), fS.ss(player) ? sW(180, gq[player] + " broke the non-aggression pact.", 1, player, sX(255, 200, 180), cY.ho, -1, !0) : sW(180, gq[player] + " is attacking you!", 1, player, "rgb(255,70,10)", cY.ho, -1, !0)) :
			18 === id ? sW(255, "Choose your start position!", 18, 0, cY.cZ, cY.ho, -1, !1) : 21 === id ? sW(220, "You surrendered!", id, 0, "rgb(255,40,40)", cY.ho, -1, !1) : 22 === id ? this.sq(2, player, player) : 59 === id && sW(0,
				"The game ended in a stalemate!", id, 0, cY.iS, cY.ho, 0, !1)
	}, this.st = function(su) {
		sW(200, "Error [" + su + "]", 94, 0, cY.cZ, cY.iF, -1, !1)
	}, this.n0 = function(mv) {
		if (bA === mv) wins_counter++, window.localStorage.setItem("fx_win_count", wins_counter);
		cH.dl(mv, 2), sW(0, dF < 100 ? gq[mv] + " won the game." : gq[mv] + " was immortalized!", 3, mv, cY.cZ, cY.ho, -1, !0), sW(0, "Your Current Win Count is Now " + wins_counter, 3, mv, cY.cZ, cY.ho, -1, !0), ft.hE(mv, 2700, !1, 0)
	}, this.ro = function(d0) {
		var j, sv = "(" + jd.ch(d0 >> 2) + ", " + jd.cj(d0 >> 2) + ")",
			sb = !1,
			player = 0;
		bJ.bK(d0) ? bJ.bU(d0) ? sv = "Unclaimed Land " + sv : (player = bJ.bT(d0), j = "Player: " + gq[player], sv = (j += "   Balance: " + fl.gp(bB[player])) + ("   Territory: " + fl.gp(bi[player])) + ("   Coords: " + sv), sb = !0) : sv = bJ.re(
			d0) ? "Mountains " + sv : "Water " + sv, aA.cJ = !0, sw(55, 0), sW(220, sv, 55, player, cY.cZ, cY.ho, -1, sb)
	}, this.rq = function(sx) {
		var kb = dY.ff,
			player = kb.sy[sx],
			kb = "Ship Owner: " + gq[player] + "   Strength: " + fl.gp(kb.sz[sx]);
		aA.cJ = !0, sw(55, 0), sW(220, kb, 55, player, cY.cZ, cY.ho, -1, !0)
	}, this.j0 = function(t0, t1, j1) {
		t0 === bA ? sW(175, " Message to " + gq[t1] + ": ", 1001, t1, sX(200, 255, 210), cY.ho, -1, !0, j1) : this.t2(t0, j1)
	}, this.t2 = function(t0, j1) {
		sw(1e3, 2), sW(175, gq[t0] + ": ", 1e3, t0, cY.cZ, "rgba(5,60,25,0.9)", -1, !0, j1)
	}, this.mz = function(mw) {
		var su;
		mw ? (su = "Humanity triumphs! The undead have been beaten back.", cH.nF("The Resistance", 2, 1, 12), sW(0, su, 40, 0, "rgb(10,220,10)", cY.ho, -1, !1)) : (su = "Mankind's era ends, overrun by the relentless tide of the undead.", cH.nF(
			"The Virus", 2, 0, 16), sW(0, su, 41, 0, "rgb(200,80,80)", cY.ho, -1, !1)), ft.hN(2700)
	}, this.mE = function(mD) {
		sW(300, mD[0].name + " [" + mx.mK(mD[0].mH) + "] vs " + mD[1].name + " [" + mx.mK(mD[1].mH) + "]", 65, 0, cY.gk, "rgba(100,255,255,0.75)", -1, !1)
	}, this.t4 = function(su) {
		sW(200, su, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.t5 = function() {
		sW(0, "Agreeing to peace concludes the game in a stalemate!", 247, 0, cY.iR, cY.ho, -1, !1)
	}, this.mM = function(mD, mJ, mL, t6) {
		1 === fV.t7() && (sW(0, mD[0].name + ": " + mx.mK(mD[0].mH) + " -> " + mJ, 66, 0, cY.cZ, t6[0], -1, !1), sW(0, mD[1].name + ": " + mx.mK(mD[1].mH) + " -> " + mL, 66, 1, cY.cZ, t6[1], -1, !1))
	}, this.jI = function(player, id) {
		0 === id ? sp(50, player) ? (sW(128, "You signed a non-aggression pact with " + gq[player] + ".", 52, player, sX(180, 255, 180), cY.ho, -1, !0), fS.jy(player, 2, 255)) : sW(384, "You asked " + gq[player] +
			" to sign a non-aggression pact.", 51, player, sX(210, 210, 255), cY.ho, -1, !0) : sp(51, player) ? (sW(128, gq[player] + " accepted the non-aggression pact.", 52, player, cY.cZ, "rgba(60,120,10,0.9)", -1, !0), fS.jy(player, 2,
			255)) : (sW(384, gq[player] + " requested a non-aggression pact.", 50, player, cY.cZ, "rgba(90,90,90,0.9)", -1, !0), fS.jy(player, 2, 96))
	}, this.jM = function(mD, target) {
		var j = "You ",
			color = function(mD) {
				var a2;
				for (a2 = mD.length - 1; 0 <= a2; a2--)
					if (2 * bi[mD[a2]] > bi[bA]) return;
				return 1
			}(mD) ? (j += "ordered ", sX(255, 235, 210)) : (j += "asked ", sX(210, 255, 210));
		1 < mD.length ? sW(230, j + mD.length + " players to attack " + gq[target] + ".", 66, target, color, cY.ho, -1, !0) : sW(230, j + gq[mD[0]] + " to attack " + gq[target] + ".", 66, mD[0], color, cY.ho, target, !0)
	}, this.t9 = function(player, target) {
		sW(230, gq[player] + " suggested you attack " + gq[target] + ".", 66, player, cY.cZ, "rgba(75,65,5,0.9)", target, !0)
	}, this.mr = function(id, player) {
		sp(id, player)
	}, this.rU = function() {
		var c8;
		100 <= bB[bA] || (-1 === (c8 = function(id) {
			for (var a2 = sI.length - 1; 0 <= a2; a2--)
				if (sI[a2].id === id) return a2;
			return -1
		}(143)) ? sW(80, "Your balance is too low!", 143, 0, cY.cZ, cY.ho, -1, !1) : sI[c8].aB = 80)
	}, this.jD = function(tD, tE, player) {
		2 !== dH[bA] && (sW(200, "You exported " + fl.gp(tD) + " resource" + tF(tD) + " to " + gq[player] + ".", 30, player, "rgb(190,255,190)", cY.ho, -1, !0), tE) && sW(30, "A tax of " + fl.gp(tE) + " unit" + tF(tE) + " was deducted.", 30, 0,
			cY.cZ, cY.ho, -1, !1)
	}, this.tG = function(tD, player) {
		var r, tH;
		2 !== dH[bA] && (tH = 2 === dH[player] || dF <= player, sW((r = 200 - 20 * sI.length) < 80 ? 80 : r, (tH ? "A bot" : gq[player]) + " supported you with " + fl.gp(tD) + " resource" + tF(tD) + ".", 31, player, cY.gk, tH ?
			"rgba(205,205,205,0.9)" : "rgba(205,255,205,0.9)", -1, !0), sr(31, o ? 4 : 6))
	}, this.n4 = function(tP) {
		for (var eo = aA.en(), a2 = 2; 0 <= a2; a2--) 0 < sL.sQ[a2] && (tP || sL.eo[a2] < eo - 220) && this.tQ(a2)
	}, this.tQ = function(id) {
		var j, bH = sL.sQ[id],
			player = sL.mD[id];
		sL.sQ[id] = 0, 1 === bH ? (j = tR(player, 0 === id) + sL.sS[id], 0 === id && (j += tR(sL.sP[id], !0) + "."), sw(7, 0), sW(sL.h8[id], j, 7, sL.sP[id], cY.cZ, cY.ho, -1, !0)) : 2 <= bH && (j = tR(player, 0 === id) + " and " + (bH - 1) +
			" other player" + tF(bH - 1) + sL.sR[id], sw(7, 2), sW(sL.h8[id], j, 7, player, cY.cZ, cY.ho, -1, !1))
	}, this.sq = function(id, l1, l2) {
		var eo = aA.en(),
			bH = sL.sQ[id] + 1;
		sL.sQ[id]++, sL.mD[id] = l1, sL.sP[id] = l2, 1 === bH && (sL.eo[id] = eo), (1 === bH && (n3 < 32 || 2 === g1) || 1 < bH && (sL.eo[id] < eo - 140 || 2 === g1)) && this.tQ(id)
	}, this.eY = function() {
		for (var cp = (cp = sI.length - sM) <= 1 ? 1 : cp * cp, a2 = sI.length - 1; 0 <= a2; a2--) 0 < sI[a2].aB && (sI[a2].aB -= cp, sI[a2].aB <= 0) && sI.splice(a2, 1);
		! function() {
			var tA, a2;
			if (128 !== sN && !(++sN < 128))
				for (tA = 5, a2 = er - 1; 0 <= a2; a2--) 1 === dH[es[a2]] && 0 < tA-- && sW(240, gq[es[a2]] + " joined the game.", 1, es[a2], cY.gk, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.n4(!1)
	}, this.cU = function() {
		for (var lP, gZ = cT(), a2 = sI.length - 1; 0 <= a2; a2--) lP = gZ - (a2 + 1) * eH, 50 === sI[a2].id ? (cV.drawImage(sI[a2].or, gg - sI[a2].cG - sK - ov, lP), cV.drawImage(sO, gg - sK - ov, lP)) : cV.drawImage(sI[a2].or, gg - sI[a2].cG -
			ov, lP)
	}
}

function tW() {
	this.cG = 0, this.eH = 0, this.m9 = 0, this.tX = 0, this.tY = 0, this.cE = 0, this.c8 = -1, this.ry = ["Accept Cookies", "More Information", "Decline"], this.colors = ["rgba(0,255,0,0.4)", "rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"], this.oB = !1,
		this.c5 = function() {
			this.resize(), this.oB = d < 5 && !b && 0 === f.y()
		}, this.resize = function() {
			this.cG = Math.floor(2.8 * Math.floor((o ? .09 : .062) * c6)), this.eH = Math.floor(+this.cG), this.m9 = Math.floor(.06 * this.cG), this.mA = this.cG - 2 * this.m9, this.tX = this.m9, this.tY = (this.eH - (this.ry.length + 1) * this.tX) /
				this.ry.length, this.cE = Math.floor(.3 * this.tY)
		}, this.cL = function(cM, cN) {
			return !!this.oB && -1 !== (cM = this.ta(cM, cN)) && (0 === cM ? (f.tb(2), this.oB = !1) : 1 === cM ? oM.c5(q1.tc, !0) : 2 === cM && (f.tb(1), this.oB = !1), aA.cJ = !0)
		}, this.ni = function(cM, cN) {
			var r;
			return !!this.oB && (r = this.c8, this.c8 = this.ta(cM, cN), r !== this.c8 && (aA.cJ = !0), -1 !== this.c8)
		}, this.ta = function(cM, cN) {
			return cM -= cO, cN -= Math.floor(cP - this.eH - cO), cM < 0 || cN < 0 || cM >= this.cG || cN >= this.eH ? -1 : (cM = Math.floor((cN - .5 * this.tX) / ((this.eH - this.tX) / this.ry.length))) < 0 ? 0 : cM >= this.ry.length ? this.ry
				.length - 1 : cM
		}, this.cU = function() {
			this.oB && this.td()
		}, this.td = function() {
			var gY = cO,
				gZ = Math.floor(cP - this.eH - cO);
			cV.setTransform(1, 0, 0, 1, gY, gZ), cV.fillStyle = cY.ho, cV.fillRect(0, 0, this.cG, this.eH), cV.textBaseline = cW, cV.textAlign = cX, cV.strokeStyle = cY.cZ, cV.font = c9 + this.cE + cA, cV.strokeRect(0, 0, this.cG, this.eH);
			for (var a2 = this.ry.length - 1; 0 <= a2; a2--) cV.setTransform(1, 0, 0, 1, gY + this.m9, gZ + this.tX + a2 * (this.tX + this.tY)), cV.fillStyle = this.colors[a2], cV.fillRect(0, 0, this.mA, this.tY), this.c8 === a2 && (cV.fillStyle = cY
				.ht, cV.fillRect(0, 0, this.mA, this.tY)), cV.fillStyle = cY.cZ, cV.fillText(this.ry[a2], this.mA / 2, .54 * this.tY), cV.strokeRect(0, 0, this.mA, this.tY);
			cV.setTransform(1, 0, 0, 1, 0, 0)
		}
}

function q8() {
	var te, tf, tg, cG, eH, font;

	function tk(tl) {
		return tl < 10 ? "0" + tl : String(tl)
	}
	this.c5 = function() {
		void 0 === cG && this.resize(), this.setTime()
	}, this.resize = function() {
		cG = Math.floor((o ? .53 : .36) * c6), eH = Math.floor(.065 * cG), font = c9 + Math.floor(.9 * eH) + cA, tg--, this.setTime()
	}, this.eY = function() {
		this.setTime() && (aA.cJ = !0)
	}, this.setTime = function() {
		var r = new Date,
			ti = r.getUTCMinutes(),
			r = r.getUTCSeconds();
		return tf = 3600 - 60 * ti - r, tf %= 900, te = "Next Contest: " + tk(Math.floor(tf / 60)) + ":" + tk(tf % 60), tg !== (tg = 60 * ti + r) && (cG = cH.measureText(te, font), cG += Math.floor(.4 * eH), !0)
	}, this.cU = function() {
		cV.lineWidth = 1 + Math.floor(eH / 15), 7 === aH.oP() && pv.tm() + 2 * cO > .5 * (cP - cG) ? cV.translate(gg - eH, Math.floor(pv.tm() + 2 * cO + cG)) : cV.translate(gg - eH, Math.floor(.5 * (cP + cG))), cV.rotate(-Math.PI / 2), cV
			.fillStyle = cY.cZ, cV.fillRect(0, 0, cG, eH), cV.strokeStyle = cY.gk, cV.strokeRect(0, 0, cG, eH + 10), cV.fillStyle = cY.gk, cV.font = font, cV.textBaseline = cW, cV.textAlign = cX, cV.fillText(te, Math.floor(cG / 2), Math.floor(
				.59 * eH)), cV.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function tn() {
	this.to = 10, this.tp = 50, this.tq = 50, this.tr = 8, this.ts = this.tp + this.tq, this.a4 = this.tp + this.tq + this.tr, this.cG = 72, this.tt = 0, this.tu = 0, this.rJ = new Array(this.a4), this.tv = 8, this.tw = new Array(this.tp + this.tq),
		this.tx = new Array(this.tp + this.tq), this.gf = 0, this.gh = 0, this.zoom = 1, this.ty = .2, this.rc = 0, this.a5 = null, this.tz = null, this.oB = !1, this.c5 = function() {
			var a2, u0, u1;
			for (this.a5 = new Array(this.a4), this.tz = new Array(this.a4), u0 = cC.rK("emojis"), this.u2(), a2 = this.rc = 0; a2 < this.tp; a2++) this.u3(a2, a2, u0);
			for (u1 = cC.rK("flags"), a2 = 0; a2 < this.tq; a2++) this.u3(a2, this.tp + a2, u1);
			this.u4(), this.rJ[26] = this.u5(25, 2), this.u6()
		}, this.u3 = function(a2, dx, eo) {
			this.a5[dx] = !1, this.tz[dx] = 0;
			var or = document.createElement("canvas"),
				hi = (or.width = this.cG, or.height = this.cG, or.getContext("2d", {
					alpha: !0
				}));
			hi.clearRect(0, 0, this.cG, this.cG), 23 === dx ? hi.drawImage(m1.rF()[4].or[1], 0, 0) : 36 === dx ? hi.drawImage(m1.rF()[0].or[2], 0, 0) : 49 === dx ? hi.drawImage(m1.rF()[2].or[1], 0, 0) : hi.drawImage(eo, this.cG * a2 % (a2 === dx ?
				this.to * this.cG : 4e3), a2 === dx ? b6(a2, this.to) * this.cG : 0, this.cG, this.cG, 0, 0, this.cG, this.cG), this.rJ[dx] = or
		}, this.u4 = function() {
			this.rJ[this.a4 - 5] = this.rJ[26], this.rJ[this.a4 - 4] = this.u5(this.a4 - 5, 2), this.rJ[this.a4 - 1] = this.u5(this.a4 - 5, 1), this.rJ[this.a4 - 8] = this.u5(this.a4 - 4, 1), this.rJ[this.a4 - 3] = this.rJ[39], this.rJ[this.a4 - 2] =
				this.u5(this.a4 - 3, 1), this.rJ[this.a4 - 7] = this.u5(this.a4 - 2, 1), this.rJ[this.a4 - 6] = this.u5(this.a4 - 7, 1)
		}, this.u5 = function(a2, u7) {
			var or = document.createElement("canvas"),
				hi = (or.width = this.cG, or.height = this.cG, or.getContext("2d", {
					alpha: !0
				}));
			return hi.clearRect(0, 0, this.cG, this.cG), hi.rotate(u7 * Math.PI / 2), hi.drawImage(this.rJ[a2], 1 === u7 ? 0 : -this.cG, -this.cG), or
		}, this.u6 = function() {
			var a2, aF, u8 = s().split("");
			if (2 * u8.length !== this.a4) this.rc = 0;
			else {
				for (a2 = 0; a2 < this.a4; a2 += 2) aF = parseInt(u8[Math.floor(a2 / 2)]), this.a5[a2] = aF % 2 == 1, this.a5[a2 + 1] = 1 < aF;
				this.u9()
			}
		}, this.u9 = function() {
			for (var a2 = this.rc = 0; a2 < this.a4; a2++) this.a5[a2] && (this.tz[this.rc++] = a2)
		}, this.rt = function() {
			8 === this.rc && this.tz[0] === this.ts && this.u9()
		}, this.uA = function() {
			var a2;
			for (this.rc = this.tr, a2 = 0; a2 < this.tr; a2++) this.tz[a2] = this.ts + a2
		}, this.u2 = function() {
			this.tt = Math.floor((o ? .075 : .0468) * c6), this.zoom = this.tt / this.cG, this.tu = (1 + this.ty) * this.tt
		}, this.show = function(cM, cN) {
			var a2, uC, uB, m9, gd, ge;
			if (this.rc < 1) this.oB = !1;
			else {
				for (uB = (uB = Math.floor(gg / this.tu)) < 3 ? 3 : uB > this.tv ? this.tv : uB, uC = this.rc > uB ? uB : this.rc, uB = 1 + b6(this.rc - 1, uC), m9 = Math.floor(uC * this.tu), gd = Math.floor(cM - m9 / 2), gd = (gd = gg < gd + m9 ?
						gg - m9 : gd) < 0 ? 0 : gd, ge = Math.floor(cN - this.tu / 2), cM = Math.floor(uB * this.tu), ge = (ge = cP < ge + cM ? cP - cM : ge) < 0 ? 0 : ge, this.gf = gd + m9, this.gh = ge + cM, a2 = 0; a2 < this.rc; a2++) this.tw[
					a2] = Math.floor(gd + a2 % uC * this.tu), this.tx[a2] = Math.floor(ge + b6(a2, uC) * this.tu);
				this.oB = !0
			}
		}, this.cL = function(cM, cN, player) {
			return !!this.oB && (this.oB = !1, this.rs(cM, cN) && this.uE(cM, cN, player) && this.oB || (this.rt(), m1.kB()), !0)
		}, this.rs = function(cM, cN) {
			return !(cM < this.tw[0] || cN < this.tx[0] || cM >= this.gf || cN >= this.gh)
		}, this.uE = function(cM, cN, player) {
			for (var a2 = this.rc - 1; 0 <= a2; a2--)
				if (cM >= this.tw[a2] && cN >= this.tx[a2] && cM <= this.tw[a2] + this.tu && cN <= this.tx[a2] + this.tu) return 39 === this.tz[a2] ? (this.uA(), this.show(cM, cN)) : (player === bA ? et.iW.j0(this.tz[a2]) : et.iY.jF(this.tz[a2],
					player), this.u9()), !0;
			return !1
		}, this.uF = function(a2) {
			return a2 < 16 || 40 <= a2 && a2 < 47
		}, this.uG = function(a2) {
			return a2 >= this.tp && a2 < this.tp + this.tq
		}, this.cU = function() {
			cV.imageSmoothingEnabled = !0;
			for (var lc = this.ty * this.tt / 2, a2 = this.rc - 1; 0 <= a2; a2--) cV.setTransform(this.zoom, 0, 0, this.zoom, this.tw[a2] + lc, this.tx[a2] + lc), cV.drawImage(this.rJ[this.tz[a2]], 0, 0);
			cV.imageSmoothingEnabled = !1, cV.setTransform(1, 0, 0, 1, 0, 0)
		}, this.uH = function(gY, gZ, j1) {
			cV.imageSmoothingEnabled = !0, cV.setTransform(this.zoom, 0, 0, this.zoom, gY, gZ), cV.drawImage(this.rJ[j1], 0, 0), cV.imageSmoothingEnabled = !1, cV.setTransform(1, 0, 0, 1, 0, 0)
		}
}
var k4, uN, cO, ow, o2, o3, cQ, dM, dL, dN, vI, gC, xP, gq, tU, dG, eL, eO, eK, eN, bi, lg, bB, bI, ba, bb, be, dH, es, er, nh, cV, a7Q, a7R, a7S, p, q, uS, c6, gg, cP, kE, a7T, b, c, e, d, o, na, nZ, hU, he, a3, bE, m2, a0p, aA, ep, fp, cR, a10, oM,
	zQ, a7U, a7V, cW = "middle",
	uI = "bottom",
	cX = "center",
	so = "left",
	uJ = "right",
	c9 = "bold ",
	uK = "italic ",
	uL = "normal ",
	cA = "px " + settings.fontName,
	uM = [c9, uK + c9, c9],
	uO = ["wss://", "/s50/", "/s51/", "/s52/"];

function uP() {
	uQ(), (cQ = new uR).c5()
}

function uQ() {
	ow = .0022 * (1 + .5 * o) * c6, cO = (cO = Math.floor((o ? .02 : .01152) * c6)) < 2 ? 2 : cO, k4 = (k4 = Math.floor((o ? .0114 : .01296) * c6)) < 2 ? 2 : k4, uN = (uN = Math.floor(.005 * uS)) < 1 ? 1 : uN
}

function uT(hi, cG, eH) {
	hi.fillStyle = cY.cZ, hi.fillRect(0, 0, cG, 1), hi.fillRect(0, eH - 1, cG, 1), hi.fillRect(0, 0, 1, eH), hi.fillRect(cG - 1, 0, 1, eH)
}

function q9() {
	var sI, uU, cF, eH, uV;

	function ub(a2) {
		var cG = sI[a2].or.width,
			m9 = (sI[a2].hi.clearRect(0, 0, cG, eH), sI[a2].hi.fillStyle = 0 !== sI[a2].id ? "rgba(33,33,120,0.83)" : sI[a2].dp === bM ? "rgba(88,88,88,0.83)" : sI[a2].dp < dF ? "rgba(100,70,33,0.83)" : "rgba(33,100,80,0.83)", sI[a2].hi.fillRect(0,
				0, cG, eH), uT(sI[a2].hi, cG, eH), uU + 2 * eH < cG && (sI[a2].hi.fillRect(cG - uU - eH, 0, 1, eH), sI[a2].hi.fillText(gq[sI[a2].dp], Math.floor((cG - uU) / 2), Math.floor(.57 * eH))), 0 !== sI[a2].id ? 0 : eH);
		sI[a2].hi.fillText(fl.gp(sI[a2].dq), Math.floor(cG - uU / 2 - m9), Math.floor(.57 * eH)),
			function(a2, cG, m9) {
				sI[a2].hi.fillStyle = cY.hr;
				var ug = Math.floor(uU * sI[a2].dq / sI[a2].uh);
				sI[a2].hi.fillRect(Math.floor(cG - uU - m9), eH - uV, ug, uV)
			}(a2, cG, m9), 0 === sI[a2].id ? (ue(a2, cG), function(a2, cG) {
				sI[a2].hi.strokeStyle = cY.i0, sI[a2].hi.fillRect(eH, 0, 1, eH);
				cG -= eH;
				sI[a2].hi.beginPath(), sI[a2].hi.moveTo(Math.floor(.3 * eH + cG), Math.floor(eH / 2)), sI[a2].hi.lineTo(Math.floor(eH - .3 * eH + 0 + cG), Math.floor(eH / 2)), sI[a2].hi.stroke(), sI[a2].hi.beginPath(), sI[a2].hi.moveTo(Math
					.floor(eH / 2 + cG), Math.floor(.3 * eH)), sI[a2].hi.lineTo(Math.floor(eH / 2 + cG), Math.floor(eH - .3 * eH + 0)), sI[a2].hi.stroke()
			}(a2, cG)) : ue(a2, 2 * eH)
	}

	function ue(a2, cG) {
		sI[a2].hi.strokeStyle = sI[a2].ui ? cY.hw : cY.iA, sI[a2].hi.fillStyle = cY.cZ, sI[a2].hi.fillRect(cG - eH, 0, 1, eH);
		var uj = Math.floor(eH / 12),
			uj = (sI[a2].hi.lineWidth = uj < 3 ? 3 : uj, sI[a2].hi.lineCap = "round", .35);
		cG = eH + 1, sI[a2].hi.beginPath(), sI[a2].hi.moveTo(Math.floor(cG - uj * eH + 0), Math.floor(uj * eH)), sI[a2].hi.lineTo(Math.floor(cG - eH + uj * eH), Math.floor(eH - uj * eH + 0)), sI[a2].hi.stroke(), sI[a2].hi.beginPath(), sI[a2].hi
			.moveTo(Math.floor(cG - eH + uj * eH), Math.floor(uj * eH)), sI[a2].hi.lineTo(Math.floor(cG - uj * eH + 0), Math.floor(eH - uj * eH + 0)), sI[a2].hi.stroke()
	}

	function uy(bH) {
		for (var dq, a2 = bH - 1; 0 <= a2; a2--) dq = as.b0(bA, a2), sI[a2].dq !== dq && (sI[a2].dq = dq, sI[a2].uh = dq > sI[a2].uh ? dq : sI[a2].uh, sI[a2].uc = !0)
	}

	function ua(v0) {
		v0.or = document.createElement("canvas"), kl.font = cF;
		var cG = uU;
		v0.dp < bM && 0 === v0.id && (cG += Math.floor(kl.measureText(gq[v0.dp] + "000").width)), cG += eH, 0 === v0.id && (cG += eH), v0.or.width = cG, v0.or.height = eH, v0.hi = v0.or.getContext("2d", {
			alpha: !0
		}), v0.hi.font = cF, v0.hi.textBaseline = cW, v0.hi.textAlign = cX
	}

	function uu(a2) {
		return fk.v2() ? gg - sI[a2].or.width - k4 : fk.gY
	}

	function uv(a2) {
		return Math.floor(2 * k4 + (fk.v2() ? fT.eH + k4 : 0) + fk.eH + a2 * (1.3 * eH))
	}
	this.c5 = function() {
		sI = [], this.resize()
	}, this.resize = function() {
		cF = fR.cF, eH = fR.cE + 5, eH = Math.floor(1.25 * eH), o && (eH = Math.floor(1.25 * eH)), uV = Math.floor(.15 * eH), kl.font = cF, uU = Math.floor(kl.measureText("02 000 000 0000").width);
		for (var a2 = sI.length - 1; 0 <= a2; a2--) ua(sI[a2]), ub(a2)
	}, this.g0 = function() {
		for (var a2 = sI.length - 1; 0 <= a2; a2--) sI[a2].uc && (sI[a2].uc = !1, ub(a2))
	}, this.gp = function(tA) {
		if (tA < 1e3) return tA < 0 ? "-" + this.gp(Math.abs(tA)) : tA.toString();
		for (var ul = Math.floor(Math.log(tA + .5) / Math.log(10)) + 1, um = Math.floor((ul - 1) / 3), un = tA.toString(), uo = un.substring(ul - 3, ul), a2 = 1; a2 < um; a2++) uo = un.substring(ul - 3 * (a2 + 1), ul - 3 * a2) + " " + uo;
		return un.substring(0, ul - 3 * um) + " " + uo
	}, this.cL = function(cM, gZ) {
		if (2 !== g1 && 0 !== dG[bA] && !hD && bJ.rd(bA))
			for (var up, uq, ur, us = o ? eH : 0, ut = o ? Math.floor(.15 * eH) : 0, a2 = sI.length - 1; 0 <= a2; a2--)
				if (up = uu(a2), uq = uv(a2), ur = sI[a2].or.width, uq - ut <= gZ && gZ <= uq + eH + ut) {
					if (up - us <= cM && cM <= up + eH + us) return sI[a2].ui || (sI[a2].uc = !0, sI[a2].ui = !0, 0 === sI[a2].id && et.iW.iy(sI[a2].dp)), !0;
					if (0 === sI[a2].id && up + ur - eH - us <= cM && cM <= up + ur + us) return et.iW.ij(fn.rV(), sI[a2].dp), !0
				} return !1
	}, this.eY = function() {
		var bH;
		2 !== g1 && 0 !== dG[bA] && !hD && bJ.rd(bA) && (function(bH) {
			if (sI.length !== bH) return 1;
			for (var a2 = bH - 1; 0 <= a2; a2--)
				if (sI[a2].id !== as.au(bA, a2) || sI[a2].dp !== as.az(bA, a2)) return 1;
			return
		}(bH = as.at(bA)) && function(bH) {
			var a2, id, dp, e8, dq, sY = [];
			loop: for (a2 = 0; a2 < bH; a2++) {
				for (id = as.au(bA, a2), dp = as.az(bA, a2), e8 = 0; e8 < sI.length; e8++)
					if (sI[e8].id === id && sI[e8].dp === dp) {
						sY.push(sI.splice(e8, 1)[0]);
						continue loop
					} dq = as.b0(bA, a2), ua(dq = {
					dp: dp,
					dq: dq,
					uh: dq,
					id: id,
					uc: !0,
					ui: !1,
					or: null,
					hi: null
				}), sY.push(dq)
			}
			sI = sY
		}(bH), uy(bH))
	}, this.v1 = function(bP) {
		for (var bH = Math.min(sI.length, as.at(bA)), a2 = 0; a2 < bH; a2++)
			if (sI[a2].dp === bP) return void(sI = [])
	}, this.cU = function() {
		if (0 !== dG[bA] && bJ.rd(bA) && !hD)
			for (var a2 = sI.length - 1; 0 <= a2; a2--) cV.drawImage(sI[a2].or, uu(a2), uv(a2))
	}
}

function qA() {
	var sI, f0, v3, v4, eH, cF, cE, v5, te, v6, v7, v8, or, hi, h3, v9;

	function vG() {
		cV.drawImage(or, k4 + (di ? k4 + fp.vH() : 0), vI + 2 * k4)
	}

	function vA() {
		or.width = sI[0].width + v7, or.height = eH + v7, (hi = or.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, sI[0].width + v7, eH + v7), hi.translate(Math.floor(v7 / 2), Math.floor(v7 / 2)), hi.lineWidth = v7, hi.fillStyle = 1 === sI[0].vF ? cY.hu : cY.ho, vJ(), hi.fill(), hi.strokeStyle = 1 === sI[0].vF ? cY.gk : cY.cZ,
		vJ(), hi.stroke(), hi.textAlign = cX, hi.textBaseline = cW, hi.fillStyle = 1 === sI[0].vF ? cY.gk : cY.cZ, hi.font = cF[0], hi.fillText(te[sI[0].vE], Math.floor(sI[0].width / 2), Math.floor(.72 * v5[0] * eH)), hi.font = cF[1], hi.fillText(sI[
				0].j, Math.floor(sI[0].width / 2), Math.floor((v5[0] + .48 * v5[1]) * eH))
	}

	function vJ() {
		hi.beginPath(), hi.moveTo(v8, 0), hi.lineTo(sI[0].width - v8, 0), hi.lineTo(sI[0].width, v8), hi.lineTo(sI[0].width, eH - v8), hi.lineTo(sI[0].width - v8, eH), hi.lineTo(v8, eH), hi.lineTo(0, eH - v8), hi.lineTo(0, v8), hi.closePath()
	}
	this.c5 = function() {
		f0 = 4, v3 = v4 = h3 = 0, sI = [], cF = new Array(2), cE = new Array(2), v5 = new Array(2), te = ["YOU ERASED", "YOU WERE ERASED BY", "THE GAME WAS WON BY", "MAP:"], v5[0] = .3, v5[1] = .7, v6 = new Array(4), or = document.createElement(
			"canvas"), v9 = aA.aB + 2e3, this.resize()
	}, this.resize = function() {
		var a2, cG;
		for (eH = Math.floor((o ? .0725 : .058) * c6), cE[0] = Math.floor(.85 * v5[0] * eH), cE[1] = Math.floor(.85 * v5[1] * eH), cF[0] = c9 + cE[0] + cA, cF[1] = c9 + cE[1] + cA, a2 = v6.length - 1; 0 <= a2; a2--) v6[a2] = this.measureText(te[
			a2] + "000", cF[0]);
		if (v7 = Math.floor(1 + .05 * eH), v8 = Math.floor(.2 * eH), 0 < sI.length) {
			for (a2 = sI.length - 1; 0 <= a2; a2--) cG = this.measureText(sI[a2].j + "00", cF[1]), sI[a2].width = cG < v6[a2] ? v6[a2] : cG;
			vA()
		}
	}, this.eY = function() {
		0 !== f0 && (4 === f0 ? aA.aB > v9 && (f0 = 0, 1 === g1) && cH.nF(lC.tK(), 3, 1, 9) : (1 === f0 ? (0 === v3 && (vA(), v3 = 1e-4), 1 <= (v3 += .002 * (aA.aB - h3)) && (v4 = 0, f0 = 2, v3 = 1), aA.cJ = !0) : 2 === f0 ? ((v4 += (aA.aB -
			h3) / 1e3) > sI[0].h8 || 1 < v4 && 1 < sI.length) && (f0 = 3) : 3 === f0 && ((v3 -= .002 * (aA.aB - h3)) <= 0 && (v3 = 0, sI.shift(), f0 = 0 < sI.length ? 1 : 0), aA.cJ = !0), h3 = aA.aB))
	}, this.measureText = function(j, cF) {
		return cV.font = cF, Math.floor(cV.measureText(j).width)
	}, this.dl = function(vD, a2) {
		this.nF(gq[vD], a2, 1, 0 === a2 ? 3 : 7)
	}, this.nF = function(j, vE, vF, h8) {
		var cG = (cG = this.measureText(j + "00", cF[1])) < v6[vE] ? v6[vE] : cG;
		sI.push({
			j: j,
			width: cG,
			vE: vE,
			vF: vF,
			h8: h8
		}), 0 === f0 && (v3 = 0, f0 = 1, h3 = aA.aB)
	}, this.cU = function() {
		0 !== f0 && 0 !== v3 && (v3 < 1 ? (cV.globalAlpha = v3, vG(), cV.globalAlpha = 1) : vG())
	}
}

function qn() {
	var eH, or, hi, vK, vL, vM, vN, vO, uc, vP, vQ, vR, vS, vT;

	function cB() {
		var cG = fo.cG,
			kb = (uc = !1, m3(hi, cG, eH), Math.floor(cG / 2));
		1 === vL ? (hi.fillStyle = cY.i2, hi.fillRect(kb, 0, kb, eH)) : -1 === vL && (hi.fillStyle = cY.iD, hi.fillRect(0, 0, kb, eH)), m4(hi, cG, eH, 2);
		var kb = (kb = Math.floor(.25 * eH)) < 2 ? 2 : kb,
			tL = (hi.fillStyle = cY.hv, Math.floor((eH - 4) * vM[1] / vN[1]));
		0 < tL && hi.fillRect(2, eH - 2 - tL, kb, tL), 0 < (tL = Math.floor((eH - 4) * vM[0] / vN[0])) && hi.fillRect(cG - 2 - kb, eH - 2 - tL, kb, tL);
		kb = (kb = Math.floor(eH / 8)) < 2 ? 2 : kb;
		m6(hi, Math.floor(.4 * eH), 0, eH, kb, .5, !1), m6(hi, Math.floor(cG - 1.4 * eH), 0, eH, kb, .5, !0), hi.drawImage(vK, Math.floor((cG - vK.width) / 2), 3)
	}

	function vV() {
		uc = !0, vP = 140, vL = 0, vO = [], fo.oB = !1, fR.mr(247, 0), vM[0] = vM[1] = 0
	}

	function cT() {
		return fn.si(fR.se()) ? fn.gZ - eH - k4 : fw.si(fR.sh()) ? fw.cT() - eH - k4 : q - eH - gm.sj() * k4
	}
	this.oB = !1, this.cG = 0, this.c5 = function() {
		vR = vS = 0, this.oB = !1, uc = vT = !1, vP = 140, vM = [vL = 0, 0], vN = [1, 1], vO = [], vQ = new Uint32Array(10), this.resize()
	}, this.resize = function() {
		eH = fn.eH, this.cG = 4 * eH, this.vU(), (or = document.createElement("canvas")).width = this.cG, or.height = eH, hi = or.getContext("2d", {
			alpha: !0
		}), cB()
	}, this.g0 = function() {
		uc && cB()
	}, this.vU = function() {
		var ox, v7, kb, tX = (tX = eH - 6) < 6 ? 6 : tX;
		void 0 !== vK && vK.width === tX || ((vK = document.createElement("canvas")).width = tX, vK.height = tX, (ox = vK.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, tX, tX), v7 = Math.floor(tX / 8), ox.lineWidth = v7 = v7 < 1 ? 1 : v7, ox.strokeStyle = cY.cZ, kb = Math.floor(tX / 2), tX = Math.floor((tX - v7) / 2), ox.beginPath(), ox.arc(kb, kb, tX, 0, 2 * Math.PI), ox
			.moveTo(kb, kb - tX), ox.lineTo(kb, kb + tX), ox.moveTo(kb + Math.cos(.78 * Math.PI) * tX, kb + Math.cos(.28 * Math.PI) * tX), ox.lineTo(kb, kb), ox.lineTo(kb + Math.cos(.22 * Math.PI) * tX, kb + Math.cos(1.72 * Math.PI) * tX), ox
			.stroke())
	}, this.cL = function(gY, gZ) {
		var ge;
		return !(gY < p - this.cG - k4 || gZ < (ge = cT()) || ge + eH < gZ || (hD || et.iW.j4(gY > p - k4 - this.cG / 2 ? 1 : 0), 0))
	}, this.eY = function() {
		if (0 < vS) 0 === --vS && vV();
		else if (this.oB) 270 == --vP && 2 <= vR && function() {
			var a2;
			for (a2 = er - 1; 0 <= a2; a2--)
				if (bJ.rd(es[a2])) return;
			return 1
		}() && (uc = !0, vM[0] += vN[0]), 180 === vP && 3 * vM[0] < vN[0] ? vV() : vM[0] >= vN[0] ? vT ? fW.mm.mp() : fW.mm.mu(-1) : vM[1] >= vN[1] ? vS = 4 : vP <= 0 && vV();
		else if (function() {
				var a2;
				for (a2 = 9; 0 <= a2; a2--) 12 < Math.abs(vQ[a2] - bi[gC[a2]]) && (vP = 140), vQ[a2] = bi[gC[a2]];
				if (--vP <= 0) return 1;
				return
			}()) {
			(vT = vY()) && fR.t5(), this.oB = !0, vP = 360;
			var a2, r = 0;
			for (a2 = er - 1; 0 <= a2; a2--) bJ.rd(es[a2]) && (r += bi[es[a2]]);
			vN[0] = sg(b6(3 * r, 5), 1), di && 9 !== fF && (vN[0] = va(sg(b6(r * (100 - b6(100 * fp.nD(), pK)), 100), 1), vN[0])), vN[1] = sg(r - vN[0], 1), vR++
		}
	}, this.n1 = function() {
		this.oB && vM[0] < vN[0] && vV()
	}, this.jz = function(player, vc) {
		var a2, r;
		if (this.oB) {
			for (a2 = vO.length - 1; 0 <= a2; a2--)
				if (vO[a2] === player) return;
			vO.push(player), uc = !0, r = fH ? vN[0] : bi[player], vc ? vM[0] += r : vM[1] += r, player === bA && (vL = vc ? 1 : -1)
		}
	}, this.cU = function() {
		var gZ;
		this.oB && (gZ = cT(), cV.drawImage(or, p - this.cG - k4, gZ))
	}
}

function qB() {
	var cG, gY, vd, or, hi, oB, dK, ve, cF, uc, vf = 11 / 12;

	function vh() {
		var ug = Math.floor(dK * (cG - 2 * vd)),
			vk = 1 + Math.floor(.0625 * fn.eH),
			vl = 1 + Math.floor(.3 * fn.eH),
			tX = Math.floor(.55 * fn.eH);
		hi.clearRect(0, 0, cG, fn.eH), hi.fillStyle = cY.hn, hi.fillRect(0, 0, vd, fn.eH), hi.fillRect(vd + ug, 0, cG - vd - ug, fn.eH), hi.fillStyle = dK < 1 / 3 ? "rgba(" + Math.floor(3 * dK * 130) + ",130,0,0.85)" : dK < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (dK - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (dK - 2 / 3) * 130) + ",0.85)", hi.fillRect(vd, 0, ug, fn.eH), hi.fillStyle = cY.cZ, hi.fillRect(0, 0, cG, 1), hi.fillRect(0, fn.eH - 1, cG, 1),
			hi.fillRect(0, 0, 1, fn.eH), hi.fillRect(vd, 0, 1, fn.eH), hi.fillRect(vd + ug, 0, 1, fn.eH), hi.fillRect(cG - vd, 0, 1, fn.eH), hi.fillRect(cG - 1, 0, 1, fn.eH), hi.fillRect(Math.floor(.25 * fn.eH) + vl, Math.floor((fn.eH - vk) / 2), fn
				.eH - 2 * vl, vk), hi.fillRect(Math.floor(cG - 1.25 * fn.eH) + vl, Math.floor((fn.eH - vk) / 2), fn.eH - 2 * vl - vl % 2, vk), hi.fillRect(Math.floor(cG - 1.25 * fn.eH) + Math.floor((fn.eH - vk) / 2), vl, vk, fn.eH - 2 * vl - vl % 2),
			ve = hh.iY.dJ(bA, fn.rV()), hi.fillText(fl.gp(ve) + " (" + fT.tJ(100 * dK, 0) + ")", Math.floor(.5 * cG), tX)
	}

	function vp(c3) {
		return !(1 < c3 && 1 === dK || (1 < c3 && c3 * dK - dK < 1 / 1024 ? c3 = (dK + 1 / 1024) / dK : c3 < 1 && dK - c3 * dK < 1 / 1024 && (c3 = (dK - 1 / 1024) / dK), dK = bx.oq(dK * c3, 1 / 1024, 1), vh(), 0))
	}

	function vq(cM) {
		return dK !== (dK = bx.oq((cM - gY - vd) / (cG - 2 * vd), 1 / 1024, 1)) && (vh(), !0)
	}
	this.gZ = 0, this.oC = !1, this.c5 = function() {
		oB = !hC && !hD, uc = !1, dK = .5, ve = 0, this.oC = !1, this.resize()
	}, this.resize = function() {
		o && p < .8 * q ? (this.eH = Math.floor(.0536 * c6), cG = p - 4 * k4 - this.eH) : (cG = Math.floor((o ? .65 : .389) * c6), cG += 12 - cG % 12, this.eH = Math.floor(cG / 12)), vd = Math.floor(3 * this.eH / 2), cF = c9 + Math.floor(.5 *
			this.eH) + cA, (or = document.createElement("canvas")).width = cG, or.height = this.eH, (hi = or.getContext("2d", {
			alpha: !0
		})).font = cF, hi.textBaseline = cW, hh.hi.textAlign(hi, 1), this.vg(), vh()
	}, this.vg = function() {
		gY = o && p < .8 * q ? this.eH + 3 * k4 : Math.floor((gg - cG) / 2), this.gZ = cP - this.eH - gm.sj() * k4
	}, this.g0 = function() {
		uc && (uc = !1, vh())
	}, this.oB = function() {
		return !(!oB || m0.oT && gY < Math.floor(k4 + 5.5 * this.eH))
	}, this.si = function(cI) {
		return !!this.oB() && p - cI - k4 < gY + cG
	}, this.cS = function() {
		oB = !hD
	}, this.vV = function() {
		oB = !1
	}, this.rV = function() {
		return bx.oq(Math.floor(1024 * dK + .5) - 1, 0, 1023)
	}, this.oL = function(cM, cN) {
		return this.oB() && gY < cM && cM < gY + cG && cN > this.gZ
	}, this.cL = function(cM, cN) {
		return !!this.oB() && !!fn.oL(cM, cN) && (hH.hI = !1, function(rv, cM, cN) {
			if (function(cM, cN) {
					return gY < cM && cM < gY + vd && cN > fn.gZ
				}(cM, cN)) return vp(vf);
			if (function(cM, cN) {
					return gY + cG - vd < cM && cM < gY + cG && cN > fn.gZ
				}(cM, cN)) return vp(1 / vf);
			return rv.oC = !0, vq(cM)
		}(this, cM, cN) && (aA.cJ = !0), !0)
	}, this.oX = function(hQ) {
		0 !== g1 && this.oB() && vp(hQ) && (aA.cJ = !0)
	}, this.nl = function(deltaY) {
		var hQ;
		return !(0 === deltaY || !this.oB()) && vp(hQ = 0 < deltaY ? (hQ = 400 / (400 + deltaY)) < vf ? vf : hQ : 1 / vf < (hQ = (400 - deltaY) / 400) ? 1 / vf : hQ)
	}, this.ni = function(cM, cN) {
		return !!this.oC && vq(cM)
	}, this.oG = function() {
		this.oC = !1
	}, this.eY = function() {
		this.oB() && ve !== hh.iY.dJ(bA, this.rV()) && (uc = !0)
	}, this.cU = function() {
		this.oB() && cV.drawImage(or, gY, this.gZ)
	}
}

function r1() {
	var or, hi, vr, font, vs = 0,
		vt = !1,
		vu = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		vv = 5;

	function td() {
		if (vt) {
			var a2, bH = vu.length,
				tX = Math.floor(.5 * vr.eH),
				eH = bH * tX,
				gY = Math.floor(Math.floor(vr.gY) + .3 * vr.cG - .5),
				gZ = Math.floor(Math.floor(vr.gZ) - eH),
				cG = Math.floor(.4 * vr.cG + 2.5);
			for (cV.fillStyle = cY.hn, cV.fillRect(gY, gZ, cG, eH), cV.fillStyle = cY.i7, cV.fillRect(gY, gZ + vv * tX, cG, tX), cV.fillStyle = cY.cZ, cV.fillRect(gY, gZ, 2, eH), cV.fillRect(gY, gZ, cG, 2), cV.fillRect(gY + cG - 2, gZ, 2, eH), a2 =
				1; a2 < bH; a2++) cV.fillRect(gY, gZ + a2 * tX, cG, 2);
			for (cV.fillStyle = cY.cZ, hh.hi.textAlign(cV, 1), hh.hi.textBaseline(cV, 1), cV.font = hh.hi.kD(.6 * tX, 0), gY += .5 * cG, a2 = 0; a2 < bH; a2++) cV.fillText(w8(a2), gY, gZ + (a2 + .6) * tX)
		}
		cV.drawImage(or, Math.floor(vr.gY), Math.floor(vr.gZ))
	}

	function cB(rv) {
		var gY, gd, ge, tX;
		hi.clearRect(0, 0, Math.floor(vr.cG), Math.floor(vr.eH)), hi.fillStyle = cY.hn, hi.fillRect(0, 0, Math.floor(vr.cG), Math.floor(vr.eH)), hG && (hi.fillStyle = cY.i7, hi.fillRect(0, 0, Math.floor(.3 * vr.cG), Math.floor(vr.eH))), hi
			.fillStyle = cY.cZ, hi.fillText("Hide UI", .15 * vr.cG, .5 * vr.eH), hi.fillRect(Math.floor(.3 * vr.cG - .5), 0, 2, Math.floor(vr.eH)), gY = .5 * vr.cG, hi.fillText("Replay Speed", gY, .31 * vr.eH), hi.fillText(w8(vv), gY, .69 * vr.eH),
			hi.fillRect(Math.floor(.7 * vr.cG - .5), 0, 2, Math.floor(vr.eH)), rv.s3 ? (gY = Math.floor(.02 * vr.cG), rv = Math.floor(.025 * vr.cG), gd = Math.floor(.85 * vr.cG - gY - .5 * rv), ge = Math.floor(.25 * vr.eH), tX = Math.floor(vr.eH) -
				2 * ge, hi.fillRect(gd, ge, gY, tX), hi.fillRect(gd + gY + rv, ge, gY, tX)) : function() {
				var cG = Math.floor(.46 * vr.eH),
					eH = Math.floor(.23 * vr.eH),
					gY = Math.floor(.85 * vr.cG - .5 * cG + cG / 12),
					gZ = Math.floor(.5 * vr.eH - eH);
				hi.beginPath(), hi.moveTo(gY, gZ), hi.lineTo(gY + cG, gZ + eH), hi.lineTo(gY, gZ + (eH << 1)), hi.fill()
			}(), hi.fillRect(0, 0, Math.floor(vr.cG), 2), hi.fillRect(0, 0, 2, Math.floor(vr.eH)), hi.fillRect(0, Math.floor(vr.eH) - 2, Math.floor(vr.cG), 2), hi.fillRect(Math.floor(vr.cG - 2), 0, 2, Math.floor(vr.eH))
	}

	function w8(a2) {
		return 5 === a2 ? "Normal" : "" + vu[a2]
	}
	this.s3 = !1, this.c5 = function() {
		hD && (vv = 5, this.s3 = !1, vt = !1, vr = new k0([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.vw = function() {
		return vu[vv]
	}, this.cT = function() {
		return vr.gZ
	}, this.si = function(cI) {
		return !!hD && vr.gY + vr.cG > p - cI - k4
	}, this.resize = function() {
		hD && (vr.resize(), vr.gZ -= (gm.sj() - 1) * k4, font = hh.hi.kD(.3 * vr.eH, 0), (or = document.createElement("canvas")).width = Math.floor(vr.cG), or.height = Math.floor(vr.eH), (hi = or.getContext("2d", {
			alpha: !0
		})).font = font, hh.hi.textAlign(hi, 1), hh.hi.textBaseline(hi, 1), cB(this))
	}, this.oS = function(vx) {
		vx !== hG && (hG = vx, fp.resize(), aA.cJ = !0, hD) && (vs = aA.aB + 2e3, cB(this))
	}, this.cL = function(gY, gZ) {
		if (!hD) return !1;
		if (gY < vr.gY || gZ < vr.gZ || gY > vr.gY + vr.cG) return vt && function(rv, gY, gZ) {
			var bH = vu.length,
				tX = Math.floor(.5 * vr.eH),
				eH = bH * tX,
				gd = Math.floor(Math.floor(vr.gY) + .3 * vr.cG - .5),
				eH = Math.floor(Math.floor(vr.gZ) - eH),
				cG = Math.floor(.4 * vr.cG + 2.5);
			return vt = !1, aA.cJ = !0, gY < gd || gd + cG < gY || gZ < eH || (vv = w0(0, Math.floor((gZ - eH) / tX), bH - 1), cB(rv)), !0
		}(this, gY, gZ);
		if ((gY -= vr.gY) < .3 * vr.cG) vt = !1, this.oS(!hG);
		else {
			if (gY < .7 * vr.cG) return vt = !vt, aA.cJ = !0;
			this.oV(!1)
		}
		return !0
	}, this.oV = function(vz) {
		2 === g1 ? (this.oS(!1), kA.show()) : (vt = !1, this.s3 = !this.s3, this.s3 ? m0.oT ? m0.oU() : a7(1) : vz || m0.s4(), aA.cJ = !0, cB(this))
	}, this.o5 = function(gY, gZ) {
		return !!hG && (m0.cL(gY, gZ) || (hD ? ((aA.aB > vs || !this.cL(gY, gZ)) && hH.cL(gY, gZ), aA.cJ = !0, vs = aA.aB + 2e3) : hH.cL(gY, gZ)), !0)
	}, this.eY = function() {
		hD && hG && aA.aB > vs - 1e3 && aA.aB < vs && (aA.cJ = !0)
	}, this.n5 = function() {
		hD && (this.s3 = !1, aA.cJ = !0, cB(this))
	}, this.cU = function() {
		if (hD) {
			if (hG) {
				if (aA.aB > vs) return;
				if (aA.aB > vs - 1e3) return cV.globalAlpha = w0(0, (1e3 - (aA.aB - (vs - 1e3))) / 1e3, 1), td(), void(cV.globalAlpha = 1)
			}
			td()
		}
	}
}

function r0() {
	var vr, k7, ou, tX;
	this.oB = !1, this.k9 = !1, this.sF = function() {
		return hD || 2 === g1
	}, this.show = function() {
		this.oB = !0, vr || (vr = new k0([.55, .35], [.5, .5]), (k7 = new k6).c5()), this.resize(), 0 === g1 ? k7.kF("") : (fr.je.wC.length || (fr.je.wC = fr.wF.me()), k7.kF(fr.wG(fr.je.wC))), k7.show(), aA.cJ = !0, oN.cS(!1)
	}, this.kB = function() {
		this.oB && (this.oB = !1, this.k9 = !1, k7.kB(), aA.cJ = !0, 0 === g1 && q0.kJ(), 0 === aH.oP()) && oN.cS(!0)
	}, this.resize = function() {
		this.oB && (vr.resize(), ou = .03 * vr.eH, tX = .2 * vr.eH, k7.resize(vr.gY + ou, vr.gZ + tX + ou, vr.cG - 2 * ou, vr.eH - 2 * (tX + ou)))
	}, this.cL = function(gY, gZ) {
		return !!this.oB && (gY < vr.gY || gZ < vr.gZ || gY > vr.gY + vr.cG || gZ > vr.gZ + vr.eH ? 2 !== m0.cL(gY, gZ) && this.kB() : gZ < vr.gZ + vr.eH - tX ? gY > vr.gY + vr.cG - tX && gZ < vr.gZ + tX && this.kB() : (gY -= vr.gY) < .25 * vr
			.cG ? k7.kI() : gY < .5 * vr.cG ? k7.kK() : gY < .75 * vr.cG ? k7.kJ() : (gZ = this, gY = fr.wB(k7.kH()), gZ.kB(), (0 < gY.length && gY === fr.je.wC || fr.wE.kZ(gY)) && fr.wD()), !0)
	}, this.cU = function() {
		var a2;
		if (this.oB)
			for (hh.hi.textAlign(cV, 1), cV.fillStyle = cY.iG, cV.fillRect(vr.gY, vr.gZ, vr.cG, tX), cV.fillStyle = cY.hn, cV.fillRect(vr.gY, vr.gZ + tX, vr.cG, vr.eH - tX), cV.fillStyle = cY.cZ, cV.fillRect(vr.gY, vr.gZ, 2, vr.eH), cV.fillRect(
					vr.gY, vr.gZ, vr.cG, 2), cV.fillRect(vr.gY + vr.cG - 2, vr.gZ, 2, vr.eH), cV.fillRect(vr.gY, vr.gZ + vr.eH - 2, vr.cG, 2), cV.fillRect(vr.gY + 1, vr.gZ + tX, vr.cG - 2, 2), cV.fillRect(vr.gY + 1, vr.gZ + vr.eH - tX, vr.cG - 2,
					2), cV.font = c9 + Math.floor(.39 * tX) + cA, cV.fillText("Replay", vr.gY + .5 * vr.cG, vr.gZ + .55 * tX), m0.sG(vr.gY + vr.cG - .725 * tX, vr.gZ + .275 * tX, .45 * tX), cV.setTransform(1, 0, 0, 1, 0, 0), cV.font = hh.hi.kD(
					.3 * tX, 0), cV.fillText("Select All", vr.gY + .125 * vr.cG, vr.gZ + vr.eH - .48 * tX), cV.fillText("Copy", vr.gY + .375 * vr.cG, vr.gZ + vr.eH - .48 * tX), cV.fillText("Clear", vr.gY + .625 * vr.cG, vr.gZ + vr.eH - .48 * tX),
				cV.fillText("Launch", vr.gY + .875 * vr.cG, vr.gZ + vr.eH - .48 * tX), a2 = 1; a2 < 4; a2++) cV.fillRect(vr.gY + .25 * a2 * vr.cG - 1, vr.gZ + vr.eH - tX + 1, 2, tX - 2)
	}
}

function qC() {
	var wI, wJ, cG, gY, gZ, wK, wL;
	this.c5 = function() {
		wI = new Array(2), wJ = new Array(2), this.hI = !1, wL = wK = dN = dL = 0, dM = 1, this.resize()
	}, this.resize = function() {
		cG = (cG = Math.floor((o ? .072 : .0502) * c6)) < 8 ? 8 : cG;
		for (var a2 = 1; 0 <= a2; a2--) wI[a2] = document.createElement("canvas"), wI[a2].width = cG, wI[a2].height = cG, wJ[a2] = wI[a2].getContext("2d", {
			alpha: !0
		});
		this.vg(),
			function() {
				for (var wb = Math.floor(1 + cG / 20), a2 = 1; 0 <= a2; a2--) wJ[a2].clearRect(0, 0, cG, cG), wJ[a2].fillStyle = cY.hk, wJ[a2].beginPath(), wJ[a2].arc(cG / 2, cG / 2, cG / 2 - wb, 0, 2 * Math.PI), wJ[a2].fill(), wJ[a2].lineWidth =
					wb, wJ[a2].fillStyle = cY.cZ, wJ[a2].strokeStyle = cY.cZ, wJ[a2].beginPath(), wJ[a2].arc(cG / 2, cG / 2, cG / 2 - wb, 0, 2 * Math.PI), wJ[a2].stroke(), m6(wJ[a2], 0, 0, cG, wb, .3, 0 === a2)
			}()
	}, this.gi = function() {
		return -dL / dM
	}, this.cT = function() {
		return -dN / dM
	}, this.hS = function(wP, d4) {
		dL = dM * wP - d4
	}, this.hT = function(wQ, d5) {
		dN = dM * wQ - d5
	}, this.cL = function(wO, sk) {
		return hG || ! function(wO, sk) {
			return Math.pow(wO - (gY + cG / 2), 2) + Math.pow(sk - (gZ + cG / 2), 2) < cG * cG / 4 || Math.pow(wO - (gY + cG / 2), 2) + Math.pow(sk - (gZ + 2 * cG), 2) < cG * cG / 4
		}(wO, sk) || gm.gn.wR ? (ft.hW() && (this.hI = !0, wK = wO, wL = sk), !1) : sk < gZ + 1.25 * cG ? this.nl(Math.floor(gg / 2), Math.floor(cP / 2), -200) : this.nl(Math.floor(gg / 2), Math.floor(cP / 2), 200)
	}, this.ni = function(wO, sk) {
		var wS, wT, d7, dA;
		return !ft.hW() || (wS = dL, wT = dN, dL += d7 = wK - wO, dN += dA = wL - sk, fS.ni(d7, dA), this.wU(), wK = wO, wL = sk, wS !== dL) || wT !== dN
	}, this.nl = function(cM, cN, deltaY) {
		var hQ;
		if (ft.hW()) {
			if (0 < deltaY) hQ = (hQ = 500 / (500 + deltaY)) < .5 ? .5 : hQ;
			else {
				if (!(deltaY < 0)) return !1;
				hQ = 2 < (hQ = (500 - deltaY) / 500) ? 2 : hQ
			}
			this.wV(cM, cN, hQ), aA.cJ = !0
		}
		return !0
	}, this.wV = function(gY, gZ, d0) {
		var c3;
		d0 = c3 = (c3 = 1024 < (c3 = d0) * dM ? 1024 / dM : c3) * dM < .125 ? .125 / dM : c3, fS.zoom(d0, gY, gZ),
			function(c3, cM, cN) {
				dM *= c3, dL = (dL + cM) * c3 - cM, dN = (dN + cN) * c3 - cN, hH.wU()
			}(d0, gY, gZ)
	}, this.wU = function() {
		var wY = p / 16,
			cg = 0,
			wZ = q / 16,
			ci = 0;
		dL < wY - p && (cg = wY - p - dL), dN < wZ - q && (ci = wZ - q - dN), dL += cg = dM * an - wY < dL ? dM * an - wY - dL : cg, dN += ci = dM * ao - wZ < dN ? dM * ao - wZ - dN : ci, hU.hV(), fS.wa(cg, ci)
	}, this.vg = function() {
		gY = gg - cG - k4, gZ = Math.floor(cP / 2 - 1.25 * cG)
	}, this.cU = function() {
		gm.gn.wR || (cV.drawImage(wI[0], gY, gZ), cV.drawImage(wI[1], gY, Math.floor(gZ + 3 * cG / 2)))
	}
}

function qD() {
	var aR, lH, wc, wd, lc, we, wf, wg, wh, wi, cF, wj, wk, wl, wm, ug, wn, wo, wp;

	function wt() {
		wd = Math.floor(.2 * (o ? .07 : .035) * c6), wd = sg(o ? 3 : 1, wd);
		var wy = p / (aR.length + lc);
		wd = wd < wy ? wy : wd, ug = Math.floor((1 - lc) * wd), lH = 0, wz()
	}

	function wz() {
		lH = (lH = lH < -20 ? -20 : lH) > (aR.length - 15) * wd ? (aR.length - 15) * wd : lH, wf = Math.floor(lH / wd), wg = (wg = wf + Math.floor(gg / wd)) > aR.length - 1 ? aR.length - 1 : wg, wf = (wf = wg < wf ? wg : wf) < 0 ? 0 : wf;
		var kb = wg;
		we = wc / aR[kb];
		for (var a2 = wg - 1; wf <= a2; a2--) aR[a2] > aR[kb] && (kb = a2, we = wc / Math.pow(aR[a2], wm))
	}

	function x2(gY) {
		gY = Math.floor((lH + gg - gY - lc * wd) / wd);
		return (gY = gY < -1 ? -1 : -1 === gY ? 0 : gY > aR.length - 1 ? -1 : gY) !== wh && (wh = gY, -1 === wn && 0 === wh && wl && (wn = setInterval(x3, 100)), 1)
	}

	function x4(a2) {
		var uV = Math.floor(we * Math.pow(aR[a2], wm));
		cV.fillRect(lH + gg - (a2 + 1) * wd, cP - uV, ug, uV)
	}

	function x3() {
		var bP;
		0 !== (wh = 8 === aH.oP() ? -1 : wh) ? (wo = (new Date).getTime(), clearInterval(wn), wn = -1) : (bP = aR[1] / 864e3, -1 !== wo && (bP += ((new Date).getTime() - wo) * aR[1] / 864e5, wo = -1), 0 < bP && (aR[0] += Math.floor(bP), aA.cJ = !0))
	}
	this.c5 = function() {
		wl = !(wo = wn = -1), wh = -(wm = 1), this.wq = !1, wk = 0, wj = new Date, lH = 0, lc = .3, (wp = []).push({
			tA: "Plateau A",
			bH: 0,
			nU: 57
		}), wp.push({
			tA: "Max A",
			bH: 1,
			nU: 1
		}), wp.push({
			tA: "Black Friday",
			bH: 15,
			nU: 15
		}), wp.push({
			tA: "Max B",
			bH: 19,
			nU: 19
		}), wp.push({
			tA: "Max C",
			bH: 44,
			nU: 44
		}), wp.push({
			tA: "First Android Version",
			bH: 58,
			nU: 58
		}), wp.push({
			tA: "Max D",
			bH: 67,
			nU: 67
		}), wp.push({
			tA: "The iFrame Explosion",
			bH: 98,
			nU: 99
		}), wp.push({
			tA: "The 155-Day Uptrend",
			bH: 58,
			nU: 213
		}), wp.push({
			tA: "Max E",
			bH: 213,
			nU: 213
		}), wp.push({
			tA: "Plateau B",
			bH: 214,
			nU: 259
		}), wp.push({
			tA: "Turbulent Times",
			bH: 260,
			nU: 344
		}), wp.push({
			tA: "Max F",
			bH: 262,
			nU: 262
		}), wp.push({
			tA: "Max G",
			bH: 282,
			nU: 282
		}), wp.push({
			tA: "Max H",
			bH: 333,
			nU: 333
		}), wp.push({
			tA: "The 19-Day Downtrend",
			bH: 283,
			nU: 301
		}), wp.push({
			tA: "Plateau C",
			bH: 345,
			nU: 385
		}), wp.push({
			tA: "The Alliance Ascent",
			bH: 386,
			nU: 395
		}), wp.push({
			tA: "Max I",
			bH: 395,
			nU: 395
		}), wp.push({
			tA: "First iOS Version",
			bH: 411,
			nU: 411
		}), wp.push({
			tA: "Plateau D",
			bH: 396,
			nU: 453
		}), wp.push({
			tA: "The TikTok Revolution",
			bH: 454,
			nU: 470
		}), wp.push({
			tA: "Max J",
			bH: 456,
			nU: 456
		}), wp.push({
			tA: "Max K",
			bH: 472,
			nU: 472
		}), wp.push({
			tA: "Max L",
			bH: 478,
			nU: 478
		}), wp.push({
			tA: "YT Drew",
			bH: 471,
			nU: 485
		}), wp.push({
			tA: "Plateau E",
			bH: 485,
			nU: 600
		}), wp.push({
			tA: "Uptrend A",
			bH: 600,
			nU: 613
		}), wp.push({
			tA: "Max M",
			bH: 613,
			nU: 613
		}), wp.push({
			tA: "Downtrend A",
			bH: 614,
			nU: 635
		}), wp.push({
			tA: "Plateau F",
			bH: 636,
			nU: 737
		}), wp.push({
			tA: "End of Record",
			bH: 738,
			nU: 738
		}), aR = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
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
		], this.resize(), fV.ws(0, 0)
	}, this.resize = function() {
		wc = Math.floor(.15 * q), wi = Math.floor((o ? .018 : .0137) * c6), cF = c9 + (wi = wi < 2 ? 2 : wi) + cA, wt()
	}, this.wu = function() {
		wl || ih.wv()
	}, this.ww = function(wx) {
		var a2;
		for (wl = !0, a2 = 0; a2 < wx.length; a2++) aR.unshift(wx[a2]);
		wt(), aA.cJ = !0
	}, this.x0 = function() {
		wz()
	}, this.ni = function(gY, gZ) {
		cP - .6 * wc < gZ ? this.wq ? gY !== wk && (lH += gY - wk, wk = gY, wz(), x2(gY), this.wq = -1 !== wh, aA.cJ = !0) : x2(gY) && (aA.cJ = !0) : this.oE()
	}, this.oE = function() {
		-1 !== wh && (this.wq = !1, wh = -1, aA.cJ = !0)
	}, this.nl = function(gY, deltaY) {
		-1 !== wh && (lH += Math.floor(deltaY), wz(), x2(gY), aA.cJ = !0)
	}, this.cL = function(gY, gZ) {
		this.ni(gY, gZ), -1 !== wh && (wk = gY, this.wq = !0)
	}, this.oF = function() {
		-1 !== wh && (this.wq = !1)
	}, this.cU = function() {
		cV.fillStyle = cY.hs;
		for (var x6, month, r, mA, x9, xA, ge, xB, xC, a2 = wg; wf <= a2; a2--) x4(a2);
		wl && 0 === wf && (cV.fillStyle = cY.iD, x4(0)), -1 !== wh && (cV.fillStyle = cY.hr, x4(wh)), -1 !== wh && (cV.font = cF, cV.textBaseline = uI, (r = new Date).setTime(wj.getTime() - 1e3 * wh * 60 * 60 * 24), month = "month", x6 = "day",
			"undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(r), x6 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(r)), x6 = x6 + ", " + r.getUTCDate() + " " + month + " " + r.getFullYear(), month = 1 === aR[wh] ? " second played" : " seconds played", month = fl.gp(aR[wh]) + month, r = Math.floor(cV.measureText(x6).width), mA = Math
			.floor(cV.measureText(month).width), x9 = Math.floor(.5 * (r + wi)), xA = (xA = lH + gg - (wh + 1) * wd) < x9 ? x9 : gg - x9 < xA ? gg - x9 : xA, ge = cP - Math.floor(we * Math.pow(aR[wh], wm)), xB = Math.floor(1.1 * wi), xC =
			cP - xB < ge ? cP - xB : ge, cV.fillStyle = cY.ho, cV.fillRect(gg - mA - wi, xC - xB, mA + wi, xB), cV.fillRect(xA - x9, cP - xB, r + wi, xB), cV.fillStyle = cY.cZ, cV.textAlign = uJ, cV.fillText(month, Math.floor(gg - .5 * wi),
				xC),
			function(ge, xB) {
				for (var m9, rH = -1, c8 = aR.length - wh - 1, a2 = wp.length - 1; 0 <= a2; a2--) c8 >= wp[a2].bH && c8 <= wp[a2].nU && (-1 === rH || wp[a2].nU - wp[a2].bH < wp[rH].nU - wp[rH].bH) && (rH = a2); - 1 !== rH && (m9 = Math.floor(
					cV.measureText(wp[rH].tA).width), cV.fillStyle = cY.ho, cV.fillRect(gg - m9 - wi, ge, m9 + wi, xB), cV.fillStyle = cY.cZ, cV.fillText(wp[rH].tA, Math.floor(gg - .5 * wi), ge + xB))
			}(xC - 2 * xB, xB), cV.textAlign = cX, cV.fillText(x6, xA, cP), cV.strokeStyle = cY.ht, cV.lineWidth = 1, cV.beginPath(), cV.moveTo(0, ge), cV.lineTo(gg, ge), cV.closePath(), cV.stroke())
	}
}

function qE() {
	var cF, cG, gZ, xE, xF, or, hi, uc, p1, xG, xH, xI, xJ;
	this.gY = 0, this.eH = 0, this.c5 = function() {
		xF = lh, xH = "rgba(0,100,0,0.8)", xI = "rgba(150,0,0,0.8)", uc = !(xG = !0), p1 = bB[bA], this.resize()
	}, this.resize = function() {
		cG = Math.floor((o ? .305 : .24) * c6), this.eH = Math.floor(.5 + .13 * cG), cG = Math.floor(6 * this.eH), cF = c9 + Math.floor(.8 * this.eH) + cA, xJ = Math.floor(.5 * this.eH), kl.font = cF, gZ = k4, xE = Math.floor(1 + .13 * this.eH),
			(or = document.createElement("canvas")).width = cG, or.height = this.eH, (hi = or.getContext("2d", {
				alpha: !0
			})).font = cF, hi.textBaseline = cW, hi.textAlign = cX, this.xK()
	}, this.v2 = function() {
		return o && p < 1.2 * q
	}, this.vg = function() {
		this.v2() ? this.gY = gg - cG - k4 : this.gY = Math.floor(fh.xL() + (gg - fh.xL() - fT.cG - cG) / 2 - .5 * k4)
	}, this.g0 = function() {
		uc && (uc = !1, this.xK())
	}, this.xK = function() {
		hi.clearRect(0, 0, cG, this.eH), hi.fillStyle = xG ? xH : xI, hi.fillRect(0, 0, cG, this.eH), hi.fillStyle = cY.hr, this.xM(), this.xN(), hi.fillStyle = bB[bA] >= bC.ec(bA) ? cY.iA : cY.cZ, hi.fillText(fl.gp(p1), Math.floor(cG / 2), xJ),
			hi.fillStyle = cY.cZ, hi.fillRect(0, 0, cG, 1), hi.fillRect(0, 0, 1, this.eH), hi.fillRect(0, this.eH - 1, cG, 1), hi.fillRect(cG - 1, 0, 1, this.eH)
	}, this.xM = function() {
		var lP = va(Math.floor((bC.xO() - 1) * this.eH / 9), this.eH - xE);
		hi.fillRect(0, lP, xE, this.eH - lP), hi.fillRect(cG - xE, lP, xE, this.eH - lP)
	}, this.xN = function() {
		hi.fillRect(xE, this.eH - xE, Math.floor((cG - 2 * xE) * bB[bA] / xF), xE)
	}, this.eY = function() {
		0 !== dG[bA] && 2 !== dH[bA] && p1 !== bB[bA] && (xF = sg(bB[bA], xF), xG = bB[bA] > p1 && 10 <= bB[bA], p1 = bB[bA], uc = !0)
	}, this.cU = function() {
		0 === dG[bA] || hC || 2 === dH[bA] || cV.drawImage(or, this.gY, gZ)
	}
}

function qF() {
	var xQ, xR, xS, xT, xU, xV, xW, xX, xY, xZ, xa, xb, xc, xd, xe, xf, xg, xh, xi, title, xj, xk, xl, xm, xn, position, xo, xp, xq, xr, xs = 1;

	function xv() {
		xW.clearRect(0, 0, xQ, vI), xW.fillStyle = cY.iM, xW.fillRect(0, 0, xQ, xb), xW.fillStyle = cY.hn, xW.fillRect(0, xb, xQ, vI - xb), xP[bA] >= position && xy(xP[bA] - position, cY.i7), 0 !== xP[bA] && 0 === position && xy(0, cY.iQ), -1 !==
			xn && xy(xn, cY.hq), xW.fillStyle = cY.cZ, xW.fillRect(0, xb, xQ, 1), xW.fillRect(0, 0, xQ, uN), xW.fillRect(0, 0, uN, vI), xW.fillRect(xQ - uN, 0, uN, vI), xW.fillRect(0, vI - uN, xQ, uN), xW.font = xR, xW.textBaseline = cW, xW
			.textAlign = cX, xW.fillText(title, Math.floor(xQ / 2), Math.floor(xZ + xS / 2));
		var dx, bQ = xP[bA] < position + xU - 1 ? 1 : 2;
		for (xW.font = xT, xW.textAlign = so, dx = xU - bQ; 0 <= dx; dx--) xz(gC[dx + position]), y0(dx, dx + position, gC[dx + position]);
		for (xW.textAlign = uJ, dx = xU - bQ; 0 <= dx; dx--) xz(gC[dx + position]), y1(dx, gC[dx + position]);
		2 == bQ && (xz(bA), xW.textAlign = so, y0(xU - 1, xP[bA], bA), xW.textAlign = uJ, y1(xU - 1, bA)), 0 === position && (bQ = .7 * xc / cC.get(4).height, xW.setTransform(bQ, 0, 0, bQ, Math.floor(xd + .58 * xc + .5 * bQ * cC.get(4).width), Math
			.floor(xZ + xS + .4 * xc)), xW.imageSmoothingEnabled = !0, xW.drawImage(cC.get(4), -Math.floor(cC.get(4).width / 2), -Math.floor(cC.get(4).height / 2)), xW.setTransform(1, 0, 0, 1, 0, 0))
	}

	function xz(player) {
		di && (xW.fillStyle = ep.y3[ep.nB[ep.eq[player]]])
	}

	function xy(a2, rM) {
		xW.fillStyle = rM, a2 = xU - 1 < a2 ? xU - 1 : a2;
		rM = Math.floor((a2 === xU - 1 ? 2 : 0 === a2 ? 1.15 : 1) * xc), rM = a2 === xU - 2 ? Math.floor(xb + 9.15 * xc) - Math.floor(xb + 8.15 * xc) : rM;
		xW.fillRect(0, Math.floor(xb + (a2 + (0 === a2 ? 0 : .15)) * xc), xQ, rM)
	}

	function y0(y5, y6, a2) {
		xW.fillText(xj[y6], xd, Math.floor(xZ + xS + (y5 + .5) * xc)), 1 === dH[a2] && (xW.font = uK + xT);
		y6 = Math.floor(xZ + xS + (y5 + .5) * xc);
		xW.fillText(xh[a2] === a2 ? gq[a2] : xg[xh[a2] % bM], xe, y6), 0 !== dH[a2] && (xW.font = xT), a2 < dF && 2 !== dH[a2] || xW.fillRect(xe, y6 + .35 * xs, xi[a2], Math.max(1, .1 * xs))
	}

	function y1(y5, a2) {
		xW.fillText(bi[a2], xf, Math.floor(xZ + xS + (y5 + .5) * xc))
	}

	function yF(gZ) {
		return (gZ -= k4 + xb) < 0 ? Math.floor(gZ / xc) - 1 : gZ < (xU - 1) * xc ? Math.floor(gZ / xc) : gZ < vI - xb ? xU - 1 : (gZ -= vI - xb, xU + Math.floor(gZ / xc))
	}

	function rs(gY, gZ) {
		return k4 <= gY && gY < k4 + xQ && k4 <= gZ && gZ < k4 + vI
	}
	this.c5 = function() {
		var a2, j, dx;
		for (xp = !1, title = "LEADERBOARD", xU = o ? 6 : 10, position = xr = xq = xo = 0, xm = !(xn = -1), xk = new Uint16Array(xU + 1), xl = new Uint32Array(xU + 1), xY = bM, gC = new Uint16Array(xY), xP = new Uint16Array(xY), a2 = xY - 1; 0 <=
			a2; a2--) gC[a2] = a2, xP[a2] = a2;
		this.resize(!0), xg = [], xh = new Uint16Array(bM), xi = new Uint16Array(bM);
		var xt = Math.floor(xQ - xe - xd - xX),
			xu = 0;
		for (xj = new Array(bM), xW.font = xT, a2 = bM - 1; 0 <= a2; a2--)
			if (xj[a2] = a2 + 1 + ".", xh[a2] = a2, xi[a2] = Math.floor(xW.measureText(gq[a2]).width), xi[a2] > xt) {
				for (j = gq[a2], dx = gq[a2].length - 1; 1 <= dx && (j = j.substring(0, dx), xi[a2] = Math.floor(xW.measureText(j + "...").width), !(xi[a2] <= xt)); dx--);
				j += "...", xg.push(j), xh[a2] = bM + xu++
			} xv()
	}, this.resize = function(c5) {
		if (vI = o ? (xQ = Math.floor(.335 * c6), Math.floor(xU * xQ / 8)) : (xQ = Math.floor(.27 * c6), Math.floor(xU * xQ / 10)), xQ = Math.floor(.97 * xQ), (xV = document.createElement("canvas")).width = xQ, xV.height = vI, xW = xV.getContext(
				"2d", {
					alpha: !0
				}), xZ = .025 * xQ, xS = .16 * xQ, xa = 0 * xQ, xb = Math.floor(.45 * xZ + xS), xc = (vI - xS - 2 * xZ - xa) / xU, xR = c9 + Math.floor(.55 * xS) + cA, xs = Math.floor((o ? .67 : .72) * xc), xT = xs + cA, xW.font = xT, xd = Math
			.floor(.04 * xQ), xe = Math.floor((o ? .195 : .18) * xQ), xX = Math.floor(xW.measureText("00920600").width), xW.font = xR, xf = xQ - xd, !c5) {
			xW.font = xT;
			for (var a2 = bM - 1; 0 <= a2; a2--) xi[a2] = Math.floor(xW.measureText(xh[a2] === a2 ? gq[a2] : xg[xh[a2] % bM]).width);
			xv()
		}
	}, this.xL = function() {
		return xQ
	}, this.g0 = function(tP) {
		xm && (tP || aA.en() % gm.xw[gm.gn.xx] == 0) && (xm = !1, xv())
	}, this.eY = function() {
		! function() {
			for (var dx = xY - 1; 0 <= dx; dx--) 0 === dG[gC[dx]] && ! function(dx) {
				var yD = gC[dx];
				xY--;
				for (var a2 = dx; a2 < xY; a2++) gC[a2] = gC[a2 + 1], xP[gC[a2]] = a2;
				gC[xY] = yD, xP[gC[xY]] = xY
			}(dx)
		}();
		for (var yB, hW = xY - 1, dx = 0; dx < hW; dx++) bi[gC[dx]] < bi[gC[dx + 1]] && (yB = gC[dx], gC[dx] = gC[dx + 1], gC[dx + 1] = yB, xP[gC[dx]] = dx, xP[gC[dx + 1]] = dx + 1);
		! function() {
			for (var r = xm, bQ = (xm = !0, xP[bA] >= xU - 1 ? xU - 2 : xU - 1), a2 = bQ; 0 <= a2; a2--)
				if (xk[a2] !== gC[a2] || xl[a2] !== bi[gC[a2]]) return;
			(bQ != xU - 2 || xk[xU] === xP[bA] && xl[xU] === bi[bA]) && (xm = r)
		}();
		for (var a2 = xU - 1; 0 <= a2; a2--) xk[a2] = gC[a2], xl[a2] = bi[gC[a2]];
		xk[xU] = xP[bA], xl[xU] = bi[bA]
	}, this.cL = function(gY, gZ) {
		return !!rs(gY, gZ) && (xo = aA.aB, xp = !0, xq = xr = yF(gZ), o7.ob() && (gY = w0(-1, xr, xU), xn !== (gY = gY === xU ? -1 : gY)) && (xn = gY, xv(), aA.cJ = !0), !0)
	}, this.ni = function(gY, gZ) {
		var r, yE = yF(gZ);
		return xp ? (r = position, (position = w0(0, position += xq - yE, bM - xU)) !== r && (yE = (yE = w0(-1, xq = yE, xU)) !== xU && rs(gY, gZ) ? yE : -1, xn = yE, xv(), aA.cJ = !0), !0) : (yE = (yE = w0(-1, yE, xU)) === xU || !rs(gY, gZ) ||
			o7.ob() ? -1 : yE, xn !== yE && (xn = yE, xv(), aA.cJ = !0))
	}, this.oF = function(gY, gZ) {
		if (!xp) return !1;
		xp = !1;
		var yE = yF(gZ);
		return o7.ob() && -1 !== xn && (xn = -1, xv(), aA.cJ = !0), aA.aB - xo < 350 && xr === yE && -1 !== (yE = (yE = w0(-1, yE, xU)) !== xU && rs(gY, gZ) ? yE : -1) && (gY = gC[yE + position], yE === xU - 1 && xP[bA] >= position + xU - 1 && (
			gY = bA), di && displayDonationsHistory(gY, gq, fH), 0 !== dG[gY]) && ft.hE(gY, 800, !1, 0), !0
	}, this.nl = function(gY, gZ, deltaY) {
		var yG;
		return !(xp || hG || (yG = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !rs(gY, gZ)) || (gY = (gY = w0(-1, yF(gZ), xU)) === xU || o7.ob() ? -1 : gY, 0 < deltaY ? position < bM - xU && (position += Math.min(bM - xU - position, yG), xn =
			gY, xv(), aA.cJ = !0) : 0 < position && (position -= Math.min(position, yG), xn = gY, xv(), aA.cJ = !0), 0))
	}, this.cU = function() {
		cV.drawImage(xV, k4, k4)
	}
}

function qG() {
	var or, hi, gY, gZ, uV, yH, lc, yI, cE, yJ, ry, bF, yK, yL, yM, yN, yO, yP;

	function yS() {
		hi.clearRect(0, 0, fT.cG, fT.eH), hi.fillStyle = cY.ho, hi.fillRect(0, 0, fT.cG, fT.eH), hi.fillStyle = cY.i2, d0 = 0 < yM ? yM : Math.sqrt(bF[4] / bF[3]), hi.fillRect(0, fT.eH - uV - 1, Math.floor(d0 * fT.cG), uV), hi.fillStyle = cY.cZ, hi
			.fillRect(0, 0, fT.cG, 1), hi.fillRect(0, 0, 1, fT.eH), hi.fillRect(fT.cG - 1, 0, 1, fT.eH), hi.fillRect(0, fT.eH - 1, fT.cG, 1), hi.fillRect(0, fT.eH - uV - 1, fT.cG, 1);
		for (var d0, yU, r = 0, a2 = 0; a2 < ry.length; a2++) yK[a2] ? (hi.textAlign = so, yU = Math.floor((yH - uV + 2 * yI) * (a2 - r + 1) / (ry.length + 1) - .7 * yI), hi.fillText(ry[a2], lc, yU), hi.textAlign = uJ, 5 === a2 && 0 !== dG[bA] && bB[
			bA] >= bC.ec(bA) ? (hi.fillStyle = cY.iO, hi.fillText(yR(a2), fT.cG - lc, yU), hi.fillStyle = cY.cZ) : hi.fillText(yR(a2), fT.cG - lc, yU)) : r++
	}

	function yR(a2) {
		return a2 < 3 ? bF[a2].toString() : 3 === a2 || 4 === a2 || 5 === a2 ? fT.tJ(bF[a2] / 100, 2) : a2 < 7 ? fl.gp(bF[a2]) : fT.xO(bF[7])
	}

	function ya(yb) {
		yb = b6(1e4 * yb, pK);
		8 === fF && (0 === dG[0] ? fW.mm.mu(1) : 0 === dG[1] && fW.mm.mu(0)), yb >= bF[3] && (fW.mm.mu(-1), bF[4] = -1), bF[4] !== yb && (yJ++, bF[4] = yb)
	}

	function ye() {
		for (var a2 = er - 1; 0 <= a2; a2--)
			if (0 < bI[es[a2]].length) return;
		return 1
	}

	function yQ() {
		bi[bA] !== bF[6] && (bF[6] = bi[bA], yJ++)
	}
	this.c5 = function() {
		yM = yN = 0, (ry = new Array(8))[0] = "Humans", ry[1] = fH ? "Players" : "Bots", ry[2] = "Spectators", ry[3] = "Threshold", ry[4] = "Occupation", ry[5] = "Interest", ry[6] = "Income", ry[7] = "Time", yP = pK - b6(pK, 100), (bF =
			new Array(ry.length))[0] = fH ? 0 : dF, bF[1] = fH ? er : fA, bF[2] = n2, bF[3] = 1e4, bF[4] = b6(1e4 * bi[0], pK), bF[5] = 700, bF[6] = 0, yQ(), bF[7] = 0, yL = yR(6), yK = new Array(ry.length);
		for (var a2 = ry.length - 1; 0 <= a2; a2--) yK[a2] = !0;
		yO = 0, yO = fH ? (yK[0] = !1, yK[2] = !1, yK[3] = !1, 3) : (yK[3] = !1, 1), yJ = 0, this.resize()
	}, this.resize = function() {
		this.cG = Math.floor((o ? .1646 : .126) * c6), this.eH = Math.floor(1.18 * this.cG), uV = Math.floor(.04 * this.cG), lc = Math.floor(.035 * this.cG), yI = .04 * this.cG, yH = this.eH, this.eH -= Math.floor(yO * (this.eH - 2 * uV) / ry
			.length), cE = Math.floor(.7 * (yH - uV) / ry.length), cE = c9 + cE + cA, (or = document.createElement("canvas")).width = this.cG, or.height = this.eH, (hi = or.getContext("2d", {
			alpha: !0
		})).font = cE, hi.textBaseline = cW, hi.lineWidth = 1, this.pE(), this.vg(), fk.vg(), yS()
	}, this.vg = function() {
		gY = gg - this.cG - k4
	}, this.yT = function() {
		gZ = k4
	}, this.pE = function() {
		gZ = k4 + (fk.v2() && 0 !== dG[bA] && !hC ? fk.eH + k4 : 0)
	}, this.g0 = function(tP) {
		0 < yJ && (tP || 100 <= yJ) && (yJ = 0, yS())
	}, this.rW = function() {
		return bF[7]
	}, this.xO = function(value) {
		var kb = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * kb) / 1e3);
		return value < 10 ? kb + ":0" + value : kb + ":" + value
	}, this.tJ = function(bP, ul) {
		return bP.toFixed(ul) + "%"
	}, this.eY = function() {
		var yb, j;
		yK[0] && n3 - n2 !== bF[0] && (bF[0] = n3 - n2, yJ++), er - bF[0] !== bF[1] && (bF[1] = er - bF[0], yJ++), this.fU(), di ? (yb = fp.nD(), yP <= yb && ye() ? (fW.mm.mu(-1), ya(fp.nD())) : ya(yb)) : (yb = bi[gC[0]], yP <= yb && ye() && fW
			.mm.mu(-1), ya(yb)), (yb = bC.yg(bA)) !== bF[5] && (bF[5] = yb, yJ++), yQ(), bF[7] += aA.yh, j = yR(7), yL !== j && (yL = j, yJ += 100)
	}, this.fU = function() {
		yK[2] && n2 !== bF[2] && (bF[2] = n2, yJ++)
	}, this.yi = function(a2) {
		var os, yj, r;
		return 2 !== g1 && (a2 === pO ? (yM = 0, yS(), !1) : (-1 !== a2 || 0 !== yN) && (yj = yM, yM = hD ? a2 / pO : (r = performance.now(), 0 <= a2 && (os = r - 392 * a2, yN = 0 === a2 || os < yN ? os : yN), 1 < (yM = (r - yN) / (392 * pO)) ?
			1 : yM), yS(), yM !== yj))
	}, this.cU = function() {
		cV.drawImage(or, gY, gZ)
	}
}

function qH() {
	var oB, yk, cG, eH, tX, yl, ym, v3, or, h3;

	function cT() {
		return Math.floor((gg - cG) / 2) < fn.eH + 2 * k4 ? cP - eH - 4 * k4 - fn.eH : cP - eH - 2 * k4
	}
	this.yn = -1, this.c5 = function() {
		oB = !1, tX = .61, yl = .07, ym = .09, h3 = v3 = eH = 0, this.yn = -1
	}, this.resize = function() {
		var hi, gd, eo, yr, ys, s2;
		oB && (cG = va(cG = o ? Math.floor(.69 * c6) : Math.floor(.5 * c6), sg(p - 2 * k4, 10)), cG = va(cG, Math.floor(3.57 * sg(q - 2 * k4, 3))), eH = Math.floor(.28 * cG), (or = document.createElement("canvas")).width = cG, or.height = eH,
			hi = or.getContext("2d", {
				alpha: !0
			}), gd = Math.floor(1 + eH / 40), hi.clearRect(0, 0, cG, eH), hi.fillStyle = cY.ho, hi.fillRect(gd, gd, cG - 2 * gd, eH - 2 * gd), hi.lineJoin = "bevel", hi.lineWidth = 2 * gd, hi.strokeStyle = cY.cZ, hi.strokeRect(gd, gd, cG -
				2 * gd, eH - 2 * gd), hi.imageSmoothingEnabled = !0, eo = cC.get(yk), yr = eo.width, ys = eo.height, s2 = (21 === yk ? .666 : 1) * tX * eH / ys, hi.setTransform(s2, 0, 0, s2, Math.floor((cG - s2 * yr) / 2), Math.floor((eH -
				s2 * ys) / 2)), hi.drawImage(eo, 0, 0), hi.setTransform(1, 0, 0, 1, Math.floor(cG - ym * eH - yl * eH - gd), Math.floor(gd + yl * eH)),
			function(hi, bH) {
				hi.lineWidth = Math.floor(1 + eH / 80), hi.strokeStyle = cY.cZ, hi.beginPath(), hi.moveTo(0, 0), hi.lineTo(bH, bH), hi.moveTo(0, bH), hi.lineTo(bH, 0), hi.stroke()
			}(hi, Math.floor(ym * eH)), hi.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(aF, yp, yq) {
		oB || (yk = yq ? 21 : aF ? 1 : 2, oB = !0, this.resize(), m1.kB(), fn.vV(), h3 = aA.aB, -1 === this.yn && (this.yn = aA.en()), v3 = yp ? 1 : 0)
	}, this.eY = function() {
		!oB || 1 <= v3 || (v3 = 1 < (v3 += 5e-4 * (aA.aB - h3)) ? 1 : v3, h3 = aA.aB, aA.cJ = !0)
	}, this.cL = function(gY, gZ) {
		return !(!oB || v3 <= 0 || (gY -= Math.floor((gg - cG) / 2), gZ -= cT(), gY < 0) || gZ < 0 || cG < gY || eH < gZ || (cG - eH / 3 < gY && gZ < eH / 3 && (oB = !1, aA.cJ = !0), 0))
	}, this.cU = function() {
		!oB || v3 <= 0 || (cV.globalAlpha = v3, cV.drawImage(or, Math.floor((gg - cG) / 2), cT()), cV.globalAlpha = 1)
	}
}

function yu() {
	this.yv = !1, this.hf = !1, this.pI = !1, this.yw = [0, 0, 0, 0], this.yx = function() {
		var gd, ge, gf, gh;
		this.pI = this.pI || this.hf, (this.hf || this.yv && this.pI) && (gd = hU.yy[0], ge = hU.yy[1], gf = hU.yy[2], gh = hU.yy[3], gd = gd < this.yw[0] ? this.yw[0] : gd, ge = ge < this.yw[1] ? this.yw[1] : ge, gf = gf > this.yw[2] ? this.yw[
			2] : gf, gh = gh > this.yw[3] ? this.yw[3] : gh, this.hf = !1, this.yv = !1, gd === this.yw[0] && ge === this.yw[1] && gf === this.yw[2] && gh === this.yw[3] ? this.pJ() : gd <= gf && ge <= gh && pf.putImageData(pg, 0, 0, gd,
			ge, gf - gd + 1, gh - ge + 1))
	}, this.pJ = function() {
		this.pI && this.yw[2] >= this.yw[0] && this.yw[3] >= this.yw[1] && pf.putImageData(pg, 0, 0, this.yw[0], this.yw[1], this.yw[2] - this.yw[0] + 1, this.yw[3] - this.yw[1] + 1), this.pI = !1
	}, this.n6 = function() {
		this.yw[2] >= this.yw[0] && this.yw[3] >= this.yw[1] && pf.putImageData(pg, 0, 0, this.yw[0], this.yw[1], this.yw[2] - this.yw[0] + 1, this.yw[3] - this.yw[1] + 1), this.pI = !1
	}, this.c5 = function() {
		var gY, gZ;
		this.yv = !1, this.hf = !1, this.pI = !1, this.yw[0] = an, this.yw[1] = ao, this.yw[2] = this.yw[3] = 0;
		loop: for (gY = 1; gY < an - 1; gY++)
			for (gZ = ao - 2; 1 < gZ; gZ--)
				if (1 === yz[bJ.lX(gY, gZ) + 2]) {
					this.yw[0] = gY;
					break loop
				} loop: for (gZ = 1; gZ < ao - 1; gZ++)
			for (gY = an - 2; 1 < gY; gY--)
				if (1 === yz[bJ.lX(gY, gZ) + 2]) {
					this.yw[1] = gZ;
					break loop
				} loop: for (gY = an - 2; 0 < gY; gY--)
			for (gZ = ao - 2; 1 < gZ; gZ--)
				if (1 === yz[bJ.lX(gY, gZ) + 2]) {
					this.yw[2] = gY;
					break loop
				} loop: for (gZ = ao - 2; 0 < gZ; gZ--)
			for (gY = an - 2; 1 < gY; gY--)
				if (1 === yz[bJ.lX(gY, gZ) + 2]) {
					this.yw[3] = gZ;
					break loop
				}
	}
}

function z0() {
	this.oB = !1, this.sI = null, this.z1 = 0, this.cG = null, this.eH = null, this.z2 = .013, this.z3 = .022, this.z4 = .025;
	this.z6 = 3, this.z7 = 1.2, this.z8 = .2, this.z9 = .235, this.zA = .9, this.zB = .08;
	var zD, zC = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"],
		zE = [-1e6, -1e6];
	this.position = [0, 0], this.zG = [0, 0], this.c5 = function() {
		this.sI = [null, null], this.oB = !1, this.z1 = 0
	}, this.cS = function(id) {
		this.oB = !0, this.resize(), this.z1 = id, this.cB(), oN.cS(!1), aA.cJ = !0
	}, this.eY = function() {
		this.oB && this.cB()
	}, this.cB = function() {
		aA.aB - 12e4 >= zE[this.z1] && (zE[this.z1] = aA.aB, this.zG = [0, 0], fV.ws(0, 1 + this.z1)) && ih.zH(0, this.z1)
	}, this.resize = function() {
		if (this.oB) {
			var a2;
			for (this.cG = this.zI(o ? .85 : .66, .75, p, q), this.eH = Math.floor(this.cG / .75), a2 = 1; 0 <= a2; a2--) this.sI[a2] && (this.sI[a2][4] = c9 + Math.floor(this.sI[a2][5] * this.eH / 10) + cA);
			zD = c9 + Math.floor(.1 * this.eH) + cA
		}
	}, this.zI = function(c3, tZ, cG, eH) {
		return cG < tZ * eH ? Math.floor(c3 * cG) : Math.floor(tZ * c3 * eH)
	}, this.zJ = function(c8, zK, zL, ul, zM, zN, y5) {
		this.position[c8] = y5;
		for (var v0, dt = zK.length, cF = c9 + Math.floor(zM * this.eH / 10) + cA, aR = (this.zO(zK, cF, zN * this.cG), [
				[], dt, -1, ul, cF, zM, 10 * y5
			]), a2 = 0; a2 < dt; a2++) v0 = {
			name: zK[a2].name,
			value: zK[a2].mH / zL,
			colorIndex: zK[a2].colorIndex
		}, aR[0].push(v0);
		this.sI[c8] = aR, this.zP(c8);
		zN = this.sI[c8][0][0].name;
		1 === c8 && (zN = "[" + zN + "]"), 0 === y5 && zQ.c7(c8, zN), aA.cJ = !0
	}, this.zP = function(a2) {
		this.sI[a2][0].sort(function(dx, e8) {
			return e8.value - dx.value
		})
	}, this.zR = function(c8, name, zS, zT) {
		if (this.sI && this.sI[c8]) {
			var a2, tB = !1;
			if (0 === c8) {
				for (a2 = 0; a2 < this.sI[c8][0].length; a2++)
					if (name === this.sI[c8][0][a2].name && zS > .99 * this.sI[c8][0][a2].value && zS < 1.01 * this.sI[c8][0][a2].value) {
						this.sI[c8][0][a2].value = zT, tB = !0;
						break
					} tB || this.sI[c8][0].push({
					name: name,
					value: zT
				})
			} else {
				for (a2 = 0; a2 < this.sI[c8][0].length; a2++)
					if (name === this.sI[c8][0][a2].name) {
						this.sI[c8][0][a2].value += 32 < this.sI[c8][0][a2].value ? (64 - this.sI[c8][0][a2].value) / 256 : .25, this.sI[c8][0][a2].value *= 1 / (383 / 384), tB = !0;
						break
					} for (a2 = 0; a2 < this.sI[c8][0].length; a2++) this.sI[c8][0][a2].value *= 383 / 384;
				tB || this.sI[c8][0].push({
					name: name,
					value: .25
				})
			}
			this.zP(c8)
		}
	}, this.zO = function(zK, cF, cI) {
		for (var a2 = zK.length - 1; 0 <= a2; a2--)
			for (; 3 < zK[a2].name.length && cH.measureText(zK[a2].name, cF) > cI;) zK[a2].name = zK[a2].name.substring(0, zK[a2].name.length - 4) + "..."
	}, this.cL = function(d4, d5) {
		return !!this.oB && (d4 -= (gg - this.cG) / 2, d5 -= (cP - this.eH) / 2, d4 < 0 || d4 > this.cG || d5 < 0 || d5 > this.eH ? (this.oB = !1, 0 === aH.oP() && oN.cS(!0), aA.cJ = !0) : (d5 = d5 < .3 * this.eH ? 1 : d5 < .85 * this.eH ? (d5 =
			(0 === this.z1 ? 14.1 : 3) * (d5 - .3 * this.eH) / (.55 * this.eH), Math.floor(1 + d5 * d5)) : 0 === this.z1 ? 200 : 10, d4 < this.cG / 2 ? this.zG[this.z1] = -d5 : this.zG[this.z1] = d5, zE[this.z1] + 50 > aA.aB || (zE[
			this.z1] = aA.aB, fV.ws(0, 1 + this.z1) && ih.zH(0, this.z1)), !0))
	}, this.cU = function() {
		var gd, ge, m9, mA, zU, zV, ou, ov;
		this.oB && (gd = (gg - this.cG) / 2, ge = (cP - this.eH) / 2, m9 = this.z2 * this.cG, mA = this.z6 * m9, zU = this.z3 * this.cG, zV = this.z7 * zU, ou = this.z4 * this.cG, ov = Math.floor(.25 * this.eH), cV.setTransform(1, 0, 0, 1, gd,
				ge), cV.fillStyle = 0 === this.z1 ? cY.iI : cY.iG, cV.fillRect(0, 0, this.cG, ov), cV.fillStyle = cY.hn, cV.fillRect(0, ov, this.cG, this.eH - ov), cV.fillStyle = cY.cZ, cV.font = zD, cV.textBaseline = cW, cV.textAlign = cX,
			cV.fillText(zC[this.z1], Math.floor(this.cG / 2), Math.floor(.135 * this.eH)), cV.font = c9 + Math.floor(.025 * this.eH) + cA, cV.fillText(zC[this.z1 + 2], Math.floor(this.cG / 2), Math.floor(.2125 * this.eH)), cV.beginPath(), cV
			.moveTo(this.cG / 4, 0), cV.lineTo(this.cG / 2 - m9, 0), cV.lineTo(this.cG / 2, -mA), cV.lineTo(this.cG / 2 + m9, 0), cV.lineTo(this.cG - zU, 0), cV.lineTo(this.cG + zV, -zV), cV.lineTo(this.cG, zU), cV.lineTo(this.cG, this.eH /
				2 - m9), cV.lineTo(this.cG + mA, this.eH / 2), cV.lineTo(this.cG, this.eH / 2 + m9), cV.lineTo(this.cG, this.eH - zU), cV.lineTo(this.cG + zV, this.eH + zV), cV.lineTo(this.cG - zU, this.eH), cV.lineTo(this.cG / 2 + m9, this
				.eH), cV.lineTo(this.cG / 2, this.eH + mA), cV.lineTo(this.cG / 2 - m9, this.eH), cV.lineTo(zU, this.eH), cV.lineTo(-zV, this.eH + zV), cV.lineTo(0, this.eH - zU), cV.lineTo(0, this.eH / 2 + m9), cV.lineTo(-mA, this.eH / 2),
			cV.lineTo(0, this.eH / 2 - m9), cV.lineTo(0, zU), cV.lineTo(-zV, -zV), cV.lineTo(zU, 0), cV.lineTo(this.cG / 4, 0), cV.lineTo(this.cG / 4, ou), cV.lineTo(ou, ou), cV.lineTo(ou, this.eH - ou), cV.lineTo(this.cG - ou, this.eH - ou),
			cV.lineTo(this.cG - ou, ou), cV.lineTo(this.cG / 4, ou), cV.fill(), this.sI[this.z1] && this.zW(ov), this.zX(ov), cV.setTransform(1, 0, 0, 1, 0, 0))
	}, this.zX = function(ov) {
		var m9 = sg(2, Math.floor(.06 * this.cG)),
			tX = (m9 -= m9 % 2, sg(2, Math.floor(.01 * this.cG))),
			ov = (tX -= tX % 2, Math.floor(.82 * ov));
		cV.fillRect(m9, ov, m9, tX), cV.fillRect(this.cG - m9 - m9, ov, m9, tX), cV.fillRect(Math.floor(this.cG - m9 - m9 + (m9 - tX) / 2), Math.floor(ov - (m9 - tX) / 2), tX, m9)
	}, this.zW = function(ov) {
		var gZ;
		cV.font = this.sI[this.z1][4];
		for (var a2 = this.sI[this.z1][1] - 1; 0 <= a2; a2--) cV.textAlign = uJ, gZ = Math.floor(this.zB * this.eH + ov + a2 * ((1 - 2 * this.zB) * this.eH - ov) / 9), cV.fillText(this.sI[this.z1][0][a2].value.toFixed(this.sI[this.z1][3]), Math
			.floor(this.zA * this.cG), gZ), cV.fillText(a2 + 1 + this.sI[this.z1][6] + ".", Math.floor(this.z8 * this.cG), gZ), cV.textAlign = so, cV.fillText(this.sI[this.z1][0][a2].name, Math.floor(this.z9 * this.cG), gZ)
	}
}

function zY() {
	var gY, gZ, eH, zZ, za, zb, zc, zd, ze, cG, zf, zg;
	this.oB = !1, this.c5 = function(j, zh) {
		if (13 <= d && d < 18) return zh ? void(zf = j) : zf !== j ? void 0 : void e.saveString(200, j);
		zh && ((cQ.sI[1].mw.oB || cQ.sI[2].mw.oB) && cQ.oQ(), oN.cS(!1), zf = j, (zg = document.createElement("a")).appendChild(document.createTextNode(zf)), this.oB = !0, zg.title = zf, zg.target = "_blank", zg.href = zf, zg.style.textAlign =
			"center", zg.style.color = cY.cZ, zg.style.position = "absolute", zg.style.padding = "0px", zg.style.margin = "0px", this.resize(), document.body.appendChild(zg), aA.cJ = !0)
	}, this.kB = function() {
		return !(!this.oB || (document.body.removeChild(zg), this.oB = !1))
	}, this.cL = function(d4, d5) {
		return !!this.oB && ((d4 < gY || d5 < gZ || gY + cG < d4 || gZ + eH < d5 || gY + cG - zZ < d4 && d5 < gZ + zZ) && (aA.cJ = !0, this.oB = !1, document.body.removeChild(zg), 0 === aH.oP()) && oN.cS(!0), !0)
	}, this.resize = function() {
		var cF, zi;
		this.oB && (zd = Math.floor(.8 * (o ? q < p ? .6 : .55 : .4) * c6), zZ = Math.floor(.15 * zd), za = Math.floor(.35 * zZ), zb = Math.floor(.5 * zZ), zc = Math.floor(2.5 * zb), eH = zZ + za + 3 * zb, cF = c9 + Math.floor(za / kE) + cA, ze =
			Math.floor(kE * cH.measureText(zf, cF)), zi = cG = (zd < ze ? ze : zd) + 2 * zc, cG = Math.min(cG, p - 2 * (o ? 2 : 1) * k4), cF = c9 + Math.floor(cG / zi * za / kE) + cA, ze = Math.floor(kE * cH.measureText(zf, cF)), gY = Math
			.floor((gg - cG) / 2), gZ = Math.floor((cP - eH) / 2), zg.style.font = cF, zg.style.top = Math.floor((gZ + 1.4 * zb + zZ) / kE) + "px", zg.style.left = Math.floor((gY + (cG - ze) / 2) / kE) + "px")
	}, this.cU = function() {
		this.oB && (cV.fillStyle = cY.ho, cV.fillRect(gY, gZ + zZ, cG, eH - zZ), cV.fillStyle = cY.iU, cV.fillRect(gY, gZ, cG, zZ), cV.fillStyle = cY.cZ, cV.lineWidth = ow, cV.strokeStyle = cY.cZ, cV.strokeRect(gY, gZ, cG, eH), cV.fillRect(gY,
			gZ + zZ, cG, ow), cV.font = c9 + Math.floor(.48 * zZ) + cA, cV.textAlign = cX, cV.textBaseline = cW, cV.fillText("You are leaving Territorial.io!", Math.floor(gY + (cG - .5 * zZ) / 2), Math.floor(gZ + .55 * zZ)), m0.sG(Math
			.floor(gY + cG - .8 * zZ), Math.floor(gZ + .25 * zZ), Math.floor(.5 * zZ)), cV.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function zj() {
	var lc, ry, gY = [0, 0, 0, 0, 0],
		gZ = [0, 0, 0, 0, 0],
		hQ = [1, 1, 1, 1, 1],
		aF = [!0, !0, !0, !0, !0],
		eo = (this.aW = [!0, !0, !0, !0, !0], null);
	this.zk = function(rJ, zl) {
		eo = rJ, aF = zl, ry = [q1.zm, q1.zn, q1.zo, q1.zp, q1.zq], this.c5()
	}, this.c5 = function() {
		if (cC.cD()) {
			var a2, m9 = Math.floor((o ? .261 : .195) * c6),
				mA = Math.floor(.9 * m9),
				tX = Math.floor(.17 * mA);
			if (lc = o ? 2 * k4 : k4, hQ[0] = m9 / eo[0].width, hQ[1] = mA / eo[1].width, hQ[2] = tX / eo[2].height, hQ[3] = tX / eo[3].height, hQ[4] = tX / eo[4].height, hQ[3] *= 1.07, gY[0] = lc, gY[1] = lc, gY[2] = lc, gY[3] = lc, gY[4] = Math
				.floor(2 * lc + hQ[3] * eo[3].width), gZ[0] = lc, gZ[1] = gZ[0] + lc + hQ[0] * eo[0].height, gZ[2] = gZ[1] + lc + hQ[1] * eo[1].height, gZ[3] = gZ[2] + lc + hQ[2] * eo[2].height, gZ[4] = gZ[3], !aF[0])
				for (a2 = 0; a2 < 5; a2++) gZ[a2] -= hQ[0] * eo[0].height + lc;
			if (!aF[1])
				for (a2 = 2; a2 < 5; a2++) gZ[a2] -= hQ[1] * eo[1].height + lc
		}
	}, this.oB = function() {
		return !(7 === aH.oP() && o)
	}, this.cL = function(d4, d5, zh) {
		if (eo && this.oB())
			for (var a2 = aF.length - 1; 0 <= a2; a2--)
				if (aF[a2] && this.aW[a2] && gY[a2] < d4 && gZ[a2] < d5 && d4 < gY[a2] + hQ[a2] * eo[a2].width && d5 < gZ[a2] + hQ[a2] * eo[a2].height) return oM.c5(ry[a2], zh), !0;
		return !1
	}, this.cU = function() {
		if (eo && this.oB()) {
			var a2;
			for (cV.imageSmoothingEnabled = !0, a2 = 0; a2 < 5; a2++) aF[a2] && this.aW[a2] && (cV.setTransform(hQ[a2], 0, 0, hQ[a2], gY[a2], gZ[a2]), cV.drawImage(eo[a2], 0, 0));
			cV.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function qy() {
	this.id = 0, this.ti = 0;
	var zr = null,
		zs = !1;
	this.c5 = function() {
		var rv, aS, aU;
		e ? this.id = 1 : b ? this.id = 2 : (function() {
			try {
				if (!(zr = window.localStorage)) return zr = null;
				zr.setItem("testLS", "1"), zr.removeItem("testLS")
			} catch (error) {
				return zr = null
			}
			zs = !0
		}(), rv = this, zs && (aS = Number(zr.getItem("zt0")), aU = Number(zr.getItem("zt1")), aS && aU ? (rv.id = aS, rv.ti = Math.floor(Date.now() / 3e5) - aU) : (zr.setItem("zt0", "" + Math.floor(3 + Math.random() * (Math.pow(2, 20) -
			3))), zr.setItem("zt1", "" + Math.floor(Date.now() / 3e5)))))
	}
}

function qI() {
	var z1, zx, zy;

	function a03(a2) {
		var button = po.r7[a2],
			gY = button.gY,
			gZ = button.gZ,
			cG = button.cG,
			eH = button.eH;
		cV.fillStyle = button.a01, cV.fillRect(gY, gZ, cG, eH), a2 === z1 && (cV.fillStyle = zy, cV.fillRect(gY, gZ, cG, eH)), cV.lineWidth = ow, cV.strokeStyle = zx, cV.strokeRect(gY, gZ, cG, eH),
			function(button) {
				var gY = button.gY,
					gZ = button.gZ,
					cG = button.cG,
					eH = button.eH;
				cV.textAlign = cX, cV.textBaseline = cW, cV.font = button.font, cV.fillStyle = zx, cV.fillText(button.te, Math.floor(gY + cG / 2), Math.floor(gZ + eH / 2 + .1 * button.cE))
			}(button)
	}
	this.cG = 0, this.eH = 0, this.gZ = 0, this.lc = 0, this.c5 = function() {
		z1 = -1, zx = cY.cZ, zy = "rgba(255,255,255,0.16)", this.r7 = new Array(7), this.eH = Math.floor((o ? .123 : .093) * c6), this.cG = Math.floor((o ? 3.96 : 4.2) * this.eH), this.lc = Math.floor(.025 * this.cG);
		var zz = Math.floor(.26 * this.eH),
			a00 = c9 + zz + cA;
		this.r7[0] = {
			gY: 0,
			gZ: 0,
			cG: Math.floor(.6 * this.cG - this.lc / 2),
			eH: this.eH,
			te: "Multiplayer",
			font: a00,
			a01: "rgba(22,88,22,0.8)",
			cE: zz
		}, zz = Math.floor(.18 * this.eH), this.r7[1] = {
			gY: 0,
			gZ: 0,
			cG: this.cG - this.r7[0].cG - this.lc,
			eH: this.eH,
			te: "Single Player",
			font: c9 + zz + cA,
			a01: "rgba(22,88,88,0.8)",
			cE: zz
		}, this.r7[2] = {
			gY: 0,
			gZ: 0,
			cG: this.cG,
			eH: Math.floor(.3 * this.eH),
			te: "",
			font: this.r7[1].font,
			a01: "rgba(100,0,0,0.8)",
			cE: this.r7[1].cE
		}, this.r7[3] = {
			gY: 0,
			gZ: 0,
			cG: this.cG,
			eH: this.eH,
			te: "Back",
			font: this.r7[0].font,
			a01: "rgba(0,0,0,0.8)",
			cE: this.r7[0].cE
		}, this.r7[4] = {
			gY: 0,
			gZ: 0,
			cG: this.cG,
			eH: Math.floor(.3 * this.eH),
			te: "The game was updated!",
			font: this.r7[1].font,
			a01: "rgba(100,0,0,0.8)",
			cE: this.r7[1].cE
		}, this.r7[5] = {
			gY: 0,
			gZ: 0,
			cG: this.r7[0].cG,
			eH: Math.floor(.8 * this.eH),
			te: "Reload",
			font: this.r7[0].font,
			a01: "rgba(0,100,0,0.8)",
			cE: this.r7[0].cE
		}, this.r7[6] = {
			gY: 0,
			gZ: 0,
			cG: this.r7[1].cG,
			eH: this.r7[5].eH,
			te: "Back",
			font: this.r7[0].font,
			a01: "rgba(0,0,0,0.8)",
			cE: this.r7[0].cE
		}, this.x0()
	}, this.x0 = function() {
		this.gZ = Math.floor(.54 * cP), this.r7[0].gY = Math.floor(.5 * gg - .5 * this.cG), this.r7[1].gY = this.r7[0].gY + this.r7[0].cG + this.lc, this.r7[2].gY = this.r7[3].gY = this.r7[0].gY, this.r7[4].gY = this.r7[5].gY = this.r7[0].gY,
			this.r7[6].gY = this.r7[1].gY, this.r7[0].gZ = Math.floor(.54 * cP), this.r7[1].gZ = this.r7[0].gZ, this.r7[2].gZ = Math.floor((cP - this.r7[2].eH - this.r7[3].eH - this.lc) / 2), this.r7[3].gZ = this.r7[2].gZ + this.r7[2].eH + this
			.lc, this.r7[4].gZ = Math.floor((cP - this.r7[4].eH - this.r7[5].eH - this.lc) / 2), this.r7[5].gZ = this.r7[6].gZ = this.r7[4].gZ + this.r7[4].eH + this.lc
	}, this.a02 = function() {
		a03(0), a03(1)
	}, this.a04 = function() {
		a03(2), a03(3)
	}, this.a05 = function() {
		a03(4), a03(5), a03(6)
	}, this.ni = function(gY, gZ, g0) {
		var a2 = -1;
		return 0 === aH.oP() ? a2 = this.oL(gY, gZ, 0, 2) : 3 === aH.oP() ? a2 = this.oL(gY, gZ, 3, 1) : 5 === aH.oP() && (a2 = this.oL(gY, gZ, 5, 2)), z1 !== a2 && (z1 = a2, g0) && (aA.cJ = !0), -1 !== a2 && (oD.oE(), !0)
	}, this.oL = function(gY, gZ, a06, dt) {
		for (var a2 = a06; a2 < a06 + dt; a2++)
			if (gY >= this.r7[a2].gY && gZ >= this.r7[a2].gZ && gY <= this.r7[a2].gY + this.r7[a2].cG && gZ <= this.r7[a2].gZ + this.r7[a2].eH) return a2;
		return -1
	}
}

function a08() {
	function a0E(rM) {
		return rM < 0 ? 0 : 255 < rM ? 255 : Math.floor(rM)
	}
	this.cG = 0, this.eH = 0, this.oB = !1, this.a09 = 0, this.lc = 0, this.tz = 0, this.zZ = 0, this.a0A = 0, this.a0B = 0, this.a0C = 0, this.colors = null, this.c5 = function() {
		this.oB = !0, this.a09 = 0, this.resize()
	}, this.resize = function() {
		this.oB && (p < 1.4 * q ? this.cG = Math.floor((o ? .94 : .43) * p) : (this.eH = Math.floor((o ? .88 : .43) * q), this.cG = Math.floor(1.4 * this.eH)), this.eH = this.cG / 1.4, this.lc = this.cG / 32, this.zZ = Math.floor(.25 * this.eH),
			this.a0A = (this.eH - this.zZ - 3 * this.lc) / 2, this.a0B = this.cG - 3 * this.lc - this.a0A, this.a0C = (this.eH - this.zZ - 4 * this.lc) / 3)
	}, this.a0D = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var j = t().split("");
		if (j.length < 6)
			for (var e8 = 2; 0 <= e8; e8--) this.colors[0][e8] = a0E(256 * Math.random());
		else
			for (var a2 = 2; 0 <= a2; a2--) this.colors[0][a2] = a0E(4 * (10 * parseInt(j[2 * a2]) + parseInt(j[2 * a2 + 1])));
		this.a0F()
	}, this.a0G = function() {
		return [b6(this.colors[0][0], 4), b6(this.colors[0][1], 4), b6(this.colors[0][2], 4)]
	}, this.nl = function(cM, cN, deltaY) {
		var gd = (gg - this.cG) / 2;
		cN -= (cP - this.eH) / 2 + this.zZ, (cM -= gd) < 0 || cN < 0 || cM >= this.cG || cN >= this.eH - this.zZ || (gd = Math.floor(3 * cN / (this.eH - this.zZ)), this.colors[this.tz][gd] = a0E(this.colors[this.tz][gd] + (deltaY < 0 ? 1 : -1) *
			Math.max(Math.abs(.05 * deltaY), 1)), aA.cJ = !0)
	}, this.cL = function(cM, cN) {
		this.a09 = 0;
		var gd = (gg - this.cG) / 2;
		return cN -= (cP - this.eH) / 2, (cM -= gd) < 0 || cN < 0 || cM >= this.cG - 1 || cN >= this.eH - 1 || cM > this.cG - (.4 * this.zZ + 3 * this.lc) && cN < this.zZ ? (this.oB = !1, 0 === aH.oP() && oN.cS(!0), !(aA.cJ = !0)) : cM < this
			.lc || cN < this.lc + this.zZ || cM >= this.cG || cN >= this.eH - this.lc || (cM < this.lc + this.a0A ? (cN < this.lc + this.zZ + this.a0A && 0 !== this.tz && (this.tz = 0, aA.cJ = !0), !0) : cM < this.lc + this.a0A || (cM -= 2 * this
				.lc + this.a0A, cN < this.lc + this.zZ + this.a0C ? (this.a09 = 1, this.colors[this.tz][0] = a0E(256 * cM / this.a0B), aA.cJ = !0) : cN < 2 * this.lc + this.zZ + this.a0C || (cN < 2 * this.lc + this.zZ + 2 * this.a0C ? (this
					.a09 = 2, this.colors[this.tz][1] = a0E(256 * cM / this.a0B), aA.cJ = !0) : !(cN >= 3 * this.lc + this.zZ + 2 * this.a0C) || (this.a09 = 3, this.colors[this.tz][2] = a0E(256 * cM / this.a0B), aA.cJ = !0))))
	}, this.a0F = function() {
		for (var e8 = 2; 0 <= e8; e8--) this.colors[0][e8] = a0E(this.colors[0][e8])
	}, this.a0H = function() {
		for (var aF, j = "", a2 = 0; a2 < 3; a2++)(aF = b6(this.colors[0][a2], 4)) < 10 && (j += "0"), j += aF.toString();
		return j
	}, this.ni = function(cM) {
		0 !== this.a09 && (cM -= 2 * this.lc + this.a0A + (gg - this.cG) / 2, this.colors[this.tz][this.a09 - 1] = a0E(256 * cM / this.a0B), aA.cJ = !0)
	}, this.a0I = function() {
		0 < this.a09 && (this.a09 = 0, this.a0F(), gm.a0J(), aA.cJ = !0)
	}, this.cU = function() {
		var gd = (gg - this.cG) / 2,
			ge = (cP - this.eH) / 2;
		cV.setTransform(1, 0, 0, 1, gd, ge), cV.fillStyle = cY.ho, cV.fillRect(0, this.zZ, this.cG, this.eH - this.zZ), cV.fillStyle = cY.hx, cV.fillRect(0, 0, this.cG, this.zZ), cV.fillStyle = cY.cZ, cV.lineWidth = ow, cV.strokeStyle = cY.cZ, cV
			.strokeRect(-1, -1, this.cG + 2, this.eH + 2), cV.fillRect(0, this.zZ, this.cG, ow), cV.font = c9 + Math.floor(.31 * this.zZ) + cA, cV.textBaseline = cW, cV.textAlign = cX, cV.fillText("Choose Your Nation's Color!", Math.floor((this
				.cG - this.lc - .4 * this.zZ) / 2), Math.floor(.55 * this.zZ)), this.a0K(0), cV.lineWidth = ow, this.a0L(0), this.a0L(1), this.a0L(2), m0.sG(Math.floor(gd + this.cG - .4 * this.zZ - this.lc), Math.floor(ge + .3 * this.zZ), Math
				.floor(.4 * this.zZ)), cV.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a0K = function(a2) {
		var mj = this.colors[a2][0],
			os = this.colors[a2][1],
			a2 = this.colors[a2][2];
		cV.fillStyle = "rgb(" + mj + "," + os + "," + a2 + ")", cV.fillRect(this.lc, this.zZ + this.lc, this.a0A, 2 * this.a0A + this.lc), cV.lineWidth = ow, cV.strokeStyle = cY.cZ, cV.strokeRect(this.lc, this.zZ + this.lc, this.a0A, 2 * this
			.a0A + this.lc), cV.fillStyle = mj + os + a2 < 306 && os < 150 ? cY.cZ : cY.gk, cV.font = c9 + Math.floor(.32 * this.a0C) + cA, cV.textAlign = cX, cV.textBaseline = cW, cV.rotate(-Math.PI / 2), cV.fillText("National Color", Math
			.floor(-1.5 * this.lc - this.zZ - this.a0A), Math.floor(this.lc + .5 * this.a0A)), cV.rotate(Math.PI / 2)
	}, this.a0L = function(a2) {
		cV.fillStyle = "rgb(" + (0 === a2 ? 150 : 2 === a2 ? 30 : 0) + "," + (1 === a2 ? 130 : 2 === a2 ? 30 : 0) + "," + (2 === a2 ? 220 : 0) + ")", cV.fillRect(2 * this.lc + this.a0A, this.zZ + this.lc + a2 * (this.lc + this.a0C), Math.floor(
				this.colors[this.tz][a2] * this.a0B / 255), this.a0C), cV.strokeStyle = cY.cZ, cV.strokeRect(2 * this.lc + this.a0A, this.zZ + this.lc + a2 * (this.lc + this.a0C), this.a0B, this.a0C), cV.fillStyle = cY.cZ, cV.font = c9 + Math
			.floor(.32 * this.a0C) + cA, cV.textBaseline = cW, cV.textAlign = so, cV.fillText((0 === a2 ? "Red: " : 1 === a2 ? "Green: " : "Blue: ") + this.colors[0][a2].toString(), 3 * this.lc + this.a0A, Math.floor(this.zZ + this.lc + a2 * (
				this.lc + this.a0C) + .53 * this.a0C))
	}
}

function qJ() {
	var a0M, a0N, uV, ug, vd, a0O, a0P, a0Q, a0R, cF, cE, h3, a0S, a0U, a0T = 0;

	function a0X() {
		return fV.a0Y[(a0S + a0T) % fV.a0Z]
	}

	function a0V() {
		a0S++, h3 = aA.aB, fV.ws(a0X(), 4) && (a0U = !0, ih.a0a(a0X()))
	}

	function a0d() {
		0 === a0S ? pq.a0f(3249) : (a0S === fV.a0Z - 1 && (a0S = -1), a0V())
	}

	function a0m(gZ, wd, a0l) {
		var gd = Math.floor((gg - ug) / 2) + a0P,
			gf = gd + Math.floor(a0l * (ug - 2 * a0P));
		cV.lineWidth = wd, cV.beginPath(), cV.moveTo(gd, gZ), cV.lineTo(gf, gZ), cV.lineTo(Math.floor(gd - a0P + a0l * ug), gZ + uV), cV.lineTo(gd - a0P, gZ + uV), cV.closePath()
	}
	this.c5 = function() {
		aH.setState(6), a0M = 0, a0N = 1, a0Q = "rgba(0,220,120,0.4)", a0R = "rgba(0,0,0,0.8)", this.resize(), aA.cJ = !0, a0S = 0, a0U = !1, a0V()
	}, this.resize = function() {
		ug = Math.floor((o ? .5 : .25) * c6), vd = ug + 12, uV = Math.floor(.125 * ug), a0P = 3 * uV, a0O = Math.floor(.225 * ug), cE = Math.floor(.3 * uV), cF = uL + cE + cA
	}, this.a0W = function(dx) {
		a0T = dx
	}, this.a0b = function(a0c) {
		a0c === a0X() && (a0U = !1, a0d())
	}, this.wu = function(a0c) {
		6 !== aH.oP() || a0U || (h3 = aA.aB, a0U = !0, ih.a0a(a0c))
	}, this.cL = function(gY, gZ) {
		var gd = Math.floor((gg - vd) / 2),
			ge = Math.floor(.5 * (cP - cO - uV - a0O)) + uV + cO;
		return gd < gY && gY < gd + vd && ge < gZ && gZ < ge + a0O && (this.a0g(), po.ni(gY, gZ, !1), !0)
	}, this.a0g = function() {
		fV.a0h(3260), pm.c5(), aA.cJ = !0
	}, this.eY = function() {
		6 === aH.oP() && (a0U ? aA.aB > h3 + 12e3 && pq.a0f(3250) : aA.aB > h3 + 12e3 && a0d(), 100 < (a0M += .07 * a0N * (a0M < 16 ? 5 + a0M : 84 < a0M ? 105 - a0M : 17)) ? (a0M = 100, a0N = -1) : a0M < 0 && (a0M = 0, a0N = 1), a0Q = "rgba(0," +
			Math.floor(190 - 1.9 * a0M) + "," + Math.floor(120 - 1.2 * a0M) + "," + (.4 + .004 * a0M) + ")", a0R = "rgba(0," + Math.floor(1.9 * a0M) + "," + Math.floor(1.2 * a0M) + "," + (.8 - .004 * a0M) + ")", aA.cJ = !0)
	}, this.cU = function() {
		var gY = Math.floor((gg - vd) / 2),
			gZ = Math.floor(.5 * (cP - cO - uV - a0O));
		! function(title, gZ, wd, a0l) {
			cV.fillStyle = a0R, a0m(gZ, wd, 1), cV.fill(), cV.fillStyle = a0Q, a0m(gZ, wd, a0l), cV.fill(), cV.strokeStyle = cY.cZ, a0m(gZ, wd, 1), cV.stroke(),
				function(a0o, gZ) {
					cV.textAlign = cX, cV.textBaseline = cW, cV.font = cF, cV.fillStyle = cY.cZ, cV.fillText(a0o, Math.floor(.5 * gg), Math.floor(gZ + .58 * uV))
				}(title, gZ)
		}("Loading", gZ, 3, a0M / 100),
		function(gY, gZ, cG, eH, te) {
			cV.fillStyle = cY.hm, cV.fillRect(gY, gZ, cG, eH), cV.lineWidth = 3, cV.strokeStyle = cY.cZ, cV.strokeRect(gY, gZ, cG, eH);
			var bH = Math.floor(.3 * eH);
			cV.textAlign = cX, cV.textBaseline = cW, cV.font = uL + bH + cA, cV.fillStyle = cY.cZ, cV.fillText(te, Math.floor(gY + cG / 2), Math.floor(gZ + eH / 2 + .1 * bH))
		}(gY, gZ + uV + cO, vd, a0O, "Back")
	}
}

function qK() {
	var a8;
	this.c5 = function() {
		po.c5(), oN.c5(), a8 = 0, a0p.c5(), pm.c5()
	}, this.setState = function(a0q) {
		a8 = a0q
	}, this.oP = function() {
		return a8
	}, this.a0r = function() {
		0 === aH.oP() && pm.a0s(), this.setState(8), pv.a0s(), cQ.oQ(), cR.oB = !1, oM.cL(-1e3, -1e3)
	}, this.oQ = function(nU) {
		if (!kn) return !1;
		if (!(aA.aB < 400)) {
			if ("Enter" === nU.key || "Escape" === nU.key) {
				if (this.a0t()) return 0 === a8 && oN.cS(!0), !0;
				if ("Enter" === nU.key) {
					if (0 === a8) return pm.a0u(), !0;
					if (7 === a8) return !0
				}
			}
			return !1
		}
	}, this.a0v = function() {
		return kA.oB || cR.oB || oM.oB || cQ.a0w()
	}, this.a0x = function() {
		cR.resize(), kA.resize(), oM.resize(), cQ.resize()
	}, this.a0t = function() {
		return !!oM.kB() || !(!cQ.oQ() && (cR.oB ? cR.oB = !1 : !kA.oB || (kA.kB(), 0)))
	}, this.aI = function() {
		aA.cJ = !0, 8 === a8 ? hG ? fw.oS(!1) : m2.oB ? m2.oU() : kA.oB ? kA.kB() : m0.oU() : 7 === a8 ? pv.a0y() : 6 === a8 ? pp.a0g() : 3 === a8 ? pq.a0z(0, 0) : 2 === a8 ? fI.a0z() : 0 !== a8 || this.a0t() || a7(11)
	}, this.cL = function(gY, gZ) {
		if (!a0p.cL(gY, gZ) && kn && !oM.cL(gY, gZ) && !kA.cL(gY, gZ) && !(6 === a8 && pp.cL(gY, gZ) || 2 === a8 && fI.cL(gY, gZ) || gm.cL(gY, gZ) || cR.cL(gY, gZ) || a10.cL(gY, gZ, !0) || cQ.cL(gY, gZ, !0))) {
			if (oD.cL(gY, gZ), 0 === a8) pm.cL(gY, gZ);
			else if (3 === a8) pq.cL(gY, gZ);
			else if (5 === a8) pr.cL(gY, gZ);
			else if (7 === a8 && pv.cL(gY, gZ)) return;
			zQ.cL(gY, gZ)
		}
	}, this.ni = function(gY, gZ) {
		if (gm.ni(gY, gZ), !oD.wq) {
			if (a0p.ni(gY, gZ)) return void oD.oE();
			if (0 <= cQ.oL(gY, gZ)) return void oD.oE();
			if (cQ.ni(gY, gZ)) return void oD.oE();
			if (2 === a8 && fI.ni(gY, gZ)) return void oD.oE();
			if (po.ni(gY, gZ, !0)) return
		}
		oD.ni(gY, gZ)
	}, this.click = function(gY, gZ) {
		oD.oF(), cQ.a0I() || a10.cL(gY, gZ, !1) || cQ.cL(gY, gZ, !1)
	}, this.nl = function(gY, gZ, deltaY) {
		cQ.sI[1].mw.oB || (cQ.sI[2].mw.oB ? cQ.sI[2].mw.nl(gY, gZ, deltaY) : 0 === a8 && oD.nl(gY, deltaY))
	}, this.a11 = function() {
		po.x0(), cQ.x0(), 0 === a8 ? (oN.resize(), oD.x0()) : 7 === a8 && pv.resize(), aA.cJ = !0
	}, this.cU = function() {
		var gZ, or, tZ, gY;
		8 !== a8 && 10 !== a8 && (cV.imageSmoothingEnabled = !0, this.lx(), oD.cU(), pn.cU(), gZ = Math.floor(.3 * cP), or = cC.rK("territorial.io"), tZ = (tZ = 1.75 * cP / or.width) * or.width < .98 * gg ? .98 * gg / or.width : tZ, cV
			.globalAlpha = .15, gY = Math.floor(.5 * (gg - tZ * or.width)), gY = Math.floor(gY / tZ), gZ = Math.floor(gZ - .5 * or.height * tZ), gZ = Math.floor(gZ / tZ), cV.setTransform(tZ, 0, 0, tZ, gY, gZ), cV.drawImage(or, gY, gZ), cV
			.setTransform(1, 0, 0, 1, 0, 0), cV.globalAlpha = 1, a10.cU(), zQ.cU(), cQ.cU(), gm.cU(), 0 === a8 ? pm.cU() : 2 === a8 ? fI.cU() : 3 === a8 ? pq.cU() : 5 === a8 ? pr.cU() : 6 === a8 ? pp.cU() : 7 === a8 && pv.cU(), cQ.a13(), a0p
			.cU(), cR.cU(), oM.cU(), kA.cU())
	}, this.lx = function() {
		var a15, a14;
		kn ? (a14 = p / an, a15 = q / ao, cV.setTransform(a14 = a15 < a14 ? a14 : a15, 0, 0, a14, Math.floor((p - a14 * an) / 2), Math.floor((q - a14 * ao) / 2)), cV.drawImage(kp, 0, 0), cV.setTransform(1, 0, 0, 1, 0, 0), cV.fillStyle = cY.hm) :
			cV.fillStyle = cY.gk, cV.fillRect(0, 0, p, q)
	}
}

function a16() {
	this.cG = 0, this.eH = 0, this.a17 = 0, this.oB = !1, this.to = 10, this.bP = .12, this.a09 = !1, this.a18 = !1, this.a19 = !1, this.c5 = function() {
		this.oB = !0, this.resize(), this.a09 = !1
	}, this.resize = function() {
		this.oB && (this.cG = 1.15 * p < q ? Math.floor((o ? .94 : .69) * p) : Math.floor((o ? .94 : .69) * q / 1.15), this.cG -= this.cG % this.to, this.eH = +this.cG, this.a17 = Math.floor(.15 * this.cG))
	}, this.cL = function(cM, cN, a8) {
		var gd = (gg - this.cG) / 2;
		return cN -= (cP - this.eH - this.a17) / 2, (cM -= gd) < 0 || cN < 0 || cM >= this.cG - 1 || cN >= this.eH + this.a17 - 1 || cM >= this.cG - this.a17 && cN < this.a17 ? (0 === a8 && (this.oB = !1, 0 === aH.oP() && oN.cS(!0), aA.cJ = !0),
			!1) : (cN < this.a17 || (cM = (cM = b6(cM, gd = Math.floor(this.cG / this.to)) + this.to * b6(cN - this.a17, gd)) < 0 ? 0 : cM >= a3.ts ? a3.ts - 1 : cM, (0 === a8 || 1 === a8 && !a3.a5[cM] || 2 === a8 && a3.a5[cM]) && (this
			.a18 = !a3.a5[cM], this.a09 = !0, this.a19 = !0, a3.a5[cM] = !a3.a5[cM], a3.u9(), aA.cJ = !0)), !0)
	}, this.ni = function(cM, cN) {
		this.a09 && this.cL(cM, cN, this.a18 ? 1 : 2)
	}, this.a0I = function() {
		this.a19 && (a1(), this.a19 = !1), this.a19 = !1, this.a09 = !1
	}, this.cU = function() {
		cV.imageSmoothingEnabled = !0;
		for (var gd = (gg - this.cG) / 2, ge = (cP - this.eH - this.a17) / 2, m9 = (cV.setTransform(1, 0, 0, 1, gd, ge), cV.fillStyle = cY.ho, cV.fillRect(0, this.a17, this.cG, this.eH), cV.fillStyle = cY.i1, cV.fillRect(0, 0, this.cG, this.a17),
					cV.fillStyle = cY.cZ, cV.lineWidth = ow, cV.strokeStyle = cY.cZ, cV.strokeRect(-1, -1, this.cG + 2, this.eH + this.a17 + 2), cV.fillRect(0, this.a17 - ow, this.cG, ow), cV.font = c9 + Math.floor(.44 * this.a17) + cA, cV
					.textAlign = cX, cV.textBaseline = cW, cV.fillText("Select Your Emojis!", Math.floor((this.cG - .725 * this.a17) / 2), Math.floor(.55 * this.a17)), Math.floor(this.cG / this.to)), zoom = (m9 - 2 * this.bP * m9) / a3.cG, a2 =
				a3.ts - 1; 0 <= a2; a2--) cV.setTransform(1, 0, 0, 1, Math.floor(gd + a2 % this.to * m9), Math.floor(ge + this.a17 + b6(a2, this.to) * m9)), a3.a5[a2] && (cV.fillStyle = cY.i3, cV.fillRect(0, 0, m9, m9)), cV.setTransform(zoom, 0,
			0, zoom, Math.floor(gd + a2 % this.to * m9 + this.bP * m9), Math.floor(ge + this.a17 + b6(a2, this.to) * m9 + this.bP * m9)), cV.drawImage(a3.rJ[a2], 0, 0);
		m0.sG(Math.floor(gd + this.cG - .725 * this.a17), Math.floor(ge + .275 * this.a17), Math.floor(.45 * this.a17)), cV.setTransform(1, 0, 0, 1, 0, 0), cV.imageSmoothingEnabled = !1
	}
}

function qL() {
	var a1A, aR, a1B;

	function u3() {
		var a8;
		0 === (a8 = aH.oP()) ? pm.a0s() : 6 === a8 ? fV.a0h(a1A) : 7 === a8 ? (pv.a0s(), fV.close(fV.a1C, 3240)) : 8 === a8 && (pj(!0), pm.a0s()), aH.setState(3), po.x0(), a1F(a1A), aA.cJ = !0
	}

	function a1D(nU) {
		for (var a2 = aR.length - 1; 0 <= a2; a2--)
			if (nU === aR[a2].code) return aR[a2].j;
		return a1B + nU
	}

	function a1F(nU) {
		po.r7[2].te = a1D(nU)
	}
	this.kV = function() {
		(aR = []).push({
			j: "No Server Response",
			code: 1006
		}), aR.push({
			j: "Account successfully saved!",
			code: 3231
		}), aR.push({
			j: "Account Error",
			code: 3232
		}), aR.push({
			j: "No Servers Found",
			code: 3249
		}), aR.push({
			j: "Thanks for the vote.",
			code: 3252
		}), aR.push({
			j: "Please accept Cookies",
			code: 3265
		}), aR.push({
			j: "Invalid Password Format",
			code: 3266
		}), aR.push({
			j: "Invalid Replay Format",
			code: 3605
		}), aR.push({
			j: "Lobby Timeout",
			code: 4207
		}), aR.push({
			j: "Invalid Username",
			code: 4214
		}), aR.push({
			j: "User already exists.",
			code: 4224
		}), aR.push({
			j: "No Client Response Error",
			code: 4229
		}), a1B = "Error "
	}, this.c5 = function(a0c, nU) {
		a1A = nU;
		var a8 = aH.oP();
		if (6 === a8) {
			if (4211 === nU) return void pr.c5(0, 0);
			if (4214 !== nU) return void pp.a0b(a0c)
		} else {
			if (7 !== a8) return 8 === a8 ? void(a0c !== fV.o0 || fH || fR.st(a1D(nU))) : void 0;
			if (a0c !== fV.a1C) return
		}
		u3()
	}, this.a0f = function(nU) {
		a1A = nU, 8 === aH.oP() ? fR.st(a1D(nU)) : u3()
	}, this.resize = function() {
		a1F(a1A)
	}, this.cL = function(gY, gZ) {
		3 === po.oL(gY, gZ, 3, 1) && this.a0z(gY, gZ)
	}, this.a0z = function(gY, gZ) {
		pm.c5(), po.ni(gY, gZ, !1), aA.cJ = !0
	}, this.cU = function() {
		po.a04()
	}
}

function qM() {
	var input, color;
	this.oB = !1, this.k9 = !1, this.c5 = function() {
		color = cY.ho, (input = document.createElement("INPUT")).setAttribute("type", "text"), input.setAttribute("name", "username"), input.setAttribute("id", "usernameField"), input.setAttribute("autocomplete", "username"), input.value = "",
			input.style.textAlign = "center", input.style.backgroundColor = color, input.style.borderRadius = "0", input.style.color = cY.cZ, input.style.position = "absolute", input.readOnly = !1, input.addEventListener("input", function() {
				pm.a1G()
			}), input.addEventListener("focus", function() {
				oN.k9 = !0
			}), input.addEventListener("blur", function() {
				oN.k9 = !1
			})
	}, this.resize = function() {
		var cE, ou, ov;
		this.oB && (ou = .3 * (cE = .22 * po.eH / kE), ov = ow / kE, input.style.border = ov.toFixed(2) + "px solid " + cY.cZ, input.style.font = c9 + cE + cA, input.style.padding = ou.toFixed(2) + "px", input.style.left = (((gg - po.cG) / kE -
			ov) / 2).toFixed(2) + "px", input.style.width = (po.cG / kE - 2 * ou - ov).toFixed(2) + "px", input.style.top = ((po.gZ - .52 * po.eH) / kE).toFixed(2) + "px")
	}, this.get = function() {
		return input
	}, this.cS = function(cS) {
		this.oB !== cS && ((this.oB = cS) ? (this.resize(), document.body.appendChild(input)) : (this.k9 = !1, document.body.removeChild(input)))
	}, this.oW = function(a1H) {
		a1H && color === cY.ho || !a1H && color === cY.iD || (color = a1H ? cY.ho : cY.iD, input.style.backgroundColor = color)
	}
}

function qo() {
	var jW, a1K, a1L, a1M;
	this.a1I = 0, this.a1J = 0, this.c5 = function(bP) {
		var hQ;
		7 === aH.oP() && (jW = bP, a1K = 0, a1L = aA.aB + 4500, a1M = pu.a1N(jW) ? 2 : 0, aH.setState(10), cV.imageSmoothingEnabled = !0, aH.lx(), bP = cC.rK("loading"), hQ = 1, hQ = (o ? .396 : .25) * c6 / bP.width, cV.setTransform(hQ, 0, 0, hQ,
			Math.floor((p - hQ * bP.width) / 2), Math.floor((q - hQ * bP.height) / 2)), cV.drawImage(bP, 0, 0), cV.setTransform(1, 0, 0, 1, 0, 0))
	}, this.fy = function() {
		0 < a1M && aA.aB > a1L && (a1M--, a1L += 4500, 0 === aA.a1P) && 0 === aA.en() && (0 === a1M && fV.o0 < fV.a1Q && (fV.o0 += fV.a1R), fV.ws(fV.o0, 5))
	}, this.a1S = function() {
		10 === aH.oP() && 2 <= ++a1K && (pu.a1T(jW), jW = null)
	}
}

function ql() {
	var a1V, a1W, a1X, a1Y, a1Z, a1a, a1b, a1d, a1e, a1g, a1h, a1i, a1l, a1m, a1n, a1o, a1p, a1c = 48,
		a1j = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
		a1k = [0, 0, 0, 0];

	function a1s(a2, rJ) {
		var a2 = a1b[a2].getContext("2d", {
				alpha: !0
			}),
			zoom = (a2.clearRect(0, 0, a1c, a1c), a1c / rJ.width),
			r = a1c / rJ.height,
			zoom = r < zoom ? r : zoom;
		a2.imageSmoothingEnabled = !0, a2.setTransform(zoom, 0, 0, zoom, Math.floor((a1c - zoom * rJ.width) / 2), Math.floor((a1c - zoom * rJ.height) / 2)), a2.drawImage(rJ, 0, 0), a2.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a1w(eo, mj, a1z, ox) {
		ox.beginPath(), ox.moveTo(eo, eo), ox.lineTo(eo + Math.cos(a1z) * mj, eo + Math.cos(a1z + 1.5 * Math.PI) * mj), ox.stroke()
	}

	function a2D() {
		if (7 === aH.oP()) {
			for (var ck, rJ, ox, zoom, r, dx = -1, a2 = a1d.length - 1; 0 <= a2; a2--)
				if (null === a1d[a2].or) {
					dx = a2;
					break
				} - 1 !== dx && (null !== (ck = a23(a1d[dx].a27, a1d[dx].a28)) ? a1d[dx].or = ck : (ck = {
					an: an,
					ao: ao,
					kp: kp,
					kl: kl,
					km: km,
					kq: kq,
					lD: lD,
					a24: a24
				}, a2E(a1d[dx].a27, a1d[dx].a28), ko.a2F(), (rJ = document.createElement("canvas")).width = 128, rJ.height = 128, ox = rJ.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / an) < (r = 128 / ao) && (zoom = r), ox.imageSmoothingEnabled = !0, ox.setTransform(zoom, 0, 0, zoom, (128 - zoom * an) / 2, (128 - zoom * ao) / 2), ox.drawImage(kp, 0, 0), an = ck.an, ao = ck.ao, kp = ck.kp,
				kl = ck.kl, km = ck.km, kq = ck.kq, lD = ck.lD, a24 = ck.a24, a1d[dx].or = rJ), aA.cJ = !0)
		}
	}

	function a23(a27, a28) {
		for (var a2 = a1d.length - 1; 0 <= a2; a2--)
			if (null !== a1d[a2].or && a1d[a2].a27 === a27 && a1d[a2].a28 === a28) return a1d[a2].or;
		return null
	}
	this.c5 = function() {
		var a2;
		for (a1p = 0, a1g = -1, aH.setState(7), a1d = [], this.resize(), a1b = new Array(13), a2 = a1b.length; 0 <= a2; a2--) a1b[a2] = document.createElement("canvas"), a1b[a2].width = a1c, a1b[a2].height = a1c;
		for (a2 = 0; a2 < 7; a2++) ! function(tA) {
			var a1u, ox = a1b[tA - 2].getContext("2d", {
					alpha: !0
				}),
				a1t = 1.5 * Math.PI,
				eo = Math.floor(.5 * a1c),
				mj = Math.floor(.48 * a1c);
			ox.lineWidth = 2, ox.strokeStyle = cY.cZ, ox.clearRect(0, 0, a1c, a1c);
			for (var a2 = 0; a2 < tA; a2++) a1u = a1t + 2 * Math.PI / tA,
				function(a2, eo, mj, a1t, a1u, ox) {
					ox.fillStyle = ep.a1y[a2], ox.beginPath(), ox.arc(eo, eo, mj, a1t, a1u), ox.lineTo(eo, eo), ox.fill()
				}(a2 + 1, eo, mj, a1t, a1u, ox), 0 !== a2 && a1w(eo, mj, a1t, ox), a1t = a1u;
			a1w(eo, mj, 1.5 * Math.PI, ox),
				function(eo, mj, ox) {
					ox.beginPath(), ox.arc(eo, eo, mj, 0, 2 * Math.PI), ox.stroke()
				}(eo, mj, ox)
		}(a2 + 2);
		a1s(7, cC.get(4)), a1s(8, a3.rJ[27]), a1s(9, a3.rJ[46]), a1s(10, a3.rJ[36]), a1s(11, cC.get(19)), a1s(12, cC.get(20)), aA.cJ = !0
	}, this.a0y = function() {
		this.a0s(), fV.a0h(3240), pm.c5(), aA.cJ = !0
	}, this.a0s = function() {
		a1d = [], a1b = []
	}, this.tm = function() {
		return a1i
	}, this.resize = function() {
		var a20, ka, vs, a21;
		for (a1X = [0, 0], a1e = [0, 0, 0, 0], a1o = o ? (a1h = Math.floor(.8 * .4 * c6), a1i = Math.floor(.56 * a1h), a1e[0] = cO, p < q ? (a1e[1] = a1i + 2 * cO, a1e[2] = p - 3 * a1e[0], a1e[3] = zQ.cT() - 3 * cO - a1i, a1m = Math.floor(.95 *
				a1i), a1n = Math.floor((p - a1h - cO) / 2), Math.floor(cO + a1i / 2)) : (a1e[1] = cO, a1e[2] = p - 3 * cO - a1h, a1e[3] = zQ.cT() - 2 * cO, a1m = Math.floor(.8 * a1h), a1e[3] - a1i < a1h && (a1m = Math.floor(.8 * (a1e[3] -
				a1i)), a1m = sg(a1i, a1m)), a1n = Math.floor(p - a1h / 2 - cO), sg(a1o = Math.floor(cO + a1i + (a1e[3] - a1i) / 2), Math.floor(a1i + 2 * cO + a1m / 2)))) : (a1h = Math.floor(.2016 * c6), a1i = Math.floor(.56 * a1h), a1e[2] = Math
				.floor(.5 * p), a1e[3] = Math.floor(.5 * q), a1e[1] = Math.floor(.45 * (q - a1e[3])), a1e[0] = Math.floor((p - a1e[2]) / 2), a1m = Math.floor(.75 * a1i), a1n = Math.floor(p / 2), Math.floor(a1e[1] + a1e[3] + (q - a1e[3] - a1e[
					1]) / 2)), a1l = c9 + Math.floor(.65 * a1i / 4) + cA, a20 = ka = 1; a20 * ka < a1d.length;) a1e[3] / (ka + 1) < a1e[2] / (a20 + 1) ? a20++ : ka++;
		a1V = (vs = (a1e[2] - (a20 - 1) * cO) / a20) < (a21 = (a1e[3] - (ka - 1) * cO) / ka) ? vs : a21, a1W = Math.floor(a1V), a1a = c9 + Math.floor(.5 * a1V / 5) + cA, a1X[0] = a20, a1X[1] = ka, a1Y = a1e[0] + Math.floor((a1e[2] - a1X[0] *
			a1V - (a1X[0] - 1) * cO) / 2), a1Z = a1e[1] + Math.floor((a1e[3] - a1X[1] * a1V - (a1X[1] - 1) * cO) / 2)
	}, this.zR = function(a22, bP) {
		var a2, r, or, bH = a1d.length;
		for (a1k = a22, a2 = 0; a2 < bP.length; a2++) or = a23(bP[a2].lD, bP[a2].a24), a1d.push({
			a25: bP[a2].id,
			pS: bP[a2].pS,
			pT: bP[a2].a26,
			a27: bP[a2].lD,
			a28: bP[a2].a24,
			joined: bP[a2].a29,
			tj: bP[a2].a0l,
			a2A: bP[a2].a2A,
			or: or,
			a2B: bP[a2].a2B,
			nJ: bP[a2].nJ
		});
		for (a2 = bH - 1; 0 <= a2; a2--) a1d.shift();
		if (-1 !== a1g)
			for (r = a1g, a1g = -1, a2 = a1d.length - 1; 0 <= a2; a2--)
				if (a1d[a2].a25 === r) {
					a1g = r;
					break
				}(a1d.length > a1p || a1d.length < a1p) && (a1p = a1d.length, this.resize()), this.a2C(), aA.cJ = !0
	}, this.a2C = function() {
		for (var a2 = a1d.length - 1; 0 <= a2; a2--) null === a1d[a2].or && setTimeout(a2D, 0)
	}, this.cL = function(gY, gZ) {
		return 4 * ((gY - a1n) * (gY - a1n) + (gZ - a1o) * (gZ - a1o)) <= a1m * a1m ? (this.a0y(), po.ni(gY, gZ, !1), !0) : function(gY, gZ) {
			var dx, e8, gd, ge;
			if (0 !== a1d.length) {
				var a2 = 0;
				for (ge = a1Z, e8 = 0; e8 < a1X[1]; e8++) {
					for (gd = a1Y, dx = 0; dx < a1X[0]; dx++) {
						if (gd < gY && gY < gd + a1V && ge < gZ && gZ < ge + a1V) return ih.a2H(a1d[a2].a25), a1g = a1d[a2].a25 !== a1g ? a1d[a2].a25 : -1, aA.cJ = !0;
						if (++a2 >= a1d.length) return !1;
						gd += a1V + cO
					}
					ge += a1V + cO
				}
			}
			return !1
		}(gY, gZ)
	}, this.cU = function() {
		var dx, e8, gY, mj, zoom, a2 = 0,
			gZ = a1Z;
		if (cV.imageSmoothingEnabled = !0, cV.lineWidth = 3, mj = Math.floor(.5 * a1m), cV.fillStyle = cY.hm, cV.beginPath(), cV.arc(a1n, a1o, mj, 0, 2 * Math.PI), cV.fill(), cV.strokeStyle = cY.cZ, cV.beginPath(), cV.arc(a1n, a1o, mj, 0, 2 *
				Math.PI), cV.stroke(), mj = cC.get(0).height, zoom = .6 * a1m / mj, cV.setTransform(zoom, 0, 0, zoom, Math.floor(a1n - .56 * zoom * cC.get(0).width), Math.floor(a1o - .5 * zoom * mj)), cV.drawImage(cC.get(0), 0, 0), cV
			.setTransform(1, 0, 0, 1, 0, 0),
			function() {
				cV.fillStyle = cY.hm, cV.fillRect(p - a1h - cO, cO, a1h, a1i), 0 <= a1g ? (cV.fillStyle = cY.i3, cV.fillRect(p - a1h - cO, cO, a1h, Math.floor(.25 * a1i))) : (cV.fillStyle = cY.iP, cV.fillRect(p - a1h - cO, cO + Math.floor(.25 *
					a1i), a1h, Math.floor(.25 * a1i)));
				cV.strokeStyle = cY.cZ, cV.strokeRect(p - a1h - cO, cO, a1h, a1i), cV.fillStyle = cY.cZ, cV.font = a1l, cV.textBaseline = cW;
				for (var gZ, ou = Math.floor(.04 * a1h), ov = Math.floor(.08 * a1i), a2 = 3; 0 <= a2; a2--) gZ = Math.floor(cO + (a2 + 1) * (a1i + 2 * ov) / 5 - ov), cV.textAlign = so, cV.fillText(a1j[a2], p - a1h - cO + ou, gZ), cV.textAlign =
					uJ, cV.fillText(fl.gp(a1k[a2]), p - cO - ou, gZ)
			}(), 0 !== a1d.length)
			for (e8 = 0; e8 < a1X[1]; e8++) {
				for (gY = a1Y, dx = 0; dx < a1X[0]; dx++) {
					if (! function(a2, gY, gZ) {
							var zoom, e8, a2L, a2N, a2O;
							null === a1d[a2].or ? (cV.fillStyle = cY.hm, cV.fillRect(gY, gZ, a1W, a1W)) : (zoom = a1W / 128, cV.setTransform(zoom, 0, 0, zoom, gY, gZ), cV.drawImage(a1d[a2].or, 0, 0), cV.setTransform(1, 0, 0, 1, 0, 0));
							a1g === a1d[a2].a25 ? (function(gY, gZ) {
								var m9 = Math.floor(.2 * a1W),
									mA = Math.floor(.3 * m9);
								cV.fillStyle = cY.i6, cV.fillRect(gY + a1W - m9, gZ, m9, m9), cV.fillStyle = cY.gk, cV.fillRect(gY + a1W - m9, gZ, 2, m9), cV.fillRect(gY + a1W - m9, gZ + m9 - 2, m9, 2), m0.sG(gY + a1W - m9 + mA, gZ + mA,
									m9 - 2 * mA), cV.setTransform(1, 0, 0, 1, 0, 0)
							}(gY, gZ), cV.lineWidth = 3, cV.fillStyle = cY.i6) : cV.fillStyle = cY.hk;
							if (a2N = Math.floor(a1V / 4), cV.fillRect(gY, gZ, a2N, a2N), a2O = Math.floor(gZ + .8 * a1V), cV.fillRect(gY, a2O, a1W, Math.floor(a1V / 5)), function(a2, gY, gZ) {
									var zoom;
									a1d[a2].pT && (a2 = cC.get(4), zoom = .5 * a1V / a2.width, cV.setTransform(zoom, 0, 0, zoom, Math.floor(gY + (a1V - zoom * a2.width) / 2), Math.floor(gZ + (a1V - zoom * a2.height) / 2)), cV.globalAlpha = .6, cV
										.drawImage(a2, 0, 0), cV.globalAlpha = 1, cV.setTransform(1, 0, 0, 1, 0, 0))
								}(a2, gY, gZ), a1d[a2].a2B) {
								for (e8 = a2L = 0; e8 < a1d[a2].a2B; e8++) a2L = Math.max(a2L, cH.measureText(a1d[a2].nJ[e8], a1a));
								a2L += .05 * a1V, e8 = 5 === a1d[a2].a2B, a2N = e8 ? gZ + a2N : Math.max(gZ + .8 * a1V - .11 * a1d[a2].a2B * a1V, gZ + a2N), a2O = e8 ? a2O : Math.min(a2N + .11 * a1d[a2].a2B * a1V + .05 * a1V, a2O), cV.fillRect(
									gY, a2N, a2L, a2O - a2N)
							}
							for (cV.font = a1a, cV.textBaseline = cW, cV.textAlign = so, cV.fillStyle = cY.iL, cV.fillText(a1d[a2].joined.toString(), Math.floor(gY + .22 * a1V), Math.floor(gZ + .9 * a1V)), cV.fillStyle = cY.cZ, e8 = 0; e8 < a1d[
									a2].a2B; e8++) cV.fillText(a1d[a2].nJ[a1d[a2].a2B - e8 - 1], Math.floor(gY + .03 * a1V), Math.floor(gZ + .77 * a1V - .11 * e8 * a1V));
							cV.textAlign = uJ, cV.fillStyle = cY.i9, cV.fillText(a1d[a2].tj.toString(), Math.floor(gY + .81 * a1V), Math.floor(gZ + .9 * a1V)), cV.strokeStyle = a1g === a1d[a2].a25 ? cY.i4 : cY.hr, cV.strokeRect(gY, gZ, a1W, a1W),
								a2O = Math.floor(.16 * a1V), zoom = a2O / a1c, cV.setTransform(zoom, 0, 0, zoom, Math.floor(gY + .33 * a2O), Math.floor(gZ + .33 * a2O)), a1b.length > a1d[a2].pS && cV.drawImage(a1b[a1d[a2].pS], 0, 0);
							cV.setTransform(zoom, 0, 0, zoom, Math.floor(gY + .15 * a2O), Math.floor(gZ + a1V - 1.08 * a2O)), cV.drawImage(a1b[11], 0, 0), cV.setTransform(zoom, 0, 0, zoom, Math.floor(gY + a1V - 1.05 * a2O), Math.floor(gZ + a1V -
								1.15 * a2O)), cV.drawImage(a1b[12], 0, 0), cV.setTransform(1, 0, 0, 1, 0, 0)
						}(a2, Math.floor(gY), Math.floor(gZ)), ++a2 >= a1d.length) return;
					gY += a1V + cO
				}
				gZ += a1V + cO
			}
	}
}

function qN() {
	this.c5 = function(gY, gZ) {
		aH.setState(5), po.ni(gY, gZ, !1), aA.cJ = !0
	}, this.cU = function() {
		po.a05()
	}, this.cL = function(gY, gZ) {
		var a2 = po.oL(gY, gZ, 5, 2);
		5 === a2 ? aD() : 6 === a2 && (pm.c5(), po.ni(gY, gZ, !1), aA.cJ = !0)
	}
}

function qO() {
	var a2R = [0, 0, 0, 0];

	function zX(gY, gZ, m7, a2k) {
		cV.fillStyle = cY.cZ;
		var m9 = sg(2, Math.floor((a2k ? .5 : .35) * m7)),
			tX = (m9 -= m9 % 2, sg(2, Math.floor(.1 * m7))),
			m7 = (tX -= tX % 2, Math.floor((m7 - m9) / 2)),
			gf = Math.floor(m7 + (m9 - tX) / 2);
		cV.fillRect(gY + m7, gZ + gf, m9, tX), a2k && cV.fillRect(gY + gf, gZ + m7, tX, m9)
	}

	function a0k(gY, gZ, cG, eH, rM, c3, te, dq, tA) {
		cV.fillStyle = rM, cV.fillRect(gY, gZ, cG, eH), 0 <= dq && function(gY, gZ, cG, eH, dq) {
			cV.fillStyle = "rgba(" + 22 * dq + "," + (110 - 22 * dq) + ",0,0.75)", cV.fillRect(gY, gZ, (1 + dq) * cG / 6, eH)
		}(gY, gZ, cG, eH, dq), 0 < tA && function(gY, gZ, cG, eH, tA) {
			cV.fillStyle = "rgba(255,255,255,0.3)", cV.fillRect(gY, gZ, tA * cG / bM, eH)
		}(gY, gZ, cG, eH, tA), cV.strokeStyle = cY.cZ, cV.strokeRect(gY, gZ, cG, eH), 0 !== c3 && (cV.fillStyle = cY.cZ, cV.font = c9 + Math.floor(c3 * eH) + cA, cV.fillText(te, Math.floor(gY + cG / 2), Math.floor(gZ + .52 * eH)))
	}
	this.fJ = [{
		bR: 0,
		tA: 512
	}], this.c5 = function() {
		pw.oB = !1, aH.setState(2), this.resize(), aA.cJ = !0
	}, this.a0s = function() {}, this.resize = function() {
		a2R[2] = Math.floor((o ? .49 : .4) * c6), a2R[1] = Math.floor((q - a2R[2] / 6 - this.fJ.length * (cO + a2R[2] / 10)) / 2), a2R[0] = Math.floor((p - a2R[2]) / 2), pw.oB && pw.resize()
	}, this.a2S = function(pS) {
		var a2;
		if (6 < pS) this.fJ = [{
			bR: 0,
			tA: 512
		}];
		else {
			for (this.fJ = [], a2 = 0; a2 < pS + 2; a2++) this.fJ.push({
				bR: 0,
				tA: 0
			});
			this.a2T()
		}
	}, this.a2U = function(a2V, a2W) {
		for (var bH = a2V.length, a2 = 0; a2 < bH; a2++) this.fJ[a2].bR = a2V[a2], this.fJ[a2].tA = a2W[a2]
	}, this.a2X = function(os) {
		var a2, bH;
		if (1 === os.mD.length)
			for (bH = this.fJ.length, os.a2V = new Array(bH), os.a2W = new Array(bH), a2 = 0; a2 < bH; a2++) os.a2V[a2] = this.fJ[a2].bR, os.a2W[a2] = this.fJ[a2].tA
	}, this.a0z = function() {
		aA.cJ = !0, pw.oB ? pw.oB = !1 : (this.a0s(), pm.c5())
	}, this.pW = function() {
		var a2, tA;
		if (fB.fC) return fB.fD.a2Y;
		for (tA = 0, a2 = this.fJ.length - 1; 0 <= a2; a2--) tA += this.fJ[a2].tA;
		return tA
	}, this.ni = function(gY, gZ) {
		return !(!pw.oB || !pw.ni(gY, gZ)) || -1 !== this.oL(gY, gZ)
	}, this.a2Z = function() {
		fV.o0 = 0, fV.ws(0, 3) && ih.a2a(0)
	}, this.a2b = function() {
		var dx;
		this.a2Z(), aH.a0r(), fB.fC ? fB.a2c() : (dx = (dx = this.fJ.length - 2) < 0 ? 7 : dx, pP(Math.floor(16384 * Math.random()), 0, [{
			name: pm.a2d(),
			a2e: cQ.sI[2].mw.a0G(),
			a2f: 0
		}], dx, !1, !1))
	}, this.cL = function(gY, gZ) {
		if (cR.oB || cQ.sI[1].mw.oB || cQ.sI[2].mw.oB) return !1;
		if (pw.oB && !fB.fC) return pw.cL(gY, gZ);
		var a2, dx, max, m9, gZ = this.oL(gY, gZ);
		if (-1 === gZ) return !1;
		if (0 === gZ) this.a0z();
		else if (1 === gZ) fB.fC ? (fB.oE(), aA.cJ = !0) : pw.show();
		else if (100 === gZ) oJ.a2g();
		else if (2 === gZ) this.a0s(), this.a2b();
		else {
			if (fB.fC) return !1;
			if (27 === gZ) this.fJ.length < 8 && (this.fJ.push({
				bR: 0,
				tA: bM
			}), this.a2T(), this.resize(), aA.cJ = !0);
			else if (a2 = Math.floor((gZ - 3) / 3), gZ % 3 == 0) 1 < this.fJ.length && (this.fJ.splice(a2, 1), this.resize(), aA.cJ = !0);
			else if (m9 = (a2R[2] - a2R[2] / 10 - 2 * cO) / 2, gZ % 3 == 1) 0 === a2 && 1 === this.fJ[a2].tA || (gY < a2R[0] + a2R[2] - 1.5 * m9 - cO ? this.fJ[a2].bR-- : this.fJ[a2].bR++, this.fJ[a2].bR < 0 ? this.fJ[a2].bR = 5 : 5 < this.fJ[a2]
				.bR && (this.fJ[a2].bR = 0), aA.cJ = !0);
			else {
				for (aA.cJ = !0, gZ = (gY - (a2R[0] + a2R[2] - m9)) / m9 - .5, gZ *= gZ < 0 ? -gZ : gZ, gZ = 0 === (gZ = Math.floor(gZ * bM)) ? 1 : gZ, max = bM, dx = this.fJ.length - 1; 0 <= dx; dx--) a2 !== dx && (max -= this.fJ[dx].tA);
				if (gZ < 0) {
					if (1 === this.fJ[a2].tA) return this.fJ[a2].tA = max, !0
				} else if (this.fJ[a2].tA === max) return this.fJ[a2].tA = 1, !0;
				this.fJ[a2].tA += gZ, this.fJ[a2].tA < 1 ? this.fJ[a2].tA = 1 : this.fJ[a2].tA > max && (this.fJ[a2].tA = max)
			}
		}
		return !0
	}, this.a2T = function() {
		for (var tA = Math.floor(bM / this.fJ.length), a2h = bM % this.fJ.length, a2 = this.fJ.length - 1; 0 <= a2; a2--) this.fJ[a2].tA = tA;
		this.fJ[0].tA += a2h
	}, this.oL = function(gY, gZ) {
		var m9 = (a2R[2] - 3 * cO) / 4,
			tX = a2R[2] / 6;
		if (gY < a2R[0] || gZ < a2R[1] || a2R[0] + a2R[2] <= gY) return -1;
		if (gZ < a2R[1] + tX) return gY < a2R[0] + m9 ? 0 : gY < a2R[0] + m9 + cO ? -1 : gY < a2R[0] + 2 * m9 + cO ? 100 : gY < a2R[0] + 2 * (m9 + cO) ? -1 : gY < a2R[0] + 3 * m9 + 2 * cO ? 1 : gY < a2R[0] + 3 * (m9 + cO) ? -1 : 2;
		for (var ge, tY = a2R[2] / 10, m9 = (a2R[2] - tY - 2 * cO) / 2, a2 = 0; a2 < this.fJ.length; a2++) {
			if (gZ < (ge = a2R[1] + tX + cO + a2 * (tY + cO))) return -1;
			if (!(ge + tY < gZ)) return gY < a2R[0] + tY ? 3 + 3 * a2 : gY < a2R[0] + tY + cO ? -1 : gY < a2R[0] + a2R[2] - m9 - cO ? 4 + 3 * a2 : gY < a2R[0] + a2R[2] - m9 ? -1 : 5 + 3 * a2
		}
		return !(this.fJ.length < 8) || gZ < (ge = a2R[1] + tX + cO + this.fJ.length * (tY + cO)) || ge + tY < gZ || a2R[0] + tY < gY ? -1 : 27
	}, this.cU = function() {
		cV.lineWidth = ow, cV.textAlign = cX, cV.textBaseline = cW;
		var m9 = (a2R[2] - 3 * cO) / 4,
			tX = a2R[2] / 6;
		if (a0k(a2R[0], a2R[1], m9, tX, "rgba(128,0,0,0.75)", .34, "Back", -1, -1), a0k(a2R[0] + m9 + cO, a2R[1], m9, tX, "rgba(128,0,128,0.75)", .31, "Custom", -1, -1), a0k(a2R[0] + 2 * (m9 + cO), a2R[1], m9, tX, "rgba(" + (fB.fC ? 128 : 0) +
				",128,128,0.75)", .34, fB.fC ? "Reset" : "Maps", -1, -1), a0k(a2R[0] + a2R[2] - m9, a2R[1], m9, tX, "rgba(0,128,0,0.75)", .34, "Start", -1, -1), !fB.fC) {
			for (var ge, tY = a2R[2] / 10, m9 = (a2R[2] - tY - 2 * cO) / 2, a2 = 0; a2 < this.fJ.length; a2++) ge = a2R[1] + tX + cO + a2 * (tY + cO), a0k(a2R[0], ge, tY, tY, 1 < this.fJ.length ? "rgba(128,0,0,0.75)" : "rgba(90,90,90,0.75)", 0,
				null, -1), 1 < this.fJ.length && zX(a2R[0], ge, tY, !1), a0k(a2R[0] + tY + cO, ge, m9, tY, cY.ho, .4, this.a2i(a2), this.fJ[a2].bR, -1), a0k(a2R[0] + a2R[2] - m9, ge, m9, tY, cY.ho, .4, this.a2j(a2), -1, this.fJ[a2].tA);
			this.fJ.length < 8 && (ge = a2R[1] + tX + cO + this.fJ.length * (tY + cO), a0k(a2R[0], ge, tY, tY, "rgba(0,128,20,0.75)", 0, null, -1, -1), zX(a2R[0], ge, tY, !0)), pw.oB && pw.cU()
		}
	}, this.a2i = function(a2) {
		return 0 === a2 && 1 === this.fJ[a2].tA ? "You" : eZ.f6[this.fJ[a2].bR]
	}, this.a2j = function(a2) {
		return 1 === this.fJ[a2].tA ? "1 Player" : this.fJ[a2].tA + " Players"
	}
}

function uR() {
	this.bH = 0, this.cG = 0, this.sI = null, this.c5 = function() {
		this.sI = [], this.sI.push({
			gY: 0,
			gZ: 0,
			rH: o,
			mw: null
		}), this.sI.push({
			gY: 0,
			gZ: 0,
			rH: !1,
			mw: new a16
		}), this.sI.push({
			gY: 0,
			gZ: 0,
			rH: !1,
			mw: new a08
		}), this.sI[2].mw.a0D(), this.bH = this.sI.length, this.cG = 0
	}, this.x0 = function() {
		this.cG = Math.floor((o ? .063 : .04) * c6), this.cG += 4 - this.cG % 4, this.sI[0].gY = cO, this.sI[0].gZ = cP - this.cG - cO;
		for (var a2 = 1; a2 < this.bH; a2++) this.sI[a2].gY = this.sI[a2 - 1].gY + Math.floor(o ? 1.5 * cO : 3.7 * cO) + this.cG, this.sI[a2].gZ = this.sI[0].gZ
	}, this.oL = function(cM, cN) {
		if (cC.cD())
			for (var a2 = this.bH - 1; 0 <= a2; a2--)
				if (cM >= this.sI[a2].gY && cN >= this.sI[a2].gZ && cM < this.sI[a2].gY + this.cG && cN < this.sI[a2].gZ + this.cG) return a2;
		return -1
	}, this.a0w = function() {
		for (var a2 = 2; 1 <= a2; a2--)
			if (this.sI[a2].mw.oB) return !0;
		return !1
	}, this.resize = function() {
		for (var a2 = 2; 1 <= a2; a2--) this.sI[a2].mw.resize()
	}, this.oQ = function() {
		return this.sI[1].mw.oB ? (this.sI[1].mw.cL(-5e3, -5e3, 0), !0) : !!this.sI[2].mw.oB && (this.sI[2].mw.cL(-5e3, -5e3), !0)
	}, this.cL = function(cM, cN, zh) {
		if (zh) {
			if (this.sI[1].mw.oB) return this.sI[1].mw.cL(cM, cN, 0), !0;
			if (this.sI[2].mw.oB) return this.sI[2].mw.cL(cM, cN), !0
		}
		cM = this.oL(cM, cN);
		if (zh) {
			if (0 === cM) return this.sI[cM].rH = !this.sI[cM].rH, o = this.sI[cM].rH, od.a2n(0), z(this.sI[0].rH, !1), !0;
			if (1 <= cM && cM < 3) return this.sI[cM].mw.c5(), oN.cS(!1), aA.cJ = !0
		}
		return !1
	}, this.ni = function(cM, cN) {
		return this.sI[1].mw.oB ? (this.sI[1].mw.ni(cM, cN), !0) : !!this.sI[2].mw.oB && (this.sI[2].mw.ni(cM), !0)
	}, this.a0I = function() {
		for (var a2 = 2; 1 <= a2; a2--)
			if (this.sI[a2].mw.oB) return this.sI[a2].mw.a0I(), !0;
		return !1
	}, this.cU = function() {
		if (cC.cD()) {
			cV.imageSmoothingEnabled = !0;
			for (var a2 = this.bH - 1; 0 <= a2; a2--) cV.fillStyle = this.sI[a2].rH ? cY.i5 : cY.ho, cV.fillRect(this.sI[a2].gY, this.sI[a2].gZ, this.cG, this.cG), 0 === a2 ? this.a2o(a2, cC.get(15)) : 1 === a2 ? this.a2p() : 2 === a2 && this
				.a2q(), cV.setTransform(1, 0, 0, 1, 0, 0), cV.lineWidth = ow, cV.strokeStyle = cY.cZ, cV.strokeRect(this.sI[a2].gY, this.sI[a2].gZ, this.cG, this.cG);
			cV.imageSmoothingEnabled = !1
		}
	}, this.a2o = function(a2, rJ) {
		var lc = .08 * this.cG,
			zoom = (this.cG - 2 * lc) / rJ.width;
		cV.setTransform(zoom, 0, 0, zoom, this.sI[a2].gY + lc, this.sI[a2].gZ + (this.cG - zoom * rJ.height) / 2), cV.drawImage(rJ, 0, 0)
	}, this.a2p = function() {
		var lc = .06 * this.cG,
			zoom = (this.cG - 2 * lc) / a3.cG;
		cV.setTransform(zoom, 0, 0, zoom, this.sI[1].gY + lc, this.sI[1].gZ + lc), cV.drawImage(a3.rJ[4], 0, 0)
	}, this.a2q = function() {
		cV.setTransform(1, 0, 0, 1, this.sI[2].gY, this.sI[2].gZ);
		for (var bR = this.cG / 4, gY = 3; 0 <= gY; gY--)
			for (var gZ = 3; 0 <= gZ; gZ--) {
				var mj = Math.floor(367 * (gY + 1) * (gZ + 1) % 256),
					os = Math.floor(687 * (gY + 1) * (gZ + 1) % 256),
					e8 = Math.floor(651 * (gY + 1) * (gZ + 1) % 256);
				cV.fillStyle = "rgb(" + mj + "," + os + "," + e8 + ")", cV.fillRect(gY * bR, gZ * bR, bR, bR)
			}
	}, this.a13 = function() {
		for (var a2 = 2; 1 <= a2; a2--)
			if (this.sI[a2].mw.oB) return void this.sI[a2].mw.cU()
	}
}

function qP() {
	var username, a2r;

	function a2z() {
		var ry;
		return 0 === username.indexOf("vote ") && 2 === (ry = username.split(" ")).length ? (pm.a2s = ry[1], a33(), fV.ws(0, 7) && ih.a34(0), pq.a0f(3252), 1) : void 0
	}

	function a33() {
		username = a(), oN.get().value = username, oN.oW(!0)
	}

	function a2y() {
		var max, a35;
		if (0 === username.indexOf("account ")) return 2 !== (a35 = username.split(" ")).length || (max = Math.floor(Math.pow(2, 48)), (a35 = parseInt(k.l(a35[1]))) <= 0) || max <= a35 ? (a33(), pq.a0f(3266)) : m(a35) ? (a33(), pq.a0f(3231)) : (
		a33(), 5 <= d ? pq.a0f(3232) : (pq.a0f(3265), a0p.oB = !0, a0p.c8 = -1)), 1
	}

	function a31() {
		return void 0 !== username && k.mY(username)
	}

	function a2w() {
		if (a31()) return oN.oW(!0), 1;
		oN.oW(!1)
	}
	this.a2s = "", this.a2t = -7e3, this.c5 = function(a2u) {
		d < 5 || (a2r && aA.aB > a2r + 144e5 ? e.setState(14) : a2r = aA.aB), aH.setState(0), po.x0(), oN.cS(!0), pn.c5(), cQ.x0(), a2u && a9() ? setTimeout(function() {
			0 === aH.oP() && a7(12)
		}, 15e3) : a7(12), void 0 === username && (username = a(), oN.get().value = username, a2w())
	}, this.a0s = function() {
		a7(13), oN.cS(!1)
	}, this.a2x = function(c8) {
		return 0 === c8 ? po.cG : 1 === c8 ? Math.floor(.3 * po.eH) : 2 === c8 ? oN.get().style.font : username
	}, this.a1G = function() {
		var i;
		username = oN.get().value.trim(), a2w(), "password" !== username && "account" !== username || (i = k.x(h().toString()), username = "account " + i, oN.get().value = username)
	}, this.cL = function(gY, gZ) {
		aA.oa(), 1 === po.oL(gY, gZ, 1, 1) ? a2y() || a2z() || (a7(10), a2w() ? (this.a0s(), u(username), fI.c5()) : pq.a0f(4214)) : 0 === po.oL(gY, gZ, 0, 1) && this.a0u()
	}, this.a0u = function() {
		a2y() || a2z() || (a7(10), a31() && 5 <= username.length && 40 === username.charCodeAt(0) && 40 === username.charCodeAt(1) && 41 === username.charCodeAt(3) && 41 === username.charCodeAt(4) ? pp.a0W(Math.abs(username.charCodeAt(2) + 5)) :
			pp.a0W(gm.a32), a2w() ? cC.cD() ? (this.a0s(), u(username), fB.oE(), pp.c5()) : pq.a0f(3228) : pq.a0f(4214))
	}, this.a36 = function() {
		return !cQ.a0w() && !cR.oB && !oM.oB
	}, this.cU = function() {
		var eo, hQ;
		this.a36() && (cV.imageSmoothingEnabled = !0, eo = cC.rK("territorial.io"), hQ = 1.1 * po.cG / eo.width, cV.setTransform(hQ, 0, 0, hQ, Math.floor((gg - hQ * eo.width) / 2), po.gZ - hQ * eo.height - .72 * po.eH), cV.drawImage(eo, 0, 0), cV
			.setTransform(1, 0, 0, 1, 0, 0), po.a02())
	}, this.a2d = function() {
		return username
	}
}

function qQ() {
	var a38, or, c4, a39;

	function a3C(c8, name, a3D, j) {
		c4[c8] = name, or[c8] = new Image, or[c8].onload = function() {
			0 < a3D && ! function(c8, a3D) {
				var gY, gZ, a2, eo = document.createElement("canvas"),
					cG = or[c8].width,
					eH = or[c8].height,
					ox = (eo.width = cG, eo.height = eH, eo.getContext("2d", {
						alpha: !0
					})),
					a3G = (ox.drawImage(or[c8], 0, 0), ox.getImageData(0, 0, cG, eH)),
					kt = a3G.data;
				if (a3D < 3) {
					var a3H = 2 === a3D ? 160 : 600;
					for (gY = cG - 1; 0 <= gY; gY--)
						for (gZ = eH - 1; 0 <= gZ; gZ--) kt[a2 = 4 * (gY + gZ * cG)] + kt[a2 + 1] + kt[a2 + 2] < a3H && (kt[a2 + 3] = Math.floor(255 * (kt[a2] + kt[a2 + 1] + kt[a2 + 2]) / a3H))
				} else if (3 === a3D)
					for (gY = cG - 1; 0 <= gY; gY--)
						for (gZ = eH - 1; 0 <= gZ; gZ--) 0 === kt[a2 = 4 * (gY + gZ * cG)] && 200 < kt[a2 + 1] && 0 === kt[a2 + 2] && (kt[a2 + 3] = 0);
				else if (4 === a3D) ! function(kt, cG, eH) {
					var gY, gZ, a2;
					for (gY = cG - 1; 0 <= gY; gY--)
						for (gZ = eH - 1; 0 <= gZ; gZ--) kt[1 + (a2 = 4 * (gY + gZ * cG))] > kt[a2] + 20 && kt[1 + a2] > kt[2 + a2] + 20 && kt[a2] + kt[2] < 40 && (kt[3 + a2] = 255 - kt[1 + a2], kt[a2] = kt[1 + a2] = kt[2 + a2] = kt[a2])
				}(kt, cG, eH);
				else if (5 === a3D) ! function(kt, cG, eH, id) {
					var gY, gZ, a2;
					for (gY = cG - 1; 0 <= gY; gY--)
						for (gZ = eH - 1; 0 <= gZ; gZ--) 200 < kt[1 + (a2 = 4 * (gY + gZ * cG))] && kt[1 + a2] - 20 > kt[a2] && kt[1 + a2] - 20 > kt[2 + a2] ? kt[a2] + kt[2 + a2] < 40 ? kt[3 + a2] = 0 : (kt[3 + a2] = kt[a2], kt[a2] = 255,
							kt[1 + a2] = 255, kt[2 + a2] = 255) : kt[a2] < 50 && kt[1 + a2] < 50 && kt[2 + a2] < 50 && (kt[a2] + kt[1 + a2] + kt[2 + a2] < 50 ? (kt[1 + a2] = 0 === id ? kt[1 + a2] : 160, kt[3 + a2] = 180) : (kt[1 +
							a2] = 0 === id ? kt[1 + a2] : 160, kt[3 + a2] = 180 + Math.floor(75 * (kt[a2] + kt[1 + a2] + kt[2 + a2] - 50) / 100)))
				}(kt, cG, eH, 0);
				else if (6 === a3D)
					for (gY = cG - 1; 0 <= gY; gY--)
						for (gZ = eH - 1; 0 <= gZ; gZ--) kt[(a2 = 4 * (gY + gZ * cG)) + 3] = Math.floor(255 * (kt[a2] + kt[a2 + 1] + kt[a2 + 2]) / 765), kt[a2] = kt[a2 + 1] = kt[a2 + 2] = 255;
				else if (7 === a3D)
					for (gY = cG - 1; 0 <= gY; gY--)
						for (gZ = eH - 1; 0 <= gZ; gZ--) kt[(a2 = 4 * (gY + gZ * cG)) + 1] > kt[a2 + 2] + 10 && (kt[a2 + 3] = kt[a2], kt[a2 + 1] = kt[a2 + 2]);
				ox.putImageData(a3G, 0, 0), or[c8] = eo
			}(c8, a3D), a38--, cC.cD() && (zQ.cB(), m1.rD(), a3.c5(), a10.zk([or[8], or[16], or[7], or[9], or[10]], [!b, 0 === d, !0, !0, !0]), aA.cJ = !0, or[7] = a39, or[8] = a39, or[9] = a39, or[10] = a39)
		}, or[c8].src = "data:image/png;base64," + j
	}
	this.c5 = function() {
		if (void 0 === or) {
			a38 = 22, or = new Array(a38), c4 = new Array(a38), (a39 = document.createElement("canvas")).width = 1, a39.height = 1;
			for (var a2 = a38 - 1; 0 <= a2; a2--) or[a2] = a39;
			a3C(0, "exit", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
				), a3C(1, "victory", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg=="
				), a3C(2, "defeat", 6,
				"iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC"
				), a3C(3, "orders", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAbAAAABIBAMAAABl1r3ZAAAAGFBMVEUAAAAqLCpGSEVkZmOHiYanqabJzMj///+NZwUtAAALoUlEQVRo3t1bS3Pbug6WLMlnq7SNs3VvW3ur9jbR1m6daOu8rK3tONb21A/x7x/wDVCU3JPp9PaGM5mJ5U8gPxIAAZAOAtw+XG8ZtO3Dl6C1/T9iriumWv3wijBvFgy15/evBRNVckHTUC5unb0OTA8w9feh+vCVfxq+BkxY0JXka3xIWzFnP4EJ/gRMcMXYhjwLbxh7asV8O4mJH35Gzi/AfFxsH9JWzDvg6qxiD+Zj2oKJ1ycxJZuflvMzfZ3AjLjXOKYtmLD02B1Y5jH1Y652pzAR9BoE70/ICbLTfXWPJ5b+cOPHBOeM3Yaudoqn3k9htTuFScCQ05vtsFNO0Juf7Kt7PMBOtokXA18/Bcmh4VGuEH2BUS1mu07Mmy8feIcL3V+bnCBenuyrezyJ3sIOPgzQhEUdseOwufi3BKNajoh5MGYaGcs65QT9/cm+useTg31NezfIz2MMDAScQeyoJ28j80hizPax68JEhlfdKSe8qernYXdfJ8ZTCXrc78+bGNAswReYbYaNHXBCMNp+dl2Yngnf9l1yuHOGCc86++oeT6y6iNGILAbWU2r0x4o9N7R6TzHyf0zMgzGquO6SM6IOzd9X93j6eqVKa2QWE1bKFIJ3lbMrglbVKcXIBdl1Ysaa2LxDjlnXSUdfDSujGJibVPGsGxhYx6N+9qmxc5eyX4ThHpUQa2KMr5p0yBk1HJqnr0ajmJHmM0LENAbmd2WeXTLHbgeSA8YUgljcgTHeY9ghx+hrnbb31WgUk+s56GNiChOQlYc1u7f728e7SL6BMCJV2AXJBK89xYQVdYo+TM+mUXMP5t7H6qsrxxAbePqKkN1xZpVhFi2qNaxPRjEDJonZLaiJKRrEGpjEEls1MZFv1QZcA4gcvypKDMCJ8oWwZncifLgUfY54FxhTKGJ1irYXBzNqEnMxfUvs0MT0sX2aXYktHTkDHQIUxC4FBtRVioin1s6A2eVWaokIn8a2G6GJnBiKyVyMXo4jGRbFjC2xYxNTOP5JvbF35CRquUH3925fQammvqgnhtleuD5h/WF1tBgz05yY1TwXo105DmQdTFKhWsWyganswwD1XDtyIjUrfUZUV2CC6qhVrP6sl/JW+axaELcYGb0oYiieoxjO7KZi2yl11ATTx0WYv11MYj3q18ftdvug3c3EkVMK7XpbOZrLMSZS7y1Yrac4ja2SwLKjaF55ck4M2RTFgCw1C4/ToAWTbFFbupgLmNMolWGenOHn2XUGLH44ckb8K16Bq2emfZOqmphF7EHmNrVRk471BmxuMdotCGI2ZqYYmMEn/tXZjRXoYsIz1BpygMKuz5ONHK/rhZhpLCe8Yp72xDEwUrOIfM2mJNz5ISxxbTE6IxHE7JsEI/zL82wmC2JTP8bfFIYr3Rx62oR4vEepoFjODfM2WNI1zIk1Fb5mE7NXqa0zYnuLUSqqiO2tgiJMr8SdGEskmMGWtGeK4QbIOe2JJbJU+Bkk59zPi+0BA84QpQic2eeAJty96mAxI0LMPCYYRz10QYxgxhRTUzmggAcuf17wwrXxn/zjHskJqxZi9ZvqIBwIYrbga5aQBLg6WkxJiFl/jjB6UQ9aym0TIyaIm7z6O1I53NkD9bonAkktEMxOTIGRk4gy8MxtMMYM3GZ1dItcSx0RqfC0rA3G9iGJ2cDcYtTLz9+ia2UbaQPDjfjwEcwcCK5zVDITGN7LpJJElvF2qGeojoQSGTlls0an+E6AenVwktTFMKIhQVEbzJVDzBiQxeB6WEz2aSSHL8oBkGueKebICwlMX3FYwhwNIfkfalvKKr7naTkR82fasM6Tog5s+p6SMNeOKGcoJaXEzFZmMTlORUZ4yXLkbdqICUwhF4tlAEjE+2pCuX4ejZyE+UsjIHeSs8Dsdee6SGWGr8x+bOI2o4mGmFYzg1EbxYrkJhNHTjsxjgnVYsHYNtKoD0q/hdmmWs4Fw/nWf0wDedkYXv5h1ExVjPTC69jxgmlM3iCmcymDSWjqXKKajpXTToxjxHYlNO+99sJrNV+c81zLIRH9ud07uIZeADEdqL0tVSmnMBu4bH/pYM5Wnyyxg4NRL6dBeB9nVDH/QkFhGzGOGau9GAZgNuC5VBa+a++0HBLR52SHATmWGA8YePlNuw5jmGZAKDc0xBRKY5Qacyd9SPYfvpZoAX+WWCmjJ7ozDYWZcVJHJSciJlZg9FwQ+4ELrZvUeL5brB7urBhiCqYxMUPE6orkyEQVrx/ve4+P0/jxcfLp8XGI+xpxd+3uuQeh1TWfDCUnQUUwSuzI5QQ4KH9b1UOtb/YETRsr0kRE7EgwA7sBfkMLvG84j5YmMEXda0YTKzFnfHdSckYis3nzafv8WSZd2sYehlxOQFPPjXYdKNnS7hVHZjsnOsnt4E15CuWSNcb0/uttnw0mvA88wVI24t9dploOLyX2RKB9FKUQMmk5czboVAdNqLyoN8TCT2yNMSXOiT9ahRoiTNISuWI5Y1Y1lVGVphSG+47SaLpDDDZoJ6SKaRiEQqGo8hMTLk+HORWpz9hjlwnCDDqIaUw0gbHN9Ou1UJZlssbjUbu3UgiHGIRUNjDtTayDwNUKFXSS8SBiAqswNn+6Q5Uftd3p4JUHWs8wGr7hLCCMreTfmgTK0V28tIXXbIDctMTAd3OR1dTCHBxiQN2mEgP4TzmIAznhkGlC0UZsbzERSmNTrL4rnLZAbpQ67r6Uw7aYMWhvNdGvy6Bqj8eTiHyS1ffvR3zeKDHA2EQTtqAntdOTYzeV2FFHhYkBWid/katafUvMJojtxCym4uvBty3s7Z1kNAtu+BlKxERCQs9J9rY0wA1C7R9rT7r+iRBbYxdwZ9L1GBt7fGsdxQqXBtqJGUzEI3ScQYugCo8HFbWbxGIxwBWq+DQ8hymekOrLWYo/p6bAglfskKAkcYWLMO3EDCYSWeZSRgtHPt3zqKrxeGxRO24SG+hKL7X0ibNn0tKaf1+VGBOOPXy/gFA8Mw9WWE47MYRZwVfD78IAduJqURZnuK+xDoH5CbRrY6JSbP19Ts9X24qhvlMrhelZ++Ih1dCs2BzLaSeG+yo5Yi5sY87n/ED7GssVO7usxDZJiZV1gMvOUdNz4JLyWUtzStPaq36P76zzmOPSdCsxXL7mLiFnf+dySImpi2jMiDsPcTFMfEWIyRK3PSiQvn7t5qP6EOBy6233GFM6Z3m5ibvQYUIrMXzgAFTOIIw/r2Rwf67HpTHw5kbeLRU7KSEm1dke7QyangMf27RU8W4xJqdneegEEB3/tBLDR0Q94RN5xUyEg8EbZzwxLfAV9IbGCh/8yQVzajvooK3nLePV5DBuwEhIdm5TAIOJZhWrZ/DsGv7A8Dewyrx2OJvSQ73LDFLkaDussiusRwZj4i1x940QK/RemOEazsQ9pjeYkY/YmmBihtNv42dXCJO3VDnZwT3Ordjygi2LA3f6u8Z4VCxx/15x2blj1gfVekGeWg+zI99wMooxYe/zXWTvIWcI007MPVwveb3t74JtYErnzfGU9k4TJaYP183VAl4ORIbfvH5QeEbjYM7RBm3+3WDM21lLm7rXIZJNrA4nvOMJZ9d+Yvo6hLwMIuxclBZWrRdGPJnU3MGERZMYmOELLqfoWw4VNg+Kib3EzAUWeX1nJA0GzGLVesUnbJQiuAgHoy+M1wtUxnvBdSLtt99t0YpRjJ+YwcgLV7nycCNy+uJcyhp5XIeLCb9uCfWH7GUXwERbZF0YLzF0SUxckesrn9r71nGNLnLtIvNdxzt7e71Q514PX85efGXvNCbyEUPX+sSlRl+J/2WXI38jpmgSwxh5DdUzTS+7zvrbMGvQxQYxcnVWXBHuXQ9/9rLzH4Kpp8GNS8x5899eT//zMIqYez39F1/y/x9gJLEG5lf/LOP3Y262d17MH/djm3+L4fmu90c7r/ZnVq/3h3Gv96eMwav98Wnwqn4u/A/xnpi6RePJDQAAAABJRU5ErkJggg=="
				), a3C(4, "crown", 4,
				"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
				), a3C(5, "arena", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC"
				), a3C(6, "territorial.io", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAjIAAABBCAIAAABEh9lIAAAACXBIWXMAAFxGAABcRgEUlENBAAAJJWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNTo1OSswMzozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMTItMjNUMTM6MjY6MDUrMDM6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY4ZGZmYjhkLWEyNDEtMTg0Mi1hNGYxLTk2ODMyZGFjYThjYSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE4YTU4YWFiLWE4ODYtNWI0Ni04OTk1LTI3MTdiYWZmOWMzYSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjNhNTMxM2RiLWY0ZGItN2Q0Mi1hZDc1LTEyMTJiNGE0NThjZSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2E1MzEzZGItZjRkYi03ZDQyLWFkNzUtMTIxMmI0YTQ1OGNlIiBzdEV2dDp3aGVuPSIyMDIyLTEyLTIzVDEzOjI1OjU5KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4NjhhNzU5LWRjNDctNGM0My1iYzA1LTllM2ZjOGMwZjY0YSIgc3RFdnQ6d2hlbj0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmOGRmZmI4ZC1hMjQxLTE4NDItYTRmMS05NjgzMmRhY2E4Y2EiIHN0RXZ0OndoZW49IjIwMjItMTItMjNUMTM6MjY6MDUrMDM6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTg2OGE3NTktZGM0Ny00YzQzLWJjMDUtOWUzZmM4YzBmNjRhIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNhNTMxM2RiLWY0ZGItN2Q0Mi1hZDc1LTEyMTJiNGE0NThjZSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjNhNTMxM2RiLWY0ZGItN2Q0Mi1hZDc1LTEyMTJiNGE0NThjZSIvPiA8cGhvdG9zaG9wOlRleHRMYXllcnM+IDxyZGY6QmFnPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IkZYY2xpZW50LmNmIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSJGWGNsaWVudC5jZiIvPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOlRleHRMYXllcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xlpeuAAABqhJREFUeNrtndtxq0AMQKmGQlKFe0gNlJAOUoErcAMuIAWkgPzn/15NPOPxwCJpH7Cwe87XvRnzFKODYFcMAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDCPxXOT5O8v79/fn5+f38vI/7x8cH5AYCzammapmdqk3+Q0U4hpKCN0BLAUXh7e/uXwc/PT9SqJCms7YmkA33Z39/fcRyPoyW53V7+/na7cVEdlmDI0BJAs1oSvr6+9N/f7/e1PTGX3Sjjp2lJkajkPq6rkzoJLQG0piUphsxFZItpuxFcsJaW5MCVqo7r6rzXOVoCaEpLnqInWExcr9cqpVKalsyTdrlcuLQOhVw/aAmgUy2ZBdNyEUEqjCqlUpqWzGNUXqHB/ozjaF5gaAmgWS15CqZpml5/L/+tVSpRLfWAhMN/SaMlgAa1ZI6pE29FaWy7Umng3VIHmBckWgJoXEt61p6ZxtwBZfBeRS0pFV7DI/ESrgS0BACH0JKZCJ652xy2u/V7GuYtoaXr9UoqAGhcS2bB9FxQfxc9e9x3KC09aqbnE8geujw0qaUdrjEAKKml5GLFLIOmP6oPaaMnXudaolQC6EVL5qjc2+12v9+r38aipc61RFcOgF60ZBZMv39Un/2DltASkQXoRUtR0xhrPfFHS2iJyAL0oqXB3R+z1DhdEeHyOzryF+Uo6mppmibZvZm8r9frdqMnlqdI7gCcm6uupYT4oiUAtDTPI2UH+CnojfUklwWPJU1L+TITIemDFcVVzoypN0N6rTuVBC3nJzht2ZzsvJuiYuNrTp5j3hJAj1oaYrpkJqcGkZ/+bTdlXlEVLZmtaU1bJGjJDIRs65haSosvWgJAS4mbyExq/pwVXPn+Wor1tJRNepM9j5acIlzWZ9W1lBxftATQppaKdFCNSsSxeUEfZX40LfnrJL+ZTC2Z88OUhn7VtZQcX7QEgJYKbCU2o0W1O6uuJc9nEhPOjL5aWTBqPOSsPq6rpZz4oiUAtKThzG6xw6JiU09dLaUlSvPk5NjO3EpdLeXEFy0BoCUNT+qUm/pxHLe7la6rJeVJmuzV8xtUykGtnZ9WtZQZX7QEgJb21lKRjLmblpS9nY21UyZ7BZNmq1rK3DRaAkBLGs4X1/6HeKVmRO2jJWVvlx+Uivpxq1rKjy9aAkBLBbbiz2ie0WWPQWivVcgyre+jpdjPBq4NiQ5++tbUkpzV50AG8/5AuTPYc65SqfgOdHkAQEtLthggbo60du7ePlpS9vY1sXrO2HJ2raml2SJ6GXEQLZWKL1oCQEu5m3AmOP3hkj9L7qMlpUYJTlhWXi8tNaZradm7Qc/4B9FSqfiiJQC0FH3bm1YwJd/yV9GS0qcgVkvLQ/P3xDNXfhwtlYovWgJoTUv5rVoTvm3hyXH6avVuPftrKXPGUodaKhVftASAliIyYM5203RSS0sFR8oti9QmtVQqvmgJAC3llkpryRQtoSW0BICWNvxoembBdC4tFXyIt9QMWkJLAGjJhZ6L7/e7/sECvWDSV97wu6VOtFQqvmgJAC25csFjuJ1ZTilb15V2tJF4ynDn/C9aNamlUvFFSwBoyVsfjH/ovwlO2n+gdys4+7wltFQqvmgJAC3ZifL1vb3ZAGLtk+Hn6vIQNQ8JLQ10eQBAS2W1ZPb3fK7WL7AZzfTEk/zbiZakOH7d9Cw6G8UXLQGgJds0s0RpPu4LFkyn6yC+NlY+2H11zRzLTkJn0dLlcgmegbXbjlLxRUsAaMkulWa9hcyBD2uZS38rfigtDerLkllmlIy8pupgaXV8Lekz2NbqxSLxRUsAvWvJXOGyOPDMug0WTOf6Oq0uj2dylJ8p6Tg4MPr4WjJfFG0XX7QE0LuWzCEMwSxgLhW8oU7oIlFRS0PSJ/U8E7mOryWz7gk25y0SX7QE0LWWPP3Ig59FlyLArLGCC8beUNfVknmYabE4vpbM14drG82PL1oC6FpLZtGjDOo1K4m19BFVgtTV0pDRkEkZsNdAtaQMycuML1oC6FdLnkcuSs8Y8754rWBSBggcUEtD5Ld6lQF4J9KS/m5pLbJF4ouWAPrVklkHmE3Bkx/1yFE4M1eteUtRaTr2vB1fSxIg5ZbFFENOfNESQKda8pRKyoMap9j022q9CpG8FnyvXkVLgzXi7nm8ng/1nnrekn82cVp80RIAVLasZJlZupe/mEashRhlucOSvuWPHiGdi1mXB6lsEqYfnCu+AAAAAAAAAAAAAAAAAAAAAAAAAABn5D93cI1gSBc6jAAAAABJRU5ErkJggg=="
				), a3C(7, "youtube", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC"
				), a3C(8, "googleplay", 3,
				"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"
				), a3C(9, "discord", 7,
				"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
				), a3C(10, "insta", 3,
				"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"
				), a3C(11, "emojis", 4,
				"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"
				), a3C(12, "flags", 3,
				"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"
				), a3C(13, "bestTeam", 5,
				"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"
				), a3C(14, "bestPlayer", 5,
				"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"
				), a3C(15, "zoom", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
				), a3C(16, "apple", 3,
				"iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII="
				), a3C(17, "loading", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAZEAAABGBAMAAAD/Q7RHAAAAGFBMVEUAAAAnKSZKTElucG2Fh4SoqqfLzcr///+y5yZlAAAEnUlEQVRo3u3aS3PaMBAAYGNsuHoy0+TKTJv6SjNNfeWSciVNJlydF7qGl/n7JTGSd1e7wgaFaWfMKfFD1qeXV5KD8cb8kuC//rWSVtJKWkkraSWtpJW0klbSSlpJK2klraSV/KuSbw9qe8HsfnCyfHVuZu95Kmb3iUdJ+KAvKf7gM119vDoUb8Bv9gLsu2PD97+n4O/tr1/+OzHXXiqTRjHyJukqkLcndKqnDw94yTYfty7JoyD5jtIYeZJ0FEr2Fp670EcnkgScYiRrXkJLI/EjyUjOhtzduSwpBrJEJ4YloSJJPHqRRDRnK3DSPHIpS8w5TjLnJJlVGIkPydjKWdVsw+pZDokueE5SMJKunULuQcIky5a/S7KQJbtiQZLUTmHlQcIkW13YYyqKkRQOycKWKNcjD5dwyebMYJA7JLscspLCknAJgLHxUEnEJbtkmAuXZC5LysqEEq4V1OkoeySm/bxenf22ujd41NolWTskCyoxxfNydXajrL55qCSDXe4LeaNHdl8wkiLofP2NxwNeUhBJiKKJiBbUwRKFBtIxbrVlha3wCzMGGYzROMxLPhIDkhjn/aOtFa93x0o6uHJ1Cb3Bce1NoZYMJabN5w7JEkv6uLSibQT+w0PcFZGhQyFYmZ18CnVY0q0hKbAks6JrL1F9j4S6Gar50jVK0csLSTR97pC85x9IprW7+CESU0B9psCTHroGS8ZgwJAkSyRRqAF7k/TJyIFkWhCjesOSC5CAJNk+GEjqvwobSVIS9sRwVO3vzoXo2TEXGhZOSQ4knUazq/qSDMXe1QgAbp3rBpFzkl4dyQpIurBnqibhilsyJo2WeU6us7U8WLIZ2JLgkyUhkFSNKoN5x5K4liSvJNEnSaZE0gG5ic1dfThFaSTRQ9vpJbBOqsE3hp20kUS/r9JPl0itKzGjwbrqPXlzia5jdXIJ7I+qCsrhFKVRjyeLD6DHJ54lrlEYVIQC789mkliSDD1LUhIEgTdjJEzXm0nw7Bq840eeJY5opSesBrHv+LUoyQTJ5BgJM113RJCpMNnGknSfJKYSGEH6l3BR/dS+4c2WwBidlaDmxUX1oR+JMNNa8MtHK0vSgUZekhIJnWl5kpDZb7fKGLM2iebuBZqp5bIk3rBTepN1TxJT8gO00jJhO3x5FZSYDYuJLKGdgaxI6P9BwxuZgyt4cI8kYxrOR4770kphJTm7VmhZSZCk+H68ShRcbjxJ4MrdNWxFY2mlMJaanSSJyAClwCN/Pmx8SaJ9zc46wUkWLglISl5NPV4irXCH7B1F0xVuvMXnWOH2IBF2HWLcLUE81mjXgWzRTODI7VvSdfafBZmBjRruBKHXp667jKvt5GiJsDuXkXBfmXbXaHeuPHGOJVzfHAXHS/gdU0W2Naam9BvtmJIdwIn0jnsKPEj4XWy6KlVFio12sXE5aElX2GY8VkJ2xx9hRSV2kByLW8WypEcilHNuI+l4Cf7a45ldLzZ5GVrfN4yC/ZKQhu6/ECTxJQnCKoK/s6cdqDfl5AscuIMjS/S/7Bc4z3SlR5DU+5VfRRWvp/sqKiy/iqr/IdZfF1HJgRmsN+0AAAAASUVORK5CYII="
				), a3C(18, "target", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEXUAADUISLWQkLMTQDZZmXAdwC0lADgiIioqQCWvgCE0QAA/wDnra1i6ADw0tL////afMd+AAAC6klEQVRIx42WTWgTURCApzFNY2lLBKEX0dy8iA0UxB8CKgUv0gaKBS2B3HOJnkUDQrENQi6KEITcgydR0l0CUYReJBZCi3YpaC+9FANS6GXZ5+6+eT+z+1adS/ImX97Mzs4f2ET2916vPV9/61At6Ifeq2UIZWXDSYK+IxLIlY4Z+ga6jL8xQbsFoFQrDtF7QqoThaxSDIKsE4HqYJAyhXZNDJxq6VCvZIQgq0NDSJCGgnqFJCiroB2lHTvjS06dWxJSHl0cjBjztm5JxXUBdaXqro8E4j2UD+gg1BamFpkQ75GgVjkkn/8SU+LVUHmaQx/wmB5pEHNzyh4oa08ZkU+oroZQhR8mKMO8PNdPBpBlvoixA67PBBC6lI4yzJVOgb3Nv1+OQawm3h9gJo19jUPHHLrhQ4UEazIKkzZYHJoRvxwuLAzE95voOWzyO5dQ/zkw/QQPfe65DfhwGO2T8JBCB39zqAM8l1Ij3QBMkSC0YFsP94nIB/4fj3vegLb+175IkCX94io0w8/zXJkX0IwezjLUNciTKZrWoSJCF4hLvlCookHHChppPhaB5+7c36BpvOm/oH+Y0x13VSFTx5vGEEzQOPGInyO5KPOUR3yVvrsDIFWBBVOFoR5hlwYczTfgPUmVj1y9SJKiBdhSMM3c0ItZzMwfWFMifeeYomZHpKb89MVWOCWr++hXpNCzfkmViFO6oEvTPtROaAWM/RRtDOx3QO0pyYveCjZ6HreH1saDhiGaeKxj9GUrBzl70iNj54FiCA3BeFVNtXsfEq2Odh/xrjPYxyuG9nuU00YC6DPqrKTcvD6nAshSNclbk3coR1BGDqCmpFJ3Hg++bN2OTNgQ6uojTh9kfP7g5KwnDcWiNl67CQy/SEzzhKvKZORvGqdwxqHLw47JWCOyYfSexaEHsYUmvj9cM6xG1jJlrjqmJcsiFu875nWt91I+4/yLxMXP3lu753PzK+tO8nYY3LbvS2SDtP8A+ntynBIvYeAAAAAASUVORK5CYII="
				), a3C(19, "members", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
				), a3C(20, "hourglass", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
				), a3C(21, "stalemate", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAeoAAABABAMAAAAnsyk1AAAAElBMVEUAAAA8PjxeYF2Rk5C6vLn////ACCfyAAAFMklEQVRo3uXby3qjIBQAYBEfwO+buM9c3Ntp2ZOZ8ADx8v6vMp2qybmBCK6SbNomEc4vcAS0RbG+1Iebvl5/vxev8lIf0+M1nl8DXboJvd5eET1N3QuoGfoVOvlp4q/+6fv3JL2evY83orp/uVH9NbLrp0braXrBLt541LenVpsH9Ao7+/DUc1E0kuF85ZkHdokHMriMPfNEpbo39fx3e1fbV1D3NKVb8KEn1TkpCShvbxET50gvnzdaDG4A520mfhHSvg+oWsHaN9QlCf0Ydc+vqFYqfUk8SeqGNpcDtW+oKzEJ5KqHghYO1ZrOKPLUa842oPYNdbPRGmnqka+JrDAi13eT1Cd6jj9LuV7ff/+g51tQG3FOk6sWei5Qt3Qo5I1raVG9oXbinCZb3dFTCtWszlz1ZwRve9Qli/0YtfW8QzP73CmS1OQD7A6r0aHn49QXxrPyWqlLVrM9BegOqxt5iZat7tleh5UjsslqYXk91HFqIy/RstWDzOOjuE9XC0eNXZQana/hOPUYUBtWZ5q6CmwpBNWlEHykug9v6NQUY8VkNu/3RKlH/1KTs4NqciLPx6k72qjWs/HTJavlw/C1Wwz35Nlxyldb6Q2pGay0OyJNX8fIneFhM9ylmhFeb45RX2gPtKSFRmGXa6e6+LW5WyiGuwTaO3KactTj+nGJdJbQBsebZq9a3hseNsJdcdaRgnPUw1q1FtVq+drNcMxudSmyz+Fw1xK7luyzZandEuM8gP8SyFqnbXkNu9Uy+xIOd00s54YMiZ3X65qrP9+bv/pOIGudXcWFJrwYl4auxB7C6jWx1DSCLLVZDpx//iRFrwXUmqezBHVRfPji8anvw1mTz7LUzRL4/Pc3ArkP55K3TJI6eOteUKv7O4qMnSz13HHsnLZGjSHqkbodG69p6qL45nxzAEEN+pjDfSNLPRfbl/CveyTlIwrDqkhV0/a+hdRgNBtcXJYacXuiBnW2jJCuxjOWPqRu+YajPUA9HzwuHZ2oG77ddztEDWe6Q0htHkFXvh31BPXySyuqQbeuWIz71OWP948rOLyNUsMUpvH389Rz8MsFjKgduA3Jph971C2bvegoNZSWGJCnhivAGquhVLE68tTKxagraVOlO0ANd6oLrEYTA0dH6R51w0OMUouLcps/D8d5BavFk3ZJmYdXPLWZGLXxP7eUpy5hcVhtgkvDNPWlEG7v+cJVgcVpnlrBZtTe+wJ8v26PmucuFTNL0YGntfLUwGaxWt7zua8W9qgVu3rrmBlpFXhaK1NtQGlIrcNPiO1aXzva2CZm9eF5XMseoG5BKyL1Sa7zkqIGKeIPKTuw0jSBmwPK+1GU+gQiRWpPnX2KGp7B8ffPa9SugpzMlkMi1LyLOv6kwEDUnjrHvdfr/6H4HqhE+xRU7UksczrLVGtQF1QrX5x1gtp3CtHahKq990TO+WolNIkNPO+6xrlP7btjMgbSUOOLwOar781gsfoUqnO3Wm93cKY25MxoeFCu2vD7VBa0zkhv2fQpal9urANq55vZDAeowV63Fm58DXR6OCSpq+AFQVKXrD84aRGYqG74yt2CUns206hT1GI+w/8KQNTV5Ln/9NVAuepKVGt2pg1OZ3vVenNziagb9q12ElolUa0fVQE1P9PNJK/IItVCerwEp5KGTTkbUGKuuuSZFmyKPs505QkqVs3Yf8ITaMeGAZxQ5aqX3y1WO5ZlNZ5E7lfjjfCxK4Lqkl/S4YT3IHWH1IrXWeIclKD+LGP9T+Tr8/9r6j/yRPVUqj3rEAAAAABJRU5ErkJggg=="
				)
		}
	}, this.get = function(c8) {
		return or[c8]
	}, this.rK = function(name) {
		for (var a2 = c4.length - 1; 0 <= a2; a2--)
			if (c4[a2] === name) return or[a2];
		return a39
	}, this.cD = function() {
		return 0 === a38
	}
}

function qR() {
	var a3O, a3P, a3Q, a3R, a3S, a3T, a3U, a3V, a3W, a3X, a3Y, a3L = [224, 224, 224],
		a3M = [
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
		a3N = [
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

	function a3v(bP, a3x) {
		yz[bP] = 0, yz[bP + 1] = 0, yz[bP + 2] = a3x, yz[bP + 3] = 0, a3y(bP)
	}

	function a3y(bP) {
		var gY;
		he.hf || (gY = bJ.gi(bP), bP = bJ.cT(bP), he.hf = gY >= hU.yy[0] && gY <= hU.yy[2] && bP >= hU.yy[1] && bP <= hU.yy[3])
	}
	this.c5 = function(mD) {
		if (a3O = new Uint8Array(bM), a3P = new Uint8Array(bM), a3Q = new Uint8Array(bM), a3R = new Uint8Array(bM), a3S = new Uint8Array(bM), a3T = new Uint8Array(bM), a3U = new Uint8Array(bM), a3V = new Uint8Array(bM), a3W = new Uint8Array(bM),
			a3X = new Uint8Array(bM), this.vj = new Uint8Array(bM), (a3Y = new Int32Array(4))[0] = -4 * an, a3Y[1] = 4, a3Y[2] = -a3Y[0], a3Y[3] = -a3Y[1], di)
			for (var kb, eo, a2 = bM - 1; 0 <= a2; a2--) eo = ep.nB[ep.eq[a2]], kb = b6((a3N[eo][3] + 1) * e0.random(), e0.value(100)), a3O[a2] = a3M[eo][0] + kb * a3N[eo][0], a3P[a2] = a3M[eo][1] + kb * a3N[eo][1], a3Q[a2] = a3M[eo][2] + kb *
				a3N[eo][2];
		else fB.fC && fB.fD.a3f ? function(aR) {
			var a2;
			for (a2 = lQ - 1; 0 <= a2; a2--) a3O[a2] = 4 * aR[a2][0], a3P[a2] = 4 * aR[a2][1], a3Q[a2] = 4 * aR[a2][2]
		}(fB.fD.a3f) : (function() {
			for (var a2 = bM - 1; dF <= a2; a2--) a3O[a2] = 4 * b6(64 * e0.random(), e0.value(100)), a3P[a2] = 4 * b6(64 * e0.random(), e0.value(100)), a3Q[a2] = 4 * b6(64 * e0.random(), e0.value(100))
		}(), function(mD) {
			for (var a2 = dF - 1; 0 <= a2; a2--) a3O[a2] = 4 * mD[a2].a2e[0], a3P[a2] = 4 * mD[a2].a2e[1], a3Q[a2] = 4 * mD[a2].a2e[2]
		}(mD));
		! function() {
			var a2, bR;
			for (a2 = bM - 1; 0 <= a2; a2--) bR = b6(a3O[a2] + a3P[a2] + a3Q[a2], 3), a3O[a2] += a3p(bR - a3O[a2], 2), a3P[a2] += a3p(bR - a3P[a2], 2), a3Q[a2] += a3p(bR - a3Q[a2], 2), a3O[a2] -= a3O[a2] % 4, a3P[a2] -= a3P[a2] % 4, a3Q[a2] -=
				a3Q[a2] % 4
		}(),
		function() {
			for (var a2 = bM - 1; 0 <= a2; a2--) a3O[a2] += b6(a2, 128), a3P[a2] += b6(a2 % 128, 32), a3Q[a2] += b6(a2 % 32, 8), a3R[a2] = a2 % 8
		}(), this.a3l(),
			function() {
				for (var a2 = bM - 1; 0 <= a2; a2--) a3S[a2] = a3O[a2] < 32 ? a3O[a2] + 32 : a3O[a2] - 32, a3T[a2] = a3P[a2] < 32 ? a3P[a2] + 32 : a3P[a2] - 32, a3U[a2] = a3Q[a2] < 32 ? a3Q[a2] + 32 : a3Q[a2] - 32
			}(),
			function() {
				for (var a2 = bM - 1; 0 <= a2; a2--) a3V[a2] = 235 < a3O[a2] ? a3O[a2] - 20 : a3O[a2] + 20, a3W[a2] = 235 < a3P[a2] ? a3P[a2] - 20 : a3P[a2] + 20, a3X[a2] = 235 < a3Q[a2] ? a3Q[a2] - 20 : a3Q[a2] + 20
			}()
	}, this.a3o = function(player) {
		var aR = de.aM;
		return aR[0] = a3O[player], aR[1] = a3P[player], aR[2] = a3Q[player], aR
	}, this.a3l = function() {
		for (var a2 = bM - 1; 0 <= a2; a2--) this.vj[a2] = a3O[a2] + a3P[a2] + a3Q[a2] < 280 ? 0 : 1
	}, this.gi = function(bP) {
		return b6(bP, 4) % an
	}, this.cT = function(bP) {
		return b6(bP, 4 * an)
	}, this.lX = function(gY, gZ) {
		return Math.floor(4 * (gZ * an + gY))
	}, this.ln = function(bP) {
		return this.l3(bP + a3Y[0]) || this.l3(bP + a3Y[1]) || this.l3(bP + a3Y[2]) || this.l3(bP + a3Y[3])
	}, this.ll = function(bP, player) {
		return this.a3q(bP + a3Y[0], player) || this.a3q(bP + a3Y[1], player) || this.a3q(bP + a3Y[2], player) || this.a3q(bP + a3Y[3], player)
	}, this.rd = function(player) {
		return player < dF && 2 !== dH[player]
	}, this.bS = function(bP) {
		return 208 <= yz[bP + 3]
	}, this.ls = function(player, bP) {
		return this.bS(bP) && this.a3r(player, bP)
	}, this.a3r = function(player, bP) {
		return player === this.bT(bP)
	}, this.a3s = function(bP) {
		return 208 <= yz[bP + 3] && yz[bP + 3] < 224
	}, this.ds = function(bP) {
		return 224 <= yz[bP + 3] && yz[bP + 3] < 248
	}, this.lm = function(bP) {
		for (var a2 = 3; 0 <= a2; a2--)
			if (this.rf(bP + a3Y[a2])) return !0;
		return !1
	}, this.a3t = function(bP) {
		return 192 <= yz[bP + 3] && yz[bP + 3] < 208
	}, this.a3u = function(bP, player) {
		return this.a3t(bP) && player === this.bT(bP)
	}, this.bK = function(bP) {
		return this.bS(bP) || this.bU(bP)
	}, this.rf = function(bP) {
		return 0 === yz[bP + 3] && 2 === yz[bP + 2]
	}, this.bU = function(bP) {
		return 0 === yz[bP + 3] && 1 === yz[bP + 2]
	}, this.l3 = function(bP) {
		return 0 === yz[bP + 3] && 3 === yz[bP + 2]
	}, this.re = function(bP) {
		return this.l3(bP)
	}, this.a3q = function(bP, player) {
		return this.bU(bP) || this.bS(bP) && player !== this.bT(bP)
	}, this.bT = function(bP) {
		return yz[bP] % 4 * 128 + yz[bP + 1] % 4 * 32 + yz[bP + 2] % 4 * 8 + yz[bP + 3] % 8
	}, this.lt = function(bP) {
		a3v(bP, 1)
	}, this.a3w = function(bP) {
		a3v(bP, 2)
	}, this.lk = function(bP, player) {
		yz[bP] = a3O[player], yz[bP + 1] = a3P[player], yz[bP + 2] = a3Q[player], yz[bP + 3] = 208 + a3R[player], a3y(bP)
	}, this.bL = function(bP, player) {
		yz[bP] = a3S[player], yz[bP + 1] = a3T[player], yz[bP + 2] = a3U[player], yz[bP + 3] = 224 + a3R[player], a3y(bP)
	}, this.du = function(bP, player) {
		yz[bP] = a3V[player], yz[bP + 1] = a3W[player], yz[bP + 2] = a3X[player], yz[bP + 3] = 248 + a3R[player], a3y(bP)
	}, this.a3z = function(bP, player) {
		yz[bP] = a3L[0] + a3O[player] % 4, yz[bP + 1] = a3L[1] + a3P[player] % 4, yz[bP + 2] = a3L[2] + a3Q[player] % 4, yz[bP + 3] = 192 + a3R[player], a3y(bP)
	}
}

function qS() {
	var c4, bF, bH, y, a40;

	function a45() {
		for (var a4A = 0, a2 = 1; a2 < 5; a2++) a4A += bF[a2] % 1024;
		return a4A
	}

	function a44() {
		for (var a2 = 1; a2 < bH - a40; a2++) bF[a2] = parseInt(bF[a2])
	}

	function a46() {
		bF[0] = "Player " + Math.floor(1e3 * Math.random()), bF[1] = p < q ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, bF[2] = 1, bF[3] = 1, bF[4] = p < q ? 0 : 1, bF[5] = 0, bF[6] = "000", bF[7] = "0", bF[8] = "0", bF[9] = "0", f
		.w()
	}

	function a43() {
		for (var a2 = bH - a40 - 1; 0 <= a2; a2--) bF[a2] = k.l(bF[a2]);
		bF[0] = k.mg(bF[0])
	}

	function a4D(name, value, a4E) {
		var a4F = new Date,
			a4E = (a4F.setTime(a4F.getTime() + Math.floor(31536e6 * a4E)), name + "=" + value + ";expires=" + a4F.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = a4E
	}
	this.c5 = function() {
		if (!(5 <= d || b)) {
			a40 = 4, c4 = [], bH = 10;
			for (var a2 = y = 0; a2 < bH; a2++) c4.push("u" + a2);
			bF = new Array(bH), ! function(a4B) {
				for (var dx, bP, a4C = a4B.split(";"), a2 = a4C.length - 1; 0 <= a2; a2--) {
					for (a4C[a2] = a4C[a2].trim(), dx = 2; 0 <= dx; dx--) a4C[a2] = a4C[a2].replace(" ", "");
					3 < a4C[a2].length && (dx = c4.indexOf(a4C[a2].substring(0, 2)), bP = a4C[a2].indexOf("="), 0 <= dx && 2 === bP ? bF[dx] = a4C[a2].substring(bP + 1, a4C[a2].length) : 0 < bP && a4D(a4C[a2].substring(0, bP), "0", 0))
				}
			}(document.cookie), bF[9] || (bF[9] = "0"), (! function() {
				for (var a2 = bH - 1; 0 <= a2; a2--)
					if (void 0 === bF[a2]) return;
				return 1
			}() || (y = 2, a43(), a44(), a45() !== bF[5])) && a46()
		}
	}, this.w = function() {
		if (2 === y) {
			bF[1] = 0 === bF[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : bF[1], bF[5] = a45(), ! function() {
				for (var a2 = 1; a2 < bH - a40; a2++) bF[a2] = bF[a2].toString()
			}(), ! function() {
				bF[0] = k.mf(bF[0]);
				for (var a2 = bH - a40 - 1; 0 <= a2; a2--) bF[a2] = k.x(bF[a2])
			}();
			for (var a2 = bH - 1; 0 <= a2; a2--) a4D(c4[a2], bF[a2], 1);
			a43(), a44()
		}
	}, this.y = function() {
		return y
	}, this.tb = function(dx) {
		y = dx, this.w()
	}, this.v = function(a2, value) {
		5 <= d || b || (bF[a2] = value)
	}, this.g = function(a2) {
		return 5 <= d || b ? 0 : bF[a2]
	}
}

function qq() {
	var c8 = 0,
		a4G = new Uint16Array(32);

	function remove(rN) {
		var a2;
		for (c8 -= 2, a2 = rN; a2 < c8; a2 += 2) a4G[a2] = a4G[a2 + 2], a4G[a2 + 1] = a4G[a2 + 3]
	}
	this.c5 = function() {
		c8 = 0
	}, this.eY = function() {
		var a2, dp, dK;
		if (0 !== c8)
			if (0 === dG[bA] || as.a4H(bA) === as.at(bA)) c8 = 0;
			else
				for (a2 = c8 - 2; 0 <= a2; a2 -= 2)(dp = a4G[a2]) < bM && 0 === dG[dp] ? remove(a2) : (dK = a4G[a2 + 1], (bM <= dp && rg(bA) || dp < bM && rl(bA, dp)) && (et.iW.ij(dK, dp), remove(a2)))
	}, this.rX = function(dp, dK) {
		! function(dp, dK) {
			var a2;
			for (a2 = 0; a2 < c8; a2 += 2)
				if (a4G[a2] === dp) return a4G[a2 + 1] = Math.min(a4G[a2 + 1] + dK, 1023), 1;
			return
		}(dp, dK) && 32 !== c8 && (a4G[c8] = dp, a4G[c8 + 1] = dK, c8 += 2)
	}
}

function a4J(player) {
	a4K(player), a4L(player), a4M(player), b8.b9(player), fe.gT(player), as.kJ(player), dY.a4N.a4O(player)
}

function a4K(player) {
	bJ.rd(player) && n2++;
	var a4P = as.a4Q(player);
	0 === a4P.length ? player === bA && a4R() : (a4S(player, a4P), a4T(player, a4P))
}

function a4R() {
	bE.bF[17] += bB[bA] + as.a4U(bA), fu.show(!1, !1), fT.yT()
}

function a4S(player, a4P) {
	for (var a2 = a4P.length - 1; 0 <= a2; a2--) as.a4V(a4P[a2], player)
}

function a4W(a4P) {
	for (var c8 = 0, a2 = a4P.length - 1; 1 <= a2; a2--) bi[a4P[a2]] > bi[a4P[c8]] && (c8 = a2);
	return c8
}

function a4T(player, a4P) {
	var a2, tB, a4X = a4P[a4W(a4P)];
	if (9 === fF && 1 === ep.eq[player] && e0.ei(8) && fL.a4Y(a4X), player === bA) 2 !== dH[player] && fR.ms(a4X, 1), a4R();
	else {
		for (tB = !1, a2 = a4P.length - 1; 0 <= a2; a2--)
			if (a4P[a2] === bA) return tB = !0, void fR.ms(player, 0);
		!tB && player < dF && 2 !== dH[player] && fR.sq(0, player, a4X)
	}
}

function a4M(player) {
	dG[player] = bB[player] = 0, bI[player] = null, ba[player] = null, bb[player] = null, be[player] = null, fc.a4Z(player)
}

function a4L(player) {
	for (var bP, gZ, gY = eK[player]; gY >= eL[player]; gY--)
		for (gZ = eN[player]; gZ >= eO[player]; gZ--) bP = 4 * (gZ * an + gY), bJ.ls(player, bP) && (bJ.lt(bP), bi[player]--)
}

function qw() {
	var input;

	function a4a(nU) {
		a4c(nU.target.files)
	}

	function a4c(files) {
		files && 0 < files.length && oJ.a4d(files[0])
	}

	function a4j(nU) {
		var eo = new Image;
		eo.onload = a4k, eo.src = nU.target.result
	}

	function a4k(nU) {
		var a4l, nU = nU.target,
			cG = nU.width,
			eH = nU.height;
		4096 < cG || 4096 < eH || cG < 10 || eH < 10 ? (a4l = "Image w & h must be between 10 and 4096.", e ? e.showToast(a4l) : alert(a4l)) : (lD = a4m, a24 = 0, an = cG, ao = eH, kp.width = an, kp.height = ao, kl.drawImage(nU, 0, 0), a4l = kl
			.getImageData(0, 0, an, ao), kq = a4l.data)
	}

	function a4n(nU) {
		nU.stopPropagation(), nU.preventDefault()
	}

	function a4o() {
		return 0 === aH.oP() || 2 === aH.oP()
	}
	this.c5 = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = a4a
	}, this.a2g = function() {
		input.click()
	}, this.a4b = function(nU) {
		a4a(nU)
	}, this.a4d = function(a4e) {
		var aR = a4e.name.split("."),
			a4f = aR[aR.length - 1].toLowerCase();
		"json" === a4f ? fB.a4h(a4e) : "gif" !== a4f && "jpg" !== a4f && "jpeg" !== a4f && "png" !== a4f || (fB.a4i = aR[0], (a4f = new FileReader).onload = a4j, a4f.readAsDataURL(a4e))
	}, this.nq = function(nU) {
		a4o() && (a4n(nU), nU.dataTransfer.dropEffect = "copy")
	}, this.nr = function(nU) {
		a4o() && (a4n(nU), a4c(nU.dataTransfer.files))
	}
}

function qu() {
	this.a4p = null, this.c5 = function() {
		this.a4p = 10 !== fF ? null : new Uint32Array(bM)
	}, this.eY = function() {
		10 === fF && this.a4q()
	}, this.a4q = function() {
		for (var bP, target, yf, a4p = this.a4p, mD = es, p1 = bB, a2 = er - 1; 0 <= a2; a2--) bP = mD[a2], dF <= bP || (target = Math.max(b6(p1[bP], 4), 2048), yf = Math.max(bC.yg(bP), 100), a4p[bP] += b6(yf * target, 1e4), a4p[bP] > target && (
			a4p[bP] = target))
	}, this.p7 = function(player, dq) {
		return dq > this.a4p[player] ? (dq = this.a4p[player], this.a4p[player] = 0) : this.a4p[player] -= dq, dq
	}
}

function qx() {
	function a4j(nU) {
		fB.fC = !0, fB.a4w(JSON.parse(nU.target.result)), fB.uE()
	}

	function a50(j, min, max, a59) {
		return "string" != typeof j || j.length < min ? a59 : j.length > max ? j.substring(0, max) : j
	}

	function a4x(aF, min, max) {
		return aF = "number" == typeof aF ? Math.floor(aF) : min, Math.min(Math.max(aF, min), max)
	}

	function a4z(aF, a5B) {
		return "boolean" == typeof aF ? aF : a5B
	}

	function a52(aF, bH, max, a5C) {
		var a2, aR, kb;
		if (!Array.isArray(aF) || aF.length < 1) return null;
		for (aR = new(8 === a5C ? Uint8Array : Uint16Array)(bH), kb = aF.length, a2 = 0; a2 < bH; a2++) aR[a2] = a4x(aF[a2 % kb], 0, max);
		return aR
	}
	this.fC = !1, this.fD = null, this.a4i = "", this.oE = function() {
		this.fC = !1, this.fD = null
	}, this.a2c = function() {
		this.fD.a3f && this.fD.a4r && (this.fD.a3f[0] = cQ.sI[2].mw.a0G()), pP(this.fD.a4s, 0, this.a4t(), this.fD.pS, !1, !1)
	}, this.a4t = function() {
		return [{
			name: this.fD.a4u ? pm.a2d() : this.fD.a4v[0],
			a2e: [0, 0, 0],
			a2f: 0
		}]
	}, this.a4h = function(a4e) {
		var a4g = new FileReader;
		a4g.onload = a4j, a4g.readAsText(a4e)
	}, this.a4w = function(sm) {
		this.fD = {}, this.fD.a2Y = a4x(sm.numberPlayers, 1, 512), this.fD.a4y = a4x(sm.modeID, 0, 1), this.fD.lD = a4x(sm.mapID, 0, a4m - 1), this.fD.a28 = a4x(sm.seedMap, 0, 16383), this.fD.a4s = a4x(sm.seedSpawn, 0, 16383), this.fD.pV = a4z(sm
				.selectableSpawn, !1), this.fD.a4u = a4z(sm.selectableName, !1), this.fD.a4r = a4z(sm.selectableColor, !1), this.a4i = this.fD.a4i = a50(sm.mapName, 1, 25, "Custom Map"), this.fD.sV = function(aF) {
				var a2, bH;
				if (!Array.isArray(aF) || aF.length < 1) return [];
				for (bH = aF.length, a2 = 0; a2 < bH; a2++) aF[a2] = a50(aF[a2], 0, 100, "");
				return aF
			}(sm.description), this.fD.lL = a52(sm.playerX, this.fD.a2Y, 4096, 16), this.fD.lW = a52(sm.playerY, this.fD.a2Y, 4096, 16), this.fD.a53 = a52(sm.playerTeam, this.fD.a2Y, 8, 8), this.fD.fE = a52(sm.playerStrength, this.fD.a2Y, 5, 8),
			this.fD.a3f = function(aF, bH) {
				var a2, aR, kb;
				if (!Array.isArray(aF) || aF.length < 1) return null;
				for (aR = new Array(bH), kb = aF.length, a2 = 0; a2 < bH; a2++) aR[a2] = a52(aF[a2 % kb], 3, 63, 8);
				return aR
			}(sm.playerColor, this.fD.a2Y), this.fD.a4v = function(aF, bH) {
				var a2, aR, kb;
				if (!Array.isArray(aF) || aF.length < 1) return null;
				for (aR = new Array(bH), kb = aF.length, a2 = 0; a2 < bH; a2++) aR[a2] = a50(aF[a2 % kb], 3, 26, "Bot");
				return aR
			}(sm.playerName, this.fD.a2Y), this.fD.a56 = "string" == typeof sm.mapBase64 ? sm.mapBase64 : "", this.fD.a4u = this.fD.a4u || !this.fD.a4v, this.fD.pS = 0 === this.fD.a4y ? 7 : 2 === this.fD.a4y ? 9 : 6, this.fD.lL = this.fD.lW ?
			this.fD.lL : null
	}, this.uE = function() {
		! function(j) {
			var or, a3G, a58 = "data:image/png;base64,";
			if (j.length <= a58.length) return;
			fB.fD.lD = 0, a2E(fB.fD.a28 = 0, 0), j.substring(0, a58.length) !== a58 && (j = a58 + j);
			return (or = new Image).onload = function() {
				an = or.width, ao = or.height, 4096 < an || 4096 < ao || an < 10 || ao < 10 ? (a2E(0, 0), alert("Image w & h must be between 10 and 4096.")) : (lD = a4m, a24 = 0, kp.width = an, kp.height = ao, kl.drawImage(or, 0, 0), a3G = kl
					.getImageData(0, 0, an, ao), kq = a3G.data)
			}, or.src = j, fB.fD.a56 = "", 1
		}(this.fD.a56) && a2E(this.fD.lD, this.fD.a28)
	}, this.a5D = function() {
		for (var max = 0, bH = this.fD.a2Y, a2 = 0; a2 < bH; a2++) this.fD.a53[a2] > max && (max = this.fD.a53[a2]);
		return Math.max(0, max - 1)
	}
}

function qT() {
	var a5E, a5F, dt, dp, dq, id;

	function a5G(player) {
		return player < dF ? a5E * player : a5E * dF + a5F * (player - dF)
	}
	this.c5 = function() {
		a5E = dF < 16 ? 12 : 8, a5F = 4;
		var bH = a5G(bM);
		dt = new Uint8Array(bM), dp = new Uint16Array(bH), dq = new Uint32Array(bH), id = new Uint16Array(bH)
	}, this.jx = function(vD, a5H) {
		var a5I = this.bw(vD, a5H);
		this.bv(vD, a5H, 0), a5I = hh.iY.jC(vD, a5I), vD === bA && (bE.bF[13] -= a5I)
	}, this.kJ = function(player) {
		dt[player] = 0
	}, this.a4V = function(player, a5H) {
		var ex, a5H = function(player, a5H) {
			var a2, kb = a5G(player);
			for (a2 = dt[player] - 1; 0 <= a2; a2--)
				if (0 === id[kb + a2] && dp[kb + a2] === a5H) return a2;
			return dt[player]
		}(player, a5H);
		a5H !== dt[player] && (ex = dq[a5G(player) + a5H], this.bG(player, a5H), this.dl(player, ex, bM))
	}, this.eA = function(player, a5H) {
		for (var kb = a5G(player), a2 = dt[player] - 1; 0 <= a2; a2--)
			if (0 === id[kb + a2] && dp[kb + a2] === a5H) return !0;
		return !1
	}, this.eW = function(player) {
		return player < dF ? dt[player] < a5E : dt[player] < a5F
	}, this.at = function(player) {
		return dt[player]
	}, this.az = function(player, a2) {
		return dp[a5G(player) + a2]
	}, this.au = function(player, a2) {
		return id[a5G(player) + a2]
	}, this.gl = function(player, a5K) {
		for (var kb = a5G(player), a2 = dt[player] - 1; 0 <= a2; a2--)
			if (id[kb + a2] === a5K) return a2;
		return -1
	}, this.b0 = function(player, a2) {
		return dq[a5G(player) + a2]
	}, this.bw = function(player, a5H) {
		for (var kb = a5G(player), a2 = dt[player] - 1; 0 <= a2; a2--)
			if (0 === id[kb + a2] && dp[kb + a2] === a5H) return dq[kb + a2];
		return 0
	}, this.a4U = function(player) {
		for (var kb = a5G(player), aF = 0, a2 = dt[player] - 1; 0 <= a2; a2--) aF += dq[kb + a2];
		return aF
	}, this.a5L = function(player) {
		for (var kb = a5G(player), aF = 0, a2 = dt[player] - 1; 0 <= a2; a2--) 0 === id[kb + a2] && (aF += dq[kb + a2]);
		return aF
	}, this.a4H = function(player) {
		for (var kb = a5G(player), tA = 0, a2 = dt[player] - 1; 0 <= a2; a2--) 0 < id[kb + a2] && tA++;
		return tA
	}, this.bv = function(player, a5H, ex) {
		for (var kb = a5G(player), a2 = dt[player] - 1; 0 <= a2; a2--) 0 === id[kb + a2] && dp[kb + a2] === a5H && (dq[kb + a2] = ex)
	}, this.bh = function(player, a2, ex) {
		dq[a5G(player) + a2] = ex
	}, this.dl = function(player, ex, a5H) {
		var a2, kb = a5G(player);
		for (a5H === bA && bE.bF[player < dF ? 6 : 5]++, a2 = dt[player] - 1; 0 <= a2; a2--)
			if (0 === id[kb + a2] && dp[kb + a2] === a5H) return dq[kb + a2] += ex, void(dq[kb + a2] = dq[kb + a2] > p3 ? p3 : dq[kb + a2]);
		dp[kb + dt[player]] = a5H, dq[kb + dt[player]] = ex, id[kb + dt[player]] = 0, dt[player]++, player < dF && (a5H === bA ? fR.ms(player, 5) : player === bA && fS.ss(a5H))
	}, this.a5M = function(player, ex, a5K) {
		var kb = a5G(player);
		dG[player] = 2, dp[kb + dt[player]] = 0, dq[kb + dt[player]] = ex, id[kb + dt[player]] = a5K, dt[player]++
	}, this.bG = function(player, c8) {
		var dx, kb;
		if (0 !== dt[player])
			for (kb = a5G(player), dt[player]--, dx = c8; dx < dt[player]; dx++) dp[kb + dx] = dp[kb + dx + 1], dq[kb + dx] = dq[kb + dx + 1], id[kb + dx] = id[kb + dx + 1]
	}, this.a4Q = function(player) {
		for (var dx, kb, a4P = [], a2 = er - 1; 0 <= a2; a2--)
			for (kb = a5G(es[a2]), dx = dt[es[a2]] - 1; 0 <= dx; dx--)
				if (0 === id[kb + dx] && dp[kb + dx] === player) {
					a4P.push(es[a2]);
					break
				} return a4P
	}
}

function qU() {
	var a5N, a5O, a5P, a5Q, a5R, a5S;
	this.c5 = function() {
		a5P = a5N = 10, a5Q = a5O = 10
	}, this.a5T = function() {
		a5S = 512, a5R = new Uint16Array(a5S);
		for (var a2 = 0; a2 < a5S; a2++) a5R[a2] = 100 + c0(b6(25600 * a2, a5S - 4), 9)
	}, this.xO = function() {
		return a5Q
	}, this.eY = function() {
		if (--a5P <= 0 && (a5P = a5N, function() {
				var a2, a5Y, r = bB[bA];
				for (fH && !di && 0 !== dG[0] && 0 === fI.fJ[0].bR && (bB[0] += b6(bi[0], 6)), a2 = er - 1; 0 <= a2; a2--) a5Y = b6(bC.yg(es[a2]) * bB[es[a2]], 1e4), bB[es[a2]] += a5Y < 1 ? 1 : a5Y, bC.bD(es[a2]);
				bE.bF[9] += bB[bA] - r
			}(), --a5Q <= 0)) {
			a5Q = a5O;
			for (var r = bB[bA], a2 = er - 1; 0 <= a2; a2--) bB[es[a2]] += bi[es[a2]], bC.bD(es[a2]);
			bE.bF[8] += bB[bA] - r
		}
	}, this.yg = function(player) {
		var mj = a5R[b6((a5S - 1) * bi[player], pK)],
			a5X = (aA.en() < 1920 && (mj = mj < (a5X = b6(100 * (13440 - 6 * aA.en()), 1920)) ? a5X : mj), this.ec(player));
		return bB[player] > a5X && (mj -= b6(2 * mj * (bB[player] - a5X), a5X)), mj < 0 ? 0 : 700 < mj ? 700 : mj
	}, this.ec = function(player) {
		player = 100 * bi[player];
		return pL < player ? pL : player
	}, this.bD = function(player) {
		var aF = bi[player] * p2;
		bB[player] = Math.min(Math.min(bB[player], p3), aF)
	}, this.il = function(player, im) {
		hh.iY.jC(im, de.aL[0]), bE.jD(player, im), fS.a5a(player, de.aL[0] + de.aL[1]), fS.jE(im, de.aL[0]), hh.iY.jk(player)
	}
}

function qV() {
	var a5b, a5c, a5d, a5e, a5f, a5g, a5h, a5i, a5j, a5k, a5l, a5m, a5n, a5o, a5p, a5q, a5r, a5s, a5u, a5v, a5w, a5x, a5y, a64, a65, a5t = null,
		a60 = 0,
		a61 = new Float32Array(4),
		a62 = 0,
		a63 = !0;

	function a67() {
		a5t.width = gg, a5t.height = cP, (a5u = a5t.getContext("2d", {
			alpha: !0
		})).textAlign = cX, a5u.textBaseline = cW, a5u.imageSmoothingEnabled = !0
	}

	function a68() {
		var a2, a6C;
		for (cV.font = c9 + Math.floor(100 * a5l) + cA, a6C = 80 / Math.floor(cV.measureText(fl.gp(p3)).width), cV.font = c9 + 100 + cA, a2 = bM - 1; 0 <= a2; a2--) a5i[a2] = 100 / Math.floor(cV.measureText(gq[a2]).width), a5h[a2] = Math.min(a6C,
			a5i[a2])
	}

	function a6D(a2) {
		return !gm.gn.go || bB[a2] < 1e6 ? 1 : bB[a2] < 1e7 ? a61[0] : a61[Math.min(Math.floor(Math.log10(bB[a2])) - 6, 3)]
	}

	function a6B(ox) {
		a5s = !1, a5r = 1, a5p = a5q = 0, a63 ? (ox.textAlign = cX, ox.textBaseline = cW) : ox.clearRect(0, 0, gg, cP);
		var ga, gb, a2, cE, gc, gd = dL / dM,
			ge = dN / dM,
			gf = (gg + dL) / dM,
			gh = (cP + dN) / dM,
			a6H = 0 !== dG[bA] && bJ.rd(bA);
		ox.imageSmoothingEnabled = !0;
		for (var dx = er - 1; 0 <= dx; dx--) a2 = es[dx], (cE = a5o * dM * a6D(a2) * a5h[a2] * a5f[a2]) < a5n || a5j <= cE || a5d[a2] + a5f[a2] > gd && a5d[a2] < gf && a5e[a2] + a5g[a2] > ge && a5e[a2] < gh && (ga = gg * (a5d[a2] + a5f[a2] / 2 -
			gd) / (gf - gd), gb = cP * (a5e[a2] + a5g[a2] / 2 - ge) / (gh - ge) - .1 * cE, ox.font = uM[dH[a2]] + cE + cA, ox.fillStyle = function(cE, a2) {
				if (a5k <= cE && cE < a5j) return ep.a6U[bJ.vj[a2]] + a6Q(cE).toFixed(3) + ")";
				return ep.a6V[bJ.vj[a2]]
			}(cE, a2), gm.gn.go ? ox.fillText(fl.gp(bB[a2]), ga, gb) : a6J(a2, cE, ga, gb, ox), a5s = !0, 0 < a5w[a2] ? function(ga, gb, cE, a2, ox) {
				0 === xP[a2] ? a3.uG(a5v[a2]) ? (function(ga, gb, cE, player, j1, ox) {
					for (var s2 = .9 * cE / a3.cG, lP = gb - .5 * s2 * a3.cG - .05 * cE, tZ = (ox.globalAlpha = a6Q(cE), a6D(player) * (gm.gn.go ? a62 : a5i[player])), lO = ga - .5 * cE / tZ - .4 * cE - s2 * a3.cG, e8 = 0; e8 < 2; e8++)
						ox.setTransform(s2, 0, 0, s2, lO, lP), ox.drawImage(a3.rJ[j1], 0, 0), lO = ga + .5 * cE / tZ + .4 * cE;
					ox.globalAlpha = 1, ox.setTransform(1, 0, 0, 1, 0, 0)
				}(ga, gb, cE, a2, a5v[a2], ox), a6L(ga, gb, cE, 0, 0, ox)) : a3.uF(a5v[a2]) ? (a6T(ga, gb, cE, a5v[a2], 0, ox), a6L(ga, gb, cE, 0, 1, ox)) : (a6T(ga, gb, cE, a5v[a2], 1, ox), a6L(ga, gb, cE, 1, 0, ox)) : a6T(ga, gb, cE, a5v[
					a2], 0, ox)
			}(ga, gb, cE, a2, ox) : 0 === xP[a2] && a6L(ga, gb, cE, 0, 0, ox), a6H && (0 < a5w[a2 + bM] || 0 < a5w[a2 + 2 * bM] || 0 < a5w[a2 + 3 * bM] || 0 < a5w[a2 + 4 * bM]) && function(ga, gb, cE, a2, ox) {
				var eo, tA = -1;
				for (eo = 4; 1 <= eo; eo--) 0 < a5w[a2 + eo * bM] && tA++;
				for (eo = 1; eo < 5; eo++) 0 < a5w[a2 + eo * bM] && (! function(ga, gb, cE, eo, a2, a6O, r, ox) {
					var s2 = .8 * cE / a3.cG,
						ga = ga - .5 * s2 * a3.cG - .534 * a6O * cE,
						a6O = gb + 1.4 * s2 * a3.cG;
					ox.setTransform(s2, 0, 0, s2, ga, a6O), ox.globalAlpha = a6Q(cE), gb = 1 === eo ? a3.rJ[a5v[a2 + bM]] : 2 === eo ? m1.rF()[4].or[r < 255 ? 1 : 0] : (3 === eo ? m1.rF()[5] : m1.rF()[6]).or[0];
					ox.drawImage(gb, 0, 0), ox.globalAlpha = 1, ox.setTransform(1, 0, 0, 1, 0, 0)
				}(ga, gb, cE, eo, a2, tA, a5w[a2 + eo * bM], ox), tA -= 2)
			}(ga, gb, cE, a2, ox), (gc = a5l * cE) < a5n || (ox.font = c9 + gc + cA, gm.gn.go ? a6J(a2, gc, ga, gb + .78 * cE, ox) : ox.fillText(fl.gp(bB[a2]), ga, gb + .78 * cE)));
		ox.imageSmoothingEnabled = !1
	}

	function a6J(a2, cE, gY, gZ, ox) {
		ox.fillText(gq[a2], gY, gZ), a2 < dF && 2 !== dH[a2] || (a2 = cE / a5i[a2], ox.fillRect(gY - .5 * a2, gZ + .35 * cE, a2, Math.max(1, .1 * cE)))
	}

	function a6L(ga, gb, cE, a6O, a6P, ox) {
		var s2 = .95 * cE / a5y,
			ga = ga - .5 * s2 * a5x + .8 * a6O * cE,
			a6O = gb - 1.76 * s2 * a5y - .82 * a6P * cE;
		ox.setTransform(s2, 0, 0, s2, ga, a6O), ox.globalAlpha = a6Q(cE), ox.drawImage(cC.get(4), 0, 0), ox.globalAlpha = 1, ox.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6T(ga, gb, cE, j1, a6O, ox) {
		var s2 = 1.2 * cE / a3.cG,
			ga = ga - .5 * s2 * a3.cG - .8 * a6O * cE,
			a6O = gb - 1.5 * s2 * a3.cG;
		ox.setTransform(s2, 0, 0, s2, ga, a6O), ox.globalAlpha = a6Q(cE), ox.drawImage(a3.rJ[j1], 0, 0), ox.globalAlpha = 1, ox.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6Q(cE) {
		return a5k <= cE && cE < a5j ? 1 - (cE - a5k) / (a5j - a5k) : 1
	}

	function a6e(tZ, cG) {
		return 1 + Math.floor(a5m * tZ * cG)
	}

	function a6b(a2) {
		for (var left = a5d[a2], dx = a5d[a2] - eL[a2] - 1; 0 <= dx; dx--)
			if (!a6g(a2, --left, a5e[a2], a5g[a2])) {
				left++;
				break
			} var a6h = a5d[a2];
		for (dx = eK[a2] - a5d[a2] - a5f[a2]; 0 <= dx; dx--)
			if (!a6g(a2, ++a6h + a5f[a2] - 1, a5e[a2], a5g[a2])) {
				a6h--;
				break
			} var gY = Math.floor((left + a6h) / 2),
			top = a5e[a2];
		for (dx = a5e[a2] - eO[a2] - 1; 0 <= dx; dx--)
			if (!a6i(a2, gY, --top, a5f[a2])) {
				top++;
				break
			} var bottom = a5e[a2];
		for (dx = eN[a2] - a5e[a2] - a5g[a2]; 0 <= dx; dx--)
			if (!a6i(a2, gY, ++bottom + a5g[a2] - 1, a5f[a2])) {
				bottom--;
				break
			} var gZ = Math.floor((top + bottom) / 2);
		a6Y(a2, gY, gZ, a5f[a2], a5g[a2]) && (a5d[a2] = gY, a5e[a2] = gZ)
	}

	function a6Y(player, gY, gZ, cG, eH) {
		bR = Math.floor(.2 * cG);
		for (var bR, eo = gY + cG - 1; gY <= eo; eo--)
			if (!a6g(player, eo, gZ, eH)) return;
		for (eo = gZ + eH - 1 - (bR = (bR = Math.floor(.25 * eH)) < 1 ? 1 : bR); gZ + bR <= eo; eo--)
			if (!a6i(player, gY, eo, cG)) return;
		return 1
	}

	function a6g(player, gY, gZ, eH) {
		return bJ.ls(player, 4 * (gZ * an + gY)) && bJ.ls(player, 4 * ((gZ + eH - 1) * an + gY))
	}

	function a6i(player, gY, gZ, cG) {
		return bJ.ls(player, 4 * (gZ * an + gY)) && bJ.ls(player, 4 * (gZ * an + gY + cG - 1))
	}
	this.c5 = function() {
		if (a5s = !1, a5o = .88, a5l = .5, a5m = 1.8, a5j = Math.floor(.5 * uS), a5k = Math.floor(.2 * a5j), a5n = gm.gn.a66 < 4 ? 1 + gm.gn.a66 : 2 * (gm.gn.a66 - 1), a5c = a5b = 0, a5d = new Uint16Array(bM), a5e = new Uint16Array(bM), a5f =
			new Uint16Array(bM), a5g = new Uint16Array(bM), a5h = new Float32Array(bM), a5i = new Float32Array(bM), a5v = new Uint8Array(2 * bM), a5w = new Uint8Array(5 * bM), a64 = new Uint8Array(bM), a65 = new Uint8Array(bM), a63 || (a5t =
				a5t || document.createElement("canvas"), a67()), a5q = a5p = 0, a5r = 1, gm.gn.go) {
			var a2, a6C;
			for (a68(), cV.font = c9 + Math.floor(100) + cA, a6C = 100 / Math.floor(cV.measureText("900 000").width), a2 = bM - 1; 0 <= a2; a2--) a5h[a2] = Math.min(a6C, 2 * a5i[a2]);
			a62 = a6C, a61[0] = 100 / (a6C * Math.floor(cV.measureText("5 000 000").width)), a61[1] = 100 / (a6C * Math.floor(cV.measureText("50 000 000").width)), a61[2] = 100 / (a6C * Math.floor(cV.measureText("500 000 000").width)), a61[3] =
				100 / (a6C * Math.floor(cV.measureText("1 000 000 000").width))
		} else a68();
		! function() {
			var a2;
			for (a2 = bM - 1; 0 <= a2; a2--) bi[a2] < 12 ? (a5d[a2] = eL[a2] + 1, a5e[a2] = eO[a2] + 1, a5f[a2] = 1, a5g[a2] = 1) : (a5d[a2] = eL[a2], a5e[a2] = eO[a2] + 1, a5f[a2] = 4, a5g[a2] = 2);
			if (hC)
				for (a2 = 0; a2 < dF; a2++) a5f[a2] = 0;
			a5x = cC.get(4).width, a5y = cC.get(4).height
		}()
	}, this.a5a = function(bP, tD) {
		tD > 18 * bi[bP] ? (a65[bP] = 6, bJ.vj[bP] = 2 + bJ.vj[bP] % 2) : (a64[bP] = 4, (bJ.vj[bP] < 2 || 3 < bJ.vj[bP]) && (bJ.vj[bP] = 6 + bJ.vj[bP] % 2))
	}, this.jE = function(bP, tD) {
		tD > 6 * bi[bP] ? (a65[bP] = 6, bJ.vj[bP] = 4 + bJ.vj[bP] % 2) : (a64[bP] = 4, (bJ.vj[bP] < 4 || 5 < bJ.vj[bP]) && (bJ.vj[bP] = 8 + bJ.vj[bP] % 2))
	}, this.resize = function() {
		a63 || (a67(), a6B(a5u))
	}, this.pG = function() {
		for (var a2 = 0; a2 < dF; a2++) eK[a2] - eL[a2] != 3 || eN[a2] - eO[a2] != 3 ? (a5d[a2] = eL[a2] + (eK[a2] !== eL[a2] ? 1 : 0), a5e[a2] = eO[a2], a5f[a2] = 1, a5g[a2] = 1) : (a5d[a2] = eL[a2], a5e[a2] = eO[a2] + 1, a5f[a2] = 4, a5g[a2] =
			2)
	}, this.jy = function(player, c8, a6E) {
		player += c8 * bM;
		if (0 === c8) return a5v[player] === a6E && 0 < a5w[player] ? void(a5w[player] = 0) : (a5v[player] = a6E, void(a5w[player] = a3.uG(a6E) ? 255 : 64));
		1 === c8 ? (a5w[player] = 64, a5v[player] = a6E) : a5w[player] = a6E
	}, this.cU = function() {
		a63 ? a6B(cV) : a5s && (1 !== a5r ? (cV.imageSmoothingEnabled = !0, cV.setTransform(a5r, 0, 0, a5r, 0, 0), cV.drawImage(a5t, -a5p / a5r, -a5q / a5r), cV.setTransform(1, 0, 0, 1, 0, 0)) : (cV.imageSmoothingEnabled = !1, cV.drawImage(a5t, -
			a5p, -a5q)))
	}, this.wa = function(d7, dA) {
		a5p += d7, a5q += dA
	}, this.ni = function(d7, dA) {
		fS.wa(d7, dA)
	}, this.zoom = function(c3, cM, cN) {
		a5r *= c3, a5p = (a5p + cM) * c3 - cM, a5q = (a5q + cN) * c3 - cN
	}, this.g0 = function(tP) {
		return !a63 && (tP ? ++a60 % gm.xw[gm.gn.a6F] == 0 : aA.en() % gm.xw[gm.gn.a6F] == 0) && (a60 = 0, a6B(a5u), !0)
	}, this.gj = function(a2) {
		return a6D(a2) * a5h[a2]
	}, this.a6G = function(player) {
		return a5h[player]
	}, this.eY = function() {
		4 <= ++a5c && ! function() {
			var a2, dx, e8;
			for (a5c = 0, e8 = 4; 1 <= e8; e8--)
				for (dx = er - 1; 0 <= dx; dx--) a2 = es[dx] + e8 * bM, 0 < a5w[a2] && a5w[a2] < 255 && a5w[a2]--;
			if (2 !== g1)
				for (dx = er - 1; 0 <= dx; dx--) a2 = es[dx], 0 < a5w[a2] && a5w[a2] < 255 && a5w[a2]--
		}();
		for (var bH = Math.floor(.1 * er), a2 = a5b + (bH = er < (bH = bH < 8 ? 8 : bH) ? er : bH) - 1; a5b <= a2; a2--) ! function(a2) {
			var tZ = a6D(a2) * a5h[a2];
			0 < a5f[a2] && a6Y(a2, a5d[a2], a5e[a2], a5f[a2], a5g[a2]) ? ! function(a2) {
				for (var gY, gZ, cG, eH, d0 = !1, e8 = 0; e8 < 8; e8++) {
					if (cG = a5f[a2] + 2, eH = a5g[a2] + 2, cG > eK[a2] - eL[a2] + 1 || eH > eN[a2] - eO[a2] + 1) return d0;
					if (gY = a5d[a2] - 1, gZ = a5e[a2] - 1, !a6Y(a2, gY, gZ, cG, eH)) return d0;
					a5d[a2] = gY, a5e[a2] = gZ, a5f[a2] = cG, a5g[a2] = eH, d0 = !0
				}
				return d0
			}(a2) && function(a2, tZ) {
				for (var gY, gZ, cG, eH, d0 = !1, zi = a5f[a2], hQ = 1 + Math.floor(.02 * zi), e8 = 1; e8 < 5; e8++) {
					if ((cG = zi + e8 * hQ) > eK[a2] - eL[a2] + 1) return d0;
					if ((eH = a6e(tZ, cG)) > eN[a2] - eO[a2] + 1) return d0;
					gY = eL[a2] + Math.floor(Math.random() * (eK[a2] - eL[a2] + 2 - cG)), gZ = eO[a2] + Math.floor(Math.random() * (eN[a2] - eO[a2] + 2 - eH)), a6Y(a2, gY, gZ, cG, eH) && (a5d[a2] = gY, a5e[a2] = gZ, a5f[a2] = cG, a5g[
						a2] = eH, d0 = !0)
				}
				return d0
			}(a2, tZ) && a6b(a2) : ! function(a2, tZ) {
				var eH, gY = a5d[a2] + 1,
					gZ = a5e[a2] + 1,
					cG = a5f[a2] - 2;
				for (;;) {
					if (cG < 1) {
						a5f[a2] = 0;
						break
					}
					if (eH = a6e(tZ, cG), a6Y(a2, gY, gZ, cG, eH)) return a5d[a2] = gY, a5e[a2] = gZ, a5f[a2] = cG, a5g[a2] = eH, 1;
					gY++, gZ++, cG -= 2
				}
				return
			}(a2, tZ) ? function(a2, tZ) {
				var gY, gZ, cG, eH, e8, hW, dz = eK[a2] - eL[a2] + 1,
					a6f = Math.floor(.02 * dz);
				for (hW = -6 * (a6f = a6f < 1 ? 1 : a6f), e8 = dz; hW <= e8; e8 -= a6f)
					if (eH = a6e(tZ, cG = 0 < e8 ? e8 : 1), gY = eL[a2] + Math.floor(Math.random() * (eK[a2] - eL[a2] + 2 - cG)), gZ = eO[a2] + Math.floor(Math.random() * (eN[a2] - eO[a2] + 2 - eH)), a6Y(a2, gY, gZ, cG, eH)) return a5d[
						a2] = gY, a5e[a2] = gZ, a5f[a2] = cG, a5g[a2] = eH
			}(a2, tZ) : a6b(a2)
		}(es[a2 % er]);
		a5b = (a5b + bH) % er
	}, this.fi = function() {
		var a2, bP, ck, cl;
		if (aA.en() % 4 == 1)
			for (a2 = er - 1; 0 <= a2; a2--) bP = es[a2], bJ.vj[bP] < 2 || ((ck = Math.max(a64[bP] - 1, 0)) === (cl = Math.max(a65[bP] - 1, 0)) ? 0 === ck && (bJ.vj[bP] %= 2) : 0 === cl && bJ.vj[bP] < 6 && (bJ.vj[bP] += 4), a64[bP] = ck, a65[
				bP] = cl)
	}, this.ss = function(player) {
		var a2 = player + 2 * bM,
			r = a5w[a2];
		return 0 < r && (fR.mr(50, player), a5w[a2] = 0, 255 === r)
	}, this.rj = function(player) {
		return 255 === a5w[player + 2 * bM]
	}
}

function qW() {
	var c4, a6j;
	this.c5 = function() {
		c4 = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var a2, dx, a6k = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			a6l = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (a6j =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), a2 = c4.length - 1; 0 <= a2; a2--)
			for (dx = a6k.length - 1; 0 <= dx; dx--) c4[a2] = c4[a2].replace(a6k[dx], a6l[dx]);
		if (settings.realisticNames) c4 = realisticNames;
	}, this.kV = function() {
		var a2;
		if (fB.fC && fB.fD.a4v)
			for (a2 = dF; a2 < bM; a2++) gq[a2] = fB.fD.a4v[a2 % lQ];
		else(9 === fF ? function() {
			var a2, mj = e0.random(),
				bH = c4.length,
				kb = dF + fL.a6r;
			for (a2 = kb - 1; dF <= a2; a2--) gq[a2] = c4[(a2 + mj) % bH];
			for (bH = a6j.length, a2 = kb; a2 < bM; a2++) gq[a2] = a6j[a2 % bH]
		} : fH ? function() {
			var a2, mj = e0.random();
			for (a2 = dF; a2 < bM; a2++) gq[a2] = c4[(a2 + mj) % bM]
		} : function() {
			var a2, bH = c4.length,
				mj = e0.random();
			for (a2 = dF; a2 < bM; a2++) gq[a2] = c4[(a2 + mj) % bH]
		})()
	}, this.pd = function() {
		var a2, bH, kb, mj;
		if (!fH) {
			for (tU = new Array(dF), bH = dF, a2 = 0; a2 < bH; a2++) tU[a2] = gq[a2];
			if (gm.gn.tT) {
				for (kb = c4.length, mj = e0.a6q(), a2 = 0; a2 < bH; a2++) gq[a2] = c4[(a2 + mj) % kb];
				gq[bA] = tU[bA]
			}
		}
	}
}

function qv() {
	this.a6s = [], this.a6t = [], this.c5 = function() {
		this.a6s = [], this.a6t = []
	}, this.eY = function() {
		0 <= this.a6s.length && this.a6u(this.a6s), 0 <= this.a6t.length && this.a6u(this.a6t)
	}, this.a6u = function(aR) {
		for (var e8 = -1, a2 = aR.length - 1; 0 <= a2; a2--)
			if (aR[a2].aB--, aR[a2].aB <= 0) {
				e8 = a2;
				break
			} for (a2 = e8; 0 <= a2; a2--) aR.shift()
	}, this.rT = function(id, mD, a6v) {
		return this.a6w(this.a6s, id, mD, a6v)
	}, this.a6x = function(id, mD, a6v) {
		return this.a6w(this.a6t, id, mD, a6v)
	}, this.a6w = function(aR, id, mD, a6v) {
		return ! function(aR, id, mD) {
			var a2, l6;
			for (a2 = mD.length - 1; 0 <= a2; a2--)
				for (l6 = aR.length - 1; 0 <= l6; l6--)
					if (aR[l6].player === mD[a2] && id === aR[l6].id) return 1;
			return
		}(aR, id, mD) && (a6v && function(aR, id, mD) {
			var a2;
			for (a2 = mD.length - 1; 0 <= a2; a2--) aR.push({
				player: mD[a2],
				id: id,
				aB: 384
			})
		}(aR, id, mD), !0)
	}
}

function pY(mD) {
	var a2;
	for (gq = new Array(bM), tU = gq, dG = new Uint8Array(bM), eL = new Uint16Array(bM), eO = new Uint16Array(bM), eK = new Uint16Array(bM), eN = new Uint16Array(bM), bi = new Uint32Array(bM), lg = new Uint32Array(bM), bB = new Uint32Array(bM), bI =
		new Array(bM), ba = new Array(bM), bb = new Array(bM), be = new Array(bM), dH = new Uint8Array(bM), a2 = mD.length - 1; 0 <= a2; a2--) gq[a2] = mD[a2].name, dH[a2] = mD[a2].a2f
}

function qt() {
	this.tf = 0, this.mD = null, this.c5 = function() {
		this.tf = 0, this.mD = []
	}, this.a70 = function(player) {
		this.mD.push(player), n2++, dH[player] = 2, player === bA && (fu.show(!1, !1), fT.yT()), fS.ss(player)
	}, this.a4Z = function(player) {
		var a2, mD;
		if (2 !== dH[player])
			for (a2 = (mD = this.mD).length - 1; 0 <= a2; a2--)
				if (mD[a2] === player) return void mD.splice(a2, 1)
	}, this.eY = function() {
		fH || (30 === this.tf && 2140 <= aA.en() && this.a71(), this.tf = (this.tf + 1) % 60)
	}, this.a71 = function() {
		for (var mD = this.mD, a2 = mD.length - 1; 0 <= a2; a2--) ! function(player, dK) {
			!as.eW(player) || (dK = Math.max(Math.min(100, bB[player]), b6(dK * bB[player], 100))) < 100 || (0 === ba[player].length ? !dY.eX.eY(player) && di && eb(player, dK, 0, 0) : (di ? em : ew)(player, dK))
		}(mD[a2], 12)
	}
}

function qp() {
	var a73, a75;
	this.a1Q = 5, this.a1R = this.a1Q - 1, this.a0Z = this.a1Q + this.a1R, this.a0Y = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.a74 = null;

	function a7D(a2) {
		return a75[a2].a78 && a73[a2].a7D()
	}

	function a7F(a0c) {
		a75[a0c].aB = aA.aB, a75[a0c].a79 = !1
	}
	this.o0 = 0, this.a1C = 0, this.c5 = function() {
		this.a74 = new Array(this.a1Q);
		this.a74[0] = "territorial.io";
		var a2, a77 = e0.a6q(0);
		for (e0.pX(0), a2 = 1; a2 < this.a1Q; a2++) this.a74[a2] = k.mi() + ".territorial.io";
		for (e0.pX(a77), a73 = new Array(this.a0Z), a75 = new Array(this.a0Z), a2 = this.a0Z - 1; 0 <= a2; a2--) a75[a2] = {
			a78: !1,
			aB: 0,
			a79: !1
		}
	}, this.t7 = function() {
		return this.a1C < this.a1Q ? this.a1C : this.a1C - this.a1R
	}, this.eY = function() {
		for (var a2 = this.a0Z - 1; 0 <= a2; a2--) this.a0U(a2) && aA.aB > a75[a2].aB + 15e3 && ih.a7A(a2, a75[a2].a79)
	}, this.ws = function(a0c, a7B) {
		if (a75[a0c].a78) {
			if (a73[a0c].a7D()) return a73[a0c].a7E(a7B), a73[a0c].a0U();
			a73[a0c].kB()
		}
		return this.a7C(a0c, a7B), !1
	}, this.a7C = function(a0c, a7B) {
		a75[a0c].a78 = !0, a7F(a0c), a73[a0c] = new a7G, a73[a0c].c5(a0c, a7B)
	}, this.a7E = function(a0c, a7B) {
		a7D(a0c) && a73[a0c].a7E(a7B)
	}, this.a7H = function(a0c, a7B) {
		0 === a7B ? oD.wu() : a7B < 3 ? ih.zH(a0c, a7B - 1) : 3 === a7B ? ih.a2a(a0c) : 4 === a7B ? pp.wu(a0c) : 5 === a7B ? a0c === this.o0 && ih.a7I() : 6 !== a7B && 7 === a7B && ih.a34(a0c)
	}, this.a0U = function(a2) {
		return a75[a2].a78 && a73[a2].a0U()
	}, this.send = function(a0c, jW) {
		a7F(a0c), a73[a0c].send(jW)
	}, this.nz = function(a0c) {
		a75[a0c].a79 = !0
	}, this.close = function(a0c, a7J) {
		a7D(a0c) && a73[a0c].close(a7J)
	}, this.a7K = function(a0c, a7J) {
		pq.a0f(a7J), a7D(a0c) && a73[a0c].close(a7J)
	}, this.a0h = function(a7J) {
		for (var a2 = this.a0Z - 1; 0 <= a2; a2--) this.close(a2, a7J)
	}, this.a7L = function(a0c, a7J) {
		for (var a2 = this.a0Z - 1; 0 <= a2; a2--) a2 !== a0c && this.close(a2, a7J)
	}, this.a7M = function(a0c, nU) {
		a73[a0c].kB(), pq.c5(a0c, nU.code)
	}
}

function pe() {
	for (er = 0, a2 = bM - 1; 0 <= a2; a2--) 0 !== dG[a2] && er++;
	es = new Uint16Array(er);
	for (var bH = 0, a2 = 0; a2 < bM; a2++) 0 !== dG[a2] && (es[bH++] = a2)
}

function fg() {
	a7N(), a7O()
}

function a7O() {
	for (var a2 = er - 1; 0 <= a2; a2--) 0 === dG[es[a2]] && a7P(a2)
}

function a7P(a2) {
	er--;
	for (var dx = a2; dx < er; dx++) es[dx] = es[dx + 1]
}

function a7N() {
	for (var cp, a2 = er - 1; 0 <= a2; a2--) bi[es[a2]] <= b6(lg[es[a2]], 4) ? bi[es[a2]] <= 1e3 && (2 !== dG[es[a2]] || 0 === bi[es[a2]]) && a4J(es[a2]) : bi[es[a2]] >= lg[es[a2]] ? lg[es[a2]] = bi[es[a2]] : (cp = b6(lg[es[a2]] - bi[es[a2]], 1e3),
		lg[es[a2]] -= cp < 1 ? 1 : cp)
}

function jR() {
	for (var a4A = 0, a2 = er - 1; 0 <= a2; a2--) a4A += bB[es[a2]];
	return a4A % 4096
}
var an, ao, kp, kl, km, kq, lD, a24, kn, aC = 0,
	nb = 0;

function a7W() {
	a7V = 2, a7S = 2173, a7R = 10, a7Q = "1.89.6   1 Feb 2024", a7X(), q2(), eS();
	var a7Y = document.getElementById("usernameField");
	a7Y && document.body.removeChild(a7Y), e = "undefined" != typeof Android ? Android : null, 12 <= (d = e ? e.getVersion() : 0) && e.prepareAd("6685097465"), b = !1, window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers
		.iosCommandA && (b = !0, window.webkit.messageHandlers.iosCommandA.postMessage("prepare ad 4500876070"), c = "undefined" != typeof mwIOSdataX ? mwIOSdataX : {
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
		}), e || b || (q1.a7Z += "_browser"), a7U = (new Date).getTime() % 1024, na = a7a(), f.c5(), a10 = new zj, gm.c5(), od.c5(), n(), aE(), a7b(), ko = new a7c, hU = new a7d, he = new yu, a3 = new tn, bE = new a7e, m2 = new a7f, a0p = new tW, (
			aA = new a7g).c5(), ep = new a7h, fp = new a7i, (zQ = new c2).c5(), (cR = new z0).c5(), oM = new zY, uP(), e0.c5(), bC.a5T(), lC.c5(), pa.c5(), aH.c5(), oJ.c5(), fV.c5(), oD.c5(), pc.c5(), o7.c5(), cC.c5(), py.c5(), q0.a1O(), aA.cJ = !0,
		setTimeout(function() {
			a2E(2, 14071)
		}, 0), nb = 2
}

function aG() {
	nb || (nb = 1, nS(), a7W())
}

function a7a() {
	try {
		return window.self !== window.top
	} catch (nU) {
		return !0
	}
}

function a7b() {
	a7T = window.location.hostname, nZ = 0 <= a7T.toLowerCase().indexOf("territorial.io")
}

function qX() {
	var a7j;
	this.fM = null, this.c5 = function() {
		a7j = [], 9 === fF && this.a7k()
	}, this.a7k = function() {
		var a2, a7l = [45, 70, 95, 150, 190, 333];
		if (this.a6r = 0, this.fM = [0, 0, 0, 0, 0, 0], dF <= a7l[0]) this.fM[0] = Math.max(bx.by(dF * (512 - dF), a7l[0]), 16), fA = this.fM[0];
		else
			for (fA = bM - dF, a2 = 1; a2 < 6; a2++)
				if (dF <= a7l[a2]) {
					this.fM[a2 - 1] = 512 - a7l[a2 - 1] - b6((512 - a7l[a2 - 1]) * (dF - a7l[a2 - 1]), a7l[a2] - a7l[a2 - 1]), this.fM[a2] = 512 - dF - this.fM[a2 - 1];
					break
				} lQ = dF + fA
	}, this.a4Y = function(player) {
		a7j.push({
			player: player,
			tA: 14 + e0.e1(20)
		})
	}, this.eY = function() {
		var a2;
		if (9 === fF)
			for (a2 = a7j.length - 1; 0 <= a2; a2--) --a7j[a2].tA <= 0 && (fS.jy(a7j[a2].player, 0, 46), a7j.splice(a2))
	}
}
var ko, lz, yz, pf, pg, a4m = 19;

function a2E(a7n, a28) {
	((a7n %= a4m) !== lD || a7p(lD) && a28 !== a24) && (kn = !1, ko.a2F(), e0.pX(a7n), a24 = a28, a7p(lD = a7n) && (lC.get(a7n).a77 = a28), a7q(lD) ? a7r() : (a7n = lC.get(lD), an = a7n.cG, ao = a7n.eH, e0.pX(a7n.a77), ps.kV([an, ao, a7n.gv, a7n
		.gs]), a7s(), pa.a7t(), ps.a7u()))
}

function a7v() {
	return 10
}

function a7q(a2) {
	return a2 >= a7v()
}

function a7p(a2) {
	return !(1 === a2 || a2 >= a7v())
}

function a7w(a2) {
	return 3 === a2 || 7 === a2 || 9 === a2 || a2 === a4m
}

function a7x(a2) {
	return 2 === a2 || 7 === a2 || 9 === a2
}

function a7c() {
	function a87() {
		ko.eY()
	}

	function a8C(bP, a8B) {
		0 < a8B && (kq[bP] += a8B, kq[bP + 1] += a8B, kq[bP + 2] += a8B)
	}

	function rf(bP) {
		return kq[bP + 2] > kq[bP] && kq[bP + 2] > kq[bP + 1]
	}
	this.wn = -1, this.a8 = 0, this.a7y = 0, this.a7z = 8, this.a80 = 32, this.a81 = 8, this.a82 = 32, this.a83 = [0, 0], this.vj = [0, 0, 0, 0], this.dZ = null, this.a84 = !0, this.a85 = !1, this.a2F = function() {
		-1 !== this.wn && clearTimeout(this.wn), this.wn = -1, this.dZ = null, ps.a7u()
	}, this.c5 = function() {
		7 === aH.oP() || this.a85 || (this.a84 = !0, this.a8 = 0, this.a7y = 1, this.a83 = [lC.get(lD).lB[0], lC.get(lD).lE[0]], this.vj = [lC.get(lD).a86[3], lC.get(lD).a86[4], lC.get(lD).a86[5], lC.get(lD).a86[6]], this.a7z = lC.get(lD).a86[7],
			this.a80 = lC.get(lD).a86[8], this.a81 = lC.get(lD).a86[9], this.a82 = lC.get(lD).a86[10], this.a84 ? this.wn = setTimeout(a87, 16) : this.eY())
	}, this.eY = function() {
		if (8 === aH.oP() && ft.h9()) this.wn = setTimeout(a87, 16);
		else {
			if (0 === this.a8) {
				var a77 = e0.a6q();
				if (e0.pX(lC.get(lD).a86[2]), ps.kV([an, ao, lC.get(lD).a86[0], lC.get(lD).a86[1]]), e0.pX(a77), this.dZ = ps.a88(), this.a8++, this.a84) return void(this.wn = setTimeout(a87, 16))
			}
			for (var bP, cr, a77 = this.a84 ? 10 : 1e6, a77 = ao - this.a7y - 1 < a77 ? ao - this.a7y - 1 : a77, ld = this.a7y + a77, gZ = this.a7y; gZ < ld; gZ++)
				for (var gY = 1; gY < an - 1; gY++) rf(bP = 4 * (cr = gY + gZ * an)) ? this.a89(bP, cr, 1) : (this.a89(bP, cr, 0), function(gY, gZ, bP) {
					return 1 < gY && rf(bP - 4) || gY < an - 2 && rf(bP + 4) || 1 < gZ && rf(bP - 4 * an) || gZ < ao - 2 && rf(bP + 4 * an)
				}(gY, gZ, bP) && this.a8A(gY, gZ));
			this.a7y = ld, this.a7y >= ao - 1 ? (kl.putImageData(km, 0, 0, 1, 1, an - 2, ao - 2), aA.cJ = !0, this.a2F()) : this.a84 && (this.wn = setTimeout(a87, 16))
		}
	}, this.a89 = function(bP, cr, c8) {
		a8C(bP, Math.floor(this.a83[c8] + this.vj[c8] * this.dZ[cr] / 1e4) - kq[bP])
	}, this.a8D = function(bP, mj, a8E, c8, vj) {
		a8C(bP, Math.floor(this.a83[c8] + (1 - mj / a8E) * vj) - kq[bP])
	}, this.a8A = function(cM, cN) {
		for (var bP, mj, a8E, lH = cM - this.a80, lI = cN - this.a80, le = cM + this.a80, ld = cN + this.a80, lH = lH < 1 ? 1 : lH, le = an - 2 < le ? an - 2 : le, ld = ao - 2 < ld ? ao - 2 : ld, gZ = lI < 1 ? 1 : lI; gZ <= ld; gZ++)
			for (var gY = lH; gY <= le; gY++) rf(bP = 4 * (gY + gZ * an)) ? (a8E = this.a7z + (this.a80 - this.a7z) * this.dZ[gY + an * gZ] / 1e4, Math.abs(cM - gY) > a8E || Math.abs(cN - gZ) > a8E || a8E <= (mj = Math.sqrt((cM - gY) * (cM -
				gY) + (cN - gZ) * (cN - gZ))) || this.a8D(bP, mj, a8E, 1, this.vj[3])) : (a8E = this.a81 + (this.a82 - this.a81) * this.dZ[gY + an * gZ] / 1e4, Math.abs(cM - gY) > a8E || Math.abs(cN - gZ) > a8E || a8E <= (mj = Math.sqrt((cM -
				gY) * (cM - gY) + (cN - gZ) * (cN - gZ))) || this.a8D(bP, mj, a8E, 0, this.vj[2]))
	}
}

function a7s() {
	2 === lD ? a8F([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === lD ? a8F([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === lD ? a8F([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === lD && a8F([512], [512], [
		0, 70, 180, 200, 290, 420, 512
	], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function a8F(a8G, a8H, a8I, a8J, a8K) {
	for (var gY, gZ, a8M, a8N, c3, a8O, d6 = a8G.length - 1, a8L = an + ao, bH = (a8L *= a8L, a8I.length), a2 = bH - 1; 0 <= a2; a2--) a8I[a2] *= a8I[a2];
	var a8P = new Array(bH),
		a8Q = new Array(bH),
		a8R = new Array(bH),
		aF = ps.a88();
	if (void 0 === a8K)
		for (a8K = new Array(bH), a2 = bH - 1; 0 <= a2; a2--) a8K[a2] = 0;
	for (a2 = 1; a2 < bH; a2++) a8P[a2] = a8I[a2] - a8I[a2 - 1], a8Q[a2] = a8J[a2] - a8J[a2 - 1], a8R[a2] = a8K[a2] - a8K[a2 - 1];
	for (gY = an - 1; 0 <= gY; gY--)
		for (gZ = ao - 1; 0 <= gZ; gZ--) {
			for (a8M = a8L, a2 = d6; 0 <= a2; a2--) a8M = (a8N = (gY - a8G[a2]) * (gY - a8G[a2]) + (gZ - a8H[a2]) * (gZ - a8H[a2])) < a8M ? a8N : a8M;
			for (c3 = a8J[bH - 1], a8O = a8K[bH - 1], a2 = 1; a2 < bH; a2++)
				if (a8M < a8I[a2]) {
					c3 = a8J[a2 - 1] + a3p((a8M - a8I[a2 - 1]) * a8Q[a2], a8P[a2]), a8O = a8K[a2 - 1] + a3p((a8M - a8I[a2 - 1]) * a8R[a2], a8P[a2]);
					break
				} a8S(an * gZ + gY, c3, a8O, aF)
		}
}

function a8S(c8, c3, a8O, aF) {
	c3 < 500 ? aF[c8] = b6(aF[c8] * c3 * 2, 1e3) : 500 < c3 && (aF[c8] += b6(2 * (1e4 - aF[c8]) * (c3 - 500), 1e3)), aF[c8] += b6(a8O * (10 * c3 - aF[c8]), 1e3)
}

function qY() {
	var a8T;
	this.tL = 0, this.tM = 0, this.tN = 0, this.tO = 0, this.c5 = function() {
		(a8T = new Array(a7v()))[0] = {
			cG: [0, 5e3, 8e3, 1e4],
			mj: [220, 250, 255, 220],
			os: [190, 220, 0, 0],
			e8: [170, 200, 0, 0]
		}, a8T[1] = {
			cG: [0, 4e3, 5e3, 6e3, 1e4],
			mj: [25, 0, 100, 0, 25],
			os: [25, 0, 0, 0, 25],
			e8: [25, 0, 0, 0, 25]
		}, a8T[2] = {
			cG: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			mj: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			os: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			e8: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, a8T[3] = {
			cG: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			mj: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			os: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			e8: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, a8T[4] = {
			cG: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			mj: [10, 10, 20, 10, 10, 170, 212],
			os: [20, 20, 60, 100, 100, 110, 170],
			e8: [70, 70, 160, 30, 30, 60, 120]
		}, a8T[5] = {
			cG: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			mj: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			os: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			e8: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, a8T[6] = {
			cG: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			mj: [10, 10, 60, 255, 255, 200, 200],
			os: [10, 10, 60, 255, 255, 200, 200],
			e8: [80, 80, 255, 255, 255, 200, 200]
		}, a8T[7] = {
			cG: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			mj: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			os: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			e8: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, a8T[8] = {
			cG: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			mj: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			os: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			e8: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, a8T[9] = {
			cG: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			mj: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			os: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			e8: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}
	}, this.a7t = function() {
		var a2, dx, aS, a3G = function() {
				var a3G;
				return (kp = document.createElement("canvas")).width = an, kp.height = ao, kl = kp.getContext("2d", {
					alpha: !1
				}), a3G = kl.getImageData(0, 0, an, ao), kq = a3G.data, a3G
			}(),
			cG = a8T[lD].cG,
			mj = a8T[lD].mj,
			os = a8T[lD].os,
			e8 = a8T[lD].e8,
			aF = ps.a88(),
			bH = cG.length - 2,
			a8Y = new Array(1 + bH),
			a8Z = new Array(1 + bH),
			a8a = new Array(1 + bH),
			a8b = new Array(1 + bH);
		for (dx = bH; 0 <= dx; dx--) a8Y[dx] = cG[dx + 1] - cG[dx], a8Z[dx] = mj[dx + 1] - mj[dx], a8a[dx] = os[dx + 1] - os[dx], a8b[dx] = e8[dx + 1] - e8[dx];
		for (a2 = an * ao - 1; 0 <= a2; a2--)
			for (dx = bH; 0 <= dx; dx--)
				if (aF[a2] >= cG[dx]) {
					aS = aF[a2] - cG[dx], kq[4 * a2] = mj[dx] + a3p(a8Z[dx] * aS, a8Y[dx]), kq[4 * a2 + 1] = os[dx] + a3p(a8a[dx] * aS, a8Y[dx]), kq[4 * a2 + 2] = e8[dx] + a3p(a8b[dx] * aS, a8Y[dx]), kq[4 * a2 + 3] = 255;
					break
				} kl.putImageData(a3G, 0, 0), lC.a8W() && cC.cD() && lC.a8W() && (a3G = cC.rK("arena"), kl.save(), kl.globalAlpha = 1 === lD ? .1 : 1, kl.imageSmoothingEnabled = !0, kl.scale(2.8, 2.8), kl.drawImage(a3G, Math.floor((an / 2.8 - a3G
			.width) / 2), Math.floor(.5 * ao / 2.8 - a3G.height / 2)), kl.restore(), a3G = cC.rK("territorial.io"), kl.save(), kl.globalAlpha = 1 === lD ? .1 : 1, kl.imageSmoothingEnabled = !0, kl.scale(.87, .87), kl.drawImage(a3G, Math
			.floor(.745 * (an / .87 - a3G.width)), Math.floor(.422 * ao / .87 - a3G.height / 2)), kl.restore()), kn = !0, aA.cJ = !0
	}, this.pb = function() {
		for (var bP, gY, gZ, a8e, a8f, aU, tM = 0, cG = an, eH = ao, aS = cG * eH * 4, a8g = yz, a8h = kq, a2 = cG - 1; 0 <= a2; a2--) a8g[(bP = a2 << 2) + 2] = a8g[aS - bP - 2] = 3;
		for (aS = 4 * cG, a2 = eH - 1; 0 <= a2; a2--) a8g[(bP = a2 * aS) + 2] = a8g[bP + aS - 2] = 3;
		for (a8e = cG - 1, a8f = eH - 1, gZ = 1; gZ < a8f; gZ++)
			for (aS = gZ * cG, gY = 1; gY < a8e; gY++) aU = 1 - (a8h[(bP = aS + gY << 2) + 2] > a8h[bP + 1] && a8h[bP + 2] > a8h[bP]), a8g[bP + 2] = 2 - aU, tM += aU;
		this.tL = (cG - 2) * (eH - 2), this.tO = 0, a7w(lD) && function() {
			var bP, gY, gZ, aS, a8g = yz,
				a8h = kq,
				cG = an,
				a8e = cG - 1,
				a8f = ao - 1,
				tA = 0;
			for (gZ = 1; gZ < a8f; gZ++)
				for (aS = gZ * cG, gY = 1; gY < a8e; gY++) a8h[bP = aS + gY << 2] === a8h[1 + bP] && a8h[bP] === a8h[2 + bP] && (tA++, a8g[2 + bP] = 3);
			pa.tO = tA
		}(), this.tM = pK = tM - this.tO, this.tN = this.tL - this.tM - this.tO
	}
}

function a7r() {
	var j, a8j = a7v();
	lD === a8j ? j =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		lD === a8j + 1 ? j =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		lD === a8j + 2 ? j =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		lD === a8j + 3 ? j =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		lD === a8j + 4 ? j =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		lD === a8j + 5 ? j =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		lD === a8j + 6 ? j =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		lD === a8j + 7 ? j =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		lD === a8j + 8 && (j =
			"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-"
			), (new kX).kZ(j)
}

function qZ() {
	var a8T;
	this.c5 = function() {
		var a8k = [120, 105, 92],
			cos = [12, 12, 60],
			a8l = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			a8m = [140, 130, 120],
			a8n = [12, 12, 76],
			a8o = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			a8p = [130, 117, 106],
			a8q = [12, 12, 68],
			a8r = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		(a8T = new Array(a4m))[0] = {
			name: "White Arena",
			cG: 230,
			eH: 230,
			gv: 1e3,
			gs: 2e3,
			a77: 173
		}, a8T[1] = {
			name: "Black Arena",
			cG: 800,
			eH: 800,
			gv: 100,
			gs: 50,
			a77: 43
		}, a8T[2] = {
			name: "Island",
			cG: 512,
			eH: 512,
			gv: 128,
			gs: 32,
			a77: 0
		}, a8T[3] = {
			name: "Mountains",
			cG: 960,
			eH: 960,
			gv: 60,
			gs: 8,
			a77: 0
		}, a8T[4] = {
			name: "Desert",
			cG: 900,
			eH: 900,
			gv: 100,
			gs: 5,
			a77: 0
		}, a8T[5] = {
			name: "Swamp",
			cG: 1e3,
			eH: 1e3,
			gv: 100,
			gs: 40,
			a77: 0
		}, a8T[6] = {
			name: "Snow",
			cG: 1e3,
			eH: 1e3,
			gv: 100,
			gs: 20,
			a77: 0
		}, a8T[7] = {
			name: "Cliffs",
			cG: 1024,
			eH: 1024,
			gv: 128,
			gs: 32,
			a77: 0
		}, a8T[8] = {
			name: "Pond",
			cG: 820,
			eH: 820,
			gv: 200,
			gs: 100,
			a77: 0
		}, a8T[9] = {
			name: "Halo",
			cG: 1024,
			eH: 1024,
			gv: 128,
			gs: 32,
			a77: 0
		}, a8T[10] = {
			name: "Europe",
			lB: a8m,
			lE: a8n,
			a86: a8o
		}, a8T[11] = {
			name: "World",
			lB: a8p,
			lE: a8q,
			a86: a8r
		}, a8T[12] = {
			name: "Caucasia",
			lB: a8p,
			lE: a8q,
			a86: a8r
		}, a8T[13] = {
			name: "Africa",
			lB: a8k,
			lE: cos,
			a86: a8l
		}, a8T[14] = {
			name: "Middle East",
			lB: a8k,
			lE: cos,
			a86: a8l
		}, a8T[15] = {
			name: "Scandinavia",
			lB: a8m,
			lE: a8n,
			a86: a8o
		}, a8T[16] = {
			name: "North America",
			lB: a8m,
			lE: a8n,
			a86: a8o
		}, a8T[17] = {
			name: "South America",
			lB: a8k,
			lE: cos,
			a86: a8l
		}, a8T[18] = {
			name: "Asia",
			lB: a8p,
			lE: a8q,
			a86: a8r
		}
	}, this.a8W = function() {
		return 1 === lD
	}, this.get = function(a2) {
		return a8T[a2]
	}, this.tK = function() {
		return lD === a4m ? fB.a4i : this.get(lD).name
	}
}

function pZ() {
	(lz = void 0 === lz ? document.createElement("canvas") : lz).width = an, lz.height = ao, pf = lz.getContext("2d", {
		alpha: !0
	}), pg = pf.getImageData(0, 0, an, ao), yz = pg.data, hh.kr.ks(yz)
}

function qa() {
	var aF, cG, eH, max, a8s, gs, a8u, a8v, a8w, a8x, a8y, a8z, a90, a91, a8t = 1e4;

	function a99(a98, gv, bH) {
		var a2;
		for (a8u[0] = a98, a2 = 1; a2 < bH; a2++) a8u[a2] = a8u[a2 - 1] + gv, gv = a8u[a2] >= a8t ? (a8u[a2] = a8t - 1, -gv) : a8u[a2] < 0 ? (a8u[a2] = 0, -gv) : (gv += 16384 <= e0.random() ? gs : -gs) < -a8s ? -a8s : a8s < gv ? a8s : gv
	}

	function a9B(gY, gZ, a9C, bH) {
		(a9C ? function(gY, gZ, bH) {
			var a2;
			for (a2 = 0; a2 < bH; a2++) aF[gZ * cG + gY + a2] = a8u[a2]
		} : function(gY, gZ, bH) {
			var a2;
			for (a2 = 0; a2 < bH; a2++) aF[gZ * cG + gY + a2 * cG] = a8u[a2]
		})(gY, gZ, bH)
	}

	function a9F(value, bH) {
		var a2, a6f, d0, cp = value - a8u[bH - 1];
		if (0 != cp) {
			for (a6f = 1 + b6(Math.abs(cp), bH - 1), a6f = cp < 0 ? -a6f : a6f, a8u[bH - 1] = value, d0 = (d0 = bH - 1 - b6(Math.abs(cp), Math.abs(a6f))) < 1 ? 1 : bH - 2 < d0 ? bH - 2 : d0, a2 = bH - 2; d0 <= a2; a2--) a8u[a2] += cp - (bH - 1 -
				a2) * a6f;
			(cp < 0 ? function(bH) {
				var a2;
				for (a2 = bH - 2; 1 <= a2; a2--) a8u[a2] < 0 && (a8u[a2] = -a8u[a2] - 1)
			} : function(bH) {
				var a2;
				for (a2 = bH - 2; 1 <= a2; a2--) a8u[a2] >= a8t && (a8u[a2] = 2 * a8t - a8u[a2] - 1)
			})(bH)
		}
	}

	function a9I(a9J, a9K, bH) {
		for (var a2 = 0; a2 < bH; a2++) a9J[a2] = a9K[a2]
	}

	function a9L(aR) {
		for (var a2 = 0; a2 < aR.length - 1; a2++) aR[a2] = aR[a2 + 1] - aR[a2];
		aR[aR.length - 1] = aR[aR.length - 3]
	}

	function a9M(rN, lc, co) {
		a8v.push(rN), a8w.push(lc), a8x.push(co)
	}
	this.kV = function(a92) {
		! function(a92) {
			var a2;
			for (cG = a92[0], eH = a92[1], a8s = a92[2], gs = a92[3], aF = new Int16Array(cG * eH), max = eH < cG ? cG : eH, a8u = new Int16Array(max), a8v = [], a8w = [], a8x = [], a8y = new Array(cG), a8z = new Array(eH), a2 = cG - 1; 0 <=
				a2; a2--) a8y[a2] = !1;
			for (a2 = eH - 1; 0 <= a2; a2--) a8z[a2] = !1;
			a90 = new Int16Array(cG), a91 = new Int16Array(eH)
		}(a92),
		function(bH) {
			var a98 = e0.random() % a8t,
				gv = e0.random() % (2 * a8s + 1) - a8s;
			a99(a98, gv, bH)
		}(max), a9I(a91, a8u, eH), a9B(0, 0, !0, cG);
		var gY, gZ, a92 = aF[0],
			bH = max,
			gv = e0.random() % (2 * a8s + 1) - a8s;
		for (a99(a92, gv, bH), a9I(a90, a8u, cG), a9B(0, 0, !1, eH), a9L(a90), a9L(a91), a99(aF[cG - 1], a90[cG - 1], eH), a9B(cG - 1, 0, !1, eH), a99(aF[cG * (eH - 1)], a91[eH - 1], cG), a9F(aF[cG * eH - 1], cG), a9B(0, eH - 1, !0, cG), a8y[cG -
				1] = a8y[0] = !0, a8z[eH - 1] = a8z[0] = !0, a9M(0, cG, !0), a9M(0, eH, !1), ! function() {
				var a9O, rN;
				for (;;) {
					if (a9O = function() {
							var a2, a9O = a8v.length - 1;
							for (a2 = a9O - 1; 0 <= a2; a2--) a8w[a2] > a8w[a9O] && (a9O = a2);
							return a9O
						}(), a8w[a9O] < 5) return;
					rN = a8v[a9O] + b6(a8w[a9O], 2), (a8x[a9O] ? function(gY) {
						var bH, a9R, a2, a06 = 0,
							a9S = 0;
						for (; a9S < eH - 1;) {
							for (a2 = a06 + 1; a2 < eH; a2++)
								if (a8z[a2]) {
									a9S = a2;
									break
								} bH = a9S - a06 + 1, a99(aF[gY + cG * a06], 0 === a06 ? a90[gY] : a8u[a9R - 1] - a8u[a9R - 2], bH), a9F(aF[a9S * cG + gY], bH), a9B(gY, a06, !1, bH), a9R = bH, a06 = a9S
						}
						a8y[gY] = !0
					} : function(gZ) {
						var bH, a9R, a2, a06 = 0,
							a9S = 0;
						for (; a9S < cG - 1;) {
							for (a2 = a06 + 1; a2 < cG; a2++)
								if (a8y[a2]) {
									a9S = a2;
									break
								} bH = a9S - a06 + 1, a99(aF[gZ * cG + a06], 0 === a06 ? a91[gZ] : a8u[a9R - 1] - a8u[a9R - 2], bH), a9F(aF[gZ * cG + a9S], bH), a9B(a06, gZ, !0, bH), a9R = bH, a06 = a9S
						}
						a8z[gZ] = !0
					})(rN), a9M(rN, a8v[a9O] + a8w[a9O] - rN, a8x[a9O]), a8w[a9O] = rN - a8v[a9O] + 1
				}
			}(), gY = 0; gY < cG; gY++)
			if (!a8y[gY])
				for (gZ = 0; gZ < eH; gZ++) a8z[gZ] || ! function(gY, gZ) {
					var value = aF[gZ * cG + gY - 1] + aF[(gZ - 1) * cG + gY],
						tl = 2;
					a8y[gY + 1] && (tl++, value += aF[gZ * cG + gY + 1]);
					a8z[gZ + 1] && (tl++, value += aF[(gZ + 1) * cG + gY]);
					aF[gZ * cG + gY] = b6(value, tl)
				}(gY, gZ)
	}, this.a88 = function() {
		return aF
	}, this.a7u = function() {
		aF = null
	}
}

function b6(dx, e8) {
	return Math.floor(dx / e8 + 1 / (2 * e8))
}

function a3p(dx, e8) {
	return 0 <= dx ? b6(dx, e8) : -b6(-dx, e8)
}

function eQ(aF) {
	return aF * aF
}

function sg(dx, e8) {
	return e8 < dx ? dx : e8
}

function va(dx, e8) {
	return dx < e8 ? dx : e8
}

function w0(dx, aF, e8) {
	return aF < dx ? dx : e8 < aF ? e8 : aF
}

function a9U(aF, bH) {
	for (var eo = b6(aF + 1, 2), a2 = 0; a2 < bH; a2++) eo = b6(eo + b6(aF, eo), 2);
	return eo
}

function c0(aF, bH) {
	return aF < 1 ? 0 : a9U(aF, bH)
}

function a9V(gd, ge, m9, tX, gf, gh, mA, tY) {
	return !(gd + m9 <= gf || ge + tX <= gh || gf + mA <= gd || gh + tY <= ge)
}

function a9W(gd, ge, m9, tX, gf, gh, mA, tY) {
	return gd <= gf && ge <= gh && gf + mA <= gd + m9 && gh + tY <= ge + tX
}

function ki(aF) {
	return Math.floor(!!aF * (1 + Math.log2(aF + .5)))
}

function q3() {
	this.by = function(dx, e8) {
		return Math.floor((dx + .5) / e8)
	}, this.a9X = function(dx, e8) {
		return Math.floor(dx * (e8 + .5))
	}, this.sqrt = function(aF) {
		return ~~Math.sqrt(aF + .5)
	}, this.pow = function(nU) {
		return Math.floor(Math.pow(2, nU) + .5)
	}, this.oq = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.a9Y = function(aS, aU, aW) {
		return Math.max(Math.min(aS, aU), aW)
	}, this.a9Z = function(a9a, a9b, gY, gZ) {
		gY -= a9a, a9a = gZ - a9b, gZ = 0;
		return 0 == gY ? gZ = 0 <= a9a ? Math.PI : 0 : (gZ = Math.a9c(a9a / gY), gZ += 0 < gY ? .5 * Math.PI : 1.5 * Math.PI), gZ
	}, this.log2 = function(aF) {
		return Math.floor(!!aF * (1 + Math.log2(aF + .5)))
	}
}

function a7X() {
	"function" != typeof Math.log2 && (Math.log2 = function(gY) {
		return Math.log(gY) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(gY) {
		return Math.log(gY) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(gY) {
		return 0 < gY ? 1 : gY < 0 ? -1 : 0
	})
}

function qr() {
	this.a32 = 0;
	var z1 = -1,
		a9d = !1,
		v0 = [],
		a9e = 0;

	function oL(gY, gZ, a9n, a2) {
		return 0 === a2 ? gY >= a9n.gd && (0 === a2 || gZ >= a9n.ge) && gZ <= a9n.ge + a9n.tX : (gZ -= a2 * (a9n.tX - ow), gY >= a9n.gf && gZ >= a9n.ge && gZ <= a9n.ge + a9n.tX)
	}

	function a9o() {
		var m9 = Math.floor((o ? .145 : .09) * c6),
			mA = Math.floor(2.25 * m9),
			lc = Math.floor(.065 * (o ? .53 : .36) * c6),
			gf = p - mA - lc;
		return {
			gd: p - m9 - lc,
			ge: cO,
			m9: m9,
			tX: Math.floor(.35 * (1 + .35 * o) * m9),
			gf: gf,
			mA: mA,
			wY: lc
		}
	}

	function a0K(gY, gZ, cG, eH, mj, os, e8, a9w, j) {
		var cE = (j === v0[0][0].name ? .65 : .5) * eH,
			font = hh.hi.kD(cE, 1),
			font = cH.measureText(j, font);
		.92 * cG < font && (cE *= .92 * cG / font), cV.font = hh.hi.kD(cE, 1), a9w && (mj += 80, os += 80, e8 += 80), cV.fillStyle = "rgba(" + mj + "," + os + "," + e8 + ",0.6)", cV.fillRect(gY, gZ, cG, eH), cV.fillStyle = cY.cZ, cV.fillRect(gY, gZ,
			cG, ow), cV.fillRect(gY, gZ + eH - ow, cG, ow), cV.fillRect(gY, gZ, ow, eH), cV.fillRect(gY + cG - ow, gZ, ow, eH), cV.fillText(j, Math.floor(gY + cG / 2), Math.floor(gZ + eH / 2 + .1 * cE))
	}
	this.gn = null, this.xw = new Uint8Array(4), this.sj = function() {
		return b ? 4 : o ? 2 : 1
	}, this.c5 = function() {
		var a9g;
		this.a9f(), v0 = [new Array(6), new Array(10), new Array(7)], this.xw[0] = 10, this.xw[1] = 5, this.xw[2] = 2, this.xw[3] = 1, v0[0][0] = {
			name: "More",
			id: 0,
			mj: 140,
			os: 120,
			e8: 0
		}, v0[0][1] = {
			name: "Lobby 1",
			id: 1,
			mj: 0,
			os: 0,
			e8: 0
		}, v0[0][2] = {
			name: "Settings",
			id: 2,
			mj: 0,
			os: 0,
			e8: 0
		}, v0[0][3] = {
			name: "More Information",
			id: 3,
			mj: 0,
			os: 0,
			e8: 0
		}, v0[0][4] = {
			name: "Replay",
			id: 4,
			mj: 0,
			os: 0,
			e8: 0
		}, v0[0][5] = {
			name: a7Q,
			id: 5,
			mj: 90,
			os: 0,
			e8: 0
		}, v0[0].push({
			name: "FX Client v" + fx_version + " " + fx_update,
			id: 20,
			mj: 0,
			os: 0,
			e8: 70
		}), v0[1][0] = v0[0][0], v0[1][1] = {
			name: "Hide Usernames",
			id: 1,
			mj: 0,
			os: 0,
			e8: 0
		}, v0[1][2] = {
			name: "Hide Links",
			id: 2,
			mj: 0,
			os: 0,
			e8: 0
		}, v0[1][3] = {
			name: "Hide Zoom Buttons",
			id: 3,
			mj: 0,
			os: 0,
			e8: 0
		}, v0[1][4] = {
			name: "Reverse Name/Balance",
			id: 4,
			mj: 0,
			os: 0,
			e8: 0
		}, v0[1][5] = {
			name: "Resolution",
			id: 5,
			mj: 0,
			os: 0,
			e8: 0
		}, v0[1][6] = {
			name: "Country Minimum Font Size",
			id: 6,
			mj: 0,
			os: 0,
			e8: 0
		}, v0[1][7] = {
			name: "Leaderboard Refresh Rate",
			id: 7,
			mj: 0,
			os: 0,
			e8: 0
		}, v0[1][8] = {
			name: "Reset Settings",
			id: 8,
			mj: 0,
			os: 0,
			e8: 0
		}, v0[1][9] = {
			name: "Back",
			id: 9,
			mj: 0,
			os: 0,
			e8: 0
		}, v0[2][0] = v0[0][0], v0[2][1] = {
			name: "Tutorial",
			id: 1,
			mj: 0,
			os: 0,
			e8: 0
		}, v0[2][2] = {
			name: "Player List",
			id: 2,
			mj: 0,
			os: 0,
			e8: 0
		}, v0[2][3] = {
			name: "Clan List",
			id: 3,
			mj: 0,
			os: 0,
			e8: 0
		}, v0[2][4] = {
			name: "Privacy Policy",
			id: 4,
			mj: 0,
			os: 0,
			e8: 0
		}, v0[2][5] = {
			name: "Changelog",
			id: 13,
			mj: 0,
			os: 0,
			e8: 0
		}, v0[2][6] = {
			name: "Terms of Service",
			id: 14,
			mj: 0,
			os: 0,
			e8: 0
		}, !b && d < 5 && v0[2].push({
			name: "Cookie Policy",
			id: 5,
			mj: 0,
			os: 0,
			e8: 0
		}), (b || 5 <= d) && (b ? !c.mustShowConsentButton || "0" !== c.mustShowConsentButton && "1" !== c.mustShowConsentButton || v0[2].push({
			name: "Consent Form",
			id: 7,
			mj: 0,
			os: 0,
			e8: 0
		}) : "" !== (a9g = e.loadString(187)) && "1" !== a9g || v0[2].push({
			name: "Consent Form",
			id: 7,
			mj: 0,
			os: 0,
			e8: 0
		})), 5 <= d && v0[2].push({
			name: "Force Restart Game",
			id: 12,
			mj: 0,
			os: 0,
			e8: 0
		}), v0[2].push({
			name: "Back",
			id: 6,
			mj: 0,
			os: 0,
			e8: 0
		}), this.a9h(), this.a9i()
	}, this.a9f = function() {
		this.gn = {
			tT: 0,
			a9j: 0,
			wR: 0,
			go: 1,
			a9k: 2,
			a66: 4,
			xx: 2,
			a6F: 2
		}
	}, this.a9i = function() {
		if (settings.hideAllLinks) a10.aW[0] = a10.aW[1] = !this.gn.a9j;
		else a10.aW[0] = a10.aW[1] = true;
		a10.aW[2] = a10.aW[3] = a10.aW[4] = !this.gn.a9j, v0[1][1].os = this.gn.tT ? 130 : 0, v0[1][2].os = this.gn.a9j ? 130 : 0, v0[1][3].os = this.gn.wR ? 130 : 0, v0[1][4].os = this.gn.go ? 130 : 0, this.a9l(5), this.a9l(6), this.a9l(7)
	}, this.a9h = function() {
		var ry = t().split("");
		ry.length < 14 ? this.a9f() : (this.gn.tT = parseInt(ry[6]), this.gn.a9j = parseInt(ry[7]), this.gn.wR = parseInt(ry[8]), this.gn.go = parseInt(ry[9]), this.gn.a9k = parseInt(ry[10]), this.gn.a66 = parseInt(ry[11]), this.gn.xx = parseInt(
			ry[12]))
	}, this.a0J = function() {
		var j = cQ.sI[2].mw.a0H();
		a6((j += ~~this.gn.tT) + ~~this.gn.a9j + ~~this.gn.wR + ~~this.gn.go + ~~this.gn.a9k + ~~this.gn.a66 + ~~this.gn.xx + "0")
	}, this.a9l = function(a2) {
		5 === a2 ? v0[1][a2].name = "Resolution: " + fT.tJ(100 * od.a9m(), 1) : 6 === a2 ? v0[1][a2].name = "Country Minimum Font Size: " + (this.gn.a66 < 4 ? 1 + this.gn.a66 : 2 * (this.gn.a66 - 1)) : 7 === a2 && (v0[1][a2].name =
			"Leaderboard Refresh Rate: " + fT.tJ(100 / this.xw[this.gn.xx], 1))
	}, this.cL = function(gY, gZ) {
		var a2, a9n, a9q;
		if (!(7 <= aH.oP())) {
			a9n = a9o();
			var gearIconX = a9n.gd - a9n.m9 / 2;
			if (gY > gearIconX && gY < (gearIconX + a9n.tX) && gZ > a9n.ge && gZ < (a9n.ge + a9n.tX)) return WindowManager.openWindow("settings");
			if (a9d) {
				for (a2 = 1; a2 < v0[a9e].length; a2++)
					if (oL(gY, gZ, a9n, a2)) return a9q = v0[a9e][a2], 0 === a9e ? 1 === a9q.id ? (gm.a32 = (gm.a32 + 1) % 4, a9q.name = (gm.a32 % 2 ? "Proxy " : "Lobby ") + (1 + (gm.a32 >> 1)), aA.cJ = !0) : 2 === a9q.id ? (a9e = 1, aA.cJ = !
						0) : 3 === a9q.id ? (a9e = 2, aA.cJ = !0) : 4 === a9q.id && kA.show() : 1 === a9e ? 1 === a9q.id ? (gm.gn.tT = !gm.gn.tT, a9q.os = gm.gn.tT ? 130 : 0, gm.a0J(), aA.cJ = !0) : 2 === a9q.id ? (gm.gn.a9j = !gm.gn.a9j, gm
							.a9i(), gm.a0J(), aA.cJ = !0) : 3 === a9q.id ? (gm.gn.wR = !gm.gn.wR, a9q.os = gm.gn.wR ? 130 : 0, gm.a0J(), aA.cJ = !0) : 4 === a9q.id ? (gm.gn.go = !gm.gn.go, a9q.os = gm.gn.go ? 130 : 0, gm.a0J(), aA.cJ = !0) :
						5 === a9q.id ? (gm.gn.a9k++, gm.gn.a9k %= 8, gm.a9l(a9q.id), gm.a0J(), od.a2n(1), aA.cJ = !0) : 6 === a9q.id ? (gm.gn.a66++, gm.gn.a66 %= 10, gm.a9l(a9q.id), gm.a0J(), aA.cJ = !0) : 7 === a9q.id ? (gm.gn.xx++, gm.gn
							.xx %= 4, gm.a9l(a9q.id), gm.a0J(), aA.cJ = !0) : 8 === a9q.id ? (gm.a9f(), gm.a9i(), gm.a0J(), od.a2n(1), aA.cJ = !0) : 9 === a9q.id && (a9e = 0, aA.cJ = !0) : 1 === a9q.id ? (oM.c5(q1.a9r, !0), oM.c5(q1.a9r, !
						1)) : 2 === a9q.id ? (oM.c5(q1.a9s, !0), oM.c5(q1.a9s, !1)) : 3 === a9q.id ? (oM.c5(q1.a9t, !0), oM.c5(q1.a9t, !1)) : 4 === a9q.id ? (oM.c5(q1.a7Z, !0), oM.c5(q1.a7Z, !1)) : 5 === a9q.id ? (oM.c5(q1.tc, !0), oM.c5(q1
							.tc, !1)) : 13 === a9q.id ? (oM.c5(q1.a9u, !0), oM.c5(q1.a9u, !1)) : 14 === a9q.id ? (oM.c5(q1.a9v, !0), oM.c5(q1.a9v, !1)) : 6 === a9q.id ? (a9e = 0, aA.cJ = !0) : 7 === a9q.id ? b ? window.webkit.messageHandlers
						.iosCommandA.postMessage("showConsentForm") : e.setState(7) : 12 === a9q.id && e.setState(14), !0;
				return a9d = !1, !(aA.cJ = !0)
			}
			return !!oL(gY, gZ, a9n, 0) && (a9d = !(a9e = 0), aA.cJ = !0)
		}
	}, this.ni = function(gY, gZ) {
		var a2, a9n, ot, hW;
		if (!(7 <= aH.oP())) {
			for (a9n = a9o(), ot = z1, hW = a9d ? 0 === a9e ? v0[a9e].length - 2 : v0[a9e].length : 1, z1 = -1, a2 = 0; a2 < hW; a2++)
				if (oL(gY, gZ, a9n, a2)) {
					z1 = a2;
					break
				} ot !== z1 && (aA.cJ = !0)
		}
	}, this.cU = function() {
		var a2, hW, a9n;
		if (!(7 <= aH.oP()) && (a9n = a9o(), cV.textAlign = cX, cV.textBaseline = cW, a0K(a9n.gd, a9n.ge, a9n.m9, a9n.tX, v0[a9e][0].mj, v0[a9e][0].os, v0[a9e][0].e8, 0 === z1, v0[a9e][0].name), cV.imageSmoothingEnabled = true, cV.drawImage(
				settingsGearIcon, a9n.gd - a9n.m9 / 2, a9n.ge, a9n.tX, a9n.tX), cV.imageSmoothingEnabled = false, cV.font = "bold " + Math.floor(a9n.tX * 0.4) + "px " + settings.fontName, (!a9d && cV.fillText("Win count: " + wins_counter,
				Math.floor(a9n.gd + a9n.m9 / 2), Math.floor((a9n.ge + a9n.tX / 2) * 2.1))), a9d))
			for (hW = v0[a9e].length, a2 = 1; a2 < hW; a2++) a0K(a9n.gf, a9n.ge + a2 * a9n.tX - a2 * ow, a9n.mA, a9n.tX, v0[a9e][a2].mj, v0[a9e][a2].os, v0[a9e][a2].e8, z1 === a2, v0[a9e][a2].name)
	}
}

function qb() {
	var wn, a9y, a9z, aA0, a78 = !1;

	function aA1() {
		a78 = !0, wn = -1, a9y = new Array(4);
		for (var a2 = 3; 0 <= a2; a2--) a9y[a2] = !1;
		var aA2 = Math.floor(1 + .02 * uS);
		a9z = new Array(4), (aA0 = new Array(4))[1] = aA0[3] = a9z[0] = a9z[2] = 0, aA0[0] = a9z[3] = -aA2, a9z[1] = aA0[2] = aA2
	}

	function aA3() {
		if (-1 !== wn)
			if (0 !== g1 && ft.hW()) {
				for (var aA4 = !1, a2 = 3; 0 <= a2; a2--) a9y[a2] && (aA4 = !0, dL += a9z[a2], dN += aA0[a2], fS.ni(a9z[a2], aA0[a2]), hH.wU());
				aA4 ? aA.cJ = !0 : hL.hM()
			} else hL.hM()
	}
	this.oW = function(c8) {
		0 !== g1 && ft.hW() && (a78 || aA1(), a9y[c8] = !0, -1 === wn) && (wn = setInterval(aA3, 20), aA3())
	}, this.oR = function(c8) {
		if (0 !== g1 && (a78 || aA1(), a9y[c8] = !1, -1 !== wn)) {
			for (var aA4 = !1, a2 = 3; 0 <= a2; a2--) aA4 = aA4 || a9y[a2];
			aA4 || this.hM()
		}
	}, this.hM = function() {
		if (a78 && -1 !== wn) {
			for (var a2 = 3; 0 <= a2; a2--) a9y[a2] = !1;
			clearInterval(wn), wn = -1
		}
	}
}

function qc() {
	var aA6;

	function aAC(gd, ge, gf, gh) {
		return Math.abs(gf - gd) + Math.abs(gh - ge)
	}
	this.aA7 = function() {
		return aA6
	}, this.eA = function(player, aA8) {
		var a2;
		if (0 !== bb[player].length && bJ.bK(aA8) && (bJ.bU(aA8) || bJ.bT(aA8) !== player))
			for (a2 = 21; 0 <= a2; a2--)
				if (function(aA6, aA8) {
						var aAB, a2, lH = bJ.gi(aA6),
							lI = bJ.cT(aA6),
							le = bJ.gi(aA8),
							ld = bJ.cT(aA8),
							aA2 = aAC(lH, lI, le, ld);
						if (!(aA2 < 2))
							for (aAB = aA6, a2 = 0; a2 < aA2; a2++)
								if (Math.abs(le - bJ.gi(aAB)) >= Math.abs(ld - bJ.cT(aAB)) ? aAB += aj[lH < le ? 1 : 3] : aAB += aj[lI < ld ? 2 : 0], !bJ.rf(aAB)) return !!bJ.bK(aAB) && !(0 === a2 || a2 + 20 < aA2);
						return
					}(aA6 = 21 === a2 ? function(border, aA8) {
						for (var aA2, le = bJ.gi(aA8), ld = bJ.cT(aA8), c8 = 0, min = aAC(le, ld, bJ.gi(border[0]), bJ.cT(border[0])), a2 = border.length - 1; 1 <= a2; a2--)(aA2 = aAC(le, ld, bJ.gi(border[a2]), bJ.cT(border[a2]))) < min && (
							min = aA2, c8 = a2);
						return border[c8]
					}(bb[player], aA8) : bb[player][b6(a2 * bb[player].length, 21)], aA8)) return !0;
		return !1
	}
}

function a7i() {
	var aAD = !1,
		tf = 0,
		cG = 0,
		m9 = 0,
		lc = 0,
		or = null,
		hi = null,
		aAE = null;

	function aAG() {
		for (var a1u, aAJ = 0, bH = 0, eo = Math.floor(cG / 2), mj = Math.floor(m9 / 2), a1t = 1.5 * Math.PI, a2 = pN; 0 <= a2; a2--) bH += aAE[a2], 0 === aAE[a2] && aAJ++;
		if (aAD = !1, hi.clearRect(0, 0, cG, cG), hi.fillStyle = cY.ho, hi.fillRect(0, 0, cG, cG), hi.fillStyle = cY.cZ, hi.fillRect(0, 0, cG, lc), hi.fillRect(0, 0, lc, cG), hi.fillRect(cG - lc, 0, lc, cG), hi.fillRect(0, cG - lc, cG, lc), 0 < bH)
			if (aAJ === pN) {
				for (a2 = pN; 0 <= a2; a2--)
					if (0 < aAE[a2]) {
						! function(a2, eo, mj) {
							hi.fillStyle = ep.a1y[ep.nB[a2]], hi.beginPath(), hi.arc(eo, eo, mj, 0, 2 * Math.PI), hi.fill()
						}(a2, eo, mj);
						break
					}!
				function(eo) {
					var cE = eo / 3;
					hi.font = hh.hi.kD(cE, 1), hi.fillStyle = cY.cZ, hi.fillText("100%", eo, eo + .1 * cE)
				}(eo)
			} else {
				for (a2 = 0; a2 <= pN; a2++) 0 < aAE[a2] && (! function(a2, eo, mj, a1t, a1u) {
					hi.fillStyle = ep.a1y[ep.nB[a2]], hi.beginPath(), hi.arc(eo, eo, mj, a1t, a1u), hi.lineTo(eo, eo), hi.fill()
				}(a2, eo, mj, a1t, a1u = a1t + 2 * Math.PI * aAE[a2] / bH), function(eo, mj, a1t, a1u) {
					var aF = (a1u - a1t) / (2 * Math.PI),
						cE = +mj * Math.min(aF, .37);
					cE < 8 || (a1t = (a1t + a1u) / 2, a1u = Math.floor(100 * aF + .5) + "%", mj *= .525 - Math.max(.6 * (aF - .7), 0), hi.font = hh.hi.kD(cE, 1), hi.fillStyle = cY.cZ, hi.fillText(a1u, eo + Math.cos(a1t) * mj, eo + Math.cos(
						a1t + 1.5 * Math.PI) * mj))
				}(eo, mj, a1t, a1u), 0 !== a2 && a1w(eo, mj, a1t), a1t = a1u);
				a1w(eo, mj, 1.5 * Math.PI)
			}!
		function(eo, mj) {
			hi.beginPath(), hi.arc(eo, eo, mj, 0, 2 * Math.PI), hi.stroke()
		}(eo, mj)
	}

	function a1w(eo, mj, a1z) {
		hi.beginPath(), hi.moveTo(eo, eo), hi.lineTo(eo + Math.cos(a1z) * mj, eo + Math.cos(a1z + 1.5 * Math.PI) * mj), hi.stroke()
	}
	this.c5 = function() {
		if (di) {
			var a2;
			for (tf = 0, aAE = new Uint32Array(pN + 1), a2 = pN; 0 <= a2; a2--) aAE[a2] = 0;
			for (a2 = er - 1; 0 <= a2; a2--) aAE[ep.eq[es[a2]]] += 1;
			this.resize()
		} else aAE = hi = or = null
	}, this.vH = function() {
		return cG
	}, this.resize = function() {
		di && (cG = Math.floor(o && !hG ? .18 * uS : .13 * c6), cG = (cG *= 1 + (.5 + .2 * o) * hG) + cG % 2, m9 = Math.floor(7 * cG / 8), (or = or || document.createElement("canvas")).width = cG, or.height = cG, hi = or.getContext("2d", {
			alpha: !0
		}), lc = Math.max(1, .015 * cG), hi.lineWidth = lc, hi.strokeStyle = cY.cZ, hh.hi.textAlign(hi, 1), hh.hi.textBaseline(hi, 1), aAG())
	}, this.nD = function() {
		return aAE[this.nC()]
	}, this.my = function() {
		return tf = 31, this.eY(), this.nC()
	}, this.nC = function() {
		for (var aAH = 0, a2 = pN; 0 < a2; a2--) aAE[a2] > aAE[aAH] && (aAH = a2);
		return aAH
	}, this.eY = function() {
		if (di && 32 <= ++tf) {
			var a2;
			for (tf = 0, a2 = pN; 0 <= a2; a2--) aAE[a2] = 0;
			for (a2 = er - 1; 0 <= a2; a2--) aAE[ep.eq[es[a2]]] += bi[es[a2]];
			aAD = !0
		}
	}, this.cB = function() {
		di && aAD && aAG()
	}, this.cU = function() {
		di && (hG ? cV.drawImage(or, k4, k4) : cV.drawImage(or, k4, vI + 2 * k4))
	}
}

function r3() {
	this.a1O = function() {
		e || b || function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var aAO = window.location.search,
				aAO = new URLSearchParams(aAO).get(key);
			if ("string" != typeof aAO || aAO.length < 1) return null;
			return aAO
		}("replay") && kA.show()
	}, this.kJ = function() {
		var aAN;
		e || b || ((aAN = new URL(window.location.href)).search = "", history.replaceState(null, "", aAN.toString()))
	}
}

function qd() {
	var aAQ, aR;
	this.c5 = function() {
		for (var a2 = (aR = new Uint16Array(101)).length - 1; 0 <= a2; a2--) aR[a2] = b6(32768 * a2, 100);
		this.pX(0)
	}, this.value = function(bP) {
		return aR[bP]
	}, this.a6q = function() {
		return b6(aAQ - 1, 2)
	}, this.pX = function(a77) {
		aAQ = 2 * a77 % 32768 + 1
	}, this.random = function() {
		return aAQ = 167 * aAQ % 32768
	}, this.e1 = function(gF) {
		return b6(gF * this.random(), 32768)
	}, this.ei = function(bP) {
		return 0 !== bP && this.random() < this.value(bP)
	}
}

function qz() {
	this.je = new aAR, this.wF = new aAS, this.wE = new aAT, this.c5 = function(pQ, mD, pS, pT) {
		var aAU;
		hD || ((aAU = {}).pR = bA, aAU.pQ = pQ, aAU.mD = mD, aAU.pS = pS, aAU.pT = pT, aAU.a27 = lD, aAU.a28 = a24, fI.a2X(aAU), this.je.c5(aAU))
	}, this.eY = function() {
		hD || this.je.eY()
	}, this.wD = function() {
		var os = this.je.aAU;
		0 === g1 && aH.a0r(), a2E(os.a27, os.a28), 1 === os.mD.length && (fI.a2S(os.pS), fI.a2U(os.a2V, os.a2W)), fV.close(fV.o0, 3246), fI.a2Z(), pP(os.pQ, os.pR, os.mD, os.pS, os.pT, !0)
	}, this.wB = function(j) {
		var a2 = j.indexOf("=");
		return 0 <= a2 ? j.substring(a2 + 1) : j
	}, this.wG = function(j) {
		return "https://territorial.io/?replay=" + j
	}
}

function aAR() {
	this.aAV = null, this.aAW = null, this.aAX = null, this.aAY = null, this.aAZ = null, this.aAa = null;
	var aAb = 0;
	this.aAU = null, this.wC = "", this.c5 = function(aAU) {
		this.aAV = [], this.aAW = [], this.aAX = [], this.aAY = [], this.aAZ = [0], this.aAa = [0], aAb = 0, this.aAU = aAU, this.wC = ""
	}, this.jf = function(id, aS, aU, aW) {
		hD || 2 === g1 || (0 === this.aAZ[aAb] && (this.aAa[aAb] ? (this.aAZ.push(1), this.aAa.push(0), aAb++) : this.aAZ[aAb] = 1), this.aAV.push(id), this.aAW.push(aS), this.aAX.push(void 0 === aU ? 0 : aU), this.aAY.push(void 0 === aW ? 0 :
			aW), this.aAa[aAb]++)
	}, this.eY = function() {
		0 === this.aAZ[aAb] ? this.aAa[aAb]++ : (this.aAZ.push(0), this.aAa.push(0), aAb++)
	}
}

function aAT() {
	function aAh(j) {
		0 === g1 ? pq.a0f(3605) : fR.st(j)
	}
	this.kZ = function(j) {
		if (kg.kS(kg.kP(kg.kO(j))), ! function() {
				if (jX.dt < 10) aAh("File Too Small");
				else if (jX.jY(9) !== a7R) aAh("Game Version Error");
				else if (jX.jY(31) !== jX.dt) aAh("Size Error");
				else {
					if (function(eH) {
							var a2, bP = jX.jW,
								bH = jX.dt,
								a4A = 0;
							for (a2 = 7; a2 < bH; a2++) a4A = a4A + bP[a2] & 65535;
							return a4A === eH
						}(jX.jY(16))) return 1;
					aAh("Hash Error")
				}
				return
			}()) return !1;
		(aAU = {}).pR = jX.jY(9), aAU.pQ = jX.jY(14), aAU.pS = jX.jY(4), aAU.pT = 1 === jX.jY(1), aAU.a27 = jX.jY(6), aAU.a28 = jX.jY(14), aAU.aAj = jX.jY(10), fr.je.aAU = aAU,
			function() {
				var a2, a2f, a2e, name, bH = fr.je.aAU.aAj,
					mD = [];
				for (a2 = 0; a2 < bH; a2++) a2f = jX.jY(1), a2e = [jX.jY(6), jX.jY(6), jX.jY(6)], name = jX.aAk(jX.jY(5)), mD.push({
					name: name,
					a2e: a2e,
					a2f: a2f
				});
				if (fr.je.aAU.mD = mD, 8 === fr.je.aAU.pS)
					for (a2 = 0; a2 < bH; a2++) mD[a2].mH = jX.jY(14)
			}(),
			function() {
				var a2, bH, aAl = fr.je.aAU;
				if (1 === aAl.mD.length)
					for (bH = 6 < aAl.pS ? 1 : aAl.pS + 2, aAl.a2V = new Array(bH), aAl.a2W = new Array(bH), a2 = 0; a2 < bH; a2++) aAl.a2V[a2] = jX.jY(3), aAl.a2W[a2] = jX.jY(9) + 1
			}(), aAU = jX.jY(5), aAm = jX.jY(30), aAn = jX.jY(30);
		var aAU, aAm, aAn, a2, id, bH = aAm,
			aAq = new Uint8Array(bH),
			aAr = new Uint16Array(bH),
			aAs = new Uint32Array(bH),
			aAt = new Uint32Array(bH);
		for (fr.je.aAV = aAq, fr.je.aAW = aAr, fr.je.aAX = aAs, fr.je.aAY = aAt, a2 = 0; a2 < bH; a2++) aAq[a2] = id = jX.jY(4), aAr[a2] = jX.jY(9), 0 === id ? aAs[a2] = jX.jY(22) : 1 === id ? (aAs[a2] = jX.jY(10), aAt[a2] = jX.jY(10)) : 2 ===
			id ? (aAs[a2] = jX.jY(10), aAt[a2] = jX.jY(9)) : 3 === id || 4 === id ? (aAs[a2] = jX.jY(10), aAt[a2] = jX.jY(22)) : 5 === id ? aAs[a2] = jX.jY(10) : 6 === id ? aAs[a2] = jX.jY(7) : 7 === id && (aAs[a2] = jX.jY(1));
		return function(bH, ka) {
			var a2, aAZ = new Uint8Array(bH),
				aAa = new Array(bH);
			for (aAa.fill(0), fr.je.aAZ = aAZ, fr.je.aAa = aAa, a2 = 0; a2 < bH; a2++) aAZ[a2] = jX.jY(1), aAa[a2] = jX.jY(ka)
		}(aAn, aAU), jX.c8 < 8 * jX.dt - 13 || jX.c8 > 8 * jX.dt ? (aAh("Out Of Bounds Error: " + jX.c8 + " " + 8 * jX.dt), !1) : (fr.je.wC = j, !0)
	}
}

function aAS() {
	this.me = function() {
		var aAl, ka = function() {
				var a2, aAa = fr.je.aAa,
					bH = aAa.length,
					max = 0;
				for (a2 = 0; a2 < bH; a2++) max = Math.max(max, aAa[a2]);
				return ki(Math.max(max, 1))
			}(),
			aAv = function(ka) {
				return 179 + function() {
					var a2, mD = fr.je.aAU.mD,
						bH = mD.length,
						aAv = 24 * bH;
					for (a2 = 0; a2 < bH; a2++) aAv += 10 * k.me(mD[a2].name).length;
					8 === fr.je.aAU.pS && (aAv += 14 * bH);
					return aAv
				}() + (1 === fr.je.aAU.mD.length ? 12 * fr.je.aAU.a2V.length : 0) + function() {
					var a2, aAV = fr.je.aAV,
						bH = aAV.length,
						aAv = 13 * bH,
						aB9 = [22, 20, 19, 32, 32, 10, 7, 1, 0, 0];
					for (a2 = 0; a2 < bH; a2++) aAv += aB9[aAV[a2]];
					return aAv
				}() + function(ka) {
					return fr.je.aAa.length * (1 + ka)
				}(ka)
			}(ka);
		kU.kV(aAv + (6 - aAv % 6) % 6), aAl = fr.je.aAU, kU.kW(9, a7R), kU.kW(31, kU.dt), kU.c8 += 16, kU.kW(9, aAl.pR), kU.kW(14, aAl.pQ), kU.kW(4, aAl.pS), kU.kW(1, aAl.pT), kU.kW(6, aAl.a27), kU.kW(14, aAl.a28), kU.kW(10, aAl.mD.length);
		var a2, e8, aB3, aB4, mD = fr.je.aAU.mD,
			bH = mD.length;
		for (a2 = 0; a2 < bH; a2++)
			for (kU.kW(1, mD[a2].a2f), kU.kW(18, (mD[a2].a2e[0] << 12) + (mD[a2].a2e[1] << 6) + mD[a2].a2e[2]), aB3 = k.me(mD[a2].name), aB4 = aB3.length, kU.kW(5, aB4), e8 = 0; e8 < aB4; e8++) kU.kW(10, aB3[e8]);
		if (8 === fr.je.aAU.pS)
			for (a2 = 0; a2 < bH; a2++) kU.kW(14, mD[a2].mH);
		return function() {
				var a2, aAl = fr.je.aAU;
				if (1 === aAl.mD.length)
					for (a2 = 0; a2 < aAl.a2V.length; a2++) kU.kW(3, aAl.a2V[a2]), kU.kW(9, aAl.a2W[a2] - 1)
			}(),
			function(ka) {
				var a2, aAV = fr.je.aAV,
					aS = fr.je.aAW,
					aU = fr.je.aAX,
					aW = fr.je.aAY,
					bH = aAV.length;
				for (kU.kW(5, ka), kU.kW(30, bH), kU.kW(30, fr.je.aAa.length), a2 = 0; a2 < bH; a2++) kU.kW(4, aAV[a2]), kU.kW(9, aS[a2]), 0 === aAV[a2] ? kU.kW(22, aU[a2]) : 1 === aAV[a2] ? (kU.kW(10, aU[a2]), kU.kW(10, aW[a2])) : 2 === aAV[
					a2] ? (kU.kW(10, aU[a2]), kU.kW(9, aW[a2])) : 3 === aAV[a2] || 4 === aAV[a2] ? (kU.kW(10, aU[a2]), kU.kW(22, aW[a2])) : 5 === aAV[a2] ? kU.kW(10, aU[a2]) : 6 === aAV[a2] ? kU.kW(7, aU[a2]) : 7 === aAV[a2] && kU.kW(1, aU[a2])
			}(ka),
			function(ka) {
				var a2, aAZ = fr.je.aAZ,
					aAa = fr.je.aAa,
					bH = aAZ.length;
				for (a2 = 0; a2 < bH; a2++) kU.kW(1, aAZ[a2]), kU.kW(ka, aAa[a2])
			}(ka), kU.c8 !== aAv && fR.st("Encoder Index Error: " + kU.c8 + " " + aAv), kU.c8 = 40, kU.kW(16, function() {
				var a2, bP = kU.jW,
					bH = kU.dt,
					a4A = 0;
				for (a2 = 7; a2 < bH; a2++) a4A = a4A + bP[a2] & 65535;
				return a4A
			}()), jX.c5(kU.jW), pz.mR(pz.mP(b6(aAv - 1, 6) + 1))
	}
}

function qk() {
	var eo, tP = !1,
		aBA = !1,
		aBB = -1e4;

	function resize(cp) {
		eo = 0, cC.cD() && (aBC(cp) || tP) && (tP = !1, uQ(), zQ.c5(), po.c5(), oN.resize(), a10.c5(), pp.resize(), oD.resize(), pn.resize(), a0p.resize(), cR.resize(), a3.c5(), 1 <= g1 ? (fh.resize(!1), fk.resize(), fT.resize(), hH.resize(), fn
			.resize(), fR.resize(), m0.resize(), kA.resize(), fw.resize(), fo.resize(), fl.resize(), cH.resize(), m1.resize(), m2.resize(), fS.resize(), fu.resize(), fp.resize(), hH.wU()) : (2 === aH.oP() ? fI.resize() : 3 === aH.oP() && pq
			.resize(), aH.a0x(), aH.a11()), aA.cJ = !0)
	}

	function aBD(aF) {
		return aF && 128 < aF ? Math.floor(aF) : 128
	}

	function aBC(cp) {
		var m9, tX, tY;
		return od.a9m(), m9 = aBD(document.documentElement.clientWidth), tX = window.visualViewport ? aBD(window.visualViewport.height) : aBD(document.documentElement.clientHeight), cp && !aBA ? (aBA = !0, document.body.removeChild(nh)) : aBA && (
			aBA = !1, document.body.appendChild(nh)), cp = Math.floor(.5 + kE * m9), tY = Math.floor(.5 + kE * tX), !(cp === gg && tY === cP || o7.oc() && (oN.k9 || kA.k9)) && (gg = p = cp, cP = q = tY, uS = va(p, q), c6 = b6(q + p, 2), nh
			.width = cp, nh.height = tY, nh.style.width = m9 + "px", nh.style.height = tX + "px", 1)
	}
	this.c5 = function() {
		p = q = uS = gg = cP = c6 = 0, kE = eo = 1, nh = document.getElementById("canvasA"), (cV = nh.getContext("2d", {
			alpha: !1
		})).imageSmoothingEnabled = !1, aBC(0)
	}, this.eY = function() {
		px.eY(), 50 <= ++eo && resize(0)
	}, this.a2n = function(cp) {
		tP = !0, resize(cp)
	}, this.oe = function() {
		aBB + 1e3 > aA.aB || (aBB = aA.aB, resize(0))
	}, this.a9m = function() {
		var aBE = window.devicePixelRatio || 1,
			a2 = gm.gn.a9k;
		return (kE = a2 < 3 ? .5 + .25 * a2 : (.5 + .125 * (a2 - 3)) * aBE) / aBE
	}
}

function qe() {
	var player, dq, l1, kv, gd, ge, gf, gh, c8, aBF, id;

	function aBL() {
		var dp;
		if (bJ.bU(l1)) dp = bM;
		else {
			if ((dp = bJ.bT(l1)) === player) return void aBN(!0);
			if (!e3(player, dp)) return function(dp) {
				var max = bi[dp] * p2 - bB[dp];
				max <= 0 || (dq -= max = max < dq ? max : dq, player === bA && (fR.jD(max, 0, dp), bE.bF[16] += max), dp === bA && (fR.tG(max, player), bE.bF[10] += max), bB[dp] += max, fS.jE(dp, max))
			}(dp), void aBN(!0)
		}
		player === bA && (bE.bF[13] += dq), fe.b9(player, id), as.bG(player, aBF), bI[player].push(kv), as.dl(player, dq, dp), b8.dm(player, !0)
	}

	function aBN(aBQ) {
		fe.b9(player, id), as.bG(player, aBF), aBQ && (bB[player] += dq)
	}

	function aBH() {
		bJ.a3u(l1, player) && bJ.a3w(l1)
	}

	function aBG(a2, a5K, vD, dz, hW) {
		if (c8 = a2, id = a5K, player = vD, gd = bJ.gi(dz), ge = bJ.cT(dz), gf = bJ.gi(hW), gh = bJ.cT(hW), kv = l1 = bJ.lX(gd, ge), -1 !== (aBF = as.gl(player, id))) return dq = as.b0(player, aBF), 1;
		aBH(), fe.b9(player, id)
	}
	this.eY = function(a2, id, vD, dz, hW) {
		aBG(a2, id, vD, dz, hW) && (aBH(), function() {
			var aBR = b6(dq, 128);
			dq -= aBR = aBR < 1 ? 1 : aBR, player === bA && (bE.bF[15] += aBR);
			if (dq <= b7) return player === bA && (bE.bF[15] += dq), void aBN(!1);
			return as.bh(player, aBF, dq), 1
		}()) && (a2 = bJ.lX(gd, ge), l1 = Math.abs(gf - gd) >= Math.abs(gh - ge) ? a2 + aj[gd < gf ? 1 : 3] : a2 + aj[ge < gh ? 2 : 0], gd = bJ.gi(l1), ge = bJ.cT(l1), fe.gQ(c8, l1), ! function() {
			if (bJ.bK(l1)) return;
			return 1
		}() ? aBL() : bJ.rf(l1) && bJ.a3z(l1, player))
	}, this.gU = function(vD, dz) {
		player = vD, l1 = bJ.lX(bJ.gi(dz), bJ.cT(dz)), aBH()
	}
}

function qf() {
	var aBS, aBT, rf, aBU;
	this.c5 = function() {
		var a2, gY, gZ, a2e, aBV, cG, eH, hi, a3G, kt, aF, bP, eP, dx, aBY;
		if (function() {
				if (rf = !0, aBU = "rgb(" + kq[0] + "," + kq[1] + "," + kq[2] + ")", a7x(lD)) return 1;
				return rf = !1, 0
			}()) aBT = null;
		else {
			for (aBS = b6(96, 4), aBV = 1 === lD ? (a2e = 0, 160) : (a2e = 128, 32), aBU = "rgb(" + a2e + "," + a2e + "," + a2e + ")", aBT = new Array(4), a2 = 3; 0 <= a2; a2--) {
				if (aBT[a2] = document.createElement("canvas"), cG = a2 % 2 == 0 ? an : aBS, eH = a2 % 2 == 0 ? aBS : ao + 2 * aBS, aBT[a2].width = cG, aBT[a2].height = eH, kt = (a3G = (hi = aBT[a2].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, cG, eH)).data, a2 % 2 == 0)
					for (gZ = aBS - 1; 0 <= gZ; gZ--)
						for (aF = aBV + Math.floor((gZ + 1) * (a2e - aBV) / (aBS + 1)), gY = cG - 1; 0 <= gY; gY--) kt[bP = 4 * ((0 === a2 ? aBS - gZ - 1 : gZ) * cG + gY)] = aF, kt[bP + 1] = aF, kt[bP + 2] = aF, kt[bP + 3] = 255;
				else {
					for (gY = aBS - 1; 0 <= gY; gY--)
						for (aF = aBV + Math.floor((gY + 1) * (a2e - aBV) / (aBS + 1)), gZ = eH - 1 - aBS; aBS <= gZ; gZ--) kt[bP = 4 * (gZ * cG + (3 === a2 ? aBS - gY - 1 : gY))] = aF, kt[bP + 1] = aF, kt[bP + 2] = aF, kt[bP + 3] = 255;
					for (dx = 1; 0 <= dx; dx--)
						for (gY = aBS - 1; 0 <= gY; gY--)
							for (gZ = aBS - 1; 0 <= gZ; gZ--) eP = (Math.pow(gY * gY + gZ * gZ, .5) + 1) / (aBS + 1), aF = aBV + Math.floor((1 < eP ? 1 : eP) * (a2e - aBV)), kt[bP = 4 * ((0 === dx ? aBS - gZ - 1 : gZ + dx * (eH - aBS)) * cG + (
								1 === a2 ? gY : aBS - gY - 1))] = aF, kt[bP + 1] = aF, kt[bP + 2] = aF, kt[bP + 3] = 255
				}
				hi.putImageData(a3G, 0, 0)
			}
			aBY = aBV, kl.fillStyle = "rgb(" + aBY + "," + aBY + "," + aBY + ")", kl.fillRect(0, 0, an, 1), kl.fillRect(0, ao - 1, an, 1), kl.fillRect(0, 0, 1, ao), kl.fillRect(an - 1, 0, 1, ao)
		}
	}, this.lx = function() {
		var dx = rf ? 0 : -aBS;
		a9W(dx, dx, an - 2 * dx, ao - 2 * dx, hU.aBZ, hU.aBa, hU.aBb, hU.aBc) || (cV.fillStyle = aBU, cV.fillRect(0, 0, gg, cP))
	}, this.cU = function() {
		rf || (a9V(0, -aBS, an, aBS, hU.aBZ, hU.aBa, hU.aBb, hU.aBc) && cV.drawImage(aBT[0], hU.aBd, hU.aBe - aBS), a9V(an, -aBS, aBS, ao + 2 * aBS, hU.aBZ, hU.aBa, hU.aBb, hU.aBc) && cV.drawImage(aBT[1], hU.aBd + an, hU.aBe - aBS), a9V(0, ao,
			an, aBS, hU.aBZ, hU.aBa, hU.aBb, hU.aBc) && cV.drawImage(aBT[2], hU.aBd, hU.aBe + ao), a9V(-aBS, -aBS, aBS, ao + 2 * aBS, hU.aBZ, hU.aBa, hU.aBb, hU.aBc) && cV.drawImage(aBT[3], hU.aBd - aBS, hU.aBe - aBS))
	}
}

function r4() {
	this.ir = new aBf, this.a4N = new aBg, this.ly = new aBh, this.ff = new aBi, this.dZ = new aBj, this.aBY = new aBk, this.aBl = new aBm, this.eX = new aBn, this.jr = new aBo, this.c5 = function() {
		this.ly.c5(), this.ff.c5(), this.dZ.c5(), this.aBY.c5()
	}
}

function aBn() {
	function aBu(player, dz, aBw, aBx) {
		for (var gd, ge, cG, eH, mj, aBy, gf, gh, bH = dz + aBx, a2 = dz; a2 < bH; a2 += aBw)
			if (gd = (gd = eL[player] - a2) < 1 ? 1 : gd, ge = eO[player] - a2, gf = eK[player] + a2, gf = an - 1 <= gf ? an - 2 : gf, gh = eN[player] + a2, eH = (gh = ao - 1 <= gh ? ao - 2 : gh) - (ge = ge < 1 ? 1 : ge), gf = (mj = b6(e0.random() *
					(2 * (gf - gd + gh - ge)), e0.value(100))) <= (cG = gf - gd) ? (aBy = gd + mj, ge) : mj <= cG + eH ? (aBy = gf, ge + mj - cG) : mj <= 2 * cG + eH ? (aBy = gd + mj - cG - eH, gh) : (aBy = gd, ge + mj - 2 * cG - eH), aBv(player,
					gh = bJ.lX(aBy, gf))) return gh;
		return -1
	}

	function aBv(oy, bQ) {
		return bJ.bK(bQ) && (bJ.bU(bQ) || oy !== (bQ = bJ.bT(bQ)) && e3(oy, bQ) && 0 < bb[bQ].length)
	}
	this.eY = function(player) {
		return !(0 === bb[player].length || bB[player] < 100) && dY.ff.jn !== dY.ff.jo && (dY.ff.jp[player] !== dY.ff.jq && hh.iY.ji(player, 203, 32, 16) ? !! function(player) {
			var bQ = function(player) {
				var a2, lb, la, gd = eL[player],
					ge = eO[player],
					d7 = eK[player] - gd + 1,
					dA = eN[player] - ge + 1,
					aF = e0.value(100);
				for (a2 = 0; a2 < 32; a2++)
					if (lb = gd + bx.by(e0.random() * d7, aF), la = ge + bx.by(e0.random() * dA, aF), lb = bJ.lX(lb, la), aBv(player, lb)) return lb;
				return -1
			}(player);
			if (0 <= bQ) return dY.jr.js(player, bQ >> 2);
			if (0 <= (bQ = aBu(player, 1, 4, 40))) return dY.jr.js(player, bQ >> 2);
			if (0 <= (bQ = aBu(player, 40, 8, 200))) return dY.jr.js(player, bQ >> 2);
			return
		}(player) && !! function(oy) {
			if (0 === de.aO[2]) return void console.log("error 325234");
			var aBs = de.aO[1] + jd.cb[de.aO[2] - 1] << 2;
			if (bJ.bU(aBs)) return 1;
			return aBs = bJ.bT(aBs), oy !== aBs && !!e3(oy, aBs)
		}(player) && function(player) {
			return hh.iY.jk(player), dY.ff.jt(player), !0
		}(player) : void 0)
	}
}

function aBf() {
	function aC1(aC0) {
		var aCE = 4 + .03 * (1 + 1.5 * o) * c6 / dM;
		return jd.dD(aC0, de.aO[1]) < aCE
	}
	this.is = function(player, aC0) {
		return !!jd.dS(aC0) && dY.ff.jn !== dY.ff.jo && dY.ff.jp[player] !== dY.ff.jq && 0 !== bb[player].length && !!dY.jr.js(player, aC0) && !!aC1(aC0)
	}, this.iw = function(player, iv, aC0) {
		return !!(jd.dS(aC0) && this.ju(player, iv) && dY.jr.jv(aC0) && aC1(aC0))
	}, this.ju = function(player, id) {
		for (var aC2, aC3 = player << 3, aC4 = aC3 + dY.ff.jp[player], aC5 = dY.ff.aC5, aC6 = dY.ff.aC6, a2 = aC3; a2 < aC4; a2++)
			if (id === aC6[aC2 = aC5[a2]]) return de.aO[3] = aC2, !0;
		return !1
	}, this.iu = function(cr) {
		var aC7 = dY.aBY.aC7;
		return dY.aBY.aC7 = -1, !!this.ju(bA, aC7) && (et.iW.iu(aC7, cr), !0)
	}, this.rb = function(cM, cN) {
		var a2, aC4, aC8, aC5, aC9, aCA, aCB, eP, sz, aCC, player = bA,
			bH = dY.ff.jp[player];
		if (0 === bH) return !1;
		for (aC5 = dY.ff.aC5, aCA = dY.ff.aCA, sz = dY.ff.sz, aC4 = (player = player << 3) + bH, aC9 = .4 * hh.hi.k3() * c6 / dM, aC8 = -1, a2 = player; a2 < aC4; a2++) aCC = aC5[a2], aCB = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(sz[aCC]))), (
			eP = jd.d3(cM, cN, aCA[aCC])) - aCB < aC9 && (aC9 = eP, aC8 = aCC);
		return !(aC8 < 0 || (dY.aBY.aC7 = dY.ff.aC6[aC8], 0))
	}, this.rp = function(cM, cN) {
		var a2, aC8, aC9, aCA, aCB, eP, sz, bH = dY.ff.jn;
		if (bH < 1) return -1;
		for (aCA = dY.ff.aCA, sz = dY.ff.sz, aC9 = 1e3, aC8 = -1, a2 = 0; a2 < bH; a2++) aCB = 16 * hh.hi.k3() * (.625 + .125 * Math.sqrt(Math.sqrt(sz[a2]))), (eP = jd.d3(cM, cN, aCA[a2])) < aC9 && eP < aCB && (aC9 = eP, aC8 = a2);
		return aC8
	}, this.aCD = function(cM, cN) {
		var a2, aC4, aC8, aC5, aC9, aCA, aCB, eP, sz, aCC, player = bA,
			bH = dY.ff.jp[player];
		if (0 === bH) return -1;
		for (aC5 = dY.ff.aC5, aCA = dY.ff.aCA, sz = dY.ff.sz, aC4 = (player = player << 3) + bH, aC9 = .4 * hh.hi.k3() * c6 / dM, aC8 = -1, a2 = player; a2 < aC4; a2++) aCC = aC5[a2], aCB = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(sz[aCC]))), (
			eP = jd.d3(cM, cN, aCA[aCC])) - aCB < aC9 && (aC9 = eP, aC8 = aCC);
		return aC8 < 0 ? -1 : dY.ff.aC6[aC8]
	}
}

function aBg() {
	this.a4O = function(player) {
		for (var aC5 = dY.ff.aC5, aC3 = player << 3, a2 = aC3 + dY.ff.jp[player] - 1; aC3 <= a2; a2--) this.aCF(aC5[a2])
	}, this.aCF = function(aCG) {
		var ff = dY.ff,
			aCH = ff.jn - 1,
			aCI = ff.sy[aCG],
			aCJ = ff.aCK[aCG],
			aCL = ff.aCA[aCG];
		ff.jn = aCH, ff.sy[aCG] = ff.sy[aCH], ff.aCM[aCG] = ff.aCM[aCH], ff.aCN[aCG] = ff.aCN[aCH], ff.aCA[aCG] = ff.aCA[aCH], ff.aCO[aCG] = ff.aCO[aCH], ff.sz[aCG] = ff.sz[aCH], ff.aCK[aCG] = ff.aCK[aCH], ff.aC6[aCG] = ff.aC6[aCH], ff.aCP[aCG] =
			ff.aCP[aCH], ff.aC5[ff.sy[aCG]] = aCG,
			function(a1z) {
				var player = a1z >> 3,
					ff = dY.ff,
					bH = ff.jp[player] - 1,
					aCS = (player << 3) + bH;
				ff.jp[player] = bH, aCS !== a1z && (ff.aC5[a1z] = ff.aC5[aCS], ff.sy[ff.aC5[a1z]] = a1z)
			}(aCI), dY.dZ.dZ[jd.dX(ff.aCA[aCG])][ff.aCK[aCG]] = aCG, aCH = jd.dX(aCL), aCI = aCJ, aCH = dY.dZ.dZ[aCH], ff = aCH.pop(), aCI !== aCH.length && (aCH[aCI] = ff, dY.ff.aCK[ff] = aCI)
	}
}

function aBh() {
	var aCV, aCW = 8,
		aCX = new Array(2);

	function aCY(c8) {
		var m7 = aCW + 4,
			rJ = hh.hi.kh(m7, m7),
			ox = hh.hi.getContext(rJ, !0),
			a3G = hh.hi.getImageData(ox, m7, m7),
			kt = a3G.data;
		return aCZ(kt, m7 + 1, c8), aCZ(kt, m7 + 2, c8), aCZ(kt, 2 * m7 + 1, c8), aCZ(kt, 2 * m7 - 3, c8), aCZ(kt, 2 * m7 - 2, c8), aCZ(kt, 3 * m7 - 2, c8), aCZ(kt, m7 * (m7 - 3) + 1, c8), aCZ(kt, m7 * (m7 - 2) + 1, c8), aCZ(kt, m7 * (m7 - 2) + 2,
			c8), aCZ(kt, m7 * (m7 - 2) - 2, c8), aCZ(kt, m7 * (m7 - 1) - 3, c8), aCZ(kt, m7 * (m7 - 1) - 2, c8), ox.putImageData(a3G, 0, 0), rJ
	}

	function aCZ(kt, cr, c8) {
		cr *= 4;
		kt[cr] = 255, kt[1 + cr] = 255, kt[2 + cr] = c8, kt[3 + cr] = 255
	}

	function kh(player) {
		var aCa = aCW >> 1,
			rJ = hh.hi.kh(aCW, aCW);
		return function(ox, player, gY, gZ) {
			var d7, cr, aCc, a20, m7 = aCW,
				a3G = hh.hi.getImageData(ox, m7, m7),
				kt = a3G.data,
				kb = (m7 >> 1) - .5,
				aBU = bJ.a3o(player),
				aCe = hh.kr.ol(aBU, .5);
			hh.kr.om(aBU, aCe, 300) || hh.kr.oo(aBU, 100);
			for (gZ = 0; gZ < m7; gZ++)
				for (gY = 0; gY < m7; gY++) a20 = (m7 - 1.5) * (m7 - 1.5) / 4, aCc = (d7 = (d7 = gY - kb) * d7 + (d7 = gZ - kb) * d7) <= (m7 - 4.5) * (m7 - 4.5) / 4 ? aCe : aBU, kt[cr = 4 * (gZ * m7 + gY)] = aCc[0], kt[1 + cr] = aCc[1], kt[2 +
					cr] = aCc[2], kt[3 + cr] = a20 < d7 ? 0 : 255;
			ox.putImageData(a3G, 0, 0)
		}(hh.hi.getContext(rJ, !0), player, aCa, aCa), rJ
	}
	this.c5 = function() {
		aCV = new Array(bM), aCX[0] = aCY(255), aCX[1] = aCY(0)
	}, this.cU = function() {
		var a2, player, aCf, dq, aCg, d6, aCk, aCm, aCn, aCA = dY.ff.aCA,
			sy = dY.ff.sy,
			sz = dY.ff.sz,
			aCo = aCV,
			aCp = bA,
			aCq = -1,
			bH = dY.ff.jn,
			aCr = gg,
			aCs = cP,
			aCt = an << 4,
			aCu = dM,
			d0 = aCu / aCW,
			gd = dL / aCu,
			ge = dN / aCu,
			d7 = (aCr + dL) / aCu - gd,
			dA = (aCs + dN) / aCu - ge,
			ox = cV;
		for (dY.ir.ju(bA, dY.aBY.aC7) && (aCq = de.aO[3]), ox.fillStyle = cY.cZ, a2 = 0; a2 < bH; a2++) player = sy[a2] >> 3, dq = sz[a2], aCf = .625 + .125 * Math.sqrt(Math.sqrt(dq)), aCg = (d6 = aCA[a2]) % aCt / 16 - aCf, d6 = aCs * (Math
			.floor(d6 / aCt) / 16 - aCf - ge) / dA, aCk = -2 * (aCn = aCu * aCf) * (1 + (aCm = +(player === aCp)) / 8), aCm = aCm * aCn / 4, (aCn = aCr * (aCg - gd) / d7) < aCk || d6 < aCk || aCr + aCm < aCn || aCs + aCm < d6 || (aCg = aCf *
			aCu, ox.imageSmoothingEnabled = (aCk = 2 * aCf * d0) < 3, void 0 === (aCm = aCo[player]) && (aCo[player] = aCm = kh(player)), player === aCp && (ox.setTransform(aCk, 0, 0, aCk, aCn - 2 * aCk, d6 - 2 * aCk), ox.drawImage(aCX[+(
				a2 === aCq)], 0, 0)), ox.setTransform(aCk, 0, 0, aCk, aCn, d6), ox.drawImage(aCm, 0, 0), (aCf = Math.floor(function(dq) {
				if (dq < 1e3) return .42;
				if (dq < 1e4) return .34;
				if (dq < 1e6) return .26;
				if (dq < 1e8) return .19;
				return .15
			}(dq) * aCg)) < 6) || (ox.setTransform(1, 0, 0, 1, 0, 0), 20 <= aCf ? (ox.font = hh.hi.kD(.85 * aCf, 1), ox.fillText(fl.gp(dq), aCn + aCg, d6 + .93 * aCg + .085 * aCf), (aCf *= fS.a6G(player)) < 6 || (ox.font = hh.hi.kD(aCf, 1),
			ox.fillText(gq[player], aCn + aCg, d6 + 1.16 * aCg + .1 * aCf))) : (ox.font = hh.hi.kD(aCf, 1), ox.fillText(fl.gp(dq), aCn + aCg, d6 + aCg + .1 * aCf)));
		ox.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aBm() {
	this.eY = function() {
		for (var aCw, aBl, aCP = dY.ff.aCP, aCA = dY.ff.aCA, aCN = dY.ff.aCN, a2 = dY.ff.jn - 1; 0 <= a2; a2--) aCw = aCA[a2], 0 !== (aBl = aCP[a2]) && aCw === aCN[a2] && (! function(a2, aCy, co) {
			var dp, player = dY.ff.sy[a2] >> 3,
				co = aCy + jd.cb[co] << 2,
				a2 = dY.ff.sz[a2];
			if (bJ.bU(co)) dp = bM;
			else {
				if ((dp = bJ.bT(co)) === player) return hh.iY.jC(player, a2);
				if (!e3(player, dp)) return et.eu.jA(player, dp, a2)
			}
			player === bA && (bE.bF[13] += a2);
			bI[player].push(aCy << 2), as.dl(player, a2, dp), b8.dm(player, !0)
		}(a2, jd.dW(aCw), aBl - 1), dY.a4N.aCF(a2))
	}
}

function aBi() {
	this.aCz = null, this.jo = 512, this.jq = 8, this.jn = 0, this.gL = 0, this.sy = new Uint16Array(this.jo), this.aCM = new Uint32Array(this.jo), this.aCN = new Uint32Array(this.jo), this.aCA = new Uint32Array(this.jo), this.aCO = new Uint16Array(
			this.jo), this.sz = new Uint32Array(this.jo), this.aCK = new Uint16Array(this.jo), this.aC6 = new Uint16Array(this.jo), this.aCP = new Uint8Array(this.jo), this.jp = new Uint8Array(bM), this.aC5 = new Uint16Array(this.jq * bM), this.c5 =
		function() {
			this.gL = 0, this.jn = 0, this.aCz = new Uint8Array(an + ao), this.jp.fill(0)
		}, this.jt = function(player) {
			var bH = this.jn,
				aD0 = jd.dV(de.aO[0]),
				aB4 = this.jp[player],
				aD1 = (player << 3) + aB4;
			dG[player] = 2, this.sy[bH] = aD1, this.aCM[bH] = aD0, this.aCA[bH] = aD0, this.aCN[bH] = jd.dV(de.aO[1]), this.aCO[bH] = 0, this.sz[bH] = de.aL[0], this.aCK[bH] = dY.dZ.jt(bH, jd.dX(aD0)), this.aC6[bH] = this.gL, this.aCP[bH] = de.aO[2],
				this.gL = this.gL + 1 & 1023, this.aC5[aD1] = bH, this.jp[player] = aB4 + 1, this.jn++
		}, this.iu = function() {
			var aC2 = de.aO[3];
			this.aCM[aC2] = this.aCA[aC2], this.aCN[aC2] = jd.dV(de.aO[1]), this.aCO[aC2] = 0, this.aCP[aC2] = de.aO[2]
		}, this.eY = function() {
			if (aA.en() % 5 == 3) {
				dY.aBl.eY(), ! function(rv) {
					var a2, aD5, aD6, aD7, aD8, aD0, aDC, aDD, bR, bQ, aCM = rv.aCM,
						aCN = rv.aCN,
						aCA = rv.aCA,
						sz = rv.sz,
						aCO = rv.aCO,
						aCK = rv.aCK,
						rv = rv.jn,
						aCt = an << 4;
					for (a2 = rv - 1; 0 <= a2; a2--) aD6 = aCA[a2], aD5 = aCN[a2], aD6 !== aD5 && (aD0 = aCM[a2], aDC = aD5 % aCt - (aD8 = aD0 % aCt), aDD = ~~((aD5 + .5) / aCt) - (aD0 = ~~((aD0 + .5) / aCt)), bR = ~~Math.sqrt(aDC * aDC + aDD *
						aDD + .5), bQ = 4e5 + 2e4 * ~~Math.sqrt(.5 + (Math.sqrt(sz[a2] + .5) << 4)), 65535 <= (bQ = aCO[a2] + Math.max(~~((.5 + bQ) / bR), 1)) ? aCA[a2] = aD7 = aD5 : (aCO[a2] = bQ, aCA[a2] = aD7 = aD8 + bx.by(bQ * aDC,
						65536) + aCt * (aD0 + bx.by(bQ * aDD, 65536))), aCK[a2] = dY.dZ.aDF(aCK[a2], aD6, aD7))
				}(this), ! function(rv) {
					var a2, l6, kb, e8, eo, aDG, aDH, aDI, l1, cg, gd, ge, aDJ, aC9, aDK, l2, aD0, aDN, bH = rv.jn,
						aCA = rv.aCA,
						sy = rv.sy,
						sz = rv.sz,
						dZ = dY.dZ.dZ,
						aDO = dZ.length,
						aDP = dY.dZ.aDP,
						aCt = an << 4,
						aDQ = di,
						aDR = ep.eq,
						bQ = (bH - 1) * (aA.en() % 2);
					for (a2 = 0; a2 < bH; a2++) {
						for (l6 = Math.abs(a2 - bQ), aD0 = aCA[l6], kb = jd.dX(aD0), l1 = sy[l6] >> 3, gd = aD0 % aCt, ge = ~~((aD0 + .5) / aCt), aD0 = sz[l6], aDN = 80 + ~~Math.sqrt(.5 + (Math.sqrt(aD0 + .5) << 8)), aC9 = Math.min(aDN * aDN,
								262144), aDK = -1, e8 = 0; e8 < 9; e8++)
							if (!((aDG = kb + aDP[e8]) < 0 || aDO <= aDG))
								for (aDI = dZ[aDG], aDH = aDI.length, eo = 0; eo < aDH; eo++) aDJ = aDI[eo], l2 = sy[aDJ] >> 3, l1 == l2 || aDQ && aDR[l1] === aDR[l2] || (l2 = aCA[aDJ], (l2 = (cg = gd - l2 % aCt) * cg + (cg = ge - ~~((l2 + .5) /
									aCt)) * cg) < aC9 && (aDK = aDJ, aC9 = l2)); - 1 !== aDK && (aD0 = Math.min(Math.max(1, bx.by(aD0 * (aDN - Math.floor(Math.sqrt(aC9 + .5))), 5 * aDN)), sz[aDK]), sz[l6] -= aD0 >> 4, sz[aDK] -= aD0)
					}
				}(this);
				var a2, dq, sz = (rv = this).sz,
					rv = rv.jn;
				for (a2 = rv - 1; 0 <= a2; a2--) dq = sz[a2], 0 < (dq -= Math.max(1, dq >> 7)) ? sz[a2] = dq : dY.a4N.aCF(a2)
			}
		}
}

function aBj() {
	this.aDS = 32, this.gY = 0, this.gZ = 0, this.da = 0, this.aDT = 0, this.aDU = 4, this.dZ = null, this.aDP = new Int16Array(9), this.c5 = function() {
		this.da = 1 + bx.by(an - 1, this.aDS), this.aDT = 1 + bx.by(ao - 1, this.aDS), this.dZ = new Array(this.da * this.aDT), hh.kr.ok(this.dZ);
		var gY, gZ, aDP = this.aDP,
			cG = this.da;
		for (gY = -1; gY <= 1; gY++)
			for (gZ = -1; gZ <= 1; gZ++) aDP[3 * (1 + gZ) + 1 + gY] = gZ * cG + gY
	}, this.jt = function(aDW, a2) {
		return this.dZ[a2].push(aDW), this.dZ[a2].length - 1
	}, this.aDF = function(aDX, aD0, aD5) {
		var aDY, aDZ, aD0 = jd.dX(aD0),
			aD5 = jd.dX(aD5);
		return aD0 === aD5 ? aDX : (aDY = this.dZ[aD0].pop(), this.dZ[aD0].length === aDX ? this.jt(aDY, aD5) : (aDZ = this.dZ[aD0][aDX], this.dZ[aD0][aDX] = aDY, dY.ff.aCK[aDY] = aDX, this.jt(aDZ, aD5)))
	}
}

function aBo() {
	function a4q(aD5, aDa) {
		if (! function(aD5, aC0) {
				var cf = jd.dW(aD5),
					aDd = Math.abs(jd.ch(aC0) - jd.ch(cf)),
					cf = Math.abs(jd.cj(aC0) - jd.cj(cf));
				0 !== Math.max(aDd, cf) && ! function(aD0, aD5, aDd, aDe) {
					var aDg = jd.d9(aD0),
						aD0 = jd.dC(aD0),
						aDi = jd.d9(aD5),
						aD5 = jd.dC(aD5),
						aDi = aDi - aDg,
						aD5 = aD5 - aD0,
						aDm = Math.abs(aDi),
						aDn = Math.abs(aD5),
						aDi = 0 < aDi ? 1 : 3,
						aD5 = 0 < aD5 ? 2 : 0;
					aDn < aDm ? aDq(aDg, aD0, aDg + aDm, aD0 + aDn, aDi, aD5, aDd) : aDq(aD0, aDg, aD0 + aDn, aDg + aDm, aD5, aDi, aDe)
				}(aD5, jd.dV(aC0), aDd, cf)
			}(aD5, aDa), 0 === de.aK[0]) return !!bJ.rf(aDa << 2);
		if (function(aC0) {
				if (bJ.rf(aC0 << 2)) return 1;
				return function(aC0) {
					var a2, co, aCz = dY.ff.aCz,
						aDu = jd,
						bH = de.aK[0],
						aDv = 4 * aC0;
					for (a2 = bH - 1; 0 <= a2; a2--)
						if (co = aCz[a2], aDv = aDu.dc(aDv, co + 2 & 3), bJ.rf(aDv)) return de.aK[0] = a2, de.aO[1] = aDv >> 2, de.aO[2] = 1 + co, 1;
					return
				}(aC0)
			}(aDa)) {
			var a2, aDa = jd.dW(aD5),
				kt = yz,
				aCz = dY.ff.aCz,
				bH = de.aK[0] - 1,
				aDv = 4 * aDa,
				cc = jd.cc;
			for (a2 = 0; a2 < bH; a2++)
				if (aDv += cc[aCz[a2]], 0 !== kt[aDv + 3] || 2 !== kt[aDv + 2]) return !!void 0;
			return !!1
		}
		return !1
	}

	function aDq(aDg, aDh, aDi, aDj, aDo, aDp, aDd) {
		for (var gZ, aCz = dY.ff.aCz, bQ = 0, aDr = 0, eH = aDj - aDh, cG = aDi - aDg, aDs = aDg % 16, a2 = 1; a2 <= aDd; a2++) aCz[bQ++] = aDo, aCz[bQ] = aDp, bQ += (gZ = (eH * (aDs + (a2 << 4)) + .5) / cG >> 4) - aDr, aDr = gZ;
		de.aQ(de.aK, bQ)
	}
	this.js = function(player, aDa) {
		var co, cf, ce = jd.cq(player, aDa);
		return ce !== aDa && (co = jd.cd(ce, aDa), cf = jd.db(ce, co), !(!bJ.rf(cf << 2) && (co = jd.cn(ce, aDa, co), cf = jd.db(ce, co), bJ.l3(cf << 2) || !bJ.rf(cf << 2)) || (de.aO[0] = cf, de.aO[1] = aDa, de.aO[2] = 0, !a4q(jd.dV(cf), aDa)) ||
			0 !== de.aO[2] && jd.cz(player, de.aO[1] + jd.cb[de.aO[2] - 1] << 2)))
	}, this.jv = function(aDa) {
		var aD0 = dY.ff.aCA[de.aO[3]];
		return de.aO[1] = aDa, de.aO[2] = 0, a4q(aD0, aDa)
	}
}

function aBk() {
	var aCW = 32,
		aDx = new Array(2);

	function kh(eo) {
		var gY, gZ, cr, dA, d7, m7 = aCW,
			rJ = hh.hi.kh(m7, m7),
			ox = hh.hi.getContext(rJ, !0),
			a3G = hh.hi.getImageData(ox, m7, m7),
			kt = a3G.data,
			kb = (m7 >> 1) - .5,
			aDy = Math.sqrt(kb * kb);
		for (kt.fill(255), gZ = 0; gZ < m7; gZ++)
			for (gY = 0; gY < m7; gY++) d7 = gY - kb, dA = gZ - kb, cr = 4 * (gZ * m7 + gY), d7 = 714 * (aDy - Math.sqrt(d7 * d7 + dA * dA)) / aDy, kt[2 + cr] = eo, kt[3 + cr] = 255 < d7 ? 0 : d7;
		return ox.putImageData(a3G, 0, 0), rJ
	}
	this.aC7 = -1, this.c5 = function() {
		this.aC7 = -1, aDx[0] || (aDx[0] = kh(255), aDx[1] = kh(0))
	}, this.aDz = function(ox, d0, gY, gZ, mj, a2) {
		jd.dI() && (ox.setTransform(d0 *= 4 / 3 * .625, 0, 0, d0, gY - (mj *= 4 / 3), gZ - mj), ox.drawImage(aDx[+(dY.ff.aC6[a2] === this.aC7)], 0, 0))
	}
}

function a7G() {
	var a0c, a7B, t3, aR, a4g, nT;

	function aE4() {}

	function a7H() {
		fV.a7H(a0c, a7B)
	}

	function aE6(nU) {
		1 === ++t3 ? a4g.readAsArrayBuffer(nU.data) : aR.push(nU.data)
	}

	function aE1() {
		t3--, pu.aE8(a0c, new Uint8Array(a4g.result)), 0 < t3 && (a4g.readAsArrayBuffer(aR[0]), aR.shift())
	}

	function aE7() {}

	function a7M(nU) {
		fV.a7M(a0c, nU)
	}
	this.c5 = function(c8, aE0) {
		a0c = c8, a7B = aE0, t3 = 0, aR = [], (a4g = new FileReader).addEventListener("loadend", aE1);
		c8 = uO[0];
		a0c < fV.a1Q ? c8 += fV.a74[a0c] + uO[1 + a7V] : c8 += fV.a74[0] + "/i" + (1 + a7V) + (a0c - fV.a1R) + "/", (nT = new WebSocket(c8)).onopen = a7H, nT.onmessage = aE6, nT.onclose = a7M, nT.onerror = aE7
	}, this.aE3 = function() {
		return nT.readyState === nT.CONNECTING
	}, this.a0U = function() {
		return nT.readyState === nT.OPEN
	}, this.a7D = function() {
		return this.aE3() || this.a0U()
	}, this.a7E = function(aE0) {
		a7B = aE0
	}, this.send = function(jW) {
		this.a0U() && nT.send(jW)
	}, this.close = function(a7J) {
		this.a7D() && (nT.close(a7J), this.kB())
	}, this.kB = function() {
		nT.onopen = aE4, nT.onmessage = aE4, nT.onclose = aE4, nT.onerror = aE4, a4g.removeEventListener("loadend", aE1)
	}
}

function vY() {
	if (er < 3) return !1;
	if (bx.by(3 * bi[gC[2]], 2) < bi[gC[0]]) return !1;
	if (bi[gC[0]] + bi[gC[1]] + bi[gC[2]] < pK - bx.by(pK, 10)) return !1;
	if (8 * Math.min(Math.min(bB[gC[0]], bB[gC[1]]), bB[gC[2]]) < 5 * Math.max(Math.max(bB[gC[0]], bB[gC[1]]), bB[gC[2]])) return !1;
	if (di) {
		if (ep.eq[gC[0]] === ep.eq[gC[1]]) return !1;
		if (ep.eq[gC[0]] === ep.eq[gC[2]]) return !1;
		if (ep.eq[gC[1]] === ep.eq[gC[2]]) return !1
	}
	return !0
}

function a7e() {
	this.dt = 501, this.nL = new Uint32Array(this.dt), this.p1 = new Uint32Array(this.dt), this.yf = new Uint16Array(this.dt), this.sE = 0, this.aEB = 1, this.eo = 0, this.max = [0, 0, 0], this.bF = 0, this.aEC = ["Avg. Attack Strength",
		"Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs",
		"Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses"
	], this.c5 = function() {
		this.sE = 0, this.aEB = 1, this.eo = 0, this.aED(), this.aEE()
	}, this.jl = function(player, dK) {
		player === bA && (this.bF[0] += dK, this.bF[1]++, this.bF[12] += de.aL[1], this.bF[13] += de.aL[0])
	}, this.jD = function(player, im) {
		donationsTracker.logDonation(player, im, de.aL[0]);
		player === bA && (fR.jD(de.aL[0], de.aL[1], im), this.bF[12] += de.aL[1], this.bF[16] += de.aL[0]), im === bA && (fR.tG(de.aL[0], player), this.bF[10] += de.aL[0])
	}, this.eY = function() {
		0 < this.eo-- || this.aEF()
	}, this.aEF = function() {
		0 !== dG[bA] && (this.nL[this.sE] = bi[bA], this.p1[this.sE] = bB[bA], this.yf[this.sE] = bC.yg(bA), this.aEG(this.sE), this.sE++, this.sE === this.dt && this.aEH(), this.eo = this.aEB - 1, m2.cB())
	}, this.aEH = function() {
		this.aED(), this.aEG(0), this.sE = 1 + b6(this.dt, 2);
		for (var a2 = 1; a2 < this.sE; a2++) this.nL[a2] = this.nL[2 * a2], this.p1[a2] = this.p1[2 * a2], this.yf[a2] = this.yf[2 * a2], this.aEG(a2);
		this.aEB *= 2
	}, this.aED = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.aEE = function() {
		this.bF = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.aEG = function(a2) {
		this.max[0] = this.nL[a2] > this.max[0] ? this.nL[a2] : this.max[0], this.max[1] = this.p1[a2] > this.max[1] ? this.p1[a2] : this.max[1], this.max[2] = this.yf[a2] > this.max[2] ? this.yf[a2] : this.max[2]
	}
}

function a7f() {
	this.cG = 0, this.eH = 0, this.m9 = 0, this.mA = 0, this.zU = 0, this.zV = 0, this.tX = 0, this.tY = 0, this.a2Q = 0, this.a17 = 0, this.aEI = 0, this.aEJ = 0, this.v7 = 0, this.c8 = 0, this.ry = ["Territory", "Balance", "Interest", "Numbers"],
		this.oB = !1, this.aEK = -1, this.aEL = !1, this.aEM = [0, 0], this.c5 = function() {
			this.oB = !1, this.aEK = -1, this.aEL = !1, this.resize()
		}, this.resize = function() {
			this.cG = p < 1.369 * q ? p : 1.369 * q;
			var bR = o && p < q ? 1 : o ? .8 : p < q ? .65 : .59;
			this.cG = Math.floor(bR * this.cG), this.cG -= o && p < q ? 2 * k4 + 2 : 0, this.eH = Math.floor(this.cG / 1.369), this.v7 = Math.floor(this.eH / 150), this.v7 = Math.max(this.v7, 1.5), this.m9 = Math.floor(1 + .02 * this.cG), this.mA =
				Math.floor(1 + .04 * this.cG), this.tX = this.mA, this.tY = Math.floor(1 + .075 * this.cG), this.a17 = Math.floor(1 + .1125 * this.cG), this.aEI = Math.floor(this.cG * (o ? .03 : .029)), this.aEI = Math.max(this.aEI, 4), this.aEJ =
				Math.floor(.035 * this.cG), this.aEJ = Math.max(this.aEJ, 4), this.a2Q = this.eH - 2 * this.tX - this.tY - this.a17, this.oB && this.aEN()
		}, this.cL = function(cM, cN) {
			var lP, lO;
			return !!this.oB && (lO = cM, lP = cN, cM -= b6(gg - this.cG, 2), cN -= b6(cP - this.eH, 2), cM < 0 || cN < 0 || cM >= this.cG || cN >= this.eH || cM >= this.cG - this.a17 && cN < this.a17 ? 1 < m0.cL(lO, lP) || this.kB() : cN < this
				.a17 || (cN < this.eH - this.tY ? (this.aEL = !0, this.aEK = (cM - 2 * this.m9 - this.zU) / this.zV, 3 !== this.c8 && (aA.cJ = !0)) : (lO = (lO = Math.floor(cM / (this.cG / this.ry.length))) < 0 ? 0 : lO >= this.ry.length ? this
					.ry.length - 1 : lO) !== this.c8 && (this.c8 = lO, this.aEN(), aA.cJ = !0)), !0)
		}, this.oY = function() {
			var aEO = Math.floor((this.aEM[0] + dL) / dM),
				aEP = Math.floor((this.aEM[1] + dN) / dM);
			aEO < 1 || aEP < 1 || an - 1 <= aEO || ao - 1 <= aEP || console.log(aEO + " " + aEP)
		}, this.ni = function(cM, cN) {
			return this.aEM[0] = cM, this.aEM[1] = cN, !(!this.oB || !this.aEL || (cM -= b6(gg - this.cG, 2), cN = this.aEK, this.aEK = (cM - 2 * this.m9 - this.zU) / this.zV, (0 <= this.aEK && this.aEK <= 1 || 0 <= cN && cN <= 1) && (aA.cJ = !0),
				0))
		}, this.oF = function() {
			this.aEL && (this.aEL = !1)
		}, this.oU = function() {
			this.oB ? this.kB() : this.show()
		}, this.show = function() {
			bE.sE < 2 || (this.oB = !0, this.aEN())
		}, this.kB = function() {
			this.oB = !1, this.aEK = -1, aA.cJ = !0
		}, this.aEN = function() {
			this.c8 < 2 ? this.zU = cH.measureText(fl.gp(bE.max[this.c8]), this.aEI + cA) : 2 === this.c8 && (this.zU = cH.measureText(fT.tJ(6, 2), this.aEI + cA)), this.zV = this.cG - 2 * this.m9 - this.zU - this.mA
		}, this.cB = function() {
			this.oB && this.aEN()
		}, this.cU = function() {
			this.oB && this.td()
		}, this.td = function() {
			var gY = b6(gg - this.cG, 2),
				gZ = b6(cP - this.eH, 2);
			cV.setTransform(1, 0, 0, 1, gY, gZ), cV.fillStyle = cY.ho, cV.fillRect(0, this.a17, this.cG, this.eH - this.a17), this.aEQ(), this.aER(), cV.strokeRect(0, 0, this.cG, this.eH), cV.textAlign = uJ, cV.font = this.aEI + cA, 0 === this.c8 ?
				this.aES(bE.nL, gY, gZ) : 1 === this.c8 ? this.aES(bE.p1, gY, gZ) : 2 === this.c8 ? this.aET(gY, gZ) : 3 === this.c8 && (this.aEU(gY, gZ), this.aEV(gY, gZ)), m0.sG(Math.floor(gY + this.cG - .725 * this.a17), Math.floor(gZ + .275 *
					this.a17), Math.floor(.45 * this.a17)), cV.setTransform(1, 0, 0, 1, 0, 0)
		}, this.aEQ = function() {
			var a2, r;
			for (cV.lineWidth = this.v7, cV.textBaseline = cW, cV.textAlign = cX, cV.strokeStyle = cY.cZ, cV.font = c9 + this.aEJ + cA, r = this.cG / this.ry.length, cV.fillStyle = cY.i4, cV.fillRect(this.c8 * r, this.eH - this.tY, r, this.tY), cV
				.fillStyle = cY.cZ, cV.fillRect(0, this.eH - this.tY - .5 * this.v7, this.cG, this.v7), a2 = 1; a2 <= 3; a2++) cV.fillRect(a2 * r, this.eH - this.tY, this.v7, this.tY);
			for (a2 = this.ry.length - 1; 0 <= a2; a2--) cV.fillText(this.ry[a2], (a2 + .5) * r, this.eH - .46 * this.tY)
		}, this.aER = function() {
			cV.fillStyle = cY.iJ, cV.fillRect(0, 0, this.cG, this.a17), cV.fillStyle = cY.cZ, cV.fillRect(0, this.a17 - .5 * this.v7, this.cG, this.v7), cV.font = c9 + Math.floor(.39 * this.a17) + cA, cV.fillText("Statistics", Math.floor(this.cG /
				2), Math.floor(.55 * this.a17))
		}, this.aES = function(aR, gY, gZ) {
			var kb = bE.max[this.c8],
				c3 = (cV.setTransform(1, 0, 0, 1, gY + 2 * this.m9 + this.zU, gZ + this.tX + this.a17), cV.lineWidth = 2, this.a2Q / Math.sqrt(kb));
			cV.beginPath(), cV.moveTo(this.zV, this.a2Q - c3 * Math.sqrt(aR[bE.sE - 1]));
			for (var a2 = bE.sE - 2; 0 <= a2; a2--) cV.lineTo(a2 * this.zV / (bE.sE - 1), this.a2Q - c3 * Math.sqrt(aR[a2]));
			cV.stroke();
			gY = this.sG(aR, c3, .5);
			gY < .95 && cV.fillText(fl.gp(kb), -this.m9, 0), .05 < Math.abs(gY - .5) && cV.fillText(fl.gp(Math.floor(kb / 4)), -this.m9, Math.floor(this.a2Q / 2)), .05 < gY && cV.fillText("0", -this.m9, this.a2Q)
		}, this.aET = function(gY, gZ) {
			cV.setTransform(1, 0, 0, 1, gY + 2 * this.m9 + this.zU, gZ + this.tX + this.a17), cV.lineWidth = 2;
			var c3 = this.a2Q / Math.max(bE.max[this.c8], 1);
			cV.beginPath(), cV.moveTo(this.zV, this.a2Q - c3 * bE.yf[bE.sE - 1]);
			for (var a2 = bE.sE - 2; 0 <= a2; a2--) cV.lineTo(a2 * this.zV / (bE.sE - 1), this.a2Q - c3 * bE.yf[a2]);
			cV.stroke();
			gY = this.sG(bE.yf, c3, 1), gZ = bE.max[this.c8] / 100;
			gY < .95 && cV.fillText(fT.tJ(gZ, 2), -this.m9, 0), .05 < Math.abs(gY - .5) && cV.fillText(fT.tJ(gZ / 2, 2), -this.m9, Math.floor(this.a2Q / 2)), .05 < gY && cV.fillText(fT.tJ(0, 2), -this.m9, this.a2Q)
		}, this.aEU = function(gY, gZ) {
			cV.setTransform(1, 0, 0, 1, gY + .34 * this.cG, gZ + 2 * this.tX + this.a17), cV.textAlign = uJ;
			for (var y4 = this.eH - 4 * this.tX - this.tY - this.a17, a2 = 7; 0 <= a2; a2--) cV.fillText(bE.aEC[a2], 0, a2 * y4 / 7);
			cV.setTransform(1, 0, 0, 1, gY + .39 * this.cG, gZ + 2 * this.tX + this.a17), cV.textAlign = so;
			gY = bE.bF[1];
			for (cV.fillText(fT.tJ(bE.bF[0] / (10 * (gY < 1 ? 1 : gY)), 1), 0, 0), a2 = 6; 1 <= a2; a2--) cV.fillText(bE.bF[a2].toString(), 0, a2 * y4 / 7);
			cV.fillText(fT.tJ(100 * (1 - bi[bA] / bE.bF[7]), 0), 0, y4)
		}, this.aEV = function(gY, gZ) {
			cV.setTransform(1, 0, 0, 1, gY + .79 * this.cG, gZ + 2 * this.tX + this.a17), cV.textAlign = uJ;
			var a2, y4 = this.eH - 4 * this.tX - this.tY - this.a17;
			for (cV.fillStyle = cY.hz, a2 = 2; 0 <= a2; a2--) cV.fillText(bE.aEC[a2 + 8], 0, a2 * y4 / 9);
			for (cV.fillStyle = cY.hy, cV.fillText(bE.aEC[11], 0, 3 * y4 / 9), cV.fillStyle = cY.iC, a2 = 8; 4 <= a2; a2--) cV.fillText(bE.aEC[a2 + 8], 0, a2 * y4 / 9);
			cV.fillStyle = cY.iB, cV.fillText(bE.aEC[17], 0, 9 * y4 / 9), cV.fillStyle = cY.hz;
			var sv = fl.gp(bE.bF[8] + bE.bF[9] + bE.bF[10] + bE.bF[11]),
				aEW = cV.measureText(sv).width,
				gY = (cV.setTransform(1, 0, 0, 1, gY + .83 * this.cG + aEW, gZ + 2 * this.tX + this.a17), cV.fillText(fl.gp(bE.bF[8]), 0, 0), cV.fillText(fl.gp(bE.bF[9]), 0, y4 / 9), cV.fillText(fl.gp(bE.bF[10]), 0, 2 * y4 / 9), cV.fillStyle = cY.hy,
					cV.fillText(sv, 0, 3 * y4 / 9), cV.fillStyle = cY.iC, bE.bF[13] - as.a5L(bA)),
				aEW = (cV.fillText(fl.gp(bE.bF[12]), 0, 4 * y4 / 9), cV.fillText(fl.gp(gY), 0, 5 * y4 / 9), cV.fillText(fl.gp(bE.bF[14]), 0, 6 * y4 / 9), cV.fillText(fl.gp(bE.bF[15]), 0, 7 * y4 / 9), cV.fillText(fl.gp(bE.bF[16]), 0, 8 * y4 / 9), bE
					.bF[12] + gY + bE.bF[14] + bE.bF[15] + bE.bF[16] + bE.bF[17]);
			cV.fillStyle = cY.iB, cV.fillText(fl.gp(aEW), 0, y4), cV.fillStyle = cY.cZ
		}, this.sG = function(aR, c3, wm) {
			var a2, nU, aS;
			return this.aEK < 0 || 1 < this.aEK ? .25 : (a2 = this.aEK * (bE.sE - 1), aS = aR[nU = Math.floor(a2)], aS += (a2 - nU) * (aR[nU < bE.sE - 1 ? nU + 1 : nU] - aS), cV.strokeStyle = cY.hs, .04 < this.aEK && this.aEZ(0, this.a2Q - c3 * Math
					.pow(aS, wm), a2 * this.zV / (bE.sE - 1), this.a2Q - c3 * Math.pow(aS, wm)), .04 < aS / bE.max[this.c8] && this.aEZ(a2 * this.zV / (bE.sE - 1), this.a2Q, a2 * this.zV / (bE.sE - 1), this.a2Q - c3 * Math.pow(aS, wm)), cV
				.fillStyle = cY.iE, cV.beginPath(), cV.arc(a2 * this.zV / (bE.sE - 1), this.a2Q - c3 * Math.pow(aS, wm), Math.max(2, .014 * this.eH), 0, 2 * Math.PI), cV.fill(), aR = this.aEK * aA.yh, aR = 0 === dG[bA] ? Math.floor(aR * fu.yn) :
				Math.floor(aR * aA.en()), cV.fillStyle = cY.cZ, cV.fillText(1 === wm ? fT.tJ(aS / 100, 2) : fl.gp(Math.floor(aS)), -this.m9, this.a2Q - c3 * Math.pow(aS, wm)), cV.textAlign = cX, cV.fillText(fT.xO(aR), a2 * this.zV / (bE.sE - 1),
					this.a2Q + this.aEI - (o ? 2 : 0) - this.v7), cV.textAlign = uJ, c3 * Math.pow(aS, wm) / this.a2Q)
		}, this.aEZ = function(gd, ge, gf, gh) {
			cV.beginPath(), cV.moveTo(gd, ge), cV.lineTo(gf, gh), cV.stroke()
		}
}

function q4() {
	this.aEa = "https://", this.aEb = this.aEa + "territorial.io/", this.a9u = this.aEb + "changelog", this.a9v = this.aEb + "terms", this.tc = this.aEb + "cookie_policy", this.a7Z = this.aEb + "privacy_policy", this.a9r = this.aEb + "tutorial", this
		.a9s = this.aEb + "players", this.a9t = this.aEb + "clans", this.zm = this.aEa + "play.google.com/store/apps/details?id=territorial.io", this.zn = this.aEa + "apps.apple.com/app/id1581110913", this.zo = this.aEa +
		"www.youtube.com/watch?v=toZTQ8aRdFc", this.zp = this.aEa + "discord.gg/pthqvpTXmh", this.zq = this.aEa + "www.instagram.com/davidtschacher/"
}

function r5() {
	this.ff = new aEc, this.ly = new aEd, this.c5 = function() {
		this.ff.c5()
	}, this.eY = function() {
		0 !== this.ff.tf && this.ff.tf--
	}
}

function aEd() {
	this.cU = function() {
		if (0 !== fj.ff.tf && (cV.globalAlpha = Math.min(fj.ff.tf / 580, 1), cV.drawImage(fj.ff.aEg, 1 + hH.gi(), 1 + hH.cT()), cV.globalAlpha = 1, hC)) {
			var a2, gd = dL / dM,
				ge = dN / dM,
				gf = (gg + dL) / dM,
				gh = (cP + dN) / dM,
				bQ = fj.ff.aEh * dM,
				aEi = fj.ff.aEi;
			for (a2 = dF - 1; 0 <= a2; a2--) ! function(a2, bQ, gd, ge, gf, gh, aEi) {
				0 === dG[a2] || 0 === bi[a2] || (gf = gg * ((eL[a2] + eK[a2] + 1) / 2 - gd) / (gf - gd) - .5 * bQ, gd = cP * ((eO[a2] + eN[a2] + 1) / 2 - ge) / (gh - ge) - .5 * bQ, gg < gf) || cP < gd || gf < -bQ || gd < -bQ || (cV
					.setTransform(dM, 0, 0, dM, gf, gd), cV.drawImage(aEi[di ? ep.eq[a2] : 1], 0, 0))
			}(a2, bQ, gd, ge, gf, gh, aEi);
			cV.setTransform(dM, 0, 0, dM, 0, 0)
		}
	}
}

function aEc() {
	this.aEh = 28, this.tf = 0, this.aEg = null;
	var aEk = this.aEi = null;

	function aEn(m7, aEp) {
		var gY, gZ, cr, d7, rJ = hh.hi.kh(m7, m7),
			ox = hh.hi.getContext(rJ, !0),
			a3G = hh.hi.getImageData(ox, m7, m7),
			kt = a3G.data,
			kb = (m7 >> 1) - .5,
			aEq = .5 + kb;
		for (aEq *= aEq, gZ = 0; gZ < m7; gZ++)
			for (gY = 0; gY < m7; gY++) d7 = (d7 = gY - kb) * d7 + (d7 = gZ - kb) * d7, kt[cr = 4 * (gZ * m7 + gY)] = aEp[0], kt[1 + cr] = aEp[1], kt[2 + cr] = aEp[2], kt[3 + cr] = (aEq - d7) * aEp[3] / aEq;
		return ox.putImageData(a3G, 0, 0), rJ
	}

	function aDz(a2, ox, rJ, m7) {
		var gY;
		0 !== dG[a2] && 0 !== bi[a2] && (gY = eL[a2] + eK[a2] + 1 - m7 - 2 >> 1, m7 = eO[a2] + eN[a2] + 1 - m7 - 2 >> 1, ox.drawImage(rJ[di ? ep.eq[a2] : a2 < dF ? 1 : 0], gY, m7))
	}
	this.c5 = function() {
		var rv;
		this.tf = 700,
			function(rv) {
				var a2, m7 = rv.aEh;
				if (rv.aEi = [], aEk = [], di)
					for (a2 = 0; a2 <= pN; a2++) rv.aEi.push(aEn(m7, ep.aEo[ep.nB[a2]])), aEk.push(aEn(m7 >> 1, ep.aEo[ep.nB[a2]]));
				else rv.aEi.push(aEn(m7, ep.aEo[0])), rv.aEi.push(aEn(m7, ep.aEo[4])), aEk.push(aEn(m7 >> 1, ep.aEo[0]))
			}(this),
			function(rv, aEr) {
				var a2, aEg = rv.aEg,
					ox = hh.hi.getContext(aEg, !0),
					bH = bM,
					m7 = rv.aEh >> 1;
				ox.imageSmoothingEnabled = !1, ox.setTransform(1, 0, 0, 1, 0, 0), aEr && ox.clearRect(0, 0, aEg.width, aEg.height);
				for (a2 = dF; a2 < bH; a2++) aDz(a2, ox, aEk, m7)
			}(this, null !== (rv = this).aEg && rv.aEg.width === an - 2 && rv.aEg.height === ao - 2 || (rv.aEg = hh.hi.kh(an - 2, ao - 2), !1))
	}, this.pH = function() {
		for (var bH = dF, m7 = this.aEh, aEi = this.aEi, ox = hh.hi.getContext(this.aEg, !0), a2 = 0; a2 < bH; a2++) aDz(a2, ox, aEi, m7)
	}
}

function r6() {
	this.aEs = -1, this.c5 = function() {
		this.aEs = -1
	}, this.eY = function() {
		-1 !== this.aEs && fW.mm.mu(this.aEs)
	}, this.j7 = function(player) {
		return !!m0.sD(player) && (1 === er ? (this.aEs = player, fH && hC && jg.eY()) : (fR.ms(player, player === bA ? 21 : 22), 8 === fF ? this.aEs = 1 - player : fH ? (a4J(player), a7O(), hC && jg.eY()) : this.aEt(player)), !0)
	}, this.ja = function(player) {
		1 === g1 && 0 !== dG[player] && 2 !== dH[player] && (8 === fF ? this.aEs = 1 - player : this.aEt(player)), fR.ms(player, 4)
	}, this.aEt = function(player) {
		hC ? (a4J(player), a7O()) : fc.a70(player)
	}
}

function a7h() {
	this.a1y = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.y3 = [cY
		.cZ, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", cY.cZ, "rgb(170,170,170)"
	], this.aEu = [cY.cZ, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", cY.cZ, cY.gk], this.aEv = [cY.gk, cY.cZ, cY.cZ, cY.cZ, cY.gk, cY.gk, cY.gk, cY.gk, cY.cZ];
	var aEw = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aEx = (this.a6U = ["rgba(" + aEw[0] + ",", "rgba(" + aEw[1] + ",", "rgba(" + aEw[2] + ",", "rgba(" + aEw[3] + ",", "rgba(" + aEw[4] + ",", "rgba(" + aEw[5] + ",", "rgba(" + aEw[6] + ",", "rgba(" + aEw[7] + ",", "rgba(" + aEw[8] + ",",
			"rgba(" + aEw[9] + ","
		], this.a6V = ["rgb(" + aEw[0] + ")", "rgb(" + aEw[1] + ")", "rgb(" + aEw[2] + ")", "rgb(" + aEw[3] + ")", "rgb(" + aEw[4] + ")", "rgb(" + aEw[5] + ")", "rgb(" + aEw[6] + ")", "rgb(" + aEw[7] + ")", "rgb(" + aEw[8] + ")", "rgb(" + aEw[
			9] + ")"
		], this.c4 = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.aEo = [
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
		aEy = (this.nB = [0, 1, 2, 3, 4, 5, 6, 7, 8], 7),
		ka = "[",
		kc = "]";
	this.eq = new Uint8Array(bM), this.nJ = null, this.nK = null, this.c5 = function(mD) {
		this.eq.fill(0), this.aEz(), di && (fB.fC && fB.fD.a53 ? this.a3g() : 9 === fF ? this.aF0() : this.eY(mD))
	}, this.a3g = function() {
		var a2, bH = lQ;
		for (this.nB = [0, 1, 2, 3, 4, 5, 6, 7, 8], a2 = 0; a2 < bH; a2++) this.eq[a2] = fB.fD.a53[a2]
	}, this.aEz = function() {
		for (var a2 = this.nB.length - 1; 0 <= a2; a2--) this.nB[a2] = a2;
		this.nJ = [], this.nK = []
	}, this.aF0 = function() {
		for (var a2 = dF + fL.a6r - 1; 0 <= a2; a2--) this.eq[a2] = 1;
		for (a2 = dF + fL.a6r; a2 < bM; a2++) this.eq[a2] = 2;
		this.nB[1] = 7, this.nB[2] = 8
	}, this.eY = function(mD) {
		var ck = new Uint8Array(dF),
			cl = new Uint8Array(dF),
			aF1 = new Uint16Array(8),
			aF2 = new Uint16Array(this.nB.length);
		this.aF3(mD, ck, cl, aF1), this.a3e(aF1), fH || this.aF4(aF2, ck, cl), this.aF5(ck, cl, aF2), fH ? this.aF6() : this.aF7()
	}, this.aF3 = function(mD, ck, cl, aF8) {
		for (var e8, nU, aF9, bH = this.nB.length - 1, aR = new Uint16Array(bH), a2 = dF - 1; 0 <= a2; a2--) {
			for (e8 = bH; 1 <= e8; e8--) aR[e8 - 1] = Math.abs(4 * mD[a2].a2e[0] - aEx[e8][0]) + Math.abs(4 * mD[a2].a2e[1] - aEx[e8][1]) + Math.abs(4 * mD[a2].a2e[2] - aEx[e8][2]);
			for (aF9 = 768, e8 = bH - 1; 0 <= e8; e8--) aR[nU = (e8 + a2) % bH] < aF9 && (aF9 = aR[nU], ck[a2] = nU);
			for (aF8[ck[a2]] += 4, aF9 = 768, e8 = bH - 1; 0 <= e8; e8--) aR[nU = (e8 + a2) % bH] < aF9 && nU !== ck[a2] && (aF9 = aR[nU], cl[a2] = nU);
			aF8[cl[a2]]++
		}
	}, this.a3e = function(aF8) {
		for (var e8, rH, bH = this.nB.length - 1, a2 = bH; 0 <= a2; a2--) this.nB[a2] = a2;
		for (a2 = bH - 1; 0 <= a2; a2--) aF8[a2]++;
		for (a2 = 1; a2 <= bH; a2++) {
			for (rH = 0, e8 = 1; e8 < bH; e8++) aF8[e8] > aF8[rH] && (rH = e8);
			aF8[rH] = 0, this.nB[a2] = rH + 1
		}
	}, this.aF4 = function(aF2, ck, cl) {
		var a2, e8, aFA, eo, bR, nU, hQ, os, aFB = this.nB.length - 1,
			aFC = new Uint16Array(aFB),
			aFD = [];
		loop: for (a2 = dF - 1; 0 <= a2; a2--)
			if (null !== (aFA = function(a2) {
					var aCu, aCi;
					return (aCu = tU[a2].indexOf(ka)) < 0 || !(1 < (aCi = tU[a2].indexOf(kc)) - aCu && aCi - aCu <= aEy + 1) ? null : tU[a2].substring(aCu + 1, aCi).toUpperCase().trim()
				}(a2))) {
				for (e8 = this.nJ.length - 1; 0 <= e8; e8--)
					if (aFA === this.nJ[e8]) {
						this.nK[e8].push(a2);
						continue loop
					} this.nJ.push(aFA), aFD.push(!1), this.nK.push([]), this.nK[this.nJ.length - 1].push(a2)
			}
		for (e8 = this.nJ.length - 1; 0 <= e8; e8--) {
			for (bR = -1, eo = this.nJ.length - 1; 0 <= eo; eo--) !aFD[eo] && (-1 === bR || this.nK[eo].length > this.nK[bR].length) && (bR = eo);
			for (eo = aFB - 1; 0 <= eo; eo--) aFC[eo] = 1;
			for (eo = this.nK[bR].length - 1; 0 <= eo; eo--) aFC[ck[this.nK[bR][eo]]] += 3, aFC[cl[this.nK[bR][eo]]]++;
			for (a2 = aFB - 1; 0 <= a2; a2--) {
				for (nU = bR % aFB, eo = aFB - 1; 0 <= eo; eo--) aFC[eo] > aFC[nU] && (nU = eo);
				for (hQ = -1, eo = pN; 0 < eo; eo--)
					if (this.nB[eo] === nU + 1) {
						hQ = eo;
						break
					} if (aFC[nU] = 0, -1 !== hQ) {
					for (os = 0, eo = pN; 0 < eo; eo--) aF2[hQ] > aF2[eo] && os++;
					if (os !== pN - 1) {
						for (eo = this.nK[bR].length - 1; 0 <= eo; eo--) aF2[hQ]++, this.eq[this.nK[bR][eo]] = hQ;
						break
					}
				}
			}
			aFD[bR] = !0
		}
	}, this.aF5 = function(ck, cl, aF2) {
		for (var a2, d6, bH = this.nB.length - 1, border = b6(dF, pN), aFF = (0 < dF % pN && border++, new Uint8Array(1 + bH)), e8 = bH; 1 <= e8; e8--) aFF[this.nB[e8]] = e8;
		for (a2 = 0; a2 < dF; a2++) d6 = aFF[ck[a2] + 1], 0 === this.eq[a2] && d6 <= pN && aF2[d6] < border && (aF2[d6]++, this.eq[a2] = d6);
		for (a2 = 0; a2 < dF; a2++) d6 = aFF[cl[a2] + 1], 0 === this.eq[a2] && d6 <= pN && aF2[d6] < border && (aF2[d6]++, this.eq[a2] = d6);
		for (e8 = pN; 1 <= e8; e8--)
			for (a2 = dF - 1; 0 <= a2 && !(aF2[e8] >= border); a2--) 0 === this.eq[a2] && (aF2[e8]++, this.eq[a2] = e8)
	}, this.aF6 = function() {
		var a2, dx, aF8 = new Uint16Array(pN);
		for (aF8[pN - 1] = bM, a2 = pN - 2; 0 <= a2; a2--) aF8[a2] = fI.fJ[a2].tA;
		for (aF8[0]--, dx = 0 === aF8[0] ? 1 : 0, a2 = dF; a2 < bM; a2++) this.eq[a2] = dx + 1, aF8[dx]--, aF8[dx] <= 0 && dx++
	}, this.aF7 = function() {
		for (var a2 = dF; a2 < bM; a2++) this.eq[a2] = 1 + a2 % pN
	}
}

function bj() {
	for (var gY, gZ, a2 = ae - 1; 0 <= a2; a2--) gY = b6(ag[a2], 4) % an, gZ = b6(ag[a2], 4 * an), eL[aa] = eL[aa] > gY ? gY : eL[aa], eO[aa] = eO[aa] > gZ ? gZ : eO[aa], eK[aa] = eK[aa] < gY ? gY : eK[aa], eN[aa] = eN[aa] < gZ ? gZ : eN[aa]
}

function ax() {
	var bR, bP, a2, bH = bI[aa].length;
	loop: for (a2 = bH - 1; 0 <= a2; a2--) {
		for (bR = 3; 0 <= bR; bR--)
			if (bP = bI[aa][a2] + aj[bR], bJ.bU(bP) || bJ.bS(bP) && bJ.bT(bP) !== aa) {
				bJ.du(bI[aa][a2], aa);
				continue loop
			} bI[aa][a2] = bI[aa][bH - 1], bI[aa].pop(), bH--
	}
}

function ay() {
	var bR, bP, aFG, aFH, bH = ba[aa].length;
	loop: for (var a2 = bH - 1; 0 <= a2; a2--) {
		for (aFG = aFH = !1, bR = 3; 0 <= bR; bR--) {
			if (bP = ba[aa][a2] + aj[bR], bJ.a3q(bP, aa)) continue loop;
			aFG = aFG || bJ.rf(bP), aFH = aFH || bJ.l3(bP)
		}
		aFG ? bb[aa].push(ba[aa][a2]) : aFH ? be[aa].push(ba[aa][a2]) : bJ.lk(ba[aa][a2], aa), ba[aa][a2] = ba[aa][bH - 1], ba[aa].pop(), bH--
	}
}

function bY() {
	bi[ad] -= ae
}

function bZ(border) {
	for (var bH = border.length, a2 = bH - 1; 0 <= a2; a2--) bJ.ls(ad, border[a2]) || (border[a2] = border[bH - 1], border.pop(), bH--)
}

function bc(border) {
	for (var bH = border.length, a2 = bH - 1; 0 <= a2; a2--) !bJ.ls(ad, border[a2]) && bJ.bK(border[a2]) && (border[a2] = border[bH - 1], border.pop(), bH--)
}

function bd(border) {
	for (var bR, bP, bH = border.length, a2 = bH - 1; 0 <= a2; a2--)
		for (bR = 3; 0 <= bR; bR--)
			if (bP = border[a2] + aj[bR], bJ.a3q(bP, ad)) {
				ba[ad].push(border[a2]), border[a2] = border[bH - 1], border.pop(), bH--;
				break
			}
}

function bf() {
	for (var bR, bP, a2 = ae - 1; 0 <= a2; a2--)
		for (bR = 3; 0 <= bR; bR--) bP = ag[a2] + aj[bR], bJ.a3r(ad, bP) && bJ.a3s(bP) && (ba[ad].push(bP), bJ.bL(bP, ad))
}

function bg() {
	var gY, gZ;
	loop: for (; eO[ad] < eN[ad];) {
		for (gY = eK[ad]; gY >= eL[ad]; gY--)
			if (bJ.ls(ad, 4 * (eO[ad] * an + gY))) break loop;
		eO[ad]++
	}
	loop: for (; eO[ad] < eN[ad];) {
		for (gY = eK[ad]; gY >= eL[ad]; gY--)
			if (bJ.ls(ad, 4 * (eN[ad] * an + gY))) break loop;
		eN[ad]--
	}
	loop: for (; eL[ad] < eK[ad];) {
		for (gZ = eN[ad]; gZ >= eO[ad]; gZ--)
			if (bJ.ls(ad, 4 * (gZ * an + eL[ad]))) break loop;
		eL[ad]++
	}
	loop: for (; eL[ad] < eK[ad];) {
		for (gZ = eN[ad]; gZ >= eO[ad]; gZ--)
			if (bJ.ls(ad, 4 * (gZ * an + eK[ad]))) break loop;
		eK[ad]--
	}
}

function e3(player, dp) {
	return 0 === ep.eq[player] || ep.eq[player] !== ep.eq[dp]
}

function rh(player, dp) {
	for (var nU, aFI = as.at(player), a2 = 0; a2 < aFI; a2++)
		if (0 === as.au(player, a2))
			if ((nU = as.az(player, a2)) === bM) {
				if (dp === bM) return !1;
				if (rg(dp)) return !0
			} else if (dp === bM) {
		if (rg(nU)) return !0
	} else if (rl(dp, nU)) return !0;
	return !1
}

function rg(player) {
	for (var a2, bQ, bH = ba[player].length, bR = 3; 0 <= bR; bR--)
		for (bQ = aj[bR], a2 = 0; a2 < bH; a2++)
			if (bJ.bU(ba[player][a2] + bQ)) return !0;
	return !1
}

function rl(oy, oz) {
	var a2, r, bR, bQ, bP, aB4 = ba[oy].length,
		aD1 = ba[oz].length;
	for (aD1 < aB4 && (r = oy, oy = oz, oz = r, r = aB4, aB4 = aD1, 0), bR = 3; 0 <= bR; bR--)
		for (bQ = aj[bR], a2 = 0; a2 < aB4; a2++)
			if (bP = ba[oy][a2] + bQ, bJ.bS(bP) && bJ.bT(bP) === oz) return !0;
	return !1
}

function aFJ() {
	this.eY = function() {
		pn.eY(), pp.eY(), od.eY(), fV.eY(), fx.a1S(), cR.eY(), aA.cJ && (aA.cJ = !1, aH.cU())
	}
}

function aFK() {
	this.aB = aA.aB, this.c8 = 0, this.aFL = 0, this.a1P = 0, this.aFM = null, this.aFN = 7, this.tg = 0, this.c5 = function() {
		this.a1P = 0, this.aFM = [], this.c8 = 0, this.aFL = 0
	}, this.aFO = function(jW) {
		var a2;
		if (hC) this.yi(jW);
		else if (this.aFM.push(jW), 2 === g1) {
			for (a2 = 0; a2 < this.aFM.length; a2++) et.ic.eY(this.aFM[a2]);
			this.aFM = []
		}
	}, this.yi = function(jW) {
		et.ic.eY(jW), fr.eY(), fT.yi(this.a1P), this.a1P === pO ? (jg.eY(), this.a1P = 0, this.c8 = 0, this.aFL = 0, this.aB = aA.aB) : (this.a1P++, fS.pG(), fS.g0(!0), he.yx())
	}, this.eY = function() {
		od.eY(), hC ? (aA.cJ = fT.yi(-1) || aA.cJ, g2()) : (0 !== this.c8 || aA.aB >= this.aB && (this.aB += aA.yh * Math.floor(1 + (aA.aB - this.aB) / aA.yh), 2 === g1 ? fQ() : this.aFP(), this.c8++, 27 < aA.aB - this.tg)) && this.aFQ(), fs(),
			aA.cJ && (aA.cJ = !1, lv()), this.tg = aA.aB
	}, this.aFQ = function() {
		aA.cJ = !0, fz(), this.c8 = 0
	}, this.aFP = function() {
		var aFR, a2;
		if (this.aFL !== 7 * this.a1P) fZ(), he.yx();
		else {
			for (aFR = !1; this.aFS() && (aFR = !0, fZ(), 0 < this.aFM.length);)
				for (a2 = this.aFN - 2; 0 <= a2; a2--) fZ();
			aFR ? he.yx() : (fQ(), he.pJ())
		}
	}, this.aFS = function() {
		return 0 < this.aFM.length && (this.a1P++, et.ic.eY(this.aFM[0]), this.aFM.shift(), !0)
	}
}

function aFT() {
	var aFU, aFV, aFW, a1P, aFX, c8 = 0,
		aB = aA.aB;

	function aFa() {
		! function() {
			if (!hC) return;
			if (fH) return;
			return aFX % 7 != 0 ? aFX++ : a1P === pO ? (aFd(), fT.yi(a1P), jg.eY()) : (aFd(), aFX++, a1P++, fS.pG(), fS.g0(!0)), 1
		}() && (aFd(), fZ())
	}

	function aFb() {
		c8 = 0, (hC ? (aA.cJ = fT.yi(a1P - (aFX % 7 == 0 ? 0 : 1) + aFX % 7 / 7) || aA.cJ, g2) : m0.oT || !fw.s3 ? g2 : (aA.cJ = !0, fz))()
	}

	function aFd() {
		var a2, bH, aFe = fr.je.aAV,
			aS = fr.je.aAW,
			aU = fr.je.aAX,
			aW = fr.je.aAY,
			aFf = fr.je.aAZ,
			aFg = fr.je.aAa;
		if (aFU >= aFg.length) fR.st("Replay Error"), fW.mm.mu(-1);
		else if (aFg = aFg[aFU], aFf[aFU]) {
			for (bH = aFV + aFg, a2 = aFV; a2 < bH; a2++) et.ic.jZ(aFe[a2], aS[a2], aU[a2], aW[a2]);
			aFV += aFg, aFU++
		} else ++aFW >= aFg && (aFU++, aFW = 0)
	}
	this.aFL = 0, this.c5 = function() {
		aFX = a1P = aFW = aFV = aFU = 0
	}, this.eY = function() {
		var aDO;
		od.eY(), fw.vw() < 1.7 ? 0 === c8 ? aA.aB >= aB && (aDO = aA.yh / fw.vw(), aB += aDO * Math.floor(1 + (aA.aB - aB) / aDO), 2 === g1 || m0.oT || !fw.s3 ? fQ() : (aFa(), he.yx()), c8++) : aFb() : function() {
			var aDO;
			if (aA.aB >= aB)
				if (2 === g1 || m0.oT || !fw.s3) fQ(), aB = aA.aB;
				else {
					for (aDO = aA.yh / fw.vw(), 16 < (aA.aB - aB) / aDO && (aB = aA.aB - 16 * aDO); aA.aB >= aB && 2 !== g1;) aB += aDO, aFa();
					he.yx()
				} aFb()
		}(), fs(), aA.cJ && (aA.cJ = !1, lv())
	}
}

function aFh() {
	var c8 = 0,
		aB = aA.aB;
	this.aFL = 0, this.eY = function() {
		od.eY(), hC ? g2() : 0 === c8 ? aA.aB >= aB && (aB += aA.yh * Math.floor(1 + (aA.aB - aB) / aA.yh), 2 === g1 || m0.oT ? fQ() : (fZ(), he.yx()), c8++) : ((m0.oT ? g2 : (aA.cJ = !0, fz))(), c8 = 0), fs(), aA.cJ && (aA.cJ = !1, lv())
	}
}

function a7g() {
	function aFk() {
		aA.aB = performance.now(), aA.aFi.eY(), window.requestAnimationFrame(aFk)
	}

	function aFl() {
		var r = performance.now();
		aA.aB + 1500 < r && (aA.aB = r, aA.aFi.eY())
	}
	this.aFi = null, this.cJ = !1, this.aB = 0, this.aFj = -1, this.yh = 56, this.c5 = function() {
		this.pl(), window.requestAnimationFrame(aFk), this.aB = performance.now()
	}, this.ph = function() {
		hD ? (this.aFi = new aFT, this.aFi.c5()) : fH ? this.aFi = new aFh : (this.aFi = new aFK, this.aFi.c5())
	}, this.pl = function() {
		this.aFi = new aFJ, this.cJ = !0
	}, this.oZ = function() {
		1 !== g1 || !fH || m0.oT || hC || m0.oU(), -1 === this.aFj && (this.aFj = setInterval(aFl, 2e3))
	}, this.oa = function() {
		this.cJ = !0, -1 !== this.aFj && (clearInterval(this.aFj), this.aFj = -1)
	}, this.eY = function() {
		this.aFi.aFL++
	}, this.en = function() {
		return this.aFi.aFL
	}
}

function qs() {
	var h3 = 0,
		aFm = !0;

	function aFo(j) {
		8 !== aH.oP() || 2 !== dH[bA] && (0 !== dG[bA] || hC) || fR.t4(j)
	}
	this.eY = function() {
		var r, tj;
		aA.aB > h3 && (h3 = aA.aB + 2500, r = new Date, tj = r.getUTCSeconds(), aFm ? tj < 45 && (aFm = !1) : tj < 45 || -1 !== aA.aFj || (aFm = !0, (tj = r.getUTCMinutes() + 1) % 15 == 0 && aFo(30 === tj ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function qg() {
	var gd, ge, gf, gh, aFp = 0,
		aFq = 0;

	function aFs() {
		return Math.pow(Math.pow(gf - gd, 2) + Math.pow(gh - ge, 2), .5)
	}

	function aFr(nU) {
		gd = kE * nU.touches[0].clientX, ge = kE * nU.touches[0].clientY, gf = kE * nU.touches[1].clientX, gh = kE * nU.touches[1].clientY
	}
	this.nm = function(nU) {
		return 1 < nU.touches.length ? (aFq = aA.aB, aFp = 3, aFr(nU), m1.kB(), !0) : (aFp = 0, !1)
	}, this.nn = function(nU) {
		var a8M, d4, d5;
		return 0 !== g1 && 1 < nU.touches.length && (aFp = Math.max(aFp - 1, 0), ft.hW() && (a8M = aFs(), aFr(nU), nU = aFs(), d4 = Math.floor((gd + gf) / 2), d5 = Math.floor((ge + gh) / 2), hH.wV(d4, d5, Math.max(.125, nU) / Math.max(.125,
			a8M)), aA.cJ = !0), !0)
	}, this.oI = function() {
		var gY, gZ;
		return !!(aFp && (aFp = 0, aA.aB < aFq + 500)) && (gY = (gd + gf) / 2, gZ = (ge + gh) / 2, m1.o9(gY, gZ), m1.click(gY, gZ, !0) && (aA.cJ = !0), !0)
	}
}

function qh() {
	var dt, dz;

	function aG1(aGJ, jW) {
		for (var aR = new Array(aGJ), a2 = 0; a2 < aGJ; a2++) aR[a2] = aFu(jW, 10);
		return k.kZ(aR)
	}

	function aFu(kr, bH) {
		for (var tl = 0, a2 = dz; a2 < dz + bH; a2++) tl |= (kr[b6(a2, 8)] >> 7 - a2 % 8 & 1) << dz + bH - a2 - 1;
		return dz += bH, tl
	}
	this.aE8 = function(a0c, jW) {
		var aFt;
		(dz = 0) === (dt = jW.length) ? fV.a7K(a0c, 3205): 0 === (aFt = aFu(jW, 1)) ? function(a0c, jW) {
			var aFx = aFu(jW, 2);
			0 === aFx ? (0 === aFu(jW, 1) ? function(a0c, jW) {
				var a2;
				if (0 === a0c && 8 !== aH.oP() && !(dt < 4)) {
					zQ.c7(0, aG1(aFu(jW, 5), jW)), zQ.c7(1, "[" + aG1(aFu(jW, 3), jW) + "]");
					var aG2 = aFu(jW, 12),
						aG3 = aFu(jW, 6),
						aR = new Array(aG2);
					for (a2 = 0; a2 < aG2; a2++) aR[a2] = aFu(jW, aG3);
					oD.ww(aR)
				}
			} : function(a0c, jW) {
				var a2;
				if (8 !== aH.oP())
					if (dt < 3) fV.a7K(a0c, 3208);
					else {
						var aG4, mH, a0c = aFu(jW, 1),
							position = aFu(jW, 16),
							tl = aFu(jW, 4),
							aR = [];
						for (a2 = 0; a2 < tl; a2++) mH = aFu(jW, 14), aG4 = aFu(jW, 5), aG4 = aG1(aG4, jW), aR.push({
							name: aG4,
							mH: mH
						});
						0 === a0c ? cR.zJ(0, aR, 10, 1, .36, .55, position) : cR.zJ(1, aR, 100, 2, .47, .5, position)
					}
			})(a0c, jW) : 1 === aFx ? function(a0c, jW) {
				var a2, dx, a2B, nJ, aG5, aG6;
				if (a0c !== fV.a1C) fV.close(a0c, 3239);
				else if (6 === aH.oP() && pv.c5(), 7 !== aH.oP()) fV.close(a0c, 3251);
				else {
					var a1k = [0, 0, 0, 0],
						aG7 = aFu(jW, 6);
					for (a2 = 0; a2 < 4; a2++) a1k[a2] = aFu(jW, aG7);
					var aG8 = aFu(jW, 4),
						aG9 = [];
					for (a2 = 0; a2 < aG8; a2++) {
						for (aG9.push({
								id: aFu(jW, 5),
								pS: aFu(jW, 4),
								a26: 1 === aFu(jW, 1),
								lD: aFu(jW, 6),
								a24: aFu(jW, 14),
								a29: aFu(jW, aG7),
								a2A: aFu(jW, 9) + 1,
								a0l: aFu(jW, 10)
							}), a2B = aFu(jW, 3), nJ = new Array(a2B), dx = 0; dx < a2B; dx++) aG5 = aFu(jW, 9) + 1, aG6 = aG1(aFu(jW, 3), jW), nJ[dx] = ("" === aG6 ? "other: " : "[" + aG6 + "]: ") + aG5;
						aG9[a2].a2B = a2B, aG9[a2].nJ = nJ
					}
					pv.zR(a1k, aG9)
				}
			}(a0c, jW) : 2 !== aFx && 3 !== aFx || fx.c5(jW)
		}(a0c, jW) : 1 === aFt && function(a0c, jW) {
			var ot = aH.oP();
			8 !== ot ? 10 === ot && fV.a7K(a0c, 3243) : a0c !== fV.o0 ? fV.a7K(a0c, 3244) : 0 === aFu(jW, 1) ? aA.aFi.aFO(jW) : function(jW) {
				var aGF = aFu(jW, 2);
				(0 === aGF ? function(jW) {
					var t0;
					3 !== dt ? fV.a7K(fV.o0, 3230) : (t0 = aFu(jW, 9), jW = aFu(jW, 7), 0 !== dG[t0] && 0 !== dG[bA] && (jW %= a3.a4, fR.j0(t0, bA, jW), fS.jy(t0, 1, jW)))
				} : 1 === aGF ? function(jW) {
					2 !== dt ? fV.a7K(fV.o0, 3235) : (jW = aFu(jW, 9), 0 !== dG[jW] && 0 !== dG[bA] && fm.a6x(0, [jW], !0) && fR.jI(jW, 1))
				} : function(jW) {
					var t0;
					3 !== dt ? fV.a7K(fV.o0, 3236) : (t0 = aFu(jW, 9), jW = aFu(jW, 9), 0 !== dG[t0] && 0 !== dG[jW] && 0 !== dG[bA] && fm.a6x(1, [t0], !0) && (fS.jy(t0, 3, 96), fS.jy(jW, 4, 96), fR.t9(t0, jW)))
				})(jW)
			}(jW)
		}(a0c, jW)
	}, this.a1T = function(jW) {
		dz = 1, dt = jW.length, (2 === aFu(jW, 2) ? function(jW) {
			dz += 20;
			for (var a2f, a2e, name, a1J = aFu(jW, 9), pQ = aFu(jW, 14), pS = aFu(jW, 4), a26 = 1 === aFu(jW, 1), a27 = aFu(jW, 6), a28 = aFu(jW, 14), aGD = aFu(jW, 9) + 1, mD = [], a2 = 0; a2 < aGD; a2++) a2f = aFu(jW, 1), a2e = [aFu(jW,
				6), aFu(jW, 6), aFu(jW, 6)], name = aG1(aFu(jW, 5), jW), mD.push({
				name: name,
				a2e: a2e,
				a2f: a2f
			});
			aH.a0r(), a2E(a27, a28), 1 === mD.length && fI.a2S(pS);
			pP(pQ, a1J, mD, pS, a26, !1)
		} : function(jW) {
			dz += 20;
			for (var a2f, a2e, mH, name, a1J = aFu(jW, 1), pQ = aFu(jW, 14), pS = aFu(jW, 4), a26 = 1 === aFu(jW, 1), a27 = aFu(jW, 6), a28 = aFu(jW, 14), mD = [], a2 = 0; a2 < 2; a2++) a2f = aFu(jW, 1), a2e = [aFu(jW, 6), aFu(jW, 6),
				aFu(jW, 6)
			], mH = aFu(jW, 14), name = aG1(aFu(jW, 5), jW), mD.push({
				name: name,
				a2e: a2e,
				mH: mH,
				a2f: a2f
			});
			aH.a0r(), a2E(a27, a28), pP(pQ, a1J, mD, pS, a26, !1)
		})(jW)
	}, this.a1N = function(jW) {
		dz = 1, dt = jW.length;
		var aFx = aFu(jW, 2),
			aGC = aFu(jW, 10);
		return fV.a1C > fV.a1R && (aGC += fV.a1R), fV.a1C === aGC ? (fV.o0 = aGC, !1) : (fV.close(fV.a1C, 3247), fV.o0 = aGC, fx.a1I = aFu(jW, 10), fx.a1J = aFu(jW, 2 === aFx ? 9 : 1), fV.ws(aGC, 5) && ih.a7I(), !0)
	}
}

function r2() {
	this.dt = 0, this.c8 = 0, this.jW = null, this.c5 = function(jW) {
		this.c8 = 0, this.jW = jW, this.dt = jW.length
	}, this.a0s = function() {
		this.jW = null
	}, this.jY = function(dt) {
		for (var aF = 0, jW = this.jW, hW = this.c8 + dt - 1, a2 = this.c8; a2 <= hW; a2++) aF |= (jW[a2 >> 3] >> 7 - (7 & a2) & 1) << hW - a2;
		return this.c8 += dt, this.c8 > 8 * this.dt && console.log("error unwrapper"), aF
	}, this.aAk = function(dt) {
		for (var aR = new Array(dt), a2 = 0; a2 < dt; a2++) aR[a2] = this.jY(10);
		return k.kZ(aR)
	}, this.aGK = function(aAv) {
		return this.dt === kU.aGL(aAv)
	}
}

function a7d() {
	this.aBd = 0, this.aBe = 0, this.aBZ = 0, this.aBa = 0, this.aBb = 0, this.aBc = 0, this.yy = [0, 0, 0, 0], this.hV = function() {
		this.aBd = hH.gi(), this.aBe = hH.cT(), this.aBZ = -this.aBd, this.aBa = -this.aBe, this.aBb = gg / dM, this.aBc = cP / dM, this.yy[0] = Math.floor(this.aBZ), this.yy[1] = Math.floor(this.aBa), this.yy[2] = Math.floor(this.yy[0] + this
			.aBb + 1), this.yy[3] = Math.floor(this.yy[1] + this.aBc + 1), he.yv = !0
	}
}

function qi() {
	var v3, h3;
	this.c5 = function() {
		v3 = 1, h3 = 0
	}, this.eY = function() {
		0 < v3 && (h3 = 0 === h3 ? aA.aB + 16 : h3, v3 = (v3 -= .001 * (aA.aB - h3)) < 0 ? 0 : v3, h3 = aA.aB, aA.cJ = !0)
	}, this.cU = function() {
		0 < v3 && (cV.fillStyle = "rgba(0,0,0," + v3 + ")", cV.fillRect(0, 0, gg, cP))
	}
}

function qm() {
	function aGP(a7n, gY, gZ, cG, eH) {
		a4m <= a7n || (lD === a7n && (cV.fillStyle = cY.iK, cV.fillRect(gY, gZ, cG, eH), cV.fillStyle = cY.cZ), cV.strokeRect(gY, gZ, cG, eH), cV.fillText(lC.get(a7n).name, Math.floor(gY + .5 * cG), Math.floor(gZ + .55 * eH)))
	}
	this.oB = !1, this.a2R = [0, 0, 0, 0], this.show = function() {
		this.oB = !0, this.resize(), aA.cJ = !0
	}, this.resize = function() {
		var aB4 = b6(a4m + a4m % 2, 2),
			aB4 = q - aB4 * cO;
		this.a2R[2] = o ? Math.floor(.75 * uS) : Math.floor(.5 * uS), this.a2R[3] = Math.floor(1.25 * this.a2R[2]), this.a2R[3] > aB4 && (this.a2R[3] = aB4, this.a2R[2] = Math.floor(aB4 / 1.2)), this.a2R[0] = Math.floor((p - this.a2R[2]) / 2),
			this.a2R[1] = Math.floor((q - this.a2R[3]) / 2)
	}, this.ni = function(gY, gZ) {
		return !(gY < this.a2R[0] || gZ < this.a2R[1] || gY > this.a2R[0] + this.a2R[2] || gZ > this.a2R[1] + this.a2R[3])
	}, this.cL = function(gY, gZ) {
		var tX, aB4 = b6(a4m + a4m % 2, 2);
		return aA.cJ = !0, gY < this.a2R[0] || gZ < this.a2R[1] || gY > this.a2R[0] + this.a2R[2] || gZ > this.a2R[1] + this.a2R[3] ? !(this.oB = !1) : (tX = Math.floor(.17 * this.a2R[3]), gZ < this.a2R[1] + tX ? gY > this.a2R[0] + this.a2R[2] -
			tX && (this.oB = !1) : (gZ = (gZ = Math.floor(aB4 * (gZ - this.a2R[1] - tX - .00576 * c6) / (this.a2R[3] - tX - .01152 * c6))) < 0 ? 0 : aB4 - 1 < gZ ? aB4 - 1 : gZ, gY > this.a2R[0] + this.a2R[2] / 2 && (gZ += aB4), a4m <= gZ ||
				a2E(gZ, Math.floor(16384 * Math.random()))), !0)
	}, this.cU = function() {
		var a2, ge, tX = Math.floor(.17 * this.a2R[3]),
			aB4 = b6(a4m + a4m % 2, 2),
			lc = .6 * .01152 * c6,
			tY = (this.a2R[3] - tX - (aB4 + 1) * lc) / aB4,
			m9 = Math.floor((this.a2R[2] - 3 * lc) / 2);
		for (cV.lineWidth = ow, cV.textAlign = cX, cV.textBaseline = cW, cV.fillStyle = cY.ho, cV.fillRect(this.a2R[0], this.a2R[1] + tX, this.a2R[2], this.a2R[3] - tX), cV.fillStyle = cY.iK, cV.fillRect(this.a2R[0], this.a2R[1], this.a2R[2],
			tX), cV.strokeStyle = cY.cZ, cV.strokeRect(this.a2R[0], this.a2R[1], this.a2R[2], this.a2R[3]), cV.fillStyle = cY.cZ, cV.fillRect(this.a2R[0], this.a2R[1] + tX, this.a2R[2], 2), cV.font = c9 + Math.floor(.48 * tX) + cA, cV.fillText(
				"Maps", Math.floor(this.a2R[0] + this.a2R[2] / 2), Math.floor(this.a2R[1] + .55 * tX)), cV.font = c9 + Math.floor(.48 * tY) + cA, a2 = aB4 - 1; 0 <= a2; a2--) ge = Math.floor(this.a2R[1] + tX + lc + a2 * (tY + lc)), aGP(a2, this
			.a2R[0] + lc, ge, m9, tY), aGP(a2 + aB4, this.a2R[0] + m9 + 2 * lc, ge, m9, tY);
		m0.sG(Math.floor(this.a2R[0] + this.a2R[2] - .7 * tX), Math.floor(this.a2R[1] + .3 * tX), Math.floor(.4 * tX)), cV.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function qj() {
	var dz;

	function aGS(jW) {
		var i = h(),
			aGU = Math.floor(i / 16777216);
		aGQ(jW, 24, aGU), aGQ(jW, 24, i - 16777216 * aGU)
	}

	function aGT(jW) {
		aGQ(jW, 14, a7S), aGQ(jW, 4, b ? 2 : 12 <= d ? 1 : 0 < d ? 3 : 0), aGQ(jW, 1, nZ ? 1 : 0), aGQ(jW, 1, na ? 1 : 0), aGQ(jW, 5, (new Date).getHours() % 24)
	}

	function aGQ(kr, bH, tl) {
		for (var e8, a2 = dz; a2 < dz + bH; a2++) kr[e8 = b6(a2, 8)] = (tl >> bH - (a2 - dz + 1) & 1) << 7 - a2 % 8 | kr[e8];
		dz += bH
	}
	this.wv = function() {
		var jW = new Uint8Array(3);
		aGQ(jW, 1, dz = 0), aGQ(jW, 3, 0), aGQ(jW, 14, a7S), fV.send(0, jW)
	}, this.a0a = function(a0c) {
		var aR = k.me(pm.a2d()),
			tA = aR.length,
			jW = new Uint8Array(b6(aAv = 135 + 10 * tA, 8) + (0 < aAv % 8 ? 1 : 0)),
			aAv = (aGQ(jW, 1, dz = 0), aGQ(jW, 3, 1), aGQ(jW, 10, a7U), aGQ(jW, 20, py.id), aGQ(jW, 10, Math.min(py.ti, 1023)), cQ.sI[2].mw.a0G());
		aGQ(jW, 6, aAv[0]), aGQ(jW, 6, aAv[1]), aGQ(jW, 6, aAv[2]), aGS(jW), aGT(jW);
		for (var a2 = 0; a2 < tA; a2++) aGQ(jW, 10, aR[a2]);
		fV.a1C = a0c, fV.send(a0c, jW)
	}, this.zH = function(a0c, id) {
		var jW = new Uint8Array(5);
		aGQ(jW, 1, dz = 0), aGQ(jW, 3, 7), aGQ(jW, 3, 0), aGQ(jW, 14, a7S), aGQ(jW, 1, id), aGQ(jW, 16, Math.abs(4096 + cR.position[id] + cR.zG[id]) % 65536), fV.send(a0c, jW)
	}, this.a34 = function(a0c) {
		var a2, nU;
		if (!(pm.a2t + 7e3 > aA.aB)) {
			pm.a2t = aA.aB;
			var jW = new Uint8Array(17);
			for (aGQ(jW, 1, dz = 0), aGQ(jW, 3, 7), aGQ(jW, 3, 2), aGS(jW), nU = sg(pm.a2s.length - 20, 0), a2 = pm.a2s.length - 1; nU <= a2; a2--) aGQ(jW, 4, Math.abs(pm.a2s.charCodeAt(a2) - 48) % 10);
			fV.send(a0c, jW)
		}
	}, this.a7A = function(a0c, a79) {
		var jW = new Uint8Array(1);
		aGQ(jW, 1, dz = 0), aGQ(jW, 3, 5), aGQ(jW, 1, a79 ? 1 : 0), fV.send(a0c, jW)
	}, this.a2H = function(a25) {
		var jW = new Uint8Array(1);
		aGQ(jW, 1, dz = 0), aGQ(jW, 3, 2), aGQ(jW, 4, a25), fV.send(fV.a1C, jW)
	}, this.a7I = function() {
		var jW = new Uint8Array(7);
		aGQ(jW, 1, dz = 0), aGQ(jW, 3, 6), aGQ(jW, 8, fV.t7()), aGQ(jW, 10, fx.a1I), aGQ(jW, 9, fx.a1J), aGQ(jW, 10, a7U), aGQ(jW, 14, a7S), fV.send(fV.o0, jW)
	}, this.ii = function(cr) {
		kU.kV(27), kU.kW(1, 1), kU.kW(4, 0), kU.kW(22, cr), fV.send(fV.o0, kU.jW)
	}, this.ik = function(dK, dp) {
		kU.kV(25), kU.kW(1, 1), kU.kW(4, 1), kU.kW(10, dK), kU.kW(10, dp), fV.send(fV.o0, kU.jW)
	}, this.ip = function(dK, im) {
		kU.kV(24), kU.kW(1, 1), kU.kW(4, 2), kU.kW(10, dK), kU.kW(9, im), fV.send(fV.o0, kU.jW)
	}, this.it = function(dK, cr) {
		kU.kV(37), kU.kW(1, 1), kU.kW(4, 3), kU.kW(10, dK), kU.kW(22, cr), fV.send(fV.o0, kU.jW)
	}, this.ix = function(iv, cr) {
		kU.kV(37), kU.kW(1, 1), kU.kW(4, 4), kU.kW(10, iv), kU.kW(22, cr), fV.send(fV.o0, kU.jW)
	}, this.iz = function(dp) {
		kU.kV(15), kU.kW(1, 1), kU.kW(4, 5), kU.kW(10, dp), fV.send(fV.o0, kU.jW)
	}, this.j3 = function(c8) {
		kU.kV(12), kU.kW(1, 1), kU.kW(4, 6), kU.kW(7, c8), fV.send(fV.o0, kU.jW)
	}, this.j6 = function(j5) {
		kU.kV(6), kU.kW(1, 1), kU.kW(4, 7), kU.kW(1, j5), fV.send(fV.o0, kU.jW)
	}, this.j8 = function() {
		kU.kV(5), kU.kW(1, 1), kU.kW(4, 8), fV.send(fV.o0, kU.jW)
	}, this.jQ = function(a4A, jP) {
		kU.kV(29), kU.kW(1, 1), kU.kW(4, 10), kU.kW(12, a4A), kU.kW(2, 0), kU.kW(10, jP), fV.send(fV.o0, kU.jW)
	}, this.jT = function(a4A, l1, l2, aGV) {
		kU.kV(46), kU.kW(1, 1), kU.kW(4, 10), kU.kW(12, a4A), kU.kW(2, 1), kU.kW(9, l1), kU.kW(9, l2), kU.kW(9, aGV), fV.send(fV.o0, kU.jW)
	}, this.jV = function(a4A) {
		var a2, n9 = fW.fX.n9;
		for (kU.kV(47 + 33 * n9.length), kU.kW(1, 1), kU.kW(4, 10), kU.kW(12, a4A), kU.kW(2, 2), kU.kW(24, fW.fX.n8), kU.kW(4, n9.length), a2 = 0; a2 < n9.length; a2++) kU.kW(9, n9[a2].player), kU.kW(24, n9[a2].nL);
		fV.send(fV.o0, kU.jW)
	}, this.jG = function(aGW, aGX) {
		kU.kV(21), kU.kW(1, 1), kU.kW(4, 15), kU.kW(9, aGX), kU.kW(7, aGW), fV.send(fV.o0, kU.jW)
	}, this.jJ = function(t1) {
		kU.kV(14), kU.kW(1, 1), kU.kW(4, 14), kU.kW(9, t1), fV.send(fV.o0, kU.jW)
	}, this.jN = function(aGY, target) {
		var a2, bH = aGY.length;
		for (kU.kV(14 + 9 * bH), kU.kW(1, 1), kU.kW(4, 13), kU.kW(9, target), a2 = 0; a2 < bH; a2++) kU.kW(9, aGY[a2]);
		fV.send(fV.o0, kU.jW)
	}, this.a2a = function(a0c) {
		var jW = new Uint8Array(4);
		aGQ(jW, 1, dz = 0), aGQ(jW, 3, 3), aGT(jW), fV.send(a0c, jW)
	}
}

function nY() {
	this.dt = 0, this.c8 = 0, this.jW = null, this.c5 = function(jW) {
		this.c8 = 0, this.jW = jW, this.dt = jW.length
	}, this.kV = function(aAv) {
		return this.c5(new Uint8Array(this.aGL(aAv))), this.jW
	}, this.a0s = function() {
		this.jW = null
	}, this.kW = function(dt, tl) {
		for (var jW = this.jW, hW = this.c8 + dt - 1, a2 = this.c8; a2 <= hW; a2++) jW[a2 >> 3] |= (tl >> hW - a2 & 1) << 7 - (7 & a2);
		this.c8 += dt, this.c8 > 8 * this.dt && console.log("error wrapper")
	}, this.aGZ = function(dt) {
		for (var jW = this.jW, hW = this.c8 + dt, a2 = this.c8; a2 < hW; a2++) jW[a2 >> 3] &= 255 ^ 128 >>> (7 & a2)
	}, this.aGL = function(aAv) {
		return aAv + 7 >> 3
	}, this.aGa = function(aR, dz, hW, aGb) {
		for (var a2 = dz; a2 < hW; a2++) this.kW(aGb, aR[a2])
	}
}
setTimeout(aG, 1e4);