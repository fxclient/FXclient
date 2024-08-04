function a() {
	2 === b.c ? d([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === b.c ? d([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === b.c ? d([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === b.c && d([512], [512], [0,
		70, 180, 200, 290, 420, 512
	], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function d(e, f, g, h, i) {
	for (var k, l, q, r, t, u, m = e.length - 1, n = b.o + b.p, s = (n *= n, g.length), j = s - 1; 0 <= j; j--) g[j] *= g[j];
	var v = new Array(s),
		w = new Array(s),
		x = new Array(s),
		y = z.a0();
	if (void 0 === i)
		for (i = new Array(s), j = s - 1; 0 <= j; j--) i[j] = 0;
	for (j = 1; j < s; j++) v[j] = g[j] - g[j - 1], w[j] = h[j] - h[j - 1], x[j] = i[j] - i[j - 1];
	for (k = b.o - 1; 0 <= k; k--)
		for (l = b.p - 1; 0 <= l; l--) {
			for (q = n, j = m; 0 <= j; j--) q = (r = (k - e[j]) * (k - e[j]) + (l - f[j]) * (l - f[j])) < q ? r : q;
			for (t = h[s - 1], u = i[s - 1], j = 1; j < s; j++)
				if (q < g[j]) {
					t = h[j - 1] + a1((q - g[j - 1]) * w[j], v[j]), u = i[j - 1] + a1((q - g[j - 1]) * x[j], v[j]);
					break
				} a2(b.o * l + k, t, u, y)
		}
}

function a2(a3, t, u, y) {
	t < 500 ? y[a3] = a4(y[a3] * t * 2, 1e3) : 500 < t && (y[a3] += a4(2 * (1e4 - y[a3]) * (t - 500), 1e3)), y[a3] += a4(u * (10 * t - y[a3]), 1e3)
}

function a5(title, a6, backgroundColor, a7) {
	var aA, self, a8 = document.createElement("button");

	function aG() {
		if (!1 !== a7) {
			var aK = aL.color.aM(aA);
			if (0 < aK[0] && aK[0] < 255 && aK[0] === aK[1] && aK[0] === aK[2]) return
		}
		this.style.backgroundColor = aL.color.aG(aA, 50)
	}

	function aI() {
		this.style.backgroundColor = aA
	}

	function aH() {
		this.style.backgroundColor = aA, this.blur()
	}
	this.button = a8, this.a9 = a6, this.aE = function(aJ) {
			aA = aJ, a8.style.backgroundColor = aJ
		}, self = this, a8.innerHTML = title, a8.style.color = aC.aD, a8.style.userSelect = "none", a8.style.outline = "none", a8.style.overflowWrap = "break-word", self.aE(backgroundColor || aC.aF), a8.style.border = "none", a8.style.font =
		"inherit", a8.style.fontSize = "1em", a8.style.padding = "0em 0.3em", a8.onclick = a6, a8.addEventListener("mouseover", aG), a8.addEventListener("mouseout", aH), a8.addEventListener("focus", aG), a8.addEventListener("blur", aI)
}

function aN(aO, title, a9) {
	function click() {
		var value = 1 - aO.value;
		this.textContent = (value ? "🟢 " : "⚪ ") + title, aS.aT.aU(aO.a3, value), a9(value)
	}
	var aR;
	title = title || aP.aQ[121], a9 = a9 || function() {}, this.aR = document.createElement("p"), (aR = this.aR).textContent = (aO.value ? "🟢 " : "⚪ ") + title, aR.style.margin = "0", aR.style.marginBottom = "0.5em", aR.style.cursor = "pointer", aR
		.addEventListener("click", click)
}

function aV(aW, aX, aY) {
	this.k = 0, this.l = 0, this.aZ = 0, this.aa = 0, this.resize = function() {
		this.aa = Math.min(aL.ab.ac(aY || .5) * aW[1] * ad.ae, ad.aa - 2 * af.gap), this.aZ = Math.min(this.aa * (aW[0] / aW[1]), ad.aZ - 2 * af.gap), this.aa = aW[1] * this.aZ / aW[0], this.k = af.gap + aX[0] * (ad.aZ - this.aZ - 2 * af.gap),
			this.l = af.gap + aX[1] * (ad.aa - this.aa - 2 * af.gap)
	}, this.ag = function() {
		return this.k + .5 * this.aZ
	}
}

function ah() {
	this.aU = function(a3, value) {
		aS.ai.data[a3].value !== value && (aS.ai.aj(a3, value), 0 === a3 ? (ak.al(), aP.aB(), ak.am(2)) : 1 === a3 ? ad.an(1) : 2 === a3 ? ad.an(0) : 5 === a3 && (aL.ab.ao(), ad.an(0)))
	}, this.ap = function() {
		for (var data = aS.ai.data, j = 0; j < 100; j++) data[j] && aS.ai.aj(j, data[j].aq);
		aL.ab.ao(), ad.an(1), aP.aB()
	}, this.ar = function() {
		for (var data = aS.ai.data, j = 0; j < data.length; j++) data[j] && aS.ai.aU(j, data[j].aq)
	}
}

function at() {
	this.au = function(av, player) {
		aw.ax(ay.az, player, av), b0.b1.b2(av, player)
	}, this.b3 = function(player) {
		aw.b4(player, 0), b0.b1.b5(player)
	}, this.b6 = function(b7, player) {
		aw.b8(b7, player), b0.b1.b9(b7, player)
	}, this.bA = function() {
		ay.bB || ay.bC || b0.bD.bA()
	}
}

function bE() {
	this.bF = function(bG) {
		var id, bH, bI;
		for (bJ.aB(bG), bJ.a3 += 2, bI = 8 * bJ.size; bJ.a3 + 8 <= bI;) id = bJ.bK(4), bH = bJ.bK(9), 0 === id ? this.bL(id, bH, bJ.bK(22)) : 1 === id ? this.bL(id, bH, bJ.bK(10), bJ.bK(10)) : 2 === id ? this.bL(id, bH, bJ.bK(10), bJ.bK(9)) :
			3 === id || 4 === id ? this.bL(id, bH, bJ.bK(10), bJ.bK(22)) : 5 === id || 6 === id ? this.bL(id, bH, bJ.bK(10)) : 7 === id ? this.bL(id, bH, bJ.bK(1)) : this.bL(id, bH);
		this.bM()
	}, this.bN = [], this.bM = function() {
		for (var bP = 0, bQ = 0, bR = 0, bS = 0, bT = 0, bU = 0, j = 0; j < 512; j++) bP += bV.bW[j], bQ += bV.bX[j], bR += bV.bY[j], bS += bZ.ba.bb[j];
		bT += bZ.ba.bc, bU += bd, this.bN.push(((255 & bP + bQ + bR + bS + bT + bU) << 12) + ((3 & bP) << 10) + ((3 & bQ) << 8) + ((3 & bR) << 6) + ((3 & bS) << 4) + ((3 & bT) << 2) + (3 & bU))
	}, this.bL = function(id, bH, be, bf) {
		0 === id ? bg.bh.bi(bH, be) : 1 === id ? bg.bh.bj(bH, be, bf) : 2 === id ? bg.bh.bk(bH, be, bf) : 3 === id ? bg.bh.bl(bH, be, bf) : 4 === id ? bg.bh.bm(bH, be, bf) : 5 === id ? bg.bh.bn(bH, be) : 6 === id ? bg.bh.bo(bH, be) : 7 === id ?
			bg.bh.bp(bH, be) : 8 === id ? bg.bh.bq(bH) : bg.bh.br(bH)
	}
}

function bs() {
	var aQ, bt, bu, aZ, aa, font;

	function c6(c8) {
		return c8 < 10 ? "0" + c8 : String(c8)
	}
	this.aB = function() {
		void 0 === aZ && this.resize(), this.setTime()
	}, this.resize = function() {
		aZ = Math.floor((bw.bx.by() ? .53 : .36) * ad.ae), aa = Math.floor(.065 * aZ), font = aL.ab.bz(1, Math.floor(.9 * aa)), bu--, this.setTime()
	}, this.bF = function() {
		this.setTime() && (c0.c1 = !0)
	}, this.setTime = function() {
		var c3 = new Date,
			c4 = c3.getUTCMinutes(),
			c3 = c3.getUTCSeconds();
		return bt = 3600 - 60 * c4 - c3, bt %= 900, aQ = "Next Contest: " + c6(Math.floor(bt / 60)) + ":" + c6(bt % 60), bu !== (bu = 60 * c4 + c3) && (aZ = c7.measureText(aQ, font), aZ += Math.floor(.4 * aa), !0)
	}, this.c9 = function() {
		cA.lineWidth = 1 + Math.floor(aa / 15), 7 === cB.cC() && cD.cE() + 2 * af.gap > .5 * (ad.aa - aZ) ? cA.translate(ad.aZ - aa, Math.floor(cD.cE() + 2 * af.gap + aZ)) : cA.translate(ad.aZ - aa, Math.floor(.5 * (ad.aa + aZ))), cA.rotate(-Math
			.PI / 2), cA.fillStyle = aC.aD, cA.fillRect(0, 0, aZ, aa), cA.strokeStyle = aC.cF, cA.strokeRect(0, 0, aZ, aa + 10), cA.fillStyle = aC.cF, cA.font = font, aL.ab.textBaseline(cA, 1), aL.ab.textAlign(cA, 1), cA.fillText(aQ, Math
			.floor(aZ / 2), Math.floor(.59 * aa)), cA.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cG() {
	this.cH = null, this.cI = 512, this.cJ = 8, this.bc = 0, this.cK = 0, this.cL = new Uint16Array(this.cI), this.cM = new Uint32Array(this.cI), this.cN = new Uint32Array(this.cI), this.cO = new Uint32Array(this.cI), this.cP = new Uint16Array(this
			.cI), this.cQ = new Uint32Array(this.cI), this.cR = new Uint16Array(this.cI), this.cS = new Uint16Array(this.cI), this.cT = new Uint8Array(this.cI), this.bb = new Uint8Array(ay.cU), this.cV = new Uint16Array(this.cJ * ay.cU), this.aB =
		function() {
			this.cK = 0, this.bc = 0, this.cH = new Uint8Array(b.o + b.p), this.bb.fill(0)
		}, this.cW = function(player) {
			var s = this.bc,
				cX = cY.cZ(ca.cb[0]),
				cc = this.bb[player],
				cd = (player << 3) + cc;
			bV.bW[player] = 2, this.cL[s] = cd, this.cM[s] = cX, this.cO[s] = cX, this.cN[s] = cY.cZ(ca.cb[1]), this.cP[s] = 0, this.cQ[s] = ca.ce[0], this.cR[s] = bZ.cf.cW(s, cY.cg(cX)), this.cS[s] = this.cK, this.cT[s] = ca.cb[2], this.cK = this
				.cK + 1 & 1023, this.cV[cd] = s, this.bb[player] = cc + 1, this.bc++
		}, this.bm = function() {
			var ch = ca.cb[3];
			this.cM[ch] = this.cO[ch], this.cN[ch] = cY.cZ(ca.cb[1]), this.cP[ch] = 0, this.cT[ch] = ca.cb[2]
		}, this.bF = function() {
			if (c0.ci() % 5 == 3) {
				bZ.cj.bF(), ! function(cn) {
					var j, cr, cs, ct, cu, cX, cy, cz, d0, d2, cM = cn.cM,
						cN = cn.cN,
						cO = cn.cO,
						cQ = cn.cQ,
						cP = cn.cP,
						cR = cn.cR,
						cn = cn.bc,
						d3 = b.o << 4;
					for (j = cn - 1; 0 <= j; j--) cs = cO[j], cr = cN[j], cs !== cr && (cX = cM[j], cy = cr % d3 - (cu = cX % d3), cz = ~~((cr + .5) / d3) - (cX = ~~((cX + .5) / d3)), d0 = ~~Math.sqrt(cy * cy + cz * cz + .5), d2 = 4e5 + 2e4 * ~~
						Math.sqrt(.5 + (Math.sqrt(cQ[j] + .5) << 4)), 65535 <= (d2 = cP[j] + Math.max(~~((.5 + d2) / d0), 1)) ? cO[j] = ct = cr : (cP[j] = d2, cO[j] = ct = cu + d4.d5(d2 * cy, 65536) + d3 * (cX + d4.d5(d2 * cz, 65536))), cR[
						j] = bZ.cf.d6(cR[j], cs, ct))
				}(this), ! function(cn) {
					var j, d7, d8, d9, aJ, dA, dB, dC, dD, dF, dH, dI, dJ, dK, dL, dE, cX, dP, s = cn.bc,
						cO = cn.cO,
						cL = cn.cL,
						cQ = cn.cQ,
						cf = bZ.cf.cf,
						dQ = cf.length,
						dR = bZ.cf.dR,
						d3 = b.o << 4,
						dS = ay.dT,
						dU = dV.dW,
						d2 = (s - 1) * (c0.ci() % 2);
					for (j = 0; j < s; j++) {
						for (d7 = Math.abs(j - d2), cX = cO[d7], d8 = cY.cg(cX), dD = cL[d7] >> 3, dH = cX % d3, dI = ~~((cX + .5) / d3), cX = cQ[d7], dP = 80 + ~~Math.sqrt(.5 + (Math.sqrt(cX + .5) << 8)), dK = Math.min(dP * dP, 262144), dL = -1,
							d9 = 0; d9 < 9; d9++)
							if (!((dA = d8 + dR[d9]) < 0 || dQ <= dA))
								for (dC = cf[dA], dB = dC.length, aJ = 0; aJ < dB; aJ++) dJ = dC[aJ], dE = cL[dJ] >> 3, dD == dE || dS && dU[dD] === dU[dE] || (dE = cO[dJ], (dE = (dF = dH - dE % d3) * dF + (dF = dI - ~~((dE + .5) / d3)) * dF) <
									dK && (dL = dJ, dK = dE)); - 1 !== dL && (cX = Math.min(Math.max(1, d4.d5(cX * (dP - Math.floor(Math.sqrt(dK + .5))), 5 * dP)), cQ[dL]), cQ[d7] -= cX >> 4, cQ[dL] -= cX)
					}
				}(this);
				var j, co, cQ = (cn = this).cQ,
					cn = cn.bc;
				for (j = cn - 1; 0 <= j; j--) co = cQ[j], 0 < (co -= Math.max(1, co >> 7)) ? cQ[j] = co : bZ.cp.cq(j)
			}
		}
}

function dX() {
	this.cU = 512, this.dY = 15e8, this.dZ = 1e9, this.da = 512, this.db = 2, this.az = 0, this.dc = 0, this.dd = 0, this.de = 0, this.df = 0, this.dg = 512, this.dh = 150, this.bB = !0, this.bC = !1, this.di = 0, this.dj = 0, this.dk = !1, this
		.dl = !1, this.dm = !1, this.dT = !1, this.dn = 0, this.dp = 0, this.dq = !1, this.dr = null, this.ds = null, this.dt = 30, this.du = 0, this.dv = 0, this.dw = 0, this.dx = function(dy, dz, e0, e1, e2, e3) {
			this.dk = !1, this.bC = e3, this.dp = e1, this.dq = e2, this.dT = this.dp < 7 || 9 === this.dp, this.dd = this.dc = e0.length, this.bB = 1 === this.dd, this.dp = 10 === this.dp && this.bB ? 7 : this.dp, this.dp = 8 === this.dp && 2 !==
				this.dc ? 7 : this.dp, this.dn = 9 === this.dp ? 2 : this.dp + 2, this.dt = this.dc <= 2 ? 30 : this.dc <= 50 ? 40 : 50, e4.e5 && !e4.e6.e7 ? this.dm = this.dl = !1 : this.dm = this.dl = this.dT || this.dc < 100, this.dr = this.dl ?
				new e8 : null, 1 === e9 ? this.dg = this.dc : this.bB ? this.dg = eA.eB() : this.dg = this.cU, this.de = this.dg - this.dc, this.df = 0, this.az = dz, this.du = 0, this.dv = 0, this.dw = 0, eC.eD(dy), eE.aB(), bV.aB(e0), bg.eF
			.bN = [], dV.aB(e0), this.di = 1, eG.aB(), eH(), eI.eJ(), eK.aB(), eL.aB(), eM(), eN.aB(e0), eO.aB(), cY.aB(), bZ.aB(), eP.aB(), eQ.eR(), eS.aB(), eT(), eU.aB(dy, e0, e1, e2), eV.aB(), eW.aB(), eX.aB(), eY.aB(), eZ.putImageData(ea, 0, 0),
				eb.aB(), ec.aB(), ed.aB(), ee.aB(), ef.aB(), eg.aB(), eh.aB(), ei.aB(), c7.aB(), aw.aB(), ej.aB(), ek.aB(), el.aB(), em.aB(), en.aB(), eo.aB(), ep(), eq.aB(), er.aB(), es.aB(), et.aB(), eu.aB(), ev.aB(), 8 === this.dp ? (this.ds =
					new ew, this.ds.aB(e0)) : this.ds = null, c0.ex(), f0.f1(), 0 === bV.bW[ay.az] && el.show(!1, !0), er.f2(!0), ez.aB(), c0.c1 = !0, this.bC || this.bB && this.dl || bw.bx.setState(1)
		}, this.f3 = function(f4) {
			b0.ba.f5(), this.di = 0, c0.f6(), bw.bx.setState(0), f4 || f7.f8.show(), cB.setState(0), ak.am(5, 5)
		}, this.f9 = function() {
			return this.bC ? ei.fA || !ee.fB : this.bB && (ei.fA || this.dl)
		}, this.fC = function() {
			return 1 === this.di && !this.dl
		}
}

function fD() {
	this.aZ = 0, this.aa = 0, this.fE = 0, this.fF = 0, this.fG = 0, this.fH = 0, this.fI = 0, this.fJ = 0, this.fK = 0, this.fL = 0, this.fM = 0, this.fN = 0, this.fO = 0, this.a3 = 0, this.fP = ["Territory", "Balance", "Interest", "Numbers"], this
		.fQ = !1, this.fR = -1, this.fS = !1, this.fT = [0, 0], this.aB = function() {
			this.fQ = !1, this.fR = -1, this.fS = !1, this.resize()
		}, this.resize = function() {
			this.aZ = ad.aZ < 1.369 * ad.aa ? ad.aZ : 1.369 * ad.aa;
			var d0 = bw.bx.by() && ad.aZ < ad.aa ? 1 : bw.bx.by() ? .8 : ad.aZ < ad.aa ? .65 : .59;
			this.aZ = Math.floor(d0 * this.aZ), this.aZ -= bw.bx.by() && ad.aZ < ad.aa ? 2 * af.gap + 2 : 0, this.aa = Math.floor(this.aZ / 1.369), this.fO = Math.floor(this.aa / 150), this.fO = Math.max(this.fO, 1.5), this.fE = Math.floor(1 + .02 *
					this.aZ), this.fF = Math.floor(1 + .04 * this.aZ), this.fI = this.fF, this.fJ = Math.floor(1 + .075 * this.aZ), this.fL = Math.floor(1 + .1125 * this.aZ), this.fM = Math.floor(this.aZ * (bw.bx.by() ? .03 : .029)), this.fM = Math
				.max(this.fM, 4), this.fN = Math.floor(.035 * this.aZ), this.fN = Math.max(this.fN, 4), this.fK = this.aa - 2 * this.fI - this.fJ - this.fL, this.fQ && this.fV()
		}, this.fW = function(fX, fY) {
			var fa, fZ;
			return !!this.fQ && (fZ = fX, fa = fY, fX -= a4(ad.aZ - this.aZ, 2), fY -= a4(ad.aa - this.aa, 2), fX < 0 || fY < 0 || fX >= this.aZ || fY >= this.aa || fX >= this.aZ - this.fL && fY < this.fL ? 1 < ei.fW(fZ, fa) || this.fb() : fY < this
				.fL || (fY < this.aa - this.fJ ? (this.fS = !0, this.fR = (fX - 2 * this.fE - this.fG) / this.fH, 3 !== this.a3 && (c0.c1 = !0)) : (fZ = (fZ = Math.floor(fX / (this.aZ / this.fP.length))) < 0 ? 0 : fZ >= this.fP.length ? this.fP
					.length - 1 : fZ) !== this.a3 && (this.a3 = fZ, this.fV(), c0.c1 = !0)), !0)
		}, this.fc = function() {
			var fd = Math.floor((this.fT[0] + fe) / ff),
				fg = Math.floor((this.fT[1] + fh) / ff);
			fd < 1 || fg < 1 || fd >= b.o - 1 || fg >= b.p - 1 || console.log(fd + " " + fg)
		}, this.fi = function(fX, fY) {
			return this.fT[0] = fX, this.fT[1] = fY, !(!this.fQ || !this.fS || (fX -= a4(ad.aZ - this.aZ, 2), fY = this.fR, this.fR = (fX - 2 * this.fE - this.fG) / this.fH, (0 <= this.fR && this.fR <= 1 || 0 <= fY && fY <= 1) && (c0.c1 = !0), 0))
		}, this.fj = function() {
			this.fS && (this.fS = !1)
		}, this.fk = function() {
			this.fQ ? this.fb() : this.show()
		}, this.show = function() {
			eG.fl < 2 || (this.fQ = !0, this.fV())
		}, this.fb = function() {
			this.fQ = !1, this.fR = -1, c0.c1 = !0
		}, this.fV = function() {
			this.a3 < 2 ? this.fG = c7.measureText(aL.fm.fn(eG.max[this.a3]), aL.ab.bz(0, this.fM)) : 2 === this.a3 && (this.fG = c7.measureText(aL.fm.fo(6, 2), aL.ab.bz(0, this.fM))), this.fH = this.aZ - 2 * this.fE - this.fG - this.fF
		}, this.fp = function() {
			this.fQ && this.fV()
		}, this.c9 = function() {
			this.fQ && this.fq()
		}, this.fq = function() {
			var k = a4(ad.aZ - this.aZ, 2),
				l = a4(ad.aa - this.aa, 2);
			cA.setTransform(1, 0, 0, 1, k, l), cA.fillStyle = aC.fr, cA.fillRect(0, this.fL, this.aZ, this.aa - this.fL), this.fs(), this.ft(), cA.strokeRect(0, 0, this.aZ, this.aa), aL.ab.textAlign(cA, 2), cA.font = aL.ab.bz(0, this.fM), 0 === this
				.a3 ? this.fu(eG.fv, k, l) : 1 === this.a3 ? this.fu(eG.fw, k, l) : 2 === this.a3 ? this.fx(k, l) : 3 === this.a3 && (this.fy(k, l), this.fz(k, l)), ei.g0(Math.floor(k + this.aZ - .725 * this.fL), Math.floor(l + .275 * this.fL), Math
					.floor(.45 * this.fL)), cA.setTransform(1, 0, 0, 1, 0, 0)
		}, this.fs = function() {
			var j, c3;
			for (cA.lineWidth = this.fO, aL.ab.textBaseline(cA, 1), aL.ab.textAlign(cA, 1), cA.strokeStyle = aC.aD, cA.font = aL.ab.bz(1, this.fN), c3 = this.aZ / this.fP.length, cA.fillStyle = aC.g1, cA.fillRect(this.a3 * c3, this.aa - this.fJ, c3,
					this.fJ), cA.fillStyle = aC.aD, cA.fillRect(0, this.aa - this.fJ - .5 * this.fO, this.aZ, this.fO), j = 1; j <= 3; j++) cA.fillRect(j * c3, this.aa - this.fJ, this.fO, this.fJ);
			for (j = this.fP.length - 1; 0 <= j; j--) cA.fillText(this.fP[j], (j + .5) * c3, this.aa - .46 * this.fJ)
		}, this.ft = function() {
			cA.fillStyle = aC.g2, cA.fillRect(0, 0, this.aZ, this.fL), cA.fillStyle = aC.aD, cA.fillRect(0, this.fL - .5 * this.fO, this.aZ, this.fO), cA.font = aL.ab.bz(1, .39 * this.fL), cA.fillText("Statistics", Math.floor(this.aZ / 2), Math
				.floor(.55 * this.fL))
		}, this.fu = function(g3, k, l) {
			var d8 = eG.max[this.a3],
				t = (cA.setTransform(1, 0, 0, 1, k + 2 * this.fE + this.fG, l + this.fI + this.fL), cA.lineWidth = 2, this.fK / Math.sqrt(d8));
			cA.beginPath(), cA.moveTo(this.fH, this.fK - t * Math.sqrt(g3[eG.fl - 1]));
			for (var j = eG.fl - 2; 0 <= j; j--) cA.lineTo(j * this.fH / (eG.fl - 1), this.fK - t * Math.sqrt(g3[j]));
			cA.stroke();
			k = this.g0(g3, t, .5);
			k < .95 && cA.fillText(aL.fm.fn(d8), -this.fE, 0), .05 < Math.abs(k - .5) && cA.fillText(aL.fm.fn(Math.floor(d8 / 4)), -this.fE, Math.floor(this.fK / 2)), .05 < k && cA.fillText("0", -this.fE, this.fK)
		}, this.fx = function(k, l) {
			cA.setTransform(1, 0, 0, 1, k + 2 * this.fE + this.fG, l + this.fI + this.fL), cA.lineWidth = 2;
			var t = this.fK / Math.max(eG.max[this.a3], 1);
			cA.beginPath(), cA.moveTo(this.fH, this.fK - t * eG.g5[eG.fl - 1]);
			for (var j = eG.fl - 2; 0 <= j; j--) cA.lineTo(j * this.fH / (eG.fl - 1), this.fK - t * eG.g5[j]);
			cA.stroke();
			k = this.g0(eG.g5, t, 1), l = eG.max[this.a3] / 100;
			k < .95 && cA.fillText(aL.fm.fo(l, 2), -this.fE, 0), .05 < Math.abs(k - .5) && cA.fillText(aL.fm.fo(l / 2, 2), -this.fE, Math.floor(this.fK / 2)), .05 < k && cA.fillText(aL.fm.fo(0, 2), -this.fE, this.fK)
		}, this.fy = function(k, l) {
			cA.setTransform(1, 0, 0, 1, k + .34 * this.aZ, l + 2 * this.fI + this.fL), aL.ab.textAlign(cA, 2);
			for (var g6 = this.aa - 4 * this.fI - this.fJ - this.fL, j = 7; 0 <= j; j--) cA.fillText(eG.g7[j], 0, j * g6 / 7);
			cA.setTransform(1, 0, 0, 1, k + .39 * this.aZ, l + 2 * this.fI + this.fL), aL.ab.textAlign(cA, 0);
			k = eG.g8[1];
			for (cA.fillText(aL.fm.fo(eG.g8[0] / (10 * (k < 1 ? 1 : k)), 1), 0, 0), j = 6; 1 <= j; j--) cA.fillText(eG.g8[j].toString(), 0, j * g6 / 7);
			cA.fillText(aL.fm.fo(100 * (1 - bV.bX[ay.az] / eG.g8[7]), 0), 0, g6)
		}, this.fz = function(k, l) {
			cA.setTransform(1, 0, 0, 1, k + .79 * this.aZ, l + 2 * this.fI + this.fL), aL.ab.textAlign(cA, 2);
			var j, g6 = this.aa - 4 * this.fI - this.fJ - this.fL;
			for (cA.fillStyle = aC.g9, j = 2; 0 <= j; j--) cA.fillText(eG.g7[j + 8], 0, j * g6 / 9);
			for (cA.fillStyle = aC.gA, cA.fillText(eG.g7[11], 0, 3 * g6 / 9), cA.fillStyle = aC.gB, j = 8; 4 <= j; j--) cA.fillText(eG.g7[j + 8], 0, j * g6 / 9);
			cA.fillStyle = aC.gC, cA.fillText(eG.g7[17], 0, 9 * g6 / 9), cA.fillStyle = aC.g9;
			var gD = aL.fm.fn(eG.g8[8] + eG.g8[9] + eG.g8[10] + eG.g8[11]),
				gE = cA.measureText(gD).width,
				k = (cA.setTransform(1, 0, 0, 1, k + .83 * this.aZ + gE, l + 2 * this.fI + this.fL), cA.fillText(aL.fm.fn(eG.g8[8]), 0, 0), cA.fillText(aL.fm.fn(eG.g8[9]), 0, g6 / 9), cA.fillText(aL.fm.fn(eG.g8[10]), 0, 2 * g6 / 9), cA.fillStyle = aC
					.gA, cA.fillText(gD, 0, 3 * g6 / 9), cA.fillStyle = aC.gB, eG.g8[13] - eq.gG(ay.az)),
				gE = (cA.fillText(aL.fm.fn(eG.g8[12]), 0, 4 * g6 / 9), cA.fillText(aL.fm.fn(k), 0, 5 * g6 / 9), cA.fillText(aL.fm.fn(eG.g8[14]), 0, 6 * g6 / 9), cA.fillText(aL.fm.fn(eG.g8[15]), 0, 7 * g6 / 9), cA.fillText(aL.fm.fn(eG.g8[16]), 0, 8 *
					g6 / 9), eG.g8[12] + k + eG.g8[14] + eG.g8[15] + eG.g8[16] + eG.g8[17]);
			cA.fillStyle = aC.gC, cA.fillText(aL.fm.fn(gE), 0, g6), cA.fillStyle = aC.aD
		}, this.g0 = function(g3, t, gI) {
			var j, aR, bH;
			return this.fR < 0 || 1 < this.fR ? .25 : (j = this.fR * (eG.fl - 1), bH = g3[aR = Math.floor(j)], bH += (j - aR) * (g3[aR < eG.fl - 1 ? aR + 1 : aR] - bH), cA.strokeStyle = aC.gJ, .04 < this.fR && this.gK(0, this.fK - t * Math.pow(bH,
					gI), j * this.fH / (eG.fl - 1), this.fK - t * Math.pow(bH, gI)), .04 < bH / eG.max[this.a3] && this.gK(j * this.fH / (eG.fl - 1), this.fK, j * this.fH / (eG.fl - 1), this.fK - t * Math.pow(bH, gI)), cA.fillStyle = aC.gL, cA
				.beginPath(), cA.arc(j * this.fH / (eG.fl - 1), this.fK - t * Math.pow(bH, gI), Math.max(2, .014 * this.aa), 0, 2 * Math.PI), cA.fill(), g3 = this.fR * c0.gN, g3 = 0 === bV.bW[ay.az] ? Math.floor(g3 * el.gO) : Math.floor(g3 * c0
					.ci()), cA.fillStyle = aC.aD, cA.fillText(1 === gI ? aL.fm.fo(bH / 100, 2) : aL.fm.fn(Math.floor(bH)), -this.fE, this.fK - t * Math.pow(bH, gI)), aL.ab.textAlign(cA, 1), cA.fillText(eh.gP(g3), j * this.fH / (eG.fl - 1), this
					.fK + this.fM - (bw.bx.by() ? 2 : 0) - this.fO), aL.ab.textAlign(cA, 2), t * Math.pow(bH, gI) / this.fK)
		}, this.gK = function(dH, dI, gQ, gR) {
			cA.beginPath(), cA.moveTo(dH, dI), cA.lineTo(gQ, gR), cA.stroke()
		}
}

function gS() {
	var input;

	function gT(aR) {
		gW(aR.target.files)
	}

	function gW(files) {
		files && 0 < files.length && gX.gY(files[0])
	}

	function gf(aR) {
		var aJ = new Image;
		aJ.onload = gg, aJ.src = aR.target.result
	}

	function gg(aR) {
		var gi, aR = aR.target,
			aZ = aR.width,
			aa = aR.height;
		4096 < aZ || 4096 < aa || aZ < 10 || aa < 10 ? (gi = "Image w & h must be between 10 and 4096.", bw.gj ? bw.gj.showToast(gi) : alert(gi)) : (e4.gk(), b.c = b.ge(), b.gl = 0, b.o = aZ, b.p = aa, b.gm.width = b.o, b.gm.height = b.p, b.gn
			.drawImage(aR, 0, 0), gi = b.gn.getImageData(0, 0, b.o, b.p), b.go = gi.data)
	}

	function gp(aR) {
		aR.stopPropagation(), aR.preventDefault()
	}

	function gq() {
		return 0 === cB.cC() || 2 === cB.cC()
	}
	this.aB = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = gT
	}, this.gU = function() {
		input.click()
	}, this.gV = function(aR) {
		gT(aR)
	}, this.gY = function(gZ) {
		var g3 = gZ.name.split("."),
			ga = g3[g3.length - 1].toLowerCase();
		"json" === ga ? e4.gc(gZ) : "gif" !== ga && "jpg" !== ga && "jpeg" !== ga && "png" !== ga || (b.e6.gd[b.ge()].name = g3[0], (ga = new FileReader).onload = gf, ga.readAsDataURL(gZ))
	}, this.gr = function(aR) {
		gq() && (gp(aR), aR.dataTransfer.dropEffect = "copy")
	}, this.gs = function(aR) {
		gq() && (gp(aR), gW(aR.dataTransfer.files))
	}
}

function gt() {
	var gu;
	this.gv = null, this.aB = function() {
		gu = [], 9 === ay.dp && this.gw()
	}, this.gw = function() {
		var j, gx = [50, 74, 95, 150, 190, 333];
		if (this.gy = 0, this.gv = [0, 0, 0, 0, 0, 0], ay.dc <= gx[0]) this.gv[0] = Math.max(d4.d5(ay.dc * (512 - ay.dc), gx[0]), 13), ay.de = this.gv[0];
		else
			for (ay.de = ay.cU - ay.dc, j = 1; j < 6; j++)
				if (ay.dc <= gx[j]) {
					this.gv[j - 1] = 512 - gx[j - 1] - a4((512 - gx[j - 1]) * (ay.dc - gx[j - 1]), gx[j] - gx[j - 1]), this.gv[j] = 512 - ay.dc - this.gv[j - 1];
					break
				} ay.dg = ay.dc + ay.de
	}, this.gz = function(player) {
		gu.push({
			player: player,
			h0: 14 + eC.h1(20)
		})
	}, this.bF = function() {
		var j;
		if (9 === ay.dp)
			for (j = gu.length - 1; 0 <= j; j--) --gu[j].h0 <= 0 && (er.h3(gu[j].player, 0, h4.h5.h6 + h4.h5.h7), gu.splice(j))
	}
}

function h8() {
	this.h9 = function(hA, hB, hC) {
		hD.eR(75), hD.hE(1, 0), hD.hE(6, 21), hD.hE(6, hA), hD.hE(1, +(hB < 0)), hD.hE(1, +(hC < 0)), hD.hE(30, Math.abs(hB)), hD.hE(30, Math.abs(hC)), b0.ba.send(0, hD.bG)
	}, this.hF = function(hA, hG, hH) {
		hD.eR(18 + 16 * hG.length + 30), hD.hE(1, 0), hD.hE(6, 22), hD.hE(6, hA), b0.hI.hJ(hG), hD.hE(30, hH), b0.ba.send(0, hD.bG)
	}, this.hK = function(hL, hM) {
		for (var s = hM.length, hN = 0, j = 0; j < s; j++) hN += hM[j].length;
		for (hD.eR(21 + 3 * s + 16 * hN), hD.hE(1, 0), hD.hE(6, 23), hD.hE(3, hL), hD.hE(4, s), hD.hE(7, hN), j = 0; j < s; j++) hD.hE(3, hM[j].length), hO.hP.hQ(hM[j]);
		b0.ba.send(0, hD.bG)
	}, this.hR = function(hL, hB, hC) {
		hD.eR(52), hD.hE(1, 0), hD.hE(6, 24), hD.hE(3, hL), hD.hE(1, +(hB < 0)), hD.hE(1, +(hC < 0)), hD.hE(20, Math.abs(hB)), hD.hE(20, Math.abs(hC)), b0.ba.send(0, hD.bG)
	}
}

function hS() {
	this.aQ = null;
	var hT, hU = new hV;
	this.aB = function() {
		hT = 1 === aS.ai.data[0].value ? new hW : 2 === aS.ai.data[0].value ? new hX : 3 === aS.ai.data[0].value ? new hY : 4 === aS.ai.data[0].value ? new hZ : 5 === aS.ai.data[0].value ? new ha : hU;
		var j, s = hU.aQ.length,
			d8 = hT.aQ.length;
		for (j = 0; j < s; j++) d8 === j ? (hT.aQ.push(hU.aQ[j]), d8++) : 0 === hT.aQ[j].length && (hT.aQ[j] = hU.aQ[j]);
		this.aQ = hT.aQ, aS.ai.translate()
	}, this.hc = function() {
		var hd = navigator.language;
		return aL.fm.startsWith(hd, "en") ? 0 : aL.fm.startsWith(hd, "ru") ? 1 : aL.fm.startsWith(hd, "tr") ? 2 : aL.fm.startsWith(hd, "es") ? 3 : aL.fm.startsWith(hd, "de") ? 4 : aL.fm.startsWith(hd, "pl") ? 5 : 0
	}, this.he = function(aJ) {
		for (var d2, s = this.aQ.length, j = 0; j < s; j++)
			if (aL.fm.startsWith(this.aQ[j], "{") && (d2 = this.aQ[j].replace("{" + aJ + "}", "")).length < this.aQ[j].length) return d2;
		return aJ
	}, this.hf = function(a3, hg, hh) {
		var j, d9, s, bv;
		if (!hg) return this.aQ[a3];
		for (s = hg.length, bv = this.aQ[a3], j = 0; j < s; j++)
			if ("number" == typeof hg[j])
				for (d9 = hT.hi.length - 1; 0 <= d9; d9--) bv = bv.replace("{" + (20 * (d9 + 1) + j) + "}", (2 === d9 ? 1 !== hg[j] : 1 === hg[j]) ? "" : hT.hi[d9]);
		if (hh) {
			if (hh.hj)
				for (j = 0; j < hh.hj.length; j++) hg[hh.hj[j]] = aL.fm.fn(hg[hh.hj[j]]);
			if (hh.hk)
				for (j = 0; j < hh.hk.length; j++) hg[hh.hk[j]] = aL.fm.fo(100 * hg[hh.hk[j]], 1)
		}
		for (j = 0; j < s; j++) bv = bv.replace("{" + j + "}", hg[j]);
		return bv
	}
}

function hl() {
	this.hm = new Int16Array(4), this.hn = new Int16Array(4), this.aB = function() {
		var j;
		for (this.hm[0] = -b.o, this.hm[1] = 1, this.hm[2] = b.o, this.hm[3] = -1, j = 0; j < 4; j++) this.hn[j] = 4 * this.hm[j]
	}, this.ho = function(hp, hq) {
		var dF = this.hr(hq) - this.hr(hp),
			hq = this.hs(hq) - this.hs(hp),
			hp = dF >>> 31 << 1;
		return 5 + hp + (1 - hp) * (1 - (hq >>> 31 << 1)) * (Math.abs(dF) - Math.abs(hq) >>> 31) & 3
	}, this.hw = function(hp, hq, hx) {
		return hx % 2 == 0 ? hx + (1 - hx) * (1 - (this.hr(hq) - this.hr(hp) >>> 31 << 1)) + 4 & 3 : hx + (2 - hx) * (1 - (this.hs(hq) - this.hs(hp) >>> 31 << 1)) + 4 & 3
	}, this.hz = function(i0, i1) {
		for (var hq, i2, i4 = bV.i5[i0], s = i4.length, aZ = b.o, i6 = this.hr(i1), i7 = this.hs(i1), i8 = i4[0] >> 2, min = this.i9(i6, i7, i8), j = 1; j < s; j++)(i2 = (i2 = i6 - (hq = i4[j] >> 2) % aZ) * i2 + (i2 = i7 - ~~((.5 + hq) / aZ)) *
			i2) < min && (min = i2, i8 = hq);
		return i8
	}, this.iA = function(player, g4) {
		return !eN.iB(g4) && player === eN.iC(g4)
	}, this.i9 = function(iD, iE, i1) {
		return (iD -= this.hr(i1)) * iD + (iE -= this.hs(i1)) * iE
	}, this.iF = function(iG, iH, m) {
		iG = this.iJ(iG) - this.iK(m), iH = this.iM(iH) - this.iN(m);
		return Math.sqrt(iG * iG + iH * iH)
	}, this.iO = function(hp, hq) {
		var iI = this.hr(hp) - this.hr(hq),
			hp = this.hs(hp) - this.hs(hq);
		return Math.sqrt(iI * iI + hp * hp)
	}, this.iP = function(i0, iQ) {
		return d4.d5(iQ * bV.bY[i0], 1e3)
	}, this.iJ = function(iG) {
		return 16 * (iG + fe) / ff
	}, this.iM = function(iH) {
		return 16 * (iH + fh) / ff
	}, this.iR = function(iG) {
		return Math.floor((iG + fe) / ff)
	}, this.iS = function(iH) {
		return Math.floor((iH + fh) / ff)
	}, this.iT = function(iD, iE) {
		return 1 <= iD && 1 <= iE && iD < b.o - 1 && iE < b.p - 1
	}, this.hr = function(i1) {
		return i1 % b.o
	}, this.hs = function(i1) {
		return d4.d5(i1, b.o)
	}, this.iU = function(iD, iE) {
		return iE * b.o + iD
	}, this.iV = function(i1) {
		var iD = this.hr(i1),
			i1 = this.hs(i1);
		return 0 < iD && iD < b.o - 1 && 0 < i1 && i1 < b.p - 1
	}, this.iW = function(i1) {
		return i1 << 2
	}, this.iX = function(i1) {
		return b.o * this.hs(i1) * 256 + (this.hr(i1) << 4)
	}, this.cZ = function(i1) {
		return this.iX(i1) + 8 + (b.o << 7)
	}, this.iY = function(m) {
		return b.o * (this.iN(m) >> 4) + (this.iK(m) >> 4)
	}, this.cg = function(m) {
		m = this.iY(m);
		return (this.hr(m) >> 5) + bZ.cf.iZ * (this.hs(m) >> 5)
	}, this.iK = function(m) {
		return m % (b.o << 4)
	}, this.iN = function(m) {
		return d4.d5(m, b.o << 4)
	}, this.ia = function(i1, hx) {
		return i1 + this.hm[hx]
	}, this.ib = function(g4, hx) {
		return g4 + this.hn[hx]
	}
}

function ic() {
	var fQ, ie, aZ, aa, fI, ig, ih, ii, ij, ik, il;

	function iu() {
		return Math.floor((ad.aZ - aZ) / 2) < ed.aa + 2 * af.gap ? ad.aa - aa - 4 * af.gap - ed.aa : ad.aa - aa - 2 * af.gap
	}
	this.gO = -1, this.aB = function() {
		il = fQ = !1, fI = .61, ig = .07, ih = .09, ik = ii = aa = 0, this.gO = -1
	}, this.resize = function() {
		var iv, dH, aJ, ix, iy, iz;
		fQ && (aZ = im(aZ = bw.bx.by() ? Math.floor(.69 * ad.ae) : Math.floor(.5 * ad.ae), io(ad.aZ - 2 * af.gap, 10)), aZ = im(aZ, Math.floor(3.57 * io(ad.aa - 2 * af.gap, 3))), aa = Math.floor(.28 * aZ), (ij = document.createElement("canvas"))
			.width = aZ, ij.height = aa, iv = ij.getContext("2d", {
				alpha: !0
			}), dH = Math.floor(1 + aa / 40), iv.clearRect(0, 0, aZ, aa), iv.fillStyle = aC.fr, iv.fillRect(dH, dH, aZ - 2 * dH, aa - 2 * dH), iv.lineJoin = "bevel", iv.lineWidth = 2 * dH, iv.strokeStyle = aC.aD, iv.strokeRect(dH, dH, aZ -
				2 * dH, aa - 2 * dH), iv.imageSmoothingEnabled = !1, aJ = iw.get(ie), ix = aJ.width, iy = aJ.height, iz = (1 === ie ? .85 : 21 === ie ? .666 : .9) * fI * aa / iy, iv.setTransform(iz, 0, 0, iz, Math.floor((aZ - iz * ix) / 2),
				Math.floor((aa - iz * iy) / 2)), iv.drawImage(aJ, 0, 0), iv.setTransform(1, 0, 0, 1, Math.floor(aZ - ih * aa - ig * aa - dH), Math.floor(dH + ig * aa)),
			function(iv, s) {
				iv.lineWidth = Math.floor(1 + aa / 80), iv.strokeStyle = aC.aD, iv.beginPath(), iv.moveTo(0, 0), iv.lineTo(s, s), iv.moveTo(0, s), iv.lineTo(s, 0), iv.stroke()
			}(iv, Math.floor(ih * aa)), iv.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(y, iq, ir, is) {
		fQ || is && il || (ie = ir ? 21 : y ? 1 : 2, fQ = il = !0, this.resize(), ek.fb(), ed.it(), ik = c0.gM, -1 === this.gO && (this.gO = c0.ci()), ii = iq ? 1 : 0)
	}, this.bF = function() {
		!fQ || 1 <= ii || (ii = 1 < (ii += 5e-4 * (c0.gM - ik)) ? 1 : ii, ik = c0.gM, c0.c1 = !0)
	}, this.fW = function(k, l) {
		return !(!fQ || ii <= 0 || (k -= Math.floor((ad.aZ - aZ) / 2), l -= iu(), k < 0) || l < 0 || aZ < k || aa < l || (aZ - aa / 3 < k && l < aa / 3 && (fQ = !1, c0.c1 = !0), 0))
	}, this.c9 = function() {
		!fQ || ii <= 0 || (cA.globalAlpha = ii, cA.drawImage(ij, Math.floor((ad.aZ - aZ) / 2), iu()), cA.globalAlpha = 1)
	}
}

function j1() {
	function jF(player, jO, jP, jQ) {
		for (var dH, dI, aZ, aa, jR, jS, gQ, gR, s = jO + jQ, j = jO; j < s; j += jP)
			if (dH = (dH = bV.jI[player] - j) < 1 ? 1 : dH, dI = bV.jJ[player] - j, gQ = (gQ = bV.jK[player] + j) >= b.o - 1 ? b.o - 2 : gQ, aa = (gR = (gR = bV.jL[player] + j) >= b.p - 1 ? b.p - 2 : gR) - (dI = dI < 1 ? 1 : dI), gQ = (jR = a4(eC
					.random() * (2 * (gQ - dH + gR - dI)), eC.value(100))) <= (aZ = gQ - dH) ? (jS = dH + jR, dI) : jR <= aZ + aa ? (jS = gQ, dI + jR - aZ) : jR <= 2 * aZ + aa ? (jS = dH + jR - aZ - aa, gR) : (jS = dH, dI + jR - 2 * aZ - aa), jN(
					player, gR = eN.jM(jS, gQ))) return gR;
		return -1
	}

	function jN(j8, d2) {
		return eN.jU(d2) && (eN.iB(d2) || j8 !== (d2 = eN.iC(d2)) && jB(j8, d2) && 0 < bV.i5[d2].length)
	}
	this.bF = function(player) {
		return !(0 === bV.i5[player].length || bV.bY[player] < 100) && bZ.ba.bc !== bZ.ba.cI && (bZ.ba.bb[player] !== bZ.ba.cJ && aL.j2.j3(player, 203, 32, 16) ? !! function(player) {
			var d2 = function(player) {
				var j, jG, jH, dH = bV.jI[player],
					dI = bV.jJ[player],
					iI = bV.jK[player] - dH + 1,
					iL = bV.jL[player] - dI + 1,
					y = eC.value(100);
				for (j = 0; j < 32; j++)
					if (jG = dH + d4.d5(eC.random() * iI, y), jH = dI + d4.d5(eC.random() * iL, y), jG = eN.jM(jG, jH), jN(player, jG)) return jG;
				return -1
			}(player);
			if (0 <= d2) return bZ.jD.jE(player, d2 >> 2);
			if (0 <= (d2 = jF(player, 1, 4, 40))) return bZ.jD.jE(player, d2 >> 2);
			if (0 <= (d2 = jF(player, 40, 8, 200))) return bZ.jD.jE(player, d2 >> 2);
			return
		}(player) && !! function(j8) {
			if (0 === ca.cb[2]) return void console.log("error 325234");
			var jA = ca.cb[1] + cY.hm[ca.cb[2] - 1] << 2;
			if (eN.iB(jA)) return 1;
			return jA = eN.iC(jA), j8 !== jA && !!jB(j8, jA)
		}(player) && function(player) {
			return aL.j2.j7(player), bZ.ba.cW(player), !0
		}(player) : void 0)
	}
}

function jV() {
	this.fQ = !1;
	this.ja = [], this.jb = 100;
	var dH, dI, gap, jW, jX, jZ, jd = 0,
		je = new Array(9),
		jf = [],
		jg = [],
		jh = 0,
		ji = 0,
		jj = 0,
		jk = 0;

	function k0() {
		je.sort(function(jy, d9) {
			return d9.jw - jy.jw
		});
		for (var bv = "" + je[0].av, j = 1; j < 9; j++) bv += "," + je[j].av;
		for (j = 0; j < 9; j++) bv += "," + je[j].jw;
		aS.ai.aj(120, bv)
	}
	this.aB = function() {
		for (var jl = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], j = 0; j < jl.length; j++) {
			var color = 6 === jl[j] ? aC.jm : aC.jn;
			this.ja.push(aL.ij.jo(iw.get(3), jl[j], color))
		}
		for (j = 0; j < h4.h5.jp; j++) jg.push(h4.h5.jq - h4.h5.jp + j);
		for (j = 0; j < h4.h5.jr; j++) jg.push(h4.h5.h6 + j);
		var js = h4.h5.jt(ju.js);
		for (j = 0; j < js.length; j++) jg.push(js[j]);
		! function() {
			var j, g3 = aS.ai.data[120].value.split(",");
			if (18 !== g3.length)
				for (j = 0; j < 9; j++) je[j] = {
					av: 1015 + j,
					jw: 0
				};
			else
				for (j = 0; j < 9; j++) {
					var y = parseInt(g3[j]),
						aJ = (y = 0 <= y && y < h4.h5.jq ? y : 0, parseInt(g3[j + 9]));
					aJ = 0 <= aJ && aJ < 1e3 ? aJ : 0, je[j] = {
						av: y,
						jw: aJ
					}
				}
		}()
	}, this.show = function(fX, fY, dB) {
		var j;
		if (jh = fX, ji = fY, jd = dB || 0, this.fQ = !0, jf = [], 0 === jd)
			for (j = 0; j < 9; j++) jf.push(je[j].av);
		else {
			var d9 = 49 * jd,
				dB = d9 - 49;
			for (dB >= jg.length && (jd = 1, dB = 0, d9 = 49), j = dB = (d9 = Math.min(d9, jg.length)) - 49; j < d9; j++) jf.push(jg[j])
		}
		jf.push(1024);
		dB = jf.length, jW = Math.floor((bw.bx.by() ? .075 : .0468) * ad.ae), gap = Math.floor(jW / 3), (jj = 10 * (jX = jW + gap)) > ad.aZ && (jj = ad.aZ, gap = (jX = jj / 10) - (jW = 3 * jX / 4)), jZ = d4.d5(dB, 10) + !!(dB % 10), (jk = jZ *
			jX) > ad.aa && (jk = ad.aa, gap = (jX = jk / jZ) - (jW = 3 * jX / 4)), this.jb, dB = .5 * gap;
		dH = Math.min(Math.max(fX - .5 * jj + dB, dB), ad.aZ - jj + dB), dI = Math.min(Math.max(fY - .5 * jk + dB, dB), ad.aa - jk + dB)
	}, this.fW = function(fX, fY, player) {
		if (!this.fQ) return !1;
		if (this.k2(fX, fY)) {
			fX = d4.k3(d4.d5(fX - dH + .5 * gap, jX), 0, 9);
			if ((fX += 10 * d4.k3(d4.d5(fY - dI + .5 * gap, jX), 0, 9)) >= jf.length) return ek.fb(), !0;
			fY = jf[fX];
			if (1024 === fY) return this.show(jh, ji, jd + 1), !0;
			! function(av) {
				for (var j = 0; j < 9; j++) je[j].jw = Math.floor(.99 * je[j].jw);
				for (j = 0; j < 9; j++)
					if (av === je[j].av) return je[j].jw = Math.min(je[j].jw + 30, 999), k0();
				je.splice(5, 0, {
					av: av,
					jw: Math.max(je[4].jw, 30)
				}), je.pop(), k0()
			}(fY), player === ay.az ? bg.k4.ax(fY) : bg.j2.au(fY, player)
		}
		return ek.fb(), !0
	}, this.k2 = function(fX, fY) {
		return !(fX < dH - .5 * gap || fY < dI - .5 * gap || dH + jj - .5 * gap <= fX || dI + jk - .5 * gap <= fY)
	}, this.c9 = function() {
		cA.fillStyle = aC.fr, cA.fillRect(dH - .5 * gap, dI - .5 * gap, jj, jk);
		for (var d7 = .5 * af.k5, s = (cA.lineWidth = af.k5, cA.strokeStyle = cA.fillStyle = aC.aD, cA.strokeRect(dH - .5 * gap + d7, dI - .5 * gap + d7, jj - 2 * d7, jk - 2 * d7), cA.imageSmoothingEnabled = !0, jf.length), j = 0; j < s; j++)
			this.k6(jf[j], cA, dH + j % 10 * jX, dI + d4.d5(j, 10) * jX, jW);
		cA.imageSmoothingEnabled = !1
	}, this.k6 = function(av, k7, k, l, jW) {
		var g4;
		av >= 1024 - h4.h5.jp ? (g4 = jW / this.jb, k7.setTransform(g4, 0, 0, g4, k, l), k7.drawImage(this.ja[av - 1024 + h4.h5.jp], 0, 0), k7.setTransform(1, 0, 0, 1, 0, 0)) : (aL.ab.textAlign(k7, 1), aL.ab.textBaseline(k7, 1), k7.font = aL.ab
			.bz(0, .89 * jW), k7.fillText(h4.h5.k8(av), k + .5 * jW, l + (.35 - aL.ab.k9 + .56) * jW))
	}
}

function kA() {
	this.kB = 0, this.kC = 0, this.kD = 0, this.kE = 0, this.kF = 0, this.kG = 0, this.kH = [0, 0, 0, 0], this.kI = function() {
		this.kB = ec.kJ(), this.kC = ec.iu(), this.kD = -this.kB, this.kE = -this.kC, this.kF = ad.aZ / ff, this.kG = ad.aa / ff, this.kH[0] = Math.floor(this.kD), this.kH[1] = Math.floor(this.kE), this.kH[2] = Math.floor(this.kH[0] + this.kF +
			1), this.kH[3] = Math.floor(this.kH[1] + this.kG + 1), eK.kK = !0
	}
}

function kL() {
	var kM, kN, kO, kP, kQ, kR, kS, kU, kV, kX, kY, kZ, kc, kd, ke, kf, kg, kT = 48,
		ka = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
		kb = [0, 0, 0, 0];

	function kn(j, av) {
		j = kS[j].getContext("2d", {
			alpha: !0
		});
		j.clearRect(0, 0, kT, kT), h4.kp.k6(av, j, 0, 0, kT)
	}

	function km(j, kq) {
		var j = kS[j].getContext("2d", {
				alpha: !0
			}),
			zoom = (j.clearRect(0, 0, kT, kT), kT / kq.width),
			c3 = kT / kq.height,
			zoom = c3 < zoom ? c3 : zoom;
		j.imageSmoothingEnabled = !0, j.setTransform(zoom, 0, 0, zoom, Math.floor((kT - zoom * kq.width) / 2), Math.floor((kT - zoom * kq.height) / 2)), j.drawImage(kq, 0, 0), j.setTransform(1, 0, 0, 1, 0, 0)
	}

	function ku(aJ, jR, kx, k7) {
		k7.beginPath(), k7.moveTo(aJ, aJ), k7.lineTo(aJ + Math.cos(kx) * jR, aJ + Math.cos(kx + 1.5 * Math.PI) * jR), k7.stroke()
	}

	function lF() {
		if (7 === cB.cC()) {
			for (var ht, kq, k7, zoom, c3, jy = -1, j = kU.length - 1; 0 <= j; j--)
				if (null === kU[j].ij) {
					jy = j;
					break
				} - 1 !== jy && (null !== (ht = l3(kU[jy].l6, kU[jy].l7)) ? kU[jy].ij = ht : (ht = {
					o: b.o,
					p: b.p,
					gm: b.gm,
					gn: b.gn,
					lG: b.lG,
					go: b.go,
					c: b.c,
					gl: b.gl
				}, b.eR(kU[jy].l6, kU[jy].l7), b.lH.lI(), (kq = document.createElement("canvas")).width = 128, kq.height = 128, k7 = kq.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / b.o) < (c3 = 128 / b.p) && (zoom = c3), k7.imageSmoothingEnabled = !0, k7.setTransform(zoom, 0, 0, zoom, (128 - zoom * b.o) / 2, (128 - zoom * b.p) / 2), k7.drawImage(b.gm, 0, 0), b.o = ht.o, b.p = ht.p, b
				.gm = ht.gm, b.gn = ht.gn, b.lG = ht.lG, b.go = ht.go, b.c = ht.c, b.gl = ht.gl, kU[jy].ij = kq), c0.c1 = !0)
		}
	}

	function l3(l6, l7) {
		for (var j = kU.length - 1; 0 <= j; j--)
			if (null !== kU[j].ij && kU[j].l6 === l6 && kU[j].l7 === l7) return kU[j].ij;
		return null
	}
	this.aB = function() {
		var j;
		for (kg = 0, kX = -1, cB.setState(7), kU = [], this.resize(), kS = new Array(13), j = kS.length; 0 <= j; j--) kS[j] = document.createElement("canvas"), kS[j].width = kT, kS[j].height = kT;
		for (j = 0; j < 7; j++) ! function(h0) {
			var ks, k7 = kS[h0 - 2].getContext("2d", {
					alpha: !0
				}),
				kr = 1.5 * Math.PI,
				aJ = Math.floor(.5 * kT),
				jR = Math.floor(.48 * kT);
			k7.lineWidth = 2, k7.strokeStyle = aC.aD, k7.clearRect(0, 0, kT, kT);
			for (var j = 0; j < h0; j++) ks = kr + 2 * Math.PI / h0,
				function(j, aJ, jR, kr, ks, k7) {
					k7.fillStyle = dV.kw[j], k7.beginPath(), k7.arc(aJ, aJ, jR, kr, ks), k7.lineTo(aJ, aJ), k7.fill()
				}(j + 1, aJ, jR, kr, ks, k7), 0 !== j && ku(aJ, jR, kr, k7), kr = ks;
			ku(aJ, jR, 1.5 * Math.PI, k7),
				function(aJ, jR, k7) {
					k7.beginPath(), k7.arc(aJ, aJ, jR, 0, 2 * Math.PI), k7.stroke()
				}(aJ, jR, k7)
		}(j + 2);
		km(7, iw.get(4)), kn(8, h4.h5.h6 + h4.h5.ko), kn(9, h4.h5.h6 + h4.h5.h7), kn(10, 1024 - h4.h5.jp), km(11, iw.get(19)), km(12, iw.get(20)), c0.c1 = !0
	}, this.ki = function() {
		this.kj(), b0.ba.kk(3240), cB.setState(0), ak.am(5, 5)
	}, this.kj = function() {
		kU = [], kS = []
	}, this.cE = function() {
		return kZ
	}, this.resize = function() {
		var ky, kz, l0, l1;
		for (kO = [0, 0], kV = [0, 0, 0, 0], kf = bw.bx.by() ? (kY = Math.floor(.8 * .4 * ad.ae), kZ = Math.floor(.56 * kY), kV[0] = af.gap, ad.aZ < ad.aa ? (kV[1] = kZ + 2 * af.gap, kV[2] = ad.aZ - 3 * kV[0], kV[3] = ad.aa - 3 * af.gap - kZ,
				kd = Math.floor(.95 * kZ), ke = Math.floor((ad.aZ - kY - af.gap) / 2), Math.floor(af.gap + kZ / 2)) : (kV[1] = af.gap, kV[2] = ad.aZ - 3 * af.gap - kY, kV[3] = ad.aa - 2 * af.gap, kd = Math.floor(.8 * kY), kV[3] - kZ < kY && (
				kd = Math.floor(.8 * (kV[3] - kZ)), kd = io(kZ, kd)), ke = Math.floor(ad.aZ - kY / 2 - af.gap), io(kf = Math.floor(af.gap + kZ + (kV[3] - kZ) / 2), Math.floor(kZ + 2 * af.gap + kd / 2)))) : (kY = Math.floor(.2016 * ad.ae), kZ =
				Math.floor(.56 * kY), kV[2] = Math.floor(.5 * ad.aZ), kV[3] = Math.floor(.5 * ad.aa), kV[1] = Math.floor(.45 * (ad.aa - kV[3])), kV[0] = Math.floor((ad.aZ - kV[2]) / 2), kd = Math.floor(.75 * kZ), ke = Math.floor(ad.aZ / 2), Math
				.floor(kV[1] + kV[3] + (ad.aa - kV[3] - kV[1]) / 2)), kc = aL.ab.bz(1, .65 * kZ / 4), ky = kz = 1; ky * kz < kU.length;) kV[3] / (kz + 1) < kV[2] / (ky + 1) ? ky++ : kz++;
		l0 = (kV[2] - (ky - 1) * af.gap) / ky, l1 = (kV[3] - (kz - 1) * af.gap) / kz, kM = l0 < l1 ? l0 : l1, kN = Math.floor(kM), kR = aL.ab.bz(1, .5 * kM / 5), kO[0] = ky, kO[1] = kz, kP = kV[0] + Math.floor((kV[2] - kO[0] * kM - (kO[0] - 1) *
			af.gap) / 2), kQ = kV[1] + Math.floor((kV[3] - kO[1] * kM - (kO[1] - 1) * af.gap) / 2)
	}, this.aU = function(l2, i0) {
		var j, c3, ij, s = kU.length;
		for (kb = l2, j = 0; j < i0.length; j++) ij = l3(i0[j].c, i0[j].gl), kU.push({
			l4: i0[j].id,
			e1: i0[j].e1,
			e2: i0[j].l5,
			l6: i0[j].c,
			l7: i0[j].gl,
			joined: i0[j].l8,
			c5: i0[j].l9,
			lA: i0[j].lA,
			ij: ij,
			lB: i0[j].lB,
			lC: i0[j].lC,
			lD: i0[j].lD
		});
		for (j = s - 1; 0 <= j; j--) kU.shift();
		if (-1 !== kX)
			for (c3 = kX, kX = -1, j = kU.length - 1; 0 <= j; j--)
				if (kU[j].l4 === c3) {
					kX = c3;
					break
				}(kU.length > kg || kU.length < kg) && (kg = kU.length, this.resize()), this.lE(), c0.c1 = !0
	}, this.lE = function() {
		for (var j = kU.length - 1; 0 <= j; j--) null === kU[j].ij && setTimeout(lF, 0)
	}, this.fW = function(k, l) {
		return 4 * ((k - ke) * (k - ke) + (l - kf) * (l - kf)) <= kd * kd ? (this.ki(), lJ.fi(k, l, !1), !0) : function(k, l) {
			var jy, d9, dH, dI;
			if (0 !== kU.length) {
				var j = 0;
				for (dI = kQ, d9 = 0; d9 < kO[1]; d9++) {
					for (dH = kP, jy = 0; jy < kO[0]; jy++) {
						if (dH < k && k < dH + kM && dI < l && l < dI + kM) return b0.lL.lM(kU[j].l4), kX = kU[j].l4 !== kX ? kU[j].l4 : -1, c0.c1 = !0;
						if (++j >= kU.length) return !1;
						dH += kM + af.gap
					}
					dI += kM + af.gap
				}
			}
			return !1
		}(k, l)
	}, this.c9 = function() {
		var jy, d9, k, jR, zoom, j = 0,
			l = kQ;
		if (cA.imageSmoothingEnabled = !0, cA.lineWidth = 3, jR = Math.floor(.5 * kd), cA.fillStyle = aC.lQ, cA.beginPath(), cA.arc(ke, kf, jR, 0, 2 * Math.PI), cA.fill(), cA.strokeStyle = aC.aD, cA.beginPath(), cA.arc(ke, kf, jR, 0, 2 * Math
			.PI), cA.stroke(), jR = iw.get(0).height, zoom = .6 * kd / jR, cA.setTransform(zoom, 0, 0, zoom, Math.floor(ke - .56 * zoom * iw.get(0).width), Math.floor(kf - .5 * zoom * jR)), cA.drawImage(iw.get(0), 0, 0), cA.setTransform(1, 0, 0,
				1, 0, 0),
			function() {
				cA.fillStyle = aC.lQ, cA.fillRect(ad.aZ - kY - af.gap, af.gap, kY, kZ), 0 <= kX ? (cA.fillStyle = aC.lR, cA.fillRect(ad.aZ - kY - af.gap, af.gap, kY, Math.floor(.25 * kZ))) : (cA.fillStyle = aC.lS, cA.fillRect(ad.aZ - kY - af.gap,
					af.gap + Math.floor(.25 * kZ), kY, Math.floor(.25 * kZ)));
				cA.strokeStyle = aC.aD, cA.strokeRect(ad.aZ - kY - af.gap, af.gap, kY, kZ), cA.fillStyle = aC.aD, cA.font = kc, aL.ab.textBaseline(cA, 1);
				for (var l, lT = Math.floor(.04 * kY), lU = Math.floor(.08 * kZ), j = 3; 0 <= j; j--) l = Math.floor(af.gap + (j + 1) * (kZ + 2 * lU) / 5 - lU), aL.ab.textAlign(cA, 0), cA.fillText(ka[j], ad.aZ - kY - af.gap + lT, l), aL.ab
					.textAlign(cA, 2), cA.fillText(aL.fm.fn(kb[j]), ad.aZ - af.gap - lT, l)
			}(), 0 !== kU.length)
			for (d9 = 0; d9 < kO[1]; d9++) {
				for (k = kP, jy = 0; jy < kO[0]; jy++) {
					if (! function(j, k, l) {
							var zoom, d9, lV, lX, lY;
							null === kU[j].ij ? (cA.fillStyle = aC.lQ, cA.fillRect(k, l, kN, kN)) : (zoom = kN / 128, cA.setTransform(zoom, 0, 0, zoom, k, l), cA.drawImage(kU[j].ij, 0, 0), cA.setTransform(1, 0, 0, 1, 0, 0));
							kX === kU[j].l4 ? (function(k, l) {
								var fE = Math.floor(.2 * kN),
									fF = Math.floor(.3 * fE);
								cA.fillStyle = aC.lZ, cA.fillRect(k + kN - fE, l, fE, fE), cA.fillStyle = aC.cF, cA.fillRect(k + kN - fE, l, 2, fE), cA.fillRect(k + kN - fE, l + fE - 2, fE, 2), ei.g0(k + kN - fE + fF, l + fF, fE - 2 *
									fF), cA.setTransform(1, 0, 0, 1, 0, 0)
							}(k, l), cA.lineWidth = 3, cA.fillStyle = aC.lZ) : cA.fillStyle = aC.la;
							lX = Math.floor(kM / 4), cA.fillRect(k, l, lX, lX), lY = Math.floor(l + .8 * kM), cA.fillRect(k, lY, kN, Math.floor(kM / 5)),
								function(j, k, l) {
									var zoom;
									kU[j].e2 && (j = iw.get(4), zoom = .5 * kM / j.width, cA.setTransform(zoom, 0, 0, zoom, Math.floor(k + (kM - zoom * j.width) / 2), Math.floor(l + (kM - zoom * j.height) / 2)), cA.globalAlpha = .6, cA.drawImage(
										j, 0, 0), cA.globalAlpha = 1, cA.setTransform(1, 0, 0, 1, 0, 0))
								}(j, k, l);
							var lc = new Array(kU[j].lB);
							if (kU[j].lB) {
								for (d9 = lV = 0; d9 < kU[j].lB; d9++) kU[j].lC[d9] = aL.iv.ld(kU[j].lC[d9], kR, .4 * kM), lc[d9] = ("" === kU[j].lC[d9] ? "other: " : "[" + kU[j].lC[d9] + "]: ") + kU[j].lD[d9];
								for (d9 = 0; d9 < kU[j].lB; d9++) lV = Math.max(lV, c7.measureText(lc[d9], kR));
								lV += .05 * kM, d9 = 5 === kU[j].lB, lX = d9 ? l + lX : Math.max(l + .8 * kM - .11 * kU[j].lB * kM, l + lX), lY = d9 ? lY : Math.min(lX + .11 * kU[j].lB * kM + .05 * kM, lY), cA.fillRect(k, lX, lV, lY - lX)
							}
							for (cA.font = kR, aL.ab.textBaseline(cA, 1), aL.ab.textAlign(cA, 0), cA.fillStyle = aC.le, cA.fillText(kU[j].joined.toString(), Math.floor(k + .22 * kM), Math.floor(l + .9 * kM)), cA.fillStyle = aC.aD, d9 = 0; d9 <
								kU[j].lB; d9++) cA.fillText(lc[kU[j].lB - d9 - 1], Math.floor(k + .03 * kM), Math.floor(l + .77 * kM - .11 * d9 * kM));
							aL.ab.textAlign(cA, 2), cA.fillStyle = aC.lf, cA.fillText(kU[j].c5.toString(), Math.floor(k + .81 * kM), Math.floor(l + .9 * kM)), cA.strokeStyle = kX === kU[j].l4 ? aC.g1 : aC.lg, cA.strokeRect(k, l, kN, kN), lY =
								Math.floor(.16 * kM), zoom = lY / kT, cA.setTransform(zoom, 0, 0, zoom, Math.floor(k + .33 * lY), Math.floor(l + .33 * lY)), kS.length > kU[j].e1 && cA.drawImage(kS[kU[j].e1], 0, 0);
							cA.setTransform(zoom, 0, 0, zoom, Math.floor(k + .15 * lY), Math.floor(l + kM - 1.08 * lY)), cA.drawImage(kS[11], 0, 0), cA.setTransform(zoom, 0, 0, zoom, Math.floor(k + kM - 1.05 * lY), Math.floor(l + kM - 1.15 *
								lY)), cA.drawImage(kS[12], 0, 0), cA.setTransform(1, 0, 0, 1, 0, 0)
						}(j, Math.floor(k), Math.floor(l)), ++j >= kU.length) return;
					k += kM + af.gap
				}
				l += kM + af.gap
			}
	}
}

function lh() {
	var li, aZ, l, lj, lk, ij, iv, ll, fw, lm, ln, lo, lp;
	this.k = 0, this.aa = 0, this.aB = function() {
		lk = ay.da, ln = "rgba(0,100,0,0.8)", lo = "rgba(150,0,0,0.8)", ll = !(lm = !0), fw = bV.bY[ay.az], this.resize()
	}, this.resize = function() {
		aZ = Math.floor((bw.bx.by() ? .305 : .24) * ad.ae), this.aa = Math.floor(.5 + .13 * aZ), aZ = Math.floor(6 * this.aa), li = aL.ab.bz(1, Math.floor(.8 * this.aa)), lp = Math.floor(.5 * this.aa), b.gn.font = li, l = af.gap, lj = Math.floor(
			1 + .13 * this.aa), (ij = document.createElement("canvas")).width = aZ, ij.height = this.aa, (iv = ij.getContext("2d", {
			alpha: !0
		})).font = li, aL.ab.textBaseline(iv, 1), aL.ab.textAlign(iv, 1), this.lq()
	}, this.lr = function() {
		return bw.bx.by() && ad.aZ < 1.2 * ad.aa
	}, this.ls = function() {
		this.lr() ? this.k = ad.aZ - aZ - af.gap : this.k = Math.floor(eb.lt() + (ad.aZ - eb.lt() - eh.aZ - aZ) / 2 - .5 * af.gap)
	}, this.f2 = function() {
		ll && (ll = !1, this.lq())
	}, this.lq = function() {
		iv.clearRect(0, 0, aZ, this.aa), iv.fillStyle = lm ? ln : lo, iv.fillRect(0, 0, aZ, this.aa), iv.fillStyle = aC.lg, this.lu(), this.lv(), iv.fillStyle = bV.bY[ay.az] >= eL.lw(ay.az) ? aC.lx : aC.aD, iv.fillText(aL.fm.fn(fw), Math.floor(
			aZ / 2), lp), iv.fillStyle = aC.aD, iv.fillRect(0, 0, aZ, 1), iv.fillRect(0, 0, 1, this.aa), iv.fillRect(0, this.aa - 1, aZ, 1), iv.fillRect(aZ - 1, 0, 1, this.aa)
	}, this.lu = function() {
		var fa = im(Math.floor((eL.gP() - 1) * this.aa / 9), this.aa - lj);
		iv.fillRect(0, fa, lj, this.aa - fa), iv.fillRect(aZ - lj, fa, lj, this.aa - fa)
	}, this.lv = function() {
		iv.fillRect(lj, this.aa - lj, Math.floor((aZ - 2 * lj) * bV.bY[ay.az] / lk), lj)
	}, this.bF = function() {
		0 !== bV.bW[ay.az] && 2 !== bV.ly[ay.az] && fw !== bV.bY[ay.az] && (lk = io(bV.bY[ay.az], lk), lm = bV.bY[ay.az] > fw && 10 <= bV.bY[ay.az], fw = bV.bY[ay.az], ll = !0)
	}, this.c9 = function() {
		0 === bV.bW[ay.az] || ay.dl || 2 === bV.ly[ay.az] || cA.drawImage(ij, this.k, l)
	}
}
var e9, lz, m0, m1, m2, m3;

function m4() {
	this.m5 = 1050, this.aB = function() {
		e9 = 2, m0 = 23, lz = "2 Aug 2024 [1.97.7]", m1 = true, m3 = function() {
			try {
				return window.self !== window.top
			} catch (aR) {
				return !0
			}
		}(), m2 = (new Date).getTime() % 1024
	}, this.m7 = 0
}

function m8() {
	this.m9 = new Uint16Array(2), this.ce = new Uint32Array(2), this.mA = new Uint32Array(2), this.mB = new Uint8Array(4), this.mC = new Uint8Array(4), this.cb = new Uint32Array(5), this.mD = new Uint32Array(8), this.mE = new Uint16Array(512), this
		.mF = function(g3, bH) {
			return g3[0] = bH, g3
		}, this.mG = function(g3, bH, be) {
			return g3[0] = bH, g3[1] = be, g3
		}, this.mH = function(g3, bH, be, bf) {
			return g3[0] = bH, g3[1] = be, g3[2] = bf, g3
		}, this.mI = function(g3, bH, be, bf, mJ) {
			return g3[0] = bH, g3[1] = be, g3[2] = bf, g3[3] = mJ, g3
		}
}

function mK() {
	var mL, mM;
	this.aB = function() {
		mL = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var j, jy, mN = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			mO = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (mM =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), j = mL.length - 1; 0 <= j; j--)
			for (jy = mN.length - 1; 0 <= jy; jy--) mL[j] = mL[j].replace(mN[jy], mO[jy]);
		if (settings.realisticNames) mL = realisticNames;
	}, this.eR = function() {
		var j;
		if (e4.e5 && e4.e6.mP)
			for (j = ay.dc; j < ay.cU; j++) bV.mU[j] = bV.mV[j] = e4.e6.mP[j % ay.dg];
		else(9 === ay.dp ? function() {
			var j, jR = eC.random(),
				s = mL.length,
				d8 = ay.dc + eE.gy;
			for (j = d8 - 1; j >= ay.dc; j--) bV.mU[j] = bV.mV[j] = mL[(j + jR) % s];
			for (s = mM.length, j = d8; j < ay.cU; j++) bV.mU[j] = bV.mV[j] = mM[j % s]
		} : ay.bB ? function() {
			var j, jR = eC.random();
			for (j = ay.dc; j < ay.cU; j++) bV.mU[j] = bV.mV[j] = mL[(j + jR) % ay.cU]
		} : function() {
			var j, s = mL.length,
				jR = eC.random();
			for (j = ay.dc; j < ay.cU; j++) bV.mU[j] = bV.mV[j] = mL[(j + jR) % s]
		})()
	}
}

function mW() {
	this.mX = -1, this.aB = function() {
		this.mX = -1
	}, this.bF = function() {
		-1 !== this.mX && mY.mZ.ma(this.mX)
	}, this.bq = function(player) {
		return !!ei.mb(player) && (1 === bd ? (this.mX = player, ay.bB && ay.dl && ay.dr.bF()) : (aw.mc(player, player === ay.az ? 21 : 22), 8 === ay.dp ? this.mX = 1 - player : ay.bB ? (md(player), me(), ay.dl && ay.dr.bF()) : this.mf(player)),
			!0)
	}, this.br = function(player) {
		1 === ay.di && 0 !== bV.bW[player] && 2 !== bV.ly[player] && (8 === ay.dp ? this.mX = 1 - player : this.mf(player)), ay.dd--, ay.df--, aw.mc(player, 4), aL.j2.mg(2) && eh.f2(!0)
	}, this.mf = function(player) {
		ay.dl ? (md(player), me()) : et.mh(player)
	}
}

function mi() {
	var ik = 0,
		mj = !0;

	function ml(bv) {
		8 !== cB.cC() || 2 !== bV.ly[ay.az] && (0 !== bV.bW[ay.az] || ay.dl) || aw.mm(bv)
	}
	this.bF = function() {
		var c3, c5;
		c0.gM > ik && (ik = c0.gM + 2500, c3 = new Date, c5 = c3.getUTCSeconds(), mj ? c5 < 45 && (mj = !1) : c5 < 45 || (mj = !0, (c5 = c3.getUTCMinutes() + 1) % 15 == 0 && ml(30 === c5 ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function mn() {
	this.ir = function() {
		var mr;
		return !(bd < 3 || bV.bX[mo[0]] >= ay.dj >> 1) && (ay.dT ? (mr = eL.ms(), !(2 * eL.mu(eV.mv()) >= mr)) : function() {
			var mr = eL.ms();
			if (2 * bV.bY[mo[0]] >= mr) return !1;
			return !0
		}())
	}
}

function mw() {
	var cK, mx, my, mz, n0, n1, n2, n3;

	function n6(j) {
		var jy;
		for (my--, jy = j; jy < my; jy++) mz[jy] = mz[jy + 1], n0[jy] = n0[jy + 1], n1[jy] = n1[jy + 1], n2[jy] = n2[jy + 1], n3[jy] = n3[jy + 1]
	}
	this.aB = function() {
		cK = 1, my = 0, mx = 2 * ay.cU, mz = new Uint16Array(mx), n0 = new Uint8Array(mx), n1 = new Uint16Array(mx), n2 = new Uint32Array(mx), n3 = new Uint32Array(mx)
	}, this.n4 = function(a3, position) {
		n2[a3] = position
	}, this.bF = function() {
		for (var j = my - 1; 0 <= j; j--) 0 == n0[j]-- && (n0[j] = 2, n5.bF(j, n1[j], mz[j], n2[j], n3[j]))
	}, this.n7 = function(player, id) {
		for (var j = my - 1; 0 <= j; j--)
			if (player === mz[j] && id === n1[j]) return void n6(j)
	}, this.n8 = function(player) {
		for (var j = my - 1; 0 <= j; j--) player === mz[j] && (n5.n9(player, n2[j]), n6(j))
	}, this.nA = function(player, jO, nB) {
		if (mx <= my) return 0;
		mz[my] = player, n0[my] = 0, n1[my] = cK, n2[my] = jO, n3[my] = nB;
		player = cK;
		return my++, cK = 2 * mx < ++cK ? 1 : cK, player
	}, this.c9 = function() {
		if (!(ff < 40 || 0 === my)) {
			var jy, k, l, j, fontSize, nG, co, dH = fe / ff,
				dI = fh / ff,
				gQ = (ad.aZ + fe) / ff,
				gR = (ad.aa + fh) / ff;
			for (aL.ab.textAlign(cA, 1), aL.ab.textBaseline(cA, 1), jy = my - 1; 0 <= jy; jy--) k = eN.kJ(n2[jy]), l = eN.iu(n2[jy]), j = mz[jy], dH - 1 < k && k < gQ && dI - 1 < l && l < gR && 0 !== bV.bW[j] && ((fontSize = Math.floor(.94 * ff *
				er.nH(j))) < 6 || (k = Math.floor(ad.aZ * (k + .5 - dH) / (gQ - dH)), l = Math.floor(ad.aa * (l + .48 - dI) / (gR - dI)), cA.font = aL.ab.bz(1, fontSize), cA.fillStyle = aC.cF, co = eq.nI(j, eq.nJ(j, n1[jy])), cA.fillText(
				aS.ai.data[7].value ? aL.fm.fn(co) : bV.mU[j], k, l), (nG = Math.floor(.5 * fontSize)) < 6) || (cA.font = aL.ab.bz(1, nG), cA.fillText(aS.ai.data[7].value ? bV.mU[j] : aL.fm.fn(co), k, l + Math.floor(.82 * fontSize))))
		}
	}
}

function nK() {
	var size, nL;
	this.aB = function() {
		size = ay.de, nL = new Uint16Array(ay.de);
		for (var j = ay.de - 1; 0 <= j; j--) nL[j] = j
	}, this.bF = function() {
		for (var j = size - 1; 0 <= j; j--) 0 === bV.bW[nL[j] + ay.dc] ? function(jy) {
			size--;
			for (var j = jy; j < size; j++) nL[j] = nL[j + 1]
		}(j) : eP.bF(nL[j])
	}
}

function nO() {
	var nS, nT, nU, nV, nW, nX, nY, nZ, na, nb, nc, nP = [224, 224, 224],
		nQ = [
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
		nR = [
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

	function oD(i0, oF) {
		o2[i0] = 0, o2[i0 + 1] = 0, o2[i0 + 2] = oF, o2[i0 + 3] = 0, oG(i0)
	}

	function oG(i0) {
		var k;
		eK.oL || (k = eN.kJ(i0), i0 = eN.iu(i0), eK.oL = k >= oM.kH[0] && k <= oM.kH[2] && i0 >= oM.kH[1] && i0 <= oM.kH[3])
	}
	this.aB = function(e0) {
		if (nS = new Uint8Array(ay.cU), nT = new Uint8Array(ay.cU), nU = new Uint8Array(ay.cU), nV = new Uint8Array(ay.cU), nW = new Uint8Array(ay.cU), nX = new Uint8Array(ay.cU), nY = new Uint8Array(ay.cU), nZ = new Uint8Array(ay.cU), na =
			new Uint8Array(ay.cU), nb = new Uint8Array(ay.cU), this.nh = new Uint8Array(ay.cU), (nc = new Int32Array(4))[0] = -4 * b.o, nc[1] = 4, nc[2] = -nc[0], nc[3] = -nc[1], ay.dT)
			for (var d8, aJ, j = ay.cU - 1; 0 <= j; j--) aJ = dV.nv[dV.dW[j]], d8 = a4((nR[aJ][3] + 1) * eC.random(), eC.value(100)), nS[j] = nQ[aJ][0] + d8 * nR[aJ][0], nT[j] = nQ[aJ][1] + d8 * nR[aJ][1], nU[j] = nQ[aJ][2] + d8 * nR[aJ][2];
		else e4.e5 && e4.e6.nk ? function(g3) {
			var j;
			for (j = ay.dg - 1; 0 <= j; j--) nS[j] = 4 * g3[j][0], nT[j] = 4 * g3[j][1], nU[j] = 4 * g3[j][2]
		}(e4.e6.nk) : (function() {
			for (var j = ay.cU - 1; j >= ay.dc; j--) nS[j] = 4 * a4(64 * eC.random(), eC.value(100)), nT[j] = 4 * a4(64 * eC.random(), eC.value(100)), nU[j] = 4 * a4(64 * eC.random(), eC.value(100))
		}(), function(e0) {
			for (var j = ay.dc - 1; 0 <= j; j--) nS[j] = 4 * e0[j].nu[0], nT[j] = 4 * e0[j].nu[1], nU[j] = 4 * e0[j].nu[2]
		}(e0));
		! function() {
			var j, d0;
			for (j = ay.cU - 1; 0 <= j; j--) d0 = a4(nS[j] + nT[j] + nU[j], 3), nS[j] += a1(d0 - nS[j], 2), nT[j] += a1(d0 - nT[j], 2), nU[j] += a1(d0 - nU[j], 2), nS[j] -= nS[j] % 4, nT[j] -= nT[j] % 4, nU[j] -= nU[j] % 4
		}(),
		function() {
			for (var j = ay.cU - 1; 0 <= j; j--) nS[j] += a4(j, 128), nT[j] += a4(j % 128, 32), nU[j] += a4(j % 32, 8), nV[j] = j % 8
		}(), this.nq(),
			function() {
				for (var j = ay.cU - 1; 0 <= j; j--) nW[j] = nS[j] < 32 ? nS[j] + 32 : nS[j] - 32, nX[j] = nT[j] < 32 ? nT[j] + 32 : nT[j] - 32, nY[j] = nU[j] < 32 ? nU[j] + 32 : nU[j] - 32
			}(),
			function() {
				for (var j = ay.cU - 1; 0 <= j; j--) nZ[j] = 235 < nS[j] ? nS[j] - 20 : nS[j] + 20, na[j] = 235 < nT[j] ? nT[j] - 20 : nT[j] + 20, nb[j] = 235 < nU[j] ? nU[j] - 20 : nU[j] + 20
			}()
	}, this.nt = function(player) {
		var g3 = ca.mB;
		return g3[0] = nS[player], g3[1] = nT[player], g3[2] = nU[player], g3
	}, this.nq = function() {
		for (var j = ay.cU - 1; 0 <= j; j--) this.nh[j] = nS[j] + nT[j] + nU[j] < 280 ? 0 : 1
	}, this.kJ = function(i0) {
		return a4(i0, 4) % b.o
	}, this.iu = function(i0) {
		return a4(i0, 4 * b.o)
	}, this.jM = function(k, l) {
		return Math.floor(4 * (l * b.o + k))
	}, this.nw = function(i0) {
		return this.nx(i0 + nc[0]) || this.nx(i0 + nc[1]) || this.nx(i0 + nc[2]) || this.nx(i0 + nc[3])
	}, this.ny = function(i0, player) {
		return this.nz(i0 + nc[0], player) || this.nz(i0 + nc[1], player) || this.nz(i0 + nc[2], player) || this.nz(i0 + nc[3], player)
	}, this.o0 = function(player) {
		return player < ay.dc && 2 !== bV.ly[player]
	}, this.o1 = function(i0) {
		return 208 <= o2[i0 + 3]
	}, this.o3 = function(player, i0) {
		return this.o1(i0) && this.o4(player, i0)
	}, this.o4 = function(player, i0) {
		return player === this.iC(i0)
	}, this.o5 = function(i0) {
		return 208 <= o2[i0 + 3] && o2[i0 + 3] < 224
	}, this.o6 = function(i0) {
		return 224 <= o2[i0 + 3] && o2[i0 + 3] < 248
	}, this.o7 = function(i0) {
		for (var j = 3; 0 <= j; j--)
			if (this.o8(i0 + nc[j])) return !0;
		return !1
	}, this.o9 = function(i0) {
		return 192 <= o2[i0 + 3] && o2[i0 + 3] < 208
	}, this.oA = function(i0, player) {
		return this.o9(i0) && player === this.iC(i0)
	}, this.jU = function(i0) {
		return this.o1(i0) || this.iB(i0)
	}, this.o8 = function(i0) {
		return 0 === o2[i0 + 3] && 2 === o2[i0 + 2]
	}, this.iB = function(i0) {
		return 0 === o2[i0 + 3] && 1 === o2[i0 + 2]
	}, this.nx = function(i0) {
		return 0 === o2[i0 + 3] && 3 === o2[i0 + 2]
	}, this.oB = function(i0) {
		return this.nx(i0)
	}, this.nz = function(i0, player) {
		return this.iB(i0) || this.o1(i0) && player !== this.iC(i0)
	}, this.iC = function(i0) {
		return o2[i0] % 4 * 128 + o2[i0 + 1] % 4 * 32 + o2[i0 + 2] % 4 * 8 + o2[i0 + 3] % 8
	}, this.oC = function(i0) {
		oD(i0, 1)
	}, this.oE = function(i0) {
		oD(i0, 2)
	}, this.oH = function(i0, player) {
		o2[i0] = nS[player], o2[i0 + 1] = nT[player], o2[i0 + 2] = nU[player], o2[i0 + 3] = 208 + nV[player], oG(i0)
	}, this.oI = function(i0, player) {
		o2[i0] = nW[player], o2[i0 + 1] = nX[player], o2[i0 + 2] = nY[player], o2[i0 + 3] = 224 + nV[player], oG(i0)
	}, this.oJ = function(i0, player) {
		o2[i0] = nZ[player], o2[i0 + 1] = na[player], o2[i0 + 2] = nb[player], o2[i0 + 3] = 248 + nV[player], oG(i0)
	}, this.oK = function(i0, player) {
		o2[i0] = nP[0] + nS[player] % 4, o2[i0 + 1] = nP[1] + nT[player] % 4, o2[i0 + 2] = nP[2] + nU[player] % 4, o2[i0 + 3] = 192 + nV[player], oG(i0)
	}
}

function oN() {
	this.oO = function(player, oP, co) {
		aL.j2.oQ(player, co, oP) && (eL.oR(player, oP), oP < ay.dc) && eC.random() < eC.value(10) && (oS[oP] = 0)
	}, this.oT = function(player, oP, co) {
		aL.j2.oU(co, oP) && (aL.j2.oV(oP, ca.ce[0]), eG.oW(player, oP), er.oX(oP, ca.ce[0]))
	}
}

function oY() {
	this.bA = function() {
		for (var i0, dW, s = ay.dc, oZ = mY.result.oZ, oa = oZ.length, oc = (hD.eR(40 + 16 * s + oa * (33 + 3 * (ay.dp < 7))), hD.hE(1, 1), hD.hE(4, 10), hD.hE(10, oa), hD.hE(1, +(2 === ay.du)), hD.hE(24, mY.result.ob), bV.oc), j = 0; j < s; j++)
			hD.hE(16, oc[j]);
		var bX = bV.bX;
		for (j = 0; j < oa; j++) i0 = oZ[j], hD.hE(9, i0), hD.hE(24, bX[i0]);
		if (ay.dp < 7)
			for (dW = dV.dW, j = 0; j < oa; j++) hD.hE(3, 7 & dW[oZ[j]]);
		b0.ba.send(b0.ba.od, hD.bG)
	}
}

function oe() {
	this.og = function() {
		aS.aT.ap(), aS.aT.ar(), b0.ba.close(0, 3255), 0 === bw.id ? bw.oh && bw.oh.clear() : 1 === bw.id ? bw.gj.saveString(199, "") : 2 === bw.id && bw.oi.postMessage("clear")
	}, this.oj = function() {
		2 === bw.id ? bw.oi.postMessage("showConsentForm") : 1 === bw.id ? bw.gj.setState(7) : f7.ok.showCMPScreen()
	}, this.ol = function() {
		this.setState(14)
	}, this.om = function() {
		var bv = aS.ai.on(101),
			max = ("string" != typeof(bv = "" === bv ? function() {
				{
					if (2 === bw.id) return bw.os.password;
					if (1 === bw.id) return 12 <= bw.ot ? bw.gj.loadString(22) : ""
				}
				return ou.ov(9)
			}() : bv) && (bv = ""), Math.floor(Math.pow(2, 48))),
			op = Math.floor(parseInt(oq.or(bv)));
		return 0 < op && op < max ? aS.ai.aj(101, bv) : (op = Math.floor(1 + (max - 1) * Math.random()), aS.ai.aj(101, bv)), op
	}, this.by = function() {
		return 1 === aS.ai.ow(2)
	}, this.ox = function() {
		aS.ai.aj(102, "")
	}, this.setState = function(oy) {
		1 === bw.id && 5 <= bw.ot && bw.gj.setState(oy)
	}, this.oz = function() {
		var p0;
		1 === bw.id && 7 <= bw.ot ? bw.gj.setState(5) : ((p0 = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = p0.toString())
	}, this.p1 = function() {
		1 !== bw.id || bw.ot < 17 || bw.gj.saveString(23, document.documentElement.outerHTML)
	}, this.p2 = function() {
		0 === bw.id ? f7.ok.aB() : 1 === bw.id ? bw.gj.prepareAd("1688441405") : 2 === bw.id && (0 === bw.ot ? bw.oi.postMessage("prepare ad 4500876070") : bw.oi.postMessage("loadAds 4500876070"))
	}, this.p3 = function(c3) {
		return 0 === bw.id ? !!f7.ok.p4() : 1 === bw.id ? 12 <= bw.ot && (bw.gj.presentAd(c3), !0) : 2 === bw.id && (0 === bw.ot ? bw.oi.postMessage("show ad " + c3) : bw.oi.postMessage("showAd"), !0)
	}, this.p5 = function() {
		2 === bw.id && bw.ot < 23 && ak.am(4, 1, new p6("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + ju.p7 + "' target='_blank'>" +
			ju.p7 + "</a>", !0, [new a5("❌ " + aP.aQ[92], function() {
				ak.am(0)
			}, aC.p8)]))
	}
}

function p9() {
	this.pA = function(ij, pB, pC) {
		var aZ = ij.width,
			aa = ij.height,
			aJ = aL.ab.pD(aZ, aa),
			k7 = aL.ab.getContext(aJ, !0),
			ij = (k7.drawImage(ij, 0, 0), k7.getImageData(0, 0, aZ, aa));
		return pB(ij.data, aZ, aa, pC), k7.putImageData(ij, 0, 0), aJ
	}, this.pE = function(kp, aZ, aa) {
		for (var k = aZ - 1; 0 <= k; k--)
			for (var l = aa - 1; 0 <= l; l--) {
				var j = 4 * (k + l * aZ);
				kp[3 + j] = kp[j], kp[j] = kp[1 + j] = kp[2 + j] = 255
			}
	}, this.pF = function(kp, aZ, aa) {
		for (var k = aZ - 1; 0 <= k; k--)
			for (var l = aa - 1; 0 <= l; l--) {
				var j = 4 * (k + l * aZ);
				kp[1 + j] > kp[2 + j] + 10 && (kp[3 + j] = kp[j], kp[1 + j] = kp[2 + j])
			}
	}, this.pG = function(kp, aZ, aa, pC) {
		for (var gap = Math.floor(Math.min(aZ, aa) * pC), k = 0; k < aZ; k++)
			for (var j, l = 0; l < aa; l++)(k < gap || l < gap || aZ - gap <= k || aa - gap <= l) && (kp[3 + (j = 4 * (k + l * aZ))] = 255 - 255 * (kp[1 + j] - kp[j]) / (255 - kp[j]))
	}, this.pH = function(kp, aZ, aa, pC) {
		for (var k = aZ - 1; 0 <= k; k--)
			for (var l = aa - 1; 0 <= l; l--) {
				var j = 4 * (k + l * aZ);
				kp[j] = pC[0], kp[1 + j] = pC[1], kp[2 + j] = pC[2]
			}
	}, this.pI = function(kp, aZ, aa, pC) {
		for (var gap = Math.floor(aZ * pC), k = 0; k < aZ; k++)
			for (var j, l = 0; l < aa; l++)(k < gap || l < gap || aZ - gap <= k || aa - gap <= l) && (kp[j = 4 * (k + l * aZ)] = kp[1 + j] = kp[2 + j] = 0)
	}, this.pJ = function(kp, aZ, aa) {
		for (var l, j, k = aZ - 1; 0 <= k; k--)
			for (l = aa - 1; 0 <= l; l--) 200 < kp[1 + (j = 4 * (k + l * aZ))] && kp[1 + j] - 20 > kp[j] && kp[1 + j] - 20 > kp[2 + j] ? kp[j] + kp[2 + j] < 40 ? kp[3 + j] = 0 : (kp[3 + j] = kp[j], kp[j] = 255, kp[1 + j] = 255, kp[2 + j] = 255) :
				kp[j] < 50 && kp[1 + j] < 50 && kp[2 + j] < 50 && (kp[j] + kp[1 + j] + kp[2 + j] < 50 ? kp[3 + j] = 180 : kp[3 + j] = 180 + Math.floor(75 * (kp[j] + kp[1 + j] + kp[2 + j] - 50) / 100))
	}, this.pK = function(kp, aZ, aa) {
		for (var l, j, k = aZ - 1; 0 <= k; k--)
			for (l = aa - 1; 0 <= l; l--) kp[1 + (j = 4 * (k + l * aZ))] > kp[j] + 20 && kp[1 + j] > kp[2 + j] + 20 && kp[j] + kp[2] < 40 && (kp[3 + j] = 255 - kp[1 + j], kp[j] = kp[1 + j] = kp[2 + j] = kp[j])
	}, this.pL = function(kp, aZ, aa, pC) {
		for (var jR = aZ >> 1, k = 0; k < aZ; k++)
			for (var l = 0; l < aa; l++) Math.sqrt((k - jR) * (k - jR) + (l - jR) * (l - jR)) > pC * jR && (kp[4 * (k + l * aZ) + 3] = 0)
	}
}

function pM() {
	var k, l, aa, pN, pO, pP, pQ, pR, pS, aZ, pT, pU;
	this.fQ = !1, this.aB = function(bv, pV) {
		if (1 === bw.id && 13 <= bw.ot && bw.ot < 18) return pV ? void(pT = bv) : pT !== bv ? void 0 : void bw.gj.saveString(200, bv);
		pV && (pT = bv, (pU = document.createElement("a")).appendChild(document.createTextNode(pT)), this.fQ = !0, pU.title = pT, pU.target = "_blank", pU.href = pT, pU.style.textAlign = "center", pU.style.color = aC.aD, pU.style.position =
			"absolute", pU.style.padding = "0px", pU.style.margin = "0px", this.resize(), document.body.appendChild(pU), c0.c1 = !0)
	}, this.fb = function() {
		return !(!this.fQ || (document.body.removeChild(pU), this.fQ = !1))
	}, this.fW = function(iG, iH) {
		return !!this.fQ && ((iG < k || iH < l || k + aZ < iG || l + aa < iH || k + aZ - pN < iG && iH < l + pN) && (c0.c1 = !0, this.fQ = !1, document.body.removeChild(pU)), !0)
	}, this.resize = function() {
		var li, pX;
		this.fQ && (pR = Math.floor(.8 * (bw.bx.by() ? ad.aZ > ad.aa ? .6 : .55 : .4) * ad.ae), pN = Math.floor(.15 * pR), pO = Math.floor(.35 * pN), pP = Math.floor(.5 * pN), pQ = Math.floor(2.5 * pP), aa = pN + pO + 3 * pP, li = aL.ab.bz(1,
			pO / ad.pW), pS = Math.floor(ad.pW * c7.measureText(pT, li)), pX = aZ = (pR < pS ? pS : pR) + 2 * pQ, aZ = Math.min(aZ, ad.aZ - 2 * (bw.bx.by() ? 2 : 1) * af.gap), li = aL.ab.bz(1, aZ / pX * pO / ad.pW), pS = Math.floor(ad
			.pW * c7.measureText(pT, li)), k = Math.floor((ad.aZ - aZ) / 2), l = Math.floor((ad.aa - aa) / 2), pU.style.font = li, pU.style.top = Math.floor((l + 1.4 * pP + pN) / ad.pW) + "px", pU.style.left = Math.floor((k + (aZ - pS) /
			2) / ad.pW) + "px")
	}, this.c9 = function() {
		this.fQ && (cA.fillStyle = aC.fr, cA.fillRect(k, l + pN, aZ, aa - pN), cA.fillStyle = aC.pY, cA.fillRect(k, l, aZ, pN), cA.fillStyle = aC.aD, cA.lineWidth = af.k5, cA.strokeStyle = aC.aD, cA.strokeRect(k, l, aZ, aa), cA.fillRect(k, l +
			pN, aZ, af.k5), cA.font = aL.ab.bz(1, .48 * pN), aL.ab.textAlign(cA, 1), aL.ab.textBaseline(cA, 1), cA.fillText("You are leaving Territorial.io!", Math.floor(k + (aZ - .5 * pN) / 2), Math.floor(l + .55 * pN)), ei.g0(Math
			.floor(k + aZ - .8 * pN), Math.floor(l + .25 * pN), Math.floor(.5 * pN)), cA.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function pZ() {
	var a3 = 0,
		gM = c0.gM;
	this.pa = 0, this.bF = function() {
		ad.bF(), ay.dl ? pb() : 0 === a3 ? c0.gM >= gM && (gM += c0.gN * Math.floor(1 + (c0.gM - gM) / c0.gN), 2 === ay.di || ei.fA ? pc() : (pd(), eK.pe()), a3++) : ((ei.fA ? pb : (c0.c1 = !0, pf))(), a3 = 0), pg(), c0.c1 && (c0.c1 = !1, ph())
	}
}

function pi() {
	this.pj = new pk, this.cp = new pl, this.pm = new pn, this.ba = new cG, this.cf = new po, this.pp = new pq, this.cj = new pr, this.nL = new j1, this.jD = new ps, this.aB = function() {
		this.pm.aB(), this.ba.aB(), this.cf.aB(), this.pp.aB()
	}
}
var ff, fe, fh, a9u, mo, rx, rs, bd, aCP, a7G, aCQ, aCb, a7M, a7E, aCn, a7F, aCo, aCp, a1P, aCq, aCO, xP, cA, aAr, ay, eP, en, eo, em, f0, eS, oq, ek, ei, aw, a6d, ej, c7, ed, ec, vp, eg, eb, eh, el, lJ, y4, cB, eA, iw, eN, ou, eq, eL, er, bV, a3h,
	eQ, h4, eI, z, xt, n5, eO, xf, ez, cD, aGf, ef, vc, ad, eC, eE, b0, ev, aFE, et, es, eu, gX, e4, aP, bg, eU, aL, aC, ee, hD, hO, un, bJ, aGg, xi, ju, d4, cY, bZ, ca, eX, eW, mY, b, xm, ak, f7, aGh, a6e, aF2, oM, eK, af, eG, eY, c0, dV, eV, bw,
	uV, aS, qT, a9p, aGi, aG9, aG7, aG8, oS, aDx, o2, eZ, ea, pt = [60, 74, 112, 200, 256, 512];

function pu() {
	var jw, pv, pw, px, py, pz;

	function q9(j) {
		jw[j] = 1 + a4(py[j] * eC.random(), 10 * eC.value(100))
	}
	this.q0 = ["Very Easy", "Easy", "Normal", "Hard", "Harder", "Very Hard"], this.q1 = [97, 95, 93, 90, 87, 84], this.q2 = [98, 95, 70, 40, 20, 0], this.q3 = [85, 70, 50, 30, 7, 3], this.q4 = [0, 0, 5, 25, 50, 90], this.co = null, this.aB =
		function() {
			var j, q5;
			if (jw = new Uint8Array(ay.de), pv = new Uint16Array(ay.de), pw = new Uint16Array(ay.de), px = new Uint8Array(ay.de), this.co = new Uint8Array(ay.de), py = new Uint16Array(ay.de), pz = new Uint16Array(ay.de), e4.e5) {
				if (e4.e6.q6)
					for (j = ay.de - 1; 0 <= j; j--) this.co[j] = e4.e6.q6[j + 1]
			} else if (9 === ay.dp) this.q7();
			else if (ay.bB)
				if (ay.dT)
					for (j = ay.de - 1; 0 <= j; j--) this.co[j] = eA.q8[dV.dW[j + ay.dc] - 1].d0;
				else
					for (j = ay.de - 1; 0 <= j; j--) this.co[j] = eA.q8[0].d0;
			else
				for (q5 = 8 === ay.dp ? 1 : 0, j = ay.de - 1; 0 <= j; j--) this.co[j] = q5;
			for (j = ay.de - 1; 0 <= j; j--) this.co[j] <= 2 ? (px[j] = 5, py[j] = pz[j] = 1040, 0 === this.co[j] ? (pv[j] = 1e3, pw[j] = 1e3) : 1 === this.co[j] ? (pv[j] = 1e3, pw[j] = 920, py[j] = pz[j] = 1100) : (pv[j] = 825, pw[j] = 750)) : this
				.co[j] <= 4 ? (px[j] = 1 + eC.h1(20), 3 === this.co[j] ? (pv[j] = pw[j] = 500, py[j] = pz[j] = 1e3) : (pz[j] = 250 + eC.h1(1501), py[j] = 500 + eC.h1(501), pv[j] = 300 + eC.h1(201), pw[j] = 100 + eC.h1(201))) : (py[j] = 1e3, pz[j] =
					1e3, px[j] = 35 + eC.h1(16), pv[j] = 300 + eC.h1(201), pw[j] = 50 + eC.h1(101)), q9(j)
		}, this.q7 = function() {
			for (var j, g4 = 0, d9 = 0; d9 < 6; d9++) {
				for (j = g4 + eE.gv[d9] - 1; g4 <= j; j--) this.co[j] = d9;
				g4 += eE.gv[d9]
			}
		}, this.qA = function(qB, value) {
			0 <= qB && (jw[qB] = value)
		}, this.bF = function(qB) {
			0 == --jw[qB] && ! function(qB) {
				! function(qB) {
					py[qB] !== pz[qB] && (py[qB] += py[qB] < pz[qB] ? 3 : -3);
					pv[qB] !== pw[qB] && (pv[qB] += pv[qB] < pw[qB] ? px[qB] : -px[qB], pv[qB] = (Math.abs(pv[qB] - pw[qB]) <= px[qB] ? pw : pv)[qB]);
					jw[qB] = a4(py[qB], 10)
				}(qB);
				var player = qB + ay.dc;
				qE(player, a4(pv[qB] * bV.bY[player], 1e3))
			}(qB)
		}
}

function qF() {
	this.qG = null, this.c1 = !1, this.gM = 0, this.gN = 56;
	var qH = 0;

	function qI() {
		c0.gM = qH = performance.now(), c0.qG.bF(), window.requestAnimationFrame(qI)
	}
	this.aB = function() {
		this.f6(), window.requestAnimationFrame(qI), this.gM = performance.now()
	}, this.ex = function() {
		ay.bC ? (this.qG = new qJ, this.qG.aB()) : ay.bB ? this.qG = new pZ : (this.qG = new qK, this.qG.aB())
	}, this.f6 = function() {
		this.qG = new qL, this.c1 = !0
	}, this.bF = function() {
		this.qG.pa++
	}, this.ci = function() {
		return this.qG.pa
	}, this.qM = function() {
		var c3 = performance.now();
		c3 < qH + 1e3 || (this.gM = c3, this.qG.bF())
	}
}

function qN() {
	var aZ, k, qO, ij, iv, fQ, iQ, qP, li, ll, qQ = 11 / 12;

	function qS() {
		var qW = Math.floor(iQ * (aZ - 2 * qO)),
			qX = 1 + Math.floor(.0625 * ed.aa),
			qY = 1 + Math.floor(.3 * ed.aa),
			fI = Math.floor(.55 * ed.aa);
		iv.clearRect(0, 0, aZ, ed.aa), iv.fillStyle = aC.aF, iv.fillRect(0, 0, qO, ed.aa), iv.fillRect(qO + qW, 0, aZ - qO - qW, ed.aa), iv.fillStyle = iQ < 1 / 3 ? "rgba(" + Math.floor(3 * iQ * 130) + ",130,0,0.85)" : iQ < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (iQ - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (iQ - 2 / 3) * 130) + ",0.85)", iv.fillRect(qO, 0, qW, ed.aa), iv.fillStyle = aC.aD, iv.fillRect(0, 0, aZ, 1), iv.fillRect(0, ed.aa - 1, aZ, 1),
			iv.fillRect(0, 0, 1, ed.aa), iv.fillRect(qO, 0, 1, ed.aa), iv.fillRect(qO + qW, 0, 1, ed.aa), iv.fillRect(aZ - qO, 0, 1, ed.aa), iv.fillRect(aZ - 1, 0, 1, ed.aa), iv.fillRect(Math.floor(.25 * ed.aa) + qY, Math.floor((ed.aa - qX) / 2), ed
				.aa - 2 * qY, qX), iv.fillRect(Math.floor(aZ - 1.25 * ed.aa) + qY, Math.floor((ed.aa - qX) / 2), ed.aa - 2 * qY - qY % 2, qX), iv.fillRect(Math.floor(aZ - 1.25 * ed.aa) + Math.floor((ed.aa - qX) / 2), qY, qX, ed.aa - 2 * qY - qY % 2),
			qP = aL.j2.iP(ay.az, ed.qZ()), iv.fillText(aL.fm.fn(qP) + " (" + aL.fm.fo(100 * iQ, +(iQ < .1)) + ")", Math.floor(.5 * aZ), fI)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		iQ = newPercentage;
	};
	keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	keybindFunctions.setRelative = (arg1) => ed.qk(arg1);

	function qi(t) {
		return !(1 < t && 1 === iQ || (1 < t && t * iQ - iQ < 1 / 1024 ? t = (iQ + 1 / 1024) / iQ : t < 1 && iQ - t * iQ < 1 / 1024 && (t = (iQ - 1 / 1024) / iQ), iQ = d4.k3(iQ * t, 1 / 1024, 1), qS(), 0))
	}

	function qj(fX) {
		return iQ !== (iQ = d4.k3((fX - k - qO) / (aZ - 2 * qO), 1 / 1024, 1)) && (qS(), !0)
	}
	this.l = 0, this.qR = !1, this.aB = function() {
		fQ = !ay.dl && !ay.bC, ll = !1, iQ = .5, qP = 0, this.qR = !1, this.resize()
	}, this.resize = function() {
		bw.bx.by() && ad.aZ < .8 * ad.aa ? (this.aa = Math.floor(.0536 * ad.ae), aZ = ad.aZ - 4 * af.gap - this.aa) : (aZ = Math.floor((bw.bx.by() ? .65 : .389) * ad.ae), aZ += 12 - aZ % 12, this.aa = Math.floor(aZ / 12)), qO = Math.floor(3 *
			this.aa / 2), li = aL.ab.bz(1, Math.floor(.5 * this.aa)), (ij = document.createElement("canvas")).width = aZ, ij.height = this.aa, (iv = ij.getContext("2d", {
			alpha: !0
		})).font = li, aL.ab.textBaseline(iv, 1), aL.ab.textAlign(iv, 1), this.ls(), qS()
	}, this.ls = function() {
		k = bw.bx.by() && ad.aZ < .8 * ad.aa ? this.aa + 3 * af.gap : Math.floor((ad.aZ - aZ) / 2), this.l = ad.aa - this.aa - qT.qU() * af.gap
	}, this.f2 = function() {
		ll && (ll = !1, qS())
	}, this.fQ = function() {
		return !(!fQ || ei.fA && k < Math.floor(af.gap + 5.5 * this.aa))
	}, this.qa = function(qb) {
		return !!this.fQ() && k + aZ > ad.aZ - qb - af.gap
	}, this.qc = function() {
		fQ = !ay.bC
	}, this.it = function() {
		fQ = !1
	}, this.qZ = function() {
		return d4.k3(Math.floor(1024 * iQ + .5) - 1, 0, 1023)
	}, this.qd = function(fX, fY) {
		return this.fQ() && k < fX && fX < k + aZ && fY > this.l
	}, this.fW = function(fX, fY) {
		return !!this.fQ() && !!ed.qd(fX, fY) && (ec.qg = !1, function(cn, fX, fY) {
			if (function(fX, fY) {
					return k < fX && fX < k + qO && fY > ed.l
				}(fX, fY)) return qi(qQ);
			if (function(fX, fY) {
					return k + aZ - qO < fX && fX < k + aZ && fY > ed.l
				}(fX, fY)) return qi(1 / qQ);
			return cn.qR = !0, qj(fX)
		}(this, fX, fY) && (c0.c1 = !0), !0)
	}, this.qk = function(ql) {
		0 !== ay.di && this.fQ() && qi(ql) && (c0.c1 = !0)
	}, this.qm = function(deltaY) {
		var ql;
		return !(0 === deltaY || !this.fQ()) && qi(ql = 0 < deltaY ? (ql = 400 / (400 + deltaY)) < qQ ? qQ : ql : 1 / qQ < (ql = (400 - deltaY) / 400) ? 1 / qQ : ql)
	}, this.fi = function(fX) {
		return !!this.qR && qj(fX)
	}, this.qn = function() {
		this.qR = !1
	}, this.bF = function() {
		this.fQ() && qP !== aL.j2.iP(ay.az, this.qZ()) && (ll = !0)
	}, this.c9 = function() {
		this.fQ() && cA.drawImage(ij, k, this.l)
	}
}

function qo(data) {
	var qp, qq, qr;

	function qt(hy) {
		var hB = hy < 0 ? parseInt(data.data[0][0]) - 1 + hy : parseInt(data.data[data.data.length - 1][0]);
		ak.am(8, 0, new qy(21, {
			hA: data.hA,
			hB: hB,
			hC: hB + Math.abs(hy) - 1
		}))
	}
	this.show = function() {
		qp.show(), this.resize()
	}, this.fb = function() {
		qp.fb()
	}, this.resize = function() {
		qp.resize(), qq.resize()
	}, this.qz = function(aJ) {
		2 === aJ && qp.r0[0].a9()
	}, qr = [new a5("❌ " + aP.aQ[92], function() {
		ak.qs()
	}), new a5("⬆️ Prev 100 (🧈 1.01)", function() {
		qt(-100)
	}), new a5("⬆️ Prev 10 (🧈 0.11)", function() {
		qt(-10)
	}), new a5("⬇️ Next 10 (🧈 0.11)", function() {
		qt(10)
	}), new a5("⬇️ Next 100 (🧈 1.01)", function() {
		qt(100)
	}), new a5("🛠️ Custom", function() {
		ak.am(11, 10, new qu({
			hA: data.hA
		}))
	})], qp = new qv(data.title, qr), qq = new qw(qp.qx, data.data)
}

function r1() {
	var r2, r3, r4, r5, r6, r7, r8, r9, rA, rB, rC, rD, rE, rF, rG, rH, rI, rJ, rL, rM, rN, rO, rP, rV, rW, rK = null,
		rR = 0,
		rS = !1,
		rT = new Float32Array(4),
		rU = 0,
		rX = 400;

	function rY() {
		rA = Math.floor(+ad.ae), rB = Math.floor(.5 * rA), rK.width = ad.aZ, rK.height = ad.aa, rL = rK.getContext("2d", {
			alpha: !0
		}), aL.ab.textAlign(rL, 1), aL.ab.textBaseline(rL, 1), rL.imageSmoothingEnabled = !0
	}

	function rZ() {
		var j, rg;
		for (cA.font = aL.ab.bz(1, 100 * rC), rg = 80 / Math.floor(cA.measureText(aL.fm.fn(ay.dY)).width), cA.font = aL.ab.bz(1, 100), j = ay.cU - 1; 0 <= j; j--) r9[j] = 100 / Math.floor(cA.measureText(bV.mU[j]).width), r8[j] = Math.min(rg, r9[j])
	}

	function rh(j) {
		return !aS.ai.data[7].value || bV.bY[j] < 1e6 ? 1 : bV.bY[j] < 1e7 ? rT[0] : rT[Math.min(Math.floor(Math.log10(bV.bY[j])) - 6, 3)]
	}

	function rf(k7) {
		rJ = !1, rI = 1, rG = rH = 0, k7.clearRect(0, 0, ad.aZ, ad.aa);
		for (var nE, nF, j, rq, fontSize, nG, dH = fe / ff, dI = fh / ff, gQ = (ad.aZ + fe) / ff, gR = (ad.aa + fh) / ff, rr = 0 !== bV.bW[ay.az] && eN.o0(ay.az), jy = bd - 1; 0 <= jy; jy--) j = rs[jy], (fontSize = Math.floor(rF * ff * rh(j) * r8[
			j] * r6[j])) < rE || rA <= fontSize || r4[j] + r6[j] > dH && r4[j] < gQ && r5[j] + r7[j] > dI && r5[j] < gR && (nE = Math.floor(ad.aZ * (r4[j] + r6[j] / 2 - dH) / (gQ - dH)), nF = Math.floor(ad.aa * (r5[j] + r7[j] / 2 - dI) / (gR -
			dI) - .1 * fontSize), rq = eN.nh[j], k7.font = aL.ab.bz(1 === bV.ly[j] ? 4 : 1, fontSize), k7.fillStyle = rt(fontSize, rq % 2), aS.ai.data[7].value ? ru(k7, j, fontSize, nE, nF, rq) : rv(j, fontSize, nE, nF, k7), rJ = !0, 0 < rN[
			j] ? function(nE, nF, fontSize, j, k7) {
			0 === rx[j] ? h4.h5.rl(rM[j]) ? (function(nE, nF, fontSize, player, av, k7) {
					for (var fa = nF, fU = (k7.globalAlpha = s4(fontSize), rh(player) * (aS.ai.data[7].value ? rU : r9[player])), fZ = nE - .5 * fontSize / fU - .9 * fontSize, d9 = 0; d9 < 2; d9++) k7.fillText(h4.h5.k8(av), fZ, fa), fZ =
						nE + .5 * fontSize / fU + .9 * fontSize;
					k7.globalAlpha = 1
				}(nE, nF, fontSize, j, rM[j], k7), ry(nE, nF, fontSize, 0, 0, k7)) : h4.h5.s7(rM[j]) ? (s8(nE, nF, fontSize, rM[j], 0, k7), ry(nE, nF, fontSize, 0, 1, k7)) : (s8(nE, nF, fontSize, rM[j], 1, k7), ry(nE, nF, fontSize, 1, 0,
				k7)) : s8(nE, nF, fontSize, rM[j], 0, k7)
		}(nE, nF, fontSize, j, k7) : 0 === rx[j] && ry(nE, nF, fontSize, 0, 0, k7), rr && (0 < rN[j + ay.cU] || 0 < rN[j + 2 * ay.cU] || 0 < rN[j + 3 * ay.cU] || 0 < rN[j + 4 * ay.cU]) && function(nE, nF, fontSize, j, k7) {
			var aJ, h0 = -1;
			for (aJ = 4; 1 <= aJ; aJ--) 0 < rN[j + aJ * ay.cU] && h0++;
			for (aJ = 1; aJ < 5; aJ++) 0 < rN[j + aJ * ay.cU] && (! function(nE, nF, fontSize, aJ, j, s2, c3, k7) {
				var kq;
				if (1 === aJ) {
					j = rM[j + ay.cU];
					if (!h4.h5.s9(j)) return function(nE, nF, fontSize, av, s2, k7) {
						k7.globalAlpha = s4(fontSize);
						nE -= .534 * s2 * fontSize, s2 = nF + 1.59 * fontSize;
						k7.font = aL.ab.bz(0, .785 * fontSize), k7.fillText(h4.h5.k8(av), nE, s2), k7.globalAlpha = 1
					}(nE, nF, fontSize, j, s2, k7);
					kq = h4.kp.ja[j - 1024 + h4.h5.jp]
				} else kq = 2 === aJ ? ek.sB()[4].ij[+(c3 < 255)] : (3 === aJ ? ek.sB()[5] : ek.sB()[6]).ij[0];
				j = h4.kp.jb, c3 = .8 * fontSize / j, aJ = nE - .5 * c3 * j - .534 * s2 * fontSize, nE = nF + 1.4 * c3 * j;
				k7.setTransform(c3, 0, 0, c3, aJ, nE), k7.globalAlpha = s4(fontSize), k7.drawImage(kq, 0, 0), k7.globalAlpha = 1, k7.setTransform(1, 0, 0, 1, 0, 0)
			}(nE, nF, fontSize, aJ, j, h0, rN[j + aJ * ay.cU], k7), h0 -= 2)
		}(nE, nF, fontSize, j, k7), (nG = rC * fontSize) < rE || (k7.font = aL.ab.bz(1, nG), nF += Math.floor(.78 * fontSize), aS.ai.data[7].value ? rv(j, nG, nE, nF, k7) : ru(k7, j, nG, nE, nF, rq)))
	}

	function rv(j, fontSize, k, l, k7) {
		var ___id = j;
		k7.fillText(bV.mU[j], k, l), j < ay.dc && 2 !== bV.ly[j] || (j = fontSize / r9[j], k7.fillRect(k - .5 * j, l + aL.ab.k9 * fontSize, j, Math.max(1, .1 * fontSize)));
		aS.ai.data[7].value && settings.showPlayerDensity && (settings.coloredDensity && (k7.fillStyle = utils.textStyleBasedOnDensity(___id)), k7.fillText(utils.getDensity(___id), k, l + fontSize));
	}

	function ru(k7, j, fontSize, nE, nF, rq) {
		var ___id = j;
		j = aL.fm.fn(bV.bY[j]);
		rq >> 1 & 1 ? (k7.lineWidth = .05 * fontSize, k7.strokeStyle = rt(fontSize, rq % 2), k7.strokeText(j, nE, nF)) : (1 < rq && (k7.lineWidth = .12 * fontSize, k7.strokeStyle = rt(fontSize, rq), k7.strokeText(j, nE, nF)), k7.fillText(j, nE, nF));
		aS.ai.data[7].value || settings.showPlayerDensity && (settings.coloredDensity && (k7.fillStyle = utils.textStyleBasedOnDensity(___id)), k7.fillText(utils.getDensity(___id), nE, nF + fontSize))
	}

	function ry(nE, nF, fontSize, s2, s3, k7) {
		var iz = .95 * fontSize / rP,
			nE = nE - .5 * iz * rO + .8 * s2 * fontSize,
			s2 = nF - 1.76 * iz * rP - (.35 - aL.ab.k9 + .7) * s3 * fontSize;
		k7.setTransform(iz, 0, 0, iz, nE, s2), k7.globalAlpha = s4(fontSize), k7.drawImage(iw.get(4), 0, 0), k7.globalAlpha = 1, k7.setTransform(1, 0, 0, 1, 0, 0)
	}

	function s8(nE, nF, fontSize, av, s2, k7) {
		var jW, fZ, iz;
		k7.globalAlpha = s4(fontSize), h4.h5.s9(av) ? (jW = h4.kp.jb, k7.setTransform(iz = 1.1 * fontSize / jW, 0, 0, iz, fZ = nE - .5 * iz * jW - .8 * s2 * fontSize, iz = nF - 1.55 * iz * jW), k7.drawImage(h4.kp.ja[av - 1024 + h4.h5.jp], 0, 0), k7
			.setTransform(1, 0, 0, 1, 0, 0)) : (fZ = nE - .8 * s2 * fontSize, iz = nF - (.35 - aL.ab.k9 + 1) * fontSize, k7.fillText(h4.h5.k8(av), fZ, iz)), k7.globalAlpha = 1
	}

	function rt(fontSize, rq) {
		return rB <= fontSize && fontSize < rA ? dV.sC[rq] + s4(fontSize).toFixed(3) + ")" : dV.sD[rq]
	}

	function s4(fontSize) {
		return rB <= fontSize && fontSize < rA ? 1 - (fontSize - rB) / (rA - rB) : 1
	}

	function sQ(fU, aZ) {
		return 1 + Math.floor(rD * fU * aZ)
	}

	function sN(j) {
		for (var left = r4[j], jy = r4[j] - bV.jI[j] - 1; 0 <= jy; jy--)
			if (!sS(j, --left, r5[j], r7[j])) {
				left++;
				break
			} var right = r4[j];
		for (jy = bV.jK[j] - r4[j] - r6[j]; 0 <= jy; jy--)
			if (!sS(j, ++right + r6[j] - 1, r5[j], r7[j])) {
				right--;
				break
			} var k = Math.floor((left + right) / 2),
			top = r5[j];
		for (jy = r5[j] - bV.jJ[j] - 1; 0 <= jy; jy--)
			if (!sT(j, k, --top, r6[j])) {
				top++;
				break
			} var bottom = r5[j];
		for (jy = bV.jL[j] - r5[j] - r7[j]; 0 <= jy; jy--)
			if (!sT(j, k, ++bottom + r7[j] - 1, r6[j])) {
				bottom--;
				break
			} var l = Math.floor((top + bottom) / 2);
		sK(j, k, l, r6[j], r7[j]) && (r4[j] = k, r5[j] = l)
	}

	function sK(player, k, l, aZ, aa) {
		d0 = Math.floor(.2 * aZ);
		for (var d0, aJ = k + aZ - 1; k <= aJ; aJ--)
			if (!sS(player, aJ, l, aa)) return;
		for (aJ = l + aa - 1 - (d0 = (d0 = Math.floor(.25 * aa)) < 1 ? 1 : d0); l + d0 <= aJ; aJ--)
			if (!sT(player, k, aJ, aZ)) return;
		return 1
	}

	function sS(player, k, l, aa) {
		return eN.o3(player, 4 * (l * b.o + k)) && eN.o3(player, 4 * ((l + aa - 1) * b.o + k))
	}

	function sT(player, k, l, aZ) {
		return eN.o3(player, 4 * (l * b.o + k)) && eN.o3(player, 4 * (l * b.o + k + aZ - 1))
	}
	this.aB = function() {
		if (rX = 0 === (rX = aS.ai.data[11].value) ? 280 : 1 === rX ? 187 : 112, rJ = !1, rF = .88, rC = .5, rD = 1.8, rE = 12 - 3 * aS.ai.data[9].value, r3 = r2 = 0, r4 = new Uint16Array(ay.cU), r5 = new Uint16Array(ay.cU), r6 = new Uint16Array(
				ay.cU), r7 = new Uint16Array(ay.cU), r8 = new Float32Array(ay.cU), r9 = new Float32Array(ay.cU), rM = new Uint16Array(2 * ay.cU), rN = new Uint8Array(5 * ay.cU), rV = new Uint8Array(ay.cU), rW = new Uint8Array(ay.cU), rK = rK ||
			document.createElement("canvas"), rY(), rH = rG = 0, rI = 1, aS.ai.data[7].value) {
			var j, rg;
			for (rZ(), cA.font = aL.ab.bz(1, 100), rg = 100 / Math.floor(cA.measureText("900 000").width), j = ay.cU - 1; 0 <= j; j--) r8[j] = Math.min(rg, 2 * r9[j]);
			rU = rg, rT[0] = 100 / (rg * Math.floor(cA.measureText("5 000 000").width)), rT[1] = 100 / (rg * Math.floor(cA.measureText("50 000 000").width)), rT[2] = 100 / (rg * Math.floor(cA.measureText("500 000 000").width)), rT[3] = 100 / (
				rg * Math.floor(cA.measureText("1 000 000 000").width))
		} else rZ();
		! function() {
			var j;
			for (j = ay.cU - 1; 0 <= j; j--) bV.bX[j] < 12 ? (r4[j] = bV.jI[j] + 1, r5[j] = bV.jJ[j] + 1, r6[j] = 1, r7[j] = 1) : (r4[j] = bV.jI[j], r5[j] = bV.jJ[j] + 1, r6[j] = 4, r7[j] = 2);
			if (ay.dl)
				for (j = 0; j < ay.dc; j++) r6[j] = 0;
			rO = iw.get(4).width, rP = iw.get(4).height
		}()
	}, this.rc = function(i0, rd) {
		rd > 18 * bV.bX[i0] ? (rW[i0] = 6, eN.nh[i0] = 2 + eN.nh[i0] % 2) : (rV[i0] = 4, (eN.nh[i0] < 2 || 3 < eN.nh[i0]) && (eN.nh[i0] = 6 + eN.nh[i0] % 2))
	}, this.oX = function(i0, rd) {
		rd > 6 * bV.bX[i0] ? (rW[i0] = 6, eN.nh[i0] = 4 + eN.nh[i0] % 2) : (rV[i0] = 4, (eN.nh[i0] < 4 || 5 < eN.nh[i0]) && (eN.nh[i0] = 8 + eN.nh[i0] % 2))
	}, this.resize = function() {
		rY(), rf(rL)
	}, this.ri = function() {
		for (var j = 0; j < ay.dc; j++) bV.jK[j] - bV.jI[j] != 3 || bV.jL[j] - bV.jJ[j] != 3 ? (r4[j] = bV.jI[j] + (bV.jK[j] !== bV.jI[j] ? 1 : 0), r5[j] = bV.jJ[j], r6[j] = 1, r7[j] = 1) : (r4[j] = bV.jI[j], r5[j] = bV.jJ[j] + 1, r6[j] = 4, r7[
			j] = 2)
	}, this.h3 = function(player, a3, rj) {
		! function(player, a3, rj) {
			player += a3 * ay.cU;
			0 === a3 ? rM[player] === rj && 0 < rN[player] ? rN[player] = 0 : (rM[player] = rj, rN[player] = h4.h5.rl(rj) ? 255 : 64) : 1 === a3 ? (rN[player] = 64, rM[player] = rj) : rN[player] = rj
		}(player, a3, rj), 2 === ay.di && this.f2(!0)
	}, this.c9 = function() {
		rJ && (1 !== rI ? (cA.imageSmoothingEnabled = !0, cA.setTransform(rI, 0, 0, rI, 0, 0), cA.drawImage(rK, -rG / rI, -rH / rI), cA.setTransform(1, 0, 0, 1, 0, 0), cA.imageSmoothingEnabled = !1) : cA.drawImage(rK, -rG, -rH))
	}, this.rm = function(iI, iL) {
		rG += iI, rH += iL
	}, this.fi = function(iI, iL) {
		er.rm(iI, iL)
	}, this.zoom = function(t, fX, fY) {
		rI *= t, rG = (rG + fX) * t - fX, rH = (rH + fY) * t - fY
	}, this.f2 = function(ro) {
		return !(!rS && !ro && c0.gM < rR + (1 === rI && 0 === rG && 0 === rH && (ay.f9() || ay.dl || 2 === ay.di) ? 1e3 : rX) || (rS = !1, rR = c0.gM, rf(rL), 0))
	}, this.nH = function(j) {
		return rh(j) * r8[j]
	}, this.rp = function(player) {
		return r8[player]
	}, this.bF = function() {
		c0.ci() % 10 == 9 && (rS = ay.fC() && !ay.f9()), !ay.f9() && 4 <= ++r3 && function() {
			var j, jy, d9;
			for (r3 = 0, d9 = 4; 1 <= d9; d9--)
				for (jy = bd - 1; 0 <= jy; jy--) j = rs[jy] + d9 * ay.cU, 0 < rN[j] && rN[j] < 255 && rN[j]--;
			if (2 !== ay.di)
				for (jy = bd - 1; 0 <= jy; jy--) j = rs[jy], 0 < rN[j] && rN[j] < 255 && rN[j]--
		}();
		for (var s = Math.floor(.1 * bd), j = r2 + (s = bd < (s = s < 8 ? 8 : s) ? bd : s) - 1; r2 <= j; j--) ! function(j) {
			var fU = rh(j) * r8[j];
			0 < r6[j] && sK(j, r4[j], r5[j], r6[j], r7[j]) ? ! function(j) {
				for (var k, l, aZ, aa, g4 = !1, d9 = 0; d9 < 8; d9++) {
					if (aZ = r6[j] + 2, aa = r7[j] + 2, aZ > bV.jK[j] - bV.jI[j] + 1 || aa > bV.jL[j] - bV.jJ[j] + 1) return g4;
					if (k = r4[j] - 1, l = r5[j] - 1, !sK(j, k, l, aZ, aa)) return g4;
					r4[j] = k, r5[j] = l, r6[j] = aZ, r7[j] = aa, g4 = !0
				}
				return g4
			}(j) && function(j, fU) {
				for (var k, l, aZ, aa, g4 = !1, pX = r6[j], ql = 1 + Math.floor(.02 * pX), d9 = 1; d9 < 5; d9++) {
					if ((aZ = pX + d9 * ql) > bV.jK[j] - bV.jI[j] + 1) return g4;
					if ((aa = sQ(fU, aZ)) > bV.jL[j] - bV.jJ[j] + 1) return g4;
					k = bV.jI[j] + Math.floor(Math.random() * (bV.jK[j] - bV.jI[j] + 2 - aZ)), l = bV.jJ[j] + Math.floor(Math.random() * (bV.jL[j] - bV.jJ[j] + 2 - aa)), sK(j, k, l, aZ, aa) && (r4[j] = k, r5[j] = l, r6[j] = aZ, r7[j] =
						aa, g4 = !0)
				}
				return g4
			}(j, fU) && sN(j) : ! function(j, fU) {
				var aa, k = r4[j] + 1,
					l = r5[j] + 1,
					aZ = r6[j] - 2;
				for (;;) {
					if (aZ < 1) {
						r6[j] = 0;
						break
					}
					if (aa = sQ(fU, aZ), sK(j, k, l, aZ, aa)) return r4[j] = k, r5[j] = l, r6[j] = aZ, r7[j] = aa, 1;
					k++, l++, aZ -= 2
				}
				return
			}(j, fU) ? function(j, fU) {
				var k, l, aZ, aa, d9, bI, jO = bV.jK[j] - bV.jI[j] + 1,
					sR = Math.floor(.02 * jO);
				for (bI = -6 * (sR = sR < 1 ? 1 : sR), d9 = jO; bI <= d9; d9 -= sR)
					if (aa = sQ(fU, aZ = 0 < d9 ? d9 : 1), k = bV.jI[j] + Math.floor(Math.random() * (bV.jK[j] - bV.jI[j] + 2 - aZ)), l = bV.jJ[j] + Math.floor(Math.random() * (bV.jL[j] - bV.jJ[j] + 2 - aa)), sK(j, k, l, aZ, aa))
					return r4[j] = k, r5[j] = l, r6[j] = aZ, r7[j] = aa
			}(j, fU) : sN(j)
		}(rs[j % bd]);
		r2 = (r2 + s) % bd
	}, this.sG = function() {
		var j, i0, ht, hu;
		if (c0.ci() % 4 == 1)
			for (j = bd - 1; 0 <= j; j--) i0 = rs[j], eN.nh[i0] < 2 || ((ht = Math.max(rV[i0] - 1, 0)) === (hu = Math.max(rW[i0] - 1, 0)) ? 0 === ht && (eN.nh[i0] %= 2) : 0 === hu && eN.nh[i0] < 6 && (eN.nh[i0] += 4), rV[i0] = ht, rW[i0] = hu)
	}, this.sH = function(player) {
		var j = player + 2 * ay.cU,
			c3 = rN[j];
		return 0 < c3 && (aw.sI(50, player), rN[j] = 0, 255 === c3)
	}, this.sJ = function(player) {
		return 255 === rN[player + 2 * ay.cU]
	}
}

function ew() {
	this.e0 = null, this.aB = function(e0) {
		this.e0 = e0, aw.sU(this.e0)
	}, this.sV = function(sW) {
		var hy = (this.e0[sW].sX - this.e0[1 - sW].sX) / 10,
			hy = 8 / (1 + Math.pow(2, hy / 32)),
			hy = Math.floor(10 * hy + .5),
			sZ = this.sa(this.e0[sW].sX + hy + 1),
			hy = this.sa(this.e0[1 - sW].sX - hy);
		0 === sW ? aw.sc(this.e0, sZ, hy, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aw.sc(this.e0, hy, sZ, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.sa = function(sX) {
		return 16e3 <= (sX = sX < 0 ? 0 : 16e3 < sX ? 16e3 : sX) ? "Unknown" : (sX / 10).toFixed(1)
	}
}

function sd() {
	var se = null;
	this.k9 = 0, this.ao = function() {
		var y = aS.ai.data[5].value;
		se = "px " + y, "Trebuchet MS" !== y && (se += ", Trebuchet MS"), this.k9 = sf(32, 32, ["a", "b", "m"], 200, se)
	}, this.pD = function(aZ, aa) {
		var aJ = document.createElement("canvas");
		return aJ.width = aZ, aJ.height = aa, aJ
	}, this.getContext = function(ij, alpha) {
		return ij.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(iv, aZ, aa) {
		return iv.getImageData(0, 0, aZ, aa)
	}, this.bz = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + se : 1 === type ? "bold " + size + se : 2 === type ? "lighter " + size + se : 3 === type ? "italic " + size + se : 4 === type ? "oblique " + size + se : 5 === type ? "small-caps " +
			size + se : "small-caps bold " + size + se
	}, this.textAlign = function(k7, id) {
		k7.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(k7, id) {
		k7.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.sg = function(aR, code, color) {
		color = this.sh(af.si) + " solid " + (color || aC.aD);
		5 === (code = code || 5) ? aR.style.border = color : 4 === code ? aR.style.borderLeft = color : 2 === code ? aR.style.borderBottom = color : 6 === code ? aR.style.borderRight = color : aR.style.borderTop = color
	}, this.sj = function(aR, k, l, aZ, aa) {
		aR = aR.style;
		aR.left = this.sl(k), aR.top = this.sl(l), aR.width = this.sl(aZ), aR.height = this.sl(aa)
	}, this.ac = function(y) {
		return 1 + y * bw.bx.by()
	}, this.sm = function(ql, d2) {
		return ql * this.ac(void 0 === d2 ? .5 : d2) * ad.ae / ad.pW
	}, this.sn = function(ql, d2) {
		return ql * this.ac(void 0 === d2 ? .5 : d2) * ad.ae
	}, this.sh = function(y) {
		return y.toFixed(1) + "px"
	}, this.sl = function(y) {
		return this.so(y).toFixed(1) + "px"
	}, this.so = function(y) {
		return y / ad.pW
	}, this.sp = function(sq, sr) {
		for (var bv = "<ul>", s = sq.length, j = 0; j < s; j++) bv += "<li>" + sq[j] + ": <a href='" + sr[j] + "' target='_blank'>" + sr[j] + "</a></li>";
		return bv += "</ul>"
	}, this.ss = function(pT) {
		return "<a href='" + pT + "' target='_blank'>" + pT + "</a>"
	}, this.st = function(aR) {
		navigator.clipboard && navigator.clipboard.writeText(aR.value)
	}, this.su = function(aR) {
		aL.fm.startsWith(aR.innerText, "✅ ") || (aR.innerText = "✅ " + aR.innerText, setTimeout(function() {
			aR.innerText = aR.innerText.substring(aR.innerText.indexOf(" ") + 1)
		}, 500))
	}, this.measureText = function(bv) {
		return cA.measureText(bv).width
	}
}

function sv() {
	var sw, sx, sy;
	sw = [32, 65, 191, 913, 931], sx = [64, 127, 688, 930, 1155], sy = new Array(sw.length + 1);
	for (var j = 0; j < sy.length; j++) {
		sy[j] = 0;
		for (var jy = j - 1; 0 <= jy; jy--) sy[j] += sx[jy] - sw[jy]
	}

	function t5(aJ) {
		for (var j = sw.length - 1; 0 <= j; j--)
			if (aJ >= sw[j] && aJ < sx[j]) return j;
		return -1
	}
	this.t0 = function(bv) {
		return 0 !== (bv = bv.trim()).indexOf("Bot ") && 0 !== bv.indexOf("[Bot] ") && function(bv, t2, t3) {
			var s = (bv = bv.trim()).length;
			if (s < t2 || t3 < s) return !1;
			for (var aJ, t4 = 0, j = 0; j < s; j++)
				if (aJ = bv.charCodeAt(j), t4 += 65 <= aJ && aJ <= 90 || 1040 <= aJ && aJ <= 1071 ? 1 : 0, -1 === t5(aJ)) return !1;
			if (3 < t4 && t4 > Math.floor(s / 2)) return !1;
			return !0
		}(bv, 3, 20)
	}, this.t6 = function(bv) {
		for (var s = (bv = bv.trim()).length, g3 = [], j = 0; j < s; j++) {
			var aJ, i0 = t5(aJ = bv.charCodeAt(j));
			g3.push(sy[i0] + aJ - sw[i0])
		}
		return g3
	}, this.t7 = function(g3) {
		for (var aJ, d9, bv = "", s = g3.length, j = 0; j < s; j++)
			for (d9 = 1; d9 < sy.length; d9++)
				if (g3[j] < sy[d9]) {
					aJ = sw[d9 - 1] + g3[j] - sy[d9 - 1], bv += String.fromCharCode(aJ);
					break
				} return bv
	}, this.t8 = function(bv) {
		for (var g3 = this.t6(bv), result = "", j = 0; j < g3.length; j++) result = (result += g3[j] < 10 ? "00" : g3[j] < 100 ? "0" : "") + g3[j].toString(10);
		return result
	}, this.t9 = function(bv) {
		for (var g3 = new Array(Math.floor(bv.length / 3)), j = 0; j < bv.length; j += 3) g3[Math.floor(j / 3)] = parseInt(bv.substring(j, j + 3));
		return this.t7(g3)
	}, this.tA = function(bv) {
		for (var y, g3 = [bv.length], j = 0; j < bv.length; j++) g3[j] = bv.charCodeAt(j) - 48;
		var result = "";
		for (j = 0; j < bv.length; j++) j === bv.length - 1 || 51 < 10 * g3[j] + g3[j + 1] ? result += g3[j].toString() : (y = 10 * g3[j] + g3[j + 1], result += String.fromCharCode(y + (y < 26 ? 65 : 71)), j++);
		return result
	}, this.or = function(bv) {
		for (var aJ, result = "", j = 0; j < bv.length; j++) 48 <= (aJ = bv.charCodeAt(j)) && aJ < 58 ? result += String.fromCharCode(aJ) : 65 <= aJ && aJ < 75 ? result += "0" + (aJ - 65).toString() : 75 <= aJ && aJ < 91 ? result += (aJ - 65)
			.toString() : 97 <= aJ && aJ < 123 && (result += (aJ - 71).toString());
		return result
	}, this.tB = function(bv) {
		for (var s = bv.length, g3 = [], j = 0; j < s; j++)(aJ = bv.charCodeAt(j)) < 58 ? g3.push(bv[j]) : (aJ -= aJ < 91 ? 65 : 71, g3.push(String(a4(aJ, 10))), g3.push(String(aJ - 10 * a4(aJ, 10))));
		var s = g3.length - 2,
			aJ = 0,
			tC = [];
		for (j = 0; j < s; j += 3) tC[aJ++] = parseInt(g3[j] + g3[j + 1] + g3[j + 2]);
		return tC
	}, this.tD = function() {
		for (var jR, tE = "", j = 0; j < 6; j++) jR = 48 + eC.random() % 36, jR += 58 <= jR ? 39 : 0, tE += String.fromCharCode(jR);
		return tE
	}
}

function tF() {
	this.kK = !1, this.oL = !1, this.tG = !1, this.tH = [0, 0, 0, 0], this.pe = function() {
		var dH, dI, gQ, gR;
		this.tG = this.tG || this.oL, (this.oL || this.kK && this.tG) && (dH = oM.kH[0], dI = oM.kH[1], gQ = oM.kH[2], gR = oM.kH[3], dH = dH < this.tH[0] ? this.tH[0] : dH, dI = dI < this.tH[1] ? this.tH[1] : dI, gQ = gQ > this.tH[2] ? this.tH[
			2] : gQ, gR = gR > this.tH[3] ? this.tH[3] : gR, this.oL = !1, this.kK = !1, dH === this.tH[0] && dI === this.tH[1] && gQ === this.tH[2] && gR === this.tH[3] ? this.tI() : dH <= gQ && dI <= gR && eZ.putImageData(ea, 0, 0, dH,
			dI, gQ - dH + 1, gR - dI + 1))
	}, this.tI = function() {
		this.tG && this.tH[2] >= this.tH[0] && this.tH[3] >= this.tH[1] && eZ.putImageData(ea, 0, 0, this.tH[0], this.tH[1], this.tH[2] - this.tH[0] + 1, this.tH[3] - this.tH[1] + 1), this.tG = !1
	}, this.tJ = function() {
		this.tH[2] >= this.tH[0] && this.tH[3] >= this.tH[1] && eZ.putImageData(ea, 0, 0, this.tH[0], this.tH[1], this.tH[2] - this.tH[0] + 1, this.tH[3] - this.tH[1] + 1), this.tG = !1
	}, this.aB = function() {
		var k, l;
		this.kK = !1, this.oL = !1, this.tG = !1, this.tH[0] = b.o, this.tH[1] = b.p, this.tH[2] = this.tH[3] = 0;
		loop: for (k = 1; k < b.o - 1; k++)
			for (l = b.p - 2; 1 < l; l--)
				if (1 === o2[eN.jM(k, l) + 2]) {
					this.tH[0] = k;
					break loop
				} loop: for (l = 1; l < b.p - 1; l++)
			for (k = b.o - 2; 1 < k; k--)
				if (1 === o2[eN.jM(k, l) + 2]) {
					this.tH[1] = l;
					break loop
				} loop: for (k = b.o - 2; 0 < k; k--)
			for (l = b.p - 2; 1 < l; l--)
				if (1 === o2[eN.jM(k, l) + 2]) {
					this.tH[2] = k;
					break loop
				} loop: for (l = b.p - 2; 0 < l; l--)
			for (k = b.o - 2; 1 < k; k--)
				if (1 === o2[eN.jM(k, l) + 2]) {
					this.tH[3] = l;
					break loop
				}
	}
}

function tK() {
	this.tL = null, this.aB = function() {
		10 !== ay.dp ? this.tL = null : this.tL = new Uint32Array(ay.cU)
	}, this.bF = function() {
		10 === ay.dp && this.tM()
	}, this.tM = function() {
		for (var i0, target, g5, tL = this.tL, e0 = rs, fw = bV.bY, j = bd - 1; 0 <= j; j--)(i0 = e0[j]) >= ay.dc || (target = Math.max(a4(fw[i0], 4), 2048), g5 = Math.max(eL.tN(i0), 100), tL[i0] += a4(g5 * target, 1e4), tL[i0] > target && (tL[
			i0] = target))
	}, this.tO = function(player, co) {
		return co > this.tL[player] ? (co = this.tL[player], this.tL[player] = 0) : this.tL[player] -= co, co
	}
}

function tP() {
	this.ok = new tQ, this.f8 = new tR, this.aB = function() {
		bw.bx.p2()
	}
}

function tS() {
	this.id = new tT, this.aB = function() {
		this.id.aB()
	}
}

function tU() {
	var bv;
	10 === b.c ? bv =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === b.c ? bv =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === b.c ? bv =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === b.c ? bv =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === b.c ? bv =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === b.c ? bv =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === b.c ? bv =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === b.c ? bv =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === b.c ? bv =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === b.c && (bv =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new tV).t7(bv)
}

function ps() {
	function tM(cr, tW) {
		if (function(cr, tb) {
				var hq = cY.iY(cr),
					tc = Math.abs(cY.hr(tb) - cY.hr(hq)),
					hq = Math.abs(cY.hs(tb) - cY.hs(hq));
				return 0 !== Math.max(tc, hq) && (function(cX, cr, tc, td) {
					var tf = cY.iK(cX),
						cX = cY.iN(cX),
						th = cY.iK(cr),
						cr = cY.iN(cr),
						th = th - tf,
						cr = cr - cX,
						tl = Math.abs(th),
						tm = Math.abs(cr),
						th = 0 < th ? 1 : 3,
						cr = 0 < cr ? 2 : 0;
					tm < tl ? tp(tf, cX, tf + tl, cX + tm, th, cr, tc) : tp(cX, tf, cX + tm, tf + tl, cr, th, td)
				}(cr, cY.cZ(tb), tc, hq), !0)
			}(cr, tW)) {
			if (0 === ca.m9[0]) return !!eN.o8(tW << 2);
			if (function(tb) {
					if (eN.o8(tb << 2)) return 1;
					return function(tb) {
						var j, hx, cH = bZ.ba.cH,
							tt = cY,
							s = ca.m9[0],
							tu = 4 * tb;
						for (j = s - 1; 0 <= j; j--)
							if (hx = cH[j], tu = tt.ib(tu, hx + 2 & 3), eN.o8(tu)) return ca.m9[0] = j, ca.cb[1] = tu >> 2, ca.cb[2] = 1 + hx, 1;
						return
					}(tb)
				}(tW)) {
				var j, tW = cY.iY(cr),
					kp = o2,
					cH = bZ.ba.cH,
					s = ca.m9[0] - 1,
					tu = 4 * tW,
					hn = cY.hn;
				for (j = 0; j < s; j++)
					if (tu += hn[cH[j]], 0 !== kp[tu + 3] || 2 !== kp[tu + 2]) return !!void 0;
				return !!1
			}
		}
		return !1
	}

	function tp(tf, tg, th, ti, tn, to, tc) {
		for (var l, cH = bZ.ba.cH, d2 = 0, tq = 0, aa = ti - tg, aZ = th - tf, tr = tf % 16, j = 1; j <= tc; j++) cH[d2++] = tn, cH[d2] = to, d2 += (l = (aa * (tr + (j << 4)) + .5) / aZ >> 4) - tq, tq = l;
		ca.mF(ca.m9, d2)
	}
	this.jE = function(player, tW) {
		var hx, hq, hp = cY.hz(player, tW);
		return hp !== tW && (hx = cY.ho(hp, tW), hq = cY.ia(hp, hx), !(!eN.o8(hq << 2) && (hx = cY.hw(hp, tW, hx), hq = cY.ia(hp, hx), eN.nx(hq << 2) || !eN.o8(hq << 2)) || (ca.cb[0] = hq, ca.cb[1] = tW, ca.cb[2] = 0, !tM(cY.cZ(hq), tW)) || 0 !==
			ca.cb[2] && cY.iA(player, ca.cb[1] + cY.hm[ca.cb[2] - 1] << 2)))
	}, this.tX = function(tW) {
		var cX = bZ.ba.cO[ca.cb[3]];
		return ca.cb[1] = tW, ca.cb[2] = 0, tM(cX, tW)
	}
}

function hV() {
	this.hi = ["s"], this.aQ = ["Accept", "You conquered {0}.", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} is attacking you!", "Choose your start position!",
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

function tw() {
	function ty() {
		if (2 === ay.di) return 1;
		ef.u6(), ay.di = 2, ay.df = ay.dd
	}

	function u1() {
		mY.result.u7(), mY.result.u8(), aw.u9(!0), aw.sI(247, 0), eb.f2(!0), eh.f2(!0), ef.f2(), ee.uA(), ay.bC && c0.qG.uB(), c0.c1 = !0, eK.tJ(), bw.bx.setState(0)
	}
	this.tx = function() {
		ty() || (ay.du = 2, mY.result.tz(), aw.mc(0, 59), f0.u0(2700), el.show(!1, !1, !0), u1())
	}, this.ma = function(u2) {
		ty() || (ay.du = 1, 8 === ay.dp ? (ay.dw = u2 < 0 ? bV.bX[0] >= bV.bX[1] ? 0 : 1 : u2, ay.dv = +(ay.dw === ay.az), ay.dv ? aw.mc(ay.dw, 2) : aw.mc(1 - ay.az, 3), ay.ds.sV(ay.dw)) : ay.dT ? (ay.dv = +(dV.dW[ay.az] === eV.u3()), 9 === ay
			.dp ? aw.u4() : f0.u0(2700)) : (ay.dw = mo[0], ay.dv = +(ay.dw === ay.az), aw.u5(ay.dw)), el.show(1 === ay.dv, !1), u1())
	}
}

function uC() {
	this.uD = function(g3) {
		g3.fill(0)
	}, this.uE = function(g3) {
		for (var s = g3.length, j = 0; j < s; j++) g3[j] = []
	}, this.uF = function(ht, t) {
		for (var hu = ca.mC, j = 0; j < 3; j++) hu[j] = t * ht[j];
		return hu
	}, this.uG = function(ht, hu, uH) {
		for (var hy = 0, j = 0; j < 3; j++) hy += Math.abs(ht[j] - hu[j]);
		return uH <= hy
	}, this.uI = function(ht, uJ) {
		for (var j = 0; j < 3; j++) ht[j] = d4.k3(ht[j] + uJ, 0, 255);
		return ht
	}, this.uK = function(g3, hB, hC) {
		var j, uL = 0;
		for (hC = hC || g3.length - 1, j = hB = hB || 0; j <= hC; j++) uL += g3[j];
		return uL
	}, this.uM = function(g3, uN) {
		for (var j, uO, s = g3.length, uP = [], jy = s - 1; 0 <= jy; jy--) {
			for (j = uO = 0; j < s; j++) uN(g3[j]) < uN(g3[uO]) && (uO = j);
			s--, uP.push(g3[uO]), g3[uO] = g3[s], g3.pop()
		}
		return uP
	}, this.min = function(g3) {
		var j, y, s = g3.length;
		if (0 === s) return 0;
		for (y = g3[0], j = 1; j < s; j++) y = Math.min(y, g3[j]);
		return y
	}, this.max = function(g3) {
		var j, y, s = g3.length;
		if (0 === s) return 0;
		for (y = g3[0], j = 1; j < s; j++) y = Math.max(y, g3[j]);
		return y
	}
}

function uQ() {
	this.uR = 0, this.oZ = null;
	var uS = this.ob = 0;
	this.uT = 0, this.tz = function() {
		0 !== bV.bW[ay.az] && eN.o0(ay.az) && 2 === ay.du && (ay.dv = 2)
	}, this.u7 = function() {
		var d2, c3;
		this.oZ = mY.pj.uU(), this.uR = uV.uW.uX(), ay.dp < 7 && 2 !== ay.du ? this.ob = eV.uY() : this.ob = mY.pj.uZ(), 8 === ay.dp && 1 === ay.du ? (d2 = 1 - ay.dw, c3 = bV.bX[d2], bV.bX[d2] = 0, bg.j2.bA(), bV.bX[d2] = c3) : bg.j2.bA(), uS =
			.01 * bV.oc[ay.az] / 50, this.uT = 0, ay.dp < 7 ? mY.ub.u7(this.oZ) : 7 === ay.dp || 10 === ay.dp ? aL.j2.uf(ay.az) && (d2 = mY.result.uR * (1 + ay.dq), 2 === ay.du ? mY.result.uT += d2 * bV.bX[ay.az] / mY.result.ob : mo[0] === ay
				.az && (mY.result.uT += d2)) : 8 !== ay.dp || 1 !== ay.dv || 0 === aS.ai.data[107].value || 100 <= (c3 = aS.ai.data[108].value) || (mY.result.uT += .01 * (100 - c3) * 10)
	}, this.u8 = function() {
		0 !== uS && 0 !== mY.result.uT && aw.uh(0, "🏆 You earned prize money of 🧈 " + mY.result.uT.toFixed(2) + ".", 40, 0, aC.aD, aC.fr, -1, !1)
	}
}

function hW() {
	this.hi = [], this.aQ = ["Принять", "Вы стерли {0}.", "Вас уничтожил {0}.", "Поздравляем! Вы выиграли игру.", "{0} выиграл игру.", "{0} нарушил пакт о ненападении.", "{0} атакует вас!", "Выберите вашу начальную позицию!", "Вы сдались!",
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

function hY() {
	this.hi = ["", ""], this.aQ = ["Aceptar", "Borraste a {0}.", "Fuiste borrado por {0}.", "Felicidades! Ganaste el juego.", "{0} ganó el juego.", "{0} rompió el pacto de no agresión.", "¡{0} te está atacando!", "Elige tu posición de inicio!",
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

function ui() {
	this.aB = function() {
		! function() {
			var data = aS.ai.data;
			0 === data[2].ot && (ad.aa > ad.aZ || 0 !== bw.id) && (data[2].value = data[2].aq = 1);
			0 === data[100].ot && (data[100].value = data[100].aq = (0 === bw.id ? "Player " : 1 === bw.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()));
			data[0].value = data[0].aq = aP.hc()
		}();
		var j, y, data = aS.ai.data,
			s = data.length;
		for (j = 0; j < s; j++) data[j] && data[j].ot === aS.a9.ul(j, !0) && (y = aS.a9.gc(j), data[j].value = null === y ? data[j].aq : 2 === data[j].type ? y : Number(y));
		aS.ai.data[10].value = aS.ai.data[10].aq
	}
}

function um() {
	function uy(bv, v2) {
		v2 ? aw.us = "Replay Error: " + bv : ak.am(4, 3, new p6("⚠️ Replay Error", bv, !0))
	}
	this.t7 = function(bv) {
		if (un.uo.up(un.uo.uq(un.uo.ur(bv))), aw.us = "", ! function() {
				if (bJ.size < 10) uy("File Too Small");
				else if (bJ.bK(9) !== m0 && uy("Incompatible Version Error", !0), bJ.bK(31) !== bJ.size) uy("Size Error");
				else {
					if (function(aa) {
							var j, i0 = bJ.bG,
								s = bJ.size,
								v3 = 0;
							for (j = 7; j < s; j++) v3 = v3 + i0[j] & 65535;
							return v3 === aa
						}(bJ.bK(16))) return 1;
					uy("Hash Error")
				}
				return
			}()) return !1;
		var v4;
		(v4 = {}).dz = bJ.bK(9), v4.dy = bJ.bK(14), v4.e1 = bJ.bK(4), v4.e2 = 1 === bJ.bK(1), v4.l6 = bJ.bK(6), v4.l7 = bJ.bK(14), v4.v5 = bJ.bK(10), eU.uz.v4 = v4,
			function() {
				var j, v6, nu, name, s = eU.uz.v4.v5,
					e0 = [];
				for (j = 0; j < s; j++) v6 = bJ.bK(1), nu = [bJ.bK(6), bJ.bK(6), bJ.bK(6)], name = un.hP.v7(bJ.bK(5)), e0.push({
					name: name,
					nu: nu,
					v6: v6
				});
				if (eU.uz.v4.e0 = e0, 8 === eU.uz.v4.e1)
					for (j = 0; j < s; j++) e0[j].sX = bJ.bK(14)
			}();
		var j, s, v8 = eU.uz.v4;
		if (1 === v8.e0.length)
			for (s = 6 < v8.e1 ? 1 : v8.e1 + 2, v8.v9 = new Array(s), v8.vA = new Array(s), j = 0; j < s; j++) v8.v9[j] = bJ.bK(3), v8.vA[j] = bJ.bK(9) + 1;
		return !! function() {
			var kz = bJ.bK(5),
				vB = bJ.bK(30),
				vC = bJ.bK(30);
			if (vB + vC > 8 * bJ.size) return void uy("Corrupted File");
			return function(s) {
					var j, id, vF = new Uint8Array(s),
						vG = new Uint16Array(s),
						vH = new Uint32Array(s),
						vI = new Uint32Array(s);
					for (eU.uz.vJ = vF, eU.uz.vK = vG, eU.uz.vL = vH, eU.uz.vM = vI, j = 0; j < s; j++) vF[j] = id = bJ.bK(4), vG[j] = bJ.bK(9), 0 === id ? vH[j] = bJ.bK(22) : 1 === id ? (vH[j] = bJ.bK(10), vI[j] = bJ.bK(10)) : 2 === id ? (
						vH[j] = bJ.bK(10), vI[j] = bJ.bK(9)) : 3 === id || 4 === id ? (vH[j] = bJ.bK(10), vI[j] = bJ.bK(22)) : 5 === id || 6 === id ? vH[j] = bJ.bK(10) : 7 === id && (vH[j] = bJ.bK(1))
				}(vB),
				function(s, kz) {
					var j, vN = new Uint8Array(s),
						vO = new Array(s);
					for (vO.fill(0), eU.uz.vN = vN, eU.uz.vO = vO, j = 0; j < s; j++) vN[j] = bJ.bK(1), vO[j] = bJ.bK(kz)
				}(vC, kz), 1
		}() && (bJ.a3 < 8 * bJ.size - 13 || bJ.a3 > 8 * bJ.size ? (uy("Out Of Bounds Error: " + bJ.a3 + " " + 8 * bJ.size), !1) : (eU.uz.v0 = bv, !0))
	}
}

function vP() {
	this.e5 = !1, this.bF = function() {
		c0.ci() % 250 != 249 || ay.bC || (b0.hI.vQ(+(this.e5 && 0 < bV.bW[ay.az]), bd + bZ.ba.bc), this.e5 = !1)
	}
}

function vS() {
	this.vT = function(vU, bG) {
		bJ.aB(bG), 0 === bJ.size ? b0.ba.vV(vU, 3205) : ((0 === bJ.bK(1) ? function(vU) {
			var vY = bJ.bK(6);
			0 === vY ? function(vU) {
				if (0 === vU && 8 !== cB.cC()) {
					ak.ba.vm();
					for (var vn = bJ.bK(12), vo = bJ.bK(6), g3 = new Array(vn), j = 0; j < vn; j++) g3[j] = bJ.bK(vo);
					vp.vq(g3)
				}
			}(vU) : 2 === vY ? b0.va.vb(vU) : 3 === vY || 4 === vY ? vc.aB() : 5 !== vY && 6 !== vY && 7 !== vY && 8 !== vY && (9 === vY ? b0.vd.ve(vU) : 10 === vY ? b0.vf.vg() : 11 === vY ? b0.vd.vh() : 12 === vY ? b0.vf.vi() :
				13 === vY ? b0.vj.vk() : 14 === vY && b0.vj.vl())
		} : function(vU) {
			if (8 !== cB.cC() && !vc.w5()) return;
			if (vU !== b0.ba.od) b0.ba.vV(vU, 3244);
			else if (0 === bJ.bK(1)) c0.qG.w6(bJ.bG);
			else {
				var j, vU = bJ.bK(2);
				if (0 === vU) {
					var av, b1 = bJ.bK(9);
					0 !== bV.bW[b1] && 0 !== bV.bW[ay.az] && (av = bJ.bK(10), aw.ax(b1, ay.az, av), er.h3(b1, 1, av))
				} else if (1 === vU) ! function() {
					var b1 = bJ.bK(9);
					0 !== bV.bW[b1] && 0 !== bV.bW[ay.az] && eu.wC(0, [b1], !0) && aw.b4(b1, 1)
				}();
				else if (2 === vU) ! function() {
					var b1 = bJ.bK(9),
						target = bJ.bK(9);
					0 !== bV.bW[b1] && 0 !== bV.bW[target] && 0 !== bV.bW[ay.az] && eu.wC(1, [b1], !0) && (er.h3(b1, 3, 96), er.h3(target, 4, 96), aw.wD(b1, target))
				}();
				else if (m1 && !m3) {
					var s = 720;
					for (hD.eR(14407), hD.hE(1, 0), hD.hE(6, 10), s = Math.min(bg.eF.bN.length, 720), j = 0; j < s; j++) hD.hE(20, bg.eF.bN[j]);
					b0.ba.send(b0.ba.od, hD.bG)
				}
			}
		})(vU), c0.qM())
	}, this.vr = function(bG) {
		if (bJ.aB(bG), bJ.a3 = 1, 3 === bJ.bK(6)) {
			bJ.a3 += 20;
			for (var v6, nu, name, bG = bJ.bK(9), dy = bJ.bK(14), e1 = bJ.bK(4), l5 = 1 === bJ.bK(1), l6 = bJ.bK(6), l7 = bJ.bK(14), w2 = bJ.bK(9) + 1, e0 = [], j = 0; j < w2; j++) v6 = bJ.bK(1), nu = [bJ.bK(6), bJ.bK(6), bJ.bK(6)], name = un.hP
				.v7(bJ.bK(5)), e0.push({
					name: name,
					nu: nu,
					v6: v6
				});
			cB.w3(), b.eR(l6, l7), 1 === e0.length && eA.w4(e1), ay.dx(dy, bG, e0, e1, l5, !1)
		} else ! function() {
			bJ.a3 += 20;
			for (var v6, nu, sX, name, vz = bJ.bK(1), dy = bJ.bK(14), e1 = bJ.bK(4), l5 = 1 === bJ.bK(1), l6 = bJ.bK(6), l7 = bJ.bK(14), e0 = [], j = 0; j < 2; j++) v6 = bJ.bK(1), nu = [bJ.bK(6), bJ.bK(6), bJ.bK(6)], sX = bJ.bK(14), name = un
				.hP.v7(bJ.bK(5)), e0.push({
					name: name,
					nu: nu,
					sX: sX,
					v6: v6
				});
			cB.w3(), b.eR(l6, l7), ay.dx(dy, vz, e0, e1, l5, !1)
		}()
	}, this.vu = function() {
		bJ.a3 = 1;
		var vY = bJ.bK(6),
			vv = bJ.bK(10);
		return b0.ba.vw > b0.ba.vx && (vv += b0.ba.vx), b0.ba.vw === vv ? (b0.ba.od = vv, !1) : (b0.ba.close(b0.ba.vw, 3247), b0.ba.od = vv, vc.vy = bJ.bK(10), vc.vz = bJ.bK(3 === vY ? 9 : 1), b0.ba.w0(vv, 5) && b0.b1.w1(), !0)
	}
}

function wE() {
	var wF = new Uint8Array(78);
	this.aB = function() {
		var j;
		for (wF[50] = 37, j = 0; j < 10; j++) wF[j + 3] = j + 1;
		for (j = 0; j < 26; j++) wF[j + 20] = j + 11, wF[j + 52] = j + 38
	}, this.ur = function(bv) {
		return bv.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "_")
	}, this.wG = function(bv, size) {
		if ((bv = this.ur(bv)).length > size) return bv.substring(0, size);
		for (; bv.length < size;) bv += "_";
		return bv
	}, this.uq = function(bv) {
		for (var wH = wF, s = bv.length, g3 = new Uint8Array(s), j = 0; j < s; j++) g3[j] = wH[bv.charCodeAt(j) - 45];
		return g3
	}, this.up = function(tC) {
		hD.eR(6 * tC.length), this.wI(tC), bJ.aB(hD.bG)
	}, this.wI = function(tC) {
		for (var s = tC.length, aZ = hD, j = 0; j < s; j++) aZ.hE(6, tC[j])
	}, this.hQ = function(bv) {
		this.wI(this.uq(bv))
	}, this.wJ = function(bv, size) {
		this.wI(this.uq(this.wG(bv, size)))
	}
}

function wK() {
	function wP(map, k, l, aZ, aa) {
		map >= b.wM || (b.c === map && (cA.fillStyle = aC.wO, cA.fillRect(k, l, aZ, aa), cA.fillStyle = aC.aD), cA.strokeRect(k, l, aZ, aa), cA.fillText(b.e6.gd[map].name, Math.floor(k + .5 * aZ), Math.floor(l + .55 * aa)))
	}
	this.fQ = !1, this.wL = [0, 0, 0, 0], this.show = function() {
		this.fQ = !0, this.resize(), c0.c1 = !0
	}, this.resize = function() {
		var cc = a4(b.wM + b.wM % 2, 2),
			cc = ad.aa - cc * af.gap;
		bw.bx.by() ? this.wL[2] = Math.floor(.75 * ad.min) : this.wL[2] = Math.floor(.5 * ad.min), this.wL[3] = Math.floor(1.25 * this.wL[2]), this.wL[3] > cc && (this.wL[3] = cc, this.wL[2] = Math.floor(cc / 1.2)), this.wL[0] = Math.floor((ad
			.aZ - this.wL[2]) / 2), this.wL[1] = Math.floor((ad.aa - this.wL[3]) / 2)
	}, this.fi = function(k, l) {
		return !(k < this.wL[0] || l < this.wL[1] || k > this.wL[0] + this.wL[2] || l > this.wL[1] + this.wL[3])
	}, this.fW = function(k, l) {
		var fI, cc = a4(b.wM + b.wM % 2, 2);
		return c0.c1 = !0, k < this.wL[0] || l < this.wL[1] || k > this.wL[0] + this.wL[2] || l > this.wL[1] + this.wL[3] ? !(this.fQ = !1) : (fI = Math.floor(.17 * this.wL[3]), l < this.wL[1] + fI ? k > this.wL[0] + this.wL[2] - fI && (this
			.fQ = !1) : (l = (l = Math.floor(cc * (l - this.wL[1] - fI - .00576 * ad.ae) / (this.wL[3] - fI - .01152 * ad.ae))) < 0 ? 0 : cc - 1 < l ? cc - 1 : l, k > this.wL[0] + this.wL[2] / 2 && (l += cc), l >= b.wM || b.eR(l, Math
			.floor(16384 * Math.random()))), !0)
	}, this.c9 = function() {
		var j, dI, fI = Math.floor(.17 * this.wL[3]),
			cc = a4(b.wM + b.wM % 2, 2),
			gap = .6 * .01152 * ad.ae,
			fJ = (this.wL[3] - fI - (cc + 1) * gap) / cc,
			fE = Math.floor((this.wL[2] - 3 * gap) / 2);
		for (cA.lineWidth = af.k5, aL.ab.textAlign(cA, 1), aL.ab.textBaseline(cA, 1), cA.fillStyle = aC.fr, cA.fillRect(this.wL[0], this.wL[1] + fI, this.wL[2], this.wL[3] - fI), cA.fillStyle = aC.wO, cA.fillRect(this.wL[0], this.wL[1], this.wL[
				2], fI), cA.strokeStyle = aC.aD, cA.strokeRect(this.wL[0], this.wL[1], this.wL[2], this.wL[3]), cA.fillStyle = aC.aD, cA.fillRect(this.wL[0], this.wL[1] + fI, this.wL[2], 2), cA.font = aL.ab.bz(1, .48 * fI), cA.fillText("Maps",
				Math.floor(this.wL[0] + this.wL[2] / 2), Math.floor(this.wL[1] + .55 * fI)), cA.font = aL.ab.bz(1, .48 * fJ), j = cc - 1; 0 <= j; j--) dI = Math.floor(this.wL[1] + fI + gap + j * (fJ + gap)), wP(j, this.wL[0] + gap, dI, fE, fJ),
			wP(j + cc, this.wL[0] + fE + 2 * gap, dI, fE, fJ);
		ei.g0(Math.floor(this.wL[0] + this.wL[2] - .7 * fI), Math.floor(this.wL[1] + .3 * fI), Math.floor(.4 * fI)), cA.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function wQ() {
	function wW(hM) {
		for (var hy = (1 + ay.dq) * mY.result.uR / (1e5 * mY.result.ob), wZ = "", j = 0; j < hM.length; j++) {
			var wa = hM[j].fv * hy;
			wZ += "  " + hM[j].name + ": " + aL.fm.wb(1e5 * wa)
		}
		wZ.length && (aw.uh(0, "The following clans have won these glorious points:", 45, 0, aL.color.wc(225, 240, 255), aC.fr, -1, !1), aw.uh(0, wZ.trim(), 45, 0, aL.color.wc(225, 240, 255), aC.fr, -1, !1))
	}
	this.u7 = function(oZ) {
		var wR = dV.nv[eV.mv()],
			wS = dV.mL[wR],
			wS = (c7.wT("Team " + wS, 2, 1, 12), aw.uh(0, "Team " + wS + " won the game!", 40, 0, aC.aD, aC.fr, -1, !1), ay.dv && aL.j2.uf(ay.az) && (mY.result.uT += (aL.fm.wY(bV.mV[ay.az]) ? 2 : 1) * mY.result.uR * (1 + ay.dq) * bV.bX[ay.az] /
				mY.result.ob), function(e0) {
				var hM = [],
					username = bV.mV,
					s = e0.length;
				loop: for (var j = 0; j < s; j++) {
					var i0 = e0[j],
						wd = aL.fm.wY(username[i0]);
					if (wd) {
						for (var jy = hM.length - 1; 0 <= jy; jy--)
							if (hM[jy].name === wd) {
								hM[jy].fv += bV.bX[i0];
								continue loop
							} hM.push({
							name: wd,
							fv: bV.bX[i0],
							we: dV.dW[i0]
						})
					}
				}
				return hM.sort(function(jy, d9) {
					return d9.fv - jy.fv
				}), hM
			}(oZ));
		wS.length && (2 === ay.du ? wW(wS) : wW(function(hM, wR) {
			for (var j = hM.length - 1; 0 <= j; j--) dV.nv[hM[j].we] !== wR && hM.splice(j, 1);
			return hM
		}(wS, wR)))
	}
}

function wf() {
	var ij, iv, k, l, wg, wh, gap, wi, fontSize, wj, fP, g8, wk, wl, wm, wn, wo, wp;

	function wt() {
		iv.clearRect(0, 0, eh.aZ, eh.aa), iv.fillStyle = aC.fr, iv.fillRect(0, 0, eh.aZ, eh.aa), iv.fillStyle = aC.wv, g4 = 0 < wm ? wm : Math.sqrt(g8[4] / 1e4), iv.fillRect(0, eh.aa - wg - 1, Math.floor(g4 * eh.aZ), wg), iv.fillStyle = aC.aD, iv
			.fillRect(0, 0, eh.aZ, 1), iv.fillRect(0, 0, 1, eh.aa), iv.fillRect(eh.aZ - 1, 0, 1, eh.aa), iv.fillRect(0, eh.aa - 1, eh.aZ, 1), iv.fillRect(0, eh.aa - wg - 1, eh.aZ, 1);
		for (var g4, ww, c3 = 0, j = 0; j < fP.length; j++) wk[j] ? (aL.ab.textAlign(iv, 0), ww = Math.floor((wh - wg + 2 * wi) * (j - c3 + 1) / (fP.length + 1) - .7 * wi), iv.fillText(fP[j], gap, ww), aL.ab.textAlign(iv, 2), 5 === j && 0 !== bV.bW[
			ay.az] && bV.bY[ay.az] >= eL.lw(ay.az) ? (iv.fillStyle = aC.wx, iv.fillText(wr(j), eh.aZ - gap, ww), iv.fillStyle = aC.aD) : iv.fillText(wr(j), eh.aZ - gap, ww)) : c3++
	}

	function wr(j) {
		return j < 3 ? g8[j].toString() : 3 === j || 4 === j || 5 === j ? aL.fm.fo(g8[j] / 100, 2) : j < 7 ? aL.fm.fn(g8[j]) : j === 7 ? eh.gP(g8[7]) : j === 8 ? utils.getMaxTroops(bV.bX, ay.az) : utils.getDensity(ay.az)
	}

	function wq() {
		bV.bX[ay.az] !== g8[6] && (g8[6] = bV.bX[ay.az], wj++)
	}
	this.aB = function() {
		wm = wn = 0, (fP = new Array(8))[0] = aP.aQ[70], fP[1] = ay.bB ? aP.aQ[71] : aP.aQ[72], fP[2] = aP.aQ[73], fP[3] = aP.aQ[74], fP[4] = aP.aQ[75], fP[5] = aP.aQ[76], fP[6] = aP.aQ[77], fP[7] = aP.aQ[78],
			fP.push("Max Troops", "Density"), // add fP
			wp = ay.dj - a4(ay.dj, 100), (g8 = new Array(fP.length))[0] = ay.bB ? 0 : ay.dc, g8[1] = ay.bB ? bd : ay.de, g8[2] = ay.df, g8[3] = 0, g8[4] = a4(1e4 * bV.bX[0], ay.dj), g8[5] = 700, g8[6] = 0, wq(), g8[7] = 0, wl = wr(6), wk =
			new Array(fP.length);
		for (var j = fP.length - 1; 0 <= j; j--) wk[j] = !0;
		wo = 0, wo = ay.bB ? (wk[0] = !1, wk[2] = !1, wk[3] = !1, 3) : (wk[3] = !1, 1), wj = 0, this.resize()
	}, this.resize = function() {
		this.aZ = Math.floor((bw.bx.by() ? .1646 : .126) * 1.25 * ad.ae), this.aa = Math.floor(1.18 * this.aZ), wg = Math.floor(.04 * this.aZ), gap = Math.floor(.035 * this.aZ), wi = .04 * this.aZ, wh = this.aa, this.aa -= Math.floor(wo * (this
			.aa - 2 * wg) / fP.length), fontSize = Math.floor(.7 * (wh - wg) / fP.length), fontSize = aL.ab.bz(1, fontSize), (ij = document.createElement("canvas")).width = this.aZ, ij.height = this.aa, (iv = ij.getContext("2d", {
			alpha: !0
		})).font = fontSize, aL.ab.textBaseline(iv, 1), iv.lineWidth = 1, this.ws(), this.ls(), eg.ls(), wt()
	}, this.ls = function() {
		k = ad.aZ - this.aZ - af.gap
	}, this.wu = function() {
		l = af.gap
	}, this.ws = function() {
		l = af.gap + (eg.lr() && 0 !== bV.bW[ay.az] && !ay.dl ? eg.aa + af.gap : 0)
	}, this.f2 = function(ro) {
		(ro || 100 <= wj) && (wj = 0, wt())
	}, this.wy = function() {
		return g8[7]
	}, this.gP = function(value) {
		var d8 = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * d8) / 1e3);
		return value < 10 ? d8 + ":0" + value : d8 + ":" + value
	}, this.bF = function() {
		var g5, per;
		wk[0] && ay.dd - ay.df !== g8[0] && (g8[0] = ay.dd - ay.df, wj++), bd - g8[0] !== g8[1] && (g8[1] = bd - g8[0], wj++), this.x1(), (g5 = eL.tN(ay.az)) !== g8[5] && (g8[5] = g5, wj++), wq(), g8[7] += c0.gN, g5 = wr(7), wl !== g5 && (wl =
			g5, wj += 100), g5 = ay.dT ? eV.uY() : bV.bX[mo[0]], per = a4(1e4 * g5, ay.dj), g8[3] = g5, g8[4] !== per && (wj++, g8[4] = per), 8 === ay.dp && function() {
			if (0 === bV.bW[0]) mY.mZ.ma(1);
			else {
				if (0 !== bV.bW[1]) return;
				mY.mZ.ma(0)
			}
			return 1
		}() || g8[3] < wp || g8[3] !== ay.dj && ! function() {
			for (var j = bd - 1; 0 <= j; j--)
				if (0 < bV.x9[rs[j]].length) return;
			return 1
		}() || mY.mZ.ma(-1)
	}, this.x1 = function() {
		wk[2] && ay.df !== g8[2] && (g8[2] = ay.df, wj++)
	}, this.xA = function(j) {
		var xB, hd, c3;
		return 2 !== ay.di && (j % 2 == 1 && (eb.f2(1, 1), c0.c1 = !0), j === ay.dt ? (wm = 0, wt(), !1) : (-1 !== j || 0 !== wn) && (hd = wm, wm = ay.bC ? j / ay.dt : (c3 = performance.now(), 0 <= j && (xB = c3 - 392 * j, wn = 0 === j || xB <
			wn ? xB : wn), 1 < (wm = (c3 - wn) / (392 * ay.dt)) ? 1 : wm), wt(), wm !== hd))
	}, this.c9 = function() {
		cA.drawImage(ij, k, l)
	}
}

function xC(aO, xD) {
	this.xE = [];
	var xF = this.xE;

	function click() {
		for (var j = 0; j < xF.length; j++) xF[j].textContent = xF[j].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var a3 = parseInt(this.name);
		aS.aT.aU(aO.a3, a3), xD && xD(a3)
	}
	for (var xG, s = aO.hh.length, j = 0; j < s; j++)(xG = document.createElement("p")).textContent = "⚪ " + aO.hh[j], xG.style.margin = "0", xG.name = "" + j, xG.style.cursor = "pointer", xG.style.fontSize = "1em", xG.addEventListener("click",
		click), xF.push(xG);
	xF[aO.value].textContent = xF[aO.value].textContent.replace("⚪", "🟢")
}

function xH() {
	var xI, xJ, xK = -15e3,
		xL = !1;

	function fW(aR) {
		xb() || (xL = !0, xc(aR, 1), b0.ba.xd(b0.ba.od), xe(Math.floor(ad.pW * aR.clientX), Math.floor(ad.pW * aR.clientY)))
	}

	function xS(aR) {
		xK = c0.gM, xc(aR, 1), b0.ba.xd(b0.ba.od), 0 < aR.touches.length && (xI = Math.floor(ad.pW * aR.touches[0].clientX), xJ = Math.floor(ad.pW * aR.touches[0].clientY), xf.xS(aR) || xe(xI, xJ))
	}

	function xe(k, l) {
		ak.fW(k, l), 0 === ay.di ? cB.fW(k, l) : ee.xg(k, l) || eY.fW(k, l) || el.fW(k, l) || ek.xh(k, l) || ej.fW(k, l) || ei.fW(k, l) || xi.xj(k, l) || ef.fW(k, l) || ek.xk(k, l)
	}

	function fi(aR) {
		xb() || (xL = !0, xc(aR, 1), xl(Math.floor(ad.pW * aR.clientX), Math.floor(ad.pW * aR.clientY)))
	}

	function xT(aR) {
		xK = c0.gM, xc(aR, 1), 0 < aR.touches.length && (xI = Math.floor(ad.pW * aR.touches[0].clientX), xJ = Math.floor(ad.pW * aR.touches[0].clientY), xf.xT(aR) || xl(xI, xJ))
	}

	function xl(k, l) {
		ak.fi(k, l), 0 === ay.di ? cB.fi(k, l) : (xm.xn(k, l), eY.fi(k, l) || (ei.fi(k, l), ek.fQ() ? ek.fi(k, l) : ed.qR ? ed.fi(k) && (c0.c1 = !0) : (eb.fi(k, l), ec.qg && ec.fi(k, l) && (c0.c1 = !0))))
	}

	function xR(aR) {
		xb() || (xc(aR, 1), xo(), 0 === ay.di ? (cB.click(-1024, -1024), vp.gk()) : (eb.fj(-1024, -1024), ei.fi(-1024, -1024), ed.qn(), ec.qg = !1))
	}

	function xQ(aR) {
		xb() || (xc(aR, 1), xp(Math.floor(ad.pW * aR.clientX), Math.floor(ad.pW * aR.clientY), 2 === aR.button), xi.xO && (xi.xO = !1, aR.preventDefault()))
	}

	function click(aR) {
		xb() || xc(aR, 1)
	}

	function xU(aR) {
		xK = c0.gM, xc(aR, 1), aR && aR.touches && 0 < aR.touches.length && 0 !== ay.di ? ec.qg = !1 : xf.xq() || (xp(xI, xJ, !1), xi.xO && (xi.xO = !1, aR.preventDefault()))
	}

	function xV(aR) {
		xK = c0.gM, xc(aR, 1), xp(xI, xJ, !1), xi.xO && (xi.xO = !1, aR.preventDefault())
	}

	function gr(aR) {
		gX.gr(aR)
	}

	function gs(aR) {
		gX.gs(aR)
	}

	function xW(aR) {
		xb() || xc(aR, 0)
	}

	function xp(k, l, xr) {
		xo(), 0 === ay.di ? cB.click(k, l) : (eb.fj(k, l), eY.fj(), ed.qn(), ec.qg = !1, ek.click(k, l, xr) ? c0.c1 = !0 : ei.xQ(k, l))
	}

	function xo() {
		ak.xo()
	}

	function qm(aR) {
		var k, l, deltaY;
		xb() || (xc(aR, 1), b0.ba.xd(b0.ba.od), k = Math.floor(ad.pW * aR.clientX), l = Math.floor(ad.pW * aR.clientY), deltaY = aR.deltaY, 1 === aR.deltaMode && (deltaY *= 16), ak.qm(k, l, deltaY), 0 === ay.di ? cB.qm(k, l, deltaY) : eb.qm(k, l,
			deltaY) || (ed.qd(k, l) ? ed.qm(deltaY) && (c0.c1 = !0) : ec.qm(k, l, deltaY)))
	}

	function xX(aR) {
		xc(aR, 0)
	}

	function xc(aR, id) {
		0 === id && ak.fQ() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== cB.cC() && aR.preventDefault()
	}

	function xZ(aR) {
		if (keybindHandler(aR.key)) return;
		xb() || ("ArrowLeft" === aR.key ? xt.xu(3) : "ArrowUp" === aR.key ? xt.xu(0) : "ArrowRight" === aR.key ? xt.xu(1) : "ArrowDown" === aR.key ? xt.xu(2) : "a" === aR.key ? ed.qk(.9375) : "d" === aR.key ? ed.qk(16 / 15) : "s" === aR.key ? ed.qk(
			7 / 8) : "w" === aR.key ? ed.qk(8 / 7) : "1" === aR.key ? ed.qk(.75) : "2" === aR.key ? ed.qk(7 / 8) : "3" === aR.key ? ed.qk(.9375) : "4" === aR.key ? ed.qk(31 / 32) : "5" === aR.key ? ed.qk(32 / 31) : "6" === aR.key ? ed.qk(16 /
			15) : "7" === aR.key ? ed.qk(8 / 7) : "8" === aR.key ? ed.qk(4 / 3) : "+" === aR.key ? 0 !== ay.di && ec.qm(Math.floor(ad.aZ / 2), Math.floor(ad.aa / 2), -200) : "-" === aR.key ? 0 !== ay.di && ec.qm(Math.floor(ad.aZ / 2), Math
			.floor(ad.aa / 2), 200) : "c" === aR.key ? 0 !== ay.di && eY.fc() : " " === aR.key ? ay.di && xm.xv(!1) : "b" === aR.key && ay.di && xm.xv(!0))
	}

	function xY(aR) {
		xb() || c0.gM < 400 || "Enter" === aR.key && ak.qz(1) || (8 !== cB.cC() && cB.qz(aR) ? c0.c1 = !0 : "Escape" === aR.key ? xi.xw() : "ArrowLeft" === aR.key || "a" === aR.key ? xt.xx(3) : "ArrowUp" === aR.key || "w" === aR.key ? xt.xx(0) :
			"ArrowRight" === aR.key || "d" === aR.key ? xt.xx(1) : "ArrowDown" === aR.key || "s" === aR.key ? xt.xx(2) : "h" === aR.key ? ee.xy(!ay.dk) : " " === aR.key && ay.di && (ei.fA && ei.fk(), ay.bC) && ee.xz(!1))
	}

	function xa() {
		"hidden" === document.visibilityState ? 1 === ay.di && (ay.bC ? ee.y0() : !ay.bB || ei.fA || ay.dl || ei.fk()) : c0.c1 = !0
	}

	function xb() {
		return xK + 15e3 > c0.gM
	}

	function resize() {
		ad.y3()
	}
	this.xM = 0, this.xN = "", this.xO = !1, this.aB = function() {
		xP.addEventListener("mousedown", fW, {
			passive: !1
		}), xP.addEventListener("mousemove", fi, {
			passive: !1
		}), xP.addEventListener("mouseup", xQ, {
			passive: !1
		}), xP.addEventListener("click", click, {
			passive: !1
		}), xP.addEventListener("mouseleave", xR, {
			passive: !1
		}), xP.addEventListener("wheel", qm, {
			passive: !1
		}), xP.addEventListener("touchstart", xS, {
			passive: !1
		}), xP.addEventListener("touchmove", xT, {
			passive: !1
		}), xP.addEventListener("touchend", xU, {
			passive: !1
		}), xP.addEventListener("touchcancel", xV, {
			passive: !1
		}), xP.addEventListener("dragover", gr), xP.addEventListener("drop", gs), xP.addEventListener("dblclick", xW), document.addEventListener("contextmenu", xX), document.addEventListener("keyup", xY), document.addEventListener("keydown",
			xZ), document.addEventListener("visibilitychange", xa), window.addEventListener("resize", resize)
	}, this.xj = function(k, l) {
		return !!ee.fW(k, l) || !!(eb.fW(k, l) || ec.fW(k, l) || ed.fW(k, l) || aw.fW(k, l))
	}, this.y1 = xb, this.y2 = function() {
		return !xL || 0 < xK
	}, this.xw = function() {
		if (!ak.fQ()) return 8 === cB.cC() ? ay.dk ? void ee.xy(!1) : eY.fQ ? void eY.fk() : void ei.fk() : void(7 === cB.cC() ? cD.ki() : 6 === cB.cC() ? y4.y5() : 2 === cB.cC() && eA.y6());
		ak.qz(2)
	}
}

function qu(pC) {
	var qp, y7, kU;
	this.show = function() {
		qp.show(), this.resize()
	}, this.fb = function() {
		qp.fb()
	}, this.resize = function() {
		qp.resize(), y7.resize()
	}, this.qz = function(aJ) {
		2 === aJ && qp.r0[0].a9()
	}, qp = new qv("🛠️ List Options", [new a5("❌ " + aP.aQ[92], function() {
		ak.y8(10)
	})]), y7 = new y9(qp.qx, ((kU = []).push(function() {
		function yL() {
			var hB = Math.floor(yI.aR.value),
				hC = Math.floor(yG.aR.value);
			return {
				uO: Math.min(hB, hC),
				yM: Math.max(hB, hC)
			}
		}

		function yQ() {
			var yN = ((yN = yL()).yM - yN.uO + 2) / 100;
			yF.button.innerHTML = aL.fm.yR(yF.button.innerHTML, yN)
		}
		var yF, yD = new yE,
			yG = new yH(aS.ai.data[132], 1, function() {
				yF.button.click()
			}),
			yI = new yH(aS.ai.data[131], 1, function() {
				yG.aR.focus()
			});
		yD.yJ("Start Index"), yD.yK(yI), yI.aR.style.marginBottom = "0.5em", yD.yJ("End Index"), yD.yK(yG), yF = new a5("Go (🧈 2.01)", function() {
			var yN = yL();
			ak.am(8, ak.yO().yP, new qy(21, {
				hA: pC.hA,
				hB: yN.uO,
				hC: yN.yM
			}))
		});
		return yI.aR.addEventListener("input", yQ), yG.aR.addEventListener("input", yQ), yQ(), yD.yK(new yS([yF.button])), yD
	}()), kU.push(function() {
		function yQ() {
			var qP = (5 + Math.max(Math.abs(Math.floor(yG.aR.value)), 1)) / 100;
			yF.button.innerHTML = aL.fm.yR(yF.button.innerHTML, qP)
		}
		var yF, yD = new yE,
			yG = new yH(aS.ai.data[134], 1, function() {
				yF.button.click()
			}),
			yI = new yH(aS.ai.data[133], 0, function() {
				yG.aR.focus()
			});
		yD.yJ("Search"), yD.yK(yI), yI.aR.style.marginBottom = "0.5em", yD.yJ("Matches"), yD.yK(yG), yF = new a5("Go (🧈 0.10)", function() {
			var hG = yI.aR.value.slice(0, 20),
				hH = Math.abs(Math.floor(yG.aR.value));
			ak.am(8, ak.yO().yP, new qy(22, {
				hA: pC.hA,
				hG: hG,
				hH: hH
			}))
		});
		return yG.aR.addEventListener("input", yQ), yQ(), yD.yK(new yS([yF.button])), yD
	}()), kU))
}

function yT() {
	var qp, y7, kU;
	this.show = function() {
		qp.show(), this.resize()
	}, this.fb = function() {
		qp.fb()
	}, this.resize = function() {
		qp.resize(), y7.resize()
	}, this.qz = function(aJ) {
		2 === aJ && qp.r0[0].a9()
	}, qp = new qv("Login", [new a5("❌ " + aP.aQ[92], function() {
		ak.am(7, ak.yU(7).yP)
	}, aC.p8), new a5("➡️ Login", function() {
		aS.aT.aU(105, un.uo.wG(y7.yX[0].yY[0].aR.value, 5)), aS.aT.aU(106, un.uo.wG(y7.yX[1].yY[0].aR.value, 8)), ak.am(8, ak.yU(7).yP, new qy(18))
	}, aC.yW)]), y7 = new y9(qp.qx, ((kU = []).push(function() {
		var yD = new yE;
		return yD.yJ("Account Name"), yD.yK(new yH({
			title: "AccountName",
			value: "",
			a3: -1
		})), yD
	}()), kU.push(function() {
		var yD = new yE,
			yb = (yD.yJ("Password"), new yH({
				title: "Password",
				value: "",
				a3: -1
			}));
		return yb.aR.type = "password", yD.yK(yb), yD.yK(new yS([new a5("Show", function() {
			"Show" === this.innerText ? (this.innerText = "Hide", yb.aR.type = "text") : (this.innerText = "Show", yb.aR.type = "password")
		}).button])), yD
	}()), kU))
}

function hX() {
	this.hi = ["", ""], this.aQ = ["Kabul Et", "{0} silindi.", "{0} tarafından silindiniz.", "Tebrikler! Oyunu kazandınız.", "{0} oyunu kazandı.", "{0} saldırmazlık paktını bozdu.", "{0} sana saldırıyor!", "Başlangıç pozisyonunuzu seçin!",
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

function yc() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.jp = 13, this.jr = this.emojis.length, this.h6 = 676, this.jq = 1024, this.h7 = this.emojis.indexOf("💀"), this.yd = this.h7 + 1, this.ko = this.emojis.indexOf("🥇"), this.ye = this.emojis.indexOf("😊"), this.k8 = function(y) {
		return y < this.h6 ? String.fromCharCode(55356, 56806 + d4.d5(y, 26), 55356, 56806 + y % 26) : this.emojis[Math.min(y - this.h6, this.jr - 1)]
	}, this.jt = function(bv) {
		for (var s = bv.length - 2, g3 = [], j = 0; j < s; j++) {
			var ht = bv.charCodeAt(j) - 56806,
				hu = bv.charCodeAt(j + 2) - 56806;
			0 <= ht && ht < 26 && 0 <= hu && hu < 26 && (g3.push(26 * ht + hu), j += 3)
		}
		return g3
	}, this.rl = function(y) {
		return y < this.h6
	}, this.s9 = function(y) {
		return y >= 1024 - this.jp
	}, this.s7 = function(y) {
		return y >= this.h6 && y < this.h6 + this.yd
	}
}

function yf() {
	this.u7 = function() {}
}

function yh() {
	var yi, yj, aZ, k, l, yk, yl;
	this.aB = function() {
		yi = new Array(2), yj = new Array(2), this.qg = !1, yl = yk = fh = fe = 0, ff = 1, this.resize()
	}, this.resize = function() {
		aZ = (aZ = Math.floor((bw.bx.by() ? .072 : .0502) * ad.ae)) < 8 ? 8 : aZ;
		for (var j = 1; 0 <= j; j--) yi[j] = document.createElement("canvas"), yi[j].width = aZ, yi[j].height = aZ, yj[j] = yi[j].getContext("2d", {
			alpha: !0
		});
		this.ls(),
			function() {
				for (var z2 = Math.floor(1 + aZ / 20), j = 1; 0 <= j; j--) yj[j].clearRect(0, 0, aZ, aZ), yj[j].fillStyle = aC.la, yj[j].beginPath(), yj[j].arc(aZ / 2, aZ / 2, aZ / 2 - z2, 0, 2 * Math.PI), yj[j].fill(), yj[j].lineWidth = z2, yj[
					j].fillStyle = aC.aD, yj[j].strokeStyle = aC.aD, yj[j].beginPath(), yj[j].arc(aZ / 2, aZ / 2, aZ / 2 - z2, 0, 2 * Math.PI), yj[j].stroke(), z3(yj[j], 0, 0, aZ, z2, .3, 0 === j)
			}()
	}, this.kJ = function() {
		return -fe / ff
	}, this.iu = function() {
		return -fh / ff
	}, this.yq = function(yr, iG) {
		fe = ff * yr - iG
	}, this.ys = function(yt, iH) {
		fh = ff * yt - iH
	}, this.fW = function(yo, yp) {
		return ay.dk || ! function(yo, yp) {
			return Math.pow(yo - (k + aZ / 2), 2) + Math.pow(yp - (l + aZ / 2), 2) < aZ * aZ / 4 || Math.pow(yo - (k + aZ / 2), 2) + Math.pow(yp - (l + 2 * aZ), 2) < aZ * aZ / 4
		}(yo, yp) || aS.ai.data[8].value ? (f0.bI() && (this.qg = !0, yk = yo, yl = yp), !1) : yp < l + 1.25 * aZ ? this.qm(Math.floor(ad.aZ / 2), Math.floor(ad.aa / 2), -200) : this.qm(Math.floor(ad.aZ / 2), Math.floor(ad.aa / 2), 200)
	}, this.fi = function(yo, yp) {
		var yu, yv, iI, iL;
		return !f0.bI() || (yu = fe, yv = fh, fe += iI = yk - yo, fh += iL = yl - yp, er.fi(iI, iL), this.yw(), yk = yo, yl = yp, yu !== fe) || yv !== fh
	}, this.qm = function(fX, fY, deltaY) {
		var ql;
		if (f0.bI()) {
			if (0 < deltaY) ql = (ql = 500 / (500 + deltaY)) < .5 ? .5 : ql;
			else {
				if (!(deltaY < 0)) return !1;
				ql = 2 < (ql = (500 - deltaY) / 500) ? 2 : ql
			}
			this.yx(fX, fY, ql), c0.c1 = !0
		}
		return !0
	}, this.yx = function(k, l, g4) {
		var t;
		g4 = t = (t = 1024 < (t = g4) * ff ? 1024 / ff : t) * ff < .125 ? .125 / ff : t, er.zoom(g4, k, l),
			function(t, fX, fY) {
				ff *= t, fe = (fe + fX) * t - fX, fh = (fh + fY) * t - fY, ec.yw()
			}(g4, k, l)
	}, this.yw = function() {
		var z0 = ad.aZ / 16,
			dF = 0,
			z1 = ad.aa / 16,
			dG = 0;
		fe < -ad.aZ + z0 && (dF = -ad.aZ + z0 - fe), fe > ff * b.o - z0 && (dF = ff * b.o - z0 - fe), fh < -ad.aa + z1 && (dG = -ad.aa + z1 - fh), fh > ff * b.p - z1 && (dG = ff * b.p - z1 - fh), fe += dF, fh += dG, oM.kI(), er.rm(dF, dG)
	}, this.ls = function() {
		k = ad.aZ - aZ - af.gap, l = Math.floor(ad.aa / 2 - 1.25 * aZ)
	}, this.c9 = function() {
		aS.ai.data[8].value || (cA.drawImage(yi[0], k, l), cA.drawImage(yi[1], k, Math.floor(l + 3 * aZ / 2)))
	}
}

function z4() {
	this.uU = function() {
		for (var s = bd, e0 = rs, oZ = [], j = 0; j < s; j++) {
			var i0 = e0[j];
			eN.o0(i0) && oZ.push(i0)
		}
		return oZ
	}, this.uZ = function() {
		for (var s = bd, e0 = rs, c3 = 0, bX = bV.bX, j = 0; j < s; j++) c3 += bX[e0[j]];
		return c3
	}
}

function z5() {
	this.uX = function() {
		for (var i0, s = bd, e0 = rs, oc = bV.oc, z6 = this.z7(), j = 0; j < s; j++) i0 = e0[j], eN.o0(i0) && (oc[i0] = z6);
		var z8 = bV.z8,
			z9 = bV.z9,
			zA = bV.zA,
			zB = bV.zB,
			s = ay.dc;
		for (j = 0; j < s; j++)(0 === zB[j] || zA[j] < 1 || 2 * z8[j] > 3 * (z9[j] + zA[j])) && (oc[j] = 0);
		var uR = 0;
		for (j = 0; j < s; j++) uR += 0 < oc[j];
		return uR
	}, this.z7 = function() {
		return Math.min(65535, c0.ci())
	}
}

function yE() {
	var zC;
	this.yY = [], this.zC = document.createElement("div"), this.yJ = function(bv, marginTop) {
		var title = document.createElement("h2");
		title.textContent = bv, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.zC.appendChild(title)
	}, this.zD = function(bv) {
		var zE = document.createElement("p");
		return zE.textContent = bv, zE.style.fontSize = "0.75em", zE.style.lineHeight = "1.2em", zE.style.marginBottom = "0", this.zC.appendChild(zE), zE
	}, this.zF = function(zG, fontSize) {
		var zC = document.createElement("div");
		zC.innerHTML = zG, zC.style.fontSize = fontSize || "1em", zC.style.lineHeight = "1.2em", this.zC.appendChild(zC)
	}, this.zH = function(zI) {
		for (var xE = zI.xE, s = xE.length, j = 0; j < s; j++) this.zC.appendChild(xE[j])
	}, this.yK = function(yN) {
		this.yY.push(yN), this.zC.appendChild(yN.aR)
	}, this.resize = function() {
		for (var s = this.yY.length, j = 0; j < s; j++) this.yY[j].resize && this.yY[j].resize()
	}, (zC = this.zC).style.position = "absolute", zC.style.height = "auto", zC.style.padding = "0.5em"
}

function zJ() {
	var zK;

	function zd(kq, fU, k, l, globalAlpha) {
		b.gn.save(), b.gn.globalAlpha = globalAlpha, b.gn.imageSmoothingEnabled = !1, b.gn.scale(fU, fU), b.gn.drawImage(kq, Math.floor(k * (b.o / fU - kq.width)), Math.floor(l * (b.p / fU - kq.height))), b.gn.restore()
	}
	this.zL = 0, this.zM = 0, this.zN = 0, this.zO = 0, this.aB = function() {
		(zK = new Array(b.wM))[0] = {
			aZ: [0, 5e3, 8e3, 1e4],
			jR: [220, 250, 255, 220],
			xB: [190, 220, 0, 0],
			d9: [170, 200, 0, 0]
		}, zK[1] = {
			aZ: [0, 4e3, 5e3, 6e3, 1e4],
			jR: [25, 0, 100, 0, 25],
			xB: [25, 0, 0, 0, 25],
			d9: [25, 0, 0, 0, 25]
		}, zK[2] = {
			aZ: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			jR: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			xB: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			d9: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, zK[3] = {
			aZ: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			jR: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			xB: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			d9: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, zK[4] = {
			aZ: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			jR: [10, 10, 20, 10, 10, 170, 212],
			xB: [20, 20, 60, 100, 100, 110, 170],
			d9: [70, 70, 160, 30, 30, 60, 120]
		}, zK[5] = {
			aZ: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			jR: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			xB: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			d9: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, zK[6] = {
			aZ: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			jR: [10, 10, 60, 255, 255, 200, 200],
			xB: [10, 10, 60, 255, 255, 200, 200],
			d9: [80, 80, 255, 255, 255, 200, 200]
		}, zK[7] = {
			aZ: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			jR: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			xB: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			d9: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, zK[8] = {
			aZ: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			jR: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			xB: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			d9: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, zK[9] = {
			aZ: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			jR: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			xB: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			d9: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, zK[20] = {
			aZ: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			jR: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			xB: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			d9: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}
	}, this.zP = function() {
		var zc, j, jy, bH, gh = function() {
				var gh;
				return b.gm = document.createElement("canvas"), b.gm.width = b.o, b.gm.height = b.p, b.gn = b.gm.getContext("2d", {
					alpha: !1
				}), gh = b.gn.getImageData(0, 0, b.o, b.p), b.go = gh.data, gh
			}(),
			aZ = zK[b.c].aZ,
			jR = zK[b.c].jR,
			xB = zK[b.c].xB,
			d9 = zK[b.c].d9,
			y = z.a0(),
			s = aZ.length - 2,
			zV = new Array(1 + s),
			zW = new Array(1 + s),
			zX = new Array(1 + s),
			zY = new Array(1 + s);
		for (jy = s; 0 <= jy; jy--) zV[jy] = aZ[jy + 1] - aZ[jy], zW[jy] = jR[jy + 1] - jR[jy], zX[jy] = xB[jy + 1] - xB[jy], zY[jy] = d9[jy + 1] - d9[jy];
		for (j = b.o * b.p - 1; 0 <= j; j--)
			for (jy = s; 0 <= jy; jy--)
				if (y[j] >= aZ[jy]) {
					bH = y[j] - aZ[jy], b.go[4 * j] = jR[jy] + a1(zW[jy] * bH, zV[jy]), b.go[4 * j + 1] = xB[jy] + a1(zX[jy] * bH, zV[jy]), b.go[4 * j + 2] = d9[jy] + a1(zY[jy] * bH, zV[jy]), b.go[4 * j + 3] = 255;
					break
				} b.gn.putImageData(gh, 0, 0), b.zS(b.c) && iw.zZ() && b.zS(b.c) && (gh = iw.zb("arena"), zc = iw.zb("territorial.io"), zd(gh, 5, .5, .5, .1), zd(zc, 2, .5, .45, .1)), b.zU = !0, c0.c1 = !0
	}, this.eJ = function() {
		for (var i0, k, l, ze, zf, be, zM = 0, aZ = b.o, aa = b.p, bH = aZ * aa * 4, zg = o2, zh = b.go, j = aZ - 1; 0 <= j; j--) zg[(i0 = j << 2) + 2] = zg[bH - i0 - 2] = 3;
		for (bH = 4 * aZ, j = aa - 1; 0 <= j; j--) zg[(i0 = j * bH) + 2] = zg[i0 + bH - 2] = 3;
		for (ze = aZ - 1, zf = aa - 1, l = 1; l < zf; l++)
			for (bH = l * aZ, k = 1; k < ze; k++) be = 1 - (zh[(i0 = bH + k << 2) + 2] > zh[i0 + 1] && zh[i0 + 2] > zh[i0]), zg[i0 + 2] = 2 - be, zM += be;
		this.zL = (aZ - 2) * (aa - 2), this.zO = 0, b.zi(b.c) && function() {
			var i0, k, l, bH, zg = o2,
				zh = b.go,
				aZ = b.o,
				ze = aZ - 1,
				zf = b.p - 1,
				h0 = 0;
			for (l = 1; l < zf; l++)
				for (bH = l * aZ, k = 1; k < ze; k++) zh[i0 = bH + k << 2] === zh[1 + i0] && zh[i0] === zh[2 + i0] && (h0++, zg[2 + i0] = 3);
			eI.zO = h0
		}(), this.zM = ay.dj = zM - this.zO, this.zN = this.zL - this.zM - this.zO
	}
}

function zk() {
	var qp, zl, zm, zn, zo, zp, colors = [0, 0, 0],
		zq = -1;

	function zy(j) {
		var zz = zl.l + j * (af.gap + zp);
		cA.fillStyle = "rgb(" + (0 === j ? 150 : 2 === j ? 30 : 0) + "," + (1 === j ? 130 : 2 === j ? 30 : 0) + "," + (2 === j ? 220 : 0) + ")", cA.fillRect(zn, zz, colors[j] * zo, zp), cA.strokeStyle = aC.aD, cA.strokeRect(zn, zz, zo, zp), cA
			.fillStyle = aC.aD, cA.font = aL.ab.bz(0, .32 * zp), aL.ab.textBaseline(cA, 1), aL.ab.textAlign(cA, 0), cA.fillText((0 === j ? "Red: " : 1 === j ? "Green: " : "Blue: ") + zs(j), zn + af.gap, zz + .53 * zp)
	}

	function zs(j, a00) {
		return a00 = a00 || 256, d4.k3(Math.floor(a00 * colors[j]), 0, a00 - 1)
	}

	function qd(fX, fY) {
		return !(fX < zn || fY < zl.l || fX > zl.k + zl.aZ || fY > zl.l + zl.aa)
	}
	this.show = function() {
		var y = aS.ai.data[121].value;
		colors[0] = (y >> 12) / 63, colors[1] = (y >> 6 & 63) / 63, colors[2] = (63 & y) / 63, qp.show(), this.resize()
	}, this.fb = function() {
		aS.aT.aU(121, (zs(0, 64) << 12) + (zs(1, 64) << 6) + zs(2, 64)), qp.fb()
	}, this.resize = function() {
		qp.resize(), zl.resize();
		var aJ = ad.pW,
			zt = qp.zu(),
			wN = (zl.l = Math.max(zl.l, aJ * zt.zv + af.gap), aJ * zt.zw - 2 * af.gap);
		zl.aa = Math.min(zl.aa, wN), zl.aZ = 2 * zl.aa, zl.l = aJ * zt.zv + .5 * (aJ * zt.zw - zl.aa), zl.k = .5 * (ad.aZ - zl.aZ), zm = .25 * zl.aZ, zn = zl.k + zm + af.gap, zo = zl.aZ - zm - af.gap, zp = (zl.aa - 2 * af.gap) / 3
	}, this.c9 = function() {
		var jR, xB, d9;
		qp.c9(), cA.lineWidth = af.k5, jR = zs(0), xB = zs(1), d9 = zs(2), cA.fillStyle = "rgb(" + jR + "," + xB + "," + d9 + ")", cA.fillRect(zl.k, zl.l, zm, zl.aa), cA.strokeStyle = aC.aD, cA.strokeRect(zl.k, zl.l, zm, zl.aa), cA.fillStyle =
			jR + xB + d9 < 306 && xB < 150 ? aC.aD : aC.cF, aL.ab.textBaseline(cA, 1), aL.ab.textAlign(cA, 1), cA.font = aL.ab.bz(0, .1 * zl.aa), cA.rotate(-Math.PI / 2), cA.fillText("National Color", -zl.l - .5 * zl.aa, zl.k + .5 * zm), cA
			.setTransform(1, 0, 0, 1, 0, 0), zy(0), zy(1), zy(2)
	}, this.fW = function(fX, fY) {
		qd(fX, fY) && (zq = d4.k3(Math.floor((fY - zl.l) / (zp + .75 * af.gap)), 0, 2), colors[zq] = d4.k3((fX - zn) / zo, 0, 1), c0.c1 = !0)
	}, this.fi = function(fX) {
		-1 !== zq && (colors[zq] = d4.k3((fX - zn) / zo, 0, 1), c0.c1 = !0)
	}, this.qm = function(fX, fY, deltaY) {
		qd(fX, fY) && (fX = d4.k3(Math.floor((fY - zl.l) / (zp + .75 * af.gap)), 0, 2), colors[fX] = d4.k3(colors[fX] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), c0.c1 = !0)
	}, this.xo = function() {
		0 <= zq && (zq = -1, c0.c1 = !0)
	}, this.qz = function(aJ) {
		2 === aJ && qp.r0[0].a9()
	}, qp = new qv("Choose Your Nation's Color!", [new a5("❌ " + aP.aQ[92], function() {
		ak.ba.zr()
	})], !1), zl = new aV([.5, .25], [.5, .5], 1)
}

function a01() {
	var a02, a03, a04, a05, a06, a07, a08, a09, a0A, a0B, a0C, ik, a0D, a0E = !1,
		a0F = !1;

	function a0G(a0H) {
		ik = c0.gM, a04 = a05 = a03 = 0, a06 = (a0D = 33) / a0H, a02 = 1 / (a0H / a0D / 4), a07 = (ad.aZ / 2 + fe) / ff, a08 = (ad.aa / 2 + fh) / ff, a09 = ff
	}

	function a0Q(a0R) {
		Math.abs(Math.log(a0C / a09)) < .125 && (a0C = a0R * a09)
	}

	function a0P(dH, dI, gQ, gR) {
		a0A = (dH + gQ + 1) / 2, a0B = (dI + gR + 1) / 2;
		gQ = ad.aZ / (gQ - dH + 1), dH = ad.aa / (gR - dI + 1);
		a0C = .9 * (gQ < dH ? gQ : dH)
	}
	this.a0I = function() {
		return a0E
	}, this.f1 = function() {
		a0G(1), this.a0J(0, 0, b.o - 1, b.p - 1), ay.dl || ay.bC || this.a0K(ay.az, 3e3, !0, .3)
	}, this.a0K = function(player, a0H, a0L, zoom) {
		ay.dk || a0E && !a0L && a0F || 0 === bV.bX[player] || (ec.qg = !1, a0F = a0L, a0G(a0H), function(player) {
			a0A = (bV.jI[player] + bV.jK[player] + 1) / 2, a0B = (bV.jJ[player] + bV.jL[player] + 1) / 2
		}(player), function(zoom, player) {
			var iI = bV.jK[player] - bV.jI[player] + 1,
				player = bV.jL[player] - bV.jJ[player] + 1,
				jy = ad.aZ / iI,
				d9 = ad.aa / player,
				jy = (a0C = jy < d9 ? jy : d9, 0 !== zoom ? zoom : iI < 20 && player < 20 ? .5 : .9);
			a0C *= jy, a0Q(7 / 8)
		}(zoom, player), a0E = !0, xt.a0O())
	}, this.u0 = function(a0H) {
		ay.bC || ay.dk || (ec.qg = !1, a0F = !1, a0G(a0H), a0P(0, 0, b.o - 1, b.p - 1), a0Q(7 / 8), a0E = !0, xt.a0O())
	}, this.a0J = function(dH, dI, gQ, gR) {
		a0P(dH, dI, gQ, gR), ff = a0C, ec.yq(a0A, ad.aZ / 2), ec.ys(a0B, ad.aa / 2), oM.kI()
	}, this.bI = function() {
		return !(a0E && a0F || (a0E = !1))
	}, this.bF = function() {
		var a0U, a0V, d0, a0Y;
		a0E && (a03 < .5 ? a05 < a06 && (a05 += a06 * a02, a04 = a03) : 1 - a04 < a03 && (a05 = (a05 -= a06 * a02) < a06 * a02 ? a06 * a02 : a05), ik = ik >= c0.gM ? c0.gM - 1 : ik, d0 = c0.gM - ik, a03 = 1e3 < d0 || 1 < (a03 += a05 * d0 / a0D) ?
			1 : a03, ik = c0.gM, d0 = ff, a0U = fe, a0V = fh, d0 = (ff = a09 * Math.pow(a0C / a09, a03)) / d0, a0Y = 1 - (a09 * Math.pow(a0C / a09, 1 - a03) - a09) / (a0C - a09), ec.yq(a07 + a0Y * (a0A - a07), ad.aZ / 2), ec.ys(a08 + a0Y * (
				a0B - a08), ad.aa / 2), er.zoom(d0, (a0U * d0 - fe) / (1 - d0), (a0V * d0 - fh) / (1 - d0)), oM.kI(), 1 <= a03 && (a0E = !1, eK.oL = !0), c0.c1 = !0)
	}
}

function a0Z() {
	var a0b, a0c, a0d, a0e, a0a = !1;

	function a0f() {
		a0a = !0, a0b = -1, a0c = new Array(4);
		for (var j = 3; 0 <= j; j--) a0c[j] = !1;
		var a0g = Math.floor(1 + .02 * ad.min);
		a0d = new Array(4), (a0e = new Array(4))[1] = a0e[3] = a0d[0] = a0d[2] = 0, a0e[0] = a0d[3] = -a0g, a0d[1] = a0e[2] = a0g
	}

	function a0h() {
		if (-1 !== a0b)
			if (0 !== ay.di && f0.bI()) {
				for (var a0i = !1, j = 3; 0 <= j; j--) a0c[j] && (a0i = !0, fe += a0d[j], fh += a0e[j], er.fi(a0d[j], a0e[j]), ec.yw());
				a0i ? c0.c1 = !0 : xt.a0O()
			} else xt.a0O()
	}
	this.xu = function(a3) {
		0 !== ay.di && f0.bI() && (a0a || a0f(), a0c[a3] = !0, -1 === a0b) && (a0b = setInterval(a0h, 20), a0h())
	}, this.xx = function(a3) {
		if (0 !== ay.di && (a0a || a0f(), a0c[a3] = !1, -1 !== a0b)) {
			for (var a0i = !1, j = 3; 0 <= j; j--) a0i = a0i || a0c[j];
			a0i || this.a0O()
		}
	}, this.a0O = function() {
		if (a0a && -1 !== a0b) {
			for (var j = 3; 0 <= j; j--) a0c[j] = !1;
			clearInterval(a0b), a0b = -1
		}
	}
}

function a0j() {
	this.mg = function(oy) {
		return 0 === oy ? 1 === ay.di && ay.dl : 1 === oy ? 1 === ay.di && !ay.dl : 2 === ay.di
	}, this.uf = function(player) {
		return 0 !== bV.bW[player] && 2 !== bV.ly[player]
	}, this.a0k = function(j8, j9) {
		return j8 !== j9
	}, this.oV = function(player, y) {
		return y = this.a0l(player, y), bV.bY[player] += y, y
	}, this.a0l = function(player, y) {
		var fw = bV.bY[player];
		return y = Math.min(y, bV.bX[player] * ay.dh - fw), y = Math.min(y, ay.dY - fw), Math.max(y, 0)
	}, this.j3 = function(player, iQ, a0m, a0n) {
		var fw = bV.bY[player],
			iQ = d4.d5(fw * (iQ + 1), 1024),
			a0m = d4.d5(a0m * fw, 1024),
			iQ = Math.min(iQ, fw - a0m);
		return 10 === ay.dp && (iQ = es.tO(player, iQ)), ca.ce[0] = iQ, ca.ce[1] = a0m, a0n <= iQ
	}, this.oQ = function(player, bk, oP) {
		var player = bV.bY[player],
			a0o = d4.d5(64 * player, 1024);
		return bk = Math.min(bk, player - a0o), a0o += player = this.a0q(bk), bk = this.a0l(oP, bk -= player), ca.ce[0] = bk, ca.ce[1] = a0o, 1 <= bk
	}, this.oU = function(bk, oP) {
		var a0p = this.a0q(bk);
		return bk = this.a0l(oP, bk -= a0p), ca.ce[0] = bk, ca.ce[1] = a0p, 1 <= bk
	}, this.iP = function(player, a0r) {
		return d4.d5(bV.bY[player] * (a0r + 1), 1024)
	}, this.a0q = function(a0s) {
		return d4.d5(Math.max(2142 - c0.ci(), 0) * a0s, 2142)
	}, this.a0t = function(player, a0m) {
		bV.bY[player] -= d4.d5(a0m * bV.bY[player], 1024)
	}, this.j7 = function(player) {
		bV.bY[player] -= ca.ce[0] + ca.ce[1]
	}, this.a0u = function(player, a0v) {
		return (a0v = Math.min(a0v, ay.cU)) < ay.cU && 0 === bV.bW[a0v] && (a0v = ay.cU), (ca.mD[0] = a0v) === ay.cU || jB(player, a0v)
	}, this.a0w = function(player, oP) {
		return 0 !== bV.bW[oP] && !jB(player, oP)
	}
}

function a0x() {
	this.k4 = new a0y, this.j2 = new at, this.bh = new a0z, this.eF = new bE, this.a10 = new oN
}

function a11() {
	this.uo = new a12, this.hP = new a13, this.aB = function() {
		this.uo.aB()
	}
}

function a14() {
	var player, co, dD, a15, dH, dI, gQ, gR, a3, a16, id;

	function a1D() {
		var a0v;
		if (eN.iB(dD)) a0v = ay.cU;
		else {
			if ((a0v = eN.iC(dD)) === player) return void a1F(!0);
			if (!jB(player, a0v)) return function(a0v) {
				var max = bV.bX[a0v] * ay.dh - bV.bY[a0v];
				max <= 0 || (co -= max = max < co ? max : co, player === ay.az && (aw.oW(max, 0, a0v), eG.g8[16] += max), a0v === ay.az && (aw.a1K(max, player), eG.g8[10] += max), bV.bY[a0v] += max, er.oX(a0v, max))
			}(a0v), void a1F(!0)
		}
		player === ay.az && (eG.g8[13] += co), em.n7(player, id), eq.a1H(player, a16), bV.x9[player].push(a15), eq.a1I(player, co, a0v), en.nA(player, !0)
	}

	function a1F(a1L) {
		em.n7(player, id), eq.a1H(player, a16), a1L && (bV.bY[player] += co)
	}

	function a19() {
		eN.oA(dD, player) && eN.oE(dD)
	}

	function a18(j, a1O, a17, jO, bI) {
		if (a3 = j, id = a1O, player = a17, dH = eN.kJ(jO), dI = eN.iu(jO), gQ = eN.kJ(bI), gR = eN.iu(bI), a15 = dD = eN.jM(dH, dI), -1 !== (a16 = eq.nJ(player, id))) return co = eq.nI(player, a16), 1;
		a19(), em.n7(player, id)
	}
	this.bF = function(j, id, a17, jO, bI) {
		a18(j, id, a17, jO, bI) && (a19(), function() {
			var a1M = a4(co, 128);
			co -= a1M = a1M < 1 ? 1 : a1M, player === ay.az && (eG.g8[15] += a1M);
			if (co <= ay.db) return player === ay.az && (eG.g8[15] += co), void a1F(!1);
			return eq.a1N(player, a16, co), 1
		}()) && (j = eN.jM(dH, dI), dD = Math.abs(gQ - dH) >= Math.abs(gR - dI) ? j + a1P[dH < gQ ? 1 : 3] : j + a1P[dI < gR ? 2 : 0], dH = eN.kJ(dD), dI = eN.iu(dD), em.n4(a3, dD), ! function() {
			if (eN.jU(dD)) return;
			return 1
		}() ? a1D() : eN.o8(dD) && eN.oK(dD, player))
	}, this.n9 = function(a17, jO) {
		player = a17, dD = eN.jM(eN.kJ(jO), eN.iu(jO)), a19()
	}
}

function a1Q() {
	var bG, z6, a1R, a1S;
	this.vy = 0, this.vz = 0, this.aB = function() {
		var ij, ql;
		7 === cB.cC() && (bG = bJ.bG, z6 = 0, a1R = c0.gM + 4500, a1S = b0.a1T.vu() ? 2 : 0, cB.setState(10), cA.imageSmoothingEnabled = !0, cB.a1Z(), ij = iw.zb("loading"), ql = (bw.bx.by() ? .396 : .25) * ad.ae / ij.width, cA.setTransform(ql,
			0, 0, ql, Math.floor((ad.aZ - ql * ij.width) / 2), Math.floor((ad.aa - ql * ij.height) / 2)), cA.imageSmoothingEnabled = !1, cA.drawImage(ij, 0, 0), cA.setTransform(1, 0, 0, 1, 0, 0))
	}, this.a1U = function() {
		0 < a1S && c0.gM > a1R && (a1S--, a1R += 4500, 0 === c0.a1W) && 0 === c0.ci() && (0 === a1S && b0.ba.od < b0.ba.a1X && (b0.ba.od += b0.ba.vx), b0.ba.w0(b0.ba.od, 5))
	}, this.w5 = function() {
		var i0, j;
		return 10 === cB.cC() && (i0 = bJ.bG, j = bJ.a3, b0.a1T.vr(bG), bG = null, bJ.aB(i0), bJ.a3 = j, !0)
	}, this.a1Y = function() {
		10 === cB.cC() && 2 <= ++z6 && (b0.a1T.vr(bG), bG = null)
	}
}

function qw(a1b, a1c, iQ) {
	var a1d, j, a1e = new Array(a1c.length),
		kU = new Array(a1c.length);
	for (this.resize = function() {
			for (var s = a1c.length, j = 0; j < s; j++) 0 < j && aL.ab.sg(a1e[j], 8)
		}, a1d = document.createElement("div"), a1b.style.overflowX = "hidden", a1b.style.overflowY = "auto", ! function() {
			var j, d0, s = a1c.length;
			for (j = 0; j < s; j++) {
				a1e[j] = document.createElement("div"), a1e[j].style.display = "flex", a1e[j].style.width = "100%", a1e[j].style.height = "2.5em", a1e[j].style.backgroundColor = j % 2 == 0 ? aC.a1h : aC.a1i, kU[j] = new Array(a1c[0].length);
				for (var jy = 0; jy < a1c[0].length; jy++) kU[j][jy] = d0 = document.createElement("div"), d0.style.display = "flex", d0.style.width = "100%", d0.style.height = "100%", d0.style.justifyContent = "center", d0.style.alignItems =
					"center", d0.innerHTML = a1c[j][jy], 0 < jy && aL.ab.sg(d0, 4), a1e[j].appendChild(d0)
			}
		}(), j = 0; j < a1c.length; j++) a1d.appendChild(a1e[j]);
	a1b.appendChild(a1d)
}

function a1j() {
	this.a1k = 28, this.bt = 0, this.a1l = null;
	var a1n = this.a1m = null;

	function a1s(jW, a1u) {
		var k, l, i1, iI, kq = aL.ab.pD(jW, jW),
			k7 = aL.ab.getContext(kq, !0),
			gh = aL.ab.getImageData(k7, jW, jW),
			kp = gh.data,
			d8 = (jW >> 1) - .5,
			a1v = .5 + d8;
		for (a1v *= a1v, l = 0; l < jW; l++)
			for (k = 0; k < jW; k++) iI = (iI = k - d8) * iI + (iI = l - d8) * iI, kp[i1 = 4 * (l * jW + k)] = a1u[0], kp[1 + i1] = a1u[1], kp[2 + i1] = a1u[2], kp[3 + i1] = (a1v - iI) * a1u[3] / a1v;
		return k7.putImageData(gh, 0, 0), kq
	}

	function a1x(j, k7, kq, jW) {
		var k, y, highlight = settings.highlightClanSpawns && clanFilter.inOwnClan[j];
		if (highlight) jW *= 2;
		0 !== bV.bW[j] && 0 !== bV.bX[j] && (k = bV.jI[j] + bV.jK[j] + 1 - jW - 2 >> 1, y = bV.jJ[j] + bV.jL[j] + 1 - jW - 2 >> 1,
			highlight ? k7.drawImage(kq[ay.dT ? dV.dW[j] : j < ay.dc ? 1 : 0], k, y, jW, jW) :
			k7.drawImage(kq[ay.dT ? dV.dW[j] : j < ay.dc ? 1 : 0], k, y))
	}
	this.aB = function() {
		var cn;
		this.bt = 700,
			function(cn) {
				var jW = cn.a1k;
				if (cn.a1m = [], a1n = [], ay.dT)
					for (var j = 0; j <= ay.dn; j++) cn.a1m.push(a1s(jW, dV.a1t[dV.nv[j]])), a1n.push(a1s(jW >> 1, dV.a1t[dV.nv[j]]));
				else cn.a1m.push(a1s(jW, dV.a1t[0])), cn.a1m.push(a1s(jW, dV.a1t[4])), a1n.push(a1s(jW >> 1, dV.a1t[0]))
			}(this),
			function(cn, a1w) {
				var j, a1l = cn.a1l,
					k7 = aL.ab.getContext(a1l, !0),
					s = ay.cU,
					jW = cn.a1k >> 1;
				k7.imageSmoothingEnabled = !1, k7.setTransform(1, 0, 0, 1, 0, 0), a1w && k7.clearRect(0, 0, a1l.width, a1l.height);
				for (j = ay.dc; j < s; j++) a1x(j, k7, a1n, jW)
			}(this, null !== (cn = this).a1l && cn.a1l.width === b.o - 2 && cn.a1l.height === b.p - 2 || (cn.a1l = aL.ab.pD(b.o - 2, b.p - 2), !1)), ay.dl || this.a1r()
	}, this.a1r = function() {
		for (var s = ay.dc, jW = this.a1k, a1m = this.a1m, k7 = aL.ab.getContext(this.a1l, !0), j = 0; j < s; j++) a1x(j, k7, a1m, jW)
	}
}

function a1y() {
	this.ab = new sd, this.a1z = new uC, this.j2 = new a0j, this.fm = new a20, this.iv = new a21, this.a22 = new p9, this.ij = new a23, this.color = new a24, this.a25 = new a26, this.aB = function() {
		this.ab.ao()
	}
}

function md(player) {
	a27(player), a28(player), a29(player), en.n7(player), em.n8(player), eq.clear(player), bZ.cp.a2A(player)
}

function a27(player) {
	eN.o0(player) && (bV.oc[player] = uV.uW.z7(), ay.df++);
	var a2B = eq.a2C(player);
	0 === a2B.length ? player === ay.az && a2D() : (a2E(player, a2B), a2F(player, a2B))
}

function a2D() {
	eG.g8[17] += bV.bY[ay.az] + eq.a2G(ay.az), el.show(!1, !1, !1, !0), eh.wu()
}

function a2E(player, a2B) {
	for (var j = a2B.length - 1; 0 <= j; j--) eq.a2H(a2B[j], player)
}

function a2I(a2B) {
	for (var a3 = 0, j = a2B.length - 1; 1 <= j; j--) bV.bX[a2B[j]] > bV.bX[a2B[a3]] && (a3 = j);
	return a3
}

function a2F(player, a2B) {
	var j, a2J, a2K = a2B[a2I(a2B)];
	if (9 === ay.dp && 1 === dV.dW[player] && eC.a2L(8) && eE.gz(a2K), player === ay.az) 2 !== bV.ly[player] && aw.mc(a2K, 1), a2D();
	else {
		for (a2J = !1, j = a2B.length - 1; 0 <= j; j--)
			if (a2B[j] === ay.az) return a2J = !0, void aw.mc(player, 0);
		!a2J && player < ay.dc && 2 !== bV.ly[player] && aw.a2M(0, player, a2K)
	}
}

function a29(player) {
	bV.bW[player] = bV.bY[player] = 0, bV.x9[player] = null, bV.a2N[player] = null, bV.i5[player] = null, bV.a2O[player] = null, et.a2P(player)
}

function a28(player) {
	for (var i0, l, k = bV.jK[player]; k >= bV.jI[player]; k--)
		for (l = bV.jL[player]; l >= bV.jJ[player]; l--) i0 = 4 * (l * b.o + k), eN.o3(player, i0) && (eN.oC(i0), bV.bX[player]--)
}

function a2Q() {
	function a2d() {
		b.lH.bF()
	}

	function a2k(i0, a2j) {
		0 < a2j && (b.go[i0] += a2j, b.go[i0 + 1] += a2j, b.go[i0 + 2] += a2j)
	}

	function o8(i0) {
		return b.go[i0 + 2] > b.go[i0] && b.go[i0 + 2] > b.go[i0 + 1]
	}
	this.a0b = -1, this.oy = 0, this.a2R = 0, this.a2S = 8, this.a2T = 32, this.a2U = 8, this.a2V = 32, this.a2W = [0, 0], this.nh = [0, 0, 0, 0], this.cf = null, this.a2X = !0, this.a2Y = !1, this.lI = function() {
		-1 !== this.a0b && clearTimeout(this.a0b), this.a0b = -1, this.cf = null, z.a2Z()
	}, this.aB = function() {
		7 === cB.cC() || this.a2Y || (this.a2X = !0, this.oy = 0, this.a2R = 1, this.a2W = [b.e6.gd[b.c].a2a[0], b.e6.gd[b.c].a2b[0]], this.nh = [b.e6.gd[b.c].a2c[3], b.e6.gd[b.c].a2c[4], b.e6.gd[b.c].a2c[5], b.e6.gd[b.c].a2c[6]], this.a2S = b.e6
			.gd[b.c].a2c[7], this.a2T = b.e6.gd[b.c].a2c[8], this.a2U = b.e6.gd[b.c].a2c[9], this.a2V = b.e6.gd[b.c].a2c[10], this.a2X ? this.a0b = setTimeout(a2d, 16) : this.bF())
	}, this.bF = function() {
		if (8 === cB.cC() && f0.a0I()) this.a0b = setTimeout(a2d, 16);
		else {
			if (0 === this.oy) {
				var a2e = eC.a2f();
				if (eC.eD(b.e6.gd[b.c].a2c[2]), z.eR([b.o, b.p, b.e6.gd[b.c].a2c[0], b.e6.gd[b.c].a2c[1]]), eC.eD(a2e), this.cf = z.a0(), this.oy++, this.a2X) return void(this.a0b = setTimeout(a2d, 16))
			}
			for (var i0, i1, a2e = this.a2X ? 10 : 1e6, a2e = b.p - this.a2R - 1 < a2e ? b.p - this.a2R - 1 : a2e, a2g = this.a2R + a2e, l = this.a2R; l < a2g; l++)
				for (var k = 1; k < b.o - 1; k++) o8(i0 = 4 * (i1 = k + l * b.o)) ? this.a2h(i0, i1, 1) : (this.a2h(i0, i1, 0), function(k, l, i0) {
					return 1 < k && o8(i0 - 4) || k < b.o - 2 && o8(i0 + 4) || 1 < l && o8(i0 - 4 * b.o) || l < b.p - 2 && o8(i0 + 4 * b.o)
				}(k, l, i0) && this.a2i(k, l));
			this.a2R = a2g, this.a2R >= b.p - 1 ? (b.gn.putImageData(b.lG, 0, 0, 1, 1, b.o - 2, b.p - 2), c0.c1 = !0, this.lI()) : this.a2X && (this.a0b = setTimeout(a2d, 16))
		}
	}, this.a2h = function(i0, i1, a3) {
		a2k(i0, Math.floor(this.a2W[a3] + this.nh[a3] * this.cf[i1] / 1e4) - b.go[i0])
	}, this.a2l = function(i0, jR, a2m, a3, nh) {
		a2k(i0, Math.floor(this.a2W[a3] + (1 - jR / a2m) * nh) - b.go[i0])
	}, this.a2i = function(fX, fY) {
		for (var i0, jR, a2m, a2n = fX - this.a2T, a2o = fY - this.a2T, a2p = fX + this.a2T, a2g = fY + this.a2T, a2n = a2n < 1 ? 1 : a2n, a2p = a2p > b.o - 2 ? b.o - 2 : a2p, a2g = a2g > b.p - 2 ? b.p - 2 : a2g, l = a2o < 1 ? 1 : a2o; l <=
			a2g; l++)
			for (var k = a2n; k <= a2p; k++) o8(i0 = 4 * (k + l * b.o)) ? (a2m = this.a2S + (this.a2T - this.a2S) * this.cf[k + b.o * l] / 1e4, Math.abs(fX - k) > a2m || Math.abs(fY - l) > a2m || a2m <= (jR = Math.sqrt((fX - k) * (fX - k) + (fY -
				l) * (fY - l))) || this.a2l(i0, jR, a2m, 1, this.nh[3])) : (a2m = this.a2U + (this.a2V - this.a2U) * this.cf[k + b.o * l] / 1e4, Math.abs(fX - k) > a2m || Math.abs(fY - l) > a2m || a2m <= (jR = Math.sqrt((fX - k) * (fX - k) +
				(fY - l) * (fY - l))) || this.a2l(i0, jR, a2m, 0, this.nh[2]))
	}
}

function a2q(a2r, a1b) {
	var zC, j;
	for (this.resize = function() {
			for (var j = 0; j < a2r.length; j++) aL.ab.sg(a2r[j].button);
			zC.style.gap = zC.style.padding = aL.ab.sh(af.a2s)
		}, (zC = document.createElement("div")).style.display = "grid", zC.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", zC.style.overflowY = "auto", zC.style.gridAutoRows = "5.3em", zC.style.maxHeight = "100%", j = 0; j < a2r
		.length; j++) a2r[j].button.style.fontSize = "1.2em", zC.appendChild(a2r[j].button);
	a1b.appendChild(zC)
}

function a2t() {
	this.c9 = function() {
		if (0 !== eX.ba.bt && (cA.globalAlpha = Math.min(eX.ba.bt / 580, 1), cA.drawImage(eX.ba.a1l, 1 + ec.kJ(), 1 + ec.iu()), cA.globalAlpha = 1, ay.dl)) {
			for (var dH = fe / ff, dI = fh / ff, gQ = (ad.aZ + fe) / ff, gR = (ad.aa + fh) / ff, d2 = eX.ba.a1k * ff, a1m = eX.ba.a1m, j = ay.dc - 1; 0 <= j; j--) ! function(j, d2, dH, dI, gQ, gR, a1m) {
				var highlight = settings.highlightClanSpawns && clanFilter.inOwnClan[j];
				if (highlight) d2 *= 2;
				0 === bV.bW[j] || 0 === bV.bX[j] || (gQ = ad.aZ * ((bV.jI[j] + bV.jK[j] + 1) / 2 - dH) / (gQ - dH) - .5 * d2, dH = ad.aa * ((bV.jJ[j] + bV.jL[j] + 1) / 2 - dI) / (gR - dI) - .5 * d2, gQ > ad.aZ) || dH > ad.aa || gQ < -d2 ||
					dH < -d2 || (cA.setTransform(highlight ? ff * 2 : ff, 0, 0, highlight ? ff * 2 : ff, gQ, dH), cA.drawImage(a1m[ay.dT ? dV.dW[j] : 1], 0, 0))
			}(j, d2, dH, dI, gQ, gR, a1m);
			cA.setTransform(ff, 0, 0, ff, 0, 0)
		}
	}
}

function a2x() {
	this.kw = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a2y = [aC
		.aD, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", aC.aD, "rgb(170,170,170)"
	], this.a2z = [aC.aD, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", aC.aD, aC.cF], this.a30 = [aC.cF, aC.aD, aC.aD, aC.aD, aC.cF, aC.cF, aC.cF, aC.cF, aC.aD];
	var a31 = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		a32 = (this.sC = ["rgba(" + a31[0] + ",", "rgba(" + a31[1] + ",", "rgba(" + a31[2] + ",", "rgba(" + a31[3] + ",", "rgba(" + a31[4] + ",", "rgba(" + a31[5] + ",", "rgba(" + a31[6] + ",", "rgba(" + a31[7] + ",", "rgba(" + a31[8] + ",",
			"rgba(" + a31[9] + ","
		], this.sD = ["rgb(" + a31[0] + ")", "rgb(" + a31[1] + ")", "rgb(" + a31[2] + ")", "rgb(" + a31[3] + ")", "rgb(" + a31[4] + ")", "rgb(" + a31[5] + ")", "rgb(" + a31[6] + ")", "rgb(" + a31[7] + ")", "rgb(" + a31[8] + ")", "rgb(" + a31[9] +
			")"
		], this.mL = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.a1t = [
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
	this.nv = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.dW = new Uint8Array(ay.cU), this.hM = null, this.a33 = null, this.aB = function(e0) {
		this.dW.fill(0), this.a34(), ay.dT && (e4.e5 && e4.e6.a35 ? this.nl() : 9 === ay.dp ? this.a36() : this.bF(e0))
	}, this.nl = function() {
		var j, s = ay.dg;
		for (this.nv = [0, 1, 2, 3, 4, 5, 6, 7, 8], j = 0; j < s; j++) this.dW[j] = e4.e6.a35[j]
	}, this.a34 = function() {
		for (var j = this.nv.length - 1; 0 <= j; j--) this.nv[j] = j;
		this.hM = [], this.a33 = []
	}, this.a36 = function() {
		for (var j = ay.dc + eE.gy - 1; 0 <= j; j--) this.dW[j] = 1;
		for (j = ay.dc + eE.gy; j < ay.cU; j++) this.dW[j] = 2;
		this.nv[1] = 7, this.nv[2] = 8
	}, this.bF = function(e0) {
		var ht = new Uint8Array(ay.dc),
			hu = new Uint8Array(ay.dc),
			a37 = new Uint16Array(8),
			a38 = new Uint16Array(this.nv.length);
		this.a39(e0, ht, hu, a37), this.nj(a37), ay.bB || this.a3A(a38, ht, hu), this.a3B(ht, hu, a38), ay.bB ? this.a3C() : this.a3D()
	}, this.a39 = function(e0, ht, hu, a3E) {
		for (var d9, aR, a3F, s = this.nv.length - 1, g3 = new Uint16Array(s), j = ay.dc - 1; 0 <= j; j--) {
			for (d9 = s; 1 <= d9; d9--) g3[d9 - 1] = Math.abs(4 * e0[j].nu[0] - a32[d9][0]) + Math.abs(4 * e0[j].nu[1] - a32[d9][1]) + Math.abs(4 * e0[j].nu[2] - a32[d9][2]);
			for (a3F = 768, d9 = s - 1; 0 <= d9; d9--) g3[aR = (d9 + j) % s] < a3F && (a3F = g3[aR], ht[j] = aR);
			for (a3E[ht[j]] += 4, a3F = 768, d9 = s - 1; 0 <= d9; d9--) g3[aR = (d9 + j) % s] < a3F && aR !== ht[j] && (a3F = g3[aR], hu[j] = aR);
			a3E[hu[j]]++
		}
	}, this.nj = function(a3E) {
		for (var d9, a3G, s = this.nv.length - 1, j = s; 0 <= j; j--) this.nv[j] = j;
		for (j = s - 1; 0 <= j; j--) a3E[j]++;
		for (j = 1; j <= s; j++) {
			for (a3G = 0, d9 = 1; d9 < s; d9++) a3E[d9] > a3E[a3G] && (a3G = d9);
			a3E[a3G] = 0, this.nv[j] = a3G + 1
		}
	}, this.a3A = function(a38, ht, hu) {
		var j, d9, a3H, aJ, d0, aR, ql, xB, a3I = this.nv.length - 1,
			aK = new Uint16Array(a3I),
			a3J = [],
			fI = Math.max(ay.dc + 1 >> 1, 6);
		loop: for (j = 0; j < ay.dc; j++)
			if (null !== (a3H = aL.fm.wY(bV.mV[j]))) {
				for (d9 = this.hM.length - 1; 0 <= d9; d9--)
					if (a3H === this.hM[d9] && this.a33[d9].length < fI) {
						this.a33[d9].push(j);
						continue loop
					} this.hM.push(a3H), a3J.push(!1), this.a33.push([j])
			}
		for (d9 = this.hM.length - 1; 0 <= d9; d9--) {
			for (d0 = -1, aJ = this.hM.length - 1; 0 <= aJ; aJ--) !a3J[aJ] && (-1 === d0 || this.a33[aJ].length > this.a33[d0].length) && (d0 = aJ);
			for (aJ = a3I - 1; 0 <= aJ; aJ--) aK[aJ] = 1;
			for (aJ = this.a33[d0].length - 1; 0 <= aJ; aJ--) aK[ht[this.a33[d0][aJ]]] += 3, aK[hu[this.a33[d0][aJ]]]++;
			for (j = a3I - 1; 0 <= j; j--) {
				for (aR = d0 % a3I, aJ = a3I - 1; 0 <= aJ; aJ--) aK[aJ] > aK[aR] && (aR = aJ);
				for (ql = -1, aJ = ay.dn; 0 < aJ; aJ--)
					if (this.nv[aJ] === aR + 1) {
						ql = aJ;
						break
					} if (aK[aR] = 0, -1 !== ql) {
					for (xB = 0, aJ = ay.dn; 0 < aJ; aJ--) a38[ql] > a38[aJ] && xB++;
					if (xB !== ay.dn - 1) {
						for (aJ = this.a33[d0].length - 1; 0 <= aJ; aJ--) a38[ql]++, this.dW[this.a33[d0][aJ]] = ql;
						break
					}
				}
			}
			a3J[d0] = !0
		}
	}, this.a3B = function(ht, hu, a38) {
		for (var j, m, s = this.nv.length - 1, border = a4(ay.dc, ay.dn), a3K = (0 < ay.dc % ay.dn && border++, new Uint8Array(1 + s)), d9 = s; 1 <= d9; d9--) a3K[this.nv[d9]] = d9;
		for (j = 0; j < ay.dc; j++) m = a3K[ht[j] + 1], 0 === this.dW[j] && m <= ay.dn && a38[m] < border && (a38[m]++, this.dW[j] = m);
		for (j = 0; j < ay.dc; j++) m = a3K[hu[j] + 1], 0 === this.dW[j] && m <= ay.dn && a38[m] < border && (a38[m]++, this.dW[j] = m);
		for (d9 = ay.dn; 1 <= d9; d9--)
			for (j = ay.dc - 1; 0 <= j && !(a38[d9] >= border); j--) 0 === this.dW[j] && (a38[d9]++, this.dW[j] = d9)
	}, this.a3C = function() {
		var j, jy, a3E = new Uint16Array(ay.dn);
		for (a3E[ay.dn - 1] = ay.cU, j = ay.dn - 2; 0 <= j; j--) a3E[j] = eA.q8[j].h0;
		for (a3E[0]--, jy = 0 === a3E[0] ? 1 : 0, j = ay.dc; j < ay.cU; j++) this.dW[j] = jy + 1, a3E[jy]--, a3E[jy] <= 0 && jy++
	}, this.a3D = function() {
		for (var j = ay.dc; j < ay.cU; j++) this.dW[j] = 1 + j % ay.dn
	}
}

function a3L() {
	this.v7 = function(size) {
		for (var a3M = bJ, g3 = [], j = 0; j < size; j++) g3.push(String.fromCharCode(a3M.bK(16)));
		return g3.join("")
	}, this.t0 = function(bv) {
		return 20 < (bv = bv.trim()).length ? bv.substring(0, 20) : bv
	}
}

function a3N() {
	var aa, ij, iv, a3O, a3P, a3Q, a3R, ll, a3S, a3T, a3U, a3V, a3W = !1,
		kq = (this.fQ = !1, this.aZ = 0, new Array(2));

	function fp() {
		var aZ = ef.aZ,
			d8 = (ll = !1, a3a(iv, aZ, aa), Math.floor(aZ / 2));
		1 === a3O ? (iv.fillStyle = aC.wv, iv.fillRect(d8, 0, d8, aa)) : -1 === a3O && (iv.fillStyle = aC.a3b, iv.fillRect(0, 0, d8, aa)), a3c(iv, aZ, aa, 2);
		var d8 = (d8 = Math.floor(.25 * aa)) < 2 ? 2 : d8,
			zL = (iv.fillStyle = aC.a3d, Math.floor((aa - 4) * a3P[1] / a3Q[1]));
		0 < zL && iv.fillRect(2, aa - 2 - zL, d8, zL), 0 < (zL = Math.floor((aa - 4) * a3P[0] / a3Q[0])) && iv.fillRect(aZ - 2 - d8, aa - 2 - zL, d8, zL);
		d8 = (d8 = Math.floor(aa / 8)) < 2 ? 2 : d8, z3(iv, Math.floor(.4 * aa), 0, aa, d8, .5, !1), z3(iv, Math.floor(aZ - 1.4 * aa), 0, aa, d8, .5, !0), zL = 1.1 * aa / kq[0].width;
		iv.imageSmoothingEnabled = !0, iv.setTransform(zL, 0, 0, zL, (aZ - zL * kq[0].width) / 2, -.05 * aa), iv.drawImage(kq[+a3W], 0, 0), iv.setTransform(1, 0, 0, 1, 0, 0)
	}

	function it() {
		ll = !0, a3S = 140, a3O = 0, a3R = [], ef.fQ = !1, aw.sI(247, 0), a3P[0] = a3P[1] = 0
	}

	function iu() {
		return ed.qa(aw.a3o()) ? ed.l - aa - af.gap : ee.qa(aw.a3p()) ? ee.iu() - aa - af.gap : ad.aa - aa - qT.qU() * af.gap
	}
	this.a3X = function() {
		for (var j = 0; j < 2; j++) kq[j] = aL.ij.jo(iw.get(3), 8 - j, aC.a3Y), kq[j] = aL.ij.a3Z(kq[j])
	}, this.aB = function() {
		a3U = a3V = 0, this.fQ = !1, ll = a3W = !1, a3S = 140, a3P = [a3O = 0, 0], a3Q = [1, 1], a3R = [], a3T = new Uint32Array(10), this.resize()
	}, this.resize = function() {
		aa = ed.aa, this.aZ = 4 * aa, (ij = document.createElement("canvas")).width = this.aZ, ij.height = aa, iv = ij.getContext("2d", {
			alpha: !0
		}), fp()
	}, this.f2 = function() {
		ll && fp()
	}, this.fW = function(k, l) {
		var dI;
		return !!this.fQ && !(k < ad.aZ - this.aZ - af.gap || l < (dI = iu()) || dI + aa < l || (ay.bC || bg.k4.bp(k > ad.aZ - af.gap - this.aZ / 2 ? 1 : 0), 0))
	}, this.bF = function() {
		if (0 < a3V) 0 === --a3V && it();
		else if (this.fQ) 270 == --a3S && 2 <= a3U && function() {
			var j;
			for (j = bd - 1; 0 <= j; j--)
				if (eN.o0(rs[j])) return;
			return 1
		}() && (ll = !0, a3P[0] += a3Q[0]), 180 === a3S && 3 * a3P[0] < a3Q[0] ? it() : a3P[0] >= a3Q[0] ? a3W ? mY.mZ.tx() : mY.mZ.ma(-1) : a3P[1] >= a3Q[1] ? a3V = 4 : a3S <= 0 && it();
		else if (function() {
				var j;
				for (j = 9; 0 <= j; j--) 12 < Math.abs(a3T[j] - bV.bX[mo[j]]) && (a3S = 140), a3T[j] = bV.bX[mo[j]];
				if (--a3S <= 0) return 1;
				return
			}()) {
			a3W = a3h.ir(), aw.a3i(a3W), this.fQ = !0, ll = !0, a3S = 360;
			for (var y, c3 = 0, j = bd - 1; 0 <= j; j--) eN.o0(rs[j]) && (c3 += bV.bX[rs[j]]);
			a3W ? a3Q[0] = Math.max(a4(6 * c3, 8), 1) : ay.dT ? (y = d4.d5(100 * eV.uY(), ay.dj), y = 150 - (y += 2 * Math.max(y - 75, 0)), y = d4.k3(y, 0, 100), y = d4.d5(y * c3, 100), a3Q[0] = Math.max(y, 1)) : a3Q[0] = Math.max(a4(3 * c3, 5),
				1), a3Q[1] = Math.max(c3 - a3Q[0], 1), a3U++
		}
	}, this.u6 = function() {
		this.fQ && a3P[0] < a3Q[0] && it()
	}, this.a3l = function(player, a3m) {
		var j, c3;
		if (this.fQ) {
			for (j = a3R.length - 1; 0 <= j; j--)
				if (a3R[j] === player) return;
			aw.uh(300, bV.mU[player] + (a3m ? " voted for" : " rejected") + " peace.", 257, player, a3m ? aC.a3n : aC.lx, aC.fr, -1, !0), a3R.push(player), ll = !0, c3 = ay.bB ? a3Q[0] : bV.bX[player], a3m ? a3P[0] += c3 : a3P[1] += c3,
				player === ay.az && (a3O = a3m ? 1 : -1)
		}
	}, this.c9 = function() {
		var l;
		this.fQ && (l = iu(), cA.drawImage(ij, ad.aZ - this.aZ - af.gap, l))
	}
}

function a3q() {
	var k, l, aZ, aa, a3r, a2n, a2o, a3s, player, g3;

	function a3x() {
		return function() {
			var j;
			for (j = 0; j < 8; j++)
				if (k = a4(aZ * eC.random(), eC.value(100)), l = a4(aa * eC.random(), eC.value(100)), a44()) return 1;
			return
		}() || function() {
			var iI, iL, jy, fa, d9, fZ;
			for (iI = a4(aZ * eC.random(), eC.value(100)), iL = a4(aa * eC.random(), eC.value(100)), jy = 40; 1 <= jy; jy--)
				for (fa = aa - jy; 0 <= fa; fa -= 40)
					for (l = (fa + iL) % aa, d9 = 40; 1 <= d9; d9--)
						for (fZ = aZ - d9; 0 <= fZ; fZ -= 40)
							if (k = (fZ + iI) % aZ, a44()) return 1;
			return
		}()
	}

	function a44() {
		for (var i0, jG, gap = a4(a3r - a3s, 2), a2g = a2o + l * a3r + gap, a2p = a2n + k * a3r + gap, jH = a2g + a3s - 1; a2g <= jH; jH--)
			for (jG = a2p + a3s - 1; a2p <= jG; jG--)
				if (i0 = eN.jM(jG, jH), !eN.jU(i0) || eN.o6(i0)) return;
		return 1
	}

	function a3y(fZ, fa) {
		a3t(), a45(fZ - 2, fa - 2)
	}

	function a3t() {
		bV.bW[player] = 0, bV.bY[player] = 0, bV.bX[player] = bV.a46[player] = 0, bV.x9[player] = [], bV.a2N[player] = [], bV.i5[player] = [], bV.a2O[player] = [], bV.jI[player] = bV.jJ[player] = bV.jK[player] = bV.jL[player] = 0
	}

	function a45(fZ, fa) {
		var i0, j, a47, a48;
		for (bV.bW[player] = 1, player < ay.dc ? bV.bY[player] = ay.da : bV.bY[player] = pt[eP.co[player - ay.dc]], bV.jI[player] = fZ + 10, bV.jJ[player] = fa + 10, bV.jL[player] = bV.jK[player] = 0, a47 = fZ; a47 < fZ + 4; a47++)
			for (a48 = fa; a48 < fa + 4; a48++)(fZ < a47 && a47 < fZ + 3 || fa < a48 && a48 < fa + 3) && (i0 = eN.jM(a47, a48), eN.jU(i0)) && (bV.jI[player] = a47 < bV.jI[player] ? a47 : bV.jI[player], bV.jK[player] = a47 > bV.jK[player] ? a47 : bV
				.jK[player], bV.jJ[player] = a48 < bV.jJ[player] ? a48 : bV.jJ[player], bV.jL[player] = a48 > bV.jL[player] ? a48 : bV.jL[player], g3[bV.bX[player]] = i0, bV.bX[player]++, eN.oH(i0, player));
		for (bV.a46[player] = bV.bX[player], j = bV.bX[player] - 1; 0 <= j; j--) eN.ny(g3[j], player) ? (eN.oI(g3[j], player), bV.a2N[player].push(g3[j])) : eN.o7(g3[j]) ? (eN.oI(g3[j], player), bV.i5[player].push(g3[j])) : eN.nw(g3[j]) && (eN.oI(g3[
			j], player), bV.a2O[player].push(g3[j]))
	}

	function a43(fZ, fa) {
		for (var i0, jG, jH = fa; fa - 6 < jH; jH--)
			for (jG = fZ; fZ - 6 < jG; jG--)
				if (i0 = eN.jM(jG, jH), eN.o6(i0)) return;
		return 1
	}
	this.aB = function() {
		var j, fZ, fa;
		if (g3 = new Array(12), a3s = 6, a3r = 10, aZ = a4(b.o, a3r), aa = a4(b.p, a3r), a2n = a4(b.o - a3r * aZ, 2), a2o = a4(b.p - a3r * aa, 2), ay.dl)
			for (j = 0; j < ay.dc; j++) player = j, a3t(), bV.bW[player] = 1;
		if (e4.e5 && e4.e6.a3u) {
			for (player = 0; player < ay.cU; player++)
				if (1 !== bV.bW[player]) {
					if (player < ay.dg) {
						if (function() {
								var fZ = e4.e6.a3u[player] + 1,
									fa = e4.e6.a42[player] + 1;
								if (3 < fZ && fZ < b.o - 5 && 3 < fa && fa < b.p - 5 && eN.jU(eN.jM(fZ, fa)) && a43(fZ + 3, fa + 3)) return a3y(fZ + 1, fa + 1), 1;
								return
							}()) continue;
						if (a3x()) {
							fZ = a2n + k * a3r + a4(a3r, 2), fa = a2o + l * a3r + a4(a3r, 2), a3y(fZ, fa);
							continue
						}
					}
					a3t()
				}
		} else ! function() {
			var fZ, fa;
			for (player = 0; player < ay.cU; player++) 1 !== bV.bW[player] && (player < ay.dg && a3x() ? (fZ = a2n + k * a3r + a4(a3r, 2), fa = a2o + l * a3r + a4(a3r, 2), a3y(fZ, fa)) : a3t())
		}();
		eG.g8[7] = bV.bX[ay.az], eG.g8[8] = bV.bY[ay.az]
	}, this.a49 = function(a0v, a4A, a4B) {
		var j, fZ, fa, i0, k, l;
		for (player = a0v, j = 0; j < 20; j++)
			for (fZ = a4A + j; a4A - j <= fZ; fZ--)
				for (fa = a4B + j; a4B - j <= fa; fa--)
					if ((fZ === a4A + j || fZ === a4A - j || fa === a4B + j || fa === a4B - j) && 3 < fZ && fZ < b.o - 5 && 3 < fa && fa < b.p - 5 && eN.jU(eN.jM(fZ, fa)) && a43(fZ + 3, fa + 3)) {
						if (0 < bV.bX[player]) {
							for (l = k = i0 = void 0, k = bV.jK[player]; k >= bV.jI[player]; k--)
								for (l = bV.jL[player]; l >= bV.jJ[player]; l--) i0 = 4 * (l * b.o + k), eN.o3(player, i0) && (eN.oC(i0), bV.bX[player]--);
							a3t()
						}
						return a45(fZ - 1, fa - 1), !0
					} return !1
	}, this.a4D = function(a0v) {
		player = a0v, a3x() ? a3y(a2n + k * a3r + a4(a3r, 2), a2o + l * a3r + a4(a3r, 2)) : a3t()
	}
}

function a4E() {
	this.d5 = function(jy, d9) {
		return Math.floor((jy + .5) / d9)
	}, this.a4F = function(jy, d9) {
		return Math.floor(jy * (d9 + .5))
	}, this.sqrt = function(y) {
		return ~~Math.sqrt(y + .5)
	}, this.pow = function(aR) {
		return Math.floor(Math.pow(2, aR) + .5)
	}, this.k3 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.a4G = function(bH, be, bf) {
		return Math.max(Math.min(bH, be), bf)
	}, this.a4H = function(a4I, a4J, k, l) {
		k -= a4I, a4I = l - a4J, l = 0;
		return 0 == k ? l = 0 <= a4I ? Math.PI : 0 : (l = Math.atan(a4I / k), l += 0 < k ? .5 * Math.PI : 1.5 * Math.PI), l
	}, this.log2 = function(y) {
		return Math.floor(!!y * (1 + Math.log2(y + .5)))
	}
}

function a4L() {
	var a4M, a4N, size, a0v, co, id;

	function a4O(player) {
		return player < ay.dc ? a4M * player : a4M * ay.dc + a4N * (player - ay.dc)
	}
	this.aB = function() {
		a4M = ay.dc < 16 ? 12 : 8, a4N = 4;
		var s = a4O(ay.cU);
		size = new Uint8Array(ay.cU), a0v = new Uint16Array(s), co = new Uint32Array(s), id = new Uint16Array(s)
	}, this.a4P = function(a17, a4Q) {
		var a4R = this.a4S(a17, a4Q);
		this.a4T(a17, a4Q, 0), a4R = aL.j2.oV(a17, a4R), a17 === ay.az && (eG.g8[13] -= a4R)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.a2H = function(player, a4Q) {
		var a4V, a4Q = function(player, a4Q) {
			var j, d8 = a4O(player);
			for (j = size[player] - 1; 0 <= j; j--)
				if (0 === id[d8 + j] && a0v[d8 + j] === a4Q) return j;
			return size[player]
		}(player, a4Q);
		a4Q !== size[player] && (a4V = co[a4O(player) + a4Q], this.a1H(player, a4Q), this.a1I(player, a4V, ay.cU))
	}, this.a4W = function(player, a4Q) {
		for (var d8 = a4O(player), j = size[player] - 1; 0 <= j; j--)
			if (0 === id[d8 + j] && a0v[d8 + j] === a4Q) return !0;
		return !1
	}, this.a4X = function(player) {
		return player < ay.dc ? size[player] < a4M : size[player] < a4N
	}, this.a4Y = function(player) {
		return size[player]
	}, this.a4Z = function(player, j) {
		return a0v[a4O(player) + j]
	}, this.a4a = function(player, j) {
		return id[a4O(player) + j]
	}, this.nJ = function(player, a1O) {
		for (var d8 = a4O(player), j = size[player] - 1; 0 <= j; j--)
			if (id[d8 + j] === a1O) return j;
		return -1
	}, this.nI = function(player, j) {
		return co[a4O(player) + j]
	}, this.a4S = function(player, a4Q) {
		for (var d8 = a4O(player), j = size[player] - 1; 0 <= j; j--)
			if (0 === id[d8 + j] && a0v[d8 + j] === a4Q) return co[d8 + j];
		return 0
	}, this.a2G = function(player) {
		for (var d8 = a4O(player), y = 0, j = size[player] - 1; 0 <= j; j--) y += co[d8 + j];
		return y
	}, this.gG = function(player) {
		for (var d8 = a4O(player), y = 0, j = size[player] - 1; 0 <= j; j--) 0 === id[d8 + j] && (y += co[d8 + j]);
		return y
	}, this.a4b = function(player) {
		for (var d8 = a4O(player), h0 = 0, j = size[player] - 1; 0 <= j; j--) 0 < id[d8 + j] && h0++;
		return h0
	}, this.a4T = function(player, a4Q, a4V) {
		for (var d8 = a4O(player), j = size[player] - 1; 0 <= j; j--) 0 === id[d8 + j] && a0v[d8 + j] === a4Q && (co[d8 + j] = a4V)
	}, this.a1N = function(player, j, a4V) {
		co[a4O(player) + j] = a4V
	}, this.a1I = function(player, a4V, a4Q) {
		var j, d8 = a4O(player);
		for (a4Q === ay.az && eG.g8[player < ay.dc ? 6 : 5]++, j = size[player] - 1; 0 <= j; j--)
			if (0 === id[d8 + j] && a0v[d8 + j] === a4Q) return co[d8 + j] += a4V, void(co[d8 + j] = co[d8 + j] > ay.dY ? ay.dY : co[d8 + j]);
		a0v[d8 + size[player]] = a4Q, co[d8 + size[player]] = a4V, id[d8 + size[player]] = 0, size[player]++, player < ay.dc && (a4Q === ay.az ? aw.mc(player, 5) : player === ay.az && er.sH(a4Q))
	}, this.a4c = function(player, a4V, a1O) {
		var d8 = a4O(player);
		bV.bW[player] = 2, a0v[d8 + size[player]] = 0, co[d8 + size[player]] = a4V, id[d8 + size[player]] = a1O, size[player]++
	}, this.a1H = function(player, a3) {
		var jy, d8;
		if (0 !== size[player])
			for (d8 = a4O(player), size[player]--, jy = a3; jy < size[player]; jy++) a0v[d8 + jy] = a0v[d8 + jy + 1], co[d8 + jy] = co[d8 + jy + 1], id[d8 + jy] = id[d8 + jy + 1]
	}, this.a2C = function(player) {
		for (var jy, d8, a2B = [], j = bd - 1; 0 <= j; j--)
			for (d8 = a4O(rs[j]), jy = size[rs[j]] - 1; 0 <= jy; jy--)
				if (0 === id[d8 + jy] && a0v[d8 + jy] === player) {
					a2B.push(rs[j]);
					break
				} return a2B
	}
}

function a4d() {
	this.a4e = "https://", this.a4f = this.a4e + "territorial.io/", this.a4g = this.a4f + "changelog", this.a4h = this.a4f + "terms", this.a4i = this.a4f + "cookie_policy", this.a4j = this.a4f + "privacy", this.a4k = this.a4f + "tutorial", this.a4l =
		this.a4f + "players", this.a4m = this.a4f + "clans", this.a4n = this.a4f + "clan-results", this.a4o = this.a4e + "play.google.com/store/apps/details?id=territorial.io", this.p7 = this.a4e + "apps.apple.com/app/id1581110913", this.a4p = this
		.a4e + "www.youtube.com/watch?v=toZTQ8aRdFc", this.a4q = this.a4e + "discord.gg/pthqvpTXmh", this.a4r = this.a4e + "www.instagram.com/davidtschacher/", this.js =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function a4s(title, zG, qr) {
	var qp, a4t;
	this.show = function() {
		qp.show(), this.resize()
	}, this.fb = function() {
		qp.fb()
	}, this.resize = function() {
		qp.resize(), a4t.resize()
	}, this.qz = function(aJ) {
		2 === aJ && qp.r0[0].a9()
	}, qr = qr || [new a5("❌ " + aP.aQ[92], function() {
		ak.qs()
	}, aC.p8)], qp = new qv(title, qr), a4t = new a4u(qp.qx, zG), aL.ab.textAlign(qp.qx.style, 1)
}

function hZ() {
	this.hi = ["n", "en", "r"], this.aQ = ["Akzeptieren", "Du hast {0} ausgelöscht.", "Du wurdest von {0} ausgelöscht.", "Herzlichen Glückwunsch! Du hast das Spiel gewonnen.", "{0} hat das Spiel gewonnen.", "{0} hat den Nichtangriffspakt gebrochen.",
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

function a4v() {
	var a4w, my, mz, n0, a4x, a4y;

	function a52(a54) {
		for (var j = my - 1; 0 <= j; j--) 0 === n0[mz[j]] && bV.bX[mz[j]] >= a54 && a51(mz[j])
	}

	function a50(player) {
		10 === n0[player] ? n0[player] = a4w : bV.bX[player] < 1e3 ? n0[player] = 3 : bV.bX[player] < 1e4 ? n0[player] = 2 : bV.bX[player] < 6e4 ? n0[player] = 1 : n0[player] = 0
	}
	this.aB = function() {
		a4x = a4y = 0, a4w = 6, my = 0, mz = new Uint16Array(ay.cU), n0 = new Uint8Array(ay.cU)
	}, this.bF = function() {
		var j;
		for (a4x = eG.g8[13], a4y = bV.bY[ay.az], j = my - 1; 0 <= j; j--) 10 === n0[mz[j]] ? a50(mz[j]) : 0 == n0[mz[j]]-- && (a50(mz[j]), a51(mz[j]));
		16e4 <= bV.bX[mo[0]] && (a52(16e4), 3e5 <= bV.bX[mo[0]]) && a52(3e5), bV.bX[ay.az] > eG.g8[7] && (eG.g8[7] = bV.bX[ay.az]), eG.g8[14] += a4y - bV.bY[ay.az] + a4x - eG.g8[13]
	}, this.n7 = function(player) {
		for (var jy, j = my - 1; 0 <= j; j--)
			if (player === mz[j]) {
				for (my--, jy = j; jy < my; jy++) mz[jy] = mz[jy + 1];
				return
			}
	}, this.nA = function(player, a55) {
		for (var j = my - 1; 0 <= j; j--)
			if (player === mz[j]) return;
		mz[my++] = player, n0[player] = a55 ? 2 : 10
	}
}

function a24() {
	this.a56 = function(y) {
		return [y >> 12 & 63, y >> 6 & 63, 63 & y]
	}, this.a57 = function(y) {
		for (var g3 = this.a56(y), j = 0; j < 3; j++) g3[j] = ~~(4.05 * g3[j]);
		return g3
	}, this.a58 = function(y) {
		y = this.a57(y);
		return aL.color.wc(y[0], y[1], y[2])
	}, this.a59 = function(g3) {
		for (var j = 0; j < 3; j++) g3[j] = ~~(g3[j] / 4.04);
		return (g3[0] << 12) + (g3[1] << 6) + g3[2]
	}, this.wc = function(jR, xB, d9) {
		return "rgb(" + jR + "," + xB + "," + d9 + ")"
	}, this.a5A = function(jR, xB, d9, jy) {
		return "rgba(" + jR + "," + xB + "," + d9 + "," + jy.toFixed(3) + ")"
	}, this.aM = function(aJ) {
		for (var g3 = aJ.split("(")[1].split(","), mB = (g3.length, ca.mB), j = 0; j < 3; j++) mB[j] = parseInt(g3[j]);
		return mB
	}, this.aG = function(a5B, d0) {
		for (var g3 = a5B.slice(a5B.indexOf("(") + 1, a5B.indexOf(")")).split(","), mB = ca.mB, j = 0; j < 3; j++) mB[j] = d4.k3(parseInt(g3[j].trim(), 10) + d0, 0, 255);
		return 3 === g3.length ? this.wc(mB[0], mB[1], mB[2]) : this.a5A(mB[0], mB[1], mB[2], parseFloat(g3[3].trim()))
	}, this.a5C = function(g3) {
		for (var bv = "#", j = 0; j < 3; j++) {
			var jR = g3[j].toString(16);
			bv += 1 === jR.length ? "0" + jR : jR
		}
		return bv
	}, this.a5D = function(bv) {
		var jR, xB;
		return bv.length < 7 ? aC.cF : (jR = parseInt(bv.slice(1, 3), 16), xB = parseInt(bv.slice(3, 5), 16), bv = parseInt(bv.slice(5, 7), 16), this.wc(jR, xB, bv))
	}
}

function a5E() {
	var aa, ij, li, a5F, a5G, a5H = -1;

	function a5I() {
		var iz, iv = ij.getContext("2d", {
			alpha: !0
		});
		iv.clearRect(0, 0, aa, aa), iv.fillStyle = aC.lQ, iv.fillRect(0, 0, aa, aa), 0 === a5F && (iv.fillStyle = aC.a5J, iv.fillRect(0, 0, aa, aa)), iv.fillStyle = aC.aD, iv.fillRect(0, 0, aa, 1), iv.fillRect(0, 0, 1, aa), iv.fillRect(0, aa - 1, aa,
			1), iv.fillRect(aa - 1, 0, 1, aa), iz = .9 * aa / iw.get(0).width, iv.imageSmoothingEnabled = !0, iv.setTransform(iz, 0, 0, iz, Math.floor((aa - iz * iw.get(0).width) / 2), Math.floor((aa - iz * iw.get(0).height) / 2)), iv.drawImage(
			iw.get(0), 0, 0), iv.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a5L(fX, fY) {
		if (!ei.fA) return fX <= aa + af.gap && fY >= ed.l ? 0 : -1;
		if (fX <= 4 * aa + af.gap) {
			if (fY >= ed.l) return 0;
			if (fY >= ed.l - aa - a5G * af.gap) return 2
		} else if (fX <= 7 * aa + af.gap && fY >= ed.l - aa - a5G * af.gap) return 1;
		return -1
	}
	this.fA = !1, this.aB = function() {
		a5F = -1, this.fA = !1, a5G = bw.bx.by() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		aa = ed.aa, (ij = document.createElement("canvas")).width = aa, ij.height = aa, li = aL.ab.bz(1, (bw.bx.by() ? .5 : .45) * aa), a5I()
	}, this.fk = function() {
		this.fA = !this.fA, this.fA ? (f7.ok.hideCMPButton(), ee.xy(!1), ay.bC && ee.fB && ee.xz(!0), this.a5K()) : (a5F = -1, a5I(), !ay.bB || 1 !== ay.di || ay.dl || ay.bC || bw.bx.setState(1)), c0.c1 = !0
	}, this.a5K = function() {
		(ay.bB || ay.bC) && 1 === ay.di && (eb.f2(!0), ay.dl || setTimeout(function() {
			eK.tJ()
		}, 0), bw.bx.setState(0))
	}, this.fW = function(fX, fY) {
		return 0 <= (a5H = a5L(fX, fY))
	}, this.fi = function(fX, fY) {
		fX = a5L(fX, fY);
		fX !== a5F && (a5F = fX, this.fA || a5I(), c0.c1 = !0)
	}, this.xQ = function(fX, fY) {
		var a3G = a5L(fX, fY);
		if (-1 === a3G) return !1;
		if (a5H !== a3G) return !1;
		if (this.fA) {
			if (ay.dk) return 0 <= a3G && ee.xy(!1), !ay.bC;
			if (0 === a3G) ay.f3();
			else if (1 === a3G) this.fk();
			else if (2 === a3G) ak.am(1, 0);
			else {
				if (! function() {
						if (ay.bB || 1 !== ay.di || ay.bC || eY.fQ) return 1;
						ei.fk()
					}()) return !1;
				xi.xj(fX, fY) || ek.xk(fX, fY)
			}
			return !0
		}
		return 0 === a3G && (this.fk(), !0)
	}, this.c9 = function() {
		var aZ;
		this.fA ? (aZ = Math.floor(5.5 * aa), cA.setTransform(1, 0, 0, 1, af.gap, ed.l), cA.fillStyle = aC.lQ, cA.fillRect(0, 0, aZ, aa), 0 === a5F ? (cA.fillStyle = aC.a5J, cA.fillRect(0, 0, 4 * aa, aa)) : 1 === a5F && (cA.fillStyle = aC.a5J, cA
				.fillRect(4 * aa, 0, Math.floor(1.5 * aa), aa)), cA.fillStyle = aC.aD, cA.fillRect(0, 0, aZ, 1), cA.fillRect(0, 0, 1, aa), cA.fillRect(4 * aa, 0, 1, aa), cA.fillRect(0, aa - 1, aZ, 1), cA.fillRect(aZ - 1, 0, 1, aa), cA.font =
			li, aL.ab.textBaseline(cA, 1), aL.ab.textAlign(cA, 1), cA.fillText(aP.aQ[79], 2 * aa, .54 * aa), aZ = .4 * aa, ei.g0(af.gap + 4 * aa + (1.5 * aa - aZ) / 2, ed.l + .3 * aa, aZ), aZ = 1, cA.setTransform(1, 0, 0, 1, af.gap, ed.l -
				aZ * a5G * af.gap - aZ * aa), cA.fillStyle = aC.lQ, cA.fillRect(0, 0, 4 * aa, aa), a5F === aZ + 1 && (cA.fillStyle = aC.a5J, cA.fillRect(0, 0, 4 * aa, aa)), cA.fillStyle = aC.aD, cA.fillRect(0, 0, 4 * aa, 1), cA.fillRect(0, 0,
				1, aa), cA.fillRect(4 * aa, 0, 1, aa), cA.fillRect(0, aa - 1, 4 * aa, 1), cA.fillText(aP.aQ[79 + aZ], 2 * aa, .54 * aa), cA.setTransform(1, 0, 0, 1, 0, 0)) : cA.drawImage(ij, af.gap, ed.l)
	}, this.mb = function(player) {
		return 0 !== bV.bW[player] && 2 !== ay.di && eN.o0(player)
	}, this.g0 = function(k, l, s) {
		cA.setTransform(1, 0, 0, 1, k, l), cA.lineWidth = af.k5, cA.strokeStyle = aC.aD, cA.beginPath(), cA.moveTo(0, 0), cA.lineTo(s, s), cA.moveTo(0, s), cA.lineTo(s, 0), cA.stroke()
	}
}

function a5Q() {
	var a3 = 0,
		a5R = new Uint16Array(32);

	function remove(a5U) {
		var j;
		for (a3 -= 2, j = a5U; j < a3; j += 2) a5R[j] = a5R[j + 2], a5R[j + 1] = a5R[j + 3]
	}
	this.aB = function() {
		a3 = 0
	}, this.bF = function() {
		var j, a0v, iQ;
		if (0 !== a3)
			if (0 === bV.bW[ay.az] || eq.a4b(ay.az) === eq.a4Y(ay.az)) a3 = 0;
			else
				for (j = a3 - 2; 0 <= j; j -= 2)(a0v = a5R[j]) < ay.cU && 0 === bV.bW[a0v] ? remove(j) : (iQ = a5R[j + 1], (a0v >= ay.cU && a5S(ay.az) || a0v < ay.cU && a5T(ay.az, a0v)) && (bg.k4.bj(iQ, a0v), remove(j)))
	}, this.a5V = function(a0v, iQ) {
		! function(a0v, iQ) {
			var j;
			for (j = 0; j < a3; j += 2)
				if (a5R[j] === a0v) return a5R[j + 1] = Math.min(a5R[j + 1] + iQ, 1023), 1;
			return
		}(a0v, iQ) && 32 !== a3 && (a5R[a3] = a0v, a5R[a3 + 1] = iQ, a3 += 2)
	}
}

function a5X() {
	this.ai = {}, this.a5Y = ["", "", ""], this.a5Z = function() {
		ak.am(5, 5)
	}, this.a5a = function() {
		ak.al(), eA.aB()
	}, this.a5b = function() {
		ak.al(), y4.a5c(aS.ai.data[10].value), y4.aB()
	}, this.zr = function() {
		ak.am(0 === cB.cC() ? 5 : 0)
	}, this.a5d = function() {
		if (1 === aS.ai.data[130].value) ak.am(8, ak.yO().yP, new qy(24, {
			hL: aS.ai.data[125].value,
			hB: aS.ai.data[128].value,
			hC: aS.ai.data[129].value
		}));
		else {
			for (var g3 = (g3 = aS.ai.data[126].value.split(",")).slice(0, 10), j = 0; j < g3.length; j++) g3[j] = g3[j].trim().slice(0, 7).toUpperCase();
			1 === g3.length && 0 === g3[0].length && (g3 = []), ak.am(8, ak.yO().yP, new qy(23, {
				hL: aS.ai.data[125].value,
				hM: g3
			}))
		}
	}, this.a5e = function(yP, target) {
		ak.am(4, yP, new p6("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + ju.a4j +
			"' target='_blank'>" + ju.a4j + "</a>", !1, [new a5("❌ " + aP.aQ[92], function() {
				ak.am(yP)
			}), new a5("✅ " + aP.aQ[0], function() {
				aS.aT.aU(140, 1), 0 === target ? ak.am(2, yP) : ak.am(8, yP, new qy(target))
			})]))
	}, this.vm = function() {
		for (var j = 0; j < 3; j++) this.a5Y[j] = un.hP.v7(bJ.bK(5));
		this.a5Y[1] = "[" + this.a5Y[1] + "]", 5 === ak.a5f && ak.yO().a5g.aU(this.a5Y)
	}
}

function a5h(data) {
	var qp, a5i, a5j, zm, a5k, a5l, a5m, colors, a5n, a5o, c3, a5x, d7, a5p = 0,
		a5q = 0,
		a5r = !1,
		a5s = !1,
		a5t = [1, 5, 60, 240, 1440, 10080, 43200];

	function a6L(fX, fY) {
		! function(fX, fY) {
			return a5i < fX && fX < a5i + zm && a5j < fY && fY < a5j + a5k
		}(a5p = fX, a5q = fY) ? (a5r && (c0.c1 = !0), a5r = !1) : (a5r = !0, c0.c1 = !0)
	}
	this.show = function() {
		a5s = aS.ai.data[127].value, qp.show(), this.resize()
	}, this.fb = function() {
		qp.fb()
	}, this.resize = function() {
		qp.resize();
		var aJ = ad.pW,
			zt = qp.zu(),
			a60 = aJ * zt.zw,
			aJ = aJ * zt.zv;
		a5l = aL.ab.sn(.06), a5m = aL.ab.sn(.04), a5i = aL.ab.sn(.06), a5j = aJ + a5l, zm = ad.aZ - a5i - a5m, a5k = a60 + aJ - a5j - a5m
	}, this.c9 = function() {
		qp.c9(),
			function() {
				var j, a63, h0, k, jy, g3 = data.data,
					a64 = 1,
					a65 = .125,
					a66 = a5s ? 65536 : 0;
				for (j = 0; j < g3.length; j++)
					for (a63 = g3[j].a63, h0 = a63.length, a64 = Math.max(h0, a64), jy = 0; jy < h0; jy++) a65 = Math.max(a63[jy], a65), a66 = Math.min(a63[jy], a66);
				var dI = a5j + a5k,
					a4B = a5k / (a65 - a66),
					a4A = 1 / (a64 - 1);
				for (cA.lineWidth = af.k5, j = 0; j < g3.length; j++) {
					for (a63 = g3[j].a63, h0 = a63.length, k = a5i, cA.beginPath(), cA.moveTo(k + zm, dI - a4B * (a63[h0 - 1] - a66)), jy = h0 - 2; 0 <= jy; jy--) cA.lineTo(k + a4A * jy * zm, dI - a4B * (a63[jy] - a66));
					cA.strokeStyle = colors[j], cA.stroke()
				}(function(a66, a65, dI, a4B) {
					cA.font = aL.ab.bz(0, .25 * a5i), aL.ab.textBaseline(cA, 1), aL.ab.textAlign(cA, 2), cA.fillStyle = colors[0];
					for (var k = .92 * a5i, j = 0; j < 3; j++) {
						var y = a66 + j * (a65 - a66) / 2;
						cA.fillText((y / 1e3).toFixed(3), k, dI - a4B * (y - a66))
					}
				})(a66, a65, dI, a4B),
				function(a64) {
					var l = a5j + a5k + .15 * a5m;
					cA.font = aL.ab.bz(0, .4 * a5m), aL.ab.textBaseline(cA, 0), aL.ab.textAlign(cA, 2), cA.fillStyle = colors[0], cA.fillText(aL.a25.a69(a5n), a5i + zm, l), aL.ab.textAlign(cA, 0), cA.fillText(aL.a25.a69(new Date(a5o.getTime() -
						6e4 * (a64 - 1) * a5t[data.hL])), a5i, l)
				}(a64),
				function(a64, a66, a65) {
					if (a5r && !(a64 < 2)) {
						for (var l0, a3 = (a5p - a5i) / zm * (a64 - 1), a6A = Math.floor(a3), a6B = Math.floor(1 + a3), a6C = a3 - a6A, a6D = 1e5, a6E = -1, a6F = -1, a6G = a65 - (a65 - a66) * (a5q - a5j) / a5k, g3 = data.data, j = 0; j < g3
							.length; j++) {
							var w, a63 = g3[j].a63;
							a63.length <= a6B || (a63 = a63[a6A] + a6C * (a63[a6B] - a63[a6A]), (w = Math.abs(a6G - a63)) < a6D && (a6D = w, a6E = j, a6F = a63))
						} - 1 !== a6E && (a65 = a5j + a5k - (a6F - a66) / (a65 - a66) * a5k, cA.lineWidth = .5 * af.k5, cA.strokeStyle = colors[a6E], cA.beginPath(), cA.moveTo(a5i, a65), cA.lineTo(a5p, a65), cA.lineTo(a5p, a5j + a5k), cA
						.stroke(), cA.beginPath(), cA.arc(a5p, a65, .1 * a5i, 0, 2 * Math.PI), cA.fillStyle = colors[a6E], cA.fill(), a66 = a5j + a5k + .15 * a5m, aL.ab.textAlign(cA, 1), l0 = a64 - 2 < a3 ? (l0 = a5o.getTime() - 6e4 * a5t[
								data.hL], new Date(l0 + (a3 - (a64 - 2)) * (a5n.getTime() - l0))) : new Date(a5o.getTime() - 6e4 * (a64 - a3 - 1) * a5t[data.hL]), a64 = aL.a25.a69(l0), a3 = aL.ab.measureText(a64), l0 = d4.k3(a5p, a5i + .5 *
								a3, a5i + zm - .5 * a3), cA.fillStyle = aL.color.wc(70, 50, 20), cA.fillRect(l0 - .52 * a3, a5j + a5k, 1.04 * a3, .55 * a5m), cA.fillStyle = colors[0], cA.fillText(a64, l0, a66), cA.font = aL.ab.bz(0, .25 *
								a5i), aL.ab.textBaseline(cA, 1), aL.ab.textAlign(cA, 2), l0 = .92 * a5i, a64 = (a6F / 1e3).toFixed(3), a3 = aL.ab.measureText(a64), a66 = l0 - 1.04 * a3, cA.fillStyle = aL.color.wc(70, 50, 20), cA.fillRect(a66,
								a65 - .1625 * a5i, a5i - a66, .275 * a5i), cA.fillStyle = colors[a6E], cA.fillText(a64, l0, a65))
					}
				}(a64, a66, a65)
			}(), cA.lineWidth = af.k5, cA.strokeStyle = aC.aD, cA.beginPath(), cA.moveTo(a5i, a5j), cA.lineTo(a5i, a5j + a5k), cA.lineTo(a5i + zm, a5j + a5k), cA.stroke();
		var j, fontSize = .5 * a5l,
			g3 = (cA.font = aL.ab.bz(0, fontSize), aL.ab.textBaseline(cA, 1), aL.ab.textAlign(cA, 0), data.data),
			s = g3.length,
			l = a5j - .5 * a5l,
			bv = "";
		for (j = 0; j < s; j++) bv += g3[j].name + "  ";
		bv = bv.trim();
		var gE = aL.ab.measureText(bv),
			k = .5 * (ad.aZ - gE);
		for (gE > ad.aZ && (k = 0, cA.font = aL.ab.bz(0, ad.aZ / gE * fontSize)), j = 0; j < s; j++) cA.fillStyle = colors[j], cA.fillText(g3[j].name, k, l), k += aL.ab.measureText(g3[j].name + "  ")
	}, this.fW = function(fX, fY) {
		a6L(fX, fY)
	}, this.fi = function(fX, fY) {
		a6L(fX, fY)
	}, this.qz = function(aJ) {
		2 === aJ && qp.r0[0].a9()
	}, c3 = new Date, a5x = 6e4 * c3.getTimezoneOffset(), d7 = c3.getTime() - a5x, a5n = new Date(d7), 6 === data.hL ? function(c3, a5x) {
		var a5z = c3.getUTCFullYear(),
			c3 = c3.getUTCMonth() + 1;
		a5o = c3 < 12 ? new Date(Date.UTC(a5z, c3) - a5x) : new Date(Date.UTC(a5z + 1, 0) - a5x)
	}(c3, a5x) : (a5x = 6e4 * a5t[data.hL], a5o = data.hL <= 4 ? new Date(d7 + a5x - c3.getTime() % a5x) : new Date(d7 + a5x - (c3.getTime() + 2592e5) % a5x)), d7 = aL.color, colors = [aC.aD, d7.wc(255, 0, 0), d7.wc(0, 200, 0), d7.wc(80, 80,
		255), d7.wc(255, 255, 0), d7.wc(255, 0, 255), d7.wc(0, 255, 255), d7.wc(255, 140, 0), d7.wc(128, 128, 128), d7.wc(0, 255, 140)
	], qp = new qv("Clan Chart, " + aS.ai.data[125].hh[data.hL] + ", " + aL.a25.a5w(a5n), [new a5("❌ " + aP.aQ[92], function() {
		ak.ba.zr()
	}), new a5("🛠️ Custom", function() {
		ak.am(14)
	})], !1)
}

function a6M() {
	var a6N, a6O, zl, a6P, a6Q;
	this.a5g = new a6R, zl = new aV([.45, .27], [.5, .5], 2 / 3), a6O = [new a5("⚔️<br>Multiplayer", function() {
			a6S(0)
		}, aC.a6T), new a5("🗡️<br>Single Player", function() {
			a6S(1)
		}, aC.a6U), new a5("🔑<br>My Account", function() {
			a6S(2)
		}, aC.a6V), new a5("⚙️<br>Menu", function() {
			a6S(3)
		}, aC.a6W), new a5("", function() {
			ak.am(12)
		}, aC.aF, !1),
		new a5("FX Client settings", function() {
			WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5")
	], a6P = new yH(aS.ai.data[122]);
	for (var j = 0; j < a6O.length; j++) a6O[j].button.style.position = "absolute";

	function a6S(a3) {
		bw.bx.setState(10), e4.gk(), iw.zZ() || iw.a6X(), 0 === a3 ? ak.ba.a5b() : 1 === a3 ? ak.ba.a5a() : 2 === a3 ? 0 !== bw.id || aS.ai.data[140].value ? ak.am(8, ak.a5f, new qy(16)) : ak.ba.a5e(ak.a5f, 16) : 3 === a3 && ak.am(1, ak.a5f)
	}
	a6P.aR.style.position = "absolute", a6P.aR.style.textAlign = "center", a6P.aR.placeholder = "Your Kingdom's Name", this.show = function() {
		cB.setState(0), bw.bx.setState(12), this.a5g.show(), a6O[4].aE(aL.color.a58(aS.ai.data[121].value)), this.resize(), document.body.appendChild(a6P.aR);
		for (var j = 0; j < a6O.length; j++) document.body.appendChild(a6O[j].button);
		1 !== bw.id || bw.ot < 5 || (a6Q && c0.gM > a6Q + 144e5 ? bw.gj.setState(14) : a6Q = c0.gM)
	}, this.fb = function() {
		this.a5g.fb(), document.body.removeChild(a6P.aR);
		for (var j = 0; j < a6O.length; j++) document.body.removeChild(a6O[j].button)
	}, this.resize = function() {
		this.a5g.resize(), zl.resize();
		var gap = .5 * af.gap,
			pN = 10 / 99 * .84 * zl.aZ,
			a6a = .16 * zl.aa,
			z0 = .19 * zl.aZ,
			k = zl.k + z0,
			pN = zl.l + pN + 3 * gap,
			aZ = .5 * (zl.aZ - gap) - z0,
			z0 = zl.aZ - 2 * z0 - a6a - gap,
			z0 = (aL.ab.sj(a6P.aR, k, pN, z0, a6a), aL.ab.sj(a6O[4].button, k + z0 + gap, pN, a6a, a6a), .5 * (zl.l + zl.aa - (pN += a6a + gap) - gap));
		aL.ab.sj(a6O[0].button, k, pN, aZ, z0), aL.ab.sj(a6O[1].button, k + aZ + gap, pN, aZ, z0), aL.ab.sj(a6O[2].button, k, pN + z0 + gap, aZ, z0), aL.ab.sj(a6O[3].button, k + aZ + gap, pN + z0 + gap, aZ, z0);
		aL.ab.sj(a6O[5].button, k, pN + z0 * 2 + gap * 2, aZ * 2 + gap, z0 / 3);
		for (var j = 0; j < a6O.length; j++) a6O[j].button.style.font = aL.ab.bz(0, aL.ab.so(.065 * zl.aa)), aL.ab.sg(a6O[j].button, 5);
		a6P.aR.style.font = aL.ab.bz(0, aL.ab.so(.08 * zl.aa)), aL.ab.sg(a6P.aR, 5)
	}, this.c9 = function() {
		if (cB.a6c(), vp.c9(), a6d.c9(), a6e.c9(), iw.zZ()) {
			if (settings.displayWinCounter) {
				const size = Math.floor(zl.aZ * 0.03);
				cA.font = aL.ab.bz(1, size);
				cA.fillStyle = "#ffffff";
				const text = "Win count: " + wins_counter;
				const textLength = cA.measureText(text).width;
				cA.textAlign = "left";
				cA.textBaseline = "middle";
				cA.fillText(text, cA.canvas.width - textLength - size / 2, size);
			};
			cA.imageSmoothingEnabled = !1;
			var aJ = iw.zb("territorial.io"),
				ql = .84 * zl.aZ / aJ.width;
			cA.setTransform(ql, 0, 0, ql, zl.k + .08 * zl.aZ, zl.l), a6N = a6N || aL.a22.pA(aJ, aL.a22.pH, [0, 0, 0]);
			for (var k = -1; k <= 1; k += 2)
				for (var l = -1; l <= 1; l += 2) cA.drawImage(a6N, k, l);
			cA.drawImage(aJ, 0, 0), cA.imageSmoothingEnabled = !0;
			var hu = iw.zb("logo"),
				a6f = .6666 * ql * aJ.height / hu.height,
				gQ = .5 * ad.aZ,
				gR = zl.l + .5 * ql * aJ.height - .5 * a6f * hu.height;
			cA.setTransform(a6f, 0, 0, a6f, gQ - .6 * ql * aJ.width, gR), cA.drawImage(hu, 0, 0), cA.setTransform(a6f, 0, 0, a6f, gQ + .6 * ql * aJ.width - a6f * hu.width, gR), cA.drawImage(hu, 0, 0), cA.setTransform(1, 0, 0, 1, 0, 0), cA
				.imageSmoothingEnabled = !0
		}
	}
}

function a6g() {
	var a6h, a6i, a6j, a6k, a6l, a6m;
	this.aB = function() {
		a6j = a6h = 10, a6k = a6i = 10
	}, this.a6n = function() {
		a6m = 512, a6l = new Uint16Array(a6m);
		for (var j = 0; j < a6m; j++) a6l[j] = 100 + a6o(a4(25600 * j, a6m - 4), 9)
	}, this.gP = function() {
		return a6k
	}, this.bF = function() {
		if (--a6j <= 0 && (a6j = a6h, function() {
				var j, a6u, c3 = bV.bY[ay.az];
				for (ay.bB && !ay.dT && 0 !== bV.bW[0] && 0 === eA.q8[0].d0 && (bV.bY[0] += a4(bV.bX[0], 6)), j = bd - 1; 0 <= j; j--) a6u = a4(eL.tN(rs[j]) * bV.bY[rs[j]], 1e4), bV.bY[rs[j]] += a6u < 1 ? 1 : a6u, eL.a6w(rs[j]);
				eG.g8[9] += bV.bY[ay.az] - c3
			}(), --a6k <= 0)) {
			a6k = a6i;
			for (var c3 = bV.bY[ay.az], j = bd - 1; 0 <= j; j--) bV.bY[rs[j]] += bV.bX[rs[j]], eL.a6w(rs[j]);
			eG.g8[8] += bV.bY[ay.az] - c3
		}
	}, this.tN = function(player) {
		var jR = a6l[a4((a6m - 1) * bV.bX[player], ay.dj)],
			a6s = (c0.ci() < 1920 && (jR = jR < (a6s = a4(100 * (13440 - 6 * c0.ci()), 1920)) ? a6s : jR), this.lw(player));
		return bV.bY[player] > a6s && (jR -= a4(2 * jR * (bV.bY[player] - a6s), a6s)), jR < 0 ? 0 : 700 < jR ? 700 : jR
	}, this.lw = function(player) {
		player = 100 * bV.bX[player];
		return player > ay.dZ ? ay.dZ : player
	}, this.a6w = function(player) {
		var y = bV.bX[player] * ay.dh;
		bV.bY[player] = Math.min(Math.min(bV.bY[player], ay.dY), y)
	}, this.oR = function(player, oP) {
		aL.j2.oV(oP, ca.ce[0]), eG.oW(player, oP), er.rc(player, ca.ce[0] + ca.ce[1]), er.oX(oP, ca.ce[0]), aL.j2.j7(player)
	}, this.ms = function() {
		for (var s = bd, e0 = rs, d8 = 0, fw = bV.bY, j = 0; j < s; j++) d8 += fw[e0[j]];
		return d8
	}, this.mu = function(we) {
		for (var i0, s = bd, e0 = rs, d8 = 0, fw = bV.bY, dW = dV.dW, j = 0; j < s; j++) dW[i0 = e0[j]] === we && (d8 += fw[i0]);
		return d8
	}
}

function y9(a1b, kU) {
	var j, zC = document.createElement("div");

	function rY() {
		var j, sk, aa, d2, d0, a6y = ad.pW * zC.offsetWidth,
			a70 = new Float64Array(function(a6y) {
				var aZ = .25 * aL.ab.ac(.6) * ad.ae;
				return Math.max(Math.floor(a6y / aZ), 1)
			}(a6y)),
			a2s = af.a2s,
			a71 = (a6y - (a70.length + 1) * af.gap) / (a70.length * ad.pW);
		for (a70.fill(a2s), j = 0; j < kU.length; j++) sk = (d0 = kU[j].zC).style, aa = aL.a1z.min(a70), d2 = a70.indexOf(aa), sk.top = aL.ab.sh(aa), sk.left = aL.ab.sh(a2s + d2 * (a71 + a2s)), sk.width = aL.ab.sh(a71), aL.ab.sg(d0, 5), a70[d2] += d0
			.offsetHeight + 3 * a2s;
		zC.style.height = aL.ab.sh(aL.a1z.max(a70) - 2 * a2s)
	}
	for (this.yX = kU, this.resize = function() {
			var j;
			for (j = 0; j < kU.length; j++) kU[j].resize();
			rY(), rY()
		}, zC.style.width = "100%", zC.style.maxWidth = "100%", a1b.style.lineHeight = "1.5em", a1b.style.overflowX = "hidden", a1b.style.overflowY = "auto", j = 0; j < kU.length; j++) zC.appendChild(kU[j].zC);
	a1b.appendChild(zC)
}

function a72() {
	function a76(a79) {
		return a79 < 0 ? 0 : 255 < a79 ? 255 : Math.floor(a79)
	}
	this.aZ = 0, this.aa = 0, this.fQ = !1, this.a73 = 0, this.gap = 0, this.a74 = 0, this.pN = 0, this.zm = 0, this.zo = 0, this.zp = 0, this.colors = null, this.aB = function() {
		this.fQ = !0, this.a73 = 0, this.resize()
	}, this.resize = function() {
		this.fQ && (ad.aZ < 1.4 * ad.aa ? this.aZ = Math.floor((bw.bx.by() ? .94 : .43) * ad.aZ) : (this.aa = Math.floor((bw.bx.by() ? .88 : .43) * ad.aa), this.aZ = Math.floor(1.4 * this.aa)), this.aa = this.aZ / 1.4, this.gap = this.aZ / 32,
			this.pN = Math.floor(.25 * this.aa), this.zm = (this.aa - this.pN - 3 * this.gap) / 2, this.zo = this.aZ - 3 * this.gap - this.zm, this.zp = (this.aa - this.pN - 4 * this.gap) / 3)
	}, this.a75 = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var bv = aS.ai.data[103].value.split("");
		if (bv.length < 6)
			for (var d9 = 2; 0 <= d9; d9--) this.colors[0][d9] = a76(256 * Math.random());
		else
			for (var j = 2; 0 <= j; j--) this.colors[0][j] = a76(4 * (10 * parseInt(bv[2 * j]) + parseInt(bv[2 * j + 1])));
		this.a77()
	}, this.a78 = function() {
		return [a4(this.colors[0][0], 4), a4(this.colors[0][1], 4), a4(this.colors[0][2], 4)]
	}, this.qm = function(fX, fY, deltaY) {
		var dH = (ad.aZ - this.aZ) / 2;
		fY -= (ad.aa - this.aa) / 2 + this.pN, (fX -= dH) < 0 || fY < 0 || fX >= this.aZ || fY >= this.aa - this.pN || (dH = Math.floor(3 * fY / (this.aa - this.pN)), this.colors[this.a74][dH] = a76(this.colors[this.a74][dH] + (deltaY < 0 ? 1 : -
			1) * Math.max(Math.abs(.05 * deltaY), 1)), c0.c1 = !0)
	}, this.fW = function(fX, fY) {
		this.a73 = 0;
		var dH = (ad.aZ - this.aZ) / 2;
		return fY -= (ad.aa - this.aa) / 2, (fX -= dH) < 0 || fY < 0 || fX >= this.aZ - 1 || fY >= this.aa - 1 || fX > this.aZ - (.4 * this.pN + 3 * this.gap) && fY < this.pN ? (this.fQ = !1, !(c0.c1 = !0)) : fX < this.gap || fY < this.gap + this
			.pN || fX >= this.aZ || fY >= this.aa - this.gap || (fX < this.gap + this.zm ? (fY < this.gap + this.pN + this.zm && 0 !== this.a74 && (this.a74 = 0, c0.c1 = !0), !0) : fX < this.gap + this.zm || (fX -= 2 * this.gap + this.zm, fY <
				this.gap + this.pN + this.zp ? (this.a73 = 1, this.colors[this.a74][0] = a76(256 * fX / this.zo), c0.c1 = !0) : fY < 2 * this.gap + this.pN + this.zp || (fY < 2 * this.gap + this.pN + 2 * this.zp ? (this.a73 = 2, this.colors[
					this.a74][1] = a76(256 * fX / this.zo), c0.c1 = !0) : !(fY >= 3 * this.gap + this.pN + 2 * this.zp) || (this.a73 = 3, this.colors[this.a74][2] = a76(256 * fX / this.zo), c0.c1 = !0))))
	}, this.a77 = function() {
		for (var d9 = 2; 0 <= d9; d9--) this.colors[0][d9] = a76(this.colors[0][d9])
	}, this.a7A = function() {
		for (var y, bv = "", j = 0; j < 3; j++)(y = a4(this.colors[0][j], 4)) < 10 && (bv += "0"), bv += y.toString();
		return bv
	}, this.fi = function(fX) {
		0 !== this.a73 && (fX -= 2 * this.gap + this.zm + (ad.aZ - this.aZ) / 2, this.colors[this.a74][this.a73 - 1] = a76(256 * fX / this.zo), c0.c1 = !0)
	}, this.xo = function() {
		0 < this.a73 && (this.a73 = 0, this.a77(), aS.aT.aU(103, this.a7A()), c0.c1 = !0)
	}, this.c9 = function() {
		var dH = (ad.aZ - this.aZ) / 2,
			dI = (ad.aa - this.aa) / 2;
		cA.setTransform(1, 0, 0, 1, dH, dI), cA.fillStyle = aC.fr, cA.fillRect(0, this.pN, this.aZ, this.aa - this.pN), cA.fillStyle = aC.a1h, cA.fillRect(0, 0, this.aZ, this.pN), cA.fillStyle = aC.aD, cA.lineWidth = af.k5, cA.strokeStyle = aC
			.aD, cA.strokeRect(-1, -1, this.aZ + 2, this.aa + 2), cA.fillRect(0, this.pN, this.aZ, af.k5), cA.font = aL.ab.bz(1, .31 * this.pN), aL.ab.textBaseline(cA, 1), aL.ab.textAlign(cA, 1), cA.fillText("Choose Your Nation's Color!", Math
				.floor((this.aZ - this.gap - .4 * this.pN) / 2), Math.floor(.55 * this.pN)), this.zx(0), cA.lineWidth = af.k5, this.zy(0), this.zy(1), this.zy(2), ei.g0(Math.floor(dH + this.aZ - .4 * this.pN - this.gap), Math.floor(dI + .3 * this
				.pN), Math.floor(.4 * this.pN)), cA.setTransform(1, 0, 0, 1, 0, 0)
	}, this.zx = function(j) {
		var jR = this.colors[j][0],
			xB = this.colors[j][1],
			j = this.colors[j][2];
		cA.fillStyle = "rgb(" + jR + "," + xB + "," + j + ")", cA.fillRect(this.gap, this.pN + this.gap, this.zm, 2 * this.zm + this.gap), cA.lineWidth = af.k5, cA.strokeStyle = aC.aD, cA.strokeRect(this.gap, this.pN + this.gap, this.zm, 2 * this
			.zm + this.gap), cA.fillStyle = jR + xB + j < 306 && xB < 150 ? aC.aD : aC.cF, cA.font = aL.ab.bz(1, .32 * this.zp), aL.ab.textAlign(cA, 1), aL.ab.textBaseline(cA, 1), cA.rotate(-Math.PI / 2), cA.fillText("National Color", Math
			.floor(-1.5 * this.gap - this.pN - this.zm), Math.floor(this.gap + .5 * this.zm)), cA.rotate(Math.PI / 2)
	}, this.zy = function(j) {
		cA.fillStyle = "rgb(" + (0 === j ? 150 : 2 === j ? 30 : 0) + "," + (1 === j ? 130 : 2 === j ? 30 : 0) + "," + (2 === j ? 220 : 0) + ")", cA.fillRect(2 * this.gap + this.zm, this.pN + this.gap + j * (this.gap + this.zp), Math.floor(this
			.colors[this.a74][j] * this.zo / 255), this.zp), cA.strokeStyle = aC.aD, cA.strokeRect(2 * this.gap + this.zm, this.pN + this.gap + j * (this.gap + this.zp), this.zo, this.zp), cA.fillStyle = aC.aD, cA.font = aL.ab.bz(1, .32 *
			this.zp), aL.ab.textBaseline(cA, 1), aL.ab.textAlign(cA, 0), cA.fillText((0 === j ? "Red: " : 1 === j ? "Green: " : "Blue: ") + this.colors[0][j].toString(), 3 * this.gap + this.zm, Math.floor(this.pN + this.gap + j * (this.gap +
			this.zp) + .53 * this.zp))
	}
}

function yS(a7B) {
	var zC = document.createElement("div");
	this.aR = zC, this.a7C = a7B, this.resize = function() {
		for (var s = a7B.length, j = 1; j < s; j++) aL.ab.sg(a7B[j], 4)
	};
	var j, s = a7B.length;
	for (zC.style.width = "100%", zC.style.height = "2.7em", zC.style.marginTop = "0.6em", zC.style.border = "inherit", j = 0; j < s; j++) a7B[j].style.verticalAlign = "top", a7B[j].style.width = (100 / s).toFixed(2) + "%", a7B[j].style.height =
		"100%", a7B[j].style.fontSize = "0.75em", zC.appendChild(a7B[j])
}

function a7D() {
	for (var k, l, j = a7E - 1; 0 <= j; j--) k = a4(a7F[j], 4) % b.o, l = a4(a7F[j], 4 * b.o), bV.jI[a7G] = bV.jI[a7G] > k ? k : bV.jI[a7G], bV.jJ[a7G] = bV.jJ[a7G] > l ? l : bV.jJ[a7G], bV.jK[a7G] = bV.jK[a7G] < k ? k : bV.jK[a7G], bV.jL[a7G] = bV
		.jL[a7G] < l ? l : bV.jL[a7G]
}

function a7H() {
	var d0, i0, j, s = bV.x9[a7G].length;
	loop: for (j = s - 1; 0 <= j; j--) {
		for (d0 = 3; 0 <= d0; d0--)
			if (i0 = bV.x9[a7G][j] + a1P[d0], eN.iB(i0) || eN.o1(i0) && eN.iC(i0) !== a7G) {
				eN.oJ(bV.x9[a7G][j], a7G);
				continue loop
			} bV.x9[a7G][j] = bV.x9[a7G][s - 1], bV.x9[a7G].pop(), s--
	}
}

function a7I() {
	var d0, i0, a7J, a7K, s = bV.a2N[a7G].length;
	loop: for (var j = s - 1; 0 <= j; j--) {
		for (a7J = a7K = !1, d0 = 3; 0 <= d0; d0--) {
			if (i0 = bV.a2N[a7G][j] + a1P[d0], eN.nz(i0, a7G)) continue loop;
			a7J = a7J || eN.o8(i0), a7K = a7K || eN.nx(i0)
		}
		a7J ? bV.i5[a7G].push(bV.a2N[a7G][j]) : a7K ? bV.a2O[a7G].push(bV.a2N[a7G][j]) : eN.oH(bV.a2N[a7G][j], a7G), bV.a2N[a7G][j] = bV.a2N[a7G][s - 1], bV.a2N[a7G].pop(), s--
	}
}

function a7L() {
	bV.bX[a7M] -= a7E
}

function a7N(border) {
	for (var s = border.length, j = s - 1; 0 <= j; j--) eN.o3(a7M, border[j]) || (border[j] = border[s - 1], border.pop(), s--)
}

function a7O(border) {
	for (var s = border.length, j = s - 1; 0 <= j; j--) !eN.o3(a7M, border[j]) && eN.jU(border[j]) && (border[j] = border[s - 1], border.pop(), s--)
}

function a7P(border) {
	for (var d0, i0, s = border.length, j = s - 1; 0 <= j; j--)
		for (d0 = 3; 0 <= d0; d0--)
			if (i0 = border[j] + a1P[d0], eN.nz(i0, a7M)) {
				bV.a2N[a7M].push(border[j]), border[j] = border[s - 1], border.pop(), s--;
				break
			}
}

function a7Q() {
	for (var d0, i0, j = a7E - 1; 0 <= j; j--)
		for (d0 = 3; 0 <= d0; d0--) i0 = a7F[j] + a1P[d0], eN.o4(a7M, i0) && eN.o5(i0) && (bV.a2N[a7M].push(i0), eN.oI(i0, a7M))
}

function a7R() {
	var k, l;
	loop: for (; bV.jJ[a7M] < bV.jL[a7M];) {
		for (k = bV.jK[a7M]; k >= bV.jI[a7M]; k--)
			if (eN.o3(a7M, 4 * (bV.jJ[a7M] * b.o + k))) break loop;
		bV.jJ[a7M]++
	}
	loop: for (; bV.jJ[a7M] < bV.jL[a7M];) {
		for (k = bV.jK[a7M]; k >= bV.jI[a7M]; k--)
			if (eN.o3(a7M, 4 * (bV.jL[a7M] * b.o + k))) break loop;
		bV.jL[a7M]--
	}
	loop: for (; bV.jI[a7M] < bV.jK[a7M];) {
		for (l = bV.jL[a7M]; l >= bV.jJ[a7M]; l--)
			if (eN.o3(a7M, 4 * (l * b.o + bV.jI[a7M]))) break loop;
		bV.jI[a7M]++
	}
	loop: for (; bV.jI[a7M] < bV.jK[a7M];) {
		for (l = bV.jL[a7M]; l >= bV.jJ[a7M]; l--)
			if (eN.o3(a7M, 4 * (l * b.o + bV.jK[a7M]))) break loop;
		bV.jK[a7M]--
	}
}

function jB(player, a0v) {
	return 0 === dV.dW[player] || dV.dW[player] !== dV.dW[a0v]
}

function a7S(player, a0v) {
	for (var aR, a7T = eq.a4Y(player), j = 0; j < a7T; j++)
		if (0 === eq.a4a(player, j))
			if ((aR = eq.a4Z(player, j)) === ay.cU) {
				if (a0v === ay.cU) return !1;
				if (a7U(a0v)) return !0
			} else if (a0v === ay.cU) {
		if (a7U(aR)) return !0
	} else if (a7V(a0v, aR)) return !0;
	return !1
}

function a7U(player) {
	for (var j, d2, s = bV.a2N[player].length, d0 = 3; 0 <= d0; d0--)
		for (d2 = a1P[d0], j = 0; j < s; j++)
			if (eN.iB(bV.a2N[player][j] + d2)) return !0;
	return !1
}

function a5S(player) {
	for (var j, d2, s = bV.a2N[player].length, d0 = 3; 0 <= d0; d0--)
		for (d2 = a1P[d0], j = 0; j < s; j++)
			if (eN.o6(bV.a2N[player][j]) && eN.iB(bV.a2N[player][j] + d2)) return !0;
	return !1
}

function a7V(j8, j9) {
	var j, c3, d0, d2, i0, cc = bV.a2N[j8].length,
		cd = bV.a2N[j9].length;
	for (cd < cc && (c3 = j8, j8 = j9, j9 = c3, c3 = cc, cc = cd, 0), d0 = 3; 0 <= d0; d0--)
		for (d2 = a1P[d0], j = 0; j < cc; j++)
			if (i0 = bV.a2N[j8][j] + d2, eN.o1(i0) && eN.iC(i0) === j9) return !0;
	return !1
}

function a5T(j8, j9) {
	for (var j, d2, i0, cc = bV.a2N[j8].length, d0 = 3; 0 <= d0; d0--)
		for (d2 = a1P[d0], j = 0; j < cc; j++)
			if (eN.o6(bV.a2N[j8][j]) && (i0 = bV.a2N[j8][j] + d2, eN.o1(i0)) && eN.iC(i0) === j9) return !0;
	return !1
}

function a7W() {
	this.gd = null, this.aB = function() {
		var a7X = [120, 105, 92],
			cos = [12, 12, 60],
			a7Y = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			a7Z = [140, 130, 120],
			a7a = [12, 12, 76],
			a7b = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			a7c = [130, 117, 106],
			a7d = [12, 12, 68],
			a7e = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.gd = new Array(b.wM + 1), this.gd[0] = {
			name: "White Arena",
			aZ: 230,
			aa: 230,
			a05: 1e3,
			a02: 2e3,
			a2e: 173
		}, this.gd[1] = {
			name: "Black Arena",
			aZ: 800,
			aa: 800,
			a05: 100,
			a02: 50,
			a2e: 43
		}, this.gd[2] = {
			name: "Island",
			aZ: 512,
			aa: 512,
			a05: 128,
			a02: 32,
			a2e: 0
		}, this.gd[3] = {
			name: "Mountains",
			aZ: 960,
			aa: 960,
			a05: 60,
			a02: 8,
			a2e: 0
		}, this.gd[4] = {
			name: "Desert",
			aZ: 900,
			aa: 900,
			a05: 100,
			a02: 5,
			a2e: 0
		}, this.gd[5] = {
			name: "Swamp",
			aZ: 1e3,
			aa: 1e3,
			a05: 100,
			a02: 40,
			a2e: 0
		}, this.gd[6] = {
			name: "Snow",
			aZ: 1e3,
			aa: 1e3,
			a05: 100,
			a02: 20,
			a2e: 0
		}, this.gd[7] = {
			name: "Cliffs",
			aZ: 1024,
			aa: 1024,
			a05: 128,
			a02: 32,
			a2e: 0
		}, this.gd[8] = {
			name: "Pond",
			aZ: 820,
			aa: 820,
			a05: 200,
			a02: 100,
			a2e: 0
		}, this.gd[9] = {
			name: "Halo",
			aZ: 1024,
			aa: 1024,
			a05: 128,
			a02: 32,
			a2e: 0
		}, this.gd[10] = {
			name: "Europe",
			a2a: a7Z,
			a2b: a7a,
			a2c: a7b
		}, this.gd[11] = {
			name: "World",
			a2a: a7c,
			a2b: a7d,
			a2c: a7e
		}, this.gd[12] = {
			name: "Caucasia",
			a2a: a7c,
			a2b: a7d,
			a2c: a7e
		}, this.gd[13] = {
			name: "Africa",
			a2a: a7X,
			a2b: cos,
			a2c: a7Y
		}, this.gd[14] = {
			name: "Middle East",
			a2a: a7X,
			a2b: cos,
			a2c: a7Y
		}, this.gd[15] = {
			name: "Scandinavia",
			a2a: a7Z,
			a2b: a7a,
			a2c: a7b
		}, this.gd[16] = {
			name: "North America",
			a2a: a7Z,
			a2b: a7a,
			a2c: a7b
		}, this.gd[17] = {
			name: "South America",
			a2a: a7X,
			a2b: cos,
			a2c: a7Y
		}, this.gd[18] = {
			name: "Asia",
			a2a: a7c,
			a2b: a7d,
			a2c: a7e
		}, this.gd[19] = {
			name: "Australia",
			a2a: a7X,
			a2b: cos,
			a2c: a7Y
		}, this.gd[20] = {
			name: "Island Kingdom",
			aZ: 1024,
			aa: 1024,
			a05: 128,
			a02: 32,
			a2e: 0
		}, this.gd[b.wM] = {}
	}
}

function a7f() {
	this.ba = new a1j, this.pm = new a2t, this.aB = function() {
		this.ba.aB()
	}, this.bF = function() {
		0 !== this.ba.bt && this.ba.bt--
	}
}

function a0z() {
	this.bi = function(player, i1) {
		aL.j2.mg(0) && aL.j2.uf(player) && cY.iV(i1) && (eU.uz.a7g(0, player, i1), ay.dr.a1I(player, i1))
	}, this.bj = function(player, iQ, a0v) {
		bV.z8[player]++, aL.j2.mg(1) && aL.j2.uf(player) && aL.j2.a0k(player, a0v) && aL.j2.j3(player, iQ, 12, ay.db) && aL.j2.a0u(player, a0v) && ((a0v = eq.a4W(player, ca.mD[0])) || eq.a4X(player)) && a7i(player, a0v) && (eU.uz.a7g(1, player,
			iQ, ca.mD[0]), aL.j2.j7(player), eG.a7j(player, iQ), a7k(player))
	}, this.bk = function(player, iQ, oP) {
		aL.j2.mg(1) && aL.j2.uf(player) && ay.dT && aL.j2.a0k(player, oP) && aL.j2.a0w(player, oP) && aL.j2.oQ(player, aL.j2.iP(player, iQ), oP) && (eU.uz.a7g(2, player, iQ, oP), eL.oR(player, oP))
	}, this.bl = function(player, iQ, i1) {
		aL.j2.mg(1) && aL.j2.uf(player) && cY.iV(i1) && bZ.ba.bc !== bZ.ba.cI && bZ.ba.bb[player] !== bZ.ba.cJ && 0 !== bV.i5[player].length && aL.j2.j3(player, iQ, 32, 16) && bZ.jD.jE(player, i1) && (eU.uz.a7g(3, player, iQ, i1), aL.j2.j7(
			player), bZ.ba.cW(player))
	}, this.bm = function(player, a7l, i1) {
		aL.j2.mg(1) && aL.j2.uf(player) && cY.iV(i1) && bZ.pj.a7m(player, a7l) && bZ.jD.tX(i1) && (eU.uz.a7g(4, player, a7l, i1), aL.j2.a0t(player, 8), bZ.ba.bm())
	}, this.bn = function(player, a0v) {
		aL.j2.mg(1) && aL.j2.uf(player) && (a0v = Math.min(a0v, ay.cU), eq.a4W(player, a0v)) && (eU.uz.a7g(5, player, a0v), eq.a4P(player, a0v))
	}, this.bo = function(player, av) {
		(aL.j2.mg(1) || aL.j2.mg(2)) && aL.j2.uf(player) && (av = d4.k3(av, 0, 1023), eU.uz.a7g(6, player, av), er.h3(player, 0, av))
	}, this.bp = function(player, a7n) {
		aL.j2.mg(1) && aL.j2.uf(player) && (eU.uz.a7g(7, player, a7n), ef.a3l(player, a7n))
	}, this.bq = function(player) {
		(aL.j2.mg(0) || aL.j2.mg(1)) && aL.j2.uf(player) && eW.bq(player) && eU.uz.a7g(8, player)
	}, this.br = function(player) {
		eW.br(player), eU.uz.a7g(9, player)
	}
}

function a7o() {
	var aJ = aL.color;
	this.cF = aJ.wc(0, 0, 0), this.la = aJ.a5A(0, 0, 0, .7), this.lQ = aJ.a5A(0, 0, 0, .5), this.aF = aJ.a5A(0, 0, 0, .85), this.fr = aJ.a5A(0, 0, 0, .75), this.jn = aJ.a5A(0, 0, 0, .6), this.a1i = aJ.a5A(0, 0, 0, .35), this.aD = aJ.wc(255, 255,
		255), this.a5J = aJ.a5A(255, 255, 255, .3), this.lg = aJ.a5A(255, 255, 255, .6), this.gJ = aJ.a5A(255, 255, 255, .4), this.a7p = aJ.a5A(255, 255, 255, .25), this.a7q = aJ.a5A(255, 255, 255, .85), this.a3d = aJ.a5A(255, 255, 255, .75), this
		.a7r = aJ.a5A(255, 255, 255, .15), this.a7s = aJ.wc(128, 128, 128), this.a1h = aJ.a5A(64, 64, 64, .75), this.a7t = aJ.a5A(88, 88, 88, .83), this.a7u = aJ.a5A(60, 60, 60, .85), this.a6W = aJ.a5A(80, 60, 60, .85), this.gA = aJ.wc(30, 255, 30),
		this.g9 = aJ.wc(0, 200, 0), this.a3n = aJ.wc(128, 255, 128), this.a7v = aJ.a5A(10, 65, 10, .75), this.wv = aJ.a5A(0, 255, 0, .6), this.lR = aJ.a5A(0, 255, 0, .5), this.g1 = aJ.a5A(0, 200, 0, .5), this.yW = aJ.a5A(0, 100, 0, .75), this.lZ = aJ
		.a5A(0, 60, 0, .8), this.a7w = aJ.a5A(0, 255, 0, .3), this.jm = aJ.a5A(0, 180, 0, .6), this.a7x = aJ.a5A(0, 120, 0, .85), this.a7y = aJ.wc(0, 120, 0), this.a6T = aJ.a5A(0, 70, 0, .85), this.lf = aJ.wc(255, 120, 120), this.lx = aJ.wc(255, 160,
			160), this.gC = aJ.wc(255, 70, 70), this.gB = aJ.wc(230, 0, 0), this.a3b = aJ.a5A(220, 0, 0, .6), this.gL = aJ.a5A(255, 100, 100, .8), this.a7z = aJ.a5A(100, 0, 0, .85), this.a80 = aJ.a5A(60, 0, 0, .85), this.a81 = aJ.a5A(200, 0, 0, .6),
		this.p8 = aJ.a5A(120, 0, 0, .85), this.a82 = aJ.wc(255, 70, 10), this.a6U = aJ.a5A(0, 60, 60, .85), this.g2 = aJ.a5A(10, 60, 60, .9), this.wO = aJ.a5A(0, 96, 96, .75), this.le = aJ.wc(160, 160, 255), this.a83 = aJ.a5A(0, 40, 90, .75), this
		.a84 = aJ.a5A(0, 0, 255, .6), this.a85 = aJ.wc(200, 200, 255), this.wx = aJ.wc(255, 120, 100), this.lS = aJ.a5A(255, 255, 0, .5), this.a86 = aJ.a5A(255, 255, 150, .2), this.a87 = aJ.wc(255, 255, 0), this.a88 = aJ.wc(255, 255, 200), this.a89 =
		aJ.a5A(200, 200, 0, .6), this.a8A = aJ.a5A(140, 120, 0, .75), this.a8B = aJ.a5A(180, 160, 40, .75), this.a6V = aJ.a5A(70, 50, 20, .85), this.pY = aJ.a5A(255, 140, 0, .75), this.a3Y = aJ.a5A(0, 0, 0, 0)
}

function a8C() {
	this.vJ = null, this.vK = null, this.vL = null, this.vM = null, this.vN = null, this.vO = null;
	var a8D = 0;
	this.v4 = null, this.v0 = "", this.aB = function(v4) {
		this.vJ = [], this.vK = [], this.vL = [], this.vM = [], this.vN = [0], this.vO = [0], a8D = 0, this.v4 = v4, this.v0 = ""
	}, this.a7g = function(id, bH, be, bf) {
		ay.bC || 2 === ay.di || (0 === this.vN[a8D] && (this.vO[a8D] ? (this.vN.push(1), this.vO.push(0), a8D++) : this.vN[a8D] = 1), this.vJ.push(id), this.vK.push(bH), this.vL.push(void 0 === be ? 0 : be), this.vM.push(void 0 === bf ? 0 : bf),
			this.vO[a8D]++)
	}, this.bF = function() {
		0 === this.vN[a8D] ? this.vO[a8D]++ : (this.vN.push(0), this.vO.push(0), a8D++)
	}
}

function a8E() {
	this.vk = function() {
		if (bJ.size < hD.a8F(38)) b0.ba.vV(0, 3259);
		else {
			var hA = bJ.bK(6),
				s = bJ.bK(10),
				hN = bJ.bK(15);
			if (bJ.a8G(38 + 67 * s + 16 * hN)) {
				for (var ql, data = [], a8H = 0 === hA ? (ql = .1, 1) : (ql = .001, 3), j = 0; j < s; j++) data.push(["" + (bJ.bK(30) + 1), un.hP.v7(bJ.bK(5)), (ql * bJ.a8I(32)).toFixed(a8H)]);
				8 === ak.a5f && ak.yO().a8J(21, !0, {
					hA: hA,
					title: ["1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking"][hA],
					data: data
				})
			} else b0.ba.vV(0, 3260)
		}
	}, this.vl = function() {
		if (bJ.size < hD.a8F(29)) b0.ba.vV(0, 3265);
		else {
			var a8K = bJ.bK(4),
				a8L = bJ.bK(7),
				a8M = bJ.bK(11);
			if (bJ.a8G(29 + 16 * a8L + 16 * a8M + 11 * a8K)) {
				for (var data = [], j = 0; j < a8K; j++) {
					for (var a3H = un.hP.v7(bJ.bK(3)), a8N = bJ.bK(8), a63 = [], jy = 0; jy < a8N; jy++) a63.push(bJ.bK(16));
					data.push({
						name: "[" + a3H + "]",
						a63: a63
					})
				}
				8 === ak.a5f && ak.yO().a8J(23, !0, data)
			} else b0.ba.vV(0, 3266)
		}
	}
}

function a8O() {
	this.mZ = new tw, this.ub = new wQ, this.result = new uQ, this.pj = new z4
}

function qK() {
	this.gM = c0.gM, this.a3 = 0, this.pa = 0, this.a1W = 0, this.a8P = null, this.a8Q = 7, this.bu = 0, this.aB = function() {
		this.a1W = 0, this.a8P = [], this.a3 = 0, this.pa = 0
	}, this.w6 = function(bG) {
		var j;
		if (ay.dl) this.xA(bG);
		else if (this.a8P.push(bG), 2 === ay.di) {
			for (j = 0; j < this.a8P.length; j++) bg.eF.bF(this.a8P[j]);
			this.a8P = []
		}
	}, this.xA = function(bG) {
		bg.eF.bF(bG), eU.bF(), eh.xA(this.a1W), this.a1W === ay.dt ? (ay.dr.bF(), this.a1W = 0, this.a3 = 0, this.pa = 0, this.gM = c0.gM) : (this.a1W++, er.ri(), er.f2(!0), eK.pe())
	}, this.bF = function() {
		ad.bF(), ay.dl ? (c0.c1 = eh.xA(-1) || c0.c1, pb()) : (0 !== this.a3 || c0.gM >= this.gM && (this.gM += c0.gN * Math.floor(1 + (c0.gM - this.gM) / c0.gN), 2 === ay.di ? pc() : this.a8R(), this.a3++, 27 < c0.gM - this.bu)) && this.a8S(),
			pg(), c0.c1 && (c0.c1 = !1, ph()), this.bu = c0.gM
	}, this.a8S = function() {
		c0.c1 = !0, pf(), this.a3 = 0
	}, this.a8R = function() {
		var a8T, j;
		if (this.pa !== 7 * this.a1W) pd(), eK.pe();
		else {
			a8T = !1;
			loop: for (; this.a8U() && (a8T = !0, pd(), 2 !== ay.di) && 0 < this.a8P.length;)
				for (j = this.a8Q - 2; 0 <= j; j--)
					if (pd(), 2 === ay.di) break loop;
			a8T ? eK.pe() : (pc(), eK.tI())
		}
	}, this.a8U = function() {
		return 0 < this.a8P.length && (this.a1W++, bg.eF.bF(this.a8P[0]), this.a8P.shift(), !0)
	}
}

function a8V() {
	var a8W, aa, lU, a8X, a8Y, a8Z, a8a, a8b, a8c;

	function iu() {
		return ed.qa(aw.a3o()) ? ef.fQ ? ed.l - ed.aa - 2 * lU : ed.l - lU : ee.qa(aw.a3p()) ? ef.fQ ? ee.iu() - ed.aa - 2 * lU : ee.iu() - lU : ef.fQ ? ad.aa - ed.aa - (qT.qU() + 1) * lU : ad.aa - qT.qU() * af.gap
	}

	function a8h(c3, bv, id, i0, a8l, a8m, dE, a8n, a8o) {
		var j, iv, kq, yN, g3, a8t = void 0 !== a8o,
			aZ = Math.floor(c7.measureText(bv, aw.li) + 1.5 * a8X + (a8t ? aa : 1.5 * a8X));
		if (c0.c1 = !0, aZ + lU > ad.aZ && !a8t && 50 !== id && 20 < bv.length) a8h(c3, (g3 = aL.fm.a8u(bv))[0], id, i0, a8l, a8m, dE, a8n, a8o), a8h(c3, g3[1], id, i0, a8l, a8m, dE, a8n, a8o);
		else if (g3 = aZ + (50 === id ? a8Y : 0), (kq = document.createElement("canvas")).width = aZ, kq.height = aa, (iv = kq.getContext("2d", {
				alpha: !0
			})).font = aw.li, aL.ab.textBaseline(iv, 1), aL.ab.textAlign(iv, 0), iv.clearRect(0, 0, aZ, aa), iv.fillStyle = a8m, iv.fillRect(0, 0, aZ, aa), iv.fillStyle = a8l, iv.fillText(bv, Math.floor(1.5 * a8X), Math.floor(aa / 2)), a8t && (iv
				.imageSmoothingEnabled = !0, h4.kp.k6(a8o, iv, aZ - aa, 0, aa)), 0 === (yN = {
				gM: c3,
				bv: bv,
				id: id,
				player: i0,
				ij: kq,
				a8l: a8l,
				a8m: a8m,
				aZ: aZ,
				a8q: g3,
				dE: dE,
				a8n: a8n,
				a8o: a8o
			}).gM || 0 < a8W.length && 0 < a8W[0].gM) a8W.unshift(yN);
		else {
			for (j = 1; j < a8W.length; j++)
				if (0 < a8W[j].gM) return void a8W.splice(j, 0, yN);
			a8W.push(yN)
		}
	}

	function a8j(jR, xB, d9) {
		return "rgb(" + jR + "," + xB + "," + d9 + ")"
	}

	function a8w(id, h0) {
		for (var s = a8W.length, j = 0; j < s; j++) a8W[j].id === id && h0-- <= 0 && (a8W.splice(j, 1), j--, s--)
	}

	function a8x(id, player) {
		for (var a2J = !1, j = a8W.length - 1; 0 <= j; j--) a8W[j].id !== id || player !== ay.cU && a8W[j].player !== player || (a8W.splice(j, 1), a2J = !0);
		return a2J
	}

	function a9A(bv) {
		a8h(340, bv, 6, 0, a8j(215, 245, 255), aC.fr, -1, !1)
	}
	this.us = "", this.aB = function() {
		var self;
		a8b = 0, a8a = bw.bx.by() ? 7 : 12, a8Z = {
			e0: [0, 0, 0],
			a8d: [0, 0, 0],
			a0H: [220, 180, 180],
			zt: [0, 0, 0],
			aJ: [0, 0, 0]
		}, a8W = [], this.resize(), ay.dl && this.mc(0, 18), a9A(aP.hf(37, [b.e6.gd[b.c].name])), a9A(aP.hf(38, [b.o - 2, b.p - 2])), a9A(aP.hf(39, [eI.zL], {
			hj: [0]
		})), eI.zL !== eI.zM && a9A(aP.hf(40, [eI.zM, eI.zM / eI.zL], {
			hj: [0],
			hk: [1]
		})), 0 < eI.zN && a9A(aP.hf(41, [eI.zN, eI.zN / eI.zL], {
			hj: [0],
			hk: [1]
		})), 0 < eI.zO && a9A(aP.hf(42, [eI.zO, eI.zO / eI.zL], {
			hj: [0],
			hk: [1]
		})), 10 === ay.dp && a8h(120, aP.hf(43), 6, 0, a8j(235, 255, 120), aC.fr, -1, !1), 0 !== (self = this).us.length && (a8h(200, self.us, 0, 0, aC.aD, aC.fr, -1, !1), self.us = ""), this.a8g()
	}, this.a8g = function() {
		var j, s;
		if (e4.e5)
			for (s = e4.e6.a8i.length, j = 0; j < s; j++) a8h(400, e4.e6.a8i[j], 6, 0, a8j(255, 255, 255), aC.fr, -1, !1)
	}, this.resize = function() {
		var a8k, j;
		if (aa = (aa = Math.floor((bw.bx.by() ? .031 : .0249) * ad.ae)) < 10 ? 10 : aa, this.fontSize = Math.floor(2 * aa / 3), this.li = aL.ab.bz(1, this.fontSize), lU = af.gap, a8X = Math.floor(aa / 5), 0 < a8W.length)
			for (a8k = a8W, a8W = [], j = a8k.length - 1; 0 <= j; j--) a8h(a8k[j].gM, a8k[j].bv, a8k[j].id, a8k[j].player, a8k[j].a8l, a8k[j].a8m, a8k[j].dE, a8k[j].a8n, a8k[j].a8o);
		this.a8p()
	}, this.a8p = function() {
		a8c = document.createElement("canvas");
		var bv = aP.hf(0),
			iv = (a8Y = c7.measureText(bv, this.li) + 5 * a8X, a8c.height = aa, a8c.width = a8Y, a8c.getContext("2d", {
				alpha: !0
			}));
		iv.font = this.li, aL.ab.textBaseline(iv, 1), aL.ab.textAlign(iv, 1), iv.clearRect(0, 0, a8Y, aa), iv.fillStyle = aC.yW, iv.fillRect(0, 0, a8Y, aa), iv.fillStyle = aC.aD, iv.fillText(bv, Math.floor(a8Y / 2), Math.floor(aa / 2))
	}, this.a3o = function() {
		var s;
		return ef.fQ ? ef.aZ : 0 === (s = a8W.length) ? 0 : 1 === s ? a8W[0].a8q : io(a8W[0].a8q, a8W[1].a8q)
	}, this.a3p = function() {
		var s = a8W.length;
		return ef.fQ ? s ? io(ef.aZ, a8W[0].a8q) : ef.aZ : 0 === s ? 0 : 1 === s ? a8W[0].a8q : 2 === s ? io(a8W[0].a8q, a8W[1].a8q) : io(io(a8W[0].a8q, a8W[1].a8q), a8W[2].a8q)
	}, this.fW = function(k, l) {
		for (var yp, a8r = iu(), j = a8W.length - 1; 0 <= j; j--)
			if ((yp = a8r - (j + 1) * aa) <= l && l < yp + aa) return 50 === a8W[j].id ? k >= ad.aZ - a8Y - lU - a8W[j].aZ && (k >= ad.aZ - a8Y - lU ? bg.j2.b3(a8W[j].player) : f0.a0K(a8W[j].player, 800, !1, 0), !0) : k >= ad.aZ - a8W[j].aZ -
				lU && (736 === a8W[j].id ? window.open("https://" + a8W[j].bv, "_blank") : a8W[j].a8n && (f0.a0K(a8W[j].player, 800, !1, 0), 0 <= a8W[j].dE) && (yp = a8W[j].dE, a8W[j].dE = a8W[j].player, a8W[j].player = yp), !0);
		return !1
	}, this.uh = function(c3, bv, id, i0, a8l, a8m, dE, a8n, a8o) {
		a8h(c3, bv, id, i0, a8l, a8m, dE, a8n, a8o)
	}, this.a8s = function(wZ) {
		a8h(300, wZ, 252, 0, aC.aD, aC.fr, -1, !1)
	}, this.a8v = function(id) {
		for (var j = a8W.length - 1; 0 <= j; j--) a8W[j].id === id && (a8W[j].gM = 1)
	}, this.mc = function(player, id) {
		0 === id ? (eG.g8[player < ay.dc ? 4 : 3]++, c7.a1I(player, 0), a8w(423, 0), a8h(160, aP.hf(1, [bV.mU[player]]), 423, player, "rgb(10,220,10)", aC.fr, -1, !1)) : 1 === id ? (a8x(50, ay.cU), c7.a1I(player, 1), a8h(360, aP.hf(2, [bV.mU[
			player]]), 0, player, aC.a82, aC.fr, -1, !0), f0.a0K(player, 2700, !1, 0)) : 2 === id ? (c7.a1I(player, 2), a8h(0, aP.hf(3), 0, player, "rgb(10,255,255)", aC.fr, -1, !0), f0.a0K(player, 2700, !1, 0)) : 3 === id ? (c7.a1I(player,
			2), a8h(0, aP.hf(4, [bV.mU[player]]), 0, player, aC.aD, aC.fr, -1, !0), f0.a0K(player, 2700, !1, 0)) : 4 === id ? this.a2M(1, player, player) : 5 === id ? 2 !== bV.ly[player] && eN.o0(ay.az) && (function(id, a54) {
			var j, a95 = 0,
				s = a8W.length;
			for (j = 0; j < s; j++)
				if (a8W[j].id === id && a54 <= ++a95) return a8W.splice(j, 1)
		}(1, 5), er.sH(player) ? a8h(180, aP.hf(5, [bV.mU[player]]), 1, player, a8j(255, 200, 180), aC.fr, -1, !0) : (a8w(573, 0), a8h(180, aP.hf(6, [bV.mU[player]]), 573, player, aC.a82, aC.fr, -1, !0))) : 18 === id ? a8h(255, aP.hf(7), 18,
			0, aC.aD, aC.fr, -1, !1) : 21 === id ? a8h(220, aP.hf(8), id, 0, aC.aD, aC.fr, -1, !1) : 22 === id ? this.a2M(2, player, player) : 59 === id && a8h(0, aP.hf(9), id, 0, aC.a88, aC.fr, 0, !1)
	}, this.a8z = function(wZ) {
		a90,
		a8h(200, aP.hf(10, [wZ]), 94, 0, aC.aD, aC.a7z, -1, !1)
	}, this.u5 = function(u2) {
		if (ay.az === u2 && !ay.bB)
			wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter),
			a8h(0, "Your Win Count is now " + wins_counter, 3, u2, aC.aD, aC.fr, -1, !0);
		c7.a1I(u2, 2), ay.dc < 100 ? a8h(0, aP.hf(4, [bV.mU[u2]]), 3, u2, aC.aD, aC.fr, -1, !0) : a8h(0, aP.hf(12, [bV.mU[u2]]), 3, u2, aC.aD, aC.fr, -1, !0), f0.a0K(u2, 2700, !1, 0)
	}, this.a91 = function(g4) {
		var gD = "(" + cY.hr(g4 >> 2) + ", " + cY.hs(g4 >> 2) + ")",
			a8n = !1,
			player = 0;
		eN.jU(g4) ? eN.iB(g4) ? gD = aP.hf(13, [gD]) : (player = eN.iC(g4), gD = aP.hf(14, [aL.iv.ld(bV.mV[player], aL.ab.bz(0, 10), 150), aL.fm.fn(bV.bY[player]), aL.fm.fn(bV.bX[player]), gD]), a8n = !0) : gD = eN.oB(g4) ? aP.hf(15, [gD]) : aP
			.hf(16, [gD]), c0.c1 = !0, a8w(55, 0), a8h(220, gD, 55, player, aC.aD, aC.fr, -1, a8n)
	}, this.a92 = function(a93) {
		var d8 = bZ.ba,
			player = d8.cL[a93] >> 3;
		c0.c1 = !0, a8w(55, 0), a8h(220, aP.hf(17, [bV.mU[player], d8.cQ[a93]], {
			hj: [1]
		}), 55, player, aC.aD, aC.fr, -1, !0)
	}, this.ax = function(b1, a1T, av) {
		b1 === ay.az ? a8h(175, aP.hf(18, [bV.mU[a1T]]), 1001, a1T, a8j(200, 255, 210), aC.fr, -1, !0, av) : this.a94(b1, av)
	}, this.a94 = function(b1, av) {
		a8w(1e3, 0), a8h(175, aP.hf(19, [bV.mU[b1]]), 1e3, b1, aC.aD, "rgba(5,60,25,0.9)", -1, !0, av)
	}, this.u4 = function() {
		var wZ;
		ay.dv ? (wZ = aP.hf(20), c7.wT(aP.hf(21), 2, 1, 12), a8h(0, wZ, 40, 0, "rgb(10,220,10)", aC.fr, -1, !1)) : (wZ = aP.hf(22), c7.wT(aP.hf(23), 2, 0, 16), a8h(0, wZ, 41, 0, aC.aD, aC.fr, -1, !1)), f0.u0(2700)
	}, this.sU = function(e0) {
		a8h(300, e0[0].name + " [" + ay.ds.sa(e0[0].sX) + "] vs " + e0[1].name + " [" + ay.ds.sa(e0[1].sX) + "]", 65, 0, aC.cF, "rgba(100,255,255,0.75)", -1, !1)
	}, this.mm = function(wZ) {
		a8h(200, wZ, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a3i = function(a3W) {
		a8h(0, aP.hf(a3W ? 24 : 129), 247, 0, aC.a87, aC.fr, -1, !1)
	}, this.sc = function(e0, sZ, sb, a96) {
		a8h(0, e0[0].name + ": " + ay.ds.sa(e0[0].sX) + " -> " + sZ, 66, 0, aC.aD, a96[0], -1, !1), a8h(0, e0[1].name + ": " + ay.ds.sa(e0[1].sX) + " -> " + sb, 66, 1, aC.aD, a96[1], -1, !1)
	}, this.b4 = function(player, id) {
		0 === id ? a8x(50, player) ? (a8h(128, aP.hf(25, [bV.mU[player]]), 52, player, a8j(180, 255, 180), aC.fr, -1, !0), er.h3(player, 2, 255)) : a8h(384, aP.hf(26, [bV.mU[player]]), 51, player, a8j(210, 210, 255), aC.fr, -1, !0) : a8x(51,
			player) ? (a8h(128, aP.hf(27, [bV.mU[player]]), 52, player, aC.aD, "rgba(60,120,10,0.9)", -1, !0), er.h3(player, 2, 255)) : (a8h(384, aP.hf(28, [bV.mU[player]]), 50, player, aC.aD, "rgba(90,90,90,0.9)", -1, !0), er.h3(player, 2,
			96))
	}, this.b8 = function(e0, target) {
		var color = a8j(210, 255, 210);
		1 < e0.length ? a8h(230, aP.hf(29, [e0.length, bV.mU[target]]), 66, target, color, aC.fr, -1, !0) : a8h(230, aP.hf(30, [bV.mU[e0[0]], bV.mU[target]]), 66, e0[0], color, aC.fr, target, !0)
	}, this.wD = function(player, target) {
		a8h(230, aP.hf(31, [bV.mU[player], bV.mU[target]]), 66, player, aC.aD, "rgba(75,65,5,0.9)", target, !0)
	}, this.sI = function(id, player) {
		a8x(id, player)
	}, this.a98 = function() {
		var a3;
		100 <= bV.bY[ay.az] || (-1 === (a3 = function(id) {
			for (var j = a8W.length - 1; 0 <= j; j--)
				if (a8W[j].id === id) return j;
			return -1
		}(143)) ? a8h(80, aP.hf(32), 143, 0, aC.aD, aC.fr, -1, !1) : a8W[a3].gM = 80)
	}, this.oW = function(rd, a99, player) {
		2 !== bV.ly[ay.az] && (a8h(200, aP.hf(33, [rd, bV.mU[player]], {
			hj: [0]
		}), 30, player, "rgb(190,255,190)", aC.fr, -1, !0), a99) && a8h(30, aP.hf(34, [a99], {
			hj: [0]
		}), 30, 0, aC.aD, aC.fr, -1, !1)
	}, this.a1K = function(rd, player) {
		2 !== bV.ly[ay.az] && (a8w(31, 0), 2 === bV.ly[player] || player >= ay.dc ? a8h(150, aP.hf(36, [bV.mU[player], rd], {
			hj: [1]
		}), 31, player, aC.cF, "rgba(205,205,205,0.9)", -1, !0) : a8h(150, aP.hf(35, [bV.mU[player], rd], {
			hj: [1]
		}), 31, player, aC.cF, "rgba(205,255,205,0.9)", -1, !0))
	}, this.u9 = function(ro) {
		for (var aJ = c0.ci(), j = 2; 0 <= j; j--) 0 < a8Z.zt[j] && (ro || a8Z.aJ[j] < aJ - 220) && this.a9B(j)
	}, this.a9B = function(id) {
		var bv, s = a8Z.zt[id],
			player = a8Z.e0[id];
		a8Z.zt[id] = 0, 1 === s ? (bv = 0 === id ? aP.hf(47, [bV.mU[player], bV.mU[a8Z.a8d[0]]]) : aP.hf(47 + id, [bV.mU[player]]), a8w(7, 0), a8h(a8Z.a0H[id], bv, 7, a8Z.a8d[id], aC.aD, aC.fr, -1, !0)) : 2 <= s && (bv = aP.hf(44 + id, [bV.mU[
			player], s - 1]), a8w(7, 0), a8h(a8Z.a0H[id], bv, 7, player, aC.aD, aC.fr, -1, !1))
	}, this.a2M = function(id, dD, dE) {
		var aJ = c0.ci(),
			s = a8Z.zt[id] + 1;
		a8Z.zt[id]++, a8Z.e0[id] = dD, a8Z.a8d[id] = dE, 1 === s && (a8Z.aJ[id] = aJ), (1 === s && (ay.dd < 32 || 2 === ay.di) || 1 < s && (a8Z.aJ[id] < aJ - 140 || 2 === ay.di)) && this.a9B(id)
	}, this.bF = function() {
		for (var hy = (hy = a8W.length - a8a) <= 1 ? 1 : hy * hy, j = a8W.length - 1; 0 <= j; j--) 0 < a8W[j].gM && (a8W[j].gM -= hy, a8W[j].gM <= 0) && (c0.c1 = !0, a8W.splice(j, 1));
		! function() {
			var h0, j;
			if (128 !== a8b && !(++a8b < 128))
				for (h0 = 5, j = bd - 1; 0 <= j; j--) 1 === bV.ly[rs[j]] && 0 < h0-- && a8h(240, aP.hf(50, [bV.mU[rs[j]]]), 1, rs[j], aC.cF, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.u9(!1)
	}, this.c9 = function() {
		for (var fa, l = iu(), j = a8W.length - 1; 0 <= j; j--) fa = l - (j + 1) * aa, 50 === a8W[j].id ? (cA.drawImage(a8W[j].ij, ad.aZ - a8W[j].aZ - a8Y - lU, fa), cA.drawImage(a8c, ad.aZ - a8Y - lU, fa)) : cA.drawImage(a8W[j].ij, ad.aZ - a8W[
			j].aZ - lU, fa)
	}
}

function a9D() {
	this.a9E = new a9F, this.uW = new z5
}

function a9G(name, placeholder) {
	var a9H = document.createElement("textarea"),
		a9J = (this.a9I = a9H, !0);

	function a9P() {
		a9H.select(), document.execCommand("copy")
	}
	this.resize = function() {
			a9H.style.padding = aL.ab.sh(af.a2s)
		}, this.a9K = function(a9L) {
			a9H.value = a9L
		}, this.a9M = function() {
			return a9H.value
		}, this.a9N = function() {
			a9H.select()
		}, this.clear = function() {
			a9H.value = ""
		}, this.a9O = function() {
			a9J && navigator.clipboard ? (a9H.select(), navigator.clipboard.writeText(a9H.value).catch(function() {
				a9J = !1, a9P()
			})) : a9P()
		}, a9H.setAttribute("name", name), a9H.setAttribute("id", name + "Field"), a9H.setAttribute("autocomplete", "off"), a9H.setAttribute("placeholder", placeholder), a9H.style.top = "0", a9H.style.left = "0", a9H.style.width = "100%", a9H.style
		.height = "100%", a9H.style.userSelect = "none", a9H.style.outline = "none", a9H.style.resize = "none", a9H.style.border = "none", a9H.style.color = aC.aD, a9H.style.backgroundColor = aC.la, a9H.style.fontSize = "1.2em"
}

function a9Q() {
	var qp, y7, kU, yD;
	this.show = function() {
			qp.show(), this.resize()
		}, this.fb = function() {
			qp.fb()
		}, this.resize = function() {
			qp.resize(), y7.resize()
		}, this.qz = function(aJ) {
			2 === aJ && qp.r0[0].a9()
		}, qp = new qv("⚙️ " + aP.aQ[81], [new a5("💾 " + aP.aQ[97], function() {
			ak.am(1)
		}, aC.yW), new a5("🔄 " + aP.aQ[98], function() {
			ak.al(), aS.aT.ap(), ak.am(2)
		})]), kU = [], (yD = new yE).yJ(aP.aQ[99]), yD.zD(aP.aQ[100]), kU.push(yD), (yD = new yE).yJ(aS.ai.data[0].title), yD.zH(new xC(aS.ai.data[0])), kU.push(yD), (yD = new yE).yJ(aS.ai.data[10].title), yD.zH(new xC(aS.ai.data[10])), kU.push(yD),
		(yD = new yE).yJ(aS.ai.data[1].title), yD.zH(new xC(aS.ai.data[1])), kU.push(yD), (yD = new yE).yJ(aS.ai.data[9].title), yD.zH(new xC(aS.ai.data[9])), kU.push(yD), (yD = new yE).yJ(aS.ai.data[11].title), yD.zH(new xC(aS.ai.data[11])), kU
		.push(yD), (yD = new yE).yJ(aS.ai.data[2].title), yD.yK(new aN(aS.ai.data[2])), kU.push(yD), (yD = new yE).yJ(aS.ai.data[7].title), yD.yK(new aN(aS.ai.data[7])), kU.push(yD), (yD = new yE).yJ(aS.ai.data[8].title), yD.yK(new aN(aS.ai.data[
		8])), kU.push(yD), (yD = new yE).yJ(aS.ai.data[5].title), yD.yK(new yH(aS.ai.data[5])), kU.push(yD), y7 = new y9(qp.qx, kU)
}

function a21() {
	this.ld = function(bv, font, maxWidth) {
		if (cA.font = font, cA.measureText(bv).width <= maxWidth) return bv;
		for (var j = bv.length - 1; 1 <= j; j--)
			if (bv = bv.substring(0, j), cA.measureText(bv + "...").width <= maxWidth) return bv + "...";
		return "..."
	}
}

function a26() {
	var a9R = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a5w = function(gM) {
		var a9S, bv = new Date(gM.getTime() - 6e4 * gM.getTimezoneOffset()).toUTCString();
		return bv.length < 12 || (bv = bv.substring(5, bv.length), 0 === (gM = gM.getTimezoneOffset())) ? bv : (a9S = (gM < 0 ? "+" : "-") + d4.d5(Math.abs(gM), 60), 0 == (gM = Math.abs(gM) % 60) ? bv + a9S : bv + a9S + ":" + (gM < 10 ? "0" :
			"") + gM)
	}, this.a69 = function(gM) {
		var bv = gM.toUTCString();
		return bv.length < 12 ? bv : function(gM) {
			return a9R[gM.getUTCDay()]
		}(gM) + ", " + bv.substring(5, bv.length - 4)
	}
}

function a9U() {
	var a9X, a9Z;
	this.a1X = 5, this.vx = this.a1X - 1, this.a9V = this.a1X + this.vx, this.a9W = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.a9Y = null;

	function a9h(j) {
		return a9Z[j].a0a && a9X[j].a9h()
	}

	function a9j(vU) {
		a9Z[vU].gM = c0.gM, a9Z[vU].a9b = !1
	}
	this.od = 0, this.vw = 0, this.aB = function() {
		this.a9Y = new Array(this.a1X);
		this.a9Y[0] = "territorial.io";
		var j, a2e = eC.a2f(0);
		for (eC.eD(0), j = 1; j < this.a1X; j++) this.a9Y[j] = oq.tD() + ".territorial.io";
		for (eC.eD(a2e), a9X = new Array(this.a9V), a9Z = new Array(this.a9V), j = this.a9V - 1; 0 <= j; j--) a9Z[j] = {
			a0a: !1,
			gM: 0,
			a9b: !1
		};
		this.w0(0, 0)
	}, this.a9c = function(j) {
		return a9X[j]
	}, this.a9d = function() {
		return this.vw < this.a1X ? this.vw : this.vw - this.vx
	}, this.bF = function() {
		for (var j = this.a9V - 1; 0 <= j; j--) this.a9e(j) && c0.gM > a9Z[j].gM + 15e3 && b0.b1.a9f(j, a9Z[j].a9b);
		!this.a9e(0) && c0.gM > a9Z[0].gM + 8e3 && (a9Z[0].gM = c0.gM, this.w0(0, 0))
	}, this.w0 = function(vU, yP) {
		if (a9Z[vU].a0a) {
			if (a9X[vU].a9h()) return a9X[vU].a9i(yP), a9X[vU].a9e();
			a9X[vU].fb()
		}
		return this.a9g(vU, yP), !1
	}, this.a9g = function(vU, yP) {
		a9Z[vU].a0a = !0, a9j(vU), a9X[vU] = new a9k, a9X[vU].aB(vU, yP)
	}, this.a9i = function(vU, yP) {
		a9h(vU) && a9X[vU].a9i(yP)
	}, this.a9l = function(vU, yP) {
		b0.hI.a9m(vU)
	}, this.a9e = function(j) {
		return a9Z[j].a0a && a9X[j].a9e()
	}, this.send = function(vU, bG) {
		a9j(vU), a9X[vU].send(bG)
	}, this.xd = function(vU) {
		8 === cB.cC() && (a9Z[vU].a9b = !0, b0.a9n.e5 = !0)
	}, this.close = function(vU, a9o) {
		a9h(vU) && a9X[vU].close(a9o)
	}, this.vV = function(vU, a9o) {
		a9p.a9q(a9o), a9h(vU) && a9X[vU].close(a9o)
	}, this.kk = function(a9o) {
		for (var j = this.a9V - 1; 0 <= j; j--) this.close(j, a9o)
	}, this.a9r = function(vU, a9o) {
		for (var j = this.a9V - 1; 0 <= j; j--) j !== vU && this.close(j, a9o)
	}, this.f5 = function() {
		this.close(this.od, 3246)
	}, this.a9s = function(vU, aR) {
		a9X[vU].fb(), a9p.a9t(vU, aR.code)
	}
}

function a9v() {
	var a9w, a9x, a9y, a9z, aA0, aA1, aA2, aA3, aA4, aA5, aA6, aA7, aA8, aA9, aAA, aAB, aAC, aAD, aAE, aAF, aAG, aAH, position, aAI, aAJ, aAK, aAL, aAM = 1,
		rX = 1;
	var leaderboardHasChanged = true;
	this.playerPos = ay.az;
	leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		leaderboardFilter.filteredLeaderboard = leaderboardFilter.playersToInclude
			.map(id => rx[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = leaderboardFilter.filteredLeaderboard.indexOf(rx[ay.az]);
	}

	function aAO() {
		aA2.clearRect(0, 0, a9w, a9u),
			aA2.fillStyle = aC.a83,
			aA2.fillRect(0, 0, a9w, aA7),
			aA2.fillStyle = aC.aF,
			aA2.fillRect(0, aA7, a9w, a9u - aA7);
		if (leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (leaderboardFilter.enabled ?
			this.playerPos :
			rx[ay.az]
		);
		if (leaderboardFilter.hoveringOverTabs) aAH = -1;
		if (leaderboardFilter.enabled && aAH >= leaderboardFilter.filteredLeaderboard.length) aAH = -1;
		playerPos >= position && aAQ(playerPos - position, aC.a7w),
			0 !== rx[ay.az] && 0 === position && aAQ(0, aC.a86),
			-1 !== aAH && aAQ(aAH, aC.a5J),
			aA2.fillStyle = aC.aF,
			//console.log("drawing", aAH),
			aA2.clearRect(0, a9u - leaderboardFilter.tabBarOffset, a9w, leaderboardFilter.tabBarOffset);
		aA2.fillRect(0, a9u - leaderboardFilter.tabBarOffset, a9w, leaderboardFilter.tabBarOffset);
		aA2.fillStyle = aC.aD,
			aA2.fillRect(0, aA7, a9w, 1),
			aA2.fillRect(0, a9u - leaderboardFilter.tabBarOffset, a9w, 1),
			leaderboardFilter.drawTabs(aA2, a9w, a9u - leaderboardFilter.tabBarOffset, aC.a7w),
			aA2.fillRect(0, 0, a9w, af.k5),
			aA2.fillRect(0, 0, af.k5, a9u),
			aA2.fillRect(a9w - af.k5, 0, af.k5, a9u),
			aA2.fillRect(0, a9u - af.k5, a9w, af.k5), aA2.font = a9x, aL.ab.textBaseline(aA2, 1), aL.ab.textAlign(aA2, 1), aA2.fillText(aP.aQ[65], Math.floor((a9w + aA7 - 22) / 2), Math.floor(aA5 + a9y / 2));
		playerList.drawButton(aA2, 12, 12, aA7 - 22);
		var jy, d2 = playerPos < position + aA0 - 1 ? 1 : 2;

		if (leaderboardFilter.enabled) {
			let result = leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aA0)
				position = (result.length > aA0 ? result.length : aA0) - aA0;
			//if (position >= result.length) position = result.length - 1;
			for (aA2.font = a9z, aL.ab.textAlign(aA2, 0), jy = aA0 - d2; 0 <= jy; jy--) {
				const pos = result[jy + position];
				if (pos !== undefined)
					aAR(mo[pos]), aAS(jy, pos, mo[pos]);
			}
			for (aL.ab.textAlign(aA2, 2), jy = aA0 - d2; 0 <= jy; jy--) {
				const pos = result[jy + position];
				if (pos !== undefined)
					aAR(mo[pos]), aAT(jy, mo[pos]);
			}
		} else {
			for (aA2.font = a9z, aL.ab.textAlign(aA2, 0), jy = aA0 - d2; 0 <= jy; jy--)
				aAR(mo[jy + position]), aAS(jy, jy + position, mo[jy + position]);
			for (aL.ab.textAlign(aA2, 2), jy = aA0 - d2; 0 <= jy; jy--)
				aAR(mo[jy + position]), aAT(jy, mo[jy + position]);
		}
		2 == d2 && (aAR(ay.az), aL.ab.textAlign(aA2, 0), aAS(aA0 - 1, rx[ay.az], ay.az), aL.ab.textAlign(aA2, 2), aAT(aA0 - 1, ay.az)), 0 === position && (d2 = .7 * aA8 / iw.get(4).height, aA2.setTransform(d2, 0, 0, d2, Math.floor(aA9 + .58 * aA8 +
			.5 * d2 * iw.get(4).width), Math.floor(aA5 + a9y + .4 * aA8)), aA2.imageSmoothingEnabled = !0, aA2.drawImage(iw.get(4), -Math.floor(iw.get(4).width / 2), -Math.floor(iw.get(4).height / 2)), aA2.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aAR(player) {
		ay.dT && (aA2.fillStyle = dV.a2y[dV.nv[dV.dW[player]]])
	}

	function aAQ(j, a79) {
		aA2.fillStyle = a79, j = aA0 - 1 < j ? aA0 - 1 : j;
		a79 = Math.floor((j === aA0 - 1 ? 2 : 0 === j ? 1.15 : 1) * aA8), a79 = j === aA0 - 2 ? Math.floor(aA7 + 9.15 * aA8) - Math.floor(aA7 + 8.15 * aA8) : a79;
		aA2.fillRect(0, Math.floor(aA7 + (j + (0 === j ? 0 : .15)) * aA8), a9w, a79)
	}

	function aAS(aAV, ue, j) {
		aA2.fillText(aAD[ue], aA9, Math.floor(aA5 + a9y + (aAV + .5) * aA8)), 1 === bV.ly[j] && (aA2.font = "italic " + a9z);
		ue = Math.floor(aA5 + a9y + (aAV + .5) * aA8);
		aA2.fillText(bV.mU[j], aAA, ue), 0 !== bV.ly[j] && (aA2.font = a9z), j < ay.dc && 2 !== bV.ly[j] || aA2.fillRect(aAA, ue + .35 * aAM, aAC[j], Math.max(1, .1 * aAM))
	}

	function aAT(aAV, j) {
		aA2.fillText(bV.bX[j], aAB, Math.floor(aA5 + a9y + (aAV + .5) * aA8))
	}

	function aAe(l) {
		return (l -= af.gap + aA7) < 0 ? Math.floor(l / aA8) - 1 : l < (aA0 - 1) * aA8 ? Math.floor(l / aA8) : l < a9u - aA7 ? aA0 - 1 : (l -= a9u - aA7, aA0 + Math.floor(l / aA8))
	}

	function k2(k, l) {
		return k >= af.gap && k < af.gap + a9w && l >= af.gap && l < af.gap + a9u
	}
	this.aB = function() {
			var j;
			for (aAJ = !1, aAL = aAK = aAI = 0, aAH = -1, aA0 = bw.bx.by() ? 6 : 10, rX = (position = 0) === (rX = aS.ai.data[11].value) ? 10 : 1 === rX ? 5 : 1, aAG = !1, aAE = new Uint16Array(aA0 + 1), aAF = new Uint32Array(aA0 + 1), aA4 = ay.cU,
				mo = new Uint16Array(aA4), rx = new Uint16Array(aA4), j = aA4 - 1; 0 <= j; j--) mo[j] = j, rx[j] = j;
			this.resize(!0), aAC = new Uint16Array(ay.cU);
			var aAN = Math.floor(a9w - aAA - aA9 - aA3);
			for (aAD = new Array(ay.cU), aA2.font = a9z, j = ay.cU - 1; 0 <= j; j--) aAD[j] = j + 1 + ".", bV.mU[j] = aL.iv.ld(bV.mV[j], a9z, aAN), aAC[j] = Math.floor(aA2.measureText(bV.mU[j]).width);
			aAO()
		}, this.resize = function(aB) {
			if (a9u = bw.bx.by() ? (a9w = Math.floor(.335 * ad.ae), Math.floor(aA0 * a9w / 8)) : (a9w = Math.floor(.27 * ad.ae), Math.floor(aA0 * a9w / 10)), a9w = Math.floor(.97 * a9w), (aA1 = document.createElement("canvas")).width = a9w, aA1
				.height = a9u, aA2 = aA1.getContext("2d", {
					alpha: !0
				}), aA5 = .025 * a9w, a9y = .16 * a9w, aA6 = 0 * a9w, aA7 = Math.floor(.45 * aA5 + a9y), aA8 = (a9u - a9y - 2 * aA5 - aA6) / aA0,
				aA1.height = a9u += aA8, leaderboardFilter.tabBarOffset = Math.floor(aA8 * 1.3), leaderboardFilter.verticalClickThreshold = a9u - leaderboardFilter.tabBarOffset, leaderboardFilter.windowWidth = a9w,
				a9x = aL.ab.bz(1, Math.floor(.55 * a9y)), aAM = Math.floor((bw.bx.by() ? .67 : .72) * aA8), a9z = aL.ab.bz(0, aAM), aA2.font = a9z, aA9 = Math.floor(.04 * a9w), aAA = Math.floor((bw.bx.by() ? .195 : .18) * a9w), aA3 = Math.floor(aA2
					.measureText("00920600").width), aA2.font = a9x, aAB = a9w - aA9, !aB) {
				aA2.font = a9z;
				for (var j = ay.cU - 1; 0 <= j; j--) aAC[j] = Math.floor(aA2.measureText(bV.mU[j]).width);
				aAO()
			}
		}, this.lt = function() {
			return a9w
		}, this.f2 = function(ro, aAP) {
			(aAP || aAG && (ro || c0.ci() % rX == 0)) && (aAG = !1, aAO())
		}, this.bF = function() {
			! function() {
				for (var jy = aA4 - 1; 0 <= jy; jy--) 0 === bV.bW[mo[jy]] && ! function(jy) {
					var aAc = mo[jy];
					aA4--;
					for (var j = jy; j < aA4; j++) mo[j] = mo[j + 1], rx[mo[j]] = j;
					mo[aA4] = aAc, rx[mo[aA4]] = aA4
				}(jy)
			}();
			for (var aAa, bI = aA4 - 1, jy = 0; jy < bI; jy++) bV.bX[mo[jy]] < bV.bX[mo[jy + 1]] && (aAa = mo[jy], mo[jy] = mo[jy + 1], mo[jy + 1] = aAa, rx[mo[jy]] = jy, rx[mo[jy + 1]] = jy + 1);
			! function() {
				for (var c3 = aAG, d2 = (aAG = !0, rx[ay.az] >= aA0 - 1 ? aA0 - 2 : aA0 - 1), j = d2; 0 <= j; j--)
					if (aAE[j] !== mo[j] || aAF[j] !== bV.bX[mo[j]]) return;
				(d2 != aA0 - 2 || aAE[aA0] === rx[ay.az] && aAF[aA0] === bV.bX[ay.az]) && (aAG = c3)
			}();
			for (var j = aA0 - 1; 0 <= j; j--) aAE[j] = mo[j], aAF[j] = bV.bX[mo[j]];
			aAE[aA0] = rx[ay.az], aAF[aA0] = bV.bX[ay.az];
			leaderboardHasChanged = true;
		}, leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.fW = function(k, l) {
			return !!k2(k, l) && ((utils.isPointInRectangle(k, l, af.gap + 12, af.gap + 12, aA7 - 22, aA7 - 22) && playerList.display(bV.mV), true) &&
				!(l - af.gap > leaderboardFilter.verticalClickThreshold && leaderboardFilter.handleMouseDown(k - af.gap)) && (aAI = c0.gM, aAJ = !0, aAK = aAL = aAe(l), xi.y1() && (k = aAf(-1, aAL, aA0), aAH !== (k = k === aA0 ? -1 : k)) && (
					aAH = k, aAO(), c0.c1 = !0)), !0)
		}, leaderboardFilter.repaintLeaderboard = function() {
			aAO(), c0.c1 = !0;
		},
		this.fi = function(k, l) {
			if (utils.isPointInRectangle(k, l, af.gap + 12, af.gap + 12, aA7 - 22, aA7 - 22)) {
				playerList.hoveringOverButton === false && (playerList.hoveringOverButton = true, aAO(), c0.c1 = !0);
			} else {
				playerList.hoveringOverButton === true && (playerList.hoveringOverButton = false, aAO(), c0.c1 = !0);
			}
			if (leaderboardFilter.setHovering(
					utils.isPointInRectangle(k, l, af.gap, af.gap + leaderboardFilter.verticalClickThreshold, leaderboardFilter.windowWidth, leaderboardFilter.tabBarOffset), k - af.gap
				)) return;
			var c3, aAd = aAe(l);
			return aAJ ? (c3 = position, (position = aAf(0, position += aAK - aAd, ay.cU - aA0)) !== c3 && (aAd = (aAd = aAf(-1, aAK = aAd, aA0)) !== aA0 && k2(k, l) ? aAd : -1, aAH = aAd, aAO(), c0.c1 = !0), !0) : (aAd = (aAd = aAf(-1, aAd,
				aA0)) === aA0 || !k2(k, l) || xi.y1() ? -1 : aAd, aAH !== aAd && (aAH = aAd, aAO(), c0.c1 = !0))
		}, this.fj = function(k, l) {
			if (!aAJ) return !1;
			aAJ = !1;
			var aAd = aAe(l);
			var isEmptySpace = false;
			return xi.y1() && -1 !== aAH && (aAH = -1, aAO(), c0.c1 = !0), c0.gM - aAI < 350 && aAL === aAd && -1 !== (aAd = (aAd = aAf(-1, aAd, aA0)) !== aA0 && k2(k, l) ? aAd : -1) && (k = (leaderboardFilter.enabled ? (updateFilteredLb(), mo[
					leaderboardFilter.filteredLeaderboard[aAd + position] ?? (isEmptySpace = true, rx[ay.az])]) : mo[aAd + position]), aAd === aA0 - 1 && (leaderboardFilter.enabled ? this.playerPos : rx[ay.az]) >=
				position + aA0 - 1 && (k = ay.az), !isEmptySpace && ay.dT && donationsTracker.displayHistory(k, bV.mV, ay.bB), 0 !== bV.bW[k] && !isEmptySpace) && f0.a0K(k, 800, !1, 0), !0
		}, this.qm = function(k, l, deltaY) {
			var aAg;
			return !(aAJ || ay.dk || (aAg = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !k2(k, l)) || (k = (k = aAf(-1, aAe(l), aA0)) === aA0 || xi.y1() ? -1 : k, 0 < deltaY ? position < ay.cU - aA0 && (position += Math.min(ay.cU - aA0 -
				position, aAg), aAH = k, aAO(), c0.c1 = !0) : 0 < position && (position -= Math.min(position, aAg), aAH = k, aAO(), c0.c1 = !0), 0))
		}, this.c9 = function() {
			cA.drawImage(aA1, af.gap, af.gap)
		}
}

function aAh() {
	function aAj(j) {
		return void 0 !== b.e6.gd[j].a2c
	}

	function aAi(j) {
		return 1 !== j && !aAj(j) && j !== b.ge()
	}
	this.wM = 21, this.o = 0, this.p = 0, this.gm = null, this.gn = null, this.lG = null, this.go = null, this.c = 0, this.gl = 0, this.zU = !1, this.lH = new a2Q, this.e6 = new a7W, this.aB = function() {
		this.e6.aB()
	}, this.eR = function(map, l7) {
		((map %= this.wM) !== this.c || aAi(this.c) && l7 !== this.gl) && (this.zU = !1, this.lH.lI(), eC.eD(map), this.c = map, this.gl = l7, aAi(map) && (b.e6.gd[map].a2e = l7), aAj(this.c) ? tU() : (map = b.e6.gd[this.c], this.o = map.aZ, this
			.p = map.aa, eC.eD(map.a2e), z.eR([this.o, this.p, map.a05, map.a02]), a(), eI.zP(), z.a2Z()))
	}, this.zi = function(j) {
		return 3 === j || 7 === j || 9 === j || j === this.ge()
	}, this.aAk = function(j) {
		return 2 === j || 7 === j || 9 === j
	}, this.zS = function(j) {
		return 1 === j
	}, this.ge = function() {
		return this.wM
	}
}

function aAl() {
	var aAm, aAn;

	function aAo() {
		var aZ = new aAq;
		aZ.eR(1612), aZ.hE(1, 0), aZ.hE(6, 7), aZ.hE(2, bw ? bw.id : 3), aZ.hE(1, m1 ? 1 : 0), aZ.hE(1, m3 ? 1 : 0), aZ.hE(1, aAr ? aAr.m7 : 0);
		for (var j = 0; j < aAn.length && j < 100; j++) aZ.hE(16, aAn.charCodeAt(j));
		aAm.send(aZ.bG), aAp()
	}

	function aAp() {
		aAm && (aAm.onclose = null, aAm.onopen = null, aAm = null)
	}
	window.addEventListener("error", function error(aR) {
		window.removeEventListener("error", error);
		return alert("Error:\n" + aR.filename + " " + aR.lineno + " " + aR.colno + " " + aR.message);
		window.removeEventListener("error", error), aAn = aR.lineno + " " + aR.colno + " " + aR.message, (aAm = new WebSocket("wss://territorial.io/s52/")).onopen = aAo, aAm.onclose = function() {
			aAp()
		}, 0 === aR.lineno && 0 === aR.colno || (bw && 1 === bw.id ? bw.gj.showToast(aAn) : alert(aAn))
	})
}

function aAs() {
	this.uz = new a8C, this.aAt = new aAu, this.aAv = new um, this.aB = function(dy, e0, e1, e2) {
		var v4;
		ay.bC || ((v4 = {}).dz = ay.az, v4.dy = dy, v4.e0 = e0, v4.e1 = e1, v4.e2 = e2, v4.l6 = b.c, v4.l7 = b.gl, eA.aAw(v4), this.uz.aB(v4))
	}, this.bF = function() {
		ay.bC || (this.uz.bF(), 3 !== ak.a5f) || c0.ci() % 15 != 5 && 2 !== ay.di || ak.yO().aAy()
	}, this.aAz = function() {
		var xB = this.uz.v4;
		0 === ay.di && cB.w3(), b.eR(xB.l6, xB.l7), 1 === xB.e0.length && (eA.w4(xB.e1), eA.aB0(xB.v9, xB.vA)), b0.ba.close(b0.ba.od, 3257), b0.ba.od = 0, ay.dx(xB.dy, xB.dz, xB.e0, xB.e1, xB.e2, !0)
	}, this.aB1 = function(bv) {
		var j = bv.indexOf("=");
		return 0 <= j ? bv.substring(j + 1) : bv
	}, this.aB2 = function(bv) {
		return "https://territorial.io/?replay=" + bv
	}
}

function eT() {
	for (bd = 0, j = ay.cU - 1; 0 <= j; j--) 0 !== bV.bW[j] && bd++;
	rs = new Uint16Array(bd);
	for (var s = 0, j = 0; j < ay.cU; j++) 0 !== bV.bW[j] && (rs[s++] = j)
}

function aB3() {
	aB4(), me()
}

function me() {
	for (var j = bd - 1; 0 <= j; j--) 0 === bV.bW[rs[j]] && aB5(j)
}

function aB5(j) {
	bd--;
	for (var jy = j; jy < bd; jy++) rs[jy] = rs[jy + 1]
}

function aB4() {
	for (var j = bd - 1; 0 <= j; j--) {
		var c3, i0 = rs[j];
		bV.bX[i0] <= a4(bV.a46[i0], 4) ? bV.bX[i0] <= 1e3 && (2 !== bV.bW[i0] || 0 === bV.bX[i0]) && md(i0) : bV.bX[i0] >= bV.a46[i0] ? (c3 = bV.bX[i0], 250 <= (bV.a46[i0] = c3) && (bV.zB[i0] = 1)) : bV.a46[i0] -= Math.max(1, a4(bV.a46[i0] - bV.bX[
			i0], 1e3))
	}
}

function aB6() {
	for (var v3 = 0, j = bd - 1; 0 <= j; j--) v3 += bV.bY[rs[j]];
	return v3 % 4096
}

function aB7() {
	this.a9m = function(vU) {
		hD.eR(39), hD.hE(1, 0), hD.hE(6, 13), hD.hE(14, aAr.m5), hD.hE(4, bw.id), hD.hE(7, bw.ot), hD.hE(1, +m1), hD.hE(1, +m3), hD.hE(5, (new Date).getHours() % 24), b0.ba.send(vU, hD.bG)
	}, this.aB9 = function(vU, aBA, w8) {
		hD.eR(26), hD.hE(1, 0), hD.hE(6, 14), hD.hE(3, w8), hD.hE(16, aBA), b0.ba.send(vU, hD.bG)
	}, this.aBB = function(id) {
		hD.eR(13), hD.hE(1, 0), hD.hE(6, 15), hD.hE(6, id), b0.ba.send(0, hD.bG)
	}, this.aBC = function(vv, yN) {
		hD.eR(7 + 26 * yN.length), hD.hE(1, 0), hD.hE(6, 9);
		for (var j = 0; j < yN.length; j++) hD.hE(16, yN[j][0]), hD.hE(10, yN[j][1]);
		b0.ba.send(vv, hD.bG)
	}, this.vQ = function(aBD, v3) {
		hD.eR(20), hD.hE(1, 0), hD.hE(6, 19), hD.hE(1, aBD), hD.hE(12, v3), b0.ba.send(b0.ba.od, hD.bG)
	}, this.hJ = function(username) {
		hD.hE(5, username.length), hO.hP.hQ(username)
	}
}

function aBE() {
	this.aBF = [], this.aBG = [], this.aB = function() {
		this.aBF = [], this.aBG = []
	}, this.bF = function() {
		0 <= this.aBF.length && this.aBH(this.aBF), 0 <= this.aBG.length && this.aBH(this.aBG)
	}, this.aBH = function(g3) {
		for (var d9 = -1, j = g3.length - 1; 0 <= j; j--)
			if (g3[j].gM--, g3[j].gM <= 0) {
				d9 = j;
				break
			} for (j = d9; 0 <= j; j--) g3.shift()
	}, this.aBI = function(id, e0, aBJ) {
		return this.aBK(this.aBF, id, e0, aBJ)
	}, this.wC = function(id, e0, aBJ) {
		return this.aBK(this.aBG, id, e0, aBJ)
	}, this.aBK = function(g3, id, e0, aBJ) {
		return ! function(g3, id, e0) {
			var j, d7;
			for (j = e0.length - 1; 0 <= j; j--)
				for (d7 = g3.length - 1; 0 <= d7; d7--)
					if (g3[d7].player === e0[j] && id === g3[d7].id) return 1;
			return
		}(g3, id, e0) && (aBJ && function(g3, id, e0) {
			var j;
			for (j = e0.length - 1; 0 <= j; j--) g3.push({
				player: e0[j],
				id: id,
				gM: 384
			})
		}(g3, id, e0), !0)
	}
}

function po() {
	this.aBN = 32, this.k = 0, this.l = 0, this.iZ = 0, this.aBO = 0, this.aBP = 4, this.cf = null, this.dR = new Int16Array(9), this.aB = function() {
		this.iZ = 1 + d4.d5(b.o - 1, this.aBN), this.aBO = 1 + d4.d5(b.p - 1, this.aBN), this.cf = new Array(this.iZ * this.aBO), aL.a1z.uE(this.cf);
		var k, l, dR = this.dR,
			aZ = this.iZ;
		for (k = -1; k <= 1; k++)
			for (l = -1; l <= 1; l++) dR[3 * (1 + l) + 1 + k] = l * aZ + k
	}, this.cW = function(aBR, j) {
		return this.cf[j].push(aBR), this.cf[j].length - 1
	}, this.d6 = function(aBS, cX, cr) {
		var aBT, aBU, cX = cY.cg(cX),
			cr = cY.cg(cr);
		return cX === cr ? aBS : (aBT = this.cf[cX].pop(), this.cf[cX].length === aBS ? this.cW(aBT, cr) : (aBU = this.cf[cX][aBS], this.cf[cX][aBS] = aBT, bZ.ba.cR[aBT] = aBS, this.cW(aBU, cr)))
	}
}

function aBV() {
	var g3, a2n, aBW, aBX, gap, aBY, aBZ, aBa, aBb, aBc, li, aBd, aBe, gI, qW, a0b, aBf, aBg;

	function aBk() {
		aBX = Math.floor(.2 * (bw.bx.by() ? .07 : .035) * ad.ae), aBX = io(bw.bx.by() ? 3 : 1, aBX);
		var aBm = ad.aZ / (g3.length + gap);
		aBX = aBX < aBm ? aBm : aBX, qW = Math.floor((1 - gap) * aBX), a2n = 0, aBn()
	}

	function aBn() {
		a2n = (a2n = a2n < -20 ? -20 : a2n) > (g3.length - 15) * aBX ? (g3.length - 15) * aBX : a2n, aBZ = Math.floor(a2n / aBX), aBa = (aBa = aBZ + Math.floor(ad.aZ / aBX)) > g3.length - 1 ? g3.length - 1 : aBa, aBZ = (aBZ = aBa < aBZ ? aBa : aBZ) <
			0 ? 0 : aBZ;
		var d8 = aBa;
		aBY = aBW / g3[d8];
		for (var j = aBa - 1; aBZ <= j; j--) g3[j] > g3[d8] && (d8 = j, aBY = aBW / Math.pow(g3[j], gI))
	}

	function aBq(k) {
		k = Math.floor((a2n + ad.aZ - k - gap * aBX) / aBX);
		return (k = k < -1 ? -1 : -1 === k ? 0 : k > g3.length - 1 ? -1 : k) !== aBb && (aBb = k, -1 === a0b && 0 === aBb && vp.aBh && (a0b = setInterval(aBr, 100)), 1)
	}

	function aBs(j) {
		var wg = Math.floor(aBY * Math.pow(g3[j], gI));
		cA.fillRect(a2n + ad.aZ - (j + 1) * aBX, ad.aa - wg, qW, wg)
	}

	function aBr() {
		var i0;
		0 !== (aBb = 8 === cB.cC() ? -1 : aBb) ? (aBf = (new Date).getTime(), clearInterval(a0b), a0b = -1) : (i0 = g3[1] / 864e3, -1 !== aBf && (i0 += ((new Date).getTime() - aBf) * g3[1] / 864e5, aBf = -1), 0 < i0 && (g3[0] += Math.floor(i0), c0
			.c1 = !0))
	}
	this.aBh = !1, this.aB = function() {
		aBf = a0b = -1, aBb = -(gI = 1), this.aBi = !1, aBe = 0, aBd = new Date, a2n = 0, gap = .3, (aBg = []).push({
			h0: "Plateau A",
			s: 0,
			aR: 57
		}), aBg.push({
			h0: "Max A",
			s: 1,
			aR: 1
		}), aBg.push({
			h0: "Black Friday",
			s: 15,
			aR: 15
		}), aBg.push({
			h0: "Max B",
			s: 19,
			aR: 19
		}), aBg.push({
			h0: "Max C",
			s: 44,
			aR: 44
		}), aBg.push({
			h0: "First Android Version",
			s: 58,
			aR: 58
		}), aBg.push({
			h0: "Max D",
			s: 67,
			aR: 67
		}), aBg.push({
			h0: "The iFrame Explosion",
			s: 98,
			aR: 99
		}), aBg.push({
			h0: "The 155-Day Uptrend",
			s: 58,
			aR: 213
		}), aBg.push({
			h0: "Max E",
			s: 213,
			aR: 213
		}), aBg.push({
			h0: "Plateau B",
			s: 214,
			aR: 259
		}), aBg.push({
			h0: "Turbulent Times",
			s: 260,
			aR: 344
		}), aBg.push({
			h0: "Max F",
			s: 262,
			aR: 262
		}), aBg.push({
			h0: "Max G",
			s: 282,
			aR: 282
		}), aBg.push({
			h0: "Max H",
			s: 333,
			aR: 333
		}), aBg.push({
			h0: "The 19-Day Downtrend",
			s: 283,
			aR: 301
		}), aBg.push({
			h0: "Plateau C",
			s: 345,
			aR: 385
		}), aBg.push({
			h0: "The Alliance Ascent",
			s: 386,
			aR: 395
		}), aBg.push({
			h0: "Max I",
			s: 395,
			aR: 395
		}), aBg.push({
			h0: "First iOS Version",
			s: 411,
			aR: 411
		}), aBg.push({
			h0: "Plateau D",
			s: 396,
			aR: 453
		}), aBg.push({
			h0: "The TikTok Revolution",
			s: 454,
			aR: 470
		}), aBg.push({
			h0: "Max J",
			s: 456,
			aR: 456
		}), aBg.push({
			h0: "Max K",
			s: 472,
			aR: 472
		}), aBg.push({
			h0: "Max L",
			s: 478,
			aR: 478
		}), aBg.push({
			h0: "YT Drew",
			s: 471,
			aR: 485
		}), aBg.push({
			h0: "Plateau E",
			s: 485,
			aR: 600
		}), aBg.push({
			h0: "Uptrend A",
			s: 600,
			aR: 613
		}), aBg.push({
			h0: "Max M",
			s: 613,
			aR: 613
		}), aBg.push({
			h0: "Downtrend A",
			s: 614,
			aR: 635
		}), aBg.push({
			h0: "Plateau F",
			s: 636,
			aR: 737
		}), aBg.push({
			h0: "End of Record",
			s: 738,
			aR: 738
		}), g3 = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
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
		aBW = Math.floor(.15 * ad.aa), aBc = (aBc = Math.floor((bw.bx.by() ? .018 : .0137) * ad.ae)) < 2 ? 2 : aBc, li = aL.ab.bz(1, aBc), aBk()
	}, this.vq = function(aBl) {
		var j;
		for (this.aBh = !0, j = 0; j < aBl.length; j++) g3.unshift(aBl[j]);
		aBk(), c0.c1 = !0
	}, this.aBo = function() {
		aBn()
	}, this.fi = function(k, l) {
		l > ad.aa - .6 * aBW ? this.aBi ? k !== aBe && (a2n += k - aBe, aBe = k, aBn(), aBq(k), this.aBi = -1 !== aBb, c0.c1 = !0) : aBq(k) && (c0.c1 = !0) : this.gk()
	}, this.gk = function() {
		-1 !== aBb && (this.aBi = !1, aBb = -1, c0.c1 = !0)
	}, this.qm = function(k, deltaY) {
		-1 !== aBb && (a2n += Math.floor(deltaY), aBn(), aBq(k), c0.c1 = !0)
	}, this.fW = function(k, l) {
		this.fi(k, l), -1 !== aBb && (aBe = k, this.aBi = !0)
	}, this.fj = function() {
		-1 !== aBb && (this.aBi = !1)
	}, this.c9 = function() {
		cA.fillStyle = aC.gJ;
		for (var aBu, month, c3, fF, aBx, aBy, dI, aBz, aC0, j = aBa; aBZ <= j; j--) aBs(j);
		this.aBh && 0 === aBZ && (cA.fillStyle = aC.a3b, aBs(0)), -1 !== aBb && (cA.fillStyle = aC.lg, aBs(aBb)), -1 !== aBb && (cA.font = li, aL.ab.textBaseline(cA, 2), (c3 = new Date).setTime(aBd.getTime() - 1e3 * aBb * 60 * 60 * 24), month =
			"month", aBu = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(c3), aBu = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(c3)), aBu = aBu + ", " + c3.getUTCDate() + " " + month + " " + c3.getFullYear(), month = 1 === g3[aBb] ? " second played" : " seconds played", month = aL.fm.fn(g3[aBb]) + month, c3 = Math.floor(cA.measureText(aBu)
			.width), fF = Math.floor(cA.measureText(month).width), aBx = Math.floor(.5 * (c3 + aBc)), aBy = (aBy = a2n + ad.aZ - (aBb + 1) * aBX) < aBx ? aBx : aBy > ad.aZ - aBx ? ad.aZ - aBx : aBy, dI = ad.aa - Math.floor(aBY * Math.pow(g3[
				aBb], gI)), aBz = Math.floor(1.1 * aBc), aC0 = dI > ad.aa - aBz ? ad.aa - aBz : dI, cA.fillStyle = aC.fr, cA.fillRect(ad.aZ - fF - aBc, aC0 - aBz, fF + aBc, aBz), cA.fillRect(aBy - aBx, ad.aa - aBz, c3 + aBc, aBz), cA
			.fillStyle = aC.aD, aL.ab.textAlign(cA, 2), cA.fillText(month, Math.floor(ad.aZ - .5 * aBc), aC0),
			function(dI, aBz) {
				for (var fE, a3G = -1, a3 = g3.length - aBb - 1, j = aBg.length - 1; 0 <= j; j--) a3 >= aBg[j].s && a3 <= aBg[j].aR && (-1 === a3G || aBg[j].aR - aBg[j].s < aBg[a3G].aR - aBg[a3G].s) && (a3G = j); - 1 !== a3G && (fE = Math
					.floor(cA.measureText(aBg[a3G].h0).width), cA.fillStyle = aC.fr, cA.fillRect(ad.aZ - fE - aBc, dI, fE + aBc, aBz), cA.fillStyle = aC.aD, cA.fillText(aBg[a3G].h0, Math.floor(ad.aZ - .5 * aBc), dI + aBz))
			}(aC0 - 2 * aBz, aBz), aL.ab.textAlign(cA, 1), cA.fillText(aBu, aBy, ad.aa), cA.strokeStyle = aC.a7p, cA.lineWidth = 1, cA.beginPath(), cA.moveTo(0, dI), cA.lineTo(ad.aZ, dI), cA.closePath(), cA.stroke())
	}
}

function aC2() {
	var qp, a9H;

	function aC3() {
		f7.ok.hideCMPButton(), ak.am(0);
		var bv = eU.aB1(a9H.a9M());
		(0 < bv.length && bv === eU.uz.v0 || eU.aAv.t7(bv)) && eU.aAz()
	}
	this.show = function(aC4) {
		this.aAy(aC4), qp.show(), this.resize()
	}, this.aAy = function(aC4) {
		0 === ay.di ? (aC4 = aC4 || a9H.a9M(), a9H.a9K(aC4)) : (ay.bC || (eU.uz.v0 = eU.aAt.t6()), a9H.a9K(eU.aB2(eU.uz.v0)))
	}, this.fb = function() {
		qp.fb()
	}, this.resize = function() {
		qp.resize(), a9H.resize()
	}, this.qz = function(aJ) {
		2 === aJ ? qp.r0[0].a9() : aC3()
	}, qp = new qv("▶️ " + aP.aQ[82], [new a5("❌ " + aP.aQ[92], function() {
		ak.qs()
	}, aC.p8), new a5("🔲 " + aP.aQ[93], function() {
		a9H.a9N()
	}), new a5("📋 " + aP.aQ[94], function() {
		a9H.a9O()
	}), new a5("🗑️ " + aP.aQ[95], function() {
		a9H.clear()
	}), new a5("▶️ " + aP.aQ[96], function() {
		aC3()
	}, aC.a7x)]), a9H = new a9G("replayData", "Insert the replay link here!"), qp.qx.appendChild(a9H.a9I)
}

function aC5() {
	var a8W, jw, ii, aC6, aa, li, fontSize, aC7, aC8, fO, aC9, ij, iv, ik, aCA;

	function aCG() {
		cA.drawImage(ij, af.gap + (ay.dT ? af.gap + eV.aCH() : 0), a9u + 2 * af.gap)
	}

	function aCB() {
		ij.width = a8W[0].width + fO, ij.height = aa + fO, (iv = ij.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a8W[0].width + fO, aa + fO), iv.translate(Math.floor(fO / 2), Math.floor(fO / 2)), iv.lineWidth = fO, iv.fillStyle = 1 === a8W[0].aCF ? aC.a7q : aC.fr, aCI(), iv.fill(), iv.strokeStyle = 1 === a8W[0].aCF ? aC.cF : aC
			.aD, aCI(), iv.stroke(), aL.ab.textAlign(iv, 1), aL.ab.textBaseline(iv, 1), iv.fillStyle = 1 === a8W[0].aCF ? aC.cF : aC.aD, iv.font = li[0], iv.fillText(aP.aQ[66 + a8W[0].aCE], Math.floor(a8W[0].width / 2), Math.floor(.72 * aC7[0] *
			aa)), iv.font = li[1], iv.fillText(a8W[0].bv, Math.floor(a8W[0].width / 2), Math.floor((aC7[0] + .48 * aC7[1]) * aa))
	}

	function aCI() {
		iv.beginPath(), iv.moveTo(aC9, 0), iv.lineTo(a8W[0].width - aC9, 0), iv.lineTo(a8W[0].width, aC9), iv.lineTo(a8W[0].width, aa - aC9), iv.lineTo(a8W[0].width - aC9, aa), iv.lineTo(aC9, aa), iv.lineTo(0, aa - aC9), iv.lineTo(0, aC9), iv
			.closePath()
	}
	this.aB = function() {
		jw = 4, ii = aC6 = ik = 0, a8W = [], li = new Array(2), fontSize = new Array(2), (aC7 = new Array(2))[0] = .3, aC7[1] = .7, aC8 = new Array(4), ij = document.createElement("canvas"), aCA = c0.gM + 2e3, this.resize()
	}, this.resize = function() {
		var j, aZ;
		for (aa = Math.floor((bw.bx.by() ? .0725 : .058) * ad.ae), fontSize[0] = Math.floor(.85 * aC7[0] * aa), fontSize[1] = Math.floor(.85 * aC7[1] * aa), li[0] = aL.ab.bz(1, fontSize[0]), li[1] = aL.ab.bz(1, fontSize[1]), j = aC8.length -
			1; 0 <= j; j--) aC8[j] = this.measureText(aP.aQ[66 + j] + "000", li[0]);
		if (fO = Math.floor(1 + .05 * aa), aC9 = Math.floor(.2 * aa), 0 < a8W.length) {
			for (j = a8W.length - 1; 0 <= j; j--) aZ = this.measureText(a8W[j].bv + "00", li[1]), a8W[j].width = aZ < aC8[j] ? aC8[j] : aZ;
			aCB()
		}
	}, this.bF = function() {
		0 !== jw && (4 === jw ? c0.gM > aCA && (jw = 0, 1 === ay.di) && c7.wT(b.e6.gd[b.c].name, 3, 1, 9) : (1 === jw ? (0 === ii && (aCB(), ii = 1e-4), 1 <= (ii += .002 * (c0.gM - ik)) && (aC6 = 0, jw = 2, ii = 1), c0.c1 = !0) : 2 === jw ? ((
			aC6 += (c0.gM - ik) / 1e3) > a8W[0].a0H || 1 < aC6 && 1 < a8W.length) && (jw = 3) : 3 === jw && ((ii -= .002 * (c0.gM - ik)) <= 0 && (ii = 0, a8W.shift(), jw = 0 < a8W.length ? 1 : 0), c0.c1 = !0), ik = c0.gM))
	}, this.measureText = function(bv, li) {
		return cA.font = li, Math.floor(cA.measureText(bv).width)
	}, this.a1I = function(a17, j) {
		this.wT(bV.mU[a17], j, 1, 0 === j ? 3 : 7)
	}, this.wT = function(bv, aCE, aCF, a0H) {
		var aZ = (aZ = this.measureText(bv + "00", li[1])) < aC8[aCE] ? aC8[aCE] : aZ;
		a8W.push({
			bv: bv,
			width: aZ,
			aCE: aCE,
			aCF: aCF,
			a0H: a0H
		}), 0 === jw && (ii = 0, jw = 1, ik = c0.gM)
	}, this.c9 = function() {
		0 !== jw && 0 !== ii && (ii < 1 ? (cA.globalAlpha = ii, aCG(), cA.globalAlpha = 1) : aCG())
	}
}

function aCJ() {
	aCK() ? (aCL(), a7M !== ay.cU && aCM()) : aCN()
}

function aCM() {
	a7L(), a7N(bV.a2N[a7M]), a7N(bV.i5[a7M]), a7O(bV.x9[a7M]), a7P(bV.i5[a7M]), a7P(bV.a2O[a7M]), a7Q(), a7R()
}

function aCL() {
	aCO = !0, eq.a1N(a7G, aCP, aCQ), bV.bX[a7G] += a7E, a7D(), aCR()
}

function aCK() {
	return (a7M === ay.cU ? aCS : aCT)()
}

function aCT() {
	var aCU = a7E * ay.db,
		aCV = aCW(),
		aCX = aCY(),
		aCV = aCU + 2 * aCV + aCX,
		aCa = aCb * a7E;
	return aCV < aCa ? (aCQ -= aCV, aCc(aCV - aCU, aCX), !0) : (aCQ -= aCa, aCc(aCa - aCU, aCX), !1)
}

function aCc(aCa, aCX) {
	if (0 < aCX) {
		if (!(aCX <= aCa)) return eq.a4T(a7M, a7G, aCX - aCa), void(aCa = 0);
		eq.a4T(a7M, a7G, 0), aCa -= aCX
	}
	aCa = a4(aCa, 2), bV.bY[a7M] >= aCa ? bV.bY[a7M] -= aCa : bV.bY[a7M] = 0
}

function aCY() {
	return eq.a4S(a7M, a7G)
}

function aCW() {
	return d4.d5(a7E * bV.bY[a7M], 1 + d4.d5(10 * bV.bX[a7M], 16))
}

function aCS() {
	return aCQ -= a7E * ay.db, !0
}

function aCR() {
	for (var j = a7E - 1; 0 <= j; j--) bV.x9[a7G].push(a7F[j]), bV.a2N[a7G].push(a7F[j]), eN.oI(a7F[j], a7G)
}

function qv(title, aCd, aCe) {
	var a1d = document.createElement("div"),
		aCf = document.createElement("div"),
		aCg = document.createElement("div"),
		aCh = document.createElement("div");
	this.qx = aCg, this.r0 = aCd, this.show = function() {
			!1 !== aCe ? document.body.appendChild(a1d) : (document.body.appendChild(aCf), document.body.appendChild(aCh))
		}, this.fb = function() {
			!1 !== aCe ? document.body.removeChild(a1d) : (document.body.removeChild(aCf), document.body.removeChild(aCh))
		}, this.zu = function() {
			var zv = aL.ab.sm(.1),
				aCl = aL.ab.sm(.08 + .04 * (ad.aCm < 1));
			return {
				zv: zv,
				aCl: aCl,
				zw: ad.aa / ad.pW - zv - aCl
			}
		}, this.resize = function() {
			var j, aR, s = aCd.length,
				zt = this.zu(),
				zv = zt.zv,
				aCl = zt.aCl;
			for (aCf.style.height = aL.ab.sh(zv), aL.ab.sg(aCf, 2), aCh.style.top = aL.ab.sh(ad.aa / ad.pW - aCl), aCh.style.height = aL.ab.sh(aCl), aL.ab.sg(aCh, 8), aCg.style.top = aL.ab.sh(zv), aCg.style.height = aCg.style.maxHeight = aL.ab.sh(zt
					.zw), aCh.style.font = aCf.style.font = aL.ab.bz(0, aL.ab.sm(.02, .25)), aCg.style.font = aL.ab.bz(0, aL.ab.sm(.02, .4)), j = 0; j < s; j++)(aR = aCd[j].button).style.top = "0", aR.style.left = (100 * j / s).toFixed(2) + "%", aR
				.style.width = (100 / s).toFixed(2) + "%", aR.style.height = "100%", 0 < j && aL.ab.sg(aR, 4)
		}, this.c9 = function() {
			var zt = this.zu(),
				aJ = ad.pW;
			cA.fillStyle = aC.aF, cA.fillRect(0, aJ * zt.zv, ad.aZ, aJ * zt.zw)
		}, a1d.style.position = "absolute", a1d.style.top = "0", a1d.style.left = "0", a1d.style.width = "100%", a1d.style.height = "100%", aCf.style.position = "absolute", aCf.style.top = "0", aCf.style.left = "0", aCf.style.width = "100%", aCf
		.style.display = "flex", aCf.style.backgroundColor = aC.aF, aCh.style.position = "absolute", aCh.style.left = "0", aCh.style.width = "100%", aCg.style.position = "absolute", aCg.style.width = "100%", aCg.style.backgroundColor = aC.aF,
		function() {
			for (var j = 0; j < aCd.length; j++) aCd[j].button.style.position = "absolute", aCd[j].button.style.fontSize = "1.2em"
		}();
	for (var j = 0; j < aCd.length; j++) aCh.appendChild(aCd[j].button);
	aCf.appendChild(function() {
		var aCk = document.createElement("h1");
		return aCk.textContent = title, aCk.style.margin = "auto", aCk.style.fontSize = "2.3em", aCk
	}()), !1 !== aCe && (a1d.appendChild(aCg), a1d.appendChild(aCf), a1d.appendChild(aCh))
}

function ep() {
	a7E = 0, aCn = 2048, a7F = new Uint32Array(4 * aCn), aCo = 0, aCp = new Uint32Array(aCn), (a1P = new Int32Array(4))[0] = -4 * b.o, a1P[1] = 4, a1P[2] = -a1P[0], a1P[3] = -a1P[1], aCq = new Uint8Array(b.o * b.p)
}

function a51(player) {
	a7G = player, aCO = !1, aCr(), aCs();
	for (var j = eq.a4Y(a7G) - 1; 0 <= j; j--) 0 === eq.a4a(a7G, j) && (aCP = j, aCt());
	aCO && aCu()
}

function aCu() {
	a7H(), a7I()
}

function aCt() {
	a7M = eq.a4Z(a7G, aCP), aCQ = eq.nI(a7G, aCP), aCv(), (0 !== a7E && (aCw(), aCx()) ? aCJ : aCN)()
}

function aCx() {
	return (aCb = a4(aCQ, a7E)) > ay.db
}

function aCw() {
	for (var j = a7E - 1; 0 <= j; j--) aCq[a4(a7F[j], 4)] = 0
}

function aCN() {
	var c3;
	1 === eq.a4Y(a7G) && en.n7(a7G), a7G !== ay.az ? (bV.bY[a7G] += aCQ, eL.a6w(a7G)) : (c3 = bV.bY[a7G], bV.bY[a7G] += aCQ, eL.a6w(a7G), eG.g8[13] -= bV.bY[a7G] - c3), eq.a1H(a7G, aCP)
}

function aCr() {
	var j, s = bV.x9[a7G].length;
	for (aCo = 0, j = (aCn < s ? aCn : s) - 1; 0 <= j; j--) aCp[aCo++] = bV.x9[a7G][j]
}

function aCs() {
	for (var j = bV.x9[a7G].length - 1; 0 <= j; j--) eN.jU(bV.x9[a7G][j]) && eN.oI(bV.x9[a7G][j], a7G);
	bV.x9[a7G] = []
}

function aCv() {
	a7E = 0, (a7M === ay.cU ? aCy : aCz)()
}

function aCz() {
	for (var i0, d2, j, d0 = 3; 0 <= d0; d0--)
		for (j = aCo - 1; 0 <= j; j--) d2 = a4(i0 = aCp[j] + a1P[d0], 4), 0 === aCq[d2] && eN.o1(i0) && eN.iC(i0) === a7M && (aCq[d2] = 1, a7F[a7E++] = i0)
}

function aCy() {
	for (var i0, d2, j, d0 = 3; 0 <= d0; d0--)
		for (j = aCo - 1; 0 <= j; j--) d2 = a4(i0 = aCp[j] + a1P[d0], 4), 0 === aCq[d2] && eN.iB(i0) && (aCq[d2] = 1, a7F[a7E++] = i0)
}

function pk() {
	function aD1(tb) {
		var aD9 = 4 + .03 * (1 + 1.5 * bw.bx.by()) * ad.ae / ff;
		return cY.iO(tb, ca.cb[1]) < aD9
	}
	this.aD0 = function(player, tb) {
		return !!cY.iV(tb) && bZ.ba.bc !== bZ.ba.cI && bZ.ba.bb[player] !== bZ.ba.cJ && 0 !== bV.i5[player].length && !!bZ.jD.jE(player, tb) && !!aD1(tb)
	}, this.aD2 = function(player, a7l, tb) {
		return !!(cY.iV(tb) && this.a7m(player, a7l) && bZ.jD.tX(tb) && aD1(tb))
	}, this.a7m = function(player, id) {
		for (var ch, hB = player << 3, hC = hB + bZ.ba.bb[player], cV = bZ.ba.cV, cS = bZ.ba.cS, j = hB; j < hC; j++)
			if (id === cS[ch = cV[j]]) return ca.cb[3] = ch, !0;
		return !1
	}, this.bm = function(i1) {
		var aD3 = bZ.pp.aD3;
		return !!this.a7m(ay.az, aD3) && (bg.k4.bm(aD3, i1), !0)
	}, this.aD4 = function(fX, fY, aD5) {
		var j, hC, a6E, cV, dK, cO, aD6, dM, cQ, aD7, player = ay.az,
			s = bZ.ba.bb[player];
		if (0 === s) return !1;
		for (cV = bZ.ba.cV, cO = bZ.ba.cO, cQ = bZ.ba.cQ, hC = (player = player << 3) + s, dK = .4 * aL.ab.ac(.5) * ad.ae / ff, a6E = -1, j = player; j < hC; j++) aD7 = cV[j], aD6 = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(cQ[aD7]))), (dM = cY.iF(
			fX, fY, cO[aD7])) - aD6 < dK && (dK = dM, a6E = aD7);
		return !(a6E < 0 || (aD5 ? ca.mA[0] = bZ.ba.cS[a6E] : bZ.pp.aD3 = bZ.ba.cS[a6E], 0))
	}, this.aD8 = function(fX, fY) {
		var j, a6E, dK, cO, aD6, dM, cQ, s = bZ.ba.bc;
		if (s < 1) return -1;
		for (cO = bZ.ba.cO, cQ = bZ.ba.cQ, dK = 1e3, a6E = -1, j = 0; j < s; j++) aD6 = 16 * aL.ab.ac(.5) * (.625 + .125 * Math.sqrt(Math.sqrt(cQ[j]))), (dM = cY.iF(fX, fY, cO[j])) < dK && dM < aD6 && (dK = dM, a6E = j);
		return a6E
	}
}

function aDA() {
	var ii, ik;
	this.aB = function() {
		ii = 1, ik = 0
	}, this.bF = function() {
		0 < ii && (ik = 0 === ik ? c0.gM + 16 : ik, ii = (ii -= .001 * (c0.gM - ik)) < 0 ? 0 : ii, ik = c0.gM, c0.c1 = !0)
	}, this.c9 = function() {
		0 < ii && (cA.fillStyle = "rgba(0,0,0," + ii + ")", cA.fillRect(0, 0, ad.aZ, ad.aa))
	}
}

function aDD() {
	this.a9 = new aDE, this.ai = new aDF, this.aT = new ah, this.ba = new aDG, this.aB = function() {
		this.ai.aB(), (new ui).aB()
	}
}

function tV() {
	var aZ, aa, aDH;

	function aDS(dD, d0, aDQ, aDJ, kp) {
		d0 = aDR(dD, d0 + 1 + 2 * aDJ & 3);
		! function(dD, dE) {
			return 1 < Math.abs(dD % aZ - dE % aZ) || 1 < Math.abs(aDU(dD) - aDU(dE))
		}(dD, d0) && 0 === kp[d0 << 2] && (kp[d0 << 2] = aDQ)
	}

	function aDU(i0) {
		return Math.floor((i0 + .5) / aZ) % aa
	}

	function aDR(i0, d0) {
		return i0 + aDH[d0]
	}
	this.t7 = function(bv) {
		var j, kz, s, aDI, a3M = bJ;
		for (un.uo.up(un.uo.uq(bv)), b.o = aZ = a3M.bK(12), b.p = aa = a3M.bK(12), aDH = [-aZ, -1, aZ, 1], b.gm = document.createElement("canvas"), b.gm.width = b.o, b.gm.height = b.p, b.gn = b.gm.getContext("2d", {
				alpha: !1
			}), b.lG = b.gn.getImageData(0, 0, b.o, b.p), b.go = b.lG.data, aL.a1z.uD(b.go), s = a3M.bK(12), kz = a3M.bK(5), aDI = aDK(aZ * aa - 1), j = 0; j < s; j++) ! function(d8, i0, ta, aDJ) {
			var j, d0, a3M = bJ,
				kp = b.go,
				aDN = i0,
				a15 = i0,
				aDO = 0,
				aDP = 1 + ta,
				aDQ = 2 - ta;
			for (kp[i0 << 2] = aDP, j = 0; j < d8; j++) d0 = a3M.bK(2), i0 = aDR(i0, d0), kp[i0 << 2] === aDP ? aDO % 2 == 1 && aDS(a15, aDO + 2 * aDJ + 3, aDQ, aDJ, kp) : kp[i0 << 2] = aDP, aDS(i0, d0, aDQ, aDJ, kp), aDS(a15, d0, aDQ, aDJ,
				kp), a15 = i0, aDO = d0;
			aDR(i0, 0) === aDN ? (aDS(i0, 0, aDQ, aDJ, kp), aDS(aDN, 0, aDQ, aDJ, kp)) : aDR(i0, 1) === aDN && (aDS(i0, 0, aDQ, aDJ, kp), aDS(aDN, 2, aDQ, aDJ, kp));
			0 === d8 && (aDS(aDN, 0, aDQ, aDJ, kp), aDS(aDN, 2, aDQ, aDJ, kp))
		}(a3M.bK(kz), a3M.bK(aDI), 1 === a3M.bK(1), 1 === a3M.bK(1));
		var k, l, d7, aDV, aDW, aDX, kp = b.go,
			aDY = !0,
			a2a = b.e6.gd[b.c].a2a,
			a2b = b.e6.gd[b.c].a2b;
		for (l = 0; l < aa; l++)
			for (aDV = !0, aDW = aDY, k = aDX = 0; k < aZ; k++) d7 = 4 * l * aZ + 4 * k, aDX <= k && 0 < kp[d7] && (aDW = 2 === kp[d7], aDV) && (aDV = !1, aDW !== aDY) ? (aDY = aDW, aDX = k + 1, k = -1) : (aDW ? (kp[d7] = a2b[0], kp[1 + d7] =
				a2b[1], kp[2 + d7] = a2b[2]) : (kp[d7] = a2a[0], kp[1 + d7] = a2a[1], kp[2 + d7] = a2a[2]), kp[3 + d7] = 255);
		b.gn.putImageData(b.lG, 0, 0), b.zU = !0, b.lH.aB(), c0.c1 = !0
	}
}

function a12() {
	var aDZ = new Uint8Array(64);
	this.aB = function() {
		var j;
		for (aDZ[0] = 45, aDZ[37] = 95, j = 0; j < 10; j++) aDZ[j + 1] = 48 + j;
		for (j = 0; j < 26; j++) aDZ[j + 11] = 65 + j, aDZ[j + 38] = 97 + j
	}, this.aDa = function(aDb) {
		for (var a3M = bJ, tC = new Uint8Array(aDb), j = 0; j < aDb; j++) tC[j] = a3M.bK(6);
		return tC
	}, this.aDc = function(tC) {
		for (var s = tC.length, aDd = aDZ, g3 = [], j = 0; j < s; j++) g3.push(String.fromCharCode(aDd[tC[j]]));
		return g3.join("")
	}
}

function tR() {
	var gM = 2e4;
	this.show = function() {
		if (c0.gM < gM) return !1;
		gM = c0.gM + 135e4, 2 === e9 && bw.bx.p3(Math.floor(135e4))
	}
}

function pq() {
	var jb = 32,
		ja = new Array(2);

	function pD(aJ) {
		var k, l, i1, iL, iI, jW = jb,
			kq = aL.ab.pD(jW, jW),
			k7 = aL.ab.getContext(kq, !0),
			gh = aL.ab.getImageData(k7, jW, jW),
			kp = gh.data,
			d8 = (jW >> 1) - .5,
			aDe = Math.sqrt(d8 * d8);
		for (kp.fill(255), l = 0; l < jW; l++)
			for (k = 0; k < jW; k++) iI = k - d8, iL = l - d8, i1 = 4 * (l * jW + k), iI = 714 * (aDe - Math.sqrt(iI * iI + iL * iL)) / aDe, kp[2 + i1] = aJ, kp[3 + i1] = 255 < iI ? 0 : iI;
		return k7.putImageData(gh, 0, 0), kq
	}
	this.aD3 = -1, this.aB = function() {
		this.aD3 = -1, ja[0] || (ja[0] = pD(255), ja[1] = pD(0))
	}, this.a1x = function(k7, g4, k, l, jR, j) {
		aL.j2.uf(ay.az) && (k7.setTransform(g4 *= 4 / 3 * .625, 0, 0, g4, k - (jR *= 4 / 3), l - jR), k7.drawImage(ja[+(bZ.ba.cS[j] === this.aD3)], 0, 0))
	}
}

function a4u(a1b, zG) {
	var zC = document.createElement("div");
	this.aDf = zC, this.resize = function() {
		zC.style.padding = aL.ab.sh(af.a2s), zC.style.lineHeight = aL.ab.sh(aL.ab.sm(.035))
	}, a1b.style.overflowX = "hidden", a1b.style.overflowY = "auto", zC.innerHTML = zG, a1b.appendChild(zC)
}

function pr() {
	this.bF = function() {
		for (var aDg, cj, cT = bZ.ba.cT, cO = bZ.ba.cO, cN = bZ.ba.cN, j = bZ.ba.bc - 1; 0 <= j; j--) aDg = cO[j], 0 !== (cj = cT[j]) && aDg === cN[j] && (! function(j, aDi, hx) {
			var a0v, player = bZ.ba.cL[j] >> 3,
				hx = aDi + cY.hm[hx] << 2,
				j = bZ.ba.cQ[j];
			if (eN.iB(hx)) a0v = ay.cU;
			else {
				if ((a0v = eN.iC(hx)) === player) return aL.j2.oV(player, j);
				if (!jB(player, a0v)) return bg.a10.oT(player, a0v, j)
			}
			player === ay.az && (eG.g8[13] += j);
			bV.x9[player].push(aDi << 2), eq.a1I(player, j, a0v), en.nA(player, !0)
		}(j, cY.iY(aDg), cj - 1), bZ.cp.cq(j))
	}
}

function aDj() {
	this.ba = new a5X, this.a5f = 0;
	var aDk = new Array(15);

	function aDn() {
		for (var s = aDk.length, j = 0; j < s; j++) aDk[j] = null
	}
	this.aB = function() {
		for (var aDl, aDm = document.body.firstChild; aDm;) aDl = aDm.nextSibling, "DIV" !== aDm.tagName && "INPUT" !== aDm.tagName && "BUTTON" !== aDm.tagName || document.body.removeChild(aDm), aDm = aDl
	}, this.am = function(a3, yP, pC) {
		void 0 === yP && (yP = this.a5f), c0.c1 = !0, 0 === a3 && (0 === cB.cC() ? a3 = 5 : bw.bx.setState(13)), this.fb(), this.a5f = a3;
		var d8 = aDk[a3];
		if (!d8 || 4 === a3 || 7 === a3 || 8 === a3 || 9 === a3 || 10 === a3 || 11 === a3 || 13 === a3) {
			if (0 === a3) return void aDn();
			1 === a3 ? d8 = new aDo : 2 === a3 ? d8 = new a9Q : 3 === a3 ? d8 = new aC2 : 4 === a3 || 9 === a3 || 10 === a3 || 11 === a3 || 13 === a3 ? d8 = pC : 5 === a3 ? d8 = new a6M : 6 === a3 ? d8 = new yT : 7 === a3 ? d8 = new aDp : 8 ===
				a3 ? d8 = pC : 12 === a3 ? d8 = new zk : 14 === a3 && (d8 = new aDq), d8.yP = yP, aDk[a3] = d8
		}
		d8.show(pC)
	}, this.qs = function() {
		this.fQ() && this.am(aDk[this.a5f].yP)
	}, this.y8 = function(a3) {
		this.fQ() && (this.fb(), c0.c1 = !0, this.a5f = a3, aDk[a3].show())
	}, this.fb = function() {
		this.fQ() && aDk[this.a5f].fb()
	}, this.al = function() {
		this.fQ() && (aDk[this.a5f].fb(), aDn(), this.a5f = 0, bw.bx.setState(13))
	}, this.c9 = function() {
		var d8;
		this.fQ() && (d8 = aDk[this.a5f]).c9 && d8.c9()
	}, this.resize = function() {
		if (!this.fQ()) return !1;
		aDk[this.a5f].resize()
	}, this.fW = function(k, l) {
		var d8;
		this.fQ() && (d8 = aDk[this.a5f]).fW && d8.fW(k, l)
	}, this.fi = function(k, l) {
		var d8;
		this.fQ() && (d8 = aDk[this.a5f]).fi && d8.fi(k, l)
	}, this.xo = function() {
		var d8;
		this.fQ() && (d8 = aDk[this.a5f]).xo && d8.xo()
	}, this.qm = function(fX, fY, deltaY) {
		var d8;
		this.fQ() && (d8 = aDk[this.a5f]).qm && d8.qm(fX, fY, deltaY)
	}, this.qz = function(code) {
		var d8;
		return !!this.fQ() && ((d8 = aDk[this.a5f]).qz && d8.qz(code), !0)
	}, this.bF = function() {
		var d8;
		this.fQ() && (d8 = aDk[this.a5f]) && d8.bF && d8.bF()
	}, this.fQ = function() {
		return 0 < this.a5f
	}, this.yO = function() {
		return aDk[this.a5f]
	}, this.yU = function(a3) {
		return aDk[a3]
	}
}

function aDr() {
	this.ve = function(vU) {
		var w8 = bJ.bK(3),
			aBA = uV.a9E.bF(bJ.bK(16), bJ.bK(20));
		b0.hI.aB9(vU, aBA, w8), 0 < w8 || (0 === vU && 0 === aS.ai.data[105].value.length ? b0.hI.aBB(0) : b0.aDs.aDt(vU), 4 === b0.ba.a9c(vU).aDu() ? 6 === cB.cC() && b0.lL.aDv(vU) : 5 !== b0.ba.a9c(vU).aDu() || 8 !== cB.cC() && 10 !== cB
		.cC() || b0.b1.w1())
	}, this.vh = function() {
		var id = bJ.bK(6);
		0 === id ? (vp.aBh || b0.hI.aBB(1), 8 === ak.a5f && ak.yO().aDw()) : 21 === id ? 8 === ak.a5f && ak.yO().a8J(17) : 22 === id && (aS.aT.aU(106, aS.ai.data[110].value), aS.aT.aU(110, ""), 8 === ak.a5f) && ak.yO().a8J(15)
	}
}

function ph() {
	eO.a1Z(), cA.setTransform(ff, 0, 0, ff, 0, 0), cA.imageSmoothingEnabled = ff < 3, cA.drawImage(b.gm, ec.kJ(), ec.iu()), eX.pm.c9(), cA.drawImage(aDx, ec.kJ(), ec.iu()), eO.c9(), cA.imageSmoothingEnabled = !1, cA.setTransform(1, 0, 0, 1, 0, 0), bZ
		.pm.c9(), er.c9(), em.c9(), (ay.dk ? (eV.c9(), ee) : (aw.c9(), eb.c9(), ed.c9(), ee.c9(), ef.c9(), eh.c9(), ec.c9(), c7.c9(), eV.c9(), eg.c9(), ej.c9(), ei.c9(), ek.c9(), el.c9(), eY.c9(), ez)).c9(), ak.c9()
}

function a3a(iv, aZ, aa) {
	iv.clearRect(0, 0, aZ, aa), iv.fillStyle = aC.fr, iv.fillRect(0, 0, aZ, aa)
}

function a3c(iv, aZ, aa, a3e) {
	iv.fillStyle = aC.aD, iv.fillRect(0, 0, aZ, a3e), iv.fillRect(0, 0, a3e, aa), iv.fillRect(aZ - a3e, 0, a3e, aa), iv.fillRect(0, aa - a3e, aZ, a3e)
}

function z3(iv, k, l, jW, a3e, i0, aDy) {
	iv.fillStyle = aC.aD;
	var i0 = Math.floor(jW * i0),
		fF = (i0 += (i0 - a3e) % 2, Math.floor((i0 - a3e) / 2)),
		jW = Math.floor((jW - i0) / 2);
	iv.fillRect(k + jW, l + jW + fF, i0, a3e), aDy && iv.fillRect(k + jW + fF, l + jW, a3e, i0)
}

function aE0() {
	this.size = 501, this.fv = new Uint32Array(this.size), this.fw = new Uint32Array(this.size), this.g5 = new Uint16Array(this.size), this.fl = 0, this.aE1 = 1, this.aJ = 0, this.max = [0, 0, 0], this.g8 = 0, this.g7 = ["Avg. Attack Strength",
		"Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs",
		"Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses"
	], this.aB = function() {
		this.fl = 0, this.aE1 = 1, this.aJ = 0, this.aE2(), this.aE3()
	}, this.a7j = function(player, iQ) {
		player === ay.az && (this.g8[0] += iQ, this.g8[1]++, this.g8[12] += ca.ce[1], this.g8[13] += ca.ce[0])
	}, this.oW = function(player, oP) {
		donationsTracker.logDonation(player, oP, ca.ce[0]);
		player === ay.az && (aw.oW(ca.ce[0], ca.ce[1], oP), this.g8[12] += ca.ce[1], this.g8[16] += ca.ce[0]), oP === ay.az && (aw.a1K(ca.ce[0], player), this.g8[10] += ca.ce[0])
	}, this.bF = function() {
		0 < this.aJ-- || this.aE4()
	}, this.aE4 = function() {
		0 !== bV.bW[ay.az] && (this.fv[this.fl] = bV.bX[ay.az], this.fw[this.fl] = bV.bY[ay.az], this.g5[this.fl] = eL.tN(ay.az), this.aE5(this.fl), this.fl++, this.fl === this.size && this.aE6(), this.aJ = this.aE1 - 1, eY.fp())
	}, this.aE6 = function() {
		this.aE2(), this.aE5(0), this.fl = 1 + a4(this.size, 2);
		for (var j = 1; j < this.fl; j++) this.fv[j] = this.fv[2 * j], this.fw[j] = this.fw[2 * j], this.g5[j] = this.g5[2 * j], this.aE5(j);
		this.aE1 *= 2
	}, this.aE2 = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.aE3 = function() {
		this.g8 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.aE5 = function(j) {
		this.max[0] = this.fv[j] > this.max[0] ? this.fv[j] : this.max[0], this.max[1] = this.fw[j] > this.max[1] ? this.fw[j] : this.max[1], this.max[2] = this.g5[j] > this.max[2] ? this.g5[j] : this.max[2]
	}
}

function aE7() {
	var aE8 = [0, 0],
		aE9 = [0, 0];

	function aEB(a3) {
		return 3 !== aE8[a3] && 1 !== aE9[a3] && (aE9[a3] = 1, aE8[a3]++, aS.aT.aU(119, (aE8[0] << 2) + aE8[1]), 1)
	}
	this.aB = function() {
		var y = aS.ai.data[119].value;
		aE8[0] = y >> 2, aE8[1] = 3 & y
	}, this.aEA = function() {
		aEB(0) && aw.a8s(aP.hf(130))
	}, this.aEC = function() {
		aEB(1) && aw.a8s(aP.hf(131))
	}
}

function qL() {
	this.bF = function() {
		a6d.bF(), y4.bF(), ad.bF(), b0.ba.bF(), vc.a1Y(), c0.c1 && (c0.c1 = !1, cB.c9())
	}
}

function ha() {
	this.hi = [], this.aQ = ["Zaakceptuj", "Usunąłeś {0}.", "Zostałeś usunięty przez {0}.", "Gratulacje! Wygrałeś grę.", "{0} wygrał grę.", "{0} złamał pakt o nieagresji.", "{0} atakuje Cię!", "Wybierz swoją pozycję startową!", "Poddałeś się!",
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

function tT() {
	this.aB = function() {
		0 === aS.ai.data[181].value && (aS.ai.aj(180, Math.floor(Math.random() * d4.pow(30))), aS.ai.aj(181, Math.floor((new Date).getTime() / 36e5)))
	}
}

function pn() {
	var aED, jb = 8,
		aEE = new Array(2);

	function aEF(a3) {
		var jW = jb + 4,
			kq = aL.ab.pD(jW, jW),
			k7 = aL.ab.getContext(kq, !0),
			gh = aL.ab.getImageData(k7, jW, jW),
			kp = gh.data;
		return aEG(kp, jW + 1, a3), aEG(kp, jW + 2, a3), aEG(kp, 2 * jW + 1, a3), aEG(kp, 2 * jW - 3, a3), aEG(kp, 2 * jW - 2, a3), aEG(kp, 3 * jW - 2, a3), aEG(kp, jW * (jW - 3) + 1, a3), aEG(kp, jW * (jW - 2) + 1, a3), aEG(kp, jW * (jW - 2) + 2,
			a3), aEG(kp, jW * (jW - 2) - 2, a3), aEG(kp, jW * (jW - 1) - 3, a3), aEG(kp, jW * (jW - 1) - 2, a3), k7.putImageData(gh, 0, 0), kq
	}

	function aEG(kp, i1, a3) {
		i1 *= 4;
		kp[i1] = 255, kp[1 + i1] = 255, kp[2 + i1] = a3, kp[3 + i1] = 255
	}

	function pD(player) {
		var kq = aL.ab.pD(jb, jb);
		return function(k7, player) {
			var k, l, iI, i1, aEI, ky, jW = jb,
				gh = aL.ab.getImageData(k7, jW, jW),
				kp = gh.data,
				d8 = (jW >> 1) - .5,
				aEK = eN.nt(player),
				aEL = aL.a1z.uF(aEK, .5);
			aL.a1z.uG(aEK, aEL, 300) || aL.a1z.uI(aEK, 100);
			for (l = 0; l < jW; l++)
				for (k = 0; k < jW; k++) ky = (jW - 1.5) * (jW - 1.5) / 4, aEI = (iI = (iI = k - d8) * iI + (iI = l - d8) * iI) <= (jW - 4.5) * (jW - 4.5) / 4 ? aEL : aEK, kp[i1 = 4 * (l * jW + k)] = aEI[0], kp[1 + i1] = aEI[1], kp[2 + i1] = aEI[
					2], kp[3 + i1] = ky < iI ? 0 : 255;
			k7.putImageData(gh, 0, 0)
		}(aL.ab.getContext(kq, !0), player), kq
	}
	this.aB = function() {
		aED = new Array(ay.cU), aEE[0] = aEF(255), aEE[1] = aEF(0)
	}, this.c9 = function() {
		var j, player, aEM, co, aEN, m, aER, aET, aEU, cO = bZ.ba.cO,
			cL = bZ.ba.cL,
			cQ = bZ.ba.cQ,
			aEV = aED,
			aEW = ay.az,
			aEX = -1,
			s = bZ.ba.bc,
			aEY = ad.aZ,
			aEZ = ad.aa,
			d3 = b.o << 4,
			aEb = ff,
			g4 = aEb / jb,
			dH = fe / aEb,
			dI = fh / aEb,
			iI = (aEY + fe) / aEb - dH,
			iL = (aEZ + fh) / aEb - dI,
			k7 = cA;
		for (bZ.pj.a7m(ay.az, bZ.pp.aD3) && (aEX = ca.cb[3]), k7.fillStyle = aC.aD, aL.ab.textAlign(k7, 1), aL.ab.textBaseline(k7, 1), j = 0; j < s; j++) player = cL[j] >> 3, co = cQ[j], aEM = .625 + .125 * Math.sqrt(Math.sqrt(co)), aEN = (m =
				cO[j]) % d3 / 16 - aEM, m = aEZ * (Math.floor(m / d3) / 16 - aEM - dI) / iL, aER = -2 * (aEU = aEb * aEM) * (1 + (aET = +(player === aEW)) / 8), aET = aET * aEU / 4, (aEU = aEY * (aEN - dH) / iI) < aER || m < aER || aEY + aET <
			aEU || aEZ + aET < m || (aEN = aEM * aEb, k7.imageSmoothingEnabled = (aER = 2 * aEM * g4) < 3, void 0 === (aET = aEV[player]) && (aEV[player] = aET = pD(player)), player === aEW && (k7.setTransform(aER, 0, 0, aER, aEU - 2 * aER, m -
				2 * aER), k7.drawImage(aEE[+(j === aEX)], 0, 0)), k7.setTransform(aER, 0, 0, aER, aEU, m), k7.drawImage(aET, 0, 0), (aEM = Math.floor(function(co) {
				if (co < 1e3) return .42;
				if (co < 1e4) return .34;
				if (co < 1e6) return .26;
				if (co < 1e8) return .19;
				return .15
			}(co) * aEN)) < 6) || (k7.setTransform(1, 0, 0, 1, 0, 0), k7.font = aL.ab.bz(1, aEM), k7.fillText(aL.fm.fn(co), aEU + aEN, m + aEN + .1 * aEM));
		k7.imageSmoothingEnabled = !1, k7.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aEd() {
	var aEe, aEf, wg, qW, qO, aEg, aEh, aEi, aEj, li, fontSize, ik, aEk, a9e, aEl = 0;

	function aEn() {
		return b0.ba.a9W[(aEk + aEl) % b0.ba.a9V]
	}

	function aEm() {
		aEk++, ik = c0.gM, b0.ba.w0(aEn(), 4) && (a9e = !0, b0.lL.aDv(aEn()))
	}

	function aEp() {
		0 === aEk ? a9p.a9q(3249) : (aEk === b0.ba.a9V - 1 && (aEk = -1), aEm())
	}

	function aEv(l, aBX, l9) {
		var dH = Math.floor((ad.aZ - qW) / 2) + aEh,
			gQ = dH + Math.floor(l9 * (qW - 2 * aEh));
		cA.lineWidth = aBX, cA.beginPath(), cA.moveTo(dH, l), cA.lineTo(gQ, l), cA.lineTo(Math.floor(dH - aEh + l9 * qW), l + wg), cA.lineTo(dH - aEh, l + wg), cA.closePath()
	}
	this.aB = function() {
		cB.setState(6), aEe = 0, aEf = 1, aEi = "rgba(0,220,120,0.4)", aEj = "rgba(0,0,0,0.8)", this.resize(), c0.c1 = !0, aEk = 0, a9e = !1, aEm()
	}, this.resize = function() {
		qW = Math.floor((bw.bx.by() ? .5 : .25) * ad.ae), qO = qW + 12, wg = Math.floor(.125 * qW), aEh = 3 * wg, aEg = Math.floor(.225 * qW), fontSize = Math.floor(.3 * wg), li = aL.ab.bz(0, fontSize)
	}, this.a5c = function(jy) {
		aEl = jy
	}, this.aEo = function(vU) {
		vU === aEn() && (a9e = !1, aEp())
	}, this.aEq = function(vU) {
		6 !== cB.cC() || a9e || (ik = c0.gM, a9e = !0)
	}, this.fW = function(k, l) {
		var dH = Math.floor((ad.aZ - qO) / 2),
			dI = Math.floor(.5 * (ad.aa - af.gap - wg - aEg)) + wg + af.gap;
		return dH < k && k < dH + qO && dI < l && l < dI + aEg && (this.y5(), lJ.fi(k, l, !1), !0)
	}, this.y5 = function() {
		b0.ba.kk(3260), ak.ba.a5Z()
	}, this.bF = function() {
		6 === cB.cC() && (a9e ? c0.gM > ik + 12e3 && a9p.a9q(3250) : c0.gM > ik + 12e3 && aEp(), 100 < (aEe += .07 * aEf * (aEe < 16 ? 5 + aEe : 84 < aEe ? 105 - aEe : 17)) ? (aEe = 100, aEf = -1) : aEe < 0 && (aEe = 0, aEf = 1), aEi =
			"rgba(0," + Math.floor(190 - 1.9 * aEe) + "," + Math.floor(120 - 1.2 * aEe) + "," + (.4 + .004 * aEe) + ")", aEj = "rgba(0," + Math.floor(1.9 * aEe) + "," + Math.floor(1.2 * aEe) + "," + (.8 - .004 * aEe) + ")", c0.c1 = !0)
	}, this.c9 = function() {
		var k = Math.floor((ad.aZ - qO) / 2),
			l = Math.floor(.5 * (ad.aa - af.gap - wg - aEg));
		! function(title, l, aBX, l9) {
			cA.fillStyle = aEj, aEv(l, aBX, 1), cA.fill(), cA.fillStyle = aEi, aEv(l, aBX, l9), cA.fill(), cA.strokeStyle = aC.aD, aEv(l, aBX, 1), cA.stroke(),
				function(aEx, l) {
					aL.ab.textAlign(cA, 1), aL.ab.textBaseline(cA, 1), cA.font = li, cA.fillStyle = aC.aD, cA.fillText(aEx, Math.floor(.5 * ad.aZ), Math.floor(l + .58 * wg))
				}(title, l)
		}("Loading", l, 3, aEe / 100),
		function(k, l, aZ, aa, aQ) {
			cA.fillStyle = aC.lQ, cA.fillRect(k, l, aZ, aa), cA.lineWidth = 3, cA.strokeStyle = aC.aD, cA.strokeRect(k, l, aZ, aa);
			var s = Math.floor(.3 * aa);
			aL.ab.textAlign(cA, 1), aL.ab.textBaseline(cA, 1), cA.font = aL.ab.bz(0, s), cA.fillStyle = aC.aD, cA.fillText(aQ, Math.floor(k + aZ / 2), Math.floor(l + aa / 2 + .1 * s))
		}(k, l + wg + af.gap, qO, aEg, "Back")
	}
}

function aEy() {
	var oy = 0;
	this.aB = function() {
		lJ.aB(), oy = 0
	}, this.setState = function(aEz) {
		oy = aEz
	}, this.cC = function() {
		return oy
	}, this.w3 = function() {
		this.setState(8), cD.kj(), ak.al()
	}, this.qz = function(aR) {
		if (!b.zU) return !1;
		if (!(c0.gM < 400)) {
			if ("Enter" === aR.key || "Escape" === aR.key) {
				if (this.aF0()) return !0;
				if ("Enter" === aR.key) {
					if (0 === oy) return !0;
					if (7 === oy) return !0
				}
			}
			return !1
		}
	}, this.aF1 = function() {
		aF2.resize()
	}, this.aF0 = function() {
		return !!aF2.fb()
	}, this.fW = function(k, l) {
		!b.zU || aF2.fW(k, l) || 6 === oy && y4.fW(k, l) || 2 === oy && eA.fW(k, l) || (vp.fW(k, l), 0 !== oy && 7 === oy && cD.fW(k, l))
	}, this.fi = function(k, l) {
		if (!vp.aBi) {
			if (2 === oy && eA.fi(k, l)) return void vp.gk();
			if (lJ.fi(k, l, !0)) return
		}
		vp.fi(k, l)
	}, this.click = function(k, l) {
		vp.fj(), a6e.fW(k, l, !1)
	}, this.qm = function(k, l, deltaY) {}, this.aF3 = function() {
		lJ.aBo(), 0 !== oy && 7 === oy && cD.resize(), c0.c1 = !0
	}, this.c9 = function() {
		8 !== oy && 10 !== oy && (cA.imageSmoothingEnabled = !0, this.a1Z(), 0 !== oy && (vp.c9(), a6d.c9(), this.a6c(), a6e.c9()), 0 !== oy && (2 === oy ? eA.c9() : 6 === oy ? y4.c9() : 7 === oy && cD.c9()), aF2.c9(), ak.c9())
	}, this.a1Z = function() {
		var aF5, aF4;
		if (makeMainMenuTransparent) cA.clearRect(0, 0, ad.aZ, ad.aa);
		else b.zU ? (aF4 = ad.aZ / b.o, aF5 = ad.aa / b.p, cA.setTransform(aF4 = aF5 < aF4 ? aF4 : aF5, 0, 0, aF4, Math.floor((ad.aZ - aF4 * b.o) / 2), Math.floor((ad.aa - aF4 * b.p) / 2)), cA.drawImage(b.gm, 0, 0), cA.setTransform(1, 0, 0, 1, 0,
			0), cA.fillStyle = aC.lQ) : cA.fillStyle = aC.cF, cA.fillRect(0, 0, ad.aZ, ad.aa)
	}, this.a6c = function() {
		var l = Math.floor(.3 * ad.aa),
			ij = iw.zb("territorial.io"),
			fU = (fU = 1.75 * ad.aa / ij.width) * ij.width < .98 * ad.aZ ? .98 * ad.aZ / ij.width : fU,
			k = (cA.globalAlpha = .15, cA.imageSmoothingEnabled = !1, Math.floor(.5 * (ad.aZ - fU * ij.width))),
			k = Math.floor(k / fU),
			l = Math.floor(l - .5 * ij.height * fU),
			l = Math.floor(l / fU);
		cA.setTransform(fU, 0, 0, fU, k, l), cA.drawImage(ij, k, l), cA.setTransform(1, 0, 0, 1, 0, 0), cA.globalAlpha = 1, cA.imageSmoothingEnabled = !0
	}
}

function aF6() {
	var aJ, ro = !1,
		aF7 = !1,
		aF8 = -1e4,
		aF9 = -1,
		aFA = 0;

	function resize(aFG) {
		aJ = 0, iw.zZ() && (aFD(aFG) || ro) && (ro = !1, af.resize(), lJ.aB(), a6e.aB(), y4.resize(), vp.resize(), a6d.resize(), ak.resize(), 1 <= ay.di ? (eb.resize(!1), eg.resize(), eh.resize(), ec.resize(), ed.resize(), aw.resize(), ei.resize(),
			ee.resize(), ef.resize(), ej.resize(), c7.resize(), ek.resize(), eY.resize(), er.resize(), el.resize(), eV.resize(), ec.yw()) : (2 === cB.cC() && eA.resize(), cB.aF1(), cB.aF3()), c0.c1 = !0)
	}

	function aFC(y) {
		return y && 128 < y ? Math.floor(y) : 128
	}

	function aFD(aFG) {
		var aZ, aa, aFI, fE, fI;
		if (!(0 < ad.aFB)) return fE = aFC(document.documentElement.clientWidth), fI = aFC(window.visualViewport && 2 !== bw.id ? window.visualViewport.height : document.documentElement.clientHeight), aZ = fE, aa = fI, aFI = 0 !== bw.id || aZ < aa ?
			700 : 1200, aFI = Math.min(aFI / ((aZ + aa) / 2), 1), aFI = 0 === aS.ai.data[1].value ? 2 * aFI / 3 : Math.min(aFI + (aS.ai.data[1].value - 1) * (1 - aFI) / 2, 1), ad.pW = (window.devicePixelRatio || 1) * aFI, hoveringTooltip
			.canvasPixelScale = ad.pW, aFG && !aF7 ? (aF7 = !0, document.body.removeChild(xP)) : aF7 && (aF7 = !1, document.body.appendChild(xP)), aZ = Math.floor(.5 + fE * ad.pW), aa = Math.floor(.5 + fI * ad.pW), aZ !== ad.aZ || aa !== ad.aa ?
			(ad.aZ = aZ, ad.aa = aa, ad.min = im(aZ, aa), ad.max = io(aZ, aa), ad.ae = a4(aZ + aa, 2), ad.aCm = aZ / aa, xP.width = aZ, xP.height = aa, xP.style.width = fE + "px", xP.style.height = fI + "px", aF9 = c0.gM + 1e3, 1) : void 0
	}
	this.aZ = 0, this.aa = 0, this.min = 0, this.max = 0, this.ae = 0, this.aCm = 1, this.pW = 1, this.aFB = 0, this.a3X = function() {
		this.aZ = aFC(document.documentElement.clientWidth) + 2, this.aa = aFC(document.documentElement.clientHeight) + 2
	}, this.aB = function() {
		aJ = 1, xP = document.getElementById("canvasA"), (cA = xP.getContext("2d", {
			alpha: makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aFD(0)
	}, this.bF = function() {
		aFE.bF(), 50 <= ++aJ && resize(0), -1 === aF9 || c0.gM < aF9 || (aF9 = -1, 2e3 * ++aFA >= c0.gM + 8e3 ? console.log("error 3748") : bw.bx.setState(15))
	}, this.an = function(hy) {
		ro = !0, resize(hy)
	}, this.y3 = function() {
		aF8 + 1e3 > c0.gM || (aF8 = c0.gM, resize(0))
	}
}

function aFK() {
	this.h5 = new yc, this.kp = new jV
}

function aFL() {
	this.ba = new a9U, this.a9n = new vP, this.b1 = new aFM, this.lL = new aFN, this.hI = new aB7, this.aDs = new aFO, this.bD = new oY, this.aFP = new h8, this.a1T = new vS, this.va = new aFQ, this.vd = new aDr, this.vf = new aFR, this.vj = new a8E,
		this.aB = function() {
			this.ba.aB()
		}
}

function a13() {
	this.hQ = function(bv) {
		for (var s = bv.length, aZ = hD, j = 0; j < s; j++) aZ.hE(16, bv.charCodeAt(j))
	}
}

function qy(id, pC) {
	var qp, a4t;

	function aFU() {
		a4t.aDf.innerHTML += "<br>New Connection..."
	}
	this.aFS = !0, this.show = function() {
		qp.show(), this.resize(), 15 === id ? b0.ba.w0(0, id) ? this.aFT() : aFU() : 16 === id ? b0.ba.w0(0, id) ? b0.hI.aBB(2) : aFU() : 17 === id ? b0.ba.w0(0, id) ? b0.hI.aBB(3) : aFU() : 18 === id ? (b0.ba.close(0, 3253), b0.ba.w0(0, id),
			aFU()) : 20 === id ? b0.ba.w0(0, id) ? b0.aDs.aFV(pC) : aFU() : 21 === id ? b0.ba.w0(0, id) ? b0.aFP.h9(pC.hA, pC.hB, pC.hC) : aFU() : 22 === id ? b0.ba.w0(0, id) ? b0.aFP.hF(pC.hA, pC.hG, pC.hH) : aFU() : 23 === id ? b0.ba.w0(0,
			id) ? b0.aFP.hK(pC.hL, pC.hM) : aFU() : 24 === id && (b0.ba.w0(0, id) ? b0.aFP.hR(pC.hL, pC.hB, pC.hC) : aFU())
	}, this.aDw = function() {
		15 === id ? this.aFT() : 16 === id ? b0.hI.aBB(2) : 17 === id ? b0.hI.aBB(3) : 18 === id ? ak.am(8, this.yP, new qy(16)) : 20 === id ? b0.aDs.aFV(pC) : 21 === id ? b0.aFP.h9(pC.hA, pC.hB, pC.hC) : 22 === id ? b0.aFP.hF(pC.hA, pC.hG, pC
			.hH) : 23 === id ? b0.aFP.hK(pC.hL, pC.hM) : 24 === id && b0.aFP.hR(pC.hL, pC.hB, pC.hC)
	}, this.a8J = function(code, ro, data) {
		!ro && code !== id || (15 === code || 16 === code ? ak.am(7, this.yP) : 17 === code ? (b0.ba.close(0, 3252), aS.ba.aFW(0), 0 < aS.ai.data[117].hh.length ? (ro = aS.ba.aFX(0), aS.aT.aU(105, ro.aFY), aS.aT.aU(106, ro.password), ak.am(8,
			this.yP, new qy(16))) : (aS.aT.aU(105, ""), ak.ba.zr())) : 20 === code ? ak.am(7, this.yP) : 21 === code ? ak.am(10, 0, new qo(data)) : 23 === code && ak.am(13, 0, new a5h({
			data: data,
			hL: pC.hL
		})))
	}, this.aFT = function() {
		hD.eR(48), hD.hE(24, Math.floor(d4.pow(24) * Math.random())), hD.hE(24, Math.floor(d4.pow(24) * Math.random())), bJ.aB(hD.bG), aS.aT.aU(110, hO.uo.aDc(hO.uo.aDa(8))), b0.aDs.aFZ()
	}, this.fb = function() {
		qp.fb()
	}, this.resize = function() {
		qp.resize(), a4t.resize()
	}, this.qz = function(aJ) {
		2 === aJ && qp.r0[0].a9()
	}, qp = new qv("⏳ Connecting...", [new a5("❌ " + aP.aQ[92], function() {
		ak.ba.zr()
	})]), a4t = new a4u(qp.qx, "Find Server...")
}

function aFa() {
	var aFb, g3;
	this.aB = function() {
		for (var j = (g3 = new Uint16Array(101)).length - 1; 0 <= j; j--) g3[j] = a4(32768 * j, 100);
		this.eD(0)
	}, this.value = function(i0) {
		return g3[i0]
	}, this.a2f = function() {
		return a4(aFb - 1, 2)
	}, this.eD = function(a2e) {
		aFb = 2 * a2e % 32768 + 1
	}, this.random = function() {
		return aFb = 167 * aFb % 32768
	}, this.h1 = function(a54) {
		return a4(a54 * this.random(), 32768)
	}, this.a2L = function(i0) {
		return 0 !== i0 && this.random() < this.value(i0)
	}
}

function qJ() {
	var aFc, aFd, aFe, a1W, aFf, a3 = 0,
		gM = c0.gM;

	function aFj() {
		! function() {
			if (!ay.dl) return;
			if (ay.bB) return;
			return aFf % 7 != 0 ? aFf++ : a1W === ay.dt ? (aFm(), eh.xA(a1W), ay.dr.bF()) : (aFm(), aFf++, a1W++, er.ri(), er.f2(!0)), 1
		}() && (aFm(), pd())
	}

	function aFk() {
		a3 = 0, (ay.dl ? (c0.c1 = eh.xA(a1W - (aFf % 7 == 0 ? 0 : 1) + aFf % 7 / 7) || c0.c1, pb) : ei.fA || !ee.fB ? pb : (c0.c1 = !0, pf))()
	}

	function aFm() {
		var j, s, aFn = eU.uz.vJ,
			bH = eU.uz.vK,
			be = eU.uz.vL,
			bf = eU.uz.vM,
			aFo = eU.uz.vN,
			aFp = eU.uz.vO;
		if (aFc >= aFp.length) aw.a8z("Replay file smaller than expected."), mY.mZ.ma(-1);
		else if (aFp = aFp[aFc], aFo[aFc]) {
			for (s = aFd + aFp, j = aFd; j < s; j++) bg.eF.bL(aFn[j], bH[j], be[j], bf[j]);
			aFd += aFp, aFc++
		} else ++aFe >= aFp && (aFc++, aFe = 0)
	}
	this.pa = 0, this.aB = function() {
		aFf = a1W = aFe = aFd = aFc = 0
	}, this.bF = function() {
		var dQ;
		ad.bF(), ee.aFg() < 1.7 ? 0 === a3 ? c0.gM >= gM && (dQ = c0.gN / ee.aFg(), gM += dQ * Math.floor(1 + (c0.gM - gM) / dQ), 2 === ay.di || ei.fA || !ee.fB ? pc() : (aFj(), eK.pe()), a3++) : aFk() : function() {
			var dQ;
			if (c0.gM >= gM)
				if (2 === ay.di || ei.fA || !ee.fB) pc(), gM = c0.gM;
				else {
					for (dQ = c0.gN / ee.aFg(), 16 < (c0.gM - gM) / dQ && (gM = c0.gM - 16 * dQ); c0.gM >= gM && 2 !== ay.di;) gM += dQ, aFj();
					eK.pe()
				} aFk()
		}(), pg(), c0.c1 && (c0.c1 = !1, ph())
	}, this.uB = function() {
		aFc !== eU.uz.vO.length && aFc + 1 !== eU.uz.vO.length && aw.a8z("Replay file larger than expected.")
	}
}

function aFq() {
	this.id = 0, this.ot = 0, this.oh = null, this.gj = null, this.os = null, this.oi = null, this.bx = new oe, this.aB = function() {
		var self, ot;
		self = this, "undefined" == typeof Android || (ot = Android.getVersion()) < 12 || (self.ot = ot, self.id = 1, self.gj = Android),
			function(self) {
				var ot;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.os = mwIOSdataX, self.oi = window.webkit.messageHandlers.iosCommandA, ot = self
					.os.version, self.ot = ot ? Number(ot) : 0)
			}(this),
			function(self) {
				var oh;
				if (0 === self.id) {
					try {
						if (!(oh = window.localStorage)) return;
						oh.setItem("tls7", "1"), oh.removeItem("tls7")
					} catch (error) {
						return
					}
					self.oh = oh
				}
			}(this)
	}
}

function aDF() {
	function aFu(j, title, type, hh, aq, ot) {
		aS.ai.data.push({
			a3: j,
			title: title,
			type: type || 0,
			hh: hh,
			value: aq || 0,
			aq: aq || 0,
			ot: ot || 0
		})
	}

	function aFv(j, title, type, hh, aq, ot) {
		aS.ai.data.push({
			a3: j,
			title: title,
			type: type,
			hh: hh,
			value: aq || "",
			aq: aq || "",
			ot: ot || 0
		})
	}

	function aFw(bI) {
		for (var j = aS.ai.data.length; j < bI; j++) aS.ai.data.push(null)
	}
	this.data = [], this.aB = function() {
		aFu(0, "", 1, ["English", "Русский", "Türkçe", "Española", "Deutsch", "Polski"], 0, 5), aFu(1, "", 1, null, 1), aFu(2, "", 0, [0, 1]), aFv(3, "Username", 2), aFu(4, "Font5", 1, ["Default", "Custom"]), aFv(5, "", 2, null, "Trebuchet MS",
				1), aFu(6, "", 0, [0, 1]), aFu(7, "", 0, [0, 1], 0), aFu(8, "", 0, [0, 1]), aFu(9, "", 1, null, 1), aFu(10, "", 1, null), aFu(11, "", 1, null, 1), aFw(100), aFv(100, "Username", 2), aFv(101, "Password", 2), aFv(102, "Emojis", 2),
			aFv(103, "Colors", 2), aFv(104, "Clan", 2), aFv(105, "AccountName", 2), aFv(106, "Password", 2), aFu(107), aFu(108), aFu(109), aFv(110, null, 2), aFu(111), aFu(112), aFu(113), aFv(114, null, 2), aFu(115), aFv(116, null, 2), aFu(117,
				null, 1), aFv(118, null, 2, null, "", 2), aFu(119, null, 1, null, 0, 1), aFv(120, null, 2), aFu(121, "CountryColor", 1, null, ~~(262144 * Math.random())), aFv(122, "Username", 2, null, "Player " + Math.floor(1e3 * Math.random())),
			aFu(123), aFv(124), aFu(125, null, 1, ["M1", "M5", "H1", "H4", "D1", "W1", "MN"]), aFv(126, null, 2), aFu(127, "Y-Axis Compression", 0, [0, 1], 1), aFu(128), aFu(129), aFu(130), aFu(131), aFu(132), aFv(133, null, 2), aFu(134, null, 0,
				null, 5), aFv(135, null, 2), aFv(136, null, 2), aFu(137), aFu(138), aFu(139), aFu(140), aFu(141), aFu(142), aFu(143), aFu(144), aFw(180), aFu(180, "R0", 0), aFu(181, "R1", 0)
	}, this.translate = function() {
		this.data[0].title = "🌐 " + aP.aQ[101], this.data[1].title = aP.aQ[102], this.data[2].title = aP.aQ[103], this.data[5].title = aP.aQ[104], this.data[6].title = aP.aQ[105], this.data[7].title = aP.aQ[106], this.data[8].title = aP.aQ[107],
			this.data[9].title = aP.aQ[108], this.data[10].title = aP.aQ[109], this.data[11].title = aP.aQ[110], this.data[1].hh = [aP.aQ[111], aP.aQ[112], aP.aQ[113], aP.aQ[114]], this.data[9].hh = [aP.aQ[112], aP.aQ[115], aP.aQ[116]], this
			.data[10].hh = [aP.aQ[109] + " 1", aP.aQ[117] + " 1", aP.aQ[109] + " 2", aP.aQ[117] + " 2"], this.data[11].hh = [aP.aQ[118], aP.aQ[119], aP.aQ[120]]
	}, this.aU = function(a3, value) {
		this.data[a3].value = value
	}, this.aj = function(a3, value) {
		this.aU(a3, value), aS.a9.save(a3, String(value)), aS.a9.save(a3, String(this.data[a3].ot), !0)
	}, this.aFx = function() {
		for (var j = 0; j < this.data.length; j++) this.data[j] && (aS.a9.save(j, String(this.data[j].value)), aS.a9.save(j, String(this.data[j].ot), !0))
	}, this.ow = function(a3) {
		return Number(this.data[a3].value)
	}, this.on = function(a3) {
		return String(this.data[a3].value)
	}
}

function aFy() {
	this.qU = function() {
		return 2 === bw.id ? 4 : bw.bx.by() ? 2 : 1
	}
}

function a7i(player, a7h) {
	return ca.mD[1] = bV.x9[player].length, ca.mD[0] === ay.cU ? aFz(player) : aG0(player, ca.mD[0]), (0 !== ca.mD[1] || 0 !== bV.x9[player].length) && !(!a7h && ca.mD[1] === bV.x9[player].length || (ca.mD[0] === ay.cU ? bV.z9[player]++ : bV.zA[
		player]++, 0))
}

function a7k(player) {
	ay.dT && (oS[player] = 1), aG1(ca.mD[1], player), eq.a1I(player, ca.ce[0], ca.mD[0]), en.nA(player, !1)
}

function aG2(player, a0v, s, co) {
	var aG3 = a4(3 * bV.bY[player], 256);
	co -= co >= a4(bV.bY[player], 2) ? aG3 : 0, aG1(s, player), eq.a1I(player, co, a0v), bV.bY[player] -= co + aG3, en.nA(player, !1)
}

function aG0(player, a0v) {
	for (var hx, j = bV.a2N[player].length - 1; 0 <= j; j--)
		if (eN.o6(bV.a2N[player][j]))
			for (hx = 3; 0 <= hx; hx--)
				if (eN.o1(bV.a2N[player][j] + a1P[hx]) && eN.iC(bV.a2N[player][j] + a1P[hx]) === a0v) {
					bV.x9[player].push(bV.a2N[player][j]);
					break
				}
}

function aG1(size, player) {
	for (var j = bV.x9[player].length - 1; size <= j; j--) eN.oJ(bV.x9[player][j], player)
}

function aFz(player) {
	for (var j = bV.a2N[player].length - 1; 0 <= j; j--)
		if (eN.o6(bV.a2N[player][j]))
			for (var hx = 3; 0 <= hx; hx--)
				if (eN.iB(bV.a2N[player][j] + a1P[hx])) {
					bV.x9[player].push(bV.a2N[player][j]);
					break
				}
}

function aG4(player, aG5) {
	var j, jy, hx, aG6, s = bV.a2N[player].length,
		hy = 256 <= s ? 12 : 32 <= s ? 6 : 1,
		jO = s - 1 - eC.h1(hy);
	aG7 = 0;
	loop: for (j = jO; 0 <= j; j -= hy)
		for (hx = 3; 0 <= hx; hx--)
			if ((aG6 = eN.iB(bV.a2N[player][j] + a1P[hx]) ? ay.cU : eN.iC(bV.a2N[player][j] + a1P[hx])) === ay.cU || eN.o1(bV.a2N[player][j] + a1P[hx]) && aG6 !== player && (aG5 || jB(player, aG6))) {
				for (jy = aG7 - 1; 0 <= jy; jy--)
					if (aG8[jy] === aG6) continue loop;
				if (aG8[aG7] = aG6, ++aG7 >= aG9) return !0
			}
	return 0 < aG7
}

function aGA(player, aG5) {
	var j, hx, aG6;
	for (aG7 = 0, j = bV.a2N[player].length - 1; 0 <= j; j--)
		for (hx = 3; 0 <= hx; hx--)
			if ((aG6 = eN.iB(bV.a2N[player][j] + a1P[hx]) ? ay.cU : eN.iC(bV.a2N[player][j] + a1P[hx])) === ay.cU || eN.o1(bV.a2N[player][j] + a1P[hx]) && aG6 !== player && (aG5 || jB(player, aG6))) return aG8[aG7++] = aG6, !0;
	return !1
}

function aGB() {
	for (var d9, j = aG7 - 1; 0 <= j; j--)
		if (aG8[j] === ay.cU) {
			for (aG7--, d9 = j; d9 < aG7; d9++) aG8[d9] = aG8[d9 + 1];
			return !0
		} return !1
}

function aGC(player) {
	for (var d9, j = aG7 - 1; 0 <= j; j--)
		if (eq.a4W(player, aG8[j]))
			for (aG7--, d9 = j; d9 < aG7; d9++) aG8[d9] = aG8[d9 + 1];
	return 0 === aG7
}

function aGD() {
	for (var j = aG7 - 1; 0 <= j; j--)
		if (aG8[j] >= ay.dc) return !0;
	return !1
}

function aGE() {
	for (var j = aG7 - 1; 0 <= j; j--) aG8[j] < ay.dc && (aG8[j] = aG8[--aG7]);
	return 0 < aG7
}

function aGF(player) {
	for (var d9, aGG = aG8[0], aGH = bV.bY[aGG] + eq.a4S(aGG, player), j = aG7 - 1; 1 <= j; j--)(d9 = bV.bY[aG8[j]] + eq.a4S(aG8[j], player)) < aGH && (aGG = aG8[j], aGH = d9);
	return aGG
}

function aGI(player) {
	var aa, aGJ = aG8[0];
	if (1 !== aG7)
		for (var aGK = a4(bV.jK[player] + bV.jI[player], 2), aGL = a4(bV.jL[player] + bV.jJ[player], 2), dM = aGM(aGK - a4(bV.jK[aGJ] + bV.jI[aGJ], 2)) + aGM(aGL - a4(bV.jL[aGJ] + bV.jJ[aGJ], 2)), j = aG7 - 1; 1 <= j; j--)(aa = aGM(aGK - a4(bV.jK[
			aG8[j]] + bV.jI[aG8[j]], 2)) + aGM(aGL - a4(bV.jL[aG8[j]] + bV.jJ[aG8[j]], 2))) < dM && (dM = aa, aGJ = aG8[j]);
	return aGJ
}

function aGN() {
	return aG8[eC.h1(aG7)]
}

function aDq() {
	var qp, y7, kU;
	this.show = function() {
		qp.show(), this.resize()
	}, this.fb = function() {
		qp.fb()
	}, this.resize = function() {
		qp.resize(), y7.resize()
	}, this.qz = function(aJ) {
		2 === aJ && qp.r0[0].a9()
	}, qp = new qv("🛠️ Chart Options", [new a5("❌ " + aP.aQ[92], function() {
		ak.y8(13)
	})]), y7 = new y9(qp.qx, ((kU = []).push(function() {
		function yQ() {
			var qP = .1 + (0 === a6P.aR.value.length ? .1 : .01 * Math.min(a6P.aR.value.split(",").length, 10));
			yF.button.innerHTML = aL.fm.yR(yF.button.innerHTML, qP)
		}
		var yD = new yE,
			yF = (yD.yJ("Search Terms"), yD.zD("Separate search terms with a comma."), new a5("Go (🧈 0.00)", function() {
				aS.aT.aU(130, 0), ak.ba.a5d()
			})),
			a6P = new yH(aS.ai.data[126], 0, function() {
				yF.button.click()
			});
		yD.yK(a6P), a6P.aR.placeholder = "a,b,c", a6P.aR.style.marginTop = "0.5em";
		return a6P.aR.addEventListener("input", yQ), yQ(), yD.yK(new yS([yF.button])), yD
	}()), kU.push(function() {
		function yQ() {
			hB = Math.floor(yI.aR.value), hC = Math.floor(yG.aR.value);
			var hC, hB = {
				uO: Math.min(hB, hC),
				yM: Math.max(hB, hC)
			};
			yF.button.innerHTML = aL.fm.yR(yF.button.innerHTML, (hB.yM - hB.uO + 1 + 10) / 100)
		}
		var yD = new yE,
			yF = new a5("Go (🧈 0.00)", function() {
				aS.aT.aU(130, 1), ak.ba.a5d()
			}),
			yG = new yH(aS.ai.data[129], 1, function() {
				yG.aR.focus()
			}),
			yI = new yH(aS.ai.data[128], 1, function() {
				yF.button.click()
			});
		yD.yJ("Start Index"), yD.yK(yI), yI.aR.style.marginBottom = "0.5em", yD.yJ("End Index"), yD.yK(yG);
		return yI.aR.addEventListener("input", yQ), yG.aR.addEventListener("input", yQ), yQ(), yD.yK(new yS([yF.button])), yD
	}()), kU.push(function() {
		var yD = new yE;
		return yD.yJ("Timeframe"), yD.zH(new xC(aS.ai.data[125])), yD
	}()), kU.push(function() {
		var yD = new yE;
		return yD.yJ("More Options"), yD.yK(new aN(aS.ai.data[127], aS.ai.data[127].title)), yD
	}()), kU))
}

function a20() {
	this.fn = function(y) {
		var j, a8H, aGR, aGS, aGT;
		if (y < 0) return "-" + this.fn(Math.abs(y));
		if (y < 1e3) return y.toString();
		for (a8H = Math.floor(Math.log(y + .5) / Math.log(10)) + 1, aGR = Math.floor((a8H - 1) / 3), aGT = (aGS = y.toString()).substring(a8H - 3, a8H), j = 1; j < aGR; j++) aGT = aGS.substring(a8H - 3 * (j + 1), a8H - 3 * j) + " " + aGT;
		return aGS.substring(0, a8H - 3 * aGR) + " " + aGT
	}, this.fo = function(i0, a8H) {
		return i0.toFixed(a8H) + "%"
	}, this.wb = function(y, aGU) {
		return y.toFixed(d4.k3(Math.floor((void 0 === aGU ? 3 : aGU) - Math.log10(Math.max(y, 1))), 0, 8))
	}, this.aGV = function(y, ql, a8H) {
		return (y * ql).toFixed(a8H)
	}, this.wY = function(username) {
		var aEP, aEb = username.indexOf("[");
		return !(aEb < 0) && 1 < (aEP = username.indexOf("]")) - aEb && aEP - aEb <= 8 ? username.substring(aEb + 1, aEP).toUpperCase().trim() : null
	}, leaderboardFilter.parseClanFromPlayerName = this.wY;
	this.a8u = function(bv) {
		for (var jy = Math.floor(.5 * bv.length + .5), bI = Math.floor(.5 * (jy - 1)), j = 0; j < bI; j++)
			for (var d9 = -1; d9 < 2; d9 += 2) {
				var aJ = jy + d9 * j;
				if (" " === bv[aJ]) return [this.aGW(bv.substring(0, aJ)), this.aGX(bv.substring(aJ))]
			}
		return [bv.substring(0, jy), bv.substring(jy)]
	}, this.aGX = function(bv) {
		for (var s = bv.length, j = 0; j < s; j++)
			if (" " !== bv[j]) return bv.substring(j);
		return bv
	}, this.aGW = function(bv) {
		for (var j = bv.length - 1; 0 <= j; j--)
			if (" " !== bv[j]) return bv.substring(0, j + 1);
		return bv
	}, this.yR = function(bv, qP) {
		return bv.split("(")[0] + "(🧈 " + qP.toFixed(2) + ")"
	}, this.startsWith = function(bv, aGY) {
		return bv.substring(0, aGY.length) === aGY
	}
}

function aDG() {
	function aGc(g3) {
		if (0 === g3.length) aS.aT.aU(116, "");
		else {
			for (var aGd = g3[0], j = 1; j < g3.length; j++) aGd += ";" + g3[j];
			aS.aT.aU(116, aGd)
		}
	}
	this.aGZ = function() {
		aS.ai.data[110].value.length && (aS.ai.data[106].value = aS.ai.data[110], aS.aT.aU(110, ""), this.aGa())
	}, this.aGa = function() {
		var g3 = aS.ai.data[116].value.split(";");
		for (g3.length % 2 == 1 && g3.pop(), g3.unshift(aS.ai.data[106].value), g3.unshift(aS.ai.data[105].value), j = 2; j < g3.length; j += 2)
			if (g3[j] === g3[0]) {
				g3.splice(j, 2);
				break
			} for (var aGb = [], j = 0; j < g3.length; j += 2) aGb.push(g3[j]);
		aGc(g3), aS.ai.data[117].value = 0, aS.ai.data[117].hh = aGb
	}, this.aFW = function(a3) {
		aS.ai.data[117].hh.splice(a3, 1), aS.ai.data[117].value = Math.min(a3, aS.ai.data[117].hh.length - 1);
		var g3 = aS.ai.data[116].value.split(";");
		g3.splice(2 * a3, 2), aGc(g3)
	}, this.aFX = function(a3) {
		var g3 = aS.ai.data[116].value.split(";");
		return {
			aFY: g3[2 * a3],
			password: g3[2 * a3 + 1]
		}
	}, this.aGe = function() {
		var y = d4.k3(aS.ai.data[121].value, -1, 262143);
		return y = -1 === y ? ~~(262144 * Math.random()) : y
	}
}

function yg() {
	aAr || (aAl(), aGk(), d4 = new a4E, ju = new a4d, aL = new a1y, aC = new a7o, ay = new dX, hO = new a11, un = new aGl, eP = new pu, en = new a4v, eo = new nK, em = new mw, f0 = new a01, eS = new a3q, oq = new sv, ek = new aGm, ei = new a5E, aw =
		new a8V, a6d = new bs, ej = new aGn, c7 = new aC5, ed = new qN, ec = new yh, vp = new aBV, eg = new lh, eb = new a9v, eh = new wf, el = new ic, lJ = new aGo, y4 = new aEd, cB = new aEy, eA = new aGp, iw = new aGq, eN = new nO, ou =
		new aGr, eq = new a4L, eL = new a6g, a3h = new mn, er = new r1, bV = new aGs, eQ = new mK, eE = new gt, h4 = new aFK, eI = new zJ, z = new aGt, xt = new a0Z, b0 = new aFL, eC = new aFa, n5 = new a14, eO = new aGu, xf = new aGv, ez =
		new aDA, ad = new aF6, cD = new kL, aGf = new wK, ef = new a3N, vc = new a1Q, ev = new a5Q, aFE = new mi, et = new aGw, es = new tK, eu = new aBE, gX = new gS, e4 = new aGx, bg = new a0x, eU = new aAs, ee = new aGy, hD = new aAq, bJ =
		new aGz, aGg = new aH0, xi = new xH, cY = new hl, bZ = new pi, ca = new m8, eX = new a7f, eW = new mW, mY = new a8O, b = new aAh, xm = new aH1, ak = new aDj, f7 = new tP, aP = new hS, bw = new aFq, aAr = new m4, uV = new a9D, aS =
		new aDD, dV = new a2x, eV = new aH2, oM = new kA, eK = new tF, aGh = new aE7, eG = new aE0, eY = new fD, c0 = new qF, qT = new aFy, af = new aH3, a9p = new aH4, aGi = new tS, aAr.aB(), bw.aB(), ad.a3X(), aS.aB(), aP.aB(), aGi.aB(), aL
		.aB(), ou.aB(), aGh.aB(), b0.aB(), hO.aB(), un.aB(), b.aB(), aH6(), ak.aB(), a6e = new aH7, ad.aB(), bw.bx.p1(), c0.aB(), af.aB(), aF2 = new pM, eC.aB(), eL.a6n(), f7.aB(), eI.aB(), cB.aB(), gX.aB(), vp.aB(), eQ.aB(), xi.aB(), iw.aB(), c0
		.c1 = !0, setTimeout(function() {
			b.eR(2, 14071)
		}, 0), ak.am(5, 5), aGg.a1V(), bw.bx.p5(), ad.an(), aAr.m7 = 1)
}

function aDE() {
	this.ul = function(a3, ot) {
		return Number(this.gc(a3, ot))
	}, this.gc = function(a3, ot) {
		var y = null;
		return 0 === bw.id ? bw.oh && (y = bw.oh.getItem((ot ? "v" : "d") + a3)) : 1 === bw.id ? y = bw.gj.loadString((ot ? 1e3 : 2e3) + a3) : 2 === bw.id && (y = bw.os[(ot ? "v" : "d") + a3]), y && 0 !== y.length ? y : null
	}, this.save = function(a3, value, ot) {
		0 === bw.id ? bw.oh && aS.ai.data[140].value && bw.oh.setItem((ot ? "v" : "d") + a3, value) : 1 === bw.id ? bw.gj.saveString((ot ? 1e3 : 2e3) + a3, value) : 2 === bw.id && (bw.os["d" + a3] = value, bw.oi.postMessage((ot ? "v" : "d") +
			a3 + " " + value))
	}
}

function aFQ() {
	this.vb = function(vU) {
		var j, kb, aH9, aHA, aHB;
		if (vU !== b0.ba.vw) b0.ba.close(vU, 3239);
		else if (6 === cB.cC() && cD.aB(), 7 !== cB.cC()) b0.ba.close(vU, 3251);
		else {
			for (kb = [0, 0, 0, 0], aH9 = bJ.bK(6), j = 0; j < 4; j++) kb[j] = bJ.bK(aH9);
			for (aHA = bJ.bK(4), aHB = [], j = 0; j < aHA; j++) {
				aHB.push({
					id: bJ.bK(5),
					e1: bJ.bK(4),
					l5: 1 === bJ.bK(1),
					c: bJ.bK(6),
					gl: bJ.bK(14),
					l8: bJ.bK(aH9),
					lA: bJ.bK(9) + 1,
					l9: bJ.bK(10)
				});
				for (var lB = bJ.bK(3), lC = new Array(lB), lD = new Array(lB), jy = 0; jy < lB; jy++) lD[jy] = bJ.bK(9) + 1, lC[jy] = un.hP.v7(bJ.bK(3));
				aHB[j].lB = lB, aHB[j].lC = lC, aHB[j].lD = lD
			}
			cD.aU(kb, aHB)
		}
	}
}

function a9F() {
	function aHH(y, a2e, min, max) {
		return min + (y * a2e + 137) % (max - min)
	}
	this.bF = function(aHC, aHD) {
		for (var aHF = 1, j = 0; j <= 10; j++) aHF = function(aHF, aHC, aHD, g4) {
			for (var s = 65536 + (aHF * g4 + 7 & 16383), j = 0; j < s; j++) aHF = 1 + aHF * aHC % aHD;
			return aHF
		}(aHF, aHC, aHD, j), aHC = aHH(aHC, aHF, 16384, 65536), aHD = aHH(aHD, aHF, 1 << 18, 1 << 20);
		return aHF - 1 & 65535
	}
}

function aH3() {
	this.k5 = 0, this.gap = 0, this.si = 0, this.a2s = 0, this.aB = function() {
		this.resize()
	}, this.resize = function() {
		this.k5 = .0022 * aL.ab.ac(.5) * ad.ae, this.si = this.k5 / ad.pW, this.gap = Math.max(Math.floor((bw.bx.by() ? .0114 : .01296) * ad.ae), 2), this.a2s = this.gap / ad.pW
	}
}

function a23() {
	this.jo = function(aHI, a3, aHJ) {
		var jW = aHI.height,
			kq = aL.ab.pD(jW, jW),
			k7 = aL.ab.getContext(kq);
		return function(aZ, k7, aHJ) {
			k7.fillStyle = aHJ, k7.beginPath(), k7.arc(aZ / 2, aZ / 2, .47 * aZ, 0, 2 * Math.PI), k7.fill()
		}(jW, k7, aHJ), k7.drawImage(aHI, -a3 * jW, 0), kq
	}, this.a3Z = function(aHL) {
		var jW = aHL.height,
			k7 = aL.ab.getContext(aHL, !0),
			gh = k7.getImageData(0, 0, jW, jW);
		return aL.a22.pL(gh.data, jW, jW, .9), k7.putImageData(gh, 0, 0), aHL
	}
}

function aH4() {
	function aHM(title, wZ, aR) {
		tM(aR), ak.am(4, 5, new p6("⚠️ " + title, wZ, !0))
	}

	function tM(aR) {
		! function(aR) {
			var oy = cB.cC();
			0 !== oy && (6 === oy ? b0.ba.kk(aR) : 7 === oy ? (cD.kj(), b0.ba.close(b0.ba.vw, 3256)) : 8 === oy && ay.f3(!0))
		}(aR), ak.ba.a5Z()
	}
	this.a9t = function(vU, aR) {
		if (8 === ak.a5f && 0 === vU) ak.am(4, 0, new p6("⚠️ " + aP.hf(64), aP.he(aR), !0));
		else {
			var oy = cB.cC();
			if (6 === oy) {
				if (4211 === aR) return tM(aR), void ak.am(4, 5, new p6("🚀 " + aP.aQ[122], aP.aQ[123], !0, [new a5("❌ " + aP.aQ[92], function() {
					ak.qs()
				}, aC.p8), new a5("🔄 " + aP.aQ[124], function() {
					bw.bx.oz()
				}, aC.yW)]));
				if (4214 !== aR) return void y4.aEo(vU)
			} else {
				if (7 !== oy) return 8 === oy ? void(vU !== b0.ba.od || ay.bB || 1 !== ay.di || ay.bC || aw.a8z(aP.he(aR))) : void 0;
				if (vU !== b0.ba.vw) return
			}
			aHM(aP.hf(64), aP.he(aR), aR)
		}
	}, this.a9q = function(aR) {
		8 === cB.cC() ? ay.bB || 1 !== ay.di || aw.a8z(aP.he(aR)) : aHM(aP.hf(64), aP.he(aR), aR)
	}
}

function aGw() {
	this.bt = 0, this.e0 = null, this.aB = function() {
		this.bt = 0, this.e0 = []
	}, this.mh = function(player) {
		this.e0.push(player), ay.df++, bV.ly[player] = 2, bV.oc[player] = uV.uW.z7(), player === ay.az && (el.show(!1, !1), eh.wu()), er.sH(player)
	}, this.a2P = function(player) {
		var j, e0;
		if (2 !== bV.ly[player])
			for (j = (e0 = this.e0).length - 1; 0 <= j; j--)
				if (e0[j] === player) return void e0.splice(j, 1)
	}, this.bF = function() {
		ay.bB || (30 === this.bt && 2140 <= c0.ci() && this.aHO(), this.bt = (this.bt + 1) % 60)
	}, this.aHO = function() {
		for (var e0 = this.e0, j = e0.length - 1; 0 <= j; j--) ! function(player, iQ) {
			!eq.a4X(player) || (iQ = Math.max(Math.min(100, bV.bY[player]), a4(iQ * bV.bY[player], 100))) < 100 || (0 === bV.a2N[player].length ? !bZ.nL.bF(player) && ay.dT && aHQ(player, iQ, 0, 0) : (ay.dT ? aHR : aHS)(player, iQ))
		}(e0[j], 12)
	}
}

function aH0() {
	this.a1V = function() {
		var value, p0;
		0 === bw.id && (value = function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var aC4 = window.location.search,
				aC4 = new URLSearchParams(aC4).get(key);
			if ("string" != typeof aC4 || aC4.length < 1) return null;
			return aC4
		}("replay"), (p0 = new URL(window.location.href)).search = "", history.replaceState(null, "", p0.toString()), value) && ak.am(3, 0, value)
	}
}

function aDp() {
	var qp, y7, kU;
	this.show = function() {
		qp.show(), this.resize()
	}, this.fb = function() {
		qp.fb()
	}, this.resize = function() {
		qp.resize(), y7.resize()
	}, this.qz = function(aJ) {
		2 === aJ && qp.r0[0].a9()
	}, qp = new qv("🔑 " + aP.aQ[125], [new a5("❌ " + aP.aQ[87], function() {
		ak.qs()
	})]), y7 = new y9(qp.qx, ((kU = []).push(function() {
		var yD = new yE;
		return yD.yJ("🧈 Gold"), yD.zF("Balance: " + aL.fm.aGV(aS.ai.data[113].value, .01, 2)), yD.zD(
			"Play more multiplayer games to earn gold. Accounts without gold will be deleted. Each day, you will lose 🧈 0.50 or 0.01% of your balance, whichever amount is higher."), yD
	}()), kU.push(function() {
		var yD = new yE;
		return yD.yJ("1v1 Rating"), yD.zF("Elo: " + aL.fm.aGV(aS.ai.data[107].value, .1, 1) + "<br>Rank: " + (aS.ai.data[108].value + 1) + " / " + aS.ai.data[111].value + "<br>Played Games: " + aS.ai.data[112].value), yD
	}()), kU.push(function() {
		var yD = new yE,
			a6P = (yD.yJ("Account Name"), new yH(aS.ai.data[105]));
		return a6P.aR.readOnly = !0, yD.yK(a6P), yD.yK(new yS([new a5("Copy", function() {
			aL.ab.st(a6P.aR), aL.ab.su(this)
		}).button])), yD
	}()), kU.push(function() {
		var yD = new yE,
			yb = (yD.yJ("Password"), new yH(aS.ai.data[106]));
		return yb.aR.readOnly = !0, yb.aR.type = "password", yD.yK(yb), yD.yK(new yS([new a5("Show", function() {
			"Show" === this.innerText ? (this.innerText = "Hide", yb.aR.type = "text") : (this.innerText = "Show", yb.aR.type = "password")
		}).button, new a5("Copy", function() {
			aL.ab.st(yb.aR), aL.ab.su(this)
		}).button])), yD.yK(new yS([new a5("Request New Password", function() {
			ak.am(8, ak.yO().yP, new qy(15))
		}).button])), yD
	}()), kU.push(function() {
		var yD = new yE;
		return yD.yJ("Account Options"), yD.yK(new yS([new a5("Log in to a Different Account", function() {
			ak.am(6, ak.yO().yP)
		}).button])), yD.yK(new yS([new a5("Create New Account", function() {
			aS.aT.aU(105, ""), ak.am(8, ak.yO().yP, new qy(18))
		}).button])), yD.yK(new yS([new a5("Delete Account: " + aS.ai.data[105].value, function() {
			ak.am(4, 0, new p6("🗑️ Account Deletion", "Your account will start the deletion process but may be restored if you log in within 3 weeks.", !0, [new a5("❌ " + aP.aQ[92], function() {
				ak.am(7, ak.yU(7).yP)
			}), new a5("🗑️ Delete Account", function() {
				ak.am(8, ak.yU(7).yP, new qy(17))
			}, aC.p8)]))
		}, aC.p8).button])), yD
	}()), kU.push(function() {
		function aHb(a3) {
			for (var j = 0; j < 2; j++) aHa[j].aE(0 === a3 ? aC.a7u : 0 === j ? aC.p8 : aC.yW)
		}
		var zI, aHa, yD = new yE;
		yD.yJ("Saved Accounts"), yD.zD("Listed accounts may have been removed in the meantime due to insufficient funds."), aS.ba.aGa();
		return aHa = [new a5("🗑️ Remove From List", function() {
			var a3 = Math.min(aS.ai.data[117].value, zI.xE.length - 1);
			if (!(a3 < 1)) {
				zI.xE[a3].remove(), zI.xE.splice(a3, 1);
				for (var j = a3; j < zI.xE.length; j++) zI.xE[j].name = "" + j;
				aS.ba.aFW(a3), a3 = aS.ai.data[117].value, zI.xE[a3].textContent = zI.xE[a3].textContent.replace("⚪", "🟢"), aHb(a3)
			}
		}, aC.a7u), new a5("➡️ Login", function() {
			var a3 = Math.min(aS.ai.data[117].value, zI.xE.length - 1);
			a3 < 1 || (a3 = aS.ba.aFX(a3), aS.aT.aU(105, a3.aFY), aS.aT.aU(106, a3.password), ak.am(8, ak.yO().yP, new qy(18)))
		}, aC.a7u)], (zI = new xC(aS.ai.data[117], aHb)).xE[0].style.marginTop = "0.5em", yD.zH(zI), yD.yK(new yS([aHa[1].button])), yD.yK(new yS([aHa[0].button])), yD
	}()), function(kU) {
		var yD = new yE,
			wa = aS.ai.data[137].value,
			aHf = (yD.yJ("Primary Clan Stats"), yD.zF("Clan: " + (wa ? "[" + aS.ai.data[135].value + "]" : "-")), yD.zF("Monthly Points: " + aL.fm.aGV(wa, .001, 3)), yD.zF("Rank: " + (aS.ai.data[139].value + 1) + " / " + aS.ai.data[111]
				.value), aS.ai.data[141].value),
			aHg = (yD.zF("Total Points: " + aL.fm.aGV(aHf, .01, 2)), aS.ai.data[143].value);
		yD.zF("Won Games: " + aHg), yD.zF("Avg. Points per Game: " + aL.fm.aGV(aHf / Math.max(aHg, 1), .01, 3)), wa = aS.ai.data[138].value, yD.yJ("Secondary Clan Stats", "0.8em"), yD.zF("Clan: " + (wa ? "[" + aS.ai.data[136].value +
			"]" : "-")), yD.zF("Monthly Points: " + aL.fm.aGV(wa, .001, 3)), aHf = aS.ai.data[142].value, yD.zF("Total Points: " + aL.fm.aGV(aHf, .01, 2)), aHg = aS.ai.data[144].value, yD.zF("Won Games: " + aHg), yD.zF(
			"Avg. Points per Game: " + aL.fm.aGV(aHf / Math.max(aHg, 1), .01, 3)), kU.push(yD)
	}(kU), kU))
}

function pl() {
	this.a2A = function(player) {
		for (var cV = bZ.ba.cV, hB = player << 3, j = hB + bZ.ba.bb[player] - 1; hB <= j; j--) this.cq(cV[j])
	}, this.cq = function(aHh) {
		var ba = bZ.ba,
			aHi = ba.bc - 1,
			aHj = ba.cL[aHh],
			aHk = ba.cR[aHh],
			aHl = ba.cO[aHh];
		ba.bc = aHi, ba.cL[aHh] = ba.cL[aHi], ba.cM[aHh] = ba.cM[aHi], ba.cN[aHh] = ba.cN[aHi], ba.cO[aHh] = ba.cO[aHi], ba.cP[aHh] = ba.cP[aHi], ba.cQ[aHh] = ba.cQ[aHi], ba.cR[aHh] = ba.cR[aHi], ba.cS[aHh] = ba.cS[aHi], ba.cT[aHh] = ba.cT[aHi],
			ba.cV[ba.cL[aHh]] = aHh,
			function(kx) {
				var player = kx >> 3,
					ba = bZ.ba,
					s = ba.bb[player] - 1,
					aHo = (player << 3) + s;
				ba.bb[player] = s, aHo !== kx && (ba.cV[kx] = ba.cV[aHo], ba.cL[ba.cV[kx]] = kx)
			}(aHj), bZ.cf.cf[cY.cg(ba.cO[aHh])][ba.cR[aHh]] = aHh, aHi = cY.cg(aHl), aHj = aHk, aHi = bZ.cf.cf[aHi], ba = aHi.pop(), aHj !== aHi.length && (aHi[aHj] = ba, bZ.ba.cR[ba] = aHj)
	}
}

function aGx() {
	function gf(aR) {
		e4.e5 = !0, e4.aHv(JSON.parse(aR.target.result)), e4.u7()
	}

	function aI1(bv, min, max, aI9) {
		return "string" != typeof bv || bv.length < min ? aI9 : bv.length > max ? bv.substring(0, max) : bv
	}

	function aHx(y, min, max) {
		return y = "number" == typeof y ? Math.floor(y) : min, Math.min(Math.max(y, min), max)
	}

	function aHz(y, aq) {
		return "boolean" == typeof y ? y : aq
	}

	function aI3(y, s, max, aIB) {
		var j, g3, d8;
		if (!Array.isArray(y) || y.length < 1) return null;
		for (g3 = new(8 === aIB ? Uint8Array : Uint16Array)(s), d8 = y.length, j = 0; j < s; j++) g3[j] = aHx(y[j % d8], 0, max);
		return g3
	}
	this.e5 = !1, this.e6 = null, this.gk = function() {
		this.e5 = !1, this.e6 = null
	}, this.aHq = function() {
		this.e6.nk && this.e6.aHr && (this.e6.nk[0] = aL.color.a56(aS.ba.aGe())), ay.dx(this.e6.aHs, 0, this.aHt(), this.e6.e1, !1, !1)
	}, this.aHt = function() {
		return [{
			name: this.e6.aHu ? aS.ai.data[122].value : this.e6.mP[0],
			nu: [0, 0, 0],
			v6: 0
		}]
	}, this.gc = function(gZ) {
		var gb = new FileReader;
		gb.onload = gf, gb.readAsText(gZ)
	}, this.aHv = function(yN) {
		this.e6 = {}, this.e6.aHw = aHx(yN.numberPlayers, 1, 512), this.e6.aHy = aHx(yN.modeID, 0, 1), this.e6.c = aHx(yN["gMap.mapID"], 0, b.wM - 1), this.e6.l7 = aHx(yN.seedMap, 0, 16383), this.e6.aHs = aHx(yN.seedSpawn, 0, 16383), this.e6.e7 =
			aHz(yN.selectableSpawn, !1), this.e6.aHu = aHz(yN.selectableName, !1), this.e6.aHr = aHz(yN.selectableColor, !1), b.e6.gd[b.ge()].name = this.e6.aI0 = aI1(yN.mapName, 1, 25, "Custom Map"), this.e6.a8i = function(y) {
				var j, s;
				if (!Array.isArray(y) || y.length < 1) return [];
				for (s = y.length, j = 0; j < s; j++) y[j] = aI1(y[j], 0, 100, "");
				return y
			}(yN.description), this.e6.a3u = aI3(yN.playerX, this.e6.aHw, 4096, 16), this.e6.a42 = aI3(yN.playerY, this.e6.aHw, 4096, 16), this.e6.a35 = aI3(yN.playerTeam, this.e6.aHw, 8, 8), this.e6.q6 = aI3(yN.playerStrength, this.e6.aHw, 5,
			8), this.e6.nk = function(y, s) {
				var j, g3, d8;
				if (!Array.isArray(y) || y.length < 1) return null;
				for (g3 = new Array(s), d8 = y.length, j = 0; j < s; j++) g3[j] = aI3(y[j % d8], 3, 63, 8);
				return g3
			}(yN.playerColor, this.e6.aHw), this.e6.mP = function(y, s) {
				var j, g3, d8;
				if (!Array.isArray(y) || y.length < 1) return null;
				for (g3 = new Array(s), d8 = y.length, j = 0; j < s; j++) g3[j] = aI1(y[j % d8], 3, 26, "Bot");
				return g3
			}(yN.playerName, this.e6.aHw), this.e6.aI6 = "string" == typeof yN.mapBase64 ? yN.mapBase64 : "", this.e6.aHu = this.e6.aHu || !this.e6.mP, this.e6.e1 = 0 === this.e6.aHy ? 7 : 2 === this.e6.aHy ? 9 : 6, this.e6.a3u = this.e6.a42 ?
			this.e6.a3u : null
	}, this.u7 = function() {
		! function(bv) {
			var ij, gh, aI8 = "data:image/png;base64,";
			if (bv.length <= aI8.length) return;
			e4.e6.c = 0, e4.e6.l7 = 0, b.eR(0, 0), bv.substring(0, aI8.length) !== aI8 && (bv = aI8 + bv);
			return (ij = new Image).onload = function() {
				b.o = ij.width, b.p = ij.height, 4096 < b.o || 4096 < b.p || b.o < 10 || b.p < 10 ? (b.eR(0, 0), alert("Image w & h must be between 10 and 4096.")) : (b.c = b.ge(), b.gl = 0, b.gm.width = b.o, b.gm.height = b.p, b.gn
					.drawImage(ij, 0, 0), gh = b.gn.getImageData(0, 0, b.o, b.p), b.go = gh.data)
			}, ij.src = bv, e4.e6.aI6 = "", 1
		}(this.e6.aI6) && b.eR(this.e6.c, this.e6.l7)
	}, this.aIC = function() {
		for (var max = 0, s = this.e6.aHw, j = 0; j < s; j++) this.e6.a35[j] > max && (max = this.e6.a35[j]);
		return Math.max(0, max - 1)
	}
}

function aID() {
	function aIH(g3, y, d7) {
		for (var j = 0; j < 256; j++) g3[j] = (g3[j] + (y >> (j + d7) % 30 & 1)) % 256
	}
	this.bF = function(aIE, aIF) {
		var g3 = new Uint8Array(256);
		return function(g3, aIE, aIF) {
				var j, aHF = 3 + (4 + aIE) % 32768,
					aHC = 12 + aIF % 32768,
					aHD = 17 + ((aIE & aIF) + (aIE | aIF) + aIE) % 32768;
				for (j = 0; j < 256; j++) aHF = 1 + aHF * aHC % aHD, g3[j] = aHF % 256
			}(g3, aIE, aIF), aIH(g3, aIE, 2), aIH(g3, aIF, 7),
			function(g3) {
				var j, y, a3 = 0;
				for (j = 0; j < 3e4; j++) y = g3[a3], g3[a3] = (y + j + g3[(a3 + j) % 256]) % 256, a3 = (y + j + a3 + (y & a3)) % 256
			}(g3),
			function(g3) {
				var j, fI = 1,
					fJ = 1;
				for (j = 0; j < 256; j += 2) fI = (1 + fI) * (g3[j] + 1) % 1073741824, fJ = (1 + fJ) * (g3[j + 1] + 1) % 1073741824;
				return [fI, fJ]
			}(g3)
	}
}

function aGt() {
	var y, aZ, aa, max, aIJ, a02, aIL, aIM, aIN, aIO, aIP, aIQ, aIR, aIS, aIK = 1e4;

	function aIZ(aIY, a05, s) {
		var j;
		for (aIL[0] = aIY, j = 1; j < s; j++) aIL[j] = aIL[j - 1] + a05, a05 = aIL[j] >= aIK ? (aIL[j] = aIK - 1, -a05) : aIL[j] < 0 ? (aIL[j] = 0, -a05) : (a05 += 16384 <= eC.random() ? a02 : -a02) < -aIJ ? -aIJ : aIJ < a05 ? aIJ : a05
	}

	function aIb(k, l, aIc, s) {
		(aIc ? function(k, l, s) {
			var j;
			for (j = 0; j < s; j++) y[l * aZ + k + j] = aIL[j]
		} : function(k, l, s) {
			var j;
			for (j = 0; j < s; j++) y[l * aZ + k + j * aZ] = aIL[j]
		})(k, l, s)
	}

	function aIf(value, s) {
		var j, sR, g4, hy = value - aIL[s - 1];
		if (0 != hy) {
			for (sR = 1 + a4(Math.abs(hy), s - 1), sR = hy < 0 ? -sR : sR, aIL[s - 1] = value, g4 = (g4 = s - 1 - a4(Math.abs(hy), Math.abs(sR))) < 1 ? 1 : s - 2 < g4 ? s - 2 : g4, j = s - 2; g4 <= j; j--) aIL[j] += hy - (s - 1 - j) * sR;
			(hy < 0 ? function(s) {
				var j;
				for (j = s - 2; 1 <= j; j--) aIL[j] < 0 && (aIL[j] = -aIL[j] - 1)
			} : function(s) {
				var j;
				for (j = s - 2; 1 <= j; j--) aIL[j] >= aIK && (aIL[j] = 2 * aIK - aIL[j] - 1)
			})(s)
		}
	}

	function aIi(aIj, aIk, s) {
		for (var j = 0; j < s; j++) aIj[j] = aIk[j]
	}

	function aIl(g3) {
		for (var j = 0; j < g3.length - 1; j++) g3[j] = g3[j + 1] - g3[j];
		g3[g3.length - 1] = g3[g3.length - 3]
	}

	function aIm(a5U, gap, hx) {
		aIM.push(a5U), aIN.push(gap), aIO.push(hx)
	}
	this.eR = function(pC) {
		! function(pC) {
			var j;
			for (aZ = pC[0], aa = pC[1], aIJ = pC[2], a02 = pC[3], y = new Int16Array(aZ * aa), max = aa < aZ ? aZ : aa, aIL = new Int16Array(max), aIM = [], aIN = [], aIO = [], aIP = new Array(aZ), aIQ = new Array(aa), j = aZ - 1; 0 <= j; j--)
				aIP[j] = !1;
			for (j = aa - 1; 0 <= j; j--) aIQ[j] = !1;
			aIR = new Int16Array(aZ), aIS = new Int16Array(aa)
		}(pC),
		function(s) {
			var aIY = eC.random() % aIK,
				a05 = eC.random() % (2 * aIJ + 1) - aIJ;
			aIZ(aIY, a05, s)
		}(max), aIi(aIS, aIL, aa), aIb(0, 0, !0, aZ);
		var k, l, pC = y[0],
			s = max,
			a05 = eC.random() % (2 * aIJ + 1) - aIJ;
		for (aIZ(pC, a05, s), aIi(aIR, aIL, aZ), aIb(0, 0, !1, aa), aIl(aIR), aIl(aIS), aIZ(y[aZ - 1], aIR[aZ - 1], aa), aIb(aZ - 1, 0, !1, aa), aIZ(y[aZ * (aa - 1)], aIS[aa - 1], aZ), aIf(y[aZ * aa - 1], aZ), aIb(0, aa - 1, !0, aZ), aIP[aZ -
			1] = aIP[0] = !0, aIQ[aa - 1] = aIQ[0] = !0, aIm(0, aZ, !0), aIm(0, aa, !1), ! function() {
				var yM, a5U;
				for (;;) {
					if (yM = function() {
							var j, yM = aIM.length - 1;
							for (j = yM - 1; 0 <= j; j--) aIN[j] > aIN[yM] && (yM = j);
							return yM
						}(), aIN[yM] < 5) return;
					a5U = aIM[yM] + a4(aIN[yM], 2), (aIO[yM] ? function(k) {
						var s, aIq, j, aIr = 0,
							aIs = 0;
						for (; aIs < aa - 1;) {
							for (j = aIr + 1; j < aa; j++)
								if (aIQ[j]) {
									aIs = j;
									break
								} s = aIs - aIr + 1, aIZ(y[k + aZ * aIr], 0 === aIr ? aIR[k] : aIL[aIq - 1] - aIL[aIq - 2], s), aIf(y[aIs * aZ + k], s), aIb(k, aIr, !1, s), aIq = s, aIr = aIs
						}
						aIP[k] = !0
					} : function(l) {
						var s, aIq, j, aIr = 0,
							aIs = 0;
						for (; aIs < aZ - 1;) {
							for (j = aIr + 1; j < aZ; j++)
								if (aIP[j]) {
									aIs = j;
									break
								} s = aIs - aIr + 1, aIZ(y[l * aZ + aIr], 0 === aIr ? aIS[l] : aIL[aIq - 1] - aIL[aIq - 2], s), aIf(y[l * aZ + aIs], s), aIb(aIr, l, !0, s), aIq = s, aIr = aIs
						}
						aIQ[l] = !0
					})(a5U), aIm(a5U, aIM[yM] + aIN[yM] - a5U, aIO[yM]), aIN[yM] = a5U - aIM[yM] + 1
				}
			}(), k = 0; k < aZ; k++)
			if (!aIP[k])
				for (l = 0; l < aa; l++) aIQ[l] || ! function(k, l) {
					var value = y[l * aZ + k - 1] + y[(l - 1) * aZ + k],
						c8 = 2;
					aIP[k + 1] && (c8++, value += y[l * aZ + k + 1]);
					aIQ[l + 1] && (c8++, value += y[(l + 1) * aZ + k]);
					y[l * aZ + k] = a4(value, c8)
				}(k, l)
	}, this.a0 = function() {
		return y
	}, this.a2Z = function() {
		y = null
	}
}

function aGk() {
	"function" != typeof Math.log2 && (Math.log2 = function(k) {
		return Math.log(k) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(k) {
		return Math.log(k) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(k) {
		return 0 < k ? 1 : k < 0 ? -1 : 0
	})
}

function aAu() {
	this.t6 = function() {
		var v8, kz = function() {
				var j, vO = eU.uz.vO,
					s = vO.length,
					max = 0;
				for (j = 0; j < s; j++) max = Math.max(max, vO[j]);
				return aDK(Math.max(max, 1))
			}(),
			aIv = function(kz) {
				return 179 + function() {
					var j, e0 = eU.uz.v4.e0,
						s = e0.length,
						aIv = 24 * s;
					for (j = 0; j < s; j++) aIv += 16 * e0[j].name.length;
					8 === eU.uz.v4.e1 && (aIv += 14 * s);
					return aIv
				}() + (1 === eU.uz.v4.e0.length ? 12 * eU.uz.v4.v9.length : 0) + function() {
					var j, vJ = eU.uz.vJ,
						s = vJ.length,
						aIv = 13 * s,
						aJ6 = [22, 20, 19, 32, 32, 10, 10, 1, 0, 0];
					for (j = 0; j < s; j++) aIv += aJ6[vJ[j]];
					return aIv
				}() + function(kz) {
					return eU.uz.vO.length * (1 + kz)
				}(kz)
			}(kz);
		hD.eR(aIv + (6 - aIv % 6) % 6), v8 = eU.uz.v4, hD.hE(9, m0), hD.hE(31, hD.size), hD.a3 += 16, hD.hE(9, v8.dz), hD.hE(14, v8.dy), hD.hE(4, v8.e1), hD.hE(1, v8.e2), hD.hE(6, v8.l6), hD.hE(14, v8.l7), hD.hE(10, v8.e0.length);
		var j, e0 = eU.uz.v4.e0,
			s = e0.length;
		for (j = 0; j < s; j++) hD.hE(1, e0[j].v6), hD.hE(18, (e0[j].nu[0] << 12) + (e0[j].nu[1] << 6) + e0[j].nu[2]), hD.hE(5, e0[j].name.length), hO.hP.hQ(e0[j].name);
		if (8 === eU.uz.v4.e1)
			for (j = 0; j < s; j++) hD.hE(14, e0[j].sX);
		return function() {
				var j, v8 = eU.uz.v4;
				if (1 === v8.e0.length)
					for (j = 0; j < v8.v9.length; j++) hD.hE(3, v8.v9[j]), hD.hE(9, v8.vA[j] - 1)
			}(),
			function(kz) {
				var j, vJ = eU.uz.vJ,
					bH = eU.uz.vK,
					be = eU.uz.vL,
					bf = eU.uz.vM,
					s = vJ.length;
				for (hD.hE(5, kz), hD.hE(30, s), hD.hE(30, eU.uz.vO.length), j = 0; j < s; j++) hD.hE(4, vJ[j]), hD.hE(9, bH[j]), 0 === vJ[j] ? hD.hE(22, be[j]) : 1 === vJ[j] ? (hD.hE(10, be[j]), hD.hE(10, bf[j])) : 2 === vJ[j] ? (hD.hE(10, be[
					j]), hD.hE(9, bf[j])) : 3 === vJ[j] || 4 === vJ[j] ? (hD.hE(10, be[j]), hD.hE(22, bf[j])) : 5 === vJ[j] || 6 === vJ[j] ? hD.hE(10, be[j]) : 7 === vJ[j] && hD.hE(1, be[j])
			}(kz),
			function(kz) {
				var j, vN = eU.uz.vN,
					vO = eU.uz.vO,
					s = vN.length;
				for (j = 0; j < s; j++) hD.hE(1, vN[j]), hD.hE(kz, vO[j])
			}(kz), hD.a3 !== aIv && aw.a8z("Encoder Index Error: " + hD.a3 + " " + aIv), hD.a3 = 40, hD.hE(16, function() {
				var j, i0 = hD.bG,
					s = hD.size,
					v3 = 0;
				for (j = 7; j < s; j++) v3 = v3 + i0[j] & 65535;
				return v3
			}()), bJ.aB(hD.bG), hO.uo.aDc(hO.uo.aDa(a4(aIv - 1, 6) + 1))
	}
}

function aFO() {
	this.aJ7 = function() {
		hD.eR(39), hD.hE(1, 0), hD.hE(6, 16), b0.hI.aB8(), b0.ba.send(0, hD.bG)
	}, this.aDt = function(vU) {
		hD.eR(115), hD.hE(1, 0), hD.hE(6, 17), un.uo.wJ(aS.ai.data[105].value, 5), un.uo.wJ(aS.ai.data[106].value, 8), hD.hE(30, aS.ai.data[109].value), b0.ba.send(vU, hD.bG)
	}, this.aFZ = function() {
		hD.eR(55), hD.hE(1, 0), hD.hE(6, 18), un.uo.hQ(aS.ai.data[110].value), b0.ba.send(0, hD.bG)
	}, this.aFV = function(username) {
		hD.eR(12 + 16 * username.length), hD.hE(1, 0), hD.hE(6, 20), b0.hI.hJ(username), b0.ba.send(0, hD.bG)
	}
}

function aH2() {
	var aJ9 = !1,
		bt = 0,
		aZ = 0,
		fE = 0,
		gap = 0,
		ij = null,
		iv = null,
		uL = null;

	function aJB() {
		for (var ks, aJE = 0, s = 0, aJ = Math.floor(aZ / 2), jR = Math.floor(fE / 2), kr = 1.5 * Math.PI, j = ay.dn; 0 <= j; j--) s += uL[j], 0 === uL[j] && aJE++;
		if (aJ9 = !1, iv.clearRect(0, 0, aZ, aZ), iv.fillStyle = aC.fr, iv.fillRect(0, 0, aZ, aZ), iv.fillStyle = aC.aD, iv.fillRect(0, 0, aZ, gap), iv.fillRect(0, 0, gap, aZ), iv.fillRect(aZ - gap, 0, gap, aZ), iv.fillRect(0, aZ - gap, aZ, gap), 0 <
			s)
			if (aJE === ay.dn) {
				for (j = ay.dn; 0 <= j; j--)
					if (0 < uL[j]) {
						! function(j, aJ, jR) {
							iv.fillStyle = dV.kw[dV.nv[j]], iv.beginPath(), iv.arc(aJ, aJ, jR, 0, 2 * Math.PI), iv.fill()
						}(j, aJ, jR);
						break
					}!
				function(aJ) {
					var fontSize = aJ / 3;
					iv.font = aL.ab.bz(1, fontSize), iv.fillStyle = aC.aD, iv.fillText("100%", aJ, aJ + .1 * fontSize)
				}(aJ)
			} else {
				for (j = 0; j <= ay.dn; j++) 0 < uL[j] && (! function(j, aJ, jR, kr, ks) {
					iv.fillStyle = dV.kw[dV.nv[j]], iv.beginPath(), iv.arc(aJ, aJ, jR, kr, ks), iv.lineTo(aJ, aJ), iv.fill()
				}(j, aJ, jR, kr, ks = kr + 2 * Math.PI * uL[j] / s), function(aJ, jR, kr, ks) {
					var y = (ks - kr) / (2 * Math.PI),
						fontSize = +jR * Math.min(y, .37);
					fontSize < 8 || (kr = (kr + ks) / 2, ks = Math.floor(100 * y + .5) + "%", jR *= .525 - Math.max(.6 * (y - .7), 0), iv.font = aL.ab.bz(1, fontSize), iv.fillStyle = aC.aD, iv.fillText(ks, aJ + Math.cos(kr) * jR, aJ + Math
						.cos(kr + 1.5 * Math.PI) * jR))
				}(aJ, jR, kr, ks), 0 !== j && ku(aJ, jR, kr), kr = ks);
				ku(aJ, jR, 1.5 * Math.PI)
			}!
		function(aJ, jR) {
			iv.beginPath(), iv.arc(aJ, aJ, jR, 0, 2 * Math.PI), iv.stroke()
		}(aJ, jR)
	}

	function ku(aJ, jR, kx) {
		iv.beginPath(), iv.moveTo(aJ, aJ), iv.lineTo(aJ + Math.cos(kx) * jR, aJ + Math.cos(kx + 1.5 * Math.PI) * jR), iv.stroke()
	}
	this.aB = function() {
		if (ay.dT) {
			var j;
			for (bt = 0, uL = new Uint32Array(ay.dn + 1), j = ay.dn; 0 <= j; j--) uL[j] = 0;
			for (j = bd - 1; 0 <= j; j--) uL[dV.dW[rs[j]]] += 1;
			this.resize()
		} else uL = iv = ij = null
	}, this.aCH = function() {
		return aZ
	}, this.resize = function() {
		ay.dT && (aZ = Math.floor(bw.bx.by() && !ay.dk ? .18 * ad.min : .13 * ad.ae), aZ = (aZ *= 1 + (.5 + .2 * bw.bx.by()) * ay.dk) + aZ % 2, fE = Math.floor(7 * aZ / 8), (ij = ij || document.createElement("canvas")).width = aZ, ij.height = aZ,
			iv = ij.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * aZ), iv.lineWidth = gap, iv.strokeStyle = aC.aD, aL.ab.textAlign(iv, 1), aL.ab.textBaseline(iv, 1), aJB())
	}, this.uY = function() {
		return uL[this.mv()]
	}, this.u3 = function() {
		return bt = 31, this.bF(), this.mv()
	}, this.mv = function() {
		for (var aJC = 0, j = ay.dn; 0 < j; j--) uL[j] > uL[aJC] && (aJC = j);
		return aJC
	}, this.bF = function() {
		if (ay.dT && 32 <= ++bt) {
			var j;
			for (bt = 0, j = ay.dn; 0 <= j; j--) uL[j] = 0;
			for (j = bd - 1; 0 <= j; j--) uL[dV.dW[rs[j]]] += bV.bX[rs[j]];
			aJ9 = !0
		}
	}, this.fp = function() {
		ay.dT && aJ9 && aJB()
	}, this.c9 = function() {
		ay.dT && (ay.dk ? cA.drawImage(ij, af.gap, af.gap) : cA.drawImage(ij, af.gap, a9u + 2 * af.gap))
	}
}

function aH6() {
	aG9 = 8, aG7 = 0, aG8 = new Uint16Array(aG9)
}

function eM() {
	oS = ay.dT ? new Uint8Array(ay.cU) : null
}

function qE(player, co) {
	var a6t;
	ay.dT && (oS[player] = 0), !eq.a4X(player) || co < 60 || (0 === bV.a2N[player].length ? bZ.nL.bF(player) || (eP.qA(player - ay.dc, 200), aHQ(player, co, eP.co[player - ay.dc], eL.lw(player))) : 0 < bV.i5[player].length && eC.random() < eC.value(
		bV.i5[player].length > bV.a2N[player].length ? 7 : 3) && bZ.nL.bF(player) || (a6t = eL.lw(player), bV.bY[player] > a6t && co < bV.bY[player] - a6t && (co = bV.bY[player] - a6t), ay.dT ? aJI(player, co, eP.co[player - ay.dc], a6t) :
		aJJ(player, co, eP.co[player - ay.dc])))
}

function aJI(player, co, aJK, a6t) {
	var a0v;
	aG4(player, !1) || aGA(player, !1) ? (oS[player] = 1, aGC(player) || (aGB() ? (aJL(player, co), aJM(player, ay.cU, aJK)) : (eC.a2L(eP.q4[aJK]) ? aJN(player, co, a0v = aGF(player)) : (aGD() && eC.a2L(eP.q2[aJK]) && aGE(), aJN(player, co, a0v =
		aGI(player))), aJM(player, a0v, aJK)))) : 0 < bV.i5[player].length && eC.random() < eC.value(60) && bZ.nL.bF(player) || (eP.qA(player - ay.dc, 200), aHQ(player, co, aJK, a6t))
}

function aHR(player, co) {
	aG4(player, !1) || aGA(player, !1) ? (oS[player] = 1, aGB() ? aJL(player, co) : aJN(player, co, aGN())) : aHQ(player, co, 0, 0)
}

function aJM(player, a0v, aJK) {
	3 <= aJK && 2142 < c0.ci() && (a0v === ay.cU || bV.bY[a0v] < a4(bV.bY[player], 20)) && eP.qA(player - ay.dc, 25)
}

function aHQ(player, co, aJK, a6t) {
	var j, d9, aJ;
	if (0 !== dV.dW[player] && !(5 === aJK && bV.bY[player] < a6t || 4 === aJK && bV.bY[player] < a4(a6t, 2)))
		for (j = eC.h1(bd), d9 = 0; d9 < bd; d9++)
			if (aJ = rs[(d9 + j) % bd], dV.dW[aJ] === dV.dW[player] && 1 === oS[aJ]) return void bg.a10.oO(player, aJ, co)
}

function aJJ(player, co, aJK) {
	!aG4(player, !0) && !aGA(player, !0) || aGC(player) || (aGB() ? aJL(player, co) : eC.a2L(eP.q4[aJK]) ? aJN(player, co, aGF(player)) : (aGD() && eC.a2L(eP.q2[aJK]) && aGE(), aJN(player, co, aGI(player))))
}

function aHS(player, co) {
	(aG4(player, !0) || aGA(player, !0)) && (aGB() ? aJL(player, co) : aJN(player, co, aGN()))
}

function aJN(player, co, a0v) {
	a4(bV.bY[player], 8) > bV.bY[a0v] && (co = (a4V = a4(11 * bV.bY[a0v], 5)) < co ? co : a4V);
	var a4V = bV.x9[player].length;
	aG0(player, a0v), aG2(player, a0v, a4V, co)
}

function aJL(player, co) {
	var a0v = ay.cU,
		s = bV.x9[player].length;
	return aFz(player), bV.x9[player].length !== s && (aG2(player, a0v, s, co), !0)
}

function a6R() {
	var aJQ, j, a1d = document.createElement("div"),
		aJO = document.createElement("div"),
		aJP = document.createElement("div"),
		aCg = document.createElement("div"),
		a2r = [],
		sq = ["Best 1v1 Player", "Top Clan", "Leading Clan Member"],
		jl = [1, 0, 2];

	function aJR(j) {
		ak.am(8, ak.yO().yP, new qy(21, {
			hA: jl[j],
			hB: 0,
			hC: 9
		}))
	}
	for (this.show = function() {
			this.aU(ak.ba.a5Y), document.body.appendChild(a1d)
		}, this.fb = function() {
			document.body.removeChild(a1d)
		}, this.aU = function(a5Y) {
			for (var j = 0; j < a2r.length; j++) a2r[jl[j]].button.innerHTML = sq[j] + "<br>" + a5Y[j]
		}, this.resize = function() {
			var j, xB = af.gap,
				aa = aL.ab.sn(.085),
				aZ = Math.min(4 * aa, ad.aZ - 2 * xB),
				s = a2r.length;
			for (aL.ab.sj(a1d, xB, ad.aa - xB - aa, aZ, aa), aL.ab.sg(a1d), aL.ab.sg(aJO, 6), j = 0; j < s - 1; j++) aL.ab.sg(a2r[j].button, 6);
			for (j = 0; j < s; j++) a2r[j].button.style.fontSize = aL.ab.sl(.22 * aa);
			if (!aJQ) {
				if (!iw.zZ()) return;
				(aJQ = iw.get(14)).style.width = "24%", aJQ.style.position = "absolute", aJO.appendChild(aJQ)
			}
			aJQ.style.left = aL.ab.sh(0), aJQ.style.top = "7%"
		}, a1d.style.position = "absolute", aJO.style.width = "25%", aJO.style.height = "100%", aJO.style.backgroundColor = aC.aF, aJP.style.position = "absolute", aJP.style.width = "75%", aJP.style.height = "100%", aJP.style.backgroundColor = aC.aF,
		aJP.style.top = aJP.style.right = aL.ab.sh(0), aJP.style.overflowX = "auto", aJP.style.overflowY = "hidden", aJP.style.whiteSpace = "nowrap", aCg.style.height = aCg.style.maxHeight = "100%", a2r.push(new a5("", function() {
			aJR(0)
		}, aC.a80)), a2r.push(new a5("", function() {
			aJR(1)
		}, aC.lZ)), a2r.push(new a5("", function() {
			aJR(2)
		}, aC.a6U)), j = 0; j < a2r.length; j++) a2r[j].button.style.height = "100%", aCg.appendChild(a2r[j].button);
	aJP.appendChild(aCg), a1d.appendChild(aJO), a1d.appendChild(aJP)
}

function a4(jy, d9) {
	return Math.floor(jy / d9 + 1 / (2 * d9))
}

function a1(jy, d9) {
	return 0 <= jy ? a4(jy, d9) : -a4(-jy, d9)
}

function aGM(y) {
	return y * y
}

function io(jy, d9) {
	return d9 < jy ? jy : d9
}

function im(jy, d9) {
	return jy < d9 ? jy : d9
}

function aAf(jy, y, d9) {
	return y < jy ? jy : d9 < y ? d9 : y
}

function aJS(y, s) {
	for (var aJ = a4(y + 1, 2), j = 0; j < s; j++) aJ = a4(aJ + a4(y, aJ), 2);
	return aJ
}

function a6o(y, s) {
	return y < 1 ? 0 : aJS(y, s)
}

function aJT(dH, dI, fE, fI, gQ, gR, fF, fJ) {
	return !(dH + fE <= gQ || dI + fI <= gR || gQ + fF <= dH || gR + fJ <= dI)
}

function aJU(dH, dI, fE, fI, gQ, gR, fF, fJ) {
	return dH <= gQ && dI <= gR && gQ + fF <= dH + fE && gR + fJ <= dI + fI
}

function aDK(y) {
	return Math.floor(!!y * (1 + Math.log2(y + .5)))
}

function e8() {
	this.a1I = function(player, i1) {
		eS.a49(player, cY.hr(i1), cY.hs(i1)) && (c0.c1 = !0), ay.bB && this.bF()
	}, this.bF = function() {
		ay.dl = !1;
		for (var j = 0; j < ay.dc; j++) 0 !== bV.bW[j] && 0 === bV.bX[j] && eS.a4D(j);
		0 !== bV.bW[ay.az] ? (eG.g8[7] = bV.bX[ay.az], eG.g8[8] = bV.bY[ay.az], ed.qc(), eh.ws(), ay.bC || f0.a0J(bV.jI[ay.az] - 5, bV.jJ[ay.az] - 5, bV.jK[ay.az] + 5, bV.jL[ay.az] + 5), ez.aB()) : el.show(!1, !1, !1, !0), aw.a8v(18), er.ri(), er
			.f2(!0), eX.ba.a1r(), ay.dr = null, eK.tG = !0, eK.tI(), ay.bB && bw.bx.setState(1)
	}
}

function a9k() {
	var vU, yP, aAm, aJV = ["wss://", "/s50/", "/s51/", "/s52/"];

	function a9l() {
		b0.ba.a9l(vU, yP)
	}

	function aJa(aR) {
		b0.a1T.vT(vU, new Uint8Array(aR.data))
	}

	function aJb() {}

	function a9s(aR) {
		b0.ba.a9s(vU, aR)
	}
	this.aB = function(a3, aJW) {
		vU = a3, yP = aJW;
		a3 = aJV[0];
		vU < b0.ba.a1X ? a3 += b0.ba.a9Y[vU] + aJV[1 + e9] : a3 += b0.ba.a9Y[0] + "/i" + (1 + e9) + (vU - b0.ba.vx) + "/", (aAm = new WebSocket(a3)).binaryType = "arraybuffer", aAm.onopen = a9l, aAm.onmessage = aJa, aAm.onclose = a9s, aAm
			.onerror = aJb
	}, this.aJY = function() {
		return aAm.readyState === aAm.CONNECTING
	}, this.a9e = function() {
		return aAm.readyState === aAm.OPEN
	}, this.a9h = function() {
		return this.aJY() || this.a9e()
	}, this.a9i = function(aJW) {
		yP = aJW
	}, this.aDu = function() {
		return yP
	}, this.send = function(bG) {
		this.a9e() && aAm.send(bG)
	}, this.close = function(a9o) {
		this.a9h() && (aAm.close(a9o), this.fb())
	}, this.fb = function() {
		aAm.onopen = null, aAm.onmessage = null, aAm.onclose = null, aAm.onerror = null
	}
}

function aGo() {
	var aJc, aJd, aJe;

	function aJj(j) {
		var button = lJ.a2r[j],
			k = button.k,
			l = button.l,
			aZ = button.aZ,
			aa = button.aa;
		cA.fillStyle = button.aJh, cA.fillRect(k, l, aZ, aa), j === aJc && (cA.fillStyle = aJe, cA.fillRect(k, l, aZ, aa)), cA.lineWidth = af.k5, cA.strokeStyle = aJd, cA.strokeRect(k, l, aZ, aa),
			function(button) {
				var k = button.k,
					l = button.l,
					aZ = button.aZ,
					aa = button.aa;
				aL.ab.textAlign(cA, 1), aL.ab.textBaseline(cA, 1), cA.font = button.font, cA.fillStyle = aJd, cA.fillText(button.aQ, Math.floor(k + aZ / 2), Math.floor(l + aa / 2 + .1 * button.fontSize))
			}(button)
	}
	this.aZ = 0, this.aa = 0, this.l = 0, this.gap = 0, this.aB = function() {
		aJc = -1, aJd = aC.aD, aJe = "rgba(255,255,255,0.16)", this.a2r = new Array(7), this.aa = Math.floor((bw.bx.by() ? .123 : .093) * ad.ae), this.aZ = Math.floor((bw.bx.by() ? 3.96 : 4.2) * this.aa), this.gap = Math.floor(.025 * this.aZ);
		var aJf = Math.floor(.26 * this.aa),
			aJg = aL.ab.bz(1, aJf);
		this.a2r[0] = {
			k: 0,
			l: 0,
			aZ: Math.floor(.6 * this.aZ - this.gap / 2),
			aa: this.aa,
			aQ: "Multiplayer",
			font: aJg,
			aJh: "rgba(22,88,22,0.8)",
			fontSize: aJf
		}, aJf = Math.floor(.18 * this.aa), aJg = aL.ab.bz(1, aJf), this.a2r[1] = {
			k: 0,
			l: 0,
			aZ: this.aZ - this.a2r[0].aZ - this.gap,
			aa: this.aa,
			aQ: "Single Player",
			font: aJg,
			aJh: "rgba(22,88,88,0.8)",
			fontSize: aJf
		}, this.a2r[2] = {
			k: 0,
			l: 0,
			aZ: this.aZ,
			aa: Math.floor(.3 * this.aa),
			aQ: "",
			font: this.a2r[1].font,
			aJh: "rgba(100,0,0,0.8)",
			fontSize: this.a2r[1].fontSize
		}, this.a2r[3] = {
			k: 0,
			l: 0,
			aZ: this.aZ,
			aa: this.aa,
			aQ: "Back",
			font: this.a2r[0].font,
			aJh: "rgba(0,0,0,0.8)",
			fontSize: this.a2r[0].fontSize
		}, this.a2r[4] = {
			k: 0,
			l: 0,
			aZ: this.aZ,
			aa: Math.floor(.3 * this.aa),
			aQ: "The game was updated!",
			font: this.a2r[1].font,
			aJh: "rgba(100,0,0,0.8)",
			fontSize: this.a2r[1].fontSize
		}, this.a2r[5] = {
			k: 0,
			l: 0,
			aZ: this.a2r[0].aZ,
			aa: Math.floor(.8 * this.aa),
			aQ: "Reload",
			font: this.a2r[0].font,
			aJh: "rgba(0,100,0,0.8)",
			fontSize: this.a2r[0].fontSize
		}, this.a2r[6] = {
			k: 0,
			l: 0,
			aZ: this.a2r[1].aZ,
			aa: this.a2r[5].aa,
			aQ: "Back",
			font: this.a2r[0].font,
			aJh: "rgba(0,0,0,0.8)",
			fontSize: this.a2r[0].fontSize
		}, this.aBo()
	}, this.aBo = function() {
		this.l = Math.floor(.54 * ad.aa), this.a2r[0].k = Math.floor(.5 * ad.aZ - .5 * this.aZ), this.a2r[1].k = this.a2r[0].k + this.a2r[0].aZ + this.gap, this.a2r[2].k = this.a2r[3].k = this.a2r[0].k, this.a2r[4].k = this.a2r[5].k = this.a2r[0]
			.k, this.a2r[6].k = this.a2r[1].k, this.a2r[0].l = Math.floor(.54 * ad.aa), this.a2r[1].l = this.a2r[0].l, this.a2r[2].l = Math.floor((ad.aa - this.a2r[2].aa - this.a2r[3].aa - this.gap) / 2), this.a2r[3].l = this.a2r[2].l + this.a2r[
				2].aa + this.gap, this.a2r[4].l = Math.floor((ad.aa - this.a2r[4].aa - this.a2r[5].aa - this.gap) / 2), this.a2r[5].l = this.a2r[6].l = this.a2r[4].l + this.a2r[4].aa + this.gap
	}, this.aJi = function() {
		aJj(0), aJj(1)
	}, this.aJk = function() {
		aJj(2), aJj(3)
	}, this.aJl = function() {
		aJj(4), aJj(5), aJj(6)
	}, this.fi = function(k, l, f2) {
		var j = -1;
		return 0 === cB.cC() ? j = this.qd(k, l, 0, 2) : 3 === cB.cC() ? j = this.qd(k, l, 3, 1) : 5 === cB.cC() && (j = this.qd(k, l, 5, 2)), aJc !== j && (aJc = j, f2) && (c0.c1 = !0), -1 !== j && (vp.gk(), !0)
	}, this.qd = function(k, l, aIr, size) {
		for (var j = aIr; j < aIr + size; j++)
			if (k >= this.a2r[j].k && l >= this.a2r[j].l && k <= this.a2r[j].k + this.a2r[j].aZ && l <= this.a2r[j].l + this.a2r[j].aa) return j;
		return -1
	}
}

function aGz() {
	this.size = 0, this.a3 = 0, this.bG = null, this.aB = function(bG) {
		this.a3 = 0, this.bG = bG, this.size = bG.length
	}, this.kj = function() {
		this.bG = null
	}, this.bK = function(size) {
		for (var y = 0, bG = this.bG, bI = this.a3 + size - 1, j = this.a3; j <= bI; j++) y |= (bG[j >> 3] >> 7 - (7 & j) & 1) << bI - j;
		return this.a3 += size, this.a3 > 8 * this.size && console.log("error unwrapper"), y
	}, this.a8I = function(size) {
		var d9 = size >> 1;
		return (1 << d9) * this.bK(size - d9) + this.bK(d9)
	}, this.aJn = function(size) {
		for (var g3 = new Array(size), j = 0; j < size; j++) g3[j] = this.bK(10);
		return oq.t7(g3)
	}, this.a8G = function(aIv) {
		return this.size === hD.a8F(aIv)
	}
}

function aGu() {
	var aJo, aJp, o8, aEK;
	this.aB = function() {
		var j, k, l, nu, aJq, aZ, aa, iv, gh, kp, y, i0, dM, jy, pp;
		if (function() {
				if (o8 = !0, aEK = "rgb(" + b.go[0] + "," + b.go[1] + "," + b.go[2] + ")", b.aAk(b.c)) return 1;
				return o8 = !1, 0
			}()) aJp = null;
		else {
			for (aJo = a4(96, 4), aJq = 1 === b.c ? (nu = 0, 160) : (nu = 128, 32), aEK = "rgb(" + nu + "," + nu + "," + nu + ")", aJp = new Array(4), j = 3; 0 <= j; j--) {
				if (aJp[j] = document.createElement("canvas"), aZ = j % 2 == 0 ? b.o : aJo, aa = j % 2 == 0 ? aJo : b.p + 2 * aJo, aJp[j].width = aZ, aJp[j].height = aa, kp = (gh = (iv = aJp[j].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, aZ, aa)).data, j % 2 == 0)
					for (l = aJo - 1; 0 <= l; l--)
						for (y = aJq + Math.floor((l + 1) * (nu - aJq) / (aJo + 1)), k = aZ - 1; 0 <= k; k--) kp[i0 = 4 * ((0 === j ? aJo - l - 1 : l) * aZ + k)] = y, kp[i0 + 1] = y, kp[i0 + 2] = y, kp[i0 + 3] = 255;
				else {
					for (k = aJo - 1; 0 <= k; k--)
						for (y = aJq + Math.floor((k + 1) * (nu - aJq) / (aJo + 1)), l = aa - 1 - aJo; aJo <= l; l--) kp[i0 = 4 * (l * aZ + (3 === j ? aJo - k - 1 : k))] = y, kp[i0 + 1] = y, kp[i0 + 2] = y, kp[i0 + 3] = 255;
					for (jy = 1; 0 <= jy; jy--)
						for (k = aJo - 1; 0 <= k; k--)
							for (l = aJo - 1; 0 <= l; l--) dM = (Math.pow(k * k + l * l, .5) + 1) / (aJo + 1), y = aJq + Math.floor((1 < dM ? 1 : dM) * (nu - aJq)), kp[i0 = 4 * ((0 === jy ? aJo - l - 1 : l + jy * (aa - aJo)) * aZ + (1 === j ? k :
								aJo - k - 1))] = y, kp[i0 + 1] = y, kp[i0 + 2] = y, kp[i0 + 3] = 255
				}
				iv.putImageData(gh, 0, 0)
			}
			pp = aJq, b.gn.fillStyle = "rgb(" + pp + "," + pp + "," + pp + ")", b.gn.fillRect(0, 0, b.o, 1), b.gn.fillRect(0, b.p - 1, b.o, 1), b.gn.fillRect(0, 0, 1, b.p), b.gn.fillRect(b.o - 1, 0, 1, b.p)
		}
	}, this.a1Z = function() {
		var jy = o8 ? 0 : -aJo;
		aJU(jy, jy, b.o - 2 * jy, b.p - 2 * jy, oM.kD, oM.kE, oM.kF, oM.kG) || (cA.fillStyle = aEK, cA.fillRect(0, 0, ad.aZ, ad.aa))
	}, this.c9 = function() {
		o8 || (aJT(0, -aJo, b.o, aJo, oM.kD, oM.kE, oM.kF, oM.kG) && cA.drawImage(aJp[0], oM.kB, oM.kC - aJo), aJT(b.o, -aJo, aJo, b.p + 2 * aJo, oM.kD, oM.kE, oM.kF, oM.kG) && cA.drawImage(aJp[1], oM.kB + b.o, oM.kC - aJo), aJT(0, b.p, b.o, aJo,
			oM.kD, oM.kE, oM.kF, oM.kG) && cA.drawImage(aJp[2], oM.kB, oM.kC + b.p), aJT(-aJo, -aJo, aJo, b.p + 2 * aJo, oM.kD, oM.kE, oM.kF, oM.kG) && cA.drawImage(aJp[3], oM.kB - aJo, oM.kC - aJo))
	}
}

function aFR() {
	this.vg = function() {
		aS.ba.aGZ(), aS.aT.aU(105, hO.uo.aDc(hO.uo.aDa(5))), aS.aT.aU(106, hO.uo.aDc(hO.uo.aDa(8))), aS.aT.aU(109, bJ.bK(30)), aS.aT.aU(108, aS.ai.data[109].value), aS.aT.aU(111, aS.ai.data[109].value + 1), aS.aT.aU(107, 0), aS.aT.aU(110, "")
	}, this.vi = function() {
		var aJt, aJu, aJv;
		bJ.size < hD.a8F(18) ? b0.ba.vV(0, 3254) : (aJt = bJ.bK(5), aJu = bJ.bK(3), aJv = bJ.bK(3), bJ.a8G(186 + 16 * (aJt + aJu + aJv) + 32 + 32 + 30 + 128) ? (aS.aT.aU(109, bJ.bK(30)), aS.aT.aU(107, bJ.bK(16)), aS.aT.aU(108, bJ.bK(30)), aS.aT
			.aU(112, bJ.bK(30)), aS.aT.aU(111, bJ.bK(30)), aS.aT.aU(113, bJ.a8I(32)), aS.aT.aU(122, un.hP.v7(aJt)), aS.aT.aU(135, un.hP.v7(aJu)), aS.aT.aU(136, un.hP.v7(aJv)), aS.aT.aU(137, bJ.a8I(32)), aS.aT.aU(138, bJ.a8I(32)), aS.aT
			.aU(139, bJ.bK(30)), aS.aT.aU(141, bJ.a8I(32)), aS.aT.aU(142, bJ.a8I(32)), aS.aT.aU(143, bJ.a8I(32)), aS.aT.aU(144, bJ.a8I(32)), 8 === ak.a5f && ak.yO().a8J(16, !0)) : b0.ba.vV(0, 3267))
	}
}

function aFM() {
	this.a9f = function(vU, a9b) {
		hD.eR(8), hD.hE(1, 0), hD.hE(6, 4), hD.hE(1, a9b ? 1 : 0), b0.ba.send(vU, hD.bG)
	}, this.w1 = function() {
		hD.eR(58), hD.hE(1, 0), hD.hE(6, 5), hD.hE(8, b0.ba.a9d()), hD.hE(10, vc.vy), hD.hE(9, vc.vz), hD.hE(10, m2), hD.hE(14, aAr.m5), b0.ba.send(b0.ba.od, hD.bG)
	}, this.aJw = function(i1) {
		hD.eR(27), hD.hE(1, 1), hD.hE(4, 0), hD.hE(22, i1), b0.ba.send(b0.ba.od, hD.bG)
	}, this.aJx = function(iQ, a0v) {
		hD.eR(25), hD.hE(1, 1), hD.hE(4, 1), hD.hE(10, iQ), hD.hE(10, a0v), b0.ba.send(b0.ba.od, hD.bG)
	}, this.aJy = function(iQ, oP) {
		hD.eR(24), hD.hE(1, 1), hD.hE(4, 2), hD.hE(10, iQ), hD.hE(9, oP), b0.ba.send(b0.ba.od, hD.bG)
	}, this.aJz = function(iQ, i1) {
		hD.eR(37), hD.hE(1, 1), hD.hE(4, 3), hD.hE(10, iQ), hD.hE(22, i1), b0.ba.send(b0.ba.od, hD.bG)
	}, this.aK0 = function(a7l, i1) {
		hD.eR(37), hD.hE(1, 1), hD.hE(4, 4), hD.hE(10, a7l), hD.hE(22, i1), b0.ba.send(b0.ba.od, hD.bG)
	}, this.aK1 = function(a0v) {
		hD.eR(15), hD.hE(1, 1), hD.hE(4, 5), hD.hE(10, a0v), b0.ba.send(b0.ba.od, hD.bG)
	}, this.aK2 = function(a3) {
		hD.eR(15), hD.hE(1, 1), hD.hE(4, 6), hD.hE(10, a3), b0.ba.send(b0.ba.od, hD.bG)
	}, this.aK3 = function(a7n) {
		hD.eR(6), hD.hE(1, 1), hD.hE(4, 7), hD.hE(1, a7n), b0.ba.send(b0.ba.od, hD.bG)
	}, this.aK4 = function() {
		hD.eR(5), hD.hE(1, 1), hD.hE(4, 8), b0.ba.send(b0.ba.od, hD.bG)
	}, this.b2 = function(aK5, aK6) {
		hD.eR(24), hD.hE(1, 1), hD.hE(4, 15), hD.hE(9, aK6), hD.hE(10, aK5), b0.ba.send(b0.ba.od, hD.bG)
	}, this.b5 = function(a1T) {
		hD.eR(14), hD.hE(1, 1), hD.hE(4, 14), hD.hE(9, a1T), b0.ba.send(b0.ba.od, hD.bG)
	}, this.b9 = function(aK7, target) {
		var j, s = aK7.length;
		for (hD.eR(14 + 9 * s), hD.hE(1, 1), hD.hE(4, 13), hD.hE(9, target), j = 0; j < s; j++) hD.hE(9, aK7[j]);
		b0.ba.send(b0.ba.od, hD.bG)
	}
}

function aAq() {
	this.size = 0, this.a3 = 0, this.bG = null, this.aB = function(bG) {
		this.a3 = 0, this.bG = bG, this.size = bG.length
	}, this.eR = function(aIv) {
		return this.aB(new Uint8Array(this.a8F(aIv))), this.bG
	}, this.kj = function() {
		this.bG = null
	}, this.hE = function(size, c8) {
		for (var bG = this.bG, bI = this.a3 + size - 1, j = this.a3; j <= bI; j++) bG[j >> 3] |= (c8 >> bI - j & 1) << 7 - (7 & j);
		this.a3 += size, this.a3 > 8 * this.size && console.log("error wrapper")
	}, this.aK8 = function(size, c8) {
		var d9 = size >> 1,
			d0 = 1 << d9;
		this.hE(size - d9, d4.d5(c8, d0)), this.hE(d9, c8 % d0)
	}, this.aK9 = function(size) {
		for (var bG = this.bG, bI = this.a3 + size, j = this.a3; j < bI; j++) bG[j >> 3] &= 255 ^ 128 >>> (7 & j)
	}, this.a8F = function(aIv) {
		return aIv + 7 >> 3
	}, this.aKA = function(g3, jO, bI, aKB) {
		for (var j = jO; j < bI; j++) this.hE(aKB, g3[j])
	}
}

function aGn() {
	var a8W, aKC, li, aa, wg;

	function aKE(j) {
		var aKF = !0,
			ht = aC.aD,
			aZ = (a8W[j].a0v === ay.cU ? a8W[j].iv.fillStyle = aC.a7t : (eN.nt(a8W[j].a0v), a8W[j].iv.fillStyle = aL.color.a5A(ca.mB[0], ca.mB[1], ca.mB[2], .87), 400 < aL.a1z.uK(ca.mB, 0, 2) && (aKF = !1, ht = aC.cF)), a8W[j].ij.width),
			fE = (a8W[j].iv.clearRect(0, 0, aZ, aa), a8W[j].iv.fillRect(0, 0, aZ, aa), a8W[j].iv.fillStyle = ht, ! function(iv, aZ, aa) {
				iv.fillRect(0, 0, aZ, 1), iv.fillRect(0, aa - 1, aZ, 1), iv.fillRect(0, 0, 1, aa), iv.fillRect(aZ - 1, 0, 1, aa)
			}(a8W[j].iv, aZ, aa), aKC + 2 * aa < aZ && (a8W[j].iv.fillRect(aZ - aKC - aa, 0, 1, aa), a8W[j].iv.fillText(bV.mU[a8W[j].a0v], Math.floor((aZ - aKC) / 2), Math.floor(.57 * aa))), 0 !== a8W[j].id ? 0 : aa);
		a8W[j].iv.fillText(aL.fm.fn(a8W[j].co), Math.floor(aZ - aKC / 2 - fE), Math.floor(.57 * aa)),
			function(j, aZ, fE, aKF) {
				a8W[j].iv.fillStyle = aKF ? aC.lg : aC.jn;
				aKF = Math.floor(aKC * a8W[j].co / a8W[j].aKK);
				a8W[j].iv.fillRect(Math.floor(aZ - aKC - fE), aa - wg, aKF, wg)
			}(j, aZ, fE, aKF), 0 === a8W[j].id ? (aKI(j, aZ, aKF, ht), function(j, aZ, aKF) {
				a8W[j].iv.strokeStyle = aKF ? aC.a3n : aC.a7y, a8W[j].iv.fillRect(aa, 0, 1, aa);
				aKF = aZ - aa;
				a8W[j].iv.beginPath(), a8W[j].iv.moveTo(Math.floor(.3 * aa + aKF), Math.floor(aa / 2)), a8W[j].iv.lineTo(Math.floor(aa - .3 * aa + 0 + aKF), Math.floor(aa / 2)), a8W[j].iv.stroke(), a8W[j].iv.beginPath(), a8W[j].iv.moveTo(Math
					.floor(aa / 2 + aKF), Math.floor(.3 * aa)), a8W[j].iv.lineTo(Math.floor(aa / 2 + aKF), Math.floor(aa - .3 * aa + 0)), a8W[j].iv.stroke()
			}(j, aZ, aKF)) : aKI(j, 2 * aa, aKF, ht)
	}

	function aKI(j, aZ, aKF, ht) {
		a8W[j].iv.strokeStyle = a8W[j].aKL ? aC.a7s : aKF ? aC.gC : aC.gB, a8W[j].iv.fillStyle = ht, a8W[j].iv.fillRect(aZ - aa, 0, 1, aa), a8W[j].iv.lineWidth = Math.max(Math.floor(aa / 12), 3), a8W[j].iv.lineCap = "round";
		aKF = .35;
		aZ = aa + 1, a8W[j].iv.beginPath(), a8W[j].iv.moveTo(Math.floor(aZ - aKF * aa + 0), Math.floor(aKF * aa)), a8W[j].iv.lineTo(Math.floor(aZ - aa + aKF * aa), Math.floor(aa - aKF * aa + 0)), a8W[j].iv.stroke(), a8W[j].iv.beginPath(), a8W[j].iv
			.moveTo(Math.floor(aZ - aa + aKF * aa), Math.floor(aKF * aa)), a8W[j].iv.lineTo(Math.floor(aZ - aKF * aa + 0), Math.floor(aa - aKF * aa + 0)), a8W[j].iv.stroke()
	}

	function aKW(s) {
		for (var co, j = s - 1; 0 <= j; j--) co = eq.nI(ay.az, j), a8W[j].co !== co && (a8W[j].co = co, a8W[j].aKK = co > a8W[j].aKK ? co : a8W[j].aKK, a8W[j].ll = !0)
	}

	function aKD(aKY) {
		aKY.ij = document.createElement("canvas"), b.gn.font = li;
		var aZ = aKC;
		aKY.a0v < ay.cU && 0 === aKY.id && (aZ += Math.floor(b.gn.measureText(bV.mU[aKY.a0v] + "000").width)), aZ += aa, 0 === aKY.id && (aZ += aa), aKY.ij.width = aZ, aKY.ij.height = aa, aKY.iv = aKY.ij.getContext("2d", {
			alpha: !0
		}), aKY.iv.font = li, aL.ab.textBaseline(aKY.iv, 1), aL.ab.textAlign(aKY.iv, 1)
	}

	function aKS(j) {
		return eg.lr() ? ad.aZ - a8W[j].ij.width - af.gap : eg.k
	}

	function aKT(j) {
		return Math.floor(2 * af.gap + (eg.lr() ? eh.aa + af.gap : 0) + eg.aa + j * (1.3 * aa))
	}
	this.aB = function() {
		a8W = [], this.resize()
	}, this.resize = function() {
		li = aw.li, aa = aw.fontSize + 5, aa = Math.floor(1.25 * aa), bw.bx.by() && (aa = Math.floor(1.25 * aa)), wg = Math.floor(.15 * aa), b.gn.font = li, aKC = Math.floor(b.gn.measureText("02 000 000 0000").width);
		for (var j = a8W.length - 1; 0 <= j; j--) aKD(a8W[j]), aKE(j)
	}, this.f2 = function() {
		for (var j = a8W.length - 1; 0 <= j; j--) a8W[j].ll && (a8W[j].ll = !1, aKE(j))
	}, this.fW = function(fX, l) {
		if (2 !== ay.di && 0 !== bV.bW[ay.az] && !ay.bC && eN.o0(ay.az))
			for (var aKN, aKO, aKP, aKQ = bw.bx.by() ? aa : 0, aKR = bw.bx.by() ? Math.floor(.15 * aa) : 0, j = a8W.length - 1; 0 <= j; j--)
				if (aKN = aKS(j), aKO = aKT(j), aKP = a8W[j].ij.width, aKO - aKR <= l && l <= aKO + aa + aKR) {
					if (aKN - aKQ <= fX && fX <= aKN + aa + aKQ) return a8W[j].aKL || (a8W[j].ll = !0, a8W[j].aKL = !0, 0 === a8W[j].id && bg.k4.bn(a8W[j].a0v)), !0;
					if (0 === a8W[j].id && aKN + aKP - aa - aKQ <= fX && fX <= aKN + aKP + aKQ) return bg.k4.bj(ed.qZ(), a8W[j].a0v), !0
				} return !1
	}, this.bF = function() {
		var s;
		2 !== ay.di && 0 !== bV.bW[ay.az] && !ay.bC && eN.o0(ay.az) && (function(s) {
			if (a8W.length !== s) return 1;
			for (var j = s - 1; 0 <= j; j--)
				if (a8W[j].id !== eq.a4a(ay.az, j) || a8W[j].a0v !== eq.a4Z(ay.az, j)) return 1;
			return
		}(s = eq.a4Y(ay.az)) && function(s) {
			var j, id, a0v, d9, co, a8k = [];
			loop: for (j = 0; j < s; j++) {
				for (id = eq.a4a(ay.az, j), a0v = eq.a4Z(ay.az, j), d9 = 0; d9 < a8W.length; d9++)
					if (a8W[d9].id === id && a8W[d9].a0v === a0v) {
						a8k.push(a8W.splice(d9, 1)[0]);
						continue loop
					} co = eq.nI(ay.az, j), aKD(co = {
					a0v: a0v,
					co: co,
					aKK: co,
					id: id,
					ll: !0,
					aKL: !1,
					ij: null,
					iv: null
				}), a8k.push(co)
			}
			a8W = a8k
		}(s), aKW(s))
	}, this.aKZ = function(i0) {
		for (var s = Math.min(a8W.length, eq.a4Y(ay.az)), j = 0; j < s; j++)
			if (a8W[j].a0v === i0) return void(a8W = [])
	}, this.c9 = function() {
		if (0 !== bV.bW[ay.az] && eN.o0(ay.az) && !ay.bC)
			for (var j = a8W.length - 1; 0 <= j; j--) cA.drawImage(a8W[j].ij, aKS(j), aKT(j))
	}
}

function p6(title, zG, aKa, qr) {
	var qp, a4t;
	this.show = function() {
		qp.show(), this.resize()
	}, this.fb = function() {
		qp.fb()
	}, this.resize = function() {
		qp.resize(), a4t.resize()
	}, this.qz = function(aJ) {
		2 === aJ && qp.r0[0].a9()
	}, qr = qr || [new a5("❌ " + aP.aQ[92], function() {
		ak.qs()
	}, aC.p8)], qp = new qv(title, qr), a4t = new a4u(qp.qx, zG), aKa && aL.ab.textAlign(qp.qx.style, 1)
}

function aFN() {
	this.aDv = function(vU) {
		var username = aS.ai.data[122].value.slice(0, 20),
			username = (hD.eR(22 + 16 * username.length + 18), hD.hE(1, 0), hD.hE(6, 1), hD.hE(10, m2), b0.hI.hJ(username), aL.color.a56(aS.ba.aGe()));
		hD.hE(6, username[0]), hD.hE(6, username[1]), hD.hE(6, username[2]), b0.ba.vw = vU, b0.ba.send(vU, hD.bG)
	}, this.lM = function(l4) {
		return hD.eR(11), hD.hE(1, 0), hD.hE(6, 2), hD.hE(4, l4), b0.ba.send(b0.ba.vw, hD.bG), !0
	}
}

function aDo() {
	var qp, aKb, aKd, aCd, aKc = !1;

	function aKe(id) {
		0 !== bw.id || aS.ai.data[140].value ? 0 === id ? ak.am(8, 1, new qy(16)) : ak.am(2) : ak.ba.a5e(ak.a5f, 0 === id ? 16 : 0)
	}
	this.show = function() {
		bw.bx.setState(12), qp.show(), this.resize(), this.bF()
	}, this.fb = function() {
		qp.fb()
	}, this.resize = function() {
		qp.resize(), aKb.resize()
	}, this.bF = function() {
		!aKc || ei.mb(ay.az) || (ak.al(), ak.am(1))
	}, this.qz = function(aJ) {
		2 === aJ && qp.r0[0].a9()
	}, aKd = [new a5("🔑 " + aP.aQ[125], function() {
		aKe(0)
	}), new a5("⚙️ " + aP.aQ[81], function() {
		aKe(1)
	}), new a5("▶️ " + aP.aQ[82], function() {
		ak.am(3, 1, "")
	}), new a5("📈 Charts", function() {
		ak.ba.a5d()
	}), new a5("🔗 " + aP.aQ[83], function() {
		ak.am(4, 1, new p6("🔗 " + aP.aQ[83], aL.ab.sp(["Android App", "iOS App", "Discord", "Changelog", "Clans", "Clan Results", "Players", "Tutorial", "Terms", "Privacy"], [ju.a4o, ju.p7, ju.a4q, ju.a4g, ju.a4m, ju.a4n, ju.a4l, ju.a4k,
			ju.a4h, ju.a4j
		]), !1, [new a5("❌ " + aP.aQ[92], function() {
			ak.am(1)
		}, aC.p8)]))
	}), new a5("ℹ️ " + aP.aQ[84], function() {
		ak.am(4, 1, new p6("ℹ️ " + aP.aQ[84], lz + "<br><a href='" + ju.a4g + "' target='_blank'>" + ju.a4g + "</a>" +
			"<br><br><b>" + "FX Client v" + fx_version + " " + fx_update + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new a5("❌ " + aP.aQ[92], function() {
				ak.am(1)
			}, aC.p8)]))
	}), new a5("🗑️ " + aP.aQ[85], function() {
		ak.am(4, 1, new p6("🗑️ " + aP.aQ[85],
			"Do you want to delete all locally stored data, like usernames, account data and setting data? Your account will be deleted automatically after 3 months of inactivity. To prevent the storage of new data, it is recommended to close the game after deletion.",
			!1, [new a5("❌ " + aP.aQ[92], function() {
				ak.am(1)
			}), new a5("🗑️ Delete", function() {
				bw.bx.og(), ak.am(1)
			})]))
	}), new a5(aP.aQ[86], function() {
		bw.bx.oj(), ak.am(4, 1, new p6("User Privacy", "If the privacy window doesn't open, please deactivate all your adblockers.<br>Additionally, check out our Privacy Policy: <a href='" + ju.a4j + "' target='_blank'>" + ju.a4j +
			"</a>", !1, [new a5("❌ " + aP.aQ[92], function() {
				ak.am(1)
			}, aC.p8)]))
	})], aCd = [new a5("❌ " + aP.aQ[87], function() {
		ak.ba.zr()
	})], 8 === cB.cC() && aKd.unshift(new a5("📈 " + aP.aQ[88], function() {
		ak.al(), 2 <= eG.fl && (eY.fk(), c0.c1 = !0)
	})), 8 === cB.cC() && !ay.bC && ei.mb(ay.az) && (aKc = !0, aKd.unshift(new a5("🏳️ " + aP.aQ[89], function() {
		bg.k4.bq(), ak.al(), ei.fA && ei.fk()
	}))), 1 === bw.id && 5 <= bw.ot && aKd.push(new a5(aP.aQ[90], function() {
		bw.bx.ol()
	})), qp = new qv("📙 " + aP.aQ[91], aCd), aKb = new a2q(aKd, qp.qx)
}

function aGr() {
	var mL, g8, s, aKi, aKj;

	function aKo() {
		for (var v3 = 0, j = 1; j < 5; j++) v3 += g8[j] % 1024;
		return v3
	}

	function aKn() {
		for (var j = 1; j < s - aKj; j++) g8[j] = parseInt(g8[j])
	}

	function aKp() {
		g8[0] = "Player " + Math.floor(1e3 * Math.random()), g8[1] = ad.aZ < ad.aa ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, g8[2] = 1, g8[3] = 1, g8[4] = ad.aZ < ad.aa ? 0 : 1, g8[5] = 0, g8[6] = "000", g8[7] = "0", g8[8] = "0",
			g8[9] = "0", ou.aKq()
	}

	function aKm() {
		for (var j = s - aKj - 1; 0 <= j; j--) g8[j] = oq.or(g8[j]);
		g8[0] = oq.t9(g8[0])
	}

	function aKy(name, value, aKz) {
		var a25 = new Date,
			aKz = (a25.setTime(a25.getTime() + Math.floor(31536e6 * aKz)), name + "=" + value + ";expires=" + a25.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = aKz
	}
	this.aB = function() {
		if (0 === bw.id) {
			aKj = 4, mL = [], s = 10;
			for (var j = aKi = 0; j < s; j++) mL.push("u" + j);
			g8 = new Array(s), ! function(aKw) {
				for (var jy, i0, aKx = aKw.split(";"), j = aKx.length - 1; 0 <= j; j--) {
					for (aKx[j] = aKx[j].trim(), jy = 2; 0 <= jy; jy--) aKx[j] = aKx[j].replace(" ", "");
					3 < aKx[j].length && (jy = mL.indexOf(aKx[j].substring(0, 2)), i0 = aKx[j].indexOf("="), 0 <= jy && 2 === i0 ? g8[jy] = aKx[j].substring(i0 + 1, aKx[j].length) : 0 < i0 && aKy(aKx[j].substring(0, i0), "0", 0))
				}
			}(document.cookie), g8[9] || (g8[9] = "0"), (! function() {
				for (var j = s - 1; 0 <= j; j--)
					if (void 0 === g8[j]) return;
				return 1
			}() || (aKi = 2, aKm(), aKn(), aKo() !== g8[5])) && aKp()
		}
	}, this.aKq = function() {
		if (2 === aKi) {
			g8[1] = 0 === g8[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : g8[1], g8[5] = aKo(), ! function() {
				for (var j = 1; j < s - aKj; j++) g8[j] = g8[j].toString()
			}(), ! function() {
				g8[0] = oq.t8(g8[0]);
				for (var j = s - aKj - 1; 0 <= j; j--) g8[j] = oq.tA(g8[j])
			}();
			for (var j = s - 1; 0 <= j; j--) aKy(mL[j], g8[j], 1);
			aKm(), aKn()
		}
	}, this.aKi = function() {
		return aKi
	}, this.aKu = function(jy) {
		aKi = jy, this.aKq()
	}, this.aKv = function(j, value) {
		0 === bw.id && (g8[j] = value)
	}, this.ov = function(j) {
		return 0 !== bw.id ? 0 : g8[j]
	}
}

function tQ() {
	function aL7() {}
	this.aB = function() {}, this.p4 = function() {
		return !!aL7() && (aiptag.cmd.player.push(function() {
			aiptag.adplayer.startVideoAd()
		}), !0)
	}, this.hideCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.hideCMPButton && aipAPItag.hideCMPButton()
	}, this.showCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.showCMPButton && aipAPItag.showCMPButton()
	}, this.showCMPScreen = function() {
		aL7() && aipAPItag.showCMPScreen()
	}
}

function eH() {
	(aDx = void 0 === aDx ? document.createElement("canvas") : aDx).width = b.o, aDx.height = b.p, eZ = aDx.getContext("2d", {
		alpha: !0
	}), ea = eZ.getImageData(0, 0, b.o, b.p), o2 = ea.data, aL.a1z.uD(o2)
}

function aGl() {
	this.uo = new wE, this.hP = new a3L, this.aB = function() {
		this.uo.aB()
	}
}

function aGs() {
	this.mV = new Array(ay.cU), this.mU = new Array(ay.cU), this.ly = new Uint8Array(ay.cU), this.bW = new Uint8Array(ay.cU), this.jI = new Uint16Array(ay.cU), this.jJ = new Uint16Array(ay.cU), this.jK = new Uint16Array(ay.cU), this.jL =
		new Uint16Array(ay.cU), this.bX = new Uint32Array(ay.cU), this.a46 = new Uint32Array(ay.cU), this.bY = new Uint32Array(ay.cU), this.x9 = null, this.a2N = null, this.i5 = null, this.a2O = null, this.z8 = new Uint16Array(ay.cU), this.z9 =
		new Uint16Array(ay.cU), this.zA = new Uint16Array(ay.cU), this.oc = new Uint16Array(ay.cU), this.zB = new Uint8Array(ay.cU), this.aB = function(e0) {
			for (var j = e0.length - 1; 0 <= j; j--) this.mU[j] = this.mV[j] = e0[j].name, this.ly[j] = e0[j].v6;
			this.bW.fill(0), this.jI.fill(0), this.jJ.fill(0), this.jK.fill(0), this.jL.fill(0), this.bX.fill(0), this.a46.fill(0), this.bY.fill(0), donationsTracker.reset(), leaderboardFilter.reset(), this.x9 = new Array(ay.cU), this.a2N =
				new Array(ay.cU), this.i5 = new Array(ay.cU), this.a2O = new Array(ay.cU), this.z8.fill(0), this.z9.fill(0), this.zA.fill(0), this.oc.fill(0), this.zB.fill(0)
		}
}

function a0y() {
	this.bi = function(i1) {
		ay.bB ? bg.bh.bi(ay.az, i1) : b0.b1.aJw(i1)
	}, this.bj = function(iQ, a0v) {
		aw.a98(), ay.bB ? bg.bh.bj(ay.az, iQ, a0v) : b0.b1.aJx(iQ, a0v)
	}, this.oR = function(iQ, oP) {
		aw.a98(), ay.bB ? bg.bh.bk(ay.az, iQ, oP) : b0.b1.aJy(iQ, oP)
	}, this.bl = function(iQ, i1) {
		ay.bB ? bg.bh.bl(ay.az, iQ, i1) : bZ.pj.aD0(ay.az, i1) && b0.b1.aJz(iQ, i1)
	}, this.bm = function(a7l, i1) {
		ay.bB ? bg.bh.bm(ay.az, a7l, i1) : bZ.pj.aD2(ay.az, a7l, i1) && b0.b1.aK0(a7l, i1)
	}, this.bn = function(a0v) {
		ay.bB ? bg.bh.bn(ay.az, a0v) : b0.b1.aK1(a0v)
	}, this.ax = function(av) {
		ay.bB ? bg.bh.bo(ay.az, av) : b0.b1.aK2(av)
	}, this.bp = function(a7n) {
		ay.bB ? bg.bh.bp(ay.az, a7n) : b0.b1.aK3(a7n)
	}, this.bq = function() {
		ay.bB ? bg.bh.bq(ay.az) : b0.b1.aK4()
	}
}

function aGv() {
	var dH, dI, gQ, gR, aL8 = 0,
		aL9 = 0;

	function aLB() {
		return Math.pow(Math.pow(gQ - dH, 2) + Math.pow(gR - dI, 2), .5)
	}

	function aLA(aR) {
		dH = ad.pW * aR.touches[0].clientX, dI = ad.pW * aR.touches[0].clientY, gQ = ad.pW * aR.touches[1].clientX, gR = ad.pW * aR.touches[1].clientY
	}
	this.xS = function(aR) {
		return 1 < aR.touches.length ? (aL9 = c0.gM, aL8 = 3, aLA(aR), ek.fb(), !0) : (aL8 = 0, !1)
	}, this.xT = function(aR) {
		var q, iG, iH;
		return 0 !== ay.di && 1 < aR.touches.length && (aL8 = Math.max(aL8 - 1, 0), f0.bI() && (q = aLB(), aLA(aR), aR = aLB(), iG = Math.floor((dH + gQ) / 2), iH = Math.floor((dI + gR) / 2), ec.yx(iG, iH, Math.max(.125, aR) / Math.max(.125, q)),
			c0.c1 = !0), !0)
	}, this.xq = function() {
		var k, l;
		return !!(aL8 && (aL8 = 0, c0.gM < aL9 + 500)) && (k = (dH + gQ) / 2, l = (dI + gR) / 2, ek.xk(k, l), ek.click(k, l, !0) && (c0.c1 = !0), !0)
	}
}

function yH(aO, type, aLC) {
	var aR;
	this.aR = document.createElement("input"), (aR = this.aR).type = type ? "number" : "text", aR.id = "input" + aO.title, aR.value = aO.value, aR.style.width = "100%", aR.style.userSelect = "none", aR.style.outline = "none", aR.style.resize =
		"none", aR.style.border = "inherit", aR.style.font = "inherit", aR.style.color = aC.aD, aR.style.backgroundColor = aC.la, aR.style.fontSize = "1em", aR.style.padding = "0.1em 0.2em", -1 !== aO.a3 && (aR.addEventListener("focus", function() {
			ad.aFB++
		}), aR.addEventListener("blur", function() {
			ad.aFB--, aS.aT.aU(aO.a3, aR.value)
		}), aR.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), aS.aT.aU(aO.a3, aR.value), aLC ? aLC() : aR.blur())
		}))
}

function aGy() {
	var ij, iv, aLD, font, l0 = 0,
		aLE = !1,
		aLF = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aLG = 5;

	function fq() {
		if (aLE) {
			var j, s = aLF.length,
				fI = Math.floor(.5 * aLD.aa),
				aa = s * fI,
				k = Math.floor(Math.floor(aLD.k) + .3 * aLD.aZ - .5),
				l = Math.floor(Math.floor(aLD.l) - aa),
				aZ = Math.floor(.4 * aLD.aZ + 2.5);
			for (cA.fillStyle = aC.aF, cA.fillRect(k, l, aZ, aa), cA.fillStyle = aC.a7w, cA.fillRect(k, l + aLG * fI, aZ, fI), cA.fillStyle = aC.aD, cA.fillRect(k, l, 2, aa), cA.fillRect(k, l, aZ, 2), cA.fillRect(k + aZ - 2, l, 2, aa), j = 1; j <
				s; j++) cA.fillRect(k, l + j * fI, aZ, 2);
			for (cA.fillStyle = aC.aD, aL.ab.textAlign(cA, 1), aL.ab.textBaseline(cA, 1), cA.font = aL.ab.bz(0, .6 * fI), k += .5 * aZ, j = 0; j < s; j++) cA.fillText(aLR(j), k, l + (j + .6) * fI)
		}
		cA.drawImage(ij, Math.floor(aLD.k), Math.floor(aLD.l))
	}

	function fp(cn) {
		var k, dH, dI, fI;
		iv.clearRect(0, 0, Math.floor(aLD.aZ), Math.floor(aLD.aa)), iv.fillStyle = aC.aF, iv.fillRect(0, 0, Math.floor(aLD.aZ), Math.floor(aLD.aa)), ay.dk && (iv.fillStyle = aC.a7w, iv.fillRect(0, 0, Math.floor(.3 * aLD.aZ), Math.floor(aLD.aa))), iv
			.fillStyle = aC.aD, iv.fillText("Hide UI", .15 * aLD.aZ, .5 * aLD.aa), iv.fillRect(Math.floor(.3 * aLD.aZ - .5), 0, 2, Math.floor(aLD.aa)), k = .5 * aLD.aZ, iv.fillText("Replay Speed", k, .31 * aLD.aa), iv.fillText(aLR(aLG), k, .69 * aLD
				.aa), iv.fillRect(Math.floor(.7 * aLD.aZ - .5), 0, 2, Math.floor(aLD.aa)), cn.fB ? (k = Math.floor(.02 * aLD.aZ), cn = Math.floor(.025 * aLD.aZ), dH = Math.floor(.85 * aLD.aZ - k - .5 * cn), dI = Math.floor(.25 * aLD.aa), fI = Math
				.floor(aLD.aa) - 2 * dI, iv.fillRect(dH, dI, k, fI), iv.fillRect(dH + k + cn, dI, k, fI)) : function() {
				var aZ = Math.floor(.46 * aLD.aa),
					aa = Math.floor(.23 * aLD.aa),
					k = Math.floor(.85 * aLD.aZ - .5 * aZ + aZ / 12),
					l = Math.floor(.5 * aLD.aa - aa);
				iv.beginPath(), iv.moveTo(k, l), iv.lineTo(k + aZ, l + aa), iv.lineTo(k, l + (aa << 1)), iv.fill()
			}(), iv.fillRect(0, 0, Math.floor(aLD.aZ), 2), iv.fillRect(0, 0, 2, Math.floor(aLD.aa)), iv.fillRect(0, Math.floor(aLD.aa) - 2, Math.floor(aLD.aZ), 2), iv.fillRect(Math.floor(aLD.aZ - 2), 0, 2, Math.floor(aLD.aa))
	}

	function aLR(j) {
		return 5 === j ? "Normal" : "" + aLF[j]
	}
	this.fB = !1, this.aB = function() {
		ay.bC && (aLG = 5, this.fB = !1, aLE = !1, aLD = new aV([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aFg = function() {
		return aLF[aLG]
	}, this.iu = function() {
		return aLD.l
	}, this.qa = function(qb) {
		return !!ay.bC && aLD.k + aLD.aZ > ad.aZ - qb - af.gap
	}, this.resize = function() {
		ay.bC && (aLD.resize(), aLD.l -= (qT.qU() - 1) * af.gap, font = aL.ab.bz(0, .3 * aLD.aa), (ij = document.createElement("canvas")).width = Math.floor(aLD.aZ), ij.height = Math.floor(aLD.aa), (iv = ij.getContext("2d", {
			alpha: !0
		})).font = font, aL.ab.textAlign(iv, 1), aL.ab.textBaseline(iv, 1), fp(this))
	}, this.xy = function(aLH) {
		0 === ay.di || ak.fQ() || aLH !== ay.dk && (ay.dk = aLH, eV.resize(), c0.c1 = !0, ay.bC) && (l0 = c0.gM + 2e3, fp(this))
	}, this.fW = function(k, l) {
		if (!ay.bC) return !1;
		if (k < aLD.k || l < aLD.l || k > aLD.k + aLD.aZ) return aLE && function(cn, k, l) {
			var s = aLF.length,
				fI = Math.floor(.5 * aLD.aa),
				aa = s * fI,
				dH = Math.floor(Math.floor(aLD.k) + .3 * aLD.aZ - .5),
				aa = Math.floor(Math.floor(aLD.l) - aa),
				aZ = Math.floor(.4 * aLD.aZ + 2.5);
			return aLE = !1, c0.c1 = !0, k < dH || dH + aZ < k || l < aa || (aLG = aAf(0, Math.floor((l - aa) / fI), s - 1), fp(cn)), !0
		}(this, k, l);
		if ((k -= aLD.k) < .3 * aLD.aZ) aLE = !1, this.xy(!ay.dk);
		else {
			if (k < .7 * aLD.aZ) return aLE = !aLE, c0.c1 = !0;
			this.xz(!1)
		}
		return !0
	}, this.xz = function(aLJ) {
		2 === ay.di ? (this.xy(!1), ak.am(3)) : (aLE = !1, this.fB = !this.fB, this.fB ? (ei.fA && ei.fk(), bw.bx.setState(1)) : aLJ || ei.a5K(), c0.c1 = !0, fp(this))
	}, this.y0 = function() {
		this.fB = !1, ei.a5K(), c0.c1 = !0, fp(this)
	}, this.xg = function(k, l) {
		return !!ay.dk && (ei.fW(k, l) || (ay.bC ? ((c0.gM > l0 || !this.fW(k, l)) && ec.fW(k, l), c0.c1 = !0, l0 = c0.gM + 2e3) : ec.fW(k, l)), !0)
	}, this.bF = function() {
		ay.bC && ay.dk && c0.gM > l0 - 1e3 && c0.gM < l0 && (c0.c1 = !0)
	}, this.uA = function() {
		ay.bC && (this.fB = !1, c0.c1 = !0, fp(this))
	}, this.c9 = function() {
		if (ay.bC) {
			if (ay.dk) {
				if (c0.gM > l0) return;
				if (c0.gM > l0 - 1e3) return cA.globalAlpha = aAf(0, (1e3 - (c0.gM - (l0 - 1e3))) / 1e3, 1), fq(), void(cA.globalAlpha = 1)
			}
			fq()
		}
	}
}

function aGp() {
	var wL = [0, 0, 0, 0];

	function aLV(k, l, jW, aLX) {
		cA.fillStyle = aC.aD;
		var fE = io(2, Math.floor((aLX ? .5 : .35) * jW)),
			fI = (fE -= fE % 2, io(2, Math.floor(.1 * jW))),
			jW = (fI -= fI % 2, Math.floor((jW - fE) / 2)),
			gQ = Math.floor(jW + (fE - fI) / 2);
		cA.fillRect(k + jW, l + gQ, fE, fI), aLX && cA.fillRect(k + gQ, l + jW, fI, fE)
	}

	function aEu(k, l, aZ, aa, a79, t, aQ, co, h0) {
		cA.fillStyle = a79, cA.fillRect(k, l, aZ, aa), 0 <= co && function(k, l, aZ, aa, co) {
			cA.fillStyle = "rgba(" + 22 * co + "," + (110 - 22 * co) + ",0,0.75)", cA.fillRect(k, l, (1 + co) * aZ / 6, aa)
		}(k, l, aZ, aa, co), 0 < h0 && function(k, l, aZ, aa, h0) {
			cA.fillStyle = "rgba(255,255,255,0.3)", cA.fillRect(k, l, h0 * aZ / ay.cU, aa)
		}(k, l, aZ, aa, h0), cA.strokeStyle = aC.aD, cA.strokeRect(k, l, aZ, aa), 0 !== t && (cA.fillStyle = aC.aD, cA.font = aL.ab.bz(1, t * aa), cA.fillText(aQ, Math.floor(k + aZ / 2), Math.floor(l + .52 * aa)))
	}
	this.q8 = [{
		d0: 0,
		h0: 512
	}], this.aB = function() {
		aGf.fQ = !1, cB.setState(2), this.resize(), c0.c1 = !0
	}, this.kj = function() {}, this.resize = function() {
		wL[2] = Math.floor((bw.bx.by() ? .49 : .4) * ad.ae), wL[1] = Math.floor((ad.aa - wL[2] / 6 - this.q8.length * (af.gap + wL[2] / 10)) / 2), wL[0] = Math.floor((ad.aZ - wL[2]) / 2), aGf.fQ && aGf.resize()
	}, this.w4 = function(e1) {
		var j;
		if (6 < e1) this.q8 = [{
			d0: 0,
			h0: 512
		}];
		else {
			for (this.q8 = [], j = 0; j < e1 + 2; j++) this.q8.push({
				d0: 0,
				h0: 0
			});
			this.aLS()
		}
		b0.ba.od = 0
	}, this.aB0 = function(v9, vA) {
		for (var s = v9.length, j = 0; j < s; j++) this.q8[j].d0 = v9[j], this.q8[j].h0 = vA[j]
	}, this.aAw = function(xB) {
		var j, s;
		if (1 === xB.e0.length)
			for (s = this.q8.length, xB.v9 = new Array(s), xB.vA = new Array(s), j = 0; j < s; j++) xB.v9[j] = this.q8[j].d0, xB.vA[j] = this.q8[j].h0
	}, this.y6 = function() {
		c0.c1 = !0, aGf.fQ ? aGf.fQ = !1 : (this.kj(), cB.setState(0), ak.am(5, 5))
	}, this.eB = function() {
		var j, h0;
		if (e4.e5) return e4.e6.aHw;
		for (h0 = 0, j = this.q8.length - 1; 0 <= j; j--) h0 += this.q8[j].h0;
		return h0
	}, this.fi = function(k, l) {
		return !(!aGf.fQ || !aGf.fi(k, l)) || -1 !== this.qd(k, l)
	}, this.aLT = function() {
		var jy;
		b0.ba.od = 0, cB.w3(), e4.e5 ? e4.aHq() : (jy = (jy = this.q8.length - 2) < 0 ? 7 : jy, ay.dx(Math.floor(16384 * Math.random()), 0, [{
			name: aS.ai.data[122].value,
			nu: aL.color.a56(aS.ba.aGe()),
			v6: 0
		}], jy, !1, !1))
	}, this.fW = function(k, l) {
		if (aGf.fQ && !e4.e5) return aGf.fW(k, l);
		var j, jy, max, fE, l = this.qd(k, l);
		if (-1 === l) return !1;
		if (0 === l) this.y6();
		else if (1 === l) e4.e5 ? (e4.gk(), c0.c1 = !0) : aGf.show();
		else if (100 === l) gX.gU();
		else if (2 === l) this.kj(), this.aLT();
		else {
			if (e4.e5) return !1;
			if (27 === l) this.q8.length < 8 && (this.q8.push({
				d0: 0,
				h0: ay.cU
			}), this.aLS(), this.resize(), c0.c1 = !0);
			else if (j = Math.floor((l - 3) / 3), l % 3 == 0) 1 < this.q8.length && (this.q8.splice(j, 1), this.resize(), c0.c1 = !0);
			else if (fE = (wL[2] - wL[2] / 10 - 2 * af.gap) / 2, l % 3 == 1) 0 === j && 1 === this.q8[j].h0 || (k < wL[0] + wL[2] - 1.5 * fE - af.gap ? this.q8[j].d0-- : this.q8[j].d0++, this.q8[j].d0 < 0 ? this.q8[j].d0 = 5 : 5 < this.q8[j]
				.d0 && (this.q8[j].d0 = 0), c0.c1 = !0);
			else {
				for (c0.c1 = !0, l = (k - (wL[0] + wL[2] - fE)) / fE - .5, l *= l < 0 ? -l : l, l = 0 === (l = Math.floor(l * ay.cU)) ? 1 : l, max = ay.cU, jy = this.q8.length - 1; 0 <= jy; jy--) j !== jy && (max -= this.q8[jy].h0);
				if (l < 0) {
					if (1 === this.q8[j].h0) return this.q8[j].h0 = max, !0
				} else if (this.q8[j].h0 === max) return this.q8[j].h0 = 1, !0;
				this.q8[j].h0 += l, this.q8[j].h0 < 1 ? this.q8[j].h0 = 1 : this.q8[j].h0 > max && (this.q8[j].h0 = max)
			}
		}
		return !0
	}, this.aLS = function() {
		for (var h0 = Math.floor(ay.cU / this.q8.length), aLU = ay.cU % this.q8.length, j = this.q8.length - 1; 0 <= j; j--) this.q8[j].h0 = h0;
		this.q8[0].h0 += aLU
	}, this.qd = function(k, l) {
		var fE = (wL[2] - 3 * af.gap) / 4,
			fI = wL[2] / 6;
		if (k < wL[0] || l < wL[1] || wL[0] + wL[2] <= k) return -1;
		if (l < wL[1] + fI) return k < wL[0] + fE ? 0 : k < wL[0] + fE + af.gap ? -1 : k < wL[0] + 2 * fE + af.gap ? 100 : k < wL[0] + 2 * (fE + af.gap) ? -1 : k < wL[0] + 3 * fE + 2 * af.gap ? 1 : k < wL[0] + 3 * (fE + af.gap) ? -1 : 2;
		for (var dI, fJ = wL[2] / 10, fE = (wL[2] - fJ - 2 * af.gap) / 2, j = 0; j < this.q8.length; j++) {
			if (l < (dI = wL[1] + fI + af.gap + j * (fJ + af.gap))) return -1;
			if (!(dI + fJ < l)) return k < wL[0] + fJ ? 3 + 3 * j : k < wL[0] + fJ + af.gap ? -1 : k < wL[0] + wL[2] - fE - af.gap ? 4 + 3 * j : k < wL[0] + wL[2] - fE ? -1 : 5 + 3 * j
		}
		return !(this.q8.length < 8) || l < (dI = wL[1] + fI + af.gap + this.q8.length * (fJ + af.gap)) || dI + fJ < l || wL[0] + fJ < k ? -1 : 27
	}, this.c9 = function() {
		cA.lineWidth = af.k5, aL.ab.textAlign(cA, 1), aL.ab.textBaseline(cA, 1);
		var fE = (wL[2] - 3 * af.gap) / 4,
			fI = wL[2] / 6;
		if (aEu(wL[0], wL[1], fE, fI, "rgba(128,0,0,0.75)", .34, "Back", -1, -1), aEu(wL[0] + fE + af.gap, wL[1], fE, fI, "rgba(128,0,128,0.75)", .31, "Custom", -1, -1), aEu(wL[0] + 2 * (fE + af.gap), wL[1], fE, fI, "rgba(" + (e4.e5 ? 128 : 0) +
				",128,128,0.75)", .34, e4.e5 ? "Reset" : "Maps", -1, -1), aEu(wL[0] + wL[2] - fE, wL[1], fE, fI, "rgba(0,128,0,0.75)", .34, "Start", -1, -1), !e4.e5) {
			for (var dI, fJ = wL[2] / 10, fE = (wL[2] - fJ - 2 * af.gap) / 2, j = 0; j < this.q8.length; j++) dI = wL[1] + fI + af.gap + j * (fJ + af.gap), aEu(wL[0], dI, fJ, fJ, 1 < this.q8.length ? "rgba(128,0,0,0.75)" : "rgba(90,90,90,0.75)",
				0, null, -1), 1 < this.q8.length && aLV(wL[0], dI, fJ, !1), aEu(wL[0] + fJ + af.gap, dI, fE, fJ, aC.fr, .4, this.aLW(j), this.q8[j].d0, -1), aEu(wL[0] + wL[2] - fE, dI, fE, fJ, aC.fr, .4, this.hj(j), -1, this.q8[j].h0);
			this.q8.length < 8 && (dI = wL[1] + fI + af.gap + this.q8.length * (fJ + af.gap), aEu(wL[0], dI, fJ, fJ, "rgba(0,128,20,0.75)", 0, null, -1, -1), aLV(wL[0], dI, fJ, !0)), aGf.fQ && aGf.c9()
		}
	}, this.aLW = function(j) {
		return 0 === j && 1 === this.q8[j].h0 ? "You" : eP.q0[this.q8[j].d0]
	}, this.hj = function(j) {
		return 1 === this.q8[j].h0 ? "1 Player" : this.q8[j].h0 + " Players"
	}
}

function aH7() {
	var gap, fP, k = [0, 0, 0, 0, 0],
		l = [0, 0, 0, 0, 0],
		ql = [1, 1, 1, 1, 1],
		y = [!0, !0, !1, !1, !1],
		aJ = (this.bf = [!0, !0, !1, !1, !1], null);
	this.a1p = function(kq, aLa) {
		aJ = kq, y = aLa, fP = [ju.a4o, ju.p7, ju.a4p, ju.a4q, ju.a4r], this.aB()
	}, this.aB = function() {
		if (iw.zZ()) {
			var j, fE = Math.floor((bw.bx.by() ? .261 : .195) * ad.ae),
				fF = Math.floor(.9 * fE),
				fI = Math.floor(.17 * fF);
			if (gap = bw.bx.by() ? 2 * af.gap : af.gap, ql[0] = fE / aJ[0].width, ql[1] = fF / aJ[1].width, ql[2] = fI / aJ[2].height, ql[3] = fI / aJ[3].height, ql[4] = fI / aJ[4].height, ql[3] *= 1.07, k[0] = gap, k[1] = gap, k[2] = gap, k[3] =
				gap, k[4] = Math.floor(2 * gap + ql[3] * aJ[3].width), l[0] = gap, l[1] = l[0] + gap + ql[0] * aJ[0].height, l[2] = l[1] + gap + ql[1] * aJ[1].height, l[3] = l[2] + gap + ql[2] * aJ[2].height, l[4] = l[3], !y[0])
				for (j = 0; j < 5; j++) l[j] -= ql[0] * aJ[0].height + gap;
			if (!y[1])
				for (j = 2; j < 5; j++) l[j] -= ql[1] * aJ[1].height + gap
		}
	}, this.fQ = function() {
		return !(7 === cB.cC() && bw.bx.by())
	}, this.fW = function(iG, iH, pV) {
		if (aJ && this.fQ())
			for (var j = y.length - 1; 0 <= j; j--)
				if (y[j] && this.bf[j] && k[j] < iG && l[j] < iH && iG < k[j] + ql[j] * aJ[j].width && iH < l[j] + ql[j] * aJ[j].height) return ak.am(9, ak.a5f, new a4s("You are leaving Territorial.io.", aL.ab.ss(fP[j]))), !0;
		return !1
	}, this.c9 = function() {
		if (aJ && this.fQ()) {
			var j;
			for (cA.imageSmoothingEnabled = !0, j = 0; j < 5; j++) y[j] && this.bf[j] && (cA.setTransform(ql[j], 0, 0, ql[j], k[j], l[j]), cA.drawImage(aJ[j], 0, 0));
			cA.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function pc() {
	aw.bF(), er.bF(), eh.x1(), b0.ba.bF()
}

function pd() {
	ev.bF(), eo.bF(), eL.bF(), es.bF(), et.bF(), en.bF(), em.bF(), bZ.ba.bF(), aB3(), eb.bF(), eE.bF(), er.bF(), er.sG(), eh.bF(), eX.bF(), eg.bF(), ej.bF(), aw.bF(), eu.bF(), ed.bF(), ef.bF(), eG.bF(), eV.bF(), eW.bF(), b0.ba.bF(), b0.a9n.bF(), ak
		.bF(), eU.bF(), c0.bF()
}

function pg() {
	f0.bF(), el.bF(), c7.bF(), ez.bF(), ee.bF(), vc.a1U()
}

function pf() {
	eb.f2(!1), ej.f2(), eh.f2(!1), eg.f2(), ed.f2(), ef.f2(), er.f2(!1), eV.fp()
}

function pb() {
	er.f2(!1) && (c0.c1 = !0), b0.ba.bF()
}

function sf(jW, size, hN, aLb, font) {
	var j, fU = .2,
		ij = document.createElement("canvas"),
		k7 = ij.getContext("2d", {
			alpha: !1
		});
	for (ij.width = jW, ij.height = jW, k7.font = size + font, k7.textAlign = "center", k7.textBaseline = "middle", k7.fillStyle = "red", j = 0; j < hN.length; j++) k7.fillText(hN[j], .5 * jW, .5 * jW);
	return -1 < (ij = function(gh) {
		var j, jR;
		for (j = gh.data.length - 4; 0 <= j; j -= 4)
			if (jR = gh.data[j], aLb <= jR) return Math.floor(j / (4 * jW));
		return -1
	}(k7.getImageData(0, 0, jW, jW))) && (fU = (ij - .5 * jW + .1 * size) / size), Math.max(fU, 0)
}

function aH1() {
	var aBe = 0,
		aLe = 0;
	this.xn = function(k, l) {
		aBe = k, aLe = l
	}, this.xv = function(aLf) {
		ay.bC || ei.fA || (aL.j2.mg(0) || aL.j2.mg(1)) && aL.j2.uf(ay.az) && (ed.fW(aBe, aLe) ? ed.qR = !1 : function(aLf) {
			var iD = cY.iR(aBe),
				iE = cY.iS(aLe),
				i1 = cY.iU(iD, iE),
				g4 = cY.iW(i1);
			cY.iT(iD, iE) && (ay.dl ? eN.jU(g4) && bg.k4.bi(i1) : eN.oB(g4) || (eN.o8(g4) || aLf ? bZ.pj.aD0(ay.az, i1) && bg.k4.bl(ed.qZ(), i1) : eN.iB(g4) ? a7U(ay.az) ? bg.k4.bj(ed.qZ(), ay.cU) : a7S(ay.az, ay.cU) ? ev.a5V(ay.cU, ed
				.qZ()) : bZ.pj.aD0(ay.az, i1) && bg.k4.bl(ed.qZ(), i1) : (iD = eN.iC(g4)) !== ay.az && (jB(iD, ay.az) ? a7V(ay.az, iD) ? bg.k4.bj(ed.qZ(), iD) : a7S(ay.az, iD) ? ev.a5V(iD, ed.qZ()) : bZ.pj.aD0(ay.az, i1) && bg
				.k4.bl(ed.qZ(), i1) : bZ.pj.aD0(ay.az, i1) && bg.k4.bl(ed.qZ(), i1))))
		}(aLf))
	}
}

function aGm() {
	var k, l, aLh, aLi, aLj, gM, player, aLk, gap, zoom, b7, aLl, a2r = new Array(10);

	function aLt(player) {
		for (var j = b7.length - 1; 0 <= j; j--)
			if (b7[j] === player) return 1
	}

	function aLr(a5U) {
		var j, s;
		if (-1 !== a5U)
			for (s = a2r.length, j = 0; j < s; j++)
				if (a2r[j].fQ && a2r[j].k + 1 === a5U % 4 && a2r[j].l + 1 === a5U >> 2) return j;
		return -1
	}

	function aLp(fX, fY) {
		var xB = gap / 2;
		return fX < k - aLh - 3 * xB || k + 3 * aLh + 5 * xB < fX || fY < l - aLh - 3 * xB || l + 2 * aLh + 3 * xB < fY ? -1 : 4 * (fY < l - xB ? 0 : fY < l + aLh + xB ? 1 : 2) + (fX < k - xB ? 0 : fX < k + aLh + xB ? 1 : fX < k + 2 * aLh + 3 * xB ?
			2 : 3)
	}
	this.aLm = function() {
		var j, d9, aLo = [aC.jm, aC.a81, aC.jn, aC.a89, aC.a84];
		for (a2r = new Array(8), j = 0; j < 8; j++) a2r[j] = {
			id: j,
			fQ: !1,
			a3G: 0,
			ij: [],
			k: 0,
			l: 0
		};
		for (a2r[0].colors = [0, 1, 2, 3], a2r[0].k = 0, a2r[0].l = 0, a2r[1].colors = [0, 1, 4], a2r[1].k = 1, a2r[1].l = 0, a2r[2].colors = [0, 2], a2r[2].k = -1, a2r[2].l = 0, a2r[3].colors = [0], a2r[3].k = 0, a2r[3].l = 0, a2r[4].colors = [
				0, 2
			], a2r[4].k = 1, a2r[4].l = 1, a2r[5].colors = [3], a2r[5].k = 0, a2r[5].l = -1, a2r[6].id = 20, a2r[6].colors = [0], a2r[6].k = 1, a2r[6].l = -1, a2r[7].id = 21, a2r[7].colors = [0], a2r[7].k = 0, a2r[7].l = 1, j = 0; j < 8; j++)
			for (d9 = 0; d9 < a2r[j].colors.length; d9++) a2r[j].ij.push(function(id, aHJ) {
				if (id < 20) return aL.ij.jo(iw.get(3), id, aHJ);
				var aHJ = iw.get(3).height,
					kq = aL.ab.pD(aHJ, aHJ),
					k7 = aL.ab.getContext(kq);
				20 === id ? k7.drawImage(iw.get(18), 0, 0) : 21 === id && h4.kp.k6(h4.h5.h6 + h4.h5.ye, k7, 0, 0, aHJ);
				return kq
			}(a2r[j].id, aLo[a2r[j].colors[d9]]))
	}, this.sB = function() {
		return a2r
	}, this.aB = function() {
		b7 = [], k = l = gM = 0, aLi = aLj = -1e3, this.resize()
	}, this.resize = function() {
		aLh = Math.floor((bw.bx.by() ? .075 : .0468) * ad.ae), zoom = aLh / iw.get(3).height, gap = Math.floor(aLh / 3)
	}, this.xh = function(fX, fY) {
		return !!this.fQ() && (c0.c1 = !0, !!h4.kp.fW(fX, fY, player) || (fX = function(fX, fY) {
			aLj = aLi = -1e3;
			var aLq = aLr(aLp(fX, fY));
			if (-1 === aLq) return 0;
			if (1 !== a2r[aLq].colors[a2r[aLq].a3G])
				if (5 === aLq) {
					if (! function() {
							var c3 = performance.now();
							aLl + 4e3 < c3 && (b7 = []);
							aLl = c3
						}(), aLt(player)) return 1;
					b7.push(player), 16 < b7.length && b7.shift()
				} else if (6 === aLq) {
				for (var j = b7.length - 1; 0 <= j; j--) 0 === bV.bW[b7[j]] && b7.splice(j, 1);
				0 < b7.length && (eu.aBI(1, b7, !0) && bg.j2.b6(b7, player), b7 = [])
			} else if (2 === aLq) bg.k4.oR(ed.qZ(), player);
			else if (3 === aLq) ay.dl && bg.k4.bi(aLk);
			else if (0 === aLq)
				if (0 === a2r[0].a3G) {
					if (ay.dm && eh.wy() < 300) return 1;
					bg.k4.bj(ed.qZ(), player)
				} else ev.a5V(player, ed.qZ());
			else if (1 === aLq) aGh.aEA(), bg.k4.bl(ed.qZ(), aLk);
			else {
				if (7 === aLq) return aGh.aEC(), h4.kp.show(fX, fY), 2;
				if (4 !== aLq) return 0;
				eu.aBI(0, [player], !0) && bg.j2.b3(player)
			}
			return 1
		}(fX, fY), this.fb(), 2 === fX && (h4.kp.fQ = !0), 0 < fX))
	}, this.xk = function(fX, fY) {
		this.fQ() || (aLi = fX, aLj = fY, gM = performance.now())
	}, hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = cY.iR(mouseX),
			coordY = cY.iS(mouseY),
			coord = cY.iU(coordX, coordY),
			point = cY.iW(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(fX, fY, g4) {
			eN.jU(g4) || -1 === (fX = bZ.pj.aD8(fX, fY)) ? aw.a91(g4) : aw.a92(fX)
		}(mouseX, mouseY, point))
	}
	this.click = function(fX, fY, xr) {
		var iD = cY.iR(fX),
			iE = cY.iS(fY),
			i1 = cY.iU(iD, iE),
			g4 = cY.iW(i1);
		return !(!cY.iT(iD, iE) || (iD = (bw.bx.by() ? .025 : .0144) * ad.ae, iE = performance.now(), Math.abs(fX - aLi) > iD) || Math.abs(fY - aLj) > iD || gM + 500 < iE) && (gM = iE, xr ? (function(fX, fY, g4) {
			eN.jU(g4) || -1 === (fX = bZ.pj.aD8(fX, fY)) ? aw.a91(g4) : aw.a92(fX)
		}(fX, fY, g4), !1) : ei.fA || this.fQ() || !aL.j2.uf(ay.az) || ay.bC ? (this.fb(), !1) : ay.dl ? !!eN.jU(g4) && (aLk = i1, a2r[3].fQ = !0, this.aLw(fX, fY)) : (bZ.pj.bm(i1) ? bZ.pp.aD3 = -1 : bZ.pj.aD4(fX, fY) || (2 === ay.di ? eN
			.o1(g4) && (player = eN.iC(g4), eN.o0(player)) && (a2r[0].fQ = !0, a2r[0].a3G = 1, a2r[7].fQ = !0) : eN.oB(g4) || (aLk = i1, bZ.pj.aD0(ay.az, i1) && (a2r[0].fQ = !0, a2r[0].a3G = 1, a2r[1].fQ = !0, a2r[1].a3G = ca.cb[2] ?
				0 : 2), eN.o8(g4)) || (eN.iB(g4) ? (player = ay.cU, a7U(ay.az) ? (a2r[0].fQ = !0, a2r[0].a3G = 0) : a7S(ay.az, player) && (a2r[0].fQ = !0, a2r[0].a3G = 3)) : (player = eN.iC(g4)) === ay.az ? (a2r[0].fQ = !0, a2r[0]
				.a3G = 1, a2r[7].fQ = !0) : (a2r[0].a3G = 1, a2r[5].fQ = function(player) {
				return eN.o0(player) && !aLt(player) && eu.aBI(1, [player], !1)
			}(player), a2r[7].fQ = eN.o0(player), jB(player, ay.az) ? (a2r[4].fQ = eN.o0(player) && !er.sJ(player) && eu.aBI(0, [player], !1), a2r[6].fQ = function(player) {
				if (0 === b7.length) return !1;
				if (performance.now() > aLl + 4e3) return !(b7 = []);
				return !aLt(player) && ! function(player) {
					var j;
					if (ay.dT)
						for (j = b7.length - 1; 0 <= j; j--)
							if (!jB(player, b7[j])) return 1;
					return
				}(player)
			}(player), a7V(ay.az, player) ? (a2r[0].a3G = 0, a2r[0].fQ = !0) : a7S(ay.az, player) && (a2r[0].a3G = 3, a2r[0].fQ = !0), a2r[0].fQ = this.aLz()) : (a2r[2].fQ = !0, a2r[0].fQ = !0)))), this.aLw(fX, fY)))
	}, this.aLw = function(fX, fY) {
		return k = fX - Math.floor(aLh / 2), l = fY - Math.floor(aLh / 2), !!this.fQ()
	}, this.fi = function(fX, fY) {
		return !!this.fQ() && (h4.kp.fQ ? !h4.kp.k2(fX, fY) && (h4.kp.fQ = !1, c0.c1 = !0) : function(cn, fX, fY) {
			fX = aLp(fX, fY);
			if (0 <= aLr(fX)) return !1;
			if ((1 === fX || 6 === fX) && 0 <= aLr(2)) return !1;
			if ((6 === fX || 9 === fX) && 0 <= aLr(10)) return !1;
			return cn.fb(), c0.c1 = !0
		}(this, fX, fY))
	}, this.fb = function() {
		for (var j = a2r.length - 1; 0 <= j; j--) a2r[j].fQ = !1, a2r[j].a3G = 0;
		h4.kp.fQ = !1
	}, this.fQ = function() {
		return this.aLz() || h4.kp.fQ
	}, this.aLz = function() {
		for (var s = a2r.length, j = 0; j < s; j++)
			if (a2r[j].fQ) return !0;
		return !1
	}, this.c9 = function() {
		if (this.fQ())
			if (h4.kp.fQ) h4.kp.c9();
			else {
				var j, k7 = cA,
					d9 = a2r,
					s = d9.length,
					aM4 = (aLh + gap) / zoom;
				for (k7.imageSmoothingEnabled = !0, k7.setTransform(zoom, 0, 0, zoom, k, l), j = 0; j < s; j++) d9[j].fQ && cA.drawImage(d9[j].ij[d9[j].a3G], d9[j].k * aM4, d9[j].l * aM4);
				k7.imageSmoothingEnabled = !1, k7.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function aGq() {
	var aM5, ij, mL, aM6;

	function aMA(a3, name, aMB, bv) {
		mL[a3] = name, ij[a3] = new Image, ij[a3].onload = function() {
			! function(a3, aMB) {
				var pB, pC = null;
				7 === aMB ? pB = aL.a22.pF : 8 === aMB ? (pB = aL.a22.pI, pC = .1) : 3 === aMB ? (pB = aL.a22.pG, pC = .06) : 5 === aMB ? pB = aL.a22.pJ : 6 === aMB ? pB = aL.a22.pE : 4 === aMB && (pB = aL.a22.pK);
				ij[a3] = aL.a22.pA(ij[a3], pB, pC)
			}(a3, aMB), aMD()
		}, ij[a3].onerror = function(aR) {
			console.error("Error loading image at index", a3, "Error:", aR), aMD()
		}, ij[a3].src = "data:image/png;base64," + bv
	}

	function aMD() {
		aM5--, aM8()
	}

	function aM8() {
		0 === aM5 && (aM5 = -1, ek.aLm(), a6e.a1p([ij[8], ij[16], ij[7], ij[9], ij[10]], [2 !== bw.id, 1 !== bw.id, !0, !0, !0]), h4.kp.aB(), ef.a3X(), c0.c1 = !0, ij[7] = aM6, ij[8] = aM6, ij[9] = aM6, ij[10] = aM6, 5 === ak.a5f) && ak.yO().a5g
			.resize()
	}
	this.aB = function() {
		if (void 0 === ij) {
			aM5 = 23, ij = new Array(aM5), mL = new Array(aM5), (aM6 = document.createElement("canvas")).width = 1, aM6.height = 1;
			for (var j = aM5 - 1; 0 <= j; j--) ij[j] = aM6;
			aMA(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aMA(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aMA(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMA(3, "orders", 6,
					"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"
					), aMA(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aMA(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aMA(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aMA(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMA(8,
					"googleplay", 3,
					"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"
					), aMA(9, "discord", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMA(10, "insta",
					3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMA(11, "emojis", 4,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMA(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMA(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMA(14, "bestPlayer", 5,
					"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"
					), aMA(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aMA(16, "apple", 3,
					"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"
					), aMA(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aMA(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aMA(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aMA(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aMA(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aMA(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(a3) {
		return ij[a3]
	}, this.zb = function(name) {
		for (var j = mL.length - 1; 0 <= j; j--)
			if (mL[j] === name) return ij[j];
		return aM6
	}, this.zZ = function() {
		return aM5 <= 0
	}, this.a6X = function() {
		aM5 = 0, aM8()
	}
}
self.aiCommand746 = function(y) {
	0 === y ? yg() : 1 !== y || 1 !== bw.id || bw.ot < 14 || xi.xw()
}, setTimeout(yg, 1e4), window.onload = function() {
	yg()
};