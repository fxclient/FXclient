function a() {
	this.b = function() {
		var c = d.e,
			f = g.result.f,
			h = f.length,
			o = (i.j(40 + 16 * c + h * (33 + 3 * (d.k < 7))), i.l(1, 1), i.l(4, 10), i.l(10, h), i.l(1, +(2 === d.m)), i.l(24, g.result.n), p.o);
		for (let q = 0; q < c; q++) i.l(16, o[q]);
		var r = p.r;
		for (let q = 0; q < h; q++) {
			var s = f[q];
			i.l(9, s), i.l(24, r[s])
		}
		if (d.k < 7) {
			var t = u.t;
			for (let q = 0; q < h; q++) i.l(3, 7 & t[f[q]])
		}
		v.w.send(v.w.x, i.y)
	}
}

function z(a0) {
	var a1 = document.createElement("div");
	this.a2 = a1, this.a3 = a0, this.resize = function() {
		for (var c = a0.length, q = 1; q < c; q++) a5.a6.a7(a0[q], 4)
	};
	var q, c = a0.length;
	for (a1.style.width = "100%", a1.style.height = "2.7em", a1.style.marginTop = "0.6em", a1.style.border = "inherit", q = 0; q < c; q++) a0[q].style.verticalAlign = "top", a0[q].style.width = (100 / c).toFixed(2) + "%", a0[q].style.height = "100%",
		a0[q].style.fontSize = "0.75em", a1.appendChild(a0[q])
}

function a8() {
	this.a9 = function(player, aA) {
		a5.aB.aC(0) && a5.aB.aD(player) && aE.aF(aA) && (aG.aH.aI(0, player, aA), d.aJ.aK(player, aA))
	}, this.aL = function(player, aM, aN) {
		p.aO[player]++, a5.aB.aC(1) && a5.aB.aD(player) && a5.aB.aP(player, aN) && a5.aB.aQ(player, aM, 12, d.aR) && a5.aB.aS(player, aN) && ((aN = aU.aV(player, aW.aX[0])) || aU.aY(player)) && aZ(player, aN) && (aG.aH.aI(1, player, aM, aW.aX[
			0]), a5.aB.aa(player), ab.ac(player, aM), ad(player))
	}, this.ae = function(player, aM, af) {
		a5.aB.aC(1) && a5.aB.aD(player) && d.ag && a5.aB.aP(player, af) && a5.aB.ah(player, af) && a5.aB.ai(player, a5.aB.aj(player, aM), af) && (aG.aH.aI(2, player, aM, af), ak.al(player, af))
	}, this.am = function(player, aM, aA) {
		a5.aB.aC(1) && a5.aB.aD(player) && aE.aF(aA) && an.w.ao !== an.w.ap && an.w.aq[player] !== an.w.ar && 0 !== p.at[player].length && a5.aB.aQ(player, aM, 32, 16) && an.au.av(player, aA) && (aG.aH.aI(3, player, aM, aA), a5.aB.aa(player), an
			.w.aw(player))
	}, this.ax = function(player, ay, aA) {
		a5.aB.aC(1) && a5.aB.aD(player) && aE.aF(aA) && an.az.b0(player, ay) && an.au.b1(aA) && (aG.aH.aI(4, player, ay, aA), a5.aB.b2(player, 8), an.w.ax())
	}, this.b3 = function(player, aN) {
		a5.aB.aC(1) && a5.aB.aD(player) && (aN = Math.min(aN, d.b4), aU.aV(player, aN)) && (aG.aH.aI(5, player, aN), aU.b5(player, aN))
	}, this.b6 = function(player, b7) {
		(a5.aB.aC(1) || a5.aB.aC(2)) && a5.aB.aD(player) && (b7 = b8.b9(b7, 0, 1023), aG.aH.aI(6, player, b7), bA.bB(player, 0, b7))
	}, this.bC = function(player, bD) {
		a5.aB.aC(1) && a5.aB.aD(player) && (aG.aH.aI(7, player, bD), bE.bF(player, bD))
	}, this.bG = function(player) {
		(a5.aB.aC(0) || a5.aB.aC(1)) && a5.aB.aD(player) && bH.bG(player) && aG.aH.aI(8, player)
	}, this.bI = function(player) {
		bH.bI(player), aG.aH.aI(9, player)
	}
}

function bJ() {
	var bK, bL, bM;

	function c0(c1, bs, by, bT, bt) {
		bs = bz(c1, bs + 1 + 2 * bT & 3);
		! function(c1, c2) {
			return 1 < Math.abs(c1 % bK - c2 % bK) || 1 < Math.abs(c5(c1) - c5(c2))
		}(c1, bs) && 0 === bt[bs << 2] && (bt[bs << 2] = by)
	}

	function c5(s) {
		return Math.floor((s + .5) / bK) % bL
	}

	function bz(s, bs) {
		return s + bM[bs]
	}
	this.bN = function(bO) {
		var q, bP, c, bR, bU = bV;
		for (bW.bX.bY(bW.bX.bZ(bO)), ba.bb = bK = bU.bc(12), ba.bd = bL = bU.bc(12), bM = [-bK, -1, bK, 1], ba.bo = document.createElement("canvas"), ba.bo.width = ba.bb, ba.bo.height = ba.bd, ba.bi = ba.bo.getContext("2d", {
				alpha: !1
			}), ba.bj = ba.bi.getImageData(0, 0, ba.bb, ba.bd), ba.bp = ba.bj.data, a5.bq.br(ba.bp), c = bU.bc(12), bP = bU.bc(5), bR = bf(bK * bL - 1), q = 0; q < c; q++) ! function(bQ, s, bS, bT) {
			var q, bs, bU = bV,
				bt = ba.bp,
				bu = s,
				bv = s,
				bw = 0,
				bx = 1 + bS,
				by = 2 - bS;
			for (bt[s << 2] = bx, q = 0; q < bQ; q++) bs = bU.bc(2), s = bz(s, bs), bt[s << 2] === bx ? bw % 2 == 1 && c0(bv, bw + 2 * bT + 3, by, bT, bt) : bt[s << 2] = bx, c0(s, bs, by, bT, bt), c0(bv, bs, by, bT, bt), bv = s, bw = bs;
			bz(s, 0) === bu ? (c0(s, 0, by, bT, bt), c0(bu, 0, by, bT, bt)) : bz(s, 1) === bu && (c0(s, 0, by, bT, bt), c0(bu, 2, by, bT, bt));
			0 === bQ && (c0(bu, 0, by, bT, bt), c0(bu, 2, by, bT, bt))
		}(bU.bc(bP), bU.bc(bR), 1 === bU.bc(1), 1 === bU.bc(1));
		var c6, c7, c8, c9, cA, cB, bt = ba.bp,
			cC = !0,
			cD = ba.cE.cF[ba.cG].cD,
			cH = ba.cE.cF[ba.cG].cH;
		for (c7 = 0; c7 < bL; c7++)
			for (c9 = !0, cA = cC, c6 = cB = 0; c6 < bK; c6++) c8 = 4 * c7 * bK + 4 * c6, cB <= c6 && 0 < bt[c8] && (cA = 2 === bt[c8], c9) && (c9 = !1, cA !== cC) ? (cC = cA, cB = c6 + 1, c6 = -1) : (cA ? (bt[c8] = cH[0], bt[1 + c8] = cH[1], bt[
				2 + c8] = cH[2]) : (bt[c8] = cD[0], bt[1 + c8] = cD[1], bt[2 + c8] = cD[2]), bt[3 + c8] = 255);
		ba.bi.putImageData(ba.bj, 0, 0), ba.bk = !0, ba.bl.a4(), bm.bn = !0
	}
}

function cI() {
	var cN, cP;
	this.cJ = 5, this.cK = this.cJ - 1, this.cL = this.cJ + this.cK, this.cM = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.cO = null;

	function cm(q) {
		return cP[q].cZ && cN[q].cm()
	}

	function cp(cj) {
		cP[cj].ca = bm.ca, cP[cj].cb = !1
	}
	this.x = 0, this.cR = 0, this.a4 = function() {
		this.cO = new Array(this.cJ);
		this.cO[0] = "territorial.io";
		var q, cT = cU.cV(0);
		for (cU.cW(0), q = 1; q < this.cJ; q++) this.cO[q] = cX.cY() + ".territorial.io";
		for (cU.cW(cT), cN = new Array(this.cL), cP = new Array(this.cL), q = this.cL - 1; 0 <= q; q--) cP[q] = {
			cZ: !1,
			ca: 0,
			cb: !1
		};
		this.cc(0, 0)
	}, this.cd = function(q) {
		return cN[q]
	}, this.ce = function() {
		return this.cR < this.cJ ? this.cR : this.cR - this.cK
	}, this.cf = function() {
		for (let q = this.cL - 1; 0 <= q; q--) this.cg(q) && bm.ca > cP[q].ca + 15e3 && v.ch.ci(q, cP[q].cb);
		!this.cg(0) && bm.ca > cP[0].ca + 8e3 && (cP[0].ca = bm.ca, this.cc(0, 0))
	}, this.cc = function(cj, ck) {
		if (cP[cj].cZ) {
			if (cN[cj].cm()) return cN[cj].cn(ck), cN[cj].cg();
			cN[cj].co()
		}
		return this.cl(cj, ck), !1
	}, this.cl = function(cj, ck) {
		cP[cj].cZ = !0, cp(cj), cN[cj] = new cq, cN[cj].a4(cj, ck)
	}, this.cn = function(cj, ck) {
		cm(cj) && cN[cj].cn(ck)
	}, this.cr = function(cj, ck) {
		v.cs.ct(cj)
	}, this.cg = function(q) {
		return cP[q].cZ && cN[q].cg()
	}, this.send = function(cj, y) {
		cp(cj), cN[cj].send(y)
	}, this.cu = function(cj) {
		8 === cv.cw() && (cP[cj].cb = !0, v.cx.cy = !0)
	}, this.close = function(cj, cz) {
		cm(cj) && cN[cj].close(cz)
	}, this.d0 = function(cj, cz) {
		d1.d2(cz), cm(cj) && cN[cj].close(cz)
	}, this.d3 = function(cz) {
		for (let q = this.cL - 1; 0 <= q; q--) this.close(q, cz)
	}, this.d4 = function(cj, cz) {
		for (var q = this.cL - 1; 0 <= q; q--) q !== cj && this.close(q, cz)
	}, this.d5 = function() {
		this.close(this.x, 3246)
	}, this.d6 = function(cj, a2) {
		cN[cj].co(), d1.d7(cj, a2.code)
	}
}

function d8() {
	var d9;
	this.dA = null, this.a4 = function() {
		d9 = [], 9 === d.k && this.dB()
	}, this.dB = function() {
		var q, dC = [50, 74, 95, 150, 190, 333];
		if (this.dD = 0, this.dA = [0, 0, 0, 0, 0, 0], d.e <= dC[0]) this.dA[0] = Math.max(b8.dE(d.e * (512 - d.e), dC[0]), 13), d.dF = this.dA[0];
		else
			for (d.dF = d.b4 - d.e, q = 1; q < 6; q++)
				if (d.e <= dC[q]) {
					this.dA[q - 1] = 512 - dC[q - 1] - dG((512 - dC[q - 1]) * (d.e - dC[q - 1]), dC[q] - dC[q - 1]), this.dA[q] = 512 - d.e - this.dA[q - 1];
					break
				} d.dH = d.e + d.dF
	}, this.dI = function(player) {
		d9.push({
			player: player,
			dJ: 14 + cU.dK(20)
		})
	}, this.cf = function() {
		var q;
		if (9 === d.k)
			for (q = d9.length - 1; 0 <= q; q--) --d9[q].dJ <= 0 && (bA.bB(d9[q].player, 0, dM.dN.dO + dM.dN.dP), d9.splice(q))
	}
}

function dQ() {
	var gap, dV, c6 = [0, 0, 0, 0, 0],
		c7 = [0, 0, 0, 0, 0],
		dR = [1, 1, 1, 1, 1],
		dS = [!0, !0, !1, !1, !1],
		dU = (this.dT = [!0, !0, !1, !1, !1], null);
	this.dW = function(dX, dY) {
		dU = dX, dS = dY, dV = [dZ.da, dZ.db, dZ.dc, dZ.dd, dZ.de], this.a4()
	}, this.a4 = function() {
		if (df.dg()) {
			var q, dh = Math.floor((di.dj.dk() ? .261 : .195) * dl.dm),
				dn = Math.floor(.9 * dh),
				dp = Math.floor(.17 * dn);
			if (gap = di.dj.dk() ? 2 * dq.gap : dq.gap, dR[0] = dh / dU[0].width, dR[1] = dn / dU[1].width, dR[2] = dp / dU[2].height, dR[3] = dp / dU[3].height, dR[4] = dp / dU[4].height, dR[3] *= 1.07, c6[0] = gap, c6[1] = gap, c6[2] = gap, c6[
					3] = gap, c6[4] = Math.floor(2 * gap + dR[3] * dU[3].width), c7[0] = gap, c7[1] = c7[0] + gap + dR[0] * dU[0].height, c7[2] = c7[1] + gap + dR[1] * dU[1].height, c7[3] = c7[2] + gap + dR[2] * dU[2].height, c7[4] = c7[3], !dS[
					0])
				for (q = 0; q < 5; q++) c7[q] -= dR[0] * dU[0].height + gap;
			if (!dS[1])
				for (q = 2; q < 5; q++) c7[q] -= dR[1] * dU[1].height + gap
		}
	}, this.dr = function() {
		return !(7 === cv.cw() && di.dj.dk())
	}, this.ds = function(dt, du, dv) {
		if (dU && this.dr())
			for (var q = dS.length - 1; 0 <= q; q--)
				if (dS[q] && this.dT[q] && c6[q] < dt && c7[q] < du && dt < c6[q] + dR[q] * dU[q].width && du < c7[q] + dR[q] * dU[q].height) return dw.dx(9, dw.dy, new dz("You are leaving Territorial.io.", a5.a6.e0(dV[q]))), !0;
		return !1
	}, this.e1 = function() {
		if (dU && this.dr()) {
			var q;
			for (e2.imageSmoothingEnabled = !0, q = 0; q < 5; q++) dS[q] && this.dT[q] && (e2.setTransform(dR[q], 0, 0, dR[q], c6[q], c7[q]), e2.drawImage(dU[q], 0, 0));
			e2.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function e3() {
	this.aK = function(player, aA) {
		e4.e5(player, aE.e6(aA), aE.e7(aA)) && (bm.bn = !0), d.e8 && this.cf()
	}, this.cf = function() {
		d.e9 = !1;
		for (let q = 0; q < d.e; q++) 0 !== p.eA[q] && 0 === p.r[q] && e4.eB(q);
		0 !== p.eA[d.eC] ? (ab.eD[7] = p.r[d.eC], ab.eD[8] = p.eE[d.eC], eF.eG(), eH.eI(), d.eJ || eK.eL(p.eM[d.eC] - 5, p.eN[d.eC] - 5, p.eO[d.eC] + 5, p.eP[d.eC] + 5), eQ.a4()) : eR.show(!1, !1, !1, !0), eS.eT(18), bA.eU(), bA.eV(!0), eW.w
		.eX(), d.aJ = null, eY.eZ = !0, eY.ea(), d.e8 && di.dj.setState(1)
	}
}

function eb() {
	this.ec = new ed, this.aB = new ee, this.ef = new a8, this.eg = new eh, this.ei = new ej
}

function ek() {
	this.c = 0, this.bK = 0, this.el = null, this.a4 = function() {
		this.el = [], this.el.push({
			c6: 0,
			c7: 0,
			em: di.dj.dk(),
			en: null
		}), this.el.push({
			c6: 0,
			c7: 0,
			em: !1,
			en: new eo
		}), this.el[1].en.ep(), this.c = this.el.length, this.bK = 0
	}, this.eq = function() {
		this.bK = Math.floor((di.dj.dk() ? .063 : .04) * dl.dm), this.bK += 4 - this.bK % 4, this.el[0].c6 = dq.gap, this.el[0].c7 = dl.bL - this.bK - dq.gap;
		for (var q = 1; q < this.c; q++) this.el[q].c6 = this.el[q - 1].c6 + Math.floor(di.dj.dk() ? 1.5 * dq.gap : 3.7 * dq.gap) + this.bK, this.el[q].c7 = this.el[0].c7
	}, this.er = function(es, et) {
		if (df.dg())
			for (var q = this.c - 1; 0 <= q; q--)
				if (es >= this.el[q].c6 && et >= this.el[q].c7 && es < this.el[q].c6 + this.bK && et < this.el[q].c7 + this.bK) return q;
		return -1
	}, this.eu = function() {
		for (var q = 1; 1 <= q; q--)
			if (this.el[q].en.dr) return !0;
		return !1
	}, this.resize = function() {
		for (var q = 1; 1 <= q; q--) this.el[q].en.resize()
	}, this.ev = function() {
		return !!this.el[1].en.dr && (this.el[1].en.ds(-5e3, -5e3), !0)
	}, this.ds = function(es, et, dv) {
		if (dv && this.el[1].en.dr) return this.el[1].en.ds(es, et), !0;
		es = this.er(es, et);
		if (dv) {
			if (0 === es) return this.el[es].em = !this.el[es].em, ex.ey.ez(2, this.el[es].em ? 1 : 0), dl.f0(0), !0;
			if (1 <= es && es < 2) return this.el[es].en.a4(), bm.bn = !0
		}
		return !1
	}, this.f1 = function(es, et) {
		return !!this.el[1].en.dr && (this.el[1].en.f1(es), !0)
	}, this.f2 = function() {
		for (var q = 1; 1 <= q; q--)
			if (this.el[q].en.dr) return this.el[q].en.f2(), !0;
		return !1
	}, this.e1 = function() {
		if (df.dg()) {
			e2.imageSmoothingEnabled = !0;
			for (var q = this.c - 1; 0 <= q; q--) e2.fillStyle = this.el[q].em ? f3.f4 : f3.f5, e2.fillRect(this.el[q].c6, this.el[q].c7, this.bK, this.bK), 0 === q ? this.f6(q, df.get(15)) : 1 === q && this.f7(), e2.setTransform(1, 0, 0, 1, 0,
				0), e2.lineWidth = dq.f8, e2.strokeStyle = f3.f9, e2.strokeRect(this.el[q].c6, this.el[q].c7, this.bK, this.bK);
			e2.imageSmoothingEnabled = !1
		}
	}, this.f6 = function(q, dX) {
		var gap = .08 * this.bK,
			zoom = (this.bK - 2 * gap) / dX.width;
		e2.setTransform(zoom, 0, 0, zoom, this.el[q].c6 + gap, this.el[q].c7 + (this.bK - zoom * dX.height) / 2), e2.drawImage(dX, 0, 0)
	}, this.f7 = function() {
		e2.setTransform(1, 0, 0, 1, this.el[1].c6, this.el[1].c7);
		for (var bs = this.bK / 4, c6 = 3; 0 <= c6; c6--)
			for (var c7 = 3; 0 <= c7; c7--) {
				var fA = Math.floor(367 * (c6 + 1) * (c7 + 1) % 256),
					fB = Math.floor(687 * (c6 + 1) * (c7 + 1) % 256),
					fC = Math.floor(651 * (c6 + 1) * (c7 + 1) % 256);
				e2.fillStyle = "rgb(" + fA + "," + fB + "," + fC + ")", e2.fillRect(c6 * bs, c7 * bs, bs, bs)
			}
	}, this.fD = function() {
		for (var q = 1; 1 <= q; q--)
			if (this.el[q].en.dr) return void this.el[q].en.e1()
	}
}

function fE() {
	var a1;
	this.fF = [], this.a1 = document.createElement("div"), this.fG = function(bO, marginTop = null) {
		var title = document.createElement("h2");
		title.textContent = bO, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.a1.appendChild(title)
	}, this.fH = function(bO) {
		var fI = document.createElement("p");
		return fI.textContent = bO, fI.style.fontSize = "0.75em", fI.style.lineHeight = "1.2em", fI.style.marginBottom = "0", this.a1.appendChild(fI), fI
	}, this.fJ = function(fK, fontSize = "1em") {
		var a1 = document.createElement("div");
		a1.innerHTML = fK, a1.style.fontSize = fontSize, a1.style.lineHeight = "1.2em", this.a1.appendChild(a1)
	}, this.fL = function(fM) {
		for (var fN = fM.fN, c = fN.length, q = 0; q < c; q++) this.a1.appendChild(fN[q])
	}, this.fO = function(fP) {
		this.fF.push(fP), this.a1.appendChild(fP.a2)
	}, this.resize = function() {
		for (var c = this.fF.length, q = 0; q < c; q++) this.fF[q].resize && this.fF[q].resize()
	}, (a1 = this.a1).style.position = "absolute", a1.style.height = "auto", a1.style.padding = "0.5em"
}

function fQ() {
	this.fR = function() {
		ex.w.fS(), ex.fT.fU(105, fV.bX.fW(fV.bX.fX(5))), ex.fT.fU(106, fV.bX.fW(fV.bX.fX(8))), ex.fT.fU(109, bV.bc(30)), ex.fT.fU(108, ex.ey.data[109].value), ex.fT.fU(111, ex.ey.data[109].value + 1), ex.fT.fU(107, 0), ex.fT.fU(110, "")
	}, this.fY = function() {
		var fa, fb, fc;
		bV.size < i.fZ(18) ? v.w.d0(0, 3254) : (fa = bV.bc(5), fb = bV.bc(3), fc = bV.bc(3), bV.fd(186 + 16 * (fa + fb + fc) + 32 + 32 + 30 + 128) ? (ex.fT.fU(109, bV.bc(30)), ex.fT.fU(107, bV.bc(16)), ex.fT.fU(108, bV.bc(30)), ex.fT.fU(112, bV
			.bc(30)), ex.fT.fU(111, bV.bc(30)), ex.fT.fU(113, bV.fe(32)), ex.fT.fU(122, bW.ff.fg(fa)), ex.fT.fU(135, bW.ff.fg(fb)), ex.fT.fU(136, bW.ff.fg(fc)), ex.fT.fU(137, bV.fe(32)), ex.fT.fU(138, bV.fe(32)), ex.fT.fU(139, bV.bc(
			30)), ex.fT.fU(141, bV.fe(32)), ex.fT.fU(142, bV.fe(32)), ex.fT.fU(143, bV.fe(32)), ex.fT.fU(144, bV.fe(32)), 8 === dw.dy && dw.fh().fi(16, !0)) : v.w.d0(0, 3267))
	}
}

function fj() {
	this.fk = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.fl = [f3
		.f9, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", f3.f9, "rgb(170,170,170)"
	], this.fm = [f3.f9, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", f3.f9, f3.fn], this.fo = [f3.fn, f3.f9, f3.f9, f3.f9, f3.fn, f3.fn, f3.fn, f3.fn, f3.f9];
	var fp = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		fu = (this.fq = ["rgba(" + fp[0] + ",", "rgba(" + fp[1] + ",", "rgba(" + fp[2] + ",", "rgba(" + fp[3] + ",", "rgba(" + fp[4] + ",", "rgba(" + fp[5] + ",", "rgba(" + fp[6] + ",", "rgba(" + fp[7] + ",", "rgba(" + fp[8] + ",", "rgba(" + fp[9] +
				","
			], this.fr = ["rgb(" + fp[0] + ")", "rgb(" + fp[1] + ")", "rgb(" + fp[2] + ")", "rgb(" + fp[3] + ")", "rgb(" + fp[4] + ")", "rgb(" + fp[5] + ")", "rgb(" + fp[6] + ")", "rgb(" + fp[7] + ")", "rgb(" + fp[8] + ")", "rgb(" + fp[9] + ")"],
			this.fs = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.ft = [
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
	this.fv = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.t = new Uint8Array(d.b4), this.fw = null, this.fx = null, this.a4 = function(fy) {
		this.t.fill(0), this.fz(), d.ag && (g0.cy && g0.cE.g1 ? this.g2() : 9 === d.k ? this.g3() : this.cf(fy))
	}, this.g2 = function() {
		var q, c = d.dH;
		for (this.fv = [0, 1, 2, 3, 4, 5, 6, 7, 8], q = 0; q < c; q++) this.t[q] = g0.cE.g1[q]
	}, this.fz = function() {
		for (var q = this.fv.length - 1; 0 <= q; q--) this.fv[q] = q;
		this.fw = [], this.fx = []
	}, this.g3 = function() {
		for (var q = d.e + g4.dD - 1; 0 <= q; q--) this.t[q] = 1;
		for (q = d.e + g4.dD; q < d.b4; q++) this.t[q] = 2;
		this.fv[1] = 7, this.fv[2] = 8
	}, this.cf = function(fy) {
		var g5 = new Uint8Array(d.e),
			g6 = new Uint8Array(d.e),
			g7 = new Uint16Array(8),
			g8 = new Uint16Array(this.fv.length);
		this.g9(fy, g5, g6, g7), this.gA(g7), d.e8 || this.gB(g8, g5, g6), this.gC(g5, g6, g8), d.e8 ? this.gD() : this.gE()
	}, this.g9 = function(fy, g5, g6, gF) {
		for (var fC, a2, gG, c = this.fv.length - 1, gH = new Uint16Array(c), q = d.e - 1; 0 <= q; q--) {
			for (fC = c; 1 <= fC; fC--) gH[fC - 1] = Math.abs(4 * fy[q].gI[0] - fu[fC][0]) + Math.abs(4 * fy[q].gI[1] - fu[fC][1]) + Math.abs(4 * fy[q].gI[2] - fu[fC][2]);
			for (gG = 768, fC = c - 1; 0 <= fC; fC--) gH[a2 = (fC + q) % c] < gG && (gG = gH[a2], g5[q] = a2);
			for (gF[g5[q]] += 4, gG = 768, fC = c - 1; 0 <= fC; fC--) gH[a2 = (fC + q) % c] < gG && a2 !== g5[q] && (gG = gH[a2], g6[q] = a2);
			gF[g6[q]]++
		}
	}, this.gA = function(gF) {
		for (var fC, em, c = this.fv.length - 1, q = c; 0 <= q; q--) this.fv[q] = q;
		for (q = c - 1; 0 <= q; q--) gF[q]++;
		for (q = 1; q <= c; q++) {
			for (em = 0, fC = 1; fC < c; fC++) gF[fC] > gF[em] && (em = fC);
			gF[em] = 0, this.fv[q] = em + 1
		}
	}, this.gB = function(g8, g5, g6) {
		var q, fC, gJ, dU, bs, a2, dR, fB, gK = this.fv.length - 1,
			gL = new Uint16Array(gK),
			gM = [],
			dp = Math.max(d.e + 1 >> 1, 6);
		loop: for (q = 0; q < d.e; q++)
			if (null !== (gJ = a5.gN.gO(p.gP[q]))) {
				for (fC = this.fw.length - 1; 0 <= fC; fC--)
					if (gJ === this.fw[fC] && this.fx[fC].length < dp) {
						this.fx[fC].push(q);
						continue loop
					} this.fw.push(gJ), gM.push(!1), this.fx.push([q])
			}
		for (fC = this.fw.length - 1; 0 <= fC; fC--) {
			for (bs = -1, dU = this.fw.length - 1; 0 <= dU; dU--) !gM[dU] && (-1 === bs || this.fx[dU].length > this.fx[bs].length) && (bs = dU);
			for (dU = gK - 1; 0 <= dU; dU--) gL[dU] = 1;
			for (dU = this.fx[bs].length - 1; 0 <= dU; dU--) gL[g5[this.fx[bs][dU]]] += 3, gL[g6[this.fx[bs][dU]]]++;
			for (q = gK - 1; 0 <= q; q--) {
				for (a2 = bs % gK, dU = gK - 1; 0 <= dU; dU--) gL[dU] > gL[a2] && (a2 = dU);
				for (dR = -1, dU = d.gQ; 0 < dU; dU--)
					if (this.fv[dU] === a2 + 1) {
						dR = dU;
						break
					} if (gL[a2] = 0, -1 !== dR) {
					for (fB = 0, dU = d.gQ; 0 < dU; dU--) g8[dR] > g8[dU] && fB++;
					if (fB !== d.gQ - 1) {
						for (dU = this.fx[bs].length - 1; 0 <= dU; dU--) g8[dR]++, this.t[this.fx[bs][dU]] = dR;
						break
					}
				}
			}
			gM[bs] = !0
		}
	}, this.gC = function(g5, g6, g8) {
		for (var q, gR, c = this.fv.length - 1, border = dG(d.e, d.gQ), gS = (0 < d.e % d.gQ && border++, new Uint8Array(1 + c)), fC = c; 1 <= fC; fC--) gS[this.fv[fC]] = fC;
		for (q = 0; q < d.e; q++) gR = gS[g5[q] + 1], 0 === this.t[q] && gR <= d.gQ && g8[gR] < border && (g8[gR]++, this.t[q] = gR);
		for (q = 0; q < d.e; q++) gR = gS[g6[q] + 1], 0 === this.t[q] && gR <= d.gQ && g8[gR] < border && (g8[gR]++, this.t[q] = gR);
		for (fC = d.gQ; 1 <= fC; fC--)
			for (q = d.e - 1; 0 <= q && !(g8[fC] >= border); q--) 0 === this.t[q] && (g8[fC]++, this.t[q] = fC)
	}, this.gD = function() {
		var q, gT, gF = new Uint16Array(d.gQ);
		for (gF[d.gQ - 1] = d.b4, q = d.gQ - 2; 0 <= q; q--) gF[q] = gU.gV[q].dJ;
		for (gF[0]--, gT = 0 === gF[0] ? 1 : 0, q = d.e; q < d.b4; q++) this.t[q] = gT + 1, gF[gT]--, gF[gT] <= 0 && gT++
	}, this.gE = function() {
		for (var q = d.e; q < d.b4; q++) this.t[q] = 1 + q % d.gQ
	}
}
var gW, gX, gY, gZ, iJ, iK, iL;

function ga() {
	gW = 8, gX = 0, gY = new Uint16Array(gW)
}

function gb() {
	gZ = d.ag ? new Uint8Array(d.b4) : null
}

function gc(player, gd) {
	var ge;
	d.ag && (gZ[player] = 0), !aU.aY(player) || gd < 60 || (0 === p.gf[player].length ? an.gg.cf(player) || (gh.gi(player - d.e, 200), gj(player, gd, gh.gd[player - d.e], ak.gk(player))) : 0 < p.at[player].length && cU.random() < cU.value(p.at[
		player].length > p.gf[player].length ? 7 : 3) && an.gg.cf(player) || (ge = ak.gk(player), p.eE[player] > ge && gd < p.eE[player] - ge && (gd = p.eE[player] - ge), d.ag ? gl(player, gd, gh.gd[player - d.e], ge) : gm(player, gd, gh.gd[
		player - d.e])))
}

function gl(player, gd, gn, ge) {
	var aN;
	go(player, !1) || gp(player, !1) ? (gZ[player] = 1, gq(player) || (gr() ? (gs(player, gd), gt(player, d.b4, gn)) : (cU.gu(gh.gv[gn]) ? gx(player, gd, aN = gw(player)) : (gy() && cU.gu(gh.gz[gn]) && h0(), gx(player, gd, aN = h1(player))), gt(
		player, aN, gn)))) : 0 < p.at[player].length && cU.random() < cU.value(60) && an.gg.cf(player) || (gh.gi(player - d.e, 200), gj(player, gd, gn, ge))
}

function h2(player, gd) {
	go(player, !1) || gp(player, !1) ? (gZ[player] = 1, gr() ? gs(player, gd) : gx(player, gd, h3())) : gj(player, gd, 0, 0)
}

function gt(player, aN, gn) {
	3 <= gn && 2142 < bm.h4() && (aN === d.b4 || p.eE[aN] < dG(p.eE[player], 20)) && gh.gi(player - d.e, 25)
}

function gj(player, gd, gn, ge) {
	var q, fC, dU;
	if (0 !== u.t[player] && !(5 === gn && p.eE[player] < ge || 4 === gn && p.eE[player] < dG(ge, 2)))
		for (q = cU.dK(h5), fC = 0; fC < h5; fC++)
			if (dU = h6[(fC + q) % h5], u.t[dU] === u.t[player] && 1 === gZ[dU]) return void h7.ei.h8(player, dU, gd)
}

function gm(player, gd, gn) {
	!go(player, !0) && !gp(player, !0) || gq(player) || (gr() ? gs(player, gd) : cU.gu(gh.gv[gn]) ? gx(player, gd, gw(player)) : (gy() && cU.gu(gh.gz[gn]) && h0(), gx(player, gd, h1(player))))
}

function h9(player, gd) {
	(go(player, !0) || gp(player, !0)) && (gr() ? gs(player, gd) : gx(player, gd, h3()))
}

function gx(player, gd, aN) {
	dG(p.eE[player], 8) > p.eE[aN] && (gd = (hA = dG(11 * p.eE[aN], 5)) < gd ? gd : hA);
	var hA = p.hB[player].length;
	hC(player, aN), hD(player, aN, hA, gd)
}

function gs(player, gd) {
	var aN = d.b4,
		c = p.hB[player].length;
	return hE(player), p.hB[player].length !== c && (hD(player, aN, c, gd), !0)
}

function hF() {
	this.hG = function() {
		ex.fT.hH(), ex.fT.hI(), v.w.close(0, 3255), 0 === di.id ? di.hJ && di.hJ.clear() : 1 === di.id ? di.hK.saveString(199, "") : 2 === di.id && di.hL.postMessage("clear")
	}, this.hM = function() {
		2 === di.id ? di.hL.postMessage("showConsentForm") : 1 === di.id ? di.hK.setState(7) : hN.hO.showCMPScreen()
	}, this.hP = function() {
		this.setState(14)
	}, this.hQ = function() {
		var bO = ex.ey.hR(101),
			max = ("string" != typeof(bO = "" === bO ? function() {
				{
					if (2 === di.id) return di.hV.password;
					if (1 === di.id) return 12 <= di.hW ? di.hK.loadString(22) : ""
				}
				return hX.hY(9)
			}() : bO) && (bO = ""), Math.floor(Math.pow(2, 48))),
			hT = Math.floor(parseInt(cX.hU(bO)));
		return 0 < hT && hT < max ? ex.ey.ez(101, bO) : (hT = Math.floor(1 + (max - 1) * Math.random()), ex.ey.ez(101, bO)), hT
	}, this.dk = function() {
		return 1 === ex.ey.hZ(2)
	}, this.ha = function() {
		ex.ey.ez(102, "")
	}, this.setState = function(hb) {
		1 === di.id && 5 <= di.hW && di.hK.setState(hb)
	}, this.hc = function() {
		var hd;
		1 === di.id && 7 <= di.hW ? di.hK.setState(5) : ((hd = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = hd.toString())
	}, this.he = function() {
		1 !== di.id || di.hW < 17 || di.hK.saveString(23, document.documentElement.outerHTML)
	}, this.hf = function() {
		0 === di.id ? hN.hO.a4() : 1 === di.id ? di.hK.prepareAd("1688441405") : 2 === di.id && (0 === di.hW ? di.hL.postMessage("prepare ad 4500876070") : di.hL.postMessage("loadAds 4500876070"))
	}, this.hg = function(hh) {
		return 0 === di.id ? !!hN.hO.hi() : 1 === di.id ? 12 <= di.hW && (di.hK.presentAd(hh), !0) : 2 === di.id && (0 === di.hW ? di.hL.postMessage("show ad " + hh) : di.hL.postMessage("showAd"), !0)
	}, this.hj = function() {
		2 === di.id && di.hW < 23 && dw.dx(4, 1, new hk("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + dZ.db + "' target='_blank'>" +
			dZ.db + "</a>", !0, [new hl("❌ " + hm.hn[92], function() {
				dw.dx(0)
			}, f3.ho)]))
	}
}

function hp() {
	this.hq = function(cj, id) {
		i.j(24), i.l(1, 0), i.l(6, 6), i.l(1, id), i.l(16, Math.abs(4096 + hr.position[id] + hr.hs[id]) % 65536), v.w.send(cj, i.y)
	}, this.ci = function(cj, cb) {
		i.j(8), i.l(1, 0), i.l(6, 4), i.l(1, cb ? 1 : 0), v.w.send(cj, i.y)
	}, this.ht = function() {
		i.j(58), i.l(1, 0), i.l(6, 5), i.l(8, v.w.ce()), i.l(10, hu.hv), i.l(9, hu.hw), i.l(10, hx), i.l(14, hy.hz), v.w.send(v.w.x, i.y)
	}, this.i0 = function(aA) {
		i.j(27), i.l(1, 1), i.l(4, 0), i.l(22, aA), v.w.send(v.w.x, i.y)
	}, this.i1 = function(aM, aN) {
		i.j(25), i.l(1, 1), i.l(4, 1), i.l(10, aM), i.l(10, aN), v.w.send(v.w.x, i.y)
	}, this.i2 = function(aM, af) {
		i.j(24), i.l(1, 1), i.l(4, 2), i.l(10, aM), i.l(9, af), v.w.send(v.w.x, i.y)
	}, this.i3 = function(aM, aA) {
		i.j(37), i.l(1, 1), i.l(4, 3), i.l(10, aM), i.l(22, aA), v.w.send(v.w.x, i.y)
	}, this.i4 = function(ay, aA) {
		i.j(37), i.l(1, 1), i.l(4, 4), i.l(10, ay), i.l(22, aA), v.w.send(v.w.x, i.y)
	}, this.i5 = function(aN) {
		i.j(15), i.l(1, 1), i.l(4, 5), i.l(10, aN), v.w.send(v.w.x, i.y)
	}, this.i6 = function(ew) {
		i.j(15), i.l(1, 1), i.l(4, 6), i.l(10, ew), v.w.send(v.w.x, i.y)
	}, this.i7 = function(bD) {
		i.j(6), i.l(1, 1), i.l(4, 7), i.l(1, bD), v.w.send(v.w.x, i.y)
	}, this.i8 = function() {
		i.j(5), i.l(1, 1), i.l(4, 8), v.w.send(v.w.x, i.y)
	}, this.i9 = function(iA, iB) {
		i.j(24), i.l(1, 1), i.l(4, 15), i.l(9, iB), i.l(10, iA), v.w.send(v.w.x, i.y)
	}, this.iC = function(iD) {
		i.j(14), i.l(1, 1), i.l(4, 14), i.l(9, iD), v.w.send(v.w.x, i.y)
	}, this.iE = function(iF, target) {
		var q, c = iF.length;
		for (i.j(14 + 9 * c), i.l(1, 1), i.l(4, 13), i.l(9, target), q = 0; q < c; q++) i.l(9, iF[q]);
		v.w.send(v.w.x, i.y)
	}
}

function iM() {
	var iN, iO, bK, c6, c7, iP, iQ;
	this.a4 = function() {
		iN = new Array(2), iO = new Array(2), this.iR = !1, iQ = iP = iL = iK = 0, iJ = 1, this.resize()
	}, this.resize = function() {
		bK = (bK = Math.floor((di.dj.dk() ? .072 : .0502) * dl.dm)) < 8 ? 8 : bK;
		for (var q = 1; 0 <= q; q--) iN[q] = document.createElement("canvas"), iN[q].width = bK, iN[q].height = bK, iO[q] = iN[q].getContext("2d", {
			alpha: !0
		});
		this.iS(),
			function() {
				for (var j1 = Math.floor(1 + bK / 20), q = 1; 0 <= q; q--) iO[q].clearRect(0, 0, bK, bK), iO[q].fillStyle = f3.j2, iO[q].beginPath(), iO[q].arc(bK / 2, bK / 2, bK / 2 - j1, 0, 2 * Math.PI), iO[q].fill(), iO[q].lineWidth = j1, iO[
					q].fillStyle = f3.f9, iO[q].strokeStyle = f3.f9, iO[q].beginPath(), iO[q].arc(bK / 2, bK / 2, bK / 2 - j1, 0, 2 * Math.PI), iO[q].stroke(), j3(iO[q], 0, 0, bK, j1, .3, 0 === q)
			}()
	}, this.iX = function() {
		return -iK / iJ
	}, this.iY = function() {
		return -iL / iJ
	}, this.iZ = function(ia, dt) {
		iK = iJ * ia - dt
	}, this.ib = function(ic, du) {
		iL = iJ * ic - du
	}, this.ds = function(iV, iW) {
		return d.ie || ! function(iV, iW) {
			return Math.pow(iV - (c6 + bK / 2), 2) + Math.pow(iW - (c7 + bK / 2), 2) < bK * bK / 4 || Math.pow(iV - (c6 + bK / 2), 2) + Math.pow(iW - (c7 + 2 * bK), 2) < bK * bK / 4
		}(iV, iW) || ex.ey.data[8].value ? (eK.ih() && (this.iR = !0, iP = iV, iQ = iW), !1) : iW < c7 + 1.25 * bK ? this.ig(Math.floor(dl.bK / 2), Math.floor(dl.bL / 2), -200) : this.ig(Math.floor(dl.bK / 2), Math.floor(dl.bL / 2), 200)
	}, this.f1 = function(iV, iW) {
		var ii, ij, ik, il;
		return !eK.ih() || (ii = iK, ij = iL, iK += ik = iP - iV, iL += il = iQ - iW, bA.f1(ik, il), this.im(), iP = iV, iQ = iW, ii !== iK) || ij !== iL
	}, this.ig = function(es, et, deltaY) {
		var dR;
		if (eK.ih()) {
			if (0 < deltaY) dR = (dR = 500 / (500 + deltaY)) < .5 ? .5 : dR;
			else {
				if (!(deltaY < 0)) return !1;
				dR = 2 < (dR = (500 - deltaY) / 500) ? 2 : dR
			}
			this.io(es, et, dR), bm.bn = !0
		}
		return !0
	}, this.io = function(c6, c7, ip) {
		var iz;
		ip = iz = (iz = 1024 < (iz = ip) * iJ ? 1024 / iJ : iz) * iJ < .125 ? .125 / iJ : iz, bA.zoom(ip, c6, c7),
			function(iz, es, et) {
				iJ *= iz, iK = (iK + es) * iz - es, iL = (iL + et) * iz - et, j0.im()
			}(ip, c6, c7)
	}, this.im = function() {
		var is = dl.bK / 16,
			it = 0,
			iu = dl.bL / 16,
			iv = 0;
		iK < -dl.bK + is && (it = -dl.bK + is - iK), iK > iJ * ba.bb - is && (it = iJ * ba.bb - is - iK), iL < -dl.bL + iu && (iv = -dl.bL + iu - iL), iL > iJ * ba.bd - iu && (iv = iJ * ba.bd - iu - iL), iK += it, iL += iv, iw.ix(), bA.iy(it, iv)
	}, this.iS = function() {
		c6 = dl.bK - bK - dq.gap, c7 = Math.floor(dl.bL / 2 - 1.25 * bK)
	}, this.e1 = function() {
		ex.ey.data[8].value || (e2.drawImage(iN[0], c6, c7), e2.drawImage(iN[1], c6, Math.floor(c7 + 3 * bK / 2)))
	}
}

function j4() {
	var bK, c6, j5, j6, j7, dr, aM, j8, j9, jA, jB = 11 / 12;

	function jE() {
		var jJ = Math.floor(aM * (bK - 2 * j5)),
			jK = 1 + Math.floor(.0625 * eF.bL),
			jL = 1 + Math.floor(.3 * eF.bL),
			dp = Math.floor(.55 * eF.bL);
		j7.clearRect(0, 0, bK, eF.bL), j7.fillStyle = f3.jM, j7.fillRect(0, 0, j5, eF.bL), j7.fillRect(j5 + jJ, 0, bK - j5 - jJ, eF.bL), j7.fillStyle = aM < 1 / 3 ? "rgba(" + Math.floor(3 * aM * 130) + ",130,0,0.85)" : aM < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (aM - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (aM - 2 / 3) * 130) + ",0.85)", j7.fillRect(j5, 0, jJ, eF.bL), j7.fillStyle = f3.f9, j7.fillRect(0, 0, bK, 1), j7.fillRect(0, eF.bL - 1, bK, 1),
			j7.fillRect(0, 0, 1, eF.bL), j7.fillRect(j5, 0, 1, eF.bL), j7.fillRect(j5 + jJ, 0, 1, eF.bL), j7.fillRect(bK - j5, 0, 1, eF.bL), j7.fillRect(bK - 1, 0, 1, eF.bL), j7.fillRect(Math.floor(.25 * eF.bL) + jL, Math.floor((eF.bL - jK) / 2), eF
				.bL - 2 * jL, jK), j7.fillRect(Math.floor(bK - 1.25 * eF.bL) + jL, Math.floor((eF.bL - jK) / 2), eF.bL - 2 * jL - jL % 2, jK), j7.fillRect(Math.floor(bK - 1.25 * eF.bL) + Math.floor((eF.bL - jK) / 2), jL, jK, eF.bL - 2 * jL - jL % 2),
			j8 = a5.aB.aj(d.eC, eF.jN()), j7.fillText(a5.gN.jO(j8) + " (" + a5.gN.jP(100 * aM, +(aM < .1)) + ")", Math.floor(.5 * bK), dp)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		aM = newPercentage;
	};
	keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	keybindFunctions.setRelative = (arg1) => eF.jb(arg1);

	function jZ(iz) {
		return !(1 < iz && 1 === aM || (1 < iz && iz * aM - aM < 1 / 1024 ? iz = (aM + 1 / 1024) / aM : iz < 1 && aM - iz * aM < 1 / 1024 && (iz = (aM - 1 / 1024) / aM), aM = b8.b9(aM * iz, 1 / 1024, 1), jE(), 0))
	}

	function ja(es) {
		return aM !== (aM = b8.b9((es - c6 - j5) / (bK - 2 * j5), 1 / 1024, 1)) && (jE(), !0)
	}
	this.c7 = 0, this.jC = !1, this.a4 = function() {
		dr = !d.e9 && !d.eJ, jA = !1, aM = .5, j8 = 0, this.jC = !1, this.resize()
	}, this.resize = function() {
		di.dj.dk() && dl.bK < .8 * dl.bL ? (this.bL = Math.floor(.0536 * dl.dm), bK = dl.bK - 4 * dq.gap - this.bL) : (bK = Math.floor((di.dj.dk() ? .65 : .389) * dl.dm), bK += 12 - bK % 12, this.bL = Math.floor(bK / 12)), j5 = Math.floor(3 *
			this.bL / 2), j9 = a5.a6.jD(1, Math.floor(.5 * this.bL)), (j6 = document.createElement("canvas")).width = bK, j6.height = this.bL, (j7 = j6.getContext("2d", {
			alpha: !0
		})).font = j9, a5.a6.textBaseline(j7, 1), a5.a6.textAlign(j7, 1), this.iS(), jE()
	}, this.iS = function() {
		c6 = di.dj.dk() && dl.bK < .8 * dl.bL ? this.bL + 3 * dq.gap : Math.floor((dl.bK - bK) / 2), this.c7 = dl.bL - this.bL - jF.jG() * dq.gap
	}, this.eV = function() {
		jA && (jA = !1, jE())
	}, this.dr = function() {
		return !(!dr || jQ.jR && c6 < Math.floor(dq.gap + 5.5 * this.bL))
	}, this.jS = function(jT) {
		return !!this.dr() && c6 + bK > dl.bK - jT - dq.gap
	}, this.eG = function() {
		dr = !d.eJ
	}, this.jU = function() {
		dr = !1
	}, this.jN = function() {
		return b8.b9(Math.floor(1024 * aM + .5) - 1, 0, 1023)
	}, this.er = function(es, et) {
		return this.dr() && c6 < es && es < c6 + bK && et > this.c7
	}, this.ds = function(es, et) {
		return !!this.dr() && !!eF.er(es, et) && (j0.iR = !1, function(jY, es, et) {
			if (function(es, et) {
					return c6 < es && es < c6 + j5 && et > eF.c7
				}(es, et)) return jZ(jB);
			if (function(es, et) {
					return c6 + bK - j5 < es && es < c6 + bK && et > eF.c7
				}(es, et)) return jZ(1 / jB);
			return jY.jC = !0, ja(es)
		}(this, es, et) && (bm.bn = !0), !0)
	}, this.jb = function(dR) {
		0 !== d.jc && this.dr() && jZ(dR) && (bm.bn = !0)
	}, this.ig = function(deltaY) {
		var dR;
		return !(0 === deltaY || !this.dr()) && jZ(dR = 0 < deltaY ? (dR = 400 / (400 + deltaY)) < jB ? jB : dR : 1 / jB < (dR = (400 - deltaY) / 400) ? 1 / jB : dR)
	}, this.f1 = function(es) {
		return !!this.jC && ja(es)
	}, this.jd = function() {
		this.jC = !1
	}, this.cf = function() {
		this.dr() && j8 !== a5.aB.aj(d.eC, this.jN()) && (jA = !0)
	}, this.e1 = function() {
		this.dr() && e2.drawImage(j6, c6, this.c7)
	}
}

function je() {
	var y, jf, jg, jh;
	this.hv = 0, this.hw = 0, this.a4 = function() {
		var j6, dR;
		7 === cv.cw() && (y = bV.y, jf = 0, jg = bm.ca + 4500, jh = v.iD.ji() ? 2 : 0, cv.setState(10), e2.imageSmoothingEnabled = !0, cv.jp(), j6 = df.jr("loading"), dR = (di.dj.dk() ? .396 : .25) * dl.dm / j6.width, e2.setTransform(dR, 0, 0,
			dR, Math.floor((dl.bK - dR * j6.width) / 2), Math.floor((dl.bL - dR * j6.height) / 2)), e2.imageSmoothingEnabled = !1, e2.drawImage(j6, 0, 0), e2.setTransform(1, 0, 0, 1, 0, 0))
	}, this.jj = function() {
		0 < jh && bm.ca > jg && (jh--, jg += 4500, 0 === bm.jl) && 0 === bm.h4() && (0 === jh && v.w.x < v.w.cJ && (v.w.x += v.w.cK), v.w.cc(v.w.x, 5))
	}, this.jm = function() {
		var s, q;
		return 10 === cv.cw() && (s = bV.y, q = bV.ew, v.iD.jn(y), y = null, bV.a4(s), bV.ew = q, !0)
	}, this.jo = function() {
		10 === cv.cw() && 2 <= ++jf && (v.iD.jn(y), y = null)
	}
}

function js() {
	this.size = 0, this.ew = 0, this.y = null, this.a4 = function(y) {
		this.ew = 0, this.y = y, this.size = y.length
	}, this.jt = function() {
		this.y = null
	}, this.bc = function(size) {
		for (var dS = 0, y = this.y, ih = this.ew + size - 1, q = this.ew; q <= ih; q++) dS |= (y[q >> 3] >> 7 - (7 & q) & 1) << ih - q;
		return this.ew += size, this.ew > 8 * this.size && console.log("error unwrapper"), dS
	}, this.fe = function(size) {
		var fC = size >> 1;
		return (1 << fC) * this.bc(size - fC) + this.bc(fC)
	}, this.ju = function(size) {
		for (var gH = new Array(size), q = 0; q < size; q++) gH[q] = this.bc(10);
		return cX.bN(gH)
	}, this.fd = function(jv) {
		return this.size === i.fZ(jv)
	}
}
var nf, ng, nh, iH, hx, iI, pK, pL, pM, pN, h6, h5, u1, tY, u2, u3, th, tW, u4, tX, u5, u6, q6, u7, u8, vQ, e2, a4G, a0j, a96, hy, d, gh, q0, wn, wm, eK, e4, cX, le, jQ, eS, a6n, vm, oS, eF, j0, mX, wl, kd, eH, eR, ma, w5, cv, gU, df, ol, hX, aU, ak,
	bA, p, a5P, wk, dM, wh, a7w, uf, aFC, wj, vi, eQ, w3, me, bE, hu, dl, cU, g4, v, wR, aFD, wo, sY, wp, mw, g0, hm, h7, aG, a5, f3, vj, i, fV, bW, bV, aFE, oU, dZ, b8, aE, an, aW, eW, bH, g, ba, vq, dw, hN, a3K, a6e, a6k, a4n, iw, eY, dq, ab, vk,
	bm, u, lx, hr, di, aAZ, ex, jF, d1, aFF, jw = [60, 74, 112, 200, 256, 512];

function jx() {
	var jy, jz, k0, k1, k2, k3;

	function kA(q) {
		jy[q] = 1 + dG(k2[q] * cU.random(), 10 * cU.value(100))
	}
	this.k4 = ["Very Easy", "Easy", "Normal", "Hard", "Harder", "Very Hard"], this.k5 = [97, 95, 93, 90, 87, 84], this.gz = [98, 95, 70, 40, 20, 0], this.k6 = [85, 70, 50, 30, 7, 3], this.gv = [0, 0, 5, 25, 50, 90], this.gd = null, this.a4 =
		function() {
			var q, k7;
			if (jy = new Uint8Array(d.dF), jz = new Uint16Array(d.dF), k0 = new Uint16Array(d.dF), k1 = new Uint8Array(d.dF), this.gd = new Uint8Array(d.dF), k2 = new Uint16Array(d.dF), k3 = new Uint16Array(d.dF), g0.cy) {
				if (g0.cE.k8)
					for (q = d.dF - 1; 0 <= q; q--) this.gd[q] = g0.cE.k8[q + 1]
			} else if (9 === d.k) this.k9();
			else if (d.e8)
				if (d.ag)
					for (q = d.dF - 1; 0 <= q; q--) this.gd[q] = gU.gV[u.t[q + d.e] - 1].bs;
				else
					for (q = d.dF - 1; 0 <= q; q--) this.gd[q] = gU.gV[0].bs;
			else
				for (k7 = 8 === d.k ? 1 : 0, q = d.dF - 1; 0 <= q; q--) this.gd[q] = k7;
			for (q = d.dF - 1; 0 <= q; q--) this.gd[q] <= 2 ? (k1[q] = 5, k2[q] = k3[q] = 1040, 0 === this.gd[q] ? (jz[q] = 1e3, k0[q] = 1e3) : 1 === this.gd[q] ? (jz[q] = 1e3, k0[q] = 920, k2[q] = k3[q] = 1100) : (jz[q] = 825, k0[q] = 750)) : this
				.gd[q] <= 4 ? (k1[q] = 1 + cU.dK(20), 3 === this.gd[q] ? (jz[q] = k0[q] = 500, k2[q] = k3[q] = 1e3) : (k3[q] = 250 + cU.dK(1501), k2[q] = 500 + cU.dK(501), jz[q] = 300 + cU.dK(201), k0[q] = 100 + cU.dK(201))) : (k2[q] = 1e3, k3[q] =
					1e3, k1[q] = 35 + cU.dK(16), jz[q] = 300 + cU.dK(201), k0[q] = 50 + cU.dK(101)), kA(q)
		}, this.k9 = function() {
			for (var q, ip = 0, fC = 0; fC < 6; fC++) {
				for (q = ip + g4.dA[fC] - 1; ip <= q; q--) this.gd[q] = fC;
				ip += g4.dA[fC]
			}
		}, this.gi = function(kB, value) {
			0 <= kB && (jy[kB] = value)
		}, this.cf = function(kB) {
			0 == --jy[kB] && ! function(kB) {
				! function(kB) {
					k2[kB] !== k3[kB] && (k2[kB] += k2[kB] < k3[kB] ? 3 : -3);
					jz[kB] !== k0[kB] && (jz[kB] += jz[kB] < k0[kB] ? k1[kB] : -k1[kB], jz[kB] = (Math.abs(jz[kB] - k0[kB]) <= k1[kB] ? k0 : jz)[kB]);
					jy[kB] = dG(k2[kB], 10)
				}(kB);
				var player = kB + d.e;
				gc(player, dG(jz[kB] * p.eE[player], 1e3))
			}(kB)
		}
}

function dG(gT, fC) {
	return Math.floor(gT / fC + 1 / (2 * fC))
}

function kE(gT, fC) {
	return 0 <= gT ? dG(gT, fC) : -dG(-gT, fC)
}

function kF(dS) {
	return dS * dS
}

function kG(gT, fC) {
	return fC < gT ? gT : fC
}

function kH(gT, fC) {
	return gT < fC ? gT : fC
}

function kI(gT, dS, fC) {
	return dS < gT ? gT : fC < dS ? fC : dS
}

function kJ(dS, c) {
	for (var dU = dG(dS + 1, 2), q = 0; q < c; q++) dU = dG(dU + dG(dS, dU), 2);
	return dU
}

function kK(dS, c) {
	return dS < 1 ? 0 : kJ(dS, c)
}

function kL(kM, kN, dh, dp, kO, kP, dn, kQ) {
	return !(kM + dh <= kO || kN + dp <= kP || kO + dn <= kM || kP + kQ <= kN)
}

function kR(kM, kN, dh, dp, kO, kP, dn, kQ) {
	return kM <= kO && kN <= kP && kO + dn <= kM + dh && kP + kQ <= kN + dp
}

function bf(dS) {
	return Math.floor(!!dS * (1 + Math.log2(dS + .5)))
}

function kS() {
	var j9, bK, c7, kT, kU, j6, j7, jA, kV, kW, kX, kY, kZ;
	this.c6 = 0, this.bL = 0, this.a4 = function() {
		kU = d.ka, kX = "rgba(0,100,0,0.8)", kY = "rgba(150,0,0,0.8)", jA = !(kW = !0), kV = p.eE[d.eC], this.resize()
	}, this.resize = function() {
		bK = Math.floor((di.dj.dk() ? .305 : .24) * dl.dm), this.bL = Math.floor(.5 + .13 * bK), bK = Math.floor(6 * this.bL), j9 = a5.a6.jD(1, Math.floor(.8 * this.bL)), kZ = Math.floor(.5 * this.bL), ba.bi.font = j9, c7 = dq.gap, kT = Math
			.floor(1 + .13 * this.bL), (j6 = document.createElement("canvas")).width = bK, j6.height = this.bL, (j7 = j6.getContext("2d", {
				alpha: !0
			})).font = j9, a5.a6.textBaseline(j7, 1), a5.a6.textAlign(j7, 1), this.kb()
	}, this.kc = function() {
		return di.dj.dk() && dl.bK < 1.2 * dl.bL
	}, this.iS = function() {
		this.kc() ? this.c6 = dl.bK - bK - dq.gap : this.c6 = Math.floor(kd.ke() + (dl.bK - kd.ke() - eH.bK - bK) / 2 - .5 * dq.gap)
	}, this.eV = function() {
		jA && (jA = !1, this.kb())
	}, this.kb = function() {
		j7.clearRect(0, 0, bK, this.bL), j7.fillStyle = kW ? kX : kY, j7.fillRect(0, 0, bK, this.bL), j7.fillStyle = f3.kf, this.kg(), this.kh(), j7.fillStyle = p.eE[d.eC] >= ak.gk(d.eC) ? f3.ki : f3.f9, j7.fillText(a5.gN.jO(kV), Math.floor(bK /
			2), kZ), j7.fillStyle = f3.f9, j7.fillRect(0, 0, bK, 1), j7.fillRect(0, 0, 1, this.bL), j7.fillRect(0, this.bL - 1, bK, 1), j7.fillRect(bK - 1, 0, 1, this.bL)
	}, this.kg = function() {
		var kj = kH(Math.floor((ak.kk() - 1) * this.bL / 9), this.bL - kT);
		j7.fillRect(0, kj, kT, this.bL - kj), j7.fillRect(bK - kT, kj, kT, this.bL - kj)
	}, this.kh = function() {
		j7.fillRect(kT, this.bL - kT, Math.floor((bK - 2 * kT) * p.eE[d.eC] / kU), kT)
	}, this.cf = function() {
		0 !== p.eA[d.eC] && 2 !== p.kl[d.eC] && kV !== p.eE[d.eC] && (kU = kG(p.eE[d.eC], kU), kW = p.eE[d.eC] > kV && 10 <= p.eE[d.eC], kV = p.eE[d.eC], jA = !0)
	}, this.e1 = function() {
		0 === p.eA[d.eC] || d.e9 || 2 === p.kl[d.eC] || e2.drawImage(j6, this.c6, c7)
	}
}

function km() {
	this.ca = bm.ca, this.ew = 0, this.kn = 0, this.jl = 0, this.ko = null, this.kp = 7, this.kq = 0, this.a4 = function() {
		this.jl = 0, this.ko = [], this.ew = 0, this.kn = 0
	}, this.kr = function(y) {
		var q;
		if (d.e9) this.ks(y);
		else if (this.ko.push(y), 2 === d.jc) {
			for (q = 0; q < this.ko.length; q++) h7.eg.cf(this.ko[q]);
			this.ko = []
		}
	}, this.ks = function(y) {
		h7.eg.cf(y), aG.cf(), eH.ks(this.jl), this.jl === d.kt ? (d.aJ.cf(), this.jl = 0, this.ew = 0, this.kn = 0, this.ca = bm.ca) : (this.jl++, bA.eU(), bA.eV(!0), eY.ku())
	}, this.cf = function() {
		dl.cf(), d.e9 ? (bm.bn = eH.ks(-1) || bm.bn, kv()) : (0 !== this.ew || bm.ca >= this.ca && (this.ca += bm.kw * Math.floor(1 + (bm.ca - this.ca) / bm.kw), 2 === d.jc ? kx() : this.ky(), this.ew++, 27 < bm.ca - this.kq)) && this.kz(), l0(),
			bm.bn && (bm.bn = !1, l1()), this.kq = bm.ca
	}, this.kz = function() {
		bm.bn = !0, l2(), this.ew = 0
	}, this.ky = function() {
		var l3, q;
		if (this.kn !== 7 * this.jl) l4(), eY.ku();
		else {
			for (l3 = !1; this.l5() && (l3 = !0, l4(), 0 < this.ko.length);)
				for (q = this.kp - 2; 0 <= q; q--) l4();
			l3 ? eY.ku() : (kx(), eY.ea())
		}
	}, this.l5 = function() {
		return 0 < this.ko.length && (this.jl++, h7.eg.cf(this.ko[0]), this.ko.shift(), !0)
	}
}

function l6() {
	this.fg = function(size) {
		var bU = bV,
			gH = [];
		for (let q = 0; q < size; q++) gH.push(String.fromCharCode(bU.bc(16)));
		return gH.join("")
	}, this.l7 = function(bO) {
		return 20 < (bO = bO.trim()).length ? bO.substring(0, 20) : bO
	}
}

function l8() {
	this.dr = !1;
	let kM, kN, gap, l9, zoom, lA, lC;
	this.lD = [], this.lE = 100;
	let lG = 0,
		lH = new Array(9),
		lI = [],
		lJ = [],
		lK = 0,
		lL = 0,
		lM = 0,
		lN = 0;

	function la() {
		lH.sort((gT, fC) => fC.jy - gT.jy);
		let bO = "" + lH[0].b7;
		for (let q = 1; q < 9; q++) bO += "," + lH[q].b7;
		for (let q = 0; q < 9; q++) bO += "," + lH[q].jy;
		ex.ey.ez(120, bO)
	}
	this.a4 = function() {
		var lO = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6];
		for (let q = 0; q < lO.length; q++) {
			var color = 6 === lO[q] ? f3.lP : f3.lQ;
			this.lD.push(a5.j6.lR(df.get(3), lO[q], color))
		}
		for (let q = 0; q < dM.dN.lS; q++) lJ.push(dM.dN.lT - dM.dN.lS + q);
		for (let q = 0; q < dM.dN.lU; q++) lJ.push(dM.dN.dO + q);
		var lV = dM.dN.lW(dZ.lV);
		for (let q = 0; q < lV.length; q++) lJ.push(lV[q]);
		var gH = ex.ey.data[120].value.split(",");
		if (18 !== gH.length)
			for (let q = 0; q < 9; q++) lH[q] = {
				b7: 1015 + q,
				jy: 0
			};
		else
			for (let q = 0; q < 9; q++) {
				var dS = parseInt(gH[q]),
					dU = (dS = 0 <= dS && dS < dM.dN.lT ? dS : 0, parseInt(gH[q + 9]));
				dU = 0 <= dU && dU < 1e3 ? dU : 0, lH[q] = {
					b7: dS,
					jy: dU
				}
			}
	}, this.show = function(es, et, lb = 0) {
		if (lK = es, lL = et, lG = lb, this.dr = !0, lI = [], 0 === lG)
			for (let q = 0; q < 9; q++) lI.push(lH[q].b7);
		else {
			let fC = 49 * lG,
				gT = fC - 49;
			gT >= lJ.length && (lG = 1, gT = 0, fC = 49), fC = Math.min(fC, lJ.length);
			for (let q = gT = fC - 49; q < fC; q++) lI.push(lJ[q])
		}
		lI.push(1024);
		lb = lI.length, l9 = Math.floor((di.dj.dk() ? .075 : .0468) * dl.dm), gap = Math.floor(l9 / 3), lA = l9 + gap, (lM = 10 * lA) > dl.bK && (lM = dl.bK, lA = lM / 10, l9 = 3 * lA / 4, gap = lA - l9), lC = b8.dE(lb, 10) + !!(lb % 10), (lN =
			lC * lA) > dl.bL && (lN = dl.bL, lA = lN / lC, l9 = 3 * lA / 4, gap = lA - l9), zoom = l9 / this.lE, lb = .5 * gap;
		kM = Math.min(Math.max(es - .5 * lM + lb, lb), dl.bK - lM + lb), kN = Math.min(Math.max(et - .5 * lN + lb, lb), dl.bL - lN + lb)
	}, this.ds = function(es, et, player) {
		if (!this.dr) return !1;
		if (this.ld(es, et)) {
			es = b8.b9(b8.dE(es - kM + .5 * gap, lA), 0, 9);
			if ((es += 10 * b8.b9(b8.dE(et - kN + .5 * gap, lA), 0, 9)) >= lI.length) return le.co(), !0;
			et = lI[es];
			if (1024 === et) return this.show(lK, lL, lG + 1), !0;
			! function(b7) {
				for (let q = 0; q < 9; q++) lH[q].jy = Math.floor(.99 * lH[q].jy);
				for (let q = 0; q < 9; q++)
					if (b7 === lH[q].b7) return lH[q].jy = Math.min(lH[q].jy + 30, 999), la();
				lH.splice(5, 0, {
					b7: b7,
					jy: Math.max(lH[4].jy, 30)
				}), lH.pop(), la()
			}(et), player === d.eC ? h7.ec.lf(et) : h7.aB.lg(et, player)
		}
		return le.co(), !0
	}, this.ld = function(es, et) {
		return !(es < kM - .5 * gap || et < kN - .5 * gap || es >= kM + lM - .5 * gap || et >= kN + lN - .5 * gap)
	}, this.e1 = function() {
		e2.fillStyle = f3.f5, e2.fillRect(kM - .5 * gap, kN - .5 * gap, lM, lN);
		var c8 = .5 * dq.f8,
			c = (e2.lineWidth = dq.f8, e2.strokeStyle = e2.fillStyle = f3.f9, e2.strokeRect(kM - .5 * gap + c8, kN - .5 * gap + c8, lM - 2 * c8, lN - 2 * c8), e2.imageSmoothingEnabled = !0, lI.length);
		for (let q = 0; q < c; q++) this.lh(lI[q], e2, kM + q % 10 * lA, kN + b8.dE(q, 10) * lA, l9);
		e2.imageSmoothingEnabled = !1
	}, this.lh = function(b7, li, c6, c7, l9) {
		var ip;
		b7 >= 1024 - dM.dN.lS ? (ip = l9 / this.lE, li.setTransform(ip, 0, 0, ip, c6, c7), li.drawImage(this.lD[b7 - 1024 + dM.dN.lS], 0, 0), li.setTransform(1, 0, 0, 1, 0, 0)) : (a5.a6.textAlign(li, 1), a5.a6.textBaseline(li, 1), li.font = a5.a6
			.jD(0, .89 * l9), li.fillText(dM.dN.lj(b7), c6 + .5 * l9, c7 + (.35 - a5.a6.lk + .56) * l9))
	}
}

function ll() {
	var j6, j7, lm, font, ln = 0,
		lo = !1,
		lp = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		lq = 5;

	function m6() {
		if (lo) {
			var q, c = lp.length,
				dp = Math.floor(.5 * lm.bL),
				bL = c * dp,
				c6 = Math.floor(Math.floor(lm.c6) + .3 * lm.bK - .5),
				c7 = Math.floor(Math.floor(lm.c7) - bL),
				bK = Math.floor(.4 * lm.bK + 2.5);
			for (e2.fillStyle = f3.jM, e2.fillRect(c6, c7, bK, bL), e2.fillStyle = f3.mE, e2.fillRect(c6, c7 + lq * dp, bK, dp), e2.fillStyle = f3.f9, e2.fillRect(c6, c7, 2, bL), e2.fillRect(c6, c7, bK, 2), e2.fillRect(c6 + bK - 2, c7, 2, bL), q =
				1; q < c; q++) e2.fillRect(c6, c7 + q * dp, bK, 2);
			for (e2.fillStyle = f3.f9, a5.a6.textAlign(e2, 1), a5.a6.textBaseline(e2, 1), e2.font = a5.a6.jD(0, .6 * dp), c6 += .5 * bK, q = 0; q < c; q++) e2.fillText(mF(q), c6, c7 + (q + .6) * dp)
		}
		e2.drawImage(j6, Math.floor(lm.c6), Math.floor(lm.c7))
	}

	function lu(jY) {
		var c6, kM, kN, dp;
		j7.clearRect(0, 0, Math.floor(lm.bK), Math.floor(lm.bL)), j7.fillStyle = f3.jM, j7.fillRect(0, 0, Math.floor(lm.bK), Math.floor(lm.bL)), d.ie && (j7.fillStyle = f3.mE, j7.fillRect(0, 0, Math.floor(.3 * lm.bK), Math.floor(lm.bL))), j7
			.fillStyle = f3.f9, j7.fillText("Hide UI", .15 * lm.bK, .5 * lm.bL), j7.fillRect(Math.floor(.3 * lm.bK - .5), 0, 2, Math.floor(lm.bL)), c6 = .5 * lm.bK, j7.fillText("Replay Speed", c6, .31 * lm.bL), j7.fillText(mF(lq), c6, .69 * lm.bL),
			j7.fillRect(Math.floor(.7 * lm.bK - .5), 0, 2, Math.floor(lm.bL)), jY.lr ? (c6 = Math.floor(.02 * lm.bK), jY = Math.floor(.025 * lm.bK), kM = Math.floor(.85 * lm.bK - c6 - .5 * jY), kN = Math.floor(.25 * lm.bL), dp = Math.floor(lm.bL) -
				2 * kN, j7.fillRect(kM, kN, c6, dp), j7.fillRect(kM + c6 + jY, kN, c6, dp)) : function() {
				var bK = Math.floor(.46 * lm.bL),
					bL = Math.floor(.23 * lm.bL),
					c6 = Math.floor(.85 * lm.bK - .5 * bK + bK / 12),
					c7 = Math.floor(.5 * lm.bL - bL);
				j7.beginPath(), j7.moveTo(c6, c7), j7.lineTo(c6 + bK, c7 + bL), j7.lineTo(c6, c7 + (bL << 1)), j7.fill()
			}(), j7.fillRect(0, 0, Math.floor(lm.bK), 2), j7.fillRect(0, 0, 2, Math.floor(lm.bL)), j7.fillRect(0, Math.floor(lm.bL) - 2, Math.floor(lm.bK), 2), j7.fillRect(Math.floor(lm.bK - 2), 0, 2, Math.floor(lm.bL))
	}

	function mF(q) {
		return 5 === q ? "Normal" : "" + lp[q]
	}
	this.lr = !1, this.a4 = function() {
		d.eJ && (lq = 5, this.lr = !1, lo = !1, lm = new ls([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.lt = function() {
		return lp[lq]
	}, this.iY = function() {
		return lm.c7
	}, this.jS = function(jT) {
		return !!d.eJ && lm.c6 + lm.bK > dl.bK - jT - dq.gap
	}, this.resize = function() {
		d.eJ && (lm.resize(), lm.c7 -= (jF.jG() - 1) * dq.gap, font = a5.a6.jD(0, .3 * lm.bL), (j6 = document.createElement("canvas")).width = Math.floor(lm.bK), j6.height = Math.floor(lm.bL), (j7 = j6.getContext("2d", {
			alpha: !0
		})).font = font, a5.a6.textAlign(j7, 1), a5.a6.textBaseline(j7, 1), lu(this))
	}, this.lv = function(lw) {
		0 === d.jc || dw.dr() || lw !== d.ie && (d.ie = lw, lx.resize(), bm.bn = !0, d.eJ) && (ln = bm.ca + 2e3, lu(this))
	}, this.ds = function(c6, c7) {
		if (!d.eJ) return !1;
		if (c6 < lm.c6 || c7 < lm.c7 || c6 > lm.c6 + lm.bK) return lo && function(jY, c6, c7) {
			var c = lp.length,
				dp = Math.floor(.5 * lm.bL),
				bL = c * dp,
				kM = Math.floor(Math.floor(lm.c6) + .3 * lm.bK - .5),
				bL = Math.floor(Math.floor(lm.c7) - bL),
				bK = Math.floor(.4 * lm.bK + 2.5);
			return lo = !1, bm.bn = !0, c6 < kM || kM + bK < c6 || c7 < bL || (lq = kI(0, Math.floor((c7 - bL) / dp), c - 1), lu(jY)), !0
		}(this, c6, c7);
		if ((c6 -= lm.c6) < .3 * lm.bK) lo = !1, this.lv(!d.ie);
		else {
			if (c6 < .7 * lm.bK) return lo = !lo, bm.bn = !0;
			this.lz(!1)
		}
		return !0
	}, this.lz = function(m0) {
		2 === d.jc ? (this.lv(!1), dw.dx(3)) : (lo = !1, this.lr = !this.lr, this.lr ? (jQ.jR && jQ.m1(), di.dj.setState(1)) : m0 || jQ.m2(), bm.bn = !0, lu(this))
	}, this.m3 = function() {
		this.lr = !1, jQ.m2(), bm.bn = !0, lu(this)
	}, this.m4 = function(c6, c7) {
		return !!d.ie && (jQ.ds(c6, c7) || (d.eJ ? ((bm.ca > ln || !this.ds(c6, c7)) && j0.ds(c6, c7), bm.bn = !0, ln = bm.ca + 2e3) : j0.ds(c6, c7)), !0)
	}, this.cf = function() {
		d.eJ && d.ie && bm.ca > ln - 1e3 && bm.ca < ln && (bm.bn = !0)
	}, this.m5 = function() {
		d.eJ && (this.lr = !1, bm.bn = !0, lu(this))
	}, this.e1 = function() {
		if (d.eJ) {
			if (d.ie) {
				if (bm.ca > ln) return;
				if (bm.ca > ln - 1e3) return e2.globalAlpha = kI(0, (1e3 - (bm.ca - (ln - 1e3))) / 1e3, 1), m6(), void(e2.globalAlpha = 1)
			}
			m6()
		}
	}
}

function mG() {
	var mH, mI;
	this.a4 = function() {
		mH = 1, mI = 0
	}, this.cf = function() {
		0 < mH && (mI = 0 === mI ? bm.ca + 16 : mI, mH = (mH -= .001 * (bm.ca - mI)) < 0 ? 0 : mH, mI = bm.ca, bm.bn = !0)
	}, this.e1 = function() {
		0 < mH && (e2.fillStyle = "rgba(0,0,0," + mH + ")", e2.fillRect(0, 0, dl.bK, dl.bL))
	}
}

function mL() {
	var mM, mN, mO;

	function mU(q) {
		var button = ma.mP[q],
			c6 = button.c6,
			c7 = button.c7,
			bK = button.bK,
			bL = button.bL;
		e2.fillStyle = button.mS, e2.fillRect(c6, c7, bK, bL), q === mM && (e2.fillStyle = mO, e2.fillRect(c6, c7, bK, bL)), e2.lineWidth = dq.f8, e2.strokeStyle = mN, e2.strokeRect(c6, c7, bK, bL),
			function(button) {
				var c6 = button.c6,
					c7 = button.c7,
					bK = button.bK,
					bL = button.bL;
				a5.a6.textAlign(e2, 1), a5.a6.textBaseline(e2, 1), e2.font = button.font, e2.fillStyle = mN, e2.fillText(button.hn, Math.floor(c6 + bK / 2), Math.floor(c7 + bL / 2 + .1 * button.fontSize))
			}(button)
	}
	this.bK = 0, this.bL = 0, this.c7 = 0, this.gap = 0, this.a4 = function() {
		mM = -1, mN = f3.f9, mO = "rgba(255,255,255,0.16)", this.mP = new Array(7), this.bL = Math.floor((di.dj.dk() ? .123 : .093) * dl.dm), this.bK = Math.floor((di.dj.dk() ? 3.96 : 4.2) * this.bL), this.gap = Math.floor(.025 * this.bK);
		var mQ = Math.floor(.26 * this.bL),
			mR = a5.a6.jD(1, mQ);
		this.mP[0] = {
			c6: 0,
			c7: 0,
			bK: Math.floor(.6 * this.bK - this.gap / 2),
			bL: this.bL,
			hn: "Multiplayer",
			font: mR,
			mS: "rgba(22,88,22,0.8)",
			fontSize: mQ
		}, mQ = Math.floor(.18 * this.bL), mR = a5.a6.jD(1, mQ), this.mP[1] = {
			c6: 0,
			c7: 0,
			bK: this.bK - this.mP[0].bK - this.gap,
			bL: this.bL,
			hn: "Single Player",
			font: mR,
			mS: "rgba(22,88,88,0.8)",
			fontSize: mQ
		}, this.mP[2] = {
			c6: 0,
			c7: 0,
			bK: this.bK,
			bL: Math.floor(.3 * this.bL),
			hn: "",
			font: this.mP[1].font,
			mS: "rgba(100,0,0,0.8)",
			fontSize: this.mP[1].fontSize
		}, this.mP[3] = {
			c6: 0,
			c7: 0,
			bK: this.bK,
			bL: this.bL,
			hn: "Back",
			font: this.mP[0].font,
			mS: "rgba(0,0,0,0.8)",
			fontSize: this.mP[0].fontSize
		}, this.mP[4] = {
			c6: 0,
			c7: 0,
			bK: this.bK,
			bL: Math.floor(.3 * this.bL),
			hn: "The game was updated!",
			font: this.mP[1].font,
			mS: "rgba(100,0,0,0.8)",
			fontSize: this.mP[1].fontSize
		}, this.mP[5] = {
			c6: 0,
			c7: 0,
			bK: this.mP[0].bK,
			bL: Math.floor(.8 * this.bL),
			hn: "Reload",
			font: this.mP[0].font,
			mS: "rgba(0,100,0,0.8)",
			fontSize: this.mP[0].fontSize
		}, this.mP[6] = {
			c6: 0,
			c7: 0,
			bK: this.mP[1].bK,
			bL: this.mP[5].bL,
			hn: "Back",
			font: this.mP[0].font,
			mS: "rgba(0,0,0,0.8)",
			fontSize: this.mP[0].fontSize
		}, this.eq()
	}, this.eq = function() {
		this.c7 = Math.floor(.54 * dl.bL), this.mP[0].c6 = Math.floor(.5 * dl.bK - .5 * this.bK), this.mP[1].c6 = this.mP[0].c6 + this.mP[0].bK + this.gap, this.mP[2].c6 = this.mP[3].c6 = this.mP[0].c6, this.mP[4].c6 = this.mP[5].c6 = this.mP[0]
			.c6, this.mP[6].c6 = this.mP[1].c6, this.mP[0].c7 = Math.floor(.54 * dl.bL), this.mP[1].c7 = this.mP[0].c7, this.mP[2].c7 = Math.floor((dl.bL - this.mP[2].bL - this.mP[3].bL - this.gap) / 2), this.mP[3].c7 = this.mP[2].c7 + this.mP[2]
			.bL + this.gap, this.mP[4].c7 = Math.floor((dl.bL - this.mP[4].bL - this.mP[5].bL - this.gap) / 2), this.mP[5].c7 = this.mP[6].c7 = this.mP[4].c7 + this.mP[4].bL + this.gap
	}, this.mT = function() {
		mU(0), mU(1)
	}, this.mV = function() {
		mU(2), mU(3)
	}, this.mW = function() {
		mU(4), mU(5), mU(6)
	}, this.f1 = function(c6, c7, eV) {
		var q = -1;
		return 0 === cv.cw() ? q = this.er(c6, c7, 0, 2) : 3 === cv.cw() ? q = this.er(c6, c7, 3, 1) : 5 === cv.cw() && (q = this.er(c6, c7, 5, 2)), mM !== q && (mM = q, eV) && (bm.bn = !0), -1 !== q && (mX.mY(), !0)
	}, this.er = function(c6, c7, mZ, size) {
		for (var q = mZ; q < mZ + size; q++)
			if (c6 >= this.mP[q].c6 && c7 >= this.mP[q].c7 && c6 <= this.mP[q].c6 + this.mP[q].bK && c7 <= this.mP[q].c7 + this.mP[q].bL) return q;
		return -1
	}
}

function mc() {
	var md = [0, 0, 0, 0];

	function n0(c6, c7, l9, n3) {
		e2.fillStyle = f3.f9;
		var dh = kG(2, Math.floor((n3 ? .5 : .35) * l9)),
			dp = (dh -= dh % 2, kG(2, Math.floor(.1 * l9))),
			l9 = (dp -= dp % 2, Math.floor((l9 - dh) / 2)),
			kO = Math.floor(l9 + (dh - dp) / 2);
		e2.fillRect(c6 + l9, c7 + kO, dh, dp), n3 && e2.fillRect(c6 + kO, c7 + l9, dp, dh)
	}

	function mz(c6, c7, bK, bL, n4, iz, hn, gd, dJ) {
		e2.fillStyle = n4, e2.fillRect(c6, c7, bK, bL), 0 <= gd && function(c6, c7, bK, bL, gd) {
			e2.fillStyle = "rgba(" + 22 * gd + "," + (110 - 22 * gd) + ",0,0.75)", e2.fillRect(c6, c7, (1 + gd) * bK / 6, bL)
		}(c6, c7, bK, bL, gd), 0 < dJ && function(c6, c7, bK, bL, dJ) {
			e2.fillStyle = "rgba(255,255,255,0.3)", e2.fillRect(c6, c7, dJ * bK / d.b4, bL)
		}(c6, c7, bK, bL, dJ), e2.strokeStyle = f3.f9, e2.strokeRect(c6, c7, bK, bL), 0 !== iz && (e2.fillStyle = f3.f9, e2.font = a5.a6.jD(1, iz * bL), e2.fillText(hn, Math.floor(c6 + bK / 2), Math.floor(c7 + .52 * bL)))
	}
	this.gV = [{
		bs: 0,
		dJ: 512
	}], this.a4 = function() {
		me.dr = !1, cv.setState(2), this.resize(), bm.bn = !0
	}, this.jt = function() {}, this.resize = function() {
		md[2] = Math.floor((di.dj.dk() ? .49 : .4) * dl.dm), md[1] = Math.floor((dl.bL - md[2] / 6 - this.gV.length * (dq.gap + md[2] / 10)) / 2), md[0] = Math.floor((dl.bK - md[2]) / 2), me.dr && me.resize()
	}, this.mf = function(mg) {
		var q;
		if (6 < mg) this.gV = [{
			bs: 0,
			dJ: 512
		}];
		else {
			for (this.gV = [], q = 0; q < mg + 2; q++) this.gV.push({
				bs: 0,
				dJ: 0
			});
			this.mh()
		}
		v.w.x = 0
	}, this.mi = function(mj, mk) {
		for (var c = mj.length, q = 0; q < c; q++) this.gV[q].bs = mj[q], this.gV[q].dJ = mk[q]
	}, this.ml = function(fB) {
		var q, c;
		if (1 === fB.fy.length)
			for (c = this.gV.length, fB.mj = new Array(c), fB.mk = new Array(c), q = 0; q < c; q++) fB.mj[q] = this.gV[q].bs, fB.mk[q] = this.gV[q].dJ
	}, this.mm = function() {
		bm.bn = !0, me.dr ? me.dr = !1 : (this.jt(), cv.setState(0), dw.dx(5, 5))
	}, this.mn = function() {
		var q, dJ;
		if (g0.cy) return g0.cE.mo;
		for (dJ = 0, q = this.gV.length - 1; 0 <= q; q--) dJ += this.gV[q].dJ;
		return dJ
	}, this.f1 = function(c6, c7) {
		return !(!me.dr || !me.f1(c6, c7)) || -1 !== this.er(c6, c7)
	}, this.mp = function() {
		var gT;
		v.w.x = 0, cv.mq(), g0.cy ? g0.mr() : (gT = (gT = this.gV.length - 2) < 0 ? 7 : gT, d.ms(Math.floor(16384 * Math.random()), 0, [{
			name: ex.ey.data[122].value,
			gI: a5.color.mt(ex.w.mu()),
			mv: 0
		}], gT, !1, !1))
	}, this.ds = function(c6, c7) {
		if (me.dr && !g0.cy) return me.ds(c6, c7);
		var q, gT, max, dh, c7 = this.er(c6, c7);
		if (-1 === c7) return !1;
		if (0 === c7) this.mm();
		else if (1 === c7) g0.cy ? (g0.mY(), bm.bn = !0) : me.show();
		else if (100 === c7) mw.mx();
		else if (2 === c7) this.jt(), this.mp();
		else {
			if (g0.cy) return !1;
			if (27 === c7) this.gV.length < 8 && (this.gV.push({
				bs: 0,
				dJ: d.b4
			}), this.mh(), this.resize(), bm.bn = !0);
			else if (q = Math.floor((c7 - 3) / 3), c7 % 3 == 0) 1 < this.gV.length && (this.gV.splice(q, 1), this.resize(), bm.bn = !0);
			else if (dh = (md[2] - md[2] / 10 - 2 * dq.gap) / 2, c7 % 3 == 1) 0 === q && 1 === this.gV[q].dJ || (c6 < md[0] + md[2] - 1.5 * dh - dq.gap ? this.gV[q].bs-- : this.gV[q].bs++, this.gV[q].bs < 0 ? this.gV[q].bs = 5 : 5 < this.gV[q]
				.bs && (this.gV[q].bs = 0), bm.bn = !0);
			else {
				for (bm.bn = !0, c7 = (c6 - (md[0] + md[2] - dh)) / dh - .5, c7 *= c7 < 0 ? -c7 : c7, c7 = 0 === (c7 = Math.floor(c7 * d.b4)) ? 1 : c7, max = d.b4, gT = this.gV.length - 1; 0 <= gT; gT--) q !== gT && (max -= this.gV[gT].dJ);
				if (c7 < 0) {
					if (1 === this.gV[q].dJ) return this.gV[q].dJ = max, !0
				} else if (this.gV[q].dJ === max) return this.gV[q].dJ = 1, !0;
				this.gV[q].dJ += c7, this.gV[q].dJ < 1 ? this.gV[q].dJ = 1 : this.gV[q].dJ > max && (this.gV[q].dJ = max)
			}
		}
		return !0
	}, this.mh = function() {
		for (var dJ = Math.floor(d.b4 / this.gV.length), my = d.b4 % this.gV.length, q = this.gV.length - 1; 0 <= q; q--) this.gV[q].dJ = dJ;
		this.gV[0].dJ += my
	}, this.er = function(c6, c7) {
		var dh = (md[2] - 3 * dq.gap) / 4,
			dp = md[2] / 6;
		if (c6 < md[0] || c7 < md[1] || md[0] + md[2] <= c6) return -1;
		if (c7 < md[1] + dp) return c6 < md[0] + dh ? 0 : c6 < md[0] + dh + dq.gap ? -1 : c6 < md[0] + 2 * dh + dq.gap ? 100 : c6 < md[0] + 2 * (dh + dq.gap) ? -1 : c6 < md[0] + 3 * dh + 2 * dq.gap ? 1 : c6 < md[0] + 3 * (dh + dq.gap) ? -1 : 2;
		for (var kN, kQ = md[2] / 10, dh = (md[2] - kQ - 2 * dq.gap) / 2, q = 0; q < this.gV.length; q++) {
			if (c7 < (kN = md[1] + dp + dq.gap + q * (kQ + dq.gap))) return -1;
			if (!(kN + kQ < c7)) return c6 < md[0] + kQ ? 3 + 3 * q : c6 < md[0] + kQ + dq.gap ? -1 : c6 < md[0] + md[2] - dh - dq.gap ? 4 + 3 * q : c6 < md[0] + md[2] - dh ? -1 : 5 + 3 * q
		}
		return !(this.gV.length < 8) || c7 < (kN = md[1] + dp + dq.gap + this.gV.length * (kQ + dq.gap)) || kN + kQ < c7 || md[0] + kQ < c6 ? -1 : 27
	}, this.e1 = function() {
		e2.lineWidth = dq.f8, a5.a6.textAlign(e2, 1), a5.a6.textBaseline(e2, 1);
		var dh = (md[2] - 3 * dq.gap) / 4,
			dp = md[2] / 6;
		if (mz(md[0], md[1], dh, dp, "rgba(128,0,0,0.75)", .34, "Back", -1, -1), mz(md[0] + dh + dq.gap, md[1], dh, dp, "rgba(128,0,128,0.75)", .31, "Custom", -1, -1), mz(md[0] + 2 * (dh + dq.gap), md[1], dh, dp, "rgba(" + (g0.cy ? 128 : 0) +
				",128,128,0.75)", .34, g0.cy ? "Reset" : "Maps", -1, -1), mz(md[0] + md[2] - dh, md[1], dh, dp, "rgba(0,128,0,0.75)", .34, "Start", -1, -1), !g0.cy) {
			for (var kN, kQ = md[2] / 10, dh = (md[2] - kQ - 2 * dq.gap) / 2, q = 0; q < this.gV.length; q++) kN = md[1] + dp + dq.gap + q * (kQ + dq.gap), mz(md[0], kN, kQ, kQ, 1 < this.gV.length ? "rgba(128,0,0,0.75)" : "rgba(90,90,90,0.75)",
				0, null, -1), 1 < this.gV.length && n0(md[0], kN, kQ, !1), mz(md[0] + kQ + dq.gap, kN, dh, kQ, f3.f5, .4, this.n1(q), this.gV[q].bs, -1), mz(md[0] + md[2] - dh, kN, dh, kQ, f3.f5, .4, this.n2(q), -1, this.gV[q].dJ);
			this.gV.length < 8 && (kN = md[1] + dp + dq.gap + this.gV.length * (kQ + dq.gap), mz(md[0], kN, kQ, kQ, "rgba(0,128,20,0.75)", 0, null, -1, -1), n0(md[0], kN, kQ, !0)), me.dr && me.e1()
		}
	}, this.n1 = function(q) {
		return 0 === q && 1 === this.gV[q].dJ ? "You" : gh.k4[this.gV[q].bs]
	}, this.n2 = function(q) {
		return 1 === this.gV[q].dJ ? "1 Player" : this.gV[q].dJ + " Players"
	}
}

function n7() {
	this.e1 = function() {
		if (0 !== eW.w.n8 && (e2.globalAlpha = Math.min(eW.w.n8 / 580, 1), e2.drawImage(eW.w.nB, 1 + j0.iX(), 1 + j0.iY()), e2.globalAlpha = 1, d.e9)) {
			var kM = iK / iJ,
				kN = iL / iJ,
				kO = (dl.bK + iK) / iJ,
				kP = (dl.bL + iL) / iJ,
				nC = eW.w.nD * iJ,
				nE = eW.w.nE;
			for (let q = d.e - 1; 0 <= q; q--) ! function(q, nC, kM, kN, kO, kP, nE) {
				var highlight = settings.highlightClanSpawns && clanFilter.inOwnClan[q];
				if (highlight) nC *= 2;
				0 === p.eA[q] || 0 === p.r[q] || (kO = dl.bK * ((p.eM[q] + p.eO[q] + 1) / 2 - kM) / (kO - kM) - .5 * nC, kM = dl.bL * ((p.eN[q] + p.eP[q] + 1) / 2 - kN) / (kP - kN) - .5 * nC, kO > dl.bK) || kM > dl.bL || kO < -nC || kM < -
					nC || (e2.setTransform(highlight ? iJ * 2 : iJ, 0, 0, highlight ? iJ * 2 : iJ, kO, kM), e2.drawImage(nE[d.ag ? u.t[q] : 1], 0, 0))
			}(q, nC, kM, kN, kO, kP, nE);
			e2.setTransform(iJ, 0, 0, iJ, 0, 0)
		}
	}
}

function nG() {
	let nH, nI;

	function nN() {
		hN.hO.hideCMPButton(), dw.dx(0);
		var bO = aG.na(nI.nU());
		(0 < bO.length && bO === aG.aH.nW || aG.nc.bN(bO)) && aG.nb()
	}
	this.show = function(nS) {
		this.nT(nS), nH.show(), this.resize()
	}, this.nT = function(nS) {
		0 === d.jc ? (nS = nS || nI.nU(), nI.nV(nS)) : (d.eJ || (aG.aH.nW = aG.nX.nY()), nI.nV(aG.nZ(aG.aH.nW)))
	}, this.co = function() {
		nH.co()
	}, this.resize = function() {
		nH.resize(), nI.resize()
	}, this.ev = function(dU) {
		2 === dU ? nH.nd[0].ne() : nN()
	}, nH = new nJ("▶️ " + hm.hn[82], [new hl("❌ " + hm.hn[92], function() {
		dw.nK()
	}, f3.ho), new hl("🔲 " + hm.hn[93], function() {
		nI.nL()
	}), new hl("📋 " + hm.hn[94], function() {
		nI.nM()
	}), new hl("🗑️ " + hm.hn[95], function() {
		nI.clear()
	}), new hl("▶️ " + hm.hn[96], function() {
		nN()
	}, f3.nO)]), nI = new nP("replayData", "Insert the replay link here!"), nH.nQ.appendChild(nI.nR)
}

function ni() {
	this.hz = 1047, this.a4 = function() {
		nf = 2, nh = 23, ng = "13 Jul 2024 [1.97.0]", iH = 0 <= window.location.hostname.toLowerCase().indexOf("territorial.io") || Math.random() >= 0.8, iI = function() {
			try {
				return window.self !== window.top
			} catch (a2) {
				return !0
			}
		}(), hx = (new Date).getTime() % 1024
	}, this.nk = 0
}

function nl() {
	function no(gH) {
		if (0 === gH.length) ex.fT.fU(116, "");
		else {
			let nt = gH[0];
			for (let q = 1; q < gH.length; q++) nt += ";" + gH[q];
			ex.fT.fU(116, nt)
		}
	}
	this.fS = function() {
		ex.ey.data[110].value.length && (ex.ey.data[106].value = ex.ey.data[110], ex.fT.fU(110, ""), this.nm())
	}, this.nm = function() {
		var gH = ex.ey.data[116].value.split(";");
		gH.length % 2 == 1 && gH.pop(), gH.unshift(ex.ey.data[106].value), gH.unshift(ex.ey.data[105].value);
		for (let q = 2; q < gH.length; q += 2)
			if (gH[q] === gH[0]) {
				gH.splice(q, 2);
				break
			} var nn = [];
		for (let q = 0; q < gH.length; q += 2) nn.push(gH[q]);
		no(gH), ex.ey.data[117].value = 0, ex.ey.data[117].np = nn
	}, this.nq = function(ew) {
		ex.ey.data[117].np.splice(ew, 1), ex.ey.data[117].value = Math.min(ew, ex.ey.data[117].np.length - 1);
		var gH = ex.ey.data[116].value.split(";");
		gH.splice(2 * ew, 2), no(gH)
	}, this.nr = function(ew) {
		var gH = ex.ey.data[116].value.split(";");
		return {
			ns: gH[2 * ew],
			password: gH[2 * ew + 1]
		}
	}, this.mu = function() {
		let dS = b8.b9(ex.ey.data[121].value, -1, 262143);
		return dS = -1 === dS ? ~~(262144 * Math.random()) : dS
	}
}

function ed() {
	this.a9 = function(aA) {
		d.e8 ? h7.ef.a9(d.eC, aA) : v.ch.i0(aA)
	}, this.aL = function(aM, aN) {
		eS.nu(), d.e8 ? h7.ef.aL(d.eC, aM, aN) : v.ch.i1(aM, aN)
	}, this.al = function(aM, af) {
		eS.nu(), d.e8 ? h7.ef.ae(d.eC, aM, af) : v.ch.i2(aM, af)
	}, this.am = function(aM, aA) {
		d.e8 ? h7.ef.am(d.eC, aM, aA) : an.az.nv(d.eC, aA) && v.ch.i3(aM, aA)
	}, this.ax = function(ay, aA) {
		d.e8 ? h7.ef.ax(d.eC, ay, aA) : an.az.nw(d.eC, ay, aA) && v.ch.i4(ay, aA)
	}, this.b3 = function(aN) {
		d.e8 ? h7.ef.b3(d.eC, aN) : v.ch.i5(aN)
	}, this.lf = function(b7) {
		d.e8 ? h7.ef.b6(d.eC, b7) : v.ch.i6(b7)
	}, this.bC = function(bD) {
		d.e8 ? h7.ef.bC(d.eC, bD) : v.ch.i7(bD)
	}, this.bG = function() {
		d.e8 ? h7.ef.bG(d.eC) : v.ch.i8()
	}
}

function nx() {
	this.w = new cI, this.cx = new ny, this.ch = new hp, this.nz = new o0, this.cs = new o1, this.o2 = new o3, this.o4 = new a, this.o5 = new o6, this.iD = new o7, this.o8 = new o9, this.oA = new oB, this.oC = new fQ, this.oD = new oE, this.a4 =
		function() {
			this.w.a4()
		}
}

function oF() {
	this.nD = 28, this.n8 = 0, this.nB = null;
	var oG = this.nE = null;

	function oJ(l9, oK) {
		var c6, c7, aA, ik, dX = a5.a6.be(l9, l9),
			li = a5.a6.getContext(dX, !0),
			oM = a5.a6.getImageData(li, l9, l9),
			bt = oM.data,
			bQ = (l9 >> 1) - .5,
			oN = .5 + bQ;
		for (oN *= oN, c7 = 0; c7 < l9; c7++)
			for (c6 = 0; c6 < l9; c6++) ik = (ik = c6 - bQ) * ik + (ik = c7 - bQ) * ik, bt[aA = 4 * (c7 * l9 + c6)] = oK[0], bt[1 + aA] = oK[1], bt[2 + aA] = oK[2], bt[3 + aA] = (oN - ik) * oK[3] / oN;
		return li.putImageData(oM, 0, 0), dX
	}

	function oP(q, li, dX, l9) {
		var c6, y, highlight = settings.highlightClanSpawns && clanFilter.inOwnClan[q];
		if (highlight) l9 *= 2;
		0 !== p.eA[q] && 0 !== p.r[q] && (c6 = p.eM[q] + p.eO[q] + 1 - l9 - 2 >> 1, y = p.eN[q] + p.eP[q] + 1 - l9 - 2 >> 1,
			highlight ? li.drawImage(dX[d.ag ? u.t[q] : q < d.e ? 1 : 0], c6, y, l9, l9) :
			li.drawImage(dX[d.ag ? u.t[q] : q < d.e ? 1 : 0], c6, y))
	}
	this.a4 = function() {
		var jY;
		this.n8 = 700,
			function(jY) {
				var l9 = jY.nD;
				if (jY.nE = [], oG = [], d.ag)
					for (let q = 0; q <= d.gQ; q++) jY.nE.push(oJ(l9, u.ft[u.fv[q]])), oG.push(oJ(l9 >> 1, u.ft[u.fv[q]]));
				else jY.nE.push(oJ(l9, u.ft[0])), jY.nE.push(oJ(l9, u.ft[4])), oG.push(oJ(l9 >> 1, u.ft[0]))
			}(this),
			function(jY, oO) {
				var q, nB = jY.nB,
					li = a5.a6.getContext(nB, !0),
					c = d.b4,
					l9 = jY.nD >> 1;
				li.imageSmoothingEnabled = !1, li.setTransform(1, 0, 0, 1, 0, 0), oO && li.clearRect(0, 0, nB.width, nB.height);
				for (q = d.e; q < c; q++) oP(q, li, oG, l9)
			}(this, null !== (jY = this).nB && jY.nB.width === ba.bb - 2 && jY.nB.height === ba.bd - 2 || (jY.nB = a5.a6.be(ba.bb - 2, ba.bd - 2), !1)), d.e9 || this.eX()
	}, this.eX = function() {
		var c = d.e,
			l9 = this.nD,
			nE = this.nE,
			li = a5.a6.getContext(this.nB, !0);
		for (let q = 0; q < c; q++) oP(q, li, nE, l9)
	}
}

function oQ() {
	var iz = 1,
		fs = [null, null];
	this.a4 = function() {
		iz = .72 * (di.dj.dk() ? .0011 : .001) * dl.dm;
		for (var q = 1; 0 <= q; q--) fs[q] && this.oR(q, fs[q].bO)
	}, this.oR = function(ew, bO) {
		fs[ew] = {
			bO: bO,
			font: a5.a6.jD(1, 10)
		}, this.lu(ew)
	}, this.lu = function(ew) {
		var bO, fontSize, j9, bK, jT;
		df.dg() && fs[ew] && (bO = fs[ew].bO, fontSize = Math.floor(.15 * iz * df.get(13).height), j9 = a5.a6.jD(1, fontSize), bK = oS.measureText(bO, j9), (jT = .8 * iz * df.get(13).width) < bK && (fontSize = Math.floor(fontSize * jT / bK), j9 =
			a5.a6.jD(1, fontSize)), fs[ew] = {
			bO: bO,
			font: j9
		}, bm.bn = !0)
	}, this.oT = function() {
		return Math.floor(iz * df.get(13).height)
	}, this.ds = function(es, et) {
		return !!df.dg() && !(es < dq.gap || et < dl.bL - iz * df.get(13).height - 2 * dq.gap || et > dl.bL - 2 * dq.gap || (es < dq.gap + iz * df.get(13).width ? (oU.oV = !0, dw.dx(8, 0, new oW(21, {
			oX: 0,
			oY: 0,
			oZ: 9
		})), 0) : es < 2 * dq.gap + iz * df.get(13).width || !(es < 2 * dq.gap + 2 * iz * df.get(13).width) || (oU.oV = !0, dw.dx(8, 0, new oW(21, {
			oX: 1,
			oY: 0,
			oZ: 9
		})), 0)))
	}, this.iY = function() {
		return Math.floor(dl.bL - iz * df.get(13).height - dq.gap)
	}, this.e1 = function() {
		if (df.dg()) {
			e2.imageSmoothingEnabled = !0, e2.setTransform(iz, 0, 0, iz, dq.gap, this.iY()), e2.drawImage(df.get(14), 0, 0), e2.setTransform(iz, 0, 0, iz, 2 * dq.gap + iz * df.get(13).width, this.iY()), e2.drawImage(df.get(13), 0, 0);
			for (var q = 1; 0 <= q; q--) fs[q] && (e2.setTransform(1, 0, 0, 1, (1 + q) * dq.gap + q * iz * df.get(13).width, this.iY()), e2.font = fs[q].font, a5.a6.textBaseline(e2, 1), a5.a6.textAlign(e2, 1), e2.fillStyle = f3.f9, e2.fillText(
				fs[q].bO, .5 * iz * df.get(13).width, .86 * iz * df.get(13).height));
			e2.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function oa() {
	var ob, lE = 8,
		oc = new Array(2);

	function od(ew) {
		var l9 = lE + 4,
			dX = a5.a6.be(l9, l9),
			li = a5.a6.getContext(dX, !0),
			oM = a5.a6.getImageData(li, l9, l9),
			bt = oM.data;
		return oe(bt, l9 + 1, ew), oe(bt, l9 + 2, ew), oe(bt, 2 * l9 + 1, ew), oe(bt, 2 * l9 - 3, ew), oe(bt, 2 * l9 - 2, ew), oe(bt, 3 * l9 - 2, ew), oe(bt, l9 * (l9 - 3) + 1, ew), oe(bt, l9 * (l9 - 2) + 1, ew), oe(bt, l9 * (l9 - 2) + 2, ew), oe(bt,
			l9 * (l9 - 2) - 2, ew), oe(bt, l9 * (l9 - 1) - 3, ew), oe(bt, l9 * (l9 - 1) - 2, ew), li.putImageData(oM, 0, 0), dX
	}

	function oe(bt, aA, ew) {
		aA *= 4;
		bt[aA] = 255, bt[1 + aA] = 255, bt[2 + aA] = ew, bt[3 + aA] = 255
	}

	function be(player) {
		var dX = a5.a6.be(lE, lE);
		return function(li, player) {
			var c6, c7, ik, aA, oh, oi, l9 = lE,
				oM = a5.a6.getImageData(li, l9, l9),
				bt = oM.data,
				bQ = (l9 >> 1) - .5,
				ok = ol.om(player),
				on = a5.bq.oo(ok, .5);
			a5.bq.op(ok, on, 300) || a5.bq.oq(ok, 100);
			for (c7 = 0; c7 < l9; c7++)
				for (c6 = 0; c6 < l9; c6++) oi = (l9 - 1.5) * (l9 - 1.5) / 4, oh = (ik = (ik = c6 - bQ) * ik + (ik = c7 - bQ) * ik) <= (l9 - 4.5) * (l9 - 4.5) / 4 ? on : ok, bt[aA = 4 * (c7 * l9 + c6)] = oh[0], bt[1 + aA] = oh[1], bt[2 + aA] =
					oh[2], bt[3 + aA] = oi < ik ? 0 : 255;
			li.putImageData(oM, 0, 0)
		}(a5.a6.getContext(dX, !0), player), dX
	}
	this.a4 = function() {
		ob = new Array(d.b4), oc[0] = od(255), oc[1] = od(0)
	}, this.e1 = function() {
		var q, player, or, gd, os, gR, ow, oy, oz, p0 = an.w.p0,
			p1 = an.w.p1,
			p2 = an.w.p2,
			p3 = ob,
			p4 = d.eC,
			p5 = -1,
			c = an.w.ao,
			p6 = dl.bK,
			p7 = dl.bL,
			p8 = ba.bb << 4,
			pA = iJ,
			ip = pA / lE,
			kM = iK / pA,
			kN = iL / pA,
			ik = (p6 + iK) / pA - kM,
			il = (p7 + iL) / pA - kN,
			li = e2;
		for (an.az.b0(d.eC, an.pB.pC) && (p5 = aW.pD[3]), li.fillStyle = f3.f9, a5.a6.textAlign(li, 1), a5.a6.textBaseline(li, 1), q = 0; q < c; q++) player = p1[q] >> 3, gd = p2[q], or = .625 + .125 * Math.sqrt(Math.sqrt(gd)), os = (gR = p0[
			q]) % p8 / 16 - or, gR = p7 * (Math.floor(gR / p8) / 16 - or - kN) / il, ow = -2 * (oz = pA * or) * (1 + (oy = +(player === p4)) / 8), oy = oy * oz / 4, (oz = p6 * (os - kM) / ik) < ow || gR < ow || p6 + oy < oz || p7 + oy < gR || (
				os = or * pA, li.imageSmoothingEnabled = (ow = 2 * or * ip) < 3, void 0 === (oy = p3[player]) && (p3[player] = oy = be(player)), player === p4 && (li.setTransform(ow, 0, 0, ow, oz - 2 * ow, gR - 2 * ow), li.drawImage(oc[+(q ===
					p5)], 0, 0)), li.setTransform(ow, 0, 0, ow, oz, gR), li.drawImage(oy, 0, 0), (or = Math.floor(function(gd) {
					if (gd < 1e3) return .42;
					if (gd < 1e4) return .34;
					if (gd < 1e6) return .26;
					if (gd < 1e8) return .19;
					return .15
				}(gd) * os)) < 6) || (li.setTransform(1, 0, 0, 1, 0, 0), li.font = a5.a6.jD(1, or), li.fillText(a5.gN.jO(gd), oz + os, gR + os + .1 * or));
		li.imageSmoothingEnabled = !1, li.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function pF() {
	this.pG = function() {}
}

function pH() {
	var pI, gH;
	this.a4 = function() {
		for (var q = (gH = new Uint16Array(101)).length - 1; 0 <= q; q--) gH[q] = dG(32768 * q, 100);
		this.cW(0)
	}, this.value = function(s) {
		return gH[s]
	}, this.cV = function() {
		return dG(pI - 1, 2)
	}, this.cW = function(cT) {
		pI = 2 * cT % 32768 + 1
	}, this.random = function() {
		return pI = 167 * pI % 32768
	}, this.dK = function(pJ) {
		return dG(pJ * this.random(), 32768)
	}, this.gu = function(s) {
		return 0 !== s && this.random() < this.value(s)
	}
}

function pO() {
	(pK = void 0 === pK ? document.createElement("canvas") : pK).width = ba.bb, pK.height = ba.bd, pM = pK.getContext("2d", {
		alpha: !0
	}), pN = pM.getImageData(0, 0, ba.bb, ba.bd), pL = pN.data, a5.bq.br(pL)
}

function pP(pQ, title = hm.hn[121], ne = function() {}) {
	function click() {
		var value = 1 - pQ.value;
		this.textContent = (value ? "🟢 " : "⚪ ") + title, ex.fT.fU(pQ.ew, value), ne(value)
	}
	var a2;
	this.a2 = document.createElement("p"), (a2 = this.a2).textContent = (pQ.value ? "🟢 " : "⚪ ") + title, a2.style.margin = "0", a2.style.marginBottom = "0.5em", a2.style.cursor = "pointer", a2.addEventListener("click", click)
}

function pR() {
	this.pS = function(j6, pT, pU) {
		var bK = j6.width,
			bL = j6.height,
			dU = a5.a6.be(bK, bL),
			li = a5.a6.getContext(dU, !0),
			j6 = (li.drawImage(j6, 0, 0), li.getImageData(0, 0, bK, bL));
		return pT(j6.data, bK, bL, pU), li.putImageData(j6, 0, 0), dU
	}, this.pV = function(bt, bK, bL) {
		for (let c6 = bK - 1; 0 <= c6; c6--)
			for (let c7 = bL - 1; 0 <= c7; c7--) {
				var q = 4 * (c6 + c7 * bK);
				bt[3 + q] = bt[q], bt[q] = bt[1 + q] = bt[2 + q] = 255
			}
	}, this.pW = function(bt, bK, bL) {
		for (let c6 = bK - 1; 0 <= c6; c6--)
			for (let c7 = bL - 1; 0 <= c7; c7--) {
				var q = 4 * (c6 + c7 * bK);
				bt[1 + q] > bt[2 + q] + 10 && (bt[3 + q] = bt[q], bt[1 + q] = bt[2 + q])
			}
	}, this.pX = function(bt, bK, bL, pU) {
		var q, gap = Math.floor(Math.min(bK, bL) * pU);
		for (let c6 = 0; c6 < bK; c6++)
			for (let c7 = 0; c7 < bL; c7++)(c6 < gap || c7 < gap || c6 >= bK - gap || c7 >= bL - gap) && (bt[3 + (q = 4 * (c6 + c7 * bK))] = 255 - 255 * (bt[1 + q] - bt[q]) / (255 - bt[q]))
	}, this.pY = function(bt, bK, bL, pU) {
		for (let c6 = bK - 1; 0 <= c6; c6--)
			for (let c7 = bL - 1; 0 <= c7; c7--) {
				var q = 4 * (c6 + c7 * bK);
				bt[q] = pU[0], bt[1 + q] = pU[1], bt[2 + q] = pU[2]
			}
	}, this.pZ = function(bt, bK, bL, pU) {
		var q, gap = Math.floor(bK * pU);
		for (let c6 = 0; c6 < bK; c6++)
			for (let c7 = 0; c7 < bL; c7++)(c6 < gap || c7 < gap || c6 >= bK - gap || c7 >= bL - gap) && (bt[q = 4 * (c6 + c7 * bK)] = bt[1 + q] = bt[2 + q] = 0)
	}, this.pa = function(bt, bK, bL) {
		for (var c7, q, c6 = bK - 1; 0 <= c6; c6--)
			for (c7 = bL - 1; 0 <= c7; c7--) 200 < bt[1 + (q = 4 * (c6 + c7 * bK))] && bt[1 + q] - 20 > bt[q] && bt[1 + q] - 20 > bt[2 + q] ? bt[q] + bt[2 + q] < 40 ? bt[3 + q] = 0 : (bt[3 + q] = bt[q], bt[q] = 255, bt[1 + q] = 255, bt[2 + q] =
				255) : bt[q] < 50 && bt[1 + q] < 50 && bt[2 + q] < 50 && (bt[q] + bt[1 + q] + bt[2 + q] < 50 ? bt[3 + q] = 180 : bt[3 + q] = 180 + Math.floor(75 * (bt[q] + bt[1 + q] + bt[2 + q] - 50) / 100))
	}, this.pb = function(bt, bK, bL) {
		for (var c7, q, c6 = bK - 1; 0 <= c6; c6--)
			for (c7 = bL - 1; 0 <= c7; c7--) bt[1 + (q = 4 * (c6 + c7 * bK))] > bt[q] + 20 && bt[1 + q] > bt[2 + q] + 20 && bt[q] + bt[2] < 40 && (bt[3 + q] = 255 - bt[1 + q], bt[q] = bt[1 + q] = bt[2 + q] = bt[q])
	}, this.pc = function(bt, bK, bL, pU) {
		var fA = bK >> 1;
		for (let c6 = 0; c6 < bK; c6++)
			for (let c7 = 0; c7 < bL; c7++) Math.sqrt((c6 - fA) * (c6 - fA) + (c7 - fA) * (c7 - fA)) > pU * fA && (bt[4 * (c6 + c7 * bK) + 3] = 0)
	}
}

function ny() {
	this.cy = !1, this.cf = function() {
		bm.h4() % 250 != 249 || d.eJ || (v.cs.pd(+(this.cy && 0 < p.eA[d.eC]), h5 + an.w.ao), this.cy = !1)
	}
}

function o6() {
	this.pf = function(oX, oY, oZ) {
		i.j(75), i.l(1, 0), i.l(6, 21), i.l(6, oX), i.l(1, +(oY < 0)), i.l(1, +(oZ < 0)), i.l(30, Math.abs(oY)), i.l(30, Math.abs(oZ)), v.w.send(0, i.y)
	}, this.pg = function(oX, ph, pi) {
		i.j(18 + 16 * ph.length + 30), i.l(1, 0), i.l(6, 22), i.l(6, oX), v.cs.pj(ph), i.l(30, pi), v.w.send(0, i.y)
	}, this.pk = function(pl, fw) {
		var c = fw.length;
		let pm = 0;
		for (let q = 0; q < c; q++) pm += fw[q].length;
		i.j(21 + 3 * c + 16 * pm), i.l(1, 0), i.l(6, 23), i.l(3, pl), i.l(4, c), i.l(7, pm);
		for (let q = 0; q < c; q++) i.l(3, fw[q].length), fV.ff.pn(fw[q]);
		v.w.send(0, i.y)
	}, this.po = function(pl, oY, oZ) {
		i.j(52), i.l(1, 0), i.l(6, 24), i.l(3, pl), i.l(1, +(oY < 0)), i.l(1, +(oZ < 0)), i.l(20, Math.abs(oY)), i.l(20, Math.abs(oZ)), v.w.send(0, i.y)
	}
}

function pp() {
	var ew = 0,
		ca = bm.ca;
	this.kn = 0, this.cf = function() {
		dl.cf(), d.e9 ? kv() : 0 === ew ? bm.ca >= ca && (ca += bm.kw * Math.floor(1 + (bm.ca - ca) / bm.kw), 2 === d.jc || jQ.jR ? kx() : (l4(), eY.ku()), ew++) : ((jQ.jR ? kv : (bm.bn = !0, l2))(), ew = 0), l0(), bm.bn && (bm.bn = !1, l1())
	}
}

function pq(pr, fK) {
	var a1 = document.createElement("div");
	this.ps = a1, this.resize = function() {
		a1.style.padding = a5.a6.pt(dq.pu), a1.style.lineHeight = a5.a6.pt(a5.a6.pv(.035))
	}, pr.style.overflowX = "hidden", pr.style.overflowY = "auto", a1.innerHTML = fK, pr.appendChild(a1)
}

function aZ(player, aT) {
	return aW.aX[1] = p.hB[player].length, aW.aX[0] === d.b4 ? hE(player) : hC(player, aW.aX[0]), (0 !== aW.aX[1] || 0 !== p.hB[player].length) && !(!aT && aW.aX[1] === p.hB[player].length || (aW.aX[0] === d.b4 ? p.pw[player]++ : p.px[player]++, 0))
}

function ad(player) {
	d.ag && (gZ[player] = 1), py(aW.aX[1], player), aU.aK(player, aW.pz[0], aW.aX[0]), q0.q1(player, !1)
}

function hD(player, aN, c, gd) {
	var q2 = dG(3 * p.eE[player], 256);
	gd -= gd >= dG(p.eE[player], 2) ? q2 : 0, py(c, player), aU.aK(player, gd, aN), p.eE[player] -= gd + q2, q0.q1(player, !1)
}

function hC(player, aN) {
	for (var q3, q = p.gf[player].length - 1; 0 <= q; q--)
		if (ol.q4(p.gf[player][q]))
			for (q3 = 3; 0 <= q3; q3--)
				if (ol.q5(p.gf[player][q] + q6[q3]) && ol.q7(p.gf[player][q] + q6[q3]) === aN) {
					p.hB[player].push(p.gf[player][q]);
					break
				}
}

function py(size, player) {
	for (var q = p.hB[player].length - 1; size <= q; q--) ol.q8(p.hB[player][q], player)
}

function hE(player) {
	for (let q = p.gf[player].length - 1; 0 <= q; q--)
		if (ol.q4(p.gf[player][q]))
			for (let q3 = 3; 0 <= q3; q3--)
				if (ol.q9(p.gf[player][q] + q6[q3])) {
					p.hB[player].push(p.gf[player][q]);
					break
				}
}

function go(player, qA) {
	var q, gT, q3, qB, c = p.gf[player].length,
		qC = 256 <= c ? 12 : 32 <= c ? 6 : 1,
		qD = c - 1 - cU.dK(qC);
	gX = 0;
	loop: for (q = qD; 0 <= q; q -= qC)
		for (q3 = 3; 0 <= q3; q3--)
			if ((qB = ol.q9(p.gf[player][q] + q6[q3]) ? d.b4 : ol.q7(p.gf[player][q] + q6[q3])) === d.b4 || ol.q5(p.gf[player][q] + q6[q3]) && qB !== player && (qA || qE(player, qB))) {
				for (gT = gX - 1; 0 <= gT; gT--)
					if (gY[gT] === qB) continue loop;
				if (gY[gX] = qB, ++gX >= gW) return !0
			}
	return 0 < gX
}

function gp(player, qA) {
	var q, q3, qB;
	for (gX = 0, q = p.gf[player].length - 1; 0 <= q; q--)
		for (q3 = 3; 0 <= q3; q3--)
			if ((qB = ol.q9(p.gf[player][q] + q6[q3]) ? d.b4 : ol.q7(p.gf[player][q] + q6[q3])) === d.b4 || ol.q5(p.gf[player][q] + q6[q3]) && qB !== player && (qA || qE(player, qB))) return gY[gX++] = qB, !0;
	return !1
}

function gr() {
	for (var fC, q = gX - 1; 0 <= q; q--)
		if (gY[q] === d.b4) {
			for (gX--, fC = q; fC < gX; fC++) gY[fC] = gY[fC + 1];
			return !0
		} return !1
}

function gq(player) {
	for (var fC, q = gX - 1; 0 <= q; q--)
		if (aU.aV(player, gY[q]))
			for (gX--, fC = q; fC < gX; fC++) gY[fC] = gY[fC + 1];
	return 0 === gX
}

function gy() {
	for (var q = gX - 1; 0 <= q; q--)
		if (gY[q] >= d.e) return !0;
	return !1
}

function h0() {
	for (var q = gX - 1; 0 <= q; q--) gY[q] < d.e && (gY[q] = gY[--gX]);
	return 0 < gX
}

function gw(player) {
	for (var fC, qF = gY[0], qG = p.eE[qF] + aU.qH(qF, player), q = gX - 1; 1 <= q; q--)(fC = p.eE[gY[q]] + aU.qH(gY[q], player)) < qG && (qF = gY[q], qG = fC);
	return qF
}

function h1(player) {
	var bL, qI = gY[0];
	if (1 !== gX)
		for (var qJ = dG(p.eO[player] + p.eM[player], 2), qK = dG(p.eP[player] + p.eN[player], 2), oL = kF(qJ - dG(p.eO[qI] + p.eM[qI], 2)) + kF(qK - dG(p.eP[qI] + p.eN[qI], 2)), q = gX - 1; 1 <= q; q--)(bL = kF(qJ - dG(p.eO[gY[q]] + p.eM[gY[q]],
			2)) + kF(qK - dG(p.eP[gY[q]] + p.eN[gY[q]], 2))) < oL && (oL = bL, qI = gY[q]);
	return qI
}

function h3() {
	return gY[cU.dK(gX)]
}

function qL() {
	this.jO = function(dS) {
		var q, qM, qN, qO, qP;
		if (dS < 0) return "-" + this.jO(Math.abs(dS));
		if (dS < 1e3) return dS.toString();
		for (qM = Math.floor(Math.log(dS + .5) / Math.log(10)) + 1, qN = Math.floor((qM - 1) / 3), qP = (qO = dS.toString()).substring(qM - 3, qM), q = 1; q < qN; q++) qP = qO.substring(qM - 3 * (q + 1), qM - 3 * q) + " " + qP;
		return qO.substring(0, qM - 3 * qN) + " " + qP
	}, this.jP = function(s, qM) {
		return s.toFixed(qM) + "%"
	}, this.qQ = function(dS, qR = 3) {
		return dS.toFixed(b8.b9(Math.floor(qR - Math.log10(Math.max(dS, 1))), 0, 8))
	}, this.qS = function(dS, dR, qM) {
		return (dS * dR).toFixed(qM)
	}, this.gO = function(username) {
		var ou, pA = username.indexOf("[");
		return !(pA < 0) && 1 < (ou = username.indexOf("]")) - pA && ou - pA <= 8 ? username.substring(pA + 1, ou).toUpperCase().trim() : null
	}, leaderboardFilter.parseClanFromPlayerName = this.gO;
	this.qT = function(bO) {
		var gT = Math.floor(.5 * bO.length + .5),
			ih = Math.floor(.5 * (gT - 1));
		for (let q = 0; q < ih; q++)
			for (let fC = -1; fC < 2; fC += 2) {
				var dU = gT + fC * q;
				if (" " === bO[dU]) return [this.qU(bO.substring(0, dU)), this.qV(bO.substring(dU))]
			}
		return [bO.substring(0, gT), bO.substring(gT)]
	}, this.qV = function(bO) {
		var c = bO.length;
		for (let q = 0; q < c; q++)
			if (" " !== bO[q]) return bO.substring(q);
		return bO
	}, this.qU = function(bO) {
		for (let q = bO.length - 1; 0 <= q; q--)
			if (" " !== bO[q]) return bO.substring(0, q + 1);
		return bO
	}, this.qW = function(bO, j8) {
		return bO.split("(")[0] + "(🧈 " + j8.toFixed(2) + ")"
	}, this.qX = function(ca) {
		ca = ca.toUTCString();
		return ca.length < 12 ? ca : ca.substring(5, ca.length)
	}, this.qY = function(ca) {
		ca = ca.toUTCString();
		return ca.length < 12 ? ca : ca.substring(5, ca.length - 4)
	}
}

function qZ() {
	var fs, eD, c, qa, qb;

	function qg() {
		for (var qo = 0, q = 1; q < 5; q++) qo += eD[q] % 1024;
		return qo
	}

	function qf() {
		for (var q = 1; q < c - qb; q++) eD[q] = parseInt(eD[q])
	}

	function qh() {
		eD[0] = "Player " + Math.floor(1e3 * Math.random()), eD[1] = dl.bK < dl.bL ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, eD[2] = 1, eD[3] = 1, eD[4] = dl.bK < dl.bL ? 0 : 1, eD[5] = 0, eD[6] = "000", eD[7] = "0", eD[8] = "0",
			eD[9] = "0", hX.qi()
	}

	function qe() {
		for (var q = c - qb - 1; 0 <= q; q--) eD[q] = cX.hU(eD[q]);
		eD[0] = cX.qr(eD[0])
	}

	function qu(name, value, qv) {
		var qw = new Date,
			qv = (qw.setTime(qw.getTime() + Math.floor(31536e6 * qv)), name + "=" + value + ";expires=" + qw.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = qv
	}
	this.a4 = function() {
		if (0 === di.id) {
			qb = 4, fs = [], c = 10;
			for (var q = qa = 0; q < c; q++) fs.push("u" + q);
			eD = new Array(c), ! function(qs) {
				for (var gT, s, qt = qs.split(";"), q = qt.length - 1; 0 <= q; q--) {
					for (qt[q] = qt[q].trim(), gT = 2; 0 <= gT; gT--) qt[q] = qt[q].replace(" ", "");
					3 < qt[q].length && (gT = fs.indexOf(qt[q].substring(0, 2)), s = qt[q].indexOf("="), 0 <= gT && 2 === s ? eD[gT] = qt[q].substring(s + 1, qt[q].length) : 0 < s && qu(qt[q].substring(0, s), "0", 0))
				}
			}(document.cookie), eD[9] || (eD[9] = "0"), (! function() {
				for (var q = c - 1; 0 <= q; q--)
					if (void 0 === eD[q]) return;
				return 1
			}() || (qa = 2, qe(), qf(), qg() !== eD[5])) && qh()
		}
	}, this.qi = function() {
		if (2 === qa) {
			eD[1] = 0 === eD[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : eD[1], eD[5] = qg(), ! function() {
				for (var q = 1; q < c - qb; q++) eD[q] = eD[q].toString()
			}(), ! function() {
				eD[0] = cX.qp(eD[0]);
				for (var q = c - qb - 1; 0 <= q; q--) eD[q] = cX.qq(eD[q])
			}();
			for (var q = c - 1; 0 <= q; q--) qu(fs[q], eD[q], 1);
			qe(), qf()
		}
	}, this.qa = function() {
		return qa
	}, this.qm = function(gT) {
		qa = gT, this.qi()
	}, this.qn = function(q, value) {
		0 === di.id && (eD[q] = value)
	}, this.hY = function(q) {
		return 0 !== di.id ? 0 : eD[q]
	}
}

function qx() {
	this.qy = [], this.hn = ["Zaakceptuj", "Usunąłeś {0}.", "Zostałeś usunięty przez {0}.", "Gratulacje! Wygrałeś grę.", "{0} wygrał grę.", "{0} złamał pakt o nieagresji.", "{0} atakuje Cię!", "Wybierz swoją pozycję startową!", "Poddałeś się!",
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

function qz() {
	this.jG = function() {
		return 2 === di.id ? 4 : di.dj.dk() ? 2 : 1
	}
}

function r0() {
	for (h5 = 0, q = d.b4 - 1; 0 <= q; q--) 0 !== p.eA[q] && h5++;
	h6 = new Uint16Array(h5);
	for (var c = 0, q = 0; q < d.b4; q++) 0 !== p.eA[q] && (h6[c++] = q)
}

function r1() {
	r2(), r3()
}

function r3() {
	for (var q = h5 - 1; 0 <= q; q--) 0 === p.eA[h6[q]] && r4(q)
}

function r4(q) {
	h5--;
	for (var gT = q; gT < h5; gT++) h6[gT] = h6[gT + 1]
}

function r2() {
	for (let q = h5 - 1; 0 <= q; q--) {
		var hh, s = h6[q];
		p.r[s] <= dG(p.r5[s], 4) ? p.r[s] <= 1e3 && (2 !== p.eA[s] || 0 === p.r[s]) && r6(s) : p.r[s] >= p.r5[s] ? (hh = p.r[s], 250 <= (p.r5[s] = hh) && (p.r7[s] = 1)) : p.r5[s] -= Math.max(1, dG(p.r5[s] - p.r[s], 1e3))
	}
}

function r8() {
	for (var qo = 0, q = h5 - 1; 0 <= q; q--) qo += p.eE[h6[q]];
	return qo % 4096
}

function r9() {
	this.rA = function() {
		var c = h5,
			fy = h6,
			f = [];
		for (let q = 0; q < c; q++) {
			var s = fy[q];
			ol.rB(s) && f.push(s)
		}
		return f
	}, this.rC = function() {
		var c = h5,
			fy = h6;
		let hh = 0;
		var r = p.r;
		for (let q = 0; q < c; q++) hh += r[fy[q]];
		return hh
	}
}

function rD() {
	function rL(fw) {
		var qC = (1 + d.rQ) * g.result.rP / (1e5 * g.result.n);
		let rR = "";
		for (let q = 0; q < fw.length; q++) {
			var rS = fw[q].rT * qC;
			rR += "  " + fw[q].name + ": " + a5.gN.qQ(1e5 * rS)
		}
		rR.length && (eS.rI(0, "The following clans have won these glorious points:", 45, 0, a5.color.rU(225, 240, 255), f3.f5, -1, !1), eS.rI(0, rR.trim(), 45, 0, a5.color.rU(225, 240, 255), f3.f5, -1, !1))
	}
	this.pG = function(f) {
		var rE = u.fv[lx.rF()],
			rG = u.fs[rE],
			rG = (oS.rH("Team " + rG, 2, 1, 12), eS.rI(0, "Team " + rG + " won the game!", 40, 0, f3.f9, f3.f5, -1, !1), d.rN && a5.aB.aD(d.eC) && (g.result.rO += (a5.gN.gO(p.gP[d.eC]) ? 2 : 1) * g.result.rP * (1 + d.rQ) * p.r[d.eC] / g.result
				.n),
				function(fy) {
					var fw = [],
						username = p.gP,
						c = fy.length;
					loop: for (let q = 0; q < c; q++) {
						var s = fy[q],
							rV = a5.gN.gO(username[s]);
						if (rV) {
							for (let gT = fw.length - 1; 0 <= gT; gT--)
								if (fw[gT].name === rV) {
									fw[gT].rT += p.r[s];
									continue loop
								} fw.push({
								name: rV,
								rT: p.r[s],
								rW: u.t[s]
							})
						}
					}
					return fw.sort(function(gT, fC) {
						return fC.rT - gT.rT
					}), fw
				}(f));
		rG.length && (2 === d.m ? rL(rG) : rL(function(fw, rE) {
			for (let q = fw.length - 1; 0 <= q; q--) u.fv[fw[q].rW] !== rE && fw.splice(q, 1);
			return fw
		}(rG, rE)))
	}
}

function rX() {
	var size, gg;
	this.a4 = function() {
		size = d.dF, gg = new Uint16Array(d.dF);
		for (var q = d.dF - 1; 0 <= q; q--) gg[q] = q
	}, this.cf = function() {
		for (var q = size - 1; 0 <= q; q--) 0 === p.eA[gg[q] + d.e] ? function(gT) {
			size--;
			for (var q = gT; q < size; q++) gg[q] = gg[q + 1]
		}(q) : gh.cf(gg[q])
	}
}

function ra() {
	let ca = 2e4;
	this.show = function() {
		if (bm.ca < ca) return !1;
		ca = bm.ca + 135e4, 2 === nf && di.dj.hg(Math.floor(135e4))
	}
}

function rb() {
	function rk(rp, rc) {
		if (function(rp, ru) {
				var rd = aE.rt(rp),
					rv = Math.abs(aE.e6(ru) - aE.e6(rd)),
					rd = Math.abs(aE.e7(ru) - aE.e7(rd));
				return 0 !== Math.max(rv, rd) && (function(ro, rp, rv, rw) {
					var ry = aE.rz(ro),
						ro = aE.s1(ro),
						s2 = aE.rz(rp),
						rp = aE.s1(rp),
						s2 = s2 - ry,
						rp = rp - ro,
						s6 = Math.abs(s2),
						s7 = Math.abs(rp),
						s2 = 0 < s2 ? 1 : 3,
						rp = 0 < rp ? 2 : 0;
					s7 < s6 ? sA(ry, ro, ry + s6, ro + s7, s2, rp, rv) : sA(ro, ry, ro + s7, ry + s6, rp, s2, rw)
				}(rp, aE.rl(ru), rv, rd), !0)
			}(rp, rc)) {
			if (0 === aW.rr[0]) return !!ol.ri(rc << 2);
			if (function(ru) {
					if (ol.ri(ru << 2)) return 1;
					return function(ru) {
						var q, q3, sB = an.w.sB,
							sG = aE,
							c = aW.rr[0],
							sH = 4 * ru;
						for (q = c - 1; 0 <= q; q--)
							if (q3 = sB[q], sH = sG.sI(sH, q3 + 2 & 3), ol.ri(sH)) return aW.rr[0] = q, aW.pD[1] = sH >> 2, aW.pD[2] = 1 + q3, 1;
						return
					}(ru)
				}(rc)) {
				var q, rc = aE.rt(rp),
					bt = pL,
					sB = an.w.sB,
					c = aW.rr[0] - 1,
					sH = 4 * rc,
					sK = aE.sK;
				for (q = 0; q < c; q++)
					if (sH += sK[sB[q]], 0 !== bt[sH + 3] || 2 !== bt[sH + 2]) return !!void 0;
				return !!1
			}
		}
		return !1
	}

	function sA(ry, s0, s2, s3, s8, s9, rv) {
		for (var c7, sB = an.w.sB, nC = 0, sC = 0, bL = s3 - s0, bK = s2 - ry, sD = ry % 16, q = 1; q <= rv; q++) sB[nC++] = s8, sB[nC] = s9, nC += (c7 = (bL * (sD + (q << 4)) + .5) / bK >> 4) - sC, sC = c7;
		aW.sE(aW.rr, nC)
	}
	this.av = function(player, rc) {
		var q3, rd, re = aE.rf(player, rc);
		return re !== rc && (q3 = aE.rg(re, rc), rd = aE.rh(re, q3), !(!ol.ri(rd << 2) && (q3 = aE.rj(re, rc, q3), rd = aE.rh(re, q3), ol.c3(rd << 2) || !ol.ri(rd << 2)) || (aW.pD[0] = rd, aW.pD[1] = rc, aW.pD[2] = 0, !rk(aE.rl(rd), rc)) || 0 !==
			aW.pD[2] && aE.rm(player, aW.pD[1] + aE.rn[aW.pD[2] - 1] << 2)))
	}, this.b1 = function(rc) {
		var ro = an.w.p0[aW.pD[3]];
		return aW.pD[1] = rc, aW.pD[2] = 0, rk(ro, rc)
	}
}

function sL() {
	this.bX = new sM, this.ff = new sN, this.a4 = function() {
		this.bX.a4()
	}
}

function sO() {
	this.aC = function(hb) {
		return 0 === hb ? 1 === d.jc && d.e9 : 1 === hb ? 1 === d.jc && !d.e9 : 2 === d.jc
	}, this.aD = function(player) {
		return 0 !== p.eA[player] && 2 !== p.kl[player]
	}, this.aP = function(sP, sQ) {
		return sP !== sQ
	}, this.sR = function(player, dS) {
		return dS = this.sS(player, dS), p.eE[player] += dS, dS
	}, this.sS = function(player, dS) {
		var kV = p.eE[player];
		return dS = Math.min(dS, p.r[player] * d.sT - kV), dS = Math.min(dS, d.sU - kV), Math.max(dS, 0)
	}, this.aQ = function(player, aM, sV, sW) {
		var kV = p.eE[player],
			aM = b8.dE(kV * (aM + 1), 1024),
			sV = b8.dE(sV * kV, 1024),
			aM = Math.min(aM, kV - sV);
		return 10 === d.k && (aM = sY.sZ(player, aM)), aW.pz[0] = aM, aW.pz[1] = sV, sW <= aM
	}, this.ai = function(player, ae, af) {
		var player = p.eE[player],
			sX = b8.dE(64 * player, 1024);
		return ae = Math.min(ae, player - sX), sX += player = this.sb(ae), ae = this.sS(af, ae -= player), aW.pz[0] = ae, aW.pz[1] = sX, 1 <= ae
	}, this.sc = function(ae, af) {
		var sa = this.sb(ae);
		return ae = this.sS(af, ae -= sa), aW.pz[0] = ae, aW.pz[1] = sa, 1 <= ae
	}, this.aj = function(player, sd) {
		return b8.dE(p.eE[player] * (sd + 1), 1024)
	}, this.sb = function(se) {
		return b8.dE(Math.max(2142 - bm.h4(), 0) * se, 2142)
	}, this.b2 = function(player, sV) {
		p.eE[player] -= b8.dE(sV * p.eE[player], 1024)
	}, this.aa = function(player) {
		p.eE[player] -= aW.pz[0] + aW.pz[1]
	}, this.aS = function(player, aN) {
		return (aN = Math.min(aN, d.b4)) < d.b4 && 0 === p.eA[aN] && (aN = d.b4), (aW.aX[0] = aN) === d.b4 || qE(player, aN)
	}, this.ah = function(player, af) {
		return 0 !== p.eA[af] && !qE(player, af)
	}
}

function sf() {
	let dU = a5.color;
	this.fn = dU.rU(0, 0, 0), this.j2 = dU.sg(0, 0, 0, .7), this.sh = dU.sg(0, 0, 0, .5), this.jM = dU.sg(0, 0, 0, .85), this.f5 = dU.sg(0, 0, 0, .75), this.lQ = dU.sg(0, 0, 0, .6), this.si = dU.sg(0, 0, 0, .35), this.f9 = dU.rU(255, 255, 255), this
		.sj = dU.sg(255, 255, 255, .3), this.kf = dU.sg(255, 255, 255, .6), this.sk = dU.sg(255, 255, 255, .4), this.sl = dU.sg(255, 255, 255, .25), this.sm = dU.sg(255, 255, 255, .85), this.sn = dU.sg(255, 255, 255, .75), this.so = dU.sg(255, 255,
			255, .15), this.sp = dU.rU(128, 128, 128), this.sq = dU.sg(64, 64, 64, .75), this.sr = dU.sg(88, 88, 88, .83), this.ss = dU.sg(60, 60, 60, .85), this.st = dU.sg(80, 60, 60, .85), this.su = dU.rU(30, 255, 30), this.sv = dU.rU(0, 200, 0),
		this.sw = dU.rU(128, 255, 128), this.sx = dU.sg(10, 65, 10, .75), this.sy = dU.sg(0, 255, 0, .6), this.sz = dU.sg(0, 255, 0, .5), this.t0 = dU.sg(0, 200, 0, .5), this.f4 = dU.sg(0, 100, 0, .75), this.t1 = dU.sg(0, 60, 0, .8), this.mE = dU.sg(
			0, 255, 0, .3), this.lP = dU.sg(0, 180, 0, .6), this.nO = dU.sg(0, 120, 0, .85), this.t2 = dU.rU(0, 120, 0), this.t3 = dU.sg(0, 70, 0, .85), this.t4 = dU.rU(255, 120, 120), this.ki = dU.rU(255, 160, 160), this.t5 = dU.rU(255, 70, 70),
		this.t6 = dU.rU(230, 0, 0), this.t7 = dU.sg(220, 0, 0, .6), this.t8 = dU.sg(255, 100, 100, .8), this.t9 = dU.sg(100, 0, 0, .85), this.tA = dU.sg(60, 0, 0, .85), this.tB = dU.sg(200, 0, 0, .6), this.ho = dU.sg(120, 0, 0, .85), this.tC = dU.rU(
			255, 70, 10), this.tD = dU.sg(0, 60, 60, .85), this.tE = dU.sg(10, 60, 60, .9), this.tF = dU.sg(0, 96, 96, .75), this.tG = dU.rU(160, 160, 255), this.tH = dU.sg(0, 40, 90, .75), this.tI = dU.sg(0, 0, 255, .6), this.tJ = dU.rU(200, 200,
			255), this.tK = dU.rU(255, 120, 100), this.tL = dU.sg(255, 255, 0, .5), this.tM = dU.sg(255, 255, 150, .2), this.tN = dU.rU(255, 255, 0), this.tO = dU.rU(255, 255, 200), this.tP = dU.sg(200, 200, 0, .6), this.tQ = dU.sg(140, 120, 0, .75),
		this.tR = dU.sg(180, 160, 40, .75), this.tS = dU.sg(70, 50, 20, .85), this.tT = dU.sg(255, 140, 0, .75), this.tU = dU.sg(0, 0, 0, 0), dU = null
}

function tV() {
	for (var c6, c7, q = tW - 1; 0 <= q; q--) c6 = dG(tX[q], 4) % ba.bb, c7 = dG(tX[q], 4 * ba.bb), p.eM[tY] = p.eM[tY] > c6 ? c6 : p.eM[tY], p.eN[tY] = p.eN[tY] > c7 ? c7 : p.eN[tY], p.eO[tY] = p.eO[tY] < c6 ? c6 : p.eO[tY], p.eP[tY] = p.eP[tY] <
		c7 ? c7 : p.eP[tY]
}

function tZ() {
	var bs, s, q, c = p.hB[tY].length;
	loop: for (q = c - 1; 0 <= q; q--) {
		for (bs = 3; 0 <= bs; bs--)
			if (s = p.hB[tY][q] + q6[bs], ol.q9(s) || ol.q5(s) && ol.q7(s) !== tY) {
				ol.q8(p.hB[tY][q], tY);
				continue loop
			} p.hB[tY][q] = p.hB[tY][c - 1], p.hB[tY].pop(), c--
	}
}

function ta() {
	var bs, s, tb, tc, c = p.gf[tY].length;
	loop: for (var q = c - 1; 0 <= q; q--) {
		for (tb = tc = !1, bs = 3; 0 <= bs; bs--) {
			if (s = p.gf[tY][q] + q6[bs], ol.td(s, tY)) continue loop;
			tb = tb || ol.ri(s), tc = tc || ol.c3(s)
		}
		tb ? p.at[tY].push(p.gf[tY][q]) : tc ? p.te[tY].push(p.gf[tY][q]) : ol.tf(p.gf[tY][q], tY), p.gf[tY][q] = p.gf[tY][c - 1], p.gf[tY].pop(), c--
	}
}

function tg() {
	p.r[th] -= tW
}

function ti(border) {
	for (var c = border.length, q = c - 1; 0 <= q; q--) ol.tj(th, border[q]) || (border[q] = border[c - 1], border.pop(), c--)
}

function tk(border) {
	for (var c = border.length, q = c - 1; 0 <= q; q--) !ol.tj(th, border[q]) && ol.tl(border[q]) && (border[q] = border[c - 1], border.pop(), c--)
}

function tm(border) {
	for (var bs, s, c = border.length, q = c - 1; 0 <= q; q--)
		for (bs = 3; 0 <= bs; bs--)
			if (s = border[q] + q6[bs], ol.td(s, th)) {
				p.gf[th].push(border[q]), border[q] = border[c - 1], border.pop(), c--;
				break
			}
}

function tn() {
	for (var bs, s, q = tW - 1; 0 <= q; q--)
		for (bs = 3; 0 <= bs; bs--) s = tX[q] + q6[bs], ol.to(th, s) && ol.tp(s) && (p.gf[th].push(s), ol.tq(s, th))
}

function tr() {
	var c6, c7;
	loop: for (; p.eN[th] < p.eP[th];) {
		for (c6 = p.eO[th]; c6 >= p.eM[th]; c6--)
			if (ol.tj(th, 4 * (p.eN[th] * ba.bb + c6))) break loop;
		p.eN[th]++
	}
	loop: for (; p.eN[th] < p.eP[th];) {
		for (c6 = p.eO[th]; c6 >= p.eM[th]; c6--)
			if (ol.tj(th, 4 * (p.eP[th] * ba.bb + c6))) break loop;
		p.eP[th]--
	}
	loop: for (; p.eM[th] < p.eO[th];) {
		for (c7 = p.eP[th]; c7 >= p.eN[th]; c7--)
			if (ol.tj(th, 4 * (c7 * ba.bb + p.eM[th]))) break loop;
		p.eM[th]++
	}
	loop: for (; p.eM[th] < p.eO[th];) {
		for (c7 = p.eP[th]; c7 >= p.eN[th]; c7--)
			if (ol.tj(th, 4 * (c7 * ba.bb + p.eO[th]))) break loop;
		p.eO[th]--
	}
}

function qE(player, aN) {
	return 0 === u.t[player] || u.t[player] !== u.t[aN]
}

function ts(player, aN) {
	for (var a2, tt = aU.tu(player), q = 0; q < tt; q++)
		if (0 === aU.tv(player, q))
			if ((a2 = aU.tw(player, q)) === d.b4) {
				if (aN === d.b4) return !1;
				if (tx(aN)) return !0
			} else if (aN === d.b4) {
		if (tx(a2)) return !0
	} else if (ty(aN, a2)) return !0;
	return !1
}

function tx(player) {
	for (var q, nC, c = p.gf[player].length, bs = 3; 0 <= bs; bs--)
		for (nC = q6[bs], q = 0; q < c; q++)
			if (ol.q9(p.gf[player][q] + nC)) return !0;
	return !1
}

function ty(sP, sQ) {
	var q, hh, bs, nC, s, tz = p.gf[sP].length,
		u0 = p.gf[sQ].length;
	for (u0 < tz && (hh = sP, sP = sQ, sQ = hh, hh = tz, tz = u0, 0), bs = 3; 0 <= bs; bs--)
		for (nC = q6[bs], q = 0; q < tz; q++)
			if (s = p.gf[sP][q] + nC, ol.q5(s) && ol.q7(s) === sQ) return !0;
	return !1
}

function u9() {
	tW = 0, u4 = 2048, tX = new Uint32Array(4 * u4), u5 = 0, u6 = new Uint32Array(u4), (q6 = new Int32Array(4))[0] = -4 * ba.bb, q6[1] = 4, q6[2] = -q6[0], q6[3] = -q6[1], u7 = new Uint8Array(ba.bb * ba.bd)
}

function uA(player) {
	tY = player, u8 = !1, uB(), uC();
	for (var q = aU.tu(tY) - 1; 0 <= q; q--) 0 === aU.tv(tY, q) && (u1 = q, uD());
	u8 && uE()
}

function uE() {
	tZ(), ta()
}

function uD() {
	th = aU.tw(tY, u1), u2 = aU.uF(tY, u1), uG(), (0 !== tW && (uI(), uJ()) ? uK : uH)()
}

function uJ() {
	return (u3 = dG(u2, tW)) > d.aR
}

function uI() {
	for (var q = tW - 1; 0 <= q; q--) u7[dG(tX[q], 4)] = 0
}

function uH() {
	var hh;
	1 === aU.tu(tY) && q0.uL(tY), tY !== d.eC ? (p.eE[tY] += u2, ak.uM(tY)) : (hh = p.eE[tY], p.eE[tY] += u2, ak.uM(tY), ab.eD[13] -= p.eE[tY] - hh), aU.uN(tY, u1)
}

function uB() {
	var q, c = p.hB[tY].length;
	for (u5 = 0, q = (u4 < c ? u4 : c) - 1; 0 <= q; q--) u6[u5++] = p.hB[tY][q]
}

function uC() {
	for (var q = p.hB[tY].length - 1; 0 <= q; q--) ol.tl(p.hB[tY][q]) && ol.tq(p.hB[tY][q], tY);
	p.hB[tY] = []
}

function uG() {
	tW = 0, (th === d.b4 ? uO : uP)()
}

function uP() {
	for (var s, nC, q, bs = 3; 0 <= bs; bs--)
		for (q = u5 - 1; 0 <= q; q--) nC = dG(s = u6[q] + q6[bs], 4), 0 === u7[nC] && ol.q5(s) && ol.q7(s) === th && (u7[nC] = 1, tX[tW++] = s)
}

function uO() {
	for (var s, nC, q, bs = 3; 0 <= bs; bs--)
		for (q = u5 - 1; 0 <= q; q--) nC = dG(s = u6[q] + q6[bs], 4), 0 === u7[nC] && ol.q9(s) && (u7[nC] = 1, tX[tW++] = s)
}

function o0() {
	this.uQ = function(cj) {
		var username = ex.ey.data[122].value.slice(0, 20),
			username = (i.j(22 + 16 * username.length + 18), i.l(1, 0), i.l(6, 1), i.l(10, hx), v.cs.pj(username), a5.color.mt(ex.w.mu()));
		i.l(6, username[0]), i.l(6, username[1]), i.l(6, username[2]), v.w.cR = cj, v.w.send(cj, i.y)
	}, this.uR = function(uS) {
		return i.j(11), i.l(1, 0), i.l(6, 2), i.l(4, uS), v.w.send(v.w.cR, i.y), !0
	}
}

function uT() {
	var uU, uV, uW, uX, cZ = !1;

	function uY() {
		cZ = !0, uU = -1, uV = new Array(4);
		for (var q = 3; 0 <= q; q--) uV[q] = !1;
		var uZ = Math.floor(1 + .02 * dl.min);
		uW = new Array(4), (uX = new Array(4))[1] = uX[3] = uW[0] = uW[2] = 0, uX[0] = uW[3] = -uZ, uW[1] = uX[2] = uZ
	}

	function ub() {
		if (-1 !== uU)
			if (0 !== d.jc && eK.ih()) {
				for (var ud = !1, q = 3; 0 <= q; q--) uV[q] && (ud = !0, iK += uW[q], iL += uX[q], bA.f1(uW[q], uX[q]), j0.im());
				ud ? bm.bn = !0 : uf.ue()
			} else uf.ue()
	}
	this.ua = function(ew) {
		0 !== d.jc && eK.ih() && (cZ || uY(), uV[ew] = !0, -1 === uU) && (uU = setInterval(ub, 20), ub())
	}, this.uc = function(ew) {
		if (0 !== d.jc && (cZ || uY(), uV[ew] = !1, -1 !== uU)) {
			for (var ud = !1, q = 3; 0 <= q; q--) ud = ud || uV[q];
			ud || this.ue()
		}
	}, this.ue = function() {
		if (cZ && -1 !== uU) {
			for (var q = 3; 0 <= q; q--) uV[q] = !1;
			clearInterval(uU), uU = -1
		}
	}
}

function ug() {
	this.uh = [], this.ui = [], this.a4 = function() {
		this.uh = [], this.ui = []
	}, this.cf = function() {
		0 <= this.uh.length && this.uj(this.uh), 0 <= this.ui.length && this.uj(this.ui)
	}, this.uj = function(gH) {
		for (var fC = -1, q = gH.length - 1; 0 <= q; q--)
			if (gH[q].ca--, gH[q].ca <= 0) {
				fC = q;
				break
			} for (q = fC; 0 <= q; q--) gH.shift()
	}, this.uk = function(id, fy, ul) {
		return this.um(this.uh, id, fy, ul)
	}, this.un = function(id, fy, ul) {
		return this.um(this.ui, id, fy, ul)
	}, this.um = function(gH, id, fy, ul) {
		return ! function(gH, id, fy) {
			var q, c8;
			for (q = fy.length - 1; 0 <= q; q--)
				for (c8 = gH.length - 1; 0 <= c8; c8--)
					if (gH[c8].player === fy[q] && id === gH[c8].id) return 1;
			return
		}(gH, id, fy) && (ul && function(gH, id, fy) {
			var q;
			for (q = fy.length - 1; 0 <= q; q--) gH.push({
				player: fy[q],
				id: id,
				ca: 384
			})
		}(gH, id, fy), !0)
	}
}

function uq() {
	this.dE = function(gT, fC) {
		return Math.floor((gT + .5) / fC)
	}, this.ur = function(gT, fC) {
		return Math.floor(gT * (fC + .5))
	}, this.sqrt = function(dS) {
		return ~~Math.sqrt(dS + .5)
	}, this.pow = function(a2) {
		return Math.floor(Math.pow(2, a2) + .5)
	}, this.b9 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.us = function(ut, uu, dT) {
		return Math.max(Math.min(ut, uu), dT)
	}, this.uv = function(uw, ux, c6, c7) {
		c6 -= uw, uw = c7 - ux, c7 = 0;
		return 0 == c6 ? c7 = 0 <= uw ? Math.PI : 0 : (c7 = Math.atan(uw / c6), c7 += 0 < c6 ? .5 * Math.PI : 1.5 * Math.PI), c7
	}, this.log2 = function(dS) {
		return Math.floor(!!dS * (1 + Math.log2(dS + .5)))
	}
}

function uz() {
	this.v0 = new v1, this.v2 = new rD, this.result = new v3, this.az = new r9
}

function v4() {
	var lE = 32,
		lD = new Array(2);

	function be(dU) {
		var c6, c7, aA, il, ik, l9 = lE,
			dX = a5.a6.be(l9, l9),
			li = a5.a6.getContext(dX, !0),
			oM = a5.a6.getImageData(li, l9, l9),
			bt = oM.data,
			bQ = (l9 >> 1) - .5,
			v5 = Math.sqrt(bQ * bQ);
		for (bt.fill(255), c7 = 0; c7 < l9; c7++)
			for (c6 = 0; c6 < l9; c6++) ik = c6 - bQ, il = c7 - bQ, aA = 4 * (c7 * l9 + c6), ik = 714 * (v5 - Math.sqrt(ik * ik + il * il)) / v5, bt[2 + aA] = dU, bt[3 + aA] = 255 < ik ? 0 : ik;
		return li.putImageData(oM, 0, 0), dX
	}
	this.pC = -1, this.a4 = function() {
		this.pC = -1, lD[0] || (lD[0] = be(255), lD[1] = be(0))
	}, this.oP = function(li, ip, c6, c7, fA, q) {
		a5.aB.aD(d.eC) && (li.setTransform(ip *= 4 / 3 * .625, 0, 0, ip, c6 - (fA *= 4 / 3), c7 - fA), li.drawImage(lD[+(an.w.v6[q] === this.pC)], 0, 0))
	}
}

function v7() {
	this.a4 = function() {
		0 === ex.ey.data[181].value && (ex.ey.ez(180, Math.floor(Math.random() * b8.pow(30))), ex.ey.ez(181, Math.floor((new Date).getTime() / 36e5)))
	}
}

function oE() {
	this.v8 = function() {
		if (bV.size < i.fZ(38)) v.w.d0(0, 3259);
		else {
			var oX = bV.bc(6),
				c = bV.bc(10),
				pm = bV.bc(15);
			if (bV.fd(38 + 51 * c + 16 * pm)) {
				var data = [];
				let dR, qM;
				qM = 0 === oX ? (dR = .1, 1) : (dR = .001, 3);
				for (let q = 0; q < c; q++) data.push(["" + (bV.bc(30) + 1), bW.ff.fg(bV.bc(5)), (dR * bV.bc(16)).toFixed(qM)]);
				8 === dw.dy && dw.fh().fi(21, !0, {
					oX: oX,
					title: oX ? "Clan Ranking" : "1v1 Player Ranking",
					data: data
				})
			} else v.w.d0(0, 3260)
		}
	}, this.v9 = function() {
		if (bV.size < i.fZ(29)) v.w.d0(0, 3265);
		else {
			var vA = bV.bc(4),
				vB = bV.bc(7),
				vC = bV.bc(11);
			if (bV.fd(29 + 16 * vB + 16 * vC + 11 * vA)) {
				var data = [];
				for (let q = 0; q < vA; q++) {
					var gJ = bW.ff.fg(bV.bc(3)),
						vD = bV.bc(8),
						vE = [];
					for (let gT = 0; gT < vD; gT++) vE.push(bV.bc(16));
					data.push({
						name: "[" + gJ + "]",
						vE: vE
					})
				}
				8 === dw.dy && dw.fh().fi(23, !0, data)
			} else v.w.d0(0, 3266)
		}
	}
}

function vF() {
	this.id = 0, this.hW = 0, this.hJ = null, this.hK = null, this.hV = null, this.hL = null, this.dj = new hF, this.a4 = function() {
		var self, hW;
		self = this, "undefined" == typeof Android || (hW = Android.getVersion()) < 12 || (self.hW = hW, self.id = 1, self.hK = Android),
			function(self) {
				var hW;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.hV = mwIOSdataX, self.hL = window.webkit.messageHandlers.iosCommandA, hW = self
					.hV.version, self.hW = hW ? Number(hW) : 0)
			}(this),
			function(self) {
				var hJ;
				if (0 === self.id) {
					try {
						if (!(hJ = window.localStorage)) return;
						hJ.setItem("tls7", "1"), hJ.removeItem("tls7")
					} catch (error) {
						return
					}
					self.hJ = hJ
				}
			}(this)
	}
}

function vJ() {
	var vK, vL, vM = -15e3,
		vN = !1;

	function ds(a2) {
		ve() || (vN = !0, vf(a2, 1), v.w.cu(v.w.x), vg(Math.floor(dl.vh * a2.clientX), Math.floor(dl.vh * a2.clientY)))
	}

	function vT(a2) {
		vM = bm.ca, vf(a2, 1), v.w.cu(v.w.x), 0 < a2.touches.length && (vK = Math.floor(dl.vh * a2.touches[0].clientX), vL = Math.floor(dl.vh * a2.touches[0].clientY), vi.vT(a2) || vg(vK, vL))
	}

	function vg(c6, c7) {
		dw.ds(c6, c7), 0 === d.jc ? cv.ds(c6, c7) : vj.m4(c6, c7) || vk.ds(c6, c7) || eR.ds(c6, c7) || le.vl(c6, c7) || vm.ds(c6, c7) || jQ.ds(c6, c7) || oU.vn(c6, c7) || bE.ds(c6, c7) || le.vo(c6, c7)
	}

	function f1(a2) {
		ve() || (vN = !0, vf(a2, 1), vp(Math.floor(dl.vh * a2.clientX), Math.floor(dl.vh * a2.clientY)))
	}

	function vU(a2) {
		vM = bm.ca, vf(a2, 1), 0 < a2.touches.length && (vK = Math.floor(dl.vh * a2.touches[0].clientX), vL = Math.floor(dl.vh * a2.touches[0].clientY), vi.vU(a2) || vp(vK, vL))
	}

	function vp(c6, c7) {
		dw.f1(c6, c7), 0 === d.jc ? cv.f1(c6, c7) : (vq.vr(c6, c7), vk.f1(c6, c7) || (jQ.f1(c6, c7), le.dr() ? le.f1(c6, c7) : eF.jC ? eF.f1(c6) && (bm.bn = !0) : (kd.f1(c6, c7), j0.iR && j0.f1(c6, c7) && (bm.bn = !0))))
	}

	function vS(a2) {
		ve() || (vf(a2, 1), f2(), 0 === d.jc ? (cv.click(-1024, -1024), mX.mY()) : (kd.vs(-1024, -1024), jQ.f1(-1024, -1024), eF.jd(), j0.iR && (j0.iR = !1)))
	}

	function vR(a2) {
		ve() || (vf(a2, 1), vt(Math.floor(dl.vh * a2.clientX), Math.floor(dl.vh * a2.clientY), 2 === a2.button), oU.oV && (oU.oV = !1, a2.preventDefault()))
	}

	function click(a2) {
		ve() || vf(a2, 1)
	}

	function vV(a2) {
		vM = bm.ca, vf(a2, 1), a2 && a2.touches && 0 < a2.touches.length && 0 !== d.jc ? j0.iR = !1 : vi.vu() || (vt(vK, vL, !1), oU.oV && (oU.oV = !1, a2.preventDefault()))
	}

	function vW(a2) {
		vM = bm.ca, vf(a2, 1), vt(vK, vL, !1), oU.oV && (oU.oV = !1, a2.preventDefault())
	}

	function vX(a2) {
		mw.vX(a2)
	}

	function vY(a2) {
		mw.vY(a2)
	}

	function vZ(a2) {
		ve() || vf(a2, 0)
	}

	function vt(c6, c7, vv) {
		f2(), 0 === d.jc ? cv.click(c6, c7) : (kd.vs(c6, c7), vk.vs(), eF.jd(), j0.iR = !1, le.click(c6, c7, vv) ? bm.bn = !0 : jQ.vR(c6, c7))
	}

	function f2() {
		dw.f2()
	}

	function ig(a2) {
		var c6, c7, deltaY;
		ve() || (vf(a2, 1), v.w.cu(v.w.x), c6 = Math.floor(dl.vh * a2.clientX), c7 = Math.floor(dl.vh * a2.clientY), deltaY = a2.deltaY, 1 === a2.deltaMode && (deltaY *= 16), dw.ig(c6, c7, deltaY), 0 === d.jc ? cv.ig(c6, c7, deltaY) : kd.ig(c6, c7,
			deltaY) || (eF.er(c6, c7) ? eF.ig(deltaY) && (bm.bn = !0) : j0.ig(c6, c7, deltaY)))
	}

	function va(a2) {
		vf(a2, 0)
	}

	function vf(a2, id) {
		0 === id && dw.dr() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== cv.cw() && a2.preventDefault()
	}

	function vc(a2) {
		if (keybindHandler(a2.key)) return;
		ve() || ("ArrowLeft" === a2.key ? uf.ua(3) : "ArrowUp" === a2.key ? uf.ua(0) : "ArrowRight" === a2.key ? uf.ua(1) : "ArrowDown" === a2.key ? uf.ua(2) : "a" === a2.key ? eF.jb(.9375) : "d" === a2.key ? eF.jb(16 / 15) : "s" === a2.key ? eF.jb(
			7 / 8) : "w" === a2.key ? eF.jb(8 / 7) : "1" === a2.key ? eF.jb(.75) : "2" === a2.key ? eF.jb(7 / 8) : "3" === a2.key ? eF.jb(.9375) : "4" === a2.key ? eF.jb(31 / 32) : "5" === a2.key ? eF.jb(32 / 31) : "6" === a2.key ? eF.jb(16 /
			15) : "7" === a2.key ? eF.jb(8 / 7) : "8" === a2.key ? eF.jb(4 / 3) : "+" === a2.key ? 0 !== d.jc && j0.ig(Math.floor(dl.bK / 2), Math.floor(dl.bL / 2), -200) : "-" === a2.key ? 0 !== d.jc && j0.ig(Math.floor(dl.bK / 2), Math
			.floor(dl.bL / 2), 200) : "c" === a2.key ? 0 !== d.jc && vk.vx() : " " === a2.key ? d.jc && vq.vy(!1) : "b" === a2.key && d.jc && vq.vy(!0))
	}

	function vb(a2) {
		ve() || bm.ca < 400 || "Enter" === a2.key && dw.ev(1) || (8 !== cv.cw() && cv.ev(a2) ? bm.bn = !0 : "Escape" === a2.key ? oU.vz() : "ArrowLeft" === a2.key || "a" === a2.key ? uf.uc(3) : "ArrowUp" === a2.key || "w" === a2.key ? uf.uc(0) :
			"ArrowRight" === a2.key || "d" === a2.key ? uf.uc(1) : "ArrowDown" === a2.key || "s" === a2.key ? uf.uc(2) : "h" === a2.key ? vj.lv(!d.ie) : " " === a2.key && d.jc && (jQ.jR && jQ.m1(), d.eJ) && vj.lz(!1))
	}

	function vd() {
		"hidden" === document.visibilityState ? 1 === d.jc && (d.eJ ? vj.m3() : !d.e8 || jQ.jR || d.e9 || jQ.m1()) : bm.bn = !0
	}

	function ve() {
		return vM + 15e3 > bm.ca
	}

	function resize() {
		dl.w2()
	}
	this.vO = 0, this.vP = "", this.oV = !1, this.a4 = function() {
		vQ.addEventListener("mousedown", ds, {
			passive: !1
		}), vQ.addEventListener("mousemove", f1, {
			passive: !1
		}), vQ.addEventListener("mouseup", vR, {
			passive: !1
		}), vQ.addEventListener("click", click, {
			passive: !1
		}), vQ.addEventListener("mouseleave", vS, {
			passive: !1
		}), vQ.addEventListener("wheel", ig, {
			passive: !1
		}), vQ.addEventListener("touchstart", vT, {
			passive: !1
		}), vQ.addEventListener("touchmove", vU, {
			passive: !1
		}), vQ.addEventListener("touchend", vV, {
			passive: !1
		}), vQ.addEventListener("touchcancel", vW, {
			passive: !1
		}), vQ.addEventListener("dragover", vX), vQ.addEventListener("drop", vY), vQ.addEventListener("dblclick", vZ), document.addEventListener("contextmenu", va), document.addEventListener("keyup", vb), document.addEventListener("keydown",
			vc), document.addEventListener("visibilitychange", vd), window.addEventListener("resize", resize)
	}, this.vn = function(c6, c7) {
		return !!vj.ds(c6, c7) || !!(kd.ds(c6, c7) || j0.ds(c6, c7) || eF.ds(c6, c7) || eS.ds(c6, c7))
	}, this.w0 = ve, this.w1 = function() {
		return !vN || 0 < vM
	}, this.vz = function() {
		if (!dw.dr()) return 8 === cv.cw() ? d.ie ? void vj.lv(!1) : vk.dr ? void vk.m1() : void jQ.m1() : void(7 === cv.cw() ? w3.w4() : 6 === cv.cw() ? w5.w6() : 2 === cv.cw() && gU.mm());
		dw.ev(2)
	}
}

function w7(pr, w8, aM) {
	var w9, q, wA = new Array(w8.length),
		wB = new Array(w8.length);
	for (this.resize = function() {
			for (var c = w8.length, q = 0; q < c; q++) 0 < q && a5.a6.a7(wA[q], 8)
		}, w9 = document.createElement("div"), pr.style.overflowX = "hidden", pr.style.overflowY = "auto", ! function() {
			var q, bs, c = w8.length;
			for (q = 0; q < c; q++) {
				wA[q] = document.createElement("div"), wA[q].style.display = "flex", wA[q].style.width = "100%", wA[q].style.height = "2.5em", wA[q].style.backgroundColor = q % 2 == 0 ? f3.sq : f3.si, wB[q] = new Array(w8[0].length);
				for (let gT = 0; gT < w8[0].length; gT++) wB[q][gT] = bs = document.createElement("div"), bs.style.display = "flex", bs.style.width = "100%", bs.style.height = "100%", bs.style.justifyContent = "center", bs.style.alignItems =
					"center", bs.innerHTML = w8[q][gT], 0 < gT && a5.a6.a7(bs, 4), wA[q].appendChild(bs)
			}
		}(), q = 0; q < w8.length; q++) w9.appendChild(wA[q]);
	pr.appendChild(w9)
}

function wE() {
	var wF = 0,
		wG = 0;
	this.vr = function(c6, c7) {
		wF = c6, wG = c7
	}, this.vy = function(wH) {
		d.eJ || jQ.jR || (a5.aB.aC(0) || a5.aB.aC(1)) && a5.aB.aD(d.eC) && (eF.ds(wF, wG) ? eF.jC = !1 : function(wH) {
			var wJ = aE.wK(wF),
				wL = aE.wM(wG),
				aA = aE.wN(wJ, wL),
				ip = aE.wO(aA);
			aE.wP(wJ, wL) && (d.e9 ? ol.tl(ip) && h7.ec.a9(aA) : ol.wQ(ip) || (ol.ri(ip) || wH ? an.az.nv(d.eC, aA) && h7.ec.am(eF.jN(), aA) : ol.q9(ip) ? tx(d.eC) ? h7.ec.aL(eF.jN(), d.b4) : ts(d.eC, d.b4) ? wR.wS(d.b4, eF.jN()) : an.az
				.nv(d.eC, aA) && h7.ec.am(eF.jN(), aA) : (wJ = ol.q7(ip)) !== d.eC && (qE(wJ, d.eC) ? ty(d.eC, wJ) ? h7.ec.aL(eF.jN(), wJ) : ts(d.eC, wJ) ? wR.wS(wJ, eF.jN()) : an.az.nv(d.eC, aA) && h7.ec.am(eF.jN(), aA) : an.az
					.nv(d.eC, aA) && h7.ec.am(eF.jN(), aA))))
		}(wH))
	}
}

function wT() {
	this.b4 = 512, this.sU = 15e8, this.wU = 1e9, this.ka = 512, this.aR = 2, this.eC = 0, this.e = 0, this.wV = 0, this.dF = 0, this.wW = 0, this.dH = 512, this.sT = 150, this.e8 = !0, this.eJ = !1, this.jc = 0, this.wX = 0, this.ie = !1, this
		.e9 = !1, this.wY = !1, this.ag = !1, this.gQ = 0, this.k = 0, this.rQ = !1, this.aJ = null, this.wZ = null, this.kt = 30, this.m = 0, this.rN = 0, this.wa = 0, this.ms = function(wb, wc, fy, mg, wd, we) {
			this.ie = !1, this.eJ = we, this.k = mg, this.rQ = wd, this.ag = this.k < 7 || 9 === this.k, this.wV = this.e = fy.length, this.e8 = 1 === this.wV, this.k = 10 === this.k && this.e8 ? 7 : this.k, this.k = 8 === this.k && 2 !== this.e ?
				7 : this.k, this.gQ = 9 === this.k ? 2 : this.k + 2, this.kt = this.e <= 2 ? 30 : this.e <= 50 ? 40 : 50, g0.cy && !g0.cE.wf ? this.wY = this.e9 = !1 : this.wY = this.e9 = this.ag || this.e < 100, this.aJ = this.e9 ? new e3 : null,
				1 === nf ? this.dH = this.e : this.e8 ? this.dH = gU.mn() : this.dH = this.b4, this.dF = this.dH - this.e, this.wW = 0, this.eC = wc, this.m = 0, this.rN = 0, this.wa = 0, cU.cW(wb), g4.a4(), p.a4(fy), h7.eg.wg = [], u.a4(fy), this
				.jc = 1, ab.a4(), pO(), wh.wi(), eY.a4(), ak.a4(), gb(), ol.a4(fy), wj.a4(), aE.a4(), an.a4(), gh.a4(), wk.j(), e4.a4(), r0(), aG.a4(wb, fy, mg, wd), lx.a4(), bH.a4(), eW.a4(), vk.a4(), pM.putImageData(pN, 0, 0), kd.a4(), j0.a4(), eF
				.a4(), vj.a4(), bE.a4(), wl.a4(), eH.a4(), jQ.a4(), oS.a4(), eS.a4(), vm.a4(), le.a4(), eR.a4(), wm.a4(), q0.a4(), wn.a4(), u9(), aU.a4(), bA.a4(), sY.a4(), wo.a4(), wp.a4(), wR.a4(), 8 === this.k ? (this.wZ = new wq, this.wZ.a4(
				fy)) : this.wZ = null, bm.wr(), eK.wt(), 0 === p.eA[d.eC] && eR.show(!1, !0), bA.eV(!0), eQ.a4(), bm.bn = !0, this.eJ || this.e8 && this.e9 || di.dj.setState(1)
		}, this.wu = function(wv) {
			v.w.d5(), this.jc = 0, bm.ww(), di.dj.setState(0), wv || hN.wx.show(), cv.setState(0), dw.dx(5, 5)
		}, this.wy = function() {
			return this.eJ ? jQ.jR || !vj.lr : this.e8 && (jQ.jR || this.e9)
		}, this.wz = function() {
			return 1 === this.jc && !this.e9
		}
}

function x0() {
	var x1, x2, size, aN, gd, id;

	function x3(player) {
		return player < d.e ? x1 * player : x1 * d.e + x2 * (player - d.e)
	}
	this.a4 = function() {
		x1 = d.e < 16 ? 12 : 8, x2 = 4;
		var c = x3(d.b4);
		size = new Uint8Array(d.b4), aN = new Uint16Array(c), gd = new Uint32Array(c), id = new Uint16Array(c)
	}, this.b5 = function(x4, x5) {
		var x6 = this.qH(x4, x5);
		this.x7(x4, x5, 0), x6 = a5.aB.sR(x4, x6), x4 === d.eC && (ab.eD[13] -= x6)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.x8 = function(player, x5) {
		var hA, x5 = function(player, x5) {
			var q, bQ = x3(player);
			for (q = size[player] - 1; 0 <= q; q--)
				if (0 === id[bQ + q] && aN[bQ + q] === x5) return q;
			return size[player]
		}(player, x5);
		x5 !== size[player] && (hA = gd[x3(player) + x5], this.uN(player, x5), this.aK(player, hA, d.b4))
	}, this.aV = function(player, x5) {
		for (var bQ = x3(player), q = size[player] - 1; 0 <= q; q--)
			if (0 === id[bQ + q] && aN[bQ + q] === x5) return !0;
		return !1
	}, this.aY = function(player) {
		return player < d.e ? size[player] < x1 : size[player] < x2
	}, this.tu = function(player) {
		return size[player]
	}, this.tw = function(player, q) {
		return aN[x3(player) + q]
	}, this.tv = function(player, q) {
		return id[x3(player) + q]
	}, this.xA = function(player, xB) {
		for (var bQ = x3(player), q = size[player] - 1; 0 <= q; q--)
			if (id[bQ + q] === xB) return q;
		return -1
	}, this.uF = function(player, q) {
		return gd[x3(player) + q]
	}, this.qH = function(player, x5) {
		for (var bQ = x3(player), q = size[player] - 1; 0 <= q; q--)
			if (0 === id[bQ + q] && aN[bQ + q] === x5) return gd[bQ + q];
		return 0
	}, this.xC = function(player) {
		for (var bQ = x3(player), dS = 0, q = size[player] - 1; 0 <= q; q--) dS += gd[bQ + q];
		return dS
	}, this.xD = function(player) {
		for (var bQ = x3(player), dS = 0, q = size[player] - 1; 0 <= q; q--) 0 === id[bQ + q] && (dS += gd[bQ + q]);
		return dS
	}, this.xE = function(player) {
		for (var bQ = x3(player), dJ = 0, q = size[player] - 1; 0 <= q; q--) 0 < id[bQ + q] && dJ++;
		return dJ
	}, this.x7 = function(player, x5, hA) {
		for (var bQ = x3(player), q = size[player] - 1; 0 <= q; q--) 0 === id[bQ + q] && aN[bQ + q] === x5 && (gd[bQ + q] = hA)
	}, this.xF = function(player, q, hA) {
		gd[x3(player) + q] = hA
	}, this.aK = function(player, hA, x5) {
		var q, bQ = x3(player);
		for (x5 === d.eC && ab.eD[player < d.e ? 6 : 5]++, q = size[player] - 1; 0 <= q; q--)
			if (0 === id[bQ + q] && aN[bQ + q] === x5) return gd[bQ + q] += hA, void(gd[bQ + q] = gd[bQ + q] > d.sU ? d.sU : gd[bQ + q]);
		aN[bQ + size[player]] = x5, gd[bQ + size[player]] = hA, id[bQ + size[player]] = 0, size[player]++, player < d.e && (x5 === d.eC ? eS.xG(player, 5) : player === d.eC && bA.xH(x5))
	}, this.xI = function(player, hA, xB) {
		var bQ = x3(player);
		p.eA[player] = 2, aN[bQ + size[player]] = 0, gd[bQ + size[player]] = hA, id[bQ + size[player]] = xB, size[player]++
	}, this.uN = function(player, ew) {
		var gT, bQ;
		if (0 !== size[player])
			for (bQ = x3(player), size[player]--, gT = ew; gT < size[player]; gT++) aN[bQ + gT] = aN[bQ + gT + 1], gd[bQ + gT] = gd[bQ + gT + 1], id[bQ + gT] = id[bQ + gT + 1]
	}, this.xJ = function(player) {
		for (var gT, bQ, xK = [], q = h5 - 1; 0 <= q; q--)
			for (bQ = x3(h6[q]), gT = size[h6[q]] - 1; 0 <= gT; gT--)
				if (0 === id[bQ + gT] && aN[bQ + gT] === player) {
					xK.push(h6[q]);
					break
				} return xK
	}
}

function xL() {
	this.xM = -1, this.a4 = function() {
		this.xM = -1
	}, this.cf = function() {
		-1 !== this.xM && g.v0.xN(this.xM)
	}, this.bG = function(player) {
		return !!jQ.xO(player) && (1 === h5 ? (this.xM = player, d.e8 && d.e9 && d.aJ.cf()) : (eS.xG(player, player === d.eC ? 21 : 22), 8 === d.k ? this.xM = 1 - player : d.e8 ? (r6(player), r3(), d.e9 && d.aJ.cf()) : this.xP(player)), !0)
	}, this.bI = function(player) {
		1 === d.jc && 0 !== p.eA[player] && 2 !== p.kl[player] && (8 === d.k ? this.xM = 1 - player : this.xP(player)), d.wV--, d.wW--, eS.xG(player, 4), a5.aB.aC(2) && eH.eV(!0)
	}, this.xP = function(player) {
		d.e9 ? (r6(player), r3()) : wo.xQ(player)
	}
}

function nJ(title, xR, xS = !0) {
	let w9 = document.createElement("div"),
		xT = document.createElement("div"),
		xU = document.createElement("div"),
		xV = document.createElement("div");
	this.nQ = xU, this.nd = xR, this.show = function() {
			xS ? document.body.appendChild(w9) : (document.body.appendChild(xT), document.body.appendChild(xV))
		}, this.co = function() {
			xS ? document.body.removeChild(w9) : (document.body.removeChild(xT), document.body.removeChild(xV))
		}, this.xZ = function() {
			var xa = a5.a6.pv(.1),
				xb = a5.a6.pv(.08 + .04 * (dl.xc < 1));
			return {
				xa: xa,
				xb: xb,
				xd: dl.bL / dl.vh - xa - xb
			}
		}, this.resize = function() {
			let q, a2;
			var c = xR.length,
				xe = this.xZ(),
				xa = xe.xa,
				xb = xe.xb;
			for (xT.style.height = a5.a6.pt(xa), a5.a6.a7(xT, 2), xV.style.top = a5.a6.pt(dl.bL / dl.vh - xb), xV.style.height = a5.a6.pt(xb), a5.a6.a7(xV, 8), xU.style.top = a5.a6.pt(xa), xU.style.height = xU.style.maxHeight = a5.a6.pt(xe.xd), xV
				.style.font = xT.style.font = a5.a6.jD(0, a5.a6.pv(.02, .25)), xU.style.font = a5.a6.jD(0, a5.a6.pv(.02, .4)), q = 0; q < c; q++)(a2 = xR[q].button).style.top = "0", a2.style.left = (100 * q / c).toFixed(2) + "%", a2.style.width = (
				100 / c).toFixed(2) + "%", a2.style.height = "100%", 0 < q && a5.a6.a7(a2, 4)
		}, this.e1 = function() {
			var xe = this.xZ(),
				dU = dl.vh;
			e2.fillStyle = f3.jM, e2.fillRect(0, dU * xe.xa, dl.bK, dU * xe.xd)
		}, w9.style.position = "absolute", w9.style.top = "0", w9.style.left = "0", w9.style.width = "100%", w9.style.height = "100%", xT.style.position = "absolute", xT.style.top = "0", xT.style.left = "0", xT.style.width = "100%", xT.style
		.display = "flex", xT.style.backgroundColor = f3.jM, xV.style.position = "absolute", xV.style.left = "0", xV.style.width = "100%", xU.style.position = "absolute", xU.style.width = "100%", xU.style.backgroundColor = f3.jM;
	for (let q = 0; q < xR.length; q++) xR[q].button.style.position = "absolute", xR[q].button.style.fontSize = "1.2em";
	for (let q = 0; q < xR.length; q++) xV.appendChild(xR[q].button);
	xT.appendChild(function() {
		var xY = document.createElement("h1");
		return xY.textContent = title, xY.style.margin = "auto", xY.style.fontSize = "2.3em", xY
	}()), xS && (w9.appendChild(xU), w9.appendChild(xT), w9.appendChild(xV))
}

function ee() {
	this.lg = function(b7, player) {
		eS.lf(d.eC, player, b7), v.ch.i9(b7, player)
	}, this.xf = function(player) {
		eS.xg(player, 0), v.ch.iC(player)
	}, this.xh = function(xi, player) {
		eS.xj(xi, player), v.ch.iE(xi, player)
	}, this.b = function() {
		d.e8 || d.eJ || v.o4.b()
	}
}

function xk(pQ) {
	var a2;
	this.a2 = document.createElement("input"), (a2 = this.a2).type = "color", a2.id = "input" + pQ.title, a2.value = a5.color.xl(a5.color.xm(ex.w.mu())), a2.style.width = "100%", a2.style.userSelect = "none", a2.style.outline = "none", a2.style
		.resize = "none", a2.style.border = "inherit", a2.style.font = "inherit", a2.style.color = f3.f9, a2.style.backgroundColor = f3.j2, a2.style.fontSize = "2em", a2.style.height = "1em", a2.style.padding = "0", a2.addEventListener("input",
			function() {
				ex.fT.fU(pQ.ew, a5.color.xn(a5.color.xo(a5.color.xp(a2.value))))
			})
}

function xq() {
	var xr = null;
	this.lk = 0, this.xs = function() {
		var dS = ex.ey.data[5].value;
		xr = "px " + dS, "Trebuchet MS" !== dS && (xr += ", Trebuchet MS"), this.lk = xt(32, 32, ["a", "b", "m"], 200, xr)
	}, this.be = function(bK, bL) {
		var dU = document.createElement("canvas");
		return dU.width = bK, dU.height = bL, dU
	}, this.getContext = function(j6, alpha) {
		return j6.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(j7, bK, bL) {
		return j7.getImageData(0, 0, bK, bL)
	}, this.jD = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + xr : 1 === type ? "bold " + size + xr : 2 === type ? "lighter " + size + xr : 3 === type ? "italic " + size + xr : 4 === type ? "oblique " + size + xr : 5 === type ? "small-caps " +
			size + xr : "small-caps bold " + size + xr
	}, this.textAlign = function(li, id) {
		li.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(li, id) {
		li.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.a7 = function(a2, code = 5, color = f3.f9) {
		color = this.pt(dq.xu) + " solid " + color;
		5 === code ? a2.style.border = color : 4 === code ? a2.style.borderLeft = color : 2 === code ? a2.style.borderBottom = color : 6 === code ? a2.style.borderRight = color : a2.style.borderTop = color
	}, this.xv = function(a2, c6, c7, bK, bL) {
		a2 = a2.style;
		a2.left = this.xx(c6), a2.top = this.xx(c7), a2.width = this.xx(bK), a2.height = this.xx(bL)
	}, this.xy = function(dS) {
		return 1 + dS * di.dj.dk()
	}, this.pv = function(dR, nC = .5) {
		return dR * this.xy(nC) * dl.dm / dl.vh
	}, this.xz = function(dR, nC = .5) {
		return dR * this.xy(nC) * dl.dm
	}, this.pt = function(dS) {
		return dS.toFixed(1) + "px"
	}, this.xx = function(dS) {
		return this.y0(dS).toFixed(1) + "px"
	}, this.y0 = function(dS) {
		return dS / dl.vh
	}, this.y1 = function(y2, y3) {
		for (var bO = "<ul>", c = y2.length, q = 0; q < c; q++) bO += "<li>" + y2[q] + ": <a href='" + y3[q] + "' target='_blank'>" + y3[q] + "</a></li>";
		return bO += "</ul>"
	}, this.e0 = function(y4) {
		return "<a href='" + y4 + "' target='_blank'>" + y4 + "</a>"
	}, this.y5 = function(a2) {
		navigator.clipboard && navigator.clipboard.writeText(a2.value)
	}, this.y6 = function(a2) {
		a2.innerText.startsWith("✅ ") || (a2.innerText = "✅ " + a2.innerText, setTimeout(function() {
			a2.innerText = a2.innerText.substring(a2.innerText.indexOf(" ") + 1)
		}, 500))
	}, this.measureText = function(bO) {
		return e2.measureText(bO).width
	}
}

function y7() {
	this.aH = new y8, this.nX = new y9, this.nc = new yA, this.a4 = function(wb, fy, mg, wd) {
		var yB;
		d.eJ || ((yB = {}).wc = d.eC, yB.wb = wb, yB.fy = fy, yB.mg = mg, yB.wd = wd, yB.yC = ba.cG, yB.yD = ba.yE, gU.ml(yB), this.aH.a4(yB))
	}, this.cf = function() {
		d.eJ || (this.aH.cf(), 3 !== dw.dy) || bm.h4() % 15 != 5 && 2 !== d.jc || dw.fh().nT()
	}, this.nb = function() {
		var fB = this.aH.yB;
		0 === d.jc && cv.mq(), ba.j(fB.yC, fB.yD), 1 === fB.fy.length && (gU.mf(fB.mg), gU.mi(fB.mj, fB.mk)), v.w.close(v.w.x, 3257), v.w.x = 0, d.ms(fB.wb, fB.wc, fB.fy, fB.mg, fB.wd, !0)
	}, this.na = function(bO) {
		var q = bO.indexOf("=");
		return 0 <= q ? bO.substring(q + 1) : bO
	}, this.nZ = function(bO) {
		return "https://territorial.io/?replay=" + bO
	}
}

function yG(data) {
	let nH, yH, yI, yJ, yK, yL, yM, colors, yN = 0,
		yO = 0,
		yP = !1,
		yQ = [1, 5, 60, 1440, 10080, 43200];

	function yt(es, et) {
		! function(es, et) {
			return es > yH && es < yH + yJ && et > yI && et < yI + yK
		}(yN = es, yO = et) ? (yP && (bm.bn = !0), yP = !1) : (yP = !0, bm.bn = !0)
	}
	var dU;
	this.show = function() {
		nH.show(), this.resize()
	}, this.co = function() {
		nH.co()
	}, this.resize = function() {
		nH.resize();
		var dU = dl.vh,
			xe = nH.xZ(),
			yT = dU * xe.xd,
			dU = dU * xe.xa;
		yL = a5.a6.xz(.06), yM = a5.a6.xz(.04), yH = a5.a6.xz(.06), yI = dU + yL, yJ = dl.bK - yH - yM, yK = yT + dU - yI - yM
	}, this.e1 = function() {
		nH.e1(),
			function() {
				let gH = data.data,
					yX = 1,
					yY = .125,
					yZ = data.ya ? 65536 : 0;
				for (let q = 0; q < gH.length; q++) {
					var vE = gH[q].vE,
						dJ = vE.length;
					yX = Math.max(dJ, yX);
					for (let gT = 0; gT < dJ; gT++) yY = Math.max(vE[gT], yY), yZ = Math.min(vE[gT], yZ)
				}
				var kN = yI + yK,
					yb = yK / (yY - yZ),
					yc = 1 / (yX - 1);
				e2.lineWidth = dq.f8;
				for (let q = 0; q < gH.length; q++) {
					var vE = gH[q].vE,
						dJ = vE.length,
						c6 = yH;
					e2.beginPath(), e2.moveTo(c6 + yJ, kN - yb * (vE[dJ - 1] - yZ));
					for (let gT = dJ - 2; 0 <= gT; gT--) e2.lineTo(c6 + yc * gT * yJ, kN - yb * (vE[gT] - yZ));
					e2.strokeStyle = colors[q], e2.stroke()
				}(function(yZ, yY, kN, yb) {
					e2.font = a5.a6.jD(0, .25 * yH), a5.a6.textBaseline(e2, 1), a5.a6.textAlign(e2, 2), e2.fillStyle = colors[0];
					var c6 = .92 * yH;
					for (let q = 0; q < 3; q++) {
						var dS = yZ + q * (yY - yZ) / 2;
						e2.fillText((dS / 1e3).toFixed(3), c6, kN - yb * (dS - yZ))
					}
				})(yZ, yY, kN, yb),
				function(yX) {
					e2.font = a5.a6.jD(0, .4 * yM), a5.a6.textBaseline(e2, 0), a5.a6.textAlign(e2, 2), e2.fillStyle = colors[0];
					var c7 = yI + yK + .15 * yM,
						hh = (e2.fillText(a5.gN.qY(data.ca), yH + yJ, c7), a5.a6.textAlign(e2, 0), new Date(data.ca));
					hh.setMinutes(hh.getMinutes() - (yX - 1) * yQ[data.pl]), e2.fillText(a5.gN.qY(hh), yH, c7)
				}(yX),
				function(yX, yZ, yY) {
					if (yP && !(yX < 2)) {
						var ew = (yN - yH) / yJ * (yX - 1),
							yg = Math.floor(ew),
							yh = Math.floor(1 + ew),
							yi = ew - yg;
						let yj = 1e5,
							yk = -1,
							yl = -1;
						var hh, ym = yY - (yY - yZ) * (yO - yI) / yK,
							gH = data.data;
						for (let q = 0; q < gH.length; q++) {
							var yn, vE = gH[q].vE;
							vE.length <= yh || (vE = vE[yg] + yi * (vE[yh] - vE[yg]), (yn = Math.abs(ym - vE)) < yj && (yj = yn, yk = q, yl = vE))
						} - 1 !== yk && (yY = yI + yK - (yl - yZ) / (yY - yZ) * yK, e2.lineWidth = .5 * dq.f8, e2.strokeStyle = colors[yk], e2.beginPath(), e2.moveTo(yH, yY), e2.lineTo(yN, yY), e2.lineTo(yN, yI + yK), e2.stroke(), e2.beginPath(),
							e2.arc(yN, yY, .1 * yH, 0, 2 * Math.PI), e2.fillStyle = colors[yk], e2.fill(), yZ = yI + yK + .15 * yM, a5.a6.textAlign(e2, 1), (hh = new Date(data.ca)).setSeconds(hh.getSeconds() - 60 * (yX - ew - 1) * yQ[data
								.pl]), yX = a5.gN.qY(hh), ew = a5.a6.measureText(yX), hh = b8.b9(yN, yH + .5 * ew, yH + yJ - .5 * ew), e2.fillStyle = a5.color.rU(70, 50, 20), e2.fillRect(hh - .52 * ew, yI + yK, 1.04 * ew, .55 * yM), e2
							.fillStyle = colors[0], e2.fillText(yX, hh, yZ), e2.font = a5.a6.jD(0, .25 * yH), a5.a6.textBaseline(e2, 1), a5.a6.textAlign(e2, 2), hh = .92 * yH, yX = (yl / 1e3).toFixed(3), ew = a5.a6.measureText(yX), yZ = hh -
							1.04 * ew, e2.fillStyle = a5.color.rU(70, 50, 20), e2.fillRect(yZ, yY - .1625 * yH, yH - yZ, .275 * yH), e2.fillStyle = colors[yk], e2.fillText(yX, hh, yY))
					}
				}(yX, yZ, yY)
			}(), e2.lineWidth = dq.f8, e2.strokeStyle = f3.f9, e2.beginPath(), e2.moveTo(yH, yI), e2.lineTo(yH, yI + yK), e2.lineTo(yH + yJ, yI + yK), e2.stroke();
		{
			let fontSize = .5 * yL,
				gH = (e2.font = a5.a6.jD(0, fontSize), a5.a6.textBaseline(e2, 1), a5.a6.textAlign(e2, 0), data.data),
				c = gH.length,
				c7 = yI - .5 * yL,
				bO = "";
			for (let q = 0; q < c; q++) gH[q].name = gH[q].name, bO += gH[q].name + "  ";
			bO = bO.trim();
			let yq = a5.a6.measureText(bO),
				c6 = .5 * (dl.bK - yq);
			yq > dl.bK && (c6 = 0, e2.font = a5.a6.jD(0, dl.bK / yq * fontSize));
			for (let q = 0; q < c; q++) e2.fillStyle = colors[q], e2.fillText(gH[q].name, c6, c7), c6 += a5.a6.measureText(gH[q].name + "  ")
		}
	}, this.ds = function(es, et) {
		yt(es, et)
	}, this.f1 = function(es, et) {
		yt(es, et)
	}, this.ev = function(dU) {
		2 === dU && nH.nd[0].ne()
	}, nH = new nJ("Clan Chart, " + ex.ey.data[125].np[data.pl] + ", " + a5.gN.qX(data.ca), [new hl("❌ " + hm.hn[92], function() {
		dw.w.yR()
	}), new hl("🛠️ Custom", function() {
		dw.dx(14)
	})], !1), dU = a5.color, colors = [f3.f9, dU.rU(255, 0, 0), dU.rU(0, 200, 0), dU.rU(80, 80, 255), dU.rU(255, 255, 0), dU.rU(255, 0, 255), dU.rU(0, 255, 255), dU.rU(255, 140, 0), dU.rU(128, 128, 128), dU.rU(0, 255, 140)], dU = 6e4 * yQ[data
		.pl], data.ca = new Date(data.ca.getTime() + (dU - data.ca.getTime() % dU) - 6e4 * data.ca.getTimezoneOffset())
}

function yu() {
	this.ne = new yv, this.ey = new yw, this.fT = new yx, this.w = new nl, this.a4 = function() {
		this.ey.a4(), (new yy).a4()
	}
}

function yz() {
	this.z0 = null, this.bn = !1, this.ca = 0, this.kw = 56;
	var z1 = 0;

	function z2() {
		bm.ca = z1 = performance.now(), bm.z0.cf(), window.requestAnimationFrame(z2)
	}
	this.a4 = function() {
		this.ww(), window.requestAnimationFrame(z2), this.ca = performance.now()
	}, this.wr = function() {
		d.eJ ? (this.z0 = new z3, this.z0.a4()) : d.e8 ? this.z0 = new pp : (this.z0 = new km, this.z0.a4())
	}, this.ww = function() {
		this.z0 = new z4, this.bn = !0
	}, this.cf = function() {
		this.z0.kn++
	}, this.h4 = function() {
		return this.z0.kn
	}, this.z5 = function() {
		var hh = performance.now();
		hh < z1 + 1e3 || (this.ca = hh, this.z0.cf())
	}
}

function z6() {
	"function" != typeof Math.log2 && (Math.log2 = function(c6) {
		return Math.log(c6) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(c6) {
		return Math.log(c6) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(c6) {
		return 0 < c6 ? 1 : c6 < 0 ? -1 : 0
	})
}

function yy() {
	this.a4 = function() {
		! function() {
			var data = ex.ey.data;
			0 === data[2].hW && (dl.bL > dl.bK || 0 !== di.id) && (data[2].value = data[2].z9 = 1);
			0 === data[100].hW && (data[100].value = data[100].z9 = (0 === di.id ? "Player " : 1 === di.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()));
			data[0].value = data[0].z9 = hm.zA()
		}();
		var q, dS, data = ex.ey.data,
			c = data.length;
		for (q = 0; q < c; q++) data[q] && data[q].hW === ex.ne.zB(q, !0) && (dS = ex.ne.zC(q), data[q].value = null === dS ? data[q].z9 : 2 === data[q].type ? dS : Number(dS));
		ex.ey.data[10].value = ex.ey.data[10].z9
	}
}

function zD() {
	var el, bL, zE, zF, zG, zH, zI, zJ, zK;

	function iY() {
		return eF.jS(eS.zb()) ? bE.dr ? eF.c7 - eF.bL - 2 * zE : eF.c7 - zE : vj.jS(eS.zd()) ? bE.dr ? vj.iY() - eF.bL - 2 * zE : vj.iY() - zE : bE.dr ? dl.bL - eF.bL - (jF.jG() + 1) * zE : dl.bL - jF.jG() * dq.gap
	}

	function zR(hh, bO, id, s, zV, zW, c2, zX, zY) {
		var q, j7, dX, fP, gH, zh = void 0 !== zY,
			bK = Math.floor(oS.measureText(bO, eS.j9) + 1.5 * zF + (zh ? bL : 1.5 * zF));
		if (bm.bn = !0, bK + zE > dl.bK && !zh && 50 !== id && 20 < bO.length) zR(hh, (gH = a5.gN.qT(bO))[0], id, s, zV, zW, c2, zX, zY), zR(hh, gH[1], id, s, zV, zW, c2, zX, zY);
		else if (gH = bK + (50 === id ? zG : 0), (dX = document.createElement("canvas")).width = bK, dX.height = bL, (j7 = dX.getContext("2d", {
				alpha: !0
			})).font = eS.j9, a5.a6.textBaseline(j7, 1), a5.a6.textAlign(j7, 0), j7.clearRect(0, 0, bK, bL), j7.fillStyle = zW, j7.fillRect(0, 0, bK, bL), j7.fillStyle = zV, j7.fillText(bO, Math.floor(1.5 * zF), Math.floor(bL / 2)), zh && (j7
				.imageSmoothingEnabled = !0, dM.bt.lh(zY, j7, bK - bL, 0, bL)), 0 === (fP = {
				ca: hh,
				bO: bO,
				id: id,
				player: s,
				j6: dX,
				zV: zV,
				zW: zW,
				bK: bK,
				zc: gH,
				c2: c2,
				zX: zX,
				zY: zY
			}).ca || 0 < el.length && 0 < el[0].ca) el.unshift(fP);
		else {
			for (q = 1; q < el.length; q++)
				if (0 < el[q].ca) return void el.splice(q, 0, fP);
			el.push(fP)
		}
	}

	function zT(fA, fB, fC) {
		return "rgb(" + fA + "," + fB + "," + fC + ")"
	}

	function zi(id, dJ) {
		for (var c = el.length, q = 0; q < c; q++) el[q].id === id && dJ-- <= 0 && (el.splice(q, 1), q--, c--)
	}

	function zk(id, player) {
		for (var a0A = !1, q = el.length - 1; 0 <= q; q--) el[q].id !== id || player !== d.b4 && el[q].player !== player || (el.splice(q, 1), a0A = !0);
		return a0A
	}

	function a0H(bO) {
		zR(340, bO, 6, 0, zT(215, 245, 255), f3.f5, -1, !1)
	}
	this.zL = "", this.a4 = function() {
		var self;
		zJ = 0, zI = di.dj.dk() ? 7 : 12, zH = {
			fy: [0, 0, 0],
			zM: [0, 0, 0],
			zN: [220, 180, 180],
			xe: [0, 0, 0],
			dU: [0, 0, 0]
		}, el = [], this.resize(), d.e9 && this.xG(0, 18), a0H(hm.za(37, [ba.cE.cF[ba.cG].name])), a0H(hm.za(38, [ba.bb - 2, ba.bd - 2])), a0H(hm.za(39, [wh.a0I], {
			n2: [0]
		})), wh.a0I !== wh.a0J && a0H(hm.za(40, [wh.a0J, wh.a0J / wh.a0I], {
			n2: [0],
			a0K: [1]
		})), 0 < wh.a0L && a0H(hm.za(41, [wh.a0L, wh.a0L / wh.a0I], {
			n2: [0],
			a0K: [1]
		})), 0 < wh.a0M && a0H(hm.za(42, [wh.a0M, wh.a0M / wh.a0I], {
			n2: [0],
			a0K: [1]
		})), 10 === d.k && zR(120, hm.za(43), 6, 0, zT(235, 255, 120), f3.f5, -1, !1), 0 !== (self = this).zL.length && (zR(200, self.zL, 0, 0, f3.f9, f3.f5, -1, !1), self.zL = ""), this.zQ()
	}, this.zQ = function() {
		var q, c;
		if (g0.cy)
			for (c = g0.cE.zS.length, q = 0; q < c; q++) zR(400, g0.cE.zS[q], 6, 0, zT(255, 255, 255), f3.f5, -1, !1)
	}, this.resize = function() {
		var zU, q;
		if (bL = (bL = Math.floor((di.dj.dk() ? .031 : .0249) * dl.dm)) < 10 ? 10 : bL, this.fontSize = Math.floor(2 * bL / 3), this.j9 = a5.a6.jD(1, this.fontSize), zE = dq.gap, zF = Math.floor(bL / 5), 0 < el.length)
			for (zU = el, el = [], q = zU.length - 1; 0 <= q; q--) zR(zU[q].ca, zU[q].bO, zU[q].id, zU[q].player, zU[q].zV, zU[q].zW, zU[q].c2, zU[q].zX, zU[q].zY);
		this.zZ()
	}, this.zZ = function() {
		zK = document.createElement("canvas");
		var bO = hm.za(0),
			j7 = (zG = oS.measureText(bO, this.j9) + 5 * zF, zK.height = bL, zK.width = zG, zK.getContext("2d", {
				alpha: !0
			}));
		j7.font = this.j9, a5.a6.textBaseline(j7, 1), a5.a6.textAlign(j7, 1), j7.clearRect(0, 0, zG, bL), j7.fillStyle = f3.f4, j7.fillRect(0, 0, zG, bL), j7.fillStyle = f3.f9, j7.fillText(bO, Math.floor(zG / 2), Math.floor(bL / 2))
	}, this.zb = function() {
		var c;
		return bE.dr ? bE.bK : 0 === (c = el.length) ? 0 : 1 === c ? el[0].zc : kG(el[0].zc, el[1].zc)
	}, this.zd = function() {
		var c = el.length;
		return bE.dr ? c ? kG(bE.bK, el[0].zc) : bE.bK : 0 === c ? 0 : 1 === c ? el[0].zc : 2 === c ? kG(el[0].zc, el[1].zc) : kG(kG(el[0].zc, el[1].zc), el[2].zc)
	}, this.ds = function(c6, c7) {
		for (var iW, ze = iY(), q = el.length - 1; 0 <= q; q--)
			if ((iW = ze - (q + 1) * bL) <= c7 && c7 < iW + bL) return 50 === el[q].id ? c6 >= dl.bK - zG - zE - el[q].bK && (c6 >= dl.bK - zG - zE ? h7.aB.xf(el[q].player) : eK.zf(el[q].player, 800, !1, 0), !0) : c6 >= dl.bK - el[q].bK - zE && (
				736 === el[q].id ? window.open("https://" + el[q].bO, "_blank") : el[q].zX && (eK.zf(el[q].player, 800, !1, 0), 0 <= el[q].c2) && (iW = el[q].c2, el[q].c2 = el[q].player, el[q].player = iW), !0);
		return !1
	}, this.rI = function(hh, bO, id, s, zV, zW, c2, zX, zY) {
		zR(hh, bO, id, s, zV, zW, c2, zX, zY)
	}, this.zg = function(rR) {
		zR(300, rR, 252, 0, f3.f9, f3.f5, -1, !1)
	}, this.eT = function(id) {
		for (var q = el.length - 1; 0 <= q; q--) el[q].id === id && (el[q].ca = 1)
	}, this.xG = function(player, id) {
		0 === id ? (ab.eD[player < d.e ? 4 : 3]++, oS.aK(player, 0), zi(423, 0), zR(160, hm.za(1, [p.zj[player]]), 423, player, "rgb(10,220,10)", f3.f5, -1, !1)) : 1 === id ? (zk(50, d.b4), oS.aK(player, 1), zR(360, hm.za(2, [p.zj[player]]), 0,
			player, f3.tC, f3.f5, -1, !0), eK.zf(player, 2700, !1, 0)) : 2 === id ? (oS.aK(player, 2), zR(0, hm.za(3), 0, player, "rgb(10,255,255)", f3.f5, -1, !0), eK.zf(player, 2700, !1, 0)) : 3 === id ? (oS.aK(player, 2), zR(0, hm.za(4, [p
			.zj[player]
		]), 0, player, f3.f9, f3.f5, -1, !0), eK.zf(player, 2700, !1, 0)) : 4 === id ? this.zl(1, player, player) : 5 === id ? 2 !== p.kl[player] && ol.rB(d.eC) && (function(id, pJ) {
			var q, zw = 0,
				c = el.length;
			for (q = 0; q < c; q++)
				if (el[q].id === id && pJ <= ++zw) return el.splice(q, 1)
		}(1, 5), bA.xH(player) ? zR(180, hm.za(5, [p.zj[player]]), 1, player, zT(255, 200, 180), f3.f5, -1, !0) : (zi(573, 0), zR(180, hm.za(6, [p.zj[player]]), 573, player, f3.tC, f3.f5, -1, !0))) : 18 === id ? zR(255, hm.za(7), 18, 0, f3
			.f9, f3.f5, -1, !1) : 21 === id ? zR(220, hm.za(8), id, 0, f3.f9, f3.f5, -1, !1) : 22 === id ? this.zl(2, player, player) : 59 === id && zR(0, hm.za(9), id, 0, f3.tO, f3.f5, 0, !1)
	}, this.zn = function(rR) {
		zR(200, hm.za(10, [rR]), 94, 0, f3.f9, f3.t9, -1, !1)
	}, this.zo = function(zp) {
		if (d.eC === zp && !d.e8)
			wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter),
			zR(0, "Your Win Count is now " + wins_counter, 3, zp, f3.f9, f3.f5, -1, !0);
		oS.aK(zp, 2), d.e < 100 ? zR(0, hm.za(4, [p.zj[zp]]), 3, zp, f3.f9, f3.f5, -1, !0) : zR(0, hm.za(12, [p.zj[zp]]), 3, zp, f3.f9, f3.f5, -1, !0), eK.zf(zp, 2700, !1, 0)
	}, this.zq = function(ip) {
		var zr = "(" + aE.e6(ip >> 2) + ", " + aE.e7(ip >> 2) + ")",
			zX = !1,
			player = 0;
		ol.tl(ip) ? ol.q9(ip) ? zr = hm.za(13, [zr]) : (player = ol.q7(ip), zr = hm.za(14, [a5.j7.zs(p.gP[player], a5.a6.jD(0, 10), 150), a5.gN.jO(p.eE[player]), a5.gN.jO(p.r[player]), zr]), zX = !0) : zr = ol.wQ(ip) ? hm.za(15, [zr]) : hm.za(16,
			[zr]), bm.bn = !0, zi(55, 0), zR(220, zr, 55, player, f3.f9, f3.f5, -1, zX)
	}, this.zt = function(zu) {
		var bQ = an.w,
			player = bQ.p1[zu] >> 3;
		bm.bn = !0, zi(55, 0), zR(220, hm.za(17, [p.zj[player], bQ.p2[zu]], {
			n2: [1]
		}), 55, player, f3.f9, f3.f5, -1, !0)
	}, this.lf = function(ch, iD, b7) {
		ch === d.eC ? zR(175, hm.za(18, [p.zj[iD]]), 1001, iD, zT(200, 255, 210), f3.f5, -1, !0, b7) : this.zv(ch, b7)
	}, this.zv = function(ch, b7) {
		zi(1e3, 0), zR(175, hm.za(19, [p.zj[ch]]), 1e3, ch, f3.f9, "rgba(5,60,25,0.9)", -1, !0, b7)
	}, this.zx = function() {
		var rR;
		d.rN ? (rR = hm.za(20), oS.rH(hm.za(21), 2, 1, 12), zR(0, rR, 40, 0, "rgb(10,220,10)", f3.f5, -1, !1)) : (rR = hm.za(22), oS.rH(hm.za(23), 2, 0, 16), zR(0, rR, 41, 0, f3.f9, f3.f5, -1, !1)), eK.zy(2700)
	}, this.zz = function(fy) {
		zR(300, fy[0].name + " [" + d.wZ.a00(fy[0].a01) + "] vs " + fy[1].name + " [" + d.wZ.a00(fy[1].a01) + "]", 65, 0, f3.fn, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a02 = function(rR) {
		zR(200, rR, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a03 = function(a04) {
		zR(0, hm.za(a04 ? 24 : 129), 247, 0, f3.tN, f3.f5, -1, !1)
	}, this.a05 = function(fy, a06, a07, a08) {
		zR(0, fy[0].name + ": " + d.wZ.a00(fy[0].a01) + " -> " + a06, 66, 0, f3.f9, a08[0], -1, !1), zR(0, fy[1].name + ": " + d.wZ.a00(fy[1].a01) + " -> " + a07, 66, 1, f3.f9, a08[1], -1, !1)
	}, this.xg = function(player, id) {
		0 === id ? zk(50, player) ? (zR(128, hm.za(25, [p.zj[player]]), 52, player, zT(180, 255, 180), f3.f5, -1, !0), bA.bB(player, 2, 255)) : zR(384, hm.za(26, [p.zj[player]]), 51, player, zT(210, 210, 255), f3.f5, -1, !0) : zk(51, player) ? (
			zR(128, hm.za(27, [p.zj[player]]), 52, player, f3.f9, "rgba(60,120,10,0.9)", -1, !0), bA.bB(player, 2, 255)) : (zR(384, hm.za(28, [p.zj[player]]), 50, player, f3.f9, "rgba(90,90,90,0.9)", -1, !0), bA.bB(player, 2, 96))
	}, this.xj = function(fy, target) {
		var color = zT(210, 255, 210);
		1 < fy.length ? zR(230, hm.za(29, [fy.length, p.zj[target]]), 66, target, color, f3.f5, -1, !0) : zR(230, hm.za(30, [p.zj[fy[0]], p.zj[target]]), 66, fy[0], color, f3.f5, target, !0)
	}, this.a09 = function(player, target) {
		zR(230, hm.za(31, [p.zj[player], p.zj[target]]), 66, player, f3.f9, "rgba(75,65,5,0.9)", target, !0)
	}, this.a0C = function(id, player) {
		zk(id, player)
	}, this.nu = function() {
		var ew;
		100 <= p.eE[d.eC] || (-1 === (ew = function(id) {
			for (var q = el.length - 1; 0 <= q; q--)
				if (el[q].id === id) return q;
			return -1
		}(143)) ? zR(80, hm.za(32), 143, 0, f3.f9, f3.f5, -1, !1) : el[ew].ca = 80)
	}, this.a0D = function(a0E, a0F, player) {
		2 !== p.kl[d.eC] && (zR(200, hm.za(33, [a0E, p.zj[player]], {
			n2: [0]
		}), 30, player, "rgb(190,255,190)", f3.f5, -1, !0), a0F) && zR(30, hm.za(34, [a0F], {
			n2: [0]
		}), 30, 0, f3.f9, f3.f5, -1, !1)
	}, this.a0G = function(a0E, player) {
		2 !== p.kl[d.eC] && (zi(31, 0), 2 === p.kl[player] || player >= d.e ? zR(150, hm.za(36, [p.zj[player], a0E], {
			n2: [1]
		}), 31, player, f3.fn, "rgba(205,205,205,0.9)", -1, !0) : zR(150, hm.za(35, [p.zj[player], a0E], {
			n2: [1]
		}), 31, player, f3.fn, "rgba(205,255,205,0.9)", -1, !0))
	}, this.a0N = function(a0O) {
		for (var dU = bm.h4(), q = 2; 0 <= q; q--) 0 < zH.xe[q] && (a0O || zH.dU[q] < dU - 220) && this.a0P(q)
	}, this.a0P = function(id) {
		var bO, c = zH.xe[id],
			player = zH.fy[id];
		zH.xe[id] = 0, 1 === c ? (bO = 0 === id ? hm.za(47, [p.zj[player], p.zj[zH.zM[0]]]) : hm.za(47 + id, [p.zj[player]]), zi(7, 0), zR(zH.zN[id], bO, 7, zH.zM[id], f3.f9, f3.f5, -1, !0)) : 2 <= c && (bO = hm.za(44 + id, [p.zj[player], c -
			1]), zi(7, 0), zR(zH.zN[id], bO, 7, player, f3.f9, f3.f5, -1, !1))
	}, this.zl = function(id, c1, c2) {
		var dU = bm.h4(),
			c = zH.xe[id] + 1;
		zH.xe[id]++, zH.fy[id] = c1, zH.zM[id] = c2, 1 === c && (zH.dU[id] = dU), (1 === c && (d.wV < 32 || 2 === d.jc) || 1 < c && (zH.dU[id] < dU - 140 || 2 === d.jc)) && this.a0P(id)
	}, this.cf = function() {
		for (var qC = (qC = el.length - zI) <= 1 ? 1 : qC * qC, q = el.length - 1; 0 <= q; q--) 0 < el[q].ca && (el[q].ca -= qC, el[q].ca <= 0) && (bm.bn = !0, el.splice(q, 1));
		! function() {
			var dJ, q;
			if (128 !== zJ && !(++zJ < 128))
				for (dJ = 5, q = h5 - 1; 0 <= q; q--) 1 === p.kl[h6[q]] && 0 < dJ-- && zR(240, hm.za(50, [p.zj[h6[q]]]), 1, h6[q], f3.fn, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a0N(!1)
	}, this.e1 = function() {
		for (var kj, c7 = iY(), q = el.length - 1; 0 <= q; q--) kj = c7 - (q + 1) * bL, 50 === el[q].id ? (e2.drawImage(el[q].j6, dl.bK - el[q].bK - zG - zE, kj), e2.drawImage(zK, dl.bK - zG - zE, kj)) : e2.drawImage(el[q].j6, dl.bK - el[q].bK -
			zE, kj)
	}
}

function a0R() {
	this.a0S = 0, this.a0T = 0, this.a0U = 0, this.a0V = 0, this.a0W = 0, this.a0X = 0, this.a0Y = [0, 0, 0, 0], this.ix = function() {
		this.a0S = j0.iX(), this.a0T = j0.iY(), this.a0U = -this.a0S, this.a0V = -this.a0T, this.a0W = dl.bK / iJ, this.a0X = dl.bL / iJ, this.a0Y[0] = Math.floor(this.a0U), this.a0Y[1] = Math.floor(this.a0V), this.a0Y[2] = Math.floor(this.a0Y[
			0] + this.a0W + 1), this.a0Y[3] = Math.floor(this.a0Y[1] + this.a0X + 1), eY.a0Z = !0
	}
}

function a0a() {
	var a0b, a0c, a0d, a0e, a0f, a0g;

	function a0k(pJ) {
		for (var q = a0c - 1; 0 <= q; q--) 0 === a0e[a0d[q]] && p.r[a0d[q]] >= pJ && uA(a0d[q])
	}

	function a0i(player) {
		10 === a0e[player] ? a0e[player] = a0b : p.r[player] < 1e3 ? a0e[player] = 3 : p.r[player] < 1e4 ? a0e[player] = 2 : p.r[player] < 6e4 ? a0e[player] = 1 : a0e[player] = 0
	}
	this.a4 = function() {
		a0f = a0g = 0, a0b = 6, a0c = 0, a0d = new Uint16Array(d.b4), a0e = new Uint8Array(d.b4)
	}, this.cf = function() {
		var q;
		for (a0f = ab.eD[13], a0g = p.eE[d.eC], q = a0c - 1; 0 <= q; q--) 10 === a0e[a0d[q]] ? a0i(a0d[q]) : 0 == a0e[a0d[q]]-- && (a0i(a0d[q]), uA(a0d[q]));
		16e4 <= p.r[a0j[0]] && (a0k(16e4), 3e5 <= p.r[a0j[0]]) && a0k(3e5), p.r[d.eC] > ab.eD[7] && (ab.eD[7] = p.r[d.eC]), ab.eD[14] += a0g - p.eE[d.eC] + a0f - ab.eD[13]
	}, this.uL = function(player) {
		for (var gT, q = a0c - 1; 0 <= q; q--)
			if (player === a0d[q]) {
				for (a0c--, gT = q; gT < a0c; gT++) a0d[gT] = a0d[gT + 1];
				return
			}
	}, this.q1 = function(player, a0m) {
		for (var q = a0c - 1; 0 <= q; q--)
			if (player === a0d[q]) return;
		a0d[a0c++] = player, a0e[player] = a0m ? 2 : 10
	}
}

function a0n() {
	var mI = 0,
		a0o = !0;

	function a0s(bO) {
		8 !== cv.cw() || 2 !== p.kl[d.eC] && (0 !== p.eA[d.eC] || d.e9) || eS.a02(bO)
	}
	this.cf = function() {
		var hh, a0r;
		bm.ca > mI && (mI = bm.ca + 2500, hh = new Date, a0r = hh.getUTCSeconds(), a0o ? a0r < 45 && (a0o = !1) : a0r < 45 || (a0o = !0, (a0r = hh.getUTCMinutes() + 1) % 15 == 0 && a0s(30 === a0r ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function a0t() {
	this.a0Z = !1, this.a0u = !1, this.eZ = !1, this.a0v = [0, 0, 0, 0], this.ku = function() {
		var kM, kN, kO, kP;
		this.eZ = this.eZ || this.a0u, (this.a0u || this.a0Z && this.eZ) && (kM = iw.a0Y[0], kN = iw.a0Y[1], kO = iw.a0Y[2], kP = iw.a0Y[3], kM = kM < this.a0v[0] ? this.a0v[0] : kM, kN = kN < this.a0v[1] ? this.a0v[1] : kN, kO = kO > this.a0v[
			2] ? this.a0v[2] : kO, kP = kP > this.a0v[3] ? this.a0v[3] : kP, this.a0u = !1, this.a0Z = !1, kM === this.a0v[0] && kN === this.a0v[1] && kO === this.a0v[2] && kP === this.a0v[3] ? this.ea() : kM <= kO && kN <= kP && pM
			.putImageData(pN, 0, 0, kM, kN, kO - kM + 1, kP - kN + 1))
	}, this.ea = function() {
		this.eZ && this.a0v[2] >= this.a0v[0] && this.a0v[3] >= this.a0v[1] && pM.putImageData(pN, 0, 0, this.a0v[0], this.a0v[1], this.a0v[2] - this.a0v[0] + 1, this.a0v[3] - this.a0v[1] + 1), this.eZ = !1
	}, this.a0w = function() {
		this.a0v[2] >= this.a0v[0] && this.a0v[3] >= this.a0v[1] && pM.putImageData(pN, 0, 0, this.a0v[0], this.a0v[1], this.a0v[2] - this.a0v[0] + 1, this.a0v[3] - this.a0v[1] + 1), this.eZ = !1
	}, this.a4 = function() {
		var c6, c7;
		this.a0Z = !1, this.a0u = !1, this.eZ = !1, this.a0v[0] = ba.bb, this.a0v[1] = ba.bd, this.a0v[2] = this.a0v[3] = 0;
		loop: for (c6 = 1; c6 < ba.bb - 1; c6++)
			for (c7 = ba.bd - 2; 1 < c7; c7--)
				if (1 === pL[ol.a0x(c6, c7) + 2]) {
					this.a0v[0] = c6;
					break loop
				} loop: for (c7 = 1; c7 < ba.bd - 1; c7++)
			for (c6 = ba.bb - 2; 1 < c6; c6--)
				if (1 === pL[ol.a0x(c6, c7) + 2]) {
					this.a0v[1] = c7;
					break loop
				} loop: for (c6 = ba.bb - 2; 0 < c6; c6--)
			for (c7 = ba.bd - 2; 1 < c7; c7--)
				if (1 === pL[ol.a0x(c6, c7) + 2]) {
					this.a0v[2] = c6;
					break loop
				} loop: for (c7 = ba.bd - 2; 0 < c7; c7--)
			for (c6 = ba.bb - 2; 1 < c6; c6--)
				if (1 === pL[ol.a0x(c6, c7) + 2]) {
					this.a0v[3] = c7;
					break loop
				}
	}
}

function a0y() {
	var a0z, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, mI, a1A, a1B = !1,
		a1C = !1;

	function a1D(zN) {
		mI = bm.ca, a11 = a12 = a10 = 0, a13 = (a1A = 33) / zN, a0z = 1 / (zN / a1A / 4), a14 = (dl.bK / 2 + iK) / iJ, a15 = (dl.bL / 2 + iL) / iJ, a16 = iJ
	}

	function a1J(a1K) {
		Math.abs(Math.log(a19 / a16)) < .125 && (a19 = a1K * a16)
	}

	function a1I(kM, kN, kO, kP) {
		a17 = (kM + kO + 1) / 2, a18 = (kN + kP + 1) / 2;
		kO = dl.bK / (kO - kM + 1), kM = dl.bL / (kP - kN + 1);
		a19 = .9 * (kO < kM ? kO : kM)
	}
	this.a1E = function() {
		return a1B
	}, this.wt = function() {
		a1D(1), this.eL(0, 0, ba.bb - 1, ba.bd - 1), d.e9 || d.eJ || this.zf(d.eC, 3e3, !0, .3)
	}, this.zf = function(player, zN, a1F, zoom) {
		d.ie || a1B && !a1F && a1C || 0 === p.r[player] || (j0.iR = !1, a1C = a1F, a1D(zN), function(player) {
			a17 = (p.eM[player] + p.eO[player] + 1) / 2, a18 = (p.eN[player] + p.eP[player] + 1) / 2
		}(player), function(zoom, player) {
			var ik = p.eO[player] - p.eM[player] + 1,
				player = p.eP[player] - p.eN[player] + 1,
				gT = dl.bK / ik,
				fC = dl.bL / player,
				gT = (a19 = gT < fC ? gT : fC, 0 !== zoom ? zoom : ik < 20 && player < 20 ? .5 : .9);
			a19 *= gT, a1J(7 / 8)
		}(zoom, player), a1B = !0, uf.ue())
	}, this.zy = function(zN) {
		d.eJ || d.ie || (j0.iR = !1, a1C = !1, a1D(zN), a1I(0, 0, ba.bb - 1, ba.bd - 1), a1J(7 / 8), a1B = !0, uf.ue())
	}, this.eL = function(kM, kN, kO, kP) {
		a1I(kM, kN, kO, kP), iJ = a19, j0.iZ(a17, dl.bK / 2), j0.ib(a18, dl.bL / 2), iw.ix()
	}, this.ih = function() {
		return !(a1B && a1C || (a1B = !1))
	}, this.cf = function() {
		var a1N, a1O, bs, a1R;
		a1B && (a10 < .5 ? a12 < a13 && (a12 += a13 * a0z, a11 = a10) : 1 - a11 < a10 && (a12 = (a12 -= a13 * a0z) < a13 * a0z ? a13 * a0z : a12), mI = mI >= bm.ca ? bm.ca - 1 : mI, bs = bm.ca - mI, a10 = 1e3 < bs || 1 < (a10 += a12 * bs / a1A) ?
			1 : a10, mI = bm.ca, bs = iJ, a1N = iK, a1O = iL, bs = (iJ = a16 * Math.pow(a19 / a16, a10)) / bs, a1R = 1 - (a16 * Math.pow(a19 / a16, 1 - a10) - a16) / (a19 - a16), j0.iZ(a14 + a1R * (a17 - a14), dl.bK / 2), j0.ib(a15 + a1R * (
				a18 - a15), dl.bL / 2), bA.zoom(bs, (a1N * bs - iK) / (1 - bs), (a1O * bs - iL) / (1 - bs)), iw.ix(), 1 <= a10 && (a1B = !1, eY.a0u = !0), bm.bn = !0)
	}
}

function dz(title, fK, a1S = [new hl("❌ " + hm.hn[92], function() {
	dw.nK()
}, f3.ho)]) {
	let nH, a1T;
	this.show = function() {
		nH.show(), this.resize()
	}, this.co = function() {
		nH.co()
	}, this.resize = function() {
		nH.resize(), a1T.resize()
	}, this.ev = function(dU) {
		2 === dU && nH.nd[0].ne()
	}, nH = new nJ(title, a1S), a1T = new pq(nH.nQ, fK), a5.a6.textAlign(nH.nQ.style, 1)
}

function a1U() {
	var a1V, a1W, a1X;
	a1V = [32, 65, 191, 913, 931], a1W = [64, 127, 688, 930, 1155], a1X = new Array(a1V.length + 1);
	for (var q = 0; q < a1X.length; q++) {
		a1X[q] = 0;
		for (var gT = q - 1; 0 <= gT; gT--) a1X[q] += a1W[gT] - a1V[gT]
	}

	function a1d(dU) {
		for (var q = a1V.length - 1; 0 <= q; q--)
			if (dU >= a1V[q] && dU < a1W[q]) return q;
		return -1
	}
	this.l7 = function(bO) {
		return 0 !== (bO = bO.trim()).indexOf("Bot ") && 0 !== bO.indexOf("[Bot] ") && function(bO, a1a, a1b) {
			var c = (bO = bO.trim()).length;
			if (c < a1a || a1b < c) return !1;
			for (var dU, a1c = 0, q = 0; q < c; q++)
				if (dU = bO.charCodeAt(q), a1c += 65 <= dU && dU <= 90 || 1040 <= dU && dU <= 1071 ? 1 : 0, -1 === a1d(dU)) return !1;
			if (3 < a1c && a1c > Math.floor(c / 2)) return !1;
			return !0
		}(bO, 3, 20)
	}, this.nY = function(bO) {
		for (var c = (bO = bO.trim()).length, gH = [], q = 0; q < c; q++) {
			var dU, s = a1d(dU = bO.charCodeAt(q));
			gH.push(a1X[s] + dU - a1V[s])
		}
		return gH
	}, this.bN = function(gH) {
		for (var dU, fC, bO = "", c = gH.length, q = 0; q < c; q++)
			for (fC = 1; fC < a1X.length; fC++)
				if (gH[q] < a1X[fC]) {
					dU = a1V[fC - 1] + gH[q] - a1X[fC - 1], bO += String.fromCharCode(dU);
					break
				} return bO
	}, this.qp = function(bO) {
		for (var gH = this.nY(bO), result = "", q = 0; q < gH.length; q++) result = (result += gH[q] < 10 ? "00" : gH[q] < 100 ? "0" : "") + gH[q].toString(10);
		return result
	}, this.qr = function(bO) {
		for (var gH = new Array(Math.floor(bO.length / 3)), q = 0; q < bO.length; q += 3) gH[Math.floor(q / 3)] = parseInt(bO.substring(q, q + 3));
		return this.bN(gH)
	}, this.qq = function(bO) {
		for (var dS, gH = [bO.length], q = 0; q < bO.length; q++) gH[q] = bO.charCodeAt(q) - 48;
		var result = "";
		for (q = 0; q < bO.length; q++) q === bO.length - 1 || 51 < 10 * gH[q] + gH[q + 1] ? result += gH[q].toString() : (dS = 10 * gH[q] + gH[q + 1], result += String.fromCharCode(dS + (dS < 26 ? 65 : 71)), q++);
		return result
	}, this.hU = function(bO) {
		for (var dU, result = "", q = 0; q < bO.length; q++) 48 <= (dU = bO.charCodeAt(q)) && dU < 58 ? result += String.fromCharCode(dU) : 65 <= dU && dU < 75 ? result += "0" + (dU - 65).toString() : 75 <= dU && dU < 91 ? result += (dU - 65)
			.toString() : 97 <= dU && dU < 123 && (result += (dU - 71).toString());
		return result
	}, this.a1e = function(bO) {
		for (var c = bO.length, gH = [], q = 0; q < c; q++)(dU = bO.charCodeAt(q)) < 58 ? gH.push(bO[q]) : (dU -= dU < 91 ? 65 : 71, gH.push(String(dG(dU, 10))), gH.push(String(dU - 10 * dG(dU, 10))));
		var c = gH.length - 2,
			dU = 0,
			a1f = [];
		for (q = 0; q < c; q += 3) a1f[dU++] = parseInt(gH[q] + gH[q + 1] + gH[q + 2]);
		return a1f
	}, this.cY = function() {
		for (var fA, a1g = "", q = 0; q < 6; q++) fA = 48 + cU.random() % 36, fA += 58 <= fA ? 39 : 0, a1g += String.fromCharCode(fA);
		return a1g
	}
}

function a1h() {
	var bL, j6, j9, a1i, a1j, a1k = -1;

	function a1l() {
		var a1m, j7 = j6.getContext("2d", {
			alpha: !0
		});
		j7.clearRect(0, 0, bL, bL), j7.fillStyle = f3.sh, j7.fillRect(0, 0, bL, bL), 0 === a1i && (j7.fillStyle = f3.sj, j7.fillRect(0, 0, bL, bL)), j7.fillStyle = f3.f9, j7.fillRect(0, 0, bL, 1), j7.fillRect(0, 0, 1, bL), j7.fillRect(0, bL - 1, bL,
				1), j7.fillRect(bL - 1, 0, 1, bL), a1m = .9 * bL / df.get(0).width, j7.imageSmoothingEnabled = !0, j7.setTransform(a1m, 0, 0, a1m, Math.floor((bL - a1m * df.get(0).width) / 2), Math.floor((bL - a1m * df.get(0).height) / 2)), j7
			.drawImage(df.get(0), 0, 0), j7.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a1n(es, et) {
		if (!jQ.jR) return es <= bL + dq.gap && et >= eF.c7 ? 0 : -1;
		if (es <= 4 * bL + dq.gap) {
			if (et >= eF.c7) return 0;
			if (et >= eF.c7 - bL - a1j * dq.gap) return 2
		} else if (es <= 7 * bL + dq.gap && et >= eF.c7 - bL - a1j * dq.gap) return 1;
		return -1
	}
	this.jR = !1, this.a4 = function() {
		a1i = -1, this.jR = !1, a1j = di.dj.dk() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		bL = eF.bL, (j6 = document.createElement("canvas")).width = bL, j6.height = bL, j9 = a5.a6.jD(1, (di.dj.dk() ? .5 : .45) * bL), a1l()
	}, this.m1 = function() {
		this.jR = !this.jR, this.jR ? (hN.hO.hideCMPButton(), vj.lv(!1), d.eJ && vj.lr && vj.lz(!0), this.m2()) : (a1i = -1, a1l(), !d.e8 || 1 !== d.jc || d.e9 || d.eJ || di.dj.setState(1)), bm.bn = !0
	}, this.m2 = function() {
		(d.e8 || d.eJ) && 1 === d.jc && (kd.eV(!0), d.e9 || setTimeout(function() {
			eY.a0w()
		}, 0), di.dj.setState(0))
	}, this.ds = function(es, et) {
		return 0 <= (a1k = a1n(es, et))
	}, this.f1 = function(es, et) {
		es = a1n(es, et);
		es !== a1i && (a1i = es, this.jR || a1l(), bm.bn = !0)
	}, this.vR = function(es, et) {
		var em = a1n(es, et);
		if (a1k !== em) return !1;
		if (this.jR) {
			if (d.ie) return 0 <= em && vj.lv(!1), !d.eJ;
			if (0 === em) d.wu();
			else if (1 === em) this.m1();
			else if (2 === em) dw.dx(1, 0);
			else {
				if (! function() {
						if (d.e8 || 1 !== d.jc || d.eJ || vk.dr) return 1;
						jQ.m1()
					}()) return !1;
				oU.vn(es, et) || le.vo(es, et)
			}
			return !0
		}
		return 0 === em && (this.m1(), !0)
	}, this.e1 = function() {
		var bK;
		this.jR ? (bK = Math.floor(5.5 * bL), e2.setTransform(1, 0, 0, 1, dq.gap, eF.c7), e2.fillStyle = f3.sh, e2.fillRect(0, 0, bK, bL), 0 === a1i ? (e2.fillStyle = f3.sj, e2.fillRect(0, 0, 4 * bL, bL)) : 1 === a1i && (e2.fillStyle = f3.sj, e2
				.fillRect(4 * bL, 0, Math.floor(1.5 * bL), bL)), e2.fillStyle = f3.f9, e2.fillRect(0, 0, bK, 1), e2.fillRect(0, 0, 1, bL), e2.fillRect(4 * bL, 0, 1, bL), e2.fillRect(0, bL - 1, bK, 1), e2.fillRect(bK - 1, 0, 1, bL), e2.font =
			j9, a5.a6.textBaseline(e2, 1), a5.a6.textAlign(e2, 1), e2.fillText(hm.hn[79], 2 * bL, .54 * bL), bK = .4 * bL, jQ.yf(dq.gap + 4 * bL + (1.5 * bL - bK) / 2, eF.c7 + .3 * bL, bK), bK = 1, e2.setTransform(1, 0, 0, 1, dq.gap, eF.c7 -
				bK * a1j * dq.gap - bK * bL), e2.fillStyle = f3.sh, e2.fillRect(0, 0, 4 * bL, bL), a1i === bK + 1 && (e2.fillStyle = f3.sj, e2.fillRect(0, 0, 4 * bL, bL)), e2.fillStyle = f3.f9, e2.fillRect(0, 0, 4 * bL, 1), e2.fillRect(0, 0,
				1, bL), e2.fillRect(4 * bL, 0, 1, bL), e2.fillRect(0, bL - 1, 4 * bL, 1), e2.fillText(hm.hn[79 + bK], 2 * bL, .54 * bL), e2.setTransform(1, 0, 0, 1, 0, 0)) : e2.drawImage(j6, dq.gap, eF.c7)
	}, this.xO = function(player) {
		return 0 !== p.eA[player] && 2 !== d.jc && ol.rB(player)
	}, this.yf = function(c6, c7, c) {
		e2.setTransform(1, 0, 0, 1, c6, c7), e2.lineWidth = dq.f8, e2.strokeStyle = f3.f9, e2.beginPath(), e2.moveTo(0, 0), e2.lineTo(c, c), e2.moveTo(0, c), e2.lineTo(c, 0), e2.stroke()
	}
}

function a1s() {
	this.size = 0, this.ew = 0, this.y = null, this.a4 = function(y) {
		this.ew = 0, this.y = y, this.size = y.length
	}, this.j = function(jv) {
		return this.a4(new Uint8Array(this.fZ(jv))), this.y
	}, this.jt = function() {
		this.y = null
	}, this.l = function(size, a1t) {
		for (var y = this.y, ih = this.ew + size - 1, q = this.ew; q <= ih; q++) y[q >> 3] |= (a1t >> ih - q & 1) << 7 - (7 & q);
		this.ew += size, this.ew > 8 * this.size && console.log("error wrapper")
	}, this.a1u = function(size, a1t) {
		var fC = size >> 1,
			bs = 1 << fC;
		this.l(size - fC, b8.dE(a1t, bs)), this.l(fC, a1t % bs)
	}, this.a1v = function(size) {
		for (var y = this.y, ih = this.ew + size, q = this.ew; q < ih; q++) y[q >> 3] &= 255 ^ 128 >>> (7 & q)
	}, this.fZ = function(jv) {
		return jv + 7 >> 3
	}, this.a1w = function(gH, qD, ih, a1x) {
		for (var q = qD; q < ih; q++) this.l(a1x, gH[q])
	}
}

function a1y() {
	var a1z, a20, a21, a22, a23, a24;
	this.a4 = function() {
		a21 = a1z = 10, a22 = a20 = 10
	}, this.a25 = function() {
		a24 = 512, a23 = new Uint16Array(a24);
		for (var q = 0; q < a24; q++) a23[q] = 100 + kK(dG(25600 * q, a24 - 4), 9)
	}, this.kk = function() {
		return a22
	}, this.cf = function() {
		if (--a21 <= 0 && (a21 = a1z, function() {
				var q, a2B, hh = p.eE[d.eC];
				for (d.e8 && !d.ag && 0 !== p.eA[0] && 0 === gU.gV[0].bs && (p.eE[0] += dG(p.r[0], 6)), q = h5 - 1; 0 <= q; q--) a2B = dG(ak.a29(h6[q]) * p.eE[h6[q]], 1e4), p.eE[h6[q]] += a2B < 1 ? 1 : a2B, ak.uM(h6[q]);
				ab.eD[9] += p.eE[d.eC] - hh
			}(), --a22 <= 0)) {
			a22 = a20;
			for (var hh = p.eE[d.eC], q = h5 - 1; 0 <= q; q--) p.eE[h6[q]] += p.r[h6[q]], ak.uM(h6[q]);
			ab.eD[8] += p.eE[d.eC] - hh
		}
	}, this.a29 = function(player) {
		var fA = a23[dG((a24 - 1) * p.r[player], d.wX)],
			a2A = (bm.h4() < 1920 && (fA = fA < (a2A = dG(100 * (13440 - 6 * bm.h4()), 1920)) ? a2A : fA), this.gk(player));
		return p.eE[player] > a2A && (fA -= dG(2 * fA * (p.eE[player] - a2A), a2A)), fA < 0 ? 0 : 700 < fA ? 700 : fA
	}, this.gk = function(player) {
		player = 100 * p.r[player];
		return player > d.wU ? d.wU : player
	}, this.uM = function(player) {
		var dS = p.r[player] * d.sT;
		p.eE[player] = Math.min(Math.min(p.eE[player], d.sU), dS)
	}, this.al = function(player, af) {
		a5.aB.sR(af, aW.pz[0]), ab.a0D(player, af), bA.a2D(player, aW.pz[0] + aW.pz[1]), bA.a2E(af, aW.pz[0]), a5.aB.aa(player)
	}, this.a2F = function() {
		var c = h5,
			fy = h6;
		let bQ = 0;
		var kV = p.eE;
		for (let q = 0; q < c; q++) bQ += kV[fy[q]];
		return bQ
	}, this.a2G = function(rW) {
		var c = h5,
			fy = h6;
		let bQ = 0;
		var s, kV = p.eE,
			t = u.t;
		for (let q = 0; q < c; q++) t[s = fy[q]] === rW && (bQ += kV[s]);
		return bQ
	}
}

function ls(a2H, a2I, a2J = .5) {
	this.c6 = 0, this.c7 = 0, this.bK = 0, this.bL = 0, this.resize = function() {
		this.bL = Math.min(a5.a6.xy(a2J) * a2H[1] * dl.dm, dl.bL - 2 * dq.gap), this.bK = Math.min(this.bL * (a2H[0] / a2H[1]), dl.bK - 2 * dq.gap), this.bL = a2H[1] * this.bK / a2H[0], this.c6 = dq.gap + a2I[0] * (dl.bK - this.bK - 2 * dq.gap),
			this.c7 = dq.gap + a2I[1] * (dl.bL - this.bL - 2 * dq.gap)
	}, this.a2K = function() {
		return this.c6 + .5 * this.bK
	}
}

function a2L() {
	let nH, a2M;
	var wB;
	this.show = function() {
		nH.show(), this.resize()
	}, this.co = function() {
		nH.co()
	}, this.resize = function() {
		nH.resize(), a2M.resize()
	}, this.ev = function(dU) {
		2 === dU && nH.nd[0].ne()
	}, nH = new nJ("🛠️ Chart Options", [new hl("❌ " + hm.hn[92], function() {
		dw.a2N(13)
	})]), a2M = new a2O(nH.nQ, ((wB = []).push(function() {
		function a2Z() {
			var j8 = .1 + (0 === a2X.a2.value.length ? .1 : .01 * Math.min(a2X.a2.value.split(",").length, 10));
			a2V.button.innerHTML = a5.gN.qW(a2V.button.innerHTML, j8)
		}
		let a2U = new fE,
			a2V = (a2U.fG("Search Terms"), a2U.fH("Separate search terms with a comma."), new hl("Go (🧈 0.00)", function() {
				ex.fT.fU(130, 0), dw.w.a2W()
			})),
			a2X = new a2Y(ex.ey.data[126], 0, function() {
				a2V.button.click()
			});
		a2U.fO(a2X), a2X.a2.placeholder = "a,b,c", a2X.a2.style.marginTop = "0.5em";
		return a2X.a2.addEventListener("input", a2Z), a2Z(), a2U.fO(new z([a2V.button])), a2U
	}()), wB.push(function() {
		function a2Z() {
			oY = Math.floor(a2b.a2.value), oZ = Math.floor(a2a.a2.value);
			var oY, oZ = ((oY = {
				a2d: Math.min(oY, oZ),
				a2e: Math.max(oY, oZ)
			}).a2e - oY.a2d + 1 + 10) / 100;
			a2V.button.innerHTML = a5.gN.qW(a2V.button.innerHTML, oZ)
		}
		let a2U = new fE,
			a2V = new hl("Go (🧈 0.00)", function() {
				ex.fT.fU(130, 1), dw.w.a2W()
			}),
			a2a = new a2Y(ex.ey.data[129], 1, function() {
				a2a.a2.focus()
			}),
			a2b = new a2Y(ex.ey.data[128], 1, function() {
				a2V.button.click()
			});
		a2U.fG("Start Index"), a2U.fO(a2b), a2b.a2.style.marginBottom = "0.5em", a2U.fG("End Index"), a2U.fO(a2a);
		return a2b.a2.addEventListener("input", a2Z), a2a.a2.addEventListener("input", a2Z), a2Z(), a2U.fO(new z([a2V.button])), a2U
	}()), wB.push(function() {
		var a2U = new fE;
		return a2U.fG("Timeframe"), a2U.fL(new a2f(ex.ey.data[125])), a2U
	}()), wB.push(function() {
		var a2U = new fE;
		return a2U.fG("More Options"), a2U.fO(new pP(ex.ey.data[127], ex.ey.data[127].title)), a2U
	}()), wB))
}

function a2g() {
	this.az = new a2h, this.a2i = new a2j, this.a2k = new oa, this.w = new a2l, this.a2m = new a2n, this.pB = new v4, this.a2o = new a2p, this.gg = new a2q, this.au = new rb, this.a4 = function() {
		this.a2k.a4(), this.w.a4(), this.a2m.a4(), this.pB.a4()
	}
}

function o1() {
	this.ct = function(cj) {
		i.j(39), i.l(1, 0), i.l(6, 13), i.l(14, hy.hz), i.l(4, di.id), i.l(7, di.hW), i.l(1, +iH), i.l(1, +iI), i.l(5, (new Date).getHours() % 24), v.w.send(cj, i.y)
	}, this.a2r = function(cj, a2s, a2t) {
		i.j(26), i.l(1, 0), i.l(6, 14), i.l(3, a2t), i.l(16, a2s), v.w.send(cj, i.y)
	}, this.a2u = function(id) {
		i.j(13), i.l(1, 0), i.l(6, 15), i.l(6, id), v.w.send(0, i.y)
	}, this.a2v = function(a2w, fP) {
		i.j(7 + 26 * fP.length), i.l(1, 0), i.l(6, 9);
		for (let q = 0; q < fP.length; q++) i.l(16, fP[q][0]), i.l(10, fP[q][1]);
		v.w.send(a2w, i.y)
	}, this.pd = function(a2x, qo) {
		i.j(20), i.l(1, 0), i.l(6, 19), i.l(1, a2x), i.l(12, qo), v.w.send(v.w.x, i.y)
	}, this.pj = function(username) {
		i.l(5, username.length), fV.ff.pn(username)
	}
}

function a2y() {
	this.a2z = null, this.a4 = function() {
		10 !== d.k ? this.a2z = null : this.a2z = new Uint32Array(d.b4)
	}, this.cf = function() {
		10 === d.k && this.rk()
	}, this.rk = function() {
		for (var s, target, a30, a2z = this.a2z, fy = h6, kV = p.eE, q = h5 - 1; 0 <= q; q--)(s = fy[q]) >= d.e || (target = Math.max(dG(kV[s], 4), 2048), a30 = Math.max(ak.a29(s), 100), a2z[s] += dG(a30 * target, 1e4), a2z[s] > target && (a2z[
			s] = target))
	}, this.sZ = function(player, gd) {
		return gd > this.a2z[player] ? (gd = this.a2z[player], this.a2z[player] = 0) : this.a2z[player] -= gd, gd
	}
}

function a31() {
	var c6, c7, a32, a33, a34, ca, player, a35, gap, zoom, xi, a36, mP = new Array(10);

	function a3I(player) {
		for (var q = xi.length - 1; 0 <= q; q--)
			if (xi[q] === player) return 1
	}

	function a3G(a3D) {
		var q, c;
		if (-1 !== a3D)
			for (c = mP.length, q = 0; q < c; q++)
				if (mP[q].dr && mP[q].c6 + 1 === a3D % 4 && mP[q].c7 + 1 === a3D >> 2) return q;
		return -1
	}

	function a3E(es, et) {
		var fB = gap / 2;
		return es < c6 - a32 - 3 * fB || c6 + 3 * a32 + 5 * fB < es || et < c7 - a32 - 3 * fB || c7 + 2 * a32 + 3 * fB < et ? -1 : 4 * (et < c7 - fB ? 0 : et < c7 + a32 + fB ? 1 : 2) + (es < c6 - fB ? 0 : es < c6 + a32 + fB ? 1 : es < c6 + 2 * a32 +
			3 * fB ? 2 : 3)
	}
	this.a37 = function() {
		var q, fC, a3A = [f3.lP, f3.tB, f3.lQ, f3.tP, f3.tI];
		for (mP = new Array(8), q = 0; q < 8; q++) mP[q] = {
			id: q,
			dr: !1,
			em: 0,
			j6: [],
			c6: 0,
			c7: 0
		};
		for (mP[0].colors = [0, 1, 2, 3], mP[0].c6 = 0, mP[0].c7 = 0, mP[1].colors = [0, 1, 4], mP[1].c6 = 1, mP[1].c7 = 0, mP[2].colors = [0, 2], mP[2].c6 = -1, mP[2].c7 = 0, mP[3].colors = [0], mP[3].c6 = 0, mP[3].c7 = 0, mP[4].colors = [0, 2],
			mP[4].c6 = 1, mP[4].c7 = 1, mP[5].colors = [3], mP[5].c6 = 0, mP[5].c7 = -1, mP[6].id = 20, mP[6].colors = [0], mP[6].c6 = 1, mP[6].c7 = -1, mP[7].id = 21, mP[7].colors = [0], mP[7].c6 = 0, mP[7].c7 = 1, q = 0; q < 8; q++)
			for (fC = 0; fC < mP[q].colors.length; fC++) mP[q].j6.push(function(id, a3B) {
				if (id < 20) return a5.j6.lR(df.get(3), id, a3B);
				var a3B = df.get(3).height,
					dX = a5.a6.be(a3B, a3B),
					li = a5.a6.getContext(dX);
				20 === id ? li.drawImage(df.get(18), 0, 0) : 21 === id && dM.bt.lh(dM.dN.dO + dM.dN.a3C, li, 0, 0, a3B);
				return dX
			}(mP[q].id, a3A[mP[q].colors[fC]]))
	}, this.a39 = function() {
		return mP
	}, this.a4 = function() {
		xi = [], c6 = c7 = ca = 0, a33 = a34 = -1e3, this.resize()
	}, this.resize = function() {
		a32 = Math.floor((di.dj.dk() ? .075 : .0468) * dl.dm), zoom = a32 / df.get(3).height, gap = Math.floor(a32 / 3)
	}, this.vl = function(es, et) {
		return !!this.dr() && (bm.bn = !0, !!dM.bt.ds(es, et, player) || (es = function(es, et) {
			a34 = a33 = -1e3;
			var a3D = a3E(es, et),
				a3D = a3G(a3D);
			if (-1 === a3D) return 0;
			if (1 !== mP[a3D].colors[mP[a3D].em])
				if (5 === a3D) {
					if (! function() {
							var hh = performance.now();
							a36 + 4e3 < hh && (xi = []);
							a36 = hh
						}(), a3I(player)) return 1;
					xi.push(player), 16 < xi.length && xi.shift()
				} else if (6 === a3D) {
				for (let q = xi.length - 1; 0 <= q; q--) 0 === p.eA[xi[q]] && xi.splice(q, 1);
				0 < xi.length && (wp.uk(1, xi, !0) && h7.aB.xh(xi, player), xi = [])
			} else if (2 === a3D) h7.ec.al(eF.jN(), player);
			else if (3 === a3D) d.e9 && h7.ec.a9(a35);
			else if (0 === a3D)
				if (0 === mP[0].em) {
					if (d.wY && eH.a3J() < 300) return 1;
					h7.ec.aL(eF.jN(), player)
				} else wR.wS(player, eF.jN());
			else if (1 === a3D) a3K.a3L(), h7.ec.am(eF.jN(), a35);
			else {
				if (7 === a3D) return a3K.a3M(), dM.bt.show(es, et), 2;
				if (4 !== a3D) return 0;
				wp.uk(0, [player], !0) && h7.aB.xf(player)
			}
			return 1
		}(es, et), this.co(), 2 === es && (dM.bt.dr = !0), 0 < es))
	}, this.vo = function(es, et) {
		this.dr() || (a33 = es, a34 = et, ca = performance.now())
	}, hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = aE.wK(mouseX),
			coordY = aE.wM(mouseY),
			coord = aE.wN(coordX, coordY),
			point = aE.wO(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(es, et, ip) {
			ol.tl(ip) || -1 === (es = an.az.a3W(es, et)) ? eS.zq(ip) : eS.zt(es)
		}(mouseX, mouseY, point))
	}
	this.click = function(es, et, vv) {
		var wJ = aE.wK(es),
			wL = aE.wM(et),
			aA = aE.wN(wJ, wL),
			ip = aE.wO(aA);
		return !(!aE.wP(wJ, wL) || (wJ = (di.dj.dk() ? .025 : .0144) * dl.dm, wL = performance.now(), Math.abs(es - a33) > wJ) || Math.abs(et - a34) > wJ || ca + 500 < wL) && (ca = wL, vv ? (function(es, et, ip) {
			ol.tl(ip) || -1 === (es = an.az.a3W(es, et)) ? eS.zq(ip) : eS.zt(es)
		}(es, et, ip), !1) : jQ.jR || this.dr() || !a5.aB.aD(d.eC) || d.eJ ? (this.co(), !1) : d.e9 ? !!ol.tl(ip) && (a35 = aA, mP[3].dr = !0, this.a3P(es, et)) : (an.az.ax(aA) ? an.pB.pC = -1 : an.az.a3Q(es, et) || (2 === d.jc ? ol.q5(
			ip) && (player = ol.q7(ip), ol.rB(player)) && (mP[0].dr = !0, mP[0].em = 1, mP[7].dr = !0) : ol.wQ(ip) || (a35 = aA, an.az.nv(d.eC, aA) && (mP[0].dr = !0, mP[0].em = 1, mP[1].dr = !0, mP[1].em = aW.pD[2] ? 0 : 2), ol
			.ri(ip)) || (ol.q9(ip) ? (player = d.b4, tx(d.eC) ? (mP[0].dr = !0, mP[0].em = 0) : ts(d.eC, player) && (mP[0].dr = !0, mP[0].em = 3)) : (player = ol.q7(ip)) === d.eC ? (mP[0].dr = !0, mP[0].em = 1, mP[7].dr = !0) : (
			mP[0].em = 1, mP[5].dr = function(player) {
				return ol.rB(player) && !a3I(player) && wp.uk(1, [player], !1)
			}(player), mP[7].dr = ol.rB(player), qE(player, d.eC) ? (mP[4].dr = ol.rB(player) && !bA.a3S(player) && wp.uk(0, [player], !1), mP[6].dr = function(player) {
				if (0 === xi.length) return !1;
				if (performance.now() > a36 + 4e3) return !(xi = []);
				return !a3I(player) && ! function(player) {
					var q;
					if (d.ag)
						for (q = xi.length - 1; 0 <= q; q--)
							if (!qE(player, xi[q])) return 1;
					return
				}(player)
			}(player), ty(d.eC, player) ? (mP[0].em = 0, mP[0].dr = !0) : ts(d.eC, player) && (mP[0].em = 3, mP[0].dr = !0), mP[0].dr = this.a3U()) : (mP[2].dr = !0, mP[0].dr = !0)))), this.a3P(es, et)))
	}, this.a3P = function(es, et) {
		return c6 = es - Math.floor(a32 / 2), c7 = et - Math.floor(a32 / 2), !!this.dr()
	}, this.f1 = function(es, et) {
		return !!this.dr() && (dM.bt.dr ? !dM.bt.ld(es, et) && (dM.bt.dr = !1, bm.bn = !0) : function(jY, es, et) {
			es = a3E(es, et);
			if (0 <= a3G(es)) return !1;
			if ((1 === es || 6 === es) && 0 <= a3G(2)) return !1;
			if ((6 === es || 9 === es) && 0 <= a3G(10)) return !1;
			return jY.co(), bm.bn = !0
		}(this, es, et))
	}, this.co = function() {
		for (let q = mP.length - 1; 0 <= q; q--) mP[q].dr = !1, mP[q].em = 0;
		dM.bt.dr = !1
	}, this.dr = function() {
		return this.a3U() || dM.bt.dr
	}, this.a3U = function() {
		for (var c = mP.length, q = 0; q < c; q++)
			if (mP[q].dr) return !0;
		return !1
	}, this.e1 = function() {
		if (this.dr())
			if (dM.bt.dr) dM.bt.e1();
			else {
				var q, li = e2,
					fC = mP,
					c = fC.length,
					a3b = (a32 + gap) / zoom;
				for (li.imageSmoothingEnabled = !0, li.setTransform(zoom, 0, 0, zoom, c6, c7), q = 0; q < c; q++) fC[q].dr && e2.drawImage(fC[q].j6[fC[q].em], fC[q].c6 * a3b, fC[q].c7 * a3b);
				li.imageSmoothingEnabled = !1, li.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function a3c() {
	let nH, a3d, a3e = !1;

	function a3g(id) {
		0 !== di.id || ex.ey.data[140].value ? 0 === id ? dw.dx(8, 1, new oW(16)) : dw.dx(2) : dw.w.a3n(dw.dy, 0 === id ? 16 : 0)
	}
	var a3f, xR;
	this.show = function() {
		di.dj.setState(12), nH.show(), this.resize(), this.cf()
	}, this.co = function() {
		nH.co()
	}, this.resize = function() {
		nH.resize(), a3d.resize()
	}, this.cf = function() {
		!a3e || jQ.xO(d.eC) || (dw.a3k(), dw.dx(1))
	}, this.ev = function(dU) {
		2 === dU && nH.nd[0].ne()
	}, a3f = [new hl("🔑 " + hm.hn[125], function() {
		a3g(0)
	}), new hl("⚙️ " + hm.hn[81], function() {
		a3g(1)
	}), new hl("▶️ " + hm.hn[82], function() {
		dw.dx(3, 1, "")
	}), new hl("📈 Charts", function() {
		dw.w.a2W()
	}), new hl("🔗 " + hm.hn[83], function() {
		dw.dx(4, 1, new hk("🔗 " + hm.hn[83], a5.a6.y1(["Android App", "iOS App", "Discord", "Changelog", "Clans", "Clan Results", "Players", "Tutorial", "Terms", "Privacy"], [dZ.da, dZ.db, dZ.dd, dZ.a3o, dZ.a3p, dZ.a3q, dZ.a3r, dZ.a3s,
			dZ.a3t, dZ.a3u
		]), !1, [new hl("❌ " + hm.hn[92], function() {
			dw.dx(1)
		}, f3.ho)]))
	}), new hl("ℹ️ " + hm.hn[84], function() {
		dw.dx(4, 1, new hk("ℹ️ " + hm.hn[84], ng + "<br><a href='" + dZ.a3o + "' target='_blank'>" + dZ.a3o + "</a>" +
			"<br><br><b>" + "FX Client v" + fx_version + " " + fx_update + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new hl("❌ " + hm.hn[92], function() {
				dw.dx(1)
			}, f3.ho)]))
	}), new hl("🗑️ " + hm.hn[85], function() {
		dw.dx(4, 1, new hk("🗑️ " + hm.hn[85],
			"Do you want to delete all locally stored data, like usernames, account data and setting data? Your account will be deleted automatically after 3 months of inactivity. To prevent the storage of new data, it is recommended to close the game after deletion.",
			!1, [new hl("❌ " + hm.hn[92], function() {
				dw.dx(1)
			}), new hl("🗑️ Delete", function() {
				di.dj.hG(), dw.dx(1)
			})]))
	}), new hl(hm.hn[86], function() {
		di.dj.hM(), dw.dx(4, 1, new hk("User Privacy", "If the privacy window doesn't open, please deactivate all your adblockers.<br>Additionally, check out our Privacy Policy: <a href='" + dZ.a3u + "' target='_blank'>" + dZ.a3u +
			"</a>", !1, [new hl("❌ " + hm.hn[92], function() {
				dw.dx(1)
			}, f3.ho)]))
	})], xR = [new hl("❌ " + hm.hn[87], function() {
		dw.w.yR()
	})], 8 === cv.cw() && a3f.unshift(new hl("📈 " + hm.hn[88], function() {
		dw.a3k(), 2 <= ab.a3l && (vk.m1(), bm.bn = !0)
	})), 8 === cv.cw() && !d.eJ && jQ.xO(d.eC) && (a3e = !0, a3f.unshift(new hl("🏳️ " + hm.hn[89], function() {
		h7.ec.bG(), dw.a3k(), jQ.jR && jQ.m1()
	}))), 1 === di.id && 5 <= di.hW && a3f.push(new hl(hm.hn[90], function() {
		di.dj.hP()
	})), nH = new nJ("📙 " + hm.hn[91], xR), a3d = new a3m(a3f, nH.nQ)
}

function a3v() {
	var a3w = !1,
		n8 = 0,
		bK = 0,
		dh = 0,
		gap = 0,
		j6 = null,
		j7 = null,
		a3x = null;

	function a40() {
		for (var a47, a45 = 0, c = 0, dU = Math.floor(bK / 2), fA = Math.floor(dh / 2), a46 = 1.5 * Math.PI, q = d.gQ; 0 <= q; q--) c += a3x[q], 0 === a3x[q] && a45++;
		if (a3w = !1, j7.clearRect(0, 0, bK, bK), j7.fillStyle = f3.f5, j7.fillRect(0, 0, bK, bK), j7.fillStyle = f3.f9, j7.fillRect(0, 0, bK, gap), j7.fillRect(0, 0, gap, bK), j7.fillRect(bK - gap, 0, gap, bK), j7.fillRect(0, bK - gap, bK, gap), 0 <
			c)
			if (a45 === d.gQ) {
				for (q = d.gQ; 0 <= q; q--)
					if (0 < a3x[q]) {
						! function(q, dU, fA) {
							j7.fillStyle = u.fk[u.fv[q]], j7.beginPath(), j7.arc(dU, dU, fA, 0, 2 * Math.PI), j7.fill()
						}(q, dU, fA);
						break
					}!
				function(dU) {
					var fontSize = dU / 3;
					j7.font = a5.a6.jD(1, fontSize), j7.fillStyle = f3.f9, j7.fillText("100%", dU, dU + .1 * fontSize)
				}(dU)
			} else {
				for (q = 0; q <= d.gQ; q++) 0 < a3x[q] && (! function(q, dU, fA, a46, a47) {
					j7.fillStyle = u.fk[u.fv[q]], j7.beginPath(), j7.arc(dU, dU, fA, a46, a47), j7.lineTo(dU, dU), j7.fill()
				}(q, dU, fA, a46, a47 = a46 + 2 * Math.PI * a3x[q] / c), function(dU, fA, a46, a47) {
					var dS = (a47 - a46) / (2 * Math.PI),
						fontSize = +fA * Math.min(dS, .37);
					fontSize < 8 || (a46 = (a46 + a47) / 2, a47 = Math.floor(100 * dS + .5) + "%", fA *= .525 - Math.max(.6 * (dS - .7), 0), j7.font = a5.a6.jD(1, fontSize), j7.fillStyle = f3.f9, j7.fillText(a47, dU + Math.cos(a46) * fA, dU +
						Math.cos(a46 + 1.5 * Math.PI) * fA))
				}(dU, fA, a46, a47), 0 !== q && a4C(dU, fA, a46), a46 = a47);
				a4C(dU, fA, 1.5 * Math.PI)
			}!
		function(dU, fA) {
			j7.beginPath(), j7.arc(dU, dU, fA, 0, 2 * Math.PI), j7.stroke()
		}(dU, fA)
	}

	function a4C(dU, fA, a4E) {
		j7.beginPath(), j7.moveTo(dU, dU), j7.lineTo(dU + Math.cos(a4E) * fA, dU + Math.cos(a4E + 1.5 * Math.PI) * fA), j7.stroke()
	}
	this.a4 = function() {
		if (d.ag) {
			var q;
			for (n8 = 0, a3x = new Uint32Array(d.gQ + 1), q = d.gQ; 0 <= q; q--) a3x[q] = 0;
			for (q = h5 - 1; 0 <= q; q--) a3x[u.t[h6[q]]] += 1;
			this.resize()
		} else a3x = j7 = j6 = null
	}, this.a3z = function() {
		return bK
	}, this.resize = function() {
		d.ag && (bK = Math.floor(di.dj.dk() && !d.ie ? .18 * dl.min : .13 * dl.dm), bK = (bK *= 1 + (.5 + .2 * di.dj.dk()) * d.ie) + bK % 2, dh = Math.floor(7 * bK / 8), (j6 = j6 || document.createElement("canvas")).width = bK, j6.height = bK,
			j7 = j6.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * bK), j7.lineWidth = gap, j7.strokeStyle = f3.f9, a5.a6.textAlign(j7, 1), a5.a6.textBaseline(j7, 1), a40())
	}, this.a41 = function() {
		return a3x[this.rF()]
	}, this.a42 = function() {
		return n8 = 31, this.cf(), this.rF()
	}, this.rF = function() {
		let a43 = 0;
		for (let q = d.gQ; 0 < q; q--) a3x[q] > a3x[a43] && (a43 = q);
		return a43
	}, this.cf = function() {
		if (d.ag && 32 <= ++n8) {
			var q;
			for (n8 = 0, q = d.gQ; 0 <= q; q--) a3x[q] = 0;
			for (q = h5 - 1; 0 <= q; q--) a3x[u.t[h6[q]]] += p.r[h6[q]];
			a3w = !0
		}
	}, this.lu = function() {
		d.ag && a3w && a40()
	}, this.e1 = function() {
		d.ag && (d.ie ? e2.drawImage(j6, dq.gap, dq.gap) : e2.drawImage(j6, dq.gap, a4G + 2 * dq.gap))
	}
}

function xt(l9, size, pm, a4H, font) {
	var q, a4J = .2,
		j6 = document.createElement("canvas"),
		li = j6.getContext("2d", {
			alpha: !1
		});
	for (j6.width = l9, j6.height = l9, li.font = size + font, li.textAlign = "center", li.textBaseline = "middle", li.fillStyle = "red", q = 0; q < pm.length; q++) li.fillText(pm[q], .5 * l9, .5 * l9);
	return -1 < (j6 = function(oM) {
		var q, fA;
		for (q = oM.data.length - 4; 0 <= q; q -= 4)
			if (fA = oM.data[q], a4H <= fA) return Math.floor(q / (4 * l9));
		return -1
	}(li.getImageData(0, 0, l9, l9))) && (a4J = (j6 - .5 * l9 + .1 * size) / size), Math.max(a4J, 0)
}

function a4L() {
	this.f8 = 0, this.gap = 0, this.xu = 0, this.pu = 0, this.a4 = function() {
		this.resize()
	}, this.resize = function() {
		this.f8 = .0022 * a5.a6.xy(.5) * dl.dm, this.xu = this.f8 / dl.vh, this.gap = Math.max(Math.floor((di.dj.dk() ? .0114 : .01296) * dl.dm), 2), this.pu = this.gap / dl.vh
	}
}

function a2j() {
	this.a4M = function(player) {
		for (var a4N = an.w.a4N, oY = player << 3, q = oY + an.w.aq[player] - 1; oY <= q; q--) this.a4O(a4N[q])
	}, this.a4O = function(a4P) {
		var w = an.w,
			a4Q = w.ao - 1,
			a4R = w.p1[a4P],
			a4S = w.a4T[a4P],
			a4U = w.p0[a4P];
		w.ao = a4Q, w.p1[a4P] = w.p1[a4Q], w.a4V[a4P] = w.a4V[a4Q], w.a4W[a4P] = w.a4W[a4Q], w.p0[a4P] = w.p0[a4Q], w.a4X[a4P] = w.a4X[a4Q], w.p2[a4P] = w.p2[a4Q], w.a4T[a4P] = w.a4T[a4Q], w.v6[a4P] = w.v6[a4Q], w.a4Y[a4P] = w.a4Y[a4Q], w.a4N[w
				.p1[a4P]] = a4P,
			function(a4E) {
				var player = a4E >> 3,
					w = an.w,
					c = w.aq[player] - 1,
					a4c = (player << 3) + c;
				w.aq[player] = c, a4c !== a4E && (w.a4N[a4E] = w.a4N[a4c], w.p1[w.a4N[a4E]] = a4E)
			}(a4R), an.a2m.a2m[aE.a4a(w.p0[a4P])][w.a4T[a4P]] = a4P, a4Q = aE.a4a(a4U), a4R = a4S, a4Q = an.a2m.a2m[a4Q], w = a4Q.pop(), a4R !== a4Q.length && (a4Q[a4R] = w, an.w.a4T[w] = a4R)
	}
}

function o7() {
	this.a4e = function(cj, y) {
		bV.a4(y), 0 === bV.size ? v.w.d0(cj, 3205) : ((0 === bV.bc(1) ? function(cj) {
			var a4h = bV.bc(6);
			0 === a4h ? function(cj) {
				if (0 === cj && 8 !== cv.cw()) {
					a4n.oR(0, bW.ff.fg(bV.bc(5))), a4n.oR(1, "[" + bW.ff.fg(bV.bc(3)) + "]");
					var a4o = bV.bc(12),
						a4p = bV.bc(6),
						gH = new Array(a4o);
					for (let q = 0; q < a4o; q++) gH[q] = bV.bc(a4p);
					mX.a4q(gH)
				}
			}(cj) : 1 === a4h ? function() {
				var q;
				if (8 !== cv.cw()) {
					var a01, id = bV.bc(1),
						position = bV.bc(16),
						a1t = bV.bc(4),
						gH = [];
					for (q = 0; q < a1t; q++) a01 = bV.bc(14), gH.push({
						name: bW.ff.fg(bV.bc(5)),
						a01: a01
					});
					0 === id ? hr.a4r(0, gH, 10, 1, .36, .55, position) : hr.a4r(1, gH, 100, 2, .47, .5, position)
				}
			}() : 2 === a4h ? v.o8.a4k(cj) : 3 === a4h || 4 === a4h ? hu.a4() : 5 !== a4h && 6 !== a4h && 7 !== a4h && 8 !== a4h && (9 === a4h ? v.oA.a4l(cj) : 10 === a4h ? v.oC.fR() : 11 === a4h ? v.oA.a4m() : 12 === a4h ? v.oC
				.fY() : 13 === a4h ? v.oD.v8() : 14 === a4h && v.oD.v9())
		} : function(cj) {
			if (8 !== cv.cw() && !hu.jm()) return;
			if (cj !== v.w.x) v.w.d0(cj, 3244);
			else if (0 === bV.bc(1)) bm.z0.kr(bV.y);
			else {
				var q, b7, cj = bV.bc(2);
				if (0 === cj) {
					var ch = bV.bc(9);
					0 !== p.eA[ch] && 0 !== p.eA[d.eC] && (b7 = bV.bc(10), eS.lf(ch, d.eC, b7), bA.bB(ch, 1, b7))
				} else if (1 === cj) ! function() {
					var ch = bV.bc(9);
					0 !== p.eA[ch] && 0 !== p.eA[d.eC] && wp.un(0, [ch], !0) && eS.xg(ch, 1)
				}();
				else if (2 === cj) ! function() {
					var ch = bV.bc(9),
						target = bV.bc(9);
					0 !== p.eA[ch] && 0 !== p.eA[target] && 0 !== p.eA[d.eC] && wp.un(1, [ch], !0) && (bA.bB(ch, 3, 96), bA.bB(target, 4, 96), eS.a09(ch, target))
				}();
				else if (iH && !iI) {
					var c = 720;
					for (i.j(14407), i.l(1, 0), i.l(6, 10), c = Math.min(h7.eg.wg.length, 720), q = 0; q < c; q++) i.l(20, h7.eg.wg[q]);
					v.w.send(v.w.x, i.y)
				}
			}
		})(cj), bm.z5())
	}, this.jn = function(y) {
		if (bV.a4(y), bV.ew = 1, 3 === bV.bc(6)) {
			bV.ew += 20;
			for (var mv, gI, name, y = bV.bc(9), wb = bV.bc(14), mg = bV.bc(4), a4u = 1 === bV.bc(1), yC = bV.bc(6), yD = bV.bc(14), a4v = bV.bc(9) + 1, fy = [], q = 0; q < a4v; q++) mv = bV.bc(1), gI = [bV.bc(6), bV.bc(6), bV.bc(6)], name = bW
				.ff.fg(bV.bc(5)), fy.push({
					name: name,
					gI: gI,
					mv: mv
				});
			cv.mq(), ba.j(yC, yD), 1 === fy.length && gU.mf(mg), d.ms(wb, y, fy, mg, a4u, !1)
		} else ! function() {
			bV.ew += 20;
			for (var mv, gI, a01, name, hw = bV.bc(1), wb = bV.bc(14), mg = bV.bc(4), a4u = 1 === bV.bc(1), yC = bV.bc(6), yD = bV.bc(14), fy = [], q = 0; q < 2; q++) mv = bV.bc(1), gI = [bV.bc(6), bV.bc(6), bV.bc(6)], a01 = bV.bc(14), name =
				bW.ff.fg(bV.bc(5)), fy.push({
					name: name,
					gI: gI,
					a01: a01,
					mv: mv
				});
			cv.mq(), ba.j(yC, yD), d.ms(wb, hw, fy, mg, a4u, !1)
		}()
	}, this.ji = function() {
		bV.ew = 1;
		var a4h = bV.bc(6),
			a2w = bV.bc(10);
		return v.w.cR > v.w.cK && (a2w += v.w.cK), v.w.cR === a2w ? (v.w.x = a2w, !1) : (v.w.close(v.w.cR, 3247), v.w.x = a2w, hu.hv = bV.bc(10), hu.hw = bV.bc(3 === a4h ? 9 : 1), v.w.cc(a2w, 5) && v.ch.ht(), !0)
	}
}

function cq() {
	var cj, ck, a50, a51 = ["wss://", "/s50/", "/s51/", "/s52/"];

	function cr() {
		v.w.cr(cj, ck)
	}

	function a57(a2) {
		v.iD.a4e(cj, new Uint8Array(a2.data))
	}

	function a58() {}

	function d6(a2) {
		v.w.d6(cj, a2)
	}
	this.a4 = function(ew, a52) {
		cj = ew, ck = a52;
		ew = a51[0];
		cj < v.w.cJ ? ew += v.w.cO[cj] + a51[1 + nf] : ew += v.w.cO[0] + "/i" + (1 + nf) + (cj - v.w.cK) + "/", (a50 = new WebSocket(ew)).binaryType = "arraybuffer", a50.onopen = cr, a50.onmessage = a57, a50.onclose = d6, a50.onerror = a58
	}, this.a54 = function() {
		return a50.readyState === a50.CONNECTING
	}, this.cg = function() {
		return a50.readyState === a50.OPEN
	}, this.cm = function() {
		return this.a54() || this.cg()
	}, this.cn = function(a52) {
		ck = a52
	}, this.a55 = function() {
		return ck
	}, this.send = function(y) {
		this.cg() && a50.send(y)
	}, this.close = function(cz) {
		this.cm() && (a50.close(cz), this.co())
	}, this.co = function() {
		a50.onopen = null, a50.onmessage = null, a50.onclose = null, a50.onerror = null
	}
}

function a59() {
	var bL, j6, j7, a5A, a5B, a5C, a5D, jA, a5E, a5F, a5G, a5H, a04 = !1,
		dX = (this.dr = !1, this.bK = 0, new Array(2));

	function lu() {
		var bK = bE.bK,
			bQ = (jA = !1, a5K(j7, bK, bL), Math.floor(bK / 2));
		1 === a5A ? (j7.fillStyle = f3.sy, j7.fillRect(bQ, 0, bQ, bL)) : -1 === a5A && (j7.fillStyle = f3.t7, j7.fillRect(0, 0, bQ, bL)), a5L(j7, bK, bL, 2);
		var bQ = (bQ = Math.floor(.25 * bL)) < 2 ? 2 : bQ,
			a0I = (j7.fillStyle = f3.sn, Math.floor((bL - 4) * a5B[1] / a5C[1]));
		0 < a0I && j7.fillRect(2, bL - 2 - a0I, bQ, a0I), 0 < (a0I = Math.floor((bL - 4) * a5B[0] / a5C[0])) && j7.fillRect(bK - 2 - bQ, bL - 2 - a0I, bQ, a0I);
		bQ = (bQ = Math.floor(bL / 8)) < 2 ? 2 : bQ, j3(j7, Math.floor(.4 * bL), 0, bL, bQ, .5, !1), j3(j7, Math.floor(bK - 1.4 * bL), 0, bL, bQ, .5, !0), a0I = 1.1 * bL / dX[0].width;
		j7.imageSmoothingEnabled = !0, j7.setTransform(a0I, 0, 0, a0I, (bK - a0I * dX[0].width) / 2, -.05 * bL), j7.drawImage(dX[+a04], 0, 0), j7.setTransform(1, 0, 0, 1, 0, 0)
	}

	function jU() {
		jA = !0, a5E = 140, a5A = 0, a5D = [], bE.dr = !1, eS.a0C(247, 0), a5B[0] = a5B[1] = 0
	}

	function iY() {
		return eF.jS(eS.zb()) ? eF.c7 - bL - dq.gap : vj.jS(eS.zd()) ? vj.iY() - bL - dq.gap : dl.bL - bL - jF.jG() * dq.gap
	}
	this.a5I = function() {
		for (let q = 0; q < 2; q++) dX[q] = a5.j6.lR(df.get(3), 8 - q, f3.tU), dX[q] = a5.j6.a5J(dX[q])
	}, this.a4 = function() {
		a5G = a5H = 0, this.dr = !1, jA = a04 = !1, a5E = 140, a5B = [a5A = 0, 0], a5C = [1, 1], a5D = [], a5F = new Uint32Array(10), this.resize()
	}, this.resize = function() {
		bL = eF.bL, this.bK = 4 * bL, (j6 = document.createElement("canvas")).width = this.bK, j6.height = bL, j7 = j6.getContext("2d", {
			alpha: !0
		}), lu()
	}, this.eV = function() {
		jA && lu()
	}, this.ds = function(c6, c7) {
		var kN;
		return !!this.dr && !(c6 < dl.bK - this.bK - dq.gap || c7 < (kN = iY()) || kN + bL < c7 || (d.eJ || h7.ec.bC(c6 > dl.bK - dq.gap - this.bK / 2 ? 1 : 0), 0))
	}, this.cf = function() {
		if (0 < a5H) 0 === --a5H && jU();
		else if (this.dr) 270 == --a5E && 2 <= a5G && function() {
			var q;
			for (q = h5 - 1; 0 <= q; q--)
				if (ol.rB(h6[q])) return;
			return 1
		}() && (jA = !0, a5B[0] += a5C[0]), 180 === a5E && 3 * a5B[0] < a5C[0] ? jU() : a5B[0] >= a5C[0] ? a04 ? g.v0.a5T() : g.v0.xN(-1) : a5B[1] >= a5C[1] ? a5H = 4 : a5E <= 0 && jU();
		else if (function() {
				var q;
				for (q = 9; 0 <= q; q--) 12 < Math.abs(a5F[q] - p.r[a0j[q]]) && (a5E = 140), a5F[q] = p.r[a0j[q]];
				if (--a5E <= 0) return 1;
				return
			}()) {
			a04 = a5P.a5Q(), eS.a03(a04), this.dr = !0, jA = !0, a5E = 360;
			{
				let hh = 0;
				for (let q = h5 - 1; 0 <= q; q--) ol.rB(h6[q]) && (hh += p.r[h6[q]]);
				{
					var dS;
					a04 ? a5C[0] = Math.max(dG(3 * hh, 4), 1) : d.ag ? (dS = b8.dE(100 * lx.a41(), d.wX), dS += 2 * Math.max(dS - 75, 0), dS = b8.b9(dS = 150 - dS, 0, 100), dS = b8.dE(dS * hh, 100), a5C[0] = Math.max(dS, 1)) : a5C[0] = Math.max(
						dG(3 * hh, 5), 1)
				}
				a5C[1] = Math.max(hh - a5C[0], 1)
			}
			a5G++
		}
	}, this.a5U = function() {
		this.dr && a5B[0] < a5C[0] && jU()
	}, this.bF = function(player, a5V) {
		var q, hh;
		if (this.dr) {
			for (q = a5D.length - 1; 0 <= q; q--)
				if (a5D[q] === player) return;
			eS.rI(200, p.zj[player] + (a5V ? " voted for" : " rejected") + " peace.", 257, player, a5V ? f3.sw : f3.ki, f3.f5, -1, !0), a5D.push(player), jA = !0, hh = d.e8 ? a5C[0] : p.r[player], a5V ? a5B[0] += hh : a5B[1] += hh, player === d
				.eC && (a5A = a5V ? 1 : -1)
		}
	}, this.e1 = function() {
		var c7;
		this.dr && (c7 = iY(), e2.drawImage(j6, dl.bK - this.bK - dq.gap, c7))
	}
}

function a2n() {
	this.a5W = 32, this.c6 = 0, this.c7 = 0, this.a5X = 0, this.a5Y = 0, this.a5Z = 4, this.a2m = null, this.a5a = new Int16Array(9), this.a4 = function() {
		this.a5X = 1 + b8.dE(ba.bb - 1, this.a5W), this.a5Y = 1 + b8.dE(ba.bd - 1, this.a5W), this.a2m = new Array(this.a5X * this.a5Y), a5.bq.a5b(this.a2m);
		var c6, c7, a5a = this.a5a,
			bK = this.a5X;
		for (c6 = -1; c6 <= 1; c6++)
			for (c7 = -1; c7 <= 1; c7++) a5a[3 * (1 + c7) + 1 + c6] = c7 * bK + c6
	}, this.aw = function(a5d, q) {
		return this.a2m[q].push(a5d), this.a2m[q].length - 1
	}, this.a5e = function(a5f, ro, rp) {
		var a5g, a5h, ro = aE.a4a(ro),
			rp = aE.a4a(rp);
		return ro === rp ? a5f : (a5g = this.a2m[ro].pop(), this.a2m[ro].length === a5f ? this.aw(a5g, rp) : (a5h = this.a2m[ro][a5f], this.a2m[ro][a5f] = a5g, an.w.a4T[a5g] = a5f, this.aw(a5h, rp)))
	}
}

function a2O(pr, wB) {
	var q, a1 = document.createElement("div");

	function a5m() {
		var q, xw, bL, nC, bs, a5k = dl.vh * a1.offsetWidth,
			a5n = new Float64Array(function(a5k) {
				var bK = .25 * a5.a6.xy(.6) * dl.dm;
				return Math.max(Math.floor(a5k / bK), 1)
			}(a5k)),
			pu = dq.pu,
			a5o = (a5k - (a5n.length + 1) * dq.gap) / (a5n.length * dl.vh);
		for (a5n.fill(pu), q = 0; q < wB.length; q++) xw = (bs = wB[q].a1).style, bL = Math.min(...a5n), nC = a5n.indexOf(bL), xw.top = a5.a6.pt(bL), xw.left = a5.a6.pt(pu + nC * (a5o + pu)), xw.width = a5.a6.pt(a5o), a5.a6.a7(bs, 5), a5n[nC] += bs
			.offsetHeight + 3 * pu;
		a1.style.height = a5.a6.pt(Math.max(...a5n) - 2 * pu)
	}
	for (this.a5i = wB, this.resize = function() {
			var q;
			for (q = 0; q < wB.length; q++) wB[q].resize();
			a5m(), a5m()
		}, a1.style.width = "100%", a1.style.maxWidth = "100%", pr.style.lineHeight = "1.5em", pr.style.overflowX = "hidden", pr.style.overflowY = "auto", q = 0; q < wB.length; q++) a1.appendChild(wB[q].a1);
	pr.appendChild(a1)
}

function a5p() {
	var bO;
	10 === ba.cG ? bO =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === ba.cG ? bO =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === ba.cG ? bO =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === ba.cG ? bO =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === ba.cG ? bO =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === ba.cG ? bO =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === ba.cG ? bO =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === ba.cG ? bO =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === ba.cG ? bO =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === ba.cG && (bO =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new bJ).bN(bO)
}

function a5q() {
	this.hO = new a5r, this.wx = new ra, this.a4 = function() {
		di.dj.hf()
	}
}

function a5s() {
	var player, gd, c1, bv, kM, kN, kO, kP, ew, a5t, id;

	function a5z() {
		var aN;
		if (ol.q9(c1)) aN = d.b4;
		else {
			if ((aN = ol.q7(c1)) === player) return void a61(!0);
			if (!qE(player, aN)) return function(aN) {
				var max = p.r[aN] * d.sT - p.eE[aN];
				max <= 0 || (gd -= max = max < gd ? max : gd, player === d.eC && (eS.a0D(max, 0, aN), ab.eD[16] += max), aN === d.eC && (eS.a0G(max, player), ab.eD[10] += max), p.eE[aN] += max, bA.a2E(aN, max))
			}(aN), void a61(!0)
		}
		player === d.eC && (ab.eD[13] += gd), wm.uL(player, id), aU.uN(player, a5t), p.hB[player].push(bv), aU.aK(player, gd, aN), q0.q1(player, !0)
	}

	function a61(a64) {
		wm.uL(player, id), aU.uN(player, a5t), a64 && (p.eE[player] += gd)
	}

	function a5v() {
		ol.a66(c1, player) && ol.a67(c1)
	}

	function a5u(q, xB, x4, qD, ih) {
		if (ew = q, id = xB, player = x4, kM = ol.iX(qD), kN = ol.iY(qD), kO = ol.iX(ih), kP = ol.iY(ih), bv = c1 = ol.a0x(kM, kN), -1 !== (a5t = aU.xA(player, id))) return gd = aU.uF(player, a5t), 1;
		a5v(), wm.uL(player, id)
	}
	this.cf = function(q, id, x4, qD, ih) {
		a5u(q, id, x4, qD, ih) && (a5v(), function() {
			var a69 = dG(gd, 128);
			gd -= a69 = a69 < 1 ? 1 : a69, player === d.eC && (ab.eD[15] += a69);
			if (gd <= d.aR) return player === d.eC && (ab.eD[15] += gd), void a61(!1);
			return aU.xF(player, a5t, gd), 1
		}()) && (q = ol.a0x(kM, kN), c1 = Math.abs(kO - kM) >= Math.abs(kP - kN) ? q + q6[kM < kO ? 1 : 3] : q + q6[kN < kP ? 2 : 0], kM = ol.iX(c1), kN = ol.iY(c1), wm.a6A(ew, c1), ! function() {
			if (ol.tl(c1)) return;
			return 1
		}() ? a5z() : ol.ri(c1) && ol.a68(c1, player))
	}, this.a65 = function(x4, qD) {
		player = x4, c1 = ol.a0x(ol.iX(qD), ol.iY(qD)), a5v()
	}
}

function nP(name, placeholder) {
	var nI = document.createElement("textarea"),
		a6B = (this.nR = nI, !0);

	function a6C() {
		nI.select(), document.execCommand("copy")
	}
	this.resize = function() {
			nI.style.padding = a5.a6.pt(dq.pu)
		}, this.nV = function(a4F) {
			nI.value = a4F
		}, this.nU = function() {
			return nI.value
		}, this.nL = function() {
			nI.select()
		}, this.clear = function() {
			nI.value = ""
		}, this.nM = function() {
			a6B && navigator.clipboard ? (nI.select(), navigator.clipboard.writeText(nI.value).catch(function() {
				a6B = !1, a6C()
			})) : a6C()
		}, nI.setAttribute("name", name), nI.setAttribute("id", name + "Field"), nI.setAttribute("autocomplete", "off"), nI.setAttribute("placeholder", placeholder), nI.style.top = "0", nI.style.left = "0", nI.style.width = "100%", nI.style.height =
		"100%", nI.style.userSelect = "none", nI.style.outline = "none", nI.style.resize = "none", nI.style.border = "none", nI.style.color = f3.f9, nI.style.backgroundColor = f3.j2, nI.style.fontSize = "1.2em"
}

function a6D() {
	this.w = new a6E, this.a4 = function() {
		let a6F = document.body.firstChild;
		for (; a6F;) {
			var a6G = a6F.nextSibling;
			"DIV" !== a6F.tagName && "INPUT" !== a6F.tagName && "BUTTON" !== a6F.tagName || document.body.removeChild(a6F), a6F = a6G
		}
	}, this.dy = 0;
	let map = new Map;
	this.dx = function(ew, ck = this.dy, pU = void 0) {
		bm.bn = !0, 0 === ew && (0 === cv.cw() ? ew = 5 : di.dj.setState(13)), this.co(), this.dy = ew;
		let bQ = map.get(ew);
		if (!bQ || 4 === ew || 7 === ew || 8 === ew || 9 === ew || 10 === ew || 11 === ew || 13 === ew) {
			if (0 === ew) return void map.clear();
			1 === ew ? bQ = new a3c : 2 === ew ? bQ = new a6H : 3 === ew ? bQ = new nG : 4 === ew || 9 === ew || 10 === ew || 11 === ew || 13 === ew ? bQ = pU : 5 === ew ? bQ = new a6I : 6 === ew ? bQ = new a6J : 7 === ew ? bQ = new a6K : 8 ===
				ew ? bQ = pU : 12 === ew ? bQ = new a6L : 14 === ew && (bQ = new a2L), bQ.ck = ck, map.set(ew, bQ)
		}
		bQ.show(pU)
	}, this.nK = function() {
		this.dr() && this.dx(map.get(this.dy).ck)
	}, this.a2N = function(ew) {
		this.dr() && (this.co(), bm.bn = !0, this.dy = ew, map.get(ew).show())
	}, this.co = function() {
		this.dr() && map.get(this.dy).co()
	}, this.a3k = function() {
		this.dr() && (map.get(this.dy).co(), map.clear(), this.dy = 0, di.dj.setState(13))
	}, this.e1 = function() {
		var bQ;
		this.dr() && (bQ = map.get(this.dy)).e1 && bQ.e1()
	}, this.resize = function() {
		if (!this.dr()) return !1;
		map.get(this.dy).resize()
	}, this.ds = function(c6, c7) {
		var bQ;
		this.dr() && (bQ = map.get(this.dy)).ds && bQ.ds(c6, c7)
	}, this.f1 = function(c6, c7) {
		var bQ;
		this.dr() && (bQ = map.get(this.dy)).f1 && bQ.f1(c6, c7)
	}, this.f2 = function() {
		var bQ;
		this.dr() && (bQ = map.get(this.dy)).f2 && bQ.f2()
	}, this.ig = function(es, et, deltaY) {
		var bQ;
		this.dr() && (bQ = map.get(this.dy)).ig && bQ.ig(es, et, deltaY)
	}, this.ev = function(code) {
		var bQ;
		return !!this.dr() && ((bQ = map.get(this.dy)).ev && bQ.ev(code), !0)
	}, this.cf = function() {
		var bQ;
		this.dr() && (bQ = map.get(this.dy)) && bQ.cf && bQ.cf()
	}, this.dr = function() {
		return 0 < this.dy
	}, this.fh = function() {
		return map.get(this.dy)
	}, this.a6M = function(ew) {
		return map.get(ew)
	}
}

function a6J() {
	let nH, a2M;
	var wB;
	this.show = function() {
		nH.show(), this.resize()
	}, this.co = function() {
		nH.co()
	}, this.resize = function() {
		nH.resize(), a2M.resize()
	}, this.ev = function(dU) {
		2 === dU && nH.nd[0].ne()
	}, nH = new nJ("Login", [new hl("❌ " + hm.hn[92], function() {
		dw.dx(7, dw.a6M(7).ck)
	}, f3.ho), new hl("➡️ Login", function() {
		ex.fT.fU(105, bW.bX.a6O(a2M.a5i[0].fF[0].a2.value, 5)), ex.fT.fU(106, bW.bX.a6O(a2M.a5i[1].fF[0].a2.value, 8)), dw.dx(8, dw.a6M(7).ck, new oW(18))
	}, f3.f4)]), a2M = new a2O(nH.nQ, ((wB = []).push(function() {
		var a2U = new fE;
		return a2U.fG("Account Name"), a2U.fO(new a2Y({
			title: "AccountName",
			value: "",
			ew: -1
		})), a2U
	}()), wB.push(function() {
		let a2U = new fE,
			a6R = (a2U.fG("Password"), new a2Y({
				title: "Password",
				value: "",
				ew: -1
			}));
		return a6R.a2.type = "password", a2U.fO(a6R), a2U.fO(new z([new hl("Show", function() {
			"Show" === this.innerText ? (this.innerText = "Hide", a6R.a2.type = "text") : (this.innerText = "Show", a6R.a2.type = "password")
		}).button])), a2U
	}()), wB))
}

function a6S() {
	var a6T, j6, fs, a6U;

	function a6Z(ew, name, a6a, bO) {
		fs[ew] = name, j6[ew] = new Image, j6[ew].onload = function() {
			! function(ew, a6a) {
				let pU = null,
					pT;
				7 === a6a ? pT = a5.a6d.pW : 8 === a6a ? (pT = a5.a6d.pZ, pU = .1) : 3 === a6a ? (pT = a5.a6d.pX, pU = .06) : 5 === a6a ? pT = a5.a6d.pa : 6 === a6a ? pT = a5.a6d.pV : 4 === a6a && (pT = a5.a6d.pb);
				j6[ew] = a5.a6d.pS(j6[ew], pT, pU)
			}(ew, a6a), a6c()
		}, j6[ew].onerror = function(a2) {
			console.error("Error loading image at index", ew, "Error:", a2), a6c()
		}, j6[ew].src = "data:image/png;base64," + bO
	}

	function a6c() {
		a6T--, a6X()
	}

	function a6X() {
		0 === a6T && (a6T = -1, a4n.lu(), le.a37(), a6e.dW([j6[8], j6[16], j6[7], j6[9], j6[10]], [2 !== di.id, 1 !== di.id, !0, !0, !0]), dM.bt.a4(), bE.a5I(), bm.bn = !0, j6[7] = a6U, j6[8] = a6U, j6[9] = a6U, j6[10] = a6U)
	}
	this.a4 = function() {
		if (void 0 === j6) {
			a6T = 23, j6 = new Array(a6T), fs = new Array(a6T), (a6U = document.createElement("canvas")).width = 1, a6U.height = 1;
			for (var q = a6T - 1; 0 <= q; q--) j6[q] = a6U;
			a6Z(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), a6Z(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), a6Z(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a6Z(3, "orders", 6,
					"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"
					), a6Z(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), a6Z(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				a6Z(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUlJbH11lvH1ltvnZ1CgZo4cWIsXrw4OwMA4As9//zz2QkAAAAAAAAA0GSUZgcAAAAAAAAAAEAhqKysjJYtW2ZnsB4fffRRDBkyJDujSRs7dmy89tpr2RnU0p577hn9+vXLzgCgjvr37x/z58/PzgD4p3fffTcGDBiQnQEA0KQ99NBD8eyzz2ZnAAWguro6xo0bl50BAFArTz/9dHzyySfZGQAAAAAAAADQJBjuAQAAAAAAAACg6HXv3j169eqVnUENbr311pg3b152RpN31VVXZSdQBwMGDIiysrLsDADqYNmyZTF8+PDsDIB/GjVqVCxbtiw7AwCgybvkkkuyE4AC8Ne//jX+8pe/ZGcAANRKdXV1zJ8/PzsDAAAAAAAAAJoEwz0AAAAAAAAAABS9wYMHR4sWLbIzWI8lS5bEsGHDsjOahcsvvzxmz56dnUEtdezY0ec+QBN0/fXXx8SJE7MzAOLPf/5zXHPNNdkZAADNwl133RXTp0/PzgCSjRs3LjsBAKBO3n777ewEAAAAAAAAAGgSDPcAAAAAAAAAAFDUevbsGT179szOoAY333xzLFq0KDuj2XCoXNPyy1/+Mtq2bZudAUAd9e3bN5YsWZKdARSx5cuXxxlnnJGdAQDQrFxyySXZCUCi559/Pu66667sDACAOpkzZ052AgAAAAAAAAA0CYZ7AAAAAAAAAAAoahUVFVFa6jaaQrRw4cI477zzsjOaleuvvz5mzpyZnUEtbbPNNjFmzJjsDADqaO7cuTF69OjsDKCIXX755fHCCy9kZwAANCt33XVX/OUvf8nOAJJcdtll2QkAAHX23HPPZScAAAAAAAAAQJPgxBEAAAAAAAAAAIrWUUcdFfvtt192BjW44YYbYtWqVdkZzc6ll16anUAdHHfccdG5c+fsDADq6NJLL40///nP2RlAEZo5c2YMHjw4OwMAoFkaMWJEVFdXZ2cAjezFF1+MW265JTsDAKDOJk6cGOvWrcvOAAAAAAAAAICCZ7gHAAAAAAAAAICiNXDgwCgpKcnOYD3efffdGDp0aHZGs3TrrbfG9OnTszOopTZt2sTo0aOzMwDYAKecckosWbIkOwMoIqtWrYozzjgjOwMAoNl65JFH4rHHHsvOABrZlVdemZ0AALBB5s+fH++++252BgAAAAAAAAAUPMM9AAAAAAAAAAAUpRNOOCG6du2anUENrrrqqqiqqsrOaLYuvvjiWLduXXYGtXTYYYfFvvvum50BQB29/vrrhgiBRnX55ZfH1KlTszMAAJq1IUOGxCeffJKdATSSF198Ma677rrsDACADfbKK69kJwAAAAAAAABAwTPcAwAAAAAAAABAURo4cGB2AjV466234sILL8zOaNbuvvvuePrpp7MzqKUWLVrEiBEjsjMA2ABXXXVVPPzww9kZQBGYMWNGDBo0KDsDAKDZe+655+KOO+7IzgAawbp166KysjI7AwBgozz33HPZCQAAAAAAAABQ8Az3AAAAAAAAAABQdE4//fTYbbfdsjOoweWXXx7V1dXZGc3e2LFj/XduQr773e/G4Ycfnp0BwAY45ZRTYv78+dkZQDO2fPnyOO2007IzAACKxllnnRVLlizJzgAa2JQpU+LOO+/MzgAA2CgTJ07MTgAAAAAAAACAgme4BwAAAAAAAACAolJaWhpnnHFGdgY1ePnll2PcuHHZGUXh4YcfjsmTJ2dnUEslJSVx/vnnZ2cAsAEWLFgQZ5xxRqxduzY7BWimRo8eHc8++2x2BgBA0Vi0aFFcffXV2RlAA1q7dm0MHTo0OwMAYKNNmTIl3n///ewMAAAAAAAAAChohnsAAAAAAAAAACgqAwcOjE6dOmVnUIPLLrssO6GojBkzJqqqqrIzqKVvfetb8Ytf/CI7A4ANcO+998a1116bnQE0Q48++mhccMEF2RkAAEVn2LBh8corr2RnAA3kD3/4Q0yZMiU7AwCgXsycOTM7AQAAAAAAAAAKmuEeAAAAAAAAAACKRllZWfTt2zc7gxrMnDkzrr/++uyMovL444/HY489lp1BHZx99tlRWurWP4CmqH///vG3v/0tOwNoRubPnx+9e/fOzgAAKErV1dVx7rnnRnV1dXYKUM+WLVsW5557bnYGAEC9+ctf/pKdAAAAAAAAAAAFzbP3AQAAAAAAAAAoGiNHjowddtghO4MaXHTRRdkJRamysjLWrFmTnUEtderUKc4777zsDAA2QHV1dZx00kmxZMmS7BSgGVizZk3069cv5s+fn50CAFC07r///njwwQezM4B6dtVVV8Wrr76anQEAUG8mTJgQVVVV2RkAAAAAAAAAULAM9wAAAAAAAAAAUBTKy8ujd+/e2RnUYPr06XH77bdnZxSladOmxcSJE7MzqIO+fftGeXl5dgYAG+DFF1+MAQMGOBwN2Gjjxo2L+++/PzsDAKDoDRgwwEArNCOzZ8+OIUOGZGcAANSrV199NV5++eXsDAAAAAAAAAAoWIZ7AAAAAAAAAAAoCiNGjIj27dtnZ7Ae69ati8rKyuyMojZixIhYvXp1dga1tO2228bIkSOzMwDYQDfffHNce+212RlAE/bnP/85Bg4cmJ0BAEBEzJ07Ny644ILsDKAeVFVVxaBBg6K6ujo7BQCg3k2ZMiU7AQAAAAAAAAAKluEeAAAAAAAAAACavXbt2sUJJ5yQnUENnnrqqXjooYeyM4rajBkz4sEHH8zOoA5OPPHE6NChQ3YGABuoX79+MW3atOwMoAmaN29eHH/88dkZAAB8ysUXXxxTp07NzgA20n333ef3VQBAs3XHHXdkJwAAAAAAAABAwTLcAwAAAAAAAABAszd69Oho27ZtdgbrUV1dHZWVldkZRMTw4cNj5cqV2RnUUnl5eYwZMyY7A4CNcOyxx8a8efOyM4AmZOXKldG7d29/dwAAFKDTTz89li9fnp0BbKAFCxbEGWeckZ0BANBgnnrqqXj99dezMwAAAAAAAACgIBnuAQAAAAAAAACgWevcuXMcc8wx2RnUYNKkSTFp0qTsDCJi9uzZcd9992VnUAc/+tGPomvXrtkZAGygd955J0466aRYsWJFdgrQRAwdOtT3TwAABWrWrFlx4YUXZmcAG2DdunUxaNCgWLBgQXYKAECD+uMf/5idAAAAAAAAAAAFyXAPAAAAAAAAAADN2rBhw6JNmzbZGazH2rVro7KyMjuDTxk6dGgsX748O4NaatmyZYwcOTI7A4CN8Pjjj8egQYNi3bp12SlAgbv55pvjkksuyc4AAOBzVFZWxlNPPZWdAdTRPffcEzfffHN2BgBAg7vmmmti7dq12RkAAAAAAAAAUHAM9wAAAAAAAAAA0Gx16dIljjzyyOwMavDHP/4xpk6dmp3Bp7z55ptx5513ZmdQBwcddFD06tUrOwOAjXDVVVfFddddl50BFLCpU6dG7969szMAAKiF0047LT744IPsDKCW5s2bF7/4xS+yMwAAGsWcOXPi2Wefzc4AAAAAAAAAgIJjuAcAAAAAAAAAgGarsrIyWrZsmZ3BeqxevTqGDx+encF6VFRUxNKlS7MzqKXS0tKoqKjIzgBgI5122mnxyCOPZGcABeiNN96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2jdGjR2dnAFBPLrjgghgzZkx2BtAIJk6cGMcdd1x2BgAADaCqqiqOPvromD9/fnYKFK0XXnghjjrqqOwMAICCMnz48Fi5cmV2BgAAAAAAAACkM9wDAAAAAAAAAECzMXDgwOwEarBw4cIYMmRIdgYbYOTIkTF37tzsDOrg6KOPjj322CM7A4B6Mnjw4Bg3blx2BtCAHn/88Tj00EOzMwAAaEBz586NPn36xIoVK7JToOgsWLAgfvzjH8eqVauyUwAACsrs2bPj3nvvzc4AAAAAAAAAgHSGewAAAAAAAAAAaBZOP/302G233bIzqMHvfvc7BxI2UdXV1XHttddmZ1AHrVq1ilGjRmVnAFCPfv3rX/v3GJqpKVOmxMEHHxzV1dXZKQAANLBHHnkkBgwYEFVVVdkpUDRWrlwZffr0iVdffTU7BQCgIA0cODDef//97AwAAAAAAAAASGW4BwAAAAAAAACAJq+0tDTOOOOM7Axq8O6770ZFRUV2Bhth7Nix8dprr2VnUAe9evWKnj17ZmcAUI9OO+20+N3vfpedAdSjKVOmxEEHHRRr1qzJTgEAoJFcf/31MXbs2OwMKApr166NX/3qVzFx4sTsFACAgrVgwYL4zW9+k50BAAAAAAAAAKkM9wAAAAAAAAAA0OQNHDgwOnXqlJ1BDa6++uqoqqrKzmAjXXXVVdkJ1EFZWVkMHTo0OwOAenbyyScb74FmwmgPAEDxGjx4cNx8883ZGdCsrVu3LoYNGxbjx4/PTgEAKHhjxoyJmTNnZmcAAAAAAAAAQBrDPQAAAAAAAAAANGllZWXRt2/f7AxqMHfu3Bg7dmx2BvXg8ssvj9mzZ2dnUAf77bdfHHvssdkZANSzk08+OW644YbsDGAjGO0BAODnP/95PPTQQ9kZ0GxdeumlMXr06OwMAIAmY+DAgfHJJ59kZwAAAAAAAABACsM9AAAAAAAAAAA0aSNHjowddtghO4MajBs3Lqqrq7MzqCfjxo3LTqCOzj333OwEABrAKaec4t9laKIeffRRoz0AAERExBFHHBFPP/10dgY0O9ddd12cffbZ2RkAAE3KpEmT4pprrsnOAAAAAAAAAIAUhnsAAAAAAAAAAGiyysvLo3fv3tkZ1GDOnDkOlG9mrr/++pg5c2Z2BnWw++67x4ABA7IzAGgAv/71r2Ps2LGxbt267BSglu655544+OCDjfYAABAREVVVVXHIIYfEc889l50Czcbvfve7OPXUU7MzAACapAEDBsTzzz+fnQEAAAAAAAAAjc5wDwAAAAAAAAAATdaIESOiffv22RnU4LLLLstOoAFceuml2QnUUf/+/aOsrCw7A4AGcO6558b5558fVVVV2SnAF/j9738fP/7xj6O6ujo7BQCAArJs2bL43ve+Fy+++GJ2CjR5t9xyS5x88snZGQAATVZ1dXWceuqpsXz58uwUAAAAAAAAAGhUhnsAAAAAAAAAAGiS2rVrFyeccEJ2BjWYOXNmXHfdddkZNIBbb701pk+fnp1BHey0005RWVmZnQFAA7ngggvi9NNPj1WrVmWnAOtRXV0dF154YfTp0yc7BQCAArV06VLjPbCRbrrppjjxxBOzMwAAmrxnn302hg8fnp0BAAAAAAAAAI3KcA8AAAAAAAAAAE3S6NGjo23bttkZ1ODiiy/OTqABXXzxxbFu3brsDOrglFNOiXbt2mVnANBArrnmmvj5z38eS5cuzU4BPuWTTz6Js846KwYNGpSdAgBAgVuwYIHxHthAN9xwQ5x00knZGQAAzcYll1wS//3f/52dAQAAAAAAAACNxnAPAAAAAAAAAABNTufOneOYY47JzqAG06dPj9tuuy07gwZ09913x9NPP52dQR1stdVWMXr06OwMABrQnXfeGYcddli8++672SlARHz44Ydx0kknxWWXXZadAgBAE/H/H+95/vnns1OgSVi3bl1cdNFFccopp2SnAAA0O8cff3w8++yz2RkAAAAAAAAA0CgM9wAAAAAAAAAA0OQMGzYs2rRpk53Beqxbty5GjRqVnUEjGDt2bFRXV2dnUAc//elPY9ddd83OAKABPfXUU3HAAQfE7Nmzs1OgqL3zzjvxwx/+MG6//fbsFAAAmpgFCxbEAQccEM8880x2ChS0Tz75JM4555w455xzslMAAJqlqqqqOPLII2Pu3LnZKQAAAAAAAADQ4Az3AAAAAAAAAADQpHTp0iWOPPLI7Axq8NRTT8Uf/vCH7AwawcMPPxyTJ0/OzqAOWrdubVgLoAi8/vrr0a1bt5g0aVJ2ChSlv/3tb9GjR4946qmnslMAAGiili1bFj169IjHHnssOwUK0vLly+PUU0+Niy++ODsFAKBZmzdvXhx99NHx/vvvZ6cAAAAAAAAAQIMy3AMAAAAAAAAAQJNSWVkZLVu2zM5gPaqrq6OysjI7g0Y0ZsyYqKqqys6gDg499NDo0aNHdgYADWzZsmXxve99L6655ppYt25ddg4Ujfvuuy+6desW77zzTnYKAABN3Jo1a6JXr15x5513ZqdAQXn//ffjmGOOiRtvvDE7BQCgKDz33HNx7LHHxgcffJCdAgAAAAAAAAANxnAPAAAAAAAAAABNRvfu3aNXr17ZGdRg0qRJMWnSpOwMGtHjjz8ejz32WHYGdbDJJpvE8OHDszMAaCT/9V//Fb/+9a9j5cqV2SnQrH3yyScxcuTIOPLII2PNmjXZOQAANBPV1dXxk5/8JH7zm98YZYWImDNnTnz/+9+PiRMnZqcAABSVSZMmRZ8+feKjjz7KTgEAAAAAAACABmG4BwAAAAAAAACAJmPw4MHRokWL7AzWY+3atVFZWZmdQYLKykqHkzcxPXr0iKOOOio7A4BGcvnll8cRRxwRf//737NToFlatGhR/OxnP4uhQ4dmpwAA0EydeeaZMWDAgFi1alV2CqR55JFH4t///d/j+eefz04BAChK999/f5x44onxwQcfZKcAAAAAAAAAQL0z3AMAAAAAAAAAQJPQs2fP6NmzZ3YGNfjjH/8YU6dOzc4gwbRp02LixInZGdRBSUlJDB48ODsDgEb02GOPxb777ht//vOfs1OgWXnuuefiO9/5Ttx9993ZKQAANHPjxo2LY489NhYtWpSdAo2qqqoqLr/88ujVq1csW7YsOwcAoKjdf//9ccwxx8R7772XnQIAAAAAAAAA9cpwDwAAAAAAAAAATUJFRUWUlrrdpRCtXr06RowYkZ1BohEjRsTq1auzM6iDPffcM/r27ZudAUAjmj9/fhxwwAFxxRVXRFVVVXYONGnV1dUxfvz4+Pd///d49dVXs3MAACgS999/fxxwwAHx4osvZqdAo/jwww+jb9++8atf/So7BQCA/zVp0qQ4+OCDY+7cudkpAAAAAAAAAFBvnGQCAAAAAAAAAEDBO+qoo2K//fbLzqAGDz74YMyYMSM7g0QzZsyIBx98MDuDOjrzzDOjrKwsOwOARta/f//42c9+FgsXLsxOgSbp/fffj1/84hfxi1/8Iqqrq7NzAAAoMrNnz47/9//+n5/H0uzNmjUrvvvd78Z1112XnQIAwGfMmDEjunfvHtOnT89OAQAAAAAAAIB6YbgHAAAAAAAAAICCN3DgwCgpKcnOYD1WrlwZ559/fnYGBWDo0KGxcuXK7AzqoGPHjjF06NDsDAAS3HHHHfHtb387/vznP2enQJMybdq06N69e/zud7/LTgEAoIitWrUqDj/88BgyZEisWrUqOwfqVXV1dfz+97+Prl27xvPPP5+dAwBADebPnx/77bdfTJgwITsFAAAAAAAAADaa4R4AAAAAAAAAAAraCSecEF27ds3OoAZ33313vP7669kZFIA5c+bEfffdl51BHf3yl7+M8vLy7AwAErzzzjtxwAEHxJgxYxz0DF9g9erVcfHFF0f37t3j1Vdfzc4BAICIiBg1alQcdthh8c4772SnQL1YvHhxnHLKKdGnT5+oqqrKzgEA4AtUVVXF8ccfH2eeeWYsW7YsOwcAAAAAAAAANpjhHgAAAAAAAAAACtrAgQOzE6jB8uXLY/DgwdkZFJAhQ4bE8uXLszOog3bt2sXYsWOzMwBIdP7558fBBx8cs2fPzk6BgjRnzpzo1auX700BAChIjz32WHzzm9+MBx98MDsFNsoTTzwR++67b/z+97/PTgEAoI5+85vfxAEHHBDPP/98dgoAAAAAAAAAbBDDPQAAAAAAAAAAFKzTTz89dtttt+wManDrrbfGvHnzsjMoIHPnzo0777wzO4M6Ou6446Jz587ZGQAkmjx5cnzjG9+Ia6+9NtauXZudAwVh7dq1cf3118cee+wRkydPzs4BAIAaLV26NA4//PAYMGBAfPjhh9k5UCcffPBBnHXWWdGzZ894/fXXs3MAANhAzz//fOyzzz5x9dVX+10TAAAAAAAAAE2O4R4AAAAAAAAAAApSaWlpnHHGGdkZ1OCDDz6IoUOHZmdQgAYPHhxLly7NzqAO2rRpE5WVldkZACSrqqqK0047LY444oh47bXXsnMg1Zw5c+Kwww6LX/7yl1FVVZWdAwAAtXLZZZfFfvvtF3/5y1+yU6BWnnjiifj2t78dl156aXYKAAD1oLq6Ovr16xe9evWKWbNmZecAAAAAAAAAQK0Z7gEAAAAAAAAAoCANHDgwOnXqlJ1BDW666aZYtGhRdgYFaMGCBXH77bdnZ1BHRxxxROy7777ZGQAUgIcffjh22223uPrqq2P16tXZOdCoVq1aFVdccUXsscceMXHixOwcAACos9mzZ8d+++0XFRUV8dFHH2XnwHq99957MWDAgOjZs2e8/vrr2TkAANSzxx9/PPbaa68YPnx4fPjhh9k5AAAAAAAAAPCFDPcAAAAAAAAAAFBwysrKom/fvtkZ1GDhwoUxbNiw7AwK2Pnnnx+LFy/OzqAOWrRoEcOHD8/OAKBAVFVVRb9+/eJ73/tezJw5MzsHGsUzzzwTPXv2jP79+0dVVVV2DgAAbJTKysrYb7/94sknn8xOgX9au3Zt3HbbbbH77rvHZZddlp0DAEADGz58eHzrW9+Ke+65J9asWZOdAwAAAAAAAAA1MtwDAAAAAAAAAEDBGTlyZOywww7ZGdTg97//fSxbtiw7gwK2dOnSuOWWW7IzqKMDDzwwDjvssOwMAArIU089FXvvvXdUVFTEkiVLsnOgQbz33ntx1llnxb777hvTpk3LzgEAgHrz4osvxoEHHhinn356LFiwIDuHIjdjxozo1atX/OxnP4vFixdn5wAA0EjefPPN+PGPfxw9evSIxx57LKqrq7OTAAAAAAAAAOD/MNwDAAAAAAAAAEBBKS8vj969e2dnUIN33303hgwZkp1BE3DeeefFwoULszOog5KSkhg8eHB2BgAFqLKyMvbcc8+46667oqqqKjsH6sWaNWtiwoQJsccee8Sll16anQMAAA3mqquuit122y1+//vfxyeffJKdQ5GZP39+DBo0KLp27RqPP/54dg4AAEmeeeaZ+P73vx+HHXZYTJkyxYAPAAAAAAAAAAXFcA8AAAAAAAAAAAVlxIgR0b59++wMavDb3/7WYe3UyqpVq+LGG2/MzqCOvvWtb8XJJ5+cnQFAAZo/f34cc8wx8cMf/jBmzJiRnQMbZerUqXHggQfG8ccfH4sWLcrOAQCABrd06dLo06dPfPe7342pU6dm51AEli5dGpdeeml07tw5LrzwwuwcAAAKxMMPPxz7779/fPe7342HHnrIuCgAAAAAAAAABcFwDwAAAAAAAAAABaNdu3ZxwgknZGdQg7lz58YFF1yQnUETMnjw4Hj33XezM6ijc845J0pL3V4IwPpNnDgxunbtGqeffnq888472TlQJ6+99lqcfPLJ0aNHD4eVAwBQlKZNmxY9evSIn/3sZzFnzpzsHJqhVatWxc033xxdunSJs846K1atWpWdBABAAZoyZUr88Ic/jK5du8ZNN90U77//fnYSAAAAAAAAAEXMM+sBAAAAAAAAACgYo0eP/v+1d7+xVdZ3H8e/lH/lXynyR0qIg9IBxREKI0NhcwQnGsxmdInzwRxOnTP4ZBuJ0WWOEBY3DIpmGhCcLhIwmVnGpixTt2kIgjABp4XBWkFrQRhtaWsLBfrnfnLH3N6Zu2X38Nf293o9O9dJzvXJyXlwnZyT6x3FxcWpZ/AxHnnkkejs7Ew9gx6ko6Mj1q9fn3oG52nSpEnxwx/+MPUMALq5xx57LCZNmhSrVq2KkydPpp4D/9KxY8fiRz/6UZSXl8eTTz6Zeg4AACS3adOmmDZtWtxzzz3x3nvvpZ5DL3DmzJl49tln4wtf+ELccsstcfTo0dSTAADoASorK+Pb3/52lJSUxNKlS+O1116Ljo6O1LMAAAAAAAAAyIxwDwAAAAAAAAAA3UJZWVncdNNNqWfwMQ4ePBiPPPJI6hn0QD/5yU/inXfeST2D87RkyZIYMmRI6hkAdHMdHR1x9913x9SpU2PdunXR0tKSehJ8RH19fTz88MNRWloa999/vxApAAD8Lw888ECUlpbG8uXL49ixY6nn0AOdOnUqNm7cGDNnzoxvfOMbUVlZmXoSAAA9UEdHR6xevTrmzp0bc+bMibVr10ZVVVXqWQAAAAAAAABkQrgHAAAAAAAAAIBuYfny5SIR3djq1atTT6CH6uzsjLVr16aewXkaO3Zs3H///alnANBDnDhxIu6888743Oc+Fxs3boxTp06lnkTmGhsbY82aNTF16tT4wQ9+EG1tbaknAQBAt9XR0RHLly+P0tLSWLFiRdTW1qaeRA/Q3NwcTz31VFRUVMTNN98cBw4cSD0JAIBeYs+ePbFkyZKYMmVKXHHFFbF+/fo4dOhQ6lkAAAAAAAAA9GLCPQAAAAAAAAAAJDd9+vS44YYbUs/gY/z1r3+NdevWpZ5BD/bAAw9EVVVV6hmcp8WLF8f48eNTzwCgB6mpqYmbb745KioqYsOGDdHS0pJ6EplpaGiINWvWxJQpU+Kuu+6K+vr61JMAAKDHaGtri2XLlsWECRPi3nvvjerq6tST6IZqampi5cqVMWnSpLjtttt8TgAAuKC2bdsW3/3ud6OsrCxmz54dK1eujB07dsSpU6dSTwMAAAAAAACgFxHuAQAAAAAAAAAguRUrVsTAgQNTz+BjrFq1KvUEeoFHH3009QTOU1FRUfzsZz9LPQOAHqi6ujoWL14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), a6Z(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a6Z(8,
					"googleplay", 3,
					"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"
					), a6Z(9, "discord", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a6Z(10, "insta",
					3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a6Z(11, "emojis", 4,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a6Z(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a6Z(13, "bestTeam", 5,
					"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"
					), a6Z(14, "bestPlayer", 5,
					"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"
					), a6Z(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), a6Z(16, "apple", 3,
					"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"
					), a6Z(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), a6Z(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), a6Z(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), a6Z(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), a6Z(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), a6Z(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(ew) {
		return j6[ew]
	}, this.jr = function(name) {
		for (var q = fs.length - 1; 0 <= q; q--)
			if (fs[q] === name) return j6[q];
		return a6U
	}, this.dg = function() {
		return a6T <= 0
	}, this.a6W = function() {
		a6T = 0, a6X()
	}
}

function a6g() {
	var hb = 0;
	this.a4 = function() {
		ma.a4(), hb = 0
	}, this.setState = function(a6h) {
		hb = a6h
	}, this.cw = function() {
		return hb
	}, this.mq = function() {
		this.setState(8), w3.jt(), dw.a3k()
	}, this.ev = function(a2) {
		if (!ba.bk) return !1;
		if (!(bm.ca < 400)) {
			if ("Enter" === a2.key || "Escape" === a2.key) {
				if (this.a6i()) return !0;
				if ("Enter" === a2.key) {
					if (0 === hb) return !0;
					if (7 === hb) return !0
				}
			}
			return !1
		}
	}, this.a6j = function() {
		a6k.resize()
	}, this.a6i = function() {
		return !!a6k.co()
	}, this.ds = function(c6, c7) {
		!ba.bk || a6k.ds(c6, c7) || 6 === hb && w5.ds(c6, c7) || 2 === hb && gU.ds(c6, c7) || (mX.ds(c6, c7), 0 !== hb && 7 === hb && w3.ds(c6, c7))
	}, this.f1 = function(c6, c7) {
		if (!mX.a6l) {
			if (2 === hb && gU.f1(c6, c7)) return void mX.mY();
			if (ma.f1(c6, c7, !0)) return
		}
		mX.f1(c6, c7)
	}, this.click = function(c6, c7) {
		mX.vs(), a6e.ds(c6, c7, !1) || a4n.ds(c6, c7)
	}, this.ig = function(c6, c7, deltaY) {}, this.a6m = function() {
		ma.eq(), 0 !== hb && 7 === hb && w3.resize(), bm.bn = !0
	}, this.e1 = function() {
		8 !== hb && 10 !== hb && (e2.imageSmoothingEnabled = !0, this.jp(), 0 !== hb && (mX.e1(), a6n.e1(), this.a6o(), a6e.e1(), a4n.e1()), 0 !== hb && (2 === hb ? gU.e1() : 6 === hb ? w5.e1() : 7 === hb && w3.e1()), a6k.e1(), dw.e1())
	}, this.jp = function() {
		var a6q, a6p;
		if (makeMainMenuTransparent) e2.clearRect(0, 0, dl.bK, dl.bL);
		else ba.bk ? (a6p = dl.bK / ba.bb, a6q = dl.bL / ba.bd, e2.setTransform(a6p = a6q < a6p ? a6p : a6q, 0, 0, a6p, Math.floor((dl.bK - a6p * ba.bb) / 2), Math.floor((dl.bL - a6p * ba.bd) / 2)), e2.drawImage(ba.bo, 0, 0), e2.setTransform(1,
			0, 0, 1, 0, 0), e2.fillStyle = f3.sh) : e2.fillStyle = f3.fn, e2.fillRect(0, 0, dl.bK, dl.bL)
	}, this.a6o = function() {
		var c7 = Math.floor(.3 * dl.bL),
			j6 = df.jr("territorial.io"),
			a4J = (a4J = 1.75 * dl.bL / j6.width) * j6.width < .98 * dl.bK ? .98 * dl.bK / j6.width : a4J,
			c6 = (e2.globalAlpha = .15, e2.imageSmoothingEnabled = !1, Math.floor(.5 * (dl.bK - a4J * j6.width))),
			c6 = Math.floor(c6 / a4J),
			c7 = Math.floor(c7 - .5 * j6.height * a4J),
			c7 = Math.floor(c7 / a4J);
		e2.setTransform(a4J, 0, 0, a4J, c6, c7), e2.drawImage(j6, c6, c7), e2.setTransform(1, 0, 0, 1, 0, 0), e2.globalAlpha = 1, e2.imageSmoothingEnabled = !0
	}
}

function yA() {
	function a6x(bO, a6z = !1) {
		a6z ? eS.zL = "Replay Error: " + bO : dw.dx(4, 3, new hk("⚠️ Replay Error", bO, !0))
	}
	this.bN = function(bO) {
		if (bW.bX.bY(bW.bX.bZ(bW.bX.a6r(bO))), eS.zL = "", ! function() {
				if (bV.size < 10) a6x("File Too Small");
				else if (bV.bc(9) !== nh && a6x("Incompatible Version Error", !0), bV.bc(31) !== bV.size) a6x("Size Error");
				else {
					if (function(bL) {
							var q, s = bV.y,
								c = bV.size,
								qo = 0;
							for (q = 7; q < c; q++) qo = qo + s[q] & 65535;
							return qo === bL
						}(bV.bc(16))) return 1;
					a6x("Hash Error")
				}
				return
			}()) return !1;
		var yB;
		(yB = {}).wc = bV.bc(9), yB.wb = bV.bc(14), yB.mg = bV.bc(4), yB.wd = 1 === bV.bc(1), yB.yC = bV.bc(6), yB.yD = bV.bc(14), yB.a70 = bV.bc(10), aG.aH.yB = yB,
			function() {
				var q, mv, gI, name, c = aG.aH.yB.a70,
					fy = [];
				for (q = 0; q < c; q++) mv = bV.bc(1), gI = [bV.bc(6), bV.bc(6), bV.bc(6)], name = bW.ff.fg(bV.bc(5)), fy.push({
					name: name,
					gI: gI,
					mv: mv
				});
				if (aG.aH.yB.fy = fy, 8 === aG.aH.yB.mg)
					for (q = 0; q < c; q++) fy[q].a01 = bV.bc(14)
			}();
		var q, c, a71 = aG.aH.yB;
		if (1 === a71.fy.length)
			for (c = 6 < a71.mg ? 1 : a71.mg + 2, a71.mj = new Array(c), a71.mk = new Array(c), q = 0; q < c; q++) a71.mj[q] = bV.bc(3), a71.mk[q] = bV.bc(9) + 1;
		return !! function() {
			var bP = bV.bc(5),
				a72 = bV.bc(30),
				a73 = bV.bc(30);
			if (a72 + a73 > 8 * bV.size) return void a6x("Corrupted File");
			return function(c) {
					var q, id, a76 = new Uint8Array(c),
						a77 = new Uint16Array(c),
						a78 = new Uint32Array(c),
						a79 = new Uint32Array(c);
					for (aG.aH.a7A = a76, aG.aH.a7B = a77, aG.aH.a7C = a78, aG.aH.a7D = a79, q = 0; q < c; q++) a76[q] = id = bV.bc(4), a77[q] = bV.bc(9), 0 === id ? a78[q] = bV.bc(22) : 1 === id ? (a78[q] = bV.bc(10), a79[q] = bV.bc(10)) :
						2 === id ? (a78[q] = bV.bc(10), a79[q] = bV.bc(9)) : 3 === id || 4 === id ? (a78[q] = bV.bc(10), a79[q] = bV.bc(22)) : 5 === id || 6 === id ? a78[q] = bV.bc(10) : 7 === id && (a78[q] = bV.bc(1))
				}(a72),
				function(c, bP) {
					var q, a7E = new Uint8Array(c),
						a7F = new Array(c);
					for (a7F.fill(0), aG.aH.a7E = a7E, aG.aH.a7F = a7F, q = 0; q < c; q++) a7E[q] = bV.bc(1), a7F[q] = bV.bc(bP)
				}(a73, bP), 1
		}() && (bV.ew < 8 * bV.size - 13 || bV.ew > 8 * bV.size ? (a6x("Out Of Bounds Error: " + bV.ew + " " + 8 * bV.size), !1) : (aG.aH.nW = bO, !0))
	}
}

function a7G() {
	var kM, kN, kO, kP, a7H = 0,
		a7I = 0;

	function a7L() {
		return Math.pow(Math.pow(kO - kM, 2) + Math.pow(kP - kN, 2), .5)
	}

	function a7J(a2) {
		kM = dl.vh * a2.touches[0].clientX, kN = dl.vh * a2.touches[0].clientY, kO = dl.vh * a2.touches[1].clientX, kP = dl.vh * a2.touches[1].clientY
	}
	this.vT = function(a2) {
		return 1 < a2.touches.length ? (a7I = bm.ca, a7H = 3, a7J(a2), le.co(), !0) : (a7H = 0, !1)
	}, this.vU = function(a2) {
		var a7K, dt, du;
		return 0 !== d.jc && 1 < a2.touches.length && (a7H = Math.max(a7H - 1, 0), eK.ih() && (a7K = a7L(), a7J(a2), a2 = a7L(), dt = Math.floor((kM + kO) / 2), du = Math.floor((kN + kP) / 2), j0.io(dt, du, Math.max(.125, a2) / Math.max(.125,
			a7K)), bm.bn = !0), !0)
	}, this.vu = function() {
		var c6, c7;
		return !!(a7H && (a7H = 0, bm.ca < a7I + 500)) && (c6 = (kM + kO) / 2, c7 = (kN + kP) / 2, le.vo(c6, c7), le.click(c6, c7, !0) && (bm.bn = !0), !0)
	}
}

function a6H() {
	let nH, a2M, wB;
	this.show = function() {
		nH.show(), this.resize()
	}, this.co = function() {
		nH.co()
	}, this.resize = function() {
		nH.resize(), a2M.resize()
	}, this.ev = function(dU) {
		2 === dU && nH.nd[0].ne()
	}, nH = new nJ("⚙️ " + hm.hn[81], [new hl("💾 " + hm.hn[97], function() {
		dw.dx(1)
	}, f3.f4), new hl("🔄 " + hm.hn[98], function() {
		dw.a3k(), ex.fT.hH(), dw.dx(2)
	})]);
	{
		let a2U;
		wB = [], (a2U = new fE).fG(hm.hn[99]), a2U.fH(hm.hn[100]), wB.push(a2U), (a2U = new fE).fG(ex.ey.data[0].title), a2U.fL(new a2f(ex.ey.data[0])), wB.push(a2U), (a2U = new fE).fG(ex.ey.data[10].title), a2U.fL(new a2f(ex.ey.data[10])), wB.push(
			a2U), (a2U = new fE).fG(ex.ey.data[1].title), a2U.fL(new a2f(ex.ey.data[1])), wB.push(a2U), (a2U = new fE).fG(ex.ey.data[9].title), a2U.fL(new a2f(ex.ey.data[9])), wB.push(a2U), (a2U = new fE).fG(ex.ey.data[11].title), a2U.fL(new a2f(
			ex.ey.data[11])), wB.push(a2U), (a2U = new fE).fG(ex.ey.data[2].title), a2U.fO(new pP(ex.ey.data[2])), wB.push(a2U), (a2U = new fE).fG(ex.ey.data[7].title), a2U.fO(new pP(ex.ey.data[7])), wB.push(a2U), (a2U = new fE).fG(ex.ey.data[8]
			.title), a2U.fO(new pP(ex.ey.data[8])), wB.push(a2U), (a2U = new fE).fG(ex.ey.data[5].title), a2U.fO(new a2Y(ex.ey.data[5])), wB.push(a2U)
	}
	a2M = new a2O(nH.nQ, wB)
}

function a7N() {
	var fs, a7O;
	this.a4 = function() {
		fs = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var q, gT, cS = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			a7P = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (a7O =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), q = fs.length - 1; 0 <= q; q--)
			for (gT = cS.length - 1; 0 <= gT; gT--) fs[q] = fs[q].replace(cS[gT], a7P[gT]);
		if (settings.realisticNames) fs = realisticNames;
	}, this.j = function() {
		var q;
		if (g0.cy && g0.cE.a7Q)
			for (q = d.e; q < d.b4; q++) p.zj[q] = p.gP[q] = g0.cE.a7Q[q % d.dH];
		else(9 === d.k ? function() {
			var q, fA = cU.random(),
				c = fs.length,
				bQ = d.e + g4.dD;
			for (q = bQ - 1; q >= d.e; q--) p.zj[q] = p.gP[q] = fs[(q + fA) % c];
			for (c = a7O.length, q = bQ; q < d.b4; q++) p.zj[q] = p.gP[q] = a7O[q % c]
		} : d.e8 ? function() {
			var q, fA = cU.random();
			for (q = d.e; q < d.b4; q++) p.zj[q] = p.gP[q] = fs[(q + fA) % d.b4]
		} : function() {
			var q, c = fs.length,
				fA = cU.random();
			for (q = d.e; q < d.b4; q++) p.zj[q] = p.gP[q] = fs[(q + fA) % c]
		})()
	}
}

function o3() {
	this.a7V = function() {
		i.j(39), i.l(1, 0), i.l(6, 16), v.cs.iG(), v.w.send(0, i.y)
	}, this.a7W = function(cj) {
		i.j(115), i.l(1, 0), i.l(6, 17), bW.bX.a7a(ex.ey.data[105].value, 5), bW.bX.a7a(ex.ey.data[106].value, 8), i.l(30, ex.ey.data[109].value), v.w.send(cj, i.y)
	}, this.a7Y = function() {
		i.j(55), i.l(1, 0), i.l(6, 18), bW.bX.pn(ex.ey.data[110].value), v.w.send(0, i.y)
	}, this.a7Z = function(username) {
		i.j(12 + 16 * username.length), i.l(1, 0), i.l(6, 20), v.cs.pj(username), v.w.send(0, i.y)
	}
}

function z4() {
	this.cf = function() {
		a6n.cf(), w5.cf(), dl.cf(), v.w.cf(), hu.jo(), bm.bn && (bm.bn = !1, cv.e1())
	}
}

function a6E() {
	this.ey = {}, this.a7b = function() {
		dw.dx(5, 5)
	}, this.a7c = function() {
		dw.a3k(), gU.a4()
	}, this.a7d = function() {
		dw.a3k(), w5.a7e(ex.ey.data[10].value), w5.a4()
	}, this.yR = function() {
		dw.dx(0 === cv.cw() ? 5 : 0)
	}, this.a2W = function() {
		if (1 === ex.ey.data[130].value) dw.dx(8, dw.fh().ck, new oW(24, {
			pl: ex.ey.data[125].value,
			oY: ex.ey.data[128].value,
			oZ: ex.ey.data[129].value,
			ya: ex.ey.data[127].value
		}));
		else {
			let gH = ex.ey.data[126].value.split(",");
			gH = gH.slice(0, 10);
			for (let q = 0; q < gH.length; q++) gH[q] = gH[q].trim().slice(0, 7).toUpperCase();
			1 === gH.length && 0 === gH[0].length && (gH = []), dw.dx(8, dw.fh().ck, new oW(23, {
				pl: ex.ey.data[125].value,
				fw: gH,
				ya: ex.ey.data[127].value
			}))
		}
	}, this.a3n = function(ck, target) {
		dw.dx(4, ck, new hk("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + dZ.a3u +
			"' target='_blank'>" + dZ.a3u + "</a>", !1, [new hl("❌ " + hm.hn[92], function() {
				dw.dx(ck)
			}), new hl("✅ " + hm.hn[0], function() {
				ex.fT.fU(140, 1), 0 === target ? dw.dx(2, ck) : dw.dx(8, ck, new oW(target))
			})]))
	}
}

function a7f() {
	this.a5Q = function() {
		var a7i, a7j;
		return !(h5 < 3 || p.r[a0j[0]] >= d.wX >> 1) && (d.ag ? (a7i = ak.a2F(), a7j = ak.a2G(lx.rF()), !(a7i <= 2 * a7j)) : function() {
			var a7i = ak.a2F();
			if (2 * p.eE[a0j[0]] >= a7i) return !1;
			return !0
		}())
	}
}

function a7k(data) {
	let nH, a7l;

	function a7m(qC) {
		let oY;
		oY = qC < 0 ? parseInt(data.data[0][0]) - 1 + qC : parseInt(data.data[data.data.length - 1][0]), dw.dx(8, 0, new oW(21, {
			oX: data.oX,
			oY: oY,
			oZ: oY + Math.abs(qC) - 1
		}))
	}
	var a1S;
	this.show = function() {
		nH.show(), this.resize()
	}, this.co = function() {
		nH.co()
	}, this.resize = function() {
		nH.resize(), a7l.resize()
	}, this.ev = function(dU) {
		2 === dU && nH.nd[0].ne()
	}, a1S = [new hl("❌ " + hm.hn[92], function() {
		dw.nK()
	}), new hl("⬆️ Prev 100 (🧈 1.01)", function() {
		a7m(-100)
	}), new hl("⬆️ Prev 10 (🧈 0.11)", function() {
		a7m(-10)
	}), new hl("⬇️ Next 10 (🧈 0.11)", function() {
		a7m(10)
	}), new hl("⬇️ Next 100 (🧈 1.01)", function() {
		a7m(100)
	}), new hl("🛠️ Custom", function() {
		dw.dx(11, 10, new a7n({
			oX: data.oX
		}))
	})], nH = new nJ(data.title, a1S), a7l = new w7(nH.nQ, data.data)
}

function a7o() {
	var a7p;

	function a84(dX, a4J, c6, c7, globalAlpha) {
		ba.bi.save(), ba.bi.globalAlpha = globalAlpha, ba.bi.imageSmoothingEnabled = !1, ba.bi.scale(a4J, a4J), ba.bi.drawImage(dX, Math.floor(c6 * (ba.bb / a4J - dX.width)), Math.floor(c7 * (ba.bd / a4J - dX.height))), ba.bi.restore()
	}
	this.a0I = 0, this.a0J = 0, this.a0L = 0, this.a0M = 0, this.a4 = function() {
		(a7p = new Array(ba.a7q))[0] = {
			bK: [0, 5e3, 8e3, 1e4],
			fA: [220, 250, 255, 220],
			fB: [190, 220, 0, 0],
			fC: [170, 200, 0, 0]
		}, a7p[1] = {
			bK: [0, 4e3, 5e3, 6e3, 1e4],
			fA: [25, 0, 100, 0, 25],
			fB: [25, 0, 0, 0, 25],
			fC: [25, 0, 0, 0, 25]
		}, a7p[2] = {
			bK: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			fA: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			fB: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			fC: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, a7p[3] = {
			bK: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			fA: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			fB: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			fC: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, a7p[4] = {
			bK: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			fA: [10, 10, 20, 10, 10, 170, 212],
			fB: [20, 20, 60, 100, 100, 110, 170],
			fC: [70, 70, 160, 30, 30, 60, 120]
		}, a7p[5] = {
			bK: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			fA: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			fB: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			fC: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, a7p[6] = {
			bK: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			fA: [10, 10, 60, 255, 255, 200, 200],
			fB: [10, 10, 60, 255, 255, 200, 200],
			fC: [80, 80, 255, 255, 255, 200, 200]
		}, a7p[7] = {
			bK: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			fA: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			fB: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			fC: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, a7p[8] = {
			bK: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			fA: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			fB: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			fC: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, a7p[9] = {
			bK: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			fA: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			fB: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			fC: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, a7p[20] = {
			bK: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			fA: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			fB: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			fC: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}
	}, this.a7r = function() {
		var a83, q, gT, ut, oM = function() {
				var oM;
				return ba.bo = document.createElement("canvas"), ba.bo.width = ba.bb, ba.bo.height = ba.bd, ba.bi = ba.bo.getContext("2d", {
					alpha: !1
				}), oM = ba.bi.getImageData(0, 0, ba.bb, ba.bd), ba.bp = oM.data, oM
			}(),
			bK = a7p[ba.cG].bK,
			fA = a7p[ba.cG].fA,
			fB = a7p[ba.cG].fB,
			fC = a7p[ba.cG].fC,
			dS = a7w.a7x(),
			c = bK.length - 2,
			a7y = new Array(1 + c),
			a7z = new Array(1 + c),
			a80 = new Array(1 + c),
			a81 = new Array(1 + c);
		for (gT = c; 0 <= gT; gT--) a7y[gT] = bK[gT + 1] - bK[gT], a7z[gT] = fA[gT + 1] - fA[gT], a80[gT] = fB[gT + 1] - fB[gT], a81[gT] = fC[gT + 1] - fC[gT];
		for (q = ba.bb * ba.bd - 1; 0 <= q; q--)
			for (gT = c; 0 <= gT; gT--)
				if (dS[q] >= bK[gT]) {
					ut = dS[q] - bK[gT], ba.bp[4 * q] = fA[gT] + kE(a7z[gT] * ut, a7y[gT]), ba.bp[4 * q + 1] = fB[gT] + kE(a80[gT] * ut, a7y[gT]), ba.bp[4 * q + 2] = fC[gT] + kE(a81[gT] * ut, a7y[gT]), ba.bp[4 * q + 3] = 255;
					break
				} ba.bi.putImageData(oM, 0, 0), ba.a7u(ba.cG) && df.dg() && ba.a7u(ba.cG) && (oM = df.jr("arena"), a83 = df.jr("territorial.io"), a84(oM, 5, .5, .5, .1), a84(a83, 2, .5, .45, .1)), ba.bk = !0, bm.bn = !0
	}, this.wi = function() {
		for (var s, c6, c7, a85, a86, uu, a0J = 0, bK = ba.bb, bL = ba.bd, ut = bK * bL * 4, a87 = pL, a88 = ba.bp, q = bK - 1; 0 <= q; q--) a87[(s = q << 2) + 2] = a87[ut - s - 2] = 3;
		for (ut = 4 * bK, q = bL - 1; 0 <= q; q--) a87[(s = q * ut) + 2] = a87[s + ut - 2] = 3;
		for (a85 = bK - 1, a86 = bL - 1, c7 = 1; c7 < a86; c7++)
			for (ut = c7 * bK, c6 = 1; c6 < a85; c6++) uu = 1 - (a88[(s = ut + c6 << 2) + 2] > a88[s + 1] && a88[s + 2] > a88[s]), a87[s + 2] = 2 - uu, a0J += uu;
		this.a0I = (bK - 2) * (bL - 2), this.a0M = 0, ba.a89(ba.cG) && function() {
			var s, c6, c7, ut, a87 = pL,
				a88 = ba.bp,
				bK = ba.bb,
				a85 = bK - 1,
				a86 = ba.bd - 1,
				dJ = 0;
			for (c7 = 1; c7 < a86; c7++)
				for (ut = c7 * bK, c6 = 1; c6 < a85; c6++) a88[s = ut + c6 << 2] === a88[1 + s] && a88[s] === a88[2 + s] && (dJ++, a87[2 + s] = 3);
			wh.a0M = dJ
		}(), this.a0J = d.wX = a0J - this.a0M, this.a0L = this.a0I - this.a0J - this.a0M
	}
}

function a8B() {
	this.w = new oF, this.a2k = new n7, this.a4 = function() {
		this.w.a4()
	}, this.cf = function() {
		0 !== this.w.n8 && this.w.n8--
	}
}

function yx() {
	this.fU = function(ew, value) {
		ex.ey.data[ew].value !== value && (ex.ey.ez(ew, value), 0 === ew ? (dw.a3k(), hm.a4(), dw.dx(2)) : 1 === ew ? dl.f0(1) : 2 === ew ? dl.f0(0) : 5 === ew && (a5.a6.xs(), dl.f0(0)))
	}, this.hH = function() {
		for (var data = ex.ey.data, q = 0; q < 100; q++) data[q] && ex.ey.ez(q, data[q].z9);
		a5.a6.xs(), dl.f0(1), hm.a4()
	}, this.hI = function() {
		var data = ex.ey.data;
		for (let q = 0; q < data.length; q++) data[q] && ex.ey.fU(q, data[q].z9)
	}
}

function a8C() {
	this.id = new v7, this.a4 = function() {
		this.id.a4()
	}
}

function a8D() {
	var el, a8E, j9, bL, a8F;

	function a8H(q) {
		let a8I = !0,
			g5 = f3.f9;
		el[q].aN === d.b4 ? el[q].j7.fillStyle = f3.sr : (ol.om(el[q].aN), el[q].j7.fillStyle = a5.color.sg(aW.a8J[0], aW.a8J[1], aW.a8J[2], .87), 400 < a5.bq.a8K(aW.a8J, 0, 2) && (a8I = !1, g5 = f3.fn));
		var bK = el[q].j6.width,
			dh = (el[q].j7.clearRect(0, 0, bK, bL), el[q].j7.fillRect(0, 0, bK, bL), el[q].j7.fillStyle = g5, ! function(j7, bK, bL) {
				j7.fillRect(0, 0, bK, 1), j7.fillRect(0, bL - 1, bK, 1), j7.fillRect(0, 0, 1, bL), j7.fillRect(bK - 1, 0, 1, bL)
			}(el[q].j7, bK, bL), a8E + 2 * bL < bK && (el[q].j7.fillRect(bK - a8E - bL, 0, 1, bL), el[q].j7.fillText(p.zj[el[q].aN], Math.floor((bK - a8E) / 2), Math.floor(.57 * bL))), 0 !== el[q].id ? 0 : bL);
		el[q].j7.fillText(a5.gN.jO(el[q].gd), Math.floor(bK - a8E / 2 - dh), Math.floor(.57 * bL)),
			function(q, bK, dh, a8I) {
				el[q].j7.fillStyle = a8I ? f3.kf : f3.lQ;
				a8I = Math.floor(a8E * el[q].gd / el[q].a8P);
				el[q].j7.fillRect(Math.floor(bK - a8E - dh), bL - a8F, a8I, a8F)
			}(q, bK, dh, a8I), 0 === el[q].id ? (a8N(q, bK, a8I, g5), function(q, bK, a8I) {
				el[q].j7.strokeStyle = a8I ? f3.sw : f3.t2, el[q].j7.fillRect(bL, 0, 1, bL);
				a8I = bK - bL;
				el[q].j7.beginPath(), el[q].j7.moveTo(Math.floor(.3 * bL + a8I), Math.floor(bL / 2)), el[q].j7.lineTo(Math.floor(bL - .3 * bL + 0 + a8I), Math.floor(bL / 2)), el[q].j7.stroke(), el[q].j7.beginPath(), el[q].j7.moveTo(Math.floor(
					bL / 2 + a8I), Math.floor(.3 * bL)), el[q].j7.lineTo(Math.floor(bL / 2 + a8I), Math.floor(bL - .3 * bL + 0)), el[q].j7.stroke()
			}(q, bK, a8I)) : a8N(q, 2 * bL, a8I, g5)
	}

	function a8N(q, bK, a8I, g5) {
		el[q].j7.strokeStyle = el[q].a8Q ? f3.sp : a8I ? f3.t5 : f3.t6, el[q].j7.fillStyle = g5, el[q].j7.fillRect(bK - bL, 0, 1, bL), el[q].j7.lineWidth = Math.max(Math.floor(bL / 12), 3), el[q].j7.lineCap = "round";
		a8I = .35;
		bK = bL + 1, el[q].j7.beginPath(), el[q].j7.moveTo(Math.floor(bK - a8I * bL + 0), Math.floor(a8I * bL)), el[q].j7.lineTo(Math.floor(bK - bL + a8I * bL), Math.floor(bL - a8I * bL + 0)), el[q].j7.stroke(), el[q].j7.beginPath(), el[q].j7.moveTo(
			Math.floor(bK - bL + a8I * bL), Math.floor(a8I * bL)), el[q].j7.lineTo(Math.floor(bK - a8I * bL + 0), Math.floor(bL - a8I * bL + 0)), el[q].j7.stroke()
	}

	function a8b(c) {
		for (var gd, q = c - 1; 0 <= q; q--) gd = aU.uF(d.eC, q), el[q].gd !== gd && (el[q].gd = gd, el[q].a8P = gd > el[q].a8P ? gd : el[q].a8P, el[q].jA = !0)
	}

	function a8G(a8d) {
		a8d.j6 = document.createElement("canvas"), ba.bi.font = j9;
		var bK = a8E;
		a8d.aN < d.b4 && 0 === a8d.id && (bK += Math.floor(ba.bi.measureText(p.zj[a8d.aN] + "000").width)), bK += bL, 0 === a8d.id && (bK += bL), a8d.j6.width = bK, a8d.j6.height = bL, a8d.j7 = a8d.j6.getContext("2d", {
			alpha: !0
		}), a8d.j7.font = j9, a5.a6.textBaseline(a8d.j7, 1), a5.a6.textAlign(a8d.j7, 1)
	}

	function a8X(q) {
		return wl.kc() ? dl.bK - el[q].j6.width - dq.gap : wl.c6
	}

	function a8Y(q) {
		return Math.floor(2 * dq.gap + (wl.kc() ? eH.bL + dq.gap : 0) + wl.bL + q * (1.3 * bL))
	}
	this.a4 = function() {
		el = [], this.resize()
	}, this.resize = function() {
		j9 = eS.j9, bL = eS.fontSize + 5, bL = Math.floor(1.25 * bL), di.dj.dk() && (bL = Math.floor(1.25 * bL)), a8F = Math.floor(.15 * bL), ba.bi.font = j9, a8E = Math.floor(ba.bi.measureText("02 000 000 0000").width);
		for (var q = el.length - 1; 0 <= q; q--) a8G(el[q]), a8H(q)
	}, this.eV = function() {
		for (var q = el.length - 1; 0 <= q; q--) el[q].jA && (el[q].jA = !1, a8H(q))
	}, this.ds = function(es, c7) {
		if (2 !== d.jc && 0 !== p.eA[d.eC] && !d.eJ && ol.rB(d.eC))
			for (var a8S, a8T, a8U, a8V = di.dj.dk() ? bL : 0, a8W = di.dj.dk() ? Math.floor(.15 * bL) : 0, q = el.length - 1; 0 <= q; q--)
				if (a8S = a8X(q), a8T = a8Y(q), a8U = el[q].j6.width, a8T - a8W <= c7 && c7 <= a8T + bL + a8W) {
					if (a8S - a8V <= es && es <= a8S + bL + a8V) return el[q].a8Q || (el[q].jA = !0, el[q].a8Q = !0, 0 === el[q].id && h7.ec.b3(el[q].aN)), !0;
					if (0 === el[q].id && a8S + a8U - bL - a8V <= es && es <= a8S + a8U + a8V) return h7.ec.aL(eF.jN(), el[q].aN), !0
				} return !1
	}, this.cf = function() {
		var c;
		2 !== d.jc && 0 !== p.eA[d.eC] && !d.eJ && ol.rB(d.eC) && (function(c) {
			if (el.length !== c) return 1;
			for (var q = c - 1; 0 <= q; q--)
				if (el[q].id !== aU.tv(d.eC, q) || el[q].aN !== aU.tw(d.eC, q)) return 1;
			return
		}(c = aU.tu(d.eC)) && function(c) {
			var q, id, aN, fC, gd, zU = [];
			loop: for (q = 0; q < c; q++) {
				for (id = aU.tv(d.eC, q), aN = aU.tw(d.eC, q), fC = 0; fC < el.length; fC++)
					if (el[fC].id === id && el[fC].aN === aN) {
						zU.push(el.splice(fC, 1)[0]);
						continue loop
					} gd = aU.uF(d.eC, q), a8G(gd = {
					aN: aN,
					gd: gd,
					a8P: gd,
					id: id,
					jA: !0,
					a8Q: !1,
					j6: null,
					j7: null
				}), zU.push(gd)
			}
			el = zU
		}(c), a8b(c))
	}, this.a8e = function(s) {
		for (var c = Math.min(el.length, aU.tu(d.eC)), q = 0; q < c; q++)
			if (el[q].aN === s) return void(el = [])
	}, this.e1 = function() {
		if (0 !== p.eA[d.eC] && ol.rB(d.eC) && !d.eJ)
			for (var q = el.length - 1; 0 <= q; q--) e2.drawImage(el[q].j6, a8X(q), a8Y(q))
	}
}

function a8f() {
	this.bK = 0, this.bL = 0, this.dh = 0, this.dn = 0, this.a8g = 0, this.a8h = 0, this.dp = 0, this.kQ = 0, this.a8i = 0, this.a8j = 0, this.a8k = 0, this.a8l = 0, this.a8m = 0, this.ew = 0, this.dV = ["Territory", "Balance", "Interest",
		"Numbers"], this.dr = !1, this.a8n = -1, this.a8o = !1, this.a8p = [0, 0], this.a4 = function() {
			this.dr = !1, this.a8n = -1, this.a8o = !1, this.resize()
		}, this.resize = function() {
			this.bK = dl.bK < 1.369 * dl.bL ? dl.bK : 1.369 * dl.bL;
			var bs = di.dj.dk() && dl.bK < dl.bL ? 1 : di.dj.dk() ? .8 : dl.bK < dl.bL ? .65 : .59;
			this.bK = Math.floor(bs * this.bK), this.bK -= di.dj.dk() && dl.bK < dl.bL ? 2 * dq.gap + 2 : 0, this.bL = Math.floor(this.bK / 1.369), this.a8m = Math.floor(this.bL / 150), this.a8m = Math.max(this.a8m, 1.5), this.dh = Math.floor(1 +
					.02 * this.bK), this.dn = Math.floor(1 + .04 * this.bK), this.dp = this.dn, this.kQ = Math.floor(1 + .075 * this.bK), this.a8j = Math.floor(1 + .1125 * this.bK), this.a8k = Math.floor(this.bK * (di.dj.dk() ? .03 : .029)), this
				.a8k = Math.max(this.a8k, 4), this.a8l = Math.floor(.035 * this.bK), this.a8l = Math.max(this.a8l, 4), this.a8i = this.bL - 2 * this.dp - this.kQ - this.a8j, this.dr && this.a8q()
		}, this.ds = function(es, et) {
			var kj, a3Z;
			return !!this.dr && (a3Z = es, kj = et, es -= dG(dl.bK - this.bK, 2), et -= dG(dl.bL - this.bL, 2), es < 0 || et < 0 || es >= this.bK || et >= this.bL || es >= this.bK - this.a8j && et < this.a8j ? 1 < jQ.ds(a3Z, kj) || this.co() : et <
				this.a8j || (et < this.bL - this.kQ ? (this.a8o = !0, this.a8n = (es - 2 * this.dh - this.a8g) / this.a8h, 3 !== this.ew && (bm.bn = !0)) : (a3Z = (a3Z = Math.floor(es / (this.bK / this.dV.length))) < 0 ? 0 : a3Z >= this.dV
					.length ? this.dV.length - 1 : a3Z) !== this.ew && (this.ew = a3Z, this.a8q(), bm.bn = !0)), !0)
		}, this.vx = function() {
			var a8r = Math.floor((this.a8p[0] + iK) / iJ),
				a8s = Math.floor((this.a8p[1] + iL) / iJ);
			a8r < 1 || a8s < 1 || a8r >= ba.bb - 1 || a8s >= ba.bd - 1 || console.log(a8r + " " + a8s)
		}, this.f1 = function(es, et) {
			return this.a8p[0] = es, this.a8p[1] = et, !(!this.dr || !this.a8o || (es -= dG(dl.bK - this.bK, 2), et = this.a8n, this.a8n = (es - 2 * this.dh - this.a8g) / this.a8h, (0 <= this.a8n && this.a8n <= 1 || 0 <= et && et <= 1) && (bm.bn = !
				0), 0))
		}, this.vs = function() {
			this.a8o && (this.a8o = !1)
		}, this.m1 = function() {
			this.dr ? this.co() : this.show()
		}, this.show = function() {
			ab.a3l < 2 || (this.dr = !0, this.a8q())
		}, this.co = function() {
			this.dr = !1, this.a8n = -1, bm.bn = !0
		}, this.a8q = function() {
			this.ew < 2 ? this.a8g = oS.measureText(a5.gN.jO(ab.max[this.ew]), a5.a6.jD(0, this.a8k)) : 2 === this.ew && (this.a8g = oS.measureText(a5.gN.jP(6, 2), a5.a6.jD(0, this.a8k))), this.a8h = this.bK - 2 * this.dh - this.a8g - this.dn
		}, this.lu = function() {
			this.dr && this.a8q()
		}, this.e1 = function() {
			this.dr && this.m6()
		}, this.m6 = function() {
			var c6 = dG(dl.bK - this.bK, 2),
				c7 = dG(dl.bL - this.bL, 2);
			e2.setTransform(1, 0, 0, 1, c6, c7), e2.fillStyle = f3.f5, e2.fillRect(0, this.a8j, this.bK, this.bL - this.a8j), this.a8t(), this.a8u(), e2.strokeRect(0, 0, this.bK, this.bL), a5.a6.textAlign(e2, 2), e2.font = a5.a6.jD(0, this.a8k),
				0 === this.ew ? this.a8v(ab.rT, c6, c7) : 1 === this.ew ? this.a8v(ab.kV, c6, c7) : 2 === this.ew ? this.a8w(c6, c7) : 3 === this.ew && (this.a8x(c6, c7), this.a8y(c6, c7)), jQ.yf(Math.floor(c6 + this.bK - .725 * this.a8j), Math
					.floor(c7 + .275 * this.a8j), Math.floor(.45 * this.a8j)), e2.setTransform(1, 0, 0, 1, 0, 0)
		}, this.a8t = function() {
			var q, hh;
			for (e2.lineWidth = this.a8m, a5.a6.textBaseline(e2, 1), a5.a6.textAlign(e2, 1), e2.strokeStyle = f3.f9, e2.font = a5.a6.jD(1, this.a8l), hh = this.bK / this.dV.length, e2.fillStyle = f3.t0, e2.fillRect(this.ew * hh, this.bL - this.kQ,
					hh, this.kQ), e2.fillStyle = f3.f9, e2.fillRect(0, this.bL - this.kQ - .5 * this.a8m, this.bK, this.a8m), q = 1; q <= 3; q++) e2.fillRect(q * hh, this.bL - this.kQ, this.a8m, this.kQ);
			for (q = this.dV.length - 1; 0 <= q; q--) e2.fillText(this.dV[q], (q + .5) * hh, this.bL - .46 * this.kQ)
		}, this.a8u = function() {
			e2.fillStyle = f3.tE, e2.fillRect(0, 0, this.bK, this.a8j), e2.fillStyle = f3.f9, e2.fillRect(0, this.a8j - .5 * this.a8m, this.bK, this.a8m), e2.font = a5.a6.jD(1, .39 * this.a8j), e2.fillText("Statistics", Math.floor(this.bK / 2), Math
				.floor(.55 * this.a8j))
		}, this.a8v = function(gH, c6, c7) {
			var bQ = ab.max[this.ew],
				iz = (e2.setTransform(1, 0, 0, 1, c6 + 2 * this.dh + this.a8g, c7 + this.dp + this.a8j), e2.lineWidth = 2, this.a8i / Math.sqrt(bQ));
			e2.beginPath(), e2.moveTo(this.a8h, this.a8i - iz * Math.sqrt(gH[ab.a3l - 1]));
			for (var q = ab.a3l - 2; 0 <= q; q--) e2.lineTo(q * this.a8h / (ab.a3l - 1), this.a8i - iz * Math.sqrt(gH[q]));
			e2.stroke();
			c6 = this.yf(gH, iz, .5);
			c6 < .95 && e2.fillText(a5.gN.jO(bQ), -this.dh, 0), .05 < Math.abs(c6 - .5) && e2.fillText(a5.gN.jO(Math.floor(bQ / 4)), -this.dh, Math.floor(this.a8i / 2)), .05 < c6 && e2.fillText("0", -this.dh, this.a8i)
		}, this.a8w = function(c6, c7) {
			e2.setTransform(1, 0, 0, 1, c6 + 2 * this.dh + this.a8g, c7 + this.dp + this.a8j), e2.lineWidth = 2;
			var iz = this.a8i / Math.max(ab.max[this.ew], 1);
			e2.beginPath(), e2.moveTo(this.a8h, this.a8i - iz * ab.a30[ab.a3l - 1]);
			for (var q = ab.a3l - 2; 0 <= q; q--) e2.lineTo(q * this.a8h / (ab.a3l - 1), this.a8i - iz * ab.a30[q]);
			e2.stroke();
			c6 = this.yf(ab.a30, iz, 1), c7 = ab.max[this.ew] / 100;
			c6 < .95 && e2.fillText(a5.gN.jP(c7, 2), -this.dh, 0), .05 < Math.abs(c6 - .5) && e2.fillText(a5.gN.jP(c7 / 2, 2), -this.dh, Math.floor(this.a8i / 2)), .05 < c6 && e2.fillText(a5.gN.jP(0, 2), -this.dh, this.a8i)
		}, this.a8x = function(c6, c7) {
			e2.setTransform(1, 0, 0, 1, c6 + .34 * this.bK, c7 + 2 * this.dp + this.a8j), a5.a6.textAlign(e2, 2);
			for (var a8z = this.bL - 4 * this.dp - this.kQ - this.a8j, q = 7; 0 <= q; q--) e2.fillText(ab.a90[q], 0, q * a8z / 7);
			e2.setTransform(1, 0, 0, 1, c6 + .39 * this.bK, c7 + 2 * this.dp + this.a8j), a5.a6.textAlign(e2, 0);
			c6 = ab.eD[1];
			for (e2.fillText(a5.gN.jP(ab.eD[0] / (10 * (c6 < 1 ? 1 : c6)), 1), 0, 0), q = 6; 1 <= q; q--) e2.fillText(ab.eD[q].toString(), 0, q * a8z / 7);
			e2.fillText(a5.gN.jP(100 * (1 - p.r[d.eC] / ab.eD[7]), 0), 0, a8z)
		}, this.a8y = function(c6, c7) {
			e2.setTransform(1, 0, 0, 1, c6 + .79 * this.bK, c7 + 2 * this.dp + this.a8j), a5.a6.textAlign(e2, 2);
			var q, a8z = this.bL - 4 * this.dp - this.kQ - this.a8j;
			for (e2.fillStyle = f3.sv, q = 2; 0 <= q; q--) e2.fillText(ab.a90[q + 8], 0, q * a8z / 9);
			for (e2.fillStyle = f3.su, e2.fillText(ab.a90[11], 0, 3 * a8z / 9), e2.fillStyle = f3.t6, q = 8; 4 <= q; q--) e2.fillText(ab.a90[q + 8], 0, q * a8z / 9);
			e2.fillStyle = f3.t5, e2.fillText(ab.a90[17], 0, 9 * a8z / 9), e2.fillStyle = f3.sv;
			var zr = a5.gN.jO(ab.eD[8] + ab.eD[9] + ab.eD[10] + ab.eD[11]),
				yq = e2.measureText(zr).width,
				c6 = (e2.setTransform(1, 0, 0, 1, c6 + .83 * this.bK + yq, c7 + 2 * this.dp + this.a8j), e2.fillText(a5.gN.jO(ab.eD[8]), 0, 0), e2.fillText(a5.gN.jO(ab.eD[9]), 0, a8z / 9), e2.fillText(a5.gN.jO(ab.eD[10]), 0, 2 * a8z / 9), e2
					.fillStyle = f3.su, e2.fillText(zr, 0, 3 * a8z / 9), e2.fillStyle = f3.t6, ab.eD[13] - aU.xD(d.eC)),
				yq = (e2.fillText(a5.gN.jO(ab.eD[12]), 0, 4 * a8z / 9), e2.fillText(a5.gN.jO(c6), 0, 5 * a8z / 9), e2.fillText(a5.gN.jO(ab.eD[14]), 0, 6 * a8z / 9), e2.fillText(a5.gN.jO(ab.eD[15]), 0, 7 * a8z / 9), e2.fillText(a5.gN.jO(ab.eD[16]), 0,
					8 * a8z / 9), ab.eD[12] + c6 + ab.eD[14] + ab.eD[15] + ab.eD[16] + ab.eD[17]);
			e2.fillStyle = f3.t5, e2.fillText(a5.gN.jO(yq), 0, a8z), e2.fillStyle = f3.f9
		}, this.yf = function(gH, iz, a93) {
			var q, a2, ut;
			return this.a8n < 0 || 1 < this.a8n ? .25 : (q = this.a8n * (ab.a3l - 1), ut = gH[a2 = Math.floor(q)], ut += (q - a2) * (gH[a2 < ab.a3l - 1 ? a2 + 1 : a2] - ut), e2.strokeStyle = f3.sk, .04 < this.a8n && this.a94(0, this.a8i - iz * Math
					.pow(ut, a93), q * this.a8h / (ab.a3l - 1), this.a8i - iz * Math.pow(ut, a93)), .04 < ut / ab.max[this.ew] && this.a94(q * this.a8h / (ab.a3l - 1), this.a8i, q * this.a8h / (ab.a3l - 1), this.a8i - iz * Math.pow(ut, a93)), e2
				.fillStyle = f3.t8, e2.beginPath(), e2.arc(q * this.a8h / (ab.a3l - 1), this.a8i - iz * Math.pow(ut, a93), Math.max(2, .014 * this.bL), 0, 2 * Math.PI), e2.fill(), gH = this.a8n * bm.kw, gH = 0 === p.eA[d.eC] ? Math.floor(gH * eR
					.a95) : Math.floor(gH * bm.h4()), e2.fillStyle = f3.f9, e2.fillText(1 === a93 ? a5.gN.jP(ut / 100, 2) : a5.gN.jO(Math.floor(ut)), -this.dh, this.a8i - iz * Math.pow(ut, a93)), a5.a6.textAlign(e2, 1), e2.fillText(eH.kk(gH), q *
					this.a8h / (ab.a3l - 1), this.a8i + this.a8k - (di.dj.dk() ? 2 : 0) - this.a8m), a5.a6.textAlign(e2, 2), iz * Math.pow(ut, a93) / this.a8i)
		}, this.a94 = function(kM, kN, kO, kP) {
			e2.beginPath(), e2.moveTo(kM, kN), e2.lineTo(kO, kP), e2.stroke()
		}
}

function a97() {
	var a98, a99, a9A, a9B, a9C, a9D, a9E, a9F, a9G, a9H, a9I, a9J, a9K, a9L, a9M, a9N, a9O, a9P, a9Q, a9R, a9S, a9T, position, a9U, a9V, a9W, a9X, a9Y = 1,
		a9Z = 1;
	var leaderboardHasChanged = true;
	this.playerPos = d.eC;
	leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		leaderboardFilter.filteredLeaderboard = leaderboardFilter.playersToInclude
			.map(id => a96[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = leaderboardFilter.filteredLeaderboard.indexOf(a96[d.eC]);
	}

	function a9b() {
		a9E.clearRect(0, 0, a98, a4G),
			a9E.fillStyle = f3.tH,
			a9E.fillRect(0, 0, a98, a9J),
			a9E.fillStyle = f3.jM,
			a9E.fillRect(0, a9J, a98, a4G - a9J);
		if (leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (leaderboardFilter.enabled ?
			this.playerPos :
			a96[d.eC]
		);
		if (leaderboardFilter.hoveringOverTabs) a9T = -1;
		if (leaderboardFilter.enabled && a9T >= leaderboardFilter.filteredLeaderboard.length) a9T = -1;
		playerPos >= position && a9c(playerPos - position, f3.mE),
			0 !== a96[d.eC] && 0 === position && a9c(0, f3.tM),
			-1 !== a9T && a9c(a9T, f3.sj),
			a9E.fillStyle = f3.jM,
			//console.log("drawing", a9T),
			a9E.clearRect(0, a4G - leaderboardFilter.tabBarOffset, a98, leaderboardFilter.tabBarOffset);
		a9E.fillRect(0, a4G - leaderboardFilter.tabBarOffset, a98, leaderboardFilter.tabBarOffset);
		a9E.fillStyle = f3.f9,
			a9E.fillRect(0, a9J, a98, 1),
			a9E.fillRect(0, a4G - leaderboardFilter.tabBarOffset, a98, 1),
			leaderboardFilter.drawTabs(a9E, a98, a4G - leaderboardFilter.tabBarOffset, f3.mE),
			a9E.fillRect(0, 0, a98, dq.f8),
			a9E.fillRect(0, 0, dq.f8, a4G),
			a9E.fillRect(a98 - dq.f8, 0, dq.f8, a4G),
			a9E.fillRect(0, a4G - dq.f8, a98, dq.f8), a9E.font = a99, a5.a6.textBaseline(a9E, 1), a5.a6.textAlign(a9E, 1), a9E.fillText(hm.hn[65], Math.floor((a98 + a9J - 22) / 2), Math.floor(a9H + a9A / 2));
		playerList.drawButton(a9E, 12, 12, a9J - 22);
		var gT, nC = playerPos < position + a9C - 1 ? 1 : 2;

		if (leaderboardFilter.enabled) {
			let result = leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a9C)
				position = (result.length > a9C ? result.length : a9C) - a9C;
			//if (position >= result.length) position = result.length - 1;
			for (a9E.font = a9B, a5.a6.textAlign(a9E, 0), gT = a9C - nC; 0 <= gT; gT--) {
				const pos = result[gT + position];
				if (pos !== undefined)
					a9d(a0j[pos]), a9e(gT, pos, a0j[pos]);
			}
			for (a5.a6.textAlign(a9E, 2), gT = a9C - nC; 0 <= gT; gT--) {
				const pos = result[gT + position];
				if (pos !== undefined)
					a9d(a0j[pos]), a9f(gT, a0j[pos]);
			}
		} else {
			for (a9E.font = a9B, a5.a6.textAlign(a9E, 0), gT = a9C - nC; 0 <= gT; gT--)
				a9d(a0j[gT + position]), a9e(gT, gT + position, a0j[gT + position]);
			for (a5.a6.textAlign(a9E, 2), gT = a9C - nC; 0 <= gT; gT--)
				a9d(a0j[gT + position]), a9f(gT, a0j[gT + position]);
		}
		2 == nC && (a9d(d.eC), a5.a6.textAlign(a9E, 0), a9e(a9C - 1, a96[d.eC], d.eC), a5.a6.textAlign(a9E, 2), a9f(a9C - 1, d.eC)), 0 === position && (nC = .7 * a9K / df.get(4).height, a9E.setTransform(nC, 0, 0, nC, Math.floor(a9L + .58 * a9K + .5 *
			nC * df.get(4).width), Math.floor(a9H + a9A + .4 * a9K)), a9E.imageSmoothingEnabled = !0, a9E.drawImage(df.get(4), -Math.floor(df.get(4).width / 2), -Math.floor(df.get(4).height / 2)), a9E.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a9d(player) {
		d.ag && (a9E.fillStyle = u.fl[u.fv[u.t[player]]])
	}

	function a9c(q, n4) {
		a9E.fillStyle = n4, q = a9C - 1 < q ? a9C - 1 : q;
		n4 = Math.floor((q === a9C - 1 ? 2 : 0 === q ? 1.15 : 1) * a9K), n4 = q === a9C - 2 ? Math.floor(a9J + 9.15 * a9K) - Math.floor(a9J + 8.15 * a9K) : n4;
		a9E.fillRect(0, Math.floor(a9J + (q + (0 === q ? 0 : .15)) * a9K), a98, n4)
	}

	function a9e(a9h, a9i, q) {
		a9E.fillText(a9P[a9i], a9L, Math.floor(a9H + a9A + (a9h + .5) * a9K)), 1 === p.kl[q] && (a9E.font = "italic " + a9B);
		a9i = Math.floor(a9H + a9A + (a9h + .5) * a9K);
		a9E.fillText(p.zj[q], a9M, a9i), 0 !== p.kl[q] && (a9E.font = a9B), q < d.e && 2 !== p.kl[q] || a9E.fillRect(a9M, a9i + .35 * a9Y, a9O[q], Math.max(1, .1 * a9Y))
	}

	function a9f(a9h, q) {
		a9E.fillText(p.r[q], a9N, Math.floor(a9H + a9A + (a9h + .5) * a9K))
	}

	function a9r(c7) {
		return (c7 -= dq.gap + a9J) < 0 ? Math.floor(c7 / a9K) - 1 : c7 < (a9C - 1) * a9K ? Math.floor(c7 / a9K) : c7 < a4G - a9J ? a9C - 1 : (c7 -= a4G - a9J, a9C + Math.floor(c7 / a9K))
	}

	function ld(c6, c7) {
		return c6 >= dq.gap && c6 < dq.gap + a98 && c7 >= dq.gap && c7 < dq.gap + a4G
	}
	this.a4 = function() {
			var q;
			for (a9V = !1, a9X = a9W = a9U = 0, a9T = -1, a9C = di.dj.dk() ? 6 : 10, a9Z = (position = 0) === (a9Z = ex.ey.data[11].value) ? 10 : 1 === a9Z ? 5 : 1, a9S = !1, a9Q = new Uint16Array(a9C + 1), a9R = new Uint32Array(a9C + 1), a9G = d.b4,
				a0j = new Uint16Array(a9G), a96 = new Uint16Array(a9G), q = a9G - 1; 0 <= q; q--) a0j[q] = q, a96[q] = q;
			this.resize(!0), a9O = new Uint16Array(d.b4);
			var a9a = Math.floor(a98 - a9M - a9L - a9F);
			for (a9P = new Array(d.b4), a9E.font = a9B, q = d.b4 - 1; 0 <= q; q--) a9P[q] = q + 1 + ".", p.zj[q] = a5.j7.zs(p.gP[q], a9B, a9a), a9O[q] = Math.floor(a9E.measureText(p.zj[q]).width);
			a9b()
		}, this.resize = function(a4) {
			if (a4G = di.dj.dk() ? (a98 = Math.floor(.335 * dl.dm), Math.floor(a9C * a98 / 8)) : (a98 = Math.floor(.27 * dl.dm), Math.floor(a9C * a98 / 10)), a98 = Math.floor(.97 * a98), (a9D = document.createElement("canvas")).width = a98, a9D
				.height = a4G, a9E = a9D.getContext("2d", {
					alpha: !0
				}), a9H = .025 * a98, a9A = .16 * a98, a9I = 0 * a98, a9J = Math.floor(.45 * a9H + a9A), a9K = (a4G - a9A - 2 * a9H - a9I) / a9C,
				a9D.height = a4G += a9K, leaderboardFilter.tabBarOffset = Math.floor(a9K * 1.3), leaderboardFilter.verticalClickThreshold = a4G - leaderboardFilter.tabBarOffset, leaderboardFilter.windowWidth = a98,
				a99 = a5.a6.jD(1, Math.floor(.55 * a9A)), a9Y = Math.floor((di.dj.dk() ? .67 : .72) * a9K), a9B = a5.a6.jD(0, a9Y), a9E.font = a9B, a9L = Math.floor(.04 * a98), a9M = Math.floor((di.dj.dk() ? .195 : .18) * a98), a9F = Math.floor(a9E
					.measureText("00920600").width), a9E.font = a99, a9N = a98 - a9L, !a4) {
				a9E.font = a9B;
				for (var q = d.b4 - 1; 0 <= q; q--) a9O[q] = Math.floor(a9E.measureText(p.zj[q]).width);
				a9b()
			}
		}, this.ke = function() {
			return a98
		}, this.eV = function(a0O) {
			a9S && (a0O || bm.h4() % a9Z == 0) && (a9S = !1, a9b())
		}, this.cf = function() {
			! function() {
				for (var gT = a9G - 1; 0 <= gT; gT--) 0 === p.eA[a0j[gT]] && ! function(gT) {
					var a9p = a0j[gT];
					a9G--;
					for (var q = gT; q < a9G; q++) a0j[q] = a0j[q + 1], a96[a0j[q]] = q;
					a0j[a9G] = a9p, a96[a0j[a9G]] = a9G
				}(gT)
			}();
			for (var a9n, ih = a9G - 1, gT = 0; gT < ih; gT++) p.r[a0j[gT]] < p.r[a0j[gT + 1]] && (a9n = a0j[gT], a0j[gT] = a0j[gT + 1], a0j[gT + 1] = a9n, a96[a0j[gT]] = gT, a96[a0j[gT + 1]] = gT + 1);
			! function() {
				for (var hh = a9S, nC = (a9S = !0, a96[d.eC] >= a9C - 1 ? a9C - 2 : a9C - 1), q = nC; 0 <= q; q--)
					if (a9Q[q] !== a0j[q] || a9R[q] !== p.r[a0j[q]]) return;
				(nC != a9C - 2 || a9Q[a9C] === a96[d.eC] && a9R[a9C] === p.r[d.eC]) && (a9S = hh)
			}();
			for (var q = a9C - 1; 0 <= q; q--) a9Q[q] = a0j[q], a9R[q] = p.r[a0j[q]];
			a9Q[a9C] = a96[d.eC], a9R[a9C] = p.r[d.eC];
			leaderboardHasChanged = true;
		}, leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.ds = function(c6, c7) {
			return !!ld(c6, c7) && ((utils.isPointInRectangle(c6, c7, dq.gap + 12, dq.gap + 12, a9J - 22, a9J - 22) && playerList.display(p.gP), true) &&
				!(c7 - dq.gap > leaderboardFilter.verticalClickThreshold && leaderboardFilter.handleMouseDown(c6 - dq.gap)) && (a9U = bm.ca, a9V = !0, a9W = a9X = a9r(c7), oU.w0() && (c6 = kI(-1, a9X, a9C), a9T !== (c6 = c6 === a9C ? -1 : c6)) &&
					(a9T = c6, a9b(), bm.bn = !0)), !0)
		}, leaderboardFilter.repaintLeaderboard = function() {
			a9b(), bm.bn = !0;
		},
		this.f1 = function(c6, c7) {
			if (utils.isPointInRectangle(c6, c7, dq.gap + 12, dq.gap + 12, a9J - 22, a9J - 22)) {
				playerList.hoveringOverButton === false && (playerList.hoveringOverButton = true, a9b(), bm.bn = !0);
			} else {
				playerList.hoveringOverButton === true && (playerList.hoveringOverButton = false, a9b(), bm.bn = !0);
			}
			if (leaderboardFilter.setHovering(
					utils.isPointInRectangle(c6, c7, dq.gap, dq.gap + leaderboardFilter.verticalClickThreshold, leaderboardFilter.windowWidth, leaderboardFilter.tabBarOffset), c6 - dq.gap
				)) return;
			var hh, a9q = a9r(c7);
			return a9V ? (hh = position, (position = kI(0, position += a9W - a9q, d.b4 - a9C)) !== hh && (a9q = (a9q = kI(-1, a9W = a9q, a9C)) !== a9C && ld(c6, c7) ? a9q : -1, a9T = a9q, a9b(), bm.bn = !0), !0) : (a9q = (a9q = kI(-1, a9q, a9C)) ===
				a9C || !ld(c6, c7) || oU.w0() ? -1 : a9q, a9T !== a9q && (a9T = a9q, a9b(), bm.bn = !0))
		}, this.vs = function(c6, c7) {
			if (!a9V) return !1;
			a9V = !1;
			var a9q = a9r(c7);
			var isEmptySpace = false;
			return oU.w0() && -1 !== a9T && (a9T = -1, a9b(), bm.bn = !0), bm.ca - a9U < 350 && a9X === a9q && -1 !== (a9q = (a9q = kI(-1, a9q, a9C)) !== a9C && ld(c6, c7) ? a9q : -1) && (c6 = (leaderboardFilter.enabled ? (updateFilteredLb(), a0j[
					leaderboardFilter.filteredLeaderboard[a9q + position] ?? (isEmptySpace = true, a96[d.eC])]) : a0j[a9q + position]), a9q === a9C - 1 && (leaderboardFilter.enabled ? this.playerPos : a96[d.eC]) >=
				position + a9C - 1 && (c6 = d.eC), !isEmptySpace && d.ag && donationsTracker.displayHistory(c6, p.gP, d.e8), 0 !== p.eA[c6] && !isEmptySpace) && eK.zf(c6, 800, !1, 0), !0
		}, this.ig = function(c6, c7, deltaY) {
			var a9s;
			return !(a9V || d.ie || (a9s = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !ld(c6, c7)) || (c6 = (c6 = kI(-1, a9r(c7), a9C)) === a9C || oU.w0() ? -1 : c6, 0 < deltaY ? position < d.b4 - a9C && (position += Math.min(d.b4 - a9C -
				position, a9s), a9T = c6, a9b(), bm.bn = !0) : 0 < position && (position -= Math.min(position, a9s), a9T = c6, a9b(), bm.bn = !0), 0))
		}, this.e1 = function() {
			e2.drawImage(a9D, dq.gap, dq.gap)
		}
}

function a9t() {
	var input;

	function a9u(a2) {
		a9w(a2.target.files)
	}

	function a9w(files) {
		files && 0 < files.length && mw.a9x(files[0])
	}

	function aA2(a2) {
		var dU = new Image;
		dU.onload = aA3, dU.src = a2.target.result
	}

	function aA3(a2) {
		var aA4, a2 = a2.target,
			bK = a2.width,
			bL = a2.height;
		4096 < bK || 4096 < bL || bK < 10 || bL < 10 ? (aA4 = "Image w & h must be between 10 and 4096.", di.hK ? di.hK.showToast(aA4) : alert(aA4)) : (g0.mY(), ba.cG = ba.aA1(), ba.yE = 0, ba.bb = bK, ba.bd = bL, ba.bo.width = ba.bb, ba.bo.height =
			ba.bd, ba.bi.drawImage(a2, 0, 0), aA4 = ba.bi.getImageData(0, 0, ba.bb, ba.bd), ba.bp = aA4.data)
	}

	function aA5(a2) {
		a2.stopPropagation(), a2.preventDefault()
	}

	function aA6() {
		return 0 === cv.cw() || 2 === cv.cw()
	}
	this.a4 = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = a9u
	}, this.mx = function() {
		input.click()
	}, this.a9v = function(a2) {
		a9u(a2)
	}, this.a9x = function(a9y) {
		var gH = a9y.name.split("."),
			a9z = gH[gH.length - 1].toLowerCase();
		"json" === a9z ? g0.zC(a9y) : "gif" !== a9z && "jpg" !== a9z && "jpeg" !== a9z && "png" !== a9z || (ba.cE.cF[ba.aA1()].name = gH[0], (a9z = new FileReader).onload = aA2, a9z.readAsDataURL(a9y))
	}, this.vX = function(a2) {
		aA6() && (aA5(a2), a2.dataTransfer.dropEffect = "copy")
	}, this.vY = function(a2) {
		aA6() && (aA5(a2), a9w(a2.dataTransfer.files))
	}
}

function aA7() {
	2 === ba.cG ? aA8([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === ba.cG ? aA8([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === ba.cG ? aA8([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === ba.cG && aA8([
		512
	], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function aA8(aA9, aAA, aAB, aAC, aAD) {
	for (var c6, c7, a7K, a7M, iz, aAF, gR = aA9.length - 1, aAE = ba.bb + ba.bd, c = (aAE *= aAE, aAB.length), q = c - 1; 0 <= q; q--) aAB[q] *= aAB[q];
	var aAG = new Array(c),
		yn = new Array(c),
		aAH = new Array(c),
		dS = a7w.a7x();
	if (void 0 === aAD)
		for (aAD = new Array(c), q = c - 1; 0 <= q; q--) aAD[q] = 0;
	for (q = 1; q < c; q++) aAG[q] = aAB[q] - aAB[q - 1], yn[q] = aAC[q] - aAC[q - 1], aAH[q] = aAD[q] - aAD[q - 1];
	for (c6 = ba.bb - 1; 0 <= c6; c6--)
		for (c7 = ba.bd - 1; 0 <= c7; c7--) {
			for (a7K = aAE, q = gR; 0 <= q; q--) a7K = (a7M = (c6 - aA9[q]) * (c6 - aA9[q]) + (c7 - aAA[q]) * (c7 - aAA[q])) < a7K ? a7M : a7K;
			for (iz = aAC[c - 1], aAF = aAD[c - 1], q = 1; q < c; q++)
				if (a7K < aAB[q]) {
					iz = aAC[q - 1] + kE((a7K - aAB[q - 1]) * yn[q], aAG[q]), aAF = aAD[q - 1] + kE((a7K - aAB[q - 1]) * aAH[q], aAG[q]);
					break
				} aAI(ba.bb * c7 + c6, iz, aAF, dS)
		}
}

function aAI(ew, iz, aAF, dS) {
	iz < 500 ? dS[ew] = dG(dS[ew] * iz * 2, 1e3) : 500 < iz && (dS[ew] += dG(2 * (1e4 - dS[ew]) * (iz - 500), 1e3)), dS[ew] += dG(aAF * (10 * iz - dS[ew]), 1e3)
}

function z3() {
	var aAJ, aAK, aAL, jl, aAM, ew = 0,
		ca = bm.ca;

	function aAQ() {
		! function() {
			if (!d.e9) return;
			if (d.e8) return;
			return aAM % 7 != 0 ? aAM++ : jl === d.kt ? (aAT(), eH.ks(jl), d.aJ.cf()) : (aAT(), aAM++, jl++, bA.eU(), bA.eV(!0)), 1
		}() && (aAT(), l4())
	}

	function aAR() {
		ew = 0, (d.e9 ? (bm.bn = eH.ks(jl - (aAM % 7 == 0 ? 0 : 1) + aAM % 7 / 7) || bm.bn, kv) : jQ.jR || !vj.lr ? kv : (bm.bn = !0, l2))()
	}

	function aAT() {
		var q, c, aAU = aG.aH.a7A,
			ut = aG.aH.a7B,
			uu = aG.aH.a7C,
			dT = aG.aH.a7D,
			aAV = aG.aH.a7E,
			aAW = aG.aH.a7F;
		if (aAJ >= aAW.length) eS.zn("Replay file smaller than expected."), g.v0.xN(-1);
		else if (aAW = aAW[aAJ], aAV[aAJ]) {
			for (c = aAK + aAW, q = aAK; q < c; q++) h7.eg.aAX(aAU[q], ut[q], uu[q], dT[q]);
			aAK += aAW, aAJ++
		} else ++aAL >= aAW && (aAJ++, aAL = 0)
	}
	this.kn = 0, this.a4 = function() {
		aAM = jl = aAL = aAK = aAJ = 0
	}, this.cf = function() {
		var aAP;
		dl.cf(), vj.lt() < 1.7 ? 0 === ew ? bm.ca >= ca && (aAP = bm.kw / vj.lt(), ca += aAP * Math.floor(1 + (bm.ca - ca) / aAP), 2 === d.jc || jQ.jR || !vj.lr ? kx() : (aAQ(), eY.ku()), ew++) : aAR() : function() {
			var aAP;
			if (bm.ca >= ca)
				if (2 === d.jc || jQ.jR || !vj.lr) kx(), ca = bm.ca;
				else {
					for (aAP = bm.kw / vj.lt(), 16 < (bm.ca - ca) / aAP && (ca = bm.ca - 16 * aAP); bm.ca >= ca && 2 !== d.jc;) ca += aAP, aAQ();
					eY.ku()
				} aAR()
		}(), l0(), bm.bn && (bm.bn = !1, l1())
	}, this.aAY = function() {
		aAJ !== aG.aH.a7F.length && aAJ + 1 !== aG.aH.a7F.length && eS.zn("Replay file larger than expected.")
	}
}

function oB() {
	this.a4l = function(cj) {
		var a2t = bV.bc(3),
			a2s = aAZ.aAa.cf(bV.bc(16), bV.bc(20));
		v.cs.a2r(cj, a2s, a2t), 0 < a2t || (0 === cj && 0 === ex.ey.data[105].value.length ? v.cs.a2u(0) : v.o2.a7W(cj), 4 === v.w.cd(cj).a55() ? 6 === cv.cw() && v.nz.uQ(cj) : 5 !== v.w.cd(cj).a55() || 8 !== cv.cw() && 10 !== cv.cw() || v.ch
		.ht())
	}, this.a4m = function() {
		var id = bV.bc(6);
		0 === id ? (mX.aAb || v.cs.a2u(1), 8 === dw.dy && dw.fh().aAc()) : 21 === id ? 8 === dw.dy && dw.fh().fi(17) : 22 === id && (ex.fT.fU(106, ex.ey.data[110].value), ex.fT.fU(110, ""), 8 === dw.dy) && dw.fh().fi(15)
	}
}

function aAd() {
	var aAe, aAf, ri, ok;
	this.a4 = function() {
		var q, c6, c7, gI, aAg, bK, bL, j7, oM, bt, dS, s, oL, gT, pB;
		if (function() {
				if (ri = !0, ok = "rgb(" + ba.bp[0] + "," + ba.bp[1] + "," + ba.bp[2] + ")", ba.aAj(ba.cG)) return 1;
				return ri = !1, 0
			}()) aAf = null;
		else {
			for (aAe = dG(96, 4), aAg = 1 === ba.cG ? (gI = 0, 160) : (gI = 128, 32), ok = "rgb(" + gI + "," + gI + "," + gI + ")", aAf = new Array(4), q = 3; 0 <= q; q--) {
				if (aAf[q] = document.createElement("canvas"), bK = q % 2 == 0 ? ba.bb : aAe, bL = q % 2 == 0 ? aAe : ba.bd + 2 * aAe, aAf[q].width = bK, aAf[q].height = bL, bt = (oM = (j7 = aAf[q].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, bK, bL)).data, q % 2 == 0)
					for (c7 = aAe - 1; 0 <= c7; c7--)
						for (dS = aAg + Math.floor((c7 + 1) * (gI - aAg) / (aAe + 1)), c6 = bK - 1; 0 <= c6; c6--) bt[s = 4 * ((0 === q ? aAe - c7 - 1 : c7) * bK + c6)] = dS, bt[s + 1] = dS, bt[s + 2] = dS, bt[s + 3] = 255;
				else {
					for (c6 = aAe - 1; 0 <= c6; c6--)
						for (dS = aAg + Math.floor((c6 + 1) * (gI - aAg) / (aAe + 1)), c7 = bL - 1 - aAe; aAe <= c7; c7--) bt[s = 4 * (c7 * bK + (3 === q ? aAe - c6 - 1 : c6))] = dS, bt[s + 1] = dS, bt[s + 2] = dS, bt[s + 3] = 255;
					for (gT = 1; 0 <= gT; gT--)
						for (c6 = aAe - 1; 0 <= c6; c6--)
							for (c7 = aAe - 1; 0 <= c7; c7--) oL = (Math.pow(c6 * c6 + c7 * c7, .5) + 1) / (aAe + 1), dS = aAg + Math.floor((1 < oL ? 1 : oL) * (gI - aAg)), bt[s = 4 * ((0 === gT ? aAe - c7 - 1 : c7 + gT * (bL - aAe)) * bK + (
								1 === q ? c6 : aAe - c6 - 1))] = dS, bt[s + 1] = dS, bt[s + 2] = dS, bt[s + 3] = 255
				}
				j7.putImageData(oM, 0, 0)
			}
			pB = aAg, ba.bi.fillStyle = "rgb(" + pB + "," + pB + "," + pB + ")", ba.bi.fillRect(0, 0, ba.bb, 1), ba.bi.fillRect(0, ba.bd - 1, ba.bb, 1), ba.bi.fillRect(0, 0, 1, ba.bd), ba.bi.fillRect(ba.bb - 1, 0, 1, ba.bd)
		}
	}, this.jp = function() {
		var gT = ri ? 0 : -aAe;
		kR(gT, gT, ba.bb - 2 * gT, ba.bd - 2 * gT, iw.a0U, iw.a0V, iw.a0W, iw.a0X) || (e2.fillStyle = ok, e2.fillRect(0, 0, dl.bK, dl.bL))
	}, this.e1 = function() {
		ri || (kL(0, -aAe, ba.bb, aAe, iw.a0U, iw.a0V, iw.a0W, iw.a0X) && e2.drawImage(aAf[0], iw.a0S, iw.a0T - aAe), kL(ba.bb, -aAe, aAe, ba.bd + 2 * aAe, iw.a0U, iw.a0V, iw.a0W, iw.a0X) && e2.drawImage(aAf[1], iw.a0S + ba.bb, iw.a0T - aAe), kL(
			0, ba.bd, ba.bb, aAe, iw.a0U, iw.a0V, iw.a0W, iw.a0X) && e2.drawImage(aAf[2], iw.a0S, iw.a0T + ba.bd), kL(-aAe, -aAe, aAe, ba.bd + 2 * aAe, iw.a0U, iw.a0V, iw.a0W, iw.a0X) && e2.drawImage(aAf[3], iw.a0S - aAe, iw.a0T - aAe))
	}
}

function aAk() {
	var aAl, aAm, aAn, aAo, aAp, aAq, aAr, wB, aAt, aAv, aAw, aAx, aB0, aB1, aB2, aB3, aB4, aAs = 48,
		aAy = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
		aAz = [0, 0, 0, 0];

	function aB8(q, b7) {
		q = aAr[q].getContext("2d", {
			alpha: !0
		});
		q.clearRect(0, 0, aAs, aAs), dM.bt.lh(b7, q, 0, 0, aAs)
	}

	function aB7(q, dX) {
		var q = aAr[q].getContext("2d", {
				alpha: !0
			}),
			zoom = (q.clearRect(0, 0, aAs, aAs), aAs / dX.width),
			hh = aAs / dX.height,
			zoom = hh < zoom ? hh : zoom;
		q.imageSmoothingEnabled = !0, q.setTransform(zoom, 0, 0, zoom, Math.floor((aAs - zoom * dX.width) / 2), Math.floor((aAs - zoom * dX.height) / 2)), q.drawImage(dX, 0, 0), q.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a4C(dU, fA, a4E, li) {
		li.beginPath(), li.moveTo(dU, dU), li.lineTo(dU + Math.cos(a4E) * fA, dU + Math.cos(a4E + 1.5 * Math.PI) * fA), li.stroke()
	}

	function aBL() {
		if (7 === cv.cw()) {
			for (var g5, dX, li, zoom, hh, gT = -1, q = wB.length - 1; 0 <= q; q--)
				if (null === wB[q].j6) {
					gT = q;
					break
				} - 1 !== gT && (null !== (g5 = aBD(wB[gT].yC, wB[gT].yD)) ? wB[gT].j6 = g5 : (g5 = {
					bb: ba.bb,
					bd: ba.bd,
					bo: ba.bo,
					bi: ba.bi,
					bj: ba.bj,
					bp: ba.bp,
					cG: ba.cG,
					yE: ba.yE
				}, ba.j(wB[gT].yC, wB[gT].yD), ba.bl.aBM(), (dX = document.createElement("canvas")).width = 128, dX.height = 128, li = dX.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / ba.bb) < (hh = 128 / ba.bd) && (zoom = hh), li.imageSmoothingEnabled = !0, li.setTransform(zoom, 0, 0, zoom, (128 - zoom * ba.bb) / 2, (128 - zoom * ba.bd) / 2), li.drawImage(ba.bo, 0, 0), ba.bb = g5.bb, ba
				.bd = g5.bd, ba.bo = g5.bo, ba.bi = g5.bi, ba.bj = g5.bj, ba.bp = g5.bp, ba.cG = g5.cG, ba.yE = g5.yE, wB[gT].j6 = dX), bm.bn = !0)
		}
	}

	function aBD(yC, yD) {
		for (var q = wB.length - 1; 0 <= q; q--)
			if (null !== wB[q].j6 && wB[q].yC === yC && wB[q].yD === yD) return wB[q].j6;
		return null
	}
	this.a4 = function() {
		var q;
		for (aB4 = 0, aAv = -1, cv.setState(7), wB = [], this.resize(), aAr = new Array(13), q = aAr.length; 0 <= q; q--) aAr[q] = document.createElement("canvas"), aAr[q].width = aAs, aAr[q].height = aAs;
		for (q = 0; q < 7; q++) ! function(dJ) {
			var a47, li = aAr[dJ - 2].getContext("2d", {
					alpha: !0
				}),
				a46 = 1.5 * Math.PI,
				dU = Math.floor(.5 * aAs),
				fA = Math.floor(.48 * aAs);
			li.lineWidth = 2, li.strokeStyle = f3.f9, li.clearRect(0, 0, aAs, aAs);
			for (var q = 0; q < dJ; q++) a47 = a46 + 2 * Math.PI / dJ,
				function(q, dU, fA, a46, a47, li) {
					li.fillStyle = u.fk[q], li.beginPath(), li.arc(dU, dU, fA, a46, a47), li.lineTo(dU, dU), li.fill()
				}(q + 1, dU, fA, a46, a47, li), 0 !== q && a4C(dU, fA, a46, li), a46 = a47;
			a4C(dU, fA, 1.5 * Math.PI, li),
				function(dU, fA, li) {
					li.beginPath(), li.arc(dU, dU, fA, 0, 2 * Math.PI), li.stroke()
				}(dU, fA, li)
		}(q + 2);
		aB7(7, df.get(4)), aB8(8, dM.dN.dO + dM.dN.aB9), aB8(9, dM.dN.dO + dM.dN.dP), aB8(10, 1024 - dM.dN.lS), aB7(11, df.get(19)), aB7(12, df.get(20)), bm.bn = !0
	}, this.w4 = function() {
		this.jt(), v.w.d3(3240), cv.setState(0), dw.dx(5, 5)
	}, this.jt = function() {
		wB = [], aAr = []
	}, this.aBA = function() {
		return aAx
	}, this.resize = function() {
		var oi, bP, ln, aBB;
		for (aAn = [0, 0], aAt = [0, 0, 0, 0], aB3 = di.dj.dk() ? (aAw = Math.floor(.8 * .4 * dl.dm), aAx = Math.floor(.56 * aAw), aAt[0] = dq.gap, dl.bK < dl.bL ? (aAt[1] = aAx + 2 * dq.gap, aAt[2] = dl.bK - 3 * aAt[0], aAt[3] = a4n.iY() - 3 *
				dq.gap - aAx, aB1 = Math.floor(.95 * aAx), aB2 = Math.floor((dl.bK - aAw - dq.gap) / 2), Math.floor(dq.gap + aAx / 2)) : (aAt[1] = dq.gap, aAt[2] = dl.bK - 3 * dq.gap - aAw, aAt[3] = a4n.iY() - 2 * dq.gap, aB1 = Math.floor(
				.8 * aAw), aAt[3] - aAx < aAw && (aB1 = Math.floor(.8 * (aAt[3] - aAx)), aB1 = kG(aAx, aB1)), aB2 = Math.floor(dl.bK - aAw / 2 - dq.gap), kG(aB3 = Math.floor(dq.gap + aAx + (aAt[3] - aAx) / 2), Math.floor(aAx + 2 * dq
				.gap + aB1 / 2)))) : (aAw = Math.floor(.2016 * dl.dm), aAx = Math.floor(.56 * aAw), aAt[2] = Math.floor(.5 * dl.bK), aAt[3] = Math.floor(.5 * dl.bL), aAt[1] = Math.floor(.45 * (dl.bL - aAt[3])), aAt[0] = Math.floor((dl.bK - aAt[
				2]) / 2), aB1 = Math.floor(.75 * aAx), aB2 = Math.floor(dl.bK / 2), Math.floor(aAt[1] + aAt[3] + (dl.bL - aAt[3] - aAt[1]) / 2)), aB0 = a5.a6.jD(1, .65 * aAx / 4), oi = bP = 1; oi * bP < wB.length;) aAt[3] / (bP + 1) < aAt[2] / (
			oi + 1) ? oi++ : bP++;
		ln = (aAt[2] - (oi - 1) * dq.gap) / oi, aBB = (aAt[3] - (bP - 1) * dq.gap) / bP, aAl = ln < aBB ? ln : aBB, aAm = Math.floor(aAl), aAq = a5.a6.jD(1, .5 * aAl / 5), aAn[0] = oi, aAn[1] = bP, aAo = aAt[0] + Math.floor((aAt[2] - aAn[0] *
			aAl - (aAn[0] - 1) * dq.gap) / 2), aAp = aAt[1] + Math.floor((aAt[3] - aAn[1] * aAl - (aAn[1] - 1) * dq.gap) / 2)
	}, this.fU = function(aBC, s) {
		var q, hh, j6, c = wB.length;
		for (aAz = aBC, q = 0; q < s.length; q++) j6 = aBD(s[q].cG, s[q].yE), wB.push({
			uS: s[q].id,
			mg: s[q].mg,
			wd: s[q].a4u,
			yC: s[q].cG,
			yD: s[q].yE,
			joined: s[q].aBE,
			a0r: s[q].aBF,
			aBG: s[q].aBG,
			j6: j6,
			aBH: s[q].aBH,
			aBI: s[q].aBI,
			aBJ: s[q].aBJ
		});
		for (q = c - 1; 0 <= q; q--) wB.shift();
		if (-1 !== aAv)
			for (hh = aAv, aAv = -1, q = wB.length - 1; 0 <= q; q--)
				if (wB[q].uS === hh) {
					aAv = hh;
					break
				}(wB.length > aB4 || wB.length < aB4) && (aB4 = wB.length, this.resize()), this.aBK(), bm.bn = !0
	}, this.aBK = function() {
		for (var q = wB.length - 1; 0 <= q; q--) null === wB[q].j6 && setTimeout(aBL, 0)
	}, this.ds = function(c6, c7) {
		return 4 * ((c6 - aB2) * (c6 - aB2) + (c7 - aB3) * (c7 - aB3)) <= aB1 * aB1 ? (this.w4(), ma.f1(c6, c7, !1), !0) : function(c6, c7) {
			var gT, fC, kM, kN;
			if (0 !== wB.length) {
				var q = 0;
				for (kN = aAp, fC = 0; fC < aAn[1]; fC++) {
					for (kM = aAo, gT = 0; gT < aAn[0]; gT++) {
						if (kM < c6 && c6 < kM + aAl && kN < c7 && c7 < kN + aAl) return v.nz.uR(wB[q].uS), aAv = wB[q].uS !== aAv ? wB[q].uS : -1, bm.bn = !0;
						if (++q >= wB.length) return !1;
						kM += aAl + dq.gap
					}
					kN += aAl + dq.gap
				}
			}
			return !1
		}(c6, c7)
	}, this.e1 = function() {
		var gT, fC, c6, fA, zoom, q = 0,
			c7 = aAp;
		if (e2.imageSmoothingEnabled = !0, e2.lineWidth = 3, fA = Math.floor(.5 * aB1), e2.fillStyle = f3.sh, e2.beginPath(), e2.arc(aB2, aB3, fA, 0, 2 * Math.PI), e2.fill(), e2.strokeStyle = f3.f9, e2.beginPath(), e2.arc(aB2, aB3, fA, 0, 2 *
				Math.PI), e2.stroke(), fA = df.get(0).height, zoom = .6 * aB1 / fA, e2.setTransform(zoom, 0, 0, zoom, Math.floor(aB2 - .56 * zoom * df.get(0).width), Math.floor(aB3 - .5 * zoom * fA)), e2.drawImage(df.get(0), 0, 0), e2
			.setTransform(1, 0, 0, 1, 0, 0),
			function() {
				e2.fillStyle = f3.sh, e2.fillRect(dl.bK - aAw - dq.gap, dq.gap, aAw, aAx), 0 <= aAv ? (e2.fillStyle = f3.sz, e2.fillRect(dl.bK - aAw - dq.gap, dq.gap, aAw, Math.floor(.25 * aAx))) : (e2.fillStyle = f3.tL, e2.fillRect(dl.bK - aAw -
					dq.gap, dq.gap + Math.floor(.25 * aAx), aAw, Math.floor(.25 * aAx)));
				e2.strokeStyle = f3.f9, e2.strokeRect(dl.bK - aAw - dq.gap, dq.gap, aAw, aAx), e2.fillStyle = f3.f9, e2.font = aB0, a5.a6.textBaseline(e2, 1);
				for (var c7, aBR = Math.floor(.04 * aAw), zE = Math.floor(.08 * aAx), q = 3; 0 <= q; q--) c7 = Math.floor(dq.gap + (q + 1) * (aAx + 2 * zE) / 5 - zE), a5.a6.textAlign(e2, 0), e2.fillText(aAy[q], dl.bK - aAw - dq.gap + aBR, c7), a5
					.a6.textAlign(e2, 2), e2.fillText(a5.gN.jO(aAz[q]), dl.bK - dq.gap - aBR, c7)
			}(), 0 !== wB.length)
			for (fC = 0; fC < aAn[1]; fC++) {
				for (c6 = aAo, gT = 0; gT < aAn[0]; gT++) {
					if (! function(q, c6, c7) {
							var zoom, fC, aBS, aBU, aBV;
							null === wB[q].j6 ? (e2.fillStyle = f3.sh, e2.fillRect(c6, c7, aAm, aAm)) : (zoom = aAm / 128, e2.setTransform(zoom, 0, 0, zoom, c6, c7), e2.drawImage(wB[q].j6, 0, 0), e2.setTransform(1, 0, 0, 1, 0, 0));
							aAv === wB[q].uS ? (function(c6, c7) {
								var dh = Math.floor(.2 * aAm),
									dn = Math.floor(.3 * dh);
								e2.fillStyle = f3.t1, e2.fillRect(c6 + aAm - dh, c7, dh, dh), e2.fillStyle = f3.fn, e2.fillRect(c6 + aAm - dh, c7, 2, dh), e2.fillRect(c6 + aAm - dh, c7 + dh - 2, dh, 2), jQ.yf(c6 + aAm - dh + dn, c7 + dn,
									dh - 2 * dn), e2.setTransform(1, 0, 0, 1, 0, 0)
							}(c6, c7), e2.lineWidth = 3, e2.fillStyle = f3.t1) : e2.fillStyle = f3.j2;
							aBU = Math.floor(aAl / 4), e2.fillRect(c6, c7, aBU, aBU), aBV = Math.floor(c7 + .8 * aAl), e2.fillRect(c6, aBV, aAm, Math.floor(aAl / 5)),
								function(q, c6, c7) {
									var zoom;
									wB[q].wd && (q = df.get(4), zoom = .5 * aAl / q.width, e2.setTransform(zoom, 0, 0, zoom, Math.floor(c6 + (aAl - zoom * q.width) / 2), Math.floor(c7 + (aAl - zoom * q.height) / 2)), e2.globalAlpha = .6, e2
										.drawImage(q, 0, 0), e2.globalAlpha = 1, e2.setTransform(1, 0, 0, 1, 0, 0))
								}(q, c6, c7);
							var aBX = new Array(wB[q].aBH);
							if (wB[q].aBH) {
								for (fC = aBS = 0; fC < wB[q].aBH; fC++) wB[q].aBI[fC] = a5.j7.zs(wB[q].aBI[fC], aAq, .4 * aAl), aBX[fC] = ("" === wB[q].aBI[fC] ? "other: " : "[" + wB[q].aBI[fC] + "]: ") + wB[q].aBJ[fC];
								for (fC = 0; fC < wB[q].aBH; fC++) aBS = Math.max(aBS, oS.measureText(aBX[fC], aAq));
								aBS += .05 * aAl, fC = 5 === wB[q].aBH, aBU = fC ? c7 + aBU : Math.max(c7 + .8 * aAl - .11 * wB[q].aBH * aAl, c7 + aBU), aBV = fC ? aBV : Math.min(aBU + .11 * wB[q].aBH * aAl + .05 * aAl, aBV), e2.fillRect(c6, aBU,
									aBS, aBV - aBU)
							}
							for (e2.font = aAq, a5.a6.textBaseline(e2, 1), a5.a6.textAlign(e2, 0), e2.fillStyle = f3.tG, e2.fillText(wB[q].joined.toString(), Math.floor(c6 + .22 * aAl), Math.floor(c7 + .9 * aAl)), e2.fillStyle = f3.f9, fC =
								0; fC < wB[q].aBH; fC++) e2.fillText(aBX[wB[q].aBH - fC - 1], Math.floor(c6 + .03 * aAl), Math.floor(c7 + .77 * aAl - .11 * fC * aAl));
							a5.a6.textAlign(e2, 2), e2.fillStyle = f3.t4, e2.fillText(wB[q].a0r.toString(), Math.floor(c6 + .81 * aAl), Math.floor(c7 + .9 * aAl)), e2.strokeStyle = aAv === wB[q].uS ? f3.t0 : f3.kf, e2.strokeRect(c6, c7, aAm,
								aAm), aBV = Math.floor(.16 * aAl), zoom = aBV / aAs, e2.setTransform(zoom, 0, 0, zoom, Math.floor(c6 + .33 * aBV), Math.floor(c7 + .33 * aBV)), aAr.length > wB[q].mg && e2.drawImage(aAr[wB[q].mg], 0, 0);
							e2.setTransform(zoom, 0, 0, zoom, Math.floor(c6 + .15 * aBV), Math.floor(c7 + aAl - 1.08 * aBV)), e2.drawImage(aAr[11], 0, 0), e2.setTransform(zoom, 0, 0, zoom, Math.floor(c6 + aAl - 1.05 * aBV), Math.floor(c7 + aAl -
								1.15 * aBV)), e2.drawImage(aAr[12], 0, 0), e2.setTransform(1, 0, 0, 1, 0, 0)
						}(q, Math.floor(c6), Math.floor(c7)), ++q >= wB.length) return;
					c6 += aAl + dq.gap
				}
				c7 += aAl + dq.gap
			}
	}
}

function yv() {
	this.zB = function(ew, hW = !1) {
		return Number(this.zC(ew, hW))
	}, this.zC = function(ew, hW = !1) {
		var dS = null;
		return 0 === di.id ? di.hJ && (dS = di.hJ.getItem((hW ? "v" : "d") + ew)) : 1 === di.id ? dS = di.hK.loadString((hW ? 1e3 : 2e3) + ew) : 2 === di.id && (dS = di.hV[(hW ? "v" : "d") + ew]), dS && 0 !== dS.length ? dS : null
	}, this.save = function(ew, value, hW = !1) {
		0 === di.id ? di.hJ && ex.ey.data[140].value && di.hJ.setItem((hW ? "v" : "d") + ew, value) : 1 === di.id ? di.hK.saveString((hW ? 1e3 : 2e3) + ew, value) : 2 === di.id && (di.hV["d" + ew] = value, di.hL.postMessage((hW ? "v" : "d") +
			ew + " " + value))
	}
}

function hk(title, fK, aBY = !1, a1S = [new hl("❌ " + hm.hn[92], function() {
	dw.nK()
}, f3.ho)]) {
	let nH, a1T;
	this.show = function() {
		nH.show(), this.resize()
	}, this.co = function() {
		nH.co()
	}, this.resize = function() {
		nH.resize(), a1T.resize()
	}, this.ev = function(dU) {
		2 === dU && nH.nd[0].ne()
	}, nH = new nJ(title, a1S), a1T = new pq(nH.nQ, fK), aBY && a5.a6.textAlign(nH.nQ.style, 1)
}

function aBZ() {
	var gH, aBa, aBb, aBc, gap, aBd, aBe, aBf, aBg, aBh, j9, aBi, wF, a93, jJ, uU, aBj, aBk;

	function aBm() {
		aBc = Math.floor(.2 * (di.dj.dk() ? .07 : .035) * dl.dm), aBc = kG(di.dj.dk() ? 3 : 1, aBc);
		var aBo = dl.bK / (gH.length + gap);
		aBc = aBc < aBo ? aBo : aBc, jJ = Math.floor((1 - gap) * aBc), aBa = 0, aBp()
	}

	function aBp() {
		aBa = (aBa = aBa < -20 ? -20 : aBa) > (gH.length - 15) * aBc ? (gH.length - 15) * aBc : aBa, aBe = Math.floor(aBa / aBc), aBf = (aBf = aBe + Math.floor(dl.bK / aBc)) > gH.length - 1 ? gH.length - 1 : aBf, aBe = (aBe = aBf < aBe ? aBf : aBe) <
			0 ? 0 : aBe;
		var bQ = aBf;
		aBd = aBb / gH[bQ];
		for (var q = aBf - 1; aBe <= q; q--) gH[q] > gH[bQ] && (bQ = q, aBd = aBb / Math.pow(gH[q], a93))
	}

	function aBr(c6) {
		c6 = Math.floor((aBa + dl.bK - c6 - gap * aBc) / aBc);
		return (c6 = c6 < -1 ? -1 : -1 === c6 ? 0 : c6 > gH.length - 1 ? -1 : c6) !== aBg && (aBg = c6, -1 === uU && 0 === aBg && mX.aAb && (uU = setInterval(aBs, 100)), 1)
	}

	function aBt(q) {
		var a8F = Math.floor(aBd * Math.pow(gH[q], a93));
		e2.fillRect(aBa + dl.bK - (q + 1) * aBc, dl.bL - a8F, jJ, a8F)
	}

	function aBs() {
		var s;
		0 !== (aBg = 8 === cv.cw() ? -1 : aBg) ? (aBj = (new Date).getTime(), clearInterval(uU), uU = -1) : (s = gH[1] / 864e3, -1 !== aBj && (s += ((new Date).getTime() - aBj) * gH[1] / 864e5, aBj = -1), 0 < s && (gH[0] += Math.floor(s), bm.bn = !
			0))
	}
	this.aAb = !1, this.a4 = function() {
		aBj = uU = -1, aBg = -(a93 = 1), this.a6l = !1, wF = 0, aBi = new Date, aBa = 0, gap = .3, (aBk = []).push({
			dJ: "Plateau A",
			c: 0,
			a2: 57
		}), aBk.push({
			dJ: "Max A",
			c: 1,
			a2: 1
		}), aBk.push({
			dJ: "Black Friday",
			c: 15,
			a2: 15
		}), aBk.push({
			dJ: "Max B",
			c: 19,
			a2: 19
		}), aBk.push({
			dJ: "Max C",
			c: 44,
			a2: 44
		}), aBk.push({
			dJ: "First Android Version",
			c: 58,
			a2: 58
		}), aBk.push({
			dJ: "Max D",
			c: 67,
			a2: 67
		}), aBk.push({
			dJ: "The iFrame Explosion",
			c: 98,
			a2: 99
		}), aBk.push({
			dJ: "The 155-Day Uptrend",
			c: 58,
			a2: 213
		}), aBk.push({
			dJ: "Max E",
			c: 213,
			a2: 213
		}), aBk.push({
			dJ: "Plateau B",
			c: 214,
			a2: 259
		}), aBk.push({
			dJ: "Turbulent Times",
			c: 260,
			a2: 344
		}), aBk.push({
			dJ: "Max F",
			c: 262,
			a2: 262
		}), aBk.push({
			dJ: "Max G",
			c: 282,
			a2: 282
		}), aBk.push({
			dJ: "Max H",
			c: 333,
			a2: 333
		}), aBk.push({
			dJ: "The 19-Day Downtrend",
			c: 283,
			a2: 301
		}), aBk.push({
			dJ: "Plateau C",
			c: 345,
			a2: 385
		}), aBk.push({
			dJ: "The Alliance Ascent",
			c: 386,
			a2: 395
		}), aBk.push({
			dJ: "Max I",
			c: 395,
			a2: 395
		}), aBk.push({
			dJ: "First iOS Version",
			c: 411,
			a2: 411
		}), aBk.push({
			dJ: "Plateau D",
			c: 396,
			a2: 453
		}), aBk.push({
			dJ: "The TikTok Revolution",
			c: 454,
			a2: 470
		}), aBk.push({
			dJ: "Max J",
			c: 456,
			a2: 456
		}), aBk.push({
			dJ: "Max K",
			c: 472,
			a2: 472
		}), aBk.push({
			dJ: "Max L",
			c: 478,
			a2: 478
		}), aBk.push({
			dJ: "YT Drew",
			c: 471,
			a2: 485
		}), aBk.push({
			dJ: "Plateau E",
			c: 485,
			a2: 600
		}), aBk.push({
			dJ: "Uptrend A",
			c: 600,
			a2: 613
		}), aBk.push({
			dJ: "Max M",
			c: 613,
			a2: 613
		}), aBk.push({
			dJ: "Downtrend A",
			c: 614,
			a2: 635
		}), aBk.push({
			dJ: "Plateau F",
			c: 636,
			a2: 737
		}), aBk.push({
			dJ: "End of Record",
			c: 738,
			a2: 738
		}), gH = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
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
		aBb = Math.floor(.15 * dl.bL), aBh = (aBh = Math.floor((di.dj.dk() ? .018 : .0137) * dl.dm)) < 2 ? 2 : aBh, j9 = a5.a6.jD(1, aBh), aBm()
	}, this.a4q = function(aBn) {
		var q;
		for (this.aAb = !0, q = 0; q < aBn.length; q++) gH.unshift(aBn[q]);
		aBm(), bm.bn = !0
	}, this.eq = function() {
		aBp()
	}, this.f1 = function(c6, c7) {
		c7 > dl.bL - .6 * aBb ? this.a6l ? c6 !== wF && (aBa += c6 - wF, wF = c6, aBp(), aBr(c6), this.a6l = -1 !== aBg, bm.bn = !0) : aBr(c6) && (bm.bn = !0) : this.mY()
	}, this.mY = function() {
		-1 !== aBg && (this.a6l = !1, aBg = -1, bm.bn = !0)
	}, this.ig = function(c6, deltaY) {
		-1 !== aBg && (aBa += Math.floor(deltaY), aBp(), aBr(c6), bm.bn = !0)
	}, this.ds = function(c6, c7) {
		this.f1(c6, c7), -1 !== aBg && (wF = c6, this.a6l = !0)
	}, this.vs = function() {
		-1 !== aBg && (this.a6l = !1)
	}, this.e1 = function() {
		e2.fillStyle = f3.sk;
		for (var aBv, month, hh, dn, aBy, aBz, kN, aC0, aC1, q = aBf; aBe <= q; q--) aBt(q);
		this.aAb && 0 === aBe && (e2.fillStyle = f3.t7, aBt(0)), -1 !== aBg && (e2.fillStyle = f3.kf, aBt(aBg)), -1 !== aBg && (e2.font = j9, a5.a6.textBaseline(e2, 2), (hh = new Date).setTime(aBi.getTime() - 1e3 * aBg * 60 * 60 * 24), month =
			"month", aBv = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(hh), aBv = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(hh)), aBv = aBv + ", " + hh.getUTCDate() + " " + month + " " + hh.getFullYear(), month = 1 === gH[aBg] ? " second played" : " seconds played", month = a5.gN.jO(gH[aBg]) + month, hh = Math.floor(e2.measureText(aBv)
			.width), dn = Math.floor(e2.measureText(month).width), aBy = Math.floor(.5 * (hh + aBh)), aBz = (aBz = aBa + dl.bK - (aBg + 1) * aBc) < aBy ? aBy : aBz > dl.bK - aBy ? dl.bK - aBy : aBz, kN = dl.bL - Math.floor(aBd * Math.pow(gH[
				aBg], a93)), aC0 = Math.floor(1.1 * aBh), aC1 = kN > dl.bL - aC0 ? dl.bL - aC0 : kN, e2.fillStyle = f3.f5, e2.fillRect(dl.bK - dn - aBh, aC1 - aC0, dn + aBh, aC0), e2.fillRect(aBz - aBy, dl.bL - aC0, hh + aBh, aC0), e2
			.fillStyle = f3.f9, a5.a6.textAlign(e2, 2), e2.fillText(month, Math.floor(dl.bK - .5 * aBh), aC1),
			function(kN, aC0) {
				for (var dh, em = -1, ew = gH.length - aBg - 1, q = aBk.length - 1; 0 <= q; q--) ew >= aBk[q].c && ew <= aBk[q].a2 && (-1 === em || aBk[q].a2 - aBk[q].c < aBk[em].a2 - aBk[em].c) && (em = q); - 1 !== em && (dh = Math.floor(e2
					.measureText(aBk[em].dJ).width), e2.fillStyle = f3.f5, e2.fillRect(dl.bK - dh - aBh, kN, dh + aBh, aC0), e2.fillStyle = f3.f9, e2.fillText(aBk[em].dJ, Math.floor(dl.bK - .5 * aBh), kN + aC0))
			}(aC1 - 2 * aC0, aC0), a5.a6.textAlign(e2, 1), e2.fillText(aBv, aBz, dl.bL), e2.strokeStyle = f3.sl, e2.lineWidth = 1, e2.beginPath(), e2.moveTo(0, kN), e2.lineTo(dl.bK, kN), e2.closePath(), e2.stroke())
	}
}

function aC3() {
	this.aC4 = "https://", this.aC5 = this.aC4 + "territorial.io/", this.a3o = this.aC5 + "changelog", this.a3t = this.aC5 + "terms", this.aC6 = this.aC5 + "cookie_policy", this.a3u = this.aC5 + "privacy", this.a3s = this.aC5 + "tutorial", this.a3r =
		this.aC5 + "players", this.a3p = this.aC5 + "clans", this.a3q = this.aC5 + "clan-results", this.da = this.aC4 + "play.google.com/store/apps/details?id=territorial.io", this.db = this.aC4 + "apps.apple.com/app/id1581110913", this.dc = this
		.aC4 + "www.youtube.com/watch?v=toZTQ8aRdFc", this.dd = this.aC4 + "discord.gg/pthqvpTXmh", this.de = this.aC4 + "www.instagram.com/davidtschacher/", this.lV =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function aC7() {
	this.qy = ["s"], this.hn = ["Accept", "You conquered {0}.", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} is attacking you!", "Choose your start position!",
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

function aC8() {
	this.aAa = new aC9, this.aCA = new aCB
}

function aCC() {
	var dr, aCD, bK, bL, dp, aCE, aCF, mH, j6, mI, aCG;

	function iY() {
		return Math.floor((dl.bK - bK) / 2) < eF.bL + 2 * dq.gap ? dl.bL - bL - 4 * dq.gap - eF.bL : dl.bL - bL - 2 * dq.gap
	}
	this.a95 = -1, this.a4 = function() {
		aCG = dr = !1, dp = .61, aCE = .07, aCF = .09, mI = mH = bL = 0, this.a95 = -1
	}, this.resize = function() {
		var j7, kM, dU, aCK, aCL, a1m;
		dr && (bK = kH(bK = di.dj.dk() ? Math.floor(.69 * dl.dm) : Math.floor(.5 * dl.dm), kG(dl.bK - 2 * dq.gap, 10)), bK = kH(bK, Math.floor(3.57 * kG(dl.bL - 2 * dq.gap, 3))), bL = Math.floor(.28 * bK), (j6 = document.createElement("canvas"))
			.width = bK, j6.height = bL, j7 = j6.getContext("2d", {
				alpha: !0
			}), kM = Math.floor(1 + bL / 40), j7.clearRect(0, 0, bK, bL), j7.fillStyle = f3.f5, j7.fillRect(kM, kM, bK - 2 * kM, bL - 2 * kM), j7.lineJoin = "bevel", j7.lineWidth = 2 * kM, j7.strokeStyle = f3.f9, j7.strokeRect(kM, kM, bK -
				2 * kM, bL - 2 * kM), j7.imageSmoothingEnabled = !1, dU = df.get(aCD), aCK = dU.width, aCL = dU.height, a1m = (1 === aCD ? .85 : 21 === aCD ? .666 : .9) * dp * bL / aCL, j7.setTransform(a1m, 0, 0, a1m, Math.floor((bK - a1m *
				aCK) / 2), Math.floor((bL - a1m * aCL) / 2)), j7.drawImage(dU, 0, 0), j7.setTransform(1, 0, 0, 1, Math.floor(bK - aCF * bL - aCE * bL - kM), Math.floor(kM + aCE * bL)),
			function(j7, c) {
				j7.lineWidth = Math.floor(1 + bL / 80), j7.strokeStyle = f3.f9, j7.beginPath(), j7.moveTo(0, 0), j7.lineTo(c, c), j7.moveTo(0, c), j7.lineTo(c, 0), j7.stroke()
			}(j7, Math.floor(aCF * bL)), j7.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(dS, aCI, a5Q, aCJ) {
		dr || aCJ && aCG || (aCD = a5Q ? 21 : dS ? 1 : 2, dr = aCG = !0, this.resize(), le.co(), eF.jU(), mI = bm.ca, -1 === this.a95 && (this.a95 = bm.h4()), mH = aCI ? 1 : 0)
	}, this.cf = function() {
		!dr || 1 <= mH || (mH = 1 < (mH += 5e-4 * (bm.ca - mI)) ? 1 : mH, mI = bm.ca, bm.bn = !0)
	}, this.ds = function(c6, c7) {
		return !(!dr || mH <= 0 || (c6 -= Math.floor((dl.bK - bK) / 2), c7 -= iY(), c6 < 0) || c7 < 0 || bK < c6 || bL < c7 || (bK - bL / 3 < c6 && c7 < bL / 3 && (dr = !1, bm.bn = !0), 0))
	}, this.e1 = function() {
		!dr || mH <= 0 || (e2.globalAlpha = mH, e2.drawImage(j6, Math.floor((dl.bK - bK) / 2), iY()), e2.globalAlpha = 1)
	}
}

function aCN() {
	var el, jy, mH, aCO, bL, j9, fontSize, aCP, aCQ, a8m, aCR, j6, j7, mI, aCS;

	function aCY() {
		e2.drawImage(j6, dq.gap + (d.ag ? dq.gap + lx.a3z() : 0), a4G + 2 * dq.gap)
	}

	function aCT() {
		j6.width = el[0].width + a8m, j6.height = bL + a8m, (j7 = j6.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, el[0].width + a8m, bL + a8m), j7.translate(Math.floor(a8m / 2), Math.floor(a8m / 2)), j7.lineWidth = a8m, j7.fillStyle = 1 === el[0].aCX ? f3.sm : f3.f5, aCZ(), j7.fill(), j7.strokeStyle = 1 === el[0].aCX ? f3.fn : f3
			.f9, aCZ(), j7.stroke(), a5.a6.textAlign(j7, 1), a5.a6.textBaseline(j7, 1), j7.fillStyle = 1 === el[0].aCX ? f3.fn : f3.f9, j7.font = j9[0], j7.fillText(hm.hn[66 + el[0].aCW], Math.floor(el[0].width / 2), Math.floor(.72 * aCP[0] * bL)),
			j7.font = j9[1], j7.fillText(el[0].bO, Math.floor(el[0].width / 2), Math.floor((aCP[0] + .48 * aCP[1]) * bL))
	}

	function aCZ() {
		j7.beginPath(), j7.moveTo(aCR, 0), j7.lineTo(el[0].width - aCR, 0), j7.lineTo(el[0].width, aCR), j7.lineTo(el[0].width, bL - aCR), j7.lineTo(el[0].width - aCR, bL), j7.lineTo(aCR, bL), j7.lineTo(0, bL - aCR), j7.lineTo(0, aCR), j7.closePath()
	}
	this.a4 = function() {
		jy = 4, mH = aCO = mI = 0, el = [], j9 = new Array(2), fontSize = new Array(2), (aCP = new Array(2))[0] = .3, aCP[1] = .7, aCQ = new Array(4), j6 = document.createElement("canvas"), aCS = bm.ca + 2e3, this.resize()
	}, this.resize = function() {
		var q, bK;
		for (bL = Math.floor((di.dj.dk() ? .0725 : .058) * dl.dm), fontSize[0] = Math.floor(.85 * aCP[0] * bL), fontSize[1] = Math.floor(.85 * aCP[1] * bL), j9[0] = a5.a6.jD(1, fontSize[0]), j9[1] = a5.a6.jD(1, fontSize[1]), q = aCQ.length -
			1; 0 <= q; q--) aCQ[q] = this.measureText(hm.hn[66 + q] + "000", j9[0]);
		if (a8m = Math.floor(1 + .05 * bL), aCR = Math.floor(.2 * bL), 0 < el.length) {
			for (q = el.length - 1; 0 <= q; q--) bK = this.measureText(el[q].bO + "00", j9[1]), el[q].width = bK < aCQ[q] ? aCQ[q] : bK;
			aCT()
		}
	}, this.cf = function() {
		0 !== jy && (4 === jy ? bm.ca > aCS && (jy = 0, 1 === d.jc) && oS.rH(ba.cE.cF[ba.cG].name, 3, 1, 9) : (1 === jy ? (0 === mH && (aCT(), mH = 1e-4), 1 <= (mH += .002 * (bm.ca - mI)) && (aCO = 0, jy = 2, mH = 1), bm.bn = !0) : 2 === jy ? ((
			aCO += (bm.ca - mI) / 1e3) > el[0].zN || 1 < aCO && 1 < el.length) && (jy = 3) : 3 === jy && ((mH -= .002 * (bm.ca - mI)) <= 0 && (mH = 0, el.shift(), jy = 0 < el.length ? 1 : 0), bm.bn = !0), mI = bm.ca))
	}, this.measureText = function(bO, j9) {
		return e2.font = j9, Math.floor(e2.measureText(bO).width)
	}, this.aK = function(x4, q) {
		this.rH(p.zj[x4], q, 1, 0 === q ? 3 : 7)
	}, this.rH = function(bO, aCW, aCX, zN) {
		var bK = (bK = this.measureText(bO + "00", j9[1])) < aCQ[aCW] ? aCQ[aCW] : bK;
		el.push({
			bO: bO,
			width: bK,
			aCW: aCW,
			aCX: aCX,
			zN: zN
		}), 0 === jy && (mH = 0, jy = 1, mI = bm.ca)
	}, this.e1 = function() {
		0 !== jy && 0 !== mH && (mH < 1 ? (e2.globalAlpha = mH, aCY(), e2.globalAlpha = 1) : aCY())
	}
}

function aCa() {
	function aCl() {
		ba.bl.cf()
	}

	function aCr(s, aCq) {
		0 < aCq && (ba.bp[s] += aCq, ba.bp[s + 1] += aCq, ba.bp[s + 2] += aCq)
	}

	function ri(s) {
		return ba.bp[s + 2] > ba.bp[s] && ba.bp[s + 2] > ba.bp[s + 1]
	}
	this.uU = -1, this.hb = 0, this.aCb = 0, this.aCc = 8, this.aCd = 32, this.aCe = 8, this.aCf = 32, this.aCg = [0, 0], this.jI = [0, 0, 0, 0], this.a2m = null, this.aCh = !0, this.aCi = !1, this.aBM = function() {
		-1 !== this.uU && clearTimeout(this.uU), this.uU = -1, this.a2m = null, a7w.aCj()
	}, this.a4 = function() {
		7 === cv.cw() || this.aCi || (this.aCh = !0, this.hb = 0, this.aCb = 1, this.aCg = [ba.cE.cF[ba.cG].cD[0], ba.cE.cF[ba.cG].cH[0]], this.jI = [ba.cE.cF[ba.cG].aCk[3], ba.cE.cF[ba.cG].aCk[4], ba.cE.cF[ba.cG].aCk[5], ba.cE.cF[ba.cG].aCk[6]],
			this.aCc = ba.cE.cF[ba.cG].aCk[7], this.aCd = ba.cE.cF[ba.cG].aCk[8], this.aCe = ba.cE.cF[ba.cG].aCk[9], this.aCf = ba.cE.cF[ba.cG].aCk[10], this.aCh ? this.uU = setTimeout(aCl, 16) : this.cf())
	}, this.cf = function() {
		if (8 === cv.cw() && eK.a1E()) this.uU = setTimeout(aCl, 16);
		else {
			if (0 === this.hb) {
				var cT = cU.cV();
				if (cU.cW(ba.cE.cF[ba.cG].aCk[2]), a7w.j([ba.bb, ba.bd, ba.cE.cF[ba.cG].aCk[0], ba.cE.cF[ba.cG].aCk[1]]), cU.cW(cT), this.a2m = a7w.a7x(), this.hb++, this.aCh) return void(this.uU = setTimeout(aCl, 16))
			}
			for (var s, aA, cT = this.aCh ? 10 : 1e6, cT = ba.bd - this.aCb - 1 < cT ? ba.bd - this.aCb - 1 : cT, aCm = this.aCb + cT, c7 = this.aCb; c7 < aCm; c7++)
				for (var c6 = 1; c6 < ba.bb - 1; c6++) ri(s = 4 * (aA = c6 + c7 * ba.bb)) ? this.aCn(s, aA, 1) : (this.aCn(s, aA, 0), function(c6, c7, s) {
					return 1 < c6 && ri(s - 4) || c6 < ba.bb - 2 && ri(s + 4) || 1 < c7 && ri(s - 4 * ba.bb) || c7 < ba.bd - 2 && ri(s + 4 * ba.bb)
				}(c6, c7, s) && this.aCp(c6, c7));
			this.aCb = aCm, this.aCb >= ba.bd - 1 ? (ba.bi.putImageData(ba.bj, 0, 0, 1, 1, ba.bb - 2, ba.bd - 2), bm.bn = !0, this.aBM()) : this.aCh && (this.uU = setTimeout(aCl, 16))
		}
	}, this.aCn = function(s, aA, ew) {
		aCr(s, Math.floor(this.aCg[ew] + this.jI[ew] * this.a2m[aA] / 1e4) - ba.bp[s])
	}, this.aCs = function(s, fA, aCt, ew, jI) {
		aCr(s, Math.floor(this.aCg[ew] + (1 - fA / aCt) * jI) - ba.bp[s])
	}, this.aCp = function(es, et) {
		for (var s, fA, aCt, aBa = es - this.aCd, aCu = et - this.aCd, aCv = es + this.aCd, aCm = et + this.aCd, aBa = aBa < 1 ? 1 : aBa, aCv = aCv > ba.bb - 2 ? ba.bb - 2 : aCv, aCm = aCm > ba.bd - 2 ? ba.bd - 2 : aCm, c7 = aCu < 1 ? 1 :
			aCu; c7 <= aCm; c7++)
			for (var c6 = aBa; c6 <= aCv; c6++) ri(s = 4 * (c6 + c7 * ba.bb)) ? (aCt = this.aCc + (this.aCd - this.aCc) * this.a2m[c6 + ba.bb * c7] / 1e4, Math.abs(es - c6) > aCt || Math.abs(et - c7) > aCt || aCt <= (fA = Math.sqrt((es - c6) * (
				es - c6) + (et - c7) * (et - c7))) || this.aCs(s, fA, aCt, 1, this.jI[3])) : (aCt = this.aCe + (this.aCf - this.aCe) * this.a2m[c6 + ba.bb * c7] / 1e4, Math.abs(es - c6) > aCt || Math.abs(et - c7) > aCt || aCt <= (fA = Math
				.sqrt((es - c6) * (es - c6) + (et - c7) * (et - c7))) || this.aCs(s, fA, aCt, 0, this.jI[2]))
	}
}

function aCw() {
	var c6, c7, bK, bL, aCx, aBa, aCu, aCy, player, gH;

	function aD3() {
		return function() {
			var q;
			for (q = 0; q < 8; q++)
				if (c6 = dG(bK * cU.random(), cU.value(100)), c7 = dG(bL * cU.random(), cU.value(100)), aDA()) return 1;
			return
		}() || function() {
			var ik, il, gT, kj, fC, a3Z;
			for (ik = dG(bK * cU.random(), cU.value(100)), il = dG(bL * cU.random(), cU.value(100)), gT = 40; 1 <= gT; gT--)
				for (kj = bL - gT; 0 <= kj; kj -= 40)
					for (c7 = (kj + il) % bL, fC = 40; 1 <= fC; fC--)
						for (a3Z = bK - fC; 0 <= a3Z; a3Z -= 40)
							if (c6 = (a3Z + ik) % bK, aDA()) return 1;
			return
		}()
	}

	function aDA() {
		for (var s, aDC, gap = dG(aCx - aCy, 2), aCm = aCu + c7 * aCx + gap, aCv = aBa + c6 * aCx + gap, aDB = aCm + aCy - 1; aCm <= aDB; aDB--)
			for (aDC = aCv + aCy - 1; aCv <= aDC; aDC--)
				if (s = ol.a0x(aDC, aDB), !ol.tl(s) || ol.q4(s)) return;
		return 1
	}

	function aD4(a3Z, kj) {
		aCz(), aDD(a3Z - 2, kj - 2)
	}

	function aCz() {
		p.eA[player] = 0, p.eE[player] = 0, p.r[player] = p.r5[player] = 0, p.hB[player] = [], p.gf[player] = [], p.at[player] = [], p.te[player] = [], p.eM[player] = p.eN[player] = p.eO[player] = p.eP[player] = 0
	}

	function aDD(a3Z, kj) {
		var s, q, aDE, aDF;
		for (p.eA[player] = 1, player < d.e ? p.eE[player] = d.ka : p.eE[player] = jw[gh.gd[player - d.e]], p.eM[player] = a3Z + 10, p.eN[player] = kj + 10, p.eP[player] = p.eO[player] = 0, aDE = a3Z; aDE < a3Z + 4; aDE++)
			for (aDF = kj; aDF < kj + 4; aDF++)(a3Z < aDE && aDE < a3Z + 3 || kj < aDF && aDF < kj + 3) && (s = ol.a0x(aDE, aDF), ol.tl(s)) && (p.eM[player] = aDE < p.eM[player] ? aDE : p.eM[player], p.eO[player] = aDE > p.eO[player] ? aDE : p.eO[
				player], p.eN[player] = aDF < p.eN[player] ? aDF : p.eN[player], p.eP[player] = aDF > p.eP[player] ? aDF : p.eP[player], gH[p.r[player]] = s, p.r[player]++, ol.tf(s, player));
		for (p.r5[player] = p.r[player], q = p.r[player] - 1; 0 <= q; q--) ol.aDG(gH[q], player) ? (ol.tq(gH[q], player), p.gf[player].push(gH[q])) : ol.aCo(gH[q]) ? (ol.tq(gH[q], player), p.at[player].push(gH[q])) : ol.aDH(gH[q]) && (ol.tq(gH[q],
			player), p.te[player].push(gH[q]))
	}

	function aD9(a3Z, kj) {
		for (var s, aDC, aDB = kj; kj - 6 < aDB; aDB--)
			for (aDC = a3Z; a3Z - 6 < aDC; aDC--)
				if (s = ol.a0x(aDC, aDB), ol.q4(s)) return;
		return 1
	}
	this.a4 = function() {
		var q, a3Z, kj;
		if (gH = new Array(12), aCy = 6, aCx = 10, bK = dG(ba.bb, aCx), bL = dG(ba.bd, aCx), aBa = dG(ba.bb - aCx * bK, 2), aCu = dG(ba.bd - aCx * bL, 2), d.e9)
			for (q = 0; q < d.e; q++) player = q, aCz(), p.eA[player] = 1;
		if (g0.cy && g0.cE.aD0) {
			for (player = 0; player < d.b4; player++)
				if (1 !== p.eA[player]) {
					if (player < d.dH) {
						if (function() {
								var a3Z = g0.cE.aD0[player] + 1,
									kj = g0.cE.aD8[player] + 1;
								if (3 < a3Z && a3Z < ba.bb - 5 && 3 < kj && kj < ba.bd - 5 && ol.tl(ol.a0x(a3Z, kj)) && aD9(a3Z + 3, kj + 3)) return aD4(a3Z + 1, kj + 1), 1;
								return
							}()) continue;
						if (aD3()) {
							a3Z = aBa + c6 * aCx + dG(aCx, 2), kj = aCu + c7 * aCx + dG(aCx, 2), aD4(a3Z, kj);
							continue
						}
					}
					aCz()
				}
		} else ! function() {
			var a3Z, kj;
			for (player = 0; player < d.b4; player++) 1 !== p.eA[player] && (player < d.dH && aD3() ? (a3Z = aBa + c6 * aCx + dG(aCx, 2), kj = aCu + c7 * aCx + dG(aCx, 2), aD4(a3Z, kj)) : aCz())
		}();
		ab.eD[7] = p.r[d.eC], ab.eD[8] = p.eE[d.eC]
	}, this.e5 = function(aN, yc, yb) {
		var q, a3Z, kj, s, c6, c7;
		for (player = aN, q = 0; q < 20; q++)
			for (a3Z = yc + q; yc - q <= a3Z; a3Z--)
				for (kj = yb + q; yb - q <= kj; kj--)
					if ((a3Z === yc + q || a3Z === yc - q || kj === yb + q || kj === yb - q) && 3 < a3Z && a3Z < ba.bb - 5 && 3 < kj && kj < ba.bd - 5 && ol.tl(ol.a0x(a3Z, kj)) && aD9(a3Z + 3, kj + 3)) {
						if (0 < p.r[player]) {
							for (c7 = c6 = s = void 0, c6 = p.eO[player]; c6 >= p.eM[player]; c6--)
								for (c7 = p.eP[player]; c7 >= p.eN[player]; c7--) s = 4 * (c7 * ba.bb + c6), ol.tj(player, s) && (ol.aDJ(s), p.r[player]--);
							aCz()
						}
						return aDD(a3Z - 1, kj - 1), !0
					} return !1
	}, this.eB = function(aN) {
		player = aN, aD3() ? aD4(aBa + c6 * aCx + dG(aCx, 2), aCu + c7 * aCx + dG(aCx, 2)) : aCz()
	}
}

function aDK() {
	var ew = 0,
		aDL = new Uint16Array(32);

	function remove(a3D) {
		var q;
		for (ew -= 2, q = a3D; q < ew; q += 2) aDL[q] = aDL[q + 2], aDL[q + 1] = aDL[q + 3]
	}
	this.a4 = function() {
		ew = 0
	}, this.cf = function() {
		var q, aN, aM;
		if (0 !== ew)
			if (0 === p.eA[d.eC] || aU.xE(d.eC) === aU.tu(d.eC)) ew = 0;
			else
				for (q = ew - 2; 0 <= q; q -= 2)(aN = aDL[q]) < d.b4 && 0 === p.eA[aN] ? remove(q) : (aM = aDL[q + 1], (aN >= d.b4 && tx(d.eC) || aN < d.b4 && ty(d.eC, aN)) && (h7.ec.aL(aM, aN), remove(q)))
	}, this.wS = function(aN, aM) {
		! function(aN, aM) {
			var q;
			for (q = 0; q < ew; q += 2)
				if (aDL[q] === aN) return aDL[q + 1] = Math.min(aDL[q + 1] + aM, 1023), 1;
			return
		}(aN, aM) && 32 !== ew && (aDL[ew] = aN, aDL[ew + 1] = aM, ew += 2)
	}
}

function aC9() {
	function aDS(dS, cT, min, max) {
		return min + (dS * cT + 137) % (max - min)
	}
	this.cf = function(aDN, aDO) {
		let aDQ = 1;
		for (let q = 0; q <= 10; q++) aDQ = function(aDQ, aDN, aDO, ip) {
			var c = 65536 + (aDQ * ip + 7 & 16383);
			for (let q = 0; q < c; q++) aDQ = 1 + aDQ * aDN % aDO;
			return aDQ
		}(aDQ, aDN, aDO, q), aDN = aDS(aDN, aDQ, 16384, 65536), aDO = aDS(aDO, aDQ, 1 << 18, 1 << 20);
		return aDQ - 1 & 65535
	}
}

function aDT() {
	var aDU, aDV, a8F, jJ, j5, aDW, aDX, aDY, aDZ, j9, fontSize, mI, aDa, cg, aDb = 0;

	function aDd() {
		return v.w.cM[(aDa + aDb) % v.w.cL]
	}

	function aDc() {
		aDa++, mI = bm.ca, v.w.cc(aDd(), 4) && (cg = !0, v.nz.uQ(aDd()))
	}

	function aDf() {
		0 === aDa ? d1.d2(3249) : (aDa === v.w.cL - 1 && (aDa = -1), aDc())
	}

	function aDk(c7, aBc, aBF) {
		var kM = Math.floor((dl.bK - jJ) / 2) + aDX,
			kO = kM + Math.floor(aBF * (jJ - 2 * aDX));
		e2.lineWidth = aBc, e2.beginPath(), e2.moveTo(kM, c7), e2.lineTo(kO, c7), e2.lineTo(Math.floor(kM - aDX + aBF * jJ), c7 + a8F), e2.lineTo(kM - aDX, c7 + a8F), e2.closePath()
	}
	this.a4 = function() {
		cv.setState(6), aDU = 0, aDV = 1, aDY = "rgba(0,220,120,0.4)", aDZ = "rgba(0,0,0,0.8)", this.resize(), bm.bn = !0, aDa = 0, cg = !1, aDc()
	}, this.resize = function() {
		jJ = Math.floor((di.dj.dk() ? .5 : .25) * dl.dm), j5 = jJ + 12, a8F = Math.floor(.125 * jJ), aDX = 3 * a8F, aDW = Math.floor(.225 * jJ), fontSize = Math.floor(.3 * a8F), j9 = a5.a6.jD(0, fontSize)
	}, this.a7e = function(gT) {
		aDb = gT
	}, this.aDe = function(cj) {
		cj === aDd() && (cg = !1, aDf())
	}, this.aDg = function(cj) {
		6 !== cv.cw() || cg || (mI = bm.ca, cg = !0)
	}, this.ds = function(c6, c7) {
		var kM = Math.floor((dl.bK - j5) / 2),
			kN = Math.floor(.5 * (dl.bL - dq.gap - a8F - aDW)) + a8F + dq.gap;
		return kM < c6 && c6 < kM + j5 && kN < c7 && c7 < kN + aDW && (this.w6(), ma.f1(c6, c7, !1), !0)
	}, this.w6 = function() {
		v.w.d3(3260), dw.w.a7b()
	}, this.cf = function() {
		6 === cv.cw() && (cg ? bm.ca > mI + 12e3 && d1.d2(3250) : bm.ca > mI + 12e3 && aDf(), 100 < (aDU += .07 * aDV * (aDU < 16 ? 5 + aDU : 84 < aDU ? 105 - aDU : 17)) ? (aDU = 100, aDV = -1) : aDU < 0 && (aDU = 0, aDV = 1), aDY = "rgba(0," +
			Math.floor(190 - 1.9 * aDU) + "," + Math.floor(120 - 1.2 * aDU) + "," + (.4 + .004 * aDU) + ")", aDZ = "rgba(0," + Math.floor(1.9 * aDU) + "," + Math.floor(1.2 * aDU) + "," + (.8 - .004 * aDU) + ")", bm.bn = !0)
	}, this.e1 = function() {
		var c6 = Math.floor((dl.bK - j5) / 2),
			c7 = Math.floor(.5 * (dl.bL - dq.gap - a8F - aDW));
		! function(title, c7, aBc, aBF) {
			e2.fillStyle = aDZ, aDk(c7, aBc, 1), e2.fill(), e2.fillStyle = aDY, aDk(c7, aBc, aBF), e2.fill(), e2.strokeStyle = f3.f9, aDk(c7, aBc, 1), e2.stroke(),
				function(aDm, c7) {
					a5.a6.textAlign(e2, 1), a5.a6.textBaseline(e2, 1), e2.font = j9, e2.fillStyle = f3.f9, e2.fillText(aDm, Math.floor(.5 * dl.bK), Math.floor(c7 + .58 * a8F))
				}(title, c7)
		}("Loading", c7, 3, aDU / 100),
		function(c6, c7, bK, bL, hn) {
			e2.fillStyle = f3.sh, e2.fillRect(c6, c7, bK, bL), e2.lineWidth = 3, e2.strokeStyle = f3.f9, e2.strokeRect(c6, c7, bK, bL);
			var c = Math.floor(.3 * bL);
			a5.a6.textAlign(e2, 1), a5.a6.textBaseline(e2, 1), e2.font = a5.a6.jD(0, c), e2.fillStyle = f3.f9, e2.fillText(hn, Math.floor(c6 + bK / 2), Math.floor(c7 + bL / 2 + .1 * c))
		}(c6, c7 + a8F + dq.gap, j5, aDW, "Back")
	}
}

function a5r() {
	function aDu() {}
	this.a4 = function() {}, this.hi = function() {
		return !!aDu() && (aiptag.cmd.player.push(function() {
			aiptag.adplayer.startVideoAd()
		}), !0)
	}, this.hideCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.hideCMPButton && aipAPItag.hideCMPButton()
	}, this.showCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.showCMPButton && aipAPItag.showCMPButton()
	}, this.showCMPScreen = function() {
		aDu() && aipAPItag.showCMPScreen()
	}
}

function aDv() {
	this.mt = function(dS) {
		return [dS >> 12 & 63, dS >> 6 & 63, 63 & dS]
	}, this.xm = function(dS) {
		var gH = this.mt(dS);
		for (let q = 0; q < 3; q++) gH[q] = ~~(4.05 * gH[q]);
		return gH
	}, this.aDw = function(dS) {
		dS = this.xm(dS);
		return a5.color.rU(dS[0], dS[1], dS[2])
	}, this.xn = function(gH) {
		for (let q = 0; q < 3; q++) gH[q] = ~~(gH[q] / 4.04);
		return (gH[0] << 12) + (gH[1] << 6) + gH[2]
	}, this.rU = function(fA, fB, fC) {
		return "rgb(" + fA + "," + fB + "," + fC + ")"
	}, this.sg = function(fA, fB, fC, gT) {
		return "rgba(" + fA + "," + fB + "," + fC + "," + gT.toFixed(3) + ")"
	}, this.xo = function(dU) {
		var gH = dU.split("(")[1].split(","),
			a8J = (gH.length, aW.a8J);
		for (let q = 0; q < 3; q++) a8J[q] = parseInt(gH[q]);
		return a8J
	}, this.aDx = function(aDy, bs) {
		var gH = aDy.slice(aDy.indexOf("(") + 1, aDy.indexOf(")")).split(","),
			a8J = aW.a8J;
		for (let q = 0; q < 3; q++) a8J[q] = b8.b9(parseInt(gH[q].trim(), 10) + bs, 0, 255);
		return 3 === gH.length ? this.rU(a8J[0], a8J[1], a8J[2]) : this.sg(a8J[0], a8J[1], a8J[2], parseFloat(gH[3].trim()))
	}, this.xl = function(gH) {
		let bO = "#";
		for (let q = 0; q < 3; q++) {
			var fA = gH[q].toString(16);
			bO += 1 === fA.length ? "0" + fA : fA
		}
		return bO
	}, this.xp = function(bO) {
		var fA, fB;
		return bO.length < 7 ? f3.fn : (fA = parseInt(bO.slice(1, 3), 16), fB = parseInt(bO.slice(3, 5), 16), bO = parseInt(bO.slice(5, 7), 16), this.rU(fA, fB, bO))
	}
}

function oW(id, pU) {
	let nH, a1T;

	function aE1() {
		a1T.ps.innerHTML += "<br>New Connection..."
	}
	this.aDz = !0, this.show = function() {
		nH.show(), this.resize(), 15 === id ? v.w.cc(0, id) ? this.aE0() : aE1() : 16 === id ? v.w.cc(0, id) ? v.cs.a2u(2) : aE1() : 17 === id ? v.w.cc(0, id) ? v.cs.a2u(3) : aE1() : 18 === id ? (v.w.close(0, 3253), v.w.cc(0, id), aE1()) : 20 ===
			id ? v.w.cc(0, id) ? v.o2.a7Z(pU) : aE1() : 21 === id ? v.w.cc(0, id) ? v.o5.pf(pU.oX, pU.oY, pU.oZ) : aE1() : 22 === id ? v.w.cc(0, id) ? v.o5.pg(pU.oX, pU.ph, pU.pi) : aE1() : 23 === id ? v.w.cc(0, id) ? v.o5.pk(pU.pl, pU.fw) :
			aE1() : 24 === id && (v.w.cc(0, id) ? v.o5.po(pU.pl, pU.oY, pU.oZ) : aE1())
	}, this.aAc = function() {
		15 === id ? this.aE0() : 16 === id ? v.cs.a2u(2) : 17 === id ? v.cs.a2u(3) : 18 === id ? dw.dx(8, this.ck, new oW(16)) : 20 === id ? v.o2.a7Z(pU) : 21 === id ? v.o5.pf(pU.oX, pU.oY, pU.oZ) : 22 === id ? v.o5.pg(pU.oX, pU.ph, pU.pi) :
			23 === id ? v.o5.pk(pU.pl, pU.fw) : 24 === id && v.o5.po(pU.pl, pU.oY, pU.oZ)
	}, this.fi = function(code, a0O = !1, data) {
		if (a0O || code === id)
			if (15 === code) dw.dx(7, this.ck);
			else if (16 === code) dw.dx(7, this.ck);
		else if (17 === code)
			if (v.w.close(0, 3252), ex.w.nq(0), 0 < ex.ey.data[117].np.length) {
				let data = ex.w.nr(0);
				ex.fT.fU(105, data.ns), ex.fT.fU(106, data.password), dw.dx(8, this.ck, new oW(16))
			} else ex.fT.fU(105, ""), dw.w.yR();
		else 20 === code ? dw.dx(7, this.ck) : 21 === code ? dw.dx(10, 0, new a7k(data)) : 23 === code && dw.dx(13, 0, new yG({
			data: data,
			ya: pU.ya,
			pl: pU.pl,
			ca: new Date
		}))
	}, this.aE0 = function() {
		i.j(48), i.l(24, Math.floor(b8.pow(24) * Math.random())), i.l(24, Math.floor(b8.pow(24) * Math.random())), bV.a4(i.y), ex.fT.fU(110, fV.bX.fW(fV.bX.fX(8))), v.o2.a7Y()
	}, this.co = function() {
		nH.co()
	}, this.resize = function() {
		nH.resize(), a1T.resize()
	}, this.ev = function(dU) {
		2 === dU && nH.nd[0].ne()
	}, nH = new nJ("⏳ Connecting...", [new hl("❌ " + hm.hn[92], function() {
		dw.w.yR()
	})]), a1T = new pq(nH.nQ, "Find Server...")
}

function a2h() {
	function aE2(ru) {
		var aEA = 4 + .03 * (1 + 1.5 * di.dj.dk()) * dl.dm / iJ;
		return aE.aEB(ru, aW.pD[1]) < aEA
	}
	this.nv = function(player, ru) {
		return !!aE.aF(ru) && an.w.ao !== an.w.ap && an.w.aq[player] !== an.w.ar && 0 !== p.at[player].length && !!an.au.av(player, ru) && !!aE2(ru)
	}, this.nw = function(player, ay, ru) {
		return !!(aE.aF(ru) && this.b0(player, ay) && an.au.b1(ru) && aE2(ru))
	}, this.b0 = function(player, id) {
		for (var aE3, oY = player << 3, oZ = oY + an.w.aq[player], a4N = an.w.a4N, v6 = an.w.v6, q = oY; q < oZ; q++)
			if (id === v6[aE3 = a4N[q]]) return aW.pD[3] = aE3, !0;
		return !1
	}, this.ax = function(aA) {
		var pC = an.pB.pC;
		return !!this.b0(d.eC, pC) && (h7.ec.ax(pC, aA), !0)
	}, this.a3Q = function(es, et, aE4 = !1) {
		var q, oZ, yk, a4N, aE5, p0, aE6, oL, p2, aE7, player = d.eC,
			c = an.w.aq[player];
		if (0 === c) return !1;
		for (a4N = an.w.a4N, p0 = an.w.p0, p2 = an.w.p2, oZ = (player = player << 3) + c, aE5 = .4 * a5.a6.xy(.5) * dl.dm / iJ, yk = -1, q = player; q < oZ; q++) aE7 = a4N[q], aE6 = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(p2[aE7]))), (oL = aE
			.aE8(es, et, p0[aE7])) - aE6 < aE5 && (aE5 = oL, yk = aE7);
		return !(yk < 0 || (aE4 ? aW.aE9[0] = an.w.v6[yk] : an.pB.pC = an.w.v6[yk], 0))
	}, this.a3W = function(es, et) {
		var q, yk, aE5, p0, aE6, oL, p2, c = an.w.ao;
		if (c < 1) return -1;
		for (p0 = an.w.p0, p2 = an.w.p2, aE5 = 1e3, yk = -1, q = 0; q < c; q++) aE6 = 16 * a5.a6.xy(.5) * (.625 + .125 * Math.sqrt(Math.sqrt(p2[q]))), (oL = aE.aE8(es, et, p0[q])) < aE5 && oL < aE6 && (aE5 = oL, yk = q);
		return yk
	}
}

function a6L() {
	let nH, aEC, yJ, aED, aEE, aEF, colors = [0, 0, 0],
		aEG = -1;

	function aEJ(q) {
		var fA = 0 === q ? 150 : 2 === q ? 30 : 0,
			fB = 1 === q ? 130 : 2 === q ? 30 : 0,
			fC = 2 === q ? 220 : 0,
			aEK = aEC.c7 + q * (dq.gap + aEF);
		e2.fillStyle = "rgb(" + fA + "," + fB + "," + fC + ")", e2.fillRect(aED, aEK, colors[q] * aEE, aEF), e2.strokeStyle = f3.f9, e2.strokeRect(aED, aEK, aEE, aEF), e2.fillStyle = f3.f9, e2.font = a5.a6.jD(0, .32 * aEF), a5.a6.textBaseline(e2, 1),
			a5.a6.textAlign(e2, 0), e2.fillText((0 === q ? "Red: " : 1 === q ? "Green: " : "Blue: ") + aEH(q), aED + dq.gap, aEK + .53 * aEF)
	}

	function aEH(q, aEL = 256) {
		return b8.b9(Math.floor(aEL * colors[q]), 0, aEL - 1)
	}

	function er(es, et) {
		return !(es < aED || et < aEC.c7 || es > aEC.c6 + aEC.bK || et > aEC.c7 + aEC.bL)
	}
	this.show = function() {
		var dS = ex.ey.data[121].value;
		colors[0] = (dS >> 12) / 63, colors[1] = (dS >> 6 & 63) / 63, colors[2] = (63 & dS) / 63, nH.show(), this.resize()
	}, this.co = function() {
		ex.fT.fU(121, (aEH(0, 64) << 12) + (aEH(1, 64) << 6) + aEH(2, 64)), nH.co()
	}, this.resize = function() {
		nH.resize(), aEC.resize();
		var dU = dl.vh,
			xe = nH.xZ(),
			aEI = (aEC.c7 = Math.max(aEC.c7, dU * xe.xa + dq.gap), dU * xe.xd - 2 * dq.gap);
		aEC.bL = Math.min(aEC.bL, aEI), aEC.bK = 2 * aEC.bL, aEC.c7 = dU * xe.xa + .5 * (dU * xe.xd - aEC.bL), aEC.c6 = .5 * (dl.bK - aEC.bK), yJ = .25 * aEC.bK, aED = aEC.c6 + yJ + dq.gap, aEE = aEC.bK - yJ - dq.gap, aEF = (aEC.bL - 2 * dq
			.gap) / 3
	}, this.e1 = function() {
		var fA, fB, fC;
		nH.e1(), e2.lineWidth = dq.f8, fA = aEH(0), fB = aEH(1), fC = aEH(2), e2.fillStyle = "rgb(" + fA + "," + fB + "," + fC + ")", e2.fillRect(aEC.c6, aEC.c7, yJ, aEC.bL), e2.strokeStyle = f3.f9, e2.strokeRect(aEC.c6, aEC.c7, yJ, aEC.bL), e2
			.fillStyle = fA + fB + fC < 306 && fB < 150 ? f3.f9 : f3.fn, a5.a6.textBaseline(e2, 1), a5.a6.textAlign(e2, 1), e2.font = a5.a6.jD(0, .1 * aEC.bL), e2.rotate(-Math.PI / 2), e2.fillText("National Color", -aEC.c7 - .5 * aEC.bL, aEC.c6 +
				.5 * yJ), e2.setTransform(1, 0, 0, 1, 0, 0), aEJ(0), aEJ(1), aEJ(2)
	}, this.ds = function(es, et) {
		er(es, et) && (aEG = b8.b9(Math.floor((et - aEC.c7) / (aEF + .75 * dq.gap)), 0, 2), colors[aEG] = b8.b9((es - aED) / aEE, 0, 1), bm.bn = !0)
	}, this.f1 = function(es) {
		-1 !== aEG && (colors[aEG] = b8.b9((es - aED) / aEE, 0, 1), bm.bn = !0)
	}, this.ig = function(es, et, deltaY) {
		er(es, et) && (es = b8.b9(Math.floor((et - aEC.c7) / (aEF + .75 * dq.gap)), 0, 2), colors[es] = b8.b9(colors[es] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bm.bn = !0)
	}, this.f2 = function() {
		0 <= aEG && (aEG = -1, bm.bn = !0)
	}, this.ev = function(dU) {
		2 === dU && nH.nd[0].ne()
	}, nH = new nJ("Choose Your Nation's Color!", [new hl("❌ " + hm.hn[92], function() {
		dw.w.yR()
	})], !1), aEC = new ls([.5, .25], [.5, .5], 1)
}

function aEM() {
	this.zs = function(bO, font, maxWidth) {
		if (e2.font = font, e2.measureText(bO).width <= maxWidth) return bO;
		for (let q = bO.length - 1; 1 <= q; q--)
			if (bO = bO.substring(0, q), e2.measureText(bO + "...").width <= maxWidth) return bO + "...";
		return "..."
	}
}

function aEN() {
	var dS, bK, bL, max, aEO, a0z, aEQ, aER, aES, aET, aEU, aEV, aEW, aEX, aEP = 1e4;

	function aEe(aEd, a12, c) {
		var q;
		for (aEQ[0] = aEd, q = 1; q < c; q++) aEQ[q] = aEQ[q - 1] + a12, a12 = aEQ[q] >= aEP ? (aEQ[q] = aEP - 1, -a12) : aEQ[q] < 0 ? (aEQ[q] = 0, -a12) : (a12 += 16384 <= cU.random() ? a0z : -a0z) < -aEO ? -aEO : aEO < a12 ? aEO : a12
	}

	function aEg(c6, c7, aEh, c) {
		(aEh ? function(c6, c7, c) {
			var q;
			for (q = 0; q < c; q++) dS[c7 * bK + c6 + q] = aEQ[q]
		} : function(c6, c7, c) {
			var q;
			for (q = 0; q < c; q++) dS[c7 * bK + c6 + q * bK] = aEQ[q]
		})(c6, c7, c)
	}

	function aEk(value, c) {
		var q, aEl, ip, qC = value - aEQ[c - 1];
		if (0 != qC) {
			for (aEl = 1 + dG(Math.abs(qC), c - 1), aEl = qC < 0 ? -aEl : aEl, aEQ[c - 1] = value, ip = (ip = c - 1 - dG(Math.abs(qC), Math.abs(aEl))) < 1 ? 1 : c - 2 < ip ? c - 2 : ip, q = c - 2; ip <= q; q--) aEQ[q] += qC - (c - 1 - q) * aEl;
			(qC < 0 ? function(c) {
				var q;
				for (q = c - 2; 1 <= q; q--) aEQ[q] < 0 && (aEQ[q] = -aEQ[q] - 1)
			} : function(c) {
				var q;
				for (q = c - 2; 1 <= q; q--) aEQ[q] >= aEP && (aEQ[q] = 2 * aEP - aEQ[q] - 1)
			})(c)
		}
	}

	function aEo(aEp, aEq, c) {
		for (var q = 0; q < c; q++) aEp[q] = aEq[q]
	}

	function aEr(gH) {
		for (var q = 0; q < gH.length - 1; q++) gH[q] = gH[q + 1] - gH[q];
		gH[gH.length - 1] = gH[gH.length - 3]
	}

	function aEs(a3D, gap, q3) {
		aER.push(a3D), aES.push(gap), aET.push(q3)
	}
	this.j = function(pU) {
		! function(pU) {
			var q;
			for (bK = pU[0], bL = pU[1], aEO = pU[2], a0z = pU[3], dS = new Int16Array(bK * bL), max = bL < bK ? bK : bL, aEQ = new Int16Array(max), aER = [], aES = [], aET = [], aEU = new Array(bK), aEV = new Array(bL), q = bK - 1; 0 <= q; q--)
				aEU[q] = !1;
			for (q = bL - 1; 0 <= q; q--) aEV[q] = !1;
			aEW = new Int16Array(bK), aEX = new Int16Array(bL)
		}(pU),
		function(c) {
			var aEd = cU.random() % aEP,
				a12 = cU.random() % (2 * aEO + 1) - aEO;
			aEe(aEd, a12, c)
		}(max), aEo(aEX, aEQ, bL), aEg(0, 0, !0, bK);
		var c6, c7, pU = dS[0],
			c = max,
			a12 = cU.random() % (2 * aEO + 1) - aEO;
		for (aEe(pU, a12, c), aEo(aEW, aEQ, bK), aEg(0, 0, !1, bL), aEr(aEW), aEr(aEX), aEe(dS[bK - 1], aEW[bK - 1], bL), aEg(bK - 1, 0, !1, bL), aEe(dS[bK * (bL - 1)], aEX[bL - 1], bK), aEk(dS[bK * bL - 1], bK), aEg(0, bL - 1, !0, bK), aEU[bK -
				1] = aEU[0] = !0, aEV[bL - 1] = aEV[0] = !0, aEs(0, bK, !0), aEs(0, bL, !1), ! function() {
				var a2e, a3D;
				for (;;) {
					if (a2e = function() {
							var q, a2e = aER.length - 1;
							for (q = a2e - 1; 0 <= q; q--) aES[q] > aES[a2e] && (a2e = q);
							return a2e
						}(), aES[a2e] < 5) return;
					a3D = aER[a2e] + dG(aES[a2e], 2), (aET[a2e] ? function(c6) {
						var c, aEw, q, mZ = 0,
							aEx = 0;
						for (; aEx < bL - 1;) {
							for (q = mZ + 1; q < bL; q++)
								if (aEV[q]) {
									aEx = q;
									break
								} c = aEx - mZ + 1, aEe(dS[c6 + bK * mZ], 0 === mZ ? aEW[c6] : aEQ[aEw - 1] - aEQ[aEw - 2], c), aEk(dS[aEx * bK + c6], c), aEg(c6, mZ, !1, c), aEw = c, mZ = aEx
						}
						aEU[c6] = !0
					} : function(c7) {
						var c, aEw, q, mZ = 0,
							aEx = 0;
						for (; aEx < bK - 1;) {
							for (q = mZ + 1; q < bK; q++)
								if (aEU[q]) {
									aEx = q;
									break
								} c = aEx - mZ + 1, aEe(dS[c7 * bK + mZ], 0 === mZ ? aEX[c7] : aEQ[aEw - 1] - aEQ[aEw - 2], c), aEk(dS[c7 * bK + aEx], c), aEg(mZ, c7, !0, c), aEw = c, mZ = aEx
						}
						aEV[c7] = !0
					})(a3D), aEs(a3D, aER[a2e] + aES[a2e] - a3D, aET[a2e]), aES[a2e] = a3D - aER[a2e] + 1
				}
			}(), c6 = 0; c6 < bK; c6++)
			if (!aEU[c6])
				for (c7 = 0; c7 < bL; c7++) aEV[c7] || ! function(c6, c7) {
					var value = dS[c7 * bK + c6 - 1] + dS[(c7 - 1) * bK + c6],
						a1t = 2;
					aEU[c6 + 1] && (a1t++, value += dS[c7 * bK + c6 + 1]);
					aEV[c7 + 1] && (a1t++, value += dS[(c7 + 1) * bK + c6]);
					dS[c7 * bK + c6] = dG(value, a1t)
				}(c6, c7)
	}, this.a7x = function() {
		return dS
	}, this.aCj = function() {
		dS = null
	}
}

function a2Y(pQ, type = 0, aEz = null) {
	var a2;
	this.a2 = document.createElement("input"), (a2 = this.a2).type = type ? "number" : "text", a2.id = "input" + pQ.title, a2.value = pQ.value, a2.style.width = "100%", a2.style.userSelect = "none", a2.style.outline = "none", a2.style.resize =
		"none", a2.style.border = "inherit", a2.style.font = "inherit", a2.style.color = f3.f9, a2.style.backgroundColor = f3.j2, a2.style.fontSize = "1em", a2.style.padding = "0.1em 0.2em", -1 !== pQ.ew && (a2.addEventListener("blur", function() {
			ex.fT.fU(pQ.ew, a2.value)
		}), a2.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), ex.fT.fU(pQ.ew, a2.value), aEz ? aEz() : a2.blur())
		}))
}

function v3() {
	this.rP = 0, this.f = null;
	let aF0 = this.n = 0;
	this.rO = 0, this.aF1 = function() {
		0 !== p.eA[d.eC] && ol.rB(d.eC) && 2 === d.m && (d.rN = 2)
	}, this.pG = function() {
		var nC, hh;
		this.f = g.az.rA(), this.rP = aAZ.aCA.aF2(), d.k < 7 && 2 !== d.m ? this.n = lx.a41() : this.n = g.az.rC(), 8 === d.k && 1 === d.m ? (nC = 1 - d.wa, hh = p.r[nC], p.r[nC] = 0, h7.aB.b(), p.r[nC] = hh) : h7.aB.b(), aF0 = .01 * p.o[d.eC] /
			50, this.rO = 0, d.k < 7 ? g.v2.pG(this.f) : 7 === d.k || 10 === d.k ? a5.aB.aD(d.eC) && (nC = g.result.rP * (1 + d.rQ), 2 === d.m ? g.result.rO += nC * p.r[d.eC] / g.result.n : a0j[0] === d.eC && (g.result.rO += nC)) : 8 !== d.k ||
			1 !== d.rN || 0 === ex.ey.data[107].value || 100 <= (hh = ex.ey.data[108].value) || (g.result.rO += .01 * (100 - hh) * 10)
	}, this.aF7 = function() {
		0 !== aF0 && 0 !== g.result.rO && eS.rI(0, "🏆 You earned prize money of 🧈 " + g.result.rO.toFixed(2) + ".", 40, 0, f3.f9, f3.f5, -1, !1)
	}
}

function l1() {
	wj.jp(), e2.setTransform(iJ, 0, 0, iJ, 0, 0), e2.imageSmoothingEnabled = iJ < 3, e2.drawImage(ba.bo, j0.iX(), j0.iY()), eW.a2k.e1(), e2.drawImage(pK, j0.iX(), j0.iY()), wj.e1(), e2.imageSmoothingEnabled = !1, e2.setTransform(1, 0, 0, 1, 0, 0), an
		.a2k.e1(), bA.e1(), wm.e1(), (d.ie ? (lx.e1(), vj) : (eS.e1(), kd.e1(), eF.e1(), vj.e1(), bE.e1(), eH.e1(), j0.e1(), oS.e1(), lx.e1(), wl.e1(), vm.e1(), jQ.e1(), le.e1(), eR.e1(), vk.e1(), eQ)).e1(), dw.e1()
}

function a5K(j7, bK, bL) {
	j7.clearRect(0, 0, bK, bL), j7.fillStyle = f3.f5, j7.fillRect(0, 0, bK, bL)
}

function a5L(j7, bK, bL, a5M) {
	j7.fillStyle = f3.f9, j7.fillRect(0, 0, bK, a5M), j7.fillRect(0, 0, a5M, bL), j7.fillRect(bK - a5M, 0, a5M, bL), j7.fillRect(0, bL - a5M, bK, a5M)
}

function j3(j7, c6, c7, l9, a5M, s, aF8) {
	j7.fillStyle = f3.f9;
	var s = Math.floor(l9 * s),
		dn = (s += (s - a5M) % 2, Math.floor((s - a5M) / 2)),
		l9 = Math.floor((l9 - s) / 2);
	j7.fillRect(c6 + l9, c7 + l9 + dn, s, a5M), aF8 && j7.fillRect(c6 + l9 + dn, c7 + l9, a5M, s)
}

function sN() {
	this.pn = function(bO) {
		var c = bO.length,
			bK = i;
		for (let q = 0; q < c; q++) bK.l(16, bO.charCodeAt(q))
	}
}

function aFA() {
	this.dN = new aFB, this.bt = new l8
}

function aFG() {
	hy || (aFI(), z6(), b8 = new uq, dZ = new aC3, a5 = new aFJ, f3 = new sf, d = new wT, fV = new sL, bW = new aFK, gh = new jx, q0 = new a0a, wn = new rX, wm = new aFL, eK = new a0y, e4 = new aCw, cX = new a1U, le = new a31, jQ = new a1h, eS =
		new zD, a6n = new aFM, vm = new a8D, oS = new aCN, eF = new j4, j0 = new iM, mX = new aBZ, wl = new kS, kd = new a97, eH = new aFN, eR = new aCC, ma = new mL, w5 = new aDT, cv = new a6g, gU = new mc, df = new a6S, ol = new aFO, hX =
		new qZ, aU = new x0, ak = new a1y, a5P = new a7f, bA = new aFP, p = new aFQ, wk = new a7N, g4 = new d8, dM = new aFA, wh = new a7o, a7w = new aEN, uf = new uT, v = new nx, cU = new pH, aFC = new a5s, wj = new aAd, vi = new a7G, eQ =
		new mG, dl = new aFR, w3 = new aAk, me = new aFS, bE = new a59, hu = new je, wR = new aDK, aFD = new a0n, wo = new aFT, sY = new a2y, wp = new ug, mw = new a9t, g0 = new aFU, h7 = new eb, aG = new y7, vj = new ll, i = new a1s, bV =
		new js, aFE = new aFV, oU = new vJ, aE = new aFW, an = new a2g, aW = new aFX, eW = new a8B, bH = new xL, g = new uz, ba = new aFY, vq = new wE, dw = new a6D, hN = new a5q, hm = new aFZ, di = new vF, hy = new ni, aAZ = new aC8, ex =
		new yu, u = new fj, lx = new a3v, a4n = new oQ, iw = new a0R, eY = new a0t, a3K = new aFa, ab = new aFb, vk = new a8f, bm = new yz, jF = new qz, dq = new a4L, d1 = new aFc, aFF = new a8C, hy.a4(), di.a4(), dl.a5I(), ex.a4(), hm.a4(), aFF
		.a4(), a5.a4(), hX.a4(), a3K.a4(), v.a4(), fV.a4(), bW.a4(), ba.a4(), ga(), dw.a4(), a6e = new dQ, dl.a4(), di.dj.he(), bm.a4(), dq.a4(), a4n.a4(), (hr = new aFe).a4(), a6k = new aFf, cU.a4(), ak.a25(), hN.a4(), wh.a4(), cv.a4(), mw.a4(),
		mX.a4(), wk.a4(), oU.a4(), df.a4(), bm.bn = !0, setTimeout(function() {
			ba.j(2, 14071)
		}, 0), dw.dx(5, 5), aFE.jk(), di.dj.hj(), dl.f0(), hy.nk = 1)
}

function a6I() {
	let aFg, aFh, aEC, a2X, aFi;
	aEC = new ls([.45, .27], [.5, .5], 2 / 3), aFh = [new hl("⚔️<br>Multiplayer", function() {
			aFj(0)
		}, f3.t3), new hl("🗡️<br>Single Player", function() {
			aFj(1)
		}, f3.tD), new hl("🔑<br>My Account", function() {
			aFj(2)
		}, f3.tS), new hl("⚙️<br>Menu", function() {
			aFj(3)
		}, f3.st), new hl("", function() {
			dw.dx(12)
		}, f3.jM, !1),
		new hl("FX Client settings", function() {
			WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5")
	], a2X = new a2Y(ex.ey.data[122]);
	for (let q = 0; q < aFh.length; q++) aFh[q].button.style.position = "absolute";

	function aFj(ew) {
		di.dj.setState(10), g0.mY(), df.dg() || df.a6W(), 0 === ew ? dw.w.a7d() : 1 === ew ? dw.w.a7c() : 2 === ew ? 0 !== di.id || ex.ey.data[140].value ? dw.dx(8, dw.dy, new oW(16)) : dw.w.a3n(dw.dy, 16) : 3 === ew && dw.dx(1, dw.dy)
	}
	a2X.a2.style.position = "absolute", a2X.a2.style.textAlign = "center", a2X.a2.placeholder = "Your Kingdom's Name", this.show = function() {
		cv.setState(0), di.dj.setState(12), aFh[4].aFk(a5.color.aDw(ex.ey.data[121].value)), this.resize(), document.body.appendChild(a2X.a2);
		for (let q = 0; q < aFh.length; q++) document.body.appendChild(aFh[q].button);
		1 !== di.id || di.hW < 5 || (aFi && bm.ca > aFi + 144e5 ? di.hK.setState(14) : aFi = bm.ca)
	}, this.co = function() {
		document.body.removeChild(a2X.a2);
		for (let q = 0; q < aFh.length; q++) document.body.removeChild(aFh[q].button)
	}, this.resize = function() {
		aEC.resize();
		var gap = .5 * dq.gap,
			aFm = 10 / 99 * .84 * aEC.bK,
			aFn = 3 * gap,
			aFo = .16 * aEC.bL,
			is = .19 * aEC.bK,
			c6 = aEC.c6 + is,
			aFm = aEC.c7 + aFm + aFn,
			aFn = .5 * (aEC.bK - gap) - is,
			is = aEC.bK - 2 * is - aFo - gap,
			is = (a5.a6.xv(a2X.a2, c6, aFm, is, aFo), a5.a6.xv(aFh[4].button, c6 + is + gap, aFm, aFo, aFo), aFm += aFo + gap, .5 * (aEC.c7 + aEC.bL - aFm - gap));
		a5.a6.xv(aFh[0].button, c6, aFm, aFn, is), a5.a6.xv(aFh[1].button, c6 + aFn + gap, aFm, aFn, is), a5.a6.xv(aFh[2].button, c6, aFm + is + gap, aFn, is), a5.a6.xv(aFh[3].button, c6 + aFn + gap, aFm + is + gap, aFn, is);
		a5.a6.xv(aFh[5].button, c6, aFm + is * 2 + gap * 2, aFn * 2 + gap, is / 3);
		for (let q = 0; q < aFh.length; q++) aFh[q].button.style.font = a5.a6.jD(0, a5.a6.y0(.065 * aEC.bL)), a5.a6.a7(aFh[q].button, 5);
		a2X.a2.style.font = a5.a6.jD(0, a5.a6.y0(.08 * aEC.bL)), a5.a6.a7(a2X.a2, 5)
	}, this.e1 = function() {
		if (cv.a6o(), mX.e1(), a6n.e1(), a6e.e1(), a4n.e1(), df.dg()) {
			if (settings.displayWinCounter) {
				const size = Math.floor(aEC.bK * 0.03);
				e2.font = a5.a6.jD(1, size);
				e2.fillStyle = "#ffffff";
				const text = "Win count: " + wins_counter;
				const textLength = e2.measureText(text).width;
				e2.textAlign = "left";
				e2.textBaseline = "middle";
				e2.fillText(text, e2.canvas.width - textLength - size / 2, size);
			};
			e2.imageSmoothingEnabled = !1;
			var dU = df.jr("territorial.io"),
				dR = .84 * aEC.bK / dU.width;
			e2.setTransform(dR, 0, 0, dR, aEC.c6 + .08 * aEC.bK, aEC.c7), aFg = aFg || a5.a6d.pS(dU, a5.a6d.pY, [0, 0, 0]);
			for (let c6 = -1; c6 <= 1; c6 += 2)
				for (let c7 = -1; c7 <= 1; c7 += 2) e2.drawImage(aFg, c6, c7);
			e2.drawImage(dU, 0, 0), e2.imageSmoothingEnabled = !0;
			var g6 = df.jr("logo"),
				aFq = .6666 * dR * dU.height / g6.height,
				kO = .5 * dl.bK,
				kP = aEC.c7 + .5 * dR * dU.height - .5 * aFq * g6.height;
			e2.setTransform(aFq, 0, 0, aFq, kO - .6 * dR * dU.width, kP), e2.drawImage(g6, 0, 0), e2.setTransform(aFq, 0, 0, aFq, kO + .6 * dR * dU.width - aFq * g6.width, kP), e2.drawImage(g6, 0, 0), e2.setTransform(1, 0, 0, 1, 0, 0), e2
				.imageSmoothingEnabled = !0
		}
	}
}

function wq() {
	this.fy = null, this.a4 = function(fy) {
		this.fy = fy, eS.zz(this.fy)
	}, this.aFr = function(aFs) {
		var qC = (this.fy[aFs].a01 - this.fy[1 - aFs].a01) / 10,
			qC = 8 / (1 + Math.pow(2, qC / 32)),
			qC = Math.floor(10 * qC + .5),
			a06 = this.a00(this.fy[aFs].a01 + qC + 1),
			qC = this.a00(this.fy[1 - aFs].a01 - qC);
		0 === aFs ? eS.a05(this.fy, a06, qC, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : eS.a05(this.fy, qC, a06, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.a00 = function(a01) {
		return 16e3 <= (a01 = a01 < 0 ? 0 : 16e3 < a01 ? 16e3 : a01) ? "Unknown" : (a01 / 10).toFixed(1)
	}
}

function y8() {
	this.a7A = null, this.a7B = null, this.a7C = null, this.a7D = null, this.a7E = null, this.a7F = null;
	var aFu = 0;
	this.yB = null, this.nW = "", this.a4 = function(yB) {
		this.a7A = [], this.a7B = [], this.a7C = [], this.a7D = [], this.a7E = [0], this.a7F = [0], aFu = 0, this.yB = yB, this.nW = ""
	}, this.aI = function(id, ut, uu, dT) {
		d.eJ || 2 === d.jc || (0 === this.a7E[aFu] && (this.a7F[aFu] ? (this.a7E.push(1), this.a7F.push(0), aFu++) : this.a7E[aFu] = 1), this.a7A.push(id), this.a7B.push(ut), this.a7C.push(void 0 === uu ? 0 : uu), this.a7D.push(void 0 === dT ?
			0 : dT), this.a7F[aFu]++)
	}, this.cf = function() {
		0 === this.a7E[aFu] ? this.a7F[aFu]++ : (this.a7E.push(0), this.a7F.push(0), aFu++)
	}
}

function a3m(mP, pr) {
	var a1, q;
	for (this.resize = function() {
			for (var q = 0; q < mP.length; q++) a5.a6.a7(mP[q].button);
			a1.style.gap = a1.style.padding = a5.a6.pt(dq.pu)
		}, (a1 = document.createElement("div")).style.display = "grid", a1.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", a1.style.overflowY = "auto", a1.style.gridAutoRows = "5.3em", a1.style.maxHeight = "100%", q = 0; q < mP
		.length; q++) mP[q].button.style.fontSize = "1.2em", a1.appendChild(mP[q].button);
	pr.appendChild(a1)
}

function ej() {
	this.h8 = function(player, af, gd) {
		a5.aB.ai(player, gd, af) && (ak.al(player, af), af < d.e) && cU.random() < cU.value(10) && (gZ[af] = 0)
	}, this.aFv = function(player, af, gd) {
		a5.aB.sc(gd, af) && (a5.aB.sR(af, aW.pz[0]), ab.a0D(player, af), bA.a2E(af, aW.pz[0]))
	}
}

function a7n(pU) {
	let nH, a2M;
	var wB;
	this.show = function() {
		nH.show(), this.resize()
	}, this.co = function() {
		nH.co()
	}, this.resize = function() {
		nH.resize(), a2M.resize()
	}, this.ev = function(dU) {
		2 === dU && nH.nd[0].ne()
	}, nH = new nJ("🛠️ List Options", [new hl("❌ " + hm.hn[92], function() {
		dw.a2N(10)
	})]), a2M = new a2O(nH.nQ, ((wB = []).push(function() {
		function a2c() {
			var oY = Math.floor(a2b.a2.value),
				oZ = Math.floor(a2a.a2.value);
			return {
				a2d: Math.min(oY, oZ),
				a2e: Math.max(oY, oZ)
			}
		}

		function a2Z() {
			var fP = ((fP = a2c()).a2e - fP.a2d + 2) / 100;
			a2V.button.innerHTML = a5.gN.qW(a2V.button.innerHTML, fP)
		}
		let a2U = new fE,
			a2V, a2a = new a2Y(ex.ey.data[132], 1, function() {
				a2V.button.click()
			}),
			a2b = new a2Y(ex.ey.data[131], 1, function() {
				a2a.a2.focus()
			});
		a2U.fG("Start Index"), a2U.fO(a2b), a2b.a2.style.marginBottom = "0.5em", a2U.fG("End Index"), a2U.fO(a2a), a2V = new hl("Go (🧈 2.01)", function() {
			var fP = a2c();
			dw.dx(8, dw.fh().ck, new oW(21, {
				oX: pU.oX,
				oY: fP.a2d,
				oZ: fP.a2e
			}))
		});
		return a2b.a2.addEventListener("input", a2Z), a2a.a2.addEventListener("input", a2Z), a2Z(), a2U.fO(new z([a2V.button])), a2U
	}()), wB.push(function() {
		function a2Z() {
			var j8 = (5 + Math.max(Math.abs(Math.floor(a2a.a2.value)), 1)) / 100;
			a2V.button.innerHTML = a5.gN.qW(a2V.button.innerHTML, j8)
		}
		let a2U = new fE,
			a2V, a2a = new a2Y(ex.ey.data[134], 1, function() {
				a2V.button.click()
			}),
			a2b = new a2Y(ex.ey.data[133], 0, function() {
				a2a.a2.focus()
			});
		a2U.fG("Search"), a2U.fO(a2b), a2b.a2.style.marginBottom = "0.5em", a2U.fG("Matches"), a2U.fO(a2a), a2V = new hl("Go (🧈 0.10)", function() {
			var ph = a2b.a2.value.slice(0, 20),
				pi = Math.abs(Math.floor(a2a.a2.value));
			dw.dx(8, dw.fh().ck, new oW(22, {
				oX: pU.oX,
				ph: ph,
				pi: pi
			}))
		});
		return a2a.a2.addEventListener("input", a2Z), a2Z(), a2U.fO(new z([a2V.button])), a2U
	}()), wB))
}

function a2q() {
	function aG2(player, qD, aG4, aG5) {
		for (var kM, kN, bK, bL, fA, aG6, kO, kP, c = qD + aG5, q = qD; q < c; q += aG4)
			if (kM = (kM = p.eM[player] - q) < 1 ? 1 : kM, kN = p.eN[player] - q, kO = (kO = p.eO[player] + q) >= ba.bb - 1 ? ba.bb - 2 : kO, bL = (kP = (kP = p.eP[player] + q) >= ba.bd - 1 ? ba.bd - 2 : kP) - (kN = kN < 1 ? 1 : kN), kO = (fA = dG(cU
					.random() * (2 * (kO - kM + kP - kN)), cU.value(100))) <= (bK = kO - kM) ? (aG6 = kM + fA, kN) : fA <= bK + bL ? (aG6 = kO, kN + fA - bK) : fA <= 2 * bK + bL ? (aG6 = kM + fA - bK - bL, kP) : (aG6 = kM, kN + fA - 2 * bK - bL),
				aG3(player, kP = ol.a0x(aG6, kO))) return kP;
		return -1
	}

	function aG3(sP, nC) {
		return ol.tl(nC) && (ol.q9(nC) || sP !== (nC = ol.q7(nC)) && qE(sP, nC) && 0 < p.at[nC].length)
	}
	this.cf = function(player) {
		return !(0 === p.at[player].length || p.eE[player] < 100) && an.w.ao !== an.w.ap && (an.w.aq[player] !== an.w.ar && a5.aB.aQ(player, 203, 32, 16) ? !! function(player) {
			var nC = function(player) {
				var q, aDC, aDB, kM = p.eM[player],
					kN = p.eN[player],
					ik = p.eO[player] - kM + 1,
					il = p.eP[player] - kN + 1,
					dS = cU.value(100);
				for (q = 0; q < 32; q++)
					if (aDC = kM + b8.dE(cU.random() * ik, dS), aDB = kN + b8.dE(cU.random() * il, dS), aDC = ol.a0x(aDC, aDB), aG3(player, aDC)) return aDC;
				return -1
			}(player);
			if (0 <= nC) return an.au.av(player, nC >> 2);
			if (0 <= (nC = aG2(player, 1, 4, 40))) return an.au.av(player, nC >> 2);
			if (0 <= (nC = aG2(player, 40, 8, 200))) return an.au.av(player, nC >> 2);
			return
		}(player) && !! function(sP) {
			if (0 === aW.pD[2]) return void console.log("error 325234");
			var aG0 = aW.pD[1] + aE.rn[aW.pD[2] - 1] << 2;
			if (ol.q9(aG0)) return 1;
			return aG0 = ol.q7(aG0), sP !== aG0 && !!qE(sP, aG0)
		}(player) && function(player) {
			return a5.aB.aa(player), an.w.aw(player), !0
		}(player) : void 0)
	}
}

function aG8() {
	this.br = function(gH) {
		gH.fill(0)
	}, this.a5b = function(gH) {
		for (var c = gH.length, q = 0; q < c; q++) gH[q] = []
	}, this.oo = function(g5, iz) {
		for (var g6 = aW.aG9, q = 0; q < 3; q++) g6[q] = iz * g5[q];
		return g6
	}, this.op = function(g5, g6, aGA) {
		for (var qC = 0, q = 0; q < 3; q++) qC += Math.abs(g5[q] - g6[q]);
		return aGA <= qC
	}, this.oq = function(g5, aGB) {
		for (var q = 0; q < 3; q++) g5[q] = b8.b9(g5[q] + aGB, 0, 255);
		return g5
	}, this.a8K = function(gH, oY = 0, oZ = gH.length - 1) {
		for (var a3x = 0, q = oY; q <= oZ; q++) a3x += gH[q];
		return a3x
	}, this.aGC = function(gH, aGD) {
		for (var q, a2d, c = gH.length, aGE = [], gT = c - 1; 0 <= gT; gT--) {
			for (q = a2d = 0; q < c; q++) aGD(gH[q]) < aGD(gH[a2d]) && (a2d = q);
			c--, aGE.push(gH[a2d]), gH[a2d] = gH[c], gH.pop()
		}
		return aGE
	}
}

function aFV() {
	this.jk = function() {
		var value, hd;
		0 === di.id && (value = function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var nS = window.location.search,
				nS = new URLSearchParams(nS).get(key);
			if ("string" != typeof nS || nS.length < 1) return null;
			return nS
		}("replay"), (hd = new URL(window.location.href)).search = "", history.replaceState(null, "", hd.toString()), value) && dw.dx(3, 0, value)
	}
}

function aGH() {
	this.qy = ["n", "en", "r"], this.hn = ["Akzeptieren", "Du hast {0} ausgelöscht.", "Du wurdest von {0} ausgelöscht.", "Herzlichen Glückwunsch! Du hast das Spiel gewonnen.", "{0} hat das Spiel gewonnen.", "{0} hat den Nichtangriffspakt gebrochen.",
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

function y9() {
	this.nY = function() {
		var a71, bP = function() {
				var q, a7F = aG.aH.a7F,
					c = a7F.length,
					max = 0;
				for (q = 0; q < c; q++) max = Math.max(max, a7F[q]);
				return bf(Math.max(max, 1))
			}(),
			jv = function(bP) {
				return 179 + function() {
					var q, fy = aG.aH.yB.fy,
						c = fy.length,
						jv = 24 * c;
					for (q = 0; q < c; q++) jv += 16 * fy[q].name.length;
					8 === aG.aH.yB.mg && (jv += 14 * c);
					return jv
				}() + (1 === aG.aH.yB.fy.length ? 12 * aG.aH.yB.mj.length : 0) + function() {
					var q, a7A = aG.aH.a7A,
						c = a7A.length,
						jv = 13 * c,
						aGT = [22, 20, 19, 32, 32, 10, 10, 1, 0, 0];
					for (q = 0; q < c; q++) jv += aGT[a7A[q]];
					return jv
				}() + function(bP) {
					return aG.aH.a7F.length * (1 + bP)
				}(bP)
			}(bP);
		i.j(jv + (6 - jv % 6) % 6), a71 = aG.aH.yB, i.l(9, nh), i.l(31, i.size), i.ew += 16, i.l(9, a71.wc), i.l(14, a71.wb), i.l(4, a71.mg), i.l(1, a71.wd), i.l(6, a71.yC), i.l(14, a71.yD), i.l(10, a71.fy.length);
		var q, fy = aG.aH.yB.fy,
			c = fy.length;
		for (q = 0; q < c; q++) i.l(1, fy[q].mv), i.l(18, (fy[q].gI[0] << 12) + (fy[q].gI[1] << 6) + fy[q].gI[2]), i.l(5, fy[q].name.length), fV.ff.pn(fy[q].name);
		if (8 === aG.aH.yB.mg)
			for (q = 0; q < c; q++) i.l(14, fy[q].a01);
		return function() {
				var q, a71 = aG.aH.yB;
				if (1 === a71.fy.length)
					for (q = 0; q < a71.mj.length; q++) i.l(3, a71.mj[q]), i.l(9, a71.mk[q] - 1)
			}(),
			function(bP) {
				var q, a7A = aG.aH.a7A,
					ut = aG.aH.a7B,
					uu = aG.aH.a7C,
					dT = aG.aH.a7D,
					c = a7A.length;
				for (i.l(5, bP), i.l(30, c), i.l(30, aG.aH.a7F.length), q = 0; q < c; q++) i.l(4, a7A[q]), i.l(9, ut[q]), 0 === a7A[q] ? i.l(22, uu[q]) : 1 === a7A[q] ? (i.l(10, uu[q]), i.l(10, dT[q])) : 2 === a7A[q] ? (i.l(10, uu[q]), i.l(9, dT[
					q])) : 3 === a7A[q] || 4 === a7A[q] ? (i.l(10, uu[q]), i.l(22, dT[q])) : 5 === a7A[q] || 6 === a7A[q] ? i.l(10, uu[q]) : 7 === a7A[q] && i.l(1, uu[q])
			}(bP),
			function(bP) {
				var q, a7E = aG.aH.a7E,
					a7F = aG.aH.a7F,
					c = a7E.length;
				for (q = 0; q < c; q++) i.l(1, a7E[q]), i.l(bP, a7F[q])
			}(bP), i.ew !== jv && eS.zn("Encoder Index Error: " + i.ew + " " + jv), i.ew = 40, i.l(16, function() {
				var q, s = i.y,
					c = i.size,
					qo = 0;
				for (q = 7; q < c; q++) qo = qo + s[q] & 65535;
				return qo
			}()), bV.a4(i.y), fV.bX.fW(fV.bX.fX(dG(jv - 1, 6) + 1))
	}
}

function aFe() {
	this.dr = !1, this.el = null, this.mM = 0, this.bK = null, this.bL = null, this.aGU = .013, this.aGV = .022, this.aGW = .025;
	this.aGY = 3, this.aGZ = 1.2, this.aGa = .2, this.aGb = .235, this.aGc = .9, this.aGd = .08;
	var aGe, y2 = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"],
		aGf = [-1e6, -1e6];
	this.position = [0, 0], this.hs = [0, 0], this.a4 = function() {
		this.el = [null, null], this.dr = !1, this.mM = 0
	}, this.eG = function(id) {
		this.mM = id, v.ch.hq(0, this.mM)
	}, this.cf = function() {
		this.dr && this.lu()
	}, this.lu = function() {
		bm.ca - 12e4 >= aGf[this.mM] && (aGf[this.mM] = bm.ca, this.hs = [0, 0], v.ch.hq(0, this.mM))
	}, this.resize = function() {
		if (this.dr) {
			var q;
			for (this.bK = this.aGh(di.dj.dk() ? .85 : .66, .75, dl.bK, dl.bL), this.bL = Math.floor(this.bK / .75), q = 1; 0 <= q; q--) this.el[q] && (this.el[q][4] = a5.a6.jD(1, this.el[q][5] * this.bL / 10));
			aGe = a5.a6.jD(1, .1 * this.bL)
		}
	}, this.aGh = function(iz, a4J, bK, bL) {
		return bK < a4J * bL ? Math.floor(iz * bK) : Math.floor(a4J * iz * bL)
	}, this.a4r = function(ew, aGi, aGj, qM, aGk, aGl, a9h) {
		this.position[ew] = a9h;
		var a8d, size = aGi.length,
			j9 = a5.a6.jD(1, aGk * this.bL / 10),
			gH = (this.aGm(aGi, j9, aGl * this.bK), [
				[], size, -1, qM, j9, aGk, 10 * a9h
			]);
		for (let q = 0; q < size; q++) a8d = {
			name: aGi[q].name,
			value: aGi[q].a01 / aGj,
			colorIndex: aGi[q].colorIndex
		}, gH[0].push(a8d);
		this.el[ew] = gH, this.aGn(ew);
		let name = this.el[ew][0][0].name;
		1 === ew && (name = "[" + name + "]"), 0 === a9h && a4n.oR(ew, name);
		var data = [];
		for (let q = 0; q < gH[0].length; q++) data.push([q + 1 + ".", gH[0][q].name, gH[0][q].value.toFixed(1)]);
		dw.dx(10, dw.dy, new a7k(ew ? "Clan Ranking" : "1v1 Player Ranking", data))
	}, this.aGn = function(q) {
		this.el[q][0].sort(function(gT, fC) {
			return fC.value - gT.value
		})
	}, this.fU = function(ew, name, aGo, aGp) {
		if (this.el && this.el[ew]) {
			var q, a0A = !1;
			if (0 === ew) {
				for (q = 0; q < this.el[ew][0].length; q++)
					if (name === this.el[ew][0][q].name && aGo > .99 * this.el[ew][0][q].value && aGo < 1.01 * this.el[ew][0][q].value) {
						this.el[ew][0][q].value = aGp, a0A = !0;
						break
					} a0A || this.el[ew][0].push({
					name: name,
					value: aGp
				})
			} else {
				for (q = 0; q < this.el[ew][0].length; q++)
					if (name === this.el[ew][0][q].name) {
						this.el[ew][0][q].value += 32 < this.el[ew][0][q].value ? (64 - this.el[ew][0][q].value) / 256 : .25, this.el[ew][0][q].value *= 1 / (383 / 384), a0A = !0;
						break
					} for (q = 0; q < this.el[ew][0].length; q++) this.el[ew][0][q].value *= 383 / 384;
				a0A || this.el[ew][0].push({
					name: name,
					value: .25
				})
			}
			this.aGn(ew)
		}
	}, this.aGm = function(aGi, j9, jT) {
		for (var q = aGi.length - 1; 0 <= q; q--)
			for (; 3 < aGi[q].name.length && oS.measureText(aGi[q].name, j9) > jT;) aGi[q].name = aGi[q].name.substring(0, aGi[q].name.length - 4) + "..."
	}, this.ds = function(dt, du) {
		return !!this.dr && (dt -= (dl.bK - this.bK) / 2, du -= (dl.bL - this.bL) / 2, dt < 0 || dt > this.bK || du < 0 || du > this.bL ? (this.dr = !1, bm.bn = !0) : (du = du < .3 * this.bL ? 1 : du < .85 * this.bL ? (du = (0 === this.mM ?
			14.1 : 3) * (du - .3 * this.bL) / (.55 * this.bL), Math.floor(1 + du * du)) : 0 === this.mM ? 200 : 10, dt < this.bK / 2 ? this.hs[this.mM] = -du : this.hs[this.mM] = du, aGf[this.mM] + 50 > bm.ca || (aGf[this.mM] = bm.ca,
			v.ch.hq(0, this.mM)), !0))
	}, this.e1 = function() {
		var kM, kN, dh, dn, a8g, a8h, aBR, zE;
		this.dr && (kM = (dl.bK - this.bK) / 2, kN = (dl.bL - this.bL) / 2, dh = this.aGU * this.bK, dn = this.aGY * dh, a8g = this.aGV * this.bK, a8h = this.aGZ * a8g, aBR = this.aGW * this.bK, zE = Math.floor(.25 * this.bL), e2.setTransform(1,
				0, 0, 1, kM, kN), e2.fillStyle = 0 === this.mM ? f3.tD : f3.tA, e2.fillRect(0, 0, this.bK, zE), e2.fillStyle = f3.jM, e2.fillRect(0, zE, this.bK, this.bL - zE), e2.fillStyle = f3.f9, e2.font = aGe, a5.a6.textBaseline(e2, 1),
			a5.a6.textAlign(e2, 1), e2.fillText(y2[this.mM], Math.floor(this.bK / 2), Math.floor(.135 * this.bL)), e2.font = a5.a6.jD(1, .025 * this.bL), e2.fillText(y2[this.mM + 2], Math.floor(this.bK / 2), Math.floor(.2125 * this.bL)), e2
			.beginPath(), e2.moveTo(this.bK / 4, 0), e2.lineTo(this.bK / 2 - dh, 0), e2.lineTo(this.bK / 2, -dn), e2.lineTo(this.bK / 2 + dh, 0), e2.lineTo(this.bK - a8g, 0), e2.lineTo(this.bK + a8h, -a8h), e2.lineTo(this.bK, a8g), e2.lineTo(
				this.bK, this.bL / 2 - dh), e2.lineTo(this.bK + dn, this.bL / 2), e2.lineTo(this.bK, this.bL / 2 + dh), e2.lineTo(this.bK, this.bL - a8g), e2.lineTo(this.bK + a8h, this.bL + a8h), e2.lineTo(this.bK - a8g, this.bL), e2.lineTo(
				this.bK / 2 + dh, this.bL), e2.lineTo(this.bK / 2, this.bL + dn), e2.lineTo(this.bK / 2 - dh, this.bL), e2.lineTo(a8g, this.bL), e2.lineTo(-a8h, this.bL + a8h), e2.lineTo(0, this.bL - a8g), e2.lineTo(0, this.bL / 2 + dh), e2
			.lineTo(-dn, this.bL / 2), e2.lineTo(0, this.bL / 2 - dh), e2.lineTo(0, a8g), e2.lineTo(-a8h, -a8h), e2.lineTo(a8g, 0), e2.lineTo(this.bK / 4, 0), e2.lineTo(this.bK / 4, aBR), e2.lineTo(aBR, aBR), e2.lineTo(aBR, this.bL - aBR), e2
			.lineTo(this.bK - aBR, this.bL - aBR), e2.lineTo(this.bK - aBR, aBR), e2.lineTo(this.bK / 4, aBR), e2.fill(), this.el[this.mM] && this.a4B(zE), this.n0(zE), e2.setTransform(1, 0, 0, 1, 0, 0))
	}, this.n0 = function(zE) {
		var dh = kG(2, Math.floor(.06 * this.bK)),
			dp = (dh -= dh % 2, kG(2, Math.floor(.01 * this.bK))),
			zE = (dp -= dp % 2, Math.floor(.82 * zE));
		e2.fillRect(dh, zE, dh, dp), e2.fillRect(this.bK - dh - dh, zE, dh, dp), e2.fillRect(Math.floor(this.bK - dh - dh + (dh - dp) / 2), Math.floor(zE - (dh - dp) / 2), dp, dh)
	}, this.a4B = function(zE) {
		var c7;
		e2.font = this.el[this.mM][4];
		for (var q = this.el[this.mM][1] - 1; 0 <= q; q--) a5.a6.textAlign(e2, 2), c7 = Math.floor(this.aGd * this.bL + zE + q * ((1 - 2 * this.aGd) * this.bL - zE) / 9), e2.fillText(this.el[this.mM][0][q].value.toFixed(this.el[this.mM][3]), Math
			.floor(this.aGc * this.bK), c7), e2.fillText(q + 1 + this.el[this.mM][6] + ".", Math.floor(this.aGa * this.bK), c7), a5.a6.textAlign(e2, 0), e2.fillText(this.el[this.mM][0][q].name, Math.floor(this.aGb * this.bK), c7)
	}
}

function aFQ() {
	this.gP = new Array(d.b4), this.zj = new Array(d.b4), this.kl = new Uint8Array(d.b4), this.eA = new Uint8Array(d.b4), this.eM = new Uint16Array(d.b4), this.eN = new Uint16Array(d.b4), this.eO = new Uint16Array(d.b4), this.eP = new Uint16Array(d
			.b4), this.r = new Uint32Array(d.b4), this.r5 = new Uint32Array(d.b4), this.eE = new Uint32Array(d.b4), this.hB = null, this.gf = null, this.at = null, this.te = null, this.aO = new Uint16Array(d.b4), this.pw = new Uint16Array(d.b4), this
		.px = new Uint16Array(d.b4), this.o = new Uint16Array(d.b4), this.r7 = new Uint8Array(d.b4), this.a4 = function(fy) {
			for (let q = fy.length - 1; 0 <= q; q--) this.zj[q] = this.gP[q] = fy[q].name, this.kl[q] = fy[q].mv;
			this.eA.fill(0), this.eM.fill(0), this.eN.fill(0), this.eO.fill(0), this.eP.fill(0), this.r.fill(0), this.r5.fill(0), this.eE.fill(0), donationsTracker.reset(), leaderboardFilter.reset(), this.hB = new Array(d.b4), this.gf = new Array(d
				.b4), this.at = new Array(d.b4), this.te = new Array(d.b4), this.aO.fill(0), this.pw.fill(0), this.px.fill(0), this.o.fill(0), this.r7.fill(0)
		}
}

function r6(player) {
	aGq(player), aGr(player), aGs(player), q0.uL(player), wm.aGt(player), aU.clear(player), an.a2i.a4M(player)
}

function aGq(player) {
	ol.rB(player) && (p.o[player] = aAZ.aCA.aGu(), d.wW++);
	var xK = aU.xJ(player);
	0 === xK.length ? player === d.eC && aGv() : (aGw(player, xK), aGx(player, xK))
}

function aGv() {
	ab.eD[17] += p.eE[d.eC] + aU.xC(d.eC), eR.show(!1, !1, !1, !0), eH.aGy()
}

function aGw(player, xK) {
	for (var q = xK.length - 1; 0 <= q; q--) aU.x8(xK[q], player)
}

function aGz(xK) {
	for (var ew = 0, q = xK.length - 1; 1 <= q; q--) p.r[xK[q]] > p.r[xK[ew]] && (ew = q);
	return ew
}

function aGx(player, xK) {
	var q, a0A, aH0 = xK[aGz(xK)];
	if (9 === d.k && 1 === u.t[player] && cU.gu(8) && g4.dI(aH0), player === d.eC) 2 !== p.kl[player] && eS.xG(aH0, 1), aGv();
	else {
		for (a0A = !1, q = xK.length - 1; 0 <= q; q--)
			if (xK[q] === d.eC) return a0A = !0, void eS.xG(player, 0);
		!a0A && player < d.e && 2 !== p.kl[player] && eS.zl(0, player, aH0)
	}
}

function aGs(player) {
	p.eA[player] = p.eE[player] = 0, p.hB[player] = null, p.gf[player] = null, p.at[player] = null, p.te[player] = null, wo.aH1(player)
}

function aGr(player) {
	for (var s, c7, c6 = p.eO[player]; c6 >= p.eM[player]; c6--)
		for (c7 = p.eP[player]; c7 >= p.eN[player]; c7--) s = 4 * (c7 * ba.bb + c6), ol.tj(player, s) && (ol.aDJ(s), p.r[player]--)
}

function eo() {
	function aH4(n4) {
		return n4 < 0 ? 0 : 255 < n4 ? 255 : Math.floor(n4)
	}
	this.bK = 0, this.bL = 0, this.dr = !1, this.aH2 = 0, this.gap = 0, this.aH3 = 0, this.aFm = 0, this.yJ = 0, this.aEE = 0, this.aEF = 0, this.colors = null, this.a4 = function() {
		this.dr = !0, this.aH2 = 0, this.resize()
	}, this.resize = function() {
		this.dr && (dl.bK < 1.4 * dl.bL ? this.bK = Math.floor((di.dj.dk() ? .94 : .43) * dl.bK) : (this.bL = Math.floor((di.dj.dk() ? .88 : .43) * dl.bL), this.bK = Math.floor(1.4 * this.bL)), this.bL = this.bK / 1.4, this.gap = this.bK / 32,
			this.aFm = Math.floor(.25 * this.bL), this.yJ = (this.bL - this.aFm - 3 * this.gap) / 2, this.aEE = this.bK - 3 * this.gap - this.yJ, this.aEF = (this.bL - this.aFm - 4 * this.gap) / 3)
	}, this.ep = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var bO = ex.ey.data[103].value.split("");
		if (bO.length < 6)
			for (var fC = 2; 0 <= fC; fC--) this.colors[0][fC] = aH4(256 * Math.random());
		else
			for (var q = 2; 0 <= q; q--) this.colors[0][q] = aH4(4 * (10 * parseInt(bO[2 * q]) + parseInt(bO[2 * q + 1])));
		this.aH5()
	}, this.aH6 = function() {
		return [dG(this.colors[0][0], 4), dG(this.colors[0][1], 4), dG(this.colors[0][2], 4)]
	}, this.ig = function(es, et, deltaY) {
		var kM = (dl.bK - this.bK) / 2;
		et -= (dl.bL - this.bL) / 2 + this.aFm, (es -= kM) < 0 || et < 0 || es >= this.bK || et >= this.bL - this.aFm || (kM = Math.floor(3 * et / (this.bL - this.aFm)), this.colors[this.aH3][kM] = aH4(this.colors[this.aH3][kM] + (deltaY < 0 ?
			1 : -1) * Math.max(Math.abs(.05 * deltaY), 1)), bm.bn = !0)
	}, this.ds = function(es, et) {
		this.aH2 = 0;
		var kM = (dl.bK - this.bK) / 2;
		return et -= (dl.bL - this.bL) / 2, (es -= kM) < 0 || et < 0 || es >= this.bK - 1 || et >= this.bL - 1 || es > this.bK - (.4 * this.aFm + 3 * this.gap) && et < this.aFm ? (this.dr = !1, !(bm.bn = !0)) : es < this.gap || et < this.gap +
			this.aFm || es >= this.bK || et >= this.bL - this.gap || (es < this.gap + this.yJ ? (et < this.gap + this.aFm + this.yJ && 0 !== this.aH3 && (this.aH3 = 0, bm.bn = !0), !0) : es < this.gap + this.yJ || (es -= 2 * this.gap + this.yJ,
				et < this.gap + this.aFm + this.aEF ? (this.aH2 = 1, this.colors[this.aH3][0] = aH4(256 * es / this.aEE), bm.bn = !0) : et < 2 * this.gap + this.aFm + this.aEF || (et < 2 * this.gap + this.aFm + 2 * this.aEF ? (this.aH2 = 2,
					this.colors[this.aH3][1] = aH4(256 * es / this.aEE), bm.bn = !0) : !(et >= 3 * this.gap + this.aFm + 2 * this.aEF) || (this.aH2 = 3, this.colors[this.aH3][2] = aH4(256 * es / this.aEE), bm.bn = !0))))
	}, this.aH5 = function() {
		for (var fC = 2; 0 <= fC; fC--) this.colors[0][fC] = aH4(this.colors[0][fC])
	}, this.aH7 = function() {
		for (var dS, bO = "", q = 0; q < 3; q++)(dS = dG(this.colors[0][q], 4)) < 10 && (bO += "0"), bO += dS.toString();
		return bO
	}, this.f1 = function(es) {
		0 !== this.aH2 && (es -= 2 * this.gap + this.yJ + (dl.bK - this.bK) / 2, this.colors[this.aH3][this.aH2 - 1] = aH4(256 * es / this.aEE), bm.bn = !0)
	}, this.f2 = function() {
		0 < this.aH2 && (this.aH2 = 0, this.aH5(), ex.fT.fU(103, this.aH7()), bm.bn = !0)
	}, this.e1 = function() {
		var kM = (dl.bK - this.bK) / 2,
			kN = (dl.bL - this.bL) / 2;
		e2.setTransform(1, 0, 0, 1, kM, kN), e2.fillStyle = f3.f5, e2.fillRect(0, this.aFm, this.bK, this.bL - this.aFm), e2.fillStyle = f3.sq, e2.fillRect(0, 0, this.bK, this.aFm), e2.fillStyle = f3.f9, e2.lineWidth = dq.f8, e2.strokeStyle = f3
			.f9, e2.strokeRect(-1, -1, this.bK + 2, this.bL + 2), e2.fillRect(0, this.aFm, this.bK, dq.f8), e2.font = a5.a6.jD(1, .31 * this.aFm), a5.a6.textBaseline(e2, 1), a5.a6.textAlign(e2, 1), e2.fillText("Choose Your Nation's Color!", Math
				.floor((this.bK - this.gap - .4 * this.aFm) / 2), Math.floor(.55 * this.aFm)), this.yV(0), e2.lineWidth = dq.f8, this.aEJ(0), this.aEJ(1), this.aEJ(2), jQ.yf(Math.floor(kM + this.bK - .4 * this.aFm - this.gap), Math.floor(kN +
				.3 * this.aFm), Math.floor(.4 * this.aFm)), e2.setTransform(1, 0, 0, 1, 0, 0)
	}, this.yV = function(q) {
		var fA = this.colors[q][0],
			fB = this.colors[q][1],
			q = this.colors[q][2];
		e2.fillStyle = "rgb(" + fA + "," + fB + "," + q + ")", e2.fillRect(this.gap, this.aFm + this.gap, this.yJ, 2 * this.yJ + this.gap), e2.lineWidth = dq.f8, e2.strokeStyle = f3.f9, e2.strokeRect(this.gap, this.aFm + this.gap, this.yJ, 2 *
			this.yJ + this.gap), e2.fillStyle = fA + fB + q < 306 && fB < 150 ? f3.f9 : f3.fn, e2.font = a5.a6.jD(1, .32 * this.aEF), a5.a6.textAlign(e2, 1), a5.a6.textBaseline(e2, 1), e2.rotate(-Math.PI / 2), e2.fillText("National Color",
			Math.floor(-1.5 * this.gap - this.aFm - this.yJ), Math.floor(this.gap + .5 * this.yJ)), e2.rotate(Math.PI / 2)
	}, this.aEJ = function(q) {
		e2.fillStyle = "rgb(" + (0 === q ? 150 : 2 === q ? 30 : 0) + "," + (1 === q ? 130 : 2 === q ? 30 : 0) + "," + (2 === q ? 220 : 0) + ")", e2.fillRect(2 * this.gap + this.yJ, this.aFm + this.gap + q * (this.gap + this.aEF), Math.floor(this
			.colors[this.aH3][q] * this.aEE / 255), this.aEF), e2.strokeStyle = f3.f9, e2.strokeRect(2 * this.gap + this.yJ, this.aFm + this.gap + q * (this.gap + this.aEF), this.aEE, this.aEF), e2.fillStyle = f3.f9, e2.font = a5.a6.jD(1,
			.32 * this.aEF), a5.a6.textBaseline(e2, 1), a5.a6.textAlign(e2, 0), e2.fillText((0 === q ? "Red: " : 1 === q ? "Green: " : "Blue: ") + this.colors[0][q].toString(), 3 * this.gap + this.yJ, Math.floor(this.aFm + this.gap + q * (
			this.gap + this.aEF) + .53 * this.aEF))
	}
}

function aH8() {
	this.cF = null, this.a4 = function() {
		var aH9 = [120, 105, 92],
			cos = [12, 12, 60],
			aHA = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aHB = [140, 130, 120],
			aHC = [12, 12, 76],
			aHD = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aHE = [130, 117, 106],
			aHF = [12, 12, 68],
			aHG = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.cF = new Array(ba.a7q + 1), this.cF[0] = {
			name: "White Arena",
			bK: 230,
			bL: 230,
			a12: 1e3,
			a0z: 2e3,
			cT: 173
		}, this.cF[1] = {
			name: "Black Arena",
			bK: 800,
			bL: 800,
			a12: 100,
			a0z: 50,
			cT: 43
		}, this.cF[2] = {
			name: "Island",
			bK: 512,
			bL: 512,
			a12: 128,
			a0z: 32,
			cT: 0
		}, this.cF[3] = {
			name: "Mountains",
			bK: 960,
			bL: 960,
			a12: 60,
			a0z: 8,
			cT: 0
		}, this.cF[4] = {
			name: "Desert",
			bK: 900,
			bL: 900,
			a12: 100,
			a0z: 5,
			cT: 0
		}, this.cF[5] = {
			name: "Swamp",
			bK: 1e3,
			bL: 1e3,
			a12: 100,
			a0z: 40,
			cT: 0
		}, this.cF[6] = {
			name: "Snow",
			bK: 1e3,
			bL: 1e3,
			a12: 100,
			a0z: 20,
			cT: 0
		}, this.cF[7] = {
			name: "Cliffs",
			bK: 1024,
			bL: 1024,
			a12: 128,
			a0z: 32,
			cT: 0
		}, this.cF[8] = {
			name: "Pond",
			bK: 820,
			bL: 820,
			a12: 200,
			a0z: 100,
			cT: 0
		}, this.cF[9] = {
			name: "Halo",
			bK: 1024,
			bL: 1024,
			a12: 128,
			a0z: 32,
			cT: 0
		}, this.cF[10] = {
			name: "Europe",
			cD: aHB,
			cH: aHC,
			aCk: aHD
		}, this.cF[11] = {
			name: "World",
			cD: aHE,
			cH: aHF,
			aCk: aHG
		}, this.cF[12] = {
			name: "Caucasia",
			cD: aHE,
			cH: aHF,
			aCk: aHG
		}, this.cF[13] = {
			name: "Africa",
			cD: aH9,
			cH: cos,
			aCk: aHA
		}, this.cF[14] = {
			name: "Middle East",
			cD: aH9,
			cH: cos,
			aCk: aHA
		}, this.cF[15] = {
			name: "Scandinavia",
			cD: aHB,
			cH: aHC,
			aCk: aHD
		}, this.cF[16] = {
			name: "North America",
			cD: aHB,
			cH: aHC,
			aCk: aHD
		}, this.cF[17] = {
			name: "South America",
			cD: aH9,
			cH: cos,
			aCk: aHA
		}, this.cF[18] = {
			name: "Asia",
			cD: aHE,
			cH: aHF,
			aCk: aHG
		}, this.cF[19] = {
			name: "Australia",
			cD: aH9,
			cH: cos,
			aCk: aHA
		}, this.cF[20] = {
			name: "Island Kingdom",
			bK: 1024,
			bL: 1024,
			a12: 128,
			a0z: 32,
			cT: 0
		}, this.cF[ba.a7q] = {}
	}
}

function aHH() {
	this.qy = [], this.hn = ["Принять", "Вы стерли {0}.", "Вас уничтожил {0}.", "Поздравляем! Вы выиграли игру.", "{0} выиграл игру.", "{0} нарушил пакт о ненападении.", "{0} атакует вас!", "Выберите вашу начальную позицию!", "Вы сдались!",
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

function v1() {
	function aHI() {
		if (2 === d.jc) return 1;
		bE.a5U(), d.jc = 2, d.wW = d.wV
	}

	function aHJ() {
		g.result.pG(), g.result.aF7(), eS.a0N(!0), eS.a0C(247, 0), kd.eV(!0), eH.eV(!0), bE.eV(), vj.m5(), d.eJ && bm.z0.aAY(), bm.bn = !0, eY.a0w(), di.dj.setState(0)
	}
	this.a5T = function() {
		aHI() || (d.m = 2, g.result.aF1(), eS.xG(0, 59), eK.zy(2700), eR.show(!1, !1, !0), aHJ())
	}, this.xN = function(zp) {
		aHI() || (d.m = 1, 8 === d.k ? (d.wa = zp < 0 ? p.r[0] >= p.r[1] ? 0 : 1 : zp, d.rN = +(d.wa === d.eC), d.rN ? eS.xG(d.wa, 2) : eS.xG(1 - d.eC, 3), d.wZ.aFr(d.wa)) : d.ag ? (d.rN = +(u.t[d.eC] === lx.a42()), 9 === d.k && eS.zx()) : (d
			.wa = a0j[0], d.rN = +(d.wa === d.eC), eS.zo(d.wa)), eR.show(1 === d.rN, !1), aHJ())
	}
}

function aFK() {
	this.bX = new aHK, this.ff = new l6, this.a4 = function() {
		this.bX.a4()
	}
}

function kx() {
	eS.cf(), bA.cf(), eH.aHL(), v.w.cf()
}

function l4() {
	wR.cf(), wn.cf(), ak.cf(), sY.cf(), wo.cf(), q0.cf(), wm.cf(), an.w.cf(), r1(), kd.cf(), g4.cf(), bA.cf(), bA.aHM(), eH.cf(), eW.cf(), wl.cf(), vm.cf(), eS.cf(), wp.cf(), eF.cf(), bE.cf(), ab.cf(), lx.cf(), bH.cf(), v.w.cf(), v.cx.cf(), dw.cf(),
		aG.cf(), bm.cf()
}

function l0() {
	eK.cf(), eR.cf(), oS.cf(), eQ.cf(), vj.cf(), hu.jj()
}

function l2() {
	kd.eV(!1), vm.eV(), eH.eV(!1), wl.eV(), eF.eV(), bE.eV(), bA.eV(!1), lx.lu()
}

function kv() {
	bA.eV(!1) && (bm.bn = !0), v.w.cf()
}

function aFO() {
	var aHQ, aHR, aHS, aHT, aHU, aHV, aHW, aHX, aHY, aHZ, aHa, aHN = [224, 224, 224],
		aHO = [
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
		aHP = [
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

	function aHp(s, aHq) {
		pL[s] = 0, pL[s + 1] = 0, pL[s + 2] = aHq, pL[s + 3] = 0, aHr(s)
	}

	function aHr(s) {
		var c6;
		eY.a0u || (c6 = ol.iX(s), s = ol.iY(s), eY.a0u = c6 >= iw.a0Y[0] && c6 <= iw.a0Y[2] && s >= iw.a0Y[1] && s <= iw.a0Y[3])
	}
	this.a4 = function(fy) {
		if (aHQ = new Uint8Array(d.b4), aHR = new Uint8Array(d.b4), aHS = new Uint8Array(d.b4), aHT = new Uint8Array(d.b4), aHU = new Uint8Array(d.b4), aHV = new Uint8Array(d.b4), aHW = new Uint8Array(d.b4), aHX = new Uint8Array(d.b4), aHY =
			new Uint8Array(d.b4), aHZ = new Uint8Array(d.b4), this.jI = new Uint8Array(d.b4), (aHa = new Int32Array(4))[0] = -4 * ba.bb, aHa[1] = 4, aHa[2] = -aHa[0], aHa[3] = -aHa[1], d.ag)
			for (var bQ, dU, q = d.b4 - 1; 0 <= q; q--) dU = u.fv[u.t[q]], bQ = dG((aHP[dU][3] + 1) * cU.random(), cU.value(100)), aHQ[q] = aHO[dU][0] + bQ * aHP[dU][0], aHR[q] = aHO[dU][1] + bQ * aHP[dU][1], aHS[q] = aHO[dU][2] + bQ * aHP[dU][
			2];
		else g0.cy && g0.cE.aHg ? function(gH) {
			var q;
			for (q = d.dH - 1; 0 <= q; q--) aHQ[q] = 4 * gH[q][0], aHR[q] = 4 * gH[q][1], aHS[q] = 4 * gH[q][2]
		}(g0.cE.aHg) : (function() {
			for (var q = d.b4 - 1; q >= d.e; q--) aHQ[q] = 4 * dG(64 * cU.random(), cU.value(100)), aHR[q] = 4 * dG(64 * cU.random(), cU.value(100)), aHS[q] = 4 * dG(64 * cU.random(), cU.value(100))
		}(), function(fy) {
			for (var q = d.e - 1; 0 <= q; q--) aHQ[q] = 4 * fy[q].gI[0], aHR[q] = 4 * fy[q].gI[1], aHS[q] = 4 * fy[q].gI[2]
		}(fy));
		! function() {
			var q, bs;
			for (q = d.b4 - 1; 0 <= q; q--) bs = dG(aHQ[q] + aHR[q] + aHS[q], 3), aHQ[q] += kE(bs - aHQ[q], 2), aHR[q] += kE(bs - aHR[q], 2), aHS[q] += kE(bs - aHS[q], 2), aHQ[q] -= aHQ[q] % 4, aHR[q] -= aHR[q] % 4, aHS[q] -= aHS[q] % 4
		}(),
		function() {
			for (var q = d.b4 - 1; 0 <= q; q--) aHQ[q] += dG(q, 128), aHR[q] += dG(q % 128, 32), aHS[q] += dG(q % 32, 8), aHT[q] = q % 8
		}(), this.aHl(),
			function() {
				for (var q = d.b4 - 1; 0 <= q; q--) aHU[q] = aHQ[q] < 32 ? aHQ[q] + 32 : aHQ[q] - 32, aHV[q] = aHR[q] < 32 ? aHR[q] + 32 : aHR[q] - 32, aHW[q] = aHS[q] < 32 ? aHS[q] + 32 : aHS[q] - 32
			}(),
			function() {
				for (var q = d.b4 - 1; 0 <= q; q--) aHX[q] = 235 < aHQ[q] ? aHQ[q] - 20 : aHQ[q] + 20, aHY[q] = 235 < aHR[q] ? aHR[q] - 20 : aHR[q] + 20, aHZ[q] = 235 < aHS[q] ? aHS[q] - 20 : aHS[q] + 20
			}()
	}, this.om = function(player) {
		var gH = aW.a8J;
		return gH[0] = aHQ[player], gH[1] = aHR[player], gH[2] = aHS[player], gH
	}, this.aHl = function() {
		for (var q = d.b4 - 1; 0 <= q; q--) this.jI[q] = aHQ[q] + aHR[q] + aHS[q] < 280 ? 0 : 1
	}, this.iX = function(s) {
		return dG(s, 4) % ba.bb
	}, this.iY = function(s) {
		return dG(s, 4 * ba.bb)
	}, this.a0x = function(c6, c7) {
		return Math.floor(4 * (c7 * ba.bb + c6))
	}, this.aDH = function(s) {
		return this.c3(s + aHa[0]) || this.c3(s + aHa[1]) || this.c3(s + aHa[2]) || this.c3(s + aHa[3])
	}, this.aDG = function(s, player) {
		return this.td(s + aHa[0], player) || this.td(s + aHa[1], player) || this.td(s + aHa[2], player) || this.td(s + aHa[3], player)
	}, this.rB = function(player) {
		return player < d.e && 2 !== p.kl[player]
	}, this.q5 = function(s) {
		return 208 <= pL[s + 3]
	}, this.tj = function(player, s) {
		return this.q5(s) && this.to(player, s)
	}, this.to = function(player, s) {
		return player === this.q7(s)
	}, this.tp = function(s) {
		return 208 <= pL[s + 3] && pL[s + 3] < 224
	}, this.q4 = function(s) {
		return 224 <= pL[s + 3] && pL[s + 3] < 248
	}, this.aCo = function(s) {
		for (var q = 3; 0 <= q; q--)
			if (this.ri(s + aHa[q])) return !0;
		return !1
	}, this.aHo = function(s) {
		return 192 <= pL[s + 3] && pL[s + 3] < 208
	}, this.a66 = function(s, player) {
		return this.aHo(s) && player === this.q7(s)
	}, this.tl = function(s) {
		return this.q5(s) || this.q9(s)
	}, this.ri = function(s) {
		return 0 === pL[s + 3] && 2 === pL[s + 2]
	}, this.q9 = function(s) {
		return 0 === pL[s + 3] && 1 === pL[s + 2]
	}, this.c3 = function(s) {
		return 0 === pL[s + 3] && 3 === pL[s + 2]
	}, this.wQ = function(s) {
		return this.c3(s)
	}, this.td = function(s, player) {
		return this.q9(s) || this.q5(s) && player !== this.q7(s)
	}, this.q7 = function(s) {
		return pL[s] % 4 * 128 + pL[s + 1] % 4 * 32 + pL[s + 2] % 4 * 8 + pL[s + 3] % 8
	}, this.aDJ = function(s) {
		aHp(s, 1)
	}, this.a67 = function(s) {
		aHp(s, 2)
	}, this.tf = function(s, player) {
		pL[s] = aHQ[player], pL[s + 1] = aHR[player], pL[s + 2] = aHS[player], pL[s + 3] = 208 + aHT[player], aHr(s)
	}, this.tq = function(s, player) {
		pL[s] = aHU[player], pL[s + 1] = aHV[player], pL[s + 2] = aHW[player], pL[s + 3] = 224 + aHT[player], aHr(s)
	}, this.q8 = function(s, player) {
		pL[s] = aHX[player], pL[s + 1] = aHY[player], pL[s + 2] = aHZ[player], pL[s + 3] = 248 + aHT[player], aHr(s)
	}, this.a68 = function(s, player) {
		pL[s] = aHN[0] + aHQ[player] % 4, pL[s + 1] = aHN[1] + aHR[player] % 4, pL[s + 2] = aHN[2] + aHS[player] % 4, pL[s + 3] = 192 + aHT[player], aHr(s)
	}
}

function aFI() {
	var a50, aHs;

	function aHt() {
		var bK = new a1s;
		bK.j(1612), bK.l(1, 0), bK.l(6, 7), bK.l(2, di ? di.id : 3), bK.l(1, iH ? 1 : 0), bK.l(1, iI ? 1 : 0), bK.l(1, hy ? hy.nk : 0);
		for (let q = 0; q < aHs.length && q < 100; q++) bK.l(16, aHs.charCodeAt(q));
		a50.send(bK.y), aHu()
	}

	function aHu() {
		a50 && (a50.onclose = null, a50.onopen = null, a50 = null)
	}
	window.addEventListener("error", function error(a2) {
		window.removeEventListener("error", error);
		return alert("Error:\n" + a2.filename + " " + a2.lineno + " " + a2.colno + " " + a2.message);
		window.removeEventListener("error", error), aHs = a2.lineno + " " + a2.colno + " " + a2.message, (a50 = new WebSocket("wss://territorial.io/s52/")).onopen = aHt, a50.onclose = function() {
			aHu()
		}, 0 === a2.lineno && 0 === a2.colno || (di && 1 === di.id ? di.hK.showToast(aHs) : alert(aHs))
	})
}

function aFJ() {
	this.a6 = new xq, this.bq = new aG8, this.aB = new sO, this.gN = new qL, this.j7 = new aEM, this.a6d = new pR, this.j6 = new aHv, this.color = new aDv, this.a4 = function() {
		this.a6.xs()
	}
}

function aFf() {
	var c6, c7, bL, aFm, aHw, aHx, aHy, aHz, aI0, bK, y4, aI1;
	this.dr = !1, this.a4 = function(bO, dv) {
		if (1 === di.id && 13 <= di.hW && di.hW < 18) return dv ? void(y4 = bO) : y4 !== bO ? void 0 : void di.hK.saveString(200, bO);
		dv && (y4 = bO, (aI1 = document.createElement("a")).appendChild(document.createTextNode(y4)), this.dr = !0, aI1.title = y4, aI1.target = "_blank", aI1.href = y4, aI1.style.textAlign = "center", aI1.style.color = f3.f9, aI1.style
			.position = "absolute", aI1.style.padding = "0px", aI1.style.margin = "0px", this.resize(), document.body.appendChild(aI1), bm.bn = !0)
	}, this.co = function() {
		return !(!this.dr || (document.body.removeChild(aI1), this.dr = !1))
	}, this.ds = function(dt, du) {
		return !!this.dr && ((dt < c6 || du < c7 || c6 + bK < dt || c7 + bL < du || c6 + bK - aFm < dt && du < c7 + aFm) && (bm.bn = !0, this.dr = !1, document.body.removeChild(aI1)), !0)
	}, this.resize = function() {
		var j9, aI2;
		this.dr && (aHz = Math.floor(.8 * (di.dj.dk() ? dl.bK > dl.bL ? .6 : .55 : .4) * dl.dm), aFm = Math.floor(.15 * aHz), aHw = Math.floor(.35 * aFm), aHx = Math.floor(.5 * aFm), aHy = Math.floor(2.5 * aHx), bL = aFm + aHw + 3 * aHx, j9 = a5
			.a6.jD(1, aHw / dl.vh), aI0 = Math.floor(dl.vh * oS.measureText(y4, j9)), aI2 = bK = (aHz < aI0 ? aI0 : aHz) + 2 * aHy, bK = Math.min(bK, dl.bK - 2 * (di.dj.dk() ? 2 : 1) * dq.gap), j9 = a5.a6.jD(1, bK / aI2 * aHw / dl.vh), aI0 =
			Math.floor(dl.vh * oS.measureText(y4, j9)), c6 = Math.floor((dl.bK - bK) / 2), c7 = Math.floor((dl.bL - bL) / 2), aI1.style.font = j9, aI1.style.top = Math.floor((c7 + 1.4 * aHx + aFm) / dl.vh) + "px", aI1.style.left = Math.floor(
				(c6 + (bK - aI0) / 2) / dl.vh) + "px")
	}, this.e1 = function() {
		this.dr && (e2.fillStyle = f3.f5, e2.fillRect(c6, c7 + aFm, bK, bL - aFm), e2.fillStyle = f3.tT, e2.fillRect(c6, c7, bK, aFm), e2.fillStyle = f3.f9, e2.lineWidth = dq.f8, e2.strokeStyle = f3.f9, e2.strokeRect(c6, c7, bK, bL), e2.fillRect(
				c6, c7 + aFm, bK, dq.f8), e2.font = a5.a6.jD(1, .48 * aFm), a5.a6.textAlign(e2, 1), a5.a6.textBaseline(e2, 1), e2.fillText("You are leaving Territorial.io!", Math.floor(c6 + (bK - .5 * aFm) / 2), Math.floor(c7 + .55 * aFm)),
			jQ.yf(Math.floor(c6 + bK - .8 * aFm), Math.floor(c7 + .25 * aFm), Math.floor(.5 * aFm)), e2.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function aFS() {
	function aI3(map, c6, c7, bK, bL) {
		map >= ba.a7q || (ba.cG === map && (e2.fillStyle = f3.tF, e2.fillRect(c6, c7, bK, bL), e2.fillStyle = f3.f9), e2.strokeRect(c6, c7, bK, bL), e2.fillText(ba.cE.cF[map].name, Math.floor(c6 + .5 * bK), Math.floor(c7 + .55 * bL)))
	}
	this.dr = !1, this.md = [0, 0, 0, 0], this.show = function() {
		this.dr = !0, this.resize(), bm.bn = !0
	}, this.resize = function() {
		var tz = dG(ba.a7q + ba.a7q % 2, 2),
			tz = dl.bL - tz * dq.gap;
		di.dj.dk() ? this.md[2] = Math.floor(.75 * dl.min) : this.md[2] = Math.floor(.5 * dl.min), this.md[3] = Math.floor(1.25 * this.md[2]), this.md[3] > tz && (this.md[3] = tz, this.md[2] = Math.floor(tz / 1.2)), this.md[0] = Math.floor((dl
			.bK - this.md[2]) / 2), this.md[1] = Math.floor((dl.bL - this.md[3]) / 2)
	}, this.f1 = function(c6, c7) {
		return !(c6 < this.md[0] || c7 < this.md[1] || c6 > this.md[0] + this.md[2] || c7 > this.md[1] + this.md[3])
	}, this.ds = function(c6, c7) {
		var dp, tz = dG(ba.a7q + ba.a7q % 2, 2);
		return bm.bn = !0, c6 < this.md[0] || c7 < this.md[1] || c6 > this.md[0] + this.md[2] || c7 > this.md[1] + this.md[3] ? !(this.dr = !1) : (dp = Math.floor(.17 * this.md[3]), c7 < this.md[1] + dp ? c6 > this.md[0] + this.md[2] - dp && (
			this.dr = !1) : (c7 = (c7 = Math.floor(tz * (c7 - this.md[1] - dp - .00576 * dl.dm) / (this.md[3] - dp - .01152 * dl.dm))) < 0 ? 0 : tz - 1 < c7 ? tz - 1 : c7, c6 > this.md[0] + this.md[2] / 2 && (c7 += tz), c7 >= ba.a7q || ba
			.j(c7, Math.floor(16384 * Math.random()))), !0)
	}, this.e1 = function() {
		var q, kN, dp = Math.floor(.17 * this.md[3]),
			tz = dG(ba.a7q + ba.a7q % 2, 2),
			gap = .6 * .01152 * dl.dm,
			kQ = (this.md[3] - dp - (tz + 1) * gap) / tz,
			dh = Math.floor((this.md[2] - 3 * gap) / 2);
		for (e2.lineWidth = dq.f8, a5.a6.textAlign(e2, 1), a5.a6.textBaseline(e2, 1), e2.fillStyle = f3.f5, e2.fillRect(this.md[0], this.md[1] + dp, this.md[2], this.md[3] - dp), e2.fillStyle = f3.tF, e2.fillRect(this.md[0], this.md[1], this.md[
				2], dp), e2.strokeStyle = f3.f9, e2.strokeRect(this.md[0], this.md[1], this.md[2], this.md[3]), e2.fillStyle = f3.f9, e2.fillRect(this.md[0], this.md[1] + dp, this.md[2], 2), e2.font = a5.a6.jD(1, .48 * dp), e2.fillText("Maps",
				Math.floor(this.md[0] + this.md[2] / 2), Math.floor(this.md[1] + .55 * dp)), e2.font = a5.a6.jD(1, .48 * kQ), q = tz - 1; 0 <= q; q--) kN = Math.floor(this.md[1] + dp + gap + q * (kQ + gap)), aI3(q, this.md[0] + gap, kN, dh, kQ),
			aI3(q + tz, this.md[0] + dh + 2 * gap, kN, dh, kQ);
		jQ.yf(Math.floor(this.md[0] + this.md[2] - .7 * dp), Math.floor(this.md[1] + .3 * dp), Math.floor(.4 * dp)), e2.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aHK() {
	var aI4 = new Uint8Array(78);
	this.a4 = function() {
		var q;
		for (aI4[50] = 37, q = 0; q < 10; q++) aI4[q + 3] = q + 1;
		for (q = 0; q < 26; q++) aI4[q + 20] = q + 11, aI4[q + 52] = q + 38
	}, this.a6r = function(bO) {
		return bO.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "_")
	}, this.a6O = function(bO, size) {
		if ((bO = this.a6r(bO)).length > size) return bO.substring(0, size);
		for (; bO.length < size;) bO += "_";
		return bO
	}, this.bZ = function(bO) {
		for (var aI5 = aI4, c = bO.length, gH = new Uint8Array(c), q = 0; q < c; q++) gH[q] = aI5[bO.charCodeAt(q) - 45];
		return gH
	}, this.bY = function(a1f) {
		i.j(6 * a1f.length), this.aI6(a1f), bV.a4(i.y)
	}, this.aI6 = function(a1f) {
		var c = a1f.length,
			bK = i;
		for (let q = 0; q < c; q++) bK.l(6, a1f[q])
	}, this.pn = function(bO) {
		this.aI6(this.bZ(bO))
	}, this.a7a = function(bO, size) {
		this.aI6(this.bZ(this.a6O(bO, size)))
	}
}

function a6K() {
	let nH, a2M;
	var wB;
	this.show = function() {
		nH.show(), this.resize()
	}, this.co = function() {
		nH.co()
	}, this.resize = function() {
		nH.resize(), a2M.resize()
	}, this.ev = function(dU) {
		2 === dU && nH.nd[0].ne()
	}, nH = new nJ("🔑 " + hm.hn[125], [new hl("💾 " + hm.hn[97], function() {
		dw.nK()
	}, f3.f4)]), a2M = new a2O(nH.nQ, ((wB = []).push(function() {
		var a2U = new fE;
		return a2U.fG("🧈 Gold"), a2U.fJ("Balance: " + a5.gN.qS(ex.ey.data[113].value, .01, 2)), a2U.fH(
			"Play more multiplayer games to earn gold. Accounts without gold will be deleted. Each day, you will lose 🧈 0.50 or 0.01% of your balance, whichever amount is higher."), a2U
	}()), wB.push(function() {
		var a2U = new fE;
		return a2U.fG("1v1 Rating"), a2U.fJ("Elo: " + a5.gN.qS(ex.ey.data[107].value, .1, 1) + "<br>Rank: " + (ex.ey.data[108].value + 1) + " / " + ex.ey.data[111].value + "<br>Played Games: " + ex.ey.data[112].value), a2U
	}()), wB.push(function() {
		let a2U = new fE,
			a2X = (a2U.fG("Account Name"), new a2Y(ex.ey.data[105]));
		return a2X.a2.readOnly = !0, a2U.fO(a2X), a2U.fO(new z([new hl("Copy", function() {
			a5.a6.y5(a2X.a2), a5.a6.y6(this)
		}).button])), a2U
	}()), wB.push(function() {
		let a2U = new fE,
			a6R = (a2U.fG("Password"), new a2Y(ex.ey.data[106]));
		return a6R.a2.readOnly = !0, a6R.a2.type = "password", a2U.fO(a6R), a2U.fO(new z([new hl("Show", function() {
			"Show" === this.innerText ? (this.innerText = "Hide", a6R.a2.type = "text") : (this.innerText = "Show", a6R.a2.type = "password")
		}).button, new hl("Copy", function() {
			a5.a6.y5(a6R.a2), a5.a6.y6(this)
		}).button])), a2U.fO(new z([new hl("Request New Password", function() {
			dw.dx(8, dw.fh().ck, new oW(15))
		}).button])), a2U
	}()), wB.push(function() {
		var a2U = new fE;
		return a2U.fG("Account Options"), a2U.fO(new z([new hl("Log in to a Different Account", function() {
			dw.dx(6, dw.fh().ck)
		}).button])), a2U.fO(new z([new hl("Create New Account", function() {
			ex.fT.fU(105, ""), dw.dx(8, dw.fh().ck, new oW(18))
		}).button])), a2U.fO(new z([new hl("Delete Account: " + ex.ey.data[105].value, function() {
			dw.dx(4, 0, new hk("🗑️ Account Deletion", "Your account will start the deletion process but may be restored if you log in within 3 weeks.", !0, [new hl("❌ " + hm.hn[92], function() {
				dw.dx(7, dw.a6M(7).ck)
			}), new hl("🗑️ Delete Account", function() {
				dw.dx(8, dw.a6M(7).ck, new oW(17))
			}, f3.ho)]))
		}, f3.ho).button])), a2U
	}()), wB.push(function() {
		var a2U = new fE;
		a2U.fG("Saved Accounts"), a2U.fH("Listed accounts may have been removed in the meantime due to insufficient funds."), ex.w.nm();

		function aID(ew) {
			for (let q = 0; q < 2; q++) aIC[q].aFk(0 === ew ? f3.ss : 0 === q ? f3.ho : f3.f4)
		}
		let fM, aIC;
		return aIC = [new hl("🗑️ Remove From List", function() {
			var ew = Math.min(ex.ey.data[117].value, fM.fN.length - 1);
			if (!(ew < 1)) {
				fM.fN[ew].remove(), fM.fN.splice(ew, 1);
				for (let q = ew; q < fM.fN.length; q++) fM.fN[q].name = "" + q;
				ex.w.nq(ew), ew = ex.ey.data[117].value, fM.fN[ew].textContent = fM.fN[ew].textContent.replace("⚪", "🟢"), aID(ew)
			}
		}, f3.ss), new hl("➡️ Login", function() {
			var ew = Math.min(ex.ey.data[117].value, fM.fN.length - 1);
			ew < 1 || (ew = ex.w.nr(ew), ex.fT.fU(105, ew.ns), ex.fT.fU(106, ew.password), dw.dx(8, dw.fh().ck, new oW(18)))
		}, f3.ss)], (fM = new a2f(ex.ey.data[117], aID)).fN[0].style.marginTop = "0.5em", a2U.fL(fM), a2U.fO(new z([aIC[1].button])), a2U.fO(new z([aIC[0].button])), a2U
	}()), function(wB) {
		var a2U = new fE,
			rS = ex.ey.data[137].value,
			aIH = (a2U.fG("Primary Clan Stats"), a2U.fJ("Clan: " + (rS ? "[" + ex.ey.data[135].value + "]" : "-")), a2U.fJ("Monthly Points: " + a5.gN.qS(rS, .001, 3)), a2U.fJ("Rank: " + (ex.ey.data[139].value + 1) + " / " + ex.ey.data[
				111].value), ex.ey.data[141].value),
			aII = (a2U.fJ("Total Points: " + a5.gN.qS(aIH, .01, 2)), ex.ey.data[143].value);
		a2U.fJ("Won Games: " + aII), a2U.fJ("Avg. Points per Game: " + a5.gN.qS(aIH / Math.max(aII, 1), .01, 3)), rS = ex.ey.data[138].value, a2U.fG("Secondary Clan Stats", "0.8em"), a2U.fJ("Clan: " + (rS ? "[" + ex.ey.data[136].value +
			"]" : "-")), a2U.fJ("Monthly Points: " + a5.gN.qS(rS, .001, 3)), aIH = ex.ey.data[142].value, a2U.fJ("Total Points: " + a5.gN.qS(aIH, .01, 2)), aII = ex.ey.data[144].value, a2U.fJ("Won Games: " + aII), a2U.fJ(
			"Avg. Points per Game: " + a5.gN.qS(aIH / Math.max(aII, 1), .01, 3)), wB.push(a2U)
	}(wB), wB))
}

function aHv() {
	this.lR = function(aIJ, ew, a3B) {
		var l9 = aIJ.height,
			dX = a5.a6.be(l9, l9),
			li = a5.a6.getContext(dX);
		return function(bK, li, a3B) {
			li.fillStyle = a3B, li.beginPath(), li.arc(bK / 2, bK / 2, .47 * bK, 0, 2 * Math.PI), li.fill()
		}(l9, li, a3B), li.drawImage(aIJ, -ew * l9, 0), dX
	}, this.a5J = function(aIL) {
		var l9 = aIL.height,
			li = a5.a6.getContext(aIL, !0),
			oM = li.getImageData(0, 0, l9, l9);
		return a5.a6d.pc(oM.data, l9, l9, .9), li.putImageData(oM, 0, 0), aIL
	}
}

function eh() {
	this.cf = function(y) {
		var id, ut, ih;
		for (bV.a4(y), bV.ew += 2, ih = 8 * bV.size; bV.ew + 8 <= ih;) id = bV.bc(4), ut = bV.bc(9), 0 === id ? this.aAX(id, ut, bV.bc(22)) : 1 === id ? this.aAX(id, ut, bV.bc(10), bV.bc(10)) : 2 === id ? this.aAX(id, ut, bV.bc(10), bV.bc(9)) :
			3 === id || 4 === id ? this.aAX(id, ut, bV.bc(10), bV.bc(22)) : 5 === id || 6 === id ? this.aAX(id, ut, bV.bc(10)) : 7 === id ? this.aAX(id, ut, bV.bc(1)) : this.aAX(id, ut)
	}, this.wg = [], this.aIM = function() {
		for (var aIO = 0, aIP = 0, aIQ = 0, aIR = 0, aIS = 0, aIT = 0, q = 0; q < 512; q++) aIO += p.eA[q], aIP += p.r[q], aIQ += p.eE[q], aIR += an.w.aq[q];
		aIS += an.w.ao, aIT += h5, this.wg.push(((255 & aIO + aIP + aIQ + aIR + aIS + aIT) << 12) + ((3 & aIO) << 10) + ((3 & aIP) << 8) + ((3 & aIQ) << 6) + ((3 & aIR) << 4) + ((3 & aIS) << 2) + (3 & aIT))
	}, this.aAX = function(id, ut, uu, dT) {
		0 === id ? h7.ef.a9(ut, uu) : 1 === id ? h7.ef.aL(ut, uu, dT) : 2 === id ? h7.ef.ae(ut, uu, dT) : 3 === id ? h7.ef.am(ut, uu, dT) : 4 === id ? h7.ef.ax(ut, uu, dT) : 5 === id ? h7.ef.b3(ut, uu) : 6 === id ? h7.ef.b6(ut, uu) : 7 === id ?
			h7.ef.bC(ut, uu) : 8 === id ? h7.ef.bG(ut) : h7.ef.bI(ut)
	}
}

function aFT() {
	this.n8 = 0, this.fy = null, this.a4 = function() {
		this.n8 = 0, this.fy = []
	}, this.xQ = function(player) {
		this.fy.push(player), d.wW++, p.kl[player] = 2, p.o[player] = aAZ.aCA.aGu(), player === d.eC && (eR.show(!1, !1), eH.aGy()), bA.xH(player)
	}, this.aH1 = function(player) {
		var q, fy;
		if (2 !== p.kl[player])
			for (q = (fy = this.fy).length - 1; 0 <= q; q--)
				if (fy[q] === player) return void fy.splice(q, 1)
	}, this.cf = function() {
		d.e8 || (30 === this.n8 && 2140 <= bm.h4() && this.aIU(), this.n8 = (this.n8 + 1) % 60)
	}, this.aIU = function() {
		for (var fy = this.fy, q = fy.length - 1; 0 <= q; q--) ! function(player, aM) {
			!aU.aY(player) || (aM = Math.max(Math.min(100, p.eE[player]), dG(aM * p.eE[player], 100))) < 100 || (0 === p.gf[player].length ? !an.gg.cf(player) && d.ag && gj(player, aM, 0, 0) : (d.ag ? h2 : h9)(player, aM))
		}(fy[q], 12)
	}
}

function sM() {
	var aIW = new Uint8Array(64);
	this.a4 = function() {
		var q;
		for (aIW[0] = 45, aIW[37] = 95, q = 0; q < 10; q++) aIW[q + 1] = 48 + q;
		for (q = 0; q < 26; q++) aIW[q + 11] = 65 + q, aIW[q + 38] = 97 + q
	}, this.fX = function(aIX) {
		for (var bU = bV, a1f = new Uint8Array(aIX), q = 0; q < aIX; q++) a1f[q] = bU.bc(6);
		return a1f
	}, this.fW = function(a1f) {
		for (var c = a1f.length, aIY = aIW, gH = [], q = 0; q < c; q++) gH.push(String.fromCharCode(aIY[a1f[q]]));
		return gH.join("")
	}
}

function hl(title, aIZ, backgroundColor = f3.jM, aIa = !0) {
	let aIb = document.createElement("button");
	this.button = aIb, this.ne = aIZ;
	let aIc;

	function aDx() {
		if (aIa) {
			var gL = a5.color.xo(aIc);
			if (0 < gL[0] && gL[0] < 255 && gL[0] === gL[1] && gL[0] === gL[2]) return
		}
		this.style.backgroundColor = a5.color.aDx(aIc, 50)
	}

	function aIe() {
		this.style.backgroundColor = aIc
	}

	function aId() {
		this.style.backgroundColor = aIc, this.blur()
	}
	var self;
	this.aFk = function(dU) {
			aIc = dU, aIb.style.backgroundColor = dU
		}, self = this, aIb.innerHTML = title, aIb.style.color = f3.f9, aIb.style.userSelect = "none", aIb.style.outline = "none", aIb.style.overflowWrap = "break-word", self.aFk(backgroundColor), aIb.style.border = "none", aIb.style.font =
		"inherit", aIb.style.fontSize = "1em", aIb.style.padding = "0em 0.3em", aIb.onclick = aIZ, aIb.addEventListener("mouseover", aDx), aIb.addEventListener("mouseout", aId), aIb.addEventListener("focus", aDx), aIb.addEventListener("blur", aIe)
}

function aFW() {
	this.rn = new Int16Array(4), this.sK = new Int16Array(4), this.a4 = function() {
		var q;
		for (this.rn[0] = -ba.bb, this.rn[1] = 1, this.rn[2] = ba.bb, this.rn[3] = -1, q = 0; q < 4; q++) this.sK[q] = 4 * this.rn[q]
	}, this.rg = function(re, rd) {
		var it = this.e6(rd) - this.e6(re),
			rd = this.e7(rd) - this.e7(re),
			re = it >>> 31 << 1;
		return 5 + re + (1 - re) * (1 - (rd >>> 31 << 1)) * (Math.abs(it) - Math.abs(rd) >>> 31) & 3
	}, this.rj = function(re, rd, q3) {
		return q3 % 2 == 0 ? q3 + (1 - q3) * (1 - (this.e6(rd) - this.e6(re) >>> 31 << 1)) + 4 & 3 : q3 + (2 - q3) * (1 - (this.e7(rd) - this.e7(re) >>> 31 << 1)) + 4 & 3
	}, this.rf = function(s, aA) {
		for (var rd, aIg, aIi = p.at[s], c = aIi.length, bK = ba.bb, aIj = this.e6(aA), aIk = this.e7(aA), aIl = aIi[0] >> 2, min = this.aIm(aIj, aIk, aIl), q = 1; q < c; q++)(aIg = (aIg = aIj - (rd = aIi[q] >> 2) % bK) * aIg + (aIg = aIk - ~~((
			.5 + rd) / bK)) * aIg) < min && (min = aIg, aIl = rd);
		return aIl
	}, this.rm = function(player, ip) {
		return !ol.q9(ip) && player === ol.q7(ip)
	}, this.aIm = function(wJ, wL, aA) {
		return (wJ -= this.e6(aA)) * wJ + (wL -= this.e7(aA)) * wL
	}, this.aE8 = function(dt, du, gR) {
		dt = this.aIn(dt) - this.rz(gR), du = this.aIo(du) - this.s1(gR);
		return Math.sqrt(dt * dt + du * du)
	}, this.aEB = function(re, rd) {
		var ik = this.e6(re) - this.e6(rd),
			re = this.e7(re) - this.e7(rd);
		return Math.sqrt(ik * ik + re * re)
	}, this.aj = function(s, aM) {
		return b8.dE(aM * p.eE[s], 1e3)
	}, this.aIn = function(dt) {
		return 16 * (dt + iK) / iJ
	}, this.aIo = function(du) {
		return 16 * (du + iL) / iJ
	}, this.wK = function(dt) {
		return Math.floor((dt + iK) / iJ)
	}, this.wM = function(du) {
		return Math.floor((du + iL) / iJ)
	}, this.wP = function(wJ, wL) {
		return 1 <= wJ && 1 <= wL && wJ < ba.bb - 1 && wL < ba.bd - 1
	}, this.e6 = function(aA) {
		return aA % ba.bb
	}, this.e7 = function(aA) {
		return b8.dE(aA, ba.bb)
	}, this.wN = function(wJ, wL) {
		return wL * ba.bb + wJ
	}, this.aF = function(aA) {
		var wJ = this.e6(aA),
			aA = this.e7(aA);
		return 0 < wJ && wJ < ba.bb - 1 && 0 < aA && aA < ba.bd - 1
	}, this.wO = function(aA) {
		return aA << 2
	}, this.aIp = function(aA) {
		return ba.bb * this.e7(aA) * 256 + (this.e6(aA) << 4)
	}, this.rl = function(aA) {
		return this.aIp(aA) + 8 + (ba.bb << 7)
	}, this.rt = function(gR) {
		return ba.bb * (this.s1(gR) >> 4) + (this.rz(gR) >> 4)
	}, this.a4a = function(gR) {
		gR = this.rt(gR);
		return (this.e6(gR) >> 5) + an.a2m.a5X * (this.e7(gR) >> 5)
	}, this.rz = function(gR) {
		return gR % (ba.bb << 4)
	}, this.s1 = function(gR) {
		return b8.dE(gR, ba.bb << 4)
	}, this.rh = function(aA, q3) {
		return aA + this.rn[q3]
	}, this.sI = function(ip, q3) {
		return ip + this.sK[q3]
	}
}

function aCB() {
	this.aF2 = function() {
		let c = h5;
		var fy = h6,
			o = p.o,
			jf = this.aGu();
		for (let q = 0; q < c; q++) {
			var s = fy[q];
			ol.rB(s) && (o[s] = jf)
		}
		var aO = p.aO,
			pw = p.pw,
			px = p.px,
			r7 = p.r7;
		c = d.e;
		for (let q = 0; q < c; q++)(0 === r7[q] || px[q] < 1 || 2 * aO[q] > 3 * (pw[q] + px[q])) && (o[q] = 0);
		let rP = 0;
		for (let q = 0; q < c; q++) rP += 0 < o[q];
		return rP
	}, this.aGu = function() {
		return Math.min(65535, bm.h4())
	}
}

function aFX() {
	this.rr = new Uint16Array(2), this.pz = new Uint32Array(2), this.aE9 = new Uint32Array(2), this.a8J = new Uint8Array(4), this.aG9 = new Uint8Array(4), this.pD = new Uint32Array(5), this.aX = new Uint32Array(8), this.aIq = new Uint16Array(512),
		this.sE = function(gH, ut) {
			return gH[0] = ut, gH
		}, this.aIr = function(gH, ut, uu) {
			return gH[0] = ut, gH[1] = uu, gH
		}, this.aIs = function(gH, ut, uu, dT) {
			return gH[0] = ut, gH[1] = uu, gH[2] = dT, gH
		}, this.aIt = function(gH, ut, uu, dT, aIu) {
			return gH[0] = ut, gH[1] = uu, gH[2] = dT, gH[3] = aIu, gH
		}
}

function yw() {
	function aIv(q, title, type = 0, np = null, z9 = 0, hW = 0) {
		ex.ey.data.push({
			ew: q,
			title: title,
			type: type,
			np: np,
			value: z9,
			z9: z9,
			hW: hW
		})
	}

	function aIw(q, title, type, np = null, z9 = "", hW = 0) {
		ex.ey.data.push({
			ew: q,
			title: title,
			type: type,
			np: np,
			value: z9,
			z9: z9,
			hW: hW
		})
	}

	function aIx(ih) {
		for (var q = ex.ey.data.length; q < ih; q++) ex.ey.data.push(null)
	}
	this.data = [], this.a4 = function() {
		aIv(0, "", 1, ["English", "Русский", "Türkçe", "Española", "Deutsch", "Polski"], 0, 5), aIv(1, "", 1, null, 1), aIv(2, "", 0, [0, 1]), aIw(3, "Username", 2), aIv(4, "Font5", 1, ["Default", "Custom"]), aIw(5, "", 2, null, "Trebuchet MS",
				1), aIv(6, "", 0, [0, 1]), aIv(7, "", 0, [0, 1], 1), aIv(8, "", 0, [0, 1]), aIv(9, "", 1, null, 1), aIv(10, "", 1, null), aIv(11, "", 1, null, 1), aIx(100), aIw(100, "Username", 2), aIw(101, "Password", 2), aIw(102, "Emojis", 2),
			aIw(103, "Colors", 2), aIw(104, "Clan", 2), aIw(105, "AccountName", 2), aIw(106, "Password", 2), aIv(107), aIv(108), aIv(109), aIw(110, null, 2), aIv(111), aIv(112), aIv(113), aIw(114, null, 2), aIv(115), aIw(116, null, 2), aIv(117,
				null, 1), aIw(118, null, 2, null, "", 2), aIv(119, null, 1, null, 0, 1), aIw(120, null, 2), aIv(121, "CountryColor", 1, null, ~~(262144 * Math.random())), aIw(122, "Username", 2), aIv(123), aIw(124), aIv(125, null, 1, ["M1", "M5",
				"H1", "H4", "D1", "W1", "MN"
			]), aIw(126, null, 2), aIv(127, "Y-Axis Compression", 0, [0, 1], 1), aIv(128), aIv(129), aIv(130), aIv(131), aIv(132), aIw(133, null, 2), aIv(134, null, 0, null, 5), aIw(135, null, 2), aIw(136, null, 2), aIv(137), aIv(138), aIv(139),
			aIv(140), aIv(141), aIv(142), aIv(143), aIv(144), aIx(180), aIv(180, "R0", 0), aIv(181, "R1", 0)
	}, this.translate = function() {
		this.data[0].title = "🌐 " + hm.hn[101], this.data[1].title = hm.hn[102], this.data[2].title = hm.hn[103], this.data[5].title = hm.hn[104], this.data[6].title = hm.hn[105], this.data[7].title = hm.hn[106], this.data[8].title = hm.hn[107],
			this.data[9].title = hm.hn[108], this.data[10].title = hm.hn[109], this.data[11].title = hm.hn[110], this.data[1].np = [hm.hn[111], hm.hn[112], hm.hn[113], hm.hn[114]], this.data[9].np = [hm.hn[112], hm.hn[115], hm.hn[116]], this
			.data[10].np = [hm.hn[109] + " 1", hm.hn[117] + " 1", hm.hn[109] + " 2", hm.hn[117] + " 2"], this.data[11].np = [hm.hn[118], hm.hn[119], hm.hn[120]]
	}, this.fU = function(ew, value) {
		this.data[ew].value = value
	}, this.ez = function(ew, value) {
		this.fU(ew, value), ex.ne.save(ew, String(value)), ex.ne.save(ew, String(this.data[ew].hW), !0)
	}, this.aIy = function() {
		for (var q = 0; q < this.data.length; q++) this.data[q] && (ex.ne.save(q, String(this.data[q].value)), ex.ne.save(q, String(this.data[q].hW), !0))
	}, this.hZ = function(ew) {
		return Number(this.data[ew].value)
	}, this.hR = function(ew) {
		return String(this.data[ew].value)
	}
}

function aFB() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.lS = 13, this.lU = this.emojis.length, this.dO = 676, this.lT = 1024, this.dP = this.emojis.indexOf("💀"), this.aIz = this.dP + 1, this.aB9 = this.emojis.indexOf("🥇"), this.a3C = this.emojis.indexOf("😊"), this.lj = function(dS) {
		return dS < this.dO ? String.fromCharCode(55356, 56806 + b8.dE(dS, 26), 55356, 56806 + dS % 26) : this.emojis[Math.min(dS - this.dO, this.lU - 1)]
	}, this.lW = function(bO) {
		var c = bO.length - 2,
			gH = [];
		for (let q = 0; q < c; q++) {
			var g5 = bO.charCodeAt(q) - 56806,
				g6 = bO.charCodeAt(q + 2) - 56806;
			0 <= g5 && g5 < 26 && 0 <= g6 && g6 < 26 && (gH.push(26 * g5 + g6), q += 3)
		}
		return gH
	}, this.aJ0 = function(dS) {
		return dS < this.dO
	}, this.aJ1 = function(dS) {
		return dS >= 1024 - this.lS
	}, this.aJ2 = function(dS) {
		return dS >= this.dO && dS < this.dO + this.aIz
	}
}

function a2f(pQ, aJ3 = function() {}) {
	this.fN = [];
	let aJ4 = this.fN;

	function click() {
		for (let q = 0; q < aJ4.length; q++) aJ4[q].textContent = aJ4[q].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var ew = parseInt(this.name);
		ex.fT.fU(pQ.ew, ew), aJ3(ew)
	}
	var aJ5, c = pQ.np.length;
	for (let q = 0; q < c; q++)(aJ5 = document.createElement("p")).textContent = "⚪ " + pQ.np[q], aJ5.style.margin = "0", aJ5.name = "" + q, aJ5.style.cursor = "pointer", aJ5.style.fontSize = "1em", aJ5.addEventListener("click", click), aJ4.push(
	aJ5);
	aJ4[pQ.value].textContent = aJ4[pQ.value].textContent.replace("⚪", "🟢")
}

function aFN() {
	var j6, j7, c6, c7, a8F, aJ6, gap, aJ7, fontSize, aJ8, dV, eD, aJ9, aJA, aJB, aJC, aJD, aJE;

	function aJH() {
		j7.clearRect(0, 0, eH.bK, eH.bL), j7.fillStyle = f3.f5, j7.fillRect(0, 0, eH.bK, eH.bL), j7.fillStyle = f3.sy, ip = 0 < aJB ? aJB : Math.sqrt(eD[4] / 1e4), j7.fillRect(0, eH.bL - a8F - 1, Math.floor(ip * eH.bK), a8F), j7.fillStyle = f3.f9, j7
			.fillRect(0, 0, eH.bK, 1), j7.fillRect(0, 0, 1, eH.bL), j7.fillRect(eH.bK - 1, 0, 1, eH.bL), j7.fillRect(0, eH.bL - 1, eH.bK, 1), j7.fillRect(0, eH.bL - a8F - 1, eH.bK, 1);
		for (var ip, aJI, hh = 0, q = 0; q < dV.length; q++) aJ9[q] ? (a5.a6.textAlign(j7, 0), aJI = Math.floor((aJ6 - a8F + 2 * aJ7) * (q - hh + 1) / (dV.length + 1) - .7 * aJ7), j7.fillText(dV[q], gap, aJI), a5.a6.textAlign(j7, 2), 5 === q && 0 !==
			p.eA[d.eC] && p.eE[d.eC] >= ak.gk(d.eC) ? (j7.fillStyle = f3.tK, j7.fillText(aJG(q), eH.bK - gap, aJI), j7.fillStyle = f3.f9) : j7.fillText(aJG(q), eH.bK - gap, aJI)) : hh++
	}

	function aJG(q) {
		return q < 3 ? eD[q].toString() : 3 === q || 4 === q || 5 === q ? a5.gN.jP(eD[q] / 100, 2) : q < 7 ? a5.gN.jO(eD[q]) : q === 7 ? eH.kk(eD[7]) : q === 8 ? utils.getMaxTroops(p.r, d.eC) : utils.getDensity(d.eC)
	}

	function aJF() {
		p.r[d.eC] !== eD[6] && (eD[6] = p.r[d.eC], aJ8++)
	}
	this.a4 = function() {
		aJB = aJC = 0, (dV = new Array(8))[0] = hm.hn[70], dV[1] = d.e8 ? hm.hn[71] : hm.hn[72], dV[2] = hm.hn[73], dV[3] = hm.hn[74], dV[4] = hm.hn[75], dV[5] = hm.hn[76], dV[6] = hm.hn[77], dV[7] = hm.hn[78],
			dV.push("Max Troops", "Density"), // add dV
			aJE = d.wX - dG(d.wX, 100), (eD = new Array(dV.length))[0] = d.e8 ? 0 : d.e, eD[1] = d.e8 ? h5 : d.dF, eD[2] = d.wW, eD[3] = 0, eD[4] = dG(1e4 * p.r[0], d.wX), eD[5] = 700, eD[6] = 0, aJF(), eD[7] = 0, aJA = aJG(6), aJ9 = new Array(dV
				.length);
		for (var q = dV.length - 1; 0 <= q; q--) aJ9[q] = !0;
		aJD = 0, aJD = d.e8 ? (aJ9[0] = !1, aJ9[2] = !1, aJ9[3] = !1, 3) : (aJ9[3] = !1, 1), aJ8 = 0, this.resize()
	}, this.resize = function() {
		this.bK = Math.floor((di.dj.dk() ? .1646 : .126) * 1.25 * dl.dm), this.bL = Math.floor(1.18 * this.bK), a8F = Math.floor(.04 * this.bK), gap = Math.floor(.035 * this.bK), aJ7 = .04 * this.bK, aJ6 = this.bL, this.bL -= Math.floor(aJD * (
			this.bL - 2 * a8F) / dV.length), fontSize = Math.floor(.7 * (aJ6 - a8F) / dV.length), fontSize = a5.a6.jD(1, fontSize), (j6 = document.createElement("canvas")).width = this.bK, j6.height = this.bL, (j7 = j6.getContext("2d", {
			alpha: !0
		})).font = fontSize, a5.a6.textBaseline(j7, 1), j7.lineWidth = 1, this.eI(), this.iS(), wl.iS(), aJH()
	}, this.iS = function() {
		c6 = dl.bK - this.bK - dq.gap
	}, this.aGy = function() {
		c7 = dq.gap
	}, this.eI = function() {
		c7 = dq.gap + (wl.kc() && 0 !== p.eA[d.eC] && !d.e9 ? wl.bL + dq.gap : 0)
	}, this.eV = function(a0O) {
		(a0O || 100 <= aJ8) && (aJ8 = 0, aJH())
	}, this.a3J = function() {
		return eD[7]
	}, this.kk = function(value) {
		var bQ = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * bQ) / 1e3);
		return value < 10 ? bQ + ":0" + value : bQ + ":" + value
	}, this.cf = function() {
		var a30, per;
		aJ9[0] && d.wV - d.wW !== eD[0] && (eD[0] = d.wV - d.wW, aJ8++), h5 - eD[0] !== eD[1] && (eD[1] = h5 - eD[0], aJ8++), this.aHL(), (a30 = ak.a29(d.eC)) !== eD[5] && (eD[5] = a30, aJ8++), aJF(), eD[7] += bm.kw, a30 = aJG(7), aJA !== a30 &&
			(aJA = a30, aJ8 += 100), a30 = d.ag ? lx.a41() : p.r[a0j[0]], per = dG(1e4 * a30, d.wX), eD[3] = a30, eD[4] !== per && (aJ8++, eD[4] = per), 8 === d.k && function() {
				if (0 === p.eA[0]) g.v0.xN(1);
				else {
					if (0 !== p.eA[1]) return;
					g.v0.xN(0)
				}
				return 1
			}() || eD[3] < aJE || eD[3] !== d.wX && ! function() {
				for (var q = h5 - 1; 0 <= q; q--)
					if (0 < p.hB[h6[q]].length) return;
				return 1
			}() || g.v0.xN(-1)
	}, this.aHL = function() {
		aJ9[2] && d.wW !== eD[2] && (eD[2] = d.wW, aJ8++)
	}, this.ks = function(q) {
		var fB, aJS, hh;
		return 2 !== d.jc && (q === d.kt ? (aJB = 0, aJH(), !1) : (-1 !== q || 0 !== aJC) && (aJS = aJB, aJB = d.eJ ? q / d.kt : (hh = performance.now(), 0 <= q && (fB = hh - 392 * q, aJC = 0 === q || fB < aJC ? fB : aJC), 1 < (aJB = (hh - aJC) /
			(392 * d.kt)) ? 1 : aJB), aJH(), aJB !== aJS))
	}, this.e1 = function() {
		e2.drawImage(j6, c6, c7)
	}
}

function a2p() {
	this.cf = function() {
		for (var aJT, a2o, a4Y = an.w.a4Y, p0 = an.w.p0, a4W = an.w.a4W, q = an.w.ao - 1; 0 <= q; q--) aJT = p0[q], 0 !== (a2o = a4Y[q]) && aJT === a4W[q] && (! function(q, aJV, q3) {
			var aN, player = an.w.p1[q] >> 3,
				q3 = aJV + aE.rn[q3] << 2,
				q = an.w.p2[q];
			if (ol.q9(q3)) aN = d.b4;
			else {
				if ((aN = ol.q7(q3)) === player) return a5.aB.sR(player, q);
				if (!qE(player, aN)) return h7.ei.aFv(player, aN, q)
			}
			player === d.eC && (ab.eD[13] += q);
			p.hB[player].push(aJV << 2), aU.aK(player, q, aN), q0.q1(player, !0)
		}(q, aE.rt(aJT), a2o - 1), an.a2i.a4O(q))
	}
}

function aFP() {
	var aJW, aJX, aJY, aJZ, aJa, aJb, aJc, aJd, aJe, aJf, aJg, aJh, aJi, aJj, aJk, aJl, aJm, aJn, aJp, aJq, aJr, aJs, aJt, aJz, aK0, aJo = null,
		aJv = 0,
		aJw = !1,
		aJx = new Float32Array(4),
		aJy = 0,
		a9Z = 400;

	function a5m() {
		aJe = Math.floor(+dl.dm), aJf = Math.floor(.5 * aJe), aJo.width = dl.bK, aJo.height = dl.bL, aJp = aJo.getContext("2d", {
			alpha: !0
		}), a5.a6.textAlign(aJp, 1), a5.a6.textBaseline(aJp, 1), aJp.imageSmoothingEnabled = !0
	}

	function aK1() {
		var q, aK6;
		for (e2.font = a5.a6.jD(1, 100 * aJg), aK6 = 80 / Math.floor(e2.measureText(a5.gN.jO(d.sU)).width), e2.font = a5.a6.jD(1, 100), q = d.b4 - 1; 0 <= q; q--) aJd[q] = 100 / Math.floor(e2.measureText(p.zj[q]).width), aJc[q] = Math.min(aK6, aJd[
			q])
	}

	function aK7(q) {
		return !ex.ey.data[7].value || p.eE[q] < 1e6 ? 1 : p.eE[q] < 1e7 ? aJx[0] : aJx[Math.min(Math.floor(Math.log10(p.eE[q])) - 6, 3)]
	}

	function aK5(li) {
		aJn = !1, aJm = 1, aJk = aJl = 0, li.clearRect(0, 0, dl.bK, dl.bL);
		for (var aKD, aKE, q, aKF, fontSize, aKG, kM = iK / iJ, kN = iL / iJ, kO = (dl.bK + iK) / iJ, kP = (dl.bL + iL) / iJ, aKH = 0 !== p.eA[d.eC] && ol.rB(d.eC), gT = h5 - 1; 0 <= gT; gT--) q = h6[gT], (fontSize = Math.floor(aJj * iJ * aK7(q) *
			aJc[q] * aJa[q])) < aJi || aJe <= fontSize || aJY[q] + aJa[q] > kM && aJY[q] < kO && aJZ[q] + aJb[q] > kN && aJZ[q] < kP && (aKD = Math.floor(dl.bK * (aJY[q] + aJa[q] / 2 - kM) / (kO - kM)), aKE = Math.floor(dl.bL * (aJZ[q] + aJb[q] /
			2 - kN) / (kP - kN) - .1 * fontSize), aKF = ol.jI[q], li.font = a5.a6.jD(1 === p.kl[q] ? 4 : 1, fontSize), li.fillStyle = aKI(fontSize, aKF % 2), ex.ey.data[7].value ? aKJ(li, q, fontSize, aKD, aKE, aKF) : aKK(q, fontSize, aKD,
			aKE, li), aJn = !0, 0 < aJr[q] ? function(aKD, aKE, fontSize, q, li) {
			0 === a96[q] ? dM.dN.aJ0(aJq[q]) ? (function(aKD, aKE, fontSize, player, b7, li) {
				for (var kj = aKE, a4J = (li.globalAlpha = aKS(fontSize), aK7(player) * (ex.ey.data[7].value ? aJy : aJd[player])), a3Z = aKD - .5 * fontSize / a4J - .9 * fontSize, fC = 0; fC < 2; fC++) li.fillText(dM.dN.lj(b7), a3Z,
					kj), a3Z = aKD + .5 * fontSize / a4J + .9 * fontSize;
				li.globalAlpha = 1
			}(aKD, aKE, fontSize, q, aJq[q], li), aKM(aKD, aKE, fontSize, 0, 0, li)) : dM.dN.aJ2(aJq[q]) ? (aKV(aKD, aKE, fontSize, aJq[q], 0, li), aKM(aKD, aKE, fontSize, 0, 1, li)) : (aKV(aKD, aKE, fontSize, aJq[q], 1, li), aKM(aKD,
				aKE, fontSize, 1, 0, li)) : aKV(aKD, aKE, fontSize, aJq[q], 0, li)
		}(aKD, aKE, fontSize, q, li) : 0 === a96[q] && aKM(aKD, aKE, fontSize, 0, 0, li), aKH && (0 < aJr[q + d.b4] || 0 < aJr[q + 2 * d.b4] || 0 < aJr[q + 3 * d.b4] || 0 < aJr[q + 4 * d.b4]) && function(aKD, aKE, fontSize, q, li) {
			var dU, dJ = -1;
			for (dU = 4; 1 <= dU; dU--) 0 < aJr[q + dU * d.b4] && dJ++;
			for (dU = 1; dU < 5; dU++) 0 < aJr[q + dU * d.b4] && (! function(aKD, aKE, fontSize, dU, q, aKQ, hh, li) {
				let dX;
				if (1 === dU) {
					q = aJq[q + d.b4];
					if (!dM.dN.aJ1(q)) return function(aKD, aKE, fontSize, b7, aKQ, li) {
						li.globalAlpha = aKS(fontSize);
						aKD -= .534 * aKQ * fontSize, aKQ = aKE + 1.59 * fontSize;
						li.font = a5.a6.jD(0, .785 * fontSize), li.fillText(dM.dN.lj(b7), aKD, aKQ), li.globalAlpha = 1
					}(aKD, aKE, fontSize, q, aKQ, li);
					dX = dM.bt.lD[q - 1024 + dM.dN.lS]
				} else dX = 2 === dU ? le.a39()[4].j6[+(hh < 255)] : (3 === dU ? le.a39()[5] : le.a39()[6]).j6[0];
				q = dM.bt.lE, hh = .8 * fontSize / q, dU = aKD - .5 * hh * q - .534 * aKQ * fontSize, aKD = aKE + 1.4 * hh * q;
				li.setTransform(hh, 0, 0, hh, dU, aKD), li.globalAlpha = aKS(fontSize), li.drawImage(dX, 0, 0), li.globalAlpha = 1, li.setTransform(1, 0, 0, 1, 0, 0)
			}(aKD, aKE, fontSize, dU, q, dJ, aJr[q + dU * d.b4], li), dJ -= 2)
		}(aKD, aKE, fontSize, q, li), (aKG = aJg * fontSize) < aJi || (li.font = a5.a6.jD(1, aKG), aKE += Math.floor(.78 * fontSize), ex.ey.data[7].value ? aKK(q, aKG, aKD, aKE, li) : aKJ(li, q, aKG, aKD, aKE, aKF)))
	}

	function aKK(q, fontSize, c6, c7, li) {
		var ___id = q;
		li.fillText(p.zj[q], c6, c7), q < d.e && 2 !== p.kl[q] || (q = fontSize / aJd[q], li.fillRect(c6 - .5 * q, c7 + a5.a6.lk * fontSize, q, Math.max(1, .1 * fontSize)));
		ex.ey.data[7].value && settings.showPlayerDensity && (settings.coloredDensity && (li.fillStyle = utils.textStyleBasedOnDensity(___id)), li.fillText(utils.getDensity(___id), c6, c7 + fontSize));
	}

	function aKJ(li, q, fontSize, aKD, aKE, aKF) {
		var ___id = q;
		q = a5.gN.jO(p.eE[q]);
		aKF >> 1 & 1 ? (li.lineWidth = .05 * fontSize, li.strokeStyle = aKI(fontSize, aKF % 2), li.strokeText(q, aKD, aKE)) : (1 < aKF && (li.lineWidth = .12 * fontSize, li.strokeStyle = aKI(fontSize, aKF), li.strokeText(q, aKD, aKE)), li.fillText(q,
			aKD, aKE));
		ex.ey.data[7].value || settings.showPlayerDensity && (settings.coloredDensity && (li.fillStyle = utils.textStyleBasedOnDensity(___id)), li.fillText(utils.getDensity(___id), aKD, aKE + fontSize))
	}

	function aKM(aKD, aKE, fontSize, aKQ, aKR, li) {
		var a1m = .95 * fontSize / aJt,
			aKD = aKD - .5 * a1m * aJs + .8 * aKQ * fontSize,
			aKQ = aKE - 1.76 * a1m * aJt - (.35 - a5.a6.lk + .7) * aKR * fontSize;
		li.setTransform(a1m, 0, 0, a1m, aKD, aKQ), li.globalAlpha = aKS(fontSize), li.drawImage(df.get(4), 0, 0), li.globalAlpha = 1, li.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aKV(aKD, aKE, fontSize, b7, aKQ, li) {
		if (li.globalAlpha = aKS(fontSize), dM.dN.aJ1(b7)) {
			var l9 = dM.bt.lE,
				a1m = 1.1 * fontSize / l9;
			li.setTransform(a1m, 0, 0, a1m, aKD - .5 * a1m * l9 - .8 * aKQ * fontSize, aKE - 1.55 * a1m * l9), li.drawImage(dM.bt.lD[b7 - 1024 + dM.dN.lS], 0, 0), li.setTransform(1, 0, 0, 1, 0, 0)
		} else {
			let a3Z = aKD - .8 * aKQ * fontSize,
				kj = aKE - (.35 - a5.a6.lk + 1) * fontSize;
			li.fillText(dM.dN.lj(b7), a3Z, kj)
		}
		li.globalAlpha = 1
	}

	function aKI(fontSize, aKF) {
		return aJf <= fontSize && fontSize < aJe ? u.fq[aKF] + aKS(fontSize).toFixed(3) + ")" : u.fr[aKF]
	}

	function aKS(fontSize) {
		return aJf <= fontSize && fontSize < aJe ? 1 - (fontSize - aJf) / (aJe - aJf) : 1
	}

	function aKf(a4J, bK) {
		return 1 + Math.floor(aJh * a4J * bK)
	}

	function aKc(q) {
		for (var left = aJY[q], gT = aJY[q] - p.eM[q] - 1; 0 <= gT; gT--)
			if (!aKg(q, --left, aJZ[q], aJb[q])) {
				left++;
				break
			} var right = aJY[q];
		for (gT = p.eO[q] - aJY[q] - aJa[q]; 0 <= gT; gT--)
			if (!aKg(q, ++right + aJa[q] - 1, aJZ[q], aJb[q])) {
				right--;
				break
			} var c6 = Math.floor((left + right) / 2),
			top = aJZ[q];
		for (gT = aJZ[q] - p.eN[q] - 1; 0 <= gT; gT--)
			if (!aKh(q, c6, --top, aJa[q])) {
				top++;
				break
			} var bottom = aJZ[q];
		for (gT = p.eP[q] - aJZ[q] - aJb[q]; 0 <= gT; gT--)
			if (!aKh(q, c6, ++bottom + aJb[q] - 1, aJa[q])) {
				bottom--;
				break
			} var c7 = Math.floor((top + bottom) / 2);
		aKZ(q, c6, c7, aJa[q], aJb[q]) && (aJY[q] = c6, aJZ[q] = c7)
	}

	function aKZ(player, c6, c7, bK, bL) {
		bs = Math.floor(.2 * bK);
		for (var bs, dU = c6 + bK - 1; c6 <= dU; dU--)
			if (!aKg(player, dU, c7, bL)) return;
		for (dU = c7 + bL - 1 - (bs = (bs = Math.floor(.25 * bL)) < 1 ? 1 : bs); c7 + bs <= dU; dU--)
			if (!aKh(player, c6, dU, bK)) return;
		return 1
	}

	function aKg(player, c6, c7, bL) {
		return ol.tj(player, 4 * (c7 * ba.bb + c6)) && ol.tj(player, 4 * ((c7 + bL - 1) * ba.bb + c6))
	}

	function aKh(player, c6, c7, bK) {
		return ol.tj(player, 4 * (c7 * ba.bb + c6)) && ol.tj(player, 4 * (c7 * ba.bb + c6 + bK - 1))
	}
	this.a4 = function() {
		if (a9Z = 0 === (a9Z = ex.ey.data[11].value) ? 280 : 1 === a9Z ? 187 : 112, aJn = !1, aJj = .88, aJg = .5, aJh = 1.8, aJi = 12 - 3 * ex.ey.data[9].value, aJX = aJW = 0, aJY = new Uint16Array(d.b4), aJZ = new Uint16Array(d.b4), aJa =
			new Uint16Array(d.b4), aJb = new Uint16Array(d.b4), aJc = new Float32Array(d.b4), aJd = new Float32Array(d.b4), aJq = new Uint16Array(2 * d.b4), aJr = new Uint8Array(5 * d.b4), aJz = new Uint8Array(d.b4), aK0 = new Uint8Array(d.b4),
			aJo = aJo || document.createElement("canvas"), a5m(), aJl = aJk = 0, aJm = 1, ex.ey.data[7].value) {
			var q, aK6;
			for (aK1(), e2.font = a5.a6.jD(1, 100), aK6 = 100 / Math.floor(e2.measureText("900 000").width), q = d.b4 - 1; 0 <= q; q--) aJc[q] = Math.min(aK6, 2 * aJd[q]);
			aJy = aK6, aJx[0] = 100 / (aK6 * Math.floor(e2.measureText("5 000 000").width)), aJx[1] = 100 / (aK6 * Math.floor(e2.measureText("50 000 000").width)), aJx[2] = 100 / (aK6 * Math.floor(e2.measureText("500 000 000").width)), aJx[3] =
				100 / (aK6 * Math.floor(e2.measureText("1 000 000 000").width))
		} else aK1();
		! function() {
			var q;
			for (q = d.b4 - 1; 0 <= q; q--) p.r[q] < 12 ? (aJY[q] = p.eM[q] + 1, aJZ[q] = p.eN[q] + 1, aJa[q] = 1, aJb[q] = 1) : (aJY[q] = p.eM[q], aJZ[q] = p.eN[q] + 1, aJa[q] = 4, aJb[q] = 2);
			if (d.e9)
				for (q = 0; q < d.e; q++) aJa[q] = 0;
			aJs = df.get(4).width, aJt = df.get(4).height
		}()
	}, this.a2D = function(s, a0E) {
		a0E > 18 * p.r[s] ? (aK0[s] = 6, ol.jI[s] = 2 + ol.jI[s] % 2) : (aJz[s] = 4, (ol.jI[s] < 2 || 3 < ol.jI[s]) && (ol.jI[s] = 6 + ol.jI[s] % 2))
	}, this.a2E = function(s, a0E) {
		a0E > 6 * p.r[s] ? (aK0[s] = 6, ol.jI[s] = 4 + ol.jI[s] % 2) : (aJz[s] = 4, (ol.jI[s] < 4 || 5 < ol.jI[s]) && (ol.jI[s] = 8 + ol.jI[s] % 2))
	}, this.resize = function() {
		a5m(), aK5(aJp)
	}, this.eU = function() {
		for (var q = 0; q < d.e; q++) p.eO[q] - p.eM[q] != 3 || p.eP[q] - p.eN[q] != 3 ? (aJY[q] = p.eM[q] + (p.eO[q] !== p.eM[q] ? 1 : 0), aJZ[q] = p.eN[q], aJa[q] = 1, aJb[q] = 1) : (aJY[q] = p.eM[q], aJZ[q] = p.eN[q] + 1, aJa[q] = 4, aJb[q] =
			2)
	}, this.bB = function(player, ew, aK8) {
		! function(player, ew, aK8) {
			player += ew * d.b4;
			0 === ew ? aJq[player] === aK8 && 0 < aJr[player] ? aJr[player] = 0 : (aJq[player] = aK8, aJr[player] = dM.dN.aJ0(aK8) ? 255 : 64) : 1 === ew ? (aJr[player] = 64, aJq[player] = aK8) : aJr[player] = aK8
		}(player, ew, aK8), 2 === d.jc && this.eV(!0)
	}, this.e1 = function() {
		aJn && (1 !== aJm ? (e2.imageSmoothingEnabled = !0, e2.setTransform(aJm, 0, 0, aJm, 0, 0), e2.drawImage(aJo, -aJk / aJm, -aJl / aJm), e2.setTransform(1, 0, 0, 1, 0, 0), e2.imageSmoothingEnabled = !1) : e2.drawImage(aJo, -aJk, -aJl))
	}, this.iy = function(ik, il) {
		aJk += ik, aJl += il
	}, this.f1 = function(ik, il) {
		bA.iy(ik, il)
	}, this.zoom = function(iz, es, et) {
		aJm *= iz, aJk = (aJk + es) * iz - es, aJl = (aJl + et) * iz - et
	}, this.eV = function(a0O) {
		return !(!aJw && !a0O && bm.ca < aJv + (1 === aJm && 0 === aJk && 0 === aJl && (d.wy() || d.e9 || 2 === d.jc) ? 1e3 : a9Z) || (aJw = !1, aJv = bm.ca, aK5(aJp), 0))
	}, this.aKB = function(q) {
		return aK7(q) * aJc[q]
	}, this.aKC = function(player) {
		return aJc[player]
	}, this.cf = function() {
		bm.h4() % 10 == 9 && (aJw = d.wz() && !d.wy()), !d.wy() && 4 <= ++aJX && function() {
			var q, gT, fC;
			for (aJX = 0, fC = 4; 1 <= fC; fC--)
				for (gT = h5 - 1; 0 <= gT; gT--) q = h6[gT] + fC * d.b4, 0 < aJr[q] && aJr[q] < 255 && aJr[q]--;
			if (2 !== d.jc)
				for (gT = h5 - 1; 0 <= gT; gT--) q = h6[gT], 0 < aJr[q] && aJr[q] < 255 && aJr[q]--
		}();
		for (var c = Math.floor(.1 * h5), q = aJW + (c = h5 < (c = c < 8 ? 8 : c) ? h5 : c) - 1; aJW <= q; q--) ! function(q) {
			var a4J = aK7(q) * aJc[q];
			0 < aJa[q] && aKZ(q, aJY[q], aJZ[q], aJa[q], aJb[q]) ? ! function(q) {
				for (var c6, c7, bK, bL, ip = !1, fC = 0; fC < 8; fC++) {
					if (bK = aJa[q] + 2, bL = aJb[q] + 2, bK > p.eO[q] - p.eM[q] + 1 || bL > p.eP[q] - p.eN[q] + 1) return ip;
					if (c6 = aJY[q] - 1, c7 = aJZ[q] - 1, !aKZ(q, c6, c7, bK, bL)) return ip;
					aJY[q] = c6, aJZ[q] = c7, aJa[q] = bK, aJb[q] = bL, ip = !0
				}
				return ip
			}(q) && function(q, a4J) {
				for (var c6, c7, bK, bL, ip = !1, aI2 = aJa[q], dR = 1 + Math.floor(.02 * aI2), fC = 1; fC < 5; fC++) {
					if ((bK = aI2 + fC * dR) > p.eO[q] - p.eM[q] + 1) return ip;
					if ((bL = aKf(a4J, bK)) > p.eP[q] - p.eN[q] + 1) return ip;
					c6 = p.eM[q] + Math.floor(Math.random() * (p.eO[q] - p.eM[q] + 2 - bK)), c7 = p.eN[q] + Math.floor(Math.random() * (p.eP[q] - p.eN[q] + 2 - bL)), aKZ(q, c6, c7, bK, bL) && (aJY[q] = c6, aJZ[q] = c7, aJa[q] = bK, aJb[
						q] = bL, ip = !0)
				}
				return ip
			}(q, a4J) && aKc(q) : ! function(q, a4J) {
				var bL, c6 = aJY[q] + 1,
					c7 = aJZ[q] + 1,
					bK = aJa[q] - 2;
				for (;;) {
					if (bK < 1) {
						aJa[q] = 0;
						break
					}
					if (bL = aKf(a4J, bK), aKZ(q, c6, c7, bK, bL)) return aJY[q] = c6, aJZ[q] = c7, aJa[q] = bK, aJb[q] = bL, 1;
					c6++, c7++, bK -= 2
				}
				return
			}(q, a4J) ? function(q, a4J) {
				var c6, c7, bK, bL, fC, ih, qD = p.eO[q] - p.eM[q] + 1,
					aEl = Math.floor(.02 * qD);
				for (ih = -6 * (aEl = aEl < 1 ? 1 : aEl), fC = qD; ih <= fC; fC -= aEl)
					if (bL = aKf(a4J, bK = 0 < fC ? fC : 1), c6 = p.eM[q] + Math.floor(Math.random() * (p.eO[q] - p.eM[q] + 2 - bK)), c7 = p.eN[q] + Math.floor(Math.random() * (p.eP[q] - p.eN[q] + 2 - bL)), aKZ(q, c6, c7, bK, bL))
					return aJY[q] = c6, aJZ[q] = c7, aJa[q] = bK, aJb[q] = bL
			}(q, a4J) : aKc(q)
		}(h6[q % h5]);
		aJW = (aJW + c) % h5
	}, this.aHM = function() {
		var q, s, g5, g6;
		if (bm.h4() % 4 == 1)
			for (q = h5 - 1; 0 <= q; q--) s = h6[q], ol.jI[s] < 2 || ((g5 = Math.max(aJz[s] - 1, 0)) === (g6 = Math.max(aK0[s] - 1, 0)) ? 0 === g5 && (ol.jI[s] %= 2) : 0 === g6 && ol.jI[s] < 6 && (ol.jI[s] += 4), aJz[s] = g5, aK0[s] = g6)
	}, this.xH = function(player) {
		var q = player + 2 * d.b4,
			hh = aJr[q];
		return 0 < hh && (eS.a0C(50, player), aJr[q] = 0, 255 === hh)
	}, this.a3S = function(player) {
		return 255 === aJr[player + 2 * d.b4]
	}
}

function aKi() {
	this.qy = ["", ""], this.hn = ["Aceptar", "Borraste a {0}.", "Fuiste borrado por {0}.", "Felicidades! Ganaste el juego.", "{0} ganó el juego.", "{0} rompió el pacto de no agresión.", "¡{0} te está atacando!", "Elige tu posición de inicio!",
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

function aFc() {
	function aKk(title, rR, a2) {
		rk(a2), dw.dx(4, 5, new hk("⚠️ " + title, rR, !0))
	}

	function rk(a2) {
		! function(a2) {
			var hb = cv.cw();
			0 !== hb && (6 === hb ? v.w.d3(a2) : 7 === hb ? (w3.jt(), v.w.close(v.w.cR, 3256)) : 8 === hb && d.wu(!0))
		}(a2), dw.w.a7b()
	}
	this.d7 = function(cj, a2) {
		if (8 === dw.dy && 0 === cj) dw.dx(4, 0, new hk("⚠️ " + hm.za(64), hm.aKj(a2), !0));
		else {
			var hb = cv.cw();
			if (6 === hb) {
				if (4211 === a2) return rk(a2), void dw.dx(4, 5, new hk("🚀 " + hm.hn[122], hm.hn[123], !0, [new hl("❌ " + hm.hn[92], function() {
					dw.nK()
				}, f3.ho), new hl("🔄 " + hm.hn[124], function() {
					di.dj.hc()
				}, f3.f4)]));
				if (4214 !== a2) return void w5.aDe(cj)
			} else {
				if (7 !== hb) return 8 === hb ? void(cj !== v.w.x || d.e8 || 1 !== d.jc || eS.zn(hm.aKj(a2))) : void 0;
				if (cj !== v.w.cR) return
			}
			aKk(hm.za(64), hm.aKj(a2), a2)
		}
	}, this.d2 = function(a2) {
		8 === cv.cw() ? d.e8 || 1 !== d.jc || eS.zn(hm.aKj(a2)) : aKk(hm.za(64), hm.aKj(a2), a2)
	}
}

function uK() {
	aKm() ? (aKn(), th !== d.b4 && aKo()) : uH()
}

function aKo() {
	tg(), ti(p.gf[th]), ti(p.at[th]), tk(p.hB[th]), tm(p.at[th]), tm(p.te[th]), tn(), tr()
}

function aKn() {
	u8 = !0, aU.xF(tY, u1, u2), p.r[tY] += tW, tV(), aKp()
}

function aKm() {
	return (th === d.b4 ? aKq : aKr)()
}

function aKr() {
	var aKs = tW * d.aR,
		aKt = aKu(),
		aKv = aKw(),
		aKt = aKs + 2 * aKt + aKv,
		aKy = u3 * tW;
	return aKt < aKy ? (u2 -= aKt, aKz(aKt - aKs, aKv), !0) : (u2 -= aKy, aKz(aKy - aKs, aKv), !1)
}

function aKz(aKy, aKv) {
	if (0 < aKv) {
		if (!(aKv <= aKy)) return aU.x7(th, tY, aKv - aKy), void(aKy = 0);
		aU.x7(th, tY, 0), aKy -= aKv
	}
	aKy = dG(aKy, 2), p.eE[th] >= aKy ? p.eE[th] -= aKy : p.eE[th] = 0
}

function aKw() {
	return aU.qH(th, tY)
}

function aKu() {
	return b8.dE(tW * p.eE[th], 1 + b8.dE(10 * p.r[th], 16))
}

function aKq() {
	return u2 -= tW * d.aR, !0
}

function aKp() {
	for (var q = tW - 1; 0 <= q; q--) p.hB[tY].push(tX[q]), p.gf[tY].push(tX[q]), ol.tq(tX[q], tY)
}

function o9() {
	this.a4k = function(cj) {
		var q, aAz, aL1, aL2, aL3;
		if (cj !== v.w.cR) v.w.close(cj, 3239);
		else if (6 === cv.cw() && w3.a4(), 7 !== cv.cw()) v.w.close(cj, 3251);
		else {
			for (aAz = [0, 0, 0, 0], aL1 = bV.bc(6), q = 0; q < 4; q++) aAz[q] = bV.bc(aL1);
			for (aL2 = bV.bc(4), aL3 = [], q = 0; q < aL2; q++) {
				aL3.push({
					id: bV.bc(5),
					mg: bV.bc(4),
					a4u: 1 === bV.bc(1),
					cG: bV.bc(6),
					yE: bV.bc(14),
					aBE: bV.bc(aL1),
					aBG: bV.bc(9) + 1,
					aBF: bV.bc(10)
				});
				for (var aBH = bV.bc(3), aBI = new Array(aBH), aBJ = new Array(aBH), gT = 0; gT < aBH; gT++) aBJ[gT] = bV.bc(9) + 1, aBI[gT] = bW.ff.fg(bV.bc(3));
				aL3[q].aBH = aBH, aL3[q].aBI = aBI, aL3[q].aBJ = aBJ
			}
			w3.fU(aAz, aL3)
		}
	}
}

function aFR() {
	let dU, a0O = !1,
		aL4 = !1,
		aL5 = -1e4,
		aL6 = -1,
		aL7 = 0;

	function resize(qC) {
		dU = 0, df.dg() && (aL9(qC) || a0O) && (a0O = !1, dq.resize(), a4n.a4(), ma.a4(), a6e.a4(), w5.resize(), mX.resize(), a6n.resize(), hr.resize(), dw.resize(), 1 <= d.jc ? (kd.resize(!1), wl.resize(), eH.resize(), j0.resize(), eF.resize(), eS
			.resize(), jQ.resize(), vj.resize(), bE.resize(), vm.resize(), oS.resize(), le.resize(), vk.resize(), bA.resize(), eR.resize(), lx.resize(), j0.im()) : (2 === cv.cw() && gU.resize(), cv.a6j(), cv.a6m()), bm.bn = !0)
	}

	function aL8(dS) {
		return dS && 128 < dS ? Math.floor(dS) : 128
	}

	function aL9(qC) {
		var dh = aL8(document.documentElement.clientWidth),
			dp = aL8(window.visualViewport && 2 !== di.id ? window.visualViewport.height : document.documentElement.clientHeight);
		{
			var bK = dh,
				bL = dp,
				aLC = 0 !== di.id || bK < bL ? 700 : 1200;
			let aLD = Math.min(aLC / ((bK + bL) / 2), 1);
			aLD = 0 === ex.ey.data[1].value ? 2 * aLD / 3 : Math.min(aLD + (ex.ey.data[1].value - 1) * (1 - aLD) / 2, 1), dl.vh = (window.devicePixelRatio || 1) * aLD, hoveringTooltip.canvasPixelScale = dl.vh
		}
		return qC && !aL4 ? (aL4 = !0, document.body.removeChild(vQ)) : aL4 && (aL4 = !1, document.body.appendChild(vQ)), aLC = Math.floor(.5 + dh * dl.vh), bK = Math.floor(.5 + dp * dl.vh), (aLC !== dl.bK || bK !== dl.bL) && (dl.bK = aLC, dl.bL =
			bK, dl.min = kH(aLC, bK), dl.max = kG(aLC, bK), dl.dm = dG(aLC + bK, 2), dl.xc = aLC / bK, vQ.width = aLC, vQ.height = bK, vQ.style.width = dh + "px", vQ.style.height = dp + "px", aL6 = bm.ca + 1e3, 1)
	}
	this.bK = 0, this.bL = 0, this.min = 0, this.max = 0, this.dm = 0, this.xc = 1, this.vh = 1, this.a5I = function() {
		this.bK = aL8(document.documentElement.clientWidth) + 2, this.bL = aL8(document.documentElement.clientHeight) + 2
	}, this.a4 = function() {
		dU = 1, vQ = document.getElementById("canvasA"), (e2 = vQ.getContext("2d", {
			alpha: makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aL9(0)
	}, this.cf = function() {
		aFD.cf(), 50 <= ++dU && resize(0), -1 === aL6 || bm.ca < aL6 || (aL7++, aL6 = -1, 2e3 * aL7 >= bm.ca + 8e3 ? console.log("error 3748") : di.dj.setState(15))
	}, this.f0 = function(qC) {
		a0O = !0, resize(qC)
	}, this.w2 = function() {
		aL5 + 1e3 > bm.ca || (aL5 = bm.ca, resize(0))
	}
}

function aLE() {
	this.qy = ["", ""], this.hn = ["Kabul Et", "{0} silindi.", "{0} tarafından silindiniz.", "Tebrikler! Oyunu kazandınız.", "{0} oyunu kazandı.", "{0} saldırmazlık paktını bozdu.", "{0} sana saldırıyor!", "Başlangıç pozisyonunuzu seçin!",
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

function aFa() {
	let aLF = [0, 0],
		aLG = [0, 0];

	function aLH(ew) {
		return 3 !== aLF[ew] && 1 !== aLG[ew] && (aLG[ew] = 1, aLF[ew]++, ex.fT.fU(119, (aLF[0] << 2) + aLF[1]), 1)
	}
	this.a4 = function() {
		var dS = ex.ey.data[119].value;
		aLF[0] = dS >> 2, aLF[1] = 3 & dS
	}, this.a3L = function() {
		aLH(0) && eS.zg(hm.za(130))
	}, this.a3M = function() {
		aLH(1) && eS.zg(hm.za(131))
	}
}

function aFb() {
	this.size = 501, this.rT = new Uint32Array(this.size), this.kV = new Uint32Array(this.size), this.a30 = new Uint16Array(this.size), this.a3l = 0, this.aLI = 1, this.dU = 0, this.max = [0, 0, 0], this.eD = 0, this.a90 = ["Avg. Attack Strength",
		"Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs",
		"Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses"
	], this.a4 = function() {
		this.a3l = 0, this.aLI = 1, this.dU = 0, this.aLJ(), this.aLK()
	}, this.ac = function(player, aM) {
		player === d.eC && (this.eD[0] += aM, this.eD[1]++, this.eD[12] += aW.pz[1], this.eD[13] += aW.pz[0])
	}, this.a0D = function(player, af) {
		donationsTracker.logDonation(player, af, aW.pz[0]);
		player === d.eC && (eS.a0D(aW.pz[0], aW.pz[1], af), this.eD[12] += aW.pz[1], this.eD[16] += aW.pz[0]), af === d.eC && (eS.a0G(aW.pz[0], player), this.eD[10] += aW.pz[0])
	}, this.cf = function() {
		0 < this.dU-- || this.aLL()
	}, this.aLL = function() {
		0 !== p.eA[d.eC] && (this.rT[this.a3l] = p.r[d.eC], this.kV[this.a3l] = p.eE[d.eC], this.a30[this.a3l] = ak.a29(d.eC), this.aLM(this.a3l), this.a3l++, this.a3l === this.size && this.aLN(), this.dU = this.aLI - 1, vk.lu())
	}, this.aLN = function() {
		this.aLJ(), this.aLM(0), this.a3l = 1 + dG(this.size, 2);
		for (var q = 1; q < this.a3l; q++) this.rT[q] = this.rT[2 * q], this.kV[q] = this.kV[2 * q], this.a30[q] = this.a30[2 * q], this.aLM(q);
		this.aLI *= 2
	}, this.aLJ = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.aLK = function() {
		this.eD = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.aLM = function(q) {
		this.max[0] = this.rT[q] > this.max[0] ? this.rT[q] : this.max[0], this.max[1] = this.kV[q] > this.max[1] ? this.kV[q] : this.max[1], this.max[2] = this.a30[q] > this.max[2] ? this.a30[q] : this.max[2]
	}
}

function aFY() {
	function aLP(q) {
		return void 0 !== ba.cE.cF[q].aCk
	}

	function aLO(q) {
		return 1 !== q && !aLP(q) && q !== ba.aA1()
	}
	this.a7q = 21, this.bb = 0, this.bd = 0, this.bo = null, this.bi = null, this.bj = null, this.bp = null, this.cG = 0, this.yE = 0, this.bk = !1, this.bl = new aCa, this.cE = new aH8, this.a4 = function() {
		this.cE.a4()
	}, this.j = function(map, yD) {
		((map %= this.a7q) !== this.cG || aLO(this.cG) && yD !== this.yE) && (this.bk = !1, this.bl.aBM(), cU.cW(map), this.cG = map, this.yE = yD, aLO(map) && (ba.cE.cF[map].cT = yD), aLP(this.cG) ? a5p() : (map = ba.cE.cF[this.cG], this.bb =
			map.bK, this.bd = map.bL, cU.cW(map.cT), a7w.j([this.bb, this.bd, map.a12, map.a0z]), aA7(), wh.a7r(), a7w.aCj()))
	}, this.a89 = function(q) {
		return 3 === q || 7 === q || 9 === q || q === this.aA1()
	}, this.aAj = function(q) {
		return 2 === q || 7 === q || 9 === q
	}, this.a7u = function(q) {
		return 1 === q
	}, this.aA1 = function() {
		return this.a7q
	}
}

function aFZ() {
	this.hn = null;
	var aLQ, aLR = new aC7;
	this.a4 = function() {
		aLQ = 1 === ex.ey.data[0].value ? new aHH : 2 === ex.ey.data[0].value ? new aLE : 3 === ex.ey.data[0].value ? new aKi : 4 === ex.ey.data[0].value ? new aGH : 5 === ex.ey.data[0].value ? new qx : aLR;
		var q, c = aLR.hn.length,
			bQ = aLQ.hn.length;
		for (q = 0; q < c; q++) bQ === q ? (aLQ.hn.push(aLR.hn[q]), bQ++) : 0 === aLQ.hn[q].length && (aLQ.hn[q] = aLR.hn[q]);
		this.hn = aLQ.hn, ex.ey.translate()
	}, this.zA = function() {
		return navigator.language.startsWith("en") ? 0 : navigator.language.startsWith("ru") ? 1 : navigator.language.startsWith("tr") ? 2 : navigator.language.startsWith("es") ? 3 : navigator.language.startsWith("de") ? 4 : navigator.language
			.startsWith("pl") ? 5 : 0
	}, this.aKj = function(dU) {
		for (var nC, c = this.hn.length, q = 0; q < c; q++)
			if (this.hn[q].startsWith("{") && (nC = this.hn[q].replace("{" + dU + "}", "")).length < this.hn[q].length) return nC;
		return dU
	}, this.za = function(ew, aLT, np) {
		var q, fC, c, bO;
		if (!aLT) return this.hn[ew];
		for (c = aLT.length, bO = this.hn[ew], q = 0; q < c; q++)
			if (Number.isInteger(aLT[q]))
				for (fC = aLQ.qy.length - 1; 0 <= fC; fC--) bO = bO.replace("{" + (20 * (fC + 1) + q) + "}", (2 === fC ? 1 !== aLT[q] : 1 === aLT[q]) ? "" : aLQ.qy[fC]);
		if (np) {
			if (np.n2)
				for (q = 0; q < np.n2.length; q++) aLT[np.n2[q]] = a5.gN.jO(aLT[np.n2[q]]);
			if (np.a0K)
				for (q = 0; q < np.a0K.length; q++) aLT[np.a0K[q]] = a5.gN.jP(100 * aLT[np.a0K[q]], 1)
		}
		for (q = 0; q < c; q++) bO = bO.replace("{" + q + "}", aLT[q]);
		return bO
	}
}

function aFU() {
	function aA2(a2) {
		g0.cy = !0, g0.aLY(JSON.parse(a2.target.result)), g0.pG()
	}

	function aLd(bO, min, max, aLl) {
		return "string" != typeof bO || bO.length < min ? aLl : bO.length > max ? bO.substring(0, max) : bO
	}

	function aLZ(dS, min, max) {
		return dS = "number" == typeof dS ? Math.floor(dS) : min, Math.min(Math.max(dS, min), max)
	}

	function aLb(dS, z9) {
		return "boolean" == typeof dS ? dS : z9
	}

	function aLf(dS, c, max, aLn) {
		var q, gH, bQ;
		if (!Array.isArray(dS) || dS.length < 1) return null;
		for (gH = new(8 === aLn ? Uint8Array : Uint16Array)(c), bQ = dS.length, q = 0; q < c; q++) gH[q] = aLZ(dS[q % bQ], 0, max);
		return gH
	}
	this.cy = !1, this.cE = null, this.mY = function() {
		this.cy = !1, this.cE = null
	}, this.mr = function() {
		this.cE.aHg && this.cE.aLU && (this.cE.aHg[0] = a5.color.mt(ex.w.mu())), d.ms(this.cE.aLV, 0, this.aLW(), this.cE.mg, !1, !1)
	}, this.aLW = function() {
		return [{
			name: this.cE.aLX ? ex.ey.data[122].value : this.cE.a7Q[0],
			gI: [0, 0, 0],
			mv: 0
		}]
	}, this.zC = function(a9y) {
		var aA0 = new FileReader;
		aA0.onload = aA2, aA0.readAsText(a9y)
	}, this.aLY = function(fP) {
		this.cE = {}, this.cE.mo = aLZ(fP.numberPlayers, 1, 512), this.cE.aLa = aLZ(fP.modeID, 0, 1), this.cE.cG = aLZ(fP["gMap.mapID"], 0, ba.a7q - 1), this.cE.yD = aLZ(fP.seedMap, 0, 16383), this.cE.aLV = aLZ(fP.seedSpawn, 0, 16383), this.cE
			.wf = aLb(fP.selectableSpawn, !1), this.cE.aLX = aLb(fP.selectableName, !1), this.cE.aLU = aLb(fP.selectableColor, !1), ba.cE.cF[ba.aA1()].name = this.cE.aLc = aLd(fP.mapName, 1, 25, "Custom Map"), this.cE.zS = function(dS) {
				var q, c;
				if (!Array.isArray(dS) || dS.length < 1) return [];
				for (c = dS.length, q = 0; q < c; q++) dS[q] = aLd(dS[q], 0, 100, "");
				return dS
			}(fP.description), this.cE.aD0 = aLf(fP.playerX, this.cE.mo, 4096, 16), this.cE.aD8 = aLf(fP.playerY, this.cE.mo, 4096, 16), this.cE.g1 = aLf(fP.playerTeam, this.cE.mo, 8, 8), this.cE.k8 = aLf(fP.playerStrength, this.cE.mo, 5, 8),
			this.cE.aHg = function(dS, c) {
				var q, gH, bQ;
				if (!Array.isArray(dS) || dS.length < 1) return null;
				for (gH = new Array(c), bQ = dS.length, q = 0; q < c; q++) gH[q] = aLf(dS[q % bQ], 3, 63, 8);
				return gH
			}(fP.playerColor, this.cE.mo), this.cE.a7Q = function(dS, c) {
				var q, gH, bQ;
				if (!Array.isArray(dS) || dS.length < 1) return null;
				for (gH = new Array(c), bQ = dS.length, q = 0; q < c; q++) gH[q] = aLd(dS[q % bQ], 3, 26, "Bot");
				return gH
			}(fP.playerName, this.cE.mo), this.cE.aLi = "string" == typeof fP.mapBase64 ? fP.mapBase64 : "", this.cE.aLX = this.cE.aLX || !this.cE.a7Q, this.cE.mg = 0 === this.cE.aLa ? 7 : 2 === this.cE.aLa ? 9 : 6, this.cE.aD0 = this.cE.aD8 ?
			this.cE.aD0 : null
	}, this.pG = function() {
		! function(bO) {
			var j6, oM, aLk = "data:image/png;base64,";
			if (bO.length <= aLk.length) return;
			g0.cE.cG = 0, g0.cE.yD = 0, ba.j(0, 0), bO.substring(0, aLk.length) !== aLk && (bO = aLk + bO);
			return (j6 = new Image).onload = function() {
				ba.bb = j6.width, ba.bd = j6.height, 4096 < ba.bb || 4096 < ba.bd || ba.bb < 10 || ba.bd < 10 ? (ba.j(0, 0), alert("Image w & h must be between 10 and 4096.")) : (ba.cG = ba.aA1(), ba.yE = 0, ba.bo.width = ba.bb, ba.bo
					.height = ba.bd, ba.bi.drawImage(j6, 0, 0), oM = ba.bi.getImageData(0, 0, ba.bb, ba.bd), ba.bp = oM.data)
			}, j6.src = bO, g0.cE.aLi = "", 1
		}(this.cE.aLi) && ba.j(this.cE.cG, this.cE.yD)
	}, this.aLo = function() {
		for (var max = 0, c = this.cE.mo, q = 0; q < c; q++) this.cE.g1[q] > max && (max = this.cE.g1[q]);
		return Math.max(0, max - 1)
	}
}

function aFL() {
	var aLp, aLq, a0c, a0d, a0e, aLr, aLs, aLt;

	function aLu(q) {
		var gT;
		for (a0c--, gT = q; gT < a0c; gT++) a0d[gT] = a0d[gT + 1], a0e[gT] = a0e[gT + 1], aLr[gT] = aLr[gT + 1], aLs[gT] = aLs[gT + 1], aLt[gT] = aLt[gT + 1]
	}
	this.a4 = function() {
		aLp = 1, a0c = 0, aLq = 2 * d.b4, a0d = new Uint16Array(aLq), a0e = new Uint8Array(aLq), aLr = new Uint16Array(aLq), aLs = new Uint32Array(aLq), aLt = new Uint32Array(aLq)
	}, this.a6A = function(ew, position) {
		aLs[ew] = position
	}, this.cf = function() {
		for (var q = a0c - 1; 0 <= q; q--) 0 == a0e[q]-- && (a0e[q] = 2, aFC.cf(q, aLr[q], a0d[q], aLs[q], aLt[q]))
	}, this.uL = function(player, id) {
		for (var q = a0c - 1; 0 <= q; q--)
			if (player === a0d[q] && id === aLr[q]) return void aLu(q)
	}, this.aGt = function(player) {
		for (var q = a0c - 1; 0 <= q; q--) player === a0d[q] && (aFC.a65(player, aLs[q]), aLu(q))
	}, this.q1 = function(player, qD, aLv) {
		if (aLq <= a0c) return 0;
		a0d[a0c] = player, a0e[a0c] = 0, aLr[a0c] = aLp, aLs[a0c] = qD, aLt[a0c] = aLv;
		player = aLp;
		return a0c++, aLp = 2 * aLq < ++aLp ? 1 : aLp, player
	}, this.e1 = function() {
		if (!(iJ < 40 || 0 === a0c)) {
			var gT, c6, c7, q, fontSize, aKG, gd, kM = iK / iJ,
				kN = iL / iJ,
				kO = (dl.bK + iK) / iJ,
				kP = (dl.bL + iL) / iJ;
			for (a5.a6.textAlign(e2, 1), a5.a6.textBaseline(e2, 1), gT = a0c - 1; 0 <= gT; gT--) c6 = ol.iX(aLs[gT]), c7 = ol.iY(aLs[gT]), q = a0d[gT], kM - 1 < c6 && c6 < kO && kN - 1 < c7 && c7 < kP && 0 !== p.eA[q] && ((fontSize = Math.floor(
				.94 * iJ * bA.aKB(q))) < 6 || (c6 = Math.floor(dl.bK * (c6 + .5 - kM) / (kO - kM)), c7 = Math.floor(dl.bL * (c7 + .48 - kN) / (kP - kN)), e2.font = a5.a6.jD(1, fontSize), e2.fillStyle = f3.fn, gd = aU.uF(q, aU.xA(q, aLr[
				gT])), e2.fillText(ex.ey.data[7].value ? a5.gN.jO(gd) : p.zj[q], c6, c7), (aKG = Math.floor(.5 * fontSize)) < 6) || (e2.font = a5.a6.jD(1, aKG), e2.fillText(ex.ey.data[7].value ? p.zj[q] : a5.gN.jO(gd), c6, c7 + Math
				.floor(.82 * fontSize))))
		}
	}
}

function aFM() {
	var hn, n8, kq, bK, bL, font;

	function aLz(a1t) {
		return a1t < 10 ? "0" + a1t : String(a1t)
	}
	this.a4 = function() {
		void 0 === bK && this.resize(), this.setTime()
	}, this.resize = function() {
		bK = Math.floor((di.dj.dk() ? .53 : .36) * dl.dm), bL = Math.floor(.065 * bK), font = a5.a6.jD(1, Math.floor(.9 * bL)), kq--, this.setTime()
	}, this.cf = function() {
		this.setTime() && (bm.bn = !0)
	}, this.setTime = function() {
		var hh = new Date,
			a0q = hh.getUTCMinutes(),
			hh = hh.getUTCSeconds();
		return n8 = 3600 - 60 * a0q - hh, n8 %= 900, hn = "Next Contest: " + aLz(Math.floor(n8 / 60)) + ":" + aLz(n8 % 60), kq !== (kq = 60 * a0q + hh) && (bK = oS.measureText(hn, font), bK += Math.floor(.4 * bL), !0)
	}, this.e1 = function() {
		e2.lineWidth = 1 + Math.floor(bL / 15), 7 === cv.cw() && w3.aBA() + 2 * dq.gap > .5 * (dl.bL - bK) ? e2.translate(dl.bK - bL, Math.floor(w3.aBA() + 2 * dq.gap + bK)) : e2.translate(dl.bK - bL, Math.floor(.5 * (dl.bL + bK))), e2.rotate(-
			Math.PI / 2), e2.fillStyle = f3.f9, e2.fillRect(0, 0, bK, bL), e2.strokeStyle = f3.fn, e2.strokeRect(0, 0, bK, bL + 10), e2.fillStyle = f3.fn, e2.font = font, a5.a6.textBaseline(e2, 1), a5.a6.textAlign(e2, 1), e2.fillText(hn, Math
			.floor(bK / 2), Math.floor(.59 * bL)), e2.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function a2l() {
	this.sB = null, this.ap = 512, this.ar = 8, this.ao = 0, this.aLp = 0, this.p1 = new Uint16Array(this.ap), this.a4V = new Uint32Array(this.ap), this.a4W = new Uint32Array(this.ap), this.p0 = new Uint32Array(this.ap), this.a4X = new Uint16Array(
			this.ap), this.p2 = new Uint32Array(this.ap), this.a4T = new Uint16Array(this.ap), this.v6 = new Uint16Array(this.ap), this.a4Y = new Uint8Array(this.ap), this.aq = new Uint8Array(d.b4), this.a4N = new Uint16Array(this.ar * d.b4), this
		.a4 = function() {
			this.aLp = 0, this.ao = 0, this.sB = new Uint8Array(ba.bb + ba.bd), this.aq.fill(0)
		}, this.aw = function(player) {
			var c = this.ao,
				ro = aE.rl(aW.pD[0]),
				tz = this.aq[player],
				u0 = (player << 3) + tz;
			p.eA[player] = 2, this.p1[c] = u0, this.a4V[c] = ro, this.p0[c] = ro, this.a4W[c] = aE.rl(aW.pD[1]), this.a4X[c] = 0, this.p2[c] = aW.pz[0], this.a4T[c] = an.a2m.aw(c, aE.a4a(ro)), this.v6[c] = this.aLp, this.a4Y[c] = aW.pD[2], this.aLp =
				this.aLp + 1 & 1023, this.a4N[u0] = c, this.aq[player] = tz + 1, this.ao++
		}, this.ax = function() {
			var aE3 = aW.pD[3];
			this.a4V[aE3] = this.p0[aE3], this.a4W[aE3] = aE.rl(aW.pD[1]), this.a4X[aE3] = 0, this.a4Y[aE3] = aW.pD[2]
		}, this.cf = function() {
			if (bm.h4() % 5 == 3) {
				an.a2o.cf(), ! function(jY) {
					var q, rp, aM3, aM4, aM5, ro, aM9, aMA, bs, nC, a4V = jY.a4V,
						a4W = jY.a4W,
						p0 = jY.p0,
						p2 = jY.p2,
						a4X = jY.a4X,
						a4T = jY.a4T,
						jY = jY.ao,
						p8 = ba.bb << 4;
					for (q = jY - 1; 0 <= q; q--) aM3 = p0[q], rp = a4W[q], aM3 !== rp && (ro = a4V[q], aM9 = rp % p8 - (aM5 = ro % p8), aMA = ~~((rp + .5) / p8) - (ro = ~~((ro + .5) / p8)), bs = ~~Math.sqrt(aM9 * aM9 + aMA * aMA + .5), nC =
						4e5 + 2e4 * ~~Math.sqrt(.5 + (Math.sqrt(p2[q] + .5) << 4)), 65535 <= (nC = a4X[q] + Math.max(~~((.5 + nC) / bs), 1)) ? p0[q] = aM4 = rp : (a4X[q] = nC, p0[q] = aM4 = aM5 + b8.dE(nC * aM9, 65536) + p8 * (ro + b8.dE(nC *
							aMA, 65536))), a4T[q] = an.a2m.a5e(a4T[q], aM3, aM4))
				}(this), ! function(jY) {
					var q, c8, bQ, fC, dU, aMC, lb, aMD, c1, it, kM, kN, aME, aE5, aMF, c2, ro, aMI, c = jY.ao,
						p0 = jY.p0,
						p1 = jY.p1,
						p2 = jY.p2,
						a2m = an.a2m.a2m,
						aAP = a2m.length,
						a5a = an.a2m.a5a,
						p8 = ba.bb << 4,
						aMJ = d.ag,
						aMK = u.t,
						nC = (c - 1) * (bm.h4() % 2);
					for (q = 0; q < c; q++) {
						for (c8 = Math.abs(q - nC), ro = p0[c8], bQ = aE.a4a(ro), c1 = p1[c8] >> 3, kM = ro % p8, kN = ~~((ro + .5) / p8), ro = p2[c8], aMI = 80 + ~~Math.sqrt(.5 + (Math.sqrt(ro + .5) << 8)), aE5 = Math.min(aMI * aMI, 262144),
							aMF = -1, fC = 0; fC < 9; fC++)
							if (!((aMC = bQ + a5a[fC]) < 0 || aAP <= aMC))
								for (aMD = a2m[aMC], lb = aMD.length, dU = 0; dU < lb; dU++) aME = aMD[dU], c2 = p1[aME] >> 3, c1 == c2 || aMJ && aMK[c1] === aMK[c2] || (c2 = p0[aME], (c2 = (it = kM - c2 % p8) * it + (it = kN - ~~((c2 + .5) /
									p8)) * it) < aE5 && (aMF = aME, aE5 = c2)); - 1 !== aMF && (ro = Math.min(Math.max(1, b8.dE(ro * (aMI - Math.floor(Math.sqrt(aE5 + .5))), 5 * aMI)), p2[aMF]), p2[c8] -= ro >> 4, p2[aMF] -= ro)
					}
				}(this);
				var q, gd, p2 = (jY = this).p2,
					jY = jY.ao;
				for (q = jY - 1; 0 <= q; q--) gd = p2[q], 0 < (gd -= Math.max(1, gd >> 7)) ? p2[q] = gd : an.a2i.a4O(q)
			}
		}
}
self.aiCommand746 = function(dS) {
	0 === dS ? aFG() : 1 !== dS || 1 !== di.id || di.hW < 14 || oU.vz()
}, setTimeout(aFG, 1e4), window.onload = function() {
	aFG()
};