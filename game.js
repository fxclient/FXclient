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
var dF, n2, fA, n1, ey = [60, 74, 112, 200, 256, 512];

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
	fR.eY(), fS.eY(), fT.fU(), fV.eY()
}

function fW() {
	bC.eY(), fX.eY(), fY.eY(), fZ.eY(), fa.eY(), b8.eY(), fb.eY(), dY.fc.eY(), fd(), fe.eY(), fL.eY(), fS.eY(), fS.ff(), fT.eY(), fg.eY(), fh.eY(), fi.eY(), fR.eY(), fj.eY(), fk.eY(), fl.eY(), bE.eY(), fm.eY(), fn.eY(), fV.eY(), fo.eY(), aA.eY()
}

function fp() {
	fq.eY(), fr.eY(), cH.eY(), fs.eY(), ft.eY(), fu.fv()
}

function fw() {
	fe.fx(!1), fi.fx(), fT.fx(!1), fh.fx(), fk.fx(), fl.fx(), fS.fx(2 === fy), fm.cB()
}

function fz() {
	fS.fx(!0) && (aA.cJ = !0), fV.eY()
}

function g0() {
	var g1, g2, g3, g4, g5, g6;

	function gA(gC) {
		for (var a2 = g2 - 1; 0 <= a2; a2--) 0 === g4[g3[a2]] && bi[g3[a2]] >= gC && ap(g3[a2])
	}

	function g8(player) {
		10 === g4[player] ? g4[player] = g1 : bi[player] < 1e3 ? g4[player] = 3 : bi[player] < 1e4 ? g4[player] = 2 : bi[player] < 6e4 ? g4[player] = 1 : g4[player] = 0
	}
	this.c5 = function() {
		g5 = g6 = 0, g1 = 6, g2 = 0, g3 = new Uint16Array(bM), g4 = new Uint8Array(bM)
	}, this.eY = function() {
		var a2;
		for (g5 = bE.bF[13], g6 = bB[bA], a2 = g2 - 1; 0 <= a2; a2--) 10 === g4[g3[a2]] ? g8(g3[a2]) : 0 == g4[g3[a2]]-- && (g8(g3[a2]), ap(g3[a2]));
		16e4 <= bi[g9[0]] && (gA(16e4), 3e5 <= bi[g9[0]]) && gA(3e5), bi[bA] > bE.bF[7] && (bE.bF[7] = bi[bA]), bE.bF[14] += g6 - bB[bA] + g5 - bE.bF[13]
	}, this.b9 = function(player) {
		for (var dx, a2 = g2 - 1; 0 <= a2; a2--)
			if (player === g3[a2]) {
				for (g2--, dx = a2; dx < g2; dx++) g3[dx] = g3[dx + 1];
				return
			}
	}, this.dm = function(player, gD) {
		for (var a2 = g2 - 1; 0 <= a2; a2--)
			if (player === g3[a2]) return;
		g3[g2++] = player, g4[player] = gD ? 2 : 10
	}
}

function gE() {
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

function gH() {
	var gI, gJ, g2, g3, g4, gK, gL, gM;

	function gP(a2) {
		var dx;
		for (g2--, dx = a2; dx < g2; dx++) g3[dx] = g3[dx + 1], g4[dx] = g4[dx + 1], gK[dx] = gK[dx + 1], gL[dx] = gL[dx + 1], gM[dx] = gM[dx + 1]
	}
	this.c5 = function() {
		gI = 1, g2 = 0, gJ = 2 * bM, g3 = new Uint16Array(gJ), g4 = new Uint8Array(gJ), gK = new Uint16Array(gJ), gL = new Uint32Array(gJ), gM = new Uint32Array(gJ)
	}, this.gN = function(c8, position) {
		gL[c8] = position
	}, this.eY = function() {
		for (var a2 = g2 - 1; 0 <= a2; a2--) 0 == g4[a2]-- && (g4[a2] = 2, gO.eY(a2, gK[a2], g3[a2], gL[a2], gM[a2]))
	}, this.b9 = function(player, id) {
		for (var a2 = g2 - 1; 0 <= a2; a2--)
			if (player === g3[a2] && id === gK[a2]) return void gP(a2)
	}, this.gQ = function(player) {
		for (var a2 = g2 - 1; 0 <= a2; a2--) player === g3[a2] && (gO.gR(player, gL[a2]), gP(a2))
	}, this.dm = function(player, dz, gS) {
		if (gJ <= g2) return 0;
		g3[g2] = player, g4[g2] = 0, gK[g2] = gI, gL[g2] = dz, gM[g2] = gS;
		player = gI;
		return g2++, gI = 2 * gJ < ++gI ? 1 : gI, player
	}, this.cU = function() {
		if (!(dM < 40 || 0 === g2)) {
			var dx, gV, gW, a2, cE, gZ, dq, ga = dL / dM,
				gb = dN / dM,
				gc = (gd + dL) / dM,
				ge = (cP + dN) / dM;
			for (cV.textAlign = cX, cV.textBaseline = cW, dx = g2 - 1; 0 <= dx; dx--) gV = bJ.gf(gL[dx]), gW = bJ.cT(gL[dx]), a2 = g3[dx], ga - 1 < gV && gV < gc && gb - 1 < gW && gW < ge && 0 !== dG[a2] && ((cE = Math.floor(.94 * dM * fS.gg(
				a2))) < 6 || (gV = Math.floor(gd * (gV + .5 - ga) / (gc - ga)), gW = Math.floor(cP * (gW + .48 - gb) / (ge - gb)), cV.font = c9 + cE + cA, cV.fillStyle = cY.gh, dq = as.b0(a2, as.gi(a2, gK[dx])), cV.fillText(gj.gk.gl ? fi
				.gm(dq) : gn[a2], gV, gW), (gZ = Math.floor(.5 * cE)) < 6) || (cV.font = c9 + gZ + cA, cV.fillText(gj.gk.gl ? gn[a2] : fi.gm(dq), gV, gW + Math.floor(.82 * cE))))
		}
	}
}

function go() {
	var gp, gq, gr, gs, gt, gu, gv, gw, gx, gy, gz, h0, h1, h2 = !1,
		h3 = !1;

	function h4(h5) {
		h0 = aA.aB, gr = gs = gq = 0, gt = (h1 = 33) / h5, gp = 1 / (h5 / h1 / 4), gu = (gd / 2 + dL) / dM, gv = (cP / 2 + dN) / dM, gw = dM
	}

	function hM(hO) {
		Math.abs(Math.log(gz / gw)) < .125 && (gz = hO * gw)
	}

	function hL(ga, gb, gc, ge) {
		gx = (ga + gc + 1) / 2, gy = (gb + ge + 1) / 2;
		gc = gd / (gc - ga + 1), ga = cP / (ge - gb + 1);
		gz = .9 * (gc < ga ? gc : ga)
	}
	this.h6 = function() {
		return h2
	}, this.h7 = function() {
		h4(1), this.h8(0, 0, an - 1, ao - 1), h9 || hA || this.hB(bA, 3e3, !0, .3)
	}, this.hB = function(player, h5, hC, zoom) {
		hD || h2 && !hC && h3 || 0 === bi[player] || (hE.hF = !1, h3 = hC, h4(h5), function(player) {
			gx = (eL[player] + eK[player] + 1) / 2, gy = (eO[player] + eN[player] + 1) / 2
		}(player), function(zoom, player) {
			var d7 = eK[player] - eL[player] + 1,
				player = eN[player] - eO[player] + 1,
				dx = gd / d7,
				e8 = cP / player,
				dx = (gz = dx < e8 ? dx : e8, 0 !== zoom ? zoom : d7 < 20 && player < 20 ? .5 : .9);
			gz *= dx, hM(7 / 8)
		}(zoom, player), h2 = !0, hI.hJ())
	}, this.hK = function(h5) {
		hA || hD || (hE.hF = !1, h3 = !0, h4(h5), hL(0, 0, an - 1, ao - 1), hM(7 / 8), h2 = !0, hI.hJ())
	}, this.h8 = function(ga, gb, gc, ge) {
		hL(ga, gb, gc, ge), dM = gz, hE.hP(gx, gd / 2), hE.hQ(gy, cP / 2), hR.hS()
	}, this.hT = function() {
		return !(h2 && h3 || (h2 = !1))
	}, this.eY = function() {
		var hW, hX, bR, ha;
		h2 && (gq < .5 ? gs < gt && (gs += gt * gp, gr = gq) : 1 - gr < gq && (gs = (gs -= gt * gp) < gt * gp ? gt * gp : gs), h0 = h0 >= aA.aB ? aA.aB - 1 : h0, bR = aA.aB - h0, gq = 1e3 < bR || 1 < (gq += gs * bR / h1) ? 1 : gq, h0 = aA.aB,
			bR = dM, hW = dL, hX = dN, bR = (dM = gw * Math.pow(gz / gw, gq)) / bR, ha = 1 - (gw * Math.pow(gz / gw, 1 - gq) - gw) / (gz - gw), hE.hP(gu + ha * (gx - gu), gd / 2), hE.hQ(gv + ha * (gy - gv), cP / 2), fS.zoom(bR, (hW * bR -
				dL) / (1 - bR), (hX * bR - dN) / (1 - bR)), hR.hS(), 1 <= gq && (h2 = !1, hb.hc = !0), aA.cJ = !0)
	}
}

function hd() {
	var eo = he.hf;
	this.gh = eo.hg(0, 0, 0), this.hh = eo.hi(0, 0, 0, .7), this.hj = eo.hi(0, 0, 0, .5), this.hk = eo.hi(0, 0, 0, .85), this.hl = eo.hi(0, 0, 0, .75), this.hm = eo.hi(0, 0, 0, .6), this.cZ = eo.hg(255, 255, 255), this.hn = eo.hi(255, 255, 255, .3),
		this.ho = eo.hi(255, 255, 255, .6), this.hp = eo.hi(255, 255, 255, .4), this.hq = eo.hi(255, 255, 255, .25), this.hr = eo.hi(255, 255, 255, .85), this.hs = eo.hi(255, 255, 255, .75), this.ht = eo.hg(128, 128, 128), this.hu = eo.hi(64, 64, 64,
			.75), this.hv = eo.hg(30, 255, 30), this.hw = eo.hg(0, 200, 0), this.hx = eo.hg(128, 255, 128), this.hy = eo.hi(10, 65, 10, .75), this.hz = eo.hi(0, 255, 0, .6), this.i0 = eo.hi(0, 255, 0, .5), this.i1 = eo.hi(0, 200, 0, .5), this.i2 = eo
		.hi(0, 100, 0, .75), this.i3 = eo.hi(0, 60, 0, .8), this.i4 = eo.hi(0, 255, 0, .3), this.i5 = eo.hi(0, 180, 0, .6), this.i6 = eo.hg(255, 120, 120), this.i7 = eo.hg(255, 160, 160), this.i8 = eo.hg(255, 70, 70), this.i9 = eo.hg(230, 0, 0), this
		.iA = eo.hi(220, 0, 0, .6), this.iB = eo.hi(255, 100, 100, .8), this.iC = eo.hi(100, 0, 0, .85), this.iD = eo.hi(60, 0, 0, .85), this.iE = eo.hi(200, 0, 0, .6), this.iF = eo.hi(0, 60, 60, .85), this.iG = eo.hi(10, 60, 60, .9), this.iH = eo
		.hi(0, 96, 96, .75), this.iI = eo.hg(160, 160, 255), this.iJ = eo.hi(0, 40, 90, .75), this.iK = eo.hi(0, 0, 255, .6), this.iL = eo.hg(255, 120, 100), this.iM = eo.hi(255, 255, 0, .5), this.iN = eo.hi(255, 255, 150, .2), this.iO = eo.hg(255,
			255, 0), this.iP = eo.hg(255, 255, 200), this.iQ = eo.hi(200, 200, 0, .6), this.iR = eo.hi(255, 140, 0, .75)
}

function iS() {
	this.iT = new iU, this.iV = new iW, this.iX = new iY, this.iZ = new ia, this.eu = new ib
}

function iU() {
	this.ic = function(cr) {
		fH ? et.iX.ic(bA, cr) : id.ie(cr)
	}, this.ig = function(dK, dp) {
		fH ? et.iX.ig(bA, dK, dp) : id.ih(dK, dp)
	}, this.ii = function(dK, ij) {
		fH ? et.iX.ik(bA, dK, ij) : id.il(dK, ij)
	}, this.im = function(dK, cr) {
		fH ? et.iX.im(bA, dK, cr) : dY.io.ip(bA, cr) && id.iq(dK, cr)
	}, this.ir = function(is, cr) {
		fH ? et.iX.ir(bA, is, cr) : dY.io.it(bA, is, cr) && id.iu(is, cr)
	}, this.iv = function(dp) {
		fH ? et.iX.iv(bA, dp) : id.iw(dp)
	}, this.ix = function(iy) {
		fH ? et.iX.iz(bA, iy) : id.j0(iy)
	}, this.j1 = function(j2) {
		fH ? et.iX.j1(bA, j2) : id.j3(j2)
	}, this.j4 = function() {
		fH ? et.iX.j4(bA) : id.j5()
	}
}

function ib() {
	this.ev = function(player, ij, dq) {
		he.iV.j6(player, dq, ij) && (bC.ii(player, ij), ij < dF) && e0.random() < e0.value(10) && (dj[ij] = 0)
	}, this.j7 = function(player, ij, dq) {
		he.iV.j8(dq, ij) && (he.iV.j9(ij, de.aL[0]), bE.jA(player, ij), fS.jB(ij, de.aL[0]))
	}
}

function iW() {
	this.jC = function(iy, player) {
		fR.ix(bA, player, iy), id.jD(iy, player)
	}, this.jE = function(player) {
		fR.jF(player, 0), id.jG(player)
	}, this.jH = function(jI, player) {
		fR.jJ(jI, player), id.jK(jI, player)
	}, this.jL = function(jM) {
		fH || hA || id.jN(jO(), jM)
	}, this.jP = function() {
		fH || hA || id.jQ(jO(), g9[0], g9[1], g9[2])
	}, this.jR = function() {
		fH || hA || id.jS(jO())
	}
}

function ia() {
	this.eY = function(jT) {
		var id, aS, hT;
		for (jU.c5(jT), jU.c8 += 2, hT = 8 * jU.dt; jU.c8 + 8 <= hT;) id = jU.jV(4), aS = jU.jV(9), 0 === id ? this.jW(id, aS, jU.jV(22)) : 1 === id ? this.jW(id, aS, jU.jV(10), jU.jV(10)) : 2 === id ? this.jW(id, aS, jU.jV(10), jU.jV(9)) : 3 ===
			id || 4 === id ? this.jW(id, aS, jU.jV(10), jU.jV(22)) : 5 === id ? this.jW(id, aS, jU.jV(10)) : 6 === id ? this.jW(id, aS, jU.jV(7)) : 7 === id ? this.jW(id, aS, jU.jV(1)) : this.jW(id, aS)
	}, this.jW = function(id, aS, aU, aW) {
		0 === id ? et.iX.ic(aS, aU) : 1 === id ? et.iX.ig(aS, aU, aW) : 2 === id ? et.iX.ik(aS, aU, aW) : 3 === id ? et.iX.im(aS, aU, aW) : 4 === id ? et.iX.ir(aS, aU, aW) : 5 === id ? et.iX.iv(aS, aU) : 6 === id ? et.iX.iz(aS, aU) : 7 === id ?
			et.iX.j1(aS, aU) : 8 === id ? et.iX.j4(aS) : et.iX.jX(aS)
	}
}

function iY() {
	this.ic = function(player, cr) {
		he.iV.jY(0) && he.iV.jZ(player) && ja.dS(cr) && (fo.jb.jc(0, player, cr), jd.dl(player, cr))
	}, this.ig = function(player, dK, dp) {
		he.iV.jY(1) && he.iV.jZ(player) && he.iV.je(player, dp) && he.iV.jf(player, dK, 12, b7) && as.eW(player) && he.iV.jg(player, dp) && dd(player) && (fo.jb.jc(1, player, dK, de.aP[0]), he.iV.jh(player), bE.ji(player, dK), dh(player))
	}, this.ik = function(player, dK, ij) {
		he.iV.jY(1) && he.iV.jZ(player) && di && he.iV.je(player, ij) && he.iV.jj(player, ij) && he.iV.j6(player, he.iV.dJ(player, dK), ij) && (fo.jb.jc(2, player, dK, ij), bC.ii(player, ij))
	}, this.im = function(player, dK, cr) {
		he.iV.jY(1) && he.iV.jZ(player) && ja.dS(cr) && dY.fc.jk !== dY.fc.jl && dY.fc.jm[player] !== dY.fc.jn && 0 !== bb[player].length && he.iV.jf(player, dK, 32, 16) && dY.jo.jp(player, cr) && (fo.jb.jc(3, player, dK, cr), he.iV.jh(player),
			dY.fc.jq(player))
	}, this.ir = function(player, is, cr) {
		he.iV.jY(1) && he.iV.jZ(player) && ja.dS(cr) && dY.io.jr(player, is) && dY.jo.js(cr) && (fo.jb.jc(4, player, is, cr), he.iV.jt(player, 8), dY.fc.ir())
	}, this.iv = function(player, dp) {
		he.iV.jY(1) && he.iV.jZ(player) && (dp = Math.min(dp, bM), as.eA(player, dp)) && (fo.jb.jc(5, player, dp), as.ju(player, dp))
	}, this.iz = function(player, iy) {
		he.iV.jY(2) && he.iV.jZ(player) && (iy = Math.min(iy, a3.a4 - 1), fo.jb.jc(6, player, iy), fS.jv(player, 0, iy))
	}, this.j1 = function(player, j2) {
		he.iV.jY(1) && he.iV.jZ(player) && (fo.jb.jc(7, player, j2), fl.jw(player, j2))
	}, this.j4 = function(player) {
		(he.iV.jY(0) || he.iV.jY(1)) && he.iV.jZ(player) && fn.j4(player) && fo.jb.jc(8, player)
	}, this.jX = function(player) {
		fn.jX(player), fo.jb.jc(9, player)
	}
}

function jx(jy, jz) {
	this.gV = 0, this.gW = 0, this.cG = 0, this.eH = 0, this.resize = function() {
		this.eH = Math.min(he.hf.k0() * jy[1] * c6, cP - 2 * k1), this.cG = Math.min(this.eH * (jy[0] / jy[1]), gd - 2 * k1), this.eH = jy[1] * this.cG / jy[0], this.gV = k1 + jz[0] * (gd - this.cG - 2 * k1), this.gW = k1 + jz[1] * (cP - this
			.eH - 2 * k1)
	}, this.k2 = function() {
		return this.gV + .5 * this.cG
	}
}

function k3() {
	var k4, k5 = !0;

	function kI() {
		k4.select(), document.execCommand("copy")
	}
	this.k6 = !1, this.c5 = function() {
		(k4 = document.createElement("textarea")).setAttribute("name", "replayData"), k4.setAttribute("id", "replayDataField"), k4.setAttribute("autocomplete", "off"), k4.setAttribute("placeholder", "Insert the replay link here!"), k4.style
			.position = "absolute", k4.style.resize = "none", k4.style.borderRadius = "0", k4.style.color = cY.cZ, k4.style.backgroundColor = cY.hh, k4.addEventListener("focus", function() {
				k7.k6 = !0
			}), k4.addEventListener("blur", function() {
				k7.k6 = !1
			})
	}, this.show = function() {
		document.body.appendChild(k4)
	}, this.k8 = function() {
		document.body.removeChild(k4)
	}, this.resize = function(gV, gW, cG, eH) {
		he.hf.k9(k4.style, gV, gW, cG, eH), k4.style.font = he.hf.kA(Math.max(5, .1 * eH / kB), 0)
	}, this.kC = function(kD) {
		k4.value = kD
	}, this.kE = function() {
		return k4.value
	}, this.kF = function() {
		k4.select()
	}, this.kG = function() {
		k4.value = ""
	}, this.kH = function() {
		k5 && navigator.clipboard ? (k4.select(), navigator.clipboard.writeText(k4.value).catch(function() {
			k5 = !1, kI()
		})) : kI()
	}
}

function kJ() {
	var kK = new Uint8Array(78);
	this.c5 = function() {
		var a2;
		for (kK[50] = 37, a2 = 0; a2 < 10; a2++) kK[a2 + 3] = a2 + 1;
		for (a2 = 0; a2 < 26; a2++) kK[a2 + 20] = a2 + 11, kK[a2 + 52] = a2 + 38
	}, this.kL = function(j) {
		return j.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "_")
	}, this.kM = function(j, kN) {
		for (var kO = kK, bH = j.length, aR = new Uint8Array(kN || bH), a2 = 0; a2 < bH; a2++) aR[a2] = kO[j.charCodeAt(a2) - 45];
		return aR
	}, this.kP = function(kQ) {
		var a2, bH = kQ.length,
			cG = kR;
		for (cG.kS(6 * bH), a2 = 0; a2 < bH; a2++) cG.kT(6, kQ[a2]);
		jU.c5(cG.jT)
	}
}

function kU() {
	var cG, eH, kV;

	function kx(ky, bR, kv, kb, kq) {
		bR = kw(ky, bR + 1 + 2 * kb & 3);
		! function(ky, kz) {
			return 1 < Math.abs(ky % cG - kz % cG) || 1 < Math.abs(l2(ky) - l2(kz))
		}(ky, bR) && 0 === kq[bR << 2] && (kq[bR << 2] = kv)
	}

	function l2(bP) {
		return Math.floor((bP + .5) / cG) % eH
	}

	function kw(bP, bR) {
		return bP + kV[bR]
	}
	this.kW = function(j) {
		var a2, kX, bH, kZ, kc = jU;
		for (kd.kP(kd.kM(j)), an = cG = kc.jV(12), ao = eH = kc.jV(12), kV = [-cG, -1, cG, 1], (km = document.createElement("canvas")).width = an, km.height = ao, ki = km.getContext("2d", {
				alpha: !1
			}), kj = ki.getImageData(0, 0, an, ao), kn = kj.data, he.ko.kp(kn), bH = kc.jV(12), kX = kc.jV(5), kZ = kf(cG * eH - 1), a2 = 0; a2 < bH; a2++) ! function(kY, bP, ka, kb) {
			var a2, bR, kc = jU,
				kq = kn,
				kr = bP,
				ks = bP,
				kt = 0,
				ku = 1 + ka,
				kv = 2 - ka;
			for (kq[bP << 2] = ku, a2 = 0; a2 < kY; a2++) bR = kc.jV(2), bP = kw(bP, bR), kq[bP << 2] === ku ? kt % 2 == 1 && kx(ks, kt + 2 * kb + 3, kv, kb, kq) : kq[bP << 2] = ku, kx(bP, bR, kv, kb, kq), kx(ks, bR, kv, kb, kq), ks = bP,
				kt = bR;
			kw(bP, 0) === kr ? (kx(bP, 0, kv, kb, kq), kx(kr, 0, kv, kb, kq)) : kw(bP, 1) === kr && (kx(bP, 0, kv, kb, kq), kx(kr, 2, kv, kb, kq));
			0 === kY && (kx(kr, 0, kv, kb, kq), kx(kr, 2, kv, kb, kq))
		}(kc.jV(kX), kc.jV(kZ), 1 === kc.jV(1), 1 === kc.jV(1));
		var gV, gW, l3, l4, l5, l6, kq = kn,
			l7 = !0,
			l8 = l9.get(lA).l8,
			lB = l9.get(lA).lB;
		for (gW = 0; gW < eH; gW++)
			for (l4 = !0, l5 = l7, gV = l6 = 0; gV < cG; gV++) l3 = 4 * gW * cG + 4 * gV, l6 <= gV && 0 < kq[l3] && (l5 = 2 === kq[l3], l4) && (l4 = !1, l5 !== l7) ? (l7 = l5, l6 = gV + 1, gV = -1) : (l5 ? (kq[l3] = lB[0], kq[1 + l3] = lB[1], kq[
				2 + l3] = lB[2]) : (kq[l3] = l8[0], kq[1 + l3] = l8[1], kq[2 + l3] = l8[2]), kq[3 + l3] = 255);
		ki.putImageData(kj, 0, 0), kk = !0, kl.c5(), aA.cJ = !0
	}
}

function lC() {
	var gV, gW, cG, eH, lD, lE, lF, lG, player, aR;

	function lO() {
		return function() {
			var a2;
			for (a2 = 0; a2 < 8; a2++)
				if (gV = b6(cG * e0.random(), e0.value(100)), gW = b6(eH * e0.random(), e0.value(100)), lW()) return 1;
			return
		}() || function() {
			var d7, dA, dx, lM, e8, lL;
			for (d7 = b6(cG * e0.random(), e0.value(100)), dA = b6(eH * e0.random(), e0.value(100)), dx = 40; 1 <= dx; dx--)
				for (lM = eH - dx; 0 <= lM; lM -= 40)
					for (gW = (lM + dA) % eH, e8 = 40; 1 <= e8; e8--)
						for (lL = cG - e8; 0 <= lL; lL -= 40)
							if (gV = (lL + d7) % cG, lW()) return 1;
			return
		}()
	}

	function lW() {
		for (var bP, lY, lZ = b6(lD - lG, 2), la = lF + gW * lD + lZ, lb = lE + gV * lD + lZ, lX = la + lG - 1; la <= lX; lX--)
			for (lY = lb + lG - 1; lb <= lY; lY--)
				if (bP = bJ.lU(lY, lX), !bJ.bK(bP) || bJ.ds(bP)) return;
		return 1
	}

	function lP(lL, lM) {
		lH(), lc(lL - 2, lM - 2)
	}

	function lH() {
		dG[player] = 0, bB[player] = 0, bi[player] = ld[player] = 0, bI[player] = [], ba[player] = [], bb[player] = [], be[player] = [], eL[player] = eO[player] = eK[player] = eN[player] = 0
	}

	function lc(lL, lM) {
		var bP, a2, lf, lg;
		for (dG[player] = 1, bB[player] = player < dF ? le : ey[eZ.dq[player - dF]], eL[player] = lL + 10, eO[player] = lM + 10, eN[player] = eK[player] = 0, lf = lL; lf < lL + 4; lf++)
			for (lg = lM; lg < lM + 4; lg++)(lL < lf && lf < lL + 3 || lM < lg && lg < lM + 3) && (bP = bJ.lU(lf, lg), bJ.bK(bP)) && (eL[player] = lf < eL[player] ? lf : eL[player], eK[player] = lf > eK[player] ? lf : eK[player], eO[player] = lg <
				eO[player] ? lg : eO[player], eN[player] = lg > eN[player] ? lg : eN[player], aR[bi[player]] = bP, bi[player]++, bJ.lh(bP, player));
		for (ld[player] = bi[player], a2 = bi[player] - 1; 0 <= a2; a2--) bJ.li(aR[a2], player) ? (bJ.bL(aR[a2], player), ba[player].push(aR[a2])) : bJ.lj(aR[a2]) ? (bJ.bL(aR[a2], player), bb[player].push(aR[a2])) : bJ.lk(aR[a2]) && (bJ.bL(aR[a2],
			player), be[player].push(aR[a2]))
	}

	function lV(lL, lM) {
		for (var bP, lY, lX = lM; lM - 6 < lX; lX--)
			for (lY = lL; lL - 6 < lY; lY--)
				if (bP = bJ.lU(lY, lX), bJ.ds(bP)) return;
		return 1
	}
	this.c5 = function() {
		var a2, lL, lM;
		if (aR = new Array(12), lG = 6, cG = b6(an, lD = 10), eH = b6(ao, lD), lE = b6(an - lD * cG, 2), lF = b6(ao - lD * eH, 2), h9)
			for (a2 = 0; a2 < dF; a2++) player = a2, lH(), dG[player] = 1;
		if (fB.fC && fB.fD.lI) {
			for (player = 0; player < bM; player++)
				if (1 !== dG[player]) {
					if (player < lN) {
						if (function() {
								var lL = fB.fD.lI[player] + 1,
									lM = fB.fD.lT[player] + 1;
								if (3 < lL && lL < an - 5 && 3 < lM && lM < ao - 5 && bJ.bK(bJ.lU(lL, lM)) && lV(lL + 3, lM + 3)) return lP(lL + 1, lM + 1), 1;
								return
							}()) continue;
						if (lO()) {
							lL = lE + gV * lD + b6(lD, 2), lM = lF + gW * lD + b6(lD, 2), lP(lL, lM);
							continue
						}
					}
					lH()
				}
		} else ! function() {
			var lL, lM;
			for (player = 0; player < bM; player++) 1 !== dG[player] && (player < lN && lO() ? (lL = lE + gV * lD + b6(lD, 2), lM = lF + gW * lD + b6(lD, 2), lP(lL, lM)) : lH())
		}();
		bE.bF[7] = bi[bA], bE.bF[8] = bB[bA]
	}, this.ll = function(dp, lm, ln) {
		var a2, lL, lM, bP, gV, gW;
		for (player = dp, a2 = 0; a2 < 20; a2++)
			for (lL = lm + a2; lm - a2 <= lL; lL--)
				for (lM = ln + a2; ln - a2 <= lM; lM--)
					if ((lL === lm + a2 || lL === lm - a2 || lM === ln + a2 || lM === ln - a2) && 3 < lL && lL < an - 5 && 3 < lM && lM < ao - 5 && bJ.bK(bJ.lU(lL, lM)) && lV(lL + 3, lM + 3)) {
						if (0 < bi[player]) {
							for (gW = gV = bP = void 0, gV = eK[player]; gV >= eL[player]; gV--)
								for (gW = eN[player]; gW >= eO[player]; gW--) bP = 4 * (gW * an + gV), bJ.lp(player, bP) && (bJ.lq(bP), bi[player]--);
							lH()
						}
						return lc(lL - 1, lM - 1), !0
					} return !1
	}, this.lr = function(dp) {
		player = dp, lO() ? lP(lE + gV * lD + b6(lD, 2), lF + gW * lD + b6(lD, 2)) : lH()
	}
}

function ls() {
	lt.lu(), cV.setTransform(dM, 0, 0, dM, 0, 0), cV.imageSmoothingEnabled = dM < 3, cV.drawImage(km, hE.gf(), hE.cT()), fg.lv.cU(), cV.drawImage(lw, hE.gf(), hE.cT()), lt.cU(), cV.imageSmoothingEnabled = !1, cV.setTransform(1, 0, 0, 1, 0, 0), dY.lv
		.cU(), fS.cU(), fb.cU(), (hD ? (fm.cU(), ft) : (cV.imageSmoothingEnabled = !1, fR.cU(), fe.cU(), fk.cU(), ft.cU(), fl.cU(), fT.cU(), hE.cU(), cH.cU(), fm.cU(), fh.cU(), fi.cU(), lx.cU(), ly.cU(), fr.cU(), lz.cU(), k7.cU(), fs)).cU()
}

function m0(hf, cG, eH) {
	hf.clearRect(0, 0, cG, eH), hf.fillStyle = cY.hl, hf.fillRect(0, 0, cG, eH)
}

function m1(hf, cG, eH, m2) {
	hf.fillStyle = cY.cZ, hf.fillRect(0, 0, cG, m2), hf.fillRect(0, 0, m2, eH), hf.fillRect(cG - m2, 0, m2, eH), hf.fillRect(0, eH - m2, cG, m2)
}

function m3(hf, gV, gW, m4, m2, bP, m5) {
	hf.fillStyle = cY.cZ;
	var bP = Math.floor(m4 * bP),
		m7 = (bP += (bP - m2) % 2, Math.floor((bP - m2) / 2)),
		m4 = Math.floor((m4 - bP) / 2);
	hf.fillRect(gV + m4, gW + m4 + m7, bP, m2), m5 && hf.fillRect(gV + m4 + m7, gW + m4, m2, bP)
}

function m9() {
	this.mA = null, this.c5 = function(mA) {
		this.mA = mA, fR.mB(this.mA)
	}, this.mC = function(mD) {
		var cp = (this.mA[mD].mE - this.mA[1 - mD].mE) / 10,
			cp = 8 / (1 + Math.pow(2, cp / 32)),
			cp = Math.floor(10 * cp + .5),
			mG = this.mH(this.mA[mD].mE + cp + 1),
			cp = this.mH(this.mA[1 - mD].mE - cp);
		0 === mD ? fR.mJ(this.mA, mG, cp, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : fR.mJ(this.mA, cp, mG, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.mH = function(mE) {
		return 16e3 <= (mE = mE < 0 ? 0 : 16e3 < mE ? 16e3 : mE) ? "Unknown" : (mE / 10).toFixed(1)
	}
}

function mK() {
	var mL = new Uint8Array(64);
	this.c5 = function() {
		var a2;
		for (mL[0] = 45, mL[37] = 95, a2 = 0; a2 < 10; a2++) mL[a2 + 1] = 48 + a2;
		for (a2 = 0; a2 < 26; a2++) mL[a2 + 11] = 65 + a2, mL[a2 + 38] = 97 + a2
	}, this.mM = function(mN) {
		for (var kc = jU, kQ = new Uint8Array(mN), a2 = 0; a2 < mN; a2++) kQ[a2] = kc.jV(6);
		return kQ
	}, this.mO = function(kQ) {
		for (var bH = kQ.length, mP = mL, aR = [], a2 = 0; a2 < bH; a2++) aR.push(String.fromCharCode(mP[kQ[a2]]));
		return aR.join("")
	}
}

function mQ() {
	var mR, mS, mT;
	mR = [32, 65, 191, 913, 931], mS = [64, 127, 688, 930, 1155], mT = new Array(mR.length + 1);
	for (var a2 = 0; a2 < mT.length; a2++) {
		mT[a2] = 0;
		for (var dx = a2 - 1; 0 <= dx; dx--) mT[a2] += mS[dx] - mR[dx]
	}

	function ma(eo) {
		for (var a2 = mR.length - 1; 0 <= a2; a2--)
			if (eo >= mR[a2] && eo < mS[a2]) return a2;
		return -1
	}
	this.mV = function(j) {
		return 0 !== (j = j.trim()).indexOf("Bot ") && 0 !== j.indexOf("[Bot] ") && function(j, mX, mY) {
			var bH = (j = j.trim()).length;
			if (bH < mX || mY < bH) return !1;
			for (var eo, mZ = 0, a2 = 0; a2 < bH; a2++)
				if (eo = j.charCodeAt(a2), mZ += 65 <= eo && eo <= 90 || 1040 <= eo && eo <= 1071 ? 1 : 0, -1 === ma(eo)) return !1;
			if (3 < mZ && mZ > Math.floor(bH / 2)) return !1;
			return !0
		}(j, 3, 20)
	}, this.mb = function(j) {
		for (var bH = (j = j.trim()).length, aR = [], a2 = 0; a2 < bH; a2++) {
			var eo, bP = ma(eo = j.charCodeAt(a2));
			aR.push(mT[bP] + eo - mR[bP])
		}
		return aR
	}, this.kW = function(aR) {
		for (var eo, e8, j = "", bH = aR.length, a2 = 0; a2 < bH; a2++)
			for (e8 = 1; e8 < mT.length; e8++)
				if (aR[a2] < mT[e8]) {
					eo = mR[e8 - 1] + aR[a2] - mT[e8 - 1], j += String.fromCharCode(eo);
					break
				} return j
	}, this.mc = function(j) {
		for (var aR = this.mb(j), result = "", a2 = 0; a2 < aR.length; a2++) result = (result += aR[a2] < 10 ? "00" : aR[a2] < 100 ? "0" : "") + aR[a2].toString(10);
		return result
	}, this.md = function(j) {
		for (var aR = new Array(Math.floor(j.length / 3)), a2 = 0; a2 < j.length; a2 += 3) aR[Math.floor(a2 / 3)] = parseInt(j.substring(a2, a2 + 3));
		return this.kW(aR)
	}, this.x = function(j) {
		for (var aF, aR = [j.length], a2 = 0; a2 < j.length; a2++) aR[a2] = j.charCodeAt(a2) - 48;
		var result = "";
		for (a2 = 0; a2 < j.length; a2++) a2 === j.length - 1 || 51 < 10 * aR[a2] + aR[a2 + 1] ? result += aR[a2].toString() : (aF = 10 * aR[a2] + aR[a2 + 1], result += String.fromCharCode(aF + (aF < 26 ? 65 : 71)), a2++);
		return result
	}, this.l = function(j) {
		for (var eo, result = "", a2 = 0; a2 < j.length; a2++) 48 <= (eo = j.charCodeAt(a2)) && eo < 58 ? result += String.fromCharCode(eo) : 65 <= eo && eo < 75 ? result += "0" + (eo - 65).toString() : 75 <= eo && eo < 91 ? result += (eo - 65)
			.toString() : 97 <= eo && eo < 123 && (result += (eo - 71).toString());
		return result
	}, this.me = function(j) {
		for (var bH = j.length, aR = [], a2 = 0; a2 < bH; a2++)(eo = j.charCodeAt(a2)) < 58 ? aR.push(j[a2]) : (eo -= eo < 91 ? 65 : 71, aR.push(String(b6(eo, 10))), aR.push(String(eo - 10 * b6(eo, 10))));
		var bH = aR.length - 2,
			eo = 0,
			kQ = [];
		for (a2 = 0; a2 < bH; a2 += 3) kQ[eo++] = parseInt(aR[a2] + aR[a2 + 1] + aR[a2 + 2]);
		return kQ
	}, this.mf = function() {
		for (var mg, mh = "", a2 = 0; a2 < 6; a2++) mg = 48 + e0.random() % 36, mg += 58 <= mg ? 39 : 0, mh += String.fromCharCode(mg);
		return mh
	}
}

function mi() {
	this.mj = new mk, this.ml = new mm
}

function mk() {
	function mo() {
		if (2 === fy) return 1;
		fl.n0(), fy = 2, n1 = n2
	}

	function mr() {
		fR.n3(!0), fe.fx(!0), fT.fx(!0), fl.fx(), ft.n4(), aA.cJ = !0, hb.n5(), a7(0)
	}
	this.mn = function() {
		mo() || (et.iV.jP(), fR.mp(247, 0), fR.mq(0, 59), fq.hK(2700), fr.show(!1, !1, !0), mr())
	}, this.ms = function(mt) {
		var jM = 0,
			mu = !1;
		mo() || (8 === fF ? ((mu = (jM = mt < 0 ? bi[0] >= bi[1] ? 0 : 1 : mt) === bA) ? fR.mq(jM, 2) : fR.mq(1 - bA, 3), mv.mC(jM), et.iV.jL(jM)) : di ? (mu = ep.eq[bA] === fm.mw(), 9 === fF ? (et.iV.jL(mu ? g9[0] : 512), fR.mx(mu)) : my.ml.eY(
			mu)) : (mu = (jM = g9[0]) === bA, fR.mz(jM), et.iV.jL(jM)), fr.show(mu, !1), mr())
	}
}

function mm() {
	function nO(n7, bQ) {
		for (var j = "", a2 = bQ; a2 < n7.length && a2 < bQ + 4; a2++) j += (a2 === bQ ? "" : "   ") + "[" + ep.nG[n7[a2].id] + "]: " + n7[a2].nL.toFixed(Math.max(Math.floor(3 - Math.log10(n7[a2].nL)), 0));
		j.length && fR.nN(0, j, 45, 0, he.hf.hg(225, 240, 255), cY.hl, -1, !1)
	}
	this.n6 = 0, this.n7 = null, this.eY = function(mu) {
		var n8 = ep.n9[fm.nA()];
		this.n6 = fm.nB(), this.n7 = function(n8, n6) {
				var a2, e8, bH, eq = ep.eq,
					n9 = ep.n9,
					nG = ep.nG,
					nH = ep.nH,
					nI = bi,
					nJ = dF,
					nK = [],
					c8 = 0;
				for (e8 = nG.length - 1; 0 <= e8; e8--)
					if (n9[eq[nH[e8][0]]] === n8) {
						for (nK.push({
								id: e8,
								nI: 0,
								player: nH[e8][0],
								nL: 0
							}), bH = nH[e8].length, a2 = 0; a2 < bH; a2++) nK[c8].nI += nI[nH[e8][a2]];
						for (nK[c8].nL = (1 + nM) * nJ * nK[c8].nI / n6, a2 = 0; a2 < c8; a2++)
							if (nK[c8].nI > nK[a2].nI) {
								nK.splice(a2, 0, nK[c8]), nK.pop();
								break
							} c8++
					} 8 < nK.length && (nK.length = 8);
				for (; 0 < nK.length && 0 === nK[nK.length - 1].nI;) nK.pop();
				return nK
			}(n8, this.n6), cH.nD("Team " + ep.c4[n8], 2, 1, 12),
			function(mu, n8) {
				var color;
				mu = mu ? (color = he.hf.hg(10, 220, 10), "Congratulations! Team " + ep.c4[n8] + " won the game!") : (color = he.hf.hg(200, 80, 80), "Our alliance was defeated! Team " + ep.c4[n8] + " won the game.");
				fR.nN(0, mu, 40, 0, color, cY.hl, -1, !1)
			}(mu, n8), 0 !== (mu = this.n7).length && (n8 = "The allied clans of the winning team have earned these glorious points:", fR.nN(0, n8, 40, 0, cY.cZ, cY.hl, -1, !1), nO(mu, 0), nO(mu, 4), n8 =
				"Clan rankings and results can also be accessed under:", fR.nN(200, n8, 735, 0, cY.cZ, cY.hl, -1, !1), fR.nN(200, "territorial.io/clans", 735, 0, cY.cZ, cY.hl, -1, !1), fR.nN(200, "territorial.io/results", 735, 0, cY.cZ, cY.hl, -
					1, !1)), et.iV.jR(), fq.hK(2700)
	}
}

function nP() {
	var nQ, kQ;

	function nU() {
		var a2, cG = new nV;
		for (cG.kS(800), cG.kT(1, 0), cG.kT(3, 7), cG.kT(3, 1), cG.kT(2, b ? 2 : 12 <= d ? 1 : 0 < d ? 3 : 0), cG.kT(1, nW ? 1 : 0), cG.kT(1, nX ? 1 : 0), cG.kT(1, 2 === nY ? 1 : 0), a2 = 0; a2 < kQ.length && !(cG.c8 + 6 > 8 * cG.dt); a2++) cG.kT(6,
			kQ[a2]);
		nQ.send(cG.jT), nQ.onopen = null
	}
	window.addEventListener("error", function error(nR) {
		var nT;
		window.removeEventListener("error", error), nR = nR.lineno + " " + nR.colno + " " + nR.message, (nT = new kJ).c5(), kQ = nT.kM(nT.kL(nR)), (nQ = new WebSocket("wss://territorial.io/s52/")).onopen = nU, e ? e.showToast(nR) : alert(nR)
	})
}

function nZ() {
	var na = -15e3,
		nb = !1;

	function cL(nR) {
		nu() || (nb = !0, nv(nR, 1), fV.nw(fV.nx), ny(Math.floor(kB * nR.clientX), Math.floor(kB * nR.clientY)))
	}

	function nj(nR) {
		na = aA.aB, nv(nR, 1), fV.nw(fV.nx), 0 < nR.touches.length && (nz = Math.floor(kB * nR.touches[0].clientX), o0 = Math.floor(kB * nR.touches[0].clientY), o1.nj(nR) || ny(nz, o0))
	}

	function ny(gV, gW) {
		0 === fy ? aH.cL(gV, gW) : ft.o2(gV, gW) || lz.cL(gV, gW) || k7.cL(gV, gW) || fr.cL(gV, gW) || ly.o3(gV, gW) || fi.cL(gV, gW) || lx.cL(gV, gW) || o4.o5(gV, gW) || fl.cL(gV, gW) || ly.o6(gV, gW)
	}

	function nf(nR) {
		nu() || (nb = !0, nv(nR, 1), o7(Math.floor(kB * nR.clientX), Math.floor(kB * nR.clientY)))
	}

	function nk(nR) {
		na = aA.aB, nv(nR, 1), 0 < nR.touches.length && (nz = Math.floor(kB * nR.touches[0].clientX), o0 = Math.floor(kB * nR.touches[0].clientY), o1.nk(nR) || o7(nz, o0))
	}

	function o7(gV, gW) {
		0 === fy ? aH.nf(gV, gW) : lz.nf(gV, gW) || (lx.nf(gV, gW), ly.o8() ? ly.nf(gV, gW) : fk.o9 ? fk.nf(gV, gW) && (aA.cJ = !0) : (fe.nf(gV, gW), hE.hF && hE.nf(gV, gW) && (aA.cJ = !0)))
	}

	function nh(nR) {
		nu() || (nv(nR, 1), 0 === fy ? (aH.click(-1024, -1024), oA.oB()) : (fe.oC(-1024, -1024), lx.nf(-1024, -1024), fk.oD(), hE.hF && (hE.hF = !1)))
	}

	function ng(nR) {
		nu() || (nv(nR, 1), oE(Math.floor(kB * nR.clientX), Math.floor(kB * nR.clientY), 2 === nR.button))
	}

	function click(nR) {
		nu() || nv(nR, 1)
	}

	function nl(nR) {
		na = aA.aB, nv(nR, 1), nR && nR.touches && 0 < nR.touches.length && 0 !== fy ? hE.hF = !1 : o1.oF() || oE(nz, o0, !1)
	}

	function nm(nR) {
		na = aA.aB, nv(nR, 1), oE(nz, o0, !1)
	}

	function nn(nR) {
		oG.nn(nR)
	}

	function no(nR) {
		oG.no(nR)
	}

	function np(nR) {
		nu() || nv(nR, 0)
	}

	function oE(gV, gW, oH) {
		0 === fy ? aH.click(gV, gW) : (fe.oC(gV, gW), lz.oC(), fk.oD(), hE.hF = !1, ly.click(gV, gW, oH) && (aA.cJ = !0))
	}

	function ni(nR) {
		var gV, gW, deltaY;
		nu() || (nv(nR, 1), fV.nw(fV.nx), gV = Math.floor(kB * nR.clientX), gW = Math.floor(kB * nR.clientY), deltaY = nR.deltaY, 1 === nR.deltaMode && (deltaY *= 16), 0 === fy ? aH.ni(gV, gW, deltaY) : fe.ni(gV, gW, deltaY) || (fk.oI(gV, gW) ? fk
			.ni(deltaY) && (aA.cJ = !0) : hE.ni(gV, gW, +deltaY)))
	}

	function nq(nR) {
		nv(nR, 0)
	}

	function nv(nR, id) {
		0 === id && (oJ.o8 || k7.o8 || oK.o8) || 1 === id && (oK.k6 || k7.k6) || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aH.oM() && nR.preventDefault()
	}

	function nr(nR) {
		nu() || aA.aB < 400 || (8 !== aH.oM() && aH.oN(nR) ? aA.cJ = !0 : "Escape" === nR.key ? aH.aI() : "ArrowLeft" === nR.key || "a" === nR.key ? hI.oO(3) : "ArrowUp" === nR.key || "w" === nR.key ? hI.oO(0) : "ArrowRight" === nR.key || "d" === nR
			.key ? hI.oO(1) : "ArrowDown" === nR.key || "s" === nR.key ? hI.oO(2) : "h" === nR.key ? 1 <= fy && ft.oP(!hD) : " " === nR.key && fy && (lx.oQ && lx.oR(), hA) && ft.oS(!1))
	}

	function ns(nR) {
		nu() || ("ArrowLeft" === nR.key || "a" === nR.key ? hI.oT(3) : "ArrowUp" === nR.key || "w" === nR.key ? hI.oT(0) : "ArrowRight" === nR.key || "d" === nR.key ? hI.oT(1) : "ArrowDown" === nR.key || "s" === nR.key ? hI.oT(2) : "1" === nR.key ?
			fk.oU(.75) : "2" === nR.key ? fk.oU(7 / 8) : "3" === nR.key ? fk.oU(.9375) : "4" === nR.key ? fk.oU(31 / 32) : "5" === nR.key ? fk.oU(32 / 31) : "6" === nR.key ? fk.oU(16 / 15) : "7" === nR.key ? fk.oU(8 / 7) : "8" === nR.key ? fk.oU(
				4 / 3) : "+" === nR.key ? 0 !== fy && hE.ni(Math.floor(gd / 2), Math.floor(cP / 2), -200) : "-" === nR.key ? 0 !== fy && hE.ni(Math.floor(gd / 2), Math.floor(cP / 2), 200) : "c" === nR.key && 0 !== fy && lz.oV())
	}

	function nt() {
		"hidden" === document.visibilityState ? aA.oW() : aA.oX()
	}

	function nu() {
		return na + 15e3 > aA.aB
	}

	function resize() {
		oa.ob()
	}
	this.nc = 0, this.nd = "", this.c5 = function() {
		ne.addEventListener("mousedown", cL, {
			passive: !1
		}), ne.addEventListener("mousemove", nf, {
			passive: !1
		}), ne.addEventListener("mouseup", ng, {
			passive: !1
		}), ne.addEventListener("click", click, {
			passive: !1
		}), ne.addEventListener("mouseleave", nh, {
			passive: !1
		}), ne.addEventListener("wheel", ni, {
			passive: !1
		}), ne.addEventListener("touchstart", nj, {
			passive: !1
		}), ne.addEventListener("touchmove", nk, {
			passive: !1
		}), ne.addEventListener("touchend", nl, {
			passive: !1
		}), ne.addEventListener("touchcancel", nm, {
			passive: !1
		}), ne.addEventListener("dragover", nn), ne.addEventListener("drop", no), ne.addEventListener("dblclick", np), document.addEventListener("contextmenu", nq), document.addEventListener("keyup", nr), document.addEventListener("keydown",
			ns), document.addEventListener("visibilitychange", nt), window.addEventListener("resize", resize)
	}, this.o5 = function(gV, gW) {
		return !!ft.cL(gV, gW) || !!(fe.cL(gV, gW) || hE.cL(gV, gW) || fk.cL(gV, gW) || fR.cL(gV, gW))
	}, this.oY = nu, this.oZ = function() {
		return !nb || 0 < na
	}
}

function oc() {
	this.hf = new od, this.ko = new oe, this.iV = new og
}

function oe() {
	this.kp = function(aR) {
		aR.fill(0)
	}, this.oh = function(aR) {
		for (var bH = aR.length, a2 = 0; a2 < bH; a2++) aR[a2] = []
	}, this.oi = function(ck, c3) {
		for (var cl = de.aN, a2 = 0; a2 < 3; a2++) cl[a2] = c3 * ck[a2];
		return cl
	}, this.oj = function(ck, cl, ok) {
		for (var cp = 0, a2 = 0; a2 < 3; a2++) cp += Math.abs(ck[a2] - cl[a2]);
		return ok <= cp
	}, this.ol = function(ck, om) {
		for (var a2 = 0; a2 < 3; a2++) ck[a2] = bx.on(ck[a2] + om, 0, 255);
		return ck
	}
}

function od() {
	this.ke = function(cG, eH) {
		var eo = document.createElement("canvas");
		return eo.width = cG, eo.height = eH, eo
	}, this.getContext = function(oo, alpha) {
		return oo.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(hf, cG, eH) {
		return hf.getImageData(0, 0, cG, eH)
	}, this.hg = function(mg, op, e8) {
		return "rgb(" + mg + "," + op + "," + e8 + ")"
	}, this.hi = function(mg, op, e8, dx) {
		return "rgba(" + mg + "," + op + "," + e8 + "," + dx.toFixed(3) + ")"
	}, this.k9 = function(oq, gV, gW, cG, eH) {
		var hN = 1 / kB,
			or = .02 * hN * eH,
			os = hN * ot;
		oq.padding = or.toFixed(2) + "px", oq.border = os.toFixed(2) + "px solid " + cY.cZ, oq.left = (hN * gV).toFixed(2) + "px", oq.top = (hN * gW).toFixed(2) + "px", oq.width = (hN * cG - 2 * or - 2 * os).toFixed(2) + "px", oq.height = (hN *
			eH - 2 * or - 2 * os).toFixed(2) + "px"
	}, this.kA = function(dt, type) {
		return dt = dt.toFixed(2), 0 === type ? dt + "px " + settings.fontName : 1 === type ? "bold " + dt + "px " + settings.fontName : 2 === type ? "small-caps " + dt + "px " + settings.fontName : "small-caps bold " + dt + "px " + settings
			.fontName
	}, this.textAlign = function(ou, id) {
		ou.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(ou, id) {
		ou.textBaseline = 1 === id ? "middle" : "bottom"
	}, this.k0 = function() {
		return 1 + .5 * o
	}
}

function og() {
	this.jY = function(a8) {
		return 0 === a8 ? 1 === fy && h9 : 1 === a8 ? 1 === fy && !h9 : 1 <= fy && !h9
	}, this.jZ = function(player) {
		return 0 !== dG[player] && 2 !== dH[player]
	}, this.je = function(ov, ow) {
		return ov !== ow
	}, this.j9 = function(player, aF) {
		return aF = this.ox(player, aF), bB[player] += aF, aF
	}, this.ox = function(player, aF) {
		var oy = bB[player];
		return aF = Math.min(aF, bi[player] * oz - oy), aF = Math.min(aF, p0 - oy), Math.max(aF, 0)
	}, this.jf = function(player, dK, p1, p2) {
		var oy = bB[player],
			dK = bx.by(oy * (dK + 1), 1024),
			p1 = bx.by(p1 * oy, 1024),
			dK = Math.min(dK, oy - p1);
		return 10 === fF && (dK = fX.p4(player, dK)), de.aL[0] = dK, de.aL[1] = p1, p2 <= dK
	}, this.j6 = function(player, ik, ij) {
		var player = bB[player],
			p3 = bx.by(64 * player, 1024);
		return ik = Math.min(ik, player - p3), p3 += player = this.p6(ik), ik = this.ox(ij, ik -= player), de.aL[0] = ik, de.aL[1] = p3, 1 <= ik
	}, this.j8 = function(ik, ij) {
		var p5 = this.p6(ik);
		return ik = this.ox(ij, ik -= p5), de.aL[0] = ik, de.aL[1] = p5, 1 <= ik
	}, this.dJ = function(player, p7) {
		return bx.by(bB[player] * (p7 + 1), 1024)
	}, this.p6 = function(p8) {
		return bx.by(Math.max(2142 - aA.en(), 0) * p8, 2142)
	}, this.jt = function(player, p1) {
		bB[player] -= bx.by(p1 * bB[player], 1024)
	}, this.jh = function(player) {
		bB[player] -= de.aL[0] + de.aL[1]
	}, this.jg = function(player, dp) {
		return (dp = Math.min(dp, bM)) < bM && 0 === dG[dp] && (dp = bM), (de.aP[0] = dp) === bM || e3(player, dp)
	}, this.jj = function(player, ij) {
		return 0 !== dG[ij] && !e3(player, ij)
	}
}

function p9() {
	this.dl = function(player, cr) {
		pA.ll(player, ja.ch(cr), ja.cj(cr)) && (aA.cJ = !0), fH && this.eY()
	}, this.eY = function() {
		var a2;
		for (h9 = !1, a2 = 0; a2 < dF; a2++) 0 !== dG[a2] && 0 === bi[a2] && pA.lr(a2);
		0 !== dG[bA] ? (bE.bF[7] = bi[bA], bE.bF[8] = bB[bA], fk.cS(), fT.pB(), hA || fq.h8(eL[bA] - 5, eO[bA] - 5, eK[bA] + 5, eN[bA] + 5), fs.c5()) : fr.show(!1, !1), fR.pC(18), fS.pD(), fS.fx(!0), fg.fc.pE(), jd = null, hb.pF = !0, hb.pG(),
			fH && a7(1)
	}
}
var fH, hA, pH, p0, pI, bA, hD, h9, pJ, di, pK, fF, nM, jd, mv, pL, eZ, b8, fa, fb, fq, pA, k, ly, lx, fR, pk, fi, cH, fk, hE, oA, fh, fe, fT, fr, pl, pm, aH, pn, oK, po, fI, pj, cC, bJ, f, as, bC, fS, pZ, fL, pX, l9, pp, hI, pq, e0, gO, lt, o1, pr,
	fs, id, oa, ps, pt, fl, fu, fV, fY, gj, pu, fZ, fX, fj, oG, fB, pv, et, fo, k7, he, cY, ft, kR, pw, jU, kd, px, o4, py, bx, ja, dY, de, fg, fn, my, bM = 512,
	lN = 512,
	oz = 150,
	fy = 0,
	le = 512,
	b7 = 2;

function pM(pN, pO, mA, pP, pQ, pR) {
	hD = !1, hA = pR, nM = pQ, di = (fF = pP) < 7 || 9 === fF, n2 = dF = mA.length, fH = 1 === n2, pK = 9 === (fF = 8 === (fF = 10 === fF && fH ? 7 : fF) && 2 !== dF ? 7 : fF) ? 2 : fF + 2, pL = dF <= 2 ? 30 : dF <= 50 ? 40 : 50, pJ = h9 = !(fB.fC &&
			!fB.fD.pS) && (di || dF < 100), jd = h9 ? new p9 : null, le = 512, lN = bM, fH && (lN = fI.pT()), fA = lN - dF, n1 = 0, bA = pO, e0.pU(pN), fL.c5(), pV(mA), ep.c5(mA), fy = 1, p0 = 15e8, pI = 1e9, bE.c5(), pW(), pX.pY(), hb.c5(), bC.c5(),
		eT(), bJ.c5(mA), lt.c5(), ja.c5(), dY.c5(), eZ.c5(), pZ.kS(), pZ.pa(), pA.c5(), pb(), fo.c5(pN, mA, pP, pQ), fm.c5(), fn.c5(), fg.c5(), lz.c5(), pc.putImageData(pd, 0, 0), fe.c5(), hE.c5(), fk.c5(), ft.c5(), fl.c5(), fh.c5(), fT.c5(), lx
	.c5(), cH.c5(), fR.c5(), fi.c5(), ly.c5(), fr.c5(), fb.c5(), b8.c5(), fa.c5(), am(), as.c5(), fS.c5(), fX.c5(), fZ.c5(), fj.c5(), fY.c5(), 8 === fF ? (mv = new m9).c5(mA) : mv = null, aA.pe(), pf(), fs.c5(), aA.cJ = !0, hA || fH && h9 || a7(1)
}

function pf() {
	fq.h7(), 0 === dG[bA] && fr.show(!1, !0), fS.fx(!0)
}

function pg(ph) {
	k7.k8(), fV.close(fV.nx, 3246), fy = 0, aA.pi(), a7(0), pj.c5(!ph)
}

function pz() {
	bx = new q0, py = new q1, eZ = new ez, b8 = new g0, fa = new gE, fb = new gH, fq = new go, pA = new lC, k = new mQ, ly = new q2, lx = new q3, fR = new q4, pk = new q5, fi = new q6, cH = new q7, fk = new q8, hE = new q9, oA = new qA, fh = new qB,
		fe = new qC, fT = new qD, fr = new qE, pl = new qF, pm = new qG, aH = new qH, (pn = new qI).kS(), oK = new qJ, po = new qK, fI = new qL, pj = new qM, cC = new qN, bJ = new qO, f = new qP, as = new qQ, bC = new qR, fS = new qS, pZ = new qT,
		fL = new qU, pX = new qV, l9 = new qW, pp = new qX, hI = new qY, pq = new qZ, e0 = new qa, gO = new qb, lt = new qc, o1 = new qd, pr = new qe, fs = new qf, id = new qg, oa = new qh, ps = new qi, pt = new qj, fl = new qk, fu = new ql, fV =
		new qm, fY = new qn, gj = new qo, pu = new qp, fZ = new qq, fX = new qr, fj = new qs, oG = new qt, fB = new qu, pv = new qv, et = new iS, fo = new qw, k7 = new qx, he = new oc, cY = new hd, ft = new qy, kR = new nV, (pw = new mK).c5(), jU =
		new qz, (kd = new kJ).c5(), px = new r0, o4 = new nZ, ja = new ca, dY = new r1, de = new aJ, fg = new r2, fn = new r3, my = new mi
}

function q2() {
	var r4, gV, gW, r5, r6, r7, aB, player, r8, lZ, zoom, jI, r9;

	function rP(player) {
		for (var a2 = jI.length - 1; 0 <= a2; a2--)
			if (jI[a2] === player) return 1
	}

	function rN(rK) {
		var a2, bH;
		if (-1 !== rK)
			for (bH = r4.length, a2 = 0; a2 < bH; a2++)
				if (r4[a2].o8 && r4[a2].gV + 1 === rK % 4 && r4[a2].gW + 1 === rK >> 2) return a2;
		return -1
	}

	function rM(cM, cN) {
		var op = lZ / 2;
		return cM < gV - r5 - 3 * op || gV + 3 * r5 + 5 * op < cM || cN < gW - r5 - 3 * op || gW + 2 * r5 + 3 * op < cN ? -1 : 4 * (cN < gW - op ? 0 : cN < gW + r5 + op ? 1 : 2) + (cM < gV - op ? 0 : cM < gV + r5 + op ? 1 : cM < gV + 2 * r5 + 3 *
			op ? 2 : 3)
	}
	this.rA = function() {
		var a2, e8, rD = [cY.i5, cY.iE, cY.hm, cY.iQ, cY.iK];
		for (r4 = new Array(8), a2 = 0; a2 < 8; a2++) r4[a2] = {
			id: a2,
			o8: !1,
			rE: 0,
			oo: [],
			gV: 0,
			gW: 0
		};
		for (r4[0].colors = [0, 1, 2, 3], r4[0].gV = 0, r4[0].gW = 0, r4[1].colors = [0, 1, 4], r4[1].gV = 1, r4[1].gW = 0, r4[2].colors = [0, 2], r4[2].gV = -1, r4[2].gW = 0, r4[3].colors = [0], r4[3].gV = 0, r4[3].gW = 0, r4[4].colors = [0, 2],
			r4[4].gV = 1, r4[4].gW = 1, r4[5].colors = [3], r4[5].gV = 0, r4[5].gW = -1, r4[6].id = 20, r4[6].colors = [0], r4[6].gV = 1, r4[6].gW = -1, r4[7].id = 21, r4[7].colors = [0], r4[7].gV = 0, r4[7].gW = 1, a2 = 0; a2 < 8; a2++)
			for (e8 = 0; e8 < r4[a2].colors.length; e8++) r4[a2].oo.push(function(id, rF) {
				var m4 = cC.get(3).height,
					rG = he.hf.ke(m4, m4),
					ou = he.hf.getContext(rG);
				20 === id ? ou.drawImage(cC.get(18), 0, 0) : 21 === id ? ou.drawImage(cC.rH("emojis"), -4 * m4, 0) : (function(cG, hf, rJ) {
					hf.fillStyle = rJ, hf.beginPath(), hf.arc(Math.floor(cG / 2), Math.floor(cG / 2), Math.floor(.47 * cG), 0, 2 * Math.PI), hf.fill()
				}(m4, ou, rF), ou.drawImage(cC.get(3), -id * m4, 0));
				return rG
			}(r4[a2].id, rD[r4[a2].colors[e8]]))
	}, this.rC = function() {
		return r4
	}, this.c5 = function() {
		jI = [], gV = gW = aB = 0, r6 = r7 = -1e3, this.resize()
	}, this.resize = function() {
		r5 = Math.floor((o ? .075 : .0468) * c6), zoom = r5 / cC.get(3).height, lZ = Math.floor(r5 / 3)
	}, this.o3 = function(cM, cN) {
		return !!this.o8() && (aA.cJ = !0, !!a3.cL(cM, cN, player) || (cM = function(cM, cN) {
			var rK, a2;
			if (r7 = r6 = -1e3, rK = rM(cM, cN), -1 === (rK = rN(rK))) return 0;
			if (1 === r4[rK].colors[r4[rK].rE]) return 0;
			if (5 === rK) {
				if (! function() {
						var r = (new Date).getTime();
						r9 + 4e3 < r && (jI = []);
						r9 = r
					}(), rP(player)) return 1;
				jI.push(player), 16 < jI.length && jI.shift()
			} else if (6 === rK) {
				for (a2 = jI.length - 1; 0 <= a2; a2--) 0 === dG[jI[a2]] && jI.splice(a2, 1);
				0 < jI.length && (fj.rQ(1, jI, !0) && et.iV.jH(jI, player), jI = [])
			} else if (2 === rK) fR.rR(), et.iT.ii(fk.rS(), player);
			else if (3 === rK) h9 && et.iT.ic(r8);
			else if (0 === rK) 0 === r4[0].rE ? (fR.rR(), et.iT.ig(fk.rS(), player)) : fY.rT(player, fk.rS());
			else if (1 === rK) et.iT.im(fk.rS(), r8);
			else {
				if (7 === rK) return a3.show(cM, cN), 2;
				if (4 !== rK) return 0;
				fj.rQ(0, [player], !0) && et.iV.jE(player)
			}
			return 1
		}(cM, cN), this.k8(), 2 === cM && (a3.o8 = !0), 0 < cM))
	}, this.o6 = function(cM, cN) {
		this.o8() || (r6 = cM, r7 = cN, aB = (new Date).getTime())
	}, this.click = function(cM, cN, oH) {
		var d1 = ja.dO(cM),
			d2 = ja.dP(cN),
			cr = ja.dR(d1, d2),
			d0 = ja.dT(cr);
		return !(!ja.dQ(d1, d2) || (d1 = (o ? .025 : .0144) * c6, Math.abs(cM - r6) > d1) || Math.abs(cN - r7) > d1 || performance.now() > aB + 425) && (oH ? (function(cM, cN, d0) {
			bJ.bK(d0) || -1 === (cM = dY.io.rl(cM, cN)) ? fR.rk(d0) : fR.rm(cM)
		}(cM, cN, d0), !1) : lx.oQ || this.o8() || !ja.dI() || hA ? (this.k8(), !1) : h9 ? !!bJ.bK(d0) && (r8 = cr, r4[3].o8 = !0, this.rW(cM, cN)) : (dY.io.ir(cr) || dY.io.rX(cM, cN) || (2 === fy ? bJ.bS(d0) && 0 < a3.rY && (player = bJ
			.bT(d0), bJ.rZ(player)) && (r4[0].o8 = !0, r4[0].rE = 1, r4[7].o8 = !0) : bJ.ra(d0) || (r8 = cr, dY.io.ip(bA, cr) && (r4[0].o8 = !0, r4[0].rE = 1, r4[1].o8 = !0, r4[1].rE = de.aO[2] ? 0 : 2), bJ.rb(d0)) || (bJ.bU(d0) ?
			(player = bM, rc(bA) ? (r4[0].o8 = !0, r4[0].rE = 0) : rd(bA, player) && (r4[0].o8 = !0, r4[0].rE = 3)) : (player = bJ.bT(d0)) === bA ? 0 !== a3.rY && (r4[0].o8 = !0, r4[0].rE = 1, r4[7].o8 = !0) : (r4[0].rE = 1, r4[5]
				.o8 = function(player) {
					return bJ.rZ(player) && !rP(player) && fj.rQ(1, [player], !1)
				}(player), r4[7].o8 = 1 <= a3.rY && bJ.rZ(player), e3(player, bA) ? (r4[4].o8 = bJ.rZ(player) && !fS.rf(player) && fj.rQ(0, [player], !1), r4[6].o8 = function(player) {
					if (0 === jI.length) return !1;
					if ((new Date).getTime() > r9 + 4e3) return !(jI = []);
					return !rP(player) && ! function(player) {
						var a2;
						if (di)
							for (a2 = jI.length - 1; 0 <= a2; a2--)
								if (!e3(player, jI[a2])) return 1;
						return
					}(player)
				}(player), rh(bA, player) ? (r4[0].rE = 0, r4[0].o8 = !0) : rd(bA, player) && (r4[0].rE = 3, r4[0].o8 = !0), r4[0].o8 = this.ri()) : (r4[2].o8 = !0, r4[0].o8 = !0)))), this.rW(cM, cN)))
	}, this.rW = function(cM, cN) {
		return gV = cM - Math.floor(r5 / 2), gW = cN - Math.floor(r5 / 2), !!this.o8()
	}, this.nf = function(cM, cN) {
		return !!this.o8() && (a3.o8 ? !a3.ro(cM, cN) && (a3.rp(), a3.o8 = !1, aA.cJ = !0) : function(rr, cM, cN) {
			cM = rM(cM, cN);
			if (0 <= rN(cM)) return !1;
			if ((1 === cM || 6 === cM) && 0 <= rN(2)) return !1;
			if ((6 === cM || 9 === cM) && 0 <= rN(10)) return !1;
			return rr.k8(), aA.cJ = !0
		}(this, cM, cN))
	}, this.k8 = function() {
		for (var a2 = r4.length - 1; 0 <= a2; a2--) r4[a2].o8 = !1, r4[a2].rE = 0;
		a3.o8 = !1
	}, this.o8 = function() {
		return this.ri() || a3.o8
	}, this.ri = function() {
		for (var bH = r4.length, a2 = 0; a2 < bH; a2++)
			if (r4[a2].o8) return !0;
		return !1
	}, this.cU = function() {
		if (this.o8())
			if (a3.o8) a3.cU();
			else {
				var a2, ou = cV,
					e8 = r4,
					bH = e8.length,
					rt = (r5 + lZ) / zoom;
				for (ou.imageSmoothingEnabled = !0, ou.setTransform(zoom, 0, 0, zoom, gV, gW), a2 = 0; a2 < bH; a2++) e8[a2].o8 && cV.drawImage(e8[a2].oo[e8[a2].rE], e8[a2].gV * rt, e8[a2].gW * rt);
				ou.imageSmoothingEnabled = !1, ou.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function q3() {
	var eH, oo, cF, rv, rw, ru = ["Quit Game", "Surrender", "Statistics", "Replay"];

	function rx() {
		var ry, hf = oo.getContext("2d", {
			alpha: !0
		});
		hf.clearRect(0, 0, eH, eH), hf.fillStyle = cY.hj, hf.fillRect(0, 0, eH, eH), 0 === rv && (hf.fillStyle = cY.hn, hf.fillRect(0, 0, eH, eH)), hf.fillStyle = cY.cZ, hf.fillRect(0, 0, eH, 1), hf.fillRect(0, 0, 1, eH), hf.fillRect(0, eH - 1, eH,
			1), hf.fillRect(eH - 1, 0, 1, eH), ry = .9 * eH / cC.get(0).width, hf.imageSmoothingEnabled = !0, hf.setTransform(ry, 0, 0, ry, Math.floor((eH - ry * cC.get(0).width) / 2), Math.floor((eH - ry * cC.get(0).height) / 2)), hf.drawImage(
			cC.get(0), 0, 0), hf.setTransform(1, 0, 0, 1, 0, 0)
	}

	function s1(cM, cN) {
		if (!lx.oQ) return cM <= eH + k1 && cN >= fk.gW ? 0 : -1;
		if (cM <= 4 * eH + k1) {
			if (cN >= fk.gW) return 0;
			if (cN >= fk.gW - eH - rw * k1) return s4(2) ? 2 : -1;
			if (cN >= fk.gW - 2 * (eH + rw * k1)) return s4(3) ? 3 : -1;
			if (cN >= fk.gW - 3 * (eH + rw * k1)) return s4(4) ? 4 : -1
		} else if (cM <= 7 * eH + k1 && cN >= fk.gW - eH - rw * k1) return 1;
		return -1
	}

	function s4(a2) {
		return 2 === a2 ? s2(2) || s2(3) || s2(4) : 3 === a2 && s2(3) || s2(4)
	}

	function s2(a2) {
		return 2 === a2 ? !hA && lx.s9(bA) : 3 === a2 ? 2 <= bE.sA : k7.sB()
	}

	function sD(a2, rF) {
		cV.setTransform(1, 0, 0, 1, k1, fk.gW - a2 * rw * k1 - a2 * eH), cV.fillStyle = cY.hj, cV.fillRect(0, 0, 4 * eH, eH), rv === a2 + 1 && rF === cY.cZ && (cV.fillStyle = cY.hn, cV.fillRect(0, 0, 4 * eH, eH)), cV.fillStyle = rF, cV.fillRect(0, 0,
			4 * eH, 1), cV.fillRect(0, 0, 1, eH), cV.fillRect(4 * eH, 0, 1, eH), cV.fillRect(0, eH - 1, 4 * eH, 1), cV.fillText(ru[a2], 2 * eH, .54 * eH)
	}
	this.oQ = !1, this.c5 = function() {
		rv = -1, this.oQ = !1, rw = o ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		eH = fk.eH, (oo = document.createElement("canvas")).width = eH, oo.height = eH, cF = c9 + Math.floor((o ? .5 : .45) * eH) + cA, rx()
	}, this.oR = function() {
		this.oQ = !this.oQ, this.oQ ? (ft.oP(!1), hA && ft.rz && ft.oS(!0), this.s0()) : (rv = -1, rx(), fH && 1 === fy && !h9 && a7(1)), aA.cJ = !0
	}, this.s0 = function() {
		(fH || hA) && 1 === fy && (fe.fx(!0), h9 || setTimeout(function() {
			hb.n5()
		}, 0), a7(0))
	}, this.cL = function(cM, cN) {
		var rE = s1(cM, cN);
		if (this.oQ) {
			if (hD) return 0 <= rE && ft.oP(!1), !hA;
			if (0 === rE) pg();
			else if (1 === rE) this.oR();
			else if (2 === rE) s2(rE) && (et.iT.j4(), this.oR());
			else if (3 === rE) s2(rE) && (lz.oR(), aA.cJ = !0, k7.o8) && k7.k8();
			else if (4 === rE) s2(rE) && (k7.o8 ? k7.k8() : k7.show(), lz.o8) && lz.oR();
			else {
				if (!(fH || 1 !== fy || hA || lz.o8 || k7.o8) && (lx.oR(), 1)) return !1;
				o4.o5(cM, cN) || ly.o6(cM, cN)
			}
			return !0
		}
		return 0 === rE && (this.oR(), !0)
	}, this.nf = function(cM, cN) {
		cM = s1(cM, cN);
		cM !== rv && (rv = cM, this.oQ || rx(), aA.cJ = !0)
	}, this.cU = function() {
		var cG;
		this.oQ ? (cG = Math.floor(5.5 * eH), cV.setTransform(1, 0, 0, 1, k1, fk.gW), cV.fillStyle = cY.hj, cV.fillRect(0, 0, cG, eH), 0 === rv ? (cV.fillStyle = cY.hn, cV.fillRect(0, 0, 4 * eH, eH)) : 1 === rv && (cV.fillStyle = cY.hn, cV
				.fillRect(4 * eH, 0, Math.floor(1.5 * eH), eH)), cV.fillStyle = cY.cZ, cV.fillRect(0, 0, cG, 1), cV.fillRect(0, 0, 1, eH), cV.fillRect(4 * eH, 0, 1, eH), cV.fillRect(0, eH - 1, cG, 1), cV.fillRect(cG - 1, 0, 1, eH), cV.font =
			cF, cV.textBaseline = cW, cV.textAlign = cX, cV.fillText(ru[0], 2 * eH, .54 * eH), cG = .4 * eH, lx.sC(k1 + 4 * eH + (1.5 * eH - cG) / 2, fk.gW + .3 * eH, cG), s4(2) && sD(1, s2(2) ? cY.cZ : cY.ht), s4(3) && sD(2, s2(3) ? cY.cZ :
				cY.ht), s4(4) && sD(3, cY.cZ), cV.setTransform(1, 0, 0, 1, 0, 0)) : cV.drawImage(oo, k1, fk.gW)
	}, this.s9 = function(player) {
		return 0 !== dG[player] && 2 !== fy && bJ.rZ(player)
	}, this.sC = function(gV, gW, bH) {
		cV.setTransform(1, 0, 0, 1, gV, gW), cV.lineWidth = ot, cV.strokeStyle = cY.cZ, cV.beginPath(), cV.moveTo(0, 0), cV.lineTo(bH, bH), cV.moveTo(0, bH), cV.lineTo(bH, 0), cV.stroke()
	}
}

function q4() {
	var sE, eH, os, sF, sG, sH, sI, sJ, sK;

	function cT() {
		return fk.sd(fR.sZ()) ? fl.o8 ? fk.gW - fk.eH - 2 * os : fk.gW - os : ft.sd(fR.sc()) ? fl.o8 ? ft.cT() - fk.eH - 2 * os : ft.cT() - os : fl.o8 ? q - fk.eH - (gj.se() + 1) * os : q - gj.se() * k1
	}

	function sS(r, j, id, bP, sV, sW, kz, sX, sh) {
		var hf, sa, rG, sj = void 0 !== sh,
			cG = Math.floor(cH.measureText(j, fR.cF) + 1.5 * sF + (sj ? eH : 1.5 * sF));
		p < cG + os && !sj && 50 !== id && 20 < j.length ? (sa = Math.floor(.5 * j.length), sS(r, j.substring(0, sa), id, bP, sV, sW, kz, sX, sh), sS(r, j.substring(sa), id, bP, sV, sW, kz, sX, sh)) : (sa = cG + (50 === id ? sG : 0), (rG = document
			.createElement("canvas")).width = cG, rG.height = eH, (hf = rG.getContext("2d", {
			alpha: !0
		})).font = fR.cF, hf.textBaseline = cW, hf.textAlign = sk, hf.clearRect(0, 0, cG, eH), hf.fillStyle = sW, hf.fillRect(0, 0, cG, eH), hf.fillStyle = sV, hf.fillText(j, Math.floor(1.5 * sF), Math.floor(eH / 2)), sj && (sj = eH / a3.cG,
			hf.imageSmoothingEnabled = !0, hf.setTransform(sj, 0, 0, sj, cG - eH, 0), hf.drawImage(a3.rG[sh], 0, 0)), sj = {
			aB: r,
			j: j,
			id: id,
			player: bP,
			oo: rG,
			sV: sV,
			sW: sW,
			cG: cG,
			sa: sa,
			kz: kz,
			sX: sX,
			sh: sh
		}, sE.length && !sE[0].aB ? sE.splice(1, 0, sj) : sE.unshift(sj))
	}

	function sn(id, gC) {
		for (var sz = 0, bH = sE.length, a2 = 0; a2 < bH; a2++)
			if (sE[a2].id === id && gC <= ++sz) return void sE.splice(a2, 1)
	}

	function sT(mg, op, e8) {
		return "rgb(" + mg + "," + op + "," + e8 + ")"
	}

	function ss(id, t6) {
		for (var bH = sE.length, a2 = 0; a2 < bH; a2++) sE[a2].id === id && t6-- <= 0 && (sE.splice(a2, 1), a2--, bH--)
	}

	function sl(id, player) {
		for (var t7 = !1, a2 = sE.length - 1; 0 <= a2; a2--) sE[a2].id !== id || player !== bM && sE[a2].player !== player || (sE.splice(a2, 1), t7 = !0);
		return t7
	}

	function tB(aF) {
		return 1 === aF ? "" : "s"
	}

	function tE(j, aS, aU) {
		aS && (j += fi.gm(aS)), aU && (j += " (" + fT.tF(100 * aS / aU, 1) + ")"), sS(340, j, 6, 0, sT(215, 245, 255), cY.hl, -1, !1)
	}

	function tN(player, tO) {
		return (fH || dF <= player || tO || gj.gk.tP ? gn : tQ)[player]
	}
	this.c5 = function() {
		sI = o ? 7 : 12, sH = {
			mA: [sJ = 0, 0, 0],
			sL: [0, 0, 0],
			h5: [220, 180, 180],
			sM: [0, 0, 0],
			eo: [0, 0, 0],
			sN: [" were erased.", " left the game.", " surrendered."],
			sO: [" was erased by ", " left the game.", " surrendered."]
		}, sE = [], this.resize(), h9 && this.mq(0, 18), tE("Map: " + l9.tG()), tE("Dimension: " + (an - 2) + "x" + (ao - 2)), tE("Overall Pixels: ", pX.tH), pX.tH !== pX.tI && tE("Land: ", pX.tI, pX.tH), 0 < pX.tJ && tE("Water: ", pX.tJ, pX
			.tH), 0 < pX.tK && tE("Mountains: ", pX.tK, pX.tH), 10 === fF && sS(120, "Full sending against human players is disabled.", 6, 0, sT(235, 255, 120), cY.hl, -1, !1), this.sQ()
	}, this.sQ = function() {
		var a2, bH;
		if (fB.fC)
			for (bH = fB.fD.sR.length, a2 = 0; a2 < bH; a2++) sS(400, fB.fD.sR[a2], 6, 0, sT(255, 255, 255), cY.hl, -1, !1)
	}, this.resize = function() {
		var sU, a2;
		if (eH = (eH = Math.floor((o ? .031 : .0249) * c6)) < 10 ? 10 : eH, this.cE = Math.floor(2 * eH / 3), this.cF = c9 + this.cE + cA, os = k1, sF = Math.floor(eH / 5), 0 < sE.length)
			for (sU = sE, sE = [], a2 = sU.length - 1; 0 <= a2; a2--) sS(sU[a2].aB, sU[a2].j, sU[a2].id, sU[a2].player, sU[a2].sV, sU[a2].sW, sU[a2].kz, sU[a2].sX);
		this.sY()
	}, this.sY = function() {
		sK = document.createElement("canvas");
		var j = "Accept",
			hf = (sG = cH.measureText(j, this.cF) + 5 * sF, sK.height = eH, sK.width = sG, sK.getContext("2d", {
				alpha: !0
			}));
		hf.font = this.cF, hf.textBaseline = cW, hf.textAlign = cX, hf.clearRect(0, 0, sG, eH), hf.fillStyle = cY.i2, hf.fillRect(0, 0, sG, eH), hf.fillStyle = cY.cZ, hf.fillText(j, Math.floor(sG / 2), Math.floor(eH / 2))
	}, this.sZ = function() {
		var bH;
		return fl.o8 ? fl.cG : 0 === (bH = sE.length) ? 0 : 1 === bH ? sE[0].sa : sb(sE[0].sa, sE[1].sa)
	}, this.sc = function() {
		var bH = sE.length;
		return fl.o8 ? bH ? sb(fl.cG, sE[0].sa) : fl.cG : 0 === bH ? 0 : 1 === bH ? sE[0].sa : 2 === bH ? sb(sE[0].sa, sE[1].sa) : sb(sb(sE[0].sa, sE[1].sa), sE[2].sa)
	}, this.cL = function(gV, gW) {
		for (var sf, sg = cT(), a2 = sE.length - 1; 0 <= a2; a2--)
			if ((sf = sg - (a2 + 1) * eH) <= gW && gW < sf + eH) return 50 === sE[a2].id ? gV >= gd - sG - os - sE[a2].cG && (gd - sG - os <= gV ? et.iV.jE(sE[a2].player) : fq.hB(sE[a2].player, 800, !1, 0), !0) : gV >= gd - sE[a2].cG - os && (sE[
				a2].sX && (fq.hB(sE[a2].player, 800, !1, 0), 0 <= sE[a2].kz) && (sf = sE[a2].kz, sE[a2].kz = sE[a2].player, sE[a2].player = sf), !0);
		return !1
	}, this.nN = function(r, j, id, bP, sV, sW, kz, sX, sh) {
		sS(r, j, id, bP, sV, sW, kz, sX, sh)
	}, this.pC = function(id) {
		for (var a2 = sE.length - 1; 0 <= a2; a2--) sE[a2].id === id && (sE[a2].aB = 1)
	}, this.mq = function(player, id) {
		0 === id ? (bE.bF[player < dF ? 4 : 3]++, cH.dl(player, 0), sS(o ? 100 : 160, "You erased " + gn[player] + ".", 0, player, "rgb(10,220,10)", cY.hl, -1, !1)) : 1 === id ? (sl(50, bM), cH.dl(player, 1), sS(360, "You were erased by " + gn[
				player] + ".", 0, player, "rgb(255,40,40)", cY.hl, -1, !0), fq.hB(player, 2700, !1, 0)) : 2 === id ? (cH.dl(player, 2), sS(0, "Congratulations! You won the game.", 0, player, "rgb(10,255,255)", cY.hl, -1, !0), fq.hB(player, 2700,
				!1, 0)) : 3 === id ? (cH.dl(player, 2), sS(0, gn[player] + " won the game.", 0, player, cY.cZ, cY.hl, -1, !0), fq.hB(player, 2700, !1, 0)) : 4 === id ? (n2--, n1--, this.sm(1, player, player)) : 5 === id ? 2 !== dH[player] && bJ
			.rZ(bA) && (sn(1, 5), fS.so(player) ? sS(180, gn[player] + " broke the non-aggression pact.", 1, player, sT(255, 200, 180), cY.hl, -1, !0) : sS(180, gn[player] + " is attacking you!", 1, player, "rgb(255,70,10)", cY.hl, -1, !0)) :
			18 === id ? sS(255, "Choose your start position!", 18, 0, cY.cZ, cY.hl, -1, !1) : 21 === id ? sS(220, "You surrendered!", id, 0, "rgb(255,40,40)", cY.hl, -1, !1) : 22 === id ? this.sm(2, player, player) : 59 === id && sS(0,
				"The game ended in a stalemate!", id, 0, cY.iP, cY.hl, 0, !1)
	}, this.sp = function(sq) {
		sS(200, "Error [" + sq + "]", 94, 0, cY.cZ, cY.iC, -1, !1)
	}, this.mz = function(mt) {
		if (bA === mt) wins_counter++, window.localStorage.setItem("fx_win_count", wins_counter);
		cH.dl(mt, 2), sS(0, dF < 100 ? gn[mt] + " won the game." : gn[mt] + " was immortalized!", 3, mt, cY.cZ, cY.hl, -1, !0), sS(0, "Your Current Win Count is Now " + wins_counter, 3, mt, cY.cZ, cY.hl, -1, !0), fq.hB(mt, 2700, !1, 0)
	}, this.rk = function(d0) {
		var j, sr = "(" + ja.ch(d0 >> 2) + ", " + ja.cj(d0 >> 2) + ")",
			sX = !1,
			player = 0;
		bJ.bK(d0) ? bJ.bU(d0) ? sr = "Unclaimed Land " + sr : (player = bJ.bT(d0), j = "Player: " + gn[player], sr = (j += "   Balance: " + fi.gm(bB[player])) + ("   Territory: " + fi.gm(bi[player])) + ("   Coords: " + sr), sX = !0) : sr = bJ.ra(
			d0) ? "Mountains " + sr : "Water " + sr, aA.cJ = !0, ss(55, 0), sS(220, sr, 55, player, cY.cZ, cY.hl, -1, sX)
	}, this.rm = function(st) {
		var kY = dY.fc,
			player = kY.su[st],
			kY = "Ship Owner: " + gn[player] + "   Strength: " + fi.gm(kY.sv[st]);
		aA.cJ = !0, ss(55, 0), sS(220, kY, 55, player, cY.cZ, cY.hl, -1, !0)
	}, this.ix = function(sw, sx, iy) {
		sw === bA ? sS(175, " Message to " + gn[sx] + ": ", 1001, sx, sT(200, 255, 210), cY.hl, -1, !0, iy) : this.sy(sw, iy)
	}, this.sy = function(sw, iy) {
		ss(1e3, 2), sS(175, gn[sw] + ": ", 1e3, sw, cY.cZ, "rgba(5,60,25,0.9)", -1, !0, iy)
	}, this.mx = function(mu) {
		var sq;
		mu ? (sq = "Humanity triumphs! The undead have been beaten back.", cH.nD("The Resistance", 2, 1, 12), sS(0, sq, 40, 0, "rgb(10,220,10)", cY.hl, -1, !1)) : (sq = "Mankind's era ends, overrun by the relentless tide of the undead.", cH.nD(
			"The Virus", 2, 0, 16), sS(0, sq, 41, 0, "rgb(200,80,80)", cY.hl, -1, !1)), fq.hK(2700)
	}, this.mB = function(mA) {
		sS(300, mA[0].name + " [" + mv.mH(mA[0].mE) + "] vs " + mA[1].name + " [" + mv.mH(mA[1].mE) + "]", 65, 0, cY.gh, "rgba(100,255,255,0.75)", -1, !1)
	}, this.t0 = function(sq) {
		sS(200, sq, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.t1 = function() {
		sS(0, "Agreeing to peace concludes the game in a stalemate!", 247, 0, cY.iO, cY.hl, -1, !1)
	}, this.mJ = function(mA, mG, mI, t2) {
		1 === fV.t3() && (sS(0, mA[0].name + ": " + mv.mH(mA[0].mE) + " -> " + mG, 66, 0, cY.cZ, t2[0], -1, !1), sS(0, mA[1].name + ": " + mv.mH(mA[1].mE) + " -> " + mI, 66, 1, cY.cZ, t2[1], -1, !1))
	}, this.jF = function(player, id) {
		0 === id ? sl(50, player) ? (sS(128, "You signed a non-aggression pact with " + gn[player] + ".", 52, player, sT(180, 255, 180), cY.hl, -1, !0), fS.jv(player, 2, 255)) : sS(384, "You asked " + gn[player] +
			" to sign a non-aggression pact.", 51, player, sT(210, 210, 255), cY.hl, -1, !0) : sl(51, player) ? (sS(128, gn[player] + " accepted the non-aggression pact.", 52, player, cY.cZ, "rgba(60,120,10,0.9)", -1, !0), fS.jv(player, 2,
			255)) : (sS(384, gn[player] + " requested a non-aggression pact.", 50, player, cY.cZ, "rgba(90,90,90,0.9)", -1, !0), fS.jv(player, 2, 96))
	}, this.jJ = function(mA, target) {
		var j = "You ",
			color = function(mA) {
				var a2;
				for (a2 = mA.length - 1; 0 <= a2; a2--)
					if (2 * bi[mA[a2]] > bi[bA]) return;
				return 1
			}(mA) ? (j += "ordered ", sT(255, 235, 210)) : (j += "asked ", sT(210, 255, 210));
		1 < mA.length ? sS(230, j + mA.length + " players to attack " + gn[target] + ".", 66, target, color, cY.hl, -1, !0) : sS(230, j + gn[mA[0]] + " to attack " + gn[target] + ".", 66, mA[0], color, cY.hl, target, !0)
	}, this.t5 = function(player, target) {
		sS(230, gn[player] + " suggested you attack " + gn[target] + ".", 66, player, cY.cZ, "rgba(75,65,5,0.9)", target, !0)
	}, this.mp = function(id, player) {
		sl(id, player)
	}, this.rR = function() {
		var c8;
		100 <= bB[bA] || (-1 === (c8 = function(id) {
			for (var a2 = sE.length - 1; 0 <= a2; a2--)
				if (sE[a2].id === id) return a2;
			return -1
		}(143)) ? sS(80, "Your balance is too low!", 143, 0, cY.cZ, cY.hl, -1, !1) : sE[c8].aB = 80)
	}, this.jA = function(t9, tA, player) {
		2 !== dH[bA] && (sS(200, "You exported " + fi.gm(t9) + " resource" + tB(t9) + " to " + gn[player] + ".", 30, player, "rgb(190,255,190)", cY.hl, -1, !0), tA) && sS(30, "A tax of " + fi.gm(tA) + " unit" + tB(tA) + " was deducted.", 30, 0,
			cY.cZ, cY.hl, -1, !1)
	}, this.tC = function(t9, player) {
		var r, tD;
		2 !== dH[bA] && (tD = 2 === dH[player] || dF <= player, sS((r = 200 - 20 * sE.length) < 80 ? 80 : r, (tD ? "A bot" : gn[player]) + " supported you with " + fi.gm(t9) + " resource" + tB(t9) + ".", 31, player, cY.gh, tD ?
			"rgba(205,205,205,0.9)" : "rgba(205,255,205,0.9)", -1, !0), sn(31, o ? 4 : 6))
	}, this.n3 = function(tL) {
		for (var eo = aA.en(), a2 = 2; 0 <= a2; a2--) 0 < sH.sM[a2] && (tL || sH.eo[a2] < eo - 220) && this.tM(a2)
	}, this.tM = function(id) {
		var j, bH = sH.sM[id],
			player = sH.mA[id];
		sH.sM[id] = 0, 1 === bH ? (j = tN(player, 0 === id) + sH.sO[id], 0 === id && (j += tN(sH.sL[id], !0) + "."), ss(7, 1), sS(sH.h5[id], j, 7, sH.sL[id], cY.cZ, cY.hl, -1, !0)) : 2 <= bH && (j = tN(player, 0 === id) + " and " + (bH - 1) +
			" other player" + tB(bH - 1) + sH.sN[id], ss(7, 1), sS(sH.h5[id], j, 7, player, cY.cZ, cY.hl, -1, !1))
	}, this.sm = function(id, ky, kz) {
		var eo = aA.en(),
			bH = sH.sM[id] + 1;
		sH.sM[id]++, sH.mA[id] = ky, sH.sL[id] = kz, 1 === bH && (sH.eo[id] = eo), (1 === bH && (n2 < 32 || 2 === fy) || 1 < bH && (sH.eo[id] < eo - 140 || 2 === fy)) && this.tM(id)
	}, this.eY = function() {
		for (var cp = (cp = sE.length - sI) <= 1 ? 1 : cp * cp, a2 = sE.length - 1; 0 <= a2; a2--) 0 < sE[a2].aB && (sE[a2].aB -= cp, sE[a2].aB <= 0) && sE.splice(a2, 1);
		! function() {
			var t6, a2;
			if (128 !== sJ && !(++sJ < 128))
				for (t6 = 5, a2 = er - 1; 0 <= a2; a2--) 1 === dH[es[a2]] && 0 < t6-- && sS(240, gn[es[a2]] + " joined the game.", 1, es[a2], cY.gh, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.n3(!1)
	}, this.cU = function() {
		for (var lM, gW = cT(), a2 = sE.length - 1; 0 <= a2; a2--) lM = gW - (a2 + 1) * eH, 50 === sE[a2].id ? (cV.drawImage(sE[a2].oo, gd - sE[a2].cG - sG - os, lM), cV.drawImage(sK, gd - sG - os, lM)) : cV.drawImage(sE[a2].oo, gd - sE[a2].cG -
			os, lM)
	}
}

function tS() {
	this.cG = 0, this.eH = 0, this.m6 = 0, this.tT = 0, this.tU = 0, this.cE = 0, this.c8 = -1, this.ru = ["Accept Cookies", "More Information", "Decline"], this.colors = ["rgba(0,255,0,0.4)", "rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"], this.o8 = !1,
		this.c5 = function() {
			this.resize(), this.o8 = d < 5 && !b && 0 === f.y()
		}, this.resize = function() {
			this.cG = Math.floor(2.8 * Math.floor((o ? .09 : .062) * c6)), this.eH = Math.floor(+this.cG), this.m6 = Math.floor(.06 * this.cG), this.m7 = this.cG - 2 * this.m6, this.tT = this.m6, this.tU = (this.eH - (this.ru.length + 1) * this.tT) /
				this.ru.length, this.cE = Math.floor(.3 * this.tU)
		}, this.cL = function(cM, cN) {
			return !!this.o8 && -1 !== (cM = this.tW(cM, cN)) && (0 === cM ? (f.tX(2), this.o8 = !1) : 1 === cM ? oJ.c5(py.tY, !0) : 2 === cM && (f.tX(1), this.o8 = !1), aA.cJ = !0)
		}, this.nf = function(cM, cN) {
			var r;
			return !!this.o8 && (r = this.c8, this.c8 = this.tW(cM, cN), r !== this.c8 && (aA.cJ = !0), -1 !== this.c8)
		}, this.tW = function(cM, cN) {
			return cM -= cO, cN -= Math.floor(cP - this.eH - cO), cM < 0 || cN < 0 || cM >= this.cG || cN >= this.eH ? -1 : (cM = Math.floor((cN - .5 * this.tT) / ((this.eH - this.tT) / this.ru.length))) < 0 ? 0 : cM >= this.ru.length ? this.ru
				.length - 1 : cM
		}, this.cU = function() {
			this.o8 && this.tZ()
		}, this.tZ = function() {
			var gV = cO,
				gW = Math.floor(cP - this.eH - cO);
			cV.setTransform(1, 0, 0, 1, gV, gW), cV.fillStyle = cY.hl, cV.fillRect(0, 0, this.cG, this.eH), cV.textBaseline = cW, cV.textAlign = cX, cV.strokeStyle = cY.cZ, cV.font = c9 + this.cE + cA, cV.strokeRect(0, 0, this.cG, this.eH);
			for (var a2 = this.ru.length - 1; 0 <= a2; a2--) cV.setTransform(1, 0, 0, 1, gV + this.m6, gW + this.tT + a2 * (this.tT + this.tU)), cV.fillStyle = this.colors[a2], cV.fillRect(0, 0, this.m7, this.tU), this.c8 === a2 && (cV.fillStyle = cY
				.hq, cV.fillRect(0, 0, this.m7, this.tU)), cV.fillStyle = cY.cZ, cV.fillText(this.ru[a2], this.m7 / 2, .54 * this.tU), cV.strokeRect(0, 0, this.m7, this.tU);
			cV.setTransform(1, 0, 0, 1, 0, 0)
		}
}

function q5() {
	var ta, tb, tc, cG, eH, font;

	function tg(th) {
		return th < 10 ? "0" + th : String(th)
	}
	this.c5 = function() {
		void 0 === cG && this.resize(), this.setTime()
	}, this.resize = function() {
		cG = Math.floor((o ? .53 : .36) * c6), eH = Math.floor(.065 * cG), font = c9 + Math.floor(.9 * eH) + cA, tc--, this.setTime()
	}, this.eY = function() {
		this.setTime() && (aA.cJ = !0)
	}, this.setTime = function() {
		var r = new Date,
			te = r.getUTCMinutes(),
			r = r.getUTCSeconds();
		return tb = 3600 - 60 * te - r, tb %= 900, ta = "Next Contest: " + tg(Math.floor(tb / 60)) + ":" + tg(tb % 60), tc !== (tc = 60 * te + r) && (cG = cH.measureText(ta, font), cG += Math.floor(.4 * eH), !0)
	}, this.cU = function() {
		cV.lineWidth = 1 + Math.floor(eH / 15), 7 === aH.oM() && ps.ti() + 2 * cO > .5 * (cP - cG) ? cV.translate(gd - eH, Math.floor(ps.ti() + 2 * cO + cG)) : cV.translate(gd - eH, Math.floor(.5 * (cP + cG))), cV.rotate(-Math.PI / 2), cV
			.fillStyle = cY.cZ, cV.fillRect(0, 0, cG, eH), cV.strokeStyle = cY.gh, cV.strokeRect(0, 0, cG, eH + 10), cV.fillStyle = cY.gh, cV.font = font, cV.textBaseline = cW, cV.textAlign = cX, cV.fillText(ta, Math.floor(cG / 2), Math.floor(
				.59 * eH)), cV.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function tj() {
	this.tk = 10, this.tl = 50, this.tm = 50, this.tn = 8, this.to = this.tl + this.tm, this.a4 = this.tl + this.tm + this.tn, this.cG = 72, this.tp = 0, this.tq = 0, this.rG = new Array(this.a4), this.tr = 8, this.ts = new Array(this.tl + this.tm),
		this.tt = new Array(this.tl + this.tm), this.gc = 0, this.ge = 0, this.zoom = 1, this.tu = .2, this.rY = 0, this.a5 = null, this.tv = null, this.o8 = !1, this.c5 = function() {
			var a2, tw, tx;
			for (this.a5 = new Array(this.a4), this.tv = new Array(this.a4), tw = cC.rH("emojis"), this.ty(), a2 = this.rY = 0; a2 < this.tl; a2++) this.tz(a2, a2, tw);
			for (tx = cC.rH("flags"), a2 = 0; a2 < this.tm; a2++) this.tz(a2, this.tl + a2, tx);
			this.u0(), this.rG[26] = this.u1(25, 2), this.u2()
		}, this.tz = function(a2, dx, eo) {
			this.a5[dx] = !1, this.tv[dx] = 0;
			var oo = document.createElement("canvas"),
				hf = (oo.width = this.cG, oo.height = this.cG, oo.getContext("2d", {
					alpha: !0
				}));
			hf.clearRect(0, 0, this.cG, this.cG), 23 === dx ? hf.drawImage(ly.rC()[4].oo[1], 0, 0) : 36 === dx ? hf.drawImage(ly.rC()[0].oo[2], 0, 0) : 49 === dx ? hf.drawImage(ly.rC()[2].oo[1], 0, 0) : hf.drawImage(eo, this.cG * a2 % (a2 === dx ?
				this.tk * this.cG : 4e3), a2 === dx ? b6(a2, this.tk) * this.cG : 0, this.cG, this.cG, 0, 0, this.cG, this.cG), this.rG[dx] = oo
		}, this.u0 = function() {
			this.rG[this.a4 - 5] = this.rG[26], this.rG[this.a4 - 4] = this.u1(this.a4 - 5, 2), this.rG[this.a4 - 1] = this.u1(this.a4 - 5, 1), this.rG[this.a4 - 8] = this.u1(this.a4 - 4, 1), this.rG[this.a4 - 3] = this.rG[39], this.rG[this.a4 - 2] =
				this.u1(this.a4 - 3, 1), this.rG[this.a4 - 7] = this.u1(this.a4 - 2, 1), this.rG[this.a4 - 6] = this.u1(this.a4 - 7, 1)
		}, this.u1 = function(a2, u3) {
			var oo = document.createElement("canvas"),
				hf = (oo.width = this.cG, oo.height = this.cG, oo.getContext("2d", {
					alpha: !0
				}));
			return hf.clearRect(0, 0, this.cG, this.cG), hf.rotate(u3 * Math.PI / 2), hf.drawImage(this.rG[a2], 1 === u3 ? 0 : -this.cG, -this.cG), oo
		}, this.u2 = function() {
			var a2, aF, u4 = s().split("");
			if (2 * u4.length !== this.a4) this.rY = 0;
			else {
				for (a2 = 0; a2 < this.a4; a2 += 2) aF = parseInt(u4[Math.floor(a2 / 2)]), this.a5[a2] = aF % 2 == 1, this.a5[a2 + 1] = 1 < aF;
				this.u5()
			}
		}, this.u5 = function() {
			for (var a2 = this.rY = 0; a2 < this.a4; a2++) this.a5[a2] && (this.tv[this.rY++] = a2)
		}, this.rp = function() {
			8 === this.rY && this.tv[0] === this.to && this.u5()
		}, this.u6 = function() {
			var a2;
			for (this.rY = this.tn, a2 = 0; a2 < this.tn; a2++) this.tv[a2] = this.to + a2
		}, this.ty = function() {
			this.tp = Math.floor((o ? .075 : .0468) * c6), this.zoom = this.tp / this.cG, this.tq = (1 + this.tu) * this.tp
		}, this.show = function(cM, cN) {
			var a2, u8, u7, m6, ga, gb;
			if (this.rY < 1) this.o8 = !1;
			else {
				for (u7 = (u7 = Math.floor(gd / this.tq)) < 3 ? 3 : u7 > this.tr ? this.tr : u7, u8 = this.rY > u7 ? u7 : this.rY, u7 = 1 + b6(this.rY - 1, u8), m6 = Math.floor(u8 * this.tq), ga = Math.floor(cM - m6 / 2), ga = (ga = gd < ga + m6 ?
						gd - m6 : ga) < 0 ? 0 : ga, gb = Math.floor(cN - this.tq / 2), cM = Math.floor(u7 * this.tq), gb = (gb = cP < gb + cM ? cP - cM : gb) < 0 ? 0 : gb, this.gc = ga + m6, this.ge = gb + cM, a2 = 0; a2 < this.rY; a2++) this.ts[
					a2] = Math.floor(ga + a2 % u8 * this.tq), this.tt[a2] = Math.floor(gb + b6(a2, u8) * this.tq);
				this.o8 = !0
			}
		}, this.cL = function(cM, cN, player) {
			return !!this.o8 && (this.o8 = !1, this.ro(cM, cN) && this.uA(cM, cN, player) && this.o8 || (this.rp(), ly.k8()), !0)
		}, this.ro = function(cM, cN) {
			return !(cM < this.ts[0] || cN < this.tt[0] || cM >= this.gc || cN >= this.ge)
		}, this.uA = function(cM, cN, player) {
			for (var a2 = this.rY - 1; 0 <= a2; a2--)
				if (cM >= this.ts[a2] && cN >= this.tt[a2] && cM <= this.ts[a2] + this.tq && cN <= this.tt[a2] + this.tq) return 39 === this.tv[a2] ? (this.u6(), this.show(cM, cN)) : (player === bA ? et.iT.ix(this.tv[a2]) : et.iV.jC(this.tv[a2],
					player), this.u5()), !0;
			return !1
		}, this.uB = function(a2) {
			return a2 < 16 || 40 <= a2 && a2 < 47
		}, this.uC = function(a2) {
			return a2 >= this.tl && a2 < this.tl + this.tm
		}, this.cU = function() {
			cV.imageSmoothingEnabled = !0;
			for (var lZ = this.tu * this.tp / 2, a2 = this.rY - 1; 0 <= a2; a2--) cV.setTransform(this.zoom, 0, 0, this.zoom, this.ts[a2] + lZ, this.tt[a2] + lZ), cV.drawImage(this.rG[this.tv[a2]], 0, 0);
			cV.imageSmoothingEnabled = !1, cV.setTransform(1, 0, 0, 1, 0, 0)
		}, this.uD = function(gV, gW, iy) {
			cV.imageSmoothingEnabled = !0, cV.setTransform(this.zoom, 0, 0, this.zoom, gV, gW), cV.drawImage(this.rG[iy], 0, 0), cV.imageSmoothingEnabled = !1, cV.setTransform(1, 0, 0, 1, 0, 0)
		}
}
var k1, uJ, cO, ot, nz, o0, cQ, dM, dL, dN, vE, g9, xL, gn, tQ, dG, eL, eO, eK, eN, bi, ld, bB, bI, ba, bb, be, dH, es, er, ne, cV, a7N, a7O, a7P, p, q, uO, c6, gd, cP, kB, a7Q, b, c, e, d, o, nX, nW, hR, hb, a3, bE, lz, a0m, aA, ep, fm, cR, a0x, oJ,
	zN, a7R, a7S, cW = "middle",
	uE = "bottom",
	cX = "center",
	sk = "left",
	uF = "right",
	c9 = "bold ",
	uG = "italic ",
	uH = "normal ",
	cA = "px " + settings.fontName,
	uI = [c9, uG + c9, c9],
	uK = ["wss://", "/s50/", "/s51/", "/s52/"];

function uL() {
	uM(), (cQ = new uN).c5()
}

function uM() {
	ot = .0022 * (1 + .5 * o) * c6, cO = (cO = Math.floor((o ? .02 : .01152) * c6)) < 2 ? 2 : cO, k1 = (k1 = Math.floor((o ? .0114 : .01296) * c6)) < 2 ? 2 : k1, uJ = (uJ = Math.floor(.005 * uO)) < 1 ? 1 : uJ
}

function uP(hf, cG, eH) {
	hf.fillStyle = cY.cZ, hf.fillRect(0, 0, cG, 1), hf.fillRect(0, eH - 1, cG, 1), hf.fillRect(0, 0, 1, eH), hf.fillRect(cG - 1, 0, 1, eH)
}

function q6() {
	var sE, uQ, cF, eH, uR;

	function uX(a2) {
		var cG = sE[a2].oo.width,
			m6 = (sE[a2].hf.clearRect(0, 0, cG, eH), sE[a2].hf.fillStyle = 0 !== sE[a2].id ? "rgba(33,33,120,0.83)" : sE[a2].dp === bM ? "rgba(88,88,88,0.83)" : sE[a2].dp < dF ? "rgba(100,70,33,0.83)" : "rgba(33,100,80,0.83)", sE[a2].hf.fillRect(0,
				0, cG, eH), uP(sE[a2].hf, cG, eH), uQ + 2 * eH < cG && (sE[a2].hf.fillRect(cG - uQ - eH, 0, 1, eH), sE[a2].hf.fillText(gn[sE[a2].dp], Math.floor((cG - uQ) / 2), Math.floor(.57 * eH))), 0 !== sE[a2].id ? 0 : eH);
		sE[a2].hf.fillText(fi.gm(sE[a2].dq), Math.floor(cG - uQ / 2 - m6), Math.floor(.57 * eH)),
			function(a2, cG, m6) {
				sE[a2].hf.fillStyle = cY.ho;
				var uc = Math.floor(uQ * sE[a2].dq / sE[a2].ud);
				sE[a2].hf.fillRect(Math.floor(cG - uQ - m6), eH - uR, uc, uR)
			}(a2, cG, m6), 0 === sE[a2].id ? (ua(a2, cG), function(a2, cG) {
				sE[a2].hf.strokeStyle = cY.hx, sE[a2].hf.fillRect(eH, 0, 1, eH);
				cG -= eH;
				sE[a2].hf.beginPath(), sE[a2].hf.moveTo(Math.floor(.3 * eH + cG), Math.floor(eH / 2)), sE[a2].hf.lineTo(Math.floor(eH - .3 * eH + 0 + cG), Math.floor(eH / 2)), sE[a2].hf.stroke(), sE[a2].hf.beginPath(), sE[a2].hf.moveTo(Math
					.floor(eH / 2 + cG), Math.floor(.3 * eH)), sE[a2].hf.lineTo(Math.floor(eH / 2 + cG), Math.floor(eH - .3 * eH + 0)), sE[a2].hf.stroke()
			}(a2, cG)) : ua(a2, 2 * eH)
	}

	function ua(a2, cG) {
		sE[a2].hf.strokeStyle = sE[a2].ue ? cY.ht : cY.i7, sE[a2].hf.fillStyle = cY.cZ, sE[a2].hf.fillRect(cG - eH, 0, 1, eH);
		var uf = Math.floor(eH / 12),
			uf = (sE[a2].hf.lineWidth = uf < 3 ? 3 : uf, sE[a2].hf.lineCap = "round", .35);
		cG = eH + 1, sE[a2].hf.beginPath(), sE[a2].hf.moveTo(Math.floor(cG - uf * eH + 0), Math.floor(uf * eH)), sE[a2].hf.lineTo(Math.floor(cG - eH + uf * eH), Math.floor(eH - uf * eH + 0)), sE[a2].hf.stroke(), sE[a2].hf.beginPath(), sE[a2].hf
			.moveTo(Math.floor(cG - eH + uf * eH), Math.floor(uf * eH)), sE[a2].hf.lineTo(Math.floor(cG - uf * eH + 0), Math.floor(eH - uf * eH + 0)), sE[a2].hf.stroke()
	}

	function uu(bH) {
		for (var dq, a2 = bH - 1; 0 <= a2; a2--) dq = as.b0(bA, a2), sE[a2].dq !== dq && (sE[a2].dq = dq, sE[a2].ud = dq > sE[a2].ud ? dq : sE[a2].ud, sE[a2].uY = !0)
	}

	function uW(uw) {
		uw.oo = document.createElement("canvas"), ki.font = cF;
		var cG = uQ;
		uw.dp < bM && 0 === uw.id && (cG += Math.floor(ki.measureText(gn[uw.dp] + "000").width)), cG += eH, 0 === uw.id && (cG += eH), uw.oo.width = cG, uw.oo.height = eH, uw.hf = uw.oo.getContext("2d", {
			alpha: !0
		}), uw.hf.font = cF, uw.hf.textBaseline = cW, uw.hf.textAlign = cX
	}

	function uq(a2) {
		return fh.uy() ? gd - sE[a2].oo.width - k1 : fh.gV
	}

	function ur(a2) {
		return Math.floor(2 * k1 + (fh.uy() ? fT.eH + k1 : 0) + fh.eH + a2 * (1.3 * eH))
	}
	this.c5 = function() {
		sE = [], this.resize()
	}, this.resize = function() {
		cF = fR.cF, eH = fR.cE + 5, eH = Math.floor(1.25 * eH), o && (eH = Math.floor(1.25 * eH)), uR = Math.floor(.15 * eH), ki.font = cF, uQ = Math.floor(ki.measureText("02 000 000 0000").width);
		for (var a2 = sE.length - 1; 0 <= a2; a2--) uW(sE[a2]), uX(a2)
	}, this.fx = function() {
		for (var a2 = sE.length - 1; 0 <= a2; a2--) sE[a2].uY && (sE[a2].uY = !1, uX(a2))
	}, this.gm = function(t6) {
		if (t6 < 1e3) return t6 < 0 ? "-" + this.gm(Math.abs(t6)) : t6.toString();
		for (var uh = Math.floor(Math.log(t6 + .5) / Math.log(10)) + 1, ui = Math.floor((uh - 1) / 3), uj = t6.toString(), uk = uj.substring(uh - 3, uh), a2 = 1; a2 < ui; a2++) uk = uj.substring(uh - 3 * (a2 + 1), uh - 3 * a2) + " " + uk;
		return uj.substring(0, uh - 3 * ui) + " " + uk
	}, this.cL = function(cM, gW) {
		if (2 !== fy && 0 !== dG[bA] && !hA && bJ.rZ(bA))
			for (var ul, um, un, uo = o ? eH : 0, up = o ? Math.floor(.15 * eH) : 0, a2 = sE.length - 1; 0 <= a2; a2--)
				if (ul = uq(a2), um = ur(a2), un = sE[a2].oo.width, um - up <= gW && gW <= um + eH + up) {
					if (ul - uo <= cM && cM <= ul + eH + uo) return sE[a2].ue || (sE[a2].uY = !0, sE[a2].ue = !0, 0 === sE[a2].id && et.iT.iv(sE[a2].dp)), !0;
					if (0 === sE[a2].id && ul + un - eH - uo <= cM && cM <= ul + un + uo) return et.iT.ig(fk.rS(), sE[a2].dp), !0
				} return !1
	}, this.eY = function() {
		var bH;
		2 !== fy && 0 !== dG[bA] && !hA && bJ.rZ(bA) && (function(bH) {
			if (sE.length !== bH) return 1;
			for (var a2 = bH - 1; 0 <= a2; a2--)
				if (sE[a2].id !== as.au(bA, a2) || sE[a2].dp !== as.az(bA, a2)) return 1;
			return
		}(bH = as.at(bA)) && function(bH) {
			var a2, id, dp, e8, dq, sU = [];
			loop: for (a2 = 0; a2 < bH; a2++) {
				for (id = as.au(bA, a2), dp = as.az(bA, a2), e8 = 0; e8 < sE.length; e8++)
					if (sE[e8].id === id && sE[e8].dp === dp) {
						sU.push(sE.splice(e8, 1)[0]);
						continue loop
					} dq = as.b0(bA, a2), uW(dq = {
					dp: dp,
					dq: dq,
					ud: dq,
					id: id,
					uY: !0,
					ue: !1,
					oo: null,
					hf: null
				}), sU.push(dq)
			}
			sE = sU
		}(bH), uu(bH))
	}, this.ux = function(bP) {
		for (var bH = Math.min(sE.length, as.at(bA)), a2 = 0; a2 < bH; a2++)
			if (sE[a2].dp === bP) return void(sE = [])
	}, this.cU = function() {
		if (0 !== dG[bA] && bJ.rZ(bA) && !hA)
			for (var a2 = sE.length - 1; 0 <= a2; a2--) cV.drawImage(sE[a2].oo, uq(a2), ur(a2))
	}
}

function q7() {
	var sE, f0, uz, v0, eH, cF, cE, v1, ta, v2, v3, v4, oo, hf, h0, v5;

	function vC() {
		cV.drawImage(oo, k1 + (di ? k1 + fm.vD() : 0), vE + 2 * k1)
	}

	function v6() {
		oo.width = sE[0].width + v3, oo.height = eH + v3, (hf = oo.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, sE[0].width + v3, eH + v3), hf.translate(Math.floor(v3 / 2), Math.floor(v3 / 2)), hf.lineWidth = v3, hf.fillStyle = 1 === sE[0].vB ? cY.hr : cY.hl, vF(), hf.fill(), hf.strokeStyle = 1 === sE[0].vB ? cY.gh : cY.cZ,
		vF(), hf.stroke(), hf.textAlign = cX, hf.textBaseline = cW, hf.fillStyle = 1 === sE[0].vB ? cY.gh : cY.cZ, hf.font = cF[0], hf.fillText(ta[sE[0].vA], Math.floor(sE[0].width / 2), Math.floor(.72 * v1[0] * eH)), hf.font = cF[1], hf.fillText(sE[
				0].j, Math.floor(sE[0].width / 2), Math.floor((v1[0] + .48 * v1[1]) * eH))
	}

	function vF() {
		hf.beginPath(), hf.moveTo(v4, 0), hf.lineTo(sE[0].width - v4, 0), hf.lineTo(sE[0].width, v4), hf.lineTo(sE[0].width, eH - v4), hf.lineTo(sE[0].width - v4, eH), hf.lineTo(v4, eH), hf.lineTo(0, eH - v4), hf.lineTo(0, v4), hf.closePath()
	}
	this.c5 = function() {
		f0 = 4, uz = v0 = h0 = 0, sE = [], cF = new Array(2), cE = new Array(2), v1 = new Array(2), ta = ["YOU ERASED", "YOU WERE ERASED BY", "THE GAME WAS WON BY", "MAP:"], v1[0] = .3, v1[1] = .7, v2 = new Array(4), oo = document.createElement(
			"canvas"), v5 = aA.aB + 2e3, this.resize()
	}, this.resize = function() {
		var a2, cG;
		for (eH = Math.floor((o ? .0725 : .058) * c6), cE[0] = Math.floor(.85 * v1[0] * eH), cE[1] = Math.floor(.85 * v1[1] * eH), cF[0] = c9 + cE[0] + cA, cF[1] = c9 + cE[1] + cA, a2 = v2.length - 1; 0 <= a2; a2--) v2[a2] = this.measureText(ta[
			a2] + "000", cF[0]);
		if (v3 = Math.floor(1 + .05 * eH), v4 = Math.floor(.2 * eH), 0 < sE.length) {
			for (a2 = sE.length - 1; 0 <= a2; a2--) cG = this.measureText(sE[a2].j + "00", cF[1]), sE[a2].width = cG < v2[a2] ? v2[a2] : cG;
			v6()
		}
	}, this.eY = function() {
		0 !== f0 && (4 === f0 ? aA.aB > v5 && (f0 = 0, 1 === fy) && cH.nD(l9.tG(), 3, 1, 9) : (1 === f0 ? (0 === uz && (v6(), uz = 1e-4), 1 <= (uz += .002 * (aA.aB - h0)) && (v0 = 0, f0 = 2, uz = 1), aA.cJ = !0) : 2 === f0 ? ((v0 += (aA.aB -
			h0) / 1e3) > sE[0].h5 || 1 < v0 && 1 < sE.length) && (f0 = 3) : 3 === f0 && ((uz -= .002 * (aA.aB - h0)) <= 0 && (uz = 0, sE.shift(), f0 = 0 < sE.length ? 1 : 0), aA.cJ = !0), h0 = aA.aB))
	}, this.measureText = function(j, cF) {
		return cV.font = cF, Math.floor(cV.measureText(j).width)
	}, this.dl = function(v9, a2) {
		this.nD(gn[v9], a2, 1, 0 === a2 ? 3 : 7)
	}, this.nD = function(j, vA, vB, h5) {
		var cG = (cG = this.measureText(j + "00", cF[1])) < v2[vA] ? v2[vA] : cG;
		sE.push({
			j: j,
			width: cG,
			vA: vA,
			vB: vB,
			h5: h5
		}), 0 === f0 && (uz = 0, f0 = 1, h0 = aA.aB)
	}, this.cU = function() {
		0 !== f0 && 0 !== uz && (uz < 1 ? (cV.globalAlpha = uz, vC(), cV.globalAlpha = 1) : vC())
	}
}

function qk() {
	var eH, oo, hf, vG, vH, vI, vJ, vK, uY, vL, vM, vN, vO, vP;

	function cB() {
		var cG = fl.cG,
			kY = (uY = !1, m0(hf, cG, eH), Math.floor(cG / 2));
		1 === vH ? (hf.fillStyle = cY.hz, hf.fillRect(kY, 0, kY, eH)) : -1 === vH && (hf.fillStyle = cY.iA, hf.fillRect(0, 0, kY, eH)), m1(hf, cG, eH, 2);
		var kY = (kY = Math.floor(.25 * eH)) < 2 ? 2 : kY,
			tH = (hf.fillStyle = cY.hs, Math.floor((eH - 4) * vI[1] / vJ[1]));
		0 < tH && hf.fillRect(2, eH - 2 - tH, kY, tH), 0 < (tH = Math.floor((eH - 4) * vI[0] / vJ[0])) && hf.fillRect(cG - 2 - kY, eH - 2 - tH, kY, tH);
		kY = (kY = Math.floor(eH / 8)) < 2 ? 2 : kY;
		m3(hf, Math.floor(.4 * eH), 0, eH, kY, .5, !1), m3(hf, Math.floor(cG - 1.4 * eH), 0, eH, kY, .5, !0), hf.drawImage(vG, Math.floor((cG - vG.width) / 2), 3)
	}

	function vR() {
		uY = !0, vL = 140, vH = 0, vK = [], fl.o8 = !1, fR.mp(247, 0), vI[0] = vI[1] = 0
	}

	function cT() {
		return fk.sd(fR.sZ()) ? fk.gW - eH - k1 : ft.sd(fR.sc()) ? ft.cT() - eH - k1 : q - eH - gj.se() * k1
	}
	this.o8 = !1, this.cG = 0, this.c5 = function() {
		vN = vO = 0, this.o8 = !1, uY = vP = !1, vL = 140, vI = [vH = 0, 0], vJ = [1, 1], vK = [], vM = new Uint32Array(10), this.resize()
	}, this.resize = function() {
		eH = fk.eH, this.cG = 4 * eH, this.vQ(), (oo = document.createElement("canvas")).width = this.cG, oo.height = eH, hf = oo.getContext("2d", {
			alpha: !0
		}), cB()
	}, this.fx = function() {
		uY && cB()
	}, this.vQ = function() {
		var ou, v3, kY, tT = (tT = eH - 6) < 6 ? 6 : tT;
		void 0 !== vG && vG.width === tT || ((vG = document.createElement("canvas")).width = tT, vG.height = tT, (ou = vG.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, tT, tT), v3 = Math.floor(tT / 8), ou.lineWidth = v3 = v3 < 1 ? 1 : v3, ou.strokeStyle = cY.cZ, kY = Math.floor(tT / 2), tT = Math.floor((tT - v3) / 2), ou.beginPath(), ou.arc(kY, kY, tT, 0, 2 * Math.PI), ou
			.moveTo(kY, kY - tT), ou.lineTo(kY, kY + tT), ou.moveTo(kY + Math.cos(.78 * Math.PI) * tT, kY + Math.cos(.28 * Math.PI) * tT), ou.lineTo(kY, kY), ou.lineTo(kY + Math.cos(.22 * Math.PI) * tT, kY + Math.cos(1.72 * Math.PI) * tT), ou
			.stroke())
	}, this.cL = function(gV, gW) {
		var gb;
		return !(gV < p - this.cG - k1 || gW < (gb = cT()) || gb + eH < gW || (hA || et.iT.j1(gV > p - k1 - this.cG / 2 ? 1 : 0), 0))
	}, this.eY = function() {
		if (0 < vO) 0 === --vO && vR();
		else if (this.o8) 270 == --vL && 2 <= vN && function() {
			var a2;
			for (a2 = er - 1; 0 <= a2; a2--)
				if (bJ.rZ(es[a2])) return;
			return 1
		}() && (uY = !0, vI[0] += vJ[0]), 180 === vL && 3 * vI[0] < vJ[0] ? vR() : vI[0] >= vJ[0] ? vP ? my.mj.mn() : my.mj.ms(-1) : vI[1] >= vJ[1] ? vO = 4 : vL <= 0 && vR();
		else if (function() {
				var a2;
				for (a2 = 9; 0 <= a2; a2--) 12 < Math.abs(vM[a2] - bi[g9[a2]]) && (vL = 140), vM[a2] = bi[g9[a2]];
				if (--vL <= 0) return 1;
				return
			}()) {
			(vP = vU()) && fR.t1(), this.o8 = !0, vL = 360;
			var a2, r = 0;
			for (a2 = er - 1; 0 <= a2; a2--) bJ.rZ(es[a2]) && (r += bi[es[a2]]);
			vJ[0] = sb(b6(3 * r, 5), 1), di && 9 !== fF && (vJ[0] = vW(sb(b6(r * (100 - b6(100 * fm.nB(), pH)), 100), 1), vJ[0])), vJ[1] = sb(r - vJ[0], 1), vN++
		}
	}, this.n0 = function() {
		this.o8 && vI[0] < vJ[0] && vR()
	}, this.jw = function(player, vY) {
		var a2, r;
		if (this.o8) {
			for (a2 = vK.length - 1; 0 <= a2; a2--)
				if (vK[a2] === player) return;
			vK.push(player), uY = !0, r = fH ? vJ[0] : bi[player], vY ? vI[0] += r : vI[1] += r, player === bA && (vH = vY ? 1 : -1)
		}
	}, this.cU = function() {
		var gW;
		this.o8 && (gW = cT(), cV.drawImage(oo, p - this.cG - k1, gW))
	}
}

function q8() {
	var cG, gV, vZ, oo, hf, o8, dK, va, cF, uY, vb = 11 / 12;

	function vd() {
		var uc = Math.floor(dK * (cG - 2 * vZ)),
			vg = 1 + Math.floor(.0625 * fk.eH),
			vh = 1 + Math.floor(.3 * fk.eH),
			tT = Math.floor(.55 * fk.eH);
		hf.clearRect(0, 0, cG, fk.eH), hf.fillStyle = cY.hk, hf.fillRect(0, 0, vZ, fk.eH), hf.fillRect(vZ + uc, 0, cG - vZ - uc, fk.eH), hf.fillStyle = dK < 1 / 3 ? "rgba(" + Math.floor(3 * dK * 130) + ",130,0,0.85)" : dK < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (dK - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (dK - 2 / 3) * 130) + ",0.85)", hf.fillRect(vZ, 0, uc, fk.eH), hf.fillStyle = cY.cZ, hf.fillRect(0, 0, cG, 1), hf.fillRect(0, fk.eH - 1, cG, 1),
			hf.fillRect(0, 0, 1, fk.eH), hf.fillRect(vZ, 0, 1, fk.eH), hf.fillRect(vZ + uc, 0, 1, fk.eH), hf.fillRect(cG - vZ, 0, 1, fk.eH), hf.fillRect(cG - 1, 0, 1, fk.eH), hf.fillRect(Math.floor(.25 * fk.eH) + vh, Math.floor((fk.eH - vg) / 2), fk
				.eH - 2 * vh, vg), hf.fillRect(Math.floor(cG - 1.25 * fk.eH) + vh, Math.floor((fk.eH - vg) / 2), fk.eH - 2 * vh - vh % 2, vg), hf.fillRect(Math.floor(cG - 1.25 * fk.eH) + Math.floor((fk.eH - vg) / 2), vh, vg, fk.eH - 2 * vh - vh % 2),
			va = he.iV.dJ(bA, fk.rS()), hf.fillText(fi.gm(va) + " (" + fT.tF(100 * dK, 0) + ")", Math.floor(.5 * cG), tT)
	}

	function vl(c3) {
		return !(1 < c3 && 1 === dK || (1 < c3 && c3 * dK - dK < 1 / 1024 ? c3 = (dK + 1 / 1024) / dK : c3 < 1 && dK - c3 * dK < 1 / 1024 && (c3 = (dK - 1 / 1024) / dK), dK = bx.on(dK * c3, 1 / 1024, 1), vd(), 0))
	}

	function vm(cM) {
		return dK !== (dK = bx.on((cM - gV - vZ) / (cG - 2 * vZ), 1 / 1024, 1)) && (vd(), !0)
	}
	this.gW = 0, this.o9 = !1, this.c5 = function() {
		o8 = !h9 && !hA, uY = !1, dK = .5, va = 0, this.o9 = !1, this.resize()
	}, this.resize = function() {
		o && p < .8 * q ? (this.eH = Math.floor(.0536 * c6), cG = p - 4 * k1 - this.eH) : (cG = Math.floor((o ? .65 : .389) * c6), cG += 12 - cG % 12, this.eH = Math.floor(cG / 12)), vZ = Math.floor(3 * this.eH / 2), cF = c9 + Math.floor(.5 *
			this.eH) + cA, (oo = document.createElement("canvas")).width = cG, oo.height = this.eH, (hf = oo.getContext("2d", {
			alpha: !0
		})).font = cF, hf.textBaseline = cW, he.hf.textAlign(hf, 1), this.vc(), vd()
	}, this.vc = function() {
		gV = o && p < .8 * q ? this.eH + 3 * k1 : Math.floor((gd - cG) / 2), this.gW = cP - this.eH - gj.se() * k1
	}, this.fx = function() {
		uY && (uY = !1, vd())
	}, this.o8 = function() {
		return !(!o8 || lx.oQ && gV < Math.floor(k1 + 5.5 * this.eH))
	}, this.sd = function(cI) {
		return !!this.o8() && p - cI - k1 < gV + cG
	}, this.cS = function() {
		o8 = !hA
	}, this.vR = function() {
		o8 = !1
	}, this.rS = function() {
		return bx.on(Math.floor(1024 * dK + .5) - 1, 0, 1023)
	}, this.oI = function(cM, cN) {
		return this.o8() && gV < cM && cM < gV + cG && cN > this.gW
	}, this.cL = function(cM, cN) {
		return !!this.o8() && !!fk.oI(cM, cN) && (hE.hF = !1, function(rr, cM, cN) {
			if (function(cM, cN) {
					return gV < cM && cM < gV + vZ && cN > fk.gW
				}(cM, cN)) return vl(vb);
			if (function(cM, cN) {
					return gV + cG - vZ < cM && cM < gV + cG && cN > fk.gW
				}(cM, cN)) return vl(1 / vb);
			return rr.o9 = !0, vm(cM)
		}(this, cM, cN) && (aA.cJ = !0), !0)
	}, this.oU = function(hN) {
		0 !== fy && this.o8() && vl(hN) && (aA.cJ = !0)
	}, this.ni = function(deltaY) {
		var hN;
		return !(0 === deltaY || !this.o8()) && vl(hN = 0 < deltaY ? (hN = 400 / (400 + deltaY)) < vb ? vb : hN : 1 / vb < (hN = (400 - deltaY) / 400) ? 1 / vb : hN)
	}, this.nf = function(cM, cN) {
		return !!this.o9 && vm(cM)
	}, this.oD = function() {
		this.o9 = !1
	}, this.eY = function() {
		this.o8() && va !== he.iV.dJ(bA, this.rS()) && (uY = !0)
	}, this.cU = function() {
		this.o8() && cV.drawImage(oo, gV, this.gW)
	}
}

function qy() {
	var oo, hf, vn, font, vo = 0,
		vp = !1,
		vq = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		vr = 5;

	function tZ() {
		if (vp) {
			var a2, bH = vq.length,
				tT = Math.floor(.5 * vn.eH),
				eH = bH * tT,
				gV = Math.floor(Math.floor(vn.gV) + .3 * vn.cG - .5),
				gW = Math.floor(Math.floor(vn.gW) - eH),
				cG = Math.floor(.4 * vn.cG + 2.5);
			for (cV.fillStyle = cY.hk, cV.fillRect(gV, gW, cG, eH), cV.fillStyle = cY.i4, cV.fillRect(gV, gW + vr * tT, cG, tT), cV.fillStyle = cY.cZ, cV.fillRect(gV, gW, 2, eH), cV.fillRect(gV, gW, cG, 2), cV.fillRect(gV + cG - 2, gW, 2, eH), a2 =
				1; a2 < bH; a2++) cV.fillRect(gV, gW + a2 * tT, cG, 2);
			for (cV.fillStyle = cY.cZ, he.hf.textAlign(cV, 1), he.hf.textBaseline(cV, 1), cV.font = he.hf.kA(.6 * tT, 0), gV += .5 * cG, a2 = 0; a2 < bH; a2++) cV.fillText(w4(a2), gV, gW + (a2 + .6) * tT)
		}
		cV.drawImage(oo, Math.floor(vn.gV), Math.floor(vn.gW))
	}

	function cB(rr) {
		var gV, ga, gb, tT;
		hf.clearRect(0, 0, Math.floor(vn.cG), Math.floor(vn.eH)), hf.fillStyle = cY.hk, hf.fillRect(0, 0, Math.floor(vn.cG), Math.floor(vn.eH)), hD && (hf.fillStyle = cY.i4, hf.fillRect(0, 0, Math.floor(.3 * vn.cG), Math.floor(vn.eH))), hf
			.fillStyle = cY.cZ, hf.fillText("Hide UI", .15 * vn.cG, .5 * vn.eH), hf.fillRect(Math.floor(.3 * vn.cG - .5), 0, 2, Math.floor(vn.eH)), gV = .5 * vn.cG, hf.fillText("Replay Speed", gV, .31 * vn.eH), hf.fillText(w4(vr), gV, .69 * vn.eH),
			hf.fillRect(Math.floor(.7 * vn.cG - .5), 0, 2, Math.floor(vn.eH)), rr.rz ? (gV = Math.floor(.02 * vn.cG), rr = Math.floor(.025 * vn.cG), ga = Math.floor(.85 * vn.cG - gV - .5 * rr), gb = Math.floor(.25 * vn.eH), tT = Math.floor(vn.eH) -
				2 * gb, hf.fillRect(ga, gb, gV, tT), hf.fillRect(ga + gV + rr, gb, gV, tT)) : function() {
				var cG = Math.floor(.46 * vn.eH),
					eH = Math.floor(.23 * vn.eH),
					gV = Math.floor(.85 * vn.cG - .5 * cG + cG / 12),
					gW = Math.floor(.5 * vn.eH - eH);
				hf.beginPath(), hf.moveTo(gV, gW), hf.lineTo(gV + cG, gW + eH), hf.lineTo(gV, gW + (eH << 1)), hf.fill()
			}(), hf.fillRect(0, 0, Math.floor(vn.cG), 2), hf.fillRect(0, 0, 2, Math.floor(vn.eH)), hf.fillRect(0, Math.floor(vn.eH) - 2, Math.floor(vn.cG), 2), hf.fillRect(Math.floor(vn.cG - 2), 0, 2, Math.floor(vn.eH))
	}

	function w4(a2) {
		return 5 === a2 ? "Normal" : "" + vq[a2]
	}
	this.rz = !1, this.c5 = function() {
		hA && (vr = 5, this.rz = !1, vp = !1, vn = new jx([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.vs = function() {
		return vq[vr]
	}, this.cT = function() {
		return vn.gW
	}, this.sd = function(cI) {
		return !!hA && vn.gV + vn.cG > p - cI - k1
	}, this.resize = function() {
		hA && (vn.resize(), vn.gW -= (gj.se() - 1) * k1, font = he.hf.kA(.3 * vn.eH, 0), (oo = document.createElement("canvas")).width = Math.floor(vn.cG), oo.height = Math.floor(vn.eH), (hf = oo.getContext("2d", {
			alpha: !0
		})).font = font, he.hf.textAlign(hf, 1), he.hf.textBaseline(hf, 1), cB(this))
	}, this.oP = function(vt) {
		vt !== hD && (hD = vt, fm.resize(), aA.cJ = !0, hA) && (vo = aA.aB + 2e3, cB(this))
	}, this.cL = function(gV, gW) {
		if (!hA) return !1;
		if (gV < vn.gV || gW < vn.gW || gV > vn.gV + vn.cG) return vp && function(rr, gV, gW) {
			var bH = vq.length,
				tT = Math.floor(.5 * vn.eH),
				eH = bH * tT,
				ga = Math.floor(Math.floor(vn.gV) + .3 * vn.cG - .5),
				eH = Math.floor(Math.floor(vn.gW) - eH),
				cG = Math.floor(.4 * vn.cG + 2.5);
			return vp = !1, aA.cJ = !0, gV < ga || ga + cG < gV || gW < eH || (vr = vw(0, Math.floor((gW - eH) / tT), bH - 1), cB(rr)), !0
		}(this, gV, gW);
		if ((gV -= vn.gV) < .3 * vn.cG) vp = !1, this.oP(!hD);
		else {
			if (gV < .7 * vn.cG) return vp = !vp, aA.cJ = !0;
			this.oS(!1)
		}
		return !0
	}, this.oS = function(vv) {
		2 === fy ? (this.oP(!1), k7.show()) : (vp = !1, this.rz = !this.rz, this.rz ? lx.oQ ? lx.oR() : a7(1) : vv || lx.s0(), aA.cJ = !0, cB(this))
	}, this.o2 = function(gV, gW) {
		return !!hD && (lx.cL(gV, gW) || (hA ? ((aA.aB > vo || !this.cL(gV, gW)) && hE.cL(gV, gW), aA.cJ = !0, vo = aA.aB + 2e3) : hE.cL(gV, gW)), !0)
	}, this.eY = function() {
		hA && hD && aA.aB > vo - 1e3 && aA.aB < vo && (aA.cJ = !0)
	}, this.n4 = function() {
		hA && (this.rz = !1, aA.cJ = !0, cB(this))
	}, this.cU = function() {
		if (hA) {
			if (hD) {
				if (aA.aB > vo) return;
				if (aA.aB > vo - 1e3) return cV.globalAlpha = vw(0, (1e3 - (aA.aB - (vo - 1e3))) / 1e3, 1), tZ(), void(cV.globalAlpha = 1)
			}
			tZ()
		}
	}
}

function qx() {
	var vn, k4, or, tT;
	this.o8 = !1, this.k6 = !1, this.sB = function() {
		return hA || 2 === fy
	}, this.show = function() {
		this.o8 = !0, vn || (vn = new jx([.55, .35], [.5, .5]), (k4 = new k3).c5()), this.resize(), 0 === fy ? k4.kC("") : (fo.jb.w8.length || (fo.jb.w8 = fo.wB.mb()), k4.kC(fo.wC(fo.jb.w8))), k4.show(), aA.cJ = !0, oK.cS(!1)
	}, this.k8 = function() {
		this.o8 && (this.o8 = !1, this.k6 = !1, k4.k8(), aA.cJ = !0, 0 === fy && px.kG(), 0 === aH.oM()) && oK.cS(!0)
	}, this.resize = function() {
		this.o8 && (vn.resize(), or = .03 * vn.eH, tT = .2 * vn.eH, k4.resize(vn.gV + or, vn.gW + tT + or, vn.cG - 2 * or, vn.eH - 2 * (tT + or)))
	}, this.cL = function(gV, gW) {
		return !!this.o8 && (gV < vn.gV || gW < vn.gW || gV > vn.gV + vn.cG || gW > vn.gW + vn.eH ? 2 !== lx.cL(gV, gW) && this.k8() : gW < vn.gW + vn.eH - tT ? gV > vn.gV + vn.cG - tT && gW < vn.gW + tT && this.k8() : (gV -= vn.gV) < .25 * vn
			.cG ? k4.kF() : gV < .5 * vn.cG ? k4.kH() : gV < .75 * vn.cG ? k4.kG() : (gW = this, gV = fo.w7(k4.kE()), gW.k8(), (0 < gV.length && gV === fo.jb.w8 || fo.wA.kW(gV)) && fo.w9()), !0)
	}, this.cU = function() {
		var a2;
		if (this.o8)
			for (he.hf.textAlign(cV, 1), cV.fillStyle = cY.iD, cV.fillRect(vn.gV, vn.gW, vn.cG, tT), cV.fillStyle = cY.hk, cV.fillRect(vn.gV, vn.gW + tT, vn.cG, vn.eH - tT), cV.fillStyle = cY.cZ, cV.fillRect(vn.gV, vn.gW, 2, vn.eH), cV.fillRect(
					vn.gV, vn.gW, vn.cG, 2), cV.fillRect(vn.gV + vn.cG - 2, vn.gW, 2, vn.eH), cV.fillRect(vn.gV, vn.gW + vn.eH - 2, vn.cG, 2), cV.fillRect(vn.gV + 1, vn.gW + tT, vn.cG - 2, 2), cV.fillRect(vn.gV + 1, vn.gW + vn.eH - tT, vn.cG - 2,
					2), cV.font = c9 + Math.floor(.39 * tT) + cA, cV.fillText("Replay", vn.gV + .5 * vn.cG, vn.gW + .55 * tT), lx.sC(vn.gV + vn.cG - .725 * tT, vn.gW + .275 * tT, .45 * tT), cV.setTransform(1, 0, 0, 1, 0, 0), cV.font = he.hf.kA(
					.3 * tT, 0), cV.fillText("Select All", vn.gV + .125 * vn.cG, vn.gW + vn.eH - .48 * tT), cV.fillText("Copy", vn.gV + .375 * vn.cG, vn.gW + vn.eH - .48 * tT), cV.fillText("Clear", vn.gV + .625 * vn.cG, vn.gW + vn.eH - .48 * tT),
				cV.fillText("Launch", vn.gV + .875 * vn.cG, vn.gW + vn.eH - .48 * tT), a2 = 1; a2 < 4; a2++) cV.fillRect(vn.gV + .25 * a2 * vn.cG - 1, vn.gW + vn.eH - tT + 1, 2, tT - 2)
	}
}

function q9() {
	var wE, wF, cG, gV, gW, wG, wH;
	this.c5 = function() {
		wE = new Array(2), wF = new Array(2), this.hF = !1, wH = wG = dN = dL = 0, dM = 1, this.resize()
	}, this.resize = function() {
		cG = (cG = Math.floor((o ? .072 : .0502) * c6)) < 8 ? 8 : cG;
		for (var a2 = 1; 0 <= a2; a2--) wE[a2] = document.createElement("canvas"), wE[a2].width = cG, wE[a2].height = cG, wF[a2] = wE[a2].getContext("2d", {
			alpha: !0
		});
		this.vc(),
			function() {
				for (var wX = Math.floor(1 + cG / 20), a2 = 1; 0 <= a2; a2--) wF[a2].clearRect(0, 0, cG, cG), wF[a2].fillStyle = cY.hh, wF[a2].beginPath(), wF[a2].arc(cG / 2, cG / 2, cG / 2 - wX, 0, 2 * Math.PI), wF[a2].fill(), wF[a2].lineWidth =
					wX, wF[a2].fillStyle = cY.cZ, wF[a2].strokeStyle = cY.cZ, wF[a2].beginPath(), wF[a2].arc(cG / 2, cG / 2, cG / 2 - wX, 0, 2 * Math.PI), wF[a2].stroke(), m3(wF[a2], 0, 0, cG, wX, .3, 0 === a2)
			}()
	}, this.gf = function() {
		return -dL / dM
	}, this.cT = function() {
		return -dN / dM
	}, this.hP = function(wL, d4) {
		dL = dM * wL - d4
	}, this.hQ = function(wM, d5) {
		dN = dM * wM - d5
	}, this.cL = function(wK, sf) {
		return hD || ! function(wK, sf) {
			return Math.pow(wK - (gV + cG / 2), 2) + Math.pow(sf - (gW + cG / 2), 2) < cG * cG / 4 || Math.pow(wK - (gV + cG / 2), 2) + Math.pow(sf - (gW + 2 * cG), 2) < cG * cG / 4
		}(wK, sf) || gj.gk.wN ? (fq.hT() && (this.hF = !0, wG = wK, wH = sf), !1) : sf < gW + 1.25 * cG ? this.ni(Math.floor(gd / 2), Math.floor(cP / 2), -200) : this.ni(Math.floor(gd / 2), Math.floor(cP / 2), 200)
	}, this.nf = function(wK, sf) {
		var wO, wP, d7, dA;
		return !fq.hT() || (wO = dL, wP = dN, dL += d7 = wG - wK, dN += dA = wH - sf, fS.nf(d7, dA), this.wQ(), wG = wK, wH = sf, wO !== dL) || wP !== dN
	}, this.ni = function(cM, cN, deltaY) {
		var hN;
		if (fq.hT()) {
			if (0 < deltaY) hN = (hN = 500 / (500 + deltaY)) < .5 ? .5 : hN;
			else {
				if (!(deltaY < 0)) return !1;
				hN = 2 < (hN = (500 - deltaY) / 500) ? 2 : hN
			}
			this.wR(cM, cN, hN), aA.cJ = !0
		}
		return !0
	}, this.wR = function(gV, gW, d0) {
		var c3;
		d0 = c3 = (c3 = 1024 < (c3 = d0) * dM ? 1024 / dM : c3) * dM < .125 ? .125 / dM : c3, fS.zoom(d0, gV, gW),
			function(c3, cM, cN) {
				dM *= c3, dL = (dL + cM) * c3 - cM, dN = (dN + cN) * c3 - cN, hE.wQ()
			}(d0, gV, gW)
	}, this.wQ = function() {
		var wU = p / 16,
			cg = 0,
			wV = q / 16,
			ci = 0;
		dL < wU - p && (cg = wU - p - dL), dN < wV - q && (ci = wV - q - dN), dL += cg = dM * an - wU < dL ? dM * an - wU - dL : cg, dN += ci = dM * ao - wV < dN ? dM * ao - wV - dN : ci, hR.hS(), fS.wW(cg, ci)
	}, this.vc = function() {
		gV = gd - cG - k1, gW = Math.floor(cP / 2 - 1.25 * cG)
	}, this.cU = function() {
		gj.gk.wN || (cV.drawImage(wE[0], gV, gW), cV.drawImage(wE[1], gV, Math.floor(gW + 3 * cG / 2)))
	}
}

function qA() {
	var aR, lE, wY, wZ, lZ, wa, wb, wc, wd, we, cF, wf, wg, wh, wi, uc, wj, wk, wl;

	function wp() {
		wZ = Math.floor(.2 * (o ? .07 : .035) * c6), wZ = sb(o ? 3 : 1, wZ);
		var wu = p / (aR.length + lZ);
		wZ = wZ < wu ? wu : wZ, uc = Math.floor((1 - lZ) * wZ), lE = 0, wv()
	}

	function wv() {
		lE = (lE = lE < -20 ? -20 : lE) > (aR.length - 15) * wZ ? (aR.length - 15) * wZ : lE, wb = Math.floor(lE / wZ), wc = (wc = wb + Math.floor(gd / wZ)) > aR.length - 1 ? aR.length - 1 : wc, wb = (wb = wc < wb ? wc : wb) < 0 ? 0 : wb;
		var kY = wc;
		wa = wY / aR[kY];
		for (var a2 = wc - 1; wb <= a2; a2--) aR[a2] > aR[kY] && (kY = a2, wa = wY / Math.pow(aR[a2], wi))
	}

	function wy(gV) {
		gV = Math.floor((lE + gd - gV - lZ * wZ) / wZ);
		return (gV = gV < -1 ? -1 : -1 === gV ? 0 : gV > aR.length - 1 ? -1 : gV) !== wd && (wd = gV, -1 === wj && 0 === wd && wh && (wj = setInterval(wz, 100)), 1)
	}

	function x0(a2) {
		var uR = Math.floor(wa * Math.pow(aR[a2], wi));
		cV.fillRect(lE + gd - (a2 + 1) * wZ, cP - uR, uc, uR)
	}

	function wz() {
		var bP;
		0 !== (wd = 8 === aH.oM() ? -1 : wd) ? (wk = (new Date).getTime(), clearInterval(wj), wj = -1) : (bP = aR[1] / 864e3, -1 !== wk && (bP += ((new Date).getTime() - wk) * aR[1] / 864e5, wk = -1), 0 < bP && (aR[0] += Math.floor(bP), aA.cJ = !0))
	}
	this.c5 = function() {
		wh = !(wk = wj = -1), wd = -(wi = 1), this.wm = !1, wg = 0, wf = new Date, lE = 0, lZ = .3, (wl = []).push({
			t6: "Plateau A",
			bH: 0,
			nR: 57
		}), wl.push({
			t6: "Max A",
			bH: 1,
			nR: 1
		}), wl.push({
			t6: "Black Friday",
			bH: 15,
			nR: 15
		}), wl.push({
			t6: "Max B",
			bH: 19,
			nR: 19
		}), wl.push({
			t6: "Max C",
			bH: 44,
			nR: 44
		}), wl.push({
			t6: "First Android Version",
			bH: 58,
			nR: 58
		}), wl.push({
			t6: "Max D",
			bH: 67,
			nR: 67
		}), wl.push({
			t6: "The iFrame Explosion",
			bH: 98,
			nR: 99
		}), wl.push({
			t6: "The 155-Day Uptrend",
			bH: 58,
			nR: 213
		}), wl.push({
			t6: "Max E",
			bH: 213,
			nR: 213
		}), wl.push({
			t6: "Plateau B",
			bH: 214,
			nR: 259
		}), wl.push({
			t6: "Turbulent Times",
			bH: 260,
			nR: 344
		}), wl.push({
			t6: "Max F",
			bH: 262,
			nR: 262
		}), wl.push({
			t6: "Max G",
			bH: 282,
			nR: 282
		}), wl.push({
			t6: "Max H",
			bH: 333,
			nR: 333
		}), wl.push({
			t6: "The 19-Day Downtrend",
			bH: 283,
			nR: 301
		}), wl.push({
			t6: "Plateau C",
			bH: 345,
			nR: 385
		}), wl.push({
			t6: "The Alliance Ascent",
			bH: 386,
			nR: 395
		}), wl.push({
			t6: "Max I",
			bH: 395,
			nR: 395
		}), wl.push({
			t6: "First iOS Version",
			bH: 411,
			nR: 411
		}), wl.push({
			t6: "Plateau D",
			bH: 396,
			nR: 453
		}), wl.push({
			t6: "The TikTok Revolution",
			bH: 454,
			nR: 470
		}), wl.push({
			t6: "Max J",
			bH: 456,
			nR: 456
		}), wl.push({
			t6: "Max K",
			bH: 472,
			nR: 472
		}), wl.push({
			t6: "Max L",
			bH: 478,
			nR: 478
		}), wl.push({
			t6: "YT Drew",
			bH: 471,
			nR: 485
		}), wl.push({
			t6: "Plateau E",
			bH: 485,
			nR: 600
		}), wl.push({
			t6: "Uptrend A",
			bH: 600,
			nR: 613
		}), wl.push({
			t6: "Max M",
			bH: 613,
			nR: 613
		}), wl.push({
			t6: "Downtrend A",
			bH: 614,
			nR: 635
		}), wl.push({
			t6: "Plateau F",
			bH: 636,
			nR: 737
		}), wl.push({
			t6: "End of Record",
			bH: 738,
			nR: 738
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
		], this.resize(), fV.wo(0, 0)
	}, this.resize = function() {
		wY = Math.floor(.15 * q), we = Math.floor((o ? .018 : .0137) * c6), cF = c9 + (we = we < 2 ? 2 : we) + cA, wp()
	}, this.wq = function() {
		wh || id.wr()
	}, this.ws = function(wt) {
		var a2;
		for (wh = !0, a2 = 0; a2 < wt.length; a2++) aR.unshift(wt[a2]);
		wp(), aA.cJ = !0
	}, this.ww = function() {
		wv()
	}, this.nf = function(gV, gW) {
		cP - .6 * wY < gW ? this.wm ? gV !== wg && (lE += gV - wg, wg = gV, wv(), wy(gV), this.wm = -1 !== wd, aA.cJ = !0) : wy(gV) && (aA.cJ = !0) : this.oB()
	}, this.oB = function() {
		-1 !== wd && (this.wm = !1, wd = -1, aA.cJ = !0)
	}, this.ni = function(gV, deltaY) {
		-1 !== wd && (lE += Math.floor(deltaY), wv(), wy(gV), aA.cJ = !0)
	}, this.cL = function(gV, gW) {
		this.nf(gV, gW), -1 !== wd && (wg = gV, this.wm = !0)
	}, this.oC = function() {
		-1 !== wd && (this.wm = !1)
	}, this.cU = function() {
		cV.fillStyle = cY.hp;
		for (var x2, month, r, m7, x5, x6, gb, x7, x8, a2 = wc; wb <= a2; a2--) x0(a2);
		wh && 0 === wb && (cV.fillStyle = cY.iA, x0(0)), -1 !== wd && (cV.fillStyle = cY.ho, x0(wd)), -1 !== wd && (cV.font = cF, cV.textBaseline = uE, (r = new Date).setTime(wf.getTime() - 1e3 * wd * 60 * 60 * 24), month = "month", x2 = "day",
			"undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(r), x2 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(r)), x2 = x2 + ", " + r.getUTCDate() + " " + month + " " + r.getFullYear(), month = 1 === aR[wd] ? " second played" : " seconds played", month = fi.gm(aR[wd]) + month, r = Math.floor(cV.measureText(x2).width), m7 = Math
			.floor(cV.measureText(month).width), x5 = Math.floor(.5 * (r + we)), x6 = (x6 = lE + gd - (wd + 1) * wZ) < x5 ? x5 : gd - x5 < x6 ? gd - x5 : x6, gb = cP - Math.floor(wa * Math.pow(aR[wd], wi)), x7 = Math.floor(1.1 * we), x8 =
			cP - x7 < gb ? cP - x7 : gb, cV.fillStyle = cY.hl, cV.fillRect(gd - m7 - we, x8 - x7, m7 + we, x7), cV.fillRect(x6 - x5, cP - x7, r + we, x7), cV.fillStyle = cY.cZ, cV.textAlign = uF, cV.fillText(month, Math.floor(gd - .5 * we),
				x8),
			function(gb, x7) {
				for (var m6, rE = -1, c8 = aR.length - wd - 1, a2 = wl.length - 1; 0 <= a2; a2--) c8 >= wl[a2].bH && c8 <= wl[a2].nR && (-1 === rE || wl[a2].nR - wl[a2].bH < wl[rE].nR - wl[rE].bH) && (rE = a2); - 1 !== rE && (m6 = Math.floor(
					cV.measureText(wl[rE].t6).width), cV.fillStyle = cY.hl, cV.fillRect(gd - m6 - we, gb, m6 + we, x7), cV.fillStyle = cY.cZ, cV.fillText(wl[rE].t6, Math.floor(gd - .5 * we), gb + x7))
			}(x8 - 2 * x7, x7), cV.textAlign = cX, cV.fillText(x2, x6, cP), cV.strokeStyle = cY.hq, cV.lineWidth = 1, cV.beginPath(), cV.moveTo(0, gb), cV.lineTo(gd, gb), cV.closePath(), cV.stroke())
	}
}

function qB() {
	var cF, cG, gW, xA, xB, oo, hf, uY, oy, xC, xD, xE, xF;
	this.gV = 0, this.eH = 0, this.c5 = function() {
		xB = le, xD = "rgba(0,100,0,0.8)", xE = "rgba(150,0,0,0.8)", uY = !(xC = !0), oy = bB[bA], this.resize()
	}, this.resize = function() {
		cG = Math.floor((o ? .305 : .24) * c6), this.eH = Math.floor(.5 + .13 * cG), cG = Math.floor(6 * this.eH), cF = c9 + Math.floor(.8 * this.eH) + cA, xF = Math.floor(.5 * this.eH), ki.font = cF, gW = k1, xA = Math.floor(1 + .13 * this.eH),
			(oo = document.createElement("canvas")).width = cG, oo.height = this.eH, (hf = oo.getContext("2d", {
				alpha: !0
			})).font = cF, hf.textBaseline = cW, hf.textAlign = cX, this.xG()
	}, this.uy = function() {
		return o && p < 1.2 * q
	}, this.vc = function() {
		this.uy() ? this.gV = gd - cG - k1 : this.gV = Math.floor(fe.xH() + (gd - fe.xH() - fT.cG - cG) / 2 - .5 * k1)
	}, this.fx = function() {
		uY && (uY = !1, this.xG())
	}, this.xG = function() {
		hf.clearRect(0, 0, cG, this.eH), hf.fillStyle = xC ? xD : xE, hf.fillRect(0, 0, cG, this.eH), hf.fillStyle = cY.ho, this.xI(), this.xJ(), hf.fillStyle = bB[bA] >= bC.ec(bA) ? cY.i7 : cY.cZ, hf.fillText(fi.gm(oy), Math.floor(cG / 2), xF),
			hf.fillStyle = cY.cZ, hf.fillRect(0, 0, cG, 1), hf.fillRect(0, 0, 1, this.eH), hf.fillRect(0, this.eH - 1, cG, 1), hf.fillRect(cG - 1, 0, 1, this.eH)
	}, this.xI = function() {
		var lM = vW(Math.floor((bC.xK() - 1) * this.eH / 9), this.eH - xA);
		hf.fillRect(0, lM, xA, this.eH - lM), hf.fillRect(cG - xA, lM, xA, this.eH - lM)
	}, this.xJ = function() {
		hf.fillRect(xA, this.eH - xA, Math.floor((cG - 2 * xA) * bB[bA] / xB), xA)
	}, this.eY = function() {
		0 !== dG[bA] && 2 !== dH[bA] && oy !== bB[bA] && (xB = sb(bB[bA], xB), xC = bB[bA] > oy && 10 <= bB[bA], oy = bB[bA], uY = !0)
	}, this.cU = function() {
		0 === dG[bA] || h9 || 2 === dH[bA] || cV.drawImage(oo, this.gV, gW)
	}
}

function qC() {
	var xM, xN, xO, xP, xQ, xR, xS, xT, xU, xV, xW, xX, xY, xZ, xa, xb, xc, xd, xe, title, xf, xg, xh, xi, xj, position, xk, xl, xm, xn, xo = 1;

	function xr() {
		xS.clearRect(0, 0, xM, vE), xS.fillStyle = cY.iJ, xS.fillRect(0, 0, xM, xX), xS.fillStyle = cY.hk, xS.fillRect(0, xX, xM, vE - xX), xL[bA] >= position && xu(xL[bA] - position, cY.i4), 0 !== xL[bA] && 0 === position && xu(0, cY.iN), -1 !==
			xj && xu(xj, cY.hn), xS.fillStyle = cY.cZ, xS.fillRect(0, xX, xM, 1), xS.fillRect(0, 0, xM, uJ), xS.fillRect(0, 0, uJ, vE), xS.fillRect(xM - uJ, 0, uJ, vE), xS.fillRect(0, vE - uJ, xM, uJ), xS.font = xN, xS.textBaseline = cW, xS
			.textAlign = cX, xS.fillText(title, Math.floor(xM / 2), Math.floor(xV + xO / 2));
		var dx, bQ = xL[bA] < position + xQ - 1 ? 1 : 2;
		for (xS.font = xP, xS.textAlign = sk, dx = xQ - bQ; 0 <= dx; dx--) xv(g9[dx + position]), xw(dx, dx + position, g9[dx + position]);
		for (xS.textAlign = uF, dx = xQ - bQ; 0 <= dx; dx--) xv(g9[dx + position]), xx(dx, g9[dx + position]);
		2 == bQ && (xv(bA), xS.textAlign = sk, xw(xQ - 1, xL[bA], bA), xS.textAlign = uF, xx(xQ - 1, bA)), 0 === position && (bQ = .7 * xY / cC.get(4).height, xS.setTransform(bQ, 0, 0, bQ, Math.floor(xZ + .58 * xY + .5 * bQ * cC.get(4).width), Math
			.floor(xV + xO + .4 * xY)), xS.imageSmoothingEnabled = !0, xS.drawImage(cC.get(4), -Math.floor(cC.get(4).width / 2), -Math.floor(cC.get(4).height / 2)), xS.setTransform(1, 0, 0, 1, 0, 0))
	}

	function xv(player) {
		di && (xS.fillStyle = ep.xz[ep.n9[ep.eq[player]]])
	}

	function xu(a2, rJ) {
		xS.fillStyle = rJ, a2 = xQ - 1 < a2 ? xQ - 1 : a2;
		rJ = Math.floor((a2 === xQ - 1 ? 2 : 0 === a2 ? 1.15 : 1) * xY), rJ = a2 === xQ - 2 ? Math.floor(xX + 9.15 * xY) - Math.floor(xX + 8.15 * xY) : rJ;
		xS.fillRect(0, Math.floor(xX + (a2 + (0 === a2 ? 0 : .15)) * xY), xM, rJ)
	}

	function xw(y1, y2, a2) {
		xS.fillText(xf[y2], xZ, Math.floor(xV + xO + (y1 + .5) * xY)), 1 === dH[a2] && (xS.font = uG + xP);
		y2 = Math.floor(xV + xO + (y1 + .5) * xY);
		xS.fillText(xd[a2] === a2 ? gn[a2] : xc[xd[a2] % bM], xa, y2), 0 !== dH[a2] && (xS.font = xP), a2 < dF && 2 !== dH[a2] || xS.fillRect(xa, y2 + .35 * xo, xe[a2], Math.max(1, .1 * xo))
	}

	function xx(y1, a2) {
		xS.fillText(bi[a2], xb, Math.floor(xV + xO + (y1 + .5) * xY))
	}

	function yB(gW) {
		return (gW -= k1 + xX) < 0 ? Math.floor(gW / xY) - 1 : gW < (xQ - 1) * xY ? Math.floor(gW / xY) : gW < vE - xX ? xQ - 1 : (gW -= vE - xX, xQ + Math.floor(gW / xY))
	}

	function ro(gV, gW) {
		return k1 <= gV && gV < k1 + xM && k1 <= gW && gW < k1 + vE
	}
	this.c5 = function() {
		var a2, j, dx;
		for (xl = !1, title = "LEADERBOARD", xQ = o ? 6 : 10, position = xn = xm = xk = 0, xi = !(xj = -1), xg = new Uint16Array(xQ + 1), xh = new Uint32Array(xQ + 1), xU = bM, g9 = new Uint16Array(xU), xL = new Uint16Array(xU), a2 = xU - 1; 0 <=
			a2; a2--) g9[a2] = a2, xL[a2] = a2;
		this.resize(!0), xc = [], xd = new Uint16Array(bM), xe = new Uint16Array(bM);
		var xp = Math.floor(xM - xa - xZ - xT),
			xq = 0;
		for (xf = new Array(bM), xS.font = xP, a2 = bM - 1; 0 <= a2; a2--)
			if (xf[a2] = a2 + 1 + ".", xd[a2] = a2, xe[a2] = Math.floor(xS.measureText(gn[a2]).width), xe[a2] > xp) {
				for (j = gn[a2], dx = gn[a2].length - 1; 1 <= dx && (j = j.substring(0, dx), xe[a2] = Math.floor(xS.measureText(j + "...").width), !(xe[a2] <= xp)); dx--);
				j += "...", xc.push(j), xd[a2] = bM + xq++
			} xr()
	}, this.resize = function(c5) {
		if (vE = o ? (xM = Math.floor(.335 * c6), Math.floor(xQ * xM / 8)) : (xM = Math.floor(.27 * c6), Math.floor(xQ * xM / 10)), xM = Math.floor(.97 * xM), (xR = document.createElement("canvas")).width = xM, xR.height = vE, xS = xR.getContext(
				"2d", {
					alpha: !0
				}), xV = .025 * xM, xO = .16 * xM, xW = 0 * xM, xX = Math.floor(.45 * xV + xO), xY = (vE - xO - 2 * xV - xW) / xQ, xN = c9 + Math.floor(.55 * xO) + cA, xo = Math.floor((o ? .67 : .72) * xY), xP = xo + cA, xS.font = xP, xZ = Math
			.floor(.04 * xM), xa = Math.floor((o ? .195 : .18) * xM), xT = Math.floor(xS.measureText("00920600").width), xS.font = xN, xb = xM - xZ, !c5) {
			xS.font = xP;
			for (var a2 = bM - 1; 0 <= a2; a2--) xe[a2] = Math.floor(xS.measureText(xd[a2] === a2 ? gn[a2] : xc[xd[a2] % bM]).width);
			xr()
		}
	}, this.xH = function() {
		return xM
	}, this.fx = function(tL) {
		xi && (tL || aA.en() % gj.xs[gj.gk.xt] == 0) && (xi = !1, xr())
	}, this.eY = function() {
		! function() {
			for (var dx = xU - 1; 0 <= dx; dx--) 0 === dG[g9[dx]] && ! function(dx) {
				var y9 = g9[dx];
				xU--;
				for (var a2 = dx; a2 < xU; a2++) g9[a2] = g9[a2 + 1], xL[g9[a2]] = a2;
				g9[xU] = y9, xL[g9[xU]] = xU
			}(dx)
		}();
		for (var y7, hT = xU - 1, dx = 0; dx < hT; dx++) bi[g9[dx]] < bi[g9[dx + 1]] && (y7 = g9[dx], g9[dx] = g9[dx + 1], g9[dx + 1] = y7, xL[g9[dx]] = dx, xL[g9[dx + 1]] = dx + 1);
		! function() {
			for (var r = xi, bQ = (xi = !0, xL[bA] >= xQ - 1 ? xQ - 2 : xQ - 1), a2 = bQ; 0 <= a2; a2--)
				if (xg[a2] !== g9[a2] || xh[a2] !== bi[g9[a2]]) return;
			(bQ != xQ - 2 || xg[xQ] === xL[bA] && xh[xQ] === bi[bA]) && (xi = r)
		}();
		for (var a2 = xQ - 1; 0 <= a2; a2--) xg[a2] = g9[a2], xh[a2] = bi[g9[a2]];
		xg[xQ] = xL[bA], xh[xQ] = bi[bA]
	}, this.cL = function(gV, gW) {
		return !!ro(gV, gW) && (xk = aA.aB, xl = !0, xm = xn = yB(gW), o4.oY() && (gV = vw(-1, xn, xQ), xj !== (gV = gV === xQ ? -1 : gV)) && (xj = gV, xr(), aA.cJ = !0), !0)
	}, this.nf = function(gV, gW) {
		var r, yA = yB(gW);
		return xl ? (r = position, (position = vw(0, position += xm - yA, bM - xQ)) !== r && (yA = (yA = vw(-1, xm = yA, xQ)) !== xQ && ro(gV, gW) ? yA : -1, xj = yA, xr(), aA.cJ = !0), !0) : (yA = (yA = vw(-1, yA, xQ)) === xQ || !ro(gV, gW) ||
			o4.oY() ? -1 : yA, xj !== yA && (xj = yA, xr(), aA.cJ = !0))
	}, this.oC = function(gV, gW) {
		if (!xl) return !1;
		xl = !1;
		var yA = yB(gW);
		return o4.oY() && -1 !== xj && (xj = -1, xr(), aA.cJ = !0), aA.aB - xk < 350 && xn === yA && -1 !== (yA = (yA = vw(-1, yA, xQ)) !== xQ && ro(gV, gW) ? yA : -1) && (gV = g9[yA + position], yA === xQ - 1 && xL[bA] >= position + xQ - 1 && (
			gV = bA), di && displayDonationsHistory(gV, gn, fH), 0 !== dG[gV]) && fq.hB(gV, 800, !1, 0), !0
	}, this.ni = function(gV, gW, deltaY) {
		var yC;
		return !(xl || hD || (yC = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !ro(gV, gW)) || (gV = (gV = vw(-1, yB(gW), xQ)) === xQ || o4.oY() ? -1 : gV, 0 < deltaY ? position < bM - xQ && (position += Math.min(bM - xQ - position, yC), xj =
			gV, xr(), aA.cJ = !0) : 0 < position && (position -= Math.min(position, yC), xj = gV, xr(), aA.cJ = !0), 0))
	}, this.cU = function() {
		cV.drawImage(xR, k1, k1)
	}
}

function qD() {
	var oo, hf, gV, gW, uR, yD, lZ, yE, cE, yF, ru, bF, yG, yH, yI, yJ, yK, yL;

	function yO() {
		hf.clearRect(0, 0, fT.cG, fT.eH), hf.fillStyle = cY.hl, hf.fillRect(0, 0, fT.cG, fT.eH), hf.fillStyle = cY.hz, d0 = 0 < yI ? yI : Math.sqrt(bF[4] / bF[3]), hf.fillRect(0, fT.eH - uR - 1, Math.floor(d0 * fT.cG), uR), hf.fillStyle = cY.cZ, hf
			.fillRect(0, 0, fT.cG, 1), hf.fillRect(0, 0, 1, fT.eH), hf.fillRect(fT.cG - 1, 0, 1, fT.eH), hf.fillRect(0, fT.eH - 1, fT.cG, 1), hf.fillRect(0, fT.eH - uR - 1, fT.cG, 1);
		for (var d0, yQ, r = 0, a2 = 0; a2 < ru.length; a2++) yG[a2] ? (hf.textAlign = sk, yQ = Math.floor((yD - uR + 2 * yE) * (a2 - r + 1) / (ru.length + 1) - .7 * yE), hf.fillText(ru[a2], lZ, yQ), hf.textAlign = uF, 5 === a2 && 0 !== dG[bA] && bB[
			bA] >= bC.ec(bA) ? (hf.fillStyle = cY.iL, hf.fillText(yN(a2), fT.cG - lZ, yQ), hf.fillStyle = cY.cZ) : hf.fillText(yN(a2), fT.cG - lZ, yQ)) : r++
	}

	function yN(a2) {
		return a2 < 3 ? bF[a2].toString() : 3 === a2 || 4 === a2 || 5 === a2 ? fT.tF(bF[a2] / 100, 2) : a2 < 7 ? fi.gm(bF[a2]) : fT.xK(bF[7])
	}

	function yX(yY) {
		yY = b6(1e4 * yY, pH);
		8 === fF && (0 === dG[0] ? my.mj.ms(1) : 0 === dG[1] && my.mj.ms(0)), yY >= bF[3] && (my.mj.ms(-1), bF[4] = -1), bF[4] !== yY && (yF++, bF[4] = yY)
	}

	function yb() {
		for (var a2 = er - 1; 0 <= a2; a2--)
			if (0 < bI[es[a2]].length) return;
		return 1
	}

	function yM() {
		bi[bA] !== bF[6] && (bF[6] = bi[bA], yF++)
	}
	this.c5 = function() {
		yI = yJ = 0, (ru = new Array(8))[0] = "Humans", ru[1] = fH ? "Players" : "Bots", ru[2] = "Spectators", ru[3] = "Threshold", ru[4] = "Occupation", ru[5] = "Interest", ru[6] = "Income", ru[7] = "Time", yL = pH - b6(pH, 100), (bF =
			new Array(ru.length))[0] = fH ? 0 : dF, bF[1] = fH ? er : fA, bF[2] = n1, bF[3] = 1e4, bF[4] = b6(1e4 * bi[0], pH), bF[5] = 700, bF[6] = 0, yM(), bF[7] = 0, yH = yN(6), yG = new Array(ru.length);
		for (var a2 = ru.length - 1; 0 <= a2; a2--) yG[a2] = !0;
		yK = 0, yK = fH ? (yG[0] = !1, yG[2] = !1, yG[3] = !1, 3) : (yG[3] = !1, 1), yF = 0, this.resize()
	}, this.resize = function() {
		this.cG = Math.floor((o ? .1646 : .126) * c6), this.eH = Math.floor(1.18 * this.cG), uR = Math.floor(.04 * this.cG), lZ = Math.floor(.035 * this.cG), yE = .04 * this.cG, yD = this.eH, this.eH -= Math.floor(yK * (this.eH - 2 * uR) / ru
			.length), cE = Math.floor(.7 * (yD - uR) / ru.length), cE = c9 + cE + cA, (oo = document.createElement("canvas")).width = this.cG, oo.height = this.eH, (hf = oo.getContext("2d", {
			alpha: !0
		})).font = cE, hf.textBaseline = cW, hf.lineWidth = 1, this.pB(), this.vc(), fh.vc(), yO()
	}, this.vc = function() {
		gV = gd - this.cG - k1
	}, this.yP = function() {
		gW = k1
	}, this.pB = function() {
		gW = k1 + (fh.uy() && 0 !== dG[bA] && !h9 ? fh.eH + k1 : 0)
	}, this.fx = function(tL) {
		0 < yF && (tL || 100 <= yF) && (yF = 0, yO())
	}, this.yR = function() {
		return bF[7]
	}, this.xK = function(value) {
		var kY = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * kY) / 1e3);
		return value < 10 ? kY + ":0" + value : kY + ":" + value
	}, this.tF = function(bP, uh) {
		return bP.toFixed(uh) + "%"
	}, this.eY = function() {
		var yY, j;
		yG[0] && n2 - n1 !== bF[0] && (bF[0] = n2 - n1, yF++), er - bF[0] !== bF[1] && (bF[1] = er - bF[0], yF++), this.fU(), di ? (yY = fm.nB(), yL <= yY && yb() ? (my.mj.ms(-1), yX(fm.nB())) : yX(yY)) : (yY = bi[g9[0]], yL <= yY && yb() && my
			.mj.ms(-1), yX(yY)), (yY = bC.yd(bA)) !== bF[5] && (bF[5] = yY, yF++), yM(), bF[7] += aA.ye, j = yN(7), yH !== j && (yH = j, yF += 100)
	}, this.fU = function() {
		yG[2] && n1 !== bF[2] && (bF[2] = n1, yF++)
	}, this.yf = function(a2) {
		var op, yg, r;
		return 2 !== fy && (a2 === pL ? (yI = 0, yO(), !1) : (-1 !== a2 || 0 !== yJ) && (yg = yI, yI = hA ? a2 / pL : (r = performance.now(), 0 <= a2 && (op = r - 392 * a2, yJ = 0 === a2 || op < yJ ? op : yJ), 1 < (yI = (r - yJ) / (392 * pL)) ?
			1 : yI), yO(), yI !== yg))
	}, this.cU = function() {
		cV.drawImage(oo, gV, gW)
	}
}

function qE() {
	var o8, yh, cG, eH, tT, yi, yj, uz, oo, h0;

	function cT() {
		return Math.floor((gd - cG) / 2) < fk.eH + 2 * k1 ? cP - eH - 4 * k1 - fk.eH : cP - eH - 2 * k1
	}
	this.yk = -1, this.c5 = function() {
		o8 = !1, tT = .61, yi = .07, yj = .09, h0 = uz = eH = 0, this.yk = -1
	}, this.resize = function() {
		var hf, ga, eo, yo, yp, ry;
		o8 && (cG = vW(cG = o ? Math.floor(.69 * c6) : Math.floor(.5 * c6), sb(p - 2 * k1, 10)), cG = vW(cG, Math.floor(3.57 * sb(q - 2 * k1, 3))), eH = Math.floor(.28 * cG), (oo = document.createElement("canvas")).width = cG, oo.height = eH,
			hf = oo.getContext("2d", {
				alpha: !0
			}), ga = Math.floor(1 + eH / 40), hf.clearRect(0, 0, cG, eH), hf.fillStyle = cY.hl, hf.fillRect(ga, ga, cG - 2 * ga, eH - 2 * ga), hf.lineJoin = "bevel", hf.lineWidth = 2 * ga, hf.strokeStyle = cY.cZ, hf.strokeRect(ga, ga, cG -
				2 * ga, eH - 2 * ga), hf.imageSmoothingEnabled = !0, eo = cC.get(yh), yo = eo.width, yp = eo.height, ry = (21 === yh ? .666 : 1) * tT * eH / yp, hf.setTransform(ry, 0, 0, ry, Math.floor((cG - ry * yo) / 2), Math.floor((eH -
				ry * yp) / 2)), hf.drawImage(eo, 0, 0), hf.setTransform(1, 0, 0, 1, Math.floor(cG - yj * eH - yi * eH - ga), Math.floor(ga + yi * eH)),
			function(hf, bH) {
				hf.lineWidth = Math.floor(1 + eH / 80), hf.strokeStyle = cY.cZ, hf.beginPath(), hf.moveTo(0, 0), hf.lineTo(bH, bH), hf.moveTo(0, bH), hf.lineTo(bH, 0), hf.stroke()
			}(hf, Math.floor(yj * eH)), hf.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(aF, ym, yn) {
		o8 || (yh = yn ? 21 : aF ? 1 : 2, o8 = !0, this.resize(), ly.k8(), fk.vR(), h0 = aA.aB, -1 === this.yk && (this.yk = aA.en()), uz = ym ? 1 : 0)
	}, this.eY = function() {
		!o8 || 1 <= uz || (uz = 1 < (uz += 5e-4 * (aA.aB - h0)) ? 1 : uz, h0 = aA.aB, aA.cJ = !0)
	}, this.cL = function(gV, gW) {
		return !(!o8 || uz <= 0 || (gV -= Math.floor((gd - cG) / 2), gW -= cT(), gV < 0) || gW < 0 || cG < gV || eH < gW || (cG - eH / 3 < gV && gW < eH / 3 && (o8 = !1, aA.cJ = !0), 0))
	}, this.cU = function() {
		!o8 || uz <= 0 || (cV.globalAlpha = uz, cV.drawImage(oo, Math.floor((gd - cG) / 2), cT()), cV.globalAlpha = 1)
	}
}

function yr() {
	this.ys = !1, this.hc = !1, this.pF = !1, this.yt = [0, 0, 0, 0], this.yu = function() {
		var ga, gb, gc, ge;
		this.pF = this.pF || this.hc, (this.hc || this.ys && this.pF) && (ga = hR.yv[0], gb = hR.yv[1], gc = hR.yv[2], ge = hR.yv[3], ga = ga < this.yt[0] ? this.yt[0] : ga, gb = gb < this.yt[1] ? this.yt[1] : gb, gc = gc > this.yt[2] ? this.yt[
			2] : gc, ge = ge > this.yt[3] ? this.yt[3] : ge, this.hc = !1, this.ys = !1, ga === this.yt[0] && gb === this.yt[1] && gc === this.yt[2] && ge === this.yt[3] ? this.pG() : ga <= gc && gb <= ge && pc.putImageData(pd, 0, 0, ga,
			gb, gc - ga + 1, ge - gb + 1))
	}, this.pG = function() {
		this.pF && this.yt[2] >= this.yt[0] && this.yt[3] >= this.yt[1] && pc.putImageData(pd, 0, 0, this.yt[0], this.yt[1], this.yt[2] - this.yt[0] + 1, this.yt[3] - this.yt[1] + 1), this.pF = !1
	}, this.n5 = function() {
		this.yt[2] >= this.yt[0] && this.yt[3] >= this.yt[1] && pc.putImageData(pd, 0, 0, this.yt[0], this.yt[1], this.yt[2] - this.yt[0] + 1, this.yt[3] - this.yt[1] + 1), this.pF = !1
	}, this.c5 = function() {
		var gV, gW;
		this.ys = !1, this.hc = !1, this.pF = !1, this.yt[0] = an, this.yt[1] = ao, this.yt[2] = this.yt[3] = 0;
		loop: for (gV = 1; gV < an - 1; gV++)
			for (gW = ao - 2; 1 < gW; gW--)
				if (1 === yw[bJ.lU(gV, gW) + 2]) {
					this.yt[0] = gV;
					break loop
				} loop: for (gW = 1; gW < ao - 1; gW++)
			for (gV = an - 2; 1 < gV; gV--)
				if (1 === yw[bJ.lU(gV, gW) + 2]) {
					this.yt[1] = gW;
					break loop
				} loop: for (gV = an - 2; 0 < gV; gV--)
			for (gW = ao - 2; 1 < gW; gW--)
				if (1 === yw[bJ.lU(gV, gW) + 2]) {
					this.yt[2] = gV;
					break loop
				} loop: for (gW = ao - 2; 0 < gW; gW--)
			for (gV = an - 2; 1 < gV; gV--)
				if (1 === yw[bJ.lU(gV, gW) + 2]) {
					this.yt[3] = gW;
					break loop
				}
	}
}

function yx() {
	this.o8 = !1, this.sE = null, this.yy = 0, this.cG = null, this.eH = null, this.yz = .013, this.z0 = .022, this.z1 = .025;
	this.z3 = 3, this.z4 = 1.2, this.z5 = .2, this.z6 = .235, this.z7 = .9, this.z8 = .08;
	var zA, z9 = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"],
		zB = [-1e6, -1e6];
	this.position = [0, 0], this.zD = [0, 0], this.c5 = function() {
		this.sE = [null, null], this.o8 = !1, this.yy = 0
	}, this.cS = function(id) {
		this.o8 = !0, this.resize(), this.yy = id, this.cB(), oK.cS(!1), aA.cJ = !0
	}, this.eY = function() {
		this.o8 && this.cB()
	}, this.cB = function() {
		aA.aB - 12e4 >= zB[this.yy] && (zB[this.yy] = aA.aB, this.zD = [0, 0], fV.wo(0, 1 + this.yy)) && id.zE(0, this.yy)
	}, this.resize = function() {
		if (this.o8) {
			var a2;
			for (this.cG = this.zF(o ? .85 : .66, .75, p, q), this.eH = Math.floor(this.cG / .75), a2 = 1; 0 <= a2; a2--) this.sE[a2] && (this.sE[a2][4] = c9 + Math.floor(this.sE[a2][5] * this.eH / 10) + cA);
			zA = c9 + Math.floor(.1 * this.eH) + cA
		}
	}, this.zF = function(c3, tV, cG, eH) {
		return cG < tV * eH ? Math.floor(c3 * cG) : Math.floor(tV * c3 * eH)
	}, this.zG = function(c8, zH, zI, uh, zJ, zK, y1) {
		this.position[c8] = y1;
		for (var uw, dt = zH.length, cF = c9 + Math.floor(zJ * this.eH / 10) + cA, aR = (this.zL(zH, cF, zK * this.cG), [
				[], dt, -1, uh, cF, zJ, 10 * y1
			]), a2 = 0; a2 < dt; a2++) uw = {
			name: zH[a2].name,
			value: zH[a2].mE / zI,
			colorIndex: zH[a2].colorIndex
		}, aR[0].push(uw);
		this.sE[c8] = aR, this.zM(c8);
		zK = this.sE[c8][0][0].name;
		1 === c8 && (zK = "[" + zK + "]"), 0 === y1 && zN.c7(c8, zK), aA.cJ = !0
	}, this.zM = function(a2) {
		this.sE[a2][0].sort(function(dx, e8) {
			return e8.value - dx.value
		})
	}, this.zO = function(c8, name, zP, zQ) {
		if (this.sE && this.sE[c8]) {
			var a2, t7 = !1;
			if (0 === c8) {
				for (a2 = 0; a2 < this.sE[c8][0].length; a2++)
					if (name === this.sE[c8][0][a2].name && zP > .99 * this.sE[c8][0][a2].value && zP < 1.01 * this.sE[c8][0][a2].value) {
						this.sE[c8][0][a2].value = zQ, t7 = !0;
						break
					} t7 || this.sE[c8][0].push({
					name: name,
					value: zQ
				})
			} else {
				for (a2 = 0; a2 < this.sE[c8][0].length; a2++)
					if (name === this.sE[c8][0][a2].name) {
						this.sE[c8][0][a2].value += 32 < this.sE[c8][0][a2].value ? (64 - this.sE[c8][0][a2].value) / 256 : .25, this.sE[c8][0][a2].value *= 1 / (383 / 384), t7 = !0;
						break
					} for (a2 = 0; a2 < this.sE[c8][0].length; a2++) this.sE[c8][0][a2].value *= 383 / 384;
				t7 || this.sE[c8][0].push({
					name: name,
					value: .25
				})
			}
			this.zM(c8)
		}
	}, this.zL = function(zH, cF, cI) {
		for (var a2 = zH.length - 1; 0 <= a2; a2--)
			for (; 3 < zH[a2].name.length && cH.measureText(zH[a2].name, cF) > cI;) zH[a2].name = zH[a2].name.substring(0, zH[a2].name.length - 4) + "..."
	}, this.cL = function(d4, d5) {
		return !!this.o8 && (d4 -= (gd - this.cG) / 2, d5 -= (cP - this.eH) / 2, d4 < 0 || d4 > this.cG || d5 < 0 || d5 > this.eH ? (this.o8 = !1, 0 === aH.oM() && oK.cS(!0), aA.cJ = !0) : (d5 = d5 < .3 * this.eH ? 1 : d5 < .85 * this.eH ? (d5 =
			(0 === this.yy ? 14.1 : 3) * (d5 - .3 * this.eH) / (.55 * this.eH), Math.floor(1 + d5 * d5)) : 0 === this.yy ? 200 : 10, d4 < this.cG / 2 ? this.zD[this.yy] = -d5 : this.zD[this.yy] = d5, zB[this.yy] + 50 > aA.aB || (zB[
			this.yy] = aA.aB, fV.wo(0, 1 + this.yy) && id.zE(0, this.yy)), !0))
	}, this.cU = function() {
		var ga, gb, m6, m7, zR, zS, or, os;
		this.o8 && (ga = (gd - this.cG) / 2, gb = (cP - this.eH) / 2, m6 = this.yz * this.cG, m7 = this.z3 * m6, zR = this.z0 * this.cG, zS = this.z4 * zR, or = this.z1 * this.cG, os = Math.floor(.25 * this.eH), cV.setTransform(1, 0, 0, 1, ga,
				gb), cV.fillStyle = 0 === this.yy ? cY.iF : cY.iD, cV.fillRect(0, 0, this.cG, os), cV.fillStyle = cY.hk, cV.fillRect(0, os, this.cG, this.eH - os), cV.fillStyle = cY.cZ, cV.font = zA, cV.textBaseline = cW, cV.textAlign = cX,
			cV.fillText(z9[this.yy], Math.floor(this.cG / 2), Math.floor(.135 * this.eH)), cV.font = c9 + Math.floor(.025 * this.eH) + cA, cV.fillText(z9[this.yy + 2], Math.floor(this.cG / 2), Math.floor(.2125 * this.eH)), cV.beginPath(), cV
			.moveTo(this.cG / 4, 0), cV.lineTo(this.cG / 2 - m6, 0), cV.lineTo(this.cG / 2, -m7), cV.lineTo(this.cG / 2 + m6, 0), cV.lineTo(this.cG - zR, 0), cV.lineTo(this.cG + zS, -zS), cV.lineTo(this.cG, zR), cV.lineTo(this.cG, this.eH /
				2 - m6), cV.lineTo(this.cG + m7, this.eH / 2), cV.lineTo(this.cG, this.eH / 2 + m6), cV.lineTo(this.cG, this.eH - zR), cV.lineTo(this.cG + zS, this.eH + zS), cV.lineTo(this.cG - zR, this.eH), cV.lineTo(this.cG / 2 + m6, this
				.eH), cV.lineTo(this.cG / 2, this.eH + m7), cV.lineTo(this.cG / 2 - m6, this.eH), cV.lineTo(zR, this.eH), cV.lineTo(-zS, this.eH + zS), cV.lineTo(0, this.eH - zR), cV.lineTo(0, this.eH / 2 + m6), cV.lineTo(-m7, this.eH / 2),
			cV.lineTo(0, this.eH / 2 - m6), cV.lineTo(0, zR), cV.lineTo(-zS, -zS), cV.lineTo(zR, 0), cV.lineTo(this.cG / 4, 0), cV.lineTo(this.cG / 4, or), cV.lineTo(or, or), cV.lineTo(or, this.eH - or), cV.lineTo(this.cG - or, this.eH - or),
			cV.lineTo(this.cG - or, or), cV.lineTo(this.cG / 4, or), cV.fill(), this.sE[this.yy] && this.zT(os), this.zU(os), cV.setTransform(1, 0, 0, 1, 0, 0))
	}, this.zU = function(os) {
		var m6 = sb(2, Math.floor(.06 * this.cG)),
			tT = (m6 -= m6 % 2, sb(2, Math.floor(.01 * this.cG))),
			os = (tT -= tT % 2, Math.floor(.82 * os));
		cV.fillRect(m6, os, m6, tT), cV.fillRect(this.cG - m6 - m6, os, m6, tT), cV.fillRect(Math.floor(this.cG - m6 - m6 + (m6 - tT) / 2), Math.floor(os - (m6 - tT) / 2), tT, m6)
	}, this.zT = function(os) {
		var gW;
		cV.font = this.sE[this.yy][4];
		for (var a2 = this.sE[this.yy][1] - 1; 0 <= a2; a2--) cV.textAlign = uF, gW = Math.floor(this.z8 * this.eH + os + a2 * ((1 - 2 * this.z8) * this.eH - os) / 9), cV.fillText(this.sE[this.yy][0][a2].value.toFixed(this.sE[this.yy][3]), Math
			.floor(this.z7 * this.cG), gW), cV.fillText(a2 + 1 + this.sE[this.yy][6] + ".", Math.floor(this.z5 * this.cG), gW), cV.textAlign = sk, cV.fillText(this.sE[this.yy][0][a2].name, Math.floor(this.z6 * this.cG), gW)
	}
}

function zV() {
	var gV, gW, eH, zW, zX, zY, zZ, za, zb, cG, zc, zd;
	this.o8 = !1, this.c5 = function(j, ze) {
		if (13 <= d && d < 18) return ze ? void(zc = j) : zc !== j ? void 0 : void e.saveString(200, j);
		ze && ((cQ.sE[1].mu.o8 || cQ.sE[2].mu.o8) && cQ.oN(), oK.cS(!1), zc = j, (zd = document.createElement("a")).appendChild(document.createTextNode(zc)), this.o8 = !0, zd.title = zc, zd.target = "_blank", zd.href = zc, zd.style.textAlign =
			"center", zd.style.color = cY.cZ, zd.style.position = "absolute", zd.style.padding = "0px", zd.style.margin = "0px", this.resize(), document.body.appendChild(zd), aA.cJ = !0)
	}, this.k8 = function() {
		return !(!this.o8 || (document.body.removeChild(zd), this.o8 = !1))
	}, this.cL = function(d4, d5) {
		return !!this.o8 && ((d4 < gV || d5 < gW || gV + cG < d4 || gW + eH < d5 || gV + cG - zW < d4 && d5 < gW + zW) && (aA.cJ = !0, this.o8 = !1, document.body.removeChild(zd), 0 === aH.oM()) && oK.cS(!0), !0)
	}, this.resize = function() {
		var cF, zf;
		this.o8 && (za = Math.floor(.8 * (o ? q < p ? .6 : .55 : .4) * c6), zW = Math.floor(.15 * za), zX = Math.floor(.35 * zW), zY = Math.floor(.5 * zW), zZ = Math.floor(2.5 * zY), eH = zW + zX + 3 * zY, cF = c9 + Math.floor(zX / kB) + cA, zb =
			Math.floor(kB * cH.measureText(zc, cF)), zf = cG = (za < zb ? zb : za) + 2 * zZ, cG = Math.min(cG, p - 2 * (o ? 2 : 1) * k1), cF = c9 + Math.floor(cG / zf * zX / kB) + cA, zb = Math.floor(kB * cH.measureText(zc, cF)), gV = Math
			.floor((gd - cG) / 2), gW = Math.floor((cP - eH) / 2), zd.style.font = cF, zd.style.top = Math.floor((gW + 1.4 * zY + zW) / kB) + "px", zd.style.left = Math.floor((gV + (cG - zb) / 2) / kB) + "px")
	}, this.cU = function() {
		this.o8 && (cV.fillStyle = cY.hl, cV.fillRect(gV, gW + zW, cG, eH - zW), cV.fillStyle = cY.iR, cV.fillRect(gV, gW, cG, zW), cV.fillStyle = cY.cZ, cV.lineWidth = ot, cV.strokeStyle = cY.cZ, cV.strokeRect(gV, gW, cG, eH), cV.fillRect(gV,
			gW + zW, cG, ot), cV.font = c9 + Math.floor(.48 * zW) + cA, cV.textAlign = cX, cV.textBaseline = cW, cV.fillText("You are leaving Territorial.io!", Math.floor(gV + (cG - .5 * zW) / 2), Math.floor(gW + .55 * zW)), lx.sC(Math
			.floor(gV + cG - .8 * zW), Math.floor(gW + .25 * zW), Math.floor(.5 * zW)), cV.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function zg() {
	var lZ, ru, gV = [0, 0, 0, 0, 0],
		gW = [0, 0, 0, 0, 0],
		hN = [1, 1, 1, 1, 1],
		aF = [!0, !0, !0, !0, !0],
		eo = (this.aW = [!0, !0, !0, !0, !0], null);
	this.zh = function(rG, zi) {
		eo = rG, aF = zi, ru = [py.zj, py.zk, py.zl, py.zm, py.zn], this.c5()
	}, this.c5 = function() {
		if (cC.cD()) {
			var a2, m6 = Math.floor((o ? .261 : .195) * c6),
				m7 = Math.floor(.9 * m6),
				tT = Math.floor(.17 * m7);
			if (lZ = o ? 2 * k1 : k1, hN[0] = m6 / eo[0].width, hN[1] = m7 / eo[1].width, hN[2] = tT / eo[2].height, hN[3] = tT / eo[3].height, hN[4] = tT / eo[4].height, hN[3] *= 1.07, gV[0] = lZ, gV[1] = lZ, gV[2] = lZ, gV[3] = lZ, gV[4] = Math
				.floor(2 * lZ + hN[3] * eo[3].width), gW[0] = lZ, gW[1] = gW[0] + lZ + hN[0] * eo[0].height, gW[2] = gW[1] + lZ + hN[1] * eo[1].height, gW[3] = gW[2] + lZ + hN[2] * eo[2].height, gW[4] = gW[3], !aF[0])
				for (a2 = 0; a2 < 5; a2++) gW[a2] -= hN[0] * eo[0].height + lZ;
			if (!aF[1])
				for (a2 = 2; a2 < 5; a2++) gW[a2] -= hN[1] * eo[1].height + lZ
		}
	}, this.o8 = function() {
		return !(7 === aH.oM() && o)
	}, this.cL = function(d4, d5, ze) {
		if (eo && this.o8())
			for (var a2 = aF.length - 1; 0 <= a2; a2--)
				if (aF[a2] && this.aW[a2] && gV[a2] < d4 && gW[a2] < d5 && d4 < gV[a2] + hN[a2] * eo[a2].width && d5 < gW[a2] + hN[a2] * eo[a2].height) return oJ.c5(ru[a2], ze), !0;
		return !1
	}, this.cU = function() {
		if (eo && this.o8()) {
			var a2;
			for (cV.imageSmoothingEnabled = !0, a2 = 0; a2 < 5; a2++) aF[a2] && this.aW[a2] && (cV.setTransform(hN[a2], 0, 0, hN[a2], gV[a2], gW[a2]), cV.drawImage(eo[a2], 0, 0));
			cV.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function qv() {
	this.id = 0, this.te = 0;
	var zo = null,
		zp = !1;
	this.c5 = function() {
		var rr, aS, aU;
		e ? this.id = 1 : b ? this.id = 2 : (function() {
			try {
				if (!(zo = window.localStorage)) return zo = null;
				zo.setItem("testLS", "1"), zo.removeItem("testLS")
			} catch (error) {
				return zo = null
			}
			zp = !0
		}(), rr = this, zp && (aS = Number(zo.getItem("zt0")), aU = Number(zo.getItem("zt1")), aS && aU ? (rr.id = aS, rr.te = Math.floor(Date.now() / 3e5) - aU) : (zo.setItem("zt0", "" + Math.floor(3 + Math.random() * (Math.pow(2, 20) -
			3))), zo.setItem("zt1", "" + Math.floor(Date.now() / 3e5)))))
	}
}

function qF() {
	var yy, zu, zv;

	function a00(a2) {
		var button = pl.r4[a2],
			gV = button.gV,
			gW = button.gW,
			cG = button.cG,
			eH = button.eH;
		cV.fillStyle = button.zy, cV.fillRect(gV, gW, cG, eH), a2 === yy && (cV.fillStyle = zv, cV.fillRect(gV, gW, cG, eH)), cV.lineWidth = ot, cV.strokeStyle = zu, cV.strokeRect(gV, gW, cG, eH),
			function(button) {
				var gV = button.gV,
					gW = button.gW,
					cG = button.cG,
					eH = button.eH;
				cV.textAlign = cX, cV.textBaseline = cW, cV.font = button.font, cV.fillStyle = zu, cV.fillText(button.ta, Math.floor(gV + cG / 2), Math.floor(gW + eH / 2 + .1 * button.cE))
			}(button)
	}
	this.cG = 0, this.eH = 0, this.gW = 0, this.lZ = 0, this.c5 = function() {
		yy = -1, zu = cY.cZ, zv = "rgba(255,255,255,0.16)", this.r4 = new Array(7), this.eH = Math.floor((o ? .123 : .093) * c6), this.cG = Math.floor((o ? 3.96 : 4.2) * this.eH), this.lZ = Math.floor(.025 * this.cG);
		var zw = Math.floor(.26 * this.eH),
			zx = c9 + zw + cA;
		this.r4[0] = {
			gV: 0,
			gW: 0,
			cG: Math.floor(.6 * this.cG - this.lZ / 2),
			eH: this.eH,
			ta: "Multiplayer",
			font: zx,
			zy: "rgba(22,88,22,0.8)",
			cE: zw
		}, zw = Math.floor(.18 * this.eH), this.r4[1] = {
			gV: 0,
			gW: 0,
			cG: this.cG - this.r4[0].cG - this.lZ,
			eH: this.eH,
			ta: "Single Player",
			font: c9 + zw + cA,
			zy: "rgba(22,88,88,0.8)",
			cE: zw
		}, this.r4[2] = {
			gV: 0,
			gW: 0,
			cG: this.cG,
			eH: Math.floor(.3 * this.eH),
			ta: "",
			font: this.r4[1].font,
			zy: "rgba(100,0,0,0.8)",
			cE: this.r4[1].cE
		}, this.r4[3] = {
			gV: 0,
			gW: 0,
			cG: this.cG,
			eH: this.eH,
			ta: "Back",
			font: this.r4[0].font,
			zy: "rgba(0,0,0,0.8)",
			cE: this.r4[0].cE
		}, this.r4[4] = {
			gV: 0,
			gW: 0,
			cG: this.cG,
			eH: Math.floor(.3 * this.eH),
			ta: "The game was updated!",
			font: this.r4[1].font,
			zy: "rgba(100,0,0,0.8)",
			cE: this.r4[1].cE
		}, this.r4[5] = {
			gV: 0,
			gW: 0,
			cG: this.r4[0].cG,
			eH: Math.floor(.8 * this.eH),
			ta: "Reload",
			font: this.r4[0].font,
			zy: "rgba(0,100,0,0.8)",
			cE: this.r4[0].cE
		}, this.r4[6] = {
			gV: 0,
			gW: 0,
			cG: this.r4[1].cG,
			eH: this.r4[5].eH,
			ta: "Back",
			font: this.r4[0].font,
			zy: "rgba(0,0,0,0.8)",
			cE: this.r4[0].cE
		}, this.ww()
	}, this.ww = function() {
		this.gW = Math.floor(.54 * cP), this.r4[0].gV = Math.floor(.5 * gd - .5 * this.cG), this.r4[1].gV = this.r4[0].gV + this.r4[0].cG + this.lZ, this.r4[2].gV = this.r4[3].gV = this.r4[0].gV, this.r4[4].gV = this.r4[5].gV = this.r4[0].gV,
			this.r4[6].gV = this.r4[1].gV, this.r4[0].gW = Math.floor(.54 * cP), this.r4[1].gW = this.r4[0].gW, this.r4[2].gW = Math.floor((cP - this.r4[2].eH - this.r4[3].eH - this.lZ) / 2), this.r4[3].gW = this.r4[2].gW + this.r4[2].eH + this
			.lZ, this.r4[4].gW = Math.floor((cP - this.r4[4].eH - this.r4[5].eH - this.lZ) / 2), this.r4[5].gW = this.r4[6].gW = this.r4[4].gW + this.r4[4].eH + this.lZ
	}, this.zz = function() {
		a00(0), a00(1)
	}, this.a01 = function() {
		a00(2), a00(3)
	}, this.a02 = function() {
		a00(4), a00(5), a00(6)
	}, this.nf = function(gV, gW, fx) {
		var a2 = -1;
		return 0 === aH.oM() ? a2 = this.oI(gV, gW, 0, 2) : 3 === aH.oM() ? a2 = this.oI(gV, gW, 3, 1) : 5 === aH.oM() && (a2 = this.oI(gV, gW, 5, 2)), yy !== a2 && (yy = a2, fx) && (aA.cJ = !0), -1 !== a2 && (oA.oB(), !0)
	}, this.oI = function(gV, gW, a03, dt) {
		for (var a2 = a03; a2 < a03 + dt; a2++)
			if (gV >= this.r4[a2].gV && gW >= this.r4[a2].gW && gV <= this.r4[a2].gV + this.r4[a2].cG && gW <= this.r4[a2].gW + this.r4[a2].eH) return a2;
		return -1
	}
}

function a05() {
	function a0B(rJ) {
		return rJ < 0 ? 0 : 255 < rJ ? 255 : Math.floor(rJ)
	}
	this.cG = 0, this.eH = 0, this.o8 = !1, this.a06 = 0, this.lZ = 0, this.tv = 0, this.zW = 0, this.a07 = 0, this.a08 = 0, this.a09 = 0, this.colors = null, this.c5 = function() {
		this.o8 = !0, this.a06 = 0, this.resize()
	}, this.resize = function() {
		this.o8 && (p < 1.4 * q ? this.cG = Math.floor((o ? .94 : .43) * p) : (this.eH = Math.floor((o ? .88 : .43) * q), this.cG = Math.floor(1.4 * this.eH)), this.eH = this.cG / 1.4, this.lZ = this.cG / 32, this.zW = Math.floor(.25 * this.eH),
			this.a07 = (this.eH - this.zW - 3 * this.lZ) / 2, this.a08 = this.cG - 3 * this.lZ - this.a07, this.a09 = (this.eH - this.zW - 4 * this.lZ) / 3)
	}, this.a0A = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var j = t().split("");
		if (j.length < 6)
			for (var e8 = 2; 0 <= e8; e8--) this.colors[0][e8] = a0B(256 * Math.random());
		else
			for (var a2 = 2; 0 <= a2; a2--) this.colors[0][a2] = a0B(4 * (10 * parseInt(j[2 * a2]) + parseInt(j[2 * a2 + 1])));
		this.a0C()
	}, this.a0D = function() {
		return [b6(this.colors[0][0], 4), b6(this.colors[0][1], 4), b6(this.colors[0][2], 4)]
	}, this.ni = function(cM, cN, deltaY) {
		var ga = (gd - this.cG) / 2;
		cN -= (cP - this.eH) / 2 + this.zW, (cM -= ga) < 0 || cN < 0 || cM >= this.cG || cN >= this.eH - this.zW || (ga = Math.floor(3 * cN / (this.eH - this.zW)), this.colors[this.tv][ga] = a0B(this.colors[this.tv][ga] + (deltaY < 0 ? 1 : -1) *
			Math.max(Math.abs(.05 * deltaY), 1)), aA.cJ = !0)
	}, this.cL = function(cM, cN) {
		this.a06 = 0;
		var ga = (gd - this.cG) / 2;
		return cN -= (cP - this.eH) / 2, (cM -= ga) < 0 || cN < 0 || cM >= this.cG - 1 || cN >= this.eH - 1 || cM > this.cG - (.4 * this.zW + 3 * this.lZ) && cN < this.zW ? (this.o8 = !1, 0 === aH.oM() && oK.cS(!0), !(aA.cJ = !0)) : cM < this
			.lZ || cN < this.lZ + this.zW || cM >= this.cG || cN >= this.eH - this.lZ || (cM < this.lZ + this.a07 ? (cN < this.lZ + this.zW + this.a07 && 0 !== this.tv && (this.tv = 0, aA.cJ = !0), !0) : cM < this.lZ + this.a07 || (cM -= 2 * this
				.lZ + this.a07, cN < this.lZ + this.zW + this.a09 ? (this.a06 = 1, this.colors[this.tv][0] = a0B(256 * cM / this.a08), aA.cJ = !0) : cN < 2 * this.lZ + this.zW + this.a09 || (cN < 2 * this.lZ + this.zW + 2 * this.a09 ? (this
					.a06 = 2, this.colors[this.tv][1] = a0B(256 * cM / this.a08), aA.cJ = !0) : !(cN >= 3 * this.lZ + this.zW + 2 * this.a09) || (this.a06 = 3, this.colors[this.tv][2] = a0B(256 * cM / this.a08), aA.cJ = !0))))
	}, this.a0C = function() {
		for (var e8 = 2; 0 <= e8; e8--) this.colors[0][e8] = a0B(this.colors[0][e8])
	}, this.a0E = function() {
		for (var aF, j = "", a2 = 0; a2 < 3; a2++)(aF = b6(this.colors[0][a2], 4)) < 10 && (j += "0"), j += aF.toString();
		return j
	}, this.nf = function(cM) {
		0 !== this.a06 && (cM -= 2 * this.lZ + this.a07 + (gd - this.cG) / 2, this.colors[this.tv][this.a06 - 1] = a0B(256 * cM / this.a08), aA.cJ = !0)
	}, this.a0F = function() {
		0 < this.a06 && (this.a06 = 0, this.a0C(), gj.a0G(), aA.cJ = !0)
	}, this.cU = function() {
		var ga = (gd - this.cG) / 2,
			gb = (cP - this.eH) / 2;
		cV.setTransform(1, 0, 0, 1, ga, gb), cV.fillStyle = cY.hl, cV.fillRect(0, this.zW, this.cG, this.eH - this.zW), cV.fillStyle = cY.hu, cV.fillRect(0, 0, this.cG, this.zW), cV.fillStyle = cY.cZ, cV.lineWidth = ot, cV.strokeStyle = cY.cZ, cV
			.strokeRect(-1, -1, this.cG + 2, this.eH + 2), cV.fillRect(0, this.zW, this.cG, ot), cV.font = c9 + Math.floor(.31 * this.zW) + cA, cV.textBaseline = cW, cV.textAlign = cX, cV.fillText("Choose Your Nation's Color!", Math.floor((this
				.cG - this.lZ - .4 * this.zW) / 2), Math.floor(.55 * this.zW)), this.a0H(0), cV.lineWidth = ot, this.a0I(0), this.a0I(1), this.a0I(2), lx.sC(Math.floor(ga + this.cG - .4 * this.zW - this.lZ), Math.floor(gb + .3 * this.zW), Math
				.floor(.4 * this.zW)), cV.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a0H = function(a2) {
		var mg = this.colors[a2][0],
			op = this.colors[a2][1],
			a2 = this.colors[a2][2];
		cV.fillStyle = "rgb(" + mg + "," + op + "," + a2 + ")", cV.fillRect(this.lZ, this.zW + this.lZ, this.a07, 2 * this.a07 + this.lZ), cV.lineWidth = ot, cV.strokeStyle = cY.cZ, cV.strokeRect(this.lZ, this.zW + this.lZ, this.a07, 2 * this
			.a07 + this.lZ), cV.fillStyle = mg + op + a2 < 306 && op < 150 ? cY.cZ : cY.gh, cV.font = c9 + Math.floor(.32 * this.a09) + cA, cV.textAlign = cX, cV.textBaseline = cW, cV.rotate(-Math.PI / 2), cV.fillText("National Color", Math
			.floor(-1.5 * this.lZ - this.zW - this.a07), Math.floor(this.lZ + .5 * this.a07)), cV.rotate(Math.PI / 2)
	}, this.a0I = function(a2) {
		cV.fillStyle = "rgb(" + (0 === a2 ? 150 : 2 === a2 ? 30 : 0) + "," + (1 === a2 ? 130 : 2 === a2 ? 30 : 0) + "," + (2 === a2 ? 220 : 0) + ")", cV.fillRect(2 * this.lZ + this.a07, this.zW + this.lZ + a2 * (this.lZ + this.a09), Math.floor(
				this.colors[this.tv][a2] * this.a08 / 255), this.a09), cV.strokeStyle = cY.cZ, cV.strokeRect(2 * this.lZ + this.a07, this.zW + this.lZ + a2 * (this.lZ + this.a09), this.a08, this.a09), cV.fillStyle = cY.cZ, cV.font = c9 + Math
			.floor(.32 * this.a09) + cA, cV.textBaseline = cW, cV.textAlign = sk, cV.fillText((0 === a2 ? "Red: " : 1 === a2 ? "Green: " : "Blue: ") + this.colors[0][a2].toString(), 3 * this.lZ + this.a07, Math.floor(this.zW + this.lZ + a2 * (
				this.lZ + this.a09) + .53 * this.a09))
	}
}

function qG() {
	var a0J, a0K, uR, uc, vZ, a0L, a0M, a0N, a0O, cF, cE, h0, a0P, a0R, a0Q = 0;

	function a0U() {
		return fV.a0V[(a0P + a0Q) % fV.a0W]
	}

	function a0S() {
		a0P++, h0 = aA.aB, fV.wo(a0U(), 4) && (a0R = !0, id.a0X(a0U()))
	}

	function a0a() {
		0 === a0P ? pn.a0c(3249) : (a0P === fV.a0W - 1 && (a0P = -1), a0S())
	}

	function a0j(gW, wZ, a0i) {
		var ga = Math.floor((gd - uc) / 2) + a0M,
			gc = ga + Math.floor(a0i * (uc - 2 * a0M));
		cV.lineWidth = wZ, cV.beginPath(), cV.moveTo(ga, gW), cV.lineTo(gc, gW), cV.lineTo(Math.floor(ga - a0M + a0i * uc), gW + uR), cV.lineTo(ga - a0M, gW + uR), cV.closePath()
	}
	this.c5 = function() {
		aH.setState(6), a0J = 0, a0K = 1, a0N = "rgba(0,220,120,0.4)", a0O = "rgba(0,0,0,0.8)", this.resize(), aA.cJ = !0, a0P = 0, a0R = !1, a0S()
	}, this.resize = function() {
		uc = Math.floor((o ? .5 : .25) * c6), vZ = uc + 12, uR = Math.floor(.125 * uc), a0M = 3 * uR, a0L = Math.floor(.225 * uc), cE = Math.floor(.3 * uR), cF = uH + cE + cA
	}, this.a0T = function(dx) {
		a0Q = dx
	}, this.a0Y = function(a0Z) {
		a0Z === a0U() && (a0R = !1, a0a())
	}, this.wq = function(a0Z) {
		6 !== aH.oM() || a0R || (h0 = aA.aB, a0R = !0, id.a0X(a0Z))
	}, this.cL = function(gV, gW) {
		var ga = Math.floor((gd - vZ) / 2),
			gb = Math.floor(.5 * (cP - cO - uR - a0L)) + uR + cO;
		return ga < gV && gV < ga + vZ && gb < gW && gW < gb + a0L && (this.a0d(), pl.nf(gV, gW, !1), !0)
	}, this.a0d = function() {
		fV.a0e(3260), pj.c5(), aA.cJ = !0
	}, this.eY = function() {
		6 === aH.oM() && (a0R ? aA.aB > h0 + 12e3 && pn.a0c(3250) : aA.aB > h0 + 12e3 && a0a(), 100 < (a0J += .07 * a0K * (a0J < 16 ? 5 + a0J : 84 < a0J ? 105 - a0J : 17)) ? (a0J = 100, a0K = -1) : a0J < 0 && (a0J = 0, a0K = 1), a0N = "rgba(0," +
			Math.floor(190 - 1.9 * a0J) + "," + Math.floor(120 - 1.2 * a0J) + "," + (.4 + .004 * a0J) + ")", a0O = "rgba(0," + Math.floor(1.9 * a0J) + "," + Math.floor(1.2 * a0J) + "," + (.8 - .004 * a0J) + ")", aA.cJ = !0)
	}, this.cU = function() {
		var gV = Math.floor((gd - vZ) / 2),
			gW = Math.floor(.5 * (cP - cO - uR - a0L));
		! function(title, gW, wZ, a0i) {
			cV.fillStyle = a0O, a0j(gW, wZ, 1), cV.fill(), cV.fillStyle = a0N, a0j(gW, wZ, a0i), cV.fill(), cV.strokeStyle = cY.cZ, a0j(gW, wZ, 1), cV.stroke(),
				function(a0l, gW) {
					cV.textAlign = cX, cV.textBaseline = cW, cV.font = cF, cV.fillStyle = cY.cZ, cV.fillText(a0l, Math.floor(.5 * gd), Math.floor(gW + .58 * uR))
				}(title, gW)
		}("Loading", gW, 3, a0J / 100),
		function(gV, gW, cG, eH, ta) {
			cV.fillStyle = cY.hj, cV.fillRect(gV, gW, cG, eH), cV.lineWidth = 3, cV.strokeStyle = cY.cZ, cV.strokeRect(gV, gW, cG, eH);
			var bH = Math.floor(.3 * eH);
			cV.textAlign = cX, cV.textBaseline = cW, cV.font = uH + bH + cA, cV.fillStyle = cY.cZ, cV.fillText(ta, Math.floor(gV + cG / 2), Math.floor(gW + eH / 2 + .1 * bH))
		}(gV, gW + uR + cO, vZ, a0L, "Back")
	}
}

function qH() {
	var a8;
	this.c5 = function() {
		pl.c5(), oK.c5(), a8 = 0, a0m.c5(), pj.c5()
	}, this.setState = function(a0n) {
		a8 = a0n
	}, this.oM = function() {
		return a8
	}, this.a0o = function() {
		0 === aH.oM() && pj.a0p(), this.setState(8), ps.a0p(), cQ.oN(), cR.o8 = !1, oJ.cL(-1e3, -1e3)
	}, this.oN = function(nR) {
		if (!kk) return !1;
		if (!(aA.aB < 400)) {
			if ("Enter" === nR.key || "Escape" === nR.key) {
				if (this.a0q()) return 0 === a8 && oK.cS(!0), !0;
				if ("Enter" === nR.key) {
					if (0 === a8) return pj.a0r(), !0;
					if (7 === a8) return !0
				}
			}
			return !1
		}
	}, this.a0s = function() {
		return k7.o8 || cR.o8 || oJ.o8 || cQ.a0t()
	}, this.a0u = function() {
		cR.resize(), k7.resize(), oJ.resize(), cQ.resize()
	}, this.a0q = function() {
		return !!oJ.k8() || !(!cQ.oN() && (cR.o8 ? cR.o8 = !1 : !k7.o8 || (k7.k8(), 0)))
	}, this.aI = function() {
		aA.cJ = !0, 8 === a8 ? hD ? ft.oP(!1) : lz.o8 ? lz.oR() : k7.o8 ? k7.k8() : lx.oR() : 7 === a8 ? ps.a0v() : 6 === a8 ? pm.a0d() : 3 === a8 ? pn.a0w(0, 0) : 2 === a8 ? fI.a0w() : 0 !== a8 || this.a0q() || a7(11)
	}, this.cL = function(gV, gW) {
		if (!a0m.cL(gV, gW) && kk && !oJ.cL(gV, gW) && !k7.cL(gV, gW) && !(6 === a8 && pm.cL(gV, gW) || 2 === a8 && fI.cL(gV, gW) || gj.cL(gV, gW) || cR.cL(gV, gW) || a0x.cL(gV, gW, !0) || cQ.cL(gV, gW, !0))) {
			if (oA.cL(gV, gW), 0 === a8) pj.cL(gV, gW);
			else if (3 === a8) pn.cL(gV, gW);
			else if (5 === a8) po.cL(gV, gW);
			else if (7 === a8 && ps.cL(gV, gW)) return;
			zN.cL(gV, gW)
		}
	}, this.nf = function(gV, gW) {
		if (gj.nf(gV, gW), !oA.wm) {
			if (a0m.nf(gV, gW)) return void oA.oB();
			if (0 <= cQ.oI(gV, gW)) return void oA.oB();
			if (cQ.nf(gV, gW)) return void oA.oB();
			if (2 === a8 && fI.nf(gV, gW)) return void oA.oB();
			if (pl.nf(gV, gW, !0)) return
		}
		oA.nf(gV, gW)
	}, this.click = function(gV, gW) {
		oA.oC(), cQ.a0F() || a0x.cL(gV, gW, !1) || cQ.cL(gV, gW, !1)
	}, this.ni = function(gV, gW, deltaY) {
		cQ.sE[1].mu.o8 || (cQ.sE[2].mu.o8 ? cQ.sE[2].mu.ni(gV, gW, deltaY) : 0 === a8 && oA.ni(gV, deltaY))
	}, this.a0y = function() {
		pl.ww(), cQ.ww(), 0 === a8 ? (oK.resize(), oA.ww()) : 7 === a8 && ps.resize(), aA.cJ = !0
	}, this.cU = function() {
		var gW, oo, tV, gV;
		8 !== a8 && 10 !== a8 && (cV.imageSmoothingEnabled = !0, this.lu(), oA.cU(), pk.cU(), gW = Math.floor(.3 * cP), oo = cC.rH("territorial.io"), tV = (tV = 1.75 * cP / oo.width) * oo.width < .98 * gd ? .98 * gd / oo.width : tV, cV
			.globalAlpha = .15, gV = Math.floor(.5 * (gd - tV * oo.width)), gV = Math.floor(gV / tV), gW = Math.floor(gW - .5 * oo.height * tV), gW = Math.floor(gW / tV), cV.setTransform(tV, 0, 0, tV, gV, gW), cV.drawImage(oo, gV, gW), cV
			.setTransform(1, 0, 0, 1, 0, 0), cV.globalAlpha = 1, a0x.cU(), zN.cU(), cQ.cU(), gj.cU(), 0 === a8 ? pj.cU() : 2 === a8 ? fI.cU() : 3 === a8 ? pn.cU() : 5 === a8 ? po.cU() : 6 === a8 ? pm.cU() : 7 === a8 && ps.cU(), cQ.a10(), a0m
			.cU(), cR.cU(), oJ.cU(), k7.cU())
	}, this.lu = function() {
		var a12, a11;
		kk ? (a11 = p / an, a12 = q / ao, cV.setTransform(a11 = a12 < a11 ? a11 : a12, 0, 0, a11, Math.floor((p - a11 * an) / 2), Math.floor((q - a11 * ao) / 2)), cV.drawImage(km, 0, 0), cV.setTransform(1, 0, 0, 1, 0, 0), cV.fillStyle = cY.hj) :
			cV.fillStyle = cY.gh, cV.fillRect(0, 0, p, q)
	}
}

function a13() {
	this.cG = 0, this.eH = 0, this.a14 = 0, this.o8 = !1, this.tk = 10, this.bP = .12, this.a06 = !1, this.a15 = !1, this.a16 = !1, this.c5 = function() {
		this.o8 = !0, this.resize(), this.a06 = !1
	}, this.resize = function() {
		this.o8 && (this.cG = 1.15 * p < q ? Math.floor((o ? .94 : .69) * p) : Math.floor((o ? .94 : .69) * q / 1.15), this.cG -= this.cG % this.tk, this.eH = +this.cG, this.a14 = Math.floor(.15 * this.cG))
	}, this.cL = function(cM, cN, a8) {
		var ga = (gd - this.cG) / 2;
		return cN -= (cP - this.eH - this.a14) / 2, (cM -= ga) < 0 || cN < 0 || cM >= this.cG - 1 || cN >= this.eH + this.a14 - 1 || cM >= this.cG - this.a14 && cN < this.a14 ? (0 === a8 && (this.o8 = !1, 0 === aH.oM() && oK.cS(!0), aA.cJ = !0),
			!1) : (cN < this.a14 || (cM = (cM = b6(cM, ga = Math.floor(this.cG / this.tk)) + this.tk * b6(cN - this.a14, ga)) < 0 ? 0 : cM >= a3.to ? a3.to - 1 : cM, (0 === a8 || 1 === a8 && !a3.a5[cM] || 2 === a8 && a3.a5[cM]) && (this
			.a15 = !a3.a5[cM], this.a06 = !0, this.a16 = !0, a3.a5[cM] = !a3.a5[cM], a3.u5(), aA.cJ = !0)), !0)
	}, this.nf = function(cM, cN) {
		this.a06 && this.cL(cM, cN, this.a15 ? 1 : 2)
	}, this.a0F = function() {
		this.a16 && (a1(), this.a16 = !1), this.a16 = !1, this.a06 = !1
	}, this.cU = function() {
		cV.imageSmoothingEnabled = !0;
		for (var ga = (gd - this.cG) / 2, gb = (cP - this.eH - this.a14) / 2, m6 = (cV.setTransform(1, 0, 0, 1, ga, gb), cV.fillStyle = cY.hl, cV.fillRect(0, this.a14, this.cG, this.eH), cV.fillStyle = cY.hy, cV.fillRect(0, 0, this.cG, this.a14),
					cV.fillStyle = cY.cZ, cV.lineWidth = ot, cV.strokeStyle = cY.cZ, cV.strokeRect(-1, -1, this.cG + 2, this.eH + this.a14 + 2), cV.fillRect(0, this.a14 - ot, this.cG, ot), cV.font = c9 + Math.floor(.44 * this.a14) + cA, cV
					.textAlign = cX, cV.textBaseline = cW, cV.fillText("Select Your Emojis!", Math.floor((this.cG - .725 * this.a14) / 2), Math.floor(.55 * this.a14)), Math.floor(this.cG / this.tk)), zoom = (m6 - 2 * this.bP * m6) / a3.cG, a2 =
				a3.to - 1; 0 <= a2; a2--) cV.setTransform(1, 0, 0, 1, Math.floor(ga + a2 % this.tk * m6), Math.floor(gb + this.a14 + b6(a2, this.tk) * m6)), a3.a5[a2] && (cV.fillStyle = cY.i0, cV.fillRect(0, 0, m6, m6)), cV.setTransform(zoom, 0,
			0, zoom, Math.floor(ga + a2 % this.tk * m6 + this.bP * m6), Math.floor(gb + this.a14 + b6(a2, this.tk) * m6 + this.bP * m6)), cV.drawImage(a3.rG[a2], 0, 0);
		lx.sC(Math.floor(ga + this.cG - .725 * this.a14), Math.floor(gb + .275 * this.a14), Math.floor(.45 * this.a14)), cV.setTransform(1, 0, 0, 1, 0, 0), cV.imageSmoothingEnabled = !1
	}
}

function qI() {
	var a17, aR, a18;

	function tz() {
		var a8;
		0 === (a8 = aH.oM()) ? pj.a0p() : 6 === a8 ? fV.a0e(a17) : 7 === a8 ? (ps.a0p(), fV.close(fV.a19, 3240)) : 8 === a8 && (pg(!0), pj.a0p()), aH.setState(3), pl.ww(), a1C(a17), aA.cJ = !0
	}

	function a1A(nR) {
		for (var a2 = aR.length - 1; 0 <= a2; a2--)
			if (nR === aR[a2].code) return aR[a2].j;
		return a18 + nR
	}

	function a1C(nR) {
		pl.r4[2].ta = a1A(nR)
	}
	this.kS = function() {
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
		}), a18 = "Error "
	}, this.c5 = function(a0Z, nR) {
		a17 = nR;
		var a8 = aH.oM();
		if (6 === a8) {
			if (4211 === nR) return void po.c5(0, 0);
			if (4214 !== nR) return void pm.a0Y(a0Z)
		} else {
			if (7 !== a8) return 8 === a8 ? void(a0Z !== fV.nx || fH || fR.sp(a1A(nR))) : void 0;
			if (a0Z !== fV.a19) return
		}
		tz()
	}, this.a0c = function(nR) {
		a17 = nR, 8 === aH.oM() ? fR.sp(a1A(nR)) : tz()
	}, this.resize = function() {
		a1C(a17)
	}, this.cL = function(gV, gW) {
		3 === pl.oI(gV, gW, 3, 1) && this.a0w(gV, gW)
	}, this.a0w = function(gV, gW) {
		pj.c5(), pl.nf(gV, gW, !1), aA.cJ = !0
	}, this.cU = function() {
		pl.a01()
	}
}

function qJ() {
	var input, color;
	this.o8 = !1, this.k6 = !1, this.c5 = function() {
		color = cY.hl, (input = document.createElement("INPUT")).setAttribute("type", "text"), input.setAttribute("name", "username"), input.setAttribute("id", "usernameField"), input.setAttribute("autocomplete", "username"), input.value = "",
			input.style.textAlign = "center", input.style.backgroundColor = color, input.style.borderRadius = "0", input.style.color = cY.cZ, input.style.position = "absolute", input.readOnly = !1, input.addEventListener("input", function() {
				pj.a1D()
			}), input.addEventListener("focus", function() {
				oK.k6 = !0
			}), input.addEventListener("blur", function() {
				oK.k6 = !1
			})
	}, this.resize = function() {
		var cE, or, os;
		this.o8 && (or = .3 * (cE = .22 * pl.eH / kB), os = ot / kB, input.style.border = os.toFixed(2) + "px solid " + cY.cZ, input.style.font = c9 + cE + cA, input.style.padding = or.toFixed(2) + "px", input.style.left = (((gd - pl.cG) / kB -
			os) / 2).toFixed(2) + "px", input.style.width = (pl.cG / kB - 2 * or - os).toFixed(2) + "px", input.style.top = ((pl.gW - .52 * pl.eH) / kB).toFixed(2) + "px")
	}, this.get = function() {
		return input
	}, this.cS = function(cS) {
		this.o8 !== cS && ((this.o8 = cS) ? (this.resize(), document.body.appendChild(input)) : (this.k6 = !1, document.body.removeChild(input)))
	}, this.oT = function(a1E) {
		a1E && color === cY.hl || !a1E && color === cY.iA || (color = a1E ? cY.hl : cY.iA, input.style.backgroundColor = color)
	}
}

function ql() {
	var jT, a1H, a1I, a1J;
	this.a1F = 0, this.a1G = 0, this.c5 = function(bP) {
		var hN;
		7 === aH.oM() && (jT = bP, a1H = 0, a1I = aA.aB + 4500, a1J = pr.a1K(jT) ? 2 : 0, aH.setState(10), cV.imageSmoothingEnabled = !0, aH.lu(), bP = cC.rH("loading"), hN = 1, hN = (o ? .396 : .25) * c6 / bP.width, cV.setTransform(hN, 0, 0, hN,
			Math.floor((p - hN * bP.width) / 2), Math.floor((q - hN * bP.height) / 2)), cV.drawImage(bP, 0, 0), cV.setTransform(1, 0, 0, 1, 0, 0))
	}, this.fv = function() {
		0 < a1J && aA.aB > a1I && (a1J--, a1I += 4500, 0 === aA.a1M) && 0 === aA.en() && (0 === a1J && fV.nx < fV.a1N && (fV.nx += fV.a1O), fV.wo(fV.nx, 5))
	}, this.a1P = function() {
		10 === aH.oM() && 2 <= ++a1H && (pr.a1Q(jT), jT = null)
	}
}

function qi() {
	var a1S, a1T, a1U, a1V, a1W, a1X, a1Y, a1a, a1b, a1d, a1e, a1f, a1i, a1j, a1k, a1l, a1m, a1Z = 48,
		a1g = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
		a1h = [0, 0, 0, 0];

	function a1p(a2, rG) {
		var a2 = a1Y[a2].getContext("2d", {
				alpha: !0
			}),
			zoom = (a2.clearRect(0, 0, a1Z, a1Z), a1Z / rG.width),
			r = a1Z / rG.height,
			zoom = r < zoom ? r : zoom;
		a2.imageSmoothingEnabled = !0, a2.setTransform(zoom, 0, 0, zoom, Math.floor((a1Z - zoom * rG.width) / 2), Math.floor((a1Z - zoom * rG.height) / 2)), a2.drawImage(rG, 0, 0), a2.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a1t(eo, mg, a1w, ou) {
		ou.beginPath(), ou.moveTo(eo, eo), ou.lineTo(eo + Math.cos(a1w) * mg, eo + Math.cos(a1w + 1.5 * Math.PI) * mg), ou.stroke()
	}

	function a2A() {
		if (7 === aH.oM()) {
			for (var ck, rG, ou, zoom, r, dx = -1, a2 = a1a.length - 1; 0 <= a2; a2--)
				if (null === a1a[a2].oo) {
					dx = a2;
					break
				} - 1 !== dx && (null !== (ck = a20(a1a[dx].a24, a1a[dx].a25)) ? a1a[dx].oo = ck : (ck = {
					an: an,
					ao: ao,
					km: km,
					ki: ki,
					kj: kj,
					kn: kn,
					lA: lA,
					a21: a21
				}, a2B(a1a[dx].a24, a1a[dx].a25), kl.a2C(), (rG = document.createElement("canvas")).width = 128, rG.height = 128, ou = rG.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / an) < (r = 128 / ao) && (zoom = r), ou.imageSmoothingEnabled = !0, ou.setTransform(zoom, 0, 0, zoom, (128 - zoom * an) / 2, (128 - zoom * ao) / 2), ou.drawImage(km, 0, 0), an = ck.an, ao = ck.ao, km = ck.km,
				ki = ck.ki, kj = ck.kj, kn = ck.kn, lA = ck.lA, a21 = ck.a21, a1a[dx].oo = rG), aA.cJ = !0)
		}
	}

	function a20(a24, a25) {
		for (var a2 = a1a.length - 1; 0 <= a2; a2--)
			if (null !== a1a[a2].oo && a1a[a2].a24 === a24 && a1a[a2].a25 === a25) return a1a[a2].oo;
		return null
	}
	this.c5 = function() {
		var a2;
		for (a1m = 0, a1d = -1, aH.setState(7), a1a = [], this.resize(), a1Y = new Array(13), a2 = a1Y.length; 0 <= a2; a2--) a1Y[a2] = document.createElement("canvas"), a1Y[a2].width = a1Z, a1Y[a2].height = a1Z;
		for (a2 = 0; a2 < 7; a2++) ! function(t6) {
			var a1r, ou = a1Y[t6 - 2].getContext("2d", {
					alpha: !0
				}),
				a1q = 1.5 * Math.PI,
				eo = Math.floor(.5 * a1Z),
				mg = Math.floor(.48 * a1Z);
			ou.lineWidth = 2, ou.strokeStyle = cY.cZ, ou.clearRect(0, 0, a1Z, a1Z);
			for (var a2 = 0; a2 < t6; a2++) a1r = a1q + 2 * Math.PI / t6,
				function(a2, eo, mg, a1q, a1r, ou) {
					ou.fillStyle = ep.a1v[a2], ou.beginPath(), ou.arc(eo, eo, mg, a1q, a1r), ou.lineTo(eo, eo), ou.fill()
				}(a2 + 1, eo, mg, a1q, a1r, ou), 0 !== a2 && a1t(eo, mg, a1q, ou), a1q = a1r;
			a1t(eo, mg, 1.5 * Math.PI, ou),
				function(eo, mg, ou) {
					ou.beginPath(), ou.arc(eo, eo, mg, 0, 2 * Math.PI), ou.stroke()
				}(eo, mg, ou)
		}(a2 + 2);
		a1p(7, cC.get(4)), a1p(8, a3.rG[27]), a1p(9, a3.rG[46]), a1p(10, a3.rG[36]), a1p(11, cC.get(19)), a1p(12, cC.get(20)), aA.cJ = !0
	}, this.a0v = function() {
		this.a0p(), fV.a0e(3240), pj.c5(), aA.cJ = !0
	}, this.a0p = function() {
		a1a = [], a1Y = []
	}, this.ti = function() {
		return a1f
	}, this.resize = function() {
		var a1x, kX, vo, a1y;
		for (a1U = [0, 0], a1b = [0, 0, 0, 0], a1l = o ? (a1e = Math.floor(.8 * .4 * c6), a1f = Math.floor(.56 * a1e), a1b[0] = cO, p < q ? (a1b[1] = a1f + 2 * cO, a1b[2] = p - 3 * a1b[0], a1b[3] = zN.cT() - 3 * cO - a1f, a1j = Math.floor(.95 *
				a1f), a1k = Math.floor((p - a1e - cO) / 2), Math.floor(cO + a1f / 2)) : (a1b[1] = cO, a1b[2] = p - 3 * cO - a1e, a1b[3] = zN.cT() - 2 * cO, a1j = Math.floor(.8 * a1e), a1b[3] - a1f < a1e && (a1j = Math.floor(.8 * (a1b[3] -
				a1f)), a1j = sb(a1f, a1j)), a1k = Math.floor(p - a1e / 2 - cO), sb(a1l = Math.floor(cO + a1f + (a1b[3] - a1f) / 2), Math.floor(a1f + 2 * cO + a1j / 2)))) : (a1e = Math.floor(.2016 * c6), a1f = Math.floor(.56 * a1e), a1b[2] = Math
				.floor(.5 * p), a1b[3] = Math.floor(.5 * q), a1b[1] = Math.floor(.45 * (q - a1b[3])), a1b[0] = Math.floor((p - a1b[2]) / 2), a1j = Math.floor(.75 * a1f), a1k = Math.floor(p / 2), Math.floor(a1b[1] + a1b[3] + (q - a1b[3] - a1b[
					1]) / 2)), a1i = c9 + Math.floor(.65 * a1f / 4) + cA, a1x = kX = 1; a1x * kX < a1a.length;) a1b[3] / (kX + 1) < a1b[2] / (a1x + 1) ? a1x++ : kX++;
		a1S = (vo = (a1b[2] - (a1x - 1) * cO) / a1x) < (a1y = (a1b[3] - (kX - 1) * cO) / kX) ? vo : a1y, a1T = Math.floor(a1S), a1X = c9 + Math.floor(.5 * a1S / 5) + cA, a1U[0] = a1x, a1U[1] = kX, a1V = a1b[0] + Math.floor((a1b[2] - a1U[0] *
			a1S - (a1U[0] - 1) * cO) / 2), a1W = a1b[1] + Math.floor((a1b[3] - a1U[1] * a1S - (a1U[1] - 1) * cO) / 2)
	}, this.zO = function(a1z, bP) {
		var a2, r, oo, bH = a1a.length;
		for (a1h = a1z, a2 = 0; a2 < bP.length; a2++) oo = a20(bP[a2].lA, bP[a2].a21), a1a.push({
			a22: bP[a2].id,
			pP: bP[a2].pP,
			pQ: bP[a2].a23,
			a24: bP[a2].lA,
			a25: bP[a2].a21,
			joined: bP[a2].a26,
			tf: bP[a2].a0i,
			a27: bP[a2].a27,
			oo: oo,
			a28: bP[a2].a28,
			nG: bP[a2].nG
		});
		for (a2 = bH - 1; 0 <= a2; a2--) a1a.shift();
		if (-1 !== a1d)
			for (r = a1d, a1d = -1, a2 = a1a.length - 1; 0 <= a2; a2--)
				if (a1a[a2].a22 === r) {
					a1d = r;
					break
				}(a1a.length > a1m || a1a.length < a1m) && (a1m = a1a.length, this.resize()), this.a29(), aA.cJ = !0
	}, this.a29 = function() {
		for (var a2 = a1a.length - 1; 0 <= a2; a2--) null === a1a[a2].oo && setTimeout(a2A, 0)
	}, this.cL = function(gV, gW) {
		return 4 * ((gV - a1k) * (gV - a1k) + (gW - a1l) * (gW - a1l)) <= a1j * a1j ? (this.a0v(), pl.nf(gV, gW, !1), !0) : function(gV, gW) {
			var dx, e8, ga, gb;
			if (0 !== a1a.length) {
				var a2 = 0;
				for (gb = a1W, e8 = 0; e8 < a1U[1]; e8++) {
					for (ga = a1V, dx = 0; dx < a1U[0]; dx++) {
						if (ga < gV && gV < ga + a1S && gb < gW && gW < gb + a1S) return id.a2E(a1a[a2].a22), a1d = a1a[a2].a22 !== a1d ? a1a[a2].a22 : -1, aA.cJ = !0;
						if (++a2 >= a1a.length) return !1;
						ga += a1S + cO
					}
					gb += a1S + cO
				}
			}
			return !1
		}(gV, gW)
	}, this.cU = function() {
		var dx, e8, gV, mg, zoom, a2 = 0,
			gW = a1W;
		if (cV.imageSmoothingEnabled = !0, cV.lineWidth = 3, mg = Math.floor(.5 * a1j), cV.fillStyle = cY.hj, cV.beginPath(), cV.arc(a1k, a1l, mg, 0, 2 * Math.PI), cV.fill(), cV.strokeStyle = cY.cZ, cV.beginPath(), cV.arc(a1k, a1l, mg, 0, 2 *
				Math.PI), cV.stroke(), mg = cC.get(0).height, zoom = .6 * a1j / mg, cV.setTransform(zoom, 0, 0, zoom, Math.floor(a1k - .56 * zoom * cC.get(0).width), Math.floor(a1l - .5 * zoom * mg)), cV.drawImage(cC.get(0), 0, 0), cV
			.setTransform(1, 0, 0, 1, 0, 0),
			function() {
				cV.fillStyle = cY.hj, cV.fillRect(p - a1e - cO, cO, a1e, a1f), 0 <= a1d ? (cV.fillStyle = cY.i0, cV.fillRect(p - a1e - cO, cO, a1e, Math.floor(.25 * a1f))) : (cV.fillStyle = cY.iM, cV.fillRect(p - a1e - cO, cO + Math.floor(.25 *
					a1f), a1e, Math.floor(.25 * a1f)));
				cV.strokeStyle = cY.cZ, cV.strokeRect(p - a1e - cO, cO, a1e, a1f), cV.fillStyle = cY.cZ, cV.font = a1i, cV.textBaseline = cW;
				for (var gW, or = Math.floor(.04 * a1e), os = Math.floor(.08 * a1f), a2 = 3; 0 <= a2; a2--) gW = Math.floor(cO + (a2 + 1) * (a1f + 2 * os) / 5 - os), cV.textAlign = sk, cV.fillText(a1g[a2], p - a1e - cO + or, gW), cV.textAlign =
					uF, cV.fillText(fi.gm(a1h[a2]), p - cO - or, gW)
			}(), 0 !== a1a.length)
			for (e8 = 0; e8 < a1U[1]; e8++) {
				for (gV = a1V, dx = 0; dx < a1U[0]; dx++) {
					if (! function(a2, gV, gW) {
							var zoom, e8, a2I, a2K, a2L;
							null === a1a[a2].oo ? (cV.fillStyle = cY.hj, cV.fillRect(gV, gW, a1T, a1T)) : (zoom = a1T / 128, cV.setTransform(zoom, 0, 0, zoom, gV, gW), cV.drawImage(a1a[a2].oo, 0, 0), cV.setTransform(1, 0, 0, 1, 0, 0));
							a1d === a1a[a2].a22 ? (function(gV, gW) {
								var m6 = Math.floor(.2 * a1T),
									m7 = Math.floor(.3 * m6);
								cV.fillStyle = cY.i3, cV.fillRect(gV + a1T - m6, gW, m6, m6), cV.fillStyle = cY.gh, cV.fillRect(gV + a1T - m6, gW, 2, m6), cV.fillRect(gV + a1T - m6, gW + m6 - 2, m6, 2), lx.sC(gV + a1T - m6 + m7, gW + m7,
									m6 - 2 * m7), cV.setTransform(1, 0, 0, 1, 0, 0)
							}(gV, gW), cV.lineWidth = 3, cV.fillStyle = cY.i3) : cV.fillStyle = cY.hh;
							if (a2K = Math.floor(a1S / 4), cV.fillRect(gV, gW, a2K, a2K), a2L = Math.floor(gW + .8 * a1S), cV.fillRect(gV, a2L, a1T, Math.floor(a1S / 5)), function(a2, gV, gW) {
									var zoom;
									a1a[a2].pQ && (a2 = cC.get(4), zoom = .5 * a1S / a2.width, cV.setTransform(zoom, 0, 0, zoom, Math.floor(gV + (a1S - zoom * a2.width) / 2), Math.floor(gW + (a1S - zoom * a2.height) / 2)), cV.globalAlpha = .6, cV
										.drawImage(a2, 0, 0), cV.globalAlpha = 1, cV.setTransform(1, 0, 0, 1, 0, 0))
								}(a2, gV, gW), a1a[a2].a28) {
								for (e8 = a2I = 0; e8 < a1a[a2].a28; e8++) a2I = Math.max(a2I, cH.measureText(a1a[a2].nG[e8], a1X));
								a2I += .05 * a1S, e8 = 5 === a1a[a2].a28, a2K = e8 ? gW + a2K : Math.max(gW + .8 * a1S - .11 * a1a[a2].a28 * a1S, gW + a2K), a2L = e8 ? a2L : Math.min(a2K + .11 * a1a[a2].a28 * a1S + .05 * a1S, a2L), cV.fillRect(
									gV, a2K, a2I, a2L - a2K)
							}
							for (cV.font = a1X, cV.textBaseline = cW, cV.textAlign = sk, cV.fillStyle = cY.iI, cV.fillText(a1a[a2].joined.toString(), Math.floor(gV + .22 * a1S), Math.floor(gW + .9 * a1S)), cV.fillStyle = cY.cZ, e8 = 0; e8 < a1a[
									a2].a28; e8++) cV.fillText(a1a[a2].nG[a1a[a2].a28 - e8 - 1], Math.floor(gV + .03 * a1S), Math.floor(gW + .77 * a1S - .11 * e8 * a1S));
							cV.textAlign = uF, cV.fillStyle = cY.i6, cV.fillText(a1a[a2].tf.toString(), Math.floor(gV + .81 * a1S), Math.floor(gW + .9 * a1S)), cV.strokeStyle = a1d === a1a[a2].a22 ? cY.i1 : cY.ho, cV.strokeRect(gV, gW, a1T, a1T),
								a2L = Math.floor(.16 * a1S), zoom = a2L / a1Z, cV.setTransform(zoom, 0, 0, zoom, Math.floor(gV + .33 * a2L), Math.floor(gW + .33 * a2L)), a1Y.length > a1a[a2].pP && cV.drawImage(a1Y[a1a[a2].pP], 0, 0);
							cV.setTransform(zoom, 0, 0, zoom, Math.floor(gV + .15 * a2L), Math.floor(gW + a1S - 1.08 * a2L)), cV.drawImage(a1Y[11], 0, 0), cV.setTransform(zoom, 0, 0, zoom, Math.floor(gV + a1S - 1.05 * a2L), Math.floor(gW + a1S -
								1.15 * a2L)), cV.drawImage(a1Y[12], 0, 0), cV.setTransform(1, 0, 0, 1, 0, 0)
						}(a2, Math.floor(gV), Math.floor(gW)), ++a2 >= a1a.length) return;
					gV += a1S + cO
				}
				gW += a1S + cO
			}
	}
}

function qK() {
	this.c5 = function(gV, gW) {
		aH.setState(5), pl.nf(gV, gW, !1), aA.cJ = !0
	}, this.cU = function() {
		pl.a02()
	}, this.cL = function(gV, gW) {
		var a2 = pl.oI(gV, gW, 5, 2);
		5 === a2 ? aD() : 6 === a2 && (pj.c5(), pl.nf(gV, gW, !1), aA.cJ = !0)
	}
}

function qL() {
	var a2O = [0, 0, 0, 0];

	function zU(gV, gW, m4, a2h) {
		cV.fillStyle = cY.cZ;
		var m6 = sb(2, Math.floor((a2h ? .5 : .35) * m4)),
			tT = (m6 -= m6 % 2, sb(2, Math.floor(.1 * m4))),
			m4 = (tT -= tT % 2, Math.floor((m4 - m6) / 2)),
			gc = Math.floor(m4 + (m6 - tT) / 2);
		cV.fillRect(gV + m4, gW + gc, m6, tT), a2h && cV.fillRect(gV + gc, gW + m4, tT, m6)
	}

	function a0h(gV, gW, cG, eH, rJ, c3, ta, dq, t6) {
		cV.fillStyle = rJ, cV.fillRect(gV, gW, cG, eH), 0 <= dq && function(gV, gW, cG, eH, dq) {
			cV.fillStyle = "rgba(" + 22 * dq + "," + (110 - 22 * dq) + ",0,0.75)", cV.fillRect(gV, gW, (1 + dq) * cG / 6, eH)
		}(gV, gW, cG, eH, dq), 0 < t6 && function(gV, gW, cG, eH, t6) {
			cV.fillStyle = "rgba(255,255,255,0.3)", cV.fillRect(gV, gW, t6 * cG / bM, eH)
		}(gV, gW, cG, eH, t6), cV.strokeStyle = cY.cZ, cV.strokeRect(gV, gW, cG, eH), 0 !== c3 && (cV.fillStyle = cY.cZ, cV.font = c9 + Math.floor(c3 * eH) + cA, cV.fillText(ta, Math.floor(gV + cG / 2), Math.floor(gW + .52 * eH)))
	}
	this.fJ = [{
		bR: 0,
		t6: 512
	}], this.c5 = function() {
		pt.o8 = !1, aH.setState(2), this.resize(), aA.cJ = !0
	}, this.a0p = function() {}, this.resize = function() {
		a2O[2] = Math.floor((o ? .49 : .4) * c6), a2O[1] = Math.floor((q - a2O[2] / 6 - this.fJ.length * (cO + a2O[2] / 10)) / 2), a2O[0] = Math.floor((p - a2O[2]) / 2), pt.o8 && pt.resize()
	}, this.a2P = function(pP) {
		var a2;
		if (6 < pP) this.fJ = [{
			bR: 0,
			t6: 512
		}];
		else {
			for (this.fJ = [], a2 = 0; a2 < pP + 2; a2++) this.fJ.push({
				bR: 0,
				t6: 0
			});
			this.a2Q()
		}
	}, this.a2R = function(a2S, a2T) {
		for (var bH = a2S.length, a2 = 0; a2 < bH; a2++) this.fJ[a2].bR = a2S[a2], this.fJ[a2].t6 = a2T[a2]
	}, this.a2U = function(op) {
		var a2, bH;
		if (1 === op.mA.length)
			for (bH = this.fJ.length, op.a2S = new Array(bH), op.a2T = new Array(bH), a2 = 0; a2 < bH; a2++) op.a2S[a2] = this.fJ[a2].bR, op.a2T[a2] = this.fJ[a2].t6
	}, this.a0w = function() {
		aA.cJ = !0, pt.o8 ? pt.o8 = !1 : (this.a0p(), pj.c5())
	}, this.pT = function() {
		var a2, t6;
		if (fB.fC) return fB.fD.a2V;
		for (t6 = 0, a2 = this.fJ.length - 1; 0 <= a2; a2--) t6 += this.fJ[a2].t6;
		return t6
	}, this.nf = function(gV, gW) {
		return !(!pt.o8 || !pt.nf(gV, gW)) || -1 !== this.oI(gV, gW)
	}, this.a2W = function() {
		fV.nx = 0, fV.wo(0, 3) && id.a2X(0)
	}, this.a2Y = function() {
		var dx;
		this.a2W(), aH.a0o(), fB.fC ? fB.a2Z() : (dx = (dx = this.fJ.length - 2) < 0 ? 7 : dx, pM(Math.floor(16384 * Math.random()), 0, [{
			name: pj.a2a(),
			a2b: cQ.sE[2].mu.a0D(),
			a2c: 0
		}], dx, !1, !1))
	}, this.cL = function(gV, gW) {
		if (cR.o8 || cQ.sE[1].mu.o8 || cQ.sE[2].mu.o8) return !1;
		if (pt.o8 && !fB.fC) return pt.cL(gV, gW);
		var a2, dx, max, m6, gW = this.oI(gV, gW);
		if (-1 === gW) return !1;
		if (0 === gW) this.a0w();
		else if (1 === gW) fB.fC ? (fB.oB(), aA.cJ = !0) : pt.show();
		else if (100 === gW) oG.a2d();
		else if (2 === gW) this.a0p(), this.a2Y();
		else {
			if (fB.fC) return !1;
			if (27 === gW) this.fJ.length < 8 && (this.fJ.push({
				bR: 0,
				t6: bM
			}), this.a2Q(), this.resize(), aA.cJ = !0);
			else if (a2 = Math.floor((gW - 3) / 3), gW % 3 == 0) 1 < this.fJ.length && (this.fJ.splice(a2, 1), this.resize(), aA.cJ = !0);
			else if (m6 = (a2O[2] - a2O[2] / 10 - 2 * cO) / 2, gW % 3 == 1) 0 === a2 && 1 === this.fJ[a2].t6 || (gV < a2O[0] + a2O[2] - 1.5 * m6 - cO ? this.fJ[a2].bR-- : this.fJ[a2].bR++, this.fJ[a2].bR < 0 ? this.fJ[a2].bR = 5 : 5 < this.fJ[a2]
				.bR && (this.fJ[a2].bR = 0), aA.cJ = !0);
			else {
				for (aA.cJ = !0, gW = (gV - (a2O[0] + a2O[2] - m6)) / m6 - .5, gW *= gW < 0 ? -gW : gW, gW = 0 === (gW = Math.floor(gW * bM)) ? 1 : gW, max = bM, dx = this.fJ.length - 1; 0 <= dx; dx--) a2 !== dx && (max -= this.fJ[dx].t6);
				if (gW < 0) {
					if (1 === this.fJ[a2].t6) return this.fJ[a2].t6 = max, !0
				} else if (this.fJ[a2].t6 === max) return this.fJ[a2].t6 = 1, !0;
				this.fJ[a2].t6 += gW, this.fJ[a2].t6 < 1 ? this.fJ[a2].t6 = 1 : this.fJ[a2].t6 > max && (this.fJ[a2].t6 = max)
			}
		}
		return !0
	}, this.a2Q = function() {
		for (var t6 = Math.floor(bM / this.fJ.length), a2e = bM % this.fJ.length, a2 = this.fJ.length - 1; 0 <= a2; a2--) this.fJ[a2].t6 = t6;
		this.fJ[0].t6 += a2e
	}, this.oI = function(gV, gW) {
		var m6 = (a2O[2] - 3 * cO) / 4,
			tT = a2O[2] / 6;
		if (gV < a2O[0] || gW < a2O[1] || a2O[0] + a2O[2] <= gV) return -1;
		if (gW < a2O[1] + tT) return gV < a2O[0] + m6 ? 0 : gV < a2O[0] + m6 + cO ? -1 : gV < a2O[0] + 2 * m6 + cO ? 100 : gV < a2O[0] + 2 * (m6 + cO) ? -1 : gV < a2O[0] + 3 * m6 + 2 * cO ? 1 : gV < a2O[0] + 3 * (m6 + cO) ? -1 : 2;
		for (var gb, tU = a2O[2] / 10, m6 = (a2O[2] - tU - 2 * cO) / 2, a2 = 0; a2 < this.fJ.length; a2++) {
			if (gW < (gb = a2O[1] + tT + cO + a2 * (tU + cO))) return -1;
			if (!(gb + tU < gW)) return gV < a2O[0] + tU ? 3 + 3 * a2 : gV < a2O[0] + tU + cO ? -1 : gV < a2O[0] + a2O[2] - m6 - cO ? 4 + 3 * a2 : gV < a2O[0] + a2O[2] - m6 ? -1 : 5 + 3 * a2
		}
		return !(this.fJ.length < 8) || gW < (gb = a2O[1] + tT + cO + this.fJ.length * (tU + cO)) || gb + tU < gW || a2O[0] + tU < gV ? -1 : 27
	}, this.cU = function() {
		cV.lineWidth = ot, cV.textAlign = cX, cV.textBaseline = cW;
		var m6 = (a2O[2] - 3 * cO) / 4,
			tT = a2O[2] / 6;
		if (a0h(a2O[0], a2O[1], m6, tT, "rgba(128,0,0,0.75)", .34, "Back", -1, -1), a0h(a2O[0] + m6 + cO, a2O[1], m6, tT, "rgba(128,0,128,0.75)", .31, "Custom", -1, -1), a0h(a2O[0] + 2 * (m6 + cO), a2O[1], m6, tT, "rgba(" + (fB.fC ? 128 : 0) +
				",128,128,0.75)", .34, fB.fC ? "Reset" : "Maps", -1, -1), a0h(a2O[0] + a2O[2] - m6, a2O[1], m6, tT, "rgba(0,128,0,0.75)", .34, "Start", -1, -1), !fB.fC) {
			for (var gb, tU = a2O[2] / 10, m6 = (a2O[2] - tU - 2 * cO) / 2, a2 = 0; a2 < this.fJ.length; a2++) gb = a2O[1] + tT + cO + a2 * (tU + cO), a0h(a2O[0], gb, tU, tU, 1 < this.fJ.length ? "rgba(128,0,0,0.75)" : "rgba(90,90,90,0.75)", 0,
				null, -1), 1 < this.fJ.length && zU(a2O[0], gb, tU, !1), a0h(a2O[0] + tU + cO, gb, m6, tU, cY.hl, .4, this.a2f(a2), this.fJ[a2].bR, -1), a0h(a2O[0] + a2O[2] - m6, gb, m6, tU, cY.hl, .4, this.a2g(a2), -1, this.fJ[a2].t6);
			this.fJ.length < 8 && (gb = a2O[1] + tT + cO + this.fJ.length * (tU + cO), a0h(a2O[0], gb, tU, tU, "rgba(0,128,20,0.75)", 0, null, -1, -1), zU(a2O[0], gb, tU, !0)), pt.o8 && pt.cU()
		}
	}, this.a2f = function(a2) {
		return 0 === a2 && 1 === this.fJ[a2].t6 ? "You" : eZ.f6[this.fJ[a2].bR]
	}, this.a2g = function(a2) {
		return 1 === this.fJ[a2].t6 ? "1 Player" : this.fJ[a2].t6 + " Players"
	}
}

function uN() {
	this.bH = 0, this.cG = 0, this.sE = null, this.c5 = function() {
		this.sE = [], this.sE.push({
			gV: 0,
			gW: 0,
			rE: o,
			mu: null
		}), this.sE.push({
			gV: 0,
			gW: 0,
			rE: !1,
			mu: new a13
		}), this.sE.push({
			gV: 0,
			gW: 0,
			rE: !1,
			mu: new a05
		}), this.sE[2].mu.a0A(), this.bH = this.sE.length, this.cG = 0
	}, this.ww = function() {
		this.cG = Math.floor((o ? .063 : .04) * c6), this.cG += 4 - this.cG % 4, this.sE[0].gV = cO, this.sE[0].gW = cP - this.cG - cO;
		for (var a2 = 1; a2 < this.bH; a2++) this.sE[a2].gV = this.sE[a2 - 1].gV + Math.floor(o ? 1.5 * cO : 3.7 * cO) + this.cG, this.sE[a2].gW = this.sE[0].gW
	}, this.oI = function(cM, cN) {
		if (cC.cD())
			for (var a2 = this.bH - 1; 0 <= a2; a2--)
				if (cM >= this.sE[a2].gV && cN >= this.sE[a2].gW && cM < this.sE[a2].gV + this.cG && cN < this.sE[a2].gW + this.cG) return a2;
		return -1
	}, this.a0t = function() {
		for (var a2 = 2; 1 <= a2; a2--)
			if (this.sE[a2].mu.o8) return !0;
		return !1
	}, this.resize = function() {
		for (var a2 = 2; 1 <= a2; a2--) this.sE[a2].mu.resize()
	}, this.oN = function() {
		return this.sE[1].mu.o8 ? (this.sE[1].mu.cL(-5e3, -5e3, 0), !0) : !!this.sE[2].mu.o8 && (this.sE[2].mu.cL(-5e3, -5e3), !0)
	}, this.cL = function(cM, cN, ze) {
		if (ze) {
			if (this.sE[1].mu.o8) return this.sE[1].mu.cL(cM, cN, 0), !0;
			if (this.sE[2].mu.o8) return this.sE[2].mu.cL(cM, cN), !0
		}
		cM = this.oI(cM, cN);
		if (ze) {
			if (0 === cM) return this.sE[cM].rE = !this.sE[cM].rE, o = this.sE[cM].rE, oa.a2k(0), z(this.sE[0].rE, !1), !0;
			if (1 <= cM && cM < 3) return this.sE[cM].mu.c5(), oK.cS(!1), aA.cJ = !0
		}
		return !1
	}, this.nf = function(cM, cN) {
		return this.sE[1].mu.o8 ? (this.sE[1].mu.nf(cM, cN), !0) : !!this.sE[2].mu.o8 && (this.sE[2].mu.nf(cM), !0)
	}, this.a0F = function() {
		for (var a2 = 2; 1 <= a2; a2--)
			if (this.sE[a2].mu.o8) return this.sE[a2].mu.a0F(), !0;
		return !1
	}, this.cU = function() {
		if (cC.cD()) {
			cV.imageSmoothingEnabled = !0;
			for (var a2 = this.bH - 1; 0 <= a2; a2--) cV.fillStyle = this.sE[a2].rE ? cY.i2 : cY.hl, cV.fillRect(this.sE[a2].gV, this.sE[a2].gW, this.cG, this.cG), 0 === a2 ? this.a2l(a2, cC.get(15)) : 1 === a2 ? this.a2m() : 2 === a2 && this
				.a2n(), cV.setTransform(1, 0, 0, 1, 0, 0), cV.lineWidth = ot, cV.strokeStyle = cY.cZ, cV.strokeRect(this.sE[a2].gV, this.sE[a2].gW, this.cG, this.cG);
			cV.imageSmoothingEnabled = !1
		}
	}, this.a2l = function(a2, rG) {
		var lZ = .08 * this.cG,
			zoom = (this.cG - 2 * lZ) / rG.width;
		cV.setTransform(zoom, 0, 0, zoom, this.sE[a2].gV + lZ, this.sE[a2].gW + (this.cG - zoom * rG.height) / 2), cV.drawImage(rG, 0, 0)
	}, this.a2m = function() {
		var lZ = .06 * this.cG,
			zoom = (this.cG - 2 * lZ) / a3.cG;
		cV.setTransform(zoom, 0, 0, zoom, this.sE[1].gV + lZ, this.sE[1].gW + lZ), cV.drawImage(a3.rG[4], 0, 0)
	}, this.a2n = function() {
		cV.setTransform(1, 0, 0, 1, this.sE[2].gV, this.sE[2].gW);
		for (var bR = this.cG / 4, gV = 3; 0 <= gV; gV--)
			for (var gW = 3; 0 <= gW; gW--) {
				var mg = Math.floor(367 * (gV + 1) * (gW + 1) % 256),
					op = Math.floor(687 * (gV + 1) * (gW + 1) % 256),
					e8 = Math.floor(651 * (gV + 1) * (gW + 1) % 256);
				cV.fillStyle = "rgb(" + mg + "," + op + "," + e8 + ")", cV.fillRect(gV * bR, gW * bR, bR, bR)
			}
	}, this.a10 = function() {
		for (var a2 = 2; 1 <= a2; a2--)
			if (this.sE[a2].mu.o8) return void this.sE[a2].mu.cU()
	}
}

function qM() {
	var username, a2o;

	function a2w() {
		var ru;
		return 0 === username.indexOf("vote ") && 2 === (ru = username.split(" ")).length ? (pj.a2p = ru[1], a30(), fV.wo(0, 7) && id.a31(0), pn.a0c(3252), 1) : void 0
	}

	function a30() {
		username = a(), oK.get().value = username, oK.oT(!0)
	}

	function a2v() {
		var max, a32;
		if (0 === username.indexOf("account ")) return 2 !== (a32 = username.split(" ")).length || (max = Math.floor(Math.pow(2, 48)), (a32 = parseInt(k.l(a32[1]))) <= 0) || max <= a32 ? (a30(), pn.a0c(3266)) : m(a32) ? (a30(), pn.a0c(3231)) : (
		a30(), 5 <= d ? pn.a0c(3232) : (pn.a0c(3265), a0m.o8 = !0, a0m.c8 = -1)), 1
	}

	function a2y() {
		return void 0 !== username && k.mV(username)
	}

	function a2t() {
		if (a2y()) return oK.oT(!0), 1;
		oK.oT(!1)
	}
	this.a2p = "", this.a2q = -7e3, this.c5 = function(a2r) {
		d < 5 || (a2o && aA.aB > a2o + 144e5 ? e.setState(14) : a2o = aA.aB), aH.setState(0), pl.ww(), oK.cS(!0), pk.c5(), cQ.ww(), a2r && a9() ? setTimeout(function() {
			0 === aH.oM() && a7(12)
		}, 15e3) : a7(12), void 0 === username && (username = a(), oK.get().value = username, a2t())
	}, this.a0p = function() {
		a7(13), oK.cS(!1)
	}, this.a2u = function(c8) {
		return 0 === c8 ? pl.cG : 1 === c8 ? Math.floor(.3 * pl.eH) : 2 === c8 ? oK.get().style.font : username
	}, this.a1D = function() {
		var i;
		username = oK.get().value.trim(), a2t(), "password" !== username && "account" !== username || (i = k.x(h().toString()), username = "account " + i, oK.get().value = username)
	}, this.cL = function(gV, gW) {
		aA.oX(), 1 === pl.oI(gV, gW, 1, 1) ? a2v() || a2w() || (a7(10), a2t() ? (this.a0p(), u(username), fI.c5()) : pn.a0c(4214)) : 0 === pl.oI(gV, gW, 0, 1) && this.a0r()
	}, this.a0r = function() {
		a2v() || a2w() || (a7(10), a2y() && 5 <= username.length && 40 === username.charCodeAt(0) && 40 === username.charCodeAt(1) && 41 === username.charCodeAt(3) && 41 === username.charCodeAt(4) ? pm.a0T(Math.abs(username.charCodeAt(2) + 5)) :
			pm.a0T(gj.a2z), a2t() ? cC.cD() ? (this.a0p(), u(username), fB.oB(), pm.c5()) : pn.a0c(3228) : pn.a0c(4214))
	}, this.a33 = function() {
		return !cQ.a0t() && !cR.o8 && !oJ.o8
	}, this.cU = function() {
		var eo, hN;
		this.a33() && (cV.imageSmoothingEnabled = !0, eo = cC.rH("territorial.io"), hN = 1.1 * pl.cG / eo.width, cV.setTransform(hN, 0, 0, hN, Math.floor((gd - hN * eo.width) / 2), pl.gW - hN * eo.height - .72 * pl.eH), cV.drawImage(eo, 0, 0), cV
			.setTransform(1, 0, 0, 1, 0, 0), pl.zz())
	}, this.a2a = function() {
		return username
	}
}

function qN() {
	var a35, oo, c4, a36;

	function a39(c8, name, a3A, j) {
		c4[c8] = name, oo[c8] = new Image, oo[c8].onload = function() {
			0 < a3A && ! function(c8, a3A) {
				var gV, gW, a2, eo = document.createElement("canvas"),
					cG = oo[c8].width,
					eH = oo[c8].height,
					ou = (eo.width = cG, eo.height = eH, eo.getContext("2d", {
						alpha: !0
					})),
					a3D = (ou.drawImage(oo[c8], 0, 0), ou.getImageData(0, 0, cG, eH)),
					kq = a3D.data;
				if (a3A < 3) {
					var a3E = 2 === a3A ? 160 : 600;
					for (gV = cG - 1; 0 <= gV; gV--)
						for (gW = eH - 1; 0 <= gW; gW--) kq[a2 = 4 * (gV + gW * cG)] + kq[a2 + 1] + kq[a2 + 2] < a3E && (kq[a2 + 3] = Math.floor(255 * (kq[a2] + kq[a2 + 1] + kq[a2 + 2]) / a3E))
				} else if (3 === a3A)
					for (gV = cG - 1; 0 <= gV; gV--)
						for (gW = eH - 1; 0 <= gW; gW--) 0 === kq[a2 = 4 * (gV + gW * cG)] && 200 < kq[a2 + 1] && 0 === kq[a2 + 2] && (kq[a2 + 3] = 0);
				else if (4 === a3A) ! function(kq, cG, eH) {
					var gV, gW, a2;
					for (gV = cG - 1; 0 <= gV; gV--)
						for (gW = eH - 1; 0 <= gW; gW--) kq[1 + (a2 = 4 * (gV + gW * cG))] > kq[a2] + 20 && kq[1 + a2] > kq[2 + a2] + 20 && kq[a2] + kq[2] < 40 && (kq[3 + a2] = 255 - kq[1 + a2], kq[a2] = kq[1 + a2] = kq[2 + a2] = kq[a2])
				}(kq, cG, eH);
				else if (5 === a3A) ! function(kq, cG, eH, id) {
					var gV, gW, a2;
					for (gV = cG - 1; 0 <= gV; gV--)
						for (gW = eH - 1; 0 <= gW; gW--) 200 < kq[1 + (a2 = 4 * (gV + gW * cG))] && kq[1 + a2] - 20 > kq[a2] && kq[1 + a2] - 20 > kq[2 + a2] ? kq[a2] + kq[2 + a2] < 40 ? kq[3 + a2] = 0 : (kq[3 + a2] = kq[a2], kq[a2] = 255,
							kq[1 + a2] = 255, kq[2 + a2] = 255) : kq[a2] < 50 && kq[1 + a2] < 50 && kq[2 + a2] < 50 && (kq[a2] + kq[1 + a2] + kq[2 + a2] < 50 ? (kq[1 + a2] = 0 === id ? kq[1 + a2] : 160, kq[3 + a2] = 180) : (kq[1 +
							a2] = 0 === id ? kq[1 + a2] : 160, kq[3 + a2] = 180 + Math.floor(75 * (kq[a2] + kq[1 + a2] + kq[2 + a2] - 50) / 100)))
				}(kq, cG, eH, 0);
				else if (6 === a3A)
					for (gV = cG - 1; 0 <= gV; gV--)
						for (gW = eH - 1; 0 <= gW; gW--) kq[(a2 = 4 * (gV + gW * cG)) + 3] = Math.floor(255 * (kq[a2] + kq[a2 + 1] + kq[a2 + 2]) / 765), kq[a2] = kq[a2 + 1] = kq[a2 + 2] = 255;
				else if (7 === a3A)
					for (gV = cG - 1; 0 <= gV; gV--)
						for (gW = eH - 1; 0 <= gW; gW--) kq[(a2 = 4 * (gV + gW * cG)) + 1] > kq[a2 + 2] + 10 && (kq[a2 + 3] = kq[a2], kq[a2 + 1] = kq[a2 + 2]);
				ou.putImageData(a3D, 0, 0), oo[c8] = eo
			}(c8, a3A), a35--, cC.cD() && (zN.cB(), ly.rA(), a3.c5(), a0x.zh([oo[8], oo[16], oo[7], oo[9], oo[10]], [!b, 0 === d, !0, !0, !0]), aA.cJ = !0, oo[7] = a36, oo[8] = a36, oo[9] = a36, oo[10] = a36)
		}, oo[c8].src = "data:image/png;base64," + j
	}
	this.c5 = function() {
		if (void 0 === oo) {
			a35 = 22, oo = new Array(a35), c4 = new Array(a35), (a36 = document.createElement("canvas")).width = 1, a36.height = 1;
			for (var a2 = a35 - 1; 0 <= a2; a2--) oo[a2] = a36;
			a39(0, "exit", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
				), a39(1, "victory", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg=="
				), a39(2, "defeat", 6,
				"iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC"
				), a39(3, "orders", 6,
				"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"
				), a39(4, "crown", 4,
				"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
				), a39(5, "arena", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC"
				), a39(6, "territorial.io", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAjIAAABBCAIAAABEh9lIAAAACXBIWXMAAFxGAABcRgEUlENBAAAJJWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNTo1OSswMzozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMTItMjNUMTM6MjY6MDUrMDM6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY4ZGZmYjhkLWEyNDEtMTg0Mi1hNGYxLTk2ODMyZGFjYThjYSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE4YTU4YWFiLWE4ODYtNWI0Ni04OTk1LTI3MTdiYWZmOWMzYSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjNhNTMxM2RiLWY0ZGItN2Q0Mi1hZDc1LTEyMTJiNGE0NThjZSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2E1MzEzZGItZjRkYi03ZDQyLWFkNzUtMTIxMmI0YTQ1OGNlIiBzdEV2dDp3aGVuPSIyMDIyLTEyLTIzVDEzOjI1OjU5KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4NjhhNzU5LWRjNDctNGM0My1iYzA1LTllM2ZjOGMwZjY0YSIgc3RFdnQ6d2hlbj0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmOGRmZmI4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"
				), a39(7, "youtube", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC"
				), a39(8, "googleplay", 3,
				"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"
				), a39(9, "discord", 7,
				"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
				), a39(10, "insta", 3,
				"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"
				), a39(11, "emojis", 4,
				"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"
				), a39(12, "flags", 3,
				"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"
				), a39(13, "bestTeam", 5,
				"iVBORw0KGgoAAAANSUhEUgAAAIoAAACvCAMAAAAVOLbTAAAAtFBMVEUAAAABAxsXAwACCQwXBTIoBg84BAAJEhJOAAJGAR5lAAASHBx9AACaAACwAAEcKyobMgAVMkUnOjgNWAA5TEq8LSUrVlgocYAWgge4TEJOa2gFjSBnamdCdXO9W1QDl0V1dsa6bmZoi4RTkpE3nZpUogB3icmciYEMuIkAxLNiqcxuvABvsrRXvb+QsqOwsK062M0A/wC9wb6D19JV/1bX2teS/5Hj5+TD9sy7/7vl/u3///93TxdPAAASr0lEQVR42u2cC3uaShOAEcpFwKBo0VppTsXUpkXpwRAa8///1zeX3WXxnjRpzvM9mdP2RLOXl5nZ2Qu7a/x7RO535O7F5FiNxv5Xd/e/t9vHV5Tt74f7uwtQgOPxL8j29/0ZlHvJUdfVK0mtaB5OoNz/ZoxyOXONV5N4VpTMs70/hvJAvy9nkfHqEs1Kquzh7hDK3W8GMf6SMMz2bh/lDr2kXhp/UWZ1y0iGTlKNMIUF/xkWyGtUb1HBovS41FkMjaQMmITTW4T0wiCqaBa30FgECvpJEcgMLko70wvpA8S1qHDxbdH4i6HaDuvEcDWxLsO5MAlxaNKw/G5QMLBV3ITdQEgL52VIRImqBq4Q/eVeoYB5avJYIwgiIYrmHAv7lnEqjQYS6DVwiKmEiRDlHri4FUOyOB6NYhCN5hSLqOUkrgJhDiyd6oiYZYahTqCgeVwmwUQsOs7RiqhFSEueIVEcI1WFYClYLQYrhWKsG0GyqZCEcYiGYA77iCVtL4D3IwCBSA4oNJE1IAtpIK5JLQZ5SsUeCyjT0TSdg6Qp4xANV7RXg8GVSMtTGms/HadhdUChaTrPoIJpPEW1uFIthLIVngIokDawgiTNUBoarGmXRdiGK2Fgdx/YUCCsjpSLzpLAckEvMaOMqBEZaJ86ZhRQynRkeo4ZJdmiRUNP3a6C7R9FsfQtUgx8bbXTcZIEMYhjkSWx4Xgm1iW8xa3QQgaGt8qQrgIZXN/3iSZdLIgmZRioSFVCzYEcII5HjeUxTdBEL7QOJ0kEx0JwQBVGOp/qjvsbUMBVChFToNg0SxzfZ5pA0QCMxiJdNaLnBd+aJnNOEqn4KB0W/S8RdlmkSWASBxQfZxrKDJ3FQFeZGdJXoNzU9Fk8QcMw5GMuq0SFB6pmnkYBuDqyiAjAKS1MySQNhycKt9OMy6SnC8BZ7ggllihxMs2yyCMOD7N5jm3E4MaKRbkqe8gUq4ltJ8jgIacqIjUpmSRNEstGfXiiXB8ypMkokg4IznJv/AteaxhNYwbvtmUWj6EcI6GMVAOVr+IPNExK7ySoO+U1TUomMWxWhyoV0zeN2TCgI3ow7nZQ0mxheZjHkSxQgoX1JNxgqUUwB4JkCRnUToSLSxdWKUFtgSdNzsX6vintI9xPolSyWaCFACV2UBWOo1B8J844a0StBq0whTAFteepyWnMJM8zjF1pzMGLUyIJqk2RYLG+Fy2wPLKjbEJ7KGih1FYowsl8cyxYOJJMoR+P0yzPV5kln9hMc4RJLAN+PUJoNA+QjGU78BVKY59m1HIABdQSSE0qj/dc9EtqryL6eJ6RpKtFR9F65mIFII5nTSl4RdI8kTKPI+1uyAc7iiLa0CJxhIMZk2HftDHQeANpIkKZJ17oe3YUKRJIEkRgrNCL5lOVEM3jcJTqDyd94X9evBDt5wiKpdQCoYVRzJ8/f97cTPrCL5mFUFKbH9TXhD+B8mU6ZZ7+5OYGiuqLBkRlieBwBgUsRCy+M/mJcoMs1hjj44jiGjQdVxGEJOqjyciYDpWCFrRFMaxsX7fPERRLWoiUSpmGpJafE6cxEQWVeZZ4iqMH0tBEHIMEyQByOsMbUsqQHtAX9hFx8BSKsJB4xBsgARk6ZCLyAqxknqWO4gi7XV/ReIlQHpqRzOMNqQiwTxP0s7ZS9lDQRDtBCS3ELOCmnbGqBUKK6QuFdD+ghAIG6qFEI2Ge0O/fMMrEESjubvs5jEJqAfWLwAXlMAq4SyhMhF3PfJ7HqIlez/8gxOtdIQ31RpRGmEeS3PRFkaRdaj/NmHnPQKJTB5Q8hZBL1reHsiTVikaj2Xy+Tv3e1VVof/jQwelHpwOKubrqhcl6TijYPaF5bPEsE3w4KNGL0kyMD9xmILyDIsZc7AkQRwcemsD3+jfs/1CuQR3wdIYoc/+q51kdNZwCGqd35cMv5rMZOQqaWbbBocOFBeNVnioUyziKYkiUIEpXq/HAI1c0hwQzwdiELLPZbFms15Fv7k4CIB6t1wWgzJAEI+WQSCbkWOhtq9UichutGOe1EkDbXWxWY5ufBVluONDl0OMBSVHMg4OTnjn8armERDk1Q1SpVIk9Xm1WwGeeNZDuK4EfQthsYPqTCbdvK1uvqbaRtpoFnbm21Eac6zWUwW0QPR6KcNSzIUoSn3Jbiiyicw7UYyzYShzU4bsYLFAU+rJhutpsVqn2BSptvYZeKhTdAeYfZGDxjkcGz1SEM861oIyfCCyDxhUuE3JI89J1oS8cxosNySJpvgtmRTl3mjyhP+By/FDGFRlsj6KovjmQ3QsX0hEdDcYxZ67ZJkCVrEEAJtMB55EIeUK7/EAixO3F/UOBXw7kZOdPqsWCbBFboQEbbdushexYCRr2FcH43QSaDWnW30VxL0OR3iHsnHSBBGNa2zYIAS2mYBjdSiaGwF7oJQsA6creG/vYp6LwwNxjy2DLzgcQ0xyt3aQbIgEQEmElrS054VUonoJAYARHo4TgGSgeDbyIppvkm8xpYpolbIMgX0GWrBm0khZvnPEmH3cFR38y/BMUjE99CFDYAY817ScbVokAacNo6QZjG/JCUOljlJw8D8WXIyegmfTD3lWo2Wbxa7PZglRVBShfQASMcBnNSmDVEMaTVNCeVo63IOsACo2/JuCC3Y7sp9LVr9VqRSy4BP71E8oXZhEuo6zUsQFFjAURxYdSn46C46+fPP7SUKyEQH6QlPh6p/7ySYeRVuKG3fnAKGrw9FwUHsPpKMnilyL5hvID8n/6+PEjsnxRVlLh90VQfInSMtAKSRqQb/98g+lu8fFjA8OKAZaVQLlSBrpxeL70TBR6niG4bddilDYJyLfHx686CytGoBg2oPTZzBLFfRIKD7MhrgxhegihBQInB/wFozQgINVj+fGjgiEW1ItCgZDr2P3hcCIG2pejjFLVHTqenGFoKEonguRb/VhdXUkUYaQWipyXOPvdoXVsxN8eJMjumDqPLkfaxZ5SgKT+eqWzCAsxitHdKYgGCdOzg4T20ImexOt2BuNxlm+muyhCKeC2y49XGsuyqqvGQMk6z8fjZND1PDl4MSWKddRA+tgWlx/siCBWNDTKkx2Uf9pKUSxfqsftti4kSpxT9lWeZ+PBwMZlEksb2x7XiiVRYnCY1YrK+JHhQ4XOcZRPVw3LJ9BSvd2WEsWEbj0ZZz/oiSAigZu42uTjPEqWEwVC2KjYxm0lyj8tp9VQ6sftGnqnVguCjrn7YTDmp8ubKdl5t4UpWZokqE01kDyKQk25QflUPNbfr4GljSIHLPYgSdL0Aq0oX0mtxsnAafp9GB4eQ/kGnRBzwJ9PFRR3vYPi9fumLA8bgpk2WjkyJdNakMlt2cPAhIHSlIF/H+Wf+hHd9mtVff2CnWO1vr7+rlAsRKGlKwiWYqDtpCKuWOcmH4lEgUw8zjiNQmr5KrZfVOvv14Cy2Wp9kCcK+SkWTRXKJZOPPRTnFEr1uPyK6oC/5fXna0QhlmMo9iUoSivBE1BQLaiOaxgcXH8WKN83x1HM7FIULfC3UKwDKBR28U1xff158plEoNxqbqtQwgtnh3tzZnBb0xwOqUs92Ji/qR069frzZAfl9lahTCZYimt6MvDP1VLp+VWnwPG0/hB+2ENBqcA5cCdSvUaSiSLZQYERv9YZeo6VnW3MWh+UZWP4M4ZeY/Ch2+1CUb0dlB8lOQhUjX8mE10pLRSce0ARH6AoKHCMBT9lqQcC4kr0QDkOTzLozOI2So1WQTedCNFIdJQIOpEMy8ibXmj6BJTYcJyuPeAH4XJ2e2YB8lmy6CQ6ygCy4uOMWcedruOYUfoErRjt0Q5OpOwdrdRQ5eddUSQKxZRvlZoCzfNaIbfF16rzeeI0K+Xt7lCObevH9T5LQ9J221ZZXnR2vCKbEC3hu5jLRM1jOxw6Oyg/fkBo3WNpkfxSKP6QI8Jkgsr2oTdEAwUnW5DWmhNcVPQmP5sQxyjNPKje1t9bLBoI6qRBUSHuBnWNC667y7YnUNIss2hZXaFAgZQxVZNDGDeuqfJ9ECZZKK3ImD3EtTjtDeZprVj6exhfquXGk1rBVQQBs93+/n7dlobkVq4mIIoshYrkxfmovRPlKMquWnBRo2c3617IssoR5fsRkFu1xgLDi1Csrg+pLzyklEONWaol1dUy9JBk3Fg2WYhVDaz5EEjarK+MBxBueTlcU0rbaU+hkFpcVssNDr5CO9toi0m0xAIom+8KRgNZaAuVEOEGtBx+c0oph143iOHTSKnFGdKyeDfb5N3Q7nSaxXQI49vNr+8t0Z0E34XYoQcZO7SuPnR4g4aGYpxB2fEWGvTj8t4Awpz/oaMtlf7CudYOSOMkMGoCZ7+Ch8hsGq6fUMohFNGeNbUoEprD97yOtjaI/dvtERCj0+VFZDDt2JYdyBGlHETZiy0YlIgEfK+P78E83WU2m1+3t42TBK1F26uwP3TIzcYOszRKuRxFqQVJktVq4If0ZseHaYa2VGkEi1slC333MiWk5heGnZVg0ZXS3rR2EGVHLVAAkCQQJilkDnFtHQcRmssIEM020XwOKL0+R8fQHwCLR71P8yrVugAFJ6ykFnqvHfpRjiShxy/twl4Yr7drPX1y++uXHkkMY75dJyGvkUKfga9PoAwvbCmlLcdQlFpg3OIFWZ6QmShi9sH0MLNPwpbLLHTbOGFvtN7kURhKrYT4PHkEE1Q5OnB39xQeQVH7pWDcEltpnvDLzP6E+jNoTZvUQ0+wO/uvDjsdXLbzwZ2hBftDeidMueM8s2icgjtb9nfmH0ORb1ZxODfNYlPO43Gx38PNOza/Gdp/o2rQi5dez4HBMBrX6Tsisx3RkFbf33QhiiVYcEAXR4bNe2qgSBcqiXyxUtjz27k8BhHJBr54A+TYJnRruG9y5/X/RSjCRMSCUxFcbukAkDmGx7VDuWoZBppiTDeUq5GhA84xNgCiM6C+NWOQYyQnUXBndCT2ghIMTo2SBJ8tDWyxghqO0lAsjBlgtDQJxbqoEyRQOSQfc84MQaZi+6PxVBRD7dWkbWcpaWdOkiUuu0CcJ6AaZLFgWHIVc1vzPSMRKSkLb1FTOz6Np6MY2sbRqS5YQQLzX5j75g74ywjrnILD+nkOc23PjIUWGhFbT49Y5zyKITYP63uYea8isKSxbafrFBr3CF+BF+upGfrpOjNt2omRyl2MzV5G3h1sPA9FwcjtvbHcSkz7FZN8PfLMqTDFeup60TqfJmSTqdjdHTc7PA9tZb4cRW55bja8Cx1Nedf03HKRZDbDXSTzaWAwV8qbTJs88lzA8ZMb57Viye3G6hyA3N1MPjNCEtxDQrtE5tNoJFqKtvVWUJw5Q3IeRR9mutqZALIT1o9/hT8w0Uxtjt45H3H6BMSFKFZbmn3f2o7/1sdI7NLW5czDXqqVPRa3OR0gNtc3n2LtGMLFJJcbyNgptnV2gyre+eju8r8ciqGXaRmqYelnZrSP1n6ml0NhgkNHPfbEao9bLzvs9DSUlo4M7byPftSKR/JPP2v1bBRDnX479OVzDn39EcqRgPXM02d/ppUXlXeUd5QXRJnVQorTJ4vLWsnstVDUCfHTqquao+SviVJX1dkqyooS4Sn110Qp+fDmzBCDIzwyjv+O1GdDnk0rKY/6Gv6NOB39HP+5VuioOiTi13OlscQfqqgQFtlFqaRB3ZrO7hV4bi5WJz7/2FfQG/HlbVkW8P8SshbLssIj++U+CiczlkyEyLPly6EgS/1YLZfLmUuKKmZUe6GS6iiYDM8fgWFHUE39WJTwz5+jlPGooGrYQAU9JqnpGAoni+vHWU3Jq8eqqquXQOH/VcJAsyCeFRXlOqoVSLbE4sHJKrd4JF97CZSab3xArZQ4YJyh1atTKBUOLGWsmQEK7p2rXtZXqGkE+DKVIE4ZqIasZVGQi5fgtLM/RhHRvCpHUAf9WBojfM+N5Y6gQ2hQavGJO4GqqPHoa4k/FFCMW9bL/5fu8B3lHeU/ifLvO8o7yjvKO8o7yjvKO8o7yhGU+u1Ryv8ayhan2G8tfP/K9plrVi8puBJzr93V84Yi7up5+A80oYJR8F6n6O1d5UG/7ertBC8Bu9fvAHtj+7RuRnsrCdTNaGih8i1RcPXybvcWvTeRUc0XHe7cLfgGYpXa3YKklip4O5+lqwW1eygL901IcOFxu3c751uw4BWq4qZQ/c7SN2Chy1zbd5byzcNl/Jc9lpboH3bvtyWW+q+GulGpk+i3/tKNzOVfa9TBsn3Trn4XMt9AXJezv+EycVHvXsxsHLiquipe92Zmd1bwldXt66p37s1+UPdmV+VLSdGSslQ3Z/++O3mb+N3DX7lMHDVyd/6O9fuH177bfLt9uL/oune+8v3h1eT+yN3z/wOAO9vKqVjcjgAAAABJRU5ErkJggg=="
				), a39(14, "bestPlayer", 5,
				"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"
				), a39(15, "zoom", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
				), a39(16, "apple", 3,
				"iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII="
				), a39(17, "loading", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAZEAAABGBAMAAAD/Q7RHAAAAGFBMVEUAAAAnKSZKTElucG2Fh4SoqqfLzcr///+y5yZlAAAEnUlEQVRo3u3aS3PaMBAAYGNsuHoy0+TKTJv6SjNNfeWSciVNJlydF7qGl/n7JTGSd1e7wgaFaWfMKfFD1qeXV5KD8cb8kuC//rWSVtJKWkkraSWtpJW0klbSSlpJK2klraSV/KuSbw9qe8HsfnCyfHVuZu95Kmb3iUdJ+KAvKf7gM119vDoUb8Bv9gLsu2PD97+n4O/tr1/+OzHXXiqTRjHyJukqkLcndKqnDw94yTYfty7JoyD5jtIYeZJ0FEr2Fp670EcnkgScYiRrXkJLI/EjyUjOhtzduSwpBrJEJ4YloSJJPHqRRDRnK3DSPHIpS8w5TjLnJJlVGIkPydjKWdVsw+pZDokueE5SMJKunULuQcIky5a/S7KQJbtiQZLUTmHlQcIkW13YYyqKkRQOycKWKNcjD5dwyebMYJA7JLscspLCknAJgLHxUEnEJbtkmAuXZC5LysqEEq4V1OkoeySm/bxenf22ujd41NolWTskCyoxxfNydXajrL55qCSDXe4LeaNHdl8wkiLofP2NxwNeUhBJiKKJiBbUwRKFBtIxbrVlha3wCzMGGYzROMxLPhIDkhjn/aOtFa93x0o6uHJ1Cb3Bce1NoZYMJabN5w7JEkv6uLSibQT+w0PcFZGhQyFYmZ18CnVY0q0hKbAks6JrL1F9j4S6Gar50jVK0csLSTR97pC85x9IprW7+CESU0B9psCTHroGS8ZgwJAkSyRRqAF7k/TJyIFkWhCjesOSC5CAJNk+GEjqvwobSVIS9sRwVO3vzoXo2TEXGhZOSQ4knUazq/qSDMXe1QgAbp3rBpFzkl4dyQpIurBnqibhilsyJo2WeU6us7U8WLIZ2JLgkyUhkFSNKoN5x5K4liSvJNEnSaZE0gG5ic1dfThFaSTRQ9vpJbBOqsE3hp20kUS/r9JPl0itKzGjwbrqPXlzia5jdXIJ7I+qCsrhFKVRjyeLD6DHJ54lrlEYVIQC789mkliSDD1LUhIEgTdjJEzXm0nw7Bq840eeJY5opSesBrHv+LUoyQTJ5BgJM113RJCpMNnGknSfJKYSGEH6l3BR/dS+4c2WwBidlaDmxUX1oR+JMNNa8MtHK0vSgUZekhIJnWl5kpDZb7fKGLM2iebuBZqp5bIk3rBTepN1TxJT8gO00jJhO3x5FZSYDYuJLKGdgaxI6P9BwxuZgyt4cI8kYxrOR4770kphJTm7VmhZSZCk+H68ShRcbjxJ4MrdNWxFY2mlMJaanSSJyAClwCN/Pmx8SaJ9zc46wUkWLglISl5NPV4irXCH7B1F0xVuvMXnWOH2IBF2HWLcLUE81mjXgWzRTODI7VvSdfafBZmBjRruBKHXp667jKvt5GiJsDuXkXBfmXbXaHeuPHGOJVzfHAXHS/gdU0W2Naam9BvtmJIdwIn0jnsKPEj4XWy6KlVFio12sXE5aElX2GY8VkJ2xx9hRSV2kByLW8WypEcilHNuI+l4Cf7a45ldLzZ5GVrfN4yC/ZKQhu6/ECTxJQnCKoK/s6cdqDfl5AscuIMjS/S/7Bc4z3SlR5DU+5VfRRWvp/sqKiy/iqr/IdZfF1HJgRmsN+0AAAAASUVORK5CYII="
				), a39(18, "target", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEXUAADUISLWQkLMTQDZZmXAdwC0lADgiIioqQCWvgCE0QAA/wDnra1i6ADw0tL////afMd+AAAC6klEQVRIx42WTWgTURCApzFNY2lLBKEX0dy8iA0UxB8CKgUv0gaKBS2B3HOJnkUDQrENQi6KEITcgydR0l0CUYReJBZCi3YpaC+9FANS6GXZ5+6+eT+z+1adS/ImX97Mzs4f2ET2916vPV9/61At6Ifeq2UIZWXDSYK+IxLIlY4Z+ga6jL8xQbsFoFQrDtF7QqoThaxSDIKsE4HqYJAyhXZNDJxq6VCvZIQgq0NDSJCGgnqFJCiroB2lHTvjS06dWxJSHl0cjBjztm5JxXUBdaXqro8E4j2UD+gg1BamFpkQ75GgVjkkn/8SU+LVUHmaQx/wmB5pEHNzyh4oa08ZkU+oroZQhR8mKMO8PNdPBpBlvoixA67PBBC6lI4yzJVOgb3Nv1+OQawm3h9gJo19jUPHHLrhQ4UEazIKkzZYHJoRvxwuLAzE95voOWzyO5dQ/zkw/QQPfe65DfhwGO2T8JBCB39zqAM8l1Ij3QBMkSC0YFsP94nIB/4fj3vegLb+175IkCX94io0w8/zXJkX0IwezjLUNciTKZrWoSJCF4hLvlCookHHChppPhaB5+7c36BpvOm/oH+Y0x13VSFTx5vGEEzQOPGInyO5KPOUR3yVvrsDIFWBBVOFoR5hlwYczTfgPUmVj1y9SJKiBdhSMM3c0ItZzMwfWFMifeeYomZHpKb89MVWOCWr++hXpNCzfkmViFO6oEvTPtROaAWM/RRtDOx3QO0pyYveCjZ6HreH1saDhiGaeKxj9GUrBzl70iNj54FiCA3BeFVNtXsfEq2Odh/xrjPYxyuG9nuU00YC6DPqrKTcvD6nAshSNclbk3coR1BGDqCmpFJ3Hg++bN2OTNgQ6uojTh9kfP7g5KwnDcWiNl67CQy/SEzzhKvKZORvGqdwxqHLw47JWCOyYfSexaEHsYUmvj9cM6xG1jJlrjqmJcsiFu875nWt91I+4/yLxMXP3lu753PzK+tO8nYY3LbvS2SDtP8A+ntynBIvYeAAAAAASUVORK5CYII="
				), a39(19, "members", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
				), a39(20, "hourglass", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
				), a39(21, "stalemate", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAeoAAABABAMAAAAnsyk1AAAAElBMVEUAAAA8PjxeYF2Rk5C6vLn////ACCfyAAAFMklEQVRo3uXby3qjIBQAYBEfwO+buM9c3Ntp2ZOZ8ADx8v6vMp2qybmBCK6SbNomEc4vcAS0RbG+1Iebvl5/vxev8lIf0+M1nl8DXboJvd5eET1N3QuoGfoVOvlp4q/+6fv3JL2evY83orp/uVH9NbLrp0braXrBLt541LenVpsH9Ao7+/DUc1E0kuF85ZkHdokHMriMPfNEpbo39fx3e1fbV1D3NKVb8KEn1TkpCShvbxET50gvnzdaDG4A520mfhHSvg+oWsHaN9QlCf0Ydc+vqFYqfUk8SeqGNpcDtW+oKzEJ5KqHghYO1ZrOKPLUa842oPYNdbPRGmnqka+JrDAi13eT1Cd6jj9LuV7ff/+g51tQG3FOk6sWei5Qt3Qo5I1raVG9oXbinCZb3dFTCtWszlz1ZwRve9Qli/0YtfW8QzP73CmS1OQD7A6r0aHn49QXxrPyWqlLVrM9BegOqxt5iZat7tleh5UjsslqYXk91HFqIy/RstWDzOOjuE9XC0eNXZQana/hOPUYUBtWZ5q6CmwpBNWlEHykug9v6NQUY8VkNu/3RKlH/1KTs4NqciLPx6k72qjWs/HTJavlw/C1Wwz35Nlxyldb6Q2pGay0OyJNX8fIneFhM9ylmhFeb45RX2gPtKSFRmGXa6e6+LW5WyiGuwTaO3KactTj+nGJdJbQBsebZq9a3hseNsJdcdaRgnPUw1q1FtVq+drNcMxudSmyz+Fw1xK7luyzZandEuM8gP8SyFqnbXkNu9Uy+xIOd00s54YMiZ3X65qrP9+bv/pOIGudXcWFJrwYl4auxB7C6jWx1DSCLLVZDpx//iRFrwXUmqezBHVRfPji8anvw1mTz7LUzRL4/Pc3ArkP55K3TJI6eOteUKv7O4qMnSz13HHsnLZGjSHqkbodG69p6qL45nxzAEEN+pjDfSNLPRfbl/CveyTlIwrDqkhV0/a+hdRgNBtcXJYacXuiBnW2jJCuxjOWPqRu+YajPUA9HzwuHZ2oG77ddztEDWe6Q0htHkFXvh31BPXySyuqQbeuWIz71OWP948rOLyNUsMUpvH389Rz8MsFjKgduA3Jph971C2bvegoNZSWGJCnhivAGquhVLE68tTKxagraVOlO0ANd6oLrEYTA0dH6R51w0OMUouLcps/D8d5BavFk3ZJmYdXPLWZGLXxP7eUpy5hcVhtgkvDNPWlEG7v+cJVgcVpnlrBZtTe+wJ8v26PmucuFTNL0YGntfLUwGaxWt7zua8W9qgVu3rrmBlpFXhaK1NtQGlIrcNPiO1aXzva2CZm9eF5XMseoG5BKyL1Sa7zkqIGKeIPKTuw0jSBmwPK+1GU+gQiRWpPnX2KGp7B8ffPa9SugpzMlkMi1LyLOv6kwEDUnjrHvdfr/6H4HqhE+xRU7UksczrLVGtQF1QrX5x1gtp3CtHahKq990TO+WolNIkNPO+6xrlP7btjMgbSUOOLwOar781gsfoUqnO3Wm93cKY25MxoeFCu2vD7VBa0zkhv2fQpal9urANq55vZDAeowV63Fm58DXR6OCSpq+AFQVKXrD84aRGYqG74yt2CUns206hT1GI+w/8KQNTV5Ln/9NVAuepKVGt2pg1OZ3vVenNziagb9q12ElolUa0fVQE1P9PNJK/IItVCerwEp5KGTTkbUGKuuuSZFmyKPs505QkqVs3Yf8ITaMeGAZxQ5aqX3y1WO5ZlNZ5E7lfjjfCxK4Lqkl/S4YT3IHWH1IrXWeIclKD+LGP9T+Tr8/9r6j/yRPVUqj3rEAAAAABJRU5ErkJggg=="
				)
		}
	}, this.get = function(c8) {
		return oo[c8]
	}, this.rH = function(name) {
		for (var a2 = c4.length - 1; 0 <= a2; a2--)
			if (c4[a2] === name) return oo[a2];
		return a36
	}, this.cD = function() {
		return 0 === a35
	}
}

function qO() {
	var a3L, a3M, a3N, a3O, a3P, a3Q, a3R, a3S, a3T, a3U, a3V, a3I = [224, 224, 224],
		a3J = [
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
		a3K = [
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

	function a3s(bP, a3u) {
		yw[bP] = 0, yw[bP + 1] = 0, yw[bP + 2] = a3u, yw[bP + 3] = 0, a3v(bP)
	}

	function a3v(bP) {
		var gV;
		hb.hc || (gV = bJ.gf(bP), bP = bJ.cT(bP), hb.hc = gV >= hR.yv[0] && gV <= hR.yv[2] && bP >= hR.yv[1] && bP <= hR.yv[3])
	}
	this.c5 = function(mA) {
		if (a3L = new Uint8Array(bM), a3M = new Uint8Array(bM), a3N = new Uint8Array(bM), a3O = new Uint8Array(bM), a3P = new Uint8Array(bM), a3Q = new Uint8Array(bM), a3R = new Uint8Array(bM), a3S = new Uint8Array(bM), a3T = new Uint8Array(bM),
			a3U = new Uint8Array(bM), this.vf = new Uint8Array(bM), (a3V = new Int32Array(4))[0] = -4 * an, a3V[1] = 4, a3V[2] = -a3V[0], a3V[3] = -a3V[1], di)
			for (var kY, eo, a2 = bM - 1; 0 <= a2; a2--) eo = ep.n9[ep.eq[a2]], kY = b6((a3K[eo][3] + 1) * e0.random(), e0.value(100)), a3L[a2] = a3J[eo][0] + kY * a3K[eo][0], a3M[a2] = a3J[eo][1] + kY * a3K[eo][1], a3N[a2] = a3J[eo][2] + kY *
				a3K[eo][2];
		else fB.fC && fB.fD.a3c ? function(aR) {
			var a2;
			for (a2 = lN - 1; 0 <= a2; a2--) a3L[a2] = 4 * aR[a2][0], a3M[a2] = 4 * aR[a2][1], a3N[a2] = 4 * aR[a2][2]
		}(fB.fD.a3c) : (function() {
			for (var a2 = bM - 1; dF <= a2; a2--) a3L[a2] = 4 * b6(64 * e0.random(), e0.value(100)), a3M[a2] = 4 * b6(64 * e0.random(), e0.value(100)), a3N[a2] = 4 * b6(64 * e0.random(), e0.value(100))
		}(), function(mA) {
			for (var a2 = dF - 1; 0 <= a2; a2--) a3L[a2] = 4 * mA[a2].a2b[0], a3M[a2] = 4 * mA[a2].a2b[1], a3N[a2] = 4 * mA[a2].a2b[2]
		}(mA));
		! function() {
			var a2, bR;
			for (a2 = bM - 1; 0 <= a2; a2--) bR = b6(a3L[a2] + a3M[a2] + a3N[a2], 3), a3L[a2] += a3m(bR - a3L[a2], 2), a3M[a2] += a3m(bR - a3M[a2], 2), a3N[a2] += a3m(bR - a3N[a2], 2), a3L[a2] -= a3L[a2] % 4, a3M[a2] -= a3M[a2] % 4, a3N[a2] -=
				a3N[a2] % 4
		}(),
		function() {
			for (var a2 = bM - 1; 0 <= a2; a2--) a3L[a2] += b6(a2, 128), a3M[a2] += b6(a2 % 128, 32), a3N[a2] += b6(a2 % 32, 8), a3O[a2] = a2 % 8
		}(), this.a3i(),
			function() {
				for (var a2 = bM - 1; 0 <= a2; a2--) a3P[a2] = a3L[a2] < 32 ? a3L[a2] + 32 : a3L[a2] - 32, a3Q[a2] = a3M[a2] < 32 ? a3M[a2] + 32 : a3M[a2] - 32, a3R[a2] = a3N[a2] < 32 ? a3N[a2] + 32 : a3N[a2] - 32
			}(),
			function() {
				for (var a2 = bM - 1; 0 <= a2; a2--) a3S[a2] = 235 < a3L[a2] ? a3L[a2] - 20 : a3L[a2] + 20, a3T[a2] = 235 < a3M[a2] ? a3M[a2] - 20 : a3M[a2] + 20, a3U[a2] = 235 < a3N[a2] ? a3N[a2] - 20 : a3N[a2] + 20
			}()
	}, this.a3l = function(player) {
		var aR = de.aM;
		return aR[0] = a3L[player], aR[1] = a3M[player], aR[2] = a3N[player], aR
	}, this.a3i = function() {
		for (var a2 = bM - 1; 0 <= a2; a2--) this.vf[a2] = a3L[a2] + a3M[a2] + a3N[a2] < 280 ? 0 : 1
	}, this.gf = function(bP) {
		return b6(bP, 4) % an
	}, this.cT = function(bP) {
		return b6(bP, 4 * an)
	}, this.lU = function(gV, gW) {
		return Math.floor(4 * (gW * an + gV))
	}, this.lk = function(bP) {
		return this.l0(bP + a3V[0]) || this.l0(bP + a3V[1]) || this.l0(bP + a3V[2]) || this.l0(bP + a3V[3])
	}, this.li = function(bP, player) {
		return this.a3n(bP + a3V[0], player) || this.a3n(bP + a3V[1], player) || this.a3n(bP + a3V[2], player) || this.a3n(bP + a3V[3], player)
	}, this.rZ = function(player) {
		return player < dF && 2 !== dH[player]
	}, this.bS = function(bP) {
		return 208 <= yw[bP + 3]
	}, this.lp = function(player, bP) {
		return this.bS(bP) && this.a3o(player, bP)
	}, this.a3o = function(player, bP) {
		return player === this.bT(bP)
	}, this.a3p = function(bP) {
		return 208 <= yw[bP + 3] && yw[bP + 3] < 224
	}, this.ds = function(bP) {
		return 224 <= yw[bP + 3] && yw[bP + 3] < 248
	}, this.lj = function(bP) {
		for (var a2 = 3; 0 <= a2; a2--)
			if (this.rb(bP + a3V[a2])) return !0;
		return !1
	}, this.a3q = function(bP) {
		return 192 <= yw[bP + 3] && yw[bP + 3] < 208
	}, this.a3r = function(bP, player) {
		return this.a3q(bP) && player === this.bT(bP)
	}, this.bK = function(bP) {
		return this.bS(bP) || this.bU(bP)
	}, this.rb = function(bP) {
		return 0 === yw[bP + 3] && 2 === yw[bP + 2]
	}, this.bU = function(bP) {
		return 0 === yw[bP + 3] && 1 === yw[bP + 2]
	}, this.l0 = function(bP) {
		return 0 === yw[bP + 3] && 3 === yw[bP + 2]
	}, this.ra = function(bP) {
		return this.l0(bP)
	}, this.a3n = function(bP, player) {
		return this.bU(bP) || this.bS(bP) && player !== this.bT(bP)
	}, this.bT = function(bP) {
		return yw[bP] % 4 * 128 + yw[bP + 1] % 4 * 32 + yw[bP + 2] % 4 * 8 + yw[bP + 3] % 8
	}, this.lq = function(bP) {
		a3s(bP, 1)
	}, this.a3t = function(bP) {
		a3s(bP, 2)
	}, this.lh = function(bP, player) {
		yw[bP] = a3L[player], yw[bP + 1] = a3M[player], yw[bP + 2] = a3N[player], yw[bP + 3] = 208 + a3O[player], a3v(bP)
	}, this.bL = function(bP, player) {
		yw[bP] = a3P[player], yw[bP + 1] = a3Q[player], yw[bP + 2] = a3R[player], yw[bP + 3] = 224 + a3O[player], a3v(bP)
	}, this.du = function(bP, player) {
		yw[bP] = a3S[player], yw[bP + 1] = a3T[player], yw[bP + 2] = a3U[player], yw[bP + 3] = 248 + a3O[player], a3v(bP)
	}, this.a3w = function(bP, player) {
		yw[bP] = a3I[0] + a3L[player] % 4, yw[bP + 1] = a3I[1] + a3M[player] % 4, yw[bP + 2] = a3I[2] + a3N[player] % 4, yw[bP + 3] = 192 + a3O[player], a3v(bP)
	}
}

function qP() {
	var c4, bF, bH, y, a3x;

	function a42() {
		for (var a47 = 0, a2 = 1; a2 < 5; a2++) a47 += bF[a2] % 1024;
		return a47
	}

	function a41() {
		for (var a2 = 1; a2 < bH - a3x; a2++) bF[a2] = parseInt(bF[a2])
	}

	function a43() {
		bF[0] = "Player " + Math.floor(1e3 * Math.random()), bF[1] = p < q ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, bF[2] = 1, bF[3] = 1, bF[4] = p < q ? 0 : 1, bF[5] = 0, bF[6] = "000", bF[7] = "0", bF[8] = "0", bF[9] = "0", f
		.w()
	}

	function a40() {
		for (var a2 = bH - a3x - 1; 0 <= a2; a2--) bF[a2] = k.l(bF[a2]);
		bF[0] = k.md(bF[0])
	}

	function a4A(name, value, a4B) {
		var a4C = new Date,
			a4B = (a4C.setTime(a4C.getTime() + Math.floor(31536e6 * a4B)), name + "=" + value + ";expires=" + a4C.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = a4B
	}
	this.c5 = function() {
		if (!(5 <= d || b)) {
			a3x = 4, c4 = [], bH = 10;
			for (var a2 = y = 0; a2 < bH; a2++) c4.push("u" + a2);
			bF = new Array(bH), ! function(a48) {
				for (var dx, bP, a49 = a48.split(";"), a2 = a49.length - 1; 0 <= a2; a2--) {
					for (a49[a2] = a49[a2].trim(), dx = 2; 0 <= dx; dx--) a49[a2] = a49[a2].replace(" ", "");
					3 < a49[a2].length && (dx = c4.indexOf(a49[a2].substring(0, 2)), bP = a49[a2].indexOf("="), 0 <= dx && 2 === bP ? bF[dx] = a49[a2].substring(bP + 1, a49[a2].length) : 0 < bP && a4A(a49[a2].substring(0, bP), "0", 0))
				}
			}(document.cookie), bF[9] || (bF[9] = "0"), (! function() {
				for (var a2 = bH - 1; 0 <= a2; a2--)
					if (void 0 === bF[a2]) return;
				return 1
			}() || (y = 2, a40(), a41(), a42() !== bF[5])) && a43()
		}
	}, this.w = function() {
		if (2 === y) {
			bF[1] = 0 === bF[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : bF[1], bF[5] = a42(), ! function() {
				for (var a2 = 1; a2 < bH - a3x; a2++) bF[a2] = bF[a2].toString()
			}(), ! function() {
				bF[0] = k.mc(bF[0]);
				for (var a2 = bH - a3x - 1; 0 <= a2; a2--) bF[a2] = k.x(bF[a2])
			}();
			for (var a2 = bH - 1; 0 <= a2; a2--) a4A(c4[a2], bF[a2], 1);
			a40(), a41()
		}
	}, this.y = function() {
		return y
	}, this.tX = function(dx) {
		y = dx, this.w()
	}, this.v = function(a2, value) {
		5 <= d || b || (bF[a2] = value)
	}, this.g = function(a2) {
		return 5 <= d || b ? 0 : bF[a2]
	}
}

function qn() {
	var c8 = 0,
		a4D = new Uint16Array(32);

	function remove(rK) {
		var a2;
		for (c8 -= 2, a2 = rK; a2 < c8; a2 += 2) a4D[a2] = a4D[a2 + 2], a4D[a2 + 1] = a4D[a2 + 3]
	}
	this.c5 = function() {
		c8 = 0
	}, this.eY = function() {
		var a2, dp, dK;
		if (0 !== c8)
			if (0 === dG[bA] || as.a4E(bA) === as.at(bA)) c8 = 0;
			else
				for (a2 = c8 - 2; 0 <= a2; a2 -= 2)(dp = a4D[a2]) < bM && 0 === dG[dp] ? remove(a2) : (dK = a4D[a2 + 1], (bM <= dp && rc(bA) || dp < bM && rh(bA, dp)) && (et.iT.ig(dK, dp), remove(a2)))
	}, this.rT = function(dp, dK) {
		! function(dp, dK) {
			var a2;
			for (a2 = 0; a2 < c8; a2 += 2)
				if (a4D[a2] === dp) return a4D[a2 + 1] = Math.min(a4D[a2 + 1] + dK, 1023), 1;
			return
		}(dp, dK) && 32 !== c8 && (a4D[c8] = dp, a4D[c8 + 1] = dK, c8 += 2)
	}
}

function a4G(player) {
	a4H(player), a4I(player), a4J(player), b8.b9(player), fb.gQ(player), as.kG(player), dY.a4K.a4L(player)
}

function a4H(player) {
	bJ.rZ(player) && n1++;
	var a4M = as.a4N(player);
	0 === a4M.length ? player === bA && a4O() : (a4P(player, a4M), a4Q(player, a4M))
}

function a4O() {
	bE.bF[17] += bB[bA] + as.a4R(bA), fr.show(!1, !1), fT.yP()
}

function a4P(player, a4M) {
	for (var a2 = a4M.length - 1; 0 <= a2; a2--) as.a4S(a4M[a2], player)
}

function a4T(a4M) {
	for (var c8 = 0, a2 = a4M.length - 1; 1 <= a2; a2--) bi[a4M[a2]] > bi[a4M[c8]] && (c8 = a2);
	return c8
}

function a4Q(player, a4M) {
	var a2, t7, a4U = a4M[a4T(a4M)];
	if (9 === fF && 1 === ep.eq[player] && e0.ei(8) && fL.a4V(a4U), player === bA) 2 !== dH[player] && fR.mq(a4U, 1), a4O();
	else {
		for (t7 = !1, a2 = a4M.length - 1; 0 <= a2; a2--)
			if (a4M[a2] === bA) return t7 = !0, void fR.mq(player, 0);
		!t7 && player < dF && 2 !== dH[player] && fR.sm(0, player, a4U)
	}
}

function a4J(player) {
	dG[player] = bB[player] = 0, bI[player] = null, ba[player] = null, bb[player] = null, be[player] = null, fZ.a4W(player)
}

function a4I(player) {
	for (var bP, gW, gV = eK[player]; gV >= eL[player]; gV--)
		for (gW = eN[player]; gW >= eO[player]; gW--) bP = 4 * (gW * an + gV), bJ.lp(player, bP) && (bJ.lq(bP), bi[player]--)
}

function qt() {
	var input;

	function a4X(nR) {
		a4Z(nR.target.files)
	}

	function a4Z(files) {
		files && 0 < files.length && oG.a4a(files[0])
	}

	function a4g(nR) {
		var eo = new Image;
		eo.onload = a4h, eo.src = nR.target.result
	}

	function a4h(nR) {
		var a4i, nR = nR.target,
			cG = nR.width,
			eH = nR.height;
		4096 < cG || 4096 < eH || cG < 10 || eH < 10 ? (a4i = "Image w & h must be between 10 and 4096.", e ? e.showToast(a4i) : alert(a4i)) : (lA = a4j, a21 = 0, an = cG, ao = eH, km.width = an, km.height = ao, ki.drawImage(nR, 0, 0), a4i = ki
			.getImageData(0, 0, an, ao), kn = a4i.data)
	}

	function a4k(nR) {
		nR.stopPropagation(), nR.preventDefault()
	}

	function a4l() {
		return 0 === aH.oM() || 2 === aH.oM()
	}
	this.c5 = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = a4X
	}, this.a2d = function() {
		input.click()
	}, this.a4Y = function(nR) {
		a4X(nR)
	}, this.a4a = function(a4b) {
		var aR = a4b.name.split("."),
			a4c = aR[aR.length - 1].toLowerCase();
		"json" === a4c ? fB.a4e(a4b) : "gif" !== a4c && "jpg" !== a4c && "jpeg" !== a4c && "png" !== a4c || (fB.a4f = aR[0], (a4c = new FileReader).onload = a4g, a4c.readAsDataURL(a4b))
	}, this.nn = function(nR) {
		a4l() && (a4k(nR), nR.dataTransfer.dropEffect = "copy")
	}, this.no = function(nR) {
		a4l() && (a4k(nR), a4Z(nR.dataTransfer.files))
	}
}

function qr() {
	this.a4m = null, this.c5 = function() {
		this.a4m = 10 !== fF ? null : new Uint32Array(bM)
	}, this.eY = function() {
		10 === fF && this.a4n()
	}, this.a4n = function() {
		for (var bP, target, yc, a4m = this.a4m, mA = es, oy = bB, a2 = er - 1; 0 <= a2; a2--) bP = mA[a2], dF <= bP || (target = Math.max(b6(oy[bP], 4), 2048), yc = Math.max(bC.yd(bP), 100), a4m[bP] += b6(yc * target, 1e4), a4m[bP] > target && (
			a4m[bP] = target))
	}, this.p4 = function(player, dq) {
		return dq > this.a4m[player] ? (dq = this.a4m[player], this.a4m[player] = 0) : this.a4m[player] -= dq, dq
	}
}

function qu() {
	function a4g(nR) {
		fB.fC = !0, fB.a4t(JSON.parse(nR.target.result)), fB.uA()
	}

	function a4x(j, min, max, a56) {
		return "string" != typeof j || j.length < min ? a56 : j.length > max ? j.substring(0, max) : j
	}

	function a4u(aF, min, max) {
		return aF = "number" == typeof aF ? Math.floor(aF) : min, Math.min(Math.max(aF, min), max)
	}

	function a4w(aF, a58) {
		return "boolean" == typeof aF ? aF : a58
	}

	function a4z(aF, bH, max, a59) {
		var a2, aR, kY;
		if (!Array.isArray(aF) || aF.length < 1) return null;
		for (aR = new(8 === a59 ? Uint8Array : Uint16Array)(bH), kY = aF.length, a2 = 0; a2 < bH; a2++) aR[a2] = a4u(aF[a2 % kY], 0, max);
		return aR
	}
	this.fC = !1, this.fD = null, this.a4f = "", this.oB = function() {
		this.fC = !1, this.fD = null
	}, this.a2Z = function() {
		this.fD.a3c && this.fD.a4o && (this.fD.a3c[0] = cQ.sE[2].mu.a0D()), pM(this.fD.a4p, 0, this.a4q(), this.fD.pP, !1, !1)
	}, this.a4q = function() {
		return [{
			name: this.fD.a4r ? pj.a2a() : this.fD.a4s[0],
			a2b: [0, 0, 0],
			a2c: 0
		}]
	}, this.a4e = function(a4b) {
		var a4d = new FileReader;
		a4d.onload = a4g, a4d.readAsText(a4b)
	}, this.a4t = function(si) {
		this.fD = {}, this.fD.a2V = a4u(si.numberPlayers, 1, 512), this.fD.a4v = a4u(si.modeID, 0, 1), this.fD.lA = a4u(si.mapID, 0, a4j - 1), this.fD.a25 = a4u(si.seedMap, 0, 16383), this.fD.a4p = a4u(si.seedSpawn, 0, 16383), this.fD.pS = a4w(si
				.selectableSpawn, !1), this.fD.a4r = a4w(si.selectableName, !1), this.fD.a4o = a4w(si.selectableColor, !1), this.a4f = this.fD.a4f = a4x(si.mapName, 1, 25, "Custom Map"), this.fD.sR = function(aF) {
				var a2, bH;
				if (!Array.isArray(aF) || aF.length < 1) return [];
				for (bH = aF.length, a2 = 0; a2 < bH; a2++) aF[a2] = a4x(aF[a2], 0, 100, "");
				return aF
			}(si.description), this.fD.lI = a4z(si.playerX, this.fD.a2V, 4096, 16), this.fD.lT = a4z(si.playerY, this.fD.a2V, 4096, 16), this.fD.a50 = a4z(si.playerTeam, this.fD.a2V, 8, 8), this.fD.fE = a4z(si.playerStrength, this.fD.a2V, 5, 8),
			this.fD.a3c = function(aF, bH) {
				var a2, aR, kY;
				if (!Array.isArray(aF) || aF.length < 1) return null;
				for (aR = new Array(bH), kY = aF.length, a2 = 0; a2 < bH; a2++) aR[a2] = a4z(aF[a2 % kY], 3, 63, 8);
				return aR
			}(si.playerColor, this.fD.a2V), this.fD.a4s = function(aF, bH) {
				var a2, aR, kY;
				if (!Array.isArray(aF) || aF.length < 1) return null;
				for (aR = new Array(bH), kY = aF.length, a2 = 0; a2 < bH; a2++) aR[a2] = a4x(aF[a2 % kY], 3, 26, "Bot");
				return aR
			}(si.playerName, this.fD.a2V), this.fD.a53 = "string" == typeof si.mapBase64 ? si.mapBase64 : "", this.fD.a4r = this.fD.a4r || !this.fD.a4s, this.fD.pP = 0 === this.fD.a4v ? 7 : 2 === this.fD.a4v ? 9 : 6, this.fD.lI = this.fD.lT ?
			this.fD.lI : null
	}, this.uA = function() {
		! function(j) {
			var oo, a3D, a55 = "data:image/png;base64,";
			if (j.length <= a55.length) return;
			fB.fD.lA = 0, a2B(fB.fD.a25 = 0, 0), j.substring(0, a55.length) !== a55 && (j = a55 + j);
			return (oo = new Image).onload = function() {
				an = oo.width, ao = oo.height, 4096 < an || 4096 < ao || an < 10 || ao < 10 ? (a2B(0, 0), alert("Image w & h must be between 10 and 4096.")) : (lA = a4j, a21 = 0, km.width = an, km.height = ao, ki.drawImage(oo, 0, 0), a3D = ki
					.getImageData(0, 0, an, ao), kn = a3D.data)
			}, oo.src = j, fB.fD.a53 = "", 1
		}(this.fD.a53) && a2B(this.fD.lA, this.fD.a25)
	}, this.a5A = function() {
		for (var max = 0, bH = this.fD.a2V, a2 = 0; a2 < bH; a2++) this.fD.a50[a2] > max && (max = this.fD.a50[a2]);
		return Math.max(0, max - 1)
	}
}

function qQ() {
	var a5B, a5C, dt, dp, dq, id;

	function a5D(player) {
		return player < dF ? a5B * player : a5B * dF + a5C * (player - dF)
	}
	this.c5 = function() {
		a5B = dF < 16 ? 12 : 8, a5C = 4;
		var bH = a5D(bM);
		dt = new Uint8Array(bM), dp = new Uint16Array(bH), dq = new Uint32Array(bH), id = new Uint16Array(bH)
	}, this.ju = function(v9, a5E) {
		var a5F = this.bw(v9, a5E);
		this.bv(v9, a5E, 0), a5F = he.iV.j9(v9, a5F), v9 === bA && (bE.bF[13] -= a5F)
	}, this.kG = function(player) {
		dt[player] = 0
	}, this.a4S = function(player, a5E) {
		var ex, a5E = function(player, a5E) {
			var a2, kY = a5D(player);
			for (a2 = dt[player] - 1; 0 <= a2; a2--)
				if (0 === id[kY + a2] && dp[kY + a2] === a5E) return a2;
			return dt[player]
		}(player, a5E);
		a5E !== dt[player] && (ex = dq[a5D(player) + a5E], this.bG(player, a5E), this.dl(player, ex, bM))
	}, this.eA = function(player, a5E) {
		for (var kY = a5D(player), a2 = dt[player] - 1; 0 <= a2; a2--)
			if (0 === id[kY + a2] && dp[kY + a2] === a5E) return !0;
		return !1
	}, this.eW = function(player) {
		return player < dF ? dt[player] < a5B : dt[player] < a5C
	}, this.at = function(player) {
		return dt[player]
	}, this.az = function(player, a2) {
		return dp[a5D(player) + a2]
	}, this.au = function(player, a2) {
		return id[a5D(player) + a2]
	}, this.gi = function(player, a5H) {
		for (var kY = a5D(player), a2 = dt[player] - 1; 0 <= a2; a2--)
			if (id[kY + a2] === a5H) return a2;
		return -1
	}, this.b0 = function(player, a2) {
		return dq[a5D(player) + a2]
	}, this.bw = function(player, a5E) {
		for (var kY = a5D(player), a2 = dt[player] - 1; 0 <= a2; a2--)
			if (0 === id[kY + a2] && dp[kY + a2] === a5E) return dq[kY + a2];
		return 0
	}, this.a4R = function(player) {
		for (var kY = a5D(player), aF = 0, a2 = dt[player] - 1; 0 <= a2; a2--) aF += dq[kY + a2];
		return aF
	}, this.a5I = function(player) {
		for (var kY = a5D(player), aF = 0, a2 = dt[player] - 1; 0 <= a2; a2--) 0 === id[kY + a2] && (aF += dq[kY + a2]);
		return aF
	}, this.a4E = function(player) {
		for (var kY = a5D(player), t6 = 0, a2 = dt[player] - 1; 0 <= a2; a2--) 0 < id[kY + a2] && t6++;
		return t6
	}, this.bv = function(player, a5E, ex) {
		for (var kY = a5D(player), a2 = dt[player] - 1; 0 <= a2; a2--) 0 === id[kY + a2] && dp[kY + a2] === a5E && (dq[kY + a2] = ex)
	}, this.bh = function(player, a2, ex) {
		dq[a5D(player) + a2] = ex
	}, this.dl = function(player, ex, a5E) {
		var a2, kY = a5D(player);
		for (a5E === bA && bE.bF[player < dF ? 6 : 5]++, a2 = dt[player] - 1; 0 <= a2; a2--)
			if (0 === id[kY + a2] && dp[kY + a2] === a5E) return dq[kY + a2] += ex, void(dq[kY + a2] = dq[kY + a2] > p0 ? p0 : dq[kY + a2]);
		dp[kY + dt[player]] = a5E, dq[kY + dt[player]] = ex, id[kY + dt[player]] = 0, dt[player]++, player < dF && (a5E === bA ? fR.mq(player, 5) : player === bA && fS.so(a5E))
	}, this.a5J = function(player, ex, a5H) {
		var kY = a5D(player);
		dG[player] = 2, dp[kY + dt[player]] = 0, dq[kY + dt[player]] = ex, id[kY + dt[player]] = a5H, dt[player]++
	}, this.bG = function(player, c8) {
		var dx, kY;
		if (0 !== dt[player])
			for (kY = a5D(player), dt[player]--, dx = c8; dx < dt[player]; dx++) dp[kY + dx] = dp[kY + dx + 1], dq[kY + dx] = dq[kY + dx + 1], id[kY + dx] = id[kY + dx + 1]
	}, this.a4N = function(player) {
		for (var dx, kY, a4M = [], a2 = er - 1; 0 <= a2; a2--)
			for (kY = a5D(es[a2]), dx = dt[es[a2]] - 1; 0 <= dx; dx--)
				if (0 === id[kY + dx] && dp[kY + dx] === player) {
					a4M.push(es[a2]);
					break
				} return a4M
	}
}

function qR() {
	var a5K, a5L, a5M, a5N, a5O, a5P;
	this.c5 = function() {
		a5M = a5K = 10, a5N = a5L = 10
	}, this.a5Q = function() {
		a5P = 512, a5O = new Uint16Array(a5P);
		for (var a2 = 0; a2 < a5P; a2++) a5O[a2] = 100 + c0(b6(25600 * a2, a5P - 4), 9)
	}, this.xK = function() {
		return a5N
	}, this.eY = function() {
		if (--a5M <= 0 && (a5M = a5K, function() {
				var a2, a5V, r = bB[bA];
				for (fH && !di && 0 !== dG[0] && 0 === fI.fJ[0].bR && (bB[0] += b6(bi[0], 6)), a2 = er - 1; 0 <= a2; a2--) a5V = b6(bC.yd(es[a2]) * bB[es[a2]], 1e4), bB[es[a2]] += a5V < 1 ? 1 : a5V, bC.bD(es[a2]);
				bE.bF[9] += bB[bA] - r
			}(), --a5N <= 0)) {
			a5N = a5L;
			for (var r = bB[bA], a2 = er - 1; 0 <= a2; a2--) bB[es[a2]] += bi[es[a2]], bC.bD(es[a2]);
			bE.bF[8] += bB[bA] - r
		}
	}, this.yd = function(player) {
		var mg = a5O[b6((a5P - 1) * bi[player], pH)],
			a5U = (aA.en() < 1920 && (mg = mg < (a5U = b6(100 * (13440 - 6 * aA.en()), 1920)) ? a5U : mg), this.ec(player));
		return bB[player] > a5U && (mg -= b6(2 * mg * (bB[player] - a5U), a5U)), mg < 0 ? 0 : 700 < mg ? 700 : mg
	}, this.ec = function(player) {
		player = 100 * bi[player];
		return pI < player ? pI : player
	}, this.bD = function(player) {
		var aF = bi[player] * oz;
		bB[player] = Math.min(Math.min(bB[player], p0), aF)
	}, this.ii = function(player, ij) {
		he.iV.j9(ij, de.aL[0]), bE.jA(player, ij), fS.a5X(player, de.aL[0] + de.aL[1]), fS.jB(ij, de.aL[0]), he.iV.jh(player)
	}
}

function qS() {
	var a5Y, a5Z, a5a, a5b, a5c, a5d, a5e, a5f, a5g, a5h, a5i, a5j, a5k, a5l, a5m, a5n, a5o, a5p, a5r, a5s, a5t, a5u, a5v, a61, a62, a5q = null,
		a5x = 0,
		a5y = new Float32Array(4),
		a5z = 0,
		a60 = !0;

	function a64() {
		a5q.width = gd, a5q.height = cP, (a5r = a5q.getContext("2d", {
			alpha: !0
		})).textAlign = cX, a5r.textBaseline = cW, a5r.imageSmoothingEnabled = !0
	}

	function a65() {
		var a2, a69;
		for (cV.font = c9 + Math.floor(100 * a5i) + cA, a69 = 80 / Math.floor(cV.measureText(fi.gm(p0)).width), cV.font = c9 + 100 + cA, a2 = bM - 1; 0 <= a2; a2--) a5f[a2] = 100 / Math.floor(cV.measureText(gn[a2]).width), a5e[a2] = Math.min(a69,
			a5f[a2])
	}

	function a6A(a2) {
		return !gj.gk.gl || bB[a2] < 1e6 ? 1 : bB[a2] < 1e7 ? a5y[0] : a5y[Math.min(Math.floor(Math.log10(bB[a2])) - 6, 3)]
	}

	function a68(ou) {
		a5p = !1, a5o = 1, a5m = a5n = 0, a60 ? (ou.textAlign = cX, ou.textBaseline = cW) : ou.clearRect(0, 0, gd, cP);
		var gX, gY, a2, cE, gZ, ga = dL / dM,
			gb = dN / dM,
			gc = (gd + dL) / dM,
			ge = (cP + dN) / dM,
			a6E = 0 !== dG[bA] && bJ.rZ(bA);
		ou.imageSmoothingEnabled = !0;
		for (var dx = er - 1; 0 <= dx; dx--) a2 = es[dx], (cE = a5l * dM * a6A(a2) * a5e[a2] * a5c[a2]) < a5k || a5g <= cE || a5a[a2] + a5c[a2] > ga && a5a[a2] < gc && a5b[a2] + a5d[a2] > gb && a5b[a2] < ge && (gX = gd * (a5a[a2] + a5c[a2] / 2 -
			ga) / (gc - ga), gY = cP * (a5b[a2] + a5d[a2] / 2 - gb) / (ge - gb) - .1 * cE, ou.font = uI[dH[a2]] + cE + cA, ou.fillStyle = function(cE, a2) {
				if (a5h <= cE && cE < a5g) return ep.a6R[bJ.vf[a2]] + a6N(cE).toFixed(3) + ")";
				return ep.a6S[bJ.vf[a2]]
			}(cE, a2), gj.gk.gl ? ou.fillText(fi.gm(bB[a2]), gX, gY) : a6G(a2, cE, gX, gY, ou), a5p = !0, 0 < a5t[a2] ? function(gX, gY, cE, a2, ou) {
				0 === xL[a2] ? a3.uC(a5s[a2]) ? (function(gX, gY, cE, player, iy, ou) {
					for (var ry = .9 * cE / a3.cG, lM = gY - .5 * ry * a3.cG - .05 * cE, tV = (ou.globalAlpha = a6N(cE), a6A(player) * (gj.gk.gl ? a5z : a5f[player])), lL = gX - .5 * cE / tV - .4 * cE - ry * a3.cG, e8 = 0; e8 < 2; e8++)
						ou.setTransform(ry, 0, 0, ry, lL, lM), ou.drawImage(a3.rG[iy], 0, 0), lL = gX + .5 * cE / tV + .4 * cE;
					ou.globalAlpha = 1, ou.setTransform(1, 0, 0, 1, 0, 0)
				}(gX, gY, cE, a2, a5s[a2], ou), a6I(gX, gY, cE, 0, 0, ou)) : a3.uB(a5s[a2]) ? (a6Q(gX, gY, cE, a5s[a2], 0, ou), a6I(gX, gY, cE, 0, 1, ou)) : (a6Q(gX, gY, cE, a5s[a2], 1, ou), a6I(gX, gY, cE, 1, 0, ou)) : a6Q(gX, gY, cE, a5s[
					a2], 0, ou)
			}(gX, gY, cE, a2, ou) : 0 === xL[a2] && a6I(gX, gY, cE, 0, 0, ou), a6E && (0 < a5t[a2 + bM] || 0 < a5t[a2 + 2 * bM] || 0 < a5t[a2 + 3 * bM] || 0 < a5t[a2 + 4 * bM]) && function(gX, gY, cE, a2, ou) {
				var eo, t6 = -1;
				for (eo = 4; 1 <= eo; eo--) 0 < a5t[a2 + eo * bM] && t6++;
				for (eo = 1; eo < 5; eo++) 0 < a5t[a2 + eo * bM] && (! function(gX, gY, cE, eo, a2, a6L, r, ou) {
					var ry = .8 * cE / a3.cG,
						gX = gX - .5 * ry * a3.cG - .534 * a6L * cE,
						a6L = gY + 1.4 * ry * a3.cG;
					ou.setTransform(ry, 0, 0, ry, gX, a6L), ou.globalAlpha = a6N(cE), gY = 1 === eo ? a3.rG[a5s[a2 + bM]] : 2 === eo ? ly.rC()[4].oo[r < 255 ? 1 : 0] : (3 === eo ? ly.rC()[5] : ly.rC()[6]).oo[0];
					ou.drawImage(gY, 0, 0), ou.globalAlpha = 1, ou.setTransform(1, 0, 0, 1, 0, 0)
				}(gX, gY, cE, eo, a2, t6, a5t[a2 + eo * bM], ou), t6 -= 2)
			}(gX, gY, cE, a2, ou), (gZ = a5i * cE) < a5k || (ou.font = c9 + gZ + cA, gj.gk.gl ? a6G(a2, gZ, gX, gY + .78 * cE, ou) : ou.fillText(fi.gm(bB[a2]), gX, gY + .78 * cE)));
		ou.imageSmoothingEnabled = !1
	}

	function a6G(a2, cE, gV, gW, ou) {
		ou.fillText(gn[a2], gV, gW), a2 < dF && 2 !== dH[a2] || (a2 = cE / a5f[a2], ou.fillRect(gV - .5 * a2, gW + .35 * cE, a2, Math.max(1, .1 * cE)))
	}

	function a6I(gX, gY, cE, a6L, a6M, ou) {
		var ry = .95 * cE / a5v,
			gX = gX - .5 * ry * a5u + .8 * a6L * cE,
			a6L = gY - 1.76 * ry * a5v - .82 * a6M * cE;
		ou.setTransform(ry, 0, 0, ry, gX, a6L), ou.globalAlpha = a6N(cE), ou.drawImage(cC.get(4), 0, 0), ou.globalAlpha = 1, ou.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6Q(gX, gY, cE, iy, a6L, ou) {
		var ry = 1.2 * cE / a3.cG,
			gX = gX - .5 * ry * a3.cG - .8 * a6L * cE,
			a6L = gY - 1.5 * ry * a3.cG;
		ou.setTransform(ry, 0, 0, ry, gX, a6L), ou.globalAlpha = a6N(cE), ou.drawImage(a3.rG[iy], 0, 0), ou.globalAlpha = 1, ou.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6N(cE) {
		return a5h <= cE && cE < a5g ? 1 - (cE - a5h) / (a5g - a5h) : 1
	}

	function a6b(tV, cG) {
		return 1 + Math.floor(a5j * tV * cG)
	}

	function a6Y(a2) {
		for (var left = a5a[a2], dx = a5a[a2] - eL[a2] - 1; 0 <= dx; dx--)
			if (!a6d(a2, --left, a5b[a2], a5d[a2])) {
				left++;
				break
			} var a6e = a5a[a2];
		for (dx = eK[a2] - a5a[a2] - a5c[a2]; 0 <= dx; dx--)
			if (!a6d(a2, ++a6e + a5c[a2] - 1, a5b[a2], a5d[a2])) {
				a6e--;
				break
			} var gV = Math.floor((left + a6e) / 2),
			top = a5b[a2];
		for (dx = a5b[a2] - eO[a2] - 1; 0 <= dx; dx--)
			if (!a6f(a2, gV, --top, a5c[a2])) {
				top++;
				break
			} var bottom = a5b[a2];
		for (dx = eN[a2] - a5b[a2] - a5d[a2]; 0 <= dx; dx--)
			if (!a6f(a2, gV, ++bottom + a5d[a2] - 1, a5c[a2])) {
				bottom--;
				break
			} var gW = Math.floor((top + bottom) / 2);
		a6V(a2, gV, gW, a5c[a2], a5d[a2]) && (a5a[a2] = gV, a5b[a2] = gW)
	}

	function a6V(player, gV, gW, cG, eH) {
		bR = Math.floor(.2 * cG);
		for (var bR, eo = gV + cG - 1; gV <= eo; eo--)
			if (!a6d(player, eo, gW, eH)) return;
		for (eo = gW + eH - 1 - (bR = (bR = Math.floor(.25 * eH)) < 1 ? 1 : bR); gW + bR <= eo; eo--)
			if (!a6f(player, gV, eo, cG)) return;
		return 1
	}

	function a6d(player, gV, gW, eH) {
		return bJ.lp(player, 4 * (gW * an + gV)) && bJ.lp(player, 4 * ((gW + eH - 1) * an + gV))
	}

	function a6f(player, gV, gW, cG) {
		return bJ.lp(player, 4 * (gW * an + gV)) && bJ.lp(player, 4 * (gW * an + gV + cG - 1))
	}
	this.c5 = function() {
		if (a5p = !1, a5l = .88, a5i = .5, a5j = 1.8, a5g = Math.floor(.5 * uO), a5h = Math.floor(.2 * a5g), a5k = gj.gk.a63 < 4 ? 1 + gj.gk.a63 : 2 * (gj.gk.a63 - 1), a5Z = a5Y = 0, a5a = new Uint16Array(bM), a5b = new Uint16Array(bM), a5c =
			new Uint16Array(bM), a5d = new Uint16Array(bM), a5e = new Float32Array(bM), a5f = new Float32Array(bM), a5s = new Uint8Array(2 * bM), a5t = new Uint8Array(5 * bM), a61 = new Uint8Array(bM), a62 = new Uint8Array(bM), a60 || (a5q =
				a5q || document.createElement("canvas"), a64()), a5n = a5m = 0, a5o = 1, gj.gk.gl) {
			var a2, a69;
			for (a65(), cV.font = c9 + Math.floor(100) + cA, a69 = 100 / Math.floor(cV.measureText("900 000").width), a2 = bM - 1; 0 <= a2; a2--) a5e[a2] = Math.min(a69, 2 * a5f[a2]);
			a5z = a69, a5y[0] = 100 / (a69 * Math.floor(cV.measureText("5 000 000").width)), a5y[1] = 100 / (a69 * Math.floor(cV.measureText("50 000 000").width)), a5y[2] = 100 / (a69 * Math.floor(cV.measureText("500 000 000").width)), a5y[3] =
				100 / (a69 * Math.floor(cV.measureText("1 000 000 000").width))
		} else a65();
		! function() {
			var a2;
			for (a2 = bM - 1; 0 <= a2; a2--) bi[a2] < 12 ? (a5a[a2] = eL[a2] + 1, a5b[a2] = eO[a2] + 1, a5c[a2] = 1, a5d[a2] = 1) : (a5a[a2] = eL[a2], a5b[a2] = eO[a2] + 1, a5c[a2] = 4, a5d[a2] = 2);
			if (h9)
				for (a2 = 0; a2 < dF; a2++) a5c[a2] = 0;
			a5u = cC.get(4).width, a5v = cC.get(4).height
		}()
	}, this.a5X = function(bP, t9) {
		t9 > 18 * bi[bP] ? (a62[bP] = 6, bJ.vf[bP] = 2 + bJ.vf[bP] % 2) : (a61[bP] = 4, (bJ.vf[bP] < 2 || 3 < bJ.vf[bP]) && (bJ.vf[bP] = 6 + bJ.vf[bP] % 2))
	}, this.jB = function(bP, t9) {
		t9 > 6 * bi[bP] ? (a62[bP] = 6, bJ.vf[bP] = 4 + bJ.vf[bP] % 2) : (a61[bP] = 4, (bJ.vf[bP] < 4 || 5 < bJ.vf[bP]) && (bJ.vf[bP] = 8 + bJ.vf[bP] % 2))
	}, this.resize = function() {
		a60 || (a64(), a68(a5r))
	}, this.pD = function() {
		for (var a2 = 0; a2 < dF; a2++) eK[a2] - eL[a2] != 3 || eN[a2] - eO[a2] != 3 ? (a5a[a2] = eL[a2] + (eK[a2] !== eL[a2] ? 1 : 0), a5b[a2] = eO[a2], a5c[a2] = 1, a5d[a2] = 1) : (a5a[a2] = eL[a2], a5b[a2] = eO[a2] + 1, a5c[a2] = 4, a5d[a2] =
			2)
	}, this.jv = function(player, c8, a6B) {
		player += c8 * bM;
		if (0 === c8) return a5s[player] === a6B && 0 < a5t[player] ? void(a5t[player] = 0) : (a5s[player] = a6B, void(a5t[player] = a3.uC(a6B) ? 255 : 64));
		1 === c8 ? (a5t[player] = 64, a5s[player] = a6B) : a5t[player] = a6B
	}, this.cU = function() {
		a60 ? a68(cV) : a5p && (1 !== a5o ? (cV.imageSmoothingEnabled = !0, cV.setTransform(a5o, 0, 0, a5o, 0, 0), cV.drawImage(a5q, -a5m / a5o, -a5n / a5o), cV.setTransform(1, 0, 0, 1, 0, 0)) : (cV.imageSmoothingEnabled = !1, cV.drawImage(a5q, -
			a5m, -a5n)))
	}, this.wW = function(d7, dA) {
		a5m += d7, a5n += dA
	}, this.nf = function(d7, dA) {
		fS.wW(d7, dA)
	}, this.zoom = function(c3, cM, cN) {
		a5o *= c3, a5m = (a5m + cM) * c3 - cM, a5n = (a5n + cN) * c3 - cN
	}, this.fx = function(tL) {
		return !a60 && (tL ? ++a5x % gj.xs[gj.gk.a6C] == 0 : aA.en() % gj.xs[gj.gk.a6C] == 0) && (a5x = 0, a68(a5r), !0)
	}, this.gg = function(a2) {
		return a6A(a2) * a5e[a2]
	}, this.a6D = function(player) {
		return a5e[player]
	}, this.eY = function() {
		4 <= ++a5Z && ! function() {
			var a2, dx, e8;
			for (a5Z = 0, e8 = 4; 1 <= e8; e8--)
				for (dx = er - 1; 0 <= dx; dx--) a2 = es[dx] + e8 * bM, 0 < a5t[a2] && a5t[a2] < 255 && a5t[a2]--;
			if (2 !== fy)
				for (dx = er - 1; 0 <= dx; dx--) a2 = es[dx], 0 < a5t[a2] && a5t[a2] < 255 && a5t[a2]--
		}();
		for (var bH = Math.floor(.1 * er), a2 = a5Y + (bH = er < (bH = bH < 8 ? 8 : bH) ? er : bH) - 1; a5Y <= a2; a2--) ! function(a2) {
			var tV = a6A(a2) * a5e[a2];
			0 < a5c[a2] && a6V(a2, a5a[a2], a5b[a2], a5c[a2], a5d[a2]) ? ! function(a2) {
				for (var gV, gW, cG, eH, d0 = !1, e8 = 0; e8 < 8; e8++) {
					if (cG = a5c[a2] + 2, eH = a5d[a2] + 2, cG > eK[a2] - eL[a2] + 1 || eH > eN[a2] - eO[a2] + 1) return d0;
					if (gV = a5a[a2] - 1, gW = a5b[a2] - 1, !a6V(a2, gV, gW, cG, eH)) return d0;
					a5a[a2] = gV, a5b[a2] = gW, a5c[a2] = cG, a5d[a2] = eH, d0 = !0
				}
				return d0
			}(a2) && function(a2, tV) {
				for (var gV, gW, cG, eH, d0 = !1, zf = a5c[a2], hN = 1 + Math.floor(.02 * zf), e8 = 1; e8 < 5; e8++) {
					if ((cG = zf + e8 * hN) > eK[a2] - eL[a2] + 1) return d0;
					if ((eH = a6b(tV, cG)) > eN[a2] - eO[a2] + 1) return d0;
					gV = eL[a2] + Math.floor(Math.random() * (eK[a2] - eL[a2] + 2 - cG)), gW = eO[a2] + Math.floor(Math.random() * (eN[a2] - eO[a2] + 2 - eH)), a6V(a2, gV, gW, cG, eH) && (a5a[a2] = gV, a5b[a2] = gW, a5c[a2] = cG, a5d[
						a2] = eH, d0 = !0)
				}
				return d0
			}(a2, tV) && a6Y(a2) : ! function(a2, tV) {
				var eH, gV = a5a[a2] + 1,
					gW = a5b[a2] + 1,
					cG = a5c[a2] - 2;
				for (;;) {
					if (cG < 1) {
						a5c[a2] = 0;
						break
					}
					if (eH = a6b(tV, cG), a6V(a2, gV, gW, cG, eH)) return a5a[a2] = gV, a5b[a2] = gW, a5c[a2] = cG, a5d[a2] = eH, 1;
					gV++, gW++, cG -= 2
				}
				return
			}(a2, tV) ? function(a2, tV) {
				var gV, gW, cG, eH, e8, hT, dz = eK[a2] - eL[a2] + 1,
					a6c = Math.floor(.02 * dz);
				for (hT = -6 * (a6c = a6c < 1 ? 1 : a6c), e8 = dz; hT <= e8; e8 -= a6c)
					if (eH = a6b(tV, cG = 0 < e8 ? e8 : 1), gV = eL[a2] + Math.floor(Math.random() * (eK[a2] - eL[a2] + 2 - cG)), gW = eO[a2] + Math.floor(Math.random() * (eN[a2] - eO[a2] + 2 - eH)), a6V(a2, gV, gW, cG, eH)) return a5a[
						a2] = gV, a5b[a2] = gW, a5c[a2] = cG, a5d[a2] = eH
			}(a2, tV) : a6Y(a2)
		}(es[a2 % er]);
		a5Y = (a5Y + bH) % er
	}, this.ff = function() {
		var a2, bP, ck, cl;
		if (aA.en() % 4 == 1)
			for (a2 = er - 1; 0 <= a2; a2--) bP = es[a2], bJ.vf[bP] < 2 || ((ck = Math.max(a61[bP] - 1, 0)) === (cl = Math.max(a62[bP] - 1, 0)) ? 0 === ck && (bJ.vf[bP] %= 2) : 0 === cl && bJ.vf[bP] < 6 && (bJ.vf[bP] += 4), a61[bP] = ck, a62[
				bP] = cl)
	}, this.so = function(player) {
		var a2 = player + 2 * bM,
			r = a5t[a2];
		return 0 < r && (fR.mp(50, player), a5t[a2] = 0, 255 === r)
	}, this.rf = function(player) {
		return 255 === a5t[player + 2 * bM]
	}
}

function qT() {
	var c4, a6g;
	this.c5 = function() {
		c4 = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var a2, dx, a6h = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			a6i = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (a6g =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), a2 = c4.length - 1; 0 <= a2; a2--)
			for (dx = a6h.length - 1; 0 <= dx; dx--) c4[a2] = c4[a2].replace(a6h[dx], a6i[dx]);
		if (settings.realisticNames) c4 = realisticNames;
	}, this.kS = function() {
		var a2;
		if (fB.fC && fB.fD.a4s)
			for (a2 = dF; a2 < bM; a2++) gn[a2] = fB.fD.a4s[a2 % lN];
		else(9 === fF ? function() {
			var a2, mg = e0.random(),
				bH = c4.length,
				kY = dF + fL.a6o;
			for (a2 = kY - 1; dF <= a2; a2--) gn[a2] = c4[(a2 + mg) % bH];
			for (bH = a6g.length, a2 = kY; a2 < bM; a2++) gn[a2] = a6g[a2 % bH]
		} : fH ? function() {
			var a2, mg = e0.random();
			for (a2 = dF; a2 < bM; a2++) gn[a2] = c4[(a2 + mg) % bM]
		} : function() {
			var a2, bH = c4.length,
				mg = e0.random();
			for (a2 = dF; a2 < bM; a2++) gn[a2] = c4[(a2 + mg) % bH]
		})()
	}, this.pa = function() {
		var a2, bH, kY, mg;
		if (!fH) {
			for (tQ = new Array(dF), bH = dF, a2 = 0; a2 < bH; a2++) tQ[a2] = gn[a2];
			if (gj.gk.tP) {
				for (kY = c4.length, mg = e0.a6n(), a2 = 0; a2 < bH; a2++) gn[a2] = c4[(a2 + mg) % kY];
				gn[bA] = tQ[bA]
			}
		}
	}
}

function qs() {
	this.a6p = [], this.a6q = [], this.c5 = function() {
		this.a6p = [], this.a6q = []
	}, this.eY = function() {
		0 <= this.a6p.length && this.a6r(this.a6p), 0 <= this.a6q.length && this.a6r(this.a6q)
	}, this.a6r = function(aR) {
		for (var e8 = -1, a2 = aR.length - 1; 0 <= a2; a2--)
			if (aR[a2].aB--, aR[a2].aB <= 0) {
				e8 = a2;
				break
			} for (a2 = e8; 0 <= a2; a2--) aR.shift()
	}, this.rQ = function(id, mA, a6s) {
		return this.a6t(this.a6p, id, mA, a6s)
	}, this.a6u = function(id, mA, a6s) {
		return this.a6t(this.a6q, id, mA, a6s)
	}, this.a6t = function(aR, id, mA, a6s) {
		return ! function(aR, id, mA) {
			var a2, l3;
			for (a2 = mA.length - 1; 0 <= a2; a2--)
				for (l3 = aR.length - 1; 0 <= l3; l3--)
					if (aR[l3].player === mA[a2] && id === aR[l3].id) return 1;
			return
		}(aR, id, mA) && (a6s && function(aR, id, mA) {
			var a2;
			for (a2 = mA.length - 1; 0 <= a2; a2--) aR.push({
				player: mA[a2],
				id: id,
				aB: 384
			})
		}(aR, id, mA), !0)
	}
}

function pV(mA) {
	var a2;
	for (gn = new Array(bM), tQ = gn, dG = new Uint8Array(bM), eL = new Uint16Array(bM), eO = new Uint16Array(bM), eK = new Uint16Array(bM), eN = new Uint16Array(bM), bi = new Uint32Array(bM), ld = new Uint32Array(bM), bB = new Uint32Array(bM), bI =
		new Array(bM), ba = new Array(bM), bb = new Array(bM), be = new Array(bM), dH = new Uint8Array(bM), a2 = mA.length - 1; 0 <= a2; a2--) gn[a2] = mA[a2].name, dH[a2] = mA[a2].a2c
}

function qq() {
	this.tb = 0, this.mA = null, this.c5 = function() {
		this.tb = 0, this.mA = []
	}, this.a6x = function(player) {
		this.mA.push(player), n1++, dH[player] = 2, player === bA && (fr.show(!1, !1), fT.yP()), fS.so(player)
	}, this.a4W = function(player) {
		var a2, mA;
		if (2 !== dH[player])
			for (a2 = (mA = this.mA).length - 1; 0 <= a2; a2--)
				if (mA[a2] === player) return void mA.splice(a2, 1)
	}, this.eY = function() {
		fH || (30 === this.tb && 2140 <= aA.en() && this.a6y(), this.tb = (this.tb + 1) % 60)
	}, this.a6y = function() {
		for (var mA = this.mA, a2 = mA.length - 1; 0 <= a2; a2--) ! function(player, dK) {
			!as.eW(player) || (dK = Math.max(Math.min(100, bB[player]), b6(dK * bB[player], 100))) < 100 || (0 === ba[player].length ? !dY.eX.eY(player) && di && eb(player, dK, 0, 0) : (di ? em : ew)(player, dK))
		}(mA[a2], 12)
	}
}

function qm() {
	var a70, a72;
	this.a1N = 5, this.a1O = this.a1N - 1, this.a0W = this.a1N + this.a1O, this.a0V = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.a71 = null;

	function a7A(a2) {
		return a72[a2].a75 && a70[a2].a7A()
	}

	function a7C(a0Z) {
		a72[a0Z].aB = aA.aB, a72[a0Z].a76 = !1
	}
	this.nx = 0, this.a19 = 0, this.c5 = function() {
		this.a71 = new Array(this.a1N);
		this.a71[0] = "territorial.io";
		var a2, a74 = e0.a6n(0);
		for (e0.pU(0), a2 = 1; a2 < this.a1N; a2++) this.a71[a2] = k.mf() + ".territorial.io";
		for (e0.pU(a74), a70 = new Array(this.a0W), a72 = new Array(this.a0W), a2 = this.a0W - 1; 0 <= a2; a2--) a72[a2] = {
			a75: !1,
			aB: 0,
			a76: !1
		}
	}, this.t3 = function() {
		return this.a19 < this.a1N ? this.a19 : this.a19 - this.a1O
	}, this.eY = function() {
		for (var a2 = this.a0W - 1; 0 <= a2; a2--) this.a0R(a2) && aA.aB > a72[a2].aB + 15e3 && id.a77(a2, a72[a2].a76)
	}, this.wo = function(a0Z, a78) {
		if (a72[a0Z].a75) {
			if (a70[a0Z].a7A()) return a70[a0Z].a7B(a78), a70[a0Z].a0R();
			a70[a0Z].k8()
		}
		return this.a79(a0Z, a78), !1
	}, this.a79 = function(a0Z, a78) {
		a72[a0Z].a75 = !0, a7C(a0Z), a70[a0Z] = new a7D, a70[a0Z].c5(a0Z, a78)
	}, this.a7B = function(a0Z, a78) {
		a7A(a0Z) && a70[a0Z].a7B(a78)
	}, this.a7E = function(a0Z, a78) {
		0 === a78 ? oA.wq() : a78 < 3 ? id.zE(a0Z, a78 - 1) : 3 === a78 ? id.a2X(a0Z) : 4 === a78 ? pm.wq(a0Z) : 5 === a78 ? a0Z === this.nx && id.a7F() : 6 !== a78 && 7 === a78 && id.a31(a0Z)
	}, this.a0R = function(a2) {
		return a72[a2].a75 && a70[a2].a0R()
	}, this.send = function(a0Z, jT) {
		a7C(a0Z), a70[a0Z].send(jT)
	}, this.nw = function(a0Z) {
		a72[a0Z].a76 = !0
	}, this.close = function(a0Z, a7G) {
		a7A(a0Z) && a70[a0Z].close(a7G)
	}, this.a7H = function(a0Z, a7G) {
		pn.a0c(a7G), a7A(a0Z) && a70[a0Z].close(a7G)
	}, this.a0e = function(a7G) {
		for (var a2 = this.a0W - 1; 0 <= a2; a2--) this.close(a2, a7G)
	}, this.a7I = function(a0Z, a7G) {
		for (var a2 = this.a0W - 1; 0 <= a2; a2--) a2 !== a0Z && this.close(a2, a7G)
	}, this.a7J = function(a0Z, nR) {
		a70[a0Z].k8(), pn.c5(a0Z, nR.code)
	}
}

function pb() {
	for (er = 0, a2 = bM - 1; 0 <= a2; a2--) 0 !== dG[a2] && er++;
	es = new Uint16Array(er);
	for (var bH = 0, a2 = 0; a2 < bM; a2++) 0 !== dG[a2] && (es[bH++] = a2)
}

function fd() {
	a7K(), a7L()
}

function a7L() {
	for (var a2 = er - 1; 0 <= a2; a2--) 0 === dG[es[a2]] && a7M(a2)
}

function a7M(a2) {
	er--;
	for (var dx = a2; dx < er; dx++) es[dx] = es[dx + 1]
}

function a7K() {
	for (var cp, a2 = er - 1; 0 <= a2; a2--) bi[es[a2]] <= b6(ld[es[a2]], 4) ? bi[es[a2]] <= 1e3 && (2 !== dG[es[a2]] || 0 === bi[es[a2]]) && a4G(es[a2]) : bi[es[a2]] >= ld[es[a2]] ? ld[es[a2]] = bi[es[a2]] : (cp = b6(ld[es[a2]] - bi[es[a2]], 1e3),
		ld[es[a2]] -= cp < 1 ? 1 : cp)
}

function jO() {
	for (var a47 = 0, a2 = er - 1; 0 <= a2; a2--) a47 += bB[es[a2]];
	return a47 % 4096
}
var an, ao, km, ki, kj, kn, lA, a21, kk, aC = 0,
	nY = 0;

function a7T() {
	a7S = 2, a7P = 2172, a7O = 9, a7N = "1.89.5   31 Jan 2024", a7U(), pz(), eS();
	var a7V = document.getElementById("usernameField");
	a7V && document.body.removeChild(a7V), e = "undefined" != typeof Android ? Android : null, 12 <= (d = e ? e.getVersion() : 0) && e.prepareAd("6685097465"), b = !1, window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers
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
		}), e || b || (py.a7W += "_browser"), a7R = (new Date).getTime() % 1024, nX = a7X(), f.c5(), a0x = new zg, gj.c5(), oa.c5(), n(), aE(), a7Y(), kl = new a7Z, hR = new a7a, hb = new yr, a3 = new tj, bE = new a7b, lz = new a7c, a0m = new tS, (
			aA = new a7d).c5(), ep = new a7e, fm = new a7f, (zN = new c2).c5(), (cR = new yx).c5(), oJ = new zV, uL(), e0.c5(), bC.a5Q(), l9.c5(), pX.c5(), aH.c5(), oG.c5(), fV.c5(), oA.c5(), pZ.c5(), o4.c5(), cC.c5(), pv.c5(), px.a1L(), aA.cJ = !0,
		setTimeout(function() {
			a2B(2, 14071)
		}, 0), nY = 2
}

function aG() {
	nY || (nY = 1, nP(), a7T())
}

function a7X() {
	try {
		return window.self !== window.top
	} catch (nR) {
		return !0
	}
}

function a7Y() {
	a7Q = window.location.hostname, nW = 0 <= a7Q.toLowerCase().indexOf("territorial.io")
}

function qU() {
	var a7g;
	this.fM = null, this.c5 = function() {
		a7g = [], 9 === fF && this.a7h()
	}, this.a7h = function() {
		var a2, a7i = [38, 65, 90, 145, 185, 333];
		if (this.a6o = 0, this.fM = [0, 0, 0, 0, 0, 0], dF <= a7i[0]) this.fM[0] = Math.max(bx.by(dF * (512 - dF), a7i[0]), 18), fA = this.fM[0];
		else
			for (fA = bM - dF, a2 = 1; a2 < 6; a2++)
				if (dF <= a7i[a2]) {
					this.fM[a2 - 1] = 512 - a7i[a2 - 1] - b6((512 - a7i[a2 - 1]) * (dF - a7i[a2 - 1]), a7i[a2] - a7i[a2 - 1]), this.fM[a2] = 512 - dF - this.fM[a2 - 1];
					break
				} lN = dF + fA
	}, this.a4V = function(player) {
		a7g.push({
			player: player,
			t6: 14 + e0.e1(20)
		})
	}, this.eY = function() {
		var a2;
		if (9 === fF)
			for (a2 = a7g.length - 1; 0 <= a2; a2--) --a7g[a2].t6 <= 0 && (fS.jv(a7g[a2].player, 0, 46), a7g.splice(a2))
	}
}
var kl, lw, yw, pc, pd, a4j = 19;

function a2B(a7k, a25) {
	((a7k %= a4j) !== lA || a7m(lA) && a25 !== a21) && (kk = !1, kl.a2C(), e0.pU(a7k), a21 = a25, a7m(lA = a7k) && (l9.get(a7k).a74 = a25), a7n(lA) ? a7o() : (a7k = l9.get(lA), an = a7k.cG, ao = a7k.eH, e0.pU(a7k.a74), pp.kS([an, ao, a7k.gs, a7k
		.gp]), a7p(), pX.a7q(), pp.a7r()))
}

function a7s() {
	return 10
}

function a7n(a2) {
	return a2 >= a7s()
}

function a7m(a2) {
	return !(1 === a2 || a2 >= a7s())
}

function a7t(a2) {
	return 3 === a2 || 7 === a2 || 9 === a2 || a2 === a4j
}

function a7u(a2) {
	return 2 === a2 || 7 === a2 || 9 === a2
}

function a7Z() {
	function a84() {
		kl.eY()
	}

	function a89(bP, a88) {
		0 < a88 && (kn[bP] += a88, kn[bP + 1] += a88, kn[bP + 2] += a88)
	}

	function rb(bP) {
		return kn[bP + 2] > kn[bP] && kn[bP + 2] > kn[bP + 1]
	}
	this.wj = -1, this.a8 = 0, this.a7v = 0, this.a7w = 8, this.a7x = 32, this.a7y = 8, this.a7z = 32, this.a80 = [0, 0], this.vf = [0, 0, 0, 0], this.dZ = null, this.a81 = !0, this.a82 = !1, this.a2C = function() {
		-1 !== this.wj && clearTimeout(this.wj), this.wj = -1, this.dZ = null, pp.a7r()
	}, this.c5 = function() {
		7 === aH.oM() || this.a82 || (this.a81 = !0, this.a8 = 0, this.a7v = 1, this.a80 = [l9.get(lA).l8[0], l9.get(lA).lB[0]], this.vf = [l9.get(lA).a83[3], l9.get(lA).a83[4], l9.get(lA).a83[5], l9.get(lA).a83[6]], this.a7w = l9.get(lA).a83[7],
			this.a7x = l9.get(lA).a83[8], this.a7y = l9.get(lA).a83[9], this.a7z = l9.get(lA).a83[10], this.a81 ? this.wj = setTimeout(a84, 16) : this.eY())
	}, this.eY = function() {
		if (8 === aH.oM() && fq.h6()) this.wj = setTimeout(a84, 16);
		else {
			if (0 === this.a8) {
				var a74 = e0.a6n();
				if (e0.pU(l9.get(lA).a83[2]), pp.kS([an, ao, l9.get(lA).a83[0], l9.get(lA).a83[1]]), e0.pU(a74), this.dZ = pp.a85(), this.a8++, this.a81) return void(this.wj = setTimeout(a84, 16))
			}
			for (var bP, cr, a74 = this.a81 ? 10 : 1e6, a74 = ao - this.a7v - 1 < a74 ? ao - this.a7v - 1 : a74, la = this.a7v + a74, gW = this.a7v; gW < la; gW++)
				for (var gV = 1; gV < an - 1; gV++) rb(bP = 4 * (cr = gV + gW * an)) ? this.a86(bP, cr, 1) : (this.a86(bP, cr, 0), function(gV, gW, bP) {
					return 1 < gV && rb(bP - 4) || gV < an - 2 && rb(bP + 4) || 1 < gW && rb(bP - 4 * an) || gW < ao - 2 && rb(bP + 4 * an)
				}(gV, gW, bP) && this.a87(gV, gW));
			this.a7v = la, this.a7v >= ao - 1 ? (ki.putImageData(kj, 0, 0, 1, 1, an - 2, ao - 2), aA.cJ = !0, this.a2C()) : this.a81 && (this.wj = setTimeout(a84, 16))
		}
	}, this.a86 = function(bP, cr, c8) {
		a89(bP, Math.floor(this.a80[c8] + this.vf[c8] * this.dZ[cr] / 1e4) - kn[bP])
	}, this.a8A = function(bP, mg, a8B, c8, vf) {
		a89(bP, Math.floor(this.a80[c8] + (1 - mg / a8B) * vf) - kn[bP])
	}, this.a87 = function(cM, cN) {
		for (var bP, mg, a8B, lE = cM - this.a7x, lF = cN - this.a7x, lb = cM + this.a7x, la = cN + this.a7x, lE = lE < 1 ? 1 : lE, lb = an - 2 < lb ? an - 2 : lb, la = ao - 2 < la ? ao - 2 : la, gW = lF < 1 ? 1 : lF; gW <= la; gW++)
			for (var gV = lE; gV <= lb; gV++) rb(bP = 4 * (gV + gW * an)) ? (a8B = this.a7w + (this.a7x - this.a7w) * this.dZ[gV + an * gW] / 1e4, Math.abs(cM - gV) > a8B || Math.abs(cN - gW) > a8B || a8B <= (mg = Math.sqrt((cM - gV) * (cM -
				gV) + (cN - gW) * (cN - gW))) || this.a8A(bP, mg, a8B, 1, this.vf[3])) : (a8B = this.a7y + (this.a7z - this.a7y) * this.dZ[gV + an * gW] / 1e4, Math.abs(cM - gV) > a8B || Math.abs(cN - gW) > a8B || a8B <= (mg = Math.sqrt((cM -
				gV) * (cM - gV) + (cN - gW) * (cN - gW))) || this.a8A(bP, mg, a8B, 0, this.vf[2]))
	}
}

function a7p() {
	2 === lA ? a8C([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === lA ? a8C([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === lA ? a8C([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === lA && a8C([512], [512], [
		0, 70, 180, 200, 290, 420, 512
	], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function a8C(a8D, a8E, a8F, a8G, a8H) {
	for (var gV, gW, a8J, a8K, c3, a8L, d6 = a8D.length - 1, a8I = an + ao, bH = (a8I *= a8I, a8F.length), a2 = bH - 1; 0 <= a2; a2--) a8F[a2] *= a8F[a2];
	var a8M = new Array(bH),
		a8N = new Array(bH),
		a8O = new Array(bH),
		aF = pp.a85();
	if (void 0 === a8H)
		for (a8H = new Array(bH), a2 = bH - 1; 0 <= a2; a2--) a8H[a2] = 0;
	for (a2 = 1; a2 < bH; a2++) a8M[a2] = a8F[a2] - a8F[a2 - 1], a8N[a2] = a8G[a2] - a8G[a2 - 1], a8O[a2] = a8H[a2] - a8H[a2 - 1];
	for (gV = an - 1; 0 <= gV; gV--)
		for (gW = ao - 1; 0 <= gW; gW--) {
			for (a8J = a8I, a2 = d6; 0 <= a2; a2--) a8J = (a8K = (gV - a8D[a2]) * (gV - a8D[a2]) + (gW - a8E[a2]) * (gW - a8E[a2])) < a8J ? a8K : a8J;
			for (c3 = a8G[bH - 1], a8L = a8H[bH - 1], a2 = 1; a2 < bH; a2++)
				if (a8J < a8F[a2]) {
					c3 = a8G[a2 - 1] + a3m((a8J - a8F[a2 - 1]) * a8N[a2], a8M[a2]), a8L = a8H[a2 - 1] + a3m((a8J - a8F[a2 - 1]) * a8O[a2], a8M[a2]);
					break
				} a8P(an * gW + gV, c3, a8L, aF)
		}
}

function a8P(c8, c3, a8L, aF) {
	c3 < 500 ? aF[c8] = b6(aF[c8] * c3 * 2, 1e3) : 500 < c3 && (aF[c8] += b6(2 * (1e4 - aF[c8]) * (c3 - 500), 1e3)), aF[c8] += b6(a8L * (10 * c3 - aF[c8]), 1e3)
}

function qV() {
	var a8Q;
	this.tH = 0, this.tI = 0, this.tJ = 0, this.tK = 0, this.c5 = function() {
		(a8Q = new Array(a7s()))[0] = {
			cG: [0, 5e3, 8e3, 1e4],
			mg: [220, 250, 255, 220],
			op: [190, 220, 0, 0],
			e8: [170, 200, 0, 0]
		}, a8Q[1] = {
			cG: [0, 4e3, 5e3, 6e3, 1e4],
			mg: [25, 0, 100, 0, 25],
			op: [25, 0, 0, 0, 25],
			e8: [25, 0, 0, 0, 25]
		}, a8Q[2] = {
			cG: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			mg: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			op: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			e8: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, a8Q[3] = {
			cG: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			mg: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			op: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			e8: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, a8Q[4] = {
			cG: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			mg: [10, 10, 20, 10, 10, 170, 212],
			op: [20, 20, 60, 100, 100, 110, 170],
			e8: [70, 70, 160, 30, 30, 60, 120]
		}, a8Q[5] = {
			cG: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			mg: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			op: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			e8: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, a8Q[6] = {
			cG: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			mg: [10, 10, 60, 255, 255, 200, 200],
			op: [10, 10, 60, 255, 255, 200, 200],
			e8: [80, 80, 255, 255, 255, 200, 200]
		}, a8Q[7] = {
			cG: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			mg: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			op: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			e8: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, a8Q[8] = {
			cG: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			mg: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			op: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			e8: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, a8Q[9] = {
			cG: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			mg: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			op: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			e8: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}
	}, this.a7q = function() {
		var a2, dx, aS, a3D = function() {
				var a3D;
				return (km = document.createElement("canvas")).width = an, km.height = ao, ki = km.getContext("2d", {
					alpha: !1
				}), a3D = ki.getImageData(0, 0, an, ao), kn = a3D.data, a3D
			}(),
			cG = a8Q[lA].cG,
			mg = a8Q[lA].mg,
			op = a8Q[lA].op,
			e8 = a8Q[lA].e8,
			aF = pp.a85(),
			bH = cG.length - 2,
			a8V = new Array(1 + bH),
			a8W = new Array(1 + bH),
			a8X = new Array(1 + bH),
			a8Y = new Array(1 + bH);
		for (dx = bH; 0 <= dx; dx--) a8V[dx] = cG[dx + 1] - cG[dx], a8W[dx] = mg[dx + 1] - mg[dx], a8X[dx] = op[dx + 1] - op[dx], a8Y[dx] = e8[dx + 1] - e8[dx];
		for (a2 = an * ao - 1; 0 <= a2; a2--)
			for (dx = bH; 0 <= dx; dx--)
				if (aF[a2] >= cG[dx]) {
					aS = aF[a2] - cG[dx], kn[4 * a2] = mg[dx] + a3m(a8W[dx] * aS, a8V[dx]), kn[4 * a2 + 1] = op[dx] + a3m(a8X[dx] * aS, a8V[dx]), kn[4 * a2 + 2] = e8[dx] + a3m(a8Y[dx] * aS, a8V[dx]), kn[4 * a2 + 3] = 255;
					break
				} ki.putImageData(a3D, 0, 0), l9.a8T() && cC.cD() && l9.a8T() && (a3D = cC.rH("arena"), ki.save(), ki.globalAlpha = 1 === lA ? .1 : 1, ki.imageSmoothingEnabled = !0, ki.scale(2.8, 2.8), ki.drawImage(a3D, Math.floor((an / 2.8 - a3D
			.width) / 2), Math.floor(.5 * ao / 2.8 - a3D.height / 2)), ki.restore(), a3D = cC.rH("territorial.io"), ki.save(), ki.globalAlpha = 1 === lA ? .1 : 1, ki.imageSmoothingEnabled = !0, ki.scale(.87, .87), ki.drawImage(a3D, Math
			.floor(.745 * (an / .87 - a3D.width)), Math.floor(.422 * ao / .87 - a3D.height / 2)), ki.restore()), kk = !0, aA.cJ = !0
	}, this.pY = function() {
		for (var bP, gV, gW, a8b, a8c, aU, tI = 0, cG = an, eH = ao, aS = cG * eH * 4, a8d = yw, a8e = kn, a2 = cG - 1; 0 <= a2; a2--) a8d[(bP = a2 << 2) + 2] = a8d[aS - bP - 2] = 3;
		for (aS = 4 * cG, a2 = eH - 1; 0 <= a2; a2--) a8d[(bP = a2 * aS) + 2] = a8d[bP + aS - 2] = 3;
		for (a8b = cG - 1, a8c = eH - 1, gW = 1; gW < a8c; gW++)
			for (aS = gW * cG, gV = 1; gV < a8b; gV++) aU = 1 - (a8e[(bP = aS + gV << 2) + 2] > a8e[bP + 1] && a8e[bP + 2] > a8e[bP]), a8d[bP + 2] = 2 - aU, tI += aU;
		this.tH = (cG - 2) * (eH - 2), this.tK = 0, a7t(lA) && function() {
			var bP, gV, gW, aS, a8d = yw,
				a8e = kn,
				cG = an,
				a8b = cG - 1,
				a8c = ao - 1,
				t6 = 0;
			for (gW = 1; gW < a8c; gW++)
				for (aS = gW * cG, gV = 1; gV < a8b; gV++) a8e[bP = aS + gV << 2] === a8e[1 + bP] && a8e[bP] === a8e[2 + bP] && (t6++, a8d[2 + bP] = 3);
			pX.tK = t6
		}(), this.tI = pH = tI - this.tK, this.tJ = this.tH - this.tI - this.tK
	}
}

function a7o() {
	var j, a8g = a7s();
	lA === a8g ? j =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		lA === a8g + 1 ? j =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		lA === a8g + 2 ? j =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		lA === a8g + 3 ? j =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		lA === a8g + 4 ? j =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		lA === a8g + 5 ? j =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		lA === a8g + 6 ? j =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		lA === a8g + 7 ? j =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		lA === a8g + 8 && (j =
			"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-"
			), (new kU).kW(j)
}

function qW() {
	var a8Q;
	this.c5 = function() {
		var a8h = [120, 105, 92],
			cos = [12, 12, 60],
			a8i = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			a8j = [140, 130, 120],
			a8k = [12, 12, 76],
			a8l = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			a8m = [130, 117, 106],
			a8n = [12, 12, 68],
			a8o = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		(a8Q = new Array(a4j))[0] = {
			name: "White Arena",
			cG: 230,
			eH: 230,
			gs: 1e3,
			gp: 2e3,
			a74: 173
		}, a8Q[1] = {
			name: "Black Arena",
			cG: 800,
			eH: 800,
			gs: 100,
			gp: 50,
			a74: 43
		}, a8Q[2] = {
			name: "Island",
			cG: 512,
			eH: 512,
			gs: 128,
			gp: 32,
			a74: 0
		}, a8Q[3] = {
			name: "Mountains",
			cG: 960,
			eH: 960,
			gs: 60,
			gp: 8,
			a74: 0
		}, a8Q[4] = {
			name: "Desert",
			cG: 900,
			eH: 900,
			gs: 100,
			gp: 5,
			a74: 0
		}, a8Q[5] = {
			name: "Swamp",
			cG: 1e3,
			eH: 1e3,
			gs: 100,
			gp: 40,
			a74: 0
		}, a8Q[6] = {
			name: "Snow",
			cG: 1e3,
			eH: 1e3,
			gs: 100,
			gp: 20,
			a74: 0
		}, a8Q[7] = {
			name: "Cliffs",
			cG: 1024,
			eH: 1024,
			gs: 128,
			gp: 32,
			a74: 0
		}, a8Q[8] = {
			name: "Pond",
			cG: 820,
			eH: 820,
			gs: 200,
			gp: 100,
			a74: 0
		}, a8Q[9] = {
			name: "Halo",
			cG: 1024,
			eH: 1024,
			gs: 128,
			gp: 32,
			a74: 0
		}, a8Q[10] = {
			name: "Europe",
			l8: a8j,
			lB: a8k,
			a83: a8l
		}, a8Q[11] = {
			name: "World",
			l8: a8m,
			lB: a8n,
			a83: a8o
		}, a8Q[12] = {
			name: "Caucasia",
			l8: a8m,
			lB: a8n,
			a83: a8o
		}, a8Q[13] = {
			name: "Africa",
			l8: a8h,
			lB: cos,
			a83: a8i
		}, a8Q[14] = {
			name: "Middle East",
			l8: a8h,
			lB: cos,
			a83: a8i
		}, a8Q[15] = {
			name: "Scandinavia",
			l8: a8j,
			lB: a8k,
			a83: a8l
		}, a8Q[16] = {
			name: "North America",
			l8: a8j,
			lB: a8k,
			a83: a8l
		}, a8Q[17] = {
			name: "South America",
			l8: a8h,
			lB: cos,
			a83: a8i
		}, a8Q[18] = {
			name: "Asia",
			l8: a8m,
			lB: a8n,
			a83: a8o
		}
	}, this.a8T = function() {
		return 1 === lA
	}, this.get = function(a2) {
		return a8Q[a2]
	}, this.tG = function() {
		return lA === a4j ? fB.a4f : this.get(lA).name
	}
}

function pW() {
	(lw = void 0 === lw ? document.createElement("canvas") : lw).width = an, lw.height = ao, pc = lw.getContext("2d", {
		alpha: !0
	}), pd = pc.getImageData(0, 0, an, ao), yw = pd.data, he.ko.kp(yw)
}

function qX() {
	var aF, cG, eH, max, a8p, gp, a8r, a8s, a8t, a8u, a8v, a8w, a8x, a8y, a8q = 1e4;

	function a96(a95, gs, bH) {
		var a2;
		for (a8r[0] = a95, a2 = 1; a2 < bH; a2++) a8r[a2] = a8r[a2 - 1] + gs, gs = a8r[a2] >= a8q ? (a8r[a2] = a8q - 1, -gs) : a8r[a2] < 0 ? (a8r[a2] = 0, -gs) : (gs += 16384 <= e0.random() ? gp : -gp) < -a8p ? -a8p : a8p < gs ? a8p : gs
	}

	function a98(gV, gW, a99, bH) {
		(a99 ? function(gV, gW, bH) {
			var a2;
			for (a2 = 0; a2 < bH; a2++) aF[gW * cG + gV + a2] = a8r[a2]
		} : function(gV, gW, bH) {
			var a2;
			for (a2 = 0; a2 < bH; a2++) aF[gW * cG + gV + a2 * cG] = a8r[a2]
		})(gV, gW, bH)
	}

	function a9C(value, bH) {
		var a2, a6c, d0, cp = value - a8r[bH - 1];
		if (0 != cp) {
			for (a6c = 1 + b6(Math.abs(cp), bH - 1), a6c = cp < 0 ? -a6c : a6c, a8r[bH - 1] = value, d0 = (d0 = bH - 1 - b6(Math.abs(cp), Math.abs(a6c))) < 1 ? 1 : bH - 2 < d0 ? bH - 2 : d0, a2 = bH - 2; d0 <= a2; a2--) a8r[a2] += cp - (bH - 1 -
				a2) * a6c;
			(cp < 0 ? function(bH) {
				var a2;
				for (a2 = bH - 2; 1 <= a2; a2--) a8r[a2] < 0 && (a8r[a2] = -a8r[a2] - 1)
			} : function(bH) {
				var a2;
				for (a2 = bH - 2; 1 <= a2; a2--) a8r[a2] >= a8q && (a8r[a2] = 2 * a8q - a8r[a2] - 1)
			})(bH)
		}
	}

	function a9F(a9G, a9H, bH) {
		for (var a2 = 0; a2 < bH; a2++) a9G[a2] = a9H[a2]
	}

	function a9I(aR) {
		for (var a2 = 0; a2 < aR.length - 1; a2++) aR[a2] = aR[a2 + 1] - aR[a2];
		aR[aR.length - 1] = aR[aR.length - 3]
	}

	function a9J(rK, lZ, co) {
		a8s.push(rK), a8t.push(lZ), a8u.push(co)
	}
	this.kS = function(a8z) {
		! function(a8z) {
			var a2;
			for (cG = a8z[0], eH = a8z[1], a8p = a8z[2], gp = a8z[3], aF = new Int16Array(cG * eH), max = eH < cG ? cG : eH, a8r = new Int16Array(max), a8s = [], a8t = [], a8u = [], a8v = new Array(cG), a8w = new Array(eH), a2 = cG - 1; 0 <=
				a2; a2--) a8v[a2] = !1;
			for (a2 = eH - 1; 0 <= a2; a2--) a8w[a2] = !1;
			a8x = new Int16Array(cG), a8y = new Int16Array(eH)
		}(a8z),
		function(bH) {
			var a95 = e0.random() % a8q,
				gs = e0.random() % (2 * a8p + 1) - a8p;
			a96(a95, gs, bH)
		}(max), a9F(a8y, a8r, eH), a98(0, 0, !0, cG);
		var gV, gW, a8z = aF[0],
			bH = max,
			gs = e0.random() % (2 * a8p + 1) - a8p;
		for (a96(a8z, gs, bH), a9F(a8x, a8r, cG), a98(0, 0, !1, eH), a9I(a8x), a9I(a8y), a96(aF[cG - 1], a8x[cG - 1], eH), a98(cG - 1, 0, !1, eH), a96(aF[cG * (eH - 1)], a8y[eH - 1], cG), a9C(aF[cG * eH - 1], cG), a98(0, eH - 1, !0, cG), a8v[cG -
				1] = a8v[0] = !0, a8w[eH - 1] = a8w[0] = !0, a9J(0, cG, !0), a9J(0, eH, !1), ! function() {
				var a9L, rK;
				for (;;) {
					if (a9L = function() {
							var a2, a9L = a8s.length - 1;
							for (a2 = a9L - 1; 0 <= a2; a2--) a8t[a2] > a8t[a9L] && (a9L = a2);
							return a9L
						}(), a8t[a9L] < 5) return;
					rK = a8s[a9L] + b6(a8t[a9L], 2), (a8u[a9L] ? function(gV) {
						var bH, a9O, a2, a03 = 0,
							a9P = 0;
						for (; a9P < eH - 1;) {
							for (a2 = a03 + 1; a2 < eH; a2++)
								if (a8w[a2]) {
									a9P = a2;
									break
								} bH = a9P - a03 + 1, a96(aF[gV + cG * a03], 0 === a03 ? a8x[gV] : a8r[a9O - 1] - a8r[a9O - 2], bH), a9C(aF[a9P * cG + gV], bH), a98(gV, a03, !1, bH), a9O = bH, a03 = a9P
						}
						a8v[gV] = !0
					} : function(gW) {
						var bH, a9O, a2, a03 = 0,
							a9P = 0;
						for (; a9P < cG - 1;) {
							for (a2 = a03 + 1; a2 < cG; a2++)
								if (a8v[a2]) {
									a9P = a2;
									break
								} bH = a9P - a03 + 1, a96(aF[gW * cG + a03], 0 === a03 ? a8y[gW] : a8r[a9O - 1] - a8r[a9O - 2], bH), a9C(aF[gW * cG + a9P], bH), a98(a03, gW, !0, bH), a9O = bH, a03 = a9P
						}
						a8w[gW] = !0
					})(rK), a9J(rK, a8s[a9L] + a8t[a9L] - rK, a8u[a9L]), a8t[a9L] = rK - a8s[a9L] + 1
				}
			}(), gV = 0; gV < cG; gV++)
			if (!a8v[gV])
				for (gW = 0; gW < eH; gW++) a8w[gW] || ! function(gV, gW) {
					var value = aF[gW * cG + gV - 1] + aF[(gW - 1) * cG + gV],
						th = 2;
					a8v[gV + 1] && (th++, value += aF[gW * cG + gV + 1]);
					a8w[gW + 1] && (th++, value += aF[(gW + 1) * cG + gV]);
					aF[gW * cG + gV] = b6(value, th)
				}(gV, gW)
	}, this.a85 = function() {
		return aF
	}, this.a7r = function() {
		aF = null
	}
}

function b6(dx, e8) {
	return Math.floor(dx / e8 + 1 / (2 * e8))
}

function a3m(dx, e8) {
	return 0 <= dx ? b6(dx, e8) : -b6(-dx, e8)
}

function eQ(aF) {
	return aF * aF
}

function sb(dx, e8) {
	return e8 < dx ? dx : e8
}

function vW(dx, e8) {
	return dx < e8 ? dx : e8
}

function vw(dx, aF, e8) {
	return aF < dx ? dx : e8 < aF ? e8 : aF
}

function a9R(aF, bH) {
	for (var eo = b6(aF + 1, 2), a2 = 0; a2 < bH; a2++) eo = b6(eo + b6(aF, eo), 2);
	return eo
}

function c0(aF, bH) {
	return aF < 1 ? 0 : a9R(aF, bH)
}

function a9S(ga, gb, m6, tT, gc, ge, m7, tU) {
	return !(ga + m6 <= gc || gb + tT <= ge || gc + m7 <= ga || ge + tU <= gb)
}

function a9T(ga, gb, m6, tT, gc, ge, m7, tU) {
	return ga <= gc && gb <= ge && gc + m7 <= ga + m6 && ge + tU <= gb + tT
}

function kf(aF) {
	return Math.floor(!!aF * (1 + Math.log2(aF + .5)))
}

function q0() {
	this.by = function(dx, e8) {
		return Math.floor((dx + .5) / e8)
	}, this.a9U = function(dx, e8) {
		return Math.floor(dx * (e8 + .5))
	}, this.sqrt = function(aF) {
		return ~~Math.sqrt(aF + .5)
	}, this.pow = function(nR) {
		return Math.floor(Math.pow(2, nR) + .5)
	}, this.on = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.a9V = function(aS, aU, aW) {
		return Math.max(Math.min(aS, aU), aW)
	}, this.a9W = function(a9X, a9Y, gV, gW) {
		gV -= a9X, a9X = gW - a9Y, gW = 0;
		return 0 == gV ? gW = 0 <= a9X ? Math.PI : 0 : (gW = Math.a9Z(a9X / gV), gW += 0 < gV ? .5 * Math.PI : 1.5 * Math.PI), gW
	}, this.log2 = function(aF) {
		return Math.floor(!!aF * (1 + Math.log2(aF + .5)))
	}
}

function a7U() {
	"function" != typeof Math.log2 && (Math.log2 = function(gV) {
		return Math.log(gV) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(gV) {
		return Math.log(gV) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(gV) {
		return 0 < gV ? 1 : gV < 0 ? -1 : 0
	})
}

function qo() {
	this.a2z = 0;
	var yy = -1,
		a9a = !1,
		uw = [],
		a9b = 0;

	function oI(gV, gW, a9k, a2) {
		return 0 === a2 ? gV >= a9k.ga && (0 === a2 || gW >= a9k.gb) && gW <= a9k.gb + a9k.tT : (gW -= a2 * (a9k.tT - ot), gV >= a9k.gc && gW >= a9k.gb && gW <= a9k.gb + a9k.tT)
	}

	function a9l() {
		var m6 = Math.floor((o ? .145 : .09) * c6),
			m7 = Math.floor(2.25 * m6),
			lZ = Math.floor(.065 * (o ? .53 : .36) * c6),
			gc = p - m7 - lZ;
		return {
			ga: p - m6 - lZ,
			gb: cO,
			m6: m6,
			tT: Math.floor(.35 * (1 + .35 * o) * m6),
			gc: gc,
			m7: m7,
			wU: lZ
		}
	}

	function a0H(gV, gW, cG, eH, mg, op, e8, a9t, j) {
		var cE = (j === uw[0][0].name ? .65 : .5) * eH,
			font = he.hf.kA(cE, 1),
			font = cH.measureText(j, font);
		.92 * cG < font && (cE *= .92 * cG / font), cV.font = he.hf.kA(cE, 1), a9t && (mg += 80, op += 80, e8 += 80), cV.fillStyle = "rgba(" + mg + "," + op + "," + e8 + ",0.6)", cV.fillRect(gV, gW, cG, eH), cV.fillStyle = cY.cZ, cV.fillRect(gV, gW,
			cG, ot), cV.fillRect(gV, gW + eH - ot, cG, ot), cV.fillRect(gV, gW, ot, eH), cV.fillRect(gV + cG - ot, gW, ot, eH), cV.fillText(j, Math.floor(gV + cG / 2), Math.floor(gW + eH / 2 + .1 * cE))
	}
	this.gk = null, this.xs = new Uint8Array(4), this.se = function() {
		return b ? 4 : o ? 2 : 1
	}, this.c5 = function() {
		var a9d;
		this.a9c(), uw = [new Array(6), new Array(10), new Array(7)], this.xs[0] = 10, this.xs[1] = 5, this.xs[2] = 2, this.xs[3] = 1, uw[0][0] = {
			name: "More",
			id: 0,
			mg: 140,
			op: 120,
			e8: 0
		}, uw[0][1] = {
			name: "Lobby 1",
			id: 1,
			mg: 0,
			op: 0,
			e8: 0
		}, uw[0][2] = {
			name: "Settings",
			id: 2,
			mg: 0,
			op: 0,
			e8: 0
		}, uw[0][3] = {
			name: "More Information",
			id: 3,
			mg: 0,
			op: 0,
			e8: 0
		}, uw[0][4] = {
			name: "Replay",
			id: 4,
			mg: 0,
			op: 0,
			e8: 0
		}, uw[0][5] = {
			name: a7N,
			id: 5,
			mg: 90,
			op: 0,
			e8: 0
		}, uw[0].push({
			name: "FX Client v" + fx_version + " " + fx_update,
			id: 20,
			mg: 0,
			op: 0,
			e8: 70
		}), uw[1][0] = uw[0][0], uw[1][1] = {
			name: "Hide Usernames",
			id: 1,
			mg: 0,
			op: 0,
			e8: 0
		}, uw[1][2] = {
			name: "Hide Links",
			id: 2,
			mg: 0,
			op: 0,
			e8: 0
		}, uw[1][3] = {
			name: "Hide Zoom Buttons",
			id: 3,
			mg: 0,
			op: 0,
			e8: 0
		}, uw[1][4] = {
			name: "Reverse Name/Balance",
			id: 4,
			mg: 0,
			op: 0,
			e8: 0
		}, uw[1][5] = {
			name: "Resolution",
			id: 5,
			mg: 0,
			op: 0,
			e8: 0
		}, uw[1][6] = {
			name: "Country Minimum Font Size",
			id: 6,
			mg: 0,
			op: 0,
			e8: 0
		}, uw[1][7] = {
			name: "Leaderboard Refresh Rate",
			id: 7,
			mg: 0,
			op: 0,
			e8: 0
		}, uw[1][8] = {
			name: "Reset Settings",
			id: 8,
			mg: 0,
			op: 0,
			e8: 0
		}, uw[1][9] = {
			name: "Back",
			id: 9,
			mg: 0,
			op: 0,
			e8: 0
		}, uw[2][0] = uw[0][0], uw[2][1] = {
			name: "Tutorial",
			id: 1,
			mg: 0,
			op: 0,
			e8: 0
		}, uw[2][2] = {
			name: "Player List",
			id: 2,
			mg: 0,
			op: 0,
			e8: 0
		}, uw[2][3] = {
			name: "Clan List",
			id: 3,
			mg: 0,
			op: 0,
			e8: 0
		}, uw[2][4] = {
			name: "Privacy Policy",
			id: 4,
			mg: 0,
			op: 0,
			e8: 0
		}, uw[2][5] = {
			name: "Changelog",
			id: 13,
			mg: 0,
			op: 0,
			e8: 0
		}, uw[2][6] = {
			name: "Terms of Service",
			id: 14,
			mg: 0,
			op: 0,
			e8: 0
		}, !b && d < 5 && uw[2].push({
			name: "Cookie Policy",
			id: 5,
			mg: 0,
			op: 0,
			e8: 0
		}), (b || 5 <= d) && (b ? !c.mustShowConsentButton || "0" !== c.mustShowConsentButton && "1" !== c.mustShowConsentButton || uw[2].push({
			name: "Consent Form",
			id: 7,
			mg: 0,
			op: 0,
			e8: 0
		}) : "" !== (a9d = e.loadString(187)) && "1" !== a9d || uw[2].push({
			name: "Consent Form",
			id: 7,
			mg: 0,
			op: 0,
			e8: 0
		})), 5 <= d && uw[2].push({
			name: "Force Restart Game",
			id: 12,
			mg: 0,
			op: 0,
			e8: 0
		}), uw[2].push({
			name: "Back",
			id: 6,
			mg: 0,
			op: 0,
			e8: 0
		}), this.a9e(), this.a9f()
	}, this.a9c = function() {
		this.gk = {
			tP: 0,
			a9g: 0,
			wN: 0,
			gl: 1,
			a9h: 2,
			a63: 4,
			xt: 2,
			a6C: 2
		}
	}, this.a9f = function() {
		if (settings.hideAllLinks) a0x.aW[0] = a0x.aW[1] = !this.gk.a9g;
		else a0x.aW[0] = a0x.aW[1] = true;
		a0x.aW[2] = a0x.aW[3] = a0x.aW[4] = !this.gk.a9g, uw[1][1].op = this.gk.tP ? 130 : 0, uw[1][2].op = this.gk.a9g ? 130 : 0, uw[1][3].op = this.gk.wN ? 130 : 0, uw[1][4].op = this.gk.gl ? 130 : 0, this.a9i(5), this.a9i(6), this.a9i(7)
	}, this.a9e = function() {
		var ru = t().split("");
		ru.length < 14 ? this.a9c() : (this.gk.tP = parseInt(ru[6]), this.gk.a9g = parseInt(ru[7]), this.gk.wN = parseInt(ru[8]), this.gk.gl = parseInt(ru[9]), this.gk.a9h = parseInt(ru[10]), this.gk.a63 = parseInt(ru[11]), this.gk.xt = parseInt(
			ru[12]))
	}, this.a0G = function() {
		var j = cQ.sE[2].mu.a0E();
		a6((j += ~~this.gk.tP) + ~~this.gk.a9g + ~~this.gk.wN + ~~this.gk.gl + ~~this.gk.a9h + ~~this.gk.a63 + ~~this.gk.xt + "0")
	}, this.a9i = function(a2) {
		5 === a2 ? uw[1][a2].name = "Resolution: " + fT.tF(100 * oa.a9j(), 1) : 6 === a2 ? uw[1][a2].name = "Country Minimum Font Size: " + (this.gk.a63 < 4 ? 1 + this.gk.a63 : 2 * (this.gk.a63 - 1)) : 7 === a2 && (uw[1][a2].name =
			"Leaderboard Refresh Rate: " + fT.tF(100 / this.xs[this.gk.xt], 1))
	}, this.cL = function(gV, gW) {
		var a2, a9k, a9n;
		if (!(7 <= aH.oM())) {
			a9k = a9l();
			var gearIconX = a9k.ga - a9k.m6 / 2;
			if (gV > gearIconX && gV < (gearIconX + a9k.tT) && gW > a9k.gb && gW < (a9k.gb + a9k.tT)) return WindowManager.openWindow("settings");
			if (a9a) {
				for (a2 = 1; a2 < uw[a9b].length; a2++)
					if (oI(gV, gW, a9k, a2)) return a9n = uw[a9b][a2], 0 === a9b ? 1 === a9n.id ? (gj.a2z = (gj.a2z + 1) % 4, a9n.name = (gj.a2z % 2 ? "Proxy " : "Lobby ") + (1 + (gj.a2z >> 1)), aA.cJ = !0) : 2 === a9n.id ? (a9b = 1, aA.cJ = !
						0) : 3 === a9n.id ? (a9b = 2, aA.cJ = !0) : 4 === a9n.id && k7.show() : 1 === a9b ? 1 === a9n.id ? (gj.gk.tP = !gj.gk.tP, a9n.op = gj.gk.tP ? 130 : 0, gj.a0G(), aA.cJ = !0) : 2 === a9n.id ? (gj.gk.a9g = !gj.gk.a9g, gj
							.a9f(), gj.a0G(), aA.cJ = !0) : 3 === a9n.id ? (gj.gk.wN = !gj.gk.wN, a9n.op = gj.gk.wN ? 130 : 0, gj.a0G(), aA.cJ = !0) : 4 === a9n.id ? (gj.gk.gl = !gj.gk.gl, a9n.op = gj.gk.gl ? 130 : 0, gj.a0G(), aA.cJ = !0) :
						5 === a9n.id ? (gj.gk.a9h++, gj.gk.a9h %= 8, gj.a9i(a9n.id), gj.a0G(), oa.a2k(1), aA.cJ = !0) : 6 === a9n.id ? (gj.gk.a63++, gj.gk.a63 %= 10, gj.a9i(a9n.id), gj.a0G(), aA.cJ = !0) : 7 === a9n.id ? (gj.gk.xt++, gj.gk
							.xt %= 4, gj.a9i(a9n.id), gj.a0G(), aA.cJ = !0) : 8 === a9n.id ? (gj.a9c(), gj.a9f(), gj.a0G(), oa.a2k(1), aA.cJ = !0) : 9 === a9n.id && (a9b = 0, aA.cJ = !0) : 1 === a9n.id ? (oJ.c5(py.a9o, !0), oJ.c5(py.a9o, !
						1)) : 2 === a9n.id ? (oJ.c5(py.a9p, !0), oJ.c5(py.a9p, !1)) : 3 === a9n.id ? (oJ.c5(py.a9q, !0), oJ.c5(py.a9q, !1)) : 4 === a9n.id ? (oJ.c5(py.a7W, !0), oJ.c5(py.a7W, !1)) : 5 === a9n.id ? (oJ.c5(py.tY, !0), oJ.c5(py
							.tY, !1)) : 13 === a9n.id ? (oJ.c5(py.a9r, !0), oJ.c5(py.a9r, !1)) : 14 === a9n.id ? (oJ.c5(py.a9s, !0), oJ.c5(py.a9s, !1)) : 6 === a9n.id ? (a9b = 0, aA.cJ = !0) : 7 === a9n.id ? b ? window.webkit.messageHandlers
						.iosCommandA.postMessage("showConsentForm") : e.setState(7) : 12 === a9n.id && e.setState(14), !0;
				return a9a = !1, !(aA.cJ = !0)
			}
			return !!oI(gV, gW, a9k, 0) && (a9a = !(a9b = 0), aA.cJ = !0)
		}
	}, this.nf = function(gV, gW) {
		var a2, a9k, oq, hT;
		if (!(7 <= aH.oM())) {
			for (a9k = a9l(), oq = yy, hT = a9a ? 0 === a9b ? uw[a9b].length - 2 : uw[a9b].length : 1, yy = -1, a2 = 0; a2 < hT; a2++)
				if (oI(gV, gW, a9k, a2)) {
					yy = a2;
					break
				} oq !== yy && (aA.cJ = !0)
		}
	}, this.cU = function() {
		var a2, hT, a9k;
		if (!(7 <= aH.oM()) && (a9k = a9l(), cV.textAlign = cX, cV.textBaseline = cW, a0H(a9k.ga, a9k.gb, a9k.m6, a9k.tT, uw[a9b][0].mg, uw[a9b][0].op, uw[a9b][0].e8, 0 === yy, uw[a9b][0].name), cV.imageSmoothingEnabled = true, cV.drawImage(
				settingsGearIcon, a9k.ga - a9k.m6 / 2, a9k.gb, a9k.tT, a9k.tT), cV.imageSmoothingEnabled = false, cV.font = "bold " + Math.floor(a9k.tT * 0.4) + "px " + settings.fontName, (!a9a && cV.fillText("Win count: " + wins_counter,
				Math.floor(a9k.ga + a9k.m6 / 2), Math.floor((a9k.gb + a9k.tT / 2) * 2.1))), a9a))
			for (hT = uw[a9b].length, a2 = 1; a2 < hT; a2++) a0H(a9k.gc, a9k.gb + a2 * a9k.tT - a2 * ot, a9k.m7, a9k.tT, uw[a9b][a2].mg, uw[a9b][a2].op, uw[a9b][a2].e8, yy === a2, uw[a9b][a2].name)
	}
}

function qY() {
	var wj, a9v, a9w, a9x, a75 = !1;

	function a9y() {
		a75 = !0, wj = -1, a9v = new Array(4);
		for (var a2 = 3; 0 <= a2; a2--) a9v[a2] = !1;
		var a9z = Math.floor(1 + .02 * uO);
		a9w = new Array(4), (a9x = new Array(4))[1] = a9x[3] = a9w[0] = a9w[2] = 0, a9x[0] = a9w[3] = -a9z, a9w[1] = a9x[2] = a9z
	}

	function aA0() {
		if (-1 !== wj)
			if (0 !== fy && fq.hT()) {
				for (var aA1 = !1, a2 = 3; 0 <= a2; a2--) a9v[a2] && (aA1 = !0, dL += a9w[a2], dN += a9x[a2], fS.nf(a9w[a2], a9x[a2]), hE.wQ());
				aA1 ? aA.cJ = !0 : hI.hJ()
			} else hI.hJ()
	}
	this.oT = function(c8) {
		0 !== fy && fq.hT() && (a75 || a9y(), a9v[c8] = !0, -1 === wj) && (wj = setInterval(aA0, 20), aA0())
	}, this.oO = function(c8) {
		if (0 !== fy && (a75 || a9y(), a9v[c8] = !1, -1 !== wj)) {
			for (var aA1 = !1, a2 = 3; 0 <= a2; a2--) aA1 = aA1 || a9v[a2];
			aA1 || this.hJ()
		}
	}, this.hJ = function() {
		if (a75 && -1 !== wj) {
			for (var a2 = 3; 0 <= a2; a2--) a9v[a2] = !1;
			clearInterval(wj), wj = -1
		}
	}
}

function qZ() {
	var aA3;

	function aA9(ga, gb, gc, ge) {
		return Math.abs(gc - ga) + Math.abs(ge - gb)
	}
	this.aA4 = function() {
		return aA3
	}, this.eA = function(player, aA5) {
		var a2;
		if (0 !== bb[player].length && bJ.bK(aA5) && (bJ.bU(aA5) || bJ.bT(aA5) !== player))
			for (a2 = 21; 0 <= a2; a2--)
				if (function(aA3, aA5) {
						var aA8, a2, lE = bJ.gf(aA3),
							lF = bJ.cT(aA3),
							lb = bJ.gf(aA5),
							la = bJ.cT(aA5),
							a9z = aA9(lE, lF, lb, la);
						if (!(a9z < 2))
							for (aA8 = aA3, a2 = 0; a2 < a9z; a2++)
								if (Math.abs(lb - bJ.gf(aA8)) >= Math.abs(la - bJ.cT(aA8)) ? aA8 += aj[lE < lb ? 1 : 3] : aA8 += aj[lF < la ? 2 : 0], !bJ.rb(aA8)) return !!bJ.bK(aA8) && !(0 === a2 || a2 + 20 < a9z);
						return
					}(aA3 = 21 === a2 ? function(border, aA5) {
						for (var a9z, lb = bJ.gf(aA5), la = bJ.cT(aA5), c8 = 0, min = aA9(lb, la, bJ.gf(border[0]), bJ.cT(border[0])), a2 = border.length - 1; 1 <= a2; a2--)(a9z = aA9(lb, la, bJ.gf(border[a2]), bJ.cT(border[a2]))) < min && (
							min = a9z, c8 = a2);
						return border[c8]
					}(bb[player], aA5) : bb[player][b6(a2 * bb[player].length, 21)], aA5)) return !0;
		return !1
	}
}

function a7f() {
	var aAA = !1,
		tb = 0,
		cG = 0,
		m6 = 0,
		lZ = 0,
		oo = null,
		hf = null,
		aAB = null;

	function aAD() {
		for (var a1r, aAG = 0, bH = 0, eo = Math.floor(cG / 2), mg = Math.floor(m6 / 2), a1q = 1.5 * Math.PI, a2 = pK; 0 <= a2; a2--) bH += aAB[a2], 0 === aAB[a2] && aAG++;
		if (aAA = !1, hf.clearRect(0, 0, cG, cG), hf.fillStyle = cY.hl, hf.fillRect(0, 0, cG, cG), hf.fillStyle = cY.cZ, hf.fillRect(0, 0, cG, lZ), hf.fillRect(0, 0, lZ, cG), hf.fillRect(cG - lZ, 0, lZ, cG), hf.fillRect(0, cG - lZ, cG, lZ), 0 < bH)
			if (aAG === pK) {
				for (a2 = pK; 0 <= a2; a2--)
					if (0 < aAB[a2]) {
						! function(a2, eo, mg) {
							hf.fillStyle = ep.a1v[ep.n9[a2]], hf.beginPath(), hf.arc(eo, eo, mg, 0, 2 * Math.PI), hf.fill()
						}(a2, eo, mg);
						break
					}!
				function(eo) {
					var cE = eo / 3;
					hf.font = he.hf.kA(cE, 1), hf.fillStyle = cY.cZ, hf.fillText("100%", eo, eo + .1 * cE)
				}(eo)
			} else {
				for (a2 = 0; a2 <= pK; a2++) 0 < aAB[a2] && (! function(a2, eo, mg, a1q, a1r) {
					hf.fillStyle = ep.a1v[ep.n9[a2]], hf.beginPath(), hf.arc(eo, eo, mg, a1q, a1r), hf.lineTo(eo, eo), hf.fill()
				}(a2, eo, mg, a1q, a1r = a1q + 2 * Math.PI * aAB[a2] / bH), function(eo, mg, a1q, a1r) {
					var aF = (a1r - a1q) / (2 * Math.PI),
						cE = +mg * Math.min(aF, .37);
					cE < 8 || (a1q = (a1q + a1r) / 2, a1r = Math.floor(100 * aF + .5) + "%", mg *= .525 - Math.max(.6 * (aF - .7), 0), hf.font = he.hf.kA(cE, 1), hf.fillStyle = cY.cZ, hf.fillText(a1r, eo + Math.cos(a1q) * mg, eo + Math.cos(
						a1q + 1.5 * Math.PI) * mg))
				}(eo, mg, a1q, a1r), 0 !== a2 && a1t(eo, mg, a1q), a1q = a1r);
				a1t(eo, mg, 1.5 * Math.PI)
			}!
		function(eo, mg) {
			hf.beginPath(), hf.arc(eo, eo, mg, 0, 2 * Math.PI), hf.stroke()
		}(eo, mg)
	}

	function a1t(eo, mg, a1w) {
		hf.beginPath(), hf.moveTo(eo, eo), hf.lineTo(eo + Math.cos(a1w) * mg, eo + Math.cos(a1w + 1.5 * Math.PI) * mg), hf.stroke()
	}
	this.c5 = function() {
		if (di) {
			var a2;
			for (tb = 0, aAB = new Uint32Array(pK + 1), a2 = pK; 0 <= a2; a2--) aAB[a2] = 0;
			for (a2 = er - 1; 0 <= a2; a2--) aAB[ep.eq[es[a2]]] += 1;
			this.resize()
		} else aAB = hf = oo = null
	}, this.vD = function() {
		return cG
	}, this.resize = function() {
		di && (cG = Math.floor(o && !hD ? .18 * uO : .13 * c6), cG = (cG *= 1 + (.5 + .2 * o) * hD) + cG % 2, m6 = Math.floor(7 * cG / 8), (oo = oo || document.createElement("canvas")).width = cG, oo.height = cG, hf = oo.getContext("2d", {
			alpha: !0
		}), lZ = Math.max(1, .015 * cG), hf.lineWidth = lZ, hf.strokeStyle = cY.cZ, he.hf.textAlign(hf, 1), he.hf.textBaseline(hf, 1), aAD())
	}, this.nB = function() {
		return aAB[this.nA()]
	}, this.mw = function() {
		return tb = 31, this.eY(), this.nA()
	}, this.nA = function() {
		for (var aAE = 0, a2 = pK; 0 < a2; a2--) aAB[a2] > aAB[aAE] && (aAE = a2);
		return aAE
	}, this.eY = function() {
		if (di && 32 <= ++tb) {
			var a2;
			for (tb = 0, a2 = pK; 0 <= a2; a2--) aAB[a2] = 0;
			for (a2 = er - 1; 0 <= a2; a2--) aAB[ep.eq[es[a2]]] += bi[es[a2]];
			aAA = !0
		}
	}, this.cB = function() {
		di && aAA && aAD()
	}, this.cU = function() {
		di && (hD ? cV.drawImage(oo, k1, k1) : cV.drawImage(oo, k1, vE + 2 * k1))
	}
}

function r0() {
	this.a1L = function() {
		e || b || function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var aAL = window.location.search,
				aAL = new URLSearchParams(aAL).get(key);
			if ("string" != typeof aAL || aAL.length < 1) return null;
			return aAL
		}("replay") && k7.show()
	}, this.kG = function() {
		var aAK;
		e || b || ((aAK = new URL(window.location.href)).search = "", history.replaceState(null, "", aAK.toString()))
	}
}

function qa() {
	var aAN, aR;
	this.c5 = function() {
		for (var a2 = (aR = new Uint16Array(101)).length - 1; 0 <= a2; a2--) aR[a2] = b6(32768 * a2, 100);
		this.pU(0)
	}, this.value = function(bP) {
		return aR[bP]
	}, this.a6n = function() {
		return b6(aAN - 1, 2)
	}, this.pU = function(a74) {
		aAN = 2 * a74 % 32768 + 1
	}, this.random = function() {
		return aAN = 167 * aAN % 32768
	}, this.e1 = function(gC) {
		return b6(gC * this.random(), 32768)
	}, this.ei = function(bP) {
		return 0 !== bP && this.random() < this.value(bP)
	}
}

function qw() {
	this.jb = new aAO, this.wB = new aAP, this.wA = new aAQ, this.c5 = function(pN, mA, pP, pQ) {
		var aAR;
		hA || ((aAR = {}).pO = bA, aAR.pN = pN, aAR.mA = mA, aAR.pP = pP, aAR.pQ = pQ, aAR.a24 = lA, aAR.a25 = a21, fI.a2U(aAR), this.jb.c5(aAR))
	}, this.eY = function() {
		hA || this.jb.eY()
	}, this.w9 = function() {
		var op = this.jb.aAR;
		0 === fy && aH.a0o(), a2B(op.a24, op.a25), 1 === op.mA.length && (fI.a2P(op.pP), fI.a2R(op.a2S, op.a2T)), fV.close(fV.nx, 3246), fI.a2W(), pM(op.pN, op.pO, op.mA, op.pP, op.pQ, !0)
	}, this.w7 = function(j) {
		var a2 = j.indexOf("=");
		return 0 <= a2 ? j.substring(a2 + 1) : j
	}, this.wC = function(j) {
		return "https://territorial.io/?replay=" + j
	}
}

function aAO() {
	this.aAS = null, this.aAT = null, this.aAU = null, this.aAV = null, this.aAW = null, this.aAX = null;
	var aAY = 0;
	this.aAR = null, this.w8 = "", this.c5 = function(aAR) {
		this.aAS = [], this.aAT = [], this.aAU = [], this.aAV = [], this.aAW = [0], this.aAX = [0], aAY = 0, this.aAR = aAR, this.w8 = ""
	}, this.jc = function(id, aS, aU, aW) {
		hA || 2 === fy || (0 === this.aAW[aAY] && (this.aAX[aAY] ? (this.aAW.push(1), this.aAX.push(0), aAY++) : this.aAW[aAY] = 1), this.aAS.push(id), this.aAT.push(aS), this.aAU.push(void 0 === aU ? 0 : aU), this.aAV.push(void 0 === aW ? 0 :
			aW), this.aAX[aAY]++)
	}, this.eY = function() {
		0 === this.aAW[aAY] ? this.aAX[aAY]++ : (this.aAW.push(0), this.aAX.push(0), aAY++)
	}
}

function aAQ() {
	function aAe(j) {
		0 === fy ? pn.a0c(3605) : fR.sp(j)
	}
	this.kW = function(j) {
		if (kd.kP(kd.kM(kd.kL(j))), ! function() {
				if (jU.dt < 10) aAe("File Too Small");
				else if (jU.jV(9) !== a7O) aAe("Game Version Error");
				else if (jU.jV(31) !== jU.dt) aAe("Size Error");
				else {
					if (function(eH) {
							var a2, bP = jU.jT,
								bH = jU.dt,
								a47 = 0;
							for (a2 = 7; a2 < bH; a2++) a47 = a47 + bP[a2] & 65535;
							return a47 === eH
						}(jU.jV(16))) return 1;
					aAe("Hash Error")
				}
				return
			}()) return !1;
		(aAR = {}).pO = jU.jV(9), aAR.pN = jU.jV(14), aAR.pP = jU.jV(4), aAR.pQ = 1 === jU.jV(1), aAR.a24 = jU.jV(6), aAR.a25 = jU.jV(14), aAR.aAg = jU.jV(10), fo.jb.aAR = aAR,
			function() {
				var a2, a2c, a2b, name, bH = fo.jb.aAR.aAg,
					mA = [];
				for (a2 = 0; a2 < bH; a2++) a2c = jU.jV(1), a2b = [jU.jV(6), jU.jV(6), jU.jV(6)], name = jU.aAh(jU.jV(5)), mA.push({
					name: name,
					a2b: a2b,
					a2c: a2c
				});
				if (fo.jb.aAR.mA = mA, 8 === fo.jb.aAR.pP)
					for (a2 = 0; a2 < bH; a2++) mA[a2].mE = jU.jV(14)
			}(),
			function() {
				var a2, bH, aAi = fo.jb.aAR;
				if (1 === aAi.mA.length)
					for (bH = 6 < aAi.pP ? 1 : aAi.pP + 2, aAi.a2S = new Array(bH), aAi.a2T = new Array(bH), a2 = 0; a2 < bH; a2++) aAi.a2S[a2] = jU.jV(3), aAi.a2T[a2] = jU.jV(9) + 1
			}(), aAR = jU.jV(5), aAj = jU.jV(30), aAk = jU.jV(30);
		var aAR, aAj, aAk, a2, id, bH = aAj,
			aAn = new Uint8Array(bH),
			aAo = new Uint16Array(bH),
			aAp = new Uint32Array(bH),
			aAq = new Uint32Array(bH);
		for (fo.jb.aAS = aAn, fo.jb.aAT = aAo, fo.jb.aAU = aAp, fo.jb.aAV = aAq, a2 = 0; a2 < bH; a2++) aAn[a2] = id = jU.jV(4), aAo[a2] = jU.jV(9), 0 === id ? aAp[a2] = jU.jV(22) : 1 === id ? (aAp[a2] = jU.jV(10), aAq[a2] = jU.jV(10)) : 2 ===
			id ? (aAp[a2] = jU.jV(10), aAq[a2] = jU.jV(9)) : 3 === id || 4 === id ? (aAp[a2] = jU.jV(10), aAq[a2] = jU.jV(22)) : 5 === id ? aAp[a2] = jU.jV(10) : 6 === id ? aAp[a2] = jU.jV(7) : 7 === id && (aAp[a2] = jU.jV(1));
		return function(bH, kX) {
			var a2, aAW = new Uint8Array(bH),
				aAX = new Array(bH);
			for (aAX.fill(0), fo.jb.aAW = aAW, fo.jb.aAX = aAX, a2 = 0; a2 < bH; a2++) aAW[a2] = jU.jV(1), aAX[a2] = jU.jV(kX)
		}(aAk, aAR), jU.c8 < 8 * jU.dt - 13 || jU.c8 > 8 * jU.dt ? (aAe("Out Of Bounds Error: " + jU.c8 + " " + 8 * jU.dt), !1) : (fo.jb.w8 = j, !0)
	}
}

function aAP() {
	this.mb = function() {
		var aAi, kX = function() {
				var a2, aAX = fo.jb.aAX,
					bH = aAX.length,
					max = 0;
				for (a2 = 0; a2 < bH; a2++) max = Math.max(max, aAX[a2]);
				return kf(Math.max(max, 1))
			}(),
			aAs = function(kX) {
				return 179 + function() {
					var a2, mA = fo.jb.aAR.mA,
						bH = mA.length,
						aAs = 24 * bH;
					for (a2 = 0; a2 < bH; a2++) aAs += 10 * k.mb(mA[a2].name).length;
					8 === fo.jb.aAR.pP && (aAs += 14 * bH);
					return aAs
				}() + (1 === fo.jb.aAR.mA.length ? 12 * fo.jb.aAR.a2S.length : 0) + function() {
					var a2, aAS = fo.jb.aAS,
						bH = aAS.length,
						aAs = 13 * bH,
						aB6 = [22, 20, 19, 32, 32, 10, 7, 1, 0, 0];
					for (a2 = 0; a2 < bH; a2++) aAs += aB6[aAS[a2]];
					return aAs
				}() + function(kX) {
					return fo.jb.aAX.length * (1 + kX)
				}(kX)
			}(kX);
		kR.kS(aAs + (6 - aAs % 6) % 6), aAi = fo.jb.aAR, kR.kT(9, a7O), kR.kT(31, kR.dt), kR.c8 += 16, kR.kT(9, aAi.pO), kR.kT(14, aAi.pN), kR.kT(4, aAi.pP), kR.kT(1, aAi.pQ), kR.kT(6, aAi.a24), kR.kT(14, aAi.a25), kR.kT(10, aAi.mA.length);
		var a2, e8, aB0, aB1, mA = fo.jb.aAR.mA,
			bH = mA.length;
		for (a2 = 0; a2 < bH; a2++)
			for (kR.kT(1, mA[a2].a2c), kR.kT(18, (mA[a2].a2b[0] << 12) + (mA[a2].a2b[1] << 6) + mA[a2].a2b[2]), aB0 = k.mb(mA[a2].name), aB1 = aB0.length, kR.kT(5, aB1), e8 = 0; e8 < aB1; e8++) kR.kT(10, aB0[e8]);
		if (8 === fo.jb.aAR.pP)
			for (a2 = 0; a2 < bH; a2++) kR.kT(14, mA[a2].mE);
		return function() {
				var a2, aAi = fo.jb.aAR;
				if (1 === aAi.mA.length)
					for (a2 = 0; a2 < aAi.a2S.length; a2++) kR.kT(3, aAi.a2S[a2]), kR.kT(9, aAi.a2T[a2] - 1)
			}(),
			function(kX) {
				var a2, aAS = fo.jb.aAS,
					aS = fo.jb.aAT,
					aU = fo.jb.aAU,
					aW = fo.jb.aAV,
					bH = aAS.length;
				for (kR.kT(5, kX), kR.kT(30, bH), kR.kT(30, fo.jb.aAX.length), a2 = 0; a2 < bH; a2++) kR.kT(4, aAS[a2]), kR.kT(9, aS[a2]), 0 === aAS[a2] ? kR.kT(22, aU[a2]) : 1 === aAS[a2] ? (kR.kT(10, aU[a2]), kR.kT(10, aW[a2])) : 2 === aAS[
					a2] ? (kR.kT(10, aU[a2]), kR.kT(9, aW[a2])) : 3 === aAS[a2] || 4 === aAS[a2] ? (kR.kT(10, aU[a2]), kR.kT(22, aW[a2])) : 5 === aAS[a2] ? kR.kT(10, aU[a2]) : 6 === aAS[a2] ? kR.kT(7, aU[a2]) : 7 === aAS[a2] && kR.kT(1, aU[a2])
			}(kX),
			function(kX) {
				var a2, aAW = fo.jb.aAW,
					aAX = fo.jb.aAX,
					bH = aAW.length;
				for (a2 = 0; a2 < bH; a2++) kR.kT(1, aAW[a2]), kR.kT(kX, aAX[a2])
			}(kX), kR.c8 !== aAs && fR.sp("Encoder Index Error: " + kR.c8 + " " + aAs), kR.c8 = 40, kR.kT(16, function() {
				var a2, bP = kR.jT,
					bH = kR.dt,
					a47 = 0;
				for (a2 = 7; a2 < bH; a2++) a47 = a47 + bP[a2] & 65535;
				return a47
			}()), jU.c5(kR.jT), pw.mO(pw.mM(b6(aAs - 1, 6) + 1))
	}
}

function qh() {
	var eo, tL = !1,
		aB7 = !1,
		aB8 = -1e4;

	function resize(cp) {
		eo = 0, cC.cD() && (aB9(cp) || tL) && (tL = !1, uM(), zN.c5(), pl.c5(), oK.resize(), a0x.c5(), pm.resize(), oA.resize(), pk.resize(), a0m.resize(), cR.resize(), a3.c5(), 1 <= fy ? (fe.resize(!1), fh.resize(), fT.resize(), hE.resize(), fk
			.resize(), fR.resize(), lx.resize(), k7.resize(), ft.resize(), fl.resize(), fi.resize(), cH.resize(), ly.resize(), lz.resize(), fS.resize(), fr.resize(), fm.resize(), hE.wQ()) : (2 === aH.oM() ? fI.resize() : 3 === aH.oM() && pn
			.resize(), aH.a0u(), aH.a0y()), aA.cJ = !0)
	}

	function aBA(aF) {
		return aF && 128 < aF ? Math.floor(aF) : 128
	}

	function aB9(cp) {
		var m6, tT, tU;
		return oa.a9j(), m6 = aBA(document.documentElement.clientWidth), tT = window.visualViewport ? aBA(window.visualViewport.height) : aBA(document.documentElement.clientHeight), cp && !aB7 ? (aB7 = !0, document.body.removeChild(ne)) : aB7 && (
			aB7 = !1, document.body.appendChild(ne)), cp = Math.floor(.5 + kB * m6), tU = Math.floor(.5 + kB * tT), !(cp === gd && tU === cP || o4.oZ() && (oK.k6 || k7.k6)) && (gd = p = cp, cP = q = tU, uO = vW(p, q), c6 = b6(q + p, 2), ne
			.width = cp, ne.height = tU, ne.style.width = m6 + "px", ne.style.height = tT + "px", 1)
	}
	this.c5 = function() {
		p = q = uO = gd = cP = c6 = 0, kB = eo = 1, ne = document.getElementById("canvasA"), (cV = ne.getContext("2d", {
			alpha: !1
		})).imageSmoothingEnabled = !1, aB9(0)
	}, this.eY = function() {
		pu.eY(), 50 <= ++eo && resize(0)
	}, this.a2k = function(cp) {
		tL = !0, resize(cp)
	}, this.ob = function() {
		aB8 + 1e3 > aA.aB || (aB8 = aA.aB, resize(0))
	}, this.a9j = function() {
		var aBB = window.devicePixelRatio || 1,
			a2 = gj.gk.a9h;
		return (kB = a2 < 3 ? .5 + .25 * a2 : (.5 + .125 * (a2 - 3)) * aBB) / aBB
	}
}

function qb() {
	var player, dq, ky, ks, ga, gb, gc, ge, c8, aBC, id;

	function aBI() {
		var dp;
		if (bJ.bU(ky)) dp = bM;
		else {
			if ((dp = bJ.bT(ky)) === player) return void aBK(!0);
			if (!e3(player, dp)) return function(dp) {
				var max = bi[dp] * oz - bB[dp];
				max <= 0 || (dq -= max = max < dq ? max : dq, player === bA && (fR.jA(max, 0, dp), bE.bF[16] += max), dp === bA && (fR.tC(max, player), bE.bF[10] += max), bB[dp] += max, fS.jB(dp, max))
			}(dp), void aBK(!0)
		}
		player === bA && (bE.bF[13] += dq), fb.b9(player, id), as.bG(player, aBC), bI[player].push(ks), as.dl(player, dq, dp), b8.dm(player, !0)
	}

	function aBK(aBN) {
		fb.b9(player, id), as.bG(player, aBC), aBN && (bB[player] += dq)
	}

	function aBE() {
		bJ.a3r(ky, player) && bJ.a3t(ky)
	}

	function aBD(a2, a5H, v9, dz, hT) {
		if (c8 = a2, id = a5H, player = v9, ga = bJ.gf(dz), gb = bJ.cT(dz), gc = bJ.gf(hT), ge = bJ.cT(hT), ks = ky = bJ.lU(ga, gb), -1 !== (aBC = as.gi(player, id))) return dq = as.b0(player, aBC), 1;
		aBE(), fb.b9(player, id)
	}
	this.eY = function(a2, id, v9, dz, hT) {
		aBD(a2, id, v9, dz, hT) && (aBE(), function() {
			var aBO = b6(dq, 128);
			dq -= aBO = aBO < 1 ? 1 : aBO, player === bA && (bE.bF[15] += aBO);
			if (dq <= b7) return player === bA && (bE.bF[15] += dq), void aBK(!1);
			return as.bh(player, aBC, dq), 1
		}()) && (a2 = bJ.lU(ga, gb), ky = Math.abs(gc - ga) >= Math.abs(ge - gb) ? a2 + aj[ga < gc ? 1 : 3] : a2 + aj[gb < ge ? 2 : 0], ga = bJ.gf(ky), gb = bJ.cT(ky), fb.gN(c8, ky), ! function() {
			if (bJ.bK(ky)) return;
			return 1
		}() ? aBI() : bJ.rb(ky) && bJ.a3w(ky, player))
	}, this.gR = function(v9, dz) {
		player = v9, ky = bJ.lU(bJ.gf(dz), bJ.cT(dz)), aBE()
	}
}

function qc() {
	var aBP, aBQ, rb, aBR;
	this.c5 = function() {
		var a2, gV, gW, a2b, aBS, cG, eH, hf, a3D, kq, aF, bP, eP, dx, aBV;
		if (function() {
				if (rb = !0, aBR = "rgb(" + kn[0] + "," + kn[1] + "," + kn[2] + ")", a7u(lA)) return 1;
				return rb = !1, 0
			}()) aBQ = null;
		else {
			for (aBP = b6(96, 4), aBS = 1 === lA ? (a2b = 0, 160) : (a2b = 128, 32), aBR = "rgb(" + a2b + "," + a2b + "," + a2b + ")", aBQ = new Array(4), a2 = 3; 0 <= a2; a2--) {
				if (aBQ[a2] = document.createElement("canvas"), cG = a2 % 2 == 0 ? an : aBP, eH = a2 % 2 == 0 ? aBP : ao + 2 * aBP, aBQ[a2].width = cG, aBQ[a2].height = eH, kq = (a3D = (hf = aBQ[a2].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, cG, eH)).data, a2 % 2 == 0)
					for (gW = aBP - 1; 0 <= gW; gW--)
						for (aF = aBS + Math.floor((gW + 1) * (a2b - aBS) / (aBP + 1)), gV = cG - 1; 0 <= gV; gV--) kq[bP = 4 * ((0 === a2 ? aBP - gW - 1 : gW) * cG + gV)] = aF, kq[bP + 1] = aF, kq[bP + 2] = aF, kq[bP + 3] = 255;
				else {
					for (gV = aBP - 1; 0 <= gV; gV--)
						for (aF = aBS + Math.floor((gV + 1) * (a2b - aBS) / (aBP + 1)), gW = eH - 1 - aBP; aBP <= gW; gW--) kq[bP = 4 * (gW * cG + (3 === a2 ? aBP - gV - 1 : gV))] = aF, kq[bP + 1] = aF, kq[bP + 2] = aF, kq[bP + 3] = 255;
					for (dx = 1; 0 <= dx; dx--)
						for (gV = aBP - 1; 0 <= gV; gV--)
							for (gW = aBP - 1; 0 <= gW; gW--) eP = (Math.pow(gV * gV + gW * gW, .5) + 1) / (aBP + 1), aF = aBS + Math.floor((1 < eP ? 1 : eP) * (a2b - aBS)), kq[bP = 4 * ((0 === dx ? aBP - gW - 1 : gW + dx * (eH - aBP)) * cG + (
								1 === a2 ? gV : aBP - gV - 1))] = aF, kq[bP + 1] = aF, kq[bP + 2] = aF, kq[bP + 3] = 255
				}
				hf.putImageData(a3D, 0, 0)
			}
			aBV = aBS, ki.fillStyle = "rgb(" + aBV + "," + aBV + "," + aBV + ")", ki.fillRect(0, 0, an, 1), ki.fillRect(0, ao - 1, an, 1), ki.fillRect(0, 0, 1, ao), ki.fillRect(an - 1, 0, 1, ao)
		}
	}, this.lu = function() {
		var dx = rb ? 0 : -aBP;
		a9T(dx, dx, an - 2 * dx, ao - 2 * dx, hR.aBW, hR.aBX, hR.aBY, hR.aBZ) || (cV.fillStyle = aBR, cV.fillRect(0, 0, gd, cP))
	}, this.cU = function() {
		rb || (a9S(0, -aBP, an, aBP, hR.aBW, hR.aBX, hR.aBY, hR.aBZ) && cV.drawImage(aBQ[0], hR.aBa, hR.aBb - aBP), a9S(an, -aBP, aBP, ao + 2 * aBP, hR.aBW, hR.aBX, hR.aBY, hR.aBZ) && cV.drawImage(aBQ[1], hR.aBa + an, hR.aBb - aBP), a9S(0, ao,
			an, aBP, hR.aBW, hR.aBX, hR.aBY, hR.aBZ) && cV.drawImage(aBQ[2], hR.aBa, hR.aBb + ao), a9S(-aBP, -aBP, aBP, ao + 2 * aBP, hR.aBW, hR.aBX, hR.aBY, hR.aBZ) && cV.drawImage(aBQ[3], hR.aBa - aBP, hR.aBb - aBP))
	}
}

function r1() {
	this.io = new aBc, this.a4K = new aBd, this.lv = new aBe, this.fc = new aBf, this.dZ = new aBg, this.aBV = new aBh, this.aBi = new aBj, this.eX = new aBk, this.jo = new aBl, this.c5 = function() {
		this.lv.c5(), this.fc.c5(), this.dZ.c5(), this.aBV.c5()
	}
}

function aBk() {
	function aBr(player, dz, aBt, aBu) {
		for (var ga, gb, cG, eH, mg, aBv, gc, ge, bH = dz + aBu, a2 = dz; a2 < bH; a2 += aBt)
			if (ga = (ga = eL[player] - a2) < 1 ? 1 : ga, gb = eO[player] - a2, gc = eK[player] + a2, gc = an - 1 <= gc ? an - 2 : gc, ge = eN[player] + a2, eH = (ge = ao - 1 <= ge ? ao - 2 : ge) - (gb = gb < 1 ? 1 : gb), gc = (mg = b6(e0.random() *
					(2 * (gc - ga + ge - gb)), e0.value(100))) <= (cG = gc - ga) ? (aBv = ga + mg, gb) : mg <= cG + eH ? (aBv = gc, gb + mg - cG) : mg <= 2 * cG + eH ? (aBv = ga + mg - cG - eH, ge) : (aBv = ga, gb + mg - 2 * cG - eH), aBs(player,
					ge = bJ.lU(aBv, gc))) return ge;
		return -1
	}

	function aBs(ov, bQ) {
		return bJ.bK(bQ) && (bJ.bU(bQ) || ov !== (bQ = bJ.bT(bQ)) && e3(ov, bQ) && 0 < bb[bQ].length)
	}
	this.eY = function(player) {
		return !(0 === bb[player].length || bB[player] < 100) && dY.fc.jk !== dY.fc.jl && (dY.fc.jm[player] !== dY.fc.jn && he.iV.jf(player, 203, 32, 16) ? !! function(player) {
			var bQ = function(player) {
				var a2, lY, lX, ga = eL[player],
					gb = eO[player],
					d7 = eK[player] - ga + 1,
					dA = eN[player] - gb + 1,
					aF = e0.value(100);
				for (a2 = 0; a2 < 32; a2++)
					if (lY = ga + bx.by(e0.random() * d7, aF), lX = gb + bx.by(e0.random() * dA, aF), lY = bJ.lU(lY, lX), aBs(player, lY)) return lY;
				return -1
			}(player);
			if (0 <= bQ) return dY.jo.jp(player, bQ >> 2);
			if (0 <= (bQ = aBr(player, 1, 4, 40))) return dY.jo.jp(player, bQ >> 2);
			if (0 <= (bQ = aBr(player, 40, 8, 200))) return dY.jo.jp(player, bQ >> 2);
			return
		}(player) && !! function(ov) {
			if (0 === de.aO[2]) return void console.log("error 325234");
			var aBp = de.aO[1] + ja.cb[de.aO[2] - 1] << 2;
			if (bJ.bU(aBp)) return 1;
			return aBp = bJ.bT(aBp), ov !== aBp && !!e3(ov, aBp)
		}(player) && function(player) {
			return he.iV.jh(player), dY.fc.jq(player), !0
		}(player) : void 0)
	}
}

function aBc() {
	function aBy(aBx) {
		var aCB = 4 + .03 * (1 + 1.5 * o) * c6 / dM;
		return ja.dD(aBx, de.aO[1]) < aCB
	}
	this.ip = function(player, aBx) {
		return !!ja.dS(aBx) && dY.fc.jk !== dY.fc.jl && dY.fc.jm[player] !== dY.fc.jn && 0 !== bb[player].length && !!dY.jo.jp(player, aBx) && !!aBy(aBx)
	}, this.it = function(player, is, aBx) {
		return !!(ja.dS(aBx) && this.jr(player, is) && dY.jo.js(aBx) && aBy(aBx))
	}, this.jr = function(player, id) {
		for (var aBz, aC0 = player << 3, aC1 = aC0 + dY.fc.jm[player], aC2 = dY.fc.aC2, aC3 = dY.fc.aC3, a2 = aC0; a2 < aC1; a2++)
			if (id === aC3[aBz = aC2[a2]]) return de.aO[3] = aBz, !0;
		return !1
	}, this.ir = function(cr) {
		var aC4 = dY.aBV.aC4;
		return dY.aBV.aC4 = -1, !!this.jr(bA, aC4) && (et.iT.ir(aC4, cr), !0)
	}, this.rX = function(cM, cN) {
		var a2, aC1, aC5, aC2, aC6, aC7, aC8, eP, sv, aC9, player = bA,
			bH = dY.fc.jm[player];
		if (0 === bH) return !1;
		for (aC2 = dY.fc.aC2, aC7 = dY.fc.aC7, sv = dY.fc.sv, aC1 = (player = player << 3) + bH, aC6 = .4 * he.hf.k0() * c6 / dM, aC5 = -1, a2 = player; a2 < aC1; a2++) aC9 = aC2[a2], aC8 = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(sv[aC9]))), (
			eP = ja.d3(cM, cN, aC7[aC9])) - aC8 < aC6 && (aC6 = eP, aC5 = aC9);
		return !(aC5 < 0 || (dY.aBV.aC4 = dY.fc.aC3[aC5], 0))
	}, this.rl = function(cM, cN) {
		var a2, aC5, aC6, aC7, aC8, eP, sv, bH = dY.fc.jk;
		if (bH < 1) return -1;
		for (aC7 = dY.fc.aC7, sv = dY.fc.sv, aC6 = 1e3, aC5 = -1, a2 = 0; a2 < bH; a2++) aC8 = 16 * he.hf.k0() * (.625 + .125 * Math.sqrt(Math.sqrt(sv[a2]))), (eP = ja.d3(cM, cN, aC7[a2])) < aC6 && eP < aC8 && (aC6 = eP, aC5 = a2);
		return aC5
	}, this.aCA = function(cM, cN) {
		var a2, aC1, aC5, aC2, aC6, aC7, aC8, eP, sv, aC9, player = bA,
			bH = dY.fc.jm[player];
		if (0 === bH) return -1;
		for (aC2 = dY.fc.aC2, aC7 = dY.fc.aC7, sv = dY.fc.sv, aC1 = (player = player << 3) + bH, aC6 = .4 * he.hf.k0() * c6 / dM, aC5 = -1, a2 = player; a2 < aC1; a2++) aC9 = aC2[a2], aC8 = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(sv[aC9]))), (
			eP = ja.d3(cM, cN, aC7[aC9])) - aC8 < aC6 && (aC6 = eP, aC5 = aC9);
		return aC5 < 0 ? -1 : dY.fc.aC3[aC5]
	}
}

function aBd() {
	this.a4L = function(player) {
		for (var aC2 = dY.fc.aC2, aC0 = player << 3, a2 = aC0 + dY.fc.jm[player] - 1; aC0 <= a2; a2--) this.aCC(aC2[a2])
	}, this.aCC = function(aCD) {
		var fc = dY.fc,
			aCE = fc.jk - 1,
			aCF = fc.su[aCD],
			aCG = fc.aCH[aCD],
			aCI = fc.aC7[aCD];
		fc.jk = aCE, fc.su[aCD] = fc.su[aCE], fc.aCJ[aCD] = fc.aCJ[aCE], fc.aCK[aCD] = fc.aCK[aCE], fc.aC7[aCD] = fc.aC7[aCE], fc.aCL[aCD] = fc.aCL[aCE], fc.sv[aCD] = fc.sv[aCE], fc.aCH[aCD] = fc.aCH[aCE], fc.aC3[aCD] = fc.aC3[aCE], fc.aCM[aCD] =
			fc.aCM[aCE], fc.aC2[fc.su[aCD]] = aCD,
			function(a1w) {
				var player = a1w >> 3,
					fc = dY.fc,
					bH = fc.jm[player] - 1,
					aCP = (player << 3) + bH;
				fc.jm[player] = bH, aCP !== a1w && (fc.aC2[a1w] = fc.aC2[aCP], fc.su[fc.aC2[a1w]] = a1w)
			}(aCF), dY.dZ.dZ[ja.dX(fc.aC7[aCD])][fc.aCH[aCD]] = aCD, aCE = ja.dX(aCI), aCF = aCG, aCE = dY.dZ.dZ[aCE], fc = aCE.pop(), aCF !== aCE.length && (aCE[aCF] = fc, dY.fc.aCH[fc] = aCF)
	}
}

function aBe() {
	var aCS, aCT = 8,
		aCU = new Array(2);

	function aCV(c8) {
		var m4 = aCT + 4,
			rG = he.hf.ke(m4, m4),
			ou = he.hf.getContext(rG, !0),
			a3D = he.hf.getImageData(ou, m4, m4),
			kq = a3D.data;
		return aCW(kq, m4 + 1, c8), aCW(kq, m4 + 2, c8), aCW(kq, 2 * m4 + 1, c8), aCW(kq, 2 * m4 - 3, c8), aCW(kq, 2 * m4 - 2, c8), aCW(kq, 3 * m4 - 2, c8), aCW(kq, m4 * (m4 - 3) + 1, c8), aCW(kq, m4 * (m4 - 2) + 1, c8), aCW(kq, m4 * (m4 - 2) + 2,
			c8), aCW(kq, m4 * (m4 - 2) - 2, c8), aCW(kq, m4 * (m4 - 1) - 3, c8), aCW(kq, m4 * (m4 - 1) - 2, c8), ou.putImageData(a3D, 0, 0), rG
	}

	function aCW(kq, cr, c8) {
		cr *= 4;
		kq[cr] = 255, kq[1 + cr] = 255, kq[2 + cr] = c8, kq[3 + cr] = 255
	}

	function ke(player) {
		var aCX = aCT >> 1,
			rG = he.hf.ke(aCT, aCT);
		return function(ou, player, gV, gW) {
			var d7, cr, aCZ, a1x, m4 = aCT,
				a3D = he.hf.getImageData(ou, m4, m4),
				kq = a3D.data,
				kY = (m4 >> 1) - .5,
				aBR = bJ.a3l(player),
				aCb = he.ko.oi(aBR, .5);
			he.ko.oj(aBR, aCb, 300) || he.ko.ol(aBR, 100);
			for (gW = 0; gW < m4; gW++)
				for (gV = 0; gV < m4; gV++) a1x = (m4 - 1.5) * (m4 - 1.5) / 4, aCZ = (d7 = (d7 = gV - kY) * d7 + (d7 = gW - kY) * d7) <= (m4 - 4.5) * (m4 - 4.5) / 4 ? aCb : aBR, kq[cr = 4 * (gW * m4 + gV)] = aCZ[0], kq[1 + cr] = aCZ[1], kq[2 +
					cr] = aCZ[2], kq[3 + cr] = a1x < d7 ? 0 : 255;
			ou.putImageData(a3D, 0, 0)
		}(he.hf.getContext(rG, !0), player, aCX, aCX), rG
	}
	this.c5 = function() {
		aCS = new Array(bM), aCU[0] = aCV(255), aCU[1] = aCV(0)
	}, this.cU = function() {
		var a2, player, aCc, dq, aCd, d6, aCh, aCj, aCk, aC7 = dY.fc.aC7,
			su = dY.fc.su,
			sv = dY.fc.sv,
			aCl = aCS,
			aCm = bA,
			aCn = -1,
			bH = dY.fc.jk,
			aCo = gd,
			aCp = cP,
			aCq = an << 4,
			aCr = dM,
			d0 = aCr / aCT,
			ga = dL / aCr,
			gb = dN / aCr,
			d7 = (aCo + dL) / aCr - ga,
			dA = (aCp + dN) / aCr - gb,
			ou = cV;
		for (dY.io.jr(bA, dY.aBV.aC4) && (aCn = de.aO[3]), ou.fillStyle = cY.cZ, a2 = 0; a2 < bH; a2++) player = su[a2] >> 3, dq = sv[a2], aCc = .625 + .125 * Math.sqrt(Math.sqrt(dq)), aCd = (d6 = aC7[a2]) % aCq / 16 - aCc, d6 = aCp * (Math
			.floor(d6 / aCq) / 16 - aCc - gb) / dA, aCh = -2 * (aCk = aCr * aCc) * (1 + (aCj = +(player === aCm)) / 8), aCj = aCj * aCk / 4, (aCk = aCo * (aCd - ga) / d7) < aCh || d6 < aCh || aCo + aCj < aCk || aCp + aCj < d6 || (aCd = aCc *
			aCr, ou.imageSmoothingEnabled = (aCh = 2 * aCc * d0) < 3, void 0 === (aCj = aCl[player]) && (aCl[player] = aCj = ke(player)), player === aCm && (ou.setTransform(aCh, 0, 0, aCh, aCk - 2 * aCh, d6 - 2 * aCh), ou.drawImage(aCU[+(
				a2 === aCn)], 0, 0)), ou.setTransform(aCh, 0, 0, aCh, aCk, d6), ou.drawImage(aCj, 0, 0), (aCc = Math.floor(function(dq) {
				if (dq < 1e3) return .42;
				if (dq < 1e4) return .34;
				if (dq < 1e6) return .26;
				if (dq < 1e8) return .19;
				return .15
			}(dq) * aCd)) < 6) || (ou.setTransform(1, 0, 0, 1, 0, 0), 20 <= aCc ? (ou.font = he.hf.kA(.85 * aCc, 1), ou.fillText(fi.gm(dq), aCk + aCd, d6 + .93 * aCd + .085 * aCc), (aCc *= fS.a6D(player)) < 6 || (ou.font = he.hf.kA(aCc, 1),
			ou.fillText(gn[player], aCk + aCd, d6 + 1.16 * aCd + .1 * aCc))) : (ou.font = he.hf.kA(aCc, 1), ou.fillText(fi.gm(dq), aCk + aCd, d6 + aCd + .1 * aCc)));
		ou.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aBj() {
	this.eY = function() {
		for (var aCt, aBi, aCM = dY.fc.aCM, aC7 = dY.fc.aC7, aCK = dY.fc.aCK, a2 = dY.fc.jk - 1; 0 <= a2; a2--) aCt = aC7[a2], 0 !== (aBi = aCM[a2]) && aCt === aCK[a2] && (! function(a2, aCv, co) {
			var dp, player = dY.fc.su[a2] >> 3,
				co = aCv + ja.cb[co] << 2,
				a2 = dY.fc.sv[a2];
			if (bJ.bU(co)) dp = bM;
			else {
				if ((dp = bJ.bT(co)) === player) return he.iV.j9(player, a2);
				if (!e3(player, dp)) return et.eu.j7(player, dp, a2)
			}
			player === bA && (bE.bF[13] += a2);
			bI[player].push(aCv << 2), as.dl(player, a2, dp), b8.dm(player, !0)
		}(a2, ja.dW(aCt), aBi - 1), dY.a4K.aCC(a2))
	}
}

function aBf() {
	this.aCw = null, this.jl = 512, this.jn = 8, this.jk = 0, this.gI = 0, this.su = new Uint16Array(this.jl), this.aCJ = new Uint32Array(this.jl), this.aCK = new Uint32Array(this.jl), this.aC7 = new Uint32Array(this.jl), this.aCL = new Uint16Array(
			this.jl), this.sv = new Uint32Array(this.jl), this.aCH = new Uint16Array(this.jl), this.aC3 = new Uint16Array(this.jl), this.aCM = new Uint8Array(this.jl), this.jm = new Uint8Array(bM), this.aC2 = new Uint16Array(this.jn * bM), this.c5 =
		function() {
			this.gI = 0, this.jk = 0, this.aCw = new Uint8Array(an + ao), this.jm.fill(0)
		}, this.jq = function(player) {
			var bH = this.jk,
				aCx = ja.dV(de.aO[0]),
				aB1 = this.jm[player],
				aCy = (player << 3) + aB1;
			dG[player] = 2, this.su[bH] = aCy, this.aCJ[bH] = aCx, this.aC7[bH] = aCx, this.aCK[bH] = ja.dV(de.aO[1]), this.aCL[bH] = 0, this.sv[bH] = de.aL[0], this.aCH[bH] = dY.dZ.jq(bH, ja.dX(aCx)), this.aC3[bH] = this.gI, this.aCM[bH] = de.aO[2],
				this.gI = this.gI + 1 & 1023, this.aC2[aCy] = bH, this.jm[player] = aB1 + 1, this.jk++
		}, this.ir = function() {
			var aBz = de.aO[3];
			this.aCJ[aBz] = this.aC7[aBz], this.aCK[aBz] = ja.dV(de.aO[1]), this.aCL[aBz] = 0, this.aCM[aBz] = de.aO[2]
		}, this.eY = function() {
			if (aA.en() % 5 == 3) {
				dY.aBi.eY(), ! function(rr) {
					var a2, aD2, aD3, aD4, aD5, aCx, aD9, aDA, bR, bQ, aCJ = rr.aCJ,
						aCK = rr.aCK,
						aC7 = rr.aC7,
						sv = rr.sv,
						aCL = rr.aCL,
						aCH = rr.aCH,
						rr = rr.jk,
						aCq = an << 4;
					for (a2 = rr - 1; 0 <= a2; a2--) aD3 = aC7[a2], aD2 = aCK[a2], aD3 !== aD2 && (aCx = aCJ[a2], aD9 = aD2 % aCq - (aD5 = aCx % aCq), aDA = ~~((aD2 + .5) / aCq) - (aCx = ~~((aCx + .5) / aCq)), bR = ~~Math.sqrt(aD9 * aD9 + aDA *
						aDA + .5), bQ = 4e5 + 2e4 * ~~Math.sqrt(.5 + (Math.sqrt(sv[a2] + .5) << 4)), 65535 <= (bQ = aCL[a2] + Math.max(~~((.5 + bQ) / bR), 1)) ? aC7[a2] = aD4 = aD2 : (aCL[a2] = bQ, aC7[a2] = aD4 = aD5 + bx.by(bQ * aD9,
						65536) + aCq * (aCx + bx.by(bQ * aDA, 65536))), aCH[a2] = dY.dZ.aDC(aCH[a2], aD3, aD4))
				}(this), ! function(rr) {
					var a2, l3, kY, e8, eo, aDD, aDE, aDF, ky, cg, ga, gb, aDG, aC6, aDH, kz, aCx, aDK, bH = rr.jk,
						aC7 = rr.aC7,
						su = rr.su,
						sv = rr.sv,
						dZ = dY.dZ.dZ,
						aDL = dZ.length,
						aDM = dY.dZ.aDM,
						aCq = an << 4,
						aDN = di,
						aDO = ep.eq,
						bQ = (bH - 1) * (aA.en() % 2);
					for (a2 = 0; a2 < bH; a2++) {
						for (l3 = Math.abs(a2 - bQ), aCx = aC7[l3], kY = ja.dX(aCx), ky = su[l3] >> 3, ga = aCx % aCq, gb = ~~((aCx + .5) / aCq), aCx = sv[l3], aDK = 80 + ~~Math.sqrt(.5 + (Math.sqrt(aCx + .5) << 8)), aC6 = Math.min(aDK * aDK,
								262144), aDH = -1, e8 = 0; e8 < 9; e8++)
							if (!((aDD = kY + aDM[e8]) < 0 || aDL <= aDD))
								for (aDF = dZ[aDD], aDE = aDF.length, eo = 0; eo < aDE; eo++) aDG = aDF[eo], kz = su[aDG] >> 3, ky == kz || aDN && aDO[ky] === aDO[kz] || (kz = aC7[aDG], (kz = (cg = ga - kz % aCq) * cg + (cg = gb - ~~((kz + .5) /
									aCq)) * cg) < aC6 && (aDH = aDG, aC6 = kz)); - 1 !== aDH && (aCx = Math.min(Math.max(1, bx.by(aCx * (aDK - Math.floor(Math.sqrt(aC6 + .5))), 5 * aDK)), sv[aDH]), sv[l3] -= aCx >> 4, sv[aDH] -= aCx)
					}
				}(this);
				var a2, dq, sv = (rr = this).sv,
					rr = rr.jk;
				for (a2 = rr - 1; 0 <= a2; a2--) dq = sv[a2], 0 < (dq -= Math.max(1, dq >> 7)) ? sv[a2] = dq : dY.a4K.aCC(a2)
			}
		}
}

function aBg() {
	this.aDP = 32, this.gV = 0, this.gW = 0, this.da = 0, this.aDQ = 0, this.aDR = 4, this.dZ = null, this.aDM = new Int16Array(9), this.c5 = function() {
		this.da = 1 + bx.by(an - 1, this.aDP), this.aDQ = 1 + bx.by(ao - 1, this.aDP), this.dZ = new Array(this.da * this.aDQ), he.ko.oh(this.dZ);
		var gV, gW, aDM = this.aDM,
			cG = this.da;
		for (gV = -1; gV <= 1; gV++)
			for (gW = -1; gW <= 1; gW++) aDM[3 * (1 + gW) + 1 + gV] = gW * cG + gV
	}, this.jq = function(aDT, a2) {
		return this.dZ[a2].push(aDT), this.dZ[a2].length - 1
	}, this.aDC = function(aDU, aCx, aD2) {
		var aDV, aDW, aCx = ja.dX(aCx),
			aD2 = ja.dX(aD2);
		return aCx === aD2 ? aDU : (aDV = this.dZ[aCx].pop(), this.dZ[aCx].length === aDU ? this.jq(aDV, aD2) : (aDW = this.dZ[aCx][aDU], this.dZ[aCx][aDU] = aDV, dY.fc.aCH[aDV] = aDU, this.jq(aDW, aD2)))
	}
}

function aBl() {
	function a4n(aD2, aDX) {
		if (! function(aD2, aBx) {
				var cf = ja.dW(aD2),
					aDa = Math.abs(ja.ch(aBx) - ja.ch(cf)),
					cf = Math.abs(ja.cj(aBx) - ja.cj(cf));
				0 !== Math.max(aDa, cf) && ! function(aCx, aD2, aDa, aDb) {
					var aDd = ja.d9(aCx),
						aCx = ja.dC(aCx),
						aDf = ja.d9(aD2),
						aD2 = ja.dC(aD2),
						aDf = aDf - aDd,
						aD2 = aD2 - aCx,
						aDj = Math.abs(aDf),
						aDk = Math.abs(aD2),
						aDf = 0 < aDf ? 1 : 3,
						aD2 = 0 < aD2 ? 2 : 0;
					aDk < aDj ? aDn(aDd, aCx, aDd + aDj, aCx + aDk, aDf, aD2, aDa) : aDn(aCx, aDd, aCx + aDk, aDd + aDj, aD2, aDf, aDb)
				}(aD2, ja.dV(aBx), aDa, cf)
			}(aD2, aDX), 0 === de.aK[0]) return !!bJ.rb(aDX << 2);
		if (function(aBx) {
				if (bJ.rb(aBx << 2)) return 1;
				return function(aBx) {
					var a2, co, aCw = dY.fc.aCw,
						aDr = ja,
						bH = de.aK[0],
						aDs = 4 * aBx;
					for (a2 = bH - 1; 0 <= a2; a2--)
						if (co = aCw[a2], aDs = aDr.dc(aDs, co + 2 & 3), bJ.rb(aDs)) return de.aK[0] = a2, de.aO[1] = aDs >> 2, de.aO[2] = 1 + co, 1;
					return
				}(aBx)
			}(aDX)) {
			var a2, aDX = ja.dW(aD2),
				kq = yw,
				aCw = dY.fc.aCw,
				bH = de.aK[0] - 1,
				aDs = 4 * aDX,
				cc = ja.cc;
			for (a2 = 0; a2 < bH; a2++)
				if (aDs += cc[aCw[a2]], 0 !== kq[aDs + 3] || 2 !== kq[aDs + 2]) return !!void 0;
			return !!1
		}
		return !1
	}

	function aDn(aDd, aDe, aDf, aDg, aDl, aDm, aDa) {
		for (var gW, aCw = dY.fc.aCw, bQ = 0, aDo = 0, eH = aDg - aDe, cG = aDf - aDd, aDp = aDd % 16, a2 = 1; a2 <= aDa; a2++) aCw[bQ++] = aDl, aCw[bQ] = aDm, bQ += (gW = (eH * (aDp + (a2 << 4)) + .5) / cG >> 4) - aDo, aDo = gW;
		de.aQ(de.aK, bQ)
	}
	this.jp = function(player, aDX) {
		var co, cf, ce = ja.cq(player, aDX);
		return ce !== aDX && (co = ja.cd(ce, aDX), cf = ja.db(ce, co), !(!bJ.rb(cf << 2) && (co = ja.cn(ce, aDX, co), cf = ja.db(ce, co), bJ.l0(cf << 2) || !bJ.rb(cf << 2)) || (de.aO[0] = cf, de.aO[1] = aDX, de.aO[2] = 0, !a4n(ja.dV(cf), aDX)) ||
			0 !== de.aO[2] && ja.cz(player, de.aO[1] + ja.cb[de.aO[2] - 1] << 2)))
	}, this.js = function(aDX) {
		var aCx = dY.fc.aC7[de.aO[3]];
		return de.aO[1] = aDX, de.aO[2] = 0, a4n(aCx, aDX)
	}
}

function aBh() {
	var aCT = 32,
		aDu = new Array(2);

	function ke(eo) {
		var gV, gW, cr, dA, d7, m4 = aCT,
			rG = he.hf.ke(m4, m4),
			ou = he.hf.getContext(rG, !0),
			a3D = he.hf.getImageData(ou, m4, m4),
			kq = a3D.data,
			kY = (m4 >> 1) - .5,
			aDv = Math.sqrt(kY * kY);
		for (kq.fill(255), gW = 0; gW < m4; gW++)
			for (gV = 0; gV < m4; gV++) d7 = gV - kY, dA = gW - kY, cr = 4 * (gW * m4 + gV), d7 = 714 * (aDv - Math.sqrt(d7 * d7 + dA * dA)) / aDv, kq[2 + cr] = eo, kq[3 + cr] = 255 < d7 ? 0 : d7;
		return ou.putImageData(a3D, 0, 0), rG
	}
	this.aC4 = -1, this.c5 = function() {
		this.aC4 = -1, aDu[0] || (aDu[0] = ke(255), aDu[1] = ke(0))
	}, this.aDw = function(ou, d0, gV, gW, mg, a2) {
		ja.dI() && (ou.setTransform(d0 *= 4 / 3 * .625, 0, 0, d0, gV - (mg *= 4 / 3), gW - mg), ou.drawImage(aDu[+(dY.fc.aC3[a2] === this.aC4)], 0, 0))
	}
}

function a7D() {
	var a0Z, a78, sz, aR, a4d, nQ;

	function aE1() {}

	function a7E() {
		fV.a7E(a0Z, a78)
	}

	function aE3(nR) {
		1 === ++sz ? a4d.readAsArrayBuffer(nR.data) : aR.push(nR.data)
	}

	function aDy() {
		sz--, pr.aE5(a0Z, new Uint8Array(a4d.result)), 0 < sz && (a4d.readAsArrayBuffer(aR[0]), aR.shift())
	}

	function aE4() {}

	function a7J(nR) {
		fV.a7J(a0Z, nR)
	}
	this.c5 = function(c8, aDx) {
		a0Z = c8, a78 = aDx, sz = 0, aR = [], (a4d = new FileReader).addEventListener("loadend", aDy);
		c8 = uK[0];
		a0Z < fV.a1N ? c8 += fV.a71[a0Z] + uK[1 + a7S] : c8 += fV.a71[0] + "/i" + (1 + a7S) + (a0Z - fV.a1O) + "/", (nQ = new WebSocket(c8)).onopen = a7E, nQ.onmessage = aE3, nQ.onclose = a7J, nQ.onerror = aE4
	}, this.aE0 = function() {
		return nQ.readyState === nQ.CONNECTING
	}, this.a0R = function() {
		return nQ.readyState === nQ.OPEN
	}, this.a7A = function() {
		return this.aE0() || this.a0R()
	}, this.a7B = function(aDx) {
		a78 = aDx
	}, this.send = function(jT) {
		this.a0R() && nQ.send(jT)
	}, this.close = function(a7G) {
		this.a7A() && (nQ.close(a7G), this.k8())
	}, this.k8 = function() {
		nQ.onopen = aE1, nQ.onmessage = aE1, nQ.onclose = aE1, nQ.onerror = aE1, a4d.removeEventListener("loadend", aDy)
	}
}

function vU() {
	if (er < 3) return !1;
	if (bx.by(3 * bi[g9[2]], 2) < bi[g9[0]]) return !1;
	if (bi[g9[0]] + bi[g9[1]] + bi[g9[2]] < pH - bx.by(pH, 10)) return !1;
	if (8 * Math.min(Math.min(bB[g9[0]], bB[g9[1]]), bB[g9[2]]) < 5 * Math.max(Math.max(bB[g9[0]], bB[g9[1]]), bB[g9[2]])) return !1;
	if (di) {
		if (ep.eq[g9[0]] === ep.eq[g9[1]]) return !1;
		if (ep.eq[g9[0]] === ep.eq[g9[2]]) return !1;
		if (ep.eq[g9[1]] === ep.eq[g9[2]]) return !1
	}
	return !0
}

function a7b() {
	this.dt = 501, this.nI = new Uint32Array(this.dt), this.oy = new Uint32Array(this.dt), this.yc = new Uint16Array(this.dt), this.sA = 0, this.aE8 = 1, this.eo = 0, this.max = [0, 0, 0], this.bF = 0, this.aE9 = ["Avg. Attack Strength",
		"Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs",
		"Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses"
	], this.c5 = function() {
		this.sA = 0, this.aE8 = 1, this.eo = 0, this.aEA(), this.aEB()
	}, this.ji = function(player, dK) {
		player === bA && (this.bF[0] += dK, this.bF[1]++, this.bF[12] += de.aL[1], this.bF[13] += de.aL[0])
	}, this.jA = function(player, ij) {
		player === bA && (fR.jA(de.aL[0], de.aL[1], ij), this.bF[12] += de.aL[1], this.bF[16] += de.aL[0]), ij === bA && (fR.tC(de.aL[0], player), this.bF[10] += de.aL[0])
	}, this.eY = function() {
		0 < this.eo-- || this.aEC()
	}, this.aEC = function() {
		0 !== dG[bA] && (this.nI[this.sA] = bi[bA], this.oy[this.sA] = bB[bA], this.yc[this.sA] = bC.yd(bA), this.aED(this.sA), this.sA++, this.sA === this.dt && this.aEE(), this.eo = this.aE8 - 1, lz.cB())
	}, this.aEE = function() {
		this.aEA(), this.aED(0), this.sA = 1 + b6(this.dt, 2);
		for (var a2 = 1; a2 < this.sA; a2++) this.nI[a2] = this.nI[2 * a2], this.oy[a2] = this.oy[2 * a2], this.yc[a2] = this.yc[2 * a2], this.aED(a2);
		this.aE8 *= 2
	}, this.aEA = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.aEB = function() {
		this.bF = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.aED = function(a2) {
		this.max[0] = this.nI[a2] > this.max[0] ? this.nI[a2] : this.max[0], this.max[1] = this.oy[a2] > this.max[1] ? this.oy[a2] : this.max[1], this.max[2] = this.yc[a2] > this.max[2] ? this.yc[a2] : this.max[2]
	}
}

function a7c() {
	this.cG = 0, this.eH = 0, this.m6 = 0, this.m7 = 0, this.zR = 0, this.zS = 0, this.tT = 0, this.tU = 0, this.a2N = 0, this.a14 = 0, this.aEF = 0, this.aEG = 0, this.v3 = 0, this.c8 = 0, this.ru = ["Territory", "Balance", "Interest", "Numbers"],
		this.o8 = !1, this.aEH = -1, this.aEI = !1, this.aEJ = [0, 0], this.c5 = function() {
			this.o8 = !1, this.aEH = -1, this.aEI = !1, this.resize()
		}, this.resize = function() {
			this.cG = p < 1.369 * q ? p : 1.369 * q;
			var bR = o && p < q ? 1 : o ? .8 : p < q ? .65 : .59;
			this.cG = Math.floor(bR * this.cG), this.cG -= o && p < q ? 2 * k1 + 2 : 0, this.eH = Math.floor(this.cG / 1.369), this.v3 = Math.floor(this.eH / 150), this.v3 = Math.max(this.v3, 1.5), this.m6 = Math.floor(1 + .02 * this.cG), this.m7 =
				Math.floor(1 + .04 * this.cG), this.tT = this.m7, this.tU = Math.floor(1 + .075 * this.cG), this.a14 = Math.floor(1 + .1125 * this.cG), this.aEF = Math.floor(this.cG * (o ? .03 : .029)), this.aEF = Math.max(this.aEF, 4), this.aEG =
				Math.floor(.035 * this.cG), this.aEG = Math.max(this.aEG, 4), this.a2N = this.eH - 2 * this.tT - this.tU - this.a14, this.o8 && this.aEK()
		}, this.cL = function(cM, cN) {
			var lM, lL;
			return !!this.o8 && (lL = cM, lM = cN, cM -= b6(gd - this.cG, 2), cN -= b6(cP - this.eH, 2), cM < 0 || cN < 0 || cM >= this.cG || cN >= this.eH || cM >= this.cG - this.a14 && cN < this.a14 ? 1 < lx.cL(lL, lM) || this.k8() : cN < this
				.a14 || (cN < this.eH - this.tU ? (this.aEI = !0, this.aEH = (cM - 2 * this.m6 - this.zR) / this.zS, 3 !== this.c8 && (aA.cJ = !0)) : (lL = (lL = Math.floor(cM / (this.cG / this.ru.length))) < 0 ? 0 : lL >= this.ru.length ? this
					.ru.length - 1 : lL) !== this.c8 && (this.c8 = lL, this.aEK(), aA.cJ = !0)), !0)
		}, this.oV = function() {
			var aEL = Math.floor((this.aEJ[0] + dL) / dM),
				aEM = Math.floor((this.aEJ[1] + dN) / dM);
			aEL < 1 || aEM < 1 || an - 1 <= aEL || ao - 1 <= aEM || console.log(aEL + " " + aEM)
		}, this.nf = function(cM, cN) {
			return this.aEJ[0] = cM, this.aEJ[1] = cN, !(!this.o8 || !this.aEI || (cM -= b6(gd - this.cG, 2), cN = this.aEH, this.aEH = (cM - 2 * this.m6 - this.zR) / this.zS, (0 <= this.aEH && this.aEH <= 1 || 0 <= cN && cN <= 1) && (aA.cJ = !0),
				0))
		}, this.oC = function() {
			this.aEI && (this.aEI = !1)
		}, this.oR = function() {
			this.o8 ? this.k8() : this.show()
		}, this.show = function() {
			bE.sA < 2 || (this.o8 = !0, this.aEK())
		}, this.k8 = function() {
			this.o8 = !1, this.aEH = -1, aA.cJ = !0
		}, this.aEK = function() {
			this.c8 < 2 ? this.zR = cH.measureText(fi.gm(bE.max[this.c8]), this.aEF + cA) : 2 === this.c8 && (this.zR = cH.measureText(fT.tF(6, 2), this.aEF + cA)), this.zS = this.cG - 2 * this.m6 - this.zR - this.m7
		}, this.cB = function() {
			this.o8 && this.aEK()
		}, this.cU = function() {
			this.o8 && this.tZ()
		}, this.tZ = function() {
			var gV = b6(gd - this.cG, 2),
				gW = b6(cP - this.eH, 2);
			cV.setTransform(1, 0, 0, 1, gV, gW), cV.fillStyle = cY.hl, cV.fillRect(0, this.a14, this.cG, this.eH - this.a14), this.aEN(), this.aEO(), cV.strokeRect(0, 0, this.cG, this.eH), cV.textAlign = uF, cV.font = this.aEF + cA, 0 === this.c8 ?
				this.aEP(bE.nI, gV, gW) : 1 === this.c8 ? this.aEP(bE.oy, gV, gW) : 2 === this.c8 ? this.aEQ(gV, gW) : 3 === this.c8 && (this.aER(gV, gW), this.aES(gV, gW)), lx.sC(Math.floor(gV + this.cG - .725 * this.a14), Math.floor(gW + .275 *
					this.a14), Math.floor(.45 * this.a14)), cV.setTransform(1, 0, 0, 1, 0, 0)
		}, this.aEN = function() {
			var a2, r;
			for (cV.lineWidth = this.v3, cV.textBaseline = cW, cV.textAlign = cX, cV.strokeStyle = cY.cZ, cV.font = c9 + this.aEG + cA, r = this.cG / this.ru.length, cV.fillStyle = cY.i1, cV.fillRect(this.c8 * r, this.eH - this.tU, r, this.tU), cV
				.fillStyle = cY.cZ, cV.fillRect(0, this.eH - this.tU - .5 * this.v3, this.cG, this.v3), a2 = 1; a2 <= 3; a2++) cV.fillRect(a2 * r, this.eH - this.tU, this.v3, this.tU);
			for (a2 = this.ru.length - 1; 0 <= a2; a2--) cV.fillText(this.ru[a2], (a2 + .5) * r, this.eH - .46 * this.tU)
		}, this.aEO = function() {
			cV.fillStyle = cY.iG, cV.fillRect(0, 0, this.cG, this.a14), cV.fillStyle = cY.cZ, cV.fillRect(0, this.a14 - .5 * this.v3, this.cG, this.v3), cV.font = c9 + Math.floor(.39 * this.a14) + cA, cV.fillText("Statistics", Math.floor(this.cG /
				2), Math.floor(.55 * this.a14))
		}, this.aEP = function(aR, gV, gW) {
			var kY = bE.max[this.c8],
				c3 = (cV.setTransform(1, 0, 0, 1, gV + 2 * this.m6 + this.zR, gW + this.tT + this.a14), cV.lineWidth = 2, this.a2N / Math.sqrt(kY));
			cV.beginPath(), cV.moveTo(this.zS, this.a2N - c3 * Math.sqrt(aR[bE.sA - 1]));
			for (var a2 = bE.sA - 2; 0 <= a2; a2--) cV.lineTo(a2 * this.zS / (bE.sA - 1), this.a2N - c3 * Math.sqrt(aR[a2]));
			cV.stroke();
			gV = this.sC(aR, c3, .5);
			gV < .95 && cV.fillText(fi.gm(kY), -this.m6, 0), .05 < Math.abs(gV - .5) && cV.fillText(fi.gm(Math.floor(kY / 4)), -this.m6, Math.floor(this.a2N / 2)), .05 < gV && cV.fillText("0", -this.m6, this.a2N)
		}, this.aEQ = function(gV, gW) {
			cV.setTransform(1, 0, 0, 1, gV + 2 * this.m6 + this.zR, gW + this.tT + this.a14), cV.lineWidth = 2;
			var c3 = this.a2N / Math.max(bE.max[this.c8], 1);
			cV.beginPath(), cV.moveTo(this.zS, this.a2N - c3 * bE.yc[bE.sA - 1]);
			for (var a2 = bE.sA - 2; 0 <= a2; a2--) cV.lineTo(a2 * this.zS / (bE.sA - 1), this.a2N - c3 * bE.yc[a2]);
			cV.stroke();
			gV = this.sC(bE.yc, c3, 1), gW = bE.max[this.c8] / 100;
			gV < .95 && cV.fillText(fT.tF(gW, 2), -this.m6, 0), .05 < Math.abs(gV - .5) && cV.fillText(fT.tF(gW / 2, 2), -this.m6, Math.floor(this.a2N / 2)), .05 < gV && cV.fillText(fT.tF(0, 2), -this.m6, this.a2N)
		}, this.aER = function(gV, gW) {
			cV.setTransform(1, 0, 0, 1, gV + .34 * this.cG, gW + 2 * this.tT + this.a14), cV.textAlign = uF;
			for (var y0 = this.eH - 4 * this.tT - this.tU - this.a14, a2 = 7; 0 <= a2; a2--) cV.fillText(bE.aE9[a2], 0, a2 * y0 / 7);
			cV.setTransform(1, 0, 0, 1, gV + .39 * this.cG, gW + 2 * this.tT + this.a14), cV.textAlign = sk;
			gV = bE.bF[1];
			for (cV.fillText(fT.tF(bE.bF[0] / (10 * (gV < 1 ? 1 : gV)), 1), 0, 0), a2 = 6; 1 <= a2; a2--) cV.fillText(bE.bF[a2].toString(), 0, a2 * y0 / 7);
			cV.fillText(fT.tF(100 * (1 - bi[bA] / bE.bF[7]), 0), 0, y0)
		}, this.aES = function(gV, gW) {
			cV.setTransform(1, 0, 0, 1, gV + .79 * this.cG, gW + 2 * this.tT + this.a14), cV.textAlign = uF;
			var a2, y0 = this.eH - 4 * this.tT - this.tU - this.a14;
			for (cV.fillStyle = cY.hw, a2 = 2; 0 <= a2; a2--) cV.fillText(bE.aE9[a2 + 8], 0, a2 * y0 / 9);
			for (cV.fillStyle = cY.hv, cV.fillText(bE.aE9[11], 0, 3 * y0 / 9), cV.fillStyle = cY.i9, a2 = 8; 4 <= a2; a2--) cV.fillText(bE.aE9[a2 + 8], 0, a2 * y0 / 9);
			cV.fillStyle = cY.i8, cV.fillText(bE.aE9[17], 0, 9 * y0 / 9), cV.fillStyle = cY.hw;
			var sr = fi.gm(bE.bF[8] + bE.bF[9] + bE.bF[10] + bE.bF[11]),
				aET = cV.measureText(sr).width,
				gV = (cV.setTransform(1, 0, 0, 1, gV + .83 * this.cG + aET, gW + 2 * this.tT + this.a14), cV.fillText(fi.gm(bE.bF[8]), 0, 0), cV.fillText(fi.gm(bE.bF[9]), 0, y0 / 9), cV.fillText(fi.gm(bE.bF[10]), 0, 2 * y0 / 9), cV.fillStyle = cY.hv,
					cV.fillText(sr, 0, 3 * y0 / 9), cV.fillStyle = cY.i9, bE.bF[13] - as.a5I(bA)),
				aET = (cV.fillText(fi.gm(bE.bF[12]), 0, 4 * y0 / 9), cV.fillText(fi.gm(gV), 0, 5 * y0 / 9), cV.fillText(fi.gm(bE.bF[14]), 0, 6 * y0 / 9), cV.fillText(fi.gm(bE.bF[15]), 0, 7 * y0 / 9), cV.fillText(fi.gm(bE.bF[16]), 0, 8 * y0 / 9), bE
					.bF[12] + gV + bE.bF[14] + bE.bF[15] + bE.bF[16] + bE.bF[17]);
			cV.fillStyle = cY.i8, cV.fillText(fi.gm(aET), 0, y0), cV.fillStyle = cY.cZ
		}, this.sC = function(aR, c3, wi) {
			var a2, nR, aS;
			return this.aEH < 0 || 1 < this.aEH ? .25 : (a2 = this.aEH * (bE.sA - 1), aS = aR[nR = Math.floor(a2)], aS += (a2 - nR) * (aR[nR < bE.sA - 1 ? nR + 1 : nR] - aS), cV.strokeStyle = cY.hp, .04 < this.aEH && this.aEW(0, this.a2N - c3 * Math
					.pow(aS, wi), a2 * this.zS / (bE.sA - 1), this.a2N - c3 * Math.pow(aS, wi)), .04 < aS / bE.max[this.c8] && this.aEW(a2 * this.zS / (bE.sA - 1), this.a2N, a2 * this.zS / (bE.sA - 1), this.a2N - c3 * Math.pow(aS, wi)), cV
				.fillStyle = cY.iB, cV.beginPath(), cV.arc(a2 * this.zS / (bE.sA - 1), this.a2N - c3 * Math.pow(aS, wi), Math.max(2, .014 * this.eH), 0, 2 * Math.PI), cV.fill(), aR = this.aEH * aA.ye, aR = 0 === dG[bA] ? Math.floor(aR * fr.yk) :
				Math.floor(aR * aA.en()), cV.fillStyle = cY.cZ, cV.fillText(1 === wi ? fT.tF(aS / 100, 2) : fi.gm(Math.floor(aS)), -this.m6, this.a2N - c3 * Math.pow(aS, wi)), cV.textAlign = cX, cV.fillText(fT.xK(aR), a2 * this.zS / (bE.sA - 1),
					this.a2N + this.aEF - (o ? 2 : 0) - this.v3), cV.textAlign = uF, c3 * Math.pow(aS, wi) / this.a2N)
		}, this.aEW = function(ga, gb, gc, ge) {
			cV.beginPath(), cV.moveTo(ga, gb), cV.lineTo(gc, ge), cV.stroke()
		}
}

function q1() {
	this.aEX = "https://", this.aEY = this.aEX + "territorial.io/", this.a9r = this.aEY + "changelog", this.a9s = this.aEY + "terms", this.tY = this.aEY + "cookie_policy", this.a7W = this.aEY + "privacy_policy", this.a9o = this.aEY + "tutorial", this
		.a9p = this.aEY + "players", this.a9q = this.aEY + "clans", this.zj = this.aEX + "play.google.com/store/apps/details?id=territorial.io", this.zk = this.aEX + "apps.apple.com/app/id1581110913", this.zl = this.aEX +
		"www.youtube.com/watch?v=toZTQ8aRdFc", this.zm = this.aEX + "discord.gg/pthqvpTXmh", this.zn = this.aEX + "www.instagram.com/davidtschacher/"
}

function r2() {
	this.fc = new aEZ, this.lv = new aEa, this.c5 = function() {
		this.fc.c5()
	}, this.eY = function() {
		0 !== this.fc.tb && this.fc.tb--
	}
}

function aEa() {
	this.cU = function() {
		if (0 !== fg.fc.tb && (cV.globalAlpha = Math.min(fg.fc.tb / 580, 1), cV.drawImage(fg.fc.aEd, 1 + hE.gf(), 1 + hE.cT()), cV.globalAlpha = 1, h9)) {
			var a2, ga = dL / dM,
				gb = dN / dM,
				gc = (gd + dL) / dM,
				ge = (cP + dN) / dM,
				bQ = fg.fc.aEe * dM,
				aEf = fg.fc.aEf;
			for (a2 = dF - 1; 0 <= a2; a2--) ! function(a2, bQ, ga, gb, gc, ge, aEf) {
				0 === dG[a2] || 0 === bi[a2] || (gc = gd * ((eL[a2] + eK[a2] + 1) / 2 - ga) / (gc - ga) - .5 * bQ, ga = cP * ((eO[a2] + eN[a2] + 1) / 2 - gb) / (ge - gb) - .5 * bQ, gd < gc) || cP < ga || gc < -bQ || ga < -bQ || (cV
					.setTransform(dM, 0, 0, dM, gc, ga), cV.drawImage(aEf[di ? ep.eq[a2] : 1], 0, 0))
			}(a2, bQ, ga, gb, gc, ge, aEf);
			cV.setTransform(dM, 0, 0, dM, 0, 0)
		}
	}
}

function aEZ() {
	this.aEe = 28, this.tb = 0, this.aEd = null;
	var aEh = this.aEf = null;

	function aEk(m4, aEm) {
		var gV, gW, cr, d7, rG = he.hf.ke(m4, m4),
			ou = he.hf.getContext(rG, !0),
			a3D = he.hf.getImageData(ou, m4, m4),
			kq = a3D.data,
			kY = (m4 >> 1) - .5,
			aEn = .5 + kY;
		for (aEn *= aEn, gW = 0; gW < m4; gW++)
			for (gV = 0; gV < m4; gV++) d7 = (d7 = gV - kY) * d7 + (d7 = gW - kY) * d7, kq[cr = 4 * (gW * m4 + gV)] = aEm[0], kq[1 + cr] = aEm[1], kq[2 + cr] = aEm[2], kq[3 + cr] = (aEn - d7) * aEm[3] / aEn;
		return ou.putImageData(a3D, 0, 0), rG
	}

	function aDw(a2, ou, rG, m4) {
		var gV;
		0 !== dG[a2] && 0 !== bi[a2] && (gV = eL[a2] + eK[a2] + 1 - m4 - 2 >> 1, m4 = eO[a2] + eN[a2] + 1 - m4 - 2 >> 1, ou.drawImage(rG[di ? ep.eq[a2] : a2 < dF ? 1 : 0], gV, m4))
	}
	this.c5 = function() {
		var rr;
		this.tb = 700,
			function(rr) {
				var a2, m4 = rr.aEe;
				if (rr.aEf = [], aEh = [], di)
					for (a2 = 0; a2 <= pK; a2++) rr.aEf.push(aEk(m4, ep.aEl[ep.n9[a2]])), aEh.push(aEk(m4 >> 1, ep.aEl[ep.n9[a2]]));
				else rr.aEf.push(aEk(m4, ep.aEl[0])), rr.aEf.push(aEk(m4, ep.aEl[4])), aEh.push(aEk(m4 >> 1, ep.aEl[0]))
			}(this),
			function(rr, aEo) {
				var a2, aEd = rr.aEd,
					ou = he.hf.getContext(aEd, !0),
					bH = bM,
					m4 = rr.aEe >> 1;
				ou.imageSmoothingEnabled = !1, ou.setTransform(1, 0, 0, 1, 0, 0), aEo && ou.clearRect(0, 0, aEd.width, aEd.height);
				for (a2 = dF; a2 < bH; a2++) aDw(a2, ou, aEh, m4)
			}(this, null !== (rr = this).aEd && rr.aEd.width === an - 2 && rr.aEd.height === ao - 2 || (rr.aEd = he.hf.ke(an - 2, ao - 2), !1))
	}, this.pE = function() {
		for (var bH = dF, m4 = this.aEe, aEf = this.aEf, ou = he.hf.getContext(this.aEd, !0), a2 = 0; a2 < bH; a2++) aDw(a2, ou, aEf, m4)
	}
}

function r3() {
	this.aEp = -1, this.c5 = function() {
		this.aEp = -1
	}, this.eY = function() {
		-1 !== this.aEp && my.mj.ms(this.aEp)
	}, this.j4 = function(player) {
		return !!lx.s9(player) && (1 === er ? (this.aEp = player, fH && h9 && jd.eY()) : (fR.mq(player, player === bA ? 21 : 22), 8 === fF ? this.aEp = 1 - player : fH ? (a4G(player), a7L(), h9 && jd.eY()) : this.aEq(player)), !0)
	}, this.jX = function(player) {
		1 === fy && 0 !== dG[player] && 2 !== dH[player] && (8 === fF ? this.aEp = 1 - player : this.aEq(player)), fR.mq(player, 4)
	}, this.aEq = function(player) {
		h9 ? (a4G(player), a7L()) : fZ.a6x(player)
	}
}

function a7e() {
	this.a1v = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.xz = [cY
		.cZ, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", cY.cZ, "rgb(170,170,170)"
	], this.aEr = [cY.cZ, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", cY.cZ, cY.gh], this.aEs = [cY.gh, cY.cZ, cY.cZ, cY.cZ, cY.gh, cY.gh, cY.gh, cY.gh, cY.cZ];
	var aEt = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aEu = (this.a6R = ["rgba(" + aEt[0] + ",", "rgba(" + aEt[1] + ",", "rgba(" + aEt[2] + ",", "rgba(" + aEt[3] + ",", "rgba(" + aEt[4] + ",", "rgba(" + aEt[5] + ",", "rgba(" + aEt[6] + ",", "rgba(" + aEt[7] + ",", "rgba(" + aEt[8] + ",",
			"rgba(" + aEt[9] + ","
		], this.a6S = ["rgb(" + aEt[0] + ")", "rgb(" + aEt[1] + ")", "rgb(" + aEt[2] + ")", "rgb(" + aEt[3] + ")", "rgb(" + aEt[4] + ")", "rgb(" + aEt[5] + ")", "rgb(" + aEt[6] + ")", "rgb(" + aEt[7] + ")", "rgb(" + aEt[8] + ")", "rgb(" + aEt[
			9] + ")"
		], this.c4 = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.aEl = [
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
		aEv = (this.n9 = [0, 1, 2, 3, 4, 5, 6, 7, 8], 7),
		kX = "[",
		kZ = "]";
	this.eq = new Uint8Array(bM), this.nG = null, this.nH = null, this.c5 = function(mA) {
		this.eq.fill(0), this.aEw(), di && (fB.fC && fB.fD.a50 ? this.a3d() : 9 === fF ? this.aEx() : this.eY(mA))
	}, this.a3d = function() {
		var a2, bH = lN;
		for (this.n9 = [0, 1, 2, 3, 4, 5, 6, 7, 8], a2 = 0; a2 < bH; a2++) this.eq[a2] = fB.fD.a50[a2]
	}, this.aEw = function() {
		for (var a2 = this.n9.length - 1; 0 <= a2; a2--) this.n9[a2] = a2;
		this.nG = [], this.nH = []
	}, this.aEx = function() {
		for (var a2 = dF + fL.a6o - 1; 0 <= a2; a2--) this.eq[a2] = 1;
		for (a2 = dF + fL.a6o; a2 < bM; a2++) this.eq[a2] = 2;
		this.n9[1] = 7, this.n9[2] = 8
	}, this.eY = function(mA) {
		var ck = new Uint8Array(dF),
			cl = new Uint8Array(dF),
			aEy = new Uint16Array(8),
			aEz = new Uint16Array(this.n9.length);
		this.aF0(mA, ck, cl, aEy), this.a3b(aEy), fH || this.aF1(aEz, ck, cl), this.aF2(ck, cl, aEz), fH ? this.aF3() : this.aF4()
	}, this.aF0 = function(mA, ck, cl, aF5) {
		for (var e8, nR, aF6, bH = this.n9.length - 1, aR = new Uint16Array(bH), a2 = dF - 1; 0 <= a2; a2--) {
			for (e8 = bH; 1 <= e8; e8--) aR[e8 - 1] = Math.abs(4 * mA[a2].a2b[0] - aEu[e8][0]) + Math.abs(4 * mA[a2].a2b[1] - aEu[e8][1]) + Math.abs(4 * mA[a2].a2b[2] - aEu[e8][2]);
			for (aF6 = 768, e8 = bH - 1; 0 <= e8; e8--) aR[nR = (e8 + a2) % bH] < aF6 && (aF6 = aR[nR], ck[a2] = nR);
			for (aF5[ck[a2]] += 4, aF6 = 768, e8 = bH - 1; 0 <= e8; e8--) aR[nR = (e8 + a2) % bH] < aF6 && nR !== ck[a2] && (aF6 = aR[nR], cl[a2] = nR);
			aF5[cl[a2]]++
		}
	}, this.a3b = function(aF5) {
		for (var e8, rE, bH = this.n9.length - 1, a2 = bH; 0 <= a2; a2--) this.n9[a2] = a2;
		for (a2 = bH - 1; 0 <= a2; a2--) aF5[a2]++;
		for (a2 = 1; a2 <= bH; a2++) {
			for (rE = 0, e8 = 1; e8 < bH; e8++) aF5[e8] > aF5[rE] && (rE = e8);
			aF5[rE] = 0, this.n9[a2] = rE + 1
		}
	}, this.aF1 = function(aEz, ck, cl) {
		var a2, e8, aF7, eo, bR, nR, hN, op, aF8 = this.n9.length - 1,
			aF9 = new Uint16Array(aF8),
			aFA = [],
			aFB = 0;
		loop: for (a2 = dF - 1; 0 <= a2; a2--)
			if (null !== (aF7 = function(a2) {
					var aCr, aCf;
					return (aCr = tQ[a2].indexOf(kX)) < 0 || !(1 < (aCf = tQ[a2].indexOf(kZ)) - aCr && aCf - aCr <= aEv + 1) ? null : tQ[a2].substring(aCr + 1, aCf).toUpperCase().trim()
				}(a2))) {
				for (e8 = this.nG.length - 1; 0 <= e8; e8--)
					if (aF7 === this.nG[e8]) {
						this.nH[e8].push(a2);
						continue loop
					} this.nG.push(aF7), aFA.push(!1), this.nH.push([]), this.nH[this.nG.length - 1].push(a2)
			}
		for (e8 = this.nG.length - 1; 0 <= e8; e8--) aFB = Math.max(aFB, this.nH[e8].length);
		for (; 2 < pK && aFB > b6(dF, pK);) pK--;
		for (e8 = this.nG.length - 1; 0 <= e8; e8--) {
			for (bR = -1, eo = this.nG.length - 1; 0 <= eo; eo--) !aFA[eo] && (-1 === bR || this.nH[eo].length > this.nH[bR].length) && (bR = eo);
			for (eo = aF8 - 1; 0 <= eo; eo--) aF9[eo] = 1;
			for (eo = this.nH[bR].length - 1; 0 <= eo; eo--) aF9[ck[this.nH[bR][eo]]] += 3, aF9[cl[this.nH[bR][eo]]]++;
			for (a2 = aF8 - 1; 0 <= a2; a2--) {
				for (nR = bR % aF8, eo = aF8 - 1; 0 <= eo; eo--) aF9[eo] > aF9[nR] && (nR = eo);
				for (hN = -1, eo = pK; 0 < eo; eo--)
					if (this.n9[eo] === nR + 1) {
						hN = eo;
						break
					} if (aF9[nR] = 0, -1 !== hN) {
					for (op = 0, eo = pK; 0 < eo; eo--) aEz[hN] > aEz[eo] && op++;
					if (op !== pK - 1) {
						for (eo = this.nH[bR].length - 1; 0 <= eo; eo--) aEz[hN]++, this.eq[this.nH[bR][eo]] = hN;
						break
					}
				}
			}
			aFA[bR] = !0
		}
	}, this.aF2 = function(ck, cl, aEz) {
		for (var a2, d6, bH = this.n9.length - 1, border = b6(dF, pK), aFD = (0 < dF % pK && border++, new Uint8Array(1 + bH)), e8 = bH; 1 <= e8; e8--) aFD[this.n9[e8]] = e8;
		for (a2 = 0; a2 < dF; a2++) d6 = aFD[ck[a2] + 1], 0 === this.eq[a2] && d6 <= pK && aEz[d6] < border && (aEz[d6]++, this.eq[a2] = d6);
		for (a2 = 0; a2 < dF; a2++) d6 = aFD[cl[a2] + 1], 0 === this.eq[a2] && d6 <= pK && aEz[d6] < border && (aEz[d6]++, this.eq[a2] = d6);
		for (e8 = pK; 1 <= e8; e8--)
			for (a2 = dF - 1; 0 <= a2 && !(aEz[e8] >= border); a2--) 0 === this.eq[a2] && (aEz[e8]++, this.eq[a2] = e8)
	}, this.aF3 = function() {
		var a2, dx, aF5 = new Uint16Array(pK);
		for (aF5[pK - 1] = bM, a2 = pK - 2; 0 <= a2; a2--) aF5[a2] = fI.fJ[a2].t6;
		for (aF5[0]--, dx = 0 === aF5[0] ? 1 : 0, a2 = dF; a2 < bM; a2++) this.eq[a2] = dx + 1, aF5[dx]--, aF5[dx] <= 0 && dx++
	}, this.aF4 = function() {
		for (var a2 = dF; a2 < bM; a2++) this.eq[a2] = 1 + a2 % pK
	}
}

function bj() {
	for (var gV, gW, a2 = ae - 1; 0 <= a2; a2--) gV = b6(ag[a2], 4) % an, gW = b6(ag[a2], 4 * an), eL[aa] = eL[aa] > gV ? gV : eL[aa], eO[aa] = eO[aa] > gW ? gW : eO[aa], eK[aa] = eK[aa] < gV ? gV : eK[aa], eN[aa] = eN[aa] < gW ? gW : eN[aa]
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
	var bR, bP, aFE, aFF, bH = ba[aa].length;
	loop: for (var a2 = bH - 1; 0 <= a2; a2--) {
		for (aFE = aFF = !1, bR = 3; 0 <= bR; bR--) {
			if (bP = ba[aa][a2] + aj[bR], bJ.a3n(bP, aa)) continue loop;
			aFE = aFE || bJ.rb(bP), aFF = aFF || bJ.l0(bP)
		}
		aFE ? bb[aa].push(ba[aa][a2]) : aFF ? be[aa].push(ba[aa][a2]) : bJ.lh(ba[aa][a2], aa), ba[aa][a2] = ba[aa][bH - 1], ba[aa].pop(), bH--
	}
}

function bY() {
	bi[ad] -= ae
}

function bZ(border) {
	for (var bH = border.length, a2 = bH - 1; 0 <= a2; a2--) bJ.lp(ad, border[a2]) || (border[a2] = border[bH - 1], border.pop(), bH--)
}

function bc(border) {
	for (var bH = border.length, a2 = bH - 1; 0 <= a2; a2--) !bJ.lp(ad, border[a2]) && bJ.bK(border[a2]) && (border[a2] = border[bH - 1], border.pop(), bH--)
}

function bd(border) {
	for (var bR, bP, bH = border.length, a2 = bH - 1; 0 <= a2; a2--)
		for (bR = 3; 0 <= bR; bR--)
			if (bP = border[a2] + aj[bR], bJ.a3n(bP, ad)) {
				ba[ad].push(border[a2]), border[a2] = border[bH - 1], border.pop(), bH--;
				break
			}
}

function bf() {
	for (var bR, bP, a2 = ae - 1; 0 <= a2; a2--)
		for (bR = 3; 0 <= bR; bR--) bP = ag[a2] + aj[bR], bJ.a3o(ad, bP) && bJ.a3p(bP) && (ba[ad].push(bP), bJ.bL(bP, ad))
}

function bg() {
	var gV, gW;
	loop: for (; eO[ad] < eN[ad];) {
		for (gV = eK[ad]; gV >= eL[ad]; gV--)
			if (bJ.lp(ad, 4 * (eO[ad] * an + gV))) break loop;
		eO[ad]++
	}
	loop: for (; eO[ad] < eN[ad];) {
		for (gV = eK[ad]; gV >= eL[ad]; gV--)
			if (bJ.lp(ad, 4 * (eN[ad] * an + gV))) break loop;
		eN[ad]--
	}
	loop: for (; eL[ad] < eK[ad];) {
		for (gW = eN[ad]; gW >= eO[ad]; gW--)
			if (bJ.lp(ad, 4 * (gW * an + eL[ad]))) break loop;
		eL[ad]++
	}
	loop: for (; eL[ad] < eK[ad];) {
		for (gW = eN[ad]; gW >= eO[ad]; gW--)
			if (bJ.lp(ad, 4 * (gW * an + eK[ad]))) break loop;
		eK[ad]--
	}
}

function e3(player, dp) {
	return 0 === ep.eq[player] || ep.eq[player] !== ep.eq[dp]
}

function rd(player, dp) {
	for (var nR, aFG = as.at(player), a2 = 0; a2 < aFG; a2++)
		if (0 === as.au(player, a2))
			if ((nR = as.az(player, a2)) === bM) {
				if (dp === bM) return !1;
				if (rc(dp)) return !0
			} else if (dp === bM) {
		if (rc(nR)) return !0
	} else if (rh(dp, nR)) return !0;
	return !1
}

function rc(player) {
	for (var a2, bQ, bH = ba[player].length, bR = 3; 0 <= bR; bR--)
		for (bQ = aj[bR], a2 = 0; a2 < bH; a2++)
			if (bJ.bU(ba[player][a2] + bQ)) return !0;
	return !1
}

function rh(ov, ow) {
	var a2, r, bR, bQ, bP, aB1 = ba[ov].length,
		aCy = ba[ow].length;
	for (aCy < aB1 && (r = ov, ov = ow, ow = r, r = aB1, aB1 = aCy, 0), bR = 3; 0 <= bR; bR--)
		for (bQ = aj[bR], a2 = 0; a2 < aB1; a2++)
			if (bP = ba[ov][a2] + bQ, bJ.bS(bP) && bJ.bT(bP) === ow) return !0;
	return !1
}

function aFH() {
	this.eY = function() {
		pk.eY(), pm.eY(), oa.eY(), fV.eY(), fu.a1P(), cR.eY(), aA.cJ && (aA.cJ = !1, aH.cU())
	}
}

function aFI() {
	this.aB = aA.aB, this.c8 = 0, this.aFJ = 0, this.a1M = 0, this.aFK = null, this.aFL = 7, this.tc = 0, this.c5 = function() {
		this.a1M = 0, this.aFK = [], this.c8 = 0, this.aFJ = 0
	}, this.aFM = function(jT) {
		var a2;
		if (h9) this.yf(jT);
		else if (this.aFK.push(jT), 2 === fy) {
			for (a2 = 0; a2 < this.aFK.length; a2++) et.iZ.eY(this.aFK[a2]);
			this.aFK = []
		}
	}, this.yf = function(jT) {
		et.iZ.eY(jT), fo.eY(), fT.yf(this.a1M), this.a1M === pL ? (jd.eY(), this.a1M = 0, this.c8 = 0, this.aFJ = 0, this.aB = aA.aB) : (this.a1M++, fS.pD(), fS.fx(!0), hb.yu())
	}, this.eY = function() {
		oa.eY(), h9 ? (aA.cJ = fT.yf(-1) || aA.cJ, fz()) : (0 !== this.c8 || aA.aB >= this.aB && (this.aB += aA.ye * Math.floor(1 + (aA.aB - this.aB) / aA.ye), 2 === fy ? fQ() : this.aFN(), this.c8++, 27 < aA.aB - this.tc)) && this.aFO(), fp(),
			aA.cJ && (aA.cJ = !1, ls()), this.tc = aA.aB
	}, this.aFO = function() {
		aA.cJ = !0, fw(), this.c8 = 0
	}, this.aFN = function() {
		var aFP, a2;
		if (this.aFJ !== 7 * this.a1M) fW(), hb.yu();
		else {
			for (aFP = !1; this.aFQ() && (aFP = !0, fW(), 0 < this.aFK.length);)
				for (a2 = this.aFL - 2; 0 <= a2; a2--) fW();
			aFP ? hb.yu() : (fQ(), hb.pG())
		}
	}, this.aFQ = function() {
		return 0 < this.aFK.length && (this.a1M++, et.iZ.eY(this.aFK[0]), this.aFK.shift(), !0)
	}
}

function aFR() {
	var aFS, aFT, aFU, a1M, aFV, c8 = 0,
		aB = aA.aB;

	function aFY() {
		! function() {
			if (!h9) return;
			if (fH) return;
			return aFV % 7 != 0 ? aFV++ : a1M === pL ? (aFb(), fT.yf(a1M), jd.eY()) : (aFb(), aFV++, a1M++, fS.pD(), fS.fx(!0)), 1
		}() && (aFb(), fW())
	}

	function aFZ() {
		c8 = 0, (h9 ? (aA.cJ = fT.yf(a1M - (aFV % 7 == 0 ? 0 : 1) + aFV % 7 / 7) || aA.cJ, fz) : lx.oQ || !ft.rz ? fz : (aA.cJ = !0, fw))()
	}

	function aFb() {
		var a2, bH, aFc = fo.jb.aAS,
			aS = fo.jb.aAT,
			aU = fo.jb.aAU,
			aW = fo.jb.aAV,
			aFd = fo.jb.aAW,
			aFe = fo.jb.aAX;
		if (aFS >= aFe.length) fR.sp("Replay Error"), my.mj.ms(-1);
		else if (aFe = aFe[aFS], aFd[aFS]) {
			for (bH = aFT + aFe, a2 = aFT; a2 < bH; a2++) et.iZ.jW(aFc[a2], aS[a2], aU[a2], aW[a2]);
			aFT += aFe, aFS++
		} else ++aFU >= aFe && (aFS++, aFU = 0)
	}
	this.aFJ = 0, this.c5 = function() {
		aFV = a1M = aFU = aFT = aFS = 0
	}, this.eY = function() {
		var aDL;
		oa.eY(), ft.vs() < 1.7 ? 0 === c8 ? aA.aB >= aB && (aDL = aA.ye / ft.vs(), aB += aDL * Math.floor(1 + (aA.aB - aB) / aDL), 2 === fy || lx.oQ || !ft.rz ? fQ() : (aFY(), hb.yu()), c8++) : aFZ() : function() {
			var aDL;
			if (aA.aB >= aB)
				if (2 === fy || lx.oQ || !ft.rz) fQ(), aB = aA.aB;
				else {
					for (aDL = aA.ye / ft.vs(), 16 < (aA.aB - aB) / aDL && (aB = aA.aB - 16 * aDL); aA.aB >= aB && 2 !== fy;) aB += aDL, aFY();
					hb.yu()
				} aFZ()
		}(), fp(), aA.cJ && (aA.cJ = !1, ls())
	}
}

function aFf() {
	var c8 = 0,
		aB = aA.aB;
	this.aFJ = 0, this.eY = function() {
		oa.eY(), h9 ? fz() : 0 === c8 ? aA.aB >= aB && (aB += aA.ye * Math.floor(1 + (aA.aB - aB) / aA.ye), 2 === fy || lx.oQ ? fQ() : (fW(), hb.yu()), c8++) : ((lx.oQ ? fz : (aA.cJ = !0, fw))(), c8 = 0), fp(), aA.cJ && (aA.cJ = !1, ls())
	}
}

function a7d() {
	function aFi() {
		aA.aB = performance.now(), aA.aFg.eY(), window.requestAnimationFrame(aFi)
	}

	function aFj() {
		var r = performance.now();
		aA.aB + 1500 < r && (aA.aB = r, aA.aFg.eY())
	}
	this.aFg = null, this.cJ = !1, this.aB = 0, this.aFh = -1, this.ye = 56, this.c5 = function() {
		this.pi(), window.requestAnimationFrame(aFi), this.aB = performance.now()
	}, this.pe = function() {
		hA ? (this.aFg = new aFR, this.aFg.c5()) : fH ? this.aFg = new aFf : (this.aFg = new aFI, this.aFg.c5())
	}, this.pi = function() {
		this.aFg = new aFH, this.cJ = !0
	}, this.oW = function() {
		1 !== fy || !fH || lx.oQ || h9 || lx.oR(), -1 === this.aFh && (this.aFh = setInterval(aFj, 2e3))
	}, this.oX = function() {
		this.cJ = !0, -1 !== this.aFh && (clearInterval(this.aFh), this.aFh = -1)
	}, this.eY = function() {
		this.aFg.aFJ++
	}, this.en = function() {
		return this.aFg.aFJ
	}
}

function qp() {
	var h0 = 0,
		aFk = !0;

	function aFm(j) {
		8 !== aH.oM() || 2 !== dH[bA] && (0 !== dG[bA] || h9) || fR.t0(j)
	}
	this.eY = function() {
		var r, tf;
		aA.aB > h0 && (h0 = aA.aB + 2500, r = new Date, tf = r.getUTCSeconds(), aFk ? tf < 45 && (aFk = !1) : tf < 45 || -1 !== aA.aFh || (aFk = !0, (tf = r.getUTCMinutes() + 1) % 15 == 0 && aFm(30 === tf ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function qd() {
	var ga, gb, gc, ge, aFn = 0,
		aFo = 0;

	function aFq() {
		return Math.pow(Math.pow(gc - ga, 2) + Math.pow(ge - gb, 2), .5)
	}

	function aFp(nR) {
		ga = kB * nR.touches[0].clientX, gb = kB * nR.touches[0].clientY, gc = kB * nR.touches[1].clientX, ge = kB * nR.touches[1].clientY
	}
	this.nj = function(nR) {
		return 1 < nR.touches.length ? (aFo = aA.aB, aFn = 3, aFp(nR), ly.k8(), !0) : (aFn = 0, !1)
	}, this.nk = function(nR) {
		var a8J, d4, d5;
		return 0 !== fy && 1 < nR.touches.length && (aFn = Math.max(aFn - 1, 0), fq.hT() && (a8J = aFq(), aFp(nR), nR = aFq(), d4 = Math.floor((ga + gc) / 2), d5 = Math.floor((gb + ge) / 2), hE.wR(d4, d5, Math.max(.125, nR) / Math.max(.125,
			a8J)), aA.cJ = !0), !0)
	}, this.oF = function() {
		var gV, gW;
		return !!(aFn && (aFn = 0, aA.aB < aFo + 500)) && (gV = (ga + gc) / 2, gW = (gb + ge) / 2, ly.o6(gV, gW), ly.click(gV, gW, !0) && (aA.cJ = !0), !0)
	}
}

function qe() {
	var dt, dz;

	function aFz(aGH, jT) {
		for (var aR = new Array(aGH), a2 = 0; a2 < aGH; a2++) aR[a2] = aFs(jT, 10);
		return k.kW(aR)
	}

	function aFs(ko, bH) {
		for (var th = 0, a2 = dz; a2 < dz + bH; a2++) th |= (ko[b6(a2, 8)] >> 7 - a2 % 8 & 1) << dz + bH - a2 - 1;
		return dz += bH, th
	}
	this.aE5 = function(a0Z, jT) {
		var aFr;
		(dz = 0) === (dt = jT.length) ? fV.a7H(a0Z, 3205): 0 === (aFr = aFs(jT, 1)) ? function(a0Z, jT) {
			var aFv = aFs(jT, 2);
			0 === aFv ? (0 === aFs(jT, 1) ? function(a0Z, jT) {
				var a2;
				if (0 === a0Z && 8 !== aH.oM() && !(dt < 4)) {
					zN.c7(0, aFz(aFs(jT, 5), jT)), zN.c7(1, "[" + aFz(aFs(jT, 3), jT) + "]");
					var aG0 = aFs(jT, 12),
						aG1 = aFs(jT, 6),
						aR = new Array(aG0);
					for (a2 = 0; a2 < aG0; a2++) aR[a2] = aFs(jT, aG1);
					oA.ws(aR)
				}
			} : function(a0Z, jT) {
				var a2;
				if (8 !== aH.oM())
					if (dt < 3) fV.a7H(a0Z, 3208);
					else {
						var aG2, mE, a0Z = aFs(jT, 1),
							position = aFs(jT, 16),
							th = aFs(jT, 4),
							aR = [];
						for (a2 = 0; a2 < th; a2++) mE = aFs(jT, 14), aG2 = aFs(jT, 5), aG2 = aFz(aG2, jT), aR.push({
							name: aG2,
							mE: mE
						});
						0 === a0Z ? cR.zG(0, aR, 10, 1, .36, .55, position) : cR.zG(1, aR, 100, 2, .47, .5, position)
					}
			})(a0Z, jT) : 1 === aFv ? function(a0Z, jT) {
				var a2, dx, a28, nG, aG3, aG4;
				if (a0Z !== fV.a19) fV.close(a0Z, 3239);
				else if (6 === aH.oM() && ps.c5(), 7 !== aH.oM()) fV.close(a0Z, 3251);
				else {
					var a1h = [0, 0, 0, 0],
						aG5 = aFs(jT, 6);
					for (a2 = 0; a2 < 4; a2++) a1h[a2] = aFs(jT, aG5);
					var aG6 = aFs(jT, 4),
						aG7 = [];
					for (a2 = 0; a2 < aG6; a2++) {
						for (aG7.push({
								id: aFs(jT, 5),
								pP: aFs(jT, 4),
								a23: 1 === aFs(jT, 1),
								lA: aFs(jT, 6),
								a21: aFs(jT, 14),
								a26: aFs(jT, aG5),
								a27: aFs(jT, 9) + 1,
								a0i: aFs(jT, 10)
							}), a28 = aFs(jT, 3), nG = new Array(a28), dx = 0; dx < a28; dx++) aG3 = aFs(jT, 9) + 1, aG4 = aFz(aFs(jT, 3), jT), nG[dx] = ("" === aG4 ? "other: " : "[" + aG4 + "]: ") + aG3;
						aG7[a2].a28 = a28, aG7[a2].nG = nG
					}
					ps.zO(a1h, aG7)
				}
			}(a0Z, jT) : 2 !== aFv && 3 !== aFv || fu.c5(jT)
		}(a0Z, jT) : 1 === aFr && function(a0Z, jT) {
			var oq = aH.oM();
			8 !== oq ? 10 === oq && fV.a7H(a0Z, 3243) : a0Z !== fV.nx ? fV.a7H(a0Z, 3244) : 0 === aFs(jT, 1) ? aA.aFg.aFM(jT) : function(jT) {
				var aGD = aFs(jT, 2);
				(0 === aGD ? function(jT) {
					var sw;
					3 !== dt ? fV.a7H(fV.nx, 3230) : (sw = aFs(jT, 9), jT = aFs(jT, 7), 0 !== dG[sw] && 0 !== dG[bA] && (jT %= a3.a4, fR.ix(sw, bA, jT), fS.jv(sw, 1, jT)))
				} : 1 === aGD ? function(jT) {
					2 !== dt ? fV.a7H(fV.nx, 3235) : (jT = aFs(jT, 9), 0 !== dG[jT] && 0 !== dG[bA] && fj.a6u(0, [jT], !0) && fR.jF(jT, 1))
				} : function(jT) {
					var sw;
					3 !== dt ? fV.a7H(fV.nx, 3236) : (sw = aFs(jT, 9), jT = aFs(jT, 9), 0 !== dG[sw] && 0 !== dG[jT] && 0 !== dG[bA] && fj.a6u(1, [sw], !0) && (fS.jv(sw, 3, 96), fS.jv(jT, 4, 96), fR.t5(sw, jT)))
				})(jT)
			}(jT)
		}(a0Z, jT)
	}, this.a1Q = function(jT) {
		dz = 1, dt = jT.length, (2 === aFs(jT, 2) ? function(jT) {
			dz += 20;
			for (var a2c, a2b, name, a1G = aFs(jT, 9), pN = aFs(jT, 14), pP = aFs(jT, 4), a23 = 1 === aFs(jT, 1), a24 = aFs(jT, 6), a25 = aFs(jT, 14), aGB = aFs(jT, 9) + 1, mA = [], a2 = 0; a2 < aGB; a2++) a2c = aFs(jT, 1), a2b = [aFs(jT,
				6), aFs(jT, 6), aFs(jT, 6)], name = aFz(aFs(jT, 5), jT), mA.push({
				name: name,
				a2b: a2b,
				a2c: a2c
			});
			aH.a0o(), a2B(a24, a25), 1 === mA.length && fI.a2P(pP);
			pM(pN, a1G, mA, pP, a23, !1)
		} : function(jT) {
			dz += 20;
			for (var a2c, a2b, mE, name, a1G = aFs(jT, 1), pN = aFs(jT, 14), pP = aFs(jT, 4), a23 = 1 === aFs(jT, 1), a24 = aFs(jT, 6), a25 = aFs(jT, 14), mA = [], a2 = 0; a2 < 2; a2++) a2c = aFs(jT, 1), a2b = [aFs(jT, 6), aFs(jT, 6),
				aFs(jT, 6)
			], mE = aFs(jT, 14), name = aFz(aFs(jT, 5), jT), mA.push({
				name: name,
				a2b: a2b,
				mE: mE,
				a2c: a2c
			});
			aH.a0o(), a2B(a24, a25), pM(pN, a1G, mA, pP, a23, !1)
		})(jT)
	}, this.a1K = function(jT) {
		dz = 1, dt = jT.length;
		var aFv = aFs(jT, 2),
			aGA = aFs(jT, 10);
		return fV.a19 > fV.a1O && (aGA += fV.a1O), fV.a19 === aGA ? (fV.nx = aGA, !1) : (fV.close(fV.a19, 3247), fV.nx = aGA, fu.a1F = aFs(jT, 10), fu.a1G = aFs(jT, 2 === aFv ? 9 : 1), fV.wo(aGA, 5) && id.a7F(), !0)
	}
}

function qz() {
	this.dt = 0, this.c8 = 0, this.jT = null, this.c5 = function(jT) {
		this.c8 = 0, this.jT = jT, this.dt = jT.length
	}, this.a0p = function() {
		this.jT = null
	}, this.jV = function(dt) {
		for (var aF = 0, jT = this.jT, hT = this.c8 + dt - 1, a2 = this.c8; a2 <= hT; a2++) aF |= (jT[a2 >> 3] >> 7 - (7 & a2) & 1) << hT - a2;
		return this.c8 += dt, this.c8 > 8 * this.dt && console.log("error unwrapper"), aF
	}, this.aAh = function(dt) {
		for (var aR = new Array(dt), a2 = 0; a2 < dt; a2++) aR[a2] = this.jV(10);
		return k.kW(aR)
	}, this.aGI = function(aAs) {
		return this.dt === kR.aGJ(aAs)
	}
}

function a7a() {
	this.aBa = 0, this.aBb = 0, this.aBW = 0, this.aBX = 0, this.aBY = 0, this.aBZ = 0, this.yv = [0, 0, 0, 0], this.hS = function() {
		this.aBa = hE.gf(), this.aBb = hE.cT(), this.aBW = -this.aBa, this.aBX = -this.aBb, this.aBY = gd / dM, this.aBZ = cP / dM, this.yv[0] = Math.floor(this.aBW), this.yv[1] = Math.floor(this.aBX), this.yv[2] = Math.floor(this.yv[0] + this
			.aBY + 1), this.yv[3] = Math.floor(this.yv[1] + this.aBZ + 1), hb.ys = !0
	}
}

function qf() {
	var uz, h0;
	this.c5 = function() {
		uz = 1, h0 = 0
	}, this.eY = function() {
		0 < uz && (h0 = 0 === h0 ? aA.aB + 16 : h0, uz = (uz -= .001 * (aA.aB - h0)) < 0 ? 0 : uz, h0 = aA.aB, aA.cJ = !0)
	}, this.cU = function() {
		0 < uz && (cV.fillStyle = "rgba(0,0,0," + uz + ")", cV.fillRect(0, 0, gd, cP))
	}
}

function qj() {
	function aGN(a7k, gV, gW, cG, eH) {
		a4j <= a7k || (lA === a7k && (cV.fillStyle = cY.iH, cV.fillRect(gV, gW, cG, eH), cV.fillStyle = cY.cZ), cV.strokeRect(gV, gW, cG, eH), cV.fillText(l9.get(a7k).name, Math.floor(gV + .5 * cG), Math.floor(gW + .55 * eH)))
	}
	this.o8 = !1, this.a2O = [0, 0, 0, 0], this.show = function() {
		this.o8 = !0, this.resize(), aA.cJ = !0
	}, this.resize = function() {
		var aB1 = b6(a4j + a4j % 2, 2),
			aB1 = q - aB1 * cO;
		this.a2O[2] = o ? Math.floor(.75 * uO) : Math.floor(.5 * uO), this.a2O[3] = Math.floor(1.25 * this.a2O[2]), this.a2O[3] > aB1 && (this.a2O[3] = aB1, this.a2O[2] = Math.floor(aB1 / 1.2)), this.a2O[0] = Math.floor((p - this.a2O[2]) / 2),
			this.a2O[1] = Math.floor((q - this.a2O[3]) / 2)
	}, this.nf = function(gV, gW) {
		return !(gV < this.a2O[0] || gW < this.a2O[1] || gV > this.a2O[0] + this.a2O[2] || gW > this.a2O[1] + this.a2O[3])
	}, this.cL = function(gV, gW) {
		var tT, aB1 = b6(a4j + a4j % 2, 2);
		return aA.cJ = !0, gV < this.a2O[0] || gW < this.a2O[1] || gV > this.a2O[0] + this.a2O[2] || gW > this.a2O[1] + this.a2O[3] ? !(this.o8 = !1) : (tT = Math.floor(.17 * this.a2O[3]), gW < this.a2O[1] + tT ? gV > this.a2O[0] + this.a2O[2] -
			tT && (this.o8 = !1) : (gW = (gW = Math.floor(aB1 * (gW - this.a2O[1] - tT - .00576 * c6) / (this.a2O[3] - tT - .01152 * c6))) < 0 ? 0 : aB1 - 1 < gW ? aB1 - 1 : gW, gV > this.a2O[0] + this.a2O[2] / 2 && (gW += aB1), a4j <= gW ||
				a2B(gW, Math.floor(16384 * Math.random()))), !0)
	}, this.cU = function() {
		var a2, gb, tT = Math.floor(.17 * this.a2O[3]),
			aB1 = b6(a4j + a4j % 2, 2),
			lZ = .6 * .01152 * c6,
			tU = (this.a2O[3] - tT - (aB1 + 1) * lZ) / aB1,
			m6 = Math.floor((this.a2O[2] - 3 * lZ) / 2);
		for (cV.lineWidth = ot, cV.textAlign = cX, cV.textBaseline = cW, cV.fillStyle = cY.hl, cV.fillRect(this.a2O[0], this.a2O[1] + tT, this.a2O[2], this.a2O[3] - tT), cV.fillStyle = cY.iH, cV.fillRect(this.a2O[0], this.a2O[1], this.a2O[2],
			tT), cV.strokeStyle = cY.cZ, cV.strokeRect(this.a2O[0], this.a2O[1], this.a2O[2], this.a2O[3]), cV.fillStyle = cY.cZ, cV.fillRect(this.a2O[0], this.a2O[1] + tT, this.a2O[2], 2), cV.font = c9 + Math.floor(.48 * tT) + cA, cV.fillText(
				"Maps", Math.floor(this.a2O[0] + this.a2O[2] / 2), Math.floor(this.a2O[1] + .55 * tT)), cV.font = c9 + Math.floor(.48 * tU) + cA, a2 = aB1 - 1; 0 <= a2; a2--) gb = Math.floor(this.a2O[1] + tT + lZ + a2 * (tU + lZ)), aGN(a2, this
			.a2O[0] + lZ, gb, m6, tU), aGN(a2 + aB1, this.a2O[0] + m6 + 2 * lZ, gb, m6, tU);
		lx.sC(Math.floor(this.a2O[0] + this.a2O[2] - .7 * tT), Math.floor(this.a2O[1] + .3 * tT), Math.floor(.4 * tT)), cV.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function qg() {
	var dz;

	function aGQ(jT) {
		var i = h(),
			aGS = Math.floor(i / 16777216);
		aGO(jT, 24, aGS), aGO(jT, 24, i - 16777216 * aGS)
	}

	function aGR(jT) {
		aGO(jT, 14, a7P), aGO(jT, 4, b ? 2 : 12 <= d ? 1 : 0 < d ? 3 : 0), aGO(jT, 1, nW ? 1 : 0), aGO(jT, 1, nX ? 1 : 0), aGO(jT, 5, (new Date).getHours() % 24)
	}

	function aGO(ko, bH, th) {
		for (var e8, a2 = dz; a2 < dz + bH; a2++) ko[e8 = b6(a2, 8)] = (th >> bH - (a2 - dz + 1) & 1) << 7 - a2 % 8 | ko[e8];
		dz += bH
	}
	this.wr = function() {
		var jT = new Uint8Array(3);
		aGO(jT, 1, dz = 0), aGO(jT, 3, 0), aGO(jT, 14, a7P), fV.send(0, jT)
	}, this.a0X = function(a0Z) {
		var aR = k.mb(pj.a2a()),
			t6 = aR.length,
			jT = new Uint8Array(b6(aAs = 135 + 10 * t6, 8) + (0 < aAs % 8 ? 1 : 0)),
			aAs = (aGO(jT, 1, dz = 0), aGO(jT, 3, 1), aGO(jT, 10, a7R), aGO(jT, 20, pv.id), aGO(jT, 10, Math.min(pv.te, 1023)), cQ.sE[2].mu.a0D());
		aGO(jT, 6, aAs[0]), aGO(jT, 6, aAs[1]), aGO(jT, 6, aAs[2]), aGQ(jT), aGR(jT);
		for (var a2 = 0; a2 < t6; a2++) aGO(jT, 10, aR[a2]);
		fV.a19 = a0Z, fV.send(a0Z, jT)
	}, this.zE = function(a0Z, id) {
		var jT = new Uint8Array(5);
		aGO(jT, 1, dz = 0), aGO(jT, 3, 7), aGO(jT, 3, 0), aGO(jT, 14, a7P), aGO(jT, 1, id), aGO(jT, 16, Math.abs(4096 + cR.position[id] + cR.zD[id]) % 65536), fV.send(a0Z, jT)
	}, this.a31 = function(a0Z) {
		var a2, nR;
		if (!(pj.a2q + 7e3 > aA.aB)) {
			pj.a2q = aA.aB;
			var jT = new Uint8Array(17);
			for (aGO(jT, 1, dz = 0), aGO(jT, 3, 7), aGO(jT, 3, 2), aGQ(jT), nR = sb(pj.a2p.length - 20, 0), a2 = pj.a2p.length - 1; nR <= a2; a2--) aGO(jT, 4, Math.abs(pj.a2p.charCodeAt(a2) - 48) % 10);
			fV.send(a0Z, jT)
		}
	}, this.a77 = function(a0Z, a76) {
		var jT = new Uint8Array(1);
		aGO(jT, 1, dz = 0), aGO(jT, 3, 5), aGO(jT, 1, a76 ? 1 : 0), fV.send(a0Z, jT)
	}, this.a2E = function(a22) {
		var jT = new Uint8Array(1);
		aGO(jT, 1, dz = 0), aGO(jT, 3, 2), aGO(jT, 4, a22), fV.send(fV.a19, jT)
	}, this.a7F = function() {
		var jT = new Uint8Array(7);
		aGO(jT, 1, dz = 0), aGO(jT, 3, 6), aGO(jT, 8, fV.t3()), aGO(jT, 10, fu.a1F), aGO(jT, 9, fu.a1G), aGO(jT, 10, a7R), aGO(jT, 14, a7P), fV.send(fV.nx, jT)
	}, this.ie = function(cr) {
		kR.kS(27), kR.kT(1, 1), kR.kT(4, 0), kR.kT(22, cr), fV.send(fV.nx, kR.jT)
	}, this.ih = function(dK, dp) {
		kR.kS(25), kR.kT(1, 1), kR.kT(4, 1), kR.kT(10, dK), kR.kT(10, dp), fV.send(fV.nx, kR.jT)
	}, this.il = function(dK, ij) {
		kR.kS(24), kR.kT(1, 1), kR.kT(4, 2), kR.kT(10, dK), kR.kT(9, ij), fV.send(fV.nx, kR.jT)
	}, this.iq = function(dK, cr) {
		kR.kS(37), kR.kT(1, 1), kR.kT(4, 3), kR.kT(10, dK), kR.kT(22, cr), fV.send(fV.nx, kR.jT)
	}, this.iu = function(is, cr) {
		kR.kS(37), kR.kT(1, 1), kR.kT(4, 4), kR.kT(10, is), kR.kT(22, cr), fV.send(fV.nx, kR.jT)
	}, this.iw = function(dp) {
		kR.kS(15), kR.kT(1, 1), kR.kT(4, 5), kR.kT(10, dp), fV.send(fV.nx, kR.jT)
	}, this.j0 = function(c8) {
		kR.kS(12), kR.kT(1, 1), kR.kT(4, 6), kR.kT(7, c8), fV.send(fV.nx, kR.jT)
	}, this.j3 = function(j2) {
		kR.kS(6), kR.kT(1, 1), kR.kT(4, 7), kR.kT(1, j2), fV.send(fV.nx, kR.jT)
	}, this.j5 = function() {
		kR.kS(5), kR.kT(1, 1), kR.kT(4, 8), fV.send(fV.nx, kR.jT)
	}, this.jN = function(a47, jM) {
		kR.kS(29), kR.kT(1, 1), kR.kT(4, 10), kR.kT(12, a47), kR.kT(2, 0), kR.kT(10, jM), fV.send(fV.nx, kR.jT)
	}, this.jQ = function(a47, ky, kz, aGT) {
		kR.kS(46), kR.kT(1, 1), kR.kT(4, 10), kR.kT(12, a47), kR.kT(2, 1), kR.kT(9, ky), kR.kT(9, kz), kR.kT(9, aGT), fV.send(fV.nx, kR.jT)
	}, this.jS = function(a47) {
		var a2, n7 = my.ml.n7;
		for (kR.kS(47 + 33 * n7.length), kR.kT(1, 1), kR.kT(4, 10), kR.kT(12, a47), kR.kT(2, 2), kR.kT(24, my.ml.n6), kR.kT(4, n7.length), a2 = 0; a2 < n7.length; a2++) kR.kT(9, n7[a2].player), kR.kT(24, n7[a2].nI);
		fV.send(fV.nx, kR.jT)
	}, this.jD = function(aGU, aGV) {
		kR.kS(21), kR.kT(1, 1), kR.kT(4, 15), kR.kT(9, aGV), kR.kT(7, aGU), fV.send(fV.nx, kR.jT)
	}, this.jG = function(sx) {
		kR.kS(14), kR.kT(1, 1), kR.kT(4, 14), kR.kT(9, sx), fV.send(fV.nx, kR.jT)
	}, this.jK = function(aGW, target) {
		var a2, bH = aGW.length;
		for (kR.kS(14 + 9 * bH), kR.kT(1, 1), kR.kT(4, 13), kR.kT(9, target), a2 = 0; a2 < bH; a2++) kR.kT(9, aGW[a2]);
		fV.send(fV.nx, kR.jT)
	}, this.a2X = function(a0Z) {
		var jT = new Uint8Array(4);
		aGO(jT, 1, dz = 0), aGO(jT, 3, 3), aGR(jT), fV.send(a0Z, jT)
	}
}

function nV() {
	this.dt = 0, this.c8 = 0, this.jT = null, this.c5 = function(jT) {
		this.c8 = 0, this.jT = jT, this.dt = jT.length
	}, this.kS = function(aAs) {
		return this.c5(new Uint8Array(this.aGJ(aAs))), this.jT
	}, this.a0p = function() {
		this.jT = null
	}, this.kT = function(dt, th) {
		for (var jT = this.jT, hT = this.c8 + dt - 1, a2 = this.c8; a2 <= hT; a2++) jT[a2 >> 3] |= (th >> hT - a2 & 1) << 7 - (7 & a2);
		this.c8 += dt, this.c8 > 8 * this.dt && console.log("error wrapper")
	}, this.aGX = function(dt) {
		for (var jT = this.jT, hT = this.c8 + dt, a2 = this.c8; a2 < hT; a2++) jT[a2 >> 3] &= 255 ^ 128 >>> (7 & a2)
	}, this.aGJ = function(aAs) {
		return aAs + 7 >> 3
	}, this.aGY = function(aR, dz, hT, aGZ) {
		for (var a2 = dz; a2 < hT; a2++) this.kT(aGZ, aR[a2])
	}
}
setTimeout(aG, 1e4);