function a() {
	this.b = 512, this.c = 15e8, this.d = 1e9, this.e = 512, this.f = 2, this.g = 0, this.h = 0, this.i = 0, this.j = 0, this.k = 0, this.l = 512, this.m = 150, this.n = !0, this.o = !1, this.p = 0, this.q = 0, this.r = !1, this.s = !1, this.t = !1,
		this.u = !1, this.v = 0, this.w = 0, this.x = !1, this.y = null, this.z = null, this.a0 = 30, this.a1 = 0, this.a2 = 0, this.a3 = 0, this.a4 = function(a5, a6, a7, a8, a9, aA) {
			this.r = !1, this.o = aA, this.w = a8, this.x = a9, this.u = this.w < 7 || 9 === this.w, this.i = this.h = a7.length, this.n = 1 === this.i, this.w = 10 === this.w && this.n ? 7 : this.w, this.w = 8 === this.w && 2 !== this.h ? 7 : this
				.w, this.v = 9 === this.w ? 2 : this.w + 2, this.a0 = this.h <= 2 ? 30 : this.h <= 50 ? 40 : 50, aB.aC && !aB.aD.aE ? this.t = this.s = !1 : this.t = this.s = this.u || this.h < 100, this.y = this.s ? new aF : null, 1 === aG ? this
				.l = this.h : this.n ? this.l = aH.aI() : this.l = this.b, this.j = this.l - this.h, this.k = 0, this.g = a6, this.a1 = 0, this.a2 = 0, this.a3 = 0, aJ.aK(a5), aL.aM(), aN.aM(a7), aO.aP.aQ = [], aR.aM(a7), this.p = 1, aS.aM(), aT(),
				aU.aV(), aW.aM(), aX.aM(), aY(), aZ.aM(a7), aa.aM(), ab.aM(), ac.aM(), ad.aM(), ae.af(), ag.aM(), ah(), ai.aM(a5, a7, a8, a9), aj.aM(), ak.aM(), al.aM(), am.aM(), an.putImageData(ao, 0, 0), ap.aM(), aq.aM(), ar.aM(), at.aM(), au.aM(),
				av.aM(), aw.aM(), ax.aM(), ay.aM(), az.aM(), b0.aM(), b1.aM(), b2.aM(), b3.aM(), b4.aM(), b5.aM(), b6(), b7.aM(), b8.aM(), b9.aM(), bA.aM(), bB.aM(), bC.aM(), 8 === this.w ? (this.z = new bD, this.z.aM(a7)) : this.z = null, bE.bF(),
				bL.bM(), 0 === aN.bN[bO.g] && b2.show(!1, !0), b8.bP(!0), bH.aM(), bE.bI = !0, this.o || this.n && this.s || bJ.bK.setState(1)
		}, this.bQ = function(bR) {
			bS.bT.bU(), this.p = 0, bE.bV(), bJ.bK.setState(0), bR || bW.bX.show(), bY.setState(0), bZ.ba(5, 5)
		}, this.bb = function() {
			return this.o ? ax.bc || !at.bd : this.n && (ax.bc || this.s)
		}, this.be = function() {
			return 1 === this.p && !this.s
		}
}

function bf() {
	this.bg = 0, this.bh = 0, this.bi = 0, this.bj = 0, this.bk = 0, this.bl = 0, this.bm = 0, this.bn = 0, this.bo = 0, this.bp = 0, this.bq = 0, this.br = 0, this.bs = 0, this.bt = 0, this.bu = ["Territory", "Balance", "Interest", "Numbers"], this
		.bv = !1, this.bw = -1, this.bx = !1, this.by = [0, 0], this.aM = function() {
			this.bv = !1, this.bw = -1, this.bx = !1, this.resize()
		}, this.resize = function() {
			this.bg = c0.bg < 1.369 * c0.bh ? c0.bg : 1.369 * c0.bh;
			var c1 = bJ.bK.c2() && c0.bg < c0.bh ? 1 : bJ.bK.c2() ? .8 : c0.bg < c0.bh ? .65 : .59;
			this.bg = Math.floor(c1 * this.bg), this.bg -= bJ.bK.c2() && c0.bg < c0.bh ? 2 * c3.gap + 2 : 0, this.bh = Math.floor(this.bg / 1.369), this.bs = Math.floor(this.bh / 150), this.bs = Math.max(this.bs, 1.5), this.bi = Math.floor(1 + .02 *
					this.bg), this.bj = Math.floor(1 + .04 * this.bg), this.bm = this.bj, this.bn = Math.floor(1 + .075 * this.bg), this.bp = Math.floor(1 + .1125 * this.bg), this.bq = Math.floor(this.bg * (bJ.bK.c2() ? .03 : .029)), this.bq = Math
				.max(this.bq, 4), this.br = Math.floor(.035 * this.bg), this.br = Math.max(this.br, 4), this.bo = this.bh - 2 * this.bm - this.bn - this.bp, this.bv && this.c4()
		}, this.c5 = function(c6, c7) {
			var c9, c8;
			return !!this.bv && (c8 = c6, c9 = c7, c6 -= cA(c0.bg - this.bg, 2), c7 -= cA(c0.bh - this.bh, 2), c6 < 0 || c7 < 0 || c6 >= this.bg || c7 >= this.bh || c6 >= this.bg - this.bp && c7 < this.bp ? 1 < ax.c5(c8, c9) || this.cB() : c7 < this
				.bp || (c7 < this.bh - this.bn ? (this.bx = !0, this.bw = (c6 - 2 * this.bi - this.bk) / this.bl, 3 !== this.bt && (bE.bI = !0)) : (c8 = (c8 = Math.floor(c6 / (this.bg / this.bu.length))) < 0 ? 0 : c8 >= this.bu.length ? this.bu
					.length - 1 : c8) !== this.bt && (this.bt = c8, this.c4(), bE.bI = !0)), !0)
		}, this.cD = function() {
			var cE = Math.floor((this.by[0] + cF) / cG),
				cH = Math.floor((this.by[1] + cI) / cG);
			cE < 1 || cH < 1 || cE >= cJ.cK - 1 || cH >= cJ.cL - 1 || console.log(cE + " " + cH)
		}, this.cM = function(c6, c7) {
			return this.by[0] = c6, this.by[1] = c7, !(!this.bv || !this.bx || (c6 -= cA(c0.bg - this.bg, 2), c7 = this.bw, this.bw = (c6 - 2 * this.bi - this.bk) / this.bl, (0 <= this.bw && this.bw <= 1 || 0 <= c7 && c7 <= 1) && (bE.bI = !0), 0))
		}, this.cO = function() {
			this.bx && (this.bx = !1)
		}, this.cP = function() {
			this.bv ? this.cB() : this.show()
		}, this.show = function() {
			aS.cQ < 2 || (this.bv = !0, this.c4())
		}, this.cB = function() {
			this.bv = !1, this.bw = -1, bE.bI = !0
		}, this.c4 = function() {
			this.bt < 2 ? this.bk = ay.measureText(cR.cS.cT(aS.max[this.bt]), cR.cU.cV(0, this.bq)) : 2 === this.bt && (this.bk = ay.measureText(cR.cS.cW(6, 2), cR.cU.cV(0, this.bq))), this.bl = this.bg - 2 * this.bi - this.bk - this.bj
		}, this.cX = function() {
			this.bv && this.c4()
		}, this.cY = function() {
			this.bv && this.cZ()
		}, this.cZ = function() {
			var ca = cA(c0.bg - this.bg, 2),
				cb = cA(c0.bh - this.bh, 2);
			cc.setTransform(1, 0, 0, 1, ca, cb), cc.fillStyle = cd.ce, cc.fillRect(0, this.bp, this.bg, this.bh - this.bp), this.cf(), this.cg(), cc.strokeRect(0, 0, this.bg, this.bh), cR.cU.textAlign(cc, 2), cc.font = cR.cU.cV(0, this.bq), 0 ===
				this.bt ? this.ch(aS.ci, ca, cb) : 1 === this.bt ? this.ch(aS.cj, ca, cb) : 2 === this.bt ? this.ck(ca, cb) : 3 === this.bt && (this.cl(ca, cb), this.cm(ca, cb)), ax.cn(Math.floor(ca + this.bg - .725 * this.bp), Math.floor(cb + .275 *
					this.bp), Math.floor(.45 * this.bp)), cc.setTransform(1, 0, 0, 1, 0, 0)
		}, this.cf = function() {
			var cC, cN;
			for (cc.lineWidth = this.bs, cR.cU.textBaseline(cc, 1), cR.cU.textAlign(cc, 1), cc.strokeStyle = cd.co, cc.font = cR.cU.cV(1, this.br), cN = this.bg / this.bu.length, cc.fillStyle = cd.cp, cc.fillRect(this.bt * cN, this.bh - this.bn, cN,
					this.bn), cc.fillStyle = cd.co, cc.fillRect(0, this.bh - this.bn - .5 * this.bs, this.bg, this.bs), cC = 1; cC <= 3; cC++) cc.fillRect(cC * cN, this.bh - this.bn, this.bs, this.bn);
			for (cC = this.bu.length - 1; 0 <= cC; cC--) cc.fillText(this.bu[cC], (cC + .5) * cN, this.bh - .46 * this.bn)
		}, this.cg = function() {
			cc.fillStyle = cd.cq, cc.fillRect(0, 0, this.bg, this.bp), cc.fillStyle = cd.co, cc.fillRect(0, this.bp - .5 * this.bs, this.bg, this.bs), cc.font = cR.cU.cV(1, .39 * this.bp), cc.fillText("Statistics", Math.floor(this.bg / 2), Math
				.floor(.55 * this.bp))
		}, this.ch = function(cr, ca, cb) {
			var cs = aS.max[this.bt],
				ct = (cc.setTransform(1, 0, 0, 1, ca + 2 * this.bi + this.bk, cb + this.bm + this.bp), cc.lineWidth = 2, this.bo / Math.sqrt(cs));
			cc.beginPath(), cc.moveTo(this.bl, this.bo - ct * Math.sqrt(cr[aS.cQ - 1]));
			for (var cC = aS.cQ - 2; 0 <= cC; cC--) cc.lineTo(cC * this.bl / (aS.cQ - 1), this.bo - ct * Math.sqrt(cr[cC]));
			cc.stroke();
			ca = this.cn(cr, ct, .5);
			ca < .95 && cc.fillText(cR.cS.cT(cs), -this.bi, 0), .05 < Math.abs(ca - .5) && cc.fillText(cR.cS.cT(Math.floor(cs / 4)), -this.bi, Math.floor(this.bo / 2)), .05 < ca && cc.fillText("0", -this.bi, this.bo)
		}, this.ck = function(ca, cb) {
			cc.setTransform(1, 0, 0, 1, ca + 2 * this.bi + this.bk, cb + this.bm + this.bp), cc.lineWidth = 2;
			var ct = this.bo / Math.max(aS.max[this.bt], 1);
			cc.beginPath(), cc.moveTo(this.bl, this.bo - ct * aS.cv[aS.cQ - 1]);
			for (var cC = aS.cQ - 2; 0 <= cC; cC--) cc.lineTo(cC * this.bl / (aS.cQ - 1), this.bo - ct * aS.cv[cC]);
			cc.stroke();
			ca = this.cn(aS.cv, ct, 1), cb = aS.max[this.bt] / 100;
			ca < .95 && cc.fillText(cR.cS.cW(cb, 2), -this.bi, 0), .05 < Math.abs(ca - .5) && cc.fillText(cR.cS.cW(cb / 2, 2), -this.bi, Math.floor(this.bo / 2)), .05 < ca && cc.fillText(cR.cS.cW(0, 2), -this.bi, this.bo)
		}, this.cl = function(ca, cb) {
			cc.setTransform(1, 0, 0, 1, ca + .34 * this.bg, cb + 2 * this.bm + this.bp), cR.cU.textAlign(cc, 2);
			for (var cw = this.bh - 4 * this.bm - this.bn - this.bp, cC = 7; 0 <= cC; cC--) cc.fillText(aS.cy[cC], 0, cC * cw / 7);
			cc.setTransform(1, 0, 0, 1, ca + .39 * this.bg, cb + 2 * this.bm + this.bp), cR.cU.textAlign(cc, 0);
			ca = aS.cz[1];
			for (cc.fillText(cR.cS.cW(aS.cz[0] / (10 * (ca < 1 ? 1 : ca)), 1), 0, 0), cC = 6; 1 <= cC; cC--) cc.fillText(aS.cz[cC].toString(), 0, cC * cw / 7);
			cc.fillText(cR.cS.cW(100 * (1 - aN.d0[bO.g] / aS.cz[7]), 0), 0, cw)
		}, this.cm = function(ca, cb) {
			cc.setTransform(1, 0, 0, 1, ca + .79 * this.bg, cb + 2 * this.bm + this.bp), cR.cU.textAlign(cc, 2);
			var cC, cw = this.bh - 4 * this.bm - this.bn - this.bp;
			for (cc.fillStyle = cd.d1, cC = 2; 0 <= cC; cC--) cc.fillText(aS.cy[cC + 8], 0, cC * cw / 9);
			for (cc.fillStyle = cd.d2, cc.fillText(aS.cy[11], 0, 3 * cw / 9), cc.fillStyle = cd.d3, cC = 8; 4 <= cC; cC--) cc.fillText(aS.cy[cC + 8], 0, cC * cw / 9);
			cc.fillStyle = cd.d4, cc.fillText(aS.cy[17], 0, 9 * cw / 9), cc.fillStyle = cd.d1;
			var d5 = cR.cS.cT(aS.cz[8] + aS.cz[9] + aS.cz[10] + aS.cz[11]),
				d6 = cc.measureText(d5).width,
				ca = (cc.setTransform(1, 0, 0, 1, ca + .83 * this.bg + d6, cb + 2 * this.bm + this.bp), cc.fillText(cR.cS.cT(aS.cz[8]), 0, 0), cc.fillText(cR.cS.cT(aS.cz[9]), 0, cw / 9), cc.fillText(cR.cS.cT(aS.cz[10]), 0, 2 * cw / 9), cc.fillStyle =
					cd.d2, cc.fillText(d5, 0, 3 * cw / 9), cc.fillStyle = cd.d3, aS.cz[13] - b7.d8(bO.g)),
				d6 = (cc.fillText(cR.cS.cT(aS.cz[12]), 0, 4 * cw / 9), cc.fillText(cR.cS.cT(ca), 0, 5 * cw / 9), cc.fillText(cR.cS.cT(aS.cz[14]), 0, 6 * cw / 9), cc.fillText(cR.cS.cT(aS.cz[15]), 0, 7 * cw / 9), cc.fillText(cR.cS.cT(aS.cz[16]), 0, 8 *
					cw / 9), aS.cz[12] + ca + aS.cz[14] + aS.cz[15] + aS.cz[16] + aS.cz[17]);
			cc.fillStyle = cd.d4, cc.fillText(cR.cS.cT(d6), 0, cw), cc.fillStyle = cd.co
		}, this.cn = function(cr, ct, dA) {
			var cC, dB, dC;
			return this.bw < 0 || 1 < this.bw ? .25 : (cC = this.bw * (aS.cQ - 1), dC = cr[dB = Math.floor(cC)], dC += (cC - dB) * (cr[dB < aS.cQ - 1 ? dB + 1 : dB] - dC), cc.strokeStyle = cd.dE, .04 < this.bw && this.dF(0, this.bo - ct * Math.pow(
					dC, dA), cC * this.bl / (aS.cQ - 1), this.bo - ct * Math.pow(dC, dA)), .04 < dC / aS.max[this.bt] && this.dF(cC * this.bl / (aS.cQ - 1), this.bo, cC * this.bl / (aS.cQ - 1), this.bo - ct * Math.pow(dC, dA)), cc.fillStyle = cd
				.dG, cc.beginPath(), cc.arc(cC * this.bl / (aS.cQ - 1), this.bo - ct * Math.pow(dC, dA), Math.max(2, .014 * this.bh), 0, 2 * Math.PI), cc.fill(), cr = this.bw * bE.dI, cr = 0 === aN.bN[bO.g] ? Math.floor(cr * b2.dJ) : Math.floor(
					cr * bE.dK()), cc.fillStyle = cd.co, cc.fillText(1 === dA ? cR.cS.cW(dC / 100, 2) : cR.cS.cT(Math.floor(dC)), -this.bi, this.bo - ct * Math.pow(dC, dA)), cR.cU.textAlign(cc, 1), cc.fillText(aw.dL(cr), cC * this.bl / (aS.cQ -
					1), this.bo + this.bq - (bJ.bK.c2() ? 2 : 0) - this.bs), cR.cU.textAlign(cc, 2), ct * Math.pow(dC, dA) / this.bo)
		}, this.dF = function(dM, dN, dO, dP) {
			cc.beginPath(), cc.moveTo(dM, dN), cc.lineTo(dO, dP), cc.stroke()
		}
}

function dQ(player, dR) {
	return dS.dT[1] = aN.dU[player].length, dS.dT[0] === bO.b ? dV(player) : dW(player, dS.dT[0]), (0 !== dS.dT[1] || 0 !== aN.dU[player].length) && !(!dR && dS.dT[1] === aN.dU[player].length || (dS.dT[0] === bO.b ? aN.dX[player]++ : aN.dY[player]++,
		0))
}

function dZ(player) {
	bO.u && (da[player] = 1), db(dS.dT[1], player), b7.dc(player, dS.dd[0], dS.dT[0]), b4.de(player, !1)
}

function df(player, dg, cx, dh) {
	var di = cA(3 * aN.dj[player], 256);
	dh -= dh >= cA(aN.dj[player], 2) ? di : 0, db(cx, player), b7.dc(player, dh, dg), aN.dj[player] -= dh + di, b4.de(player, !1)
}

function dW(player, dg) {
	for (var dk, cC = aN.dl[player].length - 1; 0 <= cC; cC--)
		if (aZ.dm(aN.dl[player][cC]))
			for (dk = 3; 0 <= dk; dk--)
				if (aZ.dn(aN.dl[player][cC] + dp[dk]) && aZ.dq(aN.dl[player][cC] + dp[dk]) === dg) {
					aN.dU[player].push(aN.dl[player][cC]);
					break
				}
}

function db(size, player) {
	for (var cC = aN.dU[player].length - 1; size <= cC; cC--) aZ.dr(aN.dU[player][cC], player)
}

function dV(player) {
	for (var cC = aN.dl[player].length - 1; 0 <= cC; cC--)
		if (aZ.dm(aN.dl[player][cC]))
			for (var dk = 3; 0 <= dk; dk--)
				if (aZ.ds(aN.dl[player][cC] + dp[dk])) {
					aN.dU[player].push(aN.dl[player][cC]);
					break
				}
}

function dt(player, du) {
	var cC, dv, dk, dw, cx = aN.dl[player].length,
		dx = 256 <= cx ? 12 : 32 <= cx ? 6 : 1,
		dy = cx - 1 - aJ.dz(dx);
	e0 = 0;
	loop: for (cC = dy; 0 <= cC; cC -= dx)
		for (dk = 3; 0 <= dk; dk--)
			if ((dw = aZ.ds(aN.dl[player][cC] + dp[dk]) ? bO.b : aZ.dq(aN.dl[player][cC] + dp[dk])) === bO.b || aZ.dn(aN.dl[player][cC] + dp[dk]) && dw !== player && (du || e1(player, dw))) {
				for (dv = e0 - 1; 0 <= dv; dv--)
					if (e2[dv] === dw) continue loop;
				if (e2[e0] = dw, ++e0 >= e3) return !0
			}
	return 0 < e0
}

function e4(player, du) {
	var cC, dk, dw;
	for (e0 = 0, cC = aN.dl[player].length - 1; 0 <= cC; cC--)
		for (dk = 3; 0 <= dk; dk--)
			if ((dw = aZ.ds(aN.dl[player][cC] + dp[dk]) ? bO.b : aZ.dq(aN.dl[player][cC] + dp[dk])) === bO.b || aZ.dn(aN.dl[player][cC] + dp[dk]) && dw !== player && (du || e1(player, dw))) return e2[e0++] = dw, !0;
	return !1
}

function e5() {
	for (var e6, cC = e0 - 1; 0 <= cC; cC--)
		if (e2[cC] === bO.b) {
			for (e0--, e6 = cC; e6 < e0; e6++) e2[e6] = e2[e6 + 1];
			return !0
		} return !1
}

function e7(player) {
	for (var e6, cC = e0 - 1; 0 <= cC; cC--)
		if (b7.e8(player, e2[cC]))
			for (e0--, e6 = cC; e6 < e0; e6++) e2[e6] = e2[e6 + 1];
	return 0 === e0
}

function e9() {
	for (var cC = e0 - 1; 0 <= cC; cC--)
		if (e2[cC] >= bO.h) return !0;
	return !1
}

function eA() {
	for (var cC = e0 - 1; 0 <= cC; cC--) e2[cC] < bO.h && (e2[cC] = e2[--e0]);
	return 0 < e0
}

function eB(player) {
	for (var e6, eC = e2[0], eD = aN.dj[eC] + b7.eE(eC, player), cC = e0 - 1; 1 <= cC; cC--)(e6 = aN.dj[e2[cC]] + b7.eE(e2[cC], player)) < eD && (eC = e2[cC], eD = e6);
	return eC
}

function eF(player) {
	var bh, eG = e2[0];
	if (1 !== e0)
		for (var eH = cA(aN.eI[player] + aN.eJ[player], 2), eK = cA(aN.eL[player] + aN.eM[player], 2), eN = eO(eH - cA(aN.eI[eG] + aN.eJ[eG], 2)) + eO(eK - cA(aN.eL[eG] + aN.eM[eG], 2)), cC = e0 - 1; 1 <= cC; cC--)(bh = eO(eH - cA(aN.eI[e2[cC]] + aN
			.eJ[e2[cC]], 2)) + eO(eK - cA(aN.eL[e2[cC]] + aN.eM[e2[cC]], 2))) < eN && (eN = bh, eG = e2[cC]);
	return eG
}

function eP() {
	return e2[aJ.dz(e0)]
}

function eQ() {
	this.eR = function(eS, eT, eU) {
		eV.af(75), eV.eW(1, 0), eV.eW(6, 21), eV.eW(6, eS), eV.eW(1, +(eT < 0)), eV.eW(1, +(eU < 0)), eV.eW(30, Math.abs(eT)), eV.eW(30, Math.abs(eU)), bS.bT.send(0, eV.eX)
	}, this.eY = function(eS, eZ, ea) {
		eV.af(18 + 16 * eZ.length + 30), eV.eW(1, 0), eV.eW(6, 22), eV.eW(6, eS), bS.eb.ec(eZ), eV.eW(30, ea), bS.bT.send(0, eV.eX)
	}, this.ed = function(ee, ef) {
		for (var cx = ef.length, eg = 0, cC = 0; cC < cx; cC++) eg += ef[cC].length;
		for (eV.af(21 + 3 * cx + 16 * eg), eV.eW(1, 0), eV.eW(6, 23), eV.eW(3, ee), eV.eW(4, cx), eV.eW(7, eg), cC = 0; cC < cx; cC++) eV.eW(3, ef[cC].length), eh.ei.ej(ef[cC]);
		bS.bT.send(0, eV.eX)
	}, this.ek = function(ee, eT, eU) {
		eV.af(52), eV.eW(1, 0), eV.eW(6, 24), eV.eW(3, ee), eV.eW(1, +(eT < 0)), eV.eW(1, +(eU < 0)), eV.eW(20, Math.abs(eT)), eV.eW(20, Math.abs(eU)), bS.bT.send(0, eV.eX)
	}
}

function el() {
	this.em = function() {
		for (var en, eo, cx = bO.h, ep = eq.result.ep, er = ep.length, et = (eV.af(40 + 16 * cx + er * (33 + 3 * (bO.w < 7))), eV.eW(1, 1), eV.eW(4, 10), eV.eW(10, er), eV.eW(1, +(2 === bO.a1)), eV.eW(24, eq.result.es), aN.et), cC = 0; cC <
			cx; cC++) eV.eW(16, et[cC]);
		var d0 = aN.d0;
		for (cC = 0; cC < er; cC++) en = ep[cC], eV.eW(9, en), eV.eW(24, d0[en]);
		if (bO.w < 7)
			for (eo = aR.eo, cC = 0; cC < er; cC++) eV.eW(3, 7 & eo[ep[cC]]);
		bS.bT.send(bS.bT.eu, eV.eX)
	}
}

function ev() {
	var ew, ex, ey, ez;

	function f6(bt, name, f7, f8) {
		ey[bt] = name, ex[bt] = new Image, ex[bt].onload = function() {
			! function(bt, f7) {
				var fC, fB = null;
				7 === f7 ? fC = cR.fD.fE : 8 === f7 ? (fC = cR.fD.fF, fB = .1) : 3 === f7 ? (fC = cR.fD.fG, fB = .06) : 5 === f7 ? fC = cR.fD.fH : 6 === f7 ? fC = cR.fD.fI : 4 === f7 && (fC = cR.fD.fJ);
				ex[bt] = cR.fD.fK(ex[bt], fC, fB)
			}(bt, f7), fA()
		}, ex[bt].onerror = function(dB) {
			console.error("Error loading image at index", bt, "Error:", dB), fA()
		}, ex[bt].src = "data:image/png;base64," + f8
	}

	function fA() {
		ew--, f4()
	}

	function f4() {
		0 === ew && (ew = -1, b1.fL(), fM.fN([ex[8], ex[16], ex[7], ex[9], ex[10]], [2 !== bJ.id, 1 !== bJ.id, !0, !0, !0]), fO.fP.aM(), au.fQ(), bE.bI = !0, ex[7] = ez, ex[8] = ez, ex[9] = ez, ex[10] = ez, 5 === bZ.fS) && bZ.fT().fU.resize()
	}
	this.aM = function() {
		if (void 0 === ex) {
			ew = 23, ex = new Array(ew), ey = new Array(ew), (ez = document.createElement("canvas")).width = 1, ez.height = 1;
			for (var cC = ew - 1; 0 <= cC; cC--) ex[cC] = ez;
			f6(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), f6(1, "victory", 6,
				"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), f6(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), f6(3, "orders", 6,
					"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"
					), f6(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), f6(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="), f6(
					6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiRnQJAHc2dOzemTJkSPXv2zE6hnuy7774xefLkOPzww+Odd97JzilK3bt3j9tuuy123HHH7BQ20KOPPpqdAABQ7+bOnRuvvfZa7LLLLtkpRaO0tDTOO++8OPjgg7NT+IzTTz89KioqsjOanZdfftlwDwBAETvyyCMN9wAAAAAAAAA0MaXZAQAAAAAAAAAA0ByUlpZG//79szOowaOPPhqTJk3Kztgg1dXVce2112ZnUEunnXZalJeXZ2cAsAFuuumm7ATq2Te/+c2YPHlydO3aNTul6BxzzDHx4IMPGu1pwtauXRvjx4/PzgAAaBB/+9vfshOKzkEHHRT77rtvdgafceihh2YnNEtvvfVWdgIAAIkOOOCAKC11pBMAAAAAAABAU+K3vAAAAAAAAAAAUA/OPvvs6NSpU3YG67FmzZqorKzMztgoY8eOjddeey07g1rYdtttm/znG0CxmjBhQrzxxhvZGdSzjh07xp/+9Kc4+uijs1OKxpgxY+KWW26Jtm3bZqewEZ577rmYM2dOdgYAQIOYPHlydkLRKSsrixEjRmRn8Cl77713fPOb38zOaJZeffXV7AQAABJtt9120bt37+wMAAAAAAAAAOrAcA8AAAAAAAAAAGyksrKy6NevX3YGNZg4cWJMmzYtO2OjXXXVVdkJ1NKJJ54YHTt2zM4AYAPccccd2Qk0gK222ipuvvnmGDp0aHZKs1ZeXh4PP/xwnHPOObHJJptk57CR7rvvvuwEAIAGc+utt8bKlSuzM4rOd7/73Tj88MOzM/hfp556apSUlGRnNEsvvPBCdgIAAMlOOumk7AQAAAAAAAAA6sBwDwAAAAAAAAAAbKQRI0bEDjvskJ3BeqxevTqGDBmSnVEvLr/88pg9e3Z2BrWw+eabx6hRo7IzANgAF198cSxbtiw7gwaw6aabxtChQ+OBBx6I8vLy7Jxm55BDDomZM2dGr169slOoBx999FFcffXV2RkAAA1m1apVMWvWrOyMolNSUhIVFRXZGUREq1at4kc/+lF2RrP15JNPZicAAJDs29/+dvTs2TM7AwAAAAAAAIBaMtwDAAAAAAAAAAAboby8PPr06ZOdQQ3uv//+eOGFF7Iz6s24ceOyE6ilI488Mrp27ZqdAUAdLV26NB5++OHsDBrQoYceGjNmzIiDDjooO6XZuPTSS+Oee+6Jjh07ZqdQT5544olYsWJFdgYAQIN66qmnshOK0je/+c0YPHhwdkbRGzp0aGy11VbZGc3S+++/H3Pnzs3OAAAgWWlpaQwaNCg7AwAAAAAAAIBaMtwDAAAAAAAAAAAbYfjw4dG+ffvsDNZj5cqVMWTIkOyMenX99dfHzJkzszOohU033TQqKyuzMwDYAJdffnlUVVVlZ9CAdt5553jwwQfjoosuitJSt9RvqP333z+ef/75+NWvfhWbbrppdg716IYbbshOAABocPfcc092QtH61a9+FR06dMjOKFqtWrWKn//859kZzdZrr72WnQAAQIE44IAD4qijjsrOAAAAAAAAAKAWPMsQAAAAAAAAAAA2ULt27eLEE0/MzqAGd955Z7z++uvZGfXu0ksvzU6glnr27Bm9evXKzgCgjp555pmYOnVqdgYNrGXLlnHmmWfG3/72t+jRo0d2TpPSqlWruOaaa+JPf/pTfOMb38jOoZ7NmTMnHnrooewMAIAG9+yzz8Ybb7yRnVGUttpqq7j66quzM4pWZWVlbLvtttkZzdYLL7yQnQAAQIEoKSmJkSNHRllZWXYKAAAAAAAAAF/AcA8AAAAAAAAAAGygUaNGRdu2bbMzWI9ly5ZFRUVFdkaDuPXWW2P69OnZGdRCaWlpDB06NDsDgA1wxRVXZCfQSL7xjW/Eo48+Gtddd12Ul5dn5xS8fv36xSuvvBK/+MUvYtNNN83OoQE88MAD2QkAAI3GaGuegw8+OE4//fTsjKKz8847R58+fbIzmrVp06ZlJwAAUEB22WWXuPzyy7MzAAAAAAAAAPgChnsAAAAAAAAAAGADdO7cOX7yk59kZ1CDCRMmxLx587IzGszFF18c69aty86gFv7f//t/0bt37+wMAOro3nvvjVmzZmVn0Eg23XTTOPnkk2POnDlx3nnnZecUpB/84Acxffr0uPzyy2OnnXbKzqGBrFixIsaNG5edAQDQaO69997shKI2dOjQ2HXXXbMzisq4ceNiiy22yM5ottauXRsPPvhgdgYAQKxZsyY7gU855ZRT4uijj87OAAAAAAAAAOBzGO4BAAAAAAAAAIANMGzYsGjTpk12BuuxePHiGDZsWHZGg7r77rvj6aefzs6gls4+++zsBAA2wA033JCdQCPbbrvtorKyMmbPnh3HHntsdk5B6NmzZ0yaNCkeeuih6Nq1a3YODeyRRx6JBQsWZGcAADSaP/zhD7Fw4cLsjKK11VZbxS233BKlpZ7q3Bj69OkTBx98cHZGs/bWW2/F0qVLszMAAAz3FJhNNtkkrrjiithrr72yUwAAAAAAAACogbtZAQAAAAAAAACgjrp06RJHHnlkdgY1uPnmm2PRokXZGQ1u7NixUV1dnZ1BLeyyyy5x7rnnZmcAUEdXXnllvP3229kZJNh1113j1ltvjWeffTZ69+6dnZPiiCOOiCeeeCL+9Kc/xXe/+10HaReBdevWxZVXXpmdAQDQ6KZMmZKdUNS+9a1vxXXXXZed0ex16NAhKisro6SkJDulWXvppZeyEwAAKFDt2rWLO++8M3beeefsFAAAAAAAAADWw7PnAAAAAAAAAACgjkaOHBktW7bMzmA9Fi5cGOeff352RqN4+OGHY/LkydkZ1FK/fv2iVatW2RkA1NGNN96YnUCib33rWzF+/Ph4+eWXY8CAAc1+vKasrCzOPPPMmDVrVtxzzz2x//77N/uPmf/Pc8895/sLAKAo3XvvvdkJRe+kk06KX//619kZzdqtt94a2267bXZGs/fXv/41OwEAgALWqVOn+NOf/mS8BwAAAAAAAKAAeRYdAAAAAAAAAADUQbdu3eLggw/OzqAG48ePj1WrVmVnNJoxY8ZEVVVVdga18OUvfzlGjRqVnQFAHVVWVsb8+fOzM0i2yy67xMUXXxzvvvtu3HDDDdG1a9fspHrVo0ePuPXWW2PBggVx0UUXxR577JGdRIKbbropOwEAIMUdd9wR7733XnZGUSspKYlRo0bFEUcckZ3SLF1xxRXRvXv37Ixmr7q6Ou68887sDACAiIiium+mqencuXM88cQTvkYHAAAAAAAAKDCGewAAAAAAAAAAoA4qKiqiRYsW2Rmsx7vvvhvDhg3LzmhUjz/+eDz22GPZGdTSSSedFDvuuGN2BgB1UFVVFbfcckt2BgVi2223jZNOOin++te/xvTp0+O8886L7bffPjtrg+yzzz5x+eWXx+zZs+PJJ5+MY489NrbeeuvsLJLMnTs3rr766uwMAIA0f/7zn7MTil6rVq3i+uuvj27dumWnNCtnnHFG/Nd//Vd2RlF49dVXY+7cudkZAAAREbF69ersBD5Hhw4d4uGHH45+/fplpwAAAAAAAADwvwz3AAAAAAAAAABALfXs2TN69uyZnUENrrzyyqiqqsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), f6(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), f6(8,
					"googleplay", 3,
					"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"
					), f6(9, "discord", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), f6(10, "insta", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), f6(11, "emojis", 4,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), f6(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), f6(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), f6(14, "bestPlayer", 5,
					"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"
					), f6(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), f6(16, "apple", 3,
					"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"
					), f6(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), f6(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), f6(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), f6(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), f6(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), f6(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(bt) {
		return ex[bt]
	}, this.f1 = function(name) {
		for (var cC = ey.length - 1; 0 <= cC; cC--)
			if (ey[cC] === name) return ex[cC];
		return ez
	}, this.f2 = function() {
		return ew <= 0
	}, this.f3 = function() {
		ew = 0, f4()
	}
}

function fV(fW, type, fX) {
	var dB;
	this.dB = document.createElement("input"), (dB = this.dB).type = type ? "number" : "text", dB.id = "input" + fW.title, dB.value = fW.value, dB.style.width = "100%", dB.style.userSelect = "none", dB.style.outline = "none", dB.style.resize =
		"none", dB.style.border = "inherit", dB.style.font = "inherit", dB.style.color = cd.co, dB.style.backgroundColor = cd.fY, dB.style.fontSize = "1em", dB.style.padding = "0.1em 0.2em", -1 !== fW.bt && (dB.addEventListener("focus", function() {
			c0.fZ++
		}), dB.addEventListener("blur", function() {
			c0.fZ--, fa.fb.fc(fW.bt, dB.value)
		}), dB.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), fa.fb.fc(fW.bt, dB.value), fX ? fX() : dB.blur())
		}))
}

function fd() {
	var fi, fk;
	this.fe = 5, this.ff = this.fe - 1, this.fg = this.fe + this.ff, this.fh = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.fj = null;

	function g4(cC) {
		return fk[cC].fs && fi[cC].g4()
	}

	function g6(g1) {
		fk[g1].dH = bE.dH, fk[g1].ft = !1
	}
	this.eu = 0, this.fm = 0, this.aM = function() {
		this.fj = new Array(this.fe);
		this.fj[0] = "territorial.io";
		var cC, fo = aJ.fp(0);
		for (aJ.aK(0), cC = 1; cC < this.fe; cC++) this.fj[cC] = fq.fr() + ".territorial.io";
		for (aJ.aK(fo), fi = new Array(this.fg), fk = new Array(this.fg), cC = this.fg - 1; 0 <= cC; cC--) fk[cC] = {
			fs: !1,
			dH: 0,
			ft: !1
		};
		this.fu(0, 0)
	}, this.fv = function(cC) {
		return fi[cC]
	}, this.fw = function() {
		return this.fm < this.fe ? this.fm : this.fm - this.ff
	}, this.fx = function() {
		for (var cC = this.fg - 1; 0 <= cC; cC--) this.fy(cC) && bE.dH > fk[cC].dH + 15e3 && bS.fz.g0(cC, fk[cC].ft);
		!this.fy(0) && bE.dH > fk[0].dH + 8e3 && (fk[0].dH = bE.dH, this.fu(0, 0))
	}, this.fu = function(g1, g2) {
		if (fk[g1].fs) {
			if (fi[g1].g4()) return fi[g1].g5(g2), fi[g1].fy();
			fi[g1].cB()
		}
		return this.g3(g1, g2), !1
	}, this.g3 = function(g1, g2) {
		fk[g1].fs = !0, g6(g1), fi[g1] = new g7, fi[g1].aM(g1, g2)
	}, this.g5 = function(g1, g2) {
		g4(g1) && fi[g1].g5(g2)
	}, this.g8 = function(g1, g2) {
		bS.eb.g9(g1)
	}, this.fy = function(cC) {
		return fk[cC].fs && fi[cC].fy()
	}, this.send = function(g1, eX) {
		g6(g1), fi[g1].send(eX)
	}, this.gA = function(g1) {
		8 === bY.gB() && (fk[g1].ft = !0, bS.gC.aC = !0)
	}, this.close = function(g1, gD) {
		g4(g1) && fi[g1].close(gD)
	}, this.gE = function(g1, gD) {
		gF.gG(gD), g4(g1) && fi[g1].close(gD)
	}, this.gH = function(gD) {
		for (var cC = this.fg - 1; 0 <= cC; cC--) this.close(cC, gD)
	}, this.gI = function(g1, gD) {
		for (var cC = this.fg - 1; 0 <= cC; cC--) cC !== g1 && this.close(cC, gD)
	}, this.bU = function() {
		this.close(this.eu, 3246)
	}, this.gJ = function(g1, dB) {
		fi[g1].cB(), gF.gK(g1, dB.code)
	}
}

function gL() {
	var eX, gO, gP, gQ;
	this.gM = 0, this.gN = 0, this.aM = function() {
		var ex, gd;
		7 === bY.gB() && (eX = gR.eX, gO = 0, gP = bE.dH + 4500, gQ = bS.gS.gT() ? 2 : 0, bY.setState(10), cc.imageSmoothingEnabled = !0, bY.ga(), ex = gc.f1("loading"), gd = (bJ.bK.c2() ? .396 : .25) * c0.ge / ex.width, cc.setTransform(gd, 0, 0,
			gd, Math.floor((c0.bg - gd * ex.width) / 2), Math.floor((c0.bh - gd * ex.height) / 2)), cc.imageSmoothingEnabled = !1, cc.drawImage(ex, 0, 0), cc.setTransform(1, 0, 0, 1, 0, 0))
	}, this.gU = function() {
		0 < gQ && bE.dH > gP && (gQ--, gP += 4500, 0 === bE.gW) && 0 === bE.dK() && (0 === gQ && bS.bT.eu < bS.bT.fe && (bS.bT.eu += bS.bT.ff), bS.bT.fu(bS.bT.eu, 5))
	}, this.gX = function() {
		var en, cC;
		return 10 === bY.gB() && (en = gR.eX, cC = gR.bt, bS.gS.gY(eX), eX = null, gR.aM(en), gR.bt = cC, !0)
	}, this.gZ = function() {
		10 === bY.gB() && 2 <= ++gO && (bS.gS.gY(eX), eX = null)
	}
}

function gf() {
	var gg = 32,
		gh = new Array(2);

	function gj(gk) {
		var ca, cb, gl, gn, gm, go = gg,
			gp = cR.cU.gj(go, go),
			gq = cR.cU.getContext(gp, !0),
			gr = cR.cU.getImageData(gq, go, go),
			fP = gr.data,
			cs = (go >> 1) - .5,
			gs = Math.sqrt(cs * cs);
		for (fP.fill(255), cb = 0; cb < go; cb++)
			for (ca = 0; ca < go; ca++) gm = ca - cs, gn = cb - cs, gl = 4 * (cb * go + ca), gm = 714 * (gs - Math.sqrt(gm * gm + gn * gn)) / gs, fP[2 + gl] = gk, fP[3 + gl] = 255 < gm ? 0 : gm;
		return gq.putImageData(gr, 0, 0), gp
	}
	this.gi = -1, this.aM = function() {
		this.gi = -1, gh[0] || (gh[0] = gj(255), gh[1] = gj(0))
	}, this.gt = function(gq, cu, ca, cb, gu, cC) {
		cR.gv.gw(bO.g) && (gq.setTransform(cu *= 4 / 3 * .625, 0, 0, cu, ca - (gu *= 4 / 3), cb - gu), gq.drawImage(gh[+(ac.bT.gx[cC] === this.gi)], 0, 0))
	}
}

function gy() {
	var player, dh, gz, h0, dM, dN, dO, dP, bt, h1, id;

	function h9() {
		var dg;
		if (aZ.ds(gz)) dg = bO.b;
		else {
			if ((dg = aZ.dq(gz)) === player) return void hB(!0);
			if (!e1(player, dg)) return function(dg) {
				var max = aN.d0[dg] * bO.m - aN.dj[dg];
				max <= 0 || (dh -= max = max < dh ? max : dh, player === bO.g && (az.hG(max, 0, dg), aS.cz[16] += max), dg === bO.g && (az.hH(max, player), aS.cz[10] += max), aN.dj[dg] += max, b8.hI(dg, max))
			}(dg), void hB(!0)
		}
		player === bO.g && (aS.cz[13] += dh), b3.hD(player, id), b7.hE(player, h1), aN.dU[player].push(h0), b7.dc(player, dh, dg), b4.de(player, !0)
	}

	function hB(hJ) {
		b3.hD(player, id), b7.hE(player, h1), hJ && (aN.dj[player] += dh)
	}

	function h5() {
		aZ.hO(gz, player) && aZ.hP(gz)
	}

	function h4(cC, hV, h2, dy, h3) {
		if (bt = cC, id = hV, player = h2, dM = aZ.hM(dy), dN = aZ.hN(dy), dO = aZ.hM(h3), dP = aZ.hN(h3), h0 = gz = aZ.hL(dM, dN), -1 !== (h1 = b7.hW(player, id))) return dh = b7.hX(player, h1), 1;
		h5(), b3.hD(player, id)
	}
	this.fx = function(cC, id, h2, dy, h3) {
		h4(cC, id, h2, dy, h3) && (h5(), function() {
			var hS = cA(dh, 128);
			dh -= hS = hS < 1 ? 1 : hS, player === bO.g && (aS.cz[15] += hS);
			if (dh <= bO.f) return player === bO.g && (aS.cz[15] += dh), void hB(!1);
			return b7.hT(player, h1, dh), 1
		}()) && (cC = aZ.hL(dM, dN), gz = Math.abs(dO - dM) >= Math.abs(dP - dN) ? cC + dp[dM < dO ? 1 : 3] : cC + dp[dN < dP ? 2 : 0], dM = aZ.hM(gz), dN = aZ.hN(gz), b3.hY(bt, gz), ! function() {
			if (aZ.hU(gz)) return;
			return 1
		}() ? h9() : aZ.hQ(gz) && aZ.hR(gz, player))
	}, this.hK = function(h2, dy) {
		player = h2, gz = aZ.hL(aZ.hM(dy), aZ.hN(dy)), h5()
	}
}

function hZ() {
	var ha, hb, hc, hn;
	this.show = function() {
			ha.show(), this.resize()
		}, this.cB = function() {
			ha.cB()
		}, this.resize = function() {
			ha.resize(), hb.resize()
		}, this.hw = function(gk) {
			2 === gk && ha.hx[0].hy()
		}, ha = new hd("⚙️ " + he.hf[81], [new hg("💾 " + he.hf[97], function() {
			bZ.ba(1)
		}, cd.hh), new hg("🔄 " + he.hf[98], function() {
			bZ.hi(), fa.fb.hj(), bZ.ba(2)
		})]), hc = [], (hn = new ho).hp(he.hf[99]), hn.hq(he.hf[100]), hc.push(hn), (hn = new ho).hp(fa.hr.data[0].title), hn.hs(new ht(fa.hr.data[0])), hc.push(hn), (hn = new ho).hp(fa.hr.data[10].title), hn.hs(new ht(fa.hr.data[10])), hc.push(hn),
		(hn = new ho).hp(fa.hr.data[1].title), hn.hs(new ht(fa.hr.data[1])), hc.push(hn), (hn = new ho).hp(fa.hr.data[9].title), hn.hs(new ht(fa.hr.data[9])), hc.push(hn), (hn = new ho).hp(fa.hr.data[11].title), hn.hs(new ht(fa.hr.data[11])), hc
		.push(hn), (hn = new ho).hp(fa.hr.data[2].title), hn.hu(new hv(fa.hr.data[2])), hc.push(hn), (hn = new ho).hp(fa.hr.data[7].title), hn.hu(new hv(fa.hr.data[7])), hc.push(hn), (hn = new ho).hp(fa.hr.data[8].title), hn.hu(new hv(fa.hr.data[
		8])), hc.push(hn), (hn = new ho).hp(fa.hr.data[5].title), hn.hu(new fV(fa.hr.data[5])), hc.push(hn), hb = new hl(ha.hm, hc)
}
var hz, i0, i1, i2, i3, i4, i5, i6, i7, i8, dp, i9, iA, cG, cF, cI, e3, e0, e2, da, aG, j6, wM, wN, lt, wO, a3s, cc, a4Q, yN, an, ao, l3, a8m, a00, lU, kd;

function b6() {
	i4 = 0, i5 = 2048, i6 = new Uint32Array(4 * i5), i7 = 0, i8 = new Uint32Array(i5), (dp = new Int32Array(4))[0] = -4 * cJ.cK, dp[1] = 4, dp[2] = -dp[0], dp[3] = -dp[1], i9 = new Uint8Array(cJ.cK * cJ.cL)
}

function iB(player) {
	i0 = player, iA = !1, iC(), iD();
	for (var cC = b7.iE(i0) - 1; 0 <= cC; cC--) 0 === b7.iF(i0, cC) && (hz = cC, iG());
	iA && iH()
}

function iH() {
	iI(), iJ()
}

function iG() {
	i3 = b7.iK(i0, hz), i1 = b7.hX(i0, hz), iL(), (0 !== i4 && (iN(), iO()) ? iP : iM)()
}

function iO() {
	return (i2 = cA(i1, i4)) > bO.f
}

function iN() {
	for (var cC = i4 - 1; 0 <= cC; cC--) i9[cA(i6[cC], 4)] = 0
}

function iM() {
	var cN;
	1 === b7.iE(i0) && b4.hD(i0), i0 !== bO.g ? (aN.dj[i0] += i1, aX.iQ(i0)) : (cN = aN.dj[i0], aN.dj[i0] += i1, aX.iQ(i0), aS.cz[13] -= aN.dj[i0] - cN), b7.hE(i0, hz)
}

function iC() {
	var cC, cx = aN.dU[i0].length;
	for (i7 = 0, cC = (i5 < cx ? i5 : cx) - 1; 0 <= cC; cC--) i8[i7++] = aN.dU[i0][cC]
}

function iD() {
	for (var cC = aN.dU[i0].length - 1; 0 <= cC; cC--) aZ.hU(aN.dU[i0][cC]) && aZ.iR(aN.dU[i0][cC], i0);
	aN.dU[i0] = []
}

function iL() {
	i4 = 0, (i3 === bO.b ? iS : iT)()
}

function iT() {
	for (var en, iU, cC, c1 = 3; 0 <= c1; c1--)
		for (cC = i7 - 1; 0 <= cC; cC--) iU = cA(en = i8[cC] + dp[c1], 4), 0 === i9[iU] && aZ.dn(en) && aZ.dq(en) === i3 && (i9[iU] = 1, i6[i4++] = en)
}

function iS() {
	for (var en, iU, cC, c1 = 3; 0 <= c1; c1--)
		for (cC = i7 - 1; 0 <= cC; cC--) iU = cA(en = i8[cC] + dp[c1], 4), 0 === i9[iU] && aZ.ds(en) && (i9[iU] = 1, i6[i4++] = en)
}

function iV() {
	var ha, iW, iY, ih, iX = !1;

	function iZ(id) {
		0 !== bJ.id || fa.hr.data[140].value ? 0 === id ? bZ.ba(8, 1, new ir(16)) : bZ.ba(2) : bZ.bT.iq(bZ.fS, 0 === id ? 16 : 0)
	}
	this.show = function() {
		bJ.bK.setState(12), ha.show(), this.resize(), this.fx()
	}, this.cB = function() {
		ha.cB()
	}, this.resize = function() {
		ha.resize(), iW.resize()
	}, this.fx = function() {
		!iX || ax.ij(bO.g) || (bZ.hi(), bZ.ba(1))
	}, this.hw = function(gk) {
		2 === gk && ha.hx[0].hy()
	}, iY = [new hg("🔑 " + he.hf[125], function() {
		iZ(0)
	}), new hg("⚙️ " + he.hf[81], function() {
		iZ(1)
	}), new hg("▶️ " + he.hf[82], function() {
		bZ.ba(3, 1, "")
	}), new hg("📈 Charts", function() {
		bZ.bT.ia()
	}), new hg("🔗 " + he.hf[83], function() {
		bZ.ba(4, 1, new is("🔗 " + he.hf[83], cR.cU.it(["Android App", "iOS App", "Discord", "Changelog", "Clans", "Clan Results", "Players", "Tutorial", "Terms", "Privacy"], [iu.iv, iu.iw, iu.ix, iu.iy, iu.iz, iu.j0, iu.j1, iu.j2, iu.j3,
			iu.j4
		]), !1, [new hg("❌ " + he.hf[92], function() {
			bZ.ba(1)
		}, cd.j5)]))
	}), new hg("ℹ️ " + he.hf[84], function() {
		bZ.ba(4, 1, new is("ℹ️ " + he.hf[84], j6 + "<br><a href='" + iu.iy + "' target='_blank'>" + iu.iy + "</a>" +
			"<br><br><b>" + "FX Client v" + fx_version + " " + fx_update + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new hg("❌ " + he.hf[92], function() {
				bZ.ba(1)
			}, cd.j5)]))
	}), new hg("🗑️ " + he.hf[85], function() {
		bZ.ba(4, 1, new is("🗑️ " + he.hf[85],
			"Do you want to delete all locally stored data, like usernames, account data and setting data? Your account will be deleted automatically after 3 months of inactivity. To prevent the storage of new data, it is recommended to close the game after deletion.",
			!1, [new hg("❌ " + he.hf[92], function() {
				bZ.ba(1)
			}), new hg("🗑️ Delete", function() {
				bJ.bK.j7(), bZ.ba(1)
			})]))
	}), new hg(he.hf[86], function() {
		bJ.bK.ig(), bZ.ba(4, 1, new is("User Privacy", "If the privacy window doesn't open, please deactivate all your adblockers.<br>Additionally, check out our Privacy Policy: <a href='" + iu.j4 + "' target='_blank'>" + iu.j4 + "</a>",
			!1, [new hg("❌ " + he.hf[92], function() {
				bZ.ba(1)
			}, cd.j5)]))
	})], ih = [new hg("❌ " + he.hf[87], function() {
		bZ.bT.ii()
	})], 8 === bY.gB() && iY.unshift(new hg("📈 " + he.hf[88], function() {
		bZ.hi(), 2 <= aS.cQ && (am.cP(), bE.bI = !0)
	})), 8 === bY.gB() && !bO.o && ax.ij(bO.g) && (iX = !0, iY.unshift(new hg("🏳️ " + he.hf[89], function() {
		aO.ik.il(), bZ.hi(), ax.bc && ax.cP()
	}))), 1 === bJ.id && 5 <= bJ.im && iY.push(new hg(he.hf[90], function() {
		bJ.bK.io()
	})), ha = new hd("📙 " + he.hf[91], ih), iW = new ip(iY, ha.hm)
}

function j8(name, placeholder) {
	var j9 = document.createElement("textarea"),
		jB = (this.jA = j9, !0);

	function jJ() {
		j9.select(), document.execCommand("copy")
	}
	this.resize = function() {
			j9.style.padding = cR.cU.jC(c3.jD)
		}, this.jE = function(jF) {
			j9.value = jF
		}, this.jG = function() {
			return j9.value
		}, this.jH = function() {
			j9.select()
		}, this.clear = function() {
			j9.value = ""
		}, this.jI = function() {
			jB && navigator.clipboard ? (j9.select(), navigator.clipboard.writeText(j9.value).catch(function() {
				jB = !1, jJ()
			})) : jJ()
		}, j9.setAttribute("name", name), j9.setAttribute("id", name + "Field"), j9.setAttribute("autocomplete", "off"), j9.setAttribute("placeholder", placeholder), j9.style.top = "0", j9.style.left = "0", j9.style.width = "100%", j9.style.height =
		"100%", j9.style.userSelect = "none", j9.style.outline = "none", j9.style.resize = "none", j9.style.border = "none", j9.style.color = cd.co, j9.style.backgroundColor = cd.fY, j9.style.fontSize = "1.2em"
}

function jK() {
	this.jL = new Array(bO.b), this.jM = new Array(bO.b), this.jN = new Uint8Array(bO.b), this.bN = new Uint8Array(bO.b), this.eJ = new Uint16Array(bO.b), this.eM = new Uint16Array(bO.b), this.eI = new Uint16Array(bO.b), this.eL = new Uint16Array(bO
			.b), this.d0 = new Uint32Array(bO.b), this.jO = new Uint32Array(bO.b), this.dj = new Uint32Array(bO.b), this.dU = null, this.dl = null, this.jP = null, this.jQ = null, this.jR = new Uint16Array(bO.b), this.dX = new Uint16Array(bO.b), this
		.dY = new Uint16Array(bO.b), this.et = new Uint16Array(bO.b), this.jS = new Uint8Array(bO.b), this.aM = function(a7) {
			for (var cC = a7.length - 1; 0 <= cC; cC--) this.jM[cC] = this.jL[cC] = a7[cC].name, this.jN[cC] = a7[cC].jT;
			this.bN.fill(0), this.eJ.fill(0), this.eM.fill(0), this.eI.fill(0), this.eL.fill(0), this.d0.fill(0), this.jO.fill(0), this.dj.fill(0), donationsTracker.reset(), leaderboardFilter.reset(), this.dU = new Array(bO.b), this.dl = new Array(bO
				.b), this.jP = new Array(bO.b), this.jQ = new Array(bO.b), this.jR.fill(0), this.dX.fill(0), this.dY.fill(0), this.et.fill(0), this.jS.fill(0)
		}
}

function jU() {
	this.jV = new jW, this.jX = new jY, this.jZ = new ja, this.bT = new jb, this.jc = new jd, this.je = new gf, this.jf = new jg, this.jh = new ji, this.jj = new jk, this.aM = function() {
		this.jZ.aM(), this.bT.aM(), this.jc.aM(), this.je.aM()
	}
}

function jl() {
	this.jm = function(player, gl) {
		cR.gv.jn(0) && cR.gv.gw(player) && ab.jo(gl) && (ai.jp.jq(0, player, gl), bO.y.dc(player, gl))
	}, this.jr = function(player, js, dg) {
		aN.jR[player]++, cR.gv.jn(1) && cR.gv.gw(player) && cR.gv.jt(player, dg) && cR.gv.ju(player, js, 12, bO.f) && cR.gv.jv(player, dg) && ((dg = b7.e8(player, dS.dT[0])) || b7.jw(player)) && dQ(player, dg) && (ai.jp.jq(1, player, js, dS.dT[
			0]), cR.gv.jx(player), aS.jy(player, js), dZ(player))
	}, this.jz = function(player, js, k0) {
		cR.gv.jn(1) && cR.gv.gw(player) && bO.u && cR.gv.jt(player, k0) && cR.gv.k1(player, k0) && cR.gv.k2(player, cR.gv.k3(player, js), k0) && (ai.jp.jq(2, player, js, k0), aX.k4(player, k0))
	}, this.k5 = function(player, js, gl) {
		cR.gv.jn(1) && cR.gv.gw(player) && ab.jo(gl) && ac.bT.k6 !== ac.bT.k7 && ac.bT.k8[player] !== ac.bT.k9 && 0 !== aN.jP[player].length && cR.gv.ju(player, js, 32, 16) && ac.jj.kA(player, gl) && (ai.jp.jq(3, player, js, gl), cR.gv.jx(
			player), ac.bT.kB(player))
	}, this.kC = function(player, kD, gl) {
		cR.gv.jn(1) && cR.gv.gw(player) && ab.jo(gl) && ac.jV.kE(player, kD) && ac.jj.kF(gl) && (ai.jp.jq(4, player, kD, gl), cR.gv.kG(player, 8), ac.bT.kC())
	}, this.kH = function(player, dg) {
		cR.gv.jn(1) && cR.gv.gw(player) && (dg = Math.min(dg, bO.b), b7.e8(player, dg)) && (ai.jp.jq(5, player, dg), b7.kI(player, dg))
	}, this.kJ = function(player, kK) {
		(cR.gv.jn(1) || cR.gv.jn(2)) && cR.gv.gw(player) && (kK = kL.kM(kK, 0, 1023), ai.jp.jq(6, player, kK), b8.kN(player, 0, kK))
	}, this.kO = function(player, kP) {
		cR.gv.jn(1) && cR.gv.gw(player) && (ai.jp.jq(7, player, kP), au.kQ(player, kP))
	}, this.il = function(player) {
		(cR.gv.jn(0) || cR.gv.jn(1)) && cR.gv.gw(player) && ak.il(player) && ai.jp.jq(8, player)
	}, this.kR = function(player) {
		ak.kR(player), ai.jp.jq(9, player)
	}
}

function kS() {
	this.fx = function(eX) {
		var id, dC, h3;
		for (gR.aM(eX), gR.bt += 2, h3 = 8 * gR.size; gR.bt + 8 <= h3;) id = gR.kT(4), dC = gR.kT(9), 0 === id ? this.kU(id, dC, gR.kT(22)) : 1 === id ? this.kU(id, dC, gR.kT(10), gR.kT(10)) : 2 === id ? this.kU(id, dC, gR.kT(10), gR.kT(9)) :
			3 === id || 4 === id ? this.kU(id, dC, gR.kT(10), gR.kT(22)) : 5 === id || 6 === id ? this.kU(id, dC, gR.kT(10)) : 7 === id ? this.kU(id, dC, gR.kT(1)) : this.kU(id, dC)
	}, this.aQ = [], this.kV = function() {
		for (var kX = 0, kY = 0, kZ = 0, ka = 0, kb = 0, kc = 0, cC = 0; cC < 512; cC++) kX += aN.bN[cC], kY += aN.d0[cC], kZ += aN.dj[cC], ka += ac.bT.k8[cC];
		kb += ac.bT.k6, kc += kd, this.aQ.push(((255 & kX + kY + kZ + ka + kb + kc) << 12) + ((3 & kX) << 10) + ((3 & kY) << 8) + ((3 & kZ) << 6) + ((3 & ka) << 4) + ((3 & kb) << 2) + (3 & kc))
	}, this.kU = function(id, dC, dD, ke) {
		0 === id ? aO.kf.jm(dC, dD) : 1 === id ? aO.kf.jr(dC, dD, ke) : 2 === id ? aO.kf.jz(dC, dD, ke) : 3 === id ? aO.kf.k5(dC, dD, ke) : 4 === id ? aO.kf.kC(dC, dD, ke) : 5 === id ? aO.kf.kH(dC, dD) : 6 === id ? aO.kf.kJ(dC, dD) : 7 === id ?
			aO.kf.kO(dC, dD) : 8 === id ? aO.kf.il(dC) : aO.kf.kR(dC)
	}
}

function kg() {
	var kh, ki, kj, kk, bh, kl, fontSize, km, kn, bs, ko, ex, kp, kq, kr;

	function l1() {
		cc.drawImage(ex, c3.gap + (bO.u ? c3.gap + aj.l2() : 0), l3 + 2 * c3.gap)
	}

	function ks() {
		ex.width = kh[0].width + bs, ex.height = bh + bs, (kp = ex.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, kh[0].width + bs, bh + bs), kp.translate(Math.floor(bs / 2), Math.floor(bs / 2)), kp.lineWidth = bs, kp.fillStyle = 1 === kh[0].kz ? cd.l4 : cd.ce, l5(), kp.fill(), kp.strokeStyle = 1 === kh[0].kz ? cd.l6 : cd.co,
		l5(), kp.stroke(), cR.cU.textAlign(kp, 1), cR.cU.textBaseline(kp, 1), kp.fillStyle = 1 === kh[0].kz ? cd.l6 : cd.co, kp.font = kl[0], kp.fillText(he.hf[66 + kh[0].ky], Math.floor(kh[0].width / 2), Math.floor(.72 * km[0] * bh)), kp.font = kl[
				1], kp.fillText(kh[0].f8, Math.floor(kh[0].width / 2), Math.floor((km[0] + .48 * km[1]) * bh))
	}

	function l5() {
		kp.beginPath(), kp.moveTo(ko, 0), kp.lineTo(kh[0].width - ko, 0), kp.lineTo(kh[0].width, ko), kp.lineTo(kh[0].width, bh - ko), kp.lineTo(kh[0].width - ko, bh), kp.lineTo(ko, bh), kp.lineTo(0, bh - ko), kp.lineTo(0, ko), kp.closePath()
	}
	this.aM = function() {
		ki = 4, kj = kk = kq = 0, kh = [], kl = new Array(2), fontSize = new Array(2), (km = new Array(2))[0] = .3, km[1] = .7, kn = new Array(4), ex = document.createElement("canvas"), kr = bE.dH + 2e3, this.resize()
	}, this.resize = function() {
		var cC, bg;
		for (bh = Math.floor((bJ.bK.c2() ? .0725 : .058) * c0.ge), fontSize[0] = Math.floor(.85 * km[0] * bh), fontSize[1] = Math.floor(.85 * km[1] * bh), kl[0] = cR.cU.cV(1, fontSize[0]), kl[1] = cR.cU.cV(1, fontSize[1]), cC = kn.length -
			1; 0 <= cC; cC--) kn[cC] = this.measureText(he.hf[66 + cC] + "000", kl[0]);
		if (bs = Math.floor(1 + .05 * bh), ko = Math.floor(.2 * bh), 0 < kh.length) {
			for (cC = kh.length - 1; 0 <= cC; cC--) bg = this.measureText(kh[cC].f8 + "00", kl[1]), kh[cC].width = bg < kn[cC] ? kn[cC] : bg;
			ks()
		}
	}, this.fx = function() {
		0 !== ki && (4 === ki ? bE.dH > kr && (ki = 0, 1 === bO.p) && ay.ku(cJ.aD.kv[cJ.kw].name, 3, 1, 9) : (1 === ki ? (0 === kj && (ks(), kj = 1e-4), 1 <= (kj += .002 * (bE.dH - kq)) && (kk = 0, ki = 2, kj = 1), bE.bI = !0) : 2 === ki ? ((
			kk += (bE.dH - kq) / 1e3) > kh[0].l0 || 1 < kk && 1 < kh.length) && (ki = 3) : 3 === ki && ((kj -= .002 * (bE.dH - kq)) <= 0 && (kj = 0, kh.shift(), ki = 0 < kh.length ? 1 : 0), bE.bI = !0), kq = bE.dH))
	}, this.measureText = function(f8, kl) {
		return cc.font = kl, Math.floor(cc.measureText(f8).width)
	}, this.dc = function(h2, cC) {
		this.ku(aN.jM[h2], cC, 1, 0 === cC ? 3 : 7)
	}, this.ku = function(f8, ky, kz, l0) {
		var bg = (bg = this.measureText(f8 + "00", kl[1])) < kn[ky] ? kn[ky] : bg;
		kh.push({
			f8: f8,
			width: bg,
			ky: ky,
			kz: kz,
			l0: l0
		}), 0 === ki && (kj = 0, ki = 1, kq = bE.dH)
	}, this.cY = function() {
		0 !== ki && 0 !== kj && (kj < 1 ? (cc.globalAlpha = kj, l1(), cc.globalAlpha = 1) : l1())
	}
}

function l7() {
	this.ik = new l8, this.gv = new l9, this.kf = new jl, this.aP = new kS, this.lA = new lB
}

function lC() {
	var lD, lE, lF, lG, lH, lI;
	this.aM = function() {
		lF = lD = 10, lG = lE = 10
	}, this.lJ = function() {
		lI = 512, lH = new Uint16Array(lI);
		for (var cC = 0; cC < lI; cC++) lH[cC] = 100 + lK(cA(25600 * cC, lI - 4), 9)
	}, this.dL = function() {
		return lG
	}, this.fx = function() {
		if (--lF <= 0 && (lF = lD, function() {
				var cC, lS, cN = aN.dj[bO.g];
				for (bO.n && !bO.u && 0 !== aN.bN[0] && 0 === aH.lW[0].c1 && (aN.dj[0] += cA(aN.d0[0], 6)), cC = kd - 1; 0 <= cC; cC--) lS = cA(aX.lO(lU[cC]) * aN.dj[lU[cC]], 1e4), aN.dj[lU[cC]] += lS < 1 ? 1 : lS, aX.iQ(lU[cC]);
				aS.cz[9] += aN.dj[bO.g] - cN
			}(), --lG <= 0)) {
			lG = lE;
			for (var cN = aN.dj[bO.g], cC = kd - 1; 0 <= cC; cC--) aN.dj[lU[cC]] += aN.d0[lU[cC]], aX.iQ(lU[cC]);
			aS.cz[8] += aN.dj[bO.g] - cN
		}
	}, this.lO = function(player) {
		var gu = lH[cA((lI - 1) * aN.d0[player], bO.q)],
			lP = (bE.dK() < 1920 && (gu = gu < (lP = cA(100 * (13440 - 6 * bE.dK()), 1920)) ? lP : gu), this.lR(player));
		return aN.dj[player] > lP && (gu -= cA(2 * gu * (aN.dj[player] - lP), lP)), gu < 0 ? 0 : 700 < gu ? 700 : gu
	}, this.lR = function(player) {
		player = 100 * aN.d0[player];
		return player > bO.d ? bO.d : player
	}, this.iQ = function(player) {
		var lV = aN.d0[player] * bO.m;
		aN.dj[player] = Math.min(Math.min(aN.dj[player], bO.c), lV)
	}, this.k4 = function(player, k0) {
		cR.gv.lX(k0, dS.dd[0]), aS.hG(player, k0), b8.lY(player, dS.dd[0] + dS.dd[1]), b8.hI(k0, dS.dd[0]), cR.gv.jx(player)
	}, this.lZ = function() {
		for (var cx = kd, a7 = lU, cs = 0, cj = aN.dj, cC = 0; cC < cx; cC++) cs += cj[a7[cC]];
		return cs
	}, this.la = function(lb) {
		for (var en, cx = kd, a7 = lU, cs = 0, cj = aN.dj, eo = aR.eo, cC = 0; cC < cx; cC++) eo[en = a7[cC]] === lb && (cs += cj[en]);
		return cs
	}
}

function lc() {
	function li(lV, fo, min, max) {
		return min + (lV * fo + 137) % (max - min)
	}
	this.fx = function(ld, le) {
		for (var lg = 1, cC = 0; cC <= 10; cC++) lg = function(lg, ld, le, cu) {
			for (var cx = 65536 + (lg * cu + 7 & 16383), cC = 0; cC < cx; cC++) lg = 1 + lg * ld % le;
			return lg
		}(lg, ld, le, cC), ld = li(ld, lg, 16384, 65536), le = li(le, lg, 1 << 18, 1 << 20);
		return lg - 1 & 65535
	}
}

function lj() {
	this.lk = function(dv, e6) {
		return Math.floor((dv + .5) / e6)
	}, this.ll = function(dv, e6) {
		return Math.floor(dv * (e6 + .5))
	}, this.sqrt = function(lV) {
		return ~~Math.sqrt(lV + .5)
	}, this.pow = function(dB) {
		return Math.floor(Math.pow(2, dB) + .5)
	}, this.kM = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.lm = function(dC, dD, ke) {
		return Math.max(Math.min(dC, dD), ke)
	}, this.ln = function(lo, lp, ca, cb) {
		ca -= lo, lo = cb - lp, cb = 0;
		return 0 == ca ? cb = 0 <= lo ? Math.PI : 0 : (cb = Math.atan(lo / ca), cb += 0 < ca ? .5 * Math.PI : 1.5 * Math.PI), cb
	}, this.log2 = function(lV) {
		return Math.floor(!!lV * (1 + Math.log2(lV + .5)))
	}
}

function lr() {
	this.ls = function(g1) {
		var username = fa.hr.data[122].value.slice(0, 20),
			username = (eV.af(22 + 16 * username.length + 18), eV.eW(1, 0), eV.eW(6, 1), eV.eW(10, lt), bS.eb.ec(username), cR.color.lv(fa.bT.lw()));
		eV.eW(6, username[0]), eV.eW(6, username[1]), eV.eW(6, username[2]), bS.bT.fm = g1, bS.bT.send(g1, eV.eX)
	}, this.lx = function(ly) {
		return eV.af(11), eV.eW(1, 0), eV.eW(6, 2), eV.eW(4, ly), bS.bT.send(bS.bT.fm, eV.eX), !0
	}
}

function lz(m0, m1, js) {
	var m2, cC, m3 = new Array(m1.length),
		hc = new Array(m1.length);
	for (this.resize = function() {
			for (var cx = m1.length, cC = 0; cC < cx; cC++) 0 < cC && cR.cU.m8(m3[cC], 8)
		}, m2 = document.createElement("div"), m0.style.overflowX = "hidden", m0.style.overflowY = "auto", ! function() {
			var cC, c1, cx = m1.length;
			for (cC = 0; cC < cx; cC++) {
				m3[cC] = document.createElement("div"), m3[cC].style.display = "flex", m3[cC].style.width = "100%", m3[cC].style.height = "2.5em", m3[cC].style.backgroundColor = cC % 2 == 0 ? cd.m6 : cd.m7, hc[cC] = new Array(m1[0].length);
				for (var dv = 0; dv < m1[0].length; dv++) hc[cC][dv] = c1 = document.createElement("div"), c1.style.display = "flex", c1.style.width = "100%", c1.style.height = "100%", c1.style.justifyContent = "center", c1.style.alignItems =
					"center", c1.innerHTML = m1[cC][dv], 0 < dv && cR.cU.m8(c1, 4), m3[cC].appendChild(c1)
			}
		}(), cC = 0; cC < m1.length; cC++) m2.appendChild(m3[cC]);
	m0.appendChild(m2)
}

function m9() {
	this.mA = function(bt, im) {
		return Number(this.mB(bt, im))
	}, this.mB = function(bt, im) {
		var lV = null;
		return 0 === bJ.id ? bJ.mC && (lV = bJ.mC.getItem((im ? "v" : "d") + bt)) : 1 === bJ.id ? lV = bJ.mD.loadString((im ? 1e3 : 2e3) + bt) : 2 === bJ.id && (lV = bJ.mE[(im ? "v" : "d") + bt]), lV && 0 !== lV.length ? lV : null
	}, this.save = function(bt, value, im) {
		0 === bJ.id ? bJ.mC && fa.hr.data[140].value && bJ.mC.setItem((im ? "v" : "d") + bt, value) : 1 === bJ.id ? bJ.mD.saveString((im ? 1e3 : 2e3) + bt, value) : 2 === bJ.id && (bJ.mE["d" + bt] = value, bJ.mF.postMessage((im ? "v" : "d") +
			bt + " " + value))
	}
}

function hg(title, mG, backgroundColor, mH) {
	var mJ, self, mI = document.createElement("button");

	function mM() {
		if (!1 !== mH) {
			var mP = cR.color.mQ(mJ);
			if (0 < mP[0] && mP[0] < 255 && mP[0] === mP[1] && mP[0] === mP[2]) return
		}
		this.style.backgroundColor = cR.color.mM(mJ, 50)
	}

	function mO() {
		this.style.backgroundColor = mJ
	}

	function mN() {
		this.style.backgroundColor = mJ, this.blur()
	}
	this.button = mI, this.hy = mG, this.mK = function(gk) {
			mJ = gk, mI.style.backgroundColor = gk
		}, self = this, mI.innerHTML = title, mI.style.color = cd.co, mI.style.userSelect = "none", mI.style.outline = "none", mI.style.overflowWrap = "break-word", self.mK(backgroundColor || cd.mL), mI.style.border = "none", mI.style.font =
		"inherit", mI.style.fontSize = "1em", mI.style.padding = "0em 0.3em", mI.onclick = mG, mI.addEventListener("mouseover", mM), mI.addEventListener("mouseout", mN), mI.addEventListener("focus", mM), mI.addEventListener("blur", mO)
}

function mR() {
	var ha, mS, mT, mU, mV, mW, colors = [0, 0, 0],
		mX = -1;

	function mi(cC) {
		var mk = mS.cb + cC * (c3.gap + mW);
		cc.fillStyle = "rgb(" + (0 === cC ? 150 : 2 === cC ? 30 : 0) + "," + (1 === cC ? 130 : 2 === cC ? 30 : 0) + "," + (2 === cC ? 220 : 0) + ")", cc.fillRect(mU, mk, colors[cC] * mV, mW), cc.strokeStyle = cd.co, cc.strokeRect(mU, mk, mV, mW), cc
			.fillStyle = cd.co, cc.font = cR.cU.cV(0, .32 * mW), cR.cU.textBaseline(cc, 1), cR.cU.textAlign(cc, 0), cc.fillText((0 === cC ? "Red: " : 1 === cC ? "Green: " : "Blue: ") + mZ(cC), mU + c3.gap, mk + .53 * mW)
	}

	function mZ(cC, ml) {
		return ml = ml || 256, kL.kM(Math.floor(ml * colors[cC]), 0, ml - 1)
	}

	function mm(c6, c7) {
		return !(c6 < mU || c7 < mS.cb || c6 > mS.ca + mS.bg || c7 > mS.cb + mS.bh)
	}
	this.show = function() {
		var lV = fa.hr.data[121].value;
		colors[0] = (lV >> 12) / 63, colors[1] = (lV >> 6 & 63) / 63, colors[2] = (63 & lV) / 63, ha.show(), this.resize()
	}, this.cB = function() {
		fa.fb.fc(121, (mZ(0, 64) << 12) + (mZ(1, 64) << 6) + mZ(2, 64)), ha.cB()
	}, this.resize = function() {
		ha.resize(), mS.resize();
		var gk = c0.ma,
			mb = ha.mc(),
			me = (mS.cb = Math.max(mS.cb, gk * mb.md + c3.gap), gk * mb.mf - 2 * c3.gap);
		mS.bh = Math.min(mS.bh, me), mS.bg = 2 * mS.bh, mS.cb = gk * mb.md + .5 * (gk * mb.mf - mS.bh), mS.ca = .5 * (c0.bg - mS.bg), mT = .25 * mS.bg, mU = mS.ca + mT + c3.gap, mV = mS.bg - mT - c3.gap, mW = (mS.bh - 2 * c3.gap) / 3
	}, this.cY = function() {
		var gu, mj, e6;
		ha.cY(), cc.lineWidth = c3.mg, gu = mZ(0), mj = mZ(1), e6 = mZ(2), cc.fillStyle = "rgb(" + gu + "," + mj + "," + e6 + ")", cc.fillRect(mS.ca, mS.cb, mT, mS.bh), cc.strokeStyle = cd.co, cc.strokeRect(mS.ca, mS.cb, mT, mS.bh), cc
			.fillStyle = gu + mj + e6 < 306 && mj < 150 ? cd.co : cd.l6, cR.cU.textBaseline(cc, 1), cR.cU.textAlign(cc, 1), cc.font = cR.cU.cV(0, .1 * mS.bh), cc.rotate(-Math.PI / 2), cc.fillText("National Color", -mS.cb - .5 * mS.bh, mS.ca +
				.5 * mT), cc.setTransform(1, 0, 0, 1, 0, 0), mi(0), mi(1), mi(2)
	}, this.c5 = function(c6, c7) {
		mm(c6, c7) && (mX = kL.kM(Math.floor((c7 - mS.cb) / (mW + .75 * c3.gap)), 0, 2), colors[mX] = kL.kM((c6 - mU) / mV, 0, 1), bE.bI = !0)
	}, this.cM = function(c6) {
		-1 !== mX && (colors[mX] = kL.kM((c6 - mU) / mV, 0, 1), bE.bI = !0)
	}, this.mn = function(c6, c7, deltaY) {
		mm(c6, c7) && (c6 = kL.kM(Math.floor((c7 - mS.cb) / (mW + .75 * c3.gap)), 0, 2), colors[c6] = kL.kM(colors[c6] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bE.bI = !0)
	}, this.mo = function() {
		0 <= mX && (mX = -1, bE.bI = !0)
	}, this.hw = function(gk) {
		2 === gk && ha.hx[0].hy()
	}, ha = new hd("Choose Your Nation's Color!", [new hg("❌ " + he.hf[92], function() {
		bZ.bT.ii()
	})], !1), mS = new mY([.5, .25], [.5, .5], 1)
}

function l8() {
	this.jm = function(gl) {
		bO.n ? aO.kf.jm(bO.g, gl) : bS.fz.mp(gl)
	}, this.jr = function(js, dg) {
		az.mq(), bO.n ? aO.kf.jr(bO.g, js, dg) : bS.fz.mr(js, dg)
	}, this.k4 = function(js, k0) {
		az.mq(), bO.n ? aO.kf.jz(bO.g, js, k0) : bS.fz.ms(js, k0)
	}, this.k5 = function(js, gl) {
		bO.n ? aO.kf.k5(bO.g, js, gl) : ac.jV.mt(bO.g, gl) && bS.fz.mu(js, gl)
	}, this.kC = function(kD, gl) {
		bO.n ? aO.kf.kC(bO.g, kD, gl) : ac.jV.mv(bO.g, kD, gl) && bS.fz.mw(kD, gl)
	}, this.kH = function(dg) {
		bO.n ? aO.kf.kH(bO.g, dg) : bS.fz.mx(dg)
	}, this.my = function(kK) {
		bO.n ? aO.kf.kJ(bO.g, kK) : bS.fz.mz(kK)
	}, this.kO = function(kP) {
		bO.n ? aO.kf.kO(bO.g, kP) : bS.fz.n0(kP)
	}, this.il = function() {
		bO.n ? aO.kf.il(bO.g) : bS.fz.n1()
	}
}

function n2() {
	this.n3 = function(size) {
		for (var n4 = gR, cr = [], cC = 0; cC < size; cC++) cr.push(String.fromCharCode(n4.kT(16)));
		return cr.join("")
	}, this.n5 = function(f8) {
		return 20 < (f8 = f8.trim()).length ? f8.substring(0, 20) : f8
	}
}

function n6() {
	this.n7 = function() {
		for (var en, cx = kd, a7 = lU, et = aN.et, gO = this.n8(), cC = 0; cC < cx; cC++) en = a7[cC], aZ.n9(en) && (et[en] = gO);
		var jR = aN.jR,
			dX = aN.dX,
			dY = aN.dY,
			jS = aN.jS,
			cx = bO.h;
		for (cC = 0; cC < cx; cC++)(0 === jS[cC] || dY[cC] < 1 || 2 * jR[cC] > 3 * (dX[cC] + dY[cC])) && (et[cC] = 0);
		var nA = 0;
		for (cC = 0; cC < cx; cC++) nA += 0 < et[cC];
		return nA
	}, this.n8 = function() {
		return Math.min(65535, bE.dK())
	}
}

function nB() {
	var nC, nD, nE, gW, nF, bt = 0,
		dH = bE.dH;

	function nO() {
		! function() {
			if (!bO.s) return;
			if (bO.n) return;
			return nF % 7 != 0 ? nF++ : gW === bO.a0 ? (nS(), aw.nU(gW), bO.y.fx()) : (nS(), nF++, gW++, b8.nV(), b8.bP(!0)), 1
		}() && (nS(), nT())
	}

	function nQ() {
		bt = 0, (bO.s ? (bE.bI = aw.nU(gW - (nF % 7 == 0 ? 0 : 1) + nF % 7 / 7) || bE.bI, nW) : ax.bc || !at.bd ? nW : (bE.bI = !0, nX))()
	}

	function nS() {
		var cC, cx, nY = ai.jp.nZ,
			dC = ai.jp.na,
			dD = ai.jp.nb,
			ke = ai.jp.nc,
			nd = ai.jp.ne,
			nf = ai.jp.ng;
		if (nC >= nf.length) az.nh("Replay file smaller than expected."), eq.ni.nj(-1);
		else if (nf = nf[nC], nd[nC]) {
			for (cx = nD + nf, cC = nD; cC < cx; cC++) aO.aP.kU(nY[cC], dC[cC], dD[cC], ke[cC]);
			nD += nf, nC++
		} else ++nE >= nf && (nC++, nE = 0)
	}
	this.nG = 0, this.aM = function() {
		nF = gW = nE = nD = nC = 0
	}, this.fx = function() {
		var nM;
		c0.fx(), at.nH() < 1.7 ? 0 === bt ? bE.dH >= dH && (nM = bE.dI / at.nH(), dH += nM * Math.floor(1 + (bE.dH - dH) / nM), 2 === bO.p || ax.bc || !at.bd ? nN() : (nO(), aW.nP()), bt++) : nQ() : function() {
			var nM;
			if (bE.dH >= dH)
				if (2 === bO.p || ax.bc || !at.bd) nN(), dH = bE.dH;
				else {
					for (nM = bE.dI / at.nH(), 16 < (bE.dH - dH) / nM && (dH = bE.dH - 16 * nM); bE.dH >= dH && 2 !== bO.p;) dH += nM, nO();
					aW.nP()
				} nQ()
		}(), nK(), bE.bI && (bE.bI = !1, nL())
	}, this.nk = function() {
		nC !== ai.jp.ng.length && nC + 1 !== ai.jp.ng.length && az.nh("Replay file larger than expected.")
	}
}

function aF() {
	this.dc = function(player, gl) {
		ag.nl(player, ab.nm(gl), ab.nn(gl)) && (bE.bI = !0), bO.n && this.fx()
	}, this.fx = function() {
		bO.s = !1;
		for (var cC = 0; cC < bO.h; cC++) 0 !== aN.bN[cC] && 0 === aN.d0[cC] && ag.no(cC);
		0 !== aN.bN[bO.g] ? (aS.cz[7] = aN.d0[bO.g], aS.cz[8] = aN.dj[bO.g], ar.np(), aw.nq(), bO.o || bL.nr(aN.eJ[bO.g] - 5, aN.eM[bO.g] - 5, aN.eI[bO.g] + 5, aN.eL[bO.g] + 5), bH.aM()) : b2.show(!1, !1, !1, !0), az.ns(18), b8.nV(), b8.bP(!0),
			al.bT.nt(), bO.y = null, aW.nu = !0, aW.nv(), bO.n && bJ.bK.setState(1)
	}
}

function nw() {
	this.nx = new Uint16Array(2), this.dd = new Uint32Array(2), this.ny = new Uint32Array(2), this.nz = new Uint8Array(4), this.o0 = new Uint8Array(4), this.o1 = new Uint32Array(5), this.dT = new Uint32Array(8), this.o2 = new Uint16Array(512), this
		.o3 = function(cr, dC) {
			return cr[0] = dC, cr
		}, this.o4 = function(cr, dC, dD) {
			return cr[0] = dC, cr[1] = dD, cr
		}, this.o5 = function(cr, dC, dD, ke) {
			return cr[0] = dC, cr[1] = dD, cr[2] = ke, cr
		}, this.o6 = function(cr, dC, dD, ke, o7) {
			return cr[0] = dC, cr[1] = dD, cr[2] = ke, cr[3] = o7, cr
		}
}

function o8() {
	var o9, oA, oB, oC, oD, oE, oF, oG, oH, kl, fontSize, kq, oI, fy, oJ = 0;

	function oM() {
		return bS.bT.fh[(oI + oJ) % bS.bT.fg]
	}

	function oK() {
		oI++, kq = bE.dH, bS.bT.fu(oM(), 4) && (fy = !0, bS.oN.ls(oM()))
	}

	function oP() {
		0 === oI ? gF.gG(3249) : (oI === bS.bT.fg - 1 && (oI = -1), oK())
	}

	function ob(cb, oZ, oa) {
		var dM = Math.floor((c0.bg - oC) / 2) + oF,
			dO = dM + Math.floor(oa * (oC - 2 * oF));
		cc.lineWidth = oZ, cc.beginPath(), cc.moveTo(dM, cb), cc.lineTo(dO, cb), cc.lineTo(Math.floor(dM - oF + oa * oC), cb + oB), cc.lineTo(dM - oF, cb + oB), cc.closePath()
	}
	this.aM = function() {
		bY.setState(6), o9 = 0, oA = 1, oG = "rgba(0,220,120,0.4)", oH = "rgba(0,0,0,0.8)", this.resize(), bE.bI = !0, oI = 0, fy = !1, oK()
	}, this.resize = function() {
		oC = Math.floor((bJ.bK.c2() ? .5 : .25) * c0.ge), oD = oC + 12, oB = Math.floor(.125 * oC), oF = 3 * oB, oE = Math.floor(.225 * oC), fontSize = Math.floor(.3 * oB), kl = cR.cU.cV(0, fontSize)
	}, this.oL = function(dv) {
		oJ = dv
	}, this.oO = function(g1) {
		g1 === oM() && (fy = !1, oP())
	}, this.oQ = function(g1) {
		6 !== bY.gB() || fy || (kq = bE.dH, fy = !0)
	}, this.c5 = function(ca, cb) {
		var dM = Math.floor((c0.bg - oD) / 2),
			dN = Math.floor(.5 * (c0.bh - c3.gap - oB - oE)) + oB + c3.gap;
		return dM < ca && ca < dM + oD && dN < cb && cb < dN + oE && (this.oS(), oT.cM(ca, cb, !1), !0)
	}, this.oS = function() {
		bS.bT.gH(3260), bZ.bT.oU()
	}, this.fx = function() {
		6 === bY.gB() && (fy ? bE.dH > kq + 12e3 && gF.gG(3250) : bE.dH > kq + 12e3 && oP(), 100 < (o9 += .07 * oA * (o9 < 16 ? 5 + o9 : 84 < o9 ? 105 - o9 : 17)) ? (o9 = 100, oA = -1) : o9 < 0 && (o9 = 0, oA = 1), oG = "rgba(0," + Math.floor(
			190 - 1.9 * o9) + "," + Math.floor(120 - 1.2 * o9) + "," + (.4 + .004 * o9) + ")", oH = "rgba(0," + Math.floor(1.9 * o9) + "," + Math.floor(1.2 * o9) + "," + (.8 - .004 * o9) + ")", bE.bI = !0)
	}, this.cY = function() {
		var ca = Math.floor((c0.bg - oD) / 2),
			cb = Math.floor(.5 * (c0.bh - c3.gap - oB - oE));
		! function(title, cb, oZ, oa) {
			cc.fillStyle = oH, ob(cb, oZ, 1), cc.fill(), cc.fillStyle = oG, ob(cb, oZ, oa), cc.fill(), cc.strokeStyle = cd.co, ob(cb, oZ, 1), cc.stroke(),
				function(od, cb) {
					cR.cU.textAlign(cc, 1), cR.cU.textBaseline(cc, 1), cc.font = kl, cc.fillStyle = cd.co, cc.fillText(od, Math.floor(.5 * c0.bg), Math.floor(cb + .58 * oB))
				}(title, cb)
		}("Loading", cb, 3, o9 / 100),
		function(ca, cb, bg, bh, hf) {
			cc.fillStyle = cd.oY, cc.fillRect(ca, cb, bg, bh), cc.lineWidth = 3, cc.strokeStyle = cd.co, cc.strokeRect(ca, cb, bg, bh);
			var cx = Math.floor(.3 * bh);
			cR.cU.textAlign(cc, 1), cR.cU.textBaseline(cc, 1), cc.font = cR.cU.cV(0, cx), cc.fillStyle = cd.co, cc.fillText(hf, Math.floor(ca + bg / 2), Math.floor(cb + bh / 2 + .1 * cx))
		}(ca, cb + oB + c3.gap, oD, oE, "Back")
	}
}

function oe() {
	this.og = ["n", "en", "r"], this.hf = ["Akzeptieren", "Du hast {0} ausgelöscht.", "Du wurdest von {0} ausgelöscht.", "Herzlichen Glückwunsch! Du hast das Spiel gewonnen.", "{0} hat das Spiel gewonnen.", "{0} hat den Nichtangriffspakt gebrochen.",
		"{0} greift dich an!", "Wähle deine Startposition!", "Du hast aufgegeben!", "Das Spiel endete in einem Patt!", "Fehler: {0}", "New Game Update", "{0} wurde verewigt!", "Neutrales Land {0}",
		"Spieler: {0}   Bilanz: {1}   Territorium: {2}   Koordinaten: {3}", "Gebirge {0}", "Wasser {0}", "Schiffseigner: {0}   Stärke: {1}", " Nachricht an {0}: ", "{0}: ", "Die Menschheit triumphiert. Die Untoten wurden zurückgedrängt.",
		"Der Widerstand", "Die Ära der Menschheit endet, überrannt von den Untoten.", "Das Virus", "Die Zustimmung zum Frieden beendet das Spiel in einem Patt!", "Du hast einen Nichtangriffspakt mit {0} geschlossen.",
		"Du hast {0} gebeten, einen Nichtangriffspakt zu unterzeichnen.", "{0} hat den Nichtangriffspakt akzeptiert.", "{0} hat einen Nichtangriffspakt angefordert.", "Du bittest {0} Spieler, {1} anzugreifen.", "Du bittest {0}, {1} anzugreifen.",
		"{0} bittet dich, {1} anzugreifen.", "Deine Bilanz ist zu niedrig!", "Du hast {0} Ressource{20} an {1} exportiert.", "Eine Steuer von {0} Einheit{40} wurde abgezogen.", "{0} unterstützt dich mit {1} Ressource{21}.",
		"Ein Bot ({0}) unterstützt dich mit {1} Ressource{21}.", "Karte: {0}", "Dimension: {0}x{1}", "Gesamtpixel: {0}", "Land: {0} ({1})", "Wasser: {0} ({1})", "Gebirge: {0} ({1})", "Angriffe gegen menschliche Spieler sind limitiert.",
		"{0} und {1} weitere{61} Spieler wurden ausgelöscht.", "{0} und {1} weitere{61} Spieler haben das Spiel verlassen.", "{0} und {1} weitere{61} Spieler haben aufgegeben.", "{0} wurde von {1} ausgelöscht.", "{0} hat das Spiel verlassen.",
		"{0} hat aufgegeben.", "{0} ist dem Spiel beigetreten.", "{1006}Keine Serverantwort", "{3231}Konto erfolgreich gespeichert!", "{3232}Konto", "{3249}Keine Server gefunden", "{3252}Danke für die Abstimmung.",
		"{3265}Bitte akzeptiere Cookies", "{3266}Ungültiges Passwortformat", "{3605}Ungültiges Replayformat", "{4207}Lobby-Timeout", "{4214}Ungültiger Benutzername", "{4224}Lobby Error", "{4229}Keine Client-Antwort", "Undefiniert", "Fehler",
		"BESTENLISTE", "DU BESIEGTEST", "DU WURDEST AUSGELÖSCHT VON", "DAS SPIEL WURDE GEWONNEN VON", "KARTE:", "Menschen", "Spieler", "Bots", "Zuschauer", "Schwelle", "Besetzung", "Zinsen", "Einkommen", "Zeit", "Beenden", "Mehr",
		"Einstellungen", "Replay", "Links", "Spielversion", "Daten löschen", "Datenschutzeinstellungen", "Schließen", "Spielstatistiken", "Kapitulieren", "Spiel neustarten", "Menü", "Zurück", "Alles auswählen", "Kopieren", "Löschen", "Starten",
		"Speichern & Schließen", "Zurücksetzen", "Information",
		"Eine erhöhte Auflösung, die Verkleinerung der minimalen Schriftgröße und die Beschleunigung der Textdarstellung können Ihr System belasten und die Spielreaktionsfähigkeit beeinträchtigen.", "Sprache", "Auflösung", "Mobilfreundlich",
		"Schriftart", "Benutzernamen ausblenden", "Bilanz oben anzeigen", "Zoom-Tasten ausblenden", "Minimale Schriftgröße", "Lobby", "Textdarstellungsgeschwindigkeit", "Niedrig", "Mittel", "Hoch", "Sehr hoch", "Klein", "Sehr klein",
		"Proxy-Lobby", "Langsam", "Normal", "Schnell", "Aktiviert", "Neues Spiel-Update", "Das Spiel wurde aktualisiert! Bitte lade das Spiel neu.", "Neu laden", "Mein Konto", "Konto löschen", "", "",
		"Wenn Frieden geschlossen wird, gewinnt die Partei mit dem größten Territorium."
	]
}

function mY(oh, oi, oj) {
	this.ca = 0, this.cb = 0, this.bg = 0, this.bh = 0, this.resize = function() {
		this.bh = Math.min(cR.cU.ok(oj || .5) * oh[1] * c0.ge, c0.bh - 2 * c3.gap), this.bg = Math.min(this.bh * (oh[0] / oh[1]), c0.bg - 2 * c3.gap), this.bh = oh[1] * this.bg / oh[0], this.ca = c3.gap + oi[0] * (c0.bg - this.bg - 2 * c3.gap),
			this.cb = c3.gap + oi[1] * (c0.bh - this.bh - 2 * c3.gap)
	}, this.ol = function() {
		return this.ca + .5 * this.bg
	}
}

function om() {
	var ha, j9;

	function oo() {
		bW.ow.hideCMPButton(), bZ.ba(0);
		var f8 = ai.ox(j9.jG());
		(0 < f8.length && f8 === ai.jp.os || ai.oz.p0(f8)) && ai.oy()
	}
	this.show = function(oq) {
		this.or(oq), ha.show(), this.resize()
	}, this.or = function(oq) {
		0 === bO.p ? (oq = oq || j9.jG(), j9.jE(oq)) : (bO.o || (ai.jp.os = ai.ot.ou()), j9.jE(ai.ov(ai.jp.os)))
	}, this.cB = function() {
		ha.cB()
	}, this.resize = function() {
		ha.resize(), j9.resize()
	}, this.hw = function(gk) {
		2 === gk ? ha.hx[0].hy() : oo()
	}, ha = new hd("▶️ " + he.hf[82], [new hg("❌ " + he.hf[92], function() {
		bZ.on()
	}, cd.j5), new hg("🔲 " + he.hf[93], function() {
		j9.jH()
	}), new hg("📋 " + he.hf[94], function() {
		j9.jI()
	}), new hg("🗑️ " + he.hf[95], function() {
		j9.clear()
	}), new hg("▶️ " + he.hf[96], function() {
		oo()
	}, cd.op)]), j9 = new j8("replayData", "Insert the replay link here!"), ha.hm.appendChild(j9.jA)
}

function p1() {
	this.og = [], this.hf = ["Zaakceptuj", "Usunąłeś {0}.", "Zostałeś usunięty przez {0}.", "Gratulacje! Wygrałeś grę.", "{0} wygrał grę.", "{0} złamał pakt o nieagresji.", "{0} atakuje Cię!", "Wybierz swoją pozycję startową!", "Poddałeś się!",
		"Gra zakończyła się remisem!", "Błąd: {0}", "", "{0} został uwieczniony!", "Niezajęta ziemia {0}", "Gracz: {0}   Saldo: {1}   Terytorium: {2}   Współrzędne: {3}", "Góry {0}", "Woda {0}", "Właściciel statku: {0}   Siła: {1}",
		"Wiadomość do {0}: ", "{0}: ", "Ludzkość triumfuje! Nieumarli zostali odparci.", "Opor", "Era ludzkości dobiegła końca, przeważona przez nieustające fale nieumarłych.", "Wirus",
		"Jeśli zostanie uzgodniony pokój, gra zakończy się remisem.", "Podpisałeś pakt o nieagresji z {0}.", "Poprosiłeś {0} o podpisanie paktu o nieagresji.", "{0} zaakceptował pakt o nieagresji.", "{0} zaproponował pakt o nieagresji.",
		"Poprosiłeś {0} graczy o atak na {1}.", "Poprosiłeś {0} o atak na {1}.", "{0} zasugerował atak na {1}.", "Twoje saldo jest zbyt niskie!", "Wyeksportowałeś {0} zasobów do {1}.", "Pobrano podatek od {0} jednostek.",
		"{0} wsparł Cię {1} zasobami.", "Bot ({0}) wsparł Cię {1} zasobami.", "Mapa: {0}", "Wymiary: {0}x{1}", "Całkowita liczba pikseli: {0}", "Teren: {0} ({1})", "Woda: {0} ({1})", "Góry: {0} ({1})",
		"Pełne atakowanie graczy ludzkich jest wyłączone.", "{0} oraz {1} innych graczy zostało usuniętych.", "{0} oraz {1} innych graczy opuściło grę.", "{0} oraz {1} innych graczy poddało się.", "{0} został usunięty przez {1}.",
		"{0} opuścił grę.", "{0} poddał się.", "{0} dołączył do gry.", "{1006}Brak odpowiedzi serwera", "{3231}Konto zostało pomyślnie zapisane!", "{3232}Konto", "{3249}Nie znaleziono serwerów", "{3252}Dziękujemy za głos.",
		"{3265}Proszę zaakceptuj ciasteczka", "{3266}Nieprawidłowy format hasła", "{3605}Nieprawidłowy format powtórki", "{4207}Przekroczenie czasu oczekiwania w lobby", "{4214}Nieprawidłowa nazwa użytkownika", "{4224}Błąd lobby",
		"{4229}Brak odpowiedzi klienta", "Nieokreślony", "Błąd", "TABLICA WYNIKÓW", "WYELIMINOWAŁEŚ", "ZOSTAŁEŚ WYELIMINOWANY PRZEZ", "GRA WYGRANA PRZEZ", "MAPA:", "Ludzie", "Gracze", "Boty", "Widzowie", "Próg", "Zajęcie", "Odsetki", "Dochód",
		"Czas", "Opuść grę", "Więcej", "Ustawienia", "Powtórka", "Linki", "Wersja gry", "Usuń dane", "Ustawienia prywatności", "Zamknij", "Statystyki gry", "Poddaj się", "Wymuś restart gry", "Menu", "Powrót", "Zaznacz wszystko", "Kopiuj",
		"Wyczyść", "Uruchom", "Zapisz i zamknij", "Resetuj", "Informacje", "Zwiększanie rozdzielczości, zmniejszanie minimalnego rozmiaru czcionki i przyspieszanie renderowania tekstu mogą obciążać system i wpływać na responsywność gry.",
		"Język", "Rozdzielczość", "Przyjazny dla urządzeń mobilnych", "Czcionka", "Ukryj nazwy użytkowników", "Umieść saldo na górze", "Ukryj przyciski powiększania", "Minimalny rozmiar czcionki", "Lobby", "Szybkość renderowania tekstu", "Niska",
		"Średnia", "Wysoka", "Bardzo wysoka", "Mała", "Bardzo mała", "Lobby pośredniczone", "Wolne", "Normalne", "Szybkie", "Włączone", "Nowa aktualizacja gry", "Gra została zaktualizowana! Proszę przeładować grę.", "Przeładuj", "Moje konto",
		"Usuń konto", "", "", "Jeśli zostanie uzgodniony pokój, gracz z największym terytorium wygrywa grę."
	]
}

function p2(title, p3, p4) {
	var ha, p5;
	this.show = function() {
		ha.show(), this.resize()
	}, this.cB = function() {
		ha.cB()
	}, this.resize = function() {
		ha.resize(), p5.resize()
	}, this.hw = function(gk) {
		2 === gk && ha.hx[0].hy()
	}, p4 = p4 || [new hg("❌ " + he.hf[92], function() {
		bZ.on()
	}, cd.j5)], ha = new hd(title, p4), p5 = new p6(ha.hm, p3), cR.cU.textAlign(ha.hm.style, 1)
}

function p7(data) {
	var ha, p8, p9, mT, pA, pB, pC, colors, pD, pE, cN, pP, pQ, pF = 0,
		pG = 0,
		pH = !1,
		pI = !1,
		pJ = [1, 5, 60, 240, 1440, 10080, 43200];

	function pv(c6, c7) {
		! function(c6, c7) {
			return p8 < c6 && c6 < p8 + mT && p9 < c7 && c7 < p9 + pA
		}(pF = c6, pG = c7) ? (pH && (bE.bI = !0), pH = !1) : (pH = !0, bE.bI = !0)
	}
	this.show = function() {
		pI = fa.hr.data[127].value, ha.show(), this.resize()
	}, this.cB = function() {
		ha.cB()
	}, this.resize = function() {
		ha.resize();
		var gk = c0.ma,
			mb = ha.mc(),
			pU = gk * mb.mf,
			gk = gk * mb.md;
		pB = cR.cU.pV(.06), pC = cR.cU.pV(.04), p8 = cR.cU.pV(.06), p9 = gk + pB, mT = c0.bg - p8 - pC, pA = pU + gk - p9 - pC
	}, this.cY = function() {
		ha.cY(),
			function() {
				var cC, pY, pZ, ca, dv, cr = data.data,
					pa = 1,
					pb = .125,
					pc = pI ? 65536 : 0;
				for (cC = 0; cC < cr.length; cC++)
					for (pY = cr[cC].pY, pZ = pY.length, pa = Math.max(pZ, pa), dv = 0; dv < pZ; dv++) pb = Math.max(pY[dv], pb), pc = Math.min(pY[dv], pc);
				var dN = p9 + pA,
					pd = pA / (pb - pc),
					pe = 1 / (pa - 1);
				for (cc.lineWidth = c3.mg, cC = 0; cC < cr.length; cC++) {
					for (pY = cr[cC].pY, pZ = pY.length, ca = p8, cc.beginPath(), cc.moveTo(ca + mT, dN - pd * (pY[pZ - 1] - pc)), dv = pZ - 2; 0 <= dv; dv--) cc.lineTo(ca + pe * dv * mT, dN - pd * (pY[dv] - pc));
					cc.strokeStyle = colors[cC], cc.stroke()
				}(function(pc, pb, dN, pd) {
					cc.font = cR.cU.cV(0, .25 * p8), cR.cU.textBaseline(cc, 1), cR.cU.textAlign(cc, 2), cc.fillStyle = colors[0];
					for (var ca = .92 * p8, cC = 0; cC < 3; cC++) {
						var lV = pc + cC * (pb - pc) / 2;
						cc.fillText((lV / 1e3).toFixed(3), ca, dN - pd * (lV - pc))
					}
				})(pc, pb, dN, pd),
				function(pa) {
					var cb = p9 + pA + .15 * pC;
					cc.font = cR.cU.cV(0, .4 * pC), cR.cU.textBaseline(cc, 0), cR.cU.textAlign(cc, 2), cc.fillStyle = colors[0], cc.fillText(cR.pN.ph(pD), p8 + mT, cb), cR.cU.textAlign(cc, 0), cc.fillText(cR.pN.ph(new Date(pE.getTime() - 6e4 * (
						pa - 1) * pJ[data.ee])), p8, cb)
				}(pa),
				function(pa, pc, pb) {
					if (pH && !(pa < 2)) {
						for (var ps, bt = (pF - p8) / mT * (pa - 1), pi = Math.floor(bt), pj = Math.floor(1 + bt), pk = bt - pi, pl = 1e5, pm = -1, pn = -1, po = pb - (pb - pc) * (pG - p9) / pA, cr = data.data, cC = 0; cC < cr.length; cC++) {
							var pp, pY = cr[cC].pY;
							pY.length <= pj || (pY = pY[pi] + pk * (pY[pj] - pY[pi]), (pp = Math.abs(po - pY)) < pl && (pl = pp, pm = cC, pn = pY))
						} - 1 !== pm && (pb = p9 + pA - (pn - pc) / (pb - pc) * pA, cc.lineWidth = .5 * c3.mg, cc.strokeStyle = colors[pm], cc.beginPath(), cc.moveTo(p8, pb), cc.lineTo(pF, pb), cc.lineTo(pF, p9 + pA), cc.stroke(), cc.beginPath(),
							cc.arc(pF, pb, .1 * p8, 0, 2 * Math.PI), cc.fillStyle = colors[pm], cc.fill(), pc = p9 + pA + .15 * pC, cR.cU.textAlign(cc, 1), ps = pa - 2 < bt ? (ps = pE.getTime() - 6e4 * pJ[data.ee], new Date(ps + (bt - (pa -
								2)) * (pD.getTime() - ps))) : new Date(pE.getTime() - 6e4 * (pa - bt - 1) * pJ[data.ee]), pa = cR.pN.ph(ps), bt = cR.cU.measureText(pa), ps = kL.kM(pF, p8 + .5 * bt, p8 + mT - .5 * bt), cc.fillStyle = cR.color
							.pT(70, 50, 20), cc.fillRect(ps - .52 * bt, p9 + pA, 1.04 * bt, .55 * pC), cc.fillStyle = colors[0], cc.fillText(pa, ps, pc), cc.font = cR.cU.cV(0, .25 * p8), cR.cU.textBaseline(cc, 1), cR.cU.textAlign(cc, 2), ps =
							.92 * p8, pa = (pn / 1e3).toFixed(3), bt = cR.cU.measureText(pa), pc = ps - 1.04 * bt, cc.fillStyle = cR.color.pT(70, 50, 20), cc.fillRect(pc, pb - .1625 * p8, p8 - pc, .275 * p8), cc.fillStyle = colors[pm], cc
							.fillText(pa, ps, pb))
					}
				}(pa, pc, pb)
			}(), cc.lineWidth = c3.mg, cc.strokeStyle = cd.co, cc.beginPath(), cc.moveTo(p8, p9), cc.lineTo(p8, p9 + pA), cc.lineTo(p8 + mT, p9 + pA), cc.stroke();
		var cC, fontSize = .5 * pB,
			cr = (cc.font = cR.cU.cV(0, fontSize), cR.cU.textBaseline(cc, 1), cR.cU.textAlign(cc, 0), data.data),
			cx = cr.length,
			cb = p9 - .5 * pB,
			f8 = "";
		for (cC = 0; cC < cx; cC++) f8 += cr[cC].name + "  ";
		f8 = f8.trim();
		var d6 = cR.cU.measureText(f8),
			ca = .5 * (c0.bg - d6);
		for (d6 > c0.bg && (ca = 0, cc.font = cR.cU.cV(0, c0.bg / d6 * fontSize)), cC = 0; cC < cx; cC++) cc.fillStyle = colors[cC], cc.fillText(cr[cC].name, ca, cb), ca += cR.cU.measureText(cr[cC].name + "  ")
	}, this.c5 = function(c6, c7) {
		pv(c6, c7)
	}, this.cM = function(c6, c7) {
		pv(c6, c7)
	}, this.hw = function(gk) {
		2 === gk && ha.hx[0].hy()
	}, cN = new Date, pP = 6e4 * cN.getTimezoneOffset(), pQ = cN.getTime() - pP, pD = new Date(pQ), 6 === data.ee ? function(cN, pP) {
		var pS = cN.getUTCFullYear(),
			cN = cN.getUTCMonth() + 1;
		pE = cN < 12 ? new Date(Date.UTC(pS, cN) - pP) : new Date(Date.UTC(pS + 1, 0) - pP)
	}(cN, pP) : (pP = 6e4 * pJ[data.ee], pE = data.ee <= 4 ? new Date(pQ + pP - cN.getTime() % pP) : new Date(pQ + pP - (cN.getTime() + 2592e5) % pP)), pQ = cR.color, colors = [cd.co, pQ.pT(255, 0, 0), pQ.pT(0, 200, 0), pQ.pT(80, 80, 255), pQ.pT(
		255, 255, 0), pQ.pT(255, 0, 255), pQ.pT(0, 255, 255), pQ.pT(255, 140, 0), pQ.pT(128, 128, 128), pQ.pT(0, 255, 140)], ha = new hd("Clan Chart, " + fa.hr.data[125].pM[data.ee] + ", " + cR.pN.pO(pD), [new hg("❌ " + he.hf[92], function() {
		bZ.bT.ii()
	}), new hg("🛠️ Custom", function() {
		bZ.ba(14)
	})], !1)
}

function pw() {
	this.kv = null, this.aM = function() {
		var px = [120, 105, 92],
			cos = [12, 12, 60],
			py = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			pz = [140, 130, 120],
			q0 = [12, 12, 76],
			q1 = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			q2 = [130, 117, 106],
			q3 = [12, 12, 68],
			q4 = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.kv = new Array(cJ.q5 + 1), this.kv[0] = {
			name: "White Arena",
			bg: 230,
			bh: 230,
			q6: 1e3,
			q7: 2e3,
			fo: 173
		}, this.kv[1] = {
			name: "Black Arena",
			bg: 800,
			bh: 800,
			q6: 100,
			q7: 50,
			fo: 43
		}, this.kv[2] = {
			name: "Island",
			bg: 512,
			bh: 512,
			q6: 128,
			q7: 32,
			fo: 0
		}, this.kv[3] = {
			name: "Mountains",
			bg: 960,
			bh: 960,
			q6: 60,
			q7: 8,
			fo: 0
		}, this.kv[4] = {
			name: "Desert",
			bg: 900,
			bh: 900,
			q6: 100,
			q7: 5,
			fo: 0
		}, this.kv[5] = {
			name: "Swamp",
			bg: 1e3,
			bh: 1e3,
			q6: 100,
			q7: 40,
			fo: 0
		}, this.kv[6] = {
			name: "Snow",
			bg: 1e3,
			bh: 1e3,
			q6: 100,
			q7: 20,
			fo: 0
		}, this.kv[7] = {
			name: "Cliffs",
			bg: 1024,
			bh: 1024,
			q6: 128,
			q7: 32,
			fo: 0
		}, this.kv[8] = {
			name: "Pond",
			bg: 820,
			bh: 820,
			q6: 200,
			q7: 100,
			fo: 0
		}, this.kv[9] = {
			name: "Halo",
			bg: 1024,
			bh: 1024,
			q6: 128,
			q7: 32,
			fo: 0
		}, this.kv[10] = {
			name: "Europe",
			q8: pz,
			q9: q0,
			qA: q1
		}, this.kv[11] = {
			name: "World",
			q8: q2,
			q9: q3,
			qA: q4
		}, this.kv[12] = {
			name: "Caucasia",
			q8: q2,
			q9: q3,
			qA: q4
		}, this.kv[13] = {
			name: "Africa",
			q8: px,
			q9: cos,
			qA: py
		}, this.kv[14] = {
			name: "Middle East",
			q8: px,
			q9: cos,
			qA: py
		}, this.kv[15] = {
			name: "Scandinavia",
			q8: pz,
			q9: q0,
			qA: q1
		}, this.kv[16] = {
			name: "North America",
			q8: pz,
			q9: q0,
			qA: q1
		}, this.kv[17] = {
			name: "South America",
			q8: px,
			q9: cos,
			qA: py
		}, this.kv[18] = {
			name: "Asia",
			q8: q2,
			q9: q3,
			qA: q4
		}, this.kv[19] = {
			name: "Australia",
			q8: px,
			q9: cos,
			qA: py
		}, this.kv[20] = {
			name: "Island Kingdom",
			bg: 1024,
			bh: 1024,
			q6: 128,
			q7: 32,
			fo: 0
		}, this.kv[cJ.q5] = {}
	}
}

function qB() {
	function qI(title, qJ, dB) {
		qF(dB), bZ.ba(4, 5, new is("⚠️ " + title, qJ, !0))
	}

	function qF(dB) {
		! function(dB) {
			var qE = bY.gB();
			0 !== qE && (6 === qE ? bS.bT.gH(dB) : 7 === qE ? (qL.qM(), bS.bT.close(bS.bT.fm, 3256)) : 8 === qE && bO.bQ(!0))
		}(dB), bZ.bT.oU()
	}
	this.gK = function(g1, dB) {
		if (8 === bZ.fS && 0 === g1) bZ.ba(4, 0, new is("⚠️ " + he.qC(64), he.qD(dB), !0));
		else {
			var qE = bY.gB();
			if (6 === qE) {
				if (4211 === dB) return qF(dB), void bZ.ba(4, 5, new is("🚀 " + he.hf[122], he.hf[123], !0, [new hg("❌ " + he.hf[92], function() {
					bZ.on()
				}, cd.j5), new hg("🔄 " + he.hf[124], function() {
					bJ.bK.qG()
				}, cd.hh)]));
				if (4214 !== dB) return void qH.oO(g1)
			} else {
				if (7 !== qE) return 8 === qE ? void(g1 !== bS.bT.eu || bO.n || 1 !== bO.p || az.nh(he.qD(dB))) : void 0;
				if (g1 !== bS.bT.fm) return
			}
			qI(he.qC(64), he.qD(dB), dB)
		}
	}, this.gG = function(dB) {
		8 === bY.gB() ? bO.n || 1 !== bO.p || az.nh(he.qD(dB)) : qI(he.qC(64), he.qD(dB), dB)
	}
}

function qN() {
	var qO, qP, bg, ca, cb, qQ, qR;
	this.aM = function() {
		qO = new Array(2), qP = new Array(2), this.qS = !1, qR = qQ = cI = cF = 0, cG = 1, this.resize()
	}, this.resize = function() {
		bg = (bg = Math.floor((bJ.bK.c2() ? .072 : .0502) * c0.ge)) < 8 ? 8 : bg;
		for (var cC = 1; 0 <= cC; cC--) qO[cC] = document.createElement("canvas"), qO[cC].width = bg, qO[cC].height = bg, qP[cC] = qO[cC].getContext("2d", {
			alpha: !0
		});
		this.qT(),
			function() {
				for (var qr = Math.floor(1 + bg / 20), cC = 1; 0 <= cC; cC--) qP[cC].clearRect(0, 0, bg, bg), qP[cC].fillStyle = cd.fY, qP[cC].beginPath(), qP[cC].arc(bg / 2, bg / 2, bg / 2 - qr, 0, 2 * Math.PI), qP[cC].fill(), qP[cC].lineWidth =
					qr, qP[cC].fillStyle = cd.co, qP[cC].strokeStyle = cd.co, qP[cC].beginPath(), qP[cC].arc(bg / 2, bg / 2, bg / 2 - qr, 0, 2 * Math.PI), qP[cC].stroke(), qs(qP[cC], 0, 0, bg, qr, .3, 0 === cC)
			}()
	}, this.hM = function() {
		return -cF / cG
	}, this.hN = function() {
		return -cI / cG
	}, this.qY = function(qZ, qa) {
		cF = cG * qZ - qa
	}, this.qb = function(qc, qd) {
		cI = cG * qc - qd
	}, this.c5 = function(qW, qX) {
		return bO.r || ! function(qW, qX) {
			return Math.pow(qW - (ca + bg / 2), 2) + Math.pow(qX - (cb + bg / 2), 2) < bg * bg / 4 || Math.pow(qW - (ca + bg / 2), 2) + Math.pow(qX - (cb + 2 * bg), 2) < bg * bg / 4
		}(qW, qX) || fa.hr.data[8].value ? (bL.h3() && (this.qS = !0, qQ = qW, qR = qX), !1) : qX < cb + 1.25 * bg ? this.mn(Math.floor(c0.bg / 2), Math.floor(c0.bh / 2), -200) : this.mn(Math.floor(c0.bg / 2), Math.floor(c0.bh / 2), 200)
	}, this.cM = function(qW, qX) {
		var qe, qf, gm, gn;
		return !bL.h3() || (qe = cF, qf = cI, cF += gm = qQ - qW, cI += gn = qR - qX, b8.cM(gm, gn), this.qg(), qQ = qW, qR = qX, qe !== cF) || qf !== cI
	}, this.mn = function(c6, c7, deltaY) {
		var gd;
		if (bL.h3()) {
			if (0 < deltaY) gd = (gd = 500 / (500 + deltaY)) < .5 ? .5 : gd;
			else {
				if (!(deltaY < 0)) return !1;
				gd = 2 < (gd = (500 - deltaY) / 500) ? 2 : gd
			}
			this.qh(c6, c7, gd), bE.bI = !0
		}
		return !0
	}, this.qh = function(ca, cb, cu) {
		var ct;
		cu = ct = (ct = 1024 < (ct = cu) * cG ? 1024 / cG : ct) * cG < .125 ? .125 / cG : ct, b8.zoom(cu, ca, cb),
			function(ct, c6, c7) {
				cG *= ct, cF = (cF + c6) * ct - c6, cI = (cI + c7) * ct - c7, aq.qg()
			}(cu, ca, cb)
	}, this.qg = function() {
		var qk = c0.bg / 16,
			ql = 0,
			qm = c0.bh / 16,
			qn = 0;
		cF < -c0.bg + qk && (ql = -c0.bg + qk - cF), cF > cG * cJ.cK - qk && (ql = cG * cJ.cK - qk - cF), cI < -c0.bh + qm && (qn = -c0.bh + qm - cI), cI > cG * cJ.cL - qm && (qn = cG * cJ.cL - qm - cI), cF += ql, cI += qn, qo.qp(), b8.qq(ql, qn)
	}, this.qT = function() {
		ca = c0.bg - bg - c3.gap, cb = Math.floor(c0.bh / 2 - 1.25 * bg)
	}, this.cY = function() {
		fa.hr.data[8].value || (cc.drawImage(qO[0], ca, cb), cc.drawImage(qO[1], ca, Math.floor(cb + 3 * bg / 2)))
	}
}

function qt() {
	e3 = 8, e0 = 0, e2 = new Uint16Array(e3)
}

function aY() {
	da = bO.u ? new Uint8Array(bO.b) : null
}

function qu(player, dh) {
	var lQ;
	bO.u && (da[player] = 0), !b7.jw(player) || dh < 60 || (0 === aN.dl[player].length ? ac.jh.fx(player) || (ad.qv(player - bO.h, 200), qw(player, dh, ad.dh[player - bO.h], aX.lR(player))) : 0 < aN.jP[player].length && aJ.random() < aJ.value(aN.jP[
		player].length > aN.dl[player].length ? 7 : 3) && ac.jh.fx(player) || (lQ = aX.lR(player), aN.dj[player] > lQ && dh < aN.dj[player] - lQ && (dh = aN.dj[player] - lQ), bO.u ? qx(player, dh, ad.dh[player - bO.h], lQ) : qy(player, dh, ad
		.dh[player - bO.h])))
}

function qx(player, dh, qz, lQ) {
	var dg;
	dt(player, !1) || e4(player, !1) ? (da[player] = 1, e7(player) || (e5() ? (r0(player, dh), r1(player, bO.b, qz)) : (aJ.r2(ad.r3[qz]) ? r4(player, dh, dg = eB(player)) : (e9() && aJ.r2(ad.r5[qz]) && eA(), r4(player, dh, dg = eF(player))), r1(
		player, dg, qz)))) : 0 < aN.jP[player].length && aJ.random() < aJ.value(60) && ac.jh.fx(player) || (ad.qv(player - bO.h, 200), qw(player, dh, qz, lQ))
}

function r6(player, dh) {
	dt(player, !1) || e4(player, !1) ? (da[player] = 1, e5() ? r0(player, dh) : r4(player, dh, eP())) : qw(player, dh, 0, 0)
}

function r1(player, dg, qz) {
	3 <= qz && 2142 < bE.dK() && (dg === bO.b || aN.dj[dg] < cA(aN.dj[player], 20)) && ad.qv(player - bO.h, 25)
}

function qw(player, dh, qz, lQ) {
	var cC, e6, gk;
	if (0 !== aR.eo[player] && !(5 === qz && aN.dj[player] < lQ || 4 === qz && aN.dj[player] < cA(lQ, 2)))
		for (cC = aJ.dz(kd), e6 = 0; e6 < kd; e6++)
			if (gk = lU[(e6 + cC) % kd], aR.eo[gk] === aR.eo[player] && 1 === da[gk]) return void aO.lA.r7(player, gk, dh)
}

function qy(player, dh, qz) {
	!dt(player, !0) && !e4(player, !0) || e7(player) || (e5() ? r0(player, dh) : aJ.r2(ad.r3[qz]) ? r4(player, dh, eB(player)) : (e9() && aJ.r2(ad.r5[qz]) && eA(), r4(player, dh, eF(player))))
}

function r8(player, dh) {
	(dt(player, !0) || e4(player, !0)) && (e5() ? r0(player, dh) : r4(player, dh, eP()))
}

function r4(player, dh, dg) {
	cA(aN.dj[player], 8) > aN.dj[dg] && (dh = (r9 = cA(11 * aN.dj[dg], 5)) < dh ? dh : r9);
	var r9 = aN.dU[player].length;
	dW(player, dg), df(player, dg, r9, dh)
}

function r0(player, dh) {
	var dg = bO.b,
		cx = aN.dU[player].length;
	return dV(player), aN.dU[player].length !== cx && (df(player, dg, cx, dh), !0)
}

function rA() {
	this.size = 0, this.bt = 0, this.eX = null, this.aM = function(eX) {
		this.bt = 0, this.eX = eX, this.size = eX.length
	}, this.qM = function() {
		this.eX = null
	}, this.kT = function(size) {
		for (var lV = 0, eX = this.eX, h3 = this.bt + size - 1, cC = this.bt; cC <= h3; cC++) lV |= (eX[cC >> 3] >> 7 - (7 & cC) & 1) << h3 - cC;
		return this.bt += size, this.bt > 8 * this.size && console.log("error unwrapper"), lV
	}, this.rB = function(size) {
		var e6 = size >> 1;
		return (1 << e6) * this.kT(size - e6) + this.kT(e6)
	}, this.rC = function(size) {
		for (var cr = new Array(size), cC = 0; cC < size; cC++) cr[cC] = this.kT(10);
		return fq.p0(cr)
	}, this.rD = function(rE) {
		return this.size === eV.rF(rE)
	}
}

function rG() {
	var rH, rI, rJ, rK, rL, rM, rN, hc, rP, rR, rS, rT, rW, rX, rY, rZ, ra, rO = 48,
		rU = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
		rV = [0, 0, 0, 0];

	function rf(cC, kK) {
		cC = rN[cC].getContext("2d", {
			alpha: !0
		});
		cC.clearRect(0, 0, rO, rO), fO.fP.rl(kK, cC, 0, 0, rO)
	}

	function re(cC, gp) {
		var cC = rN[cC].getContext("2d", {
				alpha: !0
			}),
			zoom = (cC.clearRect(0, 0, rO, rO), rO / gp.width),
			cN = rO / gp.height,
			zoom = cN < zoom ? cN : zoom;
		cC.imageSmoothingEnabled = !0, cC.setTransform(zoom, 0, 0, zoom, Math.floor((rO - zoom * gp.width) / 2), Math.floor((rO - zoom * gp.height) / 2)), cC.drawImage(gp, 0, 0), cC.setTransform(1, 0, 0, 1, 0, 0)
	}

	function rp(gk, gu, rs, gq) {
		gq.beginPath(), gq.moveTo(gk, gk), gq.lineTo(gk + Math.cos(rs) * gu, gk + Math.cos(rs + 1.5 * Math.PI) * gu), gq.stroke()
	}

	function sB() {
		if (7 === bY.gB()) {
			for (var sC, gp, gq, zoom, cN, dv = -1, cC = hc.length - 1; 0 <= cC; cC--)
				if (null === hc[cC].ex) {
					dv = cC;
					break
				} - 1 !== dv && (null !== (sC = rz(hc[dv].s2, hc[dv].s3)) ? hc[dv].ex = sC : (sC = {
					cK: cJ.cK,
					cL: cJ.cL,
					sD: cJ.sD,
					sE: cJ.sE,
					sF: cJ.sF,
					sG: cJ.sG,
					kw: cJ.kw,
					s0: cJ.s0
				}, cJ.af(hc[dv].s2, hc[dv].s3), cJ.sH.sI(), (gp = document.createElement("canvas")).width = 128, gp.height = 128, gq = gp.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / cJ.cK) < (cN = 128 / cJ.cL) && (zoom = cN), gq.imageSmoothingEnabled = !0, gq.setTransform(zoom, 0, 0, zoom, (128 - zoom * cJ.cK) / 2, (128 - zoom * cJ.cL) / 2), gq.drawImage(cJ.sD, 0, 0), cJ.cK = sC.cK, cJ
				.cL = sC.cL, cJ.sD = sC.sD, cJ.sE = sC.sE, cJ.sF = sC.sF, cJ.sG = sC.sG, cJ.kw = sC.kw, cJ.s0 = sC.s0, hc[dv].ex = gp), bE.bI = !0)
		}
	}

	function rz(s2, s3) {
		for (var cC = hc.length - 1; 0 <= cC; cC--)
			if (null !== hc[cC].ex && hc[cC].s2 === s2 && hc[cC].s3 === s3) return hc[cC].ex;
		return null
	}
	this.aM = function() {
		var cC;
		for (ra = 0, rR = -1, bY.setState(7), hc = [], this.resize(), rN = new Array(13), cC = rN.length; 0 <= cC; cC--) rN[cC] = document.createElement("canvas"), rN[cC].width = rO, rN[cC].height = rO;
		for (cC = 0; cC < 7; cC++) ! function(pZ) {
			var rn, gq = rN[pZ - 2].getContext("2d", {
					alpha: !0
				}),
				rm = 1.5 * Math.PI,
				gk = Math.floor(.5 * rO),
				gu = Math.floor(.48 * rO);
			gq.lineWidth = 2, gq.strokeStyle = cd.co, gq.clearRect(0, 0, rO, rO);
			for (var cC = 0; cC < pZ; cC++) rn = rm + 2 * Math.PI / pZ,
				function(cC, gk, gu, rm, rn, gq) {
					gq.fillStyle = aR.rr[cC], gq.beginPath(), gq.arc(gk, gk, gu, rm, rn), gq.lineTo(gk, gk), gq.fill()
				}(cC + 1, gk, gu, rm, rn, gq), 0 !== cC && rp(gk, gu, rm, gq), rm = rn;
			rp(gk, gu, 1.5 * Math.PI, gq),
				function(gk, gu, gq) {
					gq.beginPath(), gq.arc(gk, gk, gu, 0, 2 * Math.PI), gq.stroke()
				}(gk, gu, gq)
		}(cC + 2);
		re(7, gc.get(4)), rf(8, fO.rg.rh + fO.rg.ri), rf(9, fO.rg.rh + fO.rg.rj), rf(10, 1024 - fO.rg.rk), re(11, gc.get(19)), re(12, gc.get(20)), bE.bI = !0
	}, this.rc = function() {
		this.qM(), bS.bT.gH(3240), bY.setState(0), bZ.ba(5, 5)
	}, this.qM = function() {
		hc = [], rN = []
	}, this.rt = function() {
		return rT
	}, this.resize = function() {
		var ru, rv, ps, rw;
		for (rJ = [0, 0], rP = [0, 0, 0, 0], rZ = bJ.bK.c2() ? (rS = Math.floor(.8 * .4 * c0.ge), rT = Math.floor(.56 * rS), rP[0] = c3.gap, c0.bg < c0.bh ? (rP[1] = rT + 2 * c3.gap, rP[2] = c0.bg - 3 * rP[0], rP[3] = c0.bh - 3 * c3.gap - rT,
				rX = Math.floor(.95 * rT), rY = Math.floor((c0.bg - rS - c3.gap) / 2), Math.floor(c3.gap + rT / 2)) : (rP[1] = c3.gap, rP[2] = c0.bg - 3 * c3.gap - rS, rP[3] = c0.bh - 2 * c3.gap, rX = Math.floor(.8 * rS), rP[3] - rT < rS && (
				rX = Math.floor(.8 * (rP[3] - rT)), rX = rx(rT, rX)), rY = Math.floor(c0.bg - rS / 2 - c3.gap), rx(rZ = Math.floor(c3.gap + rT + (rP[3] - rT) / 2), Math.floor(rT + 2 * c3.gap + rX / 2)))) : (rS = Math.floor(.2016 * c0.ge), rT =
				Math.floor(.56 * rS), rP[2] = Math.floor(.5 * c0.bg), rP[3] = Math.floor(.5 * c0.bh), rP[1] = Math.floor(.45 * (c0.bh - rP[3])), rP[0] = Math.floor((c0.bg - rP[2]) / 2), rX = Math.floor(.75 * rT), rY = Math.floor(c0.bg / 2), Math
				.floor(rP[1] + rP[3] + (c0.bh - rP[3] - rP[1]) / 2)), rW = cR.cU.cV(1, .65 * rT / 4), ru = rv = 1; ru * rv < hc.length;) rP[3] / (rv + 1) < rP[2] / (ru + 1) ? ru++ : rv++;
		ps = (rP[2] - (ru - 1) * c3.gap) / ru, rw = (rP[3] - (rv - 1) * c3.gap) / rv, rH = ps < rw ? ps : rw, rI = Math.floor(rH), rM = cR.cU.cV(1, .5 * rH / 5), rJ[0] = ru, rJ[1] = rv, rK = rP[0] + Math.floor((rP[2] - rJ[0] * rH - (rJ[0] - 1) *
			c3.gap) / 2), rL = rP[1] + Math.floor((rP[3] - rJ[1] * rH - (rJ[1] - 1) * c3.gap) / 2)
	}, this.fc = function(ry, en) {
		var cC, cN, ex, cx = hc.length;
		for (rV = ry, cC = 0; cC < en.length; cC++) ex = rz(en[cC].kw, en[cC].s0), hc.push({
			ly: en[cC].id,
			a8: en[cC].a8,
			a9: en[cC].s1,
			s2: en[cC].kw,
			s3: en[cC].s0,
			joined: en[cC].s4,
			s5: en[cC].oa,
			s6: en[cC].s6,
			ex: ex,
			s7: en[cC].s7,
			s8: en[cC].s8,
			s9: en[cC].s9
		});
		for (cC = cx - 1; 0 <= cC; cC--) hc.shift();
		if (-1 !== rR)
			for (cN = rR, rR = -1, cC = hc.length - 1; 0 <= cC; cC--)
				if (hc[cC].ly === cN) {
					rR = cN;
					break
				}(hc.length > ra || hc.length < ra) && (ra = hc.length, this.resize()), this.sA(), bE.bI = !0
	}, this.sA = function() {
		for (var cC = hc.length - 1; 0 <= cC; cC--) null === hc[cC].ex && setTimeout(sB, 0)
	}, this.c5 = function(ca, cb) {
		return 4 * ((ca - rY) * (ca - rY) + (cb - rZ) * (cb - rZ)) <= rX * rX ? (this.rc(), oT.cM(ca, cb, !1), !0) : function(ca, cb) {
			var dv, e6, dM, dN;
			if (0 !== hc.length) {
				var cC = 0;
				for (dN = rL, e6 = 0; e6 < rJ[1]; e6++) {
					for (dM = rK, dv = 0; dv < rJ[0]; dv++) {
						if (dM < ca && ca < dM + rH && dN < cb && cb < dN + rH) return bS.oN.lx(hc[cC].ly), rR = hc[cC].ly !== rR ? hc[cC].ly : -1, bE.bI = !0;
						if (++cC >= hc.length) return !1;
						dM += rH + c3.gap
					}
					dN += rH + c3.gap
				}
			}
			return !1
		}(ca, cb)
	}, this.cY = function() {
		var dv, e6, ca, gu, zoom, cC = 0,
			cb = rL;
		if (cc.imageSmoothingEnabled = !0, cc.lineWidth = 3, gu = Math.floor(.5 * rX), cc.fillStyle = cd.oY, cc.beginPath(), cc.arc(rY, rZ, gu, 0, 2 * Math.PI), cc.fill(), cc.strokeStyle = cd.co, cc.beginPath(), cc.arc(rY, rZ, gu, 0, 2 * Math
			.PI), cc.stroke(), gu = gc.get(0).height, zoom = .6 * rX / gu, cc.setTransform(zoom, 0, 0, zoom, Math.floor(rY - .56 * zoom * gc.get(0).width), Math.floor(rZ - .5 * zoom * gu)), cc.drawImage(gc.get(0), 0, 0), cc.setTransform(1, 0, 0,
				1, 0, 0),
			function() {
				cc.fillStyle = cd.oY, cc.fillRect(c0.bg - rS - c3.gap, c3.gap, rS, rT), 0 <= rR ? (cc.fillStyle = cd.sN, cc.fillRect(c0.bg - rS - c3.gap, c3.gap, rS, Math.floor(.25 * rT))) : (cc.fillStyle = cd.sO, cc.fillRect(c0.bg - rS - c3.gap,
					c3.gap + Math.floor(.25 * rT), rS, Math.floor(.25 * rT)));
				cc.strokeStyle = cd.co, cc.strokeRect(c0.bg - rS - c3.gap, c3.gap, rS, rT), cc.fillStyle = cd.co, cc.font = rW, cR.cU.textBaseline(cc, 1);
				for (var cb, sP = Math.floor(.04 * rS), sQ = Math.floor(.08 * rT), cC = 3; 0 <= cC; cC--) cb = Math.floor(c3.gap + (cC + 1) * (rT + 2 * sQ) / 5 - sQ), cR.cU.textAlign(cc, 0), cc.fillText(rU[cC], c0.bg - rS - c3.gap + sP, cb), cR
					.cU.textAlign(cc, 2), cc.fillText(cR.cS.cT(rV[cC]), c0.bg - c3.gap - sP, cb)
			}(), 0 !== hc.length)
			for (e6 = 0; e6 < rJ[1]; e6++) {
				for (ca = rK, dv = 0; dv < rJ[0]; dv++) {
					if (! function(cC, ca, cb) {
							var zoom, e6, sR, sT, sU;
							null === hc[cC].ex ? (cc.fillStyle = cd.oY, cc.fillRect(ca, cb, rI, rI)) : (zoom = rI / 128, cc.setTransform(zoom, 0, 0, zoom, ca, cb), cc.drawImage(hc[cC].ex, 0, 0), cc.setTransform(1, 0, 0, 1, 0, 0));
							rR === hc[cC].ly ? (function(ca, cb) {
								var bi = Math.floor(.2 * rI),
									bj = Math.floor(.3 * bi);
								cc.fillStyle = cd.sV, cc.fillRect(ca + rI - bi, cb, bi, bi), cc.fillStyle = cd.l6, cc.fillRect(ca + rI - bi, cb, 2, bi), cc.fillRect(ca + rI - bi, cb + bi - 2, bi, 2), ax.cn(ca + rI - bi + bj, cb + bj, bi -
									2 * bj), cc.setTransform(1, 0, 0, 1, 0, 0)
							}(ca, cb), cc.lineWidth = 3, cc.fillStyle = cd.sV) : cc.fillStyle = cd.fY;
							sT = Math.floor(rH / 4), cc.fillRect(ca, cb, sT, sT), sU = Math.floor(cb + .8 * rH), cc.fillRect(ca, sU, rI, Math.floor(rH / 5)),
								function(cC, ca, cb) {
									var zoom;
									hc[cC].a9 && (cC = gc.get(4), zoom = .5 * rH / cC.width, cc.setTransform(zoom, 0, 0, zoom, Math.floor(ca + (rH - zoom * cC.width) / 2), Math.floor(cb + (rH - zoom * cC.height) / 2)), cc.globalAlpha = .6, cc
										.drawImage(cC, 0, 0), cc.globalAlpha = 1, cc.setTransform(1, 0, 0, 1, 0, 0))
								}(cC, ca, cb);
							var sX = new Array(hc[cC].s7);
							if (hc[cC].s7) {
								for (e6 = sR = 0; e6 < hc[cC].s7; e6++) hc[cC].s8[e6] = cR.kp.sY(hc[cC].s8[e6], rM, .4 * rH), sX[e6] = ("" === hc[cC].s8[e6] ? "other: " : "[" + hc[cC].s8[e6] + "]: ") + hc[cC].s9[e6];
								for (e6 = 0; e6 < hc[cC].s7; e6++) sR = Math.max(sR, ay.measureText(sX[e6], rM));
								sR += .05 * rH, e6 = 5 === hc[cC].s7, sT = e6 ? cb + sT : Math.max(cb + .8 * rH - .11 * hc[cC].s7 * rH, cb + sT), sU = e6 ? sU : Math.min(sT + .11 * hc[cC].s7 * rH + .05 * rH, sU), cc.fillRect(ca, sT, sR, sU - sT)
							}
							for (cc.font = rM, cR.cU.textBaseline(cc, 1), cR.cU.textAlign(cc, 0), cc.fillStyle = cd.sZ, cc.fillText(hc[cC].joined.toString(), Math.floor(ca + .22 * rH), Math.floor(cb + .9 * rH)), cc.fillStyle = cd.co, e6 = 0; e6 <
								hc[cC].s7; e6++) cc.fillText(sX[hc[cC].s7 - e6 - 1], Math.floor(ca + .03 * rH), Math.floor(cb + .77 * rH - .11 * e6 * rH));
							cR.cU.textAlign(cc, 2), cc.fillStyle = cd.sa, cc.fillText(hc[cC].s5.toString(), Math.floor(ca + .81 * rH), Math.floor(cb + .9 * rH)), cc.strokeStyle = rR === hc[cC].ly ? cd.cp : cd.sb, cc.strokeRect(ca, cb, rI, rI),
								sU = Math.floor(.16 * rH), zoom = sU / rO, cc.setTransform(zoom, 0, 0, zoom, Math.floor(ca + .33 * sU), Math.floor(cb + .33 * sU)), rN.length > hc[cC].a8 && cc.drawImage(rN[hc[cC].a8], 0, 0);
							cc.setTransform(zoom, 0, 0, zoom, Math.floor(ca + .15 * sU), Math.floor(cb + rH - 1.08 * sU)), cc.drawImage(rN[11], 0, 0), cc.setTransform(zoom, 0, 0, zoom, Math.floor(ca + rH - 1.05 * sU), Math.floor(cb + rH - 1.15 *
								sU)), cc.drawImage(rN[12], 0, 0), cc.setTransform(1, 0, 0, 1, 0, 0)
						}(cC, Math.floor(ca), Math.floor(cb)), ++cC >= hc.length) return;
					ca += rH + c3.gap
				}
				cb += rH + c3.gap
			}
	}
}

function sc() {
	function sp() {
		cJ.sH.fx()
	}

	function sx(en, sw) {
		0 < sw && (cJ.sG[en] += sw, cJ.sG[en + 1] += sw, cJ.sG[en + 2] += sw)
	}

	function hQ(en) {
		return cJ.sG[en + 2] > cJ.sG[en] && cJ.sG[en + 2] > cJ.sG[en + 1]
	}
	this.sd = -1, this.qE = 0, this.se = 0, this.sf = 8, this.sg = 32, this.sh = 8, this.si = 32, this.sj = [0, 0], this.sk = [0, 0, 0, 0], this.jc = null, this.sl = !0, this.sm = !1, this.sI = function() {
		-1 !== this.sd && clearTimeout(this.sd), this.sd = -1, this.jc = null, sn.so()
	}, this.aM = function() {
		7 === bY.gB() || this.sm || (this.sl = !0, this.qE = 0, this.se = 1, this.sj = [cJ.aD.kv[cJ.kw].q8[0], cJ.aD.kv[cJ.kw].q9[0]], this.sk = [cJ.aD.kv[cJ.kw].qA[3], cJ.aD.kv[cJ.kw].qA[4], cJ.aD.kv[cJ.kw].qA[5], cJ.aD.kv[cJ.kw].qA[6]], this
			.sf = cJ.aD.kv[cJ.kw].qA[7], this.sg = cJ.aD.kv[cJ.kw].qA[8], this.sh = cJ.aD.kv[cJ.kw].qA[9], this.si = cJ.aD.kv[cJ.kw].qA[10], this.sl ? this.sd = setTimeout(sp, 16) : this.fx())
	}, this.fx = function() {
		if (8 === bY.gB() && bL.sq()) this.sd = setTimeout(sp, 16);
		else {
			if (0 === this.qE) {
				var fo = aJ.fp();
				if (aJ.aK(cJ.aD.kv[cJ.kw].qA[2]), sn.af([cJ.cK, cJ.cL, cJ.aD.kv[cJ.kw].qA[0], cJ.aD.kv[cJ.kw].qA[1]]), aJ.aK(fo), this.jc = sn.sr(), this.qE++, this.sl) return void(this.sd = setTimeout(sp, 16))
			}
			for (var en, gl, fo = this.sl ? 10 : 1e6, fo = cJ.cL - this.se - 1 < fo ? cJ.cL - this.se - 1 : fo, ss = this.se + fo, cb = this.se; cb < ss; cb++)
				for (var ca = 1; ca < cJ.cK - 1; ca++) hQ(en = 4 * (gl = ca + cb * cJ.cK)) ? this.st(en, gl, 1) : (this.st(en, gl, 0), function(ca, cb, en) {
					return 1 < ca && hQ(en - 4) || ca < cJ.cK - 2 && hQ(en + 4) || 1 < cb && hQ(en - 4 * cJ.cK) || cb < cJ.cL - 2 && hQ(en + 4 * cJ.cK)
				}(ca, cb, en) && this.sv(ca, cb));
			this.se = ss, this.se >= cJ.cL - 1 ? (cJ.sE.putImageData(cJ.sF, 0, 0, 1, 1, cJ.cK - 2, cJ.cL - 2), bE.bI = !0, this.sI()) : this.sl && (this.sd = setTimeout(sp, 16))
		}
	}, this.st = function(en, gl, bt) {
		sx(en, Math.floor(this.sj[bt] + this.sk[bt] * this.jc[gl] / 1e4) - cJ.sG[en])
	}, this.sy = function(en, gu, sz, bt, sk) {
		sx(en, Math.floor(this.sj[bt] + (1 - gu / sz) * sk) - cJ.sG[en])
	}, this.sv = function(c6, c7) {
		for (var en, gu, sz, t0 = c6 - this.sg, t1 = c7 - this.sg, t2 = c6 + this.sg, ss = c7 + this.sg, t0 = t0 < 1 ? 1 : t0, t2 = t2 > cJ.cK - 2 ? cJ.cK - 2 : t2, ss = ss > cJ.cL - 2 ? cJ.cL - 2 : ss, cb = t1 < 1 ? 1 : t1; cb <= ss; cb++)
			for (var ca = t0; ca <= t2; ca++) hQ(en = 4 * (ca + cb * cJ.cK)) ? (sz = this.sf + (this.sg - this.sf) * this.jc[ca + cJ.cK * cb] / 1e4, Math.abs(c6 - ca) > sz || Math.abs(c7 - cb) > sz || sz <= (gu = Math.sqrt((c6 - ca) * (c6 - ca) +
				(c7 - cb) * (c7 - cb))) || this.sy(en, gu, sz, 1, this.sk[3])) : (sz = this.sh + (this.si - this.sh) * this.jc[ca + cJ.cK * cb] / 1e4, Math.abs(c6 - ca) > sz || Math.abs(c7 - cb) > sz || sz <= (gu = Math.sqrt((c6 - ca) * (c6 -
				ca) + (c7 - cb) * (c7 - cb))) || this.sy(en, gu, sz, 0, this.sk[2]))
	}
}

function t3() {
	var ha, hb, hc;
	this.show = function() {
		ha.show(), this.resize()
	}, this.cB = function() {
		ha.cB()
	}, this.resize = function() {
		ha.resize(), hb.resize()
	}, this.hw = function(gk) {
		2 === gk && ha.hx[0].hy()
	}, ha = new hd("🛠️ Chart Options", [new hg("❌ " + he.hf[92], function() {
		bZ.t4(13)
	})]), hb = new hl(ha.hm, ((hc = []).push(function() {
		function tB() {
			var tC = .1 + (0 === tA.dB.value.length ? .1 : .01 * Math.min(tA.dB.value.split(",").length, 10));
			t9.button.innerHTML = cR.cS.tD(t9.button.innerHTML, tC)
		}
		var hn = new ho,
			t9 = (hn.hp("Search Terms"), hn.hq("Separate search terms with a comma."), new hg("Go (🧈 0.00)", function() {
				fa.fb.fc(130, 0), bZ.bT.ia()
			})),
			tA = new fV(fa.hr.data[126], 0, function() {
				t9.button.click()
			});
		hn.hu(tA), tA.dB.placeholder = "a,b,c", tA.dB.style.marginTop = "0.5em";
		return tA.dB.addEventListener("input", tB), tB(), hn.hu(new tE([t9.button])), hn
	}()), hc.push(function() {
		function tB() {
			eT = Math.floor(tG.dB.value), eU = Math.floor(tF.dB.value);
			var eU, eT = {
				tI: Math.min(eT, eU),
				tJ: Math.max(eT, eU)
			};
			t9.button.innerHTML = cR.cS.tD(t9.button.innerHTML, (eT.tJ - eT.tI + 1 + 10) / 100)
		}
		var hn = new ho,
			t9 = new hg("Go (🧈 0.00)", function() {
				fa.fb.fc(130, 1), bZ.bT.ia()
			}),
			tF = new fV(fa.hr.data[129], 1, function() {
				tF.dB.focus()
			}),
			tG = new fV(fa.hr.data[128], 1, function() {
				t9.button.click()
			});
		hn.hp("Start Index"), hn.hu(tG), tG.dB.style.marginBottom = "0.5em", hn.hp("End Index"), hn.hu(tF);
		return tG.dB.addEventListener("input", tB), tF.dB.addEventListener("input", tB), tB(), hn.hu(new tE([t9.button])), hn
	}()), hc.push(function() {
		var hn = new ho;
		return hn.hp("Timeframe"), hn.hs(new ht(fa.hr.data[125])), hn
	}()), hc.push(function() {
		var hn = new ho;
		return hn.hp("More Options"), hn.hu(new hv(fa.hr.data[127], fa.hr.data[127].title)), hn
	}()), hc))
}

function tL() {
	this.cU = new tM, this.tN = new tO, this.gv = new tP, this.cS = new tQ, this.kp = new tR, this.fD = new tS, this.ex = new tT, this.color = new tU, this.pN = new tV, this.aM = function() {
		this.cU.tW()
	}
}

function tX() {
	this.tY = function() {
		return 2 === bJ.id ? 4 : bJ.bK.c2() ? 2 : 1
	}
}

function ht(fW, tZ) {
	this.ta = [];
	var tb = this.ta;

	function click() {
		for (var cC = 0; cC < tb.length; cC++) tb[cC].textContent = tb[cC].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var bt = parseInt(this.name);
		fa.fb.fc(fW.bt, bt), tZ && tZ(bt)
	}
	for (var tc, cx = fW.pM.length, cC = 0; cC < cx; cC++)(tc = document.createElement("p")).textContent = "⚪ " + fW.pM[cC], tc.style.margin = "0", tc.name = "" + cC, tc.style.cursor = "pointer", tc.style.fontSize = "1em", tc.addEventListener(
		"click", click), tb.push(tc);
	tb[fW.value].textContent = tb[fW.value].textContent.replace("⚪", "🟢")
}

function td() {
	this.te = new tf, this.ei = new n2, this.aM = function() {
		this.te.aM()
	}
}

function tg() {
	var kh, th, kl, bh, oB;

	function tj(cC) {
		var tl = !0,
			sC = cd.co,
			bg = (kh[cC].dg === bO.b ? kh[cC].kp.fillStyle = cd.tm : (aZ.tn(kh[cC].dg), kh[cC].kp.fillStyle = cR.color.to(dS.nz[0], dS.nz[1], dS.nz[2], .87), 400 < cR.tN.tp(dS.nz, 0, 2) && (tl = !1, sC = cd.l6)), kh[cC].ex.width),
			bi = (kh[cC].kp.clearRect(0, 0, bg, bh), kh[cC].kp.fillRect(0, 0, bg, bh), kh[cC].kp.fillStyle = sC, ! function(kp, bg, bh) {
				kp.fillRect(0, 0, bg, 1), kp.fillRect(0, bh - 1, bg, 1), kp.fillRect(0, 0, 1, bh), kp.fillRect(bg - 1, 0, 1, bh)
			}(kh[cC].kp, bg, bh), th + 2 * bh < bg && (kh[cC].kp.fillRect(bg - th - bh, 0, 1, bh), kh[cC].kp.fillText(aN.jM[kh[cC].dg], Math.floor((bg - th) / 2), Math.floor(.57 * bh))), 0 !== kh[cC].id ? 0 : bh);
		kh[cC].kp.fillText(cR.cS.cT(kh[cC].dh), Math.floor(bg - th / 2 - bi), Math.floor(.57 * bh)),
			function(cC, bg, bi, tl) {
				kh[cC].kp.fillStyle = tl ? cd.sb : cd.tu;
				tl = Math.floor(th * kh[cC].dh / kh[cC].tv);
				kh[cC].kp.fillRect(Math.floor(bg - th - bi), bh - oB, tl, oB)
			}(cC, bg, bi, tl), 0 === kh[cC].id ? (ts(cC, bg, tl, sC), function(cC, bg, tl) {
				kh[cC].kp.strokeStyle = tl ? cd.ty : cd.tz, kh[cC].kp.fillRect(bh, 0, 1, bh);
				tl = bg - bh;
				kh[cC].kp.beginPath(), kh[cC].kp.moveTo(Math.floor(.3 * bh + tl), Math.floor(bh / 2)), kh[cC].kp.lineTo(Math.floor(bh - .3 * bh + 0 + tl), Math.floor(bh / 2)), kh[cC].kp.stroke(), kh[cC].kp.beginPath(), kh[cC].kp.moveTo(Math
					.floor(bh / 2 + tl), Math.floor(.3 * bh)), kh[cC].kp.lineTo(Math.floor(bh / 2 + tl), Math.floor(bh - .3 * bh + 0)), kh[cC].kp.stroke()
			}(cC, bg, tl)) : ts(cC, 2 * bh, tl, sC)
	}

	function ts(cC, bg, tl, sC) {
		kh[cC].kp.strokeStyle = kh[cC].tw ? cd.tx : tl ? cd.d4 : cd.d3, kh[cC].kp.fillStyle = sC, kh[cC].kp.fillRect(bg - bh, 0, 1, bh), kh[cC].kp.lineWidth = Math.max(Math.floor(bh / 12), 3), kh[cC].kp.lineCap = "round";
		tl = .35;
		bg = bh + 1, kh[cC].kp.beginPath(), kh[cC].kp.moveTo(Math.floor(bg - tl * bh + 0), Math.floor(tl * bh)), kh[cC].kp.lineTo(Math.floor(bg - bh + tl * bh), Math.floor(bh - tl * bh + 0)), kh[cC].kp.stroke(), kh[cC].kp.beginPath(), kh[cC].kp
			.moveTo(Math.floor(bg - bh + tl * bh), Math.floor(tl * bh)), kh[cC].kp.lineTo(Math.floor(bg - tl * bh + 0), Math.floor(bh - tl * bh + 0)), kh[cC].kp.stroke()
	}

	function uB(cx) {
		for (var dh, cC = cx - 1; 0 <= cC; cC--) dh = b7.hX(bO.g, cC), kh[cC].dh !== dh && (kh[cC].dh = dh, kh[cC].tv = dh > kh[cC].tv ? dh : kh[cC].tv, kh[cC].tk = !0)
	}

	function ti(uD) {
		uD.ex = document.createElement("canvas"), cJ.sE.font = kl;
		var bg = th;
		uD.dg < bO.b && 0 === uD.id && (bg += Math.floor(cJ.sE.measureText(aN.jM[uD.dg] + "000").width)), bg += bh, 0 === uD.id && (bg += bh), uD.ex.width = bg, uD.ex.height = bh, uD.kp = uD.ex.getContext("2d", {
			alpha: !0
		}), uD.kp.font = kl, cR.cU.textBaseline(uD.kp, 1), cR.cU.textAlign(uD.kp, 1)
	}

	function u6(cC) {
		return av.uG() ? c0.bg - kh[cC].ex.width - c3.gap : av.ca
	}

	function u7(cC) {
		return Math.floor(2 * c3.gap + (av.uG() ? aw.bh + c3.gap : 0) + av.bh + cC * (1.3 * bh))
	}
	this.aM = function() {
		kh = [], this.resize()
	}, this.resize = function() {
		kl = az.kl, bh = az.fontSize + 5, bh = Math.floor(1.25 * bh), bJ.bK.c2() && (bh = Math.floor(1.25 * bh)), oB = Math.floor(.15 * bh), cJ.sE.font = kl, th = Math.floor(cJ.sE.measureText("02 000 000 0000").width);
		for (var cC = kh.length - 1; 0 <= cC; cC--) ti(kh[cC]), tj(cC)
	}, this.bP = function() {
		for (var cC = kh.length - 1; 0 <= cC; cC--) kh[cC].tk && (kh[cC].tk = !1, tj(cC))
	}, this.c5 = function(c6, cb) {
		if (2 !== bO.p && 0 !== aN.bN[bO.g] && !bO.o && aZ.n9(bO.g))
			for (var u1, u2, u3, u4 = bJ.bK.c2() ? bh : 0, u5 = bJ.bK.c2() ? Math.floor(.15 * bh) : 0, cC = kh.length - 1; 0 <= cC; cC--)
				if (u1 = u6(cC), u2 = u7(cC), u3 = kh[cC].ex.width, u2 - u5 <= cb && cb <= u2 + bh + u5) {
					if (u1 - u4 <= c6 && c6 <= u1 + bh + u4) return kh[cC].tw || (kh[cC].tk = !0, kh[cC].tw = !0, 0 === kh[cC].id && aO.ik.kH(kh[cC].dg)), !0;
					if (0 === kh[cC].id && u1 + u3 - bh - u4 <= c6 && c6 <= u1 + u3 + u4) return aO.ik.jr(ar.u8(), kh[cC].dg), !0
				} return !1
	}, this.fx = function() {
		var cx;
		2 !== bO.p && 0 !== aN.bN[bO.g] && !bO.o && aZ.n9(bO.g) && (function(cx) {
			if (kh.length !== cx) return 1;
			for (var cC = cx - 1; 0 <= cC; cC--)
				if (kh[cC].id !== b7.iF(bO.g, cC) || kh[cC].dg !== b7.iK(bO.g, cC)) return 1;
			return
		}(cx = b7.iE(bO.g)) && function(cx) {
			var cC, id, dg, e6, dh, uE = [];
			loop: for (cC = 0; cC < cx; cC++) {
				for (id = b7.iF(bO.g, cC), dg = b7.iK(bO.g, cC), e6 = 0; e6 < kh.length; e6++)
					if (kh[e6].id === id && kh[e6].dg === dg) {
						uE.push(kh.splice(e6, 1)[0]);
						continue loop
					} dh = b7.hX(bO.g, cC), ti(dh = {
					dg: dg,
					dh: dh,
					tv: dh,
					id: id,
					tk: !0,
					tw: !1,
					ex: null,
					kp: null
				}), uE.push(dh)
			}
			kh = uE
		}(cx), uB(cx))
	}, this.uF = function(en) {
		for (var cx = Math.min(kh.length, b7.iE(bO.g)), cC = 0; cC < cx; cC++)
			if (kh[cC].dg === en) return void(kh = [])
	}, this.cY = function() {
		if (0 !== aN.bN[bO.g] && aZ.n9(bO.g) && !bO.o)
			for (var cC = kh.length - 1; 0 <= cC; cC--) cc.drawImage(kh[cC].ex, u6(cC), u7(cC))
	}
}

function uH() {
	var q7, uI, uJ, q6, uK, uL, uM, uN, uO, uP, uQ, kq, uR, uS = !1,
		uT = !1;

	function uU(l0) {
		kq = bE.dH, uJ = q6 = uI = 0, uK = (uR = 33) / l0, q7 = 1 / (l0 / uR / 4), uL = (c0.bg / 2 + cF) / cG, uM = (c0.bh / 2 + cI) / cG, uN = cG
	}

	function ud(ue) {
		Math.abs(Math.log(uQ / uN)) < .125 && (uQ = ue * uN)
	}

	function uc(dM, dN, dO, dP) {
		uO = (dM + dO + 1) / 2, uP = (dN + dP + 1) / 2;
		dO = c0.bg / (dO - dM + 1), dM = c0.bh / (dP - dN + 1);
		uQ = .9 * (dO < dM ? dO : dM)
	}
	this.sq = function() {
		return uS
	}, this.bM = function() {
		uU(1), this.nr(0, 0, cJ.cK - 1, cJ.cL - 1), bO.s || bO.o || this.uV(bO.g, 3e3, !0, .3)
	}, this.uV = function(player, l0, uW, zoom) {
		bO.r || uS && !uW && uT || 0 === aN.d0[player] || (aq.qS = !1, uT = uW, uU(l0), function(player) {
			uO = (aN.eJ[player] + aN.eI[player] + 1) / 2, uP = (aN.eM[player] + aN.eL[player] + 1) / 2
		}(player), function(zoom, player) {
			var gm = aN.eI[player] - aN.eJ[player] + 1,
				player = aN.eL[player] - aN.eM[player] + 1,
				dv = c0.bg / gm,
				e6 = c0.bh / player,
				dv = (uQ = dv < e6 ? dv : e6, 0 !== zoom ? zoom : gm < 20 && player < 20 ? .5 : .9);
			uQ *= dv, ud(7 / 8)
		}(zoom, player), uS = !0, uZ.ua())
	}, this.ub = function(l0) {
		bO.o || bO.r || (aq.qS = !1, uT = !1, uU(l0), uc(0, 0, cJ.cK - 1, cJ.cL - 1), ud(7 / 8), uS = !0, uZ.ua())
	}, this.nr = function(dM, dN, dO, dP) {
		uc(dM, dN, dO, dP), cG = uQ, aq.qY(uO, c0.bg / 2), aq.qb(uP, c0.bh / 2), qo.qp()
	}, this.h3 = function() {
		return !(uS && uT || (uS = !1))
	}, this.fx = function() {
		var uh, ui, c1, ul;
		uS && (uI < .5 ? q6 < uK && (q6 += uK * q7, uJ = uI) : 1 - uJ < uI && (q6 = (q6 -= uK * q7) < uK * q7 ? uK * q7 : q6), kq = kq >= bE.dH ? bE.dH - 1 : kq, c1 = bE.dH - kq, uI = 1e3 < c1 || 1 < (uI += q6 * c1 / uR) ? 1 : uI, kq = bE.dH,
			c1 = cG, uh = cF, ui = cI, c1 = (cG = uN * Math.pow(uQ / uN, uI)) / c1, ul = 1 - (uN * Math.pow(uQ / uN, 1 - uI) - uN) / (uQ - uN), aq.qY(uL + ul * (uO - uL), c0.bg / 2), aq.qb(uM + ul * (uP - uM), c0.bh / 2), b8.zoom(c1, (uh *
				c1 - cF) / (1 - c1), (ui * c1 - cI) / (1 - c1)), qo.qp(), 1 <= uI && (uS = !1, aW.um = !0), bE.bI = !0)
	}
}

function un() {
	this.uo = null, this.bI = !1, this.dH = 0, this.dI = 56;
	var up = 0;

	function uq() {
		bE.dH = up = performance.now(), bE.uo.fx(), window.requestAnimationFrame(uq)
	}
	this.aM = function() {
		this.bV(), window.requestAnimationFrame(uq), this.dH = performance.now()
	}, this.bF = function() {
		bO.o ? (this.uo = new nB, this.uo.aM()) : bO.n ? this.uo = new ur : (this.uo = new us, this.uo.aM())
	}, this.bV = function() {
		this.uo = new ut, this.bI = !0
	}, this.fx = function() {
		this.uo.nG++
	}, this.dK = function() {
		return this.uo.nG
	}, this.uu = function() {
		var cN = performance.now();
		cN < up + 1e3 || (this.dH = cN, this.uo.fx())
	}
}

function uv() {
	function uz(map, ca, cb, bg, bh) {
		map >= cJ.q5 || (cJ.kw === map && (cc.fillStyle = cd.uy, cc.fillRect(ca, cb, bg, bh), cc.fillStyle = cd.co), cc.strokeRect(ca, cb, bg, bh), cc.fillText(cJ.aD.kv[map].name, Math.floor(ca + .5 * bg), Math.floor(cb + .55 * bh)))
	}
	this.bv = !1, this.uw = [0, 0, 0, 0], this.show = function() {
		this.bv = !0, this.resize(), bE.bI = !0
	}, this.resize = function() {
		var ux = cA(cJ.q5 + cJ.q5 % 2, 2),
			ux = c0.bh - ux * c3.gap;
		bJ.bK.c2() ? this.uw[2] = Math.floor(.75 * c0.min) : this.uw[2] = Math.floor(.5 * c0.min), this.uw[3] = Math.floor(1.25 * this.uw[2]), this.uw[3] > ux && (this.uw[3] = ux, this.uw[2] = Math.floor(ux / 1.2)), this.uw[0] = Math.floor((c0
			.bg - this.uw[2]) / 2), this.uw[1] = Math.floor((c0.bh - this.uw[3]) / 2)
	}, this.cM = function(ca, cb) {
		return !(ca < this.uw[0] || cb < this.uw[1] || ca > this.uw[0] + this.uw[2] || cb > this.uw[1] + this.uw[3])
	}, this.c5 = function(ca, cb) {
		var bm, ux = cA(cJ.q5 + cJ.q5 % 2, 2);
		return bE.bI = !0, ca < this.uw[0] || cb < this.uw[1] || ca > this.uw[0] + this.uw[2] || cb > this.uw[1] + this.uw[3] ? !(this.bv = !1) : (bm = Math.floor(.17 * this.uw[3]), cb < this.uw[1] + bm ? ca > this.uw[0] + this.uw[2] - bm && (
			this.bv = !1) : (cb = (cb = Math.floor(ux * (cb - this.uw[1] - bm - .00576 * c0.ge) / (this.uw[3] - bm - .01152 * c0.ge))) < 0 ? 0 : ux - 1 < cb ? ux - 1 : cb, ca > this.uw[0] + this.uw[2] / 2 && (cb += ux), cb >= cJ.q5 || cJ
			.af(cb, Math.floor(16384 * Math.random()))), !0)
	}, this.cY = function() {
		var cC, dN, bm = Math.floor(.17 * this.uw[3]),
			ux = cA(cJ.q5 + cJ.q5 % 2, 2),
			gap = .6 * .01152 * c0.ge,
			bn = (this.uw[3] - bm - (ux + 1) * gap) / ux,
			bi = Math.floor((this.uw[2] - 3 * gap) / 2);
		for (cc.lineWidth = c3.mg, cR.cU.textAlign(cc, 1), cR.cU.textBaseline(cc, 1), cc.fillStyle = cd.ce, cc.fillRect(this.uw[0], this.uw[1] + bm, this.uw[2], this.uw[3] - bm), cc.fillStyle = cd.uy, cc.fillRect(this.uw[0], this.uw[1], this.uw[
				2], bm), cc.strokeStyle = cd.co, cc.strokeRect(this.uw[0], this.uw[1], this.uw[2], this.uw[3]), cc.fillStyle = cd.co, cc.fillRect(this.uw[0], this.uw[1] + bm, this.uw[2], 2), cc.font = cR.cU.cV(1, .48 * bm), cc.fillText("Maps",
				Math.floor(this.uw[0] + this.uw[2] / 2), Math.floor(this.uw[1] + .55 * bm)), cc.font = cR.cU.cV(1, .48 * bn), cC = ux - 1; 0 <= cC; cC--) dN = Math.floor(this.uw[1] + bm + gap + cC * (bn + gap)), uz(cC, this.uw[0] + gap, dN, bi,
			bn), uz(cC + ux, this.uw[0] + bi + 2 * gap, dN, bi, bn);
		ax.cn(Math.floor(this.uw[0] + this.uw[2] - .7 * bm), Math.floor(this.uw[1] + .3 * bm), Math.floor(.4 * bm)), cc.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function v0() {
	this.v1 = function() {
		for (var cx = kd, a7 = lU, ep = [], cC = 0; cC < cx; cC++) {
			var en = a7[cC];
			aZ.n9(en) && ep.push(en)
		}
		return ep
	}, this.v2 = function() {
		for (var cx = kd, a7 = lU, cN = 0, d0 = aN.d0, cC = 0; cC < cx; cC++) cN += d0[a7[cC]];
		return cN
	}
}

function v3() {
	var ca, cb, v5, v6, v7, dH, player, v8, gap, zoom, v9, vA, v4 = new Array(10);

	function vT(player) {
		for (var cC = v9.length - 1; 0 <= cC; cC--)
			if (v9[cC] === player) return 1
	}

	function vR(vO) {
		var cC, cx;
		if (-1 !== vO)
			for (cx = v4.length, cC = 0; cC < cx; cC++)
				if (v4[cC].bv && v4[cC].ca + 1 === vO % 4 && v4[cC].cb + 1 === vO >> 2) return cC;
		return -1
	}

	function vP(c6, c7) {
		var mj = gap / 2;
		return c6 < ca - v5 - 3 * mj || ca + 3 * v5 + 5 * mj < c6 || c7 < cb - v5 - 3 * mj || cb + 2 * v5 + 3 * mj < c7 ? -1 : 4 * (c7 < cb - mj ? 0 : c7 < cb + v5 + mj ? 1 : 2) + (c6 < ca - mj ? 0 : c6 < ca + v5 + mj ? 1 : c6 < ca + 2 * v5 + 3 *
			mj ? 2 : 3)
	}
	this.fL = function() {
		var cC, e6, vD = [cd.vE, cd.vF, cd.tu, cd.vG, cd.vH];
		for (v4 = new Array(8), cC = 0; cC < 8; cC++) v4[cC] = {
			id: cC,
			bv: !1,
			vI: 0,
			ex: [],
			ca: 0,
			cb: 0
		};
		for (v4[0].colors = [0, 1, 2, 3], v4[0].ca = 0, v4[0].cb = 0, v4[1].colors = [0, 1, 4], v4[1].ca = 1, v4[1].cb = 0, v4[2].colors = [0, 2], v4[2].ca = -1, v4[2].cb = 0, v4[3].colors = [0], v4[3].ca = 0, v4[3].cb = 0, v4[4].colors = [0, 2],
			v4[4].ca = 1, v4[4].cb = 1, v4[5].colors = [3], v4[5].ca = 0, v4[5].cb = -1, v4[6].id = 20, v4[6].colors = [0], v4[6].ca = 1, v4[6].cb = -1, v4[7].id = 21, v4[7].colors = [0], v4[7].ca = 0, v4[7].cb = 1, cC = 0; cC < 8; cC++)
			for (e6 = 0; e6 < v4[cC].colors.length; e6++) v4[cC].ex.push(function(id, vJ) {
				if (id < 20) return cR.ex.vK(gc.get(3), id, vJ);
				var vJ = gc.get(3).height,
					gp = cR.cU.gj(vJ, vJ),
					gq = cR.cU.getContext(gp);
				20 === id ? gq.drawImage(gc.get(18), 0, 0) : 21 === id && fO.fP.rl(fO.rg.rh + fO.rg.vL, gq, 0, 0, vJ);
				return gp
			}(v4[cC].id, vD[v4[cC].colors[e6]]))
	}, this.vC = function() {
		return v4
	}, this.aM = function() {
		v9 = [], ca = cb = dH = 0, v6 = v7 = -1e3, this.resize()
	}, this.resize = function() {
		v5 = Math.floor((bJ.bK.c2() ? .075 : .0468) * c0.ge), zoom = v5 / gc.get(3).height, gap = Math.floor(v5 / 3)
	}, this.vM = function(c6, c7) {
		return !!this.bv() && (bE.bI = !0, !!fO.fP.c5(c6, c7, player) || (c6 = function(c6, c7) {
			v7 = v6 = -1e3;
			var vQ = vR(vP(c6, c7));
			if (-1 === vQ) return 0;
			if (1 !== v4[vQ].colors[v4[vQ].vI])
				if (5 === vQ) {
					if (! function() {
							var cN = performance.now();
							vA + 4e3 < cN && (v9 = []);
							vA = cN
						}(), vT(player)) return 1;
					v9.push(player), 16 < v9.length && v9.shift()
				} else if (6 === vQ) {
				for (var cC = v9.length - 1; 0 <= cC; cC--) 0 === aN.bN[v9[cC]] && v9.splice(cC, 1);
				0 < v9.length && (bB.vU(1, v9, !0) && aO.gv.vV(v9, player), v9 = [])
			} else if (2 === vQ) aO.ik.k4(ar.u8(), player);
			else if (3 === vQ) bO.s && aO.ik.jm(v8);
			else if (0 === vQ)
				if (0 === v4[0].vI) {
					if (bO.t && aw.vW() < 300) return 1;
					aO.ik.jr(ar.u8(), player)
				} else bC.vX(player, ar.u8());
			else if (1 === vQ) vY.vZ(), aO.ik.k5(ar.u8(), v8);
			else {
				if (7 === vQ) return vY.va(), fO.fP.show(c6, c7), 2;
				if (4 !== vQ) return 0;
				bB.vU(0, [player], !0) && aO.gv.vb(player)
			}
			return 1
		}(c6, c7), this.cB(), 2 === c6 && (fO.fP.bv = !0), 0 < c6))
	}, this.vN = function(c6, c7) {
		this.bv() || (v6 = c6, v7 = c7, dH = performance.now())
	}, hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = ab.vf(mouseX),
			coordY = ab.vh(mouseY),
			coord = ab.vi(coordX, coordY),
			point = ab.vj(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(c6, c7, cu) {
			aZ.hU(cu) || -1 === (c6 = ac.jV.vy(c6, c7)) ? az.vx(cu) : az.vz(c6)
		}(mouseX, mouseY, point))
	}
	this.click = function(c6, c7, vc) {
		var ve = ab.vf(c6),
			vg = ab.vh(c7),
			gl = ab.vi(ve, vg),
			cu = ab.vj(gl);
		return !(!ab.vk(ve, vg) || (ve = (bJ.bK.c2() ? .025 : .0144) * c0.ge, vg = performance.now(), Math.abs(c6 - v6) > ve) || Math.abs(c7 - v7) > ve || dH + 500 < vg) && (dH = vg, vc ? (function(c6, c7, cu) {
			aZ.hU(cu) || -1 === (c6 = ac.jV.vy(c6, c7)) ? az.vx(cu) : az.vz(c6)
		}(c6, c7, cu), !1) : ax.bc || this.bv() || !cR.gv.gw(bO.g) || bO.o ? (this.cB(), !1) : bO.s ? !!aZ.hU(cu) && (v8 = gl, v4[3].bv = !0, this.vm(c6, c7)) : (ac.jV.kC(gl) ? ac.je.gi = -1 : ac.jV.vn(c6, c7) || (2 === bO.p ? aZ.dn(
			cu) && (player = aZ.dq(cu), aZ.n9(player)) && (v4[0].bv = !0, v4[0].vI = 1, v4[7].bv = !0) : aZ.vo(cu) || (v8 = gl, ac.jV.mt(bO.g, gl) && (v4[0].bv = !0, v4[0].vI = 1, v4[1].bv = !0, v4[1].vI = dS.o1[2] ? 0 : 2), aZ.hQ(
				cu)) || (aZ.ds(cu) ? (player = bO.b, vp(bO.g) ? (v4[0].bv = !0, v4[0].vI = 0) : vq(bO.g, player) && (v4[0].bv = !0, v4[0].vI = 3)) : (player = aZ.dq(cu)) === bO.g ? (v4[0].bv = !0, v4[0].vI = 1, v4[7].bv = !0) : (v4[0]
				.vI = 1, v4[5].bv = function(player) {
					return aZ.n9(player) && !vT(player) && bB.vU(1, [player], !1)
				}(player), v4[7].bv = aZ.n9(player), e1(player, bO.g) ? (v4[4].bv = aZ.n9(player) && !b8.vs(player) && bB.vU(0, [player], !1), v4[6].bv = function(player) {
					if (0 === v9.length) return !1;
					if (performance.now() > vA + 4e3) return !(v9 = []);
					return !vT(player) && ! function(player) {
						var cC;
						if (bO.u)
							for (cC = v9.length - 1; 0 <= cC; cC--)
								if (!e1(player, v9[cC])) return 1;
						return
					}(player)
				}(player), vu(bO.g, player) ? (v4[0].vI = 0, v4[0].bv = !0) : vq(bO.g, player) && (v4[0].vI = 3, v4[0].bv = !0), v4[0].bv = this.vv()) : (v4[2].bv = !0, v4[0].bv = !0)))), this.vm(c6, c7)))
	}, this.vm = function(c6, c7) {
		return ca = c6 - Math.floor(v5 / 2), cb = c7 - Math.floor(v5 / 2), !!this.bv()
	}, this.cM = function(c6, c7) {
		return !!this.bv() && (fO.fP.bv ? !fO.fP.w1(c6, c7) && (fO.fP.bv = !1, bE.bI = !0) : function(w3, c6, c7) {
			c6 = vP(c6, c7);
			if (0 <= vR(c6)) return !1;
			if ((1 === c6 || 6 === c6) && 0 <= vR(2)) return !1;
			if ((6 === c6 || 9 === c6) && 0 <= vR(10)) return !1;
			return w3.cB(), bE.bI = !0
		}(this, c6, c7))
	}, this.cB = function() {
		for (var cC = v4.length - 1; 0 <= cC; cC--) v4[cC].bv = !1, v4[cC].vI = 0;
		fO.fP.bv = !1
	}, this.bv = function() {
		return this.vv() || fO.fP.bv
	}, this.vv = function() {
		for (var cx = v4.length, cC = 0; cC < cx; cC++)
			if (v4[cC].bv) return !0;
		return !1
	}, this.cY = function() {
		if (this.bv())
			if (fO.fP.bv) fO.fP.cY();
			else {
				var cC, gq = cc,
					e6 = v4,
					cx = e6.length,
					w5 = (v5 + gap) / zoom;
				for (gq.imageSmoothingEnabled = !0, gq.setTransform(zoom, 0, 0, zoom, ca, cb), cC = 0; cC < cx; cC++) e6[cC].bv && cc.drawImage(e6[cC].ex[e6[cC].vI], e6[cC].ca * w5, e6[cC].cb * w5);
				gq.imageSmoothingEnabled = !1, gq.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function ur() {
	var bt = 0,
		dH = bE.dH;
	this.nG = 0, this.fx = function() {
		c0.fx(), bO.s ? nW() : 0 === bt ? bE.dH >= dH && (dH += bE.dI * Math.floor(1 + (bE.dH - dH) / bE.dI), 2 === bO.p || ax.bc ? nN() : (nT(), aW.nP()), bt++) : ((ax.bc ? nW : (bE.bI = !0, nX))(), bt = 0), nK(), bE.bI && (bE.bI = !1, nL())
	}
}

function is(title, p3, w6, p4) {
	var ha, p5;
	this.show = function() {
		ha.show(), this.resize()
	}, this.cB = function() {
		ha.cB()
	}, this.resize = function() {
		ha.resize(), p5.resize()
	}, this.hw = function(gk) {
		2 === gk && ha.hx[0].hy()
	}, p4 = p4 || [new hg("❌ " + he.hf[92], function() {
		bZ.on()
	}, cd.j5)], ha = new hd(title, p4), p5 = new p6(ha.hm, p3), w6 && cR.cU.textAlign(ha.hm.style, 1)
}

function w7() {
	this.jp = new w8, this.ot = new w9, this.oz = new wA, this.aM = function(a5, a7, a8, a9) {
		var wB;
		bO.o || ((wB = {}).a6 = bO.g, wB.a5 = a5, wB.a7 = a7, wB.a8 = a8, wB.a9 = a9, wB.s2 = cJ.kw, wB.s3 = cJ.s0, aH.wC(wB), this.jp.aM(wB))
	}, this.fx = function() {
		bO.o || (this.jp.fx(), 3 !== bZ.fS) || bE.dK() % 15 != 5 && 2 !== bO.p || bZ.fT().or()
	}, this.oy = function() {
		var mj = this.jp.wB;
		0 === bO.p && bY.wE(), cJ.af(mj.s2, mj.s3), 1 === mj.a7.length && (aH.wF(mj.a8), aH.wG(mj.wH, mj.wI)), bS.bT.close(bS.bT.eu, 3257), bS.bT.eu = 0, bO.a4(mj.a5, mj.a6, mj.a7, mj.a8, mj.a9, !0)
	}, this.ox = function(f8) {
		var cC = f8.indexOf("=");
		return 0 <= cC ? f8.substring(cC + 1) : f8
	}, this.ov = function(f8) {
		return "https://territorial.io/?replay=" + f8
	}
}

function wP() {
	this.wQ = 1050, this.aM = function() {
		aG = 2, wM = 23, j6 = "27 Jul 2024 [1.97.2]", wN = true, wO = function() {
			try {
				return window.self !== window.top
			} catch (dB) {
				return !0
			}
		}(), lt = (new Date).getTime() % 1024
	}, this.wS = 0
}

function wT() {
	var dH = 2e4;
	this.show = function() {
		if (bE.dH < dH) return !1;
		dH = bE.dH + 135e4, 2 === aG && bJ.bK.wU(Math.floor(135e4))
	}
}

function tO() {
	this.wV = function(cr) {
		cr.fill(0)
	}, this.wW = function(cr) {
		for (var cx = cr.length, cC = 0; cC < cx; cC++) cr[cC] = []
	}, this.wX = function(sC, ct) {
		for (var wY = dS.o0, cC = 0; cC < 3; cC++) wY[cC] = ct * sC[cC];
		return wY
	}, this.wZ = function(sC, wY, wa) {
		for (var dx = 0, cC = 0; cC < 3; cC++) dx += Math.abs(sC[cC] - wY[cC]);
		return wa <= dx
	}, this.wb = function(sC, wc) {
		for (var cC = 0; cC < 3; cC++) sC[cC] = kL.kM(sC[cC] + wc, 0, 255);
		return sC
	}, this.tp = function(cr, eT, eU) {
		var cC, wd = 0;
		for (eU = eU || cr.length - 1, cC = eT = eT || 0; cC <= eU; cC++) wd += cr[cC];
		return wd
	}, this.we = function(cr, wf) {
		for (var cC, tI, cx = cr.length, wg = [], dv = cx - 1; 0 <= dv; dv--) {
			for (cC = tI = 0; cC < cx; cC++) wf(cr[cC]) < wf(cr[tI]) && (tI = cC);
			cx--, wg.push(cr[tI]), cr[tI] = cr[cx], cr.pop()
		}
		return wg
	}, this.min = function(cr) {
		var cC, lV, cx = cr.length;
		if (0 === cx) return 0;
		for (lV = cr[0], cC = 1; cC < cx; cC++) lV = Math.min(lV, cr[cC]);
		return lV
	}, this.max = function(cr) {
		var cC, lV, cx = cr.length;
		if (0 === cx) return 0;
		for (lV = cr[0], cC = 1; cC < cx; cC++) lV = Math.max(lV, cr[cC]);
		return lV
	}
}

function wh() {
	var bv, wi, bg, bh, bm, wj, wk, kj, ex, kq, wl;

	function hN() {
		return Math.floor((c0.bg - bg) / 2) < ar.bh + 2 * c3.gap ? c0.bh - bh - 4 * c3.gap - ar.bh : c0.bh - bh - 2 * c3.gap
	}
	this.dJ = -1, this.aM = function() {
		wl = bv = !1, bm = .61, wj = .07, wk = .09, kq = kj = bh = 0, this.dJ = -1
	}, this.resize = function() {
		var kp, dM, gk, ws, wt, wu;
		bv && (bg = wm(bg = bJ.bK.c2() ? Math.floor(.69 * c0.ge) : Math.floor(.5 * c0.ge), rx(c0.bg - 2 * c3.gap, 10)), bg = wm(bg, Math.floor(3.57 * rx(c0.bh - 2 * c3.gap, 3))), bh = Math.floor(.28 * bg), (ex = document.createElement("canvas"))
			.width = bg, ex.height = bh, kp = ex.getContext("2d", {
				alpha: !0
			}), dM = Math.floor(1 + bh / 40), kp.clearRect(0, 0, bg, bh), kp.fillStyle = cd.ce, kp.fillRect(dM, dM, bg - 2 * dM, bh - 2 * dM), kp.lineJoin = "bevel", kp.lineWidth = 2 * dM, kp.strokeStyle = cd.co, kp.strokeRect(dM, dM, bg -
				2 * dM, bh - 2 * dM), kp.imageSmoothingEnabled = !1, gk = gc.get(wi), ws = gk.width, wt = gk.height, wu = (1 === wi ? .85 : 21 === wi ? .666 : .9) * bm * bh / wt, kp.setTransform(wu, 0, 0, wu, Math.floor((bg - wu * ws) / 2),
				Math.floor((bh - wu * wt) / 2)), kp.drawImage(gk, 0, 0), kp.setTransform(1, 0, 0, 1, Math.floor(bg - wk * bh - wj * bh - dM), Math.floor(dM + wj * bh)),
			function(kp, cx) {
				kp.lineWidth = Math.floor(1 + bh / 80), kp.strokeStyle = cd.co, kp.beginPath(), kp.moveTo(0, 0), kp.lineTo(cx, cx), kp.moveTo(0, cx), kp.lineTo(cx, 0), kp.stroke()
			}(kp, Math.floor(wk * bh)), kp.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(lV, wo, wp, wq) {
		bv || wq && wl || (wi = wp ? 21 : lV ? 1 : 2, bv = wl = !0, this.resize(), b1.cB(), ar.wr(), kq = bE.dH, -1 === this.dJ && (this.dJ = bE.dK()), kj = wo ? 1 : 0)
	}, this.fx = function() {
		!bv || 1 <= kj || (kj = 1 < (kj += 5e-4 * (bE.dH - kq)) ? 1 : kj, kq = bE.dH, bE.bI = !0)
	}, this.c5 = function(ca, cb) {
		return !(!bv || kj <= 0 || (ca -= Math.floor((c0.bg - bg) / 2), cb -= hN(), ca < 0) || cb < 0 || bg < ca || bh < cb || (bg - bh / 3 < ca && cb < bh / 3 && (bv = !1, bE.bI = !0), 0))
	}, this.cY = function() {
		!bv || kj <= 0 || (cc.globalAlpha = kj, cc.drawImage(ex, Math.floor((c0.bg - bg) / 2), hN()), cc.globalAlpha = 1)
	}
}

function nN() {
	az.fx(), b8.fx(), aw.ww(), bS.bT.fx()
}

function nT() {
	bC.fx(), b5.fx(), aX.fx(), b9.fx(), bA.fx(), b4.fx(), b3.fx(), ac.bT.fx(), wx(), ap.fx(), aL.fx(), b8.fx(), b8.wy(), aw.fx(), al.fx(), av.fx(), b0.fx(), az.fx(), bB.fx(), ar.fx(), au.fx(), aS.fx(), aj.fx(), ak.fx(), bS.bT.fx(), bS.gC.fx(), bZ
	.fx(), ai.fx(), bE.fx()
}

function nK() {
	bL.fx(), b2.fx(), ay.fx(), bH.fx(), at.fx(), wz.gU()
}

function nX() {
	ap.bP(!1), b0.bP(), aw.bP(!1), av.bP(), ar.bP(), au.bP(), b8.bP(!1), aj.cX()
}

function nW() {
	b8.bP(!1) && (bE.bI = !0), bS.bT.fx()
}

function x0() {
	this.x1 = 28, this.x2 = 0, this.x3 = null;
	var x5 = this.x4 = null;

	function x8(go, xB) {
		var ca, cb, gl, gm, gp = cR.cU.gj(go, go),
			gq = cR.cU.getContext(gp, !0),
			gr = cR.cU.getImageData(gq, go, go),
			fP = gr.data,
			cs = (go >> 1) - .5,
			xC = .5 + cs;
		for (xC *= xC, cb = 0; cb < go; cb++)
			for (ca = 0; ca < go; ca++) gm = (gm = ca - cs) * gm + (gm = cb - cs) * gm, fP[gl = 4 * (cb * go + ca)] = xB[0], fP[1 + gl] = xB[1], fP[2 + gl] = xB[2], fP[3 + gl] = (xC - gm) * xB[3] / xC;
		return gq.putImageData(gr, 0, 0), gp
	}

	function gt(cC, gq, gp, go) {
		var ca, y, highlight = settings.highlightClanSpawns && clanFilter.inOwnClan[cC];
		if (highlight) go *= 2;
		0 !== aN.bN[cC] && 0 !== aN.d0[cC] && (ca = aN.eJ[cC] + aN.eI[cC] + 1 - go - 2 >> 1, y = aN.eM[cC] + aN.eL[cC] + 1 - go - 2 >> 1,
			highlight ? gq.drawImage(gp[bO.u ? aR.eo[cC] : cC < bO.h ? 1 : 0], ca, y, go, go) :
			gq.drawImage(gp[bO.u ? aR.eo[cC] : cC < bO.h ? 1 : 0], ca, y))
	}
	this.aM = function() {
		var w3;
		this.x2 = 700,
			function(w3) {
				var go = w3.x1;
				if (w3.x4 = [], x5 = [], bO.u)
					for (var cC = 0; cC <= bO.v; cC++) w3.x4.push(x8(go, aR.x9[aR.xA[cC]])), x5.push(x8(go >> 1, aR.x9[aR.xA[cC]]));
				else w3.x4.push(x8(go, aR.x9[0])), w3.x4.push(x8(go, aR.x9[4])), x5.push(x8(go >> 1, aR.x9[0]))
			}(this),
			function(w3, xD) {
				var cC, x3 = w3.x3,
					gq = cR.cU.getContext(x3, !0),
					cx = bO.b,
					go = w3.x1 >> 1;
				gq.imageSmoothingEnabled = !1, gq.setTransform(1, 0, 0, 1, 0, 0), xD && gq.clearRect(0, 0, x3.width, x3.height);
				for (cC = bO.h; cC < cx; cC++) gt(cC, gq, x5, go)
			}(this, null !== (w3 = this).x3 && w3.x3.width === cJ.cK - 2 && w3.x3.height === cJ.cL - 2 || (w3.x3 = cR.cU.gj(cJ.cK - 2, cJ.cL - 2), !1)), bO.s || this.nt()
	}, this.nt = function() {
		for (var cx = bO.h, go = this.x1, x4 = this.x4, gq = cR.cU.getContext(this.x3, !0), cC = 0; cC < cx; cC++) gt(cC, gq, x4, go)
	}
}

function xE() {
	var xF, xG, mS, tA, xH;
	this.fU = new xI, mS = new mY([.45, .27], [.5, .5], 2 / 3), xG = [new hg("⚔️<br>Multiplayer", function() {
			xJ(0)
		}, cd.xK), new hg("🗡️<br>Single Player", function() {
			xJ(1)
		}, cd.xL), new hg("🔑<br>My Account", function() {
			xJ(2)
		}, cd.xM), new hg("⚙️<br>Menu", function() {
			xJ(3)
		}, cd.xN), new hg("", function() {
			bZ.ba(12)
		}, cd.mL, !1),
		new hg("FX Client settings", function() {
			WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5")
	], tA = new fV(fa.hr.data[122]);
	for (var cC = 0; cC < xG.length; cC++) xG[cC].button.style.position = "absolute";

	function xJ(bt) {
		bJ.bK.setState(10), aB.xO(), gc.f2() || gc.f3(), 0 === bt ? bZ.bT.xP() : 1 === bt ? bZ.bT.xQ() : 2 === bt ? 0 !== bJ.id || fa.hr.data[140].value ? bZ.ba(8, bZ.fS, new ir(16)) : bZ.bT.iq(bZ.fS, 16) : 3 === bt && bZ.ba(1, bZ.fS)
	}
	tA.dB.style.position = "absolute", tA.dB.style.textAlign = "center", tA.dB.placeholder = "Your Kingdom's Name", this.show = function() {
		bY.setState(0), bJ.bK.setState(12), this.fU.show(), xG[4].mK(cR.color.xR(fa.hr.data[121].value)), this.resize(), document.body.appendChild(tA.dB);
		for (var cC = 0; cC < xG.length; cC++) document.body.appendChild(xG[cC].button);
		1 !== bJ.id || bJ.im < 5 || (xH && bE.dH > xH + 144e5 ? bJ.mD.setState(14) : xH = bE.dH)
	}, this.cB = function() {
		this.fU.cB(), document.body.removeChild(tA.dB);
		for (var cC = 0; cC < xG.length; cC++) document.body.removeChild(xG[cC].button)
	}, this.resize = function() {
		this.fU.resize(), mS.resize();
		var gap = .5 * c3.gap,
			xT = 10 / 99 * .84 * mS.bg,
			xV = .16 * mS.bh,
			qk = .19 * mS.bg,
			ca = mS.ca + qk,
			xT = mS.cb + xT + 3 * gap,
			bg = .5 * (mS.bg - gap) - qk,
			qk = mS.bg - 2 * qk - xV - gap,
			qk = (cR.cU.xX(tA.dB, ca, xT, qk, xV), cR.cU.xX(xG[4].button, ca + qk + gap, xT, xV, xV), .5 * (mS.cb + mS.bh - (xT += xV + gap) - gap));
		cR.cU.xX(xG[0].button, ca, xT, bg, qk), cR.cU.xX(xG[1].button, ca + bg + gap, xT, bg, qk), cR.cU.xX(xG[2].button, ca, xT + qk + gap, bg, qk), cR.cU.xX(xG[3].button, ca + bg + gap, xT + qk + gap, bg, qk);
		cR.cU.xX(xG[5].button, ca, xT + qk * 2 + gap * 2, bg * 2 + gap, qk / 3);
		for (var cC = 0; cC < xG.length; cC++) xG[cC].button.style.font = cR.cU.cV(0, cR.cU.xY(.065 * mS.bh)), cR.cU.m8(xG[cC].button, 5);
		tA.dB.style.font = cR.cU.cV(0, cR.cU.xY(.08 * mS.bh)), cR.cU.m8(tA.dB, 5)
	}, this.cY = function() {
		if (bY.xZ(), xa.cY(), xb.cY(), fM.cY(), gc.f2()) {
			if (settings.displayWinCounter) {
				const size = Math.floor(mS.bg * 0.03);
				cc.font = cR.cU.cV(1, size);
				cc.fillStyle = "#ffffff";
				const text = "Win count: " + wins_counter;
				const textLength = cc.measureText(text).width;
				cc.textAlign = "left";
				cc.textBaseline = "middle";
				cc.fillText(text, cc.canvas.width - textLength - size / 2, size);
			};
			cc.imageSmoothingEnabled = !1;
			var gk = gc.f1("territorial.io"),
				gd = .84 * mS.bg / gk.width;
			cc.setTransform(gd, 0, 0, gd, mS.ca + .08 * mS.bg, mS.cb), xF = xF || cR.fD.fK(gk, cR.fD.xc, [0, 0, 0]);
			for (var ca = -1; ca <= 1; ca += 2)
				for (var cb = -1; cb <= 1; cb += 2) cc.drawImage(xF, ca, cb);
			cc.drawImage(gk, 0, 0), cc.imageSmoothingEnabled = !0;
			var wY = gc.f1("logo"),
				xd = .6666 * gd * gk.height / wY.height,
				dO = .5 * c0.bg,
				dP = mS.cb + .5 * gd * gk.height - .5 * xd * wY.height;
			cc.setTransform(xd, 0, 0, xd, dO - .6 * gd * gk.width, dP), cc.drawImage(wY, 0, 0), cc.setTransform(xd, 0, 0, xd, dO + .6 * gd * gk.width - xd * wY.width, dP), cc.drawImage(wY, 0, 0), cc.setTransform(1, 0, 0, 1, 0, 0), cc
				.imageSmoothingEnabled = !0
		}
	}
}

function xe() {
	this.id = new xf, this.aM = function() {
		this.id.aM()
	}
}

function jk() {
	function qF(xt, xg) {
		if (function(xt, xy) {
				var xh = ab.xx(xt),
					xz = Math.abs(ab.nm(xy) - ab.nm(xh)),
					xh = Math.abs(ab.nn(xy) - ab.nn(xh));
				return 0 !== Math.max(xz, xh) && (function(xr, xt, xz, y0) {
					var y2 = ab.y3(xr),
						xr = ab.y5(xr),
						y6 = ab.y3(xt),
						xt = ab.y5(xt),
						y6 = y6 - y2,
						xt = xt - xr,
						yA = Math.abs(y6),
						yB = Math.abs(xt),
						y6 = 0 < y6 ? 1 : 3,
						xt = 0 < xt ? 2 : 0;
					yB < yA ? yE(y2, xr, y2 + yA, xr + yB, y6, xt, xz) : yE(xr, y2, xr + yB, y2 + yA, xt, y6, y0)
				}(xt, ab.xo(xy), xz, xh), !0)
			}(xt, xg)) {
			if (0 === dS.nx[0]) return !!aZ.hQ(xg << 2);
			if (function(xy) {
					if (aZ.hQ(xy << 2)) return 1;
					return function(xy) {
						var cC, dk, yF = ac.bT.yF,
							yJ = ab,
							cx = dS.nx[0],
							yK = 4 * xy;
						for (cC = cx - 1; 0 <= cC; cC--)
							if (dk = yF[cC], yK = yJ.yL(yK, dk + 2 & 3), aZ.hQ(yK)) return dS.nx[0] = cC, dS.o1[1] = yK >> 2, dS.o1[2] = 1 + dk, 1;
						return
					}(xy)
				}(xg)) {
				var cC, xg = ab.xx(xt),
					fP = yN,
					yF = ac.bT.yF,
					cx = dS.nx[0] - 1,
					yK = 4 * xg,
					yO = ab.yO;
				for (cC = 0; cC < cx; cC++)
					if (yK += yO[yF[cC]], 0 !== fP[yK + 3] || 2 !== fP[yK + 2]) return !!void 0;
				return !!1
			}
		}
		return !1
	}

	function yE(y2, y4, y6, y7, yC, yD, xz) {
		for (var cb, yF = ac.bT.yF, iU = 0, yG = 0, bh = y7 - y4, bg = y6 - y2, yH = y2 % 16, cC = 1; cC <= xz; cC++) yF[iU++] = yC, yF[iU] = yD, iU += (cb = (bh * (yH + (cC << 4)) + .5) / bg >> 4) - yG, yG = cb;
		dS.o3(dS.nx, iU)
	}
	this.kA = function(player, xg) {
		var dk, xh, xi = ab.xj(player, xg);
		return xi !== xg && (dk = ab.xk(xi, xg), xh = ab.xl(xi, dk), !(!aZ.hQ(xh << 2) && (dk = ab.xm(xi, xg, dk), xh = ab.xl(xi, dk), aZ.xn(xh << 2) || !aZ.hQ(xh << 2)) || (dS.o1[0] = xh, dS.o1[1] = xg, dS.o1[2] = 0, !qF(ab.xo(xh), xg)) || 0 !==
			dS.o1[2] && ab.xp(player, dS.o1[1] + ab.xq[dS.o1[2] - 1] << 2)))
	}, this.kF = function(xg) {
		var xr = ac.bT.xs[dS.o1[3]];
		return dS.o1[1] = xg, dS.o1[2] = 0, qF(xr, xg)
	}
}

function yP() {
	this.yR = function(g1) {
		var cC, rV, yS, yT, yU;
		if (g1 !== bS.bT.fm) bS.bT.close(g1, 3239);
		else if (6 === bY.gB() && qL.aM(), 7 !== bY.gB()) bS.bT.close(g1, 3251);
		else {
			for (rV = [0, 0, 0, 0], yS = gR.kT(6), cC = 0; cC < 4; cC++) rV[cC] = gR.kT(yS);
			for (yT = gR.kT(4), yU = [], cC = 0; cC < yT; cC++) {
				yU.push({
					id: gR.kT(5),
					a8: gR.kT(4),
					s1: 1 === gR.kT(1),
					kw: gR.kT(6),
					s0: gR.kT(14),
					s4: gR.kT(yS),
					s6: gR.kT(9) + 1,
					oa: gR.kT(10)
				});
				for (var s7 = gR.kT(3), s8 = new Array(s7), s9 = new Array(s7), dv = 0; dv < s7; dv++) s9[dv] = gR.kT(9) + 1, s8[dv] = yV.ei.n3(gR.kT(3));
				yU[cC].s7 = s7, yU[cC].s8 = s8, yU[cC].s9 = s9
			}
			qL.fc(rV, yU)
		}
	}
}

function yW() {
	this.yX = function() {
		eV.af(39), eV.eW(1, 0), eV.eW(6, 16), bS.eb.yY(), bS.bT.send(0, eV.eX)
	}, this.yZ = function(g1) {
		eV.af(115), eV.eW(1, 0), eV.eW(6, 17), yV.te.yd(fa.hr.data[105].value, 5), yV.te.yd(fa.hr.data[106].value, 8), eV.eW(30, fa.hr.data[109].value), bS.bT.send(g1, eV.eX)
	}, this.yb = function() {
		eV.af(55), eV.eW(1, 0), eV.eW(6, 18), yV.te.ej(fa.hr.data[110].value), bS.bT.send(0, eV.eX)
	}, this.yc = function(username) {
		eV.af(12 + 16 * username.length), eV.eW(1, 0), eV.eW(6, 20), bS.eb.ec(username), bS.bT.send(0, eV.eX)
	}
}

function ye() {
	var ey, cz, cx, yf, yg;

	function yl() {
		for (var yu = 0, cC = 1; cC < 5; cC++) yu += cz[cC] % 1024;
		return yu
	}

	function yk() {
		for (var cC = 1; cC < cx - yg; cC++) cz[cC] = parseInt(cz[cC])
	}

	function ym() {
		cz[0] = "Player " + Math.floor(1e3 * Math.random()), cz[1] = c0.bg < c0.bh ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, cz[2] = 1, cz[3] = 1, cz[4] = c0.bg < c0.bh ? 0 : 1, cz[5] = 0, cz[6] = "000", cz[7] = "0", cz[8] = "0",
			cz[9] = "0", yv.yn()
	}

	function yj() {
		for (var cC = cx - yg - 1; 0 <= cC; cC--) cz[cC] = fq.yy(cz[cC]);
		cz[0] = fq.yz(cz[0])
	}

	function z2(name, value, z3) {
		var pN = new Date,
			z3 = (pN.setTime(pN.getTime() + Math.floor(31536e6 * z3)), name + "=" + value + ";expires=" + pN.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = z3
	}
	this.aM = function() {
		if (0 === bJ.id) {
			yg = 4, ey = [], cx = 10;
			for (var cC = yf = 0; cC < cx; cC++) ey.push("u" + cC);
			cz = new Array(cx), ! function(z0) {
				for (var dv, en, z1 = z0.split(";"), cC = z1.length - 1; 0 <= cC; cC--) {
					for (z1[cC] = z1[cC].trim(), dv = 2; 0 <= dv; dv--) z1[cC] = z1[cC].replace(" ", "");
					3 < z1[cC].length && (dv = ey.indexOf(z1[cC].substring(0, 2)), en = z1[cC].indexOf("="), 0 <= dv && 2 === en ? cz[dv] = z1[cC].substring(en + 1, z1[cC].length) : 0 < en && z2(z1[cC].substring(0, en), "0", 0))
				}
			}(document.cookie), cz[9] || (cz[9] = "0"), (! function() {
				for (var cC = cx - 1; 0 <= cC; cC--)
					if (void 0 === cz[cC]) return;
				return 1
			}() || (yf = 2, yj(), yk(), yl() !== cz[5])) && ym()
		}
	}, this.yn = function() {
		if (2 === yf) {
			cz[1] = 0 === cz[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : cz[1], cz[5] = yl(), ! function() {
				for (var cC = 1; cC < cx - yg; cC++) cz[cC] = cz[cC].toString()
			}(), ! function() {
				cz[0] = fq.yw(cz[0]);
				for (var cC = cx - yg - 1; 0 <= cC; cC--) cz[cC] = fq.yx(cz[cC])
			}();
			for (var cC = cx - 1; 0 <= cC; cC--) z2(ey[cC], cz[cC], 1);
			yj(), yk()
		}
	}, this.yf = function() {
		return yf
	}, this.yr = function(dv) {
		yf = dv, this.yn()
	}, this.ys = function(cC, value) {
		0 === bJ.id && (cz[cC] = value)
	}, this.yt = function(cC) {
		return 0 !== bJ.id ? 0 : cz[cC]
	}
}

function z4() {
	var z5, z6, z7, z8, z9, zA, zB, zC, zD, zE, zF, zG, zH, zI, zJ, zK, zL, zM, zO, zP, zQ, zR, zS, zY, zZ, zN = null,
		zU = 0,
		zV = !1,
		zW = new Float32Array(4),
		zX = 0,
		za = 400;

	function zb() {
		zD = Math.floor(+c0.ge), zE = Math.floor(.5 * zD), zN.width = c0.bg, zN.height = c0.bh, zO = zN.getContext("2d", {
			alpha: !0
		}), cR.cU.textAlign(zO, 1), cR.cU.textBaseline(zO, 1), zO.imageSmoothingEnabled = !0
	}

	function zc() {
		var cC, zi;
		for (cc.font = cR.cU.cV(1, 100 * zF), zi = 80 / Math.floor(cc.measureText(cR.cS.cT(bO.c)).width), cc.font = cR.cU.cV(1, 100), cC = bO.b - 1; 0 <= cC; cC--) zC[cC] = 100 / Math.floor(cc.measureText(aN.jM[cC]).width), zB[cC] = Math.min(zi, zC[
			cC])
	}

	function zj(cC) {
		return !fa.hr.data[7].value || aN.dj[cC] < 1e6 ? 1 : aN.dj[cC] < 1e7 ? zW[0] : zW[Math.min(Math.floor(Math.log10(aN.dj[cC])) - 6, 3)]
	}

	function zh(gq) {
		zM = !1, zL = 1, zJ = zK = 0, gq.clearRect(0, 0, c0.bg, c0.bh);
		for (var zr, zs, cC, zt, fontSize, zu, dM = cF / cG, dN = cI / cG, dO = (c0.bg + cF) / cG, dP = (c0.bh + cI) / cG, zv = 0 !== aN.bN[bO.g] && aZ.n9(bO.g), dv = kd - 1; 0 <= dv; dv--) cC = lU[dv], (fontSize = Math.floor(zI * cG * zj(cC) * zB[
			cC] * z9[cC])) < zH || zD <= fontSize || z7[cC] + z9[cC] > dM && z7[cC] < dO && z8[cC] + zA[cC] > dN && z8[cC] < dP && (zr = Math.floor(c0.bg * (z7[cC] + z9[cC] / 2 - dM) / (dO - dM)), zs = Math.floor(c0.bh * (z8[cC] + zA[cC] / 2 -
				dN) / (dP - dN) - .1 * fontSize), zt = aZ.sk[cC], gq.font = cR.cU.cV(1 === aN.jN[cC] ? 4 : 1, fontSize), gq.fillStyle = zw(fontSize, zt % 2), fa.hr.data[7].value ? zx(gq, cC, fontSize, zr, zs, zt) : zy(cC, fontSize, zr, zs, gq),
			zM = !0, 0 < zQ[cC] ? function(zr, zs, fontSize, cC, gq) {
				0 === a00[cC] ? fO.rg.zm(zP[cC]) ? (function(zr, zs, fontSize, player, kK, gq) {
					for (var c9 = zs, bz = (gq.globalAlpha = a08(fontSize), zj(player) * (fa.hr.data[7].value ? zX : zC[player])), c8 = zr - .5 * fontSize / bz - .9 * fontSize, e6 = 0; e6 < 2; e6++) gq.fillText(fO.rg.a0E(kK), c8, c9),
						c8 = zr + .5 * fontSize / bz + .9 * fontSize;
					gq.globalAlpha = 1
				}(zr, zs, fontSize, cC, zP[cC], gq), a01(zr, zs, fontSize, 0, 0, gq)) : fO.rg.a0B(zP[cC]) ? (a0C(zr, zs, fontSize, zP[cC], 0, gq), a01(zr, zs, fontSize, 0, 1, gq)) : (a0C(zr, zs, fontSize, zP[cC], 1, gq), a01(zr, zs, fontSize,
					1, 0, gq)) : a0C(zr, zs, fontSize, zP[cC], 0, gq)
			}(zr, zs, fontSize, cC, gq) : 0 === a00[cC] && a01(zr, zs, fontSize, 0, 0, gq), zv && (0 < zQ[cC + bO.b] || 0 < zQ[cC + 2 * bO.b] || 0 < zQ[cC + 3 * bO.b] || 0 < zQ[cC + 4 * bO.b]) && function(zr, zs, fontSize, cC, gq) {
				var gk, pZ = -1;
				for (gk = 4; 1 <= gk; gk--) 0 < zQ[cC + gk * bO.b] && pZ++;
				for (gk = 1; gk < 5; gk++) 0 < zQ[cC + gk * bO.b] && (! function(zr, zs, fontSize, gk, cC, a06, cN, gq) {
					var gp;
					if (1 === gk) {
						cC = zP[cC + bO.b];
						if (!fO.rg.a0D(cC)) return function(zr, zs, fontSize, kK, a06, gq) {
							gq.globalAlpha = a08(fontSize);
							zr -= .534 * a06 * fontSize, a06 = zs + 1.59 * fontSize;
							gq.font = cR.cU.cV(0, .785 * fontSize), gq.fillText(fO.rg.a0E(kK), zr, a06), gq.globalAlpha = 1
						}(zr, zs, fontSize, cC, a06, gq);
						gp = fO.fP.gh[cC - 1024 + fO.rg.rk]
					} else gp = 2 === gk ? b1.vC()[4].ex[+(cN < 255)] : (3 === gk ? b1.vC()[5] : b1.vC()[6]).ex[0];
					cC = fO.fP.gg, cN = .8 * fontSize / cC, gk = zr - .5 * cN * cC - .534 * a06 * fontSize, zr = zs + 1.4 * cN * cC;
					gq.setTransform(cN, 0, 0, cN, gk, zr), gq.globalAlpha = a08(fontSize), gq.drawImage(gp, 0, 0), gq.globalAlpha = 1, gq.setTransform(1, 0, 0, 1, 0, 0)
				}(zr, zs, fontSize, gk, cC, pZ, zQ[cC + gk * bO.b], gq), pZ -= 2)
			}(zr, zs, fontSize, cC, gq), (zu = zF * fontSize) < zH || (gq.font = cR.cU.cV(1, zu), zs += Math.floor(.78 * fontSize), fa.hr.data[7].value ? zy(cC, zu, zr, zs, gq) : zx(gq, cC, zu, zr, zs, zt)))
	}

	function zy(cC, fontSize, ca, cb, gq) {
		var ___id = cC;
		gq.fillText(aN.jM[cC], ca, cb), cC < bO.h && 2 !== aN.jN[cC] || (cC = fontSize / zC[cC], gq.fillRect(ca - .5 * cC, cb + cR.cU.a04 * fontSize, cC, Math.max(1, .1 * fontSize)));
		fa.hr.data[7].value && settings.showPlayerDensity && (settings.coloredDensity && (gq.fillStyle = utils.textStyleBasedOnDensity(___id)), gq.fillText(utils.getDensity(___id), ca, cb + fontSize));
	}

	function zx(gq, cC, fontSize, zr, zs, zt) {
		var ___id = cC;
		cC = cR.cS.cT(aN.dj[cC]);
		zt >> 1 & 1 ? (gq.lineWidth = .05 * fontSize, gq.strokeStyle = zw(fontSize, zt % 2), gq.strokeText(cC, zr, zs)) : (1 < zt && (gq.lineWidth = .12 * fontSize, gq.strokeStyle = zw(fontSize, zt), gq.strokeText(cC, zr, zs)), gq.fillText(cC, zr,
			zs));
		fa.hr.data[7].value || settings.showPlayerDensity && (settings.coloredDensity && (gq.fillStyle = utils.textStyleBasedOnDensity(___id)), gq.fillText(utils.getDensity(___id), zr, zs + fontSize))
	}

	function a01(zr, zs, fontSize, a06, a07, gq) {
		var wu = .95 * fontSize / zS,
			zr = zr - .5 * wu * zR + .8 * a06 * fontSize,
			a06 = zs - 1.76 * wu * zS - (.35 - cR.cU.a04 + .7) * a07 * fontSize;
		gq.setTransform(wu, 0, 0, wu, zr, a06), gq.globalAlpha = a08(fontSize), gq.drawImage(gc.get(4), 0, 0), gq.globalAlpha = 1, gq.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a0C(zr, zs, fontSize, kK, a06, gq) {
		var go, c8, wu;
		gq.globalAlpha = a08(fontSize), fO.rg.a0D(kK) ? (go = fO.fP.gg, gq.setTransform(wu = 1.1 * fontSize / go, 0, 0, wu, c8 = zr - .5 * wu * go - .8 * a06 * fontSize, wu = zs - 1.55 * wu * go), gq.drawImage(fO.fP.gh[kK - 1024 + fO.rg.rk], 0, 0),
			gq.setTransform(1, 0, 0, 1, 0, 0)) : (c8 = zr - .8 * a06 * fontSize, wu = zs - (.35 - cR.cU.a04 + 1) * fontSize, gq.fillText(fO.rg.a0E(kK), c8, wu)), gq.globalAlpha = 1
	}

	function zw(fontSize, zt) {
		return zE <= fontSize && fontSize < zD ? aR.a0G[zt] + a08(fontSize).toFixed(3) + ")" : aR.a0H[zt]
	}

	function a08(fontSize) {
		return zE <= fontSize && fontSize < zD ? 1 - (fontSize - zE) / (zD - zE) : 1
	}

	function a0S(bz, bg) {
		return 1 + Math.floor(zG * bz * bg)
	}

	function a0P(cC) {
		for (var left = z7[cC], dv = z7[cC] - aN.eJ[cC] - 1; 0 <= dv; dv--)
			if (!a0V(cC, --left, z8[cC], zA[cC])) {
				left++;
				break
			} var right = z7[cC];
		for (dv = aN.eI[cC] - z7[cC] - z9[cC]; 0 <= dv; dv--)
			if (!a0V(cC, ++right + z9[cC] - 1, z8[cC], zA[cC])) {
				right--;
				break
			} var ca = Math.floor((left + right) / 2),
			top = z8[cC];
		for (dv = z8[cC] - aN.eM[cC] - 1; 0 <= dv; dv--)
			if (!a0W(cC, ca, --top, z9[cC])) {
				top++;
				break
			} var bottom = z8[cC];
		for (dv = aN.eL[cC] - z8[cC] - zA[cC]; 0 <= dv; dv--)
			if (!a0W(cC, ca, ++bottom + zA[cC] - 1, z9[cC])) {
				bottom--;
				break
			} var cb = Math.floor((top + bottom) / 2);
		a0M(cC, ca, cb, z9[cC], zA[cC]) && (z7[cC] = ca, z8[cC] = cb)
	}

	function a0M(player, ca, cb, bg, bh) {
		c1 = Math.floor(.2 * bg);
		for (var c1, gk = ca + bg - 1; ca <= gk; gk--)
			if (!a0V(player, gk, cb, bh)) return;
		for (gk = cb + bh - 1 - (c1 = (c1 = Math.floor(.25 * bh)) < 1 ? 1 : c1); cb + c1 <= gk; gk--)
			if (!a0W(player, ca, gk, bg)) return;
		return 1
	}

	function a0V(player, ca, cb, bh) {
		return aZ.a0X(player, 4 * (cb * cJ.cK + ca)) && aZ.a0X(player, 4 * ((cb + bh - 1) * cJ.cK + ca))
	}

	function a0W(player, ca, cb, bg) {
		return aZ.a0X(player, 4 * (cb * cJ.cK + ca)) && aZ.a0X(player, 4 * (cb * cJ.cK + ca + bg - 1))
	}
	this.aM = function() {
		if (za = 0 === (za = fa.hr.data[11].value) ? 280 : 1 === za ? 187 : 112, zM = !1, zI = .88, zF = .5, zG = 1.8, zH = 12 - 3 * fa.hr.data[9].value, z6 = z5 = 0, z7 = new Uint16Array(bO.b), z8 = new Uint16Array(bO.b), z9 = new Uint16Array(bO
				.b), zA = new Uint16Array(bO.b), zB = new Float32Array(bO.b), zC = new Float32Array(bO.b), zP = new Uint16Array(2 * bO.b), zQ = new Uint8Array(5 * bO.b), zY = new Uint8Array(bO.b), zZ = new Uint8Array(bO.b), zN = zN || document
			.createElement("canvas"), zb(), zK = zJ = 0, zL = 1, fa.hr.data[7].value) {
			var cC, zi;
			for (zc(), cc.font = cR.cU.cV(1, 100), zi = 100 / Math.floor(cc.measureText("900 000").width), cC = bO.b - 1; 0 <= cC; cC--) zB[cC] = Math.min(zi, 2 * zC[cC]);
			zX = zi, zW[0] = 100 / (zi * Math.floor(cc.measureText("5 000 000").width)), zW[1] = 100 / (zi * Math.floor(cc.measureText("50 000 000").width)), zW[2] = 100 / (zi * Math.floor(cc.measureText("500 000 000").width)), zW[3] = 100 / (
				zi * Math.floor(cc.measureText("1 000 000 000").width))
		} else zc();
		! function() {
			var cC;
			for (cC = bO.b - 1; 0 <= cC; cC--) aN.d0[cC] < 12 ? (z7[cC] = aN.eJ[cC] + 1, z8[cC] = aN.eM[cC] + 1, z9[cC] = 1, zA[cC] = 1) : (z7[cC] = aN.eJ[cC], z8[cC] = aN.eM[cC] + 1, z9[cC] = 4, zA[cC] = 2);
			if (bO.s)
				for (cC = 0; cC < bO.h; cC++) z9[cC] = 0;
			zR = gc.get(4).width, zS = gc.get(4).height
		}()
	}, this.lY = function(en, zf) {
		zf > 18 * aN.d0[en] ? (zZ[en] = 6, aZ.sk[en] = 2 + aZ.sk[en] % 2) : (zY[en] = 4, (aZ.sk[en] < 2 || 3 < aZ.sk[en]) && (aZ.sk[en] = 6 + aZ.sk[en] % 2))
	}, this.hI = function(en, zf) {
		zf > 6 * aN.d0[en] ? (zZ[en] = 6, aZ.sk[en] = 4 + aZ.sk[en] % 2) : (zY[en] = 4, (aZ.sk[en] < 4 || 5 < aZ.sk[en]) && (aZ.sk[en] = 8 + aZ.sk[en] % 2))
	}, this.resize = function() {
		zb(), zh(zO)
	}, this.nV = function() {
		for (var cC = 0; cC < bO.h; cC++) aN.eI[cC] - aN.eJ[cC] != 3 || aN.eL[cC] - aN.eM[cC] != 3 ? (z7[cC] = aN.eJ[cC] + (aN.eI[cC] !== aN.eJ[cC] ? 1 : 0), z8[cC] = aN.eM[cC], z9[cC] = 1, zA[cC] = 1) : (z7[cC] = aN.eJ[cC], z8[cC] = aN.eM[cC] +
			1, z9[cC] = 4, zA[cC] = 2)
	}, this.kN = function(player, bt, zk) {
		! function(player, bt, zk) {
			player += bt * bO.b;
			0 === bt ? zP[player] === zk && 0 < zQ[player] ? zQ[player] = 0 : (zP[player] = zk, zQ[player] = fO.rg.zm(zk) ? 255 : 64) : 1 === bt ? (zQ[player] = 64, zP[player] = zk) : zQ[player] = zk
		}(player, bt, zk), 2 === bO.p && this.bP(!0)
	}, this.cY = function() {
		zM && (1 !== zL ? (cc.imageSmoothingEnabled = !0, cc.setTransform(zL, 0, 0, zL, 0, 0), cc.drawImage(zN, -zJ / zL, -zK / zL), cc.setTransform(1, 0, 0, 1, 0, 0), cc.imageSmoothingEnabled = !1) : cc.drawImage(zN, -zJ, -zK))
	}, this.qq = function(gm, gn) {
		zJ += gm, zK += gn
	}, this.cM = function(gm, gn) {
		b8.qq(gm, gn)
	}, this.zoom = function(ct, c6, c7) {
		zL *= ct, zJ = (zJ + c6) * ct - c6, zK = (zK + c7) * ct - c7
	}, this.bP = function(zo) {
		return !(!zV && !zo && bE.dH < zU + (1 === zL && 0 === zJ && 0 === zK && (bO.bb() || bO.s || 2 === bO.p) ? 1e3 : za) || (zV = !1, zU = bE.dH, zh(zO), 0))
	}, this.zp = function(cC) {
		return zj(cC) * zB[cC]
	}, this.zq = function(player) {
		return zB[player]
	}, this.fx = function() {
		bE.dK() % 10 == 9 && (zV = bO.be() && !bO.bb()), !bO.bb() && 4 <= ++z6 && function() {
			var cC, dv, e6;
			for (z6 = 0, e6 = 4; 1 <= e6; e6--)
				for (dv = kd - 1; 0 <= dv; dv--) cC = lU[dv] + e6 * bO.b, 0 < zQ[cC] && zQ[cC] < 255 && zQ[cC]--;
			if (2 !== bO.p)
				for (dv = kd - 1; 0 <= dv; dv--) cC = lU[dv], 0 < zQ[cC] && zQ[cC] < 255 && zQ[cC]--
		}();
		for (var cx = Math.floor(.1 * kd), cC = z5 + (cx = kd < (cx = cx < 8 ? 8 : cx) ? kd : cx) - 1; z5 <= cC; cC--) ! function(cC) {
			var bz = zj(cC) * zB[cC];
			0 < z9[cC] && a0M(cC, z7[cC], z8[cC], z9[cC], zA[cC]) ? ! function(cC) {
				for (var ca, cb, bg, bh, cu = !1, e6 = 0; e6 < 8; e6++) {
					if (bg = z9[cC] + 2, bh = zA[cC] + 2, bg > aN.eI[cC] - aN.eJ[cC] + 1 || bh > aN.eL[cC] - aN.eM[cC] + 1) return cu;
					if (ca = z7[cC] - 1, cb = z8[cC] - 1, !a0M(cC, ca, cb, bg, bh)) return cu;
					z7[cC] = ca, z8[cC] = cb, z9[cC] = bg, zA[cC] = bh, cu = !0
				}
				return cu
			}(cC) && function(cC, bz) {
				for (var ca, cb, bg, bh, cu = !1, a0T = z9[cC], gd = 1 + Math.floor(.02 * a0T), e6 = 1; e6 < 5; e6++) {
					if ((bg = a0T + e6 * gd) > aN.eI[cC] - aN.eJ[cC] + 1) return cu;
					if ((bh = a0S(bz, bg)) > aN.eL[cC] - aN.eM[cC] + 1) return cu;
					ca = aN.eJ[cC] + Math.floor(Math.random() * (aN.eI[cC] - aN.eJ[cC] + 2 - bg)), cb = aN.eM[cC] + Math.floor(Math.random() * (aN.eL[cC] - aN.eM[cC] + 2 - bh)), a0M(cC, ca, cb, bg, bh) && (z7[cC] = ca, z8[cC] = cb, z9[
						cC] = bg, zA[cC] = bh, cu = !0)
				}
				return cu
			}(cC, bz) && a0P(cC) : ! function(cC, bz) {
				var bh, ca = z7[cC] + 1,
					cb = z8[cC] + 1,
					bg = z9[cC] - 2;
				for (;;) {
					if (bg < 1) {
						z9[cC] = 0;
						break
					}
					if (bh = a0S(bz, bg), a0M(cC, ca, cb, bg, bh)) return z7[cC] = ca, z8[cC] = cb, z9[cC] = bg, zA[cC] = bh, 1;
					ca++, cb++, bg -= 2
				}
				return
			}(cC, bz) ? function(cC, bz) {
				var ca, cb, bg, bh, e6, h3, dy = aN.eI[cC] - aN.eJ[cC] + 1,
					a0U = Math.floor(.02 * dy);
				for (h3 = -6 * (a0U = a0U < 1 ? 1 : a0U), e6 = dy; h3 <= e6; e6 -= a0U)
					if (bh = a0S(bz, bg = 0 < e6 ? e6 : 1), ca = aN.eJ[cC] + Math.floor(Math.random() * (aN.eI[cC] - aN.eJ[cC] + 2 - bg)), cb = aN.eM[cC] + Math.floor(Math.random() * (aN.eL[cC] - aN.eM[cC] + 2 - bh)), a0M(cC, ca, cb, bg,
							bh)) return z7[cC] = ca, z8[cC] = cb, z9[cC] = bg, zA[cC] = bh
			}(cC, bz) : a0P(cC)
		}(lU[cC % kd]);
		z5 = (z5 + cx) % kd
	}, this.wy = function() {
		var cC, en, sC, wY;
		if (bE.dK() % 4 == 1)
			for (cC = kd - 1; 0 <= cC; cC--) en = lU[cC], aZ.sk[en] < 2 || ((sC = Math.max(zY[en] - 1, 0)) === (wY = Math.max(zZ[en] - 1, 0)) ? 0 === sC && (aZ.sk[en] %= 2) : 0 === wY && aZ.sk[en] < 6 && (aZ.sk[en] += 4), zY[en] = sC, zZ[en] =
				wY)
	}, this.a0K = function(player) {
		var cC = player + 2 * bO.b,
			cN = zQ[cC];
		return 0 < cN && (az.a0L(50, player), zQ[cC] = 0, 255 === cN)
	}, this.vs = function(player) {
		return 255 === zQ[player + 2 * bO.b]
	}
}

function a0Y() {
	var lV, bg, bh, max, a0Z, q7, a0b, a0c, a0d, a0e, a0f, a0g, a0h, a0i, a0a = 1e4;

	function a0p(a0o, q6, cx) {
		var cC;
		for (a0b[0] = a0o, cC = 1; cC < cx; cC++) a0b[cC] = a0b[cC - 1] + q6, q6 = a0b[cC] >= a0a ? (a0b[cC] = a0a - 1, -q6) : a0b[cC] < 0 ? (a0b[cC] = 0, -q6) : (q6 += 16384 <= aJ.random() ? q7 : -q7) < -a0Z ? -a0Z : a0Z < q6 ? a0Z : q6
	}

	function a0r(ca, cb, a0s, cx) {
		(a0s ? function(ca, cb, cx) {
			var cC;
			for (cC = 0; cC < cx; cC++) lV[cb * bg + ca + cC] = a0b[cC]
		} : function(ca, cb, cx) {
			var cC;
			for (cC = 0; cC < cx; cC++) lV[cb * bg + ca + cC * bg] = a0b[cC]
		})(ca, cb, cx)
	}

	function a0v(value, cx) {
		var cC, a0U, cu, dx = value - a0b[cx - 1];
		if (0 != dx) {
			for (a0U = 1 + cA(Math.abs(dx), cx - 1), a0U = dx < 0 ? -a0U : a0U, a0b[cx - 1] = value, cu = (cu = cx - 1 - cA(Math.abs(dx), Math.abs(a0U))) < 1 ? 1 : cx - 2 < cu ? cx - 2 : cu, cC = cx - 2; cu <= cC; cC--) a0b[cC] += dx - (cx - 1 -
				cC) * a0U;
			(dx < 0 ? function(cx) {
				var cC;
				for (cC = cx - 2; 1 <= cC; cC--) a0b[cC] < 0 && (a0b[cC] = -a0b[cC] - 1)
			} : function(cx) {
				var cC;
				for (cC = cx - 2; 1 <= cC; cC--) a0b[cC] >= a0a && (a0b[cC] = 2 * a0a - a0b[cC] - 1)
			})(cx)
		}
	}

	function a0y(a0z, a10, cx) {
		for (var cC = 0; cC < cx; cC++) a0z[cC] = a10[cC]
	}

	function a11(cr) {
		for (var cC = 0; cC < cr.length - 1; cC++) cr[cC] = cr[cC + 1] - cr[cC];
		cr[cr.length - 1] = cr[cr.length - 3]
	}

	function a12(vO, gap, dk) {
		a0c.push(vO), a0d.push(gap), a0e.push(dk)
	}
	this.af = function(fB) {
		! function(fB) {
			var cC;
			for (bg = fB[0], bh = fB[1], a0Z = fB[2], q7 = fB[3], lV = new Int16Array(bg * bh), max = bh < bg ? bg : bh, a0b = new Int16Array(max), a0c = [], a0d = [], a0e = [], a0f = new Array(bg), a0g = new Array(bh), cC = bg - 1; 0 <=
				cC; cC--) a0f[cC] = !1;
			for (cC = bh - 1; 0 <= cC; cC--) a0g[cC] = !1;
			a0h = new Int16Array(bg), a0i = new Int16Array(bh)
		}(fB),
		function(cx) {
			var a0o = aJ.random() % a0a,
				q6 = aJ.random() % (2 * a0Z + 1) - a0Z;
			a0p(a0o, q6, cx)
		}(max), a0y(a0i, a0b, bh), a0r(0, 0, !0, bg);
		var ca, cb, fB = lV[0],
			cx = max,
			q6 = aJ.random() % (2 * a0Z + 1) - a0Z;
		for (a0p(fB, q6, cx), a0y(a0h, a0b, bg), a0r(0, 0, !1, bh), a11(a0h), a11(a0i), a0p(lV[bg - 1], a0h[bg - 1], bh), a0r(bg - 1, 0, !1, bh), a0p(lV[bg * (bh - 1)], a0i[bh - 1], bg), a0v(lV[bg * bh - 1], bg), a0r(0, bh - 1, !0, bg), a0f[bg -
				1] = a0f[0] = !0, a0g[bh - 1] = a0g[0] = !0, a12(0, bg, !0), a12(0, bh, !1), ! function() {
				var tJ, vO;
				for (;;) {
					if (tJ = function() {
							var cC, tJ = a0c.length - 1;
							for (cC = tJ - 1; 0 <= cC; cC--) a0d[cC] > a0d[tJ] && (tJ = cC);
							return tJ
						}(), a0d[tJ] < 5) return;
					vO = a0c[tJ] + cA(a0d[tJ], 2), (a0e[tJ] ? function(ca) {
						var cx, a16, cC, a17 = 0,
							a18 = 0;
						for (; a18 < bh - 1;) {
							for (cC = a17 + 1; cC < bh; cC++)
								if (a0g[cC]) {
									a18 = cC;
									break
								} cx = a18 - a17 + 1, a0p(lV[ca + bg * a17], 0 === a17 ? a0h[ca] : a0b[a16 - 1] - a0b[a16 - 2], cx), a0v(lV[a18 * bg + ca], cx), a0r(ca, a17, !1, cx), a16 = cx, a17 = a18
						}
						a0f[ca] = !0
					} : function(cb) {
						var cx, a16, cC, a17 = 0,
							a18 = 0;
						for (; a18 < bg - 1;) {
							for (cC = a17 + 1; cC < bg; cC++)
								if (a0f[cC]) {
									a18 = cC;
									break
								} cx = a18 - a17 + 1, a0p(lV[cb * bg + a17], 0 === a17 ? a0i[cb] : a0b[a16 - 1] - a0b[a16 - 2], cx), a0v(lV[cb * bg + a18], cx), a0r(a17, cb, !0, cx), a16 = cx, a17 = a18
						}
						a0g[cb] = !0
					})(vO), a12(vO, a0c[tJ] + a0d[tJ] - vO, a0e[tJ]), a0d[tJ] = vO - a0c[tJ] + 1
				}
			}(), ca = 0; ca < bg; ca++)
			if (!a0f[ca])
				for (cb = 0; cb < bh; cb++) a0g[cb] || ! function(ca, cb) {
					var value = lV[cb * bg + ca - 1] + lV[(cb - 1) * bg + ca],
						a1A = 2;
					a0f[ca + 1] && (a1A++, value += lV[cb * bg + ca + 1]);
					a0g[cb + 1] && (a1A++, value += lV[(cb + 1) * bg + ca]);
					lV[cb * bg + ca] = cA(value, a1A)
				}(ca, cb)
	}, this.sr = function() {
		return lV
	}, this.so = function() {
		lV = null
	}
}

function a1B() {
	var kh, bh, sQ, a1C, a1D, a1E, a1F, a1G, a1H;

	function hN() {
		return ar.a1a(az.a1X()) ? au.bv ? ar.cb - ar.bh - 2 * sQ : ar.cb - sQ : at.a1a(az.a1Z()) ? au.bv ? at.hN() - ar.bh - 2 * sQ : at.hN() - sQ : au.bv ? c0.bh - ar.bh - (a1b.tY() + 1) * sQ : c0.bh - a1b.tY() * c3.gap
	}

	function a1O(cN, f8, id, en, a1R, a1S, a1T, a1U, a1V) {
		var cC, kp, gp, tK, cr, a1f = void 0 !== a1V,
			bg = Math.floor(ay.measureText(f8, az.kl) + 1.5 * a1C + (a1f ? bh : 1.5 * a1C));
		if (bE.bI = !0, bg + sQ > c0.bg && !a1f && 50 !== id && 20 < f8.length) a1O(cN, (cr = cR.cS.a1g(f8))[0], id, en, a1R, a1S, a1T, a1U, a1V), a1O(cN, cr[1], id, en, a1R, a1S, a1T, a1U, a1V);
		else if (cr = bg + (50 === id ? a1D : 0), (gp = document.createElement("canvas")).width = bg, gp.height = bh, (kp = gp.getContext("2d", {
				alpha: !0
			})).font = az.kl, cR.cU.textBaseline(kp, 1), cR.cU.textAlign(kp, 0), kp.clearRect(0, 0, bg, bh), kp.fillStyle = a1S, kp.fillRect(0, 0, bg, bh), kp.fillStyle = a1R, kp.fillText(f8, Math.floor(1.5 * a1C), Math.floor(bh / 2)), a1f && (kp
				.imageSmoothingEnabled = !0, fO.fP.rl(a1V, kp, bg - bh, 0, bh)), 0 === (tK = {
				dH: cN,
				f8: f8,
				id: id,
				player: en,
				ex: gp,
				a1R: a1R,
				a1S: a1S,
				bg: bg,
				a1Y: cr,
				a1T: a1T,
				a1U: a1U,
				a1V: a1V
			}).dH || 0 < kh.length && 0 < kh[0].dH) kh.unshift(tK);
		else {
			for (cC = 1; cC < kh.length; cC++)
				if (0 < kh[cC].dH) return void kh.splice(cC, 0, tK);
			kh.push(tK)
		}
	}

	function a1Q(gu, mj, e6) {
		return "rgb(" + gu + "," + mj + "," + e6 + ")"
	}

	function a1h(id, pZ) {
		for (var cx = kh.length, cC = 0; cC < cx; cC++) kh[cC].id === id && pZ-- <= 0 && (kh.splice(cC, 1), cC--, cx--)
	}

	function a1i(id, player) {
		for (var a2C = !1, cC = kh.length - 1; 0 <= cC; cC--) kh[cC].id !== id || player !== bO.b && kh[cC].player !== player || (kh.splice(cC, 1), a2C = !0);
		return a2C
	}

	function a2F(f8) {
		a1O(340, f8, 6, 0, a1Q(215, 245, 255), cd.ce, -1, !1)
	}
	this.a1I = "", this.aM = function() {
		var self;
		a1G = 0, a1F = bJ.bK.c2() ? 7 : 12, a1E = {
			a7: [0, 0, 0],
			a1J: [0, 0, 0],
			l0: [220, 180, 180],
			mb: [0, 0, 0],
			gk: [0, 0, 0]
		}, kh = [], this.resize(), bO.s && this.a1K(0, 18), a2F(he.qC(37, [cJ.aD.kv[cJ.kw].name])), a2F(he.qC(38, [cJ.cK - 2, cJ.cL - 2])), a2F(he.qC(39, [aU.a2G], {
			a1t: [0]
		})), aU.a2G !== aU.a2H && a2F(he.qC(40, [aU.a2H, aU.a2H / aU.a2G], {
			a1t: [0],
			a2I: [1]
		})), 0 < aU.a2J && a2F(he.qC(41, [aU.a2J, aU.a2J / aU.a2G], {
			a1t: [0],
			a2I: [1]
		})), 0 < aU.a2K && a2F(he.qC(42, [aU.a2K, aU.a2K / aU.a2G], {
			a1t: [0],
			a2I: [1]
		})), 10 === bO.w && a1O(120, he.qC(43), 6, 0, a1Q(235, 255, 120), cd.ce, -1, !1), 0 !== (self = this).a1I.length && (a1O(200, self.a1I, 0, 0, cd.co, cd.ce, -1, !1), self.a1I = ""), this.a1N()
	}, this.a1N = function() {
		var cC, cx;
		if (aB.aC)
			for (cx = aB.aD.a1P.length, cC = 0; cC < cx; cC++) a1O(400, aB.aD.a1P[cC], 6, 0, a1Q(255, 255, 255), cd.ce, -1, !1)
	}, this.resize = function() {
		var uE, cC;
		if (bh = (bh = Math.floor((bJ.bK.c2() ? .031 : .0249) * c0.ge)) < 10 ? 10 : bh, this.fontSize = Math.floor(2 * bh / 3), this.kl = cR.cU.cV(1, this.fontSize), sQ = c3.gap, a1C = Math.floor(bh / 5), 0 < kh.length)
			for (uE = kh, kh = [], cC = uE.length - 1; 0 <= cC; cC--) a1O(uE[cC].dH, uE[cC].f8, uE[cC].id, uE[cC].player, uE[cC].a1R, uE[cC].a1S, uE[cC].a1T, uE[cC].a1U, uE[cC].a1V);
		this.a1W()
	}, this.a1W = function() {
		a1H = document.createElement("canvas");
		var f8 = he.qC(0),
			kp = (a1D = ay.measureText(f8, this.kl) + 5 * a1C, a1H.height = bh, a1H.width = a1D, a1H.getContext("2d", {
				alpha: !0
			}));
		kp.font = this.kl, cR.cU.textBaseline(kp, 1), cR.cU.textAlign(kp, 1), kp.clearRect(0, 0, a1D, bh), kp.fillStyle = cd.hh, kp.fillRect(0, 0, a1D, bh), kp.fillStyle = cd.co, kp.fillText(f8, Math.floor(a1D / 2), Math.floor(bh / 2))
	}, this.a1X = function() {
		var cx;
		return au.bv ? au.bg : 0 === (cx = kh.length) ? 0 : 1 === cx ? kh[0].a1Y : rx(kh[0].a1Y, kh[1].a1Y)
	}, this.a1Z = function() {
		var cx = kh.length;
		return au.bv ? cx ? rx(au.bg, kh[0].a1Y) : au.bg : 0 === cx ? 0 : 1 === cx ? kh[0].a1Y : 2 === cx ? rx(kh[0].a1Y, kh[1].a1Y) : rx(rx(kh[0].a1Y, kh[1].a1Y), kh[2].a1Y)
	}, this.c5 = function(ca, cb) {
		for (var qX, a1c = hN(), cC = kh.length - 1; 0 <= cC; cC--)
			if ((qX = a1c - (cC + 1) * bh) <= cb && cb < qX + bh) return 50 === kh[cC].id ? ca >= c0.bg - a1D - sQ - kh[cC].bg && (ca >= c0.bg - a1D - sQ ? aO.gv.vb(kh[cC].player) : bL.uV(kh[cC].player, 800, !1, 0), !0) : ca >= c0.bg - kh[cC]
				.bg - sQ && (736 === kh[cC].id ? window.open("https://" + kh[cC].f8, "_blank") : kh[cC].a1U && (bL.uV(kh[cC].player, 800, !1, 0), 0 <= kh[cC].a1T) && (qX = kh[cC].a1T, kh[cC].a1T = kh[cC].player, kh[cC].player = qX), !0);
		return !1
	}, this.a1d = function(cN, f8, id, en, a1R, a1S, a1T, a1U, a1V) {
		a1O(cN, f8, id, en, a1R, a1S, a1T, a1U, a1V)
	}, this.a1e = function(qJ) {
		a1O(300, qJ, 252, 0, cd.co, cd.ce, -1, !1)
	}, this.ns = function(id) {
		for (var cC = kh.length - 1; 0 <= cC; cC--) kh[cC].id === id && (kh[cC].dH = 1)
	}, this.a1K = function(player, id) {
		0 === id ? (aS.cz[player < bO.h ? 4 : 3]++, ay.dc(player, 0), a1h(423, 0), a1O(160, he.qC(1, [aN.jM[player]]), 423, player, "rgb(10,220,10)", cd.ce, -1, !1)) : 1 === id ? (a1i(50, bO.b), ay.dc(player, 1), a1O(360, he.qC(2, [aN.jM[
			player]]), 0, player, cd.a1j, cd.ce, -1, !0), bL.uV(player, 2700, !1, 0)) : 2 === id ? (ay.dc(player, 2), a1O(0, he.qC(3), 0, player, "rgb(10,255,255)", cd.ce, -1, !0), bL.uV(player, 2700, !1, 0)) : 3 === id ? (ay.dc(player, 2),
			a1O(0, he.qC(4, [aN.jM[player]]), 0, player, cd.co, cd.ce, -1, !0), bL.uV(player, 2700, !1, 0)) : 4 === id ? this.a1k(1, player, player) : 5 === id ? 2 !== aN.jN[player] && aZ.n9(bO.g) && (function(id, a1v) {
			var cC, a1w = 0,
				cx = kh.length;
			for (cC = 0; cC < cx; cC++)
				if (kh[cC].id === id && a1v <= ++a1w) return kh.splice(cC, 1)
		}(1, 5), b8.a0K(player) ? a1O(180, he.qC(5, [aN.jM[player]]), 1, player, a1Q(255, 200, 180), cd.ce, -1, !0) : (a1h(573, 0), a1O(180, he.qC(6, [aN.jM[player]]), 573, player, cd.a1j, cd.ce, -1, !0))) : 18 === id ? a1O(255, he.qC(7), 18,
			0, cd.co, cd.ce, -1, !1) : 21 === id ? a1O(220, he.qC(8), id, 0, cd.co, cd.ce, -1, !1) : 22 === id ? this.a1k(2, player, player) : 59 === id && a1O(0, he.qC(9), id, 0, cd.a1m, cd.ce, 0, !1)
	}, this.nh = function(qJ) {
		a1O(200, he.qC(10, [qJ]), 94, 0, cd.co, cd.a1n, -1, !1)
	}, this.a1o = function(a1p) {
		if (bO.g === a1p && !bO.n)
			wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter),
			a1O(0, "Your Win Count is now " + wins_counter, 3, a1p, cd.co, cd.ce, -1, !0);
		ay.dc(a1p, 2), bO.h < 100 ? a1O(0, he.qC(4, [aN.jM[a1p]]), 3, a1p, cd.co, cd.ce, -1, !0) : a1O(0, he.qC(12, [aN.jM[a1p]]), 3, a1p, cd.co, cd.ce, -1, !0), bL.uV(a1p, 2700, !1, 0)
	}, this.vx = function(cu) {
		var d5 = "(" + ab.nm(cu >> 2) + ", " + ab.nn(cu >> 2) + ")",
			a1U = !1,
			player = 0;
		aZ.hU(cu) ? aZ.ds(cu) ? d5 = he.qC(13, [d5]) : (player = aZ.dq(cu), d5 = he.qC(14, [cR.kp.sY(aN.jL[player], cR.cU.cV(0, 10), 150), cR.cS.cT(aN.dj[player]), cR.cS.cT(aN.d0[player]), d5]), a1U = !0) : d5 = aZ.vo(cu) ? he.qC(15, [d5]) : he
			.qC(16, [d5]), bE.bI = !0, a1h(55, 0), a1O(220, d5, 55, player, cd.co, cd.ce, -1, a1U)
	}, this.vz = function(a1q) {
		var cs = ac.bT,
			player = cs.a1r[a1q] >> 3;
		bE.bI = !0, a1h(55, 0), a1O(220, he.qC(17, [aN.jM[player], cs.a1s[a1q]], {
			a1t: [1]
		}), 55, player, cd.co, cd.ce, -1, !0)
	}, this.my = function(fz, gS, kK) {
		fz === bO.g ? a1O(175, he.qC(18, [aN.jM[gS]]), 1001, gS, a1Q(200, 255, 210), cd.ce, -1, !0, kK) : this.a1u(fz, kK)
	}, this.a1u = function(fz, kK) {
		a1h(1e3, 0), a1O(175, he.qC(19, [aN.jM[fz]]), 1e3, fz, cd.co, "rgba(5,60,25,0.9)", -1, !0, kK)
	}, this.a1x = function() {
		var qJ;
		bO.a2 ? (qJ = he.qC(20), ay.ku(he.qC(21), 2, 1, 12), a1O(0, qJ, 40, 0, "rgb(10,220,10)", cd.ce, -1, !1)) : (qJ = he.qC(22), ay.ku(he.qC(23), 2, 0, 16), a1O(0, qJ, 41, 0, cd.co, cd.ce, -1, !1)), bL.ub(2700)
	}, this.a1y = function(a7) {
		a1O(300, a7[0].name + " [" + bO.z.a1z(a7[0].a20) + "] vs " + a7[1].name + " [" + bO.z.a1z(a7[1].a20) + "]", 65, 0, cd.l6, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a21 = function(qJ) {
		a1O(200, qJ, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a22 = function(a23) {
		a1O(0, he.qC(a23 ? 24 : 129), 247, 0, cd.a24, cd.ce, -1, !1)
	}, this.a25 = function(a7, a26, a27, a28) {
		a1O(0, a7[0].name + ": " + bO.z.a1z(a7[0].a20) + " -> " + a26, 66, 0, cd.co, a28[0], -1, !1), a1O(0, a7[1].name + ": " + bO.z.a1z(a7[1].a20) + " -> " + a27, 66, 1, cd.co, a28[1], -1, !1)
	}, this.a29 = function(player, id) {
		0 === id ? a1i(50, player) ? (a1O(128, he.qC(25, [aN.jM[player]]), 52, player, a1Q(180, 255, 180), cd.ce, -1, !0), b8.kN(player, 2, 255)) : a1O(384, he.qC(26, [aN.jM[player]]), 51, player, a1Q(210, 210, 255), cd.ce, -1, !0) : a1i(51,
			player) ? (a1O(128, he.qC(27, [aN.jM[player]]), 52, player, cd.co, "rgba(60,120,10,0.9)", -1, !0), b8.kN(player, 2, 255)) : (a1O(384, he.qC(28, [aN.jM[player]]), 50, player, cd.co, "rgba(90,90,90,0.9)", -1, !0), b8.kN(player, 2,
			96))
	}, this.a2A = function(a7, target) {
		var color = a1Q(210, 255, 210);
		1 < a7.length ? a1O(230, he.qC(29, [a7.length, aN.jM[target]]), 66, target, color, cd.ce, -1, !0) : a1O(230, he.qC(30, [aN.jM[a7[0]], aN.jM[target]]), 66, a7[0], color, cd.ce, target, !0)
	}, this.a2B = function(player, target) {
		a1O(230, he.qC(31, [aN.jM[player], aN.jM[target]]), 66, player, cd.co, "rgba(75,65,5,0.9)", target, !0)
	}, this.a0L = function(id, player) {
		a1i(id, player)
	}, this.mq = function() {
		var bt;
		100 <= aN.dj[bO.g] || (-1 === (bt = function(id) {
			for (var cC = kh.length - 1; 0 <= cC; cC--)
				if (kh[cC].id === id) return cC;
			return -1
		}(143)) ? a1O(80, he.qC(32), 143, 0, cd.co, cd.ce, -1, !1) : kh[bt].dH = 80)
	}, this.hG = function(zf, a2E, player) {
		2 !== aN.jN[bO.g] && (a1O(200, he.qC(33, [zf, aN.jM[player]], {
			a1t: [0]
		}), 30, player, "rgb(190,255,190)", cd.ce, -1, !0), a2E) && a1O(30, he.qC(34, [a2E], {
			a1t: [0]
		}), 30, 0, cd.co, cd.ce, -1, !1)
	}, this.hH = function(zf, player) {
		2 !== aN.jN[bO.g] && (a1h(31, 0), 2 === aN.jN[player] || player >= bO.h ? a1O(150, he.qC(36, [aN.jM[player], zf], {
			a1t: [1]
		}), 31, player, cd.l6, "rgba(205,205,205,0.9)", -1, !0) : a1O(150, he.qC(35, [aN.jM[player], zf], {
			a1t: [1]
		}), 31, player, cd.l6, "rgba(205,255,205,0.9)", -1, !0))
	}, this.a2L = function(zo) {
		for (var gk = bE.dK(), cC = 2; 0 <= cC; cC--) 0 < a1E.mb[cC] && (zo || a1E.gk[cC] < gk - 220) && this.a2M(cC)
	}, this.a2M = function(id) {
		var f8, cx = a1E.mb[id],
			player = a1E.a7[id];
		a1E.mb[id] = 0, 1 === cx ? (f8 = 0 === id ? he.qC(47, [aN.jM[player], aN.jM[a1E.a1J[0]]]) : he.qC(47 + id, [aN.jM[player]]), a1h(7, 0), a1O(a1E.l0[id], f8, 7, a1E.a1J[id], cd.co, cd.ce, -1, !0)) : 2 <= cx && (f8 = he.qC(44 + id, [aN.jM[
			player], cx - 1]), a1h(7, 0), a1O(a1E.l0[id], f8, 7, player, cd.co, cd.ce, -1, !1))
	}, this.a1k = function(id, gz, a1T) {
		var gk = bE.dK(),
			cx = a1E.mb[id] + 1;
		a1E.mb[id]++, a1E.a7[id] = gz, a1E.a1J[id] = a1T, 1 === cx && (a1E.gk[id] = gk), (1 === cx && (bO.i < 32 || 2 === bO.p) || 1 < cx && (a1E.gk[id] < gk - 140 || 2 === bO.p)) && this.a2M(id)
	}, this.fx = function() {
		for (var dx = (dx = kh.length - a1F) <= 1 ? 1 : dx * dx, cC = kh.length - 1; 0 <= cC; cC--) 0 < kh[cC].dH && (kh[cC].dH -= dx, kh[cC].dH <= 0) && (bE.bI = !0, kh.splice(cC, 1));
		! function() {
			var pZ, cC;
			if (128 !== a1G && !(++a1G < 128))
				for (pZ = 5, cC = kd - 1; 0 <= cC; cC--) 1 === aN.jN[lU[cC]] && 0 < pZ-- && a1O(240, he.qC(50, [aN.jM[lU[cC]]]), 1, lU[cC], cd.l6, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a2L(!1)
	}, this.cY = function() {
		for (var c9, cb = hN(), cC = kh.length - 1; 0 <= cC; cC--) c9 = cb - (cC + 1) * bh, 50 === kh[cC].id ? (cc.drawImage(kh[cC].ex, c0.bg - kh[cC].bg - a1D - sQ, c9), cc.drawImage(a1H, c0.bg - a1D - sQ, c9)) : cc.drawImage(kh[cC].ex, c0.bg -
			kh[cC].bg - sQ, c9)
	}
}

function a2O() {
	var ey, a2P;
	this.aM = function() {
		ey = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var cC, dv, fn = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			a2Q = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (a2P =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), cC = ey.length - 1; 0 <= cC; cC--)
			for (dv = fn.length - 1; 0 <= dv; dv--) ey[cC] = ey[cC].replace(fn[dv], a2Q[dv]);
		if (settings.realisticNames) ey = realisticNames;
	}, this.af = function() {
		var cC;
		if (aB.aC && aB.aD.a2R)
			for (cC = bO.h; cC < bO.b; cC++) aN.jM[cC] = aN.jL[cC] = aB.aD.a2R[cC % bO.l];
		else(9 === bO.w ? function() {
			var cC, gu = aJ.random(),
				cx = ey.length,
				cs = bO.h + aL.a2W;
			for (cC = cs - 1; cC >= bO.h; cC--) aN.jM[cC] = aN.jL[cC] = ey[(cC + gu) % cx];
			for (cx = a2P.length, cC = cs; cC < bO.b; cC++) aN.jM[cC] = aN.jL[cC] = a2P[cC % cx]
		} : bO.n ? function() {
			var cC, gu = aJ.random();
			for (cC = bO.h; cC < bO.b; cC++) aN.jM[cC] = aN.jL[cC] = ey[(cC + gu) % bO.b]
		} : function() {
			var cC, cx = ey.length,
				gu = aJ.random();
			for (cC = bO.h; cC < bO.b; cC++) aN.jM[cC] = aN.jL[cC] = ey[(cC + gu) % cx]
		})()
	}
}

function a2X() {
	var a2Y, a2Z, a2a, a2b, a2c, a2d, a2e, a2f;

	function a2h(cC) {
		var dv;
		for (a2a--, dv = cC; dv < a2a; dv++) a2b[dv] = a2b[dv + 1], a2c[dv] = a2c[dv + 1], a2d[dv] = a2d[dv + 1], a2e[dv] = a2e[dv + 1], a2f[dv] = a2f[dv + 1]
	}
	this.aM = function() {
		a2Y = 1, a2a = 0, a2Z = 2 * bO.b, a2b = new Uint16Array(a2Z), a2c = new Uint8Array(a2Z), a2d = new Uint16Array(a2Z), a2e = new Uint32Array(a2Z), a2f = new Uint32Array(a2Z)
	}, this.hY = function(bt, position) {
		a2e[bt] = position
	}, this.fx = function() {
		for (var cC = a2a - 1; 0 <= cC; cC--) 0 == a2c[cC]-- && (a2c[cC] = 2, a2g.fx(cC, a2d[cC], a2b[cC], a2e[cC], a2f[cC]))
	}, this.hD = function(player, id) {
		for (var cC = a2a - 1; 0 <= cC; cC--)
			if (player === a2b[cC] && id === a2d[cC]) return void a2h(cC)
	}, this.a2i = function(player) {
		for (var cC = a2a - 1; 0 <= cC; cC--) player === a2b[cC] && (a2g.hK(player, a2e[cC]), a2h(cC))
	}, this.de = function(player, dy, a2j) {
		if (a2Z <= a2a) return 0;
		a2b[a2a] = player, a2c[a2a] = 0, a2d[a2a] = a2Y, a2e[a2a] = dy, a2f[a2a] = a2j;
		player = a2Y;
		return a2a++, a2Y = 2 * a2Z < ++a2Y ? 1 : a2Y, player
	}, this.cY = function() {
		if (!(cG < 40 || 0 === a2a)) {
			var dv, ca, cb, cC, fontSize, zu, dh, dM = cF / cG,
				dN = cI / cG,
				dO = (c0.bg + cF) / cG,
				dP = (c0.bh + cI) / cG;
			for (cR.cU.textAlign(cc, 1), cR.cU.textBaseline(cc, 1), dv = a2a - 1; 0 <= dv; dv--) ca = aZ.hM(a2e[dv]), cb = aZ.hN(a2e[dv]), cC = a2b[dv], dM - 1 < ca && ca < dO && dN - 1 < cb && cb < dP && 0 !== aN.bN[cC] && ((fontSize = Math
				.floor(.94 * cG * b8.zp(cC))) < 6 || (ca = Math.floor(c0.bg * (ca + .5 - dM) / (dO - dM)), cb = Math.floor(c0.bh * (cb + .48 - dN) / (dP - dN)), cc.font = cR.cU.cV(1, fontSize), cc.fillStyle = cd.l6, dh = b7.hX(cC, b7.hW(
				cC, a2d[dv])), cc.fillText(fa.hr.data[7].value ? cR.cS.cT(dh) : aN.jM[cC], ca, cb), (zu = Math.floor(.5 * fontSize)) < 6) || (cc.font = cR.cU.cV(1, zu), cc.fillText(fa.hr.data[7].value ? aN.jM[cC] : cR.cS.cT(dh), ca, cb +
				Math.floor(.82 * fontSize))))
		}
	}
}

function a2m(player) {
	a2n(player), a2o(player), a2p(player), b4.hD(player), b3.a2i(player), b7.clear(player), ac.jX.a2q(player)
}

function a2n(player) {
	aZ.n9(player) && (aN.et[player] = a2r.a2s.n8(), bO.k++);
	var a2t = b7.a2u(player);
	0 === a2t.length ? player === bO.g && a2v() : (a2w(player, a2t), a2x(player, a2t))
}

function a2v() {
	aS.cz[17] += aN.dj[bO.g] + b7.a2y(bO.g), b2.show(!1, !1, !1, !0), aw.a2z()
}

function a2w(player, a2t) {
	for (var cC = a2t.length - 1; 0 <= cC; cC--) b7.a30(a2t[cC], player)
}

function a31(a2t) {
	for (var bt = 0, cC = a2t.length - 1; 1 <= cC; cC--) aN.d0[a2t[cC]] > aN.d0[a2t[bt]] && (bt = cC);
	return bt
}

function a2x(player, a2t) {
	var cC, a2C, a32 = a2t[a31(a2t)];
	if (9 === bO.w && 1 === aR.eo[player] && aJ.r2(8) && aL.a33(a32), player === bO.g) 2 !== aN.jN[player] && az.a1K(a32, 1), a2v();
	else {
		for (a2C = !1, cC = a2t.length - 1; 0 <= cC; cC--)
			if (a2t[cC] === bO.g) return a2C = !0, void az.a1K(player, 0);
		!a2C && player < bO.h && 2 !== aN.jN[player] && az.a1k(0, player, a32)
	}
}

function a2p(player) {
	aN.bN[player] = aN.dj[player] = 0, aN.dU[player] = null, aN.dl[player] = null, aN.jP[player] = null, aN.jQ[player] = null, bA.a34(player)
}

function a2o(player) {
	for (var en, cb, ca = aN.eI[player]; ca >= aN.eJ[player]; ca--)
		for (cb = aN.eL[player]; cb >= aN.eM[player]; cb--) en = 4 * (cb * cJ.cK + ca), aZ.a0X(player, en) && (aZ.a35(en), aN.d0[player]--)
}

function ji() {
	function a3D(player, dy, a3H, a3I) {
		for (var dM, dN, bg, bh, gu, a3J, dO, dP, cx = dy + a3I, cC = dy; cC < cx; cC += a3H)
			if (dM = (dM = aN.eJ[player] - cC) < 1 ? 1 : dM, dN = aN.eM[player] - cC, dO = (dO = aN.eI[player] + cC) >= cJ.cK - 1 ? cJ.cK - 2 : dO, bh = (dP = (dP = aN.eL[player] + cC) >= cJ.cL - 1 ? cJ.cL - 2 : dP) - (dN = dN < 1 ? 1 : dN), dO = (
					gu = cA(aJ.random() * (2 * (dO - dM + dP - dN)), aJ.value(100))) <= (bg = dO - dM) ? (a3J = dM + gu, dN) : gu <= bg + bh ? (a3J = dO, dN + gu - bg) : gu <= 2 * bg + bh ? (a3J = dM + gu - bg - bh, dP) : (a3J = dM, dN + gu - 2 *
					bg - bh), a3G(player, dP = aZ.hL(a3J, dO))) return dP;
		return -1
	}

	function a3G(a39, iU) {
		return aZ.hU(iU) && (aZ.ds(iU) || a39 !== (iU = aZ.dq(iU)) && e1(a39, iU) && 0 < aN.jP[iU].length)
	}
	this.fx = function(player) {
		return !(0 === aN.jP[player].length || aN.dj[player] < 100) && ac.bT.k6 !== ac.bT.k7 && (ac.bT.k8[player] !== ac.bT.k9 && cR.gv.ju(player, 203, 32, 16) ? !! function(player) {
			var iU = function(player) {
				var cC, a3E, a3F, dM = aN.eJ[player],
					dN = aN.eM[player],
					gm = aN.eI[player] - dM + 1,
					gn = aN.eL[player] - dN + 1,
					lV = aJ.value(100);
				for (cC = 0; cC < 32; cC++)
					if (a3E = dM + kL.lk(aJ.random() * gm, lV), a3F = dN + kL.lk(aJ.random() * gn, lV), a3E = aZ.hL(a3E, a3F), a3G(player, a3E)) return a3E;
				return -1
			}(player);
			if (0 <= iU) return ac.jj.kA(player, iU >> 2);
			if (0 <= (iU = a3D(player, 1, 4, 40))) return ac.jj.kA(player, iU >> 2);
			if (0 <= (iU = a3D(player, 40, 8, 200))) return ac.jj.kA(player, iU >> 2);
			return
		}(player) && !! function(a39) {
			if (0 === dS.o1[2]) return void console.log("error 325234");
			var a3B = dS.o1[1] + ab.xq[dS.o1[2] - 1] << 2;
			if (aZ.ds(a3B)) return 1;
			return a3B = aZ.dq(a3B), a39 !== a3B && !!e1(a39, a3B)
		}(player) && function(player) {
			return cR.gv.jx(player), ac.bT.kB(player), !0
		}(player) : void 0)
	}
}

function ja() {
	var a3L, gg = 8,
		a3M = new Array(2);

	function a3N(bt) {
		var go = gg + 4,
			gp = cR.cU.gj(go, go),
			gq = cR.cU.getContext(gp, !0),
			gr = cR.cU.getImageData(gq, go, go),
			fP = gr.data;
		return a3O(fP, go + 1, bt), a3O(fP, go + 2, bt), a3O(fP, 2 * go + 1, bt), a3O(fP, 2 * go - 3, bt), a3O(fP, 2 * go - 2, bt), a3O(fP, 3 * go - 2, bt), a3O(fP, go * (go - 3) + 1, bt), a3O(fP, go * (go - 2) + 1, bt), a3O(fP, go * (go - 2) + 2,
			bt), a3O(fP, go * (go - 2) - 2, bt), a3O(fP, go * (go - 1) - 3, bt), a3O(fP, go * (go - 1) - 2, bt), gq.putImageData(gr, 0, 0), gp
	}

	function a3O(fP, gl, bt) {
		gl *= 4;
		fP[gl] = 255, fP[1 + gl] = 255, fP[2 + gl] = bt, fP[3 + gl] = 255
	}

	function gj(player) {
		var gp = cR.cU.gj(gg, gg);
		return function(gq, player) {
			var ca, cb, gm, gl, a3Q, ru, go = gg,
				gr = cR.cU.getImageData(gq, go, go),
				fP = gr.data,
				cs = (go >> 1) - .5,
				a3S = aZ.tn(player),
				a3T = cR.tN.wX(a3S, .5);
			cR.tN.wZ(a3S, a3T, 300) || cR.tN.wb(a3S, 100);
			for (cb = 0; cb < go; cb++)
				for (ca = 0; ca < go; ca++) ru = (go - 1.5) * (go - 1.5) / 4, a3Q = (gm = (gm = ca - cs) * gm + (gm = cb - cs) * gm) <= (go - 4.5) * (go - 4.5) / 4 ? a3T : a3S, fP[gl = 4 * (cb * go + ca)] = a3Q[0], fP[1 + gl] = a3Q[1], fP[2 +
					gl] = a3Q[2], fP[3 + gl] = ru < gm ? 0 : 255;
			gq.putImageData(gr, 0, 0)
		}(cR.cU.getContext(gp, !0), player), gp
	}
	this.aM = function() {
		a3L = new Array(bO.b), a3M[0] = a3N(255), a3M[1] = a3N(0)
	}, this.cY = function() {
		var cC, player, a3U, dh, a3V, a3Z, a3a, a3c, a3d, xs = ac.bT.xs,
			a1r = ac.bT.a1r,
			a1s = ac.bT.a1s,
			a3e = a3L,
			a3f = bO.g,
			a3g = -1,
			cx = ac.bT.k6,
			a3h = c0.bg,
			a3i = c0.bh,
			a3j = cJ.cK << 4,
			a3l = cG,
			cu = a3l / gg,
			dM = cF / a3l,
			dN = cI / a3l,
			gm = (a3h + cF) / a3l - dM,
			gn = (a3i + cI) / a3l - dN,
			gq = cc;
		for (ac.jV.kE(bO.g, ac.je.gi) && (a3g = dS.o1[3]), gq.fillStyle = cd.co, cR.cU.textAlign(gq, 1), cR.cU.textBaseline(gq, 1), cC = 0; cC < cx; cC++) player = a1r[cC] >> 3, dh = a1s[cC], a3U = .625 + .125 * Math.sqrt(Math.sqrt(dh)), a3V = (
				a3Z = xs[cC]) % a3j / 16 - a3U, a3Z = a3i * (Math.floor(a3Z / a3j) / 16 - a3U - dN) / gn, a3a = -2 * (a3d = a3l * a3U) * (1 + (a3c = +(player === a3f)) / 8), a3c = a3c * a3d / 4, (a3d = a3h * (a3V - dM) / gm) < a3a || a3Z < a3a ||
			a3h + a3c < a3d || a3i + a3c < a3Z || (a3V = a3U * a3l, gq.imageSmoothingEnabled = (a3a = 2 * a3U * cu) < 3, void 0 === (a3c = a3e[player]) && (a3e[player] = a3c = gj(player)), player === a3f && (gq.setTransform(a3a, 0, 0, a3a, a3d -
				2 * a3a, a3Z - 2 * a3a), gq.drawImage(a3M[+(cC === a3g)], 0, 0)), gq.setTransform(a3a, 0, 0, a3a, a3d, a3Z), gq.drawImage(a3c, 0, 0), (a3U = Math.floor(function(dh) {
				if (dh < 1e3) return .42;
				if (dh < 1e4) return .34;
				if (dh < 1e6) return .26;
				if (dh < 1e8) return .19;
				return .15
			}(dh) * a3V)) < 6) || (gq.setTransform(1, 0, 0, 1, 0, 0), gq.font = cR.cU.cV(1, a3U), gq.fillText(cR.cS.cT(dh), a3d + a3V, a3Z + a3V + .1 * a3U));
		gq.imageSmoothingEnabled = !1, gq.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function a3n() {
	this.size = 0, this.bt = 0, this.eX = null, this.aM = function(eX) {
		this.bt = 0, this.eX = eX, this.size = eX.length
	}, this.af = function(rE) {
		return this.aM(new Uint8Array(this.rF(rE))), this.eX
	}, this.qM = function() {
		this.eX = null
	}, this.eW = function(size, a1A) {
		for (var eX = this.eX, h3 = this.bt + size - 1, cC = this.bt; cC <= h3; cC++) eX[cC >> 3] |= (a1A >> h3 - cC & 1) << 7 - (7 & cC);
		this.bt += size, this.bt > 8 * this.size && console.log("error wrapper")
	}, this.a3o = function(size, a1A) {
		var e6 = size >> 1,
			c1 = 1 << e6;
		this.eW(size - e6, kL.lk(a1A, c1)), this.eW(e6, a1A % c1)
	}, this.a3p = function(size) {
		for (var eX = this.eX, h3 = this.bt + size, cC = this.bt; cC < h3; cC++) eX[cC >> 3] &= 255 ^ 128 >>> (7 & cC)
	}, this.rF = function(rE) {
		return rE + 7 >> 3
	}, this.a3q = function(cr, dy, h3, a3r) {
		for (var cC = dy; cC < h3; cC++) this.eW(a3r, cr[cC])
	}
}

function a3t(go, size, eg, a3u, font) {
	var cC, bz = .2,
		ex = document.createElement("canvas"),
		gq = ex.getContext("2d", {
			alpha: !1
		});
	for (ex.width = go, ex.height = go, gq.font = size + font, gq.textAlign = "center", gq.textBaseline = "middle", gq.fillStyle = "red", cC = 0; cC < eg.length; cC++) gq.fillText(eg[cC], .5 * go, .5 * go);
	return -1 < (ex = function(gr) {
		var cC, gu;
		for (cC = gr.data.length - 4; 0 <= cC; cC -= 4)
			if (gu = gr.data[cC], a3u <= gu) return Math.floor(cC / (4 * go));
		return -1
	}(gq.getImageData(0, 0, go, go))) && (bz = (ex - .5 * go + .1 * size) / size), Math.max(bz, 0)
}

function a3x() {
	this.a3y = 0, this.a3z = 0, this.a40 = 0, this.a41 = 0, this.a42 = 0, this.a43 = 0, this.a44 = [0, 0, 0, 0], this.qp = function() {
		this.a3y = aq.hM(), this.a3z = aq.hN(), this.a40 = -this.a3y, this.a41 = -this.a3z, this.a42 = c0.bg / cG, this.a43 = c0.bh / cG, this.a44[0] = Math.floor(this.a40), this.a44[1] = Math.floor(this.a41), this.a44[2] = Math.floor(this.a44[
			0] + this.a42 + 1), this.a44[3] = Math.floor(this.a44[1] + this.a43 + 1), aW.a45 = !0
	}
}

function a46() {
	var bg, ca, oD, ex, kp, bv, js, tC, kl, tk, a47 = 11 / 12;

	function a49() {
		var oC = Math.floor(js * (bg - 2 * oD)),
			a4B = 1 + Math.floor(.0625 * ar.bh),
			a4C = 1 + Math.floor(.3 * ar.bh),
			bm = Math.floor(.55 * ar.bh);
		kp.clearRect(0, 0, bg, ar.bh), kp.fillStyle = cd.mL, kp.fillRect(0, 0, oD, ar.bh), kp.fillRect(oD + oC, 0, bg - oD - oC, ar.bh), kp.fillStyle = js < 1 / 3 ? "rgba(" + Math.floor(3 * js * 130) + ",130,0,0.85)" : js < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (js - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (js - 2 / 3) * 130) + ",0.85)", kp.fillRect(oD, 0, oC, ar.bh), kp.fillStyle = cd.co, kp.fillRect(0, 0, bg, 1), kp.fillRect(0, ar.bh - 1, bg, 1),
			kp.fillRect(0, 0, 1, ar.bh), kp.fillRect(oD, 0, 1, ar.bh), kp.fillRect(oD + oC, 0, 1, ar.bh), kp.fillRect(bg - oD, 0, 1, ar.bh), kp.fillRect(bg - 1, 0, 1, ar.bh), kp.fillRect(Math.floor(.25 * ar.bh) + a4C, Math.floor((ar.bh - a4B) / 2),
				ar.bh - 2 * a4C, a4B), kp.fillRect(Math.floor(bg - 1.25 * ar.bh) + a4C, Math.floor((ar.bh - a4B) / 2), ar.bh - 2 * a4C - a4C % 2, a4B), kp.fillRect(Math.floor(bg - 1.25 * ar.bh) + Math.floor((ar.bh - a4B) / 2), a4C, a4B, ar.bh - 2 *
				a4C - a4C % 2), tC = cR.gv.k3(bO.g, ar.u8()), kp.fillText(cR.cS.cT(tC) + " (" + cR.cS.cW(100 * js, +(js < .1)) + ")", Math.floor(.5 * bg), bm)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		js = newPercentage;
	};
	keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	keybindFunctions.setRelative = (arg1) => ar.a4J(arg1);

	function a4H(ct) {
		return !(1 < ct && 1 === js || (1 < ct && ct * js - js < 1 / 1024 ? ct = (js + 1 / 1024) / js : ct < 1 && js - ct * js < 1 / 1024 && (ct = (js - 1 / 1024) / js), js = kL.kM(js * ct, 1 / 1024, 1), a49(), 0))
	}

	function a4I(c6) {
		return js !== (js = kL.kM((c6 - ca - oD) / (bg - 2 * oD), 1 / 1024, 1)) && (a49(), !0)
	}
	this.cb = 0, this.a48 = !1, this.aM = function() {
		bv = !bO.s && !bO.o, tk = !1, js = .5, tC = 0, this.a48 = !1, this.resize()
	}, this.resize = function() {
		bJ.bK.c2() && c0.bg < .8 * c0.bh ? (this.bh = Math.floor(.0536 * c0.ge), bg = c0.bg - 4 * c3.gap - this.bh) : (bg = Math.floor((bJ.bK.c2() ? .65 : .389) * c0.ge), bg += 12 - bg % 12, this.bh = Math.floor(bg / 12)), oD = Math.floor(3 *
			this.bh / 2), kl = cR.cU.cV(1, Math.floor(.5 * this.bh)), (ex = document.createElement("canvas")).width = bg, ex.height = this.bh, (kp = ex.getContext("2d", {
			alpha: !0
		})).font = kl, cR.cU.textBaseline(kp, 1), cR.cU.textAlign(kp, 1), this.qT(), a49()
	}, this.qT = function() {
		ca = bJ.bK.c2() && c0.bg < .8 * c0.bh ? this.bh + 3 * c3.gap : Math.floor((c0.bg - bg) / 2), this.cb = c0.bh - this.bh - a1b.tY() * c3.gap
	}, this.bP = function() {
		tk && (tk = !1, a49())
	}, this.bv = function() {
		return !(!bv || ax.bc && ca < Math.floor(c3.gap + 5.5 * this.bh))
	}, this.a1a = function(a4D) {
		return !!this.bv() && ca + bg > c0.bg - a4D - c3.gap
	}, this.np = function() {
		bv = !bO.o
	}, this.wr = function() {
		bv = !1
	}, this.u8 = function() {
		return kL.kM(Math.floor(1024 * js + .5) - 1, 0, 1023)
	}, this.mm = function(c6, c7) {
		return this.bv() && ca < c6 && c6 < ca + bg && c7 > this.cb
	}, this.c5 = function(c6, c7) {
		return !!this.bv() && !!ar.mm(c6, c7) && (aq.qS = !1, function(w3, c6, c7) {
			if (function(c6, c7) {
					return ca < c6 && c6 < ca + oD && c7 > ar.cb
				}(c6, c7)) return a4H(a47);
			if (function(c6, c7) {
					return ca + bg - oD < c6 && c6 < ca + bg && c7 > ar.cb
				}(c6, c7)) return a4H(1 / a47);
			return w3.a48 = !0, a4I(c6)
		}(this, c6, c7) && (bE.bI = !0), !0)
	}, this.a4J = function(gd) {
		0 !== bO.p && this.bv() && a4H(gd) && (bE.bI = !0)
	}, this.mn = function(deltaY) {
		var gd;
		return !(0 === deltaY || !this.bv()) && a4H(gd = 0 < deltaY ? (gd = 400 / (400 + deltaY)) < a47 ? a47 : gd : 1 / a47 < (gd = (400 - deltaY) / 400) ? 1 / a47 : gd)
	}, this.cM = function(c6) {
		return !!this.a48 && a4I(c6)
	}, this.a4K = function() {
		this.a48 = !1
	}, this.fx = function() {
		this.bv() && tC !== cR.gv.k3(bO.g, this.u8()) && (tk = !0)
	}, this.cY = function() {
		this.bv() && cc.drawImage(ex, ca, this.cb)
	}
}

function a4L() {
	this.aC = !1, this.fx = function() {
		bE.dK() % 250 != 249 || bO.o || (bS.eb.a4M(+(this.aC && 0 < aN.bN[bO.g]), kd + ac.bT.k6), this.aC = !1)
	}
}

function a4O() {
	this.bT = new x0, this.jZ = new a4P, this.aM = function() {
		this.bT.aM()
	}, this.fx = function() {
		0 !== this.bT.x2 && this.bT.x2--
	}
}

function aT() {
	(a4Q = void 0 === a4Q ? document.createElement("canvas") : a4Q).width = cJ.cK, a4Q.height = cJ.cL, an = a4Q.getContext("2d", {
		alpha: !0
	}), ao = an.getImageData(0, 0, cJ.cK, cJ.cL), yN = ao.data, cR.tN.wV(yN)
}

function a4R() {
	this.gV = function() {
		var value, a4T;
		0 === bJ.id && (value = function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var oq = window.location.search,
				oq = new URLSearchParams(oq).get(key);
			if ("string" != typeof oq || oq.length < 1) return null;
			return oq
		}("replay"), (a4T = new URL(window.location.href)).search = "", history.replaceState(null, "", a4T.toString()), value) && bZ.ba(3, 0, value)
	}
}

function a4V() {
	var cr, t0, a4W, oZ, gap, a4X, a4Y, a4Z, a4a, a4b, kl, a4c, a4d, dA, oC, sd, a4e, a4f;

	function a4j() {
		oZ = Math.floor(.2 * (bJ.bK.c2() ? .07 : .035) * c0.ge), oZ = rx(bJ.bK.c2() ? 3 : 1, oZ);
		var a4m = c0.bg / (cr.length + gap);
		oZ = oZ < a4m ? a4m : oZ, oC = Math.floor((1 - gap) * oZ), t0 = 0, a4n()
	}

	function a4n() {
		t0 = (t0 = t0 < -20 ? -20 : t0) > (cr.length - 15) * oZ ? (cr.length - 15) * oZ : t0, a4Y = Math.floor(t0 / oZ), a4Z = (a4Z = a4Y + Math.floor(c0.bg / oZ)) > cr.length - 1 ? cr.length - 1 : a4Z, a4Y = (a4Y = a4Z < a4Y ? a4Z : a4Y) < 0 ? 0 :
			a4Y;
		var cs = a4Z;
		a4X = a4W / cr[cs];
		for (var cC = a4Z - 1; a4Y <= cC; cC--) cr[cC] > cr[cs] && (cs = cC, a4X = a4W / Math.pow(cr[cC], dA))
	}

	function a4q(ca) {
		ca = Math.floor((t0 + c0.bg - ca - gap * oZ) / oZ);
		return (ca = ca < -1 ? -1 : -1 === ca ? 0 : ca > cr.length - 1 ? -1 : ca) !== a4a && (a4a = ca, -1 === sd && 0 === a4a && xa.a4g && (sd = setInterval(a4r, 100)), 1)
	}

	function a4s(cC) {
		var oB = Math.floor(a4X * Math.pow(cr[cC], dA));
		cc.fillRect(t0 + c0.bg - (cC + 1) * oZ, c0.bh - oB, oC, oB)
	}

	function a4r() {
		var en;
		0 !== (a4a = 8 === bY.gB() ? -1 : a4a) ? (a4e = (new Date).getTime(), clearInterval(sd), sd = -1) : (en = cr[1] / 864e3, -1 !== a4e && (en += ((new Date).getTime() - a4e) * cr[1] / 864e5, a4e = -1), 0 < en && (cr[0] += Math.floor(en), bE
			.bI = !0))
	}
	this.a4g = !1, this.aM = function() {
		a4e = sd = -1, a4a = -(dA = 1), this.a4h = !1, a4d = 0, a4c = new Date, t0 = 0, gap = .3, (a4f = []).push({
			pZ: "Plateau A",
			cx: 0,
			dB: 57
		}), a4f.push({
			pZ: "Max A",
			cx: 1,
			dB: 1
		}), a4f.push({
			pZ: "Black Friday",
			cx: 15,
			dB: 15
		}), a4f.push({
			pZ: "Max B",
			cx: 19,
			dB: 19
		}), a4f.push({
			pZ: "Max C",
			cx: 44,
			dB: 44
		}), a4f.push({
			pZ: "First Android Version",
			cx: 58,
			dB: 58
		}), a4f.push({
			pZ: "Max D",
			cx: 67,
			dB: 67
		}), a4f.push({
			pZ: "The iFrame Explosion",
			cx: 98,
			dB: 99
		}), a4f.push({
			pZ: "The 155-Day Uptrend",
			cx: 58,
			dB: 213
		}), a4f.push({
			pZ: "Max E",
			cx: 213,
			dB: 213
		}), a4f.push({
			pZ: "Plateau B",
			cx: 214,
			dB: 259
		}), a4f.push({
			pZ: "Turbulent Times",
			cx: 260,
			dB: 344
		}), a4f.push({
			pZ: "Max F",
			cx: 262,
			dB: 262
		}), a4f.push({
			pZ: "Max G",
			cx: 282,
			dB: 282
		}), a4f.push({
			pZ: "Max H",
			cx: 333,
			dB: 333
		}), a4f.push({
			pZ: "The 19-Day Downtrend",
			cx: 283,
			dB: 301
		}), a4f.push({
			pZ: "Plateau C",
			cx: 345,
			dB: 385
		}), a4f.push({
			pZ: "The Alliance Ascent",
			cx: 386,
			dB: 395
		}), a4f.push({
			pZ: "Max I",
			cx: 395,
			dB: 395
		}), a4f.push({
			pZ: "First iOS Version",
			cx: 411,
			dB: 411
		}), a4f.push({
			pZ: "Plateau D",
			cx: 396,
			dB: 453
		}), a4f.push({
			pZ: "The TikTok Revolution",
			cx: 454,
			dB: 470
		}), a4f.push({
			pZ: "Max J",
			cx: 456,
			dB: 456
		}), a4f.push({
			pZ: "Max K",
			cx: 472,
			dB: 472
		}), a4f.push({
			pZ: "Max L",
			cx: 478,
			dB: 478
		}), a4f.push({
			pZ: "YT Drew",
			cx: 471,
			dB: 485
		}), a4f.push({
			pZ: "Plateau E",
			cx: 485,
			dB: 600
		}), a4f.push({
			pZ: "Uptrend A",
			cx: 600,
			dB: 613
		}), a4f.push({
			pZ: "Max M",
			cx: 613,
			dB: 613
		}), a4f.push({
			pZ: "Downtrend A",
			cx: 614,
			dB: 635
		}), a4f.push({
			pZ: "Plateau F",
			cx: 636,
			dB: 737
		}), a4f.push({
			pZ: "End of Record",
			cx: 738,
			dB: 738
		}), cr = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
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
		], this.resize()
	}, this.resize = function() {
		a4W = Math.floor(.15 * c0.bh), a4b = (a4b = Math.floor((bJ.bK.c2() ? .018 : .0137) * c0.ge)) < 2 ? 2 : a4b, kl = cR.cU.cV(1, a4b), a4j()
	}, this.a4k = function(a4l) {
		var cC;
		for (this.a4g = !0, cC = 0; cC < a4l.length; cC++) cr.unshift(a4l[cC]);
		a4j(), bE.bI = !0
	}, this.a4o = function() {
		a4n()
	}, this.cM = function(ca, cb) {
		cb > c0.bh - .6 * a4W ? this.a4h ? ca !== a4d && (t0 += ca - a4d, a4d = ca, a4n(), a4q(ca), this.a4h = -1 !== a4a, bE.bI = !0) : a4q(ca) && (bE.bI = !0) : this.xO()
	}, this.xO = function() {
		-1 !== a4a && (this.a4h = !1, a4a = -1, bE.bI = !0)
	}, this.mn = function(ca, deltaY) {
		-1 !== a4a && (t0 += Math.floor(deltaY), a4n(), a4q(ca), bE.bI = !0)
	}, this.c5 = function(ca, cb) {
		this.cM(ca, cb), -1 !== a4a && (a4d = ca, this.a4h = !0)
	}, this.cO = function() {
		-1 !== a4a && (this.a4h = !1)
	}, this.cY = function() {
		cc.fillStyle = cd.dE;
		for (var a4v, month, cN, bj, a4y, a4z, dN, a50, a51, cC = a4Z; a4Y <= cC; cC--) a4s(cC);
		this.a4g && 0 === a4Y && (cc.fillStyle = cd.a4t, a4s(0)), -1 !== a4a && (cc.fillStyle = cd.sb, a4s(a4a)), -1 !== a4a && (cc.font = kl, cR.cU.textBaseline(cc, 2), (cN = new Date).setTime(a4c.getTime() - 1e3 * a4a * 60 * 60 * 24), month =
			"month", a4v = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(cN), a4v = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(cN)), a4v = a4v + ", " + cN.getUTCDate() + " " + month + " " + cN.getFullYear(), month = 1 === cr[a4a] ? " second played" : " seconds played", month = cR.cS.cT(cr[a4a]) + month, cN = Math.floor(cc.measureText(a4v)
			.width), bj = Math.floor(cc.measureText(month).width), a4y = Math.floor(.5 * (cN + a4b)), a4z = (a4z = t0 + c0.bg - (a4a + 1) * oZ) < a4y ? a4y : a4z > c0.bg - a4y ? c0.bg - a4y : a4z, dN = c0.bh - Math.floor(a4X * Math.pow(cr[
				a4a], dA)), a50 = Math.floor(1.1 * a4b), a51 = dN > c0.bh - a50 ? c0.bh - a50 : dN, cc.fillStyle = cd.ce, cc.fillRect(c0.bg - bj - a4b, a51 - a50, bj + a4b, a50), cc.fillRect(a4z - a4y, c0.bh - a50, cN + a4b, a50), cc
			.fillStyle = cd.co, cR.cU.textAlign(cc, 2), cc.fillText(month, Math.floor(c0.bg - .5 * a4b), a51),
			function(dN, a50) {
				for (var bi, vI = -1, bt = cr.length - a4a - 1, cC = a4f.length - 1; 0 <= cC; cC--) bt >= a4f[cC].cx && bt <= a4f[cC].dB && (-1 === vI || a4f[cC].dB - a4f[cC].cx < a4f[vI].dB - a4f[vI].cx) && (vI = cC); - 1 !== vI && (bi =
					Math.floor(cc.measureText(a4f[vI].pZ).width), cc.fillStyle = cd.ce, cc.fillRect(c0.bg - bi - a4b, dN, bi + a4b, a50), cc.fillStyle = cd.co, cc.fillText(a4f[vI].pZ, Math.floor(c0.bg - .5 * a4b), dN + a50))
			}(a51 - 2 * a50, a50), cR.cU.textAlign(cc, 1), cc.fillText(a4v, a4z, c0.bh), cc.strokeStyle = cd.a53, cc.lineWidth = 1, cc.beginPath(), cc.moveTo(0, dN), cc.lineTo(c0.bg, dN), cc.closePath(), cc.stroke())
	}
}

function a54() {
	this.ej = function(f8) {
		for (var cx = f8.length, bg = eV, cC = 0; cC < cx; cC++) bg.eW(16, f8.charCodeAt(cC))
	}
}

function tM() {
	var a55 = null;
	this.a04 = 0, this.tW = function() {
		var lV = fa.hr.data[5].value;
		a55 = "px " + lV, "Trebuchet MS" !== lV && (a55 += ", Trebuchet MS"), this.a04 = a3t(32, 32, ["a", "b", "m"], 200, a55)
	}, this.gj = function(bg, bh) {
		var gk = document.createElement("canvas");
		return gk.width = bg, gk.height = bh, gk
	}, this.getContext = function(ex, alpha) {
		return ex.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(kp, bg, bh) {
		return kp.getImageData(0, 0, bg, bh)
	}, this.cV = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a55 : 1 === type ? "bold " + size + a55 : 2 === type ? "lighter " + size + a55 : 3 === type ? "italic " + size + a55 : 4 === type ? "oblique " + size + a55 : 5 === type ? "small-caps " +
			size + a55 : "small-caps bold " + size + a55
	}, this.textAlign = function(gq, id) {
		gq.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(gq, id) {
		gq.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.m8 = function(dB, code, color) {
		color = this.jC(c3.a56) + " solid " + (color || cd.co);
		5 === (code = code || 5) ? dB.style.border = color : 4 === code ? dB.style.borderLeft = color : 2 === code ? dB.style.borderBottom = color : 6 === code ? dB.style.borderRight = color : dB.style.borderTop = color
	}, this.xX = function(dB, ca, cb, bg, bh) {
		dB = dB.style;
		dB.left = this.a58(ca), dB.top = this.a58(cb), dB.width = this.a58(bg), dB.height = this.a58(bh)
	}, this.ok = function(lV) {
		return 1 + lV * bJ.bK.c2()
	}, this.a59 = function(gd, iU) {
		return gd * this.ok(void 0 === iU ? .5 : iU) * c0.ge / c0.ma
	}, this.pV = function(gd, iU) {
		return gd * this.ok(void 0 === iU ? .5 : iU) * c0.ge
	}, this.jC = function(lV) {
		return lV.toFixed(1) + "px"
	}, this.a58 = function(lV) {
		return this.xY(lV).toFixed(1) + "px"
	}, this.xY = function(lV) {
		return lV / c0.ma
	}, this.it = function(a5A, a5B) {
		for (var f8 = "<ul>", cx = a5A.length, cC = 0; cC < cx; cC++) f8 += "<li>" + a5A[cC] + ": <a href='" + a5B[cC] + "' target='_blank'>" + a5B[cC] + "</a></li>";
		return f8 += "</ul>"
	}, this.a5C = function(a5D) {
		return "<a href='" + a5D + "' target='_blank'>" + a5D + "</a>"
	}, this.a5E = function(dB) {
		navigator.clipboard && navigator.clipboard.writeText(dB.value)
	}, this.a5F = function(dB) {
		cR.cS.startsWith(dB.innerText, "✅ ") || (dB.innerText = "✅ " + dB.innerText, setTimeout(function() {
			dB.innerText = dB.innerText.substring(dB.innerText.indexOf(" ") + 1)
		}, 500))
	}, this.measureText = function(f8) {
		return cc.measureText(f8).width
	}
}

function a5G() {
	this.bT = new a5H, this.fS = 0;
	var a5I = new Array(15);

	function a5L() {
		for (var cx = a5I.length, cC = 0; cC < cx; cC++) a5I[cC] = null
	}
	this.aM = function() {
		for (var a5J, a5K = document.body.firstChild; a5K;) a5J = a5K.nextSibling, "DIV" !== a5K.tagName && "INPUT" !== a5K.tagName && "BUTTON" !== a5K.tagName || document.body.removeChild(a5K), a5K = a5J
	}, this.ba = function(bt, g2, fB) {
		void 0 === g2 && (g2 = this.fS), bE.bI = !0, 0 === bt && (0 === bY.gB() ? bt = 5 : bJ.bK.setState(13)), this.cB(), this.fS = bt;
		var cs = a5I[bt];
		if (!cs || 4 === bt || 7 === bt || 8 === bt || 9 === bt || 10 === bt || 11 === bt || 13 === bt) {
			if (0 === bt) return void a5L();
			1 === bt ? cs = new iV : 2 === bt ? cs = new hZ : 3 === bt ? cs = new om : 4 === bt || 9 === bt || 10 === bt || 11 === bt || 13 === bt ? cs = fB : 5 === bt ? cs = new xE : 6 === bt ? cs = new a5M : 7 === bt ? cs = new a5N : 8 === bt ?
				cs = fB : 12 === bt ? cs = new mR : 14 === bt && (cs = new t3), cs.g2 = g2, a5I[bt] = cs
		}
		cs.show(fB)
	}, this.on = function() {
		this.bv() && this.ba(a5I[this.fS].g2)
	}, this.t4 = function(bt) {
		this.bv() && (this.cB(), bE.bI = !0, this.fS = bt, a5I[bt].show())
	}, this.cB = function() {
		this.bv() && a5I[this.fS].cB()
	}, this.hi = function() {
		this.bv() && (a5I[this.fS].cB(), a5L(), this.fS = 0, bJ.bK.setState(13))
	}, this.cY = function() {
		var cs;
		this.bv() && (cs = a5I[this.fS]).cY && cs.cY()
	}, this.resize = function() {
		if (!this.bv()) return !1;
		a5I[this.fS].resize()
	}, this.c5 = function(ca, cb) {
		var cs;
		this.bv() && (cs = a5I[this.fS]).c5 && cs.c5(ca, cb)
	}, this.cM = function(ca, cb) {
		var cs;
		this.bv() && (cs = a5I[this.fS]).cM && cs.cM(ca, cb)
	}, this.mo = function() {
		var cs;
		this.bv() && (cs = a5I[this.fS]).mo && cs.mo()
	}, this.mn = function(c6, c7, deltaY) {
		var cs;
		this.bv() && (cs = a5I[this.fS]).mn && cs.mn(c6, c7, deltaY)
	}, this.hw = function(code) {
		var cs;
		return !!this.bv() && ((cs = a5I[this.fS]).hw && cs.hw(code), !0)
	}, this.fx = function() {
		var cs;
		this.bv() && (cs = a5I[this.fS]) && cs.fx && cs.fx()
	}, this.bv = function() {
		return 0 < this.fS
	}, this.fT = function() {
		return a5I[this.fS]
	}, this.a5O = function(bt) {
		return a5I[bt]
	}
}

function a5P() {
	this.j7 = function() {
		fa.fb.hj(), fa.fb.a5Q(), bS.bT.close(0, 3255), 0 === bJ.id ? bJ.mC && bJ.mC.clear() : 1 === bJ.id ? bJ.mD.saveString(199, "") : 2 === bJ.id && bJ.mF.postMessage("clear")
	}, this.ig = function() {
		2 === bJ.id ? bJ.mF.postMessage("showConsentForm") : 1 === bJ.id ? bJ.mD.setState(7) : bW.ow.showCMPScreen()
	}, this.io = function() {
		this.setState(14)
	}, this.a5R = function() {
		var f8 = fa.hr.a5S(101),
			max = ("string" != typeof(f8 = "" === f8 ? function() {
				{
					if (2 === bJ.id) return bJ.mE.password;
					if (1 === bJ.id) return 12 <= bJ.im ? bJ.mD.loadString(22) : ""
				}
				return yv.yt(9)
			}() : f8) && (f8 = ""), Math.floor(Math.pow(2, 48))),
			a5U = Math.floor(parseInt(fq.yy(f8)));
		return 0 < a5U && a5U < max ? fa.hr.a5V(101, f8) : (a5U = Math.floor(1 + (max - 1) * Math.random()), fa.hr.a5V(101, f8)), a5U
	}, this.c2 = function() {
		return 1 === fa.hr.a5W(2)
	}, this.a5X = function() {
		fa.hr.a5V(102, "")
	}, this.setState = function(qE) {
		1 === bJ.id && 5 <= bJ.im && bJ.mD.setState(qE)
	}, this.qG = function() {
		var a4T;
		1 === bJ.id && 7 <= bJ.im ? bJ.mD.setState(5) : ((a4T = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a4T.toString())
	}, this.a5Y = function() {
		1 !== bJ.id || bJ.im < 17 || bJ.mD.saveString(23, document.documentElement.outerHTML)
	}, this.a5Z = function() {
		0 === bJ.id ? bW.ow.aM() : 1 === bJ.id ? bJ.mD.prepareAd("1688441405") : 2 === bJ.id && (0 === bJ.im ? bJ.mF.postMessage("prepare ad 4500876070") : bJ.mF.postMessage("loadAds 4500876070"))
	}, this.wU = function(cN) {
		return 0 === bJ.id ? !!bW.ow.a5a() : 1 === bJ.id ? 12 <= bJ.im && (bJ.mD.presentAd(cN), !0) : 2 === bJ.id && (0 === bJ.im ? bJ.mF.postMessage("show ad " + cN) : bJ.mF.postMessage("showAd"), !0)
	}, this.a5b = function() {
		2 === bJ.id && bJ.im < 23 && bZ.ba(4, 1, new is("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + iu.iw + "' target='_blank'>" +
			iu.iw + "</a>", !0, [new hg("❌ " + he.hf[92], function() {
				bZ.ba(0)
			}, cd.j5)]))
	}
}

function hv(fW, title, hy) {
	function click() {
		var value = 1 - fW.value;
		this.textContent = (value ? "🟢 " : "⚪ ") + title, fa.fb.fc(fW.bt, value), hy(value)
	}
	var dB;
	title = title || he.hf[121], hy = hy || function() {}, this.dB = document.createElement("p"), (dB = this.dB).textContent = (fW.value ? "🟢 " : "⚪ ") + title, dB.style.margin = "0", dB.style.marginBottom = "0.5em", dB.style.cursor = "pointer", dB
		.addEventListener("click", click)
}

function a5c() {
	var ca, cb, bg, bh, a5d, t0, t1, a5e, player, cr;

	function a5j() {
		return function() {
			var cC;
			for (cC = 0; cC < 8; cC++)
				if (ca = cA(bg * aJ.random(), aJ.value(100)), cb = cA(bh * aJ.random(), aJ.value(100)), a5q()) return 1;
			return
		}() || function() {
			var gm, gn, dv, c9, e6, c8;
			for (gm = cA(bg * aJ.random(), aJ.value(100)), gn = cA(bh * aJ.random(), aJ.value(100)), dv = 40; 1 <= dv; dv--)
				for (c9 = bh - dv; 0 <= c9; c9 -= 40)
					for (cb = (c9 + gn) % bh, e6 = 40; 1 <= e6; e6--)
						for (c8 = bg - e6; 0 <= c8; c8 -= 40)
							if (ca = (c8 + gm) % bg, a5q()) return 1;
			return
		}()
	}

	function a5q() {
		for (var en, a3E, gap = cA(a5d - a5e, 2), ss = t1 + cb * a5d + gap, t2 = t0 + ca * a5d + gap, a3F = ss + a5e - 1; ss <= a3F; a3F--)
			for (a3E = t2 + a5e - 1; t2 <= a3E; a3E--)
				if (en = aZ.hL(a3E, a3F), !aZ.hU(en) || aZ.dm(en)) return;
		return 1
	}

	function a5k(c8, c9) {
		a5f(), a5r(c8 - 2, c9 - 2)
	}

	function a5f() {
		aN.bN[player] = 0, aN.dj[player] = 0, aN.d0[player] = aN.jO[player] = 0, aN.dU[player] = [], aN.dl[player] = [], aN.jP[player] = [], aN.jQ[player] = [], aN.eJ[player] = aN.eM[player] = aN.eI[player] = aN.eL[player] = 0
	}

	function a5r(c8, c9) {
		var en, cC, a5t, a5u;
		for (aN.bN[player] = 1, player < bO.h ? aN.dj[player] = bO.e : aN.dj[player] = a5s[ad.dh[player - bO.h]], aN.eJ[player] = c8 + 10, aN.eM[player] = c9 + 10, aN.eL[player] = aN.eI[player] = 0, a5t = c8; a5t < c8 + 4; a5t++)
			for (a5u = c9; a5u < c9 + 4; a5u++)(c8 < a5t && a5t < c8 + 3 || c9 < a5u && a5u < c9 + 3) && (en = aZ.hL(a5t, a5u), aZ.hU(en)) && (aN.eJ[player] = a5t < aN.eJ[player] ? a5t : aN.eJ[player], aN.eI[player] = a5t > aN.eI[player] ? a5t : aN
				.eI[player], aN.eM[player] = a5u < aN.eM[player] ? a5u : aN.eM[player], aN.eL[player] = a5u > aN.eL[player] ? a5u : aN.eL[player], cr[aN.d0[player]] = en, aN.d0[player]++, aZ.a5v(en, player));
		for (aN.jO[player] = aN.d0[player], cC = aN.d0[player] - 1; 0 <= cC; cC--) aZ.a5w(cr[cC], player) ? (aZ.iR(cr[cC], player), aN.dl[player].push(cr[cC])) : aZ.su(cr[cC]) ? (aZ.iR(cr[cC], player), aN.jP[player].push(cr[cC])) : aZ.a5x(cr[cC]) &&
			(aZ.iR(cr[cC], player), aN.jQ[player].push(cr[cC]))
	}

	function a5p(c8, c9) {
		for (var en, a3E, a3F = c9; c9 - 6 < a3F; a3F--)
			for (a3E = c8; c8 - 6 < a3E; a3E--)
				if (en = aZ.hL(a3E, a3F), aZ.dm(en)) return;
		return 1
	}
	this.aM = function() {
		var cC, c8, c9;
		if (cr = new Array(12), a5e = 6, a5d = 10, bg = cA(cJ.cK, a5d), bh = cA(cJ.cL, a5d), t0 = cA(cJ.cK - a5d * bg, 2), t1 = cA(cJ.cL - a5d * bh, 2), bO.s)
			for (cC = 0; cC < bO.h; cC++) player = cC, a5f(), aN.bN[player] = 1;
		if (aB.aC && aB.aD.a5g) {
			for (player = 0; player < bO.b; player++)
				if (1 !== aN.bN[player]) {
					if (player < bO.l) {
						if (function() {
								var c8 = aB.aD.a5g[player] + 1,
									c9 = aB.aD.a5o[player] + 1;
								if (3 < c8 && c8 < cJ.cK - 5 && 3 < c9 && c9 < cJ.cL - 5 && aZ.hU(aZ.hL(c8, c9)) && a5p(c8 + 3, c9 + 3)) return a5k(c8 + 1, c9 + 1), 1;
								return
							}()) continue;
						if (a5j()) {
							c8 = t0 + ca * a5d + cA(a5d, 2), c9 = t1 + cb * a5d + cA(a5d, 2), a5k(c8, c9);
							continue
						}
					}
					a5f()
				}
		} else ! function() {
			var c8, c9;
			for (player = 0; player < bO.b; player++) 1 !== aN.bN[player] && (player < bO.l && a5j() ? (c8 = t0 + ca * a5d + cA(a5d, 2), c9 = t1 + cb * a5d + cA(a5d, 2), a5k(c8, c9)) : a5f())
		}();
		aS.cz[7] = aN.d0[bO.g], aS.cz[8] = aN.dj[bO.g]
	}, this.nl = function(dg, pe, pd) {
		var cC, c8, c9, en, ca, cb;
		for (player = dg, cC = 0; cC < 20; cC++)
			for (c8 = pe + cC; pe - cC <= c8; c8--)
				for (c9 = pd + cC; pd - cC <= c9; c9--)
					if ((c8 === pe + cC || c8 === pe - cC || c9 === pd + cC || c9 === pd - cC) && 3 < c8 && c8 < cJ.cK - 5 && 3 < c9 && c9 < cJ.cL - 5 && aZ.hU(aZ.hL(c8, c9)) && a5p(c8 + 3, c9 + 3)) {
						if (0 < aN.d0[player]) {
							for (cb = ca = en = void 0, ca = aN.eI[player]; ca >= aN.eJ[player]; ca--)
								for (cb = aN.eL[player]; cb >= aN.eM[player]; cb--) en = 4 * (cb * cJ.cK + ca), aZ.a0X(player, en) && (aZ.a35(en), aN.d0[player]--);
							a5f()
						}
						return a5r(c8 - 1, c9 - 1), !0
					} return !1
	}, this.no = function(dg) {
		player = dg, a5j() ? a5k(t0 + ca * a5d + cA(a5d, 2), t1 + cb * a5d + cA(a5d, 2)) : a5f()
	}
}

function a5z() {
	var dM, dN, dO, dP, a60 = 0,
		a61 = 0;

	function a66() {
		return Math.pow(Math.pow(dO - dM, 2) + Math.pow(dP - dN, 2), .5)
	}

	function a63(dB) {
		dM = c0.ma * dB.touches[0].clientX, dN = c0.ma * dB.touches[0].clientY, dO = c0.ma * dB.touches[1].clientX, dP = c0.ma * dB.touches[1].clientY
	}
	this.a62 = function(dB) {
		return 1 < dB.touches.length ? (a61 = bE.dH, a60 = 3, a63(dB), b1.cB(), !0) : (a60 = 0, !1)
	}, this.a64 = function(dB) {
		var a65, qa, qd;
		return 0 !== bO.p && 1 < dB.touches.length && (a60 = Math.max(a60 - 1, 0), bL.h3() && (a65 = a66(), a63(dB), dB = a66(), qa = Math.floor((dM + dO) / 2), qd = Math.floor((dN + dP) / 2), aq.qh(qa, qd, Math.max(.125, dB) / Math.max(.125,
			a65)), bE.bI = !0), !0)
	}, this.a68 = function() {
		var ca, cb;
		return !!(a60 && (a60 = 0, bE.dH < a61 + 500)) && (ca = (dM + dO) / 2, cb = (dN + dP) / 2, b1.vN(ca, cb), b1.click(ca, cb, !0) && (bE.bI = !0), !0)
	}
}

function a69() {
	var gk, zo = !1,
		a6A = !1,
		a6B = -1e4,
		a6C = -1,
		a6D = 0;

	function resize(a6L) {
		gk = 0, gc.f2() && (a6G(a6L) || zo) && (zo = !1, c3.resize(), oT.aM(), fM.aM(), qH.resize(), xa.resize(), xb.resize(), bZ.resize(), 1 <= bO.p ? (ap.resize(!1), av.resize(), aw.resize(), aq.resize(), ar.resize(), az.resize(), ax.resize(), at
			.resize(), au.resize(), b0.resize(), ay.resize(), b1.resize(), am.resize(), b8.resize(), b2.resize(), aj.resize(), aq.qg()) : (2 === bY.gB() && aH.resize(), bY.a6M(), bY.a6N()), bE.bI = !0)
	}

	function a6F(lV) {
		return lV && 128 < lV ? Math.floor(lV) : 128
	}

	function a6G(a6L) {
		var bg, bh, a6P, bi, bm;
		if (!(0 < c0.fZ)) return bi = a6F(document.documentElement.clientWidth), bm = a6F(window.visualViewport && 2 !== bJ.id ? window.visualViewport.height : document.documentElement.clientHeight), bg = bi, bh = bm, a6P = 0 !== bJ.id || bg < bh ?
			700 : 1200, a6P = Math.min(a6P / ((bg + bh) / 2), 1), a6P = 0 === fa.hr.data[1].value ? 2 * a6P / 3 : Math.min(a6P + (fa.hr.data[1].value - 1) * (1 - a6P) / 2, 1), c0.ma = (window.devicePixelRatio || 1) * a6P, hoveringTooltip
			.canvasPixelScale = c0.ma, a6L && !a6A ? (a6A = !0, document.body.removeChild(a3s)) : a6A && (a6A = !1, document.body.appendChild(a3s)), bg = Math.floor(.5 + bi * c0.ma), bh = Math.floor(.5 + bm * c0.ma), bg !== c0.bg || bh !== c0
			.bh ? (c0.bg = bg, c0.bh = bh, c0.min = wm(bg, bh), c0.max = rx(bg, bh), c0.ge = cA(bg + bh, 2), c0.a6E = bg / bh, a3s.width = bg, a3s.height = bh, a3s.style.width = bi + "px", a3s.style.height = bm + "px", a6C = bE.dH + 1e3, 1) :
			void 0
	}
	this.bg = 0, this.bh = 0, this.min = 0, this.max = 0, this.ge = 0, this.a6E = 1, this.ma = 1, this.fZ = 0, this.fQ = function() {
		this.bg = a6F(document.documentElement.clientWidth) + 2, this.bh = a6F(document.documentElement.clientHeight) + 2
	}, this.aM = function() {
		gk = 1, a3s = document.getElementById("canvasA"), (cc = a3s.getContext("2d", {
			alpha: makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, a6G(0)
	}, this.fx = function() {
		a6H.fx(), 50 <= ++gk && resize(0), -1 === a6C || bE.dH < a6C || (a6C = -1, 2e3 * ++a6D >= bE.dH + 8e3 ? console.log("error 3748") : bJ.bK.setState(15))
	}, this.a6J = function(dx) {
		zo = !0, resize(dx)
	}, this.a6K = function() {
		a6B + 1e3 > bE.dH || (a6B = bE.dH, resize(0))
	}
}

function a6R() {
	var a4d = 0,
		a6S = 0;
	this.a6T = function(ca, cb) {
		a4d = ca, a6S = cb
	}, this.a6U = function(a6V) {
		bO.o || ax.bc || (cR.gv.jn(0) || cR.gv.jn(1)) && cR.gv.gw(bO.g) && (ar.c5(a4d, a6S) ? ar.a48 = !1 : function(a6V) {
			var ve = ab.vf(a4d),
				vg = ab.vh(a6S),
				gl = ab.vi(ve, vg),
				cu = ab.vj(gl);
			ab.vk(ve, vg) && (bO.s ? aZ.hU(cu) && aO.ik.jm(gl) : aZ.vo(cu) || (aZ.hQ(cu) || a6V ? ac.jV.mt(bO.g, gl) && aO.ik.k5(ar.u8(), gl) : aZ.ds(cu) ? vp(bO.g) ? aO.ik.jr(ar.u8(), bO.b) : vq(bO.g, bO.b) ? bC.vX(bO.b, ar.u8()) : ac.jV
				.mt(bO.g, gl) && aO.ik.k5(ar.u8(), gl) : (ve = aZ.dq(cu)) !== bO.g && (e1(ve, bO.g) ? vu(bO.g, ve) ? aO.ik.jr(ar.u8(), ve) : vq(bO.g, ve) ? bC.vX(ve, ar.u8()) : ac.jV.mt(bO.g, gl) && aO.ik.k5(ar.u8(), gl) : ac.jV
					.mt(bO.g, gl) && aO.ik.k5(ar.u8(), gl))))
		}(a6V))
	}
}

function a6X() {
	var a6Y = [0, 0],
		a6Z = [0, 0];

	function a6a(bt) {
		return 3 !== a6Y[bt] && 1 !== a6Z[bt] && (a6Z[bt] = 1, a6Y[bt]++, fa.fb.fc(119, (a6Y[0] << 2) + a6Y[1]), 1)
	}
	this.aM = function() {
		var lV = fa.hr.data[119].value;
		a6Y[0] = lV >> 2, a6Y[1] = 3 & lV
	}, this.vZ = function() {
		a6a(0) && az.a1e(he.qC(130))
	}, this.va = function() {
		a6a(1) && az.a1e(he.qC(131))
	}
}

function a6b() {
	2 === cJ.kw ? a6c([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === cJ.kw ? a6c([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === cJ.kw ? a6c([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === cJ.kw && a6c([
		512
	], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function a6c(a6d, a6e, a6f, a6g, a6h) {
	for (var ca, cb, a65, a67, ct, a6j, a3Z = a6d.length - 1, a6i = cJ.cK + cJ.cL, cx = (a6i *= a6i, a6f.length), cC = cx - 1; 0 <= cC; cC--) a6f[cC] *= a6f[cC];
	var a6k = new Array(cx),
		pp = new Array(cx),
		a6l = new Array(cx),
		lV = sn.sr();
	if (void 0 === a6h)
		for (a6h = new Array(cx), cC = cx - 1; 0 <= cC; cC--) a6h[cC] = 0;
	for (cC = 1; cC < cx; cC++) a6k[cC] = a6f[cC] - a6f[cC - 1], pp[cC] = a6g[cC] - a6g[cC - 1], a6l[cC] = a6h[cC] - a6h[cC - 1];
	for (ca = cJ.cK - 1; 0 <= ca; ca--)
		for (cb = cJ.cL - 1; 0 <= cb; cb--) {
			for (a65 = a6i, cC = a3Z; 0 <= cC; cC--) a65 = (a67 = (ca - a6d[cC]) * (ca - a6d[cC]) + (cb - a6e[cC]) * (cb - a6e[cC])) < a65 ? a67 : a65;
			for (ct = a6g[cx - 1], a6j = a6h[cx - 1], cC = 1; cC < cx; cC++)
				if (a65 < a6f[cC]) {
					ct = a6g[cC - 1] + a6m((a65 - a6f[cC - 1]) * pp[cC], a6k[cC]), a6j = a6h[cC - 1] + a6m((a65 - a6f[cC - 1]) * a6l[cC], a6k[cC]);
					break
				} a6n(cJ.cK * cb + ca, ct, a6j, lV)
		}
}

function a6n(bt, ct, a6j, lV) {
	ct < 500 ? lV[bt] = cA(lV[bt] * ct * 2, 1e3) : 500 < ct && (lV[bt] += cA(2 * (1e4 - lV[bt]) * (ct - 500), 1e3)), lV[bt] += cA(a6j * (10 * ct - lV[bt]), 1e3)
}

function a6o() {
	this.ni = new a6p, this.a6q = new a6r, this.result = new a6s, this.jV = new v0
}

function a6t() {
	var a6u, a6v, a6w = -15e3,
		a6x = !1;

	function c5(dB) {
		a7C() || (a6x = !0, a7D(dB, 1), bS.bT.gA(bS.bT.eu), a7E(Math.floor(c0.ma * dB.clientX), Math.floor(c0.ma * dB.clientY)))
	}

	function a62(dB) {
		a6w = bE.dH, a7D(dB, 1), bS.bT.gA(bS.bT.eu), 0 < dB.touches.length && (a6u = Math.floor(c0.ma * dB.touches[0].clientX), a6v = Math.floor(c0.ma * dB.touches[0].clientY), a7F.a62(dB) || a7E(a6u, a6v))
	}

	function a7E(ca, cb) {
		bZ.c5(ca, cb), 0 === bO.p ? bY.c5(ca, cb) : at.a7G(ca, cb) || am.c5(ca, cb) || b2.c5(ca, cb) || b1.vM(ca, cb) || b0.c5(ca, cb) || ax.c5(ca, cb) || wK.a7H(ca, cb) || au.c5(ca, cb) || b1.vN(ca, cb)
	}

	function cM(dB) {
		a7C() || (a6x = !0, a7D(dB, 1), a7I(Math.floor(c0.ma * dB.clientX), Math.floor(c0.ma * dB.clientY)))
	}

	function a64(dB) {
		a6w = bE.dH, a7D(dB, 1), 0 < dB.touches.length && (a6u = Math.floor(c0.ma * dB.touches[0].clientX), a6v = Math.floor(c0.ma * dB.touches[0].clientY), a7F.a64(dB) || a7I(a6u, a6v))
	}

	function a7I(ca, cb) {
		bZ.cM(ca, cb), 0 === bO.p ? bY.cM(ca, cb) : (a7J.a6T(ca, cb), am.cM(ca, cb) || (ax.cM(ca, cb), b1.bv() ? b1.cM(ca, cb) : ar.a48 ? ar.cM(ca) && (bE.bI = !0) : (ap.cM(ca, cb), aq.qS && aq.cM(ca, cb) && (bE.bI = !0))))
	}

	function a72(dB) {
		a7C() || (a7D(dB, 1), mo(), 0 === bO.p ? (bY.click(-1024, -1024), xa.xO()) : (ap.cO(-1024, -1024), ax.cM(-1024, -1024), ar.a4K(), aq.qS && (aq.qS = !1)))
	}

	function a71(dB) {
		a7C() || (a7D(dB, 1), a7K(Math.floor(c0.ma * dB.clientX), Math.floor(c0.ma * dB.clientY), 2 === dB.button), wK.a70 && (wK.a70 = !1, dB.preventDefault()))
	}

	function click(dB) {
		a7C() || a7D(dB, 1)
	}

	function a73(dB) {
		a6w = bE.dH, a7D(dB, 1), dB && dB.touches && 0 < dB.touches.length && 0 !== bO.p ? aq.qS = !1 : a7F.a68() || (a7K(a6u, a6v, !1), wK.a70 && (wK.a70 = !1, dB.preventDefault()))
	}

	function a74(dB) {
		a6w = bE.dH, a7D(dB, 1), a7K(a6u, a6v, !1), wK.a70 && (wK.a70 = !1, dB.preventDefault())
	}

	function a75(dB) {
		a7L.a75(dB)
	}

	function a76(dB) {
		a7L.a76(dB)
	}

	function a77(dB) {
		a7C() || a7D(dB, 0)
	}

	function a7K(ca, cb, vc) {
		mo(), 0 === bO.p ? bY.click(ca, cb) : (ap.cO(ca, cb), am.cO(), ar.a4K(), aq.qS = !1, b1.click(ca, cb, vc) ? bE.bI = !0 : ax.a71(ca, cb))
	}

	function mo() {
		bZ.mo()
	}

	function mn(dB) {
		var ca, cb, deltaY;
		a7C() || (a7D(dB, 1), bS.bT.gA(bS.bT.eu), ca = Math.floor(c0.ma * dB.clientX), cb = Math.floor(c0.ma * dB.clientY), deltaY = dB.deltaY, 1 === dB.deltaMode && (deltaY *= 16), bZ.mn(ca, cb, deltaY), 0 === bO.p ? bY.mn(ca, cb, deltaY) : ap.mn(
			ca, cb, deltaY) || (ar.mm(ca, cb) ? ar.mn(deltaY) && (bE.bI = !0) : aq.mn(ca, cb, deltaY)))
	}

	function a78(dB) {
		a7D(dB, 0)
	}

	function a7D(dB, id) {
		0 === id && bZ.bv() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== bY.gB() && dB.preventDefault()
	}

	function a7A(dB) {
		if (keybindHandler(dB.key)) return;
		a7C() || ("ArrowLeft" === dB.key ? uZ.a7N(3) : "ArrowUp" === dB.key ? uZ.a7N(0) : "ArrowRight" === dB.key ? uZ.a7N(1) : "ArrowDown" === dB.key ? uZ.a7N(2) : "a" === dB.key ? ar.a4J(.9375) : "d" === dB.key ? ar.a4J(16 / 15) : "s" === dB.key ?
			ar.a4J(7 / 8) : "w" === dB.key ? ar.a4J(8 / 7) : "1" === dB.key ? ar.a4J(.75) : "2" === dB.key ? ar.a4J(7 / 8) : "3" === dB.key ? ar.a4J(.9375) : "4" === dB.key ? ar.a4J(31 / 32) : "5" === dB.key ? ar.a4J(32 / 31) : "6" === dB.key ?
			ar.a4J(16 / 15) : "7" === dB.key ? ar.a4J(8 / 7) : "8" === dB.key ? ar.a4J(4 / 3) : "+" === dB.key ? 0 !== bO.p && aq.mn(Math.floor(c0.bg / 2), Math.floor(c0.bh / 2), -200) : "-" === dB.key ? 0 !== bO.p && aq.mn(Math.floor(c0.bg / 2),
				Math.floor(c0.bh / 2), 200) : "c" === dB.key ? 0 !== bO.p && am.cD() : " " === dB.key ? bO.p && a7J.a6U(!1) : "b" === dB.key && bO.p && a7J.a6U(!0))
	}

	function a79(dB) {
		a7C() || bE.dH < 400 || "Enter" === dB.key && bZ.hw(1) || (8 !== bY.gB() && bY.hw(dB) ? bE.bI = !0 : "Escape" === dB.key ? wK.wL() : "ArrowLeft" === dB.key || "a" === dB.key ? uZ.a7O(3) : "ArrowUp" === dB.key || "w" === dB.key ? uZ.a7O(0) :
			"ArrowRight" === dB.key || "d" === dB.key ? uZ.a7O(1) : "ArrowDown" === dB.key || "s" === dB.key ? uZ.a7O(2) : "h" === dB.key ? at.a7P(!bO.r) : " " === dB.key && bO.p && (ax.bc && ax.cP(), bO.o) && at.a7Q(!1))
	}

	function a7B() {
		"hidden" === document.visibilityState ? 1 === bO.p && (bO.o ? at.a7R() : !bO.n || ax.bc || bO.s || ax.cP()) : bE.bI = !0
	}

	function a7C() {
		return a6w + 15e3 > bE.dH
	}

	function resize() {
		c0.a6K()
	}
	this.a6y = 0, this.a6z = "", this.a70 = !1, this.aM = function() {
		a3s.addEventListener("mousedown", c5, {
			passive: !1
		}), a3s.addEventListener("mousemove", cM, {
			passive: !1
		}), a3s.addEventListener("mouseup", a71, {
			passive: !1
		}), a3s.addEventListener("click", click, {
			passive: !1
		}), a3s.addEventListener("mouseleave", a72, {
			passive: !1
		}), a3s.addEventListener("wheel", mn, {
			passive: !1
		}), a3s.addEventListener("touchstart", a62, {
			passive: !1
		}), a3s.addEventListener("touchmove", a64, {
			passive: !1
		}), a3s.addEventListener("touchend", a73, {
			passive: !1
		}), a3s.addEventListener("touchcancel", a74, {
			passive: !1
		}), a3s.addEventListener("dragover", a75), a3s.addEventListener("drop", a76), a3s.addEventListener("dblclick", a77), document.addEventListener("contextmenu", a78), document.addEventListener("keyup", a79), document.addEventListener(
			"keydown", a7A), document.addEventListener("visibilitychange", a7B), window.addEventListener("resize", resize)
	}, this.a7H = function(ca, cb) {
		return !!at.c5(ca, cb) || !!(ap.c5(ca, cb) || aq.c5(ca, cb) || ar.c5(ca, cb) || az.c5(ca, cb))
	}, this.a7S = a7C, this.a7T = function() {
		return !a6x || 0 < a6w
	}, this.wL = function() {
		if (!bZ.bv()) return 8 === bY.gB() ? bO.r ? void at.a7P(!1) : am.bv ? void am.cP() : void ax.cP() : void(7 === bY.gB() ? qL.rc() : 6 === bY.gB() ? qH.oS() : 2 === bY.gB() && aH.a7U());
		bZ.hw(2)
	}
}

function a7V() {
	this.og = ["", ""], this.hf = ["Aceptar", "Borraste a {0}.", "Fuiste borrado por {0}.", "Felicidades! Ganaste el juego.", "{0} ganó el juego.", "{0} rompió el pacto de no agresión.", "¡{0} te está atacando!", "Elige tu posición de inicio!",
		"Te rendiste!", "¡El juego terminó en un empate!", "Error: {0}", "New Game Update", "{0} fue inmortalizado!", "Tierra sin reclamar {0}", "Jugador: {0}   Saldo: {1}   Territorio: {2}   Coordenadas: {3}", "Montañas {0}", "Agua {0}",
		"Propietario del barco: {0}   Fuerza: {1}", " Mensaje a {0}: ", "{0}: ", "¡La humanidad triunfa! Los no muertos han sido rechazados.", "La Resistencia",
		"La era de la humanidad termina, invadida por la implacable marea de los no muertos.", "El Virus", "¡Acordar la paz concluye el juego en un empate!", "Firmaste un pacto de no agresión con {0}.",
		"Le pediste a {0} que firmara un pacto de no agresión.", "{0} aceptó el pacto de no agresión.", "{0} solicitó un pacto de no agresión.", "Pediste a {0} jugadores atacar a {1}.", "Pediste a {0} que atacara a {1}.",
		"{0} te sugirió que atacaras a {1}.", "¡Tu saldo es demasiado bajo!", "Exportaste {0} recurso(s) a {1}.", "Se dedujo un impuesto de {0} unidad(es).", "{0} te apoyó con {1} recurso(s).", "Un bot ({0}) te apoyó con {1} recurso(s).",
		"Mapa: {0}", "Dimensión: {0}x{1}", "Píxeles totales: {0}", "Tierra: {0} ({1})", "Agua: {0} ({1})", "Montañas: {0} ({1})", "El envío completo contra jugadores humanos está deshabilitado.",
		"{0} y {1} otro(s) jugador(es) fueron eliminados.", "{0} y {1} otro(s) jugador(es) abandonaron el juego.", "{0} y {1} otro(s) jugador(es) se rindieron.", "{0} fue eliminado por {1}.", "{0} abandonó el juego.", "{0} se rindió.",
		"{0} se unió al juego.", "{1006}Sin respuesta del servidor", "{3231}¡Cuenta guardada con éxito!", "{3232}Cuenta", "{3249}No se encontraron servidores", "{3252}Gracias por el voto.", "{3265}Por favor, acepta las cookies",
		"{3266}Formato de contraseña inválido", "{3605}Formato de repetición inválido", "{4207}Tiempo de espera en el lobby", "{4214}Nombre de usuario inválido", "{4224}Lobby Error", "{4229}Sin respuesta del cliente", "Indefinido", "Error",
		"TABLA DE LIDERAZGO", "ELIMINASTE A", "FUERON ELIMINADOS POR", "EL JUEGO FUE GANADO POR", "MAPA:", "Humanos", "Jugadores", "Bots", "Espectadores", "Umbral", "Ocupación", "Interés", "Ingresos", "Tiempo", "Abandonar juego", "Más",
		"Ajustes", "Repetición", "Enlaces", "Versión del juego", "Eliminar datos", "Configuración de privacidad", "Cerrar", "Estadísticas del juego", "Rendirse", "Reiniciar juego forzosamente", "Menú", "Atrás", "Seleccionar todo", "Copiar",
		"Limpiar", "Lanzar", "Guardar y cerrar", "Restablecer", "Información",
		"Aumentar la resolución, reducir el tamaño mínimo de la fuente y acelerar la velocidad de renderizado del texto puede sobrecargar tu sistema y afectar la capacidad de respuesta del juego.", "Idioma", "Resolución", "Amigable para móviles",
		"Fuente", "Ocultar nombres de usuario", "Colocar saldo arriba", "Ocultar botones de zoom", "Tamaño mínimo de fuente", "Lobby", "Velocidad de renderizado de texto", "Bajo", "Medio", "Alto", "Muy alto", "Pequeño", "Muy pequeño",
		"Lobby proxy", "Lento", "Normal", "Rápido", "Habilitado", "Nueva actualización del juego", "¡El juego ha sido actualizado! Por favor, recarga el juego.", "Recargar", "Mi cuenta", "Eliminar cuenta", "", "",
		"Si se acuerda la paz, el jugador con el mayor territorio gana el juego."
	]
}

function p6(m0, p3) {
	var a7W = document.createElement("div");
	this.a7X = a7W, this.resize = function() {
		a7W.style.padding = cR.cU.jC(c3.jD), a7W.style.lineHeight = cR.cU.jC(cR.cU.a59(.035))
	}, m0.style.overflowX = "hidden", m0.style.overflowY = "auto", a7W.innerHTML = p3, m0.appendChild(a7W)
}

function a7Y() {
	"function" != typeof Math.log2 && (Math.log2 = function(ca) {
		return Math.log(ca) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(ca) {
		return Math.log(ca) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(ca) {
		return 0 < ca ? 1 : ca < 0 ? -1 : 0
	})
}

function a7Z() {
	var a7a = new Uint8Array(64);
	this.aM = function() {
		var cC;
		for (a7a[0] = 45, a7a[37] = 95, cC = 0; cC < 10; cC++) a7a[cC + 1] = 48 + cC;
		for (cC = 0; cC < 26; cC++) a7a[cC + 11] = 65 + cC, a7a[cC + 38] = 97 + cC
	}, this.a7b = function(a7c) {
		for (var n4 = gR, a7d = new Uint8Array(a7c), cC = 0; cC < a7c; cC++) a7d[cC] = n4.kT(6);
		return a7d
	}, this.a7e = function(a7d) {
		for (var cx = a7d.length, a7f = a7a, cr = [], cC = 0; cC < cx; cC++) cr.push(String.fromCharCode(a7f[a7d[cC]]));
		return cr.join("")
	}
}

function a7g() {
	var a7k, a7l, a7m, a7n, a7o, a7p, a7q, a7r, a7s, a7t, a7u, a7h = [224, 224, 224],
		a7i = [
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
		a7j = [
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

	function a8E(en, a8F) {
		yN[en] = 0, yN[en + 1] = 0, yN[en + 2] = a8F, yN[en + 3] = 0, a8G(en)
	}

	function a8G(en) {
		var ca;
		aW.um || (ca = aZ.hM(en), en = aZ.hN(en), aW.um = ca >= qo.a44[0] && ca <= qo.a44[2] && en >= qo.a44[1] && en <= qo.a44[3])
	}
	this.aM = function(a7) {
		if (a7k = new Uint8Array(bO.b), a7l = new Uint8Array(bO.b), a7m = new Uint8Array(bO.b), a7n = new Uint8Array(bO.b), a7o = new Uint8Array(bO.b), a7p = new Uint8Array(bO.b), a7q = new Uint8Array(bO.b), a7r = new Uint8Array(bO.b), a7s =
			new Uint8Array(bO.b), a7t = new Uint8Array(bO.b), this.sk = new Uint8Array(bO.b), (a7u = new Int32Array(4))[0] = -4 * cJ.cK, a7u[1] = 4, a7u[2] = -a7u[0], a7u[3] = -a7u[1], bO.u)
			for (var cs, gk, cC = bO.b - 1; 0 <= cC; cC--) gk = aR.xA[aR.eo[cC]], cs = cA((a7j[gk][3] + 1) * aJ.random(), aJ.value(100)), a7k[cC] = a7i[gk][0] + cs * a7j[gk][0], a7l[cC] = a7i[gk][1] + cs * a7j[gk][1], a7m[cC] = a7i[gk][2] + cs *
				a7j[gk][2];
		else aB.aC && aB.aD.a81 ? function(cr) {
			var cC;
			for (cC = bO.l - 1; 0 <= cC; cC--) a7k[cC] = 4 * cr[cC][0], a7l[cC] = 4 * cr[cC][1], a7m[cC] = 4 * cr[cC][2]
		}(aB.aD.a81) : (function() {
			for (var cC = bO.b - 1; cC >= bO.h; cC--) a7k[cC] = 4 * cA(64 * aJ.random(), aJ.value(100)), a7l[cC] = 4 * cA(64 * aJ.random(), aJ.value(100)), a7m[cC] = 4 * cA(64 * aJ.random(), aJ.value(100))
		}(), function(a7) {
			for (var cC = bO.h - 1; 0 <= cC; cC--) a7k[cC] = 4 * a7[cC].lu[0], a7l[cC] = 4 * a7[cC].lu[1], a7m[cC] = 4 * a7[cC].lu[2]
		}(a7));
		! function() {
			var cC, c1;
			for (cC = bO.b - 1; 0 <= cC; cC--) c1 = cA(a7k[cC] + a7l[cC] + a7m[cC], 3), a7k[cC] += a6m(c1 - a7k[cC], 2), a7l[cC] += a6m(c1 - a7l[cC], 2), a7m[cC] += a6m(c1 - a7m[cC], 2), a7k[cC] -= a7k[cC] % 4, a7l[cC] -= a7l[cC] % 4, a7m[cC] -=
				a7m[cC] % 4
		}(),
		function() {
			for (var cC = bO.b - 1; 0 <= cC; cC--) a7k[cC] += cA(cC, 128), a7l[cC] += cA(cC % 128, 32), a7m[cC] += cA(cC % 32, 8), a7n[cC] = cC % 8
		}(), this.a87(),
			function() {
				for (var cC = bO.b - 1; 0 <= cC; cC--) a7o[cC] = a7k[cC] < 32 ? a7k[cC] + 32 : a7k[cC] - 32, a7p[cC] = a7l[cC] < 32 ? a7l[cC] + 32 : a7l[cC] - 32, a7q[cC] = a7m[cC] < 32 ? a7m[cC] + 32 : a7m[cC] - 32
			}(),
			function() {
				for (var cC = bO.b - 1; 0 <= cC; cC--) a7r[cC] = 235 < a7k[cC] ? a7k[cC] - 20 : a7k[cC] + 20, a7s[cC] = 235 < a7l[cC] ? a7l[cC] - 20 : a7l[cC] + 20, a7t[cC] = 235 < a7m[cC] ? a7m[cC] - 20 : a7m[cC] + 20
			}()
	}, this.tn = function(player) {
		var cr = dS.nz;
		return cr[0] = a7k[player], cr[1] = a7l[player], cr[2] = a7m[player], cr
	}, this.a87 = function() {
		for (var cC = bO.b - 1; 0 <= cC; cC--) this.sk[cC] = a7k[cC] + a7l[cC] + a7m[cC] < 280 ? 0 : 1
	}, this.hM = function(en) {
		return cA(en, 4) % cJ.cK
	}, this.hN = function(en) {
		return cA(en, 4 * cJ.cK)
	}, this.hL = function(ca, cb) {
		return Math.floor(4 * (cb * cJ.cK + ca))
	}, this.a5x = function(en) {
		return this.xn(en + a7u[0]) || this.xn(en + a7u[1]) || this.xn(en + a7u[2]) || this.xn(en + a7u[3])
	}, this.a5w = function(en, player) {
		return this.a8A(en + a7u[0], player) || this.a8A(en + a7u[1], player) || this.a8A(en + a7u[2], player) || this.a8A(en + a7u[3], player)
	}, this.n9 = function(player) {
		return player < bO.h && 2 !== aN.jN[player]
	}, this.dn = function(en) {
		return 208 <= yN[en + 3]
	}, this.a0X = function(player, en) {
		return this.dn(en) && this.a8B(player, en)
	}, this.a8B = function(player, en) {
		return player === this.dq(en)
	}, this.a8C = function(en) {
		return 208 <= yN[en + 3] && yN[en + 3] < 224
	}, this.dm = function(en) {
		return 224 <= yN[en + 3] && yN[en + 3] < 248
	}, this.su = function(en) {
		for (var cC = 3; 0 <= cC; cC--)
			if (this.hQ(en + a7u[cC])) return !0;
		return !1
	}, this.a8D = function(en) {
		return 192 <= yN[en + 3] && yN[en + 3] < 208
	}, this.hO = function(en, player) {
		return this.a8D(en) && player === this.dq(en)
	}, this.hU = function(en) {
		return this.dn(en) || this.ds(en)
	}, this.hQ = function(en) {
		return 0 === yN[en + 3] && 2 === yN[en + 2]
	}, this.ds = function(en) {
		return 0 === yN[en + 3] && 1 === yN[en + 2]
	}, this.xn = function(en) {
		return 0 === yN[en + 3] && 3 === yN[en + 2]
	}, this.vo = function(en) {
		return this.xn(en)
	}, this.a8A = function(en, player) {
		return this.ds(en) || this.dn(en) && player !== this.dq(en)
	}, this.dq = function(en) {
		return yN[en] % 4 * 128 + yN[en + 1] % 4 * 32 + yN[en + 2] % 4 * 8 + yN[en + 3] % 8
	}, this.a35 = function(en) {
		a8E(en, 1)
	}, this.hP = function(en) {
		a8E(en, 2)
	}, this.a5v = function(en, player) {
		yN[en] = a7k[player], yN[en + 1] = a7l[player], yN[en + 2] = a7m[player], yN[en + 3] = 208 + a7n[player], a8G(en)
	}, this.iR = function(en, player) {
		yN[en] = a7o[player], yN[en + 1] = a7p[player], yN[en + 2] = a7q[player], yN[en + 3] = 224 + a7n[player], a8G(en)
	}, this.dr = function(en, player) {
		yN[en] = a7r[player], yN[en + 1] = a7s[player], yN[en + 2] = a7t[player], yN[en + 3] = 248 + a7n[player], a8G(en)
	}, this.hR = function(en, player) {
		yN[en] = a7h[0] + a7k[player] % 4, yN[en + 1] = a7h[1] + a7l[player] % 4, yN[en + 2] = a7h[2] + a7m[player] % 4, yN[en + 3] = 192 + a7n[player], a8G(en)
	}
}

function a8H() {
	this.a8I = "https://", this.a8J = this.a8I + "territorial.io/", this.iy = this.a8J + "changelog", this.j3 = this.a8J + "terms", this.a8K = this.a8J + "cookie_policy", this.j4 = this.a8J + "privacy", this.j2 = this.a8J + "tutorial", this.j1 = this
		.a8J + "players", this.iz = this.a8J + "clans", this.j0 = this.a8J + "clan-results", this.iv = this.a8I + "play.google.com/store/apps/details?id=territorial.io", this.iw = this.a8I + "apps.apple.com/app/id1581110913", this.a8L = this.a8I +
		"www.youtube.com/watch?v=toZTQ8aRdFc", this.ix = this.a8I + "discord.gg/pthqvpTXmh", this.a8M = this.a8I + "www.instagram.com/davidtschacher/", this.a8N =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function a8O() {
	var ex, kp, ca, cb, oB, a8P, gap, a8Q, fontSize, a8R, bu, cz, a8S, a8T, a8U, a8V, a8W, a8X;

	function a8a() {
		kp.clearRect(0, 0, aw.bg, aw.bh), kp.fillStyle = cd.ce, kp.fillRect(0, 0, aw.bg, aw.bh), kp.fillStyle = cd.a8b, cu = 0 < a8U ? a8U : Math.sqrt(cz[4] / 1e4), kp.fillRect(0, aw.bh - oB - 1, Math.floor(cu * aw.bg), oB), kp.fillStyle = cd.co, kp
			.fillRect(0, 0, aw.bg, 1), kp.fillRect(0, 0, 1, aw.bh), kp.fillRect(aw.bg - 1, 0, 1, aw.bh), kp.fillRect(0, aw.bh - 1, aw.bg, 1), kp.fillRect(0, aw.bh - oB - 1, aw.bg, 1);
		for (var cu, a8c, cN = 0, cC = 0; cC < bu.length; cC++) a8S[cC] ? (cR.cU.textAlign(kp, 0), a8c = Math.floor((a8P - oB + 2 * a8Q) * (cC - cN + 1) / (bu.length + 1) - .7 * a8Q), kp.fillText(bu[cC], gap, a8c), cR.cU.textAlign(kp, 2), 5 === cC &&
			0 !== aN.bN[bO.g] && aN.dj[bO.g] >= aX.lR(bO.g) ? (kp.fillStyle = cd.a8d, kp.fillText(a8Z(cC), aw.bg - gap, a8c), kp.fillStyle = cd.co) : kp.fillText(a8Z(cC), aw.bg - gap, a8c)) : cN++
	}

	function a8Z(cC) {
		return cC < 3 ? cz[cC].toString() : 3 === cC || 4 === cC || 5 === cC ? cR.cS.cW(cz[cC] / 100, 2) : cC < 7 ? cR.cS.cT(cz[cC]) : cC === 7 ? aw.dL(cz[7]) : cC === 8 ? utils.getMaxTroops(aN.d0, bO.g) : utils.getDensity(bO.g)
	}

	function a8Y() {
		aN.d0[bO.g] !== cz[6] && (cz[6] = aN.d0[bO.g], a8R++)
	}
	this.aM = function() {
		a8U = a8V = 0, (bu = new Array(8))[0] = he.hf[70], bu[1] = bO.n ? he.hf[71] : he.hf[72], bu[2] = he.hf[73], bu[3] = he.hf[74], bu[4] = he.hf[75], bu[5] = he.hf[76], bu[6] = he.hf[77], bu[7] = he.hf[78],
			bu.push("Max Troops", "Density"), // add bu
			a8X = bO.q - cA(bO.q, 100), (cz = new Array(bu.length))[0] = bO.n ? 0 : bO.h, cz[1] = bO.n ? kd : bO.j, cz[2] = bO.k, cz[3] = 0, cz[4] = cA(1e4 * aN.d0[0], bO.q), cz[5] = 700, cz[6] = 0, a8Y(), cz[7] = 0, a8T = a8Z(6), a8S =
			new Array(bu.length);
		for (var cC = bu.length - 1; 0 <= cC; cC--) a8S[cC] = !0;
		a8W = 0, a8W = bO.n ? (a8S[0] = !1, a8S[2] = !1, a8S[3] = !1, 3) : (a8S[3] = !1, 1), a8R = 0, this.resize()
	}, this.resize = function() {
		this.bg = Math.floor((bJ.bK.c2() ? .1646 : .126) * 1.25 * c0.ge), this.bh = Math.floor(1.18 * this.bg), oB = Math.floor(.04 * this.bg), gap = Math.floor(.035 * this.bg), a8Q = .04 * this.bg, a8P = this.bh, this.bh -= Math.floor(a8W * (
			this.bh - 2 * oB) / bu.length), fontSize = Math.floor(.7 * (a8P - oB) / bu.length), fontSize = cR.cU.cV(1, fontSize), (ex = document.createElement("canvas")).width = this.bg, ex.height = this.bh, (kp = ex.getContext("2d", {
			alpha: !0
		})).font = fontSize, cR.cU.textBaseline(kp, 1), kp.lineWidth = 1, this.nq(), this.qT(), av.qT(), a8a()
	}, this.qT = function() {
		ca = c0.bg - this.bg - c3.gap
	}, this.a2z = function() {
		cb = c3.gap
	}, this.nq = function() {
		cb = c3.gap + (av.uG() && 0 !== aN.bN[bO.g] && !bO.s ? av.bh + c3.gap : 0)
	}, this.bP = function(zo) {
		(zo || 100 <= a8R) && (a8R = 0, a8a())
	}, this.vW = function() {
		return cz[7]
	}, this.dL = function(value) {
		var cs = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * cs) / 1e3);
		return value < 10 ? cs + ":0" + value : cs + ":" + value
	}, this.fx = function() {
		var cv, per;
		a8S[0] && bO.i - bO.k !== cz[0] && (cz[0] = bO.i - bO.k, a8R++), kd - cz[0] !== cz[1] && (cz[1] = kd - cz[0], a8R++), this.ww(), (cv = aX.lO(bO.g)) !== cz[5] && (cz[5] = cv, a8R++), a8Y(), cz[7] += bE.dI, cv = a8Z(7), a8T !== cv && (a8T =
			cv, a8R += 100), cv = bO.u ? aj.a8l() : aN.d0[a8m[0]], per = cA(1e4 * cv, bO.q), cz[3] = cv, cz[4] !== per && (a8R++, cz[4] = per), 8 === bO.w && function() {
			if (0 === aN.bN[0]) eq.ni.nj(1);
			else {
				if (0 !== aN.bN[1]) return;
				eq.ni.nj(0)
			}
			return 1
		}() || cz[3] < a8X || cz[3] !== bO.q && ! function() {
			for (var cC = kd - 1; 0 <= cC; cC--)
				if (0 < aN.dU[lU[cC]].length) return;
			return 1
		}() || eq.ni.nj(-1)
	}, this.ww = function() {
		a8S[2] && bO.k !== cz[2] && (cz[2] = bO.k, a8R++)
	}, this.nU = function(cC) {
		var mj, a8p, cN;
		return 2 !== bO.p && (cC === bO.a0 ? (a8U = 0, a8a(), !1) : (-1 !== cC || 0 !== a8V) && (a8p = a8U, a8U = bO.o ? cC / bO.a0 : (cN = performance.now(), 0 <= cC && (mj = cN - 392 * cC, a8V = 0 === cC || mj < a8V ? mj : a8V), 1 < (a8U = (
			cN - a8V) / (392 * bO.a0)) ? 1 : a8U), a8a(), a8U !== a8p))
	}, this.cY = function() {
		cc.drawImage(ex, ca, cb)
	}
}

function a8q() {
	this.og = [], this.hf = ["Принять", "Вы стерли {0}.", "Вас уничтожил {0}.", "Поздравляем! Вы выиграли игру.", "{0} выиграл игру.", "{0} нарушил пакт о ненападении.", "{0} атакует вас!", "Выберите вашу начальную позицию!", "Вы сдались!",
		"Игра закончилась вничью!", "Ошибка: {0}", "New Game Update", "{0} был увековечен!", "Невостребованная Земля {0}", "Игрок: {0}   Баланс: {1}   Территория: {2}   Координаты: {3}", "Горы {0}", "Вода {0}",
		"Владелец корабля: {0}   Сила: {1}", " Сообщение для {0}: ", "{0}: ", "Человечество торжествует! Нежить отброшена назад.", "Сопротивление", "Эра человечества заканчивается, нежить непрерывно наступает.", "Вирус",
		"Согласие на мир заканчивает игру вничью!", "Вы подписали пакт о ненападении с {0}.", "Вы предложили {0} подписать пакт о ненападении.", "{0} принял пакт о ненападении.", "{0} предложил заключить пакт о ненападении.",
		"Вы призвали {0} игроков атаковать {1}.", "Вы попросили {0} атаковать {1}.", "{0} предложил вам атаковать {1}.", "Ваш баланс слишком низкий!", "Вы экспортировали {0} ресурс(ов) к {1}.", "Был удержан налог в размере {0} единиц(ы).",
		"{0} поддержал вас {1} ресурс(ов).", "Бот ({0}) поддержал вас {1} ресурс(ов).", "Карта: {0}", "Размер: {0}x{1}", "Общее количество пикселей: {0}", "Земля: {0} ({1})", "Вода: {0} ({1})", "Горы: {0} ({1})",
		"Полная отправка против игроков-людей отключена.", "{0} и еще {1} игрок(а) были уничтожены.", "{0} и еще {1} игрок(а) покинули игру.", "{0} и еще {1} игрок(а) сдались.", "{0} был уничтожен {1}.", "{0} покинул игру.", "{0} сдался.",
		"{0} присоединился к игре.", "{1006}Ответ от сервера не получен", "{3231}Аккаунт успешно сохранен!", "{3232}Аккаунт", "{3249}Серверы не найдены", "{3252}Спасибо за ваш голос.", "{3265}Пожалуйста, примите Cookies",
		"{3266}Неверный формат пароля", "{3605}Неверный формат повтора", "{4207}Тайм-аут лобби", "{4214}Неверное имя пользователя", "{4224}Lobby Error", "{4229}Нет ответа от клиента", "Неопределено", "Ошибка", "ТАБЛИЦА ЛИДЕРОВ", "ВЫ СТЕРЛИ",
		"ВАС УНИЧТОЖИЛ", "ИГРУ ВЫИГРАЛ", "КАРТА:", "Люди", "Игроки", "Боты", "Зрители", "Порог", "Занятие", "Интерес", "Доход", "Время", "Выйти из игры", "Ещё", "Настройки", "Повтор", "Ссылки", "Версия игры", "Удалить данные",
		"Настройки конфиденциальности", "Закрыть", "Статистика игры", "Сдаться", "Принудительный перезапуск игры", "Меню", "Назад", "Выбрать все", "Копировать", "Очистить", "Запустить", "Сохранить и закрыть", "Сброс", "Информация",
		"Увеличение разрешения, уменьшение минимального размера шрифта и ускорение рендеринга текста могут нагружать вашу систему и снижать отзывчивость игрового процесса.", "Язык", "Разрешение", "Подходит для мобильных", "Шрифт",
		"Скрыть имена пользователей", "Разместить баланс сверху", "Скрыть кнопки масштабирования", "Минимальный размер шрифта", "Лобби", "Скорость рендеринга текста", "Низкое", "Средний", "Высокое", "Очень высокое", "Маленький",
		"Очень маленький", "Проксированное Лобби", "Медленно", "Нормально", "Быстро", "Включено", "Новое обновление игры", "Игра была обновлена! Пожалуйста, перезагрузите игру.", "Перезагрузить", "Мой аккаунт", "Удалить аккаунт", "", "",
		"Если будет достигнуто соглашение о мире, побеждает игрок с наибольшей территорией."
	]
}

function w8() {
	this.nZ = null, this.na = null, this.nb = null, this.nc = null, this.ne = null, this.ng = null;
	var a8r = 0;
	this.wB = null, this.os = "", this.aM = function(wB) {
		this.nZ = [], this.na = [], this.nb = [], this.nc = [], this.ne = [0], this.ng = [0], a8r = 0, this.wB = wB, this.os = ""
	}, this.jq = function(id, dC, dD, ke) {
		bO.o || 2 === bO.p || (0 === this.ne[a8r] && (this.ng[a8r] ? (this.ne.push(1), this.ng.push(0), a8r++) : this.ne[a8r] = 1), this.nZ.push(id), this.na.push(dC), this.nb.push(void 0 === dD ? 0 : dD), this.nc.push(void 0 === ke ? 0 : ke),
			this.ng[a8r]++)
	}, this.fx = function() {
		0 === this.ne[a8r] ? this.ng[a8r]++ : (this.ne.push(0), this.ng.push(0), a8r++)
	}
}

function tV() {
	var a8s = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.pO = function(dH) {
		var a8t, f8 = new Date(dH.getTime() - 6e4 * dH.getTimezoneOffset()).toUTCString();
		return f8.length < 12 || (f8 = f8.substring(5, f8.length), 0 === (dH = dH.getTimezoneOffset())) ? f8 : (a8t = (dH < 0 ? "+" : "-") + kL.lk(Math.abs(dH), 60), 0 == (dH = Math.abs(dH) % 60) ? f8 + a8t : f8 + a8t + ":" + (dH < 10 ? "0" :
			"") + dH)
	}, this.ph = function(dH) {
		var f8 = dH.toUTCString();
		return f8.length < 12 ? f8 : function(dH) {
			return a8s[dH.getUTCDay()]
		}(dH) + ", " + f8.substring(5, f8.length - 4)
	}
}

function a8v() {
	this.xq = new Int16Array(4), this.yO = new Int16Array(4), this.aM = function() {
		var cC;
		for (this.xq[0] = -cJ.cK, this.xq[1] = 1, this.xq[2] = cJ.cK, this.xq[3] = -1, cC = 0; cC < 4; cC++) this.yO[cC] = 4 * this.xq[cC]
	}, this.xk = function(xi, xh) {
		var ql = this.nm(xh) - this.nm(xi),
			xh = this.nn(xh) - this.nn(xi),
			xi = ql >>> 31 << 1;
		return 5 + xi + (1 - xi) * (1 - (xh >>> 31 << 1)) * (Math.abs(ql) - Math.abs(xh) >>> 31) & 3
	}, this.xm = function(xi, xh, dk) {
		return dk % 2 == 0 ? dk + (1 - dk) * (1 - (this.nm(xh) - this.nm(xi) >>> 31 << 1)) + 4 & 3 : dk + (2 - dk) * (1 - (this.nn(xh) - this.nn(xi) >>> 31 << 1)) + 4 & 3
	}, this.xj = function(en, gl) {
		for (var xh, a8x, a8z = aN.jP[en], cx = a8z.length, bg = cJ.cK, a90 = this.nm(gl), a91 = this.nn(gl), a92 = a8z[0] >> 2, min = this.a93(a90, a91, a92), cC = 1; cC < cx; cC++)(a8x = (a8x = a90 - (xh = a8z[cC] >> 2) % bg) * a8x + (a8x =
			a91 - ~~((.5 + xh) / bg)) * a8x) < min && (min = a8x, a92 = xh);
		return a92
	}, this.xp = function(player, cu) {
		return !aZ.ds(cu) && player === aZ.dq(cu)
	}, this.a93 = function(ve, vg, gl) {
		return (ve -= this.nm(gl)) * ve + (vg -= this.nn(gl)) * vg
	}, this.a94 = function(qa, qd, a3Z) {
		qa = this.a95(qa) - this.y3(a3Z), qd = this.a96(qd) - this.y5(a3Z);
		return Math.sqrt(qa * qa + qd * qd)
	}, this.a97 = function(xi, xh) {
		var gm = this.nm(xi) - this.nm(xh),
			xi = this.nn(xi) - this.nn(xh);
		return Math.sqrt(gm * gm + xi * xi)
	}, this.k3 = function(en, js) {
		return kL.lk(js * aN.dj[en], 1e3)
	}, this.a95 = function(qa) {
		return 16 * (qa + cF) / cG
	}, this.a96 = function(qd) {
		return 16 * (qd + cI) / cG
	}, this.vf = function(qa) {
		return Math.floor((qa + cF) / cG)
	}, this.vh = function(qd) {
		return Math.floor((qd + cI) / cG)
	}, this.vk = function(ve, vg) {
		return 1 <= ve && 1 <= vg && ve < cJ.cK - 1 && vg < cJ.cL - 1
	}, this.nm = function(gl) {
		return gl % cJ.cK
	}, this.nn = function(gl) {
		return kL.lk(gl, cJ.cK)
	}, this.vi = function(ve, vg) {
		return vg * cJ.cK + ve
	}, this.jo = function(gl) {
		var ve = this.nm(gl),
			gl = this.nn(gl);
		return 0 < ve && ve < cJ.cK - 1 && 0 < gl && gl < cJ.cL - 1
	}, this.vj = function(gl) {
		return gl << 2
	}, this.a98 = function(gl) {
		return cJ.cK * this.nn(gl) * 256 + (this.nm(gl) << 4)
	}, this.xo = function(gl) {
		return this.a98(gl) + 8 + (cJ.cK << 7)
	}, this.xx = function(a3Z) {
		return cJ.cK * (this.y5(a3Z) >> 4) + (this.y3(a3Z) >> 4)
	}, this.a99 = function(a3Z) {
		a3Z = this.xx(a3Z);
		return (this.nm(a3Z) >> 5) + ac.jc.a9A * (this.nn(a3Z) >> 5)
	}, this.y3 = function(a3Z) {
		return a3Z % (cJ.cK << 4)
	}, this.y5 = function(a3Z) {
		return kL.lk(a3Z, cJ.cK << 4)
	}, this.xl = function(gl, dk) {
		return gl + this.xq[dk]
	}, this.yL = function(cu, dk) {
		return cu + this.yO[dk]
	}
}

function nL() {
	aa.ga(), cc.setTransform(cG, 0, 0, cG, 0, 0), cc.imageSmoothingEnabled = cG < 3, cc.drawImage(cJ.sD, aq.hM(), aq.hN()), al.jZ.cY(), cc.drawImage(a4Q, aq.hM(), aq.hN()), aa.cY(), cc.imageSmoothingEnabled = !1, cc.setTransform(1, 0, 0, 1, 0, 0), ac
		.jZ.cY(), b8.cY(), b3.cY(), (bO.r ? (aj.cY(), at) : (az.cY(), ap.cY(), ar.cY(), at.cY(), au.cY(), aw.cY(), aq.cY(), ay.cY(), aj.cY(), av.cY(), b0.cY(), ax.cY(), b1.cY(), b2.cY(), am.cY(), bH)).cY(), bZ.cY()
}

function a9B(kp, bg, bh) {
	kp.clearRect(0, 0, bg, bh), kp.fillStyle = cd.ce, kp.fillRect(0, 0, bg, bh)
}

function a9C(kp, bg, bh, a9D) {
	kp.fillStyle = cd.co, kp.fillRect(0, 0, bg, a9D), kp.fillRect(0, 0, a9D, bh), kp.fillRect(bg - a9D, 0, a9D, bh), kp.fillRect(0, bh - a9D, bg, a9D)
}

function qs(kp, ca, cb, go, a9D, en, a9E) {
	kp.fillStyle = cd.co;
	var en = Math.floor(go * en),
		bj = (en += (en - a9D) % 2, Math.floor((en - a9D) / 2)),
		go = Math.floor((go - en) / 2);
	kp.fillRect(ca + go, cb + go + bj, en, a9D), a9E && kp.fillRect(ca + go + bj, cb + go, a9D, en)
}

function a9G() {
	var a9H, a9I, a9J, a9K, a9L, a9M, a9N, a9O, a9P, a9Q, a9R, a9S, a9T, a9U, a9V, a9W, a9X, a9Y, a9Z, a9a, a9b, a9c, position, a9d, a9e, a9f, a9g, a9h = 1,
		za = 1;
	var leaderboardHasChanged = true;
	this.playerPos = bO.g;
	leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		leaderboardFilter.filteredLeaderboard = leaderboardFilter.playersToInclude
			.map(id => a00[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = leaderboardFilter.filteredLeaderboard.indexOf(a00[bO.g]);
	}

	function a9j() {
		a9N.clearRect(0, 0, a9H, l3),
			a9N.fillStyle = cd.a9l,
			a9N.fillRect(0, 0, a9H, a9S),
			a9N.fillStyle = cd.mL,
			a9N.fillRect(0, a9S, a9H, l3 - a9S);
		if (leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (leaderboardFilter.enabled ?
			this.playerPos :
			a00[bO.g]
		);
		if (leaderboardFilter.hoveringOverTabs) a9c = -1;
		if (leaderboardFilter.enabled && a9c >= leaderboardFilter.filteredLeaderboard.length) a9c = -1;
		playerPos >= position && a9m(playerPos - position, cd.a9n),
			0 !== a00[bO.g] && 0 === position && a9m(0, cd.a9o),
			-1 !== a9c && a9m(a9c, cd.a9p),
			a9N.fillStyle = cd.mL,
			//console.log("drawing", a9c),
			a9N.clearRect(0, l3 - leaderboardFilter.tabBarOffset, a9H, leaderboardFilter.tabBarOffset);
		a9N.fillRect(0, l3 - leaderboardFilter.tabBarOffset, a9H, leaderboardFilter.tabBarOffset);
		a9N.fillStyle = cd.co,
			a9N.fillRect(0, a9S, a9H, 1),
			a9N.fillRect(0, l3 - leaderboardFilter.tabBarOffset, a9H, 1),
			leaderboardFilter.drawTabs(a9N, a9H, l3 - leaderboardFilter.tabBarOffset, cd.a9n),
			a9N.fillRect(0, 0, a9H, c3.mg),
			a9N.fillRect(0, 0, c3.mg, l3),
			a9N.fillRect(a9H - c3.mg, 0, c3.mg, l3),
			a9N.fillRect(0, l3 - c3.mg, a9H, c3.mg), a9N.font = a9I, cR.cU.textBaseline(a9N, 1), cR.cU.textAlign(a9N, 1), a9N.fillText(he.hf[65], Math.floor((a9H + a9S - 22) / 2), Math.floor(a9Q + a9J / 2));
		playerList.drawButton(a9N, 12, 12, a9S - 22);
		var dv, iU = playerPos < position + a9L - 1 ? 1 : 2;

		if (leaderboardFilter.enabled) {
			let result = leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a9L)
				position = (result.length > a9L ? result.length : a9L) - a9L;
			//if (position >= result.length) position = result.length - 1;
			for (a9N.font = a9K, cR.cU.textAlign(a9N, 0), dv = a9L - iU; 0 <= dv; dv--) {
				const pos = result[dv + position];
				if (pos !== undefined)
					a9q(a8m[pos]), a9r(dv, pos, a8m[pos]);
			}
			for (cR.cU.textAlign(a9N, 2), dv = a9L - iU; 0 <= dv; dv--) {
				const pos = result[dv + position];
				if (pos !== undefined)
					a9q(a8m[pos]), a9s(dv, a8m[pos]);
			}
		} else {
			for (a9N.font = a9K, cR.cU.textAlign(a9N, 0), dv = a9L - iU; 0 <= dv; dv--)
				a9q(a8m[dv + position]), a9r(dv, dv + position, a8m[dv + position]);
			for (cR.cU.textAlign(a9N, 2), dv = a9L - iU; 0 <= dv; dv--)
				a9q(a8m[dv + position]), a9s(dv, a8m[dv + position]);
		}
		2 == iU && (a9q(bO.g), cR.cU.textAlign(a9N, 0), a9r(a9L - 1, a00[bO.g], bO.g), cR.cU.textAlign(a9N, 2), a9s(a9L - 1, bO.g)), 0 === position && (iU = .7 * a9T / gc.get(4).height, a9N.setTransform(iU, 0, 0, iU, Math.floor(a9U + .58 * a9T + .5 *
			iU * gc.get(4).width), Math.floor(a9Q + a9J + .4 * a9T)), a9N.imageSmoothingEnabled = !0, a9N.drawImage(gc.get(4), -Math.floor(gc.get(4).width / 2), -Math.floor(gc.get(4).height / 2)), a9N.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a9q(player) {
		bO.u && (a9N.fillStyle = aR.a9u[aR.xA[aR.eo[player]]])
	}

	function a9m(cC, a9v) {
		a9N.fillStyle = a9v, cC = a9L - 1 < cC ? a9L - 1 : cC;
		a9v = Math.floor((cC === a9L - 1 ? 2 : 0 === cC ? 1.15 : 1) * a9T), a9v = cC === a9L - 2 ? Math.floor(a9S + 9.15 * a9T) - Math.floor(a9S + 8.15 * a9T) : a9v;
		a9N.fillRect(0, Math.floor(a9S + (cC + (0 === cC ? 0 : .15)) * a9T), a9H, a9v)
	}

	function a9r(a9w, a9x, cC) {
		a9N.fillText(a9Y[a9x], a9U, Math.floor(a9Q + a9J + (a9w + .5) * a9T)), 1 === aN.jN[cC] && (a9N.font = "italic " + a9K);
		a9x = Math.floor(a9Q + a9J + (a9w + .5) * a9T);
		a9N.fillText(aN.jM[cC], a9V, a9x), 0 !== aN.jN[cC] && (a9N.font = a9K), cC < bO.h && 2 !== aN.jN[cC] || a9N.fillRect(a9V, a9x + .35 * a9h, a9X[cC], Math.max(1, .1 * a9h))
	}

	function a9s(a9w, cC) {
		a9N.fillText(aN.d0[cC], a9W, Math.floor(a9Q + a9J + (a9w + .5) * a9T))
	}

	function aA6(cb) {
		return (cb -= c3.gap + a9S) < 0 ? Math.floor(cb / a9T) - 1 : cb < (a9L - 1) * a9T ? Math.floor(cb / a9T) : cb < l3 - a9S ? a9L - 1 : (cb -= l3 - a9S, a9L + Math.floor(cb / a9T))
	}

	function w1(ca, cb) {
		return ca >= c3.gap && ca < c3.gap + a9H && cb >= c3.gap && cb < c3.gap + l3
	}
	this.aM = function() {
			var cC;
			for (a9e = !1, a9g = a9f = a9d = 0, a9c = -1, a9L = bJ.bK.c2() ? 6 : 10, za = (position = 0) === (za = fa.hr.data[11].value) ? 10 : 1 === za ? 5 : 1, a9b = !1, a9Z = new Uint16Array(a9L + 1), a9a = new Uint32Array(a9L + 1), a9P = bO.b,
				a8m = new Uint16Array(a9P), a00 = new Uint16Array(a9P), cC = a9P - 1; 0 <= cC; cC--) a8m[cC] = cC, a00[cC] = cC;
			this.resize(!0), a9X = new Uint16Array(bO.b);
			var a9i = Math.floor(a9H - a9V - a9U - a9O);
			for (a9Y = new Array(bO.b), a9N.font = a9K, cC = bO.b - 1; 0 <= cC; cC--) a9Y[cC] = cC + 1 + ".", aN.jM[cC] = cR.kp.sY(aN.jL[cC], a9K, a9i), a9X[cC] = Math.floor(a9N.measureText(aN.jM[cC]).width);
			a9j()
		}, this.resize = function(aM) {
			if (l3 = bJ.bK.c2() ? (a9H = Math.floor(.335 * c0.ge), Math.floor(a9L * a9H / 8)) : (a9H = Math.floor(.27 * c0.ge), Math.floor(a9L * a9H / 10)), a9H = Math.floor(.97 * a9H), (a9M = document.createElement("canvas")).width = a9H, a9M
				.height = l3, a9N = a9M.getContext("2d", {
					alpha: !0
				}), a9Q = .025 * a9H, a9J = .16 * a9H, a9R = 0 * a9H, a9S = Math.floor(.45 * a9Q + a9J), a9T = (l3 - a9J - 2 * a9Q - a9R) / a9L,
				a9M.height = l3 += a9T, leaderboardFilter.tabBarOffset = Math.floor(a9T * 1.3), leaderboardFilter.verticalClickThreshold = l3 - leaderboardFilter.tabBarOffset, leaderboardFilter.windowWidth = a9H,
				a9I = cR.cU.cV(1, Math.floor(.55 * a9J)), a9h = Math.floor((bJ.bK.c2() ? .67 : .72) * a9T), a9K = cR.cU.cV(0, a9h), a9N.font = a9K, a9U = Math.floor(.04 * a9H), a9V = Math.floor((bJ.bK.c2() ? .195 : .18) * a9H), a9O = Math.floor(a9N
					.measureText("00920600").width), a9N.font = a9I, a9W = a9H - a9U, !aM) {
				a9N.font = a9K;
				for (var cC = bO.b - 1; 0 <= cC; cC--) a9X[cC] = Math.floor(a9N.measureText(aN.jM[cC]).width);
				a9j()
			}
		}, this.a9k = function() {
			return a9H
		}, this.bP = function(zo) {
			a9b && (zo || bE.dK() % za == 0) && (a9b = !1, a9j())
		}, this.fx = function() {
			! function() {
				for (var dv = a9P - 1; 0 <= dv; dv--) 0 === aN.bN[a8m[dv]] && ! function(dv) {
					var aA4 = a8m[dv];
					a9P--;
					for (var cC = dv; cC < a9P; cC++) a8m[cC] = a8m[cC + 1], a00[a8m[cC]] = cC;
					a8m[a9P] = aA4, a00[a8m[a9P]] = a9P
				}(dv)
			}();
			for (var aA2, h3 = a9P - 1, dv = 0; dv < h3; dv++) aN.d0[a8m[dv]] < aN.d0[a8m[dv + 1]] && (aA2 = a8m[dv], a8m[dv] = a8m[dv + 1], a8m[dv + 1] = aA2, a00[a8m[dv]] = dv, a00[a8m[dv + 1]] = dv + 1);
			! function() {
				for (var cN = a9b, iU = (a9b = !0, a00[bO.g] >= a9L - 1 ? a9L - 2 : a9L - 1), cC = iU; 0 <= cC; cC--)
					if (a9Z[cC] !== a8m[cC] || a9a[cC] !== aN.d0[a8m[cC]]) return;
				(iU != a9L - 2 || a9Z[a9L] === a00[bO.g] && a9a[a9L] === aN.d0[bO.g]) && (a9b = cN)
			}();
			for (var cC = a9L - 1; 0 <= cC; cC--) a9Z[cC] = a8m[cC], a9a[cC] = aN.d0[a8m[cC]];
			a9Z[a9L] = a00[bO.g], a9a[a9L] = aN.d0[bO.g];
			leaderboardHasChanged = true;
		}, leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.c5 = function(ca, cb) {
			return !!w1(ca, cb) && ((utils.isPointInRectangle(ca, cb, c3.gap + 12, c3.gap + 12, a9S - 22, a9S - 22) && playerList.display(aN.jL), true) &&
				!(cb - c3.gap > leaderboardFilter.verticalClickThreshold && leaderboardFilter.handleMouseDown(ca - c3.gap)) && (a9d = bE.dH, a9e = !0, a9f = a9g = aA6(cb), wK.a7S() && (ca = aA7(-1, a9g, a9L), a9c !== (ca = ca === a9L ? -1 :
					ca)) && (a9c = ca, a9j(), bE.bI = !0)), !0)
		}, leaderboardFilter.repaintLeaderboard = function() {
			a9j(), bE.bI = !0;
		},
		this.cM = function(ca, cb) {
			if (utils.isPointInRectangle(ca, cb, c3.gap + 12, c3.gap + 12, a9S - 22, a9S - 22)) {
				playerList.hoveringOverButton === false && (playerList.hoveringOverButton = true, a9j(), bE.bI = !0);
			} else {
				playerList.hoveringOverButton === true && (playerList.hoveringOverButton = false, a9j(), bE.bI = !0);
			}
			if (leaderboardFilter.setHovering(
					utils.isPointInRectangle(ca, cb, c3.gap, c3.gap + leaderboardFilter.verticalClickThreshold, leaderboardFilter.windowWidth, leaderboardFilter.tabBarOffset), ca - c3.gap
				)) return;
			var cN, aA5 = aA6(cb);
			return a9e ? (cN = position, (position = aA7(0, position += a9f - aA5, bO.b - a9L)) !== cN && (aA5 = (aA5 = aA7(-1, a9f = aA5, a9L)) !== a9L && w1(ca, cb) ? aA5 : -1, a9c = aA5, a9j(), bE.bI = !0), !0) : (aA5 = (aA5 = aA7(-1, aA5,
				a9L)) === a9L || !w1(ca, cb) || wK.a7S() ? -1 : aA5, a9c !== aA5 && (a9c = aA5, a9j(), bE.bI = !0))
		}, this.cO = function(ca, cb) {
			if (!a9e) return !1;
			a9e = !1;
			var aA5 = aA6(cb);
			var isEmptySpace = false;
			return wK.a7S() && -1 !== a9c && (a9c = -1, a9j(), bE.bI = !0), bE.dH - a9d < 350 && a9g === aA5 && -1 !== (aA5 = (aA5 = aA7(-1, aA5, a9L)) !== a9L && w1(ca, cb) ? aA5 : -1) && (ca = (leaderboardFilter.enabled ? (updateFilteredLb(), a8m[
					leaderboardFilter.filteredLeaderboard[aA5 + position] ?? (isEmptySpace = true, a00[bO.g])]) : a8m[aA5 + position]), aA5 === a9L - 1 && (leaderboardFilter.enabled ? this.playerPos : a00[bO.g]) >=
				position + a9L - 1 && (ca = bO.g), !isEmptySpace && bO.u && donationsTracker.displayHistory(ca, aN.jL, bO.n), 0 !== aN.bN[ca] && !isEmptySpace) && bL.uV(ca, 800, !1, 0), !0
		}, this.mn = function(ca, cb, deltaY) {
			var aA8;
			return !(a9e || bO.r || (aA8 = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !w1(ca, cb)) || (ca = (ca = aA7(-1, aA6(cb), a9L)) === a9L || wK.a7S() ? -1 : ca, 0 < deltaY ? position < bO.b - a9L && (position += Math.min(bO.b - a9L -
				position, aA8), a9c = ca, a9j(), bE.bI = !0) : 0 < position && (position -= Math.min(position, aA8), a9c = ca, a9j(), bE.bI = !0), 0))
		}, this.cY = function() {
			cc.drawImage(a9M, c3.gap, c3.gap)
		}
}

function jg() {
	this.fx = function() {
		for (var aA9, jf, aAA = ac.bT.aAA, xs = ac.bT.xs, aAB = ac.bT.aAB, cC = ac.bT.k6 - 1; 0 <= cC; cC--) aA9 = xs[cC], 0 !== (jf = aAA[cC]) && aA9 === aAB[cC] && (! function(cC, aAE, dk) {
			var dg, player = ac.bT.a1r[cC] >> 3,
				dk = aAE + ab.xq[dk] << 2,
				cC = ac.bT.a1s[cC];
			if (aZ.ds(dk)) dg = bO.b;
			else {
				if ((dg = aZ.dq(dk)) === player) return cR.gv.lX(player, cC);
				if (!e1(player, dg)) return aO.lA.aAF(player, dg, cC)
			}
			player === bO.g && (aS.cz[13] += cC);
			aN.dU[player].push(aAE << 2), b7.dc(player, cC, dg), b4.de(player, !0)
		}(cC, ab.xx(aA9), jf - 1), ac.jX.aAD(cC))
	}
}

function aAG() {
	this.ow = new aAH, this.bX = new wT, this.aM = function() {
		bJ.bK.a5Z()
	}
}

function a5M() {
	var ha, hb, hc;
	this.show = function() {
		ha.show(), this.resize()
	}, this.cB = function() {
		ha.cB()
	}, this.resize = function() {
		ha.resize(), hb.resize()
	}, this.hw = function(gk) {
		2 === gk && ha.hx[0].hy()
	}, ha = new hd("Login", [new hg("❌ " + he.hf[92], function() {
		bZ.ba(7, bZ.a5O(7).g2)
	}, cd.j5), new hg("➡️ Login", function() {
		fa.fb.fc(105, yV.te.aAJ(hb.aAK[0].aAL[0].dB.value, 5)), fa.fb.fc(106, yV.te.aAJ(hb.aAK[1].aAL[0].dB.value, 8)), bZ.ba(8, bZ.a5O(7).g2, new ir(18))
	}, cd.hh)]), hb = new hl(ha.hm, ((hc = []).push(function() {
		var hn = new ho;
		return hn.hp("Account Name"), hn.hu(new fV({
			title: "AccountName",
			value: "",
			bt: -1
		})), hn
	}()), hc.push(function() {
		var hn = new ho,
			aAO = (hn.hp("Password"), new fV({
				title: "Password",
				value: "",
				bt: -1
			}));
		return aAO.dB.type = "password", hn.hu(aAO), hn.hu(new tE([new hg("Show", function() {
			"Show" === this.innerText ? (this.innerText = "Hide", aAO.dB.type = "text") : (this.innerText = "Show", aAO.dB.type = "password")
		}).button])), hn
	}()), hc))
}

function jd() {
	this.aAP = 32, this.ca = 0, this.cb = 0, this.a9A = 0, this.aAQ = 0, this.aAR = 4, this.jc = null, this.aAS = new Int16Array(9), this.aM = function() {
		this.a9A = 1 + kL.lk(cJ.cK - 1, this.aAP), this.aAQ = 1 + kL.lk(cJ.cL - 1, this.aAP), this.jc = new Array(this.a9A * this.aAQ), cR.tN.wW(this.jc);
		var ca, cb, aAS = this.aAS,
			bg = this.a9A;
		for (ca = -1; ca <= 1; ca++)
			for (cb = -1; cb <= 1; cb++) aAS[3 * (1 + cb) + 1 + ca] = cb * bg + ca
	}, this.kB = function(aAU, cC) {
		return this.jc[cC].push(aAU), this.jc[cC].length - 1
	}, this.aAV = function(aAW, xr, xt) {
		var aAX, aAY, xr = ab.a99(xr),
			xt = ab.a99(xt);
		return xr === xt ? aAW : (aAX = this.jc[xr].pop(), this.jc[xr].length === aAW ? this.kB(aAX, xt) : (aAY = this.jc[xr][aAW], this.jc[xr][aAW] = aAX, ac.bT.aAZ[aAX] = aAW, this.kB(aAY, xt)))
	}
}

function aAa() {
	var aAb, a2a, a2b, a2c, aAc, aAd;

	function aAg(a1v) {
		for (var cC = a2a - 1; 0 <= cC; cC--) 0 === a2c[a2b[cC]] && aN.d0[a2b[cC]] >= a1v && iB(a2b[cC])
	}

	function aAf(player) {
		10 === a2c[player] ? a2c[player] = aAb : aN.d0[player] < 1e3 ? a2c[player] = 3 : aN.d0[player] < 1e4 ? a2c[player] = 2 : aN.d0[player] < 6e4 ? a2c[player] = 1 : a2c[player] = 0
	}
	this.aM = function() {
		aAc = aAd = 0, aAb = 6, a2a = 0, a2b = new Uint16Array(bO.b), a2c = new Uint8Array(bO.b)
	}, this.fx = function() {
		var cC;
		for (aAc = aS.cz[13], aAd = aN.dj[bO.g], cC = a2a - 1; 0 <= cC; cC--) 10 === a2c[a2b[cC]] ? aAf(a2b[cC]) : 0 == a2c[a2b[cC]]-- && (aAf(a2b[cC]), iB(a2b[cC]));
		16e4 <= aN.d0[a8m[0]] && (aAg(16e4), 3e5 <= aN.d0[a8m[0]]) && aAg(3e5), aN.d0[bO.g] > aS.cz[7] && (aS.cz[7] = aN.d0[bO.g]), aS.cz[14] += aAd - aN.dj[bO.g] + aAc - aS.cz[13]
	}, this.hD = function(player) {
		for (var dv, cC = a2a - 1; 0 <= cC; cC--)
			if (player === a2b[cC]) {
				for (a2a--, dv = cC; dv < a2a; dv++) a2b[dv] = a2b[dv + 1];
				return
			}
	}, this.de = function(player, aAi) {
		for (var cC = a2a - 1; 0 <= cC; cC--)
			if (player === a2b[cC]) return;
		a2b[a2a++] = player, a2c[player] = aAi ? 2 : 10
	}
}

function tP() {
	this.jn = function(qE) {
		return 0 === qE ? 1 === bO.p && bO.s : 1 === qE ? 1 === bO.p && !bO.s : 2 === bO.p
	}, this.gw = function(player) {
		return 0 !== aN.bN[player] && 2 !== aN.jN[player]
	}, this.jt = function(a39, a3A) {
		return a39 !== a3A
	}, this.lX = function(player, lV) {
		return lV = this.aAj(player, lV), aN.dj[player] += lV, lV
	}, this.aAj = function(player, lV) {
		var cj = aN.dj[player];
		return lV = Math.min(lV, aN.d0[player] * bO.m - cj), lV = Math.min(lV, bO.c - cj), Math.max(lV, 0)
	}, this.ju = function(player, js, aAk, aAl) {
		var cj = aN.dj[player],
			js = kL.lk(cj * (js + 1), 1024),
			aAk = kL.lk(aAk * cj, 1024),
			js = Math.min(js, cj - aAk);
		return 10 === bO.w && (js = b9.aAn(player, js)), dS.dd[0] = js, dS.dd[1] = aAk, aAl <= js
	}, this.k2 = function(player, jz, k0) {
		var player = aN.dj[player],
			aAm = kL.lk(64 * player, 1024);
		return jz = Math.min(jz, player - aAm), aAm += player = this.aAp(jz), jz = this.aAj(k0, jz -= player), dS.dd[0] = jz, dS.dd[1] = aAm, 1 <= jz
	}, this.aAq = function(jz, k0) {
		var aAo = this.aAp(jz);
		return jz = this.aAj(k0, jz -= aAo), dS.dd[0] = jz, dS.dd[1] = aAo, 1 <= jz
	}, this.k3 = function(player, aAr) {
		return kL.lk(aN.dj[player] * (aAr + 1), 1024)
	}, this.aAp = function(aAs) {
		return kL.lk(Math.max(2142 - bE.dK(), 0) * aAs, 2142)
	}, this.kG = function(player, aAk) {
		aN.dj[player] -= kL.lk(aAk * aN.dj[player], 1024)
	}, this.jx = function(player) {
		aN.dj[player] -= dS.dd[0] + dS.dd[1]
	}, this.jv = function(player, dg) {
		return (dg = Math.min(dg, bO.b)) < bO.b && 0 === aN.bN[dg] && (dg = bO.b), (dS.dT[0] = dg) === bO.b || e1(player, dg)
	}, this.k1 = function(player, k0) {
		return 0 !== aN.bN[k0] && !e1(player, k0)
	}
}

function ho() {
	var a7W;
	this.aAL = [], this.a7W = document.createElement("div"), this.hp = function(f8, marginTop) {
		var title = document.createElement("h2");
		title.textContent = f8, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.a7W.appendChild(title)
	}, this.hq = function(f8) {
		var aAt = document.createElement("p");
		return aAt.textContent = f8, aAt.style.fontSize = "0.75em", aAt.style.lineHeight = "1.2em", aAt.style.marginBottom = "0", this.a7W.appendChild(aAt), aAt
	}, this.aAu = function(p3, fontSize) {
		var a7W = document.createElement("div");
		a7W.innerHTML = p3, a7W.style.fontSize = fontSize || "1em", a7W.style.lineHeight = "1.2em", this.a7W.appendChild(a7W)
	}, this.hs = function(aAv) {
		for (var ta = aAv.ta, cx = ta.length, cC = 0; cC < cx; cC++) this.a7W.appendChild(ta[cC])
	}, this.hu = function(tK) {
		this.aAL.push(tK), this.a7W.appendChild(tK.dB)
	}, this.resize = function() {
		for (var cx = this.aAL.length, cC = 0; cC < cx; cC++) this.aAL[cC].resize && this.aAL[cC].resize()
	}, (a7W = this.a7W).style.position = "absolute", a7W.style.height = "auto", a7W.style.padding = "0.5em"
}

function aAw() {
	this.aAx = new lc, this.a2s = new n6
}

function aAy() {
	var ex, kp, aAz, font, ps = 0,
		aB0 = !1,
		aB1 = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aB2 = 5;

	function cZ() {
		if (aB0) {
			var cC, cx = aB1.length,
				bm = Math.floor(.5 * aAz.bh),
				bh = cx * bm,
				ca = Math.floor(Math.floor(aAz.ca) + .3 * aAz.bg - .5),
				cb = Math.floor(Math.floor(aAz.cb) - bh),
				bg = Math.floor(.4 * aAz.bg + 2.5);
			for (cc.fillStyle = cd.mL, cc.fillRect(ca, cb, bg, bh), cc.fillStyle = cd.a9n, cc.fillRect(ca, cb + aB2 * bm, bg, bm), cc.fillStyle = cd.co, cc.fillRect(ca, cb, 2, bh), cc.fillRect(ca, cb, bg, 2), cc.fillRect(ca + bg - 2, cb, 2, bh), cC =
				1; cC < cx; cC++) cc.fillRect(ca, cb + cC * bm, bg, 2);
			for (cc.fillStyle = cd.co, cR.cU.textAlign(cc, 1), cR.cU.textBaseline(cc, 1), cc.font = cR.cU.cV(0, .6 * bm), ca += .5 * bg, cC = 0; cC < cx; cC++) cc.fillText(aBF(cC), ca, cb + (cC + .6) * bm)
		}
		cc.drawImage(ex, Math.floor(aAz.ca), Math.floor(aAz.cb))
	}

	function cX(w3) {
		var ca, dM, dN, bm;
		kp.clearRect(0, 0, Math.floor(aAz.bg), Math.floor(aAz.bh)), kp.fillStyle = cd.mL, kp.fillRect(0, 0, Math.floor(aAz.bg), Math.floor(aAz.bh)), bO.r && (kp.fillStyle = cd.a9n, kp.fillRect(0, 0, Math.floor(.3 * aAz.bg), Math.floor(aAz.bh))), kp
			.fillStyle = cd.co, kp.fillText("Hide UI", .15 * aAz.bg, .5 * aAz.bh), kp.fillRect(Math.floor(.3 * aAz.bg - .5), 0, 2, Math.floor(aAz.bh)), ca = .5 * aAz.bg, kp.fillText("Replay Speed", ca, .31 * aAz.bh), kp.fillText(aBF(aB2), ca, .69 *
				aAz.bh), kp.fillRect(Math.floor(.7 * aAz.bg - .5), 0, 2, Math.floor(aAz.bh)), w3.bd ? (ca = Math.floor(.02 * aAz.bg), w3 = Math.floor(.025 * aAz.bg), dM = Math.floor(.85 * aAz.bg - ca - .5 * w3), dN = Math.floor(.25 * aAz.bh), bm =
				Math.floor(aAz.bh) - 2 * dN, kp.fillRect(dM, dN, ca, bm), kp.fillRect(dM + ca + w3, dN, ca, bm)) : function() {
				var bg = Math.floor(.46 * aAz.bh),
					bh = Math.floor(.23 * aAz.bh),
					ca = Math.floor(.85 * aAz.bg - .5 * bg + bg / 12),
					cb = Math.floor(.5 * aAz.bh - bh);
				kp.beginPath(), kp.moveTo(ca, cb), kp.lineTo(ca + bg, cb + bh), kp.lineTo(ca, cb + (bh << 1)), kp.fill()
			}(), kp.fillRect(0, 0, Math.floor(aAz.bg), 2), kp.fillRect(0, 0, 2, Math.floor(aAz.bh)), kp.fillRect(0, Math.floor(aAz.bh) - 2, Math.floor(aAz.bg), 2), kp.fillRect(Math.floor(aAz.bg - 2), 0, 2, Math.floor(aAz.bh))
	}

	function aBF(cC) {
		return 5 === cC ? "Normal" : "" + aB1[cC]
	}
	this.bd = !1, this.aM = function() {
		bO.o && (aB2 = 5, this.bd = !1, aB0 = !1, aAz = new mY([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.nH = function() {
		return aB1[aB2]
	}, this.hN = function() {
		return aAz.cb
	}, this.a1a = function(a4D) {
		return !!bO.o && aAz.ca + aAz.bg > c0.bg - a4D - c3.gap
	}, this.resize = function() {
		bO.o && (aAz.resize(), aAz.cb -= (a1b.tY() - 1) * c3.gap, font = cR.cU.cV(0, .3 * aAz.bh), (ex = document.createElement("canvas")).width = Math.floor(aAz.bg), ex.height = Math.floor(aAz.bh), (kp = ex.getContext("2d", {
			alpha: !0
		})).font = font, cR.cU.textAlign(kp, 1), cR.cU.textBaseline(kp, 1), cX(this))
	}, this.a7P = function(aB3) {
		0 === bO.p || bZ.bv() || aB3 !== bO.r && (bO.r = aB3, aj.resize(), bE.bI = !0, bO.o) && (ps = bE.dH + 2e3, cX(this))
	}, this.c5 = function(ca, cb) {
		if (!bO.o) return !1;
		if (ca < aAz.ca || cb < aAz.cb || ca > aAz.ca + aAz.bg) return aB0 && function(w3, ca, cb) {
			var cx = aB1.length,
				bm = Math.floor(.5 * aAz.bh),
				bh = cx * bm,
				dM = Math.floor(Math.floor(aAz.ca) + .3 * aAz.bg - .5),
				bh = Math.floor(Math.floor(aAz.cb) - bh),
				bg = Math.floor(.4 * aAz.bg + 2.5);
			return aB0 = !1, bE.bI = !0, ca < dM || dM + bg < ca || cb < bh || (aB2 = aA7(0, Math.floor((cb - bh) / bm), cx - 1), cX(w3)), !0
		}(this, ca, cb);
		if ((ca -= aAz.ca) < .3 * aAz.bg) aB0 = !1, this.a7P(!bO.r);
		else {
			if (ca < .7 * aAz.bg) return aB0 = !aB0, bE.bI = !0;
			this.a7Q(!1)
		}
		return !0
	}, this.a7Q = function(aB5) {
		2 === bO.p ? (this.a7P(!1), bZ.ba(3)) : (aB0 = !1, this.bd = !this.bd, this.bd ? (ax.bc && ax.cP(), bJ.bK.setState(1)) : aB5 || ax.aB6(), bE.bI = !0, cX(this))
	}, this.a7R = function() {
		this.bd = !1, ax.aB6(), bE.bI = !0, cX(this)
	}, this.a7G = function(ca, cb) {
		return !!bO.r && (ax.c5(ca, cb) || (bO.o ? ((bE.dH > ps || !this.c5(ca, cb)) && aq.c5(ca, cb), bE.bI = !0, ps = bE.dH + 2e3) : aq.c5(ca, cb)), !0)
	}, this.fx = function() {
		bO.o && bO.r && bE.dH > ps - 1e3 && bE.dH < ps && (bE.bI = !0)
	}, this.aB7 = function() {
		bO.o && (this.bd = !1, bE.bI = !0, cX(this))
	}, this.cY = function() {
		if (bO.o) {
			if (bO.r) {
				if (bE.dH > ps) return;
				if (bE.dH > ps - 1e3) return cc.globalAlpha = aA7(0, (1e3 - (bE.dH - (ps - 1e3))) / 1e3, 1), cZ(), void(cc.globalAlpha = 1)
			}
			cZ()
		}
	}
}

function aBG() {
	this.aBH = function(g1) {
		var aBI = gR.kT(3),
			aBJ = a2r.aAx.fx(gR.kT(16), gR.kT(20));
		bS.eb.aBK(g1, aBJ, aBI), 0 < aBI || (0 === g1 && 0 === fa.hr.data[105].value.length ? bS.eb.aBL(0) : bS.aBM.yZ(g1), 4 === bS.bT.fv(g1).aBN() ? 6 === bY.gB() && bS.oN.ls(g1) : 5 !== bS.bT.fv(g1).aBN() || 8 !== bY.gB() && 10 !== bY.gB() ||
			bS.fz.aBO())
	}, this.aBP = function() {
		var id = gR.kT(6);
		0 === id ? (xa.a4g || bS.eb.aBL(1), 8 === bZ.fS && bZ.fT().aBQ()) : 21 === id ? 8 === bZ.fS && bZ.fT().aBR(17) : 22 === id && (fa.fb.fc(106, fa.hr.data[110].value), fa.fb.fc(110, ""), 8 === bZ.fS) && bZ.fT().aBR(15)
	}
}

function cA(dv, e6) {
	return Math.floor(dv / e6 + 1 / (2 * e6))
}

function a6m(dv, e6) {
	return 0 <= dv ? cA(dv, e6) : -cA(-dv, e6)
}

function eO(lV) {
	return lV * lV
}

function rx(dv, e6) {
	return e6 < dv ? dv : e6
}

function wm(dv, e6) {
	return dv < e6 ? dv : e6
}

function aA7(dv, lV, e6) {
	return lV < dv ? dv : e6 < lV ? e6 : lV
}

function aBS(lV, cx) {
	for (var gk = cA(lV + 1, 2), cC = 0; cC < cx; cC++) gk = cA(gk + cA(lV, gk), 2);
	return gk
}

function lK(lV, cx) {
	return lV < 1 ? 0 : aBS(lV, cx)
}

function aBT(dM, dN, bi, bm, dO, dP, bj, bn) {
	return !(dM + bi <= dO || dN + bm <= dP || dO + bj <= dM || dP + bn <= dN)
}

function aBU(dM, dN, bi, bm, dO, dP, bj, bn) {
	return dM <= dO && dN <= dP && dO + bj <= dM + bi && dP + bn <= dN + bm
}

function aBV(lV) {
	return Math.floor(!!lV * (1 + Math.log2(lV + .5)))
}

function aBW() {
	var aBX;

	function aBk(gp, bz, ca, cb, globalAlpha) {
		cJ.sE.save(), cJ.sE.globalAlpha = globalAlpha, cJ.sE.imageSmoothingEnabled = !1, cJ.sE.scale(bz, bz), cJ.sE.drawImage(gp, Math.floor(ca * (cJ.cK / bz - gp.width)), Math.floor(cb * (cJ.cL / bz - gp.height))), cJ.sE.restore()
	}
	this.a2G = 0, this.a2H = 0, this.a2J = 0, this.a2K = 0, this.aM = function() {
		(aBX = new Array(cJ.q5))[0] = {
			bg: [0, 5e3, 8e3, 1e4],
			gu: [220, 250, 255, 220],
			mj: [190, 220, 0, 0],
			e6: [170, 200, 0, 0]
		}, aBX[1] = {
			bg: [0, 4e3, 5e3, 6e3, 1e4],
			gu: [25, 0, 100, 0, 25],
			mj: [25, 0, 0, 0, 25],
			e6: [25, 0, 0, 0, 25]
		}, aBX[2] = {
			bg: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			gu: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			mj: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			e6: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aBX[3] = {
			bg: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			gu: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			mj: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			e6: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, aBX[4] = {
			bg: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			gu: [10, 10, 20, 10, 10, 170, 212],
			mj: [20, 20, 60, 100, 100, 110, 170],
			e6: [70, 70, 160, 30, 30, 60, 120]
		}, aBX[5] = {
			bg: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			gu: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			mj: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			e6: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aBX[6] = {
			bg: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			gu: [10, 10, 60, 255, 255, 200, 200],
			mj: [10, 10, 60, 255, 255, 200, 200],
			e6: [80, 80, 255, 255, 255, 200, 200]
		}, aBX[7] = {
			bg: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			gu: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			mj: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			e6: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aBX[8] = {
			bg: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			gu: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			mj: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			e6: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aBX[9] = {
			bg: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			gu: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			mj: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			e6: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aBX[20] = {
			bg: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			gu: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			mj: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			e6: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}
	}, this.aBY = function() {
		var aBj, cC, dv, dC, gr = function() {
				var gr;
				return cJ.sD = document.createElement("canvas"), cJ.sD.width = cJ.cK, cJ.sD.height = cJ.cL, cJ.sE = cJ.sD.getContext("2d", {
					alpha: !1
				}), gr = cJ.sE.getImageData(0, 0, cJ.cK, cJ.cL), cJ.sG = gr.data, gr
			}(),
			bg = aBX[cJ.kw].bg,
			gu = aBX[cJ.kw].gu,
			mj = aBX[cJ.kw].mj,
			e6 = aBX[cJ.kw].e6,
			lV = sn.sr(),
			cx = bg.length - 2,
			aBe = new Array(1 + cx),
			aBf = new Array(1 + cx),
			aBg = new Array(1 + cx),
			aBh = new Array(1 + cx);
		for (dv = cx; 0 <= dv; dv--) aBe[dv] = bg[dv + 1] - bg[dv], aBf[dv] = gu[dv + 1] - gu[dv], aBg[dv] = mj[dv + 1] - mj[dv], aBh[dv] = e6[dv + 1] - e6[dv];
		for (cC = cJ.cK * cJ.cL - 1; 0 <= cC; cC--)
			for (dv = cx; 0 <= dv; dv--)
				if (lV[cC] >= bg[dv]) {
					dC = lV[cC] - bg[dv], cJ.sG[4 * cC] = gu[dv] + a6m(aBf[dv] * dC, aBe[dv]), cJ.sG[4 * cC + 1] = mj[dv] + a6m(aBg[dv] * dC, aBe[dv]), cJ.sG[4 * cC + 2] = e6[dv] + a6m(aBh[dv] * dC, aBe[dv]), cJ.sG[4 * cC + 3] = 255;
					break
				} cJ.sE.putImageData(gr, 0, 0), cJ.aBb(cJ.kw) && gc.f2() && cJ.aBb(cJ.kw) && (gr = gc.f1("arena"), aBj = gc.f1("territorial.io"), aBk(gr, 5, .5, .5, .1), aBk(aBj, 2, .5, .45, .1)), cJ.aBd = !0, bE.bI = !0
	}, this.aV = function() {
		for (var en, ca, cb, aBl, aBm, dD, a2H = 0, bg = cJ.cK, bh = cJ.cL, dC = bg * bh * 4, aBn = yN, aBo = cJ.sG, cC = bg - 1; 0 <= cC; cC--) aBn[(en = cC << 2) + 2] = aBn[dC - en - 2] = 3;
		for (dC = 4 * bg, cC = bh - 1; 0 <= cC; cC--) aBn[(en = cC * dC) + 2] = aBn[en + dC - 2] = 3;
		for (aBl = bg - 1, aBm = bh - 1, cb = 1; cb < aBm; cb++)
			for (dC = cb * bg, ca = 1; ca < aBl; ca++) dD = 1 - (aBo[(en = dC + ca << 2) + 2] > aBo[en + 1] && aBo[en + 2] > aBo[en]), aBn[en + 2] = 2 - dD, a2H += dD;
		this.a2G = (bg - 2) * (bh - 2), this.a2K = 0, cJ.aBp(cJ.kw) && function() {
			var en, ca, cb, dC, aBn = yN,
				aBo = cJ.sG,
				bg = cJ.cK,
				aBl = bg - 1,
				aBm = cJ.cL - 1,
				pZ = 0;
			for (cb = 1; cb < aBm; cb++)
				for (dC = cb * bg, ca = 1; ca < aBl; ca++) aBo[en = dC + ca << 2] === aBo[1 + en] && aBo[en] === aBo[2 + en] && (pZ++, aBn[2 + en] = 3);
			aU.a2K = pZ
		}(), this.a2H = bO.q = a2H - this.a2K, this.a2J = this.a2G - this.a2H - this.a2K
	}
}

function aBr() {
	this.g9 = function(g1) {
		eV.af(39), eV.eW(1, 0), eV.eW(6, 13), eV.eW(14, aBv.wQ), eV.eW(4, bJ.id), eV.eW(7, bJ.im), eV.eW(1, +wN), eV.eW(1, +wO), eV.eW(5, (new Date).getHours() % 24), bS.bT.send(g1, eV.eX)
	}, this.aBK = function(g1, aBJ, aBI) {
		eV.af(26), eV.eW(1, 0), eV.eW(6, 14), eV.eW(3, aBI), eV.eW(16, aBJ), bS.bT.send(g1, eV.eX)
	}, this.aBL = function(id) {
		eV.af(13), eV.eW(1, 0), eV.eW(6, 15), eV.eW(6, id), bS.bT.send(0, eV.eX)
	}, this.aBs = function(aBt, tK) {
		eV.af(7 + 26 * tK.length), eV.eW(1, 0), eV.eW(6, 9);
		for (var cC = 0; cC < tK.length; cC++) eV.eW(16, tK[cC][0]), eV.eW(10, tK[cC][1]);
		bS.bT.send(aBt, eV.eX)
	}, this.a4M = function(aBu, yu) {
		eV.af(20), eV.eW(1, 0), eV.eW(6, 19), eV.eW(1, aBu), eV.eW(12, yu), bS.bT.send(bS.bT.eu, eV.eX)
	}, this.ec = function(username) {
		eV.eW(5, username.length), eh.ei.ej(username)
	}
}

function us() {
	this.dH = bE.dH, this.bt = 0, this.nG = 0, this.gW = 0, this.aBw = null, this.aBx = 7, this.aBy = 0, this.aM = function() {
		this.gW = 0, this.aBw = [], this.bt = 0, this.nG = 0
	}, this.aBz = function(eX) {
		var cC;
		if (bO.s) this.nU(eX);
		else if (this.aBw.push(eX), 2 === bO.p) {
			for (cC = 0; cC < this.aBw.length; cC++) aO.aP.fx(this.aBw[cC]);
			this.aBw = []
		}
	}, this.nU = function(eX) {
		aO.aP.fx(eX), ai.fx(), aw.nU(this.gW), this.gW === bO.a0 ? (bO.y.fx(), this.gW = 0, this.bt = 0, this.nG = 0, this.dH = bE.dH) : (this.gW++, b8.nV(), b8.bP(!0), aW.nP())
	}, this.fx = function() {
		c0.fx(), bO.s ? (bE.bI = aw.nU(-1) || bE.bI, nW()) : (0 !== this.bt || bE.dH >= this.dH && (this.dH += bE.dI * Math.floor(1 + (bE.dH - this.dH) / bE.dI), 2 === bO.p ? nN() : this.aC0(), this.bt++, 27 < bE.dH - this.aBy)) && this.aC1(),
			nK(), bE.bI && (bE.bI = !1, nL()), this.aBy = bE.dH
	}, this.aC1 = function() {
		bE.bI = !0, nX(), this.bt = 0
	}, this.aC0 = function() {
		var aC2, cC;
		if (this.nG !== 7 * this.gW) nT(), aW.nP();
		else {
			for (aC2 = !1; this.aC3() && (aC2 = !0, nT(), 0 < this.aBw.length);)
				for (cC = this.aBx - 2; 0 <= cC; cC--) nT();
			aC2 ? aW.nP() : (nN(), aW.nv())
		}
	}, this.aC3 = function() {
		return 0 < this.aBw.length && (this.gW++, aO.aP.fx(this.aBw[0]), this.aBw.shift(), !0)
	}
}

function a6s() {
	this.nA = 0, this.ep = null;
	var aC4 = this.es = 0;
	this.aC5 = 0, this.aC6 = function() {
		0 !== aN.bN[bO.g] && aZ.n9(bO.g) && 2 === bO.a1 && (bO.a2 = 2)
	}, this.aC7 = function() {
		var iU, cN;
		this.ep = eq.jV.v1(), this.nA = a2r.a2s.n7(), bO.w < 7 && 2 !== bO.a1 ? this.es = aj.a8l() : this.es = eq.jV.v2(), 8 === bO.w && 1 === bO.a1 ? (iU = 1 - bO.a3, cN = aN.d0[iU], aN.d0[iU] = 0, aO.gv.em(), aN.d0[iU] = cN) : aO.gv.em(), aC4 =
			.01 * aN.et[bO.g] / 50, this.aC5 = 0, bO.w < 7 ? eq.a6q.aC7(this.ep) : 7 === bO.w || 10 === bO.w ? cR.gv.gw(bO.g) && (iU = eq.result.nA * (1 + bO.x), 2 === bO.a1 ? eq.result.aC5 += iU * aN.d0[bO.g] / eq.result.es : a8m[0] === bO.g &&
				(eq.result.aC5 += iU)) : 8 !== bO.w || 1 !== bO.a2 || 0 === fa.hr.data[107].value || 100 <= (cN = fa.hr.data[108].value) || (eq.result.aC5 += .01 * (100 - cN) * 10)
	}, this.aCC = function() {
		0 !== aC4 && 0 !== eq.result.aC5 && az.a1d(0, "🏆 You earned prize money of 🧈 " + eq.result.aC5.toFixed(2) + ".", 40, 0, cd.co, cd.ce, -1, !1)
	}
}

function aCD() {
	function aCE(cC, title, type, pM, aCI, im) {
		fa.hr.data.push({
			bt: cC,
			title: title,
			type: type || 0,
			pM: pM,
			value: aCI || 0,
			aCI: aCI || 0,
			im: im || 0
		})
	}

	function aCF(cC, title, type, pM, aCI, im) {
		fa.hr.data.push({
			bt: cC,
			title: title,
			type: type,
			pM: pM,
			value: aCI || "",
			aCI: aCI || "",
			im: im || 0
		})
	}

	function aCG(h3) {
		for (var cC = fa.hr.data.length; cC < h3; cC++) fa.hr.data.push(null)
	}
	this.data = [], this.aM = function() {
		aCE(0, "", 1, ["English", "Русский", "Türkçe", "Española", "Deutsch", "Polski"], 0, 5), aCE(1, "", 1, null, 1), aCE(2, "", 0, [0, 1]), aCF(3, "Username", 2), aCE(4, "Font5", 1, ["Default", "Custom"]), aCF(5, "", 2, null, "Trebuchet MS",
				1), aCE(6, "", 0, [0, 1]), aCE(7, "", 0, [0, 1], 0), aCE(8, "", 0, [0, 1]), aCE(9, "", 1, null, 1), aCE(10, "", 1, null), aCE(11, "", 1, null, 1), aCG(100), aCF(100, "Username", 2), aCF(101, "Password", 2), aCF(102, "Emojis", 2),
			aCF(103, "Colors", 2), aCF(104, "Clan", 2), aCF(105, "AccountName", 2), aCF(106, "Password", 2), aCE(107), aCE(108), aCE(109), aCF(110, null, 2), aCE(111), aCE(112), aCE(113), aCF(114, null, 2), aCE(115), aCF(116, null, 2), aCE(117,
				null, 1), aCF(118, null, 2, null, "", 2), aCE(119, null, 1, null, 0, 1), aCF(120, null, 2), aCE(121, "CountryColor", 1, null, ~~(262144 * Math.random())), aCF(122, "Username", 2), aCE(123), aCF(124), aCE(125, null, 1, ["M1", "M5",
				"H1", "H4", "D1", "W1", "MN"
			]), aCF(126, null, 2), aCE(127, "Y-Axis Compression", 0, [0, 1], 1), aCE(128), aCE(129), aCE(130), aCE(131), aCE(132), aCF(133, null, 2), aCE(134, null, 0, null, 5), aCF(135, null, 2), aCF(136, null, 2), aCE(137), aCE(138), aCE(139),
			aCE(140), aCE(141), aCE(142), aCE(143), aCE(144), aCG(180), aCE(180, "R0", 0), aCE(181, "R1", 0)
	}, this.translate = function() {
		this.data[0].title = "🌐 " + he.hf[101], this.data[1].title = he.hf[102], this.data[2].title = he.hf[103], this.data[5].title = he.hf[104], this.data[6].title = he.hf[105], this.data[7].title = he.hf[106], this.data[8].title = he.hf[107],
			this.data[9].title = he.hf[108], this.data[10].title = he.hf[109], this.data[11].title = he.hf[110], this.data[1].pM = [he.hf[111], he.hf[112], he.hf[113], he.hf[114]], this.data[9].pM = [he.hf[112], he.hf[115], he.hf[116]], this
			.data[10].pM = [he.hf[109] + " 1", he.hf[117] + " 1", he.hf[109] + " 2", he.hf[117] + " 2"], this.data[11].pM = [he.hf[118], he.hf[119], he.hf[120]]
	}, this.fc = function(bt, value) {
		this.data[bt].value = value
	}, this.a5V = function(bt, value) {
		this.fc(bt, value), fa.hy.save(bt, String(value)), fa.hy.save(bt, String(this.data[bt].im), !0)
	}, this.aCH = function() {
		for (var cC = 0; cC < this.data.length; cC++) this.data[cC] && (fa.hy.save(cC, String(this.data[cC].value)), fa.hy.save(cC, String(this.data[cC].im), !0))
	}, this.a5W = function(bt) {
		return Number(this.data[bt].value)
	}, this.a5S = function(bt) {
		return String(this.data[bt].value)
	}
}

function aCJ() {
	this.aCK = function() {
		fa.bT.aCL(), fa.fb.fc(105, eh.te.a7e(eh.te.a7b(5))), fa.fb.fc(106, eh.te.a7e(eh.te.a7b(8))), fa.fb.fc(109, gR.kT(30)), fa.fb.fc(108, fa.hr.data[109].value), fa.fb.fc(111, fa.hr.data[109].value + 1), fa.fb.fc(107, 0), fa.fb.fc(110, "")
	}, this.aCM = function() {
		var aCN, aCO, aCP;
		gR.size < eV.rF(18) ? bS.bT.gE(0, 3254) : (aCN = gR.kT(5), aCO = gR.kT(3), aCP = gR.kT(3), gR.rD(186 + 16 * (aCN + aCO + aCP) + 32 + 32 + 30 + 128) ? (fa.fb.fc(109, gR.kT(30)), fa.fb.fc(107, gR.kT(16)), fa.fb.fc(108, gR.kT(30)), fa.fb.fc(
			112, gR.kT(30)), fa.fb.fc(111, gR.kT(30)), fa.fb.fc(113, gR.rB(32)), fa.fb.fc(122, yV.ei.n3(aCN)), fa.fb.fc(135, yV.ei.n3(aCO)), fa.fb.fc(136, yV.ei.n3(aCP)), fa.fb.fc(137, gR.rB(32)), fa.fb.fc(138, gR.rB(32)), fa.fb.fc(
			139, gR.kT(30)), fa.fb.fc(141, gR.rB(32)), fa.fb.fc(142, gR.rB(32)), fa.fb.fc(143, gR.rB(32)), fa.fb.fc(144, gR.rB(32)), 8 === bZ.fS && bZ.fT().aBR(16, !0)) : bS.bT.gE(0, 3267))
	}
}

function aCQ() {
	var aCR, aCS, aCT;
	aCR = [32, 65, 191, 913, 931], aCS = [64, 127, 688, 930, 1155], aCT = new Array(aCR.length + 1);
	for (var cC = 0; cC < aCT.length; cC++) {
		aCT[cC] = 0;
		for (var dv = cC - 1; 0 <= dv; dv--) aCT[cC] += aCS[dv] - aCR[dv]
	}

	function aCZ(gk) {
		for (var cC = aCR.length - 1; 0 <= cC; cC--)
			if (gk >= aCR[cC] && gk < aCS[cC]) return cC;
		return -1
	}
	this.n5 = function(f8) {
		return 0 !== (f8 = f8.trim()).indexOf("Bot ") && 0 !== f8.indexOf("[Bot] ") && function(f8, aCW, aCX) {
			var cx = (f8 = f8.trim()).length;
			if (cx < aCW || aCX < cx) return !1;
			for (var gk, aCY = 0, cC = 0; cC < cx; cC++)
				if (gk = f8.charCodeAt(cC), aCY += 65 <= gk && gk <= 90 || 1040 <= gk && gk <= 1071 ? 1 : 0, -1 === aCZ(gk)) return !1;
			if (3 < aCY && aCY > Math.floor(cx / 2)) return !1;
			return !0
		}(f8, 3, 20)
	}, this.ou = function(f8) {
		for (var cx = (f8 = f8.trim()).length, cr = [], cC = 0; cC < cx; cC++) {
			var gk, en = aCZ(gk = f8.charCodeAt(cC));
			cr.push(aCT[en] + gk - aCR[en])
		}
		return cr
	}, this.p0 = function(cr) {
		for (var gk, e6, f8 = "", cx = cr.length, cC = 0; cC < cx; cC++)
			for (e6 = 1; e6 < aCT.length; e6++)
				if (cr[cC] < aCT[e6]) {
					gk = aCR[e6 - 1] + cr[cC] - aCT[e6 - 1], f8 += String.fromCharCode(gk);
					break
				} return f8
	}, this.yw = function(f8) {
		for (var cr = this.ou(f8), result = "", cC = 0; cC < cr.length; cC++) result = (result += cr[cC] < 10 ? "00" : cr[cC] < 100 ? "0" : "") + cr[cC].toString(10);
		return result
	}, this.yz = function(f8) {
		for (var cr = new Array(Math.floor(f8.length / 3)), cC = 0; cC < f8.length; cC += 3) cr[Math.floor(cC / 3)] = parseInt(f8.substring(cC, cC + 3));
		return this.p0(cr)
	}, this.yx = function(f8) {
		for (var lV, cr = [f8.length], cC = 0; cC < f8.length; cC++) cr[cC] = f8.charCodeAt(cC) - 48;
		var result = "";
		for (cC = 0; cC < f8.length; cC++) cC === f8.length - 1 || 51 < 10 * cr[cC] + cr[cC + 1] ? result += cr[cC].toString() : (lV = 10 * cr[cC] + cr[cC + 1], result += String.fromCharCode(lV + (lV < 26 ? 65 : 71)), cC++);
		return result
	}, this.yy = function(f8) {
		for (var gk, result = "", cC = 0; cC < f8.length; cC++) 48 <= (gk = f8.charCodeAt(cC)) && gk < 58 ? result += String.fromCharCode(gk) : 65 <= gk && gk < 75 ? result += "0" + (gk - 65).toString() : 75 <= gk && gk < 91 ? result += (gk - 65)
			.toString() : 97 <= gk && gk < 123 && (result += (gk - 71).toString());
		return result
	}, this.aCa = function(f8) {
		for (var cx = f8.length, cr = [], cC = 0; cC < cx; cC++)(gk = f8.charCodeAt(cC)) < 58 ? cr.push(f8[cC]) : (gk -= gk < 91 ? 65 : 71, cr.push(String(cA(gk, 10))), cr.push(String(gk - 10 * cA(gk, 10))));
		var cx = cr.length - 2,
			gk = 0,
			a7d = [];
		for (cC = 0; cC < cx; cC += 3) a7d[gk++] = parseInt(cr[cC] + cr[cC + 1] + cr[cC + 2]);
		return a7d
	}, this.fr = function() {
		for (var gu, aCb = "", cC = 0; cC < 6; cC++) gu = 48 + aJ.random() % 36, gu += 58 <= gu ? 39 : 0, aCb += String.fromCharCode(gu);
		return aCb
	}
}

function aCc() {
	this.size = 501, this.ci = new Uint32Array(this.size), this.cj = new Uint32Array(this.size), this.cv = new Uint16Array(this.size), this.cQ = 0, this.aCd = 1, this.gk = 0, this.max = [0, 0, 0], this.cz = 0, this.cy = ["Avg. Attack Strength",
		"Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs",
		"Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses"
	], this.aM = function() {
		this.cQ = 0, this.aCd = 1, this.gk = 0, this.aCe(), this.aCf()
	}, this.jy = function(player, js) {
		player === bO.g && (this.cz[0] += js, this.cz[1]++, this.cz[12] += dS.dd[1], this.cz[13] += dS.dd[0])
	}, this.hG = function(player, k0) {
		donationsTracker.logDonation(player, k0, dS.dd[0]);
		player === bO.g && (az.hG(dS.dd[0], dS.dd[1], k0), this.cz[12] += dS.dd[1], this.cz[16] += dS.dd[0]), k0 === bO.g && (az.hH(dS.dd[0], player), this.cz[10] += dS.dd[0])
	}, this.fx = function() {
		0 < this.gk-- || this.aCg()
	}, this.aCg = function() {
		0 !== aN.bN[bO.g] && (this.ci[this.cQ] = aN.d0[bO.g], this.cj[this.cQ] = aN.dj[bO.g], this.cv[this.cQ] = aX.lO(bO.g), this.aCh(this.cQ), this.cQ++, this.cQ === this.size && this.aCi(), this.gk = this.aCd - 1, am.cX())
	}, this.aCi = function() {
		this.aCe(), this.aCh(0), this.cQ = 1 + cA(this.size, 2);
		for (var cC = 1; cC < this.cQ; cC++) this.ci[cC] = this.ci[2 * cC], this.cj[cC] = this.cj[2 * cC], this.cv[cC] = this.cv[2 * cC], this.aCh(cC);
		this.aCd *= 2
	}, this.aCe = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.aCf = function() {
		this.cz = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.aCh = function(cC) {
		this.max[0] = this.ci[cC] > this.max[0] ? this.ci[cC] : this.max[0], this.max[1] = this.cj[cC] > this.max[1] ? this.cj[cC] : this.max[1], this.max[2] = this.cv[cC] > this.max[2] ? this.cv[cC] : this.max[2]
	}
}

function ah() {
	for (kd = 0, cC = bO.b - 1; 0 <= cC; cC--) 0 !== aN.bN[cC] && kd++;
	lU = new Uint16Array(kd);
	for (var cx = 0, cC = 0; cC < bO.b; cC++) 0 !== aN.bN[cC] && (lU[cx++] = cC)
}

function wx() {
	aCj(), aCk()
}

function aCk() {
	for (var cC = kd - 1; 0 <= cC; cC--) 0 === aN.bN[lU[cC]] && aCl(cC)
}

function aCl(cC) {
	kd--;
	for (var dv = cC; dv < kd; dv++) lU[dv] = lU[dv + 1]
}

function aCj() {
	for (var cC = kd - 1; 0 <= cC; cC--) {
		var cN, en = lU[cC];
		aN.d0[en] <= cA(aN.jO[en], 4) ? aN.d0[en] <= 1e3 && (2 !== aN.bN[en] || 0 === aN.d0[en]) && a2m(en) : aN.d0[en] >= aN.jO[en] ? (cN = aN.d0[en], 250 <= (aN.jO[en] = cN) && (aN.jS[en] = 1)) : aN.jO[en] -= Math.max(1, cA(aN.jO[en] - aN.d0[en],
			1e3))
	}
}

function aCm() {
	for (var yu = 0, cC = kd - 1; 0 <= cC; cC--) yu += aN.dj[lU[cC]];
	return yu % 4096
}

function ip(v4, m0) {
	var a7W, cC;
	for (this.resize = function() {
			for (var cC = 0; cC < v4.length; cC++) cR.cU.m8(v4[cC].button);
			a7W.style.gap = a7W.style.padding = cR.cU.jC(c3.jD)
		}, (a7W = document.createElement("div")).style.display = "grid", a7W.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", a7W.style.overflowY = "auto", a7W.style.gridAutoRows = "5.3em", a7W.style.maxHeight = "100%", cC =
		0; cC < v4.length; cC++) v4[cC].button.style.fontSize = "1.2em", a7W.appendChild(v4[cC].button);
	m0.appendChild(a7W)
}
self.aiCommand746 = function(lV) {
	0 === lV ? wJ() : 1 !== lV || 1 !== bJ.id || bJ.im < 14 || wK.wL()
};
var aBv, bO, ad, b4, b5, b3, bL, ag, fq, b1, ax, az, xb, b0, ay, ar, aq, xa, av, ap, aw, b2, oT, qH, bY, aH, gc, aZ, yv, b7, aX, b8, aN, aIH, ae, fO, aU, sn, uZ, a2g, aa, a7F, bH, qL, aG9, au, wz, c0, aJ, aL, bS, bC, a6H, bA, b9, bB, a7L, aB, he, aO,
	ai, cR, cd, at, eV, eh, yV, gR, aIz, wK, iu, kL, ab, ac, dS, al, ak, eq, cJ, a7J, bZ, bW, vY, fM, aHj, qo, aW, c3, aS, am, bE, aR, aj, bJ, a2r, fa, a1b, gF, aJ0, a5s = [60, 74, 112, 200, 256, 512];

function aCn() {
	var ki, aCo, aCp, aCq, aCr, aCs;

	function aCz(cC) {
		ki[cC] = 1 + cA(aCr[cC] * aJ.random(), 10 * aJ.value(100))
	}
	this.aCt = ["Very Easy", "Easy", "Normal", "Hard", "Harder", "Very Hard"], this.aCu = [97, 95, 93, 90, 87, 84], this.r5 = [98, 95, 70, 40, 20, 0], this.aCv = [85, 70, 50, 30, 7, 3], this.r3 = [0, 0, 5, 25, 50, 90], this.dh = null, this.aM =
		function() {
			var cC, aCw;
			if (ki = new Uint8Array(bO.j), aCo = new Uint16Array(bO.j), aCp = new Uint16Array(bO.j), aCq = new Uint8Array(bO.j), this.dh = new Uint8Array(bO.j), aCr = new Uint16Array(bO.j), aCs = new Uint16Array(bO.j), aB.aC) {
				if (aB.aD.aCx)
					for (cC = bO.j - 1; 0 <= cC; cC--) this.dh[cC] = aB.aD.aCx[cC + 1]
			} else if (9 === bO.w) this.aCy();
			else if (bO.n)
				if (bO.u)
					for (cC = bO.j - 1; 0 <= cC; cC--) this.dh[cC] = aH.lW[aR.eo[cC + bO.h] - 1].c1;
				else
					for (cC = bO.j - 1; 0 <= cC; cC--) this.dh[cC] = aH.lW[0].c1;
			else
				for (aCw = 8 === bO.w ? 1 : 0, cC = bO.j - 1; 0 <= cC; cC--) this.dh[cC] = aCw;
			for (cC = bO.j - 1; 0 <= cC; cC--) this.dh[cC] <= 2 ? (aCq[cC] = 5, aCr[cC] = aCs[cC] = 1040, 0 === this.dh[cC] ? (aCo[cC] = 1e3, aCp[cC] = 1e3) : 1 === this.dh[cC] ? (aCo[cC] = 1e3, aCp[cC] = 920, aCr[cC] = aCs[cC] = 1100) : (aCo[cC] =
				825, aCp[cC] = 750)) : this.dh[cC] <= 4 ? (aCq[cC] = 1 + aJ.dz(20), 3 === this.dh[cC] ? (aCo[cC] = aCp[cC] = 500, aCr[cC] = aCs[cC] = 1e3) : (aCs[cC] = 250 + aJ.dz(1501), aCr[cC] = 500 + aJ.dz(501), aCo[cC] = 300 + aJ.dz(201),
				aCp[cC] = 100 + aJ.dz(201))) : (aCr[cC] = 1e3, aCs[cC] = 1e3, aCq[cC] = 35 + aJ.dz(16), aCo[cC] = 300 + aJ.dz(201), aCp[cC] = 50 + aJ.dz(101)), aCz(cC)
		}, this.aCy = function() {
			for (var cC, cu = 0, e6 = 0; e6 < 6; e6++) {
				for (cC = cu + aL.aD0[e6] - 1; cu <= cC; cC--) this.dh[cC] = e6;
				cu += aL.aD0[e6]
			}
		}, this.qv = function(aD1, value) {
			0 <= aD1 && (ki[aD1] = value)
		}, this.fx = function(aD1) {
			0 == --ki[aD1] && ! function(aD1) {
				! function(aD1) {
					aCr[aD1] !== aCs[aD1] && (aCr[aD1] += aCr[aD1] < aCs[aD1] ? 3 : -3);
					aCo[aD1] !== aCp[aD1] && (aCo[aD1] += aCo[aD1] < aCp[aD1] ? aCq[aD1] : -aCq[aD1], aCo[aD1] = (Math.abs(aCo[aD1] - aCp[aD1]) <= aCq[aD1] ? aCp : aCo)[aD1]);
					ki[aD1] = cA(aCr[aD1], 10)
				}(aD1);
				var player = aD1 + bO.h;
				qu(player, cA(aCo[aD1] * aN.dj[player], 1e3))
			}(aD1)
		}
}

function ir(id, fB) {
	var ha, p5;

	function aD6() {
		p5.a7X.innerHTML += "<br>New Connection..."
	}
	this.aD4 = !0, this.show = function() {
		ha.show(), this.resize(), 15 === id ? bS.bT.fu(0, id) ? this.aD5() : aD6() : 16 === id ? bS.bT.fu(0, id) ? bS.eb.aBL(2) : aD6() : 17 === id ? bS.bT.fu(0, id) ? bS.eb.aBL(3) : aD6() : 18 === id ? (bS.bT.close(0, 3253), bS.bT.fu(0, id),
			aD6()) : 20 === id ? bS.bT.fu(0, id) ? bS.aBM.yc(fB) : aD6() : 21 === id ? bS.bT.fu(0, id) ? bS.aD7.eR(fB.eS, fB.eT, fB.eU) : aD6() : 22 === id ? bS.bT.fu(0, id) ? bS.aD7.eY(fB.eS, fB.eZ, fB.ea) : aD6() : 23 === id ? bS.bT.fu(0,
			id) ? bS.aD7.ed(fB.ee, fB.ef) : aD6() : 24 === id && (bS.bT.fu(0, id) ? bS.aD7.ek(fB.ee, fB.eT, fB.eU) : aD6())
	}, this.aBQ = function() {
		15 === id ? this.aD5() : 16 === id ? bS.eb.aBL(2) : 17 === id ? bS.eb.aBL(3) : 18 === id ? bZ.ba(8, this.g2, new ir(16)) : 20 === id ? bS.aBM.yc(fB) : 21 === id ? bS.aD7.eR(fB.eS, fB.eT, fB.eU) : 22 === id ? bS.aD7.eY(fB.eS, fB.eZ, fB
			.ea) : 23 === id ? bS.aD7.ed(fB.ee, fB.ef) : 24 === id && bS.aD7.ek(fB.ee, fB.eT, fB.eU)
	}, this.aBR = function(code, zo, data) {
		!zo && code !== id || (15 === code || 16 === code ? bZ.ba(7, this.g2) : 17 === code ? (bS.bT.close(0, 3252), fa.bT.aD8(0), 0 < fa.hr.data[117].pM.length ? (zo = fa.bT.aD9(0), fa.fb.fc(105, zo.aDA), fa.fb.fc(106, zo.password), bZ.ba(8,
			this.g2, new ir(16))) : (fa.fb.fc(105, ""), bZ.bT.ii())) : 20 === code ? bZ.ba(7, this.g2) : 21 === code ? bZ.ba(10, 0, new aDB(data)) : 23 === code && bZ.ba(13, 0, new p7({
			data: data,
			ee: fB.ee
		})))
	}, this.aD5 = function() {
		eV.af(48), eV.eW(24, Math.floor(kL.pow(24) * Math.random())), eV.eW(24, Math.floor(kL.pow(24) * Math.random())), gR.aM(eV.eX), fa.fb.fc(110, eh.te.a7e(eh.te.a7b(8))), bS.aBM.yb()
	}, this.cB = function() {
		ha.cB()
	}, this.resize = function() {
		ha.resize(), p5.resize()
	}, this.hw = function(gk) {
		2 === gk && ha.hx[0].hy()
	}, ha = new hd("⏳ Connecting...", [new hg("❌ " + he.hf[92], function() {
		bZ.bT.ii()
	})]), p5 = new p6(ha.hm, "Find Server...")
}

function aDC() {
	var ca, cb, bh, xT, aDD, aDE, aDF, aDG, aDH, bg, a5D, aDI;
	this.bv = !1, this.aM = function(f8, aDJ) {
		if (1 === bJ.id && 13 <= bJ.im && bJ.im < 18) return aDJ ? void(a5D = f8) : a5D !== f8 ? void 0 : void bJ.mD.saveString(200, f8);
		aDJ && (a5D = f8, (aDI = document.createElement("a")).appendChild(document.createTextNode(a5D)), this.bv = !0, aDI.title = a5D, aDI.target = "_blank", aDI.href = a5D, aDI.style.textAlign = "center", aDI.style.color = cd.co, aDI.style
			.position = "absolute", aDI.style.padding = "0px", aDI.style.margin = "0px", this.resize(), document.body.appendChild(aDI), bE.bI = !0)
	}, this.cB = function() {
		return !(!this.bv || (document.body.removeChild(aDI), this.bv = !1))
	}, this.c5 = function(qa, qd) {
		return !!this.bv && ((qa < ca || qd < cb || ca + bg < qa || cb + bh < qd || ca + bg - xT < qa && qd < cb + xT) && (bE.bI = !0, this.bv = !1, document.body.removeChild(aDI)), !0)
	}, this.resize = function() {
		var kl, a0T;
		this.bv && (aDG = Math.floor(.8 * (bJ.bK.c2() ? c0.bg > c0.bh ? .6 : .55 : .4) * c0.ge), xT = Math.floor(.15 * aDG), aDD = Math.floor(.35 * xT), aDE = Math.floor(.5 * xT), aDF = Math.floor(2.5 * aDE), bh = xT + aDD + 3 * aDE, kl = cR.cU
			.cV(1, aDD / c0.ma), aDH = Math.floor(c0.ma * ay.measureText(a5D, kl)), a0T = bg = (aDG < aDH ? aDH : aDG) + 2 * aDF, bg = Math.min(bg, c0.bg - 2 * (bJ.bK.c2() ? 2 : 1) * c3.gap), kl = cR.cU.cV(1, bg / a0T * aDD / c0.ma), aDH =
			Math.floor(c0.ma * ay.measureText(a5D, kl)), ca = Math.floor((c0.bg - bg) / 2), cb = Math.floor((c0.bh - bh) / 2), aDI.style.font = kl, aDI.style.top = Math.floor((cb + 1.4 * aDE + xT) / c0.ma) + "px", aDI.style.left = Math.floor(
				(ca + (bg - aDH) / 2) / c0.ma) + "px")
	}, this.cY = function() {
		this.bv && (cc.fillStyle = cd.ce, cc.fillRect(ca, cb + xT, bg, bh - xT), cc.fillStyle = cd.aDK, cc.fillRect(ca, cb, bg, xT), cc.fillStyle = cd.co, cc.lineWidth = c3.mg, cc.strokeStyle = cd.co, cc.strokeRect(ca, cb, bg, bh), cc.fillRect(
				ca, cb + xT, bg, c3.mg), cc.font = cR.cU.cV(1, .48 * xT), cR.cU.textAlign(cc, 1), cR.cU.textBaseline(cc, 1), cc.fillText("You are leaving Territorial.io!", Math.floor(ca + (bg - .5 * xT) / 2), Math.floor(cb + .55 * xT)), ax
			.cn(Math.floor(ca + bg - .8 * xT), Math.floor(cb + .25 * xT), Math.floor(.5 * xT)), cc.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function tQ() {
	this.cT = function(lV) {
		var cC, aDL, aDM, aDN, aDO;
		if (lV < 0) return "-" + this.cT(Math.abs(lV));
		if (lV < 1e3) return lV.toString();
		for (aDL = Math.floor(Math.log(lV + .5) / Math.log(10)) + 1, aDM = Math.floor((aDL - 1) / 3), aDO = (aDN = lV.toString()).substring(aDL - 3, aDL), cC = 1; cC < aDM; cC++) aDO = aDN.substring(aDL - 3 * (cC + 1), aDL - 3 * cC) + " " + aDO;
		return aDN.substring(0, aDL - 3 * aDM) + " " + aDO
	}, this.cW = function(en, aDL) {
		return en.toFixed(aDL) + "%"
	}, this.aDP = function(lV, aDQ) {
		return lV.toFixed(kL.kM(Math.floor((void 0 === aDQ ? 3 : aDQ) - Math.log10(Math.max(lV, 1))), 0, 8))
	}, this.aDR = function(lV, gd, aDL) {
		return (lV * gd).toFixed(aDL)
	}, this.aDS = function(username) {
		var a3X, a3l = username.indexOf("[");
		return !(a3l < 0) && 1 < (a3X = username.indexOf("]")) - a3l && a3X - a3l <= 8 ? username.substring(a3l + 1, a3X).toUpperCase().trim() : null
	}, leaderboardFilter.parseClanFromPlayerName = this.aDS;
	this.a1g = function(f8) {
		for (var dv = Math.floor(.5 * f8.length + .5), h3 = Math.floor(.5 * (dv - 1)), cC = 0; cC < h3; cC++)
			for (var e6 = -1; e6 < 2; e6 += 2) {
				var gk = dv + e6 * cC;
				if (" " === f8[gk]) return [this.aDT(f8.substring(0, gk)), this.aDU(f8.substring(gk))]
			}
		return [f8.substring(0, dv), f8.substring(dv)]
	}, this.aDU = function(f8) {
		for (var cx = f8.length, cC = 0; cC < cx; cC++)
			if (" " !== f8[cC]) return f8.substring(cC);
		return f8
	}, this.aDT = function(f8) {
		for (var cC = f8.length - 1; 0 <= cC; cC--)
			if (" " !== f8[cC]) return f8.substring(0, cC + 1);
		return f8
	}, this.tD = function(f8, tC) {
		return f8.split("(")[0] + "(🧈 " + tC.toFixed(2) + ")"
	}, this.startsWith = function(f8, aDV) {
		return f8.substring(0, aDV.length) === aDV
	}
}

function xI() {
	var aDZ, cC, m2 = document.createElement("div"),
		aDW = document.createElement("div"),
		aDX = document.createElement("div"),
		aDY = document.createElement("div"),
		v4 = [],
		a5A = ["Best 1v1 Player", "Top Clan", "Leading Clan Member"],
		aDa = [1, 0, 2];

	function aDb(cC) {
		bZ.ba(8, bZ.fT().g2, new ir(21, {
			eS: aDa[cC],
			eT: 0,
			eU: 9
		}))
	}
	for (this.show = function() {
			this.fc(bZ.bT.aDd), document.body.appendChild(m2)
		}, this.cB = function() {
			document.body.removeChild(m2)
		}, this.fc = function(aDd) {
			for (var cC = 0; cC < v4.length; cC++) v4[aDa[cC]].button.innerHTML = a5A[cC] + "<br>" + aDd[cC]
		}, this.resize = function() {
			var cC, mj = c3.gap,
				bh = cR.cU.pV(.085),
				bg = Math.min(4 * bh, c0.bg - 2 * mj),
				cx = v4.length;
			for (cR.cU.xX(m2, mj, c0.bh - mj - bh, bg, bh), cR.cU.m8(m2), cR.cU.m8(aDW, 6), cC = 0; cC < cx - 1; cC++) cR.cU.m8(v4[cC].button, 6);
			for (cC = 0; cC < cx; cC++) v4[cC].button.style.fontSize = cR.cU.a58(.22 * bh);
			if (!aDZ) {
				if (!gc.f2()) return;
				(aDZ = gc.get(14)).style.width = "24%", aDZ.style.position = "absolute", aDW.appendChild(aDZ)
			}
			aDZ.style.left = cR.cU.jC(0), aDZ.style.top = "7%"
		}, m2.style.position = "absolute", aDW.style.width = "25%", aDW.style.height = "100%", aDW.style.backgroundColor = cd.mL, aDX.style.position = "absolute", aDX.style.width = "75%", aDX.style.height = "100%", aDX.style.backgroundColor = cd.mL,
		aDX.style.top = aDX.style.right = cR.cU.jC(0), aDX.style.overflowX = "auto", aDX.style.overflowY = "hidden", aDX.style.whiteSpace = "nowrap", aDY.style.height = aDY.style.maxHeight = "100%", v4.push(new hg("", function() {
			aDb(0)
		}, cd.aDc)), v4.push(new hg("", function() {
			aDb(1)
		}, cd.sV)), v4.push(new hg("", function() {
			aDb(2)
		}, cd.xL)), cC = 0; cC < v4.length; cC++) v4[cC].button.style.height = "100%", aDY.appendChild(v4[cC].button);
	aDX.appendChild(aDY), m2.appendChild(aDW), m2.appendChild(aDX)
}

function bD() {
	this.a7 = null, this.aM = function(a7) {
		this.a7 = a7, az.a1y(this.a7)
	}, this.aDe = function(aDf) {
		var dx = (this.a7[aDf].a20 - this.a7[1 - aDf].a20) / 10,
			dx = 8 / (1 + Math.pow(2, dx / 32)),
			dx = Math.floor(10 * dx + .5),
			a26 = this.a1z(this.a7[aDf].a20 + dx + 1),
			dx = this.a1z(this.a7[1 - aDf].a20 - dx);
		0 === aDf ? az.a25(this.a7, a26, dx, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : az.a25(this.a7, dx, a26, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.a1z = function(a20) {
		return 16e3 <= (a20 = a20 < 0 ? 0 : 16e3 < a20 ? 16e3 : a20) ? "Unknown" : (a20 / 10).toFixed(1)
	}
}

function aDh() {
	function aDk(cr) {
		if (0 === cr.length) fa.fb.fc(116, "");
		else {
			for (var aDl = cr[0], cC = 1; cC < cr.length; cC++) aDl += ";" + cr[cC];
			fa.fb.fc(116, aDl)
		}
	}
	this.aCL = function() {
		fa.hr.data[110].value.length && (fa.hr.data[106].value = fa.hr.data[110], fa.fb.fc(110, ""), this.aDi())
	}, this.aDi = function() {
		var cr = fa.hr.data[116].value.split(";");
		for (cr.length % 2 == 1 && cr.pop(), cr.unshift(fa.hr.data[106].value), cr.unshift(fa.hr.data[105].value), cC = 2; cC < cr.length; cC += 2)
			if (cr[cC] === cr[0]) {
				cr.splice(cC, 2);
				break
			} for (var aDj = [], cC = 0; cC < cr.length; cC += 2) aDj.push(cr[cC]);
		aDk(cr), fa.hr.data[117].value = 0, fa.hr.data[117].pM = aDj
	}, this.aD8 = function(bt) {
		fa.hr.data[117].pM.splice(bt, 1), fa.hr.data[117].value = Math.min(bt, fa.hr.data[117].pM.length - 1);
		var cr = fa.hr.data[116].value.split(";");
		cr.splice(2 * bt, 2), aDk(cr)
	}, this.aD9 = function(bt) {
		var cr = fa.hr.data[116].value.split(";");
		return {
			aDA: cr[2 * bt],
			password: cr[2 * bt + 1]
		}
	}, this.lw = function() {
		var lV = kL.kM(fa.hr.data[121].value, -1, 262143);
		return lV = -1 === lV ? ~~(262144 * Math.random()) : lV
	}
}

function aDm() {
	this.te = new a7Z, this.ei = new a54, this.aM = function() {
		this.te.aM()
	}
}

function aDn() {
	function aDv(dB) {
		aB.aC = !0, aB.aDw(JSON.parse(dB.target.result)), aB.aC7()
	}

	function aE3(f8, min, max, aEC) {
		return "string" != typeof f8 || f8.length < min ? aEC : f8.length > max ? f8.substring(0, max) : f8
	}

	function aDy(lV, min, max) {
		return lV = "number" == typeof lV ? Math.floor(lV) : min, Math.min(Math.max(lV, min), max)
	}

	function aE0(lV, aCI) {
		return "boolean" == typeof lV ? lV : aCI
	}

	function aE5(lV, cx, max, aEE) {
		var cC, cr, cs;
		if (!Array.isArray(lV) || lV.length < 1) return null;
		for (cr = new(8 === aEE ? Uint8Array : Uint16Array)(cx), cs = lV.length, cC = 0; cC < cx; cC++) cr[cC] = aDy(lV[cC % cs], 0, max);
		return cr
	}
	this.aC = !1, this.aD = null, this.xO = function() {
		this.aC = !1, this.aD = null
	}, this.aDo = function() {
		this.aD.a81 && this.aD.aDp && (this.aD.a81[0] = cR.color.lv(fa.bT.lw())), bO.a4(this.aD.aDq, 0, this.aDr(), this.aD.a8, !1, !1)
	}, this.aDr = function() {
		return [{
			name: this.aD.aDs ? fa.hr.data[122].value : this.aD.a2R[0],
			lu: [0, 0, 0],
			jT: 0
		}]
	}, this.mB = function(aDt) {
		var aDu = new FileReader;
		aDu.onload = aDv, aDu.readAsText(aDt)
	}, this.aDw = function(tK) {
		this.aD = {}, this.aD.aDx = aDy(tK.numberPlayers, 1, 512), this.aD.aDz = aDy(tK.modeID, 0, 1), this.aD.kw = aDy(tK["gMap.mapID"], 0, cJ.q5 - 1), this.aD.s3 = aDy(tK.seedMap, 0, 16383), this.aD.aDq = aDy(tK.seedSpawn, 0, 16383), this.aD
			.aE = aE0(tK.selectableSpawn, !1), this.aD.aDs = aE0(tK.selectableName, !1), this.aD.aDp = aE0(tK.selectableColor, !1), cJ.aD.kv[cJ.aE1()].name = this.aD.aE2 = aE3(tK.mapName, 1, 25, "Custom Map"), this.aD.a1P = function(lV) {
				var cC, cx;
				if (!Array.isArray(lV) || lV.length < 1) return [];
				for (cx = lV.length, cC = 0; cC < cx; cC++) lV[cC] = aE3(lV[cC], 0, 100, "");
				return lV
			}(tK.description), this.aD.a5g = aE5(tK.playerX, this.aD.aDx, 4096, 16), this.aD.a5o = aE5(tK.playerY, this.aD.aDx, 4096, 16), this.aD.aE6 = aE5(tK.playerTeam, this.aD.aDx, 8, 8), this.aD.aCx = aE5(tK.playerStrength, this.aD.aDx, 5,
				8), this.aD.a81 = function(lV, cx) {
				var cC, cr, cs;
				if (!Array.isArray(lV) || lV.length < 1) return null;
				for (cr = new Array(cx), cs = lV.length, cC = 0; cC < cx; cC++) cr[cC] = aE5(lV[cC % cs], 3, 63, 8);
				return cr
			}(tK.playerColor, this.aD.aDx), this.aD.a2R = function(lV, cx) {
				var cC, cr, cs;
				if (!Array.isArray(lV) || lV.length < 1) return null;
				for (cr = new Array(cx), cs = lV.length, cC = 0; cC < cx; cC++) cr[cC] = aE3(lV[cC % cs], 3, 26, "Bot");
				return cr
			}(tK.playerName, this.aD.aDx), this.aD.aE9 = "string" == typeof tK.mapBase64 ? tK.mapBase64 : "", this.aD.aDs = this.aD.aDs || !this.aD.a2R, this.aD.a8 = 0 === this.aD.aDz ? 7 : 2 === this.aD.aDz ? 9 : 6, this.aD.a5g = this.aD.a5o ?
			this.aD.a5g : null
	}, this.aC7 = function() {
		! function(f8) {
			var ex, gr, aEB = "data:image/png;base64,";
			if (f8.length <= aEB.length) return;
			aB.aD.kw = 0, aB.aD.s3 = 0, cJ.af(0, 0), f8.substring(0, aEB.length) !== aEB && (f8 = aEB + f8);
			return (ex = new Image).onload = function() {
				cJ.cK = ex.width, cJ.cL = ex.height, 4096 < cJ.cK || 4096 < cJ.cL || cJ.cK < 10 || cJ.cL < 10 ? (cJ.af(0, 0), alert("Image w & h must be between 10 and 4096.")) : (cJ.kw = cJ.aE1(), cJ.s0 = 0, cJ.sD.width = cJ.cK, cJ.sD
					.height = cJ.cL, cJ.sE.drawImage(ex, 0, 0), gr = cJ.sE.getImageData(0, 0, cJ.cK, cJ.cL), cJ.sG = gr.data)
			}, ex.src = f8, aB.aD.aE9 = "", 1
		}(this.aD.aE9) && cJ.af(this.aD.kw, this.aD.s3)
	}, this.aEF = function() {
		for (var max = 0, cx = this.aD.aDx, cC = 0; cC < cx; cC++) this.aD.aE6[cC] > max && (max = this.aD.aE6[cC]);
		return Math.max(0, max - 1)
	}
}

function aEG() {
	var aEH, cr;
	this.aM = function() {
		for (var cC = (cr = new Uint16Array(101)).length - 1; 0 <= cC; cC--) cr[cC] = cA(32768 * cC, 100);
		this.aK(0)
	}, this.value = function(en) {
		return cr[en]
	}, this.fp = function() {
		return cA(aEH - 1, 2)
	}, this.aK = function(fo) {
		aEH = 2 * fo % 32768 + 1
	}, this.random = function() {
		return aEH = 167 * aEH % 32768
	}, this.dz = function(a1v) {
		return cA(a1v * this.random(), 32768)
	}, this.r2 = function(en) {
		return 0 !== en && this.random() < this.value(en)
	}
}

function tS() {
	this.fK = function(ex, fC, fB) {
		var bg = ex.width,
			bh = ex.height,
			gk = cR.cU.gj(bg, bh),
			gq = cR.cU.getContext(gk, !0),
			ex = (gq.drawImage(ex, 0, 0), gq.getImageData(0, 0, bg, bh));
		return fC(ex.data, bg, bh, fB), gq.putImageData(ex, 0, 0), gk
	}, this.fI = function(fP, bg, bh) {
		for (var ca = bg - 1; 0 <= ca; ca--)
			for (var cb = bh - 1; 0 <= cb; cb--) {
				var cC = 4 * (ca + cb * bg);
				fP[3 + cC] = fP[cC], fP[cC] = fP[1 + cC] = fP[2 + cC] = 255
			}
	}, this.fE = function(fP, bg, bh) {
		for (var ca = bg - 1; 0 <= ca; ca--)
			for (var cb = bh - 1; 0 <= cb; cb--) {
				var cC = 4 * (ca + cb * bg);
				fP[1 + cC] > fP[2 + cC] + 10 && (fP[3 + cC] = fP[cC], fP[1 + cC] = fP[2 + cC])
			}
	}, this.fG = function(fP, bg, bh, fB) {
		for (var gap = Math.floor(Math.min(bg, bh) * fB), ca = 0; ca < bg; ca++)
			for (var cC, cb = 0; cb < bh; cb++)(ca < gap || cb < gap || bg - gap <= ca || bh - gap <= cb) && (fP[3 + (cC = 4 * (ca + cb * bg))] = 255 - 255 * (fP[1 + cC] - fP[cC]) / (255 - fP[cC]))
	}, this.xc = function(fP, bg, bh, fB) {
		for (var ca = bg - 1; 0 <= ca; ca--)
			for (var cb = bh - 1; 0 <= cb; cb--) {
				var cC = 4 * (ca + cb * bg);
				fP[cC] = fB[0], fP[1 + cC] = fB[1], fP[2 + cC] = fB[2]
			}
	}, this.fF = function(fP, bg, bh, fB) {
		for (var gap = Math.floor(bg * fB), ca = 0; ca < bg; ca++)
			for (var cC, cb = 0; cb < bh; cb++)(ca < gap || cb < gap || bg - gap <= ca || bh - gap <= cb) && (fP[cC = 4 * (ca + cb * bg)] = fP[1 + cC] = fP[2 + cC] = 0)
	}, this.fH = function(fP, bg, bh) {
		for (var cb, cC, ca = bg - 1; 0 <= ca; ca--)
			for (cb = bh - 1; 0 <= cb; cb--) 200 < fP[1 + (cC = 4 * (ca + cb * bg))] && fP[1 + cC] - 20 > fP[cC] && fP[1 + cC] - 20 > fP[2 + cC] ? fP[cC] + fP[2 + cC] < 40 ? fP[3 + cC] = 0 : (fP[3 + cC] = fP[cC], fP[cC] = 255, fP[1 + cC] = 255,
				fP[2 + cC] = 255) : fP[cC] < 50 && fP[1 + cC] < 50 && fP[2 + cC] < 50 && (fP[cC] + fP[1 + cC] + fP[2 + cC] < 50 ? fP[3 + cC] = 180 : fP[3 + cC] = 180 + Math.floor(75 * (fP[cC] + fP[1 + cC] + fP[2 + cC] - 50) / 100))
	}, this.fJ = function(fP, bg, bh) {
		for (var cb, cC, ca = bg - 1; 0 <= ca; ca--)
			for (cb = bh - 1; 0 <= cb; cb--) fP[1 + (cC = 4 * (ca + cb * bg))] > fP[cC] + 20 && fP[1 + cC] > fP[2 + cC] + 20 && fP[cC] + fP[2] < 40 && (fP[3 + cC] = 255 - fP[1 + cC], fP[cC] = fP[1 + cC] = fP[2 + cC] = fP[cC])
	}, this.aEI = function(fP, bg, bh, fB) {
		for (var gu = bg >> 1, ca = 0; ca < bg; ca++)
			for (var cb = 0; cb < bh; cb++) Math.sqrt((ca - gu) * (ca - gu) + (cb - gu) * (cb - gu)) > fB * gu && (fP[4 * (ca + cb * bg) + 3] = 0)
	}
}

function l9() {
	this.aEJ = function(kK, player) {
		az.my(bO.g, player, kK), bS.fz.aEK(kK, player)
	}, this.vb = function(player) {
		az.a29(player, 0), bS.fz.aEL(player)
	}, this.vV = function(v9, player) {
		az.a2A(v9, player), bS.fz.aEM(v9, player)
	}, this.em = function() {
		bO.n || bO.o || bS.aEN.em()
	}
}

function aEO() {
	var bh, ex, kl, aEP, aEQ, aER = -1;

	function aES() {
		var wu, kp = ex.getContext("2d", {
			alpha: !0
		});
		kp.clearRect(0, 0, bh, bh), kp.fillStyle = cd.oY, kp.fillRect(0, 0, bh, bh), 0 === aEP && (kp.fillStyle = cd.a9p, kp.fillRect(0, 0, bh, bh)), kp.fillStyle = cd.co, kp.fillRect(0, 0, bh, 1), kp.fillRect(0, 0, 1, bh), kp.fillRect(0, bh - 1, bh,
			1), kp.fillRect(bh - 1, 0, 1, bh), wu = .9 * bh / gc.get(0).width, kp.imageSmoothingEnabled = !0, kp.setTransform(wu, 0, 0, wu, Math.floor((bh - wu * gc.get(0).width) / 2), Math.floor((bh - wu * gc.get(0).height) / 2)), kp.drawImage(
			gc.get(0), 0, 0), kp.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aEU(c6, c7) {
		if (!ax.bc) return c6 <= bh + c3.gap && c7 >= ar.cb ? 0 : -1;
		if (c6 <= 4 * bh + c3.gap) {
			if (c7 >= ar.cb) return 0;
			if (c7 >= ar.cb - bh - aEQ * c3.gap) return 2
		} else if (c6 <= 7 * bh + c3.gap && c7 >= ar.cb - bh - aEQ * c3.gap) return 1;
		return -1
	}
	this.bc = !1, this.aM = function() {
		aEP = -1, this.bc = !1, aEQ = bJ.bK.c2() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		bh = ar.bh, (ex = document.createElement("canvas")).width = bh, ex.height = bh, kl = cR.cU.cV(1, (bJ.bK.c2() ? .5 : .45) * bh), aES()
	}, this.cP = function() {
		this.bc = !this.bc, this.bc ? (bW.ow.hideCMPButton(), at.a7P(!1), bO.o && at.bd && at.a7Q(!0), this.aB6()) : (aEP = -1, aES(), !bO.n || 1 !== bO.p || bO.s || bO.o || bJ.bK.setState(1)), bE.bI = !0
	}, this.aB6 = function() {
		(bO.n || bO.o) && 1 === bO.p && (ap.bP(!0), bO.s || setTimeout(function() {
			aW.aET()
		}, 0), bJ.bK.setState(0))
	}, this.c5 = function(c6, c7) {
		return 0 <= (aER = aEU(c6, c7))
	}, this.cM = function(c6, c7) {
		c6 = aEU(c6, c7);
		c6 !== aEP && (aEP = c6, this.bc || aES(), bE.bI = !0)
	}, this.a71 = function(c6, c7) {
		var vI = aEU(c6, c7);
		if (aER !== vI) return !1;
		if (this.bc) {
			if (bO.r) return 0 <= vI && at.a7P(!1), !bO.o;
			if (0 === vI) bO.bQ();
			else if (1 === vI) this.cP();
			else if (2 === vI) bZ.ba(1, 0);
			else {
				if (! function() {
						if (bO.n || 1 !== bO.p || bO.o || am.bv) return 1;
						ax.cP()
					}()) return !1;
				wK.a7H(c6, c7) || b1.vN(c6, c7)
			}
			return !0
		}
		return 0 === vI && (this.cP(), !0)
	}, this.cY = function() {
		var bg;
		this.bc ? (bg = Math.floor(5.5 * bh), cc.setTransform(1, 0, 0, 1, c3.gap, ar.cb), cc.fillStyle = cd.oY, cc.fillRect(0, 0, bg, bh), 0 === aEP ? (cc.fillStyle = cd.a9p, cc.fillRect(0, 0, 4 * bh, bh)) : 1 === aEP && (cc.fillStyle = cd.a9p,
				cc.fillRect(4 * bh, 0, Math.floor(1.5 * bh), bh)), cc.fillStyle = cd.co, cc.fillRect(0, 0, bg, 1), cc.fillRect(0, 0, 1, bh), cc.fillRect(4 * bh, 0, 1, bh), cc.fillRect(0, bh - 1, bg, 1), cc.fillRect(bg - 1, 0, 1, bh), cc
			.font = kl, cR.cU.textBaseline(cc, 1), cR.cU.textAlign(cc, 1), cc.fillText(he.hf[79], 2 * bh, .54 * bh), bg = .4 * bh, ax.cn(c3.gap + 4 * bh + (1.5 * bh - bg) / 2, ar.cb + .3 * bh, bg), bg = 1, cc.setTransform(1, 0, 0, 1, c3.gap,
				ar.cb - bg * aEQ * c3.gap - bg * bh), cc.fillStyle = cd.oY, cc.fillRect(0, 0, 4 * bh, bh), aEP === bg + 1 && (cc.fillStyle = cd.a9p, cc.fillRect(0, 0, 4 * bh, bh)), cc.fillStyle = cd.co, cc.fillRect(0, 0, 4 * bh, 1), cc
			.fillRect(0, 0, 1, bh), cc.fillRect(4 * bh, 0, 1, bh), cc.fillRect(0, bh - 1, 4 * bh, 1), cc.fillText(he.hf[79 + bg], 2 * bh, .54 * bh), cc.setTransform(1, 0, 0, 1, 0, 0)) : cc.drawImage(ex, c3.gap, ar.cb)
	}, this.ij = function(player) {
		return 0 !== aN.bN[player] && 2 !== bO.p && aZ.n9(player)
	}, this.cn = function(ca, cb, cx) {
		cc.setTransform(1, 0, 0, 1, ca, cb), cc.lineWidth = c3.mg, cc.strokeStyle = cd.co, cc.beginPath(), cc.moveTo(0, 0), cc.lineTo(cx, cx), cc.moveTo(0, cx), cc.lineTo(cx, 0), cc.stroke()
	}
}

function aEZ() {
	var gap, bu, ca = [0, 0, 0, 0, 0],
		cb = [0, 0, 0, 0, 0],
		gd = [1, 1, 1, 1, 1],
		lV = [!0, !0, !1, !1, !1],
		gk = (this.ke = [!0, !0, !1, !1, !1], null);
	this.fN = function(gp, aEa) {
		gk = gp, lV = aEa, bu = [iu.iv, iu.iw, iu.a8L, iu.ix, iu.a8M], this.aM()
	}, this.aM = function() {
		if (gc.f2()) {
			var cC, bi = Math.floor((bJ.bK.c2() ? .261 : .195) * c0.ge),
				bj = Math.floor(.9 * bi),
				bm = Math.floor(.17 * bj);
			if (gap = bJ.bK.c2() ? 2 * c3.gap : c3.gap, gd[0] = bi / gk[0].width, gd[1] = bj / gk[1].width, gd[2] = bm / gk[2].height, gd[3] = bm / gk[3].height, gd[4] = bm / gk[4].height, gd[3] *= 1.07, ca[0] = gap, ca[1] = gap, ca[2] = gap, ca[
					3] = gap, ca[4] = Math.floor(2 * gap + gd[3] * gk[3].width), cb[0] = gap, cb[1] = cb[0] + gap + gd[0] * gk[0].height, cb[2] = cb[1] + gap + gd[1] * gk[1].height, cb[3] = cb[2] + gap + gd[2] * gk[2].height, cb[4] = cb[3], !lV[
					0])
				for (cC = 0; cC < 5; cC++) cb[cC] -= gd[0] * gk[0].height + gap;
			if (!lV[1])
				for (cC = 2; cC < 5; cC++) cb[cC] -= gd[1] * gk[1].height + gap
		}
	}, this.bv = function() {
		return !(7 === bY.gB() && bJ.bK.c2())
	}, this.c5 = function(qa, qd, aDJ) {
		if (gk && this.bv())
			for (var cC = lV.length - 1; 0 <= cC; cC--)
				if (lV[cC] && this.ke[cC] && ca[cC] < qa && cb[cC] < qd && qa < ca[cC] + gd[cC] * gk[cC].width && qd < cb[cC] + gd[cC] * gk[cC].height) return bZ.ba(9, bZ.fS, new p2("You are leaving Territorial.io.", cR.cU.a5C(bu[cC]))), !0;
		return !1
	}, this.cY = function() {
		if (gk && this.bv()) {
			var cC;
			for (cc.imageSmoothingEnabled = !0, cC = 0; cC < 5; cC++) lV[cC] && this.ke[cC] && (cc.setTransform(gd[cC], 0, 0, gd[cC], ca[cC], cb[cC]), cc.drawImage(gk[cC], 0, 0));
			cc.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function hl(m0, hc) {
	var cC, a7W = document.createElement("div");

	function zb() {
		var cC, a57, bh, iU, c1, aEc = c0.ma * a7W.offsetWidth,
			aEe = new Float64Array(function(aEc) {
				var bg = .25 * cR.cU.ok(.6) * c0.ge;
				return Math.max(Math.floor(aEc / bg), 1)
			}(aEc)),
			jD = c3.jD,
			aEf = (aEc - (aEe.length + 1) * c3.gap) / (aEe.length * c0.ma);
		for (aEe.fill(jD), cC = 0; cC < hc.length; cC++) a57 = (c1 = hc[cC].a7W).style, bh = cR.tN.min(aEe), iU = aEe.indexOf(bh), a57.top = cR.cU.jC(bh), a57.left = cR.cU.jC(jD + iU * (aEf + jD)), a57.width = cR.cU.jC(aEf), cR.cU.m8(c1, 5), aEe[
			iU] += c1.offsetHeight + 3 * jD;
		a7W.style.height = cR.cU.jC(cR.tN.max(aEe) - 2 * jD)
	}
	for (this.aAK = hc, this.resize = function() {
			var cC;
			for (cC = 0; cC < hc.length; cC++) hc[cC].resize();
			zb(), zb()
		}, a7W.style.width = "100%", a7W.style.maxWidth = "100%", m0.style.lineHeight = "1.5em", m0.style.overflowX = "hidden", m0.style.overflowY = "auto", cC = 0; cC < hc.length; cC++) a7W.appendChild(hc[cC].a7W);
	m0.appendChild(a7W)
}

function aEg() {
	function aEk(a9v) {
		return a9v < 0 ? 0 : 255 < a9v ? 255 : Math.floor(a9v)
	}
	this.bg = 0, this.bh = 0, this.bv = !1, this.aEh = 0, this.gap = 0, this.aEi = 0, this.xT = 0, this.mT = 0, this.mV = 0, this.mW = 0, this.colors = null, this.aM = function() {
		this.bv = !0, this.aEh = 0, this.resize()
	}, this.resize = function() {
		this.bv && (c0.bg < 1.4 * c0.bh ? this.bg = Math.floor((bJ.bK.c2() ? .94 : .43) * c0.bg) : (this.bh = Math.floor((bJ.bK.c2() ? .88 : .43) * c0.bh), this.bg = Math.floor(1.4 * this.bh)), this.bh = this.bg / 1.4, this.gap = this.bg / 32,
			this.xT = Math.floor(.25 * this.bh), this.mT = (this.bh - this.xT - 3 * this.gap) / 2, this.mV = this.bg - 3 * this.gap - this.mT, this.mW = (this.bh - this.xT - 4 * this.gap) / 3)
	}, this.aEj = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var f8 = fa.hr.data[103].value.split("");
		if (f8.length < 6)
			for (var e6 = 2; 0 <= e6; e6--) this.colors[0][e6] = aEk(256 * Math.random());
		else
			for (var cC = 2; 0 <= cC; cC--) this.colors[0][cC] = aEk(4 * (10 * parseInt(f8[2 * cC]) + parseInt(f8[2 * cC + 1])));
		this.aEl()
	}, this.aEm = function() {
		return [cA(this.colors[0][0], 4), cA(this.colors[0][1], 4), cA(this.colors[0][2], 4)]
	}, this.mn = function(c6, c7, deltaY) {
		var dM = (c0.bg - this.bg) / 2;
		c7 -= (c0.bh - this.bh) / 2 + this.xT, (c6 -= dM) < 0 || c7 < 0 || c6 >= this.bg || c7 >= this.bh - this.xT || (dM = Math.floor(3 * c7 / (this.bh - this.xT)), this.colors[this.aEi][dM] = aEk(this.colors[this.aEi][dM] + (deltaY < 0 ? 1 : -
			1) * Math.max(Math.abs(.05 * deltaY), 1)), bE.bI = !0)
	}, this.c5 = function(c6, c7) {
		this.aEh = 0;
		var dM = (c0.bg - this.bg) / 2;
		return c7 -= (c0.bh - this.bh) / 2, (c6 -= dM) < 0 || c7 < 0 || c6 >= this.bg - 1 || c7 >= this.bh - 1 || c6 > this.bg - (.4 * this.xT + 3 * this.gap) && c7 < this.xT ? (this.bv = !1, !(bE.bI = !0)) : c6 < this.gap || c7 < this.gap + this
			.xT || c6 >= this.bg || c7 >= this.bh - this.gap || (c6 < this.gap + this.mT ? (c7 < this.gap + this.xT + this.mT && 0 !== this.aEi && (this.aEi = 0, bE.bI = !0), !0) : c6 < this.gap + this.mT || (c6 -= 2 * this.gap + this.mT, c7 <
				this.gap + this.xT + this.mW ? (this.aEh = 1, this.colors[this.aEi][0] = aEk(256 * c6 / this.mV), bE.bI = !0) : c7 < 2 * this.gap + this.xT + this.mW || (c7 < 2 * this.gap + this.xT + 2 * this.mW ? (this.aEh = 2, this.colors[
					this.aEi][1] = aEk(256 * c6 / this.mV), bE.bI = !0) : !(c7 >= 3 * this.gap + this.xT + 2 * this.mW) || (this.aEh = 3, this.colors[this.aEi][2] = aEk(256 * c6 / this.mV), bE.bI = !0))))
	}, this.aEl = function() {
		for (var e6 = 2; 0 <= e6; e6--) this.colors[0][e6] = aEk(this.colors[0][e6])
	}, this.aEn = function() {
		for (var lV, f8 = "", cC = 0; cC < 3; cC++)(lV = cA(this.colors[0][cC], 4)) < 10 && (f8 += "0"), f8 += lV.toString();
		return f8
	}, this.cM = function(c6) {
		0 !== this.aEh && (c6 -= 2 * this.gap + this.mT + (c0.bg - this.bg) / 2, this.colors[this.aEi][this.aEh - 1] = aEk(256 * c6 / this.mV), bE.bI = !0)
	}, this.mo = function() {
		0 < this.aEh && (this.aEh = 0, this.aEl(), fa.fb.fc(103, this.aEn()), bE.bI = !0)
	}, this.cY = function() {
		var dM = (c0.bg - this.bg) / 2,
			dN = (c0.bh - this.bh) / 2;
		cc.setTransform(1, 0, 0, 1, dM, dN), cc.fillStyle = cd.ce, cc.fillRect(0, this.xT, this.bg, this.bh - this.xT), cc.fillStyle = cd.m6, cc.fillRect(0, 0, this.bg, this.xT), cc.fillStyle = cd.co, cc.lineWidth = c3.mg, cc.strokeStyle = cd.co,
			cc.strokeRect(-1, -1, this.bg + 2, this.bh + 2), cc.fillRect(0, this.xT, this.bg, c3.mg), cc.font = cR.cU.cV(1, .31 * this.xT), cR.cU.textBaseline(cc, 1), cR.cU.textAlign(cc, 1), cc.fillText("Choose Your Nation's Color!", Math.floor((
				this.bg - this.gap - .4 * this.xT) / 2), Math.floor(.55 * this.xT)), this.mh(0), cc.lineWidth = c3.mg, this.mi(0), this.mi(1), this.mi(2), ax.cn(Math.floor(dM + this.bg - .4 * this.xT - this.gap), Math.floor(dN + .3 * this.xT),
				Math.floor(.4 * this.xT)), cc.setTransform(1, 0, 0, 1, 0, 0)
	}, this.mh = function(cC) {
		var gu = this.colors[cC][0],
			mj = this.colors[cC][1],
			cC = this.colors[cC][2];
		cc.fillStyle = "rgb(" + gu + "," + mj + "," + cC + ")", cc.fillRect(this.gap, this.xT + this.gap, this.mT, 2 * this.mT + this.gap), cc.lineWidth = c3.mg, cc.strokeStyle = cd.co, cc.strokeRect(this.gap, this.xT + this.gap, this.mT, 2 *
			this.mT + this.gap), cc.fillStyle = gu + mj + cC < 306 && mj < 150 ? cd.co : cd.l6, cc.font = cR.cU.cV(1, .32 * this.mW), cR.cU.textAlign(cc, 1), cR.cU.textBaseline(cc, 1), cc.rotate(-Math.PI / 2), cc.fillText("National Color",
			Math.floor(-1.5 * this.gap - this.xT - this.mT), Math.floor(this.gap + .5 * this.mT)), cc.rotate(Math.PI / 2)
	}, this.mi = function(cC) {
		cc.fillStyle = "rgb(" + (0 === cC ? 150 : 2 === cC ? 30 : 0) + "," + (1 === cC ? 130 : 2 === cC ? 30 : 0) + "," + (2 === cC ? 220 : 0) + ")", cc.fillRect(2 * this.gap + this.mT, this.xT + this.gap + cC * (this.gap + this.mW), Math.floor(
			this.colors[this.aEi][cC] * this.mV / 255), this.mW), cc.strokeStyle = cd.co, cc.strokeRect(2 * this.gap + this.mT, this.xT + this.gap + cC * (this.gap + this.mW), this.mV, this.mW), cc.fillStyle = cd.co, cc.font = cR.cU.cV(1,
			.32 * this.mW), cR.cU.textBaseline(cc, 1), cR.cU.textAlign(cc, 0), cc.fillText((0 === cC ? "Red: " : 1 === cC ? "Green: " : "Blue: ") + this.colors[0][cC].toString(), 3 * this.gap + this.mT, Math.floor(this.xT + this.gap + cC * (
			this.gap + this.mW) + .53 * this.mW))
	}
}

function aEo() {
	var input;

	function aEp(dB) {
		aEs(dB.target.files)
	}

	function aEs(files) {
		files && 0 < files.length && a7L.aEt(files[0])
	}

	function aDv(dB) {
		var gk = new Image;
		gk.onload = aEv, gk.src = dB.target.result
	}

	function aEv(dB) {
		var aEw, dB = dB.target,
			bg = dB.width,
			bh = dB.height;
		4096 < bg || 4096 < bh || bg < 10 || bh < 10 ? (aEw = "Image w & h must be between 10 and 4096.", bJ.mD ? bJ.mD.showToast(aEw) : alert(aEw)) : (aB.xO(), cJ.kw = cJ.aE1(), cJ.s0 = 0, cJ.cK = bg, cJ.cL = bh, cJ.sD.width = cJ.cK, cJ.sD.height =
			cJ.cL, cJ.sE.drawImage(dB, 0, 0), aEw = cJ.sE.getImageData(0, 0, cJ.cK, cJ.cL), cJ.sG = aEw.data)
	}

	function aEx(dB) {
		dB.stopPropagation(), dB.preventDefault()
	}

	function aEy() {
		return 0 === bY.gB() || 2 === bY.gB()
	}
	this.aM = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = aEp
	}, this.aEq = function() {
		input.click()
	}, this.aEr = function(dB) {
		aEp(dB)
	}, this.aEt = function(aDt) {
		var cr = aDt.name.split("."),
			aEu = cr[cr.length - 1].toLowerCase();
		"json" === aEu ? aB.mB(aDt) : "gif" !== aEu && "jpg" !== aEu && "jpeg" !== aEu && "png" !== aEu || (cJ.aD.kv[cJ.aE1()].name = cr[0], (aEu = new FileReader).onload = aDv, aEu.readAsDataURL(aDt))
	}, this.a75 = function(dB) {
		aEy() && (aEx(dB), dB.dataTransfer.dropEffect = "copy")
	}, this.a76 = function(dB) {
		aEy() && (aEx(dB), aEs(dB.dataTransfer.files))
	}
}

function tU() {
	this.lv = function(lV) {
		return [lV >> 12 & 63, lV >> 6 & 63, 63 & lV]
	}, this.aEz = function(lV) {
		for (var cr = this.lv(lV), cC = 0; cC < 3; cC++) cr[cC] = ~~(4.05 * cr[cC]);
		return cr
	}, this.xR = function(lV) {
		lV = this.aEz(lV);
		return cR.color.pT(lV[0], lV[1], lV[2])
	}, this.aF0 = function(cr) {
		for (var cC = 0; cC < 3; cC++) cr[cC] = ~~(cr[cC] / 4.04);
		return (cr[0] << 12) + (cr[1] << 6) + cr[2]
	}, this.pT = function(gu, mj, e6) {
		return "rgb(" + gu + "," + mj + "," + e6 + ")"
	}, this.to = function(gu, mj, e6, dv) {
		return "rgba(" + gu + "," + mj + "," + e6 + "," + dv.toFixed(3) + ")"
	}, this.mQ = function(gk) {
		for (var cr = gk.split("(")[1].split(","), nz = (cr.length, dS.nz), cC = 0; cC < 3; cC++) nz[cC] = parseInt(cr[cC]);
		return nz
	}, this.mM = function(aF1, c1) {
		for (var cr = aF1.slice(aF1.indexOf("(") + 1, aF1.indexOf(")")).split(","), nz = dS.nz, cC = 0; cC < 3; cC++) nz[cC] = kL.kM(parseInt(cr[cC].trim(), 10) + c1, 0, 255);
		return 3 === cr.length ? this.pT(nz[0], nz[1], nz[2]) : this.to(nz[0], nz[1], nz[2], parseFloat(cr[3].trim()))
	}, this.aF2 = function(cr) {
		for (var f8 = "#", cC = 0; cC < 3; cC++) {
			var gu = cr[cC].toString(16);
			f8 += 1 === gu.length ? "0" + gu : gu
		}
		return f8
	}, this.aF3 = function(f8) {
		var gu, mj;
		return f8.length < 7 ? cd.l6 : (gu = parseInt(f8.slice(1, 3), 16), mj = parseInt(f8.slice(3, 5), 16), f8 = parseInt(f8.slice(5, 7), 16), this.pT(gu, mj, f8))
	}
}

function g7() {
	var g1, g2, aF4, aF5 = ["wss://", "/s50/", "/s51/", "/s52/"];

	function g8() {
		bS.bT.g8(g1, g2)
	}

	function aFA(dB) {
		bS.gS.aFC(g1, new Uint8Array(dB.data))
	}

	function aFB() {}

	function gJ(dB) {
		bS.bT.gJ(g1, dB)
	}
	this.aM = function(bt, aF6) {
		g1 = bt, g2 = aF6;
		bt = aF5[0];
		g1 < bS.bT.fe ? bt += bS.bT.fj[g1] + aF5[1 + aG] : bt += bS.bT.fj[0] + "/i" + (1 + aG) + (g1 - bS.bT.ff) + "/", (aF4 = new WebSocket(bt)).binaryType = "arraybuffer", aF4.onopen = g8, aF4.onmessage = aFA, aF4.onclose = gJ, aF4.onerror =
			aFB
	}, this.aF8 = function() {
		return aF4.readyState === aF4.CONNECTING
	}, this.fy = function() {
		return aF4.readyState === aF4.OPEN
	}, this.g4 = function() {
		return this.aF8() || this.fy()
	}, this.g5 = function(aF6) {
		g2 = aF6
	}, this.aBN = function() {
		return g2
	}, this.send = function(eX) {
		this.fy() && aF4.send(eX)
	}, this.close = function(gD) {
		this.g4() && (aF4.close(gD), this.cB())
	}, this.cB = function() {
		aF4.onopen = null, aF4.onmessage = null, aF4.onclose = null, aF4.onerror = null
	}
}

function ut() {
	this.fx = function() {
		xb.fx(), qH.fx(), c0.fx(), bS.bT.fx(), wz.gZ(), bE.bI && (bE.bI = !1, bY.cY())
	}
}

function aFD() {
	function aFF(cC) {
		return void 0 !== cJ.aD.kv[cC].qA
	}

	function aFE(cC) {
		return 1 !== cC && !aFF(cC) && cC !== cJ.aE1()
	}
	this.q5 = 21, this.cK = 0, this.cL = 0, this.sD = null, this.sE = null, this.sF = null, this.sG = null, this.kw = 0, this.s0 = 0, this.aBd = !1, this.sH = new sc, this.aD = new pw, this.aM = function() {
		this.aD.aM()
	}, this.af = function(map, s3) {
		((map %= this.q5) !== this.kw || aFE(this.kw) && s3 !== this.s0) && (this.aBd = !1, this.sH.sI(), aJ.aK(map), this.kw = map, this.s0 = s3, aFE(map) && (cJ.aD.kv[map].fo = s3), aFF(this.kw) ? aFG() : (map = cJ.aD.kv[this.kw], this.cK = map
			.bg, this.cL = map.bh, aJ.aK(map.fo), sn.af([this.cK, this.cL, map.q6, map.q7]), a6b(), aU.aBY(), sn.so()))
	}, this.aBp = function(cC) {
		return 3 === cC || 7 === cC || 9 === cC || cC === this.aE1()
	}, this.aFH = function(cC) {
		return 2 === cC || 7 === cC || 9 === cC
	}, this.aBb = function(cC) {
		return 1 === cC
	}, this.aE1 = function() {
		return this.q5
	}
}

function aFI() {
	this.aFC = function(g1, eX) {
		gR.aM(eX), 0 === gR.size ? bS.bT.gE(g1, 3205) : ((0 === gR.kT(1) ? function(g1) {
			var aFL = gR.kT(6);
			0 === aFL ? function(g1) {
				if (0 === g1 && 8 !== bY.gB()) {
					bZ.bT.aFT();
					for (var aFU = gR.kT(12), aFV = gR.kT(6), cr = new Array(aFU), cC = 0; cC < aFU; cC++) cr[cC] = gR.kT(aFV);
					xa.a4k(cr)
				}
			}(g1) : 2 === aFL ? bS.aFN.yR(g1) : 3 === aFL || 4 === aFL ? wz.aM() : 5 !== aFL && 6 !== aFL && 7 !== aFL && 8 !== aFL && (9 === aFL ? bS.aFO.aBH(g1) : 10 === aFL ? bS.aFP.aCK() : 11 === aFL ? bS.aFO.aBP() : 12 ===
				aFL ? bS.aFP.aCM() : 13 === aFL ? bS.aFQ.aFR() : 14 === aFL && bS.aFQ.aFS())
		} : function(g1) {
			if (8 !== bY.gB() && !wz.gX()) return;
			if (g1 !== bS.bT.eu) bS.bT.gE(g1, 3244);
			else if (0 === gR.kT(1)) bE.uo.aBz(gR.eX);
			else {
				var cC, g1 = gR.kT(2);
				if (0 === g1) {
					var kK, fz = gR.kT(9);
					0 !== aN.bN[fz] && 0 !== aN.bN[bO.g] && (kK = gR.kT(10), az.my(fz, bO.g, kK), b8.kN(fz, 1, kK))
				} else if (1 === g1) ! function() {
					var fz = gR.kT(9);
					0 !== aN.bN[fz] && 0 !== aN.bN[bO.g] && bB.aFd(0, [fz], !0) && az.a29(fz, 1)
				}();
				else if (2 === g1) ! function() {
					var fz = gR.kT(9),
						target = gR.kT(9);
					0 !== aN.bN[fz] && 0 !== aN.bN[target] && 0 !== aN.bN[bO.g] && bB.aFd(1, [fz], !0) && (b8.kN(fz, 3, 96), b8.kN(target, 4, 96), az.a2B(fz, target))
				}();
				else if (wN && !wO) {
					var cx = 720;
					for (eV.af(14407), eV.eW(1, 0), eV.eW(6, 10), cx = Math.min(aO.aP.aQ.length, 720), cC = 0; cC < cx; cC++) eV.eW(20, aO.aP.aQ[cC]);
					bS.bT.send(bS.bT.eu, eV.eX)
				}
			}
		})(g1), bE.uu())
	}, this.gY = function(eX) {
		if (gR.aM(eX), gR.bt = 1, 3 === gR.kT(6)) {
			gR.bt += 20;
			for (var jT, lu, name, eX = gR.kT(9), a5 = gR.kT(14), a8 = gR.kT(4), s1 = 1 === gR.kT(1), s2 = gR.kT(6), s3 = gR.kT(14), aFY = gR.kT(9) + 1, a7 = [], cC = 0; cC < aFY; cC++) jT = gR.kT(1), lu = [gR.kT(6), gR.kT(6), gR.kT(6)], name =
				yV.ei.n3(gR.kT(5)), a7.push({
					name: name,
					lu: lu,
					jT: jT
				});
			bY.wE(), cJ.af(s2, s3), 1 === a7.length && aH.wF(a8), bO.a4(a5, eX, a7, a8, s1, !1)
		} else ! function() {
			gR.bt += 20;
			for (var jT, lu, a20, name, gN = gR.kT(1), a5 = gR.kT(14), a8 = gR.kT(4), s1 = 1 === gR.kT(1), s2 = gR.kT(6), s3 = gR.kT(14), a7 = [], cC = 0; cC < 2; cC++) jT = gR.kT(1), lu = [gR.kT(6), gR.kT(6), gR.kT(6)], a20 = gR.kT(14),
				name = yV.ei.n3(gR.kT(5)), a7.push({
					name: name,
					lu: lu,
					a20: a20,
					jT: jT
				});
			bY.wE(), cJ.af(s2, s3), bO.a4(a5, gN, a7, a8, s1, !1)
		}()
	}, this.gT = function() {
		gR.bt = 1;
		var aFL = gR.kT(6),
			aBt = gR.kT(10);
		return bS.bT.fm > bS.bT.ff && (aBt += bS.bT.ff), bS.bT.fm === aBt ? (bS.bT.eu = aBt, !1) : (bS.bT.close(bS.bT.fm, 3247), bS.bT.eu = aBt, wz.gM = gR.kT(10), wz.gN = gR.kT(3 === aFL ? 9 : 1), bS.bT.fu(aBt, 5) && bS.fz.aBO(), !0)
	}
}

function aFe() {
	this.wp = function() {
		var aFh;
		return !(kd < 3 || aN.d0[a8m[0]] >= bO.q >> 1) && (bO.u ? (aFh = aX.lZ(), !(2 * aX.la(aj.aFj()) >= aFh)) : function() {
			var aFh = aX.lZ();
			if (2 * aN.dj[a8m[0]] >= aFh) return !1;
			return !0
		}())
	}
}

function aFk() {
	this.aFl = null, this.aM = function() {
		10 !== bO.w ? this.aFl = null : this.aFl = new Uint32Array(bO.b)
	}, this.fx = function() {
		10 === bO.w && this.qF()
	}, this.qF = function() {
		for (var en, target, cv, aFl = this.aFl, a7 = lU, cj = aN.dj, cC = kd - 1; 0 <= cC; cC--)(en = a7[cC]) >= bO.h || (target = Math.max(cA(cj[en], 4), 2048), cv = Math.max(aX.lO(en), 100), aFl[en] += cA(cv * target, 1e4), aFl[en] > target &&
			(aFl[en] = target))
	}, this.aAn = function(player, dh) {
		return dh > this.aFl[player] ? (dh = this.aFl[player], this.aFl[player] = 0) : this.aFl[player] -= dh, dh
	}
}

function aFm() {
	this.bv = !1;
	this.gh = [], this.gg = 100;
	var dM, dN, gap, go, aFn, aFp, aFr = 0,
		aFs = new Array(9),
		aFt = [],
		aFu = [],
		aFv = 0,
		aFw = 0,
		aFx = 0,
		aFy = 0;

	function aG5() {
		aFs.sort(function(dv, e6) {
			return e6.ki - dv.ki
		});
		for (var f8 = "" + aFs[0].kK, cC = 1; cC < 9; cC++) f8 += "," + aFs[cC].kK;
		for (cC = 0; cC < 9; cC++) f8 += "," + aFs[cC].ki;
		fa.hr.a5V(120, f8)
	}
	this.aM = function() {
		for (var aDa = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], cC = 0; cC < aDa.length; cC++) {
			var color = 6 === aDa[cC] ? cd.vE : cd.tu;
			this.gh.push(cR.ex.vK(gc.get(3), aDa[cC], color))
		}
		for (cC = 0; cC < fO.rg.rk; cC++) aFu.push(fO.rg.aFz - fO.rg.rk + cC);
		for (cC = 0; cC < fO.rg.aG0; cC++) aFu.push(fO.rg.rh + cC);
		var a8N = fO.rg.aG1(iu.a8N);
		for (cC = 0; cC < a8N.length; cC++) aFu.push(a8N[cC]);
		! function() {
			var cC, cr = fa.hr.data[120].value.split(",");
			if (18 !== cr.length)
				for (cC = 0; cC < 9; cC++) aFs[cC] = {
					kK: 1015 + cC,
					ki: 0
				};
			else
				for (cC = 0; cC < 9; cC++) {
					var lV = parseInt(cr[cC]),
						gk = (lV = 0 <= lV && lV < fO.rg.aFz ? lV : 0, parseInt(cr[cC + 9]));
					gk = 0 <= gk && gk < 1e3 ? gk : 0, aFs[cC] = {
						kK: lV,
						ki: gk
					}
				}
		}()
	}, this.show = function(c6, c7, aG6) {
		var cC;
		if (aFv = c6, aFw = c7, aFr = aG6 || 0, this.bv = !0, aFt = [], 0 === aFr)
			for (cC = 0; cC < 9; cC++) aFt.push(aFs[cC].kK);
		else {
			var e6 = 49 * aFr,
				aG6 = e6 - 49;
			for (aG6 >= aFu.length && (aFr = 1, aG6 = 0, e6 = 49), cC = aG6 = (e6 = Math.min(e6, aFu.length)) - 49; cC < e6; cC++) aFt.push(aFu[cC])
		}
		aFt.push(1024);
		aG6 = aFt.length, go = Math.floor((bJ.bK.c2() ? .075 : .0468) * c0.ge), gap = Math.floor(go / 3), (aFx = 10 * (aFn = go + gap)) > c0.bg && (aFx = c0.bg, gap = (aFn = aFx / 10) - (go = 3 * aFn / 4)), aFp = kL.lk(aG6, 10) + !!(aG6 % 10), (
			aFy = aFp * aFn) > c0.bh && (aFy = c0.bh, gap = (aFn = aFy / aFp) - (go = 3 * aFn / 4)), this.gg, aG6 = .5 * gap;
		dM = Math.min(Math.max(c6 - .5 * aFx + aG6, aG6), c0.bg - aFx + aG6), dN = Math.min(Math.max(c7 - .5 * aFy + aG6, aG6), c0.bh - aFy + aG6)
	}, this.c5 = function(c6, c7, player) {
		if (!this.bv) return !1;
		if (this.w1(c6, c7)) {
			c6 = kL.kM(kL.lk(c6 - dM + .5 * gap, aFn), 0, 9);
			if ((c6 += 10 * kL.kM(kL.lk(c7 - dN + .5 * gap, aFn), 0, 9)) >= aFt.length) return b1.cB(), !0;
			c7 = aFt[c6];
			if (1024 === c7) return this.show(aFv, aFw, aFr + 1), !0;
			! function(kK) {
				for (var cC = 0; cC < 9; cC++) aFs[cC].ki = Math.floor(.99 * aFs[cC].ki);
				for (cC = 0; cC < 9; cC++)
					if (kK === aFs[cC].kK) return aFs[cC].ki = Math.min(aFs[cC].ki + 30, 999), aG5();
				aFs.splice(5, 0, {
					kK: kK,
					ki: Math.max(aFs[4].ki, 30)
				}), aFs.pop(), aG5()
			}(c7), player === bO.g ? aO.ik.my(c7) : aO.gv.aEJ(c7, player)
		}
		return b1.cB(), !0
	}, this.w1 = function(c6, c7) {
		return !(c6 < dM - .5 * gap || c7 < dN - .5 * gap || dM + aFx - .5 * gap <= c6 || dN + aFy - .5 * gap <= c7)
	}, this.cY = function() {
		cc.fillStyle = cd.ce, cc.fillRect(dM - .5 * gap, dN - .5 * gap, aFx, aFy);
		for (var pQ = .5 * c3.mg, cx = (cc.lineWidth = c3.mg, cc.strokeStyle = cc.fillStyle = cd.co, cc.strokeRect(dM - .5 * gap + pQ, dN - .5 * gap + pQ, aFx - 2 * pQ, aFy - 2 * pQ), cc.imageSmoothingEnabled = !0, aFt.length), cC = 0; cC <
			cx; cC++) this.rl(aFt[cC], cc, dM + cC % 10 * aFn, dN + kL.lk(cC, 10) * aFn, go);
		cc.imageSmoothingEnabled = !1
	}, this.rl = function(kK, gq, ca, cb, go) {
		var cu;
		kK >= 1024 - fO.rg.rk ? (cu = go / this.gg, gq.setTransform(cu, 0, 0, cu, ca, cb), gq.drawImage(this.gh[kK - 1024 + fO.rg.rk], 0, 0), gq.setTransform(1, 0, 0, 1, 0, 0)) : (cR.cU.textAlign(gq, 1), cR.cU.textBaseline(gq, 1), gq.font = cR.cU
			.cV(0, .89 * go), gq.fillText(fO.rg.a0E(kK), ca + .5 * go, cb + (.35 - cR.cU.a04 + .56) * go))
	}
}

function aG8() {
	var uw = [0, 0, 0, 0];

	function aGD(ca, cb, go, aGF) {
		cc.fillStyle = cd.co;
		var bi = rx(2, Math.floor((aGF ? .5 : .35) * go)),
			bm = (bi -= bi % 2, rx(2, Math.floor(.1 * go))),
			go = (bm -= bm % 2, Math.floor((go - bi) / 2)),
			dO = Math.floor(go + (bi - bm) / 2);
		cc.fillRect(ca + go, cb + dO, bi, bm), aGF && cc.fillRect(ca + dO, cb + go, bm, bi)
	}

	function oX(ca, cb, bg, bh, a9v, ct, hf, dh, pZ) {
		cc.fillStyle = a9v, cc.fillRect(ca, cb, bg, bh), 0 <= dh && function(ca, cb, bg, bh, dh) {
			cc.fillStyle = "rgba(" + 22 * dh + "," + (110 - 22 * dh) + ",0,0.75)", cc.fillRect(ca, cb, (1 + dh) * bg / 6, bh)
		}(ca, cb, bg, bh, dh), 0 < pZ && function(ca, cb, bg, bh, pZ) {
			cc.fillStyle = "rgba(255,255,255,0.3)", cc.fillRect(ca, cb, pZ * bg / bO.b, bh)
		}(ca, cb, bg, bh, pZ), cc.strokeStyle = cd.co, cc.strokeRect(ca, cb, bg, bh), 0 !== ct && (cc.fillStyle = cd.co, cc.font = cR.cU.cV(1, ct * bh), cc.fillText(hf, Math.floor(ca + bg / 2), Math.floor(cb + .52 * bh)))
	}
	this.lW = [{
		c1: 0,
		pZ: 512
	}], this.aM = function() {
		aG9.bv = !1, bY.setState(2), this.resize(), bE.bI = !0
	}, this.qM = function() {}, this.resize = function() {
		uw[2] = Math.floor((bJ.bK.c2() ? .49 : .4) * c0.ge), uw[1] = Math.floor((c0.bh - uw[2] / 6 - this.lW.length * (c3.gap + uw[2] / 10)) / 2), uw[0] = Math.floor((c0.bg - uw[2]) / 2), aG9.bv && aG9.resize()
	}, this.wF = function(a8) {
		var cC;
		if (6 < a8) this.lW = [{
			c1: 0,
			pZ: 512
		}];
		else {
			for (this.lW = [], cC = 0; cC < a8 + 2; cC++) this.lW.push({
				c1: 0,
				pZ: 0
			});
			this.aGA()
		}
		bS.bT.eu = 0
	}, this.wG = function(wH, wI) {
		for (var cx = wH.length, cC = 0; cC < cx; cC++) this.lW[cC].c1 = wH[cC], this.lW[cC].pZ = wI[cC]
	}, this.wC = function(mj) {
		var cC, cx;
		if (1 === mj.a7.length)
			for (cx = this.lW.length, mj.wH = new Array(cx), mj.wI = new Array(cx), cC = 0; cC < cx; cC++) mj.wH[cC] = this.lW[cC].c1, mj.wI[cC] = this.lW[cC].pZ
	}, this.a7U = function() {
		bE.bI = !0, aG9.bv ? aG9.bv = !1 : (this.qM(), bY.setState(0), bZ.ba(5, 5))
	}, this.aI = function() {
		var cC, pZ;
		if (aB.aC) return aB.aD.aDx;
		for (pZ = 0, cC = this.lW.length - 1; 0 <= cC; cC--) pZ += this.lW[cC].pZ;
		return pZ
	}, this.cM = function(ca, cb) {
		return !(!aG9.bv || !aG9.cM(ca, cb)) || -1 !== this.mm(ca, cb)
	}, this.aGB = function() {
		var dv;
		bS.bT.eu = 0, bY.wE(), aB.aC ? aB.aDo() : (dv = (dv = this.lW.length - 2) < 0 ? 7 : dv, bO.a4(Math.floor(16384 * Math.random()), 0, [{
			name: fa.hr.data[122].value,
			lu: cR.color.lv(fa.bT.lw()),
			jT: 0
		}], dv, !1, !1))
	}, this.c5 = function(ca, cb) {
		if (aG9.bv && !aB.aC) return aG9.c5(ca, cb);
		var cC, dv, max, bi, cb = this.mm(ca, cb);
		if (-1 === cb) return !1;
		if (0 === cb) this.a7U();
		else if (1 === cb) aB.aC ? (aB.xO(), bE.bI = !0) : aG9.show();
		else if (100 === cb) a7L.aEq();
		else if (2 === cb) this.qM(), this.aGB();
		else {
			if (aB.aC) return !1;
			if (27 === cb) this.lW.length < 8 && (this.lW.push({
				c1: 0,
				pZ: bO.b
			}), this.aGA(), this.resize(), bE.bI = !0);
			else if (cC = Math.floor((cb - 3) / 3), cb % 3 == 0) 1 < this.lW.length && (this.lW.splice(cC, 1), this.resize(), bE.bI = !0);
			else if (bi = (uw[2] - uw[2] / 10 - 2 * c3.gap) / 2, cb % 3 == 1) 0 === cC && 1 === this.lW[cC].pZ || (ca < uw[0] + uw[2] - 1.5 * bi - c3.gap ? this.lW[cC].c1-- : this.lW[cC].c1++, this.lW[cC].c1 < 0 ? this.lW[cC].c1 = 5 : 5 < this
				.lW[cC].c1 && (this.lW[cC].c1 = 0), bE.bI = !0);
			else {
				for (bE.bI = !0, cb = (ca - (uw[0] + uw[2] - bi)) / bi - .5, cb *= cb < 0 ? -cb : cb, cb = 0 === (cb = Math.floor(cb * bO.b)) ? 1 : cb, max = bO.b, dv = this.lW.length - 1; 0 <= dv; dv--) cC !== dv && (max -= this.lW[dv].pZ);
				if (cb < 0) {
					if (1 === this.lW[cC].pZ) return this.lW[cC].pZ = max, !0
				} else if (this.lW[cC].pZ === max) return this.lW[cC].pZ = 1, !0;
				this.lW[cC].pZ += cb, this.lW[cC].pZ < 1 ? this.lW[cC].pZ = 1 : this.lW[cC].pZ > max && (this.lW[cC].pZ = max)
			}
		}
		return !0
	}, this.aGA = function() {
		for (var pZ = Math.floor(bO.b / this.lW.length), aGC = bO.b % this.lW.length, cC = this.lW.length - 1; 0 <= cC; cC--) this.lW[cC].pZ = pZ;
		this.lW[0].pZ += aGC
	}, this.mm = function(ca, cb) {
		var bi = (uw[2] - 3 * c3.gap) / 4,
			bm = uw[2] / 6;
		if (ca < uw[0] || cb < uw[1] || uw[0] + uw[2] <= ca) return -1;
		if (cb < uw[1] + bm) return ca < uw[0] + bi ? 0 : ca < uw[0] + bi + c3.gap ? -1 : ca < uw[0] + 2 * bi + c3.gap ? 100 : ca < uw[0] + 2 * (bi + c3.gap) ? -1 : ca < uw[0] + 3 * bi + 2 * c3.gap ? 1 : ca < uw[0] + 3 * (bi + c3.gap) ? -1 : 2;
		for (var dN, bn = uw[2] / 10, bi = (uw[2] - bn - 2 * c3.gap) / 2, cC = 0; cC < this.lW.length; cC++) {
			if (cb < (dN = uw[1] + bm + c3.gap + cC * (bn + c3.gap))) return -1;
			if (!(dN + bn < cb)) return ca < uw[0] + bn ? 3 + 3 * cC : ca < uw[0] + bn + c3.gap ? -1 : ca < uw[0] + uw[2] - bi - c3.gap ? 4 + 3 * cC : ca < uw[0] + uw[2] - bi ? -1 : 5 + 3 * cC
		}
		return !(this.lW.length < 8) || cb < (dN = uw[1] + bm + c3.gap + this.lW.length * (bn + c3.gap)) || dN + bn < cb || uw[0] + bn < ca ? -1 : 27
	}, this.cY = function() {
		cc.lineWidth = c3.mg, cR.cU.textAlign(cc, 1), cR.cU.textBaseline(cc, 1);
		var bi = (uw[2] - 3 * c3.gap) / 4,
			bm = uw[2] / 6;
		if (oX(uw[0], uw[1], bi, bm, "rgba(128,0,0,0.75)", .34, "Back", -1, -1), oX(uw[0] + bi + c3.gap, uw[1], bi, bm, "rgba(128,0,128,0.75)", .31, "Custom", -1, -1), oX(uw[0] + 2 * (bi + c3.gap), uw[1], bi, bm, "rgba(" + (aB.aC ? 128 : 0) +
				",128,128,0.75)", .34, aB.aC ? "Reset" : "Maps", -1, -1), oX(uw[0] + uw[2] - bi, uw[1], bi, bm, "rgba(0,128,0,0.75)", .34, "Start", -1, -1), !aB.aC) {
			for (var dN, bn = uw[2] / 10, bi = (uw[2] - bn - 2 * c3.gap) / 2, cC = 0; cC < this.lW.length; cC++) dN = uw[1] + bm + c3.gap + cC * (bn + c3.gap), oX(uw[0], dN, bn, bn, 1 < this.lW.length ? "rgba(128,0,0,0.75)" :
				"rgba(90,90,90,0.75)", 0, null, -1), 1 < this.lW.length && aGD(uw[0], dN, bn, !1), oX(uw[0] + bn + c3.gap, dN, bi, bn, cd.ce, .4, this.aGE(cC), this.lW[cC].c1, -1), oX(uw[0] + uw[2] - bi, dN, bi, bn, cd.ce, .4, this.a1t(cC), -
				1, this.lW[cC].pZ);
			this.lW.length < 8 && (dN = uw[1] + bm + c3.gap + this.lW.length * (bn + c3.gap), oX(uw[0], dN, bn, bn, "rgba(0,128,20,0.75)", 0, null, -1, -1), aGD(uw[0], dN, bn, !0)), aG9.bv && aG9.cY()
		}
	}, this.aGE = function(cC) {
		return 0 === cC && 1 === this.lW[cC].pZ ? "You" : ad.aCt[this.lW[cC].c1]
	}, this.a1t = function(cC) {
		return 1 === this.lW[cC].pZ ? "1 Player" : this.lW[cC].pZ + " Players"
	}
}

function aGI() {
	this.aGJ = -1, this.aM = function() {
		this.aGJ = -1
	}, this.fx = function() {
		-1 !== this.aGJ && eq.ni.nj(this.aGJ)
	}, this.il = function(player) {
		return !!ax.ij(player) && (1 === kd ? (this.aGJ = player, bO.n && bO.s && bO.y.fx()) : (az.a1K(player, player === bO.g ? 21 : 22), 8 === bO.w ? this.aGJ = 1 - player : bO.n ? (a2m(player), aCk(), bO.s && bO.y.fx()) : this.aGK(player)), !
			0)
	}, this.kR = function(player) {
		1 === bO.p && 0 !== aN.bN[player] && 2 !== aN.jN[player] && (8 === bO.w ? this.aGJ = 1 - player : this.aGK(player)), bO.i--, bO.k--, az.a1K(player, 4), cR.gv.jn(2) && aw.bP(!0)
	}, this.aGK = function(player) {
		bO.s ? (a2m(player), aCk()) : bA.aGL(player)
	}
}

function a6p() {
	function aGN() {
		if (2 === bO.p) return 1;
		au.aGQ(), bO.p = 2, bO.k = bO.i
	}

	function aGO() {
		eq.result.aC7(), eq.result.aCC(), az.a2L(!0), az.a0L(247, 0), ap.bP(!0), aw.bP(!0), au.bP(), at.aB7(), bO.o && bE.uo.nk(), bE.bI = !0, aW.aET(), bJ.bK.setState(0)
	}
	this.aGM = function() {
		aGN() || (bO.a1 = 2, eq.result.aC6(), az.a1K(0, 59), bL.ub(2700), b2.show(!1, !1, !0), aGO())
	}, this.nj = function(a1p) {
		aGN() || (bO.a1 = 1, 8 === bO.w ? (bO.a3 = a1p < 0 ? aN.d0[0] >= aN.d0[1] ? 0 : 1 : a1p, bO.a2 = +(bO.a3 === bO.g), bO.a2 ? az.a1K(bO.a3, 2) : az.a1K(1 - bO.g, 3), bO.z.aDe(bO.a3)) : bO.u ? (bO.a2 = +(aR.eo[bO.g] === aj.aGP()), 9 === bO
			.w && az.a1x()) : (bO.a3 = a8m[0], bO.a2 = +(bO.a3 === bO.g), az.a1o(bO.a3)), b2.show(1 === bO.a2, !1), aGO())
	}
}

function aGR() {
	this.aM = function() {
		! function() {
			var data = fa.hr.data;
			0 === data[2].im && (c0.bh > c0.bg || 0 !== bJ.id) && (data[2].value = data[2].aCI = 1);
			0 === data[100].im && (data[100].value = data[100].aCI = (0 === bJ.id ? "Player " : 1 === bJ.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()));
			data[0].value = data[0].aCI = he.aGU()
		}();
		var cC, lV, data = fa.hr.data,
			cx = data.length;
		for (cC = 0; cC < cx; cC++) data[cC] && data[cC].im === fa.hy.mA(cC, !0) && (lV = fa.hy.mB(cC), data[cC].value = null === lV ? data[cC].aCI : 2 === data[cC].type ? lV : Number(lV));
		fa.hr.data[10].value = fa.hr.data[10].aCI
	}
}

function aGV(fB) {
	var ha, hb, hc;
	this.show = function() {
		ha.show(), this.resize()
	}, this.cB = function() {
		ha.cB()
	}, this.resize = function() {
		ha.resize(), hb.resize()
	}, this.hw = function(gk) {
		2 === gk && ha.hx[0].hy()
	}, ha = new hd("🛠️ List Options", [new hg("❌ " + he.hf[92], function() {
		bZ.t4(10)
	})]), hb = new hl(ha.hm, ((hc = []).push(function() {
		function tH() {
			var eT = Math.floor(tG.dB.value),
				eU = Math.floor(tF.dB.value);
			return {
				tI: Math.min(eT, eU),
				tJ: Math.max(eT, eU)
			}
		}

		function tB() {
			var tK = ((tK = tH()).tJ - tK.tI + 2) / 100;
			t9.button.innerHTML = cR.cS.tD(t9.button.innerHTML, tK)
		}
		var t9, hn = new ho,
			tF = new fV(fa.hr.data[132], 1, function() {
				t9.button.click()
			}),
			tG = new fV(fa.hr.data[131], 1, function() {
				tF.dB.focus()
			});
		hn.hp("Start Index"), hn.hu(tG), tG.dB.style.marginBottom = "0.5em", hn.hp("End Index"), hn.hu(tF), t9 = new hg("Go (🧈 2.01)", function() {
			var tK = tH();
			bZ.ba(8, bZ.fT().g2, new ir(21, {
				eS: fB.eS,
				eT: tK.tI,
				eU: tK.tJ
			}))
		});
		return tG.dB.addEventListener("input", tB), tF.dB.addEventListener("input", tB), tB(), hn.hu(new tE([t9.button])), hn
	}()), hc.push(function() {
		function tB() {
			var tC = (5 + Math.max(Math.abs(Math.floor(tF.dB.value)), 1)) / 100;
			t9.button.innerHTML = cR.cS.tD(t9.button.innerHTML, tC)
		}
		var t9, hn = new ho,
			tF = new fV(fa.hr.data[134], 1, function() {
				t9.button.click()
			}),
			tG = new fV(fa.hr.data[133], 0, function() {
				tF.dB.focus()
			});
		hn.hp("Search"), hn.hu(tG), tG.dB.style.marginBottom = "0.5em", hn.hp("Matches"), hn.hu(tF), t9 = new hg("Go (🧈 0.10)", function() {
			var eZ = tG.dB.value.slice(0, 20),
				ea = Math.abs(Math.floor(tF.dB.value));
			bZ.ba(8, bZ.fT().g2, new ir(22, {
				eS: fB.eS,
				eZ: eZ,
				ea: ea
			}))
		});
		return tF.dB.addEventListener("input", tB), tB(), hn.hu(new tE([t9.button])), hn
	}()), hc))
}

function iP() {
	aGX() ? (aGY(), i3 !== bO.b && aGZ()) : iM()
}

function aGZ() {
	aGa(), aGb(aN.dl[i3]), aGb(aN.jP[i3]), aGc(aN.dU[i3]), aGd(aN.jP[i3]), aGd(aN.jQ[i3]), aGe(), aGf()
}

function aGY() {
	iA = !0, b7.hT(i0, hz, i1), aN.d0[i0] += i4, aGg(), aGh()
}

function aGX() {
	return (i3 === bO.b ? aGi : aGj)()
}

function aGj() {
	var aGk = i4 * bO.f,
		aGl = aGm(),
		aGn = aGo(),
		aGl = aGk + 2 * aGl + aGn,
		aGq = i2 * i4;
	return aGl < aGq ? (i1 -= aGl, aGr(aGl - aGk, aGn), !0) : (i1 -= aGq, aGr(aGq - aGk, aGn), !1)
}

function aGr(aGq, aGn) {
	if (0 < aGn) {
		if (!(aGn <= aGq)) return b7.aGs(i3, i0, aGn - aGq), void(aGq = 0);
		b7.aGs(i3, i0, 0), aGq -= aGn
	}
	aGq = cA(aGq, 2), aN.dj[i3] >= aGq ? aN.dj[i3] -= aGq : aN.dj[i3] = 0
}

function aGo() {
	return b7.eE(i3, i0)
}

function aGm() {
	return kL.lk(i4 * aN.dj[i3], 1 + kL.lk(10 * aN.d0[i3], 16))
}

function aGi() {
	return i1 -= i4 * bO.f, !0
}

function aGh() {
	for (var cC = i4 - 1; 0 <= cC; cC--) aN.dU[i0].push(i6[cC]), aN.dl[i0].push(i6[cC]), aZ.iR(i6[cC], i0)
}

function a4P() {
	this.cY = function() {
		if (0 !== al.bT.x2 && (cc.globalAlpha = Math.min(al.bT.x2 / 580, 1), cc.drawImage(al.bT.x3, 1 + aq.hM(), 1 + aq.hN()), cc.globalAlpha = 1, bO.s)) {
			for (var dM = cF / cG, dN = cI / cG, dO = (c0.bg + cF) / cG, dP = (c0.bh + cI) / cG, iU = al.bT.x1 * cG, x4 = al.bT.x4, cC = bO.h - 1; 0 <= cC; cC--) ! function(cC, iU, dM, dN, dO, dP, x4) {
				var highlight = settings.highlightClanSpawns && clanFilter.inOwnClan[cC];
				if (highlight) iU *= 2;
				0 === aN.bN[cC] || 0 === aN.d0[cC] || (dO = c0.bg * ((aN.eJ[cC] + aN.eI[cC] + 1) / 2 - dM) / (dO - dM) - .5 * iU, dM = c0.bh * ((aN.eM[cC] + aN.eL[cC] + 1) / 2 - dN) / (dP - dN) - .5 * iU, dO > c0.bg) || dM > c0.bh || dO < -
					iU || dM < -iU || (cc.setTransform(highlight ? cG * 2 : cG, 0, 0, highlight ? cG * 2 : cG, dO, dM), cc.drawImage(x4[bO.u ? aR.eo[cC] : 1], 0, 0))
			}(cC, iU, dM, dN, dO, dP, x4);
			cc.setTransform(cG, 0, 0, cG, 0, 0)
		}
	}
}

function aGw() {
	var kl, bg, cb, aGx, aGy, ex, kp, tk, cj, aGz, aH0, aH1, aH2;
	this.ca = 0, this.bh = 0, this.aM = function() {
		aGy = bO.e, aH0 = "rgba(0,100,0,0.8)", aH1 = "rgba(150,0,0,0.8)", tk = !(aGz = !0), cj = aN.dj[bO.g], this.resize()
	}, this.resize = function() {
		bg = Math.floor((bJ.bK.c2() ? .305 : .24) * c0.ge), this.bh = Math.floor(.5 + .13 * bg), bg = Math.floor(6 * this.bh), kl = cR.cU.cV(1, Math.floor(.8 * this.bh)), aH2 = Math.floor(.5 * this.bh), cJ.sE.font = kl, cb = c3.gap, aGx = Math
			.floor(1 + .13 * this.bh), (ex = document.createElement("canvas")).width = bg, ex.height = this.bh, (kp = ex.getContext("2d", {
				alpha: !0
			})).font = kl, cR.cU.textBaseline(kp, 1), cR.cU.textAlign(kp, 1), this.aH3()
	}, this.uG = function() {
		return bJ.bK.c2() && c0.bg < 1.2 * c0.bh
	}, this.qT = function() {
		this.uG() ? this.ca = c0.bg - bg - c3.gap : this.ca = Math.floor(ap.a9k() + (c0.bg - ap.a9k() - aw.bg - bg) / 2 - .5 * c3.gap)
	}, this.bP = function() {
		tk && (tk = !1, this.aH3())
	}, this.aH3 = function() {
		kp.clearRect(0, 0, bg, this.bh), kp.fillStyle = aGz ? aH0 : aH1, kp.fillRect(0, 0, bg, this.bh), kp.fillStyle = cd.sb, this.aH4(), this.aH5(), kp.fillStyle = aN.dj[bO.g] >= aX.lR(bO.g) ? cd.aH6 : cd.co, kp.fillText(cR.cS.cT(cj), Math
			.floor(bg / 2), aH2), kp.fillStyle = cd.co, kp.fillRect(0, 0, bg, 1), kp.fillRect(0, 0, 1, this.bh), kp.fillRect(0, this.bh - 1, bg, 1), kp.fillRect(bg - 1, 0, 1, this.bh)
	}, this.aH4 = function() {
		var c9 = wm(Math.floor((aX.dL() - 1) * this.bh / 9), this.bh - aGx);
		kp.fillRect(0, c9, aGx, this.bh - c9), kp.fillRect(bg - aGx, c9, aGx, this.bh - c9)
	}, this.aH5 = function() {
		kp.fillRect(aGx, this.bh - aGx, Math.floor((bg - 2 * aGx) * aN.dj[bO.g] / aGy), aGx)
	}, this.fx = function() {
		0 !== aN.bN[bO.g] && 2 !== aN.jN[bO.g] && cj !== aN.dj[bO.g] && (aGy = rx(aN.dj[bO.g], aGy), aGz = aN.dj[bO.g] > cj && 10 <= aN.dj[bO.g], cj = aN.dj[bO.g], tk = !0)
	}, this.cY = function() {
		0 === aN.bN[bO.g] || bO.s || 2 === aN.jN[bO.g] || cc.drawImage(ex, this.ca, cb)
	}
}

function aH7() {
	this.fc = function(bt, value) {
		fa.hr.data[bt].value !== value && (fa.hr.a5V(bt, value), 0 === bt ? (bZ.hi(), he.aM(), bZ.ba(2)) : 1 === bt ? c0.a6J(1) : 2 === bt ? c0.a6J(0) : 5 === bt && (cR.cU.tW(), c0.a6J(0)))
	}, this.hj = function() {
		for (var data = fa.hr.data, cC = 0; cC < 100; cC++) data[cC] && fa.hr.a5V(cC, data[cC].aCI);
		cR.cU.tW(), c0.a6J(1), he.aM()
	}, this.a5Q = function() {
		for (var data = fa.hr.data, cC = 0; cC < data.length; cC++) data[cC] && fa.hr.fc(cC, data[cC].aCI)
	}
}

function aH8() {
	var aH9, aHA, aHB;

	function aHG(cC) {
		var button = oT.v4[cC],
			ca = button.ca,
			cb = button.cb,
			bg = button.bg,
			bh = button.bh;
		cc.fillStyle = button.aHE, cc.fillRect(ca, cb, bg, bh), cC === aH9 && (cc.fillStyle = aHB, cc.fillRect(ca, cb, bg, bh)), cc.lineWidth = c3.mg, cc.strokeStyle = aHA, cc.strokeRect(ca, cb, bg, bh),
			function(button) {
				var ca = button.ca,
					cb = button.cb,
					bg = button.bg,
					bh = button.bh;
				cR.cU.textAlign(cc, 1), cR.cU.textBaseline(cc, 1), cc.font = button.font, cc.fillStyle = aHA, cc.fillText(button.hf, Math.floor(ca + bg / 2), Math.floor(cb + bh / 2 + .1 * button.fontSize))
			}(button)
	}
	this.bg = 0, this.bh = 0, this.cb = 0, this.gap = 0, this.aM = function() {
		aH9 = -1, aHA = cd.co, aHB = "rgba(255,255,255,0.16)", this.v4 = new Array(7), this.bh = Math.floor((bJ.bK.c2() ? .123 : .093) * c0.ge), this.bg = Math.floor((bJ.bK.c2() ? 3.96 : 4.2) * this.bh), this.gap = Math.floor(.025 * this.bg);
		var aHC = Math.floor(.26 * this.bh),
			aHD = cR.cU.cV(1, aHC);
		this.v4[0] = {
			ca: 0,
			cb: 0,
			bg: Math.floor(.6 * this.bg - this.gap / 2),
			bh: this.bh,
			hf: "Multiplayer",
			font: aHD,
			aHE: "rgba(22,88,22,0.8)",
			fontSize: aHC
		}, aHC = Math.floor(.18 * this.bh), aHD = cR.cU.cV(1, aHC), this.v4[1] = {
			ca: 0,
			cb: 0,
			bg: this.bg - this.v4[0].bg - this.gap,
			bh: this.bh,
			hf: "Single Player",
			font: aHD,
			aHE: "rgba(22,88,88,0.8)",
			fontSize: aHC
		}, this.v4[2] = {
			ca: 0,
			cb: 0,
			bg: this.bg,
			bh: Math.floor(.3 * this.bh),
			hf: "",
			font: this.v4[1].font,
			aHE: "rgba(100,0,0,0.8)",
			fontSize: this.v4[1].fontSize
		}, this.v4[3] = {
			ca: 0,
			cb: 0,
			bg: this.bg,
			bh: this.bh,
			hf: "Back",
			font: this.v4[0].font,
			aHE: "rgba(0,0,0,0.8)",
			fontSize: this.v4[0].fontSize
		}, this.v4[4] = {
			ca: 0,
			cb: 0,
			bg: this.bg,
			bh: Math.floor(.3 * this.bh),
			hf: "The game was updated!",
			font: this.v4[1].font,
			aHE: "rgba(100,0,0,0.8)",
			fontSize: this.v4[1].fontSize
		}, this.v4[5] = {
			ca: 0,
			cb: 0,
			bg: this.v4[0].bg,
			bh: Math.floor(.8 * this.bh),
			hf: "Reload",
			font: this.v4[0].font,
			aHE: "rgba(0,100,0,0.8)",
			fontSize: this.v4[0].fontSize
		}, this.v4[6] = {
			ca: 0,
			cb: 0,
			bg: this.v4[1].bg,
			bh: this.v4[5].bh,
			hf: "Back",
			font: this.v4[0].font,
			aHE: "rgba(0,0,0,0.8)",
			fontSize: this.v4[0].fontSize
		}, this.a4o()
	}, this.a4o = function() {
		this.cb = Math.floor(.54 * c0.bh), this.v4[0].ca = Math.floor(.5 * c0.bg - .5 * this.bg), this.v4[1].ca = this.v4[0].ca + this.v4[0].bg + this.gap, this.v4[2].ca = this.v4[3].ca = this.v4[0].ca, this.v4[4].ca = this.v4[5].ca = this.v4[0]
			.ca, this.v4[6].ca = this.v4[1].ca, this.v4[0].cb = Math.floor(.54 * c0.bh), this.v4[1].cb = this.v4[0].cb, this.v4[2].cb = Math.floor((c0.bh - this.v4[2].bh - this.v4[3].bh - this.gap) / 2), this.v4[3].cb = this.v4[2].cb + this.v4[2]
			.bh + this.gap, this.v4[4].cb = Math.floor((c0.bh - this.v4[4].bh - this.v4[5].bh - this.gap) / 2), this.v4[5].cb = this.v4[6].cb = this.v4[4].cb + this.v4[4].bh + this.gap
	}, this.aHF = function() {
		aHG(0), aHG(1)
	}, this.aHH = function() {
		aHG(2), aHG(3)
	}, this.aHI = function() {
		aHG(4), aHG(5), aHG(6)
	}, this.cM = function(ca, cb, bP) {
		var cC = -1;
		return 0 === bY.gB() ? cC = this.mm(ca, cb, 0, 2) : 3 === bY.gB() ? cC = this.mm(ca, cb, 3, 1) : 5 === bY.gB() && (cC = this.mm(ca, cb, 5, 2)), aH9 !== cC && (aH9 = cC, bP) && (bE.bI = !0), -1 !== cC && (xa.xO(), !0)
	}, this.mm = function(ca, cb, a17, size) {
		for (var cC = a17; cC < a17 + size; cC++)
			if (ca >= this.v4[cC].ca && cb >= this.v4[cC].cb && ca <= this.v4[cC].ca + this.v4[cC].bg && cb <= this.v4[cC].cb + this.v4[cC].bh) return cC;
		return -1
	}
}

function tT() {
	this.vK = function(aHK, bt, vJ) {
		var go = aHK.height,
			gp = cR.cU.gj(go, go),
			gq = cR.cU.getContext(gp);
		return function(bg, gq, vJ) {
			gq.fillStyle = vJ, gq.beginPath(), gq.arc(bg / 2, bg / 2, .47 * bg, 0, 2 * Math.PI), gq.fill()
		}(go, gq, vJ), gq.drawImage(aHK, -bt * go, 0), gp
	}, this.aHM = function(aHN) {
		var go = aHN.height,
			gq = cR.cU.getContext(aHN, !0),
			gr = gq.getImageData(0, 0, go, go);
		return cR.fD.aEI(gr.data, go, go, .9), gq.putImageData(gr, 0, 0), aHN
	}
}

function aHO() {
	var gk = cR.color;
	this.l6 = gk.pT(0, 0, 0), this.fY = gk.to(0, 0, 0, .7), this.oY = gk.to(0, 0, 0, .5), this.mL = gk.to(0, 0, 0, .85), this.ce = gk.to(0, 0, 0, .75), this.tu = gk.to(0, 0, 0, .6), this.m7 = gk.to(0, 0, 0, .35), this.co = gk.pT(255, 255, 255), this
		.a9p = gk.to(255, 255, 255, .3), this.sb = gk.to(255, 255, 255, .6), this.dE = gk.to(255, 255, 255, .4), this.a53 = gk.to(255, 255, 255, .25), this.l4 = gk.to(255, 255, 255, .85), this.aHP = gk.to(255, 255, 255, .75), this.aHQ = gk.to(255,
			255, 255, .15), this.tx = gk.pT(128, 128, 128), this.m6 = gk.to(64, 64, 64, .75), this.tm = gk.to(88, 88, 88, .83), this.aHR = gk.to(60, 60, 60, .85), this.xN = gk.to(80, 60, 60, .85), this.d2 = gk.pT(30, 255, 30), this.d1 = gk.pT(0, 200,
			0), this.ty = gk.pT(128, 255, 128), this.aHS = gk.to(10, 65, 10, .75), this.a8b = gk.to(0, 255, 0, .6), this.sN = gk.to(0, 255, 0, .5), this.cp = gk.to(0, 200, 0, .5), this.hh = gk.to(0, 100, 0, .75), this.sV = gk.to(0, 60, 0, .8), this
		.a9n = gk.to(0, 255, 0, .3), this.vE = gk.to(0, 180, 0, .6), this.op = gk.to(0, 120, 0, .85), this.tz = gk.pT(0, 120, 0), this.xK = gk.to(0, 70, 0, .85), this.sa = gk.pT(255, 120, 120), this.aH6 = gk.pT(255, 160, 160), this.d4 = gk.pT(255,
			70, 70), this.d3 = gk.pT(230, 0, 0), this.a4t = gk.to(220, 0, 0, .6), this.dG = gk.to(255, 100, 100, .8), this.a1n = gk.to(100, 0, 0, .85), this.aDc = gk.to(60, 0, 0, .85), this.vF = gk.to(200, 0, 0, .6), this.j5 = gk.to(120, 0, 0, .85),
		this.a1j = gk.pT(255, 70, 10), this.xL = gk.to(0, 60, 60, .85), this.cq = gk.to(10, 60, 60, .9), this.uy = gk.to(0, 96, 96, .75), this.sZ = gk.pT(160, 160, 255), this.a9l = gk.to(0, 40, 90, .75), this.vH = gk.to(0, 0, 255, .6), this.aHT = gk
		.pT(200, 200, 255), this.a8d = gk.pT(255, 120, 100), this.sO = gk.to(255, 255, 0, .5), this.a9o = gk.to(255, 255, 150, .2), this.a24 = gk.pT(255, 255, 0), this.a1m = gk.pT(255, 255, 200), this.vG = gk.to(200, 200, 0, .6), this.aHU = gk.to(
			140, 120, 0, .75), this.aHV = gk.to(180, 160, 40, .75), this.xM = gk.to(70, 50, 20, .85), this.aDK = gk.to(255, 140, 0, .75), this.aHW = gk.to(0, 0, 0, 0)
}

function aHX() {
	this.aC7 = function() {}
}

function tf() {
	var aHY = new Uint8Array(78);
	this.aM = function() {
		var cC;
		for (aHY[50] = 37, cC = 0; cC < 10; cC++) aHY[cC + 3] = cC + 1;
		for (cC = 0; cC < 26; cC++) aHY[cC + 20] = cC + 11, aHY[cC + 52] = cC + 38
	}, this.aHZ = function(f8) {
		return f8.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "_")
	}, this.aAJ = function(f8, size) {
		if ((f8 = this.aHZ(f8)).length > size) return f8.substring(0, size);
		for (; f8.length < size;) f8 += "_";
		return f8
	}, this.aHa = function(f8) {
		for (var aHb = aHY, cx = f8.length, cr = new Uint8Array(cx), cC = 0; cC < cx; cC++) cr[cC] = aHb[f8.charCodeAt(cC) - 45];
		return cr
	}, this.aHc = function(a7d) {
		eV.af(6 * a7d.length), this.aHd(a7d), gR.aM(eV.eX)
	}, this.aHd = function(a7d) {
		for (var cx = a7d.length, bg = eV, cC = 0; cC < cx; cC++) bg.eW(6, a7d[cC])
	}, this.ej = function(f8) {
		this.aHd(this.aHa(f8))
	}, this.yd = function(f8, size) {
		this.aHd(this.aHa(this.aAJ(f8, size)))
	}
}

function aHe() {
	this.og = ["", ""], this.hf = ["Kabul Et", "{0} silindi.", "{0} tarafından silindiniz.", "Tebrikler! Oyunu kazandınız.", "{0} oyunu kazandı.", "{0} saldırmazlık paktını bozdu.", "{0} sana saldırıyor!", "Başlangıç pozisyonunuzu seçin!",
		"Teslim oldunuz!", "Oyun berabere bitti!", "Hata: {0}", "New Game Update", "{0} ölümsüzleştirildi!", "Sahipsiz Arazi {0}", "Oyuncu: {0}   Bakiye: {1}   Bölge: {2}   Koordinatlar: {3}", "Dağlar {0}", "Su {0}",
		"Gemi Sahibi: {0}   Güç: {1}", " {0} için Mesaj: ", "{0}: ", "İnsanlık zafer kazandı! Ölüler geri püskürtüldü.", "Direniş", "İnsanlığın çağı sona erdi, durdurulamayan ölülerin akını tarafından istila edildi.", "Virüs",
		"Barışa razı olmak oyunu beraberlikle sonuçlandırır!", "{0} ile saldırmazlık anlaşması imzaladınız.", "{0} ile saldırmazlık anlaşması imzalamasını istediniz.", "{0} saldırmazlık anlaşmasını kabul etti.",
		"{0} saldırmazlık anlaşması talep etti.", "{0} oyuncuya {1}'e saldırması için istekte bulundunuz.", "{0}, {1}'e saldırması için istekte bulundunuz.", "{0}, {1}'e saldırmanızı istedi.", "Bakiyeniz çok düşük!",
		"{0} kaynak {1}'e ihraç ettiniz.", "{0} birim vergi kesintisi yapıldı.", "{0}, {1} kaynak ile sizi destekledi.", "Bir bot ({0}), {1} kaynak ile sizi destekledi.", "Harita: {0}", "Boyut: {0}x{1}", "Toplam Pikseller: {0}",
		"Arazi: {0} ({1})", "Su: {0} ({1})", "Dağlar: {0} ({1})", "İnsan oyunculara karşı tam gönderim engellendi.", "{0} ve diğer {1} oyuncu silindi.", "{0} ve diğer {1} oyuncu oyunu terk etti.", "{0} ve diğer {1} oyuncu teslim oldu.",
		"{0}, {1} tarafından silindi.", "{0} oyunu terk etti.", "{0} teslim oldu.", "{0} oyunu katıldı.", "Sunucudan Yanıt Yok", "Hesap başarıyla kaydedildi!", "Hesap", "Sunucu Bulunamadı", "Oyun için teşekkürler.", "Lütfen çerezleri kabul edin",
		"Geçersiz Şifre Formatı", "Geçersiz Yeniden Oynatma Formatı", "Lobi Zaman Aşımı", "Geçersiz Kullanıcı Adı", "{4224}Lobby Error", "İstemci Yanıtı Yok", "Tanımsız", "Hata", "LİDER TABLOSU", "YENILDINIZ", "SİZİ İHALE ETTİRENLER",
		"OYUNU KAZANAN", "HARİTA:", "İnsanlar", "Oyuncular", "Botlar", "İzleyiciler", "Eşik", "Meslek", "Faiz Oranı", "Gelir", "Zaman", "Oyundan Çık", "Daha Fazla", "Ayarlar", "Yeniden Oyna", "Bağlantılar", "Oyun Versiyonu", "Verileri Sil",
		"Gizlilik Ayarları", "Kapat", "Oyun İstatistikleri", "Teslim Ol", "Oyunu Yeniden Başlat", "Menü", "Geri", "Tümünü Seç", "Kopyala", "Temizle", "Başlat", "Kaydet & Kapat", "Sıfırla", "Bilgi",
		"Çözünürlüğü artırmanın, minimum yazı tipi boyutunu küçültmenin ve metin işleme hızını artırmanın sistem üzerinde yük oluşturabileceği ve oyun tepkiselliğini azaltabileceği konusunda uyarı.", "Dil", "Çözünürlük", "Mobil Dostu",
		"Yazı Tipi", "Kullanıcı Adlarını Gizle", "Bakiyeyi Yukarıda Göster", "Yakınlaştırma Düğmelerini Gizle", "Minimum Yazı Tipi Boyutu", "Lobi", "Metin İşleme Hızı", "Düşük", "Orta", "Yüksek", "Çok Yüksek", "Küçük", "Çok Küçük", "Proxy Lobi",
		"Yavaş", "Normal", "Hızlı", "Etkin", "Yeni Oyun Güncellemesi", "Oyun güncellendi! Lütfen oyunu yeniden yükle.", "Yeniden Yükle", "Hesabım", "Hesabı Sil", "", "", "Barış üzerinde anlaşılırsa, en büyük toprak sahibi oyunu kazanır."
	]
}

function tR() {
	this.sY = function(f8, font, maxWidth) {
		if (cc.font = font, cc.measureText(f8).width <= maxWidth) return f8;
		for (var cC = f8.length - 1; 1 <= cC; cC--)
			if (f8 = f8.substring(0, cC), cc.measureText(f8 + "...").width <= maxWidth) return f8 + "...";
		return "..."
	}
}

function aHf() {
	this.mg = 0, this.gap = 0, this.a56 = 0, this.jD = 0, this.aM = function() {
		this.resize()
	}, this.resize = function() {
		this.mg = .0022 * cR.cU.ok(.5) * c0.ge, this.a56 = this.mg / c0.ma, this.gap = Math.max(Math.floor((bJ.bK.c2() ? .0114 : .01296) * c0.ge), 2), this.jD = this.gap / c0.ma
	}
}

function aHg() {
	var qE = 0;
	this.aM = function() {
		oT.aM(), qE = 0
	}, this.setState = function(aHh) {
		qE = aHh
	}, this.gB = function() {
		return qE
	}, this.wE = function() {
		this.setState(8), qL.qM(), bZ.hi()
	}, this.hw = function(dB) {
		if (!cJ.aBd) return !1;
		if (!(bE.dH < 400)) {
			if ("Enter" === dB.key || "Escape" === dB.key) {
				if (this.aHi()) return !0;
				if ("Enter" === dB.key) {
					if (0 === qE) return !0;
					if (7 === qE) return !0
				}
			}
			return !1
		}
	}, this.a6M = function() {
		aHj.resize()
	}, this.aHi = function() {
		return !!aHj.cB()
	}, this.c5 = function(ca, cb) {
		!cJ.aBd || aHj.c5(ca, cb) || 6 === qE && qH.c5(ca, cb) || 2 === qE && aH.c5(ca, cb) || (xa.c5(ca, cb), 0 !== qE && 7 === qE && qL.c5(ca, cb))
	}, this.cM = function(ca, cb) {
		if (!xa.a4h) {
			if (2 === qE && aH.cM(ca, cb)) return void xa.xO();
			if (oT.cM(ca, cb, !0)) return
		}
		xa.cM(ca, cb)
	}, this.click = function(ca, cb) {
		xa.cO(), fM.c5(ca, cb, !1)
	}, this.mn = function(ca, cb, deltaY) {}, this.a6N = function() {
		oT.a4o(), 0 !== qE && 7 === qE && qL.resize(), bE.bI = !0
	}, this.cY = function() {
		8 !== qE && 10 !== qE && (cc.imageSmoothingEnabled = !0, this.ga(), 0 !== qE && (xa.cY(), xb.cY(), this.xZ(), fM.cY()), 0 !== qE && (2 === qE ? aH.cY() : 6 === qE ? qH.cY() : 7 === qE && qL.cY()), aHj.cY(), bZ.cY())
	}, this.ga = function() {
		var aHl, aHk;
		if (makeMainMenuTransparent) cc.clearRect(0, 0, c0.bg, c0.bh);
		else cJ.aBd ? (aHk = c0.bg / cJ.cK, aHl = c0.bh / cJ.cL, cc.setTransform(aHk = aHl < aHk ? aHk : aHl, 0, 0, aHk, Math.floor((c0.bg - aHk * cJ.cK) / 2), Math.floor((c0.bh - aHk * cJ.cL) / 2)), cc.drawImage(cJ.sD, 0, 0), cc.setTransform(1,
			0, 0, 1, 0, 0), cc.fillStyle = cd.oY) : cc.fillStyle = cd.l6, cc.fillRect(0, 0, c0.bg, c0.bh)
	}, this.xZ = function() {
		var cb = Math.floor(.3 * c0.bh),
			ex = gc.f1("territorial.io"),
			bz = (bz = 1.75 * c0.bh / ex.width) * ex.width < .98 * c0.bg ? .98 * c0.bg / ex.width : bz,
			ca = (cc.globalAlpha = .15, cc.imageSmoothingEnabled = !1, Math.floor(.5 * (c0.bg - bz * ex.width))),
			ca = Math.floor(ca / bz),
			cb = Math.floor(cb - .5 * ex.height * bz),
			cb = Math.floor(cb / bz);
		cc.setTransform(bz, 0, 0, bz, ca, cb), cc.drawImage(ex, ca, cb), cc.setTransform(1, 0, 0, 1, 0, 0), cc.globalAlpha = 1, cc.imageSmoothingEnabled = !0
	}
}

function aHm() {
	this.g0 = function(g1, ft) {
		eV.af(8), eV.eW(1, 0), eV.eW(6, 4), eV.eW(1, ft ? 1 : 0), bS.bT.send(g1, eV.eX)
	}, this.aBO = function() {
		eV.af(58), eV.eW(1, 0), eV.eW(6, 5), eV.eW(8, bS.bT.fw()), eV.eW(10, wz.gM), eV.eW(9, wz.gN), eV.eW(10, lt), eV.eW(14, aBv.wQ), bS.bT.send(bS.bT.eu, eV.eX)
	}, this.mp = function(gl) {
		eV.af(27), eV.eW(1, 1), eV.eW(4, 0), eV.eW(22, gl), bS.bT.send(bS.bT.eu, eV.eX)
	}, this.mr = function(js, dg) {
		eV.af(25), eV.eW(1, 1), eV.eW(4, 1), eV.eW(10, js), eV.eW(10, dg), bS.bT.send(bS.bT.eu, eV.eX)
	}, this.ms = function(js, k0) {
		eV.af(24), eV.eW(1, 1), eV.eW(4, 2), eV.eW(10, js), eV.eW(9, k0), bS.bT.send(bS.bT.eu, eV.eX)
	}, this.mu = function(js, gl) {
		eV.af(37), eV.eW(1, 1), eV.eW(4, 3), eV.eW(10, js), eV.eW(22, gl), bS.bT.send(bS.bT.eu, eV.eX)
	}, this.mw = function(kD, gl) {
		eV.af(37), eV.eW(1, 1), eV.eW(4, 4), eV.eW(10, kD), eV.eW(22, gl), bS.bT.send(bS.bT.eu, eV.eX)
	}, this.mx = function(dg) {
		eV.af(15), eV.eW(1, 1), eV.eW(4, 5), eV.eW(10, dg), bS.bT.send(bS.bT.eu, eV.eX)
	}, this.mz = function(bt) {
		eV.af(15), eV.eW(1, 1), eV.eW(4, 6), eV.eW(10, bt), bS.bT.send(bS.bT.eu, eV.eX)
	}, this.n0 = function(kP) {
		eV.af(6), eV.eW(1, 1), eV.eW(4, 7), eV.eW(1, kP), bS.bT.send(bS.bT.eu, eV.eX)
	}, this.n1 = function() {
		eV.af(5), eV.eW(1, 1), eV.eW(4, 8), bS.bT.send(bS.bT.eu, eV.eX)
	}, this.aEK = function(aHn, aHo) {
		eV.af(24), eV.eW(1, 1), eV.eW(4, 15), eV.eW(9, aHo), eV.eW(10, aHn), bS.bT.send(bS.bT.eu, eV.eX)
	}, this.aEL = function(gS) {
		eV.af(14), eV.eW(1, 1), eV.eW(4, 14), eV.eW(9, gS), bS.bT.send(bS.bT.eu, eV.eX)
	}, this.aEM = function(aHp, target) {
		var cC, cx = aHp.length;
		for (eV.af(14 + 9 * cx), eV.eW(1, 1), eV.eW(4, 13), eV.eW(9, target), cC = 0; cC < cx; cC++) eV.eW(9, aHp[cC]);
		bS.bT.send(bS.bT.eu, eV.eX)
	}
}

function aFG() {
	var f8;
	10 === cJ.kw ? f8 =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === cJ.kw ? f8 =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === cJ.kw ? f8 =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === cJ.kw ? f8 =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === cJ.kw ? f8 =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === cJ.kw ? f8 =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === cJ.kw ? f8 =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === cJ.kw ? f8 =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === cJ.kw ? f8 =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === cJ.kw && (f8 =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new aHq).p0(f8)
}

function aHr() {
	this.bT = new fd, this.gC = new a4L, this.fz = new aHm, this.oN = new lr, this.eb = new aBr, this.aBM = new yW, this.aEN = new el, this.aD7 = new eQ, this.gS = new aFI, this.aFN = new yP, this.aFO = new aBG, this.aFP = new aCJ, this.aFQ =
		new aHs, this.aM = function() {
			this.bT.aM()
		}
}

function a5N() {
	var ha, hb, hc;
	this.show = function() {
		ha.show(), this.resize()
	}, this.cB = function() {
		ha.cB()
	}, this.resize = function() {
		ha.resize(), hb.resize()
	}, this.hw = function(gk) {
		2 === gk && ha.hx[0].hy()
	}, ha = new hd("🔑 " + he.hf[125], [new hg("💾 " + he.hf[97], function() {
		bZ.on()
	}, cd.hh)]), hb = new hl(ha.hm, ((hc = []).push(function() {
		var hn = new ho;
		return hn.hp("🧈 Gold"), hn.aAu("Balance: " + cR.cS.aDR(fa.hr.data[113].value, .01, 2)), hn.hq(
			"Play more multiplayer games to earn gold. Accounts without gold will be deleted. Each day, you will lose 🧈 0.50 or 0.01% of your balance, whichever amount is higher."), hn
	}()), hc.push(function() {
		var hn = new ho;
		return hn.hp("1v1 Rating"), hn.aAu("Elo: " + cR.cS.aDR(fa.hr.data[107].value, .1, 1) + "<br>Rank: " + (fa.hr.data[108].value + 1) + " / " + fa.hr.data[111].value + "<br>Played Games: " + fa.hr.data[112].value), hn
	}()), hc.push(function() {
		var hn = new ho,
			tA = (hn.hp("Account Name"), new fV(fa.hr.data[105]));
		return tA.dB.readOnly = !0, hn.hu(tA), hn.hu(new tE([new hg("Copy", function() {
			cR.cU.a5E(tA.dB), cR.cU.a5F(this)
		}).button])), hn
	}()), hc.push(function() {
		var hn = new ho,
			aAO = (hn.hp("Password"), new fV(fa.hr.data[106]));
		return aAO.dB.readOnly = !0, aAO.dB.type = "password", hn.hu(aAO), hn.hu(new tE([new hg("Show", function() {
			"Show" === this.innerText ? (this.innerText = "Hide", aAO.dB.type = "text") : (this.innerText = "Show", aAO.dB.type = "password")
		}).button, new hg("Copy", function() {
			cR.cU.a5E(aAO.dB), cR.cU.a5F(this)
		}).button])), hn.hu(new tE([new hg("Request New Password", function() {
			bZ.ba(8, bZ.fT().g2, new ir(15))
		}).button])), hn
	}()), hc.push(function() {
		var hn = new ho;
		return hn.hp("Account Options"), hn.hu(new tE([new hg("Log in to a Different Account", function() {
			bZ.ba(6, bZ.fT().g2)
		}).button])), hn.hu(new tE([new hg("Create New Account", function() {
			fa.fb.fc(105, ""), bZ.ba(8, bZ.fT().g2, new ir(18))
		}).button])), hn.hu(new tE([new hg("Delete Account: " + fa.hr.data[105].value, function() {
			bZ.ba(4, 0, new is("🗑️ Account Deletion", "Your account will start the deletion process but may be restored if you log in within 3 weeks.", !0, [new hg("❌ " + he.hf[92], function() {
				bZ.ba(7, bZ.a5O(7).g2)
			}), new hg("🗑️ Delete Account", function() {
				bZ.ba(8, bZ.a5O(7).g2, new ir(17))
			}, cd.j5)]))
		}, cd.j5).button])), hn
	}()), hc.push(function() {
		function aHz(bt) {
			for (var cC = 0; cC < 2; cC++) aHy[cC].mK(0 === bt ? cd.aHR : 0 === cC ? cd.j5 : cd.hh)
		}
		var aAv, aHy, hn = new ho;
		hn.hp("Saved Accounts"), hn.hq("Listed accounts may have been removed in the meantime due to insufficient funds."), fa.bT.aDi();
		return aHy = [new hg("🗑️ Remove From List", function() {
			var bt = Math.min(fa.hr.data[117].value, aAv.ta.length - 1);
			if (!(bt < 1)) {
				aAv.ta[bt].remove(), aAv.ta.splice(bt, 1);
				for (var cC = bt; cC < aAv.ta.length; cC++) aAv.ta[cC].name = "" + cC;
				fa.bT.aD8(bt), bt = fa.hr.data[117].value, aAv.ta[bt].textContent = aAv.ta[bt].textContent.replace("⚪", "🟢"), aHz(bt)
			}
		}, cd.aHR), new hg("➡️ Login", function() {
			var bt = Math.min(fa.hr.data[117].value, aAv.ta.length - 1);
			bt < 1 || (bt = fa.bT.aD9(bt), fa.fb.fc(105, bt.aDA), fa.fb.fc(106, bt.password), bZ.ba(8, bZ.fT().g2, new ir(18)))
		}, cd.aHR)], (aAv = new ht(fa.hr.data[117], aHz)).ta[0].style.marginTop = "0.5em", hn.hs(aAv), hn.hu(new tE([aHy[1].button])), hn.hu(new tE([aHy[0].button])), hn
	}()), function(hc) {
		var hn = new ho,
			aI3 = fa.hr.data[137].value,
			aI4 = (hn.hp("Primary Clan Stats"), hn.aAu("Clan: " + (aI3 ? "[" + fa.hr.data[135].value + "]" : "-")), hn.aAu("Monthly Points: " + cR.cS.aDR(aI3, .001, 3)), hn.aAu("Rank: " + (fa.hr.data[139].value + 1) + " / " + fa.hr.data[
				111].value), fa.hr.data[141].value),
			aI5 = (hn.aAu("Total Points: " + cR.cS.aDR(aI4, .01, 2)), fa.hr.data[143].value);
		hn.aAu("Won Games: " + aI5), hn.aAu("Avg. Points per Game: " + cR.cS.aDR(aI4 / Math.max(aI5, 1), .01, 3)), aI3 = fa.hr.data[138].value, hn.hp("Secondary Clan Stats", "0.8em"), hn.aAu("Clan: " + (aI3 ? "[" + fa.hr.data[136].value +
			"]" : "-")), hn.aAu("Monthly Points: " + cR.cS.aDR(aI3, .001, 3)), aI4 = fa.hr.data[142].value, hn.aAu("Total Points: " + cR.cS.aDR(aI4, .01, 2)), aI5 = fa.hr.data[144].value, hn.aAu("Won Games: " + aI5), hn.aAu(
			"Avg. Points per Game: " + cR.cS.aDR(aI4 / Math.max(aI5, 1), .01, 3)), hc.push(hn)
	}(hc), hc))
}

function xf() {
	this.aM = function() {
		0 === fa.hr.data[181].value && (fa.hr.a5V(180, Math.floor(Math.random() * kL.pow(30))), fa.hr.a5V(181, Math.floor((new Date).getTime() / 36e5)))
	}
}

function aI6() {
	var bh, ex, kp, aI7, aI8, aI9, aIA, tk, aIB, aIC, aID, aIE, a23 = !1,
		gp = (this.bv = !1, this.bg = 0, new Array(2));

	function cX() {
		var bg = au.bg,
			cs = (tk = !1, a9B(kp, bg, bh), Math.floor(bg / 2));
		1 === aI7 ? (kp.fillStyle = cd.a8b, kp.fillRect(cs, 0, cs, bh)) : -1 === aI7 && (kp.fillStyle = cd.a4t, kp.fillRect(0, 0, cs, bh)), a9C(kp, bg, bh, 2);
		var cs = (cs = Math.floor(.25 * bh)) < 2 ? 2 : cs,
			a2G = (kp.fillStyle = cd.aHP, Math.floor((bh - 4) * aI8[1] / aI9[1]));
		0 < a2G && kp.fillRect(2, bh - 2 - a2G, cs, a2G), 0 < (a2G = Math.floor((bh - 4) * aI8[0] / aI9[0])) && kp.fillRect(bg - 2 - cs, bh - 2 - a2G, cs, a2G);
		cs = (cs = Math.floor(bh / 8)) < 2 ? 2 : cs, qs(kp, Math.floor(.4 * bh), 0, bh, cs, .5, !1), qs(kp, Math.floor(bg - 1.4 * bh), 0, bh, cs, .5, !0), a2G = 1.1 * bh / gp[0].width;
		kp.imageSmoothingEnabled = !0, kp.setTransform(a2G, 0, 0, a2G, (bg - a2G * gp[0].width) / 2, -.05 * bh), kp.drawImage(gp[+a23], 0, 0), kp.setTransform(1, 0, 0, 1, 0, 0)
	}

	function wr() {
		tk = !0, aIB = 140, aI7 = 0, aIA = [], au.bv = !1, az.a0L(247, 0), aI8[0] = aI8[1] = 0
	}

	function hN() {
		return ar.a1a(az.a1X()) ? ar.cb - bh - c3.gap : at.a1a(az.a1Z()) ? at.hN() - bh - c3.gap : c0.bh - bh - a1b.tY() * c3.gap
	}
	this.fQ = function() {
		for (var cC = 0; cC < 2; cC++) gp[cC] = cR.ex.vK(gc.get(3), 8 - cC, cd.aHW), gp[cC] = cR.ex.aHM(gp[cC])
	}, this.aM = function() {
		aID = aIE = 0, this.bv = !1, tk = a23 = !1, aIB = 140, aI8 = [aI7 = 0, 0], aI9 = [1, 1], aIA = [], aIC = new Uint32Array(10), this.resize()
	}, this.resize = function() {
		bh = ar.bh, this.bg = 4 * bh, (ex = document.createElement("canvas")).width = this.bg, ex.height = bh, kp = ex.getContext("2d", {
			alpha: !0
		}), cX()
	}, this.bP = function() {
		tk && cX()
	}, this.c5 = function(ca, cb) {
		var dN;
		return !!this.bv && !(ca < c0.bg - this.bg - c3.gap || cb < (dN = hN()) || dN + bh < cb || (bO.o || aO.ik.kO(ca > c0.bg - c3.gap - this.bg / 2 ? 1 : 0), 0))
	}, this.fx = function() {
		if (0 < aIE) 0 === --aIE && wr();
		else if (this.bv) 270 == --aIB && 2 <= aID && function() {
			var cC;
			for (cC = kd - 1; 0 <= cC; cC--)
				if (aZ.n9(lU[cC])) return;
			return 1
		}() && (tk = !0, aI8[0] += aI9[0]), 180 === aIB && 3 * aI8[0] < aI9[0] ? wr() : aI8[0] >= aI9[0] ? a23 ? eq.ni.aGM() : eq.ni.nj(-1) : aI8[1] >= aI9[1] ? aIE = 4 : aIB <= 0 && wr();
		else if (function() {
				var cC;
				for (cC = 9; 0 <= cC; cC--) 12 < Math.abs(aIC[cC] - aN.d0[a8m[cC]]) && (aIB = 140), aIC[cC] = aN.d0[a8m[cC]];
				if (--aIB <= 0) return 1;
				return
			}()) {
			a23 = aIH.wp(), az.a22(a23), this.bv = !0, tk = !0, aIB = 360;
			for (var lV, cN = 0, cC = kd - 1; 0 <= cC; cC--) aZ.n9(lU[cC]) && (cN += aN.d0[lU[cC]]);
			a23 ? aI9[0] = Math.max(cA(3 * cN, 4), 1) : bO.u ? (lV = kL.lk(100 * aj.a8l(), bO.q), lV = 150 - (lV += 2 * Math.max(lV - 75, 0)), lV = kL.kM(lV, 0, 100), lV = kL.lk(lV * cN, 100), aI9[0] = Math.max(lV, 1)) : aI9[0] = Math.max(cA(3 *
				cN, 5), 1), aI9[1] = Math.max(cN - aI9[0], 1), aID++
		}
	}, this.aGQ = function() {
		this.bv && aI8[0] < aI9[0] && wr()
	}, this.kQ = function(player, aIK) {
		var cC, cN;
		if (this.bv) {
			for (cC = aIA.length - 1; 0 <= cC; cC--)
				if (aIA[cC] === player) return;
			az.a1d(200, aN.jM[player] + (aIK ? " voted for" : " rejected") + " peace.", 257, player, aIK ? cd.ty : cd.aH6, cd.ce, -1, !0), aIA.push(player), tk = !0, cN = bO.n ? aI9[0] : aN.d0[player], aIK ? aI8[0] += cN : aI8[1] += cN,
				player === bO.g && (aI7 = aIK ? 1 : -1)
		}
	}, this.cY = function() {
		var cb;
		this.bv && (cb = hN(), cc.drawImage(ex, c0.bg - this.bg - c3.gap, cb))
	}
}

function aIL() {
	this.aIM = [], this.aIN = [], this.aM = function() {
		this.aIM = [], this.aIN = []
	}, this.fx = function() {
		0 <= this.aIM.length && this.aIO(this.aIM), 0 <= this.aIN.length && this.aIO(this.aIN)
	}, this.aIO = function(cr) {
		for (var e6 = -1, cC = cr.length - 1; 0 <= cC; cC--)
			if (cr[cC].dH--, cr[cC].dH <= 0) {
				e6 = cC;
				break
			} for (cC = e6; 0 <= cC; cC--) cr.shift()
	}, this.vU = function(id, a7, aIP) {
		return this.aIQ(this.aIM, id, a7, aIP)
	}, this.aFd = function(id, a7, aIP) {
		return this.aIQ(this.aIN, id, a7, aIP)
	}, this.aIQ = function(cr, id, a7, aIP) {
		return ! function(cr, id, a7) {
			var cC, pQ;
			for (cC = a7.length - 1; 0 <= cC; cC--)
				for (pQ = cr.length - 1; 0 <= pQ; pQ--)
					if (cr[pQ].player === a7[cC] && id === cr[pQ].id) return 1;
			return
		}(cr, id, a7) && (aIP && function(cr, id, a7) {
			var cC;
			for (cC = a7.length - 1; 0 <= cC; cC--) cr.push({
				player: a7[cC],
				id: id,
				dH: 384
			})
		}(cr, id, a7), !0)
	}
}

function tE(aIT) {
	var a7W = document.createElement("div");
	this.dB = a7W, this.aIU = aIT, this.resize = function() {
		for (var cx = aIT.length, cC = 1; cC < cx; cC++) cR.cU.m8(aIT[cC], 4)
	};
	var cC, cx = aIT.length;
	for (a7W.style.width = "100%", a7W.style.height = "2.7em", a7W.style.marginTop = "0.6em", a7W.style.border = "inherit", cC = 0; cC < cx; cC++) aIT[cC].style.verticalAlign = "top", aIT[cC].style.width = (100 / cx).toFixed(2) + "%", aIT[cC].style
		.height = "100%", aIT[cC].style.fontSize = "0.75em", a7W.appendChild(aIT[cC])
}

function aHq() {
	var bg, bh, aIV;

	function aIf(gz, c1, aId, aIX, fP) {
		c1 = aIe(gz, c1 + 1 + 2 * aIX & 3);
		! function(gz, a1T) {
			return 1 < Math.abs(gz % bg - a1T % bg) || 1 < Math.abs(aIh(gz) - aIh(a1T))
		}(gz, c1) && 0 === fP[c1 << 2] && (fP[c1 << 2] = aId)
	}

	function aIh(en) {
		return Math.floor((en + .5) / bg) % bh
	}

	function aIe(en, c1) {
		return en + aIV[c1]
	}
	this.p0 = function(f8) {
		var cC, rv, cx, aIW, n4 = gR;
		for (yV.te.aHc(yV.te.aHa(f8)), cJ.cK = bg = n4.kT(12), cJ.cL = bh = n4.kT(12), aIV = [-bg, -1, bg, 1], cJ.sD = document.createElement("canvas"), cJ.sD.width = cJ.cK, cJ.sD.height = cJ.cL, cJ.sE = cJ.sD.getContext("2d", {
				alpha: !1
			}), cJ.sF = cJ.sE.getImageData(0, 0, cJ.cK, cJ.cL), cJ.sG = cJ.sF.data, cR.tN.wV(cJ.sG), cx = n4.kT(12), rv = n4.kT(5), aIW = aBV(bg * bh - 1), cC = 0; cC < cx; cC++) ! function(cs, en, xw, aIX) {
			var cC, c1, n4 = gR,
				fP = cJ.sG,
				aIa = en,
				h0 = en,
				aIb = 0,
				aIc = 1 + xw,
				aId = 2 - xw;
			for (fP[en << 2] = aIc, cC = 0; cC < cs; cC++) c1 = n4.kT(2), en = aIe(en, c1), fP[en << 2] === aIc ? aIb % 2 == 1 && aIf(h0, aIb + 2 * aIX + 3, aId, aIX, fP) : fP[en << 2] = aIc, aIf(en, c1, aId, aIX, fP), aIf(h0, c1, aId, aIX,
				fP), h0 = en, aIb = c1;
			aIe(en, 0) === aIa ? (aIf(en, 0, aId, aIX, fP), aIf(aIa, 0, aId, aIX, fP)) : aIe(en, 1) === aIa && (aIf(en, 0, aId, aIX, fP), aIf(aIa, 2, aId, aIX, fP));
			0 === cs && (aIf(aIa, 0, aId, aIX, fP), aIf(aIa, 2, aId, aIX, fP))
		}(n4.kT(rv), n4.kT(aIW), 1 === n4.kT(1), 1 === n4.kT(1));
		var ca, cb, pQ, aIi, aIj, aIk, fP = cJ.sG,
			aIl = !0,
			q8 = cJ.aD.kv[cJ.kw].q8,
			q9 = cJ.aD.kv[cJ.kw].q9;
		for (cb = 0; cb < bh; cb++)
			for (aIi = !0, aIj = aIl, ca = aIk = 0; ca < bg; ca++) pQ = 4 * cb * bg + 4 * ca, aIk <= ca && 0 < fP[pQ] && (aIj = 2 === fP[pQ], aIi) && (aIi = !1, aIj !== aIl) ? (aIl = aIj, aIk = ca + 1, ca = -1) : (aIj ? (fP[pQ] = q9[0], fP[1 +
				pQ] = q9[1], fP[2 + pQ] = q9[2]) : (fP[pQ] = q8[0], fP[1 + pQ] = q8[1], fP[2 + pQ] = q8[2]), fP[3 + pQ] = 255);
		cJ.sE.putImageData(cJ.sF, 0, 0), cJ.aBd = !0, cJ.sH.aM(), bE.bI = !0
	}
}

function w9() {
	this.ou = function() {
		var aIt, rv = function() {
				var cC, ng = ai.jp.ng,
					cx = ng.length,
					max = 0;
				for (cC = 0; cC < cx; cC++) max = Math.max(max, ng[cC]);
				return aBV(Math.max(max, 1))
			}(),
			rE = function(rv) {
				return 179 + function() {
					var cC, a7 = ai.jp.wB.a7,
						cx = a7.length,
						rE = 24 * cx;
					for (cC = 0; cC < cx; cC++) rE += 16 * a7[cC].name.length;
					8 === ai.jp.wB.a8 && (rE += 14 * cx);
					return rE
				}() + (1 === ai.jp.wB.a7.length ? 12 * ai.jp.wB.wH.length : 0) + function() {
					var cC, nZ = ai.jp.nZ,
						cx = nZ.length,
						rE = 13 * cx,
						aIy = [22, 20, 19, 32, 32, 10, 10, 1, 0, 0];
					for (cC = 0; cC < cx; cC++) rE += aIy[nZ[cC]];
					return rE
				}() + function(rv) {
					return ai.jp.ng.length * (1 + rv)
				}(rv)
			}(rv);
		eV.af(rE + (6 - rE % 6) % 6), aIt = ai.jp.wB, eV.eW(9, wM), eV.eW(31, eV.size), eV.bt += 16, eV.eW(9, aIt.a6), eV.eW(14, aIt.a5), eV.eW(4, aIt.a8), eV.eW(1, aIt.a9), eV.eW(6, aIt.s2), eV.eW(14, aIt.s3), eV.eW(10, aIt.a7.length);
		var cC, a7 = ai.jp.wB.a7,
			cx = a7.length;
		for (cC = 0; cC < cx; cC++) eV.eW(1, a7[cC].jT), eV.eW(18, (a7[cC].lu[0] << 12) + (a7[cC].lu[1] << 6) + a7[cC].lu[2]), eV.eW(5, a7[cC].name.length), eh.ei.ej(a7[cC].name);
		if (8 === ai.jp.wB.a8)
			for (cC = 0; cC < cx; cC++) eV.eW(14, a7[cC].a20);
		return function() {
				var cC, aIt = ai.jp.wB;
				if (1 === aIt.a7.length)
					for (cC = 0; cC < aIt.wH.length; cC++) eV.eW(3, aIt.wH[cC]), eV.eW(9, aIt.wI[cC] - 1)
			}(),
			function(rv) {
				var cC, nZ = ai.jp.nZ,
					dC = ai.jp.na,
					dD = ai.jp.nb,
					ke = ai.jp.nc,
					cx = nZ.length;
				for (eV.eW(5, rv), eV.eW(30, cx), eV.eW(30, ai.jp.ng.length), cC = 0; cC < cx; cC++) eV.eW(4, nZ[cC]), eV.eW(9, dC[cC]), 0 === nZ[cC] ? eV.eW(22, dD[cC]) : 1 === nZ[cC] ? (eV.eW(10, dD[cC]), eV.eW(10, ke[cC])) : 2 === nZ[cC] ? (eV
					.eW(10, dD[cC]), eV.eW(9, ke[cC])) : 3 === nZ[cC] || 4 === nZ[cC] ? (eV.eW(10, dD[cC]), eV.eW(22, ke[cC])) : 5 === nZ[cC] || 6 === nZ[cC] ? eV.eW(10, dD[cC]) : 7 === nZ[cC] && eV.eW(1, dD[cC])
			}(rv),
			function(rv) {
				var cC, ne = ai.jp.ne,
					ng = ai.jp.ng,
					cx = ne.length;
				for (cC = 0; cC < cx; cC++) eV.eW(1, ne[cC]), eV.eW(rv, ng[cC])
			}(rv), eV.bt !== rE && az.nh("Encoder Index Error: " + eV.bt + " " + rE), eV.bt = 40, eV.eW(16, function() {
				var cC, en = eV.eX,
					cx = eV.size,
					yu = 0;
				for (cC = 7; cC < cx; cC++) yu = yu + en[cC] & 65535;
				return yu
			}()), gR.aM(eV.eX), eh.te.a7e(eh.te.a7b(cA(rE - 1, 6) + 1))
	}
}

function wJ() {
	aBv || (aJ2(), a7Y(), kL = new lj, iu = new a8H, cR = new tL, cd = new aHO, bO = new a, eh = new aDm, yV = new td, ad = new aCn, b4 = new aAa, b5 = new aJ3, b3 = new a2X, bL = new uH, ag = new a5c, fq = new aCQ, b1 = new v3, ax = new aEO, az =
		new a1B, xb = new aJ4, b0 = new tg, ay = new kg, ar = new a46, aq = new qN, xa = new a4V, av = new aGw, ap = new a9G, aw = new a8O, b2 = new wh, oT = new aH8, qH = new o8, bY = new aHg, aH = new aG8, gc = new ev, aZ = new a7g, yv =
		new ye, b7 = new aJ5, aX = new lC, aIH = new aFe, b8 = new z4, aN = new jK, ae = new a2O, aL = new aJ6, fO = new aJ7, aU = new aBW, sn = new a0Y, uZ = new aJ8, bS = new aHr, aJ = new aEG, a2g = new gy, aa = new aJ9, a7F = new a5z, bH =
		new aJA, c0 = new a69, qL = new rG, aG9 = new uv, au = new aI6, wz = new gL, bC = new aJB, a6H = new aJC, bA = new aJD, b9 = new aFk, bB = new aIL, a7L = new aEo, aB = new aDn, aO = new l7, ai = new w7, at = new aAy, eV = new a3n, gR =
		new rA, aIz = new a4R, wK = new a6t, ab = new a8v, ac = new jU, dS = new nw, al = new a4O, ak = new aGI, eq = new a6o, cJ = new aFD, a7J = new a6R, bZ = new a5G, bW = new aAG, he = new aJE, bJ = new aJF, aBv = new wP, a2r = new aAw, fa =
		new aJG, aR = new aJH, aj = new aJI, qo = new a3x, aW = new aJJ, vY = new a6X, aS = new aCc, am = new bf, bE = new un, a1b = new tX, c3 = new aHf, gF = new qB, aJ0 = new xe, aBv.aM(), bJ.aM(), c0.fQ(), fa.aM(), he.aM(), aJ0.aM(), cR.aM(),
		yv.aM(), vY.aM(), bS.aM(), eh.aM(), yV.aM(), cJ.aM(), qt(), bZ.aM(), fM = new aEZ, c0.aM(), bJ.bK.a5Y(), bE.aM(), c3.aM(), aHj = new aDC, aJ.aM(), aX.lJ(), bW.aM(), aU.aM(), bY.aM(), a7L.aM(), xa.aM(), ae.aM(), wK.aM(), gc.aM(), bE.bI = !
		0, setTimeout(function() {
			cJ.af(2, 14071)
		}, 0), bZ.ba(5, 5), aIz.gV(), bJ.bK.a5b(), c0.a6J(), aBv.wS = 1)
}

function aJB() {
	var bt = 0,
		aJL = new Uint16Array(32);

	function remove(vO) {
		var cC;
		for (bt -= 2, cC = vO; cC < bt; cC += 2) aJL[cC] = aJL[cC + 2], aJL[cC + 1] = aJL[cC + 3]
	}
	this.aM = function() {
		bt = 0
	}, this.fx = function() {
		var cC, dg, js;
		if (0 !== bt)
			if (0 === aN.bN[bO.g] || b7.aJM(bO.g) === b7.iE(bO.g)) bt = 0;
			else
				for (cC = bt - 2; 0 <= cC; cC -= 2)(dg = aJL[cC]) < bO.b && 0 === aN.bN[dg] ? remove(cC) : (js = aJL[cC + 1], (dg >= bO.b && vp(bO.g) || dg < bO.b && vu(bO.g, dg)) && (aO.ik.jr(js, dg), remove(cC)))
	}, this.vX = function(dg, js) {
		! function(dg, js) {
			var cC;
			for (cC = 0; cC < bt; cC += 2)
				if (aJL[cC] === dg) return aJL[cC + 1] = Math.min(aJL[cC + 1] + js, 1023), 1;
			return
		}(dg, js) && 32 !== bt && (aJL[bt] = dg, aJL[bt + 1] = js, bt += 2)
	}
}

function aHs() {
	this.aFR = function() {
		if (gR.size < eV.rF(38)) bS.bT.gE(0, 3259);
		else {
			var eS = gR.kT(6),
				cx = gR.kT(10),
				eg = gR.kT(15);
			if (gR.rD(38 + 67 * cx + 16 * eg)) {
				for (var gd, data = [], aDL = 0 === eS ? (gd = .1, 1) : (gd = .001, 3), cC = 0; cC < cx; cC++) data.push(["" + (gR.kT(30) + 1), yV.ei.n3(gR.kT(5)), (gd * gR.rB(32)).toFixed(aDL)]);
				8 === bZ.fS && bZ.fT().aBR(21, !0, {
					eS: eS,
					title: ["1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking"][eS],
					data: data
				})
			} else bS.bT.gE(0, 3260)
		}
	}, this.aFS = function() {
		if (gR.size < eV.rF(29)) bS.bT.gE(0, 3265);
		else {
			var aJO = gR.kT(4),
				aJP = gR.kT(7),
				aJQ = gR.kT(11);
			if (gR.rD(29 + 16 * aJP + 16 * aJQ + 11 * aJO)) {
				for (var data = [], cC = 0; cC < aJO; cC++) {
					for (var aJR = yV.ei.n3(gR.kT(3)), aJS = gR.kT(8), pY = [], dv = 0; dv < aJS; dv++) pY.push(gR.kT(16));
					data.push({
						name: "[" + aJR + "]",
						pY: pY
					})
				}
				8 === bZ.fS && bZ.fT().aBR(23, !0, data)
			} else bS.bT.gE(0, 3266)
		}
	}
}

function wA() {
	function aJY(f8, aJa) {
		aJa ? az.a1I = "Replay Error: " + f8 : bZ.ba(4, 3, new is("⚠️ Replay Error", f8, !0))
	}
	this.p0 = function(f8) {
		if (yV.te.aHc(yV.te.aHa(yV.te.aHZ(f8))), az.a1I = "", ! function() {
				if (gR.size < 10) aJY("File Too Small");
				else if (gR.kT(9) !== wM && aJY("Incompatible Version Error", !0), gR.kT(31) !== gR.size) aJY("Size Error");
				else {
					if (function(bh) {
							var cC, en = gR.eX,
								cx = gR.size,
								yu = 0;
							for (cC = 7; cC < cx; cC++) yu = yu + en[cC] & 65535;
							return yu === bh
						}(gR.kT(16))) return 1;
					aJY("Hash Error")
				}
				return
			}()) return !1;
		var wB;
		(wB = {}).a6 = gR.kT(9), wB.a5 = gR.kT(14), wB.a8 = gR.kT(4), wB.a9 = 1 === gR.kT(1), wB.s2 = gR.kT(6), wB.s3 = gR.kT(14), wB.aJb = gR.kT(10), ai.jp.wB = wB,
			function() {
				var cC, jT, lu, name, cx = ai.jp.wB.aJb,
					a7 = [];
				for (cC = 0; cC < cx; cC++) jT = gR.kT(1), lu = [gR.kT(6), gR.kT(6), gR.kT(6)], name = yV.ei.n3(gR.kT(5)), a7.push({
					name: name,
					lu: lu,
					jT: jT
				});
				if (ai.jp.wB.a7 = a7, 8 === ai.jp.wB.a8)
					for (cC = 0; cC < cx; cC++) a7[cC].a20 = gR.kT(14)
			}();
		var cC, cx, aIt = ai.jp.wB;
		if (1 === aIt.a7.length)
			for (cx = 6 < aIt.a8 ? 1 : aIt.a8 + 2, aIt.wH = new Array(cx), aIt.wI = new Array(cx), cC = 0; cC < cx; cC++) aIt.wH[cC] = gR.kT(3), aIt.wI[cC] = gR.kT(9) + 1;
		return !! function() {
			var rv = gR.kT(5),
				aJc = gR.kT(30),
				aJd = gR.kT(30);
			if (aJc + aJd > 8 * gR.size) return void aJY("Corrupted File");
			return function(cx) {
					var cC, id, aJg = new Uint8Array(cx),
						aJh = new Uint16Array(cx),
						aJi = new Uint32Array(cx),
						aJj = new Uint32Array(cx);
					for (ai.jp.nZ = aJg, ai.jp.na = aJh, ai.jp.nb = aJi, ai.jp.nc = aJj, cC = 0; cC < cx; cC++) aJg[cC] = id = gR.kT(4), aJh[cC] = gR.kT(9), 0 === id ? aJi[cC] = gR.kT(22) : 1 === id ? (aJi[cC] = gR.kT(10), aJj[cC] = gR.kT(
						10)) : 2 === id ? (aJi[cC] = gR.kT(10), aJj[cC] = gR.kT(9)) : 3 === id || 4 === id ? (aJi[cC] = gR.kT(10), aJj[cC] = gR.kT(22)) : 5 === id || 6 === id ? aJi[cC] = gR.kT(10) : 7 === id && (aJi[cC] = gR.kT(1))
				}(aJc),
				function(cx, rv) {
					var cC, ne = new Uint8Array(cx),
						ng = new Array(cx);
					for (ng.fill(0), ai.jp.ne = ne, ai.jp.ng = ng, cC = 0; cC < cx; cC++) ne[cC] = gR.kT(1), ng[cC] = gR.kT(rv)
				}(aJd, rv), 1
		}() && (gR.bt < 8 * gR.size - 13 || gR.bt > 8 * gR.size ? (aJY("Out Of Bounds Error: " + gR.bt + " " + 8 * gR.size), !1) : (ai.jp.os = f8, !0))
	}
}

function aJG() {
	this.hy = new m9, this.hr = new aCD, this.fb = new aH7, this.bT = new aDh, this.aM = function() {
		this.hr.aM(), (new aGR).aM()
	}
}

function hd(title, ih, aJk) {
	var m2 = document.createElement("div"),
		aJl = document.createElement("div"),
		aDY = document.createElement("div"),
		aJm = document.createElement("div");
	this.hm = aDY, this.hx = ih, this.show = function() {
			!1 !== aJk ? document.body.appendChild(m2) : (document.body.appendChild(aJl), document.body.appendChild(aJm))
		}, this.cB = function() {
			!1 !== aJk ? document.body.removeChild(m2) : (document.body.removeChild(aJl), document.body.removeChild(aJm))
		}, this.mc = function() {
			var md = cR.cU.a59(.1),
				aJq = cR.cU.a59(.08 + .04 * (c0.a6E < 1));
			return {
				md: md,
				aJq: aJq,
				mf: c0.bh / c0.ma - md - aJq
			}
		}, this.resize = function() {
			var cC, dB, cx = ih.length,
				mb = this.mc(),
				md = mb.md,
				aJq = mb.aJq;
			for (aJl.style.height = cR.cU.jC(md), cR.cU.m8(aJl, 2), aJm.style.top = cR.cU.jC(c0.bh / c0.ma - aJq), aJm.style.height = cR.cU.jC(aJq), cR.cU.m8(aJm, 8), aDY.style.top = cR.cU.jC(md), aDY.style.height = aDY.style.maxHeight = cR.cU.jC(mb
					.mf), aJm.style.font = aJl.style.font = cR.cU.cV(0, cR.cU.a59(.02, .25)), aDY.style.font = cR.cU.cV(0, cR.cU.a59(.02, .4)), cC = 0; cC < cx; cC++)(dB = ih[cC].button).style.top = "0", dB.style.left = (100 * cC / cx).toFixed(2) +
				"%", dB.style.width = (100 / cx).toFixed(2) + "%", dB.style.height = "100%", 0 < cC && cR.cU.m8(dB, 4)
		}, this.cY = function() {
			var mb = this.mc(),
				gk = c0.ma;
			cc.fillStyle = cd.mL, cc.fillRect(0, gk * mb.md, c0.bg, gk * mb.mf)
		}, m2.style.position = "absolute", m2.style.top = "0", m2.style.left = "0", m2.style.width = "100%", m2.style.height = "100%", aJl.style.position = "absolute", aJl.style.top = "0", aJl.style.left = "0", aJl.style.width = "100%", aJl.style
		.display = "flex", aJl.style.backgroundColor = cd.mL, aJm.style.position = "absolute", aJm.style.left = "0", aJm.style.width = "100%", aDY.style.position = "absolute", aDY.style.width = "100%", aDY.style.backgroundColor = cd.mL,
		function() {
			for (var cC = 0; cC < ih.length; cC++) ih[cC].button.style.position = "absolute", ih[cC].button.style.fontSize = "1.2em"
		}();
	for (var cC = 0; cC < ih.length; cC++) aJm.appendChild(ih[cC].button);
	aJl.appendChild(function() {
		var aJp = document.createElement("h1");
		return aJp.textContent = title, aJp.style.margin = "auto", aJp.style.fontSize = "2.3em", aJp
	}()), !1 !== aJk && (m2.appendChild(aDY), m2.appendChild(aJl), m2.appendChild(aJm))
}

function aJ5() {
	var aJr, aJs, size, dg, dh, id;

	function aJt(player) {
		return player < bO.h ? aJr * player : aJr * bO.h + aJs * (player - bO.h)
	}
	this.aM = function() {
		aJr = bO.h < 16 ? 12 : 8, aJs = 4;
		var cx = aJt(bO.b);
		size = new Uint8Array(bO.b), dg = new Uint16Array(cx), dh = new Uint32Array(cx), id = new Uint16Array(cx)
	}, this.kI = function(h2, aJu) {
		var aJv = this.eE(h2, aJu);
		this.aGs(h2, aJu, 0), aJv = cR.gv.lX(h2, aJv), h2 === bO.g && (aS.cz[13] -= aJv)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.a30 = function(player, aJu) {
		var r9, aJu = function(player, aJu) {
			var cC, cs = aJt(player);
			for (cC = size[player] - 1; 0 <= cC; cC--)
				if (0 === id[cs + cC] && dg[cs + cC] === aJu) return cC;
			return size[player]
		}(player, aJu);
		aJu !== size[player] && (r9 = dh[aJt(player) + aJu], this.hE(player, aJu), this.dc(player, r9, bO.b))
	}, this.e8 = function(player, aJu) {
		for (var cs = aJt(player), cC = size[player] - 1; 0 <= cC; cC--)
			if (0 === id[cs + cC] && dg[cs + cC] === aJu) return !0;
		return !1
	}, this.jw = function(player) {
		return player < bO.h ? size[player] < aJr : size[player] < aJs
	}, this.iE = function(player) {
		return size[player]
	}, this.iK = function(player, cC) {
		return dg[aJt(player) + cC]
	}, this.iF = function(player, cC) {
		return id[aJt(player) + cC]
	}, this.hW = function(player, hV) {
		for (var cs = aJt(player), cC = size[player] - 1; 0 <= cC; cC--)
			if (id[cs + cC] === hV) return cC;
		return -1
	}, this.hX = function(player, cC) {
		return dh[aJt(player) + cC]
	}, this.eE = function(player, aJu) {
		for (var cs = aJt(player), cC = size[player] - 1; 0 <= cC; cC--)
			if (0 === id[cs + cC] && dg[cs + cC] === aJu) return dh[cs + cC];
		return 0
	}, this.a2y = function(player) {
		for (var cs = aJt(player), lV = 0, cC = size[player] - 1; 0 <= cC; cC--) lV += dh[cs + cC];
		return lV
	}, this.d8 = function(player) {
		for (var cs = aJt(player), lV = 0, cC = size[player] - 1; 0 <= cC; cC--) 0 === id[cs + cC] && (lV += dh[cs + cC]);
		return lV
	}, this.aJM = function(player) {
		for (var cs = aJt(player), pZ = 0, cC = size[player] - 1; 0 <= cC; cC--) 0 < id[cs + cC] && pZ++;
		return pZ
	}, this.aGs = function(player, aJu, r9) {
		for (var cs = aJt(player), cC = size[player] - 1; 0 <= cC; cC--) 0 === id[cs + cC] && dg[cs + cC] === aJu && (dh[cs + cC] = r9)
	}, this.hT = function(player, cC, r9) {
		dh[aJt(player) + cC] = r9
	}, this.dc = function(player, r9, aJu) {
		var cC, cs = aJt(player);
		for (aJu === bO.g && aS.cz[player < bO.h ? 6 : 5]++, cC = size[player] - 1; 0 <= cC; cC--)
			if (0 === id[cs + cC] && dg[cs + cC] === aJu) return dh[cs + cC] += r9, void(dh[cs + cC] = dh[cs + cC] > bO.c ? bO.c : dh[cs + cC]);
		dg[cs + size[player]] = aJu, dh[cs + size[player]] = r9, id[cs + size[player]] = 0, size[player]++, player < bO.h && (aJu === bO.g ? az.a1K(player, 5) : player === bO.g && b8.a0K(aJu))
	}, this.aJx = function(player, r9, hV) {
		var cs = aJt(player);
		aN.bN[player] = 2, dg[cs + size[player]] = 0, dh[cs + size[player]] = r9, id[cs + size[player]] = hV, size[player]++
	}, this.hE = function(player, bt) {
		var dv, cs;
		if (0 !== size[player])
			for (cs = aJt(player), size[player]--, dv = bt; dv < size[player]; dv++) dg[cs + dv] = dg[cs + dv + 1], dh[cs + dv] = dh[cs + dv + 1], id[cs + dv] = id[cs + dv + 1]
	}, this.a2u = function(player) {
		for (var dv, cs, a2t = [], cC = kd - 1; 0 <= cC; cC--)
			for (cs = aJt(lU[cC]), dv = size[lU[cC]] - 1; 0 <= dv; dv--)
				if (0 === id[cs + dv] && dg[cs + dv] === player) {
					a2t.push(lU[cC]);
					break
				} return a2t
	}
}

function aGg() {
	for (var ca, cb, cC = i4 - 1; 0 <= cC; cC--) ca = cA(i6[cC], 4) % cJ.cK, cb = cA(i6[cC], 4 * cJ.cK), aN.eJ[i0] = aN.eJ[i0] > ca ? ca : aN.eJ[i0], aN.eM[i0] = aN.eM[i0] > cb ? cb : aN.eM[i0], aN.eI[i0] = aN.eI[i0] < ca ? ca : aN.eI[i0], aN.eL[
		i0] = aN.eL[i0] < cb ? cb : aN.eL[i0]
}

function iI() {
	var c1, en, cC, cx = aN.dU[i0].length;
	loop: for (cC = cx - 1; 0 <= cC; cC--) {
		for (c1 = 3; 0 <= c1; c1--)
			if (en = aN.dU[i0][cC] + dp[c1], aZ.ds(en) || aZ.dn(en) && aZ.dq(en) !== i0) {
				aZ.dr(aN.dU[i0][cC], i0);
				continue loop
			} aN.dU[i0][cC] = aN.dU[i0][cx - 1], aN.dU[i0].pop(), cx--
	}
}

function iJ() {
	var c1, en, aJy, aJz, cx = aN.dl[i0].length;
	loop: for (var cC = cx - 1; 0 <= cC; cC--) {
		for (aJy = aJz = !1, c1 = 3; 0 <= c1; c1--) {
			if (en = aN.dl[i0][cC] + dp[c1], aZ.a8A(en, i0)) continue loop;
			aJy = aJy || aZ.hQ(en), aJz = aJz || aZ.xn(en)
		}
		aJy ? aN.jP[i0].push(aN.dl[i0][cC]) : aJz ? aN.jQ[i0].push(aN.dl[i0][cC]) : aZ.a5v(aN.dl[i0][cC], i0), aN.dl[i0][cC] = aN.dl[i0][cx - 1], aN.dl[i0].pop(), cx--
	}
}

function aGa() {
	aN.d0[i3] -= i4
}

function aGb(border) {
	for (var cx = border.length, cC = cx - 1; 0 <= cC; cC--) aZ.a0X(i3, border[cC]) || (border[cC] = border[cx - 1], border.pop(), cx--)
}

function aGc(border) {
	for (var cx = border.length, cC = cx - 1; 0 <= cC; cC--) !aZ.a0X(i3, border[cC]) && aZ.hU(border[cC]) && (border[cC] = border[cx - 1], border.pop(), cx--)
}

function aGd(border) {
	for (var c1, en, cx = border.length, cC = cx - 1; 0 <= cC; cC--)
		for (c1 = 3; 0 <= c1; c1--)
			if (en = border[cC] + dp[c1], aZ.a8A(en, i3)) {
				aN.dl[i3].push(border[cC]), border[cC] = border[cx - 1], border.pop(), cx--;
				break
			}
}

function aGe() {
	for (var c1, en, cC = i4 - 1; 0 <= cC; cC--)
		for (c1 = 3; 0 <= c1; c1--) en = i6[cC] + dp[c1], aZ.a8B(i3, en) && aZ.a8C(en) && (aN.dl[i3].push(en), aZ.iR(en, i3))
}

function aGf() {
	var ca, cb;
	loop: for (; aN.eM[i3] < aN.eL[i3];) {
		for (ca = aN.eI[i3]; ca >= aN.eJ[i3]; ca--)
			if (aZ.a0X(i3, 4 * (aN.eM[i3] * cJ.cK + ca))) break loop;
		aN.eM[i3]++
	}
	loop: for (; aN.eM[i3] < aN.eL[i3];) {
		for (ca = aN.eI[i3]; ca >= aN.eJ[i3]; ca--)
			if (aZ.a0X(i3, 4 * (aN.eL[i3] * cJ.cK + ca))) break loop;
		aN.eL[i3]--
	}
	loop: for (; aN.eJ[i3] < aN.eI[i3];) {
		for (cb = aN.eL[i3]; cb >= aN.eM[i3]; cb--)
			if (aZ.a0X(i3, 4 * (cb * cJ.cK + aN.eJ[i3]))) break loop;
		aN.eJ[i3]++
	}
	loop: for (; aN.eJ[i3] < aN.eI[i3];) {
		for (cb = aN.eL[i3]; cb >= aN.eM[i3]; cb--)
			if (aZ.a0X(i3, 4 * (cb * cJ.cK + aN.eI[i3]))) break loop;
		aN.eI[i3]--
	}
}

function e1(player, dg) {
	return 0 === aR.eo[player] || aR.eo[player] !== aR.eo[dg]
}

function vq(player, dg) {
	for (var dB, aK0 = b7.iE(player), cC = 0; cC < aK0; cC++)
		if (0 === b7.iF(player, cC))
			if ((dB = b7.iK(player, cC)) === bO.b) {
				if (dg === bO.b) return !1;
				if (vp(dg)) return !0
			} else if (dg === bO.b) {
		if (vp(dB)) return !0
	} else if (vu(dg, dB)) return !0;
	return !1
}

function vp(player) {
	for (var cC, iU, cx = aN.dl[player].length, c1 = 3; 0 <= c1; c1--)
		for (iU = dp[c1], cC = 0; cC < cx; cC++)
			if (aZ.ds(aN.dl[player][cC] + iU)) return !0;
	return !1
}

function vu(a39, a3A) {
	var cC, cN, c1, iU, en, ux = aN.dl[a39].length,
		aK1 = aN.dl[a3A].length;
	for (aK1 < ux && (cN = a39, a39 = a3A, a3A = cN, cN = ux, ux = aK1, 0), c1 = 3; 0 <= c1; c1--)
		for (iU = dp[c1], cC = 0; cC < ux; cC++)
			if (en = aN.dl[a39][cC] + iU, aZ.dn(en) && aZ.dq(en) === a3A) return !0;
	return !1
}

function jb() {
	this.yF = null, this.k7 = 512, this.k9 = 8, this.k6 = 0, this.a2Y = 0, this.a1r = new Uint16Array(this.k7), this.aK2 = new Uint32Array(this.k7), this.aAB = new Uint32Array(this.k7), this.xs = new Uint32Array(this.k7), this.aK3 = new Uint16Array(
			this.k7), this.a1s = new Uint32Array(this.k7), this.aAZ = new Uint16Array(this.k7), this.gx = new Uint16Array(this.k7), this.aAA = new Uint8Array(this.k7), this.k8 = new Uint8Array(bO.b), this.aK4 = new Uint16Array(this.k9 * bO.b), this
		.aM = function() {
			this.a2Y = 0, this.k6 = 0, this.yF = new Uint8Array(cJ.cK + cJ.cL), this.k8.fill(0)
		}, this.kB = function(player) {
			var cx = this.k6,
				xr = ab.xo(dS.o1[0]),
				ux = this.k8[player],
				aK1 = (player << 3) + ux;
			aN.bN[player] = 2, this.a1r[cx] = aK1, this.aK2[cx] = xr, this.xs[cx] = xr, this.aAB[cx] = ab.xo(dS.o1[1]), this.aK3[cx] = 0, this.a1s[cx] = dS.dd[0], this.aAZ[cx] = ac.jc.kB(cx, ab.a99(xr)), this.gx[cx] = this.a2Y, this.aAA[cx] = dS.o1[
				2], this.a2Y = this.a2Y + 1 & 1023, this.aK4[aK1] = cx, this.k8[player] = ux + 1, this.k6++
		}, this.kC = function() {
			var aK5 = dS.o1[3];
			this.aK2[aK5] = this.xs[aK5], this.aAB[aK5] = ab.xo(dS.o1[1]), this.aK3[aK5] = 0, this.aAA[aK5] = dS.o1[2]
		}, this.fx = function() {
			if (bE.dK() % 5 == 3) {
				ac.jf.fx(), ! function(w3) {
					var cC, xt, aK9, aKA, aKB, xr, aKF, aKG, c1, iU, aK2 = w3.aK2,
						aAB = w3.aAB,
						xs = w3.xs,
						a1s = w3.a1s,
						aK3 = w3.aK3,
						aAZ = w3.aAZ,
						w3 = w3.k6,
						a3j = cJ.cK << 4;
					for (cC = w3 - 1; 0 <= cC; cC--) aK9 = xs[cC], xt = aAB[cC], aK9 !== xt && (xr = aK2[cC], aKF = xt % a3j - (aKB = xr % a3j), aKG = ~~((xt + .5) / a3j) - (xr = ~~((xr + .5) / a3j)), c1 = ~~Math.sqrt(aKF * aKF + aKG * aKG + .5),
						iU = 4e5 + 2e4 * ~~Math.sqrt(.5 + (Math.sqrt(a1s[cC] + .5) << 4)), 65535 <= (iU = aK3[cC] + Math.max(~~((.5 + iU) / c1), 1)) ? xs[cC] = aKA = xt : (aK3[cC] = iU, xs[cC] = aKA = aKB + kL.lk(iU * aKF, 65536) + a3j * (
							xr + kL.lk(iU * aKG, 65536))), aAZ[cC] = ac.jc.aAV(aAZ[cC], aK9, aKA))
				}(this), ! function(w3) {
					var cC, pQ, cs, e6, gk, aKI, aG6, aKJ, gz, ql, dM, dN, aKK, aKL, aKM, a1T, xr, aKP, cx = w3.k6,
						xs = w3.xs,
						a1r = w3.a1r,
						a1s = w3.a1s,
						jc = ac.jc.jc,
						nM = jc.length,
						aAS = ac.jc.aAS,
						a3j = cJ.cK << 4,
						aKQ = bO.u,
						aKR = aR.eo,
						iU = (cx - 1) * (bE.dK() % 2);
					for (cC = 0; cC < cx; cC++) {
						for (pQ = Math.abs(cC - iU), xr = xs[pQ], cs = ab.a99(xr), gz = a1r[pQ] >> 3, dM = xr % a3j, dN = ~~((xr + .5) / a3j), xr = a1s[pQ], aKP = 80 + ~~Math.sqrt(.5 + (Math.sqrt(xr + .5) << 8)), aKL = Math.min(aKP * aKP,
							262144), aKM = -1, e6 = 0; e6 < 9; e6++)
							if (!((aKI = cs + aAS[e6]) < 0 || nM <= aKI))
								for (aKJ = jc[aKI], aG6 = aKJ.length, gk = 0; gk < aG6; gk++) aKK = aKJ[gk], a1T = a1r[aKK] >> 3, gz == a1T || aKQ && aKR[gz] === aKR[a1T] || (a1T = xs[aKK], (a1T = (ql = dM - a1T % a3j) * ql + (ql = dN - ~~((a1T +
									.5) / a3j)) * ql) < aKL && (aKM = aKK, aKL = a1T)); - 1 !== aKM && (xr = Math.min(Math.max(1, kL.lk(xr * (aKP - Math.floor(Math.sqrt(aKL + .5))), 5 * aKP)), a1s[aKM]), a1s[pQ] -= xr >> 4, a1s[aKM] -= xr)
					}
				}(this);
				var cC, dh, a1s = (w3 = this).a1s,
					w3 = w3.k6;
				for (cC = w3 - 1; 0 <= cC; cC--) dh = a1s[cC], 0 < (dh -= Math.max(1, dh >> 7)) ? a1s[cC] = dh : ac.jX.aAD(cC)
			}
		}
}

function aAH() {
	function aKZ() {}
	this.aM = function() {}, this.a5a = function() {
		return !!aKZ() && (aiptag.cmd.player.push(function() {
			aiptag.adplayer.startVideoAd()
		}), !0)
	}, this.hideCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.hideCMPButton && aipAPItag.hideCMPButton()
	}, this.showCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.showCMPButton && aipAPItag.showCMPButton()
	}, this.showCMPScreen = function() {
		aKZ() && aipAPItag.showCMPScreen()
	}
}

function aJJ() {
	this.a45 = !1, this.um = !1, this.nu = !1, this.aKa = [0, 0, 0, 0], this.nP = function() {
		var dM, dN, dO, dP;
		this.nu = this.nu || this.um, (this.um || this.a45 && this.nu) && (dM = qo.a44[0], dN = qo.a44[1], dO = qo.a44[2], dP = qo.a44[3], dM = dM < this.aKa[0] ? this.aKa[0] : dM, dN = dN < this.aKa[1] ? this.aKa[1] : dN, dO = dO > this.aKa[2] ?
			this.aKa[2] : dO, dP = dP > this.aKa[3] ? this.aKa[3] : dP, this.um = !1, this.a45 = !1, dM === this.aKa[0] && dN === this.aKa[1] && dO === this.aKa[2] && dP === this.aKa[3] ? this.nv() : dM <= dO && dN <= dP && an.putImageData(
				ao, 0, 0, dM, dN, dO - dM + 1, dP - dN + 1))
	}, this.nv = function() {
		this.nu && this.aKa[2] >= this.aKa[0] && this.aKa[3] >= this.aKa[1] && an.putImageData(ao, 0, 0, this.aKa[0], this.aKa[1], this.aKa[2] - this.aKa[0] + 1, this.aKa[3] - this.aKa[1] + 1), this.nu = !1
	}, this.aET = function() {
		this.aKa[2] >= this.aKa[0] && this.aKa[3] >= this.aKa[1] && an.putImageData(ao, 0, 0, this.aKa[0], this.aKa[1], this.aKa[2] - this.aKa[0] + 1, this.aKa[3] - this.aKa[1] + 1), this.nu = !1
	}, this.aM = function() {
		var ca, cb;
		this.a45 = !1, this.um = !1, this.nu = !1, this.aKa[0] = cJ.cK, this.aKa[1] = cJ.cL, this.aKa[2] = this.aKa[3] = 0;
		loop: for (ca = 1; ca < cJ.cK - 1; ca++)
			for (cb = cJ.cL - 2; 1 < cb; cb--)
				if (1 === yN[aZ.hL(ca, cb) + 2]) {
					this.aKa[0] = ca;
					break loop
				} loop: for (cb = 1; cb < cJ.cL - 1; cb++)
			for (ca = cJ.cK - 2; 1 < ca; ca--)
				if (1 === yN[aZ.hL(ca, cb) + 2]) {
					this.aKa[1] = cb;
					break loop
				} loop: for (ca = cJ.cK - 2; 0 < ca; ca--)
			for (cb = cJ.cL - 2; 1 < cb; cb--)
				if (1 === yN[aZ.hL(ca, cb) + 2]) {
					this.aKa[2] = ca;
					break loop
				} loop: for (cb = cJ.cL - 2; 0 < cb; cb--)
			for (ca = cJ.cK - 2; 1 < ca; ca--)
				if (1 === yN[aZ.hL(ca, cb) + 2]) {
					this.aKa[3] = cb;
					break loop
				}
	}
}

function aKb() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.rk = 13, this.aG0 = this.emojis.length, this.rh = 676, this.aFz = 1024, this.rj = this.emojis.indexOf("💀"), this.aKc = this.rj + 1, this.ri = this.emojis.indexOf("🥇"), this.vL = this.emojis.indexOf("😊"), this.a0E = function(lV) {
		return lV < this.rh ? String.fromCharCode(55356, 56806 + kL.lk(lV, 26), 55356, 56806 + lV % 26) : this.emojis[Math.min(lV - this.rh, this.aG0 - 1)]
	}, this.aG1 = function(f8) {
		for (var cx = f8.length - 2, cr = [], cC = 0; cC < cx; cC++) {
			var sC = f8.charCodeAt(cC) - 56806,
				wY = f8.charCodeAt(cC + 2) - 56806;
			0 <= sC && sC < 26 && 0 <= wY && wY < 26 && (cr.push(26 * sC + wY), cC += 3)
		}
		return cr
	}, this.zm = function(lV) {
		return lV < this.rh
	}, this.a0D = function(lV) {
		return lV >= 1024 - this.rk
	}, this.a0B = function(lV) {
		return lV >= this.rh && lV < this.rh + this.aKc
	}
}

function aJ4() {
	var hf, x2, aBy, bg, bh, font;

	function aKf(a1A) {
		return a1A < 10 ? "0" + a1A : String(a1A)
	}
	this.aM = function() {
		void 0 === bg && this.resize(), this.setTime()
	}, this.resize = function() {
		bg = Math.floor((bJ.bK.c2() ? .53 : .36) * c0.ge), bh = Math.floor(.065 * bg), font = cR.cU.cV(1, Math.floor(.9 * bh)), aBy--, this.setTime()
	}, this.fx = function() {
		this.setTime() && (bE.bI = !0)
	}, this.setTime = function() {
		var cN = new Date,
			aKe = cN.getUTCMinutes(),
			cN = cN.getUTCSeconds();
		return x2 = 3600 - 60 * aKe - cN, x2 %= 900, hf = "Next Contest: " + aKf(Math.floor(x2 / 60)) + ":" + aKf(x2 % 60), aBy !== (aBy = 60 * aKe + cN) && (bg = ay.measureText(hf, font), bg += Math.floor(.4 * bh), !0)
	}, this.cY = function() {
		cc.lineWidth = 1 + Math.floor(bh / 15), 7 === bY.gB() && qL.rt() + 2 * c3.gap > .5 * (c0.bh - bg) ? cc.translate(c0.bg - bh, Math.floor(qL.rt() + 2 * c3.gap + bg)) : cc.translate(c0.bg - bh, Math.floor(.5 * (c0.bh + bg))), cc.rotate(-Math
			.PI / 2), cc.fillStyle = cd.co, cc.fillRect(0, 0, bg, bh), cc.strokeStyle = cd.l6, cc.strokeRect(0, 0, bg, bh + 10), cc.fillStyle = cd.l6, cc.font = font, cR.cU.textBaseline(cc, 1), cR.cU.textAlign(cc, 1), cc.fillText(hf, Math
			.floor(bg / 2), Math.floor(.59 * bh)), cc.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function lB() {
	this.r7 = function(player, k0, dh) {
		cR.gv.k2(player, dh, k0) && (aX.k4(player, k0), k0 < bO.h) && aJ.random() < aJ.value(10) && (da[k0] = 0)
	}, this.aAF = function(player, k0, dh) {
		cR.gv.aAq(dh, k0) && (cR.gv.lX(k0, dS.dd[0]), aS.hG(player, k0), b8.hI(k0, dS.dd[0]))
	}
}

function aJD() {
	this.x2 = 0, this.a7 = null, this.aM = function() {
		this.x2 = 0, this.a7 = []
	}, this.aGL = function(player) {
		this.a7.push(player), bO.k++, aN.jN[player] = 2, aN.et[player] = a2r.a2s.n8(), player === bO.g && (b2.show(!1, !1), aw.a2z()), b8.a0K(player)
	}, this.a34 = function(player) {
		var cC, a7;
		if (2 !== aN.jN[player])
			for (cC = (a7 = this.a7).length - 1; 0 <= cC; cC--)
				if (a7[cC] === player) return void a7.splice(cC, 1)
	}, this.fx = function() {
		bO.n || (30 === this.x2 && 2140 <= bE.dK() && this.aKg(), this.x2 = (this.x2 + 1) % 60)
	}, this.aKg = function() {
		for (var a7 = this.a7, cC = a7.length - 1; 0 <= cC; cC--) ! function(player, js) {
			!b7.jw(player) || (js = Math.max(Math.min(100, aN.dj[player]), cA(js * aN.dj[player], 100))) < 100 || (0 === aN.dl[player].length ? !ac.jh.fx(player) && bO.u && qw(player, js, 0, 0) : (bO.u ? r6 : r8)(player, js))
		}(a7[cC], 12)
	}
}

function aJ6() {
	var aKi;
	this.aD0 = null, this.aM = function() {
		aKi = [], 9 === bO.w && this.aKj()
	}, this.aKj = function() {
		var cC, aKk = [50, 74, 95, 150, 190, 333];
		if (this.a2W = 0, this.aD0 = [0, 0, 0, 0, 0, 0], bO.h <= aKk[0]) this.aD0[0] = Math.max(kL.lk(bO.h * (512 - bO.h), aKk[0]), 13), bO.j = this.aD0[0];
		else
			for (bO.j = bO.b - bO.h, cC = 1; cC < 6; cC++)
				if (bO.h <= aKk[cC]) {
					this.aD0[cC - 1] = 512 - aKk[cC - 1] - cA((512 - aKk[cC - 1]) * (bO.h - aKk[cC - 1]), aKk[cC] - aKk[cC - 1]), this.aD0[cC] = 512 - bO.h - this.aD0[cC - 1];
					break
				} bO.l = bO.h + bO.j
	}, this.a33 = function(player) {
		aKi.push({
			player: player,
			pZ: 14 + aJ.dz(20)
		})
	}, this.fx = function() {
		var cC;
		if (9 === bO.w)
			for (cC = aKi.length - 1; 0 <= cC; cC--) --aKi[cC].pZ <= 0 && (b8.kN(aKi[cC].player, 0, fO.rg.rh + fO.rg.rj), aKi.splice(cC))
	}
}

function aJ9() {
	var aKm, aKn, hQ, a3S;
	this.aM = function() {
		var cC, ca, cb, lu, aKo, bg, bh, kp, gr, fP, lV, en, eN, dv, je;
		if (function() {
				if (hQ = !0, a3S = "rgb(" + cJ.sG[0] + "," + cJ.sG[1] + "," + cJ.sG[2] + ")", cJ.aFH(cJ.kw)) return 1;
				return hQ = !1, 0
			}()) aKn = null;
		else {
			for (aKm = cA(96, 4), aKo = 1 === cJ.kw ? (lu = 0, 160) : (lu = 128, 32), a3S = "rgb(" + lu + "," + lu + "," + lu + ")", aKn = new Array(4), cC = 3; 0 <= cC; cC--) {
				if (aKn[cC] = document.createElement("canvas"), bg = cC % 2 == 0 ? cJ.cK : aKm, bh = cC % 2 == 0 ? aKm : cJ.cL + 2 * aKm, aKn[cC].width = bg, aKn[cC].height = bh, fP = (gr = (kp = aKn[cC].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, bg, bh)).data, cC % 2 == 0)
					for (cb = aKm - 1; 0 <= cb; cb--)
						for (lV = aKo + Math.floor((cb + 1) * (lu - aKo) / (aKm + 1)), ca = bg - 1; 0 <= ca; ca--) fP[en = 4 * ((0 === cC ? aKm - cb - 1 : cb) * bg + ca)] = lV, fP[en + 1] = lV, fP[en + 2] = lV, fP[en + 3] = 255;
				else {
					for (ca = aKm - 1; 0 <= ca; ca--)
						for (lV = aKo + Math.floor((ca + 1) * (lu - aKo) / (aKm + 1)), cb = bh - 1 - aKm; aKm <= cb; cb--) fP[en = 4 * (cb * bg + (3 === cC ? aKm - ca - 1 : ca))] = lV, fP[en + 1] = lV, fP[en + 2] = lV, fP[en + 3] = 255;
					for (dv = 1; 0 <= dv; dv--)
						for (ca = aKm - 1; 0 <= ca; ca--)
							for (cb = aKm - 1; 0 <= cb; cb--) eN = (Math.pow(ca * ca + cb * cb, .5) + 1) / (aKm + 1), lV = aKo + Math.floor((1 < eN ? 1 : eN) * (lu - aKo)), fP[en = 4 * ((0 === dv ? aKm - cb - 1 : cb + dv * (bh - aKm)) * bg + (
								1 === cC ? ca : aKm - ca - 1))] = lV, fP[en + 1] = lV, fP[en + 2] = lV, fP[en + 3] = 255
				}
				kp.putImageData(gr, 0, 0)
			}
			je = aKo, cJ.sE.fillStyle = "rgb(" + je + "," + je + "," + je + ")", cJ.sE.fillRect(0, 0, cJ.cK, 1), cJ.sE.fillRect(0, cJ.cL - 1, cJ.cK, 1), cJ.sE.fillRect(0, 0, 1, cJ.cL), cJ.sE.fillRect(cJ.cK - 1, 0, 1, cJ.cL)
		}
	}, this.ga = function() {
		var dv = hQ ? 0 : -aKm;
		aBU(dv, dv, cJ.cK - 2 * dv, cJ.cL - 2 * dv, qo.a40, qo.a41, qo.a42, qo.a43) || (cc.fillStyle = a3S, cc.fillRect(0, 0, c0.bg, c0.bh))
	}, this.cY = function() {
		hQ || (aBT(0, -aKm, cJ.cK, aKm, qo.a40, qo.a41, qo.a42, qo.a43) && cc.drawImage(aKn[0], qo.a3y, qo.a3z - aKm), aBT(cJ.cK, -aKm, aKm, cJ.cL + 2 * aKm, qo.a40, qo.a41, qo.a42, qo.a43) && cc.drawImage(aKn[1], qo.a3y + cJ.cK, qo.a3z - aKm),
			aBT(0, cJ.cL, cJ.cK, aKm, qo.a40, qo.a41, qo.a42, qo.a43) && cc.drawImage(aKn[2], qo.a3y, qo.a3z + cJ.cL), aBT(-aKm, -aKm, aKm, cJ.cL + 2 * aKm, qo.a40, qo.a41, qo.a42, qo.a43) && cc.drawImage(aKn[3], qo.a3y - aKm, qo.a3z - aKm))
	}
}

function a5H() {
	this.hr = {}, this.aDd = ["", "", ""], this.oU = function() {
		bZ.ba(5, 5)
	}, this.xQ = function() {
		bZ.hi(), aH.aM()
	}, this.xP = function() {
		bZ.hi(), qH.oL(fa.hr.data[10].value), qH.aM()
	}, this.ii = function() {
		bZ.ba(0 === bY.gB() ? 5 : 0)
	}, this.ia = function() {
		if (1 === fa.hr.data[130].value) bZ.ba(8, bZ.fT().g2, new ir(24, {
			ee: fa.hr.data[125].value,
			eT: fa.hr.data[128].value,
			eU: fa.hr.data[129].value
		}));
		else {
			for (var cr = (cr = fa.hr.data[126].value.split(",")).slice(0, 10), cC = 0; cC < cr.length; cC++) cr[cC] = cr[cC].trim().slice(0, 7).toUpperCase();
			1 === cr.length && 0 === cr[0].length && (cr = []), bZ.ba(8, bZ.fT().g2, new ir(23, {
				ee: fa.hr.data[125].value,
				ef: cr
			}))
		}
	}, this.iq = function(g2, target) {
		bZ.ba(4, g2, new is("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + iu.j4 +
			"' target='_blank'>" + iu.j4 + "</a>", !1, [new hg("❌ " + he.hf[92], function() {
				bZ.ba(g2)
			}), new hg("✅ " + he.hf[0], function() {
				fa.fb.fc(140, 1), 0 === target ? bZ.ba(2, g2) : bZ.ba(8, g2, new ir(target))
			})]))
	}, this.aFT = function() {
		for (var cC = 0; cC < 3; cC++) this.aDd[cC] = yV.ei.n3(gR.kT(5));
		this.aDd[1] = "[" + this.aDd[1] + "]", 5 === bZ.fS && bZ.fT().fU.fc(this.aDd)
	}
}

function aJH() {
	this.rr = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a9u = [cd
		.co, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", cd.co, "rgb(170,170,170)"
	], this.aKr = [cd.co, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", cd.co, cd.l6], this.aKs = [cd.l6, cd.co, cd.co, cd.co, cd.l6, cd.l6, cd.l6, cd.l6, cd.co];
	var aKt = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aKu = (this.a0G = ["rgba(" + aKt[0] + ",", "rgba(" + aKt[1] + ",", "rgba(" + aKt[2] + ",", "rgba(" + aKt[3] + ",", "rgba(" + aKt[4] + ",", "rgba(" + aKt[5] + ",", "rgba(" + aKt[6] + ",", "rgba(" + aKt[7] + ",", "rgba(" + aKt[8] + ",",
			"rgba(" + aKt[9] + ","
		], this.a0H = ["rgb(" + aKt[0] + ")", "rgb(" + aKt[1] + ")", "rgb(" + aKt[2] + ")", "rgb(" + aKt[3] + ")", "rgb(" + aKt[4] + ")", "rgb(" + aKt[5] + ")", "rgb(" + aKt[6] + ")", "rgb(" + aKt[7] + ")", "rgb(" + aKt[8] + ")", "rgb(" + aKt[
			9] + ")"
		], this.ey = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.x9 = [
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
	this.xA = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eo = new Uint8Array(bO.b), this.ef = null, this.aKv = null, this.aM = function(a7) {
		this.eo.fill(0), this.aKw(), bO.u && (aB.aC && aB.aD.aE6 ? this.a82() : 9 === bO.w ? this.aKx() : this.fx(a7))
	}, this.a82 = function() {
		var cC, cx = bO.l;
		for (this.xA = [0, 1, 2, 3, 4, 5, 6, 7, 8], cC = 0; cC < cx; cC++) this.eo[cC] = aB.aD.aE6[cC]
	}, this.aKw = function() {
		for (var cC = this.xA.length - 1; 0 <= cC; cC--) this.xA[cC] = cC;
		this.ef = [], this.aKv = []
	}, this.aKx = function() {
		for (var cC = bO.h + aL.a2W - 1; 0 <= cC; cC--) this.eo[cC] = 1;
		for (cC = bO.h + aL.a2W; cC < bO.b; cC++) this.eo[cC] = 2;
		this.xA[1] = 7, this.xA[2] = 8
	}, this.fx = function(a7) {
		var sC = new Uint8Array(bO.h),
			wY = new Uint8Array(bO.h),
			aKy = new Uint16Array(8),
			aKz = new Uint16Array(this.xA.length);
		this.aL0(a7, sC, wY, aKy), this.a80(aKy), bO.n || this.aL1(aKz, sC, wY), this.aL2(sC, wY, aKz), bO.n ? this.aL3() : this.aL4()
	}, this.aL0 = function(a7, sC, wY, aL5) {
		for (var e6, dB, aL6, cx = this.xA.length - 1, cr = new Uint16Array(cx), cC = bO.h - 1; 0 <= cC; cC--) {
			for (e6 = cx; 1 <= e6; e6--) cr[e6 - 1] = Math.abs(4 * a7[cC].lu[0] - aKu[e6][0]) + Math.abs(4 * a7[cC].lu[1] - aKu[e6][1]) + Math.abs(4 * a7[cC].lu[2] - aKu[e6][2]);
			for (aL6 = 768, e6 = cx - 1; 0 <= e6; e6--) cr[dB = (e6 + cC) % cx] < aL6 && (aL6 = cr[dB], sC[cC] = dB);
			for (aL5[sC[cC]] += 4, aL6 = 768, e6 = cx - 1; 0 <= e6; e6--) cr[dB = (e6 + cC) % cx] < aL6 && dB !== sC[cC] && (aL6 = cr[dB], wY[cC] = dB);
			aL5[wY[cC]]++
		}
	}, this.a80 = function(aL5) {
		for (var e6, vI, cx = this.xA.length - 1, cC = cx; 0 <= cC; cC--) this.xA[cC] = cC;
		for (cC = cx - 1; 0 <= cC; cC--) aL5[cC]++;
		for (cC = 1; cC <= cx; cC++) {
			for (vI = 0, e6 = 1; e6 < cx; e6++) aL5[e6] > aL5[vI] && (vI = e6);
			aL5[vI] = 0, this.xA[cC] = vI + 1
		}
	}, this.aL1 = function(aKz, sC, wY) {
		var cC, e6, aJR, gk, c1, dB, gd, mj, aL7 = this.xA.length - 1,
			mP = new Uint16Array(aL7),
			aL8 = [],
			bm = Math.max(bO.h + 1 >> 1, 6);
		loop: for (cC = 0; cC < bO.h; cC++)
			if (null !== (aJR = cR.cS.aDS(aN.jL[cC]))) {
				for (e6 = this.ef.length - 1; 0 <= e6; e6--)
					if (aJR === this.ef[e6] && this.aKv[e6].length < bm) {
						this.aKv[e6].push(cC);
						continue loop
					} this.ef.push(aJR), aL8.push(!1), this.aKv.push([cC])
			}
		for (e6 = this.ef.length - 1; 0 <= e6; e6--) {
			for (c1 = -1, gk = this.ef.length - 1; 0 <= gk; gk--) !aL8[gk] && (-1 === c1 || this.aKv[gk].length > this.aKv[c1].length) && (c1 = gk);
			for (gk = aL7 - 1; 0 <= gk; gk--) mP[gk] = 1;
			for (gk = this.aKv[c1].length - 1; 0 <= gk; gk--) mP[sC[this.aKv[c1][gk]]] += 3, mP[wY[this.aKv[c1][gk]]]++;
			for (cC = aL7 - 1; 0 <= cC; cC--) {
				for (dB = c1 % aL7, gk = aL7 - 1; 0 <= gk; gk--) mP[gk] > mP[dB] && (dB = gk);
				for (gd = -1, gk = bO.v; 0 < gk; gk--)
					if (this.xA[gk] === dB + 1) {
						gd = gk;
						break
					} if (mP[dB] = 0, -1 !== gd) {
					for (mj = 0, gk = bO.v; 0 < gk; gk--) aKz[gd] > aKz[gk] && mj++;
					if (mj !== bO.v - 1) {
						for (gk = this.aKv[c1].length - 1; 0 <= gk; gk--) aKz[gd]++, this.eo[this.aKv[c1][gk]] = gd;
						break
					}
				}
			}
			aL8[c1] = !0
		}
	}, this.aL2 = function(sC, wY, aKz) {
		for (var cC, a3Z, cx = this.xA.length - 1, border = cA(bO.h, bO.v), aL9 = (0 < bO.h % bO.v && border++, new Uint8Array(1 + cx)), e6 = cx; 1 <= e6; e6--) aL9[this.xA[e6]] = e6;
		for (cC = 0; cC < bO.h; cC++) a3Z = aL9[sC[cC] + 1], 0 === this.eo[cC] && a3Z <= bO.v && aKz[a3Z] < border && (aKz[a3Z]++, this.eo[cC] = a3Z);
		for (cC = 0; cC < bO.h; cC++) a3Z = aL9[wY[cC] + 1], 0 === this.eo[cC] && a3Z <= bO.v && aKz[a3Z] < border && (aKz[a3Z]++, this.eo[cC] = a3Z);
		for (e6 = bO.v; 1 <= e6; e6--)
			for (cC = bO.h - 1; 0 <= cC && !(aKz[e6] >= border); cC--) 0 === this.eo[cC] && (aKz[e6]++, this.eo[cC] = e6)
	}, this.aL3 = function() {
		var cC, dv, aL5 = new Uint16Array(bO.v);
		for (aL5[bO.v - 1] = bO.b, cC = bO.v - 2; 0 <= cC; cC--) aL5[cC] = aH.lW[cC].pZ;
		for (aL5[0]--, dv = 0 === aL5[0] ? 1 : 0, cC = bO.h; cC < bO.b; cC++) this.eo[cC] = dv + 1, aL5[dv]--, aL5[dv] <= 0 && dv++
	}, this.aL4 = function() {
		for (var cC = bO.h; cC < bO.b; cC++) this.eo[cC] = 1 + cC % bO.v
	}
}

function aJ7() {
	this.rg = new aKb, this.fP = new aFm
}

function aJ8() {
	var sd, aLA, aLB, aLC, fs = !1;

	function aLD() {
		fs = !0, sd = -1, aLA = new Array(4);
		for (var cC = 3; 0 <= cC; cC--) aLA[cC] = !1;
		var aLE = Math.floor(1 + .02 * c0.min);
		aLB = new Array(4), (aLC = new Array(4))[1] = aLC[3] = aLB[0] = aLB[2] = 0, aLC[0] = aLB[3] = -aLE, aLB[1] = aLC[2] = aLE
	}

	function aLF() {
		if (-1 !== sd)
			if (0 !== bO.p && bL.h3()) {
				for (var aLG = !1, cC = 3; 0 <= cC; cC--) aLA[cC] && (aLG = !0, cF += aLB[cC], cI += aLC[cC], b8.cM(aLB[cC], aLC[cC]), aq.qg());
				aLG ? bE.bI = !0 : uZ.ua()
			} else uZ.ua()
	}
	this.a7N = function(bt) {
		0 !== bO.p && bL.h3() && (fs || aLD(), aLA[bt] = !0, -1 === sd) && (sd = setInterval(aLF, 20), aLF())
	}, this.a7O = function(bt) {
		if (0 !== bO.p && (fs || aLD(), aLA[bt] = !1, -1 !== sd)) {
			for (var aLG = !1, cC = 3; 0 <= cC; cC--) aLG = aLG || aLA[cC];
			aLG || this.ua()
		}
	}, this.ua = function() {
		if (fs && -1 !== sd) {
			for (var cC = 3; 0 <= cC; cC--) aLA[cC] = !1;
			clearInterval(sd), sd = -1
		}
	}
}

function jY() {
	this.a2q = function(player) {
		for (var aK4 = ac.bT.aK4, eT = player << 3, cC = eT + ac.bT.k8[player] - 1; eT <= cC; cC--) this.aAD(aK4[cC])
	}, this.aAD = function(aLH) {
		var bT = ac.bT,
			aLI = bT.k6 - 1,
			aLJ = bT.a1r[aLH],
			aLK = bT.aAZ[aLH],
			aLL = bT.xs[aLH];
		bT.k6 = aLI, bT.a1r[aLH] = bT.a1r[aLI], bT.aK2[aLH] = bT.aK2[aLI], bT.aAB[aLH] = bT.aAB[aLI], bT.xs[aLH] = bT.xs[aLI], bT.aK3[aLH] = bT.aK3[aLI], bT.a1s[aLH] = bT.a1s[aLI], bT.aAZ[aLH] = bT.aAZ[aLI], bT.gx[aLH] = bT.gx[aLI], bT.aAA[aLH] =
			bT.aAA[aLI], bT.aK4[bT.a1r[aLH]] = aLH,
			function(rs) {
				var player = rs >> 3,
					bT = ac.bT,
					cx = bT.k8[player] - 1,
					aLO = (player << 3) + cx;
				bT.k8[player] = cx, aLO !== rs && (bT.aK4[rs] = bT.aK4[aLO], bT.a1r[bT.aK4[rs]] = rs)
			}(aLJ), ac.jc.jc[ab.a99(bT.xs[aLH])][bT.aAZ[aLH]] = aLH, aLI = ab.a99(aLL), aLJ = aLK, aLI = ac.jc.jc[aLI], bT = aLI.pop(), aLJ !== aLI.length && (aLI[aLJ] = bT, ac.bT.aAZ[bT] = aLJ)
	}
}

function aJI() {
	var aLQ = !1,
		x2 = 0,
		bg = 0,
		bi = 0,
		gap = 0,
		ex = null,
		kp = null,
		wd = null;

	function aLS() {
		for (var rn, aLV = 0, cx = 0, gk = Math.floor(bg / 2), gu = Math.floor(bi / 2), rm = 1.5 * Math.PI, cC = bO.v; 0 <= cC; cC--) cx += wd[cC], 0 === wd[cC] && aLV++;
		if (aLQ = !1, kp.clearRect(0, 0, bg, bg), kp.fillStyle = cd.ce, kp.fillRect(0, 0, bg, bg), kp.fillStyle = cd.co, kp.fillRect(0, 0, bg, gap), kp.fillRect(0, 0, gap, bg), kp.fillRect(bg - gap, 0, gap, bg), kp.fillRect(0, bg - gap, bg, gap), 0 <
			cx)
			if (aLV === bO.v) {
				for (cC = bO.v; 0 <= cC; cC--)
					if (0 < wd[cC]) {
						! function(cC, gk, gu) {
							kp.fillStyle = aR.rr[aR.xA[cC]], kp.beginPath(), kp.arc(gk, gk, gu, 0, 2 * Math.PI), kp.fill()
						}(cC, gk, gu);
						break
					}!
				function(gk) {
					var fontSize = gk / 3;
					kp.font = cR.cU.cV(1, fontSize), kp.fillStyle = cd.co, kp.fillText("100%", gk, gk + .1 * fontSize)
				}(gk)
			} else {
				for (cC = 0; cC <= bO.v; cC++) 0 < wd[cC] && (! function(cC, gk, gu, rm, rn) {
					kp.fillStyle = aR.rr[aR.xA[cC]], kp.beginPath(), kp.arc(gk, gk, gu, rm, rn), kp.lineTo(gk, gk), kp.fill()
				}(cC, gk, gu, rm, rn = rm + 2 * Math.PI * wd[cC] / cx), function(gk, gu, rm, rn) {
					var lV = (rn - rm) / (2 * Math.PI),
						fontSize = +gu * Math.min(lV, .37);
					fontSize < 8 || (rm = (rm + rn) / 2, rn = Math.floor(100 * lV + .5) + "%", gu *= .525 - Math.max(.6 * (lV - .7), 0), kp.font = cR.cU.cV(1, fontSize), kp.fillStyle = cd.co, kp.fillText(rn, gk + Math.cos(rm) * gu, gk + Math
						.cos(rm + 1.5 * Math.PI) * gu))
				}(gk, gu, rm, rn), 0 !== cC && rp(gk, gu, rm), rm = rn);
				rp(gk, gu, 1.5 * Math.PI)
			}!
		function(gk, gu) {
			kp.beginPath(), kp.arc(gk, gk, gu, 0, 2 * Math.PI), kp.stroke()
		}(gk, gu)
	}

	function rp(gk, gu, rs) {
		kp.beginPath(), kp.moveTo(gk, gk), kp.lineTo(gk + Math.cos(rs) * gu, gk + Math.cos(rs + 1.5 * Math.PI) * gu), kp.stroke()
	}
	this.aM = function() {
		if (bO.u) {
			var cC;
			for (x2 = 0, wd = new Uint32Array(bO.v + 1), cC = bO.v; 0 <= cC; cC--) wd[cC] = 0;
			for (cC = kd - 1; 0 <= cC; cC--) wd[aR.eo[lU[cC]]] += 1;
			this.resize()
		} else wd = kp = ex = null
	}, this.l2 = function() {
		return bg
	}, this.resize = function() {
		bO.u && (bg = Math.floor(bJ.bK.c2() && !bO.r ? .18 * c0.min : .13 * c0.ge), bg = (bg *= 1 + (.5 + .2 * bJ.bK.c2()) * bO.r) + bg % 2, bi = Math.floor(7 * bg / 8), (ex = ex || document.createElement("canvas")).width = bg, ex.height = bg,
			kp = ex.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * bg), kp.lineWidth = gap, kp.strokeStyle = cd.co, cR.cU.textAlign(kp, 1), cR.cU.textBaseline(kp, 1), aLS())
	}, this.a8l = function() {
		return wd[this.aFj()]
	}, this.aGP = function() {
		return x2 = 31, this.fx(), this.aFj()
	}, this.aFj = function() {
		for (var aLT = 0, cC = bO.v; 0 < cC; cC--) wd[cC] > wd[aLT] && (aLT = cC);
		return aLT
	}, this.fx = function() {
		if (bO.u && 32 <= ++x2) {
			var cC;
			for (x2 = 0, cC = bO.v; 0 <= cC; cC--) wd[cC] = 0;
			for (cC = kd - 1; 0 <= cC; cC--) wd[aR.eo[lU[cC]]] += aN.d0[lU[cC]];
			aLQ = !0
		}
	}, this.cX = function() {
		bO.u && aLQ && aLS()
	}, this.cY = function() {
		bO.u && (bO.r ? cc.drawImage(ex, c3.gap, c3.gap) : cc.drawImage(ex, c3.gap, l3 + 2 * c3.gap))
	}
}

function aLZ() {
	this.og = ["s"], this.hf = ["Accept", "You conquered {0}.", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} is attacking you!", "Choose your start position!",
		"You surrendered!", "The game ended in a stalemate!", "Error: {0}", "", "{0} was immortalized!", "Unclaimed Land {0}", "Player: {0}   Balance: {1}   Territory: {2}   Coordinates: {3}", "Mountains {0}", "Water {0}",
		"Ship Owner: {0}   Strength: {1}", " Message to {0}: ", "{0}: ", "Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"If peace is agreed upon, the game ends in a stalemate.", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requested a non-aggression pact.",
		"You asked {0} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggested you attack {1}.", "Your balance is too low!", "You exported {0} resource{20} to {1}.", "A tax of {0} unit{20} was deducted.",
		"{0} supported you with {1} resource{21}.", "A bot ({0}) supported you with {1} resource{21}.", "Map: {0}", "Dimension: {0}x{1}", "Overall Pixels: {0}", "Land: {0} ({1})", "Water: {0} ({1})", "Mountains: {0} ({1})",
		"Full sending against human players is disabled.", "{0} and {1} other player{21} were conquered.", "{0} and {1} other player{21} left the game.", "{0} and {1} other player{21} surrendered.", "{0} was conquered by {1}.",
		"{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{1006}No Server Response", "{3231}Account successfully saved!", "{3232}Account", "{3249}No Servers Found", "{3252}Thanks for the vote.", "{3265}Please accept Cookies",
		"{3266}Invalid Password Format", "{3605}Invalid Replay Format", "{4207}Lobby Timeout", "{4214}Invalid Username", "{4224}Lobby Error", "{4229}No Client Response", "Undefined", "Error", "LEADERBOARD", "YOU CONQUERED",
		"YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "Humans", "Players", "Bots", "Spectators", "Threshold", "Occupation", "Interest", "Income", "Time", "Quit Game", "More", "Settings", "Replay", "Links", "Game Version", "Delete Data",
		"Privacy Settings", "Close", "Game Statistics", "Surrender", "Force Restart Game", "Menu", "Back", "Select All", "Copy", "Clear", "Launch", "Save & Close", "Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Language", "Resolution", "Large UI", "Font", "Hide Usernames", "Place Balance Above",
		"Hide Zoom Buttons", "Minimum Font Size", "Lobby", "Text Rendering Speed", "Low", "Medium", "High", "Very High", "Small", "Very Small", "Proxied Lobby", "Slow", "Normal", "Fast", "Enabled", "New Game Update",
		"The game has been updated! Please reload the game.", "Reload", "My Account", "Delete Account", "", "", "If peace is agreed upon, the largest territory holder wins the game.", "Hint: Click on a boat to send it to a new location.",
		"Hint: The top 9 emojis are ordered by usage.", "{4480}Not enough gold! 💸"
	]
}

function aJE() {
	this.hf = null;
	var aLa, aLb = new aLZ;
	this.aM = function() {
		aLa = 1 === fa.hr.data[0].value ? new a8q : 2 === fa.hr.data[0].value ? new aHe : 3 === fa.hr.data[0].value ? new a7V : 4 === fa.hr.data[0].value ? new oe : 5 === fa.hr.data[0].value ? new p1 : aLb;
		var cC, cx = aLb.hf.length,
			cs = aLa.hf.length;
		for (cC = 0; cC < cx; cC++) cs === cC ? (aLa.hf.push(aLb.hf[cC]), cs++) : 0 === aLa.hf[cC].length && (aLa.hf[cC] = aLb.hf[cC]);
		this.hf = aLa.hf, fa.hr.translate()
	}, this.aGU = function() {
		var a8p = navigator.language;
		return cR.cS.startsWith(a8p, "en") ? 0 : cR.cS.startsWith(a8p, "ru") ? 1 : cR.cS.startsWith(a8p, "tr") ? 2 : cR.cS.startsWith(a8p, "es") ? 3 : cR.cS.startsWith(a8p, "de") ? 4 : cR.cS.startsWith(a8p, "pl") ? 5 : 0
	}, this.qD = function(gk) {
		for (var iU, cx = this.hf.length, cC = 0; cC < cx; cC++)
			if (cR.cS.startsWith(this.hf[cC], "{") && (iU = this.hf[cC].replace("{" + gk + "}", "")).length < this.hf[cC].length) return iU;
		return gk
	}, this.qC = function(bt, aLd, pM) {
		var cC, e6, cx, f8;
		if (!aLd) return this.hf[bt];
		for (cx = aLd.length, f8 = this.hf[bt], cC = 0; cC < cx; cC++)
			if ("number" == typeof aLd[cC])
				for (e6 = aLa.og.length - 1; 0 <= e6; e6--) f8 = f8.replace("{" + (20 * (e6 + 1) + cC) + "}", (2 === e6 ? 1 !== aLd[cC] : 1 === aLd[cC]) ? "" : aLa.og[e6]);
		if (pM) {
			if (pM.a1t)
				for (cC = 0; cC < pM.a1t.length; cC++) aLd[pM.a1t[cC]] = cR.cS.cT(aLd[pM.a1t[cC]]);
			if (pM.a2I)
				for (cC = 0; cC < pM.a2I.length; cC++) aLd[pM.a2I[cC]] = cR.cS.cW(100 * aLd[pM.a2I[cC]], 1)
		}
		for (cC = 0; cC < cx; cC++) f8 = f8.replace("{" + cC + "}", aLd[cC]);
		return f8
	}
}

function a6r() {
	function aLi(ef) {
		for (var dx = (1 + bO.x) * eq.result.nA / (1e5 * eq.result.es), qJ = "", cC = 0; cC < ef.length; cC++) {
			var aI3 = ef[cC].ci * dx;
			qJ += "  " + ef[cC].name + ": " + cR.cS.aDP(1e5 * aI3)
		}
		qJ.length && (az.a1d(0, "The following clans have won these glorious points:", 45, 0, cR.color.pT(225, 240, 255), cd.ce, -1, !1), az.a1d(0, qJ.trim(), 45, 0, cR.color.pT(225, 240, 255), cd.ce, -1, !1))
	}
	this.aC7 = function(ep) {
		var aLe = aR.xA[aj.aFj()],
			aLf = aR.ey[aLe],
			aLf = (ay.ku("Team " + aLf, 2, 1, 12), az.a1d(0, "Team " + aLf + " won the game!", 40, 0, cd.co, cd.ce, -1, !1), bO.a2 && cR.gv.gw(bO.g) && (eq.result.aC5 += (cR.cS.aDS(aN.jL[bO.g]) ? 2 : 1) * eq.result.nA * (1 + bO.x) * aN.d0[bO.g] /
				eq.result.es), function(a7) {
				var ef = [],
					username = aN.jL,
					cx = a7.length;
				loop: for (var cC = 0; cC < cx; cC++) {
					var en = a7[cC],
						aLk = cR.cS.aDS(username[en]);
					if (aLk) {
						for (var dv = ef.length - 1; 0 <= dv; dv--)
							if (ef[dv].name === aLk) {
								ef[dv].ci += aN.d0[en];
								continue loop
							} ef.push({
							name: aLk,
							ci: aN.d0[en],
							lb: aR.eo[en]
						})
					}
				}
				return ef.sort(function(dv, e6) {
					return e6.ci - dv.ci
				}), ef
			}(ep));
		aLf.length && (2 === bO.a1 ? aLi(aLf) : aLi(function(ef, aLe) {
			for (var cC = ef.length - 1; 0 <= cC; cC--) aR.xA[ef[cC].lb] !== aLe && ef.splice(cC, 1);
			return ef
		}(aLf, aLe)))
	}
}

function aJC() {
	var kq = 0,
		aLl = !0;

	function aLn(f8) {
		8 !== bY.gB() || 2 !== aN.jN[bO.g] && (0 !== aN.bN[bO.g] || bO.s) || az.a21(f8)
	}
	this.fx = function() {
		var cN, s5;
		bE.dH > kq && (kq = bE.dH + 2500, cN = new Date, s5 = cN.getUTCSeconds(), aLl ? s5 < 45 && (aLl = !1) : s5 < 45 || (aLl = !0, (s5 = cN.getUTCMinutes() + 1) % 15 == 0 && aLn(30 === s5 ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function jW() {
	function aLo(xy) {
		var aLs = 4 + .03 * (1 + 1.5 * bJ.bK.c2()) * c0.ge / cG;
		return ab.a97(xy, dS.o1[1]) < aLs
	}
	this.mt = function(player, xy) {
		return !!ab.jo(xy) && ac.bT.k6 !== ac.bT.k7 && ac.bT.k8[player] !== ac.bT.k9 && 0 !== aN.jP[player].length && !!ac.jj.kA(player, xy) && !!aLo(xy)
	}, this.mv = function(player, kD, xy) {
		return !!(ab.jo(xy) && this.kE(player, kD) && ac.jj.kF(xy) && aLo(xy))
	}, this.kE = function(player, id) {
		for (var aK5, eT = player << 3, eU = eT + ac.bT.k8[player], aK4 = ac.bT.aK4, gx = ac.bT.gx, cC = eT; cC < eU; cC++)
			if (id === gx[aK5 = aK4[cC]]) return dS.o1[3] = aK5, !0;
		return !1
	}, this.kC = function(gl) {
		var gi = ac.je.gi;
		return !!this.kE(bO.g, gi) && (aO.ik.kC(gi, gl), !0)
	}, this.vn = function(c6, c7, aLp) {
		var cC, eU, pm, aK4, aKL, xs, aLq, eN, a1s, aLr, player = bO.g,
			cx = ac.bT.k8[player];
		if (0 === cx) return !1;
		for (aK4 = ac.bT.aK4, xs = ac.bT.xs, a1s = ac.bT.a1s, eU = (player = player << 3) + cx, aKL = .4 * cR.cU.ok(.5) * c0.ge / cG, pm = -1, cC = player; cC < eU; cC++) aLr = aK4[cC], aLq = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(a1s[aLr]))), (
			eN = ab.a94(c6, c7, xs[aLr])) - aLq < aKL && (aKL = eN, pm = aLr);
		return !(pm < 0 || (aLp ? dS.ny[0] = ac.bT.gx[pm] : ac.je.gi = ac.bT.gx[pm], 0))
	}, this.vy = function(c6, c7) {
		var cC, pm, aKL, xs, aLq, eN, a1s, cx = ac.bT.k6;
		if (cx < 1) return -1;
		for (xs = ac.bT.xs, a1s = ac.bT.a1s, aKL = 1e3, pm = -1, cC = 0; cC < cx; cC++) aLq = 16 * cR.cU.ok(.5) * (.625 + .125 * Math.sqrt(Math.sqrt(a1s[cC]))), (eN = ab.a94(c6, c7, xs[cC])) < aKL && eN < aLq && (aKL = eN, pm = cC);
		return pm
	}
}

function aJF() {
	this.id = 0, this.im = 0, this.mC = null, this.mD = null, this.mE = null, this.mF = null, this.bK = new a5P, this.aM = function() {
		var self, im;
		self = this, "undefined" == typeof Android || (im = Android.getVersion()) < 12 || (self.im = im, self.id = 1, self.mD = Android),
			function(self) {
				var im;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.mE = mwIOSdataX, self.mF = window.webkit.messageHandlers.iosCommandA, im = self
					.mE.version, self.im = im ? Number(im) : 0)
			}(this),
			function(self) {
				var mC;
				if (0 === self.id) {
					try {
						if (!(mC = window.localStorage)) return;
						mC.setItem("tls7", "1"), mC.removeItem("tls7")
					} catch (error) {
						return
					}
					self.mC = mC
				}
			}(this)
	}
}

function aJ3() {
	var size, jh;
	this.aM = function() {
		size = bO.j, jh = new Uint16Array(bO.j);
		for (var cC = bO.j - 1; 0 <= cC; cC--) jh[cC] = cC
	}, this.fx = function() {
		for (var cC = size - 1; 0 <= cC; cC--) 0 === aN.bN[jh[cC] + bO.h] ? function(dv) {
			size--;
			for (var cC = dv; cC < size; cC++) jh[cC] = jh[cC + 1]
		}(cC) : ad.fx(jh[cC])
	}
}

function aJA() {
	var kj, kq;
	this.aM = function() {
		kj = 1, kq = 0
	}, this.fx = function() {
		0 < kj && (kq = 0 === kq ? bE.dH + 16 : kq, kj = (kj -= .001 * (bE.dH - kq)) < 0 ? 0 : kj, kq = bE.dH, bE.bI = !0)
	}, this.cY = function() {
		0 < kj && (cc.fillStyle = "rgba(0,0,0," + kj + ")", cc.fillRect(0, 0, c0.bg, c0.bh))
	}
}

function aJ2() {
	var aF4, aM0;

	function aM1() {
		var bg = new a3n;
		bg.af(1612), bg.eW(1, 0), bg.eW(6, 7), bg.eW(2, bJ ? bJ.id : 3), bg.eW(1, wN ? 1 : 0), bg.eW(1, wO ? 1 : 0), bg.eW(1, aBv ? aBv.wS : 0);
		for (var cC = 0; cC < aM0.length && cC < 100; cC++) bg.eW(16, aM0.charCodeAt(cC));
		aF4.send(bg.eX), aM2()
	}

	function aM2() {
		aF4 && (aF4.onclose = null, aF4.onopen = null, aF4 = null)
	}
	window.addEventListener("error", function error(dB) {
		window.removeEventListener("error", error);
		return alert("Error:\n" + dB.filename + " " + dB.lineno + " " + dB.colno + " " + dB.message);
		window.removeEventListener("error", error), aM0 = dB.lineno + " " + dB.colno + " " + dB.message, (aF4 = new WebSocket("wss://territorial.io/s52/")).onopen = aM1, aF4.onclose = function() {
			aM2()
		}, 0 === dB.lineno && 0 === dB.colno || (bJ && 1 === bJ.id ? bJ.mD.showToast(aM0) : alert(aM0))
	})
}

function aDB(data) {
	var ha, aM3, p4;

	function aM4(dx) {
		var eT = dx < 0 ? parseInt(data.data[0][0]) - 1 + dx : parseInt(data.data[data.data.length - 1][0]);
		bZ.ba(8, 0, new ir(21, {
			eS: data.eS,
			eT: eT,
			eU: eT + Math.abs(dx) - 1
		}))
	}
	this.show = function() {
		ha.show(), this.resize()
	}, this.cB = function() {
		ha.cB()
	}, this.resize = function() {
		ha.resize(), aM3.resize()
	}, this.hw = function(gk) {
		2 === gk && ha.hx[0].hy()
	}, p4 = [new hg("❌ " + he.hf[92], function() {
		bZ.on()
	}), new hg("⬆️ Prev 100 (🧈 1.01)", function() {
		aM4(-100)
	}), new hg("⬆️ Prev 10 (🧈 0.11)", function() {
		aM4(-10)
	}), new hg("⬇️ Next 10 (🧈 0.11)", function() {
		aM4(10)
	}), new hg("⬇️ Next 100 (🧈 1.01)", function() {
		aM4(100)
	}), new hg("🛠️ Custom", function() {
		bZ.ba(11, 10, new aGV({
			eS: data.eS
		}))
	})], ha = new hd(data.title, p4), aM3 = new lz(ha.hm, data.data)
}
setTimeout(wJ, 1e4), window.onload = function() {
	wJ()
};