function a() {
	var b, c;

	function r() {
		if (b && b.readyState === b.OPEN) {
			var t = new u;
			t.v(1612), t.w(1, 0), t.w(6, 7), t.w(2, m ? m.id : 3), t.w(1, x ? 1 : 0), t.w(1, y ? 1 : 0), t.w(1, e ? e.f : 0);
			for (var z = 0; z < c.length && z < 100; z++) t.w(16, c.charCodeAt(z));
			b.send(t.a0), s()
		}
	}

	function s() {
		b && (b.onclose = null, b.onopen = null, b = null)
	}
	window.addEventListener("error", function error(d) {
		window.removeEventListener("error", error);
		return alert("Error:\n" + d.filename + " " + d.lineno + " " + d.colno + " " + d.message);
		if (window.removeEventListener("error", error), c = d.lineno + " " + d.colno + " " + d.message, e && 1 === e.f) try {
			g.h(), i.j(4, 5, new k("🤖 Beep Boop! An error occurred.", c + "<br>Please report this error message to davidtschacher@gmail.com. Please also describe the actions you took before this error occurred.", !0, [new l("🔄 Reload",
				function() {
					m.n.o()
				}, p.q)]))
		} catch (d) {
			console.log("error 3421: " + d)
		}(b = new WebSocket("wss://territorial.io/s52/")).onopen = r, b.onclose = function() {
			s()
		}
	})
}
var e, a1, a2, a3, a4, a5, a6, a7, a8, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, az, b0,
	b1, b2, p, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC, bD, bE, bF, bG, bH, bI, bJ, i, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, bW, m, bX, bY, bZ, g, ba, dS, dT, dU, x, dV, y, f6, f7, f8, f9, fA, fB, fC, fD, fE, fF, fG, fH, fI, hh, hg, hi, a2c,
	kf, j8, wp, qo, tS, a6H, zj, zk;

function bb(bc) {
	e && !bc || (be(), bB = new bf, bA = new bg, b2 = new bh, p = new bi, a1 = new bj, az = new bk, b5 = new bl, b6 = new bm, a2 = new bn, a3 = new bo, a4 = new bp, a5 = new bq, a6 = new br, a7 = new bs, a8 = new bt, a9 = new bu, aA = new bv, aB =
		new bw, aC = new bx, aD = new by, aE = new bz, aF = new c0, aG = new c1, aH = new c2, aI = new c3, aJ = new c4, aK = new c5, aL = new c6, aM = new c7, aN = new c8, aO = new c9, aP = new cA, aQ = new cB, aR = new cC, aZ = new cD, aa =
		new cE, ab = new cF, aS = new cG, aT = new cH, aW = new cI, aU = new cJ, aV = new cK, aX = new cL, ap = new cM, aY = new cN, ad = new cO, ae = new cP, af = new cQ, aq = new cR, ao = new cS, ac = new cT, ag = new cU, ah = new cV, ai =
		new cW, an = new cX, aj = new cY, ak = new cZ, al = new ca, am = new cb, ar = new cc, at = new cd, au = new ce, av = new cf, aw = new cg, ax = new ch, ay = new ci, b0 = new cj, b1 = new ck, b3 = new cl, b4 = new u, b7 = new cm, b8 =
		new cn, b9 = new co, bC = new cp, bD = new cq, bE = new cr, bF = new cs, bG = new ct, bH = new cu, bI = new cv, bJ = new cw, i = new cx, bK = new cy, m = new cz, e = new d0, bX = new d1, bY = new d2, bV = new d3, bW = new d4, bP = new d5,
		bQ = new d6, bL = new d7, bM = new d8, bS = new d9, bT = new dA, bU = new dB, bZ = new dC, bR = new dD, g = new dE, ba = new dF, e.dH(), m.dH(), an.dI(), bY.dH(), az.dH(), az.dJ(), ba.dH(), b2.dH(), aR.dH(), bL.dH(), aq.dH(), b5.dH(), b6
		.dH(), bI.dH(), i.dH(), bN = new dK, an.dH(), m.n.dL(), bU.dH(), bR.dH(), bM.dH(), bO = new dM, ao.dH(), aT.dN(), bK.dH(), ad.dH(), aN.dH(), ax.dH(), aG.dH(), aX.dH(), b9.dH(), aP.dH(), bU.dO = !0, setTimeout(function() {
			bI.v(2, 14071)
		}, 0), i.j(5, 5), b8.dP() || m.n.dQ(), an.dR(), e.f = 1)
}

function d0() {
	this.dW = 1068, this.dH = function() {
		dS = 2, dU = 33, dT = "9 Oct 2024 [1.99.7.9]", x = true, y = function() {
			try {
				return window.self !== window.top
			} catch (d) {
				return !0
			}
		}(), dV = (new Date).getTime() % 1024
	}, this.f = 0
}

function dF() {
	this.id = new dY, this.dH = function() {
		this.id.dH()
	}
}

function dY() {
	this.dH = function() {
		0 === bY.dZ.data[181].value && (bY.dZ.da(180, Math.floor(Math.random() * bB.pow(30))), bY.dZ.da(181, Math.floor((new Date).getTime() / 36e5)))
	}
}

function cy() {
	this.db = new dc, this.dd = new de, this.dH = function() {
		m.n.df()
	}
}

function dc() {
	function dq() {}
	this.dH = function() {}, this.dp = function() {
		return !!dq() && (aiptag.cmd.player.push(function() {
			aiptag.adplayer.startVideoAd()
		}), !0)
	}, this.hideCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.hideCMPButton && aipAPItag.hideCMPButton()
	}, this.showCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.showCMPButton && aipAPItag.showCMPButton()
	}, this.showCMPScreen = function() {
		dq() && aipAPItag.showCMPScreen()
	}
}

function de() {
	var ds = 2e4;
	this.show = function() {
		if (bU.ds < ds) return !1;
		ds = bU.ds + 135e4, 2 === dS && m.n.du(Math.floor(135e4))
	}
}

function cF() {
	this.dv = new dw
}

function dw() {
	this.dx = function(dy) {
		var dz = aQ.e0(dy);
		return (this.e1(a1.e2, dz) || this.e3(a1.e2, dz)) && 0 !== (dz = function(eO) {
			for (var eP = bC.eQ(eO), eR = bC.eS(eO), max = Math.max(bI.eT, bI.eU) - 2, eV = max * max, eW = !1, eX = 0, eY = 0; eY < max; eY++) {
				var eZ, e4 = function(eP, eR, eY) {
					for (var z = 0; z <= eY; z++)
						for (var eb = -1; eb < 2; eb += 2)
							for (var ec = -1; ec < 2; ec += 2)
								for (var ed = 0; ed < 2; ed++) {
									var dy = function(eP, eR) {
										if (bC.ef(eP, eR)) {
											eP = bC.eg(eP, eR), eR = bC.e8(eP);
											if (aQ.eD(eR) && aQ.eh(eR)) return eP
										}
										return 0
									}(eP + ed * eb * z + (1 - ed) * ec * eY, eR + ed * ec * eY + (1 - ed) * eb * z);
									if (dy) return dy
								}
					return 0
				}(eP, eR, eY);
				e4 && (eZ = bC.ea(eP, eR, e4)) < eV && (eX = e4, eV = eZ, eW || (eW = !0, max = Math.floor(Math.sqrt(eZ)) + 1))
			}
			return eX
		}(bC.e6(dy))) && (dy = bC.e8(dz), aQ.e9(dy) || (dy = aQ.eA(dy)) !== a1.e2 && eB(dy, a1.e2)) ? dz : 0
	}, this.eC = function(player, e4) {
		e4 = bC.e8(e4);
		if (aQ.eD(e4)) {
			if (aQ.e9(e4)) bE.eE[0] = a1.eF;
			else if (aQ.eA(e4) !== bE.eE[0]) return !1;
			for (var eG = function(dy) {
					var eK = aQ.eK,
						eG = [];
					loop: for (var eL = 3; 0 <= eL; eL--) {
						var eM = dy + eK[eL];
						if (aQ.eN(eM)) {
							for (var id = aQ.e0(eM), z = 0; z < eG.length; z++)
								if (id === eG[z]) continue loop;
							bE.eJ[eG.length] = eM, eG.push(id)
						}
					}
					return eG
				}(e4), eI = eG.length, z = 0; z < eI; z++)
				if (this.e1(player, eG[z]) || this.e3(player, eG[z])) return bE.eJ[0] = bE.eJ[z], !0
		}
		return !1
	}, this.e1 = function(player, dz) {
		for (var ei = aV.ei[player], eI = ei.length, ej = Math.max(bB.ek(eI, 12), 1), eK = aQ.eK, z = 0; z < eI; z += ej)
			for (var e7 = ei[z], eL = 3; 0 <= eL; eL--) {
				var eM = e7 + eK[eL];
				if (aQ.eN(eM) && dz === aQ.e0(eM)) return !0
			}
		return !1
	}, this.e3 = function(player, dz) {
		for (var ei = aV.ei[player], eI = ei.length, eK = aQ.eK, z = 0; z < eI; z++)
			for (var e7 = ei[z], eL = 3; 0 <= eL; eL--) {
				var eM = e7 + eK[eL];
				if (aQ.eN(eM) && dz === aQ.e0(eM)) return !0
			}
		return !1
	}
}

function cr() {
	this.eo = new Uint16Array(2), this.ep = new Uint16Array(2), this.eq = new Uint32Array(2), this.er = new Uint32Array(2), this.es = new Uint8Array(4), this.et = new Uint8Array(4), this.eJ = new Uint32Array(4), this.eu = new Uint32Array(5), this
		.eE = new Uint32Array(8), this.ev = new Uint16Array(16), this.ew = new Uint16Array(512), this.ex = function(ey, ez) {
			return ey[0] = ez, ey
		}, this.f0 = function(ey, ez, f1) {
			return ey[0] = ez, ey[1] = f1, ey
		}, this.f2 = function(ey, ez, f1, f3) {
			return ey[0] = ez, ey[1] = f1, ey[2] = f3, ey
		}, this.f4 = function(ey, ez, f1, f3, f5) {
			return ey[0] = ez, ey[1] = f1, ey[2] = f3, ey[3] = f5, ey
		}
}

function fJ() {
	fC = 0, fD = 2048, fE = new Uint32Array(4 * fD), fF = 0, fG = new Uint32Array(fD), fH = new Uint8Array(bI.eT * bI.eU)
}

function fK(player) {
	f7 = player, fI = !1, fL(), fM();
	for (var z = aS.fN(f7) - 1; 0 <= z; z--) 0 === aS.fO(f7, z) && (f6 = z, fP());
	fI && fQ()
}

function fQ() {
	fR(), fS()
}

function fP() {
	fB = aS.fT(f7, f6), f8 = aS.fU(f7, f6), f9 = aS.fV(f7, f6), fW(), (0 !== fC && (fY(), fZ()) ? fa : fX)()
}

function fZ() {
	if (!((fA = bB.ek(f8, fC)) > a1.fb)) {
		if (!f9) return !1;
		var fc = fC * (1 + a1.fb);
		f8 += b2.fd.fe(f7, fc - f8)
	}
	return !0
}

function fY() {
	for (var z = fC - 1; 0 <= z; z--) fH[bB.ek(fE[z], 4)] = 0
}

function fX() {
	1 === aS.fN(f7) && a3.ff(f7), b2.fd.fg(f7, f8), aS.fh(f7, f6)
}

function fL() {
	for (var player = f7, fi = aV.fi, eI = Math.min(fi[player].length, fD), fj = 0, fk = fG, z = eI - 1; 0 <= z; z--) fk[fj++] = fi[player][z];
	fF = fj
}

function fM() {
	for (var z = aV.fi[f7].length - 1; 0 <= z; z--) aQ.eD(aV.fi[f7][z]) && aQ.fl(aV.fi[f7][z], f7);
	aV.fi[f7] = []
}

function fW() {
	fC = 0, (fB === a1.eF ? fm : fn)()
}

function fn() {
	for (var fo, fp, z, eK = aQ.eK, eL = 3; 0 <= eL; eL--)
		for (z = fF - 1; 0 <= z; z--) fo = fG[z] + eK[eL], fp = bB.ek(fo, 4), 0 === fH[fp] && aQ.fq(fo) && aQ.eA(fo) === fB && (fH[fp] = 1, fE[fC++] = fo)
}

function fm() {
	for (var fo, fp, z, eK = aQ.eK, eL = 3; 0 <= eL; eL--)
		for (z = fF - 1; 0 <= z; z--) fo = fG[z] + eK[eL], fp = bB.ek(fo, 4), 0 === fH[fp] && aQ.e9(fo) && (fH[fp] = 1, fE[fC++] = fo)
}

function fa() {
	fr() ? (fs(), fB !== a1.eF && ft()) : fX()
}

function ft() {
	fu(), fv(aV.fw[fB]), fv(aV.fx[fB]), bI.fy(bI.fz) && fv(aV.ei[fB]), g0(aV.fi[fB]), g1(aV.fx[fB]), g1(aV.ei[fB]), g2(), g3()
}

function fs() {
	fI = !0, aS.g4(f7, f6, f8), aS.g5(f7, f6), aV.g6[f7] += fC, g7(), g8()
}

function fr() {
	return (fB === a1.eF ? g9 : gA)()
}

function gA() {
	var gB = fC * a1.fb,
		gC = gD(),
		gE = gF(),
		gC = gB + 2 * gC + gE,
		gH = fA * fC;
	return gC < gH ? (f8 -= gC, gI(gC - gB, gE), !0) : (f8 -= gH, f9 && 0 === gE ? (gI(Math.max(gH - gB + b2.fd.fe(f7, gC - gH + 1), 0), 0), !0) : (gI(gH - gB, gE), !1))
}

function gI(gH, gE) {
	if (0 < gE) {
		if (!(gE <= gH)) return aS.gJ(fB, f7, gE - gH), void(gH = 0);
		aS.gJ(fB, f7, 0), gH -= gE
	}
	gH = bB.ek(gH, 2), aV.gK[fB] >= gH ? aV.gK[fB] -= gH : aV.gK[fB] = 0
}

function gF() {
	return aS.gL(fB, f7)
}

function gD() {
	return bB.ek(fC * aV.gK[fB], 1 + bB.ek(10 * aV.g6[fB], 16))
}

function g9() {
	return f8 -= fC * a1.fb, !0
}

function g8() {
	for (var z = fC - 1; 0 <= z; z--) aV.fi[f7].push(fE[z]), aV.fw[f7].push(fE[z]), aQ.fl(fE[z], f7)
}

function cw() {
	var gM = 0,
		gN = 0;
	this.gO = function(eP, eR) {
		gM = eP, gN = eR
	}, this.gP = function(gQ) {
		a1.gR || a9.gS || (b2.fd.gT(0) || b2.fd.gT(1)) && b2.fd.gU(a1.e2) && (aE.gV(gM, gN) ? aE.gW = !1 : function(gQ) {
			var gY = bC.gZ(gM),
				ga = bC.gb(gN),
				e4 = bC.eg(gY, ga),
				dy = bC.e8(e4);
			bC.gc(gY, ga) && (a1.gd ? aQ.eD(dy) && b0.ge.gf(e4) : aQ.eN(dy) ? gQ || (gY = ab.dv.dx(dy)) && (ga = bC.e8(gY), ga = aQ.e9(ga) ? a1.eF : aQ.eA(ga), b0.ge.gi(aE.gj(), gY, ga)) : aQ.gk(dy) || gQ ? bD.gl.gm(a1.e2, e4) && b0.ge
				.gn(aE.gj(), e4) : aQ.e9(dy) ? go(a1.e2) ? b0.ge.gp(aE.gj(), a1.eF) : gq(a1.e2, a1.eF) ? ar.gr(a1.eF, aE.gj()) : bD.gl.gm(a1.e2, e4) && b0.ge.gn(aE.gj(), e4) : (gY = aQ.eA(dy)) !== a1.e2 && (eB(gY, a1.e2) ? gs(a1.e2,
					gY) ? b0.ge.gp(aE.gj(), gY) : gq(a1.e2, gY) ? ar.gr(gY, aE.gj()) : bD.gl.gm(a1.e2, e4) && b0.ge.gn(aE.gj(), e4) : bD.gl.gm(a1.e2, e4) && b0.ge.gn(aE.gj(), e4)))
		}(gQ))
	}
}

function gt(gu, size, gv, gw, font) {
	var z, gz = .2,
		h0 = document.createElement("canvas"),
		h1 = h0.getContext("2d", {
			alpha: !1
		});
	for (h0.width = gu, h0.height = gu, h1.font = size + font, h1.textAlign = "center", h1.textBaseline = "middle", h1.fillStyle = "red", z = 0; z < gv.length; z++) h1.fillText(gv[z], .5 * gu, .5 * gu);
	return -1 < (h0 = function(gx) {
		var z, h3, eL = gx.data;
		for (z = eL.length - 4; 0 <= z; z -= 4)
			if (h3 = eL[z], gw <= h3) return Math.floor(z / (4 * gu));
		return -1
	}(h1.getImageData(0, 0, gu, gu))) && (gz = (h0 - .5 * gu + .1 * size) / size), Math.max(gz, 0)
}

function cp() {
	this.h4 = new Int16Array(4), this.h5 = new Int16Array(4), this.dH = function() {
		var z;
		for (this.h4[0] = -bI.eT, this.h4[1] = 1, this.h4[2] = bI.eT, this.h4[3] = -1, z = 0; z < 4; z++) this.h5[z] = 4 * this.h4[z]
	}, this.h6 = function(gg, h7) {
		var h8 = this.eQ(h7) - this.eQ(gg),
			h7 = this.eS(h7) - this.eS(gg),
			gg = h8 >>> 31 << 1;
		return 5 + gg + (1 - gg) * (1 - (h7 >>> 31 << 1)) * (Math.abs(h8) - Math.abs(h7) >>> 31) & 3
	}, this.hD = function(gg, h7, hE) {
		return hE % 2 == 0 ? hE + (1 - hE) * (1 - (this.eQ(h7) - this.eQ(gg) >>> 31 << 1)) + 4 & 3 : hE + (2 - hE) * (1 - (this.eS(h7) - this.eS(gg) >>> 31 << 1)) + 4 & 3
	}, this.hG = function(fo, e4) {
		for (var h7, hH, hJ = aV.fx[fo], eI = hJ.length, t = bI.eT, hK = this.eQ(e4), hL = this.eS(e4), eO = hJ[0] >> 2, min = this.ea(hK, hL, eO), z = 1; z < eI; z++)(hH = (hH = hK - (h7 = hJ[z] >> 2) % t) * hH + (hH = hL - ~~((.5 + h7) / t)) *
			hH) < min && (min = hH, eO = h7);
		return eO
	}, this.hM = function(player, dy) {
		return !aQ.e9(dy) && player === aQ.eA(dy)
	}, this.ea = function(gY, ga, e4) {
		return (gY -= this.eQ(e4)) * gY + (ga -= this.eS(e4)) * ga
	}, this.hN = function(hO, hP, hQ) {
		hO = this.hS(hO) - this.hT(hQ), hP = this.hV(hP) - this.hW(hQ);
		return Math.sqrt(hO * hO + hP * hP)
	}, this.hX = function(gg, h7) {
		var hR = this.eQ(gg) - this.eQ(h7),
			gg = this.eS(gg) - this.eS(h7);
		return Math.sqrt(hR * hR + gg * gg)
	}, this.hY = function(gg, h7) {
		var hR = this.eQ(gg) - this.eQ(h7),
			gg = this.eS(gg) - this.eS(h7);
		return hR * hR + gg * gg
	}, this.hZ = function(ha, hb, hc, hd) {
		return (ha -= hc) * ha + (hb -= hd) * hb
	}, this.he = function(fo, hf) {
		return bB.ek(hf * aV.gK[fo], 1e3)
	}, this.hS = function(hO) {
		return 16 * (hO + hg) / hh
	}, this.hV = function(hP) {
		return 16 * (hP + hi) / hh
	}, this.gZ = function(hO) {
		return Math.floor((hO + hg) / hh)
	}, this.gb = function(hP) {
		return Math.floor((hP + hi) / hh)
	}, this.gc = function(gY, ga) {
		return 1 <= gY && 1 <= ga && gY < bI.eT - 1 && ga < bI.eU - 1
	}, this.eQ = function(e4) {
		return e4 % bI.eT
	}, this.eS = function(e4) {
		return bB.ek(e4, bI.eT)
	}, this.eg = function(gY, ga) {
		return ga * bI.eT + gY
	}, this.hj = function(e4) {
		return this.ef(this.eQ(e4), this.eS(e4))
	}, this.ef = function(gY, ga) {
		return 0 < gY && gY < bI.eT - 1 && 0 < ga && ga < bI.eU - 1
	}, this.e8 = function(e4) {
		return e4 << 2
	}, this.e6 = function(dy) {
		return dy >> 2
	}, this.hk = function(e4) {
		return bI.eT * this.eS(e4) * 256 + (this.eQ(e4) << 4)
	}, this.hl = function(e4) {
		return this.hk(e4) + 8 + (bI.eT << 7)
	}, this.hm = function(hQ) {
		return bI.eT * (this.hW(hQ) >> 4) + (this.hT(hQ) >> 4)
	}, this.hn = function(hQ) {
		hQ = this.hm(hQ);
		return (this.eQ(hQ) >> 5) + bD.ho.hp * (this.eS(hQ) >> 5)
	}, this.hT = function(hQ) {
		return hQ % (bI.eT << 4)
	}, this.hW = function(hQ) {
		return bB.ek(hQ, bI.eT << 4)
	}, this.hq = function(e4, hE) {
		return e4 + this.h4[hE]
	}, this.hr = function(dy, hE) {
		return dy + this.h5[hE]
	}, this.hs = function(player) {
		return this.eg(aV.ht[player] + aV.hu[player] >> 1, aV.hv[player] + aV.hw[player] >> 1)
	}, this.hx = function(player) {
		return this.eg(ao.hy(aV.ht[player], aV.hu[player]), ao.hy(aV.hv[player], aV.hw[player]))
	}
}

function cT() {
	this.hz = new i0, this.i1 = new i2, this.i3 = new i4, this.performance = new i5, this.i6 = new i7, this.i8 = new i9, this.iA = new iB, this.dH = function() {
		this.hz.dH(), this.i3.dH(), this.performance.dH(), this.i6.dH(), this.i8.dH()
	}, this.iC = function() {
		this.performance.iC(), this.hz.iC()
	}
}

function i7() {
	var iD, iF = new Uint16Array(8);

	function iP(size, player) {
		for (var z = aV.fi[player].length - 1; size <= z; z--) aQ.iX(aV.fi[player][z], player)
	}
	this.dH = function() {
		iD = 0
	}, this.iG = function(player, iH) {
		return bE.eE[1] = aV.fi[player].length, bE.eE[0] === a1.eF ? ac.i6.iI(player) : this.iJ(player, bE.eE[0]), (0 !== bE.eE[1] || 0 !== aV.fi[player].length) && !(!iH && bE.eE[1] === aV.fi[player].length || (bE.eE[0] === a1.eF ? aV.iK[
			player]++ : aV.iL[player]++, 0))
	}, this.iM = function(player) {
		a1.iN && (ac.i8.iO[player] = 1), iP(bE.eE[1], player), aS.iQ(player, bE.eq[0], bE.eE[0]), a3.iR(player, !1)
	}, this.iS = function(player, iT, eI, iU) {
		var iV = bB.ek(12 * aV.gK[player], 1024);
		iU -= iU >= bB.ek(aV.gK[player], 2) ? iV : 0, iP(eI, player), aS.iQ(player, iU, iT), aV.gK[player] -= iU + iV, a3.iR(player, !1)
	}, this.iJ = function(player, iT) {
		for (var hE, eK = aQ.eK, z = aV.fw[player].length - 1; 0 <= z; z--)
			if (aQ.iW(aV.fw[player][z]))
				for (hE = 3; 0 <= hE; hE--)
					if (aQ.fq(aV.fw[player][z] + eK[hE]) && aQ.eA(aV.fw[player][z] + eK[hE]) === iT) {
						aV.fi[player].push(aV.fw[player][z]);
						break
					}
	}, this.iI = function(player) {
		for (var eK = aQ.eK, z = aV.fw[player].length - 1; 0 <= z; z--)
			if (aQ.iW(aV.fw[player][z]))
				for (var hE = 3; 0 <= hE; hE--)
					if (aQ.e9(aV.fw[player][z] + eK[hE])) {
						aV.fi[player].push(aV.fw[player][z]);
						break
					}
	}, this.iY = function(player, iZ) {
		var z, eb, hE, ia, eI = aV.fw[player].length,
			hF = 256 <= eI ? 12 : 32 <= eI ? 6 : 1,
			ib = eI - 1 - ao.ic(hF),
			eK = aQ.eK;
		iD = 0;
		loop: for (z = ib; 0 <= z; z -= hF)
			for (hE = 3; 0 <= hE; hE--)
				if ((ia = aQ.e9(aV.fw[player][z] + eK[hE]) ? a1.eF : aQ.eA(aV.fw[player][z] + eK[hE])) === a1.eF || aQ.fq(aV.fw[player][z] + eK[hE]) && ia !== player && (iZ || eB(player, ia))) {
					for (eb = iD - 1; 0 <= eb; eb--)
						if (iF[eb] === ia) continue loop;
					if (iF[iD] = ia, 8 <= ++iD) return !0
				}
		return 0 < iD
	}, this.ie = function(player, iZ) {
		var z, hE, ia, eK = aQ.eK;
		for (iD = 0, z = aV.fw[player].length - 1; 0 <= z; z--)
			for (hE = 3; 0 <= hE; hE--)
				if ((ia = aQ.e9(aV.fw[player][z] + eK[hE]) ? a1.eF : aQ.eA(aV.fw[player][z] + eK[hE])) === a1.eF || aQ.fq(aV.fw[player][z] + eK[hE]) && ia !== player && (iZ || eB(player, ia))) return iF[iD++] = ia, !0;
		return !1
	}, this.ig = function() {
		for (var ec, z = iD - 1; 0 <= z; z--)
			if (iF[z] === a1.eF) {
				for (iD--, ec = z; ec < iD; ec++) iF[ec] = iF[ec + 1];
				return !0
			} return !1
	}, this.ih = function(player) {
		for (var ec, z = iD - 1; 0 <= z; z--)
			if (aS.ii(player, iF[z]))
				for (iD--, ec = z; ec < iD; ec++) iF[ec] = iF[ec + 1];
		return 0 === iD
	}, this.ij = function() {
		for (var z = iD - 1; 0 <= z; z--)
			if (b2.fd.ik(iF[z])) return !0;
		return !1
	}, this.il = function() {
		for (var z = iD - 1; 0 <= z; z--) b2.fd.ik(iF[z]) || (iF[z] = iF[--iD]);
		return 0 < iD
	}, this.im = function(player) {
		for (var ec, io = iF[0], ip = aV.gK[io] + aS.gL(io, player), z = iD - 1; 1 <= z; z--)(ec = aV.gK[iF[z]] + aS.gL(iF[z], player)) < ip && (io = iF[z], ip = ec);
		return io
	}, this.iq = function(player) {
		var ir, is = iF[0];
		if (1 !== iD)
			for (var it = bB.ek(aV.hu[player] + aV.ht[player], 2), iu = bB.ek(aV.hw[player] + aV.hv[player], 2), eY = iv(it - bB.ek(aV.hu[is] + aV.ht[is], 2)) + iv(iu - bB.ek(aV.hw[is] + aV.hv[is], 2)), z = iD - 1; 1 <= z; z--)(ir = iv(it - bB
				.ek(aV.hu[iF[z]] + aV.ht[iF[z]], 2)) + iv(iu - bB.ek(aV.hw[iF[z]] + aV.hv[iF[z]], 2))) < eY && (eY = ir, is = iF[z]);
		return is
	}, this.iw = function() {
		for (var ix = iF, iy = ix[0], gK = aV.gK, iz = gK[iy], z = iD - 1; 1 <= z; z--) {
			var fo = ix[z],
				ec = gK[fo];
			iz < ec && (iy = fo, iz = ec)
		}
		return iy
	}
}

function i9() {
	function jE(player, iT, j4) {
		3 <= j4 && 2142 < bU.jK() && (iT === a1.eF || aV.gK[iT] < bB.ek(aV.gK[player], 20)) && a2.j9(player, 20)
	}

	function jH(player, iU, iT, j4) {
		3 <= j4 && j4 < 6 && bB.ek(aV.gK[player], 8) > aV.gK[iT] && (iU = Math.max(bB.ek(11 * aV.gK[iT], 5), bB.ek(aV.gK[player], 10)));
		j4 = aV.fi[player].length;
		ac.i6.iJ(player, iT), ac.i6.iS(player, iT, j4, iU)
	}

	function jD(player, iU) {
		var iT = a1.eF,
			eI = aV.fi[player].length;
		ac.i6.iI(player), aV.fi[player].length !== eI && ac.i6.iS(player, iT, eI, iU)
	}
	this.iO = new Uint8Array(a1.eF), this.dH = function() {
		this.iO.fill(0)
	}, this.j0 = function(player, iU) {
		var j2, j4, j5, j6;
		a1.iN && (this.iO[player] = 0), aS.j1(player) && (j2 = aT.j3(player), 3 <= (j4 = a2.iU[player]) && j4 < 6 && (iU = Math.max(aV.gK[player] - j2, iU)), j5 = aV.fx[player].length, j6 = aV.fw[player].length, 30 * aV.g6[player] > a1.j7 && j8[
			player] < 10 && 100 * j6 <= j5 && a2.j9(player, 10), a1.iN ? function(player, iU, j4, j2) {
			var iT;
			if (ac.i6.iY(player, !1) || ac.i6.ie(player, !1)) {
				if (ac.i8.iO[player] = 1, !ac.i6.ih(player))
					if (ac.i6.ig()) jD(player, iU), jE(player, a1.eF, j4);
					else {
						if (ao.jF(a2.jG[j4])) iT = ac.i6.im(player);
						else {
							if (ac.i6.ij() && ao.jF(a2.jI[j4]) && ac.i6.il(), 6 === j4) return jH(player, iU, ac.i6.iw(), j4);
							iT = ac.i6.iq(player)
						}
						jH(player, iU, iT, j4), jE(player, iT, j4)
					}
			} else bD.jB.iC(player) || ac.iA.iC(player) || ! function(player, iU, j4, j2) {
				var z, ec, ed, eG = bV.eG,
					jL = eG[player];
				if (0 !== jL) {
					var gK = aV.gK,
						jM = gK[player],
						g6 = aV.g6;
					if (player < a1.jN && (iU = jM), !(jM < g6[player] || 5 === j4 && jM < j2 || 4 === j4 && jM < bB.ek(j2, 2))) {
						var eI = aa.jO,
							jP = aa.jQ,
							jR = (z = ao.ic(eI), ac.i8.iO);
						for (ec = 0; ec < eI; ec++)
							if (ed = jP[(ec + z) % eI], 1 === jR[ed] && eG[ed] === jL) return b0.jS.jT(player, ed, iU);
						var jU = a1.jU,
							fx = aV.fx;
						for (ec = 0; ec < eI; ec++)
							if (ed = jP[(ec + z) % eI], gK[ed] < jU * g6[ed] && fx[ed].length && eG[ed] === jL && ed !== player) return b0.jS.jT(player, ed, iU)
					}
				}
			}(player, iU, j4, j2)
		}(player, iU, j4, j2) : (!j6 || j5 && (j5 < j6 && !ao.ic(10) || 100 * j6 <= j5 && ao.ic(3) || !ao.ic(8))) && bD.jB.iC(player) || function(player, iU, j4) {
			ac.i6.iY(player, !0) || ac.i6.ie(player, !0) ? ac.i6.ih(player) || (ac.i6.ig() ? jD(player, iU) : ao.jF(a2.jG[j4]) ? jH(player, iU, ac.i6.im(player), j4) : 5 === j4 ? jH(player, iU, ac.i6.iw(), j4) : (ac.i6.ij() && ao.jF(a2
				.jI[j4]) && ac.i6.il(), jH(player, iU, 6 === j4 ? ac.i6.iw() : ac.i6.iq(player), j4))) : ac.iA.iC(player)
		}(player, iU, j4))
	}
}

function bn() {
	var jV = new Uint8Array(a1.eF),
		jW = new Uint16Array(a1.eF),
		jX = new Uint16Array(a1.eF),
		jY = new Uint8Array(a1.eF),
		jZ = (this.iU = new Uint8Array(a1.eF), new Uint16Array(a1.eF)),
		ja = new Uint16Array(a1.eF);

	function jq(z) {
		jV[z] = 1 + bB.ek(jZ[z] * ao.random(), 10 * ao.value(100))
	}
	this.jb = null, this.jI = [97, 94, 70, 40, 20, 0, 100], this.jc = [500, 450, 400, 300, 80, 50, 100], this.jG = [0, 0, 5, 25, 50, 100, 0], this.jd = [60, 74, 112, 200, 256, 512, 512], this.je = [1, 2, 3, 4, 6, 8, 1], this.jf = [500, 450, 400, 300,
		80, 50, 100
	], this.dI = function() {
		this.jb = [L(0), L(1), L(2), L(3), L(4), L(5), ""]
	}, this.dH = function() {
		jV.fill(0), jW.fill(0), jX.fill(0), jY.fill(0), this.iU.fill(0), jZ.fill(0), ja.fill(0);
		var jg = a1.jN;
		if (ay.jh) {
			if (ay.ji.jj)
				for (z = a1.jk - 1; 0 <= z; z--) this.iU[z + jg] = ay.ji.jj[z + 1]
		} else if (9 === a1.jl) this.jm();
		else if (a1.jn)
			if (a1.iN)
				for (z = a1.jk - 1; 0 <= z; z--) this.iU[z + jg] = aO.jp[bV.eG[z + jg] - 1].eL;
			else
				for (z = a1.jk - 1; 0 <= z; z--) this.iU[z + jg] = aO.jp[0].eL;
		else
			for (var jo = 8 === a1.jl ? 1 : 0, z = a1.jk - 1; 0 <= z; z--) this.iU[z + jg] = jo;
		for (z = 0; z < jg; z++) this.iU[z] = 6;
		var eI = a1.eF;
		for (z = 0; z < eI; z++) this.iU[z] <= 2 ? (jY[z] = 5, jZ[z] = ja[z] = 1040, 0 === this.iU[z] ? (jW[z] = 980, jX[z] = 980) : 1 === this.iU[z] ? (jW[z] = 980, jX[z] = 920, jZ[z] = ja[z] = 1100) : (jW[z] = 825, jX[z] = 750)) : this.iU[z] <=
			4 ? (jY[z] = 1 + ao.ic(20), 3 === this.iU[z] ? (jW[z] = jX[z] = 500, jZ[z] = ja[z] = 1e3) : (ja[z] = 250 + ao.ic(1501), jZ[z] = 500 + ao.ic(501), jW[z] = 300 + ao.ic(201), jX[z] = 100 + ao.ic(201))) : this.iU[z] <= 5 ? (jZ[z] = 1e3,
				ja[z] = 1e3, jY[z] = 35 + ao.ic(16), jW[z] = 300 + ao.ic(201), jX[z] = 50 + ao.ic(101)) : (jZ[z] = ja[z] = 800, jY[z] = 5, jW[z] = 10, jX[z] = 250), jq(z)
	}, this.jm = function() {
		for (var z, dy = 0, jg = a1.jN, ec = 0; ec < 6; ec++) {
			for (z = dy + ap.jr[ec] - 1; dy <= z; z--) this.iU[z + jg] = ec;
			dy += ap.jr[ec]
		}
	}, this.j9 = function(fo, value) {
		jV[fo] = Math.min(value, jV[fo])
	}, this.iC = function(fo) {
		0 == --jV[fo] && ! function(fo) {
			(function(fo) {
				jZ[fo] !== ja[fo] && (jZ[fo] += jZ[fo] < ja[fo] ? 3 : -3);
				jW[fo] !== jX[fo] && (jW[fo] += jW[fo] < jX[fo] ? jY[fo] : -jY[fo], jW[fo] = (Math.abs(jW[fo] - jX[fo]) <= jY[fo] ? jX : jW)[fo]);
				jV[fo] = bB.ek(jZ[fo], 10)
			})(fo), ac.i8.j0(fo, bB.ek(jW[fo] * aV.gK[fo], 1e3))
		}(fo)
	}, this.ju = function(fo, fj) {
		jZ[fo] = ja[fo] = fj
	}
}

function i4() {
	var jv = new Uint16Array(a1.eF);

	function k0(player, jy) {
		for (var eI = bE.ep[0], ev = bE.ev, k9 = -1, kA = a1.eF, z = 0; z < eI; z++) {
			var eY, fo = ev[z];
			eB(player, fo) && (eY = bC.hY(jy, bC.hs(fo)), -1 === k9 || eY < k9) && (k9 = eY, kA = fo)
		}
		return kA
	}

	function k2(jz, jy) {
		if (jz === a1.eF) return 0;
		for (var fx = aV.fx[jz], k8 = fx.length, eI = Math.min(k8, 10), kA = 0, k9 = bC.hY(fx[kA] >> 2, jy), z = 0; z < eI; z++) {
			var kB = ao.ic(k8),
				eY = bC.hY(fx[kB] >> 2, jy);
			eY < k9 && (k9 = eY, kA = kB)
		}
		return fx[kA] >> 2
	}

	function k5(player, jy, iT, kE) {
		var kF;
		(kE === a1.eF || (kF = bC.hs(iT), kE = bC.hs(kE), bC.hY(jy, kF) < bC.hY(jy, kE))) && (jv[player] = iT)
	}
	this.dH = function() {
		jv.fill(a1.eF)
	}, this.iC = function(player) {
		var jy, k1, jz, iT = function(player) {
			var iT = jv[player];
			if (iT !== a1.eF) {
				if (b2.fd.kD(iT)) return iT;
				jv[player] = a1.eF
			}
			return a1.eF
		}(player);
		return function(player) {
			for (var jP = aa.jQ, k8 = aa.jO, eI = Math.min(k8, k8 < 17 && 5 === ao.ic(20) ? 1 : 16), fp = ao.ic(k8), ev = bE.ev, fx = aV.fx, fj = 0, z = 0; z < eI; z++) {
				var fo = jP[(z + fp) % k8];
				fo !== player && fx[fo].length && (ev[fj++] = fo)
			}
			bE.ep[0] = fj
		}(player), 0 !== bE.ep[0] && (0 < (k1 = k2(jz = k0(player, jy = bC.hx(player)), jy)) && bD.k3.k4(player, k1) ? (k5(player, jy, jz, iT), !0) : 0 < (jz = function(player, jy) {
			for (var eI = bE.ep[0], ev = bE.ev, kC = jv, fp = 0, z = 0; z < eI; z++) {
				var fo = ev[z],
					fo = kC[fo];
				fo !== a1.eF && b2.fd.kD(fo) && player !== fo && eB(player, fo) && (ev[fp++] = fo)
			}
			return 0 !== (bE.ep[0] = fp) ? k2(k0(player, jy), jy) : 0
		}(player, jy)) && bD.k3.k4(player, jz) ? (k5(player, jy, aQ.eA(jz << 2), iT), !0) : !!(0 < (k1 = k2(iT, jy)) && bD.k3.k4(player, k1)))
	}
}

function iB() {
	function kJ(player) {
		for (var ei = aV.ei[player], eI = ei.length, ej = Math.max(bB.ek(eI, 12), 1), eK = aQ.eK, h3 = ao.ic(eI), z = 0; z < eI; z += ej)
			for (var e7 = ei[(z + h3) % eI], eL = 3; 0 <= eL; eL--) {
				var eM = e7 + eK[eL];
				if (aQ.eN(eM)) return {
					dy: eM,
					id: aQ.e0(eM),
					fo: player
				}
			}
		return null
	}

	function kO(player, kQ) {
		var iU = b2.fd.kR(player, a2.jf[a2.iU[player]]);
		aV.fi[player].push(kQ.dy), aS.iQ(player, iU, kQ.fo), a3.iR(player, !0)
	}
	this.iC = function(player) {
		return !!bI.fy(bI.fz) && 0 !== aV.ei[player].length && function(player) {
			var kI = kJ(player);
			if (null === kI) return !1;
			! function(player) {
				for (var jQ = aa.jQ, jO = aa.jO, eI = Math.min(jO, 12), fp = ao.ic(jO), ev = bE.ev, ei = aV.ei, fj = 0, z = 0; z < eI; z++) {
					var fo = jQ[(z + fp) % jO];
					fo !== player && ei[fo].length && eB(player, fo) && (ev[fj++] = fo)
				}
				bE.ep[0] = fj
			}(player);
			var kL = function(dz) {
				for (var eI = bE.ep[0], ev = bE.ev, z = 0; z < eI; z++) {
					var kQ = kJ(ev[z]);
					if (null !== kQ && kQ.id === dz) return kQ
				}
				return null
			}(kI.id);
			return null !== kL ? (kO(player, kL), !0) : function(player, dz) {
				var eI = ac.hz.kP;
				if (0 !== eI)
					for (var dy = ac.hz.dZ[ao.ic(eI)] << 2, eK = aQ.eK, eL = ao.ic(4);;) {
						if (dy += eK[eL], aQ.eN(dy)) {
							if (aQ.e0(dy) === dz) return kO(player, {
								dy: dy,
								fo: a1.eF
							}), !0;
							break
						}
						if (!aQ.e9(dy)) break
					}
				return !1
			}(player, kI.id)
		}(player)
	}
}

function i2() {
	this.iC = function(player) {
		var e4 = function(player) {
			var eI = ac.hz.kP;
			if (0 === eI) return -1;
			for (var k8 = Math.min(eI, ac.performance.kT ? eI : 10), dZ = ac.hz.dZ, ib = bB.ek(ao.random() * eI, ao.value(100)), d = ib + k8, kU = ao.hy(aV.ht[player], aV.hu[player]), kV = ao.hy(aV.hv[player], aV.hw[player]), kA = -1, eY = bC
					.hZ(0, 0, bI.eT, bI.eU), z = ib; z < d; z++) {
				var fp = z % eI,
					kW = bC.ea(kU, kV, dZ[fp]);
				kW < eY && (eY = kW, kA = fp)
			}
			return -1 !== kA ? dZ[kA] : -1
		}(player);
		return -1 !== e4 && bD.k3.k4(player, e4)
	}
}

function i5() {
	this.kT = 0, this.dH = function() {
		this.kT = 0
	}, this.iC = function() {
		if (!this.kT && bU.jK() % 30 == 7 && b2.fd.kZ(75) && (ac.performance.kT = 1))
			if (a1.iN) {
				bW.kc(bW.kd());
				var ey = bE.ew,
					eI = bE.ep[0];
				if (0 !== eI)
					for (var ke = Math.min(100 + 10 * (eI - 1), 400), z = 0; z < eI; z++) a2.ju(ey[z], ke)
			} else a2.ju(kf[0], 100)
	}
}

function i0() {
	var kg, kh, ki = 300,
		kj = 300,
		kk = (this.kP = 0, this.dZ = new Uint32Array(512), !1);
	this.dH = function() {
		kk = !1, kh = kg = 0, this.kP = 0
	}, this.iC = function() {
		if (function() {
				var eI = ac.hz.kP;
				if (0 === eI) return 1;
				var dZ = ac.hz.dZ;
				if (bU.jK() % 35 == 6) {
					for (var z = eI - 1; 0 <= z; z--) aQ.e9(dZ[z] << 2) || (eI--, dZ[z] = dZ[eI]);
					ac.hz.kP = eI
				}
				return eI < dZ.length
			}() && !(ki <= kg)) {
			var z, t = bI.eT,
				ko = t - 2,
				eI = ko * (bI.eU - 2),
				kp = ki,
				dZ = ac.hz.dZ,
				k8 = ac.hz.kP,
				kq = dZ.length,
				fp = Math.min(kh + kp * ((1 + 19 * ac.performance.kT) * kj), eI);
			for (z = kh; z < fp; z += kp) {
				var dy = 4 * (z % ko + (bB.ek(z, ko) + 1) * t + 1);
				if (aQ.e9(dy) && (dZ[k8] = dy >> 2, ++k8 === kq)) {
					z += kp;
					break
				}
			}(kh = z) >= eI && (kh = ++kg), ac.hz.kP = k8
		}
	}, this.kn = function() {
		kk || (this.dH(), kk = !0)
	}
}

function kr() {
	aA.iC(), aU.iC(), aJ.ks(), aq.kt.iC()
}

function ku() {
	ar.iC(), a4.iC(), aT.iC(), av.iC(), a3.iC(), ac.iC(), bD.kt.iC(), aa.kv(), aI.iC(), ap.iC(), bH.iC(), bL.iC(), aU.iC(), aU.kw(), aJ.iC(), bF.iC(), aH.iC(), aC.iC(), aA.iC(), aw.iC(), aE.iC(), al.iC(), bS.iC(), bW.iC(), aq.kt.iC(), aq.kx.iC(), i
		.iC(), b1.iC(), bU.iC()
}

function ky() {
	a5.iC(), aK.iC(), aD.iC(), ai.iC(), b3.iC(), am.kz()
}

function l0() {
	aI.l1(!1), aC.l1(), aJ.l1(!1), aH.l1(), aE.l1(), al.l1(), aU.l1(!1), bW.l2()
}

function l3() {
	aU.l1(!1) && (bU.dO = !0), aq.kt.iC()
}

function bo() {
	var l4, l5, l6, l7, l8;

	function lB(lD) {
		for (var z = l4 - 1; 0 <= z; z--) 0 === l6[l5[z]] && aV.g6[l5[z]] >= lD && fK(l5[z])
	}

	function lA(player) {
		var dt;
		64 === l6[player] ? l6[player] = 6 : (dt = aV.g6[player], l6[player] = dt < 1e3 ? 3 : dt < 1e4 ? 2 : dt < 6e4 ? 1 : 0)
	}
	this.dH = function() {
		l7 = l8 = 0, l4 = 0, l5 = new Uint16Array(a1.eF), l6 = new Uint8Array(a1.eF)
	}, this.iC = function() {
		var z;
		for (l7 = bS.lE[13], l8 = aV.gK[a1.e2], z = l4 - 1; 0 <= z; z--) 64 === l6[l5[z]] ? lA(l5[z]) : 0 == l6[l5[z]]-- && (lA(l5[z]), fK(l5[z]));
		16e4 <= aV.g6[kf[0]] && (lB(16e4), 3e5 <= aV.g6[kf[0]]) && lB(3e5), aV.g6[a1.e2] > bS.lE[7] && (bS.lE[7] = aV.g6[a1.e2]), bS.lE[14] += l8 - aV.gK[a1.e2] + l7 - bS.lE[13]
	}, this.ff = function(player) {
		for (var eb, z = l4 - 1; 0 <= z; z--)
			if (player === l5[z]) {
				for (l4--, eb = z; eb < l4; eb++) l5[eb] = l5[eb + 1];
				return
			}
	}, this.iR = function(player, lF) {
		for (var z = l4 - 1; 0 <= z; z--)
			if (player === l5[z]) return;
		l5[l4++] = player, l6[player] = lF ? 2 : 64
	}
}

function bp() {
	var size, jB;
	this.dH = function() {
		size = a1.jk, jB = new Uint16Array(a1.eF);
		for (var jN = a1.jN, z = a1.jk - 1; 0 <= z; z--) jB[z] = jN + z
	}, this.iC = function() {
		for (var z = size - 1; 0 <= z; z--)
			if (0 === aV.lI[jB[z]]) {
				eb = void 0;
				var eb = z;
				size--, jB[eb] = jB[size]
			} else a2.iC(jB[z])
	}, this.lH = function(fo) {
		jB[size++] = fo
	}
}

function bq() {
	var lK, lL, lM, lN, lO, lP, lQ, lR, lS, lT, lU, lV, lW, lX = !1,
		lY = !1;

	function lZ(la) {
		lV = bU.ds, lM = lN = lL = 0, lO = (lW = 33) / la, lK = 1 / (la / lW / 4), lP = (an.t / 2 + hg) / hh, lQ = (an.ir / 2 + hi) / hh, lR = hh
	}

	function lh(z) {
		var lk; - 1 !== z && (z = bC.hm(bD.kt.lj[z]), lk = bC.eQ(z) - 10, z = bC.eS(z) - 10, a5.ld(lk, z, 19 + lk, 19 + z))
	}

	function lv(lx) {
		Math.abs(Math.log(lU / lR)) < .125 && (lU = lx * lR)
	}

	function lu(lk, ll, ly, lz) {
		lS = (lk + ly + 1) / 2, lT = (ll + lz + 1) / 2;
		ly = an.t / (ly - lk + 1), lk = an.ir / (lz - ll + 1);
		lU = .9 * (ly < lk ? ly : lk)
	}
	this.lb = function() {
		return lX
	}, this.lc = function() {
		lZ(1), this.ld(0, 0, bI.eT - 1, bI.eU - 1), a1.gd || a1.gR || this.le(a1.e2, 3e3, !0, .3)
	}, this.lf = function(player, lg) {
		lh(bD.gl.li(player, lg))
	}, this.le = function(player, la, lm, zoom) {
		a1.ln || lX && !lm && lY || (0 === aV.g6[player] ? lh(bD.gl.lo(player)) : (aF.lp = !1, lY = lm, lZ(la), function(player) {
			lS = (aV.ht[player] + aV.hu[player] + 1) / 2, lT = (aV.hv[player] + aV.hw[player] + 1) / 2
		}(player), function(zoom, player) {
			var hR = aV.hu[player] - aV.ht[player] + 1,
				player = aV.hw[player] - aV.hv[player] + 1,
				eb = an.t / hR,
				ec = an.ir / player,
				eb = (lU = eb < ec ? eb : ec, 0 !== zoom ? zoom : hR < 20 && player < 20 ? .5 : .9);
			lU *= eb, lv(7 / 8)
		}(zoom, player), lX = !0, af.ls()))
	}, this.lt = function(la) {
		a1.gR || a1.ln || (aF.lp = !1, lY = !1, lZ(la), lu(0, 0, bI.eT - 1, bI.eU - 1), lv(7 / 8), lX = !0, af.ls())
	}, this.ld = function(lk, ll, ly, lz) {
		lu(lk, ll, ly, lz), hh = lU, aF.m0(lS, an.t / 2), aF.m1(lT, an.ir / 2), bP.m2(), bU.dO = !0
	}, this.m3 = function() {
		return !(lX && lY || (lX = !1))
	}, this.iC = function() {
		var m6, m7, eL, mA;
		lX && (lL < .5 ? lN < lO && (lN += lO * lK, lM = lL) : 1 - lM < lL && (lN = (lN -= lO * lK) < lO * lK ? lO * lK : lN), lV = lV >= bU.ds ? bU.ds - 1 : lV, eL = bU.ds - lV, lL = 1e3 < eL || 1 < (lL += lN * eL / lW) ? 1 : lL, lV = bU.ds,
			eL = hh, m6 = hg, m7 = hi, eL = (hh = lR * Math.pow(lU / lR, lL)) / eL, mA = 1 - (lR * Math.pow(lU / lR, 1 - lL) - lR) / (lU - lR), aF.m0(lP + mA * (lS - lP), an.t / 2), aF.m1(lQ + mA * (lT - lQ), an.ir / 2), aU.zoom(eL, (m6 *
				eL - hg) / (1 - eL), (m7 * eL - hi) / (1 - eL)), bP.m2(), 1 <= lL && (lX = !1, bQ.mB = !0), bU.dO = !0)
	}
}

function bi() {
	var ed = b2.color;
	this.mC = ed.mD(0, 0, 0), this.mE = ed.mF(0, 0, 0, .7), this.mG = ed.mF(0, 0, 0, .5), this.mH = ed.mF(0, 0, 0, .85), this.mI = ed.mF(0, 0, 0, .75), this.mJ = ed.mF(0, 0, 0, .6), this.mK = ed.mF(0, 0, 0, .35), this.mL = ed.mD(255, 255, 255), this
		.mM = ed.mF(255, 255, 255, .3), this.mN = ed.mF(255, 255, 255, .6), this.mO = ed.mF(255, 255, 255, .4), this.mP = ed.mF(255, 255, 255, .25), this.mQ = ed.mF(255, 255, 255, .85), this.mR = ed.mF(255, 255, 255, .75), this.mS = ed.mF(255, 255,
			255, .15), this.mT = ed.mD(128, 128, 128), this.mU = ed.mF(64, 64, 64, .75), this.mV = ed.mF(88, 88, 88, .83), this.mW = ed.mF(60, 60, 60, .85), this.mX = ed.mF(80, 60, 60, .85), this.mY = ed.mD(30, 255, 30), this.mZ = ed.mD(0, 200, 0),
		this.ma = ed.mD(128, 255, 128), this.mb = ed.mF(10, 65, 10, .75), this.mc = ed.mF(0, 255, 0, .6), this.md = ed.mF(0, 255, 0, .5), this.me = ed.mF(0, 200, 0, .5), this.q = ed.mF(0, 100, 0, .75), this.mf = ed.mF(0, 60, 0, .8), this.mg = ed.mF(
			0, 255, 0, .3), this.mh = ed.mF(0, 180, 0, .6), this.mi = ed.mF(0, 120, 0, .85), this.mj = ed.mD(0, 120, 0), this.mk = ed.mF(0, 70, 0, .85), this.ml = ed.mD(255, 120, 120), this.mm = ed.mD(255, 160, 160), this.mn = ed.mD(255, 70, 70),
		this.mo = ed.mD(230, 0, 0), this.mp = ed.mF(220, 0, 0, .6), this.mq = ed.mF(255, 100, 100, .8), this.mr = ed.mF(100, 0, 0, .85), this.ms = ed.mF(60, 0, 0, .85), this.mt = ed.mF(200, 0, 0, .6), this.mu = ed.mF(120, 0, 0, .85), this.mv = ed.mD(
			255, 70, 10), this.mw = ed.mF(0, 60, 60, .85), this.mx = ed.mF(10, 60, 60, .9), this.my = ed.mF(0, 96, 96, .75), this.mz = ed.mD(160, 160, 255), this.n0 = ed.mF(0, 40, 90, .75), this.n1 = ed.mF(0, 0, 255, .6), this.n2 = ed.mD(200, 200,
			255), this.n3 = ed.mD(255, 120, 100), this.n4 = ed.mF(255, 255, 0, .5), this.n5 = ed.mF(255, 255, 150, .2), this.n6 = ed.mD(255, 255, 0), this.n7 = ed.mD(255, 255, 200), this.n8 = ed.mF(200, 200, 0, .6), this.n9 = ed.mF(140, 120, 0, .75),
		this.nA = ed.mF(180, 160, 40, .75), this.nB = ed.mF(70, 50, 20, .85), this.nC = ed.mF(30, 30, 0, .85), this.nD = ed.mF(255, 140, 0, .75), this.nE = ed.mF(0, 0, 0, 0)
}

function cj() {
	this.ge = new nF, this.fd = new nG, this.nH = new nI, this.nJ = new nK, this.jS = new nL
}

function nF() {
	this.gf = function(e4) {
		a1.jn ? b0.nH.gf(a1.e2, e4) : aq.nM.nN(e4)
	}, this.gp = function(hf, iT) {
		a1.jn ? b0.nH.gp(a1.e2, hf, iT) : aq.nM.nO(hf, iT)
	}, this.nP = function(hf, nQ) {
		a1.jn ? b0.nH.nR(a1.e2, hf, nQ) : aq.nM.nS(hf, nQ)
	}, this.gn = function(hf, e4) {
		a1.jn ? b0.nH.gn(a1.e2, hf, e4) : bD.gl.gm(a1.e2, e4) && aq.nM.nT(hf, e4)
	}, this.nU = function(lg, e4) {
		a1.jn ? b0.nH.nU(a1.e2, lg, e4) : bD.gl.nV(a1.e2, lg, e4) && aq.nM.nW(lg, e4)
	}, this.nX = function(iT) {
		a1.jn ? b0.nH.nX(a1.e2, iT) : aq.nM.nY(iT)
	}, this.nZ = function(na) {
		a1.jn ? b0.nH.nb(a1.e2, na) : aq.nM.nc(na)
	}, this.nd = function(ne) {
		a1.jn ? b0.nH.nd(a1.e2, ne) : aq.nM.nf(ne)
	}, this.ng = function() {
		a1.jn ? b0.nH.ng(a1.e2) : aq.nM.nh()
	}, this.ni = function() {
		a1.jn ? b0.nH.ni(a1.e2) : aq.nM.nT(1, 0)
	}, this.gi = function(hf, e4, iT) {
		a1.jn ? b0.nH.gi(a1.e2, hf, e4, iT) : aq.nM.nj(hf, e4, iT)
	}
}

function nL() {
	this.jT = function(player, nQ, iU) {
		b2.fd.nk(player, iU, nQ) && (aT.nP(player, nQ), nQ < a1.jN) && ao.random() < ao.value(10) && (ac.i8.iO[nQ] = 0)
	}, this.nl = function(player, nQ, iU) {
		b2.fd.nm(iU, nQ) && (b2.fd.fg(nQ, bE.eq[0]), bS.nn(player, nQ), aU.no(nQ, bE.eq[0]))
	}
}

function nG() {
	this.np = function(na, player) {
		aA.nZ(a1.e2, player, na), aq.nM.nq(na, player)
	}, this.nr = function(player) {
		aA.ns(player, 0), aq.nM.nt(player)
	}, this.nu = function(nv, player) {
		aA.nw(nv, player), aq.nM.nx(nv, player)
	}, this.ny = function() {
		a1.jn || a1.gR || aq.nz.ny()
	}
}

function nK() {
	this.iC = function(a0) {
		var id, ez, m3;
		for (b7.dH(a0), b7.o0 += 2, m3 = 8 * b7.size; b7.o0 + 8 <= m3;) id = b7.o1(4), ez = b7.o1(9), 0 === id ? this.o2(id, ez, b7.o1(22)) : 1 === id ? this.o2(id, ez, b7.o1(10), b7.o1(10)) : 2 === id ? this.o2(id, ez, b7.o1(10), b7.o1(9)) :
			3 === id || 4 === id ? this.o2(id, ez, b7.o1(10), b7.o1(22)) : 5 === id || 6 === id ? this.o2(id, ez, b7.o1(10)) : 7 === id ? this.o2(id, ez, b7.o1(1)) : 10 === id ? this.o2(id, ez, b7.o1(20), b7.o1(22)) : this.o2(id, ez)
	}, this.o3 = [], this.o4 = function() {
		for (var o6 = 0, o7 = 0, o8 = 0, o9 = 0, oA = 0, oB = 0, z = 0; z < 512; z++) o6 += aV.lI[z], o7 += aV.g6[z], o8 += aV.gK[z], o9 += bD.kt.oC[z];
		oA += bD.kt.oD, oB += aa.jO, this.o3.push(o8 % 1073741824 * 4 + (o6 + o7 + o9 + oA + oB) % 4)
	}, this.o2 = function(id, ez, f1, f3) {
		0 === id ? b0.nH.gf(ez, f1) : 1 === id ? b0.nH.gp(ez, f1, f3) : 2 === id ? b0.nH.nR(ez, f1, f3) : 3 === id ? b0.nH.gn(ez, f1, f3) : 4 === id ? b0.nH.nU(ez, f1, f3) : 5 === id ? b0.nH.nX(ez, f1) : 6 === id ? b0.nH.nb(ez, f1) : 7 === id ?
			b0.nH.nd(ez, f1) : 8 === id ? b0.nH.ng(ez) : 9 === id ? b0.nH.oE(ez) : 10 === id && b0.nH.gi(ez, f1 >> 10, f3, f1 % 1024)
	}
}

function nI() {
	this.gf = function(player, e4) {
		b2.fd.gT(0) && b2.fd.gU(player) && bC.hj(e4) && (b1.oF.oG(0, player, e4), a1.oH.iQ(player, e4))
	}, this.gp = function(player, hf, iT) {
		b2.fd.gT(1) && b2.fd.gU(player) && b2.fd.oI(player, iT) && b2.fd.oJ(player, hf, 12, 0) && b2.fd.oK(player, iT) && ((iT = aS.ii(player, bE.eE[0])) || aS.j1(player)) && (aV.oL[player]++, b1.oF.oG(1, player, hf, bE.eE[0]), ac.i6.iG(player,
			iT)) && (b2.fd.oM(player), bS.oN(player, hf), ac.i6.iM(player))
	}, this.nR = function(player, hf, nQ) {
		b2.fd.gT(1) && b2.fd.gU(player) && a1.iN && b2.fd.oI(player, nQ) && b2.fd.oO(player, nQ) && b2.fd.nk(player, b2.fd.he(player, hf), nQ) && (b1.oF.oG(2, player, hf, nQ), aT.nP(player, nQ))
	}, this.gn = function(player, hf, e4) {
		b2.fd.gT(1) && b2.fd.gU(player) && (0 === e4 && 1 === hf ? this.ni(player) : bC.hj(e4) && bD.kt.oD !== bD.kt.je && bD.kt.oC[player] !== bD.kt.oP && 0 !== aV.fx[player].length && b2.fd.oJ(player, hf, 32, 0) && bD.k3.k4(player, e4) && (b1
			.oF.oG(3, player, hf, e4), b2.fd.oM(player), bD.kt.oQ(player)))
	}, this.nU = function(player, lg, e4) {
		b2.fd.gT(1) && b2.fd.gU(player) && bC.hj(e4) && bD.gl.oR(player, lg) && bD.k3.oS(e4) && (b1.oF.oG(4, player, lg, e4), b2.fd.oT(player, 8), bD.kt.nU())
	}, this.nX = function(player, iT) {
		b2.fd.gT(1) && b2.fd.gU(player) && (iT = Math.min(iT, a1.eF), aS.ii(player, iT)) && (b1.oF.oG(5, player, iT), aS.oU(player, iT))
	}, this.nb = function(player, na) {
		(b2.fd.gT(1) || b2.fd.gT(2)) && b2.fd.gU(player) && (na = bB.oV(na, 0, 1023), b1.oF.oG(6, player, na), aU.oW(player, 0, na))
	}, this.nd = function(player, ne) {
		b2.fd.gT(1) && b2.fd.gU(player) && (b1.oF.oG(7, player, ne), al.oX(player, ne))
	}, this.ng = function(player) {
		(b2.fd.gT(0) || b2.fd.gT(1)) && b2.fd.gU(player) && bG.ng(player) && b1.oF.oG(8, player)
	}, this.oE = function(player) {
		bG.oE(player), b1.oF.oG(9, player)
	}, this.ni = function(player) {
		al.oY(player) && (b1.oF.oG(3, player, 1, 0), al.ni(player))
	}, this.gi = function(player, hf, e4, iT) {
		b2.fd.gT(1) && b2.fd.gU(player) && b2.fd.oI(player, iT) && b2.fd.oK(player, iT) && bC.hj(e4) && ab.dv.eC(player, e4) && (aS.ii(player, bE.eE[0]) || aS.j1(player)) && (b1.oF.oG(10, player, (hf << 10) + bE.eE[0], e4), iT = b2.fd.kR(player,
			hf), aV.fi[player].push(bE.eJ[0]), aS.iQ(player, iT, bE.eE[0]), a3.iR(player, !0))
	}
}

function oZ() {
	var ob;
	this.oa = [], this.ob = document.createElement("div"), this.oc = function(od, marginTop) {
		var title = document.createElement("h2");
		title.textContent = od, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.ob.appendChild(title)
	}, this.oe = function(od, marginBottom) {
		var og = document.createElement("p");
		return og.textContent = od, og.style.fontSize = "0.75em", og.style.lineHeight = "1.2em", og.style.marginBottom = marginBottom || "0", this.ob.appendChild(og), og
	}, this.oh = function(od) {
		var oi = document.createElement("p");
		return oi.textContent = od, oi.style.fontSize = "1em", oi.style.marginBottom = "0", oi.style.whiteSpace = "pre-wrap", oi.style.overflowWrap = "break-word", this.ob.appendChild(oi), oi
	}, this.oj = function(ok, fontSize) {
		var ob = document.createElement("div");
		ob.innerHTML = ok, ob.style.fontSize = fontSize || "1em", ob.style.lineHeight = "1.2em", this.ob.appendChild(ob)
	}, this.ol = function(om) {
		for (var on = om.on, eI = on.length, z = 0; z < eI; z++) this.ob.appendChild(on[z])
	}, this.oo = function(op) {
		this.oa.push(op), this.ob.appendChild(op.d)
	}, this.resize = function() {
		for (var eI = this.oa.length, z = 0; z < eI; z++) this.oa[z].resize && this.oa[z].resize()
	}, (ob = this.ob).style.position = "absolute", ob.style.height = "auto", ob.style.padding = "0.5em"
}

function oq(or, os) {
	var z, ob = document.createElement("div");

	function p0() {
		var z, p1, ir, fp, eL, ov = an.p2 * ob.offsetWidth,
			p3 = new Float64Array(function(ov) {
				var t = .25 * b2.ow.ox(.6) * an.oy;
				return Math.max(Math.floor(ov / t), 1)
			}(ov)),
			p4 = bR.p4,
			p5 = (ov - (p3.length + 1) * bR.gap) / (p3.length * an.p2);
		for (p3.fill(p4), z = 0; z < os.length; z++) p1 = (eL = os[z].ob).style, ir = b2.p6.min(p3), fp = p3.indexOf(ir), p1.top = b2.ow.p7(ir), p1.left = b2.ow.p7(p4 + fp * (p5 + p4)), p1.width = b2.ow.p7(p5), b2.ow.p8(eL, 5), p3[fp] += eL
			.offsetHeight + 3 * p4;
		ob.style.height = b2.ow.p7(b2.p6.max(p3) - 2 * p4)
	}
	for (this.ot = os, this.resize = function() {
			var z;
			for (z = 0; z < os.length; z++) os[z].resize();
			p0(), p0()
		}, ob.style.width = "100%", ob.style.maxWidth = "100%", or.style.lineHeight = "1.5em", or.style.overflowX = "hidden", or.style.overflowY = "auto", z = 0; z < os.length; z++) ob.appendChild(os[z].ob);
	or.appendChild(ob)
}

function l(title, p9, backgroundColor, pA, pB) {
	var pC = document.createElement("button");

	function pH() {
		if (!b9.pK()) {
			if (!1 !== pA) {
				var pL = b2.color.pM(backgroundColor);
				if (0 < pL[0] && pL[0] < 255 && pL[0] === pL[1] && pL[0] === pL[2]) return
			}
			this.style.backgroundColor = b2.color.pH(backgroundColor, 50)
		}
	}

	function pG() {
		p9(this) || pN(this)
	}

	function pJ() {
		this.style.backgroundColor = backgroundColor
	}

	function pI() {
		pN(this)
	}

	function pN(eL) {
		eL.style.backgroundColor = backgroundColor, eL.blur()
	}
	this.button = pC, this.pD = p9, this.pE = backgroundColor, this.pF = function(ed) {
			ed ? 1 === ed && (ed = p.mW) : ed = p.mH, this.pE = backgroundColor = ed, pC.style.backgroundColor = ed
		}, pC.innerHTML = title, pC.style.color = pB ? p.n6 : p.mL, pC.style.userSelect = "none", pC.style.outline = "none", pC.style.overflowWrap = "break-word", this.pF(backgroundColor), pC.style.border = "none", pC.style.font = "inherit", pC.style
		.fontSize = "1em", pC.style.padding = "0em 0.3em", pC.onclick = pG, pC.addEventListener("mouseover", pH), pC.addEventListener("mouseout", pI), pC.addEventListener("focus", pH), pC.addEventListener("blur", pJ)
}

function pO(pP, or) {
	var ob, z;
	for (this.resize = function() {
			for (var z = 0; z < pP.length; z++) b2.ow.p8(pP[z].button);
			ob.style.gap = ob.style.padding = b2.ow.p7(bR.p4)
		}, (ob = document.createElement("div")).style.display = "grid", ob.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", ob.style.overflowY = "auto", ob.style.gridAutoRows = "5.3em", ob.style.maxHeight = "100%", z = 0; z < pP
		.length; z++) pP[z].button.style.fontSize = "1.2em", ob.appendChild(pP[z].button);
	or.appendChild(ob)
}

function pR(pS, pT, pU) {
	this.eP = 0, this.eR = 0, this.t = 0, this.ir = 0, this.resize = function() {
		this.ir = Math.min(b2.ow.ox(pU || .5) * pS[1] * an.oy, an.ir - 2 * bR.gap), this.t = Math.min(this.ir * (pS[0] / pS[1]), an.t - 2 * bR.gap), this.ir = pS[1] * this.t / pS[0], this.eP = bR.gap + pT[0] * (an.t - this.t - 2 * bR.gap), this
			.eR = bR.gap + pT[1] * (an.ir - this.ir - 2 * bR.gap)
	}, this.pV = function() {
		return this.eP + .5 * this.t
	}
}

function pW(pX, title, pD) {
	function click() {
		var value = 1 - pX.value;
		this.textContent = (value ? "🟢 " : "⚪ ") + title, void 0 !== pX.o0 && bY.pY.pZ(pX.o0, value), pD(value)
	}
	var d;
	title = title || L(6), pD = pD || function() {}, this.d = document.createElement("p"), (d = this.d).textContent = (pX.value ? "🟢 " : "⚪ ") + title, d.style.margin = "0", d.style.marginBottom = "0.5em", d.style.cursor = "pointer", d
		.addEventListener("click", click)
}

function pa(or, ok) {
	var ob = document.createElement("div");
	this.pb = ob, this.resize = function() {
		ob.style.padding = b2.ow.p7(bR.p4), ob.style.lineHeight = b2.ow.p7(b2.ow.pc(.035))
	}, or.style.overflowX = "hidden", or.style.overflowY = "auto", ob.innerHTML = ok, or.appendChild(ob)
}

function pd(pe) {
	var ob = document.createElement("div");
	this.d = ob, this.pf = pe, this.resize = function() {
		for (var eI = pe.length, z = 1; z < eI; z++) b2.ow.p8(pe[z], 4)
	};
	var z, eI = pe.length;
	for (ob.style.width = "100%", ob.style.height = "2.7em", ob.style.marginTop = "0.6em", ob.style.border = "inherit", z = 0; z < eI; z++) pe[z].style.verticalAlign = "top", pe[z].style.width = (100 / eI).toFixed(2) + "%", pe[z].style.height =
		"100%", pe[z].style.fontSize = "0.75em", ob.appendChild(pe[z])
}

function pg(pX, type, ph, pi) {
	var d;
	this.d = document.createElement("input"), (d = this.d).type = type ? "number" : "text", d.id = "input" + (pX.title || pX.o0), d.value = pX.value, d.style.width = "100%", d.style.userSelect = "none", d.style.outline = "none", d.style.resize =
		"none", d.style.border = "inherit", d.style.font = "inherit", d.style.color = p.mL, d.style.backgroundColor = p.mE, d.style.fontSize = "1em", d.style.padding = "0.1em 0.2em", d.addEventListener("focus", function() {
			an.pj++, console.log("focus " + an.pj)
		}), d.addEventListener("blur", function() {
			an.pj--, console.log("blur " + an.pj), -1 !== pX.o0 && bY.pY.pZ(pX.o0, d.value)
		}), d.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== pX.o0 && bY.pY.pZ(pX.o0, d.value), ph ? ph() : d.blur())
		}), pi && d.addEventListener("input", function(d) {
			pi(d)
		})
}

function pk(or, data) {
	var eI = data.pl.length,
		pm = document.createElement("div"),
		pn = document.createElement("div"),
		po = document.createElement("div"),
		pp = new Array(eI),
		os = new Array(eI),
		pq = new Array(data.pr.length),
		ps = b2.color.mF(70, 70, 0, .35);

	function pH() {
		this.style.backgroundColor = b2.color.pH(ps, 160)
	}

	function pI() {
		this.style.backgroundColor = ps
	}

	function p0() {
		var eb;
		for (or.style.font = b2.ow.q5(0, b2.ow.q6(.026, .5, .03)), z = 1; z < pq.length; z++) b2.ow.p8(pq[z], 4);
		if (b2.ow.p8(pm, 2), eI) {
			for (var gh, q7 = pm.offsetWidth, q8 = po.offsetWidth, z = 0; z < pq.length; z++) gh = .01 * data.pv[z] * q8, pq[z].style.width = (100 * gh / q7).toFixed(2) + "%";
			var k8 = data.pl[0].length;
			for (z = 0; z < eI; z++)
				for (b2.ow.p8(pp[z], 2), eb = 1; eb < k8; eb++) b2.ow.p8(os[z][eb], 4)
		}
	}
	this.resize = function() {
			p0(), p0()
		}, or.style.display = "flex", or.style.flexDirection = "column", pn.style.overflowX = "hidden", pn.style.overflowY = "auto",
		function() {
			var eL, z, pl = data.pl,
				k8 = eI ? pl[0].length : 0;
			for (z = 0; z < eI; z++) {
				pp[z] = document.createElement("div"), pp[z].style.backgroundColor = function(z) {
					return z % 2 == 1 ? b2.color.mF(130, 130, 130, .35) : p.mK
				}(z), pp[z].style.width = "100%", pp[z].style.display = "flex", os[z] = new Array(k8);
				for (var eb = 0; eb < k8; eb++) os[z][eb] = eL = document.createElement("div"), eL.style.display = "flex", eL.style.justifyContent = "center", eL.style.wordBreak = "break-all", eL.style.padding = "0.4em 0em", eL.style.width = data.pv[
					eb] + "%", eL.innerHTML = pl[z][eb].el, 1 === pl[z][eb].dt && (eL.name = "" + z, eL.style.color = p.n6, eL.style.backgroundColor = ps, eL.addEventListener("mouseover", pH), eL.addEventListener("mouseout", pI), function(eL, px,
					py) {
					2147483647 !== py && eL.addEventListener("click", function() {
						b4.v(30), b4.w(30, px), b7.dH(b4.a0), this.style.backgroundColor = ps, i.j(8, i.pz, new q0(25, {
							q1: 0,
							px: b5.q2.q3(b5.q2.q4(5)),
							py: py
						}))
					})
				}(eL, pl[z][eb].px, pl[z][eb].py)), pp[z].appendChild(eL)
			}
			for (pm.style.display = "flex", pm.style.backgroundColor = b2.color.mF(0, 120, 0, .35), z = 0; z < pq.length; z++) pq[z] = eL = document.createElement("div"), eL.style.display = "flex", eL.style.justifyContent = "center", eL.style
				.wordBreak = "break-all", eL.style.padding = "0.4em 0em", eL.style.width = data.pv[z] + "%", eL.innerHTML = data.pr[z], pm.appendChild(eL)
		}();
	for (var z = 0; z < eI; z++) po.appendChild(pp[z]);
	pn.appendChild(po), or.appendChild(pm), or.appendChild(pn)
}

function q9() {
	var qD, z, qA = document.createElement("div"),
		qB = document.createElement("div"),
		qC = document.createElement("div"),
		po = document.createElement("div"),
		pP = [],
		pr = ["Best 1v1 Player", "Top Clan", "Leading Clan Member"],
		qE = [1, 0, 2];

	function qF(z) {
		i.j(8, 0, new q0(21, {
			qG: qE[z],
			qH: 0,
			qI: 10
		}))
	}
	for (this.show = function() {
			this.pZ(i.kt.qJ), document.body.appendChild(qA)
		}, this.qK = function() {
			document.body.removeChild(qA)
		}, this.pZ = function(qJ) {
			for (var z = 0; z < pP.length; z++) pP[qE[z]].button.innerHTML = pr[z] + "<br>" + qJ[z]
		}, this.resize = function() {
			var z, qL = bR.gap,
				ir = b2.ow.qM(.085),
				t = Math.min(4 * ir, an.t - 2 * qL),
				eI = pP.length;
			for (b2.ow.qN(qA, qL, an.ir - qL - ir, t, ir), b2.ow.p8(qA), b2.ow.p8(qB, 6), z = 0; z < eI - 1; z++) b2.ow.p8(pP[z].button, 6);
			for (z = 0; z < eI; z++) pP[z].button.style.fontSize = b2.ow.qO(.22 * ir);
			if (!qD) {
				if (!aP.qP()) return;
				(qD = aP.get(14)).style.width = "24%", qD.style.position = "absolute", qB.appendChild(qD)
			}
			qD.style.left = b2.ow.p7(0), qD.style.top = "7%"
		}, qA.style.position = "absolute", qB.style.width = "25%", qB.style.height = "100%", qB.style.backgroundColor = p.mH, qC.style.position = "absolute", qC.style.width = "75%", qC.style.height = "100%", qC.style.backgroundColor = p.mH, qC.style
		.top = qC.style.right = b2.ow.p7(0), qC.style.overflowX = "auto", qC.style.overflowY = "hidden", qC.style.whiteSpace = "nowrap", po.style.height = po.style.maxHeight = "100%", pP.push(new l("", function() {
			qF(0)
		}, p.ms)), pP.push(new l("", function() {
			qF(1)
		}, p.mf)), pP.push(new l("", function() {
			qF(2)
		}, p.mw)), z = 0; z < pP.length; z++) pP[z].button.style.height = "100%", po.appendChild(pP[z].button);
	qC.appendChild(po), qA.appendChild(qB), qA.appendChild(qC)
}

function qQ(pX, pG) {
	this.on = [];
	var qR = this.on;

	function click() {
		for (var z = 0; z < qR.length; z++) qR[z].textContent = qR[z].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var o0 = parseInt(this.name);
		void 0 !== pX.o0 && bY.pY.pZ(pX.o0, o0), pG && pG(o0)
	}
	for (var qS, eI = pX.qT.length, z = 0; z < eI; z++)(qS = document.createElement("p")).textContent = "⚪ " + pX.qT[z], qS.style.margin = "0", qS.name = "" + z, qS.style.cursor = "pointer", qS.style.fontSize = "1em", qS.addEventListener("click",
		click), qR.push(qS);
	qR[pX.value].textContent = qR[pX.value].textContent.replace("⚪", "🟢")
}

function qU(title, qV, qW) {
	var qA = document.createElement("div"),
		qX = document.createElement("div"),
		po = document.createElement("div"),
		qY = document.createElement("div"),
		qZ = document.createElement("div");
	this.qa = po, this.qb = qV, this.show = function() {
			!1 !== qW ? document.body.appendChild(qA) : (document.body.appendChild(qX), document.body.appendChild(qY))
		}, this.qK = function() {
			!1 !== qW ? document.body.removeChild(qA) : (document.body.removeChild(qX), document.body.removeChild(qY))
		}, this.qf = function() {
			var qg = b2.ow.pc(.1),
				qh = b2.ow.pc(.08 + .04 * (an.qi < 1));
			return {
				qg: qg,
				qh: qh,
				qj: an.ir / an.p2 - qg - qh
			}
		}, this.resize = function(qk) {
			var eI = qV.length,
				ql = this.qf(),
				qg = ql.qg,
				qh = ql.qh;
			for (qX.style.height = b2.ow.p7(qg), b2.ow.p8(qX, 2), qY.style.top = b2.ow.p7(an.ir / an.p2 - qh), qY.style.height = b2.ow.p7(qh), b2.ow.p8(qY, 8), po.style.top = b2.ow.p7(qg), po.style.height = po.style.maxHeight = b2.ow.p7(ql.qj), qX
				.style.font = b2.ow.q5(0, b2.ow.pc(.02, .3)), qY.style.font = b2.ow.q5(0, b2.ow.pc(.02, .7)), po.style.font = b2.ow.q5(0, b2.ow.pc(.02, .7)), z = 1; z < eI; z++) b2.ow.p8(qV[z].button, 4);
			for (var qm = 0, z = 0; z < eI; z++) qm += qV[z].button.offsetWidth;
			if (qk && qm < qY.offsetWidth)
				for (z = 0; z < eI; z++) qV[z].button.style.width = (100 * qV[z].button.offsetWidth / qm).toFixed(2) + "%";
			else
				for (z = 0; z < eI; z++) qV[z].button.style.width = "auto";
			qk || this.resize(!0)
		}, this.qn = function() {
			var ql = this.qf(),
				ed = an.p2;
			qo.fillStyle = p.mH, qo.fillRect(0, ed * ql.qg, an.t, ed * ql.qj)
		}, qA.style.position = "absolute", qA.style.top = "0", qA.style.left = "0", qA.style.width = "100%", qA.style.height = "100%", qX.style.position = "absolute", qX.style.top = "0", qX.style.left = "0", qX.style.width = "100%", qX.style
		.display = "flex", qX.style.backgroundColor = p.mH, qY.style.position = "absolute", qY.style.left = "0", qY.style.width = "100%", qY.style.overflowX = "auto", qY.style.overflowY = "hidden", qY.style.whiteSpace = "nowrap", qZ.style.height = qZ
		.style.maxHeight = "100%", po.style.position = "absolute", po.style.width = "100%", po.style.backgroundColor = p.mH,
		function() {
			for (var z = 0; z < qV.length; z++) qV[z].button.style.height = "100%", qV[z].button.style.padding = "0.0em 0.9em"
		}();
	for (var z = 0; z < qV.length; z++) qZ.appendChild(qV[z].button);
	qX.appendChild(function() {
		var qe = document.createElement("h1");
		return qe.textContent = title, qe.style.margin = "auto", qe.style.fontSize = 20 < title.length && an.ir > an.t ? "1.8em" : "2.3em", qe
	}()), qY.appendChild(qZ), !1 !== qW && (qA.appendChild(po), qA.appendChild(qX), qA.appendChild(qY))
}

function qp(name, placeholder, qq, pi) {
	var qr = document.createElement("textarea"),
		qs = (this.d = qr, !0);

	function qy() {
		qr.select(), document.execCommand("copy")
	}
	this.resize = function() {
			qr.style.padding = b2.ow.p7(bR.p4), qq && b2.ow.p8(qr, 5)
		}, this.qt = function(qu) {
			qr.value = qu
		}, this.qv = function() {
			return qr.value
		}, this.qw = function() {
			qr.select()
		}, this.clear = function() {
			qr.value = ""
		}, this.qx = function() {
			qs && navigator.clipboard ? (qr.select(), navigator.clipboard.writeText(qr.value).catch(function() {
				qs = !1, qy()
			})) : qy()
		}, qr.setAttribute("name", name), qr.setAttribute("id", name + "Field"), qr.setAttribute("autocomplete", "off"), placeholder && qr.setAttribute("placeholder", placeholder), qr.style.top = "0", qr.style.left = "0", qr.style.width = "100%", qr
		.style.height = "100%", qr.style.userSelect = "none", qr.style.outline = "none", qr.style.resize = "none", qr.style.border = "none", qr.style.color = p.mL, qr.style.backgroundColor = p.mE, qr.style.fontSize = "1.2em", pi && qr
		.addEventListener("input", function(d) {
			pi(d)
		}), qr.addEventListener("focus", function() {
			an.pj++
		}), qr.addEventListener("blur", function() {
			an.pj--
		})
}

function d2() {
	this.pD = new qz, this.dZ = new r0, this.pY = new r1, this.kt = new r2, this.dH = function() {
		this.dZ.dH(), (new r3).dH()
	}
}

function r0() {
	function r4(z, type, rA, em) {
		bY.dZ.data.push({
			o0: z,
			type: type || 0,
			value: rA || 0,
			rA: rA || 0,
			em: em || 0
		})
	}

	function r5(z, type, rA, em) {
		bY.dZ.data.push({
			o0: z,
			type: type,
			value: rA || "",
			rA: rA || "",
			em: em || 0
		})
	}

	function r6(m3) {
		for (var z = bY.dZ.data.length; z < m3; z++) bY.dZ.data.push(null)
	}
	this.data = [], this.dH = function() {
		r4(0, 1, 0, 5), r4(1, 1, 1), r4(2, 0), r5(3, 2), r4(4, 1), r5(5, 2, "Trebuchet MS", 1), r4(6, 0), r4(7, 0, 0), r4(8, 0), r4(9, 1, 1), r4(10, 1), r4(11, 1, 1), r5(12, 2, navigator.language), r6(100), r5(100, 2), r5(101, 2), r5(102, 2), r5(
			103, 2), r5(104, 2), r5(105, 2), r5(106, 2), r4(107), r4(108), r4(109), r5(110, 2), r4(111), r4(112), r4(113), r5(114, 2), r4(115), r5(116, 2), r4(117, 1), r5(118, 2, "", 2), r4(119, 1, 0, 1), r5(120, 2), r4(121, 1, ~~(262144 *
			Math.random())), r5(122, 2, "Player " + Math.floor(1e3 * Math.random())), r4(123), r5(124), r4(125, 1), r5(126, 2), r4(127, 0, 1), r4(128), r4(129), r4(130), r4(131), r4(132), r5(133, 2), r4(134, 0, 5), r5(135, 2), r5(136, 2), r4(
			137), r4(138), r4(139), r4(140), r4(141), r4(142), r4(143), r4(144), r5(145, 2), r4(146), r4(147), r5(148, 2), r4(149), r4(150, 0, 1), r5(151, 2), r4(152, 0, 5), r4(153, 1), r4(154, 1), r6(180), r4(180, 0), r4(181, 0)
	}, this.pZ = function(o0, value) {
		this.data[o0].value = value
	}, this.da = function(o0, value) {
		this.pZ(o0, value), bY.pD.save(o0, String(value)), bY.pD.save(o0, String(this.data[o0].em), !0)
	}, this.r7 = function() {
		for (var z = 0; z < this.data.length; z++) this.data[z] && (bY.pD.save(z, String(this.data[z].value)), bY.pD.save(z, String(this.data[z].em), !0))
	}, this.r8 = function(o0) {
		return Number(this.data[o0].value)
	}, this.r9 = function(o0) {
		return String(this.data[o0].value)
	}
}

function qz() {
	this.rB = function(o0, em) {
		return Number(this.rC(o0, em))
	}, this.rC = function(o0, em) {
		var el = null;
		return 0 === m.id ? m.rD && (el = m.rD.getItem((em ? "v" : "d") + o0)) : 1 === m.id ? el = m.rE.loadString((em ? 1e3 : 2e3) + o0) : 2 === m.id && (el = m.rF[(em ? "v" : "d") + o0]), el && 0 !== el.length ? el : null
	}, this.rG = function(eI, rH) {
		var ey = [],
			rI = rH ? "e" : "l";
		if (0 === m.id) {
			if (m.rD)
				for (z = 0; z < eI; z++) ey.push(m.rD.getItem(rI + z))
		} else if (1 === m.id)
			for (var rJ = rH ? 5e3 : 3e3, z = 0; z < eI; z++) ey.push(m.rE.loadString(rJ + z));
		else if (2 === m.id)
			for (z = 0; z < eI; z++) ey.push(m.rF[rI + z]);
		return ey
	}, this.save = function(o0, value, em) {
		var rK = (em ? "v" : "d") + o0;
		0 === m.id ? m.rD && bY.dZ.data[140].value && m.rD.setItem(rK, value) : 1 === m.id ? m.rE.saveString((em ? 1e3 : 2e3) + o0, value) : 2 === m.id && (m.rF[rK] = value, m.rL.postMessage(rK + " " + value))
	}, this.rM = function(ey, rH) {
		var eI = ey.length,
			rI = rH ? "e" : "l";
		if (0 === m.id) {
			if (m.rD && bY.dZ.data[140].value)
				for (z = 0; z < eI; z++) m.rD.setItem(rI + z, ey[z])
		} else if (1 === m.id)
			for (var rJ = rH ? 5e3 : 3e3, z = 0; z < eI; z++) m.rE.saveString(rJ + z, ey[z]);
		else if (2 === m.id)
			for (z = 0; z < eI; z++) m.rF[rI + z] = ey[z], m.rL.postMessage(rI + z + " " + ey[z])
	}
}

function r3() {
	this.dH = function() {
		! function() {
			var data = bY.dZ.data;
			0 === data[2].em && (an.ir > an.t || 0 !== m.id) && (data[2].value = data[2].rA = 1);
			0 === data[100].em && (data[100].value = data[100].rA = (0 === m.id ? "Player " : 1 === m.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var z, el, data = bY.dZ.data,
			eI = data.length;
		for (z = 0; z < eI; z++) data[z] && data[z].em === bY.pD.rB(z, !0) && (el = bY.pD.rC(z), data[z].value = null === el ? data[z].rA : 2 === data[z].type ? el : Number(el));
		bY.dZ.data[10].value = bY.dZ.data[10].rA
	}
}

function r2() {
	function rS(ey) {
		if (0 === ey.length) bY.pY.pZ(116, "");
		else {
			for (var rV = ey[0], z = 1; z < ey.length; z++) rV += ";" + ey[z];
			bY.pY.pZ(116, rV)
		}
	}
	this.rP = function() {
		bY.dZ.data[110].value.length && (bY.dZ.data[106].value = bY.dZ.data[110], bY.pY.pZ(110, ""), this.rQ())
	}, this.rQ = function() {
		var ey = bY.dZ.data[116].value.split(";");
		for (ey.length % 2 == 1 && ey.pop(), ey.unshift(bY.dZ.data[106].value), ey.unshift(bY.dZ.data[105].value), z = 2; z < ey.length; z += 2)
			if (ey[z] === ey[0]) {
				ey.splice(z, 2);
				break
			} for (var rR = [], z = 0; z < ey.length; z += 2) rR.push(ey[z]);
		rS(ey), bY.dZ.data[117].value = 0, bY.dZ.data[117].qT = rR
	}, this.rT = function(o0) {
		bY.dZ.data[117].qT.splice(o0, 1), bY.dZ.data[117].value = Math.min(o0, bY.dZ.data[117].qT.length - 1);
		var ey = bY.dZ.data[116].value.split(";");
		ey.splice(2 * o0, 2), rS(ey)
	}, this.rU = function(o0) {
		var ey = bY.dZ.data[116].value.split(";");
		return {
			px: ey[2 * o0],
			password: ey[2 * o0 + 1]
		}
	}, this.rW = function() {
		var el = bB.oV(bY.dZ.data[121].value, -1, 262143);
		return el = -1 === el ? ~~(262144 * Math.random()) : el
	}
}

function r1() {
	this.pZ = function(o0, value) {
		bY.dZ.data[o0].value !== value && (bY.dZ.da(o0, value), 0 === o0 ? (i.rX(), az.dH(), i.j(2)) : 1 === o0 ? an.dR(1) : 2 === o0 ? an.dR(0) : 5 === o0 && (b2.ow.rY(), an.dR(0)))
	}, this.rZ = function() {
		for (var data = bY.dZ.data, z = 0; z < 100; z++) data[z] && bY.dZ.da(z, data[z].rA);
		b2.ow.rY(), an.dR(1), az.dH()
	}, this.ra = function() {
		for (var data = bY.dZ.data, z = 0; z < data.length; z++) data[z] && bY.dZ.pZ(z, data[z].rA)
	}, this.rb = function() {
		for (var ec = bY.dZ, z = 128; z < 135; z++) ec.da(z, ec.data[z].rA)
	}, this.rc = function(data) {
		bY.pY.pZ(109, data.py), bY.pY.pZ(107, data.rd), bY.pY.pZ(108, data.re), bY.pY.pZ(112, data.rf), bY.pY.pZ(111, data.rg), bY.pY.pZ(113, data.rh), bY.pY.pZ(122, data.username), bY.pY.pZ(135, data.ri), bY.pY.pZ(136, data.rj), bY.pY.pZ(137,
			data.rk), bY.pY.pZ(138, data.rl), bY.pY.pZ(139, data.rm), bY.pY.pZ(141, data.rn), bY.pY.pZ(142, data.ro), bY.pY.pZ(143, data.rp), bY.pY.pZ(144, data.rq)
	}
}

function bm() {
	this.q2 = new rr, this.rs = new rt, this.dH = function() {
		this.q2.dH()
	}
}

function rt() {
	this.ru = function(size) {
		for (var rv = b7, ey = [], z = 0; z < size; z++) ey.push(String.fromCharCode(rv.o1(16)));
		return ey.join("")
	}, this.rw = function(od) {
		return 20 < (od = od.trim()).length ? od.substring(0, 20) : od
	}
}

function rr() {
	var rx = new Uint8Array(78);
	this.dH = function() {
		var z;
		for (rx[50] = 37, z = 0; z < 10; z++) rx[z + 3] = z + 1;
		for (z = 0; z < 26; z++) rx[z + 20] = z + 11, rx[z + 52] = z + 38
	}, this.ry = function(od) {
		return od.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.rz = function(od, size) {
		if ((od = this.ry(od)).length > size) return od.substring(0, size);
		for (; od.length < size;) od = "-" + od;
		return od
	}, this.s0 = function(od) {
		for (var s1 = rx, eI = od.length, ey = new Uint8Array(eI), z = 0; z < eI; z++) ey[z] = s1[od.charCodeAt(z) - 45];
		return ey
	}, this.s2 = function(s3) {
		b4.v(6 * s3.length), this.s4(s3), b7.dH(b4.a0)
	}, this.s4 = function(s3) {
		for (var eI = s3.length, t = b4, z = 0; z < eI; z++) t.w(6, s3[z])
	}, this.s5 = function(od) {
		this.s4(this.s0(od))
	}, this.s6 = function(od, size) {
		this.s4(this.s0(this.rz(od, size)))
	}, this.s7 = function(od, size) {
		for (var ey = this.s0(this.rz(od, size)), el = 0, lw = 1, z = ey.length - 1; 0 <= z; z--) el += lw * ey[z], lw *= 64;
		return el
	}
}

function s8() {
	var t, ir, s9;

	function sX(gh, eL, sV, sE, sQ) {
		eL = sW(gh, eL + 1 + 2 * sE & 3);
		! function(gh, sY) {
			return 1 < Math.abs(gh % t - sY % t) || 1 < Math.abs(sb(gh) - sb(sY))
		}(gh, eL) && 0 === sQ[eL << 2] && (sQ[eL << 2] = sV)
	}

	function sb(fo) {
		return Math.floor((fo + .5) / t) % ir
	}

	function sW(fo, eL) {
		return fo + s9[eL]
	}
	this.sA = function(od) {
		var z, sB, eI, sC, rv = b7;
		for (b6.q2.s2(b6.q2.s0(od)), bI.eT = t = rv.o1(12), bI.eU = ir = rv.o1(12), s9 = [-t, -1, t, 1], bI.sN = document.createElement("canvas"), bI.sN.width = bI.eT, bI.sN.height = bI.eU, bI.sJ = bI.sN.getContext("2d", {
				alpha: !1
			}), bI.sK = bI.sJ.getImageData(0, 0, bI.eT, bI.eU), bI.sO = bI.sK.data, b2.p6.sP(bI.sO), eI = rv.o1(12), sB = rv.o1(5), sC = sG(t * ir - 1), z = 0; z < eI; z++) ! function(k8, fo, sD, sE) {
			var z, eL, rv = b7,
				sQ = bI.sO,
				sR = fo,
				sS = fo,
				sT = 0,
				sU = 1 + sD,
				sV = 2 - sD;
			for (sQ[fo << 2] = sU, z = 0; z < k8; z++) eL = rv.o1(2), fo = sW(fo, eL), sQ[fo << 2] === sU ? sT % 2 == 1 && sX(sS, sT + 2 * sE + 3, sV, sE, sQ) : sQ[fo << 2] = sU, sX(fo, eL, sV, sE, sQ), sX(sS, eL, sV, sE, sQ), sS = fo, sT =
				eL;
			sW(fo, 0) === sR ? (sX(fo, 0, sV, sE, sQ), sX(sR, 0, sV, sE, sQ)) : sW(fo, 1) === sR && (sX(fo, 0, sV, sE, sQ), sX(sR, 2, sV, sE, sQ));
			0 === k8 && (sX(sR, 0, sV, sE, sQ), sX(sR, 2, sV, sE, sQ))
		}(rv.o1(sB), rv.o1(sC), 1 === rv.o1(1), 1 === rv.o1(1));
		var eP, eR, kB, sc, sd, se, sQ = bI.sO,
			sf = !0,
			sg = bI.ji.sh[bI.fz].sg,
			si = bI.ji.sh[bI.fz].si;
		for (eR = 0; eR < ir; eR++)
			for (sc = !0, sd = sf, eP = se = 0; eP < t; eP++) kB = 4 * eR * t + 4 * eP, se <= eP && 0 < sQ[kB] && (sd = 2 === sQ[kB], sc) && (sc = !1, sd !== sf) ? (sf = sd, se = eP + 1, eP = -1) : (sd ? (sQ[kB] = si[0], sQ[1 + kB] = si[1], sQ[
				2 + kB] = si[2]) : (sQ[kB] = sg[0], sQ[1 + kB] = sg[1], sQ[2 + kB] = sg[2]), sQ[3 + kB] = 255);
		bI.sJ.putImageData(bI.sK, 0, 0), bI.sL = !0, bI.sM.dH(), bU.dO = !0
	}
}

function br() {
	var eP, eR, t, ir, sj, sk, sl, sm, player, ey;

	function su() {
		return function() {
			var z;
			for (z = 0; z < 8; z++)
				if (eP = bB.ek(t * ao.random(), ao.value(100)), eR = bB.ek(ir * ao.random(), ao.value(100)), t2()) return 1;
			return
		}() || function() {
			var hR, hU, eb, ss, ec, sr;
			for (hR = bB.ek(t * ao.random(), ao.value(100)), hU = bB.ek(ir * ao.random(), ao.value(100)), eb = 40; 1 <= eb; eb--)
				for (ss = ir - eb; 0 <= ss; ss -= 40)
					for (eR = (ss + hU) % ir, ec = 40; 1 <= ec; ec--)
						for (sr = t - ec; 0 <= sr; sr -= 40)
							if (eP = (sr + hR) % t, t2()) return 1;
			return
		}()
	}

	function t2() {
		for (var fo, t4, gap = bB.ek(sj - sm, 2), t5 = sl + eR * sj + gap, t6 = sk + eP * sj + gap, t3 = t5 + sm - 1; t5 <= t3; t3--)
			for (t4 = t6 + sm - 1; t6 <= t4; t4--)
				if (fo = aQ.t0(t4, t3), !aQ.eD(fo) || aQ.iW(fo)) return;
		return 1
	}

	function sv(sr, ss) {
		sn(), t7(sr - 2, ss - 2)
	}

	function sn() {
		aV.lI[player] = 0, aV.gK[player] = 0, aV.g6[player] = aV.t8[player] = 0, aV.fi[player] = [], aV.fw[player] = [], aV.fx[player] = [], aV.ei[player] = [], aV.ht[player] = aV.hv[player] = aV.hu[player] = aV.hw[player] = 0
	}

	function t7(sr, ss) {
		var fo, z, tA, tB;
		for (aV.lI[player] = 1, player < a1.jN ? aV.gK[player] = a1.t9 : aV.gK[player] = a2.jd[a2.iU[player]], aV.ht[player] = sr + 10, aV.hv[player] = ss + 10, aV.hw[player] = aV.hu[player] = 0, tA = sr; tA < sr + 4; tA++)
			for (tB = ss; tB < ss + 4; tB++)(sr < tA && tA < sr + 3 || ss < tB && tB < ss + 3) && (fo = aQ.t0(tA, tB), aQ.eD(fo)) && (aV.ht[player] = tA < aV.ht[player] ? tA : aV.ht[player], aV.hu[player] = tA > aV.hu[player] ? tA : aV.hu[player], aV
				.hv[player] = tB < aV.hv[player] ? tB : aV.hv[player], aV.hw[player] = tB > aV.hw[player] ? tB : aV.hw[player], ey[aV.g6[player]] = fo, aV.g6[player]++, aQ.tC(fo, player));
		for (aV.t8[player] = aV.g6[player], z = aV.g6[player] - 1; 0 <= z; z--) aQ.tD(ey[z], player) ? (aQ.fl(ey[z], player), aV.fw[player].push(ey[z])) : aQ.tE(ey[z]) ? (aQ.fl(ey[z], player), aV.fx[player].push(ey[z])) : aQ.tF(ey[z]) && (aQ.fl(ey[
			z], player), aV.ei[player].push(ey[z]))
	}

	function t1(sr, ss) {
		for (var fo, t4, t3 = ss; ss - 6 < t3; t3--)
			for (t4 = sr; sr - 6 < t4; t4--)
				if (fo = aQ.t0(t4, t3), aQ.iW(fo)) return;
		return 1
	}
	this.dH = function() {
		var z, sr, ss;
		if (ey = new Array(12), sm = 6, sj = 10, t = bB.ek(bI.eT, sj), ir = bB.ek(bI.eU, sj), sk = bB.ek(bI.eT - sj * t, 2), sl = bB.ek(bI.eU - sj * ir, 2), a1.gd)
			for (z = 0; z < a1.jN; z++) player = z, sn(), aV.lI[player] = 1;
		if (ay.jh && ay.ji.so) {
			for (player = 0; player < a1.eF; player++)
				if (1 !== aV.lI[player]) {
					if (player < a1.st) {
						if (function() {
								var sr = ay.ji.so[player] + 1,
									ss = ay.ji.sz[player] + 1;
								if (3 < sr && sr < bI.eT - 5 && 3 < ss && ss < bI.eU - 5 && aQ.eD(aQ.t0(sr, ss)) && t1(sr + 3, ss + 3)) return sv(sr + 1, ss + 1), 1;
								return
							}()) continue;
						if (su()) {
							sr = sk + eP * sj + bB.ek(sj, 2), ss = sl + eR * sj + bB.ek(sj, 2), sv(sr, ss);
							continue
						}
					}
					sn()
				}
		} else ! function() {
			var sr, ss;
			for (player = 0; player < a1.eF; player++) 1 !== aV.lI[player] && (player < a1.st && su() ? (sr = sk + eP * sj + bB.ek(sj, 2), ss = sl + eR * sj + bB.ek(sj, 2), sv(sr, ss)) : sn())
		}();
		bS.lE[7] = aV.g6[a1.e2], bS.lE[8] = aV.gK[a1.e2]
	}, this.tG = function(iT, tH, tI) {
		var z, sr, ss, fo, eP, eR;
		for (player = iT, z = 0; z < 20; z++)
			for (sr = tH + z; tH - z <= sr; sr--)
				for (ss = tI + z; tI - z <= ss; ss--)
					if ((sr === tH + z || sr === tH - z || ss === tI + z || ss === tI - z) && 3 < sr && sr < bI.eT - 5 && 3 < ss && ss < bI.eU - 5 && aQ.eD(aQ.t0(sr, ss)) && t1(sr + 3, ss + 3)) {
						if (0 < aV.g6[player]) {
							for (eR = eP = fo = void 0, eP = aV.hu[player]; eP >= aV.ht[player]; eP--)
								for (eR = aV.hw[player]; eR >= aV.hv[player]; eR--) fo = 4 * (eR * bI.eT + eP), aQ.tK(player, fo) && (aQ.tL(fo), aV.g6[player]--);
							sn()
						}
						return t7(sr - 1, ss - 1), !0
					} return !1
	}, this.tM = function(iT) {
		player = iT, su() ? sv(sk + eP * sj + bB.ek(sj, 2), sl + eR * sj + bB.ek(sj, 2)) : sn()
	}
}

function tN() {
	ag.tO(), qo.setTransform(hh, 0, 0, hh, 0, 0), qo.imageSmoothingEnabled = hh < 3, qo.drawImage(bI.sN, aF.tP(), aF.tQ()), bF.tR.qn(), qo.drawImage(tS, aF.tP(), aF.tQ()), ag.qn(), bD.qn(), aU.qn(), (a1.ln ? (bW.qn(), b3) : (aA.qn(), aI.qn(), aE
	.qn(), b3.qn(), al.qn(), aJ.qn(), aF.qn(), aD.qn(), bW.qn(), aH.qn(), aC.qn(), a9.qn(), a8.qn(), aK.qn(), bT.qn(), ai)).qn(), i.qn()
}

function tT(tU, t, ir) {
	tU.clearRect(0, 0, t, ir), tU.fillStyle = p.mI, tU.fillRect(0, 0, t, ir)
}

function tV(tU, t, ir, tW) {
	tU.fillStyle = p.mL, tU.fillRect(0, 0, t, tW), tU.fillRect(0, 0, tW, ir), tU.fillRect(t - tW, 0, tW, ir), tU.fillRect(0, ir - tW, t, tW)
}

function tX(tU, eP, eR, gu, tW, fo, tY) {
	tU.fillStyle = p.mL;
	var fo = Math.floor(gu * fo),
		q8 = (fo += (fo - tW) % 2, Math.floor((fo - tW) / 2)),
		gu = Math.floor((gu - fo) / 2);
	tU.fillRect(eP + gu, eR + gu + q8, fo, tW), tY && tU.fillRect(eP + gu + q8, eR + gu, tW, fo)
}

function ta() {
	this.tb = null, this.dH = function(tb) {
		this.tb = tb, aA.tc(this.tb)
	}, this.td = function(te) {
		var hF = (this.tb[te].tf - this.tb[1 - te].tf) / 10,
			hF = 8 / (1 + Math.pow(2, hF / 32)),
			hF = Math.floor(10 * hF + .5),
			th = this.ti(this.tb[te].tf + hF + 1),
			hF = this.ti(this.tb[1 - te].tf - hF);
		0 === te ? aA.tk(this.tb, th, hF, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aA.tk(this.tb, hF, th, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.ti = function(tf) {
		return 16e3 <= (tf = tf < 0 ? 0 : 16e3 < tf ? 16e3 : tf) ? "Unknown" : (tf / 10).toFixed(1)
	}
}

function cN() {
	this.tl = new tm, this.sQ = new tn
}

function tn() {
	this.to = !1;
	this.ts = [], this.tt = 100;
	var lk, ll, gap, gu, tp, tr, tu = 0,
		tv = new Array(9),
		tw = [],
		tx = [],
		ty = 0,
		tz = 0,
		u0 = 0,
		u1 = 0;

	function uC() {
		tv.sort(function(eb, ec) {
			return ec.jV - eb.jV
		});
		for (var od = "" + tv[0].na, z = 1; z < 9; z++) od += "," + tv[z].na;
		for (z = 0; z < 9; z++) od += "," + tv[z].jV;
		bY.dZ.da(120, od)
	}
	this.dH = function() {
		for (var qE = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], z = 0; z < qE.length; z++) {
			var color = 6 === qE[z] ? p.mh : p.mJ;
			this.ts.push(b2.h0.u2(aP.get(3), qE[z], color))
		}
		for (z = 0; z < aY.tl.u3; z++) tx.push(aY.tl.u4 - aY.tl.u3 + z);
		for (z = 0; z < aY.tl.u5; z++) tx.push(aY.tl.u6 + z);
		var u7 = aY.tl.u8(bA.u7);
		for (z = 0; z < u7.length; z++) tx.push(u7[z]);
		! function() {
			var z, ey = bY.dZ.data[120].value.split(",");
			if (18 !== ey.length)
				for (z = 0; z < 9; z++) tv[z] = {
					na: 1015 + z,
					jV: 0
				};
			else
				for (z = 0; z < 9; z++) {
					var el = parseInt(ey[z]),
						ed = (el = 0 <= el && el < aY.tl.u4 ? el : 0, parseInt(ey[z + 9]));
					ed = 0 <= ed && ed < 1e3 ? ed : 0, tv[z] = {
						na: el,
						jV: ed
					}
				}
		}()
	}, this.show = function(kU, kV, uD) {
		var z;
		if (ty = kU, tz = kV, tu = uD || 0, this.to = !0, tw = [], 0 === tu)
			for (z = 0; z < 9; z++) tw.push(tv[z].na);
		else {
			var ec = 49 * tu,
				uD = ec - 49;
			for (uD >= tx.length && (tu = 1, uD = 0, ec = 49), z = uD = (ec = Math.min(ec, tx.length)) - 49; z < ec; z++) tw.push(tx[z])
		}
		tw.push(1024);
		uD = tw.length, gu = Math.floor((m.n.uE() ? .075 : .0468) * an.oy), gap = Math.floor(gu / 3), (u0 = 10 * (tp = gu + gap)) > an.t && (u0 = an.t, gap = (tp = u0 / 10) - (gu = 3 * tp / 4)), tr = bB.ek(uD, 10) + !!(uD % 10), (u1 = tr * tp) >
			an.ir && (u1 = an.ir, gap = (tp = u1 / tr) - (gu = 3 * tp / 4)), uD = .5 * gap;
		lk = Math.min(Math.max(kU - .5 * u0 + uD, uD), an.t - u0 + uD), ll = Math.min(Math.max(kV - .5 * u1 + uD, uD), an.ir - u1 + uD)
	}, this.gV = function(kU, kV, player) {
		if (!this.to) return !1;
		if (this.uG(kU, kV)) {
			kU = bB.oV(bB.ek(kU - lk + .5 * gap, tp), 0, 9);
			if ((kU += 10 * bB.oV(bB.ek(kV - ll + .5 * gap, tp), 0, 9)) >= tw.length) return a8.qK(), !0;
			kV = tw[kU];
			if (1024 === kV) return this.show(ty, tz, tu + 1), !0;
			! function(na) {
				for (var z = 0; z < 9; z++) tv[z].jV = Math.floor(.99 * tv[z].jV);
				for (z = 0; z < 9; z++)
					if (na === tv[z].na) return tv[z].jV = Math.min(tv[z].jV + 30, 999), uC();
				tv.splice(5, 0, {
					na: na,
					jV: Math.max(tv[4].jV, 30)
				}), tv.pop(), uC()
			}(kV), player === a1.e2 ? b0.ge.nZ(kV) : b0.fd.np(kV, player)
		}
		return a8.qK(), !0
	}, this.uG = function(kU, kV) {
		return !(kU < lk - .5 * gap || kV < ll - .5 * gap || lk + u0 - .5 * gap <= kU || ll + u1 - .5 * gap <= kV)
	}, this.qn = function() {
		qo.fillStyle = p.mI, qo.fillRect(lk - .5 * gap, ll - .5 * gap, u0, u1);
		for (var kB = .5 * bR.uH, eI = (qo.lineWidth = bR.uH, qo.strokeStyle = qo.fillStyle = p.mL, qo.strokeRect(lk - .5 * gap + kB, ll - .5 * gap + kB, u0 - 2 * kB, u1 - 2 * kB), qo.imageSmoothingEnabled = !0, tw.length), z = 0; z < eI; z++)
			this.uI(tw[z], qo, lk + z % 10 * tp, ll + bB.ek(z, 10) * tp, gu);
		qo.imageSmoothingEnabled = !1
	}, this.uI = function(na, h1, eP, eR, gu) {
		var dy;
		na >= 1024 - aY.tl.u3 ? (dy = gu / this.tt, h1.setTransform(dy, 0, 0, dy, eP, eR), h1.drawImage(this.ts[na - 1024 + aY.tl.u3], 0, 0), h1.setTransform(1, 0, 0, 1, 0, 0)) : (b2.ow.textAlign(h1, 1), b2.ow.textBaseline(h1, 1), h1.font = b2.ow
			.q5(0, .89 * gu), h1.fillText(aY.tl.uJ(na), eP + .5 * gu, eR + (.35 - b2.ow.uK + .56) * gu))
	}
}

function tm() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.u3 = 13, this.u5 = this.emojis.length, this.u6 = 676, this.u4 = 1024, this.uL = this.emojis.indexOf("💀"), this.uM = this.uL + 1, this.uN = this.emojis.indexOf("🥇"), this.uO = this.emojis.indexOf("😊"), this.uJ = function(el) {
		return el < this.u6 ? String.fromCharCode(55356, 56806 + bB.ek(el, 26), 55356, 56806 + el % 26) : this.emojis[Math.min(el - this.u6, this.u5 - 1)]
	}, this.u8 = function(od) {
		for (var eI = od.length - 2, ey = [], z = 0; z < eI; z++) {
			var hA = od.charCodeAt(z) - 56806,
				hB = od.charCodeAt(z + 2) - 56806;
			0 <= hA && hA < 26 && 0 <= hB && hB < 26 && (ey.push(26 * hA + hB), z += 3)
		}
		return ey
	}, this.uP = function(el) {
		return el < this.u6
	}, this.uQ = function(el) {
		return el >= 1024 - this.u3
	}, this.uR = function(el) {
		return el >= this.u6 && el < this.u6 + this.uM
	}
}

function bl() {
	this.q2 = new uS, this.rs = new uT, this.dH = function() {
		this.q2.dH()
	}
}

function uT() {
	this.s5 = function(od) {
		for (var eI = od.length, t = b4, z = 0; z < eI; z++) t.w(16, od.charCodeAt(z))
	}
}

function uS() {
	var uU = new Uint8Array(64);
	this.dH = function() {
		var z;
		for (uU[0] = 45, uU[37] = 95, z = 0; z < 10; z++) uU[z + 1] = 48 + z;
		for (z = 0; z < 26; z++) uU[z + 11] = 65 + z, uU[z + 38] = 97 + z
	}, this.q4 = function(uV) {
		for (var rv = b7, s3 = new Uint8Array(uV), z = 0; z < uV; z++) s3[z] = rv.o1(6);
		return s3
	}, this.q3 = function(s3) {
		for (var eI = s3.length, uW = uU, ey = [], z = 0; z < eI; z++) ey.push(String.fromCharCode(uW[s3[z]]));
		return ey.join("")
	}
}

function bs() {
	var uX, uY, uZ;
	uX = [32, 65, 191, 913, 931], uY = [64, 127, 688, 930, 1155], uZ = new Array(uX.length + 1);
	for (var z = 0; z < uZ.length; z++) {
		uZ[z] = 0;
		for (var eb = z - 1; 0 <= eb; eb--) uZ[z] += uY[eb] - uX[eb]
	}

	function uf(ed) {
		for (var z = uX.length - 1; 0 <= z; z--)
			if (ed >= uX[z] && ed < uY[z]) return z;
		return -1
	}
	this.rw = function(od) {
		return 0 !== (od = od.trim()).indexOf("Bot ") && 0 !== od.indexOf("[Bot] ") && function(od, uc, ud) {
			var eI = (od = od.trim()).length;
			if (eI < uc || ud < eI) return !1;
			for (var ed, ue = 0, z = 0; z < eI; z++)
				if (ed = od.charCodeAt(z), ue += 65 <= ed && ed <= 90 || 1040 <= ed && ed <= 1071 ? 1 : 0, -1 === uf(ed)) return !1;
			if (3 < ue && ue > Math.floor(eI / 2)) return !1;
			return !0
		}(od, 3, 20)
	}, this.ug = function(od) {
		for (var eI = (od = od.trim()).length, ey = [], z = 0; z < eI; z++) {
			var ed, fo = uf(ed = od.charCodeAt(z));
			ey.push(uZ[fo] + ed - uX[fo])
		}
		return ey
	}, this.sA = function(ey) {
		for (var ed, ec, od = "", eI = ey.length, z = 0; z < eI; z++)
			for (ec = 1; ec < uZ.length; ec++)
				if (ey[z] < uZ[ec]) {
					ed = uX[ec - 1] + ey[z] - uZ[ec - 1], od += String.fromCharCode(ed);
					break
				} return od
	}, this.uh = function(od) {
		for (var ey = this.ug(od), result = "", z = 0; z < ey.length; z++) result = (result += ey[z] < 10 ? "00" : ey[z] < 100 ? "0" : "") + ey[z].toString(10);
		return result
	}, this.ui = function(od) {
		for (var ey = new Array(Math.floor(od.length / 3)), z = 0; z < od.length; z += 3) ey[Math.floor(z / 3)] = parseInt(od.substring(z, z + 3));
		return this.sA(ey)
	}, this.uj = function(od) {
		for (var el, ey = [od.length], z = 0; z < od.length; z++) ey[z] = od.charCodeAt(z) - 48;
		var result = "";
		for (z = 0; z < od.length; z++) z === od.length - 1 || 51 < 10 * ey[z] + ey[z + 1] ? result += ey[z].toString() : (el = 10 * ey[z] + ey[z + 1], result += String.fromCharCode(el + (el < 26 ? 65 : 71)), z++);
		return result
	}, this.uk = function(od) {
		for (var ed, result = "", z = 0; z < od.length; z++) 48 <= (ed = od.charCodeAt(z)) && ed < 58 ? result += String.fromCharCode(ed) : 65 <= ed && ed < 75 ? result += "0" + (ed - 65).toString() : 75 <= ed && ed < 91 ? result += (ed - 65)
			.toString() : 97 <= ed && ed < 123 && (result += (ed - 71).toString());
		return result
	}, this.ul = function(od) {
		for (var eI = od.length, ey = [], z = 0; z < eI; z++)(ed = od.charCodeAt(z)) < 58 ? ey.push(od[z]) : (ed -= ed < 91 ? 65 : 71, ey.push(String(bB.ek(ed, 10))), ey.push(String(ed - 10 * bB.ek(ed, 10))));
		var eI = ey.length - 2,
			ed = 0,
			s3 = [];
		for (z = 0; z < eI; z += 3) s3[ed++] = parseInt(ey[z] + ey[z + 1] + ey[z + 2]);
		return s3
	}, this.um = function() {
		for (var h3, un = "", z = 0; z < 6; z++) h3 = 48 + ao.random() % 36, h3 += 58 <= h3 ? 39 : 0, un += String.fromCharCode(h3);
		return un
	}
}

function cu() {
	this.uo = new up, this.uq = new ur, this.result = new us, this.gl = new ut, this.uu = new uv, this.uw = new ux, this.uy = new uz, this.dH = function() {
		this.uu.dH()
	}, this.iC = function() {
		this.uu.iC()
	}
}

function ut() {
	this.v0 = function() {
		for (var eI = aa.jO, tb = aa.jQ, v1 = [], z = 0; z < eI; z++) {
			var fo = tb[z];
			aQ.v2(fo) && v1.push(fo)
		}
		return v1
	}, this.v3 = function() {
		for (var eI = aa.jO, tb = aa.jQ, dt = 0, g6 = aV.g6, z = 0; z < eI; z++) dt += g6[tb[z]];
		return dt
	}
}

function up() {
	function v5() {
		if (2 === a1.v9) return 1;
		al.vA(), a1.v9 = 2, a1.vB = a1.vC
	}

	function v7() {
		bH.uy.vD(), aK.show(1 === a1.vE, !1, 2 === a1.vE), bH.result.vD(), bH.uw.iC(), aA.vF(!0), aA.vG(247, 0), aA.vG(956, 0), aA.vG(957, 0), aI.l1(!0), aJ.l1(!0), al.l1(), b3.vH(), a1.gR && bU.vI.vJ(), bU.dO = !0, bQ.vK(), m.n.setState(0)
	}
	this.v4 = function() {
		v5() || (a1.v6 = 2, v7())
	}, this.v8 = function() {
		v5() || (a1.v6 = 1, v7())
	}
}

function ux() {
	this.iC = function() {
		var vT;
		2 === a1.v6 ? (aA.vL(0, 59), a5.lt(2700)) : a1.jl < 7 ? (vT = bV.vU[bW.kd()], vT = bV.vW[vT], aD.vX(L(7, [vT]), 2, 1, 12), aA.vY(0, L(8, [vT]), 40, 0, p.mL, p.mI, -1, !1), a5.lt(2700)) : 8 === a1.jl ? (a1.vE ? aA.vL(a1.vQ, 2) : aA.vL(1 -
			a1.e2, 3), a1.vR.td(a1.vQ), aA.vS(a1.vQ), a5.le(a1.vQ, 2700, !1, 0)) : 9 === a1.jl ? (aA.vZ(), a5.lt(2700)) : (aA.vS(a1.vQ), a5.le(a1.vQ, 2700, !1, 0))
	}
}

function us() {
	this.va = 0, this.v1 = null;
	var vc = this.vb = 0;
	this.vd = 0, this.vD = function() {
		var vh, fp, dt;
		bH.uu.ve || (bH.uu.ve = !0, a1.jn) || ((vh = this).v1 = bH.gl.v0(), vh.va = bX.vi.vj(), a1.jl < 7 && 2 !== a1.v6 ? vh.vb = bW.vk() : vh.vb = bH.gl.v3(), 8 === a1.jl && 1 === a1.v6 ? (fp = 1 - a1.vQ, dt = aV.g6[fp], aV.g6[fp] = 0, b0.fd
			.ny(), aV.g6[fp] = dt) : b0.fd.ny(), vc = .01 * aV.vo[a1.e2] / 50, vh.vd = 0, a1.jl < 7 ? bH.uq.vD(vh.v1) : 7 === a1.jl || 10 === a1.jl ? b2.fd.gU(a1.e2) && (fp = bH.result.va * (1 + a1.vr), 2 === a1.v6 ? bH.result.vd += fp *
			aV.g6[a1.e2] / bH.result.vb : kf[0] === a1.e2 && (bH.result.vd += fp)) : 8 !== a1.jl || 1 !== a1.vE || 0 === bY.dZ.data[107].value || 100 <= (dt = bY.dZ.data[108].value) || (bH.result.vd += .01 * (100 - dt) * 10), this.vg())
	}, this.vg = function() {
		b2.fd.gU(a1.e2) && (.01 <= vc && aA.vY(0, L(9, [vc.toFixed(2)]), 40, 0, p.ma, p.mI, -1, !1), .01 <= bH.result.vd) && aA.vY(0, L(10, [bH.result.vd.toFixed(2)]), 40, 0, p.ma, p.mI, -1, !1)
	}, this.vs = function() {
		var sR, vt;
		a1.jn || bH.uu.ve || (vt = aV, sR = a1.e2, 0 === vt.vu[sR]) || vt.iL[sR] < 1 || 2 * vt.oL[sR] > 3 * (vt.iK[sR] + vt.iL[sR]) || (vt = .01 * vt.vo[sR] / 50) < .01 || aA.vY(0, L(9, [vt.toFixed(2)]), 40, 0, p.ma, p.mI, -1, !1)
	}
}

function uv() {
	this.ve = !1, this.dH = function() {
		this.ve = !1
	}, this.iC = function() {
		7 <= a1.jl || this.ve || bU.jK() % 20 == 11 && b2.fd.kZ(90) && (a1.v6 = 1, bH.uy.vD(), bH.result.vD())
	}
}

function ur() {
	function vy(vw) {
		for (var hF = (1 + a1.vr) * bH.result.va / (1e5 * bH.result.vb), w3 = "", z = 0; z < vw.length; z++) {
			var w4 = vw[z].w5 * hF;
			w3 += "  " + vw[z].name + ": " + b2.w0.w6(1e5 * w4)
		}
		w3.length && (aA.vY(0, L(11), 45, 0, b2.color.mD(225, 240, 255), p.mI, -1, !1), aA.vY(0, w3.trim(), 45, 0, b2.color.mD(225, 240, 255), p.mI, -1, !1), a1.gR || aA.vY(700, L(12) + bA.w7, 736, 0, p.mL, p.mf, -1, !1))
	}
	this.vD = function(v1) {
		var vT = bV.vU[bW.kd()],
			v1 = (a1.vE && b2.fd.gU(a1.e2) && (bH.result.vd += (b2.w0.w1(aV.w2[a1.e2]) ? 2 : 1) * bH.result.va * (1 + a1.vr) * aV.g6[a1.e2] / bH.result.vb), function(tb) {
				var vw = [],
					username = aV.w2,
					eI = tb.length;
				loop: for (var z = 0; z < eI; z++) {
					var fo = tb[z],
						w8 = b2.w0.w1(username[fo]);
					if (w8) {
						for (var eb = vw.length - 1; 0 <= eb; eb--)
							if (vw[eb].name === w8) {
								vw[eb].w5 += aV.g6[fo];
								continue loop
							} vw.push({
							name: w8,
							w5: aV.g6[fo],
							w9: bV.eG[fo]
						})
					}
				}
				return vw.sort(function(eb, ec) {
					return ec.w5 - eb.w5
				}), vw
			}(v1));
		v1.length && (2 === a1.v6 ? vy(v1) : vy(function(vw, vT) {
			for (var z = vw.length - 1; 0 <= z; z--) bV.vU[vw[z].w9] !== vT && vw.splice(z, 1);
			return vw
		}(v1, vT)))
	}
}

function uz() {
	this.vD = function() {
		2 === a1.v6 ? a1.vE = 2 : 8 === a1.jl ? (aQ.v2(0) ? aQ.v2(1) ? a1.vQ = +(aV.g6[1] > aV.g6[0]) : a1.vQ = 0 : a1.vQ = 1, a1.vE = +(a1.vQ === a1.e2)) : a1.iN ? a1.vE = +(bV.eG[a1.e2] === bW.wB()) : (a1.vQ = kf[0], a1.vE = +(a1.vQ === a1.e2))
	}
}

function cz() {
	this.id = 0, this.em = 0, this.rD = null, this.rE = null, this.rF = null, this.rL = null, this.n = new wC, this.dH = function() {
		var self, em;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (em = Android.getVersion()) < 12 || (self.em = em, self.id = 1, self.rE = Android),
			function(self) {
				var em;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.rF = mwIOSdataX, self.rL = window.webkit.messageHandlers.iosCommandA, em = self
					.rF.version, self.em = em ? Number(em) : 0)
			}(this),
			function(self) {
				var rD;
				if (0 === self.id) {
					try {
						if (!(rD = window.localStorage)) return;
						rD.setItem("tls7", "1"), rD.removeItem("tls7")
					} catch (error) {
						return
					}
					self.rD = rD
				}
			}(this)
	}
}

function wC() {
	this.wG = function() {
		bY.pY.rZ(), bY.pY.ra(), aq.kt.close(0, 3255), 0 === m.id ? m.rD && m.rD.clear() : 1 === m.id ? m.rE.saveString(199, "") : 2 === m.id && m.rL.postMessage("clear")
	}, this.wH = function() {
		2 === m.id ? m.rL.postMessage("showConsentForm") : 1 === m.id ? m.rE.setState(7) : bK.db.showCMPScreen()
	}, this.wI = function() {
		this.setState(14)
	}, this.wJ = function() {
		var od = bY.dZ.r9(101),
			max = ("string" != typeof(od = "" === od ? function() {
				{
					if (2 === m.id) return m.rF.password;
					if (1 === m.id) return 12 <= m.em ? m.rE.loadString(22) : ""
				}
				return aR.wM(9)
			}() : od) && (od = ""), Math.floor(Math.pow(2, 48))),
			wL = Math.floor(parseInt(a7.uk(od)));
		return 0 < wL && wL < max ? bY.dZ.da(101, od) : (wL = Math.floor(1 + (max - 1) * Math.random()), bY.dZ.da(101, od)), wL
	}, this.uE = function() {
		return 1 === bY.dZ.r8(2)
	}, this.wN = function() {
		bY.dZ.da(102, "")
	}, this.setState = function(dr) {
		1 === m.id && 5 <= m.em && m.rE.setState(dr)
	}, this.o = function() {
		var wO;
		1 === m.id && 7 <= m.em ? m.rE.setState(5) : ((wO = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = wO.toString())
	}, this.dL = function() {
		1 !== m.id || m.em < 17 || m.rE.saveString(23, document.documentElement.outerHTML)
	}, this.df = function() {
		0 === m.id ? bK.db.dH() : 1 === m.id ? m.rE.prepareAd("1688441405") : 2 === m.id && (0 === m.em ? m.rL.postMessage("prepare ad 4500876070") : m.rL.postMessage("loadAds 4500876070"))
	}, this.du = function(dt) {
		return 0 === m.id ? !!bK.db.dp() : 1 === m.id ? 12 <= m.em && (m.rE.presentAd(dt), !0) : 2 === m.id && (0 === m.em ? m.rL.postMessage("show ad " + dt) : m.rL.postMessage("showAd"), !0)
	}, this.dQ = function() {
		2 === m.id && m.em < 23 && i.j(4, 1, new k("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bA.wP + "' target='_blank'>" + bA
			.wP + "</a>", !0, [new l(L(13), function() {
				i.j(0)
			}, p.mu)]))
	}
}

function dE() {
	function wS(d) {
		wa(d), i.j(4, 5, new k("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new l(L(13), function() {
				i.wb()
			}), new l("🔄 Reload", function() {
				m.n.o()
			}, p.q)]))
	}

	function wZ(title, w3, d) {
		wa(d), i.j(4, 5, new k("⚠️ " + title, {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [w3] || w3, !0))
	}

	function wa(d) {
		! function(d) {
			var dr = aN.wU();
			0 !== dr && (6 === dr ? aq.kt.wf(d) : 7 === dr ? (aj.wg(), aq.kt.close(aq.kt.wW, 3256)) : 8 === dr && a1.wh(!0))
		}(d), i.kt.we()
	}
	this.wQ = function(wR, d) {
		wR === 1 && __fx.customLobby.isActive() && __fx.customLobby.setActive(false);
		if (8 === i.pz && 0 === wR)
			if (4211 === d) wS(d);
			else {
				if (4480 === d) return bY.pY.rb(), void i.j(4, 0, new k(L(16), L(17), !0));
				i.j(4, 0, new k(L(14), L(15, [d]), !0))
			}
		else {
			var dr = aN.wU();
			if (6 === dr) {
				if (4211 === d) return void wS(d);
				if (4214 !== d) return void aM.wV(wR)
			} else {
				if (7 !== dr) return 8 === dr ? void(wR !== aq.kt.wX || a1.jn || 1 !== a1.v9 || a1.gR || aA.wY(L(15, [d]))) : void 0;
				if (wR !== aq.kt.wW) return
			}
			wZ("Error", d, d)
		}
	}, this.wc = function(d) {
		8 === aN.wU() ? a1.jn || 1 !== a1.v9 || aA.wY(L(15, [d])) : wZ("Error", d, d)
	}, this.h = function() {
		wa(3268)
	}
}

function co() {
	var wi, wj, wk = -15e3,
		wl = !1;

	function gV(d) {
		x5() || (wl = !0, x6(d, 1), aq.kt.x7(aq.kt.wX), x8(Math.floor(an.p2 * d.clientX), Math.floor(an.p2 * d.clientY)))
	}

	function wu(d) {
		wk = bU.ds, x6(d, 1), aq.kt.x7(aq.kt.wX), 0 < d.touches.length && (wi = Math.floor(an.p2 * d.touches[0].clientX), wj = Math.floor(an.p2 * d.touches[0].clientY), ah.wu(d) || x8(wi, wj))
	}

	function x8(eP, eR) {
		i.gV(eP, eR), 0 === a1.v9 ? aN.gV(eP, eR) : b3.x9(eP, eR) || bT.gV(eP, eR) || aK.gV(eP, eR) || a8.xA(eP, eR) || aC.gV(eP, eR) || a9.gV(eP, eR) || b9.xB(eP, eR) || al.gV(eP, eR) || a8.xC(eP, eR)
	}

	function wq(d) {
		x5() || (wl = !0, x6(d, 1), xD(Math.floor(an.p2 * d.clientX), Math.floor(an.p2 * d.clientY)))
	}

	function wv(d) {
		wk = bU.ds, x6(d, 1), 0 < d.touches.length && (wi = Math.floor(an.p2 * d.touches[0].clientX), wj = Math.floor(an.p2 * d.touches[0].clientY), ah.wv(d) || xD(wi, wj))
	}

	function xD(eP, eR) {
		i.wq(eP, eR), 0 === a1.v9 ? aN.wq(eP, eR) : (bJ.gO(eP, eR), bT.wq(eP, eR) || (a9.wq(eP, eR), a8.to() ? a8.wq(eP, eR) : aE.gW ? aE.wq(eP) && (bU.dO = !0) : (aI.wq(eP, eR), aF.lp && aF.wq(eP, eR) && (bU.dO = !0))))
	}

	function ws(d) {
		x5() || (x6(d, 1), xE(), 0 === a1.v9 ? (aN.click(-1024, -1024), aG.xF()) : (aI.xG(-1024, -1024), a9.wq(-1024, -1024), aE.xH(), aF.lp = !1))
	}

	function wr(d) {
		x5() || (x6(d, 1), xI(Math.floor(an.p2 * d.clientX), Math.floor(an.p2 * d.clientY), 2 === d.button), b9.wo && (b9.wo = !1, d.preventDefault()))
	}

	function click(d) {
		x5() || x6(d, 1)
	}

	function ww(d) {
		wk = bU.ds, x6(d, 1), d && d.touches && 0 < d.touches.length && 0 !== a1.v9 ? aF.lp = !1 : ah.xJ() || (xI(wi, wj, !1), b9.wo && (b9.wo = !1, d.preventDefault()))
	}

	function wx(d) {
		wk = bU.ds, x6(d, 1), xI(wi, wj, !1), b9.wo && (b9.wo = !1, d.preventDefault())
	}

	function wy(d) {
		ax.wy(d)
	}

	function wz(d) {
		ax.wz(d)
	}

	function x0(d) {
		x5() || x6(d, 0)
	}

	function xI(eP, eR, xK) {
		xE(), 0 === a1.v9 ? aN.click(eP, eR) : (aI.xG(eP, eR), bT.xG(), aE.xH(), aF.lp = !1, a8.click(eP, eR, xK) ? bU.dO = !0 : a9.wr(eP, eR))
	}

	function xE() {
		i.xE()
	}

	function wt(d) {
		var eP, eR, deltaY;
		x5() || (x6(d, 1), aq.kt.x7(aq.kt.wX), eP = Math.floor(an.p2 * d.clientX), eR = Math.floor(an.p2 * d.clientY), deltaY = d.deltaY, 1 === d.deltaMode && (deltaY *= 16), i.wt(eP, eR, deltaY), 0 === a1.v9 ? aN.wt(eP, eR, deltaY) : aI.wt(eP, eR,
			deltaY) || (aE.xL(eP, eR) ? aE.wt(deltaY) && (bU.dO = !0) : aF.wt(eP, eR, deltaY)))
	}

	function x1(d) {
		x6(d, 0)
	}

	function x6(d, id) {
		0 === id && i.to() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aN.wU() && d.preventDefault()
	}

	function x3(d) {
		if (__fx.keybindHandler(d.key)) return;
		x5() || ("ArrowLeft" === d.key ? af.xN(3) : "ArrowUp" === d.key ? af.xN(0) : "ArrowRight" === d.key ? af.xN(1) : "ArrowDown" === d.key ? af.xN(2) : "a" === d.key ? aE.xO(.9375) : "d" === d.key ? aE.xO(16 / 15) : "s" === d.key ? aE.xO(7 / 8) :
			"w" === d.key ? aE.xO(8 / 7) : "1" === d.key ? aE.xO(.75) : "2" === d.key ? aE.xO(7 / 8) : "3" === d.key ? aE.xO(.9375) : "4" === d.key ? aE.xO(31 / 32) : "5" === d.key ? aE.xO(32 / 31) : "6" === d.key ? aE.xO(16 / 15) : "7" === d
			.key ? aE.xO(8 / 7) : "8" === d.key ? aE.xO(4 / 3) : "+" === d.key ? 0 !== a1.v9 && aF.wt(Math.floor(an.t / 2), Math.floor(an.ir / 2), -200) : "-" === d.key ? 0 !== a1.v9 && aF.wt(Math.floor(an.t / 2), Math.floor(an.ir / 2), 200) :
			"c" === d.key ? 0 !== a1.v9 && bT.xP() : " " === d.key ? a1.v9 && bJ.gP(!1) : "b" === d.key && a1.v9 && bJ.gP(!0))
	}

	function x2(d) {
		x5() || bU.ds < 400 || "Enter" === d.key && i.xQ(1) || (8 !== aN.wU() && aN.xQ(d) ? bU.dO = !0 : "Escape" === d.key ? b9.en() : "ArrowLeft" === d.key || "a" === d.key ? af.xR(3) : "ArrowUp" === d.key || "w" === d.key ? af.xR(0) :
			"ArrowRight" === d.key || "d" === d.key ? af.xR(1) : "ArrowDown" === d.key || "s" === d.key ? af.xR(2) : "h" === d.key ? b3.xS(!a1.ln) : " " === d.key && a1.v9 && (a9.gS && a9.xT(), a1.gR) && b3.xU(!1))
	}

	function x4() {
		"hidden" === document.visibilityState ? 1 === a1.v9 && (a1.gR ? b3.xV() : !a1.jn || a9.gS || a1.gd || a9.xT()) : bU.dO = !0
	}

	function x5() {
		return wk + 15e3 > bU.ds
	}

	function resize() {
		an.xX()
	}
	this.wm = 0, this.wn = "", this.wo = !1, this.dH = function() {
		wp.addEventListener("mousedown", gV, {
			passive: !1
		}), wp.addEventListener("mousemove", wq, {
			passive: !1
		}), wp.addEventListener("mouseup", wr, {
			passive: !1
		}), wp.addEventListener("click", click, {
			passive: !1
		}), wp.addEventListener("mouseleave", ws, {
			passive: !1
		}), wp.addEventListener("wheel", wt, {
			passive: !1
		}), wp.addEventListener("touchstart", wu, {
			passive: !1
		}), wp.addEventListener("touchmove", wv, {
			passive: !1
		}), wp.addEventListener("touchend", ww, {
			passive: !1
		}), wp.addEventListener("touchcancel", wx, {
			passive: !1
		}), wp.addEventListener("dragover", wy), wp.addEventListener("drop", wz), wp.addEventListener("dblclick", x0), document.addEventListener("contextmenu", x1), document.addEventListener("keyup", x2), document.addEventListener("keydown",
			x3), document.addEventListener("visibilitychange", x4), window.addEventListener("resize", resize)
	}, this.xB = function(eP, eR) {
		return !!b3.gV(eP, eR) || !!(aI.gV(eP, eR) || aF.gV(eP, eR) || aE.gV(eP, eR) || aA.gV(eP, eR))
	}, this.xW = x5, this.pK = function() {
		return !wl || 0 < wk
	}, this.en = function() {
		if (!i.to()) return 8 === aN.wU() ? a1.ln ? void b3.xS(!1) : bT.to ? void bT.xT() : void a9.xT() : void(7 === aN.wU() ? aj.xY() : 6 === aN.wU() ? aM.xZ() : 2 === aN.wU() && aO.xa());
		i.xQ(2)
	}
}

function bh() {
	this.ow = new xb, this.p6 = new xc, this.fd = new xd, this.w0 = new xe, this.tU = new xf, this.xg = new xh, this.h0 = new xi, this.color = new xj, this.xk = new xl, this.dH = function() {
		this.ow.rY()
	}
}

function xc() {
	this.sP = function(ey) {
		ey.fill(0)
	}, this.xm = function(ey) {
		for (var eI = ey.length, z = 0; z < eI; z++) ey[z] = []
	}, this.xn = function(hA, xo) {
		for (var hB = bE.et, z = 0; z < 3; z++) hB[z] = xo * hA[z];
		return hB
	}, this.xp = function(hA, hB, xq) {
		for (var hF = 0, z = 0; z < 3; z++) hF += Math.abs(hA[z] - hB[z]);
		return xq <= hF
	}, this.xr = function(hA, xs) {
		for (var z = 0; z < 3; z++) hA[z] = bB.oV(hA[z] + xs, 0, 255);
		return hA
	}, this.xt = function(ey, qH, qI) {
		var z, xu = 0;
		for (qI = qI || ey.length - 1, z = qH = qH || 0; z <= qI; z++) xu += ey[z];
		return xu
	}, this.xv = function(ey, xw) {
		for (var z, xx, eI = ey.length, xy = [], eb = eI - 1; 0 <= eb; eb--) {
			for (z = xx = 0; z < eI; z++) xw(ey[z]) < xw(ey[xx]) && (xx = z);
			eI--, xy.push(ey[xx]), ey[xx] = ey[eI], ey.pop()
		}
		return xy
	}, this.min = function(ey) {
		var z, el, eI = ey.length;
		if (0 === eI) return 0;
		for (el = ey[0], z = 1; z < eI; z++) el = Math.min(el, ey[z]);
		return el
	}, this.max = function(ey) {
		var z, el, eI = ey.length;
		if (0 === eI) return 0;
		for (el = ey[0], z = 1; z < eI; z++) el = Math.max(el, ey[z]);
		return el
	}, this.xz = function(y0, y1, min) {
		for (var eI = y1[0], z = eI - 1; 0 <= z; z--) y0[z] < min && (y0[z] = y0[--eI]);
		y1[0] = eI
	}, this.y2 = function(ey, eI, value) {
		for (var z = 0; z < eI; z++) ey[z] -= value
	}, this.y3 = function(ey) {
		for (var eI = ey.length, z = 0; z < eI; z++)
			if ("string" != typeof ey[z]) return !1;
		return !0
	}
}

function xi() {
	this.u2 = function(y4, o0, y5) {
		var gu = y4.height,
			y6 = b2.ow.sF(gu, gu),
			h1 = b2.ow.getContext(y6);
		return function(t, h1, y5) {
			h1.fillStyle = y5, h1.beginPath(), h1.arc(t / 2, t / 2, .47 * t, 0, 2 * Math.PI), h1.fill()
		}(gu, h1, y5), h1.drawImage(y4, -o0 * gu, 0), y6
	}, this.y8 = function(y9) {
		var h1, gx, gu = y9.height;
		return y9.width === gu && (gx = (h1 = b2.ow.getContext(y9, !0)).getImageData(0, 0, gu, gu), b2.xg.yA(gx.data, gu, gu, .9), h1.putImageData(gx, 0, 0)), y9
	}
}

function xj() {
	this.yB = function(el) {
		return [el >> 12 & 63, el >> 6 & 63, 63 & el]
	}, this.yC = function(el) {
		for (var ey = this.yB(el), z = 0; z < 3; z++) ey[z] = ~~(4.05 * ey[z]);
		return ey
	}, this.yD = function(el) {
		el = this.yC(el);
		return b2.color.mD(el[0], el[1], el[2])
	}, this.yE = function(ey) {
		for (var z = 0; z < 3; z++) ey[z] = ~~(ey[z] / 4.04);
		return (ey[0] << 12) + (ey[1] << 6) + ey[2]
	}, this.mD = function(h3, qL, ec) {
		return "rgb(" + h3 + "," + qL + "," + ec + ")"
	}, this.mF = function(h3, qL, ec, eb) {
		return "rgba(" + h3 + "," + qL + "," + ec + "," + eb.toFixed(3) + ")"
	}, this.pM = function(ed) {
		for (var ey = ed.split("(")[1].split(","), es = (ey.length, bE.es), z = 0; z < 3; z++) es[z] = parseInt(ey[z]);
		return es
	}, this.pH = function(yF, eL) {
		for (var ey = yF.slice(yF.indexOf("(") + 1, yF.indexOf(")")).split(","), es = bE.es, z = 0; z < 3; z++) es[z] = bB.oV(parseInt(ey[z].trim(), 10) + eL, 0, 255);
		return 3 === ey.length ? this.mD(es[0], es[1], es[2]) : this.mF(es[0], es[1], es[2], parseFloat(ey[3].trim()))
	}, this.yG = function(ey) {
		for (var od = "#", z = 0; z < 3; z++) {
			var h3 = ey[z].toString(16);
			od += 1 === h3.length ? "0" + h3 : h3
		}
		return od
	}, this.yH = function(od) {
		var h3, qL;
		return od.length < 7 ? p.mC : (h3 = parseInt(od.slice(1, 3), 16), qL = parseInt(od.slice(3, 5), 16), od = parseInt(od.slice(5, 7), 16), this.mD(h3, qL, od))
	}
}

function xf() {
	this.yI = function(od, font, maxWidth) {
		if (qo.font = font, qo.measureText(od).width <= maxWidth) return od;
		for (var z = od.length - 1; 1 <= z; z--)
			if (od = od.substring(0, z), qo.measureText(od + "...").width <= maxWidth) return od + "...";
		return "..."
	}
}

function xl() {
	var yJ = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.yK = function(ds) {
		var yM, od = new Date(ds.getTime() - 6e4 * ds.getTimezoneOffset()).toUTCString();
		return od.length < 12 || (od = od.substring(5, od.length), 0 === (ds = ds.getTimezoneOffset())) ? od : (yM = (ds < 0 ? "+" : "-") + bB.ek(Math.abs(ds), 60), 0 == (ds = Math.abs(ds) % 60) ? od + yM : od + yM + ":" + (ds < 10 ? "0" : "") +
			ds)
	}, this.yN = function(ds) {
		var od = ds.toUTCString();
		return od.length < 12 ? od : function(ds) {
			return yJ[ds.getUTCDay()]
		}(ds) + ", " + od.substring(5, od.length - 4)
	}
}

function xb() {
	var yP = null;
	this.uK = 0, this.rY = function() {
		var el = bY.dZ.data[5].value;
		yP = "px " + el, "Trebuchet MS" !== el && (yP += ", Trebuchet MS"), this.uK = gt(32, 32, ["a", "b", "m"], 200, yP)
	}, this.sF = function(t, ir) {
		var ed = document.createElement("canvas");
		return ed.width = t, ed.height = ir, ed
	}, this.getContext = function(h0, alpha) {
		return h0.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(tU, t, ir) {
		return tU.getImageData(0, 0, t, ir)
	}, this.q5 = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + yP : 1 === type ? "bold " + size + yP : 2 === type ? "lighter " + size + yP : 3 === type ? "italic " + size + yP : 4 === type ? "oblique " + size + yP : 5 === type ? "small-caps " +
			size + yP : "small-caps bold " + size + yP
	}, this.textAlign = function(h1, id) {
		h1.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(h1, id) {
		h1.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.p8 = function(d, code, color) {
		color = this.p7(bR.yQ) + " solid " + (color || p.mL);
		5 === (code = code || 5) ? d.style.border = color : 4 === code ? d.style.borderLeft = color : 2 === code ? d.style.borderBottom = color : 6 === code ? d.style.borderRight = color : d.style.borderTop = color
	}, this.qN = function(d, eP, eR, t, ir) {
		d = d.style;
		d.left = this.qO(eP), d.top = this.qO(eR), d.width = this.qO(t), d.height = this.qO(ir)
	}, this.ox = function(el) {
		return 1 + el * m.n.uE()
	}, this.pc = function(lw, fp) {
		return lw * this.ox(void 0 === fp ? .5 : fp) * an.oy / an.p2
	}, this.qM = function(lw, fp) {
		return lw * this.ox(void 0 === fp ? .5 : fp) * an.oy
	}, this.q6 = function(lw, fp, yR) {
		return this.ox(fp) * Math.min(lw * an.oy, yR * an.t) / an.p2
	}, this.p7 = function(el) {
		return el.toFixed(1) + "px"
	}, this.qO = function(el) {
		return this.yT(el).toFixed(1) + "px"
	}, this.yT = function(el) {
		return el / an.p2
	}, this.yU = function(pr, yV) {
		for (var od = "<ul>", eI = pr.length, z = 0; z < eI; z++) od += "<li>" + pr[z] + ": <a href='" + yV[z] + "' target='_blank'>" + yV[z] + "</a></li>";
		return od += "</ul>"
	}, this.yW = function(yX) {
		return "<a href='" + yX + "' target='_blank'>" + yX + "</a>"
	}, this.yY = function(d) {
		navigator.clipboard && navigator.clipboard.writeText(d.value)
	}, this.yZ = function(d) {
		var dt = d.textContent;
		b2.w0.ya(dt, "✔") || (1 === dt.length ? d.textContent = "✔" : d.textContent = dt + " ✔", setTimeout(function() {
			d.textContent = dt
		}, 500))
	}, this.measureText = function(od) {
		return qo.measureText(od).width
	}
}

function xd() {
	this.gT = function(dr) {
		return 0 === dr ? 1 === a1.v9 && a1.gd : 1 === dr ? 1 === a1.v9 && !a1.gd : 2 === a1.v9
	}, this.gU = function(player) {
		return 0 !== aV.lI[player] && 2 !== aV.yb[player]
	}, this.yc = function(player) {
		return player === a1.e2 && 2 !== aV.yb[player]
	}, this.ik = function(player) {
		return player >= a1.jN || 2 === aV.yb[player]
	}, this.kD = function(player) {
		return 0 !== aV.lI[player]
	}, this.oI = function(yd, ye) {
		return yd !== ye
	}, this.fg = function(player, el) {
		var min;
		return el = this.yf(player, el), aV.gK[player] += el, aV.yg[player] && (min = Math.min(aV.yg[player], aV.gK[player]), aV.yg[player] -= min, aV.gK[player] -= min), el
	}, this.yf = function(player, el) {
		var yh = aV.gK[player];
		return el = Math.min(el, aV.g6[player] * a1.jU - yh), el = Math.min(el, a1.yi - yh), Math.max(el, 0)
	}, this.oJ = function(player, hf, yj, yk) {
		var yh = aV.gK[player],
			hf = bB.ek(yh * (hf + 1), 1024),
			yj = bB.ek(yj * yh, 1024),
			hf = Math.min(hf, yh - yj);
		return 10 === a1.jl && (hf = av.ym(player, hf)), bE.eq[0] = hf, bE.eq[1] = yj, yk <= hf
	}, this.nk = function(player, nR, nQ) {
		var player = aV.gK[player],
			yl = bB.ek(64 * player, 1024);
		return nR = Math.min(nR, player - yl), yl += player = this.yo(nR), nR = this.yf(nQ, nR -= player), bE.eq[0] = nR, bE.eq[1] = yl, 1 <= nR
	}, this.nm = function(nR, nQ) {
		var yn = this.yo(nR);
		return nR = this.yf(nQ, nR -= yn), bE.eq[0] = nR, bE.eq[1] = yn, 1 <= nR
	}, this.he = function(player, yp) {
		return bB.ek(aV.gK[player] * (yp + 1), 1024)
	}, this.yo = function(yq) {
		return bB.ek(Math.max(2142 - bU.jK(), 0) * yq, 2142)
	}, this.oT = function(player, yj) {
		aV.gK[player] -= bB.ek(yj * aV.gK[player], 1024)
	}, this.fe = function(player, yr) {
		var ec = aV.gK[player];
		return aV.gK[player] = Math.max(ec - yr, 0), aV.yg[player] = Math.min(aV.yg[player] + 5 * (Math.max(yr - ec, 0) >> 2), 5e4), yr
	}, this.kR = function(player, hf) {
		var gK = aV.gK,
			yh = gK[player],
			hf = bB.ek(yh * (hf + 1), 1024),
			yl = Math.max(bB.ek(yh, 10), 1e3);
		return (hf = Math.min(hf, yh - yl)) < 0 ? (gK[player] = 0, aV.yg[player] = Math.min(aV.yg[player] + 5 * (Math.max(-hf, 0) >> 2), 5e4), 0) : (10 === a1.jl && (hf = av.ym(player, hf)), gK[player] -= yl + hf, hf)
	}, this.oM = function(player) {
		aV.gK[player] -= bE.eq[0] + bE.eq[1]
	}, this.oK = function(player, iT) {
		return (iT = Math.min(iT, a1.eF)) < a1.eF && 0 === aV.lI[iT] && (iT = a1.eF), (bE.eE[0] = iT) === a1.eF || eB(player, iT)
	}, this.oO = function(player, nQ) {
		return 0 !== aV.lI[nQ] && !eB(player, nQ)
	}, this.ys = function(player, yt) {
		for (var fo, eI = aa.jO, vp = 0, yu = kf, z = 0; z < eI; z++)
			if (fo = yu[z], aQ.v2(fo)) {
				if (player === fo) return !0;
				if (++vp > yt) return !1
			} return !1
	}, this.kZ = function(fo) {
		var yv = a1.iN ? bW.vk() : aV.g6[kf[0]];
		return yv >= bB.ek(fo * a1.j7, 100)
	}
}

function xh() {
	this.yw = function(h0, yx, yy) {
		var t = h0.width,
			ir = h0.height,
			ed = b2.ow.sF(t, ir),
			h1 = b2.ow.getContext(ed, !0),
			h0 = (h1.drawImage(h0, 0, 0), h1.getImageData(0, 0, t, ir));
		return yx(h0.data, t, ir, yy), h1.putImageData(h0, 0, 0), ed
	}, this.yz = function(sQ, t, ir) {
		for (var eP = t - 1; 0 <= eP; eP--)
			for (var eR = ir - 1; 0 <= eR; eR--) {
				var z = 4 * (eP + eR * t);
				sQ[3 + z] = sQ[z], sQ[z] = sQ[1 + z] = sQ[2 + z] = 255
			}
	}, this.z0 = function(sQ, t, ir) {
		for (var eP = t - 1; 0 <= eP; eP--)
			for (var eR = ir - 1; 0 <= eR; eR--) {
				var z = 4 * (eP + eR * t);
				sQ[1 + z] > sQ[2 + z] + 10 && (sQ[3 + z] = sQ[z], sQ[1 + z] = sQ[2 + z])
			}
	}, this.z1 = function(sQ, t, ir, yy) {
		for (var gap = Math.floor(Math.min(t, ir) * yy), eP = 0; eP < t; eP++)
			for (var z, eR = 0; eR < ir; eR++)(eP < gap || eR < gap || t - gap <= eP || ir - gap <= eR) && (sQ[3 + (z = 4 * (eP + eR * t))] = 255 - 255 * (sQ[1 + z] - sQ[z]) / (255 - sQ[z]))
	}, this.z2 = function(sQ, t, ir, yy) {
		for (var eP = t - 1; 0 <= eP; eP--)
			for (var eR = ir - 1; 0 <= eR; eR--) {
				var z = 4 * (eP + eR * t);
				sQ[z] = yy[0], sQ[1 + z] = yy[1], sQ[2 + z] = yy[2]
			}
	}, this.z3 = function(sQ, t, ir, yy) {
		for (var gap = Math.floor(t * yy), eP = 0; eP < t; eP++)
			for (var z, eR = 0; eR < ir; eR++)(eP < gap || eR < gap || t - gap <= eP || ir - gap <= eR) && (sQ[z = 4 * (eP + eR * t)] = sQ[1 + z] = sQ[2 + z] = 0)
	}, this.z4 = function(sQ, t, ir) {
		for (var eR, z, eP = t - 1; 0 <= eP; eP--)
			for (eR = ir - 1; 0 <= eR; eR--) 200 < sQ[1 + (z = 4 * (eP + eR * t))] && sQ[1 + z] - 20 > sQ[z] && sQ[1 + z] - 20 > sQ[2 + z] ? sQ[z] + sQ[2 + z] < 40 ? sQ[3 + z] = 0 : (sQ[3 + z] = sQ[z], sQ[z] = 255, sQ[1 + z] = 255, sQ[2 + z] =
				255) : sQ[z] < 50 && sQ[1 + z] < 50 && sQ[2 + z] < 50 && (sQ[z] + sQ[1 + z] + sQ[2 + z] < 50 ? sQ[3 + z] = 180 : sQ[3 + z] = 180 + Math.floor(75 * (sQ[z] + sQ[1 + z] + sQ[2 + z] - 50) / 100))
	}, this.z5 = function(sQ, t, ir) {
		for (var eR, z, eP = t - 1; 0 <= eP; eP--)
			for (eR = ir - 1; 0 <= eR; eR--) sQ[1 + (z = 4 * (eP + eR * t))] > sQ[z] + 20 && sQ[1 + z] > sQ[2 + z] + 20 && sQ[z] + sQ[2] < 40 && (sQ[3 + z] = 255 - sQ[1 + z], sQ[z] = sQ[1 + z] = sQ[2 + z] = sQ[z])
	}, this.yA = function(sQ, t, ir, yy) {
		for (var h3 = t >> 1, eP = 0; eP < t; eP++)
			for (var eR = 0; eR < ir; eR++) Math.sqrt((eP - h3) * (eP - h3) + (eR - h3) * (eR - h3)) > yy * h3 && (sQ[4 * (eP + eR * t) + 3] = 0)
	}
}

function xe() {
	this.z6 = function(el) {
		var z, z7, z8, z9, zA;
		if (el < 0) return "-" + this.z6(Math.abs(el));
		if (el < 1e3) return el.toString();
		for (z7 = Math.floor(Math.log(el + .5) / Math.log(10)) + 1, z8 = Math.floor((z7 - 1) / 3), zA = (z9 = el.toString()).substring(z7 - 3, z7), z = 1; z < z8; z++) zA = z9.substring(z7 - 3 * (z + 1), z7 - 3 * z) + " " + zA;
		return z9.substring(0, z7 - 3 * z8) + " " + zA
	}, this.zB = function(fo, z7) {
		return fo.toFixed(z7) + "%"
	}, this.w6 = function(el, zC) {
		return el.toFixed(bB.oV(Math.floor((void 0 === zC ? 3 : zC) - Math.log10(Math.max(el, 1))), 0, 8))
	}, this.zD = function(el, lw, z7) {
		return (el * lw).toFixed(z7)
	}, this.w1 = function(username) {
		var eM, e7 = username.indexOf("[");
		return !(e7 < 0) && 1 < (eM = username.indexOf("]")) - e7 && eM - e7 <= 8 ? username.substring(e7 + 1, eM).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.w1;
	this.zE = function(od) {
		for (var eb = Math.floor(.5 * od.length + .5), m3 = Math.floor(.5 * (eb - 1)), z = 0; z < m3; z++)
			for (var ec = -1; ec < 2; ec += 2) {
				var ed = eb + ec * z;
				if (" " === od[ed]) return [this.zF(od.substring(0, ed)), this.zG(od.substring(ed))]
			}
		return [od.substring(0, eb), od.substring(eb)]
	}, this.zG = function(od) {
		for (var eI = od.length, z = 0; z < eI; z++)
			if (" " !== od[z]) return od.substring(z);
		return od
	}, this.zF = function(od) {
		for (var z = od.length - 1; 0 <= z; z--)
			if (" " !== od[z]) return od.substring(0, z + 1);
		return od
	}, this.zH = function(od, zI) {
		return od.split("(")[0] + "(🧈 " + zI.toFixed(2) + ")"
	}, this.startsWith = function(od, zJ) {
		return od.substring(0, zJ.length) === zJ
	}, this.ya = function(od, zJ) {
		var eI = od.length;
		return od.substring(eI - zJ.length, eI) === zJ
	}
}

function zK() {
	this.iQ = function(player, e4) {
		a6.tG(player, bC.eQ(e4), bC.eS(e4)) && (bU.dO = !0), a1.jn && this.iC()
	}, this.iC = function() {
		a1.gd = !1;
		for (var z = 0; z < a1.jN; z++) 0 !== aV.lI[z] && 0 === aV.g6[z] && a6.tM(z);
		0 !== aV.lI[a1.e2] ? (bS.lE[7] = aV.g6[a1.e2], bS.lE[8] = aV.gK[a1.e2], aE.zL(), aJ.zM(), a1.gR || a5.ld(aV.ht[a1.e2] - 5, aV.hv[a1.e2] - 5, aV.hu[a1.e2] + 5, aV.hw[a1.e2] + 5), ai.dH()) : aK.show(!1, !1, !1, !0), aA.zN(18), aU.zO(), aU
			.l1(!0), bF.kt.zP(), a8.qK(), a1.oH = null, bQ.zQ = !0, bQ.zR(), a1.jn && m.n.setState(1)
	}
}

function bj() {
	this.eF = 512, this.yi = 15e8, this.zS = 1e9, this.t9 = 512, this.fb = 2, this.e2 = 0, this.jN = 0, this.vC = 0, this.jk = 0, this.vB = 0, this.st = 512, this.jU = 150, this.jn = !0, this.gR = !1, this.v9 = 0, this.j7 = 0, this.ln = !1, this
		.gd = !1, this.zT = !1, this.iN = !1, this.zU = 0, this.jl = 0, this.vr = !1, this.oH = null, this.vR = null, this.zV = 30, this.v6 = 0, this.vE = 0, this.vQ = 0, this.zW = function(zX, zY, tb, zZ, za, zb) {
			this.ln = !1, this.gR = zb, this.jl = zZ, this.vr = za, this.iN = this.jl < 7 || 9 === this.jl, this.vC = this.jN = tb.length, this.jn = 1 === this.vC, this.jl = 10 === this.jl && this.jn ? 7 : this.jl, this.jl = 8 === this.jl && 2 !==
				this.jN ? 7 : this.jl, this.zU = 9 === this.jl ? 2 : this.jl + 2, this.zV = this.jN <= 2 ? 30 : this.jN <= 50 ? 40 : 50, ay.jh && !ay.ji.zc ? this.zT = this.gd = !1 : this.zT = this.gd = this.iN || this.jN < 100, this.oH = this.gd ?
				new zK : null, this.jn ? this.st = aO.zd() : this.st = this.eF, this.jk = this.st - this.jN, this.vB = 0, this.e2 = zY, this.v6 = 0, this.vE = 0, this.vQ = 0, ao.ze(zX), ap.dH(), aV.dH(tb), b0.nJ.o3 = [], bV.dH(tb), this.v9 = 1, bS
				.dH(), zf(), aQ.dI(), ad.zg(), bQ.dH(), aT.dH(), aQ.dH(tb), ag.dH(), bC.dH(), bD.dH(), ac.dH(), bH.dH(), bL.zh(), a2.dH(), aX.v(), a6.dH(), aa.zi(), b1.dH(zX, tb, zZ, za), bW.dH(), bF.dH(), bT.dH(), zj.putImageData(zk, 0, 0), aI.dH(),
				aF.dH(), aE.dH(), b3.dH(), al.dH(), aH.dH(), aJ.dH(), a9.dH(), aD.dH(), aA.dH(), aC.dH(), a8.dH(), aK.dH(), a3.dH(), a4.dH(), fJ(), aS.dH(), aU.dH(), av.dH(), aw.dH(), ar.dH(), 8 === this.jl ? (this.vR = new ta, this.vR.dH(tb)) : this
				.vR = null, bU.zh(), a5.lc(), 0 === aV.lI[a1.e2] && aK.show(!1, !0), aU.l1(!0), ai.dH(), bU.dO = !0, this.gR || this.jn && this.gd || m.n.setState(1)
		}, this.wh = function(zm) {
			aq.kt.zn(), this.v9 = 0, bU.zo(), m.n.setState(0), zm || bK.dd.show(), aN.setState(0), i.j(5, 5)
		}, this.zp = function() {
			return this.gR ? a9.gS || !b3.zq : this.jn && (a9.gS || this.gd)
		}, this.zr = function() {
			return 1 === this.v9 && !this.gd
		}
}

function dD() {
	this.uH = 0, this.gap = 0, this.yQ = 0, this.p4 = 0, this.dH = function() {
		this.resize()
	}, this.resize = function() {
		this.uH = .0022 * b2.ow.ox(.5) * an.oy, this.yQ = this.uH / an.p2, this.gap = Math.max(Math.floor((m.n.uE() ? .0114 : .01296) * an.oy), 2), this.p4 = this.gap / an.p2
	}
}

function dC() {
	this.zs = function() {
		return m.n.uE() ? 2 : 1
	}
}

function bt() {
	var pP, eP, eR, zt, zu, zv, ds, player, zw, gap, zoom, nv, zx;

	function a07(player) {
		for (var z = nv.length - 1; 0 <= z; z--)
			if (nv[z] === player) return 1
	}

	function a05(a02) {
		var z, eI;
		if (-1 !== a02)
			for (eI = pP.length, z = 0; z < eI; z++)
				if (pP[z].to && pP[z].eP + 1 === a02 % 4 && pP[z].eR + 1 === a02 >> 2) return z;
		return -1
	}

	function a03(kU, kV) {
		var qL = gap / 2;
		return kU < eP - zt - 3 * qL || eP + 3 * zt + 5 * qL < kU || kV < eR - zt - 3 * qL || eR + 2 * zt + 3 * qL < kV ? -1 : 4 * (kV < eR - qL ? 0 : kV < eR + zt + qL ? 1 : 2) + (kU < eP - qL ? 0 : kU < eP + zt + qL ? 1 : kU < eP + 2 * zt + 3 *
			qL ? 2 : 3)
	}
	this.zy = function() {
		var z, ec, a01 = [p.mh, p.mt, p.mJ, p.n8, p.n1];
		for (pP = new Array(9), z = 0; z < 9; z++) pP[z] = {
			id: z,
			to: !1,
			kA: 0,
			h0: [],
			eP: 0,
			eR: 0
		};
		for (pP[0].colors = [0, 1, 2, 3], pP[0].eP = 0, pP[0].eR = 0, pP[1].colors = [0, 1, 4], pP[1].eP = 1, pP[1].eR = 0, pP[2].colors = [0, 2], pP[2].eP = -1, pP[2].eR = 0, pP[3].colors = [0], pP[3].eP = 0, pP[3].eR = 0, pP[4].colors = [0, 2],
			pP[4].eP = 1, pP[4].eR = 1, pP[5].colors = [3], pP[5].eP = 0, pP[5].eR = -1, pP[6].id = 20, pP[6].colors = [0], pP[6].eP = 1, pP[6].eR = -1, pP[7].id = 21, pP[7].colors = [0], pP[7].eP = 0, pP[7].eR = 1, pP[8].id = 16, pP[8]
			.colors = [0], pP[8].eP = 0, pP[8].eR = 0, z = 0; z < 9; z++)
			for (ec = 0; ec < pP[z].colors.length; ec++) pP[z].h0.push(function(id, y5) {
				if (id < 20) return b2.h0.u2(aP.get(3), id, y5);
				var y5 = aP.get(3).height,
					y6 = b2.ow.sF(y5, y5),
					h1 = b2.ow.getContext(y6);
				20 === id ? h1.drawImage(aP.get(18), 0, 0) : 21 === id && aY.sQ.uI(aY.tl.u6 + aY.tl.uO, h1, 0, 0, y5);
				return y6
			}(pP[z].id, a01[pP[z].colors[ec]]))
	}, this.a00 = function() {
		return pP
	}, this.dH = function() {
		nv = [], eP = eR = ds = 0, zu = zv = -1e3, this.resize()
	}, this.resize = function() {
		zt = Math.floor((m.n.uE() ? .075 : .0468) * an.oy), zoom = zt / aP.get(3).height, gap = Math.floor(zt / 3)
	}, this.xA = function(kU, kV) {
		return !!this.to() && (bU.dO = !0, !!aY.sQ.gV(kU, kV, player) || (kU = function(kU, kV) {
			zv = zu = -1e3;
			var a04 = a05(a03(kU, kV));
			if (-1 === a04) return 0;
			if (1 !== pP[a04].colors[pP[a04].kA])
				if (5 === a04) {
					if (! function() {
							var dt = performance.now();
							zx + 4e3 < dt && (nv = []);
							zx = dt
						}(), a07(player)) return 1;
					nv.push(player), 16 < nv.length && nv.shift()
				} else if (6 === a04) {
				for (var z = nv.length - 1; 0 <= z; z--) 0 === aV.lI[nv[z]] && nv.splice(z, 1);
				0 < nv.length && (aw.a08(1, nv, !0) && b0.fd.nu(nv, player), nv = [])
			} else if (2 === a04) b0.ge.nP(aE.gj(), player);
			else if (3 === a04) a1.gd && b0.ge.gf(zw);
			else if (0 === a04)
				if (0 === pP[0].kA) {
					if (a1.zT && aJ.a09() < 350) return 1;
					b0.ge.gp(aE.gj(), player)
				} else ar.gr(player, aE.gj());
			else if (1 === a04) bL.a0A(), b0.ge.gn(aE.gj(), zw);
			else {
				if (7 === a04) return bL.a0B(), aY.sQ.show(kU, kV), 2;
				if (4 === a04) aw.a08(0, [player], !0) && b0.fd.nr(player);
				else {
					if (8 !== a04) return 0;
					b0.ge.gi(aE.gj(), zw, player)
				}
			}
			return 1
		}(kU, kV), this.qK(), 2 === kU && (aY.sQ.to = !0), 0 < kU))
	}, this.xC = function(kU, kV) {
		this.to() || (zu = kU, zv = kV, ds = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bC.gZ(mouseX),
			coordY = bC.gb(mouseY),
			coord = bC.eg(coordX, coordY),
			point = bC.e8(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(kU, kV, dy) {
			aQ.eD(dy) || -1 === (kU = bD.gl.a0O(kU, kV)) ? aA.a0N(dy) : aA.a0P(kU)
		}(mouseX, mouseY, point))
	}
	this.click = function(kU, kV, xK) {
		var gY = bC.gZ(kU),
			ga = bC.gb(kV),
			e4 = bC.eg(gY, ga),
			dy = bC.e8(e4);
		if (!bC.gc(gY, ga)) return !1;
		gY = (m.n.uE() ? .025 : .0144) * an.oy, ga = performance.now();
		if (Math.abs(kU - zu) > gY || Math.abs(kV - zv) > gY || ds + 500 < ga) return !1;
		if (ds = ga, xK && ! function(kU, kV, dy) {
				aQ.eD(dy) || -1 === (kU = bD.gl.a0O(kU, kV)) ? aA.a0N(dy) : aA.a0P(kU)
			}(kU, kV, dy), a9.gS || this.to() || !b2.fd.gU(a1.e2) || a1.gR) return this.qK(), !1;
		if (a1.gd) {
			if (!xK) {
				if (!aQ.eD(dy)) return !1;
				zw = e4, pP[3].to = !0
			}
		} else if (bD.gl.nU(e4)) xK || (bD.a0F.a0G = -1);
		else {
			if (xK) return !1;
			bD.gl.a0H(kU, kV) || (2 === a1.v9 ? aQ.fq(dy) && (player = aQ.eA(dy), aQ.v2(player)) && (pP[0].to = !0, pP[0].kA = 1, pP[7].to = !0) : aQ.eN(dy) ? (zw = ab.dv.dx(dy)) && (gY = bC.e8(zw), pP[8].to = !0, player = aQ.e9(gY) ? a1.eF : aQ
				.eA(gY)) : (zw = e4, bD.gl.gm(a1.e2, e4) && (pP[0].to = !0, pP[0].kA = 1, pP[1].to = !0, pP[1].kA = bE.eu[2] ? 0 : 2), aQ.gk(dy) || (aQ.e9(dy) ? (player = a1.eF, go(a1.e2) ? (pP[0].to = !0, pP[0].kA = 0) : gq(a1.e2,
				player) && (pP[0].to = !0, pP[0].kA = 3)) : (player = aQ.eA(dy)) === a1.e2 ? (pP[0].to = !0, pP[0].kA = 1, pP[7].to = !0) : (pP[0].kA = 1, pP[5].to = function(player) {
				return aQ.v2(player) && !a07(player) && aw.a08(1, [player], !1)
			}(player), pP[7].to = aQ.v2(player), eB(player, a1.e2) ? (pP[4].to = aQ.v2(player) && !aU.a0J(player) && aw.a08(0, [player], !1), pP[6].to = function(player) {
				if (0 === nv.length) return !1;
				if (performance.now() > zx + 4e3) return !(nv = []);
				return !a07(player) && ! function(player) {
					var z;
					if (a1.iN)
						for (z = nv.length - 1; 0 <= z; z--)
							if (!eB(player, nv[z])) return 1;
					return
				}(player)
			}(player), gs(a1.e2, player) ? (pP[0].kA = 0, pP[0].to = !0) : gq(a1.e2, player) && (pP[0].kA = 3, pP[0].to = !0), pP[0].to = this.a0L()) : (pP[2].to = !0, pP[0].to = !0)))))
		}
		return this.a0E(kU, kV)
	}, this.a0E = function(kU, kV) {
		return eP = kU - Math.floor(zt / 2), eR = kV - Math.floor(zt / 2), !!this.to()
	}, this.wq = function(kU, kV) {
		return !!this.to() && (aY.sQ.to ? !aY.sQ.uG(kU, kV) && (aY.sQ.to = !1, bU.dO = !0) : function(vh, kU, kV) {
			kU = a03(kU, kV);
			if (0 <= a05(kU)) return !1;
			if ((1 === kU || 6 === kU) && 0 <= a05(2)) return !1;
			if ((6 === kU || 9 === kU) && 0 <= a05(10)) return !1;
			return vh.qK(), bU.dO = !0
		}(this, kU, kV))
	}, this.qK = function() {
		for (var z = pP.length - 1; 0 <= z; z--) pP[z].to = !1, pP[z].kA = 0;
		aY.sQ.to = !1
	}, this.to = function() {
		return this.a0L() || aY.sQ.to
	}, this.a0L = function() {
		for (var eI = pP.length, z = 0; z < eI; z++)
			if (pP[z].to) return !0;
		return !1
	}, this.qn = function() {
		if (this.to())
			if (aY.sQ.to) aY.sQ.qn();
			else {
				var z, h1 = qo,
					ec = pP,
					eI = ec.length,
					a0T = (zt + gap) / zoom;
				for (h1.imageSmoothingEnabled = !0, h1.setTransform(zoom, 0, 0, zoom, eP, eR), z = 0; z < eI; z++) ec[z].to && qo.drawImage(ec[z].h0[ec[z].kA], ec[z].eP * a0T, ec[z].eR * a0T);
				h1.imageSmoothingEnabled = !1, h1.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function bu() {
	var ir, h0, a0U, a0V, a0W, a0X = -1;

	function a0Y() {
		var a0Z, tU = h0.getContext("2d", {
			alpha: !0
		});
		tU.clearRect(0, 0, ir, ir), tU.fillStyle = p.mH, tU.fillRect(0, 0, ir, ir), 0 === a0V && (tU.fillStyle = p.mM, tU.fillRect(0, 0, ir, ir)), tU.fillStyle = p.mL, tU.fillRect(0, 0, ir, 1), tU.fillRect(0, 0, 1, ir), tU.fillRect(0, ir - 1, ir, 1),
			tU.fillRect(ir - 1, 0, 1, ir), a0Z = .9 * ir / aP.get(0).width, tU.imageSmoothingEnabled = !0, tU.setTransform(a0Z, 0, 0, a0Z, Math.floor((ir - a0Z * aP.get(0).width) / 2), Math.floor((ir - a0Z * aP.get(0).height) / 2)), tU.drawImage(aP
				.get(0), 0, 0), tU.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a0b(kU, kV) {
		if (!a9.gS) return kU <= ir + bR.gap && kV >= aE.eR ? 0 : -1;
		if (kU <= 4 * ir + bR.gap) {
			if (kV >= aE.eR) return 0;
			if (kV >= aE.eR - ir - a0W * bR.gap) return 2
		} else if (kU <= 7 * ir + bR.gap && kV >= aE.eR - ir - a0W * bR.gap) return 1;
		return -1
	}
	this.gS = !1, this.dH = function() {
		a0V = -1, this.gS = !1, a0W = m.n.uE() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		ir = aE.ir, (h0 = document.createElement("canvas")).width = ir, h0.height = ir, a0U = b2.ow.q5(1, (m.n.uE() ? .5 : .45) * ir), a0Y()
	}, this.xT = function() {
		this.gS = !this.gS, this.gS ? (bK.db.hideCMPButton(), b3.xS(!1), a1.gR && b3.zq && b3.xU(!0), this.a0a()) : (a0V = -1, a0Y(), !a1.jn || 1 !== a1.v9 || a1.gd || a1.gR || m.n.setState(1)), bU.dO = !0
	}, this.a0a = function() {
		(a1.jn || a1.gR) && 1 === a1.v9 && (aI.l1(!0), a1.gd || setTimeout(function() {
			bQ.vK()
		}, 0), m.n.setState(0))
	}, this.gV = function(kU, kV) {
		return 0 <= (a0X = a0b(kU, kV)) || (!a9.gS || a1.jn || a1.gR || bT.to || a9.xT(), !1)
	}, this.wq = function(kU, kV) {
		kU = a0b(kU, kV);
		kU !== a0V && (a0V = kU, this.gS || a0Y(), bU.dO = !0)
	}, this.wr = function(kU, kV) {
		kU = a0b(kU, kV);
		return -1 !== kU && a0X === kU && (this.gS ? a1.ln ? (0 <= kU && b3.xS(!1), !a1.gR) : (0 === kU ? a1.wh() : 1 === kU ? this.xT() : 2 === kU && i.j(1, 0), !0) : 0 === kU && (this.xT(), !0))
	}, this.qn = function() {
		var t;
		this.gS ? (t = Math.floor(5.5 * ir), qo.setTransform(1, 0, 0, 1, bR.gap, aE.eR), qo.fillStyle = p.mH, qo.fillRect(0, 0, t, ir), 0 === a0V ? (qo.fillStyle = p.mM, qo.fillRect(0, 0, 4 * ir, ir)) : 1 === a0V && (qo.fillStyle = p.mM, qo
				.fillRect(4 * ir, 0, Math.floor(1.5 * ir), ir)), qo.fillStyle = p.mL, qo.fillRect(0, 0, t, 1), qo.fillRect(0, 0, 1, ir), qo.fillRect(4 * ir, 0, 1, ir), qo.fillRect(0, ir - 1, t, 1), qo.fillRect(t - 1, 0, 1, ir), qo.font = a0U,
			b2.ow.textBaseline(qo, 1), b2.ow.textAlign(qo, 1), qo.fillText(L(18), 2 * ir, .54 * ir), t = .4 * ir, a9.a0g(bR.gap + 4 * ir + (1.5 * ir - t) / 2, aE.eR + .3 * ir, t), t = 1, qo.setTransform(1, 0, 0, 1, bR.gap, aE.eR - t * a0W *
				bR.gap - t * ir), qo.fillStyle = p.mH, qo.fillRect(0, 0, 4 * ir, ir), a0V === t + 1 && (qo.fillStyle = p.mM, qo.fillRect(0, 0, 4 * ir, ir)), qo.fillStyle = p.mL, qo.fillRect(0, 0, 4 * ir, 1), qo.fillRect(0, 0, 1, ir), qo
			.fillRect(4 * ir, 0, 1, ir), qo.fillRect(0, ir - 1, 4 * ir, 1), qo.fillText(L(0 === t ? 18 : 19), 2 * ir, .54 * ir), qo.setTransform(1, 0, 0, 1, 0, 0)) : qo.drawImage(h0, bR.gap, aE.eR)
	}, this.a0f = function(player) {
		return 0 !== aV.lI[player] && 2 !== a1.v9 && aQ.v2(player)
	}, this.a0g = function(eP, eR, eI) {
		qo.setTransform(1, 0, 0, 1, eP, eR), qo.lineWidth = bR.uH, qo.strokeStyle = p.mL, qo.beginPath(), qo.moveTo(0, 0), qo.lineTo(eI, eI), qo.moveTo(0, eI), qo.lineTo(eI, 0), qo.stroke()
	}
}

function bv() {
	var a0i, ir, a0j, a0k, a0l, a0m, a0n, a0o, a0p;

	function tQ() {
		return aE.a19(aA.a15()) ? al.to ? aE.eR - aE.ir - 2 * a0j : aE.eR - a0j : b3.a19(aA.a18()) ? al.to ? b3.tQ() - aE.ir - 2 * a0j : b3.tQ() - a0j : al.to ? an.ir - aE.ir - (bZ.zs() + 1) * a0j : an.ir - bZ.zs() * bR.gap
	}

	function a0v(dt, od, id, fo, a0z, a10, sY, a11, a12, a13) {
		var z, tU, y6, op, ey, a1E = void 0 !== a12,
			t = Math.floor(aD.measureText(od, aA.a0U) + 1.5 * a0k + (a1E ? ir : 1.5 * a0k));
		if (bU.dO = !0, t + a0j > an.t && !a1E && 50 !== id && 20 < od.length) a0v(dt, (ey = b2.w0.zE(od))[0], id, fo, a0z, a10, sY, a11, a12, a13), a0v(dt, ey[1], id, fo, a0z, a10, sY, a11, a12, a13);
		else if (ey = t + (50 === id ? a0l : 0), (y6 = document.createElement("canvas")).width = t, y6.height = ir, (tU = y6.getContext("2d", {
				alpha: !0
			})).font = aA.a0U, b2.ow.textBaseline(tU, 1), b2.ow.textAlign(tU, 0), tU.clearRect(0, 0, t, ir), tU.fillStyle = a10, tU.fillRect(0, 0, t, ir), tU.fillStyle = a0z, tU.fillText(od, Math.floor(1.5 * a0k), Math.floor(ir / 2)), a1E && (tU
				.imageSmoothingEnabled = !0, aY.sQ.uI(a12, tU, t - ir, 0, ir)), 0 === (op = {
				ds: dt,
				od: od,
				id: id,
				player: fo,
				h0: y6,
				a0z: a0z,
				a10: a10,
				t: t,
				a16: ey,
				sY: sY,
				a11: a11,
				a12: a12,
				a13: a13
			}).ds || 0 < a0i.length && 0 < a0i[0].ds) a0i.unshift(op);
		else {
			for (z = 1; z < a0i.length; z++)
				if (0 < a0i[z].ds) return void a0i.splice(z, 0, op);
			a0i.push(op)
		}
	}

	function a0x(h3, qL, ec) {
		return "rgb(" + h3 + "," + qL + "," + ec + ")"
	}

	function a1F(id, fj) {
		for (var eI = a0i.length, z = 0; z < eI; z++) a0i[z].id === id && fj-- <= 0 && (a0i.splice(z, 1), z--, eI--)
	}

	function a1H(id, player) {
		for (var eW = !1, z = a0i.length - 1; 0 <= z; z--) a0i[z].id !== id || player !== a1.eF && a0i[z].player !== player || (a0i.splice(z, 1), eW = !0);
		return eW
	}

	function a1e(od) {
		a0v(340, od, 6, 0, a0x(215, 245, 255), p.mI, -1, !1)
	}
	this.a0q = "", this.dH = function() {
		var self;
		a0o = 0, a0n = m.n.uE() ? 7 : 12, a0m = {
			tb: [0, 0, 0],
			a0r: [0, 0, 0],
			la: [220, 180, 180],
			ql: [0, 0, 0],
			ed: [0, 0, 0]
		}, a0i = [], this.resize(), a1.gd && this.vL(0, 18), a1e(L(63, [bI.ji.sh[bI.fz].name])), a1e(L(64, [bI.eT - 2 + "x" + (bI.eU - 2)])), a1e(L(65, [ad.a1f])), ad.a1f !== ad.a1g && a1e(L(66, [ad.a1g + " (" + b2.w0.zB(100 * ad.a1g / ad
			.a1f, 1) + ")"])), 0 < ad.a1h && a1e(L(39, [ad.a1h + " (" + b2.w0.zB(100 * ad.a1h / ad.a1f, 1) + ")"])), 0 < ad.a1i && a1e(L(67, [ad.a1i + " (" + b2.w0.zB(100 * ad.a1i / ad.a1f, 1) + ")"])), 10 === a1.jl && a0v(120, L(68), 6, 0,
			a0x(235, 255, 120), p.mI, -1, !1), 0 !== (self = this).a0q.length && (a0v(200, self.a0q, 0, 0, p.mL, p.mI, -1, !1), self.a0q = ""), this.a0u()
	}, this.a0u = function() {
		var z, eI;
		if (ay.jh)
			for (eI = ay.ji.a0w.length, z = 0; z < eI; z++) a0v(400, ay.ji.a0w[z], 6, 0, a0x(255, 255, 255), p.mI, -1, !1)
	}, this.resize = function() {
		var a0y, z;
		if (ir = (ir = Math.floor((m.n.uE() ? .031 : .0249) * an.oy)) < 10 ? 10 : ir, this.fontSize = Math.floor(2 * ir / 3), this.a0U = b2.ow.q5(1, this.fontSize), a0j = bR.gap, a0k = Math.floor(ir / 5), 0 < a0i.length)
			for (a0y = a0i, a0i = [], z = a0y.length - 1; 0 <= z; z--) a0v(a0y[z].ds, a0y[z].od, a0y[z].id, a0y[z].player, a0y[z].a0z, a0y[z].a10, a0y[z].sY, a0y[z].a11, a0y[z].a12, a0y[z].a13);
		this.a14()
	}, this.a14 = function() {
		a0p = document.createElement("canvas");
		var od = L(20),
			tU = (a0l = aD.measureText(od, this.a0U) + 5 * a0k, a0p.height = ir, a0p.width = a0l, a0p.getContext("2d", {
				alpha: !0
			}));
		tU.font = this.a0U, b2.ow.textBaseline(tU, 1), b2.ow.textAlign(tU, 1), tU.clearRect(0, 0, a0l, ir), tU.fillStyle = p.q, tU.fillRect(0, 0, a0l, ir), tU.fillStyle = p.mL, tU.fillText(od, Math.floor(a0l / 2), Math.floor(ir / 2))
	}, this.a15 = function() {
		var eI;
		return al.to ? al.t : 0 === (eI = a0i.length) ? 0 : 1 === eI ? a0i[0].a16 : a17(a0i[0].a16, a0i[1].a16)
	}, this.a18 = function() {
		var eI = a0i.length;
		return al.to ? eI ? a17(al.t, a0i[0].a16) : al.t : 0 === eI ? 0 : 1 === eI ? a0i[0].a16 : 2 === eI ? a17(a0i[0].a16, a0i[1].a16) : a17(a17(a0i[0].a16, a0i[1].a16), a0i[2].a16)
	}, this.gV = function(eP, eR) {
		for (var lk, a1A, a1B = tQ(), z = a0i.length - 1; 0 <= z; z--)
			if ((a1A = a1B - (z + 1) * ir) <= eR && eR < a1A + ir) return 50 === a0i[z].id ? eP >= an.t - a0l - a0j - a0i[z].t && (eP >= an.t - a0l - a0j ? b0.fd.nr(a0i[z].player) : a5.le(a0i[z].player, 800, !1, 0), !0) : eP >= an.t - a0i[z].t -
				a0j && (736 === a0i[z].id ? (a1A = a0i[z].od.split(" "), window.open(a1A[a1A.length - 1], "_blank")) : a0i[z].a11 && (a0i[z].a13 && a0i[z].a13.eb ? (a1A = a0i[z].a13.e4, lk = bC.eQ(a1A) - 10, a1A = bC.eS(a1A) - 10, a5.ld(lk,
					a1A, 19 + lk, 19 + a1A)) : a0i[z].a13 && a0i[z].a13.ec ? a5.lf(a0i[z].player, a0i[z].a13.lg) : (a5.le(a0i[z].player, 800, !1, 0), 0 <= a0i[z].sY && (lk = a0i[z].sY, a0i[z].sY = a0i[z].player, a0i[z].player = lk))), !0);
		return !1
	}, this.vY = function(dt, od, id, fo, a0z, a10, sY, a11, a12, a13) {
		a0v(dt, od, id, fo, a0z, a10, sY, a11, a12, a13)
	}, this.a1D = function(w3) {
		a0v(300, w3, 252, 0, p.mL, p.mI, -1, !1)
	}, this.zN = function(id) {
		for (var z = a0i.length - 1; 0 <= z; z--) a0i[z].id === id && (a0i[z].ds = 1)
	}, this.vL = function(player, id) {
		0 === id ? (bS.lE[player < a1.jN ? 4 : 3]++, aD.iQ(player, 0), a1F(423, 0), a0v(160, L(21, [aV.a1G[player]]), 423, player, "rgb(10,220,10)", p.mI, -1, !1)) : 1 === id ? (a1H(50, a1.eF), aD.iQ(player, 1), a0v(360, L(22, [aV.a1G[player]]),
			0, player, p.mv, p.mI, -1, !0), a5.le(player, 2700, !1, 0)) : 2 === id ? (aD.iQ(player, 2), a0v(0, L(23), 0, player, "rgb(10,255,255)", p.mI, -1, !0), a5.le(player, 2700, !1, 0)) : 3 === id ? (aD.iQ(player, 2), a0v(0, L(24, [aV
			.a1G[player]
		]), 0, player, p.mL, p.mI, -1, !0), a5.le(player, 2700, !1, 0)) : 4 === id ? this.a1I(1, player, player) : 5 === id ? 2 !== aV.yb[player] && aQ.v2(a1.e2) && (function(id, lD) {
			var z, a1S = 0,
				eI = a0i.length;
			for (z = 0; z < eI; z++)
				if (a0i[z].id === id && lD <= ++a1S) return a0i.splice(z, 1)
		}(1, 5), aU.a1K(player) ? a0v(180, L(25, [aV.a1G[player]]), 1, player, a0x(255, 200, 180), p.mI, -1, !0) : (a1F(573, 0), a0v(180, L(26, [aV.a1G[player]]), 573, player, p.mv, p.mI, -1, !0))) : 18 === id ? a0v(255, L(27), 18, 0, p.mL, p
			.mI, -1, !1) : 21 === id ? a0v(220, L(28), id, 0, p.mL, p.mI, -1, !1) : 22 === id ? this.a1I(2, player, player) : 59 === id && a0v(0, L(29), id, 0, p.n7, p.mI, 0, !1)
	}, this.wY = function(w3) {
		a0v(200, L(30, [w3]), 94, 0, p.mL, p.mr, -1, !1)
	}, this.vS = function(a1L) {
		if (a1.e2 === a1L && !a1.jn)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a0v(0, "Your Win Count is now " + __fx.wins.count, 3, a1L, p.mL, p.mI, -1, !0);
		aD.iQ(a1L, 2), a1.jN < 100 ? a0v(0, L(24, [aV.a1G[a1L]]), 3, a1L, p.mL, p.mI, -1, !0) : a0v(0, L(31, [aV.a1G[a1L]]), 3, a1L, p.mL, p.mI, -1, !0)
	}, this.a0N = function(dy) {
		var od, a1M = "(" + bC.eQ(dy >> 2) + ", " + bC.eS(dy >> 2) + ")",
			a11 = !1,
			player = 0;
		aQ.eD(dy) ? aQ.e9(dy) ? a1M = L(32, [a1M]) : (player = aQ.eA(dy), od = L(33, [b2.tU.yI(aV.w2[player], b2.ow.q5(0, 10), 150)]) + "   ", a1M = (od += L(34, [b2.w0.z6(aV.gK[player])]) + "   ") + (L(35, [b2.w0.z6(aV.g6[player])]) + "   ") + (
			L(36, [a1M]) + "   ") + L(37, [player]), a11 = !0) : a1M = aQ.eN(dy) ? L(38, [a1M]) + "   #" + aQ.e0(dy) : L(39, [a1M]), bU.dO = !0, a1F(55, 0), a0v(220, a1M, 55, player, p.mL, p.mI, -1, a11)
	}, this.a0P = function(a1N) {
		var k8 = bD.kt,
			player = k8.a1O[a1N] >> 3,
			od = (bU.dO = !0, a1F(55, 0), L(40, [aV.a1G[player]]) + "   ");
		a0v(220, od += L(34, [k8.a1P[a1N]]), 55, player, p.mL, p.mI, -1, !0)
	}, this.nZ = function(nM, a1Q, na) {
		nM === a1.e2 ? a0v(175, " " + L(41, [aV.a1G[a1Q]]) + ": ", 1001, a1Q, a0x(200, 255, 210), p.mI, -1, !0, na) : this.a1R(nM, na)
	}, this.a1R = function(nM, na) {
		a1F(1e3, 0), a0v(175, aV.a1G[nM] + ": ", 1e3, nM, p.mL, "rgba(5,60,25,0.9)", -1, !0, na)
	}, this.vZ = function() {
		var w3;
		a1.vE ? (w3 = L(42), aD.vX(L(43), 2, 1, 12), a0v(0, w3, 40, 0, "rgb(10,220,10)", p.mI, -1, !1)) : (w3 = L(44), aD.vX(L(45), 2, 0, 16), a0v(0, w3, 41, 0, p.mL, p.mI, -1, !1))
	}, this.tc = function(tb) {
		a0v(300, tb[0].name + " [" + a1.vR.ti(tb[0].tf) + "] vs " + tb[1].name + " [" + a1.vR.ti(tb[1].tf) + "]", 65, 0, p.mC, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a1T = function(w3) {
		a0v(200, w3, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a1U = function(a1V) {
		a0v(0, L(a1V ? 46 : 47), 247, 0, p.n6, p.mI, -1, !1)
	}, this.tk = function(tb, th, tj, a1W) {
		a0v(0, tb[0].name + ": " + a1.vR.ti(tb[0].tf) + " -> " + th, 66, 0, p.mL, a1W[0], -1, !1), a0v(0, tb[1].name + ": " + a1.vR.ti(tb[1].tf) + " -> " + tj, 66, 1, p.mL, a1W[1], -1, !1)
	}, this.ns = function(player, id) {
		0 === id ? a1H(50, player) ? (a0v(128, L(48, [aV.a1G[player]]), 52, player, a0x(180, 255, 180), p.mI, -1, !0), aU.oW(player, 2, 255)) : a0v(384, L(49, [aV.a1G[player]]), 51, player, a0x(210, 210, 255), p.mI, -1, !0) : a1H(51, player) ? (
			a0v(128, L(50, [aV.a1G[player]]), 52, player, p.mL, "rgba(60,120,10,0.9)", -1, !0), aU.oW(player, 2, 255)) : (a0v(384, L(51, [aV.a1G[player]]), 50, player, p.mL, "rgba(90,90,90,0.9)", -1, !0), aU.oW(player, 2, 96))
	}, this.nw = function(tb, target) {
		var color = a0x(210, 255, 210);
		1 < tb.length ? a0v(230, L(52, [tb.length, aV.a1G[target]]), 66, target, color, p.mI, -1, !0) : a0v(230, L(53, [aV.a1G[tb[0]], aV.a1G[target]]), 66, tb[0], color, p.mI, target, !0)
	}, this.a1X = function(player, target) {
		a0v(230, L(54, [aV.a1G[player], aV.a1G[target]]), 66, player, p.mL, "rgba(75,65,5,0.9)", target, !0)
	}, this.a1Y = function(id, fj) {
		a1F(id, fj)
	}, this.a1Z = function(id) {
		for (var z = a0i.length - 1; 0 <= z; z--)
			if (a0i[z].id === id) return a0i[z];
		return null
	}, this.vG = function(id, player) {
		a1H(id, player)
	}, this.nn = function(a1a, a1b, player) {
		2 !== aV.yb[a1.e2] && (a0v(200, 1 === a1a ? L(55, [aV.a1G[player]]) : L(56, [a1a, aV.a1G[player]]), 30, player, "rgb(190,255,190)", p.mI, -1, !0), a1b) && a0v(30, 1 === a1b ? L(57) : L(58, [a1b]), 30, 0, p.mL, p.mI, -1, !1)
	}, this.a1d = function(a1a, player) {
		2 !== aV.yb[a1.e2] && (a1F(31, 0), 2 === aV.yb[player] || player >= a1.jN ? a0v(150, 1 === a1a ? L(59, [aV.a1G[player]]) : L(60, [aV.a1G[player], a1a]), 31, player, p.mC, "rgba(205,205,205,0.9)", -1, !0) : a0v(150, 1 === a1a ? L(61, [aV
			.a1G[player]
		]) : L(62, [aV.a1G[player], a1a]), 31, player, p.mC, "rgba(205,255,205,0.9)", -1, !0))
	}, this.vF = function(bc) {
		for (var ed = bU.jK(), z = 2; 0 <= z; z--) 0 < a0m.ql[z] && (bc || a0m.ed[z] < ed - 220) && this.a1j(z)
	}, this.a1j = function(id) {
		var od, eI = a0m.ql[id],
			player = a0m.tb[id];
		a0m.ql[id] = 0, 1 === eI ? (0 === id ? od = L(69, [aV.a1G[player], aV.a1G[a0m.a0r[0]]]) : 1 === id ? od = L(70, [aV.a1G[player]]) : 2 === id ? od = L(71, [aV.a1G[player]]) : 3 === id && (od = L(72, [aV.a1G[player]])), a1F(7, 0), a0v(a0m
			.la[id], od, 7, a0m.a0r[id], p.mL, p.mI, -1, !0)) : (od = L(0 === id ? 73 : 1 === id ? 74 : 75, [eI]), a1F(7, 0), a0v(a0m.la[id], od, 7, player, p.mL, p.mI, -1, !1))
	}, this.a1I = function(id, gh, sY) {
		var ed = bU.jK(),
			eI = a0m.ql[id] + 1;
		a0m.ql[id]++, a0m.tb[id] = gh, a0m.a0r[id] = sY, 1 === eI && (a0m.ed[id] = ed), (1 === eI && (a1.vC < 32 || 2 === a1.v9) || 1 < eI && (a0m.ed[id] < ed - 140 || 2 === a1.v9)) && this.a1j(id)
	}, this.iC = function() {
		for (var hF = (hF = a0i.length - a0n) <= 1 ? 1 : hF * hF, z = a0i.length - 1; 0 <= z; z--) 0 < a0i[z].ds && (a0i[z].ds -= hF, a0i[z].ds <= 0) && (bU.dO = !0, a0i.splice(z, 1));
		! function() {
			var fj, z;
			if (128 !== a0o && !(++a0o < 128))
				for (fj = 5, z = aa.jO - 1; 0 <= z; z--) 1 === aV.yb[aa.jQ[z]] && 0 < fj-- && a0v(240, L(72, [aV.a1G[aa.jQ[z]]]), 1, aa.jQ[z], p.mC, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.vF(!1)
	}, this.qn = function() {
		for (var ss, eR = tQ(), z = a0i.length - 1; 0 <= z; z--) ss = eR - (z + 1) * ir, 50 === a0i[z].id ? (qo.drawImage(a0i[z].h0, an.t - a0i[z].t - a0l - a0j, ss), qo.drawImage(a0p, an.t - a0l - a0j, ss)) : qo.drawImage(a0i[z].h0, an.t - a0i[
			z].t - a0j, ss)
	}
}

function bw() {
	var a1l, a1m, a1n, t, ir, font, od;

	function a1r(a1s) {
		return a1s < 10 ? "0" + a1s : String(a1s)
	}
	this.dH = function() {
		od = L(76)
	}, this.resize = function() {
		t = Math.floor((m.n.uE() ? .53 : .36) * an.oy), ir = Math.floor(.065 * t), font = b2.ow.q5(1, Math.floor(.9 * ir)), a1n--, this.setTime()
	}, this.iC = function() {
		this.setTime() && (bU.dO = !0)
	}, this.setTime = function() {
		var dt = new Date,
			a1p = dt.getUTCMinutes(),
			dt = dt.getUTCSeconds();
		return a1m = 3600 - 60 * a1p - dt, a1m %= 900, a1l = od + a1r(Math.floor(a1m / 60)) + ":" + a1r(a1m % 60), a1n !== (a1n = 60 * a1p + dt) && (t = aD.measureText(a1l, font), t += Math.floor(.4 * ir), !0)
	}, this.qn = function() {
		qo.lineWidth = 1 + Math.floor(ir / 15), 7 === aN.wU() && aj.a1t() + 2 * bR.gap > .5 * (an.ir - t) ? qo.translate(an.t - ir, Math.floor(aj.a1t() + 2 * bR.gap + t)) : qo.translate(an.t - ir, Math.floor(.5 * (an.ir + t))), qo.rotate(-Math
			.PI / 2), qo.fillStyle = p.mL, qo.fillRect(0, 0, t, ir), qo.strokeStyle = p.mC, qo.strokeRect(0, 0, t, ir + 10), qo.fillStyle = p.mC, qo.font = font, b2.ow.textBaseline(qo, 1), b2.ow.textAlign(qo, 1), qo.fillText(a1l, Math.floor(
			t / 2), Math.floor(.59 * ir)), qo.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function bx() {
	var a0i, a1u, a0U, ir, a1v;

	function a1x(z) {
		var a1z = !0,
			hA = p.mL,
			t = (a0i[z].iT === a1.eF ? a0i[z].tU.fillStyle = p.mV : (aQ.a20(a0i[z].iT), a0i[z].tU.fillStyle = b2.color.mF(bE.es[0], bE.es[1], bE.es[2], .87), 400 < b2.p6.xt(bE.es, 0, 2) && (a1z = !1, hA = p.mC)), a0i[z].h0.width),
			q7 = (a0i[z].tU.clearRect(0, 0, t, ir), a0i[z].tU.fillRect(0, 0, t, ir), a0i[z].tU.fillStyle = hA, ! function(tU, t, ir) {
				tU.fillRect(0, 0, t, 1), tU.fillRect(0, ir - 1, t, 1), tU.fillRect(0, 0, 1, ir), tU.fillRect(t - 1, 0, 1, ir)
			}(a0i[z].tU, t, ir), a1u + 2 * ir < t && (a0i[z].tU.fillRect(t - a1u - ir, 0, 1, ir), a0i[z].tU.fillText(aV.a1G[a0i[z].iT], Math.floor((t - a1u) / 2), Math.floor(.57 * ir))), 0 !== a0i[z].id ? 0 : ir);
		a0i[z].tU.fillText(b2.w0.z6(a0i[z].iU), Math.floor(t - a1u / 2 - q7), Math.floor(.57 * ir)),
			function(z, t, q7, a1z) {
				a0i[z].tU.fillStyle = a1z ? p.mN : p.mJ;
				a1z = Math.floor(a1u * a0i[z].iU / a0i[z].a26);
				a0i[z].tU.fillRect(Math.floor(t - a1u - q7), ir - a1v, a1z, a1v)
			}(z, t, q7, a1z), 0 === a0i[z].id ? (a23(z, t, a1z, hA), function(z, t, a1z) {
				a0i[z].tU.strokeStyle = a1z ? p.ma : p.mj, a0i[z].tU.fillRect(ir, 0, 1, ir);
				a1z = t - ir;
				a0i[z].tU.beginPath(), a0i[z].tU.moveTo(Math.floor(.3 * ir + a1z), Math.floor(ir / 2)), a0i[z].tU.lineTo(Math.floor(ir - .3 * ir + 0 + a1z), Math.floor(ir / 2)), a0i[z].tU.stroke(), a0i[z].tU.beginPath(), a0i[z].tU.moveTo(Math
					.floor(ir / 2 + a1z), Math.floor(.3 * ir)), a0i[z].tU.lineTo(Math.floor(ir / 2 + a1z), Math.floor(ir - .3 * ir + 0)), a0i[z].tU.stroke()
			}(z, t, a1z)) : a23(z, 2 * ir, a1z, hA)
	}

	function a23(z, t, a1z, hA) {
		a0i[z].tU.strokeStyle = a0i[z].a27 ? p.mT : a1z ? p.mn : p.mo, a0i[z].tU.fillStyle = hA, a0i[z].tU.fillRect(t - ir, 0, 1, ir), a0i[z].tU.lineWidth = Math.max(Math.floor(ir / 12), 3), a0i[z].tU.lineCap = "round";
		a1z = .35;
		t = ir + 1, a0i[z].tU.beginPath(), a0i[z].tU.moveTo(Math.floor(t - a1z * ir + 0), Math.floor(a1z * ir)), a0i[z].tU.lineTo(Math.floor(t - ir + a1z * ir), Math.floor(ir - a1z * ir + 0)), a0i[z].tU.stroke(), a0i[z].tU.beginPath(), a0i[z].tU
			.moveTo(Math.floor(t - ir + a1z * ir), Math.floor(a1z * ir)), a0i[z].tU.lineTo(Math.floor(t - a1z * ir + 0), Math.floor(ir - a1z * ir + 0)), a0i[z].tU.stroke()
	}

	function a2I(eI) {
		for (var iU, z = eI - 1; 0 <= z; z--) iU = aS.fU(a1.e2, z), a0i[z].iU !== iU && (a0i[z].iU = iU, a0i[z].a26 = iU > a0i[z].a26 ? iU : a0i[z].a26, a0i[z].a1y = !0)
	}

	function a1w(a2K) {
		a2K.h0 = document.createElement("canvas"), bI.sJ.font = a0U;
		var t = a1u;
		a2K.iT < a1.eF && 0 === a2K.id && (t += Math.floor(bI.sJ.measureText(aV.a1G[a2K.iT] + "000").width)), t += ir, 0 === a2K.id && (t += ir), a2K.h0.width = t, a2K.h0.height = ir, a2K.tU = a2K.h0.getContext("2d", {
			alpha: !0
		}), a2K.tU.font = a0U, b2.ow.textBaseline(a2K.tU, 1), b2.ow.textAlign(a2K.tU, 1)
	}

	function a2E(z) {
		return aH.a2M() ? an.t - a0i[z].h0.width - bR.gap : aH.eP
	}

	function a2F(z) {
		return Math.floor(2 * bR.gap + (aH.a2M() ? aJ.ir + bR.gap : 0) + aH.ir + z * (1.3 * ir))
	}
	this.dH = function() {
		a0i = [], this.resize()
	}, this.resize = function() {
		a0U = aA.a0U, ir = aA.fontSize + 5, ir = Math.floor(1.25 * ir), m.n.uE() && (ir = Math.floor(1.25 * ir)), a1v = Math.floor(.15 * ir), bI.sJ.font = a0U, a1u = Math.floor(bI.sJ.measureText("02 000 000 0000").width);
		for (var z = a0i.length - 1; 0 <= z; z--) a1w(a0i[z]), a1x(z)
	}, this.l1 = function() {
		for (var z = a0i.length - 1; 0 <= z; z--) a0i[z].a1y && (a0i[z].a1y = !1, a1x(z))
	}, this.gV = function(kU, eR) {
		if (2 !== a1.v9 && 0 !== aV.lI[a1.e2] && !a1.gR && aQ.v2(a1.e2))
			for (var a29, a2A, a2B, a2C = m.n.uE() ? ir : 0, a2D = m.n.uE() ? Math.floor(.15 * ir) : 0, z = a0i.length - 1; 0 <= z; z--)
				if (a29 = a2E(z), a2A = a2F(z), a2B = a0i[z].h0.width, a2A - a2D <= eR && eR <= a2A + ir + a2D) {
					if (a29 - a2C <= kU && kU <= a29 + ir + a2C) return a0i[z].a27 || (a0i[z].a1y = !0, a0i[z].a27 = !0, 0 === a0i[z].id && b0.ge.nX(a0i[z].iT)), !0;
					if (0 === a0i[z].id && a29 + a2B - ir - a2C <= kU && kU <= a29 + a2B + a2C) return b0.ge.gp(aE.gj(), a0i[z].iT), !0
				} return !1
	}, this.iC = function() {
		var eI;
		2 !== a1.v9 && 0 !== aV.lI[a1.e2] && !a1.gR && aQ.v2(a1.e2) && (function(eI) {
			if (a0i.length !== eI) return 1;
			for (var z = eI - 1; 0 <= z; z--)
				if (a0i[z].id !== aS.fO(a1.e2, z) || a0i[z].iT !== aS.fT(a1.e2, z)) return 1;
			return
		}(eI = aS.fN(a1.e2)) && function(eI) {
			var z, id, iT, ec, iU, a0y = [];
			loop: for (z = 0; z < eI; z++) {
				for (id = aS.fO(a1.e2, z), iT = aS.fT(a1.e2, z), ec = 0; ec < a0i.length; ec++)
					if (a0i[ec].id === id && a0i[ec].iT === iT) {
						a0y.push(a0i.splice(ec, 1)[0]);
						continue loop
					} iU = aS.fU(a1.e2, z), a1w(iU = {
					iT: iT,
					iU: iU,
					a26: iU,
					id: id,
					a1y: !0,
					a27: !1,
					h0: null,
					tU: null
				}), a0y.push(iU)
			}
			a0i = a0y
		}(eI), a2I(eI))
	}, this.a2L = function(fo) {
		for (var eI = Math.min(a0i.length, aS.fN(a1.e2)), z = 0; z < eI; z++)
			if (a0i[z].iT === fo) return void(a0i = [])
	}, this.qn = function() {
		if (0 !== aV.lI[a1.e2] && aQ.v2(a1.e2) && !a1.gR)
			for (var z = a0i.length - 1; 0 <= z; z--) qo.drawImage(a0i[z].h0, a2E(z), a2F(z))
	}
}

function by() {
	var a0i, jV, a2N, a2O, ir, a0U, fontSize, a2P, a2Q, a2R, a2S, h0, tU, lV, a2T;

	function qv(z) {
		return L(0 === z ? 77 : 1 === z ? 78 : 2 === z ? 79 : 80)
	}

	function a2a() {
		qo.drawImage(h0, bR.gap + (a1.iN ? bR.gap + bW.a2b() : 0), a2c + 2 * bR.gap)
	}

	function a2U() {
		h0.width = a0i[0].width + a2R, h0.height = ir + a2R, (tU = h0.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a0i[0].width + a2R, ir + a2R), tU.translate(Math.floor(a2R / 2), Math.floor(a2R / 2)), tU.lineWidth = a2R, tU.fillStyle = 1 === a0i[0].a2Z ? p.mQ : p.mI, a2d(), tU.fill(), tU.strokeStyle = 1 === a0i[0].a2Z ? p.mC : p
			.mL, a2d(), tU.stroke(), b2.ow.textAlign(tU, 1), b2.ow.textBaseline(tU, 1), tU.fillStyle = 1 === a0i[0].a2Z ? p.mC : p.mL, tU.font = a0U[0], tU.fillText(qv(a0i[0].a2Y), Math.floor(a0i[0].width / 2), Math.floor(.72 * a2P[0] * ir)), tU
			.font = a0U[1], tU.fillText(a0i[0].od, Math.floor(a0i[0].width / 2), Math.floor((a2P[0] + .48 * a2P[1]) * ir))
	}

	function a2d() {
		tU.beginPath(), tU.moveTo(a2S, 0), tU.lineTo(a0i[0].width - a2S, 0), tU.lineTo(a0i[0].width, a2S), tU.lineTo(a0i[0].width, ir - a2S), tU.lineTo(a0i[0].width - a2S, ir), tU.lineTo(a2S, ir), tU.lineTo(0, ir - a2S), tU.lineTo(0, a2S), tU
			.closePath()
	}
	this.dH = function() {
		jV = 4, a2N = a2O = lV = 0, a0i = [], a0U = new Array(2), fontSize = new Array(2), (a2P = new Array(2))[0] = .3, a2P[1] = .7, a2Q = new Array(4), h0 = document.createElement("canvas"), a2T = bU.ds + 2e3, this.resize()
	}, this.resize = function() {
		var z, t;
		for (ir = Math.floor((m.n.uE() ? .0725 : .058) * an.oy), fontSize[0] = Math.floor(.85 * a2P[0] * ir), fontSize[1] = Math.floor(.85 * a2P[1] * ir), a0U[0] = b2.ow.q5(1, fontSize[0]), a0U[1] = b2.ow.q5(1, fontSize[1]), z = a2Q.length -
			1; 0 <= z; z--) a2Q[z] = this.measureText(qv(z) + "000", a0U[0]);
		if (a2R = Math.floor(1 + .05 * ir), a2S = Math.floor(.2 * ir), 0 < a0i.length) {
			for (z = a0i.length - 1; 0 <= z; z--) t = this.measureText(a0i[z].od + "00", a0U[1]), a0i[z].width = t < a2Q[z] ? a2Q[z] : t;
			a2U()
		}
	}, this.iC = function() {
		0 !== jV && (4 === jV ? bU.ds > a2T && (jV = 0, 1 === a1.v9) && aD.vX(bI.ji.sh[bI.fz].name, 3, 1, 9) : (1 === jV ? (0 === a2N && (a2U(), a2N = 1e-4), 1 <= (a2N += .002 * (bU.ds - lV)) && (a2O = 0, jV = 2, a2N = 1), bU.dO = !0) : 2 ===
			jV ? ((a2O += (bU.ds - lV) / 1e3) > a0i[0].la || 1 < a2O && 1 < a0i.length) && (jV = 3) : 3 === jV && ((a2N -= .002 * (bU.ds - lV)) <= 0 && (a2N = 0, a0i.shift(), jV = 0 < a0i.length ? 1 : 0), bU.dO = !0), lV = bU.ds))
	}, this.measureText = function(od, a0U) {
		return qo.font = a0U, Math.floor(qo.measureText(od).width)
	}, this.iQ = function(a2X, z) {
		this.vX(aV.a1G[a2X], z, 1, 0 === z ? 3 : 7)
	}, this.vX = function(od, a2Y, a2Z, la) {
		var t = (t = this.measureText(od + "00", a0U[1])) < a2Q[a2Y] ? a2Q[a2Y] : t;
		a0i.push({
			od: od,
			width: t,
			a2Y: a2Y,
			a2Z: a2Z,
			la: la
		}), 0 === jV && (a2N = 0, jV = 1, lV = bU.ds)
	}, this.qn = function() {
		0 !== jV && 0 !== a2N && (a2N < 1 ? (qo.globalAlpha = a2N, a2a(), qo.globalAlpha = 1) : a2a())
	}
}

function ca() {
	var ir, h0, tU, a2e, a2f, a2g, a2h, a1y, a2i, a2j, a2k, a2l, a1V = !1,
		y6 = (this.to = !1, this.t = 0, new Array(2));

	function l2() {
		var t = al.t,
			k8 = (a1y = !1, tT(tU, t, ir), Math.floor(t / 2));
		1 === a2e ? (tU.fillStyle = p.mc, tU.fillRect(k8, 0, k8, ir)) : -1 === a2e && (tU.fillStyle = p.mp, tU.fillRect(0, 0, k8, ir)), tV(tU, t, ir, 2);
		var k8 = (k8 = Math.floor(.25 * ir)) < 2 ? 2 : k8,
			a1f = (tU.fillStyle = p.mR, Math.floor((ir - 4) * a2f[1] / a2g[1]));
		0 < a1f && tU.fillRect(2, ir - 2 - a1f, k8, a1f), 0 < (a1f = Math.floor((ir - 4) * a2f[0] / a2g[0])) && tU.fillRect(t - 2 - k8, ir - 2 - a1f, k8, a1f);
		k8 = (k8 = Math.floor(ir / 8)) < 2 ? 2 : k8, tX(tU, Math.floor(.4 * ir), 0, ir, k8, .5, !1), tX(tU, Math.floor(t - 1.4 * ir), 0, ir, k8, .5, !0), a1f = 1.1 * ir / y6[0].width;
		tU.imageSmoothingEnabled = !0, tU.setTransform(a1f, 0, 0, a1f, (t - a1f * y6[0].width) / 2, -.05 * ir), tU.drawImage(y6[+a1V], 0, 0), tU.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a2m() {
		a2k = bU.jK(), a1y = !0, a2i = a2e = 0, a2h = [], al.to = !1, aA.vG(247, 0), a2f[0] = a2f[1] = 0, aA.zN(673)
	}

	function tQ() {
		return aE.a19(aA.a15()) ? aE.eR - ir - bR.gap : b3.a19(aA.a18()) ? b3.tQ() - ir - bR.gap : an.ir - ir - bZ.zs() * bR.gap
	}
	this.dI = function() {
		for (var z = 0; z < 2; z++) y6[z] = b2.h0.u2(aP.get(3), 8 - z, p.nE), y6[z] = b2.h0.y8(y6[z])
	}, this.dH = function() {
		a2k = -140, a2j = 0, a2l = -1, this.to = !1, a1y = a1V = !1, a2f = [a2e = a2i = 0, 0], a2g = [1, 1], a2h = [], this.resize()
	}, this.resize = function() {
		ir = aE.ir, this.t = 4 * ir, (h0 = document.createElement("canvas")).width = this.t, h0.height = ir, tU = h0.getContext("2d", {
			alpha: !0
		}), l2()
	}, this.l1 = function() {
		a1y && l2()
	}, this.gV = function(eP, eR) {
		var ll;
		return !!this.to && !(eP < an.t - this.t - bR.gap || eR < (ll = tQ()) || ll + ir < eR || (a1.gR || b0.ge.nd(eP > an.t - bR.gap - this.t / 2 ? 1 : 0), 0))
	}, this.iC = function() {
		if (0 < a2j) 0 === --a2j && a2m();
		else if (this.to) 180 == --a2i && 3 * a2f[0] < a2g[0] ? a2m() : a2f[0] >= a2g[0] ? a1V ? bH.uo.v4() : bH.uo.v8() : a2f[1] >= a2g[1] ? a2j = 4 : a2i <= 0 && a2m();
		else if (function() {
				if (0 <= a2l) return 1;
				return
			}()) {
			a1V = aW.a2p(), aA.vY(250, L(81, [aV.a1G[a2l]]), 673, a2l, p.mL, p.mI, -1, !0), a2l = -1, aA.zN(257), aA.a1U(a1V), this.to = !0, a1y = !0, a2i = 360;
			for (var el, dt = 0, z = aa.jO - 1; 0 <= z; z--) aQ.v2(aa.jQ[z]) && (dt += aV.g6[aa.jQ[z]]);
			a1V ? a2g[0] = Math.max(bB.ek(3 * dt, 4), 1) : a1.iN ? 9 === a1.jl && 8 === bV.vU[bW.kd()] ? a2g[0] = Math.max(dt, 1) : (el = bB.ek(100 * bW.vk(), a1.j7), el = bB.oV(200 - 2 * el, 50, 100), el = bB.ek(el * dt, 100), a2g[0] = Math.max(
				el, 1)) : a2g[0] = Math.max(bB.ek(3 * dt, 5), 1), a2g[1] = Math.max(dt - a2g[0], 1)
		}
	}, this.vA = function() {
		this.to && a2f[0] < a2g[0] && a2m()
	}, this.oX = function(player, a2s) {
		var z;
		if (this.to) {
			for (z = a2h.length - 1; 0 <= z; z--)
				if (a2h[z] === player) return;
			var a2t = L(a2s ? 82 : 83, [aV.a1G[player]]);
			aA.vY(450, a2t, 257, player, a2s ? p.ma : p.mm, p.mI, -1, !0), a2h.push(player), a1y = !0, a2t = a1.jn ? a2g[0] : aV.g6[player], a2s ? a2f[0] += a2t : a2f[1] += a2t, player === a1.e2 && (a2e = a2s ? 1 : -1)
		}
	}, this.qn = function() {
		var eR;
		this.to && (eR = tQ(), qo.drawImage(h0, an.t - this.t - bR.gap, eR))
	}, this.oY = function(player) {
		if (!a1.jn) {
			if (bU.jK() < a2k + 140) return !1;
			if (bU.jK() < 535) return !1
		}
		return 0 === a2i && !!b2.fd.gT(1) && !(!b2.fd.gU(player) || 10 <= j8[player] && !b2.fd.ys(player, 9))
	}, this.ni = function(player) {
		a2l = player
	}
}

function bz() {
	var t, eP, a2u, h0, tU, to, hf, zI, a0U, a1y, a2v = 11 / 12;

	function a2x() {
		var a25 = Math.floor(hf * (t - 2 * a2u)),
			a30 = 1 + Math.floor(.0625 * aE.ir),
			a31 = 1 + Math.floor(.3 * aE.ir),
			a32 = Math.floor(.55 * aE.ir);
		tU.clearRect(0, 0, t, aE.ir), tU.fillStyle = p.mH, tU.fillRect(0, 0, a2u, aE.ir), tU.fillRect(a2u + a25, 0, t - a2u - a25, aE.ir), tU.fillStyle = hf < 1 / 3 ? "rgba(" + Math.floor(3 * hf * 130) + ",130,0,0.85)" : hf < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (hf - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (hf - 2 / 3) * 130) + ",0.85)", tU.fillRect(a2u, 0, a25, aE.ir), tU.fillStyle = p.mL, tU.fillRect(0, 0, t, 1), tU.fillRect(0, aE.ir - 1, t, 1), tU
			.fillRect(0, 0, 1, aE.ir), tU.fillRect(a2u, 0, 1, aE.ir), tU.fillRect(a2u + a25, 0, 1, aE.ir), tU.fillRect(t - a2u, 0, 1, aE.ir), tU.fillRect(t - 1, 0, 1, aE.ir), tU.fillRect(Math.floor(.25 * aE.ir) + a31, Math.floor((aE.ir - a30) / 2),
				aE.ir - 2 * a31, a30), tU.fillRect(Math.floor(t - 1.25 * aE.ir) + a31, Math.floor((aE.ir - a30) / 2), aE.ir - 2 * a31 - a31 % 2, a30), tU.fillRect(Math.floor(t - 1.25 * aE.ir) + Math.floor((aE.ir - a30) / 2), a31, a30, aE.ir - 2 *
				a31 - a31 % 2), zI = b2.fd.he(a1.e2, aE.gj()), tU.fillText(b2.w0.z6(zI) + " (" + b2.w0.zB(100 * hf, +(hf < .1)) + ")", Math.floor(.5 * t), a32)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		hf = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aE.xO(arg1);

	function a37(xo) {
		return !(1 < xo && 1 === hf || (1 < xo && xo * hf - hf < 1 / 1024 ? xo = (hf + 1 / 1024) / hf : xo < 1 && hf - xo * hf < 1 / 1024 && (xo = (hf - 1 / 1024) / hf), hf = bB.oV(hf * xo, 1 / 1024, 1), a2x(), 0))
	}

	function a38(kU) {
		return hf !== (hf = bB.oV((kU - eP - a2u) / (t - 2 * a2u), 1 / 1024, 1)) && (a2x(), !0)
	}
	this.eR = 0, this.gW = !1, this.dH = function() {
		to = !a1.gd && !a1.gR, a1y = !1, hf = .5, zI = 0, this.gW = !1, this.resize()
	}, this.resize = function() {
		m.n.uE() && an.t < .8 * an.ir ? (this.ir = Math.floor(.066 * an.oy), t = an.t - 4 * bR.gap - this.ir) : (t = Math.floor((m.n.uE() ? .65 : .389) * an.oy), t += 12 - t % 12, this.ir = Math.floor(t / 12)), a2u = Math.floor(3 * this.ir / 2),
			a0U = b2.ow.q5(1, Math.floor(.5 * this.ir)), (h0 = document.createElement("canvas")).width = t, h0.height = this.ir, (tU = h0.getContext("2d", {
				alpha: !0
			})).font = a0U, b2.ow.textBaseline(tU, 1), b2.ow.textAlign(tU, 1), this.a2w(), a2x()
	}, this.a2w = function() {
		eP = m.n.uE() && an.t < .8 * an.ir ? this.ir + 3 * bR.gap : Math.floor((an.t - t) / 2), this.eR = an.ir - this.ir - bZ.zs() * bR.gap
	}, this.l1 = function() {
		a1y && (a1y = !1, a2x())
	}, this.to = function() {
		return !(!to || a9.gS && eP < Math.floor(bR.gap + 5.5 * this.ir))
	}, this.a19 = function(a33) {
		return !!this.to() && eP + t > an.t - a33 - bR.gap
	}, this.zL = function() {
		to = !a1.gR
	}, this.a2m = function() {
		to = !1
	}, this.gj = function() {
		return bB.oV(Math.floor(1024 * hf + .5) - 1, 0, 1023)
	}, this.xL = function(kU, kV) {
		return this.to() && eP < kU && kU < eP + t && kV > this.eR
	}, this.gV = function(kU, kV) {
		return !!this.to() && !!aE.xL(kU, kV) && (aF.lp = !1, function(vh, kU, kV) {
			if (function(kU, kV) {
					return eP < kU && kU < eP + a2u && kV > aE.eR
				}(kU, kV)) return a37(a2v);
			if (function(kU, kV) {
					return eP + t - a2u < kU && kU < eP + t && kV > aE.eR
				}(kU, kV)) return a37(1 / a2v);
			return vh.gW = !0, a38(kU)
		}(this, kU, kV) && (bU.dO = !0), !0)
	}, this.xO = function(lw) {
		0 !== a1.v9 && this.to() && a37(lw) && (bU.dO = !0)
	}, this.wt = function(deltaY) {
		var lw;
		return !(0 === deltaY || !this.to()) && a37(lw = 0 < deltaY ? (lw = 400 / (400 + deltaY)) < a2v ? a2v : lw : 1 / a2v < (lw = (400 - deltaY) / 400) ? 1 / a2v : lw)
	}, this.wq = function(kU) {
		return !!this.gW && a38(kU)
	}, this.xH = function() {
		this.gW = !1
	}, this.iC = function() {
		this.to() && zI !== b2.fd.he(a1.e2, this.gj()) && (a1y = !0)
	}, this.qn = function() {
		this.to() && qo.drawImage(h0, eP, this.eR)
	}
}

function cl() {
	var h0, tU, a39, font, a3A = 0,
		a3B = !1,
		a3C = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a3D = 5;

	function a3J() {
		if (a3B) {
			var z, eI = a3C.length,
				a32 = Math.floor(.5 * a39.ir),
				ir = eI * a32,
				eP = Math.floor(Math.floor(a39.eP) + .3 * a39.t - .5),
				eR = Math.floor(Math.floor(a39.eR) - ir),
				t = Math.floor(.4 * a39.t + 2.5);
			for (qo.fillStyle = p.mH, qo.fillRect(eP, eR, t, ir), qo.fillStyle = p.mg, qo.fillRect(eP, eR + a3D * a32, t, a32), qo.fillStyle = p.mL, qo.fillRect(eP, eR, 2, ir), qo.fillRect(eP, eR, t, 2), qo.fillRect(eP + t - 2, eR, 2, ir), z = 1; z <
				eI; z++) qo.fillRect(eP, eR + z * a32, t, 2);
			for (qo.fillStyle = p.mL, b2.ow.textAlign(qo, 1), b2.ow.textBaseline(qo, 1), qo.font = b2.ow.q5(0, .6 * a32), eP += .5 * t, z = 0; z < eI; z++) qo.fillText(a3R(z), eP, eR + (z + .6) * a32)
		}
		qo.drawImage(h0, Math.floor(a39.eP), Math.floor(a39.eR))
	}

	function l2(vh) {
		var eP, lk, ll, a32;
		tU.clearRect(0, 0, Math.floor(a39.t), Math.floor(a39.ir)), tU.fillStyle = p.mH, tU.fillRect(0, 0, Math.floor(a39.t), Math.floor(a39.ir)), a1.ln && (tU.fillStyle = p.mg, tU.fillRect(0, 0, Math.floor(.3 * a39.t), Math.floor(a39.ir))), tU
			.fillStyle = p.mL, tU.fillText("Hide UI", .15 * a39.t, .5 * a39.ir), tU.fillRect(Math.floor(.3 * a39.t - .5), 0, 2, Math.floor(a39.ir)), eP = .5 * a39.t, tU.fillText("Replay Speed", eP, .31 * a39.ir), tU.fillText(a3R(a3D), eP, .69 * a39
				.ir), tU.fillRect(Math.floor(.7 * a39.t - .5), 0, 2, Math.floor(a39.ir)), vh.zq ? (eP = Math.floor(.02 * a39.t), vh = Math.floor(.025 * a39.t), lk = Math.floor(.85 * a39.t - eP - .5 * vh), ll = Math.floor(.25 * a39.ir), a32 = Math
				.floor(a39.ir) - 2 * ll, tU.fillRect(lk, ll, eP, a32), tU.fillRect(lk + eP + vh, ll, eP, a32)) : function() {
				var t = Math.floor(.46 * a39.ir),
					ir = Math.floor(.23 * a39.ir),
					eP = Math.floor(.85 * a39.t - .5 * t + t / 12),
					eR = Math.floor(.5 * a39.ir - ir);
				tU.beginPath(), tU.moveTo(eP, eR), tU.lineTo(eP + t, eR + ir), tU.lineTo(eP, eR + (ir << 1)), tU.fill()
			}(), tU.fillRect(0, 0, Math.floor(a39.t), 2), tU.fillRect(0, 0, 2, Math.floor(a39.ir)), tU.fillRect(0, Math.floor(a39.ir) - 2, Math.floor(a39.t), 2), tU.fillRect(Math.floor(a39.t - 2), 0, 2, Math.floor(a39.ir))
	}

	function a3R(z) {
		return 5 === z ? "Normal" : "" + a3C[z]
	}
	this.zq = !1, this.dH = function() {
		a1.gR && (a3D = 5, this.zq = !1, a3B = !1, a39 = new pR([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a3E = function() {
		return a3C[a3D]
	}, this.tQ = function() {
		return a39.eR
	}, this.a19 = function(a33) {
		return !!a1.gR && a39.eP + a39.t > an.t - a33 - bR.gap
	}, this.resize = function() {
		a1.gR && (a39.resize(), a39.eR -= (bZ.zs() - 1) * bR.gap, font = b2.ow.q5(0, .3 * a39.ir), (h0 = document.createElement("canvas")).width = Math.floor(a39.t), h0.height = Math.floor(a39.ir), (tU = h0.getContext("2d", {
			alpha: !0
		})).font = font, b2.ow.textAlign(tU, 1), b2.ow.textBaseline(tU, 1), l2(this))
	}, this.xS = function(a3F) {
		0 === a1.v9 || i.to() || a3F !== a1.ln && (a1.ln = a3F, bW.resize(), bU.dO = !0, a1.gR) && (a3A = bU.ds + 2e3, l2(this))
	}, this.gV = function(eP, eR) {
		if (!a1.gR) return !1;
		if (eP < a39.eP || eR < a39.eR || eP > a39.eP + a39.t) return a3B && function(vh, eP, eR) {
			var eI = a3C.length,
				a32 = Math.floor(.5 * a39.ir),
				ir = eI * a32,
				lk = Math.floor(Math.floor(a39.eP) + .3 * a39.t - .5),
				ir = Math.floor(Math.floor(a39.eR) - ir),
				t = Math.floor(.4 * a39.t + 2.5);
			return a3B = !1, bU.dO = !0, eP < lk || lk + t < eP || eR < ir || (a3D = a3I(0, Math.floor((eR - ir) / a32), eI - 1), l2(vh)), !0
		}(this, eP, eR);
		if ((eP -= a39.eP) < .3 * a39.t) a3B = !1, this.xS(!a1.ln);
		else {
			if (eP < .7 * a39.t) return a3B = !a3B, bU.dO = !0;
			this.xU(!1)
		}
		return !0
	}, this.xU = function(a3H) {
		2 === a1.v9 ? (this.xS(!1), i.j(3)) : (a3B = !1, this.zq = !this.zq, this.zq ? (a9.gS && a9.xT(), m.n.setState(1)) : a3H || a9.a0a(), bU.dO = !0, l2(this))
	}, this.xV = function() {
		this.zq = !1, a9.a0a(), bU.dO = !0, l2(this)
	}, this.x9 = function(eP, eR) {
		return !!a1.ln && (a9.gV(eP, eR) || (a1.gR ? ((bU.ds > a3A || !this.gV(eP, eR)) && aF.gV(eP, eR), bU.dO = !0, a3A = bU.ds + 2e3) : aF.gV(eP, eR)), !0)
	}, this.iC = function() {
		a1.gR && a1.ln && bU.ds > a3A - 1e3 && bU.ds < a3A && (bU.dO = !0)
	}, this.vH = function() {
		a1.gR && (this.zq = !1, bU.dO = !0, l2(this))
	}, this.qn = function() {
		if (a1.gR) {
			if (a1.ln) {
				if (bU.ds > a3A) return;
				if (bU.ds > a3A - 1e3) return qo.globalAlpha = a3I(0, (1e3 - (bU.ds - (a3A - 1e3))) / 1e3, 1), a3J(), void(qo.globalAlpha = 1)
			}
			a3J()
		}
	}
}

function c0() {
	var a3S, a3T, t, eP, eR, a3U, a3V;
	this.dH = function() {
		a3S = new Array(2), a3T = new Array(2), this.lp = !1, a3V = a3U = hi = hg = 0, hh = 1, this.resize()
	}, this.resize = function() {
		t = (t = Math.floor((m.n.uE() ? .072 : .0502) * an.oy)) < 8 ? 8 : t;
		for (var z = 1; 0 <= z; z--) a3S[z] = document.createElement("canvas"), a3S[z].width = t, a3S[z].height = t, a3T[z] = a3S[z].getContext("2d", {
			alpha: !0
		});
		this.a2w(),
			function() {
				for (var a3k = Math.floor(1 + t / 20), z = 1; 0 <= z; z--) a3T[z].clearRect(0, 0, t, t), a3T[z].fillStyle = p.mE, a3T[z].beginPath(), a3T[z].arc(t / 2, t / 2, t / 2 - a3k, 0, 2 * Math.PI), a3T[z].fill(), a3T[z].lineWidth = a3k,
					a3T[z].fillStyle = p.mL, a3T[z].strokeStyle = p.mL, a3T[z].beginPath(), a3T[z].arc(t / 2, t / 2, t / 2 - a3k, 0, 2 * Math.PI), a3T[z].stroke(), tX(a3T[z], 0, 0, t, a3k, .3, 0 === z)
			}()
	}, this.tP = function() {
		return -hg / hh
	}, this.tQ = function() {
		return -hi / hh
	}, this.m0 = function(a3Z, hO) {
		hg = hh * a3Z - hO
	}, this.m1 = function(a3a, hP) {
		hi = hh * a3a - hP
	}, this.gV = function(a3Y, a1A) {
		return a1.ln || ! function(a3Y, a1A) {
			return Math.pow(a3Y - (eP + t / 2), 2) + Math.pow(a1A - (eR + t / 2), 2) < t * t / 4 || Math.pow(a3Y - (eP + t / 2), 2) + Math.pow(a1A - (eR + 2 * t), 2) < t * t / 4
		}(a3Y, a1A) || bY.dZ.data[8].value ? (a5.m3() && (this.lp = !0, a3U = a3Y, a3V = a1A), !1) : a1A < eR + 1.25 * t ? this.wt(Math.floor(an.t / 2), Math.floor(an.ir / 2), -200) : this.wt(Math.floor(an.t / 2), Math.floor(an.ir / 2), 200)
	}, this.wq = function(a3Y, a1A) {
		var a3b, a3c, hR, hU;
		return !a5.m3() || (a3b = hg, a3c = hi, hg += hR = a3U - a3Y, hi += hU = a3V - a1A, aU.wq(hR, hU), this.a3d(), a3U = a3Y, a3V = a1A, a3b !== hg) || a3c !== hi
	}, this.wt = function(kU, kV, deltaY) {
		var lw;
		if (a5.m3()) {
			if (0 < deltaY) lw = (lw = 500 / (500 + deltaY)) < .5 ? .5 : lw;
			else {
				if (!(deltaY < 0)) return !1;
				lw = 2 < (lw = (500 - deltaY) / 500) ? 2 : lw
			}
			this.a3e(kU, kV, lw), bU.dO = !0
		}
		return !0
	}, this.a3e = function(eP, eR, dy) {
		var xo;
		dy = xo = (xo = 1024 < (xo = dy) * hh ? 1024 / hh : xo) * hh < .125 ? .125 / hh : xo, aU.zoom(dy, eP, eR),
			function(xo, kU, kV) {
				hh *= xo, hg = (hg + kU) * xo - kU, hi = (hi + kV) * xo - kV, aF.a3d()
			}(dy, eP, eR)
	}, this.a3d = function() {
		var a3h = an.t / 16,
			h8 = 0,
			a3i = an.ir / 16,
			h9 = 0;
		hg < -an.t + a3h && (h8 = -an.t + a3h - hg), hg > hh * bI.eT - a3h && (h8 = hh * bI.eT - a3h - hg), hi < -an.ir + a3i && (h9 = -an.ir + a3i - hi), hi > hh * bI.eU - a3i && (h9 = hh * bI.eU - a3i - hi), hg += h8, hi += h9, bP.m2(), aU.a3j(
			h8, h9)
	}, this.a2w = function() {
		eP = an.t - t - bR.gap, eR = Math.floor(an.ir / 2 - 1.25 * t)
	}, this.qn = function() {
		bY.dZ.data[8].value || (qo.drawImage(a3S[0], eP, eR), qo.drawImage(a3S[1], eP, Math.floor(eR + 3 * t / 2)))
	}
}

function c1() {
	var ey, sk, a3l, a3m, gap, a3n, a3o, a3p, a3q, a3r, a0U, a3s, gM, a3t, a25, a3u, a3v, a3w;

	function a40() {
		a3m = Math.floor(.2 * (m.n.uE() ? .07 : .035) * an.oy), a3m = a17(m.n.uE() ? 3 : 1, a3m);
		var a43 = an.t / (ey.length + gap);
		a3m = a3m < a43 ? a43 : a3m, a25 = Math.floor((1 - gap) * a3m), sk = 0, a44()
	}

	function a44() {
		sk = (sk = sk < -20 ? -20 : sk) > (ey.length - 15) * a3m ? (ey.length - 15) * a3m : sk, a3o = Math.floor(sk / a3m), a3p = (a3p = a3o + Math.floor(an.t / a3m)) > ey.length - 1 ? ey.length - 1 : a3p, a3o = (a3o = a3p < a3o ? a3p : a3o) < 0 ?
			0 : a3o;
		var k8 = a3p;
		a3n = a3l / ey[k8];
		for (var z = a3p - 1; a3o <= z; z--) ey[z] > ey[k8] && (k8 = z, a3n = a3l / Math.pow(ey[z], a3t))
	}

	function a47(eP) {
		eP = Math.floor((sk + an.t - eP - gap * a3m) / a3m);
		return (eP = eP < -1 ? -1 : -1 === eP ? 0 : eP > ey.length - 1 ? -1 : eP) !== a3q && (a3q = eP, -1 === a3u && 0 === a3q && aG.a3x && (a3u = setInterval(a48, 100)), 1)
	}

	function a49(z) {
		var a1v = Math.floor(a3n * Math.pow(ey[z], a3t));
		qo.fillRect(sk + an.t - (z + 1) * a3m, an.ir - a1v, a25, a1v)
	}

	function a48() {
		var fo;
		0 !== (a3q = 8 === aN.wU() ? -1 : a3q) ? (a3v = (new Date).getTime(), clearInterval(a3u), a3u = -1) : (fo = ey[1] / 864e3, -1 !== a3v && (fo += ((new Date).getTime() - a3v) * ey[1] / 864e5, a3v = -1), 0 < fo && (ey[0] += Math.floor(fo), bU
			.dO = !0))
	}
	this.a3x = !1, this.dH = function() {
		a3v = a3u = -1, a3q = -(a3t = 1), this.a3y = !1, gM = 0, a3s = new Date, sk = 0, gap = .3, (a3w = []).push({
			fj: "Plateau A",
			eI: 0,
			d: 57
		}), a3w.push({
			fj: "Max A",
			eI: 1,
			d: 1
		}), a3w.push({
			fj: "Black Friday",
			eI: 15,
			d: 15
		}), a3w.push({
			fj: "Max B",
			eI: 19,
			d: 19
		}), a3w.push({
			fj: "Max C",
			eI: 44,
			d: 44
		}), a3w.push({
			fj: "First Android Version",
			eI: 58,
			d: 58
		}), a3w.push({
			fj: "Max D",
			eI: 67,
			d: 67
		}), a3w.push({
			fj: "The iFrame Explosion",
			eI: 98,
			d: 99
		}), a3w.push({
			fj: "The 155-Day Uptrend",
			eI: 58,
			d: 213
		}), a3w.push({
			fj: "Max E",
			eI: 213,
			d: 213
		}), a3w.push({
			fj: "Plateau B",
			eI: 214,
			d: 259
		}), a3w.push({
			fj: "Turbulent Times",
			eI: 260,
			d: 344
		}), a3w.push({
			fj: "Max F",
			eI: 262,
			d: 262
		}), a3w.push({
			fj: "Max G",
			eI: 282,
			d: 282
		}), a3w.push({
			fj: "Max H",
			eI: 333,
			d: 333
		}), a3w.push({
			fj: "The 19-Day Downtrend",
			eI: 283,
			d: 301
		}), a3w.push({
			fj: "Plateau C",
			eI: 345,
			d: 385
		}), a3w.push({
			fj: "The Alliance Ascent",
			eI: 386,
			d: 395
		}), a3w.push({
			fj: "Max I",
			eI: 395,
			d: 395
		}), a3w.push({
			fj: "First iOS Version",
			eI: 411,
			d: 411
		}), a3w.push({
			fj: "Plateau D",
			eI: 396,
			d: 453
		}), a3w.push({
			fj: "The TikTok Revolution",
			eI: 454,
			d: 470
		}), a3w.push({
			fj: "Max J",
			eI: 456,
			d: 456
		}), a3w.push({
			fj: "Max K",
			eI: 472,
			d: 472
		}), a3w.push({
			fj: "Max L",
			eI: 478,
			d: 478
		}), a3w.push({
			fj: "YT Drew",
			eI: 471,
			d: 485
		}), a3w.push({
			fj: "Plateau E",
			eI: 485,
			d: 600
		}), a3w.push({
			fj: "Uptrend A",
			eI: 600,
			d: 613
		}), a3w.push({
			fj: "Max M",
			eI: 613,
			d: 613
		}), a3w.push({
			fj: "Downtrend A",
			eI: 614,
			d: 635
		}), a3w.push({
			fj: "Plateau F",
			eI: 636,
			d: 737
		}), a3w.push({
			fj: "End of Record",
			eI: 738,
			d: 738
		}), ey = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
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
		a3l = Math.floor(.15 * an.ir), a3r = (a3r = Math.floor((m.n.uE() ? .018 : .0137) * an.oy)) < 2 ? 2 : a3r, a0U = b2.ow.q5(1, a3r), a40()
	}, this.a41 = function(a42) {
		var z;
		for (this.a3x = !0, z = 0; z < a42.length; z++) ey.unshift(a42[z]);
		a40(), bU.dO = !0
	}, this.a45 = function() {
		a44()
	}, this.wq = function(eP, eR) {
		eR > an.ir - .6 * a3l ? this.a3y ? eP !== gM && (sk += eP - gM, gM = eP, a44(), a47(eP), this.a3y = -1 !== a3q, bU.dO = !0) : a47(eP) && (bU.dO = !0) : this.xF()
	}, this.xF = function() {
		-1 !== a3q && (this.a3y = !1, a3q = -1, bU.dO = !0)
	}, this.wt = function(eP, deltaY) {
		-1 !== a3q && (sk += Math.floor(deltaY), a44(), a47(eP), bU.dO = !0)
	}, this.gV = function(eP, eR) {
		this.wq(eP, eR), -1 !== a3q && (gM = eP, this.a3y = !0)
	}, this.xG = function() {
		-1 !== a3q && (this.a3y = !1)
	}, this.qn = function() {
		qo.fillStyle = p.mO;
		for (var a4B, month, dt, q8, a4E, a4F, ll, a4G, a4H, z = a3p; a3o <= z; z--) a49(z);
		this.a3x && 0 === a3o && (qo.fillStyle = p.mp, a49(0)), -1 !== a3q && (qo.fillStyle = p.mN, a49(a3q)), -1 !== a3q && (qo.font = a0U, b2.ow.textBaseline(qo, 2), (dt = new Date).setTime(a3s.getTime() - 1e3 * a3q * 60 * 60 * 24), month =
			"month", a4B = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dt), a4B = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dt)), a4B = a4B + ", " + dt.getUTCDate() + " " + month + " " + dt.getFullYear(), month = 1 === ey[a3q] ? L(84) : L(85), month = b2.w0.z6(ey[a3q]) + " " + month, dt = Math.floor(qo.measureText(a4B).width), q8 = Math
			.floor(qo.measureText(month).width), a4E = Math.floor(.5 * (dt + a3r)), a4F = (a4F = sk + an.t - (a3q + 1) * a3m) < a4E ? a4E : a4F > an.t - a4E ? an.t - a4E : a4F, ll = an.ir - Math.floor(a3n * Math.pow(ey[a3q], a3t)), a4G = Math
			.floor(1.1 * a3r), a4H = ll > an.ir - a4G ? an.ir - a4G : ll, qo.fillStyle = p.mI, qo.fillRect(an.t - q8 - a3r, a4H - a4G, q8 + a3r, a4G), qo.fillRect(a4F - a4E, an.ir - a4G, dt + a3r, a4G), qo.fillStyle = p.mL, b2.ow.textAlign(
				qo, 2), qo.fillText(month, Math.floor(an.t - .5 * a3r), a4H),
			function(ll, a4G) {
				for (var q7, kA = -1, o0 = ey.length - a3q - 1, z = a3w.length - 1; 0 <= z; z--) o0 >= a3w[z].eI && o0 <= a3w[z].d && (-1 === kA || a3w[z].d - a3w[z].eI < a3w[kA].d - a3w[kA].eI) && (kA = z); - 1 !== kA && (q7 = Math.floor(qo
					.measureText(a3w[kA].fj).width), qo.fillStyle = p.mI, qo.fillRect(an.t - q7 - a3r, ll, q7 + a3r, a4G), qo.fillStyle = p.mL, qo.fillText(a3w[kA].fj, Math.floor(an.t - .5 * a3r), ll + a4G))
			}(a4H - 2 * a4G, a4G), b2.ow.textAlign(qo, 1), qo.fillText(a4B, a4F, an.ir), qo.strokeStyle = p.mP, qo.lineWidth = 1, qo.beginPath(), qo.moveTo(0, ll), qo.lineTo(an.t, ll), qo.closePath(), qo.stroke())
	}
}

function c2() {
	var a0U, t, eR, a4J, a4K, h0, tU, a1y, yh, a4L, a4M, a4N, a4O;
	this.eP = 0, this.ir = 0, this.dH = function() {
		a4K = a1.t9, a4M = "rgba(0,100,0,0.8)", a4N = "rgba(150,0,0,0.8)", a1y = !(a4L = !0), yh = aV.gK[a1.e2], this.resize()
	}, this.resize = function() {
		t = Math.floor((m.n.uE() ? .305 : .24) * an.oy), this.ir = Math.floor(.5 + .13 * t), t = Math.floor(6 * this.ir), a0U = b2.ow.q5(1, Math.floor(.8 * this.ir)), a4O = Math.floor(.5 * this.ir), bI.sJ.font = a0U, eR = bR.gap, a4J = Math
			.floor(1 + .13 * this.ir), (h0 = document.createElement("canvas")).width = t, h0.height = this.ir, (tU = h0.getContext("2d", {
				alpha: !0
			})).font = a0U, b2.ow.textBaseline(tU, 1), b2.ow.textAlign(tU, 1), this.a4P()
	}, this.a2M = function() {
		return m.n.uE() && an.t < 1.2 * an.ir
	}, this.a2w = function() {
		this.a2M() ? this.eP = an.t - t - bR.gap : this.eP = Math.floor(aI.a4Q() + (an.t - aI.a4Q() - aJ.t - t) / 2 - .5 * bR.gap)
	}, this.l1 = function() {
		a1y && (a1y = !1, this.a4P())
	}, this.a4P = function() {
		tU.clearRect(0, 0, t, this.ir), tU.fillStyle = a4L ? a4M : a4N, tU.fillRect(0, 0, t, this.ir), tU.fillStyle = p.mN, this.a4R(), this.a4S(), tU.fillStyle = aV.gK[a1.e2] >= aT.j3(a1.e2) ? p.mm : p.mL, tU.fillText(b2.w0.z6(yh), Math.floor(
			t / 2), a4O), tU.fillStyle = p.mL, tU.fillRect(0, 0, t, 1), tU.fillRect(0, 0, 1, this.ir), tU.fillRect(0, this.ir - 1, t, 1), tU.fillRect(t - 1, 0, 1, this.ir)
	}, this.a4R = function() {
		var ss = a4U(Math.floor((aT.a4T() - 1) * this.ir / 9), this.ir - a4J);
		tU.fillRect(0, ss, a4J, this.ir - ss), tU.fillRect(t - a4J, ss, a4J, this.ir - ss)
	}, this.a4S = function() {
		tU.fillRect(a4J, this.ir - a4J, Math.floor((t - 2 * a4J) * aV.gK[a1.e2] / a4K), a4J)
	}, this.iC = function() {
		var ec;
		0 !== aV.lI[a1.e2] && 2 !== aV.yb[a1.e2] && (ec = aV.gK[a1.e2] - aV.yg[a1.e2], yh !== ec) && (a4K = a17(ec, a4K), a4L = yh < ec && 10 <= ec, yh = ec, a1y = !0)
	}, this.qn = function() {
		0 === aV.lI[a1.e2] || a1.gd || 2 === aV.yb[a1.e2] || qo.drawImage(h0, this.eP, eR)
	}
}

function c3() {
	var a4V, a4W, a4X, a4Y, a4Z, a4a, a4b, a4c, a4d, a4e, a4f, a4g, a4h, a4i, a4j, a4k, a4l, a4m, a4n, a4o, a4p, a4q, position, a4r, a4s, a4t, a4u, a4v = 1,
		a4w = 1;
	var leaderboardHasChanged = true;
	this.playerPos = a1.e2;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => j8[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(j8[a1.e2]);
	}

	function a4y() {
		a4b.clearRect(0, 0, a4V, a2c),
			a4b.fillStyle = p.n0,
			a4b.fillRect(0, 0, a4V, a4g),
			a4b.fillStyle = p.mH,
			a4b.fillRect(0, a4g, a4V, a2c - a4g);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			j8[a1.e2]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a4q = -1;
		if (__fx.leaderboardFilter.enabled && a4q >= __fx.leaderboardFilter.filteredLeaderboard.length) a4q = -1;
		playerPos >= position && a50(playerPos - position, p.mg),
			0 !== j8[a1.e2] && 0 === position && a50(0, p.n5),
			-1 !== a4q && a50(a4q, p.mM),
			a4b.fillStyle = p.mH,
			//console.log("drawing", a4q),
			a4b.clearRect(0, a2c - __fx.leaderboardFilter.tabBarOffset, a4V, __fx.leaderboardFilter.tabBarOffset);
		a4b.fillRect(0, a2c - __fx.leaderboardFilter.tabBarOffset, a4V, __fx.leaderboardFilter.tabBarOffset);
		a4b.fillStyle = p.mL,
			a4b.fillRect(0, a4g, a4V, 1),
			a4b.fillRect(0, a2c - __fx.leaderboardFilter.tabBarOffset, a4V, 1),
			__fx.leaderboardFilter.drawTabs(a4b, a4V, a2c - __fx.leaderboardFilter.tabBarOffset, p.mg),
			a4b.fillRect(0, 0, a4V, bR.uH),
			a4b.fillRect(0, 0, bR.uH, a2c),
			a4b.fillRect(a4V - bR.uH, 0, bR.uH, a2c),
			a4b.fillRect(0, a2c - bR.uH, a4V, bR.uH), a4b.font = a4W, b2.ow.textBaseline(a4b, 1), b2.ow.textAlign(a4b, 1), a4b.fillText(L(86), Math.floor((a4V + a4g - 22) / 2), Math.floor(a4e + a4X / 2));
		__fx.playerList.drawButton(a4b, 12, 12, a4g - 22);
		var eb, fp = playerPos < position + a4Z - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a4Z)
				position = (result.length > a4Z ? result.length : a4Z) - a4Z;
			//if (position >= result.length) position = result.length - 1;
			for (a4b.font = a4Y, b2.ow.textAlign(a4b, 0), eb = a4Z - fp; 0 <= eb; eb--) {
				const pos = result[eb + position];
				if (pos !== undefined)
					a51(kf[pos]), a52(eb, pos, kf[pos]);
			}
			for (b2.ow.textAlign(a4b, 2), eb = a4Z - fp; 0 <= eb; eb--) {
				const pos = result[eb + position];
				if (pos !== undefined)
					a51(kf[pos]), a53(eb, kf[pos]);
			}
		} else {
			for (a4b.font = a4Y, b2.ow.textAlign(a4b, 0), eb = a4Z - fp; 0 <= eb; eb--)
				a51(kf[eb + position]), a52(eb, eb + position, kf[eb + position]);
			for (b2.ow.textAlign(a4b, 2), eb = a4Z - fp; 0 <= eb; eb--)
				a51(kf[eb + position]), a53(eb, kf[eb + position]);
		}
		2 == fp && (a51(a1.e2), b2.ow.textAlign(a4b, 0), a52(a4Z - 1, j8[a1.e2], a1.e2), b2.ow.textAlign(a4b, 2), a53(a4Z - 1, a1.e2)), 0 === position && (fp = .7 * a4h / aP.get(4).height, a4b.setTransform(fp, 0, 0, fp, Math.floor(a4i + .58 * a4h +
			.5 * fp * aP.get(4).width), Math.floor(a4e + a4X + .4 * a4h)), a4b.imageSmoothingEnabled = !0, a4b.drawImage(aP.get(4), -Math.floor(aP.get(4).width / 2), -Math.floor(aP.get(4).height / 2)), a4b.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a51(player) {
		a1.iN && (a4b.fillStyle = bV.a55[bV.vU[bV.eG[player]]])
	}

	function a50(z, a56) {
		a4b.fillStyle = a56, z = a4Z - 1 < z ? a4Z - 1 : z;
		a56 = Math.floor((z === a4Z - 1 ? 2 : 0 === z ? 1.15 : 1) * a4h), a56 = z === a4Z - 2 ? Math.floor(a4g + 9.15 * a4h) - Math.floor(a4g + 8.15 * a4h) : a56;
		a4b.fillRect(0, Math.floor(a4g + (z + (0 === z ? 0 : .15)) * a4h), a4V, a56)
	}

	function a52(a58, vp, z) {
		a4b.fillText(a4m[vp], a4i, Math.floor(a4e + a4X + (a58 + .5) * a4h)), 1 === aV.yb[z] && (a4b.font = "italic " + a4Y);
		vp = Math.floor(a4e + a4X + (a58 + .5) * a4h);
		a4b.fillText(aV.a1G[z], a4j, vp), 0 !== aV.yb[z] && (a4b.font = a4Y), z < a1.jN && 2 !== aV.yb[z] || a4b.fillRect(a4j, vp + .35 * a4v, a4l[z], Math.max(1, .1 * a4v))
	}

	function a53(a58, z) {
		a4b.fillText(aV.g6[z], a4k, Math.floor(a4e + a4X + (a58 + .5) * a4h))
	}

	function a5H(eR) {
		return (eR -= bR.gap + a4g) < 0 ? Math.floor(eR / a4h) - 1 : eR < (a4Z - 1) * a4h ? Math.floor(eR / a4h) : eR < a2c - a4g ? a4Z - 1 : (eR -= a2c - a4g, a4Z + Math.floor(eR / a4h))
	}

	function uG(eP, eR) {
		return eP >= bR.gap && eP < bR.gap + a4V && eR >= bR.gap && eR < bR.gap + a2c
	}
	this.dH = function() {
			var z;
			for (a4s = !1, a4u = a4t = a4r = 0, a4q = -1, a4Z = m.n.uE() ? 6 : 10, a4w = (position = 0) === (a4w = bY.dZ.data[11].value) ? 10 : 1 === a4w ? 5 : 1, a4p = !1, a4n = new Uint16Array(a4Z + 1), a4o = new Uint32Array(a4Z + 1), a4d = a1.eF,
				kf = new Uint16Array(a4d), j8 = new Uint16Array(a4d), z = a4d - 1; 0 <= z; z--) kf[z] = z, j8[z] = z;
			this.resize(!0), a4l = new Uint16Array(a1.eF);
			var a4x = Math.floor(a4V - a4j - a4i - a4c);
			for (a4m = new Array(a1.eF), a4b.font = a4Y, z = a1.eF - 1; 0 <= z; z--) a4m[z] = z + 1 + ".", aV.a1G[z] = b2.tU.yI(aV.w2[z], a4Y, a4x), a4l[z] = Math.floor(a4b.measureText(aV.a1G[z]).width);
			a4y()
		}, this.resize = function(dH) {
			if (a2c = m.n.uE() ? (a4V = Math.floor(.335 * an.oy), Math.floor(a4Z * a4V / 8)) : (a4V = Math.floor(.27 * an.oy), Math.floor(a4Z * a4V / 10)), a4V = Math.floor(.97 * a4V), (a4a = document.createElement("canvas")).width = a4V, a4a
				.height = a2c, a4b = a4a.getContext("2d", {
					alpha: !0
				}), a4e = .025 * a4V, a4X = .16 * a4V, a4f = 0 * a4V, a4g = Math.floor(.45 * a4e + a4X), a4h = (a2c - a4X - 2 * a4e - a4f) / a4Z,
				a4a.height = a2c += a4h, __fx.leaderboardFilter.tabBarOffset = Math.floor(a4h * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a2c - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a4V,
				a4W = b2.ow.q5(1, Math.floor(.55 * a4X)), a4v = Math.floor((m.n.uE() ? .67 : .72) * a4h), a4Y = b2.ow.q5(0, a4v), a4b.font = a4Y, a4i = Math.floor(.04 * a4V), a4j = Math.floor((m.n.uE() ? .195 : .18) * a4V), a4c = Math.floor(a4b
					.measureText("00920600").width), a4b.font = a4W, a4k = a4V - a4i, !dH) {
				a4b.font = a4Y;
				for (var z = a1.eF - 1; 0 <= z; z--) a4l[z] = Math.floor(a4b.measureText(aV.a1G[z]).width);
				a4y()
			}
		}, this.a4Q = function() {
			return a4V
		}, this.l1 = function(bc, a4z) {
			(a4z || a4p && (bc || bU.jK() % a4w == 0)) && (a4p = !1, a4y())
		}, this.iC = function() {
			! function() {
				for (var eb = a4d - 1; 0 <= eb; eb--) 0 === aV.lI[kf[eb]] && ! function(eb) {
					var a5F = kf[eb];
					a4d--;
					for (var z = eb; z < a4d; z++) kf[z] = kf[z + 1], j8[kf[z]] = z;
					kf[a4d] = a5F, j8[kf[a4d]] = a4d
				}(eb)
			}();
			for (var a5D, m3 = a4d - 1, eb = 0; eb < m3; eb++) aV.g6[kf[eb]] < aV.g6[kf[eb + 1]] && (a5D = kf[eb], kf[eb] = kf[eb + 1], kf[eb + 1] = a5D, j8[kf[eb]] = eb, j8[kf[eb + 1]] = eb + 1);
			! function() {
				for (var dt = a4p, fp = (a4p = !0, j8[a1.e2] >= a4Z - 1 ? a4Z - 2 : a4Z - 1), z = fp; 0 <= z; z--)
					if (a4n[z] !== kf[z] || a4o[z] !== aV.g6[kf[z]]) return;
				(fp != a4Z - 2 || a4n[a4Z] === j8[a1.e2] && a4o[a4Z] === aV.g6[a1.e2]) && (a4p = dt)
			}();
			for (var z = a4Z - 1; 0 <= z; z--) a4n[z] = kf[z], a4o[z] = aV.g6[kf[z]];
			a4n[a4Z] = j8[a1.e2], a4o[a4Z] = aV.g6[a1.e2];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.gV = function(eP, eR) {
			return !!uG(eP, eR) && ((__fx.utils.isPointInRectangle(eP, eR, bR.gap + 12, bR.gap + 12, a4g - 22, a4g - 22) && __fx.playerList.display(aV.w2), true) &&
				!(eR - bR.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(eP - bR.gap)) && (a4r = bU.ds, a4s = !0, a4t = a4u = a5H(eR), b9.xW() && (eP = a3I(-1, a4u, a4Z), a4q !== (eP = eP === a4Z ? -
					1 : eP)) && (a4q = eP, a4y(), bU.dO = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			a4y(), bU.dO = !0;
		},
		this.wq = function(eP, eR) {
			if (__fx.utils.isPointInRectangle(eP, eR, bR.gap + 12, bR.gap + 12, a4g - 22, a4g - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, a4y(), bU.dO = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, a4y(), bU.dO = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(eP, eR, bR.gap, bR.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), eP - bR.gap
				)) return;
			var dt, a5G = a5H(eR);
			return a4s ? (dt = position, (position = a3I(0, position += a4t - a5G, a1.eF - a4Z)) !== dt && (a5G = (a5G = a3I(-1, a4t = a5G, a4Z)) !== a4Z && uG(eP, eR) ? a5G : -1, a4q = a5G, a4y(), bU.dO = !0), !0) : (a5G = (a5G = a3I(-1, a5G,
				a4Z)) === a4Z || !uG(eP, eR) || b9.xW() ? -1 : a5G, a4q !== a5G && (a4q = a5G, a4y(), bU.dO = !0))
		}, this.xG = function(eP, eR) {
			if (!a4s) return !1;
			a4s = !1;
			var a5G = a5H(eR);
			var isEmptySpace = false;
			return b9.xW() && -1 !== a4q && (a4q = -1, a4y(), bU.dO = !0), bU.ds - a4r < 350 && a4u === a5G && -1 !== (a5G = (a5G = a3I(-1, a5G, a4Z)) !== a4Z && uG(eP, eR) ? a5G : -1) && (eP = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					kf[__fx.leaderboardFilter.filteredLeaderboard[a5G + position] ?? (isEmptySpace = true, j8[a1.e2])]) : kf[a5G + position]), a5G === a4Z - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : j8[a1.e2]) >=
				position + a4Z - 1 && (eP = a1.e2), !isEmptySpace && a1.iN && __fx.donationsTracker.displayHistory(eP, aV.w2, a1.jn), 0 !== aV.lI[eP] && !isEmptySpace) && a5.le(eP, 800, !1, 0), !0
		}, this.wt = function(eP, eR, deltaY) {
			var a5I;
			return !(a4s || a1.ln || (a5I = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !uG(eP, eR)) || (eP = (eP = a3I(-1, a5H(eR), a4Z)) === a4Z || b9.xW() ? -1 : eP, 0 < deltaY ? position < a1.eF - a4Z && (position += Math.min(a1.eF - a4Z -
				position, a5I), a4q = eP, a4y(), bU.dO = !0) : 0 < position && (position -= Math.min(position, a5I), a4q = eP, a4y(), bU.dO = !0), 0))
		}, this.qn = function() {
			qo.drawImage(a4a, bR.gap, bR.gap)
		}
}

function c4() {
	var h0, tU, eP, eR, a1v, a5J, gap, a5K, fontSize, a5L, a5M, lE, a5N, a5O, a5P, a5Q, a5R;

	function a5U() {
		tU.clearRect(0, 0, aJ.t, aJ.ir), tU.fillStyle = p.mI, tU.fillRect(0, 0, aJ.t, aJ.ir), tU.fillStyle = p.mc, dy = 0 < a5P ? a5P : Math.sqrt(lE[4] / 1e4), tU.fillRect(0, aJ.ir - a1v - 1, Math.floor(dy * aJ.t), a1v), tU.fillStyle = p.mL, tU
			.fillRect(0, 0, aJ.t, 1), tU.fillRect(0, 0, 1, aJ.ir), tU.fillRect(aJ.t - 1, 0, 1, aJ.ir), tU.fillRect(0, aJ.ir - 1, aJ.t, 1), tU.fillRect(0, aJ.ir - a1v - 1, aJ.t, 1);
		for (var dy, a5W, dt = 0, z = 0; z < a5M.length; z++) a5N[z] ? (b2.ow.textAlign(tU, 0), a5W = Math.floor((a5J - a1v + 2 * a5K) * (z - dt + 1) / (a5M.length + 1) - .7 * a5K), tU.fillText(a5M[z], gap, a5W), b2.ow.textAlign(tU, 2), 5 === z &&
			0 !== aV.lI[a1.e2] && aV.gK[a1.e2] >= aT.j3(a1.e2) ? (tU.fillStyle = p.n3, tU.fillText(a5T(z), aJ.t - gap, a5W), tU.fillStyle = p.mL) : tU.fillText(a5T(z), aJ.t - gap, a5W)) : dt++
	}

	function a5T(z) {
		return z < 3 ? lE[z].toString() : 3 === z || 4 === z || 5 === z ? b2.w0.zB(lE[z] / 100, 2) : z < 7 ? b2.w0.z6(lE[z]) : z === 7 ? aJ.a4T(lE[7]) : z === 8 ? __fx.utils.getMaxTroops(aV.g6, a1.e2) : __fx.utils.getDensity(a1.e2)
	}

	function a5S() {
		aV.g6[a1.e2] !== lE[6] && (lE[6] = aV.g6[a1.e2], a5L++)
	}
	this.dH = function() {
		a5P = a5Q = 0, (a5M = new Array(8))[0] = L(87), a5M[1] = a1.jn ? L(88) : L(89), a5M[2] = L(90), a5M[3] = L(91), a5M[4] = L(92), a5M[5] = L(93), a5M[6] = L(94), a5M[7] = L(95),
			a5M.push("Max Troops", "Density"), // add a5M
			(lE = new Array(a5M.length))[0] = a1.jn ? 0 : a1.jN, lE[1] = a1.jn ? aa.jO : a1.jk, lE[2] = a1.vB, lE[3] = 0, lE[4] = bB.ek(1e4 * aV.g6[0], a1.j7), lE[5] = 700, lE[6] = 0, a5S(), lE[7] = 0, a5O = a5T(6), a5N = new Array(a5M.length);
		for (var z = a5M.length - 1; 0 <= z; z--) a5N[z] = !0;
		a5R = 0, a5R = a1.jn ? (a5N[0] = !1, a5N[2] = !1, a5N[3] = !1, 3) : (a5N[3] = !1, 1), a5L = 0, this.resize()
	}, this.resize = function() {
		this.t = Math.floor((m.n.uE() ? .1646 : .126) * 1.25 * an.oy), this.ir = Math.floor(1.18 * this.t), a1v = Math.floor(.04 * this.t), gap = Math.floor(.035 * this.t), a5K = .04 * this.t, a5J = this.ir, this.ir -= Math.floor(a5R * (this.ir -
			2 * a1v) / a5M.length), fontSize = Math.floor(.7 * (a5J - a1v) / a5M.length), fontSize = b2.ow.q5(1, fontSize), (h0 = document.createElement("canvas")).width = this.t, h0.height = this.ir, (tU = h0.getContext("2d", {
			alpha: !0
		})).font = fontSize, b2.ow.textBaseline(tU, 1), tU.lineWidth = 1, this.zM(), this.a2w(), aH.a2w(), a5U()
	}, this.a2w = function() {
		eP = an.t - this.t - bR.gap
	}, this.a5V = function() {
		eR = bR.gap
	}, this.zM = function() {
		eR = bR.gap + (aH.a2M() && 0 !== aV.lI[a1.e2] && !a1.gd ? aH.ir + bR.gap : 0)
	}, this.l1 = function(bc) {
		(bc || 100 <= a5L) && (a5L = 0, a5U())
	}, this.a09 = function() {
		return lE[7]
	}, this.a4T = function(value) {
		var k8 = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * k8) / 1e3);
		return value < 10 ? k8 + ":0" + value : k8 + ":" + value
	}, this.iC = function() {
		var a5f, per;
		a5N[0] && a1.vC - a1.vB !== lE[0] && (lE[0] = a1.vC - a1.vB, a5L++), aa.jO - lE[0] !== lE[1] && (lE[1] = aa.jO - lE[0], a5L++), this.ks(), (a5f = aT.a5g(a1.e2)) !== lE[5] && (lE[5] = a5f, a5L++), a5S(), lE[7] += bU.a5h, a5f = a5T(7),
			a5O !== a5f && (a5O = a5f, a5L += 100), a5f = a1.iN ? bW.vk() : aV.g6[kf[0]], per = bB.ek(1e4 * a5f, a1.j7), lE[3] = a5f, lE[4] !== per && (a5L++, lE[4] = per), 8 === a1.jl && function() {
				for (var z = 0; z < 2; z++)
					if (!b2.fd.gU(z)) return bH.uo.v8(), 1;
				return
			}() || lE[3] < a1.j7 || ! function() {
				for (var z = aa.jO - 1; 0 <= z; z--)
					if (0 < aV.fi[aa.jQ[z]].length) return;
				return 1
			}() || bH.uo.v8()
	}, this.ks = function() {
		a5N[2] && a1.vB !== lE[2] && (lE[2] = a1.vB, a5L++)
	}, this.a5i = function(z) {
		var qL, a5j, dt;
		return 2 !== a1.v9 && (z % 2 == 1 && (aI.l1(1, 1), bU.dO = !0), z === a1.zV ? (a5P = 0, a5U(), !1) : (-1 !== z || 0 !== a5Q) && (a5j = a5P, a5P = a1.gR ? z / a1.zV : (dt = performance.now(), 0 <= z && (qL = dt - 392 * z, a5Q = 0 === z ||
			qL < a5Q ? qL : a5Q), 1 < (a5P = (dt - a5Q) / (392 * a1.zV)) ? 1 : a5P), a5U(), a5P !== a5j))
	}, this.qn = function() {
		qo.drawImage(h0, eP, eR)
	}
}

function c5() {
	var to, a5k, t, ir, a32, a5l, a5m, a2N, h0, lV, a5n;

	function tQ() {
		return Math.floor((an.t - t) / 2) < aE.ir + 2 * bR.gap ? an.ir - ir - 4 * bR.gap - aE.ir : an.ir - ir - 2 * bR.gap
	}
	this.a5o = -1, this.dH = function() {
		a5n = to = !1, a32 = .61, a5l = .07, a5m = .09, lV = a2N = ir = 0, this.a5o = -1
	}, this.resize = function() {
		var tU, lk, ed, a5s, a5t, a0Z;
		to && (t = a4U(t = m.n.uE() ? Math.floor(.69 * an.oy) : Math.floor(.5 * an.oy), a17(an.t - 2 * bR.gap, 10)), t = a4U(t, Math.floor(3.57 * a17(an.ir - 2 * bR.gap, 3))), ir = Math.floor(.28 * t), (h0 = document.createElement("canvas"))
			.width = t, h0.height = ir, tU = h0.getContext("2d", {
				alpha: !0
			}), lk = Math.floor(1 + ir / 40), tU.clearRect(0, 0, t, ir), tU.fillStyle = p.mI, tU.fillRect(lk, lk, t - 2 * lk, ir - 2 * lk), tU.lineJoin = "bevel", tU.lineWidth = 2 * lk, tU.strokeStyle = p.mL, tU.strokeRect(lk, lk, t - 2 * lk,
				ir - 2 * lk), tU.imageSmoothingEnabled = !1, ed = aP.get(a5k), a5s = ed.width, a0Z = (1 === a5k ? .85 : 21 === a5k ? .666 : .9) * a32 * ir / (a5t = ed.height), tU.setTransform(a0Z, 0, 0, a0Z, Math.floor((t - a0Z * a5s) / 2),
				Math.floor((ir - a0Z * a5t) / 2)), tU.drawImage(ed, 0, 0), tU.setTransform(1, 0, 0, 1, Math.floor(t - a5m * ir - a5l * ir - lk), Math.floor(lk + a5l * ir)),
			function(tU, eI) {
				tU.lineWidth = Math.floor(1 + ir / 80), tU.strokeStyle = p.mL, tU.beginPath(), tU.moveTo(0, 0), tU.lineTo(eI, eI), tU.moveTo(0, eI), tU.lineTo(eI, 0), tU.stroke()
			}(tU, Math.floor(a5m * ir)), tU.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(el, a5q, a2p, a5r) {
		to || a5r && a5n || (a5k = a2p ? 21 : el ? 1 : 2, to = a5n = !0, this.resize(), a8.qK(), aE.a2m(), lV = bU.ds, -1 === this.a5o && (this.a5o = bU.jK()), a2N = a5q ? 1 : 0)
	}, this.iC = function() {
		!to || 1 <= a2N || (a2N = 1 < (a2N += 5e-4 * (bU.ds - lV)) ? 1 : a2N, lV = bU.ds, bU.dO = !0)
	}, this.gV = function(eP, eR) {
		return !(!to || a2N <= 0 || (eP -= Math.floor((an.t - t) / 2), eR -= tQ(), eP < 0) || eR < 0 || t < eP || ir < eR || (t - ir / 3 < eP && eR < ir / 3 && (to = !1, bU.dO = !0), 0))
	}, this.qn = function() {
		!to || a2N <= 0 || (qo.globalAlpha = a2N, qo.drawImage(h0, Math.floor((an.t - t) / 2), tQ()), qo.globalAlpha = 1)
	}
}

function d7() {
	var a5v = [0, 0],
		a5w = [0, 0];

	function a5z(o0) {
		return 3 !== a5v[o0] && 1 !== a5w[o0] && (a5w[o0] = 1, a5v[o0]++, bY.pY.pZ(119, (a5v[0] << 2) + a5v[1]), 1)
	}
	this.a5x = new a5y, this.dH = function() {
		var el = bY.dZ.data[119].value;
		a5v[0] = el >> 2, a5v[1] = 3 & el
	}, this.zh = function() {
		this.a5x.dH()
	}, this.iC = function() {
		this.a5x.iC()
	}, this.a0A = function() {
		a5z(0) && aA.a1D(L(96))
	}, this.a0B = function() {
		a5z(1) && aA.a1D(L(97))
	}
}

function a5y() {
	var a60;
	this.dH = function() {
		a60 = !1
	}, this.iC = function() {
		var fo;
		if (function() {
				if (!a60) {
					if (bU.jK() % 30 != 9) return;
					if (!b2.fd.kZ(90)) return;
					a60 = !0
				}
				return 1
			}() && (! function() {
				var op = aA.a1Z(956);
				if (op) {
					if (b2.fd.kD(op.player)) return 1;
					aA.a1Y(956, 0)
				}
				return
			}() && (-1 === (fo = (a1.iN ? function() {
				for (var id = bW.kd(), eI = aa.jO, tb = aa.jQ, eG = bV.eG, z = 0; z < eI; z++) {
					var fo = tb[z];
					if (eG[fo] !== id) return fo
				}
				return -1
			} : function() {
				for (var a67 = aa.jO, jP = aa.jQ, a68 = j8, z = 0; z < a67; z++) {
					var fo = jP[z];
					if (0 !== a68[fo]) return fo
				}
				return -1
			})()) ? ! function() {
				var op = aA.a1Z(957);
				if (op && op.a13) {
					if (aQ.e9(op.a13.e4 << 2)) return 1;
					aA.a1Y(957, 0)
				}
				return
			}() : (aA.vY(0, L(98, [aV.a1G[fo]]), 956, fo, p.mL, p.mI, -1, !0), 0)))) {
			var eI = ac.hz.kP;
			if (0 === eI) ac.hz.kn();
			else
				for (var dZ = ac.hz.dZ, z = 0; z < eI; z++) {
					var e4 = dZ[z];
					if (aQ.e9(e4 << 2)) return void aA.vY(0, L(99, [bC.eQ(e4), bC.eS(e4)]), 957, 0, p.mL, p.mI, -1, !0, void 0, {
						eb: 1,
						e4: e4
					})
				}
		}
	}
}

function d8() {
	this.a69 = new a6A, this.dH = function() {
		this.a69.resize()
	}
}

function a6A() {
	this.resize = function() {
		var z, a6B = document.head.querySelector("style#ss");
		if (a6B)
			for (z = a6B.sheet.cssRules.length - 1; 0 <= z; z--) a6B.sheet.deleteRule(0);
		else(a6B = document.createElement("style")).id = "ss", document.head.appendChild(a6B);
		var a3A = "::-webkit-scrollbar",
			a6C = b2.ow.p7(bR.yQ),
			gu = b2.ow.p7(Math.max(b2.ow.pc(.012), 8));
		try {
			a6B.sheet.insertRule(a3A + "{width:" + gu + ";height:" + gu + ";}", a6B.sheet.cssRules.length), a6B.sheet.insertRule(a3A + "-thumb{background-color:white;}", a6B.sheet.cssRules.length), a6B.sheet.insertRule(a3A +
				"-track{background:" + p.mH + ";}", a6B.sheet.cssRules.length), a6B.sheet.insertRule(a3A + "-track:horizontal{border-top:" + a6C + " solid white;}", a6B.sheet.cssRules.length), a6B.sheet.insertRule(a3A +
				"-track:vertical{border-left:" + a6C + " solid white;}", a6B.sheet.cssRules.length), a6B.sheet.insertRule(a3A + "-button{display:none;}", a6B.sheet.cssRules.length)
		} catch (d) {
			for (console.log("error 3425: " + d), z = a6B.sheet.cssRules.length - 1; 0 <= z; z--) a6B.sheet.deleteRule(0)
		}
	}
}

function d6() {
	this.a6D = !1, this.mB = !1, this.zQ = !1, this.a6E = [0, 0, 0, 0], this.a6F = function() {
		var lk, ll, ly, lz;
		this.zQ = this.zQ || this.mB, (this.mB || this.a6D && this.zQ) && (lk = bP.a6G[0], ll = bP.a6G[1], ly = bP.a6G[2], lz = bP.a6G[3], lk = lk < this.a6E[0] ? this.a6E[0] : lk, ll = ll < this.a6E[1] ? this.a6E[1] : ll, ly = ly > this.a6E[2] ?
			this.a6E[2] : ly, lz = lz > this.a6E[3] ? this.a6E[3] : lz, this.mB = !1, this.a6D = !1, lk === this.a6E[0] && ll === this.a6E[1] && ly === this.a6E[2] && lz === this.a6E[3] ? this.zR() : lk <= ly && ll <= lz && zj.putImageData(
				zk, 0, 0, lk, ll, ly - lk + 1, lz - ll + 1))
	}, this.zR = function() {
		this.zQ && this.a6E[2] >= this.a6E[0] && this.a6E[3] >= this.a6E[1] && zj.putImageData(zk, 0, 0, this.a6E[0], this.a6E[1], this.a6E[2] - this.a6E[0] + 1, this.a6E[3] - this.a6E[1] + 1), this.zQ = !1
	}, this.vK = function() {
		this.a6E[2] >= this.a6E[0] && this.a6E[3] >= this.a6E[1] && zj.putImageData(zk, 0, 0, this.a6E[0], this.a6E[1], this.a6E[2] - this.a6E[0] + 1, this.a6E[3] - this.a6E[1] + 1), this.zQ = !1
	}, this.dH = function() {
		var eP, eR;
		this.a6D = !1, this.mB = !1, this.zQ = !1, this.a6E[0] = bI.eT, this.a6E[1] = bI.eU, this.a6E[2] = this.a6E[3] = 0;
		loop: for (eP = 1; eP < bI.eT - 1; eP++)
			for (eR = bI.eU - 2; 1 < eR; eR--)
				if (1 === a6H[aQ.t0(eP, eR) + 2]) {
					this.a6E[0] = eP;
					break loop
				} loop: for (eR = 1; eR < bI.eU - 1; eR++)
			for (eP = bI.eT - 2; 1 < eP; eP--)
				if (1 === a6H[aQ.t0(eP, eR) + 2]) {
					this.a6E[1] = eR;
					break loop
				} loop: for (eP = bI.eT - 2; 0 < eP; eP--)
			for (eR = bI.eU - 2; 1 < eR; eR--)
				if (1 === a6H[aQ.t0(eP, eR) + 2]) {
					this.a6E[2] = eP;
					break loop
				} loop: for (eR = bI.eU - 2; 0 < eR; eR--)
			for (eP = bI.eT - 2; 1 < eP; eP--)
				if (1 === a6H[aQ.t0(eP, eR) + 2]) {
					this.a6E[3] = eR;
					break loop
				}
	}
}

function L(value, a6I) {
	var od = "number" == typeof value ? az.a6J[value] : value;
	if (a6I)
		for (var eI = a6I.length, z = 0; z < eI; z++)
			for (var eb = 0; eb < 3; eb++) od = od.replace("{" + (10 * eb + z) + "}", a6I[z]);
	return od
}

function bk() {
	this.data = new a6K;
	var a6L = (new a6M).L84,
		a6N = (this.a6J = a6L, !1);
	this.dH = function() {
		var eI, ey;
		a6N = !1, "en" !== bY.dZ.data[12].value.split("-")[0].toLowerCase() ? bY.dZ.data[12].value === bY.dZ.data[145].value && 0 < bY.dZ.data[146].value && (eI = bY.dZ.data[146].value, (ey = bY.pD.rG(eI, !1)).length === eI) && !!b2.p6.y3(ey) &&
			function(ey) {
				var eI = ey.length,
					a6T = bY.pD.rG(eI, !0);
				if (eI !== a6T.length) return !1;
				if (!b2.p6.y3(a6T)) return !1;
				for (var k8 = a6L.length, a42 = new Array(k8), a6U = k8 === eI, fj = Math.min(eI, k8), z = 0; z < k8; z++)
					if (a42[z] = a6L[z], z < eI && a6T[z] === a42[z]) a42[z] = ey[z];
					else {
						a6U = !1;
						for (var ec = 0; ec < fj; ec++)
							if (a6T[ec] === a42[z]) {
								a42[z] = ey[ec];
								break
							}
					} return az.a6J = a42, a6U
			}(ey) || (a6N = !0) : az.a6J = a6L
	}, this.dJ = function() {
		bV.dI(), a2.dI(), bT.dI(), bS.dI(), aB.dH(), aj.dI()
	}, this.a6V = function() {
		var a6W;
		a6N && (a6N = !1, 0 !== a6L.length) && (a6W = bY.dZ.data[12].value, aq.a6X.a6Y(0, a6W.slice(0, 20)))
	}, this.a6Z = function(ey) {
		ey.length === a6L.length && (this.a6J = ey, bY.pY.pZ(145, bY.dZ.data[12].value), bY.pY.pZ(146, ey.length), bY.pD.rM(ey, !1), bY.pD.rM(a6L, !0), 0 === aN.wU()) && 5 === i.pz && i.kt.a6a()
	}
}

function a6K() {
	var ey = ["aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts", "btx",
		"bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fil", "fj",
		"fo", "fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac",
		"kek", "kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk",
		"ml", "mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "nb", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu",
		"rn", "ro", "rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "sh", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl",
		"tn", "to", "tpi", "tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu"
	];
	this.a6b = function() {
		for (var a6c = [], eI = ey.length, z = 0; z < eI; z++) a6c.push(ey[z]);
		for (eI++, a6c.unshift(bY.dZ.data[12].rA), z = 1; z < eI; z++)
			if (a6c[z] === a6c[0]) {
				a6c.splice(z, 1), eI--;
				break
			} try {
			if ("undefined" == typeof Intl) return a6c;
			for (z = 0; z < eI; z++) {
				var od = new Intl.DisplayNames([a6c[z]], {
					type: "language"
				}).of(a6c[z]);
				od !== a6c[z] && (a6c[z] = a6c[z] + ": " + od)
			}
		} catch (d) {
			console.log("error 3646: " + d)
		}
		return a6c
	}, this.a6e = function(a6f) {
		for (var od = bY.dZ.data[12].value, eI = a6f.length, z = 0; z < eI; z++)
			if (od === a6f[z].split(":")[0]) return z;
		return 0
	}
}

function a6M() {
	this.L84 = ["Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Activated", "Team {0}", "Team {0} has won the game!", "You have earned a participation reward of {10} gold.", "You have earned prize money of {10} gold.",
		"The following clans have won these glorious points:", "Validate the clan results by clicking here: ", "❌ Back", "⚠️ Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Quit Game", "More", "Accept",
		"You have conquered {0}.", "You have been conquered by {0}.", "Congratulations! You have won the game.", "{0} has won the game.", "{0} has broken the non-aggression pact.", "{0} is attacking you!", "Choose your start position!",
		"You have surrendered!", "The game has ended in a stalemate!", "Error: {10}", "{0} has been immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Coordinates: {10}", "Index: {10}", "Mountain: {10}",
		"Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.", "You have signed a non-aggression pact with {0}.", "You have asked {0} to sign a non-aggression pact.",
		"{0} has accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You have asked {10} players to attack {1}.", "You have asked {0} to attack {1}.", "{0} suggests you attack {1}.", "You have exported 1 resource to {0}.",
		"You have exported {10} resources to {1}.", "A tax of 1 unit has been deducted.", "A tax of {10} units has been deducted.", "A bot ({0}) has supported you with 1 resource.", "A bot ({0}) has supported you with {11} resources.",
		"{0} has supported you with 1 resource.", "{0} has supported you with {11} resources.", "Map: {10}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.",
		"{0} has been conquered by {1}.", "{0} has left the game.", "{0} has surrendered.", "{0} has joined the game.", "{10} players have been conquered.", "{10} players have left the game.", "{10} players have surrendered.", "Next Contest: ",
		"YOU HAVE CONQUERED", "YOU HAVE BEEN CONQUERED BY", "THE GAME HAS BEEN WON BY", "MAP:", "{0} has called the peace vote.", "{0} has voted for peace.", "{0} has rejected peace.", "second played", "seconds played", "LEADERBOARD", "Humans",
		"Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Hint: Click on a boat to send it to a new location.", "Hint: The top 9 emojis are ordered by usage.", "{0} still needs to be conquered!",
		"A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Loading", "Back", "Joined", "Skipped", "Multiplayer", "Single Player", "other: ", "File", "Reset", "Maps", "Start", "You", "1 Player", "{10} Players",
		"White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "Snow", "Cliffs", "Pond", "Halo", "Europe", "World", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia",
		"Island Kingdom", "Refresh", "Public Profile", "🧈 Gold", "Account Balance: ",
		"Play more multiplayer games to earn gold. Accounts without gold will be deleted after some days of grace. Each day, you will lose 0.50 gold or 0.01% of your balance, whichever amount is higher.",
		"Buttons with yellow font color use a small amount of gold, which is then redirected based on the specific action taken.", "Gold is the fuel that keeps your account running! Keep the balance up!", "Gold Transfer", "Send", "Confirm",
		"Cancel", "You are about to send {10} gold from the Source Account {1}. The transaction fee is {12} gold. The Target Account ({3}) will receive {14} gold.", "Account Name", "Copy", "Password", "Show", "Hide", "Request New Password",
		"Security Tip", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Saved Accounts",
		"Listed accounts may have been removed in the meantime due to insufficient funds.", "🗑️ Remove From List", "➡️ Login", "1v1 Rating", "Elo: ", "Rank: ", "Played Games: ", "Report Player",
		"You can report up to seven players per day for misconduct or other rule violations.", "No Admin", "Assistant Moderator", "Admin Coordinator", "Senior Admin", "Head Admin", "Admin Statistics", "Points: ", "Status: ",
		"You are allowed to elect up to one admin each week. Negative votes count only half as much as positive votes.", "Username", "Please choose a respectful username.", "Bio", "Upload Bio", "The monthly fee is currently {10} gold.",
		"Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "Primary Clan Stats", "Clan: ", "Monthly Points: ",
		"Total Points: ", "Won Games: ", "Avg. Points per Game: ", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect",
		"You are allowed to elect up to one clan leader each week. Your voting power is based on your monthly clan points.", "You can only elect members of the same clan you have won points for.", "Clan Chart", "🛠️ Options", "🛠️ Chart Options",
		"Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ",
		"⏳ Connecting...", "Find Server...", "New Connection...", "My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "1v1 Players", "Admins", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking",
		"Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Ranking", "Player", "Elo", "Clan", "Points", "Leader", "Index", "Seconds Ago", "Accuser",
		"Accused", "Elector", "Elected", "Sender", "Receiver", "Amount", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "Login", "📜 Logs", "▶️ Replay",
		"🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay link here!", "⚙️ Settings", "🔄 Reset", "Reload Required", "A game reload is required to apply the new configuration.", "❌ Close", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Lobby", "Proxied Lobby", "Resolution", "Low", "Medium", "High", "Very High",
		"Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Language", "🔑 My Account", "📈 Charts", "🧈 Gold Transfer", "🔗 Links",
		"ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog", "Clan Results", "Tutorial", "Terms",
		"Privacy", "Do you want to delete all locally stored data, like usernames, account data and setting data?", "Accounts without gold will be deleted after some days of grace.", "🗑️ Delete", "User Privacy",
		"Check out our Privacy Policy at:", "Source Account", "Target Account", "Replay Error", "An enemy ship belonging to {0} is heading towards your shore.", "Avg. Attack Strength", "Number Attacks", "Ships sent", "Bots conquered",
		"Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs", "Attack Losses", "Defense Losses", "Shipping Losses",
		"Transmitted Support", "Overall Expenses", "Territory", "Balance", "Numbers", "Statistics", "White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "Black"
	]
}

function dM() {
	var eP, eR, ir, a6g, a6h, a6i, a6j, a6k, a6l, t, yX, a6m;
	this.to = !1, this.dH = function(od, a6n) {
		if (1 === m.id && 13 <= m.em && m.em < 18) return a6n ? void(yX = od) : yX !== od ? void 0 : void m.rE.saveString(200, od);
		a6n && (yX = od, (a6m = document.createElement("a")).appendChild(document.createTextNode(yX)), this.to = !0, a6m.title = yX, a6m.target = "_blank", a6m.href = yX, a6m.style.textAlign = "center", a6m.style.color = p.mL, a6m.style
			.position = "absolute", a6m.style.padding = "0px", a6m.style.margin = "0px", this.resize(), document.body.appendChild(a6m), bU.dO = !0)
	}, this.qK = function() {
		return !(!this.to || (document.body.removeChild(a6m), this.to = !1))
	}, this.gV = function(hO, hP) {
		return !!this.to && ((hO < eP || hP < eR || eP + t < hO || eR + ir < hP || eP + t - a6g < hO && hP < eR + a6g) && (bU.dO = !0, this.to = !1, document.body.removeChild(a6m)), !0)
	}, this.resize = function() {
		var a0U, a6o;
		this.to && (a6k = Math.floor(.8 * (m.n.uE() ? an.t > an.ir ? .6 : .55 : .4) * an.oy), a6g = Math.floor(.15 * a6k), a6h = Math.floor(.35 * a6g), a6i = Math.floor(.5 * a6g), a6j = Math.floor(2.5 * a6i), ir = a6g + a6h + 3 * a6i, a0U = b2.ow
			.q5(1, a6h / an.p2), a6l = Math.floor(an.p2 * aD.measureText(yX, a0U)), a6o = t = (a6k < a6l ? a6l : a6k) + 2 * a6j, t = Math.min(t, an.t - 2 * (m.n.uE() ? 2 : 1) * bR.gap), a0U = b2.ow.q5(1, t / a6o * a6h / an.p2), a6l = Math
			.floor(an.p2 * aD.measureText(yX, a0U)), eP = Math.floor((an.t - t) / 2), eR = Math.floor((an.ir - ir) / 2), a6m.style.font = a0U, a6m.style.top = Math.floor((eR + 1.4 * a6i + a6g) / an.p2) + "px", a6m.style.left = Math.floor((
				eP + (t - a6l) / 2) / an.p2) + "px")
	}, this.qn = function() {
		this.to && (qo.fillStyle = p.mI, qo.fillRect(eP, eR + a6g, t, ir - a6g), qo.fillStyle = p.nD, qo.fillRect(eP, eR, t, a6g), qo.fillStyle = p.mL, qo.lineWidth = bR.uH, qo.strokeStyle = p.mL, qo.strokeRect(eP, eR, t, ir), qo.fillRect(eP,
			eR + a6g, t, bR.uH), qo.font = b2.ow.q5(1, .48 * a6g), b2.ow.textAlign(qo, 1), b2.ow.textBaseline(qo, 1), qo.fillText("You are leaving Territorial.io!", Math.floor(eP + (t - .5 * a6g) / 2), Math.floor(eR + .55 * a6g)), a9.a0g(
			Math.floor(eP + t - .8 * a6g), Math.floor(eR + .25 * a6g), Math.floor(.5 * a6g)), qo.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dK() {
	var gap, a5M, eP = [0, 0, 0, 0, 0],
		eR = [0, 0, 0, 0, 0],
		lw = [1, 1, 1, 1, 1],
		el = [!0, !0, !0, !1, !1],
		ed = (this.f3 = [!0, !0, !0, !1, !1], null);
	this.a6p = function(y6, a6q) {
		ed = y6, el = a6q, a5M = [bA.a6r, bA.wP, bA.a6s, bA.a6s, bA.a6t], this.dH()
	}, this.dH = function() {
		if (aP.qP()) {
			var z, q7 = Math.floor((m.n.uE() ? .261 : .195) * an.oy),
				q8 = Math.floor(.9 * q7),
				a32 = Math.floor(.17 * q8);
			if (gap = m.n.uE() ? 2 * bR.gap : bR.gap, lw[0] = q7 / ed[0].width, lw[1] = q8 / ed[1].width, lw[2] = a32 / ed[2].height, lw[3] = a32 / ed[3].height, lw[4] = a32 / ed[4].height, lw[2] *= 1.7, lw[3] *= 1.07, eP[0] = gap, eP[1] = gap,
				eP[2] = gap, eP[3] = gap, eP[4] = Math.floor(2 * gap + lw[3] * ed[3].width), eR[0] = gap, eR[1] = eR[0] + gap + lw[0] * ed[0].height, eR[2] = eR[1] + gap + lw[1] * ed[1].height, eR[3] = eR[2] + gap + lw[2] * ed[2].height, eR[4] =
				eR[3], !el[0])
				for (z = 0; z < 5; z++) eR[z] -= lw[0] * ed[0].height + gap;
			if (!el[1])
				for (z = 2; z < 5; z++) eR[z] -= lw[1] * ed[1].height + gap
		}
	}, this.to = function() {
		return !(7 === aN.wU() && m.n.uE())
	}, this.gV = function(hO, hP) {
		if (ed && this.to())
			for (var z = el.length - 1; 0 <= z; z--)
				if (el[z] && this.f3[z] && eP[z] < hO && eR[z] < hP && hO < eP[z] + lw[z] * ed[z].width && hP < eR[z] + lw[z] * ed[z].height) return i.j(9, i.pz, new a6u("You are leaving Territorial.io.", b2.ow.yW(a5M[z]))), !0;
		return !1
	}, this.qn = function() {
		if (ed && this.to()) {
			var z;
			for (qo.imageSmoothingEnabled = !0, z = 0; z < 5; z++) el[z] && this.f3[z] && (qo.setTransform(lw[z], 0, 0, lw[z], eP[z], eR[z]), qo.drawImage(ed[z], 0, 0));
			qo.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function c6() {
	var a6v, a6w, a6x;

	function a72(z) {
		var button = aL.pP[z],
			eP = button.eP,
			eR = button.eR,
			t = button.t,
			ir = button.ir;
		qo.fillStyle = button.a70, qo.fillRect(eP, eR, t, ir), z === a6v && (qo.fillStyle = a6x, qo.fillRect(eP, eR, t, ir)), qo.lineWidth = bR.uH, qo.strokeStyle = a6w, qo.strokeRect(eP, eR, t, ir),
			function(button) {
				var eP = button.eP,
					eR = button.eR,
					t = button.t,
					ir = button.ir;
				b2.ow.textAlign(qo, 1), b2.ow.textBaseline(qo, 1), qo.font = button.font, qo.fillStyle = a6w, qo.fillText(button.a1l, Math.floor(eP + t / 2), Math.floor(eR + ir / 2 + .1 * button.fontSize))
			}(button)
	}
	this.t = 0, this.ir = 0, this.eR = 0, this.gap = 0, this.dH = function() {
		a6v = -1, a6w = p.mL, a6x = "rgba(255,255,255,0.16)", this.pP = new Array(7), this.ir = Math.floor((m.n.uE() ? .123 : .093) * an.oy), this.t = Math.floor((m.n.uE() ? 3.96 : 4.2) * this.ir), this.gap = Math.floor(.025 * this.t);
		var a6y = Math.floor(.26 * this.ir),
			a6z = b2.ow.q5(1, a6y);
		this.pP[0] = {
			eP: 0,
			eR: 0,
			t: Math.floor(.6 * this.t - this.gap / 2),
			ir: this.ir,
			a1l: "Multiplayer",
			font: a6z,
			a70: "rgba(22,88,22,0.8)",
			fontSize: a6y
		}, a6y = Math.floor(.18 * this.ir), a6z = b2.ow.q5(1, a6y), this.pP[1] = {
			eP: 0,
			eR: 0,
			t: this.t - this.pP[0].t - this.gap,
			ir: this.ir,
			a1l: "Single Player",
			font: a6z,
			a70: "rgba(22,88,88,0.8)",
			fontSize: a6y
		}, this.pP[2] = {
			eP: 0,
			eR: 0,
			t: this.t,
			ir: Math.floor(.3 * this.ir),
			a1l: "",
			font: this.pP[1].font,
			a70: "rgba(100,0,0,0.8)",
			fontSize: this.pP[1].fontSize
		}, this.pP[3] = {
			eP: 0,
			eR: 0,
			t: this.t,
			ir: this.ir,
			a1l: "Back",
			font: this.pP[0].font,
			a70: "rgba(0,0,0,0.8)",
			fontSize: this.pP[0].fontSize
		}, this.pP[4] = {
			eP: 0,
			eR: 0,
			t: this.t,
			ir: Math.floor(.3 * this.ir),
			a1l: "The game was updated!",
			font: this.pP[1].font,
			a70: "rgba(100,0,0,0.8)",
			fontSize: this.pP[1].fontSize
		}, this.pP[5] = {
			eP: 0,
			eR: 0,
			t: this.pP[0].t,
			ir: Math.floor(.8 * this.ir),
			a1l: "Reload",
			font: this.pP[0].font,
			a70: "rgba(0,100,0,0.8)",
			fontSize: this.pP[0].fontSize
		}, this.pP[6] = {
			eP: 0,
			eR: 0,
			t: this.pP[1].t,
			ir: this.pP[5].ir,
			a1l: "Back",
			font: this.pP[0].font,
			a70: "rgba(0,0,0,0.8)",
			fontSize: this.pP[0].fontSize
		}, this.a45()
	}, this.a45 = function() {
		this.eR = Math.floor(.54 * an.ir), this.pP[0].eP = Math.floor(.5 * an.t - .5 * this.t), this.pP[1].eP = this.pP[0].eP + this.pP[0].t + this.gap, this.pP[2].eP = this.pP[3].eP = this.pP[0].eP, this.pP[4].eP = this.pP[5].eP = this.pP[0].eP,
			this.pP[6].eP = this.pP[1].eP, this.pP[0].eR = Math.floor(.54 * an.ir), this.pP[1].eR = this.pP[0].eR, this.pP[2].eR = Math.floor((an.ir - this.pP[2].ir - this.pP[3].ir - this.gap) / 2), this.pP[3].eR = this.pP[2].eR + this.pP[2].ir +
			this.gap, this.pP[4].eR = Math.floor((an.ir - this.pP[4].ir - this.pP[5].ir - this.gap) / 2), this.pP[5].eR = this.pP[6].eR = this.pP[4].eR + this.pP[4].ir + this.gap
	}, this.a71 = function() {
		a72(0), a72(1)
	}, this.a73 = function() {
		a72(2), a72(3)
	}, this.a74 = function() {
		a72(4), a72(5), a72(6)
	}, this.wq = function(eP, eR, l1) {
		var z = -1;
		return 0 === aN.wU() ? z = this.xL(eP, eR, 0, 2) : 3 === aN.wU() ? z = this.xL(eP, eR, 3, 1) : 5 === aN.wU() && (z = this.xL(eP, eR, 5, 2)), a6v !== z && (a6v = z, l1) && (bU.dO = !0), -1 !== z && (aG.xF(), !0)
	}, this.xL = function(eP, eR, a75, size) {
		for (var z = a75; z < a75 + size; z++)
			if (eP >= this.pP[z].eP && eR >= this.pP[z].eR && eP <= this.pP[z].eP + this.pP[z].t && eR <= this.pP[z].eR + this.pP[z].ir) return z;
		return -1
	}
}

function a77() {
	function a7E(a56) {
		return a56 < 0 ? 0 : 255 < a56 ? 255 : Math.floor(a56)
	}
	this.t = 0, this.ir = 0, this.to = !1, this.a78 = 0, this.gap = 0, this.a79 = 0, this.a6g = 0, this.a7A = 0, this.a7B = 0, this.a7C = 0, this.colors = null, this.dH = function() {
		this.to = !0, this.a78 = 0, this.resize()
	}, this.resize = function() {
		this.to && (an.t < 1.4 * an.ir ? this.t = Math.floor((m.n.uE() ? .94 : .43) * an.t) : (this.ir = Math.floor((m.n.uE() ? .88 : .43) * an.ir), this.t = Math.floor(1.4 * this.ir)), this.ir = this.t / 1.4, this.gap = this.t / 32, this.a6g =
			Math.floor(.25 * this.ir), this.a7A = (this.ir - this.a6g - 3 * this.gap) / 2, this.a7B = this.t - 3 * this.gap - this.a7A, this.a7C = (this.ir - this.a6g - 4 * this.gap) / 3)
	}, this.a7D = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var od = bY.dZ.data[103].value.split("");
		if (od.length < 6)
			for (var ec = 2; 0 <= ec; ec--) this.colors[0][ec] = a7E(256 * Math.random());
		else
			for (var z = 2; 0 <= z; z--) this.colors[0][z] = a7E(4 * (10 * parseInt(od[2 * z]) + parseInt(od[2 * z + 1])));
		this.a7F()
	}, this.a7G = function() {
		return [bB.ek(this.colors[0][0], 4), bB.ek(this.colors[0][1], 4), bB.ek(this.colors[0][2], 4)]
	}, this.wt = function(kU, kV, deltaY) {
		var lk = (an.t - this.t) / 2;
		kV -= (an.ir - this.ir) / 2 + this.a6g, (kU -= lk) < 0 || kV < 0 || kU >= this.t || kV >= this.ir - this.a6g || (lk = Math.floor(3 * kV / (this.ir - this.a6g)), this.colors[this.a79][lk] = a7E(this.colors[this.a79][lk] + (deltaY < 0 ? 1 :
			-1) * Math.max(Math.abs(.05 * deltaY), 1)), bU.dO = !0)
	}, this.gV = function(kU, kV) {
		this.a78 = 0;
		var lk = (an.t - this.t) / 2;
		return kV -= (an.ir - this.ir) / 2, (kU -= lk) < 0 || kV < 0 || kU >= this.t - 1 || kV >= this.ir - 1 || kU > this.t - (.4 * this.a6g + 3 * this.gap) && kV < this.a6g ? (this.to = !1, !(bU.dO = !0)) : kU < this.gap || kV < this.gap + this
			.a6g || kU >= this.t || kV >= this.ir - this.gap || (kU < this.gap + this.a7A ? (kV < this.gap + this.a6g + this.a7A && 0 !== this.a79 && (this.a79 = 0, bU.dO = !0), !0) : kU < this.gap + this.a7A || (kU -= 2 * this.gap + this.a7A,
				kV < this.gap + this.a6g + this.a7C ? (this.a78 = 1, this.colors[this.a79][0] = a7E(256 * kU / this.a7B), bU.dO = !0) : kV < 2 * this.gap + this.a6g + this.a7C || (kV < 2 * this.gap + this.a6g + 2 * this.a7C ? (this.a78 = 2,
					this.colors[this.a79][1] = a7E(256 * kU / this.a7B), bU.dO = !0) : !(kV >= 3 * this.gap + this.a6g + 2 * this.a7C) || (this.a78 = 3, this.colors[this.a79][2] = a7E(256 * kU / this.a7B), bU.dO = !0))))
	}, this.a7F = function() {
		for (var ec = 2; 0 <= ec; ec--) this.colors[0][ec] = a7E(this.colors[0][ec])
	}, this.a7H = function() {
		for (var el, od = "", z = 0; z < 3; z++)(el = bB.ek(this.colors[0][z], 4)) < 10 && (od += "0"), od += el.toString();
		return od
	}, this.wq = function(kU) {
		0 !== this.a78 && (kU -= 2 * this.gap + this.a7A + (an.t - this.t) / 2, this.colors[this.a79][this.a78 - 1] = a7E(256 * kU / this.a7B), bU.dO = !0)
	}, this.xE = function() {
		0 < this.a78 && (this.a78 = 0, this.a7F(), bY.pY.pZ(103, this.a7H()), bU.dO = !0)
	}, this.qn = function() {
		var lk = (an.t - this.t) / 2,
			ll = (an.ir - this.ir) / 2;
		qo.setTransform(1, 0, 0, 1, lk, ll), qo.fillStyle = p.mI, qo.fillRect(0, this.a6g, this.t, this.ir - this.a6g), qo.fillStyle = p.mU, qo.fillRect(0, 0, this.t, this.a6g), qo.fillStyle = p.mL, qo.lineWidth = bR.uH, qo.strokeStyle = p.mL, qo
			.strokeRect(-1, -1, this.t + 2, this.ir + 2), qo.fillRect(0, this.a6g, this.t, bR.uH), qo.font = b2.ow.q5(1, .31 * this.a6g), b2.ow.textBaseline(qo, 1), b2.ow.textAlign(qo, 1), qo.fillText("Choose Your Nation's Color!", Math.floor((
				this.t - this.gap - .4 * this.a6g) / 2), Math.floor(.55 * this.a6g)), this.a7I(0), qo.lineWidth = bR.uH, this.a7J(0), this.a7J(1), this.a7J(2), a9.a0g(Math.floor(lk + this.t - .4 * this.a6g - this.gap), Math.floor(ll + .3 * this
				.a6g), Math.floor(.4 * this.a6g)), qo.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a7I = function(z) {
		var h3 = this.colors[z][0],
			qL = this.colors[z][1],
			z = this.colors[z][2];
		qo.fillStyle = "rgb(" + h3 + "," + qL + "," + z + ")", qo.fillRect(this.gap, this.a6g + this.gap, this.a7A, 2 * this.a7A + this.gap), qo.lineWidth = bR.uH, qo.strokeStyle = p.mL, qo.strokeRect(this.gap, this.a6g + this.gap, this.a7A, 2 *
			this.a7A + this.gap), qo.fillStyle = h3 + qL + z < 306 && qL < 150 ? p.mL : p.mC, qo.font = b2.ow.q5(1, .32 * this.a7C), b2.ow.textAlign(qo, 1), b2.ow.textBaseline(qo, 1), qo.rotate(-Math.PI / 2), qo.fillText("National Color",
			Math.floor(-1.5 * this.gap - this.a6g - this.a7A), Math.floor(this.gap + .5 * this.a7A)), qo.rotate(Math.PI / 2)
	}, this.a7J = function(z) {
		qo.fillStyle = "rgb(" + (0 === z ? 150 : 2 === z ? 30 : 0) + "," + (1 === z ? 130 : 2 === z ? 30 : 0) + "," + (2 === z ? 220 : 0) + ")", qo.fillRect(2 * this.gap + this.a7A, this.a6g + this.gap + z * (this.gap + this.a7C), Math.floor(this
			.colors[this.a79][z] * this.a7B / 255), this.a7C), qo.strokeStyle = p.mL, qo.strokeRect(2 * this.gap + this.a7A, this.a6g + this.gap + z * (this.gap + this.a7C), this.a7B, this.a7C), qo.fillStyle = p.mL, qo.font = b2.ow.q5(1,
			.32 * this.a7C), b2.ow.textBaseline(qo, 1), b2.ow.textAlign(qo, 0), qo.fillText((0 === z ? "Red: " : 1 === z ? "Green: " : "Blue: ") + this.colors[0][z].toString(), 3 * this.gap + this.a7A, Math.floor(this.a6g + this.gap + z * (
			this.gap + this.a7C) + .53 * this.a7C))
	}
}

function c7() {
	var a7K, a7L, a1v, a25, a2u, a7M, a7N, a7O, a7P, a0U, fontSize, lV, a7Q, a7S, a7R = 0;

	function a7V() {
		return aq.kt.a7W[(a7Q + a7R) % aq.kt.a7X]
	}

	function a7T() {
		a7Q++, lV = bU.ds, aq.kt.a7Y(a7V(), 4) && (a7S = !0, aq.a7Z.a7a(a7V()))
	}

	function a7b() {
		0 === a7Q ? g.wc(3249) : 1 === a7Q && __fx.customLobby.isActive() ? (g.wc(3249), __fx.customLobby.setActive(false)) : (a7Q === aq.kt.a7X - 1 && (a7Q = -1), a7T())
	}

	function a7i(eR, a3m, a7h) {
		var lk = Math.floor((an.t - a25) / 2) + a7N,
			ly = lk + Math.floor(a7h * (a25 - 2 * a7N));
		qo.lineWidth = a3m, qo.beginPath(), qo.moveTo(lk, eR), qo.lineTo(ly, eR), qo.lineTo(Math.floor(lk - a7N + a7h * a25), eR + a1v), qo.lineTo(lk - a7N, eR + a1v), qo.closePath()
	}
	this.dH = function() {
		aN.setState(6), a7K = 0, a7L = 1, a7O = "rgba(0,220,120,0.4)", a7P = "rgba(0,0,0,0.8)", this.resize(), bU.dO = !0, a7Q = 0, a7S = !1, a7T()
	}, this.resize = function() {
		a25 = Math.floor((m.n.uE() ? .5 : .25) * an.oy), a2u = a25 + 12, a1v = Math.floor(.125 * a25), a7N = 3 * a1v, a7M = Math.floor(.225 * a25), fontSize = Math.floor(.3 * a1v), a0U = b2.ow.q5(0, fontSize)
	}, this.a7U = function(eb) {
		a7R = eb
	}, this.wV = function(wR) {
		wR === a7V() && (a7S = !1, a7b())
	}, this.a7c = function(wR) {
		6 !== aN.wU() || a7S || (lV = bU.ds, a7S = !0)
	}, this.gV = function(eP, eR) {
		var lk = Math.floor((an.t - a2u) / 2),
			ll = Math.floor(.5 * (an.ir - bR.gap - a1v - a7M)) + a1v + bR.gap;
		return lk < eP && eP < lk + a2u && ll < eR && eR < ll + a7M && (this.xZ(), aL.wq(eP, eR, !1), !0)
	}, this.xZ = function() {
		aq.kt.wf(3260), __fx.customLobby.setActive(false), i.kt.we()
	}, this.iC = function() {
		6 === aN.wU() && (a7S ? bU.ds > lV + 12e3 && g.wc(3250) : bU.ds > lV + 12e3 && a7b(), 100 < (a7K += .07 * a7L * (a7K < 16 ? 5 + a7K : 84 < a7K ? 105 - a7K : 17)) ? (a7K = 100, a7L = -1) : a7K < 0 && (a7K = 0, a7L = 1), a7O = "rgba(0," +
			Math.floor(190 - 1.9 * a7K) + "," + Math.floor(120 - 1.2 * a7K) + "," + (.4 + .004 * a7K) + ")", a7P = "rgba(0," + Math.floor(1.9 * a7K) + "," + Math.floor(1.2 * a7K) + "," + (.8 - .004 * a7K) + ")", bU.dO = !0)
	}, this.qn = function() {
		var eP = Math.floor((an.t - a2u) / 2),
			eR = Math.floor(.5 * (an.ir - bR.gap - a1v - a7M));
		! function(title, eR, a3m, a7h) {
			qo.fillStyle = a7P, a7i(eR, a3m, 1), qo.fill(), qo.fillStyle = a7O, a7i(eR, a3m, a7h), qo.fill(), qo.strokeStyle = p.mL, a7i(eR, a3m, 1), qo.stroke(),
				function(a7k, eR) {
					b2.ow.textAlign(qo, 1), b2.ow.textBaseline(qo, 1), qo.font = a0U, qo.fillStyle = p.mL, qo.fillText(a7k, Math.floor(.5 * an.t), Math.floor(eR + .58 * a1v))
				}(title, eR)
		}(L(100), eR, 3, a7K / 100),
		function(eP, eR, t, ir, a1l) {
			qo.fillStyle = p.mG, qo.fillRect(eP, eR, t, ir), qo.lineWidth = 3, qo.strokeStyle = p.mL, qo.strokeRect(eP, eR, t, ir);
			var eI = Math.floor(.3 * ir);
			b2.ow.textAlign(qo, 1), b2.ow.textBaseline(qo, 1), qo.font = b2.ow.q5(0, eI), qo.fillStyle = p.mL, qo.fillText(a1l, Math.floor(eP + t / 2), Math.floor(eR + ir / 2 + .1 * eI))
		}(eP, eR + a1v + bR.gap, a2u, a7M, L(101))
	}
}

function c8() {
	var dr = 0;
	this.dH = function() {
		aL.dH(), dr = 0
	}, this.setState = function(a7l) {
		dr = a7l
	}, this.wU = function() {
		return dr
	}, this.a7m = function() {
		this.setState(8), aj.wg(), i.rX()
	}, this.xQ = function(d) {
		if (!bI.sL) return !1;
		if (!(bU.ds < 400)) {
			if ("Enter" === d.key || "Escape" === d.key) {
				if (this.a7n()) return !0;
				if ("Enter" === d.key) {
					if (0 === dr) return !0;
					if (7 === dr) return !0
				}
			}
			return !1
		}
	}, this.a7o = function() {
		bO.resize()
	}, this.a7n = function() {
		return !!bO.qK()
	}, this.gV = function(eP, eR) {
		!bI.sL || bO.gV(eP, eR) || 6 === dr && aM.gV(eP, eR) || 2 === dr && aO.gV(eP, eR) || bN.gV(eP, eR) || (aG.gV(eP, eR), 0 !== dr && 7 === dr && aj.gV(eP, eR))
	}, this.wq = function(eP, eR) {
		if (!aG.a3y) {
			if (2 === dr && aO.wq(eP, eR)) return void aG.xF();
			if (aL.wq(eP, eR, !0)) return
		}
		aG.wq(eP, eR)
	}, this.click = function(eP, eR) {
		aG.xG()
	}, this.wt = function(eP, eR, deltaY) {}, this.a7p = function() {
		aL.a45(), 0 !== dr && 7 === dr && aj.resize(), bU.dO = !0
	}, this.qn = function() {
		8 !== dr && 10 !== dr && (qo.imageSmoothingEnabled = !0, this.tO(), 0 !== dr && (aG.qn(), aB.qn(), this.a7q(), bN.qn()), 0 !== dr && (2 === dr ? aO.qn() : 6 === dr ? aM.qn() : 7 === dr && aj.qn()), bO.qn(), i.qn())
	}, this.tO = function() {
		var a7s, a7r;
		if (__fx.makeMainMenuTransparent) qo.clearRect(0, 0, an.t, an.ir);
		else bI.sL ? (a7r = an.t / bI.eT, a7s = an.ir / bI.eU, qo.setTransform(a7r = a7s < a7r ? a7r : a7s, 0, 0, a7r, Math.floor((an.t - a7r * bI.eT) / 2), Math.floor((an.ir - a7r * bI.eU) / 2)), qo.drawImage(bI.sN, 0, 0), qo.setTransform(1, 0,
			0, 1, 0, 0), qo.fillStyle = p.mG) : qo.fillStyle = p.mC, qo.fillRect(0, 0, an.t, an.ir)
	}, this.a7q = function() {
		var eR = Math.floor(.3 * an.ir),
			h0 = aP.a7t("territorial.io"),
			gz = (gz = 1.75 * an.ir / h0.width) * h0.width < .98 * an.t ? .98 * an.t / h0.width : gz,
			eP = (qo.globalAlpha = .15, qo.imageSmoothingEnabled = !1, Math.floor(.5 * (an.t - gz * h0.width))),
			eP = Math.floor(eP / gz),
			eR = Math.floor(eR - .5 * h0.height * gz),
			eR = Math.floor(eR / gz);
		qo.setTransform(gz, 0, 0, gz, eP, eR), qo.drawImage(h0, eP, eR), qo.setTransform(1, 0, 0, 1, 0, 0), qo.globalAlpha = 1, qo.imageSmoothingEnabled = !0
	}
}

function cb() {
	var a0, a7w, a7x, a7y;
	this.a7u = 0, this.a7v = 0, this.dH = function() {
		var h0, lw;
		7 === aN.wU() && (a0 = b7.a0, a7w = 0, a7x = bU.ds + 4500, a7y = aq.a1Q.a7z() ? 2 : 0, aN.setState(10), qo.imageSmoothingEnabled = !0, aN.tO(), h0 = aP.a7t("loading"), lw = (m.n.uE() ? .396 : .25) * an.oy / h0.width, qo.setTransform(lw,
			0, 0, lw, Math.floor((an.t - lw * h0.width) / 2), Math.floor((an.ir - lw * h0.height) / 2)), qo.imageSmoothingEnabled = !1, qo.drawImage(h0, 0, 0), qo.setTransform(1, 0, 0, 1, 0, 0))
	}, this.kz = function() {
		0 < a7y && bU.ds > a7x && (a7y--, a7x += 4500, 0 === bU.a80) && 0 === bU.jK() && (0 === a7y && aq.kt.wX < aq.kt.a81 && (aq.kt.wX += aq.kt.a82), aq.kt.a7Y(aq.kt.wX, 5))
	}, this.a83 = function() {
		var fo, z;
		return 10 === aN.wU() && (fo = b7.a0, z = b7.o0, aq.a1Q.a84(a0), a0 = null, b7.dH(fo), b7.o0 = z, !0)
	}, this.a85 = function() {
		10 === aN.wU() && 2 <= ++a7w && (aq.a1Q.a84(a0), a0 = null)
	}
}

function cY() {
	var a87, a88, a89, a8A, a8B, a8C, a8D, os, a8F, a8H, a8I, a8J, a8K, a8M, a8N, a8O, a8P, a8Q, a8E = 48,
		a8L = [0, 0, 0, 0];

	function a8U(z, na) {
		z = a8D[z].getContext("2d", {
			alpha: !0
		});
		z.clearRect(0, 0, a8E, a8E), aY.sQ.uI(na, z, 0, 0, a8E)
	}

	function a8T(z, y6) {
		var z = a8D[z].getContext("2d", {
				alpha: !0
			}),
			zoom = (z.clearRect(0, 0, a8E, a8E), a8E / y6.width),
			dt = a8E / y6.height,
			zoom = dt < zoom ? dt : zoom;
		z.imageSmoothingEnabled = !0, z.setTransform(zoom, 0, 0, zoom, Math.floor((a8E - zoom * y6.width) / 2), Math.floor((a8E - zoom * y6.height) / 2)), z.drawImage(y6, 0, 0), z.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a8Y(ed, h3, a8b, h1) {
		h1.beginPath(), h1.moveTo(ed, ed), h1.lineTo(ed + Math.cos(a8b) * h3, ed + Math.cos(a8b + 1.5 * Math.PI) * h3), h1.stroke()
	}

	function a8r() {
		if (7 === aN.wU()) {
			for (var hA, y6, h1, zoom, dt, eb = -1, z = os.length - 1; 0 <= z; z--)
				if (null === os[z].h0) {
					eb = z;
					break
				} - 1 !== eb && (null !== (hA = a8f(os[eb].a8j, os[eb].a8k)) ? os[eb].h0 = hA : (hA = {
					eT: bI.eT,
					eU: bI.eU,
					sN: bI.sN,
					sJ: bI.sJ,
					sK: bI.sK,
					sO: bI.sO,
					fz: bI.fz,
					a8g: bI.a8g
				}, bI.v(os[eb].a8j, os[eb].a8k), bI.sM.a8s(), (y6 = document.createElement("canvas")).width = 128, y6.height = 128, h1 = y6.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / bI.eT) < (dt = 128 / bI.eU) && (zoom = dt), h1.imageSmoothingEnabled = !0, h1.setTransform(zoom, 0, 0, zoom, (128 - zoom * bI.eT) / 2, (128 - zoom * bI.eU) / 2), h1.drawImage(bI.sN, 0, 0), bI.eT = hA.eT, bI
				.eU = hA.eU, bI.sN = hA.sN, bI.sJ = hA.sJ, bI.sK = hA.sK, bI.sO = hA.sO, bI.fz = hA.fz, bI.a8g = hA.a8g, os[eb].h0 = y6), bU.dO = !0)
		}
	}

	function a8f(a8j, a8k) {
		for (var z = os.length - 1; 0 <= z; z--)
			if (null !== os[z].h0 && os[z].a8j === a8j && os[z].a8k === a8k) return os[z].h0;
		return null
	}
	this.dI = function() {
			a8K = [L(102), L(103), L(104), L(105)]
		}, this.dH = function() {
			var z;
			for (a8Q = 0, a8H = -1, aN.setState(7), os = [], this.resize(), a8D = new Array(13), z = a8D.length; 0 <= z; z--) a8D[z] = document.createElement("canvas"), a8D[z].width = a8E, a8D[z].height = a8E;
			for (z = 0; z < 7; z++) ! function(fj) {
				var a8W, h1 = a8D[fj - 2].getContext("2d", {
						alpha: !0
					}),
					a8V = 1.5 * Math.PI,
					ed = Math.floor(.5 * a8E),
					h3 = Math.floor(.48 * a8E);
				h1.lineWidth = 2, h1.strokeStyle = p.mL, h1.clearRect(0, 0, a8E, a8E);
				for (var z = 0; z < fj; z++) a8W = a8V + 2 * Math.PI / fj,
					function(z, ed, h3, a8V, a8W, h1) {
						h1.fillStyle = bV.a8a[z], h1.beginPath(), h1.arc(ed, ed, h3, a8V, a8W), h1.lineTo(ed, ed), h1.fill()
					}(z + 1, ed, h3, a8V, a8W, h1), 0 !== z && a8Y(ed, h3, a8V, h1), a8V = a8W;
				a8Y(ed, h3, 1.5 * Math.PI, h1),
					function(ed, h3, h1) {
						h1.beginPath(), h1.arc(ed, ed, h3, 0, 2 * Math.PI), h1.stroke()
					}(ed, h3, h1)
			}(z + 2);
			a8T(7, aP.get(4)), a8U(8, aY.tl.u6 + aY.tl.uN), a8U(9, aY.tl.u6 + aY.tl.uL), a8U(10, 1024 - aY.tl.u3), a8T(11, aP.get(19)), a8T(12, aP.get(20)), bU.dO = !0
		}, this.xY = function() {
			this.wg(), aq.kt.wf(3240), __fx.customLobby.setActive(false), aN.setState(0), i.j(5, 5)
		},
		__fx.customLobby.setLeaveFunction(() => this.xY()), this.wg = function() {
			os = [], a8D = []
		}, this.a1t = function() {
			return a8J
		}, this.resize = function() {
			var a8c, sB, a3A, a8d;
			for (a89 = [0, 0], a8F = [0, 0, 0, 0], a8P = m.n.uE() ? (a8I = Math.floor(.8 * .4 * an.oy), a8J = Math.floor(.56 * a8I), a8F[0] = bR.gap, an.t < an.ir ? (a8F[1] = a8J + 2 * bR.gap, a8F[2] = an.t - 3 * a8F[0], a8F[3] = an.ir - 3 * bR.gap -
					a8J, a8N = Math.floor(.95 * a8J), a8O = Math.floor((an.t - a8I - bR.gap) / 2), Math.floor(bR.gap + a8J / 2)) : (a8F[1] = bR.gap, a8F[2] = an.t - 3 * bR.gap - a8I, a8F[3] = an.ir - 2 * bR.gap, a8N = Math.floor(.8 * a8I), a8F[
					3] - a8J < a8I && (a8N = Math.floor(.8 * (a8F[3] - a8J)), a8N = a17(a8J, a8N)), a8O = Math.floor(an.t - a8I / 2 - bR.gap), a17(a8P = Math.floor(bR.gap + a8J + (a8F[3] - a8J) / 2), Math.floor(a8J + 2 * bR.gap + a8N / 2)))) : (a8I =
					Math.floor(.2016 * an.oy), a8J = Math.floor(.56 * a8I), a8F[2] = Math.floor(.5 * an.t), a8F[3] = Math.floor(.5 * an.ir), a8F[1] = Math.floor(.45 * (an.ir - a8F[3])), a8F[0] = Math.floor((an.t - a8F[2]) / 2), a8N = Math.floor(.75 *
						a8J), a8O = Math.floor(an.t / 2), Math.floor(a8F[1] + a8F[3] + (an.ir - a8F[3] - a8F[1]) / 2)), a8M = b2.ow.q5(1, .65 * a8J / 4), a8c = sB = 1; a8c * sB < os.length;) a8F[3] / (sB + 1) < a8F[2] / (a8c + 1) ? a8c++ : sB++;
			a3A = (a8F[2] - (a8c - 1) * bR.gap) / a8c, a8d = (a8F[3] - (sB - 1) * bR.gap) / sB, a87 = a3A < a8d ? a3A : a8d, a88 = Math.floor(a87), a8C = b2.ow.q5(1, .5 * a87 / 5), a89[0] = a8c, a89[1] = sB, a8A = a8F[0] + Math.floor((a8F[2] - a89[
				0] * a87 - (a89[0] - 1) * bR.gap) / 2), a8B = a8F[1] + Math.floor((a8F[3] - a89[1] * a87 - (a89[1] - 1) * bR.gap) / 2)
		}, this.pZ = function(a8e, fo) {
			var z, dt, h0, eI = os.length;
			for (a8L = a8e, z = 0; z < fo.length; z++) h0 = a8f(fo[z].fz, fo[z].a8g), os.push({
				a8h: fo[z].id,
				zZ: fo[z].zZ,
				za: fo[z].a8i,
				a8j: fo[z].fz,
				a8k: fo[z].a8g,
				joined: fo[z].a8l,
				a1q: fo[z].a7h,
				a8m: fo[z].a8m,
				h0: h0,
				a8n: fo[z].a8n,
				a8o: fo[z].a8o,
				a8p: fo[z].a8p
			});
			for (z = eI - 1; 0 <= z; z--) os.shift();
			if (-1 !== a8H)
				for (dt = a8H, a8H = -1, z = os.length - 1; 0 <= z; z--)
					if (os[z].a8h === dt) {
						a8H = dt;
						break
					}(os.length > a8Q || os.length < a8Q) && (a8Q = os.length, this.resize()), this.a8q(), bU.dO = !0
		}, this.a8q = function() {
			for (var z = os.length - 1; 0 <= z; z--) null === os[z].h0 && setTimeout(a8r, 0)
		}, this.gV = function(eP, eR) {
			return 4 * ((eP - a8O) * (eP - a8O) + (eR - a8P) * (eR - a8P)) <= a8N * a8N ? (this.xY(), aL.wq(eP, eR, !1), !0) : function(eP, eR) {
				var eb, ec, lk, ll;
				if (0 !== os.length) {
					var z = 0;
					for (ll = a8B, ec = 0; ec < a89[1]; ec++) {
						for (lk = a8A, eb = 0; eb < a89[0]; eb++) {
							if (lk < eP && eP < lk + a87 && ll < eR && eR < ll + a87) return aq.a7Z.a8u(os[z].a8h), a8H = os[z].a8h !== a8H ? os[z].a8h : -1, bU.dO = !0;
							if (++z >= os.length) return !1;
							lk += a87 + bR.gap
						}
						ll += a87 + bR.gap
					}
				}
				return !1
			}(eP, eR)
		}, this.qn = function() {
			var eb, ec, eP, h3, zoom, z = 0,
				eR = a8B;
			if (qo.imageSmoothingEnabled = !0, qo.lineWidth = 3, h3 = Math.floor(.5 * a8N), qo.fillStyle = p.mG, qo.beginPath(), qo.arc(a8O, a8P, h3, 0, 2 * Math.PI), qo.fill(), qo.strokeStyle = p.mL, qo.beginPath(), qo.arc(a8O, a8P, h3, 0, 2 * Math
					.PI), qo.stroke(), h3 = aP.get(0).height, zoom = .6 * a8N / h3, qo.setTransform(zoom, 0, 0, zoom, Math.floor(a8O - .56 * zoom * aP.get(0).width), Math.floor(a8P - .5 * zoom * h3)), qo.drawImage(aP.get(0), 0, 0), qo.setTransform(1,
					0, 0, 1, 0, 0), function() {
					qo.fillStyle = p.mG, qo.fillRect(an.t - a8I - bR.gap, bR.gap, a8I, a8J), 0 <= a8H ? (qo.fillStyle = p.md, qo.fillRect(an.t - a8I - bR.gap, bR.gap, a8I, Math.floor(.25 * a8J))) : (qo.fillStyle = p.n4, qo.fillRect(an.t - a8I - bR
						.gap, bR.gap + Math.floor(.25 * a8J), a8I, Math.floor(.25 * a8J)));
					qo.strokeStyle = p.mL, qo.strokeRect(an.t - a8I - bR.gap, bR.gap, a8I, a8J), qo.fillStyle = p.mL, qo.font = a8M, b2.ow.textBaseline(qo, 1);
					for (var eR, a8y = Math.floor(.04 * a8I), a0j = Math.floor(.08 * a8J), z = 3; 0 <= z; z--) eR = Math.floor(bR.gap + (z + 1) * (a8J + 2 * a0j) / 5 - a0j), b2.ow.textAlign(qo, 0), qo.fillText(a8K[z], an.t - a8I - bR.gap + a8y, eR),
						b2.ow.textAlign(qo, 2), qo.fillText(b2.w0.z6(a8L[z]), an.t - bR.gap - a8y, eR)
				}(), 0 !== os.length)
				for (ec = 0; ec < a89[1]; ec++) {
					for (eP = a8A, eb = 0; eb < a89[0]; eb++) {
						if (! function(z, eP, eR) {
								var zoom, ec, a8z, a91, a92;
								null === os[z].h0 ? (qo.fillStyle = p.mG, qo.fillRect(eP, eR, a88, a88)) : (zoom = a88 / 128, qo.setTransform(zoom, 0, 0, zoom, eP, eR), qo.drawImage(os[z].h0, 0, 0), qo.setTransform(1, 0, 0, 1, 0, 0));
								a8H === os[z].a8h ? (function(eP, eR) {
									var q7 = Math.floor(.2 * a88),
										q8 = Math.floor(.3 * q7);
									qo.fillStyle = p.mf, qo.fillRect(eP + a88 - q7, eR, q7, q7), qo.fillStyle = p.mC, qo.fillRect(eP + a88 - q7, eR, 2, q7), qo.fillRect(eP + a88 - q7, eR + q7 - 2, q7, 2), a9.a0g(eP + a88 - q7 + q8, eR + q8,
										q7 - 2 * q8), qo.setTransform(1, 0, 0, 1, 0, 0)
								}(eP, eR), qo.lineWidth = 3, qo.fillStyle = p.mf) : qo.fillStyle = p.mE;
								a91 = Math.floor(a87 / 4), qo.fillRect(eP, eR, a91, a91), a92 = Math.floor(eR + .8 * a87), qo.fillRect(eP, a92, a88, Math.floor(a87 / 5)),
									function(z, eP, eR) {
										var zoom;
										os[z].za && (z = aP.get(4), zoom = .5 * a87 / z.width, qo.setTransform(zoom, 0, 0, zoom, Math.floor(eP + (a87 - zoom * z.width) / 2), Math.floor(eR + (a87 - zoom * z.height) / 2)), qo.globalAlpha = .6, qo
											.drawImage(z, 0, 0), qo.globalAlpha = 1, qo.setTransform(1, 0, 0, 1, 0, 0))
									}(z, eP, eR);
								var a94 = new Array(os[z].a8n);
								if (os[z].a8n) {
									for (ec = a8z = 0; ec < os[z].a8n; ec++) os[z].a8o[ec] = b2.tU.yI(os[z].a8o[ec], a8C, .4 * a87), a94[ec] = ("" === os[z].a8o[ec] ? L(106) : "[" + os[z].a8o[ec] + "]: ") + os[z].a8p[ec];
									for (ec = 0; ec < os[z].a8n; ec++) a8z = Math.max(a8z, aD.measureText(a94[ec], a8C));
									a8z += .05 * a87, ec = 5 === os[z].a8n, a91 = ec ? eR + a91 : Math.max(eR + .8 * a87 - .11 * os[z].a8n * a87, eR + a91), a92 = ec ? a92 : Math.min(a91 + .11 * os[z].a8n * a87 + .05 * a87, a92), qo.fillRect(eP, a91,
										a8z, a92 - a91)
								}
								for (qo.font = a8C, b2.ow.textBaseline(qo, 1), b2.ow.textAlign(qo, 0), qo.fillStyle = p.mz, qo.fillText(os[z].joined.toString(), Math.floor(eP + .22 * a87), Math.floor(eR + .9 * a87)), qo.fillStyle = p.mL, ec = 0; ec <
									os[z].a8n; ec++) qo.fillText(a94[os[z].a8n - ec - 1], Math.floor(eP + .03 * a87), Math.floor(eR + .77 * a87 - .11 * ec * a87));
								b2.ow.textAlign(qo, 2), qo.fillStyle = p.ml, qo.fillText(os[z].a1q.toString(), Math.floor(eP + .81 * a87), Math.floor(eR + .9 * a87)), qo.strokeStyle = a8H === os[z].a8h ? p.me : p.mN, qo.strokeRect(eP, eR, a88, a88),
									a92 = Math.floor(.16 * a87), zoom = a92 / a8E, qo.setTransform(zoom, 0, 0, zoom, Math.floor(eP + .33 * a92), Math.floor(eR + .33 * a92)), a8D.length > os[z].zZ && qo.drawImage(a8D[os[z].zZ], 0, 0);
								qo.setTransform(zoom, 0, 0, zoom, Math.floor(eP + .15 * a92), Math.floor(eR + a87 - 1.08 * a92)), qo.drawImage(a8D[11], 0, 0), qo.setTransform(zoom, 0, 0, zoom, Math.floor(eP + a87 - 1.05 * a92), Math.floor(eR + a87 -
									1.15 * a92)), qo.drawImage(a8D[12], 0, 0), qo.setTransform(1, 0, 0, 1, 0, 0)
							}(z, Math.floor(eP), Math.floor(eR)), ++z >= os.length) return;
						eP += a87 + bR.gap
					}
					eR += a87 + bR.gap
				}
		}
}

function c9() {
	var a96 = [0, 0, 0, 0];

	function a9L(eP, eR, gu, a9O) {
		qo.fillStyle = p.mL;
		var q7 = a17(2, Math.floor((a9O ? .5 : .35) * gu)),
			a32 = (q7 -= q7 % 2, a17(2, Math.floor(.1 * gu))),
			gu = (a32 -= a32 % 2, Math.floor((gu - q7) / 2)),
			ly = Math.floor(gu + (q7 - a32) / 2);
		qo.fillRect(eP + gu, eR + ly, q7, a32), a9O && qo.fillRect(eP + ly, eR + gu, a32, q7)
	}

	function a7g(eP, eR, t, ir, a56, xo, a1l, iU, fj) {
		qo.fillStyle = a56, qo.fillRect(eP, eR, t, ir), 0 <= iU && function(eP, eR, t, ir, iU) {
			qo.fillStyle = "rgba(" + 22 * iU + "," + (110 - 22 * iU) + ",0,0.75)", qo.fillRect(eP, eR, (1 + iU) * t / 6, ir)
		}(eP, eR, t, ir, iU), 0 < fj && function(eP, eR, t, ir, fj) {
			qo.fillStyle = "rgba(255,255,255,0.3)", qo.fillRect(eP, eR, fj * t / a1.eF, ir)
		}(eP, eR, t, ir, fj), qo.strokeStyle = p.mL, qo.strokeRect(eP, eR, t, ir), 0 !== xo && (qo.fillStyle = p.mL, qo.font = b2.ow.q5(1, xo * ir), qo.fillText(a1l, Math.floor(eP + t / 2), Math.floor(eR + .52 * ir)))
	}
	this.jp = [{
		eL: 0,
		fj: 512
	}], this.dH = function() {
		ak.to = !1, aN.setState(2), this.resize(), bU.dO = !0
	}, this.wg = function() {}, this.resize = function() {
		a96[2] = Math.floor((m.n.uE() ? .49 : .4) * an.oy), a96[1] = Math.floor((an.ir - a96[2] / 6 - this.jp.length * (bR.gap + a96[2] / 10)) / 2), a96[0] = Math.floor((an.t - a96[2]) / 2), ak.to && ak.resize()
	}, this.a97 = function(zZ) {
		var z;
		if (6 < zZ) this.jp = [{
			eL: 0,
			fj: 512
		}];
		else {
			for (this.jp = [], z = 0; z < zZ + 2; z++) this.jp.push({
				eL: 0,
				fj: 0
			});
			this.a98()
		}
		aq.kt.wX = 0
	}, this.a99 = function(a9A, a9B) {
		for (var eI = a9A.length, z = 0; z < eI; z++) this.jp[z].eL = a9A[z], this.jp[z].fj = a9B[z]
	}, this.a9C = function(qL) {
		var z, eI;
		if (1 === qL.tb.length)
			for (eI = this.jp.length, qL.a9A = new Array(eI), qL.a9B = new Array(eI), z = 0; z < eI; z++) qL.a9A[z] = this.jp[z].eL, qL.a9B[z] = this.jp[z].fj
	}, this.xa = function() {
		bU.dO = !0, ak.to ? ak.to = !1 : (this.wg(), aN.setState(0), i.j(5, 5))
	}, this.zd = function() {
		var z, fj;
		if (ay.jh) return ay.ji.a9D;
		for (fj = 0, z = this.jp.length - 1; 0 <= z; z--) fj += this.jp[z].fj;
		return fj
	}, this.wq = function(eP, eR) {
		return !(!ak.to || !ak.wq(eP, eR)) || -1 !== this.xL(eP, eR)
	}, this.a9E = function() {
		var eb;
		aq.kt.wX = 0, aN.a7m(), ay.jh ? ay.a9F() : (eb = (eb = this.jp.length - 2) < 0 ? 7 : eb, a1.zW(Math.floor(16384 * Math.random()), 0, [{
			name: bY.dZ.data[122].value,
			a9G: b2.color.yB(bY.kt.rW()),
			a9H: 0
		}], eb, !1, !1))
	}, this.gV = function(eP, eR) {
		if (ak.to && !ay.jh) return ak.gV(eP, eR);
		var z, eb, max, q7, eR = this.xL(eP, eR);
		if (-1 === eR) return !1;
		if (0 === eR) this.xa();
		else if (1 === eR) ay.jh ? (ay.xF(), bU.dO = !0) : ak.show();
		else if (100 === eR) ax.a9I();
		else if (2 === eR) this.wg(), this.a9E();
		else {
			if (ay.jh) return !1;
			if (27 === eR) this.jp.length < 8 && (this.jp.push({
				eL: 0,
				fj: a1.eF
			}), this.a98(), this.resize(), bU.dO = !0);
			else if (z = Math.floor((eR - 3) / 3), eR % 3 == 0) 1 < this.jp.length && (this.jp.splice(z, 1), this.resize(), bU.dO = !0);
			else if (q7 = (a96[2] - a96[2] / 10 - 2 * bR.gap) / 2, eR % 3 == 1) 0 === z && 1 === this.jp[z].fj || (eP < a96[0] + a96[2] - 1.5 * q7 - bR.gap ? this.jp[z].eL-- : this.jp[z].eL++, this.jp[z].eL < 0 ? this.jp[z].eL = 5 : 5 < this.jp[
				z].eL && (this.jp[z].eL = 0), bU.dO = !0);
			else {
				for (bU.dO = !0, eR = (eP - (a96[0] + a96[2] - q7)) / q7 - .5, eR *= eR < 0 ? -eR : eR, eR = 0 === (eR = Math.floor(eR * a1.eF)) ? 1 : eR, max = a1.eF, eb = this.jp.length - 1; 0 <= eb; eb--) z !== eb && (max -= this.jp[eb].fj);
				if (eR < 0) {
					if (1 === this.jp[z].fj) return this.jp[z].fj = max, !0
				} else if (this.jp[z].fj === max) return this.jp[z].fj = 1, !0;
				this.jp[z].fj += eR, this.jp[z].fj < 1 ? this.jp[z].fj = 1 : this.jp[z].fj > max && (this.jp[z].fj = max)
			}
		}
		return !0
	}, this.a98 = function() {
		for (var fj = Math.floor(a1.eF / this.jp.length), a9J = a1.eF % this.jp.length, z = this.jp.length - 1; 0 <= z; z--) this.jp[z].fj = fj;
		this.jp[0].fj += a9J
	}, this.xL = function(eP, eR) {
		var q7 = (a96[2] - 3 * bR.gap) / 4,
			a32 = a96[2] / 6;
		if (eP < a96[0] || eR < a96[1] || a96[0] + a96[2] <= eP) return -1;
		if (eR < a96[1] + a32) return eP < a96[0] + q7 ? 0 : eP < a96[0] + q7 + bR.gap ? -1 : eP < a96[0] + 2 * q7 + bR.gap ? 100 : eP < a96[0] + 2 * (q7 + bR.gap) ? -1 : eP < a96[0] + 3 * q7 + 2 * bR.gap ? 1 : eP < a96[0] + 3 * (q7 + bR.gap) ? -
			1 : 2;
		for (var ll, a9K = a96[2] / 10, q7 = (a96[2] - a9K - 2 * bR.gap) / 2, z = 0; z < this.jp.length; z++) {
			if (eR < (ll = a96[1] + a32 + bR.gap + z * (a9K + bR.gap))) return -1;
			if (!(ll + a9K < eR)) return eP < a96[0] + a9K ? 3 + 3 * z : eP < a96[0] + a9K + bR.gap ? -1 : eP < a96[0] + a96[2] - q7 - bR.gap ? 4 + 3 * z : eP < a96[0] + a96[2] - q7 ? -1 : 5 + 3 * z
		}
		return !(this.jp.length < 8) || eR < (ll = a96[1] + a32 + bR.gap + this.jp.length * (a9K + bR.gap)) || ll + a9K < eR || a96[0] + a9K < eP ? -1 : 27
	}, this.qn = function() {
		qo.lineWidth = bR.uH, b2.ow.textAlign(qo, 1), b2.ow.textBaseline(qo, 1);
		var q7 = (a96[2] - 3 * bR.gap) / 4,
			a32 = a96[2] / 6;
		if (a7g(a96[0], a96[1], q7, a32, "rgba(128,0,0,0.75)", .25, L(101), -1, -1), a7g(a96[0] + q7 + bR.gap, a96[1], q7, a32, "rgba(128,0,128,0.75)", .25, L(107), -1, -1), a7g(a96[0] + 2 * (q7 + bR.gap), a96[1], q7, a32, "rgba(" + (ay.jh ?
				128 : 0) + ",128,128,0.75)", .25, ay.jh ? L(108) : L(109), -1, -1), a7g(a96[0] + a96[2] - q7, a96[1], q7, a32, "rgba(0,128,0,0.75)", .25, L(110), -1, -1), !ay.jh) {
			for (var ll, a9K = a96[2] / 10, q7 = (a96[2] - a9K - 2 * bR.gap) / 2, z = 0; z < this.jp.length; z++) ll = a96[1] + a32 + bR.gap + z * (a9K + bR.gap), a7g(a96[0], ll, a9K, a9K, 1 < this.jp.length ? "rgba(128,0,0,0.75)" :
				"rgba(90,90,90,0.75)", 0, null, -1), 1 < this.jp.length && a9L(a96[0], ll, a9K, !1), a7g(a96[0] + a9K + bR.gap, ll, q7, a9K, p.mI, .4, this.a9M(z), this.jp[z].eL, -1), a7g(a96[0] + a96[2] - q7, ll, q7, a9K, p.mI, .4, this.a9N(
				z), -1, this.jp[z].fj);
			this.jp.length < 8 && (ll = a96[1] + a32 + bR.gap + this.jp.length * (a9K + bR.gap), a7g(a96[0], ll, a9K, a9K, "rgba(0,128,20,0.75)", 0, null, -1, -1), a9L(a96[0], ll, a9K, !0)), ak.to && ak.qn()
		}
	}, this.a9M = function(z) {
		return 0 === z && 1 === this.jp[z].fj ? L(111) : a2.jb[this.jp[z].eL]
	}, this.a9N = function(z) {
		return 1 === this.jp[z].fj ? L(112) : L(113, [this.jp[z].fj])
	}
}

function cA() {
	var a9R, h0, vW, a9S;

	function a9Y(o0, name, a9Z, od) {
		vW[o0] = name, h0[o0] = new Image, h0[o0].onload = function() {
			! function(o0, a9Z) {
				var yx, yy = null;
				7 === a9Z ? yx = b2.xg.z0 : 8 === a9Z ? (yx = b2.xg.z3, yy = .1) : 3 === a9Z ? (yx = b2.xg.z1, yy = .06) : 5 === a9Z ? yx = b2.xg.z4 : 6 === a9Z ? yx = b2.xg.yz : 4 === a9Z && (yx = b2.xg.z5);
				h0[o0] = b2.xg.yw(h0[o0], yx, yy)
			}(o0, a9Z), a9b()
		}, h0[o0].onerror = function(d) {
			console.error("Error loading image at index", o0, "Error:", d), a9b()
		}, h0[o0].src = "data:image/png;base64," + od
	}

	function a9b() {
		a9R--, a9V()
	}

	function a9V() {
		0 === a9R && (a9R = -1, a9X(), bU.dO = !0, h0[7] = a9S, h0[8] = a9S, h0[9] = a9S, h0[10] = a9S, 5 === i.pz) && i.a9d().a9e.resize()
	}

	function a9X() {
		a8.zy(), bN.a6p([h0[8], h0[16], h0[9], h0[9], h0[10]], [2 !== m.id, 1 !== m.id, !0, !0, !0]), aY.sQ = new tn, aY.sQ.dH(), al.dI()
	}
	this.dH = function() {
		if (void 0 === h0) {
			a9R = 23, h0 = new Array(a9R), vW = new Array(a9R), (a9S = document.createElement("canvas")).width = 1;
			for (var z = a9R - (a9S.height = 1); 0 <= z; z--) h0[z] = a9S;
			a9X(), a9Y(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), a9Y(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), a9Y(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a9Y(3, "orders", 6,
					"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"
					), a9Y(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), a9Y(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				a9Y(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), a9Y(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a9Y(8,
					"googleplay", 3,
					"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"
					), a9Y(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), a9Y(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a9Y(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a9Y(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a9Y(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a9Y(14, "bestPlayer", 5,
					"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"
					), a9Y(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), a9Y(16, "apple", 3,
					"iVBORw0KGgoAAAANSUhEUgAAAPAAAABQBAMAAADVZ+VPAAAAMFBMVEUAAAAQEg8cHRsjJSIvMS48PjtNT0xlZ2SKjImmqaWKyoYF/hJw3XLLzsrf4t7///+u1pRGAAAHKUlEQVRo3tWazXPTRhTA145jyQd7HCgfOTSkHEq5QDqdoT2VtId+XMAz7QzDBZu2ZMghjdMZJnDI2Bn64RyInBYSO4H4nNJ/IKX/AO3FdFoSDqAYCoWDpWkB2zpIr293JVtyFBMnrTXVJPaTrNVv933tW0nkBt1+/r6D2w8MSfD/p6V8LtOxbSo//4sJXsqdi5KObb4TU/McvJyLkY5u3VMLDJxPkg5vQp6Cl+dIx7cLCwheSnYeLMwjOBftPNg3dYP86IGmUdfXyfKMF+DeBbKc9gIsLpCbSS/AwlVyM+EFOHiVLHkDnidLg16AA16BuxA8sOXW7zmbdn3mRvisPfDZtCOn5/NunlBwRqKoucWN1hZ4Aor2xgCgRbcAFh+3CQ6BE6yPX4DsFsAhrU1wARwc2jhVJcHFJzFxhUxkfXd8dybKaQo+qVwhZFhZwY9yhjFOKrNEWJ0u0+Ji0VgRtUvlBGu6CTBVbaIJHNZIylAfCRoplIK631DUKoIFVTGSQVWBZLdq6BTMdkTdgPu4o0KNig9p04ebAMcB9GYdirpPnexFIpGrouaHmV4dwRGtRyqhJaViSB+UKDjMjkDyVI1OBVpUhLFjmk9Nh/RNgFHTlfVgwSA+NSa/q2nhit+IBil4tEQiVZxe48VIhVqUEHYEG4Rqpo11bC7oPTuUTYBVgPQ6sIaXIHKykKmWI2s48G4KlookXPNdUqB4uMT9iB2xg+kftR30vxDsx+BZ5654NQYezZcK8aIDHDLyheI+E5xyBRv5vLPQcQUHQE+uA0vPBSPaBYN994qpQtoCx++TvkrkGeJQ42EKjj/AI83goBElb7xA1T044lyC7HzdEceZSxhf8pURnYQh3QeDFjisn5GLkdqrajFknCsw59LPFIp1sP4pAxP58mutnUtYVMpjWHFfA3iScITXY0JOAfyGcixsEAsckMGI4c9y0S+DRsH8iAkOQo2DPwd41AosyIgwZj+gX6DHbLk6109LQ7RTIEeEHPHlSFeOXEiQvflJrNxyB9MoDbGykR4R5ugfbsOzwTmCf/6pOwOtwAWwb392bFoMObhgJDoFlpxgSHcI7FfBG1U3aRqSnQJHnFytzWvtOv91dGvgUSe45DhRUbKtLzWBhtLTWwI7g8lZcohNHVm/GAJn7LcDlp1gRzCFAaot151m4z+wj/mZ7YH7m2qDljZHx1z9CDOeTvv4dFtgI+qsDVSjlescZv0SqZ62CwYHRzWklvkkxV1ARs/YNtjuJwJox1nFGxj6hOzJjDHptClxjRQ5P3tkBCpDdFn0fuZLeujI0MCeDH4fyHy1SXDaYcJKGJ4xobZXBeM7dqgXpW8dYP/+qGRGxAR+rbI8/I2K/jJi7m4inOwlfR+siVDjYDZ1xijYlPhQa/aEnzXD6xbdn0ZHZVUXzLiDm+aImsOE2S5W8oZABwNTxf26dIudcAhghTvFNKoBkw2OQmFVsgR4Un8KoKzaAsMBjjfNijYjy2hxmUY2ho0+thurDSad3iOb/aMjKvOUyZxLALhMDlJ74XDmTuxUcXevLf23ytXQqP27eNezDHyLfhpRLr1shR2zUzlpgcNsdBL6ukS7FjJ3i5uanYx0I2Fi46Owxs5JsAk0idIgrUjNUbCqCYykCY6zJUwfpjtGi7DdMPzlChaawA2ThOE5/agyG/PxZU1JtnK6cM10DAbmg6MDZYo6au5W3SuQpkKg4V5x2k6kHeE6o9cN8Z+lxmRyYJFN4gxcYNEoYufYCaNQvnv37r3GFVuXPk8bgWYoikLNaeJSNrAt7EZoENrAggWWmofiBB+CDSZGtV6TtAYjr7QBmPZcUR67g0VwT5rBRk6xq1ozrc0WID2mTZ5a4Kxd1anmGwpOsE919y1k0KcYEl7RxbnSrE402Jn74O8WzrVxQZ9yr336+HI5jMrl4RTg4YQa6TYLBpVHVQpDjoGPw4N6OGVpONFEL2QmNwCH3EsQejlTcXjGA542UPqVSaZx6dqoW2XTYsVKIAVsaOYdPUoXX6UNwD7ZNVebsdqFY0SccfFNmY/duPiWap6GheJsdNciLwT0d6KYE273DPOUmWUZ5zYR1Ialm1eLx9x8GlvFrA7QqYFPO5ZUrPslnTJqXG3WJKFZgY5GVHD2GNgIjLoCYzVzzXFHTbRuxUiwhkFEs7I+SCzJbD5dn8TRAZAVsuZBDhaY3/6+8cL8oFqmDjCslJO2CtPU+ttQQZyIPZ9kM7Mp8S7TtGVcMdMIskYQtdJIbR/i7mq0xR0BP//RZ6u4/PtfqQs0bQTGB3lJQLrHG7d+fWfzudNcfOlj2nr3ONvdsZ9fKnD+i+3cvQ3VfS7kqBT+89vG/3tw23fo/01wwgtwcL7Nxz8+y8Nt0hYf/3j2wMuzR3yePdT05jHu8HXvHlx796jes5cTPHsdw7sXUDx75ca7l4w8ea3qHxoI8b7ie6AsAAAAAElFTkSuQmCC"
					), a9Y(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), a9Y(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), a9Y(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), a9Y(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), a9Y(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), a9Y(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(o0) {
		return h0[o0]
	}, this.a7t = function(name) {
		for (var z = vW.length - 1; 0 <= z; z--)
			if (vW[z] === name) return h0[z];
		return a9S
	}, this.qP = function() {
		return a9R <= 0
	}, this.a9U = function() {
		a9R = 0, a9V()
	}
}

function cB() {
	var a9h, a9i, a9j, a9k, a9l, a9m, a9n, a9o, a9p, a9q, a9f = [
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
		a9g = [
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

	function aA9(dy, aAB) {
		a6H[dy] = 0, a6H[dy + 1] = 0, a6H[dy + 2] = aAB, a6H[dy + 3] = 0, aAC(dy)
	}

	function aAC(dy) {
		var eP;
		bQ.mB || (eP = aQ.tP(dy), dy = aQ.tQ(dy), bQ.mB = eP >= bP.a6G[0] && eP <= bP.a6G[2] && dy >= bP.a6G[1] && dy <= bP.a6G[3])
	}
	this.eK = new Int32Array(4), this.dI = function() {
		var eK = this.eK;
		eK[0] = -4 * bI.eT, eK[1] = 4, eK[2] = -eK[0], eK[3] = -eK[1]
	}, this.dH = function(tb) {
		if (a9h = new Uint8Array(a1.eF), a9i = new Uint8Array(a1.eF), a9j = new Uint8Array(a1.eF), a9k = new Uint8Array(a1.eF), a9l = new Uint8Array(a1.eF), a9m = new Uint8Array(a1.eF), a9n = new Uint8Array(a1.eF), a9o = new Uint8Array(a1.eF),
			a9p = new Uint8Array(a1.eF), a9q = new Uint8Array(a1.eF), this.a2z = new Uint8Array(a1.eF), a1.iN)
			for (var k8, ed, z = a1.eF - 1; 0 <= z; z--) ed = bV.vU[bV.eG[z]], k8 = bB.ek((a9g[ed][3] + 1) * ao.random(), ao.value(100)), a9h[z] = a9f[ed][0] + k8 * a9g[ed][0], a9i[z] = a9f[ed][1] + k8 * a9g[ed][1], a9j[z] = a9f[ed][2] + k8 *
				a9g[ed][2];
		else ay.jh && ay.ji.a9v ? function(ey) {
			var z;
			for (z = a1.st - 1; 0 <= z; z--) a9h[z] = 4 * ey[z][0], a9i[z] = 4 * ey[z][1], a9j[z] = 4 * ey[z][2]
		}(ay.ji.a9v) : (function() {
			for (var z = a1.eF - 1; z >= a1.jN; z--) a9h[z] = 4 * bB.ek(64 * ao.random(), ao.value(100)), a9i[z] = 4 * bB.ek(64 * ao.random(), ao.value(100)), a9j[z] = 4 * bB.ek(64 * ao.random(), ao.value(100))
		}(), function(tb) {
			for (var z = a1.jN - 1; 0 <= z; z--) a9h[z] = 4 * tb[z].a9G[0], a9i[z] = 4 * tb[z].a9G[1], a9j[z] = 4 * tb[z].a9G[2]
		}(tb));
		! function() {
			var z, eL;
			for (z = a1.eF - 1; 0 <= z; z--) eL = bB.ek(a9h[z] + a9i[z] + a9j[z], 3), a9h[z] += aA4(eL - a9h[z], 2), a9i[z] += aA4(eL - a9i[z], 2), a9j[z] += aA4(eL - a9j[z], 2), a9h[z] -= a9h[z] % 4, a9i[z] -= a9i[z] % 4, a9j[z] -= a9j[z] % 4
		}(),
		function() {
			for (var z = a1.eF - 1; 0 <= z; z--) a9h[z] += bB.ek(z, 128), a9i[z] += bB.ek(z % 128, 32), a9j[z] += bB.ek(z % 32, 8), a9k[z] = z % 8
		}(), this.aA1(),
			function() {
				for (var z = a1.eF - 1; 0 <= z; z--) a9l[z] = a9h[z] < 32 ? a9h[z] + 32 : a9h[z] - 32, a9m[z] = a9i[z] < 32 ? a9i[z] + 32 : a9i[z] - 32, a9n[z] = a9j[z] < 32 ? a9j[z] + 32 : a9j[z] - 32
			}(),
			function() {
				for (var z = a1.eF - 1; 0 <= z; z--) a9o[z] = 235 < a9h[z] ? a9h[z] - 20 : a9h[z] + 20, a9p[z] = 235 < a9i[z] ? a9i[z] - 20 : a9i[z] + 20, a9q[z] = 235 < a9j[z] ? a9j[z] - 20 : a9j[z] + 20
			}()
	}, this.a20 = function(player) {
		var ey = bE.es;
		return ey[0] = a9h[player], ey[1] = a9i[player], ey[2] = a9j[player], ey
	}, this.aA1 = function() {
		for (var z = a1.eF - 1; 0 <= z; z--) this.a2z[z] = a9h[z] + a9i[z] + a9j[z] < 280 ? 0 : 1
	}, this.tP = function(dy) {
		return bB.ek(dy, 4) % bI.eT
	}, this.tQ = function(dy) {
		return bB.ek(dy, 4 * bI.eT)
	}, this.t0 = function(eP, eR) {
		return Math.floor(4 * (eR * bI.eT + eP))
	}, this.tF = function(dy) {
		var eK = this.eK;
		return this.aA5(dy + eK[0]) || this.aA5(dy + eK[1]) || this.aA5(dy + eK[2]) || this.aA5(dy + eK[3])
	}, this.eh = function(dy) {
		var eK = this.eK;
		return this.eN(dy + eK[0]) || this.eN(dy + eK[1]) || this.eN(dy + eK[2]) || this.eN(dy + eK[3])
	}, this.tD = function(dy, player) {
		var eK = this.eK;
		return this.aA6(dy + eK[0], player) || this.aA6(dy + eK[1], player) || this.aA6(dy + eK[2], player) || this.aA6(dy + eK[3], player)
	}, this.v2 = function(player) {
		return player < a1.jN && 2 !== aV.yb[player]
	}, this.fq = function(dy) {
		return 208 <= a6H[dy + 3]
	}, this.tK = function(player, dy) {
		return this.fq(dy) && this.aA7(player, dy)
	}, this.aA7 = function(player, dy) {
		return player === this.eA(dy)
	}, this.aA8 = function(dy) {
		return 208 <= a6H[dy + 3] && a6H[dy + 3] < 224
	}, this.iW = function(dy) {
		return 224 <= a6H[dy + 3] && a6H[dy + 3] < 248
	}, this.tE = function(dy) {
		for (var eK = this.eK, z = 3; 0 <= z; z--)
			if (this.gk(dy + eK[z])) return !0;
		return !1
	}, this.eD = function(dy) {
		return this.fq(dy) || this.e9(dy)
	}, this.gk = function(dy) {
		return 0 === a6H[dy + 3] && 2 === a6H[dy + 2]
	}, this.e9 = function(dy) {
		return 0 === a6H[dy + 3] && 1 === a6H[dy + 2]
	}, this.sZ = function(dy) {
		return 0 === a6H[dy + 3] && 3 === a6H[dy + 2]
	}, this.eN = function(dy) {
		return 0 === a6H[dy + 3] && 5 <= a6H[dy + 2]
	}, this.aA5 = function(dy) {
		return 0 === a6H[dy + 3] && 3 <= a6H[dy + 2]
	}, this.e0 = function(dy) {
		return a6H[dy + 2] - 5
	}, this.aA6 = function(dy, player) {
		return this.e9(dy) || this.fq(dy) && player !== this.eA(dy)
	}, this.eA = function(dy) {
		return a6H[dy] % 4 * 128 + a6H[dy + 1] % 4 * 32 + a6H[dy + 2] % 4 * 8 + a6H[dy + 3] % 8
	}, this.tL = function(dy) {
		aA9(dy, 1)
	}, this.aAA = function(dy) {
		aA9(dy, 2)
	}, this.tC = function(dy, player) {
		a6H[dy] = a9h[player], a6H[dy + 1] = a9i[player], a6H[dy + 2] = a9j[player], a6H[dy + 3] = 208 + a9k[player], aAC(dy)
	}, this.fl = function(dy, player) {
		a6H[dy] = a9l[player], a6H[dy + 1] = a9m[player], a6H[dy + 2] = a9n[player], a6H[dy + 3] = 224 + a9k[player], aAC(dy)
	}, this.iX = function(dy, player) {
		a6H[dy] = a9o[player], a6H[dy + 1] = a9p[player], a6H[dy + 2] = a9q[player], a6H[dy + 3] = 248 + a9k[player], aAC(dy)
	}
}

function cC() {
	var vW, lE, eI, aAD, aAE;

	function aAJ() {
		for (var aAR = 0, z = 1; z < 5; z++) aAR += lE[z] % 1024;
		return aAR
	}

	function aAI() {
		for (var z = 1; z < eI - aAE; z++) lE[z] = parseInt(lE[z])
	}

	function aAK() {
		lE[0] = "Player " + Math.floor(1e3 * Math.random()), lE[1] = an.t < an.ir ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, lE[2] = 1, lE[3] = 1, lE[4] = an.t < an.ir ? 0 : 1, lE[5] = 0, lE[6] = "000", lE[7] = "0", lE[8] = "0", lE[
			9] = "0", aR.aAL()
	}

	function aAH() {
		for (var z = eI - aAE - 1; 0 <= z; z--) lE[z] = a7.uk(lE[z]);
		lE[0] = a7.ui(lE[0])
	}

	function aAU(name, value, aAV) {
		var xk = new Date,
			aAV = (xk.setTime(xk.getTime() + Math.floor(31536e6 * aAV)), name + "=" + value + ";expires=" + xk.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = aAV
	}
	this.dH = function() {
		if (0 === m.id) {
			aAE = 4, vW = [], eI = 10;
			for (var z = aAD = 0; z < eI; z++) vW.push("u" + z);
			lE = new Array(eI), ! function(aAS) {
				for (var eb, fo, aAT = aAS.split(";"), z = aAT.length - 1; 0 <= z; z--) {
					for (aAT[z] = aAT[z].trim(), eb = 2; 0 <= eb; eb--) aAT[z] = aAT[z].replace(" ", "");
					3 < aAT[z].length && (eb = vW.indexOf(aAT[z].substring(0, 2)), fo = aAT[z].indexOf("="), 0 <= eb && 2 === fo ? lE[eb] = aAT[z].substring(fo + 1, aAT[z].length) : 0 < fo && aAU(aAT[z].substring(0, fo), "0", 0))
				}
			}(document.cookie), lE[9] || (lE[9] = "0"), (! function() {
				for (var z = eI - 1; 0 <= z; z--)
					if (void 0 === lE[z]) return;
				return 1
			}() || (aAD = 2, aAH(), aAI(), aAJ() !== lE[5])) && aAK()
		}
	}, this.aAL = function() {
		if (2 === aAD) {
			lE[1] = 0 === lE[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : lE[1], lE[5] = aAJ(), ! function() {
				for (var z = 1; z < eI - aAE; z++) lE[z] = lE[z].toString()
			}(), ! function() {
				lE[0] = a7.uh(lE[0]);
				for (var z = eI - aAE - 1; 0 <= z; z--) lE[z] = a7.uj(lE[z])
			}();
			for (var z = eI - 1; 0 <= z; z--) aAU(vW[z], lE[z], 1);
			aAH(), aAI()
		}
	}, this.aAD = function() {
		return aAD
	}, this.aAP = function(eb) {
		aAD = eb, this.aAL()
	}, this.aAQ = function(z, value) {
		0 === m.id && (lE[z] = value)
	}, this.wM = function(z) {
		return 0 !== m.id ? 0 : lE[z]
	}
}

function cc() {
	var o0 = 0,
		aAW = new Uint16Array(32);

	function remove(a02) {
		var z;
		for (o0 -= 2, z = a02; z < o0; z += 2) aAW[z] = aAW[z + 2], aAW[z + 1] = aAW[z + 3]
	}
	this.dH = function() {
		o0 = 0
	}, this.iC = function() {
		var z, iT, hf;
		if (0 !== o0)
			if (0 === aV.lI[a1.e2] || aS.aAX(a1.e2) === aS.fN(a1.e2)) o0 = 0;
			else
				for (z = o0 - 2; 0 <= z; z -= 2)(iT = aAW[z]) < a1.eF && 0 === aV.lI[iT] ? remove(z) : (hf = aAW[z + 1], (iT >= a1.eF && aAY(a1.e2) || iT < a1.eF && aAZ(a1.e2, iT)) && (b0.ge.gp(hf, iT), remove(z)))
	}, this.gr = function(iT, hf) {
		! function(iT, hf) {
			var z;
			for (z = 0; z < o0; z += 2)
				if (aAW[z] === iT) return aAW[z + 1] = Math.min(aAW[z + 1] + hf, 1023), 1;
			return
		}(iT, hf) && 32 !== o0 && (aAW[o0] = iT, aAW[o0 + 1] = hf, o0 += 2)
	}
}

function cD() {
	function aAn() {
		bS.lE[17] += aV.gK[a1.e2] + aS.aAp(a1.e2), aK.show(!1, !1, !1, !0), aJ.a5V(), bH.result.vs()
	}

	function aAd(player, aAm) {
		for (var z = aAm.length - 1; 0 <= z; z--) aS.aAq(aAm[z], player)
	}

	function aAf(player) {
		for (var ht = aV.ht, hu = aV.hu, hv = aV.hv, hw = aV.hw, lk = ht[player], ll = hv[player], eT = bI.eT, g6 = aV.g6, eP = hu[player]; lk <= eP; eP--)
			for (var eR = hw[player]; ll <= eR; eR--) {
				var fo = 4 * (eR * eT + eP);
				aQ.tK(player, fo) && (aQ.tL(fo), g6[player]--)
			}
		ht[player] = hu[player] = 0, hv[player] = hw[player] = 0
	}
	this.dP = function(fo) {
		var player, dt = aV.g6[fo];
		bD.kt.oC[fo] ? dt && (aAd(player = fo, aS.aAe(player)), aAf(player), a3.ff(player), aS.clear(player), function(player) {
			aV.gK[player] = 0, aV.t8[player] = 0, aV.fi[player] = [], aV.fw[player] = [], aV.fx[player] = [], aV.ei[player] = []
		}(player)) : !dt && aV.fi[fo].length || this.aAc(fo)
	}, this.aAc = function(player) {
		! function(player) {
			aQ.v2(player) && (aV.vo[player] = bX.vi.aAl(), a1.vB++);
			var aAm = aS.aAe(player);
			0 === aAm.length ? b2.fd.yc(player) && aAn() : (aAd(player, aAm), function(player, aAm) {
				var z, eW, aAs = aAm[function(aAm) {
					var z, o0 = 0;
					for (z = aAm.length - 1; 1 <= z; z--) aV.g6[aAm[z]] > aV.g6[aAm[o0]] && (o0 = z);
					return o0
				}(aAm)];
				9 === a1.jl && 1 === bV.eG[player] && ao.jF(8) && ap.aAt(aAs);
				if (b2.fd.yc(player)) aA.vL(aAs, 1), aAn();
				else {
					for (eW = !1, z = aAm.length - 1; 0 <= z; z--)
						if (b2.fd.yc(aAm[z])) return eW = !0, aA.vL(player, 0);
					!eW && player < a1.jN && 2 !== aV.yb[player] && aA.a1I(0, player, aAs)
				}
			}(player, aAm))
		}(player), aAf(player),
			function(player) {
				aV.lI[player] = aV.gK[player] = 0, aV.fi[player] = null, aV.fw[player] = null, aV.fx[player] = null, aV.ei[player] = null
			}(player), a3.ff(player), aS.clear(player), bD.aAj.aAk(player)
	}
}

function ch() {
	var input;

	function aAu(d) {
		aAw(d.target.files)
	}

	function aAw(files) {
		files && 0 < files.length && ax.aAx(files[0])
	}

	function aB2(d) {
		var ed = new Image;
		ed.onload = aB3, ed.src = d.target.result
	}

	function aB3(d) {
		var aB4, d = d.target,
			t = d.width,
			ir = d.height;
		4096 < t || 4096 < ir || t < 10 || ir < 10 ? (aB4 = "Image w & h must be between 10 and 4096.", m.rE ? m.rE.showToast(aB4) : alert(aB4)) : (ay.xF(), bI.fz = bI.aB1(), bI.a8g = 0, bI.eT = t, bI.eU = ir, bI.sN.width = bI.eT, bI.sN.height = bI
			.eU, bI.sJ.drawImage(d, 0, 0), aB4 = bI.sJ.getImageData(0, 0, bI.eT, bI.eU), bI.sO = aB4.data)
	}

	function aB5(d) {
		d.stopPropagation(), d.preventDefault()
	}

	function aB6() {
		return 0 === aN.wU() || 2 === aN.wU()
	}
	this.dH = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = aAu
	}, this.a9I = function() {
		input.click()
	}, this.aAv = function(d) {
		aAu(d)
	}, this.aAx = function(aAy) {
		var ey = aAy.name.split("."),
			aAz = ey[ey.length - 1].toLowerCase();
		"json" === aAz ? ay.rC(aAy) : "gif" !== aAz && "jpg" !== aAz && "jpeg" !== aAz && "png" !== aAz || (bI.ji.sh[bI.aB1()].name = ey[0], (aAz = new FileReader).onload = aB2, aAz.readAsDataURL(aAy))
	}, this.wy = function(d) {
		aB6() && (aB5(d), d.dataTransfer.dropEffect = "copy")
	}, this.wz = function(d) {
		aB6() && (aB5(d), aAw(d.dataTransfer.files))
	}
}

function cf() {
	this.aB7 = null, this.dH = function() {
		10 !== a1.jl ? this.aB7 = null : this.aB7 = new Uint32Array(a1.eF)
	}, this.iC = function() {
		10 === a1.jl && this.wa()
	}, this.wa = function() {
		for (var fo, target, a5f, aB7 = this.aB7, tb = aa.jQ, yh = aV.gK, z = aa.jO - 1; 0 <= z; z--)(fo = tb[z]) >= a1.jN || (target = Math.max(bB.ek(yh[fo], 4), 2048), a5f = Math.max(aT.a5g(fo), 100), aB7[fo] += bB.ek(a5f * target, 1e4), aB7[
			fo] > target && (aB7[fo] = target))
	}, this.ym = function(player, iU) {
		return iU > this.aB7[player] ? (iU = this.aB7[player], this.aB7[player] = 0) : this.aB7[player] -= iU, iU
	}
}

function ci() {
	function aB2(d) {
		ay.jh = !0, ay.aBD(JSON.parse(d.target.result)), ay.vD()
	}

	function aBJ(od, min, max, aBS) {
		return "string" != typeof od || od.length < min ? aBS : od.length > max ? od.substring(0, max) : od
	}

	function aBE(el, min, max) {
		return el = "number" == typeof el ? Math.floor(el) : min, Math.min(Math.max(el, min), max)
	}

	function aBH(el, rA) {
		return "boolean" == typeof el ? el : rA
	}

	function aBL(el, eI, max, aBU) {
		var z, ey, k8;
		if (!Array.isArray(el) || el.length < 1) return null;
		for (ey = new(8 === aBU ? Uint8Array : Uint16Array)(eI), k8 = el.length, z = 0; z < eI; z++) ey[z] = aBE(el[z % k8], 0, max);
		return ey
	}
	this.jh = !1, this.ji = null, this.xF = function() {
		this.jh = !1, this.ji = null
	}, this.a9F = function() {
		this.ji.a9v && this.ji.aB8 && (this.ji.a9v[0] = b2.color.yB(bY.kt.rW())), a1.zW(this.ji.aB9, 0, this.aBA(), this.ji.zZ, !1, !1)
	}, this.aBA = function() {
		return [{
			name: this.ji.aBB ? bY.dZ.data[122].value : this.ji.aBC[0],
			a9G: [0, 0, 0],
			a9H: 0
		}]
	}, this.rC = function(aAy) {
		var aB0 = new FileReader;
		aB0.onload = aB2, aB0.readAsText(aAy)
	}, this.aBD = function(op) {
		this.ji = {}, this.ji.a9D = aBE(op.numberPlayers, 1, 512), this.ji.aBF = aBE(op.modeID, 0, 1), this.ji.fz = aBE(op["gMap.mapID"], 0, bI.aBG - 1), this.ji.a8k = aBE(op.seedMap, 0, 16383), this.ji.aB9 = aBE(op.seedSpawn, 0, 16383), this.ji
			.zc = aBH(op.selectableSpawn, !1), this.ji.aBB = aBH(op.selectableName, !1), this.ji.aB8 = aBH(op.selectableColor, !1), bI.ji.sh[bI.aB1()].name = this.ji.aBI = aBJ(op.mapName, 1, 25, "Custom Map"), this.ji.a0w = function(el) {
				var z, eI;
				if (!Array.isArray(el) || el.length < 1) return [];
				for (eI = el.length, z = 0; z < eI; z++) el[z] = aBJ(el[z], 0, 100, "");
				return el
			}(op.description), this.ji.so = aBL(op.playerX, this.ji.a9D, 4096, 16), this.ji.sz = aBL(op.playerY, this.ji.a9D, 4096, 16), this.ji.aBM = aBL(op.playerTeam, this.ji.a9D, 8, 8), this.ji.jj = aBL(op.playerStrength, this.ji.a9D, 5, 8),
			this.ji.a9v = function(el, eI) {
				var z, ey, k8;
				if (!Array.isArray(el) || el.length < 1) return null;
				for (ey = new Array(eI), k8 = el.length, z = 0; z < eI; z++) ey[z] = aBL(el[z % k8], 3, 63, 8);
				return ey
			}(op.playerColor, this.ji.a9D), this.ji.aBC = function(el, eI) {
				var z, ey, k8;
				if (!Array.isArray(el) || el.length < 1) return null;
				for (ey = new Array(eI), k8 = el.length, z = 0; z < eI; z++) ey[z] = aBJ(el[z % k8], 3, 26, "Bot");
				return ey
			}(op.playerName, this.ji.a9D), this.ji.aBP = "string" == typeof op.mapBase64 ? op.mapBase64 : "", this.ji.aBB = this.ji.aBB || !this.ji.aBC, this.ji.zZ = 0 === this.ji.aBF ? 7 : 2 === this.ji.aBF ? 9 : 6, this.ji.so = this.ji.sz ?
			this.ji.so : null
	}, this.vD = function() {
		! function(od) {
			var h0, gx, aBR = "data:image/png;base64,";
			if (od.length <= aBR.length) return;
			ay.ji.fz = 0, ay.ji.a8k = 0, bI.v(0, 0), od.substring(0, aBR.length) !== aBR && (od = aBR + od);
			return (h0 = new Image).onload = function() {
				bI.eT = h0.width, bI.eU = h0.height, 4096 < bI.eT || 4096 < bI.eU || bI.eT < 10 || bI.eU < 10 ? (bI.v(0, 0), alert("Image w & h must be between 10 and 4096.")) : (bI.fz = bI.aB1(), bI.a8g = 0, bI.sN.width = bI.eT, bI.sN
					.height = bI.eU, bI.sJ.drawImage(h0, 0, 0), gx = bI.sJ.getImageData(0, 0, bI.eT, bI.eU), bI.sO = gx.data)
			}, h0.src = od, ay.ji.aBP = "", 1
		}(this.ji.aBP) && bI.v(this.ji.fz, this.ji.a8k)
	}, this.aBV = function() {
		for (var max = 0, eI = this.ji.a9D, z = 0; z < eI; z++) this.ji.aBM[z] > max && (max = this.ji.aBM[z]);
		return Math.max(0, max - 1)
	}
}

function cG() {
	var aBW, aBX, size, iT, iU, id, aBY;

	function aBZ(player) {
		return player < a1.jN ? aBW * player : aBW * a1.jN + aBX * (player - a1.jN)
	}
	this.dH = function() {
		aBW = a1.jN < 16 ? 12 : 8, aBX = 4;
		var eI = aBZ(a1.eF);
		size = new Uint8Array(a1.eF), iT = new Uint16Array(eI), iU = new Uint32Array(eI), id = new Uint16Array(eI), aBY = new Uint8Array(eI)
	}, this.oU = function(a2X, aBa) {
		var aBb = this.gL(a2X, aBa);
		this.gJ(a2X, aBa, 0), aBb = b2.fd.fg(a2X, aBb), a2X === a1.e2 && (bS.lE[13] -= aBb)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aAq = function(player, aBa) {
		var aBd, aBa = function(player, aBa) {
			var z, k8 = aBZ(player);
			for (z = size[player] - 1; 0 <= z; z--)
				if (0 === id[k8 + z] && iT[k8 + z] === aBa) return z;
			return size[player]
		}(player, aBa);
		aBa !== size[player] && (aBd = iU[aBZ(player) + aBa], this.fh(player, aBa), this.iQ(player, aBd, a1.eF))
	}, this.ii = function(player, aBa) {
		for (var k8 = aBZ(player), z = size[player] - 1; 0 <= z; z--)
			if (0 === id[k8 + z] && iT[k8 + z] === aBa) return !0;
		return !1
	}, this.j1 = function(player) {
		return player < a1.jN ? size[player] < aBW : size[player] < aBX
	}, this.fN = function(player) {
		return size[player]
	}, this.fT = function(player, z) {
		return iT[aBZ(player) + z]
	}, this.fO = function(player, z) {
		return id[aBZ(player) + z]
	}, this.aBe = function(player, aBf) {
		for (var k8 = aBZ(player), z = size[player] - 1; 0 <= z; z--)
			if (id[k8 + z] === aBf) return z;
		return -1
	}, this.fU = function(player, z) {
		return iU[aBZ(player) + z]
	}, this.gL = function(player, aBa) {
		for (var k8 = aBZ(player), z = size[player] - 1; 0 <= z; z--)
			if (0 === id[k8 + z] && iT[k8 + z] === aBa) return iU[k8 + z];
		return 0
	}, this.aAp = function(player) {
		for (var k8 = aBZ(player), el = 0, z = size[player] - 1; 0 <= z; z--) el += iU[k8 + z];
		return el
	}, this.aBg = function(player) {
		for (var k8 = aBZ(player), el = 0, z = size[player] - 1; 0 <= z; z--) 0 === id[k8 + z] && (el += iU[k8 + z]);
		return el
	}, this.aAX = function(player) {
		for (var k8 = aBZ(player), fj = 0, z = size[player] - 1; 0 <= z; z--) 0 < id[k8 + z] && fj++;
		return fj
	}, this.gJ = function(player, aBa, aBd) {
		for (var k8 = aBZ(player), z = size[player] - 1; 0 <= z; z--) 0 === id[k8 + z] && iT[k8 + z] === aBa && (iU[k8 + z] = aBd)
	}, this.g4 = function(player, z, aBd) {
		iU[aBZ(player) + z] = Math.max(aBd, 0)
	}, this.g5 = function(player, z) {
		aBY[aBZ(player) + z] = 0
	}, this.fV = function(player, z) {
		return aBY[aBZ(player) + z]
	}, this.iQ = function(player, aBd, aBa) {
		for (var k8 = aBZ(player), z = size[player] - 1; 0 <= z; z--)
			if (0 === id[k8 + z] && iT[k8 + z] === aBa) return iU[k8 + z] += aBd, void(iU[k8 + z] = iU[k8 + z] > a1.yi ? a1.yi : iU[k8 + z]);
		iT[k8 + size[player]] = aBa, iU[k8 + size[player]] = aBd, id[k8 + size[player]] = 0, aBY[k8 + size[player]] = 1, size[player]++, player < a1.jN && (aBa === a1.e2 ? aA.vL(player, 5) : player === a1.e2 && aU.a1K(aBa))
	}, this.aBh = function(player, aBd, aBf) {
		var k8 = aBZ(player);
		iT[k8 + size[player]] = 0, iU[k8 + size[player]] = aBd, id[k8 + size[player]] = aBf, aBY[k8 + size[player]] = 0, size[player]++
	}, this.fh = function(player, o0) {
		var eb, k8;
		if (0 !== size[player])
			for (k8 = aBZ(player), size[player]--, eb = o0; eb < size[player]; eb++) iT[k8 + eb] = iT[k8 + eb + 1], iU[k8 + eb] = iU[k8 + eb + 1], id[k8 + eb] = id[k8 + eb + 1], aBY[k8 + eb] = aBY[k8 + eb + 1]
	}, this.aAe = function(player) {
		for (var eb, k8, aAm = [], z = aa.jO - 1; 0 <= z; z--)
			for (k8 = aBZ(aa.jQ[z]), eb = size[aa.jQ[z]] - 1; 0 <= eb; eb--)
				if (0 === id[k8 + eb] && iT[k8 + eb] === player) {
					aAm.push(aa.jQ[z]);
					break
				} return aAm
	}
}

function cH() {
	var aBi, aBj, aBk, aBl, aBm, aBn;
	this.dH = function() {
		aBk = aBi = 10, aBl = aBj = 10
	}, this.dN = function() {
		aBn = 512, aBm = new Uint16Array(aBn);
		for (var z = 0; z < aBn; z++) aBm[z] = 100 + aBo(bB.ek(25600 * z, aBn - 4), 9)
	}, this.a4T = function() {
		return aBl
	}, this.iC = function() {
		if (--aBk <= 0 && (aBk = aBi, function() {
				var jP = aa.jQ,
					gK = aV.gK,
					dt = gK[a1.e2];
				a1.jn && !a1.iN && 0 !== aV.lI[0] && 0 === aO.jp[0].eL && (aV.gK[0] += bB.ek(aV.g6[0], 6));
				for (var z = aa.jO - 1; 0 <= z; z--) {
					var fo = jP[z],
						aBu = bB.ek(aT.a5g(fo) * gK[fo], 1e4);
					b2.fd.fg(fo, Math.max(aBu, 1))
				}
				bS.lE[9] += gK[a1.e2] - dt
			}(), --aBl <= 0)) {
			aBl = aBj;
			for (var gK = aV.gK, g6 = aV.g6, jP = aa.jQ, gK = gK[a1.e2], z = aa.jO - 1; 0 <= z; z--) {
				var fo = jP[z];
				b2.fd.fg(fo, g6[fo])
			}
			bS.lE[8] += aV.gK[a1.e2] - gK
		}
	}, this.a5g = function(player) {
		var h3 = aBm[bB.ek((aBn - 1) * aV.g6[player], a1.j7)],
			aBs = (bU.jK() < 1920 && (h3 = h3 < (aBs = bB.ek(100 * (13440 - 6 * bU.jK()), 1920)) ? aBs : h3), this.j3(player));
		return aV.gK[player] > aBs && (h3 -= bB.ek(2 * h3 * (aV.gK[player] - aBs), aBs)), h3 < 0 ? 0 : 700 < h3 ? 700 : h3
	}, this.j3 = function(player) {
		return Math.min(100 * aV.g6[player], a1.zS)
	}, this.nP = function(player, nQ) {
		b2.fd.fg(nQ, bE.eq[0]), bS.nn(player, nQ), aU.aBv(player, bE.eq[0] + bE.eq[1]), aU.no(nQ, bE.eq[0]), b2.fd.oM(player)
	}, this.aBw = function() {
		for (var eI = aa.jO, tb = aa.jQ, k8 = 0, yh = aV.gK, z = 0; z < eI; z++) k8 += yh[tb[z]];
		return k8
	}, this.aBx = function(w9) {
		for (var fo, eI = aa.jO, tb = aa.jQ, k8 = 0, yh = aV.gK, eG = bV.eG, z = 0; z < eI; z++) eG[fo = tb[z]] === w9 && (k8 += yh[fo]);
		return k8
	}
}

function cJ() {
	var aBy, aBz, aC0, aC1, aC2, aC3, aC4, aC5, aC6, aC7, aC8, aC9, aCA, aCB, aCC, aCD, aCE, aCF, aCH, aCI, a6f, aCJ, aCK, aCR, aCS, aCG = null,
		aCM = 0,
		aCN = !1,
		aCO = new Float32Array(4),
		aCP = 0,
		aCQ = !0,
		a4w = 400;

	function p0() {
		aC6 = Math.floor(+an.oy), aC7 = Math.floor(.5 * aC6)
	}

	function aCT() {
		var z, aCY;
		for (qo.font = b2.ow.q5(1, 100 * aC8), aCY = 80 / Math.floor(qo.measureText(b2.w0.z6(a1.yi)).width), qo.font = b2.ow.q5(1, 100), z = a1.eF - 1; 0 <= z; z--) aC5[z] = 100 / Math.floor(qo.measureText(aV.a1G[z]).width), aC4[z] = Math.min(aCY,
			aC5[z])
	}

	function aCZ(z) {
		return !bY.dZ.data[7].value || (z = aV.gK[z]) < 1e6 ? 1 : z < 1e7 ? aCO[0] : aCO[Math.min(Math.floor(Math.log10(z)) - 6, 3)]
	}

	function aCX(h1) {
		aCF = !1, aCE = 1, aCC = aCD = 0, aCQ && (b2.ow.textAlign(h1, 1), b2.ow.textBaseline(h1, 1));
		for (var aCf, aCg, z, aCh, fontSize, aCi, lk = hg / hh, ll = hi / hh, ly = (an.t + hg) / hh, lz = (an.ir + hi) / hh, aCj = 0 !== aV.lI[a1.e2] && aQ.v2(a1.e2), eb = aa.jO - 1; 0 <= eb; eb--) z = aa.jQ[eb], (fontSize = Math.floor(aCB * hh *
			aCZ(z) * aC4[z] * aC2[z])) < aCA || aC6 <= fontSize || aC0[z] + aC2[z] > lk && aC0[z] < ly && aC1[z] + aC3[z] > ll && aC1[z] < lz && (aCf = Math.floor(an.t * (aC0[z] + aC2[z] / 2 - lk) / (ly - lk)), aCg = Math.floor(an.ir * (aC1[z] +
			aC3[z] / 2 - ll) / (lz - ll) - .1 * fontSize), aCh = aQ.a2z[z], h1.font = b2.ow.q5(1 === aV.yb[z] ? 4 : 1, fontSize), h1.fillStyle = aCk(fontSize, aCh % 2), bY.dZ.data[7].value ? aCl(h1, z, fontSize, aCf, aCg, aCh) : aCm(z,
			fontSize, aCf, aCg, h1), aCF = !0, 0 < a6f[z] ? function(aCf, aCg, fontSize, z, h1) {
			0 === j8[z] ? aY.tl.uP(aCI[z]) ? (function(aCf, aCg, fontSize, player, na, h1) {
				for (var ss = aCg, gz = (h1.globalAlpha = aCu(fontSize), aCZ(player) * (bY.dZ.data[7].value ? aCP : aC5[player])), sr = aCf - .5 * fontSize / gz - .9 * fontSize, ec = 0; ec < 2; ec++) h1.fillText(aY.tl.uJ(na), sr, ss),
					sr = aCf + .5 * fontSize / gz + .9 * fontSize;
				h1.globalAlpha = 1
			}(aCf, aCg, fontSize, z, aCI[z], h1), aCo(aCf, aCg, fontSize, 0, 0, h1)) : aY.tl.uR(aCI[z]) ? (aCx(aCf, aCg, fontSize, aCI[z], 0, h1), aCo(aCf, aCg, fontSize, 0, 1, h1)) : (aCx(aCf, aCg, fontSize, aCI[z], 1, h1), aCo(aCf, aCg,
				fontSize, 1, 0, h1)) : aCx(aCf, aCg, fontSize, aCI[z], 0, h1)
		}(aCf, aCg, fontSize, z, h1) : 0 === j8[z] && aCo(aCf, aCg, fontSize, 0, 0, h1), aCj && (0 < a6f[z + a1.eF] || 0 < a6f[z + 2 * a1.eF] || 0 < a6f[z + 3 * a1.eF] || 0 < a6f[z + 4 * a1.eF]) && function(aCf, aCg, fontSize, z, h1) {
			var ed, fj = -1;
			for (ed = 4; 1 <= ed; ed--) 0 < a6f[z + ed * a1.eF] && fj++;
			for (ed = 1; ed < 5; ed++) 0 < a6f[z + ed * a1.eF] && (! function(aCf, aCg, fontSize, ed, z, aCs, dt, h1) {
				var y6;
				if (1 === ed) {
					z = aCI[z + a1.eF];
					if (!aY.tl.uQ(z)) return function(aCf, aCg, fontSize, na, aCs, h1) {
						h1.globalAlpha = aCu(fontSize);
						aCf -= .534 * aCs * fontSize, aCs = aCg + 1.59 * fontSize;
						h1.font = b2.ow.q5(0, .785 * fontSize), h1.fillText(aY.tl.uJ(na), aCf, aCs), h1.globalAlpha = 1
					}(aCf, aCg, fontSize, z, aCs, h1);
					y6 = aY.sQ.ts[z - 1024 + aY.tl.u3]
				} else y6 = 2 === ed ? a8.a00()[4].h0[+(dt < 255)] : (3 === ed ? a8.a00()[5] : a8.a00()[6]).h0[0];
				z = aY.sQ.tt, dt = .8 * fontSize / z, ed = aCf - .5 * dt * z - .534 * aCs * fontSize, aCf = aCg + 1.4 * dt * z;
				h1.setTransform(dt, 0, 0, dt, ed, aCf), h1.globalAlpha = aCu(fontSize), h1.drawImage(y6, 0, 0), h1.globalAlpha = 1, h1.setTransform(1, 0, 0, 1, 0, 0)
			}(aCf, aCg, fontSize, ed, z, fj, a6f[z + ed * a1.eF], h1), fj -= 2)
		}(aCf, aCg, fontSize, z, h1), (aCi = aC8 * fontSize) < aCA || (h1.font = b2.ow.q5(1, aCi), aCg += Math.floor(.78 * fontSize), bY.dZ.data[7].value ? aCm(z, aCi, aCf, aCg, h1) : aCl(h1, z, aCi, aCf, aCg, aCh)))
	}

	function aCm(z, fontSize, eP, eR, h1) {
		var ___id = z;
		h1.fillText(aV.a1G[z], eP, eR), z < a1.jN && 2 !== aV.yb[z] || (z = fontSize / aC5[z], h1.fillRect(eP - .5 * z, eR + b2.ow.uK * fontSize, z, Math.max(1, .1 * fontSize)));
		bY.dZ.data[7].value && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (h1.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), h1.fillText(__fx.utils.getDensity(___id), eP, eR + fontSize));
	}

	function aCl(h1, z, fontSize, aCf, aCg, aCh) {
		var ___id = z;
		z = b2.w0.z6(aV.gK[z]);
		aCh >> 1 & 1 ? (h1.lineWidth = .05 * fontSize, h1.strokeStyle = aCk(fontSize, aCh % 2), h1.strokeText(z, aCf, aCg)) : (1 < aCh && (h1.lineWidth = .12 * fontSize, h1.strokeStyle = aCk(fontSize, aCh), h1.strokeText(z, aCf, aCg)), h1.fillText(z,
			aCf, aCg));
		bY.dZ.data[7].value || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (h1.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), h1.fillText(__fx.utils.getDensity(___id), aCf, aCg + fontSize))
	}

	function aCo(aCf, aCg, fontSize, aCs, aCt, h1) {
		var a0Z = .95 * fontSize / aCK,
			aCf = aCf - .5 * a0Z * aCJ + .8 * aCs * fontSize,
			aCs = aCg - 1.76 * a0Z * aCK - (.35 - b2.ow.uK + .7) * aCt * fontSize;
		h1.setTransform(a0Z, 0, 0, a0Z, aCf, aCs), h1.globalAlpha = aCu(fontSize), h1.drawImage(aP.get(4), 0, 0), h1.globalAlpha = 1, h1.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aCx(aCf, aCg, fontSize, na, aCs, h1) {
		var gu, sr, a0Z;
		h1.globalAlpha = aCu(fontSize), aY.tl.uQ(na) ? (gu = aY.sQ.tt, h1.setTransform(a0Z = 1.1 * fontSize / gu, 0, 0, a0Z, sr = aCf - .5 * a0Z * gu - .8 * aCs * fontSize, a0Z = aCg - 1.55 * a0Z * gu), h1.drawImage(aY.sQ.ts[na - 1024 + aY.tl.u3], 0,
			0), h1.setTransform(1, 0, 0, 1, 0, 0)) : (sr = aCf - .8 * aCs * fontSize, a0Z = aCg - (.35 - b2.ow.uK + 1) * fontSize, h1.fillText(aY.tl.uJ(na), sr, a0Z)), h1.globalAlpha = 1
	}

	function aCk(fontSize, aCh) {
		return aC7 <= fontSize && fontSize < aC6 ? bV.aCz[aCh] + aCu(fontSize).toFixed(3) + ")" : bV.aD0[aCh]
	}

	function aCu(fontSize) {
		return aC7 <= fontSize && fontSize < aC6 ? 1 - (fontSize - aC7) / (aC6 - aC7) : 1
	}

	function aD9(gz, t) {
		return 1 + Math.floor(aC9 * gz * t)
	}

	function aD6(z) {
		for (var left = aC0[z], eb = aC0[z] - aV.ht[z] - 1; 0 <= eb; eb--)
			if (!aDA(z, --left, aC1[z], aC3[z])) {
				left++;
				break
			} var right = aC0[z];
		for (eb = aV.hu[z] - aC0[z] - aC2[z]; 0 <= eb; eb--)
			if (!aDA(z, ++right + aC2[z] - 1, aC1[z], aC3[z])) {
				right--;
				break
			} var eP = Math.floor((left + right) / 2),
			top = aC1[z];
		for (eb = aC1[z] - aV.hv[z] - 1; 0 <= eb; eb--)
			if (!aDB(z, eP, --top, aC2[z])) {
				top++;
				break
			} var bottom = aC1[z];
		for (eb = aV.hw[z] - aC1[z] - aC3[z]; 0 <= eb; eb--)
			if (!aDB(z, eP, ++bottom + aC3[z] - 1, aC2[z])) {
				bottom--;
				break
			} var eR = Math.floor((top + bottom) / 2);
		aD3(z, eP, eR, aC2[z], aC3[z]) && (aC0[z] = eP, aC1[z] = eR)
	}

	function aD3(player, eP, eR, t, ir) {
		eL = Math.floor(.2 * t);
		for (var eL, ed = eP + t - 1; eP <= ed; ed--)
			if (!aDA(player, ed, eR, ir)) return;
		for (ed = eR + ir - 1 - (eL = (eL = Math.floor(.25 * ir)) < 1 ? 1 : eL); eR + eL <= ed; ed--)
			if (!aDB(player, eP, ed, t)) return;
		return 1
	}

	function aDA(player, eP, eR, ir) {
		return aQ.tK(player, 4 * (eR * bI.eT + eP)) && aQ.tK(player, 4 * ((eR + ir - 1) * bI.eT + eP))
	}

	function aDB(player, eP, eR, t) {
		return aQ.tK(player, 4 * (eR * bI.eT + eP)) && aQ.tK(player, 4 * (eR * bI.eT + eP + t - 1))
	}
	this.dH = function() {
		if (a4w = 0 === (a4w = bY.dZ.data[11].value) ? 280 : 1 === a4w ? 187 : 112, aCF = !1, aCB = .88, aC8 = .5, aC9 = 1.8, aCA = 12 - 3 * bY.dZ.data[9].value, aBz = aBy = 0, aC0 = new Uint16Array(a1.eF), aC1 = new Uint16Array(a1.eF), aC2 =
			new Uint16Array(a1.eF), aC3 = new Uint16Array(a1.eF), aC4 = new Float32Array(a1.eF), aC5 = new Float32Array(a1.eF), aCI = new Uint16Array(2 * a1.eF), a6f = new Uint8Array(5 * a1.eF), aCR = new Uint8Array(a1.eF), aCS = new Uint8Array(
				a1.eF), aCQ || (aCG = aCG || document.createElement("canvas")), p0(), aCD = aCC = 0, aCE = 1, bY.dZ.data[7].value) {
			var z, aCY;
			for (aCT(), qo.font = b2.ow.q5(1, 100), aCY = 100 / Math.floor(qo.measureText("900 000").width), z = a1.eF - 1; 0 <= z; z--) aC4[z] = Math.min(aCY, 2 * aC5[z]);
			aCP = aCY, aCO[0] = 100 / (aCY * Math.floor(qo.measureText("5 000 000").width)), aCO[1] = 100 / (aCY * Math.floor(qo.measureText("50 000 000").width)), aCO[2] = 100 / (aCY * Math.floor(qo.measureText("500 000 000").width)), aCO[3] =
				100 / (aCY * Math.floor(qo.measureText("1 000 000 000").width))
		} else aCT();
		! function() {
			var z;
			for (z = a1.eF - 1; 0 <= z; z--) aV.g6[z] < 12 ? (aC0[z] = aV.ht[z] + 1, aC1[z] = aV.hv[z] + 1, aC2[z] = 1, aC3[z] = 1) : (aC0[z] = aV.ht[z], aC1[z] = aV.hv[z] + 1, aC2[z] = 4, aC3[z] = 2);
			if (a1.gd)
				for (z = 0; z < a1.jN; z++) aC2[z] = 0;
			aCJ = aP.get(4).width, aCK = aP.get(4).height
		}()
	}, this.aBv = function(fo, a1a) {
		a1a > 18 * aV.g6[fo] ? (aCS[fo] = 6, aQ.a2z[fo] = 2 + aQ.a2z[fo] % 2) : (aCR[fo] = 4, (aQ.a2z[fo] < 2 || 3 < aQ.a2z[fo]) && (aQ.a2z[fo] = 6 + aQ.a2z[fo] % 2))
	}, this.no = function(fo, a1a) {
		a1a > 6 * aV.g6[fo] ? (aCS[fo] = 6, aQ.a2z[fo] = 4 + aQ.a2z[fo] % 2) : (aCR[fo] = 4, (aQ.a2z[fo] < 4 || 5 < aQ.a2z[fo]) && (aQ.a2z[fo] = 8 + aQ.a2z[fo] % 2))
	}, this.resize = function() {
		p0(), aCQ || aCX(aCH)
	}, this.zO = function() {
		for (var z = 0; z < a1.jN; z++) aV.hu[z] - aV.ht[z] != 3 || aV.hw[z] - aV.hv[z] != 3 ? (aC0[z] = aV.ht[z] + (aV.hu[z] !== aV.ht[z] ? 1 : 0), aC1[z] = aV.hv[z], aC2[z] = 1, aC3[z] = 1) : (aC0[z] = aV.ht[z], aC1[z] = aV.hv[z] + 1, aC2[z] =
			4, aC3[z] = 2)
	}, this.oW = function(player, o0, aCa) {
		! function(player, o0, aCa) {
			player += o0 * a1.eF;
			0 === o0 ? aCI[player] === aCa && 0 < a6f[player] ? a6f[player] = 0 : (aCI[player] = aCa, a6f[player] = aY.tl.uP(aCa) ? 255 : 64) : 1 === o0 ? (a6f[player] = 64, aCI[player] = aCa) : a6f[player] = aCa
		}(player, o0, aCa), 2 === a1.v9 && this.l1(!0)
	}, this.qn = function() {
		aCQ ? aCX(qo) : aCF && (1 !== aCE ? (qo.imageSmoothingEnabled = !0, qo.setTransform(aCE, 0, 0, aCE, 0, 0), qo.drawImage(aCG, -aCC / aCE, -aCD / aCE), qo.setTransform(1, 0, 0, 1, 0, 0), qo.imageSmoothingEnabled = !1) : qo.drawImage(aCG, -
			aCC, -aCD))
	}, this.a3j = function(hR, hU) {
		aCC += hR, aCD += hU
	}, this.wq = function(hR, hU) {
		aU.a3j(hR, hU)
	}, this.zoom = function(xo, kU, kV) {
		aCE *= xo, aCC = (aCC + kU) * xo - kU, aCD = (aCD + kV) * xo - kV
	}, this.l1 = function(bc) {
		return !aCQ && !(!aCN && !bc && bU.ds < aCM + (1 === aCE && 0 === aCC && 0 === aCD && (a1.zp() || a1.gd || 2 === a1.v9) ? 1e3 : a4w) || (aCN = !1, aCM = bU.ds, aCX(aCH), 0))
	}, this.aCd = function(z) {
		return aCZ(z) * aC4[z]
	}, this.aCe = function(player) {
		return aC4[player]
	}, this.iC = function() {
		bU.jK() % 10 == 9 && (aCN = a1.zr() && !a1.zp()), !a1.zp() && 4 <= ++aBz && function() {
			var z, eb, ec;
			for (aBz = 0, ec = 4; 1 <= ec; ec--)
				for (eb = aa.jO - 1; 0 <= eb; eb--) z = aa.jQ[eb] + ec * a1.eF, 0 < a6f[z] && a6f[z] < 255 && a6f[z]--;
			if (2 !== a1.v9)
				for (eb = aa.jO - 1; 0 <= eb; eb--) z = aa.jQ[eb], 0 < a6f[z] && a6f[z] < 255 && a6f[z]--
		}();
		var z, eb, eI = Math.floor(.1 * aa.jO);
		for (eI = (eI = eI < 8 ? 8 : eI) > aa.jO ? aa.jO : eI, z = aBy + eI - 1; aBy <= z; z--) eb = z % aa.jO, ! function(z) {
			var gz = aCZ(z) * aC4[z];
			0 < aC2[z] && aD3(z, aC0[z], aC1[z], aC2[z], aC3[z]) ? ! function(z) {
				for (var eP, eR, t, ir, dy = !1, ec = 0; ec < 8; ec++) {
					if (t = aC2[z] + 2, ir = aC3[z] + 2, t > aV.hu[z] - aV.ht[z] + 1 || ir > aV.hw[z] - aV.hv[z] + 1) return dy;
					if (eP = aC0[z] - 1, eR = aC1[z] - 1, !aD3(z, eP, eR, t, ir)) return dy;
					aC0[z] = eP, aC1[z] = eR, aC2[z] = t, aC3[z] = ir, dy = !0
				}
				return dy
			}(z) && function(z, gz) {
				for (var eP, eR, t, ir, dy = !1, a6o = aC2[z], lw = 1 + Math.floor(.02 * a6o), ec = 1; ec < 5; ec++) {
					if ((t = a6o + ec * lw) > aV.hu[z] - aV.ht[z] + 1) return dy;
					if ((ir = aD9(gz, t)) > aV.hw[z] - aV.hv[z] + 1) return dy;
					eP = aV.ht[z] + Math.floor(Math.random() * (aV.hu[z] - aV.ht[z] + 2 - t)), eR = aV.hv[z] + Math.floor(Math.random() * (aV.hw[z] - aV.hv[z] + 2 - ir)), aD3(z, eP, eR, t, ir) && (aC0[z] = eP, aC1[z] = eR, aC2[z] = t,
						aC3[z] = ir, dy = !0)
				}
				return dy
			}(z, gz) && aD6(z) : ! function(z, gz) {
				var ir, eP = aC0[z] + 1,
					eR = aC1[z] + 1,
					t = aC2[z] - 2;
				for (;;) {
					if (t < 1) {
						aC2[z] = 0;
						break
					}
					if (ir = aD9(gz, t), aD3(z, eP, eR, t, ir)) return aC0[z] = eP, aC1[z] = eR, aC2[z] = t, aC3[z] = ir, 1;
					eP++, eR++, t -= 2
				}
				return
			}(z, gz) ? function(z, gz) {
				var eP, eR, t, ir, ec, m3, ib = aV.hu[z] - aV.ht[z] + 1,
					ki = Math.floor(.02 * ib);
				for (m3 = -6 * (ki = ki < 1 ? 1 : ki), ec = ib; m3 <= ec; ec -= ki)
					if (ir = aD9(gz, t = 0 < ec ? ec : 1), eP = aV.ht[z] + Math.floor(Math.random() * (aV.hu[z] - aV.ht[z] + 2 - t)), eR = aV.hv[z] + Math.floor(Math.random() * (aV.hw[z] - aV.hv[z] + 2 - ir)), aD3(z, eP, eR, t, ir))
						return aC0[z] = eP, aC1[z] = eR, aC2[z] = t, aC3[z] = ir
			}(z, gz) : aD6(z)
		}(aa.jQ[eb]);
		aBy = (aBy += eI) % aa.jO
	}, this.kw = function() {
		var z, fo, hA, hB;
		if (bU.jK() % 4 == 1)
			for (z = aa.jO - 1; 0 <= z; z--) fo = aa.jQ[z], aQ.a2z[fo] < 2 || ((hA = Math.max(aCR[fo] - 1, 0)) === (hB = Math.max(aCS[fo] - 1, 0)) ? 0 === hA && (aQ.a2z[fo] %= 2) : 0 === hB && aQ.a2z[fo] < 6 && (aQ.a2z[fo] += 4), aCR[fo] = hA,
				aCS[fo] = hB)
	}, this.a1K = function(player) {
		var z = player + 2 * a1.eF,
			dt = a6f[z];
		return 0 < dt && (aA.vG(50, player), a6f[z] = 0, 255 === dt)
	}, this.a0J = function(player) {
		return 255 === a6f[player + 2 * a1.eF]
	}
}

function cL() {
	var vW, aDC;
	this.dH = function() {
		vW = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var z, eb, a1c = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			aDD = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (aDC =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), z = vW.length - 1; 0 <= z; z--)
			for (eb = a1c.length - 1; 0 <= eb; eb--) vW[z] = vW[z].replace(a1c[eb], aDD[eb]);
		if (__fx.settings.realisticNames) vW = realisticNames;
	}, this.v = function() {
		var z;
		if (ay.jh && ay.ji.aBC)
			for (z = a1.jN; z < a1.eF; z++) aV.a1G[z] = aV.w2[z] = ay.ji.aBC[z % a1.st];
		else(9 === a1.jl ? function() {
			var z, h3 = ao.random(),
				eI = vW.length,
				k8 = a1.jN + ap.aDI;
			for (z = k8 - 1; z >= a1.jN; z--) aV.a1G[z] = aV.w2[z] = vW[(z + h3) % eI];
			for (eI = aDC.length, z = k8; z < a1.eF; z++) aV.a1G[z] = aV.w2[z] = aDC[z % eI]
		} : a1.jn ? function() {
			var z, h3 = ao.random();
			for (z = a1.jN; z < a1.eF; z++) aV.a1G[z] = aV.w2[z] = vW[(z + h3) % a1.eF]
		} : function() {
			var z, eI = vW.length,
				h3 = ao.random();
			for (z = a1.jN; z < a1.eF; z++) aV.a1G[z] = aV.w2[z] = vW[(z + h3) % eI]
		})()
	}
}

function cg() {
	this.aDJ = [], this.aDK = [], this.dH = function() {
		this.aDJ = [], this.aDK = []
	}, this.iC = function() {
		0 <= this.aDJ.length && this.aDL(this.aDJ), 0 <= this.aDK.length && this.aDL(this.aDK)
	}, this.aDL = function(ey) {
		for (var ec = -1, z = ey.length - 1; 0 <= z; z--)
			if (ey[z].ds--, ey[z].ds <= 0) {
				ec = z;
				break
			} for (z = ec; 0 <= z; z--) ey.shift()
	}, this.a08 = function(id, tb, aDM) {
		return this.ee(this.aDJ, id, tb, aDM)
	}, this.aDN = function(id, tb, aDM) {
		return this.ee(this.aDK, id, tb, aDM)
	}, this.ee = function(ey, id, tb, aDM) {
		return ! function(ey, id, tb) {
			var z, kB;
			for (z = tb.length - 1; 0 <= z; z--)
				for (kB = ey.length - 1; 0 <= kB; kB--)
					if (ey[kB].player === tb[z] && id === ey[kB].id) return 1;
			return
		}(ey, id, tb) && (aDM && function(ey, id, tb) {
			var z;
			for (z = tb.length - 1; 0 <= z; z--) ey.push({
				player: tb[z],
				id: id,
				ds: 384
			})
		}(ey, id, tb), !0)
	}
}

function cK() {
	this.w2 = new Array(a1.eF), this.a1G = new Array(a1.eF), this.yb = new Uint8Array(a1.eF), this.lI = new Uint8Array(a1.eF), this.ht = new Uint16Array(a1.eF), this.hv = new Uint16Array(a1.eF), this.hu = new Uint16Array(a1.eF), this.hw =
		new Uint16Array(a1.eF), this.g6 = new Uint32Array(a1.eF), this.t8 = new Uint32Array(a1.eF), this.gK = new Uint32Array(a1.eF), this.fi = null, this.fw = null, this.fx = null, this.ei = null, this.oL = new Uint16Array(a1.eF), this.iK =
		new Uint16Array(a1.eF), this.iL = new Uint16Array(a1.eF), this.vo = new Uint16Array(a1.eF), this.vu = new Uint8Array(a1.eF), this.yg = new Uint16Array(a1.eF), this.dH = function(tb) {
			for (var z = tb.length - 1; 0 <= z; z--) this.a1G[z] = this.w2[z] = tb[z].name, this.yb[z] = tb[z].a9H;
			this.lI.fill(0), this.ht.fill(0), this.hv.fill(0), this.hu.fill(0), this.hw.fill(0), this.g6.fill(0), this.t8.fill(0), this.gK.fill(0), __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx
				.customLobby.setActive(false), this.fi = new Array(a1.eF), this.fw = new Array(a1.eF), this.fx = new Array(a1.eF), this.ei = new Array(a1.eF), this.oL.fill(0), this.iK.fill(0), this.iL.fill(0), this.vo.fill(0), this.vu.fill(0), this
				.yg.fill(0)
		}
}

function ce() {
	this.aDQ = function(player) {
		a4.lH(player), a1.vB++, aV.yb[player] = 2, aV.vo[player] = bX.vi.aAl(), player === a1.e2 && (aK.show(!1, !1), aJ.a5V(), bH.result.vs()), aU.a1K(player)
	}
}

function cE() {
	this.jQ = null, this.jO = 0, this.zi = function() {
		for (this.jO = 0, z = a1.eF - 1; 0 <= z; z--) 0 !== aV.lI[z] && this.jO++;
		this.jQ = new Uint16Array(this.jO);
		for (var eI = 0, z = 0; z < a1.eF; z++) 0 !== aV.lI[z] && (this.jQ[eI++] = z)
	}, this.kv = function() {
		for (var g6 = aV.g6, t8 = aV.t8, vu = aV.vu, jQ = aa.jQ, z = aa.jO - 1; 0 <= z; z--) {
			var dt, fo = jQ[z];
			g6[fo] <= bB.ek(t8[fo], 4) ? aZ.dP(fo) : g6[fo] >= t8[fo] ? (dt = g6[fo], 250 <= (t8[fo] = dt) && (vu[fo] = 1)) : t8[fo] -= Math.max(1, bB.ek(t8[fo] - g6[fo], 1e3))
		}
		this.aDS()
	}, this.aDS = function() {
		for (var lI = aV.lI, jP = this.jQ, a67 = this.jO, z = a67 - 1; 0 <= z; z--) 0 === lI[jP[z]] && (jP[z] = jP[--a67]);
		this.jO = a67
	}
}

function cM() {
	var aDT;
	this.jr = null, this.dH = function() {
		aDT = [], 9 === a1.jl && this.aDU()
	}, this.aDU = function() {
		var z, aDV = [57, 85, 105, 150, 190, 333];
		if (this.aDI = 0, this.jr = [0, 0, 0, 0, 0, 0], a1.jN <= aDV[0]) this.jr[0] = Math.max(bB.ek(a1.jN * (512 - a1.jN), aDV[0]), 13), a1.jk = this.jr[0];
		else
			for (a1.jk = a1.eF - a1.jN, z = 1; z < 6; z++)
				if (a1.jN <= aDV[z]) {
					this.jr[z - 1] = 512 - aDV[z - 1] - bB.ek((512 - aDV[z - 1]) * (a1.jN - aDV[z - 1]), aDV[z] - aDV[z - 1]), this.jr[z] = 512 - a1.jN - this.jr[z - 1];
					break
				} a1.st = a1.jN + a1.jk
	}, this.aAt = function(player) {
		aDT.push({
			player: player,
			fj: 14 + ao.ic(20)
		})
	}, this.iC = function() {
		var z;
		if (9 === a1.jl)
			for (z = aDT.length - 1; 0 <= z; z--) --aDT[z].fj <= 0 && (aU.oW(aDT[z].player, 0, aY.tl.u6 + aY.tl.uL), aDT.splice(z))
	}
}

function cv() {
	function aDc(z) {
		return void 0 !== bI.ji.sh[z].aDj
	}

	function aDa(z) {
		return 1 !== z && !aDc(z) && z !== bI.aB1()
	}
	this.aBG = 22, this.eT = 0, this.eU = 0, this.sN = null, this.sJ = null, this.sK = null, this.sO = null, this.fz = 0, this.a8g = 0, this.sL = !1, this.sM = new aDX, this.ji = new aDY, this.a1i = new aDZ, this.dH = function() {
		this.ji.dH()
	}, this.v = function(map, a8k) {
		((map %= this.aBG) !== this.fz || aDa(this.fz) && a8k !== this.a8g) && (this.sL = !1, this.sM.a8s(), ao.ze(map), this.fz = map, this.a8g = a8k, aDa(map) && (bI.ji.sh[map].aDb = a8k), aDc(this.fz) ? aDd() : (map = bI.ji.sh[this.fz], this
			.eT = map.t, this.eU = map.ir, ao.ze(map.aDb), ae.v([this.eT, this.eU, map.lN, map.lK]), aDe(), ad.aDf(), ae.aDg()))
	}, this.fy = function(z) {
		return 3 === z || 7 === z || 9 === z || 21 === z || z === this.aB1()
	}, this.aDh = function(z) {
		return 2 === z || 7 === z || 9 === z || 20 === z
	}, this.aDi = function(z) {
		return 1 === z
	}, this.aB1 = function() {
		return this.aBG
	}
}

function aDX() {
	function aDs() {
		bI.sM.iC()
	}

	function aDy(fo, aDx) {
		0 < aDx && (bI.sO[fo] += aDx, bI.sO[fo + 1] += aDx, bI.sO[fo + 2] += aDx)
	}

	function gk(fo) {
		return bI.sO[fo + 2] > bI.sO[fo] && bI.sO[fo + 2] > bI.sO[fo + 1]
	}
	this.a3u = -1, this.dr = 0, this.aDk = 0, this.aDl = 8, this.aDm = 32, this.aDn = 8, this.aDo = 32, this.aDp = [0, 0], this.a2z = [0, 0, 0, 0], this.ho = null, this.aDq = !0, this.aDr = !1, this.a8s = function() {
		-1 !== this.a3u && clearTimeout(this.a3u), this.a3u = -1, this.ho = null, ae.aDg()
	}, this.dH = function() {
		7 === aN.wU() || this.aDr || (this.aDq = !0, this.dr = 0, this.aDk = 1, this.aDp = [bI.ji.sh[bI.fz].sg[0], bI.ji.sh[bI.fz].si[0]], this.a2z = [bI.ji.sh[bI.fz].aDj[3], bI.ji.sh[bI.fz].aDj[4], bI.ji.sh[bI.fz].aDj[5], bI.ji.sh[bI.fz].aDj[
			6]], this.aDl = bI.ji.sh[bI.fz].aDj[7], this.aDm = bI.ji.sh[bI.fz].aDj[8], this.aDn = bI.ji.sh[bI.fz].aDj[9], this.aDo = bI.ji.sh[bI.fz].aDj[10], this.aDq ? this.a3u = setTimeout(aDs, 16) : this.iC())
	}, this.iC = function() {
		if (8 === aN.wU() && a5.lb()) this.a3u = setTimeout(aDs, 16);
		else {
			if (0 === this.dr) {
				var aDb = ao.aDt();
				if (ao.ze(bI.ji.sh[bI.fz].aDj[2]), ae.v([bI.eT, bI.eU, bI.ji.sh[bI.fz].aDj[0], bI.ji.sh[bI.fz].aDj[1]]), ao.ze(aDb), this.ho = ae.aDu(), this.dr++, this.aDq) return void(this.a3u = setTimeout(aDs, 16))
			}
			for (var fo, e4, aDb = this.aDq ? 10 : 1e6, aDb = bI.eU - this.aDk - 1 < aDb ? bI.eU - this.aDk - 1 : aDb, t5 = this.aDk + aDb, eR = this.aDk; eR < t5; eR++)
				for (var eP = 1; eP < bI.eT - 1; eP++) gk(fo = 4 * (e4 = eP + eR * bI.eT)) ? this.aDv(fo, e4, 1) : (this.aDv(fo, e4, 0), function(eP, eR, fo) {
					return 1 < eP && gk(fo - 4) || eP < bI.eT - 2 && gk(fo + 4) || 1 < eR && gk(fo - 4 * bI.eT) || eR < bI.eU - 2 && gk(fo + 4 * bI.eT)
				}(eP, eR, fo) && this.aDw(eP, eR));
			this.aDk = t5, this.aDk >= bI.eU - 1 ? (bI.sJ.putImageData(bI.sK, 0, 0, 1, 1, bI.eT - 2, bI.eU - 2), bU.dO = !0, this.a8s()) : this.aDq && (this.a3u = setTimeout(aDs, 16))
		}
	}, this.aDv = function(fo, e4, o0) {
		aDy(fo, Math.floor(this.aDp[o0] + this.a2z[o0] * this.ho[e4] / 1e4) - bI.sO[fo])
	}, this.aDz = function(fo, h3, aE0, o0, a2z) {
		aDy(fo, Math.floor(this.aDp[o0] + (1 - h3 / aE0) * a2z) - bI.sO[fo])
	}, this.aDw = function(kU, kV) {
		for (var fo, h3, aE0, sk = kU - this.aDm, sl = kV - this.aDm, t6 = kU + this.aDm, t5 = kV + this.aDm, sk = sk < 1 ? 1 : sk, t6 = t6 > bI.eT - 2 ? bI.eT - 2 : t6, t5 = t5 > bI.eU - 2 ? bI.eU - 2 : t5, eR = sl < 1 ? 1 : sl; eR <= t5; eR++)
			for (var eP = sk; eP <= t6; eP++) gk(fo = 4 * (eP + eR * bI.eT)) ? (aE0 = this.aDl + (this.aDm - this.aDl) * this.ho[eP + bI.eT * eR] / 1e4, Math.abs(kU - eP) > aE0 || Math.abs(kV - eR) > aE0 || aE0 <= (h3 = Math.sqrt((kU - eP) * (
				kU - eP) + (kV - eR) * (kV - eR))) || this.aDz(fo, h3, aE0, 1, this.a2z[3])) : (aE0 = this.aDn + (this.aDo - this.aDn) * this.ho[eP + bI.eT * eR] / 1e4, Math.abs(kU - eP) > aE0 || Math.abs(kV - eR) > aE0 || aE0 <= (h3 = Math
				.sqrt((kU - eP) * (kU - eP) + (kV - eR) * (kV - eR))) || this.aDz(fo, h3, aE0, 0, this.a2z[2]))
	}
}

function aDe() {
	2 === bI.fz ? aE1([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bI.fz ? aE1([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bI.fz ? aE1([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bI.fz ? aE1([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bI.fz && aE1([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aE1(aE2, aE3, aE4, aE5, aE6) {
	for (var eP, eR, aE8, aE9, xo, aEA, hQ = aE2.length - 1, aE7 = bI.eT + bI.eU, eI = (aE7 *= aE7, aE4.length), z = eI - 1; 0 <= z; z--) aE4[z] *= aE4[z];
	var aEB = new Array(eI),
		aEC = new Array(eI),
		aED = new Array(eI),
		el = ae.aDu();
	if (void 0 === aE6)
		for (aE6 = new Array(eI), z = eI - 1; 0 <= z; z--) aE6[z] = 0;
	for (z = 1; z < eI; z++) aEB[z] = aE4[z] - aE4[z - 1], aEC[z] = aE5[z] - aE5[z - 1], aED[z] = aE6[z] - aE6[z - 1];
	for (eP = bI.eT - 1; 0 <= eP; eP--)
		for (eR = bI.eU - 1; 0 <= eR; eR--) {
			for (aE8 = aE7, z = hQ; 0 <= z; z--) aE8 = (aE9 = (eP - aE2[z]) * (eP - aE2[z]) + (eR - aE3[z]) * (eR - aE3[z])) < aE8 ? aE9 : aE8;
			for (xo = aE5[eI - 1], aEA = aE6[eI - 1], z = 1; z < eI; z++)
				if (aE8 < aE4[z]) {
					xo = aE5[z - 1] + aA4((aE8 - aE4[z - 1]) * aEC[z], aEB[z]), aEA = aE6[z - 1] + aA4((aE8 - aE4[z - 1]) * aED[z], aEB[z]);
					break
				} aEE(bI.eT * eR + eP, xo, aEA, el)
		}
}

function aEE(o0, xo, aEA, el) {
	xo < 500 ? el[o0] = bB.ek(el[o0] * xo * 2, 1e3) : 500 < xo && (el[o0] += bB.ek(2 * (1e4 - el[o0]) * (xo - 500), 1e3)), el[o0] += bB.ek(aEA * (10 * xo - el[o0]), 1e3)
}

function cO() {
	var aEF;

	function aEP(y6, gz, eP, eR, globalAlpha) {
		bI.sJ.save(), bI.sJ.globalAlpha = globalAlpha, bI.sJ.imageSmoothingEnabled = !1, bI.sJ.scale(gz, gz), bI.sJ.drawImage(y6, Math.floor(eP * (bI.eT / gz - y6.width)), Math.floor(eR * (bI.eU / gz - y6.height))), bI.sJ.restore()
	}
	this.a1f = 0, this.a1g = 0, this.a1h = 0, this.a1i = 0, this.dH = function() {
		(aEF = new Array(bI.aBG))[0] = {
			t: [0, 5e3, 8e3, 1e4],
			h3: [220, 250, 255, 220],
			qL: [190, 220, 0, 0],
			ec: [170, 200, 0, 0]
		}, aEF[1] = {
			t: [0, 4e3, 5e3, 6e3, 1e4],
			h3: [25, 0, 100, 0, 25],
			qL: [25, 0, 0, 0, 25],
			ec: [25, 0, 0, 0, 25]
		}, aEF[2] = {
			t: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			h3: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			qL: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			ec: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aEF[3] = {
			t: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			h3: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			qL: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			ec: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aEF[4] = {
			t: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			h3: [10, 10, 20, 10, 10, 170, 212],
			qL: [20, 20, 60, 100, 100, 110, 170],
			ec: [70, 70, 160, 30, 30, 60, 120]
		}, aEF[5] = {
			t: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			h3: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			qL: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			ec: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aEF[6] = {
			t: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			h3: [10, 10, 60, 255, 255, 200, 200],
			qL: [10, 10, 60, 255, 255, 200, 200],
			ec: [80, 80, 255, 255, 255, 200, 200]
		}, aEF[7] = {
			t: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			h3: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			qL: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			ec: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aEF[8] = {
			t: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			h3: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			qL: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			ec: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aEF[9] = {
			t: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			h3: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			qL: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			ec: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aEF[20] = {
			t: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			h3: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			qL: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			ec: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aEF[21] = {
			t: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			h3: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			qL: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			ec: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aDf = function() {
		var aEO, z, eb, ez, gx = function() {
				var gx;
				return bI.sN = document.createElement("canvas"), bI.sN.width = bI.eT, bI.sN.height = bI.eU, bI.sJ = bI.sN.getContext("2d", {
					alpha: !1
				}), gx = bI.sJ.getImageData(0, 0, bI.eT, bI.eU), bI.sO = gx.data, gx
			}(),
			t = aEF[bI.fz].t,
			h3 = aEF[bI.fz].h3,
			qL = aEF[bI.fz].qL,
			ec = aEF[bI.fz].ec,
			el = ae.aDu(),
			eI = t.length - 2,
			aEJ = new Array(1 + eI),
			aEK = new Array(1 + eI),
			aEL = new Array(1 + eI),
			aEM = new Array(1 + eI);
		for (eb = eI; 0 <= eb; eb--) aEJ[eb] = t[eb + 1] - t[eb], aEK[eb] = h3[eb + 1] - h3[eb], aEL[eb] = qL[eb + 1] - qL[eb], aEM[eb] = ec[eb + 1] - ec[eb];
		for (z = bI.eT * bI.eU - 1; 0 <= z; z--)
			for (eb = eI; 0 <= eb; eb--)
				if (el[z] >= t[eb]) {
					ez = el[z] - t[eb], bI.sO[4 * z] = h3[eb] + aA4(aEK[eb] * ez, aEJ[eb]), bI.sO[4 * z + 1] = qL[eb] + aA4(aEL[eb] * ez, aEJ[eb]), bI.sO[4 * z + 2] = ec[eb] + aA4(aEM[eb] * ez, aEJ[eb]), bI.sO[4 * z + 3] = 255;
					break
				} bI.sJ.putImageData(gx, 0, 0), bI.aDi(bI.fz) && aP.qP() && bI.aDi(bI.fz) && (gx = aP.a7t("arena"), aEO = aP.a7t("territorial.io"), aEP(gx, 5, .5, .5, .1), aEP(aEO, 2, .5, .45, .1)), bI.sL = !0, bU.dO = !0
	}, this.zg = function() {
		for (var fo, eP, eR, aEQ, aER, f1, a1g = 0, t = bI.eT, ir = bI.eU, ez = t * ir * 4, aES = a6H, aET = bI.sO, z = t - 1; 0 <= z; z--) aES[(fo = z << 2) + 2] = aES[ez - fo - 2] = 3;
		for (ez = 4 * t, z = ir - 1; 0 <= z; z--) aES[(fo = z * ez) + 2] = aES[fo + ez - 2] = 3;
		for (aEQ = t - 1, aER = ir - 1, eR = 1; eR < aER; eR++)
			for (ez = eR * t, eP = 1; eP < aEQ; eP++) f1 = 1 - (aET[(fo = ez + eP << 2) + 2] > aET[fo + 1] && aET[fo + 2] > aET[fo]), aES[fo + 2] = 2 - f1, a1g += f1;
		this.a1f = (t - 2) * (ir - 2), this.a1i = 0, bI.fy(bI.fz) && (bI.a1i.aEU(), bI.a1i.aEV()), this.a1g = a1.j7 = a1g - this.a1i, this.a1h = this.a1f - this.a1g - this.a1i
	}
}

function aDd() {
	var od;
	10 === bI.fz ? od =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bI.fz ? od =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bI.fz ? od =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bI.fz ? od =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bI.fz ? od =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bI.fz ? od =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bI.fz ? od =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bI.fz ? od =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bI.fz ? od =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bI.fz && (od =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new s8).sA(od)
}

function aDY() {
	this.sh = null, this.dH = function() {
		var aEW = [120, 105, 92],
			cos = [12, 12, 60],
			aEX = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aEY = [140, 130, 120],
			aEZ = [12, 12, 76],
			aEa = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aEb = [130, 117, 106],
			aEc = [12, 12, 68],
			aEd = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.sh = new Array(bI.aBG + 1), __fx.customLobby.setMapInfo(this.sh), this.sh[0] = {
			name: L(114),
			t: 230,
			ir: 230,
			lN: 1e3,
			lK: 2e3,
			aDb: 173
		}, this.sh[1] = {
			name: L(115),
			t: 800,
			ir: 800,
			lN: 100,
			lK: 50,
			aDb: 43
		}, this.sh[2] = {
			name: L(116),
			t: 512,
			ir: 512,
			lN: 128,
			lK: 32,
			aDb: 0
		}, this.sh[3] = {
			name: L(117) + " 1",
			t: 960,
			ir: 960,
			lN: 60,
			lK: 8,
			aDb: 0
		}, this.sh[4] = {
			name: L(118),
			t: 900,
			ir: 900,
			lN: 100,
			lK: 5,
			aDb: 0
		}, this.sh[5] = {
			name: L(119),
			t: 1e3,
			ir: 1e3,
			lN: 100,
			lK: 40,
			aDb: 0
		}, this.sh[6] = {
			name: L(120),
			t: 1e3,
			ir: 1e3,
			lN: 100,
			lK: 20,
			aDb: 0
		}, this.sh[7] = {
			name: L(121),
			t: 1024,
			ir: 1024,
			lN: 128,
			lK: 32,
			aDb: 0
		}, this.sh[8] = {
			name: L(122),
			t: 820,
			ir: 820,
			lN: 200,
			lK: 100,
			aDb: 0
		}, this.sh[9] = {
			name: L(123),
			t: 1024,
			ir: 1024,
			lN: 128,
			lK: 32,
			aDb: 0
		}, this.sh[10] = {
			name: L(124),
			sg: aEY,
			si: aEZ,
			aDj: aEa
		}, this.sh[11] = {
			name: L(125),
			sg: aEb,
			si: aEc,
			aDj: aEd
		}, this.sh[12] = {
			name: L(126),
			sg: aEb,
			si: aEc,
			aDj: aEd
		}, this.sh[13] = {
			name: L(127),
			sg: aEW,
			si: cos,
			aDj: aEX
		}, this.sh[14] = {
			name: L(128),
			sg: aEW,
			si: cos,
			aDj: aEX
		}, this.sh[15] = {
			name: L(129),
			sg: aEY,
			si: aEZ,
			aDj: aEa
		}, this.sh[16] = {
			name: L(130),
			sg: aEY,
			si: aEZ,
			aDj: aEa
		}, this.sh[17] = {
			name: L(131),
			sg: aEW,
			si: cos,
			aDj: aEX
		}, this.sh[18] = {
			name: L(132),
			sg: aEb,
			si: aEc,
			aDj: aEd
		}, this.sh[19] = {
			name: L(133),
			sg: aEW,
			si: cos,
			aDj: aEX
		}, this.sh[20] = {
			name: L(134),
			t: 1024,
			ir: 1024,
			lN: 128,
			lK: 32,
			aDb: 0
		}, this.sh[21] = {
			name: L(117) + " 2",
			t: 940,
			ir: 940,
			lN: 80,
			lK: 8,
			aDb: 0
		}, this.sh[bI.aBG] = {}
	}
}

function aDZ() {
	this.aEU = function() {
		for (var fo, eP, ez, aES = a6H, aET = bI.sO, t = bI.eT, aEQ = t - 1, aER = bI.eU - 1, fj = 0, eR = 1; eR < aER; eR++)
			for (ez = eR * t, eP = 1; eP < aEQ; eP++) aET[fo = ez + eP << 2] === aET[1 + fo] && aET[fo] === aET[2 + fo] && (fj++, aES[2 + fo] = 4);
		ad.a1i = fj
	}, this.aEV = function() {
		for (var aES = a6H, t = bI.eT, aEQ = t - 1, aER = bI.eU - 1, id = 5, eR = 1; eR < aER; eR++)
			for (var ez = eR * t, eP = 1; eP < aEQ; eP++) {
				var dy = 2 + (ez + eP << 2);
				4 === aES[dy] && (! function(dy, id) {
					var eI = 1,
						aES = a6H,
						eK = aQ.eK,
						y0 = [dy];
					aES[dy] = id;
					for (; eI;) {
						for (var y1 = [], z = 0; z < eI; z++)
							for (var e7 = y0[z], eL = 3; 0 <= eL; eL--) {
								var eM = e7 + eK[eL];
								4 === aES[eM] && (aES[eM] = id, y1.push(eM))
							}
						eI = (y0 = y1).length
					}
				}(dy, id), id = Math.max((id + 1) % 256, 5))
			}
	}
}

function zf() {
	(tS = void 0 === tS ? document.createElement("canvas") : tS).width = bI.eT, tS.height = bI.eU, zj = tS.getContext("2d", {
		alpha: !0
	}), zk = zj.getImageData(0, 0, bI.eT, bI.eU), a6H = zk.data, b2.p6.sP(a6H)
}

function cP() {
	var el, t, ir, max, aEf, lK, aEh, aEi, aEj, aEk, aEl, aEm, aEn, aEo, aEg = 1e4;

	function aEv(aEu, lN, eI) {
		var z;
		for (aEh[0] = aEu, z = 1; z < eI; z++) aEh[z] = aEh[z - 1] + lN, lN = aEh[z] >= aEg ? (aEh[z] = aEg - 1, -lN) : aEh[z] < 0 ? (aEh[z] = 0, -lN) : (lN += 16384 <= ao.random() ? lK : -lK) < -aEf ? -aEf : aEf < lN ? aEf : lN
	}

	function aEx(eP, eR, aEy, eI) {
		(aEy ? function(eP, eR, eI) {
			var z;
			for (z = 0; z < eI; z++) el[eR * t + eP + z] = aEh[z]
		} : function(eP, eR, eI) {
			var z;
			for (z = 0; z < eI; z++) el[eR * t + eP + z * t] = aEh[z]
		})(eP, eR, eI)
	}

	function aF1(value, eI) {
		var z, ki, dy, hF = value - aEh[eI - 1];
		if (0 != hF) {
			for (ki = 1 + bB.ek(Math.abs(hF), eI - 1), ki = hF < 0 ? -ki : ki, aEh[eI - 1] = value, dy = (dy = eI - 1 - bB.ek(Math.abs(hF), Math.abs(ki))) < 1 ? 1 : eI - 2 < dy ? eI - 2 : dy, z = eI - 2; dy <= z; z--) aEh[z] += hF - (eI - 1 - z) *
			ki;
			(hF < 0 ? function(eI) {
				var z;
				for (z = eI - 2; 1 <= z; z--) aEh[z] < 0 && (aEh[z] = -aEh[z] - 1)
			} : function(eI) {
				var z;
				for (z = eI - 2; 1 <= z; z--) aEh[z] >= aEg && (aEh[z] = 2 * aEg - aEh[z] - 1)
			})(eI)
		}
	}

	function aF4(y0, y1, eI) {
		for (var z = 0; z < eI; z++) y0[z] = y1[z]
	}

	function aF5(ey) {
		for (var z = 0; z < ey.length - 1; z++) ey[z] = ey[z + 1] - ey[z];
		ey[ey.length - 1] = ey[ey.length - 3]
	}

	function aF6(a02, gap, hE) {
		aEi.push(a02), aEj.push(gap), aEk.push(hE)
	}
	this.v = function(yy) {
		! function(yy) {
			var z;
			for (t = yy[0], ir = yy[1], aEf = yy[2], lK = yy[3], el = new Int16Array(t * ir), max = ir < t ? t : ir, aEh = new Int16Array(max), aEi = [], aEj = [], aEk = [], aEl = new Array(t), aEm = new Array(ir), z = t - 1; 0 <= z; z--) aEl[
				z] = !1;
			for (z = ir - 1; 0 <= z; z--) aEm[z] = !1;
			aEn = new Int16Array(t), aEo = new Int16Array(ir)
		}(yy),
		function(eI) {
			var aEu = ao.random() % aEg,
				lN = ao.random() % (2 * aEf + 1) - aEf;
			aEv(aEu, lN, eI)
		}(max), aF4(aEo, aEh, ir), aEx(0, 0, !0, t);
		var eP, eR, yy = el[0],
			eI = max,
			lN = ao.random() % (2 * aEf + 1) - aEf;
		for (aEv(yy, lN, eI), aF4(aEn, aEh, t), aEx(0, 0, !1, ir), aF5(aEn), aF5(aEo), aEv(el[t - 1], aEn[t - 1], ir), aEx(t - 1, 0, !1, ir), aEv(el[t * (ir - 1)], aEo[ir - 1], t), aF1(el[t * ir - 1], t), aEx(0, ir - 1, !0, t), aEl[t - 1] = aEl[
				0] = !0, aEm[ir - 1] = aEm[0] = !0, aF6(0, t, !0), aF6(0, ir, !1), ! function() {
				var aF8, a02;
				for (;;) {
					if (aF8 = function() {
							var z, aF8 = aEi.length - 1;
							for (z = aF8 - 1; 0 <= z; z--) aEj[z] > aEj[aF8] && (aF8 = z);
							return aF8
						}(), aEj[aF8] < 5) return;
					a02 = aEi[aF8] + bB.ek(aEj[aF8], 2), (aEk[aF8] ? function(eP) {
						var eI, aFB, z, a75 = 0,
							aFC = 0;
						for (; aFC < ir - 1;) {
							for (z = a75 + 1; z < ir; z++)
								if (aEm[z]) {
									aFC = z;
									break
								} eI = aFC - a75 + 1, aEv(el[eP + t * a75], 0 === a75 ? aEn[eP] : aEh[aFB - 1] - aEh[aFB - 2], eI), aF1(el[aFC * t + eP], eI), aEx(eP, a75, !1, eI), aFB = eI, a75 = aFC
						}
						aEl[eP] = !0
					} : function(eR) {
						var eI, aFB, z, a75 = 0,
							aFC = 0;
						for (; aFC < t - 1;) {
							for (z = a75 + 1; z < t; z++)
								if (aEl[z]) {
									aFC = z;
									break
								} eI = aFC - a75 + 1, aEv(el[eR * t + a75], 0 === a75 ? aEo[eR] : aEh[aFB - 1] - aEh[aFB - 2], eI), aF1(el[eR * t + aFC], eI), aEx(a75, eR, !0, eI), aFB = eI, a75 = aFC
						}
						aEm[eR] = !0
					})(a02), aF6(a02, aEi[aF8] + aEj[aF8] - a02, aEk[aF8]), aEj[aF8] = a02 - aEi[aF8] + 1
				}
			}(), eP = 0; eP < t; eP++)
			if (!aEl[eP])
				for (eR = 0; eR < ir; eR++) aEm[eR] || ! function(eP, eR) {
					var value = el[eR * t + eP - 1] + el[(eR - 1) * t + eP],
						a1s = 2;
					aEl[eP + 1] && (a1s++, value += el[eR * t + eP + 1]);
					aEm[eR + 1] && (a1s++, value += el[(eR + 1) * t + eP]);
					el[eR * t + eP] = bB.ek(value, a1s)
				}(eP, eR)
	}, this.aDu = function() {
		return el
	}, this.aDg = function() {
		el = null
	}
}

function aA4(eb, ec) {
	return 0 <= eb ? bB.ek(eb, ec) : -bB.ek(-eb, ec)
}

function iv(el) {
	return el * el
}

function a17(eb, ec) {
	return ec < eb ? eb : ec
}

function a4U(eb, ec) {
	return eb < ec ? eb : ec
}

function a3I(eb, el, ec) {
	return el < eb ? eb : ec < el ? ec : el
}

function aFE(el, eI) {
	for (var ed = bB.ek(el + 1, 2), z = 0; z < eI; z++) ed = bB.ek(ed + bB.ek(el, ed), 2);
	return ed
}

function aBo(el, eI) {
	return el < 1 ? 0 : aFE(el, eI)
}

function aFF(lk, ll, q7, a32, ly, lz, q8, a9K) {
	return !(lk + q7 <= ly || ll + a32 <= lz || ly + q8 <= lk || lz + a9K <= ll)
}

function aFG(lk, ll, q7, a32, ly, lz, q8, a9K) {
	return lk <= ly && ll <= lz && ly + q8 <= lk + q7 && lz + a9K <= ll + a32
}

function sG(el) {
	return Math.floor(!!el * (1 + Math.log2(el + .5)))
}

function bf() {
	this.ek = function(eb, ec) {
		return Math.floor((eb + .5) / ec)
	}, this.aFH = function(eb, ec) {
		return Math.floor(eb * (ec + .5))
	}, this.sqrt = function(el) {
		return ~~Math.sqrt(el + .5)
	}, this.pow = function(d) {
		return Math.floor(Math.pow(2, d) + .5)
	}, this.oV = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aFI = function(ez, f1, f3) {
		return Math.max(Math.min(ez, f1), f3)
	}, this.aFJ = function(aFK, aFL, eP, eR) {
		eP -= aFK, aFK = eR - aFL, eR = 0;
		return 0 == eP ? eR = 0 <= aFK ? Math.PI : 0 : (eR = Math.atan(aFK / eP), eR += 0 < eP ? .5 * Math.PI : 1.5 * Math.PI), eR
	}, this.log2 = function(el) {
		return Math.floor(!!el * (1 + Math.log2(el + .5)))
	}, this.log10 = function(el) {
		return Math.floor(Math.log10(el + .5))
	}, this.aFN = function(aFO, aFP, aFQ, aFR, aFS) {
		return aFQ - aFS < aFO && aFO < aFQ + aFS && aFR - aFS < aFP && aFP < aFR + aFS
	}
}

function cx() {
	this.kt = new aFT, this.pz = 0;
	var aFU = new Array(19);

	function aFY() {
		for (var eI = aFU.length, z = 0; z < eI; z++) aFU[z] = null
	}
	this.dH = function() {
		for (var aFV, aFW = document.body.firstChild; aFW;) aFV = aFW.nextSibling, !document.body.contains(aFW) || "DIV" !== aFW.tagName && "INPUT" !== aFW.tagName && "BUTTON" !== aFW.tagName || document.body.removeChild(aFW), aFW = aFV
	}, this.j = function(o0, aFX, yy) {
		void 0 === aFX && (aFX = this.pz), bU.dO = !0, 0 === o0 && (0 === aN.wU() ? o0 = 5 : m.n.setState(13)), this.qK(), this.pz = o0;
		var k8 = aFU[o0];
		if (!k8 || 4 === o0 || 7 === o0 || 8 === o0 || 9 === o0 || 10 === o0 || 11 === o0 || 13 === o0 || 15 === o0 || 18 === o0) {
			if (0 === o0) return void aFY();
			1 === o0 ? k8 = new aFZ : 2 === o0 ? k8 = new aFa : 3 === o0 ? k8 = new aFb : 4 === o0 || 9 === o0 || 10 === o0 || 11 === o0 || 13 === o0 ? k8 = yy : 5 === o0 ? k8 = new aFc : 6 === o0 ? k8 = new aFd : 7 === o0 ? k8 = new aFe(i.kt
					.aFf) : 8 === o0 ? k8 = yy : 12 === o0 ? k8 = new aFg : 14 === o0 ? k8 = new aFh : 15 === o0 ? k8 = new aFe(i.kt.aFi) : 16 === o0 ? k8 = new aFj : 17 === o0 ? k8 = new aFk : 18 === o0 && (k8 = new aFl), k8.aFX = aFX, aFU[o0] =
				k8
		}
		k8.show(yy)
	}, this.wb = function() {
		this.to() && this.aFm(this.a9d().aFX)
	}, this.aFm = function(o0) {
		this.to() && (aFU[o0] ? (this.qK(), bU.dO = !0, this.pz = o0, aFU[o0].show()) : this.j(o0))
	}, this.qK = function() {
		this.to() && aFU[this.pz].qK()
	}, this.rX = function() {
		this.to() && (aFU[this.pz].qK(), aFY(), this.pz = 0, m.n.setState(13))
	}, this.qn = function() {
		var k8;
		this.to() && (k8 = aFU[this.pz]).qn && k8.qn()
	}, this.resize = function() {
		if (!this.to()) return !1;
		aFU[this.pz].resize()
	}, this.gV = function(eP, eR) {
		var k8;
		this.to() && (k8 = aFU[this.pz]).gV && k8.gV(eP, eR)
	}, this.wq = function(eP, eR) {
		var k8;
		this.to() && (k8 = aFU[this.pz]).wq && k8.wq(eP, eR)
	}, this.xE = function() {
		var k8;
		this.to() && (k8 = aFU[this.pz]).xE && k8.xE()
	}, this.wt = function(kU, kV, deltaY) {
		var k8;
		this.to() && (k8 = aFU[this.pz]).wt && k8.wt(kU, kV, deltaY)
	}, this.xQ = function(code) {
		var k8;
		return !!this.to() && ((k8 = aFU[this.pz]).xQ && k8.xQ(code), !0)
	}, this.iC = function() {
		var k8;
		this.to() && (k8 = aFU[this.pz]) && k8.iC && k8.iC()
	}, this.to = function() {
		return 0 < this.pz
	}, this.a9d = function() {
		return aFU[this.pz]
	}, this.aFn = function(o0) {
		return aFU[o0]
	}
}

function aFe(data) {
	var aFo, aFp;
	this.show = function() {
		data.aFq && b8.aGV("account", data.px), aFo.show(), this.resize()
	}, this.qK = function() {
		aFo.qK()
	}, this.resize = function() {
		aFo.resize(), aFp.resize()
	}, this.xQ = function(ed) {
		2 === ed && aFo.qb[0].pD()
	}, aFo = new qU(data.username, [new l(L(13), function() {
		b8.clear(), i.wb()
	}), new l(data.aFq ? "🔄 " + L(135) : L(136), function() {
		i.j(8, i.a9d().aFX, new q0(25, {
			q1: 0,
			px: data.px,
			py: data.py
		}))
	}, 0, 0, 1)]), aFp = new oq(aFo.qa, function() {
		var os = [];
		os.push(function() {
				var aG5 = new oZ,
					aG6 = (aG5.oc(L(182)), new pg({
						title: data.username,
						value: data.username,
						o0: -1
					}));
				aG6.d.readOnly = !0, aG5.oo(aG6), aG5.oo(new pd([new l(L(148), function(d) {
					return b2.ow.yY(aG6.d), b2.ow.yZ(d), !0
				}).button])), data.aFq || aG5.oe(L(183));
				return aG5
			}()),
			function(os) {
				var aG5, og, a6U, aGN, aGC;
				data.aFq || ((aG5 = new oZ).oc(L(184)), (og = aG5.oe(data.aGM.length + " / 160")).style.textAlign = "center", a6U = !0, (aGN = new qp("bio", 0, 1, function(d) {
					d = d.target.value.length;
					og.textContent = d + " / 160", 160 < d ? a6U && (a6U = !1, aGC.pF(1), aGC.button.style.color = p.mL) : a6U || (a6U = !0, aGC.pF(0), aGC.button.style.color = p.n6)
				})).d.rows = 6, aGN.d.style.fontSize = "1em", aGN.qt(data.aGM), aG5.oo(aGN), aGC = new l(L(185), function() {
					if (!a6U) return !0;
					i.j(8, i.a9d().aFX, new q0(29, {
						q1: 1,
						od: aGN.qv().substring(0, 160)
					}))
				}, 0, 0, 1), aG5.oo(new pd([aGC.button])), 0 !== data.aGO && (aG5.oo(new pd([new l(L(1 === data.aGO ? 187 : 188), function() {
					i.j(8, i.a9d().aFX, new q0(29, {
						q1: 0,
						od: ""
					}))
				}, 0, 0, 1).button])), aG5.oe(1 === data.aGO ? L(189, [data.aGQ - 1]) : L(190, [data.aGQ - 1]))), aG5.oe(L(186, [data.aGP])), os.push(aG5))
			}(os),
			function(os) {
				var aG5;
				data.aFq && 0 !== data.aGO && ((aG5 = new oZ).oc(L(184)), aG5.oh(data.aGM), aG5.oo(new pd([new l(L(171), function(d) {
					return aq.kt.a7S(0) && (b2.ow.yZ(d), aq.aGA.aGI({
						q1: 5,
						px: data.px,
						py: data.py
					})), !0
				}, 0, 0, 1).button])), os.push(aG5))
			}(os), os.push(function() {
				var aG5 = new oZ;
				aG5.oc(L(137)), aG5.oj(L(138) + b2.w0.zD(data.rh, .01, 2)), data.aFq || (aG5.oe(L(139)), aG5.oe(L(140)), aG5.oe(L(141)));
				return aG5
			}()), data.aFq && os.push(function() {
				var aG5 = new oZ,
					aG6 = (aG5.oc(L(142)), new pg(bY.dZ.data[147], 1, void 0, function(d) {
						aG7(d.target.value)
					})),
					aG8 = (aG5.oo(aG6), new l(L(143), function(d) {
						return aG6.d.readOnly && aq.kt.a7S(0) && (b2.ow.yZ(d), aG9(), aq.aGA.aGB({
							q1: 0,
							px: data.px,
							py: data.py,
							value: bB.oV(Math.floor(100 * bY.dZ.data[147].value), 0, 4294967295)
						})), !0
					}, 1)),
					aGC = new l(L(144), function(d) {
						return d.textContent === L(144) ? (d.textContent = L(145), aG6.d.readOnly = !0, aG8.pF(0), aG8.button.style.color = p.n6, bY.pY.pZ(147, aG6.d.value), aG7(bY.dZ.data[147].value)) : aG9(), !0
					}),
					og = (aG5.oo(new pd([aGC.button])), aG5.oe()),
					aG7 = function(el) {
						el = isNaN(el) ? 0 : Number(el);
						var el = Math.max(el, (data.aGD + 1) / 100),
							aGE = Math.floor(100 * Math.max(1e-4 * el, data.aGD / 100)) / 100;
						og.textContent = L(146, [el.toFixed(2), bY.dZ.data[105].value, aGE.toFixed(2), data.px, (el - aGE).toFixed(2)])
					},
					aG9 = function() {
						aGC.button.textContent = L(144), aG6.d.readOnly = !1, aG8.pF(1), aG8.button.style.color = p.mL
					};
				return aG7(bY.dZ.data[147].value), aG5.oo(new pd([aG8.button])), aG5
			}());
		os.push(function() {
			var aG5 = new oZ,
				aG6 = (aG5.oc(L(147)), new pg({
					title: data.px,
					value: data.px,
					o0: -1
				}));
			return aG6.d.readOnly = !0, aG5.oo(aG6), aG5.oo(new pd([new l(L(148), function(d) {
				return b2.ow.yY(aG6.d), b2.ow.yZ(d), !0
			}).button])), aG5
		}()), data.aFq || (os.push(function() {
			var aG5 = new oZ,
				aGF = (aG5.oc(L(149)), new pg(bY.dZ.data[106]));
			return aGF.d.readOnly = !0, aGF.d.type = "password", aG5.oo(aGF), aG5.oo(new pd([new l(L(150), function(d) {
				return d.textContent === L(150) ? (d.textContent = L(151), aGF.d.type = "text") : (d.textContent = L(150), aGF.d.type = "password"), !0
			}).button, new l(L(148), function(d) {
				return b2.ow.yY(aGF.d), b2.ow.yZ(d), !0
			}).button])), aG5.oo(new pd([new l(L(152), function() {
				i.j(8, i.a9d().aFX, new q0(15))
			}).button])), aG5.oc(L(153), "0.8em"), aG5.oe(L(154)), aG5.oe(L(155)), aG5.oe(L(156)), aG5
		}()), os.push(function() {
			var aG5 = new oZ;
			return aG5.oc(L(157)), aG5.oo(new pd([new l(L(158), function() {
				i.j(6, i.a9d().aFX)
			}).button])), aG5.oo(new pd([new l(L(159), function() {
				bY.pY.pZ(105, ""), i.j(8, i.a9d().aFX, new q0(18))
			}).button])), aG5.oo(new pd([new l(L(160) + bY.dZ.data[105].value, function() {
				i.j(4, 0, new k(L(161), L(162), !0, [new l(L(13), function() {
					i.j(7, i.aFn(7).aFX)
				})]))
			}, p.mu).button])), aG5
		}()), os.push(function() {
			function aGH(o0) {
				for (var z = 0; z < 2; z++) aGG[z].pF(0 === o0 ? p.mW : 0 === z ? p.mu : p.q)
			}
			var om, aGG, aG5 = new oZ;
			aG5.oc(L(163)), aG5.oe(L(164)), bY.kt.rQ();
			return aGG = [new l(L(165), function() {
				var o0 = Math.min(bY.dZ.data[117].value, om.on.length - 1);
				if (!(o0 < 1)) {
					om.on[o0].remove(), om.on.splice(o0, 1);
					for (var z = o0; z < om.on.length; z++) om.on[z].name = "" + z;
					bY.kt.rT(o0), o0 = bY.dZ.data[117].value, om.on[o0].textContent = om.on[o0].textContent.replace("⚪", "🟢"), aGH(o0)
				}
			}, p.mW), new l(L(166), function() {
				var o0 = Math.min(bY.dZ.data[117].value, om.on.length - 1);
				o0 < 1 || (o0 = bY.kt.rU(o0), bY.pY.pZ(105, o0.px), bY.pY.pZ(106, o0.password), i.j(8, i.a9d().aFX, new q0(18)))
			}, p.mW)], (om = new qQ(bY.dZ.data[117], aGH)).on[0].style.marginTop = "0.5em", aG5.ol(om), aG5.oo(new pd([aGG[1].button])), aG5.oo(new pd([aGG[0].button])), aG5
		}()));
		return os.push(function() {
				var aG5 = new oZ;
				aG5.oc(L(167)), aG5.oj(L(168) + b2.w0.zD(data.rd, .1, 1) + "<br>" + L(169) + (data.re + 1) + " / " + data.rg + "<br>" + L(170) + data.rf), data.aFq && (aG5.oo(new pd([new l(L(171), function(d) {
					return aq.kt.a7S(0) && (b2.ow.yZ(d), aq.aGA.aGI({
						q1: 1,
						px: data.px,
						py: data.py
					})), !0
				}, 0, 0, 1).button])), aG5.oe(L(172)));
				return aG5
			}()),
			function(os) {
				var aG5 = new oZ,
					w4 = data.rk,
					aGR = (aG5.oc(L(191)), aG5.oj(L(192) + (w4 ? "[" + data.ri + "]" : "-")), aG5.oj(L(193) + b2.w0.zD(w4, .001, 2)), aG5.oj(L(169) + (data.rm + 1) + " / " + data.rg), data.rn),
					aGS = (aG5.oj(L(194) + b2.w0.zD(aGR, .01, 2)), data.rp);
				aG5.oj(L(195) + aGS), aG5.oj(L(196) + b2.w0.zD(aGR / Math.max(aGS, 1), .01, 2)), w4 = data.rl, aG5.oc(L(197), "0.8em"), aG5.oj("Clan: " + (w4 ? "[" + data.rj + "]" : "-")), aG5.oj(L(193) + b2.w0.zD(w4, .001, 2)), aGR = data
					.ro, aG5.oj(L(194) + b2.w0.zD(aGR, .01, 2)), aGS = data.rq, aG5.oj(L(195) + aGS), aG5.oj(L(196) + b2.w0.zD(aGR / Math.max(aGS, 1), .01, 2)), os.push(aG5)
			}(os),
			function(os) {
				var aG5 = new oZ;
				aG5.oc(L(198)), aG5.oj(L(179) + data.aGT + "<br>" + L(180) + (data.aGU.length ? L(199, [data.aGU]) : L(200))), data.aFq && (aG5.oo(new pd([new l(L(201), function(d) {
					return aq.kt.a7S(0) && (b2.ow.yZ(d), aq.aGA.aGI({
						q1: 4,
						px: data.px,
						py: data.py
					})), !0
				}, 0, 0, 1).button])), aG5.oe(L(202)), aG5.oe(L(203)));
				os.push(aG5)
			}(os), os.push(function() {
				var aG5 = new oZ;
				if (aG5.oc(L(178)), aG5.oj(L(179) + data.aGK + "<br>" + L(169) + (data.aGL + 1) + " / " + data.rg + "<br>" + L(180) + function(h3) {
						if (40 <= h3) return L(173);
						if (16 <= h3) return L(174);
						if (4 <= h3) return L(175);
						if (1 <= h3) return L(176);
						return L(177)
					}(data.aGL)), data.aFq) {
					aG5.oo(new pd([new l("−", function(d) {
						return aq.kt.a7S(0) && (b2.ow.yZ(d), aq.aGA.aGI({
							q1: 3,
							px: data.px,
							py: data.py
						})), !0
					}, 0, 0, 1).button, new l("+", function(d) {
						return aq.kt.a7S(0) && (b2.ow.yZ(d), aq.aGA.aGI({
							q1: 2,
							px: data.px,
							py: data.py
						})), !0
					}, 0, 0, 1).button]));
					for (var z = 0; z < 2; z++) aG5.oa[0].pf[z].style.fontSize = "1.6em";
					aG5.oe(L(181))
				}
				return aG5
			}()), os
	}())
}

function aGW(data) {
	var aFo, aGX, aGY, a7A, aGZ, aGa, aGb, colors, aGc, aGd, aGe = 0,
		aGf = 0,
		aGg = !1,
		aGh = !1,
		aGi = [1, 5, 60, 240, 1440, 10080, 43200];

	function aH9(kU, kV) {
		! function(kU, kV) {
			return aGX < kU && kU < aGX + a7A && aGY < kV && kV < aGY + aGZ
		}(aGe = kU, aGf = kV) ? (aGg && (bU.dO = !0), aGg = !1) : (aGg = !0, bU.dO = !0)
	}
	this.show = function() {
		aGh = bY.dZ.data[127].value, aFo.show(), this.resize()
	}, this.qK = function() {
		aFo.qK()
	}, this.resize = function() {
		aFo.resize();
		var ed = an.p2,
			ql = aFo.qf(),
			aGr = ed * ql.qj,
			ed = ed * ql.qg;
		aGa = b2.ow.qM(.06), aGb = b2.ow.qM(.04), aGX = b2.ow.qM(.06), aGY = ed + aGa, a7A = an.t - aGX - aGb, aGZ = aGr + ed - aGY - aGb
	}, this.qn = function() {
		aFo.qn(),
			function() {
				var z, aGo, fj, eP, eb, ey = data.data,
					aGu = 1,
					aGv = .125,
					aGw = aGh ? 65536 : 0;
				for (z = 0; z < ey.length; z++)
					for (aGo = ey[z].aGo, fj = aGo.length, aGu = Math.max(fj, aGu), eb = 0; eb < fj; eb++) aGv = Math.max(aGo[eb], aGv), aGw = Math.min(aGo[eb], aGw);
				var ll = aGY + aGZ,
					tI = aGZ / (aGv - aGw),
					tH = 1 / (aGu - 1);
				for (qo.lineWidth = bR.uH, z = 0; z < ey.length; z++) {
					for (aGo = ey[z].aGo, fj = aGo.length, eP = aGX, qo.beginPath(), qo.moveTo(eP + a7A, ll - tI * (aGo[fj - 1] - aGw)), eb = fj - 2; 0 <= eb; eb--) qo.lineTo(eP + tH * eb * a7A, ll - tI * (aGo[eb] - aGw));
					qo.strokeStyle = colors[z], qo.stroke()
				}(function(aGw, aGv, ll, tI) {
					qo.font = b2.ow.q5(0, .25 * aGX), b2.ow.textBaseline(qo, 1), b2.ow.textAlign(qo, 2), qo.fillStyle = colors[0];
					for (var eP = .92 * aGX, z = 0; z < 3; z++) {
						var el = aGw + z * (aGv - aGw) / 2;
						qo.fillText((el / 1e3).toFixed(3), eP, ll - tI * (el - aGw))
					}
				})(aGw, aGv, ll, tI),
				function(aGu) {
					var eR = aGY + aGZ + .15 * aGb;
					qo.font = b2.ow.q5(0, Math.min(.4 * aGb, .028 * an.t)), b2.ow.textBaseline(qo, 0), b2.ow.textAlign(qo, 2), qo.fillStyle = colors[0], qo.fillText(b2.xk.yN(aGc), aGX + a7A, eR), b2.ow.textAlign(qo, 0), qo.fillText(b2.xk.yN(
						new Date(aGd.getTime() - 6e4 * (aGu - 1) * aGi[data.aGn])), aGX, eR)
				}(aGu),
				function(aGu, aGw, aGv) {
					if (aGg && !(aGu < 2)) {
						for (var a3A, o0 = (aGe - aGX) / a7A * (aGu - 1), kg = Math.floor(o0), kh = Math.floor(1 + o0), aGz = o0 - kg, aH0 = 1e5, aH1 = -1, aH2 = -1, aH3 = aGv - (aGv - aGw) * (aGf - aGY) / aGZ, ey = data.data, z = 0; z < ey
							.length; z++) {
							var aEC, aGo = ey[z].aGo;
							aGo.length <= kh || (aGo = aGo[kg] + aGz * (aGo[kh] - aGo[kg]), (aEC = Math.abs(aH3 - aGo)) < aH0 && (aH0 = aEC, aH1 = z, aH2 = aGo))
						} - 1 !== aH1 && (aGv = aGY + aGZ - (aH2 - aGw) / (aGv - aGw) * aGZ, qo.lineWidth = .5 * bR.uH, qo.strokeStyle = colors[aH1], qo.beginPath(), qo.moveTo(aGX, aGv), qo.lineTo(aGe, aGv), qo.lineTo(aGe, aGY + aGZ), qo
						.stroke(), qo.beginPath(), qo.arc(aGe, aGv, .1 * aGX, 0, 2 * Math.PI), qo.fillStyle = colors[aH1], qo.fill(), aGw = aGY + aGZ + .15 * aGb, b2.ow.textAlign(qo, 1), a3A = aGu - 2 < o0 ? (a3A = aGd.getTime() - 6e4 * aGi[
								data.aGn], new Date(a3A + (o0 - (aGu - 2)) * (aGc.getTime() - a3A))) : new Date(aGd.getTime() - 6e4 * (aGu - o0 - 1) * aGi[data.aGn]), aGu = b2.xk.yN(a3A), o0 = b2.ow.measureText(aGu), a3A = bB.oV(aGe, aGX +
								.5 * o0, aGX + a7A - .5 * o0), qo.fillStyle = b2.color.mD(70, 50, 20), qo.fillRect(a3A - .52 * o0, aGY + aGZ, 1.04 * o0, .55 * aGb), qo.fillStyle = colors[0], qo.fillText(aGu, a3A, aGw), qo.font = b2.ow.q5(0,
								.25 * aGX), b2.ow.textBaseline(qo, 1), b2.ow.textAlign(qo, 2), a3A = .92 * aGX, aGu = (aH2 / 1e3).toFixed(3), o0 = b2.ow.measureText(aGu), aGw = a3A - 1.04 * o0, qo.fillStyle = b2.color.mD(70, 50, 20), qo
							.fillRect(aGw, aGv - .1625 * aGX, aGX - aGw, .275 * aGX), qo.fillStyle = colors[aH1], qo.fillText(aGu, a3A, aGv))
					}
				}(aGu, aGw, aGv)
			}(), qo.lineWidth = bR.uH, qo.strokeStyle = p.mL, qo.beginPath(), qo.moveTo(aGX, aGY), qo.lineTo(aGX, aGY + aGZ), qo.lineTo(aGX + a7A, aGY + aGZ), qo.stroke();
		var z, fontSize = .5 * aGa,
			ey = (qo.font = b2.ow.q5(0, fontSize), b2.ow.textBaseline(qo, 1), b2.ow.textAlign(qo, 0), data.data),
			eI = ey.length,
			eR = aGY - .5 * aGa,
			od = "";
		for (z = 0; z < eI; z++) od += ey[z].name + "  ";
		od = od.trim();
		var aH6 = b2.ow.measureText(od),
			eP = .5 * (an.t - aH6);
		for (aH6 > an.t && (eP = 0, qo.font = b2.ow.q5(0, an.t / aH6 * fontSize)), z = 0; z < eI; z++) qo.fillStyle = colors[z], qo.fillText(ey[z].name, eP, eR), eP += b2.ow.measureText(ey[z].name + "  ")
	}, this.gV = function(kU, kV) {
		aH9(kU, kV)
	}, this.wq = function(kU, kV) {
		aH9(kU, kV)
	}, this.xQ = function(ed) {
		2 === ed && aFo.qb[0].pD()
	};
	var z, dt, yL, kB, eL = data.data,
		eI = eL.length,
		max = 1;
	for (z = 0; z < eI; z++) max = Math.max(max, eL[z].aGo.length);
	for (z = 0; z < eI; z++)
		for (; eL[z].aGo.length < max;) eL[z].aGo.unshift(0);
	dt = new Date, yL = 6e4 * dt.getTimezoneOffset(), kB = dt.getTime() - yL, aGc = new Date(kB), 6 === data.aGn ? function(dt, yL) {
		var aGq = dt.getUTCFullYear(),
			dt = dt.getUTCMonth() + 1;
		aGd = dt < 12 ? new Date(Date.UTC(aGq, dt) - yL) : new Date(Date.UTC(aGq + 1, 0) - yL)
	}(dt, yL) : (yL = 6e4 * aGi[data.aGn], aGd = data.aGn <= 4 ? new Date(kB + yL - dt.getTime() % yL) : new Date(kB + yL - (dt.getTime() + 2592e5) % yL)), kB = b2.color, colors = [p.mL, kB.mD(255, 0, 0), kB.mD(0, 200, 0), kB.mD(80, 80, 255), kB
		.mD(255, 255, 0), kB.mD(255, 0, 255), kB.mD(0, 255, 255), kB.mD(255, 140, 0), kB.mD(128, 128, 128), kB.mD(0, 255, 140)
	], aFo = new qU(L(204) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aGn] + ", " + b2.xk.yK(aGc), [new l(L(13), function() {
		i.kt.a6a()
	}), new l(L(205), function() {
		i.j(14)
	})], !1)
}

function aFh() {
	var aFo, aFp, os;
	this.show = function() {
		aFo.show(), this.resize()
	}, this.qK = function() {
		aFo.qK()
	}, this.resize = function() {
		aFo.resize(), aFp.resize()
	}, this.xQ = function(ed) {
		2 === ed && aFo.qb[0].pD()
	}, aFo = new qU(L(206), [new l(L(13), function() {
		i.aFm(13)
	})]), aFp = new oq(aFo.qa, ((os = []).push(function() {
		var aG5 = new oZ,
			aGC = (aG5.oc(L(207)), aG5.oe(L(208)), new l(L(209), function() {
				bY.pY.pZ(130, 0), i.kt.aHE()
			}, 0, 0, 1)),
			aG6 = new pg(bY.dZ.data[126], 0, function() {
				aGC.button.click()
			});
		return aG5.oo(aG6), aG6.d.placeholder = "a,b,c", aG6.d.style.marginTop = "0.5em", aG5.oo(new pd([aGC.button])), aG5
	}()), os.push(function() {
		var aG5 = new oZ,
			aGC = new l(L(209), function() {
				bY.pY.pZ(130, 1), i.kt.aHE()
			}, 0, 0, 1),
			aHF = new pg(bY.dZ.data[129], 1, function() {
				aHF.d.focus()
			}),
			aHG = new pg(bY.dZ.data[128], 1, function() {
				aGC.button.click()
			});
		return aG5.oc(L(210)), aG5.oo(aHG), aHG.d.style.marginBottom = "0.5em", aG5.oc(L(211)), aG5.oo(aHF), aG5.oo(new pd([aGC.button])), aG5
	}()), os.push(function() {
		var aG5 = new oZ;
		return aG5.oc(L(212)), bY.dZ.data[125].qT = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aG5.ol(new qQ(bY.dZ.data[125])), aG5
	}()), os.push(function() {
		var aG5 = new oZ;
		return aG5.oc(L(213)), aG5.oo(new pW(bY.dZ.data[127], L(214))), aG5
	}()), os))
}

function aFg() {
	var aFo, aHH, a7A, aHI, a7B, a7C, colors = [0, 0, 0],
		aHJ = -1;

	function a7J(z) {
		var aHM = aHH.eR + z * (bR.gap + a7C);
		qo.fillStyle = "rgb(" + (0 === z ? 150 : 2 === z ? 30 : 0) + "," + (1 === z ? 130 : 2 === z ? 30 : 0) + "," + (2 === z ? 220 : 0) + ")", qo.fillRect(aHI, aHM, colors[z] * a7B, a7C), qo.strokeStyle = p.mL, qo.strokeRect(aHI, aHM, a7B, a7C), qo
			.fillStyle = p.mL, qo.font = b2.ow.q5(0, .32 * a7C), b2.ow.textBaseline(qo, 1), b2.ow.textAlign(qo, 0), qo.fillText(L(0 === z ? 217 : 1 === z ? 218 : 219) + aHK(z), aHI + bR.gap, aHM + .53 * a7C)
	}

	function aHK(z, aHN) {
		return aHN = aHN || 256, bB.oV(Math.floor(aHN * colors[z]), 0, aHN - 1)
	}

	function xL(kU, kV) {
		return !(kU < aHI || kV < aHH.eR || kU > aHH.eP + aHH.t || kV > aHH.eR + aHH.ir)
	}
	this.show = function() {
		var el = bY.dZ.data[121].value;
		colors[0] = (el >> 12) / 63, colors[1] = (el >> 6 & 63) / 63, colors[2] = (63 & el) / 63, aFo.show(), this.resize()
	}, this.qK = function() {
		bY.pY.pZ(121, (aHK(0, 64) << 12) + (aHK(1, 64) << 6) + aHK(2, 64)), aFo.qK()
	}, this.resize = function() {
		aFo.resize(), aHH.resize();
		var ed = an.p2,
			ql = aFo.qf(),
			aHL = (aHH.eR = Math.max(aHH.eR, ed * ql.qg + bR.gap), ed * ql.qj - 2 * bR.gap);
		aHH.ir = Math.min(aHH.ir, aHL), aHH.t = 2 * aHH.ir, aHH.eR = ed * ql.qg + .5 * (ed * ql.qj - aHH.ir), aHH.eP = .5 * (an.t - aHH.t), a7A = .25 * aHH.t, aHI = aHH.eP + a7A + bR.gap, a7B = aHH.t - a7A - bR.gap, a7C = (aHH.ir - 2 * bR.gap) /
			3
	}, this.qn = function() {
		var h3, qL, ec;
		aFo.qn(), qo.lineWidth = bR.uH, h3 = aHK(0), qL = aHK(1), ec = aHK(2), qo.fillStyle = "rgb(" + h3 + "," + qL + "," + ec + ")", qo.fillRect(aHH.eP, aHH.eR, a7A, aHH.ir), qo.strokeStyle = p.mL, qo.strokeRect(aHH.eP, aHH.eR, a7A, aHH.ir), qo
			.fillStyle = h3 + qL + ec < 306 && qL < 150 ? p.mL : p.mC, b2.ow.textBaseline(qo, 1), b2.ow.textAlign(qo, 1), qo.font = b2.ow.q5(0, .1 * aHH.ir), qo.rotate(-Math.PI / 2), qo.fillText(L(216), -aHH.eR - .5 * aHH.ir, aHH.eP + .5 * a7A),
			qo.setTransform(1, 0, 0, 1, 0, 0), a7J(0), a7J(1), a7J(2)
	}, this.gV = function(kU, kV) {
		xL(kU, kV) && (aHJ = bB.oV(Math.floor((kV - aHH.eR) / (a7C + .75 * bR.gap)), 0, 2), colors[aHJ] = bB.oV((kU - aHI) / a7B, 0, 1), bU.dO = !0)
	}, this.wq = function(kU) {
		-1 !== aHJ && (colors[aHJ] = bB.oV((kU - aHI) / a7B, 0, 1), bU.dO = !0)
	}, this.wt = function(kU, kV, deltaY) {
		xL(kU, kV) && (kU = bB.oV(Math.floor((kV - aHH.eR) / (a7C + .75 * bR.gap)), 0, 2), colors[kU] = bB.oV(colors[kU] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bU.dO = !0)
	}, this.xE = function() {
		0 <= aHJ && (aHJ = -1, bU.dO = !0)
	}, this.xQ = function(ed) {
		2 === ed && aFo.qb[0].pD()
	}, aFo = new qU(L(215), [new l(L(13), function() {
		i.kt.a6a()
	})], !1), aHH = new pR([.5, .25], [.5, .5], 1)
}

function q0(id, yy) {
	var aFo, aHO;

	function aHS() {
		aHO.pb.innerHTML += "<br>" + L(222)
	}

	function aHR() {
		b4.v(48), b4.w(24, Math.floor(bB.pow(24) * Math.random())), b4.w(24, Math.floor(bB.pow(24) * Math.random())), b7.dH(b4.a0), bY.pY.pZ(110, b5.q2.q3(b5.q2.q4(8))), aq.aGA.aHh()
	}
	this.aHP = !0, this.aHQ = id, this.show = function() {
		aFo.show(), this.resize(), 15 === id ? (aq.kt.a7Y(0, id) ? aHR : aHS)() : 16 === id ? aq.kt.a7Y(0, id) ? aq.a6X.aHT(2) : aHS() : 17 === id ? aq.kt.a7Y(0, id) ? aq.a6X.aHT(3) : aHS() : 18 === id ? (aq.kt.close(0, 3253), aq.kt.a7Y(0, id),
				aHS()) : 20 === id ? aq.kt.a7Y(0, id) ? aq.aGA.aHU(yy) : aHS() : 21 === id ? aq.kt.a7Y(0, id) ? aq.aHV.aHW(yy.qG, yy.qH, yy.qI) : aHS() : 22 === id ? aq.kt.a7Y(0, id) ? aq.aHV.aHX(yy.qG, yy.aHY, yy.aHZ) : aHS() : 23 === id ? aq.kt
			.a7Y(0, id) ? aq.aHV.aHa(yy.aGn, yy.vw) : aHS() : 24 === id ? aq.kt.a7Y(0, id) ? aq.aHV.aHb(yy.aGn, yy.qH, yy.qI) : aHS() : 25 === id ? aq.kt.a7Y(0, id) ? aq.aGA.aGI(yy) : aHS() : 28 === id ? aq.kt.a7Y(0, id) ? aq.aHV.aHc(yy.qG, yy
				.aHY, yy.aHZ) : aHS() : 29 === id && (aq.kt.a7Y(0, id) ? aq.aGA.aHd(yy) : aHS())
	}, this.aHe = function() {
		15 === id ? aHR() : 16 === id ? aq.a6X.aHT(2) : 17 === id ? aq.a6X.aHT(3) : 18 === id ? i.j(8, this.aFX, new q0(16)) : 20 === id ? aq.aGA.aHU(yy) : 21 === id ? aq.aHV.aHW(yy.qG, yy.qH, yy.qI) : 22 === id ? aq.aHV.aHX(yy.qG, yy.aHY, yy
			.aHZ) : 23 === id ? aq.aHV.aHa(yy.aGn, yy.vw) : 24 === id ? aq.aHV.aHb(yy.aGn, yy.qH, yy.qI) : 25 === id ? aq.aGA.aGI(yy) : 28 === id ? aq.aHV.aHc(yy.qG, yy.aHY, yy.aHZ) : 29 === id ? aq.aGA.aHd(yy) : 1e3 === id && (this.aHQ =
			id = 25, aq.aGA.aGI(yy))
	}, this.aHf = function(code, bc, data) {
		!bc && code !== id || (16 === code ? i.j(7, this.aFX) : 17 === code ? (aq.kt.close(0, 3252), bY.kt.rT(0), bY.dZ.data[117].qT && 0 < bY.dZ.data[117].qT.length ? (bc = bY.kt.rU(0), bY.pY.pZ(105, bc.px), bY.pY.pZ(106, bc.password), i.j(8,
			this.aFX, new q0(16))) : (bY.pY.pZ(105, ""), i.kt.a6a())) : 21 === code ? i.j(10, this.aFX, new aHg(data)) : 23 === code ? i.j(13, 0, new aGW({
			data: data,
			aGn: yy.aGn
		})) : 25 === code && (i.kt.aFi.px = yy.px, i.j(15, this.aFX)))
	}, this.qK = function() {
		aFo.qK()
	}, this.resize = function() {
		aFo.resize(), aHO.resize()
	}, this.xQ = function(ed) {
		2 === ed && aFo.qb[0].pD()
	}, aFo = new qU(L(220), [new l(L(13), function() {
		i.kt.a6a()
	})]), aHO = new pa(aFo.qa, L(221))
}

function aFc() {
	var aHi, aHj, aHH, aG6, aHk;
	this.a9e = new q9, aHH = new pR([.45, .27], [.5, .5], 2 / 3), aHj = [new l("⚔️<br>" + L(104), function() {
			aHl(0)
		}, p.mk), new l("🗡️<br>" + L(105), function() {
			aHl(1)
		}, p.mw), new l("🔑<br>" + L(223), function() {
			aHl(2)
		}, p.nB), new l("☰<br>" + L(224), function() {
			aHl(3)
		}, p.mX), new l("", function() {
			i.j(12)
		}, p.mH, !1),
		new l("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new l("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], aG6 = new pg(bY.dZ.data[122]);
	for (var z = 0; z < aHj.length; z++) aHj[z].button.style.position = "absolute";

	function aHl(o0) {
		m.n.setState(10), ay.xF(), aP.qP() || aP.a9U(), 0 === o0 ? i.kt.aHm() : 1 === o0 ? i.kt.aHn() : 2 === o0 ? 0 !== m.id || bY.dZ.data[140].value ? i.j(8, i.pz, new q0(16)) : i.kt.aHo(i.pz, 16) : 3 === o0 && i.j(1, i.pz)
	}
	aG6.d.style.position = "absolute", aG6.d.style.textAlign = "center", aG6.d.placeholder = L(225), this.show = function() {
		aN.setState(0), m.n.setState(12), this.a9e.show(), aHj[4].pF(b2.color.yD(bY.dZ.data[121].value)), this.resize(), document.body.appendChild(aG6.d);
		for (var z = 0; z < aHj.length; z++) document.body.appendChild(aHj[z].button);
		1 !== m.id || m.em < 5 || (aHk && bU.ds > aHk + 144e5 ? m.rE.setState(14) : aHk = bU.ds)
	}, this.qK = function() {
		this.a9e.qK(), document.body.removeChild(aG6.d);
		for (var z = 0; z < aHj.length; z++) document.body.removeChild(aHj[z].button)
	}, this.resize = function() {
		this.a9e.resize(), aHH.resize();
		var gap = .5 * bR.gap,
			a6g = 10 / 99 * .84 * aHH.t,
			aHr = .16 * aHH.ir,
			a3h = .19 * aHH.t,
			eP = aHH.eP + a3h,
			a6g = aHH.eR + a6g + 3 * gap,
			t = .5 * (aHH.t - gap) - a3h,
			a3h = aHH.t - 2 * a3h - aHr - gap,
			a3h = (b2.ow.qN(aG6.d, eP, a6g, a3h, aHr), b2.ow.qN(aHj[4].button, eP + a3h + gap, a6g, aHr, aHr), .5 * (aHH.eR + aHH.ir - (a6g += aHr + gap) - gap));
		b2.ow.qN(aHj[0].button, eP, a6g, t, a3h), b2.ow.qN(aHj[1].button, eP + t + gap, a6g, t, a3h), b2.ow.qN(aHj[2].button, eP, a6g + a3h + gap, t, a3h), b2.ow.qN(aHj[3].button, eP + t + gap, a6g + a3h + gap, t, a3h);
		b2.ow.qN(aHj[5].button, eP, a6g + a3h * 2 + gap * 2, t * 2 + gap, a3h / 3);
		b2.ow.qN(aHj[6].button, eP, a6g + a3h * 2.33 + gap * 3, t * 2 + gap, a3h / 3);
		for (var z = 0; z < aHj.length; z++) aHj[z].button.style.font = b2.ow.q5(0, b2.ow.yT(.065 * aHH.ir)), b2.ow.p8(aHj[z].button, 5);
		aG6.d.style.font = b2.ow.q5(0, b2.ow.yT(.08 * aHH.ir)), b2.ow.p8(aG6.d, 5)
	}, this.qn = function() {
		if (aN.a7q(), aG.qn(), aB.qn(), bN.qn(), aP.qP()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aHH.t * 0.03);
				qo.font = b2.ow.q5(1, size);
				qo.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = qo.measureText(text).width;
				qo.textAlign = "left";
				qo.textBaseline = "middle";
				qo.fillText(text, qo.canvas.width - textLength - size / 2, size);
			};
			qo.imageSmoothingEnabled = !1;
			var ed = aP.a7t("territorial.io"),
				lw = .84 * aHH.t / ed.width;
			qo.setTransform(lw, 0, 0, lw, aHH.eP + .08 * aHH.t, aHH.eR), aHi = aHi || b2.xg.yw(ed, b2.xg.z2, [0, 0, 0]);
			for (var eP = -1; eP <= 1; eP += 2)
				for (var eR = -1; eR <= 1; eR += 2) qo.drawImage(aHi, eP, eR);
			qo.drawImage(ed, 0, 0), qo.imageSmoothingEnabled = !0;
			var hB = aP.a7t("logo"),
				aHu = .6666 * lw * ed.height / hB.height,
				ly = .5 * an.t,
				lz = aHH.eR + .5 * lw * ed.height - .5 * aHu * hB.height;
			qo.setTransform(aHu, 0, 0, aHu, ly - .6 * lw * ed.width, lz), qo.drawImage(hB, 0, 0), qo.setTransform(aHu, 0, 0, aHu, ly + .6 * lw * ed.width - aHu * hB.width, lz), qo.drawImage(hB, 0, 0), qo.setTransform(1, 0, 0, 1, 0, 0), qo
				.imageSmoothingEnabled = !0
		}
	}
}

function aFj() {
	var aFo, aHv, aHw, qV;

	function qF(z) {
		i.j(8, i.pz, new q0(21, {
			qG: z,
			qH: 0,
			qI: 10
		}))
	}
	this.show = function() {
		aFo.show(), this.resize()
	}, this.qK = function() {
		aFo.qK()
	}, this.resize = function() {
		aFo.resize(), aHv.resize()
	}, this.xQ = function(ed) {
		2 === ed && aFo.qb[0].pD()
	}, aHw = [new l(L(226), function() {
		qF(1)
	}, 0, 0, 1), new l(L(227), function() {
		qF(2)
	}, 0, 0, 1), new l(L(228), function() {
		qF(0)
	}, 0, 0, 1), new l(L(229), function() {
		qF(3)
	}, 0, 0, 1)], qV = [new l(L(13), function() {
		i.wb()
	})], aFo = new qU(L(230), qV), aHv = new pO(aHw, aFo.qa)
}

function a6u(title, ok, aHx) {
	var aFo, aHO;
	this.show = function() {
		aFo.show(), this.resize()
	}, this.qK = function() {
		aFo.qK()
	}, this.resize = function() {
		aFo.resize(), aHO.resize()
	}, this.xQ = function(ed) {
		2 === ed && aFo.qb[0].pD()
	}, aHx = aHx || [new l(L(13), function() {
		i.wb()
	}, p.mu)], aFo = new qU(title, aHx), aHO = new pa(aFo.qa, ok), b2.ow.textAlign(aFo.qa.style, 1)
}

function aHg(data) {
	var aFo, aHy, ed, pr;

	function aHz(hF) {
		var eI = data.data.length;
		if (eI) {
			for (var qH, max = min = parseInt(data.data[0][0]), z = 1; z < eI; z++) var aI6 = parseInt(data.data[z][0]),
				min = Math.min(aI6, min),
				max = Math.max(aI6, max);
			qH = hF < 0 ? min + hF : max + 1, console.log(i.a9d().aFX), i.j(8, i.a9d().aFX, new q0(21, {
				qG: data.qG,
				qH: qH,
				qI: qH + Math.abs(hF)
			}))
		}
	}
	this.show = function() {
			aFo.show(), this.resize()
		}, this.qK = function() {
			aFo.qK()
		}, this.resize = function() {
			aFo.resize(), aHy.resize()
		}, this.xQ = function(ed) {
			2 === ed && aFo.qb[0].pD()
		}, ed = data.data.length ? 0 : 1, ed = [new l(L(13), function() {
			i.wb()
		}), new l(L(231), function() {
			aHz(-10)
		}, ed, 0, 1), new l(L(232), function() {
			aHz(10)
		}, ed, 0, 1), new l(L(205), function() {
			i.j(11, 10, new aI0({
				qG: data.qG
			}))
		})], pr = [L(233), L(234), L(235), L(236), L(237), L(238), L(239), L(240), L(241)], aFo = new qU(pr[data.qG], ed),
		function() {
			var z, eL = {
					pl: []
				},
				pl = eL.pl,
				aI2 = data.data,
				eI = aI2.length,
				lw = [.1, .001, .001, 1, 100, 1, .01, 1, 100][data.qG],
				z7 = [1, 3, 3, 0, 0, 0, 2, 0, 0][data.qG],
				pr = [
					[L(242), L(243) + " ↗", L(244)],
					[L(242), L(245), L(246), L(247) + " ↗"],
					[L(242), L(243) + " ↗", L(246)],
					[L(242), L(243) + " ↗", L(246)],
					[L(248), L(249), L(250) + " ↗", L(251) + " ↗", L(92)],
					[L(248), L(249), L(252) + " ↗", L(253) + " ↗", L(246)],
					[L(248), L(249), L(254) + " ↗", L(255) + " ↗", L(256)],
					[L(248), L(249), L(252) + " ↗", L(253) + " ↗", L(246)],
					[L(248), L(249), L(250) + " ↗", L(251) + " ↗", L(92)]
				];
			if (eL.pr = pr[data.qG], eL.pv = [
					[25, 40, 35],
					[15, 25, 25, 35],
					[25, 40, 35],
					[25, 40, 35],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12]
				][data.qG], 0 === data.qG)
				for (z = 0; z < eI; z++) pl.push([{
					el: aI2[z][0] + 1 + ".",
					dt: 0
				}, {
					el: aI2[z][1],
					dt: 1,
					px: aI2[z][4],
					py: aI2[z][3]
				}, {
					el: (lw * aI2[z][2]).toFixed(z7),
					dt: 0
				}]);
			else if (1 === data.qG)
				for (z = 0; z < eI; z++) pl.push([{
					el: aI2[z][0] + 1 + ".",
					dt: 0
				}, {
					el: aI2[z][1],
					dt: 0
				}, {
					el: (lw * aI2[z][2]).toFixed(z7),
					dt: 0
				}, {
					el: aI2[z][3],
					dt: 1,
					px: aI2[z][5],
					py: aI2[z][4]
				}]);
			else if (2 === data.qG || 3 === data.qG)
				for (z = 0; z < eI; z++) pl.push([{
					el: aI2[z][0] + 1 + ".",
					dt: 0
				}, {
					el: aI2[z][1],
					dt: 1,
					px: aI2[z][4],
					py: aI2[z][3]
				}, {
					el: (lw * aI2[z][2]).toFixed(z7),
					dt: 0
				}]);
			else if (4 === data.qG || 5 === data.qG || 6 === data.qG || 7 === data.qG || 8 === data.qG)
				for (z = 0; z < eI; z++) {
					var aI5 = aI2[z][5];
					4 === data.qG || 8 === data.qG ? "100%" === (aI5 = (aI5 % 64 * 100 / (aI5 >> 6)).toFixed(0) + "%") && (4 === data.qG ? aI5 += " (" + L(257) + ")" : aI5 += " (" + L(258) + ")") : 5 === data.qG ? 32768 <= aI5 && (aI5 = -(aI5 -
						32768)) : aI5 = (lw * aI5).toFixed(z7), pl.push([{
						el: "" + aI2[z][0],
						dt: 0
					}, {
						el: "" + aI2[z][6],
						dt: 0
					}, {
						el: aI2[z][7],
						dt: 1,
						px: aI2[z][1],
						py: aI2[z][2]
					}, {
						el: aI2[z][8],
						dt: 1,
						px: aI2[z][3],
						py: aI2[z][4]
					}, {
						el: "" + aI5,
						dt: 0
					}])
				}
			aHy = new pk(aFo.qa, eL)
		}()
}

function aI0(yy) {
	var aFo, aFp, os;
	this.show = function() {
		aFo.show(), this.resize()
	}, this.qK = function() {
		aFo.qK()
	}, this.resize = function() {
		aFo.resize(), aFp.resize()
	}, this.xQ = function(ed) {
		2 === ed && aFo.qb[0].pD()
	}, aFo = new qU(L(259), [new l(L(13), function() {
		i.aFm(10)
	})]), aFp = new oq(aFo.qa, ((os = []).push(function() {
		var aGC, aG5 = new oZ,
			aHF = new pg(bY.dZ.data[132], 1, function() {
				aGC.button.click()
			}),
			aHG = new pg(bY.dZ.data[131], 1, function() {
				aHF.d.focus()
			});
		aG5.oc(L(210)), aG5.oo(aHG), aHG.d.style.marginBottom = "0.8em", aG5.oc(L(211)), aG5.oo(aHF);
		return aGC = new l(L(209), function() {
			qH = Math.floor(aHG.d.value), qI = Math.floor(aHF.d.value);
			var qI, qH = {
				xx: Math.min(qH, qI),
				aF8: Math.max(qH, qI)
			};
			i.j(8, i.aFn(10).aFX, new q0(21, {
				qG: yy.qG,
				qH: qH.xx,
				qI: qH.aF8
			}))
		}, 0, 0, 1), aG5.oo(new pd([aGC.button])), aG5
	}()), os.push(function() {
		var aGC, aG5 = new oZ,
			aHF = new pg(bY.dZ.data[134], 1, function() {
				aGC.button.click()
			}),
			aHG = new pg(bY.dZ.data[133], 0, function() {
				aHF.d.focus()
			});
		return aG5.oc(1 === yy.qG ? L(260) : L(261)), aG5.oo(aHG), aHG.d.style.marginBottom = "0.8em", aG5.oc(L(262)), aG5.oo(aHF), aGC = new l(L(209), function() {
			var aHY = aHG.d.value.slice(0, 20),
				aHZ = Math.abs(Math.floor(aHF.d.value));
			i.j(8, i.aFn(10).aFX, new q0(22, {
				qG: yy.qG,
				aHY: aHY,
				aHZ: aHZ
			}))
		}, 0, 0, 1), aG5.oo(new pd([aGC.button])), aG5
	}()), os.push(function() {
		var aGC, aG5 = new oZ,
			aHF = new pg(bY.dZ.data[152], 1, function() {
				aGC.button.click()
			}),
			aHG = new pg(bY.dZ.data[151], 0, function() {
				aHF.d.focus()
			});
		return aG5.oc(L(263)), aG5.oo(aHG), aHG.d.style.marginBottom = "0.8em", aG5.oc(L(262)), aG5.oo(aHF), aGC = new l(L(209), function() {
			var aHY = aHG.d.value.slice(0, 5),
				aHZ = Math.abs(Math.floor(aHF.d.value));
			i.j(8, i.aFn(10).aFX, new q0(28, {
				qG: yy.qG,
				aHY: aHY,
				aHZ: aHZ
			}))
		}, 0, 0, 1), aG5.oo(new pd([aGC.button])), aG5
	}()), os))
}

function aFd() {
	var aFo, aFp, os;
	this.show = function() {
		aFo.show(), this.resize()
	}, this.qK = function() {
		aFo.qK()
	}, this.resize = function() {
		aFo.resize(), aFp.resize()
	}, this.xQ = function(ed) {
		2 === ed && aFo.qb[0].pD()
	}, aFo = new qU(L(264), [new l(L(13), function() {
		i.j(7, i.aFn(7).aFX)
	}), new l(L(166), function() {
		bY.pY.pZ(105, b6.q2.rz(aFp.ot[0].oa[0].d.value, 5)), bY.pY.pZ(106, b6.q2.rz(aFp.ot[1].oa[0].d.value, 8)), i.j(8, i.aFn(7).aFX, new q0(18))
	})]), aFp = new oq(aFo.qa, ((os = []).push(function() {
		var aG5 = new oZ;
		return aG5.oc(L(147)), aG5.oo(new pg({
			title: "AccountName",
			value: "",
			o0: -1
		})), aG5
	}()), os.push(function() {
		var aG5 = new oZ,
			aGF = (aG5.oc(L(149)), new pg({
				title: "Password",
				value: "",
				o0: -1
			}));
		return aGF.d.type = "password", aG5.oo(aGF), aG5.oo(new pd([new l(L(150), function(d) {
			return d.textContent === L(150) ? (d.textContent = L(151), aGF.d.type = "text") : (d.textContent = L(150), aGF.d.type = "password"), !0
		}).button])), aG5
	}()), os))
}

function aFk() {
	var aFo, aHv, aHw, qV;

	function qF(z) {
		i.j(8, i.pz, new q0(21, {
			qG: z,
			qH: 0,
			qI: 10
		}))
	}
	this.show = function() {
		aFo.show(), this.resize()
	}, this.qK = function() {
		aFo.qK()
	}, this.resize = function() {
		aFo.resize(), aHv.resize()
	}, this.xQ = function(ed) {
		2 === ed && aFo.qb[0].pD()
	}, aHw = [new l(L(237), function() {
		qF(4)
	}, 0, 0, 1), new l(L(238), function() {
		qF(5)
	}, 0, 0, 1), new l(L(239), function() {
		qF(6)
	}, 0, 0, 1), new l(L(240), function() {
		qF(7)
	}, 0, 0, 1), new l(L(241), function() {
		qF(8)
	}, 0, 0, 1)], qV = [new l(L(13), function() {
		i.wb()
	})], aFo = new qU(L(265), qV), aHv = new pO(aHw, aFo.qa)
}

function aFT() {
	this.dZ = {}, this.qJ = ["", "", ""], this.aFi = null, this.aFf = null, this.we = function() {
			i.j(5, 5)
		}, this.aHn = function() {
			i.rX(), aO.dH()
		}, this.aHm = function() {
			i.rX(), aM.a7U(bY.dZ.data[10].value), aM.dH()
		},
		__fx.customLobby.setJoinFunction(() => {
			i.rX();
			aM.a7U(0);
			aM.dH();
		}), this.a6a = function() {
			i.j(0 === aN.wU() ? 5 : 0)
		}, this.aHE = function() {
			if (1 === bY.dZ.data[130].value) i.j(8, i.a9d().aFX, new q0(24, {
				aGn: bY.dZ.data[125].value,
				qH: bY.dZ.data[128].value,
				qI: bY.dZ.data[129].value
			}));
			else {
				for (var ey = (ey = bY.dZ.data[126].value.split(",")).slice(0, 10), z = 0; z < ey.length; z++) ey[z] = ey[z].trim().slice(0, 7).toUpperCase();
				1 === ey.length && 0 === ey[0].length && (ey = []), i.j(8, i.a9d().aFX, new q0(23, {
					aGn: bY.dZ.data[125].value,
					vw: ey
				}))
			}
		}, this.aHo = function(aFX, target) {
			i.j(4, aFX, new k("Data Usage Information",
				"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bA.aIB +
				"' target='_blank'>" + bA.aIB + "</a>", !1, [new l(L(13), function() {
					i.j(aFX)
				}), new l("✅ Accept", function() {
					bY.pY.pZ(140, 1), 0 === target ? i.j(2, aFX) : i.j(8, aFX, new q0(target))
				})]))
		}, this.aIC = function() {
			for (var z = 0; z < 3; z++) this.qJ[z] = b6.rs.ru(b7.o1(5));
			this.qJ[1] = "[" + this.qJ[1] + "]", 5 === i.pz && i.a9d().a9e.pZ(this.qJ)
		}
}

function k(title, ok, aID, aHx) {
	var aFo, aHO;
	this.show = function() {
		aFo.show(), this.resize()
	}, this.qK = function() {
		aFo.qK()
	}, this.resize = function() {
		aFo.resize(), aHO.resize()
	}, this.xQ = function(ed) {
		2 === ed && aFo.qb[0].pD()
	}, aHx = aHx || [new l(L(13), function() {
		i.wb()
	}, p.mu)], aFo = new qU(title, aHx), aHO = new pa(aFo.qa, ok), aID && b2.ow.textAlign(aFo.qa.style, 1)
}

function aFb() {
	var aFo, qr;

	function aIE() {
		bK.db.hideCMPButton(), i.j(0);
		var od = b1.aIK(qr.qv());
		(0 < od.length && od === b1.oF.aIH || b1.aIM.sA(od)) && b1.aIL()
	}
	this.show = function(aIF) {
		this.aIG(aIF), aFo.show(), this.resize()
	}, this.aIG = function(aIF) {
		0 === a1.v9 ? (aIF = aIF || qr.qv(), qr.qt(aIF)) : (a1.gR || (b1.oF.aIH = b1.aII.ug()), qr.qt(b1.aIJ(b1.oF.aIH)))
	}, this.qK = function() {
		aFo.qK()
	}, this.resize = function() {
		aFo.resize(), qr.resize()
	}, this.xQ = function(ed) {
		2 === ed ? aFo.qb[0].pD() : aIE()
	}, aFo = new qU(L(266), [new l(L(13), function() {
		i.aFm(1)
	}), new l(L(267), function() {
		qr.qw()
	}), new l(L(268), function() {
		qr.qx()
	}), new l(L(269), function() {
		qr.clear()
	}), new l(L(270), function() {
		aIE()
	})]), qr = new qp("replayData", L(271)), aFo.qa.appendChild(qr.d)
}

function aFa() {
	var aFo, aFp, os, a6W, aG5;

	function aIN() {
		var ds;
		a6W !== bY.dZ.data[12].value ? (az.dH(), az.a6V(), ds = bU.ds, i.j(4, 1, new k(L(274), L(275), !1, [new l(L(276), function() {
			i.j(1)
		}), new l("🔄 Reload", function() {
			bU.ds < ds + 1500 || m.n.o()
		}, p.q)]))) : i.j(1)
	}
	this.show = function() {
			a6W = bY.dZ.data[12].value, aFo.show(), this.resize()
		}, this.qK = function() {
			aFo.qK()
		}, this.resize = function() {
			aFo.resize(), aFp.resize()
		}, this.xQ = function(ed) {
			2 === ed && aFo.qb[0].pD()
		}, aFo = new qU(L(272), [new l(L(13), aIN), new l(L(273), function() {
			i.rX(), bY.pY.rZ(), i.j(2)
		})]), os = [], (aG5 = new oZ).oc(L(277)), aG5.oe(L(278)), os.push(aG5),
		function(os) {
			var aG5 = new oZ,
				ey = (aG5.oc(L(296)), az.data.a6b());
			aG5.ol(new qQ({
				qT: ey,
				value: az.data.a6e(ey)
			}, function(o0) {
				return bY.pY.pZ(12, ey[o0].split(":")[0]), !0
			})), os.push(aG5)
		}(os), (aG5 = new oZ).oc(L(279)), bY.dZ.data[10].qT = [L(279) + " 1", L(280) + " 1", L(279) + " 2", L(280) + " 2"], aG5.ol(new qQ(bY.dZ.data[10])), os.push(aG5), (aG5 = new oZ).oc(L(281)), bY.dZ.data[1].qT = [L(282), L(283), L(284), L(285)],
		aG5.ol(new qQ(bY.dZ.data[1])), os.push(aG5), (aG5 = new oZ).oc(L(286)), bY.dZ.data[9].qT = [L(283), L(287), L(288)], aG5.ol(new qQ(bY.dZ.data[9])), os.push(aG5), (aG5 = new oZ).oc(L(289)), bY.dZ.data[11].qT = [L(290), L(2), L(291)], aG5.ol(
			new qQ(bY.dZ.data[11])), os.push(aG5), (aG5 = new oZ).oc(L(292)), aG5.oo(new pW(bY.dZ.data[2])), os.push(aG5), (aG5 = new oZ).oc(L(293)), aG5.oo(new pW(bY.dZ.data[7])), os.push(aG5), (aG5 = new oZ).oc(L(294)), aG5.oo(new pW(bY.dZ.data[
			8])), os.push(aG5), (aG5 = new oZ).oc(L(295)), aG5.oo(new pg(bY.dZ.data[5])), os.push(aG5), aFp = new oq(aFo.qa, os)
}

function aFZ() {
	var aFo, aHv, aHw, qV;

	function aIP(id) {
		0 !== m.id || bY.dZ.data[140].value ? 0 === id ? i.j(8, 1, new q0(16)) : i.j(2) : i.kt.aHo(i.pz, 0 === id ? 16 : 0)
	}
	this.show = function() {
		m.n.setState(12), aFo.show(), this.resize(), this.iC()
	}, this.qK = function() {
		aFo.qK()
	}, this.resize = function() {
		aFo.resize(), aHv.resize()
	}, this.iC = function() {
		8 === aN.wU() && (2 <= bS.aIU ? aHw[2].pE === p.mW && aHw[2].pF(0) : aHw[2].pE !== p.mW && aHw[2].pF(p.mW), !a1.gR && a9.a0f(a1.e2) ? aHw[1].pE === p.mW && aHw[1].pF(0) : aHw[1].pE !== p.mW && aHw[1].pF(p.mW), !a1.gR && al.oY(a1.e2) ?
			aHw[0].pE === p.mW && aHw[0].pF(0) : aHw[0].pE !== p.mW && aHw[0].pF(p.mW))
	}, this.xQ = function(ed) {
		2 === ed && aFo.qb[0].pD()
	}, aHw = [new l(L(297), function() {
		aIP(0)
	}), new l(L(230), function() {
		i.j(16)
	}), new l(L(265), function() {
		i.j(17)
	}), new l(L(298), function() {
		i.kt.aHE()
	}, 0, 0, 1), new l(L(266), function() {
		i.j(3, 1, "")
	}), new l(L(299), function() {
		i.j(18)
	}), new l(L(272), function() {
		aIP(1)
	}), new l(L(300), function() {
		i.j(4, 1, new k(L(300), b2.ow.yU([L(309), L(310), "Discord", L(311), L(226), L(312), L(88), L(313), L(314), L(315)], [bA.a6r, bA.wP, bA.a6s, bA.aIV, bA.aIW, bA.w7, bA.aIX, bA.aIY, bA.aIZ, bA.aIB]), !1, [new l(L(13), function() {
			i.j(1)
		}, p.mu)]))
	}), new l(L(301), function() {
		i.j(4, 1, new k(L(301), dT + "<br><a href='" + bA.aIV + "' target='_blank'>" + bA.aIV + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new l(L(13), function() {
				i.j(1)
			}, p.mu)]))
	}), new l(L(302), function() {
		i.j(4, 1, new k(L(302), L(316) + "<br>" + L(317), !1, [new l(L(13), function() {
			i.j(1)
		}), new l(L(318), function() {
			m.n.wG(), i.j(1)
		})]))
	}), new l(L(303), function() {
		m.n.wH(), i.j(4, 1, new k(L(319), L(320) + "<a href='" + bA.aIB + "' target='_blank'>" + bA.aIB + "</a>", !1, [new l(L(13), function() {
			i.j(1)
		}, p.mu)]))
	})], qV = [new l(L(276), function() {
		i.kt.a6a()
	})], 8 === aN.wU() && (aHw.unshift(new l(L(306), function() {
		2 <= bS.aIU && (i.rX(), bT.xT(), bU.dO = !0)
	}, 0, 1)), aHw.unshift(new l(L(307), function() {
		!a1.gR && a9.a0f(a1.e2) && (b0.ge.ng(), i.rX(), a9.gS) && a9.xT()
	}, 0, 1)), aHw.unshift(new l(L(308), function() {
		!a1.gR && al.oY(a1.e2) && (b0.ge.ni(), i.rX(), a9.gS) && a9.xT()
	}, 0, 1))), 1 === m.id && 5 <= m.em && aHw.push(new l(L(304), function() {
		m.n.wI()
	})), aFo = new qU(L(305), qV), aHv = new pO(aHw, aFo.qa)
}

function aFl() {
	var aFo, aFp, os;
	this.show = function() {
		aFo.show(), this.resize()
	}, this.qK = function() {
		aFo.qK()
	}, this.resize = function() {
		aFo.resize(), aFp.resize()
	}, this.xQ = function(ed) {
		2 === ed && aFo.qb[0].pD()
	}, aFo = new qU(L(299), [new l(L(13), function() {
		i.wb()
	})]), aFp = new oq(aFo.qa, ((os = []).push(function() {
		function aG9() {
			aIe.button.textContent = L(144), aIc.d.readOnly = !1, aId.d.readOnly = !1, aG8.pF(1), aG8.button.style.color = p.mL
		}
		var aG5 = new oZ,
			aIb = (aG5.oc(L(321)), new pg({
				title: bY.dZ.data[105].value,
				value: bY.dZ.data[105].value,
				o0: -1
			})),
			aIc = (aIb.d.readOnly = !0, aG5.oo(aIb), aG5.oc(L(322), "0.8em"), new pg(bY.dZ.data[148])),
			aIc = new pg(bY.dZ.data[148], 0, void 0, function(d) {
				aG7(bY.dZ.data[149].value, d.target.value)
			}),
			aId = (aG5.oo(aIc), aG5.oc(L(256), "0.8em"), new pg(bY.dZ.data[149], 1, void 0, function(d) {
				aG7(d.target.value, bY.dZ.data[148].value)
			})),
			aIe = (aG5.oo(aId), new l(L(144), function(d) {
				return d.textContent === L(144) ? (d.textContent = L(145), aIc.d.readOnly = !0, aId.d.readOnly = !0, aG8.pF(0), aG8.button.style.color = p.n6, bY.pY.pZ(149, aId.d.value), aG7(bY.dZ.data[149].value, bY.dZ.data[
					148].value)) : aG9(), !0
			})),
			aG8 = (aG5.oo(new pd([aIe.button])), new l(L(143), function(d) {
				return aIc.d.readOnly && aq.kt.a7S(0) && (b2.ow.yZ(d), aG9(), aq.aGA.aGB({
					q1: 0,
					px: bY.dZ.data[148].value,
					py: 0,
					value: bB.oV(Math.floor(100 * bY.dZ.data[149].value), 0, 4294967295)
				})), !0
			}, 1)),
			og = (aG5.oo(new pd([aG8.button])), aG5.oe()),
			aG7 = function(el, od) {
				el = isNaN(el) ? 0 : Number(el);
				var el = Math.max(el, (bY.dZ.data[150].value + 1) / 100),
					aGE = Math.floor(100 * Math.max(1e-4 * el, bY.dZ.data[150].value / 100)) / 100;
				og.textContent = L(146, [el.toFixed(2), bY.dZ.data[105].value, aGE.toFixed(2), od, (el - aGE).toFixed(2)])
			};
		return aG7(bY.dZ.data[149].value, bY.dZ.data[148].value), aG5
	}()), os))
}

function be() {
	"function" != typeof Math.log2 && (Math.log2 = function(eP) {
		return Math.log(eP) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(eP) {
		return Math.log(eP) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(eP) {
		return 0 < eP ? 1 : eP < 0 ? -1 : 0
	})
}

function cQ() {
	var a3u, aIg, aIh, aIi, aIf = !1;

	function aIj() {
		aIf = !0, a3u = -1, aIg = new Array(4);
		for (var z = 3; 0 <= z; z--) aIg[z] = !1;
		var aIk = Math.floor(1 + .02 * an.min);
		aIh = new Array(4), (aIi = new Array(4))[1] = aIi[3] = aIh[0] = aIh[2] = 0, aIi[0] = aIh[3] = -aIk, aIh[1] = aIi[2] = aIk
	}

	function aIl() {
		if (-1 !== a3u)
			if (0 !== a1.v9 && a5.m3()) {
				for (var aIm = !1, z = 3; 0 <= z; z--) aIg[z] && (aIm = !0, hg += aIh[z], hi += aIi[z], aU.wq(aIh[z], aIi[z]), aF.a3d());
				aIm ? bU.dO = !0 : af.ls()
			} else af.ls()
	}
	this.xN = function(o0) {
		0 !== a1.v9 && a5.m3() && (aIf || aIj(), aIg[o0] = !0, -1 === a3u) && (a3u = setInterval(aIl, 20), aIl())
	}, this.xR = function(o0) {
		if (0 !== a1.v9 && (aIf || aIj(), aIg[o0] = !1, -1 !== a3u)) {
			for (var aIm = !1, z = 3; 0 <= z; z--) aIm = aIm || aIg[z];
			aIm || this.ls()
		}
	}, this.ls = function() {
		if (aIf && -1 !== a3u) {
			for (var z = 3; 0 <= z; z--) aIg[z] = !1;
			clearInterval(a3u), a3u = -1
		}
	}
}

function cR() {
	this.kt = new aIn, this.kx = new aIo, this.nM = new aIp, this.a7Z = new aIq, this.a6X = new aIr, this.aGA = new aIs, this.nz = new aIt, this.aHV = new aIu, this.a1Q = new aIv, this.aIw = new aIx, this.aIy = new aIz, this.aJ0 = new aJ1, this.aJ2 =
		new aJ3, this.dH = function() {
			this.kt.dH()
		}
}

function aIn() {
	var aJ4, aJ6;
	this.a81 = 5, this.a82 = this.a81 - 1, this.a7X = this.a81 + this.a82, this.a7W = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aJ5 = null;

	function di(z) {
		return aJ6[z].aIf && aJ4[z].di()
	}

	function aJE(wR) {
		aJ6[wR].ds = bU.ds, aJ6[wR].aJ8 = !1
	}
	this.wX = 0, this.wW = 0, this.dH = function() {
		this.aJ5 = new Array(this.a81);
		this.aJ5[0] = "territorial.io";
		var z, aDb = ao.aDt(0);
		for (ao.ze(0), z = 1; z < this.a81; z++) this.aJ5[z] = a7.um() + ".territorial.io";
		for (ao.ze(aDb), aJ4 = new Array(this.a7X), aJ6 = new Array(this.a7X), z = this.a7X - 1; 0 <= z; z--) aJ6[z] = {
			aIf: !1,
			ds: 0,
			aJ8: !1
		};
		this.a7Y(0, 0)
	}, this.aJ9 = function(z) {
		return aJ4[z]
	}, this.aJA = function() {
		return this.wW < this.a81 ? this.wW : this.wW - this.a82
	}, this.iC = function() {
		for (var z = this.a7X - 1; 0 <= z; z--) this.a7S(z) && bU.ds > aJ6[z].ds + 15e3 && aq.nM.aJB(z, aJ6[z].aJ8);
		!this.a7S(0) && bU.ds > aJ6[0].ds + 8e3 && (aJ6[0].ds = bU.ds, this.a7Y(0, 0))
	}, this.a7Y = function(wR, aFX) {
		if (aJ6[wR].aIf) {
			if (aJ4[wR].di()) return aJ4[wR].aJD(aFX), aJ4[wR].a7S();
			aJ4[wR].qK()
		}
		return this.aJC(wR, aFX), !1
	}, this.aJC = function(wR, aFX) {
		aJ6[wR].aIf = !0, aJE(wR), aJ4[wR] = new aJF, aJ4[wR].dH(wR, aFX)
	}, this.aJD = function(wR, aFX) {
		di(wR) && aJ4[wR].aJD(aFX)
	}, this.aJG = function(wR, aFX) {
		aq.a6X.aJH(wR)
	}, this.a7S = function(z) {
		return aJ6[z].aIf && aJ4[z].a7S()
	}, this.send = function(wR, a0) {
		aJE(wR), aJ4[wR].send(a0)
	}, __fx.customLobby.setSendFunction(this.send), this.x7 = function(wR) {
		8 === aN.wU() && (aJ6[wR].aJ8 = !0, aq.kx.jh = !0)
	}, this.close = function(wR, aJI) {
		di(wR) && aJ4[wR].close(aJI)
	}, this.aJJ = function(wR, aJI) {
		g.wc(aJI), di(wR) && aJ4[wR].close(aJI)
	}, this.wf = function(aJI) {
		for (var z = this.a7X - 1; 0 <= z; z--) this.close(z, aJI)
	}, this.aJK = function(wR, aJI) {
		for (var z = this.a7X - 1; 0 <= z; z--) z !== wR && this.close(z, aJI)
	}, this.zn = function() {
		this.close(this.wX, 3246)
	}, this.aJL = function(wR, d) {
		aJ4[wR].qK(), g.wQ(wR, d.code)
	}
}

function aIo() {
	this.jh = !1, this.iC = function() {
		bU.jK() % 250 != 249 || a1.gR || (aq.a6X.aJM(+(this.jh && aV.lI[a1.e2]), aa.jO + bD.kt.oD), this.jh = !1)
	}
}

function aIv() {
	this.aJO = function(wR, a0) {
		b7.dH(a0), 0 === b7.size ? aq.kt.aJJ(wR, 3205) : __fx.customLobby.isCustomMessage(a0) || ((0 === b7.o1(1) ? function(wR) {
			var aJS = b7.o1(6);
			0 === aJS ? function(wR) {
					if (0 === wR && 8 !== aN.wU()) {
						i.kt.aIC();
						for (var aJc = b7.o1(12), aJd = b7.o1(6), ey = new Array(aJc), z = 0; z < aJc; z++) ey[z] = b7.o1(aJd);
						aG.a41(ey)
					}
				}(wR) : 2 === aJS ? aq.aIw.aJU(wR) : 3 === aJS || 4 === aJS ? am.dH() : 9 === aJS ? aq.aIy.aJV(wR) : 10 === aJS ? aq.aJ0.aJW() : 11 === aJS ? aq.aIy.aJX() : 12 === aJS ? aq.aJ0.aJY() : 13 === aJS ? aq.aJ2.aJZ() :
				14 === aJS ? aq.aJ2.aJa() : 15 === aJS && aq.aIy.aJb()
		} : function(wR) {
			if (8 !== aN.wU() && !am.a83()) return;
			if (wR !== aq.kt.wX) aq.kt.aJJ(wR, 3244);
			else if (0 === b7.o1(1)) bU.vI.aJj(b7.a0);
			else {
				var z, wR = b7.o1(2);
				if (0 === wR) {
					var na, nM = b7.o1(9);
					0 !== aV.lI[nM] && 0 !== aV.lI[a1.e2] && (na = b7.o1(10), aA.nZ(nM, a1.e2, na), aU.oW(nM, 1, na))
				} else if (1 === wR) ! function() {
					var nM = b7.o1(9);
					0 !== aV.lI[nM] && 0 !== aV.lI[a1.e2] && aw.aDN(0, [nM], !0) && aA.ns(nM, 1)
				}();
				else if (2 === wR) ! function() {
					var nM = b7.o1(9),
						target = b7.o1(9);
					0 !== aV.lI[nM] && 0 !== aV.lI[target] && 0 !== aV.lI[a1.e2] && aw.aDN(1, [nM], !0) && (aU.oW(nM, 3, 96), aU.oW(target, 4, 96), aA.a1X(nM, target))
				}();
				else if (x && !y) {
					var eI = 540;
					for (b4.v(17287), b4.w(1, 0), b4.w(6, 10), eI = Math.min(b0.nJ.o3.length, 540), z = 0; z < eI; z++) b4.aJp(32, b0.nJ.o3[z]);
					aq.kt.send(aq.kt.wX, b4.a0)
				}
			}
		})(wR), bU.aJR())
	}, this.a84 = function(a0) {
		if (b7.dH(a0), b7.o0 = 1, 3 === b7.o1(6)) {
			b7.o0 += 20;
			for (var a9H, a9G, name, a0 = b7.o1(9), zX = b7.o1(14), zZ = b7.o1(4), a8i = 1 === b7.o1(1), a8j = b7.o1(6), a8k = b7.o1(14), aJi = b7.o1(9) + 1, tb = [], z = 0; z < aJi; z++) a9H = b7.o1(1), a9G = [b7.o1(6), b7.o1(6), b7.o1(6)],
				name = b6.rs.ru(b7.o1(5)), tb.push({
					name: name,
					a9G: a9G,
					a9H: a9H
				});
			aN.a7m(), bI.v(a8j, a8k), 1 === tb.length && aO.a97(zZ), a1.zW(zX, a0, tb, zZ, a8i, !1)
		} else ! function() {
			b7.o0 += 20;
			for (var a9H, a9G, tf, name, a7v = b7.o1(1), zX = b7.o1(14), zZ = b7.o1(4), a8i = 1 === b7.o1(1), a8j = b7.o1(6), a8k = b7.o1(14), tb = [], z = 0; z < 2; z++) a9H = b7.o1(1), a9G = [b7.o1(6), b7.o1(6), b7.o1(6)], tf = b7.o1(14),
				name = b6.rs.ru(b7.o1(5)), tb.push({
					name: name,
					a9G: a9G,
					tf: tf,
					a9H: a9H
				});
			aN.a7m(), bI.v(a8j, a8k), a1.zW(zX, a7v, tb, zZ, a8i, !1)
		}()
	}, this.a7z = function() {
		b7.o0 = 1;
		var aJS = b7.o1(6),
			aJg = b7.o1(10);
		return aq.kt.wW > aq.kt.a82 && (aJg += aq.kt.a82), aq.kt.wW === aJg ? (aq.kt.wX = aJg, !1) : (aq.kt.close(aq.kt.wW, 3247), aq.kt.wX = aJg, am.a7u = b7.o1(10), am.a7v = b7.o1(3 === aJS ? 9 : 1), aq.kt.a7Y(aJg, 5) && aq.nM.aJh(), !0)
	}
}

function aJ1() {
	this.aJW = function() {
		bY.kt.rP(), bY.pY.pZ(105, b5.q2.q3(b5.q2.q4(5))), bY.pY.pZ(106, b5.q2.q3(b5.q2.q4(8))), bY.pY.pZ(109, b7.o1(30)), bY.pY.pZ(108, bY.dZ.data[109].value), bY.pY.pZ(111, bY.dZ.data[109].value + 1), bY.pY.pZ(107, 0), bY.pY.pZ(110, "")
	}, this.aJY = function() {
		var aJs, aJt, aJu, aJv, aJr;
		b7.size < b4.aJq(29) ? aq.kt.aJJ(0, 3254) : (aJr = b7.o1(5), aJs = b7.o1(3), aJt = b7.o1(3), aJu = b7.o1(3), aJv = b7.o1(8), b7.aJw(197 + 16 * (aJr + aJs + aJt + aJu + aJv) + 32 + 32 + 30 + 128 + 32 + 30 + 10 + 32 + 2 + 10 + 5) ? (aJr = {
			py: b7.o1(30),
			rd: b7.o1(16),
			re: b7.o1(30),
			rf: b7.o1(30),
			rg: b7.o1(30),
			rh: b7.aJx(32),
			username: b6.rs.ru(aJr),
			ri: b6.rs.ru(aJs),
			rj: b6.rs.ru(aJt),
			rk: b7.aJx(32),
			rl: b7.aJx(32),
			rm: b7.o1(30),
			rn: b7.aJx(32),
			ro: b7.aJx(32),
			rp: b7.aJx(32),
			rq: b7.aJx(32),
			aGK: b7.aJx(32),
			aGL: b7.aJx(30),
			aGD: b7.aJx(10),
			aGT: b7.aJx(32),
			aGU: b6.rs.ru(aJu),
			aGO: b7.aJx(2),
			aGP: b7.aJx(10),
			aGM: b6.rs.ru(aJv),
			aGQ: b7.aJx(5)
		}, bY.pY.pZ(150, aJr.aGD), 8 === i.pz && (25 === i.a9d().aHQ ? (aJr.aFq = !0, i.kt.aFi = aJr, i.a9d().aHf(25, !1)) : (aJr.aFq = !1, aJr.px = bY.dZ.data[105].value, i.kt.aFf = aJr, bY.pY.rc(aJr), i.a9d().aHf(16, !0)))) : aq.kt.aJJ(
			0, 3267))
	}
}

function aJ3() {
	this.aJZ = function() {
		var z;
		if (b7.size < b4.aJq(39)) aq.kt.aJJ(0, 3259);
		else {
			var qG = b7.o1(6),
				eI = b7.o1(10),
				gv = b7.o1(16);
			if (b7.aJw(39 + 16 * gv + eI * (0 === qG ? 111 : 1 === qG ? 101 : 2 === qG || 3 === qG ? 127 : 212))) {
				var data = [];
				if (0 === qG)
					for (z = 0; z < eI; z++) data.push([b7.o1(30), b6.rs.ru(b7.o1(5)), b7.o1(16), b7.o1(30), b7.o1(30)]);
				else if (1 === qG)
					for (z = 0; z < eI; z++) data.push([b7.o1(16), b6.rs.ru(b7.o1(3)), b7.o1(16), b6.rs.ru(b7.o1(5)), b7.o1(31), b7.o1(30)]);
				else if (2 === qG || 3 === qG)
					for (z = 0; z < eI; z++) data.push([b7.o1(30), b6.rs.ru(b7.o1(5)), b7.aJx(32), b7.o1(30), b7.o1(30)]);
				else
					for (z = 0; z < eI; z++) data.push([b7.o1(20), b7.o1(30), b7.o1(30), b7.o1(30), b7.o1(30), b7.aJx(32), b7.o1(30), b6.rs.ru(b7.o1(5)), b6.rs.ru(b7.o1(5))]);
				8 === i.pz && i.a9d().aHf(21, !0, {
					qG: qG,
					data: data
				})
			} else aq.kt.aJJ(0, 3260)
		}
	}, this.aJa = function() {
		if (b7.size < b4.aJq(29)) aq.kt.aJJ(0, 3265);
		else {
			var aJy = b7.o1(4),
				aJz = b7.o1(7),
				aK0 = b7.o1(11);
			if (b7.aJw(29 + 16 * aJz + 16 * aK0 + 11 * aJy)) {
				for (var data = [], z = 0; z < aJy; z++) {
					for (var aK1 = b6.rs.ru(b7.o1(3)), aK2 = b7.o1(8), aGo = [], eb = 0; eb < aK2; eb++) aGo.push(b7.o1(16));
					data.push({
						name: "[" + aK1 + "]",
						aGo: aGo
					})
				}
				8 === i.pz && i.a9d().aHf(23, !0, data)
			} else aq.kt.aJJ(0, 3266)
		}
	}
}

function aIx() {
	this.aJU = function(wR) {
		var z, a8L, aK3, aK4, aK5;
		if (wR !== aq.kt.wW) aq.kt.close(wR, 3239);
		else if (6 === aN.wU() && aj.dH(), 7 !== aN.wU()) aq.kt.close(wR, 3251);
		else {
			for (a8L = [0, 0, 0, 0], aK3 = b7.o1(6), z = 0; z < 4; z++) a8L[z] = b7.o1(aK3);
			for (aK4 = b7.o1(4), aK5 = [], z = 0; z < aK4; z++) {
				aK5.push({
					id: b7.o1(5),
					zZ: b7.o1(4),
					a8i: 1 === b7.o1(1),
					fz: b7.o1(6),
					a8g: b7.o1(14),
					a8l: b7.o1(aK3),
					a8m: b7.o1(9) + 1,
					a7h: b7.o1(10)
				});
				for (var a8n = b7.o1(3), a8o = new Array(a8n), a8p = new Array(a8n), eb = 0; eb < a8n; eb++) a8p[eb] = b7.o1(9) + 1, a8o[eb] = b6.rs.ru(b7.o1(3));
				aK5[z].a8n = a8n, aK5[z].a8o = a8o, aK5[z].a8p = a8p
			}
			aj.pZ(a8L, aK5)
		}
	}
}

function aIz() {
	this.aJV = function(wR) {
		var aJl, aK6;
		b7.aJw(70) ? (aJl = b7.o1(3), aK6 = bX.aK7.iC(b7.o1(30), b7.o1(30)), aq.a6X.aK8(wR, aK6, aJl), 0 < aJl || (0 === wR && 0 === bY.dZ.data[105].value.length ? aq.a6X.aHT(0) : aq.aGA.aK9(wR), 4 === aq.kt.aJ9(wR).aKA() ? 6 === aN.wU() && aq
			.a7Z.a7a(wR) : 5 !== aq.kt.aJ9(wR).aKA() || 8 !== aN.wU() && 10 !== aN.wU() || aq.nM.aJh())) : aq.kt.aJJ(wR, 3269)
	}, this.aJX = function() {
		var id = b7.o1(6);
		0 === id ? (aG.a3x || aq.a6X.aHT(1), az.a6V(), 8 === i.pz && i.a9d().aHe()) : 21 === id ? 8 === i.pz && i.a9d().aHf(17) : 22 === id && (bY.pY.pZ(106, bY.dZ.data[110].value), bY.pY.pZ(110, ""), 8 === i.pz) && i.a9d().aHf(16)
	}, this.aJb = function() {
		var eI = b7.o1(16),
			aKB = b7.o1(16);
		if (b7.aJw(55 + 10 * eI + 16 * aKB)) {
			for (var ey = [], z = 0; z < eI; z++) ey.push(b6.rs.ru(b7.o1(10)));
			az.a6Z(ey)
		} else aq.kt.aJJ(wR, 3270)
	}
}

function aIp() {
	this.aJB = function(wR, aJ8) {
		b4.v(8), b4.w(1, 0), b4.w(6, 4), b4.w(1, aJ8 ? 1 : 0), aq.kt.send(wR, b4.a0)
	}, this.aJh = function() {
		b4.v(58), b4.w(1, 0), b4.w(6, 5), b4.w(8, aq.kt.aJA()), b4.w(10, am.a7u), b4.w(9, am.a7v), b4.w(10, dV), b4.w(14, e.dW), aq.kt.send(aq.kt.wX, b4.a0)
	}, this.nN = function(e4) {
		b4.v(27), b4.w(1, 1), b4.w(4, 0), b4.w(22, e4), aq.kt.send(aq.kt.wX, b4.a0)
	}, this.nO = function(hf, iT) {
		b4.v(25), b4.w(1, 1), b4.w(4, 1), b4.w(10, hf), b4.w(10, iT), aq.kt.send(aq.kt.wX, b4.a0)
	}, this.nS = function(hf, nQ) {
		b4.v(24), b4.w(1, 1), b4.w(4, 2), b4.w(10, hf), b4.w(9, nQ), aq.kt.send(aq.kt.wX, b4.a0)
	}, this.nT = function(hf, e4) {
		b4.v(37), b4.w(1, 1), b4.w(4, 3), b4.w(10, hf), b4.w(22, e4), aq.kt.send(aq.kt.wX, b4.a0)
	}, this.nW = function(lg, e4) {
		b4.v(37), b4.w(1, 1), b4.w(4, 4), b4.w(10, lg), b4.w(22, e4), aq.kt.send(aq.kt.wX, b4.a0)
	}, this.nY = function(iT) {
		b4.v(15), b4.w(1, 1), b4.w(4, 5), b4.w(10, iT), aq.kt.send(aq.kt.wX, b4.a0)
	}, this.nc = function(o0) {
		b4.v(15), b4.w(1, 1), b4.w(4, 6), b4.w(10, o0), aq.kt.send(aq.kt.wX, b4.a0)
	}, this.nf = function(ne) {
		b4.v(6), b4.w(1, 1), b4.w(4, 7), b4.w(1, ne), aq.kt.send(aq.kt.wX, b4.a0)
	}, this.nh = function() {
		b4.v(5), b4.w(1, 1), b4.w(4, 8), aq.kt.send(aq.kt.wX, b4.a0)
	}, this.nj = function(hf, e4, iT) {
		b4.v(47), b4.w(1, 1), b4.w(4, 10), b4.w(10, hf), b4.w(10, iT), b4.w(22, e4), aq.kt.send(aq.kt.wX, b4.a0)
	}, this.nq = function(aKC, aKD) {
		b4.v(24), b4.w(1, 1), b4.w(4, 15), b4.w(9, aKD), b4.w(10, aKC), aq.kt.send(aq.kt.wX, b4.a0)
	}, this.nt = function(a1Q) {
		b4.v(14), b4.w(1, 1), b4.w(4, 14), b4.w(9, a1Q), aq.kt.send(aq.kt.wX, b4.a0)
	}, this.nx = function(aKE, target) {
		var z, eI = aKE.length;
		for (b4.v(14 + 9 * eI), b4.w(1, 1), b4.w(4, 13), b4.w(9, target), z = 0; z < eI; z++) b4.w(9, aKE[z]);
		aq.kt.send(aq.kt.wX, b4.a0)
	}
}

function aIs() {
	this.aKF = function() {
		b4.v(39), b4.w(1, 0), b4.w(6, 16), aq.a6X.aKG(), aq.kt.send(0, b4.a0)
	}, this.aK9 = function(wR) {
		b4.v(115), b4.w(1, 0), b4.w(6, 17), b6.q2.s6(bY.dZ.data[105].value, 5), b6.q2.s6(bY.dZ.data[106].value, 8), b4.w(30, bY.dZ.data[109].value), aq.kt.send(wR, b4.a0)
	}, this.aHh = function() {
		b4.v(55), b4.w(1, 0), b4.w(6, 18), b6.q2.s5(bY.dZ.data[110].value), aq.kt.send(0, b4.a0)
	}, this.aHU = function(username) {
		b4.v(12 + 16 * username.length), b4.w(1, 0), b4.w(6, 20), aq.a6X.aKI(username), aq.kt.send(0, b4.a0)
	}, this.aHd = function(yy) {
		var eI = yy.od.length;
		b4.v(21 + 16 * eI), b4.w(1, 0), b4.w(6, 29), b4.w(6, yy.q1), b4.w(8, eI), b5.rs.s5(yy.od), aq.kt.send(0, b4.a0)
	}, this.aGI = function(data) {
		b4.v(73), b4.w(1, 0), b4.w(6, 25), b4.w(6, data.q1), b6.q2.s6(data.px, 5), b4.w(30, data.py), aq.kt.send(0, b4.a0)
	}, this.aGB = function(data) {
		b4.v(105), b4.w(1, 0), b4.w(6, 27), b4.w(6, data.q1), b6.q2.s6(data.px, 5), b4.w(30, data.py), b4.aJp(32, data.value), aq.kt.send(0, b4.a0)
	}
}

function aIt() {
	this.ny = function() {
		var fo, eI = a1.jN,
			v1 = bH.result.v1,
			aKJ = v1.length,
			vo = (b4.v(40 + 16 * eI + aKJ * (33 + 3 * (a1.jl < 7))), b4.w(1, 1), b4.w(4, 12), b4.w(10, aKJ), b4.w(1, +(2 === a1.v6)), b4.w(24, bH.result.vb), aV.vo);
		for (z = 0; z < eI; z++) b4.w(16, vo[z]);
		var g6 = aV.g6;
		for (z = 0; z < aKJ; z++) fo = v1[z], b4.w(9, fo), b4.w(24, g6[fo]);
		if (a1.jl < 7)
			for (var eG = bV.eG, vU = bV.vU, z = 0; z < aKJ; z++) b4.w(3, 7 & vU[eG[v1[z]]]);
		aq.kt.send(aq.kt.wX, b4.a0)
	}
}

function aIu() {
	this.aHW = function(qG, qH, qI) {
		b4.v(75), b4.w(1, 0), b4.w(6, 21), b4.w(6, qG), b4.w(1, +(qH < 0)), b4.w(1, +(qI < 0)), b4.w(30, Math.abs(qH)), b4.w(30, Math.abs(qI)), aq.kt.send(0, b4.a0)
	}, this.aHX = function(qG, aHY, aHZ) {
		b4.v(18 + 16 * aHY.length + 30), b4.w(1, 0), b4.w(6, 22), b4.w(6, qG), aq.a6X.aKI(aHY), b4.w(30, aHZ), aq.kt.send(0, b4.a0)
	}, this.aHc = function(qG, aHY, aHZ) {
		b4.v(73), b4.w(1, 0), b4.w(6, 28), b4.w(6, qG), b6.q2.s6(aHY, 5), b4.w(30, aHZ), aq.kt.send(0, b4.a0)
	}, this.aHa = function(aGn, vw) {
		for (var eI = vw.length, gv = 0, z = 0; z < eI; z++) gv += vw[z].length;
		for (b4.v(21 + 3 * eI + 16 * gv), b4.w(1, 0), b4.w(6, 23), b4.w(3, aGn), b4.w(4, eI), b4.w(7, gv), z = 0; z < eI; z++) b4.w(3, vw[z].length), b5.rs.s5(vw[z]);
		aq.kt.send(0, b4.a0)
	}, this.aHb = function(aGn, qH, qI) {
		b4.v(52), b4.w(1, 0), b4.w(6, 24), b4.w(3, aGn), b4.w(1, +(qH < 0)), b4.w(1, +(qI < 0)), b4.w(20, Math.abs(qH)), b4.w(20, Math.abs(qI)), aq.kt.send(0, b4.a0)
	}
}

function aIq() {
	this.a7a = function(wR) {
		var username = bY.dZ.data[122].value.slice(0, 20),
			username = (b4.v(22 + 16 * username.length + 18), b4.w(1, 0), b4.w(6, 1), b4.w(10, dV), aq.a6X.aKI(username), b2.color.yB(bY.kt.rW()));
		b4.w(6, username[0]), b4.w(6, username[1]), b4.w(6, username[2]), aq.kt.wW = wR, aq.kt.send(wR, b4.a0)
	}, this.a8u = function(a8h) {
		return b4.v(11), b4.w(1, 0), b4.w(6, 2), b4.w(4, a8h), aq.kt.send(aq.kt.wW, b4.a0), !0
	}
}

function aIr() {
	this.aJH = function(wR) {
		b4.v(39), b4.w(1, 0), b4.w(6, 13), b4.w(14, e.dW), b4.w(4, m.id), b4.w(7, m.em), b4.w(1, +x), b4.w(1, +y), b4.w(5, (new Date).getHours() % 24), aq.kt.send(wR, b4.a0)
	}, this.aK8 = function(wR, aK6, aJl) {
		b4.v(70), b4.w(1, 0), b4.w(6, 14), b4.w(3, aJl), b4.w(30, aK6[0]), b4.w(30, aK6[1]), aq.kt.send(wR, b4.a0)
	}, this.aHT = function(id) {
		b4.v(13), b4.w(1, 0), b4.w(6, 15), b4.w(6, id), aq.kt.send(0, b4.a0)
	}, this.a6Y = function(id, od) {
		var eI = Math.min(od.length, 63);
		b4.v(19 + 16 * eI), b4.w(1, 0), b4.w(6, 26), b4.w(6, id), b4.w(6, eI), b5.rs.s5(od), aq.kt.send(0, b4.a0)
	}, this.aKK = function(aJg, op) {
		b4.v(7 + 26 * op.length), b4.w(1, 0), b4.w(6, 9);
		for (var z = 0; z < op.length; z++) b4.w(16, op[z][0]), b4.w(10, op[z][1]);
		aq.kt.send(aJg, b4.a0)
	}, this.aJM = function(aKL, aAR) {
		b4.v(20), b4.w(1, 0), b4.w(6, 19), b4.w(1, aKL), b4.w(12, aAR), aq.kt.send(aq.kt.wX, b4.a0)
	}, this.aKI = function(username) {
		b4.w(5, username.length), b5.rs.s5(username)
	}
}

function aJF() {
	var wR, aFX, b, aKM = ["wss://", "/s50/", "/s51/", "/s52/"];

	function aJG() {
		aq.kt.aJG(wR, aFX)
	}

	function aKR(d) {
		aq.a1Q.aJO(wR, new Uint8Array(d.data))
	}

	function aKS() {}

	function aJL(d) {
		aq.kt.aJL(wR, d)
	}
	this.dH = function(o0, aKN) {
		wR = o0, aFX = aKN;
		o0 = aKM[0];
		wR < aq.kt.a81 ? o0 += aq.kt.aJ5[wR] + aKM[1 + dS] : o0 += aq.kt.aJ5[0] + "/i" + (1 + dS) + (wR - aq.kt.a82) + "/", (b = new WebSocket(__fx.customLobby.isActive() && wR === 1 ? __fx.customLobby.getSocketURL() : o0)).binaryType =
			"arraybuffer", b.onopen = aJG, b.onmessage = aKR, b.onclose = aJL, b.onerror = aKS
	}, this.aKP = function() {
		return b.readyState === b.CONNECTING
	}, this.a7S = function() {
		return b.readyState === b.OPEN
	}, this.di = function() {
		return this.aKP() || this.a7S()
	}, this.aJD = function(aKN) {
		aFX = aKN
	}, this.aKA = function() {
		return aFX
	}, this.send = function(a0) {
		this.a7S() && b.send(a0)
	}, this.close = function(aJI) {
		this.di() && (b.close(aJI), this.qK())
	}, this.qK = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function d4() {
	var aKT = !1,
		a1m = 0,
		t = 0,
		q7 = 0,
		gap = 0,
		h0 = null,
		tU = null,
		xu = null;

	function aKV() {
		for (var a8W, aKa = 0, eI = 0, ed = Math.floor(t / 2), h3 = Math.floor(q7 / 2), a8V = 1.5 * Math.PI, z = a1.zU; 0 <= z; z--) eI += xu[z], 0 === xu[z] && aKa++;
		if (aKT = !1, tU.clearRect(0, 0, t, t), tU.fillStyle = p.mI, tU.fillRect(0, 0, t, t), tU.fillStyle = p.mL, tU.fillRect(0, 0, t, gap), tU.fillRect(0, 0, gap, t), tU.fillRect(t - gap, 0, gap, t), tU.fillRect(0, t - gap, t, gap), 0 < eI)
			if (aKa === a1.zU) {
				for (z = a1.zU; 0 <= z; z--)
					if (0 < xu[z]) {
						! function(z, ed, h3) {
							tU.fillStyle = bV.a8a[bV.vU[z]], tU.beginPath(), tU.arc(ed, ed, h3, 0, 2 * Math.PI), tU.fill()
						}(z, ed, h3);
						break
					}!
				function(ed) {
					var fontSize = ed / 3;
					tU.font = b2.ow.q5(1, fontSize), tU.fillStyle = p.mL, tU.fillText("100%", ed, ed + .1 * fontSize)
				}(ed)
			} else {
				for (z = 0; z <= a1.zU; z++) 0 < xu[z] && (! function(z, ed, h3, a8V, a8W) {
					tU.fillStyle = bV.a8a[bV.vU[z]], tU.beginPath(), tU.arc(ed, ed, h3, a8V, a8W), tU.lineTo(ed, ed), tU.fill()
				}(z, ed, h3, a8V, a8W = a8V + 2 * Math.PI * xu[z] / eI), function(ed, h3, a8V, a8W) {
					var el = (a8W - a8V) / (2 * Math.PI),
						fontSize = +h3 * Math.min(el, .37);
					fontSize < 8 || (a8V = (a8V + a8W) / 2, a8W = Math.floor(100 * el + .5) + "%", h3 *= .525 - Math.max(.6 * (el - .7), 0), tU.font = b2.ow.q5(1, fontSize), tU.fillStyle = p.mL, tU.fillText(a8W, ed + Math.cos(a8V) * h3, ed +
						Math.cos(a8V + 1.5 * Math.PI) * h3))
				}(ed, h3, a8V, a8W), 0 !== z && a8Y(ed, h3, a8V), a8V = a8W);
				a8Y(ed, h3, 1.5 * Math.PI)
			}!
		function(ed, h3) {
			tU.beginPath(), tU.arc(ed, ed, h3, 0, 2 * Math.PI), tU.stroke()
		}(ed, h3)
	}

	function a8Y(ed, h3, a8b) {
		tU.beginPath(), tU.moveTo(ed, ed), tU.lineTo(ed + Math.cos(a8b) * h3, ed + Math.cos(a8b + 1.5 * Math.PI) * h3), tU.stroke()
	}
	this.dH = function() {
		if (a1.iN) {
			var z;
			for (a1m = 0, xu = new Uint32Array(a1.zU + 1), z = a1.zU; 0 <= z; z--) xu[z] = 0;
			for (z = aa.jO - 1; 0 <= z; z--) xu[bV.eG[aa.jQ[z]]] += 1;
			this.resize()
		} else xu = tU = h0 = null
	}, this.a2b = function() {
		return t
	}, this.resize = function() {
		a1.iN && (t = Math.floor(m.n.uE() && !a1.ln ? .18 * an.min : .13 * an.oy), t = (t *= 1 + (.5 + .2 * m.n.uE()) * a1.ln) + t % 2, q7 = Math.floor(7 * t / 8), (h0 = h0 || document.createElement("canvas")).width = t, h0.height = t, tU = h0
			.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * t), tU.lineWidth = gap, tU.strokeStyle = p.mL, b2.ow.textAlign(tU, 1), b2.ow.textBaseline(tU, 1), aKV())
	}, this.vk = function() {
		return xu[this.kd()]
	}, this.wB = function() {
		return a1m = 31, this.iC(), this.kd()
	}, this.kd = function() {
		for (var aKW = 0, z = a1.zU; 0 < z; z--) xu[z] > xu[aKW] && (aKW = z);
		return aKW
	}, this.kc = function(aKX) {
		for (var fj = 0, jP = aa.jQ, eG = bV.eG, eI = aa.jO, ew = bE.ew, z = 0; z < eI; z++) {
			var fo = jP[z];
			eG[fo] === aKX && (ew[fj++] = fo)
		}
		bE.ep[0] = fj
	}, this.aKY = function() {
		for (var fj = 0, z = a1.zU; 0 < z; z--) 0 < xu[z] && fj++;
		return fj
	}, this.iC = function() {
		if (a1.iN && 32 <= ++a1m) {
			var z;
			for (a1m = 0, z = a1.zU; 0 <= z; z--) xu[z] = 0;
			for (z = aa.jO - 1; 0 <= z; z--) xu[bV.eG[aa.jQ[z]]] += aV.g6[aa.jQ[z]];
			aKT = !0
		}
	}, this.l2 = function() {
		a1.iN && aKT && aKV()
	}, this.qn = function() {
		a1.iN && (a1.ln ? qo.drawImage(h0, bR.gap, bR.gap) : qo.drawImage(h0, bR.gap, a2c + 2 * bR.gap))
	}
}

function cn() {
	function aKf(key) {
		var aIF;
		return "undefined" == typeof URLSearchParams || (aIF = window.location.search, "string" != typeof(aIF = new URLSearchParams(aIF).get(key))) || aIF.length < 1 ? null : aIF
	}
	this.dP = function() {
		if (0 !== m.id) return !1;
		if (! function() {
				var value = aKf("account");
				if (!value && !(value = aKf("a"))) return void b8.clear();
				return b8.clear(), i.j(8, i.pz, new q0(1e3, {
					q1: 0,
					px: value,
					py: 0
				})), 1
			}()) {
			var value = aKf("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			i.j(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var wO = new URL(window.location.href);
		wO.search = "";
		try {
			return history.replaceState(null, "", wO.toString()), !0
		} catch (d) {
			console.log("error 352: " + d)
		}
		return !1
	}, this.aGV = function(key, value) {
		if (0 === m.id) try {
			var wO = new URL(window.location.href),
				fo = wO.searchParams;
			fo.set(key, value), wO.search = fo.toString(), history.replaceState(null, "", wO.toString())
		} catch (d) {
			console.log("error 358: " + d)
		}
	}
}

function cS() {
	var aKh, ey;
	this.dH = function() {
		for (var z = (ey = new Uint16Array(101)).length - 1; 0 <= z; z--) ey[z] = bB.ek(32768 * z, 100);
		this.ze(0)
	}, this.value = function(fo) {
		return ey[fo]
	}, this.aDt = function() {
		return bB.ek(aKh - 1, 2)
	}, this.ze = function(aDb) {
		aKh = 2 * aDb % 32768 + 1
	}, this.random = function() {
		return aKh = 167 * aKh % 32768
	}, this.ic = function(lD) {
		return bB.ek(lD * this.random(), 32768)
	}, this.jF = function(fo) {
		return 0 !== fo && this.random() < this.value(fo)
	}, this.hy = function(eb, ec) {
		return eb + this.ic(ec - eb)
	}
}

function ck() {
	this.oF = new aKi, this.aII = new aKj, this.aIM = new aKk, this.dH = function(zX, tb, zZ, za) {
		var aKl;
		a1.gR || ((aKl = {}).zY = a1.e2, aKl.zX = zX, aKl.tb = tb, aKl.zZ = zZ, aKl.za = za, aKl.a8j = bI.fz, aKl.a8k = bI.a8g, aO.a9C(aKl), this.oF.dH(aKl))
	}, this.iC = function() {
		a1.gR || (this.oF.iC(), 3 !== i.pz) || bU.jK() % 15 != 5 && 2 !== a1.v9 || i.a9d().aIG()
	}, this.aIL = function() {
		var qL = this.oF.aKl;
		0 === a1.v9 && aN.a7m(), bI.v(qL.a8j, qL.a8k), 1 === qL.tb.length && (aO.a97(qL.zZ), aO.a99(qL.a9A, qL.a9B)), aq.kt.close(aq.kt.wX, 3257), aq.kt.wX = 0, a1.zW(qL.zX, qL.zY, qL.tb, qL.zZ, qL.za, !0)
	}, this.aIK = function(od) {
		var z = od.indexOf("=");
		return 0 <= z ? od.substring(z + 1) : od
	}, this.aIJ = function(od) {
		return "https://territorial.io/?replay=" + od
	}
}

function aKi() {
	this.aKn = null, this.aKo = null, this.aKp = null, this.aKq = null, this.aKr = null, this.aKs = null;
	var aKt = 0;
	this.aKl = null, this.aIH = "", this.dH = function(aKl) {
		this.aKn = [], this.aKo = [], this.aKp = [], this.aKq = [], this.aKr = [0], this.aKs = [0], aKt = 0, this.aKl = aKl, this.aIH = ""
	}, this.oG = function(id, ez, f1, f3) {
		a1.gR || 2 === a1.v9 || (0 === this.aKr[aKt] && (this.aKs[aKt] ? (this.aKr.push(1), this.aKs.push(0), aKt++) : this.aKr[aKt] = 1), this.aKn.push(id), this.aKo.push(ez), this.aKp.push(void 0 === f1 ? 0 : f1), this.aKq.push(void 0 === f3 ?
			0 : f3), this.aKs[aKt]++)
	}, this.iC = function() {
		0 === this.aKr[aKt] ? this.aKs[aKt]++ : (this.aKr.push(0), this.aKs.push(0), aKt++)
	}
}

function aKk() {
	function aKz(od, aL1) {
		aL1 ? aA.a0q = L(323) + ": " + od : i.j(4, 3, new k("⚠️ " + L(323), od, !0))
	}
	this.sA = function(od) {
		if (b6.q2.s2(b6.q2.s0(b6.q2.ry(od))), aA.a0q = "", ! function() {
				if (b7.size < 10) aKz("File Too Small");
				else if (b7.o1(9) !== dU && aKz("Incompatible Version Error", !0), b7.o1(31) !== b7.size) aKz("Size Error");
				else {
					if (function(ir) {
							var z, fo = b7.a0,
								eI = b7.size,
								aAR = 0;
							for (z = 7; z < eI; z++) aAR = aAR + fo[z] & 65535;
							return aAR === ir
						}(b7.o1(16))) return 1;
					aKz("Hash Error")
				}
				return
			}()) return !1;
		var aKl;
		(aKl = {}).zY = b7.o1(9), aKl.zX = b7.o1(14), aKl.zZ = b7.o1(4), aKl.za = 1 === b7.o1(1), aKl.a8j = b7.o1(6), aKl.a8k = b7.o1(14), aKl.aL2 = b7.o1(10), b1.oF.aKl = aKl,
			function() {
				var z, a9H, a9G, name, eI = b1.oF.aKl.aL2,
					tb = [];
				for (z = 0; z < eI; z++) a9H = b7.o1(1), a9G = [b7.o1(6), b7.o1(6), b7.o1(6)], name = b6.rs.ru(b7.o1(5)), tb.push({
					name: name,
					a9G: a9G,
					a9H: a9H
				});
				if (b1.oF.aKl.tb = tb, 8 === b1.oF.aKl.zZ)
					for (z = 0; z < eI; z++) tb[z].tf = b7.o1(14)
			}();
		var z, eI, aL3 = b1.oF.aKl;
		if (1 === aL3.tb.length)
			for (eI = 6 < aL3.zZ ? 1 : aL3.zZ + 2, aL3.a9A = new Array(eI), aL3.a9B = new Array(eI), z = 0; z < eI; z++) aL3.a9A[z] = b7.o1(3), aL3.a9B[z] = b7.o1(9) + 1;
		return !! function() {
			var sB = b7.o1(5),
				aL4 = b7.o1(30),
				aL5 = b7.o1(30);
			if (aL4 + aL5 > 8 * b7.size) return void aKz("Corrupted File");
			return function(eI) {
					var z, id, aL8 = new Uint8Array(eI),
						aL9 = new Uint16Array(eI),
						aLA = new Uint32Array(eI),
						aLB = new Uint32Array(eI);
					for (b1.oF.aKn = aL8, b1.oF.aKo = aL9, b1.oF.aKp = aLA, b1.oF.aKq = aLB, z = 0; z < eI; z++) aL8[z] = id = b7.o1(4), aL9[z] = b7.o1(9), 0 === id ? aLA[z] = b7.o1(22) : 1 === id ? (aLA[z] = b7.o1(10), aLB[z] = b7.o1(10)) :
						2 === id ? (aLA[z] = b7.o1(10), aLB[z] = b7.o1(9)) : 3 === id || 4 === id ? (aLA[z] = b7.o1(10), aLB[z] = b7.o1(22)) : 5 === id || 6 === id ? aLA[z] = b7.o1(10) : 7 === id ? aLA[z] = b7.o1(1) : 10 === id && (aLA[z] =
							b7.o1(20), aLB[z] = b7.o1(22))
				}(aL4),
				function(eI, sB) {
					var z, aKr = new Uint8Array(eI),
						aKs = new Array(eI);
					for (aKs.fill(0), b1.oF.aKr = aKr, b1.oF.aKs = aKs, z = 0; z < eI; z++) aKr[z] = b7.o1(1), aKs[z] = b7.o1(sB)
				}(aL5, sB), 1
		}() && (b7.o0 < 8 * b7.size - 13 || b7.o0 > 8 * b7.size ? (aKz("Out Of Bounds Error: " + b7.o0 + " " + 8 * b7.size), !1) : (b1.oF.aIH = od, !0))
	}
}

function aKj() {
	this.ug = function() {
		var aL3, sB = function() {
				var z, aKs = b1.oF.aKs,
					eI = aKs.length,
					max = 0;
				for (z = 0; z < eI; z++) max = Math.max(max, aKs[z]);
				return sG(Math.max(max, 1))
			}(),
			aLD = function(sB) {
				return 179 + function() {
					var z, tb = b1.oF.aKl.tb,
						eI = tb.length,
						aLD = 24 * eI;
					for (z = 0; z < eI; z++) aLD += 16 * tb[z].name.length;
					8 === b1.oF.aKl.zZ && (aLD += 14 * eI);
					return aLD
				}() + (1 === b1.oF.aKl.tb.length ? 12 * b1.oF.aKl.a9A.length : 0) + function() {
					var z, aKn = b1.oF.aKn,
						eI = aKn.length,
						aLD = 13 * eI,
						aLO = [22, 20, 19, 32, 32, 10, 10, 1, 0, 0, 42];
					for (z = 0; z < eI; z++) aLD += aLO[aKn[z]];
					return aLD
				}() + function(sB) {
					return b1.oF.aKs.length * (1 + sB)
				}(sB)
			}(sB);
		b4.v(aLD + (6 - aLD % 6) % 6), aL3 = b1.oF.aKl, b4.w(9, dU), b4.w(31, b4.size), b4.o0 += 16, b4.w(9, aL3.zY), b4.w(14, aL3.zX), b4.w(4, aL3.zZ), b4.w(1, aL3.za), b4.w(6, aL3.a8j), b4.w(14, aL3.a8k), b4.w(10, aL3.tb.length);
		var z, tb = b1.oF.aKl.tb,
			eI = tb.length;
		for (z = 0; z < eI; z++) b4.w(1, tb[z].a9H), b4.w(18, (tb[z].a9G[0] << 12) + (tb[z].a9G[1] << 6) + tb[z].a9G[2]), b4.w(5, tb[z].name.length), b5.rs.s5(tb[z].name);
		if (8 === b1.oF.aKl.zZ)
			for (z = 0; z < eI; z++) b4.w(14, tb[z].tf);
		return function() {
				var z, aL3 = b1.oF.aKl;
				if (1 === aL3.tb.length)
					for (z = 0; z < aL3.a9A.length; z++) b4.w(3, aL3.a9A[z]), b4.w(9, aL3.a9B[z] - 1)
			}(),
			function(sB) {
				var z, aKn = b1.oF.aKn,
					ez = b1.oF.aKo,
					f1 = b1.oF.aKp,
					f3 = b1.oF.aKq,
					eI = aKn.length;
				for (b4.w(5, sB), b4.w(30, eI), b4.w(30, b1.oF.aKs.length), z = 0; z < eI; z++) b4.w(4, aKn[z]), b4.w(9, ez[z]), 0 === aKn[z] ? b4.w(22, f1[z]) : 1 === aKn[z] ? (b4.w(10, f1[z]), b4.w(10, f3[z])) : 2 === aKn[z] ? (b4.w(10, f1[z]),
					b4.w(9, f3[z])) : 3 === aKn[z] || 4 === aKn[z] ? (b4.w(10, f1[z]), b4.w(22, f3[z])) : 5 === aKn[z] || 6 === aKn[z] ? b4.w(10, f1[z]) : 7 === aKn[z] ? b4.w(1, f1[z]) : 10 === aKn[z] && (b4.w(20, f1[z]), b4.w(22, f3[z]))
			}(sB),
			function(sB) {
				var z, aKr = b1.oF.aKr,
					aKs = b1.oF.aKs,
					eI = aKr.length;
				for (z = 0; z < eI; z++) b4.w(1, aKr[z]), b4.w(sB, aKs[z])
			}(sB), b4.o0 !== aLD && aA.wY("Encoder Index Error: " + b4.o0 + " " + aLD), b4.o0 = 40, b4.w(16, function() {
				var z, fo = b4.a0,
					eI = b4.size,
					aAR = 0;
				for (z = 7; z < eI; z++) aAR = aAR + fo[z] & 65535;
				return aAR
			}()), b7.dH(b4.a0), b5.q2.q3(b5.q2.q4(bB.ek(aLD - 1, 6) + 1))
	}
}

function cX() {
	var ed, bc = !1,
		aLP = !1,
		aLQ = -1e4,
		aLR = -1,
		aLS = 0;

	function resize(aLW) {
		ed = 0, aP.qP() && (aLU(aLW) || bc) && (bc = !1, bR.resize(), bM.a69.resize(), aL.dH(), bN.dH(), aM.resize(), aG.resize(), aB.resize(), i.resize(), 1 <= a1.v9 ? (aI.resize(!1), aH.resize(), aJ.resize(), aF.resize(), aE.resize(), aA.resize(),
			a9.resize(), b3.resize(), al.resize(), aC.resize(), aD.resize(), a8.resize(), bT.resize(), aU.resize(), aK.resize(), bW.resize(), aF.a3d()) : (2 === aN.wU() && aO.resize(), aN.a7o(), aN.a7p()), bU.dO = !0)
	}

	function aLT(el) {
		return el && 128 < el ? Math.floor(el) : 128
	}

	function aLU(aLW) {
		var t, ir, aLY, q7, a32;
		if (!(0 < an.pj)) return q7 = aLT(document.documentElement.clientWidth), a32 = aLT(window.visualViewport && 2 !== m.id ? window.visualViewport.height : document.documentElement.clientHeight), t = q7, ir = a32, aLY = 0 !== m.id || t < ir ?
			700 : 1200, aLY = Math.min(aLY / ((t + ir) / 2), 1), aLY = 0 === bY.dZ.data[1].value ? 2 * aLY / 3 : Math.min(aLY + (bY.dZ.data[1].value - 1) * (1 - aLY) / 2, 1), an.p2 = (window.devicePixelRatio || 1) * aLY, __fx.hoveringTooltip
			.canvasPixelScale = an.p2, aLW && !aLP ? (aLP = !0, document.body.removeChild(wp)) : aLP && (aLP = !1, document.body.appendChild(wp)), t = Math.floor(.5 + q7 * an.p2), ir = Math.floor(.5 + a32 * an.p2), t !== an.t || ir !== an.ir ? (
				an.t = t, an.ir = ir, an.min = a4U(t, ir), an.max = a17(t, ir), an.oy = bB.ek(t + ir, 2), an.qi = t / ir, wp.width = t, wp.height = ir, wp.style.width = q7 + "px", wp.style.height = a32 + "px", aLR = bU.ds + 1e3, 1) : void 0
	}
	this.t = 0, this.ir = 0, this.min = 0, this.max = 0, this.oy = 0, this.qi = 1, this.p2 = 1, this.pj = 0, this.dI = function() {
		this.t = aLT(document.documentElement.clientWidth) + 2, this.ir = aLT(document.documentElement.clientHeight) + 2
	}, this.dH = function() {
		ed = 1, wp = document.getElementById("canvasA"), (qo = wp.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aLU(0)
	}, this.iC = function() {
		at.iC(), 50 <= ++ed && resize(0), -1 === aLR || bU.ds < aLR || (aLR = -1, 2e3 * ++aLS >= bU.ds + 8e3 ? console.log("error 3748") : m.n.setState(15))
	}, this.dR = function(hF) {
		bc = !0, resize(hF)
	}, this.xX = function() {
		aLQ + 1e3 > bU.ds || (aLQ = bU.ds, resize(0))
	}
}

function d1() {
	this.aK7 = new aLa, this.vi = new aLb
}

function aLb() {
	this.vj = function() {
		for (var fo, eI = aa.jO, tb = aa.jQ, vo = aV.vo, a7w = this.aAl(), z = 0; z < eI; z++) fo = tb[z], aQ.v2(fo) && (vo[fo] = a7w);
		var oL = aV.oL,
			iK = aV.iK,
			iL = aV.iL,
			vu = aV.vu,
			eI = a1.jN;
		for (z = 0; z < eI; z++)(0 === vu[z] || iL[z] < 1 || 2 * oL[z] > 3 * (iK[z] + iL[z])) && (vo[z] = 0);
		var va = 0;
		for (z = 0; z < eI; z++) va += 0 < vo[z];
		return va
	}, this.aAl = function() {
		return Math.min(65535, bU.jK())
	}
}

function aLa() {
	function aLf(ey, el, kB) {
		for (var z = 0; z < 256; z++) ey[z] = (ey[z] + (el >> (z + kB) % 30 & 1)) % 256
	}
	this.iC = function(aLc, aLd) {
		var ey = new Uint8Array(256);
		return function(ey, aLc, aLd) {
				var z, aLh = 3 + (4 + aLc) % 32768,
					aLi = 12 + aLd % 32768,
					aLj = 17 + ((aLc & aLd) + (aLc | aLd) + aLc) % 32768;
				for (z = 0; z < 256; z++) aLh = 1 + aLh * aLi % aLj, ey[z] = aLh % 256
			}(ey, aLc, aLd), aLf(ey, aLc, 2), aLf(ey, aLd, 7),
			function(ey) {
				var z, el, o0 = 0;
				for (z = 0; z < 3e4; z++) el = ey[o0], ey[o0] = (el + z + ey[(o0 + z) % 256]) % 256, o0 = (el + z + o0 + (el & o0)) % 256
			}(ey),
			function(ey) {
				var z, a32 = 1,
					a9K = 1;
				for (z = 0; z < 256; z += 2) a32 = (1 + a32) * (ey[z] + 1) % 1073741824, a9K = (1 + a9K) * (ey[z + 1] + 1) % 1073741824;
				return [a32, a9K]
			}(ey)
	}
}

function cU() {
	var aLk, aLl, gk, aLm;
	this.dH = function() {
		var z, eP, eR, a9G, aLn, t, ir, tU, gx, sQ, el, fo, eY, eb, a0F;
		if (function() {
				if (gk = !0, aLm = "rgb(" + bI.sO[0] + "," + bI.sO[1] + "," + bI.sO[2] + ")", bI.aDh(bI.fz)) return 1;
				return gk = !1, 0
			}()) aLl = null;
		else {
			for (aLk = bB.ek(96, 4), aLn = 1 === bI.fz ? (a9G = 0, 160) : (a9G = 128, 32), aLm = "rgb(" + a9G + "," + a9G + "," + a9G + ")", aLl = new Array(4), z = 3; 0 <= z; z--) {
				if (aLl[z] = document.createElement("canvas"), t = z % 2 == 0 ? bI.eT : aLk, ir = z % 2 == 0 ? aLk : bI.eU + 2 * aLk, aLl[z].width = t, aLl[z].height = ir, sQ = (gx = (tU = aLl[z].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, t, ir)).data, z % 2 == 0)
					for (eR = aLk - 1; 0 <= eR; eR--)
						for (el = aLn + Math.floor((eR + 1) * (a9G - aLn) / (aLk + 1)), eP = t - 1; 0 <= eP; eP--) sQ[fo = 4 * ((0 === z ? aLk - eR - 1 : eR) * t + eP)] = el, sQ[fo + 1] = el, sQ[fo + 2] = el, sQ[fo + 3] = 255;
				else {
					for (eP = aLk - 1; 0 <= eP; eP--)
						for (el = aLn + Math.floor((eP + 1) * (a9G - aLn) / (aLk + 1)), eR = ir - 1 - aLk; aLk <= eR; eR--) sQ[fo = 4 * (eR * t + (3 === z ? aLk - eP - 1 : eP))] = el, sQ[fo + 1] = el, sQ[fo + 2] = el, sQ[fo + 3] = 255;
					for (eb = 1; 0 <= eb; eb--)
						for (eP = aLk - 1; 0 <= eP; eP--)
							for (eR = aLk - 1; 0 <= eR; eR--) eY = (Math.pow(eP * eP + eR * eR, .5) + 1) / (aLk + 1), el = aLn + Math.floor((1 < eY ? 1 : eY) * (a9G - aLn)), sQ[fo = 4 * ((0 === eb ? aLk - eR - 1 : eR + eb * (ir - aLk)) * t + (
								1 === z ? eP : aLk - eP - 1))] = el, sQ[fo + 1] = el, sQ[fo + 2] = el, sQ[fo + 3] = 255
				}
				tU.putImageData(gx, 0, 0)
			}
			a0F = aLn, bI.sJ.fillStyle = "rgb(" + a0F + "," + a0F + "," + a0F + ")", bI.sJ.fillRect(0, 0, bI.eT, 1), bI.sJ.fillRect(0, bI.eU - 1, bI.eT, 1), bI.sJ.fillRect(0, 0, 1, bI.eU), bI.sJ.fillRect(bI.eT - 1, 0, 1, bI.eU)
		}
	}, this.tO = function() {
		var eb = gk ? 0 : -aLk;
		aFG(eb, eb, bI.eT - 2 * eb, bI.eU - 2 * eb, bP.aLq, bP.aLr, bP.aLs, bP.aLt) || (qo.fillStyle = aLm, qo.fillRect(0, 0, an.t, an.ir))
	}, this.qn = function() {
		gk || (aFF(0, -aLk, bI.eT, aLk, bP.aLq, bP.aLr, bP.aLs, bP.aLt) && qo.drawImage(aLl[0], bP.aLu, bP.aLv - aLk), aFF(bI.eT, -aLk, aLk, bI.eU + 2 * aLk, bP.aLq, bP.aLr, bP.aLs, bP.aLt) && qo.drawImage(aLl[1], bP.aLu + bI.eT, bP.aLv - aLk),
			aFF(0, bI.eU, bI.eT, aLk, bP.aLq, bP.aLr, bP.aLs, bP.aLt) && qo.drawImage(aLl[2], bP.aLu, bP.aLv + bI.eU), aFF(-aLk, -aLk, aLk, bI.eU + 2 * aLk, bP.aLq, bP.aLr, bP.aLs, bP.aLt) && qo.drawImage(aLl[3], bP.aLu - aLk, bP.aLv - aLk))
	}
}

function cq() {
	this.gl = new aLw, this.aAj = new aLx, this.tR = new aLy, this.kt = new aLz, this.ho = new aM0, this.a0F = new aM1, this.aM2 = new aM3, this.jB = new aM4, this.k3 = new aM5, this.aM6 = new aM7, this.dH = function() {
		this.tR.dH(), this.kt.dH(), this.ho.dH(), this.a0F.dH(), this.aM6.dH()
	}, this.qn = function() {
		this.aM6.qn(), this.tR.qn()
	}
}

function aM4() {
	this.iC = function(player) {
		var oC;
		return 0 !== aV.fx[player].length && bD.kt.oD !== bD.kt.je && !((oC = bD.kt.oC[player]) >= a2.je[a2.iU[player]] || oC === bD.kt.oP || !b2.fd.oJ(player, a2.jc[a2.iU[player]], 32, 0) || !ac.i1.iC(player) && !ac.i3.iC(player) || ! function(
			yd) {
			var aMA = bE.eu[1] + bC.h4[bE.eu[2] - 1] << 2;
			if (aQ.e9(aMA)) return 1;
			return aMA = aQ.eA(aMA), yd !== aMA && !!eB(yd, aMA)
		}(player)) && function(player) {
			return b2.fd.oM(player), bD.kt.oQ(player), !0
		}(player)
	}
}

function aLw() {
	function aMP(z, kU, kV) {
		var aMR, aMQ;
		if (!(z < 0)) return aMQ = bD.kt.lj[z], aMR = bC.hT(aMQ), aMQ = bC.hW(aMQ), z = 20 * (.9 + .1 * Math.log10(bD.kt.a1P[z])), bB.aFN(bC.hS(kU), bC.hV(kV), aMR, aMQ, z)
	}

	function aMJ(aMI) {
		var aMU = 4 + .03 * (1 + 1.5 * m.n.uE()) * an.oy / hh;
		return bC.hX(aMI, bE.eu[1]) < aMU
	}
	this.gm = function(player, aMI) {
		return !!bC.hj(aMI) && bD.kt.oD !== bD.kt.je && bD.kt.oC[player] !== bD.kt.oP && 0 !== aV.fx[player].length && !!bD.k3.k4(player, aMI) && !!aMJ(aMI)
	}, this.nV = function(player, lg, aMI) {
		return !!(bC.hj(aMI) && this.oR(player, lg) && bD.k3.oS(aMI) && aMJ(aMI))
	}, this.oR = function(player, id) {
		for (var aMK, qH = player << 3, qI = qH + bD.kt.oC[player], aML = bD.kt.aML, aMM = bD.kt.aMM, z = qH; z < qI; z++)
			if (id === aMM[aMK = aML[z]]) return bE.eu[3] = aMK, !0;
		return !1
	}, this.nU = function(e4) {
		var a0G = bD.a0F.a0G;
		return !!this.oR(a1.e2, a0G) && (b0.ge.nU(a0G, e4), !0)
	}, this.a0H = function(kU, kV) {
		var player = a1.e2,
			eI = bD.kt.oC[player];
		if (0 === eI) return !1;
		for (var aML = bD.kt.aML, lj = bD.kt.lj, qH = player << 3, aMN = 80, aH1 = -1, z = qH + eI - 1; qH <= z; z--) {
			var aMO = aML[z],
				eY = bC.hN(kU, kV, lj[aMO]);
			eY < aMN && (aMN = eY, aH1 = aMO)
		}
		return !!aMP(aH1, kU, kV) && (bD.a0F.a0G = bD.kt.aMM[aH1], !0)
	}, this.a0O = function(kU, kV) {
		var eI = bD.kt.oD;
		if (eI < 1) return -1;
		for (var lj = bD.kt.lj, aMN = 80, aH1 = -1, z = 0; z < eI; z++) {
			var eY = bC.hN(kU, kV, lj[z]);
			eY < aMN && (aMN = eY, aH1 = z)
		}
		return aMP(aH1, kU, kV) ? aH1 : -1
	}, this.li = function(player, id) {
		for (var qH = player << 3, qI = qH + bD.kt.oC[player], aMM = bD.kt.aMM, aML = bD.kt.aML, z = qH; z < qI; z++) {
			var aMO = aML[z];
			if (aMM[aMO] === id) return aMO
		}
		return -1
	}, this.lo = function(player) {
		return 0 === bD.kt.oC[player] ? -1 : bD.kt.aML[player << 3]
	}
}

function aLx() {
	this.aAk = function(player) {
		for (var aML = bD.kt.aML, qH = player << 3, z = qH + bD.kt.oC[player] - 1; qH <= z; z--) this.aMV(aML[z])
	}, this.aMV = function(aMW) {
		var kt = bD.kt,
			aMX = kt.oD - 1,
			aMY = kt.a1O[aMW],
			aMZ = kt.aMa[aMW],
			aMb = kt.lj[aMW];
		kt.oD = aMX, kt.a1O[aMW] = kt.a1O[aMX], kt.aMc[aMW] = kt.aMc[aMX], kt.aMd[aMW] = kt.aMd[aMX], kt.lj[aMW] = kt.lj[aMX], kt.aMe[aMW] = kt.aMe[aMX], kt.a1P[aMW] = kt.a1P[aMX], kt.aMa[aMW] = kt.aMa[aMX], kt.aMM[aMW] = kt.aMM[aMX], kt.aMf[
			aMW] = kt.aMf[aMX], kt.aMg[aMW] = kt.aMg[aMX], kt.aMh[aMW] = kt.aMh[aMX], kt.aML[kt.a1O[aMW]] = aMW,
			function(a8b) {
				var player = a8b >> 3,
					kt = bD.kt,
					eI = kt.oC[player] - 1,
					aMk = (player << 3) + eI;
				kt.oC[player] = eI, aMk !== a8b && (kt.aML[a8b] = kt.aML[aMk], kt.a1O[kt.aML[a8b]] = a8b)
			}(aMY), bD.ho.ho[bC.hn(kt.lj[aMW])][kt.aMa[aMW]] = aMW, aMX = bC.hn(aMb), aMY = aMZ, aMX = bD.ho.ho[aMX], kt = aMX.pop(), aMY !== aMX.length && (aMX[aMY] = kt, bD.kt.aMa[kt] = aMY)
	}
}

function aLy() {
	var aMm, tt = 8,
		aMn = new Array(2);

	function aMo(o0) {
		var gu = tt + 4,
			y6 = b2.ow.sF(gu, gu),
			h1 = b2.ow.getContext(y6, !0),
			gx = b2.ow.getImageData(h1, gu, gu),
			sQ = gx.data;
		return aMp(sQ, gu + 1, o0), aMp(sQ, gu + 2, o0), aMp(sQ, 2 * gu + 1, o0), aMp(sQ, 2 * gu - 3, o0), aMp(sQ, 2 * gu - 2, o0), aMp(sQ, 3 * gu - 2, o0), aMp(sQ, gu * (gu - 3) + 1, o0), aMp(sQ, gu * (gu - 2) + 1, o0), aMp(sQ, gu * (gu - 2) + 2,
			o0), aMp(sQ, gu * (gu - 2) - 2, o0), aMp(sQ, gu * (gu - 1) - 3, o0), aMp(sQ, gu * (gu - 1) - 2, o0), h1.putImageData(gx, 0, 0), y6
	}

	function aMp(sQ, e4, o0) {
		e4 *= 4;
		sQ[e4] = 255, sQ[1 + e4] = 255, sQ[2 + e4] = o0, sQ[3 + e4] = 255
	}

	function sF(player) {
		var y6 = b2.ow.sF(tt, tt);
		return function(h1, player) {
			var eP, eR, hR, e4, aMr, a8c, gu = tt,
				gx = b2.ow.getImageData(h1, gu, gu),
				sQ = gx.data,
				k8 = (gu >> 1) - .5,
				aLm = aQ.a20(player),
				aMt = b2.p6.xn(aLm, .5);
			b2.p6.xp(aLm, aMt, 300) || b2.p6.xr(aLm, 100);
			for (eR = 0; eR < gu; eR++)
				for (eP = 0; eP < gu; eP++) a8c = (gu - 1.5) * (gu - 1.5) / 4, aMr = (hR = (hR = eP - k8) * hR + (hR = eR - k8) * hR) <= (gu - 4.5) * (gu - 4.5) / 4 ? aMt : aLm, sQ[e4 = 4 * (eR * gu + eP)] = aMr[0], sQ[1 + e4] = aMr[1], sQ[2 +
					e4] = aMr[2], sQ[3 + e4] = a8c < hR ? 0 : 255;
			h1.putImageData(gx, 0, 0)
		}(b2.ow.getContext(y6, !0), player), y6
	}
	this.dH = function() {
		aMm = new Array(a1.eF), aMn[0] = aMo(255), aMn[1] = aMo(0)
	}, this.qn = function() {
		var z, player, aMu, aFO, iU, hQ, aMw, aMy, aMz, lj = bD.kt.lj,
			a1O = bD.kt.a1O,
			a1P = bD.kt.a1P,
			aMg = bD.kt.aMg,
			aN0 = aMm,
			aN1 = a1.e2,
			aN2 = -1,
			eI = bD.kt.oD,
			aN3 = an.t,
			aN4 = an.ir,
			aN5 = bI.eT << 4,
			e7 = hh,
			dy = e7 / tt,
			lk = hg / e7,
			ll = hi / e7,
			hR = (aN3 + hg) / e7 - lk,
			hU = (aN4 + hi) / e7 - ll,
			h1 = qo;
		for (bD.gl.oR(a1.e2, bD.a0F.a0G) && (aN2 = bE.eu[3]), h1.imageSmoothingEnabled = e7 < 9, b2.ow.textAlign(h1, 1), b2.ow.textBaseline(h1, 1), z = 0; z < eI; z++) player = a1O[z] >> 3, iU = a1P[z], aMu = .9 + .1 * Math.log10(iU), aFO = (hQ =
				lj[z]) % aN5 / 16 - aMu, hQ = aN4 * (Math.floor(hQ / aN5) / 16 - aMu - ll) / hU, aMw = -2 * (aMz = e7 * aMu) * (1 + (aMy = +(player === aN1)) / 8), aMy = aMy * aMz / 4, (aMz = aN3 * (aFO - lk) / hR) < aMw || hQ < aMw || aN3 +
			aMy < aMz || aN4 + aMy < hQ || (aFO = 2 * aMu * dy, aMw = aMu * e7, void 0 === (aMy = aN0[player]) && (aN0[player] = aMy = sF(player)), player === aN1 && (h1.setTransform(aFO, 0, 0, aFO, aMz - 2 * aFO, hQ - 2 * aFO), h1.drawImage(aMn[
				+(z === aN2)], 0, 0)), h1.setTransform(aFO, 0, 0, aFO, aMz, hQ), h1.drawImage(aMy, 0, 0), (aMu = Math.floor(function(iU) {
				if (iU < 1e3) return .42;
				if (iU < 1e4) return .34;
				if (iU < 1e6) return .26;
				if (iU < 1e8) return .19;
				return .15
			}(iU) * aMw)) < 6) || (h1.setTransform(1, 0, 0, 1, 0, 0), h1.fillStyle = aMg[z] ? p.mn : p.mL, h1.font = b2.ow.q5(1, aMu), h1.fillText(b2.w0.z6(iU), aMz + aMw, hQ + aMw + .1 * aMu));
		h1.imageSmoothingEnabled = !1, h1.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aM7() {
	var y6;
	this.dH = function() {
		y6 = y6 || bF.kt.aN8(20, bV.aN9[0])
	}, this.qn = function() {
		var m5 = hh;
		if (!(5 <= m5)) {
			var aN3 = an.t,
				aN4 = an.ir,
				lk = hg / m5,
				ll = hi / m5,
				ly = (aN3 + hg) / m5,
				lz = (aN4 + hi) / m5,
				fp = -20 * m5,
				aNA = .5 * fp,
				aN5 = bI.eT << 4,
				eI = bD.kt.oD,
				lj = bD.kt.lj,
				aNB = y6,
				h1 = qo;
			3 < m5 && (h1.globalAlpha = .5 * (5 - m5));
			for (var z = 0; z < eI; z++) {
				var hQ = lj[z],
					eP = aN3 * (hQ % aN5 / 16 - lk) / (ly - lk) + aNA,
					hQ = aN4 * (Math.floor(hQ / aN5) / 16 - ll) / (lz - ll) + aNA;
				aN3 < eP || aN4 < hQ || eP < fp || hQ < fp || (h1.setTransform(m5, 0, 0, m5, eP, hQ), h1.drawImage(aNB, 0, 0))
			}
			h1.globalAlpha = 1, h1.setTransform(m5, 0, 0, m5, 0, 0)
		}
	}
}

function aM3() {
	this.iC = function() {
		for (var aMQ, aM2, aMf = bD.kt.aMf, lj = bD.kt.lj, aMd = bD.kt.aMd, z = bD.kt.oD - 1; 0 <= z; z--) aMQ = lj[z], 0 !== (aM2 = aMf[z]) && aMQ === aMd[z] && (! function(z, aNE, hE) {
			var iT, player = bD.kt.a1O[z] >> 3,
				hE = aNE + bC.h4[hE] << 2,
				z = bD.kt.a1P[z];
			if (aQ.e9(hE)) iT = a1.eF;
			else {
				if ((iT = aQ.eA(hE)) === player) return b2.fd.fg(player, z);
				if (!eB(player, iT)) return b0.jS.nl(player, iT, z)
			}(aS.ii(player, iT) || aS.j1(player)) && (aV.fi[player].push(aNE << 2), aS.iQ(player, z, iT), a3.iR(player, !0))
		}(z, bC.hm(aMQ), aM2 - 1), bD.aAj.aMV(z))
	}, this.aNF = function(player, e4, hE, lg) {
		if (0 !== hE) {
			var aN1 = a1.e2;
			if (b2.fd.gU(aN1) && eB(player, aN1) && player !== aN1 && 0 !== aV.fx[aN1].length) {
				var aMA = e4 + bC.h4[--hE] << 2;
				if (aQ.e9(aMA) || eB(player, aQ.eA(aMA))) {
					for (var eW = !1, z = 0; z < 4; z++)
						if (aMA = e4 + bC.h4[z] << 2, aQ.eD(aMA) && !aQ.e9(aMA) && aQ.eA(aMA) === aN1) {
							eW = !0;
							break
						} eW && (aA.a1Y(719, 0), aA.vY(180, L(324, [aV.a1G[player]]), 719, player, p.mm, p.mI, -1, !0, void 0, {
						ec: 1,
						lg: lg
					}))
				}
			}
		}
	}
}

function aLz() {
	this.aNG = null, this.je = 512, this.oP = 8, this.oD = 0, this.aNH = 0, this.a1O = new Uint16Array(this.je), this.aMc = new Uint32Array(this.je), this.aMd = new Uint32Array(this.je), this.lj = new Uint32Array(this.je), this.aMe = new Uint16Array(
			this.je), this.a1P = new Uint32Array(this.je), this.aMa = new Uint16Array(this.je), this.aMM = new Uint16Array(this.je), this.aMf = new Uint8Array(this.je), this.aMg = new Uint8Array(this.je), this.aMh = new Uint32Array(this.je), this
		.oC = new Uint8Array(a1.eF), this.aML = new Uint16Array(this.oP * a1.eF), this.dH = function() {
			this.aNH = 0, this.oD = 0, this.aNG = new Uint8Array(bI.eT + bI.eU), this.oC.fill(0)
		}, this.oQ = function(player) {
			var eI = this.oD,
				aNI = bC.hl(bE.eu[0]),
				aNJ = this.oC[player],
				aNK = (player << 3) + aNJ,
				iU = (this.a1O[eI] = aNK, this.aMc[eI] = aNI, this.lj[eI] = aNI, this.aMd[eI] = bC.hl(bE.eu[1]), this.aMe[eI] = 0, bE.eq[0]);
			iU < 60 ? (b2.fd.fe(player, 60 - iU), this.a1P[eI] = 60) : this.a1P[eI] = iU, this.aMa[eI] = bD.ho.oQ(eI, bC.hn(aNI)), this.aMM[eI] = this.aNH, this.aMf[eI] = bE.eu[2], this.aMg[eI] = 0, this.aMh[eI] = 0, this.aNH = this.aNH + 1 & 1023,
				this.aML[aNK] = eI, this.oC[player] = aNJ + 1, this.oD++, bD.aM2.aNF(player, bE.eu[1], bE.eu[2], this.aMM[eI])
		}, this.nU = function() {
			var aMK = bE.eu[3];
			this.aMc[aMK] = this.lj[aMK], this.aMd[aMK] = bC.hl(bE.eu[1]), this.aMe[aMK] = 0, this.aMf[aMK] = bE.eu[2], bD.aM2.aNF(this.a1O[aMK] >> 3, bE.eu[1], bE.eu[2], this.aMM[aMK])
		}, this.iC = function() {
			bD.aM2.iC(),
				function(vh) {
					var z, aNP, aNQ, aNR, aNS, aNI, aNW, aNX, eL, fp, aMc = vh.aMc,
						aMd = vh.aMd,
						lj = vh.lj,
						a1P = vh.a1P,
						aMg = vh.aMg,
						aMe = vh.aMe,
						aMa = vh.aMa,
						g6 = aV.g6,
						a1O = vh.a1O,
						vh = vh.oD,
						aN5 = bI.eT << 4;
					for (z = vh - 1; 0 <= z; z--) aNQ = lj[z], aNP = aMd[z], aNQ !== aNP && (aNI = aMc[z], aNW = aNP % aN5 - (aNS = aNI % aN5), aNX = ~~((aNP + .5) / aN5) - (aNI = ~~((aNI + .5) / aN5)), eL = ~~Math.sqrt(aNW * aNW + aNX * aNX + .5),
						fp = 15e4 + 25e3 * bB.log10(a1P[z]), fp += 5e4 * !g6[a1O[z] >> 3], aMg[z] && (fp = bB.ek(fp, 5)), 65535 <= (fp = aMe[z] + Math.max(~~((fp + .5) / eL), 1)) ? lj[z] = aNR = aNP : (aMe[z] = fp, lj[z] = aNR = aNS + bB.ek(fp *
							aNW, 65536) + aN5 * (aNI + bB.ek(fp * aNX, 65536))), aMa[z] = bD.ho.aNZ(aMa[z], aNQ, aNR))
				}(this),
				function(vh) {
					if (bU.jK() % 2 == 1) {
						var z, kB, k8, ec, ed, aNa, uD, aNb, gh, lk, ll, aNI, aNc, h8, aNe, sY, eI = vh.oD,
							lj = vh.lj,
							a1O = vh.a1O,
							a1P = vh.a1P,
							aMh = vh.aMh,
							aMg = vh.aMg,
							ho = bD.ho.ho,
							aNg = ho.length,
							aNh = bD.ho.aNh,
							aN5 = bI.eT << 4,
							aNi = a1.iN,
							aKX = bV.eG,
							fp = (eI - 1) * (bB.ek(bU.jK(), 2) % 2);
						for (z = 0; z < eI; z++)
							for (kB = Math.abs(z - fp), aNI = lj[kB], k8 = bC.hn(aNI), gh = a1O[kB] >> 3, lk = aNI % aN5, ll = ~~((aNI + .5) / aN5), aNe = a1P[kB], ec = 0; ec < 9; ec++)
								if (!((aNa = k8 + aNh[ec]) < 0 || aNg <= aNa))
									for (aNb = ho[aNa], uD = aNb.length, ed = 0; ed < uD; ed++) aNc = aNb[ed], sY = a1O[aNc] >> 3, gh == sY || aNi && aKX[gh] === aKX[sY] || (sY = lj[aNc], (h8 = lk - sY % aN5) * h8 + (h8 = ll - ~~((sY + .5) / aN5)) *
										h8 < 14400 && (sY = a1P[aNc], h8 = sY < aNe ? bB.ek(sY + bB.ek(aNe - sY, 10), 10) : bB.ek(aNe, 10), h8 = Math.max(1, h8), a1P[aNc] = Math.max(sY - h8, 0), aMg[aNc] = 4, aMh[aNc] = Math.min(aMh[aNc] + h8,
											4294967295)))
					}
				}(this),
				function(vh) {
					if (bU.jK() % 5 == 3) {
						var z, iU, a1P = vh.a1P,
							g6 = aV.g6,
							a1O = vh.a1O,
							aMh = vh.aMh,
							aMg = vh.aMg,
							eI = vh.oD;
						for (z = 0; z < eI; z++) iU = a1P[z], g6[a1O[z] >> 3] ? a1P[z] = Math.max(iU - Math.max(1, iU >> 7), 0) : (a1P[z] = Math.max(iU - Math.max(1, iU >> 11), 0), aMg[z] || (iU = aMh[z]) && (iU = Math.max(iU >> 3, 1), a1P[z] = Math
							.min(a1P[z] + (iU << 1), 4294967295), aMh[z] -= iU))
					}
				}(this);
			var z, vh = this,
				a1P = vh.a1P,
				aMg = vh.aMg;
			for (z = vh.oD - 1; 0 <= z; z--) aMg[z] = aMg[z] >> 1, 0 === a1P[z] && bD.aAj.aMV(z)
		}
}

function aM0() {
	this.aNj = 32, this.eP = 0, this.eR = 0, this.hp = 0, this.aNk = 0, this.aNl = 4, this.ho = null, this.aNh = new Int16Array(9), this.dH = function() {
		this.hp = 1 + bB.ek(bI.eT - 1, this.aNj), this.aNk = 1 + bB.ek(bI.eU - 1, this.aNj), this.ho = new Array(this.hp * this.aNk), b2.p6.xm(this.ho);
		var eP, eR, aNh = this.aNh,
			t = this.hp;
		for (eP = -1; eP <= 1; eP++)
			for (eR = -1; eR <= 1; eR++) aNh[3 * (1 + eR) + 1 + eP] = eR * t + eP
	}, this.oQ = function(aNn, z) {
		return this.ho[z].push(aNn), this.ho[z].length - 1
	}, this.aNZ = function(aNo, aNI, aNP) {
		var aNp, aNq, aNI = bC.hn(aNI),
			aNP = bC.hn(aNP);
		return aNI === aNP ? aNo : (aNp = this.ho[aNI].pop(), this.ho[aNI].length === aNo ? this.oQ(aNp, aNP) : (aNq = this.ho[aNI][aNo], this.ho[aNI][aNo] = aNp, bD.kt.aMa[aNp] = aNo, this.oQ(aNq, aNP)))
	}
}

function aM5() {
	function wa(aNP, aNr) {
		if (function(aNP, aMI) {
				var h7 = bC.hm(aNP),
					aNu = Math.abs(bC.eQ(aMI) - bC.eQ(h7)),
					h7 = Math.abs(bC.eS(aMI) - bC.eS(h7));
				return 0 !== Math.max(aNu, h7) && (function(aNI, aNP, aNu, aNv) {
					var aNx = bC.hT(aNI),
						aNI = bC.hW(aNI),
						aNz = bC.hT(aNP),
						aNP = bC.hW(aNP),
						aNz = aNz - aNx,
						aNP = aNP - aNI,
						aO3 = Math.abs(aNz),
						aO4 = Math.abs(aNP),
						aNz = 0 < aNz ? 1 : 3,
						aNP = 0 < aNP ? 2 : 0;
					aO4 < aO3 ? aO7(aNx, aNI, aNx + aO3, aNI + aO4, aNz, aNP, aNu) : aO7(aNI, aNx, aNI + aO4, aNx + aO3, aNP, aNz, aNv)
				}(aNP, bC.hl(aMI), aNu, h7), !0)
			}(aNP, aNr)) {
			if (0 === bE.eo[0]) return !!aQ.gk(aNr << 2);
			if (function(aMI) {
					if (aQ.gk(aMI << 2)) return 1;
					return function(aMI) {
						var z, hE, aNG = bD.kt.aNG,
							aOB = bC,
							eI = bE.eo[0],
							aOC = 4 * aMI;
						for (z = eI - 1; 0 <= z; z--)
							if (hE = aNG[z], aOC = aOB.hr(aOC, hE + 2 & 3), aQ.gk(aOC)) return bE.eo[0] = z, bE.eu[1] = aOC >> 2, bE.eu[2] = 1 + hE, 1;
						return
					}(aMI)
				}(aNr)) {
				var z, aNr = bC.hm(aNP),
					sQ = a6H,
					aNG = bD.kt.aNG,
					eI = bE.eo[0] - 1,
					aOC = 4 * aNr,
					h5 = bC.h5;
				for (z = 0; z < eI; z++)
					if (aOC += h5[aNG[z]], 0 !== sQ[aOC + 3] || 2 !== sQ[aOC + 2]) return !!void 0;
				return !!1
			}
		}
		return !1
	}

	function aO7(aNx, aNy, aNz, aO0, aO5, aO6, aNu) {
		for (var eR, aNG = bD.kt.aNG, fp = 0, aO8 = 0, ir = aO0 - aNy, t = aNz - aNx, aO9 = aNx % 16, z = 1; z <= aNu; z++) aNG[fp++] = aO5, aNG[fp] = aO6, fp += (eR = (ir * (aO9 + (z << 4)) + .5) / t >> 4) - aO8, aO8 = eR;
		bE.ex(bE.eo, fp)
	}
	this.k4 = function(player, aNr) {
		var hE, h7, gg = bC.hG(player, aNr);
		return gg !== aNr && (hE = bC.h6(gg, aNr), h7 = bC.hq(gg, hE), !(!aQ.gk(h7 << 2) && (hE = bC.hD(gg, aNr, hE), h7 = bC.hq(gg, hE), !aQ.gk(h7 << 2)) || (bE.eu[0] = h7, bE.eu[1] = aNr, bE.eu[2] = 0, !wa(bC.hl(h7), aNr)) || 0 !== bE.eu[2] &&
			bC.hM(player, bE.eu[1] + bC.h4[bE.eu[2] - 1] << 2)))
	}, this.oS = function(aNr) {
		var aNI = bD.kt.lj[bE.eu[3]];
		return bE.eu[1] = aNr, bE.eu[2] = 0, wa(aNI, aNr)
	}
}

function aM1() {
	var tt = 32,
		ts = new Array(2);

	function sF(ed) {
		var eP, eR, e4, hU, hR, gu = tt,
			y6 = b2.ow.sF(gu, gu),
			h1 = b2.ow.getContext(y6, !0),
			gx = b2.ow.getImageData(h1, gu, gu),
			sQ = gx.data,
			k8 = (gu >> 1) - .5,
			k9 = Math.sqrt(k8 * k8);
		for (sQ.fill(255), eR = 0; eR < gu; eR++)
			for (eP = 0; eP < gu; eP++) hR = eP - k8, hU = eR - k8, e4 = 4 * (eR * gu + eP), hR = 714 * (k9 - Math.sqrt(hR * hR + hU * hU)) / k9, sQ[2 + e4] = ed, sQ[3 + e4] = 255 < hR ? 0 : hR;
		return h1.putImageData(gx, 0, 0), y6
	}
	this.a0G = -1, this.dH = function() {
		this.a0G = -1, ts[0] || (ts[0] = sF(255), ts[1] = sF(0))
	}, this.aOE = function(h1, dy, eP, eR, h3, z) {
		b2.fd.gU(a1.e2) && (h1.setTransform(dy *= 4 / 3 * .625, 0, 0, dy, eP - (h3 *= 4 / 3), eR - h3), h1.drawImage(ts[+(bD.kt.aMM[z] === this.a0G)], 0, 0))
	}
}

function cI() {
	this.a2p = function() {
		var aOH;
		return !(aa.jO < 3 || aV.g6[kf[0]] >= a1.j7 >> 1) && (a1.iN ? (aOH = aT.aBw(), !(2 * aT.aBx(bW.kd()) >= aOH)) : function() {
			var aOH = aT.aBw();
			if (2 * aV.gK[kf[0]] >= aOH) return !1;
			return !0
		}())
	}
}

function d9() {
	this.size = 501, this.w5 = new Uint32Array(this.size), this.yh = new Uint32Array(this.size), this.a5f = new Uint16Array(this.size), this.aIU = 0, this.aOJ = 1, this.ed = 0, this.max = [0, 0, 0], this.lE = 0, this.aOK = null, this.dI =
function() {
		this.aOK = [L(325), L(326), L(327), L(328), L(329), L(330), L(331), L(332), L(333), L(334), L(335), L(336), L(337), L(338), L(339), L(340), L(341), L(342)]
	}, this.dH = function() {
		this.aIU = 0, this.aOJ = 1, this.ed = 0, this.aOL(), this.aOM()
	}, this.oN = function(player, hf) {
		player === a1.e2 && (this.lE[0] += hf, this.lE[1]++, this.lE[12] += bE.eq[1], this.lE[13] += bE.eq[0])
	}, this.nn = function(player, nQ) {
		__fx.donationsTracker.logDonation(player, nQ, bE.eq[0]);
		player === a1.e2 && (aA.nn(bE.eq[0], bE.eq[1], nQ), this.lE[12] += bE.eq[1], this.lE[16] += bE.eq[0]), nQ === a1.e2 && (aA.a1d(bE.eq[0], player), this.lE[10] += bE.eq[0])
	}, this.iC = function() {
		0 < this.ed-- || this.aON()
	}, this.aON = function() {
		0 !== aV.lI[a1.e2] && (this.w5[this.aIU] = aV.g6[a1.e2], this.yh[this.aIU] = aV.gK[a1.e2], this.a5f[this.aIU] = aT.a5g(a1.e2), this.aOO(this.aIU), this.aIU++, this.aIU === this.size && this.aOP(), this.ed = this.aOJ - 1, bT.l2())
	}, this.aOP = function() {
		this.aOL(), this.aOO(0), this.aIU = 1 + bB.ek(this.size, 2);
		for (var z = 1; z < this.aIU; z++) this.w5[z] = this.w5[2 * z], this.yh[z] = this.yh[2 * z], this.a5f[z] = this.a5f[2 * z], this.aOO(z);
		this.aOJ *= 2
	}, this.aOL = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.aOM = function() {
		this.lE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.aOO = function(z) {
		this.max[0] = this.w5[z] > this.max[0] ? this.w5[z] : this.max[0], this.max[1] = this.yh[z] > this.max[1] ? this.yh[z] : this.max[1], this.max[2] = this.a5f[z] > this.max[2] ? this.a5f[z] : this.max[2]
	}
}

function dA() {
	this.t = 0, this.ir = 0, this.q7 = 0, this.q8 = 0, this.aOQ = 0, this.aOR = 0, this.a32 = 0, this.a9K = 0, this.a95 = 0, this.aOS = 0, this.aOT = 0, this.aOU = 0, this.a2R = 0, this.o0 = 0, this.a5M = null, this.to = !1, this.aOV = -1, this
		.aOW = !1, this.aOX = [0, 0], this.dI = function() {
			this.a5M = [L(343), L(344), L(93), L(345)]
		}, this.dH = function() {
			this.to = !1, this.aOV = -1, this.aOW = !1, this.resize()
		}, this.resize = function() {
			this.t = an.t < 1.369 * an.ir ? an.t : 1.369 * an.ir;
			var eL = m.n.uE() && an.t < an.ir ? 1 : m.n.uE() ? .8 : an.t < an.ir ? .65 : .59;
			this.t = Math.floor(eL * this.t), this.t -= m.n.uE() && an.t < an.ir ? 2 * bR.gap + 2 : 0, this.ir = Math.floor(this.t / 1.369), this.a2R = Math.floor(this.ir / 150), this.a2R = Math.max(this.a2R, 1.5), this.q7 = Math.floor(1 + .02 * this
				.t), this.q8 = Math.floor(1 + .04 * this.t), this.a32 = this.q8, this.a9K = Math.floor(1 + .075 * this.t), this.aOS = Math.floor(1 + .1125 * this.t), this.aOT = Math.floor(this.t * (m.n.uE() ? .03 : .029)), this.aOT = Math.max(
				this.aOT, 4), this.aOU = Math.floor(.035 * this.t), this.aOU = Math.max(this.aOU, 4), this.a95 = this.ir - 2 * this.a32 - this.a9K - this.aOS, this.to && this.aOY()
		}, this.gV = function(kU, kV) {
			var ss, sr;
			return !!this.to && (sr = kU, ss = kV, kU -= bB.ek(an.t - this.t, 2), kV -= bB.ek(an.ir - this.ir, 2), kU < 0 || kV < 0 || kU >= this.t || kV >= this.ir || kU >= this.t - this.aOS && kV < this.aOS ? 1 < a9.gV(sr, ss) || this.qK() : kV <
				this.aOS || (kV < this.ir - this.a9K ? (this.aOW = !0, this.aOV = (kU - 2 * this.q7 - this.aOQ) / this.aOR, 3 !== this.o0 && (bU.dO = !0)) : (sr = (sr = Math.floor(kU / (this.t / this.a5M.length))) < 0 ? 0 : sr >= this.a5M
					.length ? this.a5M.length - 1 : sr) !== this.o0 && (this.o0 = sr, this.aOY(), bU.dO = !0)), !0)
		}, this.xP = function() {
			var aOZ = Math.floor((this.aOX[0] + hg) / hh),
				aOa = Math.floor((this.aOX[1] + hi) / hh);
			aOZ < 1 || aOa < 1 || aOZ >= bI.eT - 1 || aOa >= bI.eU - 1 || console.log(aOZ + " " + aOa)
		}, this.wq = function(kU, kV) {
			return this.aOX[0] = kU, this.aOX[1] = kV, !(!this.to || !this.aOW || (kU -= bB.ek(an.t - this.t, 2), kV = this.aOV, this.aOV = (kU - 2 * this.q7 - this.aOQ) / this.aOR, (0 <= this.aOV && this.aOV <= 1 || 0 <= kV && kV <= 1) && (bU.dO = !
				0), 0))
		}, this.xG = function() {
			this.aOW && (this.aOW = !1)
		}, this.xT = function() {
			this.to ? this.qK() : this.show()
		}, this.show = function() {
			bS.aIU < 2 || (this.to = !0, this.aOY())
		}, this.qK = function() {
			this.to = !1, this.aOV = -1, bU.dO = !0
		}, this.aOY = function() {
			this.o0 < 2 ? this.aOQ = aD.measureText(b2.w0.z6(bS.max[this.o0]), b2.ow.q5(0, this.aOT)) : 2 === this.o0 && (this.aOQ = aD.measureText(b2.w0.zB(6, 2), b2.ow.q5(0, this.aOT))), this.aOR = this.t - 2 * this.q7 - this.aOQ - this.q8
		}, this.l2 = function() {
			this.to && this.aOY()
		}, this.qn = function() {
			this.to && this.a3J()
		}, this.a3J = function() {
			var eP = bB.ek(an.t - this.t, 2),
				eR = bB.ek(an.ir - this.ir, 2);
			qo.setTransform(1, 0, 0, 1, eP, eR), qo.fillStyle = p.mI, qo.fillRect(0, this.aOS, this.t, this.ir - this.aOS), this.aOb(), this.aHt(), qo.strokeRect(0, 0, this.t, this.ir), b2.ow.textAlign(qo, 2), qo.font = b2.ow.q5(0, this.aOT), 0 ===
				this.o0 ? this.aOc(bS.w5, eP, eR) : 1 === this.o0 ? this.aOc(bS.yh, eP, eR) : 2 === this.o0 ? this.aOd(eP, eR) : 3 === this.o0 && (this.aOe(eP, eR), this.aOf(eP, eR)), a9.a0g(Math.floor(eP + this.t - .725 * this.aOS), Math.floor(eR +
					.275 * this.aOS), Math.floor(.45 * this.aOS)), qo.setTransform(1, 0, 0, 1, 0, 0)
		}, this.aOb = function() {
			var z, dt;
			for (qo.lineWidth = this.a2R, b2.ow.textBaseline(qo, 1), b2.ow.textAlign(qo, 1), qo.strokeStyle = p.mL, qo.font = b2.ow.q5(1, this.aOU), dt = this.t / this.a5M.length, qo.fillStyle = p.me, qo.fillRect(this.o0 * dt, this.ir - this.a9K, dt,
					this.a9K), qo.fillStyle = p.mL, qo.fillRect(0, this.ir - this.a9K - .5 * this.a2R, this.t, this.a2R), z = 1; z <= 3; z++) qo.fillRect(z * dt, this.ir - this.a9K, this.a2R, this.a9K);
			for (z = this.a5M.length - 1; 0 <= z; z--) qo.fillText(this.a5M[z], (z + .5) * dt, this.ir - .46 * this.a9K)
		}, this.aHt = function() {
			qo.fillStyle = p.mx, qo.fillRect(0, 0, this.t, this.aOS), qo.fillStyle = p.mL, qo.fillRect(0, this.aOS - .5 * this.a2R, this.t, this.a2R), qo.font = b2.ow.q5(1, .39 * this.aOS), qo.fillText(L(346), Math.floor(this.t / 2), Math.floor(.55 *
				this.aOS))
		}, this.aOc = function(ey, eP, eR) {
			var k8 = bS.max[this.o0],
				xo = (qo.setTransform(1, 0, 0, 1, eP + 2 * this.q7 + this.aOQ, eR + this.a32 + this.aOS), qo.lineWidth = 2, this.a95 / Math.sqrt(k8));
			qo.beginPath(), qo.moveTo(this.aOR, this.a95 - xo * Math.sqrt(ey[bS.aIU - 1]));
			for (var z = bS.aIU - 2; 0 <= z; z--) qo.lineTo(z * this.aOR / (bS.aIU - 1), this.a95 - xo * Math.sqrt(ey[z]));
			qo.stroke();
			eP = this.a0g(ey, xo, .5);
			eP < .95 && qo.fillText(b2.w0.z6(k8), -this.q7, 0), .05 < Math.abs(eP - .5) && qo.fillText(b2.w0.z6(Math.floor(k8 / 4)), -this.q7, Math.floor(this.a95 / 2)), .05 < eP && qo.fillText("0", -this.q7, this.a95)
		}, this.aOd = function(eP, eR) {
			qo.setTransform(1, 0, 0, 1, eP + 2 * this.q7 + this.aOQ, eR + this.a32 + this.aOS), qo.lineWidth = 2;
			var xo = this.a95 / Math.max(bS.max[this.o0], 1);
			qo.beginPath(), qo.moveTo(this.aOR, this.a95 - xo * bS.a5f[bS.aIU - 1]);
			for (var z = bS.aIU - 2; 0 <= z; z--) qo.lineTo(z * this.aOR / (bS.aIU - 1), this.a95 - xo * bS.a5f[z]);
			qo.stroke();
			eP = this.a0g(bS.a5f, xo, 1), eR = bS.max[this.o0] / 100;
			eP < .95 && qo.fillText(b2.w0.zB(eR, 2), -this.q7, 0), .05 < Math.abs(eP - .5) && qo.fillText(b2.w0.zB(eR / 2, 2), -this.q7, Math.floor(this.a95 / 2)), .05 < eP && qo.fillText(b2.w0.zB(0, 2), -this.q7, this.a95)
		}, this.aOe = function(eP, eR) {
			qo.setTransform(1, 0, 0, 1, eP + .34 * this.t, eR + 2 * this.a32 + this.aOS), b2.ow.textAlign(qo, 2);
			for (var a57 = this.ir - 4 * this.a32 - this.a9K - this.aOS, z = 7; 0 <= z; z--) qo.fillText(bS.aOK[z], 0, z * a57 / 7);
			qo.setTransform(1, 0, 0, 1, eP + .39 * this.t, eR + 2 * this.a32 + this.aOS), b2.ow.textAlign(qo, 0);
			eP = bS.lE[1];
			for (qo.fillText(b2.w0.zB(bS.lE[0] / (10 * (eP < 1 ? 1 : eP)), 1), 0, 0), z = 6; 1 <= z; z--) qo.fillText(bS.lE[z].toString(), 0, z * a57 / 7);
			qo.fillText(b2.w0.zB(100 * (1 - aV.g6[a1.e2] / bS.lE[7]), 0), 0, a57)
		}, this.aOf = function(eP, eR) {
			qo.setTransform(1, 0, 0, 1, eP + .79 * this.t, eR + 2 * this.a32 + this.aOS), b2.ow.textAlign(qo, 2);
			var z, a57 = this.ir - 4 * this.a32 - this.a9K - this.aOS;
			for (qo.fillStyle = p.mZ, z = 2; 0 <= z; z--) qo.fillText(bS.aOK[z + 8], 0, z * a57 / 9);
			for (qo.fillStyle = p.mY, qo.fillText(bS.aOK[11], 0, 3 * a57 / 9), qo.fillStyle = p.mo, z = 8; 4 <= z; z--) qo.fillText(bS.aOK[z + 8], 0, z * a57 / 9);
			qo.fillStyle = p.mn, qo.fillText(bS.aOK[17], 0, 9 * a57 / 9), qo.fillStyle = p.mZ;
			var a1M = b2.w0.z6(bS.lE[8] + bS.lE[9] + bS.lE[10] + bS.lE[11]),
				aH6 = qo.measureText(a1M).width,
				eP = (qo.setTransform(1, 0, 0, 1, eP + .83 * this.t + aH6, eR + 2 * this.a32 + this.aOS), qo.fillText(b2.w0.z6(bS.lE[8]), 0, 0), qo.fillText(b2.w0.z6(bS.lE[9]), 0, a57 / 9), qo.fillText(b2.w0.z6(bS.lE[10]), 0, 2 * a57 / 9), qo
					.fillStyle = p.mY, qo.fillText(a1M, 0, 3 * a57 / 9), qo.fillStyle = p.mo, bS.lE[13] - aS.aBg(a1.e2)),
				aH6 = (qo.fillText(b2.w0.z6(bS.lE[12]), 0, 4 * a57 / 9), qo.fillText(b2.w0.z6(eP), 0, 5 * a57 / 9), qo.fillText(b2.w0.z6(bS.lE[14]), 0, 6 * a57 / 9), qo.fillText(b2.w0.z6(bS.lE[15]), 0, 7 * a57 / 9), qo.fillText(b2.w0.z6(bS.lE[16]),
					0, 8 * a57 / 9), bS.lE[12] + eP + bS.lE[14] + bS.lE[15] + bS.lE[16] + bS.lE[17]);
			qo.fillStyle = p.mn, qo.fillText(b2.w0.z6(aH6), 0, a57), qo.fillStyle = p.mL
		}, this.a0g = function(ey, xo, a3t) {
			var z, d, ez;
			return this.aOV < 0 || 1 < this.aOV ? .25 : (z = this.aOV * (bS.aIU - 1), ez = ey[d = Math.floor(z)], ez += (z - d) * (ey[d < bS.aIU - 1 ? d + 1 : d] - ez), qo.strokeStyle = p.mO, .04 < this.aOV && this.aOi(0, this.a95 - xo * Math.pow(ez,
					a3t), z * this.aOR / (bS.aIU - 1), this.a95 - xo * Math.pow(ez, a3t)), .04 < ez / bS.max[this.o0] && this.aOi(z * this.aOR / (bS.aIU - 1), this.a95, z * this.aOR / (bS.aIU - 1), this.a95 - xo * Math.pow(ez, a3t)), qo
				.fillStyle = p.mq, qo.beginPath(), qo.arc(z * this.aOR / (bS.aIU - 1), this.a95 - xo * Math.pow(ez, a3t), Math.max(2, .014 * this.ir), 0, 2 * Math.PI), qo.fill(), ey = this.aOV * bU.a5h, ey = 0 === aV.lI[a1.e2] ? Math.floor(ey *
					aK.a5o) : Math.floor(ey * bU.jK()), qo.fillStyle = p.mL, qo.fillText(1 === a3t ? b2.w0.zB(ez / 100, 2) : b2.w0.z6(Math.floor(ez)), -this.q7, this.a95 - xo * Math.pow(ez, a3t)), b2.ow.textAlign(qo, 1), qo.fillText(aJ.a4T(ey),
					z * this.aOR / (bS.aIU - 1), this.a95 + this.aOT - (m.n.uE() ? 2 : 0) - this.a2R), b2.ow.textAlign(qo, 2), xo * Math.pow(ez, a3t) / this.a95)
		}, this.aOi = function(lk, ll, ly, lz) {
			qo.beginPath(), qo.moveTo(lk, ll), qo.lineTo(ly, lz), qo.stroke()
		}
}

function bg() {
	this.aOj = "https://", this.aOk = this.aOj + "territorial.io/", this.aIV = this.aOk + "changelog", this.aIZ = this.aOk + "terms", this.aOl = this.aOk + "cookie_policy", this.aIB = this.aOk + "privacy", this.aIY = this.aOk + "tutorial", this.aIX =
		this.aOk + "players", this.aIW = this.aOk + "clans", this.w7 = this.aOk + "clan-results", this.a6r = this.aOj + "play.google.com/store/apps/details?id=territorial.io", this.wP = this.aOj + "apps.apple.com/app/id1581110913", this.aOm = this
		.aOj + "www.youtube.com/watch?v=toZTQ8aRdFc", this.a6s = this.aOj + "discord.gg/pthqvpTXmh", this.a6t = this.aOj + "www.instagram.com/davidtschacher/", this.u7 =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function cs() {
	this.kt = new aOn, this.tR = new aOo, this.dH = function() {
		this.kt.dH()
	}, this.iC = function() {
		0 !== this.kt.a1m && this.kt.a1m--
	}
}

function aOo() {
	this.qn = function() {
		if (0 !== bF.kt.a1m && (qo.globalAlpha = Math.min(bF.kt.a1m / 580, 1), qo.drawImage(bF.kt.aOr, 1 + aF.tP(), 1 + aF.tQ()), qo.globalAlpha = 1, a1.gd)) {
			for (var lk = hg / hh, ll = hi / hh, ly = (an.t + hg) / hh, lz = (an.ir + hi) / hh, fp = bF.kt.aOs * hh, aOt = bF.kt.aOt, z = a1.jN - 1; 0 <= z; z--) ! function(z, fp, lk, ll, ly, lz, aOt) {
				var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[z];
				if (highlight) fp *= 2;
				0 === aV.lI[z] || 0 === aV.g6[z] || (ly = an.t * ((aV.ht[z] + aV.hu[z] + 1) / 2 - lk) / (ly - lk) - .5 * fp, lk = an.ir * ((aV.hv[z] + aV.hw[z] + 1) / 2 - ll) / (lz - ll) - .5 * fp, ly > an.t) || lk > an.ir || ly < -fp || lk <
					-fp || (qo.setTransform(highlight ? hh * 2 : hh, 0, 0, highlight ? hh * 2 : hh, ly, lk), qo.drawImage(aOt[a1.iN ? bV.eG[z] : 1], 0, 0))
			}(z, fp, lk, ll, ly, lz, aOt);
			qo.setTransform(hh, 0, 0, hh, 0, 0)
		}
	}
}

function aOn() {
	this.aOs = 28, this.a1m = 0, this.aOr = null;
	var aOv = this.aOt = null;

	function aOy(gu, aOz) {
		var eP, eR, e4, hR, y6 = b2.ow.sF(gu, gu),
			h1 = b2.ow.getContext(y6, !0),
			gx = b2.ow.getImageData(h1, gu, gu),
			sQ = gx.data,
			k8 = (gu >> 1) - .5,
			aP0 = .5 + k8;
		for (aP0 *= aP0, eR = 0; eR < gu; eR++)
			for (eP = 0; eP < gu; eP++) hR = (hR = eP - k8) * hR + (hR = eR - k8) * hR, sQ[e4 = 4 * (eR * gu + eP)] = aOz[0], sQ[1 + e4] = aOz[1], sQ[2 + e4] = aOz[2], sQ[3 + e4] = (aP0 - hR) * aOz[3] / aP0;
		return h1.putImageData(gx, 0, 0), y6
	}

	function aOE(z, h1, y6, gu) {
		var eP, y, highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[z];
		if (highlight) gu *= 2;
		0 !== aV.lI[z] && 0 !== aV.g6[z] && (eP = aV.ht[z] + aV.hu[z] + 1 - gu - 2 >> 1, y = aV.hv[z] + aV.hw[z] + 1 - gu - 2 >> 1,
			highlight ? h1.drawImage(y6[a1.iN ? bV.eG[z] : z < a1.jN ? 1 : 0], eP, y, gu, gu) :
			h1.drawImage(y6[a1.iN ? bV.eG[z] : z < a1.jN ? 1 : 0], eP, y))
	}
	this.dH = function() {
		var vh;
		this.a1m = 700,
			function(vh) {
				var gu = vh.aOs;
				if (vh.aOt = [], aOv = [], a1.iN)
					for (var z = 0; z <= a1.zU; z++) vh.aOt.push(aOy(gu, bV.aN9[bV.vU[z]])), aOv.push(aOy(gu >> 1, bV.aN9[bV.vU[z]]));
				else vh.aOt.push(aOy(gu, bV.aN9[0])), vh.aOt.push(aOy(gu, bV.aN9[4])), aOv.push(aOy(gu >> 1, bV.aN9[0]))
			}(this),
			function(vh, aP1) {
				var z, aOr = vh.aOr,
					h1 = b2.ow.getContext(aOr, !0),
					eI = a1.eF,
					gu = vh.aOs >> 1;
				h1.imageSmoothingEnabled = !1, h1.setTransform(1, 0, 0, 1, 0, 0), aP1 && h1.clearRect(0, 0, aOr.width, aOr.height);
				for (z = a1.jN; z < eI; z++) aOE(z, h1, aOv, gu)
			}(this, null !== (vh = this).aOr && vh.aOr.width === bI.eT - 2 && vh.aOr.height === bI.eU - 2 || (vh.aOr = b2.ow.sF(bI.eT - 2, bI.eU - 2), !1)), a1.gd || this.zP()
	}, this.aN8 = aOy, this.zP = function() {
		for (var eI = a1.jN, gu = this.aOs, aOt = this.aOt, h1 = b2.ow.getContext(this.aOr, !0), z = 0; z < eI; z++) aOE(z, h1, aOt, gu)
	}
}

function ct() {
	function aP2(player) {
		a1.gd ? (aZ.aAc(player), aa.aDS(), a1.jn && a1.oH.iC()) : au.aDQ(player)
	}
	this.ng = function(player) {
		return !!a9.a0f(player) && (aA.vL(player, player === a1.e2 ? 21 : 22), aP2(player), !0)
	}, this.oE = function(player) {
		1 === a1.v9 && 0 !== aV.lI[player] && 2 !== aV.yb[player] && aP2(player), a1.vC--, a1.vB--, aA.vL(player, 4), b2.fd.gT(2) && aJ.l1(!0)
	}
}

function d3() {
	this.a8a = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a55 = [p
		.mL, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", p.mL, "rgb(170,170,170)"
	], this.aP3 = [p.mL, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", p.mL, p.mC], this.aP4 = [p.mC, p.mL, p.mL, p.mL, p.mC, p.mC, p.mC, p.mC, p.mL];
	var aP5 = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aP6 = (this.aCz = ["rgba(" + aP5[0] + ",", "rgba(" + aP5[1] + ",", "rgba(" + aP5[2] + ",", "rgba(" + aP5[3] + ",", "rgba(" + aP5[4] + ",", "rgba(" + aP5[5] + ",", "rgba(" + aP5[6] + ",", "rgba(" + aP5[7] + ",", "rgba(" + aP5[8] + ",",
			"rgba(" + aP5[9] + ","
		], this.aD0 = ["rgb(" + aP5[0] + ")", "rgb(" + aP5[1] + ")", "rgb(" + aP5[2] + ")", "rgb(" + aP5[3] + ")", "rgb(" + aP5[4] + ")", "rgb(" + aP5[5] + ")", "rgb(" + aP5[6] + ")", "rgb(" + aP5[7] + ")", "rgb(" + aP5[8] + ")", "rgb(" + aP5[
			9] + ")"
		], this.vW = null, this.aN9 = [
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
	this.vU = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eG = new Uint8Array(a1.eF), this.vw = null, this.aP7 = null, this.dI = function() {
		this.vW = [L(347), L(348), L(349), L(350), L(351), L(352), L(353), L(347), L(354)]
	}, this.dH = function(tb) {
		this.eG.fill(0), this.aP8(), a1.iN && (ay.jh && ay.ji.aBM ? this.a9w() : 9 === a1.jl ? this.aP9() : this.iC(tb))
	}, this.a9w = function() {
		var z, eI = a1.st;
		for (this.vU = [0, 1, 2, 3, 4, 5, 6, 7, 8], z = 0; z < eI; z++) this.eG[z] = ay.ji.aBM[z]
	}, this.aP8 = function() {
		for (var z = this.vU.length - 1; 0 <= z; z--) this.vU[z] = z;
		this.vw = [], this.aP7 = []
	}, this.aP9 = function() {
		for (var z = a1.jN + ap.aDI - 1; 0 <= z; z--) this.eG[z] = 1;
		for (z = a1.jN + ap.aDI; z < a1.eF; z++) this.eG[z] = 2;
		this.vU[1] = 7, this.vU[2] = 8
	}, this.iC = function(tb) {
		var hA = new Uint8Array(a1.jN),
			hB = new Uint8Array(a1.jN),
			aPA = new Uint16Array(8),
			aPB = new Uint16Array(this.vU.length);
		this.aPC(tb, hA, hB, aPA), this.a9u(aPA), a1.jn || this.aPD(aPB, hA, hB), this.aPE(hA, hB, aPB), a1.jn ? this.aPF() : this.aPG()
	}, this.aPC = function(tb, hA, hB, aPH) {
		for (var ec, d, aPI, eI = this.vU.length - 1, ey = new Uint16Array(eI), z = a1.jN - 1; 0 <= z; z--) {
			for (ec = eI; 1 <= ec; ec--) ey[ec - 1] = Math.abs(4 * tb[z].a9G[0] - aP6[ec][0]) + Math.abs(4 * tb[z].a9G[1] - aP6[ec][1]) + Math.abs(4 * tb[z].a9G[2] - aP6[ec][2]);
			for (aPI = 768, ec = eI - 1; 0 <= ec; ec--) ey[d = (ec + z) % eI] < aPI && (aPI = ey[d], hA[z] = d);
			for (aPH[hA[z]] += 4, aPI = 768, ec = eI - 1; 0 <= ec; ec--) ey[d = (ec + z) % eI] < aPI && d !== hA[z] && (aPI = ey[d], hB[z] = d);
			aPH[hB[z]]++
		}
	}, this.a9u = function(aPH) {
		for (var ec, kA, eI = this.vU.length - 1, z = eI; 0 <= z; z--) this.vU[z] = z;
		for (z = eI - 1; 0 <= z; z--) aPH[z]++;
		for (z = 1; z <= eI; z++) {
			for (kA = 0, ec = 1; ec < eI; ec++) aPH[ec] > aPH[kA] && (kA = ec);
			aPH[kA] = 0, this.vU[z] = kA + 1
		}
	}, this.aPD = function(aPB, hA, hB) {
		var z, ec, aK1, ed, eL, d, lw, qL, aPJ = this.vU.length - 1,
			pL = new Uint16Array(aPJ),
			aPK = [],
			a32 = Math.max(a1.jN + 1 >> 1, 6);
		loop: for (z = 0; z < a1.jN; z++)
			if (null !== (aK1 = b2.w0.w1(aV.w2[z]))) {
				for (ec = this.vw.length - 1; 0 <= ec; ec--)
					if (aK1 === this.vw[ec] && this.aP7[ec].length < a32) {
						this.aP7[ec].push(z);
						continue loop
					} this.vw.push(aK1), aPK.push(!1), this.aP7.push([z])
			}
		for (ec = this.vw.length - 1; 0 <= ec; ec--) {
			for (eL = -1, ed = this.vw.length - 1; 0 <= ed; ed--) !aPK[ed] && (-1 === eL || this.aP7[ed].length > this.aP7[eL].length) && (eL = ed);
			for (ed = aPJ - 1; 0 <= ed; ed--) pL[ed] = 1;
			for (ed = this.aP7[eL].length - 1; 0 <= ed; ed--) pL[hA[this.aP7[eL][ed]]] += 3, pL[hB[this.aP7[eL][ed]]]++;
			for (z = aPJ - 1; 0 <= z; z--) {
				for (d = eL % aPJ, ed = aPJ - 1; 0 <= ed; ed--) pL[ed] > pL[d] && (d = ed);
				for (lw = -1, ed = a1.zU; 0 < ed; ed--)
					if (this.vU[ed] === d + 1) {
						lw = ed;
						break
					} if (pL[d] = 0, -1 !== lw) {
					for (qL = 0, ed = a1.zU; 0 < ed; ed--) aPB[lw] > aPB[ed] && qL++;
					if (qL !== a1.zU - 1) {
						for (ed = this.aP7[eL].length - 1; 0 <= ed; ed--) aPB[lw]++, this.eG[this.aP7[eL][ed]] = lw;
						break
					}
				}
			}
			aPK[eL] = !0
		}
	}, this.aPE = function(hA, hB, aPB) {
		for (var z, hQ, eI = this.vU.length - 1, border = bB.ek(a1.jN, a1.zU), aPL = (0 < a1.jN % a1.zU && border++, new Uint8Array(1 + eI)), ec = eI; 1 <= ec; ec--) aPL[this.vU[ec]] = ec;
		for (z = 0; z < a1.jN; z++) hQ = aPL[hA[z] + 1], 0 === this.eG[z] && hQ <= a1.zU && aPB[hQ] < border && (aPB[hQ]++, this.eG[z] = hQ);
		for (z = 0; z < a1.jN; z++) hQ = aPL[hB[z] + 1], 0 === this.eG[z] && hQ <= a1.zU && aPB[hQ] < border && (aPB[hQ]++, this.eG[z] = hQ);
		for (ec = a1.zU; 1 <= ec; ec--)
			for (z = a1.jN - 1; 0 <= z && !(aPB[ec] >= border); z--) 0 === this.eG[z] && (aPB[ec]++, this.eG[z] = ec)
	}, this.aPF = function() {
		var z, eb, aPH = new Uint16Array(a1.zU);
		for (aPH[a1.zU - 1] = a1.eF, z = a1.zU - 2; 0 <= z; z--) aPH[z] = aO.jp[z].fj;
		for (aPH[0]--, eb = 0 === aPH[0] ? 1 : 0, z = a1.jN; z < a1.eF; z++) this.eG[z] = eb + 1, aPH[eb]--, aPH[eb] <= 0 && eb++
	}, this.aPG = function() {
		for (var z = a1.jN; z < a1.eF; z++) this.eG[z] = 1 + z % a1.zU
	}
}

function g7() {
	for (var eP, eR, z = fC - 1; 0 <= z; z--) eP = bB.ek(fE[z], 4) % bI.eT, eR = bB.ek(fE[z], 4 * bI.eT), aV.ht[f7] = aV.ht[f7] > eP ? eP : aV.ht[f7], aV.hv[f7] = aV.hv[f7] > eR ? eR : aV.hv[f7], aV.hu[f7] = aV.hu[f7] < eP ? eP : aV.hu[f7], aV.hw[
		f7] = aV.hw[f7] < eR ? eR : aV.hw[f7]
}

function fR() {
	var eL, fo, z, eI = aV.fi[f7].length,
		eK = aQ.eK;
	loop: for (z = eI - 1; 0 <= z; z--) {
		for (eL = 3; 0 <= eL; eL--)
			if (fo = aV.fi[f7][z] + eK[eL], aQ.e9(fo) || aQ.fq(fo) && aQ.eA(fo) !== f7) {
				aQ.iX(aV.fi[f7][z], f7);
				continue loop
			} aV.fi[f7][z] = aV.fi[f7][eI - 1], aV.fi[f7].pop(), eI--
	}
}

function fS() {
	var player = f7,
		fw = aV.fw,
		fx = aV.fx,
		ei = aV.ei,
		eI = fw[player].length,
		eK = aQ.eK;
	loop: for (var z = eI - 1; 0 <= z; z--) {
		for (var aPM = !1, aPN = !1, eL = 3; 0 <= eL; eL--) {
			var fo = fw[player][z] + eK[eL];
			if (aQ.aA6(fo, player)) continue loop;
			aPM = aPM || aQ.gk(fo), aPN = aPN || aQ.aA5(fo)
		}
		aPM ? fx[player].push(fw[player][z]) : aPN ? ei[player].push(fw[player][z]) : aQ.tC(fw[player][z], player), fw[player][z] = fw[player][eI - 1], fw[player].pop(), eI--
	}
}

function fu() {
	aV.g6[fB] -= fC
}

function fv(border) {
	for (var eI = border.length, z = eI - 1; 0 <= z; z--) aQ.tK(fB, border[z]) || (border[z] = border[eI - 1], border.pop(), eI--)
}

function g0(border) {
	for (var eI = border.length, z = eI - 1; 0 <= z; z--) !aQ.tK(fB, border[z]) && aQ.eD(border[z]) && (border[z] = border[eI - 1], border.pop(), eI--)
}

function g1(border) {
	for (var eL, fo, eI = border.length, eK = aQ.eK, z = eI - 1; 0 <= z; z--)
		for (eL = 3; 0 <= eL; eL--)
			if (fo = border[z] + eK[eL], aQ.aA6(fo, fB)) {
				aV.fw[fB].push(border[z]), border[z] = border[eI - 1], border.pop(), eI--;
				break
			}
}

function g2() {
	for (var eL, fo, eK = aQ.eK, z = fC - 1; 0 <= z; z--)
		for (eL = 3; 0 <= eL; eL--) fo = fE[z] + eK[eL], aQ.aA7(fB, fo) && aQ.aA8(fo) && (aV.fw[fB].push(fo), aQ.fl(fo, fB))
}

function g3() {
	var eP, eR;
	loop: for (; aV.hv[fB] < aV.hw[fB];) {
		for (eP = aV.hu[fB]; eP >= aV.ht[fB]; eP--)
			if (aQ.tK(fB, 4 * (aV.hv[fB] * bI.eT + eP))) break loop;
		aV.hv[fB]++
	}
	loop: for (; aV.hv[fB] < aV.hw[fB];) {
		for (eP = aV.hu[fB]; eP >= aV.ht[fB]; eP--)
			if (aQ.tK(fB, 4 * (aV.hw[fB] * bI.eT + eP))) break loop;
		aV.hw[fB]--
	}
	loop: for (; aV.ht[fB] < aV.hu[fB];) {
		for (eR = aV.hw[fB]; eR >= aV.hv[fB]; eR--)
			if (aQ.tK(fB, 4 * (eR * bI.eT + aV.ht[fB]))) break loop;
		aV.ht[fB]++
	}
	loop: for (; aV.ht[fB] < aV.hu[fB];) {
		for (eR = aV.hw[fB]; eR >= aV.hv[fB]; eR--)
			if (aQ.tK(fB, 4 * (eR * bI.eT + aV.hu[fB]))) break loop;
		aV.hu[fB]--
	}
}

function eB(player, iT) {
	return 0 === bV.eG[player] || bV.eG[player] !== bV.eG[iT]
}

function gq(player, iT) {
	for (var d, aPO = aS.fN(player), z = 0; z < aPO; z++)
		if (0 === aS.fO(player, z))
			if ((d = aS.fT(player, z)) === a1.eF) {
				if (iT === a1.eF) return !1;
				if (go(iT)) return !0
			} else if (b2.fd.kD(d))
		if (iT === a1.eF) {
			if (go(d)) return !0
		} else if (gs(iT, d)) return !0;
	return !1
}

function go(player) {
	for (var z, fp, eI = aV.fw[player].length, eK = aQ.eK, eL = 3; 0 <= eL; eL--)
		for (fp = eK[eL], z = 0; z < eI; z++)
			if (aQ.e9(aV.fw[player][z] + fp)) return !0;
	return !1
}

function aAY(player) {
	for (var z, fp, eI = aV.fw[player].length, eK = aQ.eK, eL = 3; 0 <= eL; eL--)
		for (fp = eK[eL], z = 0; z < eI; z++)
			if (aQ.iW(aV.fw[player][z]) && aQ.e9(aV.fw[player][z] + fp)) return !0;
	return !1
}

function gs(yd, ye) {
	for (var z, dt, fp, fo, aNJ = aV.fw[yd].length, aNK = aV.fw[ye].length, eK = (aNK < aNJ && (dt = yd, yd = ye, ye = dt, dt = aNJ, aNJ = aNK, 0), aQ.eK), eL = 3; 0 <= eL; eL--)
		for (fp = eK[eL], z = 0; z < aNJ; z++)
			if (fo = aV.fw[yd][z] + fp, aQ.fq(fo) && aQ.eA(fo) === ye) return !0;
	return !1
}

function aAZ(yd, ye) {
	for (var z, fp, fo, aNJ = aV.fw[yd].length, eK = aQ.eK, eL = 3; 0 <= eL; eL--)
		for (fp = eK[eL], z = 0; z < aNJ; z++)
			if (aQ.iW(aV.fw[yd][z]) && (fo = aV.fw[yd][z] + fp, aQ.fq(fo)) && aQ.eA(fo) === ye) return !0;
	return !1
}

function aPP() {
	this.iC = function() {
		aB.iC(), aM.iC(), an.iC(), aq.kt.iC(), am.a85(), bU.dO && (bU.dO = !1, aN.qn())
	}
}

function aPQ() {
	this.ds = bU.ds, this.o0 = 0, this.aPR = 0, this.a80 = 0, this.aPS = null, this.aPT = 7, this.a1n = 0, this.dH = function() {
		this.a80 = 0, this.aPS = [], this.o0 = 0, this.aPR = 0
	}, this.aJj = function(a0) {
		var z;
		if (a1.gd) this.a5i(a0);
		else if (this.aPS.push(a0), 2 === a1.v9) {
			for (z = 0; z < this.aPS.length; z++) b0.nJ.iC(this.aPS[z]);
			this.aPS = []
		}
	}, this.a5i = function(a0) {
		b0.nJ.iC(a0), b1.iC(), aJ.a5i(this.a80), this.a80 === a1.zV ? (a1.oH.iC(), this.a80 = 0, this.o0 = 0, this.aPR = 0, this.ds = bU.ds) : (this.a80++, aU.zO(), aU.l1(!0), bQ.a6F())
	}, this.iC = function() {
		an.iC(), a1.gd ? (bU.dO = aJ.a5i(-1) || bU.dO, l3()) : (0 !== this.o0 || bU.ds >= this.ds && (this.ds += bU.a5h * Math.floor(1 + (bU.ds - this.ds) / bU.a5h), 2 === a1.v9 ? kr() : this.aPU(), this.o0++, 27 < bU.ds - this.a1n)) && this
		.aPV(), ky(), bU.dO && (bU.dO = !1, tN()), this.a1n = bU.ds
	}, this.aPV = function() {
		bU.dO = !0, l0(), this.o0 = 0
	}, this.aPU = function() {
		var rK, z;
		if (this.aPR !== 7 * this.a80) ku(), bQ.a6F();
		else {
			rK = !1;
			loop: for (; this.aPW() && (rK = !0, ku(), 2 !== a1.v9) && 0 < this.aPS.length;)
				for (z = this.aPT - 2; 0 <= z; z--)
					if (ku(), 2 === a1.v9) break loop;
			rK ? bQ.a6F() : (kr(), bQ.zR())
		}
	}, this.aPW = function() {
		return 0 < this.aPS.length && (this.a80++, b0.nJ.iC(this.aPS[0]), this.aPS.shift(), !0)
	}
}

function aPX() {
	var aPY, aPZ, aPa, a80, aPb, o0 = 0,
		ds = bU.ds;

	function aPe() {
		! function() {
			if (!a1.gd) return;
			if (a1.jn) return;
			if (aPb % 7 != 0) aPb++;
			else if (a80 === a1.zV) {
				if (!aPh()) return;
				aJ.a5i(a80), a1.oH.iC()
			} else {
				if (!aPh()) return;
				aPb++, a80++, aU.zO(), aU.l1(!0)
			}
			return 1
		}() && aPh() && ku()
	}

	function aPf() {
		o0 = 0, (a1.gd ? (bU.dO = aJ.a5i(a80 - (aPb % 7 == 0 ? 0 : 1) + aPb % 7 / 7) || bU.dO, l3) : a9.gS || !b3.zq ? l3 : (bU.dO = !0, l0))()
	}

	function aPh() {
		var z, eI, aPi = b1.oF.aKn,
			ez = b1.oF.aKo,
			f1 = b1.oF.aKp,
			f3 = b1.oF.aKq,
			aPj = b1.oF.aKr,
			aPk = b1.oF.aKs;
		if (!(aPY >= aPk.length)) {
			if (aPk = aPk[aPY], aPj[aPY]) {
				for (eI = aPZ + aPk, z = aPZ; z < eI; z++) b0.nJ.o2(aPi[z], ez[z], f1[z], f3[z]);
				aPZ += aPk, aPY++
			} else ++aPa >= aPk && (aPY++, aPa = 0);
			return 1
		}
		aA.wY("Replay file smaller than expected."), b3.xU(!1), a1.v9 = 2
	}
	this.aPR = 0, this.dH = function() {
		aPb = a80 = aPa = aPZ = aPY = 0
	}, this.iC = function() {
		var aNg;
		an.iC(), b3.a3E() < 1.7 ? 0 === o0 ? bU.ds >= ds && (aNg = bU.a5h / b3.a3E(), ds += aNg * Math.floor(1 + (bU.ds - ds) / aNg), 2 === a1.v9 || a9.gS || !b3.zq ? kr() : (aPe(), bQ.a6F()), o0++) : aPf() : function() {
			var aNg;
			if (bU.ds >= ds)
				if (2 === a1.v9 || a9.gS || !b3.zq) kr(), ds = bU.ds;
				else {
					for (aNg = bU.a5h / b3.a3E(), 16 < (bU.ds - ds) / aNg && (ds = bU.ds - 16 * aNg); bU.ds >= ds && 2 !== a1.v9;) ds += aNg, aPe();
					bQ.a6F()
				} aPf()
		}(), ky(), bU.dO && (bU.dO = !1, tN())
	}, this.vJ = function() {
		aPY !== b1.oF.aKs.length && aPY + 1 !== b1.oF.aKs.length && aA.wY("Replay file larger than expected.")
	}
}

function aPl() {
	var o0 = 0,
		ds = bU.ds;
	this.aPR = 0, this.iC = function() {
		an.iC(), a1.gd ? l3() : 0 === o0 ? bU.ds >= ds && (ds += bU.a5h * Math.floor(1 + (bU.ds - ds) / bU.a5h), 2 === a1.v9 || a9.gS ? kr() : (ku(), bQ.a6F()), o0++) : ((a9.gS ? l3 : (bU.dO = !0, l0))(), o0 = 0), ky(), bU.dO && (bU.dO = !1,
		tN())
	}
}

function dB() {
	this.vI = null, this.dO = !1, this.ds = 0, this.a5h = 56;
	var aPm = 0;

	function aPn() {
		bU.ds = aPm = performance.now(), bU.vI.iC(), window.requestAnimationFrame(aPn)
	}
	this.dH = function() {
		this.zo(), window.requestAnimationFrame(aPn), this.ds = performance.now()
	}, this.zh = function() {
		a1.gR ? (this.vI = new aPX, this.vI.dH()) : a1.jn ? this.vI = new aPl : (this.vI = new aPQ, this.vI.dH())
	}, this.zo = function() {
		this.vI = new aPP, this.dO = !0
	}, this.iC = function() {
		this.vI.aPR++
	}, this.jK = function() {
		return this.vI.aPR
	}, this.aJR = function() {
		var dt = performance.now();
		dt < aPm + 1e3 || (this.ds = dt, this.vI.iC())
	}
}

function cd() {
	var lV = 0,
		aPo = !0;

	function aPq(od) {
		8 !== aN.wU() || 2 !== aV.yb[a1.e2] && (0 !== aV.lI[a1.e2] || a1.gd) || aA.a1T(od)
	}
	this.iC = function() {
		var dt, a1q;
		bU.ds > lV && (lV = bU.ds + 2500, dt = new Date, a1q = dt.getUTCSeconds(), aPo ? a1q < 45 && (aPo = !1) : a1q < 45 || (aPo = !0, (a1q = dt.getUTCMinutes() + 1) % 15 == 0 && aPq(30 === a1q ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function cV() {
	var lk, ll, ly, lz, aPr = 0,
		aPs = 0;

	function aPu() {
		return Math.pow(Math.pow(ly - lk, 2) + Math.pow(lz - ll, 2), .5)
	}

	function aPt(d) {
		lk = an.p2 * d.touches[0].clientX, ll = an.p2 * d.touches[0].clientY, ly = an.p2 * d.touches[1].clientX, lz = an.p2 * d.touches[1].clientY
	}
	this.wu = function(d) {
		return 1 < d.touches.length ? (aPs = bU.ds, aPr = 3, aPt(d), a8.qK(), !0) : (aPr = 0, !1)
	}, this.wv = function(d) {
		var aE8, hO, hP;
		return 0 !== a1.v9 && 1 < d.touches.length && (aPr = Math.max(aPr - 1, 0), a5.m3() && (aE8 = aPu(), aPt(d), d = aPu(), hO = Math.floor((lk + ly) / 2), hP = Math.floor((ll + lz) / 2), aF.a3e(hO, hP, Math.max(.125, d) / Math.max(.125,
			aE8)), bU.dO = !0), !0)
	}, this.xJ = function() {
		var eP, eR;
		return !!(aPr && (aPr = 0, bU.ds < aPs + 500)) && (eP = (lk + ly) / 2, eR = (ll + lz) / 2, a8.xC(eP, eR), a8.click(eP, eR, !0) && (bU.dO = !0), !0)
	}
}

function cm() {
	this.size = 0, this.o0 = 0, this.a0 = null, this.dH = function(a0) {
		this.o0 = 0, this.a0 = a0, this.size = a0.length
	}, this.wg = function() {
		this.a0 = null
	}, this.o1 = function(size) {
		for (var el = 0, a0 = this.a0, m3 = this.o0 + size - 1, z = this.o0; z <= m3; z++) el |= (a0[z >> 3] >> 7 - (7 & z) & 1) << m3 - z;
		return this.o0 += size, this.o0 > 8 * this.size && console.log("error unwrapper"), el
	}, this.aJx = function(size) {
		var ec = size >> 1;
		return (1 << ec) * this.o1(size - ec) + this.o1(ec)
	}, this.aPv = function(size) {
		for (var ey = new Array(size), z = 0; z < size; z++) ey[z] = this.o1(10);
		return a7.sA(ey)
	}, this.aJw = function(aLD) {
		return this.size === b4.aJq(aLD)
	}
}

function d5() {
	this.aLu = 0, this.aLv = 0, this.aLq = 0, this.aLr = 0, this.aLs = 0, this.aLt = 0, this.a6G = [0, 0, 0, 0], this.m2 = function() {
		this.aLu = aF.tP(), this.aLv = aF.tQ(), this.aLq = -this.aLu, this.aLr = -this.aLv, this.aLs = an.t / hh, this.aLt = an.ir / hh, this.a6G[0] = Math.floor(this.aLq), this.a6G[1] = Math.floor(this.aLr), this.a6G[2] = Math.floor(this.a6G[
			0] + this.aLs + 1), this.a6G[3] = Math.floor(this.a6G[1] + this.aLt + 1), bQ.a6D = !0
	}
}

function cW() {
	var a2N, lV;
	this.dH = function() {
		a2N = 1, lV = 0
	}, this.iC = function() {
		0 < a2N && (lV = 0 === lV ? bU.ds + 16 : lV, a2N = (a2N -= .001 * (bU.ds - lV)) < 0 ? 0 : a2N, lV = bU.ds, bU.dO = !0)
	}, this.qn = function() {
		0 < a2N && (qo.fillStyle = "rgba(0,0,0," + a2N + ")", qo.fillRect(0, 0, an.t, an.ir))
	}
}

function cZ() {
	function aPy(map, eP, eR, t, ir) {
		map >= bI.aBG || (bI.fz === map && (qo.fillStyle = p.my, qo.fillRect(eP, eR, t, ir), qo.fillStyle = p.mL), qo.strokeRect(eP, eR, t, ir), qo.fillText(bI.ji.sh[map].name, Math.floor(eP + .5 * t), Math.floor(eR + .55 * ir)))
	}
	this.to = !1, this.a96 = [0, 0, 0, 0], this.show = function() {
		this.to = !0, this.resize(), bU.dO = !0
	}, this.resize = function() {
		var aNJ = bB.ek(bI.aBG + bI.aBG % 2, 2),
			aNJ = an.ir - aNJ * bR.gap;
		m.n.uE() ? this.a96[2] = Math.floor(.75 * an.min) : this.a96[2] = Math.floor(.5 * an.min), this.a96[3] = Math.floor(1.25 * this.a96[2]), this.a96[3] > aNJ && (this.a96[3] = aNJ, this.a96[2] = Math.floor(aNJ / 1.2)), this.a96[0] = Math
			.floor((an.t - this.a96[2]) / 2), this.a96[1] = Math.floor((an.ir - this.a96[3]) / 2)
	}, this.wq = function(eP, eR) {
		return !(eP < this.a96[0] || eR < this.a96[1] || eP > this.a96[0] + this.a96[2] || eR > this.a96[1] + this.a96[3])
	}, this.gV = function(eP, eR) {
		var a32, aNJ = bB.ek(bI.aBG + bI.aBG % 2, 2);
		return bU.dO = !0, eP < this.a96[0] || eR < this.a96[1] || eP > this.a96[0] + this.a96[2] || eR > this.a96[1] + this.a96[3] ? !(this.to = !1) : (a32 = Math.floor(.17 * this.a96[3]), eR < this.a96[1] + a32 ? eP > this.a96[0] + this.a96[
			2] - a32 && (this.to = !1) : (eR = (eR = Math.floor(aNJ * (eR - this.a96[1] - a32 - .00576 * an.oy) / (this.a96[3] - a32 - .01152 * an.oy))) < 0 ? 0 : aNJ - 1 < eR ? aNJ - 1 : eR, eP > this.a96[0] + this.a96[2] / 2 && (eR += aNJ),
				eR >= bI.aBG || bI.v(eR, Math.floor(16384 * Math.random()))), !0)
	}, this.qn = function() {
		var z, ll, a32 = Math.floor(.17 * this.a96[3]),
			aNJ = bB.ek(bI.aBG + bI.aBG % 2, 2),
			gap = .6 * .01152 * an.oy,
			a9K = (this.a96[3] - a32 - (aNJ + 1) * gap) / aNJ,
			q7 = Math.floor((this.a96[2] - 3 * gap) / 2);
		for (qo.lineWidth = bR.uH, b2.ow.textAlign(qo, 1), b2.ow.textBaseline(qo, 1), qo.fillStyle = p.mI, qo.fillRect(this.a96[0], this.a96[1] + a32, this.a96[2], this.a96[3] - a32), qo.fillStyle = p.my, qo.fillRect(this.a96[0], this.a96[1],
				this.a96[2], a32), qo.strokeStyle = p.mL, qo.strokeRect(this.a96[0], this.a96[1], this.a96[2], this.a96[3]), qo.fillStyle = p.mL, qo.fillRect(this.a96[0], this.a96[1] + a32, this.a96[2], 2), qo.font = b2.ow.q5(1, .48 * a32), qo
			.fillText(L(109), Math.floor(this.a96[0] + this.a96[2] / 2), Math.floor(this.a96[1] + .55 * a32)), qo.font = b2.ow.q5(1, .48 * a9K), z = aNJ - 1; 0 <= z; z--) ll = Math.floor(this.a96[1] + a32 + gap + z * (a9K + gap)), aPy(z, this
			.a96[0] + gap, ll, q7, a9K), aPy(z + aNJ, this.a96[0] + q7 + 2 * gap, ll, q7, a9K);
		a9.a0g(Math.floor(this.a96[0] + this.a96[2] - .7 * a32), Math.floor(this.a96[1] + .3 * a32), Math.floor(.4 * a32)), qo.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function u() {
	this.size = 0, this.o0 = 0, this.a0 = null, this.dH = function(a0) {
		this.o0 = 0, this.a0 = a0, this.size = a0.length
	}, this.v = function(aLD) {
		return this.dH(new Uint8Array(this.aJq(aLD))), this.a0
	}, this.wg = function() {
		this.a0 = null
	}, this.w = function(size, a1s) {
		for (var a0 = this.a0, m3 = this.o0 + size - 1, z = this.o0; z <= m3; z++) a0[z >> 3] |= (a1s >> m3 - z & 1) << 7 - (7 & z);
		this.o0 += size, this.o0 > 8 * this.size && console.log("error wrapper")
	}, this.aJp = function(size, a1s) {
		var ec = size >> 1,
			eL = 1 << ec;
		this.w(size - ec, bB.ek(a1s, eL)), this.w(ec, a1s % eL)
	}, this.aPz = function(size) {
		for (var a0 = this.a0, m3 = this.o0 + size, z = this.o0; z < m3; z++) a0[z >> 3] &= 255 ^ 128 >>> (7 & z)
	}, this.aJq = function(aLD) {
		return aLD + 7 >> 3
	}, this.aQ0 = function(ey, ib, m3, aQ1) {
		for (var z = ib; z < m3; z++) this.w(aQ1, ey[z])
	}
}
a(), self.aiCommand746 = function(el) {
	0 === el ? bb() : 1 !== el || !m || 1 !== m.id || m.em < 14 || b9.en()
}, setTimeout(bb, 1e4), window.onload = function() {
	bb()
};