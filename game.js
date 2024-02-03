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
var aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, eU, cQ, cO, eC;

function am() {
	ae = 0, af = 2048, ag = new Uint32Array(4 * af), ah = 0, ai = new Uint32Array(af), (aj = new Int32Array(4))[0] = -4 * an.ao, aj[1] = 4, aj[2] = -aj[0], aj[3] = -aj[1], ak = new Uint8Array(an.ao * an.ap)
}

function aq(player) {
	aa = player, al = !1, ar(), as();
	for (var a2 = at.au(aa) - 1; 0 <= a2; a2--) 0 === at.av(aa, a2) && (aZ = a2, aw());
	al && ax()
}

function ax() {
	ay(), az()
}

function aw() {
	ad = at.b0(aa, aZ), ab = at.b1(aa, aZ), b2(), (0 !== ae && (b4(), b5()) ? b6 : b3)()
}

function b5() {
	return ac = b7(ab, ae), b8 < ac
}

function b4() {
	for (var a2 = ae - 1; 0 <= a2; a2--) ak[b7(ag[a2], 4)] = 0
}

function b3() {
	var r;
	1 === at.au(aa) && b9.bA(aa), aa !== bB ? (bC[aa] += ab, bD.bE(aa)) : (r = bC[aa], bC[aa] += ab, bD.bE(aa), bF.bG[13] -= bC[aa] - r), at.bH(aa, aZ)
}

function ar() {
	var a2, bI = bJ[aa].length;
	for (ah = 0, a2 = (af < bI ? af : bI) - 1; 0 <= a2; a2--) ai[ah++] = bJ[aa][a2]
}

function as() {
	for (var a2 = bJ[aa].length - 1; 0 <= a2; a2--) bK.bL(bJ[aa][a2]) && bK.bM(bJ[aa][a2], aa);
	bJ[aa] = []
}

function b2() {
	ae = 0, (ad === bN ? bO : bP)()
}

function bP() {
	for (var bQ, bR, a2, bS = 3; 0 <= bS; bS--)
		for (a2 = ah - 1; 0 <= a2; a2--) bR = b7(bQ = ai[a2] + aj[bS], 4), 0 === ak[bR] && bK.bT(bQ) && bK.bU(bQ) === ad && (ak[bR] = 1, ag[ae++] = bQ)
}

function bO() {
	for (var bQ, bR, a2, bS = 3; 0 <= bS; bS--)
		for (a2 = ah - 1; 0 <= a2; a2--) bR = b7(bQ = ai[a2] + aj[bS], 4), 0 === ak[bR] && bK.bV(bQ) && (ak[bR] = 1, ag[ae++] = bQ)
}

function b6() {
	bW() ? (bX(), ad !== bN && bY()) : b3()
}

function bY() {
	bZ(), ba(bb[ad]), ba(bc[ad]), bd(bJ[ad]), be(bc[ad]), be(bf[ad]), bg(), bh()
}

function bX() {
	al = !0, at.bi(aa, aZ, ab), bj[aa] += ae, bk(), bl()
}

function bW() {
	return (ad === bN ? bm : bn)()
}

function bn() {
	var bo = ae * b8,
		bp = bq(),
		br = bs(),
		bp = bo + 2 * bp + br,
		bu = ac * ae;
	return bp < bu ? (ab -= bp, bv(bp - bo, br), !0) : (ab -= bu, bv(bu - bo, br), !1)
}

function bv(bu, br) {
	if (0 < br) {
		if (!(br <= bu)) return at.bw(ad, aa, br - bu), void(bu = 0);
		at.bw(ad, aa, 0), bu -= br
	}
	bu = b7(bu, 2), bC[ad] >= bu ? bC[ad] -= bu : bC[ad] = 0
}

function bs() {
	return at.bx(ad, aa)
}

function bq() {
	return by.bz(ae * bC[ad], 1 + by.bz(10 * bj[ad], 16))
}

function c0() {
	return Math.floor(2 + c1(b7(bj[ad], 100), 8))
}

function c2() {
	return bb[ad].length + b7(bc[ad].length + bf[ad].length, 50)
}

function bm() {
	return ab -= ae * b8, !0
}

function bl() {
	for (var a2 = ae - 1; 0 <= a2; a2--) bJ[aa].push(ag[a2]), bb[aa].push(ag[a2]), bK.bM(ag[a2], aa)
}

function c3() {
	var c4 = null,
		c5 = null;
	this.c6 = function() {
		c4 = [], c5 = []
	}, this.c7 = function() {
		if (!c8 && !c9.cA && cB.cC.cD(1) && cB.cC.cE(bB) && at.cF(bB) && (cG(bB, !cH) || cI(bB, !cH))) {
			var a2, cK, cL = [],
				cM = c4,
				cN = cO,
				cP = cM.length;
			for (a2 = 0; a2 < cP && !(c5[a2] + 2e3 > aA.aB); a2++) c5.shift(), cM.shift();
			cP = cM.length;
			loop: for (a2 = cQ - 1; 0 <= a2; a2--) {
				for (cK = 0; cK < cP; cK++)
					if (cM[cK] === cN[a2]) continue loop;
				cL.push(cN[a2])
			}
			0 === (cP = cL.length) && (cL = cN, cP = cQ, c4 = [], c5 = []), cK = cL[Math.floor(cP * Math.random())], c4.push(cK), c5.push(aA.aB), cR.cS.cT(cU.cV(), cK)
		}
	}
}

function cW() {
	var cX = 1,
		cY = [null, null];
	this.c6 = function() {
		cX = .72 * (o ? .0011 : .001) * cZ;
		for (var a2 = 1; 0 <= a2; a2--) cY[a2] && this.ca(a2, cY[a2].j)
	}, this.ca = function(cb, j) {
		cY[cb] = {
			j: j,
			font: cc + 10 + cd
		}, this.ce(cb)
	}, this.ce = function(cb) {
		var j, ch, ci, cj, cl;
		cf.cg() && cY[cb] && (j = cY[cb].j, ch = Math.floor(.15 * cX * cf.get(13).height), cj = ck.measureText(j, ci = cc + ch + cd), (cl = .8 * cX * cf.get(13).width) < cj && (ch = Math.floor(ch * cl / cj), ci = cc + ch + cd), cY[cb] = {
			j: j,
			font: ci
		}, aA.cm = !0)
	}, this.cn = function() {
		return Math.floor(cX * cf.get(13).height)
	}, this.co = function(cp, cq) {
		return !!cf.cg() && !(cp < cr || cq < cs - ct.cj - cX * cf.get(13).height - 2 * cr || cq > cs - ct.cj - 2 * cr || (cp < cr + cX * cf.get(13).width ? (cu.cv(0), 0) : cp < 2 * cr + cX * cf.get(13).width || !(cp < 2 * cr + 2 * cX * cf.get(
			13).width) || (cu.cv(1), 0)))
	}, this.cw = function() {
		return Math.floor(cs - ct.cj - cX * cf.get(13).height - 2 * cr)
	}, this.cx = function() {
		if (cf.cg()) {
			cy.imageSmoothingEnabled = !0, cy.setTransform(cX, 0, 0, cX, cr, this.cw()), cy.drawImage(cf.get(14), 0, 0), cy.setTransform(cX, 0, 0, cX, 2 * cr + cX * cf.get(13).width, this.cw()), cy.drawImage(cf.get(13), 0, 0);
			for (var a2 = 1; 0 <= a2; a2--) cY[a2] && (cy.setTransform(1, 0, 0, 1, (1 + a2) * cr + a2 * cX * cf.get(13).width, this.cw()), cy.font = cY[a2].font, cy.textBaseline = cz, cy.textAlign = d0, cy.fillStyle = d1.d2, cy.fillText(cY[a2].j,
				.5 * cX * cf.get(13).width, .86 * cX * cf.get(13).height));
			cy.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function d3() {
	this.d4 = new Int16Array(4), this.d5 = new Int16Array(4), this.c6 = function() {
		var a2;
		for (this.d4[0] = -an.ao, this.d4[1] = 1, this.d4[2] = an.ao, this.d4[3] = -1, a2 = 0; a2 < 4; a2++) this.d5[a2] = 4 * this.d4[a2]
	}, this.d6 = function(d7, d8) {
		var d9 = this.dA(d8) - this.dA(d7),
			d8 = this.dC(d8) - this.dC(d7),
			d7 = d9 >>> 31 << 1;
		return 5 + d7 + (1 - d7) * (1 - (d8 >>> 31 << 1)) * (Math.abs(d9) - Math.abs(d8) >>> 31) & 3
	}, this.dG = function(d7, d8, dH) {
		return dH % 2 == 0 ? dH + (1 - dH) * (1 - (this.dA(d8) - this.dA(d7) >>> 31 << 1)) + 4 & 3 : dH + (2 - dH) * (1 - (this.dC(d8) - this.dC(d7) >>> 31 << 1)) + 4 & 3
	}, this.dJ = function(bQ, dK) {
		for (var d8, dL, dN = bc[bQ], bI = dN.length, cj = an.ao, dO = this.dA(dK), dP = this.dC(dK), dQ = dN[0] >> 2, min = this.dR(dO, dP, dQ), a2 = 1; a2 < bI; a2++)(dL = (dL = dO - (d8 = dN[a2] >> 2) % cj) * dL + (dL = dP - ~~((.5 + d8) /
			cj)) * dL) < min && (min = dL, dQ = d8);
		return dQ
	}, this.dS = function(player, dT) {
		return !bK.bV(dT) && player === bK.bU(dT)
	}, this.dR = function(dU, dV, dK) {
		return (dU -= this.dA(dK)) * dU + (dV -= this.dC(dK)) * dV
	}, this.dW = function(dX, dY, dZ) {
		dX = this.db(dX) - this.dc(dZ), dY = this.de(dY) - this.df(dZ);
		return Math.sqrt(dX * dX + dY * dY)
	}, this.dg = function(d7, d8) {
		var da = this.dA(d7) - this.dA(d8),
			d7 = this.dC(d7) - this.dC(d8);
		return Math.sqrt(da * da + d7 * d7)
	}, this.dh = function(bQ) {
		return bQ < di && 0 !== dj[bQ] && 2 !== dk[bQ]
	}, this.dl = function() {
		return 0 !== dj[bB] && 2 !== dk[bB]
	}, this.dm = function(bQ, dn) {
		return by.bz(dn * bC[bQ], 1e3)
	}, this.db = function(dX) {
		return 16 * (dX + dp) / dq
	}, this.de = function(dY) {
		return 16 * (dY + dr) / dq
	}, this.ds = function(dX) {
		return Math.floor((dX + dp) / dq)
	}, this.dt = function(dY) {
		return Math.floor((dY + dr) / dq)
	}, this.du = function(dU, dV) {
		return 1 <= dU && 1 <= dV && dU < an.ao - 1 && dV < an.ap - 1
	}, this.dA = function(dK) {
		return dK % an.ao
	}, this.dC = function(dK) {
		return by.bz(dK, an.ao)
	}, this.dv = function(dU, dV) {
		return dV * an.ao + dU
	}, this.dw = function(dK) {
		var dU = this.dA(dK),
			dK = this.dC(dK);
		return 0 < dU && dU < an.ao - 1 && 0 < dK && dK < an.ap - 1
	}, this.dx = function(dK) {
		return dK << 2
	}, this.dy = function(dK) {
		return an.ao * this.dC(dK) * 256 + (this.dA(dK) << 4)
	}, this.dz = function(dK) {
		return this.dy(dK) + 8 + (an.ao << 7)
	}, this.e0 = function(dZ) {
		return an.ao * (this.df(dZ) >> 4) + (this.dc(dZ) >> 4)
	}, this.e1 = function(dZ) {
		dZ = this.e0(dZ);
		return (this.dA(dZ) >> 5) + e2.e3.e4 * (this.dC(dZ) >> 5)
	}, this.dc = function(dZ) {
		return dZ % (an.ao << 4)
	}, this.df = function(dZ) {
		return by.bz(dZ, an.ao << 4)
	}, this.e5 = function(dK, dH) {
		return dK + this.d4[dH]
	}, this.e6 = function(dT, dH) {
		return dT + this.d5[dH]
	}
}

function e7(player) {
	return e8.aP[1] = bJ[player].length, e8.aP[0] === bN ? e9(player) : eA(player, e8.aP[0]), 0 !== e8.aP[1] || 0 !== bJ[player].length
}

function eB(player) {
	cH && (eC[player] = 1), eD(e8.aP[1], player), at.eE(player, e8.aL[0], e8.aP[0]), b9.eF(player, !1)
}

function eG(player, eH, bI, eI) {
	var eJ = b7(3 * bC[player], 256);
	eI -= eI >= b7(bC[player], 2) ? eJ : 0, eD(bI, player), at.eE(player, eI, eH), bC[player] -= eI + eJ, b9.eF(player, !1)
}

function eA(player, eH) {
	for (var dH, a2 = bb[player].length - 1; 0 <= a2; a2--)
		if (bK.eK(bb[player][a2]))
			for (dH = 3; 0 <= dH; dH--)
				if (bK.bT(bb[player][a2] + aj[dH]) && bK.bU(bb[player][a2] + aj[dH]) === eH) {
					bJ[player].push(bb[player][a2]);
					break
				}
}

function eD(eL, player) {
	for (var a2 = bJ[player].length - 1; eL <= a2; a2--) bK.eM(bJ[player][a2], player)
}

function e9(player) {
	for (var dH, a2 = bb[player].length - 1; 0 <= a2; a2--)
		if (bK.eK(bb[player][a2]))
			for (dH = 3; 0 <= dH; dH--)
				if (bK.bV(bb[player][a2] + aj[dH])) {
					bJ[player].push(bb[player][a2]);
					break
				}
}

function cG(player, eN) {
	var a2, eO, dH, eP, bI = bb[player].length,
		dI = 256 <= bI ? 12 : 32 <= bI ? 6 : 1,
		eQ = bI - 1 - eR.eS(dI);
	cQ = 0;
	loop: for (a2 = eQ; 0 <= a2; a2 -= dI)
		for (dH = 3; 0 <= dH; dH--)
			if ((eP = bK.bV(bb[player][a2] + aj[dH]) ? bN : bK.bU(bb[player][a2] + aj[dH])) === bN || bK.bT(bb[player][a2] + aj[dH]) && eP !== player && (eN || eT(player, eP))) {
				for (eO = cQ - 1; 0 <= eO; eO--)
					if (cO[eO] === eP) continue loop;
				if (cO[cQ] = eP, ++cQ >= eU) return !0
			}
	return 0 < cQ
}

function cI(player, eN) {
	var a2, dH, eP;
	for (cQ = 0, a2 = bb[player].length - 1; 0 <= a2; a2--)
		for (dH = 3; 0 <= dH; dH--)
			if ((eP = bK.bV(bb[player][a2] + aj[dH]) ? bN : bK.bU(bb[player][a2] + aj[dH])) === bN || bK.bT(bb[player][a2] + aj[dH]) && eP !== player && (eN || eT(player, eP))) return cO[cQ++] = eP, !0;
	return !1
}

function eV() {
	for (var cK, a2 = cQ - 1; 0 <= a2; a2--)
		if (cO[a2] === bN) {
			for (cQ--, cK = a2; cK < cQ; cK++) cO[cK] = cO[cK + 1];
			return !0
		} return !1
}

function eW(player) {
	for (var cK, a2 = cQ - 1; 0 <= a2; a2--)
		if (at.eX(player, cO[a2]))
			for (cQ--, cK = a2; cK < cQ; cK++) cO[cK] = cO[cK + 1];
	return 0 === cQ
}

function eY() {
	for (var a2 = cQ - 1; 0 <= a2; a2--)
		if (cO[a2] >= di) return !0;
	return !1
}

function eZ() {
	for (var a2 = cQ - 1; 0 <= a2; a2--) cO[a2] < di && (cO[a2] = cO[--cQ]);
	return 0 < cQ
}

function ea(player) {
	for (var cK, eb = cO[0], ec = bC[eb] + at.bx(eb, player), a2 = cQ - 1; 1 <= a2; a2--)(cK = bC[cO[a2]] + at.bx(cO[a2], player)) < ec && (eb = cO[a2], ec = cK);
	return eb
}

function ed(player) {
	var ee, ef = cO[0];
	if (1 !== cQ)
		for (var eg = b7(eh[player] + ei[player], 2), ej = b7(ek[player] + el[player], 2), em = en(eg - b7(eh[ef] + ei[ef], 2)) + en(ej - b7(ek[ef] + el[ef], 2)), a2 = cQ - 1; 1 <= a2; a2--)(ee = en(eg - b7(eh[cO[a2]] + ei[cO[a2]], 2)) + en(ej - b7(
			ek[cO[a2]] + el[cO[a2]], 2))) < em && (em = ee, ef = cO[a2]);
	return ef
}

function eo() {
	return cO[eR.eS(cQ)]
}

function ep() {
	eU = 8, cQ = 0, cO = new Uint16Array(eU)
}

function eq() {
	eC = cH ? new Uint8Array(bN) : null
}

function er(player, eI) {
	var es;
	cH && (eC[player] = 0), !at.cF(player) || eI < 60 || (0 === bb[player].length ? e2.et.eu(player) || (ev.ew(player - di, 200), ex(player, eI, ev.eI[player - di], bD.ey(player))) : 0 < bc[player].length && eR.random() < eR.value(bc[player].length >
		bb[player].length ? 7 : 3) && e2.et.eu(player) || (es = bD.ey(player), bC[player] > es && eI < bC[player] - es && (eI = bC[player] - es), cH ? ez(player, eI, ev.eI[player - di], es) : f0(player, eI, ev.eI[player - di])))
}

function ez(player, eI, f1, es) {
	var eH;
	cG(player, !1) || cI(player, !1) ? (eC[player] = 1, eW(player) || (eV() ? (f2(player, eI), f3(player, bN, f1)) : (eR.f4(ev.f5[f1]) ? f6(player, eI, eH = ea(player)) : (eY() && eR.f4(ev.f7[f1]) && eZ(), f6(player, eI, eH = ed(player))), f3(player,
		eH, f1)))) : 0 < bc[player].length && eR.random() < eR.value(60) && e2.et.eu(player) || (ev.ew(player - di, 200), ex(player, eI, f1, es))
}

function f8(player, eI) {
	cG(player, !1) || cI(player, !1) ? (eC[player] = 1, eV() ? f2(player, eI) : f6(player, eI, eo())) : ex(player, eI, 0, 0)
}

function f3(player, eH, f1) {
	3 <= f1 && 2142 < aA.f9() && (eH === bN || bC[eH] < b7(bC[player], 20)) && ev.ew(player - di, 25)
}

function ex(player, eI, f1, es) {
	var a2, cK, fA;
	if (0 !== fB.fC[player] && !(5 === f1 && bC[player] < es || 4 === f1 && bC[player] < b7(es, 2)))
		for (a2 = eR.eS(fD), cK = 0; cK < fD; cK++)
			if (fA = fE[(cK + a2) % fD], fB.fC[fA] === fB.fC[player] && 1 === eC[fA]) return void cR.fF.fG(player, fA, eI)
}

function f0(player, eI, f1) {
	!cG(player, !0) && !cI(player, !0) || eW(player) || (eV() ? f2(player, eI) : eR.f4(ev.f5[f1]) ? f6(player, eI, ea(player)) : (eY() && eR.f4(ev.f7[f1]) && eZ(), f6(player, eI, ed(player))))
}

function fH(player, eI) {
	(cG(player, !0) || cI(player, !0)) && (eV() ? f2(player, eI) : f6(player, eI, eo()))
}

function f6(player, eI, eH) {
	b7(bC[player], 8) > bC[eH] && (eI = (fI = b7(11 * bC[eH], 5)) < eI ? eI : fI);
	var fI = bJ[player].length;
	eA(player, eH), eG(player, eH, fI, eI)
}

function f2(player, eI) {
	var eH = bN,
		bI = bJ[player].length;
	return e9(player), bJ[player].length !== bI && (eG(player, eH, bI, eI), !0)
}
self.aiCommand746 = function(aF) {
	0 === aF ? aG() : 1 !== aF || d < 14 || aH.aI()
};
var di, nF, fV, nE, fJ = [60, 74, 112, 200, 256, 512];

function fK() {
	var fL, fM, fN, fO, fP, fQ;

	function ff(a2) {
		fL[a2] = 1 + b7(fP[a2] * eR.random(), 10 * eR.value(100))
	}
	this.fR = ["Very Easy", "Easy", "Normal", "Hard", "Harder", "Very Hard"], this.fS = [97, 95, 93, 90, 87, 84], this.f7 = [98, 95, 70, 40, 20, 0], this.fT = [85, 70, 50, 30, 7, 3], this.f5 = [0, 0, 5, 25, 50, 90], this.eI = null, this.c6 =
		function() {
			var a2, fU;
			if (fL = new Uint8Array(fV), fM = new Uint16Array(fV), fN = new Uint16Array(fV), fO = new Uint8Array(fV), this.eI = new Uint8Array(fV), fP = new Uint16Array(fV), fQ = new Uint16Array(fV), fW.fX) {
				if (fW.fY.fZ)
					for (a2 = fV - 1; 0 <= a2; a2--) this.eI[a2] = fW.fY.fZ[a2 + 1]
			} else if (9 === fa) this.fb();
			else if (fc)
				if (cH)
					for (a2 = fV - 1; 0 <= a2; a2--) this.eI[a2] = fd.fe[fB.fC[a2 + di] - 1].bS;
				else
					for (a2 = fV - 1; 0 <= a2; a2--) this.eI[a2] = fd.fe[0].bS;
			else
				for (fU = 8 === fa ? 1 : 0, a2 = fV - 1; 0 <= a2; a2--) this.eI[a2] = fU;
			for (a2 = fV - 1; 0 <= a2; a2--) this.eI[a2] <= 2 ? (fO[a2] = 5, fP[a2] = fQ[a2] = 1040, 0 === this.eI[a2] ? (fM[a2] = 1e3, fN[a2] = 1e3) : 1 === this.eI[a2] ? (fM[a2] = 1e3, fN[a2] = 920, fP[a2] = fQ[a2] = 1100) : (fM[a2] = 825, fN[a2] =
				750)) : this.eI[a2] <= 4 ? (fO[a2] = 1 + eR.eS(20), 3 === this.eI[a2] ? (fM[a2] = fN[a2] = 500, fP[a2] = fQ[a2] = 1e3) : (fQ[a2] = 250 + eR.eS(1501), fP[a2] = 500 + eR.eS(501), fM[a2] = 300 + eR.eS(201), fN[a2] = 100 + eR.eS(
				201))) : (fP[a2] = 1e3, fQ[a2] = 1e3, fO[a2] = 35 + eR.eS(16), fM[a2] = 300 + eR.eS(201), fN[a2] = 50 + eR.eS(101)), ff(a2)
		}, this.fb = function() {
			for (var a2, dT = 0, cK = 0; cK < 6; cK++) {
				for (a2 = dT + fg.fh[cK] - 1; dT <= a2; a2--) this.eI[a2] = cK;
				dT += fg.fh[cK]
			}
		}, this.ew = function(fi, value) {
			0 <= fi && (fL[fi] = value)
		}, this.eu = function(fi) {
			0 == --fL[fi] && ! function(fi) {
				! function(fi) {
					fP[fi] !== fQ[fi] && (fP[fi] += fP[fi] < fQ[fi] ? 3 : -3);
					fM[fi] !== fN[fi] && (fM[fi] += fM[fi] < fN[fi] ? fO[fi] : -fO[fi], fM[fi] = (Math.abs(fM[fi] - fN[fi]) <= fO[fi] ? fN : fM)[fi]);
					fL[fi] = b7(fP[fi], 10)
				}(fi);
				var player = fi + di;
				er(player, b7(fM[fi] * bC[player], 1e3))
			}(fi)
		}
}

function fl() {
	fm.eu(), fn.eu(), fo.fp(), fq.eu(), fr.fs.ft()
}

function fu() {
	bD.eu(), fv.eu(), fw.eu(), fx.eu(), fy.eu(), b9.eu(), fz.eu(), e2.g0.eu(), g1(), g2.eu(), fg.eu(), fn.eu(), fn.g3(), fo.eu(), g4.eu(), g5.eu(), g6.eu(), fm.eu(), g7.eu(), cU.eu(), g8.eu(), bF.eu(), g9.eu(), gA.eu(), fq.eu(), gB.eu(), aA.eu()
}

function gC() {
	gD.eu(), gE.eu(), ck.eu(), gF.eu(), gG.eu(), gH.gI()
}

function gJ() {
	g2.gK(!1), g6.gK(), fo.gK(!1), g5.gK(), cU.gK(), g8.gK(), fn.gK(2 === gL), g9.ce()
}

function gM() {
	fn.gK(!0) && (aA.cm = !0), fq.eu()
}

function gN() {
	var gO, gP, gQ, gR, gS, gT;

	function gX(gZ) {
		for (var a2 = gP - 1; 0 <= a2; a2--) 0 === gR[gQ[a2]] && bj[gQ[a2]] >= gZ && aq(gQ[a2])
	}

	function gV(player) {
		10 === gR[player] ? gR[player] = gO : bj[player] < 1e3 ? gR[player] = 3 : bj[player] < 1e4 ? gR[player] = 2 : bj[player] < 6e4 ? gR[player] = 1 : gR[player] = 0
	}
	this.c6 = function() {
		gS = gT = 0, gO = 6, gP = 0, gQ = new Uint16Array(bN), gR = new Uint8Array(bN)
	}, this.eu = function() {
		var a2;
		for (gS = bF.bG[13], gT = bC[bB], a2 = gP - 1; 0 <= a2; a2--) 10 === gR[gQ[a2]] ? gV(gQ[a2]) : 0 == gR[gQ[a2]]-- && (gV(gQ[a2]), aq(gQ[a2]));
		16e4 <= bj[gW[0]] && (gX(16e4), 3e5 <= bj[gW[0]]) && gX(3e5), bj[bB] > bF.bG[7] && (bF.bG[7] = bj[bB]), bF.bG[14] += gT - bC[bB] + gS - bF.bG[13]
	}, this.bA = function(player) {
		for (var eO, a2 = gP - 1; 0 <= a2; a2--)
			if (player === gQ[a2]) {
				for (gP--, eO = a2; eO < gP; eO++) gQ[eO] = gQ[eO + 1];
				return
			}
	}, this.eF = function(player, ga) {
		for (var a2 = gP - 1; 0 <= a2; a2--)
			if (player === gQ[a2]) return;
		gQ[gP++] = player, gR[player] = ga ? 2 : 10
	}
}

function gb() {
	var eL, et;
	this.c6 = function() {
		eL = fV, et = new Uint16Array(fV);
		for (var a2 = fV - 1; 0 <= a2; a2--) et[a2] = a2
	}, this.eu = function() {
		for (var a2 = eL - 1; 0 <= a2; a2--) 0 === dj[et[a2] + di] ? function(eO) {
			eL--;
			for (var a2 = eO; a2 < eL; a2++) et[a2] = et[a2 + 1]
		}(a2) : ev.eu(et[a2])
	}
}

function ge() {
	var gf, gg, gP, gQ, gR, gh, gi, gj;

	function gm(a2) {
		var eO;
		for (gP--, eO = a2; eO < gP; eO++) gQ[eO] = gQ[eO + 1], gR[eO] = gR[eO + 1], gh[eO] = gh[eO + 1], gi[eO] = gi[eO + 1], gj[eO] = gj[eO + 1]
	}
	this.c6 = function() {
		gf = 1, gP = 0, gg = 2 * bN, gQ = new Uint16Array(gg), gR = new Uint8Array(gg), gh = new Uint16Array(gg), gi = new Uint32Array(gg), gj = new Uint32Array(gg)
	}, this.gk = function(cb, position) {
		gi[cb] = position
	}, this.eu = function() {
		for (var a2 = gP - 1; 0 <= a2; a2--) 0 == gR[a2]-- && (gR[a2] = 2, gl.eu(a2, gh[a2], gQ[a2], gi[a2], gj[a2]))
	}, this.bA = function(player, id) {
		for (var a2 = gP - 1; 0 <= a2; a2--)
			if (player === gQ[a2] && id === gh[a2]) return void gm(a2)
	}, this.gn = function(player) {
		for (var a2 = gP - 1; 0 <= a2; a2--) player === gQ[a2] && (gl.go(player, gi[a2]), gm(a2))
	}, this.eF = function(player, eQ, gp) {
		if (gg <= gP) return 0;
		gQ[gP] = player, gR[gP] = 0, gh[gP] = gf, gi[gP] = eQ, gj[gP] = gp;
		player = gf;
		return gP++, gf = 2 * gg < ++gf ? 1 : gf, player
	}, this.cx = function() {
		if (!(dq < 40 || 0 === gP)) {
			var eO, gs, gt, a2, ch, gw, eI, gx = dp / dq,
				gy = dr / dq,
				gz = (h0 + dp) / dq,
				h1 = (cs + dr) / dq;
			for (cy.textAlign = d0, cy.textBaseline = cz, eO = gP - 1; 0 <= eO; eO--) gs = bK.h2(gi[eO]), gt = bK.cw(gi[eO]), a2 = gQ[eO], gx - 1 < gs && gs < gz && gy - 1 < gt && gt < h1 && 0 !== dj[a2] && ((ch = Math.floor(.94 * dq * fn.h3(
				a2))) < 6 || (gs = Math.floor(h0 * (gs + .5 - gx) / (gz - gx)), gt = Math.floor(cs * (gt + .48 - gy) / (h1 - gy)), cy.font = cc + ch + cd, cy.fillStyle = d1.h4, eI = at.b1(a2, at.h5(a2, gh[eO])), cy.fillText(h6.h7.h8 ? g6
				.h9(eI) : hA[a2], gs, gt), (gw = Math.floor(.5 * ch)) < 6) || (cy.font = cc + gw + cd, cy.fillText(h6.h7.h8 ? hA[a2] : g6.h9(eI), gs, gt + Math.floor(.82 * ch))))
		}
	}
}

function hB() {
	var hC, hD, hE, hF, hG, hH, hI, hJ, hK, hL, hM, hN, hO, hP = !1,
		hQ = !1;

	function hR(hS) {
		hN = aA.aB, hE = hF = hD = 0, hG = (hO = 33) / hS, hC = 1 / (hS / hO / 4), hH = (h0 / 2 + dp) / dq, hI = (cs / 2 + dr) / dq, hJ = dq
	}

	function hi(hk) {
		Math.abs(Math.log(hM / hJ)) < .125 && (hM = hk * hJ)
	}

	function hh(gx, gy, gz, h1) {
		hK = (gx + gz + 1) / 2, hL = (gy + h1 + 1) / 2;
		gz = h0 / (gz - gx + 1), gx = cs / (h1 - gy + 1);
		hM = .9 * (gz < gx ? gz : gx)
	}
	this.hT = function() {
		return hP
	}, this.hU = function() {
		hR(1), this.hV(0, 0, an.ao - 1, an.ap - 1), hW || c8 || this.hX(bB, 3e3, !0, .3)
	}, this.hX = function(player, hS, hY, zoom) {
		hZ || hP && !hY && hQ || 0 === bj[player] || (ha.hb = !1, hQ = hY, hR(hS), function(player) {
			hK = (ei[player] + eh[player] + 1) / 2, hL = (el[player] + ek[player] + 1) / 2
		}(player), function(zoom, player) {
			var da = eh[player] - ei[player] + 1,
				player = ek[player] - el[player] + 1,
				eO = h0 / da,
				cK = cs / player,
				eO = (hM = eO < cK ? eO : cK, 0 !== zoom ? zoom : da < 20 && player < 20 ? .5 : .9);
			hM *= eO, hi(7 / 8)
		}(zoom, player), hP = !0, he.hf())
	}, this.hg = function(hS) {
		c8 || hZ || (ha.hb = !1, hQ = !1, hR(hS), hh(0, 0, an.ao - 1, an.ap - 1), hi(7 / 8), hP = !0, he.hf())
	}, this.hV = function(gx, gy, gz, h1) {
		hh(gx, gy, gz, h1), dq = hM, ha.hl(hK, h0 / 2), ha.hm(hL, cs / 2), hn.ho()
	}, this.hp = function() {
		return !(hP && hQ || (hP = !1))
	}, this.eu = function() {
		var hs, ht, bS, hw;
		hP && (hD < .5 ? hF < hG && (hF += hG * hC, hE = hD) : 1 - hE < hD && (hF = (hF -= hG * hC) < hG * hC ? hG * hC : hF), hN = hN >= aA.aB ? aA.aB - 1 : hN, bS = aA.aB - hN, hD = 1e3 < bS || 1 < (hD += hF * bS / hO) ? 1 : hD, hN = aA.aB,
			bS = dq, hs = dp, ht = dr, bS = (dq = hJ * Math.pow(hM / hJ, hD)) / bS, hw = 1 - (hJ * Math.pow(hM / hJ, 1 - hD) - hJ) / (hM - hJ), ha.hl(hH + hw * (hK - hH), h0 / 2), ha.hm(hI + hw * (hL - hI), cs / 2), fn.zoom(bS, (hs * bS -
				dp) / (1 - bS), (ht * bS - dr) / (1 - bS)), hn.ho(), 1 <= hD && (hP = !1, hx.hy = !0), aA.cm = !0)
	}
}

function hz() {
	var fA = cB.i0;
	this.h4 = fA.i1(0, 0, 0), this.i2 = fA.i3(0, 0, 0, .7), this.i4 = fA.i3(0, 0, 0, .5), this.i5 = fA.i3(0, 0, 0, .85), this.i6 = fA.i3(0, 0, 0, .75), this.i7 = fA.i3(0, 0, 0, .6), this.d2 = fA.i1(255, 255, 255), this.i8 = fA.i3(255, 255, 255, .3),
		this.i9 = fA.i3(255, 255, 255, .6), this.iA = fA.i3(255, 255, 255, .4), this.iB = fA.i3(255, 255, 255, .25), this.iC = fA.i3(255, 255, 255, .85), this.iD = fA.i3(255, 255, 255, .75), this.iE = fA.i1(128, 128, 128), this.iF = fA.i3(64, 64, 64,
			.75), this.iG = fA.i1(30, 255, 30), this.iH = fA.i1(0, 200, 0), this.iI = fA.i1(128, 255, 128), this.iJ = fA.i3(10, 65, 10, .75), this.iK = fA.i3(0, 255, 0, .6), this.iL = fA.i3(0, 255, 0, .5), this.iM = fA.i3(0, 200, 0, .5), this.iN = fA
		.i3(0, 100, 0, .75), this.iO = fA.i3(0, 60, 0, .8), this.iP = fA.i3(0, 255, 0, .3), this.iQ = fA.i3(0, 180, 0, .6), this.iR = fA.i1(255, 120, 120), this.iS = fA.i1(255, 160, 160), this.iT = fA.i1(255, 70, 70), this.iU = fA.i1(230, 0, 0), this
		.iV = fA.i3(220, 0, 0, .6), this.iW = fA.i3(255, 100, 100, .8), this.iX = fA.i3(100, 0, 0, .85), this.iY = fA.i3(60, 0, 0, .85), this.iZ = fA.i3(200, 0, 0, .6), this.ia = fA.i3(0, 60, 60, .85), this.ib = fA.i3(10, 60, 60, .9), this.ic = fA
		.i3(0, 96, 96, .75), this.id = fA.i1(160, 160, 255), this.ie = fA.i3(0, 40, 90, .75), this.ig = fA.i3(0, 0, 255, .6), this.ih = fA.i1(255, 120, 100), this.ii = fA.i3(255, 255, 0, .5), this.ij = fA.i3(255, 255, 150, .2), this.ik = fA.i1(255,
			255, 0), this.il = fA.i1(255, 255, 200), this.im = fA.i3(200, 200, 0, .6), this.io = fA.i3(255, 140, 0, .75)
}

function ip() {
	this.cS = new iq, this.cC = new ir, this.is = new it, this.iu = new iv, this.fF = new iw
}

function iq() {
	this.ix = function(dK) {
		fc ? cR.is.ix(bB, dK) : iy.iz(dK)
	}, this.cT = function(dn, eH) {
		fm.j0(), fc ? cR.is.cT(bB, dn, eH) : iy.j1(dn, eH)
	}, this.j2 = function(dn, j3) {
		fm.j0(), fc ? cR.is.j4(bB, dn, j3) : iy.j5(dn, j3)
	}, this.j6 = function(dn, dK) {
		fc ? cR.is.j6(bB, dn, dK) : e2.j7.j8(bB, dK) && iy.j9(dn, dK)
	}, this.jA = function(jB, dK) {
		fc ? cR.is.jA(bB, jB, dK) : e2.j7.jC(bB, jB, dK) && iy.jD(jB, dK)
	}, this.jE = function(eH) {
		fc ? cR.is.jE(bB, eH) : iy.jF(eH)
	}, this.jG = function(jH) {
		fc ? cR.is.jI(bB, jH) : iy.jJ(jH)
	}, this.jK = function(jL) {
		fc ? cR.is.jK(bB, jL) : iy.jM(jL)
	}, this.jN = function() {
		fc ? cR.is.jN(bB) : iy.jO()
	}
}

function iw() {
	this.fG = function(player, j3, eI) {
		cB.cC.jP(player, eI, j3) && (bD.j2(player, j3), j3 < di) && eR.random() < eR.value(10) && (eC[j3] = 0)
	}, this.jQ = function(player, j3, eI) {
		cB.cC.jR(eI, j3) && (cB.cC.jS(j3, e8.aL[0]), bF.jT(player, j3), fn.jU(j3, e8.aL[0]))
	}
}

function ir() {
	this.jV = function(jH, player) {
		fm.jG(bB, player, jH), iy.jW(jH, player)
	}, this.jX = function(player) {
		fm.jY(player, 0), iy.jZ(player)
	}, this.ja = function(jb, player) {
		fm.jc(jb, player), iy.jd(jb, player)
	}, this.je = function(jf) {
		fc || c8 || iy.jg(jh(), jf)
	}, this.ji = function() {
		fc || c8 || iy.jj(jh(), gW[0], gW[1], gW[2])
	}, this.jk = function() {
		fc || c8 || iy.jl(jh())
	}
}

function iv() {
	this.eu = function(jm) {
		var id, aS, hp;
		for (jn.c6(jm), jn.cb += 2, hp = 8 * jn.eL; jn.cb + 8 <= hp;) id = jn.jo(4), aS = jn.jo(9), 0 === id ? this.jp(id, aS, jn.jo(22)) : 1 === id ? this.jp(id, aS, jn.jo(10), jn.jo(10)) : 2 === id ? this.jp(id, aS, jn.jo(10), jn.jo(9)) : 3 ===
			id || 4 === id ? this.jp(id, aS, jn.jo(10), jn.jo(22)) : 5 === id ? this.jp(id, aS, jn.jo(10)) : 6 === id ? this.jp(id, aS, jn.jo(7)) : 7 === id ? this.jp(id, aS, jn.jo(1)) : this.jp(id, aS)
	}, this.jp = function(id, aS, aU, aW) {
		0 === id ? cR.is.ix(aS, aU) : 1 === id ? cR.is.cT(aS, aU, aW) : 2 === id ? cR.is.j4(aS, aU, aW) : 3 === id ? cR.is.j6(aS, aU, aW) : 4 === id ? cR.is.jA(aS, aU, aW) : 5 === id ? cR.is.jE(aS, aU) : 6 === id ? cR.is.jI(aS, aU) : 7 === id ?
			cR.is.jK(aS, aU) : 8 === id ? cR.is.jN(aS) : cR.is.jq(aS)
	}
}

function it() {
	this.ix = function(player, dK) {
		cB.cC.cD(0) && cB.cC.cE(player) && jr.dw(dK) && (gB.js.jt(0, player, dK), ju.eE(player, dK))
	}, this.cT = function(player, dn, eH) {
		cB.cC.cD(1) && cB.cC.cE(player) && cB.cC.jv(player, eH) && cB.cC.jw(player, dn, 12, b8) && at.cF(player) && cB.cC.jx(player, eH) && e7(player) && (gB.js.jt(1, player, dn, e8.aP[0]), cB.cC.jy(player), bF.jz(player, dn), eB(player))
	}, this.j4 = function(player, dn, j3) {
		cB.cC.cD(1) && cB.cC.cE(player) && cH && cB.cC.jv(player, j3) && cB.cC.k0(player, j3) && cB.cC.jP(player, cB.cC.dm(player, dn), j3) && (gB.js.jt(2, player, dn, j3), bD.j2(player, j3))
	}, this.j6 = function(player, dn, dK) {
		cB.cC.cD(1) && cB.cC.cE(player) && jr.dw(dK) && e2.g0.k1 !== e2.g0.k2 && e2.g0.k3[player] !== e2.g0.k4 && 0 !== bc[player].length && cB.cC.jw(player, dn, 32, 16) && e2.k5.k6(player, dK) && (gB.js.jt(3, player, dn, dK), cB.cC.jy(player),
			e2.g0.k7(player))
	}, this.jA = function(player, jB, dK) {
		cB.cC.cD(1) && cB.cC.cE(player) && jr.dw(dK) && e2.j7.k8(player, jB) && e2.k5.k9(dK) && (gB.js.jt(4, player, jB, dK), cB.cC.kA(player, 8), e2.g0.jA())
	}, this.jE = function(player, eH) {
		cB.cC.cD(1) && cB.cC.cE(player) && (eH = Math.min(eH, bN), at.eX(player, eH)) && (gB.js.jt(5, player, eH), at.kB(player, eH))
	}, this.jI = function(player, jH) {
		cB.cC.cD(2) && cB.cC.cE(player) && (jH = Math.min(jH, a3.a4 - 1), gB.js.jt(6, player, jH), fn.kC(player, 0, jH))
	}, this.jK = function(player, jL) {
		cB.cC.cD(1) && cB.cC.cE(player) && (gB.js.jt(7, player, jL), g8.kD(player, jL))
	}, this.jN = function(player) {
		(cB.cC.cD(0) || cB.cC.cD(1)) && cB.cC.cE(player) && gA.jN(player) && gB.js.jt(8, player)
	}, this.jq = function(player) {
		gA.jq(player), gB.js.jt(9, player)
	}
}

function kE(kF, kG) {
	this.gs = 0, this.gt = 0, this.cj = 0, this.ee = 0, this.resize = function() {
		this.ee = Math.min(cB.i0.kH() * kF[1] * cZ, cs - 2 * kI), this.cj = Math.min(this.ee * (kF[0] / kF[1]), h0 - 2 * kI), this.ee = kF[1] * this.cj / kF[0], this.gs = kI + kG[0] * (h0 - this.cj - 2 * kI), this.gt = kI + kG[1] * (cs - this
			.ee - 2 * kI)
	}, this.kJ = function() {
		return this.gs + .5 * this.cj
	}
}

function kK() {
	var kL, kM = !0;

	function kZ() {
		kL.select(), document.execCommand("copy")
	}
	this.kN = !1, this.c6 = function() {
		(kL = document.createElement("textarea")).setAttribute("name", "replayData"), kL.setAttribute("id", "replayDataField"), kL.setAttribute("autocomplete", "off"), kL.setAttribute("placeholder", "Insert the replay link here!"), kL.style
			.position = "absolute", kL.style.resize = "none", kL.style.borderRadius = "0", kL.style.color = d1.d2, kL.style.backgroundColor = d1.i2, kL.addEventListener("focus", function() {
				kO.kN = !0
			}), kL.addEventListener("blur", function() {
				kO.kN = !1
			})
	}, this.show = function() {
		document.body.appendChild(kL)
	}, this.kP = function() {
		document.body.removeChild(kL)
	}, this.resize = function(gs, gt, cj, ee) {
		cB.i0.kQ(kL.style, gs, gt, cj, ee), kL.style.font = cB.i0.kR(Math.max(5, .1 * ee / kS), 0)
	}, this.kT = function(kU) {
		kL.value = kU
	}, this.kV = function() {
		return kL.value
	}, this.kW = function() {
		kL.select()
	}, this.kX = function() {
		kL.value = ""
	}, this.kY = function() {
		kM && navigator.clipboard ? (kL.select(), navigator.clipboard.writeText(kL.value).catch(function() {
			kM = !1, kZ()
		})) : kZ()
	}
}

function ka() {
	var kb = new Uint8Array(78);
	this.c6 = function() {
		var a2;
		for (kb[50] = 37, a2 = 0; a2 < 10; a2++) kb[a2 + 3] = a2 + 1;
		for (a2 = 0; a2 < 26; a2++) kb[a2 + 20] = a2 + 11, kb[a2 + 52] = a2 + 38
	}, this.kc = function(j) {
		return j.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "_")
	}, this.kd = function(j, ke) {
		for (var kf = kb, bI = j.length, aR = new Uint8Array(ke || bI), a2 = 0; a2 < bI; a2++) aR[a2] = kf[j.charCodeAt(a2) - 45];
		return aR
	}, this.kg = function(kh) {
		var a2, bI = kh.length,
			cj = ki;
		for (cj.kj(6 * bI), a2 = 0; a2 < bI; a2++) cj.kk(6, kh[a2]);
		jn.c6(cj.jm)
	}
}

function kl() {
	var cj, ee, km;

	function lD(lE, bS, lB, kr, l6) {
		bS = lC(lE, bS + 1 + 2 * kr & 3);
		! function(lE, lF) {
			return 1 < Math.abs(lE % cj - lF % cj) || 1 < Math.abs(lI(lE) - lI(lF))
		}(lE, bS) && 0 === l6[bS << 2] && (l6[bS << 2] = lB)
	}

	function lI(bQ) {
		return Math.floor((bQ + .5) / cj) % ee
	}

	function lC(bQ, bS) {
		return bQ + km[bS]
	}
	this.kn = function(j) {
		var a2, ko, bI, kp, ks = jn;
		for (kt.kg(kt.kd(j)), an.ao = cj = ks.jo(12), an.ap = ee = ks.jo(12), km = [-cj, -1, cj, 1], an.l2 = document.createElement("canvas"), an.l2.width = an.ao, an.l2.height = an.ap, an.ky = an.l2.getContext("2d", {
				alpha: !1
			}), an.kz = an.ky.getImageData(0, 0, an.ao, an.ap), an.l3 = an.kz.data, cB.l4.l5(an.l3), bI = ks.jo(12), ko = ks.jo(5), kp = kv(cj * ee - 1), a2 = 0; a2 < bI; a2++) ! function(cP, bQ, kq, kr) {
			var a2, bS, ks = jn,
				l6 = an.l3,
				l7 = bQ,
				l8 = bQ,
				l9 = 0,
				lA = 1 + kq,
				lB = 2 - kq;
			for (l6[bQ << 2] = lA, a2 = 0; a2 < cP; a2++) bS = ks.jo(2), bQ = lC(bQ, bS), l6[bQ << 2] === lA ? l9 % 2 == 1 && lD(l8, l9 + 2 * kr + 3, lB, kr, l6) : l6[bQ << 2] = lA, lD(bQ, bS, lB, kr, l6), lD(l8, bS, lB, kr, l6), l8 = bQ,
				l9 = bS;
			lC(bQ, 0) === l7 ? (lD(bQ, 0, lB, kr, l6), lD(l7, 0, lB, kr, l6)) : lC(bQ, 1) === l7 && (lD(bQ, 0, lB, kr, l6), lD(l7, 2, lB, kr, l6));
			0 === cP && (lD(l7, 0, lB, kr, l6), lD(l7, 2, lB, kr, l6))
		}(ks.jo(ko), ks.jo(kp), 1 === ks.jo(1), 1 === ks.jo(1));
		var gs, gt, lJ, lK, lL, lM, l6 = an.l3,
			lN = !0,
			lO = an.fY.lP[an.lQ].lO,
			lR = an.fY.lP[an.lQ].lR;
		for (gt = 0; gt < ee; gt++)
			for (lK = !0, lL = lN, gs = lM = 0; gs < cj; gs++) lJ = 4 * gt * cj + 4 * gs, lM <= gs && 0 < l6[lJ] && (lL = 2 === l6[lJ], lK) && (lK = !1, lL !== lN) ? (lN = lL, lM = gs + 1, gs = -1) : (lL ? (l6[lJ] = lR[0], l6[1 + lJ] = lR[1], l6[
				2 + lJ] = lR[2]) : (l6[lJ] = lO[0], l6[1 + lJ] = lO[1], l6[2 + lJ] = lO[2]), l6[3 + lJ] = 255);
		an.ky.putImageData(an.kz, 0, 0), an.l0 = !0, an.l1.c6(), aA.cm = !0
	}
}

function lS() {
	var gs, gt, cj, ee, lT, lU, lV, lW, player, aR;

	function le() {
		return function() {
			var a2;
			for (a2 = 0; a2 < 8; a2++)
				if (gs = b7(cj * eR.random(), eR.value(100)), gt = b7(ee * eR.random(), eR.value(100)), lm()) return 1;
			return
		}() || function() {
			var da, dd, eO, lc, cK, lb;
			for (da = b7(cj * eR.random(), eR.value(100)), dd = b7(ee * eR.random(), eR.value(100)), eO = 40; 1 <= eO; eO--)
				for (lc = ee - eO; 0 <= lc; lc -= 40)
					for (gt = (lc + dd) % ee, cK = 40; 1 <= cK; cK--)
						for (lb = cj - cK; 0 <= lb; lb -= 40)
							if (gs = (lb + da) % cj, lm()) return 1;
			return
		}()
	}

	function lm() {
		for (var bQ, lo, lp = b7(lT - lW, 2), lq = lV + gt * lT + lp, lr = lU + gs * lT + lp, ln = lq + lW - 1; lq <= ln; ln--)
			for (lo = lr + lW - 1; lr <= lo; lo--)
				if (bQ = bK.lk(lo, ln), !bK.bL(bQ) || bK.eK(bQ)) return;
		return 1
	}

	function lf(lb, lc) {
		lX(), ls(lb - 2, lc - 2)
	}

	function lX() {
		dj[player] = 0, bC[player] = 0, bj[player] = lt[player] = 0, bJ[player] = [], bb[player] = [], bc[player] = [], bf[player] = [], ei[player] = el[player] = eh[player] = ek[player] = 0
	}

	function ls(lb, lc) {
		var bQ, a2, lv, lw;
		for (dj[player] = 1, bC[player] = player < di ? lu : fJ[ev.eI[player - di]], ei[player] = lb + 10, el[player] = lc + 10, ek[player] = eh[player] = 0, lv = lb; lv < lb + 4; lv++)
			for (lw = lc; lw < lc + 4; lw++)(lb < lv && lv < lb + 3 || lc < lw && lw < lc + 3) && (bQ = bK.lk(lv, lw), bK.bL(bQ)) && (ei[player] = lv < ei[player] ? lv : ei[player], eh[player] = lv > eh[player] ? lv : eh[player], el[player] = lw <
				el[player] ? lw : el[player], ek[player] = lw > ek[player] ? lw : ek[player], aR[bj[player]] = bQ, bj[player]++, bK.lx(bQ, player));
		for (lt[player] = bj[player], a2 = bj[player] - 1; 0 <= a2; a2--) bK.ly(aR[a2], player) ? (bK.bM(aR[a2], player), bb[player].push(aR[a2])) : bK.lz(aR[a2]) ? (bK.bM(aR[a2], player), bc[player].push(aR[a2])) : bK.m0(aR[a2]) && (bK.bM(aR[a2],
			player), bf[player].push(aR[a2]))
	}

	function ll(lb, lc) {
		for (var bQ, lo, ln = lc; lc - 6 < ln; ln--)
			for (lo = lb; lb - 6 < lo; lo--)
				if (bQ = bK.lk(lo, ln), bK.eK(bQ)) return;
		return 1
	}
	this.c6 = function() {
		var a2, lb, lc;
		if (aR = new Array(12), lW = 6, lT = 10, cj = b7(an.ao, lT), ee = b7(an.ap, lT), lU = b7(an.ao - lT * cj, 2), lV = b7(an.ap - lT * ee, 2), hW)
			for (a2 = 0; a2 < di; a2++) player = a2, lX(), dj[player] = 1;
		if (fW.fX && fW.fY.lY) {
			for (player = 0; player < bN; player++)
				if (1 !== dj[player]) {
					if (player < ld) {
						if (function() {
								var lb = fW.fY.lY[player] + 1,
									lc = fW.fY.lj[player] + 1;
								if (3 < lb && lb < an.ao - 5 && 3 < lc && lc < an.ap - 5 && bK.bL(bK.lk(lb, lc)) && ll(lb + 3, lc + 3)) return lf(lb + 1, lc + 1), 1;
								return
							}()) continue;
						if (le()) {
							lb = lU + gs * lT + b7(lT, 2), lc = lV + gt * lT + b7(lT, 2), lf(lb, lc);
							continue
						}
					}
					lX()
				}
		} else ! function() {
			var lb, lc;
			for (player = 0; player < bN; player++) 1 !== dj[player] && (player < ld && le() ? (lb = lU + gs * lT + b7(lT, 2), lc = lV + gt * lT + b7(lT, 2), lf(lb, lc)) : lX())
		}();
		bF.bG[7] = bj[bB], bF.bG[8] = bC[bB]
	}, this.m1 = function(eH, m2, m3) {
		var a2, lb, lc, bQ, gs, gt;
		for (player = eH, a2 = 0; a2 < 20; a2++)
			for (lb = m2 + a2; m2 - a2 <= lb; lb--)
				for (lc = m3 + a2; m3 - a2 <= lc; lc--)
					if ((lb === m2 + a2 || lb === m2 - a2 || lc === m3 + a2 || lc === m3 - a2) && 3 < lb && lb < an.ao - 5 && 3 < lc && lc < an.ap - 5 && bK.bL(bK.lk(lb, lc)) && ll(lb + 3, lc + 3)) {
						if (0 < bj[player]) {
							for (gt = gs = bQ = void 0, gs = eh[player]; gs >= ei[player]; gs--)
								for (gt = ek[player]; gt >= el[player]; gt--) bQ = 4 * (gt * an.ao + gs), bK.m5(player, bQ) && (bK.m6(bQ), bj[player]--);
							lX()
						}
						return ls(lb - 1, lc - 1), !0
					} return !1
	}, this.m7 = function(eH) {
		player = eH, le() ? lf(lU + gs * lT + b7(lT, 2), lV + gt * lT + b7(lT, 2)) : lX()
	}
}

function m8() {
	m9.mA(), cy.setTransform(dq, 0, 0, dq, 0, 0), cy.imageSmoothingEnabled = dq < 3, cy.drawImage(an.l2, ha.h2(), ha.cw()), g4.mB.cx(), cy.drawImage(mC, ha.h2(), ha.cw()), m9.cx(), cy.imageSmoothingEnabled = !1, cy.setTransform(1, 0, 0, 1, 0, 0), e2
		.mB.cx(), fn.cx(), fz.cx(), (hZ ? (g9.cx(), gG) : (cy.imageSmoothingEnabled = !1, fm.cx(), g2.cx(), cU.cx(), gG.cx(), g8.cx(), fo.cx(), ha.cx(), ck.cx(), g9.cx(), g5.cx(), g6.cx(), c9.cx(), mD.cx(), gE.cx(), mE.cx(), kO.cx(), gF)).cx()
}

function mF(i0, cj, ee) {
	i0.clearRect(0, 0, cj, ee), i0.fillStyle = d1.i6, i0.fillRect(0, 0, cj, ee)
}

function mG(i0, cj, ee, mH) {
	i0.fillStyle = d1.d2, i0.fillRect(0, 0, cj, mH), i0.fillRect(0, 0, mH, ee), i0.fillRect(cj - mH, 0, mH, ee), i0.fillRect(0, ee - mH, cj, mH)
}

function mI(i0, gs, gt, mJ, mH, bQ, mK) {
	i0.fillStyle = d1.d2;
	var bQ = Math.floor(mJ * bQ),
		mM = (bQ += (bQ - mH) % 2, Math.floor((bQ - mH) / 2)),
		mJ = Math.floor((mJ - bQ) / 2);
	i0.fillRect(gs + mJ, gt + mJ + mM, bQ, mH), mK && i0.fillRect(gs + mJ + mM, gt + mJ, mH, bQ)
}

function mO() {
	this.mP = null, this.c6 = function(mP) {
		this.mP = mP, fm.mQ(this.mP)
	}, this.mR = function(mS) {
		var dI = (this.mP[mS].mT - this.mP[1 - mS].mT) / 10,
			dI = 8 / (1 + Math.pow(2, dI / 32)),
			dI = Math.floor(10 * dI + .5),
			mV = this.mW(this.mP[mS].mT + dI + 1),
			dI = this.mW(this.mP[1 - mS].mT - dI);
		0 === mS ? fm.mY(this.mP, mV, dI, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : fm.mY(this.mP, dI, mV, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.mW = function(mT) {
		return 16e3 <= (mT = mT < 0 ? 0 : 16e3 < mT ? 16e3 : mT) ? "Unknown" : (mT / 10).toFixed(1)
	}
}

function mZ() {
	var ma = new Uint8Array(64);
	this.c6 = function() {
		var a2;
		for (ma[0] = 45, ma[37] = 95, a2 = 0; a2 < 10; a2++) ma[a2 + 1] = 48 + a2;
		for (a2 = 0; a2 < 26; a2++) ma[a2 + 11] = 65 + a2, ma[a2 + 38] = 97 + a2
	}, this.mb = function(mc) {
		for (var ks = jn, kh = new Uint8Array(mc), a2 = 0; a2 < mc; a2++) kh[a2] = ks.jo(6);
		return kh
	}, this.md = function(kh) {
		for (var bI = kh.length, me = ma, aR = [], a2 = 0; a2 < bI; a2++) aR.push(String.fromCharCode(me[kh[a2]]));
		return aR.join("")
	}
}

function mf() {
	var mg, mh, mi;
	mg = [32, 65, 191, 913, 931], mh = [64, 127, 688, 930, 1155], mi = new Array(mg.length + 1);
	for (var a2 = 0; a2 < mi.length; a2++) {
		mi[a2] = 0;
		for (var eO = a2 - 1; 0 <= eO; eO--) mi[a2] += mh[eO] - mg[eO]
	}

	function mp(fA) {
		for (var a2 = mg.length - 1; 0 <= a2; a2--)
			if (fA >= mg[a2] && fA < mh[a2]) return a2;
		return -1
	}
	this.mk = function(j) {
		return 0 !== (j = j.trim()).indexOf("Bot ") && 0 !== j.indexOf("[Bot] ") && function(j, mm, mn) {
			var bI = (j = j.trim()).length;
			if (bI < mm || mn < bI) return !1;
			for (var fA, mo = 0, a2 = 0; a2 < bI; a2++)
				if (fA = j.charCodeAt(a2), mo += 65 <= fA && fA <= 90 || 1040 <= fA && fA <= 1071 ? 1 : 0, -1 === mp(fA)) return !1;
			if (3 < mo && mo > Math.floor(bI / 2)) return !1;
			return !0
		}(j, 3, 20)
	}, this.mq = function(j) {
		for (var bI = (j = j.trim()).length, aR = [], a2 = 0; a2 < bI; a2++) {
			var fA, bQ = mp(fA = j.charCodeAt(a2));
			aR.push(mi[bQ] + fA - mg[bQ])
		}
		return aR
	}, this.kn = function(aR) {
		for (var fA, cK, j = "", bI = aR.length, a2 = 0; a2 < bI; a2++)
			for (cK = 1; cK < mi.length; cK++)
				if (aR[a2] < mi[cK]) {
					fA = mg[cK - 1] + aR[a2] - mi[cK - 1], j += String.fromCharCode(fA);
					break
				} return j
	}, this.mr = function(j) {
		for (var aR = this.mq(j), result = "", a2 = 0; a2 < aR.length; a2++) result = (result += aR[a2] < 10 ? "00" : aR[a2] < 100 ? "0" : "") + aR[a2].toString(10);
		return result
	}, this.ms = function(j) {
		for (var aR = new Array(Math.floor(j.length / 3)), a2 = 0; a2 < j.length; a2 += 3) aR[Math.floor(a2 / 3)] = parseInt(j.substring(a2, a2 + 3));
		return this.kn(aR)
	}, this.x = function(j) {
		for (var aF, aR = [j.length], a2 = 0; a2 < j.length; a2++) aR[a2] = j.charCodeAt(a2) - 48;
		var result = "";
		for (a2 = 0; a2 < j.length; a2++) a2 === j.length - 1 || 51 < 10 * aR[a2] + aR[a2 + 1] ? result += aR[a2].toString() : (aF = 10 * aR[a2] + aR[a2 + 1], result += String.fromCharCode(aF + (aF < 26 ? 65 : 71)), a2++);
		return result
	}, this.l = function(j) {
		for (var fA, result = "", a2 = 0; a2 < j.length; a2++) 48 <= (fA = j.charCodeAt(a2)) && fA < 58 ? result += String.fromCharCode(fA) : 65 <= fA && fA < 75 ? result += "0" + (fA - 65).toString() : 75 <= fA && fA < 91 ? result += (fA - 65)
			.toString() : 97 <= fA && fA < 123 && (result += (fA - 71).toString());
		return result
	}, this.mt = function(j) {
		for (var bI = j.length, aR = [], a2 = 0; a2 < bI; a2++)(fA = j.charCodeAt(a2)) < 58 ? aR.push(j[a2]) : (fA -= fA < 91 ? 65 : 71, aR.push(String(b7(fA, 10))), aR.push(String(fA - 10 * b7(fA, 10))));
		var bI = aR.length - 2,
			fA = 0,
			kh = [];
		for (a2 = 0; a2 < bI; a2 += 3) kh[fA++] = parseInt(aR[a2] + aR[a2 + 1] + aR[a2 + 2]);
		return kh
	}, this.mu = function() {
		for (var mv, mw = "", a2 = 0; a2 < 6; a2++) mv = 48 + eR.random() % 36, mv += 58 <= mv ? 39 : 0, mw += String.fromCharCode(mv);
		return mw
	}
}

function mx() {
	this.my = new mz, this.fs = new n0, this.c6 = function() {
		this.fs.c6()
	}
}

function mz() {
	function n2() {
		if (2 === gL) return 1;
		g8.nD(), gL = 2, nE = nF
	}

	function n5() {
		fm.nG(!0), g2.gK(!0), fo.gK(!0), g8.gK(), gG.nH(), aA.cm = !0, hx.nI(), a7(0)
	}
	this.n1 = function() {
		n2() || (cR.cC.ji(), fm.n3(247, 0), fm.n4(0, 59), gD.hg(2700), gE.show(!1, !1, !0), n5())
	}, this.n6 = function(n7) {
		var jf = 0,
			n8 = !1;
		n2() || (8 === fa ? ((n8 = (jf = n7 < 0 ? bj[0] >= bj[1] ? 0 : 1 : n7) === bB) ? fm.n4(jf, 2) : fm.n4(1 - bB, 3), n9.mR(jf), cR.cC.je(jf)) : cH ? (n8 = fB.fC[bB] === g9.nA(), 9 === fa ? (cR.cC.je(n8 ? gW[0] : 512), fm.nB(n8)) : fr.fs.eu(
			n8)) : (n8 = (jf = gW[0]) === bB, fm.nC(jf), cR.cC.je(jf)), gE.show(n8, !1), n5())
	}
}

function n0() {
	var nJ;

	function nd(nL, bR) {
		for (var j = "", a2 = bR; a2 < nL.length && a2 < bR + 4; a2++) j += (a2 === bR ? "" : "   ") + "[" + fB.nV[nL[a2].id] + "]: " + nL[a2].na.toFixed(Math.max(Math.floor(3 - Math.log10(nL[a2].na)), 0));
		j.length && fm.nc(0, j, 45, 0, cB.i0.i1(225, 240, 255), d1.i6, -1, !1)
	}
	this.nK = 0, this.nL = null, this.c6 = function() {
		nJ = 0, this.nK = 0, this.nL = null
	}, this.eu = function(n8) {
		var nM = fB.nN[g9.nO()];
		this.nK = g9.nP(), this.nL = function(nM, nK) {
				var a2, cK, bI, fC = fB.fC,
					nN = fB.nN,
					nV = fB.nV,
					nW = fB.nW,
					nX = bj,
					nY = di,
					nZ = [],
					cb = 0;
				for (cK = nV.length - 1; 0 <= cK; cK--)
					if (nN[fC[nW[cK][0]]] === nM) {
						for (nZ.push({
								id: cK,
								nX: 0,
								player: nW[cK][0],
								na: 0
							}), bI = nW[cK].length, a2 = 0; a2 < bI; a2++) nZ[cb].nX += nX[nW[cK][a2]];
						for (nZ[cb].na = (1 + nb) * nY * nZ[cb].nX / nK, a2 = 0; a2 < cb; a2++)
							if (nZ[cb].nX > nZ[a2].nX) {
								nZ.splice(a2, 0, nZ[cb]), nZ.pop();
								break
							} cb++
					} 8 < nZ.length && (nZ.length = 8);
				for (; 0 < nZ.length && 0 === nZ[nZ.length - 1].nX;) nZ.pop();
				return nZ
			}(nM, this.nK), ck.nR("Team " + fB.cY[nM], 2, 1, 12),
			function(n8, nM) {
				var color;
				n8 = n8 ? (color = cB.i0.i1(10, 220, 10), "Congratulations! Team " + fB.cY[nM] + " won the game!") : (color = cB.i0.i1(200, 80, 80), "Our alliance was defeated! Team " + fB.cY[nM] + " won the game.");
				fm.nc(0, n8, 40, 0, color, d1.i6, -1, !1)
			}(n8, nM), 0 !== (n8 = this.nL).length && (fm.nc(0, "The allied clans of the winning team have earned these glorious points:", 40, 0, d1.d2, d1.i6, -1, !1), nd(n8, 0), nd(n8, 4)), cR.cC.jk(), gD.hg(2700)
	}, this.ft = function() {
		2 === gL && -1 !== nJ && (0 === nJ ? nJ = this.nL && 0 !== this.nL.length ? aA.aB + 8e3 : -1 : aA.aB < nJ || (nJ = -1, fm.nc(240, "Clan rankings and results can also be accessed under:", 735, 0, d1.d2, d1.i6, -1, !1), fm.nc(240,
			"territorial.io/clans", 736, 0, d1.d2, d1.i6, -1, !1), fm.nc(240, "territorial.io/clan-results", 736, 0, d1.d2, d1.i6, -1, !1)))
	}
}

function ne() {
	var nf, kh;

	function nj() {
		var a2, cj = new nk;
		for (cj.kj(800), cj.kk(1, 0), cj.kk(3, 7), cj.kk(3, 1), cj.kk(2, b ? 2 : 12 <= d ? 1 : 0 < d ? 3 : 0), cj.kk(1, nl ? 1 : 0), cj.kk(1, nm ? 1 : 0), cj.kk(1, 2 === nn ? 1 : 0), a2 = 0; a2 < kh.length && !(cj.cb + 6 > 8 * cj.eL); a2++) cj.kk(6,
			kh[a2]);
		nf.send(cj.jm), nf.onopen = null
	}
	window.addEventListener("error", function error(ng) {
		var ni;
		window.removeEventListener("error", error), ng = ng.lineno + " " + ng.colno + " " + ng.message, (ni = new ka).c6(), kh = ni.kd(ni.kc(ng)), (nf = new WebSocket("wss://territorial.io/s52/")).onopen = nj, e ? e.showToast(ng) : alert(ng)
	})
}

function no() {
	var np = -15e3,
		nq = !1;

	function co(ng) {
		o9() || (nq = !0, oA(ng, 1), fq.oB(fq.oC), oD(Math.floor(kS * ng.clientX), Math.floor(kS * ng.clientY)))
	}

	function ny(ng) {
		np = aA.aB, oA(ng, 1), fq.oB(fq.oC), 0 < ng.touches.length && (oE = Math.floor(kS * ng.touches[0].clientX), oF = Math.floor(kS * ng.touches[0].clientY), oG.ny(ng) || oD(oE, oF))
	}

	function oD(gs, gt) {
		0 === gL ? aH.co(gs, gt) : gG.oH(gs, gt) || mE.co(gs, gt) || kO.co(gs, gt) || gE.co(gs, gt) || mD.oI(gs, gt) || g6.co(gs, gt) || c9.co(gs, gt) || oJ.oK(gs, gt) || g8.co(gs, gt) || mD.oL(gs, gt)
	}

	function nu(ng) {
		o9() || (nq = !0, oA(ng, 1), oM(Math.floor(kS * ng.clientX), Math.floor(kS * ng.clientY)))
	}

	function nz(ng) {
		np = aA.aB, oA(ng, 1), 0 < ng.touches.length && (oE = Math.floor(kS * ng.touches[0].clientX), oF = Math.floor(kS * ng.touches[0].clientY), oG.nz(ng) || oM(oE, oF))
	}

	function oM(gs, gt) {
		0 === gL ? aH.nu(gs, gt) : mE.nu(gs, gt) || (c9.nu(gs, gt), mD.oN() ? mD.nu(gs, gt) : cU.oO ? cU.nu(gs, gt) && (aA.cm = !0) : (g2.nu(gs, gt), ha.hb && ha.nu(gs, gt) && (aA.cm = !0)))
	}

	function nw(ng) {
		o9() || (oA(ng, 1), 0 === gL ? (aH.click(-1024, -1024), oP.oQ()) : (g2.oR(-1024, -1024), c9.nu(-1024, -1024), cU.oS(), ha.hb && (ha.hb = !1)))
	}

	function nv(ng) {
		o9() || (oA(ng, 1), oT(Math.floor(kS * ng.clientX), Math.floor(kS * ng.clientY), 2 === ng.button))
	}

	function click(ng) {
		o9() || oA(ng, 1)
	}

	function o0(ng) {
		np = aA.aB, oA(ng, 1), ng && ng.touches && 0 < ng.touches.length && 0 !== gL ? ha.hb = !1 : oG.oU() || oT(oE, oF, !1)
	}

	function o1(ng) {
		np = aA.aB, oA(ng, 1), oT(oE, oF, !1)
	}

	function o2(ng) {
		oV.o2(ng)
	}

	function o3(ng) {
		oV.o3(ng)
	}

	function o4(ng) {
		o9() || oA(ng, 0)
	}

	function oT(gs, gt, oW) {
		0 === gL ? aH.click(gs, gt) : (g2.oR(gs, gt), mE.oR(), cU.oS(), ha.hb = !1, mD.click(gs, gt, oW) && (aA.cm = !0))
	}

	function nx(ng) {
		var gs, gt, deltaY;
		o9() || (oA(ng, 1), fq.oB(fq.oC), gs = Math.floor(kS * ng.clientX), gt = Math.floor(kS * ng.clientY), deltaY = ng.deltaY, 1 === ng.deltaMode && (deltaY *= 16), 0 === gL ? aH.nx(gs, gt, deltaY) : g2.nx(gs, gt, deltaY) || (cU.oX(gs, gt) ? cU
			.nx(deltaY) && (aA.cm = !0) : ha.nx(gs, gt, +deltaY)))
	}

	function o5(ng) {
		oA(ng, 0)
	}

	function oA(ng, id) {
		0 === id && (oY.oN || kO.oN || oZ.oN) || 1 === id && (oZ.kN || kO.kN) || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aH.ob() && ng.preventDefault()
	}

	function o6(ng) {
		o9() || aA.aB < 400 || (8 !== aH.ob() && aH.oc(ng) ? aA.cm = !0 : "Escape" === ng.key ? aH.aI() : "ArrowLeft" === ng.key || "a" === ng.key ? he.od(3) : "ArrowUp" === ng.key || "w" === ng.key ? he.od(0) : "ArrowRight" === ng.key || "d" === ng
			.key ? he.od(1) : "ArrowDown" === ng.key || "s" === ng.key ? he.od(2) : "h" === ng.key ? 1 <= gL && gG.oe(!hZ) : " " === ng.key && gL && (og.c7(), c9.cA && c9.oh(), c8) && gG.oi(!1))
	}

	function o7(ng) {
		o9() || ("ArrowLeft" === ng.key || "a" === ng.key ? he.oj(3) : "ArrowUp" === ng.key || "w" === ng.key ? he.oj(0) : "ArrowRight" === ng.key || "d" === ng.key ? he.oj(1) : "ArrowDown" === ng.key || "s" === ng.key ? he.oj(2) : "1" === ng.key ?
			cU.ok(.75) : "2" === ng.key ? cU.ok(7 / 8) : "3" === ng.key ? cU.ok(.9375) : "4" === ng.key ? cU.ok(31 / 32) : "5" === ng.key ? cU.ok(32 / 31) : "6" === ng.key ? cU.ok(16 / 15) : "7" === ng.key ? cU.ok(8 / 7) : "8" === ng.key ? cU.ok(
				4 / 3) : "+" === ng.key ? 0 !== gL && ha.nx(Math.floor(h0 / 2), Math.floor(cs / 2), -200) : "-" === ng.key ? 0 !== gL && ha.nx(Math.floor(h0 / 2), Math.floor(cs / 2), 200) : "c" === ng.key && 0 !== gL && mE.ol())
	}

	function o8() {
		"hidden" === document.visibilityState ? aA.om() : aA.on()
	}

	function o9() {
		return np + 15e3 > aA.aB
	}

	function resize() {
		oq.or()
	}
	this.nr = 0, this.ns = "", this.c6 = function() {
		nt.addEventListener("mousedown", co, {
			passive: !1
		}), nt.addEventListener("mousemove", nu, {
			passive: !1
		}), nt.addEventListener("mouseup", nv, {
			passive: !1
		}), nt.addEventListener("click", click, {
			passive: !1
		}), nt.addEventListener("mouseleave", nw, {
			passive: !1
		}), nt.addEventListener("wheel", nx, {
			passive: !1
		}), nt.addEventListener("touchstart", ny, {
			passive: !1
		}), nt.addEventListener("touchmove", nz, {
			passive: !1
		}), nt.addEventListener("touchend", o0, {
			passive: !1
		}), nt.addEventListener("touchcancel", o1, {
			passive: !1
		}), nt.addEventListener("dragover", o2), nt.addEventListener("drop", o3), nt.addEventListener("dblclick", o4), document.addEventListener("contextmenu", o5), document.addEventListener("keyup", o6), document.addEventListener("keydown",
			o7), document.addEventListener("visibilitychange", o8), window.addEventListener("resize", resize)
	}, this.oK = function(gs, gt) {
		return !!gG.co(gs, gt) || !!(g2.co(gs, gt) || ha.co(gs, gt) || cU.co(gs, gt) || fm.co(gs, gt))
	}, this.oo = o9, this.op = function() {
		return !nq || 0 < np
	}
}

function os() {
	this.i0 = new ot, this.l4 = new ou, this.cC = new ov
}

function ou() {
	this.l5 = function(aR) {
		aR.fill(0)
	}, this.ow = function(aR) {
		for (var bI = aR.length, a2 = 0; a2 < bI; a2++) aR[a2] = []
	}, this.ox = function(dD, cX) {
		for (var dE = e8.aN, a2 = 0; a2 < 3; a2++) dE[a2] = cX * dD[a2];
		return dE
	}, this.oy = function(dD, dE, oz) {
		for (var dI = 0, a2 = 0; a2 < 3; a2++) dI += Math.abs(dD[a2] - dE[a2]);
		return oz <= dI
	}, this.p0 = function(dD, p1) {
		for (var a2 = 0; a2 < 3; a2++) dD[a2] = by.p2(dD[a2] + p1, 0, 255);
		return dD
	}
}

function ot() {
	this.ku = function(cj, ee) {
		var fA = document.createElement("canvas");
		return fA.width = cj, fA.height = ee, fA
	}, this.getContext = function(p3, alpha) {
		return p3.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(i0, cj, ee) {
		return i0.getImageData(0, 0, cj, ee)
	}, this.i1 = function(mv, p4, cK) {
		return "rgb(" + mv + "," + p4 + "," + cK + ")"
	}, this.i3 = function(mv, p4, cK, eO) {
		return "rgba(" + mv + "," + p4 + "," + cK + "," + eO.toFixed(3) + ")"
	}, this.kQ = function(p5, gs, gt, cj, ee) {
		var hj = 1 / kS,
			p6 = .02 * hj * ee,
			p7 = hj * p8;
		p5.padding = p6.toFixed(2) + "px", p5.border = p7.toFixed(2) + "px solid " + d1.d2, p5.left = (hj * gs).toFixed(2) + "px", p5.top = (hj * gt).toFixed(2) + "px", p5.width = (hj * cj - 2 * p6 - 2 * p7).toFixed(2) + "px", p5.height = (hj *
			ee - 2 * p6 - 2 * p7).toFixed(2) + "px"
	}, this.kR = function(eL, type) {
		return eL = eL.toFixed(2), 0 === type ? eL + "px " + settings.fontName : 1 === type ? "bold " + eL + "px " + settings.fontName : 2 === type ? "small-caps " + eL + "px " + settings.fontName : "small-caps bold " + eL + "px " + settings
			.fontName
	}, this.textAlign = function(p9, id) {
		p9.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(p9, id) {
		p9.textBaseline = 1 === id ? "middle" : "bottom"
	}, this.kH = function() {
		return 1 + .5 * o
	}
}

function ov() {
	this.cD = function(a8) {
		return 0 === a8 ? 1 === gL && hW : 1 === a8 ? 1 === gL && !hW : 1 <= gL && !hW
	}, this.cE = function(player) {
		return 0 !== dj[player] && 2 !== dk[player]
	}, this.jv = function(pA, pB) {
		return pA !== pB
	}, this.jS = function(player, aF) {
		return aF = this.pC(player, aF), bC[player] += aF, aF
	}, this.pC = function(player, aF) {
		var pD = bC[player];
		return aF = Math.min(aF, bj[player] * pE - pD), aF = Math.min(aF, pF - pD), Math.max(aF, 0)
	}, this.jw = function(player, dn, pG, pH) {
		var pD = bC[player],
			dn = by.bz(pD * (dn + 1), 1024),
			pG = by.bz(pG * pD, 1024),
			dn = Math.min(dn, pD - pG);
		return 10 === fa && (dn = fv.pJ(player, dn)), e8.aL[0] = dn, e8.aL[1] = pG, pH <= dn
	}, this.jP = function(player, j4, j3) {
		var player = bC[player],
			pI = by.bz(64 * player, 1024);
		return j4 = Math.min(j4, player - pI), pI += player = this.pL(j4), j4 = this.pC(j3, j4 -= player), e8.aL[0] = j4, e8.aL[1] = pI, 1 <= j4
	}, this.jR = function(j4, j3) {
		var pK = this.pL(j4);
		return j4 = this.pC(j3, j4 -= pK), e8.aL[0] = j4, e8.aL[1] = pK, 1 <= j4
	}, this.dm = function(player, pM) {
		return by.bz(bC[player] * (pM + 1), 1024)
	}, this.pL = function(pN) {
		return by.bz(Math.max(2142 - aA.f9(), 0) * pN, 2142)
	}, this.kA = function(player, pG) {
		bC[player] -= by.bz(pG * bC[player], 1024)
	}, this.jy = function(player) {
		bC[player] -= e8.aL[0] + e8.aL[1]
	}, this.jx = function(player, eH) {
		return (eH = Math.min(eH, bN)) < bN && 0 === dj[eH] && (eH = bN), (e8.aP[0] = eH) === bN || eT(player, eH)
	}, this.k0 = function(player, j3) {
		return 0 !== dj[j3] && !eT(player, j3)
	}
}

function pO() {
	this.eE = function(player, dK) {
		pP.m1(player, jr.dA(dK), jr.dC(dK)) && (aA.cm = !0), fc && this.eu()
	}, this.eu = function() {
		var a2;
		for (hW = !1, a2 = 0; a2 < di; a2++) 0 !== dj[a2] && 0 === bj[a2] && pP.m7(a2);
		0 !== dj[bB] ? (bF.bG[7] = bj[bB], bF.bG[8] = bC[bB], cU.cv(), fo.pQ(), c8 || gD.hV(ei[bB] - 5, el[bB] - 5, eh[bB] + 5, ek[bB] + 5), gF.c6()) : gE.show(!1, !1, !1, !0), fm.pR(18), fn.pS(), fn.gK(!0), g4.g0.pT(), ju = null, hx.pU = !0, hx
			.pV(), fc && a7(1)
	}
}
var fc, c8, pW, pF, pX, bB, hZ, hW, pY, cH, pZ, fa, nb, ju, n9, pa, ev, b9, fy, fz, gD, pP, k, mD, c9, fm, pz, g6, ck, cU, ha, oP, g5, g2, fo, gE, q0, q1, aH, q2, oZ, q3, fd, py, cf, bK, f, at, bD, fn, po, fg, pm, q4, he, q5, eR, gl, m9, oG, q6, gF,
	iy, oq, q7, q8, g8, gH, fq, fw, h6, q9, fx, fv, g7, oV, fW, qA, cR, gB, kO, cB, d1, gG, ki, qB, jn, kt, qC, oJ, qD, by, jr, e2, e8, g4, gA, fr, an, og, bN = 512,
	ld = 512,
	pE = 150,
	gL = 0,
	lu = 512,
	b8 = 2;

function pb(pc, pd, mP, pe, pf, pg) {
	hZ = !1, c8 = pg, nb = pf, cH = (fa = pe) < 7 || 9 === fa, nF = di = mP.length, fc = 1 === nF, pZ = 9 === (fa = 8 === (fa = 10 === fa && fc ? 7 : fa) && 2 !== di ? 7 : fa) ? 2 : fa + 2, pa = di <= 2 ? 30 : di <= 50 ? 40 : 50, pY = hW = !(fW.fX &&
			!fW.fY.ph) && (cH || di < 100), ju = hW ? new pO : null, lu = 512, ld = bN, fc && (ld = fd.pi()), fV = ld - di, nE = 0, bB = pd, eR.pj(pc), fg.c6(), pk(mP), fB.c6(mP), gL = 1, pF = 15e8, pX = 1e9, bF.c6(), pl(), pm.pn(), hx.c6(), bD.c6(),
		eq(), bK.c6(mP), m9.c6(), jr.c6(), e2.c6(), fr.c6(), ev.c6(), po.kj(), po.pp(), pP.c6(), pq(), gB.c6(pc, mP, pe, pf), g9.c6(), gA.c6(), g4.c6(), mE.c6(), pr.putImageData(ps, 0, 0), g2.c6(), ha.c6(), cU.c6(), gG.c6(), g8.c6(), g5.c6(), fo
	.c6(), c9.c6(), ck.c6(), fm.c6(), g6.c6(), mD.c6(), gE.c6(), fz.c6(), b9.c6(), fy.c6(), am(), at.c6(), fn.c6(), og.c6(), fv.c6(), fx.c6(), g7.c6(), fw.c6(), 8 === fa ? (n9 = new mO).c6(mP) : n9 = null, aA.pt(), pu(), gF.c6(), aA.cm = !0, c8 ||
		fc && hW || a7(1)
}

function pu() {
	gD.hU(), 0 === dj[bB] && gE.show(!1, !0), fn.gK(!0)
}

function pv(pw) {
	kO.kP(), fq.close(fq.oC, 3246), gL = 0, aA.px(), a7(0), py.c6(!pw)
}

function qE() {
	by = new qF, qD = new qG, ev = new fK, b9 = new gN, fy = new gb, fz = new ge, gD = new hB, pP = new lS, k = new mf, mD = new qH, c9 = new qI, fm = new qJ, pz = new qK, g6 = new qL, ck = new qM, cU = new qN, ha = new qO, oP = new qP, g5 = new qQ,
		g2 = new qR, fo = new qS, gE = new qT, q0 = new qU, q1 = new qV, aH = new qW, (q2 = new qX).kj(), oZ = new qY, q3 = new qZ, fd = new qa, py = new qb, cf = new qc, bK = new qd, f = new qe, at = new qf, bD = new qg, fn = new qh, po = new qi,
		fg = new qj, pm = new qk, q4 = new ql, he = new qm, q5 = new qn, eR = new qo, gl = new qp, m9 = new qq, oG = new qr, q6 = new qs, gF = new qt, iy = new qu, oq = new qv, q7 = new qw, q8 = new qx, g8 = new qy, gH = new qz, fq = new r0, fw =
		new r1, h6 = new r2, q9 = new r3, fx = new r4, fv = new r5, g7 = new r6, oV = new r7, fW = new r8, qA = new r9, cR = new ip, gB = new rA, kO = new rB, cB = new os, d1 = new hz, gG = new rC, ki = new nk, (qB = new mZ).c6(), jn = new rD, (kt =
			new ka).c6(), qC = new rE, oJ = new no, jr = new d3, e2 = new rF, e8 = new aJ, g4 = new rG, gA = new rH, fr = new mx, (an = new rI).c6(), og = new c3
}

function qH() {
	var rJ, gs, gt, rK, rL, rM, aB, player, rN, lp, zoom, jb, rO;

	function re(player) {
		for (var a2 = jb.length - 1; 0 <= a2; a2--)
			if (jb[a2] === player) return 1
	}

	function rc(rZ) {
		var a2, bI;
		if (-1 !== rZ)
			for (bI = rJ.length, a2 = 0; a2 < bI; a2++)
				if (rJ[a2].oN && rJ[a2].gs + 1 === rZ % 4 && rJ[a2].gt + 1 === rZ >> 2) return a2;
		return -1
	}

	function rb(cp, cq) {
		var p4 = lp / 2;
		return cp < gs - rK - 3 * p4 || gs + 3 * rK + 5 * p4 < cp || cq < gt - rK - 3 * p4 || gt + 2 * rK + 3 * p4 < cq ? -1 : 4 * (cq < gt - p4 ? 0 : cq < gt + rK + p4 ? 1 : 2) + (cp < gs - p4 ? 0 : cp < gs + rK + p4 ? 1 : cp < gs + 2 * rK + 3 *
			p4 ? 2 : 3)
	}
	this.rP = function() {
		var a2, cK, rS = [d1.iQ, d1.iZ, d1.i7, d1.im, d1.ig];
		for (rJ = new Array(8), a2 = 0; a2 < 8; a2++) rJ[a2] = {
			id: a2,
			oN: !1,
			rT: 0,
			p3: [],
			gs: 0,
			gt: 0
		};
		for (rJ[0].colors = [0, 1, 2, 3], rJ[0].gs = 0, rJ[0].gt = 0, rJ[1].colors = [0, 1, 4], rJ[1].gs = 1, rJ[1].gt = 0, rJ[2].colors = [0, 2], rJ[2].gs = -1, rJ[2].gt = 0, rJ[3].colors = [0], rJ[3].gs = 0, rJ[3].gt = 0, rJ[4].colors = [0, 2],
			rJ[4].gs = 1, rJ[4].gt = 1, rJ[5].colors = [3], rJ[5].gs = 0, rJ[5].gt = -1, rJ[6].id = 20, rJ[6].colors = [0], rJ[6].gs = 1, rJ[6].gt = -1, rJ[7].id = 21, rJ[7].colors = [0], rJ[7].gs = 0, rJ[7].gt = 1, a2 = 0; a2 < 8; a2++)
			for (cK = 0; cK < rJ[a2].colors.length; cK++) rJ[a2].p3.push(function(id, rU) {
				var mJ = cf.get(3).height,
					rV = cB.i0.ku(mJ, mJ),
					p9 = cB.i0.getContext(rV);
				20 === id ? p9.drawImage(cf.get(18), 0, 0) : 21 === id ? p9.drawImage(cf.rW("emojis"), -4 * mJ, 0) : (function(cj, i0, rY) {
					i0.fillStyle = rY, i0.beginPath(), i0.arc(Math.floor(cj / 2), Math.floor(cj / 2), Math.floor(.47 * cj), 0, 2 * Math.PI), i0.fill()
				}(mJ, p9, rU), p9.drawImage(cf.get(3), -id * mJ, 0));
				return rV
			}(rJ[a2].id, rS[rJ[a2].colors[cK]]))
	}, this.rR = function() {
		return rJ
	}, this.c6 = function() {
		jb = [], gs = gt = aB = 0, rL = rM = -1e3, this.resize()
	}, this.resize = function() {
		rK = Math.floor((o ? .075 : .0468) * cZ), zoom = rK / cf.get(3).height, lp = Math.floor(rK / 3)
	}, this.oI = function(cp, cq) {
		return !!this.oN() && (aA.cm = !0, !!a3.co(cp, cq, player) || (cp = function(cp, cq) {
			var rZ, a2;
			if (rM = rL = -1e3, rZ = rb(cp, cq), -1 === (rZ = rc(rZ))) return 0;
			if (1 === rJ[rZ].colors[rJ[rZ].rT]) return 0;
			if (5 === rZ) {
				if (! function() {
						var r = (new Date).getTime();
						rO + 4e3 < r && (jb = []);
						rO = r
					}(), re(player)) return 1;
				jb.push(player), 16 < jb.length && jb.shift()
			} else if (6 === rZ) {
				for (a2 = jb.length - 1; 0 <= a2; a2--) 0 === dj[jb[a2]] && jb.splice(a2, 1);
				0 < jb.length && (g7.rf(1, jb, !0) && cR.cC.ja(jb, player), jb = [])
			} else if (2 === rZ) cR.cS.j2(cU.cV(), player);
			else if (3 === rZ) hW && cR.cS.ix(rN);
			else if (0 === rZ)
				if (0 === rJ[0].rT) {
					if (pY && fo.rg() < 300) return 1;
					cR.cS.cT(cU.cV(), player)
				} else fw.rh(player, cU.cV());
			else if (1 === rZ) cR.cS.j6(cU.cV(), rN);
			else {
				if (7 === rZ) return a3.show(cp, cq), 2;
				if (4 !== rZ) return 0;
				g7.rf(0, [player], !0) && cR.cC.jX(player)
			}
			return 1
		}(cp, cq), this.kP(), 2 === cp && (a3.oN = !0), 0 < cp))
	}, this.oL = function(cp, cq) {
		this.oN() || (rL = cp, rM = cq, aB = (new Date).getTime())
	}, this.click = function(cp, cq, oW) {
		var dU = jr.ds(cp),
			dV = jr.dt(cq),
			dK = jr.dv(dU, dV),
			dT = jr.dx(dK);
		return !(!jr.du(dU, dV) || (dU = (o ? .025 : .0144) * cZ, Math.abs(cp - rL) > dU) || Math.abs(cq - rM) > dU || performance.now() > aB + 425) && (oW ? (function(cp, cq, dT) {
			bK.bL(dT) || -1 === (cp = e2.j7.rz(cp, cq)) ? fm.ry(dT) : fm.s0(cp)
		}(cp, cq, dT), !1) : c9.cA || this.oN() || !jr.dl() || c8 ? (this.kP(), !1) : hW ? !!bK.bL(dT) && (rN = dK, rJ[3].oN = !0, this.rk(cp, cq)) : (e2.j7.jA(dK) || e2.j7.rl(cp, cq) || (2 === gL ? bK.bT(dT) && 0 < a3.rm && (player = bK
			.bU(dT), bK.rn(player)) && (rJ[0].oN = !0, rJ[0].rT = 1, rJ[7].oN = !0) : bK.ro(dT) || (rN = dK, e2.j7.j8(bB, dK) && (rJ[0].oN = !0, rJ[0].rT = 1, rJ[1].oN = !0, rJ[1].rT = e8.aO[2] ? 0 : 2), bK.rp(dT)) || (bK.bV(dT) ?
			(player = bN, rq(bB) ? (rJ[0].oN = !0, rJ[0].rT = 0) : rr(bB, player) && (rJ[0].oN = !0, rJ[0].rT = 3)) : (player = bK.bU(dT)) === bB ? 0 !== a3.rm && (rJ[0].oN = !0, rJ[0].rT = 1, rJ[7].oN = !0) : (rJ[0].rT = 1, rJ[5]
				.oN = function(player) {
					return bK.rn(player) && !re(player) && g7.rf(1, [player], !1)
				}(player), rJ[7].oN = 1 <= a3.rm && bK.rn(player), eT(player, bB) ? (rJ[4].oN = bK.rn(player) && !fn.rt(player) && g7.rf(0, [player], !1), rJ[6].oN = function(player) {
					if (0 === jb.length) return !1;
					if ((new Date).getTime() > rO + 4e3) return !(jb = []);
					return !re(player) && ! function(player) {
						var a2;
						if (cH)
							for (a2 = jb.length - 1; 0 <= a2; a2--)
								if (!eT(player, jb[a2])) return 1;
						return
					}(player)
				}(player), rv(bB, player) ? (rJ[0].rT = 0, rJ[0].oN = !0) : rr(bB, player) && (rJ[0].rT = 3, rJ[0].oN = !0), rJ[0].oN = this.rw()) : (rJ[2].oN = !0, rJ[0].oN = !0)))), this.rk(cp, cq)))
	}, this.rk = function(cp, cq) {
		return gs = cp - Math.floor(rK / 2), gt = cq - Math.floor(rK / 2), !!this.oN()
	}, this.nu = function(cp, cq) {
		return !!this.oN() && (a3.oN ? !a3.s2(cp, cq) && (a3.s3(), a3.oN = !1, aA.cm = !0) : function(s5, cp, cq) {
			cp = rb(cp, cq);
			if (0 <= rc(cp)) return !1;
			if ((1 === cp || 6 === cp) && 0 <= rc(2)) return !1;
			if ((6 === cp || 9 === cp) && 0 <= rc(10)) return !1;
			return s5.kP(), aA.cm = !0
		}(this, cp, cq))
	}, this.kP = function() {
		for (var a2 = rJ.length - 1; 0 <= a2; a2--) rJ[a2].oN = !1, rJ[a2].rT = 0;
		a3.oN = !1
	}, this.oN = function() {
		return this.rw() || a3.oN
	}, this.rw = function() {
		for (var bI = rJ.length, a2 = 0; a2 < bI; a2++)
			if (rJ[a2].oN) return !0;
		return !1
	}, this.cx = function() {
		if (this.oN())
			if (a3.oN) a3.cx();
			else {
				var a2, p9 = cy,
					cK = rJ,
					bI = cK.length,
					s7 = (rK + lp) / zoom;
				for (p9.imageSmoothingEnabled = !0, p9.setTransform(zoom, 0, 0, zoom, gs, gt), a2 = 0; a2 < bI; a2++) cK[a2].oN && cy.drawImage(cK[a2].p3[cK[a2].rT], cK[a2].gs * s7, cK[a2].gt * s7);
				p9.imageSmoothingEnabled = !1, p9.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function qI() {
	var ee, p3, ci, s9, sA, s8 = ["Quit Game", "Surrender", "Statistics", "Replay"];

	function sB() {
		var sC, i0 = p3.getContext("2d", {
			alpha: !0
		});
		i0.clearRect(0, 0, ee, ee), i0.fillStyle = d1.i4, i0.fillRect(0, 0, ee, ee), 0 === s9 && (i0.fillStyle = d1.i8, i0.fillRect(0, 0, ee, ee)), i0.fillStyle = d1.d2, i0.fillRect(0, 0, ee, 1), i0.fillRect(0, 0, 1, ee), i0.fillRect(0, ee - 1, ee,
			1), i0.fillRect(ee - 1, 0, 1, ee), sC = .9 * ee / cf.get(0).width, i0.imageSmoothingEnabled = !0, i0.setTransform(sC, 0, 0, sC, Math.floor((ee - sC * cf.get(0).width) / 2), Math.floor((ee - sC * cf.get(0).height) / 2)), i0.drawImage(
			cf.get(0), 0, 0), i0.setTransform(1, 0, 0, 1, 0, 0)
	}

	function sF(cp, cq) {
		if (!c9.cA) return cp <= ee + kI && cq >= cU.gt ? 0 : -1;
		if (cp <= 4 * ee + kI) {
			if (cq >= cU.gt) return 0;
			if (cq >= cU.gt - ee - sA * kI) return sI(2) ? 2 : -1;
			if (cq >= cU.gt - 2 * (ee + sA * kI)) return sI(3) ? 3 : -1;
			if (cq >= cU.gt - 3 * (ee + sA * kI)) return sI(4) ? 4 : -1
		} else if (cp <= 7 * ee + kI && cq >= cU.gt - ee - sA * kI) return 1;
		return -1
	}

	function sI(a2) {
		return 2 === a2 ? sG(2) || sG(3) || sG(4) : 3 === a2 && sG(3) || sG(4)
	}

	function sG(a2) {
		return 2 === a2 ? !c8 && c9.sN(bB) : 3 === a2 ? 2 <= bF.sO : kO.sP()
	}

	function sR(a2, rU) {
		cy.setTransform(1, 0, 0, 1, kI, cU.gt - a2 * sA * kI - a2 * ee), cy.fillStyle = d1.i4, cy.fillRect(0, 0, 4 * ee, ee), s9 === a2 + 1 && rU === d1.d2 && (cy.fillStyle = d1.i8, cy.fillRect(0, 0, 4 * ee, ee)), cy.fillStyle = rU, cy.fillRect(0, 0,
			4 * ee, 1), cy.fillRect(0, 0, 1, ee), cy.fillRect(4 * ee, 0, 1, ee), cy.fillRect(0, ee - 1, 4 * ee, 1), cy.fillText(s8[a2], 2 * ee, .54 * ee)
	}
	this.cA = !1, this.c6 = function() {
		s9 = -1, this.cA = !1, sA = o ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		ee = cU.ee, (p3 = document.createElement("canvas")).width = ee, p3.height = ee, ci = cc + Math.floor((o ? .5 : .45) * ee) + cd, sB()
	}, this.oh = function() {
		this.cA = !this.cA, this.cA ? (gG.oe(!1), c8 && gG.sD && gG.oi(!0), this.sE()) : (s9 = -1, sB(), fc && 1 === gL && !hW && a7(1)), aA.cm = !0
	}, this.sE = function() {
		(fc || c8) && 1 === gL && (g2.gK(!0), hW || setTimeout(function() {
			hx.nI()
		}, 0), a7(0))
	}, this.co = function(cp, cq) {
		var rT = sF(cp, cq);
		if (this.cA) {
			if (hZ) return 0 <= rT && gG.oe(!1), !c8;
			if (0 === rT) pv();
			else if (1 === rT) this.oh();
			else if (2 === rT) sG(rT) && (cR.cS.jN(), this.oh());
			else if (3 === rT) sG(rT) && (mE.oh(), aA.cm = !0, kO.oN) && kO.kP();
			else if (4 === rT) sG(rT) && (kO.oN ? kO.kP() : kO.show(), mE.oN) && mE.oh();
			else {
				if (!(fc || 1 !== gL || c8 || mE.oN || kO.oN) && (c9.oh(), 1)) return !1;
				oJ.oK(cp, cq) || mD.oL(cp, cq)
			}
			return !0
		}
		return 0 === rT && (this.oh(), !0)
	}, this.nu = function(cp, cq) {
		cp = sF(cp, cq);
		cp !== s9 && (s9 = cp, this.cA || sB(), aA.cm = !0)
	}, this.cx = function() {
		var cj;
		this.cA ? (cj = Math.floor(5.5 * ee), cy.setTransform(1, 0, 0, 1, kI, cU.gt), cy.fillStyle = d1.i4, cy.fillRect(0, 0, cj, ee), 0 === s9 ? (cy.fillStyle = d1.i8, cy.fillRect(0, 0, 4 * ee, ee)) : 1 === s9 && (cy.fillStyle = d1.i8, cy
				.fillRect(4 * ee, 0, Math.floor(1.5 * ee), ee)), cy.fillStyle = d1.d2, cy.fillRect(0, 0, cj, 1), cy.fillRect(0, 0, 1, ee), cy.fillRect(4 * ee, 0, 1, ee), cy.fillRect(0, ee - 1, cj, 1), cy.fillRect(cj - 1, 0, 1, ee), cy.font =
			ci, cy.textBaseline = cz, cy.textAlign = d0, cy.fillText(s8[0], 2 * ee, .54 * ee), cj = .4 * ee, c9.sQ(kI + 4 * ee + (1.5 * ee - cj) / 2, cU.gt + .3 * ee, cj), sI(2) && sR(1, sG(2) ? d1.d2 : d1.iE), sI(3) && sR(2, sG(3) ? d1.d2 :
				d1.iE), sI(4) && sR(3, d1.d2), cy.setTransform(1, 0, 0, 1, 0, 0)) : cy.drawImage(p3, kI, cU.gt)
	}, this.sN = function(player) {
		return 0 !== dj[player] && 2 !== gL && bK.rn(player)
	}, this.sQ = function(gs, gt, bI) {
		cy.setTransform(1, 0, 0, 1, gs, gt), cy.lineWidth = p8, cy.strokeStyle = d1.d2, cy.beginPath(), cy.moveTo(0, 0), cy.lineTo(bI, bI), cy.moveTo(0, bI), cy.lineTo(bI, 0), cy.stroke()
	}
}

function qJ() {
	var sS, ee, p7, sT, sU, sV, sW, sX, sY;

	function cw() {
		return cU.ss(fm.so()) ? g8.oN ? cU.gt - cU.ee - 2 * p7 : cU.gt - p7 : gG.ss(fm.sr()) ? g8.oN ? gG.cw() - cU.ee - 2 * p7 : gG.cw() - p7 : g8.oN ? q - cU.ee - (h6.st() + 1) * p7 : q - h6.st() * kI
	}

	function sg(r, j, id, bQ, sj, sk, lF, sl, sm) {
		var a2, i0, sp, rV, sw, sx = void 0 !== sm,
			cj = Math.floor(ck.measureText(j, fm.ci) + 1.5 * sT + (sx ? ee : 1.5 * sT));
		if (aA.cm = !0, p < cj + p7 && !sx && 50 !== id && 20 < j.length) sp = Math.floor(.5 * j.length), sg(r, j.substring(0, sp), id, bQ, sj, sk, lF, sl, sm), sg(r, j.substring(sp), id, bQ, sj, sk, lF, sl, sm);
		else if (sp = cj + (50 === id ? sU : 0), (rV = document.createElement("canvas")).width = cj, rV.height = ee, (i0 = rV.getContext("2d", {
				alpha: !0
			})).font = fm.ci, i0.textBaseline = cz, i0.textAlign = sy, i0.clearRect(0, 0, cj, ee), i0.fillStyle = sk, i0.fillRect(0, 0, cj, ee), i0.fillStyle = sj, i0.fillText(j, Math.floor(1.5 * sT), Math.floor(ee / 2)), sx && (sx = ee / a3.cj, i0
				.imageSmoothingEnabled = !0, i0.setTransform(sx, 0, 0, sx, cj - ee, 0), i0.drawImage(a3.rV[sm], 0, 0)), 0 === (sw = {
				aB: r,
				j: j,
				id: id,
				player: bQ,
				p3: rV,
				sj: sj,
				sk: sk,
				cj: cj,
				sp: sp,
				lF: lF,
				sl: sl,
				sm: sm
			}).aB || 0 < sS.length && 0 < sS[0].aB) sS.unshift(sw);
		else {
			for (a2 = 1; a2 < sS.length; a2++)
				if (0 < sS[a2].aB) return void sS.splice(a2, 0, sw);
			sS.push(sw)
		}
	}

	function t1(id, gZ) {
		for (var tD = 0, bI = sS.length, a2 = 0; a2 < bI; a2++)
			if (sS[a2].id === id && gZ <= ++tD) return void sS.splice(a2, 1)
	}

	function sh(mv, p4, cK) {
		return "rgb(" + mv + "," + p4 + "," + cK + ")"
	}

	function t6(id, tK) {
		for (var bI = sS.length, a2 = 0; a2 < bI; a2++) sS[a2].id === id && tK-- <= 0 && (sS.splice(a2, 1), a2--, bI--)
	}

	function sz(id, player) {
		for (var tL = !1, a2 = sS.length - 1; 0 <= a2; a2--) sS[a2].id !== id || player !== bN && sS[a2].player !== player || (sS.splice(a2, 1), tL = !0);
		return tL
	}

	function tP(aF) {
		return 1 === aF ? "" : "s"
	}

	function tS(j, aS, aU) {
		aS && (j += g6.h9(aS)), aU && (j += " (" + fo.tT(100 * aS / aU, 1) + ")"), sg(340, j, 6, 0, sh(215, 245, 255), d1.i6, -1, !1)
	}

	function ta(player, tb) {
		return (fc || di <= player || tb || h6.h7.tc ? hA : td)[player]
	}
	this.c6 = function() {
		sW = o ? 7 : 12, sV = {
			mP: [sX = 0, 0, 0],
			sZ: [0, 0, 0],
			hS: [220, 180, 180],
			sa: [0, 0, 0],
			fA: [0, 0, 0],
			sb: [" were erased.", " left the game.", " surrendered."],
			sc: [" was erased by ", " left the game.", " surrendered."]
		}, sS = [], this.resize(), hW && this.n4(0, 18), tS("Map: " + an.fY.lP[an.lQ].name), tS("Dimension: " + (an.ao - 2) + "x" + (an.ap - 2)), tS("Overall Pixels: ", pm.tU), pm.tU !== pm.tV && tS("Land: ", pm.tV, pm.tU), 0 < pm.tW && tS(
			"Water: ", pm.tW, pm.tU), 0 < pm.tX && tS("Mountains: ", pm.tX, pm.tU), 10 === fa && sg(120, "Full sending against human players is disabled.", 6, 0, sh(235, 255, 120), d1.i6, -1, !1), this.se()
	}, this.se = function() {
		var a2, bI;
		if (fW.fX)
			for (bI = fW.fY.sf.length, a2 = 0; a2 < bI; a2++) sg(400, fW.fY.sf[a2], 6, 0, sh(255, 255, 255), d1.i6, -1, !1)
	}, this.resize = function() {
		var si, a2;
		if (ee = (ee = Math.floor((o ? .031 : .0249) * cZ)) < 10 ? 10 : ee, this.ch = Math.floor(2 * ee / 3), this.ci = cc + this.ch + cd, p7 = kI, sT = Math.floor(ee / 5), 0 < sS.length)
			for (si = sS, sS = [], a2 = si.length - 1; 0 <= a2; a2--) sg(si[a2].aB, si[a2].j, si[a2].id, si[a2].player, si[a2].sj, si[a2].sk, si[a2].lF, si[a2].sl, si[a2].sm);
		this.sn()
	}, this.sn = function() {
		sY = document.createElement("canvas");
		var j = "Accept",
			i0 = (sU = ck.measureText(j, this.ci) + 5 * sT, sY.height = ee, sY.width = sU, sY.getContext("2d", {
				alpha: !0
			}));
		i0.font = this.ci, i0.textBaseline = cz, i0.textAlign = d0, i0.clearRect(0, 0, sU, ee), i0.fillStyle = d1.iN, i0.fillRect(0, 0, sU, ee), i0.fillStyle = d1.d2, i0.fillText(j, Math.floor(sU / 2), Math.floor(ee / 2))
	}, this.so = function() {
		var bI;
		return g8.oN ? g8.cj : 0 === (bI = sS.length) ? 0 : 1 === bI ? sS[0].sp : sq(sS[0].sp, sS[1].sp)
	}, this.sr = function() {
		var bI = sS.length;
		return g8.oN ? bI ? sq(g8.cj, sS[0].sp) : g8.cj : 0 === bI ? 0 : 1 === bI ? sS[0].sp : 2 === bI ? sq(sS[0].sp, sS[1].sp) : sq(sq(sS[0].sp, sS[1].sp), sS[2].sp)
	}, this.co = function(gs, gt) {
		for (var su, sv = cw(), a2 = sS.length - 1; 0 <= a2; a2--)
			if ((su = sv - (a2 + 1) * ee) <= gt && gt < su + ee) return 50 === sS[a2].id ? gs >= h0 - sU - p7 - sS[a2].cj && (h0 - sU - p7 <= gs ? cR.cC.jX(sS[a2].player) : gD.hX(sS[a2].player, 800, !1, 0), !0) : gs >= h0 - sS[a2].cj - p7 && (
				736 === sS[a2].id ? window.open("https://" + sS[a2].j, "_blank") : sS[a2].sl && (gD.hX(sS[a2].player, 800, !1, 0), 0 <= sS[a2].lF) && (su = sS[a2].lF, sS[a2].lF = sS[a2].player, sS[a2].player = su), !0);
		return !1
	}, this.nc = function(r, j, id, bQ, sj, sk, lF, sl, sm) {
		sg(r, j, id, bQ, sj, sk, lF, sl, sm)
	}, this.pR = function(id) {
		for (var a2 = sS.length - 1; 0 <= a2; a2--) sS[a2].id === id && (sS[a2].aB = 1)
	}, this.n4 = function(player, id) {
		0 === id ? (bF.bG[player < di ? 4 : 3]++, ck.eE(player, 0), sg(o ? 100 : 160, "You erased " + hA[player] + ".", 0, player, "rgb(10,220,10)", d1.i6, -1, !1)) : 1 === id ? (sz(50, bN), ck.eE(player, 1), sg(360, "You were erased by " + hA[
				player] + ".", 0, player, "rgb(255,40,40)", d1.i6, -1, !0), gD.hX(player, 2700, !1, 0)) : 2 === id ? (ck.eE(player, 2), sg(0, "Congratulations! You won the game.", 0, player, "rgb(10,255,255)", d1.i6, -1, !0), gD.hX(player, 2700,
				!1, 0)) : 3 === id ? (ck.eE(player, 2), sg(0, hA[player] + " won the game.", 0, player, d1.d2, d1.i6, -1, !0), gD.hX(player, 2700, !1, 0)) : 4 === id ? (nF--, nE--, this.t0(1, player, player)) : 5 === id ? 2 !== dk[player] && bK
			.rn(bB) && (t1(1, 5), fn.t2(player) ? sg(180, hA[player] + " broke the non-aggression pact.", 1, player, sh(255, 200, 180), d1.i6, -1, !0) : sg(180, hA[player] + " is attacking you!", 1, player, "rgb(255,70,10)", d1.i6, -1, !0)) :
			18 === id ? sg(255, "Choose your start position!", 18, 0, d1.d2, d1.i6, -1, !1) : 21 === id ? sg(220, "You surrendered!", id, 0, "rgb(255,40,40)", d1.i6, -1, !1) : 22 === id ? this.t0(2, player, player) : 59 === id && sg(0,
				"The game ended in a stalemate!", id, 0, d1.il, d1.i6, 0, !1)
	}, this.t3 = function(t4) {
		sg(200, "Error [" + t4 + "]", 94, 0, d1.d2, d1.iX, -1, !1)
	}, this.nC = function(n7) {
		if (bB === n7) wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter);
		ck.eE(n7, 2), sg(0, di < 100 ? hA[n7] + " won the game." : hA[n7] + " was immortalized!", 3, n7, d1.d2, d1.i6, -1, !0), sg(0, "Your Current Win Count is Now " + wins_counter, 3, n7, d1.d2, d1.i6, -1, !0), gD.hX(n7, 2700, !1, 0)
	}, this.ry = function(dT) {
		var j, t5 = "(" + jr.dA(dT >> 2) + ", " + jr.dC(dT >> 2) + ")",
			sl = !1,
			player = 0;
		bK.bL(dT) ? bK.bV(dT) ? t5 = "Unclaimed Land " + t5 : (player = bK.bU(dT), j = "Player: " + hA[player], t5 = (j += "   Balance: " + g6.h9(bC[player])) + ("   Territory: " + g6.h9(bj[player])) + ("   Coords: " + t5), sl = !0) : t5 = bK.ro(
			dT) ? "Mountains " + t5 : "Water " + t5, aA.cm = !0, t6(55, 0), sg(220, t5, 55, player, d1.d2, d1.i6, -1, sl)
	}, this.s0 = function(t7) {
		var cP = e2.g0,
			player = cP.t8[t7],
			cP = "Ship Owner: " + hA[player] + "   Strength: " + g6.h9(cP.t9[t7]);
		aA.cm = !0, t6(55, 0), sg(220, cP, 55, player, d1.d2, d1.i6, -1, !0)
	}, this.jG = function(tA, tB, jH) {
		tA === bB ? sg(175, " Message to " + hA[tB] + ": ", 1001, tB, sh(200, 255, 210), d1.i6, -1, !0, jH) : this.tC(tA, jH)
	}, this.tC = function(tA, jH) {
		t6(1e3, 2), sg(175, hA[tA] + ": ", 1e3, tA, d1.d2, "rgba(5,60,25,0.9)", -1, !0, jH)
	}, this.nB = function(n8) {
		var t4;
		n8 ? (t4 = "Humanity triumphs! The undead have been beaten back.", ck.nR("The Resistance", 2, 1, 12), sg(0, t4, 40, 0, "rgb(10,220,10)", d1.i6, -1, !1)) : (t4 = "Mankind's era ends, overrun by the relentless tide of the undead.", ck.nR(
			"The Virus", 2, 0, 16), sg(0, t4, 41, 0, "rgb(200,80,80)", d1.i6, -1, !1)), gD.hg(2700)
	}, this.mQ = function(mP) {
		sg(300, mP[0].name + " [" + n9.mW(mP[0].mT) + "] vs " + mP[1].name + " [" + n9.mW(mP[1].mT) + "]", 65, 0, d1.h4, "rgba(100,255,255,0.75)", -1, !1)
	}, this.tE = function(t4) {
		sg(200, t4, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.tF = function() {
		sg(0, "Agreeing to peace concludes the game in a stalemate!", 247, 0, d1.ik, d1.i6, -1, !1)
	}, this.mY = function(mP, mV, mX, tG) {
		1 === fq.tH() && (sg(0, mP[0].name + ": " + n9.mW(mP[0].mT) + " -> " + mV, 66, 0, d1.d2, tG[0], -1, !1), sg(0, mP[1].name + ": " + n9.mW(mP[1].mT) + " -> " + mX, 66, 1, d1.d2, tG[1], -1, !1))
	}, this.jY = function(player, id) {
		0 === id ? sz(50, player) ? (sg(128, "You signed a non-aggression pact with " + hA[player] + ".", 52, player, sh(180, 255, 180), d1.i6, -1, !0), fn.kC(player, 2, 255)) : sg(384, "You asked " + hA[player] +
			" to sign a non-aggression pact.", 51, player, sh(210, 210, 255), d1.i6, -1, !0) : sz(51, player) ? (sg(128, hA[player] + " accepted the non-aggression pact.", 52, player, d1.d2, "rgba(60,120,10,0.9)", -1, !0), fn.kC(player, 2,
			255)) : (sg(384, hA[player] + " requested a non-aggression pact.", 50, player, d1.d2, "rgba(90,90,90,0.9)", -1, !0), fn.kC(player, 2, 96))
	}, this.jc = function(mP, target) {
		var j = "You ",
			color = function(mP) {
				var a2;
				for (a2 = mP.length - 1; 0 <= a2; a2--)
					if (2 * bj[mP[a2]] > bj[bB]) return;
				return 1
			}(mP) ? (j += "ordered ", sh(255, 235, 210)) : (j += "asked ", sh(210, 255, 210));
		1 < mP.length ? sg(230, j + mP.length + " players to attack " + hA[target] + ".", 66, target, color, d1.i6, -1, !0) : sg(230, j + hA[mP[0]] + " to attack " + hA[target] + ".", 66, mP[0], color, d1.i6, target, !0)
	}, this.tJ = function(player, target) {
		sg(230, hA[player] + " suggested you attack " + hA[target] + ".", 66, player, d1.d2, "rgba(75,65,5,0.9)", target, !0)
	}, this.n3 = function(id, player) {
		sz(id, player)
	}, this.j0 = function() {
		var cb;
		100 <= bC[bB] || (-1 === (cb = function(id) {
			for (var a2 = sS.length - 1; 0 <= a2; a2--)
				if (sS[a2].id === id) return a2;
			return -1
		}(143)) ? sg(80, "Your balance is too low!", 143, 0, d1.d2, d1.i6, -1, !1) : sS[cb].aB = 80)
	}, this.jT = function(tN, tO, player) {
		2 !== dk[bB] && (sg(200, "You exported " + g6.h9(tN) + " resource" + tP(tN) + " to " + hA[player] + ".", 30, player, "rgb(190,255,190)", d1.i6, -1, !0), tO) && sg(30, "A tax of " + g6.h9(tO) + " unit" + tP(tO) + " was deducted.", 30, 0,
			d1.d2, d1.i6, -1, !1)
	}, this.tQ = function(tN, player) {
		var r, tR;
		2 !== dk[bB] && (tR = 2 === dk[player] || di <= player, sg((r = 200 - 20 * sS.length) < 80 ? 80 : r, (tR ? "A bot" : hA[player]) + " supported you with " + g6.h9(tN) + " resource" + tP(tN) + ".", 31, player, d1.h4, tR ?
			"rgba(205,205,205,0.9)" : "rgba(205,255,205,0.9)", -1, !0), t1(31, o ? 4 : 6))
	}, this.nG = function(tY) {
		for (var fA = aA.f9(), a2 = 2; 0 <= a2; a2--) 0 < sV.sa[a2] && (tY || sV.fA[a2] < fA - 220) && this.tZ(a2)
	}, this.tZ = function(id) {
		var j, bI = sV.sa[id],
			player = sV.mP[id];
		sV.sa[id] = 0, 1 === bI ? (j = ta(player, 0 === id) + sV.sc[id], 0 === id && (j += ta(sV.sZ[id], !0) + "."), t6(7, 2), sg(sV.hS[id], j, 7, sV.sZ[id], d1.d2, d1.i6, -1, !0)) : 2 <= bI && (j = ta(player, 0 === id) + " and " + (bI - 1) +
			" other player" + tP(bI - 1) + sV.sb[id], t6(7, 2), sg(sV.hS[id], j, 7, player, d1.d2, d1.i6, -1, !1))
	}, this.t0 = function(id, lE, lF) {
		var fA = aA.f9(),
			bI = sV.sa[id] + 1;
		sV.sa[id]++, sV.mP[id] = lE, sV.sZ[id] = lF, 1 === bI && (sV.fA[id] = fA), (1 === bI && (nF < 32 || 2 === gL) || 1 < bI && (sV.fA[id] < fA - 140 || 2 === gL)) && this.tZ(id)
	}, this.eu = function() {
		for (var dI = (dI = sS.length - sW) <= 1 ? 1 : dI * dI, a2 = sS.length - 1; 0 <= a2; a2--) 0 < sS[a2].aB && (sS[a2].aB -= dI, sS[a2].aB <= 0) && (aA.cm = !0, sS.splice(a2, 1));
		! function() {
			var tK, a2;
			if (128 !== sX && !(++sX < 128))
				for (tK = 5, a2 = fD - 1; 0 <= a2; a2--) 1 === dk[fE[a2]] && 0 < tK-- && sg(240, hA[fE[a2]] + " joined the game.", 1, fE[a2], d1.h4, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.nG(!1)
	}, this.cx = function() {
		for (var lc, gt = cw(), a2 = sS.length - 1; 0 <= a2; a2--) lc = gt - (a2 + 1) * ee, 50 === sS[a2].id ? (cy.drawImage(sS[a2].p3, h0 - sS[a2].cj - sU - p7, lc), cy.drawImage(sY, h0 - sU - p7, lc)) : cy.drawImage(sS[a2].p3, h0 - sS[a2].cj -
			p7, lc)
	}
}

function tf() {
	this.cj = 0, this.ee = 0, this.mL = 0, this.tg = 0, this.th = 0, this.ch = 0, this.cb = -1, this.s8 = ["Accept Cookies", "More Information", "Decline"], this.colors = ["rgba(0,255,0,0.4)", "rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"], this.oN = !1,
		this.c6 = function() {
			this.resize(), this.oN = d < 5 && !b && 0 === f.y()
		}, this.resize = function() {
			this.cj = Math.floor(2.8 * Math.floor((o ? .09 : .062) * cZ)), this.ee = Math.floor(+this.cj), this.mL = Math.floor(.06 * this.cj), this.mM = this.cj - 2 * this.mL, this.tg = this.mL, this.th = (this.ee - (this.s8.length + 1) * this.tg) /
				this.s8.length, this.ch = Math.floor(.3 * this.th)
		}, this.co = function(cp, cq) {
			return !!this.oN && -1 !== (cp = this.tj(cp, cq)) && (0 === cp ? (f.tk(2), this.oN = !1) : 1 === cp ? oY.c6(qD.tl, !0) : 2 === cp && (f.tk(1), this.oN = !1), aA.cm = !0)
		}, this.nu = function(cp, cq) {
			var r;
			return !!this.oN && (r = this.cb, this.cb = this.tj(cp, cq), r !== this.cb && (aA.cm = !0), -1 !== this.cb)
		}, this.tj = function(cp, cq) {
			return cp -= cr, cq -= Math.floor(cs - this.ee - cr), cp < 0 || cq < 0 || cp >= this.cj || cq >= this.ee ? -1 : (cp = Math.floor((cq - .5 * this.tg) / ((this.ee - this.tg) / this.s8.length))) < 0 ? 0 : cp >= this.s8.length ? this.s8
				.length - 1 : cp
		}, this.cx = function() {
			this.oN && this.tm()
		}, this.tm = function() {
			var gs = cr,
				gt = Math.floor(cs - this.ee - cr);
			cy.setTransform(1, 0, 0, 1, gs, gt), cy.fillStyle = d1.i6, cy.fillRect(0, 0, this.cj, this.ee), cy.textBaseline = cz, cy.textAlign = d0, cy.strokeStyle = d1.d2, cy.font = cc + this.ch + cd, cy.strokeRect(0, 0, this.cj, this.ee);
			for (var a2 = this.s8.length - 1; 0 <= a2; a2--) cy.setTransform(1, 0, 0, 1, gs + this.mL, gt + this.tg + a2 * (this.tg + this.th)), cy.fillStyle = this.colors[a2], cy.fillRect(0, 0, this.mM, this.th), this.cb === a2 && (cy.fillStyle = d1
				.iB, cy.fillRect(0, 0, this.mM, this.th)), cy.fillStyle = d1.d2, cy.fillText(this.s8[a2], this.mM / 2, .54 * this.th), cy.strokeRect(0, 0, this.mM, this.th);
			cy.setTransform(1, 0, 0, 1, 0, 0)
		}
}

function qK() {
	var tn, to, tp, cj, ee, font;

	function tt(tu) {
		return tu < 10 ? "0" + tu : String(tu)
	}
	this.c6 = function() {
		void 0 === cj && this.resize(), this.setTime()
	}, this.resize = function() {
		cj = Math.floor((o ? .53 : .36) * cZ), ee = Math.floor(.065 * cj), font = cc + Math.floor(.9 * ee) + cd, tp--, this.setTime()
	}, this.eu = function() {
		this.setTime() && (aA.cm = !0)
	}, this.setTime = function() {
		var r = new Date,
			tr = r.getUTCMinutes(),
			r = r.getUTCSeconds();
		return to = 3600 - 60 * tr - r, to %= 900, tn = "Next Contest: " + tt(Math.floor(to / 60)) + ":" + tt(to % 60), tp !== (tp = 60 * tr + r) && (cj = ck.measureText(tn, font), cj += Math.floor(.4 * ee), !0)
	}, this.cx = function() {
		cy.lineWidth = 1 + Math.floor(ee / 15), 7 === aH.ob() && q7.tv() + 2 * cr > .5 * (cs - cj) ? cy.translate(h0 - ee, Math.floor(q7.tv() + 2 * cr + cj)) : cy.translate(h0 - ee, Math.floor(.5 * (cs + cj))), cy.rotate(-Math.PI / 2), cy
			.fillStyle = d1.d2, cy.fillRect(0, 0, cj, ee), cy.strokeStyle = d1.h4, cy.strokeRect(0, 0, cj, ee + 10), cy.fillStyle = d1.h4, cy.font = font, cy.textBaseline = cz, cy.textAlign = d0, cy.fillText(tn, Math.floor(cj / 2), Math.floor(
				.59 * ee)), cy.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function tw() {
	this.tx = 10, this.ty = 50, this.tz = 50, this.u0 = 8, this.u1 = this.ty + this.tz, this.a4 = this.ty + this.tz + this.u0, this.cj = 72, this.u2 = 0, this.u3 = 0, this.rV = new Array(this.a4), this.u4 = 8, this.u5 = new Array(this.ty + this.tz),
		this.u6 = new Array(this.ty + this.tz), this.gz = 0, this.h1 = 0, this.zoom = 1, this.u7 = .2, this.rm = 0, this.a5 = null, this.u8 = null, this.oN = !1, this.c6 = function() {
			var a2, u9, uA;
			for (this.a5 = new Array(this.a4), this.u8 = new Array(this.a4), u9 = cf.rW("emojis"), this.uB(), a2 = this.rm = 0; a2 < this.ty; a2++) this.uC(a2, a2, u9);
			for (uA = cf.rW("flags"), a2 = 0; a2 < this.tz; a2++) this.uC(a2, this.ty + a2, uA);
			this.uD(), this.rV[26] = this.uE(25, 2), this.uF()
		}, this.uC = function(a2, eO, fA) {
			this.a5[eO] = !1, this.u8[eO] = 0;
			var p3 = document.createElement("canvas"),
				i0 = (p3.width = this.cj, p3.height = this.cj, p3.getContext("2d", {
					alpha: !0
				}));
			i0.clearRect(0, 0, this.cj, this.cj), 23 === eO ? i0.drawImage(mD.rR()[4].p3[1], 0, 0) : 36 === eO ? i0.drawImage(mD.rR()[0].p3[2], 0, 0) : 49 === eO ? i0.drawImage(mD.rR()[2].p3[1], 0, 0) : i0.drawImage(fA, this.cj * a2 % (a2 === eO ?
				this.tx * this.cj : 4e3), a2 === eO ? b7(a2, this.tx) * this.cj : 0, this.cj, this.cj, 0, 0, this.cj, this.cj), this.rV[eO] = p3
		}, this.uD = function() {
			this.rV[this.a4 - 5] = this.rV[26], this.rV[this.a4 - 4] = this.uE(this.a4 - 5, 2), this.rV[this.a4 - 1] = this.uE(this.a4 - 5, 1), this.rV[this.a4 - 8] = this.uE(this.a4 - 4, 1), this.rV[this.a4 - 3] = this.rV[39], this.rV[this.a4 - 2] =
				this.uE(this.a4 - 3, 1), this.rV[this.a4 - 7] = this.uE(this.a4 - 2, 1), this.rV[this.a4 - 6] = this.uE(this.a4 - 7, 1)
		}, this.uE = function(a2, uG) {
			var p3 = document.createElement("canvas"),
				i0 = (p3.width = this.cj, p3.height = this.cj, p3.getContext("2d", {
					alpha: !0
				}));
			return i0.clearRect(0, 0, this.cj, this.cj), i0.rotate(uG * Math.PI / 2), i0.drawImage(this.rV[a2], 1 === uG ? 0 : -this.cj, -this.cj), p3
		}, this.uF = function() {
			var a2, aF, uH = s().split("");
			if (2 * uH.length !== this.a4) this.rm = 0;
			else {
				for (a2 = 0; a2 < this.a4; a2 += 2) aF = parseInt(uH[Math.floor(a2 / 2)]), this.a5[a2] = aF % 2 == 1, this.a5[a2 + 1] = 1 < aF;
				this.uI()
			}
		}, this.uI = function() {
			for (var a2 = this.rm = 0; a2 < this.a4; a2++) this.a5[a2] && (this.u8[this.rm++] = a2)
		}, this.s3 = function() {
			8 === this.rm && this.u8[0] === this.u1 && this.uI()
		}, this.uJ = function() {
			var a2;
			for (this.rm = this.u0, a2 = 0; a2 < this.u0; a2++) this.u8[a2] = this.u1 + a2
		}, this.uB = function() {
			this.u2 = Math.floor((o ? .075 : .0468) * cZ), this.zoom = this.u2 / this.cj, this.u3 = (1 + this.u7) * this.u2
		}, this.show = function(cp, cq) {
			var a2, uL, uK, mL, gx, gy;
			if (this.rm < 1) this.oN = !1;
			else {
				for (uK = (uK = Math.floor(h0 / this.u3)) < 3 ? 3 : uK > this.u4 ? this.u4 : uK, uL = this.rm > uK ? uK : this.rm, uK = 1 + b7(this.rm - 1, uL), mL = Math.floor(uL * this.u3), gx = Math.floor(cp - mL / 2), gx = (gx = h0 < gx + mL ?
						h0 - mL : gx) < 0 ? 0 : gx, gy = Math.floor(cq - this.u3 / 2), cp = Math.floor(uK * this.u3), gy = (gy = cs < gy + cp ? cs - cp : gy) < 0 ? 0 : gy, this.gz = gx + mL, this.h1 = gy + cp, a2 = 0; a2 < this.rm; a2++) this.u5[
					a2] = Math.floor(gx + a2 % uL * this.u3), this.u6[a2] = Math.floor(gy + b7(a2, uL) * this.u3);
				this.oN = !0
			}
		}, this.co = function(cp, cq, player) {
			return !!this.oN && (this.oN = !1, this.s2(cp, cq) && this.uN(cp, cq, player) && this.oN || (this.s3(), mD.kP()), !0)
		}, this.s2 = function(cp, cq) {
			return !(cp < this.u5[0] || cq < this.u6[0] || cp >= this.gz || cq >= this.h1)
		}, this.uN = function(cp, cq, player) {
			for (var a2 = this.rm - 1; 0 <= a2; a2--)
				if (cp >= this.u5[a2] && cq >= this.u6[a2] && cp <= this.u5[a2] + this.u3 && cq <= this.u6[a2] + this.u3) return 39 === this.u8[a2] ? (this.uJ(), this.show(cp, cq)) : (player === bB ? cR.cS.jG(this.u8[a2]) : cR.cC.jV(this.u8[a2],
					player), this.uI()), !0;
			return !1
		}, this.uO = function(a2) {
			return a2 < 16 || 40 <= a2 && a2 < 47
		}, this.uP = function(a2) {
			return a2 >= this.ty && a2 < this.ty + this.tz
		}, this.cx = function() {
			cy.imageSmoothingEnabled = !0;
			for (var lp = this.u7 * this.u2 / 2, a2 = this.rm - 1; 0 <= a2; a2--) cy.setTransform(this.zoom, 0, 0, this.zoom, this.u5[a2] + lp, this.u6[a2] + lp), cy.drawImage(this.rV[this.u8[a2]], 0, 0);
			cy.imageSmoothingEnabled = !1, cy.setTransform(1, 0, 0, 1, 0, 0)
		}, this.uQ = function(gs, gt, jH) {
			cy.imageSmoothingEnabled = !0, cy.setTransform(this.zoom, 0, 0, this.zoom, gs, gt), cy.drawImage(this.rV[jH], 0, 0), cy.imageSmoothingEnabled = !1, cy.setTransform(1, 0, 0, 1, 0, 0)
		}
}
var kI, uW, cr, p8, oE, oF, ct, dq, dp, dr, vR, gW, xZ, hA, td, dj, ei, el, eh, ek, bj, lt, bC, bJ, bb, bc, bf, dk, fE, fD, nt, cy, a7Z, a7a, a7b, p, q, ub, cZ, h0, cs, kS, a7c, b, c, e, d, o, nm, nl, hn, hx, a3, bF, mE, a10, aA, fB, g9, cu, a1B, oY,
	zb, a7d, a7e, cz = "middle",
	uR = "bottom",
	d0 = "center",
	sy = "left",
	uS = "right",
	cc = "bold ",
	uT = "italic ",
	uU = "normal ",
	cd = "px " + settings.fontName,
	uV = [cc, uT + cc, cc],
	uX = ["wss://", "/s50/", "/s51/", "/s52/"];

function uY() {
	uZ(), (ct = new ua).c6()
}

function uZ() {
	p8 = .0022 * (1 + .5 * o) * cZ, cr = (cr = Math.floor((o ? .02 : .01152) * cZ)) < 2 ? 2 : cr, kI = (kI = Math.floor((o ? .0114 : .01296) * cZ)) < 2 ? 2 : kI, uW = (uW = Math.floor(.005 * ub)) < 1 ? 1 : uW
}

function uc(i0, cj, ee) {
	i0.fillStyle = d1.d2, i0.fillRect(0, 0, cj, 1), i0.fillRect(0, ee - 1, cj, 1), i0.fillRect(0, 0, 1, ee), i0.fillRect(cj - 1, 0, 1, ee)
}

function qL() {
	var sS, ud, ci, ee, ue;

	function uk(a2) {
		var cj = sS[a2].p3.width,
			mL = (sS[a2].i0.clearRect(0, 0, cj, ee), sS[a2].i0.fillStyle = 0 !== sS[a2].id ? "rgba(33,33,120,0.83)" : sS[a2].eH === bN ? "rgba(88,88,88,0.83)" : sS[a2].eH < di ? "rgba(100,70,33,0.83)" : "rgba(33,100,80,0.83)", sS[a2].i0.fillRect(0,
				0, cj, ee), uc(sS[a2].i0, cj, ee), ud + 2 * ee < cj && (sS[a2].i0.fillRect(cj - ud - ee, 0, 1, ee), sS[a2].i0.fillText(hA[sS[a2].eH], Math.floor((cj - ud) / 2), Math.floor(.57 * ee))), 0 !== sS[a2].id ? 0 : ee);
		sS[a2].i0.fillText(g6.h9(sS[a2].eI), Math.floor(cj - ud / 2 - mL), Math.floor(.57 * ee)),
			function(a2, cj, mL) {
				sS[a2].i0.fillStyle = d1.i9;
				var up = Math.floor(ud * sS[a2].eI / sS[a2].uq);
				sS[a2].i0.fillRect(Math.floor(cj - ud - mL), ee - ue, up, ue)
			}(a2, cj, mL), 0 === sS[a2].id ? (un(a2, cj), function(a2, cj) {
				sS[a2].i0.strokeStyle = d1.iI, sS[a2].i0.fillRect(ee, 0, 1, ee);
				cj -= ee;
				sS[a2].i0.beginPath(), sS[a2].i0.moveTo(Math.floor(.3 * ee + cj), Math.floor(ee / 2)), sS[a2].i0.lineTo(Math.floor(ee - .3 * ee + 0 + cj), Math.floor(ee / 2)), sS[a2].i0.stroke(), sS[a2].i0.beginPath(), sS[a2].i0.moveTo(Math
					.floor(ee / 2 + cj), Math.floor(.3 * ee)), sS[a2].i0.lineTo(Math.floor(ee / 2 + cj), Math.floor(ee - .3 * ee + 0)), sS[a2].i0.stroke()
			}(a2, cj)) : un(a2, 2 * ee)
	}

	function un(a2, cj) {
		sS[a2].i0.strokeStyle = sS[a2].ur ? d1.iE : d1.iS, sS[a2].i0.fillStyle = d1.d2, sS[a2].i0.fillRect(cj - ee, 0, 1, ee);
		var us = Math.floor(ee / 12),
			us = (sS[a2].i0.lineWidth = us < 3 ? 3 : us, sS[a2].i0.lineCap = "round", .35);
		cj = ee + 1, sS[a2].i0.beginPath(), sS[a2].i0.moveTo(Math.floor(cj - us * ee + 0), Math.floor(us * ee)), sS[a2].i0.lineTo(Math.floor(cj - ee + us * ee), Math.floor(ee - us * ee + 0)), sS[a2].i0.stroke(), sS[a2].i0.beginPath(), sS[a2].i0
			.moveTo(Math.floor(cj - ee + us * ee), Math.floor(us * ee)), sS[a2].i0.lineTo(Math.floor(cj - us * ee + 0), Math.floor(ee - us * ee + 0)), sS[a2].i0.stroke()
	}

	function v7(bI) {
		for (var eI, a2 = bI - 1; 0 <= a2; a2--) eI = at.b1(bB, a2), sS[a2].eI !== eI && (sS[a2].eI = eI, sS[a2].uq = eI > sS[a2].uq ? eI : sS[a2].uq, sS[a2].ul = !0)
	}

	function uj(v9) {
		v9.p3 = document.createElement("canvas"), an.ky.font = ci;
		var cj = ud;
		v9.eH < bN && 0 === v9.id && (cj += Math.floor(an.ky.measureText(hA[v9.eH] + "000").width)), cj += ee, 0 === v9.id && (cj += ee), v9.p3.width = cj, v9.p3.height = ee, v9.i0 = v9.p3.getContext("2d", {
			alpha: !0
		}), v9.i0.font = ci, v9.i0.textBaseline = cz, v9.i0.textAlign = d0
	}

	function v3(a2) {
		return g5.vB() ? h0 - sS[a2].p3.width - kI : g5.gs
	}

	function v4(a2) {
		return Math.floor(2 * kI + (g5.vB() ? fo.ee + kI : 0) + g5.ee + a2 * (1.3 * ee))
	}
	this.c6 = function() {
		sS = [], this.resize()
	}, this.resize = function() {
		ci = fm.ci, ee = fm.ch + 5, ee = Math.floor(1.25 * ee), o && (ee = Math.floor(1.25 * ee)), ue = Math.floor(.15 * ee), an.ky.font = ci, ud = Math.floor(an.ky.measureText("02 000 000 0000").width);
		for (var a2 = sS.length - 1; 0 <= a2; a2--) uj(sS[a2]), uk(a2)
	}, this.gK = function() {
		for (var a2 = sS.length - 1; 0 <= a2; a2--) sS[a2].ul && (sS[a2].ul = !1, uk(a2))
	}, this.h9 = function(tK) {
		if (tK < 1e3) return tK < 0 ? "-" + this.h9(Math.abs(tK)) : tK.toString();
		for (var uu = Math.floor(Math.log(tK + .5) / Math.log(10)) + 1, uv = Math.floor((uu - 1) / 3), uw = tK.toString(), ux = uw.substring(uu - 3, uu), a2 = 1; a2 < uv; a2++) ux = uw.substring(uu - 3 * (a2 + 1), uu - 3 * a2) + " " + ux;
		return uw.substring(0, uu - 3 * uv) + " " + ux
	}, this.co = function(cp, gt) {
		if (2 !== gL && 0 !== dj[bB] && !c8 && bK.rn(bB))
			for (var uy, uz, v0, v1 = o ? ee : 0, v2 = o ? Math.floor(.15 * ee) : 0, a2 = sS.length - 1; 0 <= a2; a2--)
				if (uy = v3(a2), uz = v4(a2), v0 = sS[a2].p3.width, uz - v2 <= gt && gt <= uz + ee + v2) {
					if (uy - v1 <= cp && cp <= uy + ee + v1) return sS[a2].ur || (sS[a2].ul = !0, sS[a2].ur = !0, 0 === sS[a2].id && cR.cS.jE(sS[a2].eH)), !0;
					if (0 === sS[a2].id && uy + v0 - ee - v1 <= cp && cp <= uy + v0 + v1) return cR.cS.cT(cU.cV(), sS[a2].eH), !0
				} return !1
	}, this.eu = function() {
		var bI;
		2 !== gL && 0 !== dj[bB] && !c8 && bK.rn(bB) && (function(bI) {
			if (sS.length !== bI) return 1;
			for (var a2 = bI - 1; 0 <= a2; a2--)
				if (sS[a2].id !== at.av(bB, a2) || sS[a2].eH !== at.b0(bB, a2)) return 1;
			return
		}(bI = at.au(bB)) && function(bI) {
			var a2, id, eH, cK, eI, si = [];
			loop: for (a2 = 0; a2 < bI; a2++) {
				for (id = at.av(bB, a2), eH = at.b0(bB, a2), cK = 0; cK < sS.length; cK++)
					if (sS[cK].id === id && sS[cK].eH === eH) {
						si.push(sS.splice(cK, 1)[0]);
						continue loop
					} eI = at.b1(bB, a2), uj(eI = {
					eH: eH,
					eI: eI,
					uq: eI,
					id: id,
					ul: !0,
					ur: !1,
					p3: null,
					i0: null
				}), si.push(eI)
			}
			sS = si
		}(bI), v7(bI))
	}, this.vA = function(bQ) {
		for (var bI = Math.min(sS.length, at.au(bB)), a2 = 0; a2 < bI; a2++)
			if (sS[a2].eH === bQ) return void(sS = [])
	}, this.cx = function() {
		if (0 !== dj[bB] && bK.rn(bB) && !c8)
			for (var a2 = sS.length - 1; 0 <= a2; a2--) cy.drawImage(sS[a2].p3, v3(a2), v4(a2))
	}
}

function qM() {
	var sS, fL, vC, vD, ee, ci, ch, vE, tn, vF, vG, vH, p3, i0, hN, vI;

	function vP() {
		cy.drawImage(p3, kI + (cH ? kI + g9.vQ() : 0), vR + 2 * kI)
	}

	function vJ() {
		p3.width = sS[0].width + vG, p3.height = ee + vG, (i0 = p3.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, sS[0].width + vG, ee + vG), i0.translate(Math.floor(vG / 2), Math.floor(vG / 2)), i0.lineWidth = vG, i0.fillStyle = 1 === sS[0].vO ? d1.iC : d1.i6, vS(), i0.fill(), i0.strokeStyle = 1 === sS[0].vO ? d1.h4 : d1.d2,
		vS(), i0.stroke(), i0.textAlign = d0, i0.textBaseline = cz, i0.fillStyle = 1 === sS[0].vO ? d1.h4 : d1.d2, i0.font = ci[0], i0.fillText(tn[sS[0].vN], Math.floor(sS[0].width / 2), Math.floor(.72 * vE[0] * ee)), i0.font = ci[1], i0.fillText(sS[
				0].j, Math.floor(sS[0].width / 2), Math.floor((vE[0] + .48 * vE[1]) * ee))
	}

	function vS() {
		i0.beginPath(), i0.moveTo(vH, 0), i0.lineTo(sS[0].width - vH, 0), i0.lineTo(sS[0].width, vH), i0.lineTo(sS[0].width, ee - vH), i0.lineTo(sS[0].width - vH, ee), i0.lineTo(vH, ee), i0.lineTo(0, ee - vH), i0.lineTo(0, vH), i0.closePath()
	}
	this.c6 = function() {
		fL = 4, vC = vD = hN = 0, sS = [], ci = new Array(2), ch = new Array(2), vE = new Array(2), tn = ["YOU ERASED", "YOU WERE ERASED BY", "THE GAME WAS WON BY", "MAP:"], vE[0] = .3, vE[1] = .7, vF = new Array(4), p3 = document.createElement(
			"canvas"), vI = aA.aB + 2e3, this.resize()
	}, this.resize = function() {
		var a2, cj;
		for (ee = Math.floor((o ? .0725 : .058) * cZ), ch[0] = Math.floor(.85 * vE[0] * ee), ch[1] = Math.floor(.85 * vE[1] * ee), ci[0] = cc + ch[0] + cd, ci[1] = cc + ch[1] + cd, a2 = vF.length - 1; 0 <= a2; a2--) vF[a2] = this.measureText(tn[
			a2] + "000", ci[0]);
		if (vG = Math.floor(1 + .05 * ee), vH = Math.floor(.2 * ee), 0 < sS.length) {
			for (a2 = sS.length - 1; 0 <= a2; a2--) cj = this.measureText(sS[a2].j + "00", ci[1]), sS[a2].width = cj < vF[a2] ? vF[a2] : cj;
			vJ()
		}
	}, this.eu = function() {
		0 !== fL && (4 === fL ? aA.aB > vI && (fL = 0, 1 === gL) && ck.nR(an.fY.lP[an.lQ].name, 3, 1, 9) : (1 === fL ? (0 === vC && (vJ(), vC = 1e-4), 1 <= (vC += .002 * (aA.aB - hN)) && (vD = 0, fL = 2, vC = 1), aA.cm = !0) : 2 === fL ? ((vD +=
			(aA.aB - hN) / 1e3) > sS[0].hS || 1 < vD && 1 < sS.length) && (fL = 3) : 3 === fL && ((vC -= .002 * (aA.aB - hN)) <= 0 && (vC = 0, sS.shift(), fL = 0 < sS.length ? 1 : 0), aA.cm = !0), hN = aA.aB))
	}, this.measureText = function(j, ci) {
		return cy.font = ci, Math.floor(cy.measureText(j).width)
	}, this.eE = function(vM, a2) {
		this.nR(hA[vM], a2, 1, 0 === a2 ? 3 : 7)
	}, this.nR = function(j, vN, vO, hS) {
		var cj = (cj = this.measureText(j + "00", ci[1])) < vF[vN] ? vF[vN] : cj;
		sS.push({
			j: j,
			width: cj,
			vN: vN,
			vO: vO,
			hS: hS
		}), 0 === fL && (vC = 0, fL = 1, hN = aA.aB)
	}, this.cx = function() {
		0 !== fL && 0 !== vC && (vC < 1 ? (cy.globalAlpha = vC, vP(), cy.globalAlpha = 1) : vP())
	}
}

function qy() {
	var ee, p3, i0, vT, vU, vV, vW, vX, ul, vY, vZ, va, vb, vc;

	function ce() {
		var cj = g8.cj,
			cP = (ul = !1, mF(i0, cj, ee), Math.floor(cj / 2));
		1 === vU ? (i0.fillStyle = d1.iK, i0.fillRect(cP, 0, cP, ee)) : -1 === vU && (i0.fillStyle = d1.iV, i0.fillRect(0, 0, cP, ee)), mG(i0, cj, ee, 2);
		var cP = (cP = Math.floor(.25 * ee)) < 2 ? 2 : cP,
			tU = (i0.fillStyle = d1.iD, Math.floor((ee - 4) * vV[1] / vW[1]));
		0 < tU && i0.fillRect(2, ee - 2 - tU, cP, tU), 0 < (tU = Math.floor((ee - 4) * vV[0] / vW[0])) && i0.fillRect(cj - 2 - cP, ee - 2 - tU, cP, tU);
		cP = (cP = Math.floor(ee / 8)) < 2 ? 2 : cP;
		mI(i0, Math.floor(.4 * ee), 0, ee, cP, .5, !1), mI(i0, Math.floor(cj - 1.4 * ee), 0, ee, cP, .5, !0), i0.drawImage(vT, Math.floor((cj - vT.width) / 2), 3)
	}

	function ve() {
		ul = !0, vY = 140, vU = 0, vX = [], g8.oN = !1, fm.n3(247, 0), vV[0] = vV[1] = 0
	}

	function cw() {
		return cU.ss(fm.so()) ? cU.gt - ee - kI : gG.ss(fm.sr()) ? gG.cw() - ee - kI : q - ee - h6.st() * kI
	}
	this.oN = !1, this.cj = 0, this.c6 = function() {
		va = vb = 0, this.oN = !1, ul = vc = !1, vY = 140, vV = [vU = 0, 0], vW = [1, 1], vX = [], vZ = new Uint32Array(10), this.resize()
	}, this.resize = function() {
		ee = cU.ee, this.cj = 4 * ee, this.vd(), (p3 = document.createElement("canvas")).width = this.cj, p3.height = ee, i0 = p3.getContext("2d", {
			alpha: !0
		}), ce()
	}, this.gK = function() {
		ul && ce()
	}, this.vd = function() {
		var p9, vG, cP, tg = (tg = ee - 6) < 6 ? 6 : tg;
		void 0 !== vT && vT.width === tg || ((vT = document.createElement("canvas")).width = tg, vT.height = tg, (p9 = vT.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, tg, tg), vG = Math.floor(tg / 8), p9.lineWidth = vG = vG < 1 ? 1 : vG, p9.strokeStyle = d1.d2, cP = Math.floor(tg / 2), tg = Math.floor((tg - vG) / 2), p9.beginPath(), p9.arc(cP, cP, tg, 0, 2 * Math.PI), p9
			.moveTo(cP, cP - tg), p9.lineTo(cP, cP + tg), p9.moveTo(cP + Math.cos(.78 * Math.PI) * tg, cP + Math.cos(.28 * Math.PI) * tg), p9.lineTo(cP, cP), p9.lineTo(cP + Math.cos(.22 * Math.PI) * tg, cP + Math.cos(1.72 * Math.PI) * tg), p9
			.stroke())
	}, this.co = function(gs, gt) {
		var gy;
		return !(gs < p - this.cj - kI || gt < (gy = cw()) || gy + ee < gt || (c8 || cR.cS.jK(gs > p - kI - this.cj / 2 ? 1 : 0), 0))
	}, this.eu = function() {
		if (0 < vb) 0 === --vb && ve();
		else if (this.oN) 270 == --vY && 2 <= va && function() {
			var a2;
			for (a2 = fD - 1; 0 <= a2; a2--)
				if (bK.rn(fE[a2])) return;
			return 1
		}() && (ul = !0, vV[0] += vW[0]), 180 === vY && 3 * vV[0] < vW[0] ? ve() : vV[0] >= vW[0] ? vc ? fr.my.n1() : fr.my.n6(-1) : vV[1] >= vW[1] ? vb = 4 : vY <= 0 && ve();
		else if (function() {
				var a2;
				for (a2 = 9; 0 <= a2; a2--) 12 < Math.abs(vZ[a2] - bj[gW[a2]]) && (vY = 140), vZ[a2] = bj[gW[a2]];
				if (--vY <= 0) return 1;
				return
			}()) {
			(vc = vh()) && fm.tF(), this.oN = !0, vY = 360;
			var a2, r = 0;
			for (a2 = fD - 1; 0 <= a2; a2--) bK.rn(fE[a2]) && (r += bj[fE[a2]]);
			vW[0] = sq(b7(3 * r, 5), 1), cH && 9 !== fa && (vW[0] = vj(sq(b7(r * (100 - b7(100 * g9.nP(), pW)), 100), 1), vW[0])), vW[1] = sq(r - vW[0], 1), va++
		}
	}, this.nD = function() {
		this.oN && vV[0] < vW[0] && ve()
	}, this.kD = function(player, vl) {
		var a2, r;
		if (this.oN) {
			for (a2 = vX.length - 1; 0 <= a2; a2--)
				if (vX[a2] === player) return;
			vX.push(player), ul = !0, r = fc ? vW[0] : bj[player], vl ? vV[0] += r : vV[1] += r, player === bB && (vU = vl ? 1 : -1)
		}
	}, this.cx = function() {
		var gt;
		this.oN && (gt = cw(), cy.drawImage(p3, p - this.cj - kI, gt))
	}
}

function qN() {
	var cj, gs, vm, p3, i0, oN, dn, vn, ci, ul, vo = 11 / 12;

	function vq() {
		var up = Math.floor(dn * (cj - 2 * vm)),
			vt = 1 + Math.floor(.0625 * cU.ee),
			vu = 1 + Math.floor(.3 * cU.ee),
			tg = Math.floor(.55 * cU.ee);
		i0.clearRect(0, 0, cj, cU.ee), i0.fillStyle = d1.i5, i0.fillRect(0, 0, vm, cU.ee), i0.fillRect(vm + up, 0, cj - vm - up, cU.ee), i0.fillStyle = dn < 1 / 3 ? "rgba(" + Math.floor(3 * dn * 130) + ",130,0,0.85)" : dn < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (dn - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (dn - 2 / 3) * 130) + ",0.85)", i0.fillRect(vm, 0, up, cU.ee), i0.fillStyle = d1.d2, i0.fillRect(0, 0, cj, 1), i0.fillRect(0, cU.ee - 1, cj, 1),
			i0.fillRect(0, 0, 1, cU.ee), i0.fillRect(vm, 0, 1, cU.ee), i0.fillRect(vm + up, 0, 1, cU.ee), i0.fillRect(cj - vm, 0, 1, cU.ee), i0.fillRect(cj - 1, 0, 1, cU.ee), i0.fillRect(Math.floor(.25 * cU.ee) + vu, Math.floor((cU.ee - vt) / 2), cU
				.ee - 2 * vu, vt), i0.fillRect(Math.floor(cj - 1.25 * cU.ee) + vu, Math.floor((cU.ee - vt) / 2), cU.ee - 2 * vu - vu % 2, vt), i0.fillRect(Math.floor(cj - 1.25 * cU.ee) + Math.floor((cU.ee - vt) / 2), vu, vt, cU.ee - 2 * vu - vu % 2),
			vn = cB.cC.dm(bB, cU.cV()), i0.fillText(g6.h9(vn) + " (" + fo.tT(100 * dn, 0) + ")", Math.floor(.5 * cj), tg)
	}

	function vy(cX) {
		return !(1 < cX && 1 === dn || (1 < cX && cX * dn - dn < 1 / 1024 ? cX = (dn + 1 / 1024) / dn : cX < 1 && dn - cX * dn < 1 / 1024 && (cX = (dn - 1 / 1024) / dn), dn = by.p2(dn * cX, 1 / 1024, 1), vq(), 0))
	}

	function vz(cp) {
		return dn !== (dn = by.p2((cp - gs - vm) / (cj - 2 * vm), 1 / 1024, 1)) && (vq(), !0)
	}
	this.gt = 0, this.oO = !1, this.c6 = function() {
		oN = !hW && !c8, ul = !1, dn = .5, vn = 0, this.oO = !1, this.resize()
	}, this.resize = function() {
		o && p < .8 * q ? (this.ee = Math.floor(.0536 * cZ), cj = p - 4 * kI - this.ee) : (cj = Math.floor((o ? .65 : .389) * cZ), cj += 12 - cj % 12, this.ee = Math.floor(cj / 12)), vm = Math.floor(3 * this.ee / 2), ci = cc + Math.floor(.5 *
			this.ee) + cd, (p3 = document.createElement("canvas")).width = cj, p3.height = this.ee, (i0 = p3.getContext("2d", {
			alpha: !0
		})).font = ci, i0.textBaseline = cz, cB.i0.textAlign(i0, 1), this.vp(), vq()
	}, this.vp = function() {
		gs = o && p < .8 * q ? this.ee + 3 * kI : Math.floor((h0 - cj) / 2), this.gt = cs - this.ee - h6.st() * kI
	}, this.gK = function() {
		ul && (ul = !1, vq())
	}, this.oN = function() {
		return !(!oN || c9.cA && gs < Math.floor(kI + 5.5 * this.ee))
	}, this.ss = function(cl) {
		return !!this.oN() && p - cl - kI < gs + cj
	}, this.cv = function() {
		oN = !c8
	}, this.ve = function() {
		oN = !1
	}, this.cV = function() {
		return by.p2(Math.floor(1024 * dn + .5) - 1, 0, 1023)
	}, this.oX = function(cp, cq) {
		return this.oN() && gs < cp && cp < gs + cj && cq > this.gt
	}, this.co = function(cp, cq) {
		return !!this.oN() && !!cU.oX(cp, cq) && (ha.hb = !1, function(s5, cp, cq) {
			if (function(cp, cq) {
					return gs < cp && cp < gs + vm && cq > cU.gt
				}(cp, cq)) return vy(vo);
			if (function(cp, cq) {
					return gs + cj - vm < cp && cp < gs + cj && cq > cU.gt
				}(cp, cq)) return vy(1 / vo);
			return s5.oO = !0, vz(cp)
		}(this, cp, cq) && (aA.cm = !0), !0)
	}, this.ok = function(hj) {
		0 !== gL && this.oN() && vy(hj) && (aA.cm = !0)
	}, this.nx = function(deltaY) {
		var hj;
		return !(0 === deltaY || !this.oN()) && vy(hj = 0 < deltaY ? (hj = 400 / (400 + deltaY)) < vo ? vo : hj : 1 / vo < (hj = (400 - deltaY) / 400) ? 1 / vo : hj)
	}, this.nu = function(cp, cq) {
		return !!this.oO && vz(cp)
	}, this.oS = function() {
		this.oO = !1
	}, this.eu = function() {
		this.oN() && vn !== cB.cC.dm(bB, this.cV()) && (ul = !0)
	}, this.cx = function() {
		this.oN() && cy.drawImage(p3, gs, this.gt)
	}
}

function rC() {
	var p3, i0, w0, font, w1 = 0,
		w2 = !1,
		w3 = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		w4 = 5;

	function tm() {
		if (w2) {
			var a2, bI = w3.length,
				tg = Math.floor(.5 * w0.ee),
				ee = bI * tg,
				gs = Math.floor(Math.floor(w0.gs) + .3 * w0.cj - .5),
				gt = Math.floor(Math.floor(w0.gt) - ee),
				cj = Math.floor(.4 * w0.cj + 2.5);
			for (cy.fillStyle = d1.i5, cy.fillRect(gs, gt, cj, ee), cy.fillStyle = d1.iP, cy.fillRect(gs, gt + w4 * tg, cj, tg), cy.fillStyle = d1.d2, cy.fillRect(gs, gt, 2, ee), cy.fillRect(gs, gt, cj, 2), cy.fillRect(gs + cj - 2, gt, 2, ee), a2 =
				1; a2 < bI; a2++) cy.fillRect(gs, gt + a2 * tg, cj, 2);
			for (cy.fillStyle = d1.d2, cB.i0.textAlign(cy, 1), cB.i0.textBaseline(cy, 1), cy.font = cB.i0.kR(.6 * tg, 0), gs += .5 * cj, a2 = 0; a2 < bI; a2++) cy.fillText(wH(a2), gs, gt + (a2 + .6) * tg)
		}
		cy.drawImage(p3, Math.floor(w0.gs), Math.floor(w0.gt))
	}

	function ce(s5) {
		var gs, gx, gy, tg;
		i0.clearRect(0, 0, Math.floor(w0.cj), Math.floor(w0.ee)), i0.fillStyle = d1.i5, i0.fillRect(0, 0, Math.floor(w0.cj), Math.floor(w0.ee)), hZ && (i0.fillStyle = d1.iP, i0.fillRect(0, 0, Math.floor(.3 * w0.cj), Math.floor(w0.ee))), i0
			.fillStyle = d1.d2, i0.fillText("Hide UI", .15 * w0.cj, .5 * w0.ee), i0.fillRect(Math.floor(.3 * w0.cj - .5), 0, 2, Math.floor(w0.ee)), gs = .5 * w0.cj, i0.fillText("Replay Speed", gs, .31 * w0.ee), i0.fillText(wH(w4), gs, .69 * w0.ee),
			i0.fillRect(Math.floor(.7 * w0.cj - .5), 0, 2, Math.floor(w0.ee)), s5.sD ? (gs = Math.floor(.02 * w0.cj), s5 = Math.floor(.025 * w0.cj), gx = Math.floor(.85 * w0.cj - gs - .5 * s5), gy = Math.floor(.25 * w0.ee), tg = Math.floor(w0.ee) -
				2 * gy, i0.fillRect(gx, gy, gs, tg), i0.fillRect(gx + gs + s5, gy, gs, tg)) : function() {
				var cj = Math.floor(.46 * w0.ee),
					ee = Math.floor(.23 * w0.ee),
					gs = Math.floor(.85 * w0.cj - .5 * cj + cj / 12),
					gt = Math.floor(.5 * w0.ee - ee);
				i0.beginPath(), i0.moveTo(gs, gt), i0.lineTo(gs + cj, gt + ee), i0.lineTo(gs, gt + (ee << 1)), i0.fill()
			}(), i0.fillRect(0, 0, Math.floor(w0.cj), 2), i0.fillRect(0, 0, 2, Math.floor(w0.ee)), i0.fillRect(0, Math.floor(w0.ee) - 2, Math.floor(w0.cj), 2), i0.fillRect(Math.floor(w0.cj - 2), 0, 2, Math.floor(w0.ee))
	}

	function wH(a2) {
		return 5 === a2 ? "Normal" : "" + w3[a2]
	}
	this.sD = !1, this.c6 = function() {
		c8 && (w4 = 5, this.sD = !1, w2 = !1, w0 = new kE([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.w5 = function() {
		return w3[w4]
	}, this.cw = function() {
		return w0.gt
	}, this.ss = function(cl) {
		return !!c8 && w0.gs + w0.cj > p - cl - kI
	}, this.resize = function() {
		c8 && (w0.resize(), w0.gt -= (h6.st() - 1) * kI, font = cB.i0.kR(.3 * w0.ee, 0), (p3 = document.createElement("canvas")).width = Math.floor(w0.cj), p3.height = Math.floor(w0.ee), (i0 = p3.getContext("2d", {
			alpha: !0
		})).font = font, cB.i0.textAlign(i0, 1), cB.i0.textBaseline(i0, 1), ce(this))
	}, this.oe = function(w6) {
		w6 !== hZ && (hZ = w6, g9.resize(), aA.cm = !0, c8) && (w1 = aA.aB + 2e3, ce(this))
	}, this.co = function(gs, gt) {
		if (!c8) return !1;
		if (gs < w0.gs || gt < w0.gt || gs > w0.gs + w0.cj) return w2 && function(s5, gs, gt) {
			var bI = w3.length,
				tg = Math.floor(.5 * w0.ee),
				ee = bI * tg,
				gx = Math.floor(Math.floor(w0.gs) + .3 * w0.cj - .5),
				ee = Math.floor(Math.floor(w0.gt) - ee),
				cj = Math.floor(.4 * w0.cj + 2.5);
			return w2 = !1, aA.cm = !0, gs < gx || gx + cj < gs || gt < ee || (w4 = w9(0, Math.floor((gt - ee) / tg), bI - 1), ce(s5)), !0
		}(this, gs, gt);
		if ((gs -= w0.gs) < .3 * w0.cj) w2 = !1, this.oe(!hZ);
		else {
			if (gs < .7 * w0.cj) return w2 = !w2, aA.cm = !0;
			this.oi(!1)
		}
		return !0
	}, this.oi = function(w8) {
		2 === gL ? (this.oe(!1), kO.show()) : (w2 = !1, this.sD = !this.sD, this.sD ? c9.cA ? c9.oh() : a7(1) : w8 || c9.sE(), aA.cm = !0, ce(this))
	}, this.oH = function(gs, gt) {
		return !!hZ && (c9.co(gs, gt) || (c8 ? ((aA.aB > w1 || !this.co(gs, gt)) && ha.co(gs, gt), aA.cm = !0, w1 = aA.aB + 2e3) : ha.co(gs, gt)), !0)
	}, this.eu = function() {
		c8 && hZ && aA.aB > w1 - 1e3 && aA.aB < w1 && (aA.cm = !0)
	}, this.nH = function() {
		c8 && (this.sD = !1, aA.cm = !0, ce(this))
	}, this.cx = function() {
		if (c8) {
			if (hZ) {
				if (aA.aB > w1) return;
				if (aA.aB > w1 - 1e3) return cy.globalAlpha = w9(0, (1e3 - (aA.aB - (w1 - 1e3))) / 1e3, 1), tm(), void(cy.globalAlpha = 1)
			}
			tm()
		}
	}
}

function rB() {
	var w0, kL, p6, tg;
	this.oN = !1, this.kN = !1, this.sP = function() {
		return !fW.fX && an.lQ !== an.wI() && (c8 || 2 === gL)
	}, this.show = function() {
		this.oN = !0, w0 || (w0 = new kE([.55, .35], [.5, .5]), (kL = new kK).c6()), this.resize(), 0 === gL ? kL.kT("") : (gB.js.wM.length || (gB.js.wM = gB.wP.mq()), kL.kT(gB.wQ(gB.js.wM))), kL.show(), aA.cm = !0, oZ.cv(!1)
	}, this.kP = function() {
		this.oN && (this.oN = !1, this.kN = !1, kL.kP(), aA.cm = !0, 0 === gL && qC.kX(), 0 === aH.ob()) && oZ.cv(!0)
	}, this.resize = function() {
		this.oN && (w0.resize(), p6 = .03 * w0.ee, tg = .2 * w0.ee, kL.resize(w0.gs + p6, w0.gt + tg + p6, w0.cj - 2 * p6, w0.ee - 2 * (tg + p6)))
	}, this.co = function(gs, gt) {
		return !!this.oN && (gs < w0.gs || gt < w0.gt || gs > w0.gs + w0.cj || gt > w0.gt + w0.ee ? 2 !== c9.co(gs, gt) && this.kP() : gt < w0.gt + w0.ee - tg ? gs > w0.gs + w0.cj - tg && gt < w0.gt + tg && this.kP() : (gs -= w0.gs) < .25 * w0
			.cj ? kL.kW() : gs < .5 * w0.cj ? kL.kY() : gs < .75 * w0.cj ? kL.kX() : (gt = this, gs = gB.wL(kL.kV()), gt.kP(), (0 < gs.length && gs === gB.js.wM || gB.wO.kn(gs)) && gB.wN()), !0)
	}, this.cx = function() {
		var a2;
		if (this.oN)
			for (cB.i0.textAlign(cy, 1), cy.fillStyle = d1.iY, cy.fillRect(w0.gs, w0.gt, w0.cj, tg), cy.fillStyle = d1.i5, cy.fillRect(w0.gs, w0.gt + tg, w0.cj, w0.ee - tg), cy.fillStyle = d1.d2, cy.fillRect(w0.gs, w0.gt, 2, w0.ee), cy.fillRect(
					w0.gs, w0.gt, w0.cj, 2), cy.fillRect(w0.gs + w0.cj - 2, w0.gt, 2, w0.ee), cy.fillRect(w0.gs, w0.gt + w0.ee - 2, w0.cj, 2), cy.fillRect(w0.gs + 1, w0.gt + tg, w0.cj - 2, 2), cy.fillRect(w0.gs + 1, w0.gt + w0.ee - tg, w0.cj - 2,
					2), cy.font = cc + Math.floor(.39 * tg) + cd, cy.fillText("Replay", w0.gs + .5 * w0.cj, w0.gt + .55 * tg), c9.sQ(w0.gs + w0.cj - .725 * tg, w0.gt + .275 * tg, .45 * tg), cy.setTransform(1, 0, 0, 1, 0, 0), cy.font = cB.i0.kR(
					.3 * tg, 0), cy.fillText("Select All", w0.gs + .125 * w0.cj, w0.gt + w0.ee - .48 * tg), cy.fillText("Copy", w0.gs + .375 * w0.cj, w0.gt + w0.ee - .48 * tg), cy.fillText("Clear", w0.gs + .625 * w0.cj, w0.gt + w0.ee - .48 * tg),
				cy.fillText("Launch", w0.gs + .875 * w0.cj, w0.gt + w0.ee - .48 * tg), a2 = 1; a2 < 4; a2++) cy.fillRect(w0.gs + .25 * a2 * w0.cj - 1, w0.gt + w0.ee - tg + 1, 2, tg - 2)
	}
}

function qO() {
	var wS, wT, cj, gs, gt, wU, wV;
	this.c6 = function() {
		wS = new Array(2), wT = new Array(2), this.hb = !1, wV = wU = dr = dp = 0, dq = 1, this.resize()
	}, this.resize = function() {
		cj = (cj = Math.floor((o ? .072 : .0502) * cZ)) < 8 ? 8 : cj;
		for (var a2 = 1; 0 <= a2; a2--) wS[a2] = document.createElement("canvas"), wS[a2].width = cj, wS[a2].height = cj, wT[a2] = wS[a2].getContext("2d", {
			alpha: !0
		});
		this.vp(),
			function() {
				for (var wl = Math.floor(1 + cj / 20), a2 = 1; 0 <= a2; a2--) wT[a2].clearRect(0, 0, cj, cj), wT[a2].fillStyle = d1.i2, wT[a2].beginPath(), wT[a2].arc(cj / 2, cj / 2, cj / 2 - wl, 0, 2 * Math.PI), wT[a2].fill(), wT[a2].lineWidth =
					wl, wT[a2].fillStyle = d1.d2, wT[a2].strokeStyle = d1.d2, wT[a2].beginPath(), wT[a2].arc(cj / 2, cj / 2, cj / 2 - wl, 0, 2 * Math.PI), wT[a2].stroke(), mI(wT[a2], 0, 0, cj, wl, .3, 0 === a2)
			}()
	}, this.h2 = function() {
		return -dp / dq
	}, this.cw = function() {
		return -dr / dq
	}, this.hl = function(wZ, dX) {
		dp = dq * wZ - dX
	}, this.hm = function(wa, dY) {
		dr = dq * wa - dY
	}, this.co = function(wY, su) {
		return hZ || ! function(wY, su) {
			return Math.pow(wY - (gs + cj / 2), 2) + Math.pow(su - (gt + cj / 2), 2) < cj * cj / 4 || Math.pow(wY - (gs + cj / 2), 2) + Math.pow(su - (gt + 2 * cj), 2) < cj * cj / 4
		}(wY, su) || h6.h7.wb ? (gD.hp() && (this.hb = !0, wU = wY, wV = su), !1) : su < gt + 1.25 * cj ? this.nx(Math.floor(h0 / 2), Math.floor(cs / 2), -200) : this.nx(Math.floor(h0 / 2), Math.floor(cs / 2), 200)
	}, this.nu = function(wY, su) {
		var wc, wd, da, dd;
		return !gD.hp() || (wc = dp, wd = dr, dp += da = wU - wY, dr += dd = wV - su, fn.nu(da, dd), this.we(), wU = wY, wV = su, wc !== dp) || wd !== dr
	}, this.nx = function(cp, cq, deltaY) {
		var hj;
		if (gD.hp()) {
			if (0 < deltaY) hj = (hj = 500 / (500 + deltaY)) < .5 ? .5 : hj;
			else {
				if (!(deltaY < 0)) return !1;
				hj = 2 < (hj = (500 - deltaY) / 500) ? 2 : hj
			}
			this.wf(cp, cq, hj), aA.cm = !0
		}
		return !0
	}, this.wf = function(gs, gt, dT) {
		var cX;
		dT = cX = (cX = 1024 < (cX = dT) * dq ? 1024 / dq : cX) * dq < .125 ? .125 / dq : cX, fn.zoom(dT, gs, gt),
			function(cX, cp, cq) {
				dq *= cX, dp = (dp + cp) * cX - cp, dr = (dr + cq) * cX - cq, ha.we()
			}(dT, gs, gt)
	}, this.we = function() {
		var wi = p / 16,
			d9 = 0,
			wj = q / 16,
			dB = 0;
		dp < wi - p && (d9 = wi - p - dp), dp > dq * an.ao - wi && (d9 = dq * an.ao - wi - dp), dr < wj - q && (dB = wj - q - dr), dr > dq * an.ap - wj && (dB = dq * an.ap - wj - dr), dp += d9, dr += dB, hn.ho(), fn.wk(d9, dB)
	}, this.vp = function() {
		gs = h0 - cj - kI, gt = Math.floor(cs / 2 - 1.25 * cj)
	}, this.cx = function() {
		h6.h7.wb || (cy.drawImage(wS[0], gs, gt), cy.drawImage(wS[1], gs, Math.floor(gt + 3 * cj / 2)))
	}
}

function qP() {
	var aR, lU, wm, wn, lp, wo, wp, wq, wr, ws, ci, wt, wu, wv, ww, up, wx, wy, wz;

	function x3() {
		wn = Math.floor(.2 * (o ? .07 : .035) * cZ), wn = sq(o ? 3 : 1, wn);
		var x8 = p / (aR.length + lp);
		wn = wn < x8 ? x8 : wn, up = Math.floor((1 - lp) * wn), lU = 0, x9()
	}

	function x9() {
		lU = (lU = lU < -20 ? -20 : lU) > (aR.length - 15) * wn ? (aR.length - 15) * wn : lU, wp = Math.floor(lU / wn), wq = (wq = wp + Math.floor(h0 / wn)) > aR.length - 1 ? aR.length - 1 : wq, wp = (wp = wq < wp ? wq : wp) < 0 ? 0 : wp;
		var cP = wq;
		wo = wm / aR[cP];
		for (var a2 = wq - 1; wp <= a2; a2--) aR[a2] > aR[cP] && (cP = a2, wo = wm / Math.pow(aR[a2], ww))
	}

	function xC(gs) {
		gs = Math.floor((lU + h0 - gs - lp * wn) / wn);
		return (gs = gs < -1 ? -1 : -1 === gs ? 0 : gs > aR.length - 1 ? -1 : gs) !== wr && (wr = gs, -1 === wx && 0 === wr && wv && (wx = setInterval(xD, 100)), 1)
	}

	function xE(a2) {
		var ue = Math.floor(wo * Math.pow(aR[a2], ww));
		cy.fillRect(lU + h0 - (a2 + 1) * wn, cs - ue, up, ue)
	}

	function xD() {
		var bQ;
		0 !== (wr = 8 === aH.ob() ? -1 : wr) ? (wy = (new Date).getTime(), clearInterval(wx), wx = -1) : (bQ = aR[1] / 864e3, -1 !== wy && (bQ += ((new Date).getTime() - wy) * aR[1] / 864e5, wy = -1), 0 < bQ && (aR[0] += Math.floor(bQ), aA.cm = !0))
	}
	this.c6 = function() {
		wv = !(wy = wx = -1), wr = -(ww = 1), this.x0 = !1, wu = 0, wt = new Date, lU = 0, lp = .3, (wz = []).push({
			tK: "Plateau A",
			bI: 0,
			ng: 57
		}), wz.push({
			tK: "Max A",
			bI: 1,
			ng: 1
		}), wz.push({
			tK: "Black Friday",
			bI: 15,
			ng: 15
		}), wz.push({
			tK: "Max B",
			bI: 19,
			ng: 19
		}), wz.push({
			tK: "Max C",
			bI: 44,
			ng: 44
		}), wz.push({
			tK: "First Android Version",
			bI: 58,
			ng: 58
		}), wz.push({
			tK: "Max D",
			bI: 67,
			ng: 67
		}), wz.push({
			tK: "The iFrame Explosion",
			bI: 98,
			ng: 99
		}), wz.push({
			tK: "The 155-Day Uptrend",
			bI: 58,
			ng: 213
		}), wz.push({
			tK: "Max E",
			bI: 213,
			ng: 213
		}), wz.push({
			tK: "Plateau B",
			bI: 214,
			ng: 259
		}), wz.push({
			tK: "Turbulent Times",
			bI: 260,
			ng: 344
		}), wz.push({
			tK: "Max F",
			bI: 262,
			ng: 262
		}), wz.push({
			tK: "Max G",
			bI: 282,
			ng: 282
		}), wz.push({
			tK: "Max H",
			bI: 333,
			ng: 333
		}), wz.push({
			tK: "The 19-Day Downtrend",
			bI: 283,
			ng: 301
		}), wz.push({
			tK: "Plateau C",
			bI: 345,
			ng: 385
		}), wz.push({
			tK: "The Alliance Ascent",
			bI: 386,
			ng: 395
		}), wz.push({
			tK: "Max I",
			bI: 395,
			ng: 395
		}), wz.push({
			tK: "First iOS Version",
			bI: 411,
			ng: 411
		}), wz.push({
			tK: "Plateau D",
			bI: 396,
			ng: 453
		}), wz.push({
			tK: "The TikTok Revolution",
			bI: 454,
			ng: 470
		}), wz.push({
			tK: "Max J",
			bI: 456,
			ng: 456
		}), wz.push({
			tK: "Max K",
			bI: 472,
			ng: 472
		}), wz.push({
			tK: "Max L",
			bI: 478,
			ng: 478
		}), wz.push({
			tK: "YT Drew",
			bI: 471,
			ng: 485
		}), wz.push({
			tK: "Plateau E",
			bI: 485,
			ng: 600
		}), wz.push({
			tK: "Uptrend A",
			bI: 600,
			ng: 613
		}), wz.push({
			tK: "Max M",
			bI: 613,
			ng: 613
		}), wz.push({
			tK: "Downtrend A",
			bI: 614,
			ng: 635
		}), wz.push({
			tK: "Plateau F",
			bI: 636,
			ng: 737
		}), wz.push({
			tK: "End of Record",
			bI: 738,
			ng: 738
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
		], this.resize(), fq.x2(0, 0)
	}, this.resize = function() {
		wm = Math.floor(.15 * q), ws = Math.floor((o ? .018 : .0137) * cZ), ci = cc + (ws = ws < 2 ? 2 : ws) + cd, x3()
	}, this.x4 = function() {
		wv || iy.x5()
	}, this.x6 = function(x7) {
		var a2;
		for (wv = !0, a2 = 0; a2 < x7.length; a2++) aR.unshift(x7[a2]);
		x3(), aA.cm = !0
	}, this.xA = function() {
		x9()
	}, this.nu = function(gs, gt) {
		cs - .6 * wm < gt ? this.x0 ? gs !== wu && (lU += gs - wu, wu = gs, x9(), xC(gs), this.x0 = -1 !== wr, aA.cm = !0) : xC(gs) && (aA.cm = !0) : this.oQ()
	}, this.oQ = function() {
		-1 !== wr && (this.x0 = !1, wr = -1, aA.cm = !0)
	}, this.nx = function(gs, deltaY) {
		-1 !== wr && (lU += Math.floor(deltaY), x9(), xC(gs), aA.cm = !0)
	}, this.co = function(gs, gt) {
		this.nu(gs, gt), -1 !== wr && (wu = gs, this.x0 = !0)
	}, this.oR = function() {
		-1 !== wr && (this.x0 = !1)
	}, this.cx = function() {
		cy.fillStyle = d1.iA;
		for (var xG, month, r, mM, xJ, xK, gy, xL, xM, a2 = wq; wp <= a2; a2--) xE(a2);
		wv && 0 === wp && (cy.fillStyle = d1.iV, xE(0)), -1 !== wr && (cy.fillStyle = d1.i9, xE(wr)), -1 !== wr && (cy.font = ci, cy.textBaseline = uR, (r = new Date).setTime(wt.getTime() - 1e3 * wr * 60 * 60 * 24), month = "month", xG = "day",
			"undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(r), xG = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(r)), xG = xG + ", " + r.getUTCDate() + " " + month + " " + r.getFullYear(), month = 1 === aR[wr] ? " second played" : " seconds played", month = g6.h9(aR[wr]) + month, r = Math.floor(cy.measureText(xG).width), mM = Math
			.floor(cy.measureText(month).width), xJ = Math.floor(.5 * (r + ws)), xK = (xK = lU + h0 - (wr + 1) * wn) < xJ ? xJ : h0 - xJ < xK ? h0 - xJ : xK, gy = cs - Math.floor(wo * Math.pow(aR[wr], ww)), xL = Math.floor(1.1 * ws), xM =
			cs - xL < gy ? cs - xL : gy, cy.fillStyle = d1.i6, cy.fillRect(h0 - mM - ws, xM - xL, mM + ws, xL), cy.fillRect(xK - xJ, cs - xL, r + ws, xL), cy.fillStyle = d1.d2, cy.textAlign = uS, cy.fillText(month, Math.floor(h0 - .5 * ws),
				xM),
			function(gy, xL) {
				for (var mL, rT = -1, cb = aR.length - wr - 1, a2 = wz.length - 1; 0 <= a2; a2--) cb >= wz[a2].bI && cb <= wz[a2].ng && (-1 === rT || wz[a2].ng - wz[a2].bI < wz[rT].ng - wz[rT].bI) && (rT = a2); - 1 !== rT && (mL = Math.floor(
					cy.measureText(wz[rT].tK).width), cy.fillStyle = d1.i6, cy.fillRect(h0 - mL - ws, gy, mL + ws, xL), cy.fillStyle = d1.d2, cy.fillText(wz[rT].tK, Math.floor(h0 - .5 * ws), gy + xL))
			}(xM - 2 * xL, xL), cy.textAlign = d0, cy.fillText(xG, xK, cs), cy.strokeStyle = d1.iB, cy.lineWidth = 1, cy.beginPath(), cy.moveTo(0, gy), cy.lineTo(h0, gy), cy.closePath(), cy.stroke())
	}
}

function qQ() {
	var ci, cj, gt, xO, xP, p3, i0, ul, pD, xQ, xR, xS, xT;
	this.gs = 0, this.ee = 0, this.c6 = function() {
		xP = lu, xR = "rgba(0,100,0,0.8)", xS = "rgba(150,0,0,0.8)", ul = !(xQ = !0), pD = bC[bB], this.resize()
	}, this.resize = function() {
		cj = Math.floor((o ? .305 : .24) * cZ), this.ee = Math.floor(.5 + .13 * cj), cj = Math.floor(6 * this.ee), ci = cc + Math.floor(.8 * this.ee) + cd, xT = Math.floor(.5 * this.ee), an.ky.font = ci, gt = kI, xO = Math.floor(1 + .13 * this
			.ee), (p3 = document.createElement("canvas")).width = cj, p3.height = this.ee, (i0 = p3.getContext("2d", {
			alpha: !0
		})).font = ci, i0.textBaseline = cz, i0.textAlign = d0, this.xU()
	}, this.vB = function() {
		return o && p < 1.2 * q
	}, this.vp = function() {
		this.vB() ? this.gs = h0 - cj - kI : this.gs = Math.floor(g2.xV() + (h0 - g2.xV() - fo.cj - cj) / 2 - .5 * kI)
	}, this.gK = function() {
		ul && (ul = !1, this.xU())
	}, this.xU = function() {
		i0.clearRect(0, 0, cj, this.ee), i0.fillStyle = xQ ? xR : xS, i0.fillRect(0, 0, cj, this.ee), i0.fillStyle = d1.i9, this.xW(), this.xX(), i0.fillStyle = bC[bB] >= bD.ey(bB) ? d1.iS : d1.d2, i0.fillText(g6.h9(pD), Math.floor(cj / 2), xT),
			i0.fillStyle = d1.d2, i0.fillRect(0, 0, cj, 1), i0.fillRect(0, 0, 1, this.ee), i0.fillRect(0, this.ee - 1, cj, 1), i0.fillRect(cj - 1, 0, 1, this.ee)
	}, this.xW = function() {
		var lc = vj(Math.floor((bD.xY() - 1) * this.ee / 9), this.ee - xO);
		i0.fillRect(0, lc, xO, this.ee - lc), i0.fillRect(cj - xO, lc, xO, this.ee - lc)
	}, this.xX = function() {
		i0.fillRect(xO, this.ee - xO, Math.floor((cj - 2 * xO) * bC[bB] / xP), xO)
	}, this.eu = function() {
		0 !== dj[bB] && 2 !== dk[bB] && pD !== bC[bB] && (xP = sq(bC[bB], xP), xQ = bC[bB] > pD && 10 <= bC[bB], pD = bC[bB], ul = !0)
	}, this.cx = function() {
		0 === dj[bB] || hW || 2 === dk[bB] || cy.drawImage(p3, this.gs, gt)
	}
}

function qR() {
	var xa, xb, xc, xd, xe, xf, xg, xh, xi, xj, xk, xl, xm, xn, xo, xp, xq, xr, xs, title, xt, xu, xv, xw, xx, position, xy, xz, y0, y1, y2 = 1;

	function y5() {
		xg.clearRect(0, 0, xa, vR), xg.fillStyle = d1.ie, xg.fillRect(0, 0, xa, xl), xg.fillStyle = d1.i5, xg.fillRect(0, xl, xa, vR - xl), xZ[bB] >= position && y8(xZ[bB] - position, d1.iP), 0 !== xZ[bB] && 0 === position && y8(0, d1.ij), -1 !==
			xx && y8(xx, d1.i8), xg.fillStyle = d1.d2, xg.fillRect(0, xl, xa, 1), xg.fillRect(0, 0, xa, uW), xg.fillRect(0, 0, uW, vR), xg.fillRect(xa - uW, 0, uW, vR), xg.fillRect(0, vR - uW, xa, uW), xg.font = xb, xg.textBaseline = cz, xg
			.textAlign = d0, xg.fillText(title, Math.floor(xa / 2), Math.floor(xj + xc / 2));
		var eO, bR = xZ[bB] < position + xe - 1 ? 1 : 2;
		for (xg.font = xd, xg.textAlign = sy, eO = xe - bR; 0 <= eO; eO--) y9(gW[eO + position]), yA(eO, eO + position, gW[eO + position]);
		for (xg.textAlign = uS, eO = xe - bR; 0 <= eO; eO--) y9(gW[eO + position]), yB(eO, gW[eO + position]);
		2 == bR && (y9(bB), xg.textAlign = sy, yA(xe - 1, xZ[bB], bB), xg.textAlign = uS, yB(xe - 1, bB)), 0 === position && (bR = .7 * xm / cf.get(4).height, xg.setTransform(bR, 0, 0, bR, Math.floor(xn + .58 * xm + .5 * bR * cf.get(4).width), Math
			.floor(xj + xc + .4 * xm)), xg.imageSmoothingEnabled = !0, xg.drawImage(cf.get(4), -Math.floor(cf.get(4).width / 2), -Math.floor(cf.get(4).height / 2)), xg.setTransform(1, 0, 0, 1, 0, 0))
	}

	function y9(player) {
		cH && (xg.fillStyle = fB.yD[fB.nN[fB.fC[player]]])
	}

	function y8(a2, rY) {
		xg.fillStyle = rY, a2 = xe - 1 < a2 ? xe - 1 : a2;
		rY = Math.floor((a2 === xe - 1 ? 2 : 0 === a2 ? 1.15 : 1) * xm), rY = a2 === xe - 2 ? Math.floor(xl + 9.15 * xm) - Math.floor(xl + 8.15 * xm) : rY;
		xg.fillRect(0, Math.floor(xl + (a2 + (0 === a2 ? 0 : .15)) * xm), xa, rY)
	}

	function yA(yF, yG, a2) {
		xg.fillText(xt[yG], xn, Math.floor(xj + xc + (yF + .5) * xm)), 1 === dk[a2] && (xg.font = uT + xd);
		yG = Math.floor(xj + xc + (yF + .5) * xm);
		xg.fillText(xr[a2] === a2 ? hA[a2] : xq[xr[a2] % bN], xo, yG), 0 !== dk[a2] && (xg.font = xd), a2 < di && 2 !== dk[a2] || xg.fillRect(xo, yG + .35 * y2, xs[a2], Math.max(1, .1 * y2))
	}

	function yB(yF, a2) {
		xg.fillText(bj[a2], xp, Math.floor(xj + xc + (yF + .5) * xm))
	}

	function yP(gt) {
		return (gt -= kI + xl) < 0 ? Math.floor(gt / xm) - 1 : gt < (xe - 1) * xm ? Math.floor(gt / xm) : gt < vR - xl ? xe - 1 : (gt -= vR - xl, xe + Math.floor(gt / xm))
	}

	function s2(gs, gt) {
		return kI <= gs && gs < kI + xa && kI <= gt && gt < kI + vR
	}
	this.c6 = function() {
		var a2, j, eO;
		for (xz = !1, title = "LEADERBOARD", xe = o ? 6 : 10, position = y1 = y0 = xy = 0, xw = !(xx = -1), xu = new Uint16Array(xe + 1), xv = new Uint32Array(xe + 1), xi = bN, gW = new Uint16Array(xi), xZ = new Uint16Array(xi), a2 = xi - 1; 0 <=
			a2; a2--) gW[a2] = a2, xZ[a2] = a2;
		this.resize(!0), xq = [], xr = new Uint16Array(bN), xs = new Uint16Array(bN);
		var y3 = Math.floor(xa - xo - xn - xh),
			y4 = 0;
		for (xt = new Array(bN), xg.font = xd, a2 = bN - 1; 0 <= a2; a2--)
			if (xt[a2] = a2 + 1 + ".", xr[a2] = a2, xs[a2] = Math.floor(xg.measureText(hA[a2]).width), xs[a2] > y3) {
				for (j = hA[a2], eO = hA[a2].length - 1; 1 <= eO && (j = j.substring(0, eO), xs[a2] = Math.floor(xg.measureText(j + "...").width), !(xs[a2] <= y3)); eO--);
				j += "...", xq.push(j), xr[a2] = bN + y4++
			} y5()
	}, this.resize = function(c6) {
		if (vR = o ? (xa = Math.floor(.335 * cZ), Math.floor(xe * xa / 8)) : (xa = Math.floor(.27 * cZ), Math.floor(xe * xa / 10)), xa = Math.floor(.97 * xa), (xf = document.createElement("canvas")).width = xa, xf.height = vR, xg = xf.getContext(
				"2d", {
					alpha: !0
				}), xj = .025 * xa, xc = .16 * xa, xk = 0 * xa, xl = Math.floor(.45 * xj + xc), xm = (vR - xc - 2 * xj - xk) / xe, xb = cc + Math.floor(.55 * xc) + cd, y2 = Math.floor((o ? .67 : .72) * xm), xd = y2 + cd, xg.font = xd, xn = Math
			.floor(.04 * xa), xo = Math.floor((o ? .195 : .18) * xa), xh = Math.floor(xg.measureText("00920600").width), xg.font = xb, xp = xa - xn, !c6) {
			xg.font = xd;
			for (var a2 = bN - 1; 0 <= a2; a2--) xs[a2] = Math.floor(xg.measureText(xr[a2] === a2 ? hA[a2] : xq[xr[a2] % bN]).width);
			y5()
		}
	}, this.xV = function() {
		return xa
	}, this.gK = function(tY) {
		xw && (tY || aA.f9() % h6.y6[h6.h7.y7] == 0) && (xw = !1, y5())
	}, this.eu = function() {
		! function() {
			for (var eO = xi - 1; 0 <= eO; eO--) 0 === dj[gW[eO]] && ! function(eO) {
				var yN = gW[eO];
				xi--;
				for (var a2 = eO; a2 < xi; a2++) gW[a2] = gW[a2 + 1], xZ[gW[a2]] = a2;
				gW[xi] = yN, xZ[gW[xi]] = xi
			}(eO)
		}();
		for (var yL, hp = xi - 1, eO = 0; eO < hp; eO++) bj[gW[eO]] < bj[gW[eO + 1]] && (yL = gW[eO], gW[eO] = gW[eO + 1], gW[eO + 1] = yL, xZ[gW[eO]] = eO, xZ[gW[eO + 1]] = eO + 1);
		! function() {
			for (var r = xw, bR = (xw = !0, xZ[bB] >= xe - 1 ? xe - 2 : xe - 1), a2 = bR; 0 <= a2; a2--)
				if (xu[a2] !== gW[a2] || xv[a2] !== bj[gW[a2]]) return;
			(bR != xe - 2 || xu[xe] === xZ[bB] && xv[xe] === bj[bB]) && (xw = r)
		}();
		for (var a2 = xe - 1; 0 <= a2; a2--) xu[a2] = gW[a2], xv[a2] = bj[gW[a2]];
		xu[xe] = xZ[bB], xv[xe] = bj[bB]
	}, this.co = function(gs, gt) {
		return !!s2(gs, gt) && (xy = aA.aB, xz = !0, y0 = y1 = yP(gt), oJ.oo() && (gs = w9(-1, y1, xe), xx !== (gs = gs === xe ? -1 : gs)) && (xx = gs, y5(), aA.cm = !0), !0)
	}, this.nu = function(gs, gt) {
		var r, yO = yP(gt);
		return xz ? (r = position, (position = w9(0, position += y0 - yO, bN - xe)) !== r && (yO = (yO = w9(-1, y0 = yO, xe)) !== xe && s2(gs, gt) ? yO : -1, xx = yO, y5(), aA.cm = !0), !0) : (yO = (yO = w9(-1, yO, xe)) === xe || !s2(gs, gt) ||
			oJ.oo() ? -1 : yO, xx !== yO && (xx = yO, y5(), aA.cm = !0))
	}, this.oR = function(gs, gt) {
		if (!xz) return !1;
		xz = !1;
		var yO = yP(gt);
		return oJ.oo() && -1 !== xx && (xx = -1, y5(), aA.cm = !0), aA.aB - xy < 350 && y1 === yO && -1 !== (yO = (yO = w9(-1, yO, xe)) !== xe && s2(gs, gt) ? yO : -1) && (gs = gW[yO + position], yO === xe - 1 && xZ[bB] >= position + xe - 1 && (
			gs = bB), cH && displayDonationsHistory(gs, hA, fc), 0 !== dj[gs]) && gD.hX(gs, 800, !1, 0), !0
	}, this.nx = function(gs, gt, deltaY) {
		var yQ;
		return !(xz || hZ || (yQ = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !s2(gs, gt)) || (gs = (gs = w9(-1, yP(gt), xe)) === xe || oJ.oo() ? -1 : gs, 0 < deltaY ? position < bN - xe && (position += Math.min(bN - xe - position, yQ), xx =
			gs, y5(), aA.cm = !0) : 0 < position && (position -= Math.min(position, yQ), xx = gs, y5(), aA.cm = !0), 0))
	}, this.cx = function() {
		cy.drawImage(xf, kI, kI)
	}
}

function qS() {
	var p3, i0, gs, gt, ue, yR, lp, yS, ch, yT, s8, bG, yU, yV, yW, yX, yY, yZ;

	function yc() {
		i0.clearRect(0, 0, fo.cj, fo.ee), i0.fillStyle = d1.i6, i0.fillRect(0, 0, fo.cj, fo.ee), i0.fillStyle = d1.iK, dT = 0 < yW ? yW : Math.sqrt(bG[4] / 1e4), i0.fillRect(0, fo.ee - ue - 1, Math.floor(dT * fo.cj), ue), i0.fillStyle = d1.d2, i0
			.fillRect(0, 0, fo.cj, 1), i0.fillRect(0, 0, 1, fo.ee), i0.fillRect(fo.cj - 1, 0, 1, fo.ee), i0.fillRect(0, fo.ee - 1, fo.cj, 1), i0.fillRect(0, fo.ee - ue - 1, fo.cj, 1);
		for (var dT, ye, r = 0, a2 = 0; a2 < s8.length; a2++) yU[a2] ? (i0.textAlign = sy, ye = Math.floor((yR - ue + 2 * yS) * (a2 - r + 1) / (s8.length + 1) - .7 * yS), i0.fillText(s8[a2], lp, ye), i0.textAlign = uS, 5 === a2 && 0 !== dj[bB] && bC[
			bB] >= bD.ey(bB) ? (i0.fillStyle = d1.ih, i0.fillText(yb(a2), fo.cj - lp, ye), i0.fillStyle = d1.d2) : i0.fillText(yb(a2), fo.cj - lp, ye)) : r++
	}

	function yb(a2) {
		return a2 < 3 ? bG[a2].toString() : 3 === a2 || 4 === a2 || 5 === a2 ? fo.tT(bG[a2] / 100, 2) : a2 < 7 ? g6.h9(bG[a2]) : a2 === 7 ? fo.xY(bG[7]) : a2 === 8 ? utils.getMaxTroops(bj, bB) : utils.getDensity(bC, bj, bB)
	}

	function ya() {
		bj[bB] !== bG[6] && (bG[6] = bj[bB], yT++)
	}
	this.c6 = function() {
		yW = yX = 0, (s8 = new Array(8))[0] = "Humans", s8[1] = fc ? "Players" : "Bots", s8[2] = "Spectators", s8[3] = "Threshold", s8[4] = "Occupation", s8[5] = "Interest", s8[6] = "Income", s8[7] = "Time", s8.push("Max Troops", "Density"), yZ =
			pW - b7(pW, 100), (bG = new Array(s8.length))[0] = fc ? 0 : di, bG[1] = fc ? fD : fV, bG[2] = nE, bG[3] = 0, bG[4] = b7(1e4 * bj[0], pW), bG[5] = 700, bG[6] = 0, ya(), bG[7] = 0, yV = yb(6), yU = new Array(s8.length);
		for (var a2 = s8.length - 1; 0 <= a2; a2--) yU[a2] = !0;
		yY = 0, yY = fc ? (yU[0] = !1, yU[2] = !1, yU[3] = !1, 3) : (yU[3] = !1, 1), yT = 0, this.resize()
	}, this.resize = function() {
		this.cj = Math.floor((o ? .1646 : .126) * 1.25 * cZ), this.ee = Math.floor(1.18 * this.cj), ue = Math.floor(.04 * this.cj), lp = Math.floor(.035 * this.cj), yS = .04 * this.cj, yR = this.ee, this.ee -= Math.floor(yY * (this.ee - 2 * ue) /
			s8.length), ch = Math.floor(.7 * (yR - ue) / s8.length), ch = cc + ch + cd, (p3 = document.createElement("canvas")).width = this.cj, p3.height = this.ee, (i0 = p3.getContext("2d", {
			alpha: !0
		})).font = ch, i0.textBaseline = cz, i0.lineWidth = 1, this.pQ(), this.vp(), g5.vp(), yc()
	}, this.vp = function() {
		gs = h0 - this.cj - kI
	}, this.yd = function() {
		gt = kI
	}, this.pQ = function() {
		gt = kI + (g5.vB() && 0 !== dj[bB] && !hW ? g5.ee + kI : 0)
	}, this.gK = function(tY) {
		0 < yT && (tY || 100 <= yT) && (yT = 0, yc())
	}, this.rg = function() {
		return bG[7]
	}, this.xY = function(value) {
		var cP = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * cP) / 1e3);
		return value < 10 ? cP + ":0" + value : cP + ":" + value
	}, this.tT = function(bQ, uu) {
		return bQ.toFixed(uu) + "%"
	}, this.eu = function() {
		var yo, per;
		yU[0] && nF - nE !== bG[0] && (bG[0] = nF - nE, yT++), fD - bG[0] !== bG[1] && (bG[1] = fD - bG[0], yT++), this.fp(), (yo = bD.yp(bB)) !== bG[5] && (bG[5] = yo, yT++), ya(), bG[7] += aA.yq, yo = yb(7), yV !== yo && (yV = yo, yT += 100),
			yo = cH ? g9.nP() : bj[gW[0]], per = b7(1e4 * yo, pW), bG[3] = yo, bG[4] !== per && (yT++, bG[4] = per), 8 === fa && function() {
				if (0 === dj[0]) fr.my.n6(1);
				else {
					if (0 !== dj[1]) return;
					fr.my.n6(0)
				}
				return 1
			}() || bG[3] < yZ || bG[3] !== pW && ! function() {
				for (var a2 = fD - 1; 0 <= a2; a2--)
					if (0 < bJ[fE[a2]].length) return;
				return 1
			}() || fr.my.n6(-1)
	}, this.fp = function() {
		yU[2] && nE !== bG[2] && (bG[2] = nE, yT++)
	}, this.yr = function(a2) {
		var p4, ys, r;
		return 2 !== gL && (a2 === pa ? (yW = 0, yc(), !1) : (-1 !== a2 || 0 !== yX) && (ys = yW, yW = c8 ? a2 / pa : (r = performance.now(), 0 <= a2 && (p4 = r - 392 * a2, yX = 0 === a2 || p4 < yX ? p4 : yX), 1 < (yW = (r - yX) / (392 * pa)) ?
			1 : yW), yc(), yW !== ys))
	}, this.cx = function() {
		cy.drawImage(p3, gs, gt)
	}
}

function qT() {
	var oN, yt, cj, ee, tg, yu, yv, vC, p3, hN, yw;

	function cw() {
		return Math.floor((h0 - cj) / 2) < cU.ee + 2 * kI ? cs - ee - 4 * kI - cU.ee : cs - ee - 2 * kI
	}
	this.yx = -1, this.c6 = function() {
		yw = oN = !1, tg = .61, yu = .07, yv = .09, hN = vC = ee = 0, this.yx = -1
	}, this.resize = function() {
		var i0, gx, fA, z2, z3, sC;
		oN && (cj = vj(cj = o ? Math.floor(.69 * cZ) : Math.floor(.5 * cZ), sq(p - 2 * kI, 10)), cj = vj(cj, Math.floor(3.57 * sq(q - 2 * kI, 3))), ee = Math.floor(.28 * cj), (p3 = document.createElement("canvas")).width = cj, p3.height = ee,
			i0 = p3.getContext("2d", {
				alpha: !0
			}), gx = Math.floor(1 + ee / 40), i0.clearRect(0, 0, cj, ee), i0.fillStyle = d1.i6, i0.fillRect(gx, gx, cj - 2 * gx, ee - 2 * gx), i0.lineJoin = "bevel", i0.lineWidth = 2 * gx, i0.strokeStyle = d1.d2, i0.strokeRect(gx, gx, cj -
				2 * gx, ee - 2 * gx), i0.imageSmoothingEnabled = !0, fA = cf.get(yt), z2 = fA.width, z3 = fA.height, sC = (21 === yt ? .666 : 1) * tg * ee / z3, i0.setTransform(sC, 0, 0, sC, Math.floor((cj - sC * z2) / 2), Math.floor((ee -
				sC * z3) / 2)), i0.drawImage(fA, 0, 0), i0.setTransform(1, 0, 0, 1, Math.floor(cj - yv * ee - yu * ee - gx), Math.floor(gx + yu * ee)),
			function(i0, bI) {
				i0.lineWidth = Math.floor(1 + ee / 80), i0.strokeStyle = d1.d2, i0.beginPath(), i0.moveTo(0, 0), i0.lineTo(bI, bI), i0.moveTo(0, bI), i0.lineTo(bI, 0), i0.stroke()
			}(i0, Math.floor(yv * ee)), i0.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(aF, yz, z0, z1) {
		oN || z1 && yw || (yt = z0 ? 21 : aF ? 1 : 2, oN = yw = !0, this.resize(), mD.kP(), cU.ve(), hN = aA.aB, -1 === this.yx && (this.yx = aA.f9()), vC = yz ? 1 : 0)
	}, this.eu = function() {
		!oN || 1 <= vC || (vC = 1 < (vC += 5e-4 * (aA.aB - hN)) ? 1 : vC, hN = aA.aB, aA.cm = !0)
	}, this.co = function(gs, gt) {
		return !(!oN || vC <= 0 || (gs -= Math.floor((h0 - cj) / 2), gt -= cw(), gs < 0) || gt < 0 || cj < gs || ee < gt || (cj - ee / 3 < gs && gt < ee / 3 && (oN = !1, aA.cm = !0), 0))
	}, this.cx = function() {
		!oN || vC <= 0 || (cy.globalAlpha = vC, cy.drawImage(p3, Math.floor((h0 - cj) / 2), cw()), cy.globalAlpha = 1)
	}
}

function z5() {
	this.z6 = !1, this.hy = !1, this.pU = !1, this.z7 = [0, 0, 0, 0], this.z8 = function() {
		var gx, gy, gz, h1;
		this.pU = this.pU || this.hy, (this.hy || this.z6 && this.pU) && (gx = hn.z9[0], gy = hn.z9[1], gz = hn.z9[2], h1 = hn.z9[3], gx = gx < this.z7[0] ? this.z7[0] : gx, gy = gy < this.z7[1] ? this.z7[1] : gy, gz = gz > this.z7[2] ? this.z7[
			2] : gz, h1 = h1 > this.z7[3] ? this.z7[3] : h1, this.hy = !1, this.z6 = !1, gx === this.z7[0] && gy === this.z7[1] && gz === this.z7[2] && h1 === this.z7[3] ? this.pV() : gx <= gz && gy <= h1 && pr.putImageData(ps, 0, 0, gx,
			gy, gz - gx + 1, h1 - gy + 1))
	}, this.pV = function() {
		this.pU && this.z7[2] >= this.z7[0] && this.z7[3] >= this.z7[1] && pr.putImageData(ps, 0, 0, this.z7[0], this.z7[1], this.z7[2] - this.z7[0] + 1, this.z7[3] - this.z7[1] + 1), this.pU = !1
	}, this.nI = function() {
		this.z7[2] >= this.z7[0] && this.z7[3] >= this.z7[1] && pr.putImageData(ps, 0, 0, this.z7[0], this.z7[1], this.z7[2] - this.z7[0] + 1, this.z7[3] - this.z7[1] + 1), this.pU = !1
	}, this.c6 = function() {
		var gs, gt;
		this.z6 = !1, this.hy = !1, this.pU = !1, this.z7[0] = an.ao, this.z7[1] = an.ap, this.z7[2] = this.z7[3] = 0;
		loop: for (gs = 1; gs < an.ao - 1; gs++)
			for (gt = an.ap - 2; 1 < gt; gt--)
				if (1 === zA[bK.lk(gs, gt) + 2]) {
					this.z7[0] = gs;
					break loop
				} loop: for (gt = 1; gt < an.ap - 1; gt++)
			for (gs = an.ao - 2; 1 < gs; gs--)
				if (1 === zA[bK.lk(gs, gt) + 2]) {
					this.z7[1] = gt;
					break loop
				} loop: for (gs = an.ao - 2; 0 < gs; gs--)
			for (gt = an.ap - 2; 1 < gt; gt--)
				if (1 === zA[bK.lk(gs, gt) + 2]) {
					this.z7[2] = gs;
					break loop
				} loop: for (gt = an.ap - 2; 0 < gt; gt--)
			for (gs = an.ao - 2; 1 < gs; gs--)
				if (1 === zA[bK.lk(gs, gt) + 2]) {
					this.z7[3] = gt;
					break loop
				}
	}
}

function zB() {
	this.oN = !1, this.sS = null, this.zC = 0, this.cj = null, this.ee = null, this.zD = .013, this.zE = .022, this.zF = .025;
	this.zH = 3, this.zI = 1.2, this.zJ = .2, this.zK = .235, this.zL = .9, this.zM = .08;
	var zO, zN = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"],
		zP = [-1e6, -1e6];
	this.position = [0, 0], this.zR = [0, 0], this.c6 = function() {
		this.sS = [null, null], this.oN = !1, this.zC = 0
	}, this.cv = function(id) {
		this.oN = !0, this.resize(), this.zC = id, this.ce(), oZ.cv(!1), aA.cm = !0
	}, this.eu = function() {
		this.oN && this.ce()
	}, this.ce = function() {
		aA.aB - 12e4 >= zP[this.zC] && (zP[this.zC] = aA.aB, this.zR = [0, 0], fq.x2(0, 1 + this.zC)) && iy.zS(0, this.zC)
	}, this.resize = function() {
		if (this.oN) {
			var a2;
			for (this.cj = this.zT(o ? .85 : .66, .75, p, q), this.ee = Math.floor(this.cj / .75), a2 = 1; 0 <= a2; a2--) this.sS[a2] && (this.sS[a2][4] = cc + Math.floor(this.sS[a2][5] * this.ee / 10) + cd);
			zO = cc + Math.floor(.1 * this.ee) + cd
		}
	}, this.zT = function(cX, ti, cj, ee) {
		return cj < ti * ee ? Math.floor(cX * cj) : Math.floor(ti * cX * ee)
	}, this.zU = function(cb, zV, zW, uu, zX, zY, yF) {
		this.position[cb] = yF;
		for (var v9, eL = zV.length, ci = cc + Math.floor(zX * this.ee / 10) + cd, aR = (this.zZ(zV, ci, zY * this.cj), [
				[], eL, -1, uu, ci, zX, 10 * yF
			]), a2 = 0; a2 < eL; a2++) v9 = {
			name: zV[a2].name,
			value: zV[a2].mT / zW,
			colorIndex: zV[a2].colorIndex
		}, aR[0].push(v9);
		this.sS[cb] = aR, this.za(cb);
		zY = this.sS[cb][0][0].name;
		1 === cb && (zY = "[" + zY + "]"), 0 === yF && zb.ca(cb, zY), aA.cm = !0
	}, this.za = function(a2) {
		this.sS[a2][0].sort(function(eO, cK) {
			return cK.value - eO.value
		})
	}, this.zc = function(cb, name, zd, ze) {
		if (this.sS && this.sS[cb]) {
			var a2, tL = !1;
			if (0 === cb) {
				for (a2 = 0; a2 < this.sS[cb][0].length; a2++)
					if (name === this.sS[cb][0][a2].name && zd > .99 * this.sS[cb][0][a2].value && zd < 1.01 * this.sS[cb][0][a2].value) {
						this.sS[cb][0][a2].value = ze, tL = !0;
						break
					} tL || this.sS[cb][0].push({
					name: name,
					value: ze
				})
			} else {
				for (a2 = 0; a2 < this.sS[cb][0].length; a2++)
					if (name === this.sS[cb][0][a2].name) {
						this.sS[cb][0][a2].value += 32 < this.sS[cb][0][a2].value ? (64 - this.sS[cb][0][a2].value) / 256 : .25, this.sS[cb][0][a2].value *= 1 / (383 / 384), tL = !0;
						break
					} for (a2 = 0; a2 < this.sS[cb][0].length; a2++) this.sS[cb][0][a2].value *= 383 / 384;
				tL || this.sS[cb][0].push({
					name: name,
					value: .25
				})
			}
			this.za(cb)
		}
	}, this.zZ = function(zV, ci, cl) {
		for (var a2 = zV.length - 1; 0 <= a2; a2--)
			for (; 3 < zV[a2].name.length && ck.measureText(zV[a2].name, ci) > cl;) zV[a2].name = zV[a2].name.substring(0, zV[a2].name.length - 4) + "..."
	}, this.co = function(dX, dY) {
		return !!this.oN && (dX -= (h0 - this.cj) / 2, dY -= (cs - this.ee) / 2, dX < 0 || dX > this.cj || dY < 0 || dY > this.ee ? (this.oN = !1, 0 === aH.ob() && oZ.cv(!0), aA.cm = !0) : (dY = dY < .3 * this.ee ? 1 : dY < .85 * this.ee ? (dY =
			(0 === this.zC ? 14.1 : 3) * (dY - .3 * this.ee) / (.55 * this.ee), Math.floor(1 + dY * dY)) : 0 === this.zC ? 200 : 10, dX < this.cj / 2 ? this.zR[this.zC] = -dY : this.zR[this.zC] = dY, zP[this.zC] + 50 > aA.aB || (zP[
			this.zC] = aA.aB, fq.x2(0, 1 + this.zC) && iy.zS(0, this.zC)), !0))
	}, this.cx = function() {
		var gx, gy, mL, mM, zf, zg, p6, p7;
		this.oN && (gx = (h0 - this.cj) / 2, gy = (cs - this.ee) / 2, mL = this.zD * this.cj, mM = this.zH * mL, zf = this.zE * this.cj, zg = this.zI * zf, p6 = this.zF * this.cj, p7 = Math.floor(.25 * this.ee), cy.setTransform(1, 0, 0, 1, gx,
				gy), cy.fillStyle = 0 === this.zC ? d1.ia : d1.iY, cy.fillRect(0, 0, this.cj, p7), cy.fillStyle = d1.i5, cy.fillRect(0, p7, this.cj, this.ee - p7), cy.fillStyle = d1.d2, cy.font = zO, cy.textBaseline = cz, cy.textAlign = d0,
			cy.fillText(zN[this.zC], Math.floor(this.cj / 2), Math.floor(.135 * this.ee)), cy.font = cc + Math.floor(.025 * this.ee) + cd, cy.fillText(zN[this.zC + 2], Math.floor(this.cj / 2), Math.floor(.2125 * this.ee)), cy.beginPath(), cy
			.moveTo(this.cj / 4, 0), cy.lineTo(this.cj / 2 - mL, 0), cy.lineTo(this.cj / 2, -mM), cy.lineTo(this.cj / 2 + mL, 0), cy.lineTo(this.cj - zf, 0), cy.lineTo(this.cj + zg, -zg), cy.lineTo(this.cj, zf), cy.lineTo(this.cj, this.ee /
				2 - mL), cy.lineTo(this.cj + mM, this.ee / 2), cy.lineTo(this.cj, this.ee / 2 + mL), cy.lineTo(this.cj, this.ee - zf), cy.lineTo(this.cj + zg, this.ee + zg), cy.lineTo(this.cj - zf, this.ee), cy.lineTo(this.cj / 2 + mL, this
				.ee), cy.lineTo(this.cj / 2, this.ee + mM), cy.lineTo(this.cj / 2 - mL, this.ee), cy.lineTo(zf, this.ee), cy.lineTo(-zg, this.ee + zg), cy.lineTo(0, this.ee - zf), cy.lineTo(0, this.ee / 2 + mL), cy.lineTo(-mM, this.ee / 2),
			cy.lineTo(0, this.ee / 2 - mL), cy.lineTo(0, zf), cy.lineTo(-zg, -zg), cy.lineTo(zf, 0), cy.lineTo(this.cj / 4, 0), cy.lineTo(this.cj / 4, p6), cy.lineTo(p6, p6), cy.lineTo(p6, this.ee - p6), cy.lineTo(this.cj - p6, this.ee - p6),
			cy.lineTo(this.cj - p6, p6), cy.lineTo(this.cj / 4, p6), cy.fill(), this.sS[this.zC] && this.zh(p7), this.zi(p7), cy.setTransform(1, 0, 0, 1, 0, 0))
	}, this.zi = function(p7) {
		var mL = sq(2, Math.floor(.06 * this.cj)),
			tg = (mL -= mL % 2, sq(2, Math.floor(.01 * this.cj))),
			p7 = (tg -= tg % 2, Math.floor(.82 * p7));
		cy.fillRect(mL, p7, mL, tg), cy.fillRect(this.cj - mL - mL, p7, mL, tg), cy.fillRect(Math.floor(this.cj - mL - mL + (mL - tg) / 2), Math.floor(p7 - (mL - tg) / 2), tg, mL)
	}, this.zh = function(p7) {
		var gt;
		cy.font = this.sS[this.zC][4];
		for (var a2 = this.sS[this.zC][1] - 1; 0 <= a2; a2--) cy.textAlign = uS, gt = Math.floor(this.zM * this.ee + p7 + a2 * ((1 - 2 * this.zM) * this.ee - p7) / 9), cy.fillText(this.sS[this.zC][0][a2].value.toFixed(this.sS[this.zC][3]), Math
			.floor(this.zL * this.cj), gt), cy.fillText(a2 + 1 + this.sS[this.zC][6] + ".", Math.floor(this.zJ * this.cj), gt), cy.textAlign = sy, cy.fillText(this.sS[this.zC][0][a2].name, Math.floor(this.zK * this.cj), gt)
	}
}

function zj() {
	var gs, gt, ee, zk, zl, zm, zn, zo, zp, cj, zq, zr;
	this.oN = !1, this.c6 = function(j, zs) {
		if (13 <= d && d < 18) return zs ? void(zq = j) : zq !== j ? void 0 : void e.saveString(200, j);
		zs && ((ct.sS[1].n8.oN || ct.sS[2].n8.oN) && ct.oc(), oZ.cv(!1), zq = j, (zr = document.createElement("a")).appendChild(document.createTextNode(zq)), this.oN = !0, zr.title = zq, zr.target = "_blank", zr.href = zq, zr.style.textAlign =
			"center", zr.style.color = d1.d2, zr.style.position = "absolute", zr.style.padding = "0px", zr.style.margin = "0px", this.resize(), document.body.appendChild(zr), aA.cm = !0)
	}, this.kP = function() {
		return !(!this.oN || (document.body.removeChild(zr), this.oN = !1))
	}, this.co = function(dX, dY) {
		return !!this.oN && ((dX < gs || dY < gt || gs + cj < dX || gt + ee < dY || gs + cj - zk < dX && dY < gt + zk) && (aA.cm = !0, this.oN = !1, document.body.removeChild(zr), 0 === aH.ob()) && oZ.cv(!0), !0)
	}, this.resize = function() {
		var ci, zt;
		this.oN && (zo = Math.floor(.8 * (o ? q < p ? .6 : .55 : .4) * cZ), zk = Math.floor(.15 * zo), zl = Math.floor(.35 * zk), zm = Math.floor(.5 * zk), zn = Math.floor(2.5 * zm), ee = zk + zl + 3 * zm, ci = cc + Math.floor(zl / kS) + cd, zp =
			Math.floor(kS * ck.measureText(zq, ci)), zt = cj = (zo < zp ? zp : zo) + 2 * zn, cj = Math.min(cj, p - 2 * (o ? 2 : 1) * kI), ci = cc + Math.floor(cj / zt * zl / kS) + cd, zp = Math.floor(kS * ck.measureText(zq, ci)), gs = Math
			.floor((h0 - cj) / 2), gt = Math.floor((cs - ee) / 2), zr.style.font = ci, zr.style.top = Math.floor((gt + 1.4 * zm + zk) / kS) + "px", zr.style.left = Math.floor((gs + (cj - zp) / 2) / kS) + "px")
	}, this.cx = function() {
		this.oN && (cy.fillStyle = d1.i6, cy.fillRect(gs, gt + zk, cj, ee - zk), cy.fillStyle = d1.io, cy.fillRect(gs, gt, cj, zk), cy.fillStyle = d1.d2, cy.lineWidth = p8, cy.strokeStyle = d1.d2, cy.strokeRect(gs, gt, cj, ee), cy.fillRect(gs,
			gt + zk, cj, p8), cy.font = cc + Math.floor(.48 * zk) + cd, cy.textAlign = d0, cy.textBaseline = cz, cy.fillText("You are leaving Territorial.io!", Math.floor(gs + (cj - .5 * zk) / 2), Math.floor(gt + .55 * zk)), c9.sQ(Math
			.floor(gs + cj - .8 * zk), Math.floor(gt + .25 * zk), Math.floor(.5 * zk)), cy.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function zu() {
	var lp, s8, gs = [0, 0, 0, 0, 0],
		gt = [0, 0, 0, 0, 0],
		hj = [1, 1, 1, 1, 1],
		aF = [!0, !0, !0, !0, !0],
		fA = (this.aW = [!0, !0, !0, !0, !0], null);
	this.zv = function(rV, zw) {
		fA = rV, aF = zw, s8 = [qD.zx, qD.zy, qD.zz, qD.a00, qD.a01], this.c6()
	}, this.c6 = function() {
		if (cf.cg()) {
			var a2, mL = Math.floor((o ? .261 : .195) * cZ),
				mM = Math.floor(.9 * mL),
				tg = Math.floor(.17 * mM);
			if (lp = o ? 2 * kI : kI, hj[0] = mL / fA[0].width, hj[1] = mM / fA[1].width, hj[2] = tg / fA[2].height, hj[3] = tg / fA[3].height, hj[4] = tg / fA[4].height, hj[3] *= 1.07, gs[0] = lp, gs[1] = lp, gs[2] = lp, gs[3] = lp, gs[4] = Math
				.floor(2 * lp + hj[3] * fA[3].width), gt[0] = lp, gt[1] = gt[0] + lp + hj[0] * fA[0].height, gt[2] = gt[1] + lp + hj[1] * fA[1].height, gt[3] = gt[2] + lp + hj[2] * fA[2].height, gt[4] = gt[3], !aF[0])
				for (a2 = 0; a2 < 5; a2++) gt[a2] -= hj[0] * fA[0].height + lp;
			if (!aF[1])
				for (a2 = 2; a2 < 5; a2++) gt[a2] -= hj[1] * fA[1].height + lp
		}
	}, this.oN = function() {
		return !(7 === aH.ob() && o)
	}, this.co = function(dX, dY, zs) {
		if (fA && this.oN())
			for (var a2 = aF.length - 1; 0 <= a2; a2--)
				if (aF[a2] && this.aW[a2] && gs[a2] < dX && gt[a2] < dY && dX < gs[a2] + hj[a2] * fA[a2].width && dY < gt[a2] + hj[a2] * fA[a2].height) return oY.c6(s8[a2], zs), !0;
		return !1
	}, this.cx = function() {
		if (fA && this.oN()) {
			var a2;
			for (cy.imageSmoothingEnabled = !0, a2 = 0; a2 < 5; a2++) aF[a2] && this.aW[a2] && (cy.setTransform(hj[a2], 0, 0, hj[a2], gs[a2], gt[a2]), cy.drawImage(fA[a2], 0, 0));
			cy.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function r9() {
	this.id = 0, this.tr = 0;
	var a02 = null,
		a03 = !1;
	this.c6 = function() {
		var s5, aS, aU;
		e ? this.id = 1 : b ? this.id = 2 : (function() {
			try {
				if (!(a02 = window.localStorage)) return a02 = null;
				a02.setItem("testLS", "1"), a02.removeItem("testLS")
			} catch (error) {
				return a02 = null
			}
			a03 = !0
		}(), s5 = this, a03 && (aS = Number(a02.getItem("zt0")), aU = Number(a02.getItem("zt1")), aS && aU ? (s5.id = aS, s5.tr = Math.floor(Date.now() / 3e5) - aU) : (a02.setItem("zt0", "" + Math.floor(3 + Math.random() * (Math.pow(2,
			20) - 3))), a02.setItem("zt1", "" + Math.floor(Date.now() / 3e5)))))
	}
}

function qU() {
	var zC, a08, a09;

	function a0E(a2) {
		var button = q0.rJ[a2],
			gs = button.gs,
			gt = button.gt,
			cj = button.cj,
			ee = button.ee;
		cy.fillStyle = button.a0C, cy.fillRect(gs, gt, cj, ee), a2 === zC && (cy.fillStyle = a09, cy.fillRect(gs, gt, cj, ee)), cy.lineWidth = p8, cy.strokeStyle = a08, cy.strokeRect(gs, gt, cj, ee),
			function(button) {
				var gs = button.gs,
					gt = button.gt,
					cj = button.cj,
					ee = button.ee;
				cy.textAlign = d0, cy.textBaseline = cz, cy.font = button.font, cy.fillStyle = a08, cy.fillText(button.tn, Math.floor(gs + cj / 2), Math.floor(gt + ee / 2 + .1 * button.ch))
			}(button)
	}
	this.cj = 0, this.ee = 0, this.gt = 0, this.lp = 0, this.c6 = function() {
		zC = -1, a08 = d1.d2, a09 = "rgba(255,255,255,0.16)", this.rJ = new Array(7), this.ee = Math.floor((o ? .123 : .093) * cZ), this.cj = Math.floor((o ? 3.96 : 4.2) * this.ee), this.lp = Math.floor(.025 * this.cj);
		var a0A = Math.floor(.26 * this.ee),
			a0B = cc + a0A + cd;
		this.rJ[0] = {
			gs: 0,
			gt: 0,
			cj: Math.floor(.6 * this.cj - this.lp / 2),
			ee: this.ee,
			tn: "Multiplayer",
			font: a0B,
			a0C: "rgba(22,88,22,0.8)",
			ch: a0A
		}, a0A = Math.floor(.18 * this.ee), this.rJ[1] = {
			gs: 0,
			gt: 0,
			cj: this.cj - this.rJ[0].cj - this.lp,
			ee: this.ee,
			tn: "Single Player",
			font: cc + a0A + cd,
			a0C: "rgba(22,88,88,0.8)",
			ch: a0A
		}, this.rJ[2] = {
			gs: 0,
			gt: 0,
			cj: this.cj,
			ee: Math.floor(.3 * this.ee),
			tn: "",
			font: this.rJ[1].font,
			a0C: "rgba(100,0,0,0.8)",
			ch: this.rJ[1].ch
		}, this.rJ[3] = {
			gs: 0,
			gt: 0,
			cj: this.cj,
			ee: this.ee,
			tn: "Back",
			font: this.rJ[0].font,
			a0C: "rgba(0,0,0,0.8)",
			ch: this.rJ[0].ch
		}, this.rJ[4] = {
			gs: 0,
			gt: 0,
			cj: this.cj,
			ee: Math.floor(.3 * this.ee),
			tn: "The game was updated!",
			font: this.rJ[1].font,
			a0C: "rgba(100,0,0,0.8)",
			ch: this.rJ[1].ch
		}, this.rJ[5] = {
			gs: 0,
			gt: 0,
			cj: this.rJ[0].cj,
			ee: Math.floor(.8 * this.ee),
			tn: "Reload",
			font: this.rJ[0].font,
			a0C: "rgba(0,100,0,0.8)",
			ch: this.rJ[0].ch
		}, this.rJ[6] = {
			gs: 0,
			gt: 0,
			cj: this.rJ[1].cj,
			ee: this.rJ[5].ee,
			tn: "Back",
			font: this.rJ[0].font,
			a0C: "rgba(0,0,0,0.8)",
			ch: this.rJ[0].ch
		}, this.xA()
	}, this.xA = function() {
		this.gt = Math.floor(.54 * cs), this.rJ[0].gs = Math.floor(.5 * h0 - .5 * this.cj), this.rJ[1].gs = this.rJ[0].gs + this.rJ[0].cj + this.lp, this.rJ[2].gs = this.rJ[3].gs = this.rJ[0].gs, this.rJ[4].gs = this.rJ[5].gs = this.rJ[0].gs,
			this.rJ[6].gs = this.rJ[1].gs, this.rJ[0].gt = Math.floor(.54 * cs), this.rJ[1].gt = this.rJ[0].gt, this.rJ[2].gt = Math.floor((cs - this.rJ[2].ee - this.rJ[3].ee - this.lp) / 2), this.rJ[3].gt = this.rJ[2].gt + this.rJ[2].ee + this
			.lp, this.rJ[4].gt = Math.floor((cs - this.rJ[4].ee - this.rJ[5].ee - this.lp) / 2), this.rJ[5].gt = this.rJ[6].gt = this.rJ[4].gt + this.rJ[4].ee + this.lp
	}, this.a0D = function() {
		a0E(0), a0E(1)
	}, this.a0F = function() {
		a0E(2), a0E(3)
	}, this.a0G = function() {
		a0E(4), a0E(5), a0E(6)
	}, this.nu = function(gs, gt, gK) {
		var a2 = -1;
		return 0 === aH.ob() ? a2 = this.oX(gs, gt, 0, 2) : 3 === aH.ob() ? a2 = this.oX(gs, gt, 3, 1) : 5 === aH.ob() && (a2 = this.oX(gs, gt, 5, 2)), zC !== a2 && (zC = a2, gK) && (aA.cm = !0), -1 !== a2 && (oP.oQ(), !0)
	}, this.oX = function(gs, gt, a0H, eL) {
		for (var a2 = a0H; a2 < a0H + eL; a2++)
			if (gs >= this.rJ[a2].gs && gt >= this.rJ[a2].gt && gs <= this.rJ[a2].gs + this.rJ[a2].cj && gt <= this.rJ[a2].gt + this.rJ[a2].ee) return a2;
		return -1
	}
}

function a0J() {
	function a0P(rY) {
		return rY < 0 ? 0 : 255 < rY ? 255 : Math.floor(rY)
	}
	this.cj = 0, this.ee = 0, this.oN = !1, this.a0K = 0, this.lp = 0, this.u8 = 0, this.zk = 0, this.a0L = 0, this.a0M = 0, this.a0N = 0, this.colors = null, this.c6 = function() {
		this.oN = !0, this.a0K = 0, this.resize()
	}, this.resize = function() {
		this.oN && (p < 1.4 * q ? this.cj = Math.floor((o ? .94 : .43) * p) : (this.ee = Math.floor((o ? .88 : .43) * q), this.cj = Math.floor(1.4 * this.ee)), this.ee = this.cj / 1.4, this.lp = this.cj / 32, this.zk = Math.floor(.25 * this.ee),
			this.a0L = (this.ee - this.zk - 3 * this.lp) / 2, this.a0M = this.cj - 3 * this.lp - this.a0L, this.a0N = (this.ee - this.zk - 4 * this.lp) / 3)
	}, this.a0O = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var j = t().split("");
		if (j.length < 6)
			for (var cK = 2; 0 <= cK; cK--) this.colors[0][cK] = a0P(256 * Math.random());
		else
			for (var a2 = 2; 0 <= a2; a2--) this.colors[0][a2] = a0P(4 * (10 * parseInt(j[2 * a2]) + parseInt(j[2 * a2 + 1])));
		this.a0Q()
	}, this.a0R = function() {
		return [b7(this.colors[0][0], 4), b7(this.colors[0][1], 4), b7(this.colors[0][2], 4)]
	}, this.nx = function(cp, cq, deltaY) {
		var gx = (h0 - this.cj) / 2;
		cq -= (cs - this.ee) / 2 + this.zk, (cp -= gx) < 0 || cq < 0 || cp >= this.cj || cq >= this.ee - this.zk || (gx = Math.floor(3 * cq / (this.ee - this.zk)), this.colors[this.u8][gx] = a0P(this.colors[this.u8][gx] + (deltaY < 0 ? 1 : -1) *
			Math.max(Math.abs(.05 * deltaY), 1)), aA.cm = !0)
	}, this.co = function(cp, cq) {
		this.a0K = 0;
		var gx = (h0 - this.cj) / 2;
		return cq -= (cs - this.ee) / 2, (cp -= gx) < 0 || cq < 0 || cp >= this.cj - 1 || cq >= this.ee - 1 || cp > this.cj - (.4 * this.zk + 3 * this.lp) && cq < this.zk ? (this.oN = !1, 0 === aH.ob() && oZ.cv(!0), !(aA.cm = !0)) : cp < this
			.lp || cq < this.lp + this.zk || cp >= this.cj || cq >= this.ee - this.lp || (cp < this.lp + this.a0L ? (cq < this.lp + this.zk + this.a0L && 0 !== this.u8 && (this.u8 = 0, aA.cm = !0), !0) : cp < this.lp + this.a0L || (cp -= 2 * this
				.lp + this.a0L, cq < this.lp + this.zk + this.a0N ? (this.a0K = 1, this.colors[this.u8][0] = a0P(256 * cp / this.a0M), aA.cm = !0) : cq < 2 * this.lp + this.zk + this.a0N || (cq < 2 * this.lp + this.zk + 2 * this.a0N ? (this
					.a0K = 2, this.colors[this.u8][1] = a0P(256 * cp / this.a0M), aA.cm = !0) : !(cq >= 3 * this.lp + this.zk + 2 * this.a0N) || (this.a0K = 3, this.colors[this.u8][2] = a0P(256 * cp / this.a0M), aA.cm = !0))))
	}, this.a0Q = function() {
		for (var cK = 2; 0 <= cK; cK--) this.colors[0][cK] = a0P(this.colors[0][cK])
	}, this.a0S = function() {
		for (var aF, j = "", a2 = 0; a2 < 3; a2++)(aF = b7(this.colors[0][a2], 4)) < 10 && (j += "0"), j += aF.toString();
		return j
	}, this.nu = function(cp) {
		0 !== this.a0K && (cp -= 2 * this.lp + this.a0L + (h0 - this.cj) / 2, this.colors[this.u8][this.a0K - 1] = a0P(256 * cp / this.a0M), aA.cm = !0)
	}, this.a0T = function() {
		0 < this.a0K && (this.a0K = 0, this.a0Q(), h6.a0U(), aA.cm = !0)
	}, this.cx = function() {
		var gx = (h0 - this.cj) / 2,
			gy = (cs - this.ee) / 2;
		cy.setTransform(1, 0, 0, 1, gx, gy), cy.fillStyle = d1.i6, cy.fillRect(0, this.zk, this.cj, this.ee - this.zk), cy.fillStyle = d1.iF, cy.fillRect(0, 0, this.cj, this.zk), cy.fillStyle = d1.d2, cy.lineWidth = p8, cy.strokeStyle = d1.d2, cy
			.strokeRect(-1, -1, this.cj + 2, this.ee + 2), cy.fillRect(0, this.zk, this.cj, p8), cy.font = cc + Math.floor(.31 * this.zk) + cd, cy.textBaseline = cz, cy.textAlign = d0, cy.fillText("Choose Your Nation's Color!", Math.floor((this
				.cj - this.lp - .4 * this.zk) / 2), Math.floor(.55 * this.zk)), this.a0V(0), cy.lineWidth = p8, this.a0W(0), this.a0W(1), this.a0W(2), c9.sQ(Math.floor(gx + this.cj - .4 * this.zk - this.lp), Math.floor(gy + .3 * this.zk), Math
				.floor(.4 * this.zk)), cy.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a0V = function(a2) {
		var mv = this.colors[a2][0],
			p4 = this.colors[a2][1],
			a2 = this.colors[a2][2];
		cy.fillStyle = "rgb(" + mv + "," + p4 + "," + a2 + ")", cy.fillRect(this.lp, this.zk + this.lp, this.a0L, 2 * this.a0L + this.lp), cy.lineWidth = p8, cy.strokeStyle = d1.d2, cy.strokeRect(this.lp, this.zk + this.lp, this.a0L, 2 * this
			.a0L + this.lp), cy.fillStyle = mv + p4 + a2 < 306 && p4 < 150 ? d1.d2 : d1.h4, cy.font = cc + Math.floor(.32 * this.a0N) + cd, cy.textAlign = d0, cy.textBaseline = cz, cy.rotate(-Math.PI / 2), cy.fillText("National Color", Math
			.floor(-1.5 * this.lp - this.zk - this.a0L), Math.floor(this.lp + .5 * this.a0L)), cy.rotate(Math.PI / 2)
	}, this.a0W = function(a2) {
		cy.fillStyle = "rgb(" + (0 === a2 ? 150 : 2 === a2 ? 30 : 0) + "," + (1 === a2 ? 130 : 2 === a2 ? 30 : 0) + "," + (2 === a2 ? 220 : 0) + ")", cy.fillRect(2 * this.lp + this.a0L, this.zk + this.lp + a2 * (this.lp + this.a0N), Math.floor(
				this.colors[this.u8][a2] * this.a0M / 255), this.a0N), cy.strokeStyle = d1.d2, cy.strokeRect(2 * this.lp + this.a0L, this.zk + this.lp + a2 * (this.lp + this.a0N), this.a0M, this.a0N), cy.fillStyle = d1.d2, cy.font = cc + Math
			.floor(.32 * this.a0N) + cd, cy.textBaseline = cz, cy.textAlign = sy, cy.fillText((0 === a2 ? "Red: " : 1 === a2 ? "Green: " : "Blue: ") + this.colors[0][a2].toString(), 3 * this.lp + this.a0L, Math.floor(this.zk + this.lp + a2 * (
				this.lp + this.a0N) + .53 * this.a0N))
	}
}

function qV() {
	var a0X, a0Y, ue, up, vm, a0Z, a0a, a0b, a0c, ci, ch, hN, a0d, a0f, a0e = 0;

	function a0i() {
		return fq.a0j[(a0d + a0e) % fq.a0k]
	}

	function a0g() {
		a0d++, hN = aA.aB, fq.x2(a0i(), 4) && (a0f = !0, iy.a0l(a0i()))
	}

	function a0o() {
		0 === a0d ? q2.a0q(3249) : (a0d === fq.a0k - 1 && (a0d = -1), a0g())
	}

	function a0x(gt, wn, a0w) {
		var gx = Math.floor((h0 - up) / 2) + a0a,
			gz = gx + Math.floor(a0w * (up - 2 * a0a));
		cy.lineWidth = wn, cy.beginPath(), cy.moveTo(gx, gt), cy.lineTo(gz, gt), cy.lineTo(Math.floor(gx - a0a + a0w * up), gt + ue), cy.lineTo(gx - a0a, gt + ue), cy.closePath()
	}
	this.c6 = function() {
		aH.setState(6), a0X = 0, a0Y = 1, a0b = "rgba(0,220,120,0.4)", a0c = "rgba(0,0,0,0.8)", this.resize(), aA.cm = !0, a0d = 0, a0f = !1, a0g()
	}, this.resize = function() {
		up = Math.floor((o ? .5 : .25) * cZ), vm = up + 12, ue = Math.floor(.125 * up), a0a = 3 * ue, a0Z = Math.floor(.225 * up), ch = Math.floor(.3 * ue), ci = uU + ch + cd
	}, this.a0h = function(eO) {
		a0e = eO
	}, this.a0m = function(a0n) {
		a0n === a0i() && (a0f = !1, a0o())
	}, this.x4 = function(a0n) {
		6 !== aH.ob() || a0f || (hN = aA.aB, a0f = !0, iy.a0l(a0n))
	}, this.co = function(gs, gt) {
		var gx = Math.floor((h0 - vm) / 2),
			gy = Math.floor(.5 * (cs - cr - ue - a0Z)) + ue + cr;
		return gx < gs && gs < gx + vm && gy < gt && gt < gy + a0Z && (this.a0r(), q0.nu(gs, gt, !1), !0)
	}, this.a0r = function() {
		fq.a0s(3260), py.c6(), aA.cm = !0
	}, this.eu = function() {
		6 === aH.ob() && (a0f ? aA.aB > hN + 12e3 && q2.a0q(3250) : aA.aB > hN + 12e3 && a0o(), 100 < (a0X += .07 * a0Y * (a0X < 16 ? 5 + a0X : 84 < a0X ? 105 - a0X : 17)) ? (a0X = 100, a0Y = -1) : a0X < 0 && (a0X = 0, a0Y = 1), a0b = "rgba(0," +
			Math.floor(190 - 1.9 * a0X) + "," + Math.floor(120 - 1.2 * a0X) + "," + (.4 + .004 * a0X) + ")", a0c = "rgba(0," + Math.floor(1.9 * a0X) + "," + Math.floor(1.2 * a0X) + "," + (.8 - .004 * a0X) + ")", aA.cm = !0)
	}, this.cx = function() {
		var gs = Math.floor((h0 - vm) / 2),
			gt = Math.floor(.5 * (cs - cr - ue - a0Z));
		! function(title, gt, wn, a0w) {
			cy.fillStyle = a0c, a0x(gt, wn, 1), cy.fill(), cy.fillStyle = a0b, a0x(gt, wn, a0w), cy.fill(), cy.strokeStyle = d1.d2, a0x(gt, wn, 1), cy.stroke(),
				function(a0z, gt) {
					cy.textAlign = d0, cy.textBaseline = cz, cy.font = ci, cy.fillStyle = d1.d2, cy.fillText(a0z, Math.floor(.5 * h0), Math.floor(gt + .58 * ue))
				}(title, gt)
		}("Loading", gt, 3, a0X / 100),
		function(gs, gt, cj, ee, tn) {
			cy.fillStyle = d1.i4, cy.fillRect(gs, gt, cj, ee), cy.lineWidth = 3, cy.strokeStyle = d1.d2, cy.strokeRect(gs, gt, cj, ee);
			var bI = Math.floor(.3 * ee);
			cy.textAlign = d0, cy.textBaseline = cz, cy.font = uU + bI + cd, cy.fillStyle = d1.d2, cy.fillText(tn, Math.floor(gs + cj / 2), Math.floor(gt + ee / 2 + .1 * bI))
		}(gs, gt + ue + cr, vm, a0Z, "Back")
	}
}

function qW() {
	var a8;
	this.c6 = function() {
		q0.c6(), oZ.c6(), a8 = 0, a10.c6(), py.c6()
	}, this.setState = function(a11) {
		a8 = a11
	}, this.ob = function() {
		return a8
	}, this.a12 = function() {
		0 === aH.ob() && py.a13(), this.setState(8), q7.a13(), ct.oc(), cu.oN = !1, oY.co(-1e3, -1e3)
	}, this.oc = function(ng) {
		if (!an.l0) return !1;
		if (!(aA.aB < 400)) {
			if ("Enter" === ng.key || "Escape" === ng.key) {
				if (this.a14()) return 0 === a8 && oZ.cv(!0), !0;
				if ("Enter" === ng.key) {
					if (0 === a8) return py.a15(), !0;
					if (7 === a8) return !0
				}
			}
			return !1
		}
	}, this.a16 = function() {
		return kO.oN || cu.oN || oY.oN || ct.a17()
	}, this.a18 = function() {
		cu.resize(), kO.resize(), oY.resize(), ct.resize()
	}, this.a14 = function() {
		return !!oY.kP() || !(!ct.oc() && (cu.oN ? cu.oN = !1 : !kO.oN || (kO.kP(), 0)))
	}, this.aI = function() {
		aA.cm = !0, 8 === a8 ? hZ ? gG.oe(!1) : mE.oN ? mE.oh() : kO.oN ? kO.kP() : c9.oh() : 7 === a8 ? q7.a19() : 6 === a8 ? q1.a0r() : 3 === a8 ? q2.a1A(0, 0) : 2 === a8 ? fd.a1A() : 0 !== a8 || this.a14() || a7(11)
	}, this.co = function(gs, gt) {
		if (!a10.co(gs, gt) && an.l0 && !oY.co(gs, gt) && !kO.co(gs, gt) && !(6 === a8 && q1.co(gs, gt) || 2 === a8 && fd.co(gs, gt) || h6.co(gs, gt) || cu.co(gs, gt) || a1B.co(gs, gt, !0) || ct.co(gs, gt, !0))) {
			if (oP.co(gs, gt), 0 === a8) py.co(gs, gt);
			else if (3 === a8) q2.co(gs, gt);
			else if (5 === a8) q3.co(gs, gt);
			else if (7 === a8 && q7.co(gs, gt)) return;
			zb.co(gs, gt)
		}
	}, this.nu = function(gs, gt) {
		if (h6.nu(gs, gt), !oP.x0) {
			if (a10.nu(gs, gt)) return void oP.oQ();
			if (0 <= ct.oX(gs, gt)) return void oP.oQ();
			if (ct.nu(gs, gt)) return void oP.oQ();
			if (2 === a8 && fd.nu(gs, gt)) return void oP.oQ();
			if (q0.nu(gs, gt, !0)) return
		}
		oP.nu(gs, gt)
	}, this.click = function(gs, gt) {
		oP.oR(), ct.a0T() || a1B.co(gs, gt, !1) || ct.co(gs, gt, !1)
	}, this.nx = function(gs, gt, deltaY) {
		ct.sS[1].n8.oN || (ct.sS[2].n8.oN ? ct.sS[2].n8.nx(gs, gt, deltaY) : 0 === a8 && oP.nx(gs, deltaY))
	}, this.a1C = function() {
		q0.xA(), ct.xA(), 0 === a8 ? (oZ.resize(), oP.xA()) : 7 === a8 && q7.resize(), aA.cm = !0
	}, this.cx = function() {
		var gt, p3, ti, gs;
		8 !== a8 && 10 !== a8 && (cy.imageSmoothingEnabled = !0, this.mA(), oP.cx(), pz.cx(), gt = Math.floor(.3 * cs), p3 = cf.rW("territorial.io"), ti = (ti = 1.75 * cs / p3.width) * p3.width < .98 * h0 ? .98 * h0 / p3.width : ti, cy
			.globalAlpha = .15, gs = Math.floor(.5 * (h0 - ti * p3.width)), gs = Math.floor(gs / ti), gt = Math.floor(gt - .5 * p3.height * ti), gt = Math.floor(gt / ti), cy.setTransform(ti, 0, 0, ti, gs, gt), cy.drawImage(p3, gs, gt), cy
			.setTransform(1, 0, 0, 1, 0, 0), cy.globalAlpha = 1, a1B.cx(), zb.cx(), ct.cx(), h6.cx(), 0 === a8 ? py.cx() : 2 === a8 ? fd.cx() : 3 === a8 ? q2.cx() : 5 === a8 ? q3.cx() : 6 === a8 ? q1.cx() : 7 === a8 && q7.cx(), ct.a1E(), a10
			.cx(), cu.cx(), oY.cx(), kO.cx())
	}, this.mA = function() {
		var a1G, a1F;
		an.l0 ? (a1F = p / an.ao, a1G = q / an.ap, cy.setTransform(a1F = a1G < a1F ? a1F : a1G, 0, 0, a1F, Math.floor((p - a1F * an.ao) / 2), Math.floor((q - a1F * an.ap) / 2)), cy.drawImage(an.l2, 0, 0), cy.setTransform(1, 0, 0, 1, 0, 0), cy
			.fillStyle = d1.i4) : cy.fillStyle = d1.h4, cy.fillRect(0, 0, p, q)
	}
}

function a1H() {
	this.cj = 0, this.ee = 0, this.a1I = 0, this.oN = !1, this.tx = 10, this.bQ = .12, this.a0K = !1, this.a1J = !1, this.a1K = !1, this.c6 = function() {
		this.oN = !0, this.resize(), this.a0K = !1
	}, this.resize = function() {
		this.oN && (this.cj = 1.15 * p < q ? Math.floor((o ? .94 : .69) * p) : Math.floor((o ? .94 : .69) * q / 1.15), this.cj -= this.cj % this.tx, this.ee = +this.cj, this.a1I = Math.floor(.15 * this.cj))
	}, this.co = function(cp, cq, a8) {
		var gx = (h0 - this.cj) / 2;
		return cq -= (cs - this.ee - this.a1I) / 2, (cp -= gx) < 0 || cq < 0 || cp >= this.cj - 1 || cq >= this.ee + this.a1I - 1 || cp >= this.cj - this.a1I && cq < this.a1I ? (0 === a8 && (this.oN = !1, 0 === aH.ob() && oZ.cv(!0), aA.cm = !0),
			!1) : (cq < this.a1I || (cp = (cp = b7(cp, gx = Math.floor(this.cj / this.tx)) + this.tx * b7(cq - this.a1I, gx)) < 0 ? 0 : cp >= a3.u1 ? a3.u1 - 1 : cp, (0 === a8 || 1 === a8 && !a3.a5[cp] || 2 === a8 && a3.a5[cp]) && (this
			.a1J = !a3.a5[cp], this.a0K = !0, this.a1K = !0, a3.a5[cp] = !a3.a5[cp], a3.uI(), aA.cm = !0)), !0)
	}, this.nu = function(cp, cq) {
		this.a0K && this.co(cp, cq, this.a1J ? 1 : 2)
	}, this.a0T = function() {
		this.a1K && (a1(), this.a1K = !1), this.a1K = !1, this.a0K = !1
	}, this.cx = function() {
		cy.imageSmoothingEnabled = !0;
		for (var gx = (h0 - this.cj) / 2, gy = (cs - this.ee - this.a1I) / 2, mL = (cy.setTransform(1, 0, 0, 1, gx, gy), cy.fillStyle = d1.i6, cy.fillRect(0, this.a1I, this.cj, this.ee), cy.fillStyle = d1.iJ, cy.fillRect(0, 0, this.cj, this.a1I),
					cy.fillStyle = d1.d2, cy.lineWidth = p8, cy.strokeStyle = d1.d2, cy.strokeRect(-1, -1, this.cj + 2, this.ee + this.a1I + 2), cy.fillRect(0, this.a1I - p8, this.cj, p8), cy.font = cc + Math.floor(.44 * this.a1I) + cd, cy
					.textAlign = d0, cy.textBaseline = cz, cy.fillText("Select Your Emojis!", Math.floor((this.cj - .725 * this.a1I) / 2), Math.floor(.55 * this.a1I)), Math.floor(this.cj / this.tx)), zoom = (mL - 2 * this.bQ * mL) / a3.cj, a2 =
				a3.u1 - 1; 0 <= a2; a2--) cy.setTransform(1, 0, 0, 1, Math.floor(gx + a2 % this.tx * mL), Math.floor(gy + this.a1I + b7(a2, this.tx) * mL)), a3.a5[a2] && (cy.fillStyle = d1.iL, cy.fillRect(0, 0, mL, mL)), cy.setTransform(zoom, 0,
			0, zoom, Math.floor(gx + a2 % this.tx * mL + this.bQ * mL), Math.floor(gy + this.a1I + b7(a2, this.tx) * mL + this.bQ * mL)), cy.drawImage(a3.rV[a2], 0, 0);
		c9.sQ(Math.floor(gx + this.cj - .725 * this.a1I), Math.floor(gy + .275 * this.a1I), Math.floor(.45 * this.a1I)), cy.setTransform(1, 0, 0, 1, 0, 0), cy.imageSmoothingEnabled = !1
	}
}

function qX() {
	var a1L, aR, a1M;

	function uC() {
		var a8;
		0 === (a8 = aH.ob()) ? py.a13() : 6 === a8 ? fq.a0s(a1L) : 7 === a8 ? (q7.a13(), fq.close(fq.a1N, 3240)) : 8 === a8 && (pv(!0), py.a13()), aH.setState(3), q0.xA(), a1Q(a1L), aA.cm = !0
	}

	function a1O(ng) {
		for (var a2 = aR.length - 1; 0 <= a2; a2--)
			if (ng === aR[a2].code) return aR[a2].j;
		return a1M + ng
	}

	function a1Q(ng) {
		q0.rJ[2].tn = a1O(ng)
	}
	this.kj = function() {
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
		}), a1M = "Error "
	}, this.c6 = function(a0n, ng) {
		a1L = ng;
		var a8 = aH.ob();
		if (6 === a8) {
			if (4211 === ng) return void q3.c6(0, 0);
			if (4214 !== ng) return void q1.a0m(a0n)
		} else {
			if (7 !== a8) return 8 === a8 ? void(a0n !== fq.oC || fc || fm.t3(a1O(ng))) : void 0;
			if (a0n !== fq.a1N) return
		}
		uC()
	}, this.a0q = function(ng) {
		a1L = ng, 8 === aH.ob() ? fm.t3(a1O(ng)) : uC()
	}, this.resize = function() {
		a1Q(a1L)
	}, this.co = function(gs, gt) {
		3 === q0.oX(gs, gt, 3, 1) && this.a1A(gs, gt)
	}, this.a1A = function(gs, gt) {
		py.c6(), q0.nu(gs, gt, !1), aA.cm = !0
	}, this.cx = function() {
		q0.a0F()
	}
}

function qY() {
	var input, color;
	this.oN = !1, this.kN = !1, this.c6 = function() {
		color = d1.i6, (input = document.createElement("INPUT")).setAttribute("type", "text"), input.setAttribute("name", "username"), input.setAttribute("id", "usernameField"), input.setAttribute("autocomplete", "username"), input.value = "",
			input.style.textAlign = "center", input.style.backgroundColor = color, input.style.borderRadius = "0", input.style.color = d1.d2, input.style.position = "absolute", input.readOnly = !1, input.addEventListener("input", function() {
				py.a1R()
			}), input.addEventListener("focus", function() {
				oZ.kN = !0
			}), input.addEventListener("blur", function() {
				oZ.kN = !1
			})
	}, this.resize = function() {
		var ch, p6, p7;
		this.oN && (p6 = .3 * (ch = .22 * q0.ee / kS), p7 = p8 / kS, input.style.border = p7.toFixed(2) + "px solid " + d1.d2, input.style.font = cc + ch + cd, input.style.padding = p6.toFixed(2) + "px", input.style.left = (((h0 - q0.cj) / kS -
			p7) / 2).toFixed(2) + "px", input.style.width = (q0.cj / kS - 2 * p6 - p7).toFixed(2) + "px", input.style.top = ((q0.gt - .52 * q0.ee) / kS).toFixed(2) + "px")
	}, this.get = function() {
		return input
	}, this.cv = function(cv) {
		this.oN !== cv && ((this.oN = cv) ? (this.resize(), document.body.appendChild(input)) : (this.kN = !1, document.body.removeChild(input)))
	}, this.oj = function(a1S) {
		a1S && color === d1.i6 || !a1S && color === d1.iV || (color = a1S ? d1.i6 : d1.iV, input.style.backgroundColor = color)
	}
}

function qz() {
	var jm, a1V, a1W, a1X;
	this.a1T = 0, this.a1U = 0, this.c6 = function(bQ) {
		var hj;
		7 === aH.ob() && (jm = bQ, a1V = 0, a1W = aA.aB + 4500, a1X = q6.a1Y(jm) ? 2 : 0, aH.setState(10), cy.imageSmoothingEnabled = !0, aH.mA(), bQ = cf.rW("loading"), hj = 1, hj = (o ? .396 : .25) * cZ / bQ.width, cy.setTransform(hj, 0, 0, hj,
			Math.floor((p - hj * bQ.width) / 2), Math.floor((q - hj * bQ.height) / 2)), cy.drawImage(bQ, 0, 0), cy.setTransform(1, 0, 0, 1, 0, 0))
	}, this.gI = function() {
		0 < a1X && aA.aB > a1W && (a1X--, a1W += 4500, 0 === aA.a1a) && 0 === aA.f9() && (0 === a1X && fq.oC < fq.a1b && (fq.oC += fq.a1c), fq.x2(fq.oC, 5))
	}, this.a1d = function() {
		10 === aH.ob() && 2 <= ++a1V && (q6.a1e(jm), jm = null)
	}
}

function qw() {
	var a1g, a1h, a1i, a1j, a1k, a1l, a1m, a1o, a1p, a1r, a1s, a1t, a1w, a1x, a1y, a1z, a20, a1n = 48,
		a1u = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
		a1v = [0, 0, 0, 0];

	function a23(a2, rV) {
		var a2 = a1m[a2].getContext("2d", {
				alpha: !0
			}),
			zoom = (a2.clearRect(0, 0, a1n, a1n), a1n / rV.width),
			r = a1n / rV.height,
			zoom = r < zoom ? r : zoom;
		a2.imageSmoothingEnabled = !0, a2.setTransform(zoom, 0, 0, zoom, Math.floor((a1n - zoom * rV.width) / 2), Math.floor((a1n - zoom * rV.height) / 2)), a2.drawImage(rV, 0, 0), a2.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a27(fA, mv, a2A, p9) {
		p9.beginPath(), p9.moveTo(fA, fA), p9.lineTo(fA + Math.cos(a2A) * mv, fA + Math.cos(a2A + 1.5 * Math.PI) * mv), p9.stroke()
	}

	function a2O() {
		if (7 === aH.ob()) {
			for (var dD, rV, p9, zoom, r, eO = -1, a2 = a1o.length - 1; 0 <= a2; a2--)
				if (null === a1o[a2].p3) {
					eO = a2;
					break
				} - 1 !== eO && (null !== (dD = a2E(a1o[eO].a2I, a1o[eO].a2J)) ? a1o[eO].p3 = dD : (dD = {
					ao: an.ao,
					ap: an.ap,
					l2: an.l2,
					ky: an.ky,
					kz: an.kz,
					l3: an.l3,
					lQ: an.lQ,
					a2F: an.a2F
				}, an.kj(a1o[eO].a2I, a1o[eO].a2J), an.l1.a2P(), (rV = document.createElement("canvas")).width = 128, rV.height = 128, p9 = rV.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / an.ao) < (r = 128 / an.ap) && (zoom = r), p9.imageSmoothingEnabled = !0, p9.setTransform(zoom, 0, 0, zoom, (128 - zoom * an.ao) / 2, (128 - zoom * an.ap) / 2), p9.drawImage(an.l2, 0, 0), an.ao = dD.ao, an
				.ap = dD.ap, an.l2 = dD.l2, an.ky = dD.ky, an.kz = dD.kz, an.l3 = dD.l3, an.lQ = dD.lQ, an.a2F = dD.a2F, a1o[eO].p3 = rV), aA.cm = !0)
		}
	}

	function a2E(a2I, a2J) {
		for (var a2 = a1o.length - 1; 0 <= a2; a2--)
			if (null !== a1o[a2].p3 && a1o[a2].a2I === a2I && a1o[a2].a2J === a2J) return a1o[a2].p3;
		return null
	}
	this.c6 = function() {
		var a2;
		for (a20 = 0, a1r = -1, aH.setState(7), a1o = [], this.resize(), a1m = new Array(13), a2 = a1m.length; 0 <= a2; a2--) a1m[a2] = document.createElement("canvas"), a1m[a2].width = a1n, a1m[a2].height = a1n;
		for (a2 = 0; a2 < 7; a2++) ! function(tK) {
			var a25, p9 = a1m[tK - 2].getContext("2d", {
					alpha: !0
				}),
				a24 = 1.5 * Math.PI,
				fA = Math.floor(.5 * a1n),
				mv = Math.floor(.48 * a1n);
			p9.lineWidth = 2, p9.strokeStyle = d1.d2, p9.clearRect(0, 0, a1n, a1n);
			for (var a2 = 0; a2 < tK; a2++) a25 = a24 + 2 * Math.PI / tK,
				function(a2, fA, mv, a24, a25, p9) {
					p9.fillStyle = fB.a29[a2], p9.beginPath(), p9.arc(fA, fA, mv, a24, a25), p9.lineTo(fA, fA), p9.fill()
				}(a2 + 1, fA, mv, a24, a25, p9), 0 !== a2 && a27(fA, mv, a24, p9), a24 = a25;
			a27(fA, mv, 1.5 * Math.PI, p9),
				function(fA, mv, p9) {
					p9.beginPath(), p9.arc(fA, fA, mv, 0, 2 * Math.PI), p9.stroke()
				}(fA, mv, p9)
		}(a2 + 2);
		a23(7, cf.get(4)), a23(8, a3.rV[27]), a23(9, a3.rV[46]), a23(10, a3.rV[36]), a23(11, cf.get(19)), a23(12, cf.get(20)), aA.cm = !0
	}, this.a19 = function() {
		this.a13(), fq.a0s(3240), py.c6(), aA.cm = !0
	}, this.a13 = function() {
		a1o = [], a1m = []
	}, this.tv = function() {
		return a1t
	}, this.resize = function() {
		var a2B, ko, w1, a2C;
		for (a1i = [0, 0], a1p = [0, 0, 0, 0], a1z = o ? (a1s = Math.floor(.8 * .4 * cZ), a1t = Math.floor(.56 * a1s), a1p[0] = cr, p < q ? (a1p[1] = a1t + 2 * cr, a1p[2] = p - 3 * a1p[0], a1p[3] = zb.cw() - 3 * cr - a1t, a1x = Math.floor(.95 *
				a1t), a1y = Math.floor((p - a1s - cr) / 2), Math.floor(cr + a1t / 2)) : (a1p[1] = cr, a1p[2] = p - 3 * cr - a1s, a1p[3] = zb.cw() - 2 * cr, a1x = Math.floor(.8 * a1s), a1p[3] - a1t < a1s && (a1x = Math.floor(.8 * (a1p[3] -
				a1t)), a1x = sq(a1t, a1x)), a1y = Math.floor(p - a1s / 2 - cr), sq(a1z = Math.floor(cr + a1t + (a1p[3] - a1t) / 2), Math.floor(a1t + 2 * cr + a1x / 2)))) : (a1s = Math.floor(.2016 * cZ), a1t = Math.floor(.56 * a1s), a1p[2] = Math
				.floor(.5 * p), a1p[3] = Math.floor(.5 * q), a1p[1] = Math.floor(.45 * (q - a1p[3])), a1p[0] = Math.floor((p - a1p[2]) / 2), a1x = Math.floor(.75 * a1t), a1y = Math.floor(p / 2), Math.floor(a1p[1] + a1p[3] + (q - a1p[3] - a1p[
					1]) / 2)), a1w = cc + Math.floor(.65 * a1t / 4) + cd, a2B = ko = 1; a2B * ko < a1o.length;) a1p[3] / (ko + 1) < a1p[2] / (a2B + 1) ? a2B++ : ko++;
		a1g = (w1 = (a1p[2] - (a2B - 1) * cr) / a2B) < (a2C = (a1p[3] - (ko - 1) * cr) / ko) ? w1 : a2C, a1h = Math.floor(a1g), a1l = cc + Math.floor(.5 * a1g / 5) + cd, a1i[0] = a2B, a1i[1] = ko, a1j = a1p[0] + Math.floor((a1p[2] - a1i[0] *
			a1g - (a1i[0] - 1) * cr) / 2), a1k = a1p[1] + Math.floor((a1p[3] - a1i[1] * a1g - (a1i[1] - 1) * cr) / 2)
	}, this.zc = function(a2D, bQ) {
		var a2, r, p3, bI = a1o.length;
		for (a1v = a2D, a2 = 0; a2 < bQ.length; a2++) p3 = a2E(bQ[a2].lQ, bQ[a2].a2F), a1o.push({
			a2G: bQ[a2].id,
			pe: bQ[a2].pe,
			pf: bQ[a2].a2H,
			a2I: bQ[a2].lQ,
			a2J: bQ[a2].a2F,
			joined: bQ[a2].a2K,
			ts: bQ[a2].a0w,
			a2L: bQ[a2].a2L,
			p3: p3,
			a2M: bQ[a2].a2M,
			nV: bQ[a2].nV
		});
		for (a2 = bI - 1; 0 <= a2; a2--) a1o.shift();
		if (-1 !== a1r)
			for (r = a1r, a1r = -1, a2 = a1o.length - 1; 0 <= a2; a2--)
				if (a1o[a2].a2G === r) {
					a1r = r;
					break
				}(a1o.length > a20 || a1o.length < a20) && (a20 = a1o.length, this.resize()), this.a2N(), aA.cm = !0
	}, this.a2N = function() {
		for (var a2 = a1o.length - 1; 0 <= a2; a2--) null === a1o[a2].p3 && setTimeout(a2O, 0)
	}, this.co = function(gs, gt) {
		return 4 * ((gs - a1y) * (gs - a1y) + (gt - a1z) * (gt - a1z)) <= a1x * a1x ? (this.a19(), q0.nu(gs, gt, !1), !0) : function(gs, gt) {
			var eO, cK, gx, gy;
			if (0 !== a1o.length) {
				var a2 = 0;
				for (gy = a1k, cK = 0; cK < a1i[1]; cK++) {
					for (gx = a1j, eO = 0; eO < a1i[0]; eO++) {
						if (gx < gs && gs < gx + a1g && gy < gt && gt < gy + a1g) return iy.a2R(a1o[a2].a2G), a1r = a1o[a2].a2G !== a1r ? a1o[a2].a2G : -1, aA.cm = !0;
						if (++a2 >= a1o.length) return !1;
						gx += a1g + cr
					}
					gy += a1g + cr
				}
			}
			return !1
		}(gs, gt)
	}, this.cx = function() {
		var eO, cK, gs, mv, zoom, a2 = 0,
			gt = a1k;
		if (cy.imageSmoothingEnabled = !0, cy.lineWidth = 3, mv = Math.floor(.5 * a1x), cy.fillStyle = d1.i4, cy.beginPath(), cy.arc(a1y, a1z, mv, 0, 2 * Math.PI), cy.fill(), cy.strokeStyle = d1.d2, cy.beginPath(), cy.arc(a1y, a1z, mv, 0, 2 *
				Math.PI), cy.stroke(), mv = cf.get(0).height, zoom = .6 * a1x / mv, cy.setTransform(zoom, 0, 0, zoom, Math.floor(a1y - .56 * zoom * cf.get(0).width), Math.floor(a1z - .5 * zoom * mv)), cy.drawImage(cf.get(0), 0, 0), cy
			.setTransform(1, 0, 0, 1, 0, 0),
			function() {
				cy.fillStyle = d1.i4, cy.fillRect(p - a1s - cr, cr, a1s, a1t), 0 <= a1r ? (cy.fillStyle = d1.iL, cy.fillRect(p - a1s - cr, cr, a1s, Math.floor(.25 * a1t))) : (cy.fillStyle = d1.ii, cy.fillRect(p - a1s - cr, cr + Math.floor(.25 *
					a1t), a1s, Math.floor(.25 * a1t)));
				cy.strokeStyle = d1.d2, cy.strokeRect(p - a1s - cr, cr, a1s, a1t), cy.fillStyle = d1.d2, cy.font = a1w, cy.textBaseline = cz;
				for (var gt, p6 = Math.floor(.04 * a1s), p7 = Math.floor(.08 * a1t), a2 = 3; 0 <= a2; a2--) gt = Math.floor(cr + (a2 + 1) * (a1t + 2 * p7) / 5 - p7), cy.textAlign = sy, cy.fillText(a1u[a2], p - a1s - cr + p6, gt), cy.textAlign =
					uS, cy.fillText(g6.h9(a1v[a2]), p - cr - p6, gt)
			}(), 0 !== a1o.length)
			for (cK = 0; cK < a1i[1]; cK++) {
				for (gs = a1j, eO = 0; eO < a1i[0]; eO++) {
					if (! function(a2, gs, gt) {
							var zoom, cK, a2V, a2X, a2Y;
							null === a1o[a2].p3 ? (cy.fillStyle = d1.i4, cy.fillRect(gs, gt, a1h, a1h)) : (zoom = a1h / 128, cy.setTransform(zoom, 0, 0, zoom, gs, gt), cy.drawImage(a1o[a2].p3, 0, 0), cy.setTransform(1, 0, 0, 1, 0, 0));
							a1r === a1o[a2].a2G ? (function(gs, gt) {
								var mL = Math.floor(.2 * a1h),
									mM = Math.floor(.3 * mL);
								cy.fillStyle = d1.iO, cy.fillRect(gs + a1h - mL, gt, mL, mL), cy.fillStyle = d1.h4, cy.fillRect(gs + a1h - mL, gt, 2, mL), cy.fillRect(gs + a1h - mL, gt + mL - 2, mL, 2), c9.sQ(gs + a1h - mL + mM, gt + mM,
									mL - 2 * mM), cy.setTransform(1, 0, 0, 1, 0, 0)
							}(gs, gt), cy.lineWidth = 3, cy.fillStyle = d1.iO) : cy.fillStyle = d1.i2;
							if (a2X = Math.floor(a1g / 4), cy.fillRect(gs, gt, a2X, a2X), a2Y = Math.floor(gt + .8 * a1g), cy.fillRect(gs, a2Y, a1h, Math.floor(a1g / 5)), function(a2, gs, gt) {
									var zoom;
									a1o[a2].pf && (a2 = cf.get(4), zoom = .5 * a1g / a2.width, cy.setTransform(zoom, 0, 0, zoom, Math.floor(gs + (a1g - zoom * a2.width) / 2), Math.floor(gt + (a1g - zoom * a2.height) / 2)), cy.globalAlpha = .6, cy
										.drawImage(a2, 0, 0), cy.globalAlpha = 1, cy.setTransform(1, 0, 0, 1, 0, 0))
								}(a2, gs, gt), a1o[a2].a2M) {
								for (cK = a2V = 0; cK < a1o[a2].a2M; cK++) a2V = Math.max(a2V, ck.measureText(a1o[a2].nV[cK], a1l));
								a2V += .05 * a1g, cK = 5 === a1o[a2].a2M, a2X = cK ? gt + a2X : Math.max(gt + .8 * a1g - .11 * a1o[a2].a2M * a1g, gt + a2X), a2Y = cK ? a2Y : Math.min(a2X + .11 * a1o[a2].a2M * a1g + .05 * a1g, a2Y), cy.fillRect(
									gs, a2X, a2V, a2Y - a2X)
							}
							for (cy.font = a1l, cy.textBaseline = cz, cy.textAlign = sy, cy.fillStyle = d1.id, cy.fillText(a1o[a2].joined.toString(), Math.floor(gs + .22 * a1g), Math.floor(gt + .9 * a1g)), cy.fillStyle = d1.d2, cK = 0; cK < a1o[
									a2].a2M; cK++) cy.fillText(a1o[a2].nV[a1o[a2].a2M - cK - 1], Math.floor(gs + .03 * a1g), Math.floor(gt + .77 * a1g - .11 * cK * a1g));
							cy.textAlign = uS, cy.fillStyle = d1.iR, cy.fillText(a1o[a2].ts.toString(), Math.floor(gs + .81 * a1g), Math.floor(gt + .9 * a1g)), cy.strokeStyle = a1r === a1o[a2].a2G ? d1.iM : d1.i9, cy.strokeRect(gs, gt, a1h, a1h),
								a2Y = Math.floor(.16 * a1g), zoom = a2Y / a1n, cy.setTransform(zoom, 0, 0, zoom, Math.floor(gs + .33 * a2Y), Math.floor(gt + .33 * a2Y)), a1m.length > a1o[a2].pe && cy.drawImage(a1m[a1o[a2].pe], 0, 0);
							cy.setTransform(zoom, 0, 0, zoom, Math.floor(gs + .15 * a2Y), Math.floor(gt + a1g - 1.08 * a2Y)), cy.drawImage(a1m[11], 0, 0), cy.setTransform(zoom, 0, 0, zoom, Math.floor(gs + a1g - 1.05 * a2Y), Math.floor(gt + a1g -
								1.15 * a2Y)), cy.drawImage(a1m[12], 0, 0), cy.setTransform(1, 0, 0, 1, 0, 0)
						}(a2, Math.floor(gs), Math.floor(gt)), ++a2 >= a1o.length) return;
					gs += a1g + cr
				}
				gt += a1g + cr
			}
	}
}

function qZ() {
	this.c6 = function(gs, gt) {
		aH.setState(5), q0.nu(gs, gt, !1), aA.cm = !0
	}, this.cx = function() {
		q0.a0G()
	}, this.co = function(gs, gt) {
		var a2 = q0.oX(gs, gt, 5, 2);
		5 === a2 ? aD() : 6 === a2 && (py.c6(), q0.nu(gs, gt, !1), aA.cm = !0)
	}
}

function qa() {
	var a2b = [0, 0, 0, 0];

	function zi(gs, gt, mJ, a2u) {
		cy.fillStyle = d1.d2;
		var mL = sq(2, Math.floor((a2u ? .5 : .35) * mJ)),
			tg = (mL -= mL % 2, sq(2, Math.floor(.1 * mJ))),
			mJ = (tg -= tg % 2, Math.floor((mJ - mL) / 2)),
			gz = Math.floor(mJ + (mL - tg) / 2);
		cy.fillRect(gs + mJ, gt + gz, mL, tg), a2u && cy.fillRect(gs + gz, gt + mJ, tg, mL)
	}

	function a0v(gs, gt, cj, ee, rY, cX, tn, eI, tK) {
		cy.fillStyle = rY, cy.fillRect(gs, gt, cj, ee), 0 <= eI && function(gs, gt, cj, ee, eI) {
			cy.fillStyle = "rgba(" + 22 * eI + "," + (110 - 22 * eI) + ",0,0.75)", cy.fillRect(gs, gt, (1 + eI) * cj / 6, ee)
		}(gs, gt, cj, ee, eI), 0 < tK && function(gs, gt, cj, ee, tK) {
			cy.fillStyle = "rgba(255,255,255,0.3)", cy.fillRect(gs, gt, tK * cj / bN, ee)
		}(gs, gt, cj, ee, tK), cy.strokeStyle = d1.d2, cy.strokeRect(gs, gt, cj, ee), 0 !== cX && (cy.fillStyle = d1.d2, cy.font = cc + Math.floor(cX * ee) + cd, cy.fillText(tn, Math.floor(gs + cj / 2), Math.floor(gt + .52 * ee)))
	}
	this.fe = [{
		bS: 0,
		tK: 512
	}], this.c6 = function() {
		q8.oN = !1, aH.setState(2), this.resize(), aA.cm = !0
	}, this.a13 = function() {}, this.resize = function() {
		a2b[2] = Math.floor((o ? .49 : .4) * cZ), a2b[1] = Math.floor((q - a2b[2] / 6 - this.fe.length * (cr + a2b[2] / 10)) / 2), a2b[0] = Math.floor((p - a2b[2]) / 2), q8.oN && q8.resize()
	}, this.a2c = function(pe) {
		var a2;
		if (6 < pe) this.fe = [{
			bS: 0,
			tK: 512
		}];
		else {
			for (this.fe = [], a2 = 0; a2 < pe + 2; a2++) this.fe.push({
				bS: 0,
				tK: 0
			});
			this.a2d()
		}
	}, this.a2e = function(a2f, a2g) {
		for (var bI = a2f.length, a2 = 0; a2 < bI; a2++) this.fe[a2].bS = a2f[a2], this.fe[a2].tK = a2g[a2]
	}, this.a2h = function(p4) {
		var a2, bI;
		if (1 === p4.mP.length)
			for (bI = this.fe.length, p4.a2f = new Array(bI), p4.a2g = new Array(bI), a2 = 0; a2 < bI; a2++) p4.a2f[a2] = this.fe[a2].bS, p4.a2g[a2] = this.fe[a2].tK
	}, this.a1A = function() {
		aA.cm = !0, q8.oN ? q8.oN = !1 : (this.a13(), py.c6())
	}, this.pi = function() {
		var a2, tK;
		if (fW.fX) return fW.fY.a2i;
		for (tK = 0, a2 = this.fe.length - 1; 0 <= a2; a2--) tK += this.fe[a2].tK;
		return tK
	}, this.nu = function(gs, gt) {
		return !(!q8.oN || !q8.nu(gs, gt)) || -1 !== this.oX(gs, gt)
	}, this.a2j = function() {
		fq.oC = 0, fq.x2(0, 3) && iy.a2k(0)
	}, this.a2l = function() {
		var eO;
		this.a2j(), aH.a12(), fW.fX ? fW.a2m() : (eO = (eO = this.fe.length - 2) < 0 ? 7 : eO, pb(Math.floor(16384 * Math.random()), 0, [{
			name: py.a2n(),
			a2o: ct.sS[2].n8.a0R(),
			a2p: 0
		}], eO, !1, !1))
	}, this.co = function(gs, gt) {
		if (cu.oN || ct.sS[1].n8.oN || ct.sS[2].n8.oN) return !1;
		if (q8.oN && !fW.fX) return q8.co(gs, gt);
		var a2, eO, max, mL, gt = this.oX(gs, gt);
		if (-1 === gt) return !1;
		if (0 === gt) this.a1A();
		else if (1 === gt) fW.fX ? (fW.oQ(), aA.cm = !0) : q8.show();
		else if (100 === gt) oV.a2q();
		else if (2 === gt) this.a13(), this.a2l();
		else {
			if (fW.fX) return !1;
			if (27 === gt) this.fe.length < 8 && (this.fe.push({
				bS: 0,
				tK: bN
			}), this.a2d(), this.resize(), aA.cm = !0);
			else if (a2 = Math.floor((gt - 3) / 3), gt % 3 == 0) 1 < this.fe.length && (this.fe.splice(a2, 1), this.resize(), aA.cm = !0);
			else if (mL = (a2b[2] - a2b[2] / 10 - 2 * cr) / 2, gt % 3 == 1) 0 === a2 && 1 === this.fe[a2].tK || (gs < a2b[0] + a2b[2] - 1.5 * mL - cr ? this.fe[a2].bS-- : this.fe[a2].bS++, this.fe[a2].bS < 0 ? this.fe[a2].bS = 5 : 5 < this.fe[a2]
				.bS && (this.fe[a2].bS = 0), aA.cm = !0);
			else {
				for (aA.cm = !0, gt = (gs - (a2b[0] + a2b[2] - mL)) / mL - .5, gt *= gt < 0 ? -gt : gt, gt = 0 === (gt = Math.floor(gt * bN)) ? 1 : gt, max = bN, eO = this.fe.length - 1; 0 <= eO; eO--) a2 !== eO && (max -= this.fe[eO].tK);
				if (gt < 0) {
					if (1 === this.fe[a2].tK) return this.fe[a2].tK = max, !0
				} else if (this.fe[a2].tK === max) return this.fe[a2].tK = 1, !0;
				this.fe[a2].tK += gt, this.fe[a2].tK < 1 ? this.fe[a2].tK = 1 : this.fe[a2].tK > max && (this.fe[a2].tK = max)
			}
		}
		return !0
	}, this.a2d = function() {
		for (var tK = Math.floor(bN / this.fe.length), a2r = bN % this.fe.length, a2 = this.fe.length - 1; 0 <= a2; a2--) this.fe[a2].tK = tK;
		this.fe[0].tK += a2r
	}, this.oX = function(gs, gt) {
		var mL = (a2b[2] - 3 * cr) / 4,
			tg = a2b[2] / 6;
		if (gs < a2b[0] || gt < a2b[1] || a2b[0] + a2b[2] <= gs) return -1;
		if (gt < a2b[1] + tg) return gs < a2b[0] + mL ? 0 : gs < a2b[0] + mL + cr ? -1 : gs < a2b[0] + 2 * mL + cr ? 100 : gs < a2b[0] + 2 * (mL + cr) ? -1 : gs < a2b[0] + 3 * mL + 2 * cr ? 1 : gs < a2b[0] + 3 * (mL + cr) ? -1 : 2;
		for (var gy, th = a2b[2] / 10, mL = (a2b[2] - th - 2 * cr) / 2, a2 = 0; a2 < this.fe.length; a2++) {
			if (gt < (gy = a2b[1] + tg + cr + a2 * (th + cr))) return -1;
			if (!(gy + th < gt)) return gs < a2b[0] + th ? 3 + 3 * a2 : gs < a2b[0] + th + cr ? -1 : gs < a2b[0] + a2b[2] - mL - cr ? 4 + 3 * a2 : gs < a2b[0] + a2b[2] - mL ? -1 : 5 + 3 * a2
		}
		return !(this.fe.length < 8) || gt < (gy = a2b[1] + tg + cr + this.fe.length * (th + cr)) || gy + th < gt || a2b[0] + th < gs ? -1 : 27
	}, this.cx = function() {
		cy.lineWidth = p8, cy.textAlign = d0, cy.textBaseline = cz;
		var mL = (a2b[2] - 3 * cr) / 4,
			tg = a2b[2] / 6;
		if (a0v(a2b[0], a2b[1], mL, tg, "rgba(128,0,0,0.75)", .34, "Back", -1, -1), a0v(a2b[0] + mL + cr, a2b[1], mL, tg, "rgba(128,0,128,0.75)", .31, "Custom", -1, -1), a0v(a2b[0] + 2 * (mL + cr), a2b[1], mL, tg, "rgba(" + (fW.fX ? 128 : 0) +
				",128,128,0.75)", .34, fW.fX ? "Reset" : "Maps", -1, -1), a0v(a2b[0] + a2b[2] - mL, a2b[1], mL, tg, "rgba(0,128,0,0.75)", .34, "Start", -1, -1), !fW.fX) {
			for (var gy, th = a2b[2] / 10, mL = (a2b[2] - th - 2 * cr) / 2, a2 = 0; a2 < this.fe.length; a2++) gy = a2b[1] + tg + cr + a2 * (th + cr), a0v(a2b[0], gy, th, th, 1 < this.fe.length ? "rgba(128,0,0,0.75)" : "rgba(90,90,90,0.75)", 0,
				null, -1), 1 < this.fe.length && zi(a2b[0], gy, th, !1), a0v(a2b[0] + th + cr, gy, mL, th, d1.i6, .4, this.a2s(a2), this.fe[a2].bS, -1), a0v(a2b[0] + a2b[2] - mL, gy, mL, th, d1.i6, .4, this.a2t(a2), -1, this.fe[a2].tK);
			this.fe.length < 8 && (gy = a2b[1] + tg + cr + this.fe.length * (th + cr), a0v(a2b[0], gy, th, th, "rgba(0,128,20,0.75)", 0, null, -1, -1), zi(a2b[0], gy, th, !0)), q8.oN && q8.cx()
		}
	}, this.a2s = function(a2) {
		return 0 === a2 && 1 === this.fe[a2].tK ? "You" : ev.fR[this.fe[a2].bS]
	}, this.a2t = function(a2) {
		return 1 === this.fe[a2].tK ? "1 Player" : this.fe[a2].tK + " Players"
	}
}

function ua() {
	this.bI = 0, this.cj = 0, this.sS = null, this.c6 = function() {
		this.sS = [], this.sS.push({
			gs: 0,
			gt: 0,
			rT: o,
			n8: null
		}), this.sS.push({
			gs: 0,
			gt: 0,
			rT: !1,
			n8: new a1H
		}), this.sS.push({
			gs: 0,
			gt: 0,
			rT: !1,
			n8: new a0J
		}), this.sS[2].n8.a0O(), this.bI = this.sS.length, this.cj = 0
	}, this.xA = function() {
		this.cj = Math.floor((o ? .063 : .04) * cZ), this.cj += 4 - this.cj % 4, this.sS[0].gs = cr, this.sS[0].gt = cs - this.cj - cr;
		for (var a2 = 1; a2 < this.bI; a2++) this.sS[a2].gs = this.sS[a2 - 1].gs + Math.floor(o ? 1.5 * cr : 3.7 * cr) + this.cj, this.sS[a2].gt = this.sS[0].gt
	}, this.oX = function(cp, cq) {
		if (cf.cg())
			for (var a2 = this.bI - 1; 0 <= a2; a2--)
				if (cp >= this.sS[a2].gs && cq >= this.sS[a2].gt && cp < this.sS[a2].gs + this.cj && cq < this.sS[a2].gt + this.cj) return a2;
		return -1
	}, this.a17 = function() {
		for (var a2 = 2; 1 <= a2; a2--)
			if (this.sS[a2].n8.oN) return !0;
		return !1
	}, this.resize = function() {
		for (var a2 = 2; 1 <= a2; a2--) this.sS[a2].n8.resize()
	}, this.oc = function() {
		return this.sS[1].n8.oN ? (this.sS[1].n8.co(-5e3, -5e3, 0), !0) : !!this.sS[2].n8.oN && (this.sS[2].n8.co(-5e3, -5e3), !0)
	}, this.co = function(cp, cq, zs) {
		if (zs) {
			if (this.sS[1].n8.oN) return this.sS[1].n8.co(cp, cq, 0), !0;
			if (this.sS[2].n8.oN) return this.sS[2].n8.co(cp, cq), !0
		}
		cp = this.oX(cp, cq);
		if (zs) {
			if (0 === cp) return this.sS[cp].rT = !this.sS[cp].rT, o = this.sS[cp].rT, oq.a2x(0), z(this.sS[0].rT, !1), !0;
			if (1 <= cp && cp < 3) return this.sS[cp].n8.c6(), oZ.cv(!1), aA.cm = !0
		}
		return !1
	}, this.nu = function(cp, cq) {
		return this.sS[1].n8.oN ? (this.sS[1].n8.nu(cp, cq), !0) : !!this.sS[2].n8.oN && (this.sS[2].n8.nu(cp), !0)
	}, this.a0T = function() {
		for (var a2 = 2; 1 <= a2; a2--)
			if (this.sS[a2].n8.oN) return this.sS[a2].n8.a0T(), !0;
		return !1
	}, this.cx = function() {
		if (cf.cg()) {
			cy.imageSmoothingEnabled = !0;
			for (var a2 = this.bI - 1; 0 <= a2; a2--) cy.fillStyle = this.sS[a2].rT ? d1.iN : d1.i6, cy.fillRect(this.sS[a2].gs, this.sS[a2].gt, this.cj, this.cj), 0 === a2 ? this.a2y(a2, cf.get(15)) : 1 === a2 ? this.a2z() : 2 === a2 && this
				.a30(), cy.setTransform(1, 0, 0, 1, 0, 0), cy.lineWidth = p8, cy.strokeStyle = d1.d2, cy.strokeRect(this.sS[a2].gs, this.sS[a2].gt, this.cj, this.cj);
			cy.imageSmoothingEnabled = !1
		}
	}, this.a2y = function(a2, rV) {
		var lp = .08 * this.cj,
			zoom = (this.cj - 2 * lp) / rV.width;
		cy.setTransform(zoom, 0, 0, zoom, this.sS[a2].gs + lp, this.sS[a2].gt + (this.cj - zoom * rV.height) / 2), cy.drawImage(rV, 0, 0)
	}, this.a2z = function() {
		var lp = .06 * this.cj,
			zoom = (this.cj - 2 * lp) / a3.cj;
		cy.setTransform(zoom, 0, 0, zoom, this.sS[1].gs + lp, this.sS[1].gt + lp), cy.drawImage(a3.rV[4], 0, 0)
	}, this.a30 = function() {
		cy.setTransform(1, 0, 0, 1, this.sS[2].gs, this.sS[2].gt);
		for (var bS = this.cj / 4, gs = 3; 0 <= gs; gs--)
			for (var gt = 3; 0 <= gt; gt--) {
				var mv = Math.floor(367 * (gs + 1) * (gt + 1) % 256),
					p4 = Math.floor(687 * (gs + 1) * (gt + 1) % 256),
					cK = Math.floor(651 * (gs + 1) * (gt + 1) % 256);
				cy.fillStyle = "rgb(" + mv + "," + p4 + "," + cK + ")", cy.fillRect(gs * bS, gt * bS, bS, bS)
			}
	}, this.a1E = function() {
		for (var a2 = 2; 1 <= a2; a2--)
			if (this.sS[a2].n8.oN) return void this.sS[a2].n8.cx()
	}
}

function qb() {
	var username, a31;

	function a39() {
		var s8;
		return 0 === username.indexOf("vote ") && 2 === (s8 = username.split(" ")).length ? (py.a32 = s8[1], a3D(), fq.x2(0, 7) && iy.a3E(0), q2.a0q(3252), 1) : void 0
	}

	function a3D() {
		username = a(), oZ.get().value = username, oZ.oj(!0)
	}

	function a38() {
		var max, a3F;
		if (0 === username.indexOf("account ")) return 2 !== (a3F = username.split(" ")).length || (max = Math.floor(Math.pow(2, 48)), (a3F = parseInt(k.l(a3F[1]))) <= 0) || max <= a3F ? (a3D(), q2.a0q(3266)) : m(a3F) ? (a3D(), q2.a0q(3231)) : (
		a3D(), 5 <= d ? q2.a0q(3232) : (q2.a0q(3265), a10.oN = !0, a10.cb = -1)), 1
	}

	function a3B() {
		return void 0 !== username && k.mk(username)
	}

	function a36() {
		if (a3B()) return oZ.oj(!0), 1;
		oZ.oj(!1)
	}
	this.a32 = "", this.a33 = -7e3, this.c6 = function(a34) {
		d < 5 || (a31 && aA.aB > a31 + 144e5 ? e.setState(14) : a31 = aA.aB), aH.setState(0), q0.xA(), oZ.cv(!0), pz.c6(), ct.xA(), a34 && a9() ? setTimeout(function() {
			0 === aH.ob() && a7(12)
		}, 15e3) : a7(12), void 0 === username && (username = a(), oZ.get().value = username, a36())
	}, this.a13 = function() {
		a7(13), oZ.cv(!1)
	}, this.a37 = function(cb) {
		return 0 === cb ? q0.cj : 1 === cb ? Math.floor(.3 * q0.ee) : 2 === cb ? oZ.get().style.font : username
	}, this.a1R = function() {
		var i;
		username = oZ.get().value.trim(), a36(), "password" !== username && "account" !== username || (i = k.x(h().toString()), username = "account " + i, oZ.get().value = username)
	}, this.co = function(gs, gt) {
		aA.on(), 1 === q0.oX(gs, gt, 1, 1) ? a38() || a39() || (a7(10), a36() ? (this.a13(), u(username), fd.c6()) : q2.a0q(4214)) : 0 === q0.oX(gs, gt, 0, 1) && this.a15()
	}, this.a15 = function() {
		a38() || a39() || (a7(10), a3B() && 5 <= username.length && 40 === username.charCodeAt(0) && 40 === username.charCodeAt(1) && 41 === username.charCodeAt(3) && 41 === username.charCodeAt(4) ? q1.a0h(Math.abs(username.charCodeAt(2) + 5)) :
			q1.a0h(h6.a3C), a36() ? cf.cg() ? (this.a13(), u(username), fW.oQ(), q1.c6()) : q2.a0q(3228) : q2.a0q(4214))
	}, this.a3G = function() {
		return !ct.a17() && !cu.oN && !oY.oN
	}, this.cx = function() {
		var fA, hj;
		this.a3G() && (cy.imageSmoothingEnabled = !0, fA = cf.rW("territorial.io"), hj = 1.1 * q0.cj / fA.width, cy.setTransform(hj, 0, 0, hj, Math.floor((h0 - hj * fA.width) / 2), q0.gt - hj * fA.height - .72 * q0.ee), cy.drawImage(fA, 0, 0), cy
			.setTransform(1, 0, 0, 1, 0, 0), q0.a0D())
	}, this.a2n = function() {
		return username
	}
}

function qc() {
	var a3I, p3, cY, a3J;

	function a3M(cb, name, a3N, j) {
		cY[cb] = name, p3[cb] = new Image, p3[cb].onload = function() {
			0 < a3N && ! function(cb, a3N) {
				var gs, gt, a2, fA = document.createElement("canvas"),
					cj = p3[cb].width,
					ee = p3[cb].height,
					p9 = (fA.width = cj, fA.height = ee, fA.getContext("2d", {
						alpha: !0
					})),
					a3Q = (p9.drawImage(p3[cb], 0, 0), p9.getImageData(0, 0, cj, ee)),
					l6 = a3Q.data;
				if (a3N < 3) {
					var a3R = 2 === a3N ? 160 : 600;
					for (gs = cj - 1; 0 <= gs; gs--)
						for (gt = ee - 1; 0 <= gt; gt--) l6[a2 = 4 * (gs + gt * cj)] + l6[a2 + 1] + l6[a2 + 2] < a3R && (l6[a2 + 3] = Math.floor(255 * (l6[a2] + l6[a2 + 1] + l6[a2 + 2]) / a3R))
				} else if (3 === a3N)
					for (gs = cj - 1; 0 <= gs; gs--)
						for (gt = ee - 1; 0 <= gt; gt--) 0 === l6[a2 = 4 * (gs + gt * cj)] && 200 < l6[a2 + 1] && 0 === l6[a2 + 2] && (l6[a2 + 3] = 0);
				else if (4 === a3N) ! function(l6, cj, ee) {
					var gs, gt, a2;
					for (gs = cj - 1; 0 <= gs; gs--)
						for (gt = ee - 1; 0 <= gt; gt--) l6[1 + (a2 = 4 * (gs + gt * cj))] > l6[a2] + 20 && l6[1 + a2] > l6[2 + a2] + 20 && l6[a2] + l6[2] < 40 && (l6[3 + a2] = 255 - l6[1 + a2], l6[a2] = l6[1 + a2] = l6[2 + a2] = l6[a2])
				}(l6, cj, ee);
				else if (5 === a3N) ! function(l6, cj, ee, id) {
					var gs, gt, a2;
					for (gs = cj - 1; 0 <= gs; gs--)
						for (gt = ee - 1; 0 <= gt; gt--) 200 < l6[1 + (a2 = 4 * (gs + gt * cj))] && l6[1 + a2] - 20 > l6[a2] && l6[1 + a2] - 20 > l6[2 + a2] ? l6[a2] + l6[2 + a2] < 40 ? l6[3 + a2] = 0 : (l6[3 + a2] = l6[a2], l6[a2] = 255,
							l6[1 + a2] = 255, l6[2 + a2] = 255) : l6[a2] < 50 && l6[1 + a2] < 50 && l6[2 + a2] < 50 && (l6[a2] + l6[1 + a2] + l6[2 + a2] < 50 ? (l6[1 + a2] = 0 === id ? l6[1 + a2] : 160, l6[3 + a2] = 180) : (l6[1 +
							a2] = 0 === id ? l6[1 + a2] : 160, l6[3 + a2] = 180 + Math.floor(75 * (l6[a2] + l6[1 + a2] + l6[2 + a2] - 50) / 100)))
				}(l6, cj, ee, 0);
				else if (6 === a3N)
					for (gs = cj - 1; 0 <= gs; gs--)
						for (gt = ee - 1; 0 <= gt; gt--) l6[(a2 = 4 * (gs + gt * cj)) + 3] = Math.floor(255 * (l6[a2] + l6[a2 + 1] + l6[a2 + 2]) / 765), l6[a2] = l6[a2 + 1] = l6[a2 + 2] = 255;
				else if (7 === a3N)
					for (gs = cj - 1; 0 <= gs; gs--)
						for (gt = ee - 1; 0 <= gt; gt--) l6[(a2 = 4 * (gs + gt * cj)) + 1] > l6[a2 + 2] + 10 && (l6[a2 + 3] = l6[a2], l6[a2 + 1] = l6[a2 + 2]);
				p9.putImageData(a3Q, 0, 0), p3[cb] = fA
			}(cb, a3N), a3I--, cf.cg() && (zb.ce(), mD.rP(), a3.c6(), a1B.zv([p3[8], p3[16], p3[7], p3[9], p3[10]], [!b, 0 === d, !0, !0, !0]), aA.cm = !0, p3[7] = a3J, p3[8] = a3J, p3[9] = a3J, p3[10] = a3J)
		}, p3[cb].src = "data:image/png;base64," + j
	}
	this.c6 = function() {
		if (void 0 === p3) {
			a3I = 22, p3 = new Array(a3I), cY = new Array(a3I), (a3J = document.createElement("canvas")).width = 1, a3J.height = 1;
			for (var a2 = a3I - 1; 0 <= a2; a2--) p3[a2] = a3J;
			a3M(0, "exit", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
				), a3M(1, "victory", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg=="
				), a3M(2, "defeat", 6,
				"iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC"
				), a3M(3, "orders", 6,
				"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"
				), a3M(4, "crown", 4,
				"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
				), a3M(5, "arena", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC"
				), a3M(6, "territorial.io", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAjIAAABBCAIAAABEh9lIAAAACXBIWXMAAFxGAABcRgEUlENBAAAJJWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNTo1OSswMzozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMTItMjNUMTM6MjY6MDUrMDM6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY4ZGZmYjhkLWEyNDEtMTg0Mi1hNGYxLTk2ODMyZGFjYThjYSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE4YTU4YWFiLWE4ODYtNWI0Ni04OTk1LTI3MTdiYWZmOWMzYSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjNhNTMxM2RiLWY0ZGItN2Q0Mi1hZDc1LTEyMTJiNGE0NThjZSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2E1MzEzZGItZjRkYi03ZDQyLWFkNzUtMTIxMmI0YTQ1OGNlIiBzdEV2dDp3aGVuPSIyMDIyLTEyLTIzVDEzOjI1OjU5KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4NjhhNzU5LWRjNDctNGM0My1iYzA1LTllM2ZjOGMwZjY0YSIgc3RFdnQ6d2hlbj0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmOGRmZmI4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"
				), a3M(7, "youtube", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC"
				), a3M(8, "googleplay", 3,
				"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"
				), a3M(9, "discord", 7,
				"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
				), a3M(10, "insta", 3,
				"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"
				), a3M(11, "emojis", 4,
				"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"
				), a3M(12, "flags", 3,
				"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"
				), a3M(13, "bestTeam", 5,
				"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"
				), a3M(14, "bestPlayer", 5,
				"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"
				), a3M(15, "zoom", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
				), a3M(16, "apple", 3,
				"iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII="
				), a3M(17, "loading", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAZEAAABGBAMAAAD/Q7RHAAAAGFBMVEUAAAAnKSZKTElucG2Fh4SoqqfLzcr///+y5yZlAAAEnUlEQVRo3u3aS3PaMBAAYGNsuHoy0+TKTJv6SjNNfeWSciVNJlydF7qGl/n7JTGSd1e7wgaFaWfMKfFD1qeXV5KD8cb8kuC//rWSVtJKWkkraSWtpJW0klbSSlpJK2klraSV/KuSbw9qe8HsfnCyfHVuZu95Kmb3iUdJ+KAvKf7gM119vDoUb8Bv9gLsu2PD97+n4O/tr1/+OzHXXiqTRjHyJukqkLcndKqnDw94yTYfty7JoyD5jtIYeZJ0FEr2Fp670EcnkgScYiRrXkJLI/EjyUjOhtzduSwpBrJEJ4YloSJJPHqRRDRnK3DSPHIpS8w5TjLnJJlVGIkPydjKWdVsw+pZDokueE5SMJKunULuQcIky5a/S7KQJbtiQZLUTmHlQcIkW13YYyqKkRQOycKWKNcjD5dwyebMYJA7JLscspLCknAJgLHxUEnEJbtkmAuXZC5LysqEEq4V1OkoeySm/bxenf22ujd41NolWTskCyoxxfNydXajrL55qCSDXe4LeaNHdl8wkiLofP2NxwNeUhBJiKKJiBbUwRKFBtIxbrVlha3wCzMGGYzROMxLPhIDkhjn/aOtFa93x0o6uHJ1Cb3Bce1NoZYMJabN5w7JEkv6uLSibQT+w0PcFZGhQyFYmZ18CnVY0q0hKbAks6JrL1F9j4S6Gar50jVK0csLSTR97pC85x9IprW7+CESU0B9psCTHroGS8ZgwJAkSyRRqAF7k/TJyIFkWhCjesOSC5CAJNk+GEjqvwobSVIS9sRwVO3vzoXo2TEXGhZOSQ4knUazq/qSDMXe1QgAbp3rBpFzkl4dyQpIurBnqibhilsyJo2WeU6us7U8WLIZ2JLgkyUhkFSNKoN5x5K4liSvJNEnSaZE0gG5ic1dfThFaSTRQ9vpJbBOqsE3hp20kUS/r9JPl0itKzGjwbrqPXlzia5jdXIJ7I+qCsrhFKVRjyeLD6DHJ54lrlEYVIQC789mkliSDD1LUhIEgTdjJEzXm0nw7Bq840eeJY5opSesBrHv+LUoyQTJ5BgJM113RJCpMNnGknSfJKYSGEH6l3BR/dS+4c2WwBidlaDmxUX1oR+JMNNa8MtHK0vSgUZekhIJnWl5kpDZb7fKGLM2iebuBZqp5bIk3rBTepN1TxJT8gO00jJhO3x5FZSYDYuJLKGdgaxI6P9BwxuZgyt4cI8kYxrOR4770kphJTm7VmhZSZCk+H68ShRcbjxJ4MrdNWxFY2mlMJaanSSJyAClwCN/Pmx8SaJ9zc46wUkWLglISl5NPV4irXCH7B1F0xVuvMXnWOH2IBF2HWLcLUE81mjXgWzRTODI7VvSdfafBZmBjRruBKHXp667jKvt5GiJsDuXkXBfmXbXaHeuPHGOJVzfHAXHS/gdU0W2Naam9BvtmJIdwIn0jnsKPEj4XWy6KlVFio12sXE5aElX2GY8VkJ2xx9hRSV2kByLW8WypEcilHNuI+l4Cf7a45ldLzZ5GVrfN4yC/ZKQhu6/ECTxJQnCKoK/s6cdqDfl5AscuIMjS/S/7Bc4z3SlR5DU+5VfRRWvp/sqKiy/iqr/IdZfF1HJgRmsN+0AAAAASUVORK5CYII="
				), a3M(18, "target", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEXUAADUISLWQkLMTQDZZmXAdwC0lADgiIioqQCWvgCE0QAA/wDnra1i6ADw0tL////afMd+AAAC6klEQVRIx42WTWgTURCApzFNY2lLBKEX0dy8iA0UxB8CKgUv0gaKBS2B3HOJnkUDQrENQi6KEITcgydR0l0CUYReJBZCi3YpaC+9FANS6GXZ5+6+eT+z+1adS/ImX97Mzs4f2ET2916vPV9/61At6Ifeq2UIZWXDSYK+IxLIlY4Z+ga6jL8xQbsFoFQrDtF7QqoThaxSDIKsE4HqYJAyhXZNDJxq6VCvZIQgq0NDSJCGgnqFJCiroB2lHTvjS06dWxJSHl0cjBjztm5JxXUBdaXqro8E4j2UD+gg1BamFpkQ75GgVjkkn/8SU+LVUHmaQx/wmB5pEHNzyh4oa08ZkU+oroZQhR8mKMO8PNdPBpBlvoixA67PBBC6lI4yzJVOgb3Nv1+OQawm3h9gJo19jUPHHLrhQ4UEazIKkzZYHJoRvxwuLAzE95voOWzyO5dQ/zkw/QQPfe65DfhwGO2T8JBCB39zqAM8l1Ij3QBMkSC0YFsP94nIB/4fj3vegLb+175IkCX94io0w8/zXJkX0IwezjLUNciTKZrWoSJCF4hLvlCookHHChppPhaB5+7c36BpvOm/oH+Y0x13VSFTx5vGEEzQOPGInyO5KPOUR3yVvrsDIFWBBVOFoR5hlwYczTfgPUmVj1y9SJKiBdhSMM3c0ItZzMwfWFMifeeYomZHpKb89MVWOCWr++hXpNCzfkmViFO6oEvTPtROaAWM/RRtDOx3QO0pyYveCjZ6HreH1saDhiGaeKxj9GUrBzl70iNj54FiCA3BeFVNtXsfEq2Odh/xrjPYxyuG9nuU00YC6DPqrKTcvD6nAshSNclbk3coR1BGDqCmpFJ3Hg++bN2OTNgQ6uojTh9kfP7g5KwnDcWiNl67CQy/SEzzhKvKZORvGqdwxqHLw47JWCOyYfSexaEHsYUmvj9cM6xG1jJlrjqmJcsiFu875nWt91I+4/yLxMXP3lu753PzK+tO8nYY3LbvS2SDtP8A+ntynBIvYeAAAAAASUVORK5CYII="
				), a3M(19, "members", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
				), a3M(20, "hourglass", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
				), a3M(21, "stalemate", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAeoAAABABAMAAAAnsyk1AAAAElBMVEUAAAA8PjxeYF2Rk5C6vLn////ACCfyAAAFMklEQVRo3uXby3qjIBQAYBEfwO+buM9c3Ntp2ZOZ8ADx8v6vMp2qybmBCK6SbNomEc4vcAS0RbG+1Iebvl5/vxev8lIf0+M1nl8DXboJvd5eET1N3QuoGfoVOvlp4q/+6fv3JL2evY83orp/uVH9NbLrp0braXrBLt541LenVpsH9Ao7+/DUc1E0kuF85ZkHdokHMriMPfNEpbo39fx3e1fbV1D3NKVb8KEn1TkpCShvbxET50gvnzdaDG4A520mfhHSvg+oWsHaN9QlCf0Ydc+vqFYqfUk8SeqGNpcDtW+oKzEJ5KqHghYO1ZrOKPLUa842oPYNdbPRGmnqka+JrDAi13eT1Cd6jj9LuV7ff/+g51tQG3FOk6sWei5Qt3Qo5I1raVG9oXbinCZb3dFTCtWszlz1ZwRve9Qli/0YtfW8QzP73CmS1OQD7A6r0aHn49QXxrPyWqlLVrM9BegOqxt5iZat7tleh5UjsslqYXk91HFqIy/RstWDzOOjuE9XC0eNXZQana/hOPUYUBtWZ5q6CmwpBNWlEHykug9v6NQUY8VkNu/3RKlH/1KTs4NqciLPx6k72qjWs/HTJavlw/C1Wwz35Nlxyldb6Q2pGay0OyJNX8fIneFhM9ylmhFeb45RX2gPtKSFRmGXa6e6+LW5WyiGuwTaO3KactTj+nGJdJbQBsebZq9a3hseNsJdcdaRgnPUw1q1FtVq+drNcMxudSmyz+Fw1xK7luyzZandEuM8gP8SyFqnbXkNu9Uy+xIOd00s54YMiZ3X65qrP9+bv/pOIGudXcWFJrwYl4auxB7C6jWx1DSCLLVZDpx//iRFrwXUmqezBHVRfPji8anvw1mTz7LUzRL4/Pc3ArkP55K3TJI6eOteUKv7O4qMnSz13HHsnLZGjSHqkbodG69p6qL45nxzAEEN+pjDfSNLPRfbl/CveyTlIwrDqkhV0/a+hdRgNBtcXJYacXuiBnW2jJCuxjOWPqRu+YajPUA9HzwuHZ2oG77ddztEDWe6Q0htHkFXvh31BPXySyuqQbeuWIz71OWP948rOLyNUsMUpvH389Rz8MsFjKgduA3Jph971C2bvegoNZSWGJCnhivAGquhVLE68tTKxagraVOlO0ANd6oLrEYTA0dH6R51w0OMUouLcps/D8d5BavFk3ZJmYdXPLWZGLXxP7eUpy5hcVhtgkvDNPWlEG7v+cJVgcVpnlrBZtTe+wJ8v26PmucuFTNL0YGntfLUwGaxWt7zua8W9qgVu3rrmBlpFXhaK1NtQGlIrcNPiO1aXzva2CZm9eF5XMseoG5BKyL1Sa7zkqIGKeIPKTuw0jSBmwPK+1GU+gQiRWpPnX2KGp7B8ffPa9SugpzMlkMi1LyLOv6kwEDUnjrHvdfr/6H4HqhE+xRU7UksczrLVGtQF1QrX5x1gtp3CtHahKq990TO+WolNIkNPO+6xrlP7btjMgbSUOOLwOar781gsfoUqnO3Wm93cKY25MxoeFCu2vD7VBa0zkhv2fQpal9urANq55vZDAeowV63Fm58DXR6OCSpq+AFQVKXrD84aRGYqG74yt2CUns206hT1GI+w/8KQNTV5Ln/9NVAuepKVGt2pg1OZ3vVenNziagb9q12ElolUa0fVQE1P9PNJK/IItVCerwEp5KGTTkbUGKuuuSZFmyKPs505QkqVs3Yf8ITaMeGAZxQ5aqX3y1WO5ZlNZ5E7lfjjfCxK4Lqkl/S4YT3IHWH1IrXWeIclKD+LGP9T+Tr8/9r6j/yRPVUqj3rEAAAAABJRU5ErkJggg=="
				)
		}
	}, this.get = function(cb) {
		return p3[cb]
	}, this.rW = function(name) {
		for (var a2 = cY.length - 1; 0 <= a2; a2--)
			if (cY[a2] === name) return p3[a2];
		return a3J
	}, this.cg = function() {
		return 0 === a3I
	}
}

function qd() {
	var a3Y, a3Z, a3a, a3b, a3c, a3d, a3e, a3f, a3g, a3h, a3i, a3V = [224, 224, 224],
		a3W = [
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
		a3X = [
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

	function a45(bQ, a47) {
		zA[bQ] = 0, zA[bQ + 1] = 0, zA[bQ + 2] = a47, zA[bQ + 3] = 0, a48(bQ)
	}

	function a48(bQ) {
		var gs;
		hx.hy || (gs = bK.h2(bQ), bQ = bK.cw(bQ), hx.hy = gs >= hn.z9[0] && gs <= hn.z9[2] && bQ >= hn.z9[1] && bQ <= hn.z9[3])
	}
	this.c6 = function(mP) {
		if (a3Y = new Uint8Array(bN), a3Z = new Uint8Array(bN), a3a = new Uint8Array(bN), a3b = new Uint8Array(bN), a3c = new Uint8Array(bN), a3d = new Uint8Array(bN), a3e = new Uint8Array(bN), a3f = new Uint8Array(bN), a3g = new Uint8Array(bN),
			a3h = new Uint8Array(bN), this.vs = new Uint8Array(bN), (a3i = new Int32Array(4))[0] = -4 * an.ao, a3i[1] = 4, a3i[2] = -a3i[0], a3i[3] = -a3i[1], cH)
			for (var cP, fA, a2 = bN - 1; 0 <= a2; a2--) fA = fB.nN[fB.fC[a2]], cP = b7((a3X[fA][3] + 1) * eR.random(), eR.value(100)), a3Y[a2] = a3W[fA][0] + cP * a3X[fA][0], a3Z[a2] = a3W[fA][1] + cP * a3X[fA][1], a3a[a2] = a3W[fA][2] + cP *
				a3X[fA][2];
		else fW.fX && fW.fY.a3p ? function(aR) {
			var a2;
			for (a2 = ld - 1; 0 <= a2; a2--) a3Y[a2] = 4 * aR[a2][0], a3Z[a2] = 4 * aR[a2][1], a3a[a2] = 4 * aR[a2][2]
		}(fW.fY.a3p) : (function() {
			for (var a2 = bN - 1; di <= a2; a2--) a3Y[a2] = 4 * b7(64 * eR.random(), eR.value(100)), a3Z[a2] = 4 * b7(64 * eR.random(), eR.value(100)), a3a[a2] = 4 * b7(64 * eR.random(), eR.value(100))
		}(), function(mP) {
			for (var a2 = di - 1; 0 <= a2; a2--) a3Y[a2] = 4 * mP[a2].a2o[0], a3Z[a2] = 4 * mP[a2].a2o[1], a3a[a2] = 4 * mP[a2].a2o[2]
		}(mP));
		! function() {
			var a2, bS;
			for (a2 = bN - 1; 0 <= a2; a2--) bS = b7(a3Y[a2] + a3Z[a2] + a3a[a2], 3), a3Y[a2] += a3z(bS - a3Y[a2], 2), a3Z[a2] += a3z(bS - a3Z[a2], 2), a3a[a2] += a3z(bS - a3a[a2], 2), a3Y[a2] -= a3Y[a2] % 4, a3Z[a2] -= a3Z[a2] % 4, a3a[a2] -=
				a3a[a2] % 4
		}(),
		function() {
			for (var a2 = bN - 1; 0 <= a2; a2--) a3Y[a2] += b7(a2, 128), a3Z[a2] += b7(a2 % 128, 32), a3a[a2] += b7(a2 % 32, 8), a3b[a2] = a2 % 8
		}(), this.a3v(),
			function() {
				for (var a2 = bN - 1; 0 <= a2; a2--) a3c[a2] = a3Y[a2] < 32 ? a3Y[a2] + 32 : a3Y[a2] - 32, a3d[a2] = a3Z[a2] < 32 ? a3Z[a2] + 32 : a3Z[a2] - 32, a3e[a2] = a3a[a2] < 32 ? a3a[a2] + 32 : a3a[a2] - 32
			}(),
			function() {
				for (var a2 = bN - 1; 0 <= a2; a2--) a3f[a2] = 235 < a3Y[a2] ? a3Y[a2] - 20 : a3Y[a2] + 20, a3g[a2] = 235 < a3Z[a2] ? a3Z[a2] - 20 : a3Z[a2] + 20, a3h[a2] = 235 < a3a[a2] ? a3a[a2] - 20 : a3a[a2] + 20
			}()
	}, this.a3y = function(player) {
		var aR = e8.aM;
		return aR[0] = a3Y[player], aR[1] = a3Z[player], aR[2] = a3a[player], aR
	}, this.a3v = function() {
		for (var a2 = bN - 1; 0 <= a2; a2--) this.vs[a2] = a3Y[a2] + a3Z[a2] + a3a[a2] < 280 ? 0 : 1
	}, this.h2 = function(bQ) {
		return b7(bQ, 4) % an.ao
	}, this.cw = function(bQ) {
		return b7(bQ, 4 * an.ao)
	}, this.lk = function(gs, gt) {
		return Math.floor(4 * (gt * an.ao + gs))
	}, this.m0 = function(bQ) {
		return this.lG(bQ + a3i[0]) || this.lG(bQ + a3i[1]) || this.lG(bQ + a3i[2]) || this.lG(bQ + a3i[3])
	}, this.ly = function(bQ, player) {
		return this.a40(bQ + a3i[0], player) || this.a40(bQ + a3i[1], player) || this.a40(bQ + a3i[2], player) || this.a40(bQ + a3i[3], player)
	}, this.rn = function(player) {
		return player < di && 2 !== dk[player]
	}, this.bT = function(bQ) {
		return 208 <= zA[bQ + 3]
	}, this.m5 = function(player, bQ) {
		return this.bT(bQ) && this.a41(player, bQ)
	}, this.a41 = function(player, bQ) {
		return player === this.bU(bQ)
	}, this.a42 = function(bQ) {
		return 208 <= zA[bQ + 3] && zA[bQ + 3] < 224
	}, this.eK = function(bQ) {
		return 224 <= zA[bQ + 3] && zA[bQ + 3] < 248
	}, this.lz = function(bQ) {
		for (var a2 = 3; 0 <= a2; a2--)
			if (this.rp(bQ + a3i[a2])) return !0;
		return !1
	}, this.a43 = function(bQ) {
		return 192 <= zA[bQ + 3] && zA[bQ + 3] < 208
	}, this.a44 = function(bQ, player) {
		return this.a43(bQ) && player === this.bU(bQ)
	}, this.bL = function(bQ) {
		return this.bT(bQ) || this.bV(bQ)
	}, this.rp = function(bQ) {
		return 0 === zA[bQ + 3] && 2 === zA[bQ + 2]
	}, this.bV = function(bQ) {
		return 0 === zA[bQ + 3] && 1 === zA[bQ + 2]
	}, this.lG = function(bQ) {
		return 0 === zA[bQ + 3] && 3 === zA[bQ + 2]
	}, this.ro = function(bQ) {
		return this.lG(bQ)
	}, this.a40 = function(bQ, player) {
		return this.bV(bQ) || this.bT(bQ) && player !== this.bU(bQ)
	}, this.bU = function(bQ) {
		return zA[bQ] % 4 * 128 + zA[bQ + 1] % 4 * 32 + zA[bQ + 2] % 4 * 8 + zA[bQ + 3] % 8
	}, this.m6 = function(bQ) {
		a45(bQ, 1)
	}, this.a46 = function(bQ) {
		a45(bQ, 2)
	}, this.lx = function(bQ, player) {
		zA[bQ] = a3Y[player], zA[bQ + 1] = a3Z[player], zA[bQ + 2] = a3a[player], zA[bQ + 3] = 208 + a3b[player], a48(bQ)
	}, this.bM = function(bQ, player) {
		zA[bQ] = a3c[player], zA[bQ + 1] = a3d[player], zA[bQ + 2] = a3e[player], zA[bQ + 3] = 224 + a3b[player], a48(bQ)
	}, this.eM = function(bQ, player) {
		zA[bQ] = a3f[player], zA[bQ + 1] = a3g[player], zA[bQ + 2] = a3h[player], zA[bQ + 3] = 248 + a3b[player], a48(bQ)
	}, this.a49 = function(bQ, player) {
		zA[bQ] = a3V[0] + a3Y[player] % 4, zA[bQ + 1] = a3V[1] + a3Z[player] % 4, zA[bQ + 2] = a3V[2] + a3a[player] % 4, zA[bQ + 3] = 192 + a3b[player], a48(bQ)
	}
}

function qe() {
	var cY, bG, bI, y, a4A;

	function a4F() {
		for (var a4K = 0, a2 = 1; a2 < 5; a2++) a4K += bG[a2] % 1024;
		return a4K
	}

	function a4E() {
		for (var a2 = 1; a2 < bI - a4A; a2++) bG[a2] = parseInt(bG[a2])
	}

	function a4G() {
		bG[0] = "Player " + Math.floor(1e3 * Math.random()), bG[1] = p < q ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, bG[2] = 1, bG[3] = 1, bG[4] = p < q ? 0 : 1, bG[5] = 0, bG[6] = "000", bG[7] = "0", bG[8] = "0", bG[9] = "0", f
		.w()
	}

	function a4D() {
		for (var a2 = bI - a4A - 1; 0 <= a2; a2--) bG[a2] = k.l(bG[a2]);
		bG[0] = k.ms(bG[0])
	}

	function a4N(name, value, a4O) {
		var a4P = new Date,
			a4O = (a4P.setTime(a4P.getTime() + Math.floor(31536e6 * a4O)), name + "=" + value + ";expires=" + a4P.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = a4O
	}
	this.c6 = function() {
		if (!(5 <= d || b)) {
			a4A = 4, cY = [], bI = 10;
			for (var a2 = y = 0; a2 < bI; a2++) cY.push("u" + a2);
			bG = new Array(bI), ! function(a4L) {
				for (var eO, bQ, a4M = a4L.split(";"), a2 = a4M.length - 1; 0 <= a2; a2--) {
					for (a4M[a2] = a4M[a2].trim(), eO = 2; 0 <= eO; eO--) a4M[a2] = a4M[a2].replace(" ", "");
					3 < a4M[a2].length && (eO = cY.indexOf(a4M[a2].substring(0, 2)), bQ = a4M[a2].indexOf("="), 0 <= eO && 2 === bQ ? bG[eO] = a4M[a2].substring(bQ + 1, a4M[a2].length) : 0 < bQ && a4N(a4M[a2].substring(0, bQ), "0", 0))
				}
			}(document.cookie), bG[9] || (bG[9] = "0"), (! function() {
				for (var a2 = bI - 1; 0 <= a2; a2--)
					if (void 0 === bG[a2]) return;
				return 1
			}() || (y = 2, a4D(), a4E(), a4F() !== bG[5])) && a4G()
		}
	}, this.w = function() {
		if (2 === y) {
			bG[1] = 0 === bG[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : bG[1], bG[5] = a4F(), ! function() {
				for (var a2 = 1; a2 < bI - a4A; a2++) bG[a2] = bG[a2].toString()
			}(), ! function() {
				bG[0] = k.mr(bG[0]);
				for (var a2 = bI - a4A - 1; 0 <= a2; a2--) bG[a2] = k.x(bG[a2])
			}();
			for (var a2 = bI - 1; 0 <= a2; a2--) a4N(cY[a2], bG[a2], 1);
			a4D(), a4E()
		}
	}, this.y = function() {
		return y
	}, this.tk = function(eO) {
		y = eO, this.w()
	}, this.v = function(a2, value) {
		5 <= d || b || (bG[a2] = value)
	}, this.g = function(a2) {
		return 5 <= d || b ? 0 : bG[a2]
	}
}

function r1() {
	var cb = 0,
		a4Q = new Uint16Array(32);

	function remove(rZ) {
		var a2;
		for (cb -= 2, a2 = rZ; a2 < cb; a2 += 2) a4Q[a2] = a4Q[a2 + 2], a4Q[a2 + 1] = a4Q[a2 + 3]
	}
	this.c6 = function() {
		cb = 0
	}, this.eu = function() {
		var a2, eH, dn;
		if (0 !== cb)
			if (0 === dj[bB] || at.a4R(bB) === at.au(bB)) cb = 0;
			else
				for (a2 = cb - 2; 0 <= a2; a2 -= 2)(eH = a4Q[a2]) < bN && 0 === dj[eH] ? remove(a2) : (dn = a4Q[a2 + 1], (bN <= eH && rq(bB) || eH < bN && rv(bB, eH)) && (cR.cS.cT(dn, eH), remove(a2)))
	}, this.rh = function(eH, dn) {
		! function(eH, dn) {
			var a2;
			for (a2 = 0; a2 < cb; a2 += 2)
				if (a4Q[a2] === eH) return a4Q[a2 + 1] = Math.min(a4Q[a2 + 1] + dn, 1023), 1;
			return
		}(eH, dn) && 32 !== cb && (a4Q[cb] = eH, a4Q[cb + 1] = dn, cb += 2)
	}
}

function a4T(player) {
	a4U(player), a4V(player), a4W(player), b9.bA(player), fz.gn(player), at.kX(player), e2.a4X.a4Y(player)
}

function a4U(player) {
	bK.rn(player) && nE++;
	var a4Z = at.a4a(player);
	0 === a4Z.length ? player === bB && a4b() : (a4c(player, a4Z), a4d(player, a4Z))
}

function a4b() {
	bF.bG[17] += bC[bB] + at.a4e(bB), gE.show(!1, !1, !1, !0), fo.yd()
}

function a4c(player, a4Z) {
	for (var a2 = a4Z.length - 1; 0 <= a2; a2--) at.a4f(a4Z[a2], player)
}

function a4g(a4Z) {
	for (var cb = 0, a2 = a4Z.length - 1; 1 <= a2; a2--) bj[a4Z[a2]] > bj[a4Z[cb]] && (cb = a2);
	return cb
}

function a4d(player, a4Z) {
	var a2, tL, a4h = a4Z[a4g(a4Z)];
	if (9 === fa && 1 === fB.fC[player] && eR.f4(8) && fg.a4i(a4h), player === bB) 2 !== dk[player] && fm.n4(a4h, 1), a4b();
	else {
		for (tL = !1, a2 = a4Z.length - 1; 0 <= a2; a2--)
			if (a4Z[a2] === bB) return tL = !0, void fm.n4(player, 0);
		!tL && player < di && 2 !== dk[player] && fm.t0(0, player, a4h)
	}
}

function a4W(player) {
	dj[player] = bC[player] = 0, bJ[player] = null, bb[player] = null, bc[player] = null, bf[player] = null, fx.a4j(player)
}

function a4V(player) {
	for (var bQ, gt, gs = eh[player]; gs >= ei[player]; gs--)
		for (gt = ek[player]; gt >= el[player]; gt--) bQ = 4 * (gt * an.ao + gs), bK.m5(player, bQ) && (bK.m6(bQ), bj[player]--)
}

function r7() {
	var input;

	function a4k(ng) {
		a4m(ng.target.files)
	}

	function a4m(files) {
		files && 0 < files.length && oV.a4n(files[0])
	}

	function a4s(ng) {
		var fA = new Image;
		fA.onload = a4t, fA.src = ng.target.result
	}

	function a4t(ng) {
		var a4u, ng = ng.target,
			cj = ng.width,
			ee = ng.height;
		4096 < cj || 4096 < ee || cj < 10 || ee < 10 ? (a4u = "Image w & h must be between 10 and 4096.", e ? e.showToast(a4u) : alert(a4u)) : (fW.oQ(), an.lQ = an.wI(), an.a2F = 0, an.ao = cj, an.ap = ee, an.l2.width = an.ao, an.l2.height = an.ap,
			an.ky.drawImage(ng, 0, 0), a4u = an.ky.getImageData(0, 0, an.ao, an.ap), an.l3 = a4u.data)
	}

	function a4v(ng) {
		ng.stopPropagation(), ng.preventDefault()
	}

	function a4w() {
		return 0 === aH.ob() || 2 === aH.ob()
	}
	this.c6 = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = a4k
	}, this.a2q = function() {
		input.click()
	}, this.a4l = function(ng) {
		a4k(ng)
	}, this.a4n = function(a4o) {
		var aR = a4o.name.split("."),
			a4p = aR[aR.length - 1].toLowerCase();
		"json" === a4p ? fW.a4r(a4o) : "gif" !== a4p && "jpg" !== a4p && "jpeg" !== a4p && "png" !== a4p || (an.fY.lP[an.wI()].name = aR[0], (a4p = new FileReader).onload = a4s, a4p.readAsDataURL(a4o))
	}, this.o2 = function(ng) {
		a4w() && (a4v(ng), ng.dataTransfer.dropEffect = "copy")
	}, this.o3 = function(ng) {
		a4w() && (a4v(ng), a4m(ng.dataTransfer.files))
	}
}

function r5() {
	this.a4x = null, this.c6 = function() {
		this.a4x = 10 !== fa ? null : new Uint32Array(bN)
	}, this.eu = function() {
		10 === fa && this.cJ()
	}, this.cJ = function() {
		for (var bQ, target, yo, a4x = this.a4x, mP = fE, pD = bC, a2 = fD - 1; 0 <= a2; a2--) bQ = mP[a2], di <= bQ || (target = Math.max(b7(pD[bQ], 4), 2048), yo = Math.max(bD.yp(bQ), 100), a4x[bQ] += b7(yo * target, 1e4), a4x[bQ] > target && (
			a4x[bQ] = target))
	}, this.pJ = function(player, eI) {
		return eI > this.a4x[player] ? (eI = this.a4x[player], this.a4x[player] = 0) : this.a4x[player] -= eI, eI
	}
}

function r8() {
	function a4s(ng) {
		fW.fX = !0, fW.a53(JSON.parse(ng.target.result)), fW.uN()
	}

	function a59(j, min, max, a5I) {
		return "string" != typeof j || j.length < min ? a5I : j.length > max ? j.substring(0, max) : j
	}

	function a54(aF, min, max) {
		return aF = "number" == typeof aF ? Math.floor(aF) : min, Math.min(Math.max(aF, min), max)
	}

	function a57(aF, a5K) {
		return "boolean" == typeof aF ? aF : a5K
	}

	function a5B(aF, bI, max, a5L) {
		var a2, aR, cP;
		if (!Array.isArray(aF) || aF.length < 1) return null;
		for (aR = new(8 === a5L ? Uint8Array : Uint16Array)(bI), cP = aF.length, a2 = 0; a2 < bI; a2++) aR[a2] = a54(aF[a2 % cP], 0, max);
		return aR
	}
	this.fX = !1, this.fY = null, this.oQ = function() {
		this.fX = !1, this.fY = null
	}, this.a2m = function() {
		this.fY.a3p && this.fY.a4y && (this.fY.a3p[0] = ct.sS[2].n8.a0R()), pb(this.fY.a4z, 0, this.a50(), this.fY.pe, !1, !1)
	}, this.a50 = function() {
		return [{
			name: this.fY.a51 ? py.a2n() : this.fY.a52[0],
			a2o: [0, 0, 0],
			a2p: 0
		}]
	}, this.a4r = function(a4o) {
		var a4q = new FileReader;
		a4q.onload = a4s, a4q.readAsText(a4o)
	}, this.a53 = function(sw) {
		this.fY = {}, this.fY.a2i = a54(sw.numberPlayers, 1, 512), this.fY.a55 = a54(sw.modeID, 0, 1), this.fY.lQ = a54(sw["gMap.mapID"], 0, an.a56 - 1), this.fY.a2J = a54(sw.seedMap, 0, 16383), this.fY.a4z = a54(sw.seedSpawn, 0, 16383), this.fY
			.ph = a57(sw.selectableSpawn, !1), this.fY.a51 = a57(sw.selectableName, !1), this.fY.a4y = a57(sw.selectableColor, !1), an.fY.lP[an.wI()].name = this.fY.a58 = a59(sw.mapName, 1, 25, "Custom Map"), this.fY.sf = function(aF) {
				var a2, bI;
				if (!Array.isArray(aF) || aF.length < 1) return [];
				for (bI = aF.length, a2 = 0; a2 < bI; a2++) aF[a2] = a59(aF[a2], 0, 100, "");
				return aF
			}(sw.description), this.fY.lY = a5B(sw.playerX, this.fY.a2i, 4096, 16), this.fY.lj = a5B(sw.playerY, this.fY.a2i, 4096, 16), this.fY.a5C = a5B(sw.playerTeam, this.fY.a2i, 8, 8), this.fY.fZ = a5B(sw.playerStrength, this.fY.a2i, 5, 8),
			this.fY.a3p = function(aF, bI) {
				var a2, aR, cP;
				if (!Array.isArray(aF) || aF.length < 1) return null;
				for (aR = new Array(bI), cP = aF.length, a2 = 0; a2 < bI; a2++) aR[a2] = a5B(aF[a2 % cP], 3, 63, 8);
				return aR
			}(sw.playerColor, this.fY.a2i), this.fY.a52 = function(aF, bI) {
				var a2, aR, cP;
				if (!Array.isArray(aF) || aF.length < 1) return null;
				for (aR = new Array(bI), cP = aF.length, a2 = 0; a2 < bI; a2++) aR[a2] = a59(aF[a2 % cP], 3, 26, "Bot");
				return aR
			}(sw.playerName, this.fY.a2i), this.fY.a5F = "string" == typeof sw.mapBase64 ? sw.mapBase64 : "", this.fY.a51 = this.fY.a51 || !this.fY.a52, this.fY.pe = 0 === this.fY.a55 ? 7 : 2 === this.fY.a55 ? 9 : 6, this.fY.lY = this.fY.lj ?
			this.fY.lY : null
	}, this.uN = function() {
		! function(j) {
			var p3, a3Q, a5H = "data:image/png;base64,";
			if (j.length <= a5H.length) return;
			fW.fY.lQ = 0, fW.fY.a2J = 0, an.kj(0, 0), j.substring(0, a5H.length) !== a5H && (j = a5H + j);
			return (p3 = new Image).onload = function() {
				an.ao = p3.width, an.ap = p3.height, 4096 < an.ao || 4096 < an.ap || an.ao < 10 || an.ap < 10 ? (an.kj(0, 0), alert("Image w & h must be between 10 and 4096.")) : (an.lQ = an.wI(), an.a2F = 0, an.l2.width = an.ao, an.l2
					.height = an.ap, an.ky.drawImage(p3, 0, 0), a3Q = an.ky.getImageData(0, 0, an.ao, an.ap), an.l3 = a3Q.data)
			}, p3.src = j, fW.fY.a5F = "", 1
		}(this.fY.a5F) && an.kj(this.fY.lQ, this.fY.a2J)
	}, this.a5M = function() {
		for (var max = 0, bI = this.fY.a2i, a2 = 0; a2 < bI; a2++) this.fY.a5C[a2] > max && (max = this.fY.a5C[a2]);
		return Math.max(0, max - 1)
	}
}

function qf() {
	var a5N, a5O, eL, eH, eI, id;

	function a5P(player) {
		return player < di ? a5N * player : a5N * di + a5O * (player - di)
	}
	this.c6 = function() {
		a5N = di < 16 ? 12 : 8, a5O = 4;
		var bI = a5P(bN);
		eL = new Uint8Array(bN), eH = new Uint16Array(bI), eI = new Uint32Array(bI), id = new Uint16Array(bI)
	}, this.kB = function(vM, a5Q) {
		var a5R = this.bx(vM, a5Q);
		this.bw(vM, a5Q, 0), a5R = cB.cC.jS(vM, a5R), vM === bB && (bF.bG[13] -= a5R)
	}, this.kX = function(player) {
		eL[player] = 0
	}, this.a4f = function(player, a5Q) {
		var fI, a5Q = function(player, a5Q) {
			var a2, cP = a5P(player);
			for (a2 = eL[player] - 1; 0 <= a2; a2--)
				if (0 === id[cP + a2] && eH[cP + a2] === a5Q) return a2;
			return eL[player]
		}(player, a5Q);
		a5Q !== eL[player] && (fI = eI[a5P(player) + a5Q], this.bH(player, a5Q), this.eE(player, fI, bN))
	}, this.eX = function(player, a5Q) {
		for (var cP = a5P(player), a2 = eL[player] - 1; 0 <= a2; a2--)
			if (0 === id[cP + a2] && eH[cP + a2] === a5Q) return !0;
		return !1
	}, this.cF = function(player) {
		return player < di ? eL[player] < a5N : eL[player] < a5O
	}, this.au = function(player) {
		return eL[player]
	}, this.b0 = function(player, a2) {
		return eH[a5P(player) + a2]
	}, this.av = function(player, a2) {
		return id[a5P(player) + a2]
	}, this.h5 = function(player, a5T) {
		for (var cP = a5P(player), a2 = eL[player] - 1; 0 <= a2; a2--)
			if (id[cP + a2] === a5T) return a2;
		return -1
	}, this.b1 = function(player, a2) {
		return eI[a5P(player) + a2]
	}, this.bx = function(player, a5Q) {
		for (var cP = a5P(player), a2 = eL[player] - 1; 0 <= a2; a2--)
			if (0 === id[cP + a2] && eH[cP + a2] === a5Q) return eI[cP + a2];
		return 0
	}, this.a4e = function(player) {
		for (var cP = a5P(player), aF = 0, a2 = eL[player] - 1; 0 <= a2; a2--) aF += eI[cP + a2];
		return aF
	}, this.a5U = function(player) {
		for (var cP = a5P(player), aF = 0, a2 = eL[player] - 1; 0 <= a2; a2--) 0 === id[cP + a2] && (aF += eI[cP + a2]);
		return aF
	}, this.a4R = function(player) {
		for (var cP = a5P(player), tK = 0, a2 = eL[player] - 1; 0 <= a2; a2--) 0 < id[cP + a2] && tK++;
		return tK
	}, this.bw = function(player, a5Q, fI) {
		for (var cP = a5P(player), a2 = eL[player] - 1; 0 <= a2; a2--) 0 === id[cP + a2] && eH[cP + a2] === a5Q && (eI[cP + a2] = fI)
	}, this.bi = function(player, a2, fI) {
		eI[a5P(player) + a2] = fI
	}, this.eE = function(player, fI, a5Q) {
		var a2, cP = a5P(player);
		for (a5Q === bB && bF.bG[player < di ? 6 : 5]++, a2 = eL[player] - 1; 0 <= a2; a2--)
			if (0 === id[cP + a2] && eH[cP + a2] === a5Q) return eI[cP + a2] += fI, void(eI[cP + a2] = eI[cP + a2] > pF ? pF : eI[cP + a2]);
		eH[cP + eL[player]] = a5Q, eI[cP + eL[player]] = fI, id[cP + eL[player]] = 0, eL[player]++, player < di && (a5Q === bB ? fm.n4(player, 5) : player === bB && fn.t2(a5Q))
	}, this.a5V = function(player, fI, a5T) {
		var cP = a5P(player);
		dj[player] = 2, eH[cP + eL[player]] = 0, eI[cP + eL[player]] = fI, id[cP + eL[player]] = a5T, eL[player]++
	}, this.bH = function(player, cb) {
		var eO, cP;
		if (0 !== eL[player])
			for (cP = a5P(player), eL[player]--, eO = cb; eO < eL[player]; eO++) eH[cP + eO] = eH[cP + eO + 1], eI[cP + eO] = eI[cP + eO + 1], id[cP + eO] = id[cP + eO + 1]
	}, this.a4a = function(player) {
		for (var eO, cP, a4Z = [], a2 = fD - 1; 0 <= a2; a2--)
			for (cP = a5P(fE[a2]), eO = eL[fE[a2]] - 1; 0 <= eO; eO--)
				if (0 === id[cP + eO] && eH[cP + eO] === player) {
					a4Z.push(fE[a2]);
					break
				} return a4Z
	}
}

function qg() {
	var a5W, a5X, a5Y, a5Z, a5a, a5b;
	this.c6 = function() {
		a5Y = a5W = 10, a5Z = a5X = 10
	}, this.a5c = function() {
		a5b = 512, a5a = new Uint16Array(a5b);
		for (var a2 = 0; a2 < a5b; a2++) a5a[a2] = 100 + c1(b7(25600 * a2, a5b - 4), 9)
	}, this.xY = function() {
		return a5Z
	}, this.eu = function() {
		if (--a5Y <= 0 && (a5Y = a5W, function() {
				var a2, a5h, r = bC[bB];
				for (fc && !cH && 0 !== dj[0] && 0 === fd.fe[0].bS && (bC[0] += b7(bj[0], 6)), a2 = fD - 1; 0 <= a2; a2--) a5h = b7(bD.yp(fE[a2]) * bC[fE[a2]], 1e4), bC[fE[a2]] += a5h < 1 ? 1 : a5h, bD.bE(fE[a2]);
				bF.bG[9] += bC[bB] - r
			}(), --a5Z <= 0)) {
			a5Z = a5X;
			for (var r = bC[bB], a2 = fD - 1; 0 <= a2; a2--) bC[fE[a2]] += bj[fE[a2]], bD.bE(fE[a2]);
			bF.bG[8] += bC[bB] - r
		}
	}, this.yp = function(player) {
		var mv = a5a[b7((a5b - 1) * bj[player], pW)],
			a5g = (aA.f9() < 1920 && (mv = mv < (a5g = b7(100 * (13440 - 6 * aA.f9()), 1920)) ? a5g : mv), this.ey(player));
		return bC[player] > a5g && (mv -= b7(2 * mv * (bC[player] - a5g), a5g)), mv < 0 ? 0 : 700 < mv ? 700 : mv
	}, this.ey = function(player) {
		player = 100 * bj[player];
		return pX < player ? pX : player
	}, this.bE = function(player) {
		var aF = bj[player] * pE;
		bC[player] = Math.min(Math.min(bC[player], pF), aF)
	}, this.j2 = function(player, j3) {
		cB.cC.jS(j3, e8.aL[0]), bF.jT(player, j3), fn.a5j(player, e8.aL[0] + e8.aL[1]), fn.jU(j3, e8.aL[0]), cB.cC.jy(player)
	}
}

function qh() {
	var a5k, a5l, a5m, a5n, a5o, a5p, a5q, a5r, a5s, a5t, a5u, a5v, a5w, a5x, a5y, a5z, a60, a61, a63, a64, a65, a66, a67, a6D, a6E, a62 = null,
		a69 = 0,
		a6A = new Float32Array(4),
		a6B = 0,
		a6C = !0;

	function a6G() {
		a62.width = h0, a62.height = cs, (a63 = a62.getContext("2d", {
			alpha: !0
		})).textAlign = d0, a63.textBaseline = cz, a63.imageSmoothingEnabled = !0
	}

	function a6H() {
		var a2, a6L;
		for (cy.font = cc + Math.floor(100 * a5u) + cd, a6L = 80 / Math.floor(cy.measureText(g6.h9(pF)).width), cy.font = cc + 100 + cd, a2 = bN - 1; 0 <= a2; a2--) a5r[a2] = 100 / Math.floor(cy.measureText(hA[a2]).width), a5q[a2] = Math.min(a6L,
			a5r[a2])
	}

	function a6M(a2) {
		return !h6.h7.h8 || bC[a2] < 1e6 ? 1 : bC[a2] < 1e7 ? a6A[0] : a6A[Math.min(Math.floor(Math.log10(bC[a2])) - 6, 3)]
	}

	function a6K(p9) {
		a61 = !1, a60 = 1, a5y = a5z = 0, a6C ? (p9.textAlign = d0, p9.textBaseline = cz) : p9.clearRect(0, 0, h0, cs);
		var gu, gv, a2, ch, gw, gx = dp / dq,
			gy = dr / dq,
			gz = (h0 + dp) / dq,
			h1 = (cs + dr) / dq,
			a6Q = 0 !== dj[bB] && bK.rn(bB);
		p9.imageSmoothingEnabled = !0;
		for (var eO = fD - 1; 0 <= eO; eO--) a2 = fE[eO], (ch = a5x * dq * a6M(a2) * a5q[a2] * a5o[a2]) < a5w || a5s <= ch || a5m[a2] + a5o[a2] > gx && a5m[a2] < gz && a5n[a2] + a5p[a2] > gy && a5n[a2] < h1 && (gu = h0 * (a5m[a2] + a5o[a2] / 2 -
			gx) / (gz - gx), gv = cs * (a5n[a2] + a5p[a2] / 2 - gy) / (h1 - gy) - .1 * ch, p9.font = uV[dk[a2]] + ch + cd, p9.fillStyle = function(ch, a2) {
				if (a5t <= ch && ch < a5s) return fB.a6d[bK.vs[a2]] + a6Z(ch).toFixed(3) + ")";
				return fB.a6e[bK.vs[a2]]
			}(ch, a2), h6.h7.h8 ? p9.fillText(g6.h9(bC[a2]), gu, gv) : a6S(a2, ch, gu, gv, p9), a61 = !0, 0 < a65[a2] ? function(gu, gv, ch, a2, p9) {
				0 === xZ[a2] ? a3.uP(a64[a2]) ? (function(gu, gv, ch, player, jH, p9) {
					for (var sC = .9 * ch / a3.cj, lc = gv - .5 * sC * a3.cj - .05 * ch, ti = (p9.globalAlpha = a6Z(ch), a6M(player) * (h6.h7.h8 ? a6B : a5r[player])), lb = gu - .5 * ch / ti - .4 * ch - sC * a3.cj, cK = 0; cK < 2; cK++)
						p9.setTransform(sC, 0, 0, sC, lb, lc), p9.drawImage(a3.rV[jH], 0, 0), lb = gu + .5 * ch / ti + .4 * ch;
					p9.globalAlpha = 1, p9.setTransform(1, 0, 0, 1, 0, 0)
				}(gu, gv, ch, a2, a64[a2], p9), a6U(gu, gv, ch, 0, 0, p9)) : a3.uO(a64[a2]) ? (a6c(gu, gv, ch, a64[a2], 0, p9), a6U(gu, gv, ch, 0, 1, p9)) : (a6c(gu, gv, ch, a64[a2], 1, p9), a6U(gu, gv, ch, 1, 0, p9)) : a6c(gu, gv, ch, a64[
					a2], 0, p9)
			}(gu, gv, ch, a2, p9) : 0 === xZ[a2] && a6U(gu, gv, ch, 0, 0, p9), a6Q && (0 < a65[a2 + bN] || 0 < a65[a2 + 2 * bN] || 0 < a65[a2 + 3 * bN] || 0 < a65[a2 + 4 * bN]) && function(gu, gv, ch, a2, p9) {
				var fA, tK = -1;
				for (fA = 4; 1 <= fA; fA--) 0 < a65[a2 + fA * bN] && tK++;
				for (fA = 1; fA < 5; fA++) 0 < a65[a2 + fA * bN] && (! function(gu, gv, ch, fA, a2, a6X, r, p9) {
					var sC = .8 * ch / a3.cj,
						gu = gu - .5 * sC * a3.cj - .534 * a6X * ch,
						a6X = gv + 1.4 * sC * a3.cj;
					p9.setTransform(sC, 0, 0, sC, gu, a6X), p9.globalAlpha = a6Z(ch), gv = 1 === fA ? a3.rV[a64[a2 + bN]] : 2 === fA ? mD.rR()[4].p3[r < 255 ? 1 : 0] : (3 === fA ? mD.rR()[5] : mD.rR()[6]).p3[0];
					p9.drawImage(gv, 0, 0), p9.globalAlpha = 1, p9.setTransform(1, 0, 0, 1, 0, 0)
				}(gu, gv, ch, fA, a2, tK, a65[a2 + fA * bN], p9), tK -= 2)
			}(gu, gv, ch, a2, p9), (gw = a5u * ch) < a5w || (p9.font = cc + gw + cd, h6.h7.h8 ? a6S(a2, gw, gu, gv + .78 * ch, p9) : p9.fillText(g6.h9(bC[a2]), gu, gv + .78 * ch)));
		p9.imageSmoothingEnabled = !1
	}

	function a6S(a2, ch, gs, gt, p9) {
		p9.fillText(hA[a2], gs, gt), a2 < di && 2 !== dk[a2] || (a2 = ch / a5r[a2], p9.fillRect(gs - .5 * a2, gt + .35 * ch, a2, Math.max(1, .1 * ch)))
	}

	function a6U(gu, gv, ch, a6X, a6Y, p9) {
		var sC = .95 * ch / a67,
			gu = gu - .5 * sC * a66 + .8 * a6X * ch,
			a6X = gv - 1.76 * sC * a67 - .82 * a6Y * ch;
		p9.setTransform(sC, 0, 0, sC, gu, a6X), p9.globalAlpha = a6Z(ch), p9.drawImage(cf.get(4), 0, 0), p9.globalAlpha = 1, p9.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6c(gu, gv, ch, jH, a6X, p9) {
		var sC = 1.2 * ch / a3.cj,
			gu = gu - .5 * sC * a3.cj - .8 * a6X * ch,
			a6X = gv - 1.5 * sC * a3.cj;
		p9.setTransform(sC, 0, 0, sC, gu, a6X), p9.globalAlpha = a6Z(ch), p9.drawImage(a3.rV[jH], 0, 0), p9.globalAlpha = 1, p9.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6Z(ch) {
		return a5t <= ch && ch < a5s ? 1 - (ch - a5t) / (a5s - a5t) : 1
	}

	function a6n(ti, cj) {
		return 1 + Math.floor(a5v * ti * cj)
	}

	function a6k(a2) {
		for (var left = a5m[a2], eO = a5m[a2] - ei[a2] - 1; 0 <= eO; eO--)
			if (!a6p(a2, --left, a5n[a2], a5p[a2])) {
				left++;
				break
			} var a6q = a5m[a2];
		for (eO = eh[a2] - a5m[a2] - a5o[a2]; 0 <= eO; eO--)
			if (!a6p(a2, ++a6q + a5o[a2] - 1, a5n[a2], a5p[a2])) {
				a6q--;
				break
			} var gs = Math.floor((left + a6q) / 2),
			top = a5n[a2];
		for (eO = a5n[a2] - el[a2] - 1; 0 <= eO; eO--)
			if (!a6r(a2, gs, --top, a5o[a2])) {
				top++;
				break
			} var bottom = a5n[a2];
		for (eO = ek[a2] - a5n[a2] - a5p[a2]; 0 <= eO; eO--)
			if (!a6r(a2, gs, ++bottom + a5p[a2] - 1, a5o[a2])) {
				bottom--;
				break
			} var gt = Math.floor((top + bottom) / 2);
		a6h(a2, gs, gt, a5o[a2], a5p[a2]) && (a5m[a2] = gs, a5n[a2] = gt)
	}

	function a6h(player, gs, gt, cj, ee) {
		bS = Math.floor(.2 * cj);
		for (var bS, fA = gs + cj - 1; gs <= fA; fA--)
			if (!a6p(player, fA, gt, ee)) return;
		for (fA = gt + ee - 1 - (bS = (bS = Math.floor(.25 * ee)) < 1 ? 1 : bS); gt + bS <= fA; fA--)
			if (!a6r(player, gs, fA, cj)) return;
		return 1
	}

	function a6p(player, gs, gt, ee) {
		return bK.m5(player, 4 * (gt * an.ao + gs)) && bK.m5(player, 4 * ((gt + ee - 1) * an.ao + gs))
	}

	function a6r(player, gs, gt, cj) {
		return bK.m5(player, 4 * (gt * an.ao + gs)) && bK.m5(player, 4 * (gt * an.ao + gs + cj - 1))
	}
	this.c6 = function() {
		if (a61 = !1, a5x = .88, a5u = .5, a5v = 1.8, a5s = Math.floor(.5 * ub), a5t = Math.floor(.2 * a5s), a5w = h6.h7.a6F < 4 ? 1 + h6.h7.a6F : 2 * (h6.h7.a6F - 1), a5l = a5k = 0, a5m = new Uint16Array(bN), a5n = new Uint16Array(bN), a5o =
			new Uint16Array(bN), a5p = new Uint16Array(bN), a5q = new Float32Array(bN), a5r = new Float32Array(bN), a64 = new Uint8Array(2 * bN), a65 = new Uint8Array(5 * bN), a6D = new Uint8Array(bN), a6E = new Uint8Array(bN), a6C || (a62 =
				a62 || document.createElement("canvas"), a6G()), a5z = a5y = 0, a60 = 1, h6.h7.h8) {
			var a2, a6L;
			for (a6H(), cy.font = cc + Math.floor(100) + cd, a6L = 100 / Math.floor(cy.measureText("900 000").width), a2 = bN - 1; 0 <= a2; a2--) a5q[a2] = Math.min(a6L, 2 * a5r[a2]);
			a6B = a6L, a6A[0] = 100 / (a6L * Math.floor(cy.measureText("5 000 000").width)), a6A[1] = 100 / (a6L * Math.floor(cy.measureText("50 000 000").width)), a6A[2] = 100 / (a6L * Math.floor(cy.measureText("500 000 000").width)), a6A[3] =
				100 / (a6L * Math.floor(cy.measureText("1 000 000 000").width))
		} else a6H();
		! function() {
			var a2;
			for (a2 = bN - 1; 0 <= a2; a2--) bj[a2] < 12 ? (a5m[a2] = ei[a2] + 1, a5n[a2] = el[a2] + 1, a5o[a2] = 1, a5p[a2] = 1) : (a5m[a2] = ei[a2], a5n[a2] = el[a2] + 1, a5o[a2] = 4, a5p[a2] = 2);
			if (hW)
				for (a2 = 0; a2 < di; a2++) a5o[a2] = 0;
			a66 = cf.get(4).width, a67 = cf.get(4).height
		}()
	}, this.a5j = function(bQ, tN) {
		tN > 18 * bj[bQ] ? (a6E[bQ] = 6, bK.vs[bQ] = 2 + bK.vs[bQ] % 2) : (a6D[bQ] = 4, (bK.vs[bQ] < 2 || 3 < bK.vs[bQ]) && (bK.vs[bQ] = 6 + bK.vs[bQ] % 2))
	}, this.jU = function(bQ, tN) {
		tN > 6 * bj[bQ] ? (a6E[bQ] = 6, bK.vs[bQ] = 4 + bK.vs[bQ] % 2) : (a6D[bQ] = 4, (bK.vs[bQ] < 4 || 5 < bK.vs[bQ]) && (bK.vs[bQ] = 8 + bK.vs[bQ] % 2))
	}, this.resize = function() {
		a6C || (a6G(), a6K(a63))
	}, this.pS = function() {
		for (var a2 = 0; a2 < di; a2++) eh[a2] - ei[a2] != 3 || ek[a2] - el[a2] != 3 ? (a5m[a2] = ei[a2] + (eh[a2] !== ei[a2] ? 1 : 0), a5n[a2] = el[a2], a5o[a2] = 1, a5p[a2] = 1) : (a5m[a2] = ei[a2], a5n[a2] = el[a2] + 1, a5o[a2] = 4, a5p[a2] =
			2)
	}, this.kC = function(player, cb, a6N) {
		player += cb * bN;
		if (0 === cb) return a64[player] === a6N && 0 < a65[player] ? void(a65[player] = 0) : (a64[player] = a6N, void(a65[player] = a3.uP(a6N) ? 255 : 64));
		1 === cb ? (a65[player] = 64, a64[player] = a6N) : a65[player] = a6N
	}, this.cx = function() {
		a6C ? a6K(cy) : a61 && (1 !== a60 ? (cy.imageSmoothingEnabled = !0, cy.setTransform(a60, 0, 0, a60, 0, 0), cy.drawImage(a62, -a5y / a60, -a5z / a60), cy.setTransform(1, 0, 0, 1, 0, 0)) : (cy.imageSmoothingEnabled = !1, cy.drawImage(a62, -
			a5y, -a5z)))
	}, this.wk = function(da, dd) {
		a5y += da, a5z += dd
	}, this.nu = function(da, dd) {
		fn.wk(da, dd)
	}, this.zoom = function(cX, cp, cq) {
		a60 *= cX, a5y = (a5y + cp) * cX - cp, a5z = (a5z + cq) * cX - cq
	}, this.gK = function(tY) {
		return !a6C && (tY ? ++a69 % h6.y6[h6.h7.a6O] == 0 : aA.f9() % h6.y6[h6.h7.a6O] == 0) && (a69 = 0, a6K(a63), !0)
	}, this.h3 = function(a2) {
		return a6M(a2) * a5q[a2]
	}, this.a6P = function(player) {
		return a5q[player]
	}, this.eu = function() {
		4 <= ++a5l && ! function() {
			var a2, eO, cK;
			for (a5l = 0, cK = 4; 1 <= cK; cK--)
				for (eO = fD - 1; 0 <= eO; eO--) a2 = fE[eO] + cK * bN, 0 < a65[a2] && a65[a2] < 255 && a65[a2]--;
			if (2 !== gL)
				for (eO = fD - 1; 0 <= eO; eO--) a2 = fE[eO], 0 < a65[a2] && a65[a2] < 255 && a65[a2]--
		}();
		for (var bI = Math.floor(.1 * fD), a2 = a5k + (bI = fD < (bI = bI < 8 ? 8 : bI) ? fD : bI) - 1; a5k <= a2; a2--) ! function(a2) {
			var ti = a6M(a2) * a5q[a2];
			0 < a5o[a2] && a6h(a2, a5m[a2], a5n[a2], a5o[a2], a5p[a2]) ? ! function(a2) {
				for (var gs, gt, cj, ee, dT = !1, cK = 0; cK < 8; cK++) {
					if (cj = a5o[a2] + 2, ee = a5p[a2] + 2, cj > eh[a2] - ei[a2] + 1 || ee > ek[a2] - el[a2] + 1) return dT;
					if (gs = a5m[a2] - 1, gt = a5n[a2] - 1, !a6h(a2, gs, gt, cj, ee)) return dT;
					a5m[a2] = gs, a5n[a2] = gt, a5o[a2] = cj, a5p[a2] = ee, dT = !0
				}
				return dT
			}(a2) && function(a2, ti) {
				for (var gs, gt, cj, ee, dT = !1, zt = a5o[a2], hj = 1 + Math.floor(.02 * zt), cK = 1; cK < 5; cK++) {
					if ((cj = zt + cK * hj) > eh[a2] - ei[a2] + 1) return dT;
					if ((ee = a6n(ti, cj)) > ek[a2] - el[a2] + 1) return dT;
					gs = ei[a2] + Math.floor(Math.random() * (eh[a2] - ei[a2] + 2 - cj)), gt = el[a2] + Math.floor(Math.random() * (ek[a2] - el[a2] + 2 - ee)), a6h(a2, gs, gt, cj, ee) && (a5m[a2] = gs, a5n[a2] = gt, a5o[a2] = cj, a5p[
						a2] = ee, dT = !0)
				}
				return dT
			}(a2, ti) && a6k(a2) : ! function(a2, ti) {
				var ee, gs = a5m[a2] + 1,
					gt = a5n[a2] + 1,
					cj = a5o[a2] - 2;
				for (;;) {
					if (cj < 1) {
						a5o[a2] = 0;
						break
					}
					if (ee = a6n(ti, cj), a6h(a2, gs, gt, cj, ee)) return a5m[a2] = gs, a5n[a2] = gt, a5o[a2] = cj, a5p[a2] = ee, 1;
					gs++, gt++, cj -= 2
				}
				return
			}(a2, ti) ? function(a2, ti) {
				var gs, gt, cj, ee, cK, hp, eQ = eh[a2] - ei[a2] + 1,
					a6o = Math.floor(.02 * eQ);
				for (hp = -6 * (a6o = a6o < 1 ? 1 : a6o), cK = eQ; hp <= cK; cK -= a6o)
					if (ee = a6n(ti, cj = 0 < cK ? cK : 1), gs = ei[a2] + Math.floor(Math.random() * (eh[a2] - ei[a2] + 2 - cj)), gt = el[a2] + Math.floor(Math.random() * (ek[a2] - el[a2] + 2 - ee)), a6h(a2, gs, gt, cj, ee)) return a5m[
						a2] = gs, a5n[a2] = gt, a5o[a2] = cj, a5p[a2] = ee
			}(a2, ti) : a6k(a2)
		}(fE[a2 % fD]);
		a5k = (a5k + bI) % fD
	}, this.g3 = function() {
		var a2, bQ, dD, dE;
		if (aA.f9() % 4 == 1)
			for (a2 = fD - 1; 0 <= a2; a2--) bQ = fE[a2], bK.vs[bQ] < 2 || ((dD = Math.max(a6D[bQ] - 1, 0)) === (dE = Math.max(a6E[bQ] - 1, 0)) ? 0 === dD && (bK.vs[bQ] %= 2) : 0 === dE && bK.vs[bQ] < 6 && (bK.vs[bQ] += 4), a6D[bQ] = dD, a6E[
				bQ] = dE)
	}, this.t2 = function(player) {
		var a2 = player + 2 * bN,
			r = a65[a2];
		return 0 < r && (fm.n3(50, player), a65[a2] = 0, 255 === r)
	}, this.rt = function(player) {
		return 255 === a65[player + 2 * bN]
	}
}

function qi() {
	var cY, a6s;
	this.c6 = function() {
		cY = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var a2, eO, a6t = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			a6u = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (a6s =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), a2 = cY.length - 1; 0 <= a2; a2--)
			for (eO = a6t.length - 1; 0 <= eO; eO--) cY[a2] = cY[a2].replace(a6t[eO], a6u[eO]);
		if (settings.realisticNames) cY = realisticNames;
	}, this.kj = function() {
		var a2;
		if (fW.fX && fW.fY.a52)
			for (a2 = di; a2 < bN; a2++) hA[a2] = fW.fY.a52[a2 % ld];
		else(9 === fa ? function() {
			var a2, mv = eR.random(),
				bI = cY.length,
				cP = di + fg.a70;
			for (a2 = cP - 1; di <= a2; a2--) hA[a2] = cY[(a2 + mv) % bI];
			for (bI = a6s.length, a2 = cP; a2 < bN; a2++) hA[a2] = a6s[a2 % bI]
		} : fc ? function() {
			var a2, mv = eR.random();
			for (a2 = di; a2 < bN; a2++) hA[a2] = cY[(a2 + mv) % bN]
		} : function() {
			var a2, bI = cY.length,
				mv = eR.random();
			for (a2 = di; a2 < bN; a2++) hA[a2] = cY[(a2 + mv) % bI]
		})()
	}, this.pp = function() {
		var a2, bI, cP, mv;
		if (!fc) {
			for (td = new Array(di), bI = di, a2 = 0; a2 < bI; a2++) td[a2] = hA[a2];
			if (h6.h7.tc) {
				for (cP = cY.length, mv = eR.a6z(), a2 = 0; a2 < bI; a2++) hA[a2] = cY[(a2 + mv) % cP];
				hA[bB] = td[bB]
			}
		}
	}
}

function r6() {
	this.a71 = [], this.a72 = [], this.c6 = function() {
		this.a71 = [], this.a72 = []
	}, this.eu = function() {
		0 <= this.a71.length && this.a73(this.a71), 0 <= this.a72.length && this.a73(this.a72)
	}, this.a73 = function(aR) {
		for (var cK = -1, a2 = aR.length - 1; 0 <= a2; a2--)
			if (aR[a2].aB--, aR[a2].aB <= 0) {
				cK = a2;
				break
			} for (a2 = cK; 0 <= a2; a2--) aR.shift()
	}, this.rf = function(id, mP, a74) {
		return this.a75(this.a71, id, mP, a74)
	}, this.a76 = function(id, mP, a74) {
		return this.a75(this.a72, id, mP, a74)
	}, this.a75 = function(aR, id, mP, a74) {
		return ! function(aR, id, mP) {
			var a2, lJ;
			for (a2 = mP.length - 1; 0 <= a2; a2--)
				for (lJ = aR.length - 1; 0 <= lJ; lJ--)
					if (aR[lJ].player === mP[a2] && id === aR[lJ].id) return 1;
			return
		}(aR, id, mP) && (a74 && function(aR, id, mP) {
			var a2;
			for (a2 = mP.length - 1; 0 <= a2; a2--) aR.push({
				player: mP[a2],
				id: id,
				aB: 384
			})
		}(aR, id, mP), !0)
	}
}

function pk(mP) {
	var a2;
	for (hA = new Array(bN), td = hA, dj = new Uint8Array(bN), ei = new Uint16Array(bN), el = new Uint16Array(bN), eh = new Uint16Array(bN), ek = new Uint16Array(bN), bj = new Uint32Array(bN), lt = new Uint32Array(bN), bC = new Uint32Array(bN),
		donationsTracker.reset(), bJ = new Array(bN), bb = new Array(bN), bc = new Array(bN), bf = new Array(bN), dk = new Uint8Array(bN), a2 = mP.length - 1; 0 <= a2; a2--) hA[a2] = mP[a2].name, dk[a2] = mP[a2].a2p
}

function r4() {
	this.to = 0, this.mP = null, this.c6 = function() {
		this.to = 0, this.mP = []
	}, this.a79 = function(player) {
		this.mP.push(player), nE++, dk[player] = 2, player === bB && (gE.show(!1, !1), fo.yd()), fn.t2(player)
	}, this.a4j = function(player) {
		var a2, mP;
		if (2 !== dk[player])
			for (a2 = (mP = this.mP).length - 1; 0 <= a2; a2--)
				if (mP[a2] === player) return void mP.splice(a2, 1)
	}, this.eu = function() {
		fc || (30 === this.to && 2140 <= aA.f9() && this.a7A(), this.to = (this.to + 1) % 60)
	}, this.a7A = function() {
		for (var mP = this.mP, a2 = mP.length - 1; 0 <= a2; a2--) ! function(player, dn) {
			!at.cF(player) || (dn = Math.max(Math.min(100, bC[player]), b7(dn * bC[player], 100))) < 100 || (0 === bb[player].length ? !e2.et.eu(player) && cH && ex(player, dn, 0, 0) : (cH ? f8 : fH)(player, dn))
		}(mP[a2], 12)
	}
}

function r0() {
	var a7C, a7E;
	this.a1b = 5, this.a1c = this.a1b - 1, this.a0k = this.a1b + this.a1c, this.a0j = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.a7D = null;

	function a7M(a2) {
		return a7E[a2].a7H && a7C[a2].a7M()
	}

	function a7O(a0n) {
		a7E[a0n].aB = aA.aB, a7E[a0n].a7I = !1
	}
	this.oC = 0, this.a1N = 0, this.c6 = function() {
		this.a7D = new Array(this.a1b);
		this.a7D[0] = "territorial.io";
		var a2, a7G = eR.a6z(0);
		for (eR.pj(0), a2 = 1; a2 < this.a1b; a2++) this.a7D[a2] = k.mu() + ".territorial.io";
		for (eR.pj(a7G), a7C = new Array(this.a0k), a7E = new Array(this.a0k), a2 = this.a0k - 1; 0 <= a2; a2--) a7E[a2] = {
			a7H: !1,
			aB: 0,
			a7I: !1
		}
	}, this.tH = function() {
		return this.a1N < this.a1b ? this.a1N : this.a1N - this.a1c
	}, this.eu = function() {
		for (var a2 = this.a0k - 1; 0 <= a2; a2--) this.a0f(a2) && aA.aB > a7E[a2].aB + 15e3 && iy.a7J(a2, a7E[a2].a7I)
	}, this.x2 = function(a0n, a7K) {
		if (a7E[a0n].a7H) {
			if (a7C[a0n].a7M()) return a7C[a0n].a7N(a7K), a7C[a0n].a0f();
			a7C[a0n].kP()
		}
		return this.a7L(a0n, a7K), !1
	}, this.a7L = function(a0n, a7K) {
		a7E[a0n].a7H = !0, a7O(a0n), a7C[a0n] = new a7P, a7C[a0n].c6(a0n, a7K)
	}, this.a7N = function(a0n, a7K) {
		a7M(a0n) && a7C[a0n].a7N(a7K)
	}, this.a7Q = function(a0n, a7K) {
		0 === a7K ? oP.x4() : a7K < 3 ? iy.zS(a0n, a7K - 1) : 3 === a7K ? iy.a2k(a0n) : 4 === a7K ? q1.x4(a0n) : 5 === a7K ? a0n === this.oC && iy.a7R() : 6 !== a7K && 7 === a7K && iy.a3E(a0n)
	}, this.a0f = function(a2) {
		return a7E[a2].a7H && a7C[a2].a0f()
	}, this.send = function(a0n, jm) {
		a7O(a0n), a7C[a0n].send(jm)
	}, this.oB = function(a0n) {
		a7E[a0n].a7I = !0
	}, this.close = function(a0n, a7S) {
		a7M(a0n) && a7C[a0n].close(a7S)
	}, this.a7T = function(a0n, a7S) {
		q2.a0q(a7S), a7M(a0n) && a7C[a0n].close(a7S)
	}, this.a0s = function(a7S) {
		for (var a2 = this.a0k - 1; 0 <= a2; a2--) this.close(a2, a7S)
	}, this.a7U = function(a0n, a7S) {
		for (var a2 = this.a0k - 1; 0 <= a2; a2--) a2 !== a0n && this.close(a2, a7S)
	}, this.a7V = function(a0n, ng) {
		a7C[a0n].kP(), q2.c6(a0n, ng.code)
	}
}

function pq() {
	for (fD = 0, a2 = bN - 1; 0 <= a2; a2--) 0 !== dj[a2] && fD++;
	fE = new Uint16Array(fD);
	for (var bI = 0, a2 = 0; a2 < bN; a2++) 0 !== dj[a2] && (fE[bI++] = a2)
}

function g1() {
	a7W(), a7X()
}

function a7X() {
	for (var a2 = fD - 1; 0 <= a2; a2--) 0 === dj[fE[a2]] && a7Y(a2)
}

function a7Y(a2) {
	fD--;
	for (var eO = a2; eO < fD; eO++) fE[eO] = fE[eO + 1]
}

function a7W() {
	for (var dI, a2 = fD - 1; 0 <= a2; a2--) bj[fE[a2]] <= b7(lt[fE[a2]], 4) ? bj[fE[a2]] <= 1e3 && (2 !== dj[fE[a2]] || 0 === bj[fE[a2]]) && a4T(fE[a2]) : bj[fE[a2]] >= lt[fE[a2]] ? lt[fE[a2]] = bj[fE[a2]] : (dI = b7(lt[fE[a2]] - bj[fE[a2]], 1e3),
		lt[fE[a2]] -= dI < 1 ? 1 : dI)
}

function jh() {
	for (var a4K = 0, a2 = fD - 1; 0 <= a2; a2--) a4K += bC[fE[a2]];
	return a4K % 4096
}
var mC, zA, pr, ps, aC = 0,
	nn = 0;

function a7f() {
	a7e = 2, a7b = 2173, a7a = 10, a7Z = "1.89.8   3 Feb 2024", a7g(), qE(), ep();
	var a7h = document.getElementById("usernameField");
	a7h && document.body.removeChild(a7h), e = "undefined" != typeof Android ? Android : null, 12 <= (d = e ? e.getVersion() : 0) && e.prepareAd("6685097465"), b = !1, window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers
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
		}), e || b || (qD.a7i += "_browser"), a7d = (new Date).getTime() % 1024, nm = a7j(), f.c6(), a1B = new zu, h6.c6(), oq.c6(), n(), aE(), a7k(), hn = new a7l, hx = new z5, a3 = new tw, bF = new a7m, mE = new a7n, a10 = new tf, (aA = new a7o)
		.c6(), fB = new a7p, g9 = new a7q, (zb = new cW).c6(), (cu = new zB).c6(), oY = new zj, uY(), eR.c6(), bD.a5c(), pm.c6(), aH.c6(), oV.c6(), fq.c6(), oP.c6(), po.c6(), oJ.c6(), cf.c6(), qA.c6(), qC.a1Z(), aA.cm = !0, setTimeout(function() {
			an.kj(2, 14071)
		}, 0), nn = 2
}

function aG() {
	nn || (nn = 1, ne(), a7f())
}

function a7j() {
	try {
		return window.self !== window.top
	} catch (ng) {
		return !0
	}
}

function a7k() {
	a7c = window.location.hostname, nl = 0 <= a7c.toLowerCase().indexOf("territorial.io")
}

function qj() {
	var a7r;
	this.fh = null, this.c6 = function() {
		a7r = [], 9 === fa && this.a7s()
	}, this.a7s = function() {
		var a2, a7t = [45, 70, 95, 150, 190, 333];
		if (this.a70 = 0, this.fh = [0, 0, 0, 0, 0, 0], di <= a7t[0]) this.fh[0] = Math.max(by.bz(di * (512 - di), a7t[0]), 16), fV = this.fh[0];
		else
			for (fV = bN - di, a2 = 1; a2 < 6; a2++)
				if (di <= a7t[a2]) {
					this.fh[a2 - 1] = 512 - a7t[a2 - 1] - b7((512 - a7t[a2 - 1]) * (di - a7t[a2 - 1]), a7t[a2] - a7t[a2 - 1]), this.fh[a2] = 512 - di - this.fh[a2 - 1];
					break
				} ld = di + fV
	}, this.a4i = function(player) {
		a7r.push({
			player: player,
			tK: 14 + eR.eS(20)
		})
	}, this.eu = function() {
		var a2;
		if (9 === fa)
			for (a2 = a7r.length - 1; 0 <= a2; a2--) --a7r[a2].tK <= 0 && (fn.kC(a7r[a2].player, 0, 46), a7r.splice(a2))
	}
}

function rI() {
	function a7y(a2) {
		return !(1 === a2 || a2 >= an.a84())
	}
	this.ao = 0, this.ap = 0, this.l2 = null, this.ky = null, this.kz = null, this.l3 = null, this.lQ = 0, this.a2F = 0, this.l0 = !1, this.a56 = 19, this.l1 = new a7v, this.fY = new a7w, this.c6 = function() {
		this.fY.c6()
	}, this.kj = function(a7x, a2J) {
		((a7x %= this.a56) !== this.lQ || a7y(this.lQ) && a2J !== this.a2F) && (this.l0 = !1, this.l1.a2P(), eR.pj(a7x), this.lQ = a7x, this.a2F = a2J, a7y(a7x) && (an.fY.lP[a7x].a7G = a2J), this.lQ >= an.a84() ? a80() : (a7x = an.fY.lP[this.lQ],
			this.ao = a7x.cj, this.ap = a7x.ee, eR.pj(a7x.a7G), q4.kj([this.ao, this.ap, a7x.hF, a7x.hC]), a81(), pm.a82(), q4.a83()))
	}, this.a84 = function() {
		return 10
	}, this.a85 = function(a2) {
		return 3 === a2 || 7 === a2 || 9 === a2 || a2 === an.a56
	}, this.a86 = function(a2) {
		return 2 === a2 || 7 === a2 || 9 === a2
	}, this.a87 = function(a2) {
		return 1 === a2
	}, this.wI = function() {
		return 19
	}
}

function a7v() {
	function a8H() {
		an.l1.eu()
	}

	function a8M(bQ, a8L) {
		0 < a8L && (an.l3[bQ] += a8L, an.l3[bQ + 1] += a8L, an.l3[bQ + 2] += a8L)
	}

	function rp(bQ) {
		return an.l3[bQ + 2] > an.l3[bQ] && an.l3[bQ + 2] > an.l3[bQ + 1]
	}
	this.wx = -1, this.a8 = 0, this.a88 = 0, this.a89 = 8, this.a8A = 32, this.a8B = 8, this.a8C = 32, this.a8D = [0, 0], this.vs = [0, 0, 0, 0], this.e3 = null, this.a8E = !0, this.a8F = !1, this.a2P = function() {
		-1 !== this.wx && clearTimeout(this.wx), this.wx = -1, this.e3 = null, q4.a83()
	}, this.c6 = function() {
		7 === aH.ob() || this.a8F || (this.a8E = !0, this.a8 = 0, this.a88 = 1, this.a8D = [an.fY.lP[an.lQ].lO[0], an.fY.lP[an.lQ].lR[0]], this.vs = [an.fY.lP[an.lQ].a8G[3], an.fY.lP[an.lQ].a8G[4], an.fY.lP[an.lQ].a8G[5], an.fY.lP[an.lQ].a8G[6]],
			this.a89 = an.fY.lP[an.lQ].a8G[7], this.a8A = an.fY.lP[an.lQ].a8G[8], this.a8B = an.fY.lP[an.lQ].a8G[9], this.a8C = an.fY.lP[an.lQ].a8G[10], this.a8E ? this.wx = setTimeout(a8H, 16) : this.eu())
	}, this.eu = function() {
		if (8 === aH.ob() && gD.hT()) this.wx = setTimeout(a8H, 16);
		else {
			if (0 === this.a8) {
				var a7G = eR.a6z();
				if (eR.pj(an.fY.lP[an.lQ].a8G[2]), q4.kj([an.ao, an.ap, an.fY.lP[an.lQ].a8G[0], an.fY.lP[an.lQ].a8G[1]]), eR.pj(a7G), this.e3 = q4.a8I(), this.a8++, this.a8E) return void(this.wx = setTimeout(a8H, 16))
			}
			for (var bQ, dK, a7G = this.a8E ? 10 : 1e6, a7G = an.ap - this.a88 - 1 < a7G ? an.ap - this.a88 - 1 : a7G, lq = this.a88 + a7G, gt = this.a88; gt < lq; gt++)
				for (var gs = 1; gs < an.ao - 1; gs++) rp(bQ = 4 * (dK = gs + gt * an.ao)) ? this.a8J(bQ, dK, 1) : (this.a8J(bQ, dK, 0), function(gs, gt, bQ) {
					return 1 < gs && rp(bQ - 4) || gs < an.ao - 2 && rp(bQ + 4) || 1 < gt && rp(bQ - 4 * an.ao) || gt < an.ap - 2 && rp(bQ + 4 * an.ao)
				}(gs, gt, bQ) && this.a8K(gs, gt));
			this.a88 = lq, this.a88 >= an.ap - 1 ? (an.ky.putImageData(an.kz, 0, 0, 1, 1, an.ao - 2, an.ap - 2), aA.cm = !0, this.a2P()) : this.a8E && (this.wx = setTimeout(a8H, 16))
		}
	}, this.a8J = function(bQ, dK, cb) {
		a8M(bQ, Math.floor(this.a8D[cb] + this.vs[cb] * this.e3[dK] / 1e4) - an.l3[bQ])
	}, this.a8N = function(bQ, mv, a8O, cb, vs) {
		a8M(bQ, Math.floor(this.a8D[cb] + (1 - mv / a8O) * vs) - an.l3[bQ])
	}, this.a8K = function(cp, cq) {
		for (var bQ, mv, a8O, lU = cp - this.a8A, lV = cq - this.a8A, lr = cp + this.a8A, lq = cq + this.a8A, lU = lU < 1 ? 1 : lU, lr = lr > an.ao - 2 ? an.ao - 2 : lr, lq = lq > an.ap - 2 ? an.ap - 2 : lq, gt = lV < 1 ? 1 : lV; gt <= lq; gt++)
			for (var gs = lU; gs <= lr; gs++) rp(bQ = 4 * (gs + gt * an.ao)) ? (a8O = this.a89 + (this.a8A - this.a89) * this.e3[gs + an.ao * gt] / 1e4, Math.abs(cp - gs) > a8O || Math.abs(cq - gt) > a8O || a8O <= (mv = Math.sqrt((cp - gs) * (
				cp - gs) + (cq - gt) * (cq - gt))) || this.a8N(bQ, mv, a8O, 1, this.vs[3])) : (a8O = this.a8B + (this.a8C - this.a8B) * this.e3[gs + an.ao * gt] / 1e4, Math.abs(cp - gs) > a8O || Math.abs(cq - gt) > a8O || a8O <= (mv = Math
				.sqrt((cp - gs) * (cp - gs) + (cq - gt) * (cq - gt))) || this.a8N(bQ, mv, a8O, 0, this.vs[2]))
	}
}

function a81() {
	2 === an.lQ ? a8P([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === an.lQ ? a8P([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === an.lQ ? a8P([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === an.lQ && a8P([
		512
	], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function a8P(a8Q, a8R, a8S, a8T, a8U) {
	for (var gs, gt, a8W, a8X, cX, a8Y, dZ = a8Q.length - 1, a8V = an.ao + an.ap, bI = (a8V *= a8V, a8S.length), a2 = bI - 1; 0 <= a2; a2--) a8S[a2] *= a8S[a2];
	var a8Z = new Array(bI),
		a8a = new Array(bI),
		a8b = new Array(bI),
		aF = q4.a8I();
	if (void 0 === a8U)
		for (a8U = new Array(bI), a2 = bI - 1; 0 <= a2; a2--) a8U[a2] = 0;
	for (a2 = 1; a2 < bI; a2++) a8Z[a2] = a8S[a2] - a8S[a2 - 1], a8a[a2] = a8T[a2] - a8T[a2 - 1], a8b[a2] = a8U[a2] - a8U[a2 - 1];
	for (gs = an.ao - 1; 0 <= gs; gs--)
		for (gt = an.ap - 1; 0 <= gt; gt--) {
			for (a8W = a8V, a2 = dZ; 0 <= a2; a2--) a8W = (a8X = (gs - a8Q[a2]) * (gs - a8Q[a2]) + (gt - a8R[a2]) * (gt - a8R[a2])) < a8W ? a8X : a8W;
			for (cX = a8T[bI - 1], a8Y = a8U[bI - 1], a2 = 1; a2 < bI; a2++)
				if (a8W < a8S[a2]) {
					cX = a8T[a2 - 1] + a3z((a8W - a8S[a2 - 1]) * a8a[a2], a8Z[a2]), a8Y = a8U[a2 - 1] + a3z((a8W - a8S[a2 - 1]) * a8b[a2], a8Z[a2]);
					break
				} a8c(an.ao * gt + gs, cX, a8Y, aF)
		}
}

function a8c(cb, cX, a8Y, aF) {
	cX < 500 ? aF[cb] = b7(aF[cb] * cX * 2, 1e3) : 500 < cX && (aF[cb] += b7(2 * (1e4 - aF[cb]) * (cX - 500), 1e3)), aF[cb] += b7(a8Y * (10 * cX - aF[cb]), 1e3)
}

function qk() {
	var a8d;
	this.tU = 0, this.tV = 0, this.tW = 0, this.tX = 0, this.c6 = function() {
		(a8d = new Array(an.a84()))[0] = {
			cj: [0, 5e3, 8e3, 1e4],
			mv: [220, 250, 255, 220],
			p4: [190, 220, 0, 0],
			cK: [170, 200, 0, 0]
		}, a8d[1] = {
			cj: [0, 4e3, 5e3, 6e3, 1e4],
			mv: [25, 0, 100, 0, 25],
			p4: [25, 0, 0, 0, 25],
			cK: [25, 0, 0, 0, 25]
		}, a8d[2] = {
			cj: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			mv: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			p4: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			cK: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, a8d[3] = {
			cj: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			mv: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			p4: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			cK: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, a8d[4] = {
			cj: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			mv: [10, 10, 20, 10, 10, 170, 212],
			p4: [20, 20, 60, 100, 100, 110, 170],
			cK: [70, 70, 160, 30, 30, 60, 120]
		}, a8d[5] = {
			cj: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			mv: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			p4: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			cK: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, a8d[6] = {
			cj: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			mv: [10, 10, 60, 255, 255, 200, 200],
			p4: [10, 10, 60, 255, 255, 200, 200],
			cK: [80, 80, 255, 255, 255, 200, 200]
		}, a8d[7] = {
			cj: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			mv: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			p4: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			cK: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, a8d[8] = {
			cj: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			mv: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			p4: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			cK: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, a8d[9] = {
			cj: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			mv: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			p4: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			cK: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}
	}, this.a82 = function() {
		var a2, eO, aS, a3Q = function() {
				var a3Q;
				return an.l2 = document.createElement("canvas"), an.l2.width = an.ao, an.l2.height = an.ap, an.ky = an.l2.getContext("2d", {
					alpha: !1
				}), a3Q = an.ky.getImageData(0, 0, an.ao, an.ap), an.l3 = a3Q.data, a3Q
			}(),
			cj = a8d[an.lQ].cj,
			mv = a8d[an.lQ].mv,
			p4 = a8d[an.lQ].p4,
			cK = a8d[an.lQ].cK,
			aF = q4.a8I(),
			bI = cj.length - 2,
			a8h = new Array(1 + bI),
			a8i = new Array(1 + bI),
			a8j = new Array(1 + bI),
			a8k = new Array(1 + bI);
		for (eO = bI; 0 <= eO; eO--) a8h[eO] = cj[eO + 1] - cj[eO], a8i[eO] = mv[eO + 1] - mv[eO], a8j[eO] = p4[eO + 1] - p4[eO], a8k[eO] = cK[eO + 1] - cK[eO];
		for (a2 = an.ao * an.ap - 1; 0 <= a2; a2--)
			for (eO = bI; 0 <= eO; eO--)
				if (aF[a2] >= cj[eO]) {
					aS = aF[a2] - cj[eO], an.l3[4 * a2] = mv[eO] + a3z(a8i[eO] * aS, a8h[eO]), an.l3[4 * a2 + 1] = p4[eO] + a3z(a8j[eO] * aS, a8h[eO]), an.l3[4 * a2 + 2] = cK[eO] + a3z(a8k[eO] * aS, a8h[eO]), an.l3[4 * a2 + 3] = 255;
					break
				} an.ky.putImageData(a3Q, 0, 0), an.a87(an.lQ) && cf.cg() && an.a87(an.lQ) && (a3Q = cf.rW("arena"), an.ky.save(), an.ky.globalAlpha = 1 === an.lQ ? .1 : 1, an.ky.imageSmoothingEnabled = !0, an.ky.scale(2.8, 2.8), an.ky.drawImage(
				a3Q, Math.floor((an.ao / 2.8 - a3Q.width) / 2), Math.floor(.5 * an.ap / 2.8 - a3Q.height / 2)), an.ky.restore(), a3Q = cf.rW("territorial.io"), an.ky.save(), an.ky.globalAlpha = 1 === an.lQ ? .1 : 1, an.ky
			.imageSmoothingEnabled = !0, an.ky.scale(.87, .87), an.ky.drawImage(a3Q, Math.floor(.745 * (an.ao / .87 - a3Q.width)), Math.floor(.422 * an.ap / .87 - a3Q.height / 2)), an.ky.restore()), an.l0 = !0, aA.cm = !0
	}, this.pn = function() {
		for (var bQ, gs, gt, a8n, a8o, aU, tV = 0, cj = an.ao, ee = an.ap, aS = cj * ee * 4, a8p = zA, a8q = an.l3, a2 = cj - 1; 0 <= a2; a2--) a8p[(bQ = a2 << 2) + 2] = a8p[aS - bQ - 2] = 3;
		for (aS = 4 * cj, a2 = ee - 1; 0 <= a2; a2--) a8p[(bQ = a2 * aS) + 2] = a8p[bQ + aS - 2] = 3;
		for (a8n = cj - 1, a8o = ee - 1, gt = 1; gt < a8o; gt++)
			for (aS = gt * cj, gs = 1; gs < a8n; gs++) aU = 1 - (a8q[(bQ = aS + gs << 2) + 2] > a8q[bQ + 1] && a8q[bQ + 2] > a8q[bQ]), a8p[bQ + 2] = 2 - aU, tV += aU;
		this.tU = (cj - 2) * (ee - 2), this.tX = 0, an.a85(an.lQ) && function() {
			var bQ, gs, gt, aS, a8p = zA,
				a8q = an.l3,
				cj = an.ao,
				a8n = cj - 1,
				a8o = an.ap - 1,
				tK = 0;
			for (gt = 1; gt < a8o; gt++)
				for (aS = gt * cj, gs = 1; gs < a8n; gs++) a8q[bQ = aS + gs << 2] === a8q[1 + bQ] && a8q[bQ] === a8q[2 + bQ] && (tK++, a8p[2 + bQ] = 3);
			pm.tX = tK
		}(), this.tV = pW = tV - this.tX, this.tW = this.tU - this.tV - this.tX
	}
}

function a80() {
	var j, a8s = an.a84();
	an.lQ === a8s ? j =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		an.lQ === a8s + 1 ? j =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		an.lQ === a8s + 2 ? j =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		an.lQ === a8s + 3 ? j =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		an.lQ === a8s + 4 ? j =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		an.lQ === a8s + 5 ? j =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		an.lQ === a8s + 6 ? j =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		an.lQ === a8s + 7 ? j =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		an.lQ === a8s + 8 && (j =
			"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-"
			), (new kl).kn(j)
}

function a7w() {
	this.lP = null, this.a8t = null, this.c6 = function() {
		var a2, a8u = [120, 105, 92],
			cos = [12, 12, 60],
			a8v = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			a8w = [140, 130, 120],
			a8x = [12, 12, 76],
			a8y = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			a8z = [130, 117, 106],
			a90 = [12, 12, 68],
			a91 = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		for (this.lP = new Array(an.a56 + 1), this.lP[0] = {
				name: "White Arena",
				cj: 230,
				ee: 230,
				hF: 1e3,
				hC: 2e3,
				a7G: 173
			}, this.lP[1] = {
				name: "Black Arena",
				cj: 800,
				ee: 800,
				hF: 100,
				hC: 50,
				a7G: 43
			}, this.lP[2] = {
				name: "Island",
				cj: 512,
				ee: 512,
				hF: 128,
				hC: 32,
				a7G: 0
			}, this.lP[3] = {
				name: "Mountains",
				cj: 960,
				ee: 960,
				hF: 60,
				hC: 8,
				a7G: 0
			}, this.lP[4] = {
				name: "Desert",
				cj: 900,
				ee: 900,
				hF: 100,
				hC: 5,
				a7G: 0
			}, this.lP[5] = {
				name: "Swamp",
				cj: 1e3,
				ee: 1e3,
				hF: 100,
				hC: 40,
				a7G: 0
			}, this.lP[6] = {
				name: "Snow",
				cj: 1e3,
				ee: 1e3,
				hF: 100,
				hC: 20,
				a7G: 0
			}, this.lP[7] = {
				name: "Cliffs",
				cj: 1024,
				ee: 1024,
				hF: 128,
				hC: 32,
				a7G: 0
			}, this.lP[8] = {
				name: "Pond",
				cj: 820,
				ee: 820,
				hF: 200,
				hC: 100,
				a7G: 0
			}, this.lP[9] = {
				name: "Halo",
				cj: 1024,
				ee: 1024,
				hF: 128,
				hC: 32,
				a7G: 0
			}, this.lP[10] = {
				name: "Europe",
				lO: a8w,
				lR: a8x,
				a8G: a8y
			}, this.lP[11] = {
				name: "World",
				lO: a8z,
				lR: a90,
				a8G: a91
			}, this.lP[12] = {
				name: "Caucasia",
				lO: a8z,
				lR: a90,
				a8G: a91
			}, this.lP[13] = {
				name: "Africa",
				lO: a8u,
				lR: cos,
				a8G: a8v
			}, this.lP[14] = {
				name: "Middle East",
				lO: a8u,
				lR: cos,
				a8G: a8v
			}, this.lP[15] = {
				name: "Scandinavia",
				lO: a8w,
				lR: a8x,
				a8G: a8y
			}, this.lP[16] = {
				name: "North America",
				lO: a8w,
				lR: a8x,
				a8G: a8y
			}, this.lP[17] = {
				name: "South America",
				lO: a8u,
				lR: cos,
				a8G: a8v
			}, this.lP[18] = {
				name: "Asia",
				lO: a8z,
				lR: a90,
				a8G: a91
			}, this.lP[19] = {}, this.a8t = new Uint8Array(an.a56), a2 = 0; a2 < an.a56; a2++) this.a8t[a2] = a2
	}
}

function pl() {
	(mC = void 0 === mC ? document.createElement("canvas") : mC).width = an.ao, mC.height = an.ap, pr = mC.getContext("2d", {
		alpha: !0
	}), ps = pr.getImageData(0, 0, an.ao, an.ap), zA = ps.data, cB.l4.l5(zA)
}

function ql() {
	var aF, cj, ee, max, a92, hC, a94, a95, a96, a97, a98, a99, a9A, a9B, a93 = 1e4;

	function a9J(a9I, hF, bI) {
		var a2;
		for (a94[0] = a9I, a2 = 1; a2 < bI; a2++) a94[a2] = a94[a2 - 1] + hF, hF = a94[a2] >= a93 ? (a94[a2] = a93 - 1, -hF) : a94[a2] < 0 ? (a94[a2] = 0, -hF) : (hF += 16384 <= eR.random() ? hC : -hC) < -a92 ? -a92 : a92 < hF ? a92 : hF
	}

	function a9L(gs, gt, a9M, bI) {
		(a9M ? function(gs, gt, bI) {
			var a2;
			for (a2 = 0; a2 < bI; a2++) aF[gt * cj + gs + a2] = a94[a2]
		} : function(gs, gt, bI) {
			var a2;
			for (a2 = 0; a2 < bI; a2++) aF[gt * cj + gs + a2 * cj] = a94[a2]
		})(gs, gt, bI)
	}

	function a9P(value, bI) {
		var a2, a6o, dT, dI = value - a94[bI - 1];
		if (0 != dI) {
			for (a6o = 1 + b7(Math.abs(dI), bI - 1), a6o = dI < 0 ? -a6o : a6o, a94[bI - 1] = value, dT = (dT = bI - 1 - b7(Math.abs(dI), Math.abs(a6o))) < 1 ? 1 : bI - 2 < dT ? bI - 2 : dT, a2 = bI - 2; dT <= a2; a2--) a94[a2] += dI - (bI - 1 -
				a2) * a6o;
			(dI < 0 ? function(bI) {
				var a2;
				for (a2 = bI - 2; 1 <= a2; a2--) a94[a2] < 0 && (a94[a2] = -a94[a2] - 1)
			} : function(bI) {
				var a2;
				for (a2 = bI - 2; 1 <= a2; a2--) a94[a2] >= a93 && (a94[a2] = 2 * a93 - a94[a2] - 1)
			})(bI)
		}
	}

	function a9S(a9T, a9U, bI) {
		for (var a2 = 0; a2 < bI; a2++) a9T[a2] = a9U[a2]
	}

	function a9V(aR) {
		for (var a2 = 0; a2 < aR.length - 1; a2++) aR[a2] = aR[a2 + 1] - aR[a2];
		aR[aR.length - 1] = aR[aR.length - 3]
	}

	function a9W(rZ, lp, dH) {
		a95.push(rZ), a96.push(lp), a97.push(dH)
	}
	this.kj = function(a9C) {
		! function(a9C) {
			var a2;
			for (cj = a9C[0], ee = a9C[1], a92 = a9C[2], hC = a9C[3], aF = new Int16Array(cj * ee), max = ee < cj ? cj : ee, a94 = new Int16Array(max), a95 = [], a96 = [], a97 = [], a98 = new Array(cj), a99 = new Array(ee), a2 = cj - 1; 0 <=
				a2; a2--) a98[a2] = !1;
			for (a2 = ee - 1; 0 <= a2; a2--) a99[a2] = !1;
			a9A = new Int16Array(cj), a9B = new Int16Array(ee)
		}(a9C),
		function(bI) {
			var a9I = eR.random() % a93,
				hF = eR.random() % (2 * a92 + 1) - a92;
			a9J(a9I, hF, bI)
		}(max), a9S(a9B, a94, ee), a9L(0, 0, !0, cj);
		var gs, gt, a9C = aF[0],
			bI = max,
			hF = eR.random() % (2 * a92 + 1) - a92;
		for (a9J(a9C, hF, bI), a9S(a9A, a94, cj), a9L(0, 0, !1, ee), a9V(a9A), a9V(a9B), a9J(aF[cj - 1], a9A[cj - 1], ee), a9L(cj - 1, 0, !1, ee), a9J(aF[cj * (ee - 1)], a9B[ee - 1], cj), a9P(aF[cj * ee - 1], cj), a9L(0, ee - 1, !0, cj), a98[cj -
				1] = a98[0] = !0, a99[ee - 1] = a99[0] = !0, a9W(0, cj, !0), a9W(0, ee, !1), ! function() {
				var a9Y, rZ;
				for (;;) {
					if (a9Y = function() {
							var a2, a9Y = a95.length - 1;
							for (a2 = a9Y - 1; 0 <= a2; a2--) a96[a2] > a96[a9Y] && (a9Y = a2);
							return a9Y
						}(), a96[a9Y] < 5) return;
					rZ = a95[a9Y] + b7(a96[a9Y], 2), (a97[a9Y] ? function(gs) {
						var bI, a9b, a2, a0H = 0,
							a9c = 0;
						for (; a9c < ee - 1;) {
							for (a2 = a0H + 1; a2 < ee; a2++)
								if (a99[a2]) {
									a9c = a2;
									break
								} bI = a9c - a0H + 1, a9J(aF[gs + cj * a0H], 0 === a0H ? a9A[gs] : a94[a9b - 1] - a94[a9b - 2], bI), a9P(aF[a9c * cj + gs], bI), a9L(gs, a0H, !1, bI), a9b = bI, a0H = a9c
						}
						a98[gs] = !0
					} : function(gt) {
						var bI, a9b, a2, a0H = 0,
							a9c = 0;
						for (; a9c < cj - 1;) {
							for (a2 = a0H + 1; a2 < cj; a2++)
								if (a98[a2]) {
									a9c = a2;
									break
								} bI = a9c - a0H + 1, a9J(aF[gt * cj + a0H], 0 === a0H ? a9B[gt] : a94[a9b - 1] - a94[a9b - 2], bI), a9P(aF[gt * cj + a9c], bI), a9L(a0H, gt, !0, bI), a9b = bI, a0H = a9c
						}
						a99[gt] = !0
					})(rZ), a9W(rZ, a95[a9Y] + a96[a9Y] - rZ, a97[a9Y]), a96[a9Y] = rZ - a95[a9Y] + 1
				}
			}(), gs = 0; gs < cj; gs++)
			if (!a98[gs])
				for (gt = 0; gt < ee; gt++) a99[gt] || ! function(gs, gt) {
					var value = aF[gt * cj + gs - 1] + aF[(gt - 1) * cj + gs],
						tu = 2;
					a98[gs + 1] && (tu++, value += aF[gt * cj + gs + 1]);
					a99[gt + 1] && (tu++, value += aF[(gt + 1) * cj + gs]);
					aF[gt * cj + gs] = b7(value, tu)
				}(gs, gt)
	}, this.a8I = function() {
		return aF
	}, this.a83 = function() {
		aF = null
	}
}

function b7(eO, cK) {
	return Math.floor(eO / cK + 1 / (2 * cK))
}

function a3z(eO, cK) {
	return 0 <= eO ? b7(eO, cK) : -b7(-eO, cK)
}

function en(aF) {
	return aF * aF
}

function sq(eO, cK) {
	return cK < eO ? eO : cK
}

function vj(eO, cK) {
	return eO < cK ? eO : cK
}

function w9(eO, aF, cK) {
	return aF < eO ? eO : cK < aF ? cK : aF
}

function a9e(aF, bI) {
	for (var fA = b7(aF + 1, 2), a2 = 0; a2 < bI; a2++) fA = b7(fA + b7(aF, fA), 2);
	return fA
}

function c1(aF, bI) {
	return aF < 1 ? 0 : a9e(aF, bI)
}

function a9f(gx, gy, mL, tg, gz, h1, mM, th) {
	return !(gx + mL <= gz || gy + tg <= h1 || gz + mM <= gx || h1 + th <= gy)
}

function a9g(gx, gy, mL, tg, gz, h1, mM, th) {
	return gx <= gz && gy <= h1 && gz + mM <= gx + mL && h1 + th <= gy + tg
}

function kv(aF) {
	return Math.floor(!!aF * (1 + Math.log2(aF + .5)))
}

function qF() {
	this.bz = function(eO, cK) {
		return Math.floor((eO + .5) / cK)
	}, this.a9h = function(eO, cK) {
		return Math.floor(eO * (cK + .5))
	}, this.sqrt = function(aF) {
		return ~~Math.sqrt(aF + .5)
	}, this.pow = function(ng) {
		return Math.floor(Math.pow(2, ng) + .5)
	}, this.p2 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.a9i = function(aS, aU, aW) {
		return Math.max(Math.min(aS, aU), aW)
	}, this.a9j = function(a9k, a9l, gs, gt) {
		gs -= a9k, a9k = gt - a9l, gt = 0;
		return 0 == gs ? gt = 0 <= a9k ? Math.PI : 0 : (gt = Math.a9m(a9k / gs), gt += 0 < gs ? .5 * Math.PI : 1.5 * Math.PI), gt
	}, this.log2 = function(aF) {
		return Math.floor(!!aF * (1 + Math.log2(aF + .5)))
	}
}

function a7g() {
	"function" != typeof Math.log2 && (Math.log2 = function(gs) {
		return Math.log(gs) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(gs) {
		return Math.log(gs) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(gs) {
		return 0 < gs ? 1 : gs < 0 ? -1 : 0
	})
}

function r2() {
	this.a3C = 0;
	var zC = -1,
		a9n = !1,
		v9 = [],
		a9o = 0;

	function oX(gs, gt, a9x, a2) {
		return 0 === a2 ? gs >= a9x.gx && (0 === a2 || gt >= a9x.gy) && gt <= a9x.gy + a9x.tg : (gt -= a2 * (a9x.tg - p8), gs >= a9x.gz && gt >= a9x.gy && gt <= a9x.gy + a9x.tg)
	}

	function a9y() {
		var mL = Math.floor((o ? .145 : .09) * cZ),
			mM = Math.floor(2.25 * mL),
			lp = Math.floor(.065 * (o ? .53 : .36) * cZ),
			gz = p - mM - lp;
		return {
			gx: p - mL - lp,
			gy: cr,
			mL: mL,
			tg: Math.floor(.35 * (1 + .35 * o) * mL),
			gz: gz,
			mM: mM,
			wi: lp
		}
	}

	function a0V(gs, gt, cj, ee, mv, p4, cK, aA6, j) {
		var ch = (j === v9[0][0].name ? .65 : .5) * ee,
			font = cB.i0.kR(ch, 1),
			font = ck.measureText(j, font);
		.92 * cj < font && (ch *= .92 * cj / font), cy.font = cB.i0.kR(ch, 1), aA6 && (mv += 80, p4 += 80, cK += 80), cy.fillStyle = "rgba(" + mv + "," + p4 + "," + cK + ",0.6)", cy.fillRect(gs, gt, cj, ee), cy.fillStyle = d1.d2, cy.fillRect(gs, gt,
			cj, p8), cy.fillRect(gs, gt + ee - p8, cj, p8), cy.fillRect(gs, gt, p8, ee), cy.fillRect(gs + cj - p8, gt, p8, ee), cy.fillText(j, Math.floor(gs + cj / 2), Math.floor(gt + ee / 2 + .1 * ch))
	}
	this.h7 = null, this.y6 = new Uint8Array(4), this.st = function() {
		return b ? 4 : o ? 2 : 1
	}, this.c6 = function() {
		var a9q;
		this.a9p(), v9 = [new Array(6), new Array(10), new Array(7)], this.y6[0] = 10, this.y6[1] = 5, this.y6[2] = 2, this.y6[3] = 1, v9[0][0] = {
			name: "More",
			id: 0,
			mv: 140,
			p4: 120,
			cK: 0
		}, v9[0][1] = {
			name: "Lobby 1",
			id: 1,
			mv: 0,
			p4: 0,
			cK: 0
		}, v9[0][2] = {
			name: "Settings",
			id: 2,
			mv: 0,
			p4: 0,
			cK: 0
		}, v9[0][3] = {
			name: "More Information",
			id: 3,
			mv: 0,
			p4: 0,
			cK: 0
		}, v9[0][4] = {
			name: "Replay",
			id: 4,
			mv: 0,
			p4: 0,
			cK: 0
		}, v9[0][5] = {
			name: a7Z,
			id: 5,
			mv: 90,
			p4: 0,
			cK: 0
		}, v9[0].push({
			name: "FX Client v" + fx_version + " " + fx_update,
			id: 20,
			mv: 0,
			p4: 0,
			cK: 70
		}), v9[1][0] = v9[0][0], v9[1][1] = {
			name: "Hide Usernames",
			id: 1,
			mv: 0,
			p4: 0,
			cK: 0
		}, v9[1][2] = {
			name: "Hide Links",
			id: 2,
			mv: 0,
			p4: 0,
			cK: 0
		}, v9[1][3] = {
			name: "Hide Zoom Buttons",
			id: 3,
			mv: 0,
			p4: 0,
			cK: 0
		}, v9[1][4] = {
			name: "Reverse Name/Balance",
			id: 4,
			mv: 0,
			p4: 0,
			cK: 0
		}, v9[1][5] = {
			name: "Resolution",
			id: 5,
			mv: 0,
			p4: 0,
			cK: 0
		}, v9[1][6] = {
			name: "Country Minimum Font Size",
			id: 6,
			mv: 0,
			p4: 0,
			cK: 0
		}, v9[1][7] = {
			name: "Leaderboard Refresh Rate",
			id: 7,
			mv: 0,
			p4: 0,
			cK: 0
		}, v9[1][8] = {
			name: "Reset Settings",
			id: 8,
			mv: 0,
			p4: 0,
			cK: 0
		}, v9[1][9] = {
			name: "Back",
			id: 9,
			mv: 0,
			p4: 0,
			cK: 0
		}, v9[2][0] = v9[0][0], v9[2][1] = {
			name: "Tutorial",
			id: 1,
			mv: 0,
			p4: 0,
			cK: 0
		}, v9[2][2] = {
			name: "Player List",
			id: 2,
			mv: 0,
			p4: 0,
			cK: 0
		}, v9[2][3] = {
			name: "Clan List",
			id: 3,
			mv: 0,
			p4: 0,
			cK: 0
		}, v9[2][4] = {
			name: "Privacy Policy",
			id: 4,
			mv: 0,
			p4: 0,
			cK: 0
		}, v9[2][5] = {
			name: "Changelog",
			id: 13,
			mv: 0,
			p4: 0,
			cK: 0
		}, v9[2][6] = {
			name: "Terms of Service",
			id: 14,
			mv: 0,
			p4: 0,
			cK: 0
		}, !b && d < 5 && v9[2].push({
			name: "Cookie Policy",
			id: 5,
			mv: 0,
			p4: 0,
			cK: 0
		}), (b || 5 <= d) && (b ? !c.mustShowConsentButton || "0" !== c.mustShowConsentButton && "1" !== c.mustShowConsentButton || v9[2].push({
			name: "Consent Form",
			id: 7,
			mv: 0,
			p4: 0,
			cK: 0
		}) : "" !== (a9q = e.loadString(187)) && "1" !== a9q || v9[2].push({
			name: "Consent Form",
			id: 7,
			mv: 0,
			p4: 0,
			cK: 0
		})), 5 <= d && v9[2].push({
			name: "Force Restart Game",
			id: 12,
			mv: 0,
			p4: 0,
			cK: 0
		}), v9[2].push({
			name: "Back",
			id: 6,
			mv: 0,
			p4: 0,
			cK: 0
		}), this.a9r(), this.a9s()
	}, this.a9p = function() {
		this.h7 = {
			tc: 0,
			a9t: 0,
			wb: 0,
			h8: 1,
			a9u: 2,
			a6F: 4,
			y7: 2,
			a6O: 2
		}
	}, this.a9s = function() {
		if (settings.hideAllLinks) a1B.aW[0] = a1B.aW[1] = !this.h7.a9t;
		else a1B.aW[0] = a1B.aW[1] = true;
		a1B.aW[2] = a1B.aW[3] = a1B.aW[4] = !this.h7.a9t, v9[1][1].p4 = this.h7.tc ? 130 : 0, v9[1][2].p4 = this.h7.a9t ? 130 : 0, v9[1][3].p4 = this.h7.wb ? 130 : 0, v9[1][4].p4 = this.h7.h8 ? 130 : 0, this.a9v(5), this.a9v(6), this.a9v(7)
	}, this.a9r = function() {
		var s8 = t().split("");
		s8.length < 14 ? this.a9p() : (this.h7.tc = parseInt(s8[6]), this.h7.a9t = parseInt(s8[7]), this.h7.wb = parseInt(s8[8]), this.h7.h8 = parseInt(s8[9]), this.h7.a9u = parseInt(s8[10]), this.h7.a6F = parseInt(s8[11]), this.h7.y7 = parseInt(
			s8[12]))
	}, this.a0U = function() {
		var j = ct.sS[2].n8.a0S();
		a6((j += ~~this.h7.tc) + ~~this.h7.a9t + ~~this.h7.wb + ~~this.h7.h8 + ~~this.h7.a9u + ~~this.h7.a6F + ~~this.h7.y7 + "0")
	}, this.a9v = function(a2) {
		5 === a2 ? v9[1][a2].name = "Resolution: " + fo.tT(100 * oq.a9w(), 1) : 6 === a2 ? v9[1][a2].name = "Country Minimum Font Size: " + (this.h7.a6F < 4 ? 1 + this.h7.a6F : 2 * (this.h7.a6F - 1)) : 7 === a2 && (v9[1][a2].name =
			"Leaderboard Refresh Rate: " + fo.tT(100 / this.y6[this.h7.y7], 1))
	}, this.co = function(gs, gt) {
		var a2, a9x, aA0;
		if (!(7 <= aH.ob())) {
			a9x = a9y();
			var gearIconX = a9x.gx - a9x.mL / 2;
			if (gs > gearIconX && gs < (gearIconX + a9x.tg) && gt > a9x.gy && gt < (a9x.gy + a9x.tg)) return WindowManager.openWindow("settings");
			if (a9n) {
				for (a2 = 1; a2 < v9[a9o].length; a2++)
					if (oX(gs, gt, a9x, a2)) return aA0 = v9[a9o][a2], 0 === a9o ? 1 === aA0.id ? (h6.a3C = (h6.a3C + 1) % 4, aA0.name = (h6.a3C % 2 ? "Proxy " : "Lobby ") + (1 + (h6.a3C >> 1)), aA.cm = !0) : 2 === aA0.id ? (a9o = 1, aA.cm = !
						0) : 3 === aA0.id ? (a9o = 2, aA.cm = !0) : 4 === aA0.id && kO.show() : 1 === a9o ? 1 === aA0.id ? (h6.h7.tc = !h6.h7.tc, aA0.p4 = h6.h7.tc ? 130 : 0, h6.a0U(), aA.cm = !0) : 2 === aA0.id ? (h6.h7.a9t = !h6.h7.a9t, h6
							.a9s(), h6.a0U(), aA.cm = !0) : 3 === aA0.id ? (h6.h7.wb = !h6.h7.wb, aA0.p4 = h6.h7.wb ? 130 : 0, h6.a0U(), aA.cm = !0) : 4 === aA0.id ? (h6.h7.h8 = !h6.h7.h8, aA0.p4 = h6.h7.h8 ? 130 : 0, h6.a0U(), aA.cm = !0) :
						5 === aA0.id ? (h6.h7.a9u++, h6.h7.a9u %= 8, h6.a9v(aA0.id), h6.a0U(), oq.a2x(1), aA.cm = !0) : 6 === aA0.id ? (h6.h7.a6F++, h6.h7.a6F %= 10, h6.a9v(aA0.id), h6.a0U(), aA.cm = !0) : 7 === aA0.id ? (h6.h7.y7++, h6.h7
							.y7 %= 4, h6.a9v(aA0.id), h6.a0U(), aA.cm = !0) : 8 === aA0.id ? (h6.a9p(), h6.a9s(), h6.a0U(), oq.a2x(1), aA.cm = !0) : 9 === aA0.id && (a9o = 0, aA.cm = !0) : 1 === aA0.id ? (oY.c6(qD.aA1, !0), oY.c6(qD.aA1, !
						1)) : 2 === aA0.id ? (oY.c6(qD.aA2, !0), oY.c6(qD.aA2, !1)) : 3 === aA0.id ? (oY.c6(qD.aA3, !0), oY.c6(qD.aA3, !1)) : 4 === aA0.id ? (oY.c6(qD.a7i, !0), oY.c6(qD.a7i, !1)) : 5 === aA0.id ? (oY.c6(qD.tl, !0), oY.c6(qD
							.tl, !1)) : 13 === aA0.id ? (oY.c6(qD.aA4, !0), oY.c6(qD.aA4, !1)) : 14 === aA0.id ? (oY.c6(qD.aA5, !0), oY.c6(qD.aA5, !1)) : 6 === aA0.id ? (a9o = 0, aA.cm = !0) : 7 === aA0.id ? b ? window.webkit.messageHandlers
						.iosCommandA.postMessage("showConsentForm") : e.setState(7) : 12 === aA0.id && e.setState(14), !0;
				return a9n = !1, !(aA.cm = !0)
			}
			return !!oX(gs, gt, a9x, 0) && (a9n = !(a9o = 0), aA.cm = !0)
		}
	}, this.nu = function(gs, gt) {
		var a2, a9x, p5, hp;
		if (!(7 <= aH.ob())) {
			for (a9x = a9y(), p5 = zC, hp = a9n ? 0 === a9o ? v9[a9o].length - 2 : v9[a9o].length : 1, zC = -1, a2 = 0; a2 < hp; a2++)
				if (oX(gs, gt, a9x, a2)) {
					zC = a2;
					break
				} p5 !== zC && (aA.cm = !0)
		}
	}, this.cx = function() {
		var a2, hp, a9x;
		if (!(7 <= aH.ob()) && (a9x = a9y(), cy.textAlign = d0, cy.textBaseline = cz, a0V(a9x.gx, a9x.gy, a9x.mL, a9x.tg, v9[a9o][0].mv, v9[a9o][0].p4, v9[a9o][0].cK, 0 === zC, v9[a9o][0].name), cy.imageSmoothingEnabled = true, cy.drawImage(
				settingsGearIcon, a9x.gx - a9x.mL / 2, a9x.gy, a9x.tg, a9x.tg), cy.imageSmoothingEnabled = false, cy.font = "bold " + Math.floor(a9x.tg * 0.4) + "px " + settings.fontName, (!a9n && cy.fillText("Win count: " + wins_counter,
				Math.floor(a9x.gx + a9x.mL / 2), Math.floor((a9x.gy + a9x.tg / 2) * 2.1))), a9n))
			for (hp = v9[a9o].length, a2 = 1; a2 < hp; a2++) a0V(a9x.gz, a9x.gy + a2 * a9x.tg - a2 * p8, a9x.mM, a9x.tg, v9[a9o][a2].mv, v9[a9o][a2].p4, v9[a9o][a2].cK, zC === a2, v9[a9o][a2].name)
	}
}

function qm() {
	var wx, aA8, aA9, aAA, a7H = !1;

	function aAB() {
		a7H = !0, wx = -1, aA8 = new Array(4);
		for (var a2 = 3; 0 <= a2; a2--) aA8[a2] = !1;
		var aAC = Math.floor(1 + .02 * ub);
		aA9 = new Array(4), (aAA = new Array(4))[1] = aAA[3] = aA9[0] = aA9[2] = 0, aAA[0] = aA9[3] = -aAC, aA9[1] = aAA[2] = aAC
	}

	function aAD() {
		if (-1 !== wx)
			if (0 !== gL && gD.hp()) {
				for (var aAE = !1, a2 = 3; 0 <= a2; a2--) aA8[a2] && (aAE = !0, dp += aA9[a2], dr += aAA[a2], fn.nu(aA9[a2], aAA[a2]), ha.we());
				aAE ? aA.cm = !0 : he.hf()
			} else he.hf()
	}
	this.oj = function(cb) {
		0 !== gL && gD.hp() && (a7H || aAB(), aA8[cb] = !0, -1 === wx) && (wx = setInterval(aAD, 20), aAD())
	}, this.od = function(cb) {
		if (0 !== gL && (a7H || aAB(), aA8[cb] = !1, -1 !== wx)) {
			for (var aAE = !1, a2 = 3; 0 <= a2; a2--) aAE = aAE || aA8[a2];
			aAE || this.hf()
		}
	}, this.hf = function() {
		if (a7H && -1 !== wx) {
			for (var a2 = 3; 0 <= a2; a2--) aA8[a2] = !1;
			clearInterval(wx), wx = -1
		}
	}
}

function qn() {
	var aAG;

	function aAM(gx, gy, gz, h1) {
		return Math.abs(gz - gx) + Math.abs(h1 - gy)
	}
	this.aAH = function() {
		return aAG
	}, this.eX = function(player, aAI) {
		var a2;
		if (0 !== bc[player].length && bK.bL(aAI) && (bK.bV(aAI) || bK.bU(aAI) !== player))
			for (a2 = 21; 0 <= a2; a2--)
				if (function(aAG, aAI) {
						var aAL, a2, lU = bK.h2(aAG),
							lV = bK.cw(aAG),
							lr = bK.h2(aAI),
							lq = bK.cw(aAI),
							aAC = aAM(lU, lV, lr, lq);
						if (!(aAC < 2))
							for (aAL = aAG, a2 = 0; a2 < aAC; a2++)
								if (Math.abs(lr - bK.h2(aAL)) >= Math.abs(lq - bK.cw(aAL)) ? aAL += aj[lU < lr ? 1 : 3] : aAL += aj[lV < lq ? 2 : 0], !bK.rp(aAL)) return !!bK.bL(aAL) && !(0 === a2 || a2 + 20 < aAC);
						return
					}(aAG = 21 === a2 ? function(border, aAI) {
						for (var aAC, lr = bK.h2(aAI), lq = bK.cw(aAI), cb = 0, min = aAM(lr, lq, bK.h2(border[0]), bK.cw(border[0])), a2 = border.length - 1; 1 <= a2; a2--)(aAC = aAM(lr, lq, bK.h2(border[a2]), bK.cw(border[a2]))) < min && (
							min = aAC, cb = a2);
						return border[cb]
					}(bc[player], aAI) : bc[player][b7(a2 * bc[player].length, 21)], aAI)) return !0;
		return !1
	}
}

function a7q() {
	var aAN = !1,
		to = 0,
		cj = 0,
		mL = 0,
		lp = 0,
		p3 = null,
		i0 = null,
		aAO = null;

	function aAQ() {
		for (var a25, aAT = 0, bI = 0, fA = Math.floor(cj / 2), mv = Math.floor(mL / 2), a24 = 1.5 * Math.PI, a2 = pZ; 0 <= a2; a2--) bI += aAO[a2], 0 === aAO[a2] && aAT++;
		if (aAN = !1, i0.clearRect(0, 0, cj, cj), i0.fillStyle = d1.i6, i0.fillRect(0, 0, cj, cj), i0.fillStyle = d1.d2, i0.fillRect(0, 0, cj, lp), i0.fillRect(0, 0, lp, cj), i0.fillRect(cj - lp, 0, lp, cj), i0.fillRect(0, cj - lp, cj, lp), 0 < bI)
			if (aAT === pZ) {
				for (a2 = pZ; 0 <= a2; a2--)
					if (0 < aAO[a2]) {
						! function(a2, fA, mv) {
							i0.fillStyle = fB.a29[fB.nN[a2]], i0.beginPath(), i0.arc(fA, fA, mv, 0, 2 * Math.PI), i0.fill()
						}(a2, fA, mv);
						break
					}!
				function(fA) {
					var ch = fA / 3;
					i0.font = cB.i0.kR(ch, 1), i0.fillStyle = d1.d2, i0.fillText("100%", fA, fA + .1 * ch)
				}(fA)
			} else {
				for (a2 = 0; a2 <= pZ; a2++) 0 < aAO[a2] && (! function(a2, fA, mv, a24, a25) {
					i0.fillStyle = fB.a29[fB.nN[a2]], i0.beginPath(), i0.arc(fA, fA, mv, a24, a25), i0.lineTo(fA, fA), i0.fill()
				}(a2, fA, mv, a24, a25 = a24 + 2 * Math.PI * aAO[a2] / bI), function(fA, mv, a24, a25) {
					var aF = (a25 - a24) / (2 * Math.PI),
						ch = +mv * Math.min(aF, .37);
					ch < 8 || (a24 = (a24 + a25) / 2, a25 = Math.floor(100 * aF + .5) + "%", mv *= .525 - Math.max(.6 * (aF - .7), 0), i0.font = cB.i0.kR(ch, 1), i0.fillStyle = d1.d2, i0.fillText(a25, fA + Math.cos(a24) * mv, fA + Math.cos(
						a24 + 1.5 * Math.PI) * mv))
				}(fA, mv, a24, a25), 0 !== a2 && a27(fA, mv, a24), a24 = a25);
				a27(fA, mv, 1.5 * Math.PI)
			}!
		function(fA, mv) {
			i0.beginPath(), i0.arc(fA, fA, mv, 0, 2 * Math.PI), i0.stroke()
		}(fA, mv)
	}

	function a27(fA, mv, a2A) {
		i0.beginPath(), i0.moveTo(fA, fA), i0.lineTo(fA + Math.cos(a2A) * mv, fA + Math.cos(a2A + 1.5 * Math.PI) * mv), i0.stroke()
	}
	this.c6 = function() {
		if (cH) {
			var a2;
			for (to = 0, aAO = new Uint32Array(pZ + 1), a2 = pZ; 0 <= a2; a2--) aAO[a2] = 0;
			for (a2 = fD - 1; 0 <= a2; a2--) aAO[fB.fC[fE[a2]]] += 1;
			this.resize()
		} else aAO = i0 = p3 = null
	}, this.vQ = function() {
		return cj
	}, this.resize = function() {
		cH && (cj = Math.floor(o && !hZ ? .18 * ub : .13 * cZ), cj = (cj *= 1 + (.5 + .2 * o) * hZ) + cj % 2, mL = Math.floor(7 * cj / 8), (p3 = p3 || document.createElement("canvas")).width = cj, p3.height = cj, i0 = p3.getContext("2d", {
			alpha: !0
		}), lp = Math.max(1, .015 * cj), i0.lineWidth = lp, i0.strokeStyle = d1.d2, cB.i0.textAlign(i0, 1), cB.i0.textBaseline(i0, 1), aAQ())
	}, this.nP = function() {
		return aAO[this.nO()]
	}, this.nA = function() {
		return to = 31, this.eu(), this.nO()
	}, this.nO = function() {
		for (var aAR = 0, a2 = pZ; 0 < a2; a2--) aAO[a2] > aAO[aAR] && (aAR = a2);
		return aAR
	}, this.eu = function() {
		if (cH && 32 <= ++to) {
			var a2;
			for (to = 0, a2 = pZ; 0 <= a2; a2--) aAO[a2] = 0;
			for (a2 = fD - 1; 0 <= a2; a2--) aAO[fB.fC[fE[a2]]] += bj[fE[a2]];
			aAN = !0
		}
	}, this.ce = function() {
		cH && aAN && aAQ()
	}, this.cx = function() {
		cH && (hZ ? cy.drawImage(p3, kI, kI) : cy.drawImage(p3, kI, vR + 2 * kI))
	}
}

function rE() {
	this.a1Z = function() {
		e || b || function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var aAY = window.location.search,
				aAY = new URLSearchParams(aAY).get(key);
			if ("string" != typeof aAY || aAY.length < 1) return null;
			return aAY
		}("replay") && kO.show()
	}, this.kX = function() {
		var aAX;
		e || b || ((aAX = new URL(window.location.href)).search = "", history.replaceState(null, "", aAX.toString()))
	}
}

function qo() {
	var aAa, aR;
	this.c6 = function() {
		for (var a2 = (aR = new Uint16Array(101)).length - 1; 0 <= a2; a2--) aR[a2] = b7(32768 * a2, 100);
		this.pj(0)
	}, this.value = function(bQ) {
		return aR[bQ]
	}, this.a6z = function() {
		return b7(aAa - 1, 2)
	}, this.pj = function(a7G) {
		aAa = 2 * a7G % 32768 + 1
	}, this.random = function() {
		return aAa = 167 * aAa % 32768
	}, this.eS = function(gZ) {
		return b7(gZ * this.random(), 32768)
	}, this.f4 = function(bQ) {
		return 0 !== bQ && this.random() < this.value(bQ)
	}
}

function rA() {
	this.js = new aAb, this.wP = new aAc, this.wO = new aAd, this.c6 = function(pc, mP, pe, pf) {
		var aAe;
		c8 || ((aAe = {}).pd = bB, aAe.pc = pc, aAe.mP = mP, aAe.pe = pe, aAe.pf = pf, aAe.a2I = an.lQ, aAe.a2J = an.a2F, fd.a2h(aAe), this.js.c6(aAe))
	}, this.eu = function() {
		c8 || this.js.eu()
	}, this.wN = function() {
		var p4 = this.js.aAe;
		0 === gL && aH.a12(), an.kj(p4.a2I, p4.a2J), 1 === p4.mP.length && (fd.a2c(p4.pe), fd.a2e(p4.a2f, p4.a2g)), fq.close(fq.oC, 3246), fd.a2j(), pb(p4.pc, p4.pd, p4.mP, p4.pe, p4.pf, !0)
	}, this.wL = function(j) {
		var a2 = j.indexOf("=");
		return 0 <= a2 ? j.substring(a2 + 1) : j
	}, this.wQ = function(j) {
		return "https://territorial.io/?replay=" + j
	}
}

function aAb() {
	this.aAf = null, this.aAg = null, this.aAh = null, this.aAi = null, this.aAj = null, this.aAk = null;
	var aAl = 0;
	this.aAe = null, this.wM = "", this.c6 = function(aAe) {
		this.aAf = [], this.aAg = [], this.aAh = [], this.aAi = [], this.aAj = [0], this.aAk = [0], aAl = 0, this.aAe = aAe, this.wM = ""
	}, this.jt = function(id, aS, aU, aW) {
		c8 || 2 === gL || (0 === this.aAj[aAl] && (this.aAk[aAl] ? (this.aAj.push(1), this.aAk.push(0), aAl++) : this.aAj[aAl] = 1), this.aAf.push(id), this.aAg.push(aS), this.aAh.push(void 0 === aU ? 0 : aU), this.aAi.push(void 0 === aW ? 0 :
			aW), this.aAk[aAl]++)
	}, this.eu = function() {
		0 === this.aAj[aAl] ? this.aAk[aAl]++ : (this.aAj.push(0), this.aAk.push(0), aAl++)
	}
}

function aAd() {
	function aAr(j) {
		0 === gL ? q2.a0q(3605) : fm.t3(j)
	}
	this.kn = function(j) {
		if (kt.kg(kt.kd(kt.kc(j))), ! function() {
				if (jn.eL < 10) aAr("File Too Small");
				else if (jn.jo(9) !== a7a) aAr("Game Version Error");
				else if (jn.jo(31) !== jn.eL) aAr("Size Error");
				else {
					if (function(ee) {
							var a2, bQ = jn.jm,
								bI = jn.eL,
								a4K = 0;
							for (a2 = 7; a2 < bI; a2++) a4K = a4K + bQ[a2] & 65535;
							return a4K === ee
						}(jn.jo(16))) return 1;
					aAr("Hash Error")
				}
				return
			}()) return !1;
		(aAe = {}).pd = jn.jo(9), aAe.pc = jn.jo(14), aAe.pe = jn.jo(4), aAe.pf = 1 === jn.jo(1), aAe.a2I = jn.jo(6), aAe.a2J = jn.jo(14), aAe.aAt = jn.jo(10), gB.js.aAe = aAe,
			function() {
				var a2, a2p, a2o, name, bI = gB.js.aAe.aAt,
					mP = [];
				for (a2 = 0; a2 < bI; a2++) a2p = jn.jo(1), a2o = [jn.jo(6), jn.jo(6), jn.jo(6)], name = jn.aAu(jn.jo(5)), mP.push({
					name: name,
					a2o: a2o,
					a2p: a2p
				});
				if (gB.js.aAe.mP = mP, 8 === gB.js.aAe.pe)
					for (a2 = 0; a2 < bI; a2++) mP[a2].mT = jn.jo(14)
			}(),
			function() {
				var a2, bI, aAv = gB.js.aAe;
				if (1 === aAv.mP.length)
					for (bI = 6 < aAv.pe ? 1 : aAv.pe + 2, aAv.a2f = new Array(bI), aAv.a2g = new Array(bI), a2 = 0; a2 < bI; a2++) aAv.a2f[a2] = jn.jo(3), aAv.a2g[a2] = jn.jo(9) + 1
			}(), aAe = jn.jo(5), aAw = jn.jo(30), aAx = jn.jo(30);
		var aAe, aAw, aAx, a2, id, bI = aAw,
			aB0 = new Uint8Array(bI),
			aB1 = new Uint16Array(bI),
			aB2 = new Uint32Array(bI),
			aB3 = new Uint32Array(bI);
		for (gB.js.aAf = aB0, gB.js.aAg = aB1, gB.js.aAh = aB2, gB.js.aAi = aB3, a2 = 0; a2 < bI; a2++) aB0[a2] = id = jn.jo(4), aB1[a2] = jn.jo(9), 0 === id ? aB2[a2] = jn.jo(22) : 1 === id ? (aB2[a2] = jn.jo(10), aB3[a2] = jn.jo(10)) : 2 ===
			id ? (aB2[a2] = jn.jo(10), aB3[a2] = jn.jo(9)) : 3 === id || 4 === id ? (aB2[a2] = jn.jo(10), aB3[a2] = jn.jo(22)) : 5 === id ? aB2[a2] = jn.jo(10) : 6 === id ? aB2[a2] = jn.jo(7) : 7 === id && (aB2[a2] = jn.jo(1));
		return function(bI, ko) {
			var a2, aAj = new Uint8Array(bI),
				aAk = new Array(bI);
			for (aAk.fill(0), gB.js.aAj = aAj, gB.js.aAk = aAk, a2 = 0; a2 < bI; a2++) aAj[a2] = jn.jo(1), aAk[a2] = jn.jo(ko)
		}(aAx, aAe), jn.cb < 8 * jn.eL - 13 || jn.cb > 8 * jn.eL ? (aAr("Out Of Bounds Error: " + jn.cb + " " + 8 * jn.eL), !1) : (gB.js.wM = j, !0)
	}
}

function aAc() {
	this.mq = function() {
		var aAv, ko = function() {
				var a2, aAk = gB.js.aAk,
					bI = aAk.length,
					max = 0;
				for (a2 = 0; a2 < bI; a2++) max = Math.max(max, aAk[a2]);
				return kv(Math.max(max, 1))
			}(),
			aB5 = function(ko) {
				return 179 + function() {
					var a2, mP = gB.js.aAe.mP,
						bI = mP.length,
						aB5 = 24 * bI;
					for (a2 = 0; a2 < bI; a2++) aB5 += 10 * k.mq(mP[a2].name).length;
					8 === gB.js.aAe.pe && (aB5 += 14 * bI);
					return aB5
				}() + (1 === gB.js.aAe.mP.length ? 12 * gB.js.aAe.a2f.length : 0) + function() {
					var a2, aAf = gB.js.aAf,
						bI = aAf.length,
						aB5 = 13 * bI,
						aBJ = [22, 20, 19, 32, 32, 10, 7, 1, 0, 0];
					for (a2 = 0; a2 < bI; a2++) aB5 += aBJ[aAf[a2]];
					return aB5
				}() + function(ko) {
					return gB.js.aAk.length * (1 + ko)
				}(ko)
			}(ko);
		ki.kj(aB5 + (6 - aB5 % 6) % 6), aAv = gB.js.aAe, ki.kk(9, a7a), ki.kk(31, ki.eL), ki.cb += 16, ki.kk(9, aAv.pd), ki.kk(14, aAv.pc), ki.kk(4, aAv.pe), ki.kk(1, aAv.pf), ki.kk(6, aAv.a2I), ki.kk(14, aAv.a2J), ki.kk(10, aAv.mP.length);
		var a2, cK, aBD, aBE, mP = gB.js.aAe.mP,
			bI = mP.length;
		for (a2 = 0; a2 < bI; a2++)
			for (ki.kk(1, mP[a2].a2p), ki.kk(18, (mP[a2].a2o[0] << 12) + (mP[a2].a2o[1] << 6) + mP[a2].a2o[2]), aBD = k.mq(mP[a2].name), aBE = aBD.length, ki.kk(5, aBE), cK = 0; cK < aBE; cK++) ki.kk(10, aBD[cK]);
		if (8 === gB.js.aAe.pe)
			for (a2 = 0; a2 < bI; a2++) ki.kk(14, mP[a2].mT);
		return function() {
				var a2, aAv = gB.js.aAe;
				if (1 === aAv.mP.length)
					for (a2 = 0; a2 < aAv.a2f.length; a2++) ki.kk(3, aAv.a2f[a2]), ki.kk(9, aAv.a2g[a2] - 1)
			}(),
			function(ko) {
				var a2, aAf = gB.js.aAf,
					aS = gB.js.aAg,
					aU = gB.js.aAh,
					aW = gB.js.aAi,
					bI = aAf.length;
				for (ki.kk(5, ko), ki.kk(30, bI), ki.kk(30, gB.js.aAk.length), a2 = 0; a2 < bI; a2++) ki.kk(4, aAf[a2]), ki.kk(9, aS[a2]), 0 === aAf[a2] ? ki.kk(22, aU[a2]) : 1 === aAf[a2] ? (ki.kk(10, aU[a2]), ki.kk(10, aW[a2])) : 2 === aAf[
					a2] ? (ki.kk(10, aU[a2]), ki.kk(9, aW[a2])) : 3 === aAf[a2] || 4 === aAf[a2] ? (ki.kk(10, aU[a2]), ki.kk(22, aW[a2])) : 5 === aAf[a2] ? ki.kk(10, aU[a2]) : 6 === aAf[a2] ? ki.kk(7, aU[a2]) : 7 === aAf[a2] && ki.kk(1, aU[a2])
			}(ko),
			function(ko) {
				var a2, aAj = gB.js.aAj,
					aAk = gB.js.aAk,
					bI = aAj.length;
				for (a2 = 0; a2 < bI; a2++) ki.kk(1, aAj[a2]), ki.kk(ko, aAk[a2])
			}(ko), ki.cb !== aB5 && fm.t3("Encoder Index Error: " + ki.cb + " " + aB5), ki.cb = 40, ki.kk(16, function() {
				var a2, bQ = ki.jm,
					bI = ki.eL,
					a4K = 0;
				for (a2 = 7; a2 < bI; a2++) a4K = a4K + bQ[a2] & 65535;
				return a4K
			}()), jn.c6(ki.jm), qB.md(qB.mb(b7(aB5 - 1, 6) + 1))
	}
}

function qv() {
	var fA, tY = !1,
		aBK = !1,
		aBL = -1e4;

	function resize(dI) {
		fA = 0, cf.cg() && (aBM(dI) || tY) && (tY = !1, uZ(), zb.c6(), q0.c6(), oZ.resize(), a1B.c6(), q1.resize(), oP.resize(), pz.resize(), a10.resize(), cu.resize(), a3.c6(), 1 <= gL ? (g2.resize(!1), g5.resize(), fo.resize(), ha.resize(), cU
			.resize(), fm.resize(), c9.resize(), kO.resize(), gG.resize(), g8.resize(), g6.resize(), ck.resize(), mD.resize(), mE.resize(), fn.resize(), gE.resize(), g9.resize(), ha.we()) : (2 === aH.ob() ? fd.resize() : 3 === aH.ob() && q2
			.resize(), aH.a18(), aH.a1C()), aA.cm = !0)
	}

	function aBN(aF) {
		return aF && 128 < aF ? Math.floor(aF) : 128
	}

	function aBM(dI) {
		var mL, tg, th;
		return oq.a9w(), mL = aBN(document.documentElement.clientWidth), tg = window.visualViewport ? aBN(window.visualViewport.height) : aBN(document.documentElement.clientHeight), dI && !aBK ? (aBK = !0, document.body.removeChild(nt)) : aBK && (
			aBK = !1, document.body.appendChild(nt)), dI = Math.floor(.5 + kS * mL), th = Math.floor(.5 + kS * tg), !(dI === h0 && th === cs || oJ.op() && (oZ.kN || kO.kN)) && (h0 = p = dI, cs = q = th, ub = vj(p, q), cZ = b7(q + p, 2), nt
			.width = dI, nt.height = th, nt.style.width = mL + "px", nt.style.height = tg + "px", 1)
	}
	this.c6 = function() {
		p = q = ub = h0 = cs = cZ = 0, kS = fA = 1, nt = document.getElementById("canvasA"), (cy = nt.getContext("2d", {
			alpha: !1
		})).imageSmoothingEnabled = !1, aBM(0)
	}, this.eu = function() {
		q9.eu(), 50 <= ++fA && resize(0)
	}, this.a2x = function(dI) {
		tY = !0, resize(dI)
	}, this.or = function() {
		aBL + 1e3 > aA.aB || (aBL = aA.aB, resize(0))
	}, this.a9w = function() {
		var aBO = window.devicePixelRatio || 1,
			a2 = h6.h7.a9u;
		return (kS = a2 < 3 ? .5 + .25 * a2 : (.5 + .125 * (a2 - 3)) * aBO) / aBO
	}
}

function qp() {
	var player, eI, lE, l8, gx, gy, gz, h1, cb, aBP, id;

	function aBV() {
		var eH;
		if (bK.bV(lE)) eH = bN;
		else {
			if ((eH = bK.bU(lE)) === player) return void aBX(!0);
			if (!eT(player, eH)) return function(eH) {
				var max = bj[eH] * pE - bC[eH];
				max <= 0 || (eI -= max = max < eI ? max : eI, player === bB && (fm.jT(max, 0, eH), bF.bG[16] += max), eH === bB && (fm.tQ(max, player), bF.bG[10] += max), bC[eH] += max, fn.jU(eH, max))
			}(eH), void aBX(!0)
		}
		player === bB && (bF.bG[13] += eI), fz.bA(player, id), at.bH(player, aBP), bJ[player].push(l8), at.eE(player, eI, eH), b9.eF(player, !0)
	}

	function aBX(aBa) {
		fz.bA(player, id), at.bH(player, aBP), aBa && (bC[player] += eI)
	}

	function aBR() {
		bK.a44(lE, player) && bK.a46(lE)
	}

	function aBQ(a2, a5T, vM, eQ, hp) {
		if (cb = a2, id = a5T, player = vM, gx = bK.h2(eQ), gy = bK.cw(eQ), gz = bK.h2(hp), h1 = bK.cw(hp), l8 = lE = bK.lk(gx, gy), -1 !== (aBP = at.h5(player, id))) return eI = at.b1(player, aBP), 1;
		aBR(), fz.bA(player, id)
	}
	this.eu = function(a2, id, vM, eQ, hp) {
		aBQ(a2, id, vM, eQ, hp) && (aBR(), function() {
			var aBb = b7(eI, 128);
			eI -= aBb = aBb < 1 ? 1 : aBb, player === bB && (bF.bG[15] += aBb);
			if (eI <= b8) return player === bB && (bF.bG[15] += eI), void aBX(!1);
			return at.bi(player, aBP, eI), 1
		}()) && (a2 = bK.lk(gx, gy), lE = Math.abs(gz - gx) >= Math.abs(h1 - gy) ? a2 + aj[gx < gz ? 1 : 3] : a2 + aj[gy < h1 ? 2 : 0], gx = bK.h2(lE), gy = bK.cw(lE), fz.gk(cb, lE), ! function() {
			if (bK.bL(lE)) return;
			return 1
		}() ? aBV() : bK.rp(lE) && bK.a49(lE, player))
	}, this.go = function(vM, eQ) {
		player = vM, lE = bK.lk(bK.h2(eQ), bK.cw(eQ)), aBR()
	}
}

function qq() {
	var aBc, aBd, rp, aBe;
	this.c6 = function() {
		var a2, gs, gt, a2o, aBf, cj, ee, i0, a3Q, l6, aF, bQ, em, eO, aBi;
		if (function() {
				if (rp = !0, aBe = "rgb(" + an.l3[0] + "," + an.l3[1] + "," + an.l3[2] + ")", an.a86(an.lQ)) return 1;
				return rp = !1, 0
			}()) aBd = null;
		else {
			for (aBc = b7(96, 4), aBf = 1 === an.lQ ? (a2o = 0, 160) : (a2o = 128, 32), aBe = "rgb(" + a2o + "," + a2o + "," + a2o + ")", aBd = new Array(4), a2 = 3; 0 <= a2; a2--) {
				if (aBd[a2] = document.createElement("canvas"), cj = a2 % 2 == 0 ? an.ao : aBc, ee = a2 % 2 == 0 ? aBc : an.ap + 2 * aBc, aBd[a2].width = cj, aBd[a2].height = ee, l6 = (a3Q = (i0 = aBd[a2].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, cj, ee)).data, a2 % 2 == 0)
					for (gt = aBc - 1; 0 <= gt; gt--)
						for (aF = aBf + Math.floor((gt + 1) * (a2o - aBf) / (aBc + 1)), gs = cj - 1; 0 <= gs; gs--) l6[bQ = 4 * ((0 === a2 ? aBc - gt - 1 : gt) * cj + gs)] = aF, l6[bQ + 1] = aF, l6[bQ + 2] = aF, l6[bQ + 3] = 255;
				else {
					for (gs = aBc - 1; 0 <= gs; gs--)
						for (aF = aBf + Math.floor((gs + 1) * (a2o - aBf) / (aBc + 1)), gt = ee - 1 - aBc; aBc <= gt; gt--) l6[bQ = 4 * (gt * cj + (3 === a2 ? aBc - gs - 1 : gs))] = aF, l6[bQ + 1] = aF, l6[bQ + 2] = aF, l6[bQ + 3] = 255;
					for (eO = 1; 0 <= eO; eO--)
						for (gs = aBc - 1; 0 <= gs; gs--)
							for (gt = aBc - 1; 0 <= gt; gt--) em = (Math.pow(gs * gs + gt * gt, .5) + 1) / (aBc + 1), aF = aBf + Math.floor((1 < em ? 1 : em) * (a2o - aBf)), l6[bQ = 4 * ((0 === eO ? aBc - gt - 1 : gt + eO * (ee - aBc)) * cj + (
								1 === a2 ? gs : aBc - gs - 1))] = aF, l6[bQ + 1] = aF, l6[bQ + 2] = aF, l6[bQ + 3] = 255
				}
				i0.putImageData(a3Q, 0, 0)
			}
			aBi = aBf, an.ky.fillStyle = "rgb(" + aBi + "," + aBi + "," + aBi + ")", an.ky.fillRect(0, 0, an.ao, 1), an.ky.fillRect(0, an.ap - 1, an.ao, 1), an.ky.fillRect(0, 0, 1, an.ap), an.ky.fillRect(an.ao - 1, 0, 1, an.ap)
		}
	}, this.mA = function() {
		var eO = rp ? 0 : -aBc;
		a9g(eO, eO, an.ao - 2 * eO, an.ap - 2 * eO, hn.aBj, hn.aBk, hn.aBl, hn.aBm) || (cy.fillStyle = aBe, cy.fillRect(0, 0, h0, cs))
	}, this.cx = function() {
		rp || (a9f(0, -aBc, an.ao, aBc, hn.aBj, hn.aBk, hn.aBl, hn.aBm) && cy.drawImage(aBd[0], hn.aBn, hn.aBo - aBc), a9f(an.ao, -aBc, aBc, an.ap + 2 * aBc, hn.aBj, hn.aBk, hn.aBl, hn.aBm) && cy.drawImage(aBd[1], hn.aBn + an.ao, hn.aBo - aBc),
			a9f(0, an.ap, an.ao, aBc, hn.aBj, hn.aBk, hn.aBl, hn.aBm) && cy.drawImage(aBd[2], hn.aBn, hn.aBo + an.ap), a9f(-aBc, -aBc, aBc, an.ap + 2 * aBc, hn.aBj, hn.aBk, hn.aBl, hn.aBm) && cy.drawImage(aBd[3], hn.aBn - aBc, hn.aBo - aBc))
	}
}

function rF() {
	this.j7 = new aBp, this.a4X = new aBq, this.mB = new aBr, this.g0 = new aBs, this.e3 = new aBt, this.aBi = new aBu, this.aBv = new aBw, this.et = new aBx, this.k5 = new aBy, this.c6 = function() {
		this.mB.c6(), this.g0.c6(), this.e3.c6(), this.aBi.c6()
	}
}

function aBx() {
	function aC4(player, eQ, aC6, aC7) {
		for (var gx, gy, cj, ee, mv, aC8, gz, h1, bI = eQ + aC7, a2 = eQ; a2 < bI; a2 += aC6)
			if (gx = (gx = ei[player] - a2) < 1 ? 1 : gx, gy = el[player] - a2, gz = (gz = eh[player] + a2) >= an.ao - 1 ? an.ao - 2 : gz, ee = (h1 = (h1 = ek[player] + a2) >= an.ap - 1 ? an.ap - 2 : h1) - (gy = gy < 1 ? 1 : gy), gz = (mv = b7(eR
					.random() * (2 * (gz - gx + h1 - gy)), eR.value(100))) <= (cj = gz - gx) ? (aC8 = gx + mv, gy) : mv <= cj + ee ? (aC8 = gz, gy + mv - cj) : mv <= 2 * cj + ee ? (aC8 = gx + mv - cj - ee, h1) : (aC8 = gx, gy + mv - 2 * cj - ee),
				aC5(player, h1 = bK.lk(aC8, gz))) return h1;
		return -1
	}

	function aC5(pA, bR) {
		return bK.bL(bR) && (bK.bV(bR) || pA !== (bR = bK.bU(bR)) && eT(pA, bR) && 0 < bc[bR].length)
	}
	this.eu = function(player) {
		return !(0 === bc[player].length || bC[player] < 100) && e2.g0.k1 !== e2.g0.k2 && (e2.g0.k3[player] !== e2.g0.k4 && cB.cC.jw(player, 203, 32, 16) ? !! function(player) {
			var bR = function(player) {
				var a2, lo, ln, gx = ei[player],
					gy = el[player],
					da = eh[player] - gx + 1,
					dd = ek[player] - gy + 1,
					aF = eR.value(100);
				for (a2 = 0; a2 < 32; a2++)
					if (lo = gx + by.bz(eR.random() * da, aF), ln = gy + by.bz(eR.random() * dd, aF), lo = bK.lk(lo, ln), aC5(player, lo)) return lo;
				return -1
			}(player);
			if (0 <= bR) return e2.k5.k6(player, bR >> 2);
			if (0 <= (bR = aC4(player, 1, 4, 40))) return e2.k5.k6(player, bR >> 2);
			if (0 <= (bR = aC4(player, 40, 8, 200))) return e2.k5.k6(player, bR >> 2);
			return
		}(player) && !! function(pA) {
			if (0 === e8.aO[2]) return void console.log("error 325234");
			var aC2 = e8.aO[1] + jr.d4[e8.aO[2] - 1] << 2;
			if (bK.bV(aC2)) return 1;
			return aC2 = bK.bU(aC2), pA !== aC2 && !!eT(pA, aC2)
		}(player) && function(player) {
			return cB.cC.jy(player), e2.g0.k7(player), !0
		}(player) : void 0)
	}
}

function aBp() {
	function aCB(aCA) {
		var aCO = 4 + .03 * (1 + 1.5 * o) * cZ / dq;
		return jr.dg(aCA, e8.aO[1]) < aCO
	}
	this.j8 = function(player, aCA) {
		return !!jr.dw(aCA) && e2.g0.k1 !== e2.g0.k2 && e2.g0.k3[player] !== e2.g0.k4 && 0 !== bc[player].length && !!e2.k5.k6(player, aCA) && !!aCB(aCA)
	}, this.jC = function(player, jB, aCA) {
		return !!(jr.dw(aCA) && this.k8(player, jB) && e2.k5.k9(aCA) && aCB(aCA))
	}, this.k8 = function(player, id) {
		for (var aCC, aCD = player << 3, aCE = aCD + e2.g0.k3[player], aCF = e2.g0.aCF, aCG = e2.g0.aCG, a2 = aCD; a2 < aCE; a2++)
			if (id === aCG[aCC = aCF[a2]]) return e8.aO[3] = aCC, !0;
		return !1
	}, this.jA = function(dK) {
		var aCH = e2.aBi.aCH;
		return e2.aBi.aCH = -1, !!this.k8(bB, aCH) && (cR.cS.jA(aCH, dK), !0)
	}, this.rl = function(cp, cq) {
		var a2, aCE, aCI, aCF, aCJ, aCK, aCL, em, t9, aCM, player = bB,
			bI = e2.g0.k3[player];
		if (0 === bI) return !1;
		for (aCF = e2.g0.aCF, aCK = e2.g0.aCK, t9 = e2.g0.t9, aCE = (player = player << 3) + bI, aCJ = .4 * cB.i0.kH() * cZ / dq, aCI = -1, a2 = player; a2 < aCE; a2++) aCM = aCF[a2], aCL = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(t9[aCM]))), (
			em = jr.dW(cp, cq, aCK[aCM])) - aCL < aCJ && (aCJ = em, aCI = aCM);
		return !(aCI < 0 || (e2.aBi.aCH = e2.g0.aCG[aCI], 0))
	}, this.rz = function(cp, cq) {
		var a2, aCI, aCJ, aCK, aCL, em, t9, bI = e2.g0.k1;
		if (bI < 1) return -1;
		for (aCK = e2.g0.aCK, t9 = e2.g0.t9, aCJ = 1e3, aCI = -1, a2 = 0; a2 < bI; a2++) aCL = 16 * cB.i0.kH() * (.625 + .125 * Math.sqrt(Math.sqrt(t9[a2]))), (em = jr.dW(cp, cq, aCK[a2])) < aCJ && em < aCL && (aCJ = em, aCI = a2);
		return aCI
	}, this.aCN = function(cp, cq) {
		var a2, aCE, aCI, aCF, aCJ, aCK, aCL, em, t9, aCM, player = bB,
			bI = e2.g0.k3[player];
		if (0 === bI) return -1;
		for (aCF = e2.g0.aCF, aCK = e2.g0.aCK, t9 = e2.g0.t9, aCE = (player = player << 3) + bI, aCJ = .4 * cB.i0.kH() * cZ / dq, aCI = -1, a2 = player; a2 < aCE; a2++) aCM = aCF[a2], aCL = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(t9[aCM]))), (
			em = jr.dW(cp, cq, aCK[aCM])) - aCL < aCJ && (aCJ = em, aCI = aCM);
		return aCI < 0 ? -1 : e2.g0.aCG[aCI]
	}
}

function aBq() {
	this.a4Y = function(player) {
		for (var aCF = e2.g0.aCF, aCD = player << 3, a2 = aCD + e2.g0.k3[player] - 1; aCD <= a2; a2--) this.aCP(aCF[a2])
	}, this.aCP = function(aCQ) {
		var g0 = e2.g0,
			aCR = g0.k1 - 1,
			aCS = g0.t8[aCQ],
			aCT = g0.aCU[aCQ],
			aCV = g0.aCK[aCQ];
		g0.k1 = aCR, g0.t8[aCQ] = g0.t8[aCR], g0.aCW[aCQ] = g0.aCW[aCR], g0.aCX[aCQ] = g0.aCX[aCR], g0.aCK[aCQ] = g0.aCK[aCR], g0.aCY[aCQ] = g0.aCY[aCR], g0.t9[aCQ] = g0.t9[aCR], g0.aCU[aCQ] = g0.aCU[aCR], g0.aCG[aCQ] = g0.aCG[aCR], g0.aCZ[aCQ] =
			g0.aCZ[aCR], g0.aCF[g0.t8[aCQ]] = aCQ,
			function(a2A) {
				var player = a2A >> 3,
					g0 = e2.g0,
					bI = g0.k3[player] - 1,
					aCc = (player << 3) + bI;
				g0.k3[player] = bI, aCc !== a2A && (g0.aCF[a2A] = g0.aCF[aCc], g0.t8[g0.aCF[a2A]] = a2A)
			}(aCS), e2.e3.e3[jr.e1(g0.aCK[aCQ])][g0.aCU[aCQ]] = aCQ, aCR = jr.e1(aCV), aCS = aCT, aCR = e2.e3.e3[aCR], g0 = aCR.pop(), aCS !== aCR.length && (aCR[aCS] = g0, e2.g0.aCU[g0] = aCS)
	}
}

function aBr() {
	var aCf, aCg = 8,
		aCh = new Array(2);

	function aCi(cb) {
		var mJ = aCg + 4,
			rV = cB.i0.ku(mJ, mJ),
			p9 = cB.i0.getContext(rV, !0),
			a3Q = cB.i0.getImageData(p9, mJ, mJ),
			l6 = a3Q.data;
		return aCj(l6, mJ + 1, cb), aCj(l6, mJ + 2, cb), aCj(l6, 2 * mJ + 1, cb), aCj(l6, 2 * mJ - 3, cb), aCj(l6, 2 * mJ - 2, cb), aCj(l6, 3 * mJ - 2, cb), aCj(l6, mJ * (mJ - 3) + 1, cb), aCj(l6, mJ * (mJ - 2) + 1, cb), aCj(l6, mJ * (mJ - 2) + 2,
			cb), aCj(l6, mJ * (mJ - 2) - 2, cb), aCj(l6, mJ * (mJ - 1) - 3, cb), aCj(l6, mJ * (mJ - 1) - 2, cb), p9.putImageData(a3Q, 0, 0), rV
	}

	function aCj(l6, dK, cb) {
		dK *= 4;
		l6[dK] = 255, l6[1 + dK] = 255, l6[2 + dK] = cb, l6[3 + dK] = 255
	}

	function ku(player) {
		var aCk = aCg >> 1,
			rV = cB.i0.ku(aCg, aCg);
		return function(p9, player, gs, gt) {
			var da, dK, aCm, a2B, mJ = aCg,
				a3Q = cB.i0.getImageData(p9, mJ, mJ),
				l6 = a3Q.data,
				cP = (mJ >> 1) - .5,
				aBe = bK.a3y(player),
				aCo = cB.l4.ox(aBe, .5);
			cB.l4.oy(aBe, aCo, 300) || cB.l4.p0(aBe, 100);
			for (gt = 0; gt < mJ; gt++)
				for (gs = 0; gs < mJ; gs++) a2B = (mJ - 1.5) * (mJ - 1.5) / 4, aCm = (da = (da = gs - cP) * da + (da = gt - cP) * da) <= (mJ - 4.5) * (mJ - 4.5) / 4 ? aCo : aBe, l6[dK = 4 * (gt * mJ + gs)] = aCm[0], l6[1 + dK] = aCm[1], l6[2 +
					dK] = aCm[2], l6[3 + dK] = a2B < da ? 0 : 255;
			p9.putImageData(a3Q, 0, 0)
		}(cB.i0.getContext(rV, !0), player, aCk, aCk), rV
	}
	this.c6 = function() {
		aCf = new Array(bN), aCh[0] = aCi(255), aCh[1] = aCi(0)
	}, this.cx = function() {
		var a2, player, aCp, eI, aCq, dZ, aCu, aCw, aCx, aCK = e2.g0.aCK,
			t8 = e2.g0.t8,
			t9 = e2.g0.t9,
			aCy = aCf,
			aCz = bB,
			aD0 = -1,
			bI = e2.g0.k1,
			aD1 = h0,
			aD2 = cs,
			aD3 = an.ao << 4,
			aD4 = dq,
			dT = aD4 / aCg,
			gx = dp / aD4,
			gy = dr / aD4,
			da = (aD1 + dp) / aD4 - gx,
			dd = (aD2 + dr) / aD4 - gy,
			p9 = cy;
		for (e2.j7.k8(bB, e2.aBi.aCH) && (aD0 = e8.aO[3]), p9.fillStyle = d1.d2, a2 = 0; a2 < bI; a2++) player = t8[a2] >> 3, eI = t9[a2], aCp = .625 + .125 * Math.sqrt(Math.sqrt(eI)), aCq = (dZ = aCK[a2]) % aD3 / 16 - aCp, dZ = aD2 * (Math
			.floor(dZ / aD3) / 16 - aCp - gy) / dd, aCu = -2 * (aCx = aD4 * aCp) * (1 + (aCw = +(player === aCz)) / 8), aCw = aCw * aCx / 4, (aCx = aD1 * (aCq - gx) / da) < aCu || dZ < aCu || aD1 + aCw < aCx || aD2 + aCw < dZ || (aCq = aCp *
			aD4, p9.imageSmoothingEnabled = (aCu = 2 * aCp * dT) < 3, void 0 === (aCw = aCy[player]) && (aCy[player] = aCw = ku(player)), player === aCz && (p9.setTransform(aCu, 0, 0, aCu, aCx - 2 * aCu, dZ - 2 * aCu), p9.drawImage(aCh[+(
				a2 === aD0)], 0, 0)), p9.setTransform(aCu, 0, 0, aCu, aCx, dZ), p9.drawImage(aCw, 0, 0), (aCp = Math.floor(function(eI) {
				if (eI < 1e3) return .42;
				if (eI < 1e4) return .34;
				if (eI < 1e6) return .26;
				if (eI < 1e8) return .19;
				return .15
			}(eI) * aCq)) < 6) || (p9.setTransform(1, 0, 0, 1, 0, 0), 20 <= aCp ? (p9.font = cB.i0.kR(.85 * aCp, 1), p9.fillText(g6.h9(eI), aCx + aCq, dZ + .93 * aCq + .085 * aCp), (aCp *= fn.a6P(player)) < 6 || (p9.font = cB.i0.kR(aCp, 1),
			p9.fillText(hA[player], aCx + aCq, dZ + 1.16 * aCq + .1 * aCp))) : (p9.font = cB.i0.kR(aCp, 1), p9.fillText(g6.h9(eI), aCx + aCq, dZ + aCq + .1 * aCp)));
		p9.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aBw() {
	this.eu = function() {
		for (var aD6, aBv, aCZ = e2.g0.aCZ, aCK = e2.g0.aCK, aCX = e2.g0.aCX, a2 = e2.g0.k1 - 1; 0 <= a2; a2--) aD6 = aCK[a2], 0 !== (aBv = aCZ[a2]) && aD6 === aCX[a2] && (! function(a2, aD8, dH) {
			var eH, player = e2.g0.t8[a2] >> 3,
				dH = aD8 + jr.d4[dH] << 2,
				a2 = e2.g0.t9[a2];
			if (bK.bV(dH)) eH = bN;
			else {
				if ((eH = bK.bU(dH)) === player) return cB.cC.jS(player, a2);
				if (!eT(player, eH)) return cR.fF.jQ(player, eH, a2)
			}
			player === bB && (bF.bG[13] += a2);
			bJ[player].push(aD8 << 2), at.eE(player, a2, eH), b9.eF(player, !0)
		}(a2, jr.e0(aD6), aBv - 1), e2.a4X.aCP(a2))
	}
}

function aBs() {
	this.aD9 = null, this.k2 = 512, this.k4 = 8, this.k1 = 0, this.gf = 0, this.t8 = new Uint16Array(this.k2), this.aCW = new Uint32Array(this.k2), this.aCX = new Uint32Array(this.k2), this.aCK = new Uint32Array(this.k2), this.aCY = new Uint16Array(
			this.k2), this.t9 = new Uint32Array(this.k2), this.aCU = new Uint16Array(this.k2), this.aCG = new Uint16Array(this.k2), this.aCZ = new Uint8Array(this.k2), this.k3 = new Uint8Array(bN), this.aCF = new Uint16Array(this.k4 * bN), this.c6 =
		function() {
			this.gf = 0, this.k1 = 0, this.aD9 = new Uint8Array(an.ao + an.ap), this.k3.fill(0)
		}, this.k7 = function(player) {
			var bI = this.k1,
				aDA = jr.dz(e8.aO[0]),
				aBE = this.k3[player],
				aDB = (player << 3) + aBE;
			dj[player] = 2, this.t8[bI] = aDB, this.aCW[bI] = aDA, this.aCK[bI] = aDA, this.aCX[bI] = jr.dz(e8.aO[1]), this.aCY[bI] = 0, this.t9[bI] = e8.aL[0], this.aCU[bI] = e2.e3.k7(bI, jr.e1(aDA)), this.aCG[bI] = this.gf, this.aCZ[bI] = e8.aO[2],
				this.gf = this.gf + 1 & 1023, this.aCF[aDB] = bI, this.k3[player] = aBE + 1, this.k1++
		}, this.jA = function() {
			var aCC = e8.aO[3];
			this.aCW[aCC] = this.aCK[aCC], this.aCX[aCC] = jr.dz(e8.aO[1]), this.aCY[aCC] = 0, this.aCZ[aCC] = e8.aO[2]
		}, this.eu = function() {
			if (aA.f9() % 5 == 3) {
				e2.aBv.eu(), ! function(s5) {
					var a2, aDF, aDG, aDH, aDI, aDA, aDM, aDN, bS, bR, aCW = s5.aCW,
						aCX = s5.aCX,
						aCK = s5.aCK,
						t9 = s5.t9,
						aCY = s5.aCY,
						aCU = s5.aCU,
						s5 = s5.k1,
						aD3 = an.ao << 4;
					for (a2 = s5 - 1; 0 <= a2; a2--) aDG = aCK[a2], aDF = aCX[a2], aDG !== aDF && (aDA = aCW[a2], aDM = aDF % aD3 - (aDI = aDA % aD3), aDN = ~~((aDF + .5) / aD3) - (aDA = ~~((aDA + .5) / aD3)), bS = ~~Math.sqrt(aDM * aDM + aDN *
						aDN + .5), bR = 4e5 + 2e4 * ~~Math.sqrt(.5 + (Math.sqrt(t9[a2] + .5) << 4)), 65535 <= (bR = aCY[a2] + Math.max(~~((.5 + bR) / bS), 1)) ? aCK[a2] = aDH = aDF : (aCY[a2] = bR, aCK[a2] = aDH = aDI + by.bz(bR * aDM,
						65536) + aD3 * (aDA + by.bz(bR * aDN, 65536))), aCU[a2] = e2.e3.aDP(aCU[a2], aDG, aDH))
				}(this), ! function(s5) {
					var a2, lJ, cP, cK, fA, aDQ, aDR, aDS, lE, d9, gx, gy, aDT, aCJ, aDU, lF, aDA, aDX, bI = s5.k1,
						aCK = s5.aCK,
						t8 = s5.t8,
						t9 = s5.t9,
						e3 = e2.e3.e3,
						aDY = e3.length,
						aDZ = e2.e3.aDZ,
						aD3 = an.ao << 4,
						aDa = cH,
						aDb = fB.fC,
						bR = (bI - 1) * (aA.f9() % 2);
					for (a2 = 0; a2 < bI; a2++) {
						for (lJ = Math.abs(a2 - bR), aDA = aCK[lJ], cP = jr.e1(aDA), lE = t8[lJ] >> 3, gx = aDA % aD3, gy = ~~((aDA + .5) / aD3), aDA = t9[lJ], aDX = 80 + ~~Math.sqrt(.5 + (Math.sqrt(aDA + .5) << 8)), aCJ = Math.min(aDX * aDX,
								262144), aDU = -1, cK = 0; cK < 9; cK++)
							if (!((aDQ = cP + aDZ[cK]) < 0 || aDY <= aDQ))
								for (aDS = e3[aDQ], aDR = aDS.length, fA = 0; fA < aDR; fA++) aDT = aDS[fA], lF = t8[aDT] >> 3, lE == lF || aDa && aDb[lE] === aDb[lF] || (lF = aCK[aDT], (lF = (d9 = gx - lF % aD3) * d9 + (d9 = gy - ~~((lF + .5) /
									aD3)) * d9) < aCJ && (aDU = aDT, aCJ = lF)); - 1 !== aDU && (aDA = Math.min(Math.max(1, by.bz(aDA * (aDX - Math.floor(Math.sqrt(aCJ + .5))), 5 * aDX)), t9[aDU]), t9[lJ] -= aDA >> 4, t9[aDU] -= aDA)
					}
				}(this);
				var a2, eI, t9 = (s5 = this).t9,
					s5 = s5.k1;
				for (a2 = s5 - 1; 0 <= a2; a2--) eI = t9[a2], 0 < (eI -= Math.max(1, eI >> 7)) ? t9[a2] = eI : e2.a4X.aCP(a2)
			}
		}
}

function aBt() {
	this.aDc = 32, this.gs = 0, this.gt = 0, this.e4 = 0, this.aDd = 0, this.aDe = 4, this.e3 = null, this.aDZ = new Int16Array(9), this.c6 = function() {
		this.e4 = 1 + by.bz(an.ao - 1, this.aDc), this.aDd = 1 + by.bz(an.ap - 1, this.aDc), this.e3 = new Array(this.e4 * this.aDd), cB.l4.ow(this.e3);
		var gs, gt, aDZ = this.aDZ,
			cj = this.e4;
		for (gs = -1; gs <= 1; gs++)
			for (gt = -1; gt <= 1; gt++) aDZ[3 * (1 + gt) + 1 + gs] = gt * cj + gs
	}, this.k7 = function(aDg, a2) {
		return this.e3[a2].push(aDg), this.e3[a2].length - 1
	}, this.aDP = function(aDh, aDA, aDF) {
		var aDi, aDj, aDA = jr.e1(aDA),
			aDF = jr.e1(aDF);
		return aDA === aDF ? aDh : (aDi = this.e3[aDA].pop(), this.e3[aDA].length === aDh ? this.k7(aDi, aDF) : (aDj = this.e3[aDA][aDh], this.e3[aDA][aDh] = aDi, e2.g0.aCU[aDi] = aDh, this.k7(aDj, aDF)))
	}
}

function aBy() {
	function cJ(aDF, aDk) {
		if (! function(aDF, aCA) {
				var d8 = jr.e0(aDF),
					aDn = Math.abs(jr.dA(aCA) - jr.dA(d8)),
					d8 = Math.abs(jr.dC(aCA) - jr.dC(d8));
				0 !== Math.max(aDn, d8) && ! function(aDA, aDF, aDn, aDo) {
					var aDq = jr.dc(aDA),
						aDA = jr.df(aDA),
						aDs = jr.dc(aDF),
						aDF = jr.df(aDF),
						aDs = aDs - aDq,
						aDF = aDF - aDA,
						aDw = Math.abs(aDs),
						aDx = Math.abs(aDF),
						aDs = 0 < aDs ? 1 : 3,
						aDF = 0 < aDF ? 2 : 0;
					aDx < aDw ? aE0(aDq, aDA, aDq + aDw, aDA + aDx, aDs, aDF, aDn) : aE0(aDA, aDq, aDA + aDx, aDq + aDw, aDF, aDs, aDo)
				}(aDF, jr.dz(aCA), aDn, d8)
			}(aDF, aDk), 0 === e8.aK[0]) return !!bK.rp(aDk << 2);
		if (function(aCA) {
				if (bK.rp(aCA << 2)) return 1;
				return function(aCA) {
					var a2, dH, aD9 = e2.g0.aD9,
						aE4 = jr,
						bI = e8.aK[0],
						aE5 = 4 * aCA;
					for (a2 = bI - 1; 0 <= a2; a2--)
						if (dH = aD9[a2], aE5 = aE4.e6(aE5, dH + 2 & 3), bK.rp(aE5)) return e8.aK[0] = a2, e8.aO[1] = aE5 >> 2, e8.aO[2] = 1 + dH, 1;
					return
				}(aCA)
			}(aDk)) {
			var a2, aDk = jr.e0(aDF),
				l6 = zA,
				aD9 = e2.g0.aD9,
				bI = e8.aK[0] - 1,
				aE5 = 4 * aDk,
				d5 = jr.d5;
			for (a2 = 0; a2 < bI; a2++)
				if (aE5 += d5[aD9[a2]], 0 !== l6[aE5 + 3] || 2 !== l6[aE5 + 2]) return !!void 0;
			return !!1
		}
		return !1
	}

	function aE0(aDq, aDr, aDs, aDt, aDy, aDz, aDn) {
		for (var gt, aD9 = e2.g0.aD9, bR = 0, aE1 = 0, ee = aDt - aDr, cj = aDs - aDq, aE2 = aDq % 16, a2 = 1; a2 <= aDn; a2++) aD9[bR++] = aDy, aD9[bR] = aDz, bR += (gt = (ee * (aE2 + (a2 << 4)) + .5) / cj >> 4) - aE1, aE1 = gt;
		e8.aQ(e8.aK, bR)
	}
	this.k6 = function(player, aDk) {
		var dH, d8, d7 = jr.dJ(player, aDk);
		return d7 !== aDk && (dH = jr.d6(d7, aDk), d8 = jr.e5(d7, dH), !(!bK.rp(d8 << 2) && (dH = jr.dG(d7, aDk, dH), d8 = jr.e5(d7, dH), bK.lG(d8 << 2) || !bK.rp(d8 << 2)) || (e8.aO[0] = d8, e8.aO[1] = aDk, e8.aO[2] = 0, !cJ(jr.dz(d8), aDk)) ||
			0 !== e8.aO[2] && jr.dS(player, e8.aO[1] + jr.d4[e8.aO[2] - 1] << 2)))
	}, this.k9 = function(aDk) {
		var aDA = e2.g0.aCK[e8.aO[3]];
		return e8.aO[1] = aDk, e8.aO[2] = 0, cJ(aDA, aDk)
	}
}

function aBu() {
	var aCg = 32,
		aE7 = new Array(2);

	function ku(fA) {
		var gs, gt, dK, dd, da, mJ = aCg,
			rV = cB.i0.ku(mJ, mJ),
			p9 = cB.i0.getContext(rV, !0),
			a3Q = cB.i0.getImageData(p9, mJ, mJ),
			l6 = a3Q.data,
			cP = (mJ >> 1) - .5,
			aE8 = Math.sqrt(cP * cP);
		for (l6.fill(255), gt = 0; gt < mJ; gt++)
			for (gs = 0; gs < mJ; gs++) da = gs - cP, dd = gt - cP, dK = 4 * (gt * mJ + gs), da = 714 * (aE8 - Math.sqrt(da * da + dd * dd)) / aE8, l6[2 + dK] = fA, l6[3 + dK] = 255 < da ? 0 : da;
		return p9.putImageData(a3Q, 0, 0), rV
	}
	this.aCH = -1, this.c6 = function() {
		this.aCH = -1, aE7[0] || (aE7[0] = ku(255), aE7[1] = ku(0))
	}, this.aE9 = function(p9, dT, gs, gt, mv, a2) {
		jr.dl() && (p9.setTransform(dT *= 4 / 3 * .625, 0, 0, dT, gs - (mv *= 4 / 3), gt - mv), p9.drawImage(aE7[+(e2.g0.aCG[a2] === this.aCH)], 0, 0))
	}
}

function a7P() {
	var a0n, a7K, tD, aR, a4q, nf;

	function aEE() {}

	function a7Q() {
		fq.a7Q(a0n, a7K)
	}

	function aEG(ng) {
		1 === ++tD ? a4q.readAsArrayBuffer(ng.data) : aR.push(ng.data)
	}

	function aEB() {
		tD--, q6.aEI(a0n, new Uint8Array(a4q.result)), 0 < tD && (a4q.readAsArrayBuffer(aR[0]), aR.shift())
	}

	function aEH() {}

	function a7V(ng) {
		fq.a7V(a0n, ng)
	}
	this.c6 = function(cb, aEA) {
		a0n = cb, a7K = aEA, tD = 0, aR = [], (a4q = new FileReader).addEventListener("loadend", aEB);
		cb = uX[0];
		a0n < fq.a1b ? cb += fq.a7D[a0n] + uX[1 + a7e] : cb += fq.a7D[0] + "/i" + (1 + a7e) + (a0n - fq.a1c) + "/", (nf = new WebSocket(cb)).onopen = a7Q, nf.onmessage = aEG, nf.onclose = a7V, nf.onerror = aEH
	}, this.aED = function() {
		return nf.readyState === nf.CONNECTING
	}, this.a0f = function() {
		return nf.readyState === nf.OPEN
	}, this.a7M = function() {
		return this.aED() || this.a0f()
	}, this.a7N = function(aEA) {
		a7K = aEA
	}, this.send = function(jm) {
		this.a0f() && nf.send(jm)
	}, this.close = function(a7S) {
		this.a7M() && (nf.close(a7S), this.kP())
	}, this.kP = function() {
		nf.onopen = aEE, nf.onmessage = aEE, nf.onclose = aEE, nf.onerror = aEE, a4q.removeEventListener("loadend", aEB)
	}
}

function vh() {
	if (fD < 3) return !1;
	if (by.bz(3 * bj[gW[2]], 2) < bj[gW[0]]) return !1;
	if (bj[gW[0]] + bj[gW[1]] + bj[gW[2]] < pW - by.bz(pW, 10)) return !1;
	if (8 * Math.min(Math.min(bC[gW[0]], bC[gW[1]]), bC[gW[2]]) < 5 * Math.max(Math.max(bC[gW[0]], bC[gW[1]]), bC[gW[2]])) return !1;
	if (cH) {
		if (fB.fC[gW[0]] === fB.fC[gW[1]]) return !1;
		if (fB.fC[gW[0]] === fB.fC[gW[2]]) return !1;
		if (fB.fC[gW[1]] === fB.fC[gW[2]]) return !1
	}
	return !0
}

function a7m() {
	this.eL = 501, this.nX = new Uint32Array(this.eL), this.pD = new Uint32Array(this.eL), this.yo = new Uint16Array(this.eL), this.sO = 0, this.aEL = 1, this.fA = 0, this.max = [0, 0, 0], this.bG = 0, this.aEM = ["Avg. Attack Strength",
		"Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs",
		"Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses"
	], this.c6 = function() {
		this.sO = 0, this.aEL = 1, this.fA = 0, this.aEN(), this.aEO()
	}, this.jz = function(player, dn) {
		player === bB && (this.bG[0] += dn, this.bG[1]++, this.bG[12] += e8.aL[1], this.bG[13] += e8.aL[0])
	}, this.jT = function(player, j3) {
		donationsTracker.logDonation(player, j3, e8.aL[0]);
		player === bB && (fm.jT(e8.aL[0], e8.aL[1], j3), this.bG[12] += e8.aL[1], this.bG[16] += e8.aL[0]), j3 === bB && (fm.tQ(e8.aL[0], player), this.bG[10] += e8.aL[0])
	}, this.eu = function() {
		0 < this.fA-- || this.aEP()
	}, this.aEP = function() {
		0 !== dj[bB] && (this.nX[this.sO] = bj[bB], this.pD[this.sO] = bC[bB], this.yo[this.sO] = bD.yp(bB), this.aEQ(this.sO), this.sO++, this.sO === this.eL && this.aER(), this.fA = this.aEL - 1, mE.ce())
	}, this.aER = function() {
		this.aEN(), this.aEQ(0), this.sO = 1 + b7(this.eL, 2);
		for (var a2 = 1; a2 < this.sO; a2++) this.nX[a2] = this.nX[2 * a2], this.pD[a2] = this.pD[2 * a2], this.yo[a2] = this.yo[2 * a2], this.aEQ(a2);
		this.aEL *= 2
	}, this.aEN = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.aEO = function() {
		this.bG = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.aEQ = function(a2) {
		this.max[0] = this.nX[a2] > this.max[0] ? this.nX[a2] : this.max[0], this.max[1] = this.pD[a2] > this.max[1] ? this.pD[a2] : this.max[1], this.max[2] = this.yo[a2] > this.max[2] ? this.yo[a2] : this.max[2]
	}
}

function a7n() {
	this.cj = 0, this.ee = 0, this.mL = 0, this.mM = 0, this.zf = 0, this.zg = 0, this.tg = 0, this.th = 0, this.a2a = 0, this.a1I = 0, this.aES = 0, this.aET = 0, this.vG = 0, this.cb = 0, this.s8 = ["Territory", "Balance", "Interest", "Numbers"],
		this.oN = !1, this.aEU = -1, this.aEV = !1, this.aEW = [0, 0], this.c6 = function() {
			this.oN = !1, this.aEU = -1, this.aEV = !1, this.resize()
		}, this.resize = function() {
			this.cj = p < 1.369 * q ? p : 1.369 * q;
			var bS = o && p < q ? 1 : o ? .8 : p < q ? .65 : .59;
			this.cj = Math.floor(bS * this.cj), this.cj -= o && p < q ? 2 * kI + 2 : 0, this.ee = Math.floor(this.cj / 1.369), this.vG = Math.floor(this.ee / 150), this.vG = Math.max(this.vG, 1.5), this.mL = Math.floor(1 + .02 * this.cj), this.mM =
				Math.floor(1 + .04 * this.cj), this.tg = this.mM, this.th = Math.floor(1 + .075 * this.cj), this.a1I = Math.floor(1 + .1125 * this.cj), this.aES = Math.floor(this.cj * (o ? .03 : .029)), this.aES = Math.max(this.aES, 4), this.aET =
				Math.floor(.035 * this.cj), this.aET = Math.max(this.aET, 4), this.a2a = this.ee - 2 * this.tg - this.th - this.a1I, this.oN && this.aEX()
		}, this.co = function(cp, cq) {
			var lc, lb;
			return !!this.oN && (lb = cp, lc = cq, cp -= b7(h0 - this.cj, 2), cq -= b7(cs - this.ee, 2), cp < 0 || cq < 0 || cp >= this.cj || cq >= this.ee || cp >= this.cj - this.a1I && cq < this.a1I ? 1 < c9.co(lb, lc) || this.kP() : cq < this
				.a1I || (cq < this.ee - this.th ? (this.aEV = !0, this.aEU = (cp - 2 * this.mL - this.zf) / this.zg, 3 !== this.cb && (aA.cm = !0)) : (lb = (lb = Math.floor(cp / (this.cj / this.s8.length))) < 0 ? 0 : lb >= this.s8.length ? this
					.s8.length - 1 : lb) !== this.cb && (this.cb = lb, this.aEX(), aA.cm = !0)), !0)
		}, this.ol = function() {
			var aEY = Math.floor((this.aEW[0] + dp) / dq),
				aEZ = Math.floor((this.aEW[1] + dr) / dq);
			aEY < 1 || aEZ < 1 || aEY >= an.ao - 1 || aEZ >= an.ap - 1 || console.log(aEY + " " + aEZ)
		}, this.nu = function(cp, cq) {
			return this.aEW[0] = cp, this.aEW[1] = cq, !(!this.oN || !this.aEV || (cp -= b7(h0 - this.cj, 2), cq = this.aEU, this.aEU = (cp - 2 * this.mL - this.zf) / this.zg, (0 <= this.aEU && this.aEU <= 1 || 0 <= cq && cq <= 1) && (aA.cm = !0),
				0))
		}, this.oR = function() {
			this.aEV && (this.aEV = !1)
		}, this.oh = function() {
			this.oN ? this.kP() : this.show()
		}, this.show = function() {
			bF.sO < 2 || (this.oN = !0, this.aEX())
		}, this.kP = function() {
			this.oN = !1, this.aEU = -1, aA.cm = !0
		}, this.aEX = function() {
			this.cb < 2 ? this.zf = ck.measureText(g6.h9(bF.max[this.cb]), this.aES + cd) : 2 === this.cb && (this.zf = ck.measureText(fo.tT(6, 2), this.aES + cd)), this.zg = this.cj - 2 * this.mL - this.zf - this.mM
		}, this.ce = function() {
			this.oN && this.aEX()
		}, this.cx = function() {
			this.oN && this.tm()
		}, this.tm = function() {
			var gs = b7(h0 - this.cj, 2),
				gt = b7(cs - this.ee, 2);
			cy.setTransform(1, 0, 0, 1, gs, gt), cy.fillStyle = d1.i6, cy.fillRect(0, this.a1I, this.cj, this.ee - this.a1I), this.aEa(), this.aEb(), cy.strokeRect(0, 0, this.cj, this.ee), cy.textAlign = uS, cy.font = this.aES + cd, 0 === this.cb ?
				this.aEc(bF.nX, gs, gt) : 1 === this.cb ? this.aEc(bF.pD, gs, gt) : 2 === this.cb ? this.aEd(gs, gt) : 3 === this.cb && (this.aEe(gs, gt), this.aEf(gs, gt)), c9.sQ(Math.floor(gs + this.cj - .725 * this.a1I), Math.floor(gt + .275 *
					this.a1I), Math.floor(.45 * this.a1I)), cy.setTransform(1, 0, 0, 1, 0, 0)
		}, this.aEa = function() {
			var a2, r;
			for (cy.lineWidth = this.vG, cy.textBaseline = cz, cy.textAlign = d0, cy.strokeStyle = d1.d2, cy.font = cc + this.aET + cd, r = this.cj / this.s8.length, cy.fillStyle = d1.iM, cy.fillRect(this.cb * r, this.ee - this.th, r, this.th), cy
				.fillStyle = d1.d2, cy.fillRect(0, this.ee - this.th - .5 * this.vG, this.cj, this.vG), a2 = 1; a2 <= 3; a2++) cy.fillRect(a2 * r, this.ee - this.th, this.vG, this.th);
			for (a2 = this.s8.length - 1; 0 <= a2; a2--) cy.fillText(this.s8[a2], (a2 + .5) * r, this.ee - .46 * this.th)
		}, this.aEb = function() {
			cy.fillStyle = d1.ib, cy.fillRect(0, 0, this.cj, this.a1I), cy.fillStyle = d1.d2, cy.fillRect(0, this.a1I - .5 * this.vG, this.cj, this.vG), cy.font = cc + Math.floor(.39 * this.a1I) + cd, cy.fillText("Statistics", Math.floor(this.cj /
				2), Math.floor(.55 * this.a1I))
		}, this.aEc = function(aR, gs, gt) {
			var cP = bF.max[this.cb],
				cX = (cy.setTransform(1, 0, 0, 1, gs + 2 * this.mL + this.zf, gt + this.tg + this.a1I), cy.lineWidth = 2, this.a2a / Math.sqrt(cP));
			cy.beginPath(), cy.moveTo(this.zg, this.a2a - cX * Math.sqrt(aR[bF.sO - 1]));
			for (var a2 = bF.sO - 2; 0 <= a2; a2--) cy.lineTo(a2 * this.zg / (bF.sO - 1), this.a2a - cX * Math.sqrt(aR[a2]));
			cy.stroke();
			gs = this.sQ(aR, cX, .5);
			gs < .95 && cy.fillText(g6.h9(cP), -this.mL, 0), .05 < Math.abs(gs - .5) && cy.fillText(g6.h9(Math.floor(cP / 4)), -this.mL, Math.floor(this.a2a / 2)), .05 < gs && cy.fillText("0", -this.mL, this.a2a)
		}, this.aEd = function(gs, gt) {
			cy.setTransform(1, 0, 0, 1, gs + 2 * this.mL + this.zf, gt + this.tg + this.a1I), cy.lineWidth = 2;
			var cX = this.a2a / Math.max(bF.max[this.cb], 1);
			cy.beginPath(), cy.moveTo(this.zg, this.a2a - cX * bF.yo[bF.sO - 1]);
			for (var a2 = bF.sO - 2; 0 <= a2; a2--) cy.lineTo(a2 * this.zg / (bF.sO - 1), this.a2a - cX * bF.yo[a2]);
			cy.stroke();
			gs = this.sQ(bF.yo, cX, 1), gt = bF.max[this.cb] / 100;
			gs < .95 && cy.fillText(fo.tT(gt, 2), -this.mL, 0), .05 < Math.abs(gs - .5) && cy.fillText(fo.tT(gt / 2, 2), -this.mL, Math.floor(this.a2a / 2)), .05 < gs && cy.fillText(fo.tT(0, 2), -this.mL, this.a2a)
		}, this.aEe = function(gs, gt) {
			cy.setTransform(1, 0, 0, 1, gs + .34 * this.cj, gt + 2 * this.tg + this.a1I), cy.textAlign = uS;
			for (var yE = this.ee - 4 * this.tg - this.th - this.a1I, a2 = 7; 0 <= a2; a2--) cy.fillText(bF.aEM[a2], 0, a2 * yE / 7);
			cy.setTransform(1, 0, 0, 1, gs + .39 * this.cj, gt + 2 * this.tg + this.a1I), cy.textAlign = sy;
			gs = bF.bG[1];
			for (cy.fillText(fo.tT(bF.bG[0] / (10 * (gs < 1 ? 1 : gs)), 1), 0, 0), a2 = 6; 1 <= a2; a2--) cy.fillText(bF.bG[a2].toString(), 0, a2 * yE / 7);
			cy.fillText(fo.tT(100 * (1 - bj[bB] / bF.bG[7]), 0), 0, yE)
		}, this.aEf = function(gs, gt) {
			cy.setTransform(1, 0, 0, 1, gs + .79 * this.cj, gt + 2 * this.tg + this.a1I), cy.textAlign = uS;
			var a2, yE = this.ee - 4 * this.tg - this.th - this.a1I;
			for (cy.fillStyle = d1.iH, a2 = 2; 0 <= a2; a2--) cy.fillText(bF.aEM[a2 + 8], 0, a2 * yE / 9);
			for (cy.fillStyle = d1.iG, cy.fillText(bF.aEM[11], 0, 3 * yE / 9), cy.fillStyle = d1.iU, a2 = 8; 4 <= a2; a2--) cy.fillText(bF.aEM[a2 + 8], 0, a2 * yE / 9);
			cy.fillStyle = d1.iT, cy.fillText(bF.aEM[17], 0, 9 * yE / 9), cy.fillStyle = d1.iH;
			var t5 = g6.h9(bF.bG[8] + bF.bG[9] + bF.bG[10] + bF.bG[11]),
				aEg = cy.measureText(t5).width,
				gs = (cy.setTransform(1, 0, 0, 1, gs + .83 * this.cj + aEg, gt + 2 * this.tg + this.a1I), cy.fillText(g6.h9(bF.bG[8]), 0, 0), cy.fillText(g6.h9(bF.bG[9]), 0, yE / 9), cy.fillText(g6.h9(bF.bG[10]), 0, 2 * yE / 9), cy.fillStyle = d1.iG,
					cy.fillText(t5, 0, 3 * yE / 9), cy.fillStyle = d1.iU, bF.bG[13] - at.a5U(bB)),
				aEg = (cy.fillText(g6.h9(bF.bG[12]), 0, 4 * yE / 9), cy.fillText(g6.h9(gs), 0, 5 * yE / 9), cy.fillText(g6.h9(bF.bG[14]), 0, 6 * yE / 9), cy.fillText(g6.h9(bF.bG[15]), 0, 7 * yE / 9), cy.fillText(g6.h9(bF.bG[16]), 0, 8 * yE / 9), bF
					.bG[12] + gs + bF.bG[14] + bF.bG[15] + bF.bG[16] + bF.bG[17]);
			cy.fillStyle = d1.iT, cy.fillText(g6.h9(aEg), 0, yE), cy.fillStyle = d1.d2
		}, this.sQ = function(aR, cX, ww) {
			var a2, ng, aS;
			return this.aEU < 0 || 1 < this.aEU ? .25 : (a2 = this.aEU * (bF.sO - 1), aS = aR[ng = Math.floor(a2)], aS += (a2 - ng) * (aR[ng < bF.sO - 1 ? ng + 1 : ng] - aS), cy.strokeStyle = d1.iA, .04 < this.aEU && this.aEj(0, this.a2a - cX * Math
					.pow(aS, ww), a2 * this.zg / (bF.sO - 1), this.a2a - cX * Math.pow(aS, ww)), .04 < aS / bF.max[this.cb] && this.aEj(a2 * this.zg / (bF.sO - 1), this.a2a, a2 * this.zg / (bF.sO - 1), this.a2a - cX * Math.pow(aS, ww)), cy
				.fillStyle = d1.iW, cy.beginPath(), cy.arc(a2 * this.zg / (bF.sO - 1), this.a2a - cX * Math.pow(aS, ww), Math.max(2, .014 * this.ee), 0, 2 * Math.PI), cy.fill(), aR = this.aEU * aA.yq, aR = 0 === dj[bB] ? Math.floor(aR * gE.yx) :
				Math.floor(aR * aA.f9()), cy.fillStyle = d1.d2, cy.fillText(1 === ww ? fo.tT(aS / 100, 2) : g6.h9(Math.floor(aS)), -this.mL, this.a2a - cX * Math.pow(aS, ww)), cy.textAlign = d0, cy.fillText(fo.xY(aR), a2 * this.zg / (bF.sO - 1),
					this.a2a + this.aES - (o ? 2 : 0) - this.vG), cy.textAlign = uS, cX * Math.pow(aS, ww) / this.a2a)
		}, this.aEj = function(gx, gy, gz, h1) {
			cy.beginPath(), cy.moveTo(gx, gy), cy.lineTo(gz, h1), cy.stroke()
		}
}

function qG() {
	this.aEk = "https://", this.aEl = this.aEk + "territorial.io/", this.aA4 = this.aEl + "changelog", this.aA5 = this.aEl + "terms", this.tl = this.aEl + "cookie_policy", this.a7i = this.aEl + "privacy_policy", this.aA1 = this.aEl + "tutorial", this
		.aA2 = this.aEl + "players", this.aA3 = this.aEl + "clans", this.zx = this.aEk + "play.google.com/store/apps/details?id=territorial.io", this.zy = this.aEk + "apps.apple.com/app/id1581110913", this.zz = this.aEk +
		"www.youtube.com/watch?v=toZTQ8aRdFc", this.a00 = this.aEk + "discord.gg/pthqvpTXmh", this.a01 = this.aEk + "www.instagram.com/davidtschacher/"
}

function rG() {
	this.g0 = new aEm, this.mB = new aEn, this.c6 = function() {
		this.g0.c6()
	}, this.eu = function() {
		0 !== this.g0.to && this.g0.to--
	}
}

function aEn() {
	this.cx = function() {
		if (0 !== g4.g0.to && (cy.globalAlpha = Math.min(g4.g0.to / 580, 1), cy.drawImage(g4.g0.aEq, 1 + ha.h2(), 1 + ha.cw()), cy.globalAlpha = 1, hW)) {
			var a2, gx = dp / dq,
				gy = dr / dq,
				gz = (h0 + dp) / dq,
				h1 = (cs + dr) / dq,
				bR = g4.g0.aEr * dq,
				aEs = g4.g0.aEs;
			for (a2 = di - 1; 0 <= a2; a2--) ! function(a2, bR, gx, gy, gz, h1, aEs) {
				0 === dj[a2] || 0 === bj[a2] || (gz = h0 * ((ei[a2] + eh[a2] + 1) / 2 - gx) / (gz - gx) - .5 * bR, gx = cs * ((el[a2] + ek[a2] + 1) / 2 - gy) / (h1 - gy) - .5 * bR, h0 < gz) || cs < gx || gz < -bR || gx < -bR || (cy
					.setTransform(dq, 0, 0, dq, gz, gx), cy.drawImage(aEs[cH ? fB.fC[a2] : 1], 0, 0))
			}(a2, bR, gx, gy, gz, h1, aEs);
			cy.setTransform(dq, 0, 0, dq, 0, 0)
		}
	}
}

function aEm() {
	this.aEr = 28, this.to = 0, this.aEq = null;
	var aEu = this.aEs = null;

	function aEx(mJ, aEz) {
		var gs, gt, dK, da, rV = cB.i0.ku(mJ, mJ),
			p9 = cB.i0.getContext(rV, !0),
			a3Q = cB.i0.getImageData(p9, mJ, mJ),
			l6 = a3Q.data,
			cP = (mJ >> 1) - .5,
			aF0 = .5 + cP;
		for (aF0 *= aF0, gt = 0; gt < mJ; gt++)
			for (gs = 0; gs < mJ; gs++) da = (da = gs - cP) * da + (da = gt - cP) * da, l6[dK = 4 * (gt * mJ + gs)] = aEz[0], l6[1 + dK] = aEz[1], l6[2 + dK] = aEz[2], l6[3 + dK] = (aF0 - da) * aEz[3] / aF0;
		return p9.putImageData(a3Q, 0, 0), rV
	}

	function aE9(a2, p9, rV, mJ) {
		var gs;
		0 !== dj[a2] && 0 !== bj[a2] && (gs = ei[a2] + eh[a2] + 1 - mJ - 2 >> 1, mJ = el[a2] + ek[a2] + 1 - mJ - 2 >> 1, p9.drawImage(rV[cH ? fB.fC[a2] : a2 < di ? 1 : 0], gs, mJ))
	}
	this.c6 = function() {
		var s5;
		this.to = 700,
			function(s5) {
				var a2, mJ = s5.aEr;
				if (s5.aEs = [], aEu = [], cH)
					for (a2 = 0; a2 <= pZ; a2++) s5.aEs.push(aEx(mJ, fB.aEy[fB.nN[a2]])), aEu.push(aEx(mJ >> 1, fB.aEy[fB.nN[a2]]));
				else s5.aEs.push(aEx(mJ, fB.aEy[0])), s5.aEs.push(aEx(mJ, fB.aEy[4])), aEu.push(aEx(mJ >> 1, fB.aEy[0]))
			}(this),
			function(s5, aF1) {
				var a2, aEq = s5.aEq,
					p9 = cB.i0.getContext(aEq, !0),
					bI = bN,
					mJ = s5.aEr >> 1;
				p9.imageSmoothingEnabled = !1, p9.setTransform(1, 0, 0, 1, 0, 0), aF1 && p9.clearRect(0, 0, aEq.width, aEq.height);
				for (a2 = di; a2 < bI; a2++) aE9(a2, p9, aEu, mJ)
			}(this, null !== (s5 = this).aEq && s5.aEq.width === an.ao - 2 && s5.aEq.height === an.ap - 2 || (s5.aEq = cB.i0.ku(an.ao - 2, an.ap - 2), !1))
	}, this.pT = function() {
		for (var bI = di, mJ = this.aEr, aEs = this.aEs, p9 = cB.i0.getContext(this.aEq, !0), a2 = 0; a2 < bI; a2++) aE9(a2, p9, aEs, mJ)
	}
}

function rH() {
	this.aF2 = -1, this.c6 = function() {
		this.aF2 = -1
	}, this.eu = function() {
		-1 !== this.aF2 && fr.my.n6(this.aF2)
	}, this.jN = function(player) {
		return !!c9.sN(player) && (1 === fD ? (this.aF2 = player, fc && hW && ju.eu()) : (fm.n4(player, player === bB ? 21 : 22), 8 === fa ? this.aF2 = 1 - player : fc ? (a4T(player), a7X(), hW && ju.eu()) : this.aF3(player)), !0)
	}, this.jq = function(player) {
		1 === gL && 0 !== dj[player] && 2 !== dk[player] && (8 === fa ? this.aF2 = 1 - player : this.aF3(player)), fm.n4(player, 4)
	}, this.aF3 = function(player) {
		hW ? (a4T(player), a7X()) : fx.a79(player)
	}
}

function a7p() {
	this.a29 = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.yD = [d1
		.d2, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", d1.d2, "rgb(170,170,170)"
	], this.aF4 = [d1.d2, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", d1.d2, d1.h4], this.aF5 = [d1.h4, d1.d2, d1.d2, d1.d2, d1.h4, d1.h4, d1.h4, d1.h4, d1.d2];
	var aF6 = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aF7 = (this.a6d = ["rgba(" + aF6[0] + ",", "rgba(" + aF6[1] + ",", "rgba(" + aF6[2] + ",", "rgba(" + aF6[3] + ",", "rgba(" + aF6[4] + ",", "rgba(" + aF6[5] + ",", "rgba(" + aF6[6] + ",", "rgba(" + aF6[7] + ",", "rgba(" + aF6[8] + ",",
			"rgba(" + aF6[9] + ","
		], this.a6e = ["rgb(" + aF6[0] + ")", "rgb(" + aF6[1] + ")", "rgb(" + aF6[2] + ")", "rgb(" + aF6[3] + ")", "rgb(" + aF6[4] + ")", "rgb(" + aF6[5] + ")", "rgb(" + aF6[6] + ")", "rgb(" + aF6[7] + ")", "rgb(" + aF6[8] + ")", "rgb(" + aF6[
			9] + ")"
		], this.cY = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.aEy = [
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
		aF8 = (this.nN = [0, 1, 2, 3, 4, 5, 6, 7, 8], 7),
		ko = "[",
		kp = "]";
	this.fC = new Uint8Array(bN), this.nV = null, this.nW = null, this.c6 = function(mP) {
		this.fC.fill(0), this.aF9(), cH && (fW.fX && fW.fY.a5C ? this.a3q() : 9 === fa ? this.aFA() : this.eu(mP))
	}, this.a3q = function() {
		var a2, bI = ld;
		for (this.nN = [0, 1, 2, 3, 4, 5, 6, 7, 8], a2 = 0; a2 < bI; a2++) this.fC[a2] = fW.fY.a5C[a2]
	}, this.aF9 = function() {
		for (var a2 = this.nN.length - 1; 0 <= a2; a2--) this.nN[a2] = a2;
		this.nV = [], this.nW = []
	}, this.aFA = function() {
		for (var a2 = di + fg.a70 - 1; 0 <= a2; a2--) this.fC[a2] = 1;
		for (a2 = di + fg.a70; a2 < bN; a2++) this.fC[a2] = 2;
		this.nN[1] = 7, this.nN[2] = 8
	}, this.eu = function(mP) {
		var dD = new Uint8Array(di),
			dE = new Uint8Array(di),
			aFB = new Uint16Array(8),
			aFC = new Uint16Array(this.nN.length);
		this.aFD(mP, dD, dE, aFB), this.a3o(aFB), fc || this.aFE(aFC, dD, dE), this.aFF(dD, dE, aFC), fc ? this.aFG() : this.aFH()
	}, this.aFD = function(mP, dD, dE, aFI) {
		for (var cK, ng, aFJ, bI = this.nN.length - 1, aR = new Uint16Array(bI), a2 = di - 1; 0 <= a2; a2--) {
			for (cK = bI; 1 <= cK; cK--) aR[cK - 1] = Math.abs(4 * mP[a2].a2o[0] - aF7[cK][0]) + Math.abs(4 * mP[a2].a2o[1] - aF7[cK][1]) + Math.abs(4 * mP[a2].a2o[2] - aF7[cK][2]);
			for (aFJ = 768, cK = bI - 1; 0 <= cK; cK--) aR[ng = (cK + a2) % bI] < aFJ && (aFJ = aR[ng], dD[a2] = ng);
			for (aFI[dD[a2]] += 4, aFJ = 768, cK = bI - 1; 0 <= cK; cK--) aR[ng = (cK + a2) % bI] < aFJ && ng !== dD[a2] && (aFJ = aR[ng], dE[a2] = ng);
			aFI[dE[a2]]++
		}
	}, this.a3o = function(aFI) {
		for (var cK, rT, bI = this.nN.length - 1, a2 = bI; 0 <= a2; a2--) this.nN[a2] = a2;
		for (a2 = bI - 1; 0 <= a2; a2--) aFI[a2]++;
		for (a2 = 1; a2 <= bI; a2++) {
			for (rT = 0, cK = 1; cK < bI; cK++) aFI[cK] > aFI[rT] && (rT = cK);
			aFI[rT] = 0, this.nN[a2] = rT + 1
		}
	}, this.aFE = function(aFC, dD, dE) {
		var a2, cK, aFK, fA, bS, ng, hj, p4, aFL = this.nN.length - 1,
			aFM = new Uint16Array(aFL),
			aFN = [];
		loop: for (a2 = di - 1; 0 <= a2; a2--)
			if (null !== (aFK = function(a2) {
					var aD4, aCs;
					return (aD4 = td[a2].indexOf(ko)) < 0 || !(1 < (aCs = td[a2].indexOf(kp)) - aD4 && aCs - aD4 <= aF8 + 1) ? null : td[a2].substring(aD4 + 1, aCs).toUpperCase().trim()
				}(a2))) {
				for (cK = this.nV.length - 1; 0 <= cK; cK--)
					if (aFK === this.nV[cK]) {
						this.nW[cK].push(a2);
						continue loop
					} this.nV.push(aFK), aFN.push(!1), this.nW.push([]), this.nW[this.nV.length - 1].push(a2)
			}
		for (cK = this.nV.length - 1; 0 <= cK; cK--) {
			for (bS = -1, fA = this.nV.length - 1; 0 <= fA; fA--) !aFN[fA] && (-1 === bS || this.nW[fA].length > this.nW[bS].length) && (bS = fA);
			for (fA = aFL - 1; 0 <= fA; fA--) aFM[fA] = 1;
			for (fA = this.nW[bS].length - 1; 0 <= fA; fA--) aFM[dD[this.nW[bS][fA]]] += 3, aFM[dE[this.nW[bS][fA]]]++;
			for (a2 = aFL - 1; 0 <= a2; a2--) {
				for (ng = bS % aFL, fA = aFL - 1; 0 <= fA; fA--) aFM[fA] > aFM[ng] && (ng = fA);
				for (hj = -1, fA = pZ; 0 < fA; fA--)
					if (this.nN[fA] === ng + 1) {
						hj = fA;
						break
					} if (aFM[ng] = 0, -1 !== hj) {
					for (p4 = 0, fA = pZ; 0 < fA; fA--) aFC[hj] > aFC[fA] && p4++;
					if (p4 !== pZ - 1) {
						for (fA = this.nW[bS].length - 1; 0 <= fA; fA--) aFC[hj]++, this.fC[this.nW[bS][fA]] = hj;
						break
					}
				}
			}
			aFN[bS] = !0
		}
	}, this.aFF = function(dD, dE, aFC) {
		for (var a2, dZ, bI = this.nN.length - 1, border = b7(di, pZ), aFP = (0 < di % pZ && border++, new Uint8Array(1 + bI)), cK = bI; 1 <= cK; cK--) aFP[this.nN[cK]] = cK;
		for (a2 = 0; a2 < di; a2++) dZ = aFP[dD[a2] + 1], 0 === this.fC[a2] && dZ <= pZ && aFC[dZ] < border && (aFC[dZ]++, this.fC[a2] = dZ);
		for (a2 = 0; a2 < di; a2++) dZ = aFP[dE[a2] + 1], 0 === this.fC[a2] && dZ <= pZ && aFC[dZ] < border && (aFC[dZ]++, this.fC[a2] = dZ);
		for (cK = pZ; 1 <= cK; cK--)
			for (a2 = di - 1; 0 <= a2 && !(aFC[cK] >= border); a2--) 0 === this.fC[a2] && (aFC[cK]++, this.fC[a2] = cK)
	}, this.aFG = function() {
		var a2, eO, aFI = new Uint16Array(pZ);
		for (aFI[pZ - 1] = bN, a2 = pZ - 2; 0 <= a2; a2--) aFI[a2] = fd.fe[a2].tK;
		for (aFI[0]--, eO = 0 === aFI[0] ? 1 : 0, a2 = di; a2 < bN; a2++) this.fC[a2] = eO + 1, aFI[eO]--, aFI[eO] <= 0 && eO++
	}, this.aFH = function() {
		for (var a2 = di; a2 < bN; a2++) this.fC[a2] = 1 + a2 % pZ
	}
}

function bk() {
	for (var gs, gt, a2 = ae - 1; 0 <= a2; a2--) gs = b7(ag[a2], 4) % an.ao, gt = b7(ag[a2], 4 * an.ao), ei[aa] = ei[aa] > gs ? gs : ei[aa], el[aa] = el[aa] > gt ? gt : el[aa], eh[aa] = eh[aa] < gs ? gs : eh[aa], ek[aa] = ek[aa] < gt ? gt : ek[aa]
}

function ay() {
	var bS, bQ, a2, bI = bJ[aa].length;
	loop: for (a2 = bI - 1; 0 <= a2; a2--) {
		for (bS = 3; 0 <= bS; bS--)
			if (bQ = bJ[aa][a2] + aj[bS], bK.bV(bQ) || bK.bT(bQ) && bK.bU(bQ) !== aa) {
				bK.eM(bJ[aa][a2], aa);
				continue loop
			} bJ[aa][a2] = bJ[aa][bI - 1], bJ[aa].pop(), bI--
	}
}

function az() {
	var bS, bQ, aFQ, aFR, bI = bb[aa].length;
	loop: for (var a2 = bI - 1; 0 <= a2; a2--) {
		for (aFQ = aFR = !1, bS = 3; 0 <= bS; bS--) {
			if (bQ = bb[aa][a2] + aj[bS], bK.a40(bQ, aa)) continue loop;
			aFQ = aFQ || bK.rp(bQ), aFR = aFR || bK.lG(bQ)
		}
		aFQ ? bc[aa].push(bb[aa][a2]) : aFR ? bf[aa].push(bb[aa][a2]) : bK.lx(bb[aa][a2], aa), bb[aa][a2] = bb[aa][bI - 1], bb[aa].pop(), bI--
	}
}

function bZ() {
	bj[ad] -= ae
}

function ba(border) {
	for (var bI = border.length, a2 = bI - 1; 0 <= a2; a2--) bK.m5(ad, border[a2]) || (border[a2] = border[bI - 1], border.pop(), bI--)
}

function bd(border) {
	for (var bI = border.length, a2 = bI - 1; 0 <= a2; a2--) !bK.m5(ad, border[a2]) && bK.bL(border[a2]) && (border[a2] = border[bI - 1], border.pop(), bI--)
}

function be(border) {
	for (var bS, bQ, bI = border.length, a2 = bI - 1; 0 <= a2; a2--)
		for (bS = 3; 0 <= bS; bS--)
			if (bQ = border[a2] + aj[bS], bK.a40(bQ, ad)) {
				bb[ad].push(border[a2]), border[a2] = border[bI - 1], border.pop(), bI--;
				break
			}
}

function bg() {
	for (var bS, bQ, a2 = ae - 1; 0 <= a2; a2--)
		for (bS = 3; 0 <= bS; bS--) bQ = ag[a2] + aj[bS], bK.a41(ad, bQ) && bK.a42(bQ) && (bb[ad].push(bQ), bK.bM(bQ, ad))
}

function bh() {
	var gs, gt;
	loop: for (; el[ad] < ek[ad];) {
		for (gs = eh[ad]; gs >= ei[ad]; gs--)
			if (bK.m5(ad, 4 * (el[ad] * an.ao + gs))) break loop;
		el[ad]++
	}
	loop: for (; el[ad] < ek[ad];) {
		for (gs = eh[ad]; gs >= ei[ad]; gs--)
			if (bK.m5(ad, 4 * (ek[ad] * an.ao + gs))) break loop;
		ek[ad]--
	}
	loop: for (; ei[ad] < eh[ad];) {
		for (gt = ek[ad]; gt >= el[ad]; gt--)
			if (bK.m5(ad, 4 * (gt * an.ao + ei[ad]))) break loop;
		ei[ad]++
	}
	loop: for (; ei[ad] < eh[ad];) {
		for (gt = ek[ad]; gt >= el[ad]; gt--)
			if (bK.m5(ad, 4 * (gt * an.ao + eh[ad]))) break loop;
		eh[ad]--
	}
}

function eT(player, eH) {
	return 0 === fB.fC[player] || fB.fC[player] !== fB.fC[eH]
}

function rr(player, eH) {
	for (var ng, aFS = at.au(player), a2 = 0; a2 < aFS; a2++)
		if (0 === at.av(player, a2))
			if ((ng = at.b0(player, a2)) === bN) {
				if (eH === bN) return !1;
				if (rq(eH)) return !0
			} else if (eH === bN) {
		if (rq(ng)) return !0
	} else if (rv(eH, ng)) return !0;
	return !1
}

function rq(player) {
	for (var a2, bR, bI = bb[player].length, bS = 3; 0 <= bS; bS--)
		for (bR = aj[bS], a2 = 0; a2 < bI; a2++)
			if (bK.bV(bb[player][a2] + bR)) return !0;
	return !1
}

function rv(pA, pB) {
	var a2, r, bS, bR, bQ, aBE = bb[pA].length,
		aDB = bb[pB].length;
	for (aDB < aBE && (r = pA, pA = pB, pB = r, r = aBE, aBE = aDB, 0), bS = 3; 0 <= bS; bS--)
		for (bR = aj[bS], a2 = 0; a2 < aBE; a2++)
			if (bQ = bb[pA][a2] + bR, bK.bT(bQ) && bK.bU(bQ) === pB) return !0;
	return !1
}

function aFT() {
	this.eu = function() {
		pz.eu(), q1.eu(), oq.eu(), fq.eu(), gH.a1d(), cu.eu(), aA.cm && (aA.cm = !1, aH.cx())
	}
}

function aFU() {
	this.aB = aA.aB, this.cb = 0, this.aFV = 0, this.a1a = 0, this.aFW = null, this.aFX = 7, this.tp = 0, this.c6 = function() {
		this.a1a = 0, this.aFW = [], this.cb = 0, this.aFV = 0
	}, this.aFY = function(jm) {
		var a2;
		if (hW) this.yr(jm);
		else if (this.aFW.push(jm), 2 === gL) {
			for (a2 = 0; a2 < this.aFW.length; a2++) cR.iu.eu(this.aFW[a2]);
			this.aFW = []
		}
	}, this.yr = function(jm) {
		cR.iu.eu(jm), gB.eu(), fo.yr(this.a1a), this.a1a === pa ? (ju.eu(), this.a1a = 0, this.cb = 0, this.aFV = 0, this.aB = aA.aB) : (this.a1a++, fn.pS(), fn.gK(!0), hx.z8())
	}, this.eu = function() {
		oq.eu(), hW ? (aA.cm = fo.yr(-1) || aA.cm, gM()) : (0 !== this.cb || aA.aB >= this.aB && (this.aB += aA.yq * Math.floor(1 + (aA.aB - this.aB) / aA.yq), 2 === gL ? fl() : this.aFZ(), this.cb++, 27 < aA.aB - this.tp)) && this.aFa(), gC(),
			aA.cm && (aA.cm = !1, m8()), this.tp = aA.aB
	}, this.aFa = function() {
		aA.cm = !0, gJ(), this.cb = 0
	}, this.aFZ = function() {
		var aFb, a2;
		if (this.aFV !== 7 * this.a1a) fu(), hx.z8();
		else {
			for (aFb = !1; this.aFc() && (aFb = !0, fu(), 0 < this.aFW.length);)
				for (a2 = this.aFX - 2; 0 <= a2; a2--) fu();
			aFb ? hx.z8() : (fl(), hx.pV())
		}
	}, this.aFc = function() {
		return 0 < this.aFW.length && (this.a1a++, cR.iu.eu(this.aFW[0]), this.aFW.shift(), !0)
	}
}

function aFd() {
	var aFe, aFf, aFg, a1a, aFh, cb = 0,
		aB = aA.aB;

	function aFk() {
		! function() {
			if (!hW) return;
			if (fc) return;
			return aFh % 7 != 0 ? aFh++ : a1a === pa ? (aFn(), fo.yr(a1a), ju.eu()) : (aFn(), aFh++, a1a++, fn.pS(), fn.gK(!0)), 1
		}() && (aFn(), fu())
	}

	function aFl() {
		cb = 0, (hW ? (aA.cm = fo.yr(a1a - (aFh % 7 == 0 ? 0 : 1) + aFh % 7 / 7) || aA.cm, gM) : c9.cA || !gG.sD ? gM : (aA.cm = !0, gJ))()
	}

	function aFn() {
		var a2, bI, aFo = gB.js.aAf,
			aS = gB.js.aAg,
			aU = gB.js.aAh,
			aW = gB.js.aAi,
			aFp = gB.js.aAj,
			aFq = gB.js.aAk;
		if (aFe >= aFq.length) fm.t3("Replay Error"), fr.my.n6(-1);
		else if (aFq = aFq[aFe], aFp[aFe]) {
			for (bI = aFf + aFq, a2 = aFf; a2 < bI; a2++) cR.iu.jp(aFo[a2], aS[a2], aU[a2], aW[a2]);
			aFf += aFq, aFe++
		} else ++aFg >= aFq && (aFe++, aFg = 0)
	}
	this.aFV = 0, this.c6 = function() {
		aFh = a1a = aFg = aFf = aFe = 0
	}, this.eu = function() {
		var aDY;
		oq.eu(), gG.w5() < 1.7 ? 0 === cb ? aA.aB >= aB && (aDY = aA.yq / gG.w5(), aB += aDY * Math.floor(1 + (aA.aB - aB) / aDY), 2 === gL || c9.cA || !gG.sD ? fl() : (aFk(), hx.z8()), cb++) : aFl() : function() {
			var aDY;
			if (aA.aB >= aB)
				if (2 === gL || c9.cA || !gG.sD) fl(), aB = aA.aB;
				else {
					for (aDY = aA.yq / gG.w5(), 16 < (aA.aB - aB) / aDY && (aB = aA.aB - 16 * aDY); aA.aB >= aB && 2 !== gL;) aB += aDY, aFk();
					hx.z8()
				} aFl()
		}(), gC(), aA.cm && (aA.cm = !1, m8())
	}
}

function aFr() {
	var cb = 0,
		aB = aA.aB;
	this.aFV = 0, this.eu = function() {
		oq.eu(), hW ? gM() : 0 === cb ? aA.aB >= aB && (aB += aA.yq * Math.floor(1 + (aA.aB - aB) / aA.yq), 2 === gL || c9.cA ? fl() : (fu(), hx.z8()), cb++) : ((c9.cA ? gM : (aA.cm = !0, gJ))(), cb = 0), gC(), aA.cm && (aA.cm = !1, m8())
	}
}

function a7o() {
	function aFu() {
		aA.aB = performance.now(), aA.aFs.eu(), window.requestAnimationFrame(aFu)
	}

	function aFv() {
		var r = performance.now();
		aA.aB + 1500 < r && (aA.aB = r, aA.aFs.eu())
	}
	this.aFs = null, this.cm = !1, this.aB = 0, this.aFt = -1, this.yq = 56, this.c6 = function() {
		this.px(), window.requestAnimationFrame(aFu), this.aB = performance.now()
	}, this.pt = function() {
		c8 ? (this.aFs = new aFd, this.aFs.c6()) : fc ? this.aFs = new aFr : (this.aFs = new aFU, this.aFs.c6())
	}, this.px = function() {
		this.aFs = new aFT, this.cm = !0
	}, this.om = function() {
		1 !== gL || !fc || c9.cA || hW || c9.oh(), -1 === this.aFt && (this.aFt = setInterval(aFv, 2e3))
	}, this.on = function() {
		this.cm = !0, -1 !== this.aFt && (clearInterval(this.aFt), this.aFt = -1)
	}, this.eu = function() {
		this.aFs.aFV++
	}, this.f9 = function() {
		return this.aFs.aFV
	}
}

function r3() {
	var hN = 0,
		aFw = !0;

	function aFy(j) {
		8 !== aH.ob() || 2 !== dk[bB] && (0 !== dj[bB] || hW) || fm.tE(j)
	}
	this.eu = function() {
		var r, ts;
		aA.aB > hN && (hN = aA.aB + 2500, r = new Date, ts = r.getUTCSeconds(), aFw ? ts < 45 && (aFw = !1) : ts < 45 || -1 !== aA.aFt || (aFw = !0, (ts = r.getUTCMinutes() + 1) % 15 == 0 && aFy(30 === ts ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function qr() {
	var gx, gy, gz, h1, aFz = 0,
		aG0 = 0;

	function aG2() {
		return Math.pow(Math.pow(gz - gx, 2) + Math.pow(h1 - gy, 2), .5)
	}

	function aG1(ng) {
		gx = kS * ng.touches[0].clientX, gy = kS * ng.touches[0].clientY, gz = kS * ng.touches[1].clientX, h1 = kS * ng.touches[1].clientY
	}
	this.ny = function(ng) {
		return 1 < ng.touches.length ? (aG0 = aA.aB, aFz = 3, aG1(ng), mD.kP(), !0) : (aFz = 0, !1)
	}, this.nz = function(ng) {
		var a8W, dX, dY;
		return 0 !== gL && 1 < ng.touches.length && (aFz = Math.max(aFz - 1, 0), gD.hp() && (a8W = aG2(), aG1(ng), ng = aG2(), dX = Math.floor((gx + gz) / 2), dY = Math.floor((gy + h1) / 2), ha.wf(dX, dY, Math.max(.125, ng) / Math.max(.125,
			a8W)), aA.cm = !0), !0)
	}, this.oU = function() {
		var gs, gt;
		return !!(aFz && (aFz = 0, aA.aB < aG0 + 500)) && (gs = (gx + gz) / 2, gt = (gy + h1) / 2, mD.oL(gs, gt), mD.click(gs, gt, !0) && (aA.cm = !0), !0)
	}
}

function qs() {
	var eL, eQ;

	function aGB(aGT, jm) {
		for (var aR = new Array(aGT), a2 = 0; a2 < aGT; a2++) aR[a2] = aG4(jm, 10);
		return k.kn(aR)
	}

	function aG4(l4, bI) {
		for (var tu = 0, a2 = eQ; a2 < eQ + bI; a2++) tu |= (l4[b7(a2, 8)] >> 7 - a2 % 8 & 1) << eQ + bI - a2 - 1;
		return eQ += bI, tu
	}
	this.aEI = function(a0n, jm) {
		var aG3;
		(eQ = 0) === (eL = jm.length) ? fq.a7T(a0n, 3205): 0 === (aG3 = aG4(jm, 1)) ? function(a0n, jm) {
			var aG7 = aG4(jm, 2);
			0 === aG7 ? (0 === aG4(jm, 1) ? function(a0n, jm) {
				var a2;
				if (0 === a0n && 8 !== aH.ob() && !(eL < 4)) {
					zb.ca(0, aGB(aG4(jm, 5), jm)), zb.ca(1, "[" + aGB(aG4(jm, 3), jm) + "]");
					var aGC = aG4(jm, 12),
						aGD = aG4(jm, 6),
						aR = new Array(aGC);
					for (a2 = 0; a2 < aGC; a2++) aR[a2] = aG4(jm, aGD);
					oP.x6(aR)
				}
			} : function(a0n, jm) {
				var a2;
				if (8 !== aH.ob())
					if (eL < 3) fq.a7T(a0n, 3208);
					else {
						var aGE, mT, a0n = aG4(jm, 1),
							position = aG4(jm, 16),
							tu = aG4(jm, 4),
							aR = [];
						for (a2 = 0; a2 < tu; a2++) mT = aG4(jm, 14), aGE = aG4(jm, 5), aGE = aGB(aGE, jm), aR.push({
							name: aGE,
							mT: mT
						});
						0 === a0n ? cu.zU(0, aR, 10, 1, .36, .55, position) : cu.zU(1, aR, 100, 2, .47, .5, position)
					}
			})(a0n, jm) : 1 === aG7 ? function(a0n, jm) {
				var a2, eO, a2M, nV, aGF, aGG;
				if (a0n !== fq.a1N) fq.close(a0n, 3239);
				else if (6 === aH.ob() && q7.c6(), 7 !== aH.ob()) fq.close(a0n, 3251);
				else {
					var a1v = [0, 0, 0, 0],
						aGH = aG4(jm, 6);
					for (a2 = 0; a2 < 4; a2++) a1v[a2] = aG4(jm, aGH);
					var aGI = aG4(jm, 4),
						aGJ = [];
					for (a2 = 0; a2 < aGI; a2++) {
						for (aGJ.push({
								id: aG4(jm, 5),
								pe: aG4(jm, 4),
								a2H: 1 === aG4(jm, 1),
								lQ: aG4(jm, 6),
								a2F: aG4(jm, 14),
								a2K: aG4(jm, aGH),
								a2L: aG4(jm, 9) + 1,
								a0w: aG4(jm, 10)
							}), a2M = aG4(jm, 3), nV = new Array(a2M), eO = 0; eO < a2M; eO++) aGF = aG4(jm, 9) + 1, aGG = aGB(aG4(jm, 3), jm), nV[eO] = ("" === aGG ? "other: " : "[" + aGG + "]: ") + aGF;
						aGJ[a2].a2M = a2M, aGJ[a2].nV = nV
					}
					q7.zc(a1v, aGJ)
				}
			}(a0n, jm) : 2 !== aG7 && 3 !== aG7 || gH.c6(jm)
		}(a0n, jm) : 1 === aG3 && function(a0n, jm) {
			var p5 = aH.ob();
			8 !== p5 ? 10 === p5 && fq.a7T(a0n, 3243) : a0n !== fq.oC ? fq.a7T(a0n, 3244) : 0 === aG4(jm, 1) ? aA.aFs.aFY(jm) : function(jm) {
				var aGP = aG4(jm, 2);
				(0 === aGP ? function(jm) {
					var tA;
					3 !== eL ? fq.a7T(fq.oC, 3230) : (tA = aG4(jm, 9), jm = aG4(jm, 7), 0 !== dj[tA] && 0 !== dj[bB] && (jm %= a3.a4, fm.jG(tA, bB, jm), fn.kC(tA, 1, jm)))
				} : 1 === aGP ? function(jm) {
					2 !== eL ? fq.a7T(fq.oC, 3235) : (jm = aG4(jm, 9), 0 !== dj[jm] && 0 !== dj[bB] && g7.a76(0, [jm], !0) && fm.jY(jm, 1))
				} : function(jm) {
					var tA;
					3 !== eL ? fq.a7T(fq.oC, 3236) : (tA = aG4(jm, 9), jm = aG4(jm, 9), 0 !== dj[tA] && 0 !== dj[jm] && 0 !== dj[bB] && g7.a76(1, [tA], !0) && (fn.kC(tA, 3, 96), fn.kC(jm, 4, 96), fm.tJ(tA, jm)))
				})(jm)
			}(jm)
		}(a0n, jm)
	}, this.a1e = function(jm) {
		eQ = 1, eL = jm.length, (2 === aG4(jm, 2) ? function(jm) {
			eQ += 20;
			for (var a2p, a2o, name, a1U = aG4(jm, 9), pc = aG4(jm, 14), pe = aG4(jm, 4), a2H = 1 === aG4(jm, 1), a2I = aG4(jm, 6), a2J = aG4(jm, 14), aGN = aG4(jm, 9) + 1, mP = [], a2 = 0; a2 < aGN; a2++) a2p = aG4(jm, 1), a2o = [aG4(jm,
				6), aG4(jm, 6), aG4(jm, 6)], name = aGB(aG4(jm, 5), jm), mP.push({
				name: name,
				a2o: a2o,
				a2p: a2p
			});
			aH.a12(), an.kj(a2I, a2J), 1 === mP.length && fd.a2c(pe);
			pb(pc, a1U, mP, pe, a2H, !1)
		} : function(jm) {
			eQ += 20;
			for (var a2p, a2o, mT, name, a1U = aG4(jm, 1), pc = aG4(jm, 14), pe = aG4(jm, 4), a2H = 1 === aG4(jm, 1), a2I = aG4(jm, 6), a2J = aG4(jm, 14), mP = [], a2 = 0; a2 < 2; a2++) a2p = aG4(jm, 1), a2o = [aG4(jm, 6), aG4(jm, 6),
				aG4(jm, 6)
			], mT = aG4(jm, 14), name = aGB(aG4(jm, 5), jm), mP.push({
				name: name,
				a2o: a2o,
				mT: mT,
				a2p: a2p
			});
			aH.a12(), an.kj(a2I, a2J), pb(pc, a1U, mP, pe, a2H, !1)
		})(jm)
	}, this.a1Y = function(jm) {
		eQ = 1, eL = jm.length;
		var aG7 = aG4(jm, 2),
			aGM = aG4(jm, 10);
		return fq.a1N > fq.a1c && (aGM += fq.a1c), fq.a1N === aGM ? (fq.oC = aGM, !1) : (fq.close(fq.a1N, 3247), fq.oC = aGM, gH.a1T = aG4(jm, 10), gH.a1U = aG4(jm, 2 === aG7 ? 9 : 1), fq.x2(aGM, 5) && iy.a7R(), !0)
	}
}

function rD() {
	this.eL = 0, this.cb = 0, this.jm = null, this.c6 = function(jm) {
		this.cb = 0, this.jm = jm, this.eL = jm.length
	}, this.a13 = function() {
		this.jm = null
	}, this.jo = function(eL) {
		for (var aF = 0, jm = this.jm, hp = this.cb + eL - 1, a2 = this.cb; a2 <= hp; a2++) aF |= (jm[a2 >> 3] >> 7 - (7 & a2) & 1) << hp - a2;
		return this.cb += eL, this.cb > 8 * this.eL && console.log("error unwrapper"), aF
	}, this.aAu = function(eL) {
		for (var aR = new Array(eL), a2 = 0; a2 < eL; a2++) aR[a2] = this.jo(10);
		return k.kn(aR)
	}, this.aGU = function(aB5) {
		return this.eL === ki.aGV(aB5)
	}
}

function a7l() {
	this.aBn = 0, this.aBo = 0, this.aBj = 0, this.aBk = 0, this.aBl = 0, this.aBm = 0, this.z9 = [0, 0, 0, 0], this.ho = function() {
		this.aBn = ha.h2(), this.aBo = ha.cw(), this.aBj = -this.aBn, this.aBk = -this.aBo, this.aBl = h0 / dq, this.aBm = cs / dq, this.z9[0] = Math.floor(this.aBj), this.z9[1] = Math.floor(this.aBk), this.z9[2] = Math.floor(this.z9[0] + this
			.aBl + 1), this.z9[3] = Math.floor(this.z9[1] + this.aBm + 1), hx.z6 = !0
	}
}

function qt() {
	var vC, hN;
	this.c6 = function() {
		vC = 1, hN = 0
	}, this.eu = function() {
		0 < vC && (hN = 0 === hN ? aA.aB + 16 : hN, vC = (vC -= .001 * (aA.aB - hN)) < 0 ? 0 : vC, hN = aA.aB, aA.cm = !0)
	}, this.cx = function() {
		0 < vC && (cy.fillStyle = "rgba(0,0,0," + vC + ")", cy.fillRect(0, 0, h0, cs))
	}
}

function qx() {
	function aGZ(a7x, gs, gt, cj, ee) {
		a7x >= an.a56 || (an.lQ === a7x && (cy.fillStyle = d1.ic, cy.fillRect(gs, gt, cj, ee), cy.fillStyle = d1.d2), cy.strokeRect(gs, gt, cj, ee), cy.fillText(an.fY.lP[a7x].name, Math.floor(gs + .5 * cj), Math.floor(gt + .55 * ee)))
	}
	this.oN = !1, this.a2b = [0, 0, 0, 0], this.show = function() {
		this.oN = !0, this.resize(), aA.cm = !0
	}, this.resize = function() {
		var aBE = b7(an.a56 + an.a56 % 2, 2),
			aBE = q - aBE * cr;
		this.a2b[2] = o ? Math.floor(.75 * ub) : Math.floor(.5 * ub), this.a2b[3] = Math.floor(1.25 * this.a2b[2]), this.a2b[3] > aBE && (this.a2b[3] = aBE, this.a2b[2] = Math.floor(aBE / 1.2)), this.a2b[0] = Math.floor((p - this.a2b[2]) / 2),
			this.a2b[1] = Math.floor((q - this.a2b[3]) / 2)
	}, this.nu = function(gs, gt) {
		return !(gs < this.a2b[0] || gt < this.a2b[1] || gs > this.a2b[0] + this.a2b[2] || gt > this.a2b[1] + this.a2b[3])
	}, this.co = function(gs, gt) {
		var tg, aBE = b7(an.a56 + an.a56 % 2, 2);
		return aA.cm = !0, gs < this.a2b[0] || gt < this.a2b[1] || gs > this.a2b[0] + this.a2b[2] || gt > this.a2b[1] + this.a2b[3] ? !(this.oN = !1) : (tg = Math.floor(.17 * this.a2b[3]), gt < this.a2b[1] + tg ? gs > this.a2b[0] + this.a2b[2] -
			tg && (this.oN = !1) : (gt = (gt = Math.floor(aBE * (gt - this.a2b[1] - tg - .00576 * cZ) / (this.a2b[3] - tg - .01152 * cZ))) < 0 ? 0 : aBE - 1 < gt ? aBE - 1 : gt, gs > this.a2b[0] + this.a2b[2] / 2 && (gt += aBE), gt >= an
				.a56 || an.kj(gt, Math.floor(16384 * Math.random()))), !0)
	}, this.cx = function() {
		var a2, gy, tg = Math.floor(.17 * this.a2b[3]),
			aBE = b7(an.a56 + an.a56 % 2, 2),
			lp = .6 * .01152 * cZ,
			th = (this.a2b[3] - tg - (aBE + 1) * lp) / aBE,
			mL = Math.floor((this.a2b[2] - 3 * lp) / 2);
		for (cy.lineWidth = p8, cy.textAlign = d0, cy.textBaseline = cz, cy.fillStyle = d1.i6, cy.fillRect(this.a2b[0], this.a2b[1] + tg, this.a2b[2], this.a2b[3] - tg), cy.fillStyle = d1.ic, cy.fillRect(this.a2b[0], this.a2b[1], this.a2b[2],
			tg), cy.strokeStyle = d1.d2, cy.strokeRect(this.a2b[0], this.a2b[1], this.a2b[2], this.a2b[3]), cy.fillStyle = d1.d2, cy.fillRect(this.a2b[0], this.a2b[1] + tg, this.a2b[2], 2), cy.font = cc + Math.floor(.48 * tg) + cd, cy.fillText(
				"Maps", Math.floor(this.a2b[0] + this.a2b[2] / 2), Math.floor(this.a2b[1] + .55 * tg)), cy.font = cc + Math.floor(.48 * th) + cd, a2 = aBE - 1; 0 <= a2; a2--) gy = Math.floor(this.a2b[1] + tg + lp + a2 * (th + lp)), aGZ(a2, this
			.a2b[0] + lp, gy, mL, th), aGZ(a2 + aBE, this.a2b[0] + mL + 2 * lp, gy, mL, th);
		c9.sQ(Math.floor(this.a2b[0] + this.a2b[2] - .7 * tg), Math.floor(this.a2b[1] + .3 * tg), Math.floor(.4 * tg)), cy.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function qu() {
	var eQ;

	function aGc(jm) {
		var i = h(),
			aGe = Math.floor(i / 16777216);
		aGa(jm, 24, aGe), aGa(jm, 24, i - 16777216 * aGe)
	}

	function aGd(jm) {
		aGa(jm, 14, a7b), aGa(jm, 4, b ? 2 : 12 <= d ? 1 : 0 < d ? 3 : 0), aGa(jm, 1, nl ? 1 : 0), aGa(jm, 1, nm ? 1 : 0), aGa(jm, 5, (new Date).getHours() % 24)
	}

	function aGa(l4, bI, tu) {
		for (var cK, a2 = eQ; a2 < eQ + bI; a2++) l4[cK = b7(a2, 8)] = (tu >> bI - (a2 - eQ + 1) & 1) << 7 - a2 % 8 | l4[cK];
		eQ += bI
	}
	this.x5 = function() {
		var jm = new Uint8Array(3);
		aGa(jm, 1, eQ = 0), aGa(jm, 3, 0), aGa(jm, 14, a7b), fq.send(0, jm)
	}, this.a0l = function(a0n) {
		var aR = k.mq(py.a2n()),
			tK = aR.length,
			jm = new Uint8Array(b7(aB5 = 135 + 10 * tK, 8) + (0 < aB5 % 8 ? 1 : 0)),
			aB5 = (aGa(jm, 1, eQ = 0), aGa(jm, 3, 1), aGa(jm, 10, a7d), aGa(jm, 20, qA.id), aGa(jm, 10, Math.min(qA.tr, 1023)), ct.sS[2].n8.a0R());
		aGa(jm, 6, aB5[0]), aGa(jm, 6, aB5[1]), aGa(jm, 6, aB5[2]), aGc(jm), aGd(jm);
		for (var a2 = 0; a2 < tK; a2++) aGa(jm, 10, aR[a2]);
		fq.a1N = a0n, fq.send(a0n, jm)
	}, this.zS = function(a0n, id) {
		var jm = new Uint8Array(5);
		aGa(jm, 1, eQ = 0), aGa(jm, 3, 7), aGa(jm, 3, 0), aGa(jm, 14, a7b), aGa(jm, 1, id), aGa(jm, 16, Math.abs(4096 + cu.position[id] + cu.zR[id]) % 65536), fq.send(a0n, jm)
	}, this.a3E = function(a0n) {
		var a2, ng;
		if (!(py.a33 + 7e3 > aA.aB)) {
			py.a33 = aA.aB;
			var jm = new Uint8Array(17);
			for (aGa(jm, 1, eQ = 0), aGa(jm, 3, 7), aGa(jm, 3, 2), aGc(jm), ng = sq(py.a32.length - 20, 0), a2 = py.a32.length - 1; ng <= a2; a2--) aGa(jm, 4, Math.abs(py.a32.charCodeAt(a2) - 48) % 10);
			fq.send(a0n, jm)
		}
	}, this.a7J = function(a0n, a7I) {
		var jm = new Uint8Array(1);
		aGa(jm, 1, eQ = 0), aGa(jm, 3, 5), aGa(jm, 1, a7I ? 1 : 0), fq.send(a0n, jm)
	}, this.a2R = function(a2G) {
		var jm = new Uint8Array(1);
		aGa(jm, 1, eQ = 0), aGa(jm, 3, 2), aGa(jm, 4, a2G), fq.send(fq.a1N, jm)
	}, this.a7R = function() {
		var jm = new Uint8Array(7);
		aGa(jm, 1, eQ = 0), aGa(jm, 3, 6), aGa(jm, 8, fq.tH()), aGa(jm, 10, gH.a1T), aGa(jm, 9, gH.a1U), aGa(jm, 10, a7d), aGa(jm, 14, a7b), fq.send(fq.oC, jm)
	}, this.iz = function(dK) {
		ki.kj(27), ki.kk(1, 1), ki.kk(4, 0), ki.kk(22, dK), fq.send(fq.oC, ki.jm)
	}, this.j1 = function(dn, eH) {
		ki.kj(25), ki.kk(1, 1), ki.kk(4, 1), ki.kk(10, dn), ki.kk(10, eH), fq.send(fq.oC, ki.jm)
	}, this.j5 = function(dn, j3) {
		ki.kj(24), ki.kk(1, 1), ki.kk(4, 2), ki.kk(10, dn), ki.kk(9, j3), fq.send(fq.oC, ki.jm)
	}, this.j9 = function(dn, dK) {
		ki.kj(37), ki.kk(1, 1), ki.kk(4, 3), ki.kk(10, dn), ki.kk(22, dK), fq.send(fq.oC, ki.jm)
	}, this.jD = function(jB, dK) {
		ki.kj(37), ki.kk(1, 1), ki.kk(4, 4), ki.kk(10, jB), ki.kk(22, dK), fq.send(fq.oC, ki.jm)
	}, this.jF = function(eH) {
		ki.kj(15), ki.kk(1, 1), ki.kk(4, 5), ki.kk(10, eH), fq.send(fq.oC, ki.jm)
	}, this.jJ = function(cb) {
		ki.kj(12), ki.kk(1, 1), ki.kk(4, 6), ki.kk(7, cb), fq.send(fq.oC, ki.jm)
	}, this.jM = function(jL) {
		ki.kj(6), ki.kk(1, 1), ki.kk(4, 7), ki.kk(1, jL), fq.send(fq.oC, ki.jm)
	}, this.jO = function() {
		ki.kj(5), ki.kk(1, 1), ki.kk(4, 8), fq.send(fq.oC, ki.jm)
	}, this.jg = function(a4K, jf) {
		ki.kj(29), ki.kk(1, 1), ki.kk(4, 10), ki.kk(12, a4K), ki.kk(2, 0), ki.kk(10, jf), fq.send(fq.oC, ki.jm)
	}, this.jj = function(a4K, lE, lF, aGf) {
		ki.kj(46), ki.kk(1, 1), ki.kk(4, 10), ki.kk(12, a4K), ki.kk(2, 1), ki.kk(9, lE), ki.kk(9, lF), ki.kk(9, aGf), fq.send(fq.oC, ki.jm)
	}, this.jl = function(a4K) {
		var a2, nL = fr.fs.nL;
		for (ki.kj(47 + 33 * nL.length), ki.kk(1, 1), ki.kk(4, 10), ki.kk(12, a4K), ki.kk(2, 2), ki.kk(24, fr.fs.nK), ki.kk(4, nL.length), a2 = 0; a2 < nL.length; a2++) ki.kk(9, nL[a2].player), ki.kk(24, nL[a2].nX);
		fq.send(fq.oC, ki.jm)
	}, this.jW = function(aGg, aGh) {
		ki.kj(21), ki.kk(1, 1), ki.kk(4, 15), ki.kk(9, aGh), ki.kk(7, aGg), fq.send(fq.oC, ki.jm)
	}, this.jZ = function(tB) {
		ki.kj(14), ki.kk(1, 1), ki.kk(4, 14), ki.kk(9, tB), fq.send(fq.oC, ki.jm)
	}, this.jd = function(aGi, target) {
		var a2, bI = aGi.length;
		for (ki.kj(14 + 9 * bI), ki.kk(1, 1), ki.kk(4, 13), ki.kk(9, target), a2 = 0; a2 < bI; a2++) ki.kk(9, aGi[a2]);
		fq.send(fq.oC, ki.jm)
	}, this.a2k = function(a0n) {
		var jm = new Uint8Array(4);
		aGa(jm, 1, eQ = 0), aGa(jm, 3, 3), aGd(jm), fq.send(a0n, jm)
	}
}

function nk() {
	this.eL = 0, this.cb = 0, this.jm = null, this.c6 = function(jm) {
		this.cb = 0, this.jm = jm, this.eL = jm.length
	}, this.kj = function(aB5) {
		return this.c6(new Uint8Array(this.aGV(aB5))), this.jm
	}, this.a13 = function() {
		this.jm = null
	}, this.kk = function(eL, tu) {
		for (var jm = this.jm, hp = this.cb + eL - 1, a2 = this.cb; a2 <= hp; a2++) jm[a2 >> 3] |= (tu >> hp - a2 & 1) << 7 - (7 & a2);
		this.cb += eL, this.cb > 8 * this.eL && console.log("error wrapper")
	}, this.aGj = function(eL) {
		for (var jm = this.jm, hp = this.cb + eL, a2 = this.cb; a2 < hp; a2++) jm[a2 >> 3] &= 255 ^ 128 >>> (7 & a2)
	}, this.aGV = function(aB5) {
		return aB5 + 7 >> 3
	}, this.aGk = function(aR, eQ, hp, aGl) {
		for (var a2 = eQ; a2 < hp; a2++) this.kk(aGl, aR[a2])
	}
}
setTimeout(aG, 1e4);