function a(title, b, c = [new d("❌ " + e.f[92], function() {
	g.h()
}, i.j)]) {
	let k, l;
	this.show = function() {
		k.show(), this.resize()
	}, this.s = function() {
		k.s()
	}, this.resize = function() {
		k.resize(), l.resize()
	}, this.t = function(u) {
		2 === u && k.v[0].w()
	}, k = new n(title, c), l = new o(k.p, b), q.r.textAlign(k.p.style, 1)
}

function x() {
	2 === y.z ? a0([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === y.z ? a0([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === y.z ? a0([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === y.z && a0([512], [512], [
		0, 70, 180, 200, 290, 420, 512
	], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function a0(a1, a2, a3, a4, a5) {
	for (var a7, a8, aD, aE, aG, aH, a9 = a1.length - 1, aA = y.aB + y.aC, aF = (aA *= aA, a3.length), a6 = aF - 1; 0 <= a6; a6--) a3[a6] *= a3[a6];
	var aI = new Array(aF),
		aJ = new Array(aF),
		aK = new Array(aF),
		aL = aM.aN();
	if (void 0 === a5)
		for (a5 = new Array(aF), a6 = aF - 1; 0 <= a6; a6--) a5[a6] = 0;
	for (a6 = 1; a6 < aF; a6++) aI[a6] = a3[a6] - a3[a6 - 1], aJ[a6] = a4[a6] - a4[a6 - 1], aK[a6] = a5[a6] - a5[a6 - 1];
	for (a7 = y.aB - 1; 0 <= a7; a7--)
		for (a8 = y.aC - 1; 0 <= a8; a8--) {
			for (aD = aA, a6 = a9; 0 <= a6; a6--) aD = (aE = (a7 - a1[a6]) * (a7 - a1[a6]) + (a8 - a2[a6]) * (a8 - a2[a6])) < aD ? aE : aD;
			for (aG = a4[aF - 1], aH = a5[aF - 1], a6 = 1; a6 < aF; a6++)
				if (aD < a3[a6]) {
					aG = a4[a6 - 1] + aO((aD - a3[a6 - 1]) * aJ[a6], aI[a6]), aH = a5[a6 - 1] + aO((aD - a3[a6 - 1]) * aK[a6], aI[a6]);
					break
				} aP(y.aB * a8 + a7, aG, aH, aL)
		}
}

function aP(aQ, aG, aH, aL) {
	aG < 500 ? aL[aQ] = aR(aL[aQ] * aG * 2, 1e3) : 500 < aG && (aL[aQ] += aR(2 * (1e4 - aL[aQ]) * (aG - 500), 1e3)), aL[aQ] += aR(aH * (10 * aG - aL[aQ]), 1e3)
}

function aS() {
	function aT(a6, title, type = 0, aW = null, ae = 0, aa = 0) {
		aZ.af.data.push({
			aQ: a6,
			title: title,
			type: type,
			aW: aW,
			value: ae,
			ae: ae,
			aa: aa
		})
	}

	function aU(a6, title, type, aW = null, ae = "", aa = 0) {
		aZ.af.data.push({
			aQ: a6,
			title: title,
			type: type,
			aW: aW,
			value: ae,
			ae: ae,
			aa: aa
		})
	}

	function aV(ag) {
		for (var a6 = aZ.af.data.length; a6 < ag; a6++) aZ.af.data.push(null)
	}
	this.data = [], this.m = function() {
		aT(0, "", 1, ["English", "Русский", "Türkçe", "Española", "Deutsch", "Polski"], 0, 5), aT(1, "", 1, null, 1), aT(2, "", 0, [0, 1]), aU(3, "Username", 2), aT(4, "Font5", 1, ["Default", "Custom"]), aU(5, "", 2, null, "Trebuchet MS", 1), aT(
				6, "", 0, [0, 1]), aT(7, "", 0, [0, 1], 1), aT(8, "", 0, [0, 1]), aT(9, "", 1, null, 1), aT(10, "", 1, null), aT(11, "", 1, null, 1), aV(100), aU(100, "Username", 2), aU(101, "Password", 2), aU(102, "Emojis", 2), aU(103, "Colors",
				2), aU(104, "Clan", 2), aU(105, "AccountName", 2), aU(106, "Password", 2), aT(107), aT(108), aT(109), aU(110, null, 2), aT(111), aT(112), aT(113), aU(114, null, 2), aT(115), aU(116, null, 2), aT(117, null, 1), aU(118, null, 2,
				null, "", 2), aT(119, null, 1, null, 0, 1), aU(120, null, 2), aT(121, "CountryColor", 1, null, ~~(262144 * Math.random())), aU(122, "Username", 2), aT(123), aU(124), aT(125, null, 1, ["M1", "M5", "H1", "H4", "D1", "W1", "MN"]),
			aU(126, null, 2), aT(127, "Y-Axis Compression", 0, [0, 1], 1), aT(128), aT(129), aT(130), aT(131), aT(132), aU(133, null, 2), aT(134, null, 0, null, 5), aU(135, null, 2), aU(136, null, 2), aT(137), aT(138), aT(139), aT(140), aT(141),
			aT(142), aT(143), aT(144), aV(180), aT(180, "R0", 0), aT(181, "R1", 0)
	}, this.translate = function() {
		this.data[0].title = "🌐 " + e.f[101], this.data[1].title = e.f[102], this.data[2].title = e.f[103], this.data[5].title = e.f[104], this.data[6].title = e.f[105], this.data[7].title = e.f[106], this.data[8].title = e.f[107], this.data[9]
			.title = e.f[108], this.data[10].title = e.f[109], this.data[11].title = e.f[110], this.data[1].aW = [e.f[111], e.f[112], e.f[113], e.f[114]], this.data[9].aW = [e.f[112], e.f[115], e.f[116]], this.data[10].aW = [e.f[109] + " 1", e.f[
				117] + " 1", e.f[109] + " 2", e.f[117] + " 2"], this.data[11].aW = [e.f[118], e.f[119], e.f[120]]
	}, this.aX = function(aQ, value) {
		this.data[aQ].value = value
	}, this.aY = function(aQ, value) {
		this.aX(aQ, value), aZ.w.save(aQ, String(value)), aZ.w.save(aQ, String(this.data[aQ].aa), !0)
	}, this.ab = function() {
		for (var a6 = 0; a6 < this.data.length; a6++) this.data[a6] && (aZ.w.save(a6, String(this.data[a6].value)), aZ.w.save(a6, String(this.data[a6].aa), !0))
	}, this.ac = function(aQ) {
		return Number(this.data[aQ].value)
	}, this.ad = function(aQ) {
		return String(this.data[aQ].value)
	}
}

function ah() {
	var ai, aj, ak, al, am, an, ao, ap, aq, ar, at;

	function bG() {
		return Math.floor((ay.ak - ak) / 2) < b8.al + 2 * b2.gap ? ay.al - al - 4 * b2.gap - b8.al : ay.al - al - 2 * b2.gap
	}
	this.au = -1, this.m = function() {
		at = ai = !1, am = .61, an = .07, ao = .09, ar = ap = al = 0, this.au = -1
	}, this.resize = function() {
		var bJ, bK, u, bO, bP, bQ;
		ai && (ak = b0(ak = av.aw.ax() ? Math.floor(.69 * ay.az) : Math.floor(.5 * ay.az), b1(ay.ak - 2 * b2.gap, 10)), ak = b0(ak, Math.floor(3.57 * b1(ay.al - 2 * b2.gap, 3))), al = Math.floor(.28 * ak), (aq = document.createElement("canvas"))
			.width = ak, aq.height = al, bJ = aq.getContext("2d", {
				alpha: !0
			}), bK = Math.floor(1 + al / 40), bJ.clearRect(0, 0, ak, al), bJ.fillStyle = i.bL, bJ.fillRect(bK, bK, ak - 2 * bK, al - 2 * bK), bJ.lineJoin = "bevel", bJ.lineWidth = 2 * bK, bJ.strokeStyle = i.bM, bJ.strokeRect(bK, bK, ak - 2 *
				bK, al - 2 * bK), bJ.imageSmoothingEnabled = !1, u = bN.get(aj), bO = u.width, bP = u.height, bQ = (1 === aj ? .85 : 21 === aj ? .666 : .9) * am * al / bP, bJ.setTransform(bQ, 0, 0, bQ, Math.floor((ak - bQ * bO) / 2), Math
				.floor((al - bQ * bP) / 2)), bJ.drawImage(u, 0, 0), bJ.setTransform(1, 0, 0, 1, Math.floor(ak - ao * al - an * al - bK), Math.floor(bK + an * al)),
			function(bJ, aF) {
				bJ.lineWidth = Math.floor(1 + al / 80), bJ.strokeStyle = i.bM, bJ.beginPath(), bJ.moveTo(0, 0), bJ.lineTo(aF, aF), bJ.moveTo(0, aF), bJ.lineTo(aF, 0), bJ.stroke()
			}(bJ, Math.floor(ao * al)), bJ.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(aL, b4, b5, b6) {
		ai || b6 && at || (aj = b5 ? 21 : aL ? 1 : 2, ai = at = !0, this.resize(), b7.s(), b8.b9(), ar = bA.bB, -1 === this.au && (this.au = bA.bC()), ap = b4 ? 1 : 0)
	}, this.bD = function() {
		!ai || 1 <= ap || (ap = 1 < (ap += 5e-4 * (bA.bB - ar)) ? 1 : ap, ar = bA.bB, bA.bE = !0)
	}, this.bF = function(a7, a8) {
		return !(!ai || ap <= 0 || (a7 -= Math.floor((ay.ak - ak) / 2), a8 -= bG(), a7 < 0) || a8 < 0 || ak < a7 || al < a8 || (ak - al / 3 < a7 && a8 < al / 3 && (ai = !1, bA.bE = !0), 0))
	}, this.bH = function() {
		!ai || ap <= 0 || (bI.globalAlpha = ap, bI.drawImage(aq, Math.floor((ay.ak - ak) / 2), bG()), bI.globalAlpha = 1)
	}
}

function bS() {
	var bT = new Uint8Array(78);
	this.m = function() {
		var a6;
		for (bT[50] = 37, a6 = 0; a6 < 10; a6++) bT[a6 + 3] = a6 + 1;
		for (a6 = 0; a6 < 26; a6++) bT[a6 + 20] = a6 + 11, bT[a6 + 52] = a6 + 38
	}, this.bU = function(bV) {
		return bV.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "_")
	}, this.bW = function(bV, size) {
		if ((bV = this.bU(bV)).length > size) return bV.substring(0, size);
		for (; bV.length < size;) bV += "_";
		return bV
	}, this.bX = function(bV) {
		for (var bY = bT, aF = bV.length, bZ = new Uint8Array(aF), a6 = 0; a6 < aF; a6++) bZ[a6] = bY[bV.charCodeAt(a6) - 45];
		return bZ
	}, this.ba = function(bb) {
		bc.bd(6 * bb.length), this.be(bb), bf.m(bc.bg)
	}, this.be = function(bb) {
		var aF = bb.length,
			ak = bc;
		for (let a6 = 0; a6 < aF; a6++) ak.bh(6, bb[a6])
	}, this.bi = function(bV) {
		this.be(this.bX(bV))
	}, this.bj = function(bV, size) {
		this.be(this.bX(this.bW(bV, size)))
	}
}

function bk() {
	var bp, br;
	this.bl = 5, this.bm = this.bl - 1, this.bn = this.bl + this.bm, this.bo = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.bq = null;

	function cE(a6) {
		return br[a6].c2 && bp[a6].cE()
	}

	function cG(cB) {
		br[cB].bB = bA.bB, br[cB].c3 = !1
	}
	this.bt = 0, this.bu = 0, this.m = function() {
		this.bq = new Array(this.bl);
		this.bq[0] = "territorial.io";
		var a6, bw = bx.by(0);
		for (bx.bz(0), a6 = 1; a6 < this.bl; a6++) this.bq[a6] = c0.c1() + ".territorial.io";
		for (bx.bz(bw), bp = new Array(this.bn), br = new Array(this.bn), a6 = this.bn - 1; 0 <= a6; a6--) br[a6] = {
			c2: !1,
			bB: 0,
			c3: !1
		};
		this.c4(0, 0)
	}, this.c5 = function(a6) {
		return bp[a6]
	}, this.c6 = function() {
		return this.bu < this.bl ? this.bu : this.bu - this.bm
	}, this.bD = function() {
		for (let a6 = this.bn - 1; 0 <= a6; a6--) this.c7(a6) && bA.bB > br[a6].bB + 15e3 && c8.c9.cA(a6, br[a6].c3);
		!this.c7(0) && bA.bB > br[0].bB + 8e3 && (br[0].bB = bA.bB, this.c4(0, 0))
	}, this.c4 = function(cB, cC) {
		if (br[cB].c2) {
			if (bp[cB].cE()) return bp[cB].cF(cC), bp[cB].c7();
			bp[cB].s()
		}
		return this.cD(cB, cC), !1
	}, this.cD = function(cB, cC) {
		br[cB].c2 = !0, cG(cB), bp[cB] = new cH, bp[cB].m(cB, cC)
	}, this.cF = function(cB, cC) {
		cE(cB) && bp[cB].cF(cC)
	}, this.cI = function(cB, cC) {
		c8.cJ.cK(cB)
	}, this.c7 = function(a6) {
		return br[a6].c2 && bp[a6].c7()
	}, this.send = function(cB, bg) {
		cG(cB), bp[cB].send(bg)
	}, this.cL = function(cB) {
		8 === cM.cN() && (br[cB].c3 = !0, c8.cO.cP = !0)
	}, this.close = function(cB, cQ) {
		cE(cB) && bp[cB].close(cQ)
	}, this.cR = function(cB, cQ) {
		cS.cT(cQ), cE(cB) && bp[cB].close(cQ)
	}, this.cU = function(cQ) {
		for (let a6 = this.bn - 1; 0 <= a6; a6--) this.close(a6, cQ)
	}, this.cV = function(cB, cQ) {
		for (var a6 = this.bn - 1; 0 <= a6; a6--) a6 !== cB && this.close(a6, cQ)
	}, this.cW = function() {
		this.close(this.bt, 3246)
	}, this.cX = function(cB, cY) {
		bp[cB].s(), cS.cZ(cB, cY.code)
	}
}

function ca() {
	this.r = new cb, this.cc = new cd, this.ce = new cf, this.cg = new ch, this.bJ = new ci, this.cj = new ck, this.aq = new cl, this.color = new cm, this.m = function() {
		this.r.cn()
	}
}

function co() {
	this.cp = 0, this.cq = 0, this.cr = 0, this.cs = 0, this.ct = 0, this.cu = 0, this.cv = [0, 0, 0, 0], this.cw = function() {
		this.cp = cx.cy(), this.cq = cx.bG(), this.cr = -this.cp, this.cs = -this.cq, this.ct = ay.ak / cz, this.cu = ay.al / cz, this.cv[0] = Math.floor(this.cr), this.cv[1] = Math.floor(this.cs), this.cv[2] = Math.floor(this.cv[0] + this.ct +
			1), this.cv[3] = Math.floor(this.cv[1] + this.cu + 1), d0.d1 = !0
	}
}

function d2() {
	this.d3 = function() {
		aZ.d4.d5(), aZ.d6.aX(105, d7.d8.d9(d7.d8.dA(5))), aZ.d6.aX(106, d7.d8.d9(d7.d8.dA(8))), aZ.d6.aX(109, bf.dB(30)), aZ.d6.aX(108, aZ.af.data[109].value), aZ.d6.aX(111, aZ.af.data[109].value + 1), aZ.d6.aX(107, 0), aZ.d6.aX(110, "")
	}, this.dC = function() {
		var dE, dF, dG;
		bf.size < bc.dD(18) ? c8.d4.cR(0, 3254) : (dE = bf.dB(5), dF = bf.dB(3), dG = bf.dB(3), bf.dH(186 + 16 * (dE + dF + dG) + 32 + 32 + 30 + 128) ? (aZ.d6.aX(109, bf.dB(30)), aZ.d6.aX(107, bf.dB(16)), aZ.d6.aX(108, bf.dB(30)), aZ.d6.aX(112,
			bf.dB(30)), aZ.d6.aX(111, bf.dB(30)), aZ.d6.aX(113, bf.dI(32)), aZ.d6.aX(122, dJ.dK.dL(dE)), aZ.d6.aX(135, dJ.dK.dL(dF)), aZ.d6.aX(136, dJ.dK.dL(dG)), aZ.d6.aX(137, bf.dI(32)), aZ.d6.aX(138, bf.dI(32)), aZ.d6.aX(139, bf
			.dB(30)), aZ.d6.aX(141, bf.dI(32)), aZ.d6.aX(142, bf.dI(32)), aZ.d6.aX(143, bf.dI(32)), aZ.d6.aX(144, bf.dI(32)), 8 === g.dM && g.dN().dO(16, !0)) : c8.d4.cR(0, 3267))
	}
}

function dP() {
	this.dQ = function() {
		let aF = dR;
		var dS = dT,
			dU = dV.dU,
			dW = this.dX();
		for (let a6 = 0; a6 < aF; a6++) {
			var dY = dS[a6];
			dZ.da(dY) && (dU[dY] = dW)
		}
		var db = dV.db,
			dc = dV.dc,
			dd = dV.dd,
			de = dV.de;
		aF = df.dg;
		for (let a6 = 0; a6 < aF; a6++)(0 === de[a6] || dd[a6] < 1 || 2 * db[a6] > 3 * (dc[a6] + dd[a6])) && (dU[a6] = 0);
		let dh = 0;
		for (let a6 = 0; a6 < aF; a6++) dh += 0 < dU[a6];
		return dh
	}, this.dX = function() {
		return Math.min(65535, bA.bC())
	}
}

function di() {
	var dj = 0,
		dk = 0;
	this.dl = function(a7, a8) {
		dj = a7, dk = a8
	}, this.dm = function(dn) {
		df.dp || dq.dr || (q.ce.ds(0) || q.ce.ds(1)) && q.ce.dt(df.du) && (b8.bF(dj, dk) ? b8.dv = !1 : function(dn) {
			var dx = dy.dz(dj),
				e0 = dy.e1(dk),
				e2 = dy.e3(dx, e0),
				e4 = dy.e5(e2);
			dy.e6(dx, e0) && (df.e7 ? dZ.e8(e4) && e9.eA.eB(e2) : dZ.eC(e4) || (dZ.eD(e4) || dn ? eE.eF.eG(df.du, e2) && e9.eA.eH(b8.eI(), e2) : dZ.eJ(e4) ? eK(df.du) ? e9.eA.eL(b8.eI(), df.eM) : eN(df.du, df.eM) ? eO.eP(df.eM, b8.eI()) :
				eE.eF.eG(df.du, e2) && e9.eA.eH(b8.eI(), e2) : (dx = dZ.eQ(e4)) !== df.du && (eR(dx, df.du) ? eS(df.du, dx) ? e9.eA.eL(b8.eI(), dx) : eN(df.du, dx) ? eO.eP(dx, b8.eI()) : eE.eF.eG(df.du, e2) && e9.eA.eH(b8.eI(),
					e2) : eE.eF.eG(df.du, e2) && e9.eA.eH(b8.eI(), e2))))
		}(dn))
	}
}

function eT() {
	function eZ(aL, bw, min, max) {
		return min + (aL * bw + 137) % (max - min)
	}
	this.bD = function(eU, eV) {
		let eX = 1;
		for (let a6 = 0; a6 <= 10; a6++) eX = function(eX, eU, eV, e4) {
			var aF = 65536 + (eX * e4 + 7 & 16383);
			for (let a6 = 0; a6 < aF; a6++) eX = 1 + eX * eU % eV;
			return eX
		}(eX, eU, eV, a6), eU = eZ(eU, eX, 16384, 65536), eV = eZ(eV, eX, 1 << 18, 1 << 20);
		return eX - 1 & 65535
	}
}

function ea() {
	this.dh = 0, this.eb = null;
	let ed = this.ec = 0;
	this.ee = 0, this.ef = function() {
		0 !== dV.eg[df.du] && dZ.da(df.du) && 2 === df.eh && (df.ei = 2)
	}, this.ej = function() {
		var es, eu;
		this.eb = ek.eF.el(), this.dh = em.en.dQ(), df.eo < 7 && 2 !== df.eh ? this.ec = ep.eq() : this.ec = ek.eF.er(), 8 === df.eo && 1 === df.eh ? (es = 1 - df.et, eu = dV.ev[es], dV.ev[es] = 0, e9.ce.ew(), dV.ev[es] = eu) : e9.ce.ew(), ed =
			.01 * dV.dU[df.du] / 50, this.ee = 0, df.eo < 7 ? ek.ey.ej(this.eb) : 7 === df.eo || 10 === df.eo ? q.ce.dt(df.du) && (es = ek.result.dh * (1 + df.f3), 2 === df.eh ? ek.result.ee += es * dV.ev[df.du] / ek.result.ec : f4[0] === df
				.du && (ek.result.ee += es)) : 8 !== df.eo || 1 !== df.ei || 0 === aZ.af.data[107].value || 100 <= (eu = aZ.af.data[108].value) || (ek.result.ee += .01 * (100 - eu) * 10)
	}, this.f5 = function() {
		0 !== ed && 0 !== ek.result.ee && f6.f7(0, "🏆 You earned prize money of 🧈 " + ek.result.ee.toFixed(2) + ".", 40, 0, i.bM, i.bL, -1, !1)
	}
}
var cz, f8, f9, dT, dR;

function fA() {
	var fB, fC, ak, a7, a8, fD, fE;
	this.m = function() {
		fB = new Array(2), fC = new Array(2), this.fF = !1, fE = fD = f9 = f8 = 0, cz = 1, this.resize()
	}, this.resize = function() {
		ak = (ak = Math.floor((av.aw.ax() ? .072 : .0502) * ay.az)) < 8 ? 8 : ak;
		for (var a6 = 1; 0 <= a6; a6--) fB[a6] = document.createElement("canvas"), fB[a6].width = ak, fB[a6].height = ak, fC[a6] = fB[a6].getContext("2d", {
			alpha: !0
		});
		this.fG(),
			function() {
				for (var fn = Math.floor(1 + ak / 20), a6 = 1; 0 <= a6; a6--) fC[a6].clearRect(0, 0, ak, ak), fC[a6].fillStyle = i.fo, fC[a6].beginPath(), fC[a6].arc(ak / 2, ak / 2, ak / 2 - fn, 0, 2 * Math.PI), fC[a6].fill(), fC[a6].lineWidth =
					fn, fC[a6].fillStyle = i.bM, fC[a6].strokeStyle = i.bM, fC[a6].beginPath(), fC[a6].arc(ak / 2, ak / 2, ak / 2 - fn, 0, 2 * Math.PI), fC[a6].stroke(), fp(fC[a6], 0, 0, ak, fn, .3, 0 === a6)
			}()
	}, this.cy = function() {
		return -f8 / cz
	}, this.bG = function() {
		return -f9 / cz
	}, this.fL = function(fM, fN) {
		f8 = cz * fM - fN
	}, this.fO = function(fP, fQ) {
		f9 = cz * fP - fQ
	}, this.bF = function(fJ, fK) {
		return df.fR || ! function(fJ, fK) {
			return Math.pow(fJ - (a7 + ak / 2), 2) + Math.pow(fK - (a8 + ak / 2), 2) < ak * ak / 4 || Math.pow(fJ - (a7 + ak / 2), 2) + Math.pow(fK - (a8 + 2 * ak), 2) < ak * ak / 4
		}(fJ, fK) || aZ.af.data[8].value ? (fT.ag() && (this.fF = !0, fD = fJ, fE = fK), !1) : fK < a8 + 1.25 * ak ? this.fS(Math.floor(ay.ak / 2), Math.floor(ay.al / 2), -200) : this.fS(Math.floor(ay.ak / 2), Math.floor(ay.al / 2), 200)
	}, this.fU = function(fJ, fK) {
		var fV, fW, fX, fY;
		return !fT.ag() || (fV = f8, fW = f9, f8 += fX = fD - fJ, f9 += fY = fE - fK, fZ.fU(fX, fY), this.fa(), fD = fJ, fE = fK, fV !== f8) || fW !== f9
	}, this.fS = function(fb, fc, deltaY) {
		var fd;
		if (fT.ag()) {
			if (0 < deltaY) fd = (fd = 500 / (500 + deltaY)) < .5 ? .5 : fd;
			else {
				if (!(deltaY < 0)) return !1;
				fd = 2 < (fd = (500 - deltaY) / 500) ? 2 : fd
			}
			this.fe(fb, fc, fd), bA.bE = !0
		}
		return !0
	}, this.fe = function(a7, a8, e4) {
		var aG;
		e4 = aG = (aG = 1024 < (aG = e4) * cz ? 1024 / cz : aG) * cz < .125 ? .125 / cz : aG, fZ.zoom(e4, a7, a8),
			function(aG, fb, fc) {
				cz *= aG, f8 = (f8 + fb) * aG - fb, f9 = (f9 + fc) * aG - fc, cx.fa()
			}(e4, a7, a8)
	}, this.fa = function() {
		var fh = ay.ak / 16,
			fi = 0,
			fj = ay.al / 16,
			fk = 0;
		f8 < -ay.ak + fh && (fi = -ay.ak + fh - f8), f8 > cz * y.aB - fh && (fi = cz * y.aB - fh - f8), f9 < -ay.al + fj && (fk = -ay.al + fj - f9), f9 > cz * y.aC - fj && (fk = cz * y.aC - fj - f9), f8 += fi, f9 += fk, fl.cw(), fZ.fm(fi, fk)
	}, this.fG = function() {
		a7 = ay.ak - ak - b2.gap, a8 = Math.floor(ay.al / 2 - 1.25 * ak)
	}, this.bH = function() {
		aZ.af.data[8].value || (bI.drawImage(fB[0], a7, a8), bI.drawImage(fB[1], a7, Math.floor(a8 + 3 * ak / 2)))
	}
}

function fq() {
	var aG = 1,
		fr = [null, null];
	this.m = function() {
		aG = .72 * (av.aw.ax() ? .0011 : .001) * ay.az;
		for (var a6 = 1; 0 <= a6; a6--) fr[a6] && this.fs(a6, fr[a6].bV)
	}, this.fs = function(aQ, bV) {
		fr[aQ] = {
			bV: bV,
			font: q.r.ft(1, 10)
		}, this.fu(aQ)
	}, this.fu = function(aQ) {
		var bV, fontSize, fw, ak, fy;
		bN.fv() && fr[aQ] && (bV = fr[aQ].bV, fontSize = Math.floor(.15 * aG * bN.get(13).height), fw = q.r.ft(1, fontSize), ak = fx.measureText(bV, fw), (fy = .8 * aG * bN.get(13).width) < ak && (fontSize = Math.floor(fontSize * fy / ak), fw = q
			.r.ft(1, fontSize)), fr[aQ] = {
			bV: bV,
			font: fw
		}, bA.bE = !0)
	}, this.fz = function() {
		return Math.floor(aG * bN.get(13).height)
	}, this.bF = function(fb, fc) {
		return !!bN.fv() && !(fb < b2.gap || fc < ay.al - aG * bN.get(13).height - 2 * b2.gap || fc > ay.al - 2 * b2.gap || (fb < b2.gap + aG * bN.get(13).width ? (g0.g1 = !0, g.g2(8, 0, new g3(21, {
			g4: 0,
			g5: 0,
			g6: 9
		})), 0) : fb < 2 * b2.gap + aG * bN.get(13).width || !(fb < 2 * b2.gap + 2 * aG * bN.get(13).width) || (g0.g1 = !0, g.g2(8, 0, new g3(21, {
			g4: 1,
			g5: 0,
			g6: 9
		})), 0)))
	}, this.bG = function() {
		return Math.floor(ay.al - aG * bN.get(13).height - b2.gap)
	}, this.bH = function() {
		if (bN.fv()) {
			bI.imageSmoothingEnabled = !0, bI.setTransform(aG, 0, 0, aG, b2.gap, this.bG()), bI.drawImage(bN.get(14), 0, 0), bI.setTransform(aG, 0, 0, aG, 2 * b2.gap + aG * bN.get(13).width, this.bG()), bI.drawImage(bN.get(13), 0, 0);
			for (var a6 = 1; 0 <= a6; a6--) fr[a6] && (bI.setTransform(1, 0, 0, 1, (1 + a6) * b2.gap + a6 * aG * bN.get(13).width, this.bG()), bI.font = fr[a6].font, q.r.textBaseline(bI, 1), q.r.textAlign(bI, 1), bI.fillStyle = i.bM, bI.fillText(
				fr[a6].bV, .5 * aG * bN.get(13).width, .86 * aG * bN.get(13).height));
			bI.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function g7() {
	this.g8 = new g9, this.gA = new gB, this.gC = new gD, this.m = function(gE, dS, gF, gG) {
		var gH;
		df.dp || ((gH = {}).gI = df.du, gH.gE = gE, gH.dS = dS, gH.gF = gF, gH.gG = gG, gH.gJ = y.z, gH.gK = y.gL, gM.gN(gH), this.g8.m(gH))
	}, this.bD = function() {
		df.dp || (this.g8.bD(), 3 !== g.dM) || bA.bC() % 15 != 5 && 2 !== df.gP || g.dN().gQ()
	}, this.gR = function() {
		var gS = this.g8.gH;
		0 === df.gP && cM.gT(), y.bd(gS.gJ, gS.gK), 1 === gS.dS.length && (gM.gU(gS.gF), gM.gV(gS.gW, gS.gX)), c8.d4.close(c8.d4.bt, 3257), c8.d4.bt = 0, df.gY(gS.gE, gS.gI, gS.dS, gS.gF, gS.gG, !0)
	}, this.gZ = function(bV) {
		var a6 = bV.indexOf("=");
		return 0 <= a6 ? bV.substring(a6 + 1) : bV
	}, this.ga = function(bV) {
		return "https://territorial.io/?replay=" + bV
	}
}

function gb() {
	gc.gd(), bI.setTransform(cz, 0, 0, cz, 0, 0), bI.imageSmoothingEnabled = cz < 3, bI.drawImage(y.ge, cx.cy(), cx.bG()), gf.gg.bH(), bI.drawImage(gh, cx.cy(), cx.bG()), gc.bH(), bI.imageSmoothingEnabled = !1, bI.setTransform(1, 0, 0, 1, 0, 0), eE
		.gg.bH(), fZ.bH(), gi.bH(), (df.fR ? (ep.bH(), gj) : (f6.bH(), gk.bH(), b8.bH(), gj.bH(), gl.bH(), gm.bH(), cx.bH(), fx.bH(), ep.bH(), gn.bH(), go.bH(), dq.bH(), b7.bH(), gp.bH(), gq.bH(), gr)).bH(), g.bH()
}

function gs(bJ, ak, al) {
	bJ.clearRect(0, 0, ak, al), bJ.fillStyle = i.bL, bJ.fillRect(0, 0, ak, al)
}

function gt(bJ, ak, al, gu) {
	bJ.fillStyle = i.bM, bJ.fillRect(0, 0, ak, gu), bJ.fillRect(0, 0, gu, al), bJ.fillRect(ak - gu, 0, gu, al), bJ.fillRect(0, al - gu, ak, gu)
}

function fp(bJ, a7, a8, gv, gu, dY, gw) {
	bJ.fillStyle = i.bM;
	var dY = Math.floor(gv * dY),
		gy = (dY += (dY - gu) % 2, Math.floor((dY - gu) / 2)),
		gv = Math.floor((gv - dY) / 2);
	bJ.fillRect(a7 + gv, a8 + gv + gy, dY, gu), gw && bJ.fillRect(a7 + gv + gy, a8 + gv, gu, dY)
}

function h0() {
	var h1, h2, h3, h4, h5, h6, h7, h8;

	function hB(a6) {
		var hC;
		for (h3--, hC = a6; hC < h3; hC++) h4[hC] = h4[hC + 1], h5[hC] = h5[hC + 1], h6[hC] = h6[hC + 1], h7[hC] = h7[hC + 1], h8[hC] = h8[hC + 1]
	}
	this.m = function() {
		h1 = 1, h3 = 0, h2 = 2 * df.eM, h4 = new Uint16Array(h2), h5 = new Uint8Array(h2), h6 = new Uint16Array(h2), h7 = new Uint32Array(h2), h8 = new Uint32Array(h2)
	}, this.h9 = function(aQ, position) {
		h7[aQ] = position
	}, this.bD = function() {
		for (var a6 = h3 - 1; 0 <= a6; a6--) 0 == h5[a6]-- && (h5[a6] = 2, hA.bD(a6, h6[a6], h4[a6], h7[a6], h8[a6]))
	}, this.hD = function(player, id) {
		for (var a6 = h3 - 1; 0 <= a6; a6--)
			if (player === h4[a6] && id === h6[a6]) return void hB(a6)
	}, this.hE = function(player) {
		for (var a6 = h3 - 1; 0 <= a6; a6--) player === h4[a6] && (hA.hF(player, h7[a6]), hB(a6))
	}, this.hG = function(player, hH, hI) {
		if (h2 <= h3) return 0;
		h4[h3] = player, h5[h3] = 0, h6[h3] = h1, h7[h3] = hH, h8[h3] = hI;
		player = h1;
		return h3++, h1 = 2 * h2 < ++h1 ? 1 : h1, player
	}, this.bH = function() {
		if (!(cz < 40 || 0 === h3)) {
			var hC, a7, a8, a6, fontSize, hN, hO, bK = f8 / cz,
				hP = f9 / cz,
				hQ = (ay.ak + f8) / cz,
				hR = (ay.al + f9) / cz;
			for (q.r.textAlign(bI, 1), q.r.textBaseline(bI, 1), hC = h3 - 1; 0 <= hC; hC--) a7 = dZ.cy(h7[hC]), a8 = dZ.bG(h7[hC]), a6 = h4[hC], bK - 1 < a7 && a7 < hQ && hP - 1 < a8 && a8 < hR && 0 !== dV.eg[a6] && ((fontSize = Math.floor(.94 *
				cz * fZ.hS(a6))) < 6 || (a7 = Math.floor(ay.ak * (a7 + .5 - bK) / (hQ - bK)), a8 = Math.floor(ay.al * (a8 + .48 - hP) / (hR - hP)), bI.font = q.r.ft(1, fontSize), bI.fillStyle = i.hT, hO = hU.hV(a6, hU.hW(a6, h6[hC])), bI
				.fillText(aZ.af.data[7].value ? q.cg.hX(hO) : dV.hY[a6], a7, a8), (hN = Math.floor(.5 * fontSize)) < 6) || (bI.font = q.r.ft(1, hN), bI.fillText(aZ.af.data[7].value ? dV.hY[a6] : q.cg.hX(hO), a7, a8 + Math.floor(.82 *
				fontSize))))
		}
	}
}

function hZ() {
	let k, ha;

	function hd() {
		hn.ho.hideCMPButton(), g.g2(0);
		var bV = hk.gZ(ha.hi());
		(0 < bV.length && bV === hk.g8.hl || hk.gC.hp(bV)) && hk.gR()
	}
	this.show = function(hh) {
		this.gQ(hh), k.show(), this.resize()
	}, this.gQ = function(hh) {
		0 === df.gP ? (hh = hh || ha.hi(), ha.hj(hh)) : (df.dp || (hk.g8.hl = hk.gA.hm()), ha.hj(hk.ga(hk.g8.hl)))
	}, this.s = function() {
		k.s()
	}, this.resize = function() {
		k.resize(), ha.resize()
	}, this.t = function(u) {
		2 === u ? k.v[0].w() : hd()
	}, k = new n("▶️ " + e.f[82], [new d("❌ " + e.f[92], function() {
		g.h()
	}, i.j), new d("🔲 " + e.f[93], function() {
		ha.hb()
	}), new d("📋 " + e.f[94], function() {
		ha.hc()
	}), new d("🗑️ " + e.f[95], function() {
		ha.clear()
	}), new d("▶️ " + e.f[96], function() {
		hd()
	}, i.he)]), ha = new hf("replayData", "Insert the replay link here!"), k.p.appendChild(ha.hg)
}

function hf(name, placeholder) {
	var ha = document.createElement("textarea"),
		hq = (this.hg = ha, !0);

	function hu() {
		ha.select(), document.execCommand("copy")
	}
	this.resize = function() {
			ha.style.padding = q.r.hr(b2.hs)
		}, this.hj = function(ht) {
			ha.value = ht
		}, this.hi = function() {
			return ha.value
		}, this.hb = function() {
			ha.select()
		}, this.clear = function() {
			ha.value = ""
		}, this.hc = function() {
			hq && navigator.clipboard ? (ha.select(), navigator.clipboard.writeText(ha.value).catch(function() {
				hq = !1, hu()
			})) : hu()
		}, ha.setAttribute("name", name), ha.setAttribute("id", name + "Field"), ha.setAttribute("autocomplete", "off"), ha.setAttribute("placeholder", placeholder), ha.style.top = "0", ha.style.left = "0", ha.style.width = "100%", ha.style.height =
		"100%", ha.style.userSelect = "none", ha.style.outline = "none", ha.style.resize = "none", ha.style.border = "none", ha.style.color = i.bM, ha.style.backgroundColor = i.fo, ha.style.fontSize = "1.2em"
}

function hv() {
	this.hw = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.hx = [i
		.bM, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", i.bM, "rgb(170,170,170)"
	], this.hy = [i.bM, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", i.bM, i.hT], this.hz = [i.hT, i.bM, i.bM, i.bM, i.hT, i.hT, i.hT, i.hT, i.bM];
	var i0 = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		i4 = (this.i1 = ["rgba(" + i0[0] + ",", "rgba(" + i0[1] + ",", "rgba(" + i0[2] + ",", "rgba(" + i0[3] + ",", "rgba(" + i0[4] + ",", "rgba(" + i0[5] + ",", "rgba(" + i0[6] + ",", "rgba(" + i0[7] + ",", "rgba(" + i0[8] + ",", "rgba(" + i0[9] +
				","
			], this.i2 = ["rgb(" + i0[0] + ")", "rgb(" + i0[1] + ")", "rgb(" + i0[2] + ")", "rgb(" + i0[3] + ")", "rgb(" + i0[4] + ")", "rgb(" + i0[5] + ")", "rgb(" + i0[6] + ")", "rgb(" + i0[7] + ")", "rgb(" + i0[8] + ")", "rgb(" + i0[9] + ")"],
			this.fr = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.i3 = [
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
	this.i5 = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.i6 = new Uint8Array(df.eM), this.i7 = null, this.i8 = null, this.m = function(dS) {
		this.i6.fill(0), this.i9(), df.iA && (iB.cP && iB.iC.iD ? this.iE() : 9 === df.eo ? this.iF() : this.bD(dS))
	}, this.iE = function() {
		var a6, aF = df.iG;
		for (this.i5 = [0, 1, 2, 3, 4, 5, 6, 7, 8], a6 = 0; a6 < aF; a6++) this.i6[a6] = iB.iC.iD[a6]
	}, this.i9 = function() {
		for (var a6 = this.i5.length - 1; 0 <= a6; a6--) this.i5[a6] = a6;
		this.i7 = [], this.i8 = []
	}, this.iF = function() {
		for (var a6 = df.dg + iH.iI - 1; 0 <= a6; a6--) this.i6[a6] = 1;
		for (a6 = df.dg + iH.iI; a6 < df.eM; a6++) this.i6[a6] = 2;
		this.i5[1] = 7, this.i5[2] = 8
	}, this.bD = function(dS) {
		var iJ = new Uint8Array(df.dg),
			iK = new Uint8Array(df.dg),
			iL = new Uint16Array(8),
			iM = new Uint16Array(this.i5.length);
		this.iN(dS, iJ, iK, iL), this.iO(iL), df.iP || this.iQ(iM, iJ, iK), this.iR(iJ, iK, iM), df.iP ? this.iS() : this.iT()
	}, this.iN = function(dS, iJ, iK, iU) {
		for (var iV, cY, iW, aF = this.i5.length - 1, bZ = new Uint16Array(aF), a6 = df.dg - 1; 0 <= a6; a6--) {
			for (iV = aF; 1 <= iV; iV--) bZ[iV - 1] = Math.abs(4 * dS[a6].iX[0] - i4[iV][0]) + Math.abs(4 * dS[a6].iX[1] - i4[iV][1]) + Math.abs(4 * dS[a6].iX[2] - i4[iV][2]);
			for (iW = 768, iV = aF - 1; 0 <= iV; iV--) bZ[cY = (iV + a6) % aF] < iW && (iW = bZ[cY], iJ[a6] = cY);
			for (iU[iJ[a6]] += 4, iW = 768, iV = aF - 1; 0 <= iV; iV--) bZ[cY = (iV + a6) % aF] < iW && cY !== iJ[a6] && (iW = bZ[cY], iK[a6] = cY);
			iU[iK[a6]]++
		}
	}, this.iO = function(iU) {
		for (var iV, iY, aF = this.i5.length - 1, a6 = aF; 0 <= a6; a6--) this.i5[a6] = a6;
		for (a6 = aF - 1; 0 <= a6; a6--) iU[a6]++;
		for (a6 = 1; a6 <= aF; a6++) {
			for (iY = 0, iV = 1; iV < aF; iV++) iU[iV] > iU[iY] && (iY = iV);
			iU[iY] = 0, this.i5[a6] = iY + 1
		}
	}, this.iQ = function(iM, iJ, iK) {
		var a6, iV, iZ, u, ia, cY, fd, gS, ib = this.i5.length - 1,
			ic = new Uint16Array(ib),
			ie = [],
			am = Math.max(df.dg + 1 >> 1, 6);
		loop: for (a6 = 0; a6 < df.dg; a6++)
			if (null !== (iZ = q.cg.ig(dV.ih[a6]))) {
				for (iV = this.i7.length - 1; 0 <= iV; iV--)
					if (iZ === this.i7[iV] && this.i8[iV].length < am) {
						this.i8[iV].push(a6);
						continue loop
					} this.i7.push(iZ), ie.push(!1), this.i8.push([a6])
			}
		for (iV = this.i7.length - 1; 0 <= iV; iV--) {
			for (ia = -1, u = this.i7.length - 1; 0 <= u; u--) !ie[u] && (-1 === ia || this.i8[u].length > this.i8[ia].length) && (ia = u);
			for (u = ib - 1; 0 <= u; u--) ic[u] = 1;
			for (u = this.i8[ia].length - 1; 0 <= u; u--) ic[iJ[this.i8[ia][u]]] += 3, ic[iK[this.i8[ia][u]]]++;
			for (a6 = ib - 1; 0 <= a6; a6--) {
				for (cY = ia % ib, u = ib - 1; 0 <= u; u--) ic[u] > ic[cY] && (cY = u);
				for (fd = -1, u = df.ii; 0 < u; u--)
					if (this.i5[u] === cY + 1) {
						fd = u;
						break
					} if (ic[cY] = 0, -1 !== fd) {
					for (gS = 0, u = df.ii; 0 < u; u--) iM[fd] > iM[u] && gS++;
					if (gS !== df.ii - 1) {
						for (u = this.i8[ia].length - 1; 0 <= u; u--) iM[fd]++, this.i6[this.i8[ia][u]] = fd;
						break
					}
				}
			}
			ie[ia] = !0
		}
	}, this.iR = function(iJ, iK, iM) {
		for (var a6, a9, aF = this.i5.length - 1, border = aR(df.dg, df.ii), ij = (0 < df.dg % df.ii && border++, new Uint8Array(1 + aF)), iV = aF; 1 <= iV; iV--) ij[this.i5[iV]] = iV;
		for (a6 = 0; a6 < df.dg; a6++) a9 = ij[iJ[a6] + 1], 0 === this.i6[a6] && a9 <= df.ii && iM[a9] < border && (iM[a9]++, this.i6[a6] = a9);
		for (a6 = 0; a6 < df.dg; a6++) a9 = ij[iK[a6] + 1], 0 === this.i6[a6] && a9 <= df.ii && iM[a9] < border && (iM[a9]++, this.i6[a6] = a9);
		for (iV = df.ii; 1 <= iV; iV--)
			for (a6 = df.dg - 1; 0 <= a6 && !(iM[iV] >= border); a6--) 0 === this.i6[a6] && (iM[iV]++, this.i6[a6] = iV)
	}, this.iS = function() {
		var a6, hC, iU = new Uint16Array(df.ii);
		for (iU[df.ii - 1] = df.eM, a6 = df.ii - 2; 0 <= a6; a6--) iU[a6] = gM.ik[a6].il;
		for (iU[0]--, hC = 0 === iU[0] ? 1 : 0, a6 = df.dg; a6 < df.eM; a6++) this.i6[a6] = hC + 1, iU[hC]--, iU[hC] <= 0 && hC++
	}, this.iT = function() {
		for (var a6 = df.dg; a6 < df.eM; a6++) this.i6[a6] = 1 + a6 % df.ii
	}
}

function im() {
	this.d4 = new io, this.gg = new ip, this.m = function() {
		this.d4.m()
	}, this.bD = function() {
		0 !== this.d4.iq && this.d4.iq--
	}
}

function ir() {
	this.is = function(player, it, hO) {
		q.ce.iu(player, hO, it) && (iv.iw(player, it), it < df.dg) && bx.random() < bx.value(10) && (ix[it] = 0)
	}, this.iy = function(player, it, hO) {
		q.ce.iz(hO, it) && (q.ce.j0(it, j1.j2[0]), j3.j4(player, it), fZ.j5(it, j1.j2[0]))
	}
}

function j6(j7, j8, j9 = .5) {
	this.a7 = 0, this.a8 = 0, this.ak = 0, this.al = 0, this.resize = function() {
		this.al = Math.min(q.r.jA(j9) * j7[1] * ay.az, ay.al - 2 * b2.gap), this.ak = Math.min(this.al * (j7[0] / j7[1]), ay.ak - 2 * b2.gap), this.al = j7[1] * this.ak / j7[0], this.a7 = b2.gap + j8[0] * (ay.ak - this.ak - 2 * b2.gap), this.a8 =
			b2.gap + j8[1] * (ay.al - this.al - 2 * b2.gap)
	}, this.jB = function() {
		return this.a7 + .5 * this.ak
	}
}

function jC() {
	this.jD = new Uint16Array(2), this.j2 = new Uint32Array(2), this.jE = new Uint32Array(2), this.jF = new Uint8Array(4), this.jG = new Uint8Array(4), this.jH = new Uint32Array(5), this.jI = new Uint32Array(8), this.jJ = new Uint16Array(512), this
		.jK = function(bZ, jL) {
			return bZ[0] = jL, bZ
		}, this.jM = function(bZ, jL, jN) {
			return bZ[0] = jL, bZ[1] = jN, bZ
		}, this.jO = function(bZ, jL, jN, jP) {
			return bZ[0] = jL, bZ[1] = jN, bZ[2] = jP, bZ
		}, this.jQ = function(bZ, jL, jN, jP, jR) {
			return bZ[0] = jL, bZ[1] = jN, bZ[2] = jP, bZ[3] = jR, bZ
		}
}

function jS() {
	var jU;
	this.jT = [], this.jU = document.createElement("div"), this.jV = function(bV, marginTop = null) {
		var title = document.createElement("h2");
		title.textContent = bV, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.jU.appendChild(title)
	}, this.jW = function(bV) {
		var jX = document.createElement("p");
		return jX.textContent = bV, jX.style.fontSize = "0.75em", jX.style.lineHeight = "1.2em", jX.style.marginBottom = "0", this.jU.appendChild(jX), jX
	}, this.jY = function(b, fontSize = "1em") {
		var jU = document.createElement("div");
		jU.innerHTML = b, jU.style.fontSize = fontSize, jU.style.lineHeight = "1.2em", this.jU.appendChild(jU)
	}, this.jZ = function(ja) {
		for (var jb = ja.jb, aF = jb.length, a6 = 0; a6 < aF; a6++) this.jU.appendChild(jb[a6])
	}, this.jc = function(jd) {
		this.jT.push(jd), this.jU.appendChild(jd.cY)
	}, this.resize = function() {
		for (var aF = this.jT.length, a6 = 0; a6 < aF; a6++) this.jT[a6].resize && this.jT[a6].resize()
	}, (jU = this.jU).style.position = "absolute", jU.style.height = "auto", jU.style.padding = "0.5em"
}

function je() {
	var jf = new Uint8Array(64);
	this.m = function() {
		var a6;
		for (jf[0] = 45, jf[37] = 95, a6 = 0; a6 < 10; a6++) jf[a6 + 1] = 48 + a6;
		for (a6 = 0; a6 < 26; a6++) jf[a6 + 11] = 65 + a6, jf[a6 + 38] = 97 + a6
	}, this.dA = function(jg) {
		for (var jh = bf, bb = new Uint8Array(jg), a6 = 0; a6 < jg; a6++) bb[a6] = jh.dB(6);
		return bb
	}, this.d9 = function(bb) {
		for (var aF = bb.length, ji = jf, bZ = [], a6 = 0; a6 < aF; a6++) bZ.push(String.fromCharCode(ji[bb[a6]]));
		return bZ.join("")
	}
}

function jj() {
	var jk, jl, jm = -15e3,
		jn = !1;

	function bF(cY) {
		k4() || (jn = !0, k5(cY, 1), c8.d4.cL(c8.d4.bt), k6(Math.floor(ay.k7 * cY.clientX), Math.floor(ay.k7 * cY.clientY)))
	}

	function jt(cY) {
		jm = bA.bB, k5(cY, 1), c8.d4.cL(c8.d4.bt), 0 < cY.touches.length && (jk = Math.floor(ay.k7 * cY.touches[0].clientX), jl = Math.floor(ay.k7 * cY.touches[0].clientY), k8.jt(cY) || k6(jk, jl))
	}

	function k6(a7, a8) {
		g.bF(a7, a8), 0 === df.gP ? cM.bF(a7, a8) : gj.k9(a7, a8) || gq.bF(a7, a8) || gp.bF(a7, a8) || b7.kA(a7, a8) || go.bF(a7, a8) || dq.bF(a7, a8) || g0.kB(a7, a8) || gl.bF(a7, a8) || b7.kC(a7, a8)
	}

	function fU(cY) {
		k4() || (jn = !0, k5(cY, 1), kD(Math.floor(ay.k7 * cY.clientX), Math.floor(ay.k7 * cY.clientY)))
	}

	function ju(cY) {
		jm = bA.bB, k5(cY, 1), 0 < cY.touches.length && (jk = Math.floor(ay.k7 * cY.touches[0].clientX), jl = Math.floor(ay.k7 * cY.touches[0].clientY), k8.ju(cY) || kD(jk, jl))
	}

	function kD(a7, a8) {
		g.fU(a7, a8), 0 === df.gP ? cM.fU(a7, a8) : (kE.dl(a7, a8), gq.fU(a7, a8) || (dq.fU(a7, a8), b7.ai() ? b7.fU(a7, a8) : b8.dv ? b8.fU(a7) && (bA.bE = !0) : (gk.fU(a7, a8), cx.fF && cx.fU(a7, a8) && (bA.bE = !0))))
	}

	function js(cY) {
		k4() || (k5(cY, 1), kF(), 0 === df.gP ? (cM.click(-1024, -1024), kG.kH()) : (gk.kI(-1024, -1024), dq.fU(-1024, -1024), b8.kJ(), cx.fF && (cx.fF = !1)))
	}

	function jr(cY) {
		k4() || (k5(cY, 1), kK(Math.floor(ay.k7 * cY.clientX), Math.floor(ay.k7 * cY.clientY), 2 === cY.button), g0.g1 && (g0.g1 = !1, cY.preventDefault()))
	}

	function click(cY) {
		k4() || k5(cY, 1)
	}

	function jv(cY) {
		jm = bA.bB, k5(cY, 1), cY && cY.touches && 0 < cY.touches.length && 0 !== df.gP ? cx.fF = !1 : k8.kL() || (kK(jk, jl, !1), g0.g1 && (g0.g1 = !1, cY.preventDefault()))
	}

	function jw(cY) {
		jm = bA.bB, k5(cY, 1), kK(jk, jl, !1), g0.g1 && (g0.g1 = !1, cY.preventDefault())
	}

	function jx(cY) {
		kM.jx(cY)
	}

	function jy(cY) {
		kM.jy(cY)
	}

	function jz(cY) {
		k4() || k5(cY, 0)
	}

	function kK(a7, a8, kN) {
		kF(), 0 === df.gP ? cM.click(a7, a8) : (gk.kI(a7, a8), gq.kI(), b8.kJ(), cx.fF = !1, b7.click(a7, a8, kN) ? bA.bE = !0 : dq.jr(a7, a8))
	}

	function kF() {
		g.kF()
	}

	function fS(cY) {
		var a7, a8, deltaY;
		k4() || (k5(cY, 1), c8.d4.cL(c8.d4.bt), a7 = Math.floor(ay.k7 * cY.clientX), a8 = Math.floor(ay.k7 * cY.clientY), deltaY = cY.deltaY, 1 === cY.deltaMode && (deltaY *= 16), g.fS(a7, a8, deltaY), 0 === df.gP ? cM.fS(a7, a8, deltaY) : gk.fS(a7,
			a8, deltaY) || (b8.kO(a7, a8) ? b8.fS(deltaY) && (bA.bE = !0) : cx.fS(a7, a8, deltaY)))
	}

	function k0(cY) {
		k5(cY, 0)
	}

	function k5(cY, id) {
		0 === id && g.ai() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== cM.cN() && cY.preventDefault()
	}

	function k2(cY) {
		if (keybindHandler(cY.key)) return;
		k4() || ("ArrowLeft" === cY.key ? kR.kS(3) : "ArrowUp" === cY.key ? kR.kS(0) : "ArrowRight" === cY.key ? kR.kS(1) : "ArrowDown" === cY.key ? kR.kS(2) : "a" === cY.key ? b8.kT(.9375) : "d" === cY.key ? b8.kT(16 / 15) : "s" === cY.key ? b8.kT(
			7 / 8) : "w" === cY.key ? b8.kT(8 / 7) : "1" === cY.key ? b8.kT(.75) : "2" === cY.key ? b8.kT(7 / 8) : "3" === cY.key ? b8.kT(.9375) : "4" === cY.key ? b8.kT(31 / 32) : "5" === cY.key ? b8.kT(32 / 31) : "6" === cY.key ? b8.kT(16 /
			15) : "7" === cY.key ? b8.kT(8 / 7) : "8" === cY.key ? b8.kT(4 / 3) : "+" === cY.key ? 0 !== df.gP && cx.fS(Math.floor(ay.ak / 2), Math.floor(ay.al / 2), -200) : "-" === cY.key ? 0 !== df.gP && cx.fS(Math.floor(ay.ak / 2), Math
			.floor(ay.al / 2), 200) : "c" === cY.key ? 0 !== df.gP && gq.kU() : " " === cY.key ? df.gP && kE.dm(!1) : "b" === cY.key && df.gP && kE.dm(!0))
	}

	function k1(cY) {
		k4() || bA.bB < 400 || "Enter" === cY.key && g.t(1) || (8 !== cM.cN() && cM.t(cY) ? bA.bE = !0 : "Escape" === cY.key ? g0.kV() : "ArrowLeft" === cY.key || "a" === cY.key ? kR.kW(3) : "ArrowUp" === cY.key || "w" === cY.key ? kR.kW(0) :
			"ArrowRight" === cY.key || "d" === cY.key ? kR.kW(1) : "ArrowDown" === cY.key || "s" === cY.key ? kR.kW(2) : "h" === cY.key ? gj.kX(!df.fR) : " " === cY.key && df.gP && (dq.dr && dq.kY(), df.dp) && gj.kZ(!1))
	}

	function k3() {
		"hidden" === document.visibilityState ? 1 === df.gP && (df.dp ? gj.ka() : !df.iP || dq.dr || df.e7 || dq.kY()) : bA.bE = !0
	}

	function k4() {
		return jm + 15e3 > bA.bB
	}

	function resize() {
		ay.kd()
	}
	this.jo = 0, this.jp = "", this.g1 = !1, this.m = function() {
		jq.addEventListener("mousedown", bF, {
			passive: !1
		}), jq.addEventListener("mousemove", fU, {
			passive: !1
		}), jq.addEventListener("mouseup", jr, {
			passive: !1
		}), jq.addEventListener("click", click, {
			passive: !1
		}), jq.addEventListener("mouseleave", js, {
			passive: !1
		}), jq.addEventListener("wheel", fS, {
			passive: !1
		}), jq.addEventListener("touchstart", jt, {
			passive: !1
		}), jq.addEventListener("touchmove", ju, {
			passive: !1
		}), jq.addEventListener("touchend", jv, {
			passive: !1
		}), jq.addEventListener("touchcancel", jw, {
			passive: !1
		}), jq.addEventListener("dragover", jx), jq.addEventListener("drop", jy), jq.addEventListener("dblclick", jz), document.addEventListener("contextmenu", k0), document.addEventListener("keyup", k1), document.addEventListener("keydown",
			k2), document.addEventListener("visibilitychange", k3), window.addEventListener("resize", resize)
	}, this.kB = function(a7, a8) {
		return !!gj.bF(a7, a8) || !!(gk.bF(a7, a8) || cx.bF(a7, a8) || b8.bF(a7, a8) || f6.bF(a7, a8))
	}, this.kb = k4, this.kc = function() {
		return !jn || 0 < jm
	}, this.kV = function() {
		if (!g.ai()) return 8 === cM.cN() ? df.fR ? void gj.kX(!1) : gq.ai ? void gq.kY() : void dq.kY() : void(7 === cM.cN() ? ke.kf() : 6 === cM.cN() ? kg.kh() : 2 === cM.cN() && gM.ki());
		g.t(2)
	}
}

function cl() {
	this.kj = function(kk, aQ, kl) {
		var gv = kk.height,
			km = q.r.kn(gv, gv),
			ko = q.r.getContext(km);
		return function(ak, ko, kl) {
			ko.fillStyle = kl, ko.beginPath(), ko.arc(ak / 2, ak / 2, .47 * ak, 0, 2 * Math.PI), ko.fill()
		}(gv, ko, kl), ko.drawImage(kk, -aQ * gv, 0), km
	}, this.kq = function(kr) {
		var gv = kr.height,
			ko = q.r.getContext(kr, !0),
			ks = ko.getImageData(0, 0, gv, gv);
		return q.cj.kt(ks.data, gv, gv, .9), ko.putImageData(ks, 0, 0), kr
	}
}

function ku(data) {
	let k, kv;

	function kw(kz) {
		let g5;
		g5 = kz < 0 ? parseInt(data.data[0][0]) - 1 + kz : parseInt(data.data[data.data.length - 1][0]), g.g2(8, 0, new g3(21, {
			g4: data.g4,
			g5: g5,
			g6: g5 + Math.abs(kz) - 1
		}))
	}
	var c;
	this.show = function() {
		k.show(), this.resize()
	}, this.s = function() {
		k.s()
	}, this.resize = function() {
		k.resize(), kv.resize()
	}, this.t = function(u) {
		2 === u && k.v[0].w()
	}, c = [new d("❌ " + e.f[92], function() {
		g.h()
	}), new d("⬆️ Prev 100 (🧈 1.01)", function() {
		kw(-100)
	}), new d("⬆️ Prev 10 (🧈 0.11)", function() {
		kw(-10)
	}), new d("⬇️ Next 10 (🧈 0.11)", function() {
		kw(10)
	}), new d("⬇️ Next 100 (🧈 1.01)", function() {
		kw(100)
	}), new d("🛠️ Custom", function() {
		g.g2(11, 10, new kx({
			g4: data.g4
		}))
	})], k = new n(data.title, c), kv = new ky(k.p, data.data)
}

function l0() {
	this.l1 = null, this.m = function() {
		10 !== df.eo ? this.l1 = null : this.l1 = new Uint32Array(df.eM)
	}, this.bD = function() {
		10 === df.eo && this.l2()
	}, this.l2 = function() {
		for (var dY, target, l3, l1 = this.l1, dS = dT, l4 = dV.l5, a6 = dR - 1; 0 <= a6; a6--)(dY = dS[a6]) >= df.dg || (target = Math.max(aR(l4[dY], 4), 2048), l3 = Math.max(iv.l6(dY), 100), l1[dY] += aR(l3 * target, 1e4), l1[dY] > target && (
			l1[dY] = target))
	}, this.l7 = function(player, hO) {
		return hO > this.l1[player] ? (hO = this.l1[player], this.l1[player] = 0) : this.l1[player] -= hO, hO
	}
}

function l8() {
	this.w = new l9, this.af = new aS, this.d6 = new lA, this.d4 = new lB, this.m = function() {
		this.af.m(), (new lC).m()
	}
}

function lD() {
	this.eF = new lE, this.lF = new lG, this.gg = new lH, this.d4 = new lI, this.lJ = new lK, this.lL = new lM, this.lN = new lO, this.lP = new lQ, this.lR = new lS, this.m = function() {
		this.gg.m(), this.d4.m(), this.lJ.m(), this.lL.m()
	}
}

function lT() {
	this.ew = function() {
		var aF = df.dg,
			eb = ek.result.eb,
			lU = eb.length,
			dU = (bc.bd(40 + 16 * aF + lU * (33 + 3 * (df.eo < 7))), bc.bh(1, 1), bc.bh(4, 10), bc.bh(10, lU), bc.bh(1, +(2 === df.eh)), bc.bh(24, ek.result.ec), dV.dU);
		for (let a6 = 0; a6 < aF; a6++) bc.bh(16, dU[a6]);
		var ev = dV.ev;
		for (let a6 = 0; a6 < lU; a6++) {
			var dY = eb[a6];
			bc.bh(9, dY), bc.bh(24, ev[dY])
		}
		if (df.eo < 7) {
			var i6 = lV.i6;
			for (let a6 = 0; a6 < lU; a6++) bc.bh(3, 7 & i6[eb[a6]])
		}
		c8.d4.send(c8.d4.bt, bc.bg)
	}
}

function lW() {
	this.cK = function(cB) {
		bc.bd(39), bc.bh(1, 0), bc.bh(6, 13), bc.bh(14, lh.li), bc.bh(4, av.id), bc.bh(7, av.aa), bc.bh(1, +lj), bc.bh(1, +lk), bc.bh(5, (new Date).getHours() % 24), c8.d4.send(cB, bc.bg)
	}, this.lY = function(cB, lZ, la) {
		bc.bd(26), bc.bh(1, 0), bc.bh(6, 14), bc.bh(3, la), bc.bh(16, lZ), c8.d4.send(cB, bc.bg)
	}, this.lb = function(id) {
		bc.bd(13), bc.bh(1, 0), bc.bh(6, 15), bc.bh(6, id), c8.d4.send(0, bc.bg)
	}, this.lc = function(ld, jd) {
		bc.bd(7 + 26 * jd.length), bc.bh(1, 0), bc.bh(6, 9);
		for (let a6 = 0; a6 < jd.length; a6++) bc.bh(16, jd[a6][0]), bc.bh(10, jd[a6][1]);
		c8.d4.send(ld, bc.bg)
	}, this.le = function(lf, lg) {
		bc.bd(20), bc.bh(1, 0), bc.bh(6, 19), bc.bh(1, lf), bc.bh(12, lg), c8.d4.send(c8.d4.bt, bc.bg)
	}, this.ll = function(username) {
		bc.bh(5, username.length), d7.dK.bi(username)
	}
}

function lm() {
	for (dR = 0, a6 = df.eM - 1; 0 <= a6; a6--) 0 !== dV.eg[a6] && dR++;
	dT = new Uint16Array(dR);
	for (var aF = 0, a6 = 0; a6 < df.eM; a6++) 0 !== dV.eg[a6] && (dT[aF++] = a6)
}

function ln() {
	lo(), lp()
}

function lp() {
	for (var a6 = dR - 1; 0 <= a6; a6--) 0 === dV.eg[dT[a6]] && lq(a6)
}

function lq(a6) {
	dR--;
	for (var hC = a6; hC < dR; hC++) dT[hC] = dT[hC + 1]
}

function lo() {
	for (let a6 = dR - 1; 0 <= a6; a6--) {
		var eu, dY = dT[a6];
		dV.ev[dY] <= aR(dV.lr[dY], 4) ? dV.ev[dY] <= 1e3 && (2 !== dV.eg[dY] || 0 === dV.ev[dY]) && ls(dY) : dV.ev[dY] >= dV.lr[dY] ? (eu = dV.ev[dY], 250 <= (dV.lr[dY] = eu) && (dV.de[dY] = 1)) : dV.lr[dY] -= Math.max(1, aR(dV.lr[dY] - dV.ev[dY],
			1e3))
	}
}

function lt() {
	for (var lg = 0, a6 = dR - 1; 0 <= a6; a6--) lg += dV.l5[dT[a6]];
	return lg % 4096
}

function lu() {
	function m3(title, m4, cY) {
		l2(cY), g.g2(4, 5, new lv("⚠️ " + title, m4, !0))
	}

	function l2(cY) {
		! function(cY) {
			var ly = cM.cN();
			0 !== ly && (6 === ly ? c8.d4.cU(cY) : 7 === ly ? (ke.m7(), c8.d4.close(c8.d4.bu, 3256)) : 8 === ly && df.m8(!0))
		}(cY), g.d4.m6()
	}
	this.cZ = function(cB, cY) {
		if (8 === g.dM && 0 === cB) g.g2(4, 0, new lv("⚠️ " + e.lw(64), e.lx(cY), !0));
		else {
			var ly = cM.cN();
			if (6 === ly) {
				if (4211 === cY) return l2(cY), void g.g2(4, 5, new lv("🚀 " + e.f[122], e.f[123], !0, [new d("❌ " + e.f[92], function() {
					g.h()
				}, i.j), new d("🔄 " + e.f[124], function() {
					av.aw.lz()
				}, i.m0)]));
				if (4214 !== cY) return void kg.m1(cB)
			} else {
				if (7 !== ly) return 8 === ly ? void(cB !== c8.d4.bt || df.iP || 1 !== df.gP || f6.m2(e.lx(cY))) : void 0;
				if (cB !== c8.d4.bu) return
			}
			m3(e.lw(64), e.lx(cY), cY)
		}
	}, this.cT = function(cY) {
		8 === cM.cN() ? df.iP || 1 !== df.gP || f6.m2(e.lx(cY)) : m3(e.lw(64), e.lx(cY), cY)
	}
}

function m9() {
	this.ej = function() {}
}

function mA() {
	var mB, mC, mD, mE, mF, mG;
	this.m = function() {
		mD = mB = 10, mE = mC = 10
	}, this.mH = function() {
		mG = 512, mF = new Uint16Array(mG);
		for (var a6 = 0; a6 < mG; a6++) mF[a6] = 100 + mI(aR(25600 * a6, mG - 4), 9)
	}, this.mJ = function() {
		return mE
	}, this.bD = function() {
		if (--mD <= 0 && (mD = mB, function() {
				var a6, mS, eu = dV.l5[df.du];
				for (df.iP && !df.iA && 0 !== dV.eg[0] && 0 === gM.ik[0].ia && (dV.l5[0] += aR(dV.ev[0], 6)), a6 = dR - 1; 0 <= a6; a6--) mS = aR(iv.l6(dT[a6]) * dV.l5[dT[a6]], 1e4), dV.l5[dT[a6]] += mS < 1 ? 1 : mS, iv.mU(dT[a6]);
				j3.mV[9] += dV.l5[df.du] - eu
			}(), --mE <= 0)) {
			mE = mC;
			for (var eu = dV.l5[df.du], a6 = dR - 1; 0 <= a6; a6--) dV.l5[dT[a6]] += dV.ev[dT[a6]], iv.mU(dT[a6]);
			j3.mV[8] += dV.l5[df.du] - eu
		}
	}, this.l6 = function(player) {
		var kQ = mF[aR((mG - 1) * dV.ev[player], df.mN)],
			mO = (bA.bC() < 1920 && (kQ = kQ < (mO = aR(100 * (13440 - 6 * bA.bC()), 1920)) ? mO : kQ), this.mQ(player));
		return dV.l5[player] > mO && (kQ -= aR(2 * kQ * (dV.l5[player] - mO), mO)), kQ < 0 ? 0 : 700 < kQ ? 700 : kQ
	}, this.mQ = function(player) {
		player = 100 * dV.ev[player];
		return player > df.mR ? df.mR : player
	}, this.mU = function(player) {
		var aL = dV.ev[player] * df.mW;
		dV.l5[player] = Math.min(Math.min(dV.l5[player], df.mX), aL)
	}, this.iw = function(player, it) {
		q.ce.j0(it, j1.j2[0]), j3.j4(player, it), fZ.mY(player, j1.j2[0] + j1.j2[1]), fZ.j5(it, j1.j2[0]), q.ce.mZ(player)
	}, this.ma = function() {
		var aF = dR,
			dS = dT;
		let mb = 0;
		var l4 = dV.l5;
		for (let a6 = 0; a6 < aF; a6++) mb += l4[dS[a6]];
		return mb
	}, this.mc = function(md) {
		var aF = dR,
			dS = dT;
		let mb = 0;
		var dY, l4 = dV.l5,
			i6 = lV.i6;
		for (let a6 = 0; a6 < aF; a6++) i6[dY = dS[a6]] === md && (mb += l4[dY]);
		return mb
	}
}

function lC() {
	this.m = function() {
		! function() {
			var data = aZ.af.data;
			0 === data[2].aa && (ay.al > ay.ak || 0 !== av.id) && (data[2].value = data[2].ae = 1);
			0 === data[100].aa && (data[100].value = data[100].ae = (0 === av.id ? "Player " : 1 === av.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()));
			data[0].value = data[0].ae = e.mg()
		}();
		var a6, aL, data = aZ.af.data,
			aF = data.length;
		for (a6 = 0; a6 < aF; a6++) data[a6] && data[a6].aa === aZ.w.mh(a6, !0) && (aL = aZ.w.mi(a6), data[a6].value = null === aL ? data[a6].ae : 2 === data[a6].type ? aL : Number(aL));
		aZ.af.data[10].value = aZ.af.data[10].ae
	}
}

function mj() {
	this.ho = new mk, this.ml = new mm, this.m = function() {
		av.aw.mn()
	}
}

function mo() {
	this.mp = [], this.f = ["Принять", "Вы стерли {0}.", "Вас уничтожил {0}.", "Поздравляем! Вы выиграли игру.", "{0} выиграл игру.", "{0} нарушил пакт о ненападении.", "{0} атакует вас!", "Выберите вашу начальную позицию!", "Вы сдались!",
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

function mq() {
	function n3(cY) {
		iB.cP = !0, iB.n4(JSON.parse(cY.target.result)), iB.ej()
	}

	function nE(bV, min, max, nS) {
		return "string" != typeof bV || bV.length < min ? nS : bV.length > max ? bV.substring(0, max) : bV
	}

	function n6(aL, min, max) {
		return aL = "number" == typeof aL ? Math.floor(aL) : min, Math.min(Math.max(aL, min), max)
	}

	function nA(aL, ae) {
		return "boolean" == typeof aL ? aL : ae
	}

	function nI(aL, aF, max, nU) {
		var a6, bZ, mb;
		if (!Array.isArray(aL) || aL.length < 1) return null;
		for (bZ = new(8 === nU ? Uint8Array : Uint16Array)(aF), mb = aL.length, a6 = 0; a6 < aF; a6++) bZ[a6] = n6(aL[a6 % mb], 0, max);
		return bZ
	}
	this.cP = !1, this.iC = null, this.kH = function() {
		this.cP = !1, this.iC = null
	}, this.mr = function() {
		this.iC.ms && this.iC.mt && (this.iC.ms[0] = q.color.mu(aZ.d4.mv())), df.gY(this.iC.mw, 0, this.mx(), this.iC.gF, !1, !1)
	}, this.mx = function() {
		return [{
			name: this.iC.my ? aZ.af.data[122].value : this.iC.mz[0],
			iX: [0, 0, 0],
			n0: 0
		}]
	}, this.mi = function(n1) {
		var n2 = new FileReader;
		n2.onload = n3, n2.readAsText(n1)
	}, this.n4 = function(jd) {
		this.iC = {}, this.iC.n5 = n6(jd.numberPlayers, 1, 512), this.iC.n7 = n6(jd.modeID, 0, 1), this.iC.z = n6(jd["gMap.mapID"], 0, y.n8 - 1), this.iC.gK = n6(jd.seedMap, 0, 16383), this.iC.mw = n6(jd.seedSpawn, 0, 16383), this.iC.n9 = nA(jd
				.selectableSpawn, !1), this.iC.my = nA(jd.selectableName, !1), this.iC.mt = nA(jd.selectableColor, !1), y.iC.nB[y.nC()].name = this.iC.nD = nE(jd.mapName, 1, 25, "Custom Map"), this.iC.nF = function(aL) {
				var a6, aF;
				if (!Array.isArray(aL) || aL.length < 1) return [];
				for (aF = aL.length, a6 = 0; a6 < aF; a6++) aL[a6] = nE(aL[a6], 0, 100, "");
				return aL
			}(jd.description), this.iC.nH = nI(jd.playerX, this.iC.n5, 4096, 16), this.iC.nJ = nI(jd.playerY, this.iC.n5, 4096, 16), this.iC.iD = nI(jd.playerTeam, this.iC.n5, 8, 8), this.iC.nK = nI(jd.playerStrength, this.iC.n5, 5, 8), this.iC
			.ms = function(aL, aF) {
				var a6, bZ, mb;
				if (!Array.isArray(aL) || aL.length < 1) return null;
				for (bZ = new Array(aF), mb = aL.length, a6 = 0; a6 < aF; a6++) bZ[a6] = nI(aL[a6 % mb], 3, 63, 8);
				return bZ
			}(jd.playerColor, this.iC.n5), this.iC.mz = function(aL, aF) {
				var a6, bZ, mb;
				if (!Array.isArray(aL) || aL.length < 1) return null;
				for (bZ = new Array(aF), mb = aL.length, a6 = 0; a6 < aF; a6++) bZ[a6] = nE(aL[a6 % mb], 3, 26, "Bot");
				return bZ
			}(jd.playerName, this.iC.n5), this.iC.nN = "string" == typeof jd.mapBase64 ? jd.mapBase64 : "", this.iC.my = this.iC.my || !this.iC.mz, this.iC.gF = 0 === this.iC.n7 ? 7 : 2 === this.iC.n7 ? 9 : 6, this.iC.nH = this.iC.nJ ? this.iC
			.nH : null
	}, this.ej = function() {
		! function(bV) {
			var aq, ks, nP = "data:image/png;base64,";
			if (bV.length <= nP.length) return;
			iB.iC.z = 0, iB.iC.gK = 0, y.bd(0, 0), bV.substring(0, nP.length) !== nP && (bV = nP + bV);
			return (aq = new Image).onload = function() {
				y.aB = aq.width, y.aC = aq.height, 4096 < y.aB || 4096 < y.aC || y.aB < 10 || y.aC < 10 ? (y.bd(0, 0), alert("Image w & h must be between 10 and 4096.")) : (y.z = y.nC(), y.gL = 0, y.ge.width = y.aB, y.ge.height = y.aC, y.nQ
					.drawImage(aq, 0, 0), ks = y.nQ.getImageData(0, 0, y.aB, y.aC), y.nR = ks.data)
			}, aq.src = bV, iB.iC.nN = "", 1
		}(this.iC.nN) && y.bd(this.iC.z, this.iC.gK)
	}, this.nV = function() {
		for (var max = 0, aF = this.iC.n5, a6 = 0; a6 < aF; a6++) this.iC.iD[a6] > max && (max = this.iC.iD[a6]);
		return Math.max(0, max - 1)
	}
}

function nW() {
	var size, lP;
	this.m = function() {
		size = df.nX, lP = new Uint16Array(df.nX);
		for (var a6 = df.nX - 1; 0 <= a6; a6--) lP[a6] = a6
	}, this.bD = function() {
		for (var a6 = size - 1; 0 <= a6; a6--) 0 === dV.eg[lP[a6] + df.dg] ? function(hC) {
			size--;
			for (var a6 = hC; a6 < size; a6++) lP[a6] = lP[a6 + 1]
		}(a6) : na.bD(lP[a6])
	}
}

function lQ() {
	function nr(player, hH, o2, o3) {
		for (var bK, hP, ak, al, kQ, o4, hQ, hR, aF = hH + o3, a6 = hH; a6 < aF; a6 += o2)
			if (bK = (bK = dV.nu[player] - a6) < 1 ? 1 : bK, hP = dV.nv[player] - a6, hQ = (hQ = dV.nw[player] + a6) >= y.aB - 1 ? y.aB - 2 : hQ, al = (hR = (hR = dV.nx[player] + a6) >= y.aC - 1 ? y.aC - 2 : hR) - (hP = hP < 1 ? 1 : hP), hQ = (kQ =
					aR(bx.random() * (2 * (hQ - bK + hR - hP)), bx.value(100))) <= (ak = hQ - bK) ? (o4 = bK + kQ, hP) : kQ <= ak + al ? (o4 = hQ, hP + kQ - ak) : kQ <= 2 * ak + al ? (o4 = bK + kQ - ak - al, hR) : (o4 = bK, hP + kQ - 2 * ak - al),
				o1(player, hR = dZ.o0(o4, hQ))) return hR;
		return -1
	}

	function o1(nl, es) {
		return dZ.e8(es) && (dZ.eJ(es) || nl !== (es = dZ.eQ(es)) && eR(nl, es) && 0 < dV.nb[es].length)
	}
	this.bD = function(player) {
		return !(0 === dV.nb[player].length || dV.l5[player] < 100) && eE.d4.nc !== eE.d4.nd && (eE.d4.ne[player] !== eE.d4.nf && q.ce.ng(player, 203, 32, 16) ? !! function(player) {
			var es = function(player) {
				var a6, ns, nt, bK = dV.nu[player],
					hP = dV.nv[player],
					fX = dV.nw[player] - bK + 1,
					fY = dV.nx[player] - hP + 1,
					aL = bx.value(100);
				for (a6 = 0; a6 < 32; a6++)
					if (ns = bK + ny.nz(bx.random() * fX, aL), nt = hP + ny.nz(bx.random() * fY, aL), ns = dZ.o0(ns, nt), o1(player, ns)) return ns;
				return -1
			}(player);
			if (0 <= es) return eE.lR.nq(player, es >> 2);
			if (0 <= (es = nr(player, 1, 4, 40))) return eE.lR.nq(player, es >> 2);
			if (0 <= (es = nr(player, 40, 8, 200))) return eE.lR.nq(player, es >> 2);
			return
		}(player) && !! function(nl) {
			if (0 === j1.jH[2]) return void console.log("error 325234");
			var nn = j1.jH[1] + dy.no[j1.jH[2] - 1] << 2;
			if (dZ.eJ(nn)) return 1;
			return nn = dZ.eQ(nn), nl !== nn && !!eR(nl, nn)
		}(player) && function(player) {
			return q.ce.mZ(player), eE.d4.nk(player), !0
		}(player) : void 0)
	}
}

function o6() {
	var bK, hP, hQ, hR, o7 = 0,
		o8 = 0;

	function oA() {
		return Math.pow(Math.pow(hQ - bK, 2) + Math.pow(hR - hP, 2), .5)
	}

	function o9(cY) {
		bK = ay.k7 * cY.touches[0].clientX, hP = ay.k7 * cY.touches[0].clientY, hQ = ay.k7 * cY.touches[1].clientX, hR = ay.k7 * cY.touches[1].clientY
	}
	this.jt = function(cY) {
		return 1 < cY.touches.length ? (o8 = bA.bB, o7 = 3, o9(cY), b7.s(), !0) : (o7 = 0, !1)
	}, this.ju = function(cY) {
		var aD, fN, fQ;
		return 0 !== df.gP && 1 < cY.touches.length && (o7 = Math.max(o7 - 1, 0), fT.ag() && (aD = oA(), o9(cY), cY = oA(), fN = Math.floor((bK + hQ) / 2), fQ = Math.floor((hP + hR) / 2), cx.fe(fN, fQ, Math.max(.125, cY) / Math.max(.125, aD)), bA
			.bE = !0), !0)
	}, this.kL = function() {
		var a7, a8;
		return !!(o7 && (o7 = 0, bA.bB < o8 + 500)) && (a7 = (bK + hQ) / 2, a8 = (hP + hR) / 2, b7.kC(a7, a8), b7.click(a7, a8, !0) && (bA.bE = !0), !0)
	}
}

function oB() {
	var ak, a7, oC, aq, bJ, ai, oD, oE, fw, oF, oG = 11 / 12;

	function oH() {
		var oN = Math.floor(oD * (ak - 2 * oC)),
			oO = 1 + Math.floor(.0625 * b8.al),
			oP = 1 + Math.floor(.3 * b8.al),
			am = Math.floor(.55 * b8.al);
		bJ.clearRect(0, 0, ak, b8.al), bJ.fillStyle = i.oQ, bJ.fillRect(0, 0, oC, b8.al), bJ.fillRect(oC + oN, 0, ak - oC - oN, b8.al), bJ.fillStyle = oD < 1 / 3 ? "rgba(" + Math.floor(3 * oD * 130) + ",130,0,0.85)" : oD < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (oD - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (oD - 2 / 3) * 130) + ",0.85)", bJ.fillRect(oC, 0, oN, b8.al), bJ.fillStyle = i.bM, bJ.fillRect(0, 0, ak, 1), bJ.fillRect(0, b8.al - 1, ak, 1), bJ
			.fillRect(0, 0, 1, b8.al), bJ.fillRect(oC, 0, 1, b8.al), bJ.fillRect(oC + oN, 0, 1, b8.al), bJ.fillRect(ak - oC, 0, 1, b8.al), bJ.fillRect(ak - 1, 0, 1, b8.al), bJ.fillRect(Math.floor(.25 * b8.al) + oP, Math.floor((b8.al - oO) / 2), b8
				.al - 2 * oP, oO), bJ.fillRect(Math.floor(ak - 1.25 * b8.al) + oP, Math.floor((b8.al - oO) / 2), b8.al - 2 * oP - oP % 2, oO), bJ.fillRect(Math.floor(ak - 1.25 * b8.al) + Math.floor((b8.al - oO) / 2), oP, oO, b8.al - 2 * oP - oP % 2),
			oE = q.ce.oR(df.du, b8.eI()), bJ.fillText(q.cg.hX(oE) + " (" + q.cg.oS(100 * oD, +(oD < .1)) + ")", Math.floor(.5 * ak), am)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		oD = newPercentage;
	};
	keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	keybindFunctions.setRelative = (arg1) => b8.kT(arg1);

	function oa(aG) {
		return !(1 < aG && 1 === oD || (1 < aG && aG * oD - oD < 1 / 1024 ? aG = (oD + 1 / 1024) / oD : aG < 1 && oD - aG * oD < 1 / 1024 && (aG = (oD - 1 / 1024) / oD), oD = ny.oV(oD * aG, 1 / 1024, 1), oH(), 0))
	}

	function ob(fb) {
		return oD !== (oD = ny.oV((fb - a7 - oC) / (ak - 2 * oC), 1 / 1024, 1)) && (oH(), !0)
	}
	this.a8 = 0, this.dv = !1, this.m = function() {
		ai = !df.e7 && !df.dp, oF = !1, oD = .5, oE = 0, this.dv = !1, this.resize()
	}, this.resize = function() {
		av.aw.ax() && ay.ak < .8 * ay.al ? (this.al = Math.floor(.0536 * ay.az), ak = ay.ak - 4 * b2.gap - this.al) : (ak = Math.floor((av.aw.ax() ? .65 : .389) * ay.az), ak += 12 - ak % 12, this.al = Math.floor(ak / 12)), oC = Math.floor(3 *
			this.al / 2), fw = q.r.ft(1, Math.floor(.5 * this.al)), (aq = document.createElement("canvas")).width = ak, aq.height = this.al, (bJ = aq.getContext("2d", {
			alpha: !0
		})).font = fw, q.r.textBaseline(bJ, 1), q.r.textAlign(bJ, 1), this.fG(), oH()
	}, this.fG = function() {
		a7 = av.aw.ax() && ay.ak < .8 * ay.al ? this.al + 3 * b2.gap : Math.floor((ay.ak - ak) / 2), this.a8 = ay.al - this.al - oI.oJ() * b2.gap
	}, this.oK = function() {
		oF && (oF = !1, oH())
	}, this.ai = function() {
		return !(!ai || dq.dr && a7 < Math.floor(b2.gap + 5.5 * this.al))
	}, this.oT = function(fy) {
		return !!this.ai() && a7 + ak > ay.ak - fy - b2.gap
	}, this.oU = function() {
		ai = !df.dp
	}, this.b9 = function() {
		ai = !1
	}, this.eI = function() {
		return ny.oV(Math.floor(1024 * oD + .5) - 1, 0, 1023)
	}, this.kO = function(fb, fc) {
		return this.ai() && a7 < fb && fb < a7 + ak && fc > this.a8
	}, this.bF = function(fb, fc) {
		return !!this.ai() && !!b8.kO(fb, fc) && (cx.fF = !1, function(oZ, fb, fc) {
			if (function(fb, fc) {
					return a7 < fb && fb < a7 + oC && fc > b8.a8
				}(fb, fc)) return oa(oG);
			if (function(fb, fc) {
					return a7 + ak - oC < fb && fb < a7 + ak && fc > b8.a8
				}(fb, fc)) return oa(1 / oG);
			return oZ.dv = !0, ob(fb)
		}(this, fb, fc) && (bA.bE = !0), !0)
	}, this.kT = function(fd) {
		0 !== df.gP && this.ai() && oa(fd) && (bA.bE = !0)
	}, this.fS = function(deltaY) {
		var fd;
		return !(0 === deltaY || !this.ai()) && oa(fd = 0 < deltaY ? (fd = 400 / (400 + deltaY)) < oG ? oG : fd : 1 / oG < (fd = (400 - deltaY) / 400) ? 1 / oG : fd)
	}, this.fU = function(fb) {
		return !!this.dv && ob(fb)
	}, this.kJ = function() {
		this.dv = !1
	}, this.bD = function() {
		this.ai() && oE !== q.ce.oR(df.du, this.eI()) && (oF = !0)
	}, this.bH = function() {
		this.ai() && bI.drawImage(aq, a7, this.a8)
	}
}

function oc() {
	this.f = null;
	var od, oe = new og;
	this.m = function() {
		od = 1 === aZ.af.data[0].value ? new mo : 2 === aZ.af.data[0].value ? new oh : 3 === aZ.af.data[0].value ? new oi : 4 === aZ.af.data[0].value ? new oj : 5 === aZ.af.data[0].value ? new ok : oe;
		var a6, aF = oe.f.length,
			mb = od.f.length;
		for (a6 = 0; a6 < aF; a6++) mb === a6 ? (od.f.push(oe.f[a6]), mb++) : 0 === od.f[a6].length && (od.f[a6] = oe.f[a6]);
		this.f = od.f, aZ.af.translate()
	}, this.mg = function() {
		return navigator.language.startsWith("en") ? 0 : navigator.language.startsWith("ru") ? 1 : navigator.language.startsWith("tr") ? 2 : navigator.language.startsWith("es") ? 3 : navigator.language.startsWith("de") ? 4 : navigator.language
			.startsWith("pl") ? 5 : 0
	}, this.lx = function(u) {
		for (var es, aF = this.f.length, a6 = 0; a6 < aF; a6++)
			if (this.f[a6].startsWith("{") && (es = this.f[a6].replace("{" + u + "}", "")).length < this.f[a6].length) return es;
		return u
	}, this.lw = function(aQ, om, aW) {
		var a6, iV, aF, bV;
		if (!om) return this.f[aQ];
		for (aF = om.length, bV = this.f[aQ], a6 = 0; a6 < aF; a6++)
			if (Number.isInteger(om[a6]))
				for (iV = od.mp.length - 1; 0 <= iV; iV--) bV = bV.replace("{" + (20 * (iV + 1) + a6) + "}", (2 === iV ? 1 !== om[a6] : 1 === om[a6]) ? "" : od.mp[iV]);
		if (aW) {
			if (aW.on)
				for (a6 = 0; a6 < aW.on.length; a6++) om[aW.on[a6]] = q.cg.hX(om[aW.on[a6]]);
			if (aW.oo)
				for (a6 = 0; a6 < aW.oo.length; a6++) om[aW.oo[a6]] = q.cg.oS(100 * om[aW.oo[a6]], 1)
		}
		for (a6 = 0; a6 < aF; a6++) bV = bV.replace("{" + a6 + "}", om[a6]);
		return bV
	}
}

function op(oq) {
	var jU = document.createElement("div");
	this.cY = jU, this.or = oq, this.resize = function() {
		for (var aF = oq.length, a6 = 1; a6 < aF; a6++) q.r.os(oq[a6], 4)
	};
	var a6, aF = oq.length;
	for (jU.style.width = "100%", jU.style.height = "2.7em", jU.style.marginTop = "0.6em", jU.style.border = "inherit", a6 = 0; a6 < aF; a6++) oq[a6].style.verticalAlign = "top", oq[a6].style.width = (100 / aF).toFixed(2) + "%", oq[a6].style.height =
		"100%", oq[a6].style.fontSize = "0.75em", jU.appendChild(oq[a6])
}

function io() {
	this.ot = 28, this.iq = 0, this.ou = null;
	var ow = this.ov = null;

	function p1(gv, p2) {
		var a7, a8, e2, fX, km = q.r.kn(gv, gv),
			ko = q.r.getContext(km, !0),
			ks = q.r.getImageData(ko, gv, gv),
			p4 = ks.data,
			mb = (gv >> 1) - .5,
			p5 = .5 + mb;
		for (p5 *= p5, a8 = 0; a8 < gv; a8++)
			for (a7 = 0; a7 < gv; a7++) fX = (fX = a7 - mb) * fX + (fX = a8 - mb) * fX, p4[e2 = 4 * (a8 * gv + a7)] = p2[0], p4[1 + e2] = p2[1], p4[2 + e2] = p2[2], p4[3 + e2] = (p5 - fX) * p2[3] / p5;
		return ko.putImageData(ks, 0, 0), km
	}

	function p7(a6, ko, km, gv) {
		var a7;
		0 !== dV.eg[a6] && 0 !== dV.ev[a6] && (a7 = dV.nu[a6] + dV.nw[a6] + 1 - gv - 2 >> 1, gv = dV.nv[a6] + dV.nx[a6] + 1 - gv - 2 >> 1, ko.drawImage(km[df.iA ? lV.i6[a6] : a6 < df.dg ? 1 : 0], a7, gv))
	}
	this.m = function() {
		var oZ;
		this.iq = 700,
			function(oZ) {
				var gv = oZ.ot;
				if (oZ.ov = [], ow = [], df.iA)
					for (let a6 = 0; a6 <= df.ii; a6++) oZ.ov.push(p1(gv, lV.i3[lV.i5[a6]])), ow.push(p1(gv >> 1, lV.i3[lV.i5[a6]]));
				else oZ.ov.push(p1(gv, lV.i3[0])), oZ.ov.push(p1(gv, lV.i3[4])), ow.push(p1(gv >> 1, lV.i3[0]))
			}(this),
			function(oZ, p6) {
				var a6, ou = oZ.ou,
					ko = q.r.getContext(ou, !0),
					aF = df.eM,
					gv = oZ.ot >> 1;
				ko.imageSmoothingEnabled = !1, ko.setTransform(1, 0, 0, 1, 0, 0), p6 && ko.clearRect(0, 0, ou.width, ou.height);
				for (a6 = df.dg; a6 < aF; a6++) p7(a6, ko, ow, gv)
			}(this, null !== (oZ = this).ou && oZ.ou.width === y.aB - 2 && oZ.ou.height === y.aC - 2 || (oZ.ou = q.r.kn(y.aB - 2, y.aC - 2), !1)), df.e7 || this.p0()
	}, this.p0 = function() {
		var aF = df.dg,
			gv = this.ot,
			ov = this.ov,
			ko = q.r.getContext(this.ou, !0);
		for (let a6 = 0; a6 < aF; a6++) p7(a6, ko, ov, gv)
	}
}

function n(title, p8, p9 = !0) {
	let pA = document.createElement("div"),
		pB = document.createElement("div"),
		pC = document.createElement("div"),
		pD = document.createElement("div");
	this.p = pC, this.v = p8, this.show = function() {
			p9 ? document.body.appendChild(pA) : (document.body.appendChild(pB), document.body.appendChild(pD))
		}, this.s = function() {
			p9 ? document.body.removeChild(pA) : (document.body.removeChild(pB), document.body.removeChild(pD))
		}, this.pI = function() {
			var pJ = q.r.pK(.1),
				pL = q.r.pK(.08 + .04 * (ay.pM < 1));
			return {
				pJ: pJ,
				pL: pL,
				pN: ay.al / ay.k7 - pJ - pL
			}
		}, this.resize = function() {
			let a6, cY;
			var aF = p8.length,
				pO = this.pI(),
				pJ = pO.pJ,
				pL = pO.pL;
			for (pB.style.height = q.r.hr(pJ), q.r.os(pB, 2), pD.style.top = q.r.hr(ay.al / ay.k7 - pL), pD.style.height = q.r.hr(pL), q.r.os(pD, 8), pC.style.top = q.r.hr(pJ), pC.style.height = pC.style.maxHeight = q.r.hr(pO.pN), pD.style.font = pB
				.style.font = q.r.ft(0, q.r.pK(.02, .25)), pC.style.font = q.r.ft(0, q.r.pK(.02, .4)), a6 = 0; a6 < aF; a6++)(cY = p8[a6].button).style.top = "0", cY.style.left = (100 * a6 / aF).toFixed(2) + "%", cY.style.width = (100 / aF).toFixed(
				2) + "%", cY.style.height = "100%", 0 < a6 && q.r.os(cY, 4)
		}, this.bH = function() {
			var pO = this.pI(),
				u = ay.k7;
			bI.fillStyle = i.oQ, bI.fillRect(0, u * pO.pJ, ay.ak, u * pO.pN)
		}, pA.style.position = "absolute", pA.style.top = "0", pA.style.left = "0", pA.style.width = "100%", pA.style.height = "100%", pB.style.position = "absolute", pB.style.top = "0", pB.style.left = "0", pB.style.width = "100%", pB.style
		.display = "flex", pB.style.backgroundColor = i.oQ, pD.style.position = "absolute", pD.style.left = "0", pD.style.width = "100%", pC.style.position = "absolute", pC.style.width = "100%", pC.style.backgroundColor = i.oQ;
	for (let a6 = 0; a6 < p8.length; a6++) p8[a6].button.style.position = "absolute", p8[a6].button.style.fontSize = "1.2em";
	for (let a6 = 0; a6 < p8.length; a6++) pD.appendChild(p8[a6].button);
	pB.appendChild(function() {
		var pH = document.createElement("h1");
		return pH.textContent = title, pH.style.margin = "auto", pH.style.fontSize = "2.3em", pH
	}()), p9 && (pA.appendChild(pC), pA.appendChild(pB), pA.appendChild(pD))
}

function oh() {
	this.mp = ["", ""], this.f = ["Kabul Et", "{0} silindi.", "{0} tarafından silindiniz.", "Tebrikler! Oyunu kazandınız.", "{0} oyunu kazandı.", "{0} saldırmazlık paktını bozdu.", "{0} sana saldırıyor!", "Başlangıç pozisyonunuzu seçin!",
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

function pP() {
	this.nB = null, this.m = function() {
		var pQ = [120, 105, 92],
			cos = [12, 12, 60],
			pR = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			pS = [140, 130, 120],
			pT = [12, 12, 76],
			pU = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			pV = [130, 117, 106],
			pW = [12, 12, 68],
			pX = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.nB = new Array(y.n8 + 1), this.nB[0] = {
			name: "White Arena",
			ak: 230,
			al: 230,
			pY: 1e3,
			pZ: 2e3,
			bw: 173
		}, this.nB[1] = {
			name: "Black Arena",
			ak: 800,
			al: 800,
			pY: 100,
			pZ: 50,
			bw: 43
		}, this.nB[2] = {
			name: "Island",
			ak: 512,
			al: 512,
			pY: 128,
			pZ: 32,
			bw: 0
		}, this.nB[3] = {
			name: "Mountains",
			ak: 960,
			al: 960,
			pY: 60,
			pZ: 8,
			bw: 0
		}, this.nB[4] = {
			name: "Desert",
			ak: 900,
			al: 900,
			pY: 100,
			pZ: 5,
			bw: 0
		}, this.nB[5] = {
			name: "Swamp",
			ak: 1e3,
			al: 1e3,
			pY: 100,
			pZ: 40,
			bw: 0
		}, this.nB[6] = {
			name: "Snow",
			ak: 1e3,
			al: 1e3,
			pY: 100,
			pZ: 20,
			bw: 0
		}, this.nB[7] = {
			name: "Cliffs",
			ak: 1024,
			al: 1024,
			pY: 128,
			pZ: 32,
			bw: 0
		}, this.nB[8] = {
			name: "Pond",
			ak: 820,
			al: 820,
			pY: 200,
			pZ: 100,
			bw: 0
		}, this.nB[9] = {
			name: "Halo",
			ak: 1024,
			al: 1024,
			pY: 128,
			pZ: 32,
			bw: 0
		}, this.nB[10] = {
			name: "Europe",
			pa: pS,
			pb: pT,
			pc: pU
		}, this.nB[11] = {
			name: "World",
			pa: pV,
			pb: pW,
			pc: pX
		}, this.nB[12] = {
			name: "Caucasia",
			pa: pV,
			pb: pW,
			pc: pX
		}, this.nB[13] = {
			name: "Africa",
			pa: pQ,
			pb: cos,
			pc: pR
		}, this.nB[14] = {
			name: "Middle East",
			pa: pQ,
			pb: cos,
			pc: pR
		}, this.nB[15] = {
			name: "Scandinavia",
			pa: pS,
			pb: pT,
			pc: pU
		}, this.nB[16] = {
			name: "North America",
			pa: pS,
			pb: pT,
			pc: pU
		}, this.nB[17] = {
			name: "South America",
			pa: pQ,
			pb: cos,
			pc: pR
		}, this.nB[18] = {
			name: "Asia",
			pa: pV,
			pb: pW,
			pc: pX
		}, this.nB[19] = {
			name: "Australia",
			pa: pQ,
			pb: cos,
			pc: pR
		}, this.nB[20] = {
			name: "Island Kingdom",
			ak: 1024,
			al: 1024,
			pY: 128,
			pZ: 32,
			bw: 0
		}, this.nB[y.n8] = {}
	}
}

function pd() {
	var aQ = 0,
		bB = bA.bB;
	this.pe = 0, this.bD = function() {
		ay.bD(), df.e7 ? pf() : 0 === aQ ? bA.bB >= bB && (bB += bA.pg * Math.floor(1 + (bA.bB - bB) / bA.pg), 2 === df.gP || dq.dr ? ph() : (pi(), d0.pj()), aQ++) : ((dq.dr ? pf : (bA.bE = !0, pk))(), aQ = 0), pl(), bA.bE && (bA.bE = !1, gb())
	}
}

function pm() {
	this.bD = function(bg) {
		var id, jL, ag;
		for (bf.m(bg), bf.aQ += 2, ag = 8 * bf.size; bf.aQ + 8 <= ag;) id = bf.dB(4), jL = bf.dB(9), 0 === id ? this.pn(id, jL, bf.dB(22)) : 1 === id ? this.pn(id, jL, bf.dB(10), bf.dB(10)) : 2 === id ? this.pn(id, jL, bf.dB(10), bf.dB(9)) :
			3 === id || 4 === id ? this.pn(id, jL, bf.dB(10), bf.dB(22)) : 5 === id || 6 === id ? this.pn(id, jL, bf.dB(10)) : 7 === id ? this.pn(id, jL, bf.dB(1)) : this.pn(id, jL)
	}, this.po = [], this.pp = function() {
		for (var pr = 0, ps = 0, pt = 0, pu = 0, pv = 0, pw = 0, a6 = 0; a6 < 512; a6++) pr += dV.eg[a6], ps += dV.ev[a6], pt += dV.l5[a6], pu += eE.d4.ne[a6];
		pv += eE.d4.nc, pw += dR, this.po.push(((255 & pr + ps + pt + pu + pv + pw) << 12) + ((3 & pr) << 10) + ((3 & ps) << 8) + ((3 & pt) << 6) + ((3 & pu) << 4) + ((3 & pv) << 2) + (3 & pw))
	}, this.pn = function(id, jL, jN, jP) {
		0 === id ? e9.px.eB(jL, jN) : 1 === id ? e9.px.eL(jL, jN, jP) : 2 === id ? e9.px.py(jL, jN, jP) : 3 === id ? e9.px.eH(jL, jN, jP) : 4 === id ? e9.px.pz(jL, jN, jP) : 5 === id ? e9.px.q0(jL, jN) : 6 === id ? e9.px.q1(jL, jN) : 7 === id ?
			e9.px.q2(jL, jN) : 8 === id ? e9.px.q3(jL) : e9.px.q4(jL)
	}
}

function q5() {
	function qC(a6) {
		return void 0 !== y.iC.nB[a6].pc
	}

	function qA(a6) {
		return 1 !== a6 && !qC(a6) && a6 !== y.nC()
	}
	this.n8 = 21, this.aB = 0, this.aC = 0, this.ge = null, this.nQ = null, this.q6 = null, this.nR = null, this.z = 0, this.gL = 0, this.q7 = !1, this.q8 = new q9, this.iC = new pP, this.m = function() {
		this.iC.m()
	}, this.bd = function(map, gK) {
		((map %= this.n8) !== this.z || qA(this.z) && gK !== this.gL) && (this.q7 = !1, this.q8.qB(), bx.bz(map), this.z = map, this.gL = gK, qA(map) && (y.iC.nB[map].bw = gK), qC(this.z) ? qD() : (map = y.iC.nB[this.z], this.aB = map.ak, this
			.aC = map.al, bx.bz(map.bw), aM.bd([this.aB, this.aC, map.pY, map.pZ]), x(), qE.qF(), aM.qG()))
	}, this.qH = function(a6) {
		return 3 === a6 || 7 === a6 || 9 === a6 || a6 === this.nC()
	}, this.qI = function(a6) {
		return 2 === a6 || 7 === a6 || 9 === a6
	}, this.qJ = function(a6) {
		return 1 === a6
	}, this.nC = function() {
		return this.n8
	}
}

function qK() {
	this.bD = function() {
		qL.bD(), kg.bD(), ay.bD(), c8.d4.bD(), qM.qN(), bA.bE && (bA.bE = !1, cM.bH())
	}
}

function ls(player) {
	qO(player), qP(player), qQ(player), qR.hD(player), gi.hE(player), hU.clear(player), eE.lF.qS(player)
}

function qO(player) {
	dZ.da(player) && (dV.dU[player] = em.en.dX(), df.qT++);
	var qU = hU.qV(player);
	0 === qU.length ? player === df.du && qW() : (qX(player, qU), qY(player, qU))
}

function qW() {
	j3.mV[17] += dV.l5[df.du] + hU.qZ(df.du), gp.show(!1, !1, !1, !0), gm.qa()
}

function qX(player, qU) {
	for (var a6 = qU.length - 1; 0 <= a6; a6--) hU.qb(qU[a6], player)
}

function qc(qU) {
	for (var aQ = 0, a6 = qU.length - 1; 1 <= a6; a6--) dV.ev[qU[a6]] > dV.ev[qU[aQ]] && (aQ = a6);
	return aQ
}

function qY(player, qU) {
	var a6, qd, qe = qU[qc(qU)];
	if (9 === df.eo && 1 === lV.i6[player] && bx.qf(8) && iH.qg(qe), player === df.du) 2 !== dV.qh[player] && f6.qi(qe, 1), qW();
	else {
		for (qd = !1, a6 = qU.length - 1; 0 <= a6; a6--)
			if (qU[a6] === df.du) return qd = !0, void f6.qi(player, 0);
		!qd && player < df.dg && 2 !== dV.qh[player] && f6.qj(0, player, qe)
	}
}

function qQ(player) {
	dV.eg[player] = dV.l5[player] = 0, dV.qk[player] = null, dV.ql[player] = null, dV.nb[player] = null, dV.qm[player] = null, qn.qo(player)
}

function qP(player) {
	for (var dY, a8, a7 = dV.nw[player]; a7 >= dV.nu[player]; a7--)
		for (a8 = dV.nx[player]; a8 >= dV.nv[player]; a8--) dY = 4 * (a8 * y.aB + a7), dZ.qp(player, dY) && (dZ.qq(dY), dV.ev[player]--)
}

function lI() {
	this.qr = null, this.nd = 512, this.nf = 8, this.nc = 0, this.h1 = 0, this.qs = new Uint16Array(this.nd), this.qt = new Uint32Array(this.nd), this.qu = new Uint32Array(this.nd), this.qv = new Uint32Array(this.nd), this.qw = new Uint16Array(this
			.nd), this.qx = new Uint32Array(this.nd), this.qy = new Uint16Array(this.nd), this.qz = new Uint16Array(this.nd), this.r0 = new Uint8Array(this.nd), this.ne = new Uint8Array(df.eM), this.r1 = new Uint16Array(this.nf * df.eM), this.m =
		function() {
			this.h1 = 0, this.nc = 0, this.qr = new Uint8Array(y.aB + y.aC), this.ne.fill(0)
		}, this.nk = function(player) {
			var aF = this.nc,
				r2 = dy.r3(j1.jH[0]),
				r4 = this.ne[player],
				r5 = (player << 3) + r4;
			dV.eg[player] = 2, this.qs[aF] = r5, this.qt[aF] = r2, this.qv[aF] = r2, this.qu[aF] = dy.r3(j1.jH[1]), this.qw[aF] = 0, this.qx[aF] = j1.j2[0], this.qy[aF] = eE.lJ.nk(aF, dy.r6(r2)), this.qz[aF] = this.h1, this.r0[aF] = j1.jH[2], this
				.h1 = this.h1 + 1 & 1023, this.r1[r5] = aF, this.ne[player] = r4 + 1, this.nc++
		}, this.pz = function() {
			var r7 = j1.jH[3];
			this.qt[r7] = this.qv[r7], this.qu[r7] = dy.r3(j1.jH[1]), this.qw[r7] = 0, this.r0[r7] = j1.jH[2]
		}, this.bD = function() {
			if (bA.bC() % 5 == 3) {
				eE.lN.bD(), ! function(oZ) {
					var a6, rC, rD, rE, rF, r2, rJ, rK, ia, es, qt = oZ.qt,
						qu = oZ.qu,
						qv = oZ.qv,
						qx = oZ.qx,
						qw = oZ.qw,
						qy = oZ.qy,
						oZ = oZ.nc,
						rM = y.aB << 4;
					for (a6 = oZ - 1; 0 <= a6; a6--) rD = qv[a6], rC = qu[a6], rD !== rC && (r2 = qt[a6], rJ = rC % rM - (rF = r2 % rM), rK = ~~((rC + .5) / rM) - (r2 = ~~((r2 + .5) / rM)), ia = ~~Math.sqrt(rJ * rJ + rK * rK + .5), es = 4e5 +
						2e4 * ~~Math.sqrt(.5 + (Math.sqrt(qx[a6] + .5) << 4)), 65535 <= (es = qw[a6] + Math.max(~~((.5 + es) / ia), 1)) ? qv[a6] = rE = rC : (qw[a6] = es, qv[a6] = rE = rF + ny.nz(es * rJ, 65536) + rM * (r2 + ny.nz(es * rK,
							65536))), qy[a6] = eE.lJ.rN(qy[a6], rD, rE))
				}(this), ! function(oZ) {
					var a6, rO, mb, iV, u, rP, rQ, rR, rS, fi, bK, hP, rU, rV, rW, rT, r2, rZ, aF = oZ.nc,
						qv = oZ.qv,
						qs = oZ.qs,
						qx = oZ.qx,
						lJ = eE.lJ.lJ,
						ra = lJ.length,
						rb = eE.lJ.rb,
						rM = y.aB << 4,
						rc = df.iA,
						rd = lV.i6,
						es = (aF - 1) * (bA.bC() % 2);
					for (a6 = 0; a6 < aF; a6++) {
						for (rO = Math.abs(a6 - es), r2 = qv[rO], mb = dy.r6(r2), rS = qs[rO] >> 3, bK = r2 % rM, hP = ~~((r2 + .5) / rM), r2 = qx[rO], rZ = 80 + ~~Math.sqrt(.5 + (Math.sqrt(r2 + .5) << 8)), rV = Math.min(rZ * rZ, 262144), rW = -
							1, iV = 0; iV < 9; iV++)
							if (!((rP = mb + rb[iV]) < 0 || ra <= rP))
								for (rR = lJ[rP], rQ = rR.length, u = 0; u < rQ; u++) rU = rR[u], rT = qs[rU] >> 3, rS == rT || rc && rd[rS] === rd[rT] || (rT = qv[rU], (rT = (fi = bK - rT % rM) * fi + (fi = hP - ~~((rT + .5) / rM)) * fi) < rV &&
									(rW = rU, rV = rT)); - 1 !== rW && (r2 = Math.min(Math.max(1, ny.nz(r2 * (rZ - Math.floor(Math.sqrt(rV + .5))), 5 * rZ)), qx[rW]), qx[rO] -= r2 >> 4, qx[rW] -= r2)
					}
				}(this);
				var a6, hO, qx = (oZ = this).qx,
					oZ = oZ.nc;
				for (a6 = oZ - 1; 0 <= a6; a6--) hO = qx[a6], 0 < (hO -= Math.max(1, hO >> 7)) ? qx[a6] = hO : eE.lF.rB(a6)
			}
		}
}

function re() {
	let k, rf;
	var ri;
	this.show = function() {
		k.show(), this.resize()
	}, this.s = function() {
		k.s()
	}, this.resize = function() {
		k.resize(), rf.resize()
	}, this.t = function(u) {
		2 === u && k.v[0].w()
	}, k = new n("🔑 " + e.f[125], [new d("💾 " + e.f[97], function() {
		g.h()
	}, i.m0)]), rf = new rg(k.p, ((ri = []).push(function() {
		var rq = new jS;
		return rq.jV("🧈 Gold"), rq.jY("Balance: " + q.cg.s6(aZ.af.data[113].value, .01, 2)), rq.jW(
			"Play more multiplayer games to earn gold. Accounts without gold will be deleted. Each day, you will lose 🧈 0.50 or 0.01% of your balance, whichever amount is higher."), rq
	}()), ri.push(function() {
		var rq = new jS;
		return rq.jV("1v1 Rating"), rq.jY("Elo: " + q.cg.s6(aZ.af.data[107].value, .1, 1) + "<br>Rank: " + (aZ.af.data[108].value + 1) + " / " + aZ.af.data[111].value + "<br>Played Games: " + aZ.af.data[112].value), rq
	}()), ri.push(function() {
		let rq = new jS,
			rr = (rq.jV("Account Name"), new rs(aZ.af.data[105]));
		return rr.cY.readOnly = !0, rq.jc(rr), rq.jc(new op([new d("Copy", function() {
			q.r.rt(rr.cY), q.r.ru(this)
		}).button])), rq
	}()), ri.push(function() {
		let rq = new jS,
			rv = (rq.jV("Password"), new rs(aZ.af.data[106]));
		return rv.cY.readOnly = !0, rv.cY.type = "password", rq.jc(rv), rq.jc(new op([new d("Show", function() {
			"Show" === this.innerText ? (this.innerText = "Hide", rv.cY.type = "text") : (this.innerText = "Show", rv.cY.type = "password")
		}).button, new d("Copy", function() {
			q.r.rt(rv.cY), q.r.ru(this)
		}).button])), rq.jc(new op([new d("Request New Password", function() {
			g.g2(8, g.dN().cC, new g3(15))
		}).button])), rq
	}()), ri.push(function() {
		var rq = new jS;
		return rq.jV("Account Options"), rq.jc(new op([new d("Log in to a Different Account", function() {
			g.g2(6, g.dN().cC)
		}).button])), rq.jc(new op([new d("Create New Account", function() {
			aZ.d6.aX(105, ""), g.g2(8, g.dN().cC, new g3(18))
		}).button])), rq.jc(new op([new d("Delete Account: " + aZ.af.data[105].value, function() {
			g.g2(4, 0, new lv("🗑️ Account Deletion", "Your account will start the deletion process but may be restored if you log in within 3 weeks.", !0, [new d("❌ " + e.f[92], function() {
				g.g2(7, g.rw(7).cC)
			}), new d("🗑️ Delete Account", function() {
				g.g2(8, g.rw(7).cC, new g3(17))
			}, i.j)]))
		}, i.j).button])), rq
	}()), ri.push(function() {
		var rq = new jS;
		rq.jV("Saved Accounts"), rq.jW("Listed accounts may have been removed in the meantime due to insufficient funds."), aZ.d4.rx();

		function rz(aQ) {
			for (let a6 = 0; a6 < 2; a6++) ry[a6].s0(0 === aQ ? i.s1 : 0 === a6 ? i.j : i.m0)
		}
		let ja, ry;
		return ry = [new d("🗑️ Remove From List", function() {
			var aQ = Math.min(aZ.af.data[117].value, ja.jb.length - 1);
			if (!(aQ < 1)) {
				ja.jb[aQ].remove(), ja.jb.splice(aQ, 1);
				for (let a6 = aQ; a6 < ja.jb.length; a6++) ja.jb[a6].name = "" + a6;
				aZ.d4.s2(aQ), aQ = aZ.af.data[117].value, ja.jb[aQ].textContent = ja.jb[aQ].textContent.replace("⚪", "🟢"), rz(aQ)
			}
		}, i.s1), new d("➡️ Login", function() {
			var aQ = Math.min(aZ.af.data[117].value, ja.jb.length - 1);
			aQ < 1 || (aQ = aZ.d4.s3(aQ), aZ.d6.aX(105, aQ.s4), aZ.d6.aX(106, aQ.password), g.g2(8, g.dN().cC, new g3(18)))
		}, i.s1)], (ja = new s5(aZ.af.data[117], rz)).jb[0].style.marginTop = "0.5em", rq.jZ(ja), rq.jc(new op([ry[1].button])), rq.jc(new op([ry[0].button])), rq
	}()), function(ri) {
		var rq = new jS,
			sD = aZ.af.data[137].value,
			sE = (rq.jV("Primary Clan Stats"), rq.jY("Clan: " + (sD ? "[" + aZ.af.data[135].value + "]" : "-")), rq.jY("Monthly Points: " + q.cg.s6(sD, .001, 3)), rq.jY("Rank: " + (aZ.af.data[139].value + 1) + " / " + aZ.af.data[111]
				.value), aZ.af.data[141].value),
			sF = (rq.jY("Total Points: " + q.cg.s6(sE, .01, 2)), aZ.af.data[143].value);
		rq.jY("Won Games: " + sF), rq.jY("Avg. Points per Game: " + q.cg.s6(sE / Math.max(sF, 1), .01, 3)), sD = aZ.af.data[138].value, rq.jV("Secondary Clan Stats", "0.8em"), rq.jY("Clan: " + (sD ? "[" + aZ.af.data[136].value + "]" :
			"-")), rq.jY("Monthly Points: " + q.cg.s6(sD, .001, 3)), sE = aZ.af.data[142].value, rq.jY("Total Points: " + q.cg.s6(sE, .01, 2)), sF = aZ.af.data[144].value, rq.jY("Won Games: " + sF), rq.jY("Avg. Points per Game: " + q
			.cg.s6(sE / Math.max(sF, 1), .01, 3)), ri.push(rq)
	}(ri), ri))
}

function sG() {
	var ak, al, sH;

	function sW(rS, ia, sU, sL, p4) {
		ia = sV(rS, ia + 1 + 2 * sL & 3);
		! function(rS, rT) {
			return 1 < Math.abs(rS % ak - rT % ak) || 1 < Math.abs(sZ(rS) - sZ(rT))
		}(rS, ia) && 0 === p4[ia << 2] && (p4[ia << 2] = sU)
	}

	function sZ(dY) {
		return Math.floor((dY + .5) / ak) % al
	}

	function sV(dY, ia) {
		return dY + sH[ia]
	}
	this.hp = function(bV) {
		var a6, sI, aF, sJ, jh = bf;
		for (dJ.d8.ba(dJ.d8.bX(bV)), y.aB = ak = jh.dB(12), y.aC = al = jh.dB(12), sH = [-ak, -1, ak, 1], y.ge = document.createElement("canvas"), y.ge.width = y.aB, y.ge.height = y.aC, y.nQ = y.ge.getContext("2d", {
				alpha: !1
			}), y.q6 = y.nQ.getImageData(0, 0, y.aB, y.aC), y.nR = y.q6.data, q.cc.sP(y.nR), aF = jh.dB(12), sI = jh.dB(5), sJ = sM(ak * al - 1), a6 = 0; a6 < aF; a6++) ! function(mb, dY, sK, sL) {
			var a6, ia, jh = bf,
				p4 = y.nR,
				sQ = dY,
				sR = dY,
				sS = 0,
				sT = 1 + sK,
				sU = 2 - sK;
			for (p4[dY << 2] = sT, a6 = 0; a6 < mb; a6++) ia = jh.dB(2), dY = sV(dY, ia), p4[dY << 2] === sT ? sS % 2 == 1 && sW(sR, sS + 2 * sL + 3, sU, sL, p4) : p4[dY << 2] = sT, sW(dY, ia, sU, sL, p4), sW(sR, ia, sU, sL, p4), sR = dY,
				sS = ia;
			sV(dY, 0) === sQ ? (sW(dY, 0, sU, sL, p4), sW(sQ, 0, sU, sL, p4)) : sV(dY, 1) === sQ && (sW(dY, 0, sU, sL, p4), sW(sQ, 2, sU, sL, p4));
			0 === mb && (sW(sQ, 0, sU, sL, p4), sW(sQ, 2, sU, sL, p4))
		}(jh.dB(sI), jh.dB(sJ), 1 === jh.dB(1), 1 === jh.dB(1));
		var a7, a8, rO, sa, sb, sc, p4 = y.nR,
			sd = !0,
			pa = y.iC.nB[y.z].pa,
			pb = y.iC.nB[y.z].pb;
		for (a8 = 0; a8 < al; a8++)
			for (sa = !0, sb = sd, a7 = sc = 0; a7 < ak; a7++) rO = 4 * a8 * ak + 4 * a7, sc <= a7 && 0 < p4[rO] && (sb = 2 === p4[rO], sa) && (sa = !1, sb !== sd) ? (sd = sb, sc = a7 + 1, a7 = -1) : (sb ? (p4[rO] = pb[0], p4[1 + rO] = pb[1], p4[
				2 + rO] = pb[2]) : (p4[rO] = pa[0], p4[1 + rO] = pa[1], p4[2 + rO] = pa[2]), p4[3 + rO] = 255);
		y.nQ.putImageData(y.q6, 0, 0), y.q7 = !0, y.q8.m(), bA.bE = !0
	}
}

function ci() {
	this.se = function(bV, font, maxWidth) {
		if (bI.font = font, bI.measureText(bV).width <= maxWidth) return bV;
		for (let a6 = bV.length - 1; 1 <= a6; a6--)
			if (bV = bV.substring(0, a6), bI.measureText(bV + "...").width <= maxWidth) return bV + "...";
		return "..."
	}
}

function sf() {
	this.ih = new Array(df.eM), this.hY = new Array(df.eM), this.qh = new Uint8Array(df.eM), this.eg = new Uint8Array(df.eM), this.nu = new Uint16Array(df.eM), this.nv = new Uint16Array(df.eM), this.nw = new Uint16Array(df.eM), this.nx =
		new Uint16Array(df.eM), this.ev = new Uint32Array(df.eM), this.lr = new Uint32Array(df.eM), this.l5 = new Uint32Array(df.eM), this.qk = null, this.ql = null, this.nb = null, this.qm = null, this.db = new Uint16Array(df.eM), this.dc =
		new Uint16Array(df.eM), this.dd = new Uint16Array(df.eM), this.dU = new Uint16Array(df.eM), this.de = new Uint8Array(df.eM), this.m = function(dS) {
			for (let a6 = dS.length - 1; 0 <= a6; a6--) this.hY[a6] = this.ih[a6] = dS[a6].name, this.qh[a6] = dS[a6].n0;
			this.eg.fill(0), this.nu.fill(0), this.nv.fill(0), this.nw.fill(0), this.nx.fill(0), this.ev.fill(0), this.lr.fill(0), this.l5.fill(0), donationsTracker.reset(), leaderboardFilter.reset(), this.qk = new Array(df.eM), this.ql = new Array(
				df.eM), this.nb = new Array(df.eM), this.qm = new Array(df.eM), this.db.fill(0), this.dc.fill(0), this.dd.fill(0), this.dU.fill(0), this.de.fill(0)
		}
}

function sg() {
	this.si = function(cB) {
		var a6, sk, sl, sm, sn;
		if (cB !== c8.d4.bu) c8.d4.close(cB, 3239);
		else if (6 === cM.cN() && ke.m(), 7 !== cM.cN()) c8.d4.close(cB, 3251);
		else {
			for (sk = [0, 0, 0, 0], sl = bf.dB(6), a6 = 0; a6 < 4; a6++) sk[a6] = bf.dB(sl);
			for (sm = bf.dB(4), sn = [], a6 = 0; a6 < sm; a6++) {
				sn.push({
					id: bf.dB(5),
					gF: bf.dB(4),
					so: 1 === bf.dB(1),
					z: bf.dB(6),
					gL: bf.dB(14),
					sp: bf.dB(sl),
					sq: bf.dB(9) + 1,
					sr: bf.dB(10)
				});
				for (var sj = bf.dB(3), ss = new Array(sj), st = new Array(sj), hC = 0; hC < sj; hC++) st[hC] = bf.dB(9) + 1, ss[hC] = dJ.dK.dL(bf.dB(3));
				sn[a6].sj = sj, sn[a6].ss = ss, sn[a6].st = st
			}
			ke.aX(sk, sn)
		}
	}
}

function cH() {
	var cB, cC, su, sv = ["wss://", "/s50/", "/s51/", "/s52/"];

	function cI() {
		c8.d4.cI(cB, cC)
	}

	function t2(cY) {
		c8.t4.t5(cB, new Uint8Array(cY.data))
	}

	function t3() {}

	function cX(cY) {
		c8.d4.cX(cB, cY)
	}
	this.m = function(aQ, sw) {
		cB = aQ, cC = sw;
		aQ = sv[0];
		cB < c8.d4.bl ? aQ += c8.d4.bq[cB] + sv[1 + t1] : aQ += c8.d4.bq[0] + "/i" + (1 + t1) + (cB - c8.d4.bm) + "/", (su = new WebSocket(aQ)).binaryType = "arraybuffer", su.onopen = cI, su.onmessage = t2, su.onclose = cX, su.onerror = t3
	}, this.sy = function() {
		return su.readyState === su.CONNECTING
	}, this.c7 = function() {
		return su.readyState === su.OPEN
	}, this.cE = function() {
		return this.sy() || this.c7()
	}, this.cF = function(sw) {
		cC = sw
	}, this.sz = function() {
		return cC
	}, this.send = function(bg) {
		this.c7() && su.send(bg)
	}, this.close = function(cQ) {
		this.cE() && (su.close(cQ), this.s())
	}, this.s = function() {
		su.onopen = null, su.onmessage = null, su.onclose = null, su.onerror = null
	}
}

function l9() {
	this.mh = function(aQ, aa = !1) {
		return Number(this.mi(aQ, aa))
	}, this.mi = function(aQ, aa = !1) {
		var aL = null;
		return 0 === av.id ? av.t6 && (aL = av.t6.getItem((aa ? "v" : "d") + aQ)) : 1 === av.id ? aL = av.t7.loadString((aa ? 1e3 : 2e3) + aQ) : 2 === av.id && (aL = av.t8[(aa ? "v" : "d") + aQ]), aL && 0 !== aL.length ? aL : null
	}, this.save = function(aQ, value, aa = !1) {
		0 === av.id ? av.t6 && aZ.af.data[140].value && av.t6.setItem((aa ? "v" : "d") + aQ, value) : 1 === av.id ? av.t7.saveString((aa ? 1e3 : 2e3) + aQ, value) : 2 === av.id && (av.t8["d" + aQ] = value, av.t9.postMessage((aa ? "v" : "d") +
			aQ + " " + value))
	}
}
var a21, a22, a23, ix, t1, uN, a4n, lj, a1O, lk, gh, w7, a6H, a6I, jq, bI, aCv, a0x, aCw, aCx, a17, a0v, aCy, a0w, aCz, aD0, a03, aD1, aD2, lh, df, na, qR, a6J, gi, fT, a4P, c0, b7, dq, f6, qL, go, fx, b8, cx, kG, gn, gk, gm, gp, xX, kg, cM, gM, bN,
	dZ, uq, hU, iv, fZ, dV, a2s, a6G, xA, qE, aM, kR, hA, gc, k8, gr, ke, aAK, gl, qM, ay, bx, iH, c8, eO, a4A, qn, a6L, a6M, kM, iB, e, e9, hk, q, i, gj, bc, d7, dJ, bf, aE2, g0, uC, ny, dy, eE, j1, gf, vc, ek, y, kE, g, hn, aE3, wg, a2W, wh, fl,
	d0, b2, j3, gq, bA, lV, ep, a1K, av, em, aZ, oI, cS, aE4, a7m, f4, aH6, tA = [60, 74, 112, 200, 256, 512];

function tB() {
	var tC, tD, tE, tF, tG, tH;

	function tP(a6) {
		tC[a6] = 1 + aR(tG[a6] * bx.random(), 10 * bx.value(100))
	}
	this.tI = ["Very Easy", "Easy", "Normal", "Hard", "Harder", "Very Hard"], this.tJ = [97, 95, 93, 90, 87, 84], this.tK = [98, 95, 70, 40, 20, 0], this.tL = [85, 70, 50, 30, 7, 3], this.tM = [0, 0, 5, 25, 50, 90], this.hO = null, this.m =
	function() {
		var a6, tN;
		if (tC = new Uint8Array(df.nX), tD = new Uint16Array(df.nX), tE = new Uint16Array(df.nX), tF = new Uint8Array(df.nX), this.hO = new Uint8Array(df.nX), tG = new Uint16Array(df.nX), tH = new Uint16Array(df.nX), iB.cP) {
			if (iB.iC.nK)
				for (a6 = df.nX - 1; 0 <= a6; a6--) this.hO[a6] = iB.iC.nK[a6 + 1]
		} else if (9 === df.eo) this.tO();
		else if (df.iP)
			if (df.iA)
				for (a6 = df.nX - 1; 0 <= a6; a6--) this.hO[a6] = gM.ik[lV.i6[a6 + df.dg] - 1].ia;
			else
				for (a6 = df.nX - 1; 0 <= a6; a6--) this.hO[a6] = gM.ik[0].ia;
		else
			for (tN = 8 === df.eo ? 1 : 0, a6 = df.nX - 1; 0 <= a6; a6--) this.hO[a6] = tN;
		for (a6 = df.nX - 1; 0 <= a6; a6--) this.hO[a6] <= 2 ? (tF[a6] = 5, tG[a6] = tH[a6] = 1040, 0 === this.hO[a6] ? (tD[a6] = 1e3, tE[a6] = 1e3) : 1 === this.hO[a6] ? (tD[a6] = 1e3, tE[a6] = 920, tG[a6] = tH[a6] = 1100) : (tD[a6] = 825, tE[
			a6] = 750)) : this.hO[a6] <= 4 ? (tF[a6] = 1 + bx.tQ(20), 3 === this.hO[a6] ? (tD[a6] = tE[a6] = 500, tG[a6] = tH[a6] = 1e3) : (tH[a6] = 250 + bx.tQ(1501), tG[a6] = 500 + bx.tQ(501), tD[a6] = 300 + bx.tQ(201), tE[a6] = 100 + bx
			.tQ(201))) : (tG[a6] = 1e3, tH[a6] = 1e3, tF[a6] = 35 + bx.tQ(16), tD[a6] = 300 + bx.tQ(201), tE[a6] = 50 + bx.tQ(101)), tP(a6)
	}, this.tO = function() {
		for (var a6, e4 = 0, iV = 0; iV < 6; iV++) {
			for (a6 = e4 + iH.tR[iV] - 1; e4 <= a6; a6--) this.hO[a6] = iV;
			e4 += iH.tR[iV]
		}
	}, this.tS = function(tT, value) {
		0 <= tT && (tC[tT] = value)
	}, this.bD = function(tT) {
		0 == --tC[tT] && ! function(tT) {
			! function(tT) {
				tG[tT] !== tH[tT] && (tG[tT] += tG[tT] < tH[tT] ? 3 : -3);
				tD[tT] !== tE[tT] && (tD[tT] += tD[tT] < tE[tT] ? tF[tT] : -tF[tT], tD[tT] = (Math.abs(tD[tT] - tE[tT]) <= tF[tT] ? tE : tD)[tT]);
				tC[tT] = aR(tG[tT], 10)
			}(tT);
			var player = tT + df.dg;
			tW(player, aR(tD[tT] * dV.l5[player], 1e3))
		}(tT)
	}
}

function tX() {
	this.bB = bA.bB, this.aQ = 0, this.pe = 0, this.tY = 0, this.tZ = null, this.ta = 7, this.tb = 0, this.m = function() {
		this.tY = 0, this.tZ = [], this.aQ = 0, this.pe = 0
	}, this.tc = function(bg) {
		var a6;
		if (df.e7) this.td(bg);
		else if (this.tZ.push(bg), 2 === df.gP) {
			for (a6 = 0; a6 < this.tZ.length; a6++) e9.te.bD(this.tZ[a6]);
			this.tZ = []
		}
	}, this.td = function(bg) {
		e9.te.bD(bg), hk.bD(), gm.td(this.tY), this.tY === df.tf ? (df.tg.bD(), this.tY = 0, this.aQ = 0, this.pe = 0, this.bB = bA.bB) : (this.tY++, fZ.th(), fZ.oK(!0), d0.pj())
	}, this.bD = function() {
		ay.bD(), df.e7 ? (bA.bE = gm.td(-1) || bA.bE, pf()) : (0 !== this.aQ || bA.bB >= this.bB && (this.bB += bA.pg * Math.floor(1 + (bA.bB - this.bB) / bA.pg), 2 === df.gP ? ph() : this.ti(), this.aQ++, 27 < bA.bB - this.tb)) && this.tj(),
		pl(), bA.bE && (bA.bE = !1, gb()), this.tb = bA.bB
	}, this.tj = function() {
		bA.bE = !0, pk(), this.aQ = 0
	}, this.ti = function() {
		var tk, a6;
		if (this.pe !== 7 * this.tY) pi(), d0.pj();
		else {
			for (tk = !1; this.tl() && (tk = !0, pi(), 0 < this.tZ.length);)
				for (a6 = this.ta - 2; 0 <= a6; a6--) pi();
			tk ? d0.pj() : (ph(), d0.tm())
		}
	}, this.tl = function() {
		return 0 < this.tZ.length && (this.tY++, e9.te.bD(this.tZ[0]), this.tZ.shift(), !0)
	}
}

function tn() {
	this.nz = function(hC, iV) {
		return Math.floor((hC + .5) / iV)
	}, this.to = function(hC, iV) {
		return Math.floor(hC * (iV + .5))
	}, this.sqrt = function(aL) {
		return ~~Math.sqrt(aL + .5)
	}, this.pow = function(cY) {
		return Math.floor(Math.pow(2, cY) + .5)
	}, this.oV = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.tp = function(jL, jN, jP) {
		return Math.max(Math.min(jL, jN), jP)
	}, this.tq = function(tr, ts, a7, a8) {
		a7 -= tr, tr = a8 - ts, a8 = 0;
		return 0 == a7 ? a8 = 0 <= tr ? Math.PI : 0 : (a8 = Math.atan(tr / a7), a8 += 0 < a7 ? .5 * Math.PI : 1.5 * Math.PI), a8
	}, this.log2 = function(aL) {
		return Math.floor(!!aL * (1 + Math.log2(aL + .5)))
	}
}

function tu() {
	let k, tv, tw = !1;

	function ty(id) {
		0 !== av.id || aZ.af.data[140].value ? 0 === id ? g.g2(8, 1, new g3(16)) : g.g2(2) : g.d4.uA(g.dM, 0 === id ? 16 : 0)
	}
	var tx, p8;
	this.show = function() {
		av.aw.setState(12), k.show(), this.resize(), this.bD()
	}, this.s = function() {
		k.s()
	}, this.resize = function() {
		k.resize(), tv.resize()
	}, this.bD = function() {
		!tw || dq.u7(df.du) || (g.u5(), g.g2(1))
	}, this.t = function(u) {
		2 === u && k.v[0].w()
	}, tx = [new d("🔑 " + e.f[125], function() {
		ty(0)
	}), new d("⚙️ " + e.f[81], function() {
		ty(1)
	}), new d("▶️ " + e.f[82], function() {
		g.g2(3, 1, "")
	}), new d("📈 Charts", function() {
		g.d4.tz()
	}), new d("🔗 " + e.f[83], function() {
		g.g2(4, 1, new lv("🔗 " + e.f[83], q.r.uB(["Android App", "iOS App", "Discord", "Changelog", "Clans", "Clan Results", "Players", "Tutorial", "Terms", "Privacy"], [uC.uD, uC.uE, uC.uF, uC.uG, uC.uH, uC.uI, uC.uJ, uC.uK, uC.uL, uC
			.uM
		]), !1, [new d("❌ " + e.f[92], function() {
			g.g2(1)
		}, i.j)]))
	}), new d("ℹ️ " + e.f[84], function() {
		g.g2(4, 1, new lv("ℹ️ " + e.f[84], uN + "<br><a href='" + uC.uG + "' target='_blank'>" + uC.uG + "</a>" +
			"<br><br><b>" + "FX Client v" + fx_version + " " + fx_update + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new d("❌ " + e.f[92], function() {
				g.g2(1)
			}, i.j)]))
	}), new d("🗑️ " + e.f[85], function() {
		g.g2(4, 1, new lv("🗑️ " + e.f[85],
			"Do you want to delete all locally stored data, like usernames, account data and setting data? Your account will be deleted automatically after 3 months of inactivity. To prevent the storage of new data, it is recommended to close the game after deletion.",
			!1, [new d("❌ " + e.f[92], function() {
				g.g2(1)
			}), new d("🗑️ Delete", function() {
				av.aw.uO(), g.g2(1)
			})]))
	}), new d(e.f[86], function() {
		av.aw.u3(), g.g2(4, 1, new lv("User Privacy", "If the privacy window doesn't open, please deactivate all your adblockers.<br>Additionally, check out our Privacy Policy: <a href='" + uC.uM + "' target='_blank'>" + uC.uM + "</a>", !
			1, [new d("❌ " + e.f[92], function() {
				g.g2(1)
			}, i.j)]))
	})], p8 = [new d("❌ " + e.f[87], function() {
		g.d4.u4()
	})], 8 === cM.cN() && tx.unshift(new d("📈 " + e.f[88], function() {
		g.u5(), 2 <= j3.u6 && (gq.kY(), bA.bE = !0)
	})), 8 === cM.cN() && !df.dp && dq.u7(df.du) && (tw = !0, tx.unshift(new d("🏳️ " + e.f[89], function() {
		e9.eA.q3(), g.u5(), dq.dr && dq.kY()
	}))), 1 === av.id && 5 <= av.aa && tx.push(new d(e.f[90], function() {
		av.aw.u8()
	})), k = new n("📙 " + e.f[91], p8), tv = new u9(tx, k.p)
}

function uP() {
	var input;

	function uQ(cY) {
		uT(cY.target.files)
	}

	function uT(files) {
		files && 0 < files.length && kM.uU(files[0])
	}

	function n3(cY) {
		var u = new Image;
		u.onload = uW, u.src = cY.target.result
	}

	function uW(cY) {
		var uX, cY = cY.target,
			ak = cY.width,
			al = cY.height;
		4096 < ak || 4096 < al || ak < 10 || al < 10 ? (uX = "Image w & h must be between 10 and 4096.", av.t7 ? av.t7.showToast(uX) : alert(uX)) : (iB.kH(), y.z = y.nC(), y.gL = 0, y.aB = ak, y.aC = al, y.ge.width = y.aB, y.ge.height = y.aC, y.nQ
			.drawImage(cY, 0, 0), uX = y.nQ.getImageData(0, 0, y.aB, y.aC), y.nR = uX.data)
	}

	function uY(cY) {
		cY.stopPropagation(), cY.preventDefault()
	}

	function uZ() {
		return 0 === cM.cN() || 2 === cM.cN()
	}
	this.m = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = uQ
	}, this.uR = function() {
		input.click()
	}, this.uS = function(cY) {
		uQ(cY)
	}, this.uU = function(n1) {
		var bZ = n1.name.split("."),
			uV = bZ[bZ.length - 1].toLowerCase();
		"json" === uV ? iB.mi(n1) : "gif" !== uV && "jpg" !== uV && "jpeg" !== uV && "png" !== uV || (y.iC.nB[y.nC()].name = bZ[0], (uV = new FileReader).onload = n3, uV.readAsDataURL(n1))
	}, this.jx = function(cY) {
		uZ() && (uY(cY), cY.dataTransfer.dropEffect = "copy")
	}, this.jy = function(cY) {
		uZ() && (uY(cY), uT(cY.dataTransfer.files))
	}
}

function ua() {
	var fr, mV, aF, ub, uc;

	function uh() {
		for (var lg = 0, a6 = 1; a6 < 5; a6++) lg += mV[a6] % 1024;
		return lg
	}

	function ug() {
		for (var a6 = 1; a6 < aF - uc; a6++) mV[a6] = parseInt(mV[a6])
	}

	function ui() {
		mV[0] = "Player " + Math.floor(1e3 * Math.random()), mV[1] = ay.ak < ay.al ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, mV[2] = 1, mV[3] = 1, mV[4] = ay.ak < ay.al ? 0 : 1, mV[5] = 0, mV[6] = "000", mV[7] = "0", mV[8] = "0",
			mV[9] = "0", uq.uj()
	}

	function uf() {
		for (var a6 = aF - uc - 1; 0 <= a6; a6--) mV[a6] = c0.ut(mV[a6]);
		mV[0] = c0.uu(mV[0])
	}

	function ux(name, value, uy) {
		var uz = new Date,
			uy = (uz.setTime(uz.getTime() + Math.floor(31536e6 * uy)), name + "=" + value + ";expires=" + uz.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = uy
	}
	this.m = function() {
		if (0 === av.id) {
			uc = 4, fr = [], aF = 10;
			for (var a6 = ub = 0; a6 < aF; a6++) fr.push("u" + a6);
			mV = new Array(aF), ! function(uv) {
				for (var hC, dY, uw = uv.split(";"), a6 = uw.length - 1; 0 <= a6; a6--) {
					for (uw[a6] = uw[a6].trim(), hC = 2; 0 <= hC; hC--) uw[a6] = uw[a6].replace(" ", "");
					3 < uw[a6].length && (hC = fr.indexOf(uw[a6].substring(0, 2)), dY = uw[a6].indexOf("="), 0 <= hC && 2 === dY ? mV[hC] = uw[a6].substring(dY + 1, uw[a6].length) : 0 < dY && ux(uw[a6].substring(0, dY), "0", 0))
				}
			}(document.cookie), mV[9] || (mV[9] = "0"), (! function() {
				for (var a6 = aF - 1; 0 <= a6; a6--)
					if (void 0 === mV[a6]) return;
				return 1
			}() || (ub = 2, uf(), ug(), uh() !== mV[5])) && ui()
		}
	}, this.uj = function() {
		if (2 === ub) {
			mV[1] = 0 === mV[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : mV[1], mV[5] = uh(), ! function() {
				for (var a6 = 1; a6 < aF - uc; a6++) mV[a6] = mV[a6].toString()
			}(), ! function() {
				mV[0] = c0.ur(mV[0]);
				for (var a6 = aF - uc - 1; 0 <= a6; a6--) mV[a6] = c0.us(mV[a6])
			}();
			for (var a6 = aF - 1; 0 <= a6; a6--) ux(fr[a6], mV[a6], 1);
			uf(), ug()
		}
	}, this.ub = function() {
		return ub
	}, this.un = function(hC) {
		ub = hC, this.uj()
	}, this.uo = function(a6, value) {
		0 === av.id && (mV[a6] = value)
	}, this.up = function(a6) {
		return 0 !== av.id ? 0 : mV[a6]
	}
}

function ch() {
	this.hX = function(aL) {
		var a6, v0, v1, v2, v3;
		if (aL < 0) return "-" + this.hX(Math.abs(aL));
		if (aL < 1e3) return aL.toString();
		for (v0 = Math.floor(Math.log(aL + .5) / Math.log(10)) + 1, v1 = Math.floor((v0 - 1) / 3), v3 = (v2 = aL.toString()).substring(v0 - 3, v0), a6 = 1; a6 < v1; a6++) v3 = v2.substring(v0 - 3 * (a6 + 1), v0 - 3 * a6) + " " + v3;
		return v2.substring(0, v0 - 3 * v1) + " " + v3
	}, this.oS = function(dY, v0) {
		return dY.toFixed(v0) + "%"
	}, this.v4 = function(aL, v5 = 3) {
		return aL.toFixed(ny.oV(Math.floor(v5 - Math.log10(Math.max(aL, 1))), 0, 8))
	}, this.s6 = function(aL, fd, v0) {
		return (aL * fd).toFixed(v0)
	}, this.ig = function(username) {
		var v7, v6 = username.indexOf("[");
		return !(v6 < 0) && 1 < (v7 = username.indexOf("]")) - v6 && v7 - v6 <= 8 ? username.substring(v6 + 1, v7).toUpperCase().trim() : null
	}, leaderboardFilter.parseClanFromPlayerName = this.ig;
	this.v8 = function(bV) {
		var hC = Math.floor(.5 * bV.length + .5),
			ag = Math.floor(.5 * (hC - 1));
		for (let a6 = 0; a6 < ag; a6++)
			for (let iV = -1; iV < 2; iV += 2) {
				var u = hC + iV * a6;
				if (" " === bV[u]) return [this.v9(bV.substring(0, u)), this.vA(bV.substring(u))]
			}
		return [bV.substring(0, hC), bV.substring(hC)]
	}, this.vA = function(bV) {
		var aF = bV.length;
		for (let a6 = 0; a6 < aF; a6++)
			if (" " !== bV[a6]) return bV.substring(a6);
		return bV
	}, this.v9 = function(bV) {
		for (let a6 = bV.length - 1; 0 <= a6; a6--)
			if (" " !== bV[a6]) return bV.substring(0, a6 + 1);
		return bV
	}, this.vB = function(bV, oE) {
		return bV.split("(")[0] + "(🧈 " + oE.toFixed(2) + ")"
	}, this.vC = function(bB) {
		bB = bB.toUTCString();
		return bB.length < 12 ? bB : bB.substring(5, bB.length)
	}, this.vD = function(bB) {
		bB = bB.toUTCString();
		return bB.length < 12 ? bB : bB.substring(5, bB.length - 4)
	}
}

function vE() {
	this.eB = function(player, e2) {
		q.ce.ds(0) && q.ce.dt(player) && dy.vF(e2) && (hk.g8.vG(0, player, e2), df.tg.vH(player, e2))
	}, this.eL = function(player, oD, vI) {
		dV.db[player]++, q.ce.ds(1) && q.ce.dt(player) && q.ce.vJ(player, vI) && q.ce.ng(player, oD, 12, df.vK) && q.ce.vL(player, vI) && ((vI = hU.vN(player, j1.jI[0])) || hU.vO(player)) && vP(player, vI) && (hk.g8.vG(1, player, oD, j1.jI[0]), q
			.ce.mZ(player), j3.vQ(player, oD), vR(player))
	}, this.py = function(player, oD, it) {
		q.ce.ds(1) && q.ce.dt(player) && df.iA && q.ce.vJ(player, it) && q.ce.vS(player, it) && q.ce.iu(player, q.ce.oR(player, oD), it) && (hk.g8.vG(2, player, oD, it), iv.iw(player, it))
	}, this.eH = function(player, oD, e2) {
		q.ce.ds(1) && q.ce.dt(player) && dy.vF(e2) && eE.d4.nc !== eE.d4.nd && eE.d4.ne[player] !== eE.d4.nf && 0 !== dV.nb[player].length && q.ce.ng(player, oD, 32, 16) && eE.lR.nq(player, e2) && (hk.g8.vG(3, player, oD, e2), q.ce.mZ(player), eE
			.d4.nk(player))
	}, this.pz = function(player, vT, e2) {
		q.ce.ds(1) && q.ce.dt(player) && dy.vF(e2) && eE.eF.vU(player, vT) && eE.lR.vV(e2) && (hk.g8.vG(4, player, vT, e2), q.ce.vW(player, 8), eE.d4.pz())
	}, this.q0 = function(player, vI) {
		q.ce.ds(1) && q.ce.dt(player) && (vI = Math.min(vI, df.eM), hU.vN(player, vI)) && (hk.g8.vG(5, player, vI), hU.vX(player, vI))
	}, this.q1 = function(player, vY) {
		(q.ce.ds(1) || q.ce.ds(2)) && q.ce.dt(player) && (vY = ny.oV(vY, 0, 1023), hk.g8.vG(6, player, vY), fZ.vZ(player, 0, vY))
	}, this.q2 = function(player, va) {
		q.ce.ds(1) && q.ce.dt(player) && (hk.g8.vG(7, player, va), gl.vb(player, va))
	}, this.q3 = function(player) {
		(q.ce.ds(0) || q.ce.ds(1)) && q.ce.dt(player) && vc.q3(player) && hk.g8.vG(8, player)
	}, this.q4 = function(player) {
		vc.q4(player), hk.g8.vG(9, player)
	}
}

function vd() {
	this.el = function() {
		var aF = dR,
			dS = dT,
			eb = [];
		for (let a6 = 0; a6 < aF; a6++) {
			var dY = dS[a6];
			dZ.da(dY) && eb.push(dY)
		}
		return eb
	}, this.er = function() {
		var aF = dR,
			dS = dT;
		let eu = 0;
		var ev = dV.ev;
		for (let a6 = 0; a6 < aF; a6++) eu += ev[dS[a6]];
		return eu
	}
}

function aR(hC, iV) {
	return Math.floor(hC / iV + 1 / (2 * iV))
}

function aO(hC, iV) {
	return 0 <= hC ? aR(hC, iV) : -aR(-hC, iV)
}

function ve(aL) {
	return aL * aL
}

function b1(hC, iV) {
	return iV < hC ? hC : iV
}

function b0(hC, iV) {
	return hC < iV ? hC : iV
}

function vf(hC, aL, iV) {
	return aL < hC ? hC : iV < aL ? iV : aL
}

function vg(aL, aF) {
	for (var u = aR(aL + 1, 2), a6 = 0; a6 < aF; a6++) u = aR(u + aR(aL, u), 2);
	return u
}

function mI(aL, aF) {
	return aL < 1 ? 0 : vg(aL, aF)
}

function vh(bK, hP, gx, am, hQ, hR, gy, vi) {
	return !(bK + gx <= hQ || hP + am <= hR || hQ + gy <= bK || hR + vi <= hP)
}

function vj(bK, hP, gx, am, hQ, hR, gy, vi) {
	return bK <= hQ && hP <= hR && hQ + gy <= bK + gx && hR + vi <= hP + am
}

function sM(aL) {
	return Math.floor(!!aL * (1 + Math.log2(aL + .5)))
}

function lv(title, b, vk = !1, c = [new d("❌ " + e.f[92], function() {
	g.h()
}, i.j)]) {
	let k, l;
	this.show = function() {
		k.show(), this.resize()
	}, this.s = function() {
		k.s()
	}, this.resize = function() {
		k.resize(), l.resize()
	}, this.t = function(u) {
		2 === u && k.v[0].w()
	}, k = new n(title, c), l = new o(k.p, b), vk && q.r.textAlign(k.p.style, 1)
}

function vl() {
	var vm;

	function w1(km, w2, a7, a8, globalAlpha) {
		y.nQ.save(), y.nQ.globalAlpha = globalAlpha, y.nQ.imageSmoothingEnabled = !1, y.nQ.scale(w2, w2), y.nQ.drawImage(km, Math.floor(a7 * (y.aB / w2 - km.width)), Math.floor(a8 * (y.aC / w2 - km.height))), y.nQ.restore()
	}
	this.vn = 0, this.vo = 0, this.vp = 0, this.vq = 0, this.m = function() {
		(vm = new Array(y.n8))[0] = {
			ak: [0, 5e3, 8e3, 1e4],
			kQ: [220, 250, 255, 220],
			gS: [190, 220, 0, 0],
			iV: [170, 200, 0, 0]
		}, vm[1] = {
			ak: [0, 4e3, 5e3, 6e3, 1e4],
			kQ: [25, 0, 100, 0, 25],
			gS: [25, 0, 0, 0, 25],
			iV: [25, 0, 0, 0, 25]
		}, vm[2] = {
			ak: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			kQ: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			gS: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			iV: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, vm[3] = {
			ak: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			kQ: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			gS: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			iV: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, vm[4] = {
			ak: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			kQ: [10, 10, 20, 10, 10, 170, 212],
			gS: [20, 20, 60, 100, 100, 110, 170],
			iV: [70, 70, 160, 30, 30, 60, 120]
		}, vm[5] = {
			ak: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			kQ: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			gS: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			iV: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, vm[6] = {
			ak: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			kQ: [10, 10, 60, 255, 255, 200, 200],
			gS: [10, 10, 60, 255, 255, 200, 200],
			iV: [80, 80, 255, 255, 255, 200, 200]
		}, vm[7] = {
			ak: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			kQ: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			gS: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			iV: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, vm[8] = {
			ak: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			kQ: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			gS: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			iV: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, vm[9] = {
			ak: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			kQ: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			gS: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			iV: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, vm[20] = {
			ak: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			kQ: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			gS: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			iV: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}
	}, this.qF = function() {
		var w0, a6, hC, jL, ks = function() {
				var ks;
				return y.ge = document.createElement("canvas"), y.ge.width = y.aB, y.ge.height = y.aC, y.nQ = y.ge.getContext("2d", {
					alpha: !1
				}), ks = y.nQ.getImageData(0, 0, y.aB, y.aC), y.nR = ks.data, ks
			}(),
			ak = vm[y.z].ak,
			kQ = vm[y.z].kQ,
			gS = vm[y.z].gS,
			iV = vm[y.z].iV,
			aL = aM.aN(),
			aF = ak.length - 2,
			vu = new Array(1 + aF),
			vv = new Array(1 + aF),
			vw = new Array(1 + aF),
			vx = new Array(1 + aF);
		for (hC = aF; 0 <= hC; hC--) vu[hC] = ak[hC + 1] - ak[hC], vv[hC] = kQ[hC + 1] - kQ[hC], vw[hC] = gS[hC + 1] - gS[hC], vx[hC] = iV[hC + 1] - iV[hC];
		for (a6 = y.aB * y.aC - 1; 0 <= a6; a6--)
			for (hC = aF; 0 <= hC; hC--)
				if (aL[a6] >= ak[hC]) {
					jL = aL[a6] - ak[hC], y.nR[4 * a6] = kQ[hC] + aO(vv[hC] * jL, vu[hC]), y.nR[4 * a6 + 1] = gS[hC] + aO(vw[hC] * jL, vu[hC]), y.nR[4 * a6 + 2] = iV[hC] + aO(vx[hC] * jL, vu[hC]), y.nR[4 * a6 + 3] = 255;
					break
				} y.nQ.putImageData(ks, 0, 0), y.qJ(y.z) && bN.fv() && y.qJ(y.z) && (ks = bN.vz("arena"), w0 = bN.vz("territorial.io"), w1(ks, 5, .5, .5, .1), w1(w0, 2, .5, .45, .1)), y.q7 = !0, bA.bE = !0
	}, this.w3 = function() {
		for (var dY, a7, a8, w4, w5, jN, vo = 0, ak = y.aB, al = y.aC, jL = ak * al * 4, w6 = w7, w8 = y.nR, a6 = ak - 1; 0 <= a6; a6--) w6[(dY = a6 << 2) + 2] = w6[jL - dY - 2] = 3;
		for (jL = 4 * ak, a6 = al - 1; 0 <= a6; a6--) w6[(dY = a6 * jL) + 2] = w6[dY + jL - 2] = 3;
		for (w4 = ak - 1, w5 = al - 1, a8 = 1; a8 < w5; a8++)
			for (jL = a8 * ak, a7 = 1; a7 < w4; a7++) jN = 1 - (w8[(dY = jL + a7 << 2) + 2] > w8[dY + 1] && w8[dY + 2] > w8[dY]), w6[dY + 2] = 2 - jN, vo += jN;
		this.vn = (ak - 2) * (al - 2), this.vq = 0, y.qH(y.z) && function() {
			var dY, a7, a8, jL, w6 = w7,
				w8 = y.nR,
				ak = y.aB,
				w4 = ak - 1,
				w5 = y.aC - 1,
				il = 0;
			for (a8 = 1; a8 < w5; a8++)
				for (jL = a8 * ak, a7 = 1; a7 < w4; a7++) w8[dY = jL + a7 << 2] === w8[1 + dY] && w8[dY] === w8[2 + dY] && (il++, w6[2 + dY] = 3);
			qE.vq = il
		}(), this.vo = df.mN = vo - this.vq, this.vp = this.vn - this.vo - this.vq
	}
}

function wA() {
	this.dS = null, this.m = function(dS) {
		this.dS = dS, f6.wB(this.dS)
	}, this.wC = function(wD) {
		var kz = (this.dS[wD].wE - this.dS[1 - wD].wE) / 10,
			kz = 8 / (1 + Math.pow(2, kz / 32)),
			kz = Math.floor(10 * kz + .5),
			wG = this.wH(this.dS[wD].wE + kz + 1),
			kz = this.wH(this.dS[1 - wD].wE - kz);
		0 === wD ? f6.wJ(this.dS, wG, kz, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : f6.wJ(this.dS, kz, wG, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.wH = function(wE) {
		return 16e3 <= (wE = wE < 0 ? 0 : 16e3 < wE ? 16e3 : wE) ? "Unknown" : (wE / 10).toFixed(1)
	}
}

function wK() {
	let wL, wM, wN, rr, wO;
	wN = new j6([.45, .27], [.5, .5], 2 / 3), wM = [new d("⚔️<br>Multiplayer", function() {
			wP(0)
		}, i.wQ), new d("🗡️<br>Single Player", function() {
			wP(1)
		}, i.wR), new d("🔑<br>My Account", function() {
			wP(2)
		}, i.wS), new d("⚙️<br>Menu", function() {
			wP(3)
		}, i.wT), new d("", function() {
			g.g2(12)
		}, i.oQ, !1),
		new d("FX Client settings", function() {
			WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5")
	], rr = new rs(aZ.af.data[122]);
	for (let a6 = 0; a6 < wM.length; a6++) wM[a6].button.style.position = "absolute";

	function wP(aQ) {
		av.aw.setState(10), iB.kH(), bN.fv() || bN.wU(), 0 === aQ ? g.d4.wV() : 1 === aQ ? g.d4.wW() : 2 === aQ ? 0 !== av.id || aZ.af.data[140].value ? g.g2(8, g.dM, new g3(16)) : g.d4.uA(g.dM, 16) : 3 === aQ && g.g2(1, g.dM)
	}
	rr.cY.style.position = "absolute", rr.cY.style.textAlign = "center", rr.cY.placeholder = "Your Kingdom's Name", this.show = function() {
		cM.setState(0), av.aw.setState(12), wM[4].s0(q.color.wX(aZ.af.data[121].value)), this.resize(), document.body.appendChild(rr.cY);
		for (let a6 = 0; a6 < wM.length; a6++) document.body.appendChild(wM[a6].button);
		1 !== av.id || av.aa < 5 || (wO && bA.bB > wO + 144e5 ? av.t7.setState(14) : wO = bA.bB)
	}, this.s = function() {
		document.body.removeChild(rr.cY);
		for (let a6 = 0; a6 < wM.length; a6++) document.body.removeChild(wM[a6].button)
	}, this.resize = function() {
		wN.resize();
		var gap = .5 * b2.gap,
			wZ = 10 / 99 * .84 * wN.ak,
			wa = 3 * gap,
			wb = .16 * wN.al,
			fh = .19 * wN.ak,
			a7 = wN.a7 + fh,
			wZ = wN.a8 + wZ + wa,
			wa = .5 * (wN.ak - gap) - fh,
			fh = wN.ak - 2 * fh - wb - gap,
			fh = (q.r.wd(rr.cY, a7, wZ, fh, wb), q.r.wd(wM[4].button, a7 + fh + gap, wZ, wb, wb), wZ += wb + gap, .5 * (wN.a8 + wN.al - wZ - gap));
		q.r.wd(wM[0].button, a7, wZ, wa, fh), q.r.wd(wM[1].button, a7 + wa + gap, wZ, wa, fh), q.r.wd(wM[2].button, a7, wZ + fh + gap, wa, fh), q.r.wd(wM[3].button, a7 + wa + gap, wZ + fh + gap, wa, fh);
		q.r.wd(wM[5].button, a7, wZ + fh * 2 + gap * 2, wa * 2 + gap, fh / 3);
		for (let a6 = 0; a6 < wM.length; a6++) wM[a6].button.style.font = q.r.ft(0, q.r.we(.065 * wN.al)), q.r.os(wM[a6].button, 5);
		rr.cY.style.font = q.r.ft(0, q.r.we(.08 * wN.al)), q.r.os(rr.cY, 5)
	}, this.bH = function() {
		if (cM.wf(), kG.bH(), qL.bH(), wg.bH(), wh.bH(), bN.fv()) {
			if (settings.displayWinCounter) {
				const size = Math.floor(wN.ak * 0.03);
				bI.font = q.kG.ft(1, size);
				bI.fillStyle = "#ffffff";
				const text = "Win count: " + wins_counter;
				const textLength = bI.measureText(text).width;
				bI.textAlign = "left";
				bI.textBaseline = "middle";
				bI.fillText(text, bI.canvas.width - textLength - size / 2, size);
			};
			bI.imageSmoothingEnabled = !1;
			var u = bN.vz("territorial.io"),
				fd = .84 * wN.ak / u.width;
			bI.setTransform(fd, 0, 0, fd, wN.a7 + .08 * wN.ak, wN.a8), wL = wL || q.cj.wj(u, q.cj.wk, [0, 0, 0]);
			for (let a7 = -1; a7 <= 1; a7 += 2)
				for (let a8 = -1; a8 <= 1; a8 += 2) bI.drawImage(wL, a7, a8);
			bI.drawImage(u, 0, 0), bI.imageSmoothingEnabled = !0;
			var iK = bN.vz("logo"),
				wl = .6666 * fd * u.height / iK.height,
				hQ = .5 * ay.ak,
				hR = wN.a8 + .5 * fd * u.height - .5 * wl * iK.height;
			bI.setTransform(wl, 0, 0, wl, hQ - .6 * fd * u.width, hR), bI.drawImage(iK, 0, 0), bI.setTransform(wl, 0, 0, wl, hQ + .6 * fd * u.width - wl * iK.width, hR), bI.drawImage(iK, 0, 0), bI.setTransform(1, 0, 0, 1, 0, 0), bI
				.imageSmoothingEnabled = !0
		}
	}
}

function wm() {
	var wn, wo, wp, wq, wr, ws, wt, ri, wv, wx, wy, wz, x1, x2, x3, x4, x5, wu = 48,
		x0 = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
		sk = [0, 0, 0, 0];

	function x9(a6, vY) {
		a6 = wt[a6].getContext("2d", {
			alpha: !0
		});
		a6.clearRect(0, 0, wu, wu), xA.p4.xG(vY, a6, 0, 0, wu)
	}

	function x8(a6, km) {
		var a6 = wt[a6].getContext("2d", {
				alpha: !0
			}),
			zoom = (a6.clearRect(0, 0, wu, wu), wu / km.width),
			eu = wu / km.height,
			zoom = eu < zoom ? eu : zoom;
		a6.imageSmoothingEnabled = !0, a6.setTransform(zoom, 0, 0, zoom, Math.floor((wu - zoom * km.width) / 2), Math.floor((wu - zoom * km.height) / 2)), a6.drawImage(km, 0, 0), a6.setTransform(1, 0, 0, 1, 0, 0)
	}

	function xK(u, kQ, xM, ko) {
		ko.beginPath(), ko.moveTo(u, u), ko.lineTo(u + Math.cos(xM) * kQ, u + Math.cos(xM + 1.5 * Math.PI) * kQ), ko.stroke()
	}

	function xW() {
		if (7 === cM.cN()) {
			for (var iJ, km, ko, zoom, eu, hC = -1, a6 = ri.length - 1; 0 <= a6; a6--)
				if (null === ri[a6].aq) {
					hC = a6;
					break
				} - 1 !== hC && (null !== (iJ = xS(ri[hC].gJ, ri[hC].gK)) ? ri[hC].aq = iJ : (iJ = {
					aB: y.aB,
					aC: y.aC,
					ge: y.ge,
					nQ: y.nQ,
					q6: y.q6,
					nR: y.nR,
					z: y.z,
					gL: y.gL
				}, y.bd(ri[hC].gJ, ri[hC].gK), y.q8.qB(), (km = document.createElement("canvas")).width = 128, km.height = 128, ko = km.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / y.aB) < (eu = 128 / y.aC) && (zoom = eu), ko.imageSmoothingEnabled = !0, ko.setTransform(zoom, 0, 0, zoom, (128 - zoom * y.aB) / 2, (128 - zoom * y.aC) / 2), ko.drawImage(y.ge, 0, 0), y.aB = iJ.aB, y.aC = iJ
				.aC, y.ge = iJ.ge, y.nQ = iJ.nQ, y.q6 = iJ.q6, y.nR = iJ.nR, y.z = iJ.z, y.gL = iJ.gL, ri[hC].aq = km), bA.bE = !0)
		}
	}

	function xS(gJ, gK) {
		for (var a6 = ri.length - 1; 0 <= a6; a6--)
			if (null !== ri[a6].aq && ri[a6].gJ === gJ && ri[a6].gK === gK) return ri[a6].aq;
		return null
	}
	this.m = function() {
		var a6;
		for (x5 = 0, wx = -1, cM.setState(7), ri = [], this.resize(), wt = new Array(13), a6 = wt.length; 0 <= a6; a6--) wt[a6] = document.createElement("canvas"), wt[a6].width = wu, wt[a6].height = wu;
		for (a6 = 0; a6 < 7; a6++) ! function(il) {
			var xI, ko = wt[il - 2].getContext("2d", {
					alpha: !0
				}),
				xH = 1.5 * Math.PI,
				u = Math.floor(.5 * wu),
				kQ = Math.floor(.48 * wu);
			ko.lineWidth = 2, ko.strokeStyle = i.bM, ko.clearRect(0, 0, wu, wu);
			for (var a6 = 0; a6 < il; a6++) xI = xH + 2 * Math.PI / il,
				function(a6, u, kQ, xH, xI, ko) {
					ko.fillStyle = lV.hw[a6], ko.beginPath(), ko.arc(u, u, kQ, xH, xI), ko.lineTo(u, u), ko.fill()
				}(a6 + 1, u, kQ, xH, xI, ko), 0 !== a6 && xK(u, kQ, xH, ko), xH = xI;
			xK(u, kQ, 1.5 * Math.PI, ko),
				function(u, kQ, ko) {
					ko.beginPath(), ko.arc(u, u, kQ, 0, 2 * Math.PI), ko.stroke()
				}(u, kQ, ko)
		}(a6 + 2);
		x8(7, bN.get(4)), x9(8, xA.xB.xC + xA.xB.xD), x9(9, xA.xB.xC + xA.xB.xE), x9(10, 1024 - xA.xB.xF), x8(11, bN.get(19)), x8(12, bN.get(20)), bA.bE = !0
	}, this.kf = function() {
		this.m7(), c8.d4.cU(3240), cM.setState(0), g.g2(5, 5)
	}, this.m7 = function() {
		ri = [], wt = []
	}, this.xN = function() {
		return wz
	}, this.resize = function() {
		var xO, sI, xP, xQ;
		for (wp = [0, 0], wv = [0, 0, 0, 0], x4 = av.aw.ax() ? (wy = Math.floor(.8 * .4 * ay.az), wz = Math.floor(.56 * wy), wv[0] = b2.gap, ay.ak < ay.al ? (wv[1] = wz + 2 * b2.gap, wv[2] = ay.ak - 3 * wv[0], wv[3] = wh.bG() - 3 * b2.gap - wz,
				x2 = Math.floor(.95 * wz), x3 = Math.floor((ay.ak - wy - b2.gap) / 2), Math.floor(b2.gap + wz / 2)) : (wv[1] = b2.gap, wv[2] = ay.ak - 3 * b2.gap - wy, wv[3] = wh.bG() - 2 * b2.gap, x2 = Math.floor(.8 * wy), wv[3] - wz < wy &&
				(x2 = Math.floor(.8 * (wv[3] - wz)), x2 = b1(wz, x2)), x3 = Math.floor(ay.ak - wy / 2 - b2.gap), b1(x4 = Math.floor(b2.gap + wz + (wv[3] - wz) / 2), Math.floor(wz + 2 * b2.gap + x2 / 2)))) : (wy = Math.floor(.2016 * ay.az), wz =
				Math.floor(.56 * wy), wv[2] = Math.floor(.5 * ay.ak), wv[3] = Math.floor(.5 * ay.al), wv[1] = Math.floor(.45 * (ay.al - wv[3])), wv[0] = Math.floor((ay.ak - wv[2]) / 2), x2 = Math.floor(.75 * wz), x3 = Math.floor(ay.ak / 2), Math
				.floor(wv[1] + wv[3] + (ay.al - wv[3] - wv[1]) / 2)), x1 = q.r.ft(1, .65 * wz / 4), xO = sI = 1; xO * sI < ri.length;) wv[3] / (sI + 1) < wv[2] / (xO + 1) ? xO++ : sI++;
		xP = (wv[2] - (xO - 1) * b2.gap) / xO, xQ = (wv[3] - (sI - 1) * b2.gap) / sI, wn = xP < xQ ? xP : xQ, wo = Math.floor(wn), ws = q.r.ft(1, .5 * wn / 5), wp[0] = xO, wp[1] = sI, wq = wv[0] + Math.floor((wv[2] - wp[0] * wn - (wp[0] - 1) * b2
			.gap) / 2), wr = wv[1] + Math.floor((wv[3] - wp[1] * wn - (wp[1] - 1) * b2.gap) / 2)
	}, this.aX = function(xR, dY) {
		var a6, eu, aq, aF = ri.length;
		for (sk = xR, a6 = 0; a6 < dY.length; a6++) aq = xS(dY[a6].z, dY[a6].gL), ri.push({
			xT: dY[a6].id,
			gF: dY[a6].gF,
			gG: dY[a6].so,
			gJ: dY[a6].z,
			gK: dY[a6].gL,
			joined: dY[a6].sp,
			xU: dY[a6].sr,
			sq: dY[a6].sq,
			aq: aq,
			sj: dY[a6].sj,
			ss: dY[a6].ss,
			st: dY[a6].st
		});
		for (a6 = aF - 1; 0 <= a6; a6--) ri.shift();
		if (-1 !== wx)
			for (eu = wx, wx = -1, a6 = ri.length - 1; 0 <= a6; a6--)
				if (ri[a6].xT === eu) {
					wx = eu;
					break
				}(ri.length > x5 || ri.length < x5) && (x5 = ri.length, this.resize()), this.xV(), bA.bE = !0
	}, this.xV = function() {
		for (var a6 = ri.length - 1; 0 <= a6; a6--) null === ri[a6].aq && setTimeout(xW, 0)
	}, this.bF = function(a7, a8) {
		return 4 * ((a7 - x3) * (a7 - x3) + (a8 - x4) * (a8 - x4)) <= x2 * x2 ? (this.kf(), xX.fU(a7, a8, !1), !0) : function(a7, a8) {
			var hC, iV, bK, hP;
			if (0 !== ri.length) {
				var a6 = 0;
				for (hP = wr, iV = 0; iV < wp[1]; iV++) {
					for (bK = wq, hC = 0; hC < wp[0]; hC++) {
						if (bK < a7 && a7 < bK + wn && hP < a8 && a8 < hP + wn) return c8.xZ.xa(ri[a6].xT), wx = ri[a6].xT !== wx ? ri[a6].xT : -1, bA.bE = !0;
						if (++a6 >= ri.length) return !1;
						bK += wn + b2.gap
					}
					hP += wn + b2.gap
				}
			}
			return !1
		}(a7, a8)
	}, this.bH = function() {
		var hC, iV, a7, kQ, zoom, a6 = 0,
			a8 = wr;
		if (bI.imageSmoothingEnabled = !0, bI.lineWidth = 3, kQ = Math.floor(.5 * x2), bI.fillStyle = i.xe, bI.beginPath(), bI.arc(x3, x4, kQ, 0, 2 * Math.PI), bI.fill(), bI.strokeStyle = i.bM, bI.beginPath(), bI.arc(x3, x4, kQ, 0, 2 * Math.PI),
			bI.stroke(), kQ = bN.get(0).height, zoom = .6 * x2 / kQ, bI.setTransform(zoom, 0, 0, zoom, Math.floor(x3 - .56 * zoom * bN.get(0).width), Math.floor(x4 - .5 * zoom * kQ)), bI.drawImage(bN.get(0), 0, 0), bI.setTransform(1, 0, 0, 1, 0,
				0),
			function() {
				bI.fillStyle = i.xe, bI.fillRect(ay.ak - wy - b2.gap, b2.gap, wy, wz), 0 <= wx ? (bI.fillStyle = i.xf, bI.fillRect(ay.ak - wy - b2.gap, b2.gap, wy, Math.floor(.25 * wz))) : (bI.fillStyle = i.xg, bI.fillRect(ay.ak - wy - b2.gap, b2
					.gap + Math.floor(.25 * wz), wy, Math.floor(.25 * wz)));
				bI.strokeStyle = i.bM, bI.strokeRect(ay.ak - wy - b2.gap, b2.gap, wy, wz), bI.fillStyle = i.bM, bI.font = x1, q.r.textBaseline(bI, 1);
				for (var a8, xh = Math.floor(.04 * wy), xi = Math.floor(.08 * wz), a6 = 3; 0 <= a6; a6--) a8 = Math.floor(b2.gap + (a6 + 1) * (wz + 2 * xi) / 5 - xi), q.r.textAlign(bI, 0), bI.fillText(x0[a6], ay.ak - wy - b2.gap + xh, a8), q.r
					.textAlign(bI, 2), bI.fillText(q.cg.hX(sk[a6]), ay.ak - b2.gap - xh, a8)
			}(), 0 !== ri.length)
			for (iV = 0; iV < wp[1]; iV++) {
				for (a7 = wq, hC = 0; hC < wp[0]; hC++) {
					if (! function(a6, a7, a8) {
							var zoom, iV, xj, xl, xm;
							null === ri[a6].aq ? (bI.fillStyle = i.xe, bI.fillRect(a7, a8, wo, wo)) : (zoom = wo / 128, bI.setTransform(zoom, 0, 0, zoom, a7, a8), bI.drawImage(ri[a6].aq, 0, 0), bI.setTransform(1, 0, 0, 1, 0, 0));
							wx === ri[a6].xT ? (function(a7, a8) {
								var gx = Math.floor(.2 * wo),
									gy = Math.floor(.3 * gx);
								bI.fillStyle = i.xo, bI.fillRect(a7 + wo - gx, a8, gx, gx), bI.fillStyle = i.hT, bI.fillRect(a7 + wo - gx, a8, 2, gx), bI.fillRect(a7 + wo - gx, a8 + gx - 2, gx, 2), dq.xn(a7 + wo - gx + gy, a8 + gy, gx -
									2 * gy), bI.setTransform(1, 0, 0, 1, 0, 0)
							}(a7, a8), bI.lineWidth = 3, bI.fillStyle = i.xo) : bI.fillStyle = i.fo;
							xl = Math.floor(wn / 4), bI.fillRect(a7, a8, xl, xl), xm = Math.floor(a8 + .8 * wn), bI.fillRect(a7, xm, wo, Math.floor(wn / 5)),
								function(a6, a7, a8) {
									var zoom;
									ri[a6].gG && (a6 = bN.get(4), zoom = .5 * wn / a6.width, bI.setTransform(zoom, 0, 0, zoom, Math.floor(a7 + (wn - zoom * a6.width) / 2), Math.floor(a8 + (wn - zoom * a6.height) / 2)), bI.globalAlpha = .6, bI
										.drawImage(a6, 0, 0), bI.globalAlpha = 1, bI.setTransform(1, 0, 0, 1, 0, 0))
								}(a6, a7, a8);
							var xq = new Array(ri[a6].sj);
							if (ri[a6].sj) {
								for (iV = xj = 0; iV < ri[a6].sj; iV++) ri[a6].ss[iV] = q.bJ.se(ri[a6].ss[iV], ws, .4 * wn), xq[iV] = ("" === ri[a6].ss[iV] ? "other: " : "[" + ri[a6].ss[iV] + "]: ") + ri[a6].st[iV];
								for (iV = 0; iV < ri[a6].sj; iV++) xj = Math.max(xj, fx.measureText(xq[iV], ws));
								xj += .05 * wn, iV = 5 === ri[a6].sj, xl = iV ? a8 + xl : Math.max(a8 + .8 * wn - .11 * ri[a6].sj * wn, a8 + xl), xm = iV ? xm : Math.min(xl + .11 * ri[a6].sj * wn + .05 * wn, xm), bI.fillRect(a7, xl, xj, xm - xl)
							}
							for (bI.font = ws, q.r.textBaseline(bI, 1), q.r.textAlign(bI, 0), bI.fillStyle = i.xr, bI.fillText(ri[a6].joined.toString(), Math.floor(a7 + .22 * wn), Math.floor(a8 + .9 * wn)), bI.fillStyle = i.bM, iV = 0; iV < ri[
									a6].sj; iV++) bI.fillText(xq[ri[a6].sj - iV - 1], Math.floor(a7 + .03 * wn), Math.floor(a8 + .77 * wn - .11 * iV * wn));
							q.r.textAlign(bI, 2), bI.fillStyle = i.xs, bI.fillText(ri[a6].xU.toString(), Math.floor(a7 + .81 * wn), Math.floor(a8 + .9 * wn)), bI.strokeStyle = wx === ri[a6].xT ? i.xt : i.xu, bI.strokeRect(a7, a8, wo, wo), xm =
								Math.floor(.16 * wn), zoom = xm / wu, bI.setTransform(zoom, 0, 0, zoom, Math.floor(a7 + .33 * xm), Math.floor(a8 + .33 * xm)), wt.length > ri[a6].gF && bI.drawImage(wt[ri[a6].gF], 0, 0);
							bI.setTransform(zoom, 0, 0, zoom, Math.floor(a7 + .15 * xm), Math.floor(a8 + wn - 1.08 * xm)), bI.drawImage(wt[11], 0, 0), bI.setTransform(zoom, 0, 0, zoom, Math.floor(a7 + wn - 1.05 * xm), Math.floor(a8 + wn - 1.15 *
								xm)), bI.drawImage(wt[12], 0, 0), bI.setTransform(1, 0, 0, 1, 0, 0)
						}(a6, Math.floor(a7), Math.floor(a8)), ++a6 >= ri.length) return;
					a7 += wn + b2.gap
				}
				a8 += wn + b2.gap
			}
	}
}

function xw() {
	this.xx = new xy, this.ey = new xz, this.result = new ea, this.eF = new vd
}

function y0() {
	var y1, y2, fw, al, y3;

	function y5(a6) {
		let y6 = !0,
			iJ = i.bM;
		y1[a6].vI === df.eM ? y1[a6].bJ.fillStyle = i.y7 : (dZ.y8(y1[a6].vI), y1[a6].bJ.fillStyle = q.color.y9(j1.jF[0], j1.jF[1], j1.jF[2], .87), 400 < q.cc.yA(j1.jF, 0, 2) && (y6 = !1, iJ = i.hT));
		var ak = y1[a6].aq.width,
			gx = (y1[a6].bJ.clearRect(0, 0, ak, al), y1[a6].bJ.fillRect(0, 0, ak, al), y1[a6].bJ.fillStyle = iJ, ! function(bJ, ak, al) {
				bJ.fillRect(0, 0, ak, 1), bJ.fillRect(0, al - 1, ak, 1), bJ.fillRect(0, 0, 1, al), bJ.fillRect(ak - 1, 0, 1, al)
			}(y1[a6].bJ, ak, al), y2 + 2 * al < ak && (y1[a6].bJ.fillRect(ak - y2 - al, 0, 1, al), y1[a6].bJ.fillText(dV.hY[y1[a6].vI], Math.floor((ak - y2) / 2), Math.floor(.57 * al))), 0 !== y1[a6].id ? 0 : al);
		y1[a6].bJ.fillText(q.cg.hX(y1[a6].hO), Math.floor(ak - y2 / 2 - gx), Math.floor(.57 * al)),
			function(a6, ak, gx, y6) {
				y1[a6].bJ.fillStyle = y6 ? i.xu : i.yF;
				y6 = Math.floor(y2 * y1[a6].hO / y1[a6].yG);
				y1[a6].bJ.fillRect(Math.floor(ak - y2 - gx), al - y3, y6, y3)
			}(a6, ak, gx, y6), 0 === y1[a6].id ? (yD(a6, ak, y6, iJ), function(a6, ak, y6) {
				y1[a6].bJ.strokeStyle = y6 ? i.yK : i.yL, y1[a6].bJ.fillRect(al, 0, 1, al);
				y6 = ak - al;
				y1[a6].bJ.beginPath(), y1[a6].bJ.moveTo(Math.floor(.3 * al + y6), Math.floor(al / 2)), y1[a6].bJ.lineTo(Math.floor(al - .3 * al + 0 + y6), Math.floor(al / 2)), y1[a6].bJ.stroke(), y1[a6].bJ.beginPath(), y1[a6].bJ.moveTo(Math
					.floor(al / 2 + y6), Math.floor(.3 * al)), y1[a6].bJ.lineTo(Math.floor(al / 2 + y6), Math.floor(al - .3 * al + 0)), y1[a6].bJ.stroke()
			}(a6, ak, y6)) : yD(a6, 2 * al, y6, iJ)
	}

	function yD(a6, ak, y6, iJ) {
		y1[a6].bJ.strokeStyle = y1[a6].yH ? i.yI : y6 ? i.s9 : i.yJ, y1[a6].bJ.fillStyle = iJ, y1[a6].bJ.fillRect(ak - al, 0, 1, al), y1[a6].bJ.lineWidth = Math.max(Math.floor(al / 12), 3), y1[a6].bJ.lineCap = "round";
		y6 = .35;
		ak = al + 1, y1[a6].bJ.beginPath(), y1[a6].bJ.moveTo(Math.floor(ak - y6 * al + 0), Math.floor(y6 * al)), y1[a6].bJ.lineTo(Math.floor(ak - al + y6 * al), Math.floor(al - y6 * al + 0)), y1[a6].bJ.stroke(), y1[a6].bJ.beginPath(), y1[a6].bJ
			.moveTo(Math.floor(ak - al + y6 * al), Math.floor(y6 * al)), y1[a6].bJ.lineTo(Math.floor(ak - y6 * al + 0), Math.floor(al - y6 * al + 0)), y1[a6].bJ.stroke()
	}

	function yX(aF) {
		for (var hO, a6 = aF - 1; 0 <= a6; a6--) hO = hU.hV(df.du, a6), y1[a6].hO !== hO && (y1[a6].hO = hO, y1[a6].yG = hO > y1[a6].yG ? hO : y1[a6].yG, y1[a6].oF = !0)
	}

	function y4(yb) {
		yb.aq = document.createElement("canvas"), y.nQ.font = fw;
		var ak = y2;
		yb.vI < df.eM && 0 === yb.id && (ak += Math.floor(y.nQ.measureText(dV.hY[yb.vI] + "000").width)), ak += al, 0 === yb.id && (ak += al), yb.aq.width = ak, yb.aq.height = al, yb.bJ = yb.aq.getContext("2d", {
			alpha: !0
		}), yb.bJ.font = fw, q.r.textBaseline(yb.bJ, 1), q.r.textAlign(yb.bJ, 1)
	}

	function yS(a6) {
		return gn.ye() ? ay.ak - y1[a6].aq.width - b2.gap : gn.a7
	}

	function yT(a6) {
		return Math.floor(2 * b2.gap + (gn.ye() ? gm.al + b2.gap : 0) + gn.al + a6 * (1.3 * al))
	}
	this.m = function() {
		y1 = [], this.resize()
	}, this.resize = function() {
		fw = f6.fw, al = f6.fontSize + 5, al = Math.floor(1.25 * al), av.aw.ax() && (al = Math.floor(1.25 * al)), y3 = Math.floor(.15 * al), y.nQ.font = fw, y2 = Math.floor(y.nQ.measureText("02 000 000 0000").width);
		for (var a6 = y1.length - 1; 0 <= a6; a6--) y4(y1[a6]), y5(a6)
	}, this.oK = function() {
		for (var a6 = y1.length - 1; 0 <= a6; a6--) y1[a6].oF && (y1[a6].oF = !1, y5(a6))
	}, this.bF = function(fb, a8) {
		if (2 !== df.gP && 0 !== dV.eg[df.du] && !df.dp && dZ.da(df.du))
			for (var yN, yO, yP, yQ = av.aw.ax() ? al : 0, yR = av.aw.ax() ? Math.floor(.15 * al) : 0, a6 = y1.length - 1; 0 <= a6; a6--)
				if (yN = yS(a6), yO = yT(a6), yP = y1[a6].aq.width, yO - yR <= a8 && a8 <= yO + al + yR) {
					if (yN - yQ <= fb && fb <= yN + al + yQ) return y1[a6].yH || (y1[a6].oF = !0, y1[a6].yH = !0, 0 === y1[a6].id && e9.eA.q0(y1[a6].vI)), !0;
					if (0 === y1[a6].id && yN + yP - al - yQ <= fb && fb <= yN + yP + yQ) return e9.eA.eL(b8.eI(), y1[a6].vI), !0
				} return !1
	}, this.bD = function() {
		var aF;
		2 !== df.gP && 0 !== dV.eg[df.du] && !df.dp && dZ.da(df.du) && (function(aF) {
			if (y1.length !== aF) return 1;
			for (var a6 = aF - 1; 0 <= a6; a6--)
				if (y1[a6].id !== hU.yZ(df.du, a6) || y1[a6].vI !== hU.ya(df.du, a6)) return 1;
			return
		}(aF = hU.yV(df.du)) && function(aF) {
			var a6, id, vI, iV, hO, yc = [];
			loop: for (a6 = 0; a6 < aF; a6++) {
				for (id = hU.yZ(df.du, a6), vI = hU.ya(df.du, a6), iV = 0; iV < y1.length; iV++)
					if (y1[iV].id === id && y1[iV].vI === vI) {
						yc.push(y1.splice(iV, 1)[0]);
						continue loop
					} hO = hU.hV(df.du, a6), y4(hO = {
					vI: vI,
					hO: hO,
					yG: hO,
					id: id,
					oF: !0,
					yH: !1,
					aq: null,
					bJ: null
				}), yc.push(hO)
			}
			y1 = yc
		}(aF), yX(aF))
	}, this.yd = function(dY) {
		for (var aF = Math.min(y1.length, hU.yV(df.du)), a6 = 0; a6 < aF; a6++)
			if (y1[a6].vI === dY) return void(y1 = [])
	}, this.bH = function() {
		if (0 !== dV.eg[df.du] && dZ.da(df.du) && !df.dp)
			for (var a6 = y1.length - 1; 0 <= a6; a6--) bI.drawImage(y1[a6].aq, yS(a6), yT(a6))
	}
}

function yf() {
	this.ai = !1, this.y1 = null, this.yg = 0, this.ak = null, this.al = null, this.yh = .013, this.yi = .022, this.yj = .025;
	this.yl = 3, this.ym = 1.2, this.yn = .2, this.yo = .235, this.yp = .9, this.yq = .08;
	var ys, yr = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"],
		yt = [-1e6, -1e6];
	this.position = [0, 0], this.yv = [0, 0], this.m = function() {
		this.y1 = [null, null], this.ai = !1, this.yg = 0
	}, this.oU = function(id) {
		this.yg = id, c8.c9.yw(0, this.yg)
	}, this.bD = function() {
		this.ai && this.fu()
	}, this.fu = function() {
		bA.bB - 12e4 >= yt[this.yg] && (yt[this.yg] = bA.bB, this.yv = [0, 0], c8.c9.yw(0, this.yg))
	}, this.resize = function() {
		if (this.ai) {
			var a6;
			for (this.ak = this.yx(av.aw.ax() ? .85 : .66, .75, ay.ak, ay.al), this.al = Math.floor(this.ak / .75), a6 = 1; 0 <= a6; a6--) this.y1[a6] && (this.y1[a6][4] = q.r.ft(1, this.y1[a6][5] * this.al / 10));
			ys = q.r.ft(1, .1 * this.al)
		}
	}, this.yx = function(aG, w2, ak, al) {
		return ak < w2 * al ? Math.floor(aG * ak) : Math.floor(w2 * aG * al)
	}, this.yy = function(aQ, yz, z0, v0, z1, z2, z3) {
		this.position[aQ] = z3;
		var yb, size = yz.length,
			fw = q.r.ft(1, z1 * this.al / 10),
			bZ = (this.z4(yz, fw, z2 * this.ak), [
				[], size, -1, v0, fw, z1, 10 * z3
			]);
		for (let a6 = 0; a6 < size; a6++) yb = {
			name: yz[a6].name,
			value: yz[a6].wE / z0,
			colorIndex: yz[a6].colorIndex
		}, bZ[0].push(yb);
		this.y1[aQ] = bZ, this.z5(aQ);
		let name = this.y1[aQ][0][0].name;
		1 === aQ && (name = "[" + name + "]"), 0 === z3 && wh.fs(aQ, name);
		var data = [];
		for (let a6 = 0; a6 < bZ[0].length; a6++) data.push([a6 + 1 + ".", bZ[0][a6].name, bZ[0][a6].value.toFixed(1)]);
		g.g2(10, g.dM, new ku(aQ ? "Clan Ranking" : "1v1 Player Ranking", data))
	}, this.z5 = function(a6) {
		this.y1[a6][0].sort(function(hC, iV) {
			return iV.value - hC.value
		})
	}, this.aX = function(aQ, name, z6, z7) {
		if (this.y1 && this.y1[aQ]) {
			var a6, qd = !1;
			if (0 === aQ) {
				for (a6 = 0; a6 < this.y1[aQ][0].length; a6++)
					if (name === this.y1[aQ][0][a6].name && z6 > .99 * this.y1[aQ][0][a6].value && z6 < 1.01 * this.y1[aQ][0][a6].value) {
						this.y1[aQ][0][a6].value = z7, qd = !0;
						break
					} qd || this.y1[aQ][0].push({
					name: name,
					value: z7
				})
			} else {
				for (a6 = 0; a6 < this.y1[aQ][0].length; a6++)
					if (name === this.y1[aQ][0][a6].name) {
						this.y1[aQ][0][a6].value += 32 < this.y1[aQ][0][a6].value ? (64 - this.y1[aQ][0][a6].value) / 256 : .25, this.y1[aQ][0][a6].value *= 1 / (383 / 384), qd = !0;
						break
					} for (a6 = 0; a6 < this.y1[aQ][0].length; a6++) this.y1[aQ][0][a6].value *= 383 / 384;
				qd || this.y1[aQ][0].push({
					name: name,
					value: .25
				})
			}
			this.z5(aQ)
		}
	}, this.z4 = function(yz, fw, fy) {
		for (var a6 = yz.length - 1; 0 <= a6; a6--)
			for (; 3 < yz[a6].name.length && fx.measureText(yz[a6].name, fw) > fy;) yz[a6].name = yz[a6].name.substring(0, yz[a6].name.length - 4) + "..."
	}, this.bF = function(fN, fQ) {
		return !!this.ai && (fN -= (ay.ak - this.ak) / 2, fQ -= (ay.al - this.al) / 2, fN < 0 || fN > this.ak || fQ < 0 || fQ > this.al ? (this.ai = !1, bA.bE = !0) : (fQ = fQ < .3 * this.al ? 1 : fQ < .85 * this.al ? (fQ = (0 === this.yg ?
			14.1 : 3) * (fQ - .3 * this.al) / (.55 * this.al), Math.floor(1 + fQ * fQ)) : 0 === this.yg ? 200 : 10, fN < this.ak / 2 ? this.yv[this.yg] = -fQ : this.yv[this.yg] = fQ, yt[this.yg] + 50 > bA.bB || (yt[this.yg] = bA.bB,
			c8.c9.yw(0, this.yg)), !0))
	}, this.bH = function() {
		var bK, hP, gx, gy, z8, z9, xh, xi;
		this.ai && (bK = (ay.ak - this.ak) / 2, hP = (ay.al - this.al) / 2, gx = this.yh * this.ak, gy = this.yl * gx, z8 = this.yi * this.ak, z9 = this.ym * z8, xh = this.yj * this.ak, xi = Math.floor(.25 * this.al), bI.setTransform(1, 0, 0, 1,
				bK, hP), bI.fillStyle = 0 === this.yg ? i.wR : i.zA, bI.fillRect(0, 0, this.ak, xi), bI.fillStyle = i.oQ, bI.fillRect(0, xi, this.ak, this.al - xi), bI.fillStyle = i.bM, bI.font = ys, q.r.textBaseline(bI, 1), q.r.textAlign(bI,
				1), bI.fillText(yr[this.yg], Math.floor(this.ak / 2), Math.floor(.135 * this.al)), bI.font = q.r.ft(1, .025 * this.al), bI.fillText(yr[this.yg + 2], Math.floor(this.ak / 2), Math.floor(.2125 * this.al)), bI.beginPath(), bI
			.moveTo(this.ak / 4, 0), bI.lineTo(this.ak / 2 - gx, 0), bI.lineTo(this.ak / 2, -gy), bI.lineTo(this.ak / 2 + gx, 0), bI.lineTo(this.ak - z8, 0), bI.lineTo(this.ak + z9, -z9), bI.lineTo(this.ak, z8), bI.lineTo(this.ak, this.al /
				2 - gx), bI.lineTo(this.ak + gy, this.al / 2), bI.lineTo(this.ak, this.al / 2 + gx), bI.lineTo(this.ak, this.al - z8), bI.lineTo(this.ak + z9, this.al + z9), bI.lineTo(this.ak - z8, this.al), bI.lineTo(this.ak / 2 + gx, this
				.al), bI.lineTo(this.ak / 2, this.al + gy), bI.lineTo(this.ak / 2 - gx, this.al), bI.lineTo(z8, this.al), bI.lineTo(-z9, this.al + z9), bI.lineTo(0, this.al - z8), bI.lineTo(0, this.al / 2 + gx), bI.lineTo(-gy, this.al / 2),
			bI.lineTo(0, this.al / 2 - gx), bI.lineTo(0, z8), bI.lineTo(-z9, -z9), bI.lineTo(z8, 0), bI.lineTo(this.ak / 4, 0), bI.lineTo(this.ak / 4, xh), bI.lineTo(xh, xh), bI.lineTo(xh, this.al - xh), bI.lineTo(this.ak - xh, this.al - xh),
			bI.lineTo(this.ak - xh, xh), bI.lineTo(this.ak / 4, xh), bI.fill(), this.y1[this.yg] && this.zB(xi), this.zC(xi), bI.setTransform(1, 0, 0, 1, 0, 0))
	}, this.zC = function(xi) {
		var gx = b1(2, Math.floor(.06 * this.ak)),
			am = (gx -= gx % 2, b1(2, Math.floor(.01 * this.ak))),
			xi = (am -= am % 2, Math.floor(.82 * xi));
		bI.fillRect(gx, xi, gx, am), bI.fillRect(this.ak - gx - gx, xi, gx, am), bI.fillRect(Math.floor(this.ak - gx - gx + (gx - am) / 2), Math.floor(xi - (gx - am) / 2), am, gx)
	}, this.zB = function(xi) {
		var a8;
		bI.font = this.y1[this.yg][4];
		for (var a6 = this.y1[this.yg][1] - 1; 0 <= a6; a6--) q.r.textAlign(bI, 2), a8 = Math.floor(this.yq * this.al + xi + a6 * ((1 - 2 * this.yq) * this.al - xi) / 9), bI.fillText(this.y1[this.yg][0][a6].value.toFixed(this.y1[this.yg][3]),
			Math.floor(this.yp * this.ak), a8), bI.fillText(a6 + 1 + this.y1[this.yg][6] + ".", Math.floor(this.yn * this.ak), a8), q.r.textAlign(bI, 0), bI.fillText(this.y1[this.yg][0][a6].name, Math.floor(this.yo * this.ak), a8)
	}
}

function zD() {
	this.d4 = new zE, this.dM = 0;
	let map = new Map;
	this.g2 = function(aQ, cC = this.dM, zF = void 0) {
		bA.bE = !0, 0 === aQ && (0 === cM.cN() ? aQ = 5 : av.aw.setState(13)), this.s(), this.dM = aQ;
		let mb = map.get(aQ);
		if (!mb || 4 === aQ || 7 === aQ || 8 === aQ || 9 === aQ || 10 === aQ || 11 === aQ || 13 === aQ) {
			if (0 === aQ) return void map.clear();
			1 === aQ ? mb = new tu : 2 === aQ ? mb = new zG : 3 === aQ ? mb = new hZ : 4 === aQ || 9 === aQ || 10 === aQ || 11 === aQ || 13 === aQ ? mb = zF : 5 === aQ ? mb = new wK : 6 === aQ ? mb = new zH : 7 === aQ ? mb = new re : 8 === aQ ?
				mb = zF : 12 === aQ ? mb = new zI : 14 === aQ && (mb = new zJ), mb.cC = cC, map.set(aQ, mb)
		}
		mb.show(zF)
	}, this.h = function() {
		this.ai() && this.g2(map.get(this.dM).cC)
	}, this.zK = function(aQ) {
		this.ai() && (this.s(), bA.bE = !0, this.dM = aQ, map.get(aQ).show())
	}, this.s = function() {
		this.ai() && map.get(this.dM).s()
	}, this.u5 = function() {
		this.ai() && (map.get(this.dM).s(), map.clear(), this.dM = 0, av.aw.setState(13))
	}, this.bH = function() {
		var mb;
		this.ai() && (mb = map.get(this.dM)).bH && mb.bH()
	}, this.resize = function() {
		if (!this.ai()) return !1;
		map.get(this.dM).resize()
	}, this.bF = function(a7, a8) {
		var mb;
		this.ai() && (mb = map.get(this.dM)).bF && mb.bF(a7, a8)
	}, this.fU = function(a7, a8) {
		var mb;
		this.ai() && (mb = map.get(this.dM)).fU && mb.fU(a7, a8)
	}, this.kF = function() {
		var mb;
		this.ai() && (mb = map.get(this.dM)).kF && mb.kF()
	}, this.fS = function(fb, fc, deltaY) {
		var mb;
		this.ai() && (mb = map.get(this.dM)).fS && mb.fS(fb, fc, deltaY)
	}, this.t = function(code) {
		var mb;
		return !!this.ai() && ((mb = map.get(this.dM)).t && mb.t(code), !0)
	}, this.bD = function() {
		var mb;
		this.ai() && (mb = map.get(this.dM)) && mb.bD && mb.bD()
	}, this.ai = function() {
		return 0 < this.dM
	}, this.dN = function() {
		return map.get(this.dM)
	}, this.rw = function(aQ) {
		return map.get(aQ)
	}
}

function zL() {
	var fr, zM;
	this.m = function() {
		fr = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var a6, hC, bv = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			zN = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (zM =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), a6 = fr.length - 1; 0 <= a6; a6--)
			for (hC = bv.length - 1; 0 <= hC; hC--) fr[a6] = fr[a6].replace(bv[hC], zN[hC]);
		if (settings.realisticNames) fr = realisticNames;
	}, this.bd = function() {
		var a6;
		if (iB.cP && iB.iC.mz)
			for (a6 = df.dg; a6 < df.eM; a6++) dV.hY[a6] = dV.ih[a6] = iB.iC.mz[a6 % df.iG];
		else(9 === df.eo ? function() {
			var a6, kQ = bx.random(),
				aF = fr.length,
				mb = df.dg + iH.iI;
			for (a6 = mb - 1; a6 >= df.dg; a6--) dV.hY[a6] = dV.ih[a6] = fr[(a6 + kQ) % aF];
			for (aF = zM.length, a6 = mb; a6 < df.eM; a6++) dV.hY[a6] = dV.ih[a6] = zM[a6 % aF]
		} : df.iP ? function() {
			var a6, kQ = bx.random();
			for (a6 = df.dg; a6 < df.eM; a6++) dV.hY[a6] = dV.ih[a6] = fr[(a6 + kQ) % df.eM]
		} : function() {
			var a6, aF = fr.length,
				kQ = bx.random();
			for (a6 = df.dg; a6 < df.eM; a6++) dV.hY[a6] = dV.ih[a6] = fr[(a6 + kQ) % aF]
		})()
	}
}

function zS() {
	this.b5 = function() {
		var zV, zW;
		return !(dR < 3 || dV.ev[f4[0]] >= df.mN >> 1) && (df.iA ? (zV = iv.ma(), zW = iv.mc(ep.zX()), !(zV <= 2 * zW)) : function() {
			var zV = iv.ma();
			if (2 * dV.l5[f4[0]] >= zV) return !1;
			return !0
		}())
	}
}

function zY() {
	function zd(map, a7, a8, ak, al) {
		map >= y.n8 || (y.z === map && (bI.fillStyle = i.zc, bI.fillRect(a7, a8, ak, al), bI.fillStyle = i.bM), bI.strokeRect(a7, a8, ak, al), bI.fillText(y.iC.nB[map].name, Math.floor(a7 + .5 * ak), Math.floor(a8 + .55 * al)))
	}
	this.ai = !1, this.zZ = [0, 0, 0, 0], this.show = function() {
		this.ai = !0, this.resize(), bA.bE = !0
	}, this.resize = function() {
		var r4 = aR(y.n8 + y.n8 % 2, 2),
			r4 = ay.al - r4 * b2.gap;
		av.aw.ax() ? this.zZ[2] = Math.floor(.75 * ay.min) : this.zZ[2] = Math.floor(.5 * ay.min), this.zZ[3] = Math.floor(1.25 * this.zZ[2]), this.zZ[3] > r4 && (this.zZ[3] = r4, this.zZ[2] = Math.floor(r4 / 1.2)), this.zZ[0] = Math.floor((ay
			.ak - this.zZ[2]) / 2), this.zZ[1] = Math.floor((ay.al - this.zZ[3]) / 2)
	}, this.fU = function(a7, a8) {
		return !(a7 < this.zZ[0] || a8 < this.zZ[1] || a7 > this.zZ[0] + this.zZ[2] || a8 > this.zZ[1] + this.zZ[3])
	}, this.bF = function(a7, a8) {
		var am, r4 = aR(y.n8 + y.n8 % 2, 2);
		return bA.bE = !0, a7 < this.zZ[0] || a8 < this.zZ[1] || a7 > this.zZ[0] + this.zZ[2] || a8 > this.zZ[1] + this.zZ[3] ? !(this.ai = !1) : (am = Math.floor(.17 * this.zZ[3]), a8 < this.zZ[1] + am ? a7 > this.zZ[0] + this.zZ[2] - am && (
			this.ai = !1) : (a8 = (a8 = Math.floor(r4 * (a8 - this.zZ[1] - am - .00576 * ay.az) / (this.zZ[3] - am - .01152 * ay.az))) < 0 ? 0 : r4 - 1 < a8 ? r4 - 1 : a8, a7 > this.zZ[0] + this.zZ[2] / 2 && (a8 += r4), a8 >= y.n8 || y
			.bd(a8, Math.floor(16384 * Math.random()))), !0)
	}, this.bH = function() {
		var a6, hP, am = Math.floor(.17 * this.zZ[3]),
			r4 = aR(y.n8 + y.n8 % 2, 2),
			gap = .6 * .01152 * ay.az,
			vi = (this.zZ[3] - am - (r4 + 1) * gap) / r4,
			gx = Math.floor((this.zZ[2] - 3 * gap) / 2);
		for (bI.lineWidth = b2.zb, q.r.textAlign(bI, 1), q.r.textBaseline(bI, 1), bI.fillStyle = i.bL, bI.fillRect(this.zZ[0], this.zZ[1] + am, this.zZ[2], this.zZ[3] - am), bI.fillStyle = i.zc, bI.fillRect(this.zZ[0], this.zZ[1], this.zZ[2],
			am), bI.strokeStyle = i.bM, bI.strokeRect(this.zZ[0], this.zZ[1], this.zZ[2], this.zZ[3]), bI.fillStyle = i.bM, bI.fillRect(this.zZ[0], this.zZ[1] + am, this.zZ[2], 2), bI.font = q.r.ft(1, .48 * am), bI.fillText("Maps", Math.floor(
				this.zZ[0] + this.zZ[2] / 2), Math.floor(this.zZ[1] + .55 * am)), bI.font = q.r.ft(1, .48 * vi), a6 = r4 - 1; 0 <= a6; a6--) hP = Math.floor(this.zZ[1] + am + gap + a6 * (vi + gap)), zd(a6, this.zZ[0] + gap, hP, gx, vi), zd(a6 +
			r4, this.zZ[0] + gx + 2 * gap, hP, gx, vi);
		dq.xn(Math.floor(this.zZ[0] + this.zZ[2] - .7 * am), Math.floor(this.zZ[1] + .3 * am), Math.floor(.4 * am)), bI.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function lA() {
	this.aX = function(aQ, value) {
		aZ.af.data[aQ].value !== value && (aZ.af.aY(aQ, value), 0 === aQ ? (g.u5(), e.m(), g.g2(2)) : 1 === aQ ? ay.ze(1) : 2 === aQ ? ay.ze(0) : 5 === aQ && (q.r.cn(), ay.ze(0)))
	}, this.zf = function() {
		for (var data = aZ.af.data, a6 = 0; a6 < 100; a6++) data[a6] && aZ.af.aY(a6, data[a6].ae);
		q.r.cn(), ay.ze(1), e.m()
	}, this.zg = function() {
		var data = aZ.af.data;
		for (let a6 = 0; a6 < data.length; a6++) data[a6] && aZ.af.aX(a6, data[a6].ae)
	}
}

function zh() {
	var player, hO, rS, sR, bK, hP, hQ, hR, aQ, zi, id;

	function zp() {
		var vI;
		if (dZ.eJ(rS)) vI = df.eM;
		else {
			if ((vI = dZ.eQ(rS)) === player) return void zr(!0);
			if (!eR(player, vI)) return function(vI) {
				var max = dV.ev[vI] * df.mW - dV.l5[vI];
				max <= 0 || (hO -= max = max < hO ? max : hO, player === df.du && (f6.j4(max, 0, vI), j3.mV[16] += max), vI === df.du && (f6.zv(max, player), j3.mV[10] += max), dV.l5[vI] += max, fZ.j5(vI, max))
			}(vI), void zr(!0)
		}
		player === df.du && (j3.mV[13] += hO), gi.hD(player, id), hU.zt(player, zi), dV.qk[player].push(sR), hU.vH(player, hO, vI), qR.hG(player, !0)
	}

	function zr(zw) {
		gi.hD(player, id), hU.zt(player, zi), zw && (dV.l5[player] += hO)
	}

	function zl() {
		dZ.zx(rS, player) && dZ.zy(rS)
	}

	function zk(a6, a02, zj, hH, ag) {
		if (aQ = a6, id = a02, player = zj, bK = dZ.cy(hH), hP = dZ.bG(hH), hQ = dZ.cy(ag), hR = dZ.bG(ag), sR = rS = dZ.o0(bK, hP), -1 !== (zi = hU.hW(player, id))) return hO = hU.hV(player, zi), 1;
		zl(), gi.hD(player, id)
	}
	this.bD = function(a6, id, zj, hH, ag) {
		zk(a6, id, zj, hH, ag) && (zl(), function() {
			var a00 = aR(hO, 128);
			hO -= a00 = a00 < 1 ? 1 : a00, player === df.du && (j3.mV[15] += a00);
			if (hO <= df.vK) return player === df.du && (j3.mV[15] += hO), void zr(!1);
			return hU.a01(player, zi, hO), 1
		}()) && (a6 = dZ.o0(bK, hP), rS = Math.abs(hQ - bK) >= Math.abs(hR - hP) ? a6 + a03[bK < hQ ? 1 : 3] : a6 + a03[hP < hR ? 2 : 0], bK = dZ.cy(rS), hP = dZ.bG(rS), gi.h9(aQ, rS), ! function() {
			if (dZ.e8(rS)) return;
			return 1
		}() ? zp() : dZ.eD(rS) && dZ.zz(rS, player))
	}, this.hF = function(zj, hH) {
		player = zj, rS = dZ.o0(dZ.cy(hH), dZ.bG(hH)), zl()
	}
}

function zG() {
	let k, rf, ri;
	this.show = function() {
		k.show(), this.resize()
	}, this.s = function() {
		k.s()
	}, this.resize = function() {
		k.resize(), rf.resize()
	}, this.t = function(u) {
		2 === u && k.v[0].w()
	}, k = new n("⚙️ " + e.f[81], [new d("💾 " + e.f[97], function() {
		g.g2(1)
	}, i.m0), new d("🔄 " + e.f[98], function() {
		g.u5(), aZ.d6.zf(), g.g2(2)
	})]);
	{
		let rq;
		ri = [], (rq = new jS).jV(e.f[99]), rq.jW(e.f[100]), ri.push(rq), (rq = new jS).jV(aZ.af.data[0].title), rq.jZ(new s5(aZ.af.data[0])), ri.push(rq), (rq = new jS).jV(aZ.af.data[10].title), rq.jZ(new s5(aZ.af.data[10])), ri.push(rq), (rq =
				new jS).jV(aZ.af.data[1].title), rq.jZ(new s5(aZ.af.data[1])), ri.push(rq), (rq = new jS).jV(aZ.af.data[9].title), rq.jZ(new s5(aZ.af.data[9])), ri.push(rq), (rq = new jS).jV(aZ.af.data[11].title), rq.jZ(new s5(aZ.af.data[11])), ri
			.push(rq), (rq = new jS).jV(aZ.af.data[2].title), rq.jc(new sC(aZ.af.data[2])), ri.push(rq), (rq = new jS).jV(aZ.af.data[7].title), rq.jc(new sC(aZ.af.data[7])), ri.push(rq), (rq = new jS).jV(aZ.af.data[8].title), rq.jc(new sC(aZ.af.data[
				8])), ri.push(rq), (rq = new jS).jV(aZ.af.data[5].title), rq.jc(new rs(aZ.af.data[5])), ri.push(rq)
	}
	rf = new rg(k.p, ri)
}

function a04() {
	var gap, a05, a7 = [0, 0, 0, 0, 0],
		a8 = [0, 0, 0, 0, 0],
		fd = [1, 1, 1, 1, 1],
		aL = [!0, !0, !1, !1, !1],
		u = (this.jP = [!0, !0, !1, !1, !1], null);
	this.oy = function(km, a06) {
		u = km, aL = a06, a05 = [uC.uD, uC.uE, uC.a07, uC.uF, uC.a08], this.m()
	}, this.m = function() {
		if (bN.fv()) {
			var a6, gx = Math.floor((av.aw.ax() ? .261 : .195) * ay.az),
				gy = Math.floor(.9 * gx),
				am = Math.floor(.17 * gy);
			if (gap = av.aw.ax() ? 2 * b2.gap : b2.gap, fd[0] = gx / u[0].width, fd[1] = gy / u[1].width, fd[2] = am / u[2].height, fd[3] = am / u[3].height, fd[4] = am / u[4].height, fd[3] *= 1.07, a7[0] = gap, a7[1] = gap, a7[2] = gap, a7[3] =
				gap, a7[4] = Math.floor(2 * gap + fd[3] * u[3].width), a8[0] = gap, a8[1] = a8[0] + gap + fd[0] * u[0].height, a8[2] = a8[1] + gap + fd[1] * u[1].height, a8[3] = a8[2] + gap + fd[2] * u[2].height, a8[4] = a8[3], !aL[0])
				for (a6 = 0; a6 < 5; a6++) a8[a6] -= fd[0] * u[0].height + gap;
			if (!aL[1])
				for (a6 = 2; a6 < 5; a6++) a8[a6] -= fd[1] * u[1].height + gap
		}
	}, this.ai = function() {
		return !(7 === cM.cN() && av.aw.ax())
	}, this.bF = function(fN, fQ, a09) {
		if (u && this.ai())
			for (var a6 = aL.length - 1; 0 <= a6; a6--)
				if (aL[a6] && this.jP[a6] && a7[a6] < fN && a8[a6] < fQ && fN < a7[a6] + fd[a6] * u[a6].width && fQ < a8[a6] + fd[a6] * u[a6].height) return g.g2(9, g.dM, new a("You are leaving Territorial.io.", q.r.a0A(a05[a6]))), !0;
		return !1
	}, this.bH = function() {
		if (u && this.ai()) {
			var a6;
			for (bI.imageSmoothingEnabled = !0, a6 = 0; a6 < 5; a6++) aL[a6] && this.jP[a6] && (bI.setTransform(fd[a6], 0, 0, fd[a6], a7[a6], a8[a6]), bI.drawImage(u[a6], 0, 0));
			bI.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function a0B() {
	this.size = 501, this.a0C = new Uint32Array(this.size), this.l4 = new Uint32Array(this.size), this.l3 = new Uint16Array(this.size), this.u6 = 0, this.a0D = 1, this.u = 0, this.max = [0, 0, 0], this.mV = 0, this.a0E = ["Avg. Attack Strength",
		"Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs",
		"Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses"
	], this.m = function() {
		this.u6 = 0, this.a0D = 1, this.u = 0, this.a0F(), this.a0G()
	}, this.vQ = function(player, oD) {
		player === df.du && (this.mV[0] += oD, this.mV[1]++, this.mV[12] += j1.j2[1], this.mV[13] += j1.j2[0])
	}, this.j4 = function(player, it) {
		donationsTracker.logDonation(player, it, j1.j2[0]);
		player === df.du && (f6.j4(j1.j2[0], j1.j2[1], it), this.mV[12] += j1.j2[1], this.mV[16] += j1.j2[0]), it === df.du && (f6.zv(j1.j2[0], player), this.mV[10] += j1.j2[0])
	}, this.bD = function() {
		0 < this.u-- || this.a0H()
	}, this.a0H = function() {
		0 !== dV.eg[df.du] && (this.a0C[this.u6] = dV.ev[df.du], this.l4[this.u6] = dV.l5[df.du], this.l3[this.u6] = iv.l6(df.du), this.a0I(this.u6), this.u6++, this.u6 === this.size && this.a0J(), this.u = this.a0D - 1, gq.fu())
	}, this.a0J = function() {
		this.a0F(), this.a0I(0), this.u6 = 1 + aR(this.size, 2);
		for (var a6 = 1; a6 < this.u6; a6++) this.a0C[a6] = this.a0C[2 * a6], this.l4[a6] = this.l4[2 * a6], this.l3[a6] = this.l3[2 * a6], this.a0I(a6);
		this.a0D *= 2
	}, this.a0F = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.a0G = function() {
		this.mV = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.a0I = function(a6) {
		this.max[0] = this.a0C[a6] > this.max[0] ? this.a0C[a6] : this.max[0], this.max[1] = this.l4[a6] > this.max[1] ? this.l4[a6] : this.max[1], this.max[2] = this.l3[a6] > this.max[2] ? this.l3[a6] : this.max[2]
	}
}

function a0K() {
	this.eA = new a0L, this.ce = new a0M, this.px = new vE, this.te = new pm, this.a0N = new ir
}

function a0O() {
	var aq, bJ, a7, a8, y3, a0P, gap, a0Q, fontSize, a0R, a05, mV, a0S, a0T, a0U, a0V, a0W, a0X;

	function a0b() {
		bJ.clearRect(0, 0, gm.ak, gm.al), bJ.fillStyle = i.bL, bJ.fillRect(0, 0, gm.ak, gm.al), bJ.fillStyle = i.a0d, e4 = 0 < a0U ? a0U : Math.sqrt(mV[4] / 1e4), bJ.fillRect(0, gm.al - y3 - 1, Math.floor(e4 * gm.ak), y3), bJ.fillStyle = i.bM, bJ
			.fillRect(0, 0, gm.ak, 1), bJ.fillRect(0, 0, 1, gm.al), bJ.fillRect(gm.ak - 1, 0, 1, gm.al), bJ.fillRect(0, gm.al - 1, gm.ak, 1), bJ.fillRect(0, gm.al - y3 - 1, gm.ak, 1);
		for (var e4, a0e, eu = 0, a6 = 0; a6 < a05.length; a6++) a0S[a6] ? (q.r.textAlign(bJ, 0), a0e = Math.floor((a0P - y3 + 2 * a0Q) * (a6 - eu + 1) / (a05.length + 1) - .7 * a0Q), bJ.fillText(a05[a6], gap, a0e), q.r.textAlign(bJ, 2), 5 === a6 &&
			0 !== dV.eg[df.du] && dV.l5[df.du] >= iv.mQ(df.du) ? (bJ.fillStyle = i.a0f, bJ.fillText(a0Z(a6), gm.ak - gap, a0e), bJ.fillStyle = i.bM) : bJ.fillText(a0Z(a6), gm.ak - gap, a0e)) : eu++
	}

	function a0Z(a6) {
		return a6 < 3 ? mV[a6].toString() : 3 === a6 || 4 === a6 || 5 === a6 ? q.cg.oS(mV[a6] / 100, 2) : a6 < 7 ? q.cg.hX(mV[a6]) : a6 === 7 ? gm.mJ(mV[7]) : a6 === 8 ? utils.getMaxTroops(dV.ev, df.du) : utils.getDensity(df.du)
	}

	function a0Y() {
		dV.ev[df.du] !== mV[6] && (mV[6] = dV.ev[df.du], a0R++)
	}
	this.m = function() {
		a0U = a0V = 0, (a05 = new Array(8))[0] = e.f[70], a05[1] = df.iP ? e.f[71] : e.f[72], a05[2] = e.f[73], a05[3] = e.f[74], a05[4] = e.f[75], a05[5] = e.f[76], a05[6] = e.f[77], a05[7] = e.f[78],
			a05.push("Max Troops", "Density"), // add a05
			a0X = df.mN - aR(df.mN, 100), (mV = new Array(a05.length))[0] = df.iP ? 0 : df.dg, mV[1] = df.iP ? dR : df.nX, mV[2] = df.qT, mV[3] = 0, mV[4] = aR(1e4 * dV.ev[0], df.mN), mV[5] = 700, mV[6] = 0, a0Y(), mV[7] = 0, a0T = a0Z(6), a0S =
			new Array(a05.length);
		for (var a6 = a05.length - 1; 0 <= a6; a6--) a0S[a6] = !0;
		a0W = 0, a0W = df.iP ? (a0S[0] = !1, a0S[2] = !1, a0S[3] = !1, 3) : (a0S[3] = !1, 1), a0R = 0, this.resize()
	}, this.resize = function() {
		this.ak = Math.floor((av.aw.ax() ? .1646 : .126) * 1.25 * ay.az), this.al = Math.floor(1.18 * this.ak), y3 = Math.floor(.04 * this.ak), gap = Math.floor(.035 * this.ak), a0Q = .04 * this.ak, a0P = this.al, this.al -= Math.floor(a0W * (
			this.al - 2 * y3) / a05.length), fontSize = Math.floor(.7 * (a0P - y3) / a05.length), fontSize = q.r.ft(1, fontSize), (aq = document.createElement("canvas")).width = this.ak, aq.height = this.al, (bJ = aq.getContext("2d", {
			alpha: !0
		})).font = fontSize, q.r.textBaseline(bJ, 1), bJ.lineWidth = 1, this.a0a(), this.fG(), gn.fG(), a0b()
	}, this.fG = function() {
		a7 = ay.ak - this.ak - b2.gap
	}, this.qa = function() {
		a8 = b2.gap
	}, this.a0a = function() {
		a8 = b2.gap + (gn.ye() && 0 !== dV.eg[df.du] && !df.e7 ? gn.al + b2.gap : 0)
	}, this.oK = function(a0c) {
		(a0c || 100 <= a0R) && (a0R = 0, a0b())
	}, this.a0g = function() {
		return mV[7]
	}, this.mJ = function(value) {
		var mb = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * mb) / 1e3);
		return value < 10 ? mb + ":0" + value : mb + ":" + value
	}, this.bD = function() {
		var l3, per;
		a0S[0] && df.a0o - df.qT !== mV[0] && (mV[0] = df.a0o - df.qT, a0R++), dR - mV[0] !== mV[1] && (mV[1] = dR - mV[0], a0R++), this.a0j(), (l3 = iv.l6(df.du)) !== mV[5] && (mV[5] = l3, a0R++), a0Y(), mV[7] += bA.pg, l3 = a0Z(7), a0T !==
			l3 && (a0T = l3, a0R += 100), l3 = df.iA ? ep.eq() : dV.ev[f4[0]], per = aR(1e4 * l3, df.mN), mV[3] = l3, mV[4] !== per && (a0R++, mV[4] = per), 8 === df.eo && function() {
				if (0 === dV.eg[0]) ek.xx.a0r(1);
				else {
					if (0 !== dV.eg[1]) return;
					ek.xx.a0r(0)
				}
				return 1
			}() || mV[3] < a0X || mV[3] !== df.mN && ! function() {
				for (var a6 = dR - 1; 0 <= a6; a6--)
					if (0 < dV.qk[dT[a6]].length) return;
				return 1
			}() || ek.xx.a0r(-1)
	}, this.a0j = function() {
		a0S[2] && df.qT !== mV[2] && (mV[2] = df.qT, a0R++)
	}, this.td = function(a6) {
		var gS, a0t, eu;
		return 2 !== df.gP && (a6 === df.tf ? (a0U = 0, a0b(), !1) : (-1 !== a6 || 0 !== a0V) && (a0t = a0U, a0U = df.dp ? a6 / df.tf : (eu = performance.now(), 0 <= a6 && (gS = eu - 392 * a6, a0V = 0 === a6 || gS < a0V ? gS : a0V), 1 < (a0U = (
			eu - a0V) / (392 * df.tf)) ? 1 : a0U), a0b(), a0U !== a0t))
	}, this.bH = function() {
		bI.drawImage(aq, a7, a8)
	}
}

function a0u() {
	for (var a7, a8, a6 = a0v - 1; 0 <= a6; a6--) a7 = aR(a0w[a6], 4) % y.aB, a8 = aR(a0w[a6], 4 * y.aB), dV.nu[a0x] = dV.nu[a0x] > a7 ? a7 : dV.nu[a0x], dV.nv[a0x] = dV.nv[a0x] > a8 ? a8 : dV.nv[a0x], dV.nw[a0x] = dV.nw[a0x] < a7 ? a7 : dV.nw[a0x],
		dV.nx[a0x] = dV.nx[a0x] < a8 ? a8 : dV.nx[a0x]
}

function a0y() {
	var ia, dY, a6, aF = dV.qk[a0x].length;
	loop: for (a6 = aF - 1; 0 <= a6; a6--) {
		for (ia = 3; 0 <= ia; ia--)
			if (dY = dV.qk[a0x][a6] + a03[ia], dZ.eJ(dY) || dZ.a0z(dY) && dZ.eQ(dY) !== a0x) {
				dZ.a10(dV.qk[a0x][a6], a0x);
				continue loop
			} dV.qk[a0x][a6] = dV.qk[a0x][aF - 1], dV.qk[a0x].pop(), aF--
	}
}

function a11() {
	var ia, dY, a12, a13, aF = dV.ql[a0x].length;
	loop: for (var a6 = aF - 1; 0 <= a6; a6--) {
		for (a12 = a13 = !1, ia = 3; 0 <= ia; ia--) {
			if (dY = dV.ql[a0x][a6] + a03[ia], dZ.a14(dY, a0x)) continue loop;
			a12 = a12 || dZ.eD(dY), a13 = a13 || dZ.sX(dY)
		}
		a12 ? dV.nb[a0x].push(dV.ql[a0x][a6]) : a13 ? dV.qm[a0x].push(dV.ql[a0x][a6]) : dZ.a15(dV.ql[a0x][a6], a0x), dV.ql[a0x][a6] = dV.ql[a0x][aF - 1], dV.ql[a0x].pop(), aF--
	}
}

function a16() {
	dV.ev[a17] -= a0v
}

function a18(border) {
	for (var aF = border.length, a6 = aF - 1; 0 <= a6; a6--) dZ.qp(a17, border[a6]) || (border[a6] = border[aF - 1], border.pop(), aF--)
}

function a19(border) {
	for (var aF = border.length, a6 = aF - 1; 0 <= a6; a6--) !dZ.qp(a17, border[a6]) && dZ.e8(border[a6]) && (border[a6] = border[aF - 1], border.pop(), aF--)
}

function a1A(border) {
	for (var ia, dY, aF = border.length, a6 = aF - 1; 0 <= a6; a6--)
		for (ia = 3; 0 <= ia; ia--)
			if (dY = border[a6] + a03[ia], dZ.a14(dY, a17)) {
				dV.ql[a17].push(border[a6]), border[a6] = border[aF - 1], border.pop(), aF--;
				break
			}
}

function a1B() {
	for (var ia, dY, a6 = a0v - 1; 0 <= a6; a6--)
		for (ia = 3; 0 <= ia; ia--) dY = a0w[a6] + a03[ia], dZ.a1C(a17, dY) && dZ.a1D(dY) && (dV.ql[a17].push(dY), dZ.a1E(dY, a17))
}

function a1F() {
	var a7, a8;
	loop: for (; dV.nv[a17] < dV.nx[a17];) {
		for (a7 = dV.nw[a17]; a7 >= dV.nu[a17]; a7--)
			if (dZ.qp(a17, 4 * (dV.nv[a17] * y.aB + a7))) break loop;
		dV.nv[a17]++
	}
	loop: for (; dV.nv[a17] < dV.nx[a17];) {
		for (a7 = dV.nw[a17]; a7 >= dV.nu[a17]; a7--)
			if (dZ.qp(a17, 4 * (dV.nx[a17] * y.aB + a7))) break loop;
		dV.nx[a17]--
	}
	loop: for (; dV.nu[a17] < dV.nw[a17];) {
		for (a8 = dV.nx[a17]; a8 >= dV.nv[a17]; a8--)
			if (dZ.qp(a17, 4 * (a8 * y.aB + dV.nu[a17]))) break loop;
		dV.nu[a17]++
	}
	loop: for (; dV.nu[a17] < dV.nw[a17];) {
		for (a8 = dV.nx[a17]; a8 >= dV.nv[a17]; a8--)
			if (dZ.qp(a17, 4 * (a8 * y.aB + dV.nw[a17]))) break loop;
		dV.nw[a17]--
	}
}

function eR(player, vI) {
	return 0 === lV.i6[player] || lV.i6[player] !== lV.i6[vI]
}

function eN(player, vI) {
	for (var cY, a1G = hU.yV(player), a6 = 0; a6 < a1G; a6++)
		if (0 === hU.yZ(player, a6))
			if ((cY = hU.ya(player, a6)) === df.eM) {
				if (vI === df.eM) return !1;
				if (eK(vI)) return !0
			} else if (vI === df.eM) {
		if (eK(cY)) return !0
	} else if (eS(vI, cY)) return !0;
	return !1
}

function eK(player) {
	for (var a6, es, aF = dV.ql[player].length, ia = 3; 0 <= ia; ia--)
		for (es = a03[ia], a6 = 0; a6 < aF; a6++)
			if (dZ.eJ(dV.ql[player][a6] + es)) return !0;
	return !1
}

function eS(nl, nm) {
	var a6, eu, ia, es, dY, r4 = dV.ql[nl].length,
		r5 = dV.ql[nm].length;
	for (r5 < r4 && (eu = nl, nl = nm, nm = eu, eu = r4, r4 = r5, 0), ia = 3; 0 <= ia; ia--)
		for (es = a03[ia], a6 = 0; a6 < r4; a6++)
			if (dY = dV.ql[nl][a6] + es, dZ.a0z(dY) && dZ.eQ(dY) === nm) return !0;
	return !1
}

function a1H() {
	this.dL = function(size) {
		var jh = bf,
			bZ = [];
		for (let a6 = 0; a6 < size; a6++) bZ.push(String.fromCharCode(jh.dB(16)));
		return bZ.join("")
	}, this.a1I = function(bV) {
		return 20 < (bV = bV.trim()).length ? bV.substring(0, 20) : bV
	}
}

function a1J() {
	this.yw = function(cB, id) {
		bc.bd(24), bc.bh(1, 0), bc.bh(6, 6), bc.bh(1, id), bc.bh(16, Math.abs(4096 + a1K.position[id] + a1K.yv[id]) % 65536), c8.d4.send(cB, bc.bg)
	}, this.cA = function(cB, c3) {
		bc.bd(8), bc.bh(1, 0), bc.bh(6, 4), bc.bh(1, c3 ? 1 : 0), c8.d4.send(cB, bc.bg)
	}, this.a1L = function() {
		bc.bd(58), bc.bh(1, 0), bc.bh(6, 5), bc.bh(8, c8.d4.c6()), bc.bh(10, qM.a1M), bc.bh(9, qM.a1N), bc.bh(10, a1O), bc.bh(14, lh.li), c8.d4.send(c8.d4.bt, bc.bg)
	}, this.a1P = function(e2) {
		bc.bd(27), bc.bh(1, 1), bc.bh(4, 0), bc.bh(22, e2), c8.d4.send(c8.d4.bt, bc.bg)
	}, this.a1Q = function(oD, vI) {
		bc.bd(25), bc.bh(1, 1), bc.bh(4, 1), bc.bh(10, oD), bc.bh(10, vI), c8.d4.send(c8.d4.bt, bc.bg)
	}, this.a1R = function(oD, it) {
		bc.bd(24), bc.bh(1, 1), bc.bh(4, 2), bc.bh(10, oD), bc.bh(9, it), c8.d4.send(c8.d4.bt, bc.bg)
	}, this.a1S = function(oD, e2) {
		bc.bd(37), bc.bh(1, 1), bc.bh(4, 3), bc.bh(10, oD), bc.bh(22, e2), c8.d4.send(c8.d4.bt, bc.bg)
	}, this.a1T = function(vT, e2) {
		bc.bd(37), bc.bh(1, 1), bc.bh(4, 4), bc.bh(10, vT), bc.bh(22, e2), c8.d4.send(c8.d4.bt, bc.bg)
	}, this.a1U = function(vI) {
		bc.bd(15), bc.bh(1, 1), bc.bh(4, 5), bc.bh(10, vI), c8.d4.send(c8.d4.bt, bc.bg)
	}, this.a1V = function(aQ) {
		bc.bd(15), bc.bh(1, 1), bc.bh(4, 6), bc.bh(10, aQ), c8.d4.send(c8.d4.bt, bc.bg)
	}, this.a1W = function(va) {
		bc.bd(6), bc.bh(1, 1), bc.bh(4, 7), bc.bh(1, va), c8.d4.send(c8.d4.bt, bc.bg)
	}, this.a1X = function() {
		bc.bd(5), bc.bh(1, 1), bc.bh(4, 8), c8.d4.send(c8.d4.bt, bc.bg)
	}, this.a1Y = function(a1Z, a1a) {
		bc.bd(24), bc.bh(1, 1), bc.bh(4, 15), bc.bh(9, a1a), bc.bh(10, a1Z), c8.d4.send(c8.d4.bt, bc.bg)
	}, this.a1b = function(t4) {
		bc.bd(14), bc.bh(1, 1), bc.bh(4, 14), bc.bh(9, t4), c8.d4.send(c8.d4.bt, bc.bg)
	}, this.a1c = function(a1d, target) {
		var a6, aF = a1d.length;
		for (bc.bd(14 + 9 * aF), bc.bh(1, 1), bc.bh(4, 13), bc.bh(9, target), a6 = 0; a6 < aF; a6++) bc.bh(9, a1d[a6]);
		c8.d4.send(c8.d4.bt, bc.bg)
	}
}

function a1e() {
	var a1f, a1g, a1h, tY, a1i, aQ = 0,
		bB = bA.bB;

	function a1n() {
		! function() {
			if (!df.e7) return;
			if (df.iP) return;
			return a1i % 7 != 0 ? a1i++ : tY === df.tf ? (a1q(), gm.td(tY), df.tg.bD()) : (a1q(), a1i++, tY++, fZ.th(), fZ.oK(!0)), 1
		}() && (a1q(), pi())
	}

	function a1o() {
		aQ = 0, (df.e7 ? (bA.bE = gm.td(tY - (a1i % 7 == 0 ? 0 : 1) + a1i % 7 / 7) || bA.bE, pf) : dq.dr || !gj.a1m ? pf : (bA.bE = !0, pk))()
	}

	function a1q() {
		var a6, aF, a1r = hk.g8.a1s,
			jL = hk.g8.a1t,
			jN = hk.g8.a1u,
			jP = hk.g8.a1v,
			a1w = hk.g8.a1x,
			a1y = hk.g8.a1z;
		if (a1f >= a1y.length) f6.m2("Replay file smaller than expected."), ek.xx.a0r(-1);
		else if (a1y = a1y[a1f], a1w[a1f]) {
			for (aF = a1g + a1y, a6 = a1g; a6 < aF; a6++) e9.te.pn(a1r[a6], jL[a6], jN[a6], jP[a6]);
			a1g += a1y, a1f++
		} else ++a1h >= a1y && (a1f++, a1h = 0)
	}
	this.pe = 0, this.m = function() {
		a1i = tY = a1h = a1g = a1f = 0
	}, this.bD = function() {
		var ra;
		ay.bD(), gj.a1j() < 1.7 ? 0 === aQ ? bA.bB >= bB && (ra = bA.pg / gj.a1j(), bB += ra * Math.floor(1 + (bA.bB - bB) / ra), 2 === df.gP || dq.dr || !gj.a1m ? ph() : (a1n(), d0.pj()), aQ++) : a1o() : function() {
			var ra;
			if (bA.bB >= bB)
				if (2 === df.gP || dq.dr || !gj.a1m) ph(), bB = bA.bB;
				else {
					for (ra = bA.pg / gj.a1j(), 16 < (bA.bB - bB) / ra && (bB = bA.bB - 16 * ra); bA.bB >= bB && 2 !== df.gP;) bB += ra, a1n();
					d0.pj()
				} a1o()
		}(), pl(), bA.bE && (bA.bE = !1, gb())
	}, this.a20 = function() {
		a1f !== hk.g8.a1z.length && a1f + 1 !== hk.g8.a1z.length && f6.m2("Replay file larger than expected.")
	}
}

function a24() {
	a21 = 8, a22 = 0, a23 = new Uint16Array(a21)
}

function a25() {
	ix = df.iA ? new Uint8Array(df.eM) : null
}

function tW(player, hO) {
	var mP;
	df.iA && (ix[player] = 0), !hU.vO(player) || hO < 60 || (0 === dV.ql[player].length ? eE.lP.bD(player) || (na.tS(player - df.dg, 200), a26(player, hO, na.hO[player - df.dg], iv.mQ(player))) : 0 < dV.nb[player].length && bx.random() < bx.value(dV
		.nb[player].length > dV.ql[player].length ? 7 : 3) && eE.lP.bD(player) || (mP = iv.mQ(player), dV.l5[player] > mP && hO < dV.l5[player] - mP && (hO = dV.l5[player] - mP), df.iA ? a27(player, hO, na.hO[player - df.dg], mP) : a28(
		player, hO, na.hO[player - df.dg])))
}

function a27(player, hO, a29, mP) {
	var vI;
	a2A(player, !1) || a2B(player, !1) ? (ix[player] = 1, a2C(player) || (a2D() ? (a2E(player, hO), a2F(player, df.eM, a29)) : (bx.qf(na.tM[a29]) ? a2H(player, hO, vI = a2G(player)) : (a2I() && bx.qf(na.tK[a29]) && a2J(), a2H(player, hO, vI = a2K(
		player))), a2F(player, vI, a29)))) : 0 < dV.nb[player].length && bx.random() < bx.value(60) && eE.lP.bD(player) || (na.tS(player - df.dg, 200), a26(player, hO, a29, mP))
}

function a2L(player, hO) {
	a2A(player, !1) || a2B(player, !1) ? (ix[player] = 1, a2D() ? a2E(player, hO) : a2H(player, hO, a2M())) : a26(player, hO, 0, 0)
}

function a2F(player, vI, a29) {
	3 <= a29 && 2142 < bA.bC() && (vI === df.eM || dV.l5[vI] < aR(dV.l5[player], 20)) && na.tS(player - df.dg, 25)
}

function a26(player, hO, a29, mP) {
	var a6, iV, u;
	if (0 !== lV.i6[player] && !(5 === a29 && dV.l5[player] < mP || 4 === a29 && dV.l5[player] < aR(mP, 2)))
		for (a6 = bx.tQ(dR), iV = 0; iV < dR; iV++)
			if (u = dT[(iV + a6) % dR], lV.i6[u] === lV.i6[player] && 1 === ix[u]) return void e9.a0N.is(player, u, hO)
}

function a28(player, hO, a29) {
	!a2A(player, !0) && !a2B(player, !0) || a2C(player) || (a2D() ? a2E(player, hO) : bx.qf(na.tM[a29]) ? a2H(player, hO, a2G(player)) : (a2I() && bx.qf(na.tK[a29]) && a2J(), a2H(player, hO, a2K(player))))
}

function a2N(player, hO) {
	(a2A(player, !0) || a2B(player, !0)) && (a2D() ? a2E(player, hO) : a2H(player, hO, a2M()))
}

function a2H(player, hO, vI) {
	aR(dV.l5[player], 8) > dV.l5[vI] && (hO = (a2O = aR(11 * dV.l5[vI], 5)) < hO ? hO : a2O);
	var a2O = dV.qk[player].length;
	a2P(player, vI), a2Q(player, vI, a2O, hO)
}

function a2E(player, hO) {
	var vI = df.eM,
		aF = dV.qk[player].length;
	return a2R(player), dV.qk[player].length !== aF && (a2Q(player, vI, aF, hO), !0)
}

function a2S() {
	var ly = 0;
	this.m = function() {
		xX.m(), ly = 0
	}, this.setState = function(a2T) {
		ly = a2T
	}, this.cN = function() {
		return ly
	}, this.gT = function() {
		this.setState(8), ke.m7(), g.u5()
	}, this.t = function(cY) {
		if (!y.q7) return !1;
		if (!(bA.bB < 400)) {
			if ("Enter" === cY.key || "Escape" === cY.key) {
				if (this.a2U()) return !0;
				if ("Enter" === cY.key) {
					if (0 === ly) return !0;
					if (7 === ly) return !0
				}
			}
			return !1
		}
	}, this.a2V = function() {
		a2W.resize()
	}, this.a2U = function() {
		return !!a2W.s()
	}, this.bF = function(a7, a8) {
		!y.q7 || a2W.bF(a7, a8) || 6 === ly && kg.bF(a7, a8) || 2 === ly && gM.bF(a7, a8) || (kG.bF(a7, a8), 0 !== ly && 7 === ly && ke.bF(a7, a8))
	}, this.fU = function(a7, a8) {
		if (!kG.a2X) {
			if (2 === ly && gM.fU(a7, a8)) return void kG.kH();
			if (xX.fU(a7, a8, !0)) return
		}
		kG.fU(a7, a8)
	}, this.click = function(a7, a8) {
		kG.kI(), wg.bF(a7, a8, !1) || wh.bF(a7, a8)
	}, this.fS = function(a7, a8, deltaY) {}, this.a2Y = function() {
		xX.a2Z(), 0 !== ly && 7 === ly && ke.resize(), bA.bE = !0
	}, this.bH = function() {
		8 !== ly && 10 !== ly && (bI.imageSmoothingEnabled = !0, this.gd(), 0 !== ly && (kG.bH(), qL.bH(), this.wf(), wg.bH(), wh.bH()), 0 !== ly && (2 === ly ? gM.bH() : 6 === ly ? kg.bH() : 7 === ly && ke.bH()), a2W.bH(), g.bH())
	}, this.gd = function() {
		var a2b, a2a;
		if (makeMainMenuTransparent) bI.clearRect(0, 0, ay.ak, ay.al);
		else y.q7 ? (a2a = ay.ak / y.aB, a2b = ay.al / y.aC, bI.setTransform(a2a = a2b < a2a ? a2a : a2b, 0, 0, a2a, Math.floor((ay.ak - a2a * y.aB) / 2), Math.floor((ay.al - a2a * y.aC) / 2)), bI.drawImage(y.ge, 0, 0), bI.setTransform(1, 0, 0,
			1, 0, 0), bI.fillStyle = i.xe) : bI.fillStyle = i.hT, bI.fillRect(0, 0, ay.ak, ay.al)
	}, this.wf = function() {
		var a8 = Math.floor(.3 * ay.al),
			aq = bN.vz("territorial.io"),
			w2 = (w2 = 1.75 * ay.al / aq.width) * aq.width < .98 * ay.ak ? .98 * ay.ak / aq.width : w2,
			a7 = (bI.globalAlpha = .15, bI.imageSmoothingEnabled = !1, Math.floor(.5 * (ay.ak - w2 * aq.width))),
			a7 = Math.floor(a7 / w2),
			a8 = Math.floor(a8 - .5 * aq.height * w2),
			a8 = Math.floor(a8 / w2);
		bI.setTransform(w2, 0, 0, w2, a7, a8), bI.drawImage(aq, a7, a8), bI.setTransform(1, 0, 0, 1, 0, 0), bI.globalAlpha = 1, bI.imageSmoothingEnabled = !0
	}
}

function a2c() {
	var al, aq, bJ, a2d, a2e, a2f, a2g, oF, a2h, a2i, a2j, a2k, a2l = !1,
		km = (this.ai = !1, this.ak = 0, new Array(2));

	function fu() {
		var ak = gl.ak,
			mb = (oF = !1, gs(bJ, ak, al), Math.floor(ak / 2));
		1 === a2d ? (bJ.fillStyle = i.a0d, bJ.fillRect(mb, 0, mb, al)) : -1 === a2d && (bJ.fillStyle = i.a2o, bJ.fillRect(0, 0, mb, al)), gt(bJ, ak, al, 2);
		var mb = (mb = Math.floor(.25 * al)) < 2 ? 2 : mb,
			vn = (bJ.fillStyle = i.a2p, Math.floor((al - 4) * a2e[1] / a2f[1]));
		0 < vn && bJ.fillRect(2, al - 2 - vn, mb, vn), 0 < (vn = Math.floor((al - 4) * a2e[0] / a2f[0])) && bJ.fillRect(ak - 2 - mb, al - 2 - vn, mb, vn);
		mb = (mb = Math.floor(al / 8)) < 2 ? 2 : mb, fp(bJ, Math.floor(.4 * al), 0, al, mb, .5, !1), fp(bJ, Math.floor(ak - 1.4 * al), 0, al, mb, .5, !0), vn = 1.1 * al / km[0].width;
		bJ.imageSmoothingEnabled = !0, bJ.setTransform(vn, 0, 0, vn, (ak - vn * km[0].width) / 2, -.05 * al), bJ.drawImage(km[+a2l], 0, 0), bJ.setTransform(1, 0, 0, 1, 0, 0)
	}

	function b9() {
		oF = !0, a2h = 140, a2d = 0, a2g = [], gl.ai = !1, f6.a2x(247, 0), a2e[0] = a2e[1] = 0
	}

	function bG() {
		return b8.oT(f6.a31()) ? b8.a8 - al - b2.gap : gj.oT(f6.a32()) ? gj.bG() - al - b2.gap : ay.al - al - oI.oJ() * b2.gap
	}
	this.a2m = function() {
		for (let a6 = 0; a6 < 2; a6++) km[a6] = q.aq.kj(bN.get(3), 8 - a6, i.a2n), km[a6] = q.aq.kq(km[a6])
	}, this.m = function() {
		a2j = a2k = 0, this.ai = !1, oF = a2l = !1, a2h = 140, a2e = [a2d = 0, 0], a2f = [1, 1], a2g = [], a2i = new Uint32Array(10), this.resize()
	}, this.resize = function() {
		al = b8.al, this.ak = 4 * al, (aq = document.createElement("canvas")).width = this.ak, aq.height = al, bJ = aq.getContext("2d", {
			alpha: !0
		}), fu()
	}, this.oK = function() {
		oF && fu()
	}, this.bF = function(a7, a8) {
		var hP;
		return !!this.ai && !(a7 < ay.ak - this.ak - b2.gap || a8 < (hP = bG()) || hP + al < a8 || (df.dp || e9.eA.q2(a7 > ay.ak - b2.gap - this.ak / 2 ? 1 : 0), 0))
	}, this.bD = function() {
		if (0 < a2k) 0 === --a2k && b9();
		else if (this.ai) 270 == --a2h && 2 <= a2j && function() {
			var a6;
			for (a6 = dR - 1; 0 <= a6; a6--)
				if (dZ.da(dT[a6])) return;
			return 1
		}() && (oF = !0, a2e[0] += a2f[0]), 180 === a2h && 3 * a2e[0] < a2f[0] ? b9() : a2e[0] >= a2f[0] ? a2l ? ek.xx.a2w() : ek.xx.a0r(-1) : a2e[1] >= a2f[1] ? a2k = 4 : a2h <= 0 && b9();
		else if (function() {
				var a6;
				for (a6 = 9; 0 <= a6; a6--) 12 < Math.abs(a2i[a6] - dV.ev[f4[a6]]) && (a2h = 140), a2i[a6] = dV.ev[f4[a6]];
				if (--a2h <= 0) return 1;
				return
			}()) {
			a2l = a2s.b5(), f6.a2t(a2l), this.ai = !0, oF = !0, a2h = 360;
			{
				let eu = 0;
				for (let a6 = dR - 1; 0 <= a6; a6--) dZ.da(dT[a6]) && (eu += dV.ev[dT[a6]]);
				{
					var aL;
					a2l ? a2f[0] = Math.max(aR(3 * eu, 4), 1) : df.iA ? (aL = ny.nz(100 * ep.eq(), df.mN), aL += 2 * Math.max(aL - 75, 0), aL = ny.oV(aL = 150 - aL, 0, 100), aL = ny.nz(aL * eu, 100), a2f[0] = Math.max(aL, 1)) : a2f[0] = Math.max(
						aR(3 * eu, 5), 1)
				}
				a2f[1] = Math.max(eu - a2f[0], 1)
			}
			a2j++
		}
	}, this.a2y = function() {
		this.ai && a2e[0] < a2f[0] && b9()
	}, this.vb = function(player, a2z) {
		var a6, eu;
		if (this.ai) {
			for (a6 = a2g.length - 1; 0 <= a6; a6--)
				if (a2g[a6] === player) return;
			f6.f7(200, dV.hY[player] + (a2z ? " voted for" : " rejected") + " peace.", 257, player, a2z ? i.yK : i.a30, i.bL, -1, !0), a2g.push(player), oF = !0, eu = df.iP ? a2f[0] : dV.ev[player], a2z ? a2e[0] += eu : a2e[1] += eu, player ===
				df.du && (a2d = a2z ? 1 : -1)
		}
	}, this.bH = function() {
		var a8;
		this.ai && (a8 = bG(), bI.drawImage(aq, ay.ak - this.ak - b2.gap, a8))
	}
}

function ky(a33, a34, oD) {
	var pA, a6, a35 = new Array(a34.length),
		ri = new Array(a34.length);
	for (this.resize = function() {
			for (var aF = a34.length, a6 = 0; a6 < aF; a6++) 0 < a6 && q.r.os(a35[a6], 8)
		}, pA = document.createElement("div"), a33.style.overflowX = "hidden", a33.style.overflowY = "auto", ! function() {
			var a6, ia, aF = a34.length;
			for (a6 = 0; a6 < aF; a6++) {
				a35[a6] = document.createElement("div"), a35[a6].style.display = "flex", a35[a6].style.width = "100%", a35[a6].style.height = "2.5em", a35[a6].style.backgroundColor = a6 % 2 == 0 ? i.a37 : i.a38, ri[a6] = new Array(a34[0].length);
				for (let hC = 0; hC < a34[0].length; hC++) ri[a6][hC] = ia = document.createElement("div"), ia.style.display = "flex", ia.style.width = "100%", ia.style.height = "100%", ia.style.justifyContent = "center", ia.style.alignItems =
					"center", ia.innerHTML = a34[a6][hC], 0 < hC && q.r.os(ia, 4), a35[a6].appendChild(ia)
			}
		}(), a6 = 0; a6 < a34.length; a6++) pA.appendChild(a35[a6]);
	a33.appendChild(pA)
}

function a39() {
	function a3G(a3J) {
		return a3J < 0 ? 0 : 255 < a3J ? 255 : Math.floor(a3J)
	}
	this.ak = 0, this.al = 0, this.ai = !1, this.a3A = 0, this.gap = 0, this.a3B = 0, this.wZ = 0, this.a3C = 0, this.a3D = 0, this.a3E = 0, this.colors = null, this.m = function() {
		this.ai = !0, this.a3A = 0, this.resize()
	}, this.resize = function() {
		this.ai && (ay.ak < 1.4 * ay.al ? this.ak = Math.floor((av.aw.ax() ? .94 : .43) * ay.ak) : (this.al = Math.floor((av.aw.ax() ? .88 : .43) * ay.al), this.ak = Math.floor(1.4 * this.al)), this.al = this.ak / 1.4, this.gap = this.ak / 32,
			this.wZ = Math.floor(.25 * this.al), this.a3C = (this.al - this.wZ - 3 * this.gap) / 2, this.a3D = this.ak - 3 * this.gap - this.a3C, this.a3E = (this.al - this.wZ - 4 * this.gap) / 3)
	}, this.a3F = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var bV = aZ.af.data[103].value.split("");
		if (bV.length < 6)
			for (var iV = 2; 0 <= iV; iV--) this.colors[0][iV] = a3G(256 * Math.random());
		else
			for (var a6 = 2; 0 <= a6; a6--) this.colors[0][a6] = a3G(4 * (10 * parseInt(bV[2 * a6]) + parseInt(bV[2 * a6 + 1])));
		this.a3H()
	}, this.a3I = function() {
		return [aR(this.colors[0][0], 4), aR(this.colors[0][1], 4), aR(this.colors[0][2], 4)]
	}, this.fS = function(fb, fc, deltaY) {
		var bK = (ay.ak - this.ak) / 2;
		fc -= (ay.al - this.al) / 2 + this.wZ, (fb -= bK) < 0 || fc < 0 || fb >= this.ak || fc >= this.al - this.wZ || (bK = Math.floor(3 * fc / (this.al - this.wZ)), this.colors[this.a3B][bK] = a3G(this.colors[this.a3B][bK] + (deltaY < 0 ? 1 : -
			1) * Math.max(Math.abs(.05 * deltaY), 1)), bA.bE = !0)
	}, this.bF = function(fb, fc) {
		this.a3A = 0;
		var bK = (ay.ak - this.ak) / 2;
		return fc -= (ay.al - this.al) / 2, (fb -= bK) < 0 || fc < 0 || fb >= this.ak - 1 || fc >= this.al - 1 || fb > this.ak - (.4 * this.wZ + 3 * this.gap) && fc < this.wZ ? (this.ai = !1, !(bA.bE = !0)) : fb < this.gap || fc < this.gap + this
			.wZ || fb >= this.ak || fc >= this.al - this.gap || (fb < this.gap + this.a3C ? (fc < this.gap + this.wZ + this.a3C && 0 !== this.a3B && (this.a3B = 0, bA.bE = !0), !0) : fb < this.gap + this.a3C || (fb -= 2 * this.gap + this.a3C,
				fc < this.gap + this.wZ + this.a3E ? (this.a3A = 1, this.colors[this.a3B][0] = a3G(256 * fb / this.a3D), bA.bE = !0) : fc < 2 * this.gap + this.wZ + this.a3E || (fc < 2 * this.gap + this.wZ + 2 * this.a3E ? (this.a3A = 2, this
					.colors[this.a3B][1] = a3G(256 * fb / this.a3D), bA.bE = !0) : !(fc >= 3 * this.gap + this.wZ + 2 * this.a3E) || (this.a3A = 3, this.colors[this.a3B][2] = a3G(256 * fb / this.a3D), bA.bE = !0))))
	}, this.a3H = function() {
		for (var iV = 2; 0 <= iV; iV--) this.colors[0][iV] = a3G(this.colors[0][iV])
	}, this.a3K = function() {
		for (var aL, bV = "", a6 = 0; a6 < 3; a6++)(aL = aR(this.colors[0][a6], 4)) < 10 && (bV += "0"), bV += aL.toString();
		return bV
	}, this.fU = function(fb) {
		0 !== this.a3A && (fb -= 2 * this.gap + this.a3C + (ay.ak - this.ak) / 2, this.colors[this.a3B][this.a3A - 1] = a3G(256 * fb / this.a3D), bA.bE = !0)
	}, this.kF = function() {
		0 < this.a3A && (this.a3A = 0, this.a3H(), aZ.d6.aX(103, this.a3K()), bA.bE = !0)
	}, this.bH = function() {
		var bK = (ay.ak - this.ak) / 2,
			hP = (ay.al - this.al) / 2;
		bI.setTransform(1, 0, 0, 1, bK, hP), bI.fillStyle = i.bL, bI.fillRect(0, this.wZ, this.ak, this.al - this.wZ), bI.fillStyle = i.a37, bI.fillRect(0, 0, this.ak, this.wZ), bI.fillStyle = i.bM, bI.lineWidth = b2.zb, bI.strokeStyle = i.bM, bI
			.strokeRect(-1, -1, this.ak + 2, this.al + 2), bI.fillRect(0, this.wZ, this.ak, b2.zb), bI.font = q.r.ft(1, .31 * this.wZ), q.r.textBaseline(bI, 1), q.r.textAlign(bI, 1), bI.fillText("Choose Your Nation's Color!", Math.floor((this
				.ak - this.gap - .4 * this.wZ) / 2), Math.floor(.55 * this.wZ)), this.a3L(0), bI.lineWidth = b2.zb, this.a3M(0), this.a3M(1), this.a3M(2), dq.xn(Math.floor(bK + this.ak - .4 * this.wZ - this.gap), Math.floor(hP + .3 * this.wZ),
				Math.floor(.4 * this.wZ)), bI.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a3L = function(a6) {
		var kQ = this.colors[a6][0],
			gS = this.colors[a6][1],
			a6 = this.colors[a6][2];
		bI.fillStyle = "rgb(" + kQ + "," + gS + "," + a6 + ")", bI.fillRect(this.gap, this.wZ + this.gap, this.a3C, 2 * this.a3C + this.gap), bI.lineWidth = b2.zb, bI.strokeStyle = i.bM, bI.strokeRect(this.gap, this.wZ + this.gap, this.a3C, 2 *
			this.a3C + this.gap), bI.fillStyle = kQ + gS + a6 < 306 && gS < 150 ? i.bM : i.hT, bI.font = q.r.ft(1, .32 * this.a3E), q.r.textAlign(bI, 1), q.r.textBaseline(bI, 1), bI.rotate(-Math.PI / 2), bI.fillText("National Color", Math
			.floor(-1.5 * this.gap - this.wZ - this.a3C), Math.floor(this.gap + .5 * this.a3C)), bI.rotate(Math.PI / 2)
	}, this.a3M = function(a6) {
		bI.fillStyle = "rgb(" + (0 === a6 ? 150 : 2 === a6 ? 30 : 0) + "," + (1 === a6 ? 130 : 2 === a6 ? 30 : 0) + "," + (2 === a6 ? 220 : 0) + ")", bI.fillRect(2 * this.gap + this.a3C, this.wZ + this.gap + a6 * (this.gap + this.a3E), Math
				.floor(this.colors[this.a3B][a6] * this.a3D / 255), this.a3E), bI.strokeStyle = i.bM, bI.strokeRect(2 * this.gap + this.a3C, this.wZ + this.gap + a6 * (this.gap + this.a3E), this.a3D, this.a3E), bI.fillStyle = i.bM, bI.font = q.r
			.ft(1, .32 * this.a3E), q.r.textBaseline(bI, 1), q.r.textAlign(bI, 0), bI.fillText((0 === a6 ? "Red: " : 1 === a6 ? "Green: " : "Blue: ") + this.colors[0][a6].toString(), 3 * this.gap + this.a3C, Math.floor(this.wZ + this.gap + a6 * (
				this.gap + this.a3E) + .53 * this.a3E))
	}
}

function lB() {
	function a3O(bZ) {
		if (0 === bZ.length) aZ.d6.aX(116, "");
		else {
			let a3P = bZ[0];
			for (let a6 = 1; a6 < bZ.length; a6++) a3P += ";" + bZ[a6];
			aZ.d6.aX(116, a3P)
		}
	}
	this.d5 = function() {
		aZ.af.data[110].value.length && (aZ.af.data[106].value = aZ.af.data[110], aZ.d6.aX(110, ""), this.rx())
	}, this.rx = function() {
		var bZ = aZ.af.data[116].value.split(";");
		bZ.length % 2 == 1 && bZ.pop(), bZ.unshift(aZ.af.data[106].value), bZ.unshift(aZ.af.data[105].value);
		for (let a6 = 2; a6 < bZ.length; a6 += 2)
			if (bZ[a6] === bZ[0]) {
				bZ.splice(a6, 2);
				break
			} var a3N = [];
		for (let a6 = 0; a6 < bZ.length; a6 += 2) a3N.push(bZ[a6]);
		a3O(bZ), aZ.af.data[117].value = 0, aZ.af.data[117].aW = a3N
	}, this.s2 = function(aQ) {
		aZ.af.data[117].aW.splice(aQ, 1), aZ.af.data[117].value = Math.min(aQ, aZ.af.data[117].aW.length - 1);
		var bZ = aZ.af.data[116].value.split(";");
		bZ.splice(2 * aQ, 2), a3O(bZ)
	}, this.s3 = function(aQ) {
		var bZ = aZ.af.data[116].value.split(";");
		return {
			s4: bZ[2 * aQ],
			password: bZ[2 * aQ + 1]
		}
	}, this.mv = function() {
		let aL = ny.oV(aZ.af.data[121].value, -1, 262143);
		return aL = -1 === aL ? ~~(262144 * Math.random()) : aL
	}
}

function a3Q(a3R) {
	var cY;
	this.cY = document.createElement("input"), (cY = this.cY).type = "color", cY.id = "input" + a3R.title, cY.value = q.color.a3S(q.color.a3T(aZ.d4.mv())), cY.style.width = "100%", cY.style.userSelect = "none", cY.style.outline = "none", cY.style
		.resize = "none", cY.style.border = "inherit", cY.style.font = "inherit", cY.style.color = i.bM, cY.style.backgroundColor = i.fo, cY.style.fontSize = "2em", cY.style.height = "1em", cY.style.padding = "0", cY.addEventListener("input",
			function() {
				aZ.d6.aX(a3R.aQ, q.color.a3U(q.color.a3V(q.color.a3W(cY.value))))
			})
}

function a3X() {
	var a3Y, a3Z, eD, a3a;
	this.m = function() {
		var a6, a7, a8, iX, a3b, ak, al, bJ, ks, p4, aL, dY, p3, hC, lL;
		if (function() {
				if (eD = !0, a3a = "rgb(" + y.nR[0] + "," + y.nR[1] + "," + y.nR[2] + ")", y.qI(y.z)) return 1;
				return eD = !1, 0
			}()) a3Z = null;
		else {
			for (a3Y = aR(96, 4), a3b = 1 === y.z ? (iX = 0, 160) : (iX = 128, 32), a3a = "rgb(" + iX + "," + iX + "," + iX + ")", a3Z = new Array(4), a6 = 3; 0 <= a6; a6--) {
				if (a3Z[a6] = document.createElement("canvas"), ak = a6 % 2 == 0 ? y.aB : a3Y, al = a6 % 2 == 0 ? a3Y : y.aC + 2 * a3Y, a3Z[a6].width = ak, a3Z[a6].height = al, p4 = (ks = (bJ = a3Z[a6].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, ak, al)).data, a6 % 2 == 0)
					for (a8 = a3Y - 1; 0 <= a8; a8--)
						for (aL = a3b + Math.floor((a8 + 1) * (iX - a3b) / (a3Y + 1)), a7 = ak - 1; 0 <= a7; a7--) p4[dY = 4 * ((0 === a6 ? a3Y - a8 - 1 : a8) * ak + a7)] = aL, p4[dY + 1] = aL, p4[dY + 2] = aL, p4[dY + 3] = 255;
				else {
					for (a7 = a3Y - 1; 0 <= a7; a7--)
						for (aL = a3b + Math.floor((a7 + 1) * (iX - a3b) / (a3Y + 1)), a8 = al - 1 - a3Y; a3Y <= a8; a8--) p4[dY = 4 * (a8 * ak + (3 === a6 ? a3Y - a7 - 1 : a7))] = aL, p4[dY + 1] = aL, p4[dY + 2] = aL, p4[dY + 3] = 255;
					for (hC = 1; 0 <= hC; hC--)
						for (a7 = a3Y - 1; 0 <= a7; a7--)
							for (a8 = a3Y - 1; 0 <= a8; a8--) p3 = (Math.pow(a7 * a7 + a8 * a8, .5) + 1) / (a3Y + 1), aL = a3b + Math.floor((1 < p3 ? 1 : p3) * (iX - a3b)), p4[dY = 4 * ((0 === hC ? a3Y - a8 - 1 : a8 + hC * (al - a3Y)) * ak + (
								1 === a6 ? a7 : a3Y - a7 - 1))] = aL, p4[dY + 1] = aL, p4[dY + 2] = aL, p4[dY + 3] = 255
				}
				bJ.putImageData(ks, 0, 0)
			}
			lL = a3b, y.nQ.fillStyle = "rgb(" + lL + "," + lL + "," + lL + ")", y.nQ.fillRect(0, 0, y.aB, 1), y.nQ.fillRect(0, y.aC - 1, y.aB, 1), y.nQ.fillRect(0, 0, 1, y.aC), y.nQ.fillRect(y.aB - 1, 0, 1, y.aC)
		}
	}, this.gd = function() {
		var hC = eD ? 0 : -a3Y;
		vj(hC, hC, y.aB - 2 * hC, y.aC - 2 * hC, fl.cr, fl.cs, fl.ct, fl.cu) || (bI.fillStyle = a3a, bI.fillRect(0, 0, ay.ak, ay.al))
	}, this.bH = function() {
		eD || (vh(0, -a3Y, y.aB, a3Y, fl.cr, fl.cs, fl.ct, fl.cu) && bI.drawImage(a3Z[0], fl.cp, fl.cq - a3Y), vh(y.aB, -a3Y, a3Y, y.aC + 2 * a3Y, fl.cr, fl.cs, fl.ct, fl.cu) && bI.drawImage(a3Z[1], fl.cp + y.aB, fl.cq - a3Y), vh(0, y.aC, y.aB,
			a3Y, fl.cr, fl.cs, fl.ct, fl.cu) && bI.drawImage(a3Z[2], fl.cp, fl.cq + y.aC), vh(-a3Y, -a3Y, a3Y, y.aC + 2 * a3Y, fl.cr, fl.cs, fl.ct, fl.cu) && bI.drawImage(a3Z[3], fl.cp - a3Y, fl.cq - a3Y))
	}
}

function lG() {
	this.qS = function(player) {
		for (var r1 = eE.d4.r1, g5 = player << 3, a6 = g5 + eE.d4.ne[player] - 1; g5 <= a6; a6--) this.rB(r1[a6])
	}, this.rB = function(a3e) {
		var d4 = eE.d4,
			a3f = d4.nc - 1,
			a3g = d4.qs[a3e],
			a3h = d4.qy[a3e],
			a3i = d4.qv[a3e];
		d4.nc = a3f, d4.qs[a3e] = d4.qs[a3f], d4.qt[a3e] = d4.qt[a3f], d4.qu[a3e] = d4.qu[a3f], d4.qv[a3e] = d4.qv[a3f], d4.qw[a3e] = d4.qw[a3f], d4.qx[a3e] = d4.qx[a3f], d4.qy[a3e] = d4.qy[a3f], d4.qz[a3e] = d4.qz[a3f], d4.r0[a3e] = d4.r0[a3f],
			d4.r1[d4.qs[a3e]] = a3e,
			function(xM) {
				var player = xM >> 3,
					d4 = eE.d4,
					aF = d4.ne[player] - 1,
					a3l = (player << 3) + aF;
				d4.ne[player] = aF, a3l !== xM && (d4.r1[xM] = d4.r1[a3l], d4.qs[d4.r1[xM]] = xM)
			}(a3g), eE.lJ.lJ[dy.r6(d4.qv[a3e])][d4.qy[a3e]] = a3e, a3f = dy.r6(a3i), a3g = a3h, a3f = eE.lJ.lJ[a3f], d4 = a3f.pop(), a3g !== a3f.length && (a3f[a3g] = d4, eE.d4.qy[d4] = a3g)
	}
}

function rg(a33, ri) {
	var a6, jU = document.createElement("div");

	function a3r() {
		var a6, a3s, al, es, ia, a3p = ay.k7 * jU.offsetWidth,
			a3t = new Float64Array(function(a3p) {
				var ak = .25 * q.r.jA(.6) * ay.az;
				return Math.max(Math.floor(a3p / ak), 1)
			}(a3p)),
			hs = b2.hs,
			a3u = (a3p - (a3t.length + 1) * b2.gap) / (a3t.length * ay.k7);
		for (a3t.fill(hs), a6 = 0; a6 < ri.length; a6++) a3s = (ia = ri[a6].jU).style, al = Math.min(...a3t), es = a3t.indexOf(al), a3s.top = q.r.hr(al), a3s.left = q.r.hr(hs + es * (a3u + hs)), a3s.width = q.r.hr(a3u), q.r.os(ia, 5), a3t[es] += ia
			.offsetHeight + 3 * hs;
		jU.style.height = q.r.hr(Math.max(...a3t) - 2 * hs)
	}
	for (this.a3n = ri, this.resize = function() {
			var a6;
			for (a6 = 0; a6 < ri.length; a6++) ri[a6].resize();
			a3r(), a3r()
		}, jU.style.width = "100%", jU.style.maxWidth = "100%", a33.style.lineHeight = "1.5em", a33.style.overflowX = "hidden", a33.style.overflowY = "auto", a6 = 0; a6 < ri.length; a6++) jU.appendChild(ri[a6].jU);
	a33.appendChild(jU)
}

function a3v() {
	this.a3w = [], this.a3x = [], this.m = function() {
		this.a3w = [], this.a3x = []
	}, this.bD = function() {
		0 <= this.a3w.length && this.a3y(this.a3w), 0 <= this.a3x.length && this.a3y(this.a3x)
	}, this.a3y = function(bZ) {
		for (var iV = -1, a6 = bZ.length - 1; 0 <= a6; a6--)
			if (bZ[a6].bB--, bZ[a6].bB <= 0) {
				iV = a6;
				break
			} for (a6 = iV; 0 <= a6; a6--) bZ.shift()
	}, this.a3z = function(id, dS, a40) {
		return this.a41(this.a3w, id, dS, a40)
	}, this.a42 = function(id, dS, a40) {
		return this.a41(this.a3x, id, dS, a40)
	}, this.a41 = function(bZ, id, dS, a40) {
		return ! function(bZ, id, dS) {
			var a6, rO;
			for (a6 = dS.length - 1; 0 <= a6; a6--)
				for (rO = bZ.length - 1; 0 <= rO; rO--)
					if (bZ[rO].player === dS[a6] && id === bZ[rO].id) return 1;
			return
		}(bZ, id, dS) && (a40 && function(bZ, id, dS) {
			var a6;
			for (a6 = dS.length - 1; 0 <= a6; a6--) bZ.push({
				player: dS[a6],
				id: id,
				bB: 384
			})
		}(bZ, id, dS), !0)
	}
}

function a45() {
	var u, a0c = !1,
		a46 = !1,
		a47 = -1e4;

	function resize(kz) {
		u = 0, bN.fv() && (a49(kz) || a0c) && (a0c = !1, b2.resize(), wh.m(), xX.m(), wg.m(), kg.resize(), kG.resize(), qL.resize(), a1K.resize(), g.resize(), 1 <= df.gP ? (gk.resize(!1), gn.resize(), gm.resize(), cx.resize(), b8.resize(), f6
		.resize(), dq.resize(), gj.resize(), gl.resize(), go.resize(), fx.resize(), b7.resize(), gq.resize(), fZ.resize(), gp.resize(), ep.resize(), cx.fa()) : (2 === cM.cN() && gM.resize(), cM.a2V(), cM.a2Y()), bA.bE = !0)
	}

	function a48(aL) {
		return aL && 128 < aL ? Math.floor(aL) : 128
	}

	function a49(kz) {
		var ak, al, a4C, gx = a48(document.documentElement.clientWidth),
			am = a48(window.visualViewport && 2 !== av.id ? window.visualViewport.height : document.documentElement.clientHeight);
		return ak = gx, al = am, a4C = 0 !== av.id || ak < al ? 700 : 1200, a4C = Math.min(a4C / ((ak + al) / 2), 1), a4C = 0 === aZ.af.data[1].value ? 2 * a4C / 3 : Math.min(a4C + (aZ.af.data[1].value - 1) * (1 - a4C) / 2, 1), ay.k7 = (window
			.devicePixelRatio || 1) * a4C, hoveringTooltip.canvasPixelScale = ay.k7, kz && !a46 ? (a46 = !0, document.body.removeChild(jq)) : a46 && (a46 = !1, document.body.appendChild(jq)), ak = Math.floor(.5 + gx * ay.k7), al = Math.floor(.5 +
			am * ay.k7), (ak !== ay.ak || al !== ay.al) && (ay.ak = ak, ay.al = al, ay.min = b0(ak, al), ay.max = b1(ak, al), ay.az = aR(ak + al, 2), ay.pM = ak / al, jq.width = ak, jq.height = al, jq.style.width = gx + "px", jq.style.height =
			am + "px", 1)
	}
	this.ak = 0, this.al = 0, this.min = 0, this.max = 0, this.az = 0, this.pM = 1, this.k7 = 1, this.a2m = function() {
		this.ak = a48(document.documentElement.clientWidth) + 2, this.al = a48(document.documentElement.clientHeight) + 2
	}, this.m = function() {
		u = 1, jq = document.getElementById("canvasA"), (bI = jq.getContext("2d", {
			alpha: makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, a49(0)
	}, this.bD = function() {
		a4A.bD(), 50 <= ++u && resize(0)
	}, this.ze = function(kz) {
		a0c = !0, resize(kz)
	}, this.kd = function() {
		a47 + 1e3 > bA.bB || (a47 = bA.bB, resize(0))
	}
}

function a0L() {
	this.eB = function(e2) {
		df.iP ? e9.px.eB(df.du, e2) : c8.c9.a1P(e2)
	}, this.eL = function(oD, vI) {
		f6.a4E(), df.iP ? e9.px.eL(df.du, oD, vI) : c8.c9.a1Q(oD, vI)
	}, this.iw = function(oD, it) {
		f6.a4E(), df.iP ? e9.px.py(df.du, oD, it) : c8.c9.a1R(oD, it)
	}, this.eH = function(oD, e2) {
		df.iP ? e9.px.eH(df.du, oD, e2) : eE.eF.eG(df.du, e2) && c8.c9.a1S(oD, e2)
	}, this.pz = function(vT, e2) {
		df.iP ? e9.px.pz(df.du, vT, e2) : eE.eF.a4F(df.du, vT, e2) && c8.c9.a1T(vT, e2)
	}, this.q0 = function(vI) {
		df.iP ? e9.px.q0(df.du, vI) : c8.c9.a1U(vI)
	}, this.a4G = function(vY) {
		df.iP ? e9.px.q1(df.du, vY) : c8.c9.a1V(vY)
	}, this.q2 = function(va) {
		df.iP ? e9.px.q2(df.du, va) : c8.c9.a1W(va)
	}, this.q3 = function() {
		df.iP ? e9.px.q3(df.du) : c8.c9.a1X()
	}
}

function a4H() {
	"function" != typeof Math.log2 && (Math.log2 = function(a7) {
		return Math.log(a7) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(a7) {
		return Math.log(a7) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(a7) {
		return 0 < a7 ? 1 : a7 < 0 ? -1 : 0
	})
}

function lM() {
	var a4I = 32,
		a4J = new Array(2);

	function kn(u) {
		var a7, a8, e2, fY, fX, gv = a4I,
			km = q.r.kn(gv, gv),
			ko = q.r.getContext(km, !0),
			ks = q.r.getImageData(ko, gv, gv),
			p4 = ks.data,
			mb = (gv >> 1) - .5,
			a4L = Math.sqrt(mb * mb);
		for (p4.fill(255), a8 = 0; a8 < gv; a8++)
			for (a7 = 0; a7 < gv; a7++) fX = a7 - mb, fY = a8 - mb, e2 = 4 * (a8 * gv + a7), fX = 714 * (a4L - Math.sqrt(fX * fX + fY * fY)) / a4L, p4[2 + e2] = u, p4[3 + e2] = 255 < fX ? 0 : fX;
		return ko.putImageData(ks, 0, 0), km
	}
	this.a4K = -1, this.m = function() {
		this.a4K = -1, a4J[0] || (a4J[0] = kn(255), a4J[1] = kn(0))
	}, this.p7 = function(ko, e4, a7, a8, kQ, a6) {
		q.ce.dt(df.du) && (ko.setTransform(e4 *= 4 / 3 * .625, 0, 0, e4, a7 - (kQ *= 4 / 3), a8 - kQ), ko.drawImage(a4J[+(eE.d4.qz[a6] === this.a4K)], 0, 0))
	}
}

function u9(a4M, a33) {
	var jU, a6;
	for (this.resize = function() {
			for (var a6 = 0; a6 < a4M.length; a6++) q.r.os(a4M[a6].button);
			jU.style.gap = jU.style.padding = q.r.hr(b2.hs)
		}, (jU = document.createElement("div")).style.display = "grid", jU.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", jU.style.overflowY = "auto", jU.style.gridAutoRows = "5.3em", jU.style.maxHeight = "100%", a6 = 0; a6 <
		a4M.length; a6++) a4M[a6].button.style.fontSize = "1.2em", jU.appendChild(a4M[a6].button);
	a33.appendChild(jU)
}

function a4N() {
	this.d8 = new bS, this.dK = new a1H, this.m = function() {
		this.d8.m()
	}
}

function a4O() {
	this.vH = function(player, e2) {
		a4P.a4Q(player, dy.a4R(e2), dy.a4S(e2)) && (bA.bE = !0), df.iP && this.bD()
	}, this.bD = function() {
		df.e7 = !1;
		for (let a6 = 0; a6 < df.dg; a6++) 0 !== dV.eg[a6] && 0 === dV.ev[a6] && a4P.a4T(a6);
		0 !== dV.eg[df.du] ? (j3.mV[7] = dV.ev[df.du], j3.mV[8] = dV.l5[df.du], b8.oU(), gm.a0a(), df.dp || fT.a4U(dV.nu[df.du] - 5, dV.nv[df.du] - 5, dV.nw[df.du] + 5, dV.nx[df.du] + 5), gr.m()) : gp.show(!1, !1, !1, !0), f6.a4V(18), fZ.th(), fZ
			.oK(!0), gf.d4.p0(), df.tg = null, d0.a4W = !0, d0.tm(), df.iP && av.aw.setState(1)
	}
}

function s5(a3R, a4X = function() {}) {
	this.jb = [];
	let a4Y = this.jb;

	function click() {
		for (let a6 = 0; a6 < a4Y.length; a6++) a4Y[a6].textContent = a4Y[a6].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var aQ = parseInt(this.name);
		aZ.d6.aX(a3R.aQ, aQ), a4X(aQ)
	}
	var a4Z, aF = a3R.aW.length;
	for (let a6 = 0; a6 < aF; a6++)(a4Z = document.createElement("p")).textContent = "⚪ " + a3R.aW[a6], a4Z.style.margin = "0", a4Z.name = "" + a6, a4Z.style.cursor = "pointer", a4Z.style.fontSize = "1em", a4Z.addEventListener("click", click), a4Y
		.push(a4Z);
	a4Y[a3R.value].textContent = a4Y[a3R.value].textContent.replace("⚪", "🟢")
}

function a4a() {
	var fw, ak, a8, a4b, a4c, aq, bJ, oF, l4, a4d, a4e, a4f, a4g;
	this.a7 = 0, this.al = 0, this.m = function() {
		a4c = df.a4h, a4e = "rgba(0,100,0,0.8)", a4f = "rgba(150,0,0,0.8)", oF = !(a4d = !0), l4 = dV.l5[df.du], this.resize()
	}, this.resize = function() {
		ak = Math.floor((av.aw.ax() ? .305 : .24) * ay.az), this.al = Math.floor(.5 + .13 * ak), ak = Math.floor(6 * this.al), fw = q.r.ft(1, Math.floor(.8 * this.al)), a4g = Math.floor(.5 * this.al), y.nQ.font = fw, a8 = b2.gap, a4b = Math
			.floor(1 + .13 * this.al), (aq = document.createElement("canvas")).width = ak, aq.height = this.al, (bJ = aq.getContext("2d", {
				alpha: !0
			})).font = fw, q.r.textBaseline(bJ, 1), q.r.textAlign(bJ, 1), this.a4i()
	}, this.ye = function() {
		return av.aw.ax() && ay.ak < 1.2 * ay.al
	}, this.fG = function() {
		this.ye() ? this.a7 = ay.ak - ak - b2.gap : this.a7 = Math.floor(gk.a4j() + (ay.ak - gk.a4j() - gm.ak - ak) / 2 - .5 * b2.gap)
	}, this.oK = function() {
		oF && (oF = !1, this.a4i())
	}, this.a4i = function() {
		bJ.clearRect(0, 0, ak, this.al), bJ.fillStyle = a4d ? a4e : a4f, bJ.fillRect(0, 0, ak, this.al), bJ.fillStyle = i.xu, this.a4k(), this.a4l(), bJ.fillStyle = dV.l5[df.du] >= iv.mQ(df.du) ? i.a30 : i.bM, bJ.fillText(q.cg.hX(l4), Math.floor(
			ak / 2), a4g), bJ.fillStyle = i.bM, bJ.fillRect(0, 0, ak, 1), bJ.fillRect(0, 0, 1, this.al), bJ.fillRect(0, this.al - 1, ak, 1), bJ.fillRect(ak - 1, 0, 1, this.al)
	}, this.a4k = function() {
		var a4m = b0(Math.floor((iv.mJ() - 1) * this.al / 9), this.al - a4b);
		bJ.fillRect(0, a4m, a4b, this.al - a4m), bJ.fillRect(ak - a4b, a4m, a4b, this.al - a4m)
	}, this.a4l = function() {
		bJ.fillRect(a4b, this.al - a4b, Math.floor((ak - 2 * a4b) * dV.l5[df.du] / a4c), a4b)
	}, this.bD = function() {
		0 !== dV.eg[df.du] && 2 !== dV.qh[df.du] && l4 !== dV.l5[df.du] && (a4c = b1(dV.l5[df.du], a4c), a4d = dV.l5[df.du] > l4 && 10 <= dV.l5[df.du], l4 = dV.l5[df.du], oF = !0)
	}, this.bH = function() {
		0 === dV.eg[df.du] || df.e7 || 2 === dV.qh[df.du] || bI.drawImage(aq, this.a7, a8)
	}
}

function a4o() {
	this.li = 1047, this.m = function() {
		t1 = 2, a4n = 23, uN = "10 Jul 2024 [1.96.8]", lj = 0 <= window.location.hostname.toLowerCase().indexOf("territorial.io") || Math.random() >= 0.8, lk = function() {
			try {
				return window.self !== window.top
			} catch (cY) {
				return !0
			}
		}(), a1O = (new Date).getTime() % 1024
	}, this.a4q = 0
}

function a4r() {
	this.iq = 0, this.dS = null, this.m = function() {
		this.iq = 0, this.dS = []
	}, this.a4s = function(player) {
		this.dS.push(player), df.qT++, dV.qh[player] = 2, dV.dU[player] = em.en.dX(), player === df.du && (gp.show(!1, !1), gm.qa()), fZ.a4t(player)
	}, this.qo = function(player) {
		var a6, dS;
		if (2 !== dV.qh[player])
			for (a6 = (dS = this.dS).length - 1; 0 <= a6; a6--)
				if (dS[a6] === player) return void dS.splice(a6, 1)
	}, this.bD = function() {
		df.iP || (30 === this.iq && 2140 <= bA.bC() && this.a4u(), this.iq = (this.iq + 1) % 60)
	}, this.a4u = function() {
		for (var dS = this.dS, a6 = dS.length - 1; 0 <= a6; a6--) ! function(player, oD) {
			!hU.vO(player) || (oD = Math.max(Math.min(100, dV.l5[player]), aR(oD * dV.l5[player], 100))) < 100 || (0 === dV.ql[player].length ? !eE.lP.bD(player) && df.iA && a26(player, oD, 0, 0) : (df.iA ? a2L : a2N)(player, oD))
		}(dS[a6], 12)
	}
}

function a4w() {
	var aL, ak, al, max, a4x, pZ, a4z, a50, a51, a52, a53, a54, a55, a56, a4y = 1e4;

	function a5D(a5C, pY, aF) {
		var a6;
		for (a4z[0] = a5C, a6 = 1; a6 < aF; a6++) a4z[a6] = a4z[a6 - 1] + pY, pY = a4z[a6] >= a4y ? (a4z[a6] = a4y - 1, -pY) : a4z[a6] < 0 ? (a4z[a6] = 0, -pY) : (pY += 16384 <= bx.random() ? pZ : -pZ) < -a4x ? -a4x : a4x < pY ? a4x : pY
	}

	function a5F(a7, a8, a5G, aF) {
		(a5G ? function(a7, a8, aF) {
			var a6;
			for (a6 = 0; a6 < aF; a6++) aL[a8 * ak + a7 + a6] = a4z[a6]
		} : function(a7, a8, aF) {
			var a6;
			for (a6 = 0; a6 < aF; a6++) aL[a8 * ak + a7 + a6 * ak] = a4z[a6]
		})(a7, a8, aF)
	}

	function a5J(value, aF) {
		var a6, a5K, e4, kz = value - a4z[aF - 1];
		if (0 != kz) {
			for (a5K = 1 + aR(Math.abs(kz), aF - 1), a5K = kz < 0 ? -a5K : a5K, a4z[aF - 1] = value, e4 = (e4 = aF - 1 - aR(Math.abs(kz), Math.abs(a5K))) < 1 ? 1 : aF - 2 < e4 ? aF - 2 : e4, a6 = aF - 2; e4 <= a6; a6--) a4z[a6] += kz - (aF - 1 -
				a6) * a5K;
			(kz < 0 ? function(aF) {
				var a6;
				for (a6 = aF - 2; 1 <= a6; a6--) a4z[a6] < 0 && (a4z[a6] = -a4z[a6] - 1)
			} : function(aF) {
				var a6;
				for (a6 = aF - 2; 1 <= a6; a6--) a4z[a6] >= a4y && (a4z[a6] = 2 * a4y - a4z[a6] - 1)
			})(aF)
		}
	}

	function a5N(a5O, a5P, aF) {
		for (var a6 = 0; a6 < aF; a6++) a5O[a6] = a5P[a6]
	}

	function a5Q(bZ) {
		for (var a6 = 0; a6 < bZ.length - 1; a6++) bZ[a6] = bZ[a6 + 1] - bZ[a6];
		bZ[bZ.length - 1] = bZ[bZ.length - 3]
	}

	function a5R(a5S, gap, a5T) {
		a50.push(a5S), a51.push(gap), a52.push(a5T)
	}
	this.bd = function(zF) {
		! function(zF) {
			var a6;
			for (ak = zF[0], al = zF[1], a4x = zF[2], pZ = zF[3], aL = new Int16Array(ak * al), max = al < ak ? ak : al, a4z = new Int16Array(max), a50 = [], a51 = [], a52 = [], a53 = new Array(ak), a54 = new Array(al), a6 = ak - 1; 0 <=
				a6; a6--) a53[a6] = !1;
			for (a6 = al - 1; 0 <= a6; a6--) a54[a6] = !1;
			a55 = new Int16Array(ak), a56 = new Int16Array(al)
		}(zF),
		function(aF) {
			var a5C = bx.random() % a4y,
				pY = bx.random() % (2 * a4x + 1) - a4x;
			a5D(a5C, pY, aF)
		}(max), a5N(a56, a4z, al), a5F(0, 0, !0, ak);
		var a7, a8, zF = aL[0],
			aF = max,
			pY = bx.random() % (2 * a4x + 1) - a4x;
		for (a5D(zF, pY, aF), a5N(a55, a4z, ak), a5F(0, 0, !1, al), a5Q(a55), a5Q(a56), a5D(aL[ak - 1], a55[ak - 1], al), a5F(ak - 1, 0, !1, al), a5D(aL[ak * (al - 1)], a56[al - 1], ak), a5J(aL[ak * al - 1], ak), a5F(0, al - 1, !0, ak), a53[ak -
				1] = a53[0] = !0, a54[al - 1] = a54[0] = !0, a5R(0, ak, !0), a5R(0, al, !1), ! function() {
				var a5V, a5S;
				for (;;) {
					if (a5V = function() {
							var a6, a5V = a50.length - 1;
							for (a6 = a5V - 1; 0 <= a6; a6--) a51[a6] > a51[a5V] && (a5V = a6);
							return a5V
						}(), a51[a5V] < 5) return;
					a5S = a50[a5V] + aR(a51[a5V], 2), (a52[a5V] ? function(a7) {
						var aF, a5Y, a6, a5Z = 0,
							a5a = 0;
						for (; a5a < al - 1;) {
							for (a6 = a5Z + 1; a6 < al; a6++)
								if (a54[a6]) {
									a5a = a6;
									break
								} aF = a5a - a5Z + 1, a5D(aL[a7 + ak * a5Z], 0 === a5Z ? a55[a7] : a4z[a5Y - 1] - a4z[a5Y - 2], aF), a5J(aL[a5a * ak + a7], aF), a5F(a7, a5Z, !1, aF), a5Y = aF, a5Z = a5a
						}
						a53[a7] = !0
					} : function(a8) {
						var aF, a5Y, a6, a5Z = 0,
							a5a = 0;
						for (; a5a < ak - 1;) {
							for (a6 = a5Z + 1; a6 < ak; a6++)
								if (a53[a6]) {
									a5a = a6;
									break
								} aF = a5a - a5Z + 1, a5D(aL[a8 * ak + a5Z], 0 === a5Z ? a56[a8] : a4z[a5Y - 1] - a4z[a5Y - 2], aF), a5J(aL[a8 * ak + a5a], aF), a5F(a5Z, a8, !0, aF), a5Y = aF, a5Z = a5a
						}
						a54[a8] = !0
					})(a5S), a5R(a5S, a50[a5V] + a51[a5V] - a5S, a52[a5V]), a51[a5V] = a5S - a50[a5V] + 1
				}
			}(), a7 = 0; a7 < ak; a7++)
			if (!a53[a7])
				for (a8 = 0; a8 < al; a8++) a54[a8] || ! function(a7, a8) {
					var value = aL[a8 * ak + a7 - 1] + aL[(a8 - 1) * ak + a7],
						a5c = 2;
					a53[a7 + 1] && (a5c++, value += aL[a8 * ak + a7 + 1]);
					a54[a8 + 1] && (a5c++, value += aL[(a8 + 1) * ak + a7]);
					aL[a8 * ak + a7] = aR(value, a5c)
				}(a7, a8)
	}, this.aN = function() {
		return aL
	}, this.qG = function() {
		aL = null
	}
}

function oi() {
	this.mp = ["", ""], this.f = ["Aceptar", "Borraste a {0}.", "Fuiste borrado por {0}.", "Felicidades! Ganaste el juego.", "{0} ganó el juego.", "{0} rompió el pacto de no agresión.", "¡{0} te está atacando!", "Elige tu posición de inicio!",
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

function oj() {
	this.mp = ["n", "en", "r"], this.f = ["Akzeptieren", "Du hast {0} ausgelöscht.", "Du wurdest von {0} ausgelöscht.", "Herzlichen Glückwunsch! Du hast das Spiel gewonnen.", "{0} hat das Spiel gewonnen.", "{0} hat den Nichtangriffspakt gebrochen.",
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

function a5d() {
	this.ak = 0, this.al = 0, this.gx = 0, this.gy = 0, this.z8 = 0, this.z9 = 0, this.am = 0, this.vi = 0, this.xv = 0, this.a5e = 0, this.a5f = 0, this.a5g = 0, this.a5h = 0, this.aQ = 0, this.a05 = ["Territory", "Balance", "Interest", "Numbers"],
		this.ai = !1, this.a5i = -1, this.a5j = !1, this.a5k = [0, 0], this.m = function() {
			this.ai = !1, this.a5i = -1, this.a5j = !1, this.resize()
		}, this.resize = function() {
			this.ak = ay.ak < 1.369 * ay.al ? ay.ak : 1.369 * ay.al;
			var ia = av.aw.ax() && ay.ak < ay.al ? 1 : av.aw.ax() ? .8 : ay.ak < ay.al ? .65 : .59;
			this.ak = Math.floor(ia * this.ak), this.ak -= av.aw.ax() && ay.ak < ay.al ? 2 * b2.gap + 2 : 0, this.al = Math.floor(this.ak / 1.369), this.a5h = Math.floor(this.al / 150), this.a5h = Math.max(this.a5h, 1.5), this.gx = Math.floor(1 +
					.02 * this.ak), this.gy = Math.floor(1 + .04 * this.ak), this.am = this.gy, this.vi = Math.floor(1 + .075 * this.ak), this.a5e = Math.floor(1 + .1125 * this.ak), this.a5f = Math.floor(this.ak * (av.aw.ax() ? .03 : .029)), this
				.a5f = Math.max(this.a5f, 4), this.a5g = Math.floor(.035 * this.ak), this.a5g = Math.max(this.a5g, 4), this.xv = this.al - 2 * this.am - this.vi - this.a5e, this.ai && this.a5l()
		}, this.bF = function(fb, fc) {
			var a4m, a5m;
			return !!this.ai && (a5m = fb, a4m = fc, fb -= aR(ay.ak - this.ak, 2), fc -= aR(ay.al - this.al, 2), fb < 0 || fc < 0 || fb >= this.ak || fc >= this.al || fb >= this.ak - this.a5e && fc < this.a5e ? 1 < dq.bF(a5m, a4m) || this.s() : fc <
				this.a5e || (fc < this.al - this.vi ? (this.a5j = !0, this.a5i = (fb - 2 * this.gx - this.z8) / this.z9, 3 !== this.aQ && (bA.bE = !0)) : (a5m = (a5m = Math.floor(fb / (this.ak / this.a05.length))) < 0 ? 0 : a5m >= this.a05
					.length ? this.a05.length - 1 : a5m) !== this.aQ && (this.aQ = a5m, this.a5l(), bA.bE = !0)), !0)
		}, this.kU = function() {
			var a5n = Math.floor((this.a5k[0] + f8) / cz),
				a5o = Math.floor((this.a5k[1] + f9) / cz);
			a5n < 1 || a5o < 1 || a5n >= y.aB - 1 || a5o >= y.aC - 1 || console.log(a5n + " " + a5o)
		}, this.fU = function(fb, fc) {
			return this.a5k[0] = fb, this.a5k[1] = fc, !(!this.ai || !this.a5j || (fb -= aR(ay.ak - this.ak, 2), fc = this.a5i, this.a5i = (fb - 2 * this.gx - this.z8) / this.z9, (0 <= this.a5i && this.a5i <= 1 || 0 <= fc && fc <= 1) && (bA.bE = !0),
				0))
		}, this.kI = function() {
			this.a5j && (this.a5j = !1)
		}, this.kY = function() {
			this.ai ? this.s() : this.show()
		}, this.show = function() {
			j3.u6 < 2 || (this.ai = !0, this.a5l())
		}, this.s = function() {
			this.ai = !1, this.a5i = -1, bA.bE = !0
		}, this.a5l = function() {
			this.aQ < 2 ? this.z8 = fx.measureText(q.cg.hX(j3.max[this.aQ]), q.r.ft(0, this.a5f)) : 2 === this.aQ && (this.z8 = fx.measureText(q.cg.oS(6, 2), q.r.ft(0, this.a5f))), this.z9 = this.ak - 2 * this.gx - this.z8 - this.gy
		}, this.fu = function() {
			this.ai && this.a5l()
		}, this.bH = function() {
			this.ai && this.a5p()
		}, this.a5p = function() {
			var a7 = aR(ay.ak - this.ak, 2),
				a8 = aR(ay.al - this.al, 2);
			bI.setTransform(1, 0, 0, 1, a7, a8), bI.fillStyle = i.bL, bI.fillRect(0, this.a5e, this.ak, this.al - this.a5e), this.a5q(), this.wi(), bI.strokeRect(0, 0, this.ak, this.al), q.r.textAlign(bI, 2), bI.font = q.r.ft(0, this.a5f), 0 === this
				.aQ ? this.a5r(j3.a0C, a7, a8) : 1 === this.aQ ? this.a5r(j3.l4, a7, a8) : 2 === this.aQ ? this.a5s(a7, a8) : 3 === this.aQ && (this.a5t(a7, a8), this.a5u(a7, a8)), dq.xn(Math.floor(a7 + this.ak - .725 * this.a5e), Math.floor(a8 +
					.275 * this.a5e), Math.floor(.45 * this.a5e)), bI.setTransform(1, 0, 0, 1, 0, 0)
		}, this.a5q = function() {
			var a6, eu;
			for (bI.lineWidth = this.a5h, q.r.textBaseline(bI, 1), q.r.textAlign(bI, 1), bI.strokeStyle = i.bM, bI.font = q.r.ft(1, this.a5g), eu = this.ak / this.a05.length, bI.fillStyle = i.xt, bI.fillRect(this.aQ * eu, this.al - this.vi, eu, this
					.vi), bI.fillStyle = i.bM, bI.fillRect(0, this.al - this.vi - .5 * this.a5h, this.ak, this.a5h), a6 = 1; a6 <= 3; a6++) bI.fillRect(a6 * eu, this.al - this.vi, this.a5h, this.vi);
			for (a6 = this.a05.length - 1; 0 <= a6; a6--) bI.fillText(this.a05[a6], (a6 + .5) * eu, this.al - .46 * this.vi)
		}, this.wi = function() {
			bI.fillStyle = i.a5v, bI.fillRect(0, 0, this.ak, this.a5e), bI.fillStyle = i.bM, bI.fillRect(0, this.a5e - .5 * this.a5h, this.ak, this.a5h), bI.font = q.r.ft(1, .39 * this.a5e), bI.fillText("Statistics", Math.floor(this.ak / 2), Math
				.floor(.55 * this.a5e))
		}, this.a5r = function(bZ, a7, a8) {
			var mb = j3.max[this.aQ],
				aG = (bI.setTransform(1, 0, 0, 1, a7 + 2 * this.gx + this.z8, a8 + this.am + this.a5e), bI.lineWidth = 2, this.xv / Math.sqrt(mb));
			bI.beginPath(), bI.moveTo(this.z9, this.xv - aG * Math.sqrt(bZ[j3.u6 - 1]));
			for (var a6 = j3.u6 - 2; 0 <= a6; a6--) bI.lineTo(a6 * this.z9 / (j3.u6 - 1), this.xv - aG * Math.sqrt(bZ[a6]));
			bI.stroke();
			a7 = this.xn(bZ, aG, .5);
			a7 < .95 && bI.fillText(q.cg.hX(mb), -this.gx, 0), .05 < Math.abs(a7 - .5) && bI.fillText(q.cg.hX(Math.floor(mb / 4)), -this.gx, Math.floor(this.xv / 2)), .05 < a7 && bI.fillText("0", -this.gx, this.xv)
		}, this.a5s = function(a7, a8) {
			bI.setTransform(1, 0, 0, 1, a7 + 2 * this.gx + this.z8, a8 + this.am + this.a5e), bI.lineWidth = 2;
			var aG = this.xv / Math.max(j3.max[this.aQ], 1);
			bI.beginPath(), bI.moveTo(this.z9, this.xv - aG * j3.l3[j3.u6 - 1]);
			for (var a6 = j3.u6 - 2; 0 <= a6; a6--) bI.lineTo(a6 * this.z9 / (j3.u6 - 1), this.xv - aG * j3.l3[a6]);
			bI.stroke();
			a7 = this.xn(j3.l3, aG, 1), a8 = j3.max[this.aQ] / 100;
			a7 < .95 && bI.fillText(q.cg.oS(a8, 2), -this.gx, 0), .05 < Math.abs(a7 - .5) && bI.fillText(q.cg.oS(a8 / 2, 2), -this.gx, Math.floor(this.xv / 2)), .05 < a7 && bI.fillText(q.cg.oS(0, 2), -this.gx, this.xv)
		}, this.a5t = function(a7, a8) {
			bI.setTransform(1, 0, 0, 1, a7 + .34 * this.ak, a8 + 2 * this.am + this.a5e), q.r.textAlign(bI, 2);
			for (var a5w = this.al - 4 * this.am - this.vi - this.a5e, a6 = 7; 0 <= a6; a6--) bI.fillText(j3.a0E[a6], 0, a6 * a5w / 7);
			bI.setTransform(1, 0, 0, 1, a7 + .39 * this.ak, a8 + 2 * this.am + this.a5e), q.r.textAlign(bI, 0);
			a7 = j3.mV[1];
			for (bI.fillText(q.cg.oS(j3.mV[0] / (10 * (a7 < 1 ? 1 : a7)), 1), 0, 0), a6 = 6; 1 <= a6; a6--) bI.fillText(j3.mV[a6].toString(), 0, a6 * a5w / 7);
			bI.fillText(q.cg.oS(100 * (1 - dV.ev[df.du] / j3.mV[7]), 0), 0, a5w)
		}, this.a5u = function(a7, a8) {
			bI.setTransform(1, 0, 0, 1, a7 + .79 * this.ak, a8 + 2 * this.am + this.a5e), q.r.textAlign(bI, 2);
			var a6, a5w = this.al - 4 * this.am - this.vi - this.a5e;
			for (bI.fillStyle = i.s8, a6 = 2; 0 <= a6; a6--) bI.fillText(j3.a0E[a6 + 8], 0, a6 * a5w / 9);
			for (bI.fillStyle = i.a5x, bI.fillText(j3.a0E[11], 0, 3 * a5w / 9), bI.fillStyle = i.yJ, a6 = 8; 4 <= a6; a6--) bI.fillText(j3.a0E[a6 + 8], 0, a6 * a5w / 9);
			bI.fillStyle = i.s9, bI.fillText(j3.a0E[17], 0, 9 * a5w / 9), bI.fillStyle = i.s8;
			var a5y = q.cg.hX(j3.mV[8] + j3.mV[9] + j3.mV[10] + j3.mV[11]),
				a5z = bI.measureText(a5y).width,
				a7 = (bI.setTransform(1, 0, 0, 1, a7 + .83 * this.ak + a5z, a8 + 2 * this.am + this.a5e), bI.fillText(q.cg.hX(j3.mV[8]), 0, 0), bI.fillText(q.cg.hX(j3.mV[9]), 0, a5w / 9), bI.fillText(q.cg.hX(j3.mV[10]), 0, 2 * a5w / 9), bI
					.fillStyle = i.a5x, bI.fillText(a5y, 0, 3 * a5w / 9), bI.fillStyle = i.yJ, j3.mV[13] - hU.a61(df.du)),
				a5z = (bI.fillText(q.cg.hX(j3.mV[12]), 0, 4 * a5w / 9), bI.fillText(q.cg.hX(a7), 0, 5 * a5w / 9), bI.fillText(q.cg.hX(j3.mV[14]), 0, 6 * a5w / 9), bI.fillText(q.cg.hX(j3.mV[15]), 0, 7 * a5w / 9), bI.fillText(q.cg.hX(j3.mV[16]), 0, 8 *
					a5w / 9), j3.mV[12] + a7 + j3.mV[14] + j3.mV[15] + j3.mV[16] + j3.mV[17]);
			bI.fillStyle = i.s9, bI.fillText(q.cg.hX(a5z), 0, a5w), bI.fillStyle = i.bM
		}, this.xn = function(bZ, aG, a63) {
			var a6, cY, jL;
			return this.a5i < 0 || 1 < this.a5i ? .25 : (a6 = this.a5i * (j3.u6 - 1), jL = bZ[cY = Math.floor(a6)], jL += (a6 - cY) * (bZ[cY < j3.u6 - 1 ? cY + 1 : cY] - jL), bI.strokeStyle = i.a64, .04 < this.a5i && this.a65(0, this.xv - aG * Math
					.pow(jL, a63), a6 * this.z9 / (j3.u6 - 1), this.xv - aG * Math.pow(jL, a63)), .04 < jL / j3.max[this.aQ] && this.a65(a6 * this.z9 / (j3.u6 - 1), this.xv, a6 * this.z9 / (j3.u6 - 1), this.xv - aG * Math.pow(jL, a63)), bI
				.fillStyle = i.a66, bI.beginPath(), bI.arc(a6 * this.z9 / (j3.u6 - 1), this.xv - aG * Math.pow(jL, a63), Math.max(2, .014 * this.al), 0, 2 * Math.PI), bI.fill(), bZ = this.a5i * bA.pg, bZ = 0 === dV.eg[df.du] ? Math.floor(bZ * gp
					.au) : Math.floor(bZ * bA.bC()), bI.fillStyle = i.bM, bI.fillText(1 === a63 ? q.cg.oS(jL / 100, 2) : q.cg.hX(Math.floor(jL)), -this.gx, this.xv - aG * Math.pow(jL, a63)), q.r.textAlign(bI, 1), bI.fillText(gm.mJ(bZ), a6 * this
					.z9 / (j3.u6 - 1), this.xv + this.a5f - (av.aw.ax() ? 2 : 0) - this.a5h), q.r.textAlign(bI, 2), aG * Math.pow(jL, a63) / this.xv)
		}, this.a65 = function(bK, hP, hQ, hR) {
			bI.beginPath(), bI.moveTo(bK, hP), bI.lineTo(hQ, hR), bI.stroke()
		}
}

function a67() {
	var ap, ar;
	this.m = function() {
		ap = 1, ar = 0
	}, this.bD = function() {
		0 < ap && (ar = 0 === ar ? bA.bB + 16 : ar, ap = (ap -= .001 * (bA.bB - ar)) < 0 ? 0 : ap, ar = bA.bB, bA.bE = !0)
	}, this.bH = function() {
		0 < ap && (bI.fillStyle = "rgba(0,0,0," + ap + ")", bI.fillRect(0, 0, ay.ak, ay.al))
	}
}

function a6A() {
	this.eM = 512, this.mX = 15e8, this.mR = 1e9, this.a4h = 512, this.vK = 2, this.du = 0, this.dg = 0, this.a0o = 0, this.nX = 0, this.qT = 0, this.iG = 512, this.mW = 150, this.iP = !0, this.dp = !1, this.gP = 0, this.mN = 0, this.fR = !1, this
		.e7 = !1, this.a6B = !1, this.iA = !1, this.ii = 0, this.eo = 0, this.f3 = !1, this.tg = null, this.a6C = null, this.tf = 30, this.eh = 0, this.ei = 0, this.et = 0, this.gY = function(gE, gI, dS, gF, gG, a6D) {
			this.fR = !1, this.dp = a6D, this.eo = gF, this.f3 = gG, this.iA = this.eo < 7 || 9 === this.eo, this.a0o = this.dg = dS.length, this.iP = 1 === this.a0o, this.eo = 10 === this.eo && this.iP ? 7 : this.eo, this.eo = 8 === this.eo && 2 !==
				this.dg ? 7 : this.eo, this.ii = 9 === this.eo ? 2 : this.eo + 2, this.tf = this.dg <= 2 ? 30 : this.dg <= 50 ? 40 : 50, iB.cP && !iB.iC.n9 ? this.a6B = this.e7 = !1 : this.a6B = this.e7 = this.iA || this.dg < 100, this.tg = this.e7 ?
				new a4O : null, 1 === t1 ? this.iG = this.dg : this.iP ? this.iG = gM.a6E() : this.iG = this.eM, this.nX = this.iG - this.dg, this.qT = 0, this.du = gI, this.eh = 0, this.ei = 0, this.et = 0, bx.bz(gE), iH.m(), dV.m(dS), e9.te
			.po = [], lV.m(dS), this.gP = 1, j3.m(), a6F(), qE.w3(), d0.m(), iv.m(), a25(), dZ.m(dS), gc.m(), dy.m(), eE.m(), na.m(), a6G.bd(), a4P.m(), lm(), hk.m(gE, dS, gF, gG), ep.m(), vc.m(), gf.m(), gq.m(), a6H.putImageData(a6I, 0, 0), gk.m(),
				cx.m(), b8.m(), gj.m(), gl.m(), gn.m(), gm.m(), dq.m(), fx.m(), f6.m(), go.m(), b7.m(), gp.m(), gi.m(), qR.m(), a6J.m(), a6K(), hU.m(), fZ.m(), a6L.m(), qn.m(), a6M.m(), eO.m(), 8 === this.eo ? (this.a6C = new wA, this.a6C.m(dS)) :
				this.a6C = null, bA.a6N(), fT.a6P(), 0 === dV.eg[df.du] && gp.show(!1, !0), fZ.oK(!0), gr.m(), bA.bE = !0, this.dp || this.iP && this.e7 || av.aw.setState(1)
		}, this.m8 = function(a6Q) {
			c8.d4.cW(), this.gP = 0, bA.a6R(), av.aw.setState(0), a6Q || hn.ml.show(), cM.setState(0), g.g2(5, 5)
		}, this.a6S = function() {
			return this.dp ? dq.dr || !gj.a1m : this.iP && (dq.dr || this.e7)
		}, this.a6T = function() {
			return 1 === this.gP && !this.e7
		}
}

function a6U() {
	this.a6V = new eT, this.en = new dP
}

function a6W() {
	let u = q.color;
	this.hT = u.a6X(0, 0, 0), this.fo = u.y9(0, 0, 0, .7), this.xe = u.y9(0, 0, 0, .5), this.oQ = u.y9(0, 0, 0, .85), this.bL = u.y9(0, 0, 0, .75), this.yF = u.y9(0, 0, 0, .6), this.a38 = u.y9(0, 0, 0, .35), this.bM = u.a6X(255, 255, 255), this.a6Y =
		u.y9(255, 255, 255, .3), this.xu = u.y9(255, 255, 255, .6), this.a64 = u.y9(255, 255, 255, .4), this.a6Z = u.y9(255, 255, 255, .25), this.a6a = u.y9(255, 255, 255, .85), this.a2p = u.y9(255, 255, 255, .75), this.a6b = u.y9(255, 255, 255,
		.15), this.yI = u.a6X(128, 128, 128), this.a37 = u.y9(64, 64, 64, .75), this.y7 = u.y9(88, 88, 88, .83), this.s1 = u.y9(60, 60, 60, .85), this.wT = u.y9(80, 60, 60, .85), this.a5x = u.a6X(30, 255, 30), this.s8 = u.a6X(0, 200, 0), this.yK = u
		.a6X(128, 255, 128), this.a6c = u.y9(10, 65, 10, .75), this.a0d = u.y9(0, 255, 0, .6), this.xf = u.y9(0, 255, 0, .5), this.xt = u.y9(0, 200, 0, .5), this.m0 = u.y9(0, 100, 0, .75), this.xo = u.y9(0, 60, 0, .8), this.a6d = u.y9(0, 255, 0, .3),
		this.a6e = u.y9(0, 180, 0, .6), this.he = u.y9(0, 120, 0, .85), this.yL = u.a6X(0, 120, 0), this.wQ = u.y9(0, 70, 0, .85), this.xs = u.a6X(255, 120, 120), this.a30 = u.a6X(255, 160, 160), this.s9 = u.a6X(255, 70, 70), this.yJ = u.a6X(230, 0,
			0), this.a2o = u.y9(220, 0, 0, .6), this.a66 = u.y9(255, 100, 100, .8), this.a6f = u.y9(100, 0, 0, .85), this.zA = u.y9(60, 0, 0, .85), this.a6g = u.y9(200, 0, 0, .6), this.j = u.y9(120, 0, 0, .85), this.a6h = u.a6X(255, 70, 10), this
		.wR = u.y9(0, 60, 60, .85), this.a5v = u.y9(10, 60, 60, .9), this.zc = u.y9(0, 96, 96, .75), this.xr = u.a6X(160, 160, 255), this.a6i = u.y9(0, 40, 90, .75), this.a6j = u.y9(0, 0, 255, .6), this.a6k = u.a6X(200, 200, 255), this.a0f = u.a6X(
			255, 120, 100), this.xg = u.y9(255, 255, 0, .5), this.a6l = u.y9(255, 255, 150, .2), this.a6m = u.a6X(255, 255, 0), this.a6n = u.a6X(255, 255, 200), this.a6o = u.y9(200, 200, 0, .6), this.a6p = u.y9(140, 120, 0, .75), this.a6q = u.y9(180,
			160, 40, .75), this.wS = u.y9(70, 50, 20, .85), this.a6r = u.y9(255, 140, 0, .75), this.a2n = u.y9(0, 0, 0, 0), u = null
}

function lO() {
	this.bD = function() {
		for (var a6s, lN, r0 = eE.d4.r0, qv = eE.d4.qv, qu = eE.d4.qu, a6 = eE.d4.nc - 1; 0 <= a6; a6--) a6s = qv[a6], 0 !== (lN = r0[a6]) && a6s === qu[a6] && (! function(a6, a6v, a5T) {
			var vI, player = eE.d4.qs[a6] >> 3,
				a5T = a6v + dy.no[a5T] << 2,
				a6 = eE.d4.qx[a6];
			if (dZ.eJ(a5T)) vI = df.eM;
			else {
				if ((vI = dZ.eQ(a5T)) === player) return q.ce.j0(player, a6);
				if (!eR(player, vI)) return e9.a0N.iy(player, vI, a6)
			}
			player === df.du && (j3.mV[13] += a6);
			dV.qk[player].push(a6v << 2), hU.vH(player, a6, vI), qR.hG(player, !0)
		}(a6, dy.a6u(a6s), lN - 1), eE.lF.rB(a6))
	}
}

function lK() {
	this.a6w = 32, this.a7 = 0, this.a8 = 0, this.a6x = 0, this.a6y = 0, this.a6z = 4, this.lJ = null, this.rb = new Int16Array(9), this.m = function() {
		this.a6x = 1 + ny.nz(y.aB - 1, this.a6w), this.a6y = 1 + ny.nz(y.aC - 1, this.a6w), this.lJ = new Array(this.a6x * this.a6y), q.cc.a70(this.lJ);
		var a7, a8, rb = this.rb,
			ak = this.a6x;
		for (a7 = -1; a7 <= 1; a7++)
			for (a8 = -1; a8 <= 1; a8++) rb[3 * (1 + a8) + 1 + a7] = a8 * ak + a7
	}, this.nk = function(a72, a6) {
		return this.lJ[a6].push(a72), this.lJ[a6].length - 1
	}, this.rN = function(a73, r2, rC) {
		var a74, a75, r2 = dy.r6(r2),
			rC = dy.r6(rC);
		return r2 === rC ? a73 : (a74 = this.lJ[r2].pop(), this.lJ[r2].length === a73 ? this.nk(a74, rC) : (a75 = this.lJ[r2][a73], this.lJ[r2][a73] = a74, eE.d4.qy[a74] = a73, this.nk(a75, rC)))
	}
}

function a76() {
	var a7, a8, ak, al, a77, a78, a79, a7A, player, bZ;

	function a7E() {
		return function() {
			var a6;
			for (a6 = 0; a6 < 8; a6++)
				if (a7 = aR(ak * bx.random(), bx.value(100)), a8 = aR(al * bx.random(), bx.value(100)), a7K()) return 1;
			return
		}() || function() {
			var fX, fY, hC, a4m, iV, a5m;
			for (fX = aR(ak * bx.random(), bx.value(100)), fY = aR(al * bx.random(), bx.value(100)), hC = 40; 1 <= hC; hC--)
				for (a4m = al - hC; 0 <= a4m; a4m -= 40)
					for (a8 = (a4m + fY) % al, iV = 40; 1 <= iV; iV--)
						for (a5m = ak - iV; 0 <= a5m; a5m -= 40)
							if (a7 = (a5m + fX) % ak, a7K()) return 1;
			return
		}()
	}

	function a7K() {
		for (var dY, ns, gap = aR(a77 - a7A, 2), a7L = a79 + a8 * a77 + gap, a7M = a78 + a7 * a77 + gap, nt = a7L + a7A - 1; a7L <= nt; nt--)
			for (ns = a7M + a7A - 1; a7M <= ns; ns--)
				if (dY = dZ.o0(ns, nt), !dZ.e8(dY) || dZ.a7N(dY)) return;
		return 1
	}

	function a7F(a5m, a4m) {
		a7B(), a7O(a5m - 2, a4m - 2)
	}

	function a7B() {
		dV.eg[player] = 0, dV.l5[player] = 0, dV.ev[player] = dV.lr[player] = 0, dV.qk[player] = [], dV.ql[player] = [], dV.nb[player] = [], dV.qm[player] = [], dV.nu[player] = dV.nv[player] = dV.nw[player] = dV.nx[player] = 0
	}

	function a7O(a5m, a4m) {
		var dY, a6, a7P, a7Q;
		for (dV.eg[player] = 1, player < df.dg ? dV.l5[player] = df.a4h : dV.l5[player] = tA[na.hO[player - df.dg]], dV.nu[player] = a5m + 10, dV.nv[player] = a4m + 10, dV.nx[player] = dV.nw[player] = 0, a7P = a5m; a7P < a5m + 4; a7P++)
			for (a7Q = a4m; a7Q < a4m + 4; a7Q++)(a5m < a7P && a7P < a5m + 3 || a4m < a7Q && a7Q < a4m + 3) && (dY = dZ.o0(a7P, a7Q), dZ.e8(dY)) && (dV.nu[player] = a7P < dV.nu[player] ? a7P : dV.nu[player], dV.nw[player] = a7P > dV.nw[player] ?
				a7P : dV.nw[player], dV.nv[player] = a7Q < dV.nv[player] ? a7Q : dV.nv[player], dV.nx[player] = a7Q > dV.nx[player] ? a7Q : dV.nx[player], bZ[dV.ev[player]] = dY, dV.ev[player]++, dZ.a15(dY, player));
		for (dV.lr[player] = dV.ev[player], a6 = dV.ev[player] - 1; 0 <= a6; a6--) dZ.a7R(bZ[a6], player) ? (dZ.a1E(bZ[a6], player), dV.ql[player].push(bZ[a6])) : dZ.a7S(bZ[a6]) ? (dZ.a1E(bZ[a6], player), dV.nb[player].push(bZ[a6])) : dZ.a7T(bZ[
			a6]) && (dZ.a1E(bZ[a6], player), dV.qm[player].push(bZ[a6]))
	}

	function a7J(a5m, a4m) {
		for (var dY, ns, nt = a4m; a4m - 6 < nt; nt--)
			for (ns = a5m; a5m - 6 < ns; ns--)
				if (dY = dZ.o0(ns, nt), dZ.a7N(dY)) return;
		return 1
	}
	this.m = function() {
		var a6, a5m, a4m;
		if (bZ = new Array(12), a7A = 6, a77 = 10, ak = aR(y.aB, a77), al = aR(y.aC, a77), a78 = aR(y.aB - a77 * ak, 2), a79 = aR(y.aC - a77 * al, 2), df.e7)
			for (a6 = 0; a6 < df.dg; a6++) player = a6, a7B(), dV.eg[player] = 1;
		if (iB.cP && iB.iC.nH) {
			for (player = 0; player < df.eM; player++)
				if (1 !== dV.eg[player]) {
					if (player < df.iG) {
						if (function() {
								var a5m = iB.iC.nH[player] + 1,
									a4m = iB.iC.nJ[player] + 1;
								if (3 < a5m && a5m < y.aB - 5 && 3 < a4m && a4m < y.aC - 5 && dZ.e8(dZ.o0(a5m, a4m)) && a7J(a5m + 3, a4m + 3)) return a7F(a5m + 1, a4m + 1), 1;
								return
							}()) continue;
						if (a7E()) {
							a5m = a78 + a7 * a77 + aR(a77, 2), a4m = a79 + a8 * a77 + aR(a77, 2), a7F(a5m, a4m);
							continue
						}
					}
					a7B()
				}
		} else ! function() {
			var a5m, a4m;
			for (player = 0; player < df.eM; player++) 1 !== dV.eg[player] && (player < df.iG && a7E() ? (a5m = a78 + a7 * a77 + aR(a77, 2), a4m = a79 + a8 * a77 + aR(a77, 2), a7F(a5m, a4m)) : a7B())
		}();
		j3.mV[7] = dV.ev[df.du], j3.mV[8] = dV.l5[df.du]
	}, this.a4Q = function(vI, a7U, a7V) {
		var a6, a5m, a4m, dY, a7, a8;
		for (player = vI, a6 = 0; a6 < 20; a6++)
			for (a5m = a7U + a6; a7U - a6 <= a5m; a5m--)
				for (a4m = a7V + a6; a7V - a6 <= a4m; a4m--)
					if ((a5m === a7U + a6 || a5m === a7U - a6 || a4m === a7V + a6 || a4m === a7V - a6) && 3 < a5m && a5m < y.aB - 5 && 3 < a4m && a4m < y.aC - 5 && dZ.e8(dZ.o0(a5m, a4m)) && a7J(a5m + 3, a4m + 3)) {
						if (0 < dV.ev[player]) {
							for (a8 = a7 = dY = void 0, a7 = dV.nw[player]; a7 >= dV.nu[player]; a7--)
								for (a8 = dV.nx[player]; a8 >= dV.nv[player]; a8--) dY = 4 * (a8 * y.aB + a7), dZ.qp(player, dY) && (dZ.qq(dY), dV.ev[player]--);
							a7B()
						}
						return a7O(a5m - 1, a4m - 1), !0
					} return !1
	}, this.a4T = function(vI) {
		player = vI, a7E() ? a7F(a78 + a7 * a77 + aR(a77, 2), a79 + a8 * a77 + aR(a77, 2)) : a7B()
	}
}

function a7X() {
	var y1, tC, ap, a7Y, al, fw, fontSize, a7Z, a7a, a5h, a7b, aq, bJ, ar, a7c;

	function a7k() {
		bI.drawImage(aq, b2.gap + (df.iA ? b2.gap + ep.a7l() : 0), a7m + 2 * b2.gap)
	}

	function a7d() {
		aq.width = y1[0].width + a5h, aq.height = al + a5h, (bJ = aq.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, y1[0].width + a5h, al + a5h), bJ.translate(Math.floor(a5h / 2), Math.floor(a5h / 2)), bJ.lineWidth = a5h, bJ.fillStyle = 1 === y1[0].a7i ? i.a6a : i.bL, a7n(), bJ.fill(), bJ.strokeStyle = 1 === y1[0].a7i ? i.hT : i.bM,
			a7n(), bJ.stroke(), q.r.textAlign(bJ, 1), q.r.textBaseline(bJ, 1), bJ.fillStyle = 1 === y1[0].a7i ? i.hT : i.bM, bJ.font = fw[0], bJ.fillText(e.f[66 + y1[0].a7h], Math.floor(y1[0].width / 2), Math.floor(.72 * a7Z[0] * al)), bJ.font = fw[
				1], bJ.fillText(y1[0].bV, Math.floor(y1[0].width / 2), Math.floor((a7Z[0] + .48 * a7Z[1]) * al))
	}

	function a7n() {
		bJ.beginPath(), bJ.moveTo(a7b, 0), bJ.lineTo(y1[0].width - a7b, 0), bJ.lineTo(y1[0].width, a7b), bJ.lineTo(y1[0].width, al - a7b), bJ.lineTo(y1[0].width - a7b, al), bJ.lineTo(a7b, al), bJ.lineTo(0, al - a7b), bJ.lineTo(0, a7b), bJ.closePath()
	}
	this.m = function() {
		tC = 4, ap = a7Y = ar = 0, y1 = [], fw = new Array(2), fontSize = new Array(2), (a7Z = new Array(2))[0] = .3, a7Z[1] = .7, a7a = new Array(4), aq = document.createElement("canvas"), a7c = bA.bB + 2e3, this.resize()
	}, this.resize = function() {
		var a6, ak;
		for (al = Math.floor((av.aw.ax() ? .0725 : .058) * ay.az), fontSize[0] = Math.floor(.85 * a7Z[0] * al), fontSize[1] = Math.floor(.85 * a7Z[1] * al), fw[0] = q.r.ft(1, fontSize[0]), fw[1] = q.r.ft(1, fontSize[1]), a6 = a7a.length - 1; 0 <=
			a6; a6--) a7a[a6] = this.measureText(e.f[66 + a6] + "000", fw[0]);
		if (a5h = Math.floor(1 + .05 * al), a7b = Math.floor(.2 * al), 0 < y1.length) {
			for (a6 = y1.length - 1; 0 <= a6; a6--) ak = this.measureText(y1[a6].bV + "00", fw[1]), y1[a6].width = ak < a7a[a6] ? a7a[a6] : ak;
			a7d()
		}
	}, this.bD = function() {
		0 !== tC && (4 === tC ? bA.bB > a7c && (tC = 0, 1 === df.gP) && fx.a7f(y.iC.nB[y.z].name, 3, 1, 9) : (1 === tC ? (0 === ap && (a7d(), ap = 1e-4), 1 <= (ap += .002 * (bA.bB - ar)) && (a7Y = 0, tC = 2, ap = 1), bA.bE = !0) : 2 === tC ? ((
			a7Y += (bA.bB - ar) / 1e3) > y1[0].a7j || 1 < a7Y && 1 < y1.length) && (tC = 3) : 3 === tC && ((ap -= .002 * (bA.bB - ar)) <= 0 && (ap = 0, y1.shift(), tC = 0 < y1.length ? 1 : 0), bA.bE = !0), ar = bA.bB))
	}, this.measureText = function(bV, fw) {
		return bI.font = fw, Math.floor(bI.measureText(bV).width)
	}, this.vH = function(zj, a6) {
		this.a7f(dV.hY[zj], a6, 1, 0 === a6 ? 3 : 7)
	}, this.a7f = function(bV, a7h, a7i, a7j) {
		var ak = (ak = this.measureText(bV + "00", fw[1])) < a7a[a7h] ? a7a[a7h] : ak;
		y1.push({
			bV: bV,
			width: ak,
			a7h: a7h,
			a7i: a7i,
			a7j: a7j
		}), 0 === tC && (ap = 0, tC = 1, ar = bA.bB)
	}, this.bH = function() {
		0 !== tC && 0 !== ap && (ap < 1 ? (bI.globalAlpha = ap, a7k(), bI.globalAlpha = 1) : a7k())
	}
}

function a7o() {
	var a7p, a7q, size, vI, hO, id;

	function a7r(player) {
		return player < df.dg ? a7p * player : a7p * df.dg + a7q * (player - df.dg)
	}
	this.m = function() {
		a7p = df.dg < 16 ? 12 : 8, a7q = 4;
		var aF = a7r(df.eM);
		size = new Uint8Array(df.eM), vI = new Uint16Array(aF), hO = new Uint32Array(aF), id = new Uint16Array(aF)
	}, this.vX = function(zj, a7s) {
		var a7t = this.a7u(zj, a7s);
		this.a7v(zj, a7s, 0), a7t = q.ce.j0(zj, a7t), zj === df.du && (j3.mV[13] -= a7t)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.qb = function(player, a7s) {
		var a2O, a7s = function(player, a7s) {
			var a6, mb = a7r(player);
			for (a6 = size[player] - 1; 0 <= a6; a6--)
				if (0 === id[mb + a6] && vI[mb + a6] === a7s) return a6;
			return size[player]
		}(player, a7s);
		a7s !== size[player] && (a2O = hO[a7r(player) + a7s], this.zt(player, a7s), this.vH(player, a2O, df.eM))
	}, this.vN = function(player, a7s) {
		for (var mb = a7r(player), a6 = size[player] - 1; 0 <= a6; a6--)
			if (0 === id[mb + a6] && vI[mb + a6] === a7s) return !0;
		return !1
	}, this.vO = function(player) {
		return player < df.dg ? size[player] < a7p : size[player] < a7q
	}, this.yV = function(player) {
		return size[player]
	}, this.ya = function(player, a6) {
		return vI[a7r(player) + a6]
	}, this.yZ = function(player, a6) {
		return id[a7r(player) + a6]
	}, this.hW = function(player, a02) {
		for (var mb = a7r(player), a6 = size[player] - 1; 0 <= a6; a6--)
			if (id[mb + a6] === a02) return a6;
		return -1
	}, this.hV = function(player, a6) {
		return hO[a7r(player) + a6]
	}, this.a7u = function(player, a7s) {
		for (var mb = a7r(player), a6 = size[player] - 1; 0 <= a6; a6--)
			if (0 === id[mb + a6] && vI[mb + a6] === a7s) return hO[mb + a6];
		return 0
	}, this.qZ = function(player) {
		for (var mb = a7r(player), aL = 0, a6 = size[player] - 1; 0 <= a6; a6--) aL += hO[mb + a6];
		return aL
	}, this.a61 = function(player) {
		for (var mb = a7r(player), aL = 0, a6 = size[player] - 1; 0 <= a6; a6--) 0 === id[mb + a6] && (aL += hO[mb + a6]);
		return aL
	}, this.a7x = function(player) {
		for (var mb = a7r(player), il = 0, a6 = size[player] - 1; 0 <= a6; a6--) 0 < id[mb + a6] && il++;
		return il
	}, this.a7v = function(player, a7s, a2O) {
		for (var mb = a7r(player), a6 = size[player] - 1; 0 <= a6; a6--) 0 === id[mb + a6] && vI[mb + a6] === a7s && (hO[mb + a6] = a2O)
	}, this.a01 = function(player, a6, a2O) {
		hO[a7r(player) + a6] = a2O
	}, this.vH = function(player, a2O, a7s) {
		var a6, mb = a7r(player);
		for (a7s === df.du && j3.mV[player < df.dg ? 6 : 5]++, a6 = size[player] - 1; 0 <= a6; a6--)
			if (0 === id[mb + a6] && vI[mb + a6] === a7s) return hO[mb + a6] += a2O, void(hO[mb + a6] = hO[mb + a6] > df.mX ? df.mX : hO[mb + a6]);
		vI[mb + size[player]] = a7s, hO[mb + size[player]] = a2O, id[mb + size[player]] = 0, size[player]++, player < df.dg && (a7s === df.du ? f6.qi(player, 5) : player === df.du && fZ.a4t(a7s))
	}, this.a7y = function(player, a2O, a02) {
		var mb = a7r(player);
		dV.eg[player] = 2, vI[mb + size[player]] = 0, hO[mb + size[player]] = a2O, id[mb + size[player]] = a02, size[player]++
	}, this.zt = function(player, aQ) {
		var hC, mb;
		if (0 !== size[player])
			for (mb = a7r(player), size[player]--, hC = aQ; hC < size[player]; hC++) vI[mb + hC] = vI[mb + hC + 1], hO[mb + hC] = hO[mb + hC + 1], id[mb + hC] = id[mb + hC + 1]
	}, this.qV = function(player) {
		for (var hC, mb, qU = [], a6 = dR - 1; 0 <= a6; a6--)
			for (mb = a7r(dT[a6]), hC = size[dT[a6]] - 1; 0 <= hC; hC--)
				if (0 === id[mb + hC] && vI[mb + hC] === player) {
					qU.push(dT[a6]);
					break
				} return qU
	}
}

function a7z() {
	let a80 = [0, 0],
		a81 = [0, 0];

	function a83(aQ) {
		return 3 !== a80[aQ] && 1 !== a81[aQ] && (a81[aQ] = 1, a80[aQ]++, aZ.d6.aX(119, (a80[0] << 2) + a80[1]), 1)
	}
	this.m = function() {
		var aL = aZ.af.data[119].value;
		a80[0] = aL >> 2, a80[1] = 3 & aL
	}, this.a82 = function() {
		a83(0) && f6.a84(e.lw(130))
	}, this.a85 = function() {
		a83(1) && f6.a84(e.lw(131))
	}
}

function a86() {
	var a87, bZ;
	this.m = function() {
		for (var a6 = (bZ = new Uint16Array(101)).length - 1; 0 <= a6; a6--) bZ[a6] = aR(32768 * a6, 100);
		this.bz(0)
	}, this.value = function(dY) {
		return bZ[dY]
	}, this.by = function() {
		return aR(a87 - 1, 2)
	}, this.bz = function(bw) {
		a87 = 2 * bw % 32768 + 1
	}, this.random = function() {
		return a87 = 167 * a87 % 32768
	}, this.tQ = function(a88) {
		return aR(a88 * this.random(), 32768)
	}, this.qf = function(dY) {
		return 0 !== dY && this.random() < this.value(dY)
	}
}

function a89() {
	this.no = new Int16Array(4), this.a8A = new Int16Array(4), this.m = function() {
		var a6;
		for (this.no[0] = -y.aB, this.no[1] = 1, this.no[2] = y.aB, this.no[3] = -1, a6 = 0; a6 < 4; a6++) this.a8A[a6] = 4 * this.no[a6]
	}, this.a8B = function(a8C, a8D) {
		var fi = this.a4R(a8D) - this.a4R(a8C),
			a8D = this.a4S(a8D) - this.a4S(a8C),
			a8C = fi >>> 31 << 1;
		return 5 + a8C + (1 - a8C) * (1 - (a8D >>> 31 << 1)) * (Math.abs(fi) - Math.abs(a8D) >>> 31) & 3
	}, this.a8F = function(a8C, a8D, a5T) {
		return a5T % 2 == 0 ? a5T + (1 - a5T) * (1 - (this.a4R(a8D) - this.a4R(a8C) >>> 31 << 1)) + 4 & 3 : a5T + (2 - a5T) * (1 - (this.a4S(a8D) - this.a4S(a8C) >>> 31 << 1)) + 4 & 3
	}, this.a8G = function(dY, e2) {
		for (var a8D, a8H, a8J = dV.nb[dY], aF = a8J.length, ak = y.aB, a8K = this.a4R(e2), a8L = this.a4S(e2), a8M = a8J[0] >> 2, min = this.a8N(a8K, a8L, a8M), a6 = 1; a6 < aF; a6++)(a8H = (a8H = a8K - (a8D = a8J[a6] >> 2) % ak) * a8H + (a8H =
			a8L - ~~((.5 + a8D) / ak)) * a8H) < min && (min = a8H, a8M = a8D);
		return a8M
	}, this.a8O = function(player, e4) {
		return !dZ.eJ(e4) && player === dZ.eQ(e4)
	}, this.a8N = function(dx, e0, e2) {
		return (dx -= this.a4R(e2)) * dx + (e0 -= this.a4S(e2)) * e0
	}, this.a8P = function(fN, fQ, a9) {
		fN = this.a8Q(fN) - this.a8R(a9), fQ = this.a8S(fQ) - this.a8T(a9);
		return Math.sqrt(fN * fN + fQ * fQ)
	}, this.a8U = function(a8C, a8D) {
		var fX = this.a4R(a8C) - this.a4R(a8D),
			a8C = this.a4S(a8C) - this.a4S(a8D);
		return Math.sqrt(fX * fX + a8C * a8C)
	}, this.oR = function(dY, oD) {
		return ny.nz(oD * dV.l5[dY], 1e3)
	}, this.a8Q = function(fN) {
		return 16 * (fN + f8) / cz
	}, this.a8S = function(fQ) {
		return 16 * (fQ + f9) / cz
	}, this.dz = function(fN) {
		return Math.floor((fN + f8) / cz)
	}, this.e1 = function(fQ) {
		return Math.floor((fQ + f9) / cz)
	}, this.e6 = function(dx, e0) {
		return 1 <= dx && 1 <= e0 && dx < y.aB - 1 && e0 < y.aC - 1
	}, this.a4R = function(e2) {
		return e2 % y.aB
	}, this.a4S = function(e2) {
		return ny.nz(e2, y.aB)
	}, this.e3 = function(dx, e0) {
		return e0 * y.aB + dx
	}, this.vF = function(e2) {
		var dx = this.a4R(e2),
			e2 = this.a4S(e2);
		return 0 < dx && dx < y.aB - 1 && 0 < e2 && e2 < y.aC - 1
	}, this.e5 = function(e2) {
		return e2 << 2
	}, this.a8V = function(e2) {
		return y.aB * this.a4S(e2) * 256 + (this.a4R(e2) << 4)
	}, this.r3 = function(e2) {
		return this.a8V(e2) + 8 + (y.aB << 7)
	}, this.a6u = function(a9) {
		return y.aB * (this.a8T(a9) >> 4) + (this.a8R(a9) >> 4)
	}, this.r6 = function(a9) {
		a9 = this.a6u(a9);
		return (this.a4R(a9) >> 5) + eE.lJ.a6x * (this.a4S(a9) >> 5)
	}, this.a8R = function(a9) {
		return a9 % (y.aB << 4)
	}, this.a8T = function(a9) {
		return ny.nz(a9, y.aB << 4)
	}, this.a8W = function(e2, a5T) {
		return e2 + this.no[a5T]
	}, this.a8X = function(e4, a5T) {
		return e4 + this.a8A[a5T]
	}
}

function a8Y() {
	var y1, al, xi, a8Z, a8a, a8b, a8c, a8d, a8e;

	function bG() {
		return b8.oT(f6.a31()) ? gl.ai ? b8.a8 - b8.al - 2 * xi : b8.a8 - xi : gj.oT(f6.a32()) ? gl.ai ? gj.bG() - b8.al - 2 * xi : gj.bG() - xi : gl.ai ? ay.al - b8.al - (oI.oJ() + 1) * xi : ay.al - oI.oJ() * b2.gap
	}

	function a8k(eu, bV, id, dY, a8m, a8n, rT, a8o, a8p) {
		var a6, bJ, km, jd, bZ, a8v = void 0 !== a8p,
			ak = Math.floor(fx.measureText(bV, f6.fw) + 1.5 * a8Z + (a8v ? al : 1.5 * a8Z));
		if (bA.bE = !0, ak + xi > ay.ak && !a8v && 50 !== id && 20 < bV.length) a8k(eu, (bZ = q.cg.v8(bV))[0], id, dY, a8m, a8n, rT, a8o, a8p), a8k(eu, bZ[1], id, dY, a8m, a8n, rT, a8o, a8p);
		else if (bZ = ak + (50 === id ? a8a : 0), (km = document.createElement("canvas")).width = ak, km.height = al, (bJ = km.getContext("2d", {
				alpha: !0
			})).font = f6.fw, q.r.textBaseline(bJ, 1), q.r.textAlign(bJ, 0), bJ.clearRect(0, 0, ak, al), bJ.fillStyle = a8n, bJ.fillRect(0, 0, ak, al), bJ.fillStyle = a8m, bJ.fillText(bV, Math.floor(1.5 * a8Z), Math.floor(al / 2)), a8v && (bJ
				.imageSmoothingEnabled = !0, xA.p4.xG(a8p, bJ, ak - al, 0, al)), 0 === (jd = {
				bB: eu,
				bV: bV,
				id: id,
				player: dY,
				aq: km,
				a8m: a8m,
				a8n: a8n,
				ak: ak,
				a8r: bZ,
				rT: rT,
				a8o: a8o,
				a8p: a8p
			}).bB || 0 < y1.length && 0 < y1[0].bB) y1.unshift(jd);
		else {
			for (a6 = 1; a6 < y1.length; a6++)
				if (0 < y1[a6].bB) return void y1.splice(a6, 0, jd);
			y1.push(jd)
		}
	}

	function a8l(kQ, gS, iV) {
		return "rgb(" + kQ + "," + gS + "," + iV + ")"
	}

	function a8w(id, il) {
		for (var aF = y1.length, a6 = 0; a6 < aF; a6++) y1[a6].id === id && il-- <= 0 && (y1.splice(a6, 1), a6--, aF--)
	}

	function a8x(id, player) {
		for (var qd = !1, a6 = y1.length - 1; 0 <= a6; a6--) y1[a6].id !== id || player !== df.eM && y1[a6].player !== player || (y1.splice(a6, 1), qd = !0);
		return qd
	}

	function a9G(bV) {
		a8k(340, bV, 6, 0, a8l(215, 245, 255), i.bL, -1, !1)
	}
	this.a8f = "", this.m = function() {
		var self;
		a8d = 0, a8c = av.aw.ax() ? 7 : 12, a8b = {
			dS: [0, 0, 0],
			a8g: [0, 0, 0],
			a7j: [220, 180, 180],
			pO: [0, 0, 0],
			u: [0, 0, 0]
		}, y1 = [], this.resize(), df.e7 && this.qi(0, 18), a9G(e.lw(37, [y.iC.nB[y.z].name])), a9G(e.lw(38, [y.aB - 2, y.aC - 2])), a9G(e.lw(39, [qE.vn], {
			on: [0]
		})), qE.vn !== qE.vo && a9G(e.lw(40, [qE.vo, qE.vo / qE.vn], {
			on: [0],
			oo: [1]
		})), 0 < qE.vp && a9G(e.lw(41, [qE.vp, qE.vp / qE.vn], {
			on: [0],
			oo: [1]
		})), 0 < qE.vq && a9G(e.lw(42, [qE.vq, qE.vq / qE.vn], {
			on: [0],
			oo: [1]
		})), 10 === df.eo && a8k(120, e.lw(43), 6, 0, a8l(235, 255, 120), i.bL, -1, !1), 0 !== (self = this).a8f.length && (a8k(200, self.a8f, 0, 0, i.bM, i.bL, -1, !1), self.a8f = ""), this.a8j()
	}, this.a8j = function() {
		var a6, aF;
		if (iB.cP)
			for (aF = iB.iC.nF.length, a6 = 0; a6 < aF; a6++) a8k(400, iB.iC.nF[a6], 6, 0, a8l(255, 255, 255), i.bL, -1, !1)
	}, this.resize = function() {
		var yc, a6;
		if (al = (al = Math.floor((av.aw.ax() ? .031 : .0249) * ay.az)) < 10 ? 10 : al, this.fontSize = Math.floor(2 * al / 3), this.fw = q.r.ft(1, this.fontSize), xi = b2.gap, a8Z = Math.floor(al / 5), 0 < y1.length)
			for (yc = y1, y1 = [], a6 = yc.length - 1; 0 <= a6; a6--) a8k(yc[a6].bB, yc[a6].bV, yc[a6].id, yc[a6].player, yc[a6].a8m, yc[a6].a8n, yc[a6].rT, yc[a6].a8o, yc[a6].a8p);
		this.a8q()
	}, this.a8q = function() {
		a8e = document.createElement("canvas");
		var bV = e.lw(0),
			bJ = (a8a = fx.measureText(bV, this.fw) + 5 * a8Z, a8e.height = al, a8e.width = a8a, a8e.getContext("2d", {
				alpha: !0
			}));
		bJ.font = this.fw, q.r.textBaseline(bJ, 1), q.r.textAlign(bJ, 1), bJ.clearRect(0, 0, a8a, al), bJ.fillStyle = i.m0, bJ.fillRect(0, 0, a8a, al), bJ.fillStyle = i.bM, bJ.fillText(bV, Math.floor(a8a / 2), Math.floor(al / 2))
	}, this.a31 = function() {
		var aF;
		return gl.ai ? gl.ak : 0 === (aF = y1.length) ? 0 : 1 === aF ? y1[0].a8r : b1(y1[0].a8r, y1[1].a8r)
	}, this.a32 = function() {
		var aF = y1.length;
		return gl.ai ? aF ? b1(gl.ak, y1[0].a8r) : gl.ak : 0 === aF ? 0 : 1 === aF ? y1[0].a8r : 2 === aF ? b1(y1[0].a8r, y1[1].a8r) : b1(b1(y1[0].a8r, y1[1].a8r), y1[2].a8r)
	}, this.bF = function(a7, a8) {
		for (var fK, a8s = bG(), a6 = y1.length - 1; 0 <= a6; a6--)
			if ((fK = a8s - (a6 + 1) * al) <= a8 && a8 < fK + al) return 50 === y1[a6].id ? a7 >= ay.ak - a8a - xi - y1[a6].ak && (a7 >= ay.ak - a8a - xi ? e9.ce.a8t(y1[a6].player) : fT.a8u(y1[a6].player, 800, !1, 0), !0) : a7 >= ay.ak - y1[a6]
				.ak - xi && (736 === y1[a6].id ? window.open("https://" + y1[a6].bV, "_blank") : y1[a6].a8o && (fT.a8u(y1[a6].player, 800, !1, 0), 0 <= y1[a6].rT) && (fK = y1[a6].rT, y1[a6].rT = y1[a6].player, y1[a6].player = fK), !0);
		return !1
	}, this.f7 = function(eu, bV, id, dY, a8m, a8n, rT, a8o, a8p) {
		a8k(eu, bV, id, dY, a8m, a8n, rT, a8o, a8p)
	}, this.a84 = function(m4) {
		a8k(300, m4, 252, 0, i.bM, i.bL, -1, !1)
	}, this.a4V = function(id) {
		for (var a6 = y1.length - 1; 0 <= a6; a6--) y1[a6].id === id && (y1[a6].bB = 1)
	}, this.qi = function(player, id) {
		0 === id ? (j3.mV[player < df.dg ? 4 : 3]++, fx.vH(player, 0), a8w(423, 0), a8k(160, e.lw(1, [dV.hY[player]]), 423, player, "rgb(10,220,10)", i.bL, -1, !1)) : 1 === id ? (a8x(50, df.eM), fx.vH(player, 1), a8k(360, e.lw(2, [dV.hY[
			player]]), 0, player, i.a6h, i.bL, -1, !0), fT.a8u(player, 2700, !1, 0)) : 2 === id ? (fx.vH(player, 2), a8k(0, e.lw(3), 0, player, "rgb(10,255,255)", i.bL, -1, !0), fT.a8u(player, 2700, !1, 0)) : 3 === id ? (fx.vH(player, 2),
			a8k(0, e.lw(4, [dV.hY[player]]), 0, player, i.bM, i.bL, -1, !0), fT.a8u(player, 2700, !1, 0)) : 4 === id ? this.qj(1, player, player) : 5 === id ? 2 !== dV.qh[player] && dZ.da(df.du) && (function(id, a88) {
			var a6, a95 = 0,
				aF = y1.length;
			for (a6 = 0; a6 < aF; a6++)
				if (y1[a6].id === id && a88 <= ++a95) return y1.splice(a6, 1)
		}(1, 5), fZ.a4t(player) ? a8k(180, e.lw(5, [dV.hY[player]]), 1, player, a8l(255, 200, 180), i.bL, -1, !0) : (a8w(573, 0), a8k(180, e.lw(6, [dV.hY[player]]), 573, player, i.a6h, i.bL, -1, !0))) : 18 === id ? a8k(255, e.lw(7), 18, 0, i
			.bM, i.bL, -1, !1) : 21 === id ? a8k(220, e.lw(8), id, 0, i.bM, i.bL, -1, !1) : 22 === id ? this.qj(2, player, player) : 59 === id && a8k(0, e.lw(9), id, 0, i.a6n, i.bL, 0, !1)
	}, this.m2 = function(m4) {
		a8k(200, e.lw(10, [m4]), 94, 0, i.bM, i.a6f, -1, !1)
	}, this.a8z = function(a90) {
		if (df.du === a90 && !df.iP)
			wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter),
			a8k(0, "Your Win Count is now " + wins_counter, 3, a90, i.bM, i.bL, -1, !0);
		fx.vH(a90, 2), df.dg < 100 ? a8k(0, e.lw(4, [dV.hY[a90]]), 3, a90, i.bM, i.bL, -1, !0) : a8k(0, e.lw(12, [dV.hY[a90]]), 3, a90, i.bM, i.bL, -1, !0), fT.a8u(a90, 2700, !1, 0)
	}, this.a91 = function(e4) {
		var a5y = "(" + dy.a4R(e4 >> 2) + ", " + dy.a4S(e4 >> 2) + ")",
			a8o = !1,
			player = 0;
		dZ.e8(e4) ? dZ.eJ(e4) ? a5y = e.lw(13, [a5y]) : (player = dZ.eQ(e4), a5y = e.lw(14, [q.bJ.se(dV.ih[player], q.r.ft(0, 10), 150), q.cg.hX(dV.l5[player]), q.cg.hX(dV.ev[player]), a5y]), a8o = !0) : a5y = dZ.eC(e4) ? e.lw(15, [a5y]) : e.lw(
			16, [a5y]), bA.bE = !0, a8w(55, 0), a8k(220, a5y, 55, player, i.bM, i.bL, -1, a8o)
	}, this.a92 = function(a93) {
		var mb = eE.d4,
			player = mb.qs[a93] >> 3;
		bA.bE = !0, a8w(55, 0), a8k(220, e.lw(17, [dV.hY[player], mb.qx[a93]], {
			on: [1]
		}), 55, player, i.bM, i.bL, -1, !0)
	}, this.a4G = function(c9, t4, vY) {
		c9 === df.du ? a8k(175, e.lw(18, [dV.hY[t4]]), 1001, t4, a8l(200, 255, 210), i.bL, -1, !0, vY) : this.a94(c9, vY)
	}, this.a94 = function(c9, vY) {
		a8w(1e3, 0), a8k(175, e.lw(19, [dV.hY[c9]]), 1e3, c9, i.bM, "rgba(5,60,25,0.9)", -1, !0, vY)
	}, this.a96 = function() {
		var m4;
		df.ei ? (m4 = e.lw(20), fx.a7f(e.lw(21), 2, 1, 12), a8k(0, m4, 40, 0, "rgb(10,220,10)", i.bL, -1, !1)) : (m4 = e.lw(22), fx.a7f(e.lw(23), 2, 0, 16), a8k(0, m4, 41, 0, i.bM, i.bL, -1, !1)), fT.a97(2700)
	}, this.wB = function(dS) {
		a8k(300, dS[0].name + " [" + df.a6C.wH(dS[0].wE) + "] vs " + dS[1].name + " [" + df.a6C.wH(dS[1].wE) + "]", 65, 0, i.hT, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a98 = function(m4) {
		a8k(200, m4, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a2t = function(a2l) {
		a8k(0, e.lw(a2l ? 24 : 129), 247, 0, i.a6m, i.bL, -1, !1)
	}, this.wJ = function(dS, wG, wI, a99) {
		a8k(0, dS[0].name + ": " + df.a6C.wH(dS[0].wE) + " -> " + wG, 66, 0, i.bM, a99[0], -1, !1), a8k(0, dS[1].name + ": " + df.a6C.wH(dS[1].wE) + " -> " + wI, 66, 1, i.bM, a99[1], -1, !1)
	}, this.a9A = function(player, id) {
		0 === id ? a8x(50, player) ? (a8k(128, e.lw(25, [dV.hY[player]]), 52, player, a8l(180, 255, 180), i.bL, -1, !0), fZ.vZ(player, 2, 255)) : a8k(384, e.lw(26, [dV.hY[player]]), 51, player, a8l(210, 210, 255), i.bL, -1, !0) : a8x(51,
			player) ? (a8k(128, e.lw(27, [dV.hY[player]]), 52, player, i.bM, "rgba(60,120,10,0.9)", -1, !0), fZ.vZ(player, 2, 255)) : (a8k(384, e.lw(28, [dV.hY[player]]), 50, player, i.bM, "rgba(90,90,90,0.9)", -1, !0), fZ.vZ(player, 2, 96))
	}, this.a9B = function(dS, target) {
		var color = a8l(210, 255, 210);
		1 < dS.length ? a8k(230, e.lw(29, [dS.length, dV.hY[target]]), 66, target, color, i.bL, -1, !0) : a8k(230, e.lw(30, [dV.hY[dS[0]], dV.hY[target]]), 66, dS[0], color, i.bL, target, !0)
	}, this.a9C = function(player, target) {
		a8k(230, e.lw(31, [dV.hY[player], dV.hY[target]]), 66, player, i.bM, "rgba(75,65,5,0.9)", target, !0)
	}, this.a2x = function(id, player) {
		a8x(id, player)
	}, this.a4E = function() {
		var aQ;
		100 <= dV.l5[df.du] || (-1 === (aQ = function(id) {
			for (var a6 = y1.length - 1; 0 <= a6; a6--)
				if (y1[a6].id === id) return a6;
			return -1
		}(143)) ? a8k(80, e.lw(32), 143, 0, i.bM, i.bL, -1, !1) : y1[aQ].bB = 80)
	}, this.j4 = function(a9E, a9F, player) {
		2 !== dV.qh[df.du] && (a8k(200, e.lw(33, [a9E, dV.hY[player]], {
			on: [0]
		}), 30, player, "rgb(190,255,190)", i.bL, -1, !0), a9F) && a8k(30, e.lw(34, [a9F], {
			on: [0]
		}), 30, 0, i.bM, i.bL, -1, !1)
	}, this.zv = function(a9E, player) {
		2 !== dV.qh[df.du] && (a8w(31, 0), 2 === dV.qh[player] || player >= df.dg ? a8k(150, e.lw(36, [dV.hY[player], a9E], {
			on: [1]
		}), 31, player, i.hT, "rgba(205,205,205,0.9)", -1, !0) : a8k(150, e.lw(35, [dV.hY[player], a9E], {
			on: [1]
		}), 31, player, i.hT, "rgba(205,255,205,0.9)", -1, !0))
	}, this.a9H = function(a0c) {
		for (var u = bA.bC(), a6 = 2; 0 <= a6; a6--) 0 < a8b.pO[a6] && (a0c || a8b.u[a6] < u - 220) && this.a9I(a6)
	}, this.a9I = function(id) {
		var bV, aF = a8b.pO[id],
			player = a8b.dS[id];
		a8b.pO[id] = 0, 1 === aF ? (bV = 0 === id ? e.lw(47, [dV.hY[player], dV.hY[a8b.a8g[0]]]) : e.lw(47 + id, [dV.hY[player]]), a8w(7, 0), a8k(a8b.a7j[id], bV, 7, a8b.a8g[id], i.bM, i.bL, -1, !0)) : 2 <= aF && (bV = e.lw(44 + id, [dV.hY[
			player], aF - 1]), a8w(7, 0), a8k(a8b.a7j[id], bV, 7, player, i.bM, i.bL, -1, !1))
	}, this.qj = function(id, rS, rT) {
		var u = bA.bC(),
			aF = a8b.pO[id] + 1;
		a8b.pO[id]++, a8b.dS[id] = rS, a8b.a8g[id] = rT, 1 === aF && (a8b.u[id] = u), (1 === aF && (df.a0o < 32 || 2 === df.gP) || 1 < aF && (a8b.u[id] < u - 140 || 2 === df.gP)) && this.a9I(id)
	}, this.bD = function() {
		for (var kz = (kz = y1.length - a8c) <= 1 ? 1 : kz * kz, a6 = y1.length - 1; 0 <= a6; a6--) 0 < y1[a6].bB && (y1[a6].bB -= kz, y1[a6].bB <= 0) && (bA.bE = !0, y1.splice(a6, 1));
		! function() {
			var il, a6;
			if (128 !== a8d && !(++a8d < 128))
				for (il = 5, a6 = dR - 1; 0 <= a6; a6--) 1 === dV.qh[dT[a6]] && 0 < il-- && a8k(240, e.lw(50, [dV.hY[dT[a6]]]), 1, dT[a6], i.hT, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a9H(!1)
	}, this.bH = function() {
		for (var a4m, a8 = bG(), a6 = y1.length - 1; 0 <= a6; a6--) a4m = a8 - (a6 + 1) * al, 50 === y1[a6].id ? (bI.drawImage(y1[a6].aq, ay.ak - y1[a6].ak - a8a - xi, a4m), bI.drawImage(a8e, ay.ak - a8a - xi, a4m)) : bI.drawImage(y1[a6].aq, ay
			.ak - y1[a6].ak - xi, a4m)
	}
}

function a9K() {
	var a9L, a9M, a9N;
	a9L = [32, 65, 191, 913, 931], a9M = [64, 127, 688, 930, 1155], a9N = new Array(a9L.length + 1);
	for (var a6 = 0; a6 < a9N.length; a6++) {
		a9N[a6] = 0;
		for (var hC = a6 - 1; 0 <= hC; hC--) a9N[a6] += a9M[hC] - a9L[hC]
	}

	function a9T(u) {
		for (var a6 = a9L.length - 1; 0 <= a6; a6--)
			if (u >= a9L[a6] && u < a9M[a6]) return a6;
		return -1
	}
	this.a1I = function(bV) {
		return 0 !== (bV = bV.trim()).indexOf("Bot ") && 0 !== bV.indexOf("[Bot] ") && function(bV, a9Q, a9R) {
			var aF = (bV = bV.trim()).length;
			if (aF < a9Q || a9R < aF) return !1;
			for (var u, a9S = 0, a6 = 0; a6 < aF; a6++)
				if (u = bV.charCodeAt(a6), a9S += 65 <= u && u <= 90 || 1040 <= u && u <= 1071 ? 1 : 0, -1 === a9T(u)) return !1;
			if (3 < a9S && a9S > Math.floor(aF / 2)) return !1;
			return !0
		}(bV, 3, 20)
	}, this.hm = function(bV) {
		for (var aF = (bV = bV.trim()).length, bZ = [], a6 = 0; a6 < aF; a6++) {
			var u, dY = a9T(u = bV.charCodeAt(a6));
			bZ.push(a9N[dY] + u - a9L[dY])
		}
		return bZ
	}, this.hp = function(bZ) {
		for (var u, iV, bV = "", aF = bZ.length, a6 = 0; a6 < aF; a6++)
			for (iV = 1; iV < a9N.length; iV++)
				if (bZ[a6] < a9N[iV]) {
					u = a9L[iV - 1] + bZ[a6] - a9N[iV - 1], bV += String.fromCharCode(u);
					break
				} return bV
	}, this.ur = function(bV) {
		for (var bZ = this.hm(bV), result = "", a6 = 0; a6 < bZ.length; a6++) result = (result += bZ[a6] < 10 ? "00" : bZ[a6] < 100 ? "0" : "") + bZ[a6].toString(10);
		return result
	}, this.uu = function(bV) {
		for (var bZ = new Array(Math.floor(bV.length / 3)), a6 = 0; a6 < bV.length; a6 += 3) bZ[Math.floor(a6 / 3)] = parseInt(bV.substring(a6, a6 + 3));
		return this.hp(bZ)
	}, this.us = function(bV) {
		for (var aL, bZ = [bV.length], a6 = 0; a6 < bV.length; a6++) bZ[a6] = bV.charCodeAt(a6) - 48;
		var result = "";
		for (a6 = 0; a6 < bV.length; a6++) a6 === bV.length - 1 || 51 < 10 * bZ[a6] + bZ[a6 + 1] ? result += bZ[a6].toString() : (aL = 10 * bZ[a6] + bZ[a6 + 1], result += String.fromCharCode(aL + (aL < 26 ? 65 : 71)), a6++);
		return result
	}, this.ut = function(bV) {
		for (var u, result = "", a6 = 0; a6 < bV.length; a6++) 48 <= (u = bV.charCodeAt(a6)) && u < 58 ? result += String.fromCharCode(u) : 65 <= u && u < 75 ? result += "0" + (u - 65).toString() : 75 <= u && u < 91 ? result += (u - 65)
		.toString() : 97 <= u && u < 123 && (result += (u - 71).toString());
		return result
	}, this.a9U = function(bV) {
		for (var aF = bV.length, bZ = [], a6 = 0; a6 < aF; a6++)(u = bV.charCodeAt(a6)) < 58 ? bZ.push(bV[a6]) : (u -= u < 91 ? 65 : 71, bZ.push(String(aR(u, 10))), bZ.push(String(u - 10 * aR(u, 10))));
		var aF = bZ.length - 2,
			u = 0,
			bb = [];
		for (a6 = 0; a6 < aF; a6 += 3) bb[u++] = parseInt(bZ[a6] + bZ[a6 + 1] + bZ[a6 + 2]);
		return bb
	}, this.c1 = function() {
		for (var kQ, a9V = "", a6 = 0; a6 < 6; a6++) kQ = 48 + bx.random() % 36, kQ += 58 <= kQ ? 39 : 0, a9V += String.fromCharCode(kQ);
		return a9V
	}
}

function a9W() {
	this.d8 = new je, this.dK = new a9X, this.m = function() {
		this.d8.m()
	}
}

function a6F() {
	(gh = void 0 === gh ? document.createElement("canvas") : gh).width = y.aB, gh.height = y.aC, a6H = gh.getContext("2d", {
		alpha: !0
	}), a6I = a6H.getImageData(0, 0, y.aB, y.aC), w7 = a6I.data, q.cc.sP(w7)
}

function q9() {
	function a9h() {
		y.q8.bD()
	}

	function a9m(dY, a9l) {
		0 < a9l && (y.nR[dY] += a9l, y.nR[dY + 1] += a9l, y.nR[dY + 2] += a9l)
	}

	function eD(dY) {
		return y.nR[dY + 2] > y.nR[dY] && y.nR[dY + 2] > y.nR[dY + 1]
	}
	this.a9Y = -1, this.ly = 0, this.a9Z = 0, this.a9a = 8, this.a9b = 32, this.a9c = 8, this.a9d = 32, this.a9e = [0, 0], this.oM = [0, 0, 0, 0], this.lJ = null, this.a9f = !0, this.a9g = !1, this.qB = function() {
		-1 !== this.a9Y && clearTimeout(this.a9Y), this.a9Y = -1, this.lJ = null, aM.qG()
	}, this.m = function() {
		7 === cM.cN() || this.a9g || (this.a9f = !0, this.ly = 0, this.a9Z = 1, this.a9e = [y.iC.nB[y.z].pa[0], y.iC.nB[y.z].pb[0]], this.oM = [y.iC.nB[y.z].pc[3], y.iC.nB[y.z].pc[4], y.iC.nB[y.z].pc[5], y.iC.nB[y.z].pc[6]], this.a9a = y.iC.nB[y
			.z].pc[7], this.a9b = y.iC.nB[y.z].pc[8], this.a9c = y.iC.nB[y.z].pc[9], this.a9d = y.iC.nB[y.z].pc[10], this.a9f ? this.a9Y = setTimeout(a9h, 16) : this.bD())
	}, this.bD = function() {
		if (8 === cM.cN() && fT.a9i()) this.a9Y = setTimeout(a9h, 16);
		else {
			if (0 === this.ly) {
				var bw = bx.by();
				if (bx.bz(y.iC.nB[y.z].pc[2]), aM.bd([y.aB, y.aC, y.iC.nB[y.z].pc[0], y.iC.nB[y.z].pc[1]]), bx.bz(bw), this.lJ = aM.aN(), this.ly++, this.a9f) return void(this.a9Y = setTimeout(a9h, 16))
			}
			for (var dY, e2, bw = this.a9f ? 10 : 1e6, bw = y.aC - this.a9Z - 1 < bw ? y.aC - this.a9Z - 1 : bw, a7L = this.a9Z + bw, a8 = this.a9Z; a8 < a7L; a8++)
				for (var a7 = 1; a7 < y.aB - 1; a7++) eD(dY = 4 * (e2 = a7 + a8 * y.aB)) ? this.a9j(dY, e2, 1) : (this.a9j(dY, e2, 0), function(a7, a8, dY) {
					return 1 < a7 && eD(dY - 4) || a7 < y.aB - 2 && eD(dY + 4) || 1 < a8 && eD(dY - 4 * y.aB) || a8 < y.aC - 2 && eD(dY + 4 * y.aB)
				}(a7, a8, dY) && this.a9k(a7, a8));
			this.a9Z = a7L, this.a9Z >= y.aC - 1 ? (y.nQ.putImageData(y.q6, 0, 0, 1, 1, y.aB - 2, y.aC - 2), bA.bE = !0, this.qB()) : this.a9f && (this.a9Y = setTimeout(a9h, 16))
		}
	}, this.a9j = function(dY, e2, aQ) {
		a9m(dY, Math.floor(this.a9e[aQ] + this.oM[aQ] * this.lJ[e2] / 1e4) - y.nR[dY])
	}, this.a9n = function(dY, kQ, a9o, aQ, oM) {
		a9m(dY, Math.floor(this.a9e[aQ] + (1 - kQ / a9o) * oM) - y.nR[dY])
	}, this.a9k = function(fb, fc) {
		for (var dY, kQ, a9o, a78 = fb - this.a9b, a79 = fc - this.a9b, a7M = fb + this.a9b, a7L = fc + this.a9b, a78 = a78 < 1 ? 1 : a78, a7M = a7M > y.aB - 2 ? y.aB - 2 : a7M, a7L = a7L > y.aC - 2 ? y.aC - 2 : a7L, a8 = a79 < 1 ? 1 : a79; a8 <=
			a7L; a8++)
			for (var a7 = a78; a7 <= a7M; a7++) eD(dY = 4 * (a7 + a8 * y.aB)) ? (a9o = this.a9a + (this.a9b - this.a9a) * this.lJ[a7 + y.aB * a8] / 1e4, Math.abs(fb - a7) > a9o || Math.abs(fc - a8) > a9o || a9o <= (kQ = Math.sqrt((fb - a7) * (
				fb - a7) + (fc - a8) * (fc - a8))) || this.a9n(dY, kQ, a9o, 1, this.oM[3])) : (a9o = this.a9c + (this.a9d - this.a9c) * this.lJ[a7 + y.aB * a8] / 1e4, Math.abs(fb - a7) > a9o || Math.abs(fc - a8) > a9o || a9o <= (kQ = Math
				.sqrt((fb - a7) * (fb - a7) + (fc - a8) * (fc - a8))) || this.a9n(dY, kQ, a9o, 0, this.oM[2]))
	}
}

function cf() {
	this.ds = function(ly) {
		return 0 === ly ? 1 === df.gP && df.e7 : 1 === ly ? 1 === df.gP && !df.e7 : 2 === df.gP
	}, this.dt = function(player) {
		return 0 !== dV.eg[player] && 2 !== dV.qh[player]
	}, this.vJ = function(nl, nm) {
		return nl !== nm
	}, this.j0 = function(player, aL) {
		return aL = this.a9p(player, aL), dV.l5[player] += aL, aL
	}, this.a9p = function(player, aL) {
		var l4 = dV.l5[player];
		return aL = Math.min(aL, dV.ev[player] * df.mW - l4), aL = Math.min(aL, df.mX - l4), Math.max(aL, 0)
	}, this.ng = function(player, oD, a9q, a9r) {
		var l4 = dV.l5[player],
			oD = ny.nz(l4 * (oD + 1), 1024),
			a9q = ny.nz(a9q * l4, 1024),
			oD = Math.min(oD, l4 - a9q);
		return 10 === df.eo && (oD = a6L.l7(player, oD)), j1.j2[0] = oD, j1.j2[1] = a9q, a9r <= oD
	}, this.iu = function(player, py, it) {
		var player = dV.l5[player],
			a9s = ny.nz(64 * player, 1024);
		return py = Math.min(py, player - a9s), a9s += player = this.a9u(py), py = this.a9p(it, py -= player), j1.j2[0] = py, j1.j2[1] = a9s, 1 <= py
	}, this.iz = function(py, it) {
		var a9t = this.a9u(py);
		return py = this.a9p(it, py -= a9t), j1.j2[0] = py, j1.j2[1] = a9t, 1 <= py
	}, this.oR = function(player, a9v) {
		return ny.nz(dV.l5[player] * (a9v + 1), 1024)
	}, this.a9u = function(a9w) {
		return ny.nz(Math.max(2142 - bA.bC(), 0) * a9w, 2142)
	}, this.vW = function(player, a9q) {
		dV.l5[player] -= ny.nz(a9q * dV.l5[player], 1024)
	}, this.mZ = function(player) {
		dV.l5[player] -= j1.j2[0] + j1.j2[1]
	}, this.vL = function(player, vI) {
		return (vI = Math.min(vI, df.eM)) < df.eM && 0 === dV.eg[vI] && (vI = df.eM), (j1.jI[0] = vI) === df.eM || eR(player, vI)
	}, this.vS = function(player, it) {
		return 0 !== dV.eg[it] && !eR(player, it)
	}
}

function a9x() {
	this.a9y = "https://", this.a9z = this.a9y + "territorial.io/", this.uG = this.a9z + "changelog", this.uL = this.a9z + "terms", this.aA0 = this.a9z + "cookie_policy", this.uM = this.a9z + "privacy", this.uK = this.a9z + "tutorial", this.uJ = this
		.a9z + "players", this.uH = this.a9z + "clans", this.uI = this.a9z + "clan-results", this.uD = this.a9y + "play.google.com/store/apps/details?id=territorial.io", this.uE = this.a9y + "apps.apple.com/app/id1581110913", this.a07 = this.a9y +
		"www.youtube.com/watch?v=toZTQ8aRdFc", this.uF = this.a9y + "discord.gg/pthqvpTXmh", this.a08 = this.a9y + "www.instagram.com/davidtschacher/", this.aA1 =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function aA2() {
	var aQ = 0,
		aA3 = new Uint16Array(32);

	function remove(a5S) {
		var a6;
		for (aQ -= 2, a6 = a5S; a6 < aQ; a6 += 2) aA3[a6] = aA3[a6 + 2], aA3[a6 + 1] = aA3[a6 + 3]
	}
	this.m = function() {
		aQ = 0
	}, this.bD = function() {
		var a6, vI, oD;
		if (0 !== aQ)
			if (0 === dV.eg[df.du] || hU.a7x(df.du) === hU.yV(df.du)) aQ = 0;
			else
				for (a6 = aQ - 2; 0 <= a6; a6 -= 2)(vI = aA3[a6]) < df.eM && 0 === dV.eg[vI] ? remove(a6) : (oD = aA3[a6 + 1], (vI >= df.eM && eK(df.du) || vI < df.eM && eS(df.du, vI)) && (e9.eA.eL(oD, vI), remove(a6)))
	}, this.eP = function(vI, oD) {
		! function(vI, oD) {
			var a6;
			for (a6 = 0; a6 < aQ; a6 += 2)
				if (aA3[a6] === vI) return aA3[a6 + 1] = Math.min(aA3[a6 + 1] + oD, 1023), 1;
			return
		}(vI, oD) && 32 !== aQ && (aA3[aQ] = vI, aA3[aQ + 1] = oD, aQ += 2)
	}
}

function zI() {
	let k, wN, a3C, aA5, a3D, a3E, colors = [0, 0, 0],
		aA6 = -1;

	function a3M(a6) {
		var kQ = 0 === a6 ? 150 : 2 === a6 ? 30 : 0,
			gS = 1 === a6 ? 130 : 2 === a6 ? 30 : 0,
			iV = 2 === a6 ? 220 : 0,
			aA8 = wN.a8 + a6 * (b2.gap + a3E);
		bI.fillStyle = "rgb(" + kQ + "," + gS + "," + iV + ")", bI.fillRect(aA5, aA8, colors[a6] * a3D, a3E), bI.strokeStyle = i.bM, bI.strokeRect(aA5, aA8, a3D, a3E), bI.fillStyle = i.bM, bI.font = q.r.ft(0, .32 * a3E), q.r.textBaseline(bI, 1), q.r
			.textAlign(bI, 0), bI.fillText((0 === a6 ? "Red: " : 1 === a6 ? "Green: " : "Blue: ") + aA7(a6), aA5 + b2.gap, aA8 + .53 * a3E)
	}

	function aA7(a6, aA9 = 256) {
		return ny.oV(Math.floor(aA9 * colors[a6]), 0, aA9 - 1)
	}

	function kO(fb, fc) {
		return !(fb < aA5 || fc < wN.a8 || fb > wN.a7 + wN.ak || fc > wN.a8 + wN.al)
	}
	this.show = function() {
		var aL = aZ.af.data[121].value;
		colors[0] = (aL >> 12) / 63, colors[1] = (aL >> 6 & 63) / 63, colors[2] = (63 & aL) / 63, k.show(), this.resize()
	}, this.s = function() {
		aZ.d6.aX(121, (aA7(0, 64) << 12) + (aA7(1, 64) << 6) + aA7(2, 64)), k.s()
	}, this.resize = function() {
		k.resize(), wN.resize();
		var u = ay.k7,
			pO = k.pI(),
			za = (wN.a8 = Math.max(wN.a8, u * pO.pJ + b2.gap), u * pO.pN - 2 * b2.gap);
		wN.al = Math.min(wN.al, za), wN.ak = 2 * wN.al, wN.a8 = u * pO.pJ + .5 * (u * pO.pN - wN.al), wN.a7 = .5 * (ay.ak - wN.ak), a3C = .25 * wN.ak, aA5 = wN.a7 + a3C + b2.gap, a3D = wN.ak - a3C - b2.gap, a3E = (wN.al - 2 * b2.gap) / 3
	}, this.bH = function() {
		var kQ, gS, iV;
		k.bH(), bI.lineWidth = b2.zb, kQ = aA7(0), gS = aA7(1), iV = aA7(2), bI.fillStyle = "rgb(" + kQ + "," + gS + "," + iV + ")", bI.fillRect(wN.a7, wN.a8, a3C, wN.al), bI.strokeStyle = i.bM, bI.strokeRect(wN.a7, wN.a8, a3C, wN.al), bI
			.fillStyle = kQ + gS + iV < 306 && gS < 150 ? i.bM : i.hT, q.r.textBaseline(bI, 1), q.r.textAlign(bI, 1), bI.font = q.r.ft(0, .1 * wN.al), bI.rotate(-Math.PI / 2), bI.fillText("National Color", -wN.a8 - .5 * wN.al, wN.a7 + .5 * a3C),
			bI.setTransform(1, 0, 0, 1, 0, 0), a3M(0), a3M(1), a3M(2)
	}, this.bF = function(fb, fc) {
		kO(fb, fc) && (aA6 = ny.oV(Math.floor((fc - wN.a8) / (a3E + .75 * b2.gap)), 0, 2), colors[aA6] = ny.oV((fb - aA5) / a3D, 0, 1), bA.bE = !0)
	}, this.fU = function(fb) {
		-1 !== aA6 && (colors[aA6] = ny.oV((fb - aA5) / a3D, 0, 1), bA.bE = !0)
	}, this.fS = function(fb, fc, deltaY) {
		kO(fb, fc) && (fb = ny.oV(Math.floor((fc - wN.a8) / (a3E + .75 * b2.gap)), 0, 2), colors[fb] = ny.oV(colors[fb] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bA.bE = !0)
	}, this.kF = function() {
		0 <= aA6 && (aA6 = -1, bA.bE = !0)
	}, this.t = function(u) {
		2 === u && k.v[0].w()
	}, k = new n("Choose Your Nation's Color!", [new d("❌ " + e.f[92], function() {
		g.d4.u4()
	})], !1), wN = new j6([.5, .25], [.5, .5], 1)
}

function aAA() {
	var a7, a8, al, wZ, aAB, aAC, aAD, aAE, aAF, ak, aAG, aAH;
	this.ai = !1, this.m = function(bV, a09) {
		if (1 === av.id && 13 <= av.aa && av.aa < 18) return a09 ? void(aAG = bV) : aAG !== bV ? void 0 : void av.t7.saveString(200, bV);
		a09 && (aAG = bV, (aAH = document.createElement("a")).appendChild(document.createTextNode(aAG)), this.ai = !0, aAH.title = aAG, aAH.target = "_blank", aAH.href = aAG, aAH.style.textAlign = "center", aAH.style.color = i.bM, aAH.style
			.position = "absolute", aAH.style.padding = "0px", aAH.style.margin = "0px", this.resize(), document.body.appendChild(aAH), bA.bE = !0)
	}, this.s = function() {
		return !(!this.ai || (document.body.removeChild(aAH), this.ai = !1))
	}, this.bF = function(fN, fQ) {
		return !!this.ai && ((fN < a7 || fQ < a8 || a7 + ak < fN || a8 + al < fQ || a7 + ak - wZ < fN && fQ < a8 + wZ) && (bA.bE = !0, this.ai = !1, document.body.removeChild(aAH)), !0)
	}, this.resize = function() {
		var fw, aAI;
		this.ai && (aAE = Math.floor(.8 * (av.aw.ax() ? ay.ak > ay.al ? .6 : .55 : .4) * ay.az), wZ = Math.floor(.15 * aAE), aAB = Math.floor(.35 * wZ), aAC = Math.floor(.5 * wZ), aAD = Math.floor(2.5 * aAC), al = wZ + aAB + 3 * aAC, fw = q.r.ft(
				1, aAB / ay.k7), aAF = Math.floor(ay.k7 * fx.measureText(aAG, fw)), aAI = ak = (aAE < aAF ? aAF : aAE) + 2 * aAD, ak = Math.min(ak, ay.ak - 2 * (av.aw.ax() ? 2 : 1) * b2.gap), fw = q.r.ft(1, ak / aAI * aAB / ay.k7), aAF = Math
			.floor(ay.k7 * fx.measureText(aAG, fw)), a7 = Math.floor((ay.ak - ak) / 2), a8 = Math.floor((ay.al - al) / 2), aAH.style.font = fw, aAH.style.top = Math.floor((a8 + 1.4 * aAC + wZ) / ay.k7) + "px", aAH.style.left = Math.floor((
				a7 + (ak - aAF) / 2) / ay.k7) + "px")
	}, this.bH = function() {
		this.ai && (bI.fillStyle = i.bL, bI.fillRect(a7, a8 + wZ, ak, al - wZ), bI.fillStyle = i.a6r, bI.fillRect(a7, a8, ak, wZ), bI.fillStyle = i.bM, bI.lineWidth = b2.zb, bI.strokeStyle = i.bM, bI.strokeRect(a7, a8, ak, al), bI.fillRect(a7,
			a8 + wZ, ak, b2.zb), bI.font = q.r.ft(1, .48 * wZ), q.r.textAlign(bI, 1), q.r.textBaseline(bI, 1), bI.fillText("You are leaving Territorial.io!", Math.floor(a7 + (ak - .5 * wZ) / 2), Math.floor(a8 + .55 * wZ)), dq.xn(Math
			.floor(a7 + ak - .8 * wZ), Math.floor(a8 + .25 * wZ), Math.floor(.5 * wZ)), bI.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function aAJ() {
	var zZ = [0, 0, 0, 0];

	function zC(a7, a8, gv, aAQ) {
		bI.fillStyle = i.bM;
		var gx = b1(2, Math.floor((aAQ ? .5 : .35) * gv)),
			am = (gx -= gx % 2, b1(2, Math.floor(.1 * gv))),
			gv = (am -= am % 2, Math.floor((gv - gx) / 2)),
			hQ = Math.floor(gv + (gx - am) / 2);
		bI.fillRect(a7 + gv, a8 + hQ, gx, am), aAQ && bI.fillRect(a7 + hQ, a8 + gv, am, gx)
	}

	function aAO(a7, a8, ak, al, a3J, aG, f, hO, il) {
		bI.fillStyle = a3J, bI.fillRect(a7, a8, ak, al), 0 <= hO && function(a7, a8, ak, al, hO) {
			bI.fillStyle = "rgba(" + 22 * hO + "," + (110 - 22 * hO) + ",0,0.75)", bI.fillRect(a7, a8, (1 + hO) * ak / 6, al)
		}(a7, a8, ak, al, hO), 0 < il && function(a7, a8, ak, al, il) {
			bI.fillStyle = "rgba(255,255,255,0.3)", bI.fillRect(a7, a8, il * ak / df.eM, al)
		}(a7, a8, ak, al, il), bI.strokeStyle = i.bM, bI.strokeRect(a7, a8, ak, al), 0 !== aG && (bI.fillStyle = i.bM, bI.font = q.r.ft(1, aG * al), bI.fillText(f, Math.floor(a7 + ak / 2), Math.floor(a8 + .52 * al)))
	}
	this.ik = [{
		ia: 0,
		il: 512
	}], this.m = function() {
		aAK.ai = !1, cM.setState(2), this.resize(), bA.bE = !0
	}, this.m7 = function() {}, this.resize = function() {
		zZ[2] = Math.floor((av.aw.ax() ? .49 : .4) * ay.az), zZ[1] = Math.floor((ay.al - zZ[2] / 6 - this.ik.length * (b2.gap + zZ[2] / 10)) / 2), zZ[0] = Math.floor((ay.ak - zZ[2]) / 2), aAK.ai && aAK.resize()
	}, this.gU = function(gF) {
		var a6;
		if (6 < gF) this.ik = [{
			ia: 0,
			il: 512
		}];
		else {
			for (this.ik = [], a6 = 0; a6 < gF + 2; a6++) this.ik.push({
				ia: 0,
				il: 0
			});
			this.aAL()
		}
		c8.d4.bt = 0
	}, this.gV = function(gW, gX) {
		for (var aF = gW.length, a6 = 0; a6 < aF; a6++) this.ik[a6].ia = gW[a6], this.ik[a6].il = gX[a6]
	}, this.gN = function(gS) {
		var a6, aF;
		if (1 === gS.dS.length)
			for (aF = this.ik.length, gS.gW = new Array(aF), gS.gX = new Array(aF), a6 = 0; a6 < aF; a6++) gS.gW[a6] = this.ik[a6].ia, gS.gX[a6] = this.ik[a6].il
	}, this.ki = function() {
		bA.bE = !0, aAK.ai ? aAK.ai = !1 : (this.m7(), cM.setState(0), g.g2(5, 5))
	}, this.a6E = function() {
		var a6, il;
		if (iB.cP) return iB.iC.n5;
		for (il = 0, a6 = this.ik.length - 1; 0 <= a6; a6--) il += this.ik[a6].il;
		return il
	}, this.fU = function(a7, a8) {
		return !(!aAK.ai || !aAK.fU(a7, a8)) || -1 !== this.kO(a7, a8)
	}, this.aAM = function() {
		var hC;
		c8.d4.bt = 0, cM.gT(), iB.cP ? iB.mr() : (hC = (hC = this.ik.length - 2) < 0 ? 7 : hC, df.gY(Math.floor(16384 * Math.random()), 0, [{
			name: aZ.af.data[122].value,
			iX: q.color.mu(aZ.d4.mv()),
			n0: 0
		}], hC, !1, !1))
	}, this.bF = function(a7, a8) {
		if (aAK.ai && !iB.cP) return aAK.bF(a7, a8);
		var a6, hC, max, gx, a8 = this.kO(a7, a8);
		if (-1 === a8) return !1;
		if (0 === a8) this.ki();
		else if (1 === a8) iB.cP ? (iB.kH(), bA.bE = !0) : aAK.show();
		else if (100 === a8) kM.uR();
		else if (2 === a8) this.m7(), this.aAM();
		else {
			if (iB.cP) return !1;
			if (27 === a8) this.ik.length < 8 && (this.ik.push({
				ia: 0,
				il: df.eM
			}), this.aAL(), this.resize(), bA.bE = !0);
			else if (a6 = Math.floor((a8 - 3) / 3), a8 % 3 == 0) 1 < this.ik.length && (this.ik.splice(a6, 1), this.resize(), bA.bE = !0);
			else if (gx = (zZ[2] - zZ[2] / 10 - 2 * b2.gap) / 2, a8 % 3 == 1) 0 === a6 && 1 === this.ik[a6].il || (a7 < zZ[0] + zZ[2] - 1.5 * gx - b2.gap ? this.ik[a6].ia-- : this.ik[a6].ia++, this.ik[a6].ia < 0 ? this.ik[a6].ia = 5 : 5 < this
				.ik[a6].ia && (this.ik[a6].ia = 0), bA.bE = !0);
			else {
				for (bA.bE = !0, a8 = (a7 - (zZ[0] + zZ[2] - gx)) / gx - .5, a8 *= a8 < 0 ? -a8 : a8, a8 = 0 === (a8 = Math.floor(a8 * df.eM)) ? 1 : a8, max = df.eM, hC = this.ik.length - 1; 0 <= hC; hC--) a6 !== hC && (max -= this.ik[hC].il);
				if (a8 < 0) {
					if (1 === this.ik[a6].il) return this.ik[a6].il = max, !0
				} else if (this.ik[a6].il === max) return this.ik[a6].il = 1, !0;
				this.ik[a6].il += a8, this.ik[a6].il < 1 ? this.ik[a6].il = 1 : this.ik[a6].il > max && (this.ik[a6].il = max)
			}
		}
		return !0
	}, this.aAL = function() {
		for (var il = Math.floor(df.eM / this.ik.length), aAN = df.eM % this.ik.length, a6 = this.ik.length - 1; 0 <= a6; a6--) this.ik[a6].il = il;
		this.ik[0].il += aAN
	}, this.kO = function(a7, a8) {
		var gx = (zZ[2] - 3 * b2.gap) / 4,
			am = zZ[2] / 6;
		if (a7 < zZ[0] || a8 < zZ[1] || zZ[0] + zZ[2] <= a7) return -1;
		if (a8 < zZ[1] + am) return a7 < zZ[0] + gx ? 0 : a7 < zZ[0] + gx + b2.gap ? -1 : a7 < zZ[0] + 2 * gx + b2.gap ? 100 : a7 < zZ[0] + 2 * (gx + b2.gap) ? -1 : a7 < zZ[0] + 3 * gx + 2 * b2.gap ? 1 : a7 < zZ[0] + 3 * (gx + b2.gap) ? -1 : 2;
		for (var hP, vi = zZ[2] / 10, gx = (zZ[2] - vi - 2 * b2.gap) / 2, a6 = 0; a6 < this.ik.length; a6++) {
			if (a8 < (hP = zZ[1] + am + b2.gap + a6 * (vi + b2.gap))) return -1;
			if (!(hP + vi < a8)) return a7 < zZ[0] + vi ? 3 + 3 * a6 : a7 < zZ[0] + vi + b2.gap ? -1 : a7 < zZ[0] + zZ[2] - gx - b2.gap ? 4 + 3 * a6 : a7 < zZ[0] + zZ[2] - gx ? -1 : 5 + 3 * a6
		}
		return !(this.ik.length < 8) || a8 < (hP = zZ[1] + am + b2.gap + this.ik.length * (vi + b2.gap)) || hP + vi < a8 || zZ[0] + vi < a7 ? -1 : 27
	}, this.bH = function() {
		bI.lineWidth = b2.zb, q.r.textAlign(bI, 1), q.r.textBaseline(bI, 1);
		var gx = (zZ[2] - 3 * b2.gap) / 4,
			am = zZ[2] / 6;
		if (aAO(zZ[0], zZ[1], gx, am, "rgba(128,0,0,0.75)", .34, "Back", -1, -1), aAO(zZ[0] + gx + b2.gap, zZ[1], gx, am, "rgba(128,0,128,0.75)", .31, "Custom", -1, -1), aAO(zZ[0] + 2 * (gx + b2.gap), zZ[1], gx, am, "rgba(" + (iB.cP ? 128 : 0) +
				",128,128,0.75)", .34, iB.cP ? "Reset" : "Maps", -1, -1), aAO(zZ[0] + zZ[2] - gx, zZ[1], gx, am, "rgba(0,128,0,0.75)", .34, "Start", -1, -1), !iB.cP) {
			for (var hP, vi = zZ[2] / 10, gx = (zZ[2] - vi - 2 * b2.gap) / 2, a6 = 0; a6 < this.ik.length; a6++) hP = zZ[1] + am + b2.gap + a6 * (vi + b2.gap), aAO(zZ[0], hP, vi, vi, 1 < this.ik.length ? "rgba(128,0,0,0.75)" :
				"rgba(90,90,90,0.75)", 0, null, -1), 1 < this.ik.length && zC(zZ[0], hP, vi, !1), aAO(zZ[0] + vi + b2.gap, hP, gx, vi, i.bL, .4, this.aAP(a6), this.ik[a6].ia, -1), aAO(zZ[0] + zZ[2] - gx, hP, gx, vi, i.bL, .4, this.on(a6), -1,
				this.ik[a6].il);
			this.ik.length < 8 && (hP = zZ[1] + am + b2.gap + this.ik.length * (vi + b2.gap), aAO(zZ[0], hP, vi, vi, "rgba(0,128,20,0.75)", 0, null, -1, -1), zC(zZ[0], hP, vi, !0)), aAK.ai && aAK.bH()
		}
	}, this.aAP = function(a6) {
		return 0 === a6 && 1 === this.ik[a6].il ? "You" : na.tI[this.ik[a6].ia]
	}, this.on = function(a6) {
		return 1 === this.ik[a6].il ? "1 Player" : this.ik[a6].il + " Players"
	}
}

function vP(player, vM) {
	return j1.jI[1] = dV.qk[player].length, j1.jI[0] === df.eM ? a2R(player) : a2P(player, j1.jI[0]), (0 !== j1.jI[1] || 0 !== dV.qk[player].length) && !(!vM && j1.jI[1] === dV.qk[player].length || (j1.jI[0] === df.eM ? dV.dc[player]++ : dV.dd[
		player]++, 0))
}

function vR(player) {
	df.iA && (ix[player] = 1), aAT(j1.jI[1], player), hU.vH(player, j1.j2[0], j1.jI[0]), qR.hG(player, !1)
}

function a2Q(player, vI, aF, hO) {
	var aAU = aR(3 * dV.l5[player], 256);
	hO -= hO >= aR(dV.l5[player], 2) ? aAU : 0, aAT(aF, player), hU.vH(player, hO, vI), dV.l5[player] -= hO + aAU, qR.hG(player, !1)
}

function a2P(player, vI) {
	for (var a5T, a6 = dV.ql[player].length - 1; 0 <= a6; a6--)
		if (dZ.a7N(dV.ql[player][a6]))
			for (a5T = 3; 0 <= a5T; a5T--)
				if (dZ.a0z(dV.ql[player][a6] + a03[a5T]) && dZ.eQ(dV.ql[player][a6] + a03[a5T]) === vI) {
					dV.qk[player].push(dV.ql[player][a6]);
					break
				}
}

function aAT(size, player) {
	for (var a6 = dV.qk[player].length - 1; size <= a6; a6--) dZ.a10(dV.qk[player][a6], player)
}

function a2R(player) {
	for (let a6 = dV.ql[player].length - 1; 0 <= a6; a6--)
		if (dZ.a7N(dV.ql[player][a6]))
			for (let a5T = 3; 0 <= a5T; a5T--)
				if (dZ.eJ(dV.ql[player][a6] + a03[a5T])) {
					dV.qk[player].push(dV.ql[player][a6]);
					break
				}
}

function a2A(player, aAV) {
	var a6, hC, a5T, aAW, aF = dV.ql[player].length,
		kz = 256 <= aF ? 12 : 32 <= aF ? 6 : 1,
		hH = aF - 1 - bx.tQ(kz);
	a22 = 0;
	loop: for (a6 = hH; 0 <= a6; a6 -= kz)
		for (a5T = 3; 0 <= a5T; a5T--)
			if ((aAW = dZ.eJ(dV.ql[player][a6] + a03[a5T]) ? df.eM : dZ.eQ(dV.ql[player][a6] + a03[a5T])) === df.eM || dZ.a0z(dV.ql[player][a6] + a03[a5T]) && aAW !== player && (aAV || eR(player, aAW))) {
				for (hC = a22 - 1; 0 <= hC; hC--)
					if (a23[hC] === aAW) continue loop;
				if (a23[a22] = aAW, ++a22 >= a21) return !0
			}
	return 0 < a22
}

function a2B(player, aAV) {
	var a6, a5T, aAW;
	for (a22 = 0, a6 = dV.ql[player].length - 1; 0 <= a6; a6--)
		for (a5T = 3; 0 <= a5T; a5T--)
			if ((aAW = dZ.eJ(dV.ql[player][a6] + a03[a5T]) ? df.eM : dZ.eQ(dV.ql[player][a6] + a03[a5T])) === df.eM || dZ.a0z(dV.ql[player][a6] + a03[a5T]) && aAW !== player && (aAV || eR(player, aAW))) return a23[a22++] = aAW, !0;
	return !1
}

function a2D() {
	for (var iV, a6 = a22 - 1; 0 <= a6; a6--)
		if (a23[a6] === df.eM) {
			for (a22--, iV = a6; iV < a22; iV++) a23[iV] = a23[iV + 1];
			return !0
		} return !1
}

function a2C(player) {
	for (var iV, a6 = a22 - 1; 0 <= a6; a6--)
		if (hU.vN(player, a23[a6]))
			for (a22--, iV = a6; iV < a22; iV++) a23[iV] = a23[iV + 1];
	return 0 === a22
}

function a2I() {
	for (var a6 = a22 - 1; 0 <= a6; a6--)
		if (a23[a6] >= df.dg) return !0;
	return !1
}

function a2J() {
	for (var a6 = a22 - 1; 0 <= a6; a6--) a23[a6] < df.dg && (a23[a6] = a23[--a22]);
	return 0 < a22
}

function a2G(player) {
	for (var iV, aAX = a23[0], aAY = dV.l5[aAX] + hU.a7u(aAX, player), a6 = a22 - 1; 1 <= a6; a6--)(iV = dV.l5[a23[a6]] + hU.a7u(a23[a6], player)) < aAY && (aAX = a23[a6], aAY = iV);
	return aAX
}

function a2K(player) {
	var al, aAZ = a23[0];
	if (1 !== a22)
		for (var aAa = aR(dV.nw[player] + dV.nu[player], 2), aAb = aR(dV.nx[player] + dV.nv[player], 2), p3 = ve(aAa - aR(dV.nw[aAZ] + dV.nu[aAZ], 2)) + ve(aAb - aR(dV.nx[aAZ] + dV.nv[aAZ], 2)), a6 = a22 - 1; 1 <= a6; a6--)(al = ve(aAa - aR(dV.nw[
			a23[a6]] + dV.nu[a23[a6]], 2)) + ve(aAb - aR(dV.nx[a23[a6]] + dV.nv[a23[a6]], 2))) < p3 && (p3 = al, aAZ = a23[a6]);
	return aAZ
}

function a2M() {
	return a23[bx.tQ(a22)]
}

function aAc() {
	var ar = 0,
		aAd = !0;

	function aAg(bV) {
		8 !== cM.cN() || 2 !== dV.qh[df.du] && (0 !== dV.eg[df.du] || df.e7) || f6.a98(bV)
	}
	this.bD = function() {
		var eu, xU;
		bA.bB > ar && (ar = bA.bB + 2500, eu = new Date, xU = eu.getUTCSeconds(), aAd ? xU < 45 && (aAd = !1) : xU < 45 || (aAd = !0, (xU = eu.getUTCMinutes() + 1) % 15 == 0 && aAg(30 === xU ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function mk() {
	function aAp() {}
	this.m = function() {}, this.aAo = function() {
		return !!aAp() && (aiptag.cmd.player.push(function() {
			aiptag.adplayer.startVideoAd()
		}), !0)
	}, this.hideCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.hideCMPButton && aipAPItag.hideCMPButton()
	}, this.showCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.showCMPButton && aipAPItag.showCMPButton()
	}, this.showCMPScreen = function() {
		aAp() && aipAPItag.showCMPScreen()
	}
}

function cd() {
	this.sP = function(bZ) {
		bZ.fill(0)
	}, this.a70 = function(bZ) {
		for (var aF = bZ.length, a6 = 0; a6 < aF; a6++) bZ[a6] = []
	}, this.aAq = function(iJ, aG) {
		for (var iK = j1.jG, a6 = 0; a6 < 3; a6++) iK[a6] = aG * iJ[a6];
		return iK
	}, this.aAr = function(iJ, iK, aAs) {
		for (var kz = 0, a6 = 0; a6 < 3; a6++) kz += Math.abs(iJ[a6] - iK[a6]);
		return aAs <= kz
	}, this.aAt = function(iJ, aAu) {
		for (var a6 = 0; a6 < 3; a6++) iJ[a6] = ny.oV(iJ[a6] + aAu, 0, 255);
		return iJ
	}, this.yA = function(bZ, g5 = 0, g6 = bZ.length - 1) {
		for (var aAv = 0, a6 = g5; a6 <= g6; a6++) aAv += bZ[a6];
		return aAv
	}, this.aAw = function(bZ, aAx) {
		for (var a6, aAy, aF = bZ.length, aAz = [], hC = aF - 1; 0 <= hC; hC--) {
			for (a6 = aAy = 0; a6 < aF; a6++) aAx(bZ[a6]) < aAx(bZ[aAy]) && (aAy = a6);
			aF--, aAz.push(bZ[aAy]), bZ[aAy] = bZ[aF], bZ.pop()
		}
		return aAz
	}
}

function aB0() {
	var aB1;
	this.tR = null, this.m = function() {
		aB1 = [], 9 === df.eo && this.aB2()
	}, this.aB2 = function() {
		var a6, aB3 = [50, 74, 95, 150, 190, 333];
		if (this.iI = 0, this.tR = [0, 0, 0, 0, 0, 0], df.dg <= aB3[0]) this.tR[0] = Math.max(ny.nz(df.dg * (512 - df.dg), aB3[0]), 13), df.nX = this.tR[0];
		else
			for (df.nX = df.eM - df.dg, a6 = 1; a6 < 6; a6++)
				if (df.dg <= aB3[a6]) {
					this.tR[a6 - 1] = 512 - aB3[a6 - 1] - aR((512 - aB3[a6 - 1]) * (df.dg - aB3[a6 - 1]), aB3[a6] - aB3[a6 - 1]), this.tR[a6] = 512 - df.dg - this.tR[a6 - 1];
					break
				} df.iG = df.dg + df.nX
	}, this.qg = function(player) {
		aB1.push({
			player: player,
			il: 14 + bx.tQ(20)
		})
	}, this.bD = function() {
		var a6;
		if (9 === df.eo)
			for (a6 = aB1.length - 1; 0 <= a6; a6--) --aB1[a6].il <= 0 && (fZ.vZ(aB1[a6].player, 0, xA.xB.xC + xA.xB.xE), aB1.splice(a6))
	}
}

function g9() {
	this.a1s = null, this.a1t = null, this.a1u = null, this.a1v = null, this.a1x = null, this.a1z = null;
	var aB5 = 0;
	this.gH = null, this.hl = "", this.m = function(gH) {
		this.a1s = [], this.a1t = [], this.a1u = [], this.a1v = [], this.a1x = [0], this.a1z = [0], aB5 = 0, this.gH = gH, this.hl = ""
	}, this.vG = function(id, jL, jN, jP) {
		df.dp || 2 === df.gP || (0 === this.a1x[aB5] && (this.a1z[aB5] ? (this.a1x.push(1), this.a1z.push(0), aB5++) : this.a1x[aB5] = 1), this.a1s.push(id), this.a1t.push(jL), this.a1u.push(void 0 === jN ? 0 : jN), this.a1v.push(void 0 === jP ?
			0 : jP), this.a1z[aB5]++)
	}, this.bD = function() {
		0 === this.a1x[aB5] ? this.a1z[aB5]++ : (this.a1x.push(0), this.a1z.push(0), aB5++)
	}
}

function cb() {
	var aB6 = null;
	this.aB7 = 0, this.cn = function() {
		var aL = aZ.af.data[5].value;
		aB6 = "px " + aL, "Trebuchet MS" !== aL && (aB6 += ", Trebuchet MS"), this.aB7 = aB8(32, 32, ["a", "b", "m"], 200, aB6)
	}, this.kn = function(ak, al) {
		var u = document.createElement("canvas");
		return u.width = ak, u.height = al, u
	}, this.getContext = function(aq, alpha) {
		return aq.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(bJ, ak, al) {
		return bJ.getImageData(0, 0, ak, al)
	}, this.ft = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + aB6 : 1 === type ? "bold " + size + aB6 : 2 === type ? "lighter " + size + aB6 : 3 === type ? "italic " + size + aB6 : 4 === type ? "oblique " + size + aB6 : 5 === type ? "small-caps " +
			size + aB6 : "small-caps bold " + size + aB6
	}, this.textAlign = function(ko, id) {
		ko.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(ko, id) {
		ko.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.os = function(cY, code = 5, color = i.bM) {
		color = this.hr(b2.aB9) + " solid " + color;
		5 === code ? cY.style.border = color : 4 === code ? cY.style.borderLeft = color : 2 === code ? cY.style.borderBottom = color : 6 === code ? cY.style.borderRight = color : cY.style.borderTop = color
	}, this.wd = function(cY, a7, a8, ak, al) {
		cY = cY.style;
		cY.left = this.aBA(a7), cY.top = this.aBA(a8), cY.width = this.aBA(ak), cY.height = this.aBA(al)
	}, this.jA = function(aL) {
		return 1 + aL * av.aw.ax()
	}, this.pK = function(fd, es = .5) {
		return fd * this.jA(es) * ay.az / ay.k7
	}, this.aBB = function(fd, es = .5) {
		return fd * this.jA(es) * ay.az
	}, this.hr = function(aL) {
		return aL.toFixed(1) + "px"
	}, this.aBA = function(aL) {
		return this.we(aL).toFixed(1) + "px"
	}, this.we = function(aL) {
		return aL / ay.k7
	}, this.uB = function(yr, aBC) {
		for (var bV = "<ul>", aF = yr.length, a6 = 0; a6 < aF; a6++) bV += "<li>" + yr[a6] + ": <a href='" + aBC[a6] + "' target='_blank'>" + aBC[a6] + "</a></li>";
		return bV += "</ul>"
	}, this.a0A = function(aAG) {
		return "<a href='" + aAG + "' target='_blank'>" + aAG + "</a>"
	}, this.rt = function(cY) {
		navigator.clipboard && navigator.clipboard.writeText(cY.value)
	}, this.ru = function(cY) {
		cY.innerText.startsWith("✅ ") || (cY.innerText = "✅ " + cY.innerText, setTimeout(function() {
			cY.innerText = cY.innerText.substring(cY.innerText.indexOf(" ") + 1)
		}, 500))
	}, this.measureText = function(bV) {
		return bI.measureText(bV).width
	}
}

function aB8(gv, size, aBD, aBE, font) {
	var a6, w2 = .2,
		aq = document.createElement("canvas"),
		ko = aq.getContext("2d", {
			alpha: !1
		});
	for (aq.width = gv, aq.height = gv, ko.font = size + font, ko.textAlign = "center", ko.textBaseline = "middle", ko.fillStyle = "red", a6 = 0; a6 < aBD.length; a6++) ko.fillText(aBD[a6], .5 * gv, .5 * gv);
	return -1 < (aq = function(ks) {
		var a6, kQ;
		for (a6 = ks.data.length - 4; 0 <= a6; a6 -= 4)
			if (kQ = ks.data[a6], aBE <= kQ) return Math.floor(a6 / (4 * gv));
		return -1
	}(ko.getImageData(0, 0, gv, gv))) && (w2 = (aq - .5 * gv + .1 * size) / size), Math.max(w2, 0)
}

function aBH() {
	var aBL, aBM, aBN, aBO, aBP, aBQ, aBR, aBS, aBT, aBU, aBV, aBI = [224, 224, 224],
		aBJ = [
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
		aBK = [
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

	function aBj(dY, aBk) {
		w7[dY] = 0, w7[dY + 1] = 0, w7[dY + 2] = aBk, w7[dY + 3] = 0, aBl(dY)
	}

	function aBl(dY) {
		var a7;
		d0.aBm || (a7 = dZ.cy(dY), dY = dZ.bG(dY), d0.aBm = a7 >= fl.cv[0] && a7 <= fl.cv[2] && dY >= fl.cv[1] && dY <= fl.cv[3])
	}
	this.m = function(dS) {
		if (aBL = new Uint8Array(df.eM), aBM = new Uint8Array(df.eM), aBN = new Uint8Array(df.eM), aBO = new Uint8Array(df.eM), aBP = new Uint8Array(df.eM), aBQ = new Uint8Array(df.eM), aBR = new Uint8Array(df.eM), aBS = new Uint8Array(df.eM),
			aBT = new Uint8Array(df.eM), aBU = new Uint8Array(df.eM), this.oM = new Uint8Array(df.eM), (aBV = new Int32Array(4))[0] = -4 * y.aB, aBV[1] = 4, aBV[2] = -aBV[0], aBV[3] = -aBV[1], df.iA)
			for (var mb, u, a6 = df.eM - 1; 0 <= a6; a6--) u = lV.i5[lV.i6[a6]], mb = aR((aBK[u][3] + 1) * bx.random(), bx.value(100)), aBL[a6] = aBJ[u][0] + mb * aBK[u][0], aBM[a6] = aBJ[u][1] + mb * aBK[u][1], aBN[a6] = aBJ[u][2] + mb * aBK[u][
				2
			];
		else iB.cP && iB.iC.ms ? function(bZ) {
			var a6;
			for (a6 = df.iG - 1; 0 <= a6; a6--) aBL[a6] = 4 * bZ[a6][0], aBM[a6] = 4 * bZ[a6][1], aBN[a6] = 4 * bZ[a6][2]
		}(iB.iC.ms) : (function() {
			for (var a6 = df.eM - 1; a6 >= df.dg; a6--) aBL[a6] = 4 * aR(64 * bx.random(), bx.value(100)), aBM[a6] = 4 * aR(64 * bx.random(), bx.value(100)), aBN[a6] = 4 * aR(64 * bx.random(), bx.value(100))
		}(), function(dS) {
			for (var a6 = df.dg - 1; 0 <= a6; a6--) aBL[a6] = 4 * dS[a6].iX[0], aBM[a6] = 4 * dS[a6].iX[1], aBN[a6] = 4 * dS[a6].iX[2]
		}(dS));
		! function() {
			var a6, ia;
			for (a6 = df.eM - 1; 0 <= a6; a6--) ia = aR(aBL[a6] + aBM[a6] + aBN[a6], 3), aBL[a6] += aO(ia - aBL[a6], 2), aBM[a6] += aO(ia - aBM[a6], 2), aBN[a6] += aO(ia - aBN[a6], 2), aBL[a6] -= aBL[a6] % 4, aBM[a6] -= aBM[a6] % 4, aBN[a6] -=
				aBN[a6] % 4
		}(),
		function() {
			for (var a6 = df.eM - 1; 0 <= a6; a6--) aBL[a6] += aR(a6, 128), aBM[a6] += aR(a6 % 128, 32), aBN[a6] += aR(a6 % 32, 8), aBO[a6] = a6 % 8
		}(), this.aBf(),
			function() {
				for (var a6 = df.eM - 1; 0 <= a6; a6--) aBP[a6] = aBL[a6] < 32 ? aBL[a6] + 32 : aBL[a6] - 32, aBQ[a6] = aBM[a6] < 32 ? aBM[a6] + 32 : aBM[a6] - 32, aBR[a6] = aBN[a6] < 32 ? aBN[a6] + 32 : aBN[a6] - 32
			}(),
			function() {
				for (var a6 = df.eM - 1; 0 <= a6; a6--) aBS[a6] = 235 < aBL[a6] ? aBL[a6] - 20 : aBL[a6] + 20, aBT[a6] = 235 < aBM[a6] ? aBM[a6] - 20 : aBM[a6] + 20, aBU[a6] = 235 < aBN[a6] ? aBN[a6] - 20 : aBN[a6] + 20
			}()
	}, this.y8 = function(player) {
		var bZ = j1.jF;
		return bZ[0] = aBL[player], bZ[1] = aBM[player], bZ[2] = aBN[player], bZ
	}, this.aBf = function() {
		for (var a6 = df.eM - 1; 0 <= a6; a6--) this.oM[a6] = aBL[a6] + aBM[a6] + aBN[a6] < 280 ? 0 : 1
	}, this.cy = function(dY) {
		return aR(dY, 4) % y.aB
	}, this.bG = function(dY) {
		return aR(dY, 4 * y.aB)
	}, this.o0 = function(a7, a8) {
		return Math.floor(4 * (a8 * y.aB + a7))
	}, this.a7T = function(dY) {
		return this.sX(dY + aBV[0]) || this.sX(dY + aBV[1]) || this.sX(dY + aBV[2]) || this.sX(dY + aBV[3])
	}, this.a7R = function(dY, player) {
		return this.a14(dY + aBV[0], player) || this.a14(dY + aBV[1], player) || this.a14(dY + aBV[2], player) || this.a14(dY + aBV[3], player)
	}, this.da = function(player) {
		return player < df.dg && 2 !== dV.qh[player]
	}, this.a0z = function(dY) {
		return 208 <= w7[dY + 3]
	}, this.qp = function(player, dY) {
		return this.a0z(dY) && this.a1C(player, dY)
	}, this.a1C = function(player, dY) {
		return player === this.eQ(dY)
	}, this.a1D = function(dY) {
		return 208 <= w7[dY + 3] && w7[dY + 3] < 224
	}, this.a7N = function(dY) {
		return 224 <= w7[dY + 3] && w7[dY + 3] < 248
	}, this.a7S = function(dY) {
		for (var a6 = 3; 0 <= a6; a6--)
			if (this.eD(dY + aBV[a6])) return !0;
		return !1
	}, this.aBi = function(dY) {
		return 192 <= w7[dY + 3] && w7[dY + 3] < 208
	}, this.zx = function(dY, player) {
		return this.aBi(dY) && player === this.eQ(dY)
	}, this.e8 = function(dY) {
		return this.a0z(dY) || this.eJ(dY)
	}, this.eD = function(dY) {
		return 0 === w7[dY + 3] && 2 === w7[dY + 2]
	}, this.eJ = function(dY) {
		return 0 === w7[dY + 3] && 1 === w7[dY + 2]
	}, this.sX = function(dY) {
		return 0 === w7[dY + 3] && 3 === w7[dY + 2]
	}, this.eC = function(dY) {
		return this.sX(dY)
	}, this.a14 = function(dY, player) {
		return this.eJ(dY) || this.a0z(dY) && player !== this.eQ(dY)
	}, this.eQ = function(dY) {
		return w7[dY] % 4 * 128 + w7[dY + 1] % 4 * 32 + w7[dY + 2] % 4 * 8 + w7[dY + 3] % 8
	}, this.qq = function(dY) {
		aBj(dY, 1)
	}, this.zy = function(dY) {
		aBj(dY, 2)
	}, this.a15 = function(dY, player) {
		w7[dY] = aBL[player], w7[dY + 1] = aBM[player], w7[dY + 2] = aBN[player], w7[dY + 3] = 208 + aBO[player], aBl(dY)
	}, this.a1E = function(dY, player) {
		w7[dY] = aBP[player], w7[dY + 1] = aBQ[player], w7[dY + 2] = aBR[player], w7[dY + 3] = 224 + aBO[player], aBl(dY)
	}, this.a10 = function(dY, player) {
		w7[dY] = aBS[player], w7[dY + 1] = aBT[player], w7[dY + 2] = aBU[player], w7[dY + 3] = 248 + aBO[player], aBl(dY)
	}, this.zz = function(dY, player) {
		w7[dY] = aBI[0] + aBL[player] % 4, w7[dY + 1] = aBI[1] + aBM[player] % 4, w7[dY + 2] = aBI[2] + aBN[player] % 4, w7[dY + 3] = 192 + aBO[player], aBl(dY)
	}
}

function lE() {
	function aBo(aBn) {
		var aBv = 4 + .03 * (1 + 1.5 * av.aw.ax()) * ay.az / cz;
		return dy.a8U(aBn, j1.jH[1]) < aBv
	}
	this.eG = function(player, aBn) {
		return !!dy.vF(aBn) && eE.d4.nc !== eE.d4.nd && eE.d4.ne[player] !== eE.d4.nf && 0 !== dV.nb[player].length && !!eE.lR.nq(player, aBn) && !!aBo(aBn)
	}, this.a4F = function(player, vT, aBn) {
		return !!(dy.vF(aBn) && this.vU(player, vT) && eE.lR.vV(aBn) && aBo(aBn))
	}, this.vU = function(player, id) {
		for (var r7, g5 = player << 3, g6 = g5 + eE.d4.ne[player], r1 = eE.d4.r1, qz = eE.d4.qz, a6 = g5; a6 < g6; a6++)
			if (id === qz[r7 = r1[a6]]) return j1.jH[3] = r7, !0;
		return !1
	}, this.pz = function(e2) {
		var a4K = eE.lL.a4K;
		return !!this.vU(df.du, a4K) && (e9.eA.pz(a4K, e2), !0)
	}, this.aBp = function(fb, fc, aBq = !1) {
		var a6, g6, aBr, r1, rV, qv, aBs, p3, qx, aBt, player = df.du,
			aF = eE.d4.ne[player];
		if (0 === aF) return !1;
		for (r1 = eE.d4.r1, qv = eE.d4.qv, qx = eE.d4.qx, g6 = (player = player << 3) + aF, rV = .4 * q.r.jA(.5) * ay.az / cz, aBr = -1, a6 = player; a6 < g6; a6++) aBt = r1[a6], aBs = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(qx[aBt]))), (p3 = dy
			.a8P(fb, fc, qv[aBt])) - aBs < rV && (rV = p3, aBr = aBt);
		return !(aBr < 0 || (aBq ? j1.jE[0] = eE.d4.qz[aBr] : eE.lL.a4K = eE.d4.qz[aBr], 0))
	}, this.aBu = function(fb, fc) {
		var a6, aBr, rV, qv, aBs, p3, qx, aF = eE.d4.nc;
		if (aF < 1) return -1;
		for (qv = eE.d4.qv, qx = eE.d4.qx, rV = 1e3, aBr = -1, a6 = 0; a6 < aF; a6++) aBs = 16 * q.r.jA(.5) * (.625 + .125 * Math.sqrt(Math.sqrt(qx[a6]))), (p3 = dy.a8P(fb, fc, qv[a6])) < rV && p3 < aBs && (rV = p3, aBr = a6);
		return aBr
	}
}

function aBw() {
	this.zb = 0, this.gap = 0, this.aB9 = 0, this.hs = 0, this.m = function() {
		this.resize()
	}, this.resize = function() {
		this.zb = .0022 * q.r.jA(.5) * ay.az, this.aB9 = this.zb / ay.k7, this.gap = Math.max(Math.floor((av.aw.ax() ? .0114 : .01296) * ay.az), 2), this.hs = this.gap / ay.k7
	}
}

function ip() {
	this.bH = function() {
		if (0 !== gf.d4.iq && (bI.globalAlpha = Math.min(gf.d4.iq / 580, 1), bI.drawImage(gf.d4.ou, 1 + cx.cy(), 1 + cx.bG()), bI.globalAlpha = 1, df.e7)) {
			var bK = f8 / cz,
				hP = f9 / cz,
				hQ = (ay.ak + f8) / cz,
				hR = (ay.al + f9) / cz,
				es = gf.d4.ot * cz,
				ov = gf.d4.ov;
			for (let a6 = df.dg - 1; 0 <= a6; a6--) ! function(a6, es, bK, hP, hQ, hR, ov) {
				0 === dV.eg[a6] || 0 === dV.ev[a6] || (hQ = ay.ak * ((dV.nu[a6] + dV.nw[a6] + 1) / 2 - bK) / (hQ - bK) - .5 * es, bK = ay.al * ((dV.nv[a6] + dV.nx[a6] + 1) / 2 - hP) / (hR - hP) - .5 * es, hQ > ay.ak) || bK > ay.al || hQ < -
					es || bK < -es || (bI.setTransform(cz, 0, 0, cz, hQ, bK), bI.drawImage(ov[df.iA ? lV.i6[a6] : 1], 0, 0))
			}(a6, es, bK, hP, hQ, hR, ov);
			bI.setTransform(cz, 0, 0, cz, 0, 0)
		}
	}
}

function aC0() {
	var al, aq, fw, aC1, aC2, aC3 = -1;

	function aC4() {
		var bQ, bJ = aq.getContext("2d", {
			alpha: !0
		});
		bJ.clearRect(0, 0, al, al), bJ.fillStyle = i.xe, bJ.fillRect(0, 0, al, al), 0 === aC1 && (bJ.fillStyle = i.a6Y, bJ.fillRect(0, 0, al, al)), bJ.fillStyle = i.bM, bJ.fillRect(0, 0, al, 1), bJ.fillRect(0, 0, 1, al), bJ.fillRect(0, al - 1, al,
			1), bJ.fillRect(al - 1, 0, 1, al), bQ = .9 * al / bN.get(0).width, bJ.imageSmoothingEnabled = !0, bJ.setTransform(bQ, 0, 0, bQ, Math.floor((al - bQ * bN.get(0).width) / 2), Math.floor((al - bQ * bN.get(0).height) / 2)), bJ.drawImage(bN
				.get(0), 0, 0), bJ.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aC7(fb, fc) {
		if (!dq.dr) return fb <= al + b2.gap && fc >= b8.a8 ? 0 : -1;
		if (fb <= 4 * al + b2.gap) {
			if (fc >= b8.a8) return 0;
			if (fc >= b8.a8 - al - aC2 * b2.gap) return 2
		} else if (fb <= 7 * al + b2.gap && fc >= b8.a8 - al - aC2 * b2.gap) return 1;
		return -1
	}
	this.dr = !1, this.m = function() {
		aC1 = -1, this.dr = !1, aC2 = av.aw.ax() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		al = b8.al, (aq = document.createElement("canvas")).width = al, aq.height = al, fw = q.r.ft(1, (av.aw.ax() ? .5 : .45) * al), aC4()
	}, this.kY = function() {
		this.dr = !this.dr, this.dr ? (hn.ho.hideCMPButton(), gj.kX(!1), df.dp && gj.a1m && gj.kZ(!0), this.aC5()) : (aC1 = -1, aC4(), !df.iP || 1 !== df.gP || df.e7 || df.dp || av.aw.setState(1)), bA.bE = !0
	}, this.aC5 = function() {
		(df.iP || df.dp) && 1 === df.gP && (gk.oK(!0), df.e7 || setTimeout(function() {
			d0.aC6()
		}, 0), av.aw.setState(0))
	}, this.bF = function(fb, fc) {
		return 0 <= (aC3 = aC7(fb, fc))
	}, this.fU = function(fb, fc) {
		fb = aC7(fb, fc);
		fb !== aC1 && (aC1 = fb, this.dr || aC4(), bA.bE = !0)
	}, this.jr = function(fb, fc) {
		var iY = aC7(fb, fc);
		if (aC3 !== iY) return !1;
		if (this.dr) {
			if (df.fR) return 0 <= iY && gj.kX(!1), !df.dp;
			if (0 === iY) df.m8();
			else if (1 === iY) this.kY();
			else if (2 === iY) g.g2(1, 0);
			else {
				if (! function() {
						if (df.iP || 1 !== df.gP || df.dp || gq.ai) return 1;
						dq.kY()
					}()) return !1;
				g0.kB(fb, fc) || b7.kC(fb, fc)
			}
			return !0
		}
		return 0 === iY && (this.kY(), !0)
	}, this.bH = function() {
		var ak;
		this.dr ? (ak = Math.floor(5.5 * al), bI.setTransform(1, 0, 0, 1, b2.gap, b8.a8), bI.fillStyle = i.xe, bI.fillRect(0, 0, ak, al), 0 === aC1 ? (bI.fillStyle = i.a6Y, bI.fillRect(0, 0, 4 * al, al)) : 1 === aC1 && (bI.fillStyle = i.a6Y, bI
				.fillRect(4 * al, 0, Math.floor(1.5 * al), al)), bI.fillStyle = i.bM, bI.fillRect(0, 0, ak, 1), bI.fillRect(0, 0, 1, al), bI.fillRect(4 * al, 0, 1, al), bI.fillRect(0, al - 1, ak, 1), bI.fillRect(ak - 1, 0, 1, al), bI.font =
			fw, q.r.textBaseline(bI, 1), q.r.textAlign(bI, 1), bI.fillText(e.f[79], 2 * al, .54 * al), ak = .4 * al, dq.xn(b2.gap + 4 * al + (1.5 * al - ak) / 2, b8.a8 + .3 * al, ak), ak = 1, bI.setTransform(1, 0, 0, 1, b2.gap, b8.a8 - ak *
				aC2 * b2.gap - ak * al), bI.fillStyle = i.xe, bI.fillRect(0, 0, 4 * al, al), aC1 === ak + 1 && (bI.fillStyle = i.a6Y, bI.fillRect(0, 0, 4 * al, al)), bI.fillStyle = i.bM, bI.fillRect(0, 0, 4 * al, 1), bI.fillRect(0, 0, 1, al),
			bI.fillRect(4 * al, 0, 1, al), bI.fillRect(0, al - 1, 4 * al, 1), bI.fillText(e.f[79 + ak], 2 * al, .54 * al), bI.setTransform(1, 0, 0, 1, 0, 0)) : bI.drawImage(aq, b2.gap, b8.a8)
	}, this.u7 = function(player) {
		return 0 !== dV.eg[player] && 2 !== df.gP && dZ.da(player)
	}, this.xn = function(a7, a8, aF) {
		bI.setTransform(1, 0, 0, 1, a7, a8), bI.lineWidth = b2.zb, bI.strokeStyle = i.bM, bI.beginPath(), bI.moveTo(0, 0), bI.lineTo(aF, aF), bI.moveTo(0, aF), bI.lineTo(aF, 0), bI.stroke()
	}
}

function rs(a3R, type = 0, aCC = null) {
	var cY;
	this.cY = document.createElement("input"), (cY = this.cY).type = type ? "number" : "text", cY.id = "input" + a3R.title, cY.value = a3R.value, cY.style.width = "100%", cY.style.userSelect = "none", cY.style.outline = "none", cY.style.resize =
		"none", cY.style.border = "inherit", cY.style.font = "inherit", cY.style.color = i.bM, cY.style.backgroundColor = i.fo, cY.style.fontSize = "1em", cY.style.padding = "0.1em 0.2em", -1 !== a3R.aQ && (cY.addEventListener("blur", function() {
			aZ.d6.aX(a3R.aQ, cY.value)
		}), cY.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), aZ.d6.aX(a3R.aQ, cY.value), aCC ? aCC() : cY.blur())
		}))
}

function aCD() {
	this.aCE = function(g4, g5, g6) {
		bc.bd(75), bc.bh(1, 0), bc.bh(6, 21), bc.bh(6, g4), bc.bh(1, +(g5 < 0)), bc.bh(1, +(g6 < 0)), bc.bh(30, Math.abs(g5)), bc.bh(30, Math.abs(g6)), c8.d4.send(0, bc.bg)
	}, this.aCF = function(g4, aCG, aCH) {
		bc.bd(18 + 16 * aCG.length + 30), bc.bh(1, 0), bc.bh(6, 22), bc.bh(6, g4), c8.cJ.ll(aCG), bc.bh(30, aCH), c8.d4.send(0, bc.bg)
	}, this.aCI = function(aCJ, i7) {
		var aF = i7.length;
		let aBD = 0;
		for (let a6 = 0; a6 < aF; a6++) aBD += i7[a6].length;
		bc.bd(21 + 3 * aF + 16 * aBD), bc.bh(1, 0), bc.bh(6, 23), bc.bh(3, aCJ), bc.bh(4, aF), bc.bh(7, aBD);
		for (let a6 = 0; a6 < aF; a6++) bc.bh(3, i7[a6].length), d7.dK.bi(i7[a6]);
		c8.d4.send(0, bc.bg)
	}, this.aCK = function(aCJ, g5, g6) {
		bc.bd(52), bc.bh(1, 0), bc.bh(6, 24), bc.bh(3, aCJ), bc.bh(1, +(g5 < 0)), bc.bh(1, +(g6 < 0)), bc.bh(20, Math.abs(g5)), bc.bh(20, Math.abs(g6)), c8.d4.send(0, bc.bg)
	}
}

function d(title, aCL, backgroundColor = i.oQ, aCM = !0) {
	let aCN = document.createElement("button");
	this.button = aCN, this.w = aCL;
	let aCO;

	function aCP() {
		if (aCM) {
			var ic = q.color.a3V(aCO);
			if (0 < ic[0] && ic[0] < 255 && ic[0] === ic[1] && ic[0] === ic[2]) return
		}
		this.style.backgroundColor = q.color.aCP(aCO, 50)
	}

	function aCR() {
		this.style.backgroundColor = aCO
	}

	function aCQ() {
		this.style.backgroundColor = aCO, this.blur()
	}
	var self;
	this.s0 = function(u) {
			aCO = u, aCN.style.backgroundColor = u
		}, self = this, aCN.innerHTML = title, aCN.style.color = i.bM, aCN.style.userSelect = "none", aCN.style.outline = "none", aCN.style.overflowWrap = "break-word", self.s0(backgroundColor), aCN.style.border = "none", aCN.style.font = "inherit",
		aCN.style.fontSize = "1em", aCN.style.padding = "0em 0.3em", aCN.onclick = aCL, aCN.addEventListener("mouseover", aCP), aCN.addEventListener("mouseout", aCQ), aCN.addEventListener("focus", aCP), aCN.addEventListener("blur", aCR)
}

function lH() {
	var aCS, a4I = 8,
		aCT = new Array(2);

	function aCU(aQ) {
		var gv = a4I + 4,
			km = q.r.kn(gv, gv),
			ko = q.r.getContext(km, !0),
			ks = q.r.getImageData(ko, gv, gv),
			p4 = ks.data;
		return aCV(p4, gv + 1, aQ), aCV(p4, gv + 2, aQ), aCV(p4, 2 * gv + 1, aQ), aCV(p4, 2 * gv - 3, aQ), aCV(p4, 2 * gv - 2, aQ), aCV(p4, 3 * gv - 2, aQ), aCV(p4, gv * (gv - 3) + 1, aQ), aCV(p4, gv * (gv - 2) + 1, aQ), aCV(p4, gv * (gv - 2) + 2,
			aQ), aCV(p4, gv * (gv - 2) - 2, aQ), aCV(p4, gv * (gv - 1) - 3, aQ), aCV(p4, gv * (gv - 1) - 2, aQ), ko.putImageData(ks, 0, 0), km
	}

	function aCV(p4, e2, aQ) {
		e2 *= 4;
		p4[e2] = 255, p4[1 + e2] = 255, p4[2 + e2] = aQ, p4[3 + e2] = 255
	}

	function kn(player) {
		var km = q.r.kn(a4I, a4I);
		return function(ko, player) {
			var a7, a8, fX, e2, aCX, xO, gv = a4I,
				ks = q.r.getImageData(ko, gv, gv),
				p4 = ks.data,
				mb = (gv >> 1) - .5,
				a3a = dZ.y8(player),
				aCZ = q.cc.aAq(a3a, .5);
			q.cc.aAr(a3a, aCZ, 300) || q.cc.aAt(a3a, 100);
			for (a8 = 0; a8 < gv; a8++)
				for (a7 = 0; a7 < gv; a7++) xO = (gv - 1.5) * (gv - 1.5) / 4, aCX = (fX = (fX = a7 - mb) * fX + (fX = a8 - mb) * fX) <= (gv - 4.5) * (gv - 4.5) / 4 ? aCZ : a3a, p4[e2 = 4 * (a8 * gv + a7)] = aCX[0], p4[1 + e2] = aCX[1], p4[2 +
					e2] = aCX[2], p4[3 + e2] = xO < fX ? 0 : 255;
			ko.putImageData(ks, 0, 0)
		}(q.r.getContext(km, !0), player), km
	}
	this.m = function() {
		aCS = new Array(df.eM), aCT[0] = aCU(255), aCT[1] = aCU(0)
	}, this.bH = function() {
		var a6, player, aCa, hO, aCb, a9, aCe, aCg, aCh, qv = eE.d4.qv,
			qs = eE.d4.qs,
			qx = eE.d4.qx,
			aCi = aCS,
			aCj = df.du,
			aCk = -1,
			aF = eE.d4.nc,
			aCl = ay.ak,
			aCm = ay.al,
			rM = y.aB << 4,
			v6 = cz,
			e4 = v6 / a4I,
			bK = f8 / v6,
			hP = f9 / v6,
			fX = (aCl + f8) / v6 - bK,
			fY = (aCm + f9) / v6 - hP,
			ko = bI;
		for (eE.eF.vU(df.du, eE.lL.a4K) && (aCk = j1.jH[3]), ko.fillStyle = i.bM, q.r.textAlign(ko, 1), q.r.textBaseline(ko, 1), a6 = 0; a6 < aF; a6++) player = qs[a6] >> 3, hO = qx[a6], aCa = .625 + .125 * Math.sqrt(Math.sqrt(hO)), aCb = (a9 =
				qv[a6]) % rM / 16 - aCa, a9 = aCm * (Math.floor(a9 / rM) / 16 - aCa - hP) / fY, aCe = -2 * (aCh = v6 * aCa) * (1 + (aCg = +(player === aCj)) / 8), aCg = aCg * aCh / 4, (aCh = aCl * (aCb - bK) / fX) < aCe || a9 < aCe || aCl + aCg <
			aCh || aCm + aCg < a9 || (aCb = aCa * v6, ko.imageSmoothingEnabled = (aCe = 2 * aCa * e4) < 3, void 0 === (aCg = aCi[player]) && (aCi[player] = aCg = kn(player)), player === aCj && (ko.setTransform(aCe, 0, 0, aCe, aCh - 2 * aCe, a9 -
				2 * aCe), ko.drawImage(aCT[+(a6 === aCk)], 0, 0)), ko.setTransform(aCe, 0, 0, aCe, aCh, a9), ko.drawImage(aCg, 0, 0), (aCa = Math.floor(function(hO) {
				if (hO < 1e3) return .42;
				if (hO < 1e4) return .34;
				if (hO < 1e6) return .26;
				if (hO < 1e8) return .19;
				return .15
			}(hO) * aCb)) < 6) || (ko.setTransform(1, 0, 0, 1, 0, 0), ko.font = q.r.ft(1, aCa), ko.fillText(q.cg.hX(hO), aCh + aCb, a9 + aCb + .1 * aCa));
		ko.imageSmoothingEnabled = !1, ko.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aCp() {
	this.aCq = function() {
		bc.bd(39), bc.bh(1, 0), bc.bh(6, 16), c8.cJ.lX(), c8.d4.send(0, bc.bg)
	}, this.aCr = function(cB) {
		bc.bd(115), bc.bh(1, 0), bc.bh(6, 17), dJ.d8.bj(aZ.af.data[105].value, 5), dJ.d8.bj(aZ.af.data[106].value, 8), bc.bh(30, aZ.af.data[109].value), c8.d4.send(cB, bc.bg)
	}, this.aCt = function() {
		bc.bd(55), bc.bh(1, 0), bc.bh(6, 18), dJ.d8.bi(aZ.af.data[110].value), c8.d4.send(0, bc.bg)
	}, this.aCu = function(username) {
		bc.bd(12 + 16 * username.length), bc.bh(1, 0), bc.bh(6, 20), c8.cJ.ll(username), c8.d4.send(0, bc.bg)
	}
}

function a6K() {
	a0v = 0, aCy = 2048, a0w = new Uint32Array(4 * aCy), aCz = 0, aD0 = new Uint32Array(aCy), (a03 = new Int32Array(4))[0] = -4 * y.aB, a03[1] = 4, a03[2] = -a03[0], a03[3] = -a03[1], aD1 = new Uint8Array(y.aB * y.aC)
}

function aD3(player) {
	a0x = player, aD2 = !1, aD4(), aD5();
	for (var a6 = hU.yV(a0x) - 1; 0 <= a6; a6--) 0 === hU.yZ(a0x, a6) && (aCv = a6, aD6());
	aD2 && aD7()
}

function aD7() {
	a0y(), a11()
}

function aD6() {
	a17 = hU.ya(a0x, aCv), aCw = hU.hV(a0x, aCv), aD8(), (0 !== a0v && (aDA(), aDB()) ? aDC : aD9)()
}

function aDB() {
	return (aCx = aR(aCw, a0v)) > df.vK
}

function aDA() {
	for (var a6 = a0v - 1; 0 <= a6; a6--) aD1[aR(a0w[a6], 4)] = 0
}

function aD9() {
	var eu;
	1 === hU.yV(a0x) && qR.hD(a0x), a0x !== df.du ? (dV.l5[a0x] += aCw, iv.mU(a0x)) : (eu = dV.l5[a0x], dV.l5[a0x] += aCw, iv.mU(a0x), j3.mV[13] -= dV.l5[a0x] - eu), hU.zt(a0x, aCv)
}

function aD4() {
	var a6, aF = dV.qk[a0x].length;
	for (aCz = 0, a6 = (aCy < aF ? aCy : aF) - 1; 0 <= a6; a6--) aD0[aCz++] = dV.qk[a0x][a6]
}

function aD5() {
	for (var a6 = dV.qk[a0x].length - 1; 0 <= a6; a6--) dZ.e8(dV.qk[a0x][a6]) && dZ.a1E(dV.qk[a0x][a6], a0x);
	dV.qk[a0x] = []
}

function aD8() {
	a0v = 0, (a17 === df.eM ? aDD : aDE)()
}

function aDE() {
	for (var dY, es, a6, ia = 3; 0 <= ia; ia--)
		for (a6 = aCz - 1; 0 <= a6; a6--) es = aR(dY = aD0[a6] + a03[ia], 4), 0 === aD1[es] && dZ.a0z(dY) && dZ.eQ(dY) === a17 && (aD1[es] = 1, a0w[a0v++] = dY)
}

function aDD() {
	for (var dY, es, a6, ia = 3; 0 <= ia; ia--)
		for (a6 = aCz - 1; 0 <= a6; a6--) es = aR(dY = aD0[a6] + a03[ia], 4), 0 === aD1[es] && dZ.eJ(dY) && (aD1[es] = 1, a0w[a0v++] = dY)
}

function lS() {
	function l2(rC, aDF) {
		if (function(rC, aBn) {
				var a8D = dy.a6u(rC),
					aDI = Math.abs(dy.a4R(aBn) - dy.a4R(a8D)),
					a8D = Math.abs(dy.a4S(aBn) - dy.a4S(a8D));
				return 0 !== Math.max(aDI, a8D) && (function(r2, rC, aDI, aDJ) {
					var aDL = dy.a8R(r2),
						r2 = dy.a8T(r2),
						aDN = dy.a8R(rC),
						rC = dy.a8T(rC),
						aDN = aDN - aDL,
						rC = rC - r2,
						aDR = Math.abs(aDN),
						aDS = Math.abs(rC),
						aDN = 0 < aDN ? 1 : 3,
						rC = 0 < rC ? 2 : 0;
					aDS < aDR ? aDV(aDL, r2, aDL + aDR, r2 + aDS, aDN, rC, aDI) : aDV(r2, aDL, r2 + aDS, aDL + aDR, rC, aDN, aDJ)
				}(rC, dy.r3(aBn), aDI, a8D), !0)
			}(rC, aDF)) {
			if (0 === j1.jD[0]) return !!dZ.eD(aDF << 2);
			if (function(aBn) {
					if (dZ.eD(aBn << 2)) return 1;
					return function(aBn) {
						var a6, a5T, qr = eE.d4.qr,
							aDZ = dy,
							aF = j1.jD[0],
							aDa = 4 * aBn;
						for (a6 = aF - 1; 0 <= a6; a6--)
							if (a5T = qr[a6], aDa = aDZ.a8X(aDa, a5T + 2 & 3), dZ.eD(aDa)) return j1.jD[0] = a6, j1.jH[1] = aDa >> 2, j1.jH[2] = 1 + a5T, 1;
						return
					}(aBn)
				}(aDF)) {
				var a6, aDF = dy.a6u(rC),
					p4 = w7,
					qr = eE.d4.qr,
					aF = j1.jD[0] - 1,
					aDa = 4 * aDF,
					a8A = dy.a8A;
				for (a6 = 0; a6 < aF; a6++)
					if (aDa += a8A[qr[a6]], 0 !== p4[aDa + 3] || 2 !== p4[aDa + 2]) return !!void 0;
				return !!1
			}
		}
		return !1
	}

	function aDV(aDL, aDM, aDN, aDO, aDT, aDU, aDI) {
		for (var a8, qr = eE.d4.qr, es = 0, aDW = 0, al = aDO - aDM, ak = aDN - aDL, aDX = aDL % 16, a6 = 1; a6 <= aDI; a6++) qr[es++] = aDT, qr[es] = aDU, es += (a8 = (al * (aDX + (a6 << 4)) + .5) / ak >> 4) - aDW, aDW = a8;
		j1.jK(j1.jD, es)
	}
	this.nq = function(player, aDF) {
		var a5T, a8D, a8C = dy.a8G(player, aDF);
		return a8C !== aDF && (a5T = dy.a8B(a8C, aDF), a8D = dy.a8W(a8C, a5T), !(!dZ.eD(a8D << 2) && (a5T = dy.a8F(a8C, aDF, a5T), a8D = dy.a8W(a8C, a5T), dZ.sX(a8D << 2) || !dZ.eD(a8D << 2)) || (j1.jH[0] = a8D, j1.jH[1] = aDF, j1.jH[2] = 0, !l2(
			dy.r3(a8D), aDF)) || 0 !== j1.jH[2] && dy.a8O(player, j1.jH[1] + dy.no[j1.jH[2] - 1] << 2)))
	}, this.vV = function(aDF) {
		var r2 = eE.d4.qv[j1.jH[3]];
		return j1.jH[1] = aDF, j1.jH[2] = 0, l2(r2, aDF)
	}
}

function ok() {
	this.mp = [], this.f = ["Zaakceptuj", "Usunąłeś {0}.", "Zostałeś usunięty przez {0}.", "Gratulacje! Wygrałeś grę.", "{0} wygrał grę.", "{0} złamał pakt o nieagresji.", "{0} atakuje Cię!", "Wybierz swoją pozycję startową!", "Poddałeś się!",
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

function aDc() {
	this.aDd = function() {
		if (bf.size < bc.dD(38)) c8.d4.cR(0, 3259);
		else {
			var g4 = bf.dB(6),
				aF = bf.dB(10),
				aBD = bf.dB(15);
			if (bf.dH(38 + 51 * aF + 16 * aBD)) {
				var data = [];
				let fd, v0;
				v0 = 0 === g4 ? (fd = .1, 1) : (fd = .001, 3);
				for (let a6 = 0; a6 < aF; a6++) data.push(["" + (bf.dB(30) + 1), dJ.dK.dL(bf.dB(5)), (fd * bf.dB(16)).toFixed(v0)]);
				8 === g.dM && g.dN().dO(21, !0, {
					g4: g4,
					title: g4 ? "Clan Ranking" : "1v1 Player Ranking",
					data: data
				})
			} else c8.d4.cR(0, 3260)
		}
	}, this.aDe = function() {
		if (bf.size < bc.dD(29)) c8.d4.cR(0, 3265);
		else {
			var aDf = bf.dB(4),
				aDg = bf.dB(7),
				aDh = bf.dB(11);
			if (bf.dH(29 + 16 * aDg + 16 * aDh + 11 * aDf)) {
				var data = [];
				for (let a6 = 0; a6 < aDf; a6++) {
					var iZ = dJ.dK.dL(bf.dB(3)),
						aDi = bf.dB(8),
						aDj = [];
					for (let hC = 0; hC < aDi; hC++) aDj.push(bf.dB(16));
					data.push({
						name: "[" + iZ + "]",
						aDj: aDj
					})
				}
				8 === g.dM && g.dN().dO(23, !0, data)
			} else c8.d4.cR(0, 3266)
		}
	}
}

function gD() {
	function aDp(bV, aDr = !1) {
		aDr ? f6.a8f = "Replay Error: " + bV : g.g2(4, 3, new lv("⚠️ Replay Error", bV, !0))
	}
	this.hp = function(bV) {
		if (dJ.d8.ba(dJ.d8.bX(dJ.d8.bU(bV))), f6.a8f = "", ! function() {
				if (bf.size < 10) aDp("File Too Small");
				else if (bf.dB(9) !== a4n && aDp("Incompatible Version Error", !0), bf.dB(31) !== bf.size) aDp("Size Error");
				else {
					if (function(al) {
							var a6, dY = bf.bg,
								aF = bf.size,
								lg = 0;
							for (a6 = 7; a6 < aF; a6++) lg = lg + dY[a6] & 65535;
							return lg === al
						}(bf.dB(16))) return 1;
					aDp("Hash Error")
				}
				return
			}()) return !1;
		var gH;
		(gH = {}).gI = bf.dB(9), gH.gE = bf.dB(14), gH.gF = bf.dB(4), gH.gG = 1 === bf.dB(1), gH.gJ = bf.dB(6), gH.gK = bf.dB(14), gH.aDs = bf.dB(10), hk.g8.gH = gH,
			function() {
				var a6, n0, iX, name, aF = hk.g8.gH.aDs,
					dS = [];
				for (a6 = 0; a6 < aF; a6++) n0 = bf.dB(1), iX = [bf.dB(6), bf.dB(6), bf.dB(6)], name = dJ.dK.dL(bf.dB(5)), dS.push({
					name: name,
					iX: iX,
					n0: n0
				});
				if (hk.g8.gH.dS = dS, 8 === hk.g8.gH.gF)
					for (a6 = 0; a6 < aF; a6++) dS[a6].wE = bf.dB(14)
			}();
		var a6, aF, aDt = hk.g8.gH;
		if (1 === aDt.dS.length)
			for (aF = 6 < aDt.gF ? 1 : aDt.gF + 2, aDt.gW = new Array(aF), aDt.gX = new Array(aF), a6 = 0; a6 < aF; a6++) aDt.gW[a6] = bf.dB(3), aDt.gX[a6] = bf.dB(9) + 1;
		return !! function() {
			var sI = bf.dB(5),
				aDu = bf.dB(30),
				aDv = bf.dB(30);
			if (aDu + aDv > 8 * bf.size) return void aDp("Corrupted File");
			return function(aF) {
					var a6, id, aDy = new Uint8Array(aF),
						aDz = new Uint16Array(aF),
						aE0 = new Uint32Array(aF),
						aE1 = new Uint32Array(aF);
					for (hk.g8.a1s = aDy, hk.g8.a1t = aDz, hk.g8.a1u = aE0, hk.g8.a1v = aE1, a6 = 0; a6 < aF; a6++) aDy[a6] = id = bf.dB(4), aDz[a6] = bf.dB(9), 0 === id ? aE0[a6] = bf.dB(22) : 1 === id ? (aE0[a6] = bf.dB(10), aE1[a6] = bf
						.dB(10)) : 2 === id ? (aE0[a6] = bf.dB(10), aE1[a6] = bf.dB(9)) : 3 === id || 4 === id ? (aE0[a6] = bf.dB(10), aE1[a6] = bf.dB(22)) : 5 === id || 6 === id ? aE0[a6] = bf.dB(10) : 7 === id && (aE0[a6] = bf.dB(1))
				}(aDu),
				function(aF, sI) {
					var a6, a1x = new Uint8Array(aF),
						a1z = new Array(aF);
					for (a1z.fill(0), hk.g8.a1x = a1x, hk.g8.a1z = a1z, a6 = 0; a6 < aF; a6++) a1x[a6] = bf.dB(1), a1z[a6] = bf.dB(sI)
				}(aDv, sI), 1
		}() && (bf.aQ < 8 * bf.size - 13 || bf.aQ > 8 * bf.size ? (aDp("Out Of Bounds Error: " + bf.aQ + " " + 8 * bf.size), !1) : (hk.g8.hl = bV, !0))
	}
}

function aE5() {
	var aEY;
	lh || (aE7(), a4H(), ny = new tn, uC = new a9x, q = new ca, i = new a6W, df = new a6A, d7 = new a9W, dJ = new a4N, na = new tB, qR = new aE8, a6J = new nW, gi = new h0, fT = new aE9, a4P = new a76, c0 = new a9K, b7 = new aEA, dq = new aC0, f6 =
		new a8Y, qL = new aEB, go = new y0, fx = new a7X, b8 = new oB, cx = new fA, kG = new aEC, gn = new a4a, gk = new aED, gm = new a0O, gp = new ah, xX = new aEE, kg = new aEF, cM = new a2S, gM = new aAJ, bN = new aEG, dZ = new aBH, uq =
		new ua, hU = new a7o, iv = new mA, a2s = new zS, fZ = new aEH, dV = new sf, a6G = new zL, iH = new aB0, xA = new aEI, qE = new vl, aM = new a4w, kR = new aEJ, c8 = new aEK, bx = new a86, hA = new zh, gc = new a3X, k8 = new o6, gr =
		new a67, ay = new a45, ke = new wm, aAK = new zY, gl = new a2c, qM = new aEL, eO = new aA2, a4A = new aAc, qn = new a4r, a6L = new l0, a6M = new a3v, kM = new uP, iB = new mq, e9 = new a0K, hk = new g7, gj = new aEM, bc = new aEN, bf =
		new aEO, aE2 = new aEP, g0 = new jj, dy = new a89, eE = new lD, j1 = new jC, gf = new im, vc = new aEQ, ek = new xw, y = new q5, kE = new di, g = new zD, hn = new mj, e = new oc, av = new aER, lh = new a4o, em = new a6U, aZ = new l8, lV =
		new hv, ep = new aES, wh = new fq, fl = new co, d0 = new aET, aE3 = new a7z, j3 = new a0B, gq = new a5d, bA = new aEU, oI = new aEV, b2 = new aBw, cS = new lu, aE4 = new aEW, lh.m(), av.m(), ay.a2m(), aZ.m(), e.m(), aE4.m(), q.m(), uq
	.m(), aE3.m(), c8.m(), d7.m(), dJ.m(), y.m(), a24(), (aEY = document.getElementById("usernameField")) && document.body.removeChild(aEY), wg = new a04, ay.m(), av.aw.aEZ(), bA.m(), b2.m(), wh.m(), (a1K = new yf).m(), a2W = new aAA, bx.m(), iv
		.mH(), hn.m(), qE.m(), cM.m(), kM.m(), kG.m(), a6G.m(), g0.m(), bN.m(), bA.bE = !0, setTimeout(function() {
			y.bd(2, 14071)
		}, 0), g.g2(5, 5), aE2.aEa(), av.aw.aEb(), ay.ze(), lh.a4q = 1)
}

function aEc() {
	this.cP = !1, this.bD = function() {
		bA.bC() % 250 != 249 || df.dp || (c8.cJ.le(+(this.cP && 0 < dV.eg[df.du]), dR + eE.d4.nc), this.cP = !1)
	}
}

function aE8() {
	var aEe, h3, h4, h5, aEf, aEg;

	function aEj(a88) {
		for (var a6 = h3 - 1; 0 <= a6; a6--) 0 === h5[h4[a6]] && dV.ev[h4[a6]] >= a88 && aD3(h4[a6])
	}

	function aEi(player) {
		10 === h5[player] ? h5[player] = aEe : dV.ev[player] < 1e3 ? h5[player] = 3 : dV.ev[player] < 1e4 ? h5[player] = 2 : dV.ev[player] < 6e4 ? h5[player] = 1 : h5[player] = 0
	}
	this.m = function() {
		aEf = aEg = 0, aEe = 6, h3 = 0, h4 = new Uint16Array(df.eM), h5 = new Uint8Array(df.eM)
	}, this.bD = function() {
		var a6;
		for (aEf = j3.mV[13], aEg = dV.l5[df.du], a6 = h3 - 1; 0 <= a6; a6--) 10 === h5[h4[a6]] ? aEi(h4[a6]) : 0 == h5[h4[a6]]-- && (aEi(h4[a6]), aD3(h4[a6]));
		16e4 <= dV.ev[f4[0]] && (aEj(16e4), 3e5 <= dV.ev[f4[0]]) && aEj(3e5), dV.ev[df.du] > j3.mV[7] && (j3.mV[7] = dV.ev[df.du]), j3.mV[14] += aEg - dV.l5[df.du] + aEf - j3.mV[13]
	}, this.hD = function(player) {
		for (var hC, a6 = h3 - 1; 0 <= a6; a6--)
			if (player === h4[a6]) {
				for (h3--, hC = a6; hC < h3; hC++) h4[hC] = h4[hC + 1];
				return
			}
	}, this.hG = function(player, aEl) {
		for (var a6 = h3 - 1; 0 <= a6; a6--)
			if (player === h4[a6]) return;
		h4[h3++] = player, h5[player] = aEl ? 2 : 10
	}
}

function og() {
	this.mp = ["s"], this.f = ["Accept", "You conquered {0}.", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} is attacking you!", "Choose your start position!",
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

function aEI() {
	this.xB = new aEm, this.p4 = new aEn
}

function cm() {
	this.mu = function(aL) {
		return [aL >> 12 & 63, aL >> 6 & 63, 63 & aL]
	}, this.a3T = function(aL) {
		var bZ = this.mu(aL);
		for (let a6 = 0; a6 < 3; a6++) bZ[a6] = ~~(4.05 * bZ[a6]);
		return bZ
	}, this.wX = function(aL) {
		aL = this.a3T(aL);
		return q.color.a6X(aL[0], aL[1], aL[2])
	}, this.a3U = function(bZ) {
		for (let a6 = 0; a6 < 3; a6++) bZ[a6] = ~~(bZ[a6] / 4.04);
		return (bZ[0] << 12) + (bZ[1] << 6) + bZ[2]
	}, this.a6X = function(kQ, gS, iV) {
		return "rgb(" + kQ + "," + gS + "," + iV + ")"
	}, this.y9 = function(kQ, gS, iV, hC) {
		return "rgba(" + kQ + "," + gS + "," + iV + "," + hC.toFixed(3) + ")"
	}, this.a3V = function(u) {
		var bZ = u.split("(")[1].split(","),
			jF = (bZ.length, j1.jF);
		for (let a6 = 0; a6 < 3; a6++) jF[a6] = parseInt(bZ[a6]);
		return jF
	}, this.aCP = function(aEo, ia) {
		var bZ = aEo.slice(aEo.indexOf("(") + 1, aEo.indexOf(")")).split(","),
			jF = j1.jF;
		for (let a6 = 0; a6 < 3; a6++) jF[a6] = ny.oV(parseInt(bZ[a6].trim(), 10) + ia, 0, 255);
		return 3 === bZ.length ? this.a6X(jF[0], jF[1], jF[2]) : this.y9(jF[0], jF[1], jF[2], parseFloat(bZ[3].trim()))
	}, this.a3S = function(bZ) {
		let bV = "#";
		for (let a6 = 0; a6 < 3; a6++) {
			var kQ = bZ[a6].toString(16);
			bV += 1 === kQ.length ? "0" + kQ : kQ
		}
		return bV
	}, this.a3W = function(bV) {
		var kQ, gS;
		return bV.length < 7 ? i.hT : (kQ = parseInt(bV.slice(1, 3), 16), gS = parseInt(bV.slice(3, 5), 16), bV = parseInt(bV.slice(5, 7), 16), this.a6X(kQ, gS, bV))
	}
}

function zE() {
	this.af = {}, this.m6 = function() {
		g.g2(5, 5)
	}, this.wW = function() {
		g.u5(), gM.m()
	}, this.wV = function() {
		g.u5(), kg.aEp(aZ.af.data[10].value), kg.m()
	}, this.u4 = function() {
		g.g2(0 === cM.cN() ? 5 : 0)
	}, this.tz = function() {
		if (1 === aZ.af.data[130].value) g.g2(8, g.dN().cC, new g3(24, {
			aCJ: aZ.af.data[125].value,
			g5: aZ.af.data[128].value,
			g6: aZ.af.data[129].value,
			aEq: aZ.af.data[127].value
		}));
		else {
			let bZ = aZ.af.data[126].value.split(",");
			bZ = bZ.slice(0, 10);
			for (let a6 = 0; a6 < bZ.length; a6++) bZ[a6] = bZ[a6].trim().slice(0, 7).toUpperCase();
			1 === bZ.length && 0 === bZ[0].length && (bZ = []), g.g2(8, g.dN().cC, new g3(23, {
				aCJ: aZ.af.data[125].value,
				i7: bZ,
				aEq: aZ.af.data[127].value
			}))
		}
	}, this.uA = function(cC, target) {
		g.g2(4, cC, new lv("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + uC.uM +
			"' target='_blank'>" + uC.uM + "</a>", !1, [new d("❌ " + e.f[92], function() {
				g.g2(cC)
			}), new d("✅ " + e.f[0], function() {
				aZ.d6.aX(140, 1), 0 === target ? g.g2(2, cC) : g.g2(8, cC, new g3(target))
			})]))
	}
}

function aEM() {
	var aq, bJ, aEr, font, xP = 0,
		aEs = !1,
		aEt = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aEu = 5;

	function a5p() {
		if (aEs) {
			var a6, aF = aEt.length,
				am = Math.floor(.5 * aEr.al),
				al = aF * am,
				a7 = Math.floor(Math.floor(aEr.a7) + .3 * aEr.ak - .5),
				a8 = Math.floor(Math.floor(aEr.a8) - al),
				ak = Math.floor(.4 * aEr.ak + 2.5);
			for (bI.fillStyle = i.oQ, bI.fillRect(a7, a8, ak, al), bI.fillStyle = i.a6d, bI.fillRect(a7, a8 + aEu * am, ak, am), bI.fillStyle = i.bM, bI.fillRect(a7, a8, 2, al), bI.fillRect(a7, a8, ak, 2), bI.fillRect(a7 + ak - 2, a8, 2, al), a6 =
				1; a6 < aF; a6++) bI.fillRect(a7, a8 + a6 * am, ak, 2);
			for (bI.fillStyle = i.bM, q.r.textAlign(bI, 1), q.r.textBaseline(bI, 1), bI.font = q.r.ft(0, .6 * am), a7 += .5 * ak, a6 = 0; a6 < aF; a6++) bI.fillText(aF6(a6), a7, a8 + (a6 + .6) * am)
		}
		bI.drawImage(aq, Math.floor(aEr.a7), Math.floor(aEr.a8))
	}

	function fu(oZ) {
		var a7, bK, hP, am;
		bJ.clearRect(0, 0, Math.floor(aEr.ak), Math.floor(aEr.al)), bJ.fillStyle = i.oQ, bJ.fillRect(0, 0, Math.floor(aEr.ak), Math.floor(aEr.al)), df.fR && (bJ.fillStyle = i.a6d, bJ.fillRect(0, 0, Math.floor(.3 * aEr.ak), Math.floor(aEr.al))), bJ
			.fillStyle = i.bM, bJ.fillText("Hide UI", .15 * aEr.ak, .5 * aEr.al), bJ.fillRect(Math.floor(.3 * aEr.ak - .5), 0, 2, Math.floor(aEr.al)), a7 = .5 * aEr.ak, bJ.fillText("Replay Speed", a7, .31 * aEr.al), bJ.fillText(aF6(aEu), a7, .69 *
				aEr.al), bJ.fillRect(Math.floor(.7 * aEr.ak - .5), 0, 2, Math.floor(aEr.al)), oZ.a1m ? (a7 = Math.floor(.02 * aEr.ak), oZ = Math.floor(.025 * aEr.ak), bK = Math.floor(.85 * aEr.ak - a7 - .5 * oZ), hP = Math.floor(.25 * aEr.al), am =
				Math.floor(aEr.al) - 2 * hP, bJ.fillRect(bK, hP, a7, am), bJ.fillRect(bK + a7 + oZ, hP, a7, am)) : function() {
				var ak = Math.floor(.46 * aEr.al),
					al = Math.floor(.23 * aEr.al),
					a7 = Math.floor(.85 * aEr.ak - .5 * ak + ak / 12),
					a8 = Math.floor(.5 * aEr.al - al);
				bJ.beginPath(), bJ.moveTo(a7, a8), bJ.lineTo(a7 + ak, a8 + al), bJ.lineTo(a7, a8 + (al << 1)), bJ.fill()
			}(), bJ.fillRect(0, 0, Math.floor(aEr.ak), 2), bJ.fillRect(0, 0, 2, Math.floor(aEr.al)), bJ.fillRect(0, Math.floor(aEr.al) - 2, Math.floor(aEr.ak), 2), bJ.fillRect(Math.floor(aEr.ak - 2), 0, 2, Math.floor(aEr.al))
	}

	function aF6(a6) {
		return 5 === a6 ? "Normal" : "" + aEt[a6]
	}
	this.a1m = !1, this.m = function() {
		df.dp && (aEu = 5, this.a1m = !1, aEs = !1, aEr = new j6([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a1j = function() {
		return aEt[aEu]
	}, this.bG = function() {
		return aEr.a8
	}, this.oT = function(fy) {
		return !!df.dp && aEr.a7 + aEr.ak > ay.ak - fy - b2.gap
	}, this.resize = function() {
		df.dp && (aEr.resize(), aEr.a8 -= (oI.oJ() - 1) * b2.gap, font = q.r.ft(0, .3 * aEr.al), (aq = document.createElement("canvas")).width = Math.floor(aEr.ak), aq.height = Math.floor(aEr.al), (bJ = aq.getContext("2d", {
			alpha: !0
		})).font = font, q.r.textAlign(bJ, 1), q.r.textBaseline(bJ, 1), fu(this))
	}, this.kX = function(aEv) {
		0 === df.gP || g.ai() || aEv !== df.fR && (df.fR = aEv, ep.resize(), bA.bE = !0, df.dp) && (xP = bA.bB + 2e3, fu(this))
	}, this.bF = function(a7, a8) {
		if (!df.dp) return !1;
		if (a7 < aEr.a7 || a8 < aEr.a8 || a7 > aEr.a7 + aEr.ak) return aEs && function(oZ, a7, a8) {
			var aF = aEt.length,
				am = Math.floor(.5 * aEr.al),
				al = aF * am,
				bK = Math.floor(Math.floor(aEr.a7) + .3 * aEr.ak - .5),
				al = Math.floor(Math.floor(aEr.a8) - al),
				ak = Math.floor(.4 * aEr.ak + 2.5);
			return aEs = !1, bA.bE = !0, a7 < bK || bK + ak < a7 || a8 < al || (aEu = vf(0, Math.floor((a8 - al) / am), aF - 1), fu(oZ)), !0
		}(this, a7, a8);
		if ((a7 -= aEr.a7) < .3 * aEr.ak) aEs = !1, this.kX(!df.fR);
		else {
			if (a7 < .7 * aEr.ak) return aEs = !aEs, bA.bE = !0;
			this.kZ(!1)
		}
		return !0
	}, this.kZ = function(aEx) {
		2 === df.gP ? (this.kX(!1), g.g2(3)) : (aEs = !1, this.a1m = !this.a1m, this.a1m ? (dq.dr && dq.kY(), av.aw.setState(1)) : aEx || dq.aC5(), bA.bE = !0, fu(this))
	}, this.ka = function() {
		this.a1m = !1, dq.aC5(), bA.bE = !0, fu(this)
	}, this.k9 = function(a7, a8) {
		return !!df.fR && (dq.bF(a7, a8) || (df.dp ? ((bA.bB > xP || !this.bF(a7, a8)) && cx.bF(a7, a8), bA.bE = !0, xP = bA.bB + 2e3) : cx.bF(a7, a8)), !0)
	}, this.bD = function() {
		df.dp && df.fR && bA.bB > xP - 1e3 && bA.bB < xP && (bA.bE = !0)
	}, this.aEy = function() {
		df.dp && (this.a1m = !1, bA.bE = !0, fu(this))
	}, this.bH = function() {
		if (df.dp) {
			if (df.fR) {
				if (bA.bB > xP) return;
				if (bA.bB > xP - 1e3) return bI.globalAlpha = vf(0, (1e3 - (bA.bB - (xP - 1e3))) / 1e3, 1), a5p(), void(bI.globalAlpha = 1)
			}
			a5p()
		}
	}
}

function aF7() {
	this.aF8 = function(cB) {
		var username = aZ.af.data[122].value.slice(0, 20),
			username = (bc.bd(22 + 16 * username.length + 18), bc.bh(1, 0), bc.bh(6, 1), bc.bh(10, a1O), c8.cJ.ll(username), q.color.mu(aZ.d4.mv()));
		bc.bh(6, username[0]), bc.bh(6, username[1]), bc.bh(6, username[2]), c8.d4.bu = cB, c8.d4.send(cB, bc.bg)
	}, this.xa = function(xT) {
		return bc.bd(11), bc.bh(1, 0), bc.bh(6, 2), bc.bh(4, xT), c8.d4.send(c8.d4.bu, bc.bg), !0
	}
}

function aEG() {
	var aF9, aq, fr, aFA;

	function aFE(aQ, name, aFF, bV) {
		fr[aQ] = name, aq[aQ] = new Image, aq[aQ].onload = function() {
			! function(aQ, aFF) {
				let zF = null,
					aFI;
				7 === aFF ? aFI = q.cj.aFJ : 8 === aFF ? (aFI = q.cj.aFK, zF = .1) : 3 === aFF ? (aFI = q.cj.aFL, zF = .06) : 5 === aFF ? aFI = q.cj.aFM : 6 === aFF ? aFI = q.cj.aFN : 4 === aFF && (aFI = q.cj.aFO);
				aq[aQ] = q.cj.wj(aq[aQ], aFI, zF)
			}(aQ, aFF), aFH()
		}, aq[aQ].onerror = function(cY) {
			console.error("Error loading image at index", aQ, "Error:", cY), aFH()
		}, aq[aQ].src = "data:image/png;base64," + bV
	}

	function aFH() {
		aF9--, aFC()
	}

	function aFC() {
		0 === aF9 && (aF9 = -1, wh.fu(), b7.aFP(), wg.oy([aq[8], aq[16], aq[7], aq[9], aq[10]], [2 !== av.id, 1 !== av.id, !0, !0, !0]), xA.p4.m(), gl.a2m(), bA.bE = !0, aq[7] = aFA, aq[8] = aFA, aq[9] = aFA, aq[10] = aFA)
	}
	this.m = function() {
		if (void 0 === aq) {
			aF9 = 23, aq = new Array(aF9), fr = new Array(aF9), (aFA = document.createElement("canvas")).width = 1, aFA.height = 1;
			for (var a6 = aF9 - 1; 0 <= a6; a6--) aq[a6] = aFA;
			aFE(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aFE(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aFE(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aFE(3, "orders", 6,
					"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"
					), aFE(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aFE(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aFE(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aFE(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aFE(8,
					"googleplay", 3,
					"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"
					), aFE(9, "discord", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aFE(10, "insta",
					3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aFE(11, "emojis", 4,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aFE(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aFE(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAAIoAAACvCAMAAAAVOLbTAAAAtFBMVEUAAAABAxsXAwACCQwXBTIoBg84BAAJEhJOAAJGAR5lAAASHBx9AACaAACwAAEcKyobMgAVMkUnOjgNWAA5TEq8LSUrVlgocYAWgge4TEJOa2gFjSBnamdCdXO9W1QDl0V1dsa6bmZoi4RTkpE3nZpUogB3icmciYEMuIkAxLNiqcxuvABvsrRXvb+QsqOwsK062M0A/wC9wb6D19JV/1bX2teS/5Hj5+TD9sy7/7vl/u3///93TxdPAAASr0lEQVR42u2cC3uaShOAEcpFwKBo0VppTsXUpkXpwRAa8///1zeX3WXxnjRpzvM9mdP2RLOXl5nZ2Qu7a/x7RO535O7F5FiNxv5Xd/e/t9vHV5Tt74f7uwtQgOPxL8j29/0ZlHvJUdfVK0mtaB5OoNz/ZoxyOXONV5N4VpTMs70/hvJAvy9nkfHqEs1Kquzh7hDK3W8GMf6SMMz2bh/lDr2kXhp/UWZ1y0iGTlKNMIUF/xkWyGtUb1HBovS41FkMjaQMmITTW4T0wiCqaBa30FgECvpJEcgMLko70wvpA8S1qHDxbdH4i6HaDuvEcDWxLsO5MAlxaNKw/G5QMLBV3ITdQEgL52VIRImqBq4Q/eVeoYB5avJYIwgiIYrmHAv7lnEqjQYS6DVwiKmEiRDlHri4FUOyOB6NYhCN5hSLqOUkrgJhDiyd6oiYZYahTqCgeVwmwUQsOs7RiqhFSEueIVEcI1WFYClYLQYrhWKsG0GyqZCEcYiGYA77iCVtL4D3IwCBSA4oNJE1IAtpIK5JLQZ5SsUeCyjT0TSdg6Qp4xANV7RXg8GVSMtTGms/HadhdUChaTrPoIJpPEW1uFIthLIVngIokDawgiTNUBoarGmXRdiGK2Fgdx/YUCCsjpSLzpLAckEvMaOMqBEZaJ86ZhRQynRkeo4ZJdmiRUNP3a6C7R9FsfQtUgx8bbXTcZIEMYhjkSWx4Xgm1iW8xa3QQgaGt8qQrgIZXN/3iSZdLIgmZRioSFVCzYEcII5HjeUxTdBEL7QOJ0kEx0JwQBVGOp/qjvsbUMBVChFToNg0SxzfZ5pA0QCMxiJdNaLnBd+aJnNOEqn4KB0W/S8RdlmkSWASBxQfZxrKDJ3FQFeZGdJXoNzU9Fk8QcMw5GMuq0SFB6pmnkYBuDqyiAjAKS1MySQNhycKt9OMy6SnC8BZ7ggllihxMs2yyCMOD7N5jm3E4MaKRbkqe8gUq4ltJ8jgIacqIjUpmSRNEstGfXiiXB8ypMkokg4IznJv/AteaxhNYwbvtmUWj6EcI6GMVAOVr+IPNExK7ySoO+U1TUomMWxWhyoV0zeN2TCgI3ow7nZQ0mxheZjHkSxQgoX1JNxgqUUwB4JkCRnUToSLSxdWKUFtgSdNzsX6vintI9xPolSyWaCFACV2UBWOo1B8J844a0StBq0whTAFteepyWnMJM8zjF1pzMGLUyIJqk2RYLG+Fy2wPLKjbEJ7KGih1FYowsl8cyxYOJJMoR+P0yzPV5kln9hMc4RJLAN+PUJoNA+QjGU78BVKY59m1HIABdQSSE0qj/dc9EtqryL6eJ6RpKtFR9F65mIFII5nTSl4RdI8kTKPI+1uyAc7iiLa0CJxhIMZk2HftDHQeANpIkKZJ17oe3YUKRJIEkRgrNCL5lOVEM3jcJTqDyd94X9evBDt5wiKpdQCoYVRzJ8/f97cTPrCL5mFUFKbH9TXhD+B8mU6ZZ7+5OYGiuqLBkRlieBwBgUsRCy+M/mJcoMs1hjj44jiGjQdVxGEJOqjyciYDpWCFrRFMaxsX7fPERRLWoiUSpmGpJafE6cxEQWVeZZ4iqMH0tBEHIMEyQByOsMbUsqQHtAX9hFx8BSKsJB4xBsgARk6ZCLyAqxknqWO4gi7XV/ReIlQHpqRzOMNqQiwTxP0s7ZS9lDQRDtBCS3ELOCmnbGqBUKK6QuFdD+ghAIG6qFEI2Ge0O/fMMrEESjubvs5jEJqAfWLwAXlMAq4SyhMhF3PfJ7HqIlez/8gxOtdIQ31RpRGmEeS3PRFkaRdaj/NmHnPQKJTB5Q8hZBL1reHsiTVikaj2Xy+Tv3e1VVof/jQwelHpwOKubrqhcl6TijYPaF5bPEsE3w4KNGL0kyMD9xmILyDIsZc7AkQRwcemsD3+jfs/1CuQR3wdIYoc/+q51kdNZwCGqd35cMv5rMZOQqaWbbBocOFBeNVnioUyziKYkiUIEpXq/HAI1c0hwQzwdiELLPZbFms15Fv7k4CIB6t1wWgzJAEI+WQSCbkWOhtq9UichutGOe1EkDbXWxWY5ufBVluONDl0OMBSVHMg4OTnjn8armERDk1Q1SpVIk9Xm1WwGeeNZDuK4EfQthsYPqTCbdvK1uvqbaRtpoFnbm21Eac6zWUwW0QPR6KcNSzIUoSn3Jbiiyicw7UYyzYShzU4bsYLFAU+rJhutpsVqn2BSptvYZeKhTdAeYfZGDxjkcGz1SEM861oIyfCCyDxhUuE3JI89J1oS8cxosNySJpvgtmRTl3mjyhP+By/FDGFRlsj6KovjmQ3QsX0hEdDcYxZ67ZJkCVrEEAJtMB55EIeUK7/EAixO3F/UOBXw7kZOdPqsWCbBFboQEbbdushexYCRr2FcH43QSaDWnW30VxL0OR3iHsnHSBBGNa2zYIAS2mYBjdSiaGwF7oJQsA6creG/vYp6LwwNxjy2DLzgcQ0xyt3aQbIgEQEmElrS054VUonoJAYARHo4TgGSgeDbyIppvkm8xpYpolbIMgX0GWrBm0khZvnPEmH3cFR38y/BMUjE99CFDYAY817ScbVokAacNo6QZjG/JCUOljlJw8D8WXIyegmfTD3lWo2Wbxa7PZglRVBShfQASMcBnNSmDVEMaTVNCeVo63IOsACo2/JuCC3Y7sp9LVr9VqRSy4BP71E8oXZhEuo6zUsQFFjAURxYdSn46C46+fPP7SUKyEQH6QlPh6p/7ySYeRVuKG3fnAKGrw9FwUHsPpKMnilyL5hvID8n/6+PEjsnxRVlLh90VQfInSMtAKSRqQb/98g+lu8fFjA8OKAZaVQLlSBrpxeL70TBR6niG4bddilDYJyLfHx686CytGoBg2oPTZzBLFfRIKD7MhrgxhegihBQInB/wFozQgINVj+fGjgiEW1ItCgZDr2P3hcCIG2pejjFLVHTqenGFoKEonguRb/VhdXUkUYaQWipyXOPvdoXVsxN8eJMjumDqPLkfaxZ5SgKT+eqWzCAsxitHdKYgGCdOzg4T20ImexOt2BuNxlm+muyhCKeC2y49XGsuyqqvGQMk6z8fjZND1PDl4MSWKddRA+tgWlx/siCBWNDTKkx2Uf9pKUSxfqsftti4kSpxT9lWeZ+PBwMZlEksb2x7XiiVRYnCY1YrK+JHhQ4XOcZRPVw3LJ9BSvd2WEsWEbj0ZZz/oiSAigZu42uTjPEqWEwVC2KjYxm0lyj8tp9VQ6sftGnqnVguCjrn7YTDmp8ubKdl5t4UpWZokqE01kDyKQk25QflUPNbfr4GljSIHLPYgSdL0Aq0oX0mtxsnAafp9GB4eQ/kGnRBzwJ9PFRR3vYPi9fumLA8bgpk2WjkyJdNakMlt2cPAhIHSlIF/H+Wf+hHd9mtVff2CnWO1vr7+rlAsRKGlKwiWYqDtpCKuWOcmH4lEgUw8zjiNQmr5KrZfVOvv14Cy2Wp9kCcK+SkWTRXKJZOPPRTnFEr1uPyK6oC/5fXna0QhlmMo9iUoSivBE1BQLaiOaxgcXH8WKN83x1HM7FIULfC3UKwDKBR28U1xff158plEoNxqbqtQwgtnh3tzZnBb0xwOqUs92Ji/qR069frzZAfl9lahTCZYimt6MvDP1VLp+VWnwPG0/hB+2ENBqcA5cCdSvUaSiSLZQYERv9YZeo6VnW3MWh+UZWP4M4ZeY/Ch2+1CUb0dlB8lOQhUjX8mE10pLRSce0ARH6AoKHCMBT9lqQcC4kr0QDkOTzLozOI2So1WQTedCNFIdJQIOpEMy8ibXmj6BJTYcJyuPeAH4XJ2e2YB8lmy6CQ6ygCy4uOMWcedruOYUfoErRjt0Q5OpOwdrdRQ5eddUSQKxZRvlZoCzfNaIbfF16rzeeI0K+Xt7lCObevH9T5LQ9J221ZZXnR2vCKbEC3hu5jLRM1jOxw6Oyg/fkBo3WNpkfxSKP6QI8Jkgsr2oTdEAwUnW5DWmhNcVPQmP5sQxyjNPKje1t9bLBoI6qRBUSHuBnWNC667y7YnUNIss2hZXaFAgZQxVZNDGDeuqfJ9ECZZKK3ImD3EtTjtDeZprVj6exhfquXGk1rBVQQBs93+/n7dlobkVq4mIIoshYrkxfmovRPlKMquWnBRo2c3617IssoR5fsRkFu1xgLDi1Csrg+pLzyklEONWaol1dUy9JBk3Fg2WYhVDaz5EEjarK+MBxBueTlcU0rbaU+hkFpcVssNDr5CO9toi0m0xAIom+8KRgNZaAuVEOEGtBx+c0oph143iOHTSKnFGdKyeDfb5N3Q7nSaxXQI49vNr+8t0Z0E34XYoQcZO7SuPnR4g4aGYpxB2fEWGvTj8t4Awpz/oaMtlf7CudYOSOMkMGoCZ7+Ch8hsGq6fUMohFNGeNbUoEprD97yOtjaI/dvtERCj0+VFZDDt2JYdyBGlHETZiy0YlIgEfK+P78E83WU2m1+3t42TBK1F26uwP3TIzcYOszRKuRxFqQVJktVq4If0ZseHaYa2VGkEi1slC333MiWk5heGnZVg0ZXS3rR2EGVHLVAAkCQQJilkDnFtHQcRmssIEM020XwOKL0+R8fQHwCLR71P8yrVugAFJ6ykFnqvHfpRjiShxy/twl4Yr7drPX1y++uXHkkMY75dJyGvkUKfga9PoAwvbCmlLcdQlFpg3OIFWZ6QmShi9sH0MLNPwpbLLHTbOGFvtN7kURhKrYT4PHkEE1Q5OnB39xQeQVH7pWDcEltpnvDLzP6E+jNoTZvUQ0+wO/uvDjsdXLbzwZ2hBftDeidMueM8s2icgjtb9nfmH0ORb1ZxODfNYlPO43Gx38PNOza/Gdp/o2rQi5dez4HBMBrX6Tsisx3RkFbf33QhiiVYcEAXR4bNe2qgSBcqiXyxUtjz27k8BhHJBr54A+TYJnRruG9y5/X/RSjCRMSCUxFcbukAkDmGx7VDuWoZBppiTDeUq5GhA84xNgCiM6C+NWOQYyQnUXBndCT2ghIMTo2SBJ8tDWyxghqO0lAsjBlgtDQJxbqoEyRQOSQfc84MQaZi+6PxVBRD7dWkbWcpaWdOkiUuu0CcJ6AaZLFgWHIVc1vzPSMRKSkLb1FTOz6Np6MY2sbRqS5YQQLzX5j75g74ywjrnILD+nkOc23PjIUWGhFbT49Y5zyKITYP63uYea8isKSxbafrFBr3CF+BF+upGfrpOjNt2omRyl2MzV5G3h1sPA9FwcjtvbHcSkz7FZN8PfLMqTDFeup60TqfJmSTqdjdHTc7PA9tZb4cRW55bja8Cx1Nedf03HKRZDbDXSTzaWAwV8qbTJs88lzA8ZMb57Viye3G6hyA3N1MPjNCEtxDQrtE5tNoJFqKtvVWUJw5Q3IeRR9mutqZALIT1o9/hT8w0Uxtjt45H3H6BMSFKFZbmn3f2o7/1sdI7NLW5czDXqqVPRa3OR0gNtc3n2LtGMLFJJcbyNgptnV2gyre+eju8r8ciqGXaRmqYelnZrSP1n6ml0NhgkNHPfbEao9bLzvs9DSUlo4M7byPftSKR/JPP2v1bBRDnX479OVzDn39EcqRgPXM02d/ppUXlXeUd5QXRJnVQorTJ4vLWsnstVDUCfHTqquao+SviVJX1dkqyooS4Sn110Qp+fDmzBCDIzwyjv+O1GdDnk0rKY/6Gv6NOB39HP+5VuioOiTi13OlscQfqqgQFtlFqaRB3ZrO7hV4bi5WJz7/2FfQG/HlbVkW8P8SshbLssIj++U+CiczlkyEyLPly6EgS/1YLZfLmUuKKmZUe6GS6iiYDM8fgWFHUE39WJTwz5+jlPGooGrYQAU9JqnpGAoni+vHWU3Jq8eqqquXQOH/VcJAsyCeFRXlOqoVSLbE4sHJKrd4JF97CZSab3xArZQ4YJyh1atTKBUOLGWsmQEK7p2rXtZXqGkE+DKVIE4ZqIasZVGQi5fgtLM/RhHRvCpHUAf9WBojfM+N5Y6gQ2hQavGJO4GqqPHoa4k/FFCMW9bL/5fu8B3lHeU/ifLvO8o7yjvKO8o7yjvKO8o7yhGU+u1Ryv8ayhan2G8tfP/K9plrVi8puBJzr93V84Yi7up5+A80oYJR8F6n6O1d5UG/7ertBC8Bu9fvAHtj+7RuRnsrCdTNaGih8i1RcPXybvcWvTeRUc0XHe7cLfgGYpXa3YKklip4O5+lqwW1eygL901IcOFxu3c751uw4BWq4qZQ/c7SN2Chy1zbd5byzcNl/Jc9lpboH3bvtyWW+q+GulGpk+i3/tKNzOVfa9TBsn3Trn4XMt9AXJezv+EycVHvXsxsHLiquipe92Zmd1bwldXt66p37s1+UPdmV+VLSdGSslQ3Z/++O3mb+N3DX7lMHDVyd/6O9fuH177bfLt9uL/oune+8v3h1eT+yN3z/wOAO9vKqVjcjgAAAABJRU5ErkJggg=="
					), aFE(14, "bestPlayer", 5,
					"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"
					), aFE(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aFE(16, "apple", 3,
					"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"
					), aFE(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aFE(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aFE(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aFE(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aFE(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aFE(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(aQ) {
		return aq[aQ]
	}, this.vz = function(name) {
		for (var a6 = fr.length - 1; 0 <= a6; a6--)
			if (fr[a6] === name) return aq[a6];
		return aFA
	}, this.fv = function() {
		return aF9 <= 0
	}, this.wU = function() {
		aF9 = 0, aFC()
	}
}

function aEn() {
	this.ai = !1;
	let bK, hP, gap, gv, zoom, aFR, aFT;
	this.a4J = [], this.a4I = 100;
	let aFV = 0,
		aFW = new Array(9),
		aFX = [],
		aFY = [],
		aFZ = 0,
		aFa = 0,
		aFb = 0,
		aFc = 0;

	function aFk() {
		aFW.sort((hC, iV) => iV.tC - hC.tC);
		let bV = "" + aFW[0].vY;
		for (let a6 = 1; a6 < 9; a6++) bV += "," + aFW[a6].vY;
		for (let a6 = 0; a6 < 9; a6++) bV += "," + aFW[a6].tC;
		aZ.af.aY(120, bV)
	}
	this.m = function() {
		var aFd = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6];
		for (let a6 = 0; a6 < aFd.length; a6++) {
			var color = 6 === aFd[a6] ? i.a6e : i.yF;
			this.a4J.push(q.aq.kj(bN.get(3), aFd[a6], color))
		}
		for (let a6 = 0; a6 < xA.xB.xF; a6++) aFY.push(xA.xB.aFe - xA.xB.xF + a6);
		for (let a6 = 0; a6 < xA.xB.aFf; a6++) aFY.push(xA.xB.xC + a6);
		var aA1 = xA.xB.aFg(uC.aA1);
		for (let a6 = 0; a6 < aA1.length; a6++) aFY.push(aA1[a6]);
		var bZ = aZ.af.data[120].value.split(",");
		if (18 !== bZ.length)
			for (let a6 = 0; a6 < 9; a6++) aFW[a6] = {
				vY: 1015 + a6,
				tC: 0
			};
		else
			for (let a6 = 0; a6 < 9; a6++) {
				var aL = parseInt(bZ[a6]),
					u = (aL = 0 <= aL && aL < xA.xB.aFe ? aL : 0, parseInt(bZ[a6 + 9]));
				u = 0 <= u && u < 1e3 ? u : 0, aFW[a6] = {
					vY: aL,
					tC: u
				}
			}
	}, this.show = function(fb, fc, rQ = 0) {
		if (aFZ = fb, aFa = fc, aFV = rQ, this.ai = !0, aFX = [], 0 === aFV)
			for (let a6 = 0; a6 < 9; a6++) aFX.push(aFW[a6].vY);
		else {
			let iV = 49 * aFV,
				hC = iV - 49;
			hC >= aFY.length && (aFV = 1, hC = 0, iV = 49), iV = Math.min(iV, aFY.length);
			for (let a6 = hC = iV - 49; a6 < iV; a6++) aFX.push(aFY[a6])
		}
		aFX.push(1024);
		rQ = aFX.length, gv = Math.floor((av.aw.ax() ? .075 : .0468) * ay.az), gap = Math.floor(gv / 3), aFR = gv + gap, (aFb = 10 * aFR) > ay.ak && (aFb = ay.ak, aFR = aFb / 10, gv = 3 * aFR / 4, gap = aFR - gv), aFT = ny.nz(rQ, 10) + !!(rQ %
			10), (aFc = aFT * aFR) > ay.al && (aFc = ay.al, aFR = aFc / aFT, gv = 3 * aFR / 4, gap = aFR - gv), zoom = gv / this.a4I, rQ = .5 * gap;
		bK = Math.min(Math.max(fb - .5 * aFb + rQ, rQ), ay.ak - aFb + rQ), hP = Math.min(Math.max(fc - .5 * aFc + rQ, rQ), ay.al - aFc + rQ)
	}, this.bF = function(fb, fc, player) {
		if (!this.ai) return !1;
		if (this.aFm(fb, fc)) {
			fb = ny.oV(ny.nz(fb - bK + .5 * gap, aFR), 0, 9);
			if ((fb += 10 * ny.oV(ny.nz(fc - hP + .5 * gap, aFR), 0, 9)) >= aFX.length) return b7.s(), !0;
			fc = aFX[fb];
			if (1024 === fc) return this.show(aFZ, aFa, aFV + 1), !0;
			! function(vY) {
				for (let a6 = 0; a6 < 9; a6++) aFW[a6].tC = Math.floor(.99 * aFW[a6].tC);
				for (let a6 = 0; a6 < 9; a6++)
					if (vY === aFW[a6].vY) return aFW[a6].tC = Math.min(aFW[a6].tC + 30, 999), aFk();
				aFW.splice(5, 0, {
					vY: vY,
					tC: Math.max(aFW[4].tC, 30)
				}), aFW.pop(), aFk()
			}(fc), player === df.du ? e9.eA.a4G(fc) : e9.ce.aFn(fc, player)
		}
		return b7.s(), !0
	}, this.aFm = function(fb, fc) {
		return !(fb < bK - .5 * gap || fc < hP - .5 * gap || fb >= bK + aFb - .5 * gap || fc >= hP + aFc - .5 * gap)
	}, this.bH = function() {
		bI.fillStyle = i.bL, bI.fillRect(bK - .5 * gap, hP - .5 * gap, aFb, aFc);
		var rO = .5 * b2.zb,
			aF = (bI.lineWidth = b2.zb, bI.strokeStyle = bI.fillStyle = i.bM, bI.strokeRect(bK - .5 * gap + rO, hP - .5 * gap + rO, aFb - 2 * rO, aFc - 2 * rO), bI.imageSmoothingEnabled = !0, aFX.length);
		for (let a6 = 0; a6 < aF; a6++) this.xG(aFX[a6], bI, bK + a6 % 10 * aFR, hP + ny.nz(a6, 10) * aFR, gv);
		bI.imageSmoothingEnabled = !1
	}, this.xG = function(vY, ko, a7, a8, gv) {
		var e4;
		vY >= 1024 - xA.xB.xF ? (e4 = gv / this.a4I, ko.setTransform(e4, 0, 0, e4, a7, a8), ko.drawImage(this.a4J[vY - 1024 + xA.xB.xF], 0, 0), ko.setTransform(1, 0, 0, 1, 0, 0)) : (q.r.textAlign(ko, 1), q.r.textBaseline(ko, 1), ko.font = q.r.ft(
			0, .89 * gv), ko.fillText(xA.xB.aFo(vY), a7 + .5 * gv, a8 + (.35 - q.r.aB7 + .56) * gv))
	}
}

function aEQ() {
	this.aFp = -1, this.m = function() {
		this.aFp = -1
	}, this.bD = function() {
		-1 !== this.aFp && ek.xx.a0r(this.aFp)
	}, this.q3 = function(player) {
		return !!dq.u7(player) && (1 === dR ? (this.aFp = player, df.iP && df.e7 && df.tg.bD()) : (f6.qi(player, player === df.du ? 21 : 22), 8 === df.eo ? this.aFp = 1 - player : df.iP ? (ls(player), lp(), df.e7 && df.tg.bD()) : this.aFq(
			player)), !0)
	}, this.q4 = function(player) {
		1 === df.gP && 0 !== dV.eg[player] && 2 !== dV.qh[player] && (8 === df.eo ? this.aFp = 1 - player : this.aFq(player)), df.a0o--, df.qT--, f6.qi(player, 4), q.ce.ds(2) && gm.oK(!0)
	}, this.aFq = function(player) {
		df.e7 ? (ls(player), lp()) : qn.a4s(player)
	}
}

function zH() {
	let k, rf;
	var ri;
	this.show = function() {
		k.show(), this.resize()
	}, this.s = function() {
		k.s()
	}, this.resize = function() {
		k.resize(), rf.resize()
	}, this.t = function(u) {
		2 === u && k.v[0].w()
	}, k = new n("Login", [new d("❌ " + e.f[92], function() {
		g.g2(7, g.rw(7).cC)
	}, i.j), new d("➡️ Login", function() {
		aZ.d6.aX(105, dJ.d8.bW(rf.a3n[0].jT[0].cY.value, 5)), aZ.d6.aX(106, dJ.d8.bW(rf.a3n[1].jT[0].cY.value, 8)), g.g2(8, g.rw(7).cC, new g3(18))
	}, i.m0)]), rf = new rg(k.p, ((ri = []).push(function() {
		var rq = new jS;
		return rq.jV("Account Name"), rq.jc(new rs({
			title: "AccountName",
			value: "",
			aQ: -1
		})), rq
	}()), ri.push(function() {
		let rq = new jS,
			rv = (rq.jV("Password"), new rs({
				title: "Password",
				value: "",
				aQ: -1
			}));
		return rv.cY.type = "password", rq.jc(rv), rq.jc(new op([new d("Show", function() {
			"Show" === this.innerText ? (this.innerText = "Hide", rv.cY.type = "text") : (this.innerText = "Show", rv.cY.type = "password")
		}).button])), rq
	}()), ri))
}

function sC(a3R, title = e.f[121], w = function() {}) {
	function click() {
		var value = 1 - a3R.value;
		this.textContent = (value ? "🟢 " : "⚪ ") + title, aZ.d6.aX(a3R.aQ, value), w(value)
	}
	var cY;
	this.cY = document.createElement("p"), (cY = this.cY).textContent = (a3R.value ? "🟢 " : "⚪ ") + title, cY.style.margin = "0", cY.style.marginBottom = "0.5em", cY.style.cursor = "pointer", cY.addEventListener("click", click)
}

function aFs() {
	this.m = function() {
		0 === aZ.af.data[181].value && (aZ.af.aY(180, Math.floor(Math.random() * ny.pow(30))), aZ.af.aY(181, Math.floor((new Date).getTime() / 36e5)))
	}
}

function aEK() {
	this.d4 = new bk, this.cO = new aEc, this.c9 = new a1J, this.xZ = new aF7, this.cJ = new lW, this.aFt = new aCp, this.aFu = new lT, this.aFv = new aCD, this.t4 = new aFw, this.aFx = new sg, this.aFy = new aFz, this.aG0 = new d2, this.aG1 =
		new aDc, this.m = function() {
			this.d4.m()
		}
}

function aEE() {
	var yg, aG2, aG3;

	function aG8(a6) {
		var button = xX.a4M[a6],
			a7 = button.a7,
			a8 = button.a8,
			ak = button.ak,
			al = button.al;
		bI.fillStyle = button.aG6, bI.fillRect(a7, a8, ak, al), a6 === yg && (bI.fillStyle = aG3, bI.fillRect(a7, a8, ak, al)), bI.lineWidth = b2.zb, bI.strokeStyle = aG2, bI.strokeRect(a7, a8, ak, al),
			function(button) {
				var a7 = button.a7,
					a8 = button.a8,
					ak = button.ak,
					al = button.al;
				q.r.textAlign(bI, 1), q.r.textBaseline(bI, 1), bI.font = button.font, bI.fillStyle = aG2, bI.fillText(button.f, Math.floor(a7 + ak / 2), Math.floor(a8 + al / 2 + .1 * button.fontSize))
			}(button)
	}
	this.ak = 0, this.al = 0, this.a8 = 0, this.gap = 0, this.m = function() {
		yg = -1, aG2 = i.bM, aG3 = "rgba(255,255,255,0.16)", this.a4M = new Array(7), this.al = Math.floor((av.aw.ax() ? .123 : .093) * ay.az), this.ak = Math.floor((av.aw.ax() ? 3.96 : 4.2) * this.al), this.gap = Math.floor(.025 * this.ak);
		var aG4 = Math.floor(.26 * this.al),
			aG5 = q.r.ft(1, aG4);
		this.a4M[0] = {
			a7: 0,
			a8: 0,
			ak: Math.floor(.6 * this.ak - this.gap / 2),
			al: this.al,
			f: "Multiplayer",
			font: aG5,
			aG6: "rgba(22,88,22,0.8)",
			fontSize: aG4
		}, aG4 = Math.floor(.18 * this.al), aG5 = q.r.ft(1, aG4), this.a4M[1] = {
			a7: 0,
			a8: 0,
			ak: this.ak - this.a4M[0].ak - this.gap,
			al: this.al,
			f: "Single Player",
			font: aG5,
			aG6: "rgba(22,88,88,0.8)",
			fontSize: aG4
		}, this.a4M[2] = {
			a7: 0,
			a8: 0,
			ak: this.ak,
			al: Math.floor(.3 * this.al),
			f: "",
			font: this.a4M[1].font,
			aG6: "rgba(100,0,0,0.8)",
			fontSize: this.a4M[1].fontSize
		}, this.a4M[3] = {
			a7: 0,
			a8: 0,
			ak: this.ak,
			al: this.al,
			f: "Back",
			font: this.a4M[0].font,
			aG6: "rgba(0,0,0,0.8)",
			fontSize: this.a4M[0].fontSize
		}, this.a4M[4] = {
			a7: 0,
			a8: 0,
			ak: this.ak,
			al: Math.floor(.3 * this.al),
			f: "The game was updated!",
			font: this.a4M[1].font,
			aG6: "rgba(100,0,0,0.8)",
			fontSize: this.a4M[1].fontSize
		}, this.a4M[5] = {
			a7: 0,
			a8: 0,
			ak: this.a4M[0].ak,
			al: Math.floor(.8 * this.al),
			f: "Reload",
			font: this.a4M[0].font,
			aG6: "rgba(0,100,0,0.8)",
			fontSize: this.a4M[0].fontSize
		}, this.a4M[6] = {
			a7: 0,
			a8: 0,
			ak: this.a4M[1].ak,
			al: this.a4M[5].al,
			f: "Back",
			font: this.a4M[0].font,
			aG6: "rgba(0,0,0,0.8)",
			fontSize: this.a4M[0].fontSize
		}, this.a2Z()
	}, this.a2Z = function() {
		this.a8 = Math.floor(.54 * ay.al), this.a4M[0].a7 = Math.floor(.5 * ay.ak - .5 * this.ak), this.a4M[1].a7 = this.a4M[0].a7 + this.a4M[0].ak + this.gap, this.a4M[2].a7 = this.a4M[3].a7 = this.a4M[0].a7, this.a4M[4].a7 = this.a4M[5].a7 =
			this.a4M[0].a7, this.a4M[6].a7 = this.a4M[1].a7, this.a4M[0].a8 = Math.floor(.54 * ay.al), this.a4M[1].a8 = this.a4M[0].a8, this.a4M[2].a8 = Math.floor((ay.al - this.a4M[2].al - this.a4M[3].al - this.gap) / 2), this.a4M[3].a8 = this
			.a4M[2].a8 + this.a4M[2].al + this.gap, this.a4M[4].a8 = Math.floor((ay.al - this.a4M[4].al - this.a4M[5].al - this.gap) / 2), this.a4M[5].a8 = this.a4M[6].a8 = this.a4M[4].a8 + this.a4M[4].al + this.gap
	}, this.aG7 = function() {
		aG8(0), aG8(1)
	}, this.aG9 = function() {
		aG8(2), aG8(3)
	}, this.aGA = function() {
		aG8(4), aG8(5), aG8(6)
	}, this.fU = function(a7, a8, oK) {
		var a6 = -1;
		return 0 === cM.cN() ? a6 = this.kO(a7, a8, 0, 2) : 3 === cM.cN() ? a6 = this.kO(a7, a8, 3, 1) : 5 === cM.cN() && (a6 = this.kO(a7, a8, 5, 2)), yg !== a6 && (yg = a6, oK) && (bA.bE = !0), -1 !== a6 && (kG.kH(), !0)
	}, this.kO = function(a7, a8, a5Z, size) {
		for (var a6 = a5Z; a6 < a5Z + size; a6++)
			if (a7 >= this.a4M[a6].a7 && a8 >= this.a4M[a6].a8 && a7 <= this.a4M[a6].a7 + this.a4M[a6].ak && a8 <= this.a4M[a6].a8 + this.a4M[a6].al) return a6;
		return -1
	}
}

function aFz() {
	this.aGC = function(cB) {
		var la = bf.dB(3),
			lZ = em.a6V.bD(bf.dB(16), bf.dB(20));
		c8.cJ.lY(cB, lZ, la), 0 < la || (0 === cB && 0 === aZ.af.data[105].value.length ? c8.cJ.lb(0) : c8.aFt.aCr(cB), 4 === c8.d4.c5(cB).sz() ? 6 === cM.cN() && c8.xZ.aF8(cB) : 5 !== c8.d4.c5(cB).sz() || 8 !== cM.cN() && 10 !== cM.cN() || c8.c9
			.a1L())
	}, this.aGD = function() {
		var id = bf.dB(6);
		0 === id ? (kG.aGE || c8.cJ.lb(1), 8 === g.dM && g.dN().aGF()) : 21 === id ? 8 === g.dM && g.dN().dO(17) : 22 === id && (aZ.d6.aX(106, aZ.af.data[110].value), aZ.d6.aX(110, ""), 8 === g.dM) && g.dN().dO(15)
	}
}

function aEB() {
	var f, iq, tb, ak, al, font;

	function aGH(a5c) {
		return a5c < 10 ? "0" + a5c : String(a5c)
	}
	this.m = function() {
		void 0 === ak && this.resize(), this.setTime()
	}, this.resize = function() {
		ak = Math.floor((av.aw.ax() ? .53 : .36) * ay.az), al = Math.floor(.065 * ak), font = q.r.ft(1, Math.floor(.9 * al)), tb--, this.setTime()
	}, this.bD = function() {
		this.setTime() && (bA.bE = !0)
	}, this.setTime = function() {
		var eu = new Date,
			aAf = eu.getUTCMinutes(),
			eu = eu.getUTCSeconds();
		return iq = 3600 - 60 * aAf - eu, iq %= 900, f = "Next Contest: " + aGH(Math.floor(iq / 60)) + ":" + aGH(iq % 60), tb !== (tb = 60 * aAf + eu) && (ak = fx.measureText(f, font), ak += Math.floor(.4 * al), !0)
	}, this.bH = function() {
		bI.lineWidth = 1 + Math.floor(al / 15), 7 === cM.cN() && ke.xN() + 2 * b2.gap > .5 * (ay.al - ak) ? bI.translate(ay.ak - al, Math.floor(ke.xN() + 2 * b2.gap + ak)) : bI.translate(ay.ak - al, Math.floor(.5 * (ay.al + ak))), bI.rotate(-Math
			.PI / 2), bI.fillStyle = i.bM, bI.fillRect(0, 0, ak, al), bI.strokeStyle = i.hT, bI.strokeRect(0, 0, ak, al + 10), bI.fillStyle = i.hT, bI.font = font, q.r.textBaseline(bI, 1), q.r.textAlign(bI, 1), bI.fillText(f, Math.floor(ak /
			2), Math.floor(.59 * al)), bI.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aEH() {
	var aGI, aGJ, aGK, aGL, aGM, aGN, aGO, aGP, aGQ, aGR, aGS, aGT, aGU, aGV, aGW, aGX, aGY, aGZ, aGb, aGc, aGd, aGe, aGf, aGl, aGm, aGa = null,
		aGh = 0,
		aGi = !1,
		aGj = new Float32Array(4),
		aGk = 0,
		aGn = 400;

	function a3r() {
		aGQ = Math.floor(+ay.az), aGR = Math.floor(.5 * aGQ), aGa.width = ay.ak, aGa.height = ay.al, aGb = aGa.getContext("2d", {
			alpha: !0
		}), q.r.textAlign(aGb, 1), q.r.textBaseline(aGb, 1), aGb.imageSmoothingEnabled = !0
	}

	function aGo() {
		var a6, aGt;
		for (bI.font = q.r.ft(1, 100 * aGS), aGt = 80 / Math.floor(bI.measureText(q.cg.hX(df.mX)).width), bI.font = q.r.ft(1, 100), a6 = df.eM - 1; 0 <= a6; a6--) aGP[a6] = 100 / Math.floor(bI.measureText(dV.hY[a6]).width), aGO[a6] = Math.min(aGt,
			aGP[a6])
	}

	function aGu(a6) {
		return !aZ.af.data[7].value || dV.l5[a6] < 1e6 ? 1 : dV.l5[a6] < 1e7 ? aGj[0] : aGj[Math.min(Math.floor(Math.log10(dV.l5[a6])) - 6, 3)]
	}

	function aGs(ko) {
		aGZ = !1, aGY = 1, aGW = aGX = 0, ko.clearRect(0, 0, ay.ak, ay.al);
		for (var hL, hM, a6, aH0, fontSize, hN, bK = f8 / cz, hP = f9 / cz, hQ = (ay.ak + f8) / cz, hR = (ay.al + f9) / cz, aH1 = 0 !== dV.eg[df.du] && dZ.da(df.du), hC = dR - 1; 0 <= hC; hC--) a6 = dT[hC], (fontSize = Math.floor(aGV * cz * aGu(a6) *
			aGO[a6] * aGM[a6])) < aGU || aGQ <= fontSize || aGK[a6] + aGM[a6] > bK && aGK[a6] < hQ && aGL[a6] + aGN[a6] > hP && aGL[a6] < hR && (hL = Math.floor(ay.ak * (aGK[a6] + aGM[a6] / 2 - bK) / (hQ - bK)), hM = Math.floor(ay.al * (aGL[a6] +
			aGN[a6] / 2 - hP) / (hR - hP) - .1 * fontSize), aH0 = dZ.oM[a6], ko.font = q.r.ft(1 === dV.qh[a6] ? 4 : 1, fontSize), ko.fillStyle = aH2(fontSize, aH0 % 2), aZ.af.data[7].value ? aH3(ko, a6, fontSize, hL, hM, aH0) : aH4(a6,
			fontSize, hL, hM, ko), aGZ = !0, 0 < aGd[a6] ? function(hL, hM, fontSize, a6, ko) {
			0 === aH6[a6] ? xA.xB.aGx(aGc[a6]) ? (function(hL, hM, fontSize, player, vY, ko) {
				for (var a4m = hM, w2 = (ko.globalAlpha = aHD(fontSize), aGu(player) * (aZ.af.data[7].value ? aGk : aGP[player])), a5m = hL - .5 * fontSize / w2 - .9 * fontSize, iV = 0; iV < 2; iV++) ko.fillText(xA.xB.aFo(vY), a5m,
					a4m), a5m = hL + .5 * fontSize / w2 + .9 * fontSize;
				ko.globalAlpha = 1
			}(hL, hM, fontSize, a6, aGc[a6], ko), aH7(hL, hM, fontSize, 0, 0, ko)) : xA.xB.aHG(aGc[a6]) ? (aHH(hL, hM, fontSize, aGc[a6], 0, ko), aH7(hL, hM, fontSize, 0, 1, ko)) : (aHH(hL, hM, fontSize, aGc[a6], 1, ko), aH7(hL, hM,
				fontSize, 1, 0, ko)) : aHH(hL, hM, fontSize, aGc[a6], 0, ko)
		}(hL, hM, fontSize, a6, ko) : 0 === aH6[a6] && aH7(hL, hM, fontSize, 0, 0, ko), aH1 && (0 < aGd[a6 + df.eM] || 0 < aGd[a6 + 2 * df.eM] || 0 < aGd[a6 + 3 * df.eM] || 0 < aGd[a6 + 4 * df.eM]) && function(hL, hM, fontSize, a6, ko) {
			var u, il = -1;
			for (u = 4; 1 <= u; u--) 0 < aGd[a6 + u * df.eM] && il++;
			for (u = 1; u < 5; u++) 0 < aGd[a6 + u * df.eM] && (! function(hL, hM, fontSize, u, a6, aHB, eu, ko) {
				let km;
				if (1 === u) {
					a6 = aGc[a6 + df.eM];
					if (!xA.xB.aHI(a6)) return function(hL, hM, fontSize, vY, aHB, ko) {
						ko.globalAlpha = aHD(fontSize);
						hL -= .534 * aHB * fontSize, aHB = hM + 1.59 * fontSize;
						ko.font = q.r.ft(0, .785 * fontSize), ko.fillText(xA.xB.aFo(vY), hL, aHB), ko.globalAlpha = 1
					}(hL, hM, fontSize, a6, aHB, ko);
					km = xA.p4.a4J[a6 - 1024 + xA.xB.xF]
				} else km = 2 === u ? b7.aHK()[4].aq[+(eu < 255)] : (3 === u ? b7.aHK()[5] : b7.aHK()[6]).aq[0];
				a6 = xA.p4.a4I, eu = .8 * fontSize / a6, u = hL - .5 * eu * a6 - .534 * aHB * fontSize, hL = hM + 1.4 * eu * a6;
				ko.setTransform(eu, 0, 0, eu, u, hL), ko.globalAlpha = aHD(fontSize), ko.drawImage(km, 0, 0), ko.globalAlpha = 1, ko.setTransform(1, 0, 0, 1, 0, 0)
			}(hL, hM, fontSize, u, a6, il, aGd[a6 + u * df.eM], ko), il -= 2)
		}(hL, hM, fontSize, a6, ko), (hN = aGS * fontSize) < aGU || (ko.font = q.r.ft(1, hN), hM += Math.floor(.78 * fontSize), aZ.af.data[7].value ? aH4(a6, hN, hL, hM, ko) : aH3(ko, a6, hN, hL, hM, aH0)))
	}

	function aH4(a6, fontSize, a7, a8, ko) {
		var ___id = a6;
		ko.fillText(dV.hY[a6], a7, a8), a6 < df.dg && 2 !== dV.qh[a6] || (a6 = fontSize / aGP[a6], ko.fillRect(a7 - .5 * a6, a8 + q.r.aB7 * fontSize, a6, Math.max(1, .1 * fontSize)));
		aZ.af.data[7].value && settings.showPlayerDensity && (settings.coloredDensity && (ko.fillStyle = utils.textStyleBasedOnDensity(___id)), ko.fillText(utils.getDensity(___id), a7, a8 + fontSize));
	}

	function aH3(ko, a6, fontSize, hL, hM, aH0) {
		var ___id = a6;
		a6 = q.cg.hX(dV.l5[a6]);
		aH0 >> 1 & 1 ? (ko.lineWidth = .05 * fontSize, ko.strokeStyle = aH2(fontSize, aH0 % 2), ko.strokeText(a6, hL, hM)) : (1 < aH0 && (ko.lineWidth = .12 * fontSize, ko.strokeStyle = aH2(fontSize, aH0), ko.strokeText(a6, hL, hM)), ko.fillText(a6,
			hL, hM));
		aZ.af.data[7].value || settings.showPlayerDensity && (settings.coloredDensity && (ko.fillStyle = utils.textStyleBasedOnDensity(___id)), ko.fillText(utils.getDensity(___id), hL, hM + fontSize))
	}

	function aH7(hL, hM, fontSize, aHB, aHC, ko) {
		var bQ = .95 * fontSize / aGf,
			hL = hL - .5 * bQ * aGe + .8 * aHB * fontSize,
			aHB = hM - 1.76 * bQ * aGf - (.35 - q.r.aB7 + .7) * aHC * fontSize;
		ko.setTransform(bQ, 0, 0, bQ, hL, aHB), ko.globalAlpha = aHD(fontSize), ko.drawImage(bN.get(4), 0, 0), ko.globalAlpha = 1, ko.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aHH(hL, hM, fontSize, vY, aHB, ko) {
		if (ko.globalAlpha = aHD(fontSize), xA.xB.aHI(vY)) {
			var gv = xA.p4.a4I,
				bQ = 1.1 * fontSize / gv;
			ko.setTransform(bQ, 0, 0, bQ, hL - .5 * bQ * gv - .8 * aHB * fontSize, hM - 1.55 * bQ * gv), ko.drawImage(xA.p4.a4J[vY - 1024 + xA.xB.xF], 0, 0), ko.setTransform(1, 0, 0, 1, 0, 0)
		} else {
			let a5m = hL - .8 * aHB * fontSize,
				a4m = hM - (.35 - q.r.aB7 + 1) * fontSize;
			ko.fillText(xA.xB.aFo(vY), a5m, a4m)
		}
		ko.globalAlpha = 1
	}

	function aH2(fontSize, aH0) {
		return aGR <= fontSize && fontSize < aGQ ? lV.i1[aH0] + aHD(fontSize).toFixed(3) + ")" : lV.i2[aH0]
	}

	function aHD(fontSize) {
		return aGR <= fontSize && fontSize < aGQ ? 1 - (fontSize - aGR) / (aGQ - aGR) : 1
	}

	function aHV(w2, ak) {
		return 1 + Math.floor(aGT * w2 * ak)
	}

	function aHS(a6) {
		for (var left = aGK[a6], hC = aGK[a6] - dV.nu[a6] - 1; 0 <= hC; hC--)
			if (!aHW(a6, --left, aGL[a6], aGN[a6])) {
				left++;
				break
			} var right = aGK[a6];
		for (hC = dV.nw[a6] - aGK[a6] - aGM[a6]; 0 <= hC; hC--)
			if (!aHW(a6, ++right + aGM[a6] - 1, aGL[a6], aGN[a6])) {
				right--;
				break
			} var a7 = Math.floor((left + right) / 2),
			top = aGL[a6];
		for (hC = aGL[a6] - dV.nv[a6] - 1; 0 <= hC; hC--)
			if (!aHX(a6, a7, --top, aGM[a6])) {
				top++;
				break
			} var bottom = aGL[a6];
		for (hC = dV.nx[a6] - aGL[a6] - aGN[a6]; 0 <= hC; hC--)
			if (!aHX(a6, a7, ++bottom + aGN[a6] - 1, aGM[a6])) {
				bottom--;
				break
			} var a8 = Math.floor((top + bottom) / 2);
		aHP(a6, a7, a8, aGM[a6], aGN[a6]) && (aGK[a6] = a7, aGL[a6] = a8)
	}

	function aHP(player, a7, a8, ak, al) {
		ia = Math.floor(.2 * ak);
		for (var ia, u = a7 + ak - 1; a7 <= u; u--)
			if (!aHW(player, u, a8, al)) return;
		for (u = a8 + al - 1 - (ia = (ia = Math.floor(.25 * al)) < 1 ? 1 : ia); a8 + ia <= u; u--)
			if (!aHX(player, a7, u, ak)) return;
		return 1
	}

	function aHW(player, a7, a8, al) {
		return dZ.qp(player, 4 * (a8 * y.aB + a7)) && dZ.qp(player, 4 * ((a8 + al - 1) * y.aB + a7))
	}

	function aHX(player, a7, a8, ak) {
		return dZ.qp(player, 4 * (a8 * y.aB + a7)) && dZ.qp(player, 4 * (a8 * y.aB + a7 + ak - 1))
	}
	this.m = function() {
		if (aGn = 0 === (aGn = aZ.af.data[11].value) ? 280 : 1 === aGn ? 187 : 112, aGZ = !1, aGV = .88, aGS = .5, aGT = 1.8, aGU = 12 - 3 * aZ.af.data[9].value, aGJ = aGI = 0, aGK = new Uint16Array(df.eM), aGL = new Uint16Array(df.eM), aGM =
			new Uint16Array(df.eM), aGN = new Uint16Array(df.eM), aGO = new Float32Array(df.eM), aGP = new Float32Array(df.eM), aGc = new Uint16Array(2 * df.eM), aGd = new Uint8Array(5 * df.eM), aGl = new Uint8Array(df.eM), aGm = new Uint8Array(
				df.eM), aGa = aGa || document.createElement("canvas"), a3r(), aGX = aGW = 0, aGY = 1, aZ.af.data[7].value) {
			var a6, aGt;
			for (aGo(), bI.font = q.r.ft(1, 100), aGt = 100 / Math.floor(bI.measureText("900 000").width), a6 = df.eM - 1; 0 <= a6; a6--) aGO[a6] = Math.min(aGt, 2 * aGP[a6]);
			aGk = aGt, aGj[0] = 100 / (aGt * Math.floor(bI.measureText("5 000 000").width)), aGj[1] = 100 / (aGt * Math.floor(bI.measureText("50 000 000").width)), aGj[2] = 100 / (aGt * Math.floor(bI.measureText("500 000 000").width)), aGj[3] =
				100 / (aGt * Math.floor(bI.measureText("1 000 000 000").width))
		} else aGo();
		! function() {
			var a6;
			for (a6 = df.eM - 1; 0 <= a6; a6--) dV.ev[a6] < 12 ? (aGK[a6] = dV.nu[a6] + 1, aGL[a6] = dV.nv[a6] + 1, aGM[a6] = 1, aGN[a6] = 1) : (aGK[a6] = dV.nu[a6], aGL[a6] = dV.nv[a6] + 1, aGM[a6] = 4, aGN[a6] = 2);
			if (df.e7)
				for (a6 = 0; a6 < df.dg; a6++) aGM[a6] = 0;
			aGe = bN.get(4).width, aGf = bN.get(4).height
		}()
	}, this.mY = function(dY, a9E) {
		a9E > 18 * dV.ev[dY] ? (aGm[dY] = 6, dZ.oM[dY] = 2 + dZ.oM[dY] % 2) : (aGl[dY] = 4, (dZ.oM[dY] < 2 || 3 < dZ.oM[dY]) && (dZ.oM[dY] = 6 + dZ.oM[dY] % 2))
	}, this.j5 = function(dY, a9E) {
		a9E > 6 * dV.ev[dY] ? (aGm[dY] = 6, dZ.oM[dY] = 4 + dZ.oM[dY] % 2) : (aGl[dY] = 4, (dZ.oM[dY] < 4 || 5 < dZ.oM[dY]) && (dZ.oM[dY] = 8 + dZ.oM[dY] % 2))
	}, this.resize = function() {
		a3r(), aGs(aGb)
	}, this.th = function() {
		for (var a6 = 0; a6 < df.dg; a6++) dV.nw[a6] - dV.nu[a6] != 3 || dV.nx[a6] - dV.nv[a6] != 3 ? (aGK[a6] = dV.nu[a6] + (dV.nw[a6] !== dV.nu[a6] ? 1 : 0), aGL[a6] = dV.nv[a6], aGM[a6] = 1, aGN[a6] = 1) : (aGK[a6] = dV.nu[a6], aGL[a6] = dV
			.nv[a6] + 1, aGM[a6] = 4, aGN[a6] = 2)
	}, this.vZ = function(player, aQ, aGv) {
		! function(player, aQ, aGv) {
			player += aQ * df.eM;
			0 === aQ ? aGc[player] === aGv && 0 < aGd[player] ? aGd[player] = 0 : (aGc[player] = aGv, aGd[player] = xA.xB.aGx(aGv) ? 255 : 64) : 1 === aQ ? (aGd[player] = 64, aGc[player] = aGv) : aGd[player] = aGv
		}(player, aQ, aGv), 2 === df.gP && this.oK(!0)
	}, this.bH = function() {
		aGZ && (1 !== aGY ? (bI.imageSmoothingEnabled = !0, bI.setTransform(aGY, 0, 0, aGY, 0, 0), bI.drawImage(aGa, -aGW / aGY, -aGX / aGY), bI.setTransform(1, 0, 0, 1, 0, 0), bI.imageSmoothingEnabled = !1) : bI.drawImage(aGa, -aGW, -aGX))
	}, this.fm = function(fX, fY) {
		aGW += fX, aGX += fY
	}, this.fU = function(fX, fY) {
		fZ.fm(fX, fY)
	}, this.zoom = function(aG, fb, fc) {
		aGY *= aG, aGW = (aGW + fb) * aG - fb, aGX = (aGX + fc) * aG - fc
	}, this.oK = function(a0c) {
		return !(!aGi && !a0c && bA.bB < aGh + (1 === aGY && 0 === aGW && 0 === aGX && (df.a6S() || df.e7 || 2 === df.gP) ? 1e3 : aGn) || (aGi = !1, aGh = bA.bB, aGs(aGb), 0))
	}, this.hS = function(a6) {
		return aGu(a6) * aGO[a6]
	}, this.aGz = function(player) {
		return aGO[player]
	}, this.bD = function() {
		bA.bC() % 10 == 9 && (aGi = df.a6T() && !df.a6S()), !df.a6S() && 4 <= ++aGJ && function() {
			var a6, hC, iV;
			for (aGJ = 0, iV = 4; 1 <= iV; iV--)
				for (hC = dR - 1; 0 <= hC; hC--) a6 = dT[hC] + iV * df.eM, 0 < aGd[a6] && aGd[a6] < 255 && aGd[a6]--;
			if (2 !== df.gP)
				for (hC = dR - 1; 0 <= hC; hC--) a6 = dT[hC], 0 < aGd[a6] && aGd[a6] < 255 && aGd[a6]--
		}();
		for (var aF = Math.floor(.1 * dR), a6 = aGI + (aF = dR < (aF = aF < 8 ? 8 : aF) ? dR : aF) - 1; aGI <= a6; a6--) ! function(a6) {
			var w2 = aGu(a6) * aGO[a6];
			0 < aGM[a6] && aHP(a6, aGK[a6], aGL[a6], aGM[a6], aGN[a6]) ? ! function(a6) {
				for (var a7, a8, ak, al, e4 = !1, iV = 0; iV < 8; iV++) {
					if (ak = aGM[a6] + 2, al = aGN[a6] + 2, ak > dV.nw[a6] - dV.nu[a6] + 1 || al > dV.nx[a6] - dV.nv[a6] + 1) return e4;
					if (a7 = aGK[a6] - 1, a8 = aGL[a6] - 1, !aHP(a6, a7, a8, ak, al)) return e4;
					aGK[a6] = a7, aGL[a6] = a8, aGM[a6] = ak, aGN[a6] = al, e4 = !0
				}
				return e4
			}(a6) && function(a6, w2) {
				for (var a7, a8, ak, al, e4 = !1, aAI = aGM[a6], fd = 1 + Math.floor(.02 * aAI), iV = 1; iV < 5; iV++) {
					if ((ak = aAI + iV * fd) > dV.nw[a6] - dV.nu[a6] + 1) return e4;
					if ((al = aHV(w2, ak)) > dV.nx[a6] - dV.nv[a6] + 1) return e4;
					a7 = dV.nu[a6] + Math.floor(Math.random() * (dV.nw[a6] - dV.nu[a6] + 2 - ak)), a8 = dV.nv[a6] + Math.floor(Math.random() * (dV.nx[a6] - dV.nv[a6] + 2 - al)), aHP(a6, a7, a8, ak, al) && (aGK[a6] = a7, aGL[a6] = a8, aGM[
						a6] = ak, aGN[a6] = al, e4 = !0)
				}
				return e4
			}(a6, w2) && aHS(a6) : ! function(a6, w2) {
				var al, a7 = aGK[a6] + 1,
					a8 = aGL[a6] + 1,
					ak = aGM[a6] - 2;
				for (;;) {
					if (ak < 1) {
						aGM[a6] = 0;
						break
					}
					if (al = aHV(w2, ak), aHP(a6, a7, a8, ak, al)) return aGK[a6] = a7, aGL[a6] = a8, aGM[a6] = ak, aGN[a6] = al, 1;
					a7++, a8++, ak -= 2
				}
				return
			}(a6, w2) ? function(a6, w2) {
				var a7, a8, ak, al, iV, ag, hH = dV.nw[a6] - dV.nu[a6] + 1,
					a5K = Math.floor(.02 * hH);
				for (ag = -6 * (a5K = a5K < 1 ? 1 : a5K), iV = hH; ag <= iV; iV -= a5K)
					if (al = aHV(w2, ak = 0 < iV ? iV : 1), a7 = dV.nu[a6] + Math.floor(Math.random() * (dV.nw[a6] - dV.nu[a6] + 2 - ak)), a8 = dV.nv[a6] + Math.floor(Math.random() * (dV.nx[a6] - dV.nv[a6] + 2 - al)), aHP(a6, a7, a8, ak,
							al)) return aGK[a6] = a7, aGL[a6] = a8, aGM[a6] = ak, aGN[a6] = al
			}(a6, w2) : aHS(a6)
		}(dT[a6 % dR]);
		aGI = (aGI + aF) % dR
	}, this.aHN = function() {
		var a6, dY, iJ, iK;
		if (bA.bC() % 4 == 1)
			for (a6 = dR - 1; 0 <= a6; a6--) dY = dT[a6], dZ.oM[dY] < 2 || ((iJ = Math.max(aGl[dY] - 1, 0)) === (iK = Math.max(aGm[dY] - 1, 0)) ? 0 === iJ && (dZ.oM[dY] %= 2) : 0 === iK && dZ.oM[dY] < 6 && (dZ.oM[dY] += 4), aGl[dY] = iJ, aGm[
				dY] = iK)
	}, this.a4t = function(player) {
		var a6 = player + 2 * df.eM,
			eu = aGd[a6];
		return 0 < eu && (f6.a2x(50, player), aGd[a6] = 0, 255 === eu)
	}, this.aHO = function(player) {
		return 255 === aGd[player + 2 * df.eM]
	}
}

function mm() {
	var bB = 2e4;
	this.show = function() {
		if (bA.bB < bB) return !1;
		bB = bA.bB + 135e4, av.aw.aHY(Math.floor(135e4))
	}
}

function aEP() {
	this.aEa = function() {
		var value, aHa;
		0 === av.id && (value = function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var hh = window.location.search,
				hh = new URLSearchParams(hh).get(key);
			if ("string" != typeof hh || hh.length < 1) return null;
			return hh
		}("replay"), (aHa = new URL(window.location.href)).search = "", history.replaceState(null, "", aHa.toString()), value) && g.g2(3, 0, value)
	}
}

function xz() {
	function aHg(i7) {
		var kz = (1 + df.f3) * ek.result.dh / (1e5 * ek.result.ec);
		let m4 = "";
		for (let a6 = 0; a6 < i7.length; a6++) {
			var sD = i7[a6].a0C * kz;
			m4 += "  " + i7[a6].name + ": " + q.cg.v4(1e5 * sD)
		}
		m4.length && (f6.f7(0, "The following clans have won these glorious points:", 45, 0, q.color.a6X(225, 240, 255), i.bL, -1, !1), f6.f7(0, m4.trim(), 45, 0, q.color.a6X(225, 240, 255), i.bL, -1, !1))
	}
	this.ej = function(eb) {
		var aHc = lV.i5[ep.zX()],
			aHd = lV.fr[aHc],
			aHd = (fx.a7f("Team " + aHd, 2, 1, 12), f6.f7(0, "Team " + aHd + " won the game!", 40, 0, i.bM, i.bL, -1, !1), df.ei && q.ce.dt(df.du) && (ek.result.ee += (q.cg.ig(dV.ih[df.du]) ? 2 : 1) * ek.result.dh * (1 + df.f3) * dV.ev[df.du] /
				ek.result.ec), function(dS) {
				var i7 = [],
					username = dV.ih,
					aF = dS.length;
				loop: for (let a6 = 0; a6 < aF; a6++) {
					var dY = dS[a6],
						aHi = q.cg.ig(username[dY]);
					if (aHi) {
						for (let hC = i7.length - 1; 0 <= hC; hC--)
							if (i7[hC].name === aHi) {
								i7[hC].a0C += dV.ev[dY];
								continue loop
							} i7.push({
							name: aHi,
							a0C: dV.ev[dY],
							md: lV.i6[dY]
						})
					}
				}
				return i7.sort(function(hC, iV) {
					return iV.a0C - hC.a0C
				}), i7
			}(eb));
		aHd.length && (2 === df.eh ? aHg(aHd) : aHg(function(i7, aHc) {
			for (let a6 = i7.length - 1; 0 <= a6; a6--) lV.i5[i7[a6].md] !== aHc && i7.splice(a6, 1);
			return i7
		}(aHd, aHc)))
	}
}

function aHj() {
	this.aF = 0, this.ak = 0, this.y1 = null, this.m = function() {
		this.y1 = [], this.y1.push({
			a7: 0,
			a8: 0,
			iY: av.aw.ax(),
			aHk: null
		}), this.y1.push({
			a7: 0,
			a8: 0,
			iY: !1,
			aHk: new a39
		}), this.y1[1].aHk.a3F(), this.aF = this.y1.length, this.ak = 0
	}, this.a2Z = function() {
		this.ak = Math.floor((av.aw.ax() ? .063 : .04) * ay.az), this.ak += 4 - this.ak % 4, this.y1[0].a7 = b2.gap, this.y1[0].a8 = ay.al - this.ak - b2.gap;
		for (var a6 = 1; a6 < this.aF; a6++) this.y1[a6].a7 = this.y1[a6 - 1].a7 + Math.floor(av.aw.ax() ? 1.5 * b2.gap : 3.7 * b2.gap) + this.ak, this.y1[a6].a8 = this.y1[0].a8
	}, this.kO = function(fb, fc) {
		if (bN.fv())
			for (var a6 = this.aF - 1; 0 <= a6; a6--)
				if (fb >= this.y1[a6].a7 && fc >= this.y1[a6].a8 && fb < this.y1[a6].a7 + this.ak && fc < this.y1[a6].a8 + this.ak) return a6;
		return -1
	}, this.aHl = function() {
		for (var a6 = 1; 1 <= a6; a6--)
			if (this.y1[a6].aHk.ai) return !0;
		return !1
	}, this.resize = function() {
		for (var a6 = 1; 1 <= a6; a6--) this.y1[a6].aHk.resize()
	}, this.t = function() {
		return !!this.y1[1].aHk.ai && (this.y1[1].aHk.bF(-5e3, -5e3), !0)
	}, this.bF = function(fb, fc, a09) {
		if (a09 && this.y1[1].aHk.ai) return this.y1[1].aHk.bF(fb, fc), !0;
		fb = this.kO(fb, fc);
		if (a09) {
			if (0 === fb) return this.y1[fb].iY = !this.y1[fb].iY, aZ.af.aY(2, this.y1[fb].iY ? 1 : 0), ay.ze(0), !0;
			if (1 <= fb && fb < 2) return this.y1[fb].aHk.m(), bA.bE = !0
		}
		return !1
	}, this.fU = function(fb, fc) {
		return !!this.y1[1].aHk.ai && (this.y1[1].aHk.fU(fb), !0)
	}, this.kF = function() {
		for (var a6 = 1; 1 <= a6; a6--)
			if (this.y1[a6].aHk.ai) return this.y1[a6].aHk.kF(), !0;
		return !1
	}, this.bH = function() {
		if (bN.fv()) {
			bI.imageSmoothingEnabled = !0;
			for (var a6 = this.aF - 1; 0 <= a6; a6--) bI.fillStyle = this.y1[a6].iY ? i.m0 : i.bL, bI.fillRect(this.y1[a6].a7, this.y1[a6].a8, this.ak, this.ak), 0 === a6 ? this.aHm(a6, bN.get(15)) : 1 === a6 && this.aHn(), bI.setTransform(1, 0,
				0, 1, 0, 0), bI.lineWidth = b2.zb, bI.strokeStyle = i.bM, bI.strokeRect(this.y1[a6].a7, this.y1[a6].a8, this.ak, this.ak);
			bI.imageSmoothingEnabled = !1
		}
	}, this.aHm = function(a6, km) {
		var gap = .08 * this.ak,
			zoom = (this.ak - 2 * gap) / km.width;
		bI.setTransform(zoom, 0, 0, zoom, this.y1[a6].a7 + gap, this.y1[a6].a8 + (this.ak - zoom * km.height) / 2), bI.drawImage(km, 0, 0)
	}, this.aHn = function() {
		bI.setTransform(1, 0, 0, 1, this.y1[1].a7, this.y1[1].a8);
		for (var ia = this.ak / 4, a7 = 3; 0 <= a7; a7--)
			for (var a8 = 3; 0 <= a8; a8--) {
				var kQ = Math.floor(367 * (a7 + 1) * (a8 + 1) % 256),
					gS = Math.floor(687 * (a7 + 1) * (a8 + 1) % 256),
					iV = Math.floor(651 * (a7 + 1) * (a8 + 1) % 256);
				bI.fillStyle = "rgb(" + kQ + "," + gS + "," + iV + ")", bI.fillRect(a7 * ia, a8 * ia, ia, ia)
			}
	}, this.aHo = function() {
		for (var a6 = 1; 1 <= a6; a6--)
			if (this.y1[a6].aHk.ai) return void this.y1[a6].aHk.bH()
	}
}

function o(a33, b) {
	var jU = document.createElement("div");
	this.aHp = jU, this.resize = function() {
		jU.style.padding = q.r.hr(b2.hs), jU.style.lineHeight = q.r.hr(q.r.pK(.035))
	}, a33.style.overflowX = "hidden", a33.style.overflowY = "auto", jU.innerHTML = b, a33.appendChild(jU)
}

function ck() {
	this.wj = function(aq, aFI, zF) {
		var ak = aq.width,
			al = aq.height,
			u = q.r.kn(ak, al),
			ko = q.r.getContext(u, !0),
			aq = (ko.drawImage(aq, 0, 0), ko.getImageData(0, 0, ak, al));
		return aFI(aq.data, ak, al, zF), ko.putImageData(aq, 0, 0), u
	}, this.aFN = function(p4, ak, al) {
		for (let a7 = ak - 1; 0 <= a7; a7--)
			for (let a8 = al - 1; 0 <= a8; a8--) {
				var a6 = 4 * (a7 + a8 * ak);
				p4[3 + a6] = p4[a6], p4[a6] = p4[1 + a6] = p4[2 + a6] = 255
			}
	}, this.aFJ = function(p4, ak, al) {
		for (let a7 = ak - 1; 0 <= a7; a7--)
			for (let a8 = al - 1; 0 <= a8; a8--) {
				var a6 = 4 * (a7 + a8 * ak);
				p4[1 + a6] > p4[2 + a6] + 10 && (p4[3 + a6] = p4[a6], p4[1 + a6] = p4[2 + a6])
			}
	}, this.aFL = function(p4, ak, al, zF) {
		var a6, gap = Math.floor(Math.min(ak, al) * zF);
		for (let a7 = 0; a7 < ak; a7++)
			for (let a8 = 0; a8 < al; a8++)(a7 < gap || a8 < gap || a7 >= ak - gap || a8 >= al - gap) && (p4[3 + (a6 = 4 * (a7 + a8 * ak))] = 255 - 255 * (p4[1 + a6] - p4[a6]) / (255 - p4[a6]))
	}, this.wk = function(p4, ak, al, zF) {
		for (let a7 = ak - 1; 0 <= a7; a7--)
			for (let a8 = al - 1; 0 <= a8; a8--) {
				var a6 = 4 * (a7 + a8 * ak);
				p4[a6] = zF[0], p4[1 + a6] = zF[1], p4[2 + a6] = zF[2]
			}
	}, this.aFK = function(p4, ak, al, zF) {
		var a6, gap = Math.floor(ak * zF);
		for (let a7 = 0; a7 < ak; a7++)
			for (let a8 = 0; a8 < al; a8++)(a7 < gap || a8 < gap || a7 >= ak - gap || a8 >= al - gap) && (p4[a6 = 4 * (a7 + a8 * ak)] = p4[1 + a6] = p4[2 + a6] = 0)
	}, this.aFM = function(p4, ak, al) {
		for (var a8, a6, a7 = ak - 1; 0 <= a7; a7--)
			for (a8 = al - 1; 0 <= a8; a8--) 200 < p4[1 + (a6 = 4 * (a7 + a8 * ak))] && p4[1 + a6] - 20 > p4[a6] && p4[1 + a6] - 20 > p4[2 + a6] ? p4[a6] + p4[2 + a6] < 40 ? p4[3 + a6] = 0 : (p4[3 + a6] = p4[a6], p4[a6] = 255, p4[1 + a6] = 255,
				p4[2 + a6] = 255) : p4[a6] < 50 && p4[1 + a6] < 50 && p4[2 + a6] < 50 && (p4[a6] + p4[1 + a6] + p4[2 + a6] < 50 ? p4[3 + a6] = 180 : p4[3 + a6] = 180 + Math.floor(75 * (p4[a6] + p4[1 + a6] + p4[2 + a6] - 50) / 100))
	}, this.aFO = function(p4, ak, al) {
		for (var a8, a6, a7 = ak - 1; 0 <= a7; a7--)
			for (a8 = al - 1; 0 <= a8; a8--) p4[1 + (a6 = 4 * (a7 + a8 * ak))] > p4[a6] + 20 && p4[1 + a6] > p4[2 + a6] + 20 && p4[a6] + p4[2] < 40 && (p4[3 + a6] = 255 - p4[1 + a6], p4[a6] = p4[1 + a6] = p4[2 + a6] = p4[a6])
	}, this.kt = function(p4, ak, al, zF) {
		var kQ = ak >> 1;
		for (let a7 = 0; a7 < ak; a7++)
			for (let a8 = 0; a8 < al; a8++) Math.sqrt((a7 - kQ) * (a7 - kQ) + (a8 - kQ) * (a8 - kQ)) > zF * kQ && (p4[4 * (a7 + a8 * ak) + 3] = 0)
	}
}

function aFw() {
	this.t5 = function(cB, bg) {
		bf.m(bg), 0 === bf.size ? c8.d4.cR(cB, 3205) : ((0 === bf.dB(1) ? function(cB) {
			var aHt = bf.dB(6);
			0 === aHt ? function(cB) {
				if (0 === cB && 8 !== cM.cN()) {
					wh.fs(0, dJ.dK.dL(bf.dB(5))), wh.fs(1, "[" + dJ.dK.dL(bf.dB(3)) + "]");
					var aHw = bf.dB(12),
						aHx = bf.dB(6),
						bZ = new Array(aHw);
					for (let a6 = 0; a6 < aHw; a6++) bZ[a6] = bf.dB(aHx);
					kG.aHy(bZ)
				}
			}(cB) : 1 === aHt ? function() {
				var a6;
				if (8 !== cM.cN()) {
					var wE, id = bf.dB(1),
						position = bf.dB(16),
						a5c = bf.dB(4),
						bZ = [];
					for (a6 = 0; a6 < a5c; a6++) wE = bf.dB(14), bZ.push({
						name: dJ.dK.dL(bf.dB(5)),
						wE: wE
					});
					0 === id ? a1K.yy(0, bZ, 10, 1, .36, .55, position) : a1K.yy(1, bZ, 100, 2, .47, .5, position)
				}
			}() : 2 === aHt ? c8.aFx.si(cB) : 3 === aHt || 4 === aHt ? qM.m() : 5 !== aHt && 6 !== aHt && 7 !== aHt && 8 !== aHt && (9 === aHt ? c8.aFy.aGC(cB) : 10 === aHt ? c8.aG0.d3() : 11 === aHt ? c8.aFy.aGD() : 12 === aHt ?
				c8.aG0.dC() : 13 === aHt ? c8.aG1.aDd() : 14 === aHt && c8.aG1.aDe())
		} : function(cB) {
			if (8 !== cM.cN() && !qM.aI4()) return;
			if (cB !== c8.d4.bt) c8.d4.cR(cB, 3244);
			else if (0 === bf.dB(1)) bA.aI5.tc(bf.bg);
			else {
				var a6, vY, cB = bf.dB(2);
				if (0 === cB) {
					var c9 = bf.dB(9);
					0 !== dV.eg[c9] && 0 !== dV.eg[df.du] && (vY = bf.dB(10), f6.a4G(c9, df.du, vY), fZ.vZ(c9, 1, vY))
				} else if (1 === cB) ! function() {
					var c9 = bf.dB(9);
					0 !== dV.eg[c9] && 0 !== dV.eg[df.du] && a6M.a42(0, [c9], !0) && f6.a9A(c9, 1)
				}();
				else if (2 === cB) ! function() {
					var c9 = bf.dB(9),
						target = bf.dB(9);
					0 !== dV.eg[c9] && 0 !== dV.eg[target] && 0 !== dV.eg[df.du] && a6M.a42(1, [c9], !0) && (fZ.vZ(c9, 3, 96), fZ.vZ(target, 4, 96), f6.a9C(c9, target))
				}();
				else if (lj && !lk) {
					var aF = 720;
					for (bc.bd(14407), bc.bh(1, 0), bc.bh(6, 10), aF = Math.min(e9.te.po.length, 720), a6 = 0; a6 < aF; a6++) bc.bh(20, e9.te.po[a6]);
					c8.d4.send(c8.d4.bt, bc.bg)
				}
			}
		})(cB), bA.aHs())
	}, this.aHz = function(bg) {
		if (bf.m(bg), bf.aQ = 1, 3 === bf.dB(6)) {
			bf.aQ += 20;
			for (var n0, iX, name, bg = bf.dB(9), gE = bf.dB(14), gF = bf.dB(4), so = 1 === bf.dB(1), gJ = bf.dB(6), gK = bf.dB(14), aI3 = bf.dB(9) + 1, dS = [], a6 = 0; a6 < aI3; a6++) n0 = bf.dB(1), iX = [bf.dB(6), bf.dB(6), bf.dB(6)], name =
				dJ.dK.dL(bf.dB(5)), dS.push({
					name: name,
					iX: iX,
					n0: n0
				});
			cM.gT(), y.bd(gJ, gK), 1 === dS.length && gM.gU(gF), df.gY(gE, bg, dS, gF, so, !1)
		} else ! function() {
			bf.aQ += 20;
			for (var n0, iX, wE, name, a1N = bf.dB(1), gE = bf.dB(14), gF = bf.dB(4), so = 1 === bf.dB(1), gJ = bf.dB(6), gK = bf.dB(14), dS = [], a6 = 0; a6 < 2; a6++) n0 = bf.dB(1), iX = [bf.dB(6), bf.dB(6), bf.dB(6)], wE = bf.dB(14),
				name = dJ.dK.dL(bf.dB(5)), dS.push({
					name: name,
					iX: iX,
					wE: wE,
					n0: n0
				});
			cM.gT(), y.bd(gJ, gK), df.gY(gE, a1N, dS, gF, so, !1)
		}()
	}, this.aI2 = function() {
		bf.aQ = 1;
		var aHt = bf.dB(6),
			ld = bf.dB(10);
		return c8.d4.bu > c8.d4.bm && (ld += c8.d4.bm), c8.d4.bu === ld ? (c8.d4.bt = ld, !1) : (c8.d4.close(c8.d4.bu, 3247), c8.d4.bt = ld, qM.a1M = bf.dB(10), qM.a1N = bf.dB(3 === aHt ? 9 : 1), c8.d4.c4(ld, 5) && c8.c9.a1L(), !0)
	}
}

function ph() {
	f6.bD(), fZ.bD(), gm.a0j(), c8.d4.bD()
}

function pi() {
	eO.bD(), a6J.bD(), iv.bD(), a6L.bD(), qn.bD(), qR.bD(), gi.bD(), eE.d4.bD(), ln(), gk.bD(), iH.bD(), fZ.bD(), fZ.aHN(), gm.bD(), gf.bD(), gn.bD(), go.bD(), f6.bD(), a6M.bD(), b8.bD(), gl.bD(), j3.bD(), ep.bD(), vc.bD(), c8.d4.bD(), c8.cO.bD(), g
		.bD(), hk.bD(), bA.bD()
}

function pl() {
	fT.bD(), gp.bD(), fx.bD(), gr.bD(), gj.bD(), qM.aIA()
}

function pk() {
	gk.oK(!1), go.oK(), gm.oK(!1), gn.oK(), b8.oK(), gl.oK(), fZ.oK(!1), ep.fu()
}

function pf() {
	fZ.oK(!1) && (bA.bE = !0), c8.d4.bD()
}

function aET() {
	this.d1 = !1, this.aBm = !1, this.a4W = !1, this.aIB = [0, 0, 0, 0], this.pj = function() {
		var bK, hP, hQ, hR;
		this.a4W = this.a4W || this.aBm, (this.aBm || this.d1 && this.a4W) && (bK = fl.cv[0], hP = fl.cv[1], hQ = fl.cv[2], hR = fl.cv[3], bK = bK < this.aIB[0] ? this.aIB[0] : bK, hP = hP < this.aIB[1] ? this.aIB[1] : hP, hQ = hQ > this.aIB[2] ?
			this.aIB[2] : hQ, hR = hR > this.aIB[3] ? this.aIB[3] : hR, this.aBm = !1, this.d1 = !1, bK === this.aIB[0] && hP === this.aIB[1] && hQ === this.aIB[2] && hR === this.aIB[3] ? this.tm() : bK <= hQ && hP <= hR && a6H.putImageData(
				a6I, 0, 0, bK, hP, hQ - bK + 1, hR - hP + 1))
	}, this.tm = function() {
		this.a4W && this.aIB[2] >= this.aIB[0] && this.aIB[3] >= this.aIB[1] && a6H.putImageData(a6I, 0, 0, this.aIB[0], this.aIB[1], this.aIB[2] - this.aIB[0] + 1, this.aIB[3] - this.aIB[1] + 1), this.a4W = !1
	}, this.aC6 = function() {
		this.aIB[2] >= this.aIB[0] && this.aIB[3] >= this.aIB[1] && a6H.putImageData(a6I, 0, 0, this.aIB[0], this.aIB[1], this.aIB[2] - this.aIB[0] + 1, this.aIB[3] - this.aIB[1] + 1), this.a4W = !1
	}, this.m = function() {
		var a7, a8;
		this.d1 = !1, this.aBm = !1, this.a4W = !1, this.aIB[0] = y.aB, this.aIB[1] = y.aC, this.aIB[2] = this.aIB[3] = 0;
		loop: for (a7 = 1; a7 < y.aB - 1; a7++)
			for (a8 = y.aC - 2; 1 < a8; a8--)
				if (1 === w7[dZ.o0(a7, a8) + 2]) {
					this.aIB[0] = a7;
					break loop
				} loop: for (a8 = 1; a8 < y.aC - 1; a8++)
			for (a7 = y.aB - 2; 1 < a7; a7--)
				if (1 === w7[dZ.o0(a7, a8) + 2]) {
					this.aIB[1] = a8;
					break loop
				} loop: for (a7 = y.aB - 2; 0 < a7; a7--)
			for (a8 = y.aC - 2; 1 < a8; a8--)
				if (1 === w7[dZ.o0(a7, a8) + 2]) {
					this.aIB[2] = a7;
					break loop
				} loop: for (a8 = y.aC - 2; 0 < a8; a8--)
			for (a7 = y.aB - 2; 1 < a7; a7--)
				if (1 === w7[dZ.o0(a7, a8) + 2]) {
					this.aIB[3] = a8;
					break loop
				}
	}
}

function aER() {
	this.id = 0, this.aa = 0, this.t6 = null, this.t7 = null, this.t8 = null, this.t9 = null, this.aw = new aIC, this.m = function() {
		var self, aa;
		self = this, "undefined" == typeof Android || (aa = Android.getVersion()) < 12 || (self.aa = aa, self.id = 1, self.t7 = Android),
			function(self) {
				var aa;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.t8 = mwIOSdataX, self.t9 = window.webkit.messageHandlers.iosCommandA, aa = self
					.t8.version, self.aa = aa ? Number(aa) : 0)
			}(this),
			function(self) {
				var t6;
				if (0 === self.id) {
					try {
						if (!(t6 = window.localStorage)) return;
						t6.setItem("tls7", "1"), t6.removeItem("tls7")
					} catch (error) {
						return
					}
					self.t6 = t6
				}
			}(this)
	}
}

function aEm() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.xF = 13, this.aFf = this.emojis.length, this.xC = 676, this.aFe = 1024, this.xE = this.emojis.indexOf("💀"), this.aIG = this.xE + 1, this.xD = this.emojis.indexOf("🥇"), this.aIH = this.emojis.indexOf("😊"), this.aFo = function(aL) {
		return aL < this.xC ? String.fromCharCode(55356, 56806 + ny.nz(aL, 26), 55356, 56806 + aL % 26) : this.emojis[Math.min(aL - this.xC, this.aFf - 1)]
	}, this.aFg = function(bV) {
		var aF = bV.length - 2,
			bZ = [];
		for (let a6 = 0; a6 < aF; a6++) {
			var iJ = bV.charCodeAt(a6) - 56806,
				iK = bV.charCodeAt(a6 + 2) - 56806;
			0 <= iJ && iJ < 26 && 0 <= iK && iK < 26 && (bZ.push(26 * iJ + iK), a6 += 3)
		}
		return bZ
	}, this.aGx = function(aL) {
		return aL < this.xC
	}, this.aHI = function(aL) {
		return aL >= 1024 - this.xF
	}, this.aHG = function(aL) {
		return aL >= this.xC && aL < this.xC + this.aIG
	}
}

function a0M() {
	this.aFn = function(vY, player) {
		f6.a4G(df.du, player, vY), c8.c9.a1Y(vY, player)
	}, this.a8t = function(player) {
		f6.a9A(player, 0), c8.c9.a1b(player)
	}, this.aII = function(aIJ, player) {
		f6.a9B(aIJ, player), c8.c9.a1c(aIJ, player)
	}, this.ew = function() {
		df.iP || df.dp || c8.aFu.ew()
	}
}

function aEJ() {
	var a9Y, aIK, aIL, aIM, c2 = !1;

	function aIN() {
		c2 = !0, a9Y = -1, aIK = new Array(4);
		for (var a6 = 3; 0 <= a6; a6--) aIK[a6] = !1;
		var aIO = Math.floor(1 + .02 * ay.min);
		aIL = new Array(4), (aIM = new Array(4))[1] = aIM[3] = aIL[0] = aIL[2] = 0, aIM[0] = aIL[3] = -aIO, aIL[1] = aIM[2] = aIO
	}

	function aIP() {
		if (-1 !== a9Y)
			if (0 !== df.gP && fT.ag()) {
				for (var aIQ = !1, a6 = 3; 0 <= a6; a6--) aIK[a6] && (aIQ = !0, f8 += aIL[a6], f9 += aIM[a6], fZ.fU(aIL[a6], aIM[a6]), cx.fa());
				aIQ ? bA.bE = !0 : kR.aIR()
			} else kR.aIR()
	}
	this.kS = function(aQ) {
		0 !== df.gP && fT.ag() && (c2 || aIN(), aIK[aQ] = !0, -1 === a9Y) && (a9Y = setInterval(aIP, 20), aIP())
	}, this.kW = function(aQ) {
		if (0 !== df.gP && (c2 || aIN(), aIK[aQ] = !1, -1 !== a9Y)) {
			for (var aIQ = !1, a6 = 3; 0 <= a6; a6--) aIQ = aIQ || aIK[a6];
			aIQ || this.aIR()
		}
	}, this.aIR = function() {
		if (c2 && -1 !== a9Y) {
			for (var a6 = 3; 0 <= a6; a6--) aIK[a6] = !1;
			clearInterval(a9Y), a9Y = -1
		}
	}
}

function aEO() {
	this.size = 0, this.aQ = 0, this.bg = null, this.m = function(bg) {
		this.aQ = 0, this.bg = bg, this.size = bg.length
	}, this.m7 = function() {
		this.bg = null
	}, this.dB = function(size) {
		for (var aL = 0, bg = this.bg, ag = this.aQ + size - 1, a6 = this.aQ; a6 <= ag; a6++) aL |= (bg[a6 >> 3] >> 7 - (7 & a6) & 1) << ag - a6;
		return this.aQ += size, this.aQ > 8 * this.size && console.log("error unwrapper"), aL
	}, this.dI = function(size) {
		var iV = size >> 1;
		return (1 << iV) * this.dB(size - iV) + this.dB(iV)
	}, this.aIS = function(size) {
		for (var bZ = new Array(size), a6 = 0; a6 < size; a6++) bZ[a6] = this.dB(10);
		return c0.hp(bZ)
	}, this.dH = function(aIT) {
		return this.size === bc.dD(aIT)
	}
}

function qD() {
	var bV;
	10 === y.z ? bV =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === y.z ? bV =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === y.z ? bV =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === y.z ? bV =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === y.z ? bV =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === y.z ? bV =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === y.z ? bV =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === y.z ? bV =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === y.z ? bV =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === y.z && (bV =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new sG).hp(bV)
}

function aEW() {
	this.id = new aFs, this.m = function() {
		this.id.m()
	}
}

function aIC() {
	this.uO = function() {
		aZ.d6.zf(), aZ.d6.zg(), c8.d4.close(0, 3255), 0 === av.id ? av.t6 && av.t6.clear() : 1 === av.id ? av.t7.saveString(199, "") : 2 === av.id && av.t9.postMessage("clear")
	}, this.u3 = function() {
		2 === av.id ? av.t9.postMessage("showConsentForm") : 1 === av.id ? av.t7.setState(7) : hn.ho.showCMPScreen()
	}, this.u8 = function() {
		this.setState(14)
	}, this.aIU = function() {
		var bV = aZ.af.ad(101),
			max = ("string" != typeof(bV = "" === bV ? function() {
				{
					if (2 === av.id) return av.t8.password;
					if (1 === av.id) return 12 <= av.aa ? av.t7.loadString(22) : ""
				}
				return uq.up(9)
			}() : bV) && (bV = ""), Math.floor(Math.pow(2, 48))),
			aIW = Math.floor(parseInt(c0.ut(bV)));
		return 0 < aIW && aIW < max ? aZ.af.aY(101, bV) : (aIW = Math.floor(1 + (max - 1) * Math.random()), aZ.af.aY(101, bV)), aIW
	}, this.ax = function() {
		return 1 === aZ.af.ac(2)
	}, this.aIX = function() {
		aZ.af.aY(102, "")
	}, this.setState = function(ly) {
		1 === av.id && 5 <= av.aa && av.t7.setState(ly)
	}, this.lz = function() {
		var aHa;
		1 === av.id && 7 <= av.aa ? av.t7.setState(5) : ((aHa = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = aHa.toString())
	}, this.aEZ = function() {
		1 !== av.id || av.aa < 17 || av.t7.saveString(23, document.documentElement.outerHTML)
	}, this.mn = function() {
		0 === av.id ? hn.ho.m() : 1 === av.id ? av.t7.prepareAd("1688441405") : 2 === av.id && (0 === av.aa ? av.t9.postMessage("prepare ad 4500876070") : av.t9.postMessage("loadAds 4500876070"))
	}, this.aHY = function(eu) {
		return 0 === av.id ? !!hn.ho.aAo() : 1 === av.id ? 12 <= av.aa && (av.t7.presentAd(eu), !0) : 2 === av.id && (0 === av.aa ? av.t9.postMessage("show ad " + eu) : av.t9.postMessage("showAd"), !0)
	}, this.aEb = function() {
		2 === av.id && av.aa < 23 && g.g2(4, 1, new lv("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + uC.uE + "' target='_blank'>" +
			uC.uE + "</a>", !0, [new d("❌ " + e.f[92], function() {
				g.g2(0)
			}, i.j)]))
	}
}

function aEC() {
	var bZ, a78, aIY, aIZ, gap, aIa, aIb, aIc, aId, aIe, fw, aIf, dj, a63, oN, a9Y, aIg, aIh;

	function aIj() {
		aIZ = Math.floor(.2 * (av.aw.ax() ? .07 : .035) * ay.az), aIZ = b1(av.aw.ax() ? 3 : 1, aIZ);
		var aIl = ay.ak / (bZ.length + gap);
		aIZ = aIZ < aIl ? aIl : aIZ, oN = Math.floor((1 - gap) * aIZ), a78 = 0, aIm()
	}

	function aIm() {
		a78 = (a78 = a78 < -20 ? -20 : a78) > (bZ.length - 15) * aIZ ? (bZ.length - 15) * aIZ : a78, aIb = Math.floor(a78 / aIZ), aIc = (aIc = aIb + Math.floor(ay.ak / aIZ)) > bZ.length - 1 ? bZ.length - 1 : aIc, aIb = (aIb = aIc < aIb ? aIc : aIb) <
			0 ? 0 : aIb;
		var mb = aIc;
		aIa = aIY / bZ[mb];
		for (var a6 = aIc - 1; aIb <= a6; a6--) bZ[a6] > bZ[mb] && (mb = a6, aIa = aIY / Math.pow(bZ[a6], a63))
	}

	function aIo(a7) {
		a7 = Math.floor((a78 + ay.ak - a7 - gap * aIZ) / aIZ);
		return (a7 = a7 < -1 ? -1 : -1 === a7 ? 0 : a7 > bZ.length - 1 ? -1 : a7) !== aId && (aId = a7, -1 === a9Y && 0 === aId && kG.aGE && (a9Y = setInterval(aIp, 100)), 1)
	}

	function aIq(a6) {
		var y3 = Math.floor(aIa * Math.pow(bZ[a6], a63));
		bI.fillRect(a78 + ay.ak - (a6 + 1) * aIZ, ay.al - y3, oN, y3)
	}

	function aIp() {
		var dY;
		0 !== (aId = 8 === cM.cN() ? -1 : aId) ? (aIg = (new Date).getTime(), clearInterval(a9Y), a9Y = -1) : (dY = bZ[1] / 864e3, -1 !== aIg && (dY += ((new Date).getTime() - aIg) * bZ[1] / 864e5, aIg = -1), 0 < dY && (bZ[0] += Math.floor(dY), bA
			.bE = !0))
	}
	this.aGE = !1, this.m = function() {
		aIg = a9Y = -1, aId = -(a63 = 1), this.a2X = !1, dj = 0, aIf = new Date, a78 = 0, gap = .3, (aIh = []).push({
			il: "Plateau A",
			aF: 0,
			cY: 57
		}), aIh.push({
			il: "Max A",
			aF: 1,
			cY: 1
		}), aIh.push({
			il: "Black Friday",
			aF: 15,
			cY: 15
		}), aIh.push({
			il: "Max B",
			aF: 19,
			cY: 19
		}), aIh.push({
			il: "Max C",
			aF: 44,
			cY: 44
		}), aIh.push({
			il: "First Android Version",
			aF: 58,
			cY: 58
		}), aIh.push({
			il: "Max D",
			aF: 67,
			cY: 67
		}), aIh.push({
			il: "The iFrame Explosion",
			aF: 98,
			cY: 99
		}), aIh.push({
			il: "The 155-Day Uptrend",
			aF: 58,
			cY: 213
		}), aIh.push({
			il: "Max E",
			aF: 213,
			cY: 213
		}), aIh.push({
			il: "Plateau B",
			aF: 214,
			cY: 259
		}), aIh.push({
			il: "Turbulent Times",
			aF: 260,
			cY: 344
		}), aIh.push({
			il: "Max F",
			aF: 262,
			cY: 262
		}), aIh.push({
			il: "Max G",
			aF: 282,
			cY: 282
		}), aIh.push({
			il: "Max H",
			aF: 333,
			cY: 333
		}), aIh.push({
			il: "The 19-Day Downtrend",
			aF: 283,
			cY: 301
		}), aIh.push({
			il: "Plateau C",
			aF: 345,
			cY: 385
		}), aIh.push({
			il: "The Alliance Ascent",
			aF: 386,
			cY: 395
		}), aIh.push({
			il: "Max I",
			aF: 395,
			cY: 395
		}), aIh.push({
			il: "First iOS Version",
			aF: 411,
			cY: 411
		}), aIh.push({
			il: "Plateau D",
			aF: 396,
			cY: 453
		}), aIh.push({
			il: "The TikTok Revolution",
			aF: 454,
			cY: 470
		}), aIh.push({
			il: "Max J",
			aF: 456,
			cY: 456
		}), aIh.push({
			il: "Max K",
			aF: 472,
			cY: 472
		}), aIh.push({
			il: "Max L",
			aF: 478,
			cY: 478
		}), aIh.push({
			il: "YT Drew",
			aF: 471,
			cY: 485
		}), aIh.push({
			il: "Plateau E",
			aF: 485,
			cY: 600
		}), aIh.push({
			il: "Uptrend A",
			aF: 600,
			cY: 613
		}), aIh.push({
			il: "Max M",
			aF: 613,
			cY: 613
		}), aIh.push({
			il: "Downtrend A",
			aF: 614,
			cY: 635
		}), aIh.push({
			il: "Plateau F",
			aF: 636,
			cY: 737
		}), aIh.push({
			il: "End of Record",
			aF: 738,
			cY: 738
		}), bZ = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
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
		aIY = Math.floor(.15 * ay.al), aIe = (aIe = Math.floor((av.aw.ax() ? .018 : .0137) * ay.az)) < 2 ? 2 : aIe, fw = q.r.ft(1, aIe), aIj()
	}, this.aHy = function(aIk) {
		var a6;
		for (this.aGE = !0, a6 = 0; a6 < aIk.length; a6++) bZ.unshift(aIk[a6]);
		aIj(), bA.bE = !0
	}, this.a2Z = function() {
		aIm()
	}, this.fU = function(a7, a8) {
		a8 > ay.al - .6 * aIY ? this.a2X ? a7 !== dj && (a78 += a7 - dj, dj = a7, aIm(), aIo(a7), this.a2X = -1 !== aId, bA.bE = !0) : aIo(a7) && (bA.bE = !0) : this.kH()
	}, this.kH = function() {
		-1 !== aId && (this.a2X = !1, aId = -1, bA.bE = !0)
	}, this.fS = function(a7, deltaY) {
		-1 !== aId && (a78 += Math.floor(deltaY), aIm(), aIo(a7), bA.bE = !0)
	}, this.bF = function(a7, a8) {
		this.fU(a7, a8), -1 !== aId && (dj = a7, this.a2X = !0)
	}, this.kI = function() {
		-1 !== aId && (this.a2X = !1)
	}, this.bH = function() {
		bI.fillStyle = i.a64;
		for (var aIs, month, eu, gy, aIv, aIw, hP, aIx, aIy, a6 = aIc; aIb <= a6; a6--) aIq(a6);
		this.aGE && 0 === aIb && (bI.fillStyle = i.a2o, aIq(0)), -1 !== aId && (bI.fillStyle = i.xu, aIq(aId)), -1 !== aId && (bI.font = fw, q.r.textBaseline(bI, 2), (eu = new Date).setTime(aIf.getTime() - 1e3 * aId * 60 * 60 * 24), month =
			"month", aIs = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(eu), aIs = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(eu)), aIs = aIs + ", " + eu.getUTCDate() + " " + month + " " + eu.getFullYear(), month = 1 === bZ[aId] ? " second played" : " seconds played", month = q.cg.hX(bZ[aId]) + month, eu = Math.floor(bI.measureText(aIs).width),
			gy = Math.floor(bI.measureText(month).width), aIv = Math.floor(.5 * (eu + aIe)), aIw = (aIw = a78 + ay.ak - (aId + 1) * aIZ) < aIv ? aIv : aIw > ay.ak - aIv ? ay.ak - aIv : aIw, hP = ay.al - Math.floor(aIa * Math.pow(bZ[aId],
				a63)), aIx = Math.floor(1.1 * aIe), aIy = hP > ay.al - aIx ? ay.al - aIx : hP, bI.fillStyle = i.bL, bI.fillRect(ay.ak - gy - aIe, aIy - aIx, gy + aIe, aIx), bI.fillRect(aIw - aIv, ay.al - aIx, eu + aIe, aIx), bI.fillStyle = i
			.bM, q.r.textAlign(bI, 2), bI.fillText(month, Math.floor(ay.ak - .5 * aIe), aIy),
			function(hP, aIx) {
				for (var gx, iY = -1, aQ = bZ.length - aId - 1, a6 = aIh.length - 1; 0 <= a6; a6--) aQ >= aIh[a6].aF && aQ <= aIh[a6].cY && (-1 === iY || aIh[a6].cY - aIh[a6].aF < aIh[iY].cY - aIh[iY].aF) && (iY = a6); - 1 !== iY && (gx =
					Math.floor(bI.measureText(aIh[iY].il).width), bI.fillStyle = i.bL, bI.fillRect(ay.ak - gx - aIe, hP, gx + aIe, aIx), bI.fillStyle = i.bM, bI.fillText(aIh[iY].il, Math.floor(ay.ak - .5 * aIe), hP + aIx))
			}(aIy - 2 * aIx, aIx), q.r.textAlign(bI, 1), bI.fillText(aIs, aIw, ay.al), bI.strokeStyle = i.a6Z, bI.lineWidth = 1, bI.beginPath(), bI.moveTo(0, hP), bI.lineTo(ay.ak, hP), bI.closePath(), bI.stroke())
	}
}

function g3(id, zF) {
	let k, l;

	function aJ2() {
		l.aHp.innerHTML += "<br>New Connection..."
	}
	this.aJ0 = !0, this.show = function() {
		k.show(), this.resize(), 15 === id ? c8.d4.c4(0, id) ? this.aJ1() : aJ2() : 16 === id ? c8.d4.c4(0, id) ? c8.cJ.lb(2) : aJ2() : 17 === id ? c8.d4.c4(0, id) ? c8.cJ.lb(3) : aJ2() : 18 === id ? (c8.d4.close(0, 3253), c8.d4.c4(0, id),
		aJ2()) : 20 === id ? c8.d4.c4(0, id) ? c8.aFt.aCu(zF) : aJ2() : 21 === id ? c8.d4.c4(0, id) ? c8.aFv.aCE(zF.g4, zF.g5, zF.g6) : aJ2() : 22 === id ? c8.d4.c4(0, id) ? c8.aFv.aCF(zF.g4, zF.aCG, zF.aCH) : aJ2() : 23 === id ? c8.d4.c4(0,
			id) ? c8.aFv.aCI(zF.aCJ, zF.i7) : aJ2() : 24 === id && (c8.d4.c4(0, id) ? c8.aFv.aCK(zF.aCJ, zF.g5, zF.g6) : aJ2())
	}, this.aGF = function() {
		15 === id ? this.aJ1() : 16 === id ? c8.cJ.lb(2) : 17 === id ? c8.cJ.lb(3) : 18 === id ? g.g2(8, this.cC, new g3(16)) : 20 === id ? c8.aFt.aCu(zF) : 21 === id ? c8.aFv.aCE(zF.g4, zF.g5, zF.g6) : 22 === id ? c8.aFv.aCF(zF.g4, zF.aCG, zF
			.aCH) : 23 === id ? c8.aFv.aCI(zF.aCJ, zF.i7) : 24 === id && c8.aFv.aCK(zF.aCJ, zF.g5, zF.g6)
	}, this.dO = function(code, a0c = !1, data) {
		if (a0c || code === id)
			if (15 === code) g.g2(7, this.cC);
			else if (16 === code) g.g2(7, this.cC);
		else if (17 === code)
			if (c8.d4.close(0, 3252), aZ.d4.s2(0), 0 < aZ.af.data[117].aW.length) {
				let data = aZ.d4.s3(0);
				aZ.d6.aX(105, data.s4), aZ.d6.aX(106, data.password), g.g2(8, this.cC, new g3(16))
			} else aZ.d6.aX(105, ""), g.d4.u4();
		else 20 === code ? g.g2(7, this.cC) : 21 === code ? g.g2(10, 0, new ku(data)) : 23 === code && g.g2(13, 0, new aJ3({
			data: data,
			aEq: zF.aEq,
			aCJ: zF.aCJ,
			bB: new Date
		}))
	}, this.aJ1 = function() {
		bc.bd(48), bc.bh(24, Math.floor(ny.pow(24) * Math.random())), bc.bh(24, Math.floor(ny.pow(24) * Math.random())), bf.m(bc.bg), aZ.d6.aX(110, d7.d8.d9(d7.d8.dA(8))), c8.aFt.aCt()
	}, this.s = function() {
		k.s()
	}, this.resize = function() {
		k.resize(), l.resize()
	}, this.t = function(u) {
		2 === u && k.v[0].w()
	}, k = new n("⏳ Connecting...", [new d("❌ " + e.f[92], function() {
		g.d4.u4()
	})]), l = new o(k.p, "Find Server...")
}

function aE9() {
	var pZ, aJ4, aJ5, pY, aJ6, aJ7, aJ8, aJ9, aJA, aJB, aJC, ar, aJD, aJE = !1,
		aJF = !1;

	function aJG(a7j) {
		ar = bA.bB, aJ5 = pY = aJ4 = 0, aJ6 = (aJD = 33) / a7j, pZ = 1 / (a7j / aJD / 4), aJ7 = (ay.ak / 2 + f8) / cz, aJ8 = (ay.al / 2 + f9) / cz, aJ9 = cz
	}

	function aJL(aJM) {
		Math.abs(Math.log(aJC / aJ9)) < .125 && (aJC = aJM * aJ9)
	}

	function aJK(bK, hP, hQ, hR) {
		aJA = (bK + hQ + 1) / 2, aJB = (hP + hR + 1) / 2;
		hQ = ay.ak / (hQ - bK + 1), bK = ay.al / (hR - hP + 1);
		aJC = .9 * (hQ < bK ? hQ : bK)
	}
	this.a9i = function() {
		return aJE
	}, this.a6P = function() {
		aJG(1), this.a4U(0, 0, y.aB - 1, y.aC - 1), df.e7 || df.dp || this.a8u(df.du, 3e3, !0, .3)
	}, this.a8u = function(player, a7j, aJH, zoom) {
		df.fR || aJE && !aJH && aJF || 0 === dV.ev[player] || (cx.fF = !1, aJF = aJH, aJG(a7j), function(player) {
			aJA = (dV.nu[player] + dV.nw[player] + 1) / 2, aJB = (dV.nv[player] + dV.nx[player] + 1) / 2
		}(player), function(zoom, player) {
			var fX = dV.nw[player] - dV.nu[player] + 1,
				player = dV.nx[player] - dV.nv[player] + 1,
				hC = ay.ak / fX,
				iV = ay.al / player,
				hC = (aJC = hC < iV ? hC : iV, 0 !== zoom ? zoom : fX < 20 && player < 20 ? .5 : .9);
			aJC *= hC, aJL(7 / 8)
		}(zoom, player), aJE = !0, kR.aIR())
	}, this.a97 = function(a7j) {
		df.dp || df.fR || (cx.fF = !1, aJF = !1, aJG(a7j), aJK(0, 0, y.aB - 1, y.aC - 1), aJL(7 / 8), aJE = !0, kR.aIR())
	}, this.a4U = function(bK, hP, hQ, hR) {
		aJK(bK, hP, hQ, hR), cz = aJC, cx.fL(aJA, ay.ak / 2), cx.fO(aJB, ay.al / 2), fl.cw()
	}, this.ag = function() {
		return !(aJE && aJF || (aJE = !1))
	}, this.bD = function() {
		var aJP, aJQ, ia, aJT;
		aJE && (aJ4 < .5 ? pY < aJ6 && (pY += aJ6 * pZ, aJ5 = aJ4) : 1 - aJ5 < aJ4 && (pY = (pY -= aJ6 * pZ) < aJ6 * pZ ? aJ6 * pZ : pY), ar = ar >= bA.bB ? bA.bB - 1 : ar, ia = bA.bB - ar, aJ4 = 1e3 < ia || 1 < (aJ4 += pY * ia / aJD) ? 1 : aJ4,
			ar = bA.bB, ia = cz, aJP = f8, aJQ = f9, ia = (cz = aJ9 * Math.pow(aJC / aJ9, aJ4)) / ia, aJT = 1 - (aJ9 * Math.pow(aJC / aJ9, 1 - aJ4) - aJ9) / (aJC - aJ9), cx.fL(aJ7 + aJT * (aJA - aJ7), ay.ak / 2), cx.fO(aJ8 + aJT * (aJB -
				aJ8), ay.al / 2), fZ.zoom(ia, (aJP * ia - f8) / (1 - ia), (aJQ * ia - f9) / (1 - ia)), fl.cw(), 1 <= aJ4 && (aJE = !1, d0.aBm = !0), bA.bE = !0)
	}
}

function aEN() {
	this.size = 0, this.aQ = 0, this.bg = null, this.m = function(bg) {
		this.aQ = 0, this.bg = bg, this.size = bg.length
	}, this.bd = function(aIT) {
		return this.m(new Uint8Array(this.dD(aIT))), this.bg
	}, this.m7 = function() {
		this.bg = null
	}, this.bh = function(size, a5c) {
		for (var bg = this.bg, ag = this.aQ + size - 1, a6 = this.aQ; a6 <= ag; a6++) bg[a6 >> 3] |= (a5c >> ag - a6 & 1) << 7 - (7 & a6);
		this.aQ += size, this.aQ > 8 * this.size && console.log("error wrapper")
	}, this.aJU = function(size, a5c) {
		var iV = size >> 1,
			ia = 1 << iV;
		this.bh(size - iV, ny.nz(a5c, ia)), this.bh(iV, a5c % ia)
	}, this.aJV = function(size) {
		for (var bg = this.bg, ag = this.aQ + size, a6 = this.aQ; a6 < ag; a6++) bg[a6 >> 3] &= 255 ^ 128 >>> (7 & a6)
	}, this.dD = function(aIT) {
		return aIT + 7 >> 3
	}, this.aJW = function(bZ, hH, ag, aJX) {
		for (var a6 = hH; a6 < ag; a6++) this.bh(aJX, bZ[a6])
	}
}

function aE7() {
	var su, aJY;

	function aJZ() {
		var ak = new aEN;
		ak.bd(1612), ak.bh(1, 0), ak.bh(6, 7), ak.bh(2, av ? av.id : 3), ak.bh(1, lj ? 1 : 0), ak.bh(1, lk ? 1 : 0), ak.bh(1, lh ? lh.a4q : 0);
		for (let a6 = 0; a6 < aJY.length && a6 < 100; a6++) ak.bh(16, aJY.charCodeAt(a6));
		su.send(ak.bg), aJa()
	}

	function aJa() {
		su && (su.onclose = null, su.onopen = null, su = null)
	}
	window.addEventListener("error", function error(cY) {
		window.removeEventListener("error", error);
		return alert("Error:\n" + cY.filename + " " + cY.lineno + " " + cY.colno + " " + cY.message);
		window.removeEventListener("error", error), aJY = cY.lineno + " " + cY.colno + " " + cY.message, (su = new WebSocket("wss://territorial.io/s52/")).onopen = aJZ, su.onclose = function() {
			aJa()
		}, 0 === cY.lineno && 0 === cY.colno || (av && 1 === av.id ? av.t7.showToast(aJY) : alert(aJY))
	})
}

function aDC() {
	aJb() ? (aJc(), a17 !== df.eM && aJd()) : aD9()
}

function aJd() {
	a16(), a18(dV.ql[a17]), a18(dV.nb[a17]), a19(dV.qk[a17]), a1A(dV.nb[a17]), a1A(dV.qm[a17]), a1B(), a1F()
}

function aJc() {
	aD2 = !0, hU.a01(a0x, aCv, aCw), dV.ev[a0x] += a0v, a0u(), aJe()
}

function aJb() {
	return (a17 === df.eM ? aJf : aJg)()
}

function aJg() {
	var aJh = a0v * df.vK,
		aJi = aJj(),
		aJk = aJl(),
		aJi = aJh + 2 * aJi + aJk,
		aJn = aCx * a0v;
	return aJi < aJn ? (aCw -= aJi, aJo(aJi - aJh, aJk), !0) : (aCw -= aJn, aJo(aJn - aJh, aJk), !1)
}

function aJo(aJn, aJk) {
	if (0 < aJk) {
		if (!(aJk <= aJn)) return hU.a7v(a17, a0x, aJk - aJn), void(aJn = 0);
		hU.a7v(a17, a0x, 0), aJn -= aJk
	}
	aJn = aR(aJn, 2), dV.l5[a17] >= aJn ? dV.l5[a17] -= aJn : dV.l5[a17] = 0
}

function aJl() {
	return hU.a7u(a17, a0x)
}

function aJj() {
	return ny.nz(a0v * dV.l5[a17], 1 + ny.nz(10 * dV.ev[a17], 16))
}

function aJf() {
	return aCw -= a0v * df.vK, !0
}

function aJe() {
	for (var a6 = a0v - 1; 0 <= a6; a6--) dV.qk[a0x].push(a0w[a6]), dV.ql[a0x].push(a0w[a6]), dZ.a1E(a0w[a6], a0x)
}

function aEV() {
	this.oJ = function() {
		return 2 === av.id ? 4 : av.aw.ax() ? 2 : 1
	}
}

function aES() {
	var aJp = !1,
		iq = 0,
		ak = 0,
		gx = 0,
		gap = 0,
		aq = null,
		bJ = null,
		aAv = null;

	function aJr() {
		for (var xI, aJv = 0, aF = 0, u = Math.floor(ak / 2), kQ = Math.floor(gx / 2), xH = 1.5 * Math.PI, a6 = df.ii; 0 <= a6; a6--) aF += aAv[a6], 0 === aAv[a6] && aJv++;
		if (aJp = !1, bJ.clearRect(0, 0, ak, ak), bJ.fillStyle = i.bL, bJ.fillRect(0, 0, ak, ak), bJ.fillStyle = i.bM, bJ.fillRect(0, 0, ak, gap), bJ.fillRect(0, 0, gap, ak), bJ.fillRect(ak - gap, 0, gap, ak), bJ.fillRect(0, ak - gap, ak, gap), 0 <
			aF)
			if (aJv === df.ii) {
				for (a6 = df.ii; 0 <= a6; a6--)
					if (0 < aAv[a6]) {
						! function(a6, u, kQ) {
							bJ.fillStyle = lV.hw[lV.i5[a6]], bJ.beginPath(), bJ.arc(u, u, kQ, 0, 2 * Math.PI), bJ.fill()
						}(a6, u, kQ);
						break
					}!
				function(u) {
					var fontSize = u / 3;
					bJ.font = q.r.ft(1, fontSize), bJ.fillStyle = i.bM, bJ.fillText("100%", u, u + .1 * fontSize)
				}(u)
			} else {
				for (a6 = 0; a6 <= df.ii; a6++) 0 < aAv[a6] && (! function(a6, u, kQ, xH, xI) {
					bJ.fillStyle = lV.hw[lV.i5[a6]], bJ.beginPath(), bJ.arc(u, u, kQ, xH, xI), bJ.lineTo(u, u), bJ.fill()
				}(a6, u, kQ, xH, xI = xH + 2 * Math.PI * aAv[a6] / aF), function(u, kQ, xH, xI) {
					var aL = (xI - xH) / (2 * Math.PI),
						fontSize = +kQ * Math.min(aL, .37);
					fontSize < 8 || (xH = (xH + xI) / 2, xI = Math.floor(100 * aL + .5) + "%", kQ *= .525 - Math.max(.6 * (aL - .7), 0), bJ.font = q.r.ft(1, fontSize), bJ.fillStyle = i.bM, bJ.fillText(xI, u + Math.cos(xH) * kQ, u + Math.cos(
						xH + 1.5 * Math.PI) * kQ))
				}(u, kQ, xH, xI), 0 !== a6 && xK(u, kQ, xH), xH = xI);
				xK(u, kQ, 1.5 * Math.PI)
			}!
		function(u, kQ) {
			bJ.beginPath(), bJ.arc(u, u, kQ, 0, 2 * Math.PI), bJ.stroke()
		}(u, kQ)
	}

	function xK(u, kQ, xM) {
		bJ.beginPath(), bJ.moveTo(u, u), bJ.lineTo(u + Math.cos(xM) * kQ, u + Math.cos(xM + 1.5 * Math.PI) * kQ), bJ.stroke()
	}
	this.m = function() {
		if (df.iA) {
			var a6;
			for (iq = 0, aAv = new Uint32Array(df.ii + 1), a6 = df.ii; 0 <= a6; a6--) aAv[a6] = 0;
			for (a6 = dR - 1; 0 <= a6; a6--) aAv[lV.i6[dT[a6]]] += 1;
			this.resize()
		} else aAv = bJ = aq = null
	}, this.a7l = function() {
		return ak
	}, this.resize = function() {
		df.iA && (ak = Math.floor(av.aw.ax() && !df.fR ? .18 * ay.min : .13 * ay.az), ak = (ak *= 1 + (.5 + .2 * av.aw.ax()) * df.fR) + ak % 2, gx = Math.floor(7 * ak / 8), (aq = aq || document.createElement("canvas")).width = ak, aq.height = ak,
			bJ = aq.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * ak), bJ.lineWidth = gap, bJ.strokeStyle = i.bM, q.r.textAlign(bJ, 1), q.r.textBaseline(bJ, 1), aJr())
	}, this.eq = function() {
		return aAv[this.zX()]
	}, this.aJs = function() {
		return iq = 31, this.bD(), this.zX()
	}, this.zX = function() {
		let aJt = 0;
		for (let a6 = df.ii; 0 < a6; a6--) aAv[a6] > aAv[aJt] && (aJt = a6);
		return aJt
	}, this.bD = function() {
		if (df.iA && 32 <= ++iq) {
			var a6;
			for (iq = 0, a6 = df.ii; 0 <= a6; a6--) aAv[a6] = 0;
			for (a6 = dR - 1; 0 <= a6; a6--) aAv[lV.i6[dT[a6]]] += dV.ev[dT[a6]];
			aJp = !0
		}
	}, this.fu = function() {
		df.iA && aJp && aJr()
	}, this.bH = function() {
		df.iA && (df.fR ? bI.drawImage(aq, b2.gap, b2.gap) : bI.drawImage(aq, b2.gap, a7m + 2 * b2.gap))
	}
}

function kx(zF) {
	let k, rf;
	var ri;
	this.show = function() {
		k.show(), this.resize()
	}, this.s = function() {
		k.s()
	}, this.resize = function() {
		k.resize(), rf.resize()
	}, this.t = function(u) {
		2 === u && k.v[0].w()
	}, k = new n("🛠️ List Options", [new d("❌ " + e.f[92], function() {
		g.zK(10)
	})]), rf = new rg(k.p, ((ri = []).push(function() {
		function aK3() {
			var g5 = Math.floor(aK2.cY.value),
				g6 = Math.floor(aK1.cY.value);
			return {
				aAy: Math.min(g5, g6),
				a5V: Math.max(g5, g6)
			}
		}

		function aK4() {
			var jd = ((jd = aK3()).a5V - jd.aAy + 2) / 100;
			aK0.button.innerHTML = q.cg.vB(aK0.button.innerHTML, jd)
		}
		let rq = new jS,
			aK0, aK1 = new rs(aZ.af.data[132], 1, function() {
				aK0.button.click()
			}),
			aK2 = new rs(aZ.af.data[131], 1, function() {
				aK1.cY.focus()
			});
		rq.jV("Start Index"), rq.jc(aK2), aK2.cY.style.marginBottom = "0.5em", rq.jV("End Index"), rq.jc(aK1), aK0 = new d("Go (🧈 2.01)", function() {
			var jd = aK3();
			g.g2(8, g.dN().cC, new g3(21, {
				g4: zF.g4,
				g5: jd.aAy,
				g6: jd.a5V
			}))
		});
		return aK2.cY.addEventListener("input", aK4), aK1.cY.addEventListener("input", aK4), aK4(), rq.jc(new op([aK0.button])), rq
	}()), ri.push(function() {
		function aK4() {
			var oE = (5 + Math.max(Math.abs(Math.floor(aK1.cY.value)), 1)) / 100;
			aK0.button.innerHTML = q.cg.vB(aK0.button.innerHTML, oE)
		}
		let rq = new jS,
			aK0, aK1 = new rs(aZ.af.data[134], 1, function() {
				aK0.button.click()
			}),
			aK2 = new rs(aZ.af.data[133], 0, function() {
				aK1.cY.focus()
			});
		rq.jV("Search"), rq.jc(aK2), aK2.cY.style.marginBottom = "0.5em", rq.jV("Matches"), rq.jc(aK1), aK0 = new d("Go (🧈 0.10)", function() {
			var aCG = aK2.cY.value.slice(0, 20),
				aCH = Math.abs(Math.floor(aK1.cY.value));
			g.g2(8, g.dN().cC, new g3(22, {
				g4: zF.g4,
				aCG: aCG,
				aCH: aCH
			}))
		});
		return aK1.cY.addEventListener("input", aK4), aK4(), rq.jc(new op([aK0.button])), rq
	}()), ri))
}

function a9X() {
	this.bi = function(bV) {
		var aF = bV.length,
			ak = bc;
		for (let a6 = 0; a6 < aF; a6++) ak.bh(16, bV.charCodeAt(a6))
	}
}

function aJ3(data) {
	let k, aK5, aK6, a3C, aK7, aK8, aK9, colors, aKA = 0,
		aKB = 0,
		aKC = !1,
		aKD = [1, 5, 60, 1440, 10080, 43200];

	function aKX(fb, fc) {
		! function(fb, fc) {
			return fb > aK5 && fb < aK5 + a3C && fc > aK6 && fc < aK6 + aK7
		}(aKA = fb, aKB = fc) ? (aKC && (bA.bE = !0), aKC = !1) : (aKC = !0, bA.bE = !0)
	}
	var u;
	this.show = function() {
			k.show(), this.resize()
		}, this.s = function() {
			k.s()
		}, this.resize = function() {
			k.resize();
			var u = ay.k7,
				pO = k.pI(),
				aKF = u * pO.pN,
				u = u * pO.pJ;
			aK8 = q.r.aBB(.06), aK9 = q.r.aBB(.04), aK5 = q.r.aBB(.06), aK6 = u + aK8, a3C = ay.ak - aK5 - aK9, aK7 = aKF + u - aK6 - aK9
		}, this.bH = function() {
			k.bH(),
				function() {
					let bZ = data.data,
						aKI = 1,
						aKJ = .125,
						aKK = data.aEq ? 65536 : 0;
					for (let a6 = 0; a6 < bZ.length; a6++) {
						var aDj = bZ[a6].aDj,
							il = aDj.length;
						aKI = Math.max(il, aKI);
						for (let hC = 0; hC < il; hC++) aKJ = Math.max(aDj[hC], aKJ), aKK = Math.min(aDj[hC], aKK)
					}
					var hP = aK6 + aK7,
						a7V = aK7 / (aKJ - aKK),
						a7U = 1 / (aKI - 1);
					bI.lineWidth = b2.zb;
					for (let a6 = 0; a6 < bZ.length; a6++) {
						var aDj = bZ[a6].aDj,
							il = aDj.length,
							a7 = aK5;
						bI.beginPath(), bI.moveTo(a7 + a3C, hP - a7V * (aDj[il - 1] - aKK));
						for (let hC = il - 2; 0 <= hC; hC--) bI.lineTo(a7 + a7U * hC * a3C, hP - a7V * (aDj[hC] - aKK));
						bI.strokeStyle = colors[a6], bI.stroke()
					}(function(aKK, aKJ, hP, a7V) {
						bI.font = q.r.ft(0, .25 * aK5), q.r.textBaseline(bI, 1), q.r.textAlign(bI, 2), bI.fillStyle = colors[0];
						var a7 = .92 * aK5;
						for (let a6 = 0; a6 < 3; a6++) {
							var aL = aKK + a6 * (aKJ - aKK) / 2;
							bI.fillText((aL / 1e3).toFixed(3), a7, hP - a7V * (aL - aKK))
						}
					})(aKK, aKJ, hP, a7V),
					function(aKI) {
						bI.font = q.r.ft(0, .4 * aK9), q.r.textBaseline(bI, 0), q.r.textAlign(bI, 2), bI.fillStyle = colors[0];
						var a8 = aK6 + aK7 + .15 * aK9,
							eu = (bI.fillText(q.cg.vD(data.bB), aK5 + a3C, a8), q.r.textAlign(bI, 0), new Date(data.bB));
						eu.setMinutes(eu.getMinutes() - (aKI - 1) * aKD[data.aCJ]), bI.fillText(q.cg.vD(eu), aK5, a8)
					}(aKI),
					function(aKI, aKK, aKJ) {
						if (aKC && !(aKI < 2)) {
							var aQ = (aKA - aK5) / a3C * (aKI - 1),
								aKN = Math.floor(aQ),
								aKO = Math.floor(1 + aQ),
								aKP = aQ - aKN;
							let aKQ = 1e5,
								aBr = -1,
								aKR = -1;
							var eu, aKS = aKJ - (aKJ - aKK) * (aKB - aK6) / aK7,
								bZ = data.data;
							for (let a6 = 0; a6 < bZ.length; a6++) {
								var aJ, aDj = bZ[a6].aDj;
								aDj.length <= aKO || (aDj = aDj[aKN] + aKP * (aDj[aKO] - aDj[aKN]), (aJ = Math.abs(aKS - aDj)) < aKQ && (aKQ = aJ, aBr = a6, aKR = aDj))
							} - 1 !== aBr && (aKJ = aK6 + aK7 - (aKR - aKK) / (aKJ - aKK) * aK7, bI.lineWidth = .5 * b2.zb, bI.strokeStyle = colors[aBr], bI.beginPath(), bI.moveTo(aK5, aKJ), bI.lineTo(aKA, aKJ), bI.lineTo(aKA, aK6 + aK7), bI
							.stroke(), bI.beginPath(), bI.arc(aKA, aKJ, .1 * aK5, 0, 2 * Math.PI), bI.fillStyle = colors[aBr], bI.fill(), aKK = aK6 + aK7 + .15 * aK9, q.r.textAlign(bI, 1), (eu = new Date(data.bB)).setSeconds(eu.getSeconds() -
									60 * (aKI - aQ - 1) * aKD[data.aCJ]), aKI = q.cg.vD(eu), aQ = q.r.measureText(aKI), eu = ny.oV(aKA, aK5 + .5 * aQ, aK5 + a3C - .5 * aQ), bI.fillStyle = q.color.a6X(70, 50, 20), bI.fillRect(eu - .52 * aQ, aK6 +
									aK7, 1.04 * aQ, .55 * aK9), bI.fillStyle = colors[0], bI.fillText(aKI, eu, aKK), bI.font = q.r.ft(0, .25 * aK5), q.r.textBaseline(bI, 1), q.r.textAlign(bI, 2), eu = .92 * aK5, aKI = (aKR / 1e3).toFixed(3), aQ =
								q.r.measureText(aKI), aKK = eu - 1.04 * aQ, bI.fillStyle = q.color.a6X(70, 50, 20), bI.fillRect(aKK, aKJ - .1625 * aK5, aK5 - aKK, .275 * aK5), bI.fillStyle = colors[aBr], bI.fillText(aKI, eu, aKJ))
						}
					}(aKI, aKK, aKJ)
				}(), bI.lineWidth = b2.zb, bI.strokeStyle = i.bM, bI.beginPath(), bI.moveTo(aK5, aK6), bI.lineTo(aK5, aK6 + aK7), bI.lineTo(aK5 + a3C, aK6 + aK7), bI.stroke();
			{
				let fontSize = .5 * aK8,
					bZ = (bI.font = q.r.ft(0, fontSize), q.r.textBaseline(bI, 1), q.r.textAlign(bI, 0), data.data),
					aF = bZ.length,
					a8 = aK6 - .5 * aK8,
					bV = "";
				for (let a6 = 0; a6 < aF; a6++) bZ[a6].name = bZ[a6].name, bV += bZ[a6].name + "  ";
				bV = bV.trim();
				let a5z = q.r.measureText(bV),
					a7 = .5 * (ay.ak - a5z);
				a5z > ay.ak && (a7 = 0, bI.font = q.r.ft(0, ay.ak / a5z * fontSize));
				for (let a6 = 0; a6 < aF; a6++) bI.fillStyle = colors[a6], bI.fillText(bZ[a6].name, a7, a8), a7 += q.r.measureText(bZ[a6].name + "  ")
			}
		}, this.bF = function(fb, fc) {
			aKX(fb, fc)
		}, this.fU = function(fb, fc) {
			aKX(fb, fc)
		}, this.t = function(u) {
			2 === u && k.v[0].w()
		}, k = new n("Clan Chart, " + aZ.af.data[125].aW[data.aCJ] + ", " + q.cg.vC(data.bB), [new d("❌ " + e.f[92], function() {
			g.d4.u4()
		}), new d("🛠️ Custom", function() {
			g.g2(14)
		})], !1), u = q.color, colors = [i.bM, u.a6X(255, 0, 0), u.a6X(0, 200, 0), u.a6X(80, 80, 255), u.a6X(255, 255, 0), u.a6X(255, 0, 255), u.a6X(0, 255, 255), u.a6X(255, 140, 0), u.a6X(128, 128, 128), u.a6X(0, 255, 140)], u = 6e4 * aKD[data.aCJ],
		data.bB = new Date(data.bB.getTime() + (u - data.bB.getTime() % u) - 6e4 * data.bB.getTimezoneOffset())
}

function aEL() {
	var bg, dW, aKY, aKZ;
	this.a1M = 0, this.a1N = 0, this.m = function() {
		var aq, fd;
		7 === cM.cN() && (bg = bf.bg, dW = 0, aKY = bA.bB + 4500, aKZ = c8.t4.aI2() ? 2 : 0, cM.setState(10), bI.imageSmoothingEnabled = !0, cM.gd(), aq = bN.vz("loading"), fd = (av.aw.ax() ? .396 : .25) * ay.az / aq.width, bI.setTransform(fd, 0,
			0, fd, Math.floor((ay.ak - fd * aq.width) / 2), Math.floor((ay.al - fd * aq.height) / 2)), bI.imageSmoothingEnabled = !1, bI.drawImage(aq, 0, 0), bI.setTransform(1, 0, 0, 1, 0, 0))
	}, this.aIA = function() {
		0 < aKZ && bA.bB > aKY && (aKZ--, aKY += 4500, 0 === bA.tY) && 0 === bA.bC() && (0 === aKZ && c8.d4.bt < c8.d4.bl && (c8.d4.bt += c8.d4.bm), c8.d4.c4(c8.d4.bt, 5))
	}, this.aI4 = function() {
		var dY, a6;
		return 10 === cM.cN() && (dY = bf.bg, a6 = bf.aQ, c8.t4.aHz(bg), bg = null, bf.m(dY), bf.aQ = a6, !0)
	}, this.qN = function() {
		10 === cM.cN() && 2 <= ++dW && (c8.t4.aHz(bg), bg = null)
	}
}

function aED() {
	var aKb, aKc, aKd, aKe, aKf, aKg, aKh, aKi, aKj, aKk, aKl, aKm, aKn, aKo, aKp, aKq, aKr, aKs, aKt, aKu, aKv, aKw, position, aKx, aKy, aKz, aL0, aL1 = 1,
		aGn = 1;
	var leaderboardHasChanged = true;
	this.playerPos = df.du;
	leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		leaderboardFilter.filteredLeaderboard = leaderboardFilter.playersToInclude
			.map(id => aH6[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = leaderboardFilter.filteredLeaderboard.indexOf(aH6[df.du]);
	}

	function aL3() {
		aKh.clearRect(0, 0, aKb, a7m),
			aKh.fillStyle = i.a6i,
			aKh.fillRect(0, 0, aKb, aKm),
			aKh.fillStyle = i.oQ,
			aKh.fillRect(0, aKm, aKb, a7m - aKm);
		if (leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (leaderboardFilter.enabled ?
			this.playerPos :
			aH6[df.du]
		);
		if (leaderboardFilter.hoveringOverTabs) aKw = -1;
		if (leaderboardFilter.enabled && aKw >= leaderboardFilter.filteredLeaderboard.length) aKw = -1;
		playerPos >= position && aL4(playerPos - position, i.a6d),
			0 !== aH6[df.du] && 0 === position && aL4(0, i.a6l),
			-1 !== aKw && aL4(aKw, i.a6Y),
			aKh.fillStyle = i.oQ,
			//console.log("drawing", aKw),
			aKh.clearRect(0, a7m - leaderboardFilter.tabBarOffset, aKb, leaderboardFilter.tabBarOffset);
		aKh.fillRect(0, a7m - leaderboardFilter.tabBarOffset, aKb, leaderboardFilter.tabBarOffset);
		aKh.fillStyle = i.bM,
			aKh.fillRect(0, aKm, aKb, 1),
			aKh.fillRect(0, a7m - leaderboardFilter.tabBarOffset, aKb, 1),
			leaderboardFilter.drawTabs(aKh, aKb, a7m - leaderboardFilter.tabBarOffset, i.a6d),
			aKh.fillRect(0, 0, aKb, b2.zb),
			aKh.fillRect(0, 0, b2.zb, a7m),
			aKh.fillRect(aKb - b2.zb, 0, b2.zb, a7m),
			aKh.fillRect(0, a7m - b2.zb, aKb, b2.zb), aKh.font = aKc, q.r.textBaseline(aKh, 1), q.r.textAlign(aKh, 1), aKh.fillText(e.f[65], Math.floor((aKb + aKm - 22) / 2), Math.floor(aKk + aKd / 2));
		playerList.drawButton(aKh, 12, 12, aKm - 22);
		var hC, es = playerPos < position + aKf - 1 ? 1 : 2;

		if (leaderboardFilter.enabled) {
			let result = leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aKf)
				position = (result.length > aKf ? result.length : aKf) - aKf;
			//if (position >= result.length) position = result.length - 1;
			for (aKh.font = aKe, q.r.textAlign(aKh, 0), hC = aKf - es; 0 <= hC; hC--) {
				const pos = result[hC + position];
				if (pos !== undefined)
					aL5(f4[pos]), aL6(hC, pos, f4[pos]);
			}
			for (q.r.textAlign(aKh, 2), hC = aKf - es; 0 <= hC; hC--) {
				const pos = result[hC + position];
				if (pos !== undefined)
					aL5(f4[pos]), aL7(hC, f4[pos]);
			}
		} else {
			for (aKh.font = aKe, q.r.textAlign(aKh, 0), hC = aKf - es; 0 <= hC; hC--)
				aL5(f4[hC + position]), aL6(hC, hC + position, f4[hC + position]);
			for (q.r.textAlign(aKh, 2), hC = aKf - es; 0 <= hC; hC--)
				aL5(f4[hC + position]), aL7(hC, f4[hC + position]);
		}
		2 == es && (aL5(df.du), q.r.textAlign(aKh, 0), aL6(aKf - 1, aH6[df.du], df.du), q.r.textAlign(aKh, 2), aL7(aKf - 1, df.du)), 0 === position && (es = .7 * aKn / bN.get(4).height, aKh.setTransform(es, 0, 0, es, Math.floor(aKo + .58 * aKn + .5 *
			es * bN.get(4).width), Math.floor(aKk + aKd + .4 * aKn)), aKh.imageSmoothingEnabled = !0, aKh.drawImage(bN.get(4), -Math.floor(bN.get(4).width / 2), -Math.floor(bN.get(4).height / 2)), aKh.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aL5(player) {
		df.iA && (aKh.fillStyle = lV.hx[lV.i5[lV.i6[player]]])
	}

	function aL4(a6, a3J) {
		aKh.fillStyle = a3J, a6 = aKf - 1 < a6 ? aKf - 1 : a6;
		a3J = Math.floor((a6 === aKf - 1 ? 2 : 0 === a6 ? 1.15 : 1) * aKn), a3J = a6 === aKf - 2 ? Math.floor(aKm + 9.15 * aKn) - Math.floor(aKm + 8.15 * aKn) : a3J;
		aKh.fillRect(0, Math.floor(aKm + (a6 + (0 === a6 ? 0 : .15)) * aKn), aKb, a3J)
	}

	function aL6(z3, f1, a6) {
		aKh.fillText(aKs[f1], aKo, Math.floor(aKk + aKd + (z3 + .5) * aKn)), 1 === dV.qh[a6] && (aKh.font = "italic " + aKe);
		f1 = Math.floor(aKk + aKd + (z3 + .5) * aKn);
		aKh.fillText(dV.hY[a6], aKp, f1), 0 !== dV.qh[a6] && (aKh.font = aKe), a6 < df.dg && 2 !== dV.qh[a6] || aKh.fillRect(aKp, f1 + .35 * aL1, aKr[a6], Math.max(1, .1 * aL1))
	}

	function aL7(z3, a6) {
		aKh.fillText(dV.ev[a6], aKq, Math.floor(aKk + aKd + (z3 + .5) * aKn))
	}

	function aLH(a8) {
		return (a8 -= b2.gap + aKm) < 0 ? Math.floor(a8 / aKn) - 1 : a8 < (aKf - 1) * aKn ? Math.floor(a8 / aKn) : a8 < a7m - aKm ? aKf - 1 : (a8 -= a7m - aKm, aKf + Math.floor(a8 / aKn))
	}

	function aFm(a7, a8) {
		return a7 >= b2.gap && a7 < b2.gap + aKb && a8 >= b2.gap && a8 < b2.gap + a7m
	}
	this.m = function() {
			var a6;
			for (aKy = !1, aL0 = aKz = aKx = 0, aKw = -1, aKf = av.aw.ax() ? 6 : 10, aGn = (position = 0) === (aGn = aZ.af.data[11].value) ? 10 : 1 === aGn ? 5 : 1, aKv = !1, aKt = new Uint16Array(aKf + 1), aKu = new Uint32Array(aKf + 1), aKj = df
				.eM, f4 = new Uint16Array(aKj), aH6 = new Uint16Array(aKj), a6 = aKj - 1; 0 <= a6; a6--) f4[a6] = a6, aH6[a6] = a6;
			this.resize(!0), aKr = new Uint16Array(df.eM);
			var aL2 = Math.floor(aKb - aKp - aKo - aKi);
			for (aKs = new Array(df.eM), aKh.font = aKe, a6 = df.eM - 1; 0 <= a6; a6--) aKs[a6] = a6 + 1 + ".", dV.hY[a6] = q.bJ.se(dV.ih[a6], aKe, aL2), aKr[a6] = Math.floor(aKh.measureText(dV.hY[a6]).width);
			aL3()
		}, this.resize = function(m) {
			if (a7m = av.aw.ax() ? (aKb = Math.floor(.335 * ay.az), Math.floor(aKf * aKb / 8)) : (aKb = Math.floor(.27 * ay.az), Math.floor(aKf * aKb / 10)), aKb = Math.floor(.97 * aKb), (aKg = document.createElement("canvas")).width = aKb, aKg
				.height = a7m, aKh = aKg.getContext("2d", {
					alpha: !0
				}), aKk = .025 * aKb, aKd = .16 * aKb, aKl = 0 * aKb, aKm = Math.floor(.45 * aKk + aKd), aKn = (a7m - aKd - 2 * aKk - aKl) / aKf,
				aKg.height = a7m += aKn, leaderboardFilter.tabBarOffset = Math.floor(aKn * 1.3), leaderboardFilter.verticalClickThreshold = a7m - leaderboardFilter.tabBarOffset, leaderboardFilter.windowWidth = aKb,
				aKc = q.r.ft(1, Math.floor(.55 * aKd)), aL1 = Math.floor((av.aw.ax() ? .67 : .72) * aKn), aKe = q.r.ft(0, aL1), aKh.font = aKe, aKo = Math.floor(.04 * aKb), aKp = Math.floor((av.aw.ax() ? .195 : .18) * aKb), aKi = Math.floor(aKh
					.measureText("00920600").width), aKh.font = aKc, aKq = aKb - aKo, !m) {
				aKh.font = aKe;
				for (var a6 = df.eM - 1; 0 <= a6; a6--) aKr[a6] = Math.floor(aKh.measureText(dV.hY[a6]).width);
				aL3()
			}
		}, this.a4j = function() {
			return aKb
		}, this.oK = function(a0c) {
			aKv && (a0c || bA.bC() % aGn == 0) && (aKv = !1, aL3())
		}, this.bD = function() {
			! function() {
				for (var hC = aKj - 1; 0 <= hC; hC--) 0 === dV.eg[f4[hC]] && ! function(hC) {
					var aLF = f4[hC];
					aKj--;
					for (var a6 = hC; a6 < aKj; a6++) f4[a6] = f4[a6 + 1], aH6[f4[a6]] = a6;
					f4[aKj] = aLF, aH6[f4[aKj]] = aKj
				}(hC)
			}();
			for (var aLD, ag = aKj - 1, hC = 0; hC < ag; hC++) dV.ev[f4[hC]] < dV.ev[f4[hC + 1]] && (aLD = f4[hC], f4[hC] = f4[hC + 1], f4[hC + 1] = aLD, aH6[f4[hC]] = hC, aH6[f4[hC + 1]] = hC + 1);
			! function() {
				for (var eu = aKv, es = (aKv = !0, aH6[df.du] >= aKf - 1 ? aKf - 2 : aKf - 1), a6 = es; 0 <= a6; a6--)
					if (aKt[a6] !== f4[a6] || aKu[a6] !== dV.ev[f4[a6]]) return;
				(es != aKf - 2 || aKt[aKf] === aH6[df.du] && aKu[aKf] === dV.ev[df.du]) && (aKv = eu)
			}();
			for (var a6 = aKf - 1; 0 <= a6; a6--) aKt[a6] = f4[a6], aKu[a6] = dV.ev[f4[a6]];
			aKt[aKf] = aH6[df.du], aKu[aKf] = dV.ev[df.du];
			leaderboardHasChanged = true;
		}, leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.bF = function(a7, a8) {
			return !!aFm(a7, a8) && ((utils.isPointInRectangle(a7, a8, b2.gap + 12, b2.gap + 12, aKm - 22, aKm - 22) && playerList.display(dV.ih), true) &&
				!(a8 - b2.gap > leaderboardFilter.verticalClickThreshold && leaderboardFilter.handleMouseDown(a7 - b2.gap)) && (aKx = bA.bB, aKy = !0, aKz = aL0 = aLH(a8), g0.kb() && (a7 = vf(-1, aL0, aKf), aKw !== (a7 = a7 === aKf ? -1 : a7)) &&
					(aKw = a7, aL3(), bA.bE = !0)), !0)
		}, leaderboardFilter.repaintLeaderboard = function() {
			aL3(), bA.bE = !0;
		},
		this.fU = function(a7, a8) {
			if (utils.isPointInRectangle(a7, a8, b2.gap + 12, b2.gap + 12, aKm - 22, aKm - 22)) {
				playerList.hoveringOverButton === false && (playerList.hoveringOverButton = true, aL3(), bA.bE = !0);
			} else {
				playerList.hoveringOverButton === true && (playerList.hoveringOverButton = false, aL3(), bA.bE = !0);
			}
			if (leaderboardFilter.setHovering(
					utils.isPointInRectangle(a7, a8, b2.gap, b2.gap + leaderboardFilter.verticalClickThreshold, leaderboardFilter.windowWidth, leaderboardFilter.tabBarOffset), a7 - b2.gap
				)) return;
			var eu, aLG = aLH(a8);
			return aKy ? (eu = position, (position = vf(0, position += aKz - aLG, df.eM - aKf)) !== eu && (aLG = (aLG = vf(-1, aKz = aLG, aKf)) !== aKf && aFm(a7, a8) ? aLG : -1, aKw = aLG, aL3(), bA.bE = !0), !0) : (aLG = (aLG = vf(-1, aLG,
				aKf)) === aKf || !aFm(a7, a8) || g0.kb() ? -1 : aLG, aKw !== aLG && (aKw = aLG, aL3(), bA.bE = !0))
		}, this.kI = function(a7, a8) {
			if (!aKy) return !1;
			aKy = !1;
			var aLG = aLH(a8);
			var isEmptySpace = false;
			return g0.kb() && -1 !== aKw && (aKw = -1, aL3(), bA.bE = !0), bA.bB - aKx < 350 && aL0 === aLG && -1 !== (aLG = (aLG = vf(-1, aLG, aKf)) !== aKf && aFm(a7, a8) ? aLG : -1) && (a7 = (leaderboardFilter.enabled ? (updateFilteredLb(), f4[
					leaderboardFilter.filteredLeaderboard[aLG + position] ?? (isEmptySpace = true, aH6[df.du])]) : f4[aLG + position]), aLG === aKf - 1 && (leaderboardFilter.enabled ? this.playerPos : aH6[df.du]) >=
				position + aKf - 1 && (a7 = df.du), !isEmptySpace && df.iA && donationsTracker.displayHistory(a7, dV.ih, df.iP), 0 !== dV.eg[a7] && !isEmptySpace) && fT.a8u(a7, 800, !1, 0), !0
		}, this.fS = function(a7, a8, deltaY) {
			var aLI;
			return !(aKy || df.fR || (aLI = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !aFm(a7, a8)) || (a7 = (a7 = vf(-1, aLH(a8), aKf)) === aKf || g0.kb() ? -1 : a7, 0 < deltaY ? position < df.eM - aKf && (position += Math.min(df.eM - aKf -
				position, aLI), aKw = a7, aL3(), bA.bE = !0) : 0 < position && (position -= Math.min(position, aLI), aKw = a7, aL3(), bA.bE = !0), 0))
		}, this.bH = function() {
			bI.drawImage(aKg, b2.gap, b2.gap)
		}
}

function gB() {
	this.hm = function() {
		var aDt, sI = function() {
				var a6, a1z = hk.g8.a1z,
					aF = a1z.length,
					max = 0;
				for (a6 = 0; a6 < aF; a6++) max = Math.max(max, a1z[a6]);
				return sM(Math.max(max, 1))
			}(),
			aIT = function(sI) {
				return 179 + function() {
					var a6, dS = hk.g8.gH.dS,
						aF = dS.length,
						aIT = 24 * aF;
					for (a6 = 0; a6 < aF; a6++) aIT += 16 * dS[a6].name.length;
					8 === hk.g8.gH.gF && (aIT += 14 * aF);
					return aIT
				}() + (1 === hk.g8.gH.dS.length ? 12 * hk.g8.gH.gW.length : 0) + function() {
					var a6, a1s = hk.g8.a1s,
						aF = a1s.length,
						aIT = 13 * aF,
						aLU = [22, 20, 19, 32, 32, 10, 10, 1, 0, 0];
					for (a6 = 0; a6 < aF; a6++) aIT += aLU[a1s[a6]];
					return aIT
				}() + function(sI) {
					return hk.g8.a1z.length * (1 + sI)
				}(sI)
			}(sI);
		bc.bd(aIT + (6 - aIT % 6) % 6), aDt = hk.g8.gH, bc.bh(9, a4n), bc.bh(31, bc.size), bc.aQ += 16, bc.bh(9, aDt.gI), bc.bh(14, aDt.gE), bc.bh(4, aDt.gF), bc.bh(1, aDt.gG), bc.bh(6, aDt.gJ), bc.bh(14, aDt.gK), bc.bh(10, aDt.dS.length);
		var a6, dS = hk.g8.gH.dS,
			aF = dS.length;
		for (a6 = 0; a6 < aF; a6++) bc.bh(1, dS[a6].n0), bc.bh(18, (dS[a6].iX[0] << 12) + (dS[a6].iX[1] << 6) + dS[a6].iX[2]), bc.bh(5, dS[a6].name.length), d7.dK.bi(dS[a6].name);
		if (8 === hk.g8.gH.gF)
			for (a6 = 0; a6 < aF; a6++) bc.bh(14, dS[a6].wE);
		return function() {
				var a6, aDt = hk.g8.gH;
				if (1 === aDt.dS.length)
					for (a6 = 0; a6 < aDt.gW.length; a6++) bc.bh(3, aDt.gW[a6]), bc.bh(9, aDt.gX[a6] - 1)
			}(),
			function(sI) {
				var a6, a1s = hk.g8.a1s,
					jL = hk.g8.a1t,
					jN = hk.g8.a1u,
					jP = hk.g8.a1v,
					aF = a1s.length;
				for (bc.bh(5, sI), bc.bh(30, aF), bc.bh(30, hk.g8.a1z.length), a6 = 0; a6 < aF; a6++) bc.bh(4, a1s[a6]), bc.bh(9, jL[a6]), 0 === a1s[a6] ? bc.bh(22, jN[a6]) : 1 === a1s[a6] ? (bc.bh(10, jN[a6]), bc.bh(10, jP[a6])) : 2 === a1s[
					a6] ? (bc.bh(10, jN[a6]), bc.bh(9, jP[a6])) : 3 === a1s[a6] || 4 === a1s[a6] ? (bc.bh(10, jN[a6]), bc.bh(22, jP[a6])) : 5 === a1s[a6] || 6 === a1s[a6] ? bc.bh(10, jN[a6]) : 7 === a1s[a6] && bc.bh(1, jN[a6])
			}(sI),
			function(sI) {
				var a6, a1x = hk.g8.a1x,
					a1z = hk.g8.a1z,
					aF = a1x.length;
				for (a6 = 0; a6 < aF; a6++) bc.bh(1, a1x[a6]), bc.bh(sI, a1z[a6])
			}(sI), bc.aQ !== aIT && f6.m2("Encoder Index Error: " + bc.aQ + " " + aIT), bc.aQ = 40, bc.bh(16, function() {
				var a6, dY = bc.bg,
					aF = bc.size,
					lg = 0;
				for (a6 = 7; a6 < aF; a6++) lg = lg + dY[a6] & 65535;
				return lg
			}()), bf.m(bc.bg), d7.d8.d9(d7.d8.dA(aR(aIT - 1, 6) + 1))
	}
}

function aEF() {
	var aLV, aLW, y3, oN, oC, aLX, aLY, aLZ, aLa, fw, fontSize, ar, aLb, c7, aLc = 0;

	function aLe() {
		return c8.d4.bo[(aLb + aLc) % c8.d4.bn]
	}

	function aLd() {
		aLb++, ar = bA.bB, c8.d4.c4(aLe(), 4) && (c7 = !0, c8.xZ.aF8(aLe()))
	}

	function aLf() {
		0 === aLb ? cS.cT(3249) : (aLb === c8.d4.bn - 1 && (aLb = -1), aLd())
	}

	function aLk(a8, aIZ, sr) {
		var bK = Math.floor((ay.ak - oN) / 2) + aLY,
			hQ = bK + Math.floor(sr * (oN - 2 * aLY));
		bI.lineWidth = aIZ, bI.beginPath(), bI.moveTo(bK, a8), bI.lineTo(hQ, a8), bI.lineTo(Math.floor(bK - aLY + sr * oN), a8 + y3), bI.lineTo(bK - aLY, a8 + y3), bI.closePath()
	}
	this.m = function() {
		cM.setState(6), aLV = 0, aLW = 1, aLZ = "rgba(0,220,120,0.4)", aLa = "rgba(0,0,0,0.8)", this.resize(), bA.bE = !0, aLb = 0, c7 = !1, aLd()
	}, this.resize = function() {
		oN = Math.floor((av.aw.ax() ? .5 : .25) * ay.az), oC = oN + 12, y3 = Math.floor(.125 * oN), aLY = 3 * y3, aLX = Math.floor(.225 * oN), fontSize = Math.floor(.3 * y3), fw = q.r.ft(0, fontSize)
	}, this.aEp = function(hC) {
		aLc = hC
	}, this.m1 = function(cB) {
		cB === aLe() && (c7 = !1, aLf())
	}, this.aLg = function(cB) {
		6 !== cM.cN() || c7 || (ar = bA.bB, c7 = !0)
	}, this.bF = function(a7, a8) {
		var bK = Math.floor((ay.ak - oC) / 2),
			hP = Math.floor(.5 * (ay.al - b2.gap - y3 - aLX)) + y3 + b2.gap;
		return bK < a7 && a7 < bK + oC && hP < a8 && a8 < hP + aLX && (this.kh(), xX.fU(a7, a8, !1), !0)
	}, this.kh = function() {
		c8.d4.cU(3260), g.d4.m6()
	}, this.bD = function() {
		6 === cM.cN() && (c7 ? bA.bB > ar + 12e3 && cS.cT(3250) : bA.bB > ar + 12e3 && aLf(), 100 < (aLV += .07 * aLW * (aLV < 16 ? 5 + aLV : 84 < aLV ? 105 - aLV : 17)) ? (aLV = 100, aLW = -1) : aLV < 0 && (aLV = 0, aLW = 1), aLZ = "rgba(0," +
			Math.floor(190 - 1.9 * aLV) + "," + Math.floor(120 - 1.2 * aLV) + "," + (.4 + .004 * aLV) + ")", aLa = "rgba(0," + Math.floor(1.9 * aLV) + "," + Math.floor(1.2 * aLV) + "," + (.8 - .004 * aLV) + ")", bA.bE = !0)
	}, this.bH = function() {
		var a7 = Math.floor((ay.ak - oC) / 2),
			a8 = Math.floor(.5 * (ay.al - b2.gap - y3 - aLX));
		! function(title, a8, aIZ, sr) {
			bI.fillStyle = aLa, aLk(a8, aIZ, 1), bI.fill(), bI.fillStyle = aLZ, aLk(a8, aIZ, sr), bI.fill(), bI.strokeStyle = i.bM, aLk(a8, aIZ, 1), bI.stroke(),
				function(aLm, a8) {
					q.r.textAlign(bI, 1), q.r.textBaseline(bI, 1), bI.font = fw, bI.fillStyle = i.bM, bI.fillText(aLm, Math.floor(.5 * ay.ak), Math.floor(a8 + .58 * y3))
				}(title, a8)
		}("Loading", a8, 3, aLV / 100),
		function(a7, a8, ak, al, f) {
			bI.fillStyle = i.xe, bI.fillRect(a7, a8, ak, al), bI.lineWidth = 3, bI.strokeStyle = i.bM, bI.strokeRect(a7, a8, ak, al);
			var aF = Math.floor(.3 * al);
			q.r.textAlign(bI, 1), q.r.textBaseline(bI, 1), bI.font = q.r.ft(0, aF), bI.fillStyle = i.bM, bI.fillText(f, Math.floor(a7 + ak / 2), Math.floor(a8 + al / 2 + .1 * aF))
		}(a7, a8 + y3 + b2.gap, oC, aLX, "Back")
	}
}

function aEA() {
	var a7, a8, aLn, aLo, aLp, bB, player, aLq, gap, zoom, aIJ, aLr, a4M = new Array(10);

	function aLy(player) {
		for (var a6 = aIJ.length - 1; 0 <= a6; a6--)
			if (aIJ[a6] === player) return 1
	}

	function aLw(a5S) {
		var a6, aF;
		if (-1 !== a5S)
			for (aF = a4M.length, a6 = 0; a6 < aF; a6++)
				if (a4M[a6].ai && a4M[a6].a7 + 1 === a5S % 4 && a4M[a6].a8 + 1 === a5S >> 2) return a6;
		return -1
	}

	function aLu(fb, fc) {
		var gS = gap / 2;
		return fb < a7 - aLn - 3 * gS || a7 + 3 * aLn + 5 * gS < fb || fc < a8 - aLn - 3 * gS || a8 + 2 * aLn + 3 * gS < fc ? -1 : 4 * (fc < a8 - gS ? 0 : fc < a8 + aLn + gS ? 1 : 2) + (fb < a7 - gS ? 0 : fb < a7 + aLn + gS ? 1 : fb < a7 + 2 * aLn +
			3 * gS ? 2 : 3)
	}
	this.aFP = function() {
		var a6, iV, aLt = [i.a6e, i.a6g, i.yF, i.a6o, i.a6j];
		for (a4M = new Array(8), a6 = 0; a6 < 8; a6++) a4M[a6] = {
			id: a6,
			ai: !1,
			iY: 0,
			aq: [],
			a7: 0,
			a8: 0
		};
		for (a4M[0].colors = [0, 1, 2, 3], a4M[0].a7 = 0, a4M[0].a8 = 0, a4M[1].colors = [0, 1, 4], a4M[1].a7 = 1, a4M[1].a8 = 0, a4M[2].colors = [0, 2], a4M[2].a7 = -1, a4M[2].a8 = 0, a4M[3].colors = [0], a4M[3].a7 = 0, a4M[3].a8 = 0, a4M[4]
			.colors = [0, 2], a4M[4].a7 = 1, a4M[4].a8 = 1, a4M[5].colors = [3], a4M[5].a7 = 0, a4M[5].a8 = -1, a4M[6].id = 20, a4M[6].colors = [0], a4M[6].a7 = 1, a4M[6].a8 = -1, a4M[7].id = 21, a4M[7].colors = [0], a4M[7].a7 = 0, a4M[7].a8 = 1,
			a6 = 0; a6 < 8; a6++)
			for (iV = 0; iV < a4M[a6].colors.length; iV++) a4M[a6].aq.push(function(id, kl) {
				if (id < 20) return q.aq.kj(bN.get(3), id, kl);
				var kl = bN.get(3).height,
					km = q.r.kn(kl, kl),
					ko = q.r.getContext(km);
				20 === id ? ko.drawImage(bN.get(18), 0, 0) : 21 === id && xA.p4.xG(xA.xB.xC + xA.xB.aIH, ko, 0, 0, kl);
				return km
			}(a4M[a6].id, aLt[a4M[a6].colors[iV]]))
	}, this.aHK = function() {
		return a4M
	}, this.m = function() {
		aIJ = [], a7 = a8 = bB = 0, aLo = aLp = -1e3, this.resize()
	}, this.resize = function() {
		aLn = Math.floor((av.aw.ax() ? .075 : .0468) * ay.az), zoom = aLn / bN.get(3).height, gap = Math.floor(aLn / 3)
	}, this.kA = function(fb, fc) {
		return !!this.ai() && (bA.bE = !0, !!xA.p4.bF(fb, fc, player) || (fb = function(fb, fc) {
			aLp = aLo = -1e3;
			var a5S = aLu(fb, fc),
				a5S = aLw(a5S);
			if (-1 === a5S) return 0;
			if (1 !== a4M[a5S].colors[a4M[a5S].iY])
				if (5 === a5S) {
					if (! function() {
							var eu = performance.now();
							aLr + 4e3 < eu && (aIJ = []);
							aLr = eu
						}(), aLy(player)) return 1;
					aIJ.push(player), 16 < aIJ.length && aIJ.shift()
				} else if (6 === a5S) {
				for (let a6 = aIJ.length - 1; 0 <= a6; a6--) 0 === dV.eg[aIJ[a6]] && aIJ.splice(a6, 1);
				0 < aIJ.length && (a6M.a3z(1, aIJ, !0) && e9.ce.aII(aIJ, player), aIJ = [])
			} else if (2 === a5S) e9.eA.iw(b8.eI(), player);
			else if (3 === a5S) df.e7 && e9.eA.eB(aLq);
			else if (0 === a5S)
				if (0 === a4M[0].iY) {
					if (df.a6B && gm.a0g() < 300) return 1;
					e9.eA.eL(b8.eI(), player)
				} else eO.eP(player, b8.eI());
			else if (1 === a5S) aE3.a82(), e9.eA.eH(b8.eI(), aLq);
			else {
				if (7 === a5S) return aE3.a85(), xA.p4.show(fb, fc), 2;
				if (4 !== a5S) return 0;
				a6M.a3z(0, [player], !0) && e9.ce.a8t(player)
			}
			return 1
		}(fb, fc), this.s(), 2 === fb && (xA.p4.ai = !0), 0 < fb))
	}, this.kC = function(fb, fc) {
		this.ai() || (aLo = fb, aLp = fc, bB = performance.now())
	}, hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = dy.dz(mouseX),
			coordY = dy.e1(mouseY),
			coord = dy.e3(coordX, coordY),
			point = dy.e5(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(fb, fc, e4) {
			dZ.e8(e4) || -1 === (fb = eE.eF.aBu(fb, fc)) ? f6.a91(e4) : f6.a92(fb)
		}(mouseX, mouseY, point))
	}
	this.click = function(fb, fc, kN) {
		var dx = dy.dz(fb),
			e0 = dy.e1(fc),
			e2 = dy.e3(dx, e0),
			e4 = dy.e5(e2);
		return !(!dy.e6(dx, e0) || (dx = (av.aw.ax() ? .025 : .0144) * ay.az, e0 = performance.now(), Math.abs(fb - aLo) > dx) || Math.abs(fc - aLp) > dx || bB + 500 < e0) && (bB = e0, kN ? (function(fb, fc, e4) {
			dZ.e8(e4) || -1 === (fb = eE.eF.aBu(fb, fc)) ? f6.a91(e4) : f6.a92(fb)
		}(fb, fc, e4), !1) : dq.dr || this.ai() || !q.ce.dt(df.du) || df.dp ? (this.s(), !1) : df.e7 ? !!dZ.e8(e4) && (aLq = e2, a4M[3].ai = !0, this.aM1(fb, fc)) : (eE.eF.pz(e2) ? eE.lL.a4K = -1 : eE.eF.aBp(fb, fc) || (2 === df.gP ? dZ
			.a0z(e4) && (player = dZ.eQ(e4), dZ.da(player)) && (a4M[0].ai = !0, a4M[0].iY = 1, a4M[7].ai = !0) : dZ.eC(e4) || (aLq = e2, eE.eF.eG(df.du, e2) && (a4M[0].ai = !0, a4M[0].iY = 1, a4M[1].ai = !0, a4M[1].iY = j1.jH[2] ? 0 :
				2), dZ.eD(e4)) || (dZ.eJ(e4) ? (player = df.eM, eK(df.du) ? (a4M[0].ai = !0, a4M[0].iY = 0) : eN(df.du, player) && (a4M[0].ai = !0, a4M[0].iY = 3)) : (player = dZ.eQ(e4)) === df.du ? (a4M[0].ai = !0, a4M[0].iY = 1,
				a4M[7].ai = !0) : (a4M[0].iY = 1, a4M[5].ai = function(player) {
				return dZ.da(player) && !aLy(player) && a6M.a3z(1, [player], !1)
			}(player), a4M[7].ai = dZ.da(player), eR(player, df.du) ? (a4M[4].ai = dZ.da(player) && !fZ.aHO(player) && a6M.a3z(0, [player], !1), a4M[6].ai = function(player) {
				if (0 === aIJ.length) return !1;
				if (performance.now() > aLr + 4e3) return !(aIJ = []);
				return !aLy(player) && ! function(player) {
					var a6;
					if (df.iA)
						for (a6 = aIJ.length - 1; 0 <= a6; a6--)
							if (!eR(player, aIJ[a6])) return 1;
					return
				}(player)
			}(player), eS(df.du, player) ? (a4M[0].iY = 0, a4M[0].ai = !0) : eN(df.du, player) && (a4M[0].iY = 3, a4M[0].ai = !0), a4M[0].ai = this.aM4()) : (a4M[2].ai = !0, a4M[0].ai = !0)))), this.aM1(fb, fc)))
	}, this.aM1 = function(fb, fc) {
		return a7 = fb - Math.floor(aLn / 2), a8 = fc - Math.floor(aLn / 2), !!this.ai()
	}, this.fU = function(fb, fc) {
		return !!this.ai() && (xA.p4.ai ? !xA.p4.aFm(fb, fc) && (xA.p4.ai = !1, bA.bE = !0) : function(oZ, fb, fc) {
			fb = aLu(fb, fc);
			if (0 <= aLw(fb)) return !1;
			if ((1 === fb || 6 === fb) && 0 <= aLw(2)) return !1;
			if ((6 === fb || 9 === fb) && 0 <= aLw(10)) return !1;
			return oZ.s(), bA.bE = !0
		}(this, fb, fc))
	}, this.s = function() {
		for (let a6 = a4M.length - 1; 0 <= a6; a6--) a4M[a6].ai = !1, a4M[a6].iY = 0;
		xA.p4.ai = !1
	}, this.ai = function() {
		return this.aM4() || xA.p4.ai
	}, this.aM4 = function() {
		for (var aF = a4M.length, a6 = 0; a6 < aF; a6++)
			if (a4M[a6].ai) return !0;
		return !1
	}, this.bH = function() {
		if (this.ai())
			if (xA.p4.ai) xA.p4.bH();
			else {
				var a6, ko = bI,
					iV = a4M,
					aF = iV.length,
					aM9 = (aLn + gap) / zoom;
				for (ko.imageSmoothingEnabled = !0, ko.setTransform(zoom, 0, 0, zoom, a7, a8), a6 = 0; a6 < aF; a6++) iV[a6].ai && bI.drawImage(iV[a6].aq[iV[a6].iY], iV[a6].a7 * aM9, iV[a6].a8 * aM9);
				ko.imageSmoothingEnabled = !1, ko.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function zJ() {
	let k, rf;
	var ri;
	this.show = function() {
		k.show(), this.resize()
	}, this.s = function() {
		k.s()
	}, this.resize = function() {
		k.resize(), rf.resize()
	}, this.t = function(u) {
		2 === u && k.v[0].w()
	}, k = new n("🛠️ Chart Options", [new d("❌ " + e.f[92], function() {
		g.zK(13)
	})]), rf = new rg(k.p, ((ri = []).push(function() {
		function aK4() {
			var oE = .1 + (0 === rr.cY.value.length ? .1 : .01 * Math.min(rr.cY.value.split(",").length, 10));
			aK0.button.innerHTML = q.cg.vB(aK0.button.innerHTML, oE)
		}
		let rq = new jS,
			aK0 = (rq.jV("Search Terms"), rq.jW("Separate search terms with a comma."), new d("Go (🧈 0.00)", function() {
				aZ.d6.aX(130, 0), g.d4.tz()
			})),
			rr = new rs(aZ.af.data[126], 0, function() {
				aK0.button.click()
			});
		rq.jc(rr), rr.cY.placeholder = "a,b,c", rr.cY.style.marginTop = "0.5em";
		return rr.cY.addEventListener("input", aK4), aK4(), rq.jc(new op([aK0.button])), rq
	}()), ri.push(function() {
		function aK4() {
			g5 = Math.floor(aK2.cY.value), g6 = Math.floor(aK1.cY.value);
			var g5, g6 = ((g5 = {
				aAy: Math.min(g5, g6),
				a5V: Math.max(g5, g6)
			}).a5V - g5.aAy + 1 + 10) / 100;
			aK0.button.innerHTML = q.cg.vB(aK0.button.innerHTML, g6)
		}
		let rq = new jS,
			aK0 = new d("Go (🧈 0.00)", function() {
				aZ.d6.aX(130, 1), g.d4.tz()
			}),
			aK1 = new rs(aZ.af.data[129], 1, function() {
				aK1.cY.focus()
			}),
			aK2 = new rs(aZ.af.data[128], 1, function() {
				aK0.button.click()
			});
		rq.jV("Start Index"), rq.jc(aK2), aK2.cY.style.marginBottom = "0.5em", rq.jV("End Index"), rq.jc(aK1);
		return aK2.cY.addEventListener("input", aK4), aK1.cY.addEventListener("input", aK4), aK4(), rq.jc(new op([aK0.button])), rq
	}()), ri.push(function() {
		var rq = new jS;
		return rq.jV("Timeframe"), rq.jZ(new s5(aZ.af.data[125])), rq
	}()), ri.push(function() {
		var rq = new jS;
		return rq.jV("More Options"), rq.jc(new sC(aZ.af.data[127], aZ.af.data[127].title)), rq
	}()), ri))
}

function aEU() {
	this.aI5 = null, this.bE = !1, this.bB = 0, this.pg = 56;
	var aMD = 0;

	function aME() {
		bA.bB = aMD = performance.now(), bA.aI5.bD(), window.requestAnimationFrame(aME)
	}
	this.m = function() {
		this.a6R(), window.requestAnimationFrame(aME), this.bB = performance.now()
	}, this.a6N = function() {
		df.dp ? (this.aI5 = new a1e, this.aI5.m()) : df.iP ? this.aI5 = new pd : (this.aI5 = new tX, this.aI5.m())
	}, this.a6R = function() {
		this.aI5 = new qK, this.bE = !0
	}, this.bD = function() {
		this.aI5.pe++
	}, this.bC = function() {
		return this.aI5.pe
	}, this.aHs = function() {
		var eu = performance.now();
		eu < aMD + 1e3 || (this.bB = eu, this.aI5.bD())
	}
}

function xy() {
	function aMF() {
		if (2 === df.gP) return 1;
		gl.a2y(), df.gP = 2, df.qT = df.a0o
	}

	function aMG() {
		ek.result.ej(), ek.result.f5(), f6.a9H(!0), f6.a2x(247, 0), gk.oK(!0), gm.oK(!0), gl.oK(), gj.aEy(), df.dp && bA.aI5.a20(), bA.bE = !0, d0.aC6(), av.aw.setState(0)
	}
	this.a2w = function() {
		aMF() || (df.eh = 2, ek.result.ef(), f6.qi(0, 59), fT.a97(2700), gp.show(!1, !1, !0), aMG())
	}, this.a0r = function(a90) {
		aMF() || (df.eh = 1, 8 === df.eo ? (df.et = a90 < 0 ? dV.ev[0] >= dV.ev[1] ? 0 : 1 : a90, df.ei = +(df.et === df.du), df.ei ? f6.qi(df.et, 2) : f6.qi(1 - df.du, 3), df.a6C.wC(df.et)) : df.iA ? (df.ei = +(lV.i6[df.du] === ep.aJs()), 9 ===
			df.eo && f6.a96()) : (df.et = f4[0], df.ei = +(df.et === df.du), f6.a8z(df.et)), gp.show(1 === df.ei, !1), aMG())
	}
}
self.aiCommand746 = function(aL) {
	0 === aL ? aE5() : 1 !== aL || 1 !== av.id || av.aa < 14 || g0.kV()
}, setTimeout(aE5, 1e4), window.onload = function() {
	aE5()
};